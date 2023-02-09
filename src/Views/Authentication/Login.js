import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default function Login() {
  const {height, width} = Dimensions.get('window');
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(email, password);
  const loginHandler = () => {
    if (!email || !password) {
      Alert.alert('Sorry!', 'Please Enter your Email & Password');
    } else {
      navigation.navigate('Home');
    }
  };
  return (
    <ScrollView style={styles.parent_view}>
      {/* BACKGROUND IMAGE */}
      <ImageBackground
        source={require('../../Assets/Images/login_image2.jpg')}
        imageStyle={{resizeMode: 'cover'}}
        style={{height: height / 2.5}}></ImageBackground>

      {/* BOTTOM VIEW */}
      <View style={styles.bottom_view}>
        <View style={{padding: 40}}>
          {/* INPUTS  */}
          <TextInput
            style={styles.input_email}
            placeholder="Email"
            onChangeText={e => setEmail(e)}
            value={email}
            placeholderTextColor="gray"
          />
          <View style={styles.password_view}>
            <TextInput
              style={styles.input_password}
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              onChangeText={e => setPassword(e)}
              value={password}
              placeholderTextColor="gray"
            />
            <Feather
              name={secureTextEntry ? 'eye-off' : 'eye'}
              color={'#000'}
              size={20}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          </View>
          {/* FORGOT PASSWORD BUTTON */}
          <TouchableOpacity style={styles.forgot_password} activeOpacity={0.5}>
            <Text style={styles.forgot_text}>forgot password</Text>
          </TouchableOpacity>
          {/* LOG IN BUTTON */}
          <TouchableOpacity activeOpacity={0.8} onPress={loginHandler}>
            <LinearGradient
              colors={['#3f2b96', '#a8c0ff']}
              useAngle={true}
              angle={46}
              angleCenter={{x: 0.5, y: 0.5}}
              style={styles.btn}>
              <Text style={styles.btn_text}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* SOCIAL LINKS BUTTONS */}
          <View style={styles.social_links_view}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: 'gray',
                fontWeight: 'bold',
              }}>
              or log in by
            </Text>
            <View style={styles.social_links}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 25,
                  backgroundColor: '#eee',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 8,
                }}
                onPress={() => Linking.openURL('https://www.irenictech.com/')}>
                <FontAwesome name="google" color={'#3f2b96'} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 25,
                  backgroundColor: '#eee',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 8,
                }}
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/irenictech')
                }>
                <AntDesign name="facebook-f" color={'#3f2b96'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
          {/* SIGN UP BUTTON */}
          <View style={styles.signUp_view}>
            <Text style={{color: 'gray'}}>Don't have account?</Text>
            <TouchableOpacity style={styles.signUp} activeOpacity={0.5}>
              <Text style={styles.signUp_text}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottom_view: {
    backgroundColor: '#fff',
    flex: 1.5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 50,
  },
  input_email: {
    backgroundColor: '#eee',
    borderRadius: 25,
    height: 46,
    paddingLeft: 20,
    color: '#000',
  },
  password_view: {
    height: 46,
    borderRadius: 25,
    backgroundColor: '#eee',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input_password: {
    color: '#000',
    width: '90%',
  },
  forgot_password: {
    marginVertical: 15,
    alignItems: 'center',
  },
  forgot_text: {
    color: '#3f2b96',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 46,
    alignSelf: 'center',
    marginVertical: 15,
  },
  btn_text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  social_links_view: {
    alignItems: 'center',
    marginVertical: 15,
  },
  social_links: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  signUp_view: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUp_text: {
    color: '#3f2b96',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginHorizontal: 2,
  },
});
