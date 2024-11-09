var Button = document.querySelector("button");
Button.addEventListener("click", function () {
    prompt("enet your email address");
    var userName = "@" + Button;
    console.log(userName);
    ;
});
