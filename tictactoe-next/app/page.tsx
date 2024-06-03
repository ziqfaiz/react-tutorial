"use client";

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button
      disabled={disabled}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {title}
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Hi</h1>
      <MyButton title="Button" disabled={true} />
    </div>
  );
}
