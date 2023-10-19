import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { INFO } from '../utils/mutations';
import Auth from '../utils/auth';

function Info() {
  return (
    <div>
      <h1>Welcome to the Storyboard Project!</h1>
      <p>This is a project that allows users to create and share stories with others.</p>
      <p>Here are some of the features of the project:</p>
      <ul>
        <li>Create a new story</li>
        <li>Edit an existing story</li>
        <li>Delete a story</li>
        <li>View all stories</li>
        <li>Search for stories by title or author</li>
      </ul>
      <p>We hope you enjoy using the Storyboard Project!</p>
    </div>
  );
}

export default Info;
