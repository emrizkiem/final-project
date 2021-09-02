import React from 'react';
import{
    Heading,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Button,
    ButtonGroup,
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
    EditableInput
} from "@chakra-ui/react";

import { BellIcon } from '@chakra-ui/icons';

import Logo from "./logo.png"

export default function ListPayment() {
    return(
        <Box>
            <Box display="flex" height="100px" alignItems="center">
                <Image marginLeft="100px" marginTop="10px" width="150px" src={Logo} alt="Logo"/>
                <Spacer/>
                <BellIcon w={8} h={8}></BellIcon>
                <Wrap>
                    <WrapItem alignItems="center" marginRight="50px">
                        <Avatar name="John Doe" src="https://bit.ly/sage-adebayo" marginLeft="30px" marginRight="20px"></Avatar>
                        <Stack spacing={1} marginLeft="17px" marginRight="150px">
                            <h2 fontSize="md">John Doe</h2>
                            <p fontSize="sm">Unit Kerja</p>
                        </Stack>
                    </WrapItem>
                </Wrap>
            </Box>
            
            <Flex bgColor="#E5E5E5">
                <Box marginLeft="100px" marginTop="20px">
                    <h2>Overview</h2>
                    <h1>Dashboard</h1>
                </Box>
            </Flex>

            <Flex bgColor="#E5E5E5">
                <Box flex="5" marginLeft="100px" marginTop="20px">
                    <Stack direction="row">
                        <h2>Invoice Payment Request</h2>
                        <Spacer/>
                        <Button colorScheme="red">+ Create Payment Request</Button>
                    </Stack>

                    <Stack direction="row" marginTop="10px">
                        <h2 marginTop="10px">Menampilkan</h2>
                        <Select placeholder="10" variant="outline" size="xs" width="70px">
                            <option value="option1">1</option>
                            <option value="option2">2</option>
                            <option value="option3">3</option>
                        </Select>
                        <Spacer/>
                        <h2>Pencarian</h2>
                        <input></input>
                    </Stack>

            
                    
                    
                </Box>
            
                <Box flex="3" marginTop="20px" marginBottom="20px">
                    <SimpleGrid spacing="10px" marginLeft="50px">
                        <Center bg="white" height="100px" width="300px" position="relative">
                            <Box position="absolute" top="5px" right="5px">
                                Icon
                            </Box>
                            <Box>
                                43
                            </Box>
                            New Payment Request
                        </Center>
                        <Center bg="white" height="100px" width="300px" position="relative">
                            <Box position="absolute" top="5px" right="5px">
                                Icon
                            </Box>
                            Menunggu Konfirmasi
                        </Center>
                        <Center bg="white" height="100px" width="300px" position="relative">
                            <Box position="absolute" top="5px" right="5px">
                                Icon
                            </Box>
                            Disetujui
                        </Center>
                        <Center bg="white" height="100px" width="300px" position="relative">
                            <Box position="absolute" top="5px" right="5px">
                                Icon
                            </Box>
                            Rejected by Accounting
                        </Center>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}