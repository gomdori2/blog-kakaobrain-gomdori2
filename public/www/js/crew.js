window.addEventListener("load", () => {
  // 할일
  // 호이스팅으로 인해 맨위에다 뒀다.
  // html 에 내용 출력하기
  const makeHtml = (_result) => {
    let allTag = "";
    let tags = document.querySelector("#crew");

    // for 하면 매번 돌기때문에 변수에 줘서 for문 안에 돌리지말자.
    // const total = _result.length;
    // for (let i = 0; i < total; i++) {
    //   let obj = _result[i];
    // let tag = `<a href="${obj.link}" class="list-box">
    //   <div class="list-box-img br-20" style="background: url('./images/${obj.imgpath}') no-repeat center; background-size: cover;"></div>
    //   <div class="list-box-cate">
    //     <img src="./images/icon/${obj.icon}" alt="${obj.category}">
    //     <span style="color:${obj.txtcolor};">${obj.category}</span>
    //   </div>
    //   <p class="list-box-title">${obj.title}</p>
    //   <span class="lsit-box-day">${obj.day}</span>
    // </a>`;
    //   allTag += tag;
    // }

    // 추천합니다. (조건은 대상이 배열인 경우)
    // 기본구조 _result.forEach((obj, 번호, 원본) =>{});
    _result.forEach((item) => {
      let tag = `<a href="${item.link}" class="list-box">
      <div class="list-box-img br-20" style="background: url('./images/${item.imgpath}') no-repeat center; background-size: cover;"></div>
      <div class="list-box-cate">
        <img src="./images/icon/${item.icon}" alt="${item.category}">
        <span style="color:${item.txtcolor};">${item.category}</span>
      </div>
      <p class="list-box-title">${item.title}</p>
      <span class="lsit-box-day">${item.day}</span>
    </a>`;
      allTag += tag;
    });

    tags.innerHTML = allTag;
  };

  const btWrap = document.querySelector(".bt-wrap");
  // 일반 함수는 this가 타이핑이 된 곳을 가르킨다.
  btWrap.addEventListener("click", function () {
    console.log(this);
  });
  // 화살표 함수는 this 가 window를 가리킨다.
  btWrap.addEventListener("click", () => {
    console.log(this);
  });
  const dataUrl = "./apis/crew.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      makeHtml(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
