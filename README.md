# 201930232 전주성 23-React1 
## React1 강의 정리 Repository
#### 강의 정리
## **4주차 (2023.03.23)**
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


