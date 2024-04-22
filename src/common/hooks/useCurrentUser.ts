import { api } from "@/services/api";
import Cookies from "js-cookie";
import { User } from "../interfaces/user";
import { useEffect, useState } from "react";
import { USER_KEY } from "../constants";

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = Cookies.get(USER_KEY);
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
    setUser({
      email: "johndoe@gmail.com",
      username: "johndoe",
      profile: {
        fullname: "John Doe",
        bio: "I am a software engineer with over 5 years of experience building web applications.",
        github: "https://github.com/devvspaces",
        twitter: "https://twitter.com/devvspaces",
      },
    });
  }, []);

  return user;
};
