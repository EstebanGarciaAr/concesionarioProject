import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrivingTest from "./src/components/DrivingTest";
import VehicleList from "./src/components/VehicleList";
import VehicleSearch from "./src/components/VehicleSearch";
import HistoryBackground from './src/components/serviceHistoryModule/HistoryBackground'
import NotificationBackground from './src/components/notificationModule/NotificationBackground'
import ServiceBackground from './src/components/serviceRequestModule/ServiceBackground'
export const App =() => {
  return(
    
    //<Logo/>
    //<DrivingTest/>
    //<VehicleSearch/>
    //<HistoryBackground/>
    //<NotificationBackground/>
    //<ServiceBackground/>
    <SafeAreaProvider>
    <VehicleList/>
    </SafeAreaProvider>
  );
}

export default App