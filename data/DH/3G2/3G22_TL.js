window.traLoiNgan3G22 = [
  {
    "id": "3G221TL1",
    "question": "Cho $I=\\displaystyle\\int_0^4\\dfrac{x}{\\sqrt{2x+1}}\\,dx$. Tính giá trị của $3I$.",
    "answer": "10",
    "explain": "Đặt $t=\\sqrt{2x+1}\\Rightarrow x=\\dfrac{t^2-1}{2}$, $dx=t\\,dt$; $x=0\\Rightarrow t=1$, $x=4\\Rightarrow t=3$.<br>$I=\\displaystyle\\int_1^3\\dfrac{t^2-1}{2t}\\cdot t\\,dt=\\dfrac12\\int_1^3 (t^2-1)\\,dt=\\dfrac12\\left.\\left(\\dfrac{t^3}{3}-t\\right)\\right|_1^3=\\dfrac12\\left(6+\\dfrac23\\right)=\\dfrac{10}{3}$.<br>Vậy $3I=10$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL2",
    "question": "Cho $I=\\displaystyle\\int_0^{\\pi/2}\\sin^2 x\\cos^3 x\\,dx$. Tính giá trị của $15I$.",
    "answer": "2",
    "explain": "$\\cos^3x\\,dx=(1-\\sin^2x)\\cos x\\,dx$. Đặt $t=\\sin x\\Rightarrow dt=\\cos x\\,dx$; $x=0\\Rightarrow t=0$, $x=\\dfrac\\pi2\\Rightarrow t=1$.<br>$I=\\displaystyle\\int_0^1 t^2(1-t^2)\\,dt=\\dfrac13-\\dfrac15=\\dfrac{2}{15}$.<br>Vậy $15I=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL3",
    "question": "Tính tích phân $\\displaystyle\\int_1^{e^8}\\dfrac{dx}{x\\sqrt{1+\\ln x}}$.",
    "answer": "4",
    "explain": "Đặt $t=1+\\ln x\\Rightarrow dt=\\dfrac{dx}{x}$; $x=1\\Rightarrow t=1$, $x=e^8\\Rightarrow t=9$.<br>Tích phân bằng $\\displaystyle\\int_1^9 t^{-1/2}\\,dt=\\left.2\\sqrt t\\right|_1^9=2(3-1)=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL4",
    "question": "Tính tích phân $\\displaystyle\\int_0^1 x\\ln(1+x)\\,dx$ (viết kết quả dưới dạng số thập phân).",
    "answer": "0,25",
    "explain": "Đặt $u=\\ln(1+x)$, $dv=x\\,dx\\Rightarrow du=\\dfrac{dx}{1+x}$, $v=\\dfrac{x^2}{2}$.<br>$I=\\left.\\dfrac{x^2}{2}\\ln(1+x)\\right|_0^1-\\dfrac12\\displaystyle\\int_0^1\\dfrac{x^2}{1+x}\\,dx=\\dfrac{\\ln 2}{2}-\\dfrac12\\int_0^1\\left(x-1+\\dfrac{1}{1+x}\\right)dx$<br>$=\\dfrac{\\ln 2}{2}-\\dfrac12\\left(\\dfrac12-1+\\ln 2\\right)=\\dfrac14=0{,}25$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL5",
    "question": "Tính tích phân $\\displaystyle\\int_0^{\\pi^2/4}\\sin\\sqrt{x}\\,dx$.",
    "answer": "2",
    "explain": "Đặt $t=\\sqrt x\\Rightarrow x=t^2$, $dx=2t\\,dt$; $x=0\\Rightarrow t=0$, $x=\\dfrac{\\pi^2}{4}\\Rightarrow t=\\dfrac\\pi2$. Tích phân bằng $2\\displaystyle\\int_0^{\\pi/2}t\\sin t\\,dt$.<br>Từng phần với $u=t$, $dv=\\sin t\\,dt$: $\\displaystyle\\int_0^{\\pi/2}t\\sin t\\,dt=\\left.-t\\cos t\\right|_0^{\\pi/2}+\\int_0^{\\pi/2}\\cos t\\,dt=0+1=1$.<br>Vậy tích phân bằng $2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL6",
    "question": "Biết $\\displaystyle\\int_1^e (4x+1)\\ln x\\,dx=ae^2+b$ với $a$, $b$ là các số nguyên. Tính $a+b$.",
    "answer": "3",
    "explain": "Đặt $u=\\ln x$, $dv=(4x+1)\\,dx\\Rightarrow du=\\dfrac{dx}{x}$, $v=2x^2+x$.<br>Tích phân bằng $\\left.(2x^2+x)\\ln x\\right|_1^e-\\displaystyle\\int_1^e (2x+1)\\,dx=(2e^2+e)-\\left.(x^2+x)\\right|_1^e=2e^2+e-(e^2+e-2)=e^2+2$.<br>Do đó $a=1$, $b=2$ (duy nhất vì $e^2$ là số vô tỉ) và $a+b=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
