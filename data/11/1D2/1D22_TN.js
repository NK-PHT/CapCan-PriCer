// =========================================================================
// KHỐI DỮ LIỆU: 1D22 - Trắc nghiệm
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D22 = [
  {
    "id": "1D224TN1",
    "question": "Cho cấp số cộng $(u_n)$ với số hạng đầu $u_1=9$, công sai $d=2$. Số hạng thứ hai của cấp số cộng đó là",
    "options": [
      "$\\dfrac{9}{2}$",
      "$11$",
      "$7$",
      "$18$"
    ],
    "answer": 1,
    "explain": "Ta có $u_2=u_1+d=9+2=11$."
  },
  {
    "id": "1D227TN1",
    "question": "Một rạp chiếu phim có 16 hàng ghế dành cho người xem. Hàng thứ nhất có 14 ghế, hàng thứ hai có 15 ghế, hàng thứ ba có 16 ghế, $\\ldots$ cứ như thế, số ghế ở hàng sau nhiều hơn số ghế ở hàng liền trước là 1 ghế. Trong một buổi chiếu phim nhà rạp đã bán được hết vé, với giá 110000 đồng mỗi vé, biết rằng số vé bán ra bằng số ghế dành cho người xem. Tổng số tiền bán vé bằng",
    "options": [
      "$344\\,000$ đồng",
      "$25\\,520\\,000$ đồng",
      "$37\\,840\\,000$ đồng",
      "$75\\,680\\,000$ đồng"
    ],
    "answer": 2,
    "explain": "Gọi $u_n$ là số ghế ở hàng thứ $n$.<br>Khi đó, dãy số $(u_n)$ tạo thành cấp số cộng với $u_1 = 14$ và $d = 1$.<br>Tổng số ghế có trong rạp hát là\t\\[S_{16}=\\dfrac{16\\cdot [2\\cdot 14+(16-1)\\cdot 1]}{2} = 344 \\text{ (ghế).}\\] Tổng số tiền bán vé thu được là $344 \\cdot 110\\, 000 = 37\\,840\\,000 $ (đồng)."
  },
  {
    "id": "1D222TN1",
    "question": "Cho cấp số cộng $(u_n)$ với $u_n=5-2n$. Tìm công sai của cấp số cộng đã cho.",
    "options": [
      "$d=3$",
      "$d=2$",
      "$d=1$",
      "$d=-2$"
    ],
    "answer": 3,
    "explain": "Ta có $u_{n+1}=5-2(n+1)=3 -2n$.<br>Do $(u_n)$ là cấp số cộng nên công sai $d=u_{n+1}-u_n=(3-2n)-(5-2n)=-2$.<br>Vậy công sai của cấp số cộng $(u_n)$ là $d=-2$."
  }
];
