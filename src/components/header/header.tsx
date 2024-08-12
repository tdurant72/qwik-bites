import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="bg-white p-3">
      <div class="container mx-auto flex max-w-5xl items-center justify-between">
        <div class="my-2 text-xl font-bold">🍔 QWIK Food Guide</div>
        <ul class="flex gap-8 font-bold text-gray-400">
          <li>
            <Link href={`/`}>Overview</Link>
          </li>
          <li>
            <Link href={`/about-us`}>About Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
