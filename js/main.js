// Giới thiệu về LS và cách sử dụng để lưu trữ trên trình duyệt 
/* 
    localStorage là kho lưu trữ cục bộ trên browser 
    luư dữ liệu theo key-value giống object và không giới hạn kể cả khi trình duyệt đã đóng
*/

/*
  so với cookie chỉ cho 4KB nghĩa là chỉ những thông tin cơ bản như username mới phù hợp
  trong khi đó LS cho phép lưu trữ đến 5MB nên có nhiều không gian hơn để catching dữ liệu  
*/

// có ba phương thức chỉnh của local storage 
// localStorage.setItem(); truyền vào key-value để lưu trữ
// localStorage.getItem(); lấy ra key-value
// localStorage.removeItem(); loại bỏ key với value tương ứng
// localStorage.clear(); xóa hết tất cả dữ liệu trong LS
// localStorage.length(); trả về số lượng key được lưu trữ


console.log(localStorage); // xuất ra các đối tượng 
console.log(localStorage.length);

// localStorage.setItem('name', 'Huy Tran')
// localStorage.setItem('age', 20)

// alert(localStorage.getItem('name'));

// localStorage chỉ lưu được dưới dạng string mặc định tham số thứ 2 (value) truyền vào phải là string
// cho nên muốn truyển kiểu dữ liệu khác vào thì phải ép kiểu về string bằng JSON
// localStorage.setItem('name', {
//     name: 'huy'
// });

//preventDefault() là sự kiện ngăn chặn đường liên kết  