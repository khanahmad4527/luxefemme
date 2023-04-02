import { Box, Button, Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from '@chakra-ui/react';
  import { useDispatch } from "react-redux";
import { addProductsSucess, getProductSuccess } from '../../redux/admin/admin.action';
const AddProduct = () => {
    const dispatch=useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [url,setUrl]=useState("");
    const [sizeText,setSizeText]=useState("");
     const [img,setImg]=useState([]);
    const initState={
        title:"",
        category:"",
        price:0,
        discount:0,
        discountPrice:0,
        rating:0,
        reviews:0,
        image:"",
        images:[img],
        sizes:"",
        quantity:0,
        description:"",
        brand:"",
        addedAt:"",
        updatedAt:""
    }
    const [payload,setPayload]=useState(initState);

    const handleChange=(e)=>{
        setPayload({...payload,[e.target.name]:e.target.value})
    }
  
  return (
    <Box>
 <Flex justifyContent="space-between" p="10px">
      <Text textAlign={"center"} fontSize="20px" fontWeight="bold">Products List</Text>
      <Button colorScheme={"blue"} onClick={()=>{onOpen()}}>Add a product</Button>
      </Flex>

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Title</Text>
         <Input name="title" placeholder="First Name" value={payload.title} onChange={handleChange}/>
         <Text>Category</Text>
         <Input name="category" placeholder="Category" value={payload.category} onChange={handleChange}/>
         <Text>Price</Text>
         <Input name="price" placeholder="Price" value={payload.price} onChange={handleChange}/>
         <Text>Discount</Text>
         <Input name="discount" placeholder="discount" value={payload.discount} onChange={handleChange}/>
         <Text>Discount Price</Text>
         <Input name="discountPrice" placeholder="discountPrice" value={payload.discountPrice} onChange={handleChange}/>
         <Text>Rating</Text>
         <Input name="rating" placeholder="Rating" value={payload.rating} onChange={handleChange}/>
         <Text>Reviews</Text>
         <Input name="reviews" placeholder="Reviews" value={payload.reviews} onChange={handleChange}/>
         <Text>Image</Text>
         <Input name="image" placeholder="Image" value={payload.image} onChange={handleChange}/>
         <Text>Images</Text>
         <Input name="images" placeholder="Image" type="text" onChange={(e)=>{let z=e.target.value.split(",");setImg(z)}}/>
         <Text>Sizes</Text>
         <Input name="Sizes" placeholder="Sizes" type="text" onChange={(e)=>{let z=e.target.value.split("");setSizeText(z)}}/>
         <Text>Quantity</Text>
         <Input name="quantity" placeholder="Quantity" type="number" value={payload.quantity} onChange={handleChange}/>
         <Text>Description</Text>
         <Input name="description" placeholder="description" type="text" value={payload.description} onChange={handleChange}/>
         <Text>Brand</Text>
         <Input name="brand" placeholder="brand" type="text" value={payload.brand} onChange={handleChange}/>
         <Text>AddedAt</Text>
         <Input name="addedAt" placeholder="addedAt" type="text" value={payload.addedAt} onChange={handleChange}/>
         <Text>UpdatedAt</Text>
         <Input name="updatedAt" placeholder="updatedAt" type="text" value={payload.updatedAt} onChange={handleChange}/>

         <br/><br/>
         <Button size="sm" colorScheme="red" onClick={()=>{
        const pay={...payload,images:[img],sizes:sizeText};
        dispatch(addProductsSucess(pay))
          dispatch(getProductSuccess())
       
           onClose()
           setPayload(initState)
         }}>Add</Button>
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

export default AddProduct