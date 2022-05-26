import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { fireBaseDatabase } from "../firebase/fireBaseHandler";
import { Link } from "react-router-dom";
import "./CSS/student.css";
function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const databaseRef = ref(fireBaseDatabase, "/students");
    onValue(databaseRef, (snapshot) => {
      setStudents(Object.values(snapshot.val()));
    });
  }, []);
  return (
    <div className="add-student__container">
      <Link to="/add-student" class="add-student__link">
        <button className="add-student__btn">Add Student</button>
      </Link>
      <div className="card-container">
        {students.map((student) => {
          return (
            <div className="card">
              <p className="card-element">
                <span className="label">Name:</span>
                {student.studentName}
              </p>
              <p className="card-element">
                <span className="label">USN:</span>
                {student.usn}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Students;
