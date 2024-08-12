import {
  Resource,
  component$,
  useResource$,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export interface Venue {
  id: number;
  name: string;
  address: string;
  image: string;
  description: string;
}
export default component$(() => {
  const searchTerm = useSignal("");
  const searchTermDebounce = useSignal("");
  const venueList = useResource$<Venue[]>(async ({ track }) => {
    track(() => searchTermDebounce.value);
    const res = await fetch(
      "http://localhost:3000/venues?q=" + searchTerm.value,
    );
    return (await res.json()) as Venue[];
  });
  useTask$(({ track, cleanup }) => {
    const value = track(() => searchTerm.value);
    const timeout = setTimeout(() => (searchTermDebounce.value = value), 200);
    cleanup(() => clearTimeout(timeout));
  });
  return (
    <>
      <div class="flex justify-between py-8">
        <div>
          <h2>Overview</h2>
        </div>
        <div>
          <input
            id="search"
            type="text"
            class="mt-2 w-full rounded p-2"
            placeholder="Search..."
            onInput$={(e) =>
              (searchTerm.value = (e.target as HTMLInputElement).value)
            }
          />
        </div>
      </div>
      <Resource
        value={venueList}
        onPending={() => <p>Loading venues...</p>}
        onResolved={(venues) => (
          <>
            <div class="grid grid-cols-3 gap-4">
              {venues.map((venue) => (
                <div key={venue.id} class="rounded-lg bg-white">
                  <div
                    class="aspect-[4/3] rounded-lg bg-cover bg-center"
                    style={`background-image:url('${venue.image}')`}
                  ></div>
                  <div class="p-6">
                    <h3>{venue.name}</h3>
                    <p class="text-gray-400">{venue.address}</p>
                    <Link class="text-sky-500" href={`/venue/${venue.id}`}>
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Bites",
  meta: [
    {
      name: "description",
      content: "A qwik view of some our favorite eateries",
    },
  ],
};
