window.traLoiNgan3D41 = [
  {
    "id": "3D411TL1",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^4\\to\\mathbb{R}^3$, $f(x_1,x_2,x_3,x_4)=(x_1+x_2-x_3+2x_4,\\,2x_1+x_2+x_3+x_4,\\,3x_1+2x_2+3x_4)$. Tính $\\dim\\ker f$.",
    "answer": "2",
    "explain": "Ma trận chính tắc $A=\\begin{pmatrix} 1 & 1 & -1 & 2 \\\\ 2 & 1 & 1 & 1 \\\\ 3 & 2 & 0 & 3 \\end{pmatrix}$. Dòng $3$ = dòng $1$ + dòng $2$, hai dòng đầu không tỉ lệ nên $\\mathrm{rank} A=2$.<br>$\\dim\\mathrm{Im} f=2$, theo định lý hạng – số khuyết: $\\dim\\ker f=4-2=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411TL2",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^3$, $f(x,y,z)=(x-2y+z,\\,2x+my+3z,\\,x+y+4z)$. Tìm giá trị của tham số $m$ để $f$ không là đơn ánh.",
    "answer": "-3",
    "explain": "Ma trận chính tắc $A=\\begin{pmatrix} 1 & -2 & 1 \\\\ 2 & m & 3 \\\\ 1 & 1 & 4 \\end{pmatrix}$.<br>$f$ không đơn ánh $\\Leftrightarrow\\ker f\\neq\\{0\\}\\Leftrightarrow\\det A=0$.<br>Khai triển theo dòng $1$: $\\det A=(1)\\cdot(4 m - 3)+(-2)\\cdot(-5)+(1)\\cdot(2 - m)=3 m + 9$.<br>$\\det A=0\\Leftrightarrow m=-3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411TL3",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^2\\to\\mathbb{R}^3$ thỏa mãn $f(1,1)=(2,0,1)$ và $f(1,2)=(1,3,-1)$. Biết $f(4,5)=(a,b,c)$, tính $a+b+c$.",
    "answer": "12",
    "explain": "Biểu diễn $(4,5)=\\alpha(1,1)+\\beta(1,2)$: $\\alpha+\\beta=4$, $\\alpha+2\\beta=5$ nên $\\beta=1$, $\\alpha=3$.<br>Do $f$ tuyến tính: $f(4,5)=3f(1,1)+f(1,2)=(6,0,3)+(1,3,-1)=(7,3,2)$.<br>Vậy $a+b+c=12$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411TL4",
    "question": "Cho $M_2(\\mathbb{R})$ là không gian các ma trận vuông cấp $2$ và ánh xạ tuyến tính $f:M_2(\\mathbb{R})\\to M_2(\\mathbb{R})$, $f(X)=X-X^T$. Tính $\\dim\\ker f$.",
    "answer": "3",
    "explain": "Với $X=\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$: $f(X)=\\begin{pmatrix} 0 & b-c \\\\ c-b & 0 \\end{pmatrix}$.<br>$f(X)=0\\Leftrightarrow b=c$, tức $\\ker f$ là tập các ma trận đối xứng $\\begin{pmatrix} a & b \\\\ b & d \\end{pmatrix}=a\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}+b\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}+d\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$.<br>Ba ma trận trên độc lập tuyến tính nên $\\dim\\ker f=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411TL5",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^3$, $f(x,y,z)=(x-y+2z,\\,2x+y+z,\\,x+2y-z)$. Tìm giá trị của tham số $m$ để vector $(2,\\,m,\\,5)$ thuộc $\\mathrm{Im} f$.",
    "answer": "7",
    "explain": "$(a,b,c)\\in\\mathrm{Im} f\\Leftrightarrow$ hệ $\\begin{cases} x-y+2z=a \\\\ 2x+y+z=b \\\\ x+2y-z=c \\end{cases}$ có nghiệm.<br>Phương trình $3$ trừ (phương trình $2$ $-$ phương trình $1$) cho $0=c-(b-a)$, nên điều kiện có nghiệm là $c=b-a$ (hạng ma trận hệ số bằng $2$).<br>Với $(2,m,5)$: $5=m-2\\Leftrightarrow m=7$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411TL6",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^3$, $f(x,y,z)=(x+y-z,\\,2x+3y+z,\\,3x+4y)$. Biết vector $u=(a,\\,b,\\,2)$ thuộc $\\ker f$. Tính $a-b$.",
    "answer": "14",
    "explain": "Giải $f(x,y,z)=0$: $\\begin{cases} x+y-z=0 \\\\ 2x+3y+z=0 \\\\ 3x+4y=0 \\end{cases}$ (phương trình $3$ là tổng hai phương trình đầu).<br>Cộng hai phương trình đầu: $3x+4y=0$. Đặt $z=t$: $x=4t$, $y=-3t$. Vậy $\\ker f=\\{t(4,-3,1)\\}$.<br>$z=2$ nên $t=2$, $u=(8,-6,2)$, suy ra $a-b=8-(-6)=14$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
