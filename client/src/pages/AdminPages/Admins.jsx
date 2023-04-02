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
    useDisclosure,
    Input,
    Text,
    Heading,
    Flex,
    Avatar,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { CHANGE_ADMIN_PAGE } from '../../redux/admin/admin.types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { delAdminSuccess, getAdminSuccess, updateAdminSuccess } from '../../redux/admin/admin.action';
//BiPencil
import { BiPencil } from "react-icons/bi";
//AiFillDelete
import { AiFillDelete } from "react-icons/ai";
import AddAdmin from '../../components/Admin/AddAdmin';
import Loading from '../../utils/Loading';
const Admins = () => {
   const [admin,setAdmin]=useState(0);
   const { isOpen, onOpen, onClose } = useDisclosure()
   const dispatch=useDispatch();
   const {admins,loading,adminPage,totalAdmin}=useSelector(store=>store.admin);
    console.log(totalAdmin,admins,"tt")
   useEffect(()=>{
dispatch(getAdminSuccess(adminPage))
   },[])
   const handlePayload=(payload)=>{
    let newPage=adminPage+payload;
    dispatch({type:CHANGE_ADMIN_PAGE,payload:newPage})
    dispatch(getAdminSuccess(adminPage))
  }
// console.log(Math.ceil(totalAdmin/adminPage),"print")
  const handleChange=(e)=>{
    setAdmin({...admin,[e.target.name]:e.target.value})
  }//
  return (
    <Box w={{ base: 'full', md: "70%",lg:"80%" }} m="auto"  mr="0rem">
      
    <AddAdmin/>
      <br/>
      <br/>
       { loading ?  <Loading/> :<TableContainer top="0px" w="100%">
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Total User : {user}</TableCaption> */}
    <TableCaption><Button size="sm" colorScheme={"blue"} mr="2px"  onClick={()=>{handlePayload(-1)}} isDisabled={adminPage===1}>Prev</Button><Button size="sm" >{adminPage}</Button><Button size="sm" colorScheme={"blue"} isDisabled={adminPage===Math.ceil(totalAdmin/5)} onClick={()=>{handlePayload(+1)}} ml="2px">Next</Button></TableCaption>
    <Thead bg="blue" >
      <Tr >
        <Th textAlign={"center"} color="white">Sr. No.</Th>
        <Th textAlign={"center"} color="white">Avatar</Th>
        <Th textAlign={"center"} color="white">Edit</Th>
        <Th textAlign={"center"}color="white">Name</Th>
        <Th textAlign={"center"}color="white">Email</Th>
        <Th textAlign={"center"}color="white">Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
     {
      admins?.map((el,i)=><Tr key={el._id}>
        <Td textAlign={"center"}>{i+1}</Td>
        <Td textAlign={"center"}> <Avatar
      size='md'
      name={el.firstname[0]+el.lastname[0]}
    /></Td>
        <Td textAlign={"center"} cursor="pointer"><Center onClick={()=>{
          setAdmin(el);
          onOpen()
        }}><BiPencil  /></Center></Td>
        <Td textAlign={"center"}>{el.firstname+" "+el.lastname}</Td>
        <Td textAlign={"center"}>{el.email}</Td>
        <Td textAlign={"center"} cursor="pointer"><Center><AiFillDelete onClick={()=>{
           dispatch(delAdminSuccess(el._id));
           dispatch(getAdminSuccess())
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
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>First Name</Text>
         <Input name="firstname" placeholder="First Name" value={admin.firstname} onChange={handleChange}/>
         <Text>Last Name</Text>
         <Input name="lastname" placeholder="Last Name" value={admin.lastname} onChange={handleChange}/>
         <Text>Email</Text>
         <Input name="email" placeholder="Email" value={admin.email} onChange={handleChange}/>
        
         <br/><br/>
         <Button size="sm" colorScheme="red" onClick={()=>{
          dispatch(updateAdminSuccess(admin._id,admin));
          dispatch(getAdminSuccess())
          onClose()

         }}>Update</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Admins;