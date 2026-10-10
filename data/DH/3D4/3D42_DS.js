window.dungSai3D42 = [
  {
    "id": "3D421DS1",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^2$, $f(x,y,z)=(x-2y+z,\\,3x+y)$. Gọi $A$ là ma trận của $f$ đối với cặp cơ sở chính tắc (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$A=\\begin{pmatrix} 1 & -2 & 1 \\\\ 3 & 1 & 0 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "$A=\\begin{pmatrix} 1 & 3 \\\\ -2 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
        "answer": false
      },
      {
        "text": "$f(2,1,-1)=(-1,\\,7)$",
        "answer": true
      },
      {
        "text": "$\\dim\\ker f=0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f(e_1)=f(1,0,0)=(1,3)$, $f(e_2)=(-2,1)$, $f(e_3)=(1,0)$. Xếp các ảnh này thành các cột: $A=\\begin{pmatrix} 1 & -2 & 1 \\\\ 3 & 1 & 0 \\end{pmatrix}$ (cấp $2\\times3$).<br>- <strong>Sai</strong>.<br>  Ma trận này là $A^T$ (cấp $3\\times2$), do viết tọa độ các ảnh thành dòng thay vì cột; với $f:\\mathbb{R}^3\\to\\mathbb{R}^2$ ma trận phải có cấp $2\\times 3$.<br>- <strong>Đúng</strong>.<br>  $f(2,1,-1)=(2-2-1,\\,6+1)=(-1,7)$, cũng chính là $A\\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ 7 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  $\\mathrm{rank} A=2$ nên $\\dim\\ker f=3-2=1\\neq0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421DS2",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^2\\to\\mathbb{R}^2$, $f(x,y)=(x+y,\\,2x-y)$ và cơ sở $B=\\{b_1=(1,1),\\,b_2=(1,2)\\}$. Gọi $A$ là ma trận chính tắc của $f$, $[f]_B$ là ma trận của $f$ trong cơ sở $B$ (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích), $P=\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$ là ma trận chuyển từ cơ sở chính tắc sang $B$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f(b_1)=3b_1-b_2$",
        "answer": true
      },
      {
        "text": "$[f]_B=\\begin{pmatrix} 3 & 6 \\\\ -1 & -3 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "$[f]_B=PAP^{-1}$",
        "answer": false
      },
      {
        "text": "$\\det [f]_B=-3$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f(b_1)=f(1,1)=(2,1)$. Giải $(2,1)=\\alpha(1,1)+\\beta(1,2)$: $\\alpha+\\beta=2$, $\\alpha+2\\beta=1$ nên $\\beta=-1$, $\\alpha=3$. Vậy $f(b_1)=3b_1-b_2$.<br>- <strong>Đúng</strong>.<br>  $f(b_2)=f(1,2)=(3,0)=6b_1-3b_2$. Tọa độ của $f(b_1)$, $f(b_2)$ theo $B$ lần lượt là $(3,-1)$, $(6,-3)$, xếp thành cột: $[f]_B=\\begin{pmatrix} 3 & 6 \\\\ -1 & -3 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  Công thức đổi cơ sở đúng là $[f]_B=P^{-1}AP=\\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 2 & -1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}=\\begin{pmatrix} 3 & 6 \\\\ -1 & -3 \\end{pmatrix}$, còn $PAP^{-1}=\\begin{pmatrix} 6 & -3 \\\\ 11 & -6 \\end{pmatrix}\\neq[f]_B$.<br>- <strong>Đúng</strong>.<br>  $[f]_B=P^{-1}AP$ nên $\\det[f]_B=\\det A=1\\cdot(-1)-1\\cdot2=-3$ (kiểm tra trực tiếp: $3\\cdot(-3)-6\\cdot(-1)=-3$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421DS3",
    "question": "Cho các ánh xạ tuyến tính $f:\\mathbb{R}^2\\to\\mathbb{R}^3$, $f(x,y)=(x+y,\\,x-y,\\,2y)$ và $g:\\mathbb{R}^3\\to\\mathbb{R}^2$, $g(x,y,z)=(x+z,\\,y-z)$. Gọi $A$, $B$ lần lượt là ma trận chính tắc của $f$ và $g$ (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Ma trận chính tắc của $g\\circ f$ là $BA=\\begin{pmatrix} 1 & 3 \\\\ 1 & -3 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "Ma trận chính tắc của $g\\circ f$ là $AB$",
        "answer": false
      },
      {
        "text": "$g\\circ f$ là một đẳng cấu của $\\mathbb{R}^2$",
        "answer": true
      },
      {
        "text": "$f\\circ g$ là một đẳng cấu của $\\mathbb{R}^3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $A=\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\\\ 0 & 2 \\end{pmatrix}$, $B=\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & -1 \\end{pmatrix}$. Ma trận của hợp $g\\circ f$ là $BA=\\begin{pmatrix} 1 & 3 \\\\ 1 & -3 \\end{pmatrix}$; kiểm tra: $(g\\circ f)(x,y)=g(x+y,x-y,2y)=(x+3y,\\,x-3y)$.<br>- <strong>Sai</strong>.<br>  $AB$ có cấp $3\\times3$, là ma trận của $f\\circ g:\\mathbb{R}^3\\to\\mathbb{R}^3$, không phải của $g\\circ f$ (ma trận của hợp viết theo thứ tự “ánh xạ sau nhân trái”).<br>- <strong>Đúng</strong>.<br>  $\\det(BA)=1\\cdot(-3)-3\\cdot1=-6\\neq0$ nên $g\\circ f$ là đẳng cấu.<br>- <strong>Sai</strong>.<br>  Ma trận của $f\\circ g$ là $AB$ với $\\mathrm{rank}(AB)\\le\\mathrm{rank} A\\le2\\lt 3$, nên $f\\circ g$ không là đẳng cấu (thực tế $\\det(AB)=0$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D421DS4",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^2$, $f(x,y,z)=(x+2y-z,\\,y+z)$, cơ sở $B=\\{b_1=(1,0,0),\\,b_2=(1,1,0),\\,b_3=(1,1,1)\\}$ của $\\mathbb{R}^3$ và cơ sở $C=\\{c_1=(1,1),\\,c_2=(2,3)\\}$ của $\\mathbb{R}^2$. Gọi $[f]_{B,C}$ là ma trận của $f$ đối với cặp cơ sở $(B,C)$ (quy ước: cột thứ $j$ của ma trận là tọa độ của ảnh của vector cơ sở thứ $j$ theo cơ sở đích). Gọi $A$ là ma trận chính tắc của $f$; $P$, $Q$ lần lượt là các ma trận có các cột là các vector của $B$, của $C$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$[f]_{B,C}=\\begin{pmatrix} 3 & 7 & 2 \\\\ -1 & -2 & 0 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "$[f]_{B,C}=\\begin{pmatrix} 3 & -1 \\\\ 7 & -2 \\\\ 2 & 0 \\end{pmatrix}$",
        "answer": false
      },
      {
        "text": "$[f]_{B,C}=Q^{-1}AP$",
        "answer": true
      },
      {
        "text": "Cột thứ ba của $[f]_{B,C}$ là $\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f(b_1)=(1,0)=3c_1-c_2$; $f(b_2)=(3,1)=7c_1-2c_2$; $f(b_3)=(2,2)=2c_1+0c_2$ (giải $\\alpha c_1+\\beta c_2=w$, hay $\\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix}=Q^{-1}w$ với $Q^{-1}=\\begin{pmatrix} 3 & -2 \\\\ -1 & 1 \\end{pmatrix}$). Xếp các tọa độ thành cột: $[f]_{B,C}=\\begin{pmatrix} 3 & 7 & 2 \\\\ -1 & -2 & 0 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  Đây là ma trận chuyển vị (viết tọa độ thành dòng), trái quy ước và sai cấp: $[f]_{B,C}$ phải có cấp $2\\times3$.<br>- <strong>Đúng</strong>.<br>  $[f(b_j)]_C=Q^{-1}f(b_j)=Q^{-1}Ab_j$, ghép các cột lại được $[f]_{B,C}=Q^{-1}AP=\\begin{pmatrix} 3 & -2 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}=\\begin{pmatrix} 3 & 7 & 2 \\\\ -1 & -2 & 0 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  $(2,2)$ là tọa độ của $f(b_3)$ theo cơ sở chính tắc. Tọa độ theo $C$ là $(2,0)$ vì $(2,2)=2c_1+0\\cdot c_2$; nên cột thứ ba là $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
