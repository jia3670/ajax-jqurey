//删除
function shan(that) {
    let stus = that;
    $.ajax({
        type: 'post',
        url: "/api/shan",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                alert('删除成功')
                tj();
            }
        }
    })
}
//选择删除
$("#shane1").click(function () {
    let abc = [];
    let selectList1 = $('.ck1');
    for (let item in selectList1) {
        if (selectList1[item].checked) {
            let aaa = selectList1[item].getAttribute('index');
            abc.push(aaa);
        }
    }
    $.ajax({
        type: 'post',
        url: "/api/shane1",
        data: JSON.stringify(abc),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                alert('删除成功')
                tj();
            }
        }
    })
})

//选择修改
function xiu11() {
    let bbab = 0;
    let num = 0;
    let selectList1 = $('.ck1');
    for (let item in selectList1) {
        if (selectList1[item].checked) {
            bbab++;
            num = selectList1[item].getAttribute('index');
        }
    }
    if (bbab == 0) {
        alert("未选中数据")
        return
    }
    if (bbab > 1) {
        alert("请勿选中多条数据")
        return
    }
    if (bbab == 1) {
        xiu1(num);
    }
}