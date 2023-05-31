import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import SignUp from './src/screen/SignUp';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return(
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <SignUp/> : <Loading />}
    </NativeBaseProvider>
  );
}