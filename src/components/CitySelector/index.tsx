import React, { useEffect, useState } from "react";
import { appContext } from "../../context";
import InputField from "../../elements/InputField";
import literals from "../../literals";
import Button from "../../elements/Button";
import { Wrapper, ButtonsWrapper } from "./styles";
import {
    getWeatherWithValue,
    getWeatherWithId,
    updateInput
} from "../../context/actions";

const buttonsArray = [
    { name: literals.citySelector.buttons.city1, id: 742676 },
    { name: literals.citySelector.buttons.city2, id: 44418 },
    { name: literals.citySelector.buttons.city3, id: 2459115 },
    { name: literals.citySelector.buttons.city4, id: 455827 }
];

let timer = null;

const CitySelector: React.FunctionComponent = () => {
    const { dispatch } = appContext();
    const [value, setValue] = useState("");

    useEffect(() => {
        updateInput(dispatch, value);
    }, [value]);

    const handleChange = (e: { target: { value: string } }) => {
        const { value } = e.target;

        setValue(value);
        clearTimeout(timer);
        timer = setTimeout(
            async () => {
                if (value) {
                    getWeatherWithValue(dispatch, value);
                }
            },
            900,
            value
        );
    };

    const handleClick = async (id: number, text: string) => {
        setValue(text);
        getWeatherWithId(dispatch, id);
    };

    return (
        <Wrapper>
            <InputField
                placeholder={literals.citySelector.input.placeholder}
                value={value}
                handleChange={handleChange}
            />

            <ButtonsWrapper>
                {buttonsArray.map(button => (
                    <div key={button.id}>
                        <Button
                            text={button.name}
                            id={button.id}
                            handleClick={handleClick}
                            selected={
                                value.toLowerCase() ===
                                button.name.toLowerCase()
                            }
                        />
                    </div>
                ))}
            </ButtonsWrapper>
        </Wrapper>
    );
};

export default CitySelector;
