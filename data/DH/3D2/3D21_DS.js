window.dungSai3D21 = [
  {
    "id": "3D211DS1",
    "question": "Cho ma trận $A$ cấp $3\\times 2$ và ma trận $B$ cấp $2\\times 3$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$AB$ là ma trận vuông cấp $3$",
        "answer": true
      },
      {
        "text": "$BA$ là ma trận vuông cấp $2$",
        "answer": true
      },
      {
        "text": "Tổng $A+B$ xác định",
        "answer": false
      },
      {
        "text": "$AB=BA$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Số cột của $A$ bằng số dòng của $B$ (cùng bằng $2$) nên $AB$ xác định và có cấp $3\\times 3$.<br>- <strong>Đúng</strong>.<br>  Số cột của $B$ bằng $3$ bằng số dòng của $A$ nên $BA$ xác định và có cấp $2\\times 2$.<br>- <strong>Sai</strong>.<br>  Chỉ cộng được hai ma trận cùng cấp; $A$ cấp $3\\times 2$ còn $B$ cấp $2\\times 3$ nên $A+B$ không xác định.<br>- <strong>Sai</strong>.<br>  $AB$ có cấp $3\\times 3$ còn $BA$ có cấp $2\\times 2$, hai ma trận khác cấp nên không thể bằng nhau.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211DS2",
    "question": "Cho $A=\\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ và đa thức $f(x)=x^2-x+2$ (khi thay vào ma trận, hằng số $2$ được hiểu là $2I_2$). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$A^2=\\begin{pmatrix} 3 & 5 \\\\ -5 & 8 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "$f(A)=\\begin{pmatrix} 3 & 4 \\\\ -4 & 7 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "Vết của $f(A)$ bằng $9$",
        "answer": false
      },
      {
        "text": "$\\det f(A)=37$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $A^2=A\\cdot A=\\begin{pmatrix} 3 & 5 \\\\ -5 & 8 \\end{pmatrix}$.<br>- <strong>Đúng</strong>.<br>  $f(A)=A^2-A+2I_2=\\begin{pmatrix} 3 & 5 \\\\ -5 & 8 \\end{pmatrix}-\\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}+\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}=\\begin{pmatrix} 3 & 4 \\\\ -4 & 7 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  Vết của $f(A)$ là tổng các phần tử trên đường chéo chính: $3+7=10\\neq 9$.<br>- <strong>Đúng</strong>.<br>  $\\det f(A)=3\\cdot 7-4\\cdot(-4)=21+16=37$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211DS3",
    "question": "Cho $A=\\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 1 & -1 \\\\ 2 & 0 & 1 \\end{pmatrix}$ và $B=\\begin{pmatrix} 2 & 0 & -1 \\\\ 1 & 1 & 0 \\\\ 0 & -2 & 1 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Phần tử dòng $1$ cột $2$ của $2A+B^T-3I_3$ bằng $-3$",
        "answer": true
      },
      {
        "text": "Phần tử dòng $3$ cột $1$ của $2A+B^T-3I_3$ bằng $4$",
        "answer": false
      },
      {
        "text": "Phần tử dòng $2$ cột $3$ của $AB$ bằng $-1$",
        "answer": true
      },
      {
        "text": "$AB=BA$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $2A=\\begin{pmatrix} 2 & -4 & 6 \\\\ 0 & 2 & -2 \\\\ 4 & 0 & 2 \\end{pmatrix}$, $B^T=\\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 1 & -2 \\\\ -1 & 0 & 1 \\end{pmatrix}$ nên $2A+B^T-3I_3=\\begin{pmatrix} 1 & -3 & 6 \\\\ 0 & 0 & -4 \\\\ 3 & 0 & 0 \\end{pmatrix}$, phần tử dòng $1$ cột $2$ là $-3$.<br>- <strong>Sai</strong>.<br>  Từ $2A+B^T-3I_3=\\begin{pmatrix} 1 & -3 & 6 \\\\ 0 & 0 & -4 \\\\ 3 & 0 & 0 \\end{pmatrix}$, phần tử dòng $3$ cột $1$ là $3\\neq 4$.<br>- <strong>Đúng</strong>.<br>  $AB=\\begin{pmatrix} 0 & -8 & 2 \\\\ 1 & 3 & -1 \\\\ 4 & -2 & -1 \\end{pmatrix}$, phần tử dòng $2$ cột $3$ là $-1$.<br>- <strong>Sai</strong>.<br>  $BA=\\begin{pmatrix} 0 & -4 & 5 \\\\ 1 & -1 & 2 \\\\ 2 & -2 & 3 \\end{pmatrix}\\neq AB$ nên $AB\\neq BA$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D211DS4",
    "question": "Cho hai ma trận $P=\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ và $Q=\\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$PQ=QP$",
        "answer": false
      },
      {
        "text": "$\\mathrm{tr}(PQ)=\\mathrm{tr}(QP)$",
        "answer": true
      },
      {
        "text": "$(PQ)^T=Q^TP^T$",
        "answer": true
      },
      {
        "text": "$(PQ)^2=P^2Q^2$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  $PQ=\\begin{pmatrix} 7 & 2 \\\\ 3 & 1 \\end{pmatrix}$, $QP=\\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$ nên $PQ\\neq QP$.<br>- <strong>Đúng</strong>.<br>  $\\mathrm{tr}(PQ)=7+1=8$ và $\\mathrm{tr}(QP)=1+7=8$, bằng nhau (tính chất $\\mathrm{tr}(PQ)=\\mathrm{tr}(QP)$).<br>- <strong>Đúng</strong>.<br>  Tính chất chuyển vị của tích: $(PQ)^T=Q^TP^T$ (đúng với mọi ma trận nhân được).<br>- <strong>Sai</strong>.<br>  $(PQ)^2=\\begin{pmatrix} 55 & 16 \\\\ 24 & 7 \\end{pmatrix}$ còn $P^2Q^2=\\begin{pmatrix} 25 & 4 \\\\ 6 & 1 \\end{pmatrix}$, hai ma trận khác nhau (do $PQ\\neq QP$ nên không rút gọn được).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
