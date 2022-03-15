import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/form/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://meetups-react-4d379-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
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
