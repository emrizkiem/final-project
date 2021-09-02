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
import moment from "moment";
import { InputGlobal } from "components";
import Calendar from "react-calendar";

function BasicUsage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [dateValue, setDateValue] = useState(null);
  const [requestBy, setRequestBy] = useState("");
  const [invoiceTitle, setInvoiceTitle] = useState("");
  const [price, setPrice] = useState("");
  const [priceInText, setPriceInText] = useState("");
  const [receipent, setReceipent] = useState("");
  const [receipentBank, setReceipentBank] = useState("");

  function handleopenmodal() {
    setIsOpen(true);
  }

  function handleclosemodal() {
    setIsOpen(false);
  }

  function handleDatePicker(e) {
    const date = new Date(e);
    const formatDate =
      date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    setDateValue(formatDate);
    setShowDatePicker(false);
  }

  function onSubmit(){ // fungsi untuk POST ke backend nanti 
    let bodyRequest = {
      nama :requestBy,
      tanggal : dateValue,
      nama_invoice : invoiceTitle,
      harga : price,
      harga_dalam_teks : priceInText,
      nama_penerima : receipent,
      bank_penerima : receipentBank
    }
    // lihat di browser console - untuk mengetahui hasil json body request
    console.log(bodyRequest)
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
                <Box>
                  <InputGlobal
                    label="Diminta Oleh"
                    onChange={(value) => setRequestBy(value)}
                    value={requestBy}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </Box>
                <Box mt="1.5em">
                  <InputGlobal
                    value={dateValue}
                    onFocus={() => setShowDatePicker(true)}
                    label="Tangggal pembayaran aktual"
                    placeholder="dd/mm/yyyy"
                  />
                  {showDatePicker && (
                    <Box position="absolute" bg="white" zIndex="10">
                      <Calendar
                        formatLongDate={(locale, date) =>
                          moment(date, "dd MMM YYYY")
                        }
                        onChange={(e) => handleDatePicker(e)}
                      />
                    </Box>
                  )}
                </Box>
              </Box>
              <Box flex="1" paddingLeft="1.5em">
                <InputGlobal
                  label="Keperluan pembayaran"
                  placeholder="Masukkan kebutuhan pembayaran Anda"
                  onChange={(value) => setInvoiceTitle(value)}
                  value={invoiceTitle}
                />
                <Box>
                  <InputGlobal
                    label="Jumlah pembayaran"
                    placeholder="Rp"
                    onChange={(value) => setPrice(value)}
                    value={price}
                  />
                </Box>
              </Box>
            </Flex>

            <Box my="1em">
              <Box>TERBILANG</Box>
              <Textarea
                mt="0.5ems"
                value={priceInText}
                onChange={(e) => setPriceInText(e.target.value)}
              />
            </Box>

            <Flex my="1en">
              <Box flex="1" paddingRight="1.5em">
                <InputGlobal
                  label="NAMA PENERIMA"
                  placeholder="Masukkan nama penerima"
                  onChange={(value) => setReceipent(value)}
                  value={receipent}
                />
              </Box>
              <Box flex="1" paddingLeft="1.5em">
                <InputGlobal
                  label="NOMOR REKENING PENERIMA"
                  placeholder="Masukkan no rekening penerima"
                  onChange={(value) => setReceipentBank(value)}
                  value={receipentBank}
                />
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

              onClick={()=>onSubmit()}
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
