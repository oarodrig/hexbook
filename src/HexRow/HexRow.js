import React from "react";
import style from "./HexRow.module.css";
import { Link } from "react-router-dom";
import getTypeBadges from "../common/typeBadgeFactory";

const HexRow = (props) => {
  const { hex } = props;

  return (
    <li key={hex.id} className={style.row}>
      <Link to={`hex/${hex.id}`} className={style.hexLink}>
        <div className={style.hexName}>{hex.name}</div>
        <div className={style.badgeContainer}>{getTypeBadges(hex.types)}</div>
      </Link>
    </li>
  );
};

export default HexRow;
