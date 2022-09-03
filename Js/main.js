// Hàm quản lý tuyển sinh
function tinhTongDiem(a,b,c,d,e){
    var tongDiem = a + b+ c+ d +e;
    return tongDiem;
}
 function dauRot(){
    var diemChuan = document.getElementById("diemChuan").value*1;
    var diem1 = document.getElementById("diem1").value*1;
    var diem2 = document.getElementById("diem2").value*1;
    var diem3 = document.getElementById("diem2").value*1;
    var khuVuc = document.getElementById("khuVuc").value*1;
    var doiTuong = document.getElementById("doiTuong").value*1;
    var tongDiem = tinhTongDiem(diem1, diem2, diem3, khuVuc, doiTuong);
    if(diem1, diem2, diem3 > 0&& diem1, diem2, diem3 <=10){}
    if(diem1, diem2, diem3 > 0&& diem1, diem2, diem3 <=10&&tongDiem>=diemChuan){
        var ketQua ="Tổng điểm " + tongDiem  + " Thí sinh đậu";
    }else {
        var ketQua ="Tổng điểm "+ tongDiem +  " thí sinh rớt";
    }
    document.getElementById("tongKet").innerHTML = ketQua;

 }

 // tính tiền điện
 function tinhTienDien(a){
    var tienDien;
    if(a>350){
        tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (a-350)*1300;
    }else if(a > 200){
        tienDien = 50*500 + 50*650 + 100*850 + (a-200)*1100;
    }else if(a > 100){
        tienDien = 50*500 + 50*650 + (a-100)*850;
    }else if(a>50){
        tienDien = 50*500 + (a-50)*650;
    }else if(a>=0&&a<=50){
        tienDien = a*500;
    }else{
        alert("vui lòng nhập hợp lệ");
    }
    return tienDien;
 }

 function tienDien(){
    var soDien = document.getElementById("soDien").value*1;
    var tinhToan = tinhTienDien(soDien);
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<br>" + "Số tiền điện là: " + currentFormat.format(tinhToan) + " VND";
    document.getElementById("tinhTienDien").innerHTML = ketQua;

 }