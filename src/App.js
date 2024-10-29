import React, {useState, useEffect, useRef} from 'react';

import {motion, useScroll, useSpring} from "framer-motion";

import {Menu} from './components/Menu';
import {Profile} from './components/contents/Profile';
import {WorkExperiences} from './components/contents/WorkExperiences';
import {EnteringDiv} from "./components/animations/EnteringDiv";
import {Educations} from "./components/contents/Educations";
import {Achievements} from "./components/contents/Achievements";
import {Footer} from "./components/Footer";

function App() {
    const {scrollYProgress} = useScroll();

    const [value, setValue] = useState(0);

    const homeRef = useRef(null);
    const achievementsRef = useRef(null);
    const workExperiencesRef = useRef(null);
    const educationRef = useRef(null);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const sectionRefs = [homeRef, achievementsRef, workExperiencesRef, educationRef];
        sectionRefs[newValue].current.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        switch (entry.target.id) {
                            case 'section-0':
                                setValue(0);
                                break;
                            case 'section-1':
                                setValue(1);
                                break;
                            case 'section-2':
                                setValue(2);
                                break;
                            case 'section-3':
                                setValue(3);
                                break;
                            default:
                                break;
                        }
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        const sections = [homeRef, achievementsRef, workExperiencesRef, educationRef];
        sections?.forEach((section) => observer.observe(section.current));

        return () => {
            sections?.forEach((section) => observer.unobserve(section.current));
        };
    }, []);

    return (
        <div className="relative min-h-screen">
            <div className="container">
                <header>
                    <Menu value={value} handleChange={handleChange}/>
                </header>
                <div className="flex-grow py-24">
                    <div ref={homeRef} id="section-0" className="content-section md:py-0">
                        <EnteringDiv>
                            <Profile/>
                        </EnteringDiv>
                    </div>
                    <div ref={achievementsRef} id="section-1" className="content-section">
                        <Achievements/>
                    </div>
                    <div ref={workExperiencesRef} id="section-2" className="content-section">
                        <WorkExperiences/>
                    </div>
                    <div ref={educationRef} id="section-3" className="content-section">
                        <Educations/>
                    </div>
                </div>
                <motion.div className="progress" style={{scaleX}}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
