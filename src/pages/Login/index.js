import React from 'react';
import {
  ChakraProvider,
  Center,
  Image,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Box,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Center
      maxW="100%"
      h="100vh"
      bgColor="#F2F2F2"
      flexDirection="column"
      color="gray"
      pl="10"
      pr="10"
    >
      <Box maxWidth="400px" width="100%">
        <Image
          width="full"
          src={process.env.PUBLIC_URL + 'assets/images/logo.png'}
          alt="Logo"
          mb="10px"
        />
      </Box>
      <Box
        bgColor="#fff"
        padding="30px"
        maxW="400px"
        width="100%"
        borderRadius="10px"
      >
        <Text fontSize="32px" fontWeight="700" mt="4" mb="8" color="#333">
          Login
        </Text>
        <Box maxW="600px" w="100%">
          <FormControl id="email" w="100%" mt="4">
            <FormLabel textTransform="uppercase" fontWeight="normal">
              Email/Username
            </FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email" w="100%" mt="4">
            <FormLabel textTransform="uppercase" fontWeight="normal">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input type="password" />
              <InputRightElement width="3rem">
                <ViewOffIcon />
              </InputRightElement>
              <FormHelperText display="none">Wrong Password</FormHelperText>
            </InputGroup>
          </FormControl>
          <Link to="/forgot_password">
            <Text
              fontSize="16px"
              fontWeight="700"
              textAlign="right"
              mt="8px"
              textTransform="uppercase"
              color="#E51B23"
            >
              Forgot Password?
            </Text>
          </Link>
          <Box w="100%" align="center">
            <Button
              olorScheme="blue"
              size="lg"
              bg="#E51B23"
              color="white"
              mt="10"
              mb="10"
              width="100%"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
