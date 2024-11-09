import SeriesContentDetails from "./SeriesContentDetails";
import StarringAndCreators from "./StarringAndCreators";
import Episodes from "../Episodes/Episodes";
import ModalStore from "../../Store/ModalStore";
import { TITLE_URL } from "../../Constant";
import {
  detailsContainer,
  image,
  imageContainer,
  mainContainer,
  mainContainerModalIsOpen,
  title,
} from "./MainDetailsStyles";

const MainContent = () => {
  const mainStyle = ModalStore.isModalOpen
    ? mainContainer
    : mainContainerModalIsOpen;

  const seriesDetails = () => {
    return (
      <div className={detailsContainer}>
        <img src={TITLE_URL} className={image} />
        <h1 className={title}>Rick And Morty</h1>
        <SeriesContentDetails />
        <p className="text-[16px]">
          Brilliant scientist Rick takes his fretful teenage grandson, Morty, on{" "}
          <br /> wild misadventures in other worlds and alternate dimensions.
        </p>
        <StarringAndCreators />
      </div>
    );
  };

  return (
    <main className={mainStyle}>
      <div className={imageContainer}>{seriesDetails()}</div>
      <Episodes />
    </main>
  );
};
export default MainContent;
