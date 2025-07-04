import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Search() {
  const router = useRouter();
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.pageHeader}>
        <View style={styles.searchBar}>
          <FontAwesome style={styles.searchIcon}name="search"/>
          <TextInput placeholder='Search'></TextInput>
        </View>
        <View style={styles.filterBox}>
          <Pressable>
            <Text style={styles.filterBoxTitle}>Filters</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.searchingFor}>Searching for: "Search Input Goes Here"</Text>
      <View style={styles.products}>
        <Pressable onPress={() => router.navigate('/product')}>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.productCard}>
            <Image style={styles.image} source={require('/Users/danaelaine/Documents/GitHub/BeautiFind/beautifind/beautifind/assets/images/beautifind_logo.png')}></Image>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productSubtitle}>Product Subtitle</Text>
            <Text style={styles.productPrice}>Price</Text>
          </View>
        </Pressable>
    
      </View>
      
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  pageHeader: {
    flexDirection: 'row',
  },

  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    color: 'black',
    padding: 8,
    borderRadius: 20,
    width: 300,
    marginTop: 40,
    fontSize: 20,
    marginEnd: 50,
  },

  filterBox: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#f4acb7',
    borderRadius: 20,
    fontSize: 20,
    width: 100,
    alignItems: 'center',
  },

  filterBoxTitle: {
    fontWeight: 500,
  },

  searchingFor: {
    margin: 20,
    fontSize: 13,
    fontWeight: 500,
  },

  searchIcon: {
    padding: 8,
    fontSize: 13,
  },

  products: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    margin: 10,
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 20,
  },

  productTitle: {
    fontSize: 15,
    fontWeight: 500,
  },

  productSubtitle: {
    fontWeight: 200,
    fontSize: 13,
  },

  productPrice: {
    fontSize: 14,
  },

});
