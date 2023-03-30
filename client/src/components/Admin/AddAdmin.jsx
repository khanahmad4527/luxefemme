import { Box, Button, Flex, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from '@chakra-ui/react'
  import { useDispatch } from "react-redux";
import { addAdminSuccess, getAdminSuccess } from '../../redux/admin/admin.action';
import { useState } from 'react';
const AddAdmin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch=useDispatch();
  
    const initState={
        "firstname":"",
        "lastname":"",
       "email":"",
        "hashedPassword":"",
        "role":"admin"
    }
    const [admin,setAdmin]=useState(initState);
    const handleChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
      }
  return (
    <Box w="100%">
        <Flex justifyContent="space-between" p="10px">
      <Text textAlign={"center"} fontSize="20px" fontWeight="bold">Admin List</Text>
      <Button colorScheme={"blue"} onClick={()=>{onOpen()}}>Add an admin</Button>
      </Flex>



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
         <Text>Password</Text>
         <Input name="hashedPassword" placeholder="Passwod" value={admin.hashedPassword} onChange={handleChange}/>
         <br/><br/>
         <Button size="sm" colorScheme="red" onClick={()=>{
          dispatch(addAdminSuccess(admin));
          dispatch(getAdminSuccess())
          onClose()
          setAdmin(initState)
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

export default AddAdmin