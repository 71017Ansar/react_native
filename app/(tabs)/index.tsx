import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>This is home screen for react native ansar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
  },
  content: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#79959c",
  },
});
