import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type AlertVariant = 'info' | 'success' | 'warning';

interface ImecAlertProps {
  show: boolean;
  title: string;
  message: string;
  confirmText?: string;
  variant?: AlertVariant;
  onConfirm: () => void;
  onDismiss?: () => void;
}

const variantColor: Record<AlertVariant, string> = {
  info: '#2563EB',
  success: '#16A34A',
  warning: '#D97706',
};

export function ImecAlert({
  show,
  title,
  message,
  confirmText = 'Entendido',
  variant = 'info',
  onConfirm,
  onDismiss,
}: ImecAlertProps) {
  const scheme = useColorScheme() ?? 'light';
  const theme = Colors[scheme];
  const accentColor = variantColor[variant];

  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside
      closeOnHardwareBackPress={false}
      showConfirmButton
      confirmText={confirmText}
      confirmButtonColor={accentColor}
      onConfirmPressed={onConfirm}
      onDismiss={onDismiss}
      titleStyle={{ color: theme.text, fontWeight: '700' }}
      messageStyle={{ color: theme.icon }}
      contentContainerStyle={{
        backgroundColor: theme.background,
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 18,
      }}
      overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
    />
  );
}
