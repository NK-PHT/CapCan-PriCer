window.traLoiNgan3G33 = [
  {
    "id": "3G331TL1",
    "question": "Tìm bán kính hội tụ $R$ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(2n)!}{(n!)^2\\,2^n}\\,x^n$ (viết kết quả dưới dạng số thập phân).",
    "answer": "0,5",
    "explain": "Với $a_n=\\dfrac{(2n)!}{(n!)^2\\,2^n}$: $\\dfrac{a_{n+1}}{a_n}=\\dfrac{(2n+2)(2n+1)}{(n+1)^2\\cdot2}=\\dfrac{2n+1}{n+1}\\to2$.<br>Bán kính hội tụ $R=\\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|=\\dfrac12=0{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331TL2",
    "question": "Có bao nhiêu giá trị nguyên của $x$ thuộc miền hội tụ của chuỗi hàm $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x+1)^{2n}}{n\\cdot 9^n}$?",
    "answer": "5",
    "explain": "Đặt $t=\\dfrac{(x+1)^2}{9}\\ge0$, chuỗi trở thành $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{t^n}{n}$ có bán kính hội tụ $1$.<br>Hội tụ khi $t\\lt1\\Leftrightarrow(x+1)^2\\lt9\\Leftrightarrow-4\\lt x\\lt2$; phân kỳ khi $t\\gt1$.<br>Tại $t=1$ (tức $x=-4$ hoặc $x=2$): chuỗi $\\sum\\frac1n$ phân kỳ.<br>Miền hội tụ $(-4;2)$, chứa các số nguyên $-3,-2,-1,0,1$: có $5$ giá trị.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331TL3",
    "question": "Tìm số nguyên $x$ lớn nhất thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(2x-3)^n}{n\\cdot 5^n}$.",
    "answer": "3",
    "explain": "Đặt $t=\\dfrac{2x-3}{5}$, chuỗi trở thành $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{t^n}{n}$ với bán kính hội tụ $1$.<br>Hội tụ khi $|2x-3|\\lt5\\Leftrightarrow-1\\lt x\\lt4$.<br>Tại $x=-1$: $t=-1$, chuỗi $\\sum\\frac{(-1)^n}{n}$ hội tụ (Leibniz). Tại $x=4$: $t=1$, chuỗi $\\sum\\frac1n$ phân kỳ.<br>Miền hội tụ $[-1;4)$, số nguyên lớn nhất là $3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331TL4",
    "question": "Có bao nhiêu số nguyên dương $p$ để chuỗi số $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{n^{p/4}}$ nửa hội tụ (hội tụ nhưng không hội tụ tuyệt đối)?",
    "answer": "4",
    "explain": "Với $p\\gt0$: $u_n=\\dfrac{1}{n^{p/4}}$ giảm và dần tới $0$ nên chuỗi đan dấu luôn hội tụ (Leibniz).<br>Chuỗi trị tuyệt đối $\\sum\\dfrac{1}{n^{p/4}}$ hội tụ $\\Leftrightarrow\\dfrac p4\\gt1\\Leftrightarrow p\\gt4$.<br>Vậy chuỗi nửa hội tụ $\\Leftrightarrow 0\\lt\\dfrac p4\\le1\\Leftrightarrow p\\in\\{1;2;3;4\\}$: có $4$ giá trị.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331TL5",
    "question": "Chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1}}{n^2}$ có tổng $S$ và tổng riêng thứ $N$ là $S_N$. Theo tiêu chuẩn Leibniz, $|S-S_N|\\le\\dfrac{1}{(N+1)^2}$. Tìm số nguyên dương $N$ nhỏ nhất để đánh giá này bảo đảm $|S-S_N|\\lt 10^{-3}$.",
    "answer": "31",
    "explain": "Cần $\\dfrac{1}{(N+1)^2}\\lt\\dfrac{1}{1000}\\Leftrightarrow(N+1)^2\\gt1000$.<br>Vì $31^2=961\\lt1000\\lt1024=32^2$ nên $N+1\\ge32$, tức $N\\ge31$.<br>Vậy $N$ nhỏ nhất là $31$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331TL6",
    "question": "Tính tổng tất cả các giá trị nguyên của $x$ thuộc miền hội tụ của chuỗi hàm $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x^2-4x)^n}{n\\cdot 3^n}$.",
    "answer": "8",
    "explain": "Đặt $t=\\dfrac{x^2-4x}{3}$, chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{t^n}{n}$ hội tụ $\\Leftrightarrow-1\\le t\\lt1$ (tại $t=-1$ hội tụ theo Leibniz, tại $t=1$ là chuỗi điều hòa phân kỳ).<br>$t\\ge-1\\Leftrightarrow x^2-4x+3\\ge0\\Leftrightarrow x\\le1$ hoặc $x\\ge3$.<br>$t\\lt1\\Leftrightarrow x^2-4x-3\\lt0\\Leftrightarrow2-\\sqrt7\\lt x\\lt2+\\sqrt7$.<br>Miền hội tụ: $(2-\\sqrt7;1]\\cup[3;2+\\sqrt7)$ với $2-\\sqrt7\\approx-0{,}65$, $2+\\sqrt7\\approx4{,}65$. Các số nguyên: $0,1,3,4$ (chú ý $x=2$ cho $t=-\\frac43$, chuỗi phân kỳ).<br>Tổng: $0+1+3+4=8$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
