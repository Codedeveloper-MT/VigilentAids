import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { RootStackParamList } from '@/types/navigation';  

export default function WelcomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ThemedView>
      <ThemedText type="title">VigilantAids</ThemedText>
      <Button title="Go to Details" onPress={() => navigation.navigate("login")} />
    </ThemedView>
  );
}
