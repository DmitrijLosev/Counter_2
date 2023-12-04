import React from "react";
import {Counter} from "./Counter";
import {Button} from "./Button";


type CounterShowModePropsType = {
    counter: number
    maxValue: number
    minValue: number
    minInitialValue:number
    maxInitialValue:number
    errorMode: boolean
    incCounter: () => void
    resetCounter: () => void
    changeSettingsMode: () => void
}
export const CounterShowMode: React.FC<CounterShowModePropsType> = ({
                                                                        counter,
                                                                        maxValue,
                                                                        minValue,
                                                                        minInitialValue,
                                                                        maxInitialValue,
                                                                        errorMode,
                                                                        incCounter,
                                                                        resetCounter,
                                                                        changeSettingsMode
                                                                    }) => {

    return (
        <div className="counter common">
            <Counter counter={counter} maxValue={maxValue}
                     setMode={minInitialValue !== minValue || maxInitialValue !== maxValue}
                     errorMode={errorMode}/>
            <div className="buttons common">
                <Button onClick={incCounter} disabled={counter === maxValue || errorMode}>inc</Button>
                <Button onClick={resetCounter} disabled={counter === minValue || errorMode}>reset</Button>
                <Button onClick={changeSettingsMode}>set</Button>
            </div>
        </div>
    );
};

