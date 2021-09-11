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
  Input,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Center,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

function ModalDetails(props) {
  const { onClose, isOpen } = props;

  return (
    <>

      <Modal isOpen={isOpen} onClose={() => onClose()} size="2xl">
        <ModalOverlay opacity={0.8} />
        <ModalContent borderRadius="0">
          <ModalHeader>Asep Sunandar</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple" borderWidth="1px">
              <Tbody>
                <Tr bgColor="#C7C7C7">
                  <Td colSpan={3} ><Center>Detail Payment Request</Center></Td>
                </Tr>

                <Tr>
                  <Td width="35%">Diminta Oleh</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Asep Sunandar</Td>
                </Tr>

                <Tr>
                  <Td>Keperluan Pembayaran</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">SPP Agustus 2021</Td>
                </Tr>

                <Tr>
                  <Td>Tanggal Pembayaran</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Sabtu, 28 Agustus 2021</Td>
                </Tr>

                <Tr>
                  <Td>Jumlah Pembayaran</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Rp1.000.000</Td>
                </Tr>

                <Tr>
                  <Td>Terbilang</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Satu Juta Rupiah</Td>
                </Tr>

                <Tr>
                  <Td>Nama Rek. Penerima</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Rp1.000.000</Td>
                </Tr>

                <Tr>
                  <Td>No Rek. Penerima</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">15000757050</Td>
                </Tr>

                <Tr>
                  <Td>Request Terkirim</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">Senin, 30 Agustus 2021 - 09.00 PM</Td>
                </Tr>

                <Tr>
                  <Td>Status Request</Td>
                  <Td>:</Td>
                  <Td paddingStart="1px">
                    <Box fontSize="13px" justifyContent="left" display="flex" alignItems="left">
                      <Box justifyContent="center" display="flex" alignItems="center" height="30px" boxSizing="unset" borderRadius="5px" width="150px" borderWidth="1px" px="10px" bgColor="#FFE29D" >
                        Menunggu Konfirmasi
                      </Box>
                    </Box>
                  </Td>
                </Tr>

              </Tbody>
            </Table>
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
              bg="red"
              variant="solid"
              color="white"
              borderRadius="4px"
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDetails;
