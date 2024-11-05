"use client";
import { ChakraProvider as Provider, defaultSystem } from "@chakra-ui/react";

export default function ChakraProvider({ children }) {
  return <Provider value={defaultSystem}>{children}</Provider>;
}
