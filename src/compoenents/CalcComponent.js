import React, { useState, createContext } from "react";
import WeightInp from "./calcComponent/WeightInp";
import HeightInp from "./calcComponent/HeightInp";
import CalcResult from "./calcComponent/CalcResult";
import Tablebmi from "./Tablebmi";
import Measures from "./calcComponent/Measures";

export const Context = createContext();

function CalcComponent() {
  const [weight, setWeight] = useState(0);
  const [heightMain, setHeightMain] = useState(0);
  const [heightSecondary, setHeightSecondary] = useState(0);
  const [results, setResults] = useState(0);
  const [units, setUnits] = useState("meters");
  const [unitSys, setUnitSys] = useState("metric");

  return (
    <Context.Provider
      value={{
        weight,
        setWeight,
        units,
        setUnits,
        heightMain,
        setHeightMain,
        heightSecondary,
        setHeightSecondary,
        results,
        setResults,
        unitSys,
        setUnitSys,
      }}
    >
      <h1>Check your BMI</h1>
      <div className="input-container">
        <WeightInp />
        <HeightInp />
      </div>
      <Measures />
      <CalcResult />

      {results > 0 ? (
        <p className="result">
          Result = <strong>{results}</strong>
        </p>
      ) : (
        <p style={{ marginBottom: "2.65rem" }}></p>
      )}

      <Tablebmi />
    </Context.Provider>
  );
}

export default CalcComponent;
