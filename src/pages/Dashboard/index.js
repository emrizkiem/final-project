import React from 'react';
import {Box, Image, Wrap, WrapItem, Avatar, Text, Flex, Spacer, Heading, Table, Thead, Tbody, Tr, Td, Th, SimpleGrid, Stack, Button, Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Select,
    Input} from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'
import  Logo from "./logo.svg"

export default function Dashboard(){
    return(
        <Box>
        <Flex marginTop="16px" display="flex" alignItems="center">
            <Box marginLeft="125px" >
                <Image width="184px" height="68px" src={Logo} alt="Logo" />
            </Box>
            <Spacer />
            <Box marginRight="37px">
                <BellIcon w={6} h={6} />
            </Box>
            <Box marginRight="18px">
                <Wrap>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                    </WrapItem>
                </Wrap>
            </Box>
            <Box marginRight="138px">
                <Heading fontSize="16px">Dan Abrahmov</Heading>
                <Text fontSize="12px">Unit Kerja</Text>
            </Box>
        </Flex>

        <Box backgroundColor="#E5E5E5" marginTop="40px">
            <Box marginLeft="125px">
                <Text fontSize="14px"  paddingTop="14px">OVERVIEW</Text>
                <Text fontSize="20px">Dashboard</Text>
            </Box>
        </Box>
            <Flex backgroundColor="#E5E5E5">
            <Box flex="1" marginLeft="125px" marginRight="32px" marginTop="32px">
                <Flex backgroundColor="#FFFFFF" alignItems="center">
                <Text fontSize="14px" marginLeft="5px">Menampilkan</Text>   
                <Select placeholder="Select option">
                <option value="option1">1</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
                </Select>
                    <Spacer />
                    <Input marginLeft="30px" placeholder="Pencarian" />
                </Flex>
                <Flex backgroundColor="#FFFFFF">
                    <Box p="4" fontSize="18px">
                    Invoice Payment Request
                    </Box>
                    <Spacer />
                    <Stack spacing={4} direction="row" align="center">
                    <Button colorScheme="red" size="sm" fontSize="15px" marginRight="5px">
                        + Create Payment Request
                    </Button>
                    </Stack>
                </Flex>
                <Table variant="simple" size="md" backgroundColor="#FFFFFF" width="700px">
                    <Thead fontSize="14px">
                        <Tr>
                        <Th>No</Th>
                        <Th>Tanggal Request</Th>
                        <Th>Tanggal Pembayaran</Th>
                        <Th>Status</Th>
                        <Th>Aksi</Th>
                        </Tr>
                    </Thead>
                    <Tbody fontSize="14px">
                        <Tr>
                        <Td>1</Td>
                        <Td>29 Agustus 2021 - 20.00 WIB </Td>
                        <Td>29 Agustus 2021 - 20.00 WIB </Td>
                        <Td>Menuggu Konfirmasi </Td>
                        <Td>Detail </Td>
                        </Tr>
                    </Tbody>
                    <Tbody fontSize="14px">
                        <Tr>
                        <Td>2</Td>
                        <Td>29 Agustus 2021 - 20.00 WIB </Td>
                        <Td>29 Agustus 2021 - 20.00 WIB </Td>
                        <Td>Menuggu Konfirmasi </Td>
                        <Td>Detail </Td>
                        </Tr>
                    </Tbody>
                    <Tbody fontSize="14px">
                        <Tr>
                        <Td>3</Td>
                        <Td>29 Agustus 2021 - 20.00 WIB </Td>
                        <Td>29 Agustus 2021 - 20.00 WIB </Td>
                        <Td>Menuggu Konfirmasi </Td>
                        <Td>Detail </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Flex>
                    <Box p="4" fontSize="14px" >
                    Total 3 data, menampilkan data (1 sampai 3)
                    </Box>
                    <Spacer />
                    <Stack spacing={4} direction="row" align="center">
                    <Button colorScheme="black" variant="ghost" fontSize="14px">
                        Sebelumnya
                    </Button>
                    <Button colorScheme="red" size="sm" fontSize="15px">
                        1
                    </Button>
                    <Button colorScheme="black" variant="ghost" fontSize="14px">
                        Selanjutnya
                    </Button>
                    </Stack>
                </Flex>
            </Box>

            <Box flex="1" marginRight="60px" marginTop="32px" marginBottom="237px">
                    <SimpleGrid spacing={10}>
                    <StatGroup >
                        <Box width="300px" textAlign="center">
                        <Stat bg="#FFFFFF">
                            <StatLabel>New Payment Request</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                            </StatHelpText>
                        </Stat>
                        </Box>

                        <Box width="300px" textAlign="center">
                        <Stat bg="#FFFFFF">
                            <StatLabel>Menunggu Konfirmasi</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                            </StatHelpText>
                        </Stat>
                        </Box>
                        
                        <Box width="300px" textAlign="center">
                        <Stat bg="#FFFFFF">
                            <StatLabel>Disetujui</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                            </StatHelpText>
                        </Stat>
                        </Box>

                        <Box width="300px" textAlign="center">
                        <Stat bg="#FFFFFF">
                            <StatLabel>Rejected by Accounting</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                            </StatHelpText>
                        </Stat>
                        </Box>
                        </StatGroup>
    
                    </SimpleGrid>
                </Box>
            </Flex>



        </Box>
        )
    }
