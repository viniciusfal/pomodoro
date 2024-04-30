import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer } from './style'
import {
  StartCountdownButton,
  StopCountdownButton,
} from '../../components/Button/style'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { FormProvider, useForm } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CycleContexts'
import { useContext } from 'react'

interface NewCycleData {
  task: string
  minutesAmount: number
}
export function Home() {
  const newCycleForm = useForm<NewCycleData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { activeCycle, createNewCycle, interruptedCurrentCycle } =
    useContext(CyclesContext)
  const { handleSubmit, watch /* reset */ } = newCycleForm

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptedCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisable}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
