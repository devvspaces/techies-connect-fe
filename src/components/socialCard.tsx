"use client";

import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

interface SocialCardProps {
  name: string;
  username: string;
  bio: string;
  skills: string[];
  title: string;
  avatar: string;
  location: string;
  school?: string;
  twitter?: string;
  linkedin?: string;
  dribble?: string;
  github?: string;
  behance?: string;
  website?: string;
  whatsapp?: string;
}

type SocialList =
  | "github"
  | "twitter"
  | "linkedin"
  | "dribble"
  | "behance"
  | "website"
  | "whatsapp";

export default function SocialCard({
  name,
  username,
  bio,
  skills,
  title,
  avatar,
  location,
  school,
  ...rest
}: SocialCardProps) {
  const cmValue = useColorModeValue("gray.50", "gray.800");
  const socials = [
    "github",
    "twitter",
    "linkedin",
    "dribble",
    "behance",
    "website",
    "whatsapp",
  ];
  const IconMap = {
    github: FaGithub,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    dribble: FaDribbble,
    behance: FaBehance,
    website: FaGlobe,
    whatsapp: FaWhatsapp,
  };

  function renderSocials() {
    return socials.map((social, idx) => {
      const Icon = IconMap[social as SocialList];
      if (rest[social as SocialList])
        return (
          <Link href={rest[social as SocialList]} isExternal key={idx}>
            <Icon />
          </Link>
        );
    });
  }

  return (
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={avatar}
        name={name}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        @{username}
      </Text>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {bio}
      </Text>

      <Stack
        flexWrap={"wrap"}
        align={"center"}
        justify={"center"}
        direction={"row"}
        mt={6}
        gap={2}
      >
        {skills.map((skill, idx) => (
          <Badge
            m={"0 !important"}
            px={2}
            py={1}
            bg={cmValue}
            fontWeight={"400"}
            key={idx}
          >
            {skill}
          </Badge>
        ))}
      </Stack>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        {renderSocials()}
      </Stack>

      <Stack mt={8} direction={"row"} spacing={4}>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          Connect
        </Button>
      </Stack>
    </Box>
  );
}
