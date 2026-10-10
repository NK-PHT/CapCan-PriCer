window.traLoiNgan3D31 = [
  {
    "id": "3D311TL1",
    "question": "Trong $\\mathbb{R}^3$, cho $u=(1, 1, 2)$, $v=(1, 2, 1)$ và $x=(3,m,5)$. Tìm giá trị của tham số $m$ để $x$ là tổ hợp tuyến tính của $u$ và $v$.",
    "answer": "4",
    "explain": "$u,v$ không tỉ lệ nên độc lập tuyến tính. Do đó $x$ là tổ hợp tuyến tính của $u,v$ khi và chỉ khi hệ $\\{u,v,x\\}$ phụ thuộc tuyến tính, tức là<br>$\\begin{vmatrix} 1 & 1 & 2 \\\\ 1 & 2 & 1 \\\\ 3 & m & 5 \\end{vmatrix}=0$.<br>Khai triển: $1(10-m)-1(5-3)+2(m-6)=m-4=0\\Leftrightarrow m=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311TL2",
    "question": "Trong $\\mathbb{R}^3$, cho $u_1=(1, 0, 1)$, $u_2=(2, 1, 0)$, $u_3=(0, 1, 1)$ và $x=(0, 2, 5)$. Biết $x=a u_1+b u_2+c u_3$ với $a,b,c\\in\\mathbb{R}$. Tính $a+b+c$.",
    "answer": "4",
    "explain": "So sánh từng thành phần của $a(1,0,1)+b(2,1,0)+c(0,1,1)=(0,2,5)$:<br>$\\begin{cases} a+2b=0 \\\\ b+c=2 \\\\ a+c=5 \\end{cases}$.<br>Từ phương trình đầu $a=-2b$; thay vào phương trình thứ ba: $c=5+2b$; thay vào phương trình thứ hai: $b+5+2b=2\\Rightarrow b=-1$, suy ra $a=2$, $c=3$.<br>Vậy $a+b+c=2-1+3=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311TL3",
    "question": "Trong $\\mathbb{R}^4$, cho $W=\\mathrm{span}\\{u_1,u_2,u_3\\}$ với $u_1=(1, 1, 0, 2)$, $u_2=(0, 1, 1, 1)$, $u_3=(1,0,-1,m)$. Tìm giá trị của tham số $m$ để $\\dim W=2$.",
    "answer": "1",
    "explain": "$u_1,u_2$ không tỉ lệ nên $\\dim W\\ge2$; $\\dim W=2$ khi và chỉ khi $u_3\\in\\mathrm{span}\\{u_1,u_2\\}$.<br>Giả sử $u_3=\\alpha u_1+\\beta u_2=(\\alpha,\\ \\alpha+\\beta,\\ \\beta,\\ 2\\alpha+\\beta)$. So sánh ba thành phần đầu: $\\alpha=1$, $\\beta=-1$ (thỏa $\\alpha+\\beta=0$).<br>Thành phần thứ tư: $m=2\\alpha+\\beta=1$.<br>Vậy $m=1$ (khi đó $u_3=u_1-u_2$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311TL4",
    "question": "Trong $P_2[x]$, tìm giá trị của $a$ để đa thức $p(x)=x^2+ax+3$ thuộc không gian con $\\mathrm{span}\\{1+x,\\ x+x^2\\}$.",
    "answer": "4",
    "explain": "Mọi phần tử của span có dạng $c_1(1+x)+c_2(x+x^2)=c_1+(c_1+c_2)x+c_2x^2$.<br>Đồng nhất với $3+ax+x^2$: $c_1=3$, $c_2=1$, $a=c_1+c_2=4$.<br>Vậy $a=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311TL5",
    "question": "Trong $\\mathbb{R}^3$, không gian con $W=\\mathrm{span}\\{(1, 1, 1),\\ (1, 2, 4)\\}$ là tập nghiệm của một phương trình dạng $ax+by+z=0$. Tính $a+b$.",
    "answer": "-1",
    "explain": "Vector $(a,b,1)$ phải vuông góc với cả hai vector sinh: $\\begin{cases} a+b+1=0 \\\\ a+2b+4=0 \\end{cases}\\Rightarrow b=-3,\\ a=2$.<br>(Cũng có thể lấy tích có hướng $(1,1,1)\\times(1,2,4)=(2,-3,1)$.)<br>Vậy $W=\\{(x,y,z)\\mid 2x-3y+z=0\\}$ và $a+b=2+(-3)=-1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311TL6",
    "question": "Trong $M_2(\\mathbb{R})$, cho $A_1=\\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$, $A_2=\\begin{pmatrix} 0 & 1 \\\\ 1 & -1 \\end{pmatrix}$ và $M=\\begin{pmatrix} 2 & m \\\\ 5 & -1 \\end{pmatrix}$. Tìm giá trị của $m$ để $M\\in\\mathrm{span}\\{A_1,A_2\\}$.",
    "answer": "3",
    "explain": "$\\alpha A_1+\\beta A_2=\\begin{pmatrix} \\alpha & \\beta \\\\ \\alpha+\\beta & \\alpha-\\beta \\end{pmatrix}$.<br>Đồng nhất với $M$: $\\alpha=2$, $\\beta=m$, $\\alpha+\\beta=5$, $\\alpha-\\beta=-1$.<br>Từ $\\alpha=2$ và $\\alpha+\\beta=5$ được $\\beta=3$, thỏa $\\alpha-\\beta=-1$. Vậy $m=\\beta=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
