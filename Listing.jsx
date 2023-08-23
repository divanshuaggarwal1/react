import React from 'react'

const Listing = () => {
    let langs =["Dot.Net","React","Next JS","Java","Python"];
    let LangsObj=[
        {id:'1',lang:"Dot.Net"},
        {id:'2',lang:"React"},
        {id:'3',lang:"Next JS"},
        {id:'4',lang:"Java"},
        {id:'5',lang:"Python"},
    ];
  return (
    <div>
      <h2>List of languages:</h2>
      <ul>
        {
        langs.map((lang, index)=>(
            <li style={{textAlign: "left"}} key={index}>{lang}</li>

        ))}
        
      </ul>
      <h2>List of  Array Objects :</h2>
      <ul>
      {
        LangsObj.map((obj) =>(
      <li key={obj.id} style={{textAlign: "left"}}>
        {obj.id}{obj.lang}
      </li>
    
        ))
      }
      </ul>
    </div>
  );
}

export default Listing
