import { gql } from '@apollo/client';

export const QUERY_ADD_STORYBOARD = gql`
  query addStoryboard
`

export const QUERY_DELETE_STORYBOARD = gql`
  query deleteStoryboard
`

export const QUERY_UPDATE_STORYBOARD = gql`
  query updateStoryboard
`

export const QUERY_RETREIVE_STORYBOARD = gql`
  query retreiveStoryboard
`

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;