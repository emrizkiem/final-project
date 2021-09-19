import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Button,
  ButtonGroup,
  Divider,
  Tr,
  Th,
  Td,
  Center,
  Box,
  Flex,
  Stack,
  Spacer,
  Select,
  Editable,
  EditablePreview,
  EditableInput,
  Text,
  Input
} from "@chakra-ui/react";

import { useState } from "react";
import ModalAdd from './modalAdd';
import ModalDetail from './modalDetail';
import ModalEdit from './modalEdit';
import ModalDelete from './modalDelete';
import { Header } from 'components';

export default function ListAdmin() {

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDetails() {
    setIsOpenDetails(true);
  }

  function closeModalDetails() {
    setIsOpenDetails(false);
  }

  function openModalAdd() {
    setIsOpenAdd(true);
  }

  function closeModalAdd() {
    setIsOpenAdd(false);
  }

  function openModalEdit() {
    setIsOpenEdit(true);
  }

  function closeModalEdit() {
    setIsOpenEdit(false);
  }

  const tableData = {
    header: ["No", "Name", "Role", "Email", "Aksi"],
    body: [
      {
        no: 1,
        fullname: "Dinda Nurlita",
        role: "Accounting",
        email: "dindanurlita@bri.co.id",
        aksi: "Detail",
        edit: "Edit",
        delete: "Hapus"
      },

      {
        no: 2,
        fullname: "Sarifuddin",
        role: "General Support",
        email: "sarifuddin@bri.co.id",
        aksi: "Detail",
        edit: "Edit",
        delete: "Hapus"
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
      <ModalAdd isOpen={isOpenAdd} onClose={() => closeModalAdd()} />
      <ModalEdit isOpen={isOpenEdit} onClose={() => closeModalEdit()} />
      <ModalDetail isOpen={isOpenDetails} onClose={() => closeModalDetails()} />
      <ModalDelete isOpen={isOpenDelete} onClose={() => closeModalDelete()} />
      <Header />

      <Box bgColor="#E5E5E5" pt="1em">
        <Box marginLeft="100px" marginTop="20px" fontSize="14px">
          OVERVIEW
        </Box>
        <Box marginLeft="100px" fontSize="20px" fontWeight="500">
          Dashboard
        </Box>

        <Flex bgColor="#E5E5E5" height="600px">
          <Box flex="1">
            <Box bgColor="white" marginLeft="100px" marginRight="100px" height="510px">
              <Stack direction="row" marginLeft="20px" marginTop="20px" marginRight="30px">
                <Text fontSize="xl" marginTop="25px" marginBottom="20px" fontWeight="600" >Role and Account</Text>
                <Spacer />

                <Center>
                  <Button bgColor="#4269F2" colorScheme="#4269F2" textColor="white" onClick={() => openModalAdd()}>
                    + Add New Role & Account
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
                <Input size="sm" variant="outline" width="170px" />
              </Stack>

              <Box marginLeft="20px" marginRight="30px">
                <Table variant="simple" marginTop="20px" >
                  <Thead  >
                    <Tr borderWidth="1px" borderColor="gray">
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
                            <Td borderWidth="1px" width="5%" borderColor="black" textAlign="center">
                              <Box>
                                {body.no}
                              </Box>
                            </Td>
                            <Td borderWidth="1px" width="30%" borderColor="black" fontSize="16px" textAlign="center"> {body.fullname}</Td>
                            <Td borderWidth="1px" fontSize="16px" width="30%px" borderColor="black" textAlign="center">{body.role}</Td>

                            <Td borderWidth="1px" borderColor="black" width="15%">
                              <Box fontSize="16px" justifyContent="center" display="flex" alignItems="center">
                                <Box justifyContent="center" display="flex" alignItems="center" height="30px" boxSizing="unset" borderRadius="5px" px="10px">
                                  {body.email}
                                </Box>
                              </Box>
                            </Td>

                            <Td borderWidth="1px" borderColor="black" width="25%" textAlign="center">
                              <Button size="sm" bgColor="#FFE29D" colorScheme="#FFE29D" color="#333333" marginRight="8px" onClick={() => openModalEdit()}>
                                {body.edit}
                              </Button>
                              <Button size="sm" bgColor="#ECE9F1" colorScheme="#ECE9F1" color="#333333" marginRight="8px" onClick={() => openModalDetails()}>
                                {body.aksi}
                              </Button>
                              <Button size="sm" bgColor="#FDAFBB" colorScheme="#FDAFBB" color="#333333" onClick={() => openModalDelete()}>
                                {body.delete}
                              </Button>
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
        </Flex>
      </Box>

    </Box>
  )
}