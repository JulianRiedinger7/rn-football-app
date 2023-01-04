import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
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
    paddingVertical: 5,
  },
  info: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 5,
  },
  description: {
    lineHeight: 22,
  },
});
