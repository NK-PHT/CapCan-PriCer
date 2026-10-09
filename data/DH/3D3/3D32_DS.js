window.dungSai3D32 = [
  {
    "id": "3D321DS1",
    "question": "Trong $\\mathbb{R}^3$, cho hệ vector $u_1=(1, 2, 1)$, $u_2=(2, 1, -1)$, $u_3=(1,-1,m)$ với $m$ là tham số. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Khi $m=-2$, hệ $\\{u_1,u_2,u_3\\}$ phụ thuộc tuyến tính",
        "answer": true
      },
      {
        "text": "Khi $m=0$, hệ $\\{u_1,u_2,u_3\\}$ là một cơ sở của $\\mathbb{R}^3$",
        "answer": true
      },
      {
        "text": "Khi $m=-2$, ta có $u_3=u_1-u_2$",
        "answer": false
      },
      {
        "text": "Khi $m=2$, hệ $\\{u_1,u_2,u_3\\}$ phụ thuộc tuyến tính",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\det(u_1,u_2,u_3)=\\begin{vmatrix} 1 & 2 & 1 \\\\ 2 & 1 & -1 \\\\ 1 & -1 & m \\end{vmatrix}=1(m-1)-2(2m+1)+1(-2-1)=-3m-6$. Khi $m=-2$ định thức bằng $0$ nên hệ phụ thuộc tuyến tính.<br>- <strong>Đúng</strong>.<br>  Khi $m=0$: $\\det=-6\\neq0$, hệ gồm $3$ vector độc lập tuyến tính trong không gian $3$ chiều nên là cơ sở của $\\mathbb{R}^3$.<br>- <strong>Sai</strong>.<br>  Khi $m=-2$: $u_3=(1,-1,-2)$, còn $u_1-u_2=(-1,1,2)=-u_3$. Đẳng thức đúng là $u_3=u_2-u_1$.<br>- <strong>Sai</strong>.<br>  Khi $m=2$: $\\det=-3\\cdot2-6=-12\\neq0$ nên hệ độc lập tuyến tính. Hệ chỉ phụ thuộc tuyến tính khi $m=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321DS2",
    "question": "Trong $P_2[x]$, cho các đa thức $p_1=1+x$, $p_2=x+x^2$, $p_3=1+2x+x^2$, $p_4=1-x^2$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Hệ $\\{p_1,p_2,p_3\\}$ phụ thuộc tuyến tính",
        "answer": true
      },
      {
        "text": "Hệ $\\{p_1,p_2,p_4\\}$ là một cơ sở của $P_2[x]$",
        "answer": false
      },
      {
        "text": "$\\dim\\mathrm{span}\\{p_1,p_2,p_3,p_4\\}=2$",
        "answer": true
      },
      {
        "text": "Hệ $\\{p_1,p_2,p_3,p_4\\}$ là một hệ sinh của $P_2[x]$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $p_1+p_2=1+2x+x^2=p_3$ nên $p_1+p_2-p_3=0$, hệ phụ thuộc tuyến tính.<br>- <strong>Sai</strong>.<br>  $p_1-p_2=1-x^2=p_4$ nên hệ $\\{p_1,p_2,p_4\\}$ phụ thuộc tuyến tính, không là cơ sở. (Ma trận tọa độ theo cơ sở $\\{1,x,x^2\\}$ có định thức $\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & -1 \\end{vmatrix}=0$.)<br>- <strong>Đúng</strong>.<br>  Vì $p_3=p_1+p_2$ và $p_4=p_1-p_2$ nên $\\mathrm{span}\\{p_1,p_2,p_3,p_4\\}=\\mathrm{span}\\{p_1,p_2\\}$; $p_1,p_2$ không tỉ lệ nên số chiều bằng $2$.<br>- <strong>Sai</strong>.<br>  Không gian sinh bởi hệ chỉ có số chiều $2<3=\\dim P_2[x]$ nên hệ không sinh ra $P_2[x]$ (chẳng hạn đa thức $1$ không biểu diễn được).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321DS3",
    "question": "Trong $M_2(\\mathbb{R})$, cho $A_1=\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, $A_2=\\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$, $A_3=\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$, $A_4=\\begin{pmatrix} 2 & 0 \\\\ -1 & 1 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Hệ $\\{A_1,A_2,A_3\\}$ độc lập tuyến tính",
        "answer": true
      },
      {
        "text": "Hệ $\\{A_1,A_2,A_3\\}$ không phải là hệ sinh của $M_2(\\mathbb{R})$",
        "answer": true
      },
      {
        "text": "Hệ $\\{A_1,A_2,A_3,A_4\\}$ là một cơ sở của $M_2(\\mathbb{R})$",
        "answer": false
      },
      {
        "text": "$A_4=A_1+A_2+A_3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Giả sử $\\alpha A_1+\\beta A_2+\\gamma A_3=O$, tức $\\begin{pmatrix} \\alpha+\\beta & \\beta+\\gamma \\\\ \\gamma & \\alpha \\end{pmatrix}=O$. Suy ra $\\gamma=0$, $\\alpha=0$, rồi $\\beta=0$. Vậy hệ độc lập tuyến tính.<br>- <strong>Đúng</strong>.<br>  $\\dim M_2(\\mathbb{R})=4$, mọi hệ sinh phải có ít nhất $4$ phần tử; hệ chỉ có $3$ ma trận nên không sinh ra $M_2(\\mathbb{R})$.<br>- <strong>Sai</strong>.<br>  $A_1+A_2-A_3=\\begin{pmatrix} 2 & 0 \\\\ -1 & 1 \\end{pmatrix}=A_4$ nên hệ $4$ ma trận phụ thuộc tuyến tính, không là cơ sở.<br>- <strong>Sai</strong>.<br>  $A_1+A_2+A_3=\\begin{pmatrix} 2 & 2 \\\\ 1 & 1 \\end{pmatrix}\\neq A_4$. Đẳng thức đúng là $A_4=A_1+A_2-A_3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321DS4",
    "question": "Trong $\\mathbb{R}^4$, cho $W=\\mathrm{span}\\{u_1,u_2,u_3,u_4\\}$ với $u_1=(1, 1, 0, 1)$, $u_2=(2, 1, 1, 0)$, $u_3=(1, 0, 1, -1)$, $u_4=(0, 1, 1, 1)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\dim W=3$",
        "answer": true
      },
      {
        "text": "Hệ $\\{u_1,u_2,u_3\\}$ là một cơ sở của $W$",
        "answer": false
      },
      {
        "text": "Hệ $\\{u_1,u_2,u_4\\}$ là một cơ sở của $W$",
        "answer": true
      },
      {
        "text": "Vector $e_1=(1,0,0,0)$ thuộc $W$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Lập ma trận các dòng $u_1,u_2,u_3,u_4$ và biến đổi: $\\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 2 & 1 & 1 & 0 \\\\ 1 & 0 & 1 & -1 \\\\ 0 & 1 & 1 & 1 \\end{pmatrix}\\xrightarrow[h_3-h_2+h_1]{h_2-2h_1}\\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 0 & -1 & 1 & -2 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 1 & 1 & 1 \\end{pmatrix}\\xrightarrow[h_3\\leftrightarrow h_4]{h_4+h_2}\\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 0 & -1 & 1 & -2 \\\\ 0 & 0 & 2 & -1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$. Còn $3$ dòng khác không nên $\\dim W=\\mathrm{rank}=3$.<br>- <strong>Sai</strong>.<br>  $u_3=u_2-u_1$ nên hệ $\\{u_1,u_2,u_3\\}$ phụ thuộc tuyến tính, không là cơ sở của $W$.<br>- <strong>Đúng</strong>.<br>  Từ phép biến đổi trên (dòng $u_3$ bị triệt tiêu, các dòng $u_1,u_2,u_4$ cho $3$ dòng khác không) suy ra $\\{u_1,u_2,u_4\\}$ độc lập tuyến tính. Đây là $3$ vector độc lập trong $W$ có $\\dim W=3$ nên là cơ sở của $W$.<br>- <strong>Sai</strong>.<br>  $W$ là siêu phẳng $x_1-3x_2+x_3+2x_4=0$ (mọi $u_i$ đều thỏa). Vector $e_1$ cho vế trái bằng $1\\neq0$ nên $e_1\\notin W$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
