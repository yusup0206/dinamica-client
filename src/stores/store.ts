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

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;

  languageModalOpen: boolean;
  setLanguageModalOpen: (open: boolean) => void;

  language: Language;
  setLanguage: (lang: Language, queryClient: QueryClient) => void;

  user: object | null;
  setUser: (user: object | null) => void;
}

export const useAppStore = create<AuthState>((set) => ({
  token: localStorage.getItem("access_token"),

  user: null,

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

  setUser: (user) => set({ user }),

  setLanguageModalOpen: (open) => set({ languageModalOpen: open }),

  setLanguage: (lang, queryClient) => {
    localStorage.setItem("language", lang);

    dayjs.locale(dayjsLocaleMap[lang]);

    set({ language: lang });
    queryClient.invalidateQueries();
  },
}));
