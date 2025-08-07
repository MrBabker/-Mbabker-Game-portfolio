"use client";
import { createContext, useState } from "react";

export const autoContext = createContext();

export default function AutoContext({ children }) {
  const [pageNumber, setPagenumber] = useState(0);
  return (
    <autoContext.Provider value={{ pageNumber, setPagenumber }}>
      {children}
    </autoContext.Provider>
  );
}
