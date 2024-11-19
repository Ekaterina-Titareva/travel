import React from "react";
import "./ChatList.scss";
import useChat from "../../hooks/useChat";
import Chat from "../Chat/Chat";

const ChatList: React.FC = () => {
  const {
    chatWithAdmin,
    chatWithUser,
    setChatWithAdmin,
    setChatWithUser,
    handleSendMessage,
  } = useChat();

  return (
    <div className="chat-list">
      <Chat
        title="Чат с пользователем"
        userName="Наталия Полянская"
        description="Гид по Баварии, фотограф"
        rating={4}
        userType="user"
        chatState={chatWithUser}
        onNewMessageChange={(newMessage) => {
          setChatWithUser((prevChat) => ({ ...prevChat, newMessage }));
        }}
        onSendMessage={(message) => handleSendMessage("admin", message)}
      />
      <div className="chat-list__divider"></div>
      <Chat
        title="Чат с администратором"
        userName="Администратор"
        description="TravelAsk"
        userType="admin"
        chatState={chatWithAdmin}
        onNewMessageChange={(newMessage) => {
          setChatWithAdmin((prevChat) => ({ ...prevChat, newMessage }));
        }}
        onSendMessage={(message) => handleSendMessage("user", message)}
      />
    </div>
  );
};

export default ChatList;
