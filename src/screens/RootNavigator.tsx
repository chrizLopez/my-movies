import React from "react";

import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../utils/routes";

import { MovieDetailsScreen } from "./MovieScreenDetail/MovieDetails.screen";
import { MoviesScreen } from "./MovieScreen/Movies.screen";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return(
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name={routes.MOVIES}
            component={MoviesScreen}
            options={{ title: 'Movie List' }}
          />
          <Stack.Screen
            name={routes.MOVIE_DETAIL}
            component={MovieDetailsScreen}
            options={{ title: 'Movie Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};