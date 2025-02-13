import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import './styles.scss';

const Home = () => {


    const navigate = useNavigate();
    console.log(navigate);

    const handleNavigateToContactMePage = () => {
        navigate('/contact')

    }

    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Satyam
                    <br />
                    Full Stack Developer
                </h1>

            </div>
            <Animate
                play
                duration={1.2}
                delay={1}
                start={{
                    transform: 'translateY(550px)',
                }}
                end={{
                    transform: 'translatex(0px)',
                }}
            >

                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire me</button>

                </div>

                <div className="home_social-media">
                    <div>
                        <a href="https://www.linkedin.com/in/satyam-kakra-8921b5a5/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} color="var(--yellow-theme-main-color)" />
                        </a>
                    </div>
                    <div>
                    <a href="https://github.com/SatyamKakra" target="_blank" rel="noopener noreferrer">
                        <FaGithub  size={30} color="var(--yellow-theme-main-color)" />
                        </a>
                    </div>

                </div>
            </Animate>
        </section>
    )
}

export default Home;