import React from 'react';
import{
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

import { BellIcon } from '@chakra-ui/icons';
import {useState} from "react"
import Logo from "./logo.png"
import Modal  from './modal'

export default function ListPayment() {
    const [isOpen, setIsOpen] = useState(false);
    function handleopenmodal() {
        setIsOpen(true);
    }
    
    function handleclosemodal() {
        setIsOpen(false);
    }
    
    return(
        <Box marginLeft={{
            sm: "0px",
            md: "0px",
            lg: "0px",
            xl: "0px",
           
        }}>
            <Modal isOpen={isOpen} onClose={()=>handleclosemodal()} />
            <Box display="flex" height="100px" alignItems="center">
                <Image marginLeft="100px" marginTop="10px" width="150px" src={Logo} alt="Logo"/>
                <Spacer/>
                <BellIcon w={8} h={8}></BellIcon>
                <Wrap>
                    <WrapItem alignItems="center" marginRight="50px">
                        <Avatar name="John Doe" src="https://bit.ly/sage-adebayo" marginLeft="30px" marginRight="20px"></Avatar>
                        <Stack spacing={1} marginLeft="17px" marginRight="150px">
                            <Text fontSize="lg">John Doe</Text>
                            <Text fontSize="sm">Unit Kerja</Text>
                        </Stack>
                    </WrapItem>
                </Wrap>
            </Box>
            
            <Flex bgColor="#E5E5E5">
                <Box marginLeft="100px" marginTop="20px">
                    <Text fontSize="lg">Overview</Text>
                    <Text fontSize="xl" fontWeight="600">Dashboard</Text>
                </Box>
            </Flex>

            <Flex bgColor="#E5E5E5" height="600px">
                <Box flex="5">
                    <Box bgColor="white" marginLeft="100px" height="510px">
                        <Stack direction="row" marginLeft="20px" marginTop="20px" marginRight="30px">
                            <Text fontSize="xl" marginTop="25px" marginBottom="20px" fontWeight="600" >Invoice Payment Request</Text>
                            <Spacer/>
                            
                            <Center>
                                <Button colorScheme="red" onClick={()=>handleopenmodal()}>
                                    + Create Payment Request
                                </Button>
                            </Center>
                            
                        </Stack>
                        <Divider/>

                        <Stack direction="row" marginTop="15px" marginLeft="20px" marginRight="30px" alignItems="center">
                            <Text fontSize="sm">Menampilkan</Text>
                            <Select placeholder="1" variant="outline" size="xs" width="60px">
                                <option value="option2">2</option>
                                <option value="option3">3</option>
                            </Select>
                            <Spacer/>
                            <Text fontSize="sm">Pencarian</Text>
                            <input variant="outline"></input>
                        </Stack>

                        <Box marginLeft="20px" marginRight="30px">
                            <Table variant="simple" marginTop="20px"  borderWidth="1px" borderColor="black">
                                <Thead  >
                                    <Tr>
                                        <Th>No.</Th>
                                        <Th>Tanggal Request</Th>
                                        <Th>Tanggal Pembayaran</Th>
                                        <Th>Status</Th>
                                        <Th>Aksi</Th>
                                    </Tr>
                                </Thead>
                                <Tbody  borderWidth="1px" borderColor="black">
                                    <Tr >
                                        <Td>1</Td>
                                        <Td>29 Agustus 2021 - 20:00 WIB</Td>
                                        <Td>30 Agustus 2021</Td>
                                        <Button colorScheme="yellow" marginTop="5px" size="sm" >Menunggu Konfirmasi</Button>
                                        <Td>Detail</Td>
                                    </Tr>
                                    <Tr  >
                                        <Td>2</Td>
                                        <Td>9 Agustus 2021 - 10:03 WIB</Td>
                                        <Td>10 Agustus 2021</Td>
                                        <Button colorScheme="green" size="sm" marginTop="5px" >Disetujui</Button>
                                        <Td>Detail</Td>
                                    </Tr>
                                    <Tr  >
                                        <Td>3</Td>
                                        <Td>2 Agustus 2021 - 13:40 WIB</Td>
                                        <Td>3 Agustus 2021</Td>
                                        <Button colorScheme="red" size="sm" marginTop="5px" >Rejected by Accounting</Button>
                                        <Td>Detail</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                        
                        <Stack direction="row" marginTop="20px" marginBottom="30px" marginRight="30px">
                            <Text fontSize="sm" marginLeft="20px">Total 3 data, menampilkan data (1 sampai 3)</Text>
                            <Spacer/>
                            <ButtonGroup>
                                <Button size="xs">Sebelumnya</Button>
                                    <Editable defaultValue="1" fontSize="xs">
                                        <EditablePreview/>
                                        <EditableInput/>
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
                                    <StatArrow type="increase"/>
                                </StatHelpText>
                            </Stat>
                        </Box>

                        <Box bgColor="white"  height="115px">
                            <Stat>
                                <StatNumber>93</StatNumber>
                                <StatLabel>Menunggu Konfirmasi</StatLabel>
                                <StatHelpText>
                                    <StatArrow type="decrease"/>
                                </StatHelpText>
                            </Stat>
                        </Box>

                        <Box bgColor="white" height="120px">
                            <Stat>
                                <StatNumber>23</StatNumber>
                                <StatLabel>Disetujui</StatLabel>
                                <StatHelpText>
                                    <StatArrow type="increase"/>
                                </StatHelpText>
                            </Stat>
                        </Box>

                        <Box bgColor="white" height="115px">
                            <Stat>
                                <StatNumber>73</StatNumber>
                                <StatLabel>Rejected by Accounting</StatLabel>
                                <StatHelpText>
                                    <StatArrow type="increase"/>
                                </StatHelpText>
                            </Stat>
                        </Box>

                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}