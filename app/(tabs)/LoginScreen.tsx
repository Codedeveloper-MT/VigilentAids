import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { RootStackParamList } from '@/types/navigation';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'login'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <ThemedView>
      <ThemedText type="title">Details Screen</ThemedText>
      <Button title="Go to HomePage" onPress={() => navigation.navigate("Homepage")} /> 
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </ThemedView>
  );
}
