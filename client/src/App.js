import { Graph } from "./components";

function App() {
  return (
    <div className="container text-center drop-shadow-lg text-grey-800">
      <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
        Expense tracker
      </h1>

      {/* GRID COLUMNS */}
      <div className="grid md:grid-cols-2 gap-4">
        <Graph />
      </div>
    </div>
  );
}

export default App;
