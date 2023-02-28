//删除
Mock.mock("/api/shan", "post", function (data) {
    let datas = JSON.parse(data.body);
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    for (let i = 0; i < students.length; i++) {
        if (datas == students[i].id) {
            students.splice(i, 1);
        }
    }
    tts.dian = students;
    tt = JSON.stringify(tts);
    localStorage.dy = tt;
    return false
})