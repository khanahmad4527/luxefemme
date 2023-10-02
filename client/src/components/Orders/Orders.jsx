import React, { useEffect } from "react";
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderData } from "../../redux/order/order.actions";
import Loading from "../../utils/Loading";
import Error from "../../utils/Error";
import EmptyOrder from "./EmptyOrder";

const Orders = () => {
  const { orderGetIsLoading, orderGetIsError, orderData } = useSelector(
    (store) => store.order
  );

  const { isAuth } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    /**********    page will always loads at top position   ******************/
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isAuth) {
      dispatch(getOrderData());
    }
  }, [dispatch, isAuth]);

  if (orderGetIsLoading) {
    return (
      <Flex w="100%" h="100vh">
        <Loading />
      </Flex>
    );
  } else if (orderGetIsError) {
    return (
      <Flex w="100%" h="100vh">
        <Error />
      </Flex>
    );
  } else if (orderData.length === 0) {
    return <EmptyOrder />;
  } else {
    return (
      <Box
        w="100%"
        minH="100vh"
        marginTop={"40px"}
        overflow={{ base: "auto", lg: "hidden" }}
      >
        <Table variant="simple" color="lf.black">
          <Thead bgColor={"teal"}>
            <Tr>
              <Th color="white">Order ID</Th>
              <Th color="white">Order Date</Th>
              <Th color="white">Paid Amount</Th>
              <Th color="white">Payment Method</Th>
              <Th color="white">Items</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderData.map((order, index) => (
              <Tr
                key={order._id}
                bgColor={index % 2 === 0 ? "lf.teal" : "teal.500"}
                verticalAlign="top"
              >
                <Td>{order._id}</Td>
                <Td>{order.orderDate}</Td>
                <Td>{order.paidAmount}</Td>
                <Td textTransform={"uppercase"}>{order.paymentMethod}</Td>
                <Td w="30%">
                  <ul>
                    {order.items.map((item, index) => {
                      return (
                        <li
                          key={"order_list" + index}
                          style={{
                            marginBottom: "10px",
                          }}
                        >
                          {item.quantity} x {item.title} <span>&#8377;</span>{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {formatMoney(item.itemPrice)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }
};

export default Orders;

const formatMoney = (amount) => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
