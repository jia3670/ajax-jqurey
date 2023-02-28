//全选
$('#boxx').click(function () {
    let selectList1 = $('.ck1');
    for (let i = 0; i < selectList1.length; i++) {
        if ($("#boxx").is(":checked")) {
            selectList1[i].checked = true;
        } else {
            selectList1[i].checked = false;
        }
    }
})