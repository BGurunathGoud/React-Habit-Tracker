import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";

const Navbar = ({ name }) => {
  const dispatch=useDispatch();

  // This changes the state according to time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);
  
  // fun() for add habit 
  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Habit added to your list Successfully");
    document.getElementById("habitName").value="";
  }

  return (
    <>
      <div className="navbar">
        <h3>
          {/* it displays Text according to time whether it is Morning , Afternoon, Evening and Night */}
          {hour <= 12
            ? "Morning"
            : hour <= 17
            ? "Afternoon"
            : hour <= 21
            ? "Evening"
            : "Night"}
        </h3>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Submit Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        {/* Form data is displayed here...after clicking on Submit Habits button */}
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  HABIT NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter here..."
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
