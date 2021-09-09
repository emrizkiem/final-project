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
  Image
} from "@chakra-ui/react";
import { useState } from "react";
import moment from "moment";
import { InputGlobal } from "components";
import Calendar from "react-calendar";

function BasicUsage(props) {
  const {onClose,isOpen}=props

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [requestBy, setRequestBy] = useState("");
  const [invoiceTitle, setInvoiceTitle] = useState("");
  const [price, setPrice] = useState("");
  const [priceInText, setPriceInText] = useState("");
  const [receipent, setReceipent] = useState("");
  const [receipentBank, setReceipentBank] = useState("");

 
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

      <Modal isOpen={isOpen} onClose={() => onClose()} size="2xl">
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
                    label="DIMINTA OLEH"
                    onChange={(value) => setRequestBy(value)}
                    value={requestBy}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </Box>
                <Box mt="1.5em">
                  <InputGlobal icon={true}
                    value={dateValue}
                    onFocus={() => setShowDatePicker(true)}
                    label="TANGGAL PEMBAYARAN AKTUAL"
                    placeholder="dd/mm/yyyy"
                  />
                  {showDatePicker && (
                    <Box position="absolute" bg="white" zIndex="10">
                      <Calendar
                        formatLongDate={(locale, date) =>
                          moment(date, "dd MMM YYYY")
                        }
                        onChange={(e) => handleDatePicker(e)}
                      /> <Image position="absolute" src={"./calendar.png"} alt="calendar"  margin="2" height="5" width="5" />
                  
                    </Box>
                  )}
                </Box>
              </Box>
              <Box flex="1" paddingLeft="1.5em">
                <InputGlobal
                  label="KEPERLUAN PEMBAYARAN"
                  placeholder="Masukkan kebutuhan pembayaran Anda"
                  onChange={(value) => setInvoiceTitle(value)}
                  value={invoiceTitle}
                />
                <Box paddingTop="0.5em">
                  <InputGlobal
                    label=" JUMLAH PEMBAYARAN"
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
              onClick={() => onClose()}
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
