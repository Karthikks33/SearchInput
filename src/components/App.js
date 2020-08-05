import React, {  useState } from 'react';
import "../components/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import Information from "../info-json";

function App() {

  const [search, setSearch] = useState("");
   let message = false;

  
//handle input from keyboard and set search input
 function searchSpace(event) {
    let keyword = event.target.value;
    setSearch(keyword);
  }


 //Filter the info-json data w.r.t dearch input
  const item = Information.filter((data) =>{
    
  //check weather input, if not send the data ; if input found check the same with includes
  // not able to get the  logic for array in object i.e items
    if(search == null){
      return null;

    } else if(data.id.toLowerCase().includes(search.toLowerCase()) || data.name.toLowerCase().includes(search.toLowerCase()) || data.address.toLowerCase().includes(search.toLowerCase()) || data.pincode.toLowerCase().includes(search.toLowerCase()) /*|| data.items.toLowerCase().includes(search.toLowerCase())*/ ){
      //meassage is set if search data found
      message = true;
      return data;
    }
     
  });
 



  return (
   
    <div className = "outer-container" >
       
       <i className ="fa fa-search search" style = {{"position" : "absolute"}}aria-hidden="true"  ></i>
      <input  text ="text"  placeholder= "Search user by ID Name Address Pincode...." onChange ={e => searchSpace(e)}  />
            <button ><a href='/'>X</a></button>
      <div className ="inner">
      {/*if mesasage not set to true than no match found*/}
      {/*if search not set then no data displayed*/}
      {message ? (search ? item.map(data =>{
    return (
      <div className = "container">
        <ul>
        
            <span>{data.id}</span><br />
            <span>{data.name}</span><br />
            <span>{data.address}</span><br />
            <span>{data.items}</span><br/>
           
            <span>{data.pincode}</span><br />
            
        </ul>
        </div>
      
    )
  }):null):<h5>No Match found</h5>
      }</div>
      
    </div>
   
  )

  }
export default App;
