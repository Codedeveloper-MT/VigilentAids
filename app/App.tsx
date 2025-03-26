import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './(tabs)/WelcomeScreen';
import LoginScreen from './(tabs)/LoginScreen';
import { RootStackParamList } from '@/types/navigation';  
import HomeScreen from './(tabs)/HomeScreen';
import LocationScreen from './(tabs)/LocationScreen';
import SettingScreen from './(tabs)/SettingScreen';
import DectectionScreen from './(tabs)/DectectionScreen';

const Stack = createStackNavigator<RootStackParamList>();  

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Homepage" component={HomeScreen} />
        <Stack.Screen name="location" component={LocationScreen} />
        <Stack.Screen name="setting" component={SettingScreen} />
        <Stack.Screen name="detection" component={DectectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
