import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Vegetables from "./Vegetables";
import Vega from "./Vega";
import Fruits from "./Fruits";
import Kids from "./Kids";
import Meet from "./Meet";
import Xleb from "./Xleb";
import Other from "./Other";
import Concervs from "./Concervs";
import Bocals from "./Bocals";
import Dietic from "./Dietic";
import Heart from "./Admin/Heart";
import Karzina from "./karzina";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="my_heart_is_broken" element={<Heart />} />
        <Route path="karzina" element={<Heart />} />

        <Route path="/" element={<Home />}>
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="kids" element={<Kids />} />
          <Route path="Vega" element={<Vega />} />
          <Route path="Meet" element={<Meet />} />
          <Route path="Xleb" element={<Xleb />} />
          <Route path="Other" element={<Other />} />
          <Route path="Concervs" element={<Concervs />} />
          <Route path="Bocals" element={<Bocals />} />
          <Route path="Dietic" element={<Dietic />} />
          <Route path="Dietic" element={<Karzina />} />
          <Route path="Dietic" element={<Home />} />


        </Route>
      </Routes>
    </>
  );
}
