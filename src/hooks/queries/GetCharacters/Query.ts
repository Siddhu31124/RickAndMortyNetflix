import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Characters($episodeId: ID!) {
    episode(id: $episodeId) {
      id: id
      characters {
        id
        image
        name
      }
    }
  }
`;

export default GET_CHARACTERS;
