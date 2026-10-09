window.traLoiNgan3D42 = [
  {
    "id": "3D421TL1",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^2\\to\\mathbb{R}^3$, $f(x,y)=(x+3y,\\,2x-y,\\,y-2x)$, cơ sở $B=\\{b_1=(1,1),\\,b_2=(2,1)\\}$ của $\\mathbb{R}^2$ và $E$ là cơ sở chính tắc của $\\mathbb{R}^3$. Gọi $M$ là ma trận của $f$ đối với cặp cơ sở $(B,E)$ (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Tính tổng tất cả các phần tử của $M$.",
    "answer": "9",
    "explain": "$f(b_1)=f(1,1)=(4,1,-1)$, $f(b_2)=f(2,1)=(5,3,-3)$.<br>Tọa độ theo cơ sở chính tắc chính là các thành phần, nên $M=\\begin{pmatrix} 4 & 5 \\\\ 1 & 3 \\\\ -1 & -3 \\end{pmatrix}$.<br>Tổng các phần tử: $4+1-1+5+3-3=9$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421TL2",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^2\\to\\mathbb{R}^2$, $f(x,y)=(3x-y,\\,x+2y)$ và cơ sở $B=\\{b_1=(1,2),\\,b_2=(1,3)\\}$. Gọi $[f]_B$ là ma trận của $f$ trong cơ sở $B$ (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Phần tử nằm ở dòng $1$ cột $2$ của $[f]_B$ bằng bao nhiêu?",
    "answer": "-7",
    "explain": "$f(b_1)=f(1,2)=(1,\\,5)$, $f(b_2)=f(1,3)=(0,\\,7)$.<br>Giải $\\alpha b_1+\\beta b_2=w$ (tức $\\alpha+\\beta=w_1$, $2\\alpha+3\\beta=w_2$): $\\alpha=3w_1-w_2$, $\\beta=w_2-2w_1$.<br>$f(b_1)=-2b_1+3b_2$ và $f(b_2)=-7b_1+7b_2$.<br>$[f]_B=\\begin{pmatrix} -2 & -7 \\\\ 3 & 7 \\end{pmatrix}$, phần tử dòng $1$ cột $2$ là $-7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421TL3",
    "question": "Cho cơ sở $B=\\{b_1=(2,1),\\,b_2=(1,1)\\}$ của $\\mathbb{R}^2$ và ánh xạ tuyến tính $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ có ma trận trong cơ sở $B$ là $[f]_B=\\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\end{pmatrix}$ (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Biết $f(3,2)=(a,b)$, tính $a+b$.",
    "answer": "7",
    "explain": "Tọa độ của $v=(3,2)$ theo $B$: $(3,2)=\\alpha(2,1)+\\beta(1,1)$ cho $\\alpha=1$, $\\beta=1$.<br>Tọa độ của $f(v)$ theo $B$: $[f]_B\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$.<br>Suy ra $f(v)=3b_1-b_2=(5,\\,2)$.<br>Vậy $a+b=7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421TL4",
    "question": "Cho các ánh xạ tuyến tính $f,g:\\mathbb{R}^2\\to\\mathbb{R}^2$, $f(x,y)=(x+2y,\\,3x-y)$ và $g(x,y)=(2x-y,\\,x+y)$. Tính tổng tất cả các phần tử của ma trận chính tắc của $f\\circ g$.",
    "answer": "6",
    "explain": "Ma trận chính tắc: $A_f=\\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}$, $A_g=\\begin{pmatrix} 2 & -1 \\\\ 1 & 1 \\end{pmatrix}$.<br>Ma trận của $f\\circ g$ là $A_fA_g=\\begin{pmatrix} 4 & 1 \\\\ 5 & -4 \\end{pmatrix}$ (kiểm tra: $(f\\circ g)(x,y)=f(2x-y,x+y)=(4x+y,\\,5x-4y)$).<br>Tổng các phần tử: $6$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421TL5",
    "question": "Gọi $P_2[x]$ là không gian các đa thức bậc không quá $2$ với cơ sở $\\{1,\\,x,\\,x^2\\}$. Xét ánh xạ tuyến tính $f:P_2[x]\\to P_2[x]$, $f(p)(x)=p(x+1)$. Gọi $M$ là ma trận của $f$ trong cơ sở trên (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Tính tổng tất cả các phần tử của $M$.",
    "answer": "7",
    "explain": "$f(1)=1$; $f(x)=x+1=1+x$; $f(x^2)=(x+1)^2=1+2x+x^2$.<br>Tọa độ lần lượt: $(1,0,0)$, $(1,1,0)$, $(1,2,1)$, xếp thành cột: $M=\\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{pmatrix}$.<br>Tổng các phần tử: $7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421TL6",
    "question": "Cho cơ sở $B=\\{b_1=(1,0,0),\\,b_2=(1,1,0),\\,b_3=(1,1,1)\\}$ của $\\mathbb{R}^3$ và ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ thỏa mãn $f(b_1)=(1,2,0)$, $f(b_2)=(0,1,1)$, $f(b_3)=(2,0,3)$. Gọi $A$ là ma trận chính tắc của $f$ (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Tính vết (tổng các phần tử trên đường chéo chính) của $A$.",
    "answer": "2",
    "explain": "Ta có $e_1=b_1$, $e_2=b_2-b_1$, $e_3=b_3-b_2$.<br>$f(e_1)=f(b_1)=(1,2,0)$; $f(e_2)=f(b_2)-f(b_1)=(-1,-1,1)$; $f(e_3)=f(b_3)-f(b_2)=(2,-1,2)$.<br>$A=\\begin{pmatrix} 1 & -1 & 2 \\\\ 2 & -1 & -1 \\\\ 0 & 1 & 2 \\end{pmatrix}$ (cũng có thể tính $A=FP^{-1}$ với $F$ là ma trận có các cột $f(b_j)$, $P$ có các cột $b_j$).<br>Vết: $(1)+(-1)+(2)=2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
