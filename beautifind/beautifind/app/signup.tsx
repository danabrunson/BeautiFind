import { useRouter } from 'expo-router';
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
          <Text style={styles.title}>Sign Up</Text>
          <TextInput style={styles.input} placeholder='First Name' placeholderTextColor={'grey'}/>
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'grey'}/>
          <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'grey'} secureTextEntry={true}/>
          <TextInput style={styles.input} placeholder='Re-enter your Password' placeholderTextColor={'grey'} secureTextEntry={true}/>
          <Pressable style={({pressed}) => [styles.signupButton, isHovered && styles.hoverSignupButton, pressed && styles.signupButton]} 
          onHoverIn={() => setIsHovered(true)} 
          onHoverOut={() => setIsHovered(false)}
          onPress={() => router.navigate('/search')}>
            <Text style={styles.signupButtonText}>Sign Up</Text></Pressable>
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
  signupButton: {
    marginTop: 30,
    backgroundColor: '#ffd3db',
    height: 50,
    width: 300,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 400,
  }, 

  signupButtonText: {
    color: "#ffffff"
  },

  hoverSignupButton: {
    backgroundColor: '#9d8189'
  },

  forgotPassword: {
    marginTop: 10,
  }
});
