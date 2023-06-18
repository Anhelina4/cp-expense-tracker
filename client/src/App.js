import { HistoryShow, TransactionShow } from "./domains";
import { Login, Main, SignUp } from "./components/Auth";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");
  console.log("user", user);
  return (
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Main />}></Route>}
        <Route path="/signup" exact element={<SignUp />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route
          path="/transaction/:transactionId"
          exact
          element={<TransactionShow />}></Route>
        <Route path="/history" exact element={<HistoryShow />}></Route>
        <Route
          path="/"
          exact
          element={<Navigate replace to="/login" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
