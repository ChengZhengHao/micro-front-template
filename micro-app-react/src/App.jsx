import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import List from "./pages/list";

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";
const App = () => {

  return (
    // 设置路由命名空间
    <Router basename={BASE_NAME}>
      <section>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
          </Switch>
        </Suspense>
      </section>
    </Router>
  );
};

export default App;
