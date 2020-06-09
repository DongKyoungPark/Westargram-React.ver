const input = document.querySelector("#FP-textarea");
const button = document.querySelector("#comment-submit");

function addComment(e) {
    const comment = document.querySelector(".FP-commentView");

    const div = document.createElement("div");
    div.className = "comment";
    const a = document.createElement("a");
    const span = document.createElement("span");
    span.className = "comment-span";
    const button = document.createElement("button");
    button.className = "deconsteComment";
    button.innerHTML = "삭제";

    a.innerHTML = "user &nbsp";
    span.innerHTML = input.value;

    comment.appendChild(div);
    div.appendChild(a);
    div.appendChild(span);
    div.appendChild(button);

    input.value = "";
}

input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        addComment();
    }
});

button.addEventListener("click", function (e) {
    e.preventDefault();
    addComment();
});
