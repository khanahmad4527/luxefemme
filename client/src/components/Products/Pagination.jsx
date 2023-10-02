import React, { memo } from "react";
import { usePagination, DOTS } from "./usePagination";
import { Button, Flex, Square } from "@chakra-ui/react";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Flex
      gap="10px"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Button
        color="lf.black"
        colorScheme="teal"
        isDisabled={currentPage === 1}
        onClick={onPrevious}
      >
        Previous
      </Button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <Square key={"pagination_DOTS" + index}>&#8230;</Square>;
        }

        return (
          <Square
            key={"pagination_Square" + index}
            padding="5px 15px"
            cursor="pointer"
            bgColor={currentPage === pageNumber ? "teal.500" : "white"}
            color={currentPage === pageNumber ? "white" : "teal.500"}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </Square>
        );
      })}
      <Button
        color="lf.black"
        colorScheme="teal"
        isDisabled={currentPage === lastPage}
        onClick={onNext}
      >
        Next
      </Button>
    </Flex>
  );
};

export default memo(Pagination);
