window.dungSai3D23 = [
  {
    "id": "3D231DS1",
    "question": "Cho $N=\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$N^{-1}=\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "$\\det\\left(N^{-1}\\right)=1$",
        "answer": true
      },
      {
        "text": "$N^{-1}=\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
        "answer": false
      },
      {
        "text": "$N$ không khả nghịch",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\det N=2\\cdot3-1\\cdot5=1\\neq0$, áp dụng công thức $N^{-1}=\\dfrac{1}{\\det N}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}=\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$. Kiểm tra: $NN^{-1}=I_2$.<br>- <strong>Đúng</strong>.<br>  $\\det(N^{-1})=\\dfrac{1}{\\det N}=1$.<br>- <strong>Sai</strong>.<br>  Ma trận này sai dấu các phần tử $b,c$: $N\\cdot\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}=\\begin{pmatrix} 11 & 4 \\\\ 30 & 11 \\end{pmatrix}\\neq I_2$.<br>- <strong>Sai</strong>.<br>  $\\det N=1\\neq0$ nên $N$ khả nghịch.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231DS2",
    "question": "Cho ma trận $R=\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 4 & 1 & 3 \\\\ 3 & 6 & 1 & 4 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Hạng của $R$ bằng $2$",
        "answer": true
      },
      {
        "text": "Hạng của $R^T$ bằng $2$",
        "answer": true
      },
      {
        "text": "Hệ $RX=0$ (ẩn $X\\in\\mathbb{R}^4$) chỉ có nghiệm tầm thường",
        "answer": false
      },
      {
        "text": "$R$ có một định thức con cấp $3$ khác $0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Dòng $3=$ dòng $1+$ dòng $2$ nên hạng $\\le2$; hai dòng đầu không tỉ lệ nên hạng bằng $2$.<br>- <strong>Đúng</strong>.<br>  Hạng của ma trận bằng hạng của ma trận chuyển vị nên $\\mathrm{rank}(R^T)=2$.<br>- <strong>Sai</strong>.<br>  Hạng $2<4$ (số ẩn) nên hệ thuần nhất $RX=0$ có vô số nghiệm, trong đó có nghiệm không tầm thường.<br>- <strong>Sai</strong>.<br>  Hạng bằng $2$ nên mọi định thức con cấp $3$ của $R$ đều bằng $0$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231DS3",
    "question": "Cho hệ phương trình $\\begin{cases} x+y+z=2 \\\\ 2x-y+z=-1 \\\\ x+2y-z=6 \\end{cases}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Ma trận hệ số có định thức $\\det A=7$",
        "answer": true
      },
      {
        "text": "Hệ có nghiệm duy nhất",
        "answer": true
      },
      {
        "text": "$x=2$",
        "answer": false
      },
      {
        "text": "$x+y+z=2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\det A=\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix}=7$.<br>- <strong>Đúng</strong>.<br>  $\\det A\\neq 0$ nên hệ Cramer có nghiệm duy nhất.<br>- <strong>Sai</strong>.<br>  Giải hệ ta được nghiệm duy nhất $(x;y;z)=(1;2;-1)$ nên $x=1\\neq2$.<br>- <strong>Đúng</strong>.<br>  Với nghiệm $(1;2;-1)$ thì $x+y+z=1+2-1=2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D231DS4",
    "question": "Cho hệ phương trình $\\begin{cases} x+y=2 \\\\ x+my=2 \\end{cases}$ với $m$ là tham số. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Hệ có vô số nghiệm khi $m=1$",
        "answer": true
      },
      {
        "text": "Hệ có nghiệm duy nhất khi $m\\neq1$",
        "answer": true
      },
      {
        "text": "Hệ vô nghiệm khi $m=1$",
        "answer": false
      },
      {
        "text": "Hệ có nghiệm duy nhất $(2;0)$ khi $m\\neq1$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khi $m=1$ hai phương trình trùng nhau $x+y=2$, hệ có vô số nghiệm.<br>- <strong>Đúng</strong>.<br>  $\\det\\begin{pmatrix} 1 & 1 \\\\ 1 & m \\end{pmatrix}=m-1\\neq0$ nên hệ có nghiệm duy nhất.<br>- <strong>Sai</strong>.<br>  Khi $m=1$ hệ có nghiệm (vô số nghiệm), không vô nghiệm.<br>- <strong>Đúng</strong>.<br>  Trừ hai phương trình: $(m-1)y=0$ nên $y=0$ và $x=2$; nghiệm duy nhất $(2;0)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
