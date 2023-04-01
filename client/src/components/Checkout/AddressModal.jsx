import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  addAddress,
  updateAddress,
} from "../../redux/checkout/checkout.actions";
import { useDispatch } from "react-redux";

const AddressModal = ({
  title,
  userAddress,
  isOpen2,
  onOpen2,
  onClose2,
  formData,
  setFormData,
  initialFormData,
  addressOperation,
  setAddressOperation,
}) => {
  const toast = useToast();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("address.")) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name.split(".")[1]]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addressOperation === "add") {
      toast({
        title: "Successfully Added",
        description: "We've added the new address in your account",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });

      const newData = [
        { id: userAddress.length + 1, ...formData },
        ...userAddress,
      ];

      dispatch(addAddress(newData));
    } else if (addressOperation === "edit") {
      toast({
        title: "Successfully Updated",
        description: "We've updated the address in your account",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      const newData = userAddress.map((item) =>
        item.id === formData.id ? formData : item
      );
      dispatch(updateAddress(newData));
    }

    setFormData(initialFormData);
    onClose2();
  };

  return (
    <Modal
      isOpen={isOpen2}
      onClose={() => {
        onClose2();
        setFormData(initialFormData);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"sm.sparkle"}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody color={"sm.sparkle"}>
          <form onSubmit={handleSubmit}>
            <VStack spacing="20px">
              <FormControl id="full_name" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={{
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  _hover={{
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={{
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  _hover={{
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="street_address" isRequired>
                <FormLabel>Street Address</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={{
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  _hover={{
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  type="text"
                  name="address.street_address"
                  value={formData.address.street_address}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="apartment" isRequired>
                <FormLabel>Apt./Suite/Other</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={{
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  _hover={{
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  type="text"
                  name="address.apartment"
                  value={formData.address.apartment}
                  onChange={handleChange}
                />
              </FormControl>
              <HStack spacing="20px">
                <FormControl id="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={{
                      boxShadow: "none",
                      border: "2px solid",
                      borderColor: "teal.500",
                    }}
                    _hover={{
                      border: "2px solid",
                      borderColor: "teal.500",
                    }}
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="state" isRequired>
                  <FormLabel>State</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={{
                      boxShadow: "none",
                      border: "2px solid",
                      borderColor: "teal.500",
                    }}
                    _hover={{
                      border: "2px solid",
                      borderColor: "teal.500",
                    }}
                    type="text"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="pincode" isRequired>
                  <FormLabel>Pincode</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={{
                      boxShadow: "none",
                      border: "2px solid",
                      borderColor: "teal.500",
                    }}
                    _hover={{
                      border: "2px solid",
                      borderColor: "teal.500",
                    }}
                    type="text"
                    name="address.pincode"
                    value={formData.address.pincode}
                    onChange={handleChange}
                  />
                </FormControl>
              </HStack>
              <FormControl id="country" isRequired>
                <FormLabel>Country</FormLabel>
                <Input
                  disabled
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={{
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  _hover={{
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={{
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  _hover={{
                    border: "2px solid",
                    borderColor: "teal.500",
                  }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                type="submit"
                textTransform={"uppercase"}
                bg="lf.button"
                color="white"
                _hover={{
                  color: "lf.black",
                  bg: "teal.500",
                }}
              >
                {addressOperation === "add"
                  ? "ADD"
                  : addressOperation === "edit"
                  ? "EDIT"
                  : ""}
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddressModal;
