import React from "react"
import Header from "../components/Header"
import "../App.css";
import CardsList from "../components/CardsList";
import AddSuggestion from "../components/AddSuggestion";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search"

function HomePage(props) {
  const {dailyPic, setSelectedPic, latestPicsList, user} = props
  return (
    <>
      <Header data={dailyPic}/>
      <CardsList data={latestPicsList} setSelectedPic={setSelectedPic} user={user}/>
      {user && <AddSuggestion user={user}/>}
      <Footer/>
      <Search/>
    </>
  );
}

export default HomePage;
  