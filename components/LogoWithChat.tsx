import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from './styles/LogoWithChat.module.css'

Modal.setAppElement('#__next')

export const LogoWithChat = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <img 
        src="../icon.png" 
        alt="Kanari Network Logo" 
        className={styles.logo} 
      />
      <span className={styles.title}>
        Kanari Network Docs
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
            {/* Messages will be rendered here */}
          </div>
          
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Type your message..."
              className={styles.input}
            />
            <button className={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}