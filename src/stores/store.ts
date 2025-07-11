import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query"; // Import QueryClient

type Language = "tm" | "ru";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;

  languageModalOpen: boolean;
  setLanguageModalOpen: (open: boolean) => void;

  language: Language;
  setLanguage: (lang: Language, queryClient: QueryClient) => void; // Pass queryClient
}

export const useAppStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),

  languageModalOpen: false,
  setLanguageModalOpen: (open) => set({ languageModalOpen: open }),

  language: (localStorage.getItem("language") as Language) || "tm",
  setLanguage: (lang, queryClient) => {
    // Receive queryClient here
    localStorage.setItem("language", lang);
    set({ language: lang });
    queryClient.invalidateQueries(); // Now you can use it
  },
}));
