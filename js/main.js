// Bài tập 1:
document.getElementById('btnTinhLuong').onclick = function () {
    //inout: Lương 1 ngày, Số ngày làm
    let luong1Ngay = +document.getElementById('inputLuong1Ngay').value;
    let soNgayLam = +document.getElementById('inputSoNgayLam').value;
    //output: Tổng lương
    let tongLuong = 0;
    // process: Tính tổng lương = Lương 1 ngày * Số ngày làm
    tongLuong = luong1Ngay * soNgayLam;
    document.getElementById('txtLuong').innerHTML = tongLuong.toLocaleString();
};

// Bài tập 2:
document.getElementById('btnTB').onclick = function () {
    // input: 5 số thực
    let so1 = +document.getElementById('num1').value;
    let so2 = +document.getElementById('num2').value;
    let so3 = +document.getElementById('num3').value;
    let so4 = +document.getElementById('num4').value;
    let so5 = +document.getElementById('num5').value;
    let tong = so1 + so2 + so3 + so4 + so5;
    // output: Trung bình cộng
    let trungBinh = 0;
    // process: Tính trung bình cộng = Tổng 5 số / 5
    trungBinh = tong / 5;
    document.getElementById('txtTB').innerHTML = trungBinh;
};

// Bài tập 3:
document.getElementById('btnDoiTien').onclick = function () {
    // input: Số USD
    let e = document.getElementById("inputUSD").value;
    let t = new Intl.NumberFormat("vn-VN", { style: "currency", currency: "VND" }).format(23500 * e);
    // output: Số tiền quy đổi
    // process: Tính tiền VND = Số USD * 23500
    document.getElementById("txtDoiTien").innerHTML = `${e} USD = ${t}`;
};

// Bài tập 4:
document.getElementById('btnCal').onclick = function () {
    // input: Chiều rộng, Chiều cao
    let width = +document.getElementById('width').value;
    let height = +document.getElementById('height').value;
    // output: Diện tích, Chu vi
    let area = 0;
    let perimeter = 0;
    // process: Tính diện tích = Chiều rộng * Chiều cao; Tính chu vi = 2 * (Chiều rộng + Chiều cao)
    area = width * height;
    perimeter = 2 * (width + height);
    document.getElementById('txtCal').innerHTML = `Diện tích: ${area}; Chu vi: ${perimeter}`;
};

// Bài tập 5:
document.getElementById('btnSum').onclick = function () {
    // input: Số có 2 chữ số
    let so = +document.getElementById("number").value;
    // Kiểm tra xem số có đúng 2 chữ số không
    if (so < 10 || so > 99) {
        document.getElementById("txtSum").innerHTML = "Vui lòng nhập số có 2 chữ số!";
        return;
    }
    // output: Tổng 2 ký số
    let tong = 0;
    // Lấy hàng đơn vị và hàng chục
    let hangDonVi = so % 10;
    let hangChuc = Math.floor(so / 10);
    // Tính tổng
    tong = hangDonVi + hangChuc;
    // Hiển thị kết quả
    document.getElementById("txtSum").innerText = `Tổng 2 ký số là ${hangChuc} + ${hangDonVi} = ${tong}`;
}