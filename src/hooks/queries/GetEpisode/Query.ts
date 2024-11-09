import { gql } from "@apollo/client";

const GET_EPISODE = gql`
  query Episode($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      name
      created
      air_date
    }
  }
`;
export default GET_EPISODE;
