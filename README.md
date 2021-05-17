## Boost Course - JavaScript

[자바스크립트의 시작 - 이고잉](https://www.boostcourse.org/cs124/joinLectures/52258)

___
## 웹과 자바스크립트

### 01. 수업소개
- 자바스크립트 기초
### 02. 수업의 목적
- day and night button click 
  - `document.querySelector('body').style.backgroundColor='black'`

- **생각해 보기**
  1) night 버튼을 눌렀을 떄 배경이 검은 색이 아닌 회색으로  바꾸려면 어떻개 해야 할까요?
  
  ```
  <input type="button" value="day" onclick="gray_click();">
    ...
  fucntion grayButton () {
    document.querySelector('body').style.backgroundColor='gray'
  }
  ```

### 03. HTML과 JS 의 만남 : script 태그
- html 과 자스바스립트 코드의 차이점
  - 자스는 동적이다. 
  ```
  <body>
    <h1> 1 + 2 </h1>    // 1 + 2 있는 그대로 표현 (html : 정적 언어)
    <script>
      document.write(2+3);   // 5  (js : 동적 언어)
    </script>
  </body>
  ```
- 자바스크립트는 동적이므로 계산도 가능하다. 제어 가능... 등등..


### 04. HTML과 JS 의 만남 : 이벤트
- display : alert box
  - `alert('Hello! it is an Alert Box');`
- onclick 속성 값으로 반드시 자바스크립트와 이어야함. 온클릭 위치 태그에 이벤트가 발생하면(클릭 했을떄) 자스가 해석하여 웹브라우져가 동작을 함!
- 다양한 이벤트가 있음. input type="text"  etc
- 자바스크립트 event attribute 을 검색하여 필요한 속성을 동작 시킨다.
- onlcick, onchange etc 이벤트 여러가지가 있다.
- **생각해 보기**
  1) 버튼 위에 마우스를 올리면 경고창이 뜨는 웹 사이트를 만드는 개발자가 되었다고 상상해 봅시다. 어떤 이벤트를 사용하면 좋을지 알아보세요. (힌트: javascript mouseover event라고 검색해보세요!)
  - `<input type="text" onmouseover="alert('mouseover alert!')">`

### 05. HTML과 JS 의 만남 :  콘솔
- 'abcde'.length   // 문자열의  길이 반환! : 5
- alert('abcd'.length)  // 경고창으로 문자열 길이 반환

### 06. 데이터 타입(문자열과 숫자)
- 6개의 데이터 타입(Number, String, Boolean, Null, Undefined, Symbol) and Object

- ex) String 표준 내장 객체
- `'abc'.toUpperCase();   // 'ABC'`
- `'abc'.indexOf('b');  // 1`
- `'   abc  '.trim();    // 'abc'`

### 07. 변수와 대입 연산자
```
let name = 'Jayden'
alert(`Hello ${name}`)
```
### 08. 웹브라우저의 제어
- **생각해보기**
  1) 직접 body 태그의 style 속성을 바꾸어 배경 색은 파란색, 글자 색은 회색으로 만들어 봅시다.
- `<body style="background-color:blue; color:grey">`

### 09. CSS 기초 (style 속성)
- **생각해보기**
  1) CSS를 이용해서 글자 크기를 키워봅시다. (힌트 : CSS property font size 라고 검색해 보세요!)
- `<h2 style="font-size: 120px; color:powderblue; background-color: violet;">JavaScript</h2>`

### 10. CSS기초 (style 태그)
- div (블록)  vs span  (인라인)    : 둘다 의미 없이 묶어주는 역활

### 11. CSS기초 (선택자)
- 우선순위 id(#) > class(.) > element (tag)
- **생각해보기**
  1) 다음과 같은 코드가 있을 때, Javascript라는 글자에는 어떤 색깔이 나타날까요? 글자의 크기는 얼마가 될까요?
  ```
  <style>
    span {
      color: blue;
    }
    .hello {
      font-size: 12px;
      color: red;
    }
    #bye {
      font-size: 13px;
    }
  </style>
  
  <span id="bye" class="hello">Javascript</span>
  ```
- 크기 : id #bye 13px
- 색상 : class .hello red

### 12.제어할 태그 선택하기
- **생각해보기**
  1) night 버튼 위에 마우스를 올렸을 때, 배경 색이 회색으로 바뀌도록 만들어봅시다.
```
<input type='button' ... onmouseover='night_btn()'>
...
function night_btn() {
  document.querySelector('body').style.backgroundColor = 'grey'
}
```
___

## JavaScript 제어문

### 13. 프로그램, 프로그래밍, 프로그래머
- **생각해보기**
 1) 이번 강의에서 HTML과는 달리 Javascript는 컴퓨터 프로그래밍 언어라는 것을 배웠습니다. 오늘 배운 내용을 바탕으로 HTML은 왜 프로그래밍 언어가 아닌지 스스로에게 설명해봅시다.
  - html 은 시간 순서에 의해 동작하는 것이 아니고, 정적인 묘사의 그친 언어이기 떄문.

### 14. 조건문 예고

### 15. 비교연산자와 불리언 (Comparison Operator & Boolean)

```
1 === 1;
&lt; 가 < 의미   (less than)
&gt; 가 > 의미   (greater than)
```

### 16. 조건문 (Conditional)
- if else 

**생각해보기**
 1) 다음 코드를 실행했을떄 결과는?
```
<script>
  document.write('1')
  if(true) {
    document.write('2')
  }
  else {
    document.write('3')
  }
  if(false) {
    document.write('4')
  }
  else {
    document.write('5')
  }
  document.write('6')
</script>
```
```
# result :
1
2
5
6
```
### 17. 조건문의 활용
- tag  속 value="값" 을 가져오는 방법
  - `var night_day = document.getElementById(id).value`

```
<input id="night_day" type="button" value="night" onclick="night_day()">
...
<script>
function night_day () {
      var night_day = document.getElementById('night_day').value;
      console.log(night_day)
      if ( night_day === 'night' ) {
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('body').style.color = 'yellow'
        document.querySelector('#night_day').value = 'day'
      } else {
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('body').style.color = 'black'
        document.querySelector('#night_day').value = 'night'
      }
    }
```

### 18. 리팩토링(중복의 제거)
