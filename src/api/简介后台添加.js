//增加
Mock.mock("/api/addById4", "post", function (data) {
    let datas = JSON.parse(data.body);
    if (!(datas.name.trim() != '' && datas.url.trim() != '' && datas.daoyan.trim() != '' && datas.yanyuan.trim() != '' && datas.time.trim() != '')) {
        return 'nu'
    }
    if (localStorage.dy == undefined) {
        a = 1;
        datas.id = a;
        let ter = {
            'dian': [
                {
                    'id': a,
                    'url': datas.url,
                    'name': datas.name,
                    'daoyan': datas.daoyan,
                    'yanyuan': datas.yanyuan,
                    'time': datas.time,
                }
            ],
        }
        localStorage.dy = JSON.stringify(ter)
        return false
    }
    let dians = JSON.parse(localStorage.dy);
    let dian = dians.dian;
    if (dian == '') {
        a = 1;
        datas.id = a;
        dian[dian.length] = datas;
        dians.dian = dian
        localStorage.dy = JSON.stringify(dians);
        return false
    } else {
        let tt = localStorage.dy;
        let tts = JSON.parse(tt);
        let students = tts.dian;
        students[students.length] = datas;
        tts.dian = students;
        let studentr = JSON.stringify(tts);
        localStorage.dy = studentr;
        return false

    }
})