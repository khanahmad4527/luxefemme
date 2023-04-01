import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import SimpleSidebar from '../../components/Admin/AdminSidebar';
import {useEffect,useState} from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import {AiOutlineUser} from "react-icons/ai";
import {getProduct,getAdmin,getUsers} from "../../redux/admin/admin.api.js"
const AdminPage = () => {
  const [prod,setProd]=useState([]);
  const [admin,setAdmin]=useState([]);
  const[user,setUser]=useState([]);
  const getDetails=async()=>{
     let data=await getProduct();
     let data1=await getAdmin();
     let data2=await getUsers();
    setProd(data);
    setAdmin(data1);
    setUser(data2);
  }
  useEffect(()=>{
getDetails()
  },[])
  return (
    <Box    w={{ base: 'full', md: "70%",lg:"80%" }} m="auto"  mr="0rem" p="10px">
       <Box w="100%" h="auto" display="flex" flexWrap={"wrap"} justifyContent="space-around" gap="8px">
         <Box w="300px" h="150px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" display="flex" justifyContent={"space-evenly"} alignItems="center">
            <RiProductHuntLine fontSize="60px"/>
            <Text fontWeight="bold" fontSize="20px">Total Products : {prod.length}</Text>
         </Box>
         <Box w="300px" h="150px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" display="flex" justifyContent={"space-evenly"} alignItems="center">
         <GrUserAdmin fontSize="60px"  />
         <Text fontWeight="bold" fontSize="20px">Admins : {admin.length}</Text>
        </Box>
        <Box w="300px" h="150px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" display="flex" justifyContent={"space-evenly"} alignItems="center">
         <AiOutlineUser fontSize="60px"/>
         <Text fontWeight="bold" fontSize="20px">Users : {user.length}</Text>
        </Box>
      
       </Box>
    </Box>
  )
}

export default AdminPage