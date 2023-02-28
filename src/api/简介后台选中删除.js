//选中删除
Mock.mock("/api/shane1", "post", function (data) {
    let datas = JSON.parse(data.body);
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let dian = tts.dian;
    for (let item of datas) {
        for (let j = 0; j < dian.length; j++) {
            if (item == dian[j].id) {
                dian.splice(j, 1);
            }
        }
    }
    tts.dian = dian;
    tt = JSON.stringify(tts);
    localStorage.dy = tt;
    return false
})