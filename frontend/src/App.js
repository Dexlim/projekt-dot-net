import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "react-loader-spinner";

import Layout from "./components/layout/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const Menu = React.lazy(() => import("./pages/Menu"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <Loader type="Puff" color="#FFF" height={60} width={60} />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
