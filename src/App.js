import React from "react";
import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route exact path="/new-meetup" element={<NewMeetupPage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;
