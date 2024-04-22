window.addEventListener("load", () => {
  // 할일
  const dataUrl = "./apis/news.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      // 할일 작성
      // 전체 html 저장용 일반 변수
      let allTag = "";
      // #은 hash태그
      const news = document.querySelector("#news");

      // for (let i = 0; i < result.length; i++) {
      //   const obj = result[i];

      //   const tag = `<a href="${obj.link}" class="list-box">
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
      result.forEach((item) => {
        const tag = `<a href="${item.link}" class="list-box">
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

      news.innerHTML = allTag;
    })
    .catch((error) => {
      console.log(error);
    });
});
