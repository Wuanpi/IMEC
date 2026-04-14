import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeModuleScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Modulo principal</ThemedText>
      <ThemedText>Esta area se habilitara despues del login seguro.</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
  },
});
