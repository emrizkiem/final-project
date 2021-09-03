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
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

function Success() {
  const [isOpen, setIsOpen] = useState(true);
  function handleopenmodal() {
    setIsOpen(true);
  }

  function handleclosemodal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => handleopenmodal()} bg="grey">Detail</Button>

      <Modal isOpen={isOpen} onClose={() => handleclosemodal()} size="2xl">
        <ModalOverlay opacity={0.8} />
        <ModalContent borderRadius="0">
          <ModalHeader>Asep Sunandar</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
          <Table variant="simple">
            <Tbody>
                <Tr >
                    <Td colSpan={3} ><Center>Detail Payment Request</Center></Td>
                </Tr>

                <Tr>
                    <Td>Diminta Oleh</Td>
                    <Td>:</Td>
                    <Td>Asep Sunandar</Td>
                </Tr>

                <Tr>
                    <Td>Keperluan Pembayaran</Td>
                    <Td>:</Td>
                    <Td >SPP Agustus 2021</Td>
                </Tr>
                
                <Tr>
                    <Td>Tanggal Pembayaran</Td>
                    <Td>:</Td>
                    <Td >Sabtu, 28 Agustus 2021</Td>
                </Tr>

                <Tr>
                    <Td>Jumlah Pembayaran</Td>
                    <Td>:</Td>
                    <Td >Rp1.000.000</Td>
                </Tr>

                <Tr>
                    <Td>Terbilang</Td>
                    <Td>:</Td>
                    <Td >Satu Juta Rupiah</Td>
                </Tr>

                <Tr>
                    <Td>Nama Rek. Penerima</Td>
                    <Td>:</Td>
                    <Td >Rp1.000.000</Td>
                </Tr>

                <Tr>
                    <Td>No Rek. Penerima</Td>
                    <Td>:</Td>
                    <Td >15000757050</Td>
                </Tr>

                <Tr>
                    <Td>Request Terkirim</Td>
                    <Td>:</Td>
                    <Td >Senin, 30 Agustus 2021 - 09.00 PM</Td>
                </Tr>

                <Tr>
                    <Td>Status Request</Td>
                    <Td>:</Td>
                    <Td ><input placeholder="Berhasil" disabled/></Td>
                </Tr>

                <Tr>
                    <Td>Alasan</Td>
                    <Td>:</Td>
                    <Td ><Input placeholder="Disetujui" disabled/></Td>
                </Tr>

            </Tbody>
            </Table>
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
            {/* <Button
              bg="red"
              variant="solid"
              color="white"
              borderRadius="4px"
            >
              Update
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Success;
