import { Box, Text } from '@chakra-ui/react'
import React from 'react'

import { useEffect } from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAdminSuccess, getProductSuccess, getUserSuccess } from '../../redux/admin/admin.action';
import Loading from '../../utils/Loading';
const AdminPage = () => {
 
  const dispatch = useDispatch();
  const { totalPages,
    totalUser,
    totalAdmin, loading } = useSelector(store => store.admin);
  const getDetails = async () => {
    //  let data=await getProduct();
    //  let data1=await getAdmin();
    //  let data2=await getUsers();
    //  //console.log(data1)
    // setProd(data.data.product);
    //  setAdmin(data1.user);
    // setUser(data2.user);
    dispatch(getAdminSuccess())
    dispatch(getUserSuccess())
    dispatch(getProductSuccess())
  }

  useEffect(() => {
    getDetails()
  }, [])
  return (
    <Box w={{ base: 'full', md: "70%", lg: "80%" }} m="auto" mr="0rem" p="10px">
      {loading ? <Loading /> : <Box w="100%" h="auto" display="flex" flexWrap={"wrap"} justifyContent="space-around" gap="8px">
        <Box w="300px" h="150px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" display="flex" justifyContent={"space-evenly"} alignItems="center">
          <RiProductHuntLine fontSize="60px" />
          <Text fontWeight="bold" fontSize="20px">Total Products : {totalPages}</Text>
        </Box>
        <Box w="300px" h="150px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" display="flex" justifyContent={"space-evenly"} alignItems="center">
          <GrUserAdmin fontSize="60px" />
          <Text fontWeight="bold" fontSize="20px">Admins : {totalAdmin}</Text>
        </Box>
        <Box w="300px" h="150px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" display="flex" justifyContent={"space-evenly"} alignItems="center">
          <AiOutlineUser fontSize="60px" />
          <Text fontWeight="bold" fontSize="20px">Users : {totalUser}</Text>
        </Box>

      </Box>}
    </Box>
  )
}

export default AdminPage