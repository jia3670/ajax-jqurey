let qe = '';
// 拼接路径
$('#tup1').change(function () {
    $("#box1").css("display", "block");
    qe = '../../public/img/' + ($('#tup1').val()).slice(11)
    $("#box1").attr("src", qe);
})
$('#tup2').change(function () {
    $("#box2").css("display", "block");
    qe = '../../public/img/' + ($('#tup2').val()).slice(11)
    $("#box2").attr("src", qe);
})
class stu {
    constructor(id, url, name, daoyan, yanyuan, time) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.daoyan = daoyan;
        this.yanyuan = yanyuan;
        this.time = time;
    }
}
class stue {
    constructor(url, name, daoyan, yanyuan, time) {
        this.url = url;
        this.name = name;
        this.daoyan = daoyan;
        this.yanyuan = yanyuan;
        this.time = time;
    }
}