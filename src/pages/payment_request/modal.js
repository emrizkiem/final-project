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
} from "@chakra-ui/react";
import { useState } from "react";
import { InputGlobal } from "components";
import Calendar from "react-calendar";

function BasicUsage() {
  const [isOpen, setIsOpen] = useState(true);
  const [value, onChange] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

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
                <InputGlobal
                  label="Diminta Oleh"
                  placeholder="Masukkan nama lengkap Anda"
                />
                <Box mt="1.5em" >
                <InputGlobal onFocus={()=>setShowDatePicker(true)} label="Tangggal pembayaran aktual" placeholder="dd/mm/yyyy"/>  
                  {
                    showDatePicker && (
                      <Box position="absolute" bg="white" zIndex="10">
                        <Calendar onChange={onChange} value={value} />
                      </Box>
                    )
                    

                  }
                  
                  
                </Box>
              </Box>
              <Box flex="1" paddingLeft="1.5em">
                <InputGlobal
                  label="Keperluan pembayaran"
                  placeholder="Masukkan kebutuhan pembayaran Anda"
                />
                <Box>
                  <InputGlobal label="Jumlah pembayaran" placeholder="Rp" />
                </Box>
              </Box>
            </Flex>

            <Box my="1em">
              <Box>TERBILANG</Box>
              <Textarea mt="0.5em" />
            </Box>

            <Flex my="1en">
              <Box flex="1" paddingRight="1.5em">
              <InputGlobal
                  label="NAMA PENERIMA"
                  placeholder="Masukkan nama penerima"
                />
                
              </Box>
              <Box flex="1" paddingLeft="1.5em">
                <FormControl id="email">
                  <FormLabel>NOMOR REKENING PENERIMA</FormLabel>
                  <Input
                    type="text"
                    placeholder="Masukkan no rekening penerima"
                  />
                </FormControl>
              </Box>
            </Flex>
          </ModalBody>

          <Divider my="1em" />

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
