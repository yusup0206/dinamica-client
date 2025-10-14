import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import "dayjs/locale/ru";
import "dayjs/locale/tk";

type Language = "tm" | "ru";

const dayjsLocaleMap: Record<Language, string> = {
  tm: "tk",
  ru: "ru",
};

const initialLang = (localStorage.getItem("language") as Language) || "tm";
dayjs.locale(dayjsLocaleMap[initialLang]);

// Function to safely get the user object from localStorage
const getInitialUser = () => {
  const userString = localStorage.getItem("user");
  if (userString) {
    try {
      return JSON.parse(userString);
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      return null;
    }
  }
  return null;
};

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;

  languageModalOpen: boolean;
  setLanguageModalOpen: (open: boolean) => void;

  language: Language;
  setLanguage: (lang: Language, queryClient: QueryClient) => void;

  user: any | null;
  setUser: (user: any | null) => void;
}

export const useAppStore = create<AuthState>((set) => ({
  token: localStorage.getItem("access_token"),

  user: getInitialUser(),

  languageModalOpen: false,

  language: initialLang,

  setToken: (token) => {
    if (token) {
      localStorage.setItem("access_token", token);
    } else {
      localStorage.removeItem("access_token");
    }
    set({ token });
  },

  setUser: (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    set({ user });
  },

  setLanguageModalOpen: (open) => set({ languageModalOpen: open }),

  setLanguage: (lang, queryClient) => {
    localStorage.setItem("language", lang);
    dayjs.locale(dayjsLocaleMap[lang]);
    set({ language: lang });
    queryClient.invalidateQueries();
  },
}));
