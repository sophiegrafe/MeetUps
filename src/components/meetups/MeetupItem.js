import React, { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext, {
  FavoritesContextProvider,
} from "../../store/favorites-context";
import ContainerFlex from "../ui/ContainerFlex";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <ContainerFlex>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <div className={classes.actions}>
              <button onClick={toggleFavoritesStatusHandler}>
                {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
              </button>
            </div>
          </div>
        </ContainerFlex>
      </Card>
    </li>
  );
};

export default MeetupItem;
