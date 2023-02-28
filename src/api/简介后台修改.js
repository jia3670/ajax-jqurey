//修改2
Mock.mock("/api/xiugai", "post", function (data) {
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    let datas = JSON.parse(data.body);
    if (!(datas.name.trim() != '' && datas.url.trim() != '' && datas.daoyan.trim() != '' && datas.yanyuan.trim() != '' && datas.time.trim() != '')) {
        return 'nu'
    }

    students[b].url = datas.url;
    students[b].name = datas.name;
    students[b].daoyan = datas.daoyan;
    students[b].yanyuan = datas.yanyuan;
    students[b].time = datas.time;
    tts.dian = students;
    localStorage.dy = JSON.stringify(tts);
    return false
})