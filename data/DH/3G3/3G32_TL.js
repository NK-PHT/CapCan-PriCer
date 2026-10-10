window.traLoiNgan3G32 = [
  {
    "id": "3G321TL1",
    "question": "Tính tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{2^n+(-1)^n}{4^n}$ (viết kết quả dưới dạng số thập phân).",
    "answer": "2,8",
    "explain": "Tách thành hai chuỗi hình học hội tụ:<br>$\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\dfrac12\\right)^n=\\dfrac{1}{1-\\frac12}=2$; $\\displaystyle\\sum_{n=0}^{\\infty}\\left(-\\dfrac14\\right)^n=\\dfrac{1}{1+\\frac14}=\\dfrac45$.<br>Tổng bằng $2+\\dfrac45=\\dfrac{14}{5}=2{,}8$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321TL2",
    "question": "Tính tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n(n+1)(n+2)}$ (viết kết quả dưới dạng số thập phân).",
    "answer": "0,25",
    "explain": "Phân tích: $\\dfrac{1}{n(n+1)(n+2)}=\\dfrac12\\left(\\dfrac{1}{n(n+1)}-\\dfrac{1}{(n+1)(n+2)}\\right)$.<br>Tổng riêng: $S_N=\\dfrac12\\left(\\dfrac{1}{1\\cdot2}-\\dfrac{1}{(N+1)(N+2)}\\right)$ (các số hạng ở giữa triệt tiêu).<br>$S=\\lim S_N=\\dfrac12\\cdot\\dfrac12=\\dfrac14=0{,}25$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321TL3",
    "question": "Gọi $S$ là tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^2+3n}$. Tính giá trị của $18S$.",
    "answer": "11",
    "explain": "$\\dfrac{1}{n(n+3)}=\\dfrac13\\left(\\dfrac1n-\\dfrac{1}{n+3}\\right)$.<br>$S_N=\\dfrac13\\left(1+\\dfrac12+\\dfrac13-\\dfrac{1}{N+1}-\\dfrac{1}{N+2}-\\dfrac{1}{N+3}\\right)$ (các số hạng $\\dfrac14,\\dfrac15,\\ldots,\\dfrac1N$ triệt tiêu).<br>$S=\\dfrac13\\cdot\\dfrac{11}{6}=\\dfrac{11}{18}$, do đó $18S=11$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321TL4",
    "question": "Có bao nhiêu giá trị nguyên của tham số $m$ để chuỗi số $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(m-2)^n}{5^n}$ hội tụ?",
    "answer": "9",
    "explain": "Đây là chuỗi hình học có công bội $r=\\dfrac{m-2}{5}$.<br>Chuỗi hình học hội tụ $\\Leftrightarrow|r|\\lt1\\Leftrightarrow|m-2|\\lt5\\Leftrightarrow-3\\lt m\\lt7$. (Khi $|r|\\ge1$ số hạng tổng quát không dần tới $0$ nên chuỗi phân kỳ.)<br>Các giá trị nguyên: $m\\in\\{-2;-1;0;1;2;3;4;5;6\\}$, gồm $9$ giá trị.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321TL5",
    "question": "Tìm số nguyên $p$ lớn nhất để chuỗi số $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n^p+1}{n^5+2n}$ hội tụ.",
    "answer": "3",
    "explain": "Với $p\\ge1$: $a_n=\\dfrac{n^p+1}{n^5+2n}$, so sánh với $b_n=\\dfrac{1}{n^{5-p}}$ ta có $\\dfrac{a_n}{b_n}=\\dfrac{n^5+n^{5-p}}{n^5+2n}\\to1$, nên chuỗi đã cho cùng tính chất với $\\sum\\dfrac{1}{n^{5-p}}$: hội tụ $\\Leftrightarrow 5-p\\gt1\\Leftrightarrow p\\lt4$.<br>(Với $p\\le0$ thì $a_n\\le\\dfrac{2}{n^5}$, chuỗi hội tụ.)<br>Với $p=4$: $a_n\\sim\\dfrac1n$, chuỗi phân kỳ. Vậy $p$ lớn nhất là $3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321TL6",
    "question": "Có bao nhiêu số nguyên dương $a$ để chuỗi số $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{a^n\\,n!}{n^n}$ hội tụ?",
    "answer": "2",
    "explain": "Tiêu chuẩn d’Alembert: $\\dfrac{u_{n+1}}{u_n}=\\dfrac{a^{n+1}(n+1)!}{(n+1)^{n+1}}\\cdot\\dfrac{n^n}{a^n n!}=a\\left(\\dfrac{n}{n+1}\\right)^n=\\dfrac{a}{\\left(1+\\frac1n\\right)^n}\\to\\dfrac{a}{e}$.<br>Chuỗi hội tụ khi $\\dfrac ae\\lt1\\Leftrightarrow a\\lt e\\approx2{,}718$ và phân kỳ khi $a\\gt e$.<br>Với $a$ nguyên dương: $a\\in\\{1;2\\}$ cho chuỗi hội tụ, $a\\ge3$ cho chuỗi phân kỳ. Có $2$ giá trị.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
