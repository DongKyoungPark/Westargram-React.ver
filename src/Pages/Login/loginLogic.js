const id = document.querySelector("#input-id");
const loginButton = document.querySelector(".login-button");

id.addEventListener("keyup", function (e) {
    e.preventDefault();
    loginButton.style.backgroundColor = "#0095f6";
});

loginButton.addEventListener("click", function (e) {
    e.preventDefault();

    const idValue = document.querySelector("#input-id").value;
    const passWordValue = document.querySelector("#input-pw").value;

    if (idValue.length < 6) {
        alert("아이디는 6글자 이상입력주세요");
        return;
    }

    if (!passWordValue) {
        alert("비밀번호를 입력해주세요");
        return;
    } else if (passWordValue.length < 8) {
        alert("비밀번호는 8글자 이상 입력해주세요.");
        return;
    }

    if (idValue.length >= 6 && passWordValue.length >= 8) {
        loginButton.setAttribute("onClick", "location.href='main.html'");
    }
});

const mainPicChange = () => {
    const imgs = document.querySelectorAll(".main-pic");
    let temp = 0;

    for (let i = 0; i < imgs.length; i++) {
        let randomImgs = Math.round(Math.random() * (imgs.length - 1));
        console.log(randomImgs);
        const imgList = imgs[i].classList;
        if (imgList.contains("selected")) {
            imgList.remove("selected");
            temp = randomImgs;
            break;
        }
    }

    if (temp === imgs.length - 1) {
        imgs[0].classList.add("selected");
    } else {
        imgs[temp + 1].classList.add("selected");
    }
};


setInterval(mainPicChange, 3000);