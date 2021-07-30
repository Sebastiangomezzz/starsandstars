import React, { useState } from "react";
import Axios from "axios";
import Search from "../components/Search";
import { toast } from "react-toastify";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Card(props) {
  const { hdurl, url, title, explanation, date } = props.data;

  const { user } = props;

  const initialFormState = {};

  const [formState, setFormState] = useState(initialFormState);

  function handleOnChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function handleSendEmail(event) {
    event.preventDefault();
    Axios.post("http://localhost:5005/api/favorites/send-star", {
      ...formState,
      hdurl,
      url,
    }) //concatenamos el contenido del form con la hdurl y asi creamos un objeto y lo mandamos
      .then((res) => setFormState(initialFormState))
      .catch((err) => console.log(err));
    toast("You have sent a star!");
  }

  return (
    <>
      <div className="detail-container">
        <div className="detail-title">
          <p>{title}</p>
        </div>
        <div>
          <Zoom
            overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
            overlayBgColorStart="rgba(0, 0, 0, 0)"
          >
            <img className="detail-img" src={url} alt="card-detail-img" />
          </Zoom>
        </div>
        <br/>
        <div className="detail-explanation">
          <p>{explanation}</p>
        </div>
        <br/>
        <div className="detail-date">
          <p className="detail-tagline">Photo taken on {date}</p>
        </div>
        <br/>
      </div>

      
        {user && (
          <div className="email-container">
            <form className="form-stars" onSubmit={handleSendEmail}>
              <div className="email-space">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  value={formState.email}
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="message-space">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  value={formState.message}
                  type="text"
                  name="message"
                  id="message"
                  onChange={handleOnChange}
                ></textarea>
              </div>
              <button className="form-btn" type="submit">
                Send a Star
              </button>
            </form>
          </div>
        )}
      

      <Search />
    </>
  );
}
