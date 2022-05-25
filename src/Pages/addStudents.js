import React, { useState } from "react";
import { fireBaseDatabase } from "../firebase/fireBaseHandler";
import { push, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./CSS/form.css";

function AddStudents() {
  const [student, setStudent] = useState({ studentName: "", usn: "" });
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const databaseRef = ref(fireBaseDatabase, "/students");
    await push(databaseRef, student);
    nav("/students");
  };

  return (
    <div className="form__container">
      <form action="" onSubmit={handleSubmit} className="login-form">
        <input
          placeholder="Name"
          className="form__control"
          type="text"
          onChange={handleChange}
          name="studentName"
        />
        <input
          placeholder="USN"
          className="form__control"
          type="text"
          onChange={handleChange}
          name="usn"
        />
        <input className="form__btn" type="submit" value={"Add"} />
      </form>
    </div>
  );
}

export default AddStudents;
