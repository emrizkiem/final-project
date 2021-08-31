import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Divider,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";

function BasicUsage() {
  const [isOpen, setIsOpen] = useState(true);
  function handleopenmodal() {
    setIsOpen(true);
  }

  function handleclosemodal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => handleopenmodal()}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={() => handleclosemodal()} size="2xl">
        <ModalOverlay opacity={0.8} />
        <ModalContent borderRadius="0">
          <ModalHeader>New Payment Request</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box flex="1" paddingRight="1.5em">
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="text"  placeholder="Masukkan nama lengkap Anda"/>
                </FormControl>
                <FormControl id="email" pt="1em">
                  <FormLabel>Email address</FormLabel>
                  <Input type="text"  placeholder="Masukkan nama lengkap Anda"/>
                </FormControl>
              </Box>
              <Box flex="1" paddingLeft="1.5em">
              <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="text"  placeholder="Masukkan nama lengkap Anda"/>
                </FormControl>
                <FormControl id="email" pt="1em">
                  <FormLabel>Email address</FormLabel>
                  <Input type="text"  placeholder="Masukkan nama lengkap Anda"/>
                </FormControl>
              </Box>
            </Flex>

            <Box my="1em">
                <Box>Siapa Rada?</Box>
                <Textarea placeholder="Rada cantikk" mt="0.5em"/>
            </Box>


            <Flex my="1en">
              <Box flex="1" paddingRight="1.5em">
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="text"  placeholder="Masukkan nama lengkap Anda"/>
                </FormControl>
                
              </Box>
              <Box flex="1" paddingLeft="1.5em">
              <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="text"  placeholder="Masukkan nama lengkap Anda"/>
                </FormControl>
                
              </Box>
            </Flex>
          </ModalBody>

          <Divider  my="1em"/>

          <ModalFooter>
            <Button
              fontWeight="400"
              color=" #666666"
              variant="outline"
              borderRadius="4px"
              mr={3}
              onClick={() => handleclosemodal()}
            >
              Tutup
            </Button>
            <Button
              bg="brand.red"
              variant="solid"
              color="white"
              borderRadius="4px"
            >
              Submit Payment Request
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
