## <b>GitHUb VsCode에 연결하기</b>

### <b>소스제어를 위한 준비</b>

git config --global user.name {이름}<br/>
git config --global user.email {깃허브 이메일}

설정후에 파일 publish 버튼을 누르면 인터넷 창에서 github로그인을 할 수 있도록 해준다.

로그인을 마친 후 Vscode에서 commit을 해주면 github 페이지에 생성된다.

### <b>BRANCH</b>

새로운 레포지토리를 생성하면 main으로 branch가 생성되어있음<br/>
<b>Master branch에서 main branch로 변경된 이유</b><br/>
인종차별적 요소나 주종 관계를 담고 있는 용어를 프로젝트에서 제거하기로 결정하면서 업계 전반에 이런 부분을 제거하는 움직임이 일어남

### <b>컴포넌트의 종류</b>

#### <b>클래스형 컴포넌트</b>

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

#### <b> 함수형 컴포넌트 </b>

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

### <b>JSON (JavaScript Object Notation)</b>

자바스크립트에서 오브젝트를 선언하는 방법
Key와 Key value로 이루어진 스타일의 자료형

### <b>자바스크립트 함수의 종류</b>

#### <b>function statement형</b>

일반적인 함수 형태

```javascript
function sum(a, b) {
  return a + b;
}
```

#### <b>arrow function expression형</b>

```javascript
const multiply = (a, b) => {
  return a + b;
};
```
