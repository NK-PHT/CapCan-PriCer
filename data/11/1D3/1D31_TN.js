// =========================================================================
// KHỐI DỮ LIỆU: 1D31 - Trắc nghiệm
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D31 = [
  {
    "id": "1D312TN1",
    "question": "$\\lim\\limits_{n \\to+\\infty}\\dfrac{3n-n^4}{4n^4-5}$ bằng",
    "options": [
      "$0$",
      "$\\dfrac{3}{4}$",
      "$-\\infty $",
      "$-\\dfrac{1}{4}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\lim\\limits_{n \\to+\\infty}\\dfrac{3n-n^4}{4n^4-5} = \\lim\\limits_{n \\to +\\infty} \\dfrac{\\dfrac{3}{n^3}-1}{4- \\dfrac{5}{n^4}}= \\dfrac{0-1}{4-0}= -\\dfrac{1}{4}$."
  },
  {
    "id": "1D315TN1",
    "question": "Từ một hình vuông có độ dài cạnh bằng $2$, người ta nối các trung điểm của cạnh hình vuông để tạo ra hình vuông mới như hình bên. Tiếp tục quá trình này đến vô hạn. Tổng diện tích của tất cả các hình vuông được tạo thành bằng<br><img src=\"data/11/1D3/im1D31/1D31_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$8$",
      "$4$",
      "$2$",
      "$\\dfrac{1}{2}$"
    ],
    "answer": 0,
    "explain": "Gọi $S_n$ là diện tích của hình vuông thứ $n$.<br>Ở hình vuông ban đầu cạnh bằng $2$, ta có $S_1 = 4$.<br>Ở hình vuông thứ hai cạnh bằng $\\sqrt{2}$, ta có $S_2 = 2$.<br>Ở hình vuông thứ ba cạnh bằng $1$, ta có $S_3 = 1$.<br>$\\ldots \\ldots \\ldots$<br>Ở hình vuông thứ $n$ cạnh bằng $\\left(\\dfrac{1}{\\sqrt{2}}\\right)^{n-3}$, ta có $S_n = \\left(\\dfrac{1}{2}\\right)^{n-3}$.<br>Dãy $(S_n)$ lập thành cấp số nhân có số hạng đầu $S_1 = 4$ và công bội $q = \\dfrac{1}{2}$ nên tổng diện tích của tất cả các hình vuông được tạo thành bằng $S = \\dfrac{4}{1-\\frac{1}{2}}=8$."
  }
];
