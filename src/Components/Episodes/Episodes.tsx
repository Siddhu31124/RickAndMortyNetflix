import { observer } from "mobx-react";
import { useRef, useState, useEffect } from "react";

import useGetEpisodes from "../../hooks/queries/GetEpisodes/useGetEpisodes";
import SeriesStore from "../../Store/SeriesStors";
import Episode from "./Episode";
import EpisodeModel from "../../Model/EpisodeModel";
import Loader from "../Loader";
import {
  episodeHeader,
  episodesContainer,
  episodeText,
  titleText,
} from "./EpisodesStyles";
import {
  LIMIT as EPISODE_LIMIT,
  PERCENTAGE_TO_FETCH_MORE,
  TOTAL_PERCENTAGE,
} from "../../Constant";

const Episodes = () => {
  const [isFetchData, setIsFetchData] = useState(false);
  const episodesRef = useRef<HTMLOListElement>(null);
  const { fetchMore, loading, error } = useGetEpisodes();
  useEffect(() => {
    const isNotLastPage =
      Math.round(SeriesStore.allEpisodesDetails.length / EPISODE_LIMIT) ===
      SeriesStore.allEpisodesDetails.length / EPISODE_LIMIT;
    if (isFetchData && isNotLastPage) {
      loadMore();
    }
  }, [isFetchData]);

  function loadMore() {
    //rename LIMIT
    fetchMore({
      variables: {
        page:
          Math.floor(SeriesStore.allEpisodesDetails.length / EPISODE_LIMIT) + 1,
      },
    });
  }

  function handelFetchMore() {
    const scrollTop = episodesRef.current?.scrollTop;
    const scrollHeight = episodesRef.current?.scrollHeight;
    const clientHeight = episodesRef.current?.clientHeight;
    const notUndefinedValues = scrollTop && scrollHeight && clientHeight;
    if (notUndefinedValues) {
      setIsFetchData(
        Math.ceil(scrollTop) >
          ((scrollHeight - clientHeight) * PERCENTAGE_TO_FETCH_MORE) /
            TOTAL_PERCENTAGE
      );
    }
  }

  const episodesHeader = () => {
    return (
      <div className={episodeHeader}>
        <h1 className={episodeText}>Episodes</h1>
        <p className={titleText}>|</p>
        <p className={titleText}>Rick And Morty</p>
      </div>
    );
  };
  //Rename
  const episodesStatus = () => {
    switch (true) {
      case loading: {
        return <Loader />;
      }
      case error !== undefined: {
        return <p className="text-red-600 mt-10">Failed to fetch Episodes</p>;
      }
    }
  };

  return (
    <div>
      {episodesHeader()}
      {episodesStatus()}
      <ul
        className={episodesContainer}
        onScroll={handelFetchMore}
        ref={episodesRef}
      >
        {SeriesStore.allEpisodesDetails.map((each: EpisodeModel) => (
          <Episode key={each.id} episode={each} />
        ))}
      </ul>
    </div>
  );
};
export default observer(Episodes);
