<?php
// login.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kiểm tra thông tin đăng nhập
    // Lưu ý: Đây chỉ là một ví dụ. Trong thực tế, bạn cần kết nối với cơ sở dữ liệu và mã hóa mật khẩu.
    if ($username == "user_example" && $password == "password_example") {
        // Đăng nhập thành công, chuyển hướng sang trang mong muốn
        header("Location: trang-banh.php");
        exit;
    } else {
        // Đăng nhập thất bại, hiển thị thông báo lỗi hoặc xử lý khác
        echo "Tên đăng nhập hoặc mật khẩu không chính xác.";
    }
}
?>
