import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import { tableMapData } from "../static/MockedTableObject.tsx";

export interface Props {
  title?: string;
  //TablesJson?: string;
}

export default function Editor({
  //TablesJson = "",
  title = "Editor",
}: Props) {
  // const parsedData = JSON.parse(TablesJson);

  return (
    <div>
      <header class="lg:container mx-auto md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base flex flex-col items-center justify-center">
        <div class="mb-10 md:mb-20 flex justify-center ">
          <div class="font-bold text-3xl lg:text-6xl leading-tight lg:leading-none xl:w-5/6 text-center">
            {title}
          </div>
        </div>
      </header>
      <div>
        <h1>Table Data</h1>
        {tableMapData.tables.map((table) => (
          <div key={table.id}>
            <h2>Table: {table.label}</h2>
            <div>
              {table.places.map((place) => <p key={place.id}>{place.label}</p>)}
              <img
              src="../static/tables/greenTable.png"
              alt={`Table ${table.label}`}
              class="absolute left-[${table.x}px] top-[${table.y}px] transform rotate-[-${table.rotation}deg]"
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
