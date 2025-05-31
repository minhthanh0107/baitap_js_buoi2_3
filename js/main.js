// Bài tập 1:
document.getElementById('btnTinhLuong').onclick = function () {
    let luong1Ngay = +document.getElementById('inputLuong1Ngay').value;
    let soNgayLam = +document.getElementById('inputSoNgayLam').value;
    let tongLuong = luong1Ngay * soNgayLam;
    document.getElementById('txtLuong').innerHTML = tongLuong.toLocaleString();
};

// Bài tập 2:
document.getElementById('btnTB').onclick = function () {
    let so1 = +document.getElementById('num1').value;
    let so2 = +document.getElementById('num2').value;
    let so3 = +document.getElementById('num3').value;
    let so4 = +document.getElementById('num4').value;
    let so5 = +document.getElementById('num5').value;
    let tong = so1 + so2 + so3 + so4 + so5;
    let trungBinh = tong / 5;
    document.getElementById('txtTB').innerHTML = trungBinh;
};

// Bài tập 3:
document.getElementById('btnDoiTien').onclick = function () {
    let e = document.getElementById("inputUSD").value;
    let t = new Intl.NumberFormat("vn-VN", { style: "currency", currency: "VND" }).format(23500 * e);
    document.getElementById("txtDoiTien").innerHTML = `${e} USD = ${t}`;
};

// Bài tập 4:
document.getElementById('btnCal').onclick = function () {
    let width = +document.getElementById('width').value;
    let height = +document.getElementById('height').value;
    let area = width * height;
    let perimeter = 2 * (width + height);
    document.getElementById('txtCal').innerHTML = `Diện tích: ${area}; Chu vi: ${perimeter}`;
};

// Bài tập 5:
document.getElementById('btnSum').onclick = function () {
    let so = +document.getElementById("number").value;
    // Kiểm tra xem số có đúng 2 chữ số không
    if (so < 10 || so > 99) {
        document.getElementById("txtSum").innerHTML = "Vui lòng nhập số có 2 chữ số!";
        return;
    }
    // Lấy hàng đơn vị và hàng chục
    let hangDonVi = so % 10;
    let hangChuc = Math.floor(so / 10);
    // Tính tổng
    let tong = hangDonVi + hangChuc;
    // Hiển thị kết quả
    document.getElementById("txtSum").innerText = `Tổng 2 ký số là ${hangChuc} + ${hangDonVi} = ${tong}`;
}