window.traLoiNgan3G11 = [
  {
    "id": "3G111TL1",
    "question": "Cho hàm số $f(x)=\\dfrac{x^2-x-6}{|x-3|}$. Tính $\\displaystyle\\lim_{x\\to 3^-}f(x)$.",
    "answer": "-5",
    "explain": "Khi $x\\to 3^-$ thì $x \\lt 3$ nên $|x-3|=3-x$.<br>$f(x)=\\dfrac{(x-3)(x+2)}{3-x}=-(x+2)$.<br>Do đó $\\displaystyle\\lim_{x\\to 3^-}f(x)=-(3+2)=-5$.<br>(Tương tự $\\displaystyle\\lim_{x\\to3^+}f(x)=5$ nên $f$ không có giới hạn tại $x=3$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111TL2",
    "question": "Tính giới hạn $\\displaystyle L=\\lim_{x\\to 0}\\dfrac{\\ln\\left(1+x\\tan 2x\\right)+1-\\cos 3x}{\\sqrt{1+x^2}-1}$.",
    "answer": "13",
    "explain": "Khi $x\\to 0$: $x\\tan 2x\\sim 2x^2$ nên $\\ln(1+x\\tan 2x)\\sim x\\tan 2x\\sim 2x^2$; $1-\\cos 3x\\sim\\dfrac{9x^2}{2}$; $\\sqrt{1+x^2}-1\\sim\\dfrac{x^2}{2}$.<br>Hai vô cùng bé ở tử cùng bậc $2$ và tổng hệ số $2+\\dfrac92=\\dfrac{13}{2}\\neq0$ nên tử số $\\sim\\dfrac{13}{2}x^2$.<br>$L=\\displaystyle\\lim_{x\\to0}\\dfrac{\\frac{13}{2}x^2}{\\frac{1}{2}x^2}=13$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111TL3",
    "question": "Tính giới hạn $\\displaystyle\\lim_{x\\to +\\infty}\\left(\\sqrt[3]{x^3+3x^2}-\\sqrt{x^2-2x}\\right)$.",
    "answer": "2",
    "explain": "Tách: $\\sqrt[3]{x^3+3x^2}-\\sqrt{x^2-2x}=\\left(\\sqrt[3]{x^3+3x^2}-x\\right)-\\left(\\sqrt{x^2-2x}-x\\right)$.<br>Đặt $A=\\sqrt[3]{x^3+3x^2}$: $A-x=\\dfrac{A^3-x^3}{A^2+Ax+x^2}=\\dfrac{3x^2}{A^2+Ax+x^2}\\to\\dfrac{3}{1+1+1}=1$ (vì $A\\sim x$).<br>$\\sqrt{x^2-2x}-x=\\dfrac{-2x}{\\sqrt{x^2-2x}+x}\\to\\dfrac{-2}{2}=-1$.<br>Vậy giới hạn bằng $1-(-1)=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111TL4",
    "question": "Cho hàm số $f(x)=\\begin{cases} \\dfrac{x^2-4}{\\sqrt{x+2}-2} & \\text{khi } x\\gt 2 \\\\ ax+6 & \\text{khi } x\\le 2 \\end{cases}$. Tìm giá trị của tham số $a$ để $f$ liên tục tại $x=2$.",
    "answer": "5",
    "explain": "$f(2)=2a+6=\\displaystyle\\lim_{x\\to2^-}f(x)$.<br>$\\displaystyle\\lim_{x\\to2^+}\\dfrac{x^2-4}{\\sqrt{x+2}-2}=\\lim_{x\\to2^+}\\dfrac{(x-2)(x+2)\\left(\\sqrt{x+2}+2\\right)}{x+2-4}=\\lim_{x\\to2^+}(x+2)\\left(\\sqrt{x+2}+2\\right)=4\\cdot4=16$.<br>$f$ liên tục tại $x=2\\Leftrightarrow 2a+6=16\\Leftrightarrow a=5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111TL5",
    "question": "Cho hàm số $f(x)=\\begin{cases} \\dfrac{1-\\cos 2x}{x^2} & \\text{khi } x \\lt 0 \\\\ ax+b & \\text{khi } 0\\le x\\le 2 \\\\ \\dfrac{\\ln(x-1)}{x-2} & \\text{khi } x\\gt 2 \\end{cases}$. Biết $f$ liên tục trên $\\mathbb{R}$. Tính $a+b$.",
    "answer": "1,5",
    "explain": "Tại $x=0$: $\\displaystyle\\lim_{x\\to0^-}\\dfrac{1-\\cos2x}{x^2}=\\lim_{x\\to0^-}\\dfrac{2x^2}{x^2}=2$, $f(0)=b$ nên $b=2$.<br>Tại $x=2$: $\\displaystyle\\lim_{x\\to2^+}\\dfrac{\\ln(x-1)}{x-2}=\\lim_{x\\to2^+}\\dfrac{\\ln\\left(1+(x-2)\\right)}{x-2}=1$, $f(2)=2a+b$ nên $2a+b=1$, suy ra $a=-\\dfrac12$.<br>Vậy $a+b=-\\dfrac12+2=1{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111TL6",
    "question": "Phương trình $x^3-6x+2=0$ có ba nghiệm thực, mỗi nghiệm nằm trong một khoảng dạng $(k;k+1)$ với $k$ là số nguyên. Tính tổng ba số nguyên $k$ đó.",
    "answer": "-1",
    "explain": "Đặt $f(x)=x^3-6x+2$, liên tục trên $\\mathbb{R}$. Ta có $f(-3)=-7$, $f(-2)=6$, $f(0)=2$, $f(1)=-3$, $f(2)=-2$, $f(3)=11$.<br>Theo định lý giá trị trung gian, phương trình có nghiệm trong mỗi khoảng $(-3;-2)$, $(0;1)$, $(2;3)$. Phương trình bậc ba có không quá $3$ nghiệm nên đó là tất cả các nghiệm.<br>Các số $k$ là $-3$, $0$, $2$; tổng bằng $-3+0+2=-1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
