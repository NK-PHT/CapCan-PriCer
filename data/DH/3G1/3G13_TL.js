window.traLoiNgan3G13 = [
  {
    "id": "3G131TL1",
    "question": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-10;10]$ để hàm số $y=x^3-3mx^2+3(m+2)x+1$ có hai điểm cực trị?",
    "answer": "17",
    "explain": "$y'=3x^2-6mx+3(m+2)$. Hàm số có hai điểm cực trị $\\Leftrightarrow y'=0$ có hai nghiệm phân biệt (khi đó $y'$ đổi dấu qua mỗi nghiệm)<br>$\\Leftrightarrow \\Delta'=9m^2-9(m+2)\\gt 0\\Leftrightarrow m^2-m-2\\gt 0\\Leftrightarrow (m+1)(m-2)\\gt 0\\Leftrightarrow m \\lt -1$ hoặc $m\\gt 2$.<br>Các số nguyên thỏa mãn trong $[-10;10]$: $m\\in\\{-10;\\dots;-2\\}$ ($9$ giá trị) và $m\\in\\{3;\\dots;10\\}$ ($8$ giá trị).<br>Tổng cộng $17$ giá trị.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131TL2",
    "question": "Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)=2x^3-3x^2-12x+1$ trên đoạn $[-2;3]$. Tính $M+m$.",
    "answer": "-11",
    "explain": "$f'(x)=6x^2-6x-12=6(x+1)(x-2)$, $f'(x)=0\\Leftrightarrow x=-1$ hoặc $x=2$ (đều thuộc $[-2;3]$).<br>$f(-2)=-3$, $f(-1)=8$, $f(2)=-19$, $f(3)=-8$.<br>$M=8$, $m=-19$, nên $M+m=-11$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131TL3",
    "question": "Tính giới hạn $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x-x\\cos x}{x-\\sin x}$.",
    "answer": "2",
    "explain": "Dạng $\\dfrac00$. Áp dụng quy tắc L'Hospital:<br>$\\displaystyle\\lim_{x\\to0}\\dfrac{\\cos x-\\cos x+x\\sin x}{1-\\cos x}=\\lim_{x\\to0}\\dfrac{x\\sin x}{1-\\cos x}$ (vẫn dạng $\\dfrac00$).<br>Áp dụng tiếp: $\\displaystyle\\lim_{x\\to0}\\dfrac{\\sin x+x\\cos x}{\\sin x}=\\lim_{x\\to0}\\left(1+\\dfrac{x}{\\sin x}\\cos x\\right)=1+1=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131TL4",
    "question": "Biết $\\displaystyle\\lim_{x\\to 0}\\left(\\dfrac{1+\\tan x}{1+\\sin x}\\right)^{\\frac{1}{x^3}}=e^{a}$. Tìm $a$.",
    "answer": "0,5",
    "explain": "Dạng $1^\\infty$: $\\left(\\dfrac{1+\\tan x}{1+\\sin x}\\right)^{\\frac{1}{x^3}}=e^{\\frac{1}{x^3}\\ln\\frac{1+\\tan x}{1+\\sin x}}$.<br>$\\ln\\dfrac{1+\\tan x}{1+\\sin x}=\\ln\\left(1+\\dfrac{\\tan x-\\sin x}{1+\\sin x}\\right)\\sim\\dfrac{\\tan x-\\sin x}{1+\\sin x}\\sim\\tan x-\\sin x$.<br>$\\tan x-\\sin x=\\tan x(1-\\cos x)\\sim\\dfrac{x^3}{2}$ (cũng có thể dùng L'Hospital ba lần cho $\\dfrac{\\tan x-\\sin x}{x^3}$).<br>Do đó số mũ dần tới $\\dfrac12$, giới hạn bằng $e^{1/2}$, tức $a=0{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131TL5",
    "question": "Cho hàm số $f(x)=\\ln\\left(1+x+x^2\\right)$. Dựa vào khai triển Maclaurin, tính $f'''(0)$.",
    "answer": "-4",
    "explain": "Với $x\\neq1$: $1+x+x^2=\\dfrac{1-x^3}{1-x}$ nên $f(x)=\\ln\\left(1-x^3\\right)-\\ln(1-x)$.<br>$\\ln(1-x^3)=-x^3+o(x^3)$; $-\\ln(1-x)=x+\\dfrac{x^2}{2}+\\dfrac{x^3}{3}+o(x^3)$.<br>$f(x)=x+\\dfrac{x^2}{2}-\\dfrac{2x^3}{3}+o(x^3)$.<br>Hệ số của $x^3$ là $\\dfrac{f'''(0)}{3!}=-\\dfrac23$ nên $f'''(0)=-\\dfrac23\\cdot6=-4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131TL6",
    "question": "Áp dụng định lý Lagrange cho hàm số $f(x)=\\sqrt{x}$ trên đoạn $[1;9]$. Tìm số $c\\in(1;9)$ thỏa mãn $f(9)-f(1)=f'(c)\\,(9-1)$.",
    "answer": "4",
    "explain": "$f$ liên tục trên $[1;9]$, khả vi trên $(1;9)$ nên thỏa định lý Lagrange.<br>$\\dfrac{f(9)-f(1)}{9-1}=\\dfrac{3-1}{8}=\\dfrac14$, $f'(c)=\\dfrac{1}{2\\sqrt c}$.<br>$\\dfrac{1}{2\\sqrt c}=\\dfrac14\\Leftrightarrow\\sqrt c=2\\Leftrightarrow c=4\\in(1;9)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
