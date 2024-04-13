import { Play } from 'phosphor-react'
import {
  CowntdownContainer,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  Separator,
  TaskInput,
} from './style'
import { ButtonContainer } from '../../components/Button/style'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
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
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CowntdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CowntdownContainer>

        <ButtonContainer type="submit">
          <Play size={24} />
          Começar
        </ButtonContainer>
      </form>
    </HomeContainer>
  )
}
