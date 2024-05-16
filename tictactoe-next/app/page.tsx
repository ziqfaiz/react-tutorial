import Image from "next/image";

export default function Board() {
  return (
    <main>
      <div class="">
        <Square prop="1" />
        <Square prop="2" />
        <Square prop="3" />
      </div>
      <div class="">
        <Square prop="1" />
        <Square prop="2" />
        <Square prop="3" />
      </div>
      <div class="">
        <Square prop="1" />
        <Square prop="2" />
        <Square prop="3" />
      </div>
    </main>
  );
}

function Square({ prop }: { prop: string }) {
  function handleClick() {
    console.log("Click");
  }
  return (
    <button
      type="button"
      class="text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 font-medium text-sm px-5 py-2.5 mb-2 border border-1 border-black"
      onclick={handleClick()}
    >
      {prop}
    </button>
  );
}
