import React from "react";
import { useParams } from "react-router-dom";
import style from "./HexDetail.module.css";
import getTypeBadges from "../common/typeBadgeFactory";

const HexDetail = (props) => {
  let { hexes } = props;
  let id = parseInt(useParams().id);

  const hex = hexes.find((h) => h.id === id);

  return (
    <div className={style.hexDetailContainer}>
      <h1>{hex.name}</h1>
      <div className={style.typeBadgeContainer}>{getTypeBadges(hex.types)}</div>
      <dl className={style.details}>
        <dt>Trait</dt>
        <dd>{hex.trait}</dd>
        <dt>Minimum Hand</dt>
        <dd>{hex.hand}</dd>
        <dt>Speed</dt>
        <dd>{hex.speed}</dd>
        <dt>Duration</dt>
        <dd>{hex.duration}</dd>
        <dt>Range</dt>
        <dd>{hex.range}</dd>
      </dl>
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
              <tr key={hand}>
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
