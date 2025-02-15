/**
 * @fileOverview Main application component.
 * This component includes navigation and renders children components using Suspense.
 */

import { Suspense, type Component } from 'solid-js'; // Importing Suspense and Component type from solid-js
import { A, useLocation } from '@solidjs/router'; // Importing A and useLocation from solid-js router

const App: Component = (props: { children: Element }) => {
  const location = useLocation(); // Getting the current location

  return (
    <div>
      <nav class="bg-slate-100 text-slate-900 px-4">
        {/* Navigation bar */}
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <A href="/" class="no-underline hover:underline">
              {/* Link to Home page */}
              Home
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/about" class="no-underline hover:underline">
              {/* Link to About page */}
              About
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/error" class="no-underline hover:underline">
              {/* Link to Error page */}
              Error
            </A>
          </li>

          <li class="text-sm flex items-center space-x-1 ml-auto">
            <span>URL:</span>
            <input
              class="w-75px p-1 bg-white text-sm rounded-lg"
              type="text"
              readOnly
              value={location.pathname} // Display the current URL path
            />
          </li>
        </ul>
      </nav>

      <main class="max-w-2xl mx-auto h-screen flex flex-col justify-center px-4">
        {/* Main content area */}
        <h1 class="text-5xl mx-auto mb-8 text-slate-600 font-light">
          Samuel W. Pinnock, Physicist playing engineer.
        </h1>
        <Suspense>
          {props.children} {/* Render children components lazily using Suspense */}
        </Suspense>
      </main>
    </div>
  );
};

export default App;
