import React from 'react'

function SatateSelector() {
return (
     <div>
      <form>
        <label>Select State</label>
        <select 
    
       onChange = {(eo)=>{
      console.log(eo.target.value)
      let stateSelector = eo.target.value;
       if(eo.target.value === "Andhra Pradesh"){
           console.log("Amaravathi")
       }else if(eo.target.value === "Telangana"){
        console.log("Hyderabad")
        }else if(stateSelector ==="Tamilnadu"){
        console.log("Chennai")
      }else if(stateSelector === "Kerala" ){
        console.log("Thiruvanathapuram")
      }else if(stateSelector === "Karnataka"){
        console.log("Banglore")
       }else if(stateSelector === "Maharastra"){
        console.log("Mumbai")
       }else if(stateSelector === "Madhya Pradesh"){
        console.log("Indore")
       }else if(stateSelector === "Gujatrat"){
        console.log("Gandhinagar")
       }else if(stateSelector === "Rajastan"){
        console.log("Jaipur")
       }else if(stateSelector === "Odissa"){
        console.log("Bhuvaneswar")
       }else if(stateSelector === "West Bengal"){
        console.log("Culcutta")
       }else if(stateSelector === "Jammu&Kashmir"){
        console.log("Srinagar")
       }else if (stateSelector === "Chattisghar"){
        console.log("Raipur")
       }else{
        console.log("Some other State")
       }

       switch (stateSelector) {
        case "Andhra Pradesh":
          console.log("Amaravathi")
          break;
          case "Telangana":
          console.log("Hyderabad")
          break;
          case "Tamilnadu":
          console.log("Chennai")
          break;
          case "Kerala":
          console.log("Thiruvanathapuram")
          break;
          case "Karnataka":
          console.log("Benglore")
          break;
          case "Maharastra":
          console.log("Mumbai")
          break;
          case "Madhya Pradesh":
          console.log("Indore")
          break;
          case "Gujarat":
          console.log("Gandhinagar")
          break;
          case "Rajasthan":
          console.log("Jaipur")
          break;
          
          case "Odissa":
          console.log("Bhuvaneswar")
          break;
          case "West Bengal":
          console.log("culcutta")
          break;
          case "Jammu&Kashmir":
          console.log("Srinagar")
          break;
          case "Chattisghar":
          console.log("Raipur")
          break;
          
          default:
            console.log("Some Other State")
          break;
       }
       
       }}>
       
            
            <option>select state</option>
            <option>Andhra Pradesh</option>
            <option>Telagana</option>
            <option>Tamilnadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
            <option>Maharastra</option>
            <option>Madhya Pradesh</option>
            <option>Gujarat</option>
            <option>Rajastan</option>
            <option>Odissa</option>
            <option>West Bengal</option>
            <option>Jammu&Kashmir</option>
            <option>Chattisghar</option>
        </select>
      </form>
    </div>
  )
}

export default SatateSelector;

