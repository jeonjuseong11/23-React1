import React, { useState } from 'react';

const SignUp = (props) => {
  const [name, setName]=useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    alert(`이름: ${name}`);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <button type='submit'>제출</button>
    </form>
  );
};

export default SignUp;