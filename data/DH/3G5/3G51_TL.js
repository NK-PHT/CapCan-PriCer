window.traLoiNgan3G51 = [
  {
    "id": "3G511TL1",
    "question": "Giải bài toán Cauchy $y'=\\dfrac{x}{y}$, $y(0)=3$ (với $y\\gt 0$). Tính $y(4)$.",
    "answer": "5",
    "explain": "Tách biến: $y\\,dy=x\\,dx\\Rightarrow\\dfrac{y^2}{2}=\\dfrac{x^2}{2}+C_1\\Rightarrow y^2=x^2+C$.<br>Từ $y(0)=3$: $C=9$. Vì $y\\gt 0$ nên $y=\\sqrt{x^2+9}$.<br>$y(4)=\\sqrt{16+9}=5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511TL2",
    "question": "Giải bài toán Cauchy $y'=y^2\\cos x$, $y(0)=1$. Tính $y\\left(\\dfrac{\\pi}{6}\\right)$.",
    "answer": "2",
    "explain": "Với $y\\neq0$, tách biến: $\\dfrac{dy}{y^2}=\\cos x\\,dx\\Rightarrow-\\dfrac1y=\\sin x+C$.<br>Từ $y(0)=1$: $-1=0+C\\Rightarrow C=-1$, nên $y=\\dfrac{1}{1-\\sin x}$.<br>$y\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{1}{1-\\frac12}=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511TL3",
    "question": "Giải phương trình $(x+2y)\\,dx-x\\,dy=0$ ($x\\gt 0$) bằng cách đưa về phương trình đẳng cấp $y'=1+2\\dfrac{y}{x}$, với điều kiện đầu $y(1)=2$. Tính $y(2)$.",
    "answer": "10",
    "explain": "Đặt $y=tx\\Rightarrow y'=t+xt'$. Phương trình thành $t+xt'=1+2t\\Leftrightarrow\\dfrac{dt}{1+t}=\\dfrac{dx}{x}$.<br>Tích phân: $\\ln|1+t|=\\ln x+C_1\\Rightarrow1+t=Cx$, tức $1+\\dfrac yx=Cx\\Rightarrow y=Cx^2-x$.<br>Từ $y(1)=2$: $C-1=2\\Rightarrow C=3$, $y=3x^2-x$.<br>$y(2)=12-2=10$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511TL4",
    "question": "Giải bài toán Cauchy $y'=1+(x-y)^2$, $y(0)=1$ bằng phép đổi biến $z=x-y$ (xét nghiệm trên khoảng $(-\\infty;1)$). Tính $y\\left(\\dfrac12\\right)$ (viết kết quả dưới dạng số thập phân).",
    "answer": "2,5",
    "explain": "Đặt $z=x-y\\Rightarrow z'=1-y'=-(x-y)^2=-z^2$.<br>Với $z\\neq0$: $-\\dfrac{dz}{z^2}=dx\\Rightarrow\\dfrac1z=x+C$.<br>Tại $x=0$: $z=0-1=-1$ nên $C=-1$, $z=\\dfrac{1}{x-1}$, suy ra $y=x-\\dfrac{1}{x-1}$ (xác định trên $(-\\infty;1)$).<br>$y\\left(\\dfrac12\\right)=\\dfrac12-\\dfrac{1}{-\\frac12}=\\dfrac12+2=2{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511TL5",
    "question": "Cho phương trình đẳng cấp $x^2y'=y^2+3xy+x^2$ ($x\\gt 0$). Tìm hằng số $a$ để hàm $y=ax$ là một nghiệm của phương trình.",
    "answer": "-1",
    "explain": "Thay $y=ax$, $y'=a$: $ax^2=a^2x^2+3ax^2+x^2\\Leftrightarrow a^2+2a+1=0\\Leftrightarrow(a+1)^2=0\\Rightarrow a=-1$.<br>(Tương đương: đặt $y=tx$ ta được $xt'=(t+1)^2$; nghiệm hằng $t=-1$ cho $y=-x$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511TL6",
    "question": "Giải bài toán Cauchy $y'=\\dfrac{1+y^2}{1+x^2}$, $y(0)=1$. Tính $y\\left(\\dfrac12\\right)$.",
    "answer": "3",
    "explain": "Tách biến: $\\dfrac{dy}{1+y^2}=\\dfrac{dx}{1+x^2}\\Rightarrow\\arctan y=\\arctan x+C$.<br>Từ $y(0)=1$: $C=\\arctan1=\\dfrac{\\pi}{4}$.<br>$y=\\tan\\left(\\arctan x+\\dfrac\\pi4\\right)=\\dfrac{x+1}{1-x}$ (xác định với $x\\lt 1$).<br>$y\\left(\\dfrac12\\right)=\\dfrac{\\frac32}{\\frac12}=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
