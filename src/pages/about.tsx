/**
 * @fileOverview About component for the application.
 * This component displays information about the website and utilizes Suspense for lazy loading.
 */

import { createEffect, Suspense } from "solid-js"; // Importing createEffect and Suspense from solid-js
import AboutData from "./about.data"; // Importing AboutData to fetch the name

export default function About() {
  const name = AboutData(); // Fetching name from AboutData

  // Effect to log the name to the console whenever it changes
  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="bg-indigo-100 text-slate-700 p-8 rounded-md">
      {/* Section containing information about the website */}
      <h2 class="text-2xl">About</h2>

      <p class="mt-4">
        A page all about this website. <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          {/* Lazy load the name using Suspense */}
          <span>&nbsp;{name()}!</span>
        </Suspense>
      </p>
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank" class="underline">
          solidjs.com
        </a>
        {" "}to learn how to build Solid apps.
      </p>
    </section>
  );
}
