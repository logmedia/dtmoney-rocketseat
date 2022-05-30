import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

  useEffect(() => {
    api.get('transactions')
      .then(data => console.log(data))
  },[]);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Freelance</td>
            <td>25/04/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ -1.800,00</td>
            <td>Despesas</td>
            <td>20/04/2020</td>
          </tr>
        </tbody>

      </table>
    </Container>
  )
}