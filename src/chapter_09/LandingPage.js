import React, { useState } from 'react';
import ToolBar  from './ToolBar';
const LandingPage = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  const onClickLogin=()=>{
    setIsLoggedIn(true);
  }
  const onClickLogout=()=>{
    setIsLoggedIn(false);
  }
  return (
    <div>
      <ToolBar
        isLoggedIn={isLoggedIn}
        onCLickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
    </div>
  );
};

export default LandingPage;