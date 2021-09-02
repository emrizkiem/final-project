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
  Textarea,
  Text,
  Image,
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
          <ModalHeader ><Text fontSize="lg" color="#66686A">New Payment Request</Text>
          </ModalHeader>
          <Divider orientation="horizontal" />
          <ModalCloseButton />
          <ModalBody >
            <Flex >
              <Box flex="1" paddingRight="1.5em" pt="4" >
                
                <FormControl id="minol" >
                  <FormLabel>
                    <Text fontSize="xs" color="#66686A">DIMINTA OLEH</Text>
                    </FormLabel>
                  <Input type="text"  placeholder="Masukkan nama lengkap Anda" fontSize="xs"/>
                </FormControl>
                <FormControl id="tglpem" pt="1em">
                  <FormLabel>
                  <Text fontSize="xs" color="#66686A" >TANGGAL PEMBAYARAN AKTUAL</Text>
                  </FormLabel>
                  <Flex justifyContent="flex-end" alignItems="center" position="relative">
                   <Input type="text"  placeholder="dd/mm/yyyy" fontSize="xs" color="black"/>
                  <Image position="absolute" src={"./calendar.png"} alt="calendar"  margin="2" height="5" width="5" />
                  </Flex>
                </FormControl>
              </Box>
              <Box flex="1" paddingLeft="1.5em" pt="4">
              <FormControl id="kepbar">
                  <FormLabel>
                  <Text fontSize="xs" color="#66686A">KEPERLUAN PEMBAYARAN</Text>
                  </FormLabel>
                  <Input type="text"  placeholder="Masukkan kebutuhan pembayaran Anda" fontSize="xs"/>
                </FormControl>
                <FormControl id="jumpem" pt="1em">
                  <FormLabel>
                  <Text fontSize="xs" color="#66686A"> JUMLAH PEMBAYARAN</Text>
                 </FormLabel>
                  <Input type="text"  placeholder="Rp." fontSize="xs"/>
                </FormControl>
              </Box>
            </Flex>

            <Box my="1em">
                <Box><Text fontSize="xs" color="#66686A">TERBILANG</Text></Box>
                <Textarea placeholder="" fontSize="xs" mt="0.5em"/>
            </Box>


            <Flex my="1en">
              <Box flex="1" paddingRight="1.5em">
                <FormControl id="penerima">
                  <FormLabel>
                  <Text fontSize="xs" color="#66686A">NAMA PENERIMA</Text>
                  </FormLabel>
                  <Input type="text"  placeholder="Masukkan nama penerima" fontSize="xs"/>
                </FormControl>
                
              </Box>
              <Box flex="1" paddingLeft="1.5em">
              <FormControl id="rek">
                  <FormLabel> 
                  <Text fontSize="xs" color="#66686A"> NO REKENING PENERIMA</Text>
                 </FormLabel>
                  <Box >
                  <Input type="text" placeholder="Masukkan no rekening penerima" fontSize="xs" />
                  </Box>
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
            <Text fontSize="sm"> Tutup</Text>
            </Button>
            <Button
              bg="brand.red"
              variant="solid"
              color="white"
              borderRadius="4px"
            >
             <Text fontSize="sm"> Submit Payment Request</Text> 
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;