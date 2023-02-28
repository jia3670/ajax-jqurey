class stu {
    constructor(id, user, password) {
        this.id = id;
        this.user = user;
        this.password = password;
    }
}
let ew = /^[\u4e00-\u9fa5]{2,8}$/;
let ss = /^\d{4,16}$/;
let a = 0;
$("#user").on("input",function () {
    if ($("#user").val() == '') {
        console.log('123');
        $("#usere").text('');
        return
    }
    if (ew.test($("#user").val())) {    
        $("#usere").text('格式正确');
        $("#usere").css("color","green");
    } else {
        $("#usere").text('格式错误');
        $("#usere").css("color","red");
    }
})
$('#password').on("input",function () {
    if ($('#password').val() == '') {
        $('#passworde').text();
        return
    }
    if (ss.test($('#password').val())) {
        $("#passworde").text('格式正确');
        $("#passworde").css("color","green");
    } else {
        $("#passworde").text('格式错误');
        $("#passworde").css("color","red");
    }
})
function addById2() {
    let stus = new stu(a, $('#user').val(), $('#password').val());
    $.ajax({
        type: 'post',
        url: "/api/addById2",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == true) {
                alert("添加失败")
            }
            if (enw == false) {
                alert("添加成功 ")
                window.location.href = "../views/登录.html";
                $('#password').val("");
                $('#user').val("");
            }
            if (enw == 'c') {
                alert("用户名重复")
            }
        }
    })
}