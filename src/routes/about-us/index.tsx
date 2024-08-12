import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>About Us</h1>
      <p class="py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis
        neque natus est placeat officiis dolor. Hic amet, accusamus culpa
        consequuntur libero provident deserunt eius itaque adipisci, nisi, iure
        assumenda dolor a quas iusto voluptate natus! Deserunt nostrum neque et
        doloremque perferendis laborum! Quam voluptatibus quasi cumque quidem
        at, velit perferendis necessitatibus repellat adipisci consequatur
        veniam commodi sint, minus ut error asperiores omnis aperiam, libero
        molestiae quod. Aspernatur provident deserunt sed vel quibusdam quo sunt
        quam nobis molestiae libero. Quod, repellat? Sed voluptatem repellat
        placeat. Nisi non neque maxime quo sit eaque modi, est veritatis,
        incidunt corrupti ullam, temporibus reiciendis?
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "About Us",
};
