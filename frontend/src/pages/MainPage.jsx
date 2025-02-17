import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RankCarousel from "../components/main/RankCarousel";
import TodayHerb from "../components/main/TodayHerb";
import HerbQuiz from "../components/main/HerbQuiz";
import useGlobalStyles from '../utils/useGlobalStyles';

const MainPage = () => {
  useGlobalStyles(); 

  return (
      <>
        <div style={{  justifyContent: 'center' }}>
          <RankCarousel />
          <br /><br />
          <TodayHerb />
          <br /><br />
          <HerbQuiz />
          <br /><br />
        </div>
        </>
    )
}

export default MainPage;