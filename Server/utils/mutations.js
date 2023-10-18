// import { gql } from '@apollo/client';

// export const ADD_STORYBOARD = gql`
//   mutation addStoryboard($storyboardText: String!, $storyboardAuthor: String!) {
//     addStoryboard(storyboardText: $storyboardText, storyboardAuthor: $storyboardAuthor) {
//       _id
//       storyboardText
//       storyboardAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;

// export const DELETE_STORYBOARD = gql`
//   mutation deleteStoryboard
// `

// export const UPDATE_STORYBOARD = gql`
//   mutation updateStoryboard
// `

// export const RETREIVE_STORYBOARD = gql`
//   mutation retreiveStoryboard
// `

// export const ADD_COMMENT = gql`
//   mutation addComment($thoughtId: ID!, $commentText: String!) {
//     addComment(thoughtId: $thoughtId, commentText: $commentText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;

const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');
const { gql } = require('graphql-tag');

// Create an Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'YOUR_GRAPHQL_ENDPOINT' }), // Replace with your GraphQL server endpoint
});

// Add a new Storyboard
async function addStoryboard(title, author) {
  const ADD_BOOK = gql`
    mutation AddBook($title: String!, $author: String!) {
      addBook(title: $title, author: $author) {
        id
        title
        author
      }
    }
  `;

  const result = await client.mutate({
    mutation: ADD_STORYBOARD,
    variables: { title, author },
  });

  console.log('Added storyboard:', result.data.addStoryboard);
}

// Update a Storyboard
async function updateStoryboard(id, title, author) {
  const UPDATE_STORYBOARD = gql`
    mutation UpdateStoryboard($id: ID!, $title: String, $author: String) {
      updateStoryboard(id: $id, title: $title, author: $author) {
        id
        title
        author
      }
    }
  `;

  const result = await client.mutate({
    mutation: UPDATE_STORYBOARD,
    variables: { id, title, author },
  });

  console.log('Updated storyboard:', result.data.updateStoryboard);
}

// Delete a Storyboard
async function deleteStoryboard(id) {
  const DELETE_STORYBOARD = gql`
    mutation DeleteStoryboard($id: ID!) {
      deleteStoryboard(id: $id)
    }
  `;

  const result = await client.mutate({
    mutation: DELETE_STORYBOARD,
    variables: { id },
  });

  console.log('Deleted Storyboard with ID:', result.data.deleteStoryboard);
}

// Retrieve a Storyboard by ID
async function getStoryboard(id) {
  const GET_STORYBOARD = gql`
    query GetStoryboard($id: ID!) {
      getStoryboard(id: $id) {
        id
        title
        author
      }
    }
  `;

  const result = await client.query({
    query: GET_Storyboard,
    variables: { id },
  });

  console.log('Retrieved Storyboard:', result.data.getStoryboard);
}

// Example usage
addStoryboard('The Great Gatsby', 'F. Scott Fitzgerald');
updateStoryboard('1', 'New Title', 'New Author');
deleteStoryboard('2');
getStoryboard('3');
