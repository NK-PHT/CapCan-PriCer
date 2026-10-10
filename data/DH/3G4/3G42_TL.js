window.traLoiNgan3G42 = [
  {
    "id": "3G421TL1",
    "question": "Tìm giá trị cực đại của hàm số $f(x,y)=x^3-3x+y^3-12y+5$.",
    "answer": "23",
    "explain": "$f'_x=3x^2-3=0\\Rightarrow x=\\pm1$; $f'_y=3y^2-12=0\\Rightarrow y=\\pm2$: bốn điểm dừng.<br>$A=f''_{xx}=6x$, $B=0$, $C=f''_{yy}=6y$, $AC-B^2=36xy$.<br>$(1,-2)$ và $(-1,2)$: $AC-B^2\\lt 0$, không là cực trị. $(1,2)$: $AC-B^2\\gt 0$, $A\\gt 0$, cực tiểu.<br>$(-1,-2)$: $AC-B^2=72\\gt 0$, $A=-6\\lt 0$, cực đại: $f(-1,-2)=-1+3-8+24+5=23$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421TL2",
    "question": "Tìm giá trị cực tiểu của hàm số $f(x,y)=x^2+xy+y^2-6x-9y$.",
    "answer": "-21",
    "explain": "$f'_x=2x+y-6=0$, $f'_y=x+2y-9=0$ $\\Rightarrow x=1$, $y=4$.<br>$A=2$, $B=1$, $C=2$, $AC-B^2=3\\gt 0$, $A\\gt 0$ nên $(1,4)$ là điểm cực tiểu.<br>$f_{CT}=f(1,4)=1+4+16-6-36=-21$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421TL3",
    "question": "Cho hàm số $f(x,y)=x^2+mxy+4y^2$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ để $f$ đạt cực tiểu chặt tại $O(0,0)$ (tức là $f(x,y)\\gt f(0,0)$ với mọi $(x,y)\\neq(0,0)$ đủ gần $O$)?",
    "answer": "7",
    "explain": "$O$ luôn là điểm dừng. $A=2$, $B=m$, $C=8$, $AC-B^2=16-m^2$.<br>• $16-m^2\\gt 0\\Leftrightarrow -4\\lt m\\lt 4$: $A\\gt 0$ nên $O$ là điểm cực tiểu chặt.<br>• $m=\\pm4$: $f=(x\\pm2y)^2$ bằng $0=f(0,0)$ trên cả đường thẳng $x\\pm2y=0$, nên không là cực tiểu chặt.<br>• $|m|\\gt 4$: $AC-B^2\\lt 0$, không là cực trị.<br>Các giá trị nguyên: $m\\in\\{-3,-2,-1,0,1,2,3\\}$, gồm $7$ giá trị.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421TL4",
    "question": "Tìm giá trị cực đại của hàm số $f(x,y)=xy$ với điều kiện $x^2+9y^2=18$.",
    "answer": "3",
    "explain": "$L=xy+\\lambda(x^2+9y^2-18)$. $L'_x=y+2\\lambda x=0$, $L'_y=x+18\\lambda y=0$ $\\Rightarrow x=36\\lambda^2x$.<br>$x=0$ kéo theo $y=0$, không thỏa điều kiện; vậy $\\lambda=\\pm\\dfrac16$.<br>$\\lambda=-\\dfrac16$: $y=\\dfrac x3$, $2x^2=18$: điểm $(3,1)$, $(-3,-1)$, $f=3$.<br>$\\lambda=\\dfrac16$: $y=-\\dfrac x3$: điểm $(3,-1)$, $(-3,1)$, $f=-3$.<br>Tại $(3,1)$, $\\lambda=-\\dfrac16$: $d^2L=-\\dfrac13dx^2+2dx\\,dy-3dy^2$; từ $2x\\,dx+18y\\,dy=0$ có $dx=-3dy$, nên $d^2L=-12dy^2\\lt 0$: cực đại (tương tự tại $(-3,-1)$).<br>Giá trị cực đại bằng $3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421TL5",
    "question": "Tìm giá trị lớn nhất của tích $xy$, biết $x\\gt 0$, $y\\gt 0$ và $2x+3y=24$.",
    "answer": "24",
    "explain": "$L=xy+\\lambda(2x+3y-24)$: $L'_x=y+2\\lambda=0$, $L'_y=x+3\\lambda=0$, nên $x=-3\\lambda$, $y=-2\\lambda$.<br>Thay vào $2x+3y=24$: $-12\\lambda=24$, $\\lambda=-2$, được $(x,y)=(6,4)$.<br>$d^2L=2dx\\,dy$ với $2dx+3dy=0$, tức $dy=-\\dfrac23dx$: $d^2L=-\\dfrac43dx^2\\lt 0$, nên đây là cực đại.<br>Trên đoạn $0\\lt x\\lt 12$, $xy=\\dfrac{x(24-2x)}{3}\\to0$ ở hai đầu, nên GTLN là $6\\cdot4=24$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421TL6",
    "question": "Gọi $M$, $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x,y)=x^2+y^2-xy-x-y$ trên miền tam giác đóng $D$ giới hạn bởi các đường $x=0$, $y=0$, $x+y=3$. Tính $M+m$.",
    "answer": "5",
    "explain": "Điểm dừng trong $D$: $f'_x=2x-y-1=0$, $f'_y=2y-x-1=0\\Rightarrow(1,1)$, $f(1,1)=-1$.<br>Biên $x=0$: $g(y)=y^2-y$, $y\\in[0,3]$: các giá trị $0$, $-\\dfrac14$ (tại $y=\\dfrac12$), $6$ (tại $y=3$). Biên $y=0$ tương tự.<br>Biên $x+y=3$: $g(x)=3x^2-9x+6$, $x\\in[0,3]$: các giá trị $6$, $-\\dfrac34$ (tại $x=\\dfrac32$), $6$.<br>So sánh: $M=6$, $m=-1$, nên $M+m=5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
