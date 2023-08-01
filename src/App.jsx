
import React, { useState, useEffect } from "react";
import TransportationQueue from "./components/TransportationQueue";
import Planner from "./components/Planner";
import { makeServer } from "./mirage/server";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [plannerData, setPlannerData] = useState({});
  const [dataComingFrom, setDataComingFrom] = useState("");


  useEffect(() => {
    // Initialize the MirageJS server in development mode
    if (process.env.NODE_ENV === "development") {
      makeServer({ environment: "development" });
    }

    // Fetch customers from the server
    fetch("/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customers:", error));

    // Initialize planner data with empty slots for 7 days from the current date
    const currentDate = new Date();
    const initialPlannerData = {};
    for (let i = 0; i < 7; i++) {
      const date = currentDate.toISOString().slice(0, 10);
      initialPlannerData[date] = new Array(4).fill(null);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    console.log("Initial Planner Data:", initialPlannerData);
    setPlannerData(initialPlannerData);
  }, []);


const handleDropCustomer = (customerId, plannerIndex,slotIndex) => {
   
    const singleCustomer = customers.find(c => c.id === customerId);

    const oldSlotArr = plannerData[plannerIndex];
    const newSlotArr = [...oldSlotArr];
    newSlotArr[slotIndex] = singleCustomer;
  
    const newPlannerData = {
      ...plannerData,
      [plannerIndex]:  newSlotArr
    }


    setPlannerData(newPlannerData);
    setDataComingFrom("")

  //  Save the updated planner data to the server
    savePlannerDataToServer(newPlannerData);


  };
 
  const savePlannerDataToServer = (plannerData) => {
    const saveURL = "/api/savePlannerData";

    fetch(saveURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plannerData }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if needed
        console.log("Planner data saved to the database:", data);
      })
      .catch((error) => {
        console.error("Error saving planner data to the database:", error);
      });
  };
  



  
  return (
    <div className="md:mt-6" >
      <h1 className="text-center mt-5 text-3xl w-[290px] mx-auto border-b-2 md:mb-8 border-black">Transportation Queue</h1>
      <div className="flex md:mx-10 w11/12 ml-5 mt-5 md:px-10 md:pb-7 gap-20 justify-between lg:flex-row flex-col md:border-[1px] md:border-gray-500  rounded-lg ">
      <TransportationQueue customers={customers} dataComingFrom={dataComingFrom} setDataComingFrom={setDataComingFrom} />
      <Planner plannerData={plannerData} onDropCustomer={handleDropCustomer} dataComingFrom={dataComingFrom} setDataComingFrom={setDataComingFrom} setPlannerData={setPlannerData} />
    </div>
    </div>
  );
};


export default App;