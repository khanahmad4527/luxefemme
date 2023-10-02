import {
  Button,
  FormControl,
  FormErrorMessage,
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
import React, { useEffect, memo } from "react";
import {
  addAddress,
  updateAddress,
} from "../../redux/checkout/checkout.actions";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addressSchema } from "../../schemas/address";

const AddressModal = ({
  title,
  isOpen2,
  onClose2,
  formData,
  setFormData,
  initialFormData,
  addressOperation,
}) => {
  const toast = useToast();

  const dispatch = useDispatch();

  const {
    values,
    setValues,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialFormData,
    validationSchema: addressSchema,
    onSubmit: async (values, action) => {
      if (addressOperation === "add") {
        toast({
          title: "Successfully Added",
          description: "We've added the new address in your account",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        dispatch(addAddress(values));
      } else if (addressOperation === "edit") {
        toast({
          title: "Successfully Updated",
          description: "We've updated the address in your account",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        dispatch(updateAddress(values._id, values));
      }

      setFormData(initialFormData);
      onClose2();

      action.resetForm();
    },
  });

  useEffect(() => {
    setValues(addressOperation === "add" ? initialFormData : formData);
  }, [addressOperation, formData, initialFormData, setValues]);

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
        <ModalHeader color={"lf.black"}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody color={"lf.black"}>
          <form onSubmit={handleSubmit}>
            <VStack spacing="20px">
              <HStack spacing="20px">
                <FormControl
                  height="90px"
                  isInvalid={touched?.firstname && errors?.firstname}
                >
                  <FormLabel>First Name</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={
                      touched?.firstname && errors?.firstname
                        ? {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    _hover={
                      touched?.firstname && errors?.firstname
                        ? {
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={50}
                  />
                  {errors?.firstname && touched?.firstname ? (
                    <FormErrorMessage>{errors?.firstname}</FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  height="90px"
                  isInvalid={touched?.lastname && errors?.lastname}
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={
                      touched?.lastname && errors?.lastname
                        ? {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    _hover={
                      touched?.lastname && errors?.lastname
                        ? {
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={50}
                  />
                  {errors?.lastname && touched?.lastname ? (
                    <FormErrorMessage>{errors?.lastname}</FormErrorMessage>
                  ) : null}
                </FormControl>
              </HStack>

              <FormControl
                height="90px"
                isInvalid={touched?.mobile && errors?.mobile}
              >
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={
                    touched?.mobile && errors?.mobile
                      ? {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  _hover={
                    touched?.mobile && errors?.mobile
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  type="tel"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={10}
                />
                {errors?.mobile && touched?.mobile ? (
                  <FormErrorMessage>{errors?.mobile}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                height="90px"
                isInvalid={
                  touched?.address?.street_address &&
                  errors?.address?.street_address
                }
              >
                <FormLabel>Street Address</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={
                    touched?.address?.street_address &&
                    errors?.address?.street_address
                      ? {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  _hover={
                    touched?.address?.street_address &&
                    errors?.address?.street_address
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  type="text"
                  name="address.street_address"
                  value={values.address?.street_address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.address?.street_address &&
                touched?.address?.street_address ? (
                  <FormErrorMessage>
                    {errors?.address?.street_address}
                  </FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                height="90px"
                isInvalid={
                  touched?.address?.apartment && errors?.address?.apartment
                }
                autoComplete="on"
              >
                <FormLabel>Apt./Suite/Other</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={
                    touched?.address?.apartment && errors?.address?.apartment
                      ? {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  _hover={
                    touched?.address?.apartment && errors?.address?.apartment
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  type="text"
                  name="address.apartment"
                  value={values.address?.apartment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.address?.apartment && touched?.address?.apartment ? (
                  <FormErrorMessage>
                    {errors?.address?.apartment}
                  </FormErrorMessage>
                ) : null}
              </FormControl>

              <HStack spacing="20px">
                <FormControl
                  height="90px"
                  isInvalid={touched?.address?.city && errors?.address?.city}
                >
                  <FormLabel>City</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={
                      touched?.address?.city && errors?.address?.city
                        ? {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    _hover={
                      touched?.address?.city && errors?.address?.city
                        ? {
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    type="text"
                    name="address.city"
                    value={values.address?.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors?.address?.city && touched?.address?.city ? (
                    <FormErrorMessage>{errors?.address?.city}</FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  height="90px"
                  isInvalid={touched?.address?.state && errors?.address?.state}
                >
                  <FormLabel>State</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={
                      touched?.address?.state && errors?.address?.state
                        ? {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    _hover={
                      touched?.address?.state && errors?.address?.state
                        ? {
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    type="text"
                    name="address.state"
                    value={values.address?.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors?.address?.state && touched?.address?.state ? (
                    <FormErrorMessage>
                      {errors?.address?.state}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  height="90px"
                  isInvalid={
                    touched?.address?.pincode && errors?.address?.pincode
                  }
                >
                  <FormLabel>Pincode</FormLabel>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={
                      touched?.address?.pincode && errors?.address?.pincode
                        ? {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            boxShadow: "none",
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    _hover={
                      touched?.address?.pincode && errors?.address?.pincode
                        ? {
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    type="text"
                    name="address.pincode"
                    value={values.address?.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors?.address?.pincode && touched?.address?.pincode ? (
                    <FormErrorMessage>
                      {errors?.address?.pincode}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
              </HStack>

              <FormControl
                height="90px"
                isInvalid={touched?.country && errors?.country}
              >
                <FormLabel>Country</FormLabel>
                <Input
                  disabled
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={
                    touched?.country && errors?.country
                      ? {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  _hover={
                    touched?.country && errors?.country
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.country && touched?.country ? (
                  <FormErrorMessage>{errors?.country}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                height="90px"
                isInvalid={touched?.email && errors?.email}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={
                    touched?.email && errors?.email
                      ? {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          boxShadow: "none",
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  _hover={
                    touched?.email && errors?.email
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.email && touched?.email ? (
                  <FormErrorMessage>{errors?.email}</FormErrorMessage>
                ) : null}
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

export default memo(AddressModal);
