import React, { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <section>
            <h2>My Favorites Meetups</h2>
            <MeetupList meetups={favoritesCtx.favorites} />
        </section>
     );
}

export default FavoritesPage;