import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './style'
import { CyclesContext } from '../../contexts/CycleContexts'

export function History() {
  const cycles = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColors="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColors="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColors="yellow">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColors="red">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColors="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColors="yellow">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
