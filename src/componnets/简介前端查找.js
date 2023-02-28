//查找
function cha() {
    let stus = $('#cha').val();
    $.ajax({
        type: 'post',
        url: "/api/cha",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                alert('有数据')
            }
            if (enw == true) {
                alert('暂无数据')
            }
            if (enw == 'ss') {
                tj();
            }
        }
    })
}