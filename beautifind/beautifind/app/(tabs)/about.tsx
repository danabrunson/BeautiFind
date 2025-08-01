import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style= {styles.container}>
      <Text style={styles.title}>All About BeautiFind!</Text>
      <Text style={styles.aboutText}>BeautiFind is an application designed to serve as a database for all your favorite beauty products-- whether that be for hair, skin, or makeup.
        Search for your favorite products, add them to your favorites list, and find out where you can purchase them! 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
  title: {
    fontSize: 28,
    fontWeight: 500,
    color: 'black',
    marginTop: 40,
  },

  aboutText: {
    margin: 40,
    padding: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
})

