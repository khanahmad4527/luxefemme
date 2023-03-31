import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getUserSuccess } from '../../redux/admin/admin.action';
const Users = () => {
   const [user,setUser]=useState(0);
   const dispatch=useDispatch();
   const {admins}=useSelector(store=>store.admin);
   console.log(admins,"dd")
   useEffect(()=>{
dispatch(getUserSuccess())
   },[])
  //  console.log(store)
  return (
    <Box w={{ base: 'full', md: "70%",lg:"80%" }} m="auto" border="solid" mr="0rem">
        <TableContainer top="0px">
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Total User : {user}</TableCaption>
    <TableCaption><Button size="sm">Prev</Button><Button size="sm">1</Button><Button size="sm">Next</Button></TableCaption>
    <Thead>
      <Tr>
        <Th>Sr. No.</Th>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Email</Th>
      </Tr>
    </Thead>
    <Tbody>
     
    </Tbody>
    <Tfoot>
      <Tr>
        
       
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Box>
  )
}

export default Users;