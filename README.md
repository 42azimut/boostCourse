## Boost Course - JavaScript

[자바스크립트의 시작 - 이고잉](https://www.boostcourse.org/cs124/joinLectures/52258)

### 01. 수업소개

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
  - 'abcde'.length   // 문자열의  길이 반환! 5
  - alert('abcd'.length)  // 경고창으로 문자열 길이 반환