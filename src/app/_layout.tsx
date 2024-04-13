import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootNavigator = () => {
  return (
    <Stack>
      <Stack.Screen name={'(tabs)'} options={{ headerShown: false }} />
    </Stack>
  )
}

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
      <StatusBar style={'auto'} />
    </SafeAreaProvider>
  )
}

export default App
