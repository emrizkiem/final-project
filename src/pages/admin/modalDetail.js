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
  Td,
  Tr,
  Table,
  Tbody,
  Center
} from "@chakra-ui/react";

function ModalDetail(props) {
  const { onClose, isOpen } = props

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => onClose()} size="2xl">
        <ModalOverlay opacity={0.8} />
        <ModalContent borderRadius="0">
          <ModalHeader>Detail Account</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple" borderWidth="1px">
              <Tbody>
                <Tr bgColor="#C7C7C7">
                  <Td colSpan={3} ><Center>Detail Account</Center></Td>
                </Tr>

                <Tr>
                  <Td width="35%">Name</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Dinda Nurlita</Td>
                </Tr>

                <Tr>
                  <Td>Role</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Accounting</Td>
                </Tr>

                <Tr>
                  <Td>Email</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">dindanurlita@bri.co.id</Td>
                </Tr>

              </Tbody>
            </Table>
          </ModalBody>

          <Divider my="1em" />

          <ModalFooter>
            <Button
              fontWeight="400"
              color="#666666"
              variant="outline"
              borderRadius="4px"
              mr={3}
              onClick={() => onClose()}
            >
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDetail;
