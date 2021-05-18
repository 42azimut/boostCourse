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
- 핵심단어
  - 리팩토링
  - this  키워드
  - 변수

- input tag 안에서 this.value === 'night' 사용

- 스크립트 함수안에서 this.value 아직모르겠음! 변수에 담아서 사용!

### 19. 반복문 예고

### 20. 배열 Array
- length, push
```
let fruites = ['apple', 'banana', 'melon'];
for (var i = 0; i < fruites.length(); i++) {
  document.write('fruites[i]')
}
```
```
 array_co = [];
    for (var i=0; i < coworkers.length; i++) {
      //document.write(coworkers[i] + ' ');
      array_co.push(coworkers[i])
      //document.write('<br>')
    }
    document.write(array_co)
```

- array method : map(), reduce(), pop() ... etc

**생각해보기**
1) 다음과 같은 코드를 실행했을 때 화면에 어떻게 출력될지 생각해보세요.
2) 배열에서 어떤 값을 삭제하기 위해서는 어떤 코드를 사용하면 될까요? (힌트: Javascript array remove value라고 검색해보세요!)


```
var animals = ["ant", "bee"];
animals.push("camel");   // ["ant", "bee", "camel"]
document.write(animals[1]);   // bee
```
```    
array_co.splice(1,1)   //index 값 범위 지정!
```

### 21. 반복문
- while, 조건문
- while(true) {       // true인 동안 {반복실행문}
  반복실행문;
}
```
<ul>
    <script>
      arr = ['jay', 'dust', 'kay', 'twice', 'itzy'];
      var i = 0;
      while(i < arr.length) {
        document.write(`<li>${arr[i]}</li>`);
        i++;
      }
    </script>
  </ul>
```
**생각해보기**
1) 다음 코드의 실행 결과는 무엇일까요?
```
var i = 0;
while (i < 3) {
  i = i + 2;
}
document.write(i);   //반복문 범위 밖!!!
// 4
```
### 22. 배열과 반복문
- 응용해 보기 : 구글 검색쿼리주소와 반복문을 사용해서 하이퍼링크 만들기
```
document.write(`<li><a href="http://google.com/search?q=${coworkers[i]}">${coworkers[i]}</a></li>`);
```

**생각해보기**
1) 반복문과 배열을 적절히 활용해서 fruits 배열을 다음과 같이 숫자와 함께 출력하려면 어떻게 해야할지 생각해보세요.
  ```
  1. apple
  2. banana
  3. coconut
  ```
  ```
<script>
    var fruites = ['apple', 'banana', 'coconut'];
    var j = 0;
    while(j < fruites.length) {
      document.write(`${j+1}. ${fruites[j]}<br>`)
      j++;
    }
  </script>  
  ```

### 23.  배열과 반복문의 활용
- querySeletor('a') :  a태그 한개만 가져온다!
- querySelectorAll('a') :   
- var alist = document.querySelectorAll('a');  //a태그 모두 가져오기!

**생각해보기**
1) 이번 강의에서 배운 코드를 약간 수정해서 첫 번째 하이퍼링크를 제외한 나머지 세 개의 하이퍼링크만 색깔이 바뀌도록 만들어보세요.
```
# 0번째 링크 핑크 나머지 위에 사항 변경!
  while(i < alist.length){
    if (i === 0) {
      alist[i].style.color = 'pink'    
      } else {
        alist[i].style.color = 'powderblue'    
      }
      i++;
  }
```

___
## JavaScript 함수
### 24. 함수 예고

### 25. 함수

### 26. 함수 - 매개변수와 인자 (paramete & argumnet)
**생각해보기**
1) 다음 코드의 실행 결과는 무엇일까요?
```
function hello(i, j, k) {
  document.write(i + j - k);
}
hello(2, 3, 1);
// 4
```

### 27. 함수 - 리턴
```
<script>
    function sum(left, right) {
      return left+right;
    }
    document.write(sum(2, 3)+'<br>')
    document.write('<div style="color:red">'+sum(12, 3)+'</div>')
    document.write(`<div style="font-size:3rem">${sum(22, 13)}</div>`)
  </script>
```

### 28. 함수 활용
```
<input id="night_day" type="button" value="night" onclick="
  var tagget = document.querySelector('body');
  if (this.value = 'night')   //  여기서 this 는 input 태그내에서 사용!
```
___

## 자바스크립트 객체

### 29. 객체 예고
**생각해보기**
1) 다음 코드에서 객체와 메소드를 찾으시오
```
var fruits = ["apple", "banana"];   //객체 "배열"인데 뭐지!: fruits
var avengers = {    //  어벤져스 배열!
  Ironman: 'Tony',
  blackwidow: 'Scalett Johansson',
}
fruits.push("coconut");  // 메소드 : push()
```

### 30. 객체 (쓰기와 읽기)
- 띄어 쓰기 있는 데이터 : `coworkers['data scientist'] = 'Thor';`

**생각해보기**
1) countries라는 이름의 빈 객체를 만들고, asia라는 이름을 가진 korea라는 값과, europe이라는 이름을 가진 england라는 값을 추가해봅시다.
```
countries = {
  asia: 'Korea',
  europe: 'England',
}
```

### 31. 객체 순회(iteration)
**생각해보기**
1) 지난 강의의 <생각해보기>에서 만들었던 countries라는 객체에서, 모든 객체의 이름과 값을 한 줄씩 출력하는 코드를 만들어 봅시다.
```
for (let key in countries) {
  document.write(key, ' : ', countries[key], `<br>`)
}
```

### 32. 객체 (프로퍼티와 메소드) proeprty & method
- 객체에는 다양한 것들을 담을수 있다. 심시저 함수도 가능! 
- 그 객체에 새로운 함수는 즉, **"메소드"** 라 한다.
- this 사용 가능하다. 객체의 변수가 바뀌면 함수안에 그 변수르 수정해야 하기 떄문에. 이떄  this를 사용한다.
  - 객체의 변수명대신에 이 메소드가 쓰인 객체를 가리키는 this를 사용해 주면 된다.
  - ```
    coworkers.showAll = function() {
      for (var key in this) {
        document.write(key + ' : ' + this[key] + '<br>');
      }
    }
    ```
- property : 객체에 해당하는 변수 위 예제 countries  에서 asia, europe 가 프로퍼티!
- method : 객체에 해당하느 함수를 메소드!
**생각해보기**
1) 조건문을 사용해서 key가 programmer일 때만 출력하는 메소드 printProgrammer()을 만들어 봅시다.
```
    coworkers.printProgrammer = function() {
      for (let key in this) {
        if (key === 'programmer')
          document.write(key + ' : ' + this[key] + `<br>`)
      }
    }
    coworkers.printProgrammer();
```
___
## 자바스크립트 활용
### 34. 파일로 쪼개서 정리 정돈하기
**생각해보기**
1) 여러 js 파일을 가져오고 싶다면 어떻게 하면 좋을지 알아봅시다. (힌트: html include multiple js files 라고 검색해보세요!)
```
<script src="colors.js"></script>
<script src="fonts.js"></script>
```

### 35. 라이브러리와 프레임워크
- jQuery 라이브러리
- `$('a').css("color","powderblue");`

**생각해보기**
1) jQuery를 직접 자신의 HTML 파일에 추가해보고, 이를 이용해서 모든 h1 태그의 글자 크기를 바꾸는 코드를 작성해 봅시다.
```
// 이벤트 발생시 h1폰트 사이즈 변경! 
var fontSize = {
  h1_Size: function(size) {
    $('h1').css('font-size', size)
  }
}
```

### 36. UI vs API