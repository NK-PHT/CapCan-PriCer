window.traLoiNgan3D23 = [
  {
    "id": "3D231TL1",
    "question": "Cho $T=\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$. Phần tử nằm ở dòng $1$ cột $1$ của ma trận nghịch đảo $T^{-1}$ bằng bao nhiêu?",
    "answer": "-24",
    "explain": "$\\det T=1$. Ma trận nghịch đảo $T^{-1}=\\begin{pmatrix} -24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1 \\end{pmatrix}$ (tính bằng ma trận phụ hợp hoặc biến đổi sơ cấp $(T\\mid I)$).<br>Phần tử dòng $1$ cột $1$ là $-24$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231TL2",
    "question": "Tìm hạng của ma trận $\\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 2 & 4 & 6 & 8 \\\\ 1 & 0 & 1 & 0 \\\\ 2 & 2 & 4 & 4 \\end{pmatrix}$.",
    "answer": "2",
    "explain": "Dòng $2=2\\cdot$ dòng $1$; dòng $4=$ dòng $1+$ dòng $3$. Còn lại hai dòng $1$ và $3$ độc lập tuyến tính (không tỉ lệ). Vậy hạng bằng $2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231TL3",
    "question": "Cho $A=\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 1 & 3 & m \\end{pmatrix}$. Tìm giá trị của $m$ để hạng của $A$ bằng $2$.",
    "answer": "4",
    "explain": "$\\det A=1(5m-21)-2(2m-7)+3(6-5)=m-4$.<br>Hạng bằng $2$ khi $\\det A=0$ và tồn tại định thức con cấp $2$ khác $0$ (ví dụ $\\begin{vmatrix} 1 & 2 \\\\ 2 & 5 \\end{vmatrix}=1\\neq0$). Vậy $m=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231TL4",
    "question": "Giải hệ $\\begin{cases} 2x+y-z=1 \\\\ x+3y+2z=13 \\\\ x-y+z=2 \\end{cases}$ bằng quy tắc Cramer. Giá trị của $x+y+z$ bằng bao nhiêu?",
    "answer": "6",
    "explain": "$D=\\begin{vmatrix} 2 & 1 & -1 \\\\ 1 & 3 & 2 \\\\ 1 & -1 & 1 \\end{vmatrix}=15$.<br>$D_x=15$, $D_y=30$, $D_z=45$ (thay lần lượt từng cột hệ số bằng cột hệ số tự do).<br>Suy ra $x=1$, $y=2$, $z=3$ và $x+y+z=6$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231TL5",
    "question": "Tìm ma trận $X$ thỏa mãn $\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}X=\\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$. Tổng tất cả các phần tử của $X$ bằng bao nhiêu?",
    "answer": "1",
    "explain": "$\\det=1\\cdot5-2\\cdot3=-1\\neq0$ nên ma trận bên trái (gọi là $A$) khả nghịch, $A^{-1}=\\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$.<br>$X=A^{-1}B=\\begin{pmatrix} -1 & 2 \\\\ 1 & -1 \\end{pmatrix}$.<br>Tổng các phần tử: $1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231TL6",
    "question": "Cho $A=\\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix}$ và $\\mathrm{adj}(A)$ là ma trận phụ hợp của $A$. Tính $\\det\\left(\\mathrm{adj}(A)\\right)$.",
    "answer": "16",
    "explain": "$\\det A=2(4-1)-1(2-0)+0=4$.<br>Với ma trận cấp $n$: $\\det(\\mathrm{adj}A)=(\\det A)^{n-1}$. Do đó $\\det(\\mathrm{adj}A)=4^2=16$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
