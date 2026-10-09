window.traLoiNgan3D22 = [
  {
    "id": "3D221TL1",
    "question": "Tính định thức $\\begin{vmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 1 & 3 & 2 \\\\ 2 & 0 & 1 & 1 \\\\ 1 & 1 & 0 & 3 \\end{vmatrix}$.",
    "answer": "31",
    "explain": "Khai triển theo cột $1$: $\\det=\\sum_i (-1)^{i+1}a_{i1}M_{i1}$ với $M_{11}=4$, $M_{21}=5$, $M_{31}=15$, $M_{41}=3$.<br>$\\det=(1)\\cdot(1)\\cdot(4)+(2)\\cdot(1)\\cdot(15)+(1)\\cdot(-1)\\cdot(3)=31$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221TL2",
    "question": "Cho $A=\\begin{pmatrix} m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{pmatrix}$. Tổng tất cả các giá trị của tham số $m$ để $\\det A=0$ bằng bao nhiêu?",
    "answer": "-1",
    "explain": "Cộng các cột vào cột $1$: $\\det A=(m+2)\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{vmatrix}=(m+2)(m-1)^2$.<br>$\\det A=0\\Leftrightarrow m=-2$ hoặc $m=1$. Tổng: $-2+1=-1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221TL3",
    "question": "Tính định thức $\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 5 \\\\ 4 & 9 & 25 \\end{vmatrix}$.",
    "answer": "6",
    "explain": "Đây là định thức Vandermonde của $2,3,5$: $\\det=(3-2)(5-2)(5-3)=1\\cdot3\\cdot2=6$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221TL4",
    "question": "Cho $A$ là ma trận vuông cấp $3$ có $\\det A=4$. Tính $\\det\\left(2A^{-1}\\right)$.",
    "answer": "2",
    "explain": "$\\det(2A^{-1})=2^3\\det(A^{-1})=8\\cdot\\dfrac{1}{4}=2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221TL5",
    "question": "Cho $A,B$ là hai ma trận vuông cấp $3$ có $\\det A=-2$ và $\\det B=3$. Tính $\\det\\left(A^2B^T\\right)$.",
    "answer": "12",
    "explain": "$\\det(A^2B^T)=(\\det A)^2\\cdot\\det B=(-2)^2\\cdot3=12$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D221TL6",
    "question": "Cho $A=\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 1 & 3 & 2 \\\\ 2 & 0 & 1 & 1 \\\\ 1 & 1 & 0 & 3 \\end{pmatrix}$. Phần bù đại số $A_{23}$ của phần tử $a_{23}$ bằng bao nhiêu?",
    "answer": "9",
    "explain": "Bỏ dòng $2$, cột $3$: $M_{23}=\\begin{vmatrix} 1 & 2 & 1 \\\\ 2 & 0 & 1 \\\\ 1 & 1 & 3 \\end{vmatrix}=-9$.<br>$A_{23}=(-1)^{2+3}M_{23}=9$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
