import React from "react";
import {MinMaxValueInput} from "./MinMaxValueInput";
import {Button} from "./Button";
import {MinMaxType} from "./App";

type SettingsModePropsType = {
    minValue: number
    maxValue: number
    errorMode: boolean
    setSettingsButtonHandler: () => void
    onChangeValueHandler: (value: number, name: keyof MinMaxType) => void
}

export const SettingsMode: React.FC<SettingsModePropsType> = ({
                                                                  minValue,
                                                                  maxValue,
                                                                  errorMode,
                                                                  setSettingsButtonHandler,
                                                                  onChangeValueHandler
                                                              }) => {

    const minValueInputErrorMode = minValue < 0 || maxValue <= minValue;
    const maxValueInputErrorMode = maxValue < 1 || maxValue <= minValue;

    return (
        <div className="common set">
            <div className="common">
                <MinMaxValueInput labelValue="start value: " value={minValue} name={"minValue"}
                                  errorMode={minValueInputErrorMode}
                                  onChangeValueHandler={onChangeValueHandler}/>
                <MinMaxValueInput labelValue="max value: " value={maxValue} name={"maxValue"}
                                  errorMode={maxValueInputErrorMode}
                                  onChangeValueHandler={onChangeValueHandler}/>
            </div>
            <div className="common buttons">
                <Button onClick={setSettingsButtonHandler}
                        disabled={errorMode}>set</Button>
            </div>
        </div>
    );
};

