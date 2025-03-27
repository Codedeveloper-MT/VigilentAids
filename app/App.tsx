import React from 'react';
import { SafeAreaView } from 'react-native';  // Import SafeAreaView
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';  // Make sure you have this import for gesture handling
import IndexScreen from './(tabs)/index';
import LoginScreen from './(tabs)/LoginScreen';
import { RootStackParamList } from '@/types/navigation';
import HomeScreen from './(tabs)/HomeScreen';
import LocationScreen from './(tabs)/LocationScreen';
import SettingScreen from './(tabs)/SettingScreen';
import DectectionScreen from './(tabs)/DectectionScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={IndexScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="Homepage" component={HomeScreen} />
          <Stack.Screen name="location" component={LocationScreen} />
          <Stack.Screen name="setting" component={SettingScreen} />
          <Stack.Screen name="detection" component={DectectionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
