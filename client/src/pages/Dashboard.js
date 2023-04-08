import React, { useState } from "react";
import Map1 from "../components/Map1";
import Map2 from "../components/Map2";
import Table from "../components/Table";
import Select from "../components/Select";
import "../css/Dashboard.css";

const Dashboard = () => {

//     const [showGraph, setShowGraph] = useState(false)
//   const [showMatchCard, setShowMatchCard] = useState(false);
//   const [isMatchingStarted, setIsMatchingStarted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleStartMatching = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setShowMatchCard(true);
//       setIsMatchingStarted(true);
//       setIsLoading(false);
//     }, 2000); // Replace with your loading time in milliseconds
//   };

//   const setStart = (start) => {
    
//   }



  return (
    <>
        <Map1/>
        <Map2/>
        <Table/>
        <Select/>
    </>
  );
};
export default Dashboard;