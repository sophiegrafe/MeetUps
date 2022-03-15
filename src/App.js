import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-meetup" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;
