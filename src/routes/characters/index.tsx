import {
  JSXChildren,
  JSXNode,
  Resource,
  Signal,
  component$,
  useResource$,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import {
  type DocumentHead,
  type RequestHandler,
  Link,
  routeLoader$,
} from "@builder.io/qwik-city";

export interface Character {
  id: number;
  name: string;
  address: string;
  image: string;
  species: string;
}

export const useCharacterData = routeLoader$(async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data as Character;
});
export default component$(() => {
  const searchTerm = useSignal("");
  const searchTermDebounce = useSignal("");
  const characterData = useCharacterData();
  //   const characterList = useResource$<Character[]>(async ({ track }) => {
  //     track(() => searchTermDebounce.value);
  //     let baseUrl = "https://rickandmortyapi.com/api/character/";
  //     let characterUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm.value},`;
  //     let url;
  //     searchTermDebounce.value === "" ? (url = baseUrl) : (url = characterUrl);
  //     const res = await fetch(url);
  //     console.log(await res.json());
  //     return (await res.json()) as Character[];
  //   });
  //   useTask$(({ track, cleanup }) => {
  //     const value = track(() => searchTerm.value);
  //     const timeout = setTimeout(() => (searchTermDebounce.value = value), 200);
  //     cleanup(() => clearTimeout(timeout));
  //   });
  //   const useCharacters = routeLoader$(async()=>{
  //     const res = await fetch('https://rickandmortyapi.com/api/character/');
  //     const characters = await res.json();
  //     return characters as Character[]
  //   })
  //   const characterList = useCharacters();
  return (
    <>
      <div class="flex justify-between py-8">
        <div>
          <h2>Overview</h2>
        </div>
        {/* <div>
          <input
            id="search"
            type="text"
            class="mt-2 w-full rounded p-2"
            placeholder="Search..."
            onInput$={(e) =>
              (searchTerm.value = (e.target as HTMLInputElement).value)
            }
          />
        </div> */}
      </div>
      <Resource
        value={characterData}
        onPending={() => <p>Loading characters...</p>}
        onResolved={(characterData) => <>{characterData}</>}
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
