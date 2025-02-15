/**
 * @fileOverview Entry point for the application. 
 * Initializes and renders the application using Solid.js and Solid Router.
 * @refresh reload
 */

import './index.css'; // Importing main CSS file

import { render, Suspense } from 'solid-js/web'; // Importing functions from solid-js/web library

import App from './app'; // Importing main App component
import { Router } from '@solidjs/router'; // Importing Router for routing purposes
import { routes } from './routes'; // Importing routes

const root = document.getElementById('root'); // Getting the root element from the DOM

// Check if the environment is development and if the root element exists
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// Render the application using the Solid Router and the App component
render(
  () => <Router root={(props) => <App>{props.children}</App>}>{routes}</Router>,
  root,
);
