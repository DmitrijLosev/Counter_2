import React, {useState} from "react";
import "./App.css";
import {CounterShowMode} from "./CounterShowMode";
import {SettingsMode} from "./SettingsMode";

export type MinMaxType = {
    minValue: number
    maxValue: number
}

function App() {

    const minValueAsNumber = JSON.parse(localStorage.getItem("minValue") || "null")
    const maxValueAsNumber = JSON.parse(localStorage.getItem("maxValue") || "null")
    const minInitialValue = minValueAsNumber ? minValueAsNumber : 0
    const maxInitialValue = maxValueAsNumber ? maxValueAsNumber : 1

    const [counter, setCounter] = useState(minInitialValue)

    const [minMax, setMinMax] = useState<MinMaxType>({
        minValue: minInitialValue,
        maxValue: maxInitialValue
    })
    const {minValue, maxValue} = minMax;

    const [settingsMode, setSettingsMode] = useState(false)

    const incCounter = () => {
        if (counter < maxInitialValue) {
            setCounter(counter + 1)
        }
    }
    const resetCounter = () => {
        if (counter > minInitialValue) {
            setCounter(minInitialValue)
        }
    }
    const onChangeValueHandler = (newValue: number, name: keyof MinMaxType) => {
        setMinMax({...minMax, [name]: newValue})
    }
    const setSettingsButtonHandler = () => {
        setCounter(minValue)
        localStorage.setItem("minValue", JSON.stringify(minValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        setSettingsMode(false)
    }
    const changeSettingsMode = () => {
        setSettingsMode(true)
    }

    const errorMode = minValue < 0 || maxValue < 1 || maxValue <= minValue

    return (
        <div className="App">
            {settingsMode ?
                <SettingsMode errorMode={errorMode} minValue={minValue}
                              maxValue={maxValue} onChangeValueHandler={onChangeValueHandler}
                              setSettingsButtonHandler={setSettingsButtonHandler}/> :
                <CounterShowMode counter={counter} minValue={minValue} maxValue={maxValue}
                                 minInitialValue={minInitialValue}
                                 maxInitialValue={maxInitialValue} errorMode={errorMode} resetCounter={resetCounter}
                                 incCounter={incCounter} changeSettingsMode={changeSettingsMode}/>}
        </div>
    );
}

export default App;
