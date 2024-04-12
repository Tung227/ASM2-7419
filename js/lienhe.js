var success = 'đây là thông báo thành công"';
var warning;
var erro = 'Nhập sai định dạng';
var template = null;
function createToast(status) {
    switch (status) {
        case 'success':
            template = "<div class='" + status + "'><i class='bx bxs-check-circle'></i>" + success + "!</div><div class='chay'></div>";
            break;
        case 'error':
            template = "<div class='" + status + "'><i class='bx bx-error'></i>" + erro + "!</div><div class='chay'></div>";
            break;
        case 'warning':
            template = "<div class='" + status + "'><i class='bx bx-error-circle'></i>" + warning + "!</div><div class='chay'></div>";
            break;
        case 'ngoaile':
            template = "<div class='" + 'error' + "'><i class='bx bx-error-circle'></i>" + 'vui lòng nhập text node' + "!</div><div class='chay'></div>";

    }
    var toast = document.createElement('div');
    toast.classList.add('one');
    toast.innerHTML = template;
    var toastlist = document.getElementById('thongbao');
    toastlist.appendChild(toast)
    setTimeout(function () {
        toast.style.animation = 'slider__hidden 2s ease-in forwards'
    }, 4000)
    setTimeout(function () {
        toast.remove();
    }, 6000)
}
var kiemtra = new Object();
var checkemail = false,
    checkmasv = false,
    checkgioitinh = false,
    checksothich = false,
    checkquocgia = false,
    checkghichu =false;
kiemtra.masv = function () {
    checkmasv = false;
    var masvone = document.getElementById('masvone').value;
    document.getElementById('masv').style = 'font-size:15px;color:white';
    if (masvone.length == 0) {
        warning = 'vui lòng nhập Mã sinh viên';
        createToast('warning');
        document.getElementById('masv').innerHTML = "<br><u>vui lòng nhập Mã sinh viên</u>";
        checkmasv = false;
    } else {
        if (/^\d+\w*$/.test(masvone)) {
            createToast('error');
            document.getElementById('masv').innerHTML = "<br><u>Nhập sai định dạng</u>";
            checkmasv = false;
        } else {
            createToast('success');
            document.getElementById('masv').innerHTML = "";
            checkmasv = true;
        }
    }
}
kiemtra.email = function () {
    var emailone = document.getElementById('emailone').value;
    checkemail = false;
    document.getElementById('email').style = 'font-size:15px;color:white';
    if (emailone.length == 0) {
        warning = 'vui lòng nhập email';
        createToast('warning');
        document.getElementById('email').innerHTML = "<br><u>vui lòng nhập email</u>";
        checkemail = false;
    } else {
        if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailone)) {
            createToast('error');
            document.getElementById('email').innerHTML = "<br><u>Nhập sai định dạng</u>";
            checkemail = false;
        } else {
            createToast('success');
            document.getElementById('email').innerHTML = "";
            checkemail = true;
        }
    }
}

kiemtra.gioitinh = function () {
    checkgioitinh = false;
    var gioitinh = document.getElementsByName('gioitinh');
    for (var i = 0; i < gioitinh.length; i++) {
        if (gioitinh[i].checked) {
            checkgioitinh = true;
            console.log(gioitinh[i]);
            document.getElementById('gioitinh').innerHTML = '';
        }
    }
    if (checkgioitinh == false) {
        warning = 'Vui lòng chọn 1 gioi tinh';
        createToast('warning');
        document.getElementById('gioitinh').style = 'font-size:16px;color:white'
        document.getElementById('gioitinh').innerHTML = '<br>Vui lòng chọn 1 gioi tinh'
    } else {
        createToast('success');
    }
}
kiemtra.sothich = function () {
    checksothich = false;
    var sothich = document.getElementsByName('favourite');
    document.getElementById('sothichkhacone').style = "display:none"
    for (var i = 0; i < sothich.length; i++) {
        if (sothich[i].checked) {
            checksothich = true
            document.getElementById('sothich').innerHTML = ''
            if (sothich.length - 1 == i) {
                document.getElementById('sothichkhacone').style = "display:block"
            }
        }
    }
    if (checksothich == false) {
        warning = 'Vui lòng chọn 1 trở lên sở thích';
        createToast('warning');
        document.getElementById('sothich').style = 'font-size:16px;color:white'
        document.getElementById('sothich').innerHTML = '<br>Vui lòng chọn 1 sở thích'
    } else {
        createToast('success');
    }
}

kiemtra.quocgia = function () {
    var quocgia = document.getElementById('quocgia').value;
    checkquocgia = false;
    if (quocgia == 0) {
        checkquocgia = false;
        warning = 'Vui lòng chọn 1 quốc gia';
        createToast('warning');
        document.getElementById('quocgiaone').style = 'font-size:16px;color:white'
        document.getElementById('quocgiaone').innerHTML = '<br>Vui lòng chọn 1 quốc gia'
    } else {
        checkquocgia = true;
        document.getElementById('quocgiaone').innerHTML = ''
        createToast('success');
    }
}
kiemtra.ghichu = function () {
    var textnode = document.getElementById('textnode').value;
    if (textnode.length >= 200) {
        createToast('success');
        checkghichu = true;
    } else if (textnode.length == 0) {
        createToast('ngoaile');
        checkghichu = false;

    } else {
        warning = 'bạn chưa nhập đủ số từ quy định';
        createToast('warning');
        checkghichu = false;
    }
}
function kiemtraform() {
    kiemtra.masv();
    kiemtra.email();
    kiemtra.gioitinh();
    kiemtra.sothich();
    kiemtra.quocgia();
    kiemtra.ghichu();
    return checkmasv && checkemail && checkgioitinh && checksothich && checkquocgia && checkghichu;
}

