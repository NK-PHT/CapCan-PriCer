window.traLoiNgan3D43 = [
  {
    "id": "3D431TL1",
    "question": "Cho ma trận $A=\\begin{pmatrix} 1 & 3 & 3 \\\\ -3 & 1 & 3 \\\\ 3 & 3 & 1 \\end{pmatrix}$. Tìm trị riêng lớn nhất của $A$.",
    "answer": "4",
    "explain": "$P(\\lambda)=\\det(A-\\lambda I)=\\begin{vmatrix} 1 - \\lambda & 3 & 3 \\\\ -3 & 1 - \\lambda & 3 \\\\ 3 & 3 & 1 - \\lambda \\end{vmatrix}=- \\lambda^{3} + 3 \\lambda^{2} + 6 \\lambda - 8$.<br>Nhẩm thấy $\\lambda=1$ là nghiệm, phân tích: $P(\\lambda)=-(\\lambda-1)(\\lambda^2-2\\lambda-8)=-(\\lambda-1)(\\lambda+2)(\\lambda-4)$.<br>Các trị riêng: $-2$, $1$, $4$. Trị riêng lớn nhất là $4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431TL2",
    "question": "Cho ma trận $A=\\begin{pmatrix} 1 & m \\\\ 2 & 3 \\end{pmatrix}$. Tìm giá trị của tham số $m$ để $\\lambda=2$ là một trị riêng của $A$ (viết kết quả dưới dạng số thập phân).",
    "answer": "-0,5",
    "explain": "$\\lambda=2$ là trị riêng $\\Leftrightarrow\\det(A-2I)=0$.<br>$\\det(A-2I)=\\begin{vmatrix} -1 & m \\\\ 2 & 1 \\end{vmatrix}=-1-2m$.<br>$-1-2m=0\\Leftrightarrow m=-\\dfrac12=-0{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431TL3",
    "question": "Cho ma trận $A=\\begin{pmatrix} 5 & -3 \\\\ 6 & -4 \\end{pmatrix}$. Phần tử nằm ở dòng $1$ cột $2$ của ma trận $A^6$ bằng bao nhiêu?",
    "answer": "-63",
    "explain": "Đa thức đặc trưng: $\\lambda^2-\\lambda-2=(\\lambda-2)(\\lambda+1)$, trị riêng $2$ và $-1$.<br>$\\lambda=2$: $(A-2I)X=0\\Leftrightarrow 3x-3y=0$, vector riêng $(1,1)$. $\\lambda=-1$: $6x-3y=0$, vector riêng $(1,2)$.<br>$P=\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$, $P^{-1}=\\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$, $A=P\\,\\mathrm{diag}(2,-1)\\,P^{-1}$.<br>$A^n=P\\begin{pmatrix} 2^n & 0 \\\\ 0 & (-1)^n \\end{pmatrix}P^{-1}=\\begin{pmatrix} 2^{n+1}-(-1)^n & -2^n+(-1)^n \\\\ 2^{n+1}-2(-1)^n & -2^n+2(-1)^n \\end{pmatrix}$.<br>Với $n=6$: phần tử dòng $1$ cột $2$ là $-2^6+1=-63$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431TL4",
    "question": "Cho ma trận $A$ vuông cấp $2$ có $(1,\\,2)$ là vector riêng ứng với trị riêng $3$ và $(1,\\,3)$ là vector riêng ứng với trị riêng $-2$. Tính tổng tất cả các phần tử của $A$.",
    "answer": "26",
    "explain": "Đặt $P=\\begin{pmatrix} 1 & 1 \\\\ 2 & 3 \\end{pmatrix}$ (các cột là hai vector riêng), $D=\\begin{pmatrix} 3 & 0 \\\\ 0 & -2 \\end{pmatrix}$. Hai vector riêng độc lập tuyến tính nên $A=PDP^{-1}$.<br>$P^{-1}=\\begin{pmatrix} 3 & -1 \\\\ -2 & 1 \\end{pmatrix}$, $A=\\begin{pmatrix} 1 & 1 \\\\ 2 & 3 \\end{pmatrix}\\begin{pmatrix} 3 & 0 \\\\ 0 & -2 \\end{pmatrix}\\begin{pmatrix} 3 & -1 \\\\ -2 & 1 \\end{pmatrix}=\\begin{pmatrix} 13 & -5 \\\\ 30 & -12 \\end{pmatrix}$.<br>Tổng các phần tử: $13-5+30-12=26$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431TL5",
    "question": "Cho $A$ là ma trận vuông cấp $3$ có các trị riêng là $1$, $2$, $3$. Tính $\\det\\left(A^2-2A+3I\\right)$.",
    "answer": "36",
    "explain": "Nếu $Av=\\lambda v$ thì $(A^2-2A+3I)v=(\\lambda^2-2\\lambda+3)v$. Với $g(\\lambda)=\\lambda^2-2\\lambda+3$, ma trận $g(A)$ có các trị riêng $g(1)=2$, $g(2)=3$, $g(3)=6$ ($A$ có $3$ trị riêng phân biệt nên chéo hóa được, $g(A)=P\\,g(D)\\,P^{-1}$).<br>$\\det g(A)=2\\cdot3\\cdot6=36$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431TL6",
    "question": "Cho ma trận $A=\\begin{pmatrix} 1 & 2 & m \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$. Tìm giá trị của tham số $m$ để $A$ chéo hóa được.",
    "answer": "1",
    "explain": "$A$ tam giác trên nên các trị riêng là các phần tử chéo: $\\lambda=1$ (bội $2$) và $\\lambda=3$ (bội $1$).<br>$A$ chéo hóa được $\\Leftrightarrow$ không gian riêng ứng với $\\lambda=1$ có số chiều $2\\Leftrightarrow\\mathrm{rank}(A-I)=1$.<br>$A-I=\\begin{pmatrix} 0 & 2 & m \\\\ 0 & 2 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$ có hạng $1\\Leftrightarrow(2,m)$ tỉ lệ với $(2,1)\\Leftrightarrow m=1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
