import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.games.favorites);

  const renderItem = ({ item }) => <Text>{item.title}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(i) => i.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
});
