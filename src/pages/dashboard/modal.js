import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { InputGlobal } from 'components';
import moment from 'moment';
import { useState } from 'react';
import Calendar from 'react-calendar';

function BasicUsage(props) {
  const toast = useToast();

  const { onClose, isOpen } = props;

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [requestBy, setRequestBy] = useState('');
  const [invoiceTitle, setInvoiceTitle] = useState('');
  const [price, setPrice] = useState('');
  const [priceInText, setPriceInText] = useState('');
  const [receipent, setReceipent] = useState('');
  const [receipentBank, setReceipentBank] = useState('');
  const [isValidate, setValidate] = useState(false);

  function handleDatePicker(e) {
    const date = new Date(e);
    const formatDate =
      date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    setDateValue(formatDate);
    setShowDatePicker(false);
  }

  const onSubmit = () => {
    // fungsi untuk POST ke backend nanti
    let bodyRequest = {
      nama: requestBy,
      tanggal: dateValue,
      nama_invoice: invoiceTitle,
      harga: price,
      harga_dalam_teks: priceInText,
      nama_penerima: receipent,
      bank_penerima: receipentBank,
    };
    // lihat di browser console - untuk mengetahui hasil json body request
    console.log(bodyRequest);
    axios
      .post(
        'https://payment-monitoring.herokuapp.com/payment/create',
        bodyRequest
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 200 && response.statusText === 'OK') {
          toast({
            title: 'Success updated!',
            description: 'Success updated data to rejected or approved',
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'top'
          });
        } else {
          toast({
            title: 'Failed updated!',
            description: 'Failed updated data to rejected or approved',
            status: 'error',
            duration: 4000,
            isClosable: true,
            position: 'top'
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  <InputGlobal
                    icon={true}
                    value={dateValue}
                    onClickIcon={() => setShowDatePicker(true)}
                    label="TANGGAL PEMBAYARAN AKTUAL"
                    placeholder="dd/mm/yyyy"
                  />
                  {showDatePicker && (
                    <Box
                      position="absolute"
                      bg="white"
                      zIndex="10"
                      onMouseLeave={() => setShowDatePicker(false)}
                    >
                      <Calendar
                        formatLongDate={(locale, date) =>
                          moment(date, 'dd MMM YYYY')
                        }
                        onChange={(e) => handleDatePicker(e)}
                      />
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
                mt="1ems"
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
              bgColor="#4269F2"
              colorScheme="#4269F2"
              variant="solid"
              color="white"
              borderRadius="4px"
              onClick={() => onSubmit()}
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
