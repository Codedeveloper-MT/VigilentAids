import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function LocationScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView>
      <ThemedText type="title">Details Screen</ThemedText>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </ThemedView>
  );
}
