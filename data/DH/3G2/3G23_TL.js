window.traLoiNgan3G23 = [
  {
    "id": "3G231TL1",
    "question": "Tính tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}xe^{-x/2}\\,dx$.",
    "answer": "4",
    "explain": "Đặt $u=x$, $dv=e^{-x/2}dx\\Rightarrow du=dx$, $v=-2e^{-x/2}$.<br>$\\displaystyle\\int_0^b xe^{-x/2}\\,dx=\\left.-2xe^{-x/2}\\right|_0^b+2\\int_0^b e^{-x/2}\\,dx=-2be^{-b/2}+4\\left(1-e^{-b/2}\\right)$.<br>Khi $b\\to+\\infty$: $be^{-b/2}\\to0$ (quy tắc L'Hospital) và $e^{-b/2}\\to0$. Vậy tích phân bằng $4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231TL2",
    "question": "Tính tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\dfrac{x}{(x^2+1)^2}\\,dx$ (viết kết quả dưới dạng số thập phân).",
    "answer": "0,5",
    "explain": "Đặt $t=x^2+1\\Rightarrow dt=2x\\,dx$: $\\displaystyle\\int_0^b\\dfrac{x\\,dx}{(x^2+1)^2}=\\dfrac12\\int_1^{b^2+1}\\dfrac{dt}{t^2}=\\dfrac12\\left(1-\\dfrac{1}{b^2+1}\\right)$.<br>Cho $b\\to+\\infty$ được $\\dfrac12$. Vậy tích phân bằng $0{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231TL3",
    "question": "Cho $I=\\displaystyle\\int_1^2\\dfrac{x}{\\sqrt{x-1}}\\,dx$. Tính giá trị của $3I$.",
    "answer": "8",
    "explain": "Đây là tích phân suy rộng loại 2 (hàm số không xác định tại $x=1$). Đặt $t=\\sqrt{x-1}\\Rightarrow x=t^2+1$, $dx=2t\\,dt$; $x\\to1^+\\Rightarrow t\\to0^+$, $x=2\\Rightarrow t=1$.<br>$I=\\displaystyle\\int_0^1\\dfrac{t^2+1}{t}\\cdot 2t\\,dt=2\\int_0^1 (t^2+1)\\,dt=2\\cdot\\dfrac43=\\dfrac83$ (hàm sau khi đổi biến liên tục trên $[0;1]$ nên tích phân hội tụ).<br>Vậy $3I=8$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231TL4",
    "question": "Cho $I=\\displaystyle\\int_0^1\\sqrt{x}\\ln x\\,dx$. Tính giá trị của $9I$.",
    "answer": "-4",
    "explain": "Đặt $u=\\ln x$, $dv=\\sqrt x\\,dx\\Rightarrow du=\\dfrac{dx}{x}$, $v=\\dfrac23x^{3/2}$.<br>$\\displaystyle\\int_a^1\\sqrt x\\ln x\\,dx=\\left.\\dfrac23x^{3/2}\\ln x\\right|_a^1-\\dfrac23\\int_a^1\\sqrt x\\,dx=-\\dfrac23a^{3/2}\\ln a-\\dfrac49\\left(1-a^{3/2}\\right)$.<br>Vì $\\displaystyle\\lim_{a\\to0^+}a^{3/2}\\ln a=0$ nên $I=-\\dfrac49$. Vậy $9I=-4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231TL5",
    "question": "Có bao nhiêu số nguyên $p$ để tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\dfrac{x^p}{1+x^4}\\,dx$ hội tụ?",
    "answer": "3",
    "explain": "Tách $\\displaystyle\\int_0^{+\\infty}=\\int_0^1+\\int_1^{+\\infty}$.<br>Khi $x\\to0^+$: $\\dfrac{x^p}{1+x^4}\\sim x^p=\\dfrac{1}{x^{-p}}$, nên $\\displaystyle\\int_0^1$ hội tụ $\\Leftrightarrow -p\\lt 1\\Leftrightarrow p\\gt -1$.<br>Khi $x\\to+\\infty$: $\\dfrac{x^p}{1+x^4}\\sim\\dfrac{1}{x^{4-p}}$, nên $\\displaystyle\\int_1^{+\\infty}$ hội tụ $\\Leftrightarrow 4-p\\gt 1\\Leftrightarrow p\\lt 3$.<br>Vậy tích phân hội tụ $\\Leftrightarrow -1\\lt p\\lt 3$; các số nguyên thỏa mãn là $0,\\ 1,\\ 2$. Có $3$ giá trị.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231TL6",
    "question": "Tìm giá trị của tham số $a$ để tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\left(\\dfrac{ax}{x^2+1}-\\dfrac{2}{x+1}\\right)dx$ hội tụ.",
    "answer": "2",
    "explain": "Hàm dưới dấu tích phân liên tục trên $[0;+\\infty)$ và $\\dfrac{ax}{x^2+1}-\\dfrac{2}{x+1}=\\dfrac{(a-2)x^2+ax-2}{(x^2+1)(x+1)}$.<br>Nếu $a\\neq2$: hàm số $\\sim\\dfrac{a-2}{x}$ khi $x\\to+\\infty$ (giữ nguyên dấu với $x$ đủ lớn), mà $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x}$ phân kỳ nên tích phân phân kỳ.<br>Nếu $a=2$: hàm số bằng $\\dfrac{2x-2}{(x^2+1)(x+1)}\\sim\\dfrac{2}{x^2}$, tích phân hội tụ (cụ thể $\\displaystyle\\int_0^b=\\ln\\dfrac{b^2+1}{(b+1)^2}\\to0$).<br>Vậy $a=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
