import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import SimpleSidebar from '../../components/Admin/AdminSidebar'

const AdminPage = () => {
  return (
    <Box   border="solid"  w={{ base: 'full', md: "70%",lg:"80%" }} m="auto"  mr="0rem">
       <Box w="100%" h="auto" display="flex" flexWrap={"wrap"} justifyContent="space-around" gap="8px">
         <Box w="300px" h="200px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" display="flex" justifyContent={"space-evenly"} alignItems="center">

         </Box>
         <Box w="300px" h="200px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">

        </Box>
        <Box w="300px" h="200px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">

        </Box>
       <Box w="300px" h="200px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">

        </Box>
       </Box>
    </Box>
  )
}

export default AdminPage