import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo";
import Completed from "../pages/Completed";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add"
          element={<AddTodo />}
        />

        <Route
          path="/completed"
          element={<Completed />}
        />

      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;