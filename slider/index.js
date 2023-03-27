let btnList = document.querySelectorAll(".btns button");
let slideList = document.querySelector(".slideList");
let btnSlideList = document.querySelectorAll(".btnSlide");
// 각 버튼 클릭시 얼럿창에 번호 출력
btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    // alert(`${idx + 1}번 버튼 클릭!`);
    // 슬라이드 리스트 이동 시키기
    index = idx;
    slideList.style.transform = `translate(${idx * -100}%)`;
  });
});

let index = 0;
// 이전 버튼 1씩 감소, 다음 버튼 1씩 증가
/*btnSlideList[0].addEventListener("click", () => {
  alert(--index);
});

btnSlideList[1].addEventListener("click", () => {
  alert(++index);
});*/

btnSlideList.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("prev")) {
      // 단축 평가. 조건이 true일 때만 뒤에 평가(실행).
      index > 0 && --index;
    } else if (btn.classList.contains("next")) {
      index < 2 && ++index;
    }

    slideList.style.transform = `translate(${index * -100}%)`;
  });
});
