import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <p>Learner-Games: a Gaming website--- <span><a target='blank' href="https://learnerodi1.github.io/Learner-Games">https://learnerodi1.github.io/Learner-Games</a></span></p>
      <p>Learner-Foods: a food website where you can get a reservation--- <span><a target='blank' href="https://learnerodi1.github.io/Food">https://learnerodi1.github.io/Food</a></span></p>
      <p>Neche-Treat-Rush/: a pastery website I made for my neighbour--- <span><a target='blank' href="https://learnerodi1.github.io/Neche-Treat-Rush">https://learnerodi1.github.io/Neche-Treat-Rush</a></span></p>
      <p>A hand sanitizer website <span><a target='blank' href="https://learnerodi1.github.io/CureM4/">https://learnerodi1.github.io/CureM4/</a></span></p>
      <p>A website I made about my friend <span><a target='blank' href="https://learnerodi1.github.io/Shalom">https://learnerodi1.github.io/Shalom</a></span></p>
      <p>A to do list website where you can write down what you want to do for the day, leave the website and come and still see your tasks. You can then delete each task after completion <span><a target='blank' href="https://learnerodi1.github.io/TodoList">https://learnerodi1.github.io/TodoList</a></span></p>
    </div>
    </>
  )
}

export default App
