import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { RootStackParamList } from '@/types/navigation'; 

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Homepage'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); 

  return (
    <ThemedView>
      <ThemedText type="title">Welcome to Home Page</ThemedText>
      <Button title="Go to Detection" onPress={() => navigation.navigate('detection')} />
      <Button title="Go to Live Location" onPress={() => navigation.navigate('location')} />
      <Button title="Go to Setting" onPress={() => navigation.navigate('setting')} />
    </ThemedView>
  );
};

export default HomeScreen;
