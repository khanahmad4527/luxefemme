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
    Text,
    Input,
  } from '@chakra-ui/react'
  import { useEffect } from 'react';
  import { useDispatch, useSelector } from "react-redux";
  import { BiPencil } from "react-icons/bi";
  import { useSearchParams } from 'react-router-dom';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from '@chakra-ui/react';
//AiFillDelete
import { AiFillDelete } from "react-icons/ai";
import Loading from '../../utils/Loading';
import { deleteProductSucess, getProductSuccess, updateProductSuccess } from '../../redux/admin/admin.action';
import AddProduct from '../../components/Admin/AddProduct';
import { CHANGE_PRODUCT_PAGE } from '../../redux/admin/admin.types';
const Products = () => {
  const {products,loading,productpage,totalPages}=useSelector(store=>store.admin);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const initialPage = searchParams.get('page')
  //  const[page,setPage]=useState(initialPage||1);
console.log(products)
  const { isOpen, onOpen, onClose } = useDisclosure()
 const dispatch=useDispatch();
 const [prod,setProd]=useState([]);
const handlePayload=(payload)=>{
  let newPage=productpage+payload;
  dispatch({type:CHANGE_PRODUCT_PAGE,payload:newPage})
  dispatch(getProductSuccess(newPage))
}

 useEffect(()=>{
  // const params={param:{
  //   page:page
  // }};
//  setSearchParams(params.param)
dispatch(getProductSuccess(productpage))
 },[dispatch])
 const handleChange=(e)=>{
setProd({...prod,[e.target.name]:e.target.value})
 }

  return (
    <Box w={{ base: 'full', md: "70%",lg:"80%" }} m="auto"  mr="0rem">
      <AddProduct/>
        { loading ?  <Loading/> :<TableContainer top="0px" w="100%">
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Total User : {user}</TableCaption> */}
    <TableCaption><Button size="sm" colorScheme={"blue"} mr="2px" onClick={()=>{handlePayload(-1)}} isDisabled={productpage==1}>Prev</Button><Button size="sm" >{productpage}</Button><Button size="sm" isDisabled={productpage===Math.ceil(totalPages/10)} colorScheme={"blue"} onClick={()=>{handlePayload(+1)}} ml="2px">Next</Button></TableCaption>
    <Thead bg="blue" >
      <Tr >
        <Th textAlign={"left"} color="white">Product Id.</Th>
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
        <Td textAlign={"left"}>{el._id}</Td>
        <Td textAlign={"center"} cursor="pointer"><Center onClick={()=>{
          setProd(el);
          onOpen()
        }}><BiPencil  /></Center></Td>
        <Td textAlign={"center"} w="8%"><Image w="100%" src={el.image}/></Td>
        <Td>{el.category}</Td>
        <Td textAlign={"center"}>₹{el.price}</Td>
        <Td textAlign={"center"} cursor="pointer"><Center><AiFillDelete onClick={()=>{
           dispatch(deleteProductSucess(el._id))
            // dispatch(getProductSuccess())
          
             
           
         
         
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
            <Text>Title</Text>
         <Input name="title" placeholder="First Name" value={prod.title} onChange={handleChange}/>
         <Text>Category</Text>
         <Input name="category" placeholder="Category" value={prod.category} onChange={handleChange}/>
         <Text>Price</Text>
         <Input name="price" placeholder="Price" value={prod.price} onChange={handleChange}/>
         <Text>Discount</Text>
         <Input name="discount" placeholder="discount" value={prod.discount} onChange={handleChange}/>
         <Text>Discount Price</Text>
         <Input name="discountPrice" placeholder="discountPrice" value={prod.discountPrice} onChange={handleChange}/>
         <Text>Rating</Text>
         <Input name="rating" placeholder="Rating" value={prod.rating} onChange={handleChange}/>
         <Text>Reviews</Text>
         <Input name="reviews" placeholder="Reviews" value={prod.reviews} onChange={handleChange}/>
         <Text>Image</Text>
         <Input name="image" placeholder="Image" value={prod.image} onChange={handleChange}/>
         <Text>Images</Text>
         <Input name="images" placeholder="Image" type="text" onChange={handleChange}/>
         <Text>Sizes</Text>
         <Input name="Sizes" placeholder="Sizes" type="text" onChange={handleChange}/>
         <Text>Quantity</Text>
         <Input name="quantity" placeholder="Quantity" type="number" value={prod.quantity} onChange={handleChange}/>
         <Text>Description</Text>
         <Input name="description" placeholder="description" type="text" value={prod.description} onChange={handleChange}/>
         <Text>Brand</Text>
         <Input name="brand" placeholder="brand" type="text" value={prod.brand} onChange={handleChange}/>
         <Text>AddedAt</Text>
         <Input name="addedAt" placeholder="addedAt" type="text" value={prod.addedAt} onChange={handleChange}/>
         <Text>UpdatedAt</Text>
         <Input name="updatedAt" placeholder="updatedAt" type="text" value={prod.updatedAt} onChange={handleChange}/>

         <br/><br/>
         <Button size="sm" colorScheme="red" onClick={()=>{
       
        dispatch(updateProductSuccess(prod._id,prod))
          dispatch(getProductSuccess())
        
      
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

export default Products