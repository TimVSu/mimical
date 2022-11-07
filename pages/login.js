
import { NativeBaseProvider, Text, Box, FormControl, WarningOutlineIcon, Stack, Icon, Input, Container, Heading, Center, Square, Circle,Flex, ScrollView, VStack } from "native-base";
import { useState } from "react";

const Login = ({navigation}) => {
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);

    return(
    <Box w="100%" flex="1" safeAreaTop>
    <ScrollView>
        <VStack space={2.5} w="100%" px="3">

      <Flex direction = "column" mb="2.5" mt="3">
      <Center mt="10">
      <Heading size="md" mt="3">
        <Text color="emerald.500"> LOGIN</Text>
        </Heading>
      </Center>
      <Center>

      </Center>
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>email</FormControl.Label>
          <Input _light={{
          bg: "coolGray.100",
          _hover: {
            bg: "coolGray.200"
          },
          _focus: {
            bg: "coolGray.200:alpha.70"
          }
        }} _dark={{
          bg: "coolGray.800",
          _hover: {
            bg: "coolGray.900"
          },
          _focus: {
            bg: "coolGray.900:alpha.70"
          }
        }} shadow={2} placeholder="email" />
         
        </Stack>
      </FormControl>
      <Center>
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input _light={{
          bg: "coolGray.100",
          _hover: {
            bg: "coolGray.200"
          },
          _focus: {
            bg: "coolGray.200:alpha.70"
          }
        }} _dark={{
          bg: "coolGray.800",
          _hover: {
            bg: "coolGray.900"
          },
          _focus: {
            bg: "coolGray.900:alpha.70"
          }
        }} shadow={2} type="password" placeholder="password" />
          <FormControl.HelperText>
            Must be atleast 8 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      </Center>
      </Flex>
      </VStack>
      </ScrollView>
    </Box>
    

    );
}

export default Login;