import React from "react";
import style from "./HexRow.module.css";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge";
import { hexType } from "../common/hexes";

const getBadgeColor = (type) => {
  switch (type) {
    case hexType.buff: {
      return style.buff;
    }
    case hexType.damage: {
      return style.damage;
    }
    case hexType.debuff: {
      return style.debuff;
    }
    case hexType.domination: {
      return style.domination;
    }
    case hexType.healing: {
      return style.healing;
    }
    case hexType.illusion: {
      return style.illusion;
    }
    case hexType.itemCreation: {
      return style.itemCreation;
    }
    case hexType.multipleTargets: {
      return style.multipleTargets;
    }
    case hexType.singleTarget: {
      return style.singleTarget;
    }
    default: {
      return "";
    }
  }
};

const HexRow = (props) => {
  const { hex } = props;

  const typeBadges = hex.types.map((type) => {
    return <Badge key={type} label={type} className={getBadgeColor(type)} />;
  });

  return (
    <li key={hex.id} className={style.row}>
      <Link to={`hex/${hex.id}`} className={style.hexLink}>
        <div className={style.hexName}>{hex.name}</div>
        <div className={style.badgeContainer}>{typeBadges}</div>
      </Link>
    </li>
  );
};

export default HexRow;
