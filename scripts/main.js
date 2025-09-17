const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image.jpg") {
    myImage.setAttribute("src", "images/image1.jpg");
  } else {
    myImage.setAttribute("src", "images/image.jpg");
  }
});

let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("请输入你的cp");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}是真的`;
    }
}

// 初始化时检查是否已有存储的名字
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}是真的`;
}

// 为所有 change 类按钮添加事件监听器
document.querySelectorAll(".change").forEach(btn => {
    btn.addEventListener("click", () => {
        setUserName();
    });
});

// 为所有 dot-btn 类按钮添加事件监听器
document.querySelectorAll(".dot-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("你选择了：" + btn.dataset.value);
    });
});
