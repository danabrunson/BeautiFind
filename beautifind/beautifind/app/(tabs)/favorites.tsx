import { StyleSheet, Text, View } from 'react-native';

export default function Match() {
  return (
    <View style={styles.container}>
      <Text>Match products</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
