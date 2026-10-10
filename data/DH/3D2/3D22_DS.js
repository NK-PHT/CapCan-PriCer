window.dungSai3D22 = [
  {
    "id": "3D221DS1",
    "question": "Cho $A=\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 2 & 5 & 10 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\det A=0$",
        "answer": true
      },
      {
        "text": "$A$ khả nghịch",
        "answer": false
      },
      {
        "text": "Hạng của $A$ bằng $2$",
        "answer": true
      },
      {
        "text": "Thực hiện phép biến đổi $h_2\\to h_2-2h_1$ thì định thức của ma trận nhận được bằng $\\det A+1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khai triển theo dòng $1$: $\\det A=1(10-20)-2(0-8)+3(0-2)=-10+16-6=0$. (Cũng có thể thấy dòng $3$ $=2\\cdot$ dòng $1+$ dòng $2$.)<br>- <strong>Sai</strong>.<br>  $\\det A=0$ nên $A$ không khả nghịch.<br>- <strong>Đúng</strong>.<br>  Dòng $3=2h_1+h_2$ nên hạng không vượt quá $2$; hai dòng đầu không tỉ lệ nên hạng bằng $2$.<br>- <strong>Sai</strong>.<br>  Phép biến đổi $h_i\\to h_i+kh_j$ không làm thay đổi định thức nên định thức vẫn bằng $\\det A=0$, khác $\\det A+1=1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221DS2",
    "question": "Cho $A$ là ma trận vuông cấp $3$ có $\\det A=4$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\det(2A)=32$",
        "answer": true
      },
      {
        "text": "$\\det(A^T)=4$",
        "answer": true
      },
      {
        "text": "$\\det(A^{-1})=\\dfrac{1}{4}$",
        "answer": true
      },
      {
        "text": "$\\det(A^2)=8$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Với ma trận cấp $n$: $\\det(kA)=k^n\\det A$. Do đó $\\det(2A)=2^3\\cdot4=32$.<br>- <strong>Đúng</strong>.<br>  Ma trận chuyển vị có cùng định thức: $\\det(A^T)=\\det A=4$.<br>- <strong>Đúng</strong>.<br>  $\\det(A^{-1})=\\dfrac{1}{\\det A}=\\dfrac14$ (vì $\\det A\\neq 0$ nên $A$ khả nghịch).<br>- <strong>Sai</strong>.<br>  $\\det(A^2)=(\\det A)^2=16\\neq 8$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221DS3",
    "question": "Cho $C=\\begin{pmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & 0 & 4 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\det C=30$",
        "answer": true
      },
      {
        "text": "$\\det C^T=30$",
        "answer": true
      },
      {
        "text": "$\\det(3C)=90$",
        "answer": false
      },
      {
        "text": "$C$ khả nghịch",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khai triển theo dòng $1$: $\\det C=2(12-0)-1(-4-2)+0=24+6=30$.<br>- <strong>Đúng</strong>.<br>  $\\det C^T=\\det C=30$.<br>- <strong>Sai</strong>.<br>  $\\det(3C)=3^3\\det C=27\\cdot30=810\\neq 90$.<br>- <strong>Đúng</strong>.<br>  $\\det C=30\\neq0$ nên $C$ khả nghịch.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221DS4",
    "question": "Cho $A=\\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 0 \\\\ 0 & x & 3 \\end{pmatrix}$ với $x$ là tham số thực. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\det A=4x+3$",
        "answer": true
      },
      {
        "text": "Hệ số của $x$ trong $\\det A$ bằng $4$",
        "answer": true
      },
      {
        "text": "$A$ không khả nghịch khi $x=-\\dfrac{3}{4}$",
        "answer": true
      },
      {
        "text": "$\\det A=0$ khi $x=\\dfrac{3}{4}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khai triển theo dòng $1$: $\\det A=1\\cdot(3-0)-0+2\\cdot(2x-0)=3+4x$.<br>- <strong>Đúng</strong>.<br>  Từ $\\det A=4x+3$ suy ra hệ số của $x$ là $4$.<br>- <strong>Đúng</strong>.<br>  Khi $x=-\\dfrac34$ thì $\\det A=4\\cdot\\left(-\\dfrac34\\right)+3=0$ nên $A$ không khả nghịch.<br>- <strong>Sai</strong>.<br>  Khi $x=\\dfrac34$ thì $\\det A=3+3=6\\neq0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
