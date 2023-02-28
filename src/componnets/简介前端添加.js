//添加数据
//显示添加页面
$("#san").click(function () {
    $('#e1').css("display", "block");
    $('#eew1').css("display", "block");
});
//添加页面函数
function addById4() {
    let stus = new stu(a, qe, $('#ewm1').val(), $('#ewd1').val(), $('#ewy1').val(), $('#ews1').val());
    $.ajax({
        type: 'post',
        url: "/api/addById4",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == true) {
                alert("添加失败")
            }
            if (enw == false) {
                alert("添加成功")
                $('#e1').css("display", "none");
                $('#eew1').css("display", "none");
                $('#ewm1').val("");
                $('#ewd1').val("");
                $('#ewy1').val("");
                $('#ews1').val("");
                $('#tup1').val("");
                $('#box1').attr("src", "")
                qe = '';
                tj();
            }
            if (enw == 'nu') {
                alert("数据不得为空")
            }
        }
    })
}