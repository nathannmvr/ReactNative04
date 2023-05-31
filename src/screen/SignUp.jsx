import { VStack, Image, Center, Text } from "native-base";
import BackgroundImg from "../assets/background.png";
import Logo from "../assets/series.svg";
import { Input } from "../components/Input";

export default function SignUp() {
  return (
    <VStack flex={1}>
        <Image 
            source={BackgroundImg}
            alt='Pessoas na academia'
            resizeMode="contain"
            position='absolute'
        />
        <Center my={24}>
            <Text color='gray.100' fontSize='3xl'>Gym</Text>
            <Text color='gray.100' fontSize='sm'>Recarregue sua bateria</Text>
            <Input />
        </Center>
    </VStack>
  );
}