import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./utils/routes";
import Header from "./components/Header/Header";
import "./normalize.css";
import "./base.css";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.label} {...route} />
          ))}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
