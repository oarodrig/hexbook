import React from "react";
import { hexType } from "./hexes";
import Badge from "../Badge/Badge";

const getBadgeClass = (type) => {
  switch (type) {
    case hexType.buff: {
      return "buff-badge";
    }
    case hexType.damage: {
      return "damage-badge";
    }
    case hexType.debuff: {
      return "debuff-badge";
    }
    case hexType.domination: {
      return "domination-badge";
    }
    case hexType.healing: {
      return "healing-badge";
    }
    case hexType.illusion: {
      return "illusion-badge";
    }
    case hexType.itemCreation: {
      return "item-creation-badge";
    }
    case hexType.multipleTargets: {
      return "multiple-targets-badge";
    }
    case hexType.singleTarget: {
      return "single-target-badge";
    }
    case hexType.divination: {
      return "divination-badge";
    }
    default: {
      return "";
    }
  }
};

export default (types) => {
  return types.map((type) => (
    <Badge key={type} label={type} className={getBadgeClass(type)} />
  ));
};
