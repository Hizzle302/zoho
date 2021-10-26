import React from 'react';
import Data from "../API Student Profiles (1).json"


function Test (){
  
  return(
    <div posts>
      { Data.map(post => {
        return(
          <div>
          <h4>{post.Full_Legal_Name}</h4>
          <p>{post.Student_Phone_Number}</p>
          </div>
        )
      }) }
    </div>
  )
}


export default Test