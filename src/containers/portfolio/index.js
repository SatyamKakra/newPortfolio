import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiProfileFill } from "react-icons/ri";
import ImageOne from "../../images/hrms_image.png";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/event.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/finance.jpg"
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "HRMS",
    image: ImageOne,
    link: "https://dev-hrms.prilient.com/",
  },
  {
    id: 2,
    name: "Finance App",
    image: ImageSix,
    link: "https://satyamkakra.github.io/demigod-finance/",
  },
  {
    id: 2,
    name: "Event Website",
    image: ImageFour,
    link: "https://satyamkakra.github.io/Event/",
  },
  {
    id: 3,
    name: "Voting App",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageThree,
    link: "",
  },
  {
    id: 3,
    name: "TentWalla Website",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<RiProfileFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button
                      onClick={() => item.link && window.open(item.link, "_blank")}
                      disabled={!item.link}
                      className={!item.link ? "disabled-button" : ""}
                    >
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;