import { gql } from "@apollo/client";

const GET_EPISODES = gql`
  query Episodes($page: Int = 1) {
    episodes(page: $page) {
      results {
        id
        name
      }
    }
  }
`;

export default GET_EPISODES;
