import Quiz from './components/Quiz/index';
import { jsQuizz } from './constants'
import './App.scss'

function App() {
  return (
    <>
      <Quiz questions={jsQuizz.questions}/>
    </>
  )
}

export default App
