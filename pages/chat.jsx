import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUser } from "../lib/hooks";
import ChatComponent from "../ui/components/ChatComponent/ChatComponent";

const chat = () => {
  // useUser({ redirectTo: '/login', redirectIfFound: false })
  
  return <ChatComponent />;
}

export default chat
