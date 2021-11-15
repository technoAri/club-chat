import React, { useEffect, useState } from "react";
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
  const [roomId, setRoomId] = useState("random");
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  const [errorMsg, setErrorMsg] = useState('')
  
  const user = useUser()
  console.log(user)

  useEffect(() => {
    try {
      fetch('/api/topics', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
      }).then(response => response.json())
      .then(data => {
        console.log(data)
        const allTopics = data.topics;
      })
      .catch((error) => {
        console.log(error);
    });
  } catch (error) {
      console.error('An unexpected error occurred:', error)
      setErrorMsg(error.message)
  };
  });
  

  const createRoom = (room) => {
    setRoomId(room);
    
    if (errorMsg) setErrorMsg('')
    const body = {
      userId: user.id,
      topicId: '1ee6baa8-b232-4173-829b-5ff09c36e43e',
    }

    try {
      const res = fetch('/api/user_topics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
      })
      if (res.status === 200) {
          debugger;
      } else {
          throw new Error(res.text())
      }
  } catch (error) {
      console.error('An unexpected error occurred:', error)
      setErrorMsg(error.message)
    }
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
