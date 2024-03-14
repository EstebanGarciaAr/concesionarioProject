import React from "react";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrivingTest from "./src/components/DrivingTest";
import VehicleList from "./src/components/VehicleList";
import VehicleSearch from "./src/components/VehicleSearch";
//import de esteban
//import DrivingTest from "./src/components/DrivingTest";
//import VehicleList from "./src/components/VehicleList";
//import VehicleSearch from "./src/components/VehicleSearch";
//import de luisa 
//import Price from './src/components/Price';
//import StartUp from "./src/components/StartUp.jsx";
//import Contact from "./src/components/Contact";
//import de andres
//import HistoryBackground from './src/components/serviceHistoryModule/HistoryBackground'
//import NotificationBackground from './src/components/notificationModule/NotificationBackground'
//import ServiceBackground from './src/components/serviceRequestModule/ServiceBackground'        

export const App =() => {
  return(
    
    //<Logo/>
    //<DrivingTest/>
    //<VehicleSearch/>
    <SafeAreaProvider>
    <VehicleList/>
    </SafeAreaProvider>

   // <VehicleList/>
   //luisa
   //<StartUp />
   //<Price/>
   //<Contact />
   //andres
   //<HistoryBackground/>
   //<NotificationBackground/>
   //<ServiceBackground/>
  );
}

