//渲染
let a = 0;
function tj() {
    let s = '';
    if (localStorage.dy == undefined) {
        s = `<tr class='cha'>
        <td colspan='7' align='center' style='color:red;' class='cha'>暂无数据</td>
        </tr>`;
        $('#ew').html(s);
        return
    }
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    if (students == '') {
        s = `<tr class='cha'>
        <td colspan='7' align='center' style='color:red;'>暂无数据</td>
        </tr>`;
        $('#ew').html(s);
        a = 1;
        return
    }
    for (let i = 0; i < students.length; i++) {
        s += `<tr class='shai animate__animated animate__fadeInLeftBig' class=cha>
        <td><input type="checkbox" name=""class="ck1"index='${students[i].id}'></td>
        <td><img src="${students[i].url}" alt=""></td>
        <td>${students[i].name}</td>
        <td>${students[i].daoyan}</td>
        <td>${students[i].yanyuan}</td>
        <td>${students[i].time}</td>
        <td><button onclick="shan(${students[i].id})">删除</button>
        <button onclick="xiu1(${students[i].id})">修改</button>
                         </tr >`;
    }
    a = students[students.length - 1].id + 1;
    $('#ew').html(s);

}
tj();