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
    "explain": "Ta có $u_2=u_1+d=9+2=11$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
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
    "explain": "Gọi $u_n$ là số ghế ở hàng thứ $n$.<br>Khi đó, dãy số $(u_n)$ tạo thành cấp số cộng với $u_1 = 14$ và $d = 1$.<br>Tổng số ghế có trong rạp hát là\t\\[S_{16}=\\dfrac{16\\cdot [2\\cdot 14+(16-1)\\cdot 1]}{2} = 344 \\text{ (ghế).}\\] Tổng số tiền bán vé thu được là $344 \\cdot 110\\, 000 = 37\\,840\\,000 $ (đồng).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
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
    "explain": "Ta có $u_{n+1}=5-2(n+1)=3 -2n$.<br>Do $(u_n)$ là cấp số cộng nên công sai $d=u_{n+1}-u_n=(3-2n)-(5-2n)=-2$.<br>Vậy công sai của cấp số cộng $(u_n)$ là $d=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D222TN2",
    "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = 13$. Công sai của $(u_n)$ là",
    "options": [
      "$d = \\dfrac{13}{2}$",
      "$d = 11$",
      "$d = 15$",
      "$d = -11$"
    ],
    "answer": 1,
    "explain": "Công sai của cấp số cộng $d = u_2 - u_1 = 13 - 2 = 11$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D223TN1",
    "question": "Cho cấp số cộng $(u_n)$ có $u_1=-3$ và $d=\\dfrac{1}{2}$. Khẳng định nào sau đây đúng?",
    "options": [
      "$u_n=\\dfrac{1}{2} n-\\dfrac{5}{2}$",
      "$u_n=\\dfrac{1}{2} n-4$",
      "$u_n=-\\dfrac{1}{2}-\\dfrac{5}{2}$",
      "$u_n=\\dfrac{1}{2} n-\\dfrac{7}{2}$"
    ],
    "answer": 3,
    "explain": "Ta có $u_n=u_1+(n-1)d=-3+(n-1)\\cdot \\dfrac{1}{2}=\\dfrac{1}{2} n-\\dfrac{7}{2}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D224TN2",
    "question": "Cho cấp số cộng $\\left(u_n\\right)$ có $u_1=11$ và công sai $d=4$. Hãy tính $u_{99}$",
    "options": [
      "$401$",
      "$403$",
      "$402$",
      "$404$"
    ],
    "answer": 1,
    "explain": "Ta có: $u_{99}=u_1+98d=11+98.4=403$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D224TN3",
    "question": "Cấp số cộng $(u_n)$ có số hạng đầu $u_1 =3$, công sai $d=-2$ thì số hạng thứ $5$ là",
    "options": [
      "$u_5 =-5$",
      "$u_5 =-7$",
      "$u_5 =8$",
      "$u_5 =1$"
    ],
    "answer": 0,
    "explain": "Do $(u_n)$ là cấp số cộng nên $u_n=u_1+(n-1)\\cdot d$.<br>Khi đó $u_5 =u_1+(5-1)\\cdot (-2) =3+4\\cdot(-2)=-5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D222TN3",
    "question": "Dãy nào sau đây là cấp số cộng?",
    "options": [
      "$3$, $3$, $3$, $7$, $10$",
      "$2$, $-1$, $-4$, $-7$, $-10$",
      "$1$, $4$, $7$, $9$, $1$",
      "$1$, $3$, $5$, $7$, $11$"
    ],
    "answer": 1,
    "explain": "Ta có $2$, $-1$, $-4$, $-7$, $-10$ là dãy cấp số cộng với số hạng đầu $u_1=2$, công sai $d=-3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D221TN1",
    "question": "Cho cấp số cộng $(u_n)$ có công sai $d=11$. Khẳng định nào sau đây đúng?",
    "options": [
      "$u_n=u_{n+1}+11$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_{n+1}=u_n-11$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_{n+1}=u_n \\cdot 11$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$u_{n+1}=u_n+11$, $ \\forall n \\in \\mathbb{N}^{*}$"
    ],
    "answer": 3,
    "explain": "<br>• Xét $(u_n)$ với $u_n=u_{n+1}+11 \\Leftrightarrow u_{n+1}-u_n=-11 $.<br>Do đó $(u_n)$ là cấp số cộng với công sai $d=-11$.<br>• Xét $(u_n)$ với $u_{n+1}=u_n-11 \\Leftrightarrow u_{n+1}-u_n=-11 $.<br>Do đó $(u_n)$ là cấp số cộng với công sai $d=-11$.<br>• Xét $(u_n)$ với $u_{n+1}=u_n \\cdot 11$.<br>Do đó $(u_n)$ là cấp số nhân với công bội $q=11$.<br>• Xét $(u_n)$ với $u_{n+1}=u_n+11 \\Leftrightarrow u_{n+1}-u_n=11 $.<br>Do đó $(u_n)$ là cấp số cộng với công sai $d=11$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D226TN1",
    "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1$, số hạng tổng quát $u_n$, tổng của $n$ số hạng đầu $S_n$. Khẳng định nào sau đây đúng?",
    "options": [
      "$S_n=\\dfrac{1}{2}\\left(u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$S_n=n\\left(u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$S_n=\\dfrac{n}{2}\\left(2u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$",
      "$S_n=\\dfrac{n}{2}\\left(u_1+u_n\\right)$, $ \\forall n \\in \\mathbb{N}^{*}$"
    ],
    "answer": 3,
    "explain": "Ta có công thức tính tổng của $n$ số hạng đầu $S_n$ là $$S_n=\\dfrac{n}{2}\\left(u_1+u_n\\right) \\forall n \\in \\mathbb{N}^{*}$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D224TN4",
    "question": "Cho $(u_n)$ là một cấp số cộng thỏa mãn $u_1 + u_3 = 8$ và $u_4 = 10$. Công sai của cấp số cộng đã cho bằng",
    "options": [
      "$2$",
      "$6$",
      "$4$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Ta có $\\left\\{\\begin{array}{l}u_1 + u_3 = 8\\\\u_4 = 10\\end{array}\\right.\\Leftrightarrow\\left\\{\\begin{array}{l}u_1 + u_1+2d = 8\\\\u_1+3d = 10\\end{array}\\right.\\Leftrightarrow\\left\\{\\begin{array}{l}2u_1+2d = 8\\\\u_1+3d = 10\\end{array}\\right.\\Leftrightarrow\\left\\{\\begin{array}{l}u_1=1\\\\d=3.\\end{array}\\right.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D224TN5",
    "question": "Cho một cấp số cộng có $u_1=1$ và $d=-3$. Hãy chọn kết quả <strong>đúng</strong>.",
    "options": [
      "Dạng khai triển: $1;-2;-5;-8;-11; \\ldots$",
      "Dạng khai triển: $-1;-2;-5;-8;-11; \\ldots$",
      "Dạng khai triển: $1;-2; 5;-8;-11; \\ldots$",
      "Dạng khai triển: $1;-2;-5;-8; 11; \\ldots$"
    ],
    "answer": 0,
    "explain": "Ta có $u_1=1$ và công sai $d=-3$.<br>$u_2=u_1+d=1+(-3)=-2$.<br>$u_3=u_2+d=-2+(-3)=-5$.<br>$u_4=u_3+d=-5+(-3)=-8$.<br>$u_5=u_4+d=-8+(-3)=-11$.<br>Vậy dạng khai triển của cấp số cộng là $1;-2;-5;-8;-11; \\ldots$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D222TN4",
    "question": "Dãy số nào sau đây là cấp số cộng?",
    "options": [
      "$1$ ; $2$ ; $3$ ; $4$ ; $5$",
      "$1$ ; $2$ ; $4$ ; $8$ ; $16$",
      "$1$ ;$-1$ ; $1$ ;$-1$ ; $1$",
      "$1$ ;$-3$ ; $9$ ;$-27$ ; $81$"
    ],
    "answer": 0,
    "explain": "Dãy số $1$ ; $2$ ; $3$ ; $4$ ; $5$ thỏa mãn $u_{n+1}-u_n=1$ nên là một cấp số cộng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D224TN6",
    "question": "Cho cấp số cộng $\\left(u_n\\right)$ với $u_1=9$ và công sai $d=2$. Giá trị của $u_2$ bằng",
    "options": [
      "$11$",
      "$\\dfrac{9}{2}$",
      "$18$",
      "$7$"
    ],
    "answer": 0,
    "explain": "Ta có $u_2=u_1+(2-1)\\cdot 2=11$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
