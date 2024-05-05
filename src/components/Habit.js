import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({habit}) => {
  const today=new Date();
  const todayDay=today.getDay();
  let countDone=0;
  //Count for habit done 
  for (let i = 0; i < habit.weekLog.length; i++) {
    if(habit.weekLog[i].isDone===true){
      countDone++;
    }
  }
  
//.....
  // It uses the navigate hook from react-router-dom to navigate a variable
  const navigate=useNavigate();

  // it call the variable dispatch
  const dispatch=useDispatch();

  // below fun() is called after clicking delete button from habit list
  const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    alert("Habit deleted Successfully!!!")
  }

  // fun() is called after clicking WEEKVIEW button on page
  // Here the setted habitted data from localstorage is navigated to weekview page
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }

  
  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay+1} Days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Weekly Data
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
