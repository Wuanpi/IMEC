import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
const fondoJpg = require('../../assets/images/fondo.jpg');

export const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const fondoJpg = require('@/assets/images/fondo.jpg');

  const handleLogin = (): void => {
    console.log('Login payload:', { username, password, rememberPassword });
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.logoArea}>
            <Text style={styles.logoText}>IM INGENIERIA </Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Usuario"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="none"
              style={styles.input}
            />

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.input}
            />

            <Pressable style={styles.rememberRow} onPress={() => setRememberPassword((prev) => !prev)}>
              <View style={[styles.checkbox, rememberPassword && styles.checkboxChecked]} />
              <Text style={styles.rememberText}>Recordar contraseña</Text>
            </Pressable>

            <Pressable style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Ingresar</Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={() => router.push('/forgot-password')}>
              <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 24,
  },
  logoArea: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F3E91',
    letterSpacing: 0.6,
  },
  formContainer: {
    width: '100%',
    maxWidth: 360,
    gap: 14,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 3,
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#7F1D1D',
    borderColor: '#7F1D1D',
  },
  rememberText: {
    fontSize: 14,
    color: '#4B5563',
  },
  loginButton: {
    marginTop: 6,
    backgroundColor: '#8B1E3F',
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.8,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 999,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordText: {
    color: '#4B5563',
    fontSize: 14,
    fontWeight: '600',
  },
});
