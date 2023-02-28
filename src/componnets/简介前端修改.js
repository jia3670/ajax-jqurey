//修改  显示传参
let b = 0;
function xiu1(that) {
    $('#e1').css("display", "block");
    $('#eew2').css("display", "block");

    let c = that;
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    for (let i = 0; i < students.length; i++) {
        if (c == students[i].id) {
            b = i;
            $('#box2').attr("src", students[i].url);
            $('#ewm2').val(students[i].name)
            $('#ewd2').val(students[i].daoyan)
            $('#ewy2').val(students[i].yanyuan)
            $('#ews2').val(students[i].time)
            $('#box2').css("display", "block");
        }
    }
}

//修改
function xiugai() {
    let stus = new stue($('#box2').attr("src"), $('#ewm2').val(), $('#ewd2').val(), $('#ewy2').val(), $('#ews2').val());
    $.ajax({
        type: 'post',
        url: "/api/xiugai",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                $('#eew2').css("dispaly", "none")
                $('#e1').css("display", "none")
                $('#ewm2').val("")
                $('#tup2').val("")
                $('#ewd2').val("")
                $('#ewy2').val("")
                $('#ews2').val("")
                $('#box2').attr("src")
                qe = '';
                alert('修改成功')
                tj();
            }
            if (enw == 'nu') {
                alert('数据不得为空')
            }
        }
    })
}