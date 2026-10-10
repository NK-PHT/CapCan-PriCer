window.traLoiNgan3G12 = [
  {
    "id": "3G121TL1",
    "question": "Cho hàm số $f(x)=\\begin{cases} x^3-x & \\text{khi } x\\le 2 \\\\ ax+b & \\text{khi } x\\gt 2 \\end{cases}$. Biết $f$ có đạo hàm tại $x=2$. Tính $a+b$.",
    "answer": "-5",
    "explain": "$f$ có đạo hàm tại $x=2$ thì $f$ liên tục tại $x=2$: $2a+b=f(2)=8-2=6$.<br>$f'_-(2)=\\displaystyle\\lim_{\\Delta x\\to0^-}\\dfrac{(2+\\Delta x)^3-(2+\\Delta x)-6}{\\Delta x}=\\lim_{\\Delta x\\to0^-}\\left(11+6\\Delta x+\\Delta x^2\\right)=11$.<br>$f'_+(2)=\\displaystyle\\lim_{\\Delta x\\to0^+}\\dfrac{a(2+\\Delta x)+b-6}{\\Delta x}=\\lim_{\\Delta x\\to0^+}\\dfrac{a\\Delta x}{\\Delta x}=a$ (dùng $2a+b=6$).<br>Cần $a=11$, suy ra $b=6-22=-16$. Vậy $a+b=-5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121TL2",
    "question": "Dùng công thức xấp xỉ bằng vi phân $f(x_0+\\Delta x)\\approx f(x_0)+f'(x_0)\\,\\Delta x$ với $f(x)=\\sqrt[3]{x}$ và $x_0=8$, hãy tính giá trị gần đúng của $\\sqrt[3]{8{,}24}$.",
    "answer": "2,02",
    "explain": "$f'(x)=\\dfrac{1}{3\\sqrt[3]{x^2}}$, $f(8)=2$, $f'(8)=\\dfrac{1}{3\\cdot4}=\\dfrac{1}{12}$, $\\Delta x=0{,}24$.<br>$\\sqrt[3]{8{,}24}\\approx 2+\\dfrac{1}{12}\\cdot0{,}24=2+0{,}02=2{,}02$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121TL3",
    "question": "Cho hàm số $f(x)=x^5+x^3+2x$ và $g$ là hàm ngược của $f$. Tính $g'(4)$.",
    "answer": "0,1",
    "explain": "$f'(x)=5x^4+3x^2+2\\gt 0$ nên $f$ đồng biến trên $\\mathbb{R}$ và có hàm ngược $g$.<br>$f(1)=1+1+2=4$ nên $g(4)=1$.<br>$g'(4)=\\dfrac{1}{f'(1)}=\\dfrac{1}{5+3+2}=\\dfrac{1}{10}=0{,}1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121TL4",
    "question": "Cho hàm ẩn $y=y(x)$ xác định bởi phương trình $xy^2+y^3+2x=8$ và $y(0)=2$. Tính $y'(0)$.",
    "answer": "-0,5",
    "explain": "Đạo hàm hai vế theo $x$ (với $y=y(x)$): $y^2+2xyy'+3y^2y'+2=0$.<br>Tại $x=0$, $y=2$ (thỏa $0+8+0=8$): $4+0+12y'(0)+2=0\\Rightarrow y'(0)=-\\dfrac{6}{12}=-0{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121TL5",
    "question": "Cho hàm số $y=y(x)$ xác định bởi phương trình tham số $x=2t-t^2,\\ y=3t-t^3$. Tính đạo hàm cấp hai $\\dfrac{d^2y}{dx^2}$ tại điểm ứng với $t=0$.",
    "answer": "0,75",
    "explain": "$x'(t)=2-2t$, $y'(t)=3-3t^2$.<br>$\\dfrac{dy}{dx}=\\dfrac{3(1-t)(1+t)}{2(1-t)}=\\dfrac{3(1+t)}{2}$ (với $t\\neq1$).<br>$\\dfrac{d^2y}{dx^2}=\\dfrac{\\left(\\frac{3(1+t)}{2}\\right)'_t}{x'(t)}=\\dfrac{3/2}{2-2t}$.<br>Tại $t=0$: $\\dfrac{3/2}{2}=\\dfrac34=0{,}75$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121TL6",
    "question": "Cho hàm số $f(x)=\\left(x^2+1\\right)e^{-x}$. Tính đạo hàm cấp mười $f^{(10)}(0)$.",
    "answer": "91",
    "explain": "Áp dụng công thức Leibniz với $u=x^2+1$, $v=e^{-x}$, chú ý $u'''=0$ và $v^{(k)}=(-1)^ke^{-x}$:<br>$f^{(10)}=u\\,v^{(10)}+\\mathrm{C}_{10}^{1}u'v^{(9)}+\\mathrm{C}_{10}^{2}u''v^{(8)}=(x^2+1)e^{-x}-10\\cdot2x\\,e^{-x}+45\\cdot2\\,e^{-x}$.<br>Tại $x=0$: $f^{(10)}(0)=1-0+90=91$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
