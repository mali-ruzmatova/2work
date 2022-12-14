import { useState } from "react";
import { AboutContent, AboutSec } from "./AboutElements";

const About = () => {
  const text =
    "Ищите постоянную или временную работу в Ташкенте? Вам нужно решить срочные бытовые спонтанные и бизнес задачи? Желаете найти выгодный дополнительный заработок с частичной занятостью? Предлагаете вакансии на работу в Узбекистане и хотите с максимальной выгодой для себя поместить объявления? Интернет-площадка 2work.uz — лучшее решение этих и многих других задач. Ищите постоянную или временную работу в Ташкенте? Вам нужно решить срочные бытовые спонтанные и бизнес задачи? Желаете найти выгодный дополнительный заработок с частичной занятостью? Предлагаете вакансии на работу в Узбекистане и хотите с максимальной выгодой для себя поместить объявления? Интернет-площадка 2work.uz — лучшее решение этих и многих других задач.";
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <AboutSec>
      <AboutContent>
        {isReadMore ? text.slice(0, 360) : text}
        <span onClick={toggleReadMore}>
          {isReadMore ? "...Развернуть" : " Свернуть"}
        </span>
      </AboutContent>
    </AboutSec>
  );
};

export default About;
