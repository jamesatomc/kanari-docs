import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from './styles/logoandchat.module.css'


interface Message {
  id: number;
  text: string;
  timestamp: Date;
}

Modal.setAppElement('#__next')

export const LogoWithChat = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        timestamp: new Date()
      }
      setMessages([...messages, newMessage])
      setInputText('')
    }
  }

  const handleDelete = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id))
  }

  return (
    <div className={styles.container}>
      <img 
        src="../icon.png" 
        alt="Kanari Network Logo" 
        className={styles.logo} 
      />
      <span className={styles.title}>
        Kanari Docs
      </span>
      <button 
        onClick={() => setModalIsOpen(true)}
        className={styles.chatButton}
      >
        AI Chat
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="AI Chat"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.header}>
          <h2 className={styles.modalTitle}>
            AI Chat
          </h2>
          <button 
            onClick={() => setModalIsOpen(false)}
            className={styles.closeButton}
          >
            Close
          </button>
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.messagesContainer}>
            {messages.map(message => (
              <div key={message.id} className={styles.messageItem}>
                <div className={styles.messageContent}>
                  <p>{message.text}</p>
                  <span className={styles.timestamp}>
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <button 
                  onClick={() => handleDelete(message.id)}
                  className={styles.deleteButton}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className={styles.input}
            />
            <button 
              onClick={handleSend}
              className={styles.sendButton}
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}