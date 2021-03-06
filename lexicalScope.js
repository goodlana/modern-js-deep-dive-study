//391 page
const x=1;

function foo() {
    const x=10;

    bar();
}

function bar() {
    console.log(x);
}

foo(); // 1
bar(); // 1

/*
foo 함수와 bar 함수는 모두 함수 선언문으로 정의되었다. 
따라서 foo 함수와 bar함수는 모두 전역코드가 평가되는 시점에 평가되어 함수객체를 생성하고
전역 객체 window의 메서드가 된다.
*/