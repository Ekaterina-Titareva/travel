import { useState, useEffect } from "react";

import initialMessages from "../constants/initialMessages";
import { ChatState, Message } from "../types/types";
import getCurrentTime from "../utils/getCurrentTime";

const useChat = () => {
  const [chatWithAdmin, setChatWithAdmin] = useState<ChatState>({
    messages: [],
    newMessage: "",
  });

  const [chatWithUser, setChatWithUser] = useState<ChatState>({
    messages: [],
    newMessage: "",
  });

  useEffect(() => {
    setChatWithAdmin({ messages: initialMessages, newMessage: "" });
    setChatWithUser({ messages: initialMessages, newMessage: "" });
  }, []);

  const handleSendMessage = (chat: "admin" | "user", message: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text: message,
      date: getCurrentTime(),
      sender: chat,
    };

    if (chat === "admin") {
      setChatWithAdmin((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: "",
      }));

      setChatWithUser((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: "",
      }));
    } else {
      setChatWithUser((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: "",
      }));

      setChatWithAdmin((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: "",
      }));
    }
  };

  return {
    chatWithAdmin,
    chatWithUser,
    setChatWithAdmin,
    setChatWithUser,
    handleSendMessage,
  };
};

export default useChat;
