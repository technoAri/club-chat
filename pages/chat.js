import React, { useState } from 'react'
import useChat from '../hooks/useChat'
import styles from '../styles/Chat.module.css'

function ChatRoom({ 
    roomId, 
    messages,
    newMessage, 
    handleNewMessageChange,
    handleSendMessage
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
                        message.ownedByCurrentUser ? styles.myMessage : styles.receivedMessage
                    }`}
                    >
                    {message.body}
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
    )
}

function ChatPage() {
    const [roomId, setRoomId] = useState('random')
    const { messages, sendMessage } = useChat(roomId)
    const [newMessage, setNewMessage] = React.useState('')

    const createRoom = (room) => {
        setRoomId(room)
    }

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value)
      }
    
      const handleSendMessage = () => {
        sendMessage(newMessage)
        setNewMessage('')
      }

    return (
        <div>
            <h1 className={styles.heading}> This is a club chat page. </h1>
            <div className={styles.topic}>
                <button onClick={() => createRoom('topic 1')}> Topic 1 </button>
                <button onClick={() => createRoom('topic 2')}> Topic 2 </button>
                <button onClick={() => createRoom('topic 3')}> Topic 3 </button>
            </div>
            <ChatRoom 
            roomId={roomId}
            messages={messages}
            newMessage={newMessage} 
            handleNewMessageChange={handleNewMessageChange}
            handleSendMessage={handleSendMessage} />
        </div>
    )
}

export default ChatPage