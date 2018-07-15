function DangNhap(){
    var username = document.forms["frmNhapLieu"]["txtUsername"].value;
    var password = document.forms["frmNhapLieu"]["txtPassword"].value;
    if(username == "vdduy" && password == "passne"){
        alert("Bạn đăng nhập thành công!");
    }
    else{
        alert("Bạn đăng nhập thất bại");
    }
}

function feedback(name) {
    alert("Cảm ơn bạn đã gửi góp ý cho Salomon.vn, " + name);
}

function search(){
    var giaTu = parseInt(document.forms["frmNhapLieu"]["slGiaTu"].value);
    switch(giaTu){
        case 1000:
            alert("Bạn tìm mua điện thoại phổ thông!");
            break;
        case 3000:
            alert("Bạn tìm điện thoại trung cấp!");
            break;
        case 8000:
            alert("Bạn tìm mua điện thoại cao cấp!");
            break;
        default:
            alert("Bạn chưa chọn giá!");
    }
}

function checkout(){
    var chuoi = "";
    var i = 1;
    while(i <= 4){
        var soluong = parseInt(document.forms["frmNhapLieu"]["txtSoLuong" + i].value);
        chuoi += "Sản phẩm thứ " + i + " có số lượng: " + soluong + "\n";
        ++i;
        alert(chuoi);
    }
}

function checkFeedback(){
    //Lấy dữ liệu các trường cần kiểm tra
    var ten = document.getElementById("txtTen").value;
    var diachi = document.getElementById("txtDiaChi").value;
    var dienthoai = document.getElementById("txtDienThoai").value;
    var email = document.getElementById("txtEmail").value;
    var noidung = document.getElementById("txtNoiDung").value;

    //Khai báo biến lưu lỗi
    var loi = "";
    //Kiểu tra dữ liệu để thu thập lỗi
    if(ten==null || ten==""){
        loi += "Vui lòng nhập tên!\n";
    }
    if(diachi==null || diachi==""){
        loi += "Vui lòng nhập địa chỉ!\n";
    }
    if(dienthoai==null || dienthoai==""){
        loi += "Vui lòng nhập điện thoại!\n";
    }
    if(email==null || email==""){
        loi += "Vui lòng nhập email!\n";
    }
    
    else if (!isEmail(email)){
        loi += "Địa chi email không hợp lệ!\n";
    }
    if (noidung==null || noidung==""){
        loi += "Vui lòng nhập nội dung!\n";
    }

    //Nếu có lỗi xảy ra
    if(loi != ""){
        alert(loi);
        return false;
    }
    //Ngược lại nếu không có lỗi
    else{
        alert("Tất cả dữ liệu hợp lệ");
        return true;
    }
}

//Hàm kiểu tra địa chỉ email
function isEmail(){
    var bieuthuc = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return bieuthuc.test(email);
}

function changeFooterStyle(style){
    var footer = document.getElementById("footer_p");
    footer.className = style;
}