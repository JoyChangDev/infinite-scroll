"use client";
import { Center } from "@chakra-ui/react";

import { PostCard } from "@/app/_components";

export default function Home() {
  return (
    <Center flexDirection="column">
      <PostCard />
    </Center>
  );
}
