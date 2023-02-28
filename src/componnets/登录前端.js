class stu {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}
function addById3() {
    let stus = new stu($('#user').val(),$('#password').val());
    $.ajax({
        type: 'post',
        url: "/api/addById3",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == true) {
                alert("用户名或密码错误")
            }
            if (enw == false) {
                alert("登陆成功 ")
                window.location.href = ".././views/简介.html"
            }
        }
    })
}