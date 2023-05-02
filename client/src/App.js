import { Graph } from "./components";

function App() {
  return (
    <div className="flex justify-center">
      <div className="container text-center">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense tracker
        </h1>

        {/* GRID COLUMNS */}
        <div className="flex justify-center">
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
