// import React from "react";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { FaBlackTie } from "react-icons/fa";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import 'react-vertical-timeline-component/style.min.css'
// import { data } from "./utils";
// import './styles.scss';
// import {MdWork} from 'react-icons/md';

// const Resume = () => {
//   return (
//     <section id="resume" className="resume">
//       <PageHeaderContent
//         headerText="My Resume"
//         icon={<FaBlackTie size={40} />}
//       />
//       <div className="timeline">
//         <div className="timeline__experience">
//           <h3 className="timeline__experience__header-text">Experience</h3>
//           <VerticalTimeline
//             layout={"1-column"}
//             lineColor="var(--yellow-theme-main-color)"
//           >
//             {data.experience.map((item, i) => (
//               <VerticalTimelineElement
//                 key={i}
//                 className="timeline__experience__vertical-timeline-element"
//                 contentStyle={{
//                   background: 'none',
//                   color : 'var(--yellow-theme-sub-text-color)',
//                   border : '1.5px solid var(--yellow-theme-main-color)'
//                 }}
//                 date="2020 - Present"
//                 icon={<MdWork/>}
//                 iconStyle={{
//                   background : '#181818',
//                   color : 'var(--yellow-theme-main-color)',

//                 }}
//               >
//                 <div className="vertical-timeline-element-title-wrapper">
//                   <h3>
//                     {item.title}
//                   </h3>

//                   <h4>
//                     {item.subTitle}
//                   </h4>
//                 </div>
//                 <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

//               </VerticalTimelineElement>
//             ))}
//           </VerticalTimeline>
//         </div>
//         <div className="timeline__education">
//           <h3 className="timeline__education__header-text">Education</h3>
//           <VerticalTimeline
//             layout={"1-column"}
//             lineColor="var(--yellow-theme-main-color)"
//           >
//           {data.education.map((item, i) => (
//               <VerticalTimelineElement
//                 key={i}
//                 className="timeline__experience__vertical-timeline-element"
//                 contentStyle={{
//                   background: 'none',
//                   color : 'var(--yellow-theme-sub-text-color)',
//                   border : '1.5px solid var(--yellow-theme-main-color)'
//                 }}
//                 date="2020 - Present"
//                 icon={<MdWork/>}
//                 iconStyle={{
//                   background : '#181818',
//                   color : 'var(--yellow-theme-main-color)',

//                 }}
//               >
//                 <div className="vertical-timeline-element-title-wrapper">
//                   <h3>
//                     {item.title}
//                   </h3>

//                   <h4>
//                     {item.subTitle}
//                   </h4>
//                 </div>
//                 <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

//               </VerticalTimelineElement>
//             ))}
//             </VerticalTimeline>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Resume;

import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaBlackTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { data } from "./utils";
import "./styles.scss";

const Timeline = ({ children }) => {
  return <div className="vertical-timeline">{children}</div>;
};

const TimelineElement = ({ date, icon, title, subTitle, description }) => {
  return (
    <div className="vertical-timeline-element">
      <div className="vertical-timeline-element-icon">{icon}</div>
      <div className="vertical-timeline-element-content">
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
        <p className="vertical-timeline-element-description">{description}</p>
        <span className="vertical-timeline-element-date">{date}</span>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent headerText="My Resume" icon={<FaBlackTie size={40} />} />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <Timeline>
            {data.experience.map((item, i) => (
              <TimelineElement
                key={i}
                date={item.date}
                icon={<MdWork size={20}/>}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
              />
            ))}
          </Timeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <Timeline>
            {data.education.map((item, i) => (
              <TimelineElement
                key={i}
                date={item.date}
                icon={<MdWork size={20}/>}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
