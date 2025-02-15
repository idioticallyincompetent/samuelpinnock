/**
 * @fileOverview Home component for the application.
 * This component includes a simple counter for demonstration purposes.
 */

import { createSignal } from "solid-js"; // Importing createSignal from solid-js

export default function Home() {
  const [count, setCount] = createSignal(0); // Initializing state for the counter

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
      {/* Section containing the counter UI */}
      <h2 class="text-2xl">About</h2>
      <p class="mt-4">
        Mit 18 Jahren bin ich nach
        Deutschland ausgewandert.
        Nachdem ich die deutsche
        Sprache erlernt hatte, zog ich
        nach Stuttgart, um Physik zu
        studieren. Im Laufe meines
        Studiums konzentrierte ich
        mich insbesondere auf die
        Fachgebiete der
        Festkörperphysik, Optik und
        Atomphysik. Durch meine
        akademische Laufbahn lernte
        ich ein breites Spektrum an
        Messmethoden und
        Auswertungsverfahren kennen
        und es fasziniert mich,
        Messabläufe zu optimieren
        und zu automatisieren,
        wodurch ich meine Fähigkeiten
        in der Programmierung
        einsetzen kann. Präzision und
        Organisation sind für mich
        dabei von zentraler
        Bedeutung.
      </p>

      <div class="flex items-center space-x-2 mt-4">
        <button
          type="button"
          class="border rounded-lg px-2 border-slate-900"
          onClick={() => setCount(count() - 1)} // Decrement counter by 1
        >
          -
        </button>

        <output class="p-10px">Count: {count()}</output> {/* Display current count */}

        <button
          type="button"
          class="border rounded-lg px-2 border-slate-900"
          onClick={() => setCount(count() + 1)} // Increment counter by 1
        >
          +
        </button>
      </div>
    </section>
    
  );
}
