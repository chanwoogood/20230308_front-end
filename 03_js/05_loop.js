/*
    반복문
       - 코드를 반복해서 실행한다.
        for(초기값;조건;증감식)
          - 조건이 true라면 실행.
          - 초기값은 조건식에 사용할 값을 초기화한다.
          - 조건식은 실행하고자 하는 횟수와 값을 비교한다.
          - 증감식은 매 반복이 끝날 때마다 값을 증가시켜 언젠가 반복문이 종료될 수 있게 한다.
            => 증감식을 제대로 작성하지 않으면 무한 반복에 빠진다.
       */
var num = 0;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

// 구구단 2단 출력하기
console.log("구구단 2단");
for (var i = 1; i <= 9; i++) {
  console.log("2 * " + i + "=", 2 * i);
}

console.log("구구단 3단");
for (var i = 1; i <= 9; i++) {
  console.log("3 * " + i + "=", 3 * i);
}

console.log("구구단 4단");
for (var i = 1; i <= 9; i++) {
  console.log("4 * " + i + "=", 4 * i);
}

console.log("구구단 5단");
for (var i = 1; i <= 9; i++) {
  console.log("5 * " + i + "=", 5 * i);
}

console.log("구구단 6단");
for (var i = 1; i <= 9; i++) {
  console.log("6 * " + i + "=", 6 * i);
}

console.log("구구단 7단");
for (var i = 1; i <= 9; i++) {
  console.log("7 * " + i + "=", 7 * i);
}

console.log("구구단 8단");
for (var i = 1; i <= 9; i++) {
  console.log("8 * " + i + "=", 8 * i);
}

console.log("구구단 9단");
for (var i = 1; i <= 9; i++) {
  console.log("9 * " + i + "=", 9 * i);
}

//for문 중첩
/*for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 3; j++) {
    console.log("중첩 for문 실행");
  }
}
*/

for (var i = 2; i <= 9; i++) {
  console.log(i + "단 시작");
  for (var j = 1; j <= 9; j++) {
    console.log(i + " * " + j + " = ", i * j);
  }
}

/*
    while(조건식)
       - 조건식이 false가 될 때까지 반복한다.
         1. 외부 변수를 변경하는 식으로 종료 조건을 만족한다.
         2. break문을 통해서 종료할 수 있다.
         3. continue는 해당 회차만 건너뛴다.
       - 반복횟수가 불명확할 때 주로 사용한다.
*/

var age = 30;
while (true) {
  if (age === 50) {
    age++;
    continue;
  }
  console.log(age++ + "세가 되었습니다.");
  if (age >= 100) {
    console.log("죽었습니다.");
    break;
  }
}

// while문으로 0 ~ 100 사이의 짝수만 출력하기
var start = 0;
while (start <= 100) {
  if (start % 2 === 0) {
    console.log(start);
  }
  start++;
}

while (start <= 1000) {
  start++;
  if (start % 2 !== 0) continue;
  console.log(start);
}

var num02 = 0;

/*    시작부터 num02가 0보다 크지 않기 때문에 시작하자 마자 종료.
while {
  console.log(num02);
  num02++;
  if (num02 > 100) break;
} while (num02 > 0);
*/

do {
  console.log(num02);
  num02++;
  if (num02 > 100) break;
} while (num02 > 0);

// do~while : 무조건 한번은 실행을 한다. => 조건과 관계없이 한번은 실행.

/*while (start <= 1000){
    start++;
    if (start 3|| 6|| 9) continue;
    console.log(짝!); 
}*/
