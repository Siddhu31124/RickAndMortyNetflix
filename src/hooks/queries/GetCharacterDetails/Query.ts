import { gql } from "@apollo/client";

const GET_CHARACTER_DETAILS = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      image
      name
      gender
      status
      type
      species
      origin {
        dimension
        name
      }
    }
  }
`;

export default GET_CHARACTER_DETAILS;
