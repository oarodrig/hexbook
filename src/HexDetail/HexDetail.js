import React from "react";
import { useParams } from "react-router-dom";
import style from "./HexDetail.module.css";

const HexDetail = (props) => {
  let { hexes } = props;
  let id = parseInt(useParams().id);

  const hex = hexes.find((h) => h.id === id);

  return (
    <div className={style.hexDetailContainer}>
      <h1>{hex.name}</h1>
      <p>
        Trait: <b>{hex.trait}</b>
      </p>
      <p>
        Minimum Hand: <b>{hex.hand}</b>
      </p>
      <p>
        Speed: <b>{hex.speed}</b>
      </p>
      <p>
        Duration: <b>{hex.duration}</b>
      </p>
      <p>
        Range: <b>{hex.range}</b>
      </p>
      <p className={style.hexDescription}>{hex.description}</p>
      {hex.handTable && (
        <table className={style.hexTable}>
          <thead>
            <tr>
              <th>Hand</th>
              <th>{hex.handTable.effect}</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(hex.handTable.hands).map((hand) => (
              <tr>
                <td>{hand}</td>
                <td>{hex.handTable.hands[hand]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HexDetail;
