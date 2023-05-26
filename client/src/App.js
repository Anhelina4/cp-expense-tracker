import { Form, Graph } from "./components";

function App() {
  return (
    <div className="flex justify-center bg-gray-100	w-screen h-screen">
      <div className="container text-center">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense tracker
        </h1>

        {/* GRID COLUMNS */}
        <div className="flex justify-center gap-48">
          <Graph />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
