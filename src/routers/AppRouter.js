import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { Context } from "../context/auth/Context";
import Error404 from "../pages/Error404";
import TaskPage from "../pages/TaskPage";

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (user ? <Home /> : <Redirect to="/login" />)}
      />
      <Route
        exact
        path="/login"
        render={() => (user ? <Redirect to="/" /> : <Login />)}
      />
      <Route
        exact
        path="/register"
        render={() => (user ? <Redirect to="/" /> : <Register />)}
      />
      <Route
        exact
        path="/list/:idList"
        render={() => (user ? <TaskPage /> : <Redirect to="/login" />)}
      />
      <Route path="*" component={Error404} />
    </Switch>
  );
};

export default AppRouter;
