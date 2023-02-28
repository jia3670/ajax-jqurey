//查找
Mock.mock("/api/cha", "post", function (data) {
    let datas = JSON.parse(data.body);
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let dian = tts.dian;
    let ccs = false;
    if (datas == '') {
        return 'ss';
    }
    for (let i = 0; i < dian.length; i++) {
        if (dian[i].id == datas) {
            ccs = true;
            s = `<tr class='shai animate__animated animate__fadeInLeftBig' class='cha'>
                <td><input type="checkbox" name=""class="ck1"index='${dian[i].id}'></td>
                <td><img src="${dian[i].url}" alt=""></td>
                <td>${dian[i].name}</td>
                <td>${dian[i].daoyan}</td>
                <td>${dian[i].yanyuan}</td>
                <td>${dian[i].time}</td>
                <td><button onclick="shan(${dian[i].id})">删除</button>
                <button onclick="xiu1(${dian[i].id})">修改</button></tr >`
            $('#ew').html(s);
            return false
        }
    }
    if (ccs == false) {
        s = `<tr>
        <td colspan='7' align='center' style='color:red;' class='cha'>暂无数据</td>
        </tr>`
        $('#ew').html(s);
        return true
    }
})