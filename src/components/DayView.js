import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

const DayView = ({day}) => {

  // Today date is displayed
  const today=new Date();

  // Here today date is called from today
  const todayDay=today.getDay();
  const dispatch=useDispatch();

  // The date is displayed according to the details provided to it
  const date=new Date(day.yyyy,day.mm,day.dd);

  // This fun() check the status of date is completed are not after clicking on completed button
  const markToDone=()=>{
    if(day.id>todayDay){
      alert("The next days status cannot be changed!!")
      return;
    }
  
    dispatch(habitDone(day.id));
  }

  // This fun() check the status of date is completed are not after clicking not completed button
  const markToUnDone=()=>{
    if(day.id>todayDay){
      alert("The next days status cannot be changed!!")
      return;
    }
    dispatch(habitUnDone(day.id))
  }

  // This fun() check the status of date is completed are not after clicking on none button
  const markToNone=()=>{
    if(day.id>todayDay){
      alert("The next days status cannot be changed!!")
      return;
    }
    dispatch(habitNone(day.id));
  }
  // -------------------------------------------------


  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
    </div>
  );
};

export default DayView;
