import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiNodejs, DiAngularSimple, DiReact, DiMongodb } from 'react-icons/di';
// import { FaNodeJs, FaDatabase } from "react-icons/fa";

const personalDetails = [
    {
        label: "Name",
        value: "Satyam Kakra",
    },
    {
        label: "Age",
        value: "30",
    },
    {
        label: "Address",
        value: "India",
    },
    {
        label: "Email",
        value: "satyamkakra4u@gmail.com",
    },
    {
        label: "Contact No",
        value: "+91 7891347871",
    },
];

const jobSummary =
    "I am a passionate Full-Stack Developer with expertise in building scalable and efficient web applications. With a strong foundation in Angular, TypeScript, React and Node.js, I specialize in creating dynamic front-end experiences while ensuring robust back-end performance. My skills extend to RESTful APIs, database management (MongoDB), allowing me to develop end-to-end solutions that enhance user experience and business efficiency.";


const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>

                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about_content_servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <div className="about_content_servicesWrapper_innerContent">
                            <div>
                                <DiMongodb size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAngularSimple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiReact size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiNodejs size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            {/* <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div> */}
                        </div>
                    </Animate>
                </div>

            </div>

        </section>
    )
}

export default About;