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
    Center,
    Text,
    Avatar,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { delUserSuccess, getUserSuccess } from '../../redux/admin/admin.action';
import Loading from '../../utils/Loading';
import { CHANGE_USER_PAGE } from '../../redux/admin/admin.types';
import { AiFillDelete } from "react-icons/ai";
const Users = () => {
   const [user,setUser]=useState(0);
   const dispatch=useDispatch();
   const {users,loading,userPage,totalUser}=useSelector(store=>store.admin);
  //  console.log(users,"dd")
   useEffect(()=>{
dispatch(getUserSuccess(userPage))
   },[dispatch])
  //  console.log(store)
  const handlePayload=(payload)=>{
    let newPage=userPage+payload;
    dispatch({type:CHANGE_USER_PAGE,payload:newPage})
    dispatch(getUserSuccess(userPage))
  }
  return (
    <Box w={{ base: 'full', md: "70%",lg:"80%" }} m="auto"  mr="0rem">
      <Text textAlign={"left"} fontSize="25px" fontWeight={"bold"}>Users List</Text>
  {
    loading?<Loading/>:        <TableContainer top="0px">
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>Total User : {totalUser}</TableCaption>
      <TableCaption><Button size="sm" colorScheme={"blue"} mr="2px" onClick={()=>{handlePayload(-1)}} isDisabled={userPage==1}>Prev</Button><Button size="sm" >{userPage}</Button><Button size="sm" colorScheme={"blue"} isDisabled={Math.ceil(totalUser/5)} onClick={()=>{handlePayload(+1)}} ml="2px">Next</Button></TableCaption>
      <Thead bg="blue">
        <Tr>
          <Th textAlign={"center"}color="white">Sr. No.</Th>
          <Th textAlign={"center"} color="white">Avatar</Th>
          <Th textAlign={"center"}color="white">Name</Th>
          <Th textAlign={"center"}color="white">Email</Th>
          <Th textAlign={"center"}color="white">Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
       {
       users.map((el,i)=><Tr key={el._id}>
        <Td textAlign={"center"}>{i+1}</Td>
        <Td textAlign={"center"}> <Avatar
      size='md'
      name={el.firstname[0]+el.lastname[0]}
    /></Td>
        <Td textAlign={"center"}>{el.firstname+" "+el.lastname}</Td>
        <Td textAlign={"center"}>{el.email}</Td>
        <Td><Center><AiFillDelete onClick={()=>{dispatch(delUserSuccess(el._id));dispatch(getUserSuccess())}}/></Center></Td>
       </Tr>)
       }
      </Tbody>
      
        <Tfoot bg="blue">
      <Tr>
      <Td textAlign={"center"}>{""}</Td>
      <Td textAlign={"center"}>{""}</Td>
      <Td textAlign={"center"}>{""}</Td>
      <Td textAlign={"center"}>{""}</Td>
      <Td textAlign={"center"}>{""}</Td>
      </Tr>
    </Tfoot>
    </Table>
  </TableContainer>


   }
    </Box>
  )
}

export default Users;