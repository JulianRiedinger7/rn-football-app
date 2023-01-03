import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";

const Detail = () => {
  const game = useSelector((state) => state.games.selected);
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text>Genre: {genre}</Text>
        <Text>Platforms: {platform}</Text>
      </View>
      <View style={styles.bottomInfoContainer}>
        <Text>{short_description}</Text>
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
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
    justifyContent: "space-around",
  },
  bottomInfoContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
