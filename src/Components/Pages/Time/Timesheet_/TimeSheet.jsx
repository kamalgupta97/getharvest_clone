import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from './TimeSheet.module.css';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch,useSelector} from 'react-redux';
import { createTaskTimer, getTaskTimer,getProjectData } from '../../../../Redux/Timer/timeAction';
// import { createTaskTimer, getTaskTimer } from '../../../../Redux/Timer/timeAction';
import { DayTabs} from './TimeDayTab';



const TimeSheetWrapper = styled.div`
margin-left:18%;
width:60%;

height:500px;
`

const TimeSheetContainer = styled.div`
position:relative;
top:40px;
width:100%;

height:460px;
display:flex;
`
const AddButton =styled.div`

position:relative;
width:60px;
height:60px;
background:linear-gradient(#14a000,#1a8d08);
color:white;
display:flex;
justify-content:space-around;

align-items:center;

border-radius:5px;
cursor: pointer;
div{
    font-size:80px;
    margin-bottom:3px;
}
`


const LeftBox =styled.div`
width:10%;
`



const TaskWrapper =styled.div`
width : 90%;
background:none;
input{
    background:none;
}
`

const AddTask =styled.div`
    width:33%;
    height:300px;
    /* background-color:#f37510; */
    background-color:white;
    position:absolute;
    left:33%;
    top:100px;
    z-index:1;
    border-radius:12px;
    box-shadow:2px 2px 2px 2px grey;
    form{
        width:90%;
        margin:auto;
    }
    `

const initTaskObj ={
    projectName:"",
    taskName:"",
    notes:"",
    timer:"",
    dating:""
}



export const Timesheet = () => {
 
    const [formData,setFormData] =React.useState(initTaskObj)
    const {projectName,taskName,notes,timer,dating} = formData
    const [billable,setBillable]=React.useState([])

    const [openCreateTAsk,setopenCreateTAsk]=React.useState(false)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    
    const state = useSelector(state => state.time)
    const data =useSelector(state=>state.time)
    console.log(data.isLoading)

     
    const clientObj =state.projectData[6]
    const dispatch = useDispatch()
 
    React.useEffect(()=>{
        dispatch(getProjectData())
        if(!data.isLoading){
            console.log(clientObj)
            const bill =Object.keys(clientObj.tasks).filter((item)=>clientObj.tasks[item]===true)
            setBillable(bill)
        
        
            const nonbill =Object.keys(clientObj.tasks).filter((item)=>clientObj.tasks[item]!==true)
            // setBillable(nonbill) 
        } 
        
     
    },[openCreateTAsk])

  
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData)
        // dispatch(createTaskTimer(formData))
        dispatch(getTaskTimer())
        
    }
    
    return (
       
            <div >
            {
                openCreateTAsk &&<AddTask>
                        <div className={styles.createTaskHeader}>
                            <h3>New Time Entry</h3>
                            <p>
                            
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div><label htmlFor="">Project/Task</label></div>
                            <div className={styles.projectName}>
                            <select name="projectName" id="" onChange={handleChange} value={projectName}>
                                <option value="Task Name-1">Project Name-1</option>
                                <option value="Task Name-2">{clientObj? clientObj.pname:"Task Name-2"}</option>
                            </select>
                            </div>
                            <div className={styles.TaskName}>
                            <select name="taskName" id="" onChange={handleChange} value={taskName}>
                            <optgroup label="BILLABLE">
                                {
                                     console.log(billable)
                                  
                                }
                                {
                                   
                                 !data.isLoading && billable.map((item)=><option value={item}>{item}</option>)

                                }
                            </optgroup>
                            <optgroup label="NON BILLABLE">
                                <option value="Task Name-1" >Task Name-1</option>
                                <option value="Task Name-2">Task Name-2</option>
                                
                            </optgroup>
                                
                            </select>
                            </div>
                            <div className={styles.InputBoxes}> 
                            <input type="text" placeholder="Notes (Optional)" name="notes"  onChange={handleChange} value={notes}/>
                            <input type="text" placeholder="0:00" name="timer" onChange={handleChange} value={timer}/>
                            </div>
                            <div className={styles.Buttons}>
                            <input type="submit" value="Start Timer" />
                            <button onClick={()=>setopenCreateTAsk(false)}>Cancel</button>
                            
                            </div>

                        </form>
                </AddTask>
            }
            <TimeSheetWrapper>
            <TimeSheetContainer>
                <LeftBox><AddButton onClick={()=>setopenCreateTAsk(true)}> <div>+</div></AddButton></LeftBox>
                <TaskWrapper>
                    <DayTabs/>
                </TaskWrapper>
            </TimeSheetContainer>

           
        </TimeSheetWrapper>
        </div>
    )
}