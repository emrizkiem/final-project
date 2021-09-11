import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    ChakraProvider,
    Box, 
    Flex, 
    Spacer,
    Button,
    Text,
    Select,
    Input,
    AddIcon,
    Tag,
    TagLabel,
    Avatar,
    Image,
    GridItem,
    Grid
  } from "@chakra-ui/react"
import React from "react";
import  BasicUsage from "./modalTunggu";
import  Reject from "./modalReject";
import  Success from "./modalBerhasil";
import { Header } from "components";


function generalDashboard(){

    return(
<Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Header/>
    
    
    <Box p="6">
        <Text fontSize="14px" ml="10">OVERVIEW</Text>
        <Text fontSize="20px" ml="10">Dashboard</Text>
    </Box>

      <Box p="6">
        <Flex>
            <Text mt="2" mr="2" fontSize="28px">Invoice Payment Request</Text>
            
                <Spacer />
            <Button LeftIcon={<AddIcon/>} width="80" colorScheme="red" size="lg">Create Payment Request</Button>
        </Flex>
        <Text>________________________________________________________</Text>
      </Box>
      
      <Box p="6">
      <Grid
        h="lg"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={6}
        >
        <GridItem rowSpan={10} colSpan={4}>
        <Flex>
            <Text mt="2" mr="2">Menampilkan</Text>
            <Select height="10" width="70" placeholder="10">
                    <option value="option1">25</option>
                    <option value="option2">50</option>
                    <option value="option3">100</option>
            </Select>
            <Spacer />
            <Text mt="2" mr="2" >Pencarian:</Text>
            <Input padding width="50"  mx="auto" placeholder="Cari Data" />
            </Flex>
        <Table mt="5" variant="simple" colorScheme="blackAlpha" borderWidth="1px" height="400px">
        <TableCaption>
        <Flex>
            <Text mt="2" mr="2">Total 3 data, menampilkan data (1 sampai 3)</Text>

            <Spacer />
            <Text mt="2" mr="2" >Sebelumnya</Text>
            <Text mt="2" mr="2" colorScheme="green" width="10px" >1</Text>
            <Text mt="2" mr="2" >Selanjutnya</Text>
            </Flex>
        </TableCaption>
            <Thead>
                <Tr>
                    <Th>No</Th>
                    <Th>Tanggal Request</Th>
                    <Th>tanggal Pembayaran</Th>
                    <Th>Status</Th>
                    <Th>Aksi</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>29 Agustus 2021 - 20.00 WIB </Td>
                    <Td >30 Agustus 2021</Td>
                    <Td>Menuggu Konfirmasi</Td>
                    <Td><BasicUsage>
                tr,mlkl
            </BasicUsage></Td>
                </Tr>
                <Tr>
                    <Td>2</Td>
                    <Td>9 Agustus 2021 - 10.03 WIB </Td>
                    <Td >10 Agustus 2021</Td>
                    <Td>Disetujui</Td>
                    <Td><Success> tr,mlkl</Success></Td>
                </Tr>
                <Tr>
                    <Td>3</Td>
                    <Td>2 Agustus 2021 - 13.40 WIB </Td>
                    <Td >3 Agustus 2021</Td>
                    <Td>Rejected by Accounting</Td>
                    <Td><Reject> tr,mlkl</Reject></Td>
                </Tr>
            </Tbody>
        </Table>
        </GridItem>
        <GridItem colSpan={1} >
            <Box p="4" bg="white">
                <Text>6</Text>
                <Text align="center">43</Text>
                <Text align="center">New Payment Request</Text>
            </Box>
        </GridItem>
        <GridItem colSpan={1}>
            <Box p="4" bg="white">
                <Text>6</Text>
                <Text align="center">93</Text>
                <Text align="center">Menunggu Konfirmasi</Text>
            </Box>
        </GridItem>
        <GridItem colSpan={1} >
            <Box p="4" bg="white">
                <Text>6</Text>
                <Text align="center">23</Text>
                <Text align="center">Disetujui</Text>
            </Box>
        </GridItem>
        <GridItem colSpan={1}  >
            <Box p="4" bg="white">
                <Text justifyContent="flex-start">6</Text>
                <Text align="center">73</Text>
                <Text align="center">Rejected by Accounting</Text>
            </Box>
        </GridItem> 
        </Grid>
    </Box>  

</Box>
    
       
            
        
        )
}
export default generalDashboard;