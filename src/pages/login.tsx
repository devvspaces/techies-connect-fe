import { AlertType, addMessage } from "@/common/alerts";
import { ERROR_CODES, VERIFY_EMAIL_KEY } from "@/common/constants";
import { HOME_URL, VERIFY_ACCOUNT_URL } from "@/router/routes";
import { api } from "@/services/api";
import { authenticate } from "@/services/authenticate";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import * as Yup from "yup";
import NextLink from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setFieldError }) => {
      const response = await api.login(values.email, values.password);
      if (response.success) {
        if (response.result.data) {
          authenticate(response.result.data);
          window.location.href = HOME_URL;
        }
        throw new Error("Invalid response");
      }

      if (response.result.data) {
        const code = response.result.data.euid as any as string;
        if (code == ERROR_CODES.email_not_verified) {
          addMessage(
            AlertType.Success,
            `
          Verify your email first!
          Please check your email for otp to verify your account.
          `
          );
          Cookies.set(VERIFY_EMAIL_KEY, values.email);
          window.location.href = VERIFY_ACCOUNT_URL;
        }
      }

      const fields = ["email", "password"];
      fields.forEach((field) => {
        if (response.result.data) {
          if (response.result.data[field]) {
            setFieldError(field, response.result.data[field].join(", "));
          }
        }
      });
    },
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Welcome back</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl
                id="email"
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                id="password"
                isInvalid={!!formik.errors.password && formik.touched.password}
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox
                    id="rememberMe"
                    onChange={formik.handleChange}
                    isChecked={formik.values.rememberMe}
                  >
                    Remember me
                  </Checkbox>
                  <Link
                    as={NextLink}
                    color={"blue.400"}
                    href="/password/forgot"
                  >
                    Forgot password?
                  </Link>
                </Stack>
                <Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    type="submit"
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                  <Button
                    leftIcon={<FaGoogle />}
                    colorScheme="blue"
                    variant={"outline"}
                  >
                    Sign in with Google
                  </Button>
                  <Button
                    leftIcon={<FaGithub />}
                    colorScheme="blue"
                    variant={"outline"}
                  >
                    Sign in with Github
                  </Button>
                </Stack>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Don&apos;t have an account?{" "}
                  <Link as={NextLink} href="/signup" color={"blue.400"}>
                    Create an account
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
