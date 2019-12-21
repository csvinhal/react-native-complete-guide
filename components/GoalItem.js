import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GoalItem = props => {
  const { id, onDelete } = props;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalItem;
