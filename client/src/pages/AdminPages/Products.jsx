import React, { useState } from 'react'
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
    useDisclosure,
    Image,
  } from '@chakra-ui/react'
  import { useEffect } from 'react';
  import { useDispatch, useSelector } from "react-redux";
  import { BiPencil } from "react-icons/bi";
//AiFillDelete
import { AiFillDelete } from "react-icons/ai";
import Loading from '../../utils/Loading';
import { deleteProductSucess, getProductSuccess } from '../../redux/admin/admin.action';
const Products = () => {
  const {products,loading}=useSelector(store=>store.admin);
  const { isOpen, onOpen, onClose } = useDisclosure()
 const dispatch=useDispatch();
 const [prod,setProd]=useState([]);
 useEffect(()=>{
dispatch(getProductSuccess())
 },[])
 console.log(products)
  return (
    <Box w={{ base: 'full', md: "70%",lg:"80%" }} m="auto" border="solid" mr="0rem">
        { loading ?  <Loading/> :<TableContainer top="0px" w="100%">
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Total User : {user}</TableCaption> */}
    <TableCaption><Button size="sm">Prev</Button><Button size="sm">1</Button><Button size="sm">Next</Button></TableCaption>
    <Thead bg="blue" >
      <Tr >
        <Th textAlign={"center"} color="white">Sr. No.</Th>
        <Th textAlign={"center"} color="white">Edit</Th>
        <Th textAlign={"center"}color="white">Image</Th>
        <Th textAlign={"left"}color="white">Category</Th>
        <Th textAlign={"center"}color="white">Price</Th>
        <Th textAlign={"center"}color="white">Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
     {
      products?.map((el,i)=><Tr key={el._id}>
        <Td textAlign={"center"}>{i+1}</Td>
        <Td textAlign={"center"} cursor="pointer"><Center onClick={()=>{
          setProd(el);
          onOpen()
        }}><BiPencil  /></Center></Td>
        <Td textAlign={"center"} w="10%"><Image w="100%" src={el.image}/></Td>
        <Td>{el.category}</Td>
        <Td textAlign={"center"}>₹{el.price}</Td>
        <Td textAlign={"center"} cursor="pointer"><Center><AiFillDelete onClick={()=>{
           dispatch(deleteProductSucess(el._id));
           dispatch(getProductSuccess())
          console.log(el._id)
          }}/></Center></Td>
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
      <Td textAlign={"center"}>{""}</Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>}
    </Box>
  )
}

export default Products