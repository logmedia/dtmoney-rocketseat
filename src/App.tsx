import { useState } from 'react'

import { Dashboard } from "./components/Dashboard"
import { Header } from './components/Header/index'
import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from './components/NewTransactionModal/index';


export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
      setNewTransactionModalOpen(true)
    }
    function handleCloseNewTransactionModal() {
      setNewTransactionModalOpen(false)
    }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}