import React, { useContext } from "react";
import { Context } from "../CalcComponent";

function WeightInp() {
  const { weight, setWeight, units } = useContext(Context);
  return (
    <div className="input">
      <h2>Weigth</h2>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <p className="mesures">{units === "meters" ? "Kg" : "Lb"}</p>
    </div>
  );
}

export default WeightInp;
