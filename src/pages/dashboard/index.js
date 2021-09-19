import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import { Header } from 'components';
import React, { useEffect, useState } from 'react';
import Modal from './modal';
import ModalDetails from './modalDetail';

export default function ListPayment() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);
  const [payments, setPayments] = useState([]);
  const [isLoadingPayments, setLoadingPayments] = useState(true);

  function handleopenmodal() {
    setIsOpen(true);
  }

  function handleclosemodal() {
    setIsOpen(false);
  }

  function openModalDetails() {
    setIsOpenModalDetails(true);
  }

  function dissmissModalDetails() {
    setIsOpenModalDetails(false);
  }

  useEffect(() => {
    axios
      .get('https://payment-monitoring.herokuapp.com/list_payment?id_unit=1')
      .then((response) => {
        setPayments(response.data.data);
        setLoadingPayments(false);
      })
      .catch((err) => {
        console.log('ERROR NIH');
      });
  }, []);

  const headerTable = [
    'No',
    'Tanggal Request',
    'Tanggal Pembayaran',
    'status',
    'Aksi',
  ];
  return (
    <Box
      marginLeft={{
        sm: '2px',
        md: '0px',
        lg: '0px',
        xl: '0px',
      }}
    >
      <Modal isOpen={isOpen} onClose={() => handleclosemodal()} />
      <ModalDetails
        isOpen={isOpenModalDetails}
        onClose={() => dissmissModalDetails()}
      />
      <Header />

      <Box bgColor="#E5E5E5" pt="1em">
        <Box marginLeft="100px" marginTop="20px" fontSize="14px">
          OVERVIEW
        </Box>
        <Box marginLeft="100px" fontSize="20px" fontWeight="500">
          Dashboard
        </Box>

        <Flex bgColor="#E5E5E5" height="600px">
          <Box flex="5">
            <Box bgColor="white" marginLeft="100px" height="510px">
              <Stack
                direction="row"
                marginLeft="20px"
                marginTop="20px"
                marginRight="30px"
              >
                <Text
                  fontSize="xl"
                  marginTop="25px"
                  marginBottom="20px"
                  fontWeight="600"
                >
                  Invoice Payment Request
                </Text>
                <Spacer />

                <Center>
                  <Button colorScheme="red" onClick={() => handleopenmodal()}>
                    + Create Payment Request
                  </Button>
                </Center>
              </Stack>
              <Divider />

              <Stack
                direction="row"
                marginTop="15px"
                marginLeft="20px"
                marginRight="30px"
                alignItems="center"
              >
                <Text fontSize="sm">Menampilkan</Text>
                <Select
                  placeholder="1"
                  variant="outline"
                  size="xs"
                  width="60px"
                >
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </Select>
                <Spacer />
                <Text fontSize="sm">Pencarian</Text>
                <Input size="sm" variant="outline" width="170px" />
              </Stack>

              <Box marginLeft="20px" marginRight="30px">
                <Table variant="simple" marginTop="20px">
                  <Thead>
                    <Tr borderWidth="1px" borderColor="gray">
                      {headerTable.map((header) => {
                        return (
                          <Th
                            textAlign="center"
                            borderWidth="1px"
                            borderColor="black"
                          >
                            {' '}
                            {header}
                          </Th>
                        );
                      })}
                    </Tr>
                  </Thead>
                  <Tbody borderWidth="1px" borderColor="black">
                    {payments.map((payment) => {
                      if (!isLoadingPayments) {
                        return (
                          <Tr>
                            <Td
                              borderWidth="1px"
                              borderColor="black"
                              textAlign="center"
                            >
                              <Box width="5%">{payment.id_unit}</Box>
                            </Td>
                            <Td
                              borderWidth="1px"
                              width="30%"
                              borderColor="black"
                              fontSize="14px"
                              textAlign="center"
                            >
                              {' '}
                              {payment.request_terkirim}
                            </Td>
                            <Td
                              borderWidth="1px"
                              width="35%px"
                              borderColor="black"
                              textAlign="center"
                            >
                              {payment.tanggal_pembayaran_aktual}
                            </Td>

                            <Td
                              borderWidth="1px"
                              borderColor="black"
                              width="25%"
                            >
                              <Box
                                fontSize="13px"
                                justifyContent="center"
                                display="flex"
                                alignItems="center"
                              >
                                <Box
                                  justifyContent="center"
                                  display="flex"
                                  alignItems="center"
                                  height="30px"
                                  boxSizing="unset"
                                  borderRadius="5px"
                                  color="white"
                                  borderWidth="1px"
                                  px="10px"
                                  bgColor={
                                    payment.status === 1 ? 'red' : 'green'
                                  }
                                >
                                  {payment.status === 1
                                    ? 'Approved'
                                    : 'Rejected'}
                                </Box>
                              </Box>
                            </Td>

                            <Td
                              borderWidth="1px"
                              borderColor="black"
                              width="5%"
                            >
                              <Button
                                size="sm"
                                justifyContent="center"
                                bgColor="#ECE9F1"
                                display="flex"
                                alignItems="center"
                                onClick={() => openModalDetails()}
                              >
                                Detail
                              </Button>
                            </Td>
                          </Tr>
                        );
                      } else {
                        <Tr>
                          <Td colSpan={5} textAlign="center">
                            <Spinner
                              thickness="4px"
                              speed="0.65s"
                              emptyColor="gray.200"
                              color="blue.500"
                              size="xl"
                            />
                          </Td>
                        </Tr>;
                      }
                    })}
                  </Tbody>
                </Table>
              </Box>

              <Stack
                direction="row"
                marginTop="20px"
                marginBottom="30px"
                marginRight="30px"
              >
                <Text fontSize="sm" marginLeft="20px">
                  Total 3 data, menampilkan data (1 sampai 3)
                </Text>
                <Spacer />
                <ButtonGroup>
                  <Button size="xs">Sebelumnya</Button>
                  <Editable defaultValue="1" fontSize="xs">
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                  <Button size="xs">Selanjutnya</Button>
                </ButtonGroup>
              </Stack>
            </Box>
          </Box>

          <Box flex="2" marginTop="20px" marginBottom="20px">
            <SimpleGrid
              spacing="15px"
              marginLeft="32px"
              textAlign="center"
              marginRight="120px"
              width="302px"
            >
              <Box
                bgColor="white"
                height="115px"
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Stat>
                  <StatNumber>43</StatNumber>
                  <StatLabel>New Payment Request</StatLabel>
                </Stat>
              </Box>

              <Box
                bgColor="white"
                height="115px"
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Stat>
                  <StatNumber>93</StatNumber>
                  <StatLabel>Menunggu Konfirmasi</StatLabel>
                </Stat>
              </Box>

              <Box
                bgColor="white"
                height="115px"
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Stat>
                  <StatNumber>23</StatNumber>
                  <StatLabel>Disetujui</StatLabel>
                </Stat>
              </Box>

              <Box
                bgColor="white"
                height="115px"
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Stat>
                  <StatNumber>73</StatNumber>
                  <StatLabel>Rejected by Accounting</StatLabel>
                </Stat>
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
