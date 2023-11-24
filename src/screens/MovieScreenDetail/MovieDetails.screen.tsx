import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { heartFilled, heartEmpty, backArrow } from "../../assets/icons";
import { addToFavoriteRequest } from "../../reducers/movie/MovieAction";

export const MovieDetailsScreen = ({ navigation, route: { params } }: any) => {
  const dispatch: any = useDispatch();
  const { item, activeTab } = params;

  const [itemData, setItemData] = useState(item)

  const handleAddFavorite = (id: number) => {
    dispatch(addToFavoriteRequest(id));
    const newItem = { ...itemData };
    newItem.isFavorite = !newItem.isFavorite;
    setItemData(newItem);
  }

  const handleBackPress = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.itemView} key={itemData.trackId}>
        <Image source={{ uri: itemData.artworkUrl100 }} style={styles.imgBanner} />
        <View style={styles.titleView}>
          <Text style={styles.itemName}>{itemData.trackName}</Text>
        </View>
        <View>
          <View style={styles.genreView}>
            <Text style={styles.genreTxt}>Genre:</Text>
            <Text>{itemData.primaryGenreName}</Text>
          </View>
          <View style={styles.genreView}>
            <Text style={styles.genreTxt}>Price:</Text>
            <Text>{itemData.trackPrice}</Text>
          </View>
          <View style={styles.longDescView}>
            <Text>{itemData.longDescription}</Text>
          </View>
        </View>
      </View>
      {activeTab !== 2 && (
        <TouchableOpacity style={styles.favoriteButton} onPress={() => handleAddFavorite(itemData.trackId)}>
          <Image
            source={itemData.isFavorite ? heartFilled : heartEmpty}
            style={styles.heartIco}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.backBtn} onPress={() => handleBackPress()}>
        <Image
          source={backArrow}
          style={styles.backIco}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
};