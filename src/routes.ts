/**
 * @fileOverview Route definitions for the application.
 * Defines the paths, components, and data for each route using Solid.js Router.
 */

import { lazy } from 'solid-js'; // Importing lazy function for code splitting
import type { RouteDefinition } from '@solidjs/router'; // Importing RouteDefinition type from Solid.js Router

import Home from './pages/home'; // Importing Home component
import AboutData from './pages/about.data'; // Importing data for About page

export const routes: RouteDefinition[] = [
  {
    path: '/', // Path for the Home route
    component: Home, // Component to render for the Home route
  },
  {
    path: '/about', // Path for the About route
    component: lazy(() => import('./pages/about')), // Lazy loading the About component
    data: AboutData, // Data to be used in the About component
  },
  {
    path: '**', // Catch-all route for undefined paths
    component: lazy(() => import('./errors/404')), // Lazy loading the 404 error component
  },
];
