import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import Knowledge from "../Components/Knowledge";
import AboutMe from "../Components/AboutMe";
import RecentProjects from "../Components/RecentProjects";
import ContactMe from "../Components/ContactMe";
import { SECTIONS } from "../Utils/constants";
import Drawer from "../Components/Drawer";

const Home = () => {
    const [showDrawer, setShowDrawer] = useState(false)

    const meinSectionRef = useRef('initial');
    const knowledgeSectionRef = useRef();
    const aboutMeSectionRef = useRef();
    const recentProjectsSectionRef = useRef();
    const contactMeSectionRef = useRef();
    
    const executeScrollToSection = (section) => {
        if(showDrawer) {
            setShowDrawer(false)
        }

        switch(section) {
            case SECTIONS.MAINSECTION:
                meinSectionRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case SECTIONS.KNOWLEDGE:
                knowledgeSectionRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case SECTIONS.ABOUTME:
                aboutMeSectionRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case SECTIONS.RECENTPROJECTS:
                recentProjectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case SECTIONS.CONTACTME:
                contactMeSectionRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                window.scrollTo(0, meinSectionRef.current.offsetTop);
        }
    }

    const onDrawerClick = () => {
        setShowDrawer(showDrawer => !showDrawer)
        console.log(showDrawer)
    }

    return (
        <React.Fragment>
            <Header executeScrollToSection={executeScrollToSection} onDrawerClick={onDrawerClick}/>
            <MainSection ref={meinSectionRef}/>
            <Knowledge ref={knowledgeSectionRef}/>
            <AboutMe ref={aboutMeSectionRef} executeScrollToSection={executeScrollToSection}/>
            <RecentProjects ref={recentProjectsSectionRef}/>
            <ContactMe ref={contactMeSectionRef}/>
            {showDrawer ? <Drawer executeScrollToSection={executeScrollToSection}/> : null}
        </React.Fragment>
    )
}

export default Home;