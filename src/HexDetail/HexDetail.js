import React from "react";
import { useParams } from "react-router-dom";
import style from "./HexDetail.module.css";
import getTypeBadges from "../common/typeBadgeFactory";
import { ReactComponent as D20Icon } from "../common/svg/dice-d20-solid.svg"; //TODO Attribution
import { ReactComponent as SpadeIcon } from "../common/svg/spade.svg"; // TODO Attribution: Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import { ReactComponent as RunningIcon } from "../common/svg/running-solid.svg"; //TODO Attribution
import { ReactComponent as StopwatchIcon } from "../common/svg/stopwatch-solid.svg"; //TODO Attribution
import { ReactComponent as BullseyeIcon } from "../common/svg/bullseye-solid.svg"; //TODO Attribution
import { ReactComponent as BackIcon } from "../common/svg/chevron-circle-left-solid.svg"; //TODO Attribution
import { useHistory } from "react-router-dom";

const HexDetail = (props) => {
  const history = useHistory();

  let { hexes } = props;
  let id = parseInt(useParams().id);

  const hex = hexes.find((h) => h.id === id);

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <>
      <header className={style.topBar}>
        <button className={`icon-button ${style.backButton}`}>
          <BackIcon className={style.backIcon} onClick={navigateHome} />
        </button>
        <h1 className={style.title}>Hexbook</h1>
      </header>
      <div className={style.hexDetailContainer}>
        <h1>{hex.name}</h1>
        <div className={style.typeBadgeContainer}>
          {getTypeBadges(hex.types)}
        </div>
        <dl className={style.details}>
          <dt>
            <D20Icon className={style.detailIcon} />
            <span>Trait</span>
          </dt>
          <dd>{hex.trait}</dd>
          <dt>
            <SpadeIcon className={style.detailIcon} />
            <span>Minimum Hand</span>
          </dt>
          <dd>{hex.hand}</dd>
          <dt>
            <RunningIcon className={style.detailIcon} />
            <span>Speed</span>
          </dt>
          <dd>{hex.speed}</dd>
          <dt>
            <StopwatchIcon className={style.detailIcon} />
            <span>Duration</span>
          </dt>
          <dd>{hex.duration}</dd>
          <dt>
            <BullseyeIcon className={style.detailIcon} />
            <span>Range</span>
          </dt>
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
    </>
  );
};

export default HexDetail;
