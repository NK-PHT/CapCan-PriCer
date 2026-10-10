window.dungSai3D43 = [
  {
    "id": "3D431DS1",
    "question": "Cho ma trận $A=\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Đa thức đặc trưng của $A$ là $P(\\lambda)=\\lambda^2-3\\lambda+4$",
        "answer": false
      },
      {
        "text": "$A$ có hai trị riêng là $4$ và $-1$",
        "answer": true
      },
      {
        "text": "$(2,\\,3)$ là một vector riêng của $A$ ứng với trị riêng $4$",
        "answer": true
      },
      {
        "text": "$(1,\\,1)$ là một vector riêng của $A$ ứng với trị riêng $-1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  $P(\\lambda)=\\det(A-\\lambda I)=\\begin{vmatrix} 1 - \\lambda & 2 \\\\ 3 & 2 - \\lambda \\end{vmatrix}=(1-\\lambda)(2-\\lambda)-6=\\lambda^2-3\\lambda-4$ (hệ số tự do là $\\det A=-4$, không phải $4$).<br>- <strong>Đúng</strong>.<br>  $\\lambda^2-3\\lambda-4=0\\Leftrightarrow(\\lambda-4)(\\lambda+1)=0\\Leftrightarrow\\lambda=4$ hoặc $\\lambda=-1$.<br>- <strong>Đúng</strong>.<br>  $A\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}=\\begin{pmatrix} 8 \\\\ 12 \\end{pmatrix}=4\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  $A\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}\\neq-\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$. Vector riêng ứng với $\\lambda=-1$ là nghiệm khác $0$ của $(A+I)X=0$: $2x+2y=0$, chẳng hạn $(1,-1)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431DS2",
    "question": "Cho ma trận $A=\\begin{pmatrix} 2 & -3 & 3 \\\\ 1 & 1 & 1 \\\\ 1 & 2 & 0 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$A$ có các trị riêng là $2$ (bội $2$) và $-1$",
        "answer": true
      },
      {
        "text": "Không gian riêng của $A$ ứng với trị riêng $2$ có số chiều bằng $2$",
        "answer": false
      },
      {
        "text": "$A$ chéo hóa được",
        "answer": false
      },
      {
        "text": "$\\det A=-4$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $P(\\lambda)=\\det(A-\\lambda I)=- \\lambda^{3} + 3 \\lambda^{2} - 4=-(\\lambda-2)^2(\\lambda+1)$, nên $A$ có trị riêng $\\lambda=2$ (bội đại số $2$) và $\\lambda=-1$ (bội $1$).<br>- <strong>Sai</strong>.<br>  $A-2I=\\begin{pmatrix} 0 & -3 & 3 \\\\ 1 & -1 & 1 \\\\ 1 & 2 & -2 \\end{pmatrix}$ có dòng $3$ = dòng $2$ $-$ dòng $1$, còn dòng $1$ và dòng $2$ không tỉ lệ nên $\\mathrm{rank}(A-2I)=2$. Do đó không gian riêng $\\ker(A-2I)$ có số chiều $3-2=1\\neq2$ (sinh bởi $(0,1,1)$).<br>- <strong>Sai</strong>.<br>  Số chiều không gian riêng ứng với $\\lambda=2$ bằng $1$ nhỏ hơn bội đại số $2$ nên $A$ không chéo hóa được.<br>- <strong>Đúng</strong>.<br>  $\\det A$ bằng tích các trị riêng (kể cả bội): $2\\cdot2\\cdot(-1)=-4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431DS3",
    "question": "Cho ma trận $A=\\begin{pmatrix} 1 & 2 & -2 \\\\ -1 & 1 & 1 \\\\ -1 & 2 & 0 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$A$ có ba trị riêng là $1$, $2$ và $-1$",
        "answer": true
      },
      {
        "text": "$(1,\\,0,\\,1)$ là một vector riêng của $A$ ứng với trị riêng $1$",
        "answer": false
      },
      {
        "text": "$\\det A=2$",
        "answer": false
      },
      {
        "text": "Với $P=\\begin{pmatrix} 1 & 0 & 1 \\\\ 1 & 1 & 0 \\\\ 1 & 1 & 1 \\end{pmatrix}$ thì $P^{-1}AP=\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $P(\\lambda)=\\det(A-\\lambda I)=- \\lambda^{3} + 2 \\lambda^{2} + \\lambda - 2=-(\\lambda-1)(\\lambda-2)(\\lambda+1)$, nên $A$ có ba trị riêng $1$, $2$, $-1$.<br>- <strong>Sai</strong>.<br>  $A\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ 0 \\\\ -1 \\end{pmatrix}=-1\\cdot\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$, nên $(1,0,1)$ là vector riêng ứng với trị riêng $-1$, không phải trị riêng $1$ (vector riêng ứng với $\\lambda=1$ là $(1,1,1)$).<br>- <strong>Sai</strong>.<br>  $\\det A$ bằng tích các trị riêng: $1\\cdot2\\cdot(-1)=-2\\neq2$.<br>- <strong>Đúng</strong>.<br>  Các cột của $P$ là $(1,1,1)$, $(0,1,1)$, $(1,0,1)$, lần lượt là vector riêng ứng với $1$, $2$, $-1$ (kiểm tra: $A\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ 2 \\\\ 2 \\end{pmatrix}=2\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$). Ba vector này độc lập tuyến tính ($\\det P=1\\neq0$) nên $P^{-1}AP=\\mathrm{diag}(1,2,-1)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D431DS4",
    "question": "Cho $A$ là ma trận vuông cấp $3$ có ba trị riêng là $1$, $-2$ và $3$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\det A=-6$",
        "answer": true
      },
      {
        "text": "$A$ chéo hóa được",
        "answer": true
      },
      {
        "text": "Ma trận $A-3I$ khả nghịch",
        "answer": false
      },
      {
        "text": "$\\mathrm{tr}\\left(A^2\\right)=4$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\det A$ bằng tích các trị riêng: $1\\cdot(-2)\\cdot3=-6$.<br>- <strong>Đúng</strong>.<br>  $A$ cấp $3$ có $3$ trị riêng phân biệt nên có $3$ vector riêng độc lập tuyến tính, do đó $A$ chéo hóa được.<br>- <strong>Sai</strong>.<br>  $3$ là trị riêng của $A$ nên $\\det(A-3I)=0$, tức $A-3I$ không khả nghịch.<br>- <strong>Sai</strong>.<br>  Nếu $Av=\\lambda v$ thì $A^2v=\\lambda^2v$, nên $A^2$ có các trị riêng $1$, $4$, $9$ và $\\mathrm{tr}(A^2)=1+4+9=14$. Giá trị $4$ là $(\\mathrm{tr}A)^2=(1-2+3)^2$, nhầm $\\mathrm{tr}(A^2)$ với $(\\mathrm{tr}A)^2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
