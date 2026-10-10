window.traLoiNgan3G21 = [
  {
    "id": "3G211TL1",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số $f(x)=6\\sqrt{x}-\\dfrac{2}{x^2}$ trên khoảng $(0;+\\infty)$ và $F(1)=3$. Tính $F(4)$.",
    "answer": "29,5",
    "explain": "$F(x)=\\displaystyle\\int\\left(6x^{1/2}-2x^{-2}\\right)dx=4x^{3/2}+\\dfrac{2}{x}+C$.<br>$F(1)=4+2+C=3\\Rightarrow C=-3$.<br>$F(4)=4\\cdot 8+\\dfrac{2}{4}-3=29{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211TL2",
    "question": "Cho $I=\\displaystyle\\int_0^3 |x^2-3x+2|\\,dx$. Tính giá trị của $6I$.",
    "answer": "11",
    "explain": "$x^2-3x+2=(x-1)(x-2)$: không âm trên $[0;1]$ và $[2;3]$, không dương trên $[1;2]$.<br>Đặt $P(x)=\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}+2x$ (một nguyên hàm của $x^2-3x+2$): $P(0)=0$, $P(1)=\\dfrac56$, $P(2)=\\dfrac23$, $P(3)=\\dfrac32$.<br>$I=\\left[P(1)-P(0)\\right]-\\left[P(2)-P(1)\\right]+\\left[P(3)-P(2)\\right]=\\dfrac56+\\dfrac16+\\dfrac56=\\dfrac{11}{6}$.<br>Vậy $6I=11$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211TL3",
    "question": "Tìm số thực $m\\gt 0$ sao cho $\\displaystyle\\int_0^m (2x-1)\\,dx=6$.",
    "answer": "3",
    "explain": "$\\displaystyle\\int_0^m (2x-1)\\,dx=\\left.(x^2-x)\\right|_0^m=m^2-m$.<br>$m^2-m=6\\Leftrightarrow m^2-m-6=0\\Leftrightarrow m=3$ hoặc $m=-2$.<br>Do $m\\gt 0$ nên $m=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211TL4",
    "question": "Tính diện tích hình phẳng giới hạn bởi đồ thị hai hàm số $y=x^2-2x$ và $y=x$.",
    "answer": "4,5",
    "explain": "Phương trình hoành độ giao điểm: $x^2-2x=x\\Leftrightarrow x=0$ hoặc $x=3$.<br>Trên $[0;3]$: $x-(x^2-2x)=3x-x^2\\ge 0$.<br>$S=\\displaystyle\\int_0^3 (3x-x^2)\\,dx=\\left.\\left(\\dfrac{3x^2}{2}-\\dfrac{x^3}{3}\\right)\\right|_0^3=\\dfrac{27}{2}-9=\\dfrac92=4{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211TL5",
    "question": "Gọi $V$ là thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi các đường $y=\\sqrt{x^2+1}$, $y=0$, $x=0$, $x=3$ quanh trục $Ox$. Biết $V=a\\pi$, tìm $a$.",
    "answer": "12",
    "explain": "$V=\\pi\\displaystyle\\int_0^3 \\left(\\sqrt{x^2+1}\\right)^2dx=\\pi\\int_0^3 (x^2+1)\\,dx=\\pi\\left.\\left(\\dfrac{x^3}{3}+x\\right)\\right|_0^3=12\\pi$.<br>Vậy $a=12$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211TL6",
    "question": "Cho hàm số $F(x)=\\displaystyle\\int_1^{x^2}\\sqrt{t^2+9}\\,dt$. Tính $F'(2)$.",
    "answer": "20",
    "explain": "Theo định lý đạo hàm của tích phân theo cận trên (cận trên là $u(x)=x^2$):<br>$F'(x)=\\sqrt{(x^2)^2+9}\\cdot(x^2)'=2x\\sqrt{x^4+9}$.<br>$F'(2)=4\\sqrt{16+9}=4\\cdot 5=20$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
