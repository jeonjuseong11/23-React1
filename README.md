# 201930232 전주성 23-React1 
## React1 강의 정리 Repository
#### 강의 정리
## **11주차 (2023.05.11)**
### **섭씨 화씨 온도 변환기 만들기 실습**  
TemperatureInput.jsx 
```js
import React from 'react';

const scaleName = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props){
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return(
    <fieldset>
      <legend>
        온도를 입력해주세요 (단위: {scaleName[props.scale]});
      </legend>
      <input value={props.temperature} onChange={handleChange}/>
    </fieldset>
  )
}

export default TemperatureInput;
``` 
Calculator.jsx 
```js
import React,{ useState } from 'react';
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
      return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
      return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
      setTemperature(temperature);
      setScale("c");
  };

  const handleFahrenheitChange = (temperature) => {
      setTemperature(temperature);
      setScale("f");
  };

  const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
      <div>
          <TemperatureInput
              scale="c"
              temperature={celsius}
              onTemperatureChange={handleCelsiusChange}
          />
          <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={handleFahrenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
  );
}

export default Calculator;
```
## **10주차 (2023.05.04)**
### **리스트**  
자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것  
컴퓨터 프로그래밍에서는 같은 아이템을 순서대로 모아놓은 것이 리스트에 해당됨  

* **배열**  
자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 것  

* **키**   
각 객체나 아이템을 구분할 수 있는 고유한 값  
리스트 아이템에는 무조건 키가 있어야함  
리스트에서 아이템을 구별하기 위한 고유한 문자열  
어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용  
같은 리스트에 있는 엘리먼트 사이에만 고유한 값  
```
리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.
```
### **map()함수**
배열 안에 각각의 요소를 하나씩 추출하여 연산하는 함수
```js
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number)=>number + 2);
```
### **폼(form)**
일반적으로 사용자로부터 입력 받기 위한 양식에서 많이 사용됨  
* **`<input type="text">`태그**  
한 줄로 텍스트를 입력받기 위한 HTML 태그  
리액트에서는 value라는 attribute로 입력된 값을 관리  
* **`<textarea>`태그**  
여러 줄에 걸쳐서 텍스트를 입력 받기 위한 HTML 태그  
리액트에서는 value라는 attribute로 입력된 값을 관리  
* **`<select>`태그**  
드롭다운 목록을 보여주기 위한 HTML 태그  
여러 가지 옵션 중에서 하나 또는 여러 개를 선택할 수 있는 기능을 제공  
리액트에서는 value라는 attribute로 선택된 옵션의 값을 관리  
* **`<input type="file">`태그**  
디바이스의 저장 장치로부터 사용자가 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그  
서버로 파일을 업로드하거나 자바스크립트의 File API를 사용해서 파일을 다룰 떄 사용  
읽기 전용이기 떄문에 리액트에서는 비제어 컴포넌트  

### **제어 컴포넌트**
사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트  
React 에서는 모든 데이터를 state에서 관리  
* **Input Null Value**  
  * 제어 컴포넌트에 value.prop을 정해진 값을 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없음  
  * Value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됨  
### **여러 개의 입력 다루기**
컴포넌트에 여러 개의 state를 선언하여 각각의 입력에 대해 사용하면 됨  

### **Shared State**  
어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우  
## **9주차 (2023.04.27)**
### **이벤트 핸들링**  
#### **DOM에서 click 이벤트 처리**
이벤트 이름을 모두 소문자로 표기  
이벤트를 처리 할 함수를 문자열로 전달  
```js
<button onclick=”activate()”>activate</button>  
```
#### **REACT에서 click 이벤트 처리**
이벤트의 이름을 카멜 표기법으로 표기  
이벤트를 처리할 함수를 그대로 전달  
```js
<button onClick={activate}>activate</button>
```

### **이벤트 추가하기**
버튼을 클릭하면 이벤트 핸들러 함수인 handleClick() 함수를 호출  
Bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어 undefined로 사용불가  
Bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있음  
클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 참고만 할 것  

### **이벤트 핸들러**
이벤트가 발생했을 떄 해당 이벤트를 처리하는 함수  
이벤트 리스너라고 부르기도 함  
- 클래스 컴포넌트
  * 쿨래스의 함수로 정의하고 생성자에서 바인딩해서 사용
  * 클래스 필드 문법도 사용 가능
- 함수형 컴포넌트
  * 함수 안에 함수로 정의
  * arrow function을 사용해서 정의
  ```js
  //첫번째 방법
  const handleClick(){
    setIsToggleOn((isToggleOn)=>!isToggleOn);
  }
  //두번째 방법
  const handleCLick=()=>{
    setIsToggleOn((isToggleOn)=>!isToggleOn
  }
  <button onClick={handleClick}>
  ...
  ```
### **Arguments**
함수에 전달할 데이터 
파라미터 또는 매개변수라고 부름  
#### **Arguments 전달**

- 클래스 컴포넌트
  * arrow function을 사용하거나 Function.prototype.bind를 사용해서 전달
- 함수 컴포넌트
  * 이벤트 랜들러 호출 시 원하는 순서대로 매개변수를 넣어 사용  

```js
<button onClick={(event)=>this.deleteItem(id,event)}>삭제하기</button>
<button onClick={this.deleteItem(this, id)}>삭제하기</button>
```
이벤트 핸들러에 매개 변수를 전달해야 하는 경우도 많음  
event라는 매개변수는 리액트의 이벤트 객체를 의미    


#### **클릭 이벤트 처리하기 실습**
```js
import React,{useState} from "react";
function ConfirmButton(props) {
    const [isConfirmed,setIsConfirmed]=useState(false);

    const handleConfirm=()=>{
      setIsConfirmed((prevIsConfirmed)=>!prevIsConfirmed);
    }
    return(
      <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
    )
}
export default ConfirmButton;

```

### **조건부 렌더링**
props를 전달받아 참이면 괄호안에 것을 수행하고 거짓이면 밖에 것을 리턴함
```js
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
```
### **엘리먼트 변수**
렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법
```js
  <div>
    {button}
  </div>
```
### **인라인 조건**
필요한 곳에 조건문을 직접 넣어 사용하는 방법  
1. 인라인 if  
  if문을 직접 사용하지 않고 동일한 효과를 내기 위해 && 논리 연산자 사용
  &&는 모든 조건이 참일 때만 참  

      **단축평가**  
      첫 번째 조건이 거짓이면 두번째 조건은 판단할 필요 없음  

      **AND**
      |A|B|RESULT|
      |---|---|-----|
      |T|T|T|
      |T|F|F|
      |F|T|F|
      |F|F|F|

      **OR**
      |A|B|RESULT|
      |---|---|-----|
      |T|T|T|
      |T|F|T|
      |F|T|T|
      |F|F|F|

2. 인라인 if-else  
삼항 연산자를 사용  
    ```
    조건문 ? 참일경우 : 거짓을 경우
    ```
   문자열이나 엘리먼트를 넣을 수 있음  
   
### **컴포넌트 렌더링 막기**
컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴함  
```js
  function WarningBanner(props){
      if(!props.warning){
        return null;
      }
      return (
        <div>경고!</div>
      )
  }
```
### **로그인 여부 툴바 실습**
LandingPage.js
```js 
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
```
ToolBar.js
```js
import React from 'react';

const styles = {
  wrapper:{
    padding : 16,
    display : "flex",
    flexDirection : "row",
    borderBottom : "1px solid gray"
  },
  greeting: {
    marginRight : 8
  }
}

const ToolBar = (props) => {
  const {isLoggedIn,onCLickLogin,onClickLogout}=props;


  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
      {isLoggedIn ? 
        <button onClick={onClickLogout}>로그아웃</button>
       : 
        <button onClick={onCLickLogin}>로그인</button>}
    </div>
  );
};

export default ToolBar;
```
### **리스트**  
자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것  
컴퓨터 프로그래밍에서는 같은 아이템을 순서대로 모아놓은 것이 리스트에 해당됨  
키 – 각 객체나 아이템을 구분할 수 있는 고유한 값  
**배열**  
자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 것  
**리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.**  

## **7주차 (2023.04.13)**
### **훅(Hook)**  
### **훅이란**
클래스형 컴포넌트에서는 생성자(constructor)에서 state를 정의 하고 setState() 함수를 통해 state를 업데이트함  
예전에 함수형 컴포넌트는 별도의 state를 정의하거나 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었음  
함수형 컴포넌트에서도 state나 생명주기 함수 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook)이다  
함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 됨  
HOOK이란 STATE와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수를 의미  
훅 이름은 모두 use로 시작  
**사용자 정의 훅 (custom hook)** 을 만들 수 있으며 이 경우에 이름은 자유롭게 할 수 있으나 use로 시작할 것을 권장함(**반드시**)  

### **useState**
함수형 컴포넌트에서 state를 사용하기 위한 Hook 

**useState 사용법**  
useState import 받기  
```js
import React, { useState } from "react;
```
컴포넌트 내부에서 state 생성
```js
  const [변수명, set함수명] = useState(초깃값);
```
* 첫번째 항목 : state의 이름 (변수명)  
* 두번째 항목 : state의 set 함수 즉 state를 업데이트하는 함수  
* 함수를 호출할 때 state의 초깃값으로 설정됨  
* 함수의 리턴 값은 배열의 형태  

### **useEffect**
사이트 이펙트를 수행하기 위한 것  
Side effect는 원래의 용도 혹은 목적의 효과외에 부수적으로 다른 효과가 있는 것을 의미함  
서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미
클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공    
선언된 컴포넌트의 props와 state에 접근할 수 있음  
useEffect()에서 리턴하는 함수는 컴포넌트 마운트가 해제될 때 호출됨  
#### **이펙트라고 부르는 이유**  
이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며 렌더링 중에는 작업이 완료될 수 없기 때문  
렌더링이 끝난 이후에 실행되어야 하는 작업들임     

**useEffect 사용법**
useEffect import 받기  
```js
import React, { useEffect } from "react;
```
```js 
useEffect(이펙트 함수, 의존성 배열)
```
* 첫번째 파라미터: 이펙트함수  
* 두번째 파라미터: 의존성 배열 

**이펙트 함수**  
처음 컴포넌트가 렌더링 된 이후 그리고 재 렌더링 이후에 실행됨  
만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고싶으면 빈 배열을 넣으면 됨    
이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러 번 실행되지 않음     

**의존성 배열**  
이펙트가 의존하고 있는 배열로 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨    
배열을 생략하는 경우(빈배열[])는 업데이트될 때마다 호출됨  

### **useMemo**  
Memoized value를 리턴하는 훅  
연산량이 높은 작업이 매번 렌더링될 때마다 반복되는 것을 피하기 위해 사용  
렌더링이 일어나는 동안 실행되므로 렌더링이 일어나는 동안 실행돼서는 안될 작업을 useMemo()에 넣으면 안됨  

**useMemo 사용법**  
```js
const memoizedValue = useMemo(값 생성 함수, 의존성 배열)
```
의존성 배열에 들어있는 변수가 변했을 경우에만 새로 값 생성 함수를 호출하여 결괏값을 반환  
의존성 배열을 넣지 않을 경우 렌더링이 일어날 떄 마다 매번 값 생성 함수가 실행되어 의미가 없음  

### **useCallback** 
useMemo()훅과 유사하지만 값이 아닌 함수를 반환한다는 점이 다름  
useCallback(콜백함수, 의존성 배열);은 useMemo(()=>콜백함수,의존성 배열); 과 동일함  
컴포넌트 내에 함수를 정의하면 매번 렌더링이 일어날 때마다 함수가 새로 정의되므로 useCallback()훅을 사용하여 불필요한 함수 재정의 작업을 없애는 것  

**useCallback 사용법**  
```js
const memorizedCallback = useCallback(콜백 함수, 의존성 배열);
```
의존성 배열에 들어있는 변수가 변했을 경우에만 콜백 함수를 다시 정의해서 리턴함  

### **useRef** 
레퍼런스를 사용하기 위한 훅  
* 레퍼런스: 특정 컴포넌트에 접근할 수 있는 객체  

매번 렌더링될 때마다 항상 같은 래퍼런스 객체를 반환  

**useRef 사용법**  
```js
const refContainer = useRef(초깃값);
```
현재 참조하고 있는 element를 의미하는 .current라는 속성을 통해 접근  

### **훅의 규칙** 
1. 무조건 최상위 레벨에서만 호출  
    * 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됨  
    * 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 함  
2. 리액트 함수 컴포넌트에서만 훅을 호출해야 함  
    * 훅은 리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출할 수 있음    

### **커스텀 훅**
이름이 use로 시작하고 내부에서 다른 훅을 호출하는 단순 자바스크립트 함수  
파라미터로 무엇을 받을지 어떤 것을 리턴해야 할지를 개발자가 직접 정할 수 있음  
중복되는 로직을 커스텀 훅을 추출하여 재사용성 높일 수 있음  
이름이 use로 시작하지 않으면 특정 함수의 내부에서 훅을 호출하는지를 알 수 없기 때문에 훅의 규칙 위반 여부를 자동으로 확인할 수 없음  


## **6주차 (2023.04.06)** 
### **댓글 컴포넌트 만들기**  
/src/chapter_05 디렉토리 생성
#### **Comment 컴포넌트 생성**  
Comment.jsx  
```js
const Comment = (props) => {
  
  return (
      <div>
        <h1> 제가 만든 첫 컴포넌트입니다.</h1>
      </div>
  );
};

export default Comment;

```
#### **CommentList 컴포넌트 생성**  
CommentList.js   
```js
import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  return (
    <div>
      <Comment />
    </div>
  );
};

export default CommentList;

```
#### **CommentList 컴포넌트 렌더링**  
index.js    
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommentList from './chapter_05/CommentList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

```
#### **CommentList를 이용하여 Comment에 props 전달**
name과 comment라는 props를 Comment 컴포넌트에 전달   
CommentList.js  
```js
import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  return (
    <div>
      <Comment name={"전주성"} comment={"안녕하세요 전주성입니다."}/>
      <Comment name={"전주성"} comment={"안녕하세요 전주성입니다."}/>
      <Comment name={"전주성"} comment={"안녕하세요 전주성입니다."}/>
    </div>
  );
};

export default CommentList;
```
Comment 컴포넌트 내부에서 props.name,props.comment로 값을 받음  
Comment.jsx  
```js
import React from 'react';
import styles from './CommentStyle.js';

const Comment = (props) => {
  
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
          alt='프로필 이미지'
          style={styles.image}
          />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
```
#### **Map 함수 활용**
위에는 매번 컴포넌트를 수정해야하기 때문에 나쁜 예시   
별도의 객체로 받아 컴포넌트에서 분리하여 출력하도록 해야함  
comments객체 즉 받는 데이터를 분리해줌  
데이터를 추가해도 자동으로 렌더링이 추가 되도록함  

CommentList.js
```js
import React from 'react';
import Comment from './Comment';
const comments=[
  {
      name:"전주성",
      comment:"안녕하세요 전주성입니다."
  },
  {
      name:"전주성2",
      comment:"안녕하세요 전주성2입니다."
  },
  {
      name:"전주성2",
      comment:"안녕하세요 전주성2입니다."
  },
]
const CommentList = () => {
  return (
    <div>
      {comments.map((v)=>{
        return(
          <Comment name={v.name} comment={v.comment}/>
        )
      })}
    </div>
  );
};

export default CommentList;
```
### **State와 생명주기**  
#### **State**  
React 컴포넌트의 상태  
정상/비정상이 아닌 컴포넌트의 데이터를 의미  
정확히는 컴포넌트의 변경 가능한 데이터를 의미  
state가 변하면 다시 렌더링되기 때문에 렌더링에 관련된 값만 state에 포함해야함  
#### **State 특징**  
**클래스형 컴포넌트**
constructor는 생성자  
this.state가 컴포넌트의 state   
ex)
```js
class ListButton extends React.Component{
	constructor(props){
		super(props);
		this.state={
			liked:false
		};
	}
	…
}

```
**함수형 컴포넌트**  
useState() 함수를 사용 

**state 변경**   
state는 직접 수정은 불가능  
setState 함수를 이용해야함  
```js
//잘못된 방법
this.state={
  name:”juseong”
}
//정상적인 방법
this.setState({
	name:”juseong”
});
```  
  
#### **component vs element vs instance**  
element = 재료  
component = 행동  
instnace = 재료를 빵 틀에 넣고 만든 빵  


#### **생명주기**  
컴포넌트의 생성, 사용, 종료 시점을 나타냄  
클래스형에서 constructor가 실행되면 컴포넌트 생성  
생성 후 componentDidMount()함수가 호출  
컴포넌트가 소멸하기 전까지 여러 번 렌더링됨  
렌더링은 props.setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐  
렌더링이 끝나면 componentDidUpdate()함수 호출됨  
마지막으로 컴포넌트가 Unmount되면 componentWillUnmount()함수가 호출됨  

### **React Developer Tools**
chrome 확장 프로그램으로 설치 후 개발자 도구(F11)에 들어가보면    
언제 어떻게 컴포넌트가 움직이는지 볼 수 있는 component 메뉴  
Profilter 탭이 나오는 것을 볼 수 있다  

## **5주차 (2023.03.30)**  
### **엘리먼트**  
#### **엘리먼트의 정의**  
리액트 앱을 구성하는 요소  
리액트 앱의 가장 작은 빌딩 블록들(공식 페이지)  
웹 페이지의 경우 DOM 엘리먼트이며 HTML요소를 의미  
#### **react 엘리먼트와 DOM 엘리먼트의 차이점**  
React 엘리먼트는 Virtual DOM 형태  
DOM 엘리먼트는 모든 정보를 갖고있어 무거움  
반면 React 엘리먼트는 변화하는 부분만 갖고 있어 가벼움  
|  |DOM|Virtual DOM|
|------|---|---|
|업데이트 속도|느리다|빠르다|
|element 업데이트 방식|DOM 전체 업데이트|변화 부분을 가상 DOM으로 만든 후 DOM과 비교하여 다른 부분만 업데이트|
|메모리|낭비가 심함|효율적|
#### **엘리먼트의 생김새**  
React 엘리먼트는 자바스크립트 객체 형태로 존재  
컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 js객체  
불변성을 갖고 있음  
#### **createElement()**
내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수  
```javascript
{
  type: Button,
    props:{
      color:'green',
      children:'Hello,element!'
    }
}
```
첫번째 매개번수 : type  
두번째 매개변수 : props(속성)  
세번쨰 매개변수 : children(자식 태그)  

### **컴포넌트**  
#### **컴포넌트 구조**
작은 컴포넌트가 모여 큰 컴포넌트를 구성하고    
다시 이런 컴포넌트들이 모여 전체 페이지를 구성하는 것을 의미  

#### **컴포넌트의 종류**
**함수형 컴포넌트**  
props를 받아 값을 넣어 반환
```javascript
function Welcome(props){
  return (
    <h1>안녕,{props.name}</h1>
    );
}
```
**클래스형 컴포넌트**  
React.Component class로부터 상속받아 선언
```javascript
class Welcome extends React.Component{
  render(){
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```
#### **컴포넌트의 장점**
재사용이 가능하기 때문에 전체 코드의 양 감소
개발 시간과 유지 보수 비용 줄일 수 있음  

#### **컴포넌트 이름 짓기**
소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문에 대문자로 시작    
파일이름과 컴포넌트 이름을 같게 짓는 것이 좋음 
#### **컴포넌트의 렌더링**
```javascript
function Welcome(props){
  return <h1>안녕, {props.name}</h1>;
}
const element = <Welcome props="ㅇㅇ"/>;
ReactDOM.render(
  element,
  document.getElementById('root')
)
```
#### **컴포넌트 합성**
여러 개의 컴포넌트를 함쳐서 하나의 컴포넌트를 만드는 것  
컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있음  

#### **컴포넌트 추출**
복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있음  
큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것  
1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋음   
가독성이 높아짐 


#### **자바스크립트 함수와의 차이점**
입려고가 출력이 있다는 면에서 유사하지만  
입력은 props가 담당하고 출력은 React 엘리먼트의 형태로 출력  
  
#### **엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷함**
  
### **Props(property)**
컴포넌트의 속성, 컴포넌트에 어떤 props를 넣느냐에 따라 속성이 다른 엘리먼트가 출력됨  
Props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체    
ex 에어비엔비  
#### **Props의 특징**
읽기전용으로 변경할 수 없음  
속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달해야함  
#### **Props 사용법**  
**JSX를 사용하는 경우**  
key-value쌍으로 props를 구성하여 사용    

**JSX를 사용하지 않는 경우**
createElement()함수 사용하여 두번째 매개변수에 props를 넣어 사용  

### **Pure vs Impure**
#### **Pure 함수**
인수로 받는 정보가 함수 내부에서도 변하지 않는 함수
#### **Impure 함수**
인수로 받는 정보가 함수 내부에서도 변하는 함수



## **4주차 (2023.03.23)**
### **JSX (JavaScript Extension)**
Javascript에 XML을 추가한 확장 문법
#### JSX의 장점
- 코드가 간결해짐 
- 가독성이 향상됨
- Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강함

#### 사용법
모든 자바스크립트 문법을 지원
자바스크립트 문법에 XML과 HTML을 섞어서 사용

#### JSX 속성 정의
1. 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의
``` javascript
const element = <a href="https://www.reactjs.org"> link </a>;
```
2. 중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입
``` javascript
const element = <img src={user.avatarUrl}></img>;
```
#### 컴포넌트 선언 방법
1. .jsx 혹은 .js파일로 컴포넌트파일을 생성 (파일 생성시 이름 앞에 대문자로 시작)

2. 해당 파일에서 React import 
```javascript
import React from "react";
```
3. export
```javascript
export default 컴포넌트 파일 이름;
```
4. 컴포넌트 활용될 곳에서 import 받아 사용
```javascript
import Library from './chapter_3/Library';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

```
## **3주차 (2023.03.16)**
### **Node.js 설치**
1. 구글에 node 검색 후 https://nodejs.org 에 들어가 LTS버전 설치
2. cmd(terminal)에 node -v 혹은 node --version으로 설치가 완료되었는지 확인

**node 뿐만 아니라 다른 프로그램에서도버전 확인 명령어 -v --version 를 사용**
###   **NPM(Node Package Manager)**
Node.js에서 사용하는 패키지를 다운 받을 수 있는 프로그램  
Node.js를 설치하면 자동으로 설치됨  
### **NPX(Node Package Runner)**
npm 5.2.0 버전부터 따라오는 프로그램으로, 패키지를 설치하지않고, 1회성으로 실행해 볼수 있게 해준다.
npm , yarn 으로 글로벌 패키지를 설치하지 않고도 명령을 사용할 수 있게 해준다
### **리액트는 무엇인가?**
#### **리액트의 정의**
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
#### **리액트의 개념**
복잡한 사이트를 쉽고 빠르게 만들고 관리하기 위해 만들어진 것  
다른 표현으로 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구
#### **리액트의 장점**
#### 1. 빠른 업데이트와 렌더링 속도 
> ### **DOM(Document Ovject Model)**
> XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변경, 삭제할 수 있도록 돕닌 인터페이스  
>이것이 W3C의 표준
> ### **Virtual DOM**
> DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법<br/><br/>
> **DOM은 동기식, Virual DOM은 비동기 방법**
#### 2. 컴포넌트 기반의 구조  
- 리액트의 모든 페이지는 컴포넌트로 구성됨  
- 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있다.
- 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹 사이트 개발
#### 3. 재사용성
- 반복적인 작업을 줄여주어 생산성 증가
- 유지보수가 용이함
- 재사용이 가능하려면 해당 모듈의 의존성이 없어야한다.
#### 4. 든든한 지원군
- 메타(구 facebook)에서 오픈 소스 프로젝트로 관리하고 있어 계속 발전하고 있음
#### 5. 활발한 지식 공유 & 커뮤니티
#### 6. 모바일 앱 개발 가능
- React Native라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platform) 모바일 앱을 개발할 수 있음
#### **리액트의 단점**
#### 1. 방대한 학습량
- 자바스크립트를 고부한 경우 빠르게 학습할 수 있음
#### 2. 높은 상태 관리 복잡도
- State, component life cycle 등의 개념이 있지만 그리 어렵지 않다
### **Chapter2 리액트 시작하기**
#### **React 공식 문서**
##### ko.reactjs.org

#### **웹 사이트에 React.js 추가하기**
HTML 파일에 DOM Container(Root DOM Node)를 추가
React를 CDN방식으로 사용할 수 있도록 script파일을 가져옴
React 공식 문서의 문서-> CDN 링크에 들어가면 찾을 수 있음

### **React 프로젝트 생성 방법**
#### **create-react-app
React를 개발하는데 필요한 모든 패키지를 설치하고 프로젝트를 생성
1. 프로젝트를 생성할 폴더로 이동

```
npx create-react-app 프로젝트이름
```
2. 생성된 프로젝트가 있는 폴더로 이동
```
cd 디렉토리 주소
```
3. VSCode TERMINAL을 켜서 npm start로 프로젝트를 실행
```
npm start
```

****
## **2주차 (2023.03.08)**
### **GitHUb VsCode에 연결하기**
#### **소스제어를 위한 준비**
git config --global user.name {이름}<br/>
git config --global user.email {깃허브 이메일}
설정후에 파일 publish 버튼을 누르면 인터넷 창에서 github로그인을 할 수 있도록 해준다.
로그인을 마친 후 Vscode에서 commit을 해주면 github 페이지에 생성된다.

### **BRANCH**

새로운 레포지토리를 생성하면 main으로 branch가 생성되어있음<br/>
<b>Master branch에서 main branch로 변경된 이유</b><br/>
인종차별적 요소나 주종 관계를 담고 있는 용어를 프로젝트에서 제거하기로 결정하면서 업계 전반에 이런 부분을 제거하는 움직임이 일어남

### **JavaScript**

##### var let const

**var** 중복 선언 가능<br/>
**let** 중복 선언 불가능<br/>
**const** 중복 선언 불가능<br/>
const는 상수
주로 let, const만 사용

### **연산자**

a++(postifix방식), ++a(prefix방식))
let a = 1, let b = '1'
console.log(a == b) => true
console.log(a === b) => false

### **컴포넌트의 종류**
##### **클래스형 컴포넌트**

- 컴포넌트 구성 요소, 리액트 생명주기를 모두 포함하고 있다. (리액트 생명주기는 따로 조금더 자세히 알아보도록 한다.)
- 프로퍼티, state, 생명주기 함수가 필요한 구조의 컴포넌트를 만들 때 사용한다.
```javascript
import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    // 생성함수
    super(props);
  }
  componentDidMount() {
    // 상속받은 생명주기 함수
  }
  render() {
    // 상속받은 화면 출력 함수, 클래스형 컴포넌트는 render() 필수
    return <div>Hello, {this.props.name}</div>;
  }
}
export default MyComponent; //다른 JS파일에서 불러올 수 있도록 내보내주기
```

##### **함수형 컴포넌트**
- 가장 간단하게 컴포넌트를 정의하는 방법은 자바스크립트 함수를 작성하는 것이다.
```javascript
import React from "react";
function MyComponent(props) {
  return <div>Hello, {props.name}</div>;
}
export default MyComponent;
```

2년 전에는 클래스형을 우선시 했는데 함수형 컴포넌트를 이용하면 구현할 수 없는 부분이 있었기 때문이다 <br/>
하지만 시간이 지나면서 점점 함수형 컴포넌트에서도 충분히 구현할 수 있었고 함수형 컴포넌트가 시각적으로 가독성이 높기 때문 최근의 경향을 보면 React에서는 함수형 컴포넌트를 우선시 한다.

### **JSON (JavaScript Object Notation)**
자바스크립트에서 오브젝트를 선언하는 방법
Key와 Key value로 이루어진 스타일의 자료형

### **자바스크립트 함수의 종류**
#### **function statement형**

일반적인 함수 형태
```javascript
function sum(a, b) {
  return a + b;
}
```
#### **arrow function expression형**
```javascript
const multiply = (a, b) => {
  return a + b;
};
```
  ****
## **1주차 (2023.03.02)**
### **Git 그리고 버전 관리**
#### **Semantic versioning 개요**
##### **버전(Version)**
소프트웨어를 개발하는 과정에서 수정 사항이 발생할 때 마다 숫자나 문자 등을 이용하여 표시함으로써 수정 이력을 확인하기 위한 방법  
버전을 통해 개발 과정을 추적할 수 있으며, 이를 통해 효율적인 개발이 가능함  
##### **버전 관리(Version Control)**
이러한 버전을 효율적으로 사용하기 위한 방법을 말한다  
개발자 마다 버전을 사용하는 방법은 제각각  

#####  **유의적 버전 2.0.0 (Semantic Version 2.0)**
개발자 혹은 개발사 마다 각기 다른 버전 체계를 사용함으로써 가독성이 떨어지고 심한 경우 개발한 당사자 마저 시간이 흐르면 해당 버전이 뭐를 의미하는지 알 수가 없게 된다  
이러한 불편함을 줄이기 위해 사용하는 버전 체계를 시멘틱 버전(유의적 버전)이라고 한다  

## **O.O.O**
첫번째 – 배포를 시작할 때 1부터 시작  
두번째 – 기능 혹은 모듈을 추가할 때 마다 1씩 추가  
세번째 – 기능 혹은 모듈의 오류가 발생하였을 때 1씩 추가  

앞에 것이 증가가 되면 뒤에는 0으로 초기화 된다  
즉 배포. 모듈(기능). 오류 형태이다.

주석을 많이 달아 주는 것 좋다 특히 협업을 진행할 경우

### **로컬 버전 관리 시스템(RCS)**
기본적인 동작 방식은 각 리비전들 간의 패치 세트(patch set)라고 하는 데이터의 차이점들을 특별한 형식의 파일에 저장, 특정 시점의 파일 내용을 보고 싶을 때 하당 시점까지의 패치들을 모두 더하여 파일을 만들어내는 것이다.

### **분산 버전 관리 시스템 (Distributed Version Control System; DVCS)**
Git, Mecurial, Bazaar, Darcs 등 DVCS에서는 클라이언트가 파일들의 마지막 스냅샷을 가져오는 대신 저장소(repository)를 통째로 복제한다  
따라서 서버에 문자가 생겨도 어느 클라이언트 든 복제된 저장소를 다시 서버로 복사하면 서버가 복구된다 체크아웃(checkout)을 할 때마다 전체 백업이 일어나는 셈이다


