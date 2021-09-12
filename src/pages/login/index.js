import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isValidate, setValidate] = useState(true);

  const toast = useToast();

  const login = () => {
    fetch('https://c01d525f-3a6f-409a-9189-e0c90e0ae2ab.mock.pstmn.io/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
        login_as: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200 && data.message === 'berhasil') {
          if (username.substring(username.indexOf('@')) === '@gmail.com') {
            window.location.href = '/dashboard';
          } else if (
            username.substring(username.indexOf('@')) === '@bri.co.id'
          ) {
            window.location.href = '/general_support';
          }
        } else {
          setValidate(false);
          setLoading(false);
          toast({
            title: 'Login failed!',
            description: 'Please check again your username and password',
            status: 'error',
            duration: 4000,
            isClosable: true,
          });
        }
      });
  };

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
          src={'/assets/images/logo.png'}
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
          <form method="post">
            <FormControl id="email" w="100%" mt="4">
              <FormLabel textTransform="uppercase" fontWeight="normal">
                Email/Username
              </FormLabel>
              <Input
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                id="username"
              />
            </FormControl>
            <FormControl id="email" w="100%" mt="4">
              <FormLabel textTransform="uppercase" fontWeight="normal">
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isInvalid={!isValidate}
                  errorBorderColor="pink.400"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                />
                <InputRightElement width="3rem">
                  {showPassword ? (
                    <ViewIcon onClick={() => setShowPassword(false)} />
                  ) : (
                    <ViewOffIcon onClick={() => setShowPassword(true)} />
                  )}
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
                isLoading={isLoading}
                olorScheme="blue"
                size="lg"
                bg="#E51B23"
                color="white"
                mt="10"
                mb="10"
                width="100%"
                type="submit"
                onClick={(e) => {
                  if (username === null && password === null) {
                    e.preventDefault();
                    toast({
                      title: 'Please fill form!',
                      description:
                        'Please fill username and password to login!',
                      status: 'warning',
                      duration: 4000,
                      isClosable: true,
                    });
                    setLoading(false);
                  } else {
                    e.preventDefault();
                    login();
                  }
                }}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Center>
  );
}
