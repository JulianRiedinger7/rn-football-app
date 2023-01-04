import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants";
import { addToFavorites } from "../../store/gamesSlice";

const Detail = () => {
  const [favorite, setFavorite] = useState(false);
  const game = useSelector((state) => state.games.selected);
  const dispatch = useDispatch();

  const {
    title,
    developer,
    game_url,
    genre,
    platform,
    release_date,
    short_description,
    thumbnail,
  } = game || {};

  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const onHandleFavorite = () => {
    setFavorite(!favorite);
    dispatch(addToFavorites(game));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.favoriteContainer}
          onPress={onHandleFavorite}
        >
          <Text style={styles.favorite}>
            {favorite ? "Remove Favorite" : "Add Favorite"}
          </Text>
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            color={COLORS.tertiary}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Genre: {genre}</Text>
        <Text style={styles.info}>Platform: {platform}</Text>
      </View>
      <View style={styles.bottomInfoContainer}>
        <Text style={styles.description}>{short_description}</Text>
        <Text style={styles.info}>Release Date: {release_date}</Text>
        <Text style={styles.info}>Developer: {developer}</Text>
        <Button
          title="Check Website"
          color={COLORS.primary}
          onPress={() => handlePress(game_url)}
        />
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
    color: COLORS.primaryDark,
  },
  favoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favorite: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.primaryDark,
  },
  image: {
    width: "90%",
    height: 300,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomInfoContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  info: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 5,
    color: COLORS.text,
  },
  description: {
    lineHeight: 22,
    color: COLORS.text,
  },
});
