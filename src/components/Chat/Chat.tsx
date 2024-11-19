import React from "react";

import { ChatProps } from "../../types/types";

import Rating from "../Rating/Rating";

import admin_avatar from "../../assets/images/admin.png";
import user_avatar from "../../assets/images/user.png";
import flag from "../../assets/icons/flag.svg";
import send from "../../assets/icons/send.svg";

import "./Chat.scss";

const Chat: React.FC<ChatProps> = ({
  title,
  userName,
  description,
  rating,
  chatState,
  onNewMessageChange,
  onSendMessage,
  userType,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && chatState.newMessage.trim() !== "") {
      onSendMessage(chatState.newMessage);
    }
  };

  return (
    <div className="chat">
      <h2 className="chat__title">{title}</h2>
      <div className="chat__container">
        <div className="chat__description">
          <div className="chat__description-container">
            <img
              className="chat__avatar"
              src={userType === "admin" ? admin_avatar : user_avatar}
              alt="Аватар"
            />
            <div className="chat__user">
              <h3 className="chat__user-name">{userName}</h3>
              <p className="chat__user-about">
                <img src={flag} />
                {description}
              </p>
            </div>
          </div>
          {userType === "user" && <Rating rating={rating} />}
        </div>
        <ul className="chat__message-list">
          {chatState.messages.map((message) => (
            <li
              key={message.id}
              className={`chat__message ${
                message.sender === userType ? "" : "chat__message_type_owner"
              }`}
            >
              <img
                className="chat__avatar"
                src={message.sender === "admin" ? admin_avatar : user_avatar}
                alt="Аватар"
              />
              <div className="chat__message-box">
                <p className="chat__message-text">{message.text}</p>
                <span className="chat__message-date">{message.date}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="chat__panel">
          <img
            className="chat__avatar"
            src={userType === "admin" ? user_avatar : admin_avatar}
            alt="Аватар"
          />
          <input
            className="chat__input"
            type="text"
            placeholder="Напишите сообщение..."
            onChange={(e) => onNewMessageChange(e.target.value)}
            value={chatState.newMessage}
            onKeyDown={handleKeyDown}
            minLength={1}
            required
          />
          <button
            className="chat__submit-button"
            onClick={() => {
              if (chatState.newMessage.trim() !== "") {
                onSendMessage(chatState.newMessage);
              }
            }}
          >
            <img className="chat__button-icon" src={send} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
