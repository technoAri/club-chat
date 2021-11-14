import React, { useState } from "react";
import Layout from "../components/layout";
import useChat from "../hooks/useChat";
import { useUser } from "../lib/hooks";
import styles from "../styles/Chat.module.css";

function ChatRoom({
  roomId,
  messages,
  newMessage,
  handleNewMessageChange,
  handleSendMessage,
}) {
  return (
    <div className={styles.chatRoomContainer}>
      <h1 className={styles.roomName}>Room: {roomId}</h1>
      <div className={styles.messagesContainer}>
        <ol className={styles.messagesList}>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`${styles.messageItem} ${
                message.ownedByCurrentUser
                  ? styles.myMessage
                  : styles.receivedMessage
              }`}
            >
              {message.body + " " + message.userName}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className={styles.newMessageInputField}
      />
      <button onClick={handleSendMessage} className={styles.sendMessageButton}>
        Send
      </button>
    </div>
  );
}

function ChatPage () {
    // const prisma = new PrismaClient();
  const [roomId, setRoomId] = useState("random");
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  
  const user = useUser()
  console.log(user)

  const createRoom = (room) => {
    setRoomId(room);
    console.log(room);
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value, user.username);
    console.log(user.username)
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, user.username);
    console.log(user.username);
    // console.log(user)
    setNewMessage("");
  };

  return (
    <Layout>
      <h1 className={styles.heading}> This is a club chat page. </h1>
      <div>
        <div className={styles.topic}>
          <button onClick={() => createRoom("JavaScript")}> JavaScript </button>
          <button onClick={() => createRoom("React")}> React </button>
          <button onClick={() => createRoom("Angular")}> Angular </button>
        </div>
        <ChatRoom
          roomId={roomId}
          messages={messages}
          newMessage={newMessage}
          username = {user}
          handleNewMessageChange={handleNewMessageChange}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </Layout>
  );
}

export default ChatPage;
