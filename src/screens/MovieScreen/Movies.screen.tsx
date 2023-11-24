import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteRequest, getMoviesRequest, searchMoviesRequest } from "../../reducers/movie/MovieAction";
import { heartFilled, heartEmpty } from "../../assets/icons";
import styles from "./styles";
import { routes } from "../../utils/routes";
import {debounce} from 'lodash';

export const MoviesScreen = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  const {movieList: allMovies, searchResult} = useSelector(({movie}) => movie);
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    if (allMovies.length === 0) {
      dispatch(getMoviesRequest());
    }
  }, []);

  useEffect(() => {
    setIsSearchLoading(false);
  }, [searchResult]);
  
  const handleAddFavorite = (id: number) => {
    dispatch(addToFavoriteRequest(id));
  }

  const handleSelect = (item: any) => {
    navigation.navigate(routes.MOVIE_DETAIL, {
      item: item,
      activeTab: activeTab
    })
  };

  const handleSearch = (paramSearch: string) => {
    setIsSearchLoading(true);
    dispatch(searchMoviesRequest(paramSearch));
  }

  const debouncedSearch = useCallback(
    debounce((text) => handleSearch(text), 1000),
    [] // Pass searchText to the dependency array
  );

  const renderHeader = () => {
    return (
      <View style={styles.mainHeader}>
        <View style={styles.tabHeader}>
          <TouchableOpacity style={activeTab === 0 ? styles.activeTab : styles.notActiveTab} onPress={() => setActiveTab(0)}>
            <Text style={styles.tabText}>All Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={activeTab === 1 ? styles.activeTab : styles.notActiveTab} onPress={() => setActiveTab(1)}>
            <Text style={styles.tabText}>Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderHeaderSearch = () => {
    return (
      <View>
        <TextInput
          style={styles.txtInputStl}
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            debouncedSearch(text)
          }}
          onFocus={() => setActiveTab(2)}
          onBlur={() => {
            setSearchText('');
          }}
        />
      </View>
    );
  }

  const renderItem = ({item}: any) => {
    if (activeTab === 1 && item.isFavorite === false) return null;
    return(
      <TouchableOpacity style={styles.itemView} key={item.trackId} onPress={() => handleSelect(item)}>
        <Image source={{uri: item.artworkUrl100}} style={styles.imgBanner} />
        <View style={styles.titleView}>
          <Text style={styles.itemName}>{item.trackName}</Text>
        </View>
        {activeTab !== 2 && (
          <TouchableOpacity style={styles.favoriteButton} onPress={() => handleAddFavorite(item.trackId)}>
            <Image
              source={item.isFavorite ? heartFilled : heartEmpty}
              style={styles.heartIco}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      {(activeTab === 0 || activeTab === 2) && renderHeaderSearch()}

      {activeTab === 0 && (
        <>
          <FlatList
            data={allMovies}
            renderItem={renderItem}
            keyExtractor={item => item.trackId}
            contentContainerStyle={styles.contentView}
          />
        </>
      )}
      {activeTab === 1 && (
        <FlatList
          data={allMovies}
          renderItem={renderItem}
          keyExtractor={item => item.trackId}
          contentContainerStyle={styles.contentView}
        />
      )}
      {activeTab === 2 && (
        <FlatList
          data={searchResult}
          renderItem={renderItem}
          keyExtractor={item => item.trackId}
          contentContainerStyle={styles.contentView}
          refreshing={isSearchLoading}
          refreshControl={
            <RefreshControl
              refreshing={isSearchLoading}
              size="large"
            />
          }
        />
      )}
    </View>
  )
};