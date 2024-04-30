import { useFormContext } from 'react-hook-form'
import { FormContainer, MinuteAmountInput, TaskInput } from './style'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CycleContexts'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="sprint 1" />
        <option value="Sprint 2" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinuteAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
