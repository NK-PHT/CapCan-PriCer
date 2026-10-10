window.traLoiNgan3G43 = [
  {
    "id": "3G431TL1",
    "question": "Tính $I=\\displaystyle\\iint_D(4x+3)\\,dx\\,dy$, trong đó $D$ là miền giới hạn bởi parabol $y=x^2$ và đường thẳng $y=2-x$.",
    "answer": "4,5",
    "explain": "Hoành độ giao điểm: $x^2=2-x\\Leftrightarrow x=-2$ hoặc $x=1$; $D=\\{-2\\le x\\le1,\\ x^2\\le y\\le2-x\\}$.<br>$I=\\displaystyle\\int_{-2}^1(4x+3)(2-x-x^2)\\,dx=\\int_{-2}^1(-4x^3-7x^2+5x+6)\\,dx$.<br>$=\\left[-x^4-\\dfrac{7x^3}{3}+\\dfrac{5x^2}{2}+6x\\right]_{-2}^{1}=\\dfrac{31}{6}-\\dfrac23=\\dfrac92=4{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431TL2",
    "question": "Cho $I=\\displaystyle\\int_0^4\\int_{\\sqrt y}^{2}\\sqrt{1+x^3}\\,dx\\,dy$. Bằng cách đổi thứ tự lấy tích phân, hãy tính giá trị của $9I$.",
    "answer": "52",
    "explain": "Miền lấy tích phân: $0\\le y\\le4$, $\\sqrt y\\le x\\le2$, tức $0\\le x\\le2$, $0\\le y\\le x^2$.<br>$I=\\displaystyle\\int_0^2\\int_0^{x^2}\\sqrt{1+x^3}\\,dy\\,dx=\\int_0^2x^2\\sqrt{1+x^3}\\,dx$.<br>Đặt $w=1+x^3$, $dw=3x^2dx$: $I=\\dfrac13\\displaystyle\\int_1^9\\sqrt w\\,dw=\\dfrac29\\left(27-1\\right)=\\dfrac{52}{9}$.<br>Vậy $9I=52$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431TL3",
    "question": "Tính $I=\\displaystyle\\iint_D\\sqrt{x^2+y^2}\\,dx\\,dy$ với $D$ là hình tròn $x^2+y^2\\le2x$. Cho biết giá trị của $9I$.",
    "answer": "32",
    "explain": "Tọa độ cực $x=r\\cos\\theta$, $y=r\\sin\\theta$: $x^2+y^2\\le2x\\Leftrightarrow r\\le2\\cos\\theta$, với $-\\dfrac\\pi2\\le\\theta\\le\\dfrac\\pi2$.<br>$I=\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\int_0^{2\\cos\\theta}r\\cdot r\\,dr\\,d\\theta=\\int_{-\\pi/2}^{\\pi/2}\\dfrac{8\\cos^3\\theta}{3}\\,d\\theta$.<br>$\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\cos^3\\theta\\,d\\theta=\\left[\\sin\\theta-\\dfrac{\\sin^3\\theta}{3}\\right]_{-\\pi/2}^{\\pi/2}=\\dfrac43$, nên $I=\\dfrac83\\cdot\\dfrac43=\\dfrac{32}9$ và $9I=32$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431TL4",
    "question": "Tính $I=\\displaystyle\\iint_D(x+y)(x-2y)\\,dx\\,dy$, trong đó $D$ là hình bình hành giới hạn bởi các đường thẳng $x+y=0$, $x+y=2$, $x-2y=0$, $x-2y=3$ (gợi ý: đặt $u=x+y$, $v=x-2y$).",
    "answer": "3",
    "explain": "Đặt $u=x+y$, $v=x-2y$; miền mới $0\\le u\\le2$, $0\\le v\\le3$.<br>$\\dfrac{\\partial(u,v)}{\\partial(x,y)}=\\begin{vmatrix} 1 & 1 \\\\ 1 & -2 \\end{vmatrix}=-3$ nên $\\left|\\dfrac{\\partial(x,y)}{\\partial(u,v)}\\right|=\\dfrac13$.<br>$I=\\displaystyle\\int_0^3\\int_0^2uv\\cdot\\dfrac13\\,du\\,dv=\\dfrac13\\cdot\\dfrac{2^2}{2}\\cdot\\dfrac{3^2}{2}=\\dfrac13\\cdot2\\cdot\\dfrac92=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431TL5",
    "question": "Tính $I=\\displaystyle\\iiint_V(x+y+z)\\,dx\\,dy\\,dz$, với $V$ là khối tứ diện giới hạn bởi mặt phẳng $2x+y+z=4$ và ba mặt phẳng tọa độ. Cho biết giá trị của $3I$.",
    "answer": "40",
    "explain": "$V=\\{0\\le x\\le2,\\ 0\\le y\\le4-2x,\\ 0\\le z\\le4-2x-y\\}$.<br>Thể tích $|V|=\\dfrac16\\cdot2\\cdot4\\cdot4=\\dfrac{16}3$; trọng tâm tứ diện có tọa độ là trung bình cộng các đỉnh $(0,0,0)$, $(2,0,0)$, $(0,4,0)$, $(0,0,4)$: $\\left(\\dfrac12,1,1\\right)$.<br>Do đó $\\displaystyle\\iiint_Vx=\\dfrac12|V|=\\dfrac83$, $\\displaystyle\\iiint_Vy=\\iiint_Vz=|V|=\\dfrac{16}3$ (có thể kiểm tra bằng tích phân lặp, ví dụ $\\displaystyle\\int_0^2\\int_0^{4-2x}x(4-2x-y)\\,dy\\,dx=\\int_0^2\\dfrac{x(4-2x)^2}{2}dx=\\dfrac83$).<br>$I=\\dfrac83+\\dfrac{16}3+\\dfrac{16}3=\\dfrac{40}3$, nên $3I=40$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431TL6",
    "question": "Tính $I=\\displaystyle\\iiint_V(x^2+y^2+z^2)\\,dx\\,dy\\,dz$, với $V$ là miền xác định bởi $1\\le x^2+y^2+z^2\\le4$ và $z\\ge0$. Cho biết giá trị của $\\dfrac{5I}{\\pi}$.",
    "answer": "62",
    "explain": "Tọa độ cầu $x=\\rho\\cos\\theta\\sin\\varphi$, $y=\\rho\\sin\\theta\\sin\\varphi$, $z=\\rho\\cos\\varphi$, $|J|=\\rho^2\\sin\\varphi$.<br>$V=\\left\\{0\\le\\theta\\le2\\pi,\\ 0\\le\\varphi\\le\\dfrac\\pi2,\\ 1\\le\\rho\\le2\\right\\}$.<br>$I=\\displaystyle\\int_0^{2\\pi}d\\theta\\int_0^{\\pi/2}\\sin\\varphi\\,d\\varphi\\int_1^2\\rho^2\\cdot\\rho^2\\,d\\rho=2\\pi\\cdot1\\cdot\\dfrac{32-1}{5}=\\dfrac{62\\pi}{5}$.<br>Vậy $\\dfrac{5I}{\\pi}=62$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
