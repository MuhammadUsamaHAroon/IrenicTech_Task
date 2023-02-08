import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../src/Views/Authentication/Login';
import HomeScreen from '../../src/Views/Home';

const Stack = createNativeStackNavigator();

export default function stackNavigator() {
  return <MainStack />;
}

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
