"use client";
import { createContext, ReactNode, useState } from "react";

interface contexts {
  pageNumber: number;
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
}

interface authoType {
  children: ReactNode;
}

export const autoContext = createContext<contexts | undefined>(undefined);

export default function AutoContext({ children }: authoType) {
  const [pageNumber, setPagenumber] = useState(0);
  return (
    <autoContext.Provider value={{ pageNumber, setPagenumber }}>
      {children}
    </autoContext.Provider>
  );
}
