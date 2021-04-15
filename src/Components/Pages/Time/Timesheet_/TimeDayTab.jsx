import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Tab } from "./Tab/Tab"
import style from "./TimeDayTabs.module.css"
import { Day} from "./Tab/Day"
import { Timesheet } from "./TimeSheet"

export function DayTabs(){

    const [Prev,setPrev]=useState(0)
    

  const d = new Date();
   d.setDate(d.getDate()+Prev)
   var weekday = new Array(7);
   weekday[0] = "Su";
   weekday[1] = "M";
   weekday[2] = "T";
   weekday[3] = "W";
   weekday[4] = "Th";
   weekday[5] = "F";
   weekday[6] = "S";
   
 let n = weekday[d.getDay()];

//const days=["M","T","W","Th","F","S","Su"]

const days={
    M:"0:00",
    T: "0:00",
    W:"0:00",
    Th:"0:00",
    F:"0:00",
    S:"0:00",
    Su:"0:00",
}
console.log(Object.entries(days));
const [active,setactive]=useState(n)


const handlechange=(title)=>{
    setactive(title)
 console.log(  Day(title));
setPrev(Day(title))
}

const changeDate=(val)=>{
    setPrev(Prev+val)
}

useEffect(()=>{
    n = weekday[d.getDay()];
    console.log(n);
    setactive(n)
},[Prev])

    return (
       <div>
           
            <div className={style.showdate}>
             <button onClick={()=>changeDate(-1)} style={{width:"40px"}}><i class="fa fa-angle-left" style={{fontSize:"15px"}}></i></button>
             <button onClick={()=>changeDate(1)} style={{width:"40px"}}><i class="fa fa-angle-right" style={{fontSize:"15px"}}></i></button>
         <h2><span>{Prev==0&&"Today: "}</span>{d.toDateString()}</h2>
          {Prev!==0&&<Link onClick={()=>setPrev(0)}>Return to Today</Link>}
         </div>
        <div className={style.maindiv}>
        
          <div className={style.daytabs}>
                {
                    Object.entries(days).map((title)=>
                      <Tab
                       key={title}
                       handlechange={handlechange}
                       title={title[0]}
                       time={title[1]}
                       active={active===title[0]}
                      />
                    )
                }
               <div className={style.total}>Total:0:00</div>
          </div>
          <div className={style.container} >
           <div className={style.arrow}>
                <img src="/start arrow.png" alt="img"/>
           </div>
           <div className={style.main_img}>
               <img src="https://cache.harvestapp.com/assets/onboarding/landing-timesheets-day@2x-ba92c8a231563661a31ba7af8e20e4dd1b19e6286b94065e7a45aec949752ce6.png" alt="img"/>
           </div>
           <div className={style.ready}>
            <h2>You’re ready to track time! Let’s get to work.</h2>
            <Link><h2>Got it! I don’t need this tip anymore.</h2></Link>
           </div>
          </div>
        </div>
        </div>
    )
}

