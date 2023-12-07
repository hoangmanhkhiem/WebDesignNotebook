var checkmail = /^[A-Za-z0-9_\-\.]+@[a-z]+\.[a-z]{2,4}$/;
// Cấu trúc : ^: bắt đầu chuỗi, $: kết thúc chuỗi
// [A-Za-z0-9_\-\.]: bao gồm chữ cái, số, dấu gạch dưới, dấu gạch ngang, dấu chấm
// +: xuất hiện 1 hoặc nhiều lần
// @: ký tự @
// [a-z]: bao gồm chữ cái
// {2,4}: xuất hiện từ 2 đến 4 lần

var checkphone = /^[0-9]{10,11}$/;
// Cấu trúc : ^: bắt đầu chuỗi, $: kết thúc chuỗi
// 0+: xuất hiện 1 hoặc nhiều lần
// [0-9]: bao gồm số từ 0 đến 9
// {9,10}: xuất hiện từ 9 đến 10 lần

var checkname = /^[A-Za-z ]{1,}$/;
// Cấu trúc : ^: bắt đầu chuỗi, $: kết thúc chuỗi
// [A-Za-z ]: bao gồm chữ cái và khoảng trắng
// {1,}: xuất hiện 1 hoặc nhiều lần\

// Cách dùng hàm test() để kiểm tra chuỗi
// checkmail.test("chuỗi cần kiểm tra")
// Kết quả trả về là true hoặc false

// Cách dùng hàm exec() để kiểm tra chuỗi
// checkmail.exec("chuỗi cần kiểm tra")
// Kết quả trả về là null hoặc mảng các ký tự không hợp lệ



// Cách gọi hàm từ html dùng form onsubmit="return checkForm(this);"
// Cách gọi hàm từ html dùng form onsubmit="name_func(document.forms.name_form);"


function commentForm(f)
{
    if(f.email.value.length == 0) {
        alert("Email must be not null");
        f.email.focus();
        return ;
    }
    if(check_email.test(f.email.value) == false) {
        alert("Email is not valid");
        f.email.focus();
        return;
    }
    if(f.com.value.length == 0 ) {
        alert("Comment must be not null");
        f.com.focus();
        return;
    }
    if(f.rate.value.length == 0) {
        alert("Rating must be not null");
        f.rate.focus();
        return;
    }
    if(isNaN(f.rate.value)) {
        alert("Rating must be a number");
        f.rate.focus();
        return;
    }
    alert("Success"); 
}