import gql from "graphql-tag";

export const GET_LEADERBOARD = gql`
  query GET_LEADERBOARD {
    getLeaderboard {
      id
      total
      player
      date
    }
  }
`;

export const ADD_SCORE = gql`
  mutation ADD_SCORE($total: Int!, $player: String!, $date: String!) {
    addScore(total: $total, player: $player, date: $date) {
      id
      total
      player
      date
    }
  }
`;

export const DELETE_SCORE = gql`
  mutation DELETE_SCORE($id: ID!) {
    deleteScore(id: $id) {
      id
      total
      player
      date
    }
  }
`;

export const UPDATE_LEADERBOARD = gql`
  mutation UPDATE_LEADERBOARD($total: Int!, $player: String!, $date: String!) {
    updateLeaderboard(total: $total, player: $player, date: $date) {
      id
      total
      player
      date
    }
  }
`;
