import { Box, Button, Divider, HStack, Text } from "@chakra-ui/react";
import { GoArrowRight, GoArrowLeft } from "@/../react-icons/go";
import { PaginatedResponse } from "@/common/interfaces/response";
import { SetStateAction } from "react";

interface PaginationProps
  extends Partial<Omit<PaginatedResponse<any>, "data">> {
  setSkip: (value: SetStateAction<number>) => void;
  take: number;
}

const PaginationComponent = ({
  page,
  setSkip,
  take,
  totalPages,
  hasNext,
  hasPrev,
}: PaginationProps) => {
  const nextPage = () => {
    setSkip((prev) => prev + take);
  };

  const prevPage = () => {
    setSkip((prev) => prev - take);
  };

  return (
    <HStack spacing={6} fontSize={"14px"}>
      {page && (
        <HStack>
          <Text>Page</Text>
          <Box bg={"theme.grey4"} borderRadius={"8px"} p={"8px 20px"}>
            {totalPages ? page : 0}
          </Box>
          <Text>of {totalPages}</Text>
        </HStack>
      )}
      <HStack>
        <Button
          isDisabled={!hasPrev}
          variant={"ghost"}
          bg={"transparent !important"}
          leftIcon={<GoArrowLeft />}
          fontWeight={500}
          fontSize={"14px"}
          onClick={prevPage}
        >
          Prev
        </Button>
        <Divider orientation="vertical" bg={"theme.grey"} h={"40px"} />
        <Button
          variant={"ghost"}
          bg={"transparent !important"}
          rightIcon={<GoArrowRight />}
          fontWeight={500}
          fontSize={"14px"}
          isDisabled={!hasNext}
          onClick={nextPage}
        >
          Next
        </Button>
      </HStack>
    </HStack>
  );
};

export default PaginationComponent;
