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
      <div className={styles.logoContainer}>
        <img 
          src="../icon.png" 
          alt="Kanari Network Logo" 
          className={styles.logo} 
        />
        <span className={styles.title}>Kanari Docs</span>
      </div>
      
      <button 
        onClick={() => setModalIsOpen(true)}
        className={styles.chatButton}
      >
        <svg className={styles.chatIcon} viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
        Chat with AI
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        // contentLabel="AI Chat"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <svg className={styles.aiIcon} viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <h2>AI Assistant</h2>
          </div>
          <button 
            onClick={() => setModalIsOpen(false)}
            className={styles.closeButton}
          >
            <span>×</span>
          </button>
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.messagesContainer}>
            {messages.map(message => (
              <div key={message.id} className={styles.messageWrapper}>
                <div className={styles.messageItem}>
                  <div className={styles.messageContent}>
                    <p>{message.text}</p>
                    <span className={styles.timestamp}>
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleDelete(message.id)}
                    className={styles.deleteButton}
                    aria-label="Delete message"
                  >
                    <span>×</span>
                  </button>
                </div>
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
              disabled={!inputText.trim()}
            >
              <svg viewBox="0 0 24 24" className={styles.sendIcon}>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}