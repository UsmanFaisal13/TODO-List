import Submit from "./components/Submit";
export default function Home() {
  return (

    <div className="flex flex-col h-screen w-full items-center py-16 overflow-x-hidden lg:gap-8 gap-6">
      <h1 className="lg:text-6xl text-5xl font-Darker_Grotesque">TO-DO List</h1>
      <Submit />

    </div>
  );
}
