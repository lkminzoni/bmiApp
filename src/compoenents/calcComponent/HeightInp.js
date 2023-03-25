import React, { useContext } from "react";
import { Context } from "../CalcComponent";

function HeightInp() {
  const {
    heightMain,
    setHeightMain,
    heightSecondary,
    setHeightSecondary,
    units,
  } = useContext(Context);

  return (
    <div className="input">
      <h2 className="heigth">Heigth</h2>
      {units === "meters" ? (
        <>
          <input
            type="number"
            className="input-in input-meter"
            value={heightMain}
            onChange={(e) => setHeightMain(e.target.value)}
          />
          <p className="mesures">M</p>
          <input
            type="number"
            className="input-in input-meter"
            value={heightSecondary}
            onChange={(e) => setHeightSecondary(e.target.value)}
          />
          <p className="mesures">Cm</p>
        </>
      ) : (
        <>
          <input
            type="number"
            className="input-in"
            value={heightMain}
            onChange={(e) => setHeightMain(e.target.value)}
          />
          <p className="mesures">Ft</p>
          <input
            type="number"
            className="input-in"
            value={heightSecondary}
            min="0"
            max="11"
            onChange={(e) => setHeightSecondary(e.target.value)}
          />
          <p className="mesures">In</p>
        </>
      )}
    </div>
  );
}

export default HeightInp;
