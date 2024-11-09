import { info, aRated } from "./MainDetailsStyles";

const SeriesContentDetails = () => {
  return (
    <div className={info}>
      <span>2013</span>
      <span>|</span>
      <span className={aRated}>A </span>
      <span>|</span> <span>7 Seasons </span>
      <span>|</span> <span>Comedy</span>
    </div>
  );
};

export default SeriesContentDetails;
