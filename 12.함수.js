// 모던 자바스크립트 Deep Dive : 12_함수

// 함수는 일련의 과정을 문으로 구현, 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.
// 프로그래밍 언어의 함수도 입력을 받아서 출력을 내보낸다.
// 함수 내부로 전달받는 변수를 매개변수, 인수, 반환값이라 한다.
// 함수는 값이다(중요!!), 여러 개 존재할 수 있음, 구별을 위해 식별자인 함수 이름을 사용

// 함수 정의를 통해 생성
// 함수 선언문
function add(x, y){
    return x + y;
}
// 인수를 매개변수를 통해 함수에 전달, 실행을 명시적으로 지시 => 함수 호출
var result = add(2, 5);
console.log(result); // 함수호출
// 함수를 사용하는 이유_
// 필요할 때 여러 번 호출할 수 있다. 이것은 재사용이 가능하다는 뜻.
// 유지보수의 편의성을 높이고, 코드의 신뢰성을 높이며, 코드의 가독성을 향상시킨다.

// 함수 리터럴_
// 객체 타입의 값이다.
// 리터럴은 function, 함수 이름, 매개 변수 목록, 함수 몸체로 구성.
// 변수에 함수 리터럴을 할당
var f = function add(x, y){
    return x + y;
};
// 리터럴의 구성요소 -
// 함수 이름 : 식별자, 네이밍 규칙 준수, 몸체 내에서만 참조, 이름 생략 가능(익명함수)
// 매개변수 : 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분, 호출 시 인수가 순서대로 할당, 순서에 의미!
//         몸체 내에서 변수와 동일하게 취급.
// 함수 몸체 : 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록.
//           함수 호출에 의해 실행.
// 함수는 객체다. 일반 객체는 호출할 수 없지만, 함수는 호출이 가능하다.

// 함수 정의_
// 함수 정의란, 호출 이전 인수를 전달받을 매개변수와 실행할 문들 그리고 반환할 값을 지정하는 것.
// 정의된 함수는 평가되어 함수 객체가 된다.

// 함수 선언문_
function add (x, y){
    return x + y;
}
// 함수 참조
// console.dir은 console.log 와 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); // f add(x, y)
// 함수 호출
console.log(add(2, 5));
// 함수 선언문은 함수 이름을 생략할 수 없다.
function (x, y){ // 생략 불가
    return x + y;
}
// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다. (아래 예제)
var add = function add(x, y){
    return x + y;
};
// 함수 호출
console.log(add(2, 5));
// 1) 함수 선언문으로 해성하는 경우, 2) 함수 리터럴 표현식으로 해석하는 경우.
// 기명 함수 리터럴은 함수 선언문 또는 리터럴 표현식으로 해석될 가능성
// 코드의 문맥에 따라 해석이 달라진다.
// {} 이 단독으로 존재하면 블록문으로 해석.
// {} 이 값으로 평가되어야 할 문맥(할당 연산자의 우변)에서 피연산자로 사용되면 {}을 객체 리터럴로 해석.
// 기명 함수 리터럴도 중의적인 코드로 문맥에 따라 해석이 달라질 수 있다.
// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {console.log('foo');}
foo(); // foo
// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() {console.log('bar');});
bar(); // ReferenceError : bar is not defined.
// 기명 함수 리터럴은 코드의 문맥에 따라 함수 선언문 또는 함수 리터럴 표현식으로 해석.
// 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
var add = function add(x, y){
    return x + y;
}
console.log(add(3, 5));
// 함수 이름으로 호출하는 것이 아니라 객체를 가리키는 식별자로 호출한다.
// 암묵적으로 생성한 식별자 add

// 함수 표현식_
// 함수는 일급 개체(매우 중요한 개념인듯, 자주 나온다. 이쯤되면 외워야할 듯?)
// 함수 호출 시에는 객체를 가리키는 식별자를 사용! (함수 이름X)
var add = function (x, y) {
    return = x + y;
};
console.log(add(2, 5));
// 기명 함수 표현식
var add = function foo (x, y) {
    return x + y;
};
// 함수 객체를 가리키는 식별자로 호출
console.log(add(10, 15));
// 함수 이름으로 호출하면 ReferenceError 발생.
console.log(foo(10, 15)); // undefiend => 함수 이름으로 호출하면 안됨.

// 12.4.3 함수 생성 시점과 함수 호이스팅
// 함수 참조
console.dir(add); // f add(x, y)
console.dir(sub); // undefined
// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError : sub is not function
// 함수 선언문
function add(x, y){
    return x + y;
}
// 함수 표현식
var sub = function (x, y){
return x + y;
};
// 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
// 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성시점이 다르기 때문이다.
// 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅(function hoisting)이라고 한다.
// 함수 선언문으로 정의한 함수를 함수 선언문 이전에 호출하면 함수 호이스팅에 의해 함수 호출이 가능.
// 변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.
// 함수 표현식으로 함수를 정의하면 함수 호이스팅에 의해 발생하는 것이 아니라 변수 호이스팅이 발생한다.
// 함수 선언문 대신 함수 표현식을 사용할 것.

// var add = new Function('x' + 'y', 'return x + y');
// console.log(add(2, 5)); 일반적인 함수 생성자가 아님. 동작하지 않음.

// var add1 = (function(){
//    var a = 10;
//    return function (x, y) {
//        return x + y + a;
//    };
//}());

//console.log(add1(1, 2));

// 함수 선언문
function add(x, y) {
    return x + y;
}
// 함수 호출
// 인수 1과 2가 매개변수 x 와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

function changeVal(primitive, ojb) {
    primitive += 100;
    ojb.name = 'Jeon';
}

var num = 100;
var person = { name: 'Lee'};

console.log(num);
console.log(person);

changeVal(num, person);
console.log(num);
console.log(person);

// 생성자 함수
// 생성자 함수는 객체(를 생성하는 함수를 말한다.
var add = new Function('x', 'y', 'return x + y');
console.log(add(2, 5));

// 생성자 함수로 함수를 생성하는 방식은 일반적이지 않고, 바람직하지도 않다.
// 생성자 함수는 잘 사용하지는 않는 듯 하다.(지운's 추론)
// 함수로 생성한 함수는 클로저를 생성하지 않는 등, 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.
// 공부할 필요가 없는 듯 하다.

// 화살표 함수
// ES6에 도입된 함수이다.
// function 키워드 대신 화살표 => 를 사용해 간략한 방법으로 함수를 선언할 수 있다.
// 항상 익명 함수로 정의한다.
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7

// 화살표 함수는 기존의 함수 선언문 또는 함수 표현식을 완전히 대체하기 위해 디자인된 것은 아니다.
// 기존의 함수보다 표현만 간략히! 그렇다는 것은 간략하게 표현할 수 있는 함수에만 적용할 수 있다는 얘기인듯 하다.
// 생성자 함수로 사용할 수 없다.
// this 바인딩 방식이 다르고, prototype 프로퍼티가 없으며, arguments 객체를 생성하지 않는다.

// 12.5 함수호출
// 함수호출은 함수를 가리키는 식별자와 함수 호출 연산자로 호출한다.
// 연산자 내에는 0개 이상의 인수를 쉼표로 구분해서 나열한다.

// 12.5.1 매개변수와 인수
// 함수 선언문
function add(x, y){
    return x + y; 
}
// 함수 호출
// 인수 1과 2가 매개변수에 순서대로 할당되고, 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

// 매개변수는 함수를 정의할 때 선언, 몸체 내부에서 변수와 동일 취급.
// 함수 호출 => 암묵적으로 매개변수 생성 => undefined로 초기화 => 인수 순서대로 할당 => 값 반환.
// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.(외부에서는 참조 X)
function add(x, y){
    console.log(x, y); // 2, 5
    return x + y;
}
add(2, 5);
// add 함수의 배개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // Reference Error: x is not defined

// 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만, 그렇지 않는 경우에도 에러를 발생하지 않는다.
// 인수가 부족해서 인수가 할당하지 않는 매개변수의 값은 undefined
function add(x, y){
    return x + y;
}
console.log(add(2)); // NaN

// 매개변수 y에 인수 전달X => 매개변수 y는 undefined
// 매개변수보다 인수가 더 많은 경우에는 초과된 인수는 무시된다.
function add(x, y){
    return x + y;
}
console.log(add(2, 5, 10)); // 7
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관되므로, 버려지는 것은 아니다.
function add(x , y){
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]
    return x + y;
}
add(2, 5, 10);

// 12.5.2 인수 확인
function add(x, y){
    return x + y;
}
console.log(add(2)); // NaN
console.log(add('a', 'b')); // 'ab'

// 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// 함수는 매개변수의 타입을 사전에 지정할 수 없다.
// 함수를 정의할 때, 적절한 인수가 전달되었는지 확인할 필요가 있다.

function add(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x + y;
}
console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.

// arguments 객체를 통해 인수 개수를 확인할 수도 있다.

function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

// 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다.

function add(a = 0, b = 0, c = 0){
    return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());

// 12.5.3 매개변수의 최대 개수
// 매개변수의 최대 개수는 명시적으로 제한하고 있지 않다.
// 매개변수는 순서에 의미가 있으므로, 매개변수가 많아지면 함수의 사용법을 이해하기 어렵고, 실수를 발생시킬 가능성을 높인다.
// 개수나 순서가 변경되면 호출 방법도 바뀐다. => 코드 전체가 영향
// 이상적인 매개변수는 0개
// 이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.
// 매개변수는 최대 3개 이상 넘지 말것!
// 만약 그 이상의 매개변수가 필요하다면 한의 매개변수를 선언하고 객체를 인수로 전달하는 것이 유리.
// 객체를 인수로 사용하는 경우 프로퍼티 값만 정확히 지정하면 매개변수의 순서를 신경쓰지 않아도 된다.

// 12.5.4 반환문
// 함수는 return 키워드와 표현식(반환값)으로 이루어진 반환문을 사용하여 결과를 외부로 반환할 수 있다.

function multiply(x, y) {
    return x * y; // 반환문
}

// 함수 호출은 반환값으로 평가된다.
let result = multiply(3, 5);
console.log(result); // 15

// 함수 호출은 표현식이다.
// 반환문의 역할 :
// 1. 실행을 중단하고 함수 몸체를 빠져나간다.
//    반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
function multiply(x, y) {
    return x * y;
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log('실행되지 않는다.');
}
console.log(multiply(3, 5)); // 15

// 2. return 키워드 뒤에 오는 표현식을 평가해 반환한다.
function foo(){
    return;
}
console.log(foo()); // undefined

// return 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.
// 반환문은 생략할 수 있다. 

function foo(){
    // 반환문을 생략하면 암묵적으로 undefined가 된다.
}
console.log(foo()); // undefined

// return 키워드와 반환값으로 사용할 표현식 사이에 줄바꿈이 있으면 의도치 않은 결과 초래.

function multiply(x, y){
    // return 키워드와 반환값 사이에 줄바꿈이 있으면
   return // 세미콜론 자동 삽입 기능(ASI)에 의해 세미클론이 추가된다.
   x * y; // 무시된다.
}
console.log(multiply(3, 5)); // undefined

// 반환값은 함수 몸체 내부에서만 사용 가능
// 전역에서 사용하면 에러 발생.

// 12.6 참조(Reference)에 의한 전달과 외부 상태의 변경
// 원시 값은 값에 의한 전달, 객체는 참조에 의한 전달 방식으로 동작한다.
// 매개변수도 함수 몸체 내부에서는 변수와 동일하게 취급되므로 
// 매개변수 또한 타입에 따라 값에 의한 전달, 참조에 의한 전달 방식을 그대로 따른다.
// 동작 방식은 값에 의한 전달 = 참조에 의한 전달로 동일하다.

// 매개변수 primitive 는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Jeon';
}

var num = 100;
var person = { name: 'Lee'};

console.log(num); // 100
console.log(person); // { name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고, 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);
// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100
// 객체는 원본이 훼손된다.
console.log(person); // { name: 'Lee'}

// 함수가 외부 상태를 변경하면 상태 변화를 추적하기 어려워진다. => 코드의 복잡성 UP, 가독성 Down!

// 12.7 다양한 함수의 형태
// 12.7.1 즉시 실행 함수_
// 함수 정의와 동시에 실행하는 함수.
// 단 한 번만 호출되며 다시 호출할 수 없다.

// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 즉시 실행 함수는 익명 함수를 사용하는 것이 일반적이다.
// 기명 즉시 실행 함수도 사용 가능하지만, 기명 함수는 선언문이 아니라 함수 리터럴로 평가되며
// 함수 이름은 함수 몸체에서만 참조할 수 있는 식별자이므로 다시 호출할 수 없다.

// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}());

foo(); // foo is not defined

// 즉시 실행 함수는 반드시 그룹 연산자로 감싸야 한다.
// 이유는 함수 리터럴을 평가해서 함수 객체를 생성하기 위해서이다.
 (function(){  
     //...
}());

// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
let res = (function(){
    let a = 3;
    let b = 5;
    return a * b;
}());
console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function(a, b){
    return a * b;
}(3, 5));
console.log(res); // 15

// 즉시 실행 함수 내에 코드를 모아 두면 변수나 함수 이름의 충돌을 방지할 수 있다.

// 12.7.2 재귀 함수_
// 함수가 자기 자신을 호출하는 것을 재귀 호출, 재귀 함수는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.
// 대부분 for 문과 while 문으로 구현 가능하다.
// 나중에 시간될 때 공부해보자. 지금은 패스!

// 12.7.3 중첨 함수_
// 함수 내부에 정의 된 함수를 중첩 한수, 내부 함수라 한다.
// 중첩 함수를 포함한 함수는 외부 함수로 표현.
// 중첩 함수는 외부 함수 내부에서만 호출할 수 있다.
// 외부 함수를 돋는 헬퍼 함수의 역할을 한다.

// 12.7.4 콜백 함수_

// n 만큼 어떤 일을 반복한다.
function repeat(n){
    // i를 출력한다.
    for(let i = 0; i < n; i++) console.log(i);
}
repeat(5); // 0 1 2 3 4

// repeat 함수는 매개변수를 통해 전달받은 숫자만큼 반복하며 console.log(i)를 호출한다.
// repeat 함수는 console.log(i)에 강하게 의존하고 있어서 다른 일을 할 수 없다.
// 만약 repeat 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

// n 만큼 어떤 일을 반복한다.
function repeat2(n){
    for(let i = 0; i < n; i++) {
        // i가 홀수일 때만 출력한다.
        if (i % 2) console.log(i);
    }
}
repeat2(5); // 1 3

// 위 예제의 함수들은 반복하는 일은 변하지 않고 공통적으로 수행하지만 반복하면서 하는 일의 내용은 다르다.
// 함수의 일부분만 다르기 때문에 매번 함수를 새롭게 정의해야 한다.

// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

let logAll = function (i) {
    console.log(i); // 0 1 2 3 4 
}

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll);

let logOdds = function (i) {
    if (i % 2) console.log(i);
};

repeat(5, logOdds); // 1 3

// repeat 함수는 경우에 따라 변경되는 일을 함수 f로 추상화했고 이를 외부에서 전달받는다.
// 외부에서 로직의 일부분을 함수로 전달받아 수행하므로 유연한 구조를 갖는다.
// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 하며,
// 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수라고 한다.
// 중첩함수는 고정되어 있어서 교체하기 곤란하지만, 콜백 함수는 외부에서 고차 함수 내부로
// 주입하기 때문에 자유롭게 교체할 수 있는 장점이 있다.
// 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
// 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
// 콜백 함수는 고차 함수에 의해 호출되며, 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.