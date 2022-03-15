import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/form/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-97490-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate.replace("/");
    });
  };

  return (
    <section>
      <h2>New Meetup</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
