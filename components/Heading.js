import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Heading({children, level}) {
  const headingLevel = level ? level : 5;
  return (
    <View>
      <Text accessibilityRole={`h${level}`}>{children}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
