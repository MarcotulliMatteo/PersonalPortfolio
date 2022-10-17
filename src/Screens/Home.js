import React from "react";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import Knowledge from "../Components/Knowledge";
import AboutMe from "../Components/AboutMe";
import RecentProjects from "../Components/RecentProjects";
import ContactMe from "../Components/ContactMe";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <MainSection/>
            <Knowledge/>
            <AboutMe/>
            <RecentProjects/>
            <ContactMe/>
        </React.Fragment>
    )
}

export default Home;