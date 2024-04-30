import { Link } from 'react-router-dom'
import { HeaderContainer } from './style'
import { Scroll, Timer } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>Logo</span>
      <nav>
        <Link to="/pomodoro" title="timer">
          <Timer size={24} />
        </Link>
        <Link to="/pomodoro/history" title="Historico">
          <Scroll size={24} />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
