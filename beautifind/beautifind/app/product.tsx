import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductPage() {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.productTitle}>Product Title</Text>
                    <Text style={styles.productSubtitle}>Product Subtitle</Text>
                    <Image style={styles.productImage} source={require('../assets/images/beautifind_logo.png')} alt="Image Here"></Image>
                    <View style={styles.bundle}>
                    <Text style={styles.productPrice}>Price</Text>
                    <Pressable>
                        <FontAwesome style={styles.favorites} name="heart-o"/>
                    </Pressable>
                    </View>
                    <Pressable style={styles.purchaseButton}>
                        <Text style={styles.purchaseButtonText}>Where to Purchase</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    productTitle: {
        fontSize: 28,
        fontWeight: 700,
        padding: 20,
    },

    productSubtitle: {
        padding: 15,
        fontSize: 20,
    },

    productImage: {
        margin: 20,
        width: 500,
        height: 500,
        borderRadius: 10,
    },

    productPrice: {
        margin: 30,
    },

    bundle: {
        flexDirection: 'row',
    },

    purchaseButton: {
        backgroundColor: '#9d8189',
        padding: 15,
        marginBottom: 0,
        borderRadius: 12,
    },

    purchaseButtonText: {
        fontSize: 15,
        fontWeight: 500,
        color: '#ffffff',
    },

    favorites: {
        fontSize: 20,
        marginBottom: 50,
    },

});