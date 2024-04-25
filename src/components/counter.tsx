import React, { useState } from "react";
import { Button } from "./button";

export const Counter = () => {
    const [currentNumber, setCurrentNumber] = useState<number | null>(0);

    const handleIncrement = () => {
        if (currentNumber !== null) {
            setCurrentNumber(currentNumber + 1);
        }
        else{
            setCurrentNumber(0)
        }
    };

    const handleDecrement = () => {
        if (currentNumber !== null) {
            setCurrentNumber(currentNumber - 1);
        }
    };

    const handleReset = () => {
        setCurrentNumber(0);
    };

    return (
        <div style={{ display: "flex" }}>
            <Button handleclick={handleIncrement} btnLabel="Increment" />
            <p>{currentNumber}</p>
            <Button handleclick={handleDecrement} btnLabel="Decrement" />
            <Button handleclick={() => setCurrentNumber(null)} btnLabel="Reset" />
        </div>
    );
};
