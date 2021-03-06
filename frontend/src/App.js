import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "react-loader-spinner";

import Layout from "./components/layout/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const Menu = React.lazy(() => import("./pages/Menu"));
const Order = React.lazy(() => import("./components/Order/OrderSummary"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const style = { textAlign: "center" };

  return (
    <Layout>
      <Suspense
        fallback={
          <div style={style}>
            <Loader type="Puff" color="#FFF" height={60} width={60} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/zamowienie" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
