import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { WorkoutPlan } from './plan'
import Select from './Select/Select'
import { DayPlan, PlanData } from './Plan.types'
import PlanTable from './PlanTable/PlanTable'

const App = () =>{
const [planData, setPlanData] = useState(WorkoutPlan as PlanData);
const [selectedDay, setSelectedDay] = useState(undefined as DayPlan | undefined);

const handleDayChange = (day: string) => {
  const dayPlan = planData.find((item) => item.day === day)
  setSelectedDay(dayPlan)
}

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

    <Select data={planData} onChange={(day: string) => handleDayChange(day)}></Select>
    <PlanTable dayPlan={selectedDay}></PlanTable>


    </div>
  )
}

export default App
