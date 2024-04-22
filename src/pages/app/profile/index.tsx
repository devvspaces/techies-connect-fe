import { skills } from "@/common/mock";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Avatar,
  Textarea,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
import Head from "next/head";
import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <Head>
        <title>TechiesConnect - My Profile</title>
      </Head>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack width={"100%"} spacing={8} mx={"auto"} py={12} px={6}>
          <Stack align={"center"} mb={5}>
            <Avatar
              size={"2xl"}
              mb={3}
              name="Ayanwola Ayomide"
              src="https://bit.ly/dan-abramov"
            />
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Ayanwola Ayomide
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Software Engineer
            </Text>
          </Stack>
          <Flex justifyContent={"center"} align={"start"} gap={10}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
              maxW={"400px"}
            >
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input disabled value={"test"} type="text" />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input value={"test@gmail.com"} disabled type="email" />
                </FormControl>
                <Stack pt={3}>
                  <Text align={"center"}>
                    <Link href="/login" color={"blue.400"}>
                      Change your password
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
              flexGrow={1}
              maxW={"900px"}
            >
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Full name</FormLabel>
                  <Input value={"Ayanwola Ayomide"} type="text" />
                </FormControl>

                <FormControl id="title" isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input value={"Software Engineer"} type="text" />
                </FormControl>

                <FormControl id="state" isRequired>
                  <FormLabel>State</FormLabel>
                  <Input value={"Lagos"} type="text" />
                </FormControl>

                <FormControl id="lga" isRequired>
                  <FormLabel>Local Government</FormLabel>
                  <Input value={"Lekki"} type="text" />
                </FormControl>

                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input value={"Test location"} type="text" />
                </FormControl>

                <FormControl id="skills" isRequired>
                  <FormLabel>Skills</FormLabel>
                  <Select
                    isMulti
                    name="skills"
                    options={skills.map((skill) => ({
                      value: skill,
                      label: skill,
                    }))}
                    placeholder="Select your skills"
                    closeMenuOnSelect={false}
                  />
                </FormControl>

                <FormControl id="bio" isRequired>
                  <FormLabel>Bio</FormLabel>
                  <Textarea
                    value={
                      "I am a software engineer with over 5 years of experience building web applications."
                    }
                  />
                </FormControl>

                <Flex gap={5} flexWrap={"wrap"}>
                  <FormControl id="github" maxW={"400px"}>
                    <FormLabel>Github</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaGithub color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Github username" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="twitter" maxW={"400px"}>
                    <FormLabel>Twitter</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaTwitter color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Twitter username" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="linkedin" maxW={"400px"}>
                    <FormLabel>LinkedIn</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaLinkedinIn color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="LinkedIn URL" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="dribbble" maxW={"400px"}>
                    <FormLabel>Dribbble</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaDribbble color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Dribbble username" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="behance" maxW={"400px"}>
                    <FormLabel>Behance</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaBehance color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Behance username" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="instagram" maxW={"400px"}>
                    <FormLabel>Instagram</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaInstagram color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Instagram username" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="whatsapp" maxW={"400px"}>
                    <FormLabel>Whatsapp</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaWhatsapp color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Whatsapp number" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="website" maxW={"400px"}>
                    <FormLabel>Website</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaGlobe color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Website URL" />
                    </InputGroup>
                  </FormControl>
                </Flex>

                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Update Profile
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}
