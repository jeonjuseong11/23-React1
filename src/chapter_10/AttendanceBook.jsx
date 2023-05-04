import React from 'react';


const students=[
  { 
    id:1,
    name:"Inje"
  },
  { 
    id:2,
    name:"Steve"
  },
  { 
    id:3,
    name:"Sill"
  },
  { 
    id:4,
    name:"jeon"
  },
]
const AttendanceBook = () => {
  return (
    <div>
      <ul>
        {students.map((student)=>{
          return <li key={student.id}>{student.name}</li>
        })}
      </ul>
    </div>
  );
};

export default AttendanceBook;