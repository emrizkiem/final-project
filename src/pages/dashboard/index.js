import React from 'react';
import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Button,
    ButtonGroup,
    Divider,
    Tr,
    Th,
    Td,
    TableCaption,
    Center,
    Badge,
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    SimpleGrid,
    Image,
    imageAlt,
    ImageProps,
    Wrap,
    WrapItem,
    Spacer,
    Select,
    Editable,
    EditablePreview,
    EditableInput,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup
} from "@chakra-ui/react";


import { useState } from "react"
import Modal from './modal'
import { Header } from 'components';

export default function ListPayment() {
    const [isOpen, setIsOpen] = useState(false);
    function handleopenmodal() {
        setIsOpen(true);
    }

    function handleclosemodal() {
        setIsOpen(false);
    }
    const tableData = {
        header: ["No", "Tanggal Request", "Tanggal Pembayaran", "status", "Aksi"],
        body: [
            {
                no: 1,
                tanggal_request: "29 Agustus 2021 - 20.00 WIB ",
                tanggal_pembayaran: "30 Agustus 2021",
                status: "Menunggu Konfirmasi",
                aksi: "Detail",
                width: "150px",
                bgColor: "#FFE29D"
            },

            {
                no: 2,
                tanggal_request: "9 Agustus 2021 - 10.03 WIB ",
                tanggal_pembayaran: "10 Agustus 2021",
                status: "Disetujui",
                aksi: "Detail",
                width: "80px",
                bgColor: "#7DDFC3"
            },
            {
                no: 3,
                tanggal_request: "2 Agustus 2021 - 13.40 WIB ",
                tanggal_pembayaran: "3 Agustus 2021",
                status: "Rejected by Accounting",
                aksi: "Detail",
                width: "160px",
                bgColor: "#FDAFBB"

            }
        ]
    }

    return (
        <Box marginLeft={{
            sm: "2px",
            md: "0px",
            lg: "0px",
            xl: "0px",

        }}>
            <Modal isOpen={isOpen} onClose={() => handleclosemodal()} />
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
                            <Stack direction="row" marginLeft="20px" marginTop="20px" marginRight="30px">
                                <Text fontSize="xl" marginTop="25px" marginBottom="20px" fontWeight="600" >Invoice Payment Request</Text>
                                <Spacer />

                                <Center>
                                    <Button colorScheme="red" onClick={() => handleopenmodal()}>
                                        + Create Payment Request
                                    </Button>
                                </Center>

                            </Stack>
                            <Divider />

                            <Stack direction="row" marginTop="15px" marginLeft="20px" marginRight="30px" alignItems="center">
                                <Text fontSize="sm">Menampilkan</Text>
                                <Select placeholder="1" variant="outline" size="xs" width="60px">
                                    <option value="option2">2</option>
                                    <option value="option3">3</option>
                                </Select>
                                <Spacer />
                                <Text fontSize="sm">Pencarian</Text>
                                <input variant="outline"></input>
                            </Stack>

                            <Box marginLeft="20px" marginRight="30px">


                                <Table variant="simple" marginTop="20px" >
                                    <Thead  >

                                        <Tr borderWidth="1px" borderColor="black">
                                            {
                                                tableData.header.map(header => {
                                                    return (
                                                        <Th textAlign="center" borderWidth="1px" borderColor="black"> {header}</Th>
                                                    )
                                                })
                                            }

                                        </Tr>
                                    </Thead>
                                    <Tbody borderWidth="1px" borderColor="black">
                                        {
                                            tableData.body.map(body => {
                                                return (
                                                    <Tr  >
                                                        <Td borderWidth="1px" borderColor="black" >
                                                            <Box width="5px">
                                                                {body.no}
                                                            </Box>
                                                        </Td>
                                                        <Td borderWidth="1px" borderColor="black" fontSize="14px"> {body.tanggal_request}</Td>
                                                        <Td borderWidth="1px" borderColor="black">{body.tanggal_pembayaran}</Td>

                                                        <Td borderWidth="1px" borderColor="black" >
                                                            <Box fontSize="13px" justifyContent="center" display="flex" alignItems="center"  >

                                                                <Box justifyContent="center" display="flex" alignItems="center" height="30px" borderRadius="5px" width={body.width} borderWidth="1px" px="10px" bgColor={body.bgColor} >
                                                                    {body.status}
                                                                </Box>
                                                            </Box>


                                                        </Td>

                                                        <Td borderWidth="1px" borderColor="black" >
                                                            <Box fontSize="13px" justifyContent="center" display="flex" alignItems="center"  >

                                                                <Box justifyContent="center" display="flex" alignItems="center" height="30px" borderRadius="5px" width="50px" borderWidth="1px" px="10px" bgColor="#ECE9F1" >
                                                                    {body.aksi}
                                                                </Box>
                                                            </Box>
                                                        </Td>
                                                    </Tr>

                                                )

                                            })
                                        }


                                    </Tbody>
                                </Table>



                            </Box>



                            <Stack direction="row" marginTop="20px" marginBottom="30px" marginRight="30px">
                                <Text fontSize="sm" marginLeft="20px">Total 3 data, menampilkan data (1 sampai 3)</Text>
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


                    <Box flex="3" marginTop="20px" marginBottom="20px" >
                        <SimpleGrid spacing="15px" marginLeft="32px" textAlign="center" marginRight="120px" width="302px" >
                            <Box bgColor="white" height="115px">
                                <Stat>
                                    <StatNumber>43</StatNumber>
                                    <StatLabel>New Payment Request</StatLabel>
                                    <StatHelpText>
                                        <StatArrow type="increase" />
                                    </StatHelpText>
                                </Stat>
                            </Box>

                            <Box bgColor="white" height="115px">
                                <Stat>
                                    <StatNumber>93</StatNumber>
                                    <StatLabel>Menunggu Konfirmasi</StatLabel>
                                    <StatHelpText>
                                        <StatArrow type="decrease" />
                                    </StatHelpText>
                                </Stat>
                            </Box>

                            <Box bgColor="white" height="120px">
                                <Stat>
                                    <StatNumber>23</StatNumber>
                                    <StatLabel>Disetujui</StatLabel>
                                    <StatHelpText>
                                        <StatArrow type="increase" />
                                    </StatHelpText>
                                </Stat>
                            </Box>

                            <Box bgColor="white" height="115px">
                                <Stat>
                                    <StatNumber>73</StatNumber>
                                    <StatLabel>Rejected by Accounting</StatLabel>
                                    <StatHelpText>
                                        <StatArrow type="increase" />
                                    </StatHelpText>
                                </Stat>
                            </Box>

                        </SimpleGrid>
                    </Box>
                </Flex>
            </Box>

        </Box>
    )
}