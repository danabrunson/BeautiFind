import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style= {styles.viewStyle}>
      <Text>All About BeautiFind!</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  viewStyle : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

