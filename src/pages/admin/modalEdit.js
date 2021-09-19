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
  Select,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { InputGlobal } from "components";

function ModalEdit(props) {
  const { onClose, isOpen } = props

  const [fullname, setFullname] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);

  const toast = useToast();

  function onSubmit() {
    let bodyRequest = {
      nama: fullname,
      role: role,
      email: email,
      password: password
    }
    console.log(bodyRequest)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => onClose()} size="2xl">
        <ModalOverlay opacity={0.8} />
        <ModalContent borderRadius="0">
          <ModalHeader>Edit Account</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box flex="1" paddingRight="1.5em">
                <Box>
                  <InputGlobal
                    label="NAMA"
                    onChange={(value) => setFullname(value)}
                    value={fullname}
                    placeholder="Masukkan nama lengkap Anda"
                    type="text"
                  />
                </Box>
                <Box mt="1.5em">
                  <InputGlobal
                    onChange={(value) => setemail(value)}
                    value={email}
                    label="EMAIL"
                    placeholder="Masukkan email Anda"
                    type="email"
                  />
                </Box>
              </Box>
              <Box flex="1" paddingLeft="1.5em">
                <Box fontSize="0.9rem" fontWeight="400" mt="1em" pb="0.6em" color="#66686A">ROLE</Box>
                <Select placeholder="Pilih">
                  <option value={role} onChange={(accounting) => setRole(accounting)}>Accounting</option>
                  <option value={role} onChange={(general_support) => setRole(general_support)}>General Support</option>
                </Select>
                <Box paddingTop="0.5em">
                  <InputGlobal
                    type
                    label="PASSWORD"
                    placeholder="Masukkan password Anda"
                    onChange={(value) => setPassword(value)}
                    value={password}
                    type="password"
                  />
                </Box>
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
              onClick={() => onClose()}
            >
              Tutup
            </Button>
            <Button
              bg="#4269F2"
              colorScheme="#4269F2"
              variant="solid"
              color="white"
              borderRadius="4px"
              onClick={(e) => {
                if (fullname === null && role === null && email === null && password === null) {
                  e.preventDefault();
                  toast({
                    title: 'Please fill form!',
                    description: 'Please fill form is not empty!',
                    status: 'warning',
                    duration: 4000,
                    isClosable: true,
                    position: 'top'
                  });
                } else {
                  e.preventDefault();
                  toast({
                    title: 'Account successfully added!',
                    description: 'Please use your email and password to login.',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                    position: 'top'
                  });
                  onClose();
                }
              }}
            >
              Simpan Perubahan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalEdit;
