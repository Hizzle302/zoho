import React from 'react'
import Data from "../API Student Enrollments (1).json"



function Perc() {
  //  return (
    
      
        let ecounter = 0;
        for (let i = 0; i < Data.length; i++) {
          Data[i].Enroll_Date = ecounter++;
        }
        console.log("number of students enrolled:"  + ecounter);
        
        let arrcounter = 0;
        for (let i = 0; i < Data.length; i++) {
          if (Data[i].Training_Status === 
            "Completed") arrcounter++;
        }
        console.log("number of students completed: "+ arrcounter);
        // let marks = arrcounter
        // let total = ecounter
        let per = (arrcounter / ecounter) * 100;
        let perc = Math.round(per);
        console.log(
          "percentage of students who completed CD training: " + perc + " %"
        );
        
        // document.write("Total number of students: "+ecounter+"<br>")
        
        // document.write("Total number of student who completed training: "+arrcounter+"<br>");
        // document.write("Percentage of student who completed training: "+perc+"%<br>");
        
        
      
    
  //  );
};

    export default Perc
    