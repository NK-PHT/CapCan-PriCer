window.traLoiNgan3D21 = [
  {
    "id": "3D211TL1",
    "question": "Cho $A=\\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 1 & -1 \\\\ 2 & 0 & 1 \\end{pmatrix}$ và $B=\\begin{pmatrix} 2 & 0 & -1 \\\\ 1 & 1 & 0 \\\\ 0 & -2 & 1 \\end{pmatrix}$. Tổng tất cả các phần tử của ma trận $2A+B^T-3I_3$ bằng bao nhiêu?",
    "answer": "3",
    "explain": "$2A=\\begin{pmatrix} 2 & -4 & 6 \\\\ 0 & 2 & -2 \\\\ 4 & 0 & 2 \\end{pmatrix}$, $B^T=\\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 1 & -2 \\\\ -1 & 0 & 1 \\end{pmatrix}$, $3I_3=\\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$.<br>$2A+B^T-3I_3=\\begin{pmatrix} 1 & -3 & 6 \\\\ 0 & 0 & -4 \\\\ 3 & 0 & 0 \\end{pmatrix}$.<br>Tổng các phần tử: $3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211TL2",
    "question": "Cho $A=\\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 1 & -1 \\\\ 2 & 0 & 1 \\end{pmatrix}$ và $B=\\begin{pmatrix} 2 & 0 & -1 \\\\ 1 & 1 & 0 \\\\ 0 & -2 & 1 \\end{pmatrix}$. Phần tử nằm ở dòng $3$ cột $2$ của ma trận $AB$ bằng bao nhiêu?",
    "answer": "-2",
    "explain": "Phần tử dòng $3$ cột $2$ của $AB$ bằng tích dòng $3$ của $A$ với cột $2$ của $B$: $(2)\\cdot(0)+(0)\\cdot(1)+(1)\\cdot(-2)=-2$.<br>(Toàn bộ $AB=\\begin{pmatrix} 0 & -8 & 2 \\\\ 1 & 3 & -1 \\\\ 4 & -2 & -1 \\end{pmatrix}$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211TL3",
    "question": "Cho $A=\\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 1 & -1 \\\\ 2 & 0 & 1 \\end{pmatrix}$. Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2-2AA^T+(A^T)^2$ bằng bao nhiêu?",
    "answer": "-12",
    "explain": "$A^2=\\begin{pmatrix} 7 & -4 & 8 \\\\ -2 & 1 & -2 \\\\ 4 & -4 & 7 \\end{pmatrix}$, $AA^T=\\begin{pmatrix} 14 & -5 & 5 \\\\ -5 & 2 & -1 \\\\ 5 & -1 & 5 \\end{pmatrix}$, $(A^T)^2=\\begin{pmatrix} 7 & -2 & 4 \\\\ -4 & 1 & -4 \\\\ 8 & -2 & 7 \\end{pmatrix}$.<br>$A^2-2AA^T+(A^T)^2=\\begin{pmatrix} -14 & 4 & 2 \\\\ 4 & -2 & -4 \\\\ 2 & -4 & 4 \\end{pmatrix}$.<br>Vết: $(-14)+(-2)+(4)=-12$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211TL4",
    "question": "Cho $U=\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$. Phần tử dòng $1$ cột $2$ của ma trận $U^{50}$ bằng bao nhiêu?",
    "answer": "100",
    "explain": "Ta có $U^2=\\begin{pmatrix} 1 & 4 \\\\ 0 & 1 \\end{pmatrix}$, $U^3=\\begin{pmatrix} 1 & 6 \\\\ 0 & 1 \\end{pmatrix}$.<br>Quy nạp: $U^n=\\begin{pmatrix} 1 & 2n \\\\ 0 & 1 \\end{pmatrix}$ (vì $U^{n+1}=U^n\\cdot U$ cộng thêm $2$ vào phần tử dòng $1$ cột $2$).<br>Vậy $U^{50}$ có phần tử dòng $1$ cột $2$ bằng $2\\cdot50=100$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211TL5",
    "question": "Cho $A=\\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ và $f(x)=x^2-x+2$. Tổng tất cả các phần tử của ma trận $f(A)$ bằng bao nhiêu?",
    "answer": "10",
    "explain": "$f(A)=A^2-A+2I_2=\\begin{pmatrix} 3 & 4 \\\\ -4 & 7 \\end{pmatrix}$ (xem phần tính ở câu trước).<br>Tổng các phần tử: $10$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211TL6",
    "question": "Tìm $x,y$ sao cho $\\begin{pmatrix} x & 1 \\\\ 2 & y \\end{pmatrix}\\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}=\\begin{pmatrix} 5 & 3 \\\\ -1 & 5 \\end{pmatrix}$. Giá trị của $x+y$ bằng bao nhiêu?",
    "answer": "1",
    "explain": "Nhân ma trận: $\\begin{pmatrix} x & 1 \\\\ 2 & y \\end{pmatrix}\\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}=\\begin{pmatrix} x + 3 & 2 x - 1 \\\\ 3 y + 2 & 4 - y \\end{pmatrix}$.<br>Đồng nhất với $\\begin{pmatrix} 5 & 3 \\\\ -1 & 5 \\end{pmatrix}$: $x+3=5$ nên $x=2$; $2+3y=-1$ nên $y=-1$.<br>Vậy $x+y=1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
