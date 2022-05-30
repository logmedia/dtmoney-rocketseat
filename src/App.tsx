
import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard"
import { Header } from './components/Header/index'
import { GlobalStyle } from "./styles/global"

const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

function handleOpenNewTransactionModal() {
  setNewTransactionModalOpen(true)
}
function handleCloseNewTransactionModal() {
  setNewTransactionModalOpen(false)
}

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar</h2>
      </Modal>
    </>
  );
}