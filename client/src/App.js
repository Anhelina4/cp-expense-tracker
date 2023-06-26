import {
  CategoriesAll,
  CategoryShow,
  HistoryShow,
  TransactionShow,
} from "./domains";
import { Login, Main, SignUp } from "./components/Auth";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {user && <Route path="/main" exact element={<Main />} />}
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/transaction/:transactionId"
          exact
          element={<TransactionShow />}
        />
        <Route path="/history" exact element={<HistoryShow />} />
        <Route path="/categories" exact element={<CategoriesAll />} />
        <Route
          path="/categories/:categoryId"
          exact
          element={<CategoryShow />}
        />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
