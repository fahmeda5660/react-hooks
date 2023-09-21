import { useState } from 'react'
import './App.css'
import StateTutorial from './UseState/StateTutorial'
import ReducerTutorial from './UseReducer/ReducerTutorial'
import EffectTutorial from './UseEffect/EffectTutorial'
import RefTutorial from './UseRef/RefTutorial'
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial'
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle'
import ContextTutorial from './UseContext/ContextTutorial'
import MemoTutorial from './UseMemo/MemoTutorial'
import CallBackTutorial from './UseCallback/CallbackTutorial'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <StateTutorial></StateTutorial> */}
        {/* <ReducerTutorial></ReducerTutorial> */}
        {/* <EffectTutorial></EffectTutorial> */}
        {/* <RefTutorial></RefTutorial> */}
        {/* <LayoutEffectTutorial></LayoutEffectTutorial> */}
        {/* <ImperativeHandle></ImperativeHandle> */}
        {/* <ContextTutorial></ContextTutorial> */}
        {/* <MemoTutorial></MemoTutorial> */}
        <CallBackTutorial></CallBackTutorial>
      </div>
    </>
  )
}

export default App
