import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './style'
import { CyclesContext } from '../../contexts/CycleContexts'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} Minutos</td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>
                    {cycle.finishDate && (
                      <Status statusColors="green">Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColors="red">Interrompido</Status>
                    )}

                    {!cycle.finishDate && !cycle.interruptedDate && (
                      <Status statusColors="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
