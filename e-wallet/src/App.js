import React from 'react';
import Cards from "./pages/Cards";
import AddCard from "./pages/AddCard";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "./redux/cardlistSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cards" />} />
      <Route path="/cards" element={<Cards />} />

      <Route
        path="/addcard"
        element={<AddCard />}
      />
    </Routes>
  );
}

export default App;
