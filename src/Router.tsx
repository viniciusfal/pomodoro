import { Routes, Route } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/pomodoro" element={<DefaultLayout />}>
        <Route path="/pomodoro" element={<Home />} />
        <Route path="/pomodoro/history" element={<History />} />
      </Route>
    </Routes>
  )
}
