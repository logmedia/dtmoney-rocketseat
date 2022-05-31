import Modal from 'react-modal'
import { Container } from './styles'
import styled from 'styled-components'
import { Close  } from "@styled-icons/evil/"


Modal.setAppElement('#root')

interface NewTransactionModalProps{
  isOpen: boolean
  onRequestClose: () => void
}
const CloseModal = styled(Close)`
    color: var(--text-body);
    `
export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps){
  
  return(
    <Modal
        isOpen = {isOpen}
        onRequestClose = {onRequestClose}
        overlayClassName = "react-modal-overlay"
        className = "react-modal-content"
      >
      <button 
        type='button' 
        onClick={onRequestClose}
        className='react-modal-close'>
          <CloseModal size="2rem" title="Total" />
      </button>

      <Container>
      <h2>Cadastrar Transação</h2>
      <input placeholder='Título' type="text" />
      <input placeholder='Valor' type="number" />
      <input placeholder='Categoria' type="text" />
      <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}