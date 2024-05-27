import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  const [loaded, error] = useFonts({
    mon: require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='(modals)/login' 
            options={{
              title:"Log in or Sign up",
              headerTitleStyle:{
                fontFamily:"mon-sb",
              },
              presentation:"modal",
              headerLeft:()=>(
                <TouchableOpacity onPress={()=>router.back()}>
                    <Ionicons name='close-outline' size={28} />
                </TouchableOpacity>
              )
            }}
        />
        <Stack.Screen name="listings/[id]" options={{ headerTitle: "" }} />
        <Stack.Screen name="(modals)/booking" 
            options={{ 
              presentation:"transparentModal",
              animation:"fade",
              headerLeft:()=>(
                <TouchableOpacity onPress={()=>router.back()}>
                    <Ionicons name='close-outline' size={28} />
                </TouchableOpacity>
              )
            }} 
        />
      </Stack>
  );
}
