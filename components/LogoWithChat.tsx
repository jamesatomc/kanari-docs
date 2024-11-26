import React, { useState } from 'react'
import Modal from 'react-modal'

// Set the app element for accessibility
Modal.setAppElement('#__next')

export const LogoWithChat = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="../icon.png" alt="Kanari Network Logo" style={{ width: '40px', height: '40px' }} />
      <span style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: 500, color: '#333' }}>
        Kanari Network Docs
      </span>
      <button onClick={openModal} style={{ marginLeft: '20px', fontSize: '1em', color: '#fff', backgroundColor: '#0070f3', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
        AI Chat
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="AI Chat"
        style={{
          content: {
            top: '52%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '80%',
            maxWidth: '800px',
            height: '80%',
            maxHeight: '800px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>AI Chat</h2>
        <button onClick={closeModal} style={{ float: 'right', fontSize: '1em', color: '#fff', backgroundColor: '#0070f3', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          Close
        </button>
        <div style={{ marginTop: '40px' }}>
          <iframe src="https://your-ai-chat-link.com" style={{ width: '100%', height: 'calc(100% - 60px)', border: 'none', borderRadius: '5px' }}></iframe>
        </div>
      </Modal>
    </div>
  )
}