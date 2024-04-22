import Head from "next/head";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Highlight,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCurrentUser } from "@/common/hooks/useCurrentUser";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  checkServerSideResponse,
  getAccessTokenServerSide,
} from "@/services/authenticate";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { techies } from "@/common/mock";
import SocialCard from "@/components/socialCard";

export default function Page() {
  const heroBg = useColorModeValue("blue.100", "blue.900");

  const router = useRouter();

  const user = useCurrentUser();

  return (
    <>
      <Head>
        <title>TechiesConnect - Home</title>
      </Head>

      <Box width={"100%"}>
        <Container maxW={"1300px"} pt={10}>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap={"wrap"}
            gap={10}
          >
            {techies.map((techie, idx) => (
              <SocialCard key={techie.id} {...techie} />
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
}
