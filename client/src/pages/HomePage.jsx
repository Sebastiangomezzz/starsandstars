import React from "react"
import Header from "../components/Header"
import "../App.css";
import CardsList from "../components/CardsList";

function HomePage(props) {
  const {nasaData} = props
  return (
    <div className="App">
      <Header nasaData={nasaData}/>
      <CardsList/>

      
    </div>
  );
}

export default HomePage;
  