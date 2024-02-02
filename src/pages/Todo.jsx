import React, { useState } from "react";

export default function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState("");

  function addActivity() {
  
    if(activity.trim() !== ""){
      setlistData((listData) => {
        const updatedList = [...listData, activity];
        console.log(updatedList);
        setActivity("");
        return updatedList;
      });
    }
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((element, id) => {
      return i!==id;
    });
    setlistData(updatedListData);
  }
  return(
    <>
      <div className="container">
        <div className="header">To do list</div>
        <input type="text" className="m-1"
          placeholder="Add to do ..."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        
          <p className="list-heading">Here is your list :{")"}</p>
          {listData !=[] && listData.map((data, i) => {
              return (
                <>
                  <div key={i} className="list-item">
                  <span className="list-text">{data}</span>
                    <button className='btn-position' onClick={() => removeActivity(i)}>
                      X
                      </button>
                    
                  </div>
                </>
              );
            })}
        
      </div>
    </>
  );
}
