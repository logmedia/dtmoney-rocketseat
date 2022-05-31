import styled from 'styled-components';
import { ArrowDownCircle, ArrowUpCircle, CurrencyDollar  } from "@styled-icons/bootstrap/"
import { Container } from "./styles";
const ArrowUpCircleGreen = styled(ArrowUpCircle)`
    color: var(--green);
    `
  const ArrowDownCircleRed = styled(ArrowDownCircle)`
    color: var(--red);
    `
  const CurrencyDollarWhite = styled(CurrencyDollar)`
    color: var(--text-light);
    `
export function Summary(){
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <ArrowUpCircleGreen size="2rem" title="Entradas" />
          
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <ArrowDownCircleRed size="2rem" title="Saídas" />
        </header>
        <strong>R$ - 1000,00</strong>
      </div>
      <div className="summaryTotal">
        <header>
          <p>Total</p>
          <CurrencyDollarWhite size="2rem" title="Total" />
        </header>
        <strong>R$ 1000</strong>
      </div>
    </Container>
  )
}