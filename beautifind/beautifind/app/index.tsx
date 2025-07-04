import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function LoginScreen() {

  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Text style={styles.title}>Login or Sign up</Text>
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'grey'}/>
          <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'grey'} secureTextEntry={true}/>
          <Pressable style={({pressed}) => [styles.loginButton, isHovered && styles.hoverLoginButton, pressed && styles.loginButton]} 
          onHoverIn={() => setIsHovered(true)} 
          onHoverOut={() => setIsHovered(false)}
          onPress={() => router.navigate('/search')}>
            <Text style={styles.loginButtonText}>Login</Text></Pressable>
          <Link href="/signup"style={styles.forgotPassword}>Don't have an account? Register Here</Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
    borderRadius: 8,
    padding: 20,
},

  title: { 
    fontSize: 24,
    marginBottom: 20 
},
  input: {
    fontSize: 17, 
    padding: 15,
    color: 'black',
    width: 300,
    backgroundColor: '#f0f0f0' ,
    borderRadius: 8,
    margin: 8,

}, 

  loginButton: {
    backgroundColor: '#ffd3db',
    height: 50,
    width: 300,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 400,
  }, 

  loginButtonText: {
    color: "#ffffff"
  },

  hoverLoginButton: {
    backgroundColor: '#9d8189'
  },

  forgotPassword: {
    marginTop: 10,
  }
});
