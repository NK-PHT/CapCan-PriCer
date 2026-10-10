window.traLoiNgan3D32 = [
  {
    "id": "3D321TL1",
    "question": "Trong $\\mathbb{R}^3$, cho hệ vector $u_1=(1, -2, 2)$, $u_2=(0,1,m)$, $u_3=(-1,m,1)$. Tính tích tất cả các giá trị của tham số $m$ để hệ $\\{u_1,u_2,u_3\\}$ phụ thuộc tuyến tính.",
    "answer": "-3",
    "explain": "Hệ $3$ vector trong $\\mathbb{R}^3$ phụ thuộc tuyến tính $\\Leftrightarrow\\det=0$:<br>$\\begin{vmatrix} 1 & -2 & 2 \\\\ 0 & 1 & m \\\\ -1 & m & 1 \\end{vmatrix}=1(1-m^2)+2(0+m)+2(0+1)=-m^2+2m+3=-(m-3)(m+1)$.<br>$\\det=0\\Leftrightarrow m=3$ hoặc $m=-1$. Tích các giá trị: $3\\cdot(-1)=-3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321TL2",
    "question": "Trong $\\mathbb{R}^5$, cho $u_1=(1, 0, 2, 1, -1)$, $u_2=(0, 1, 1, 2, 1)$, $u_3=(1, 1, 3, 3, 0)$, $u_4=(2, -1, 3, 0, -3)$, $u_5=(1, 1, 0, 1, 1)$. Tìm số chiều của không gian con $W=\\mathrm{span}\\{u_1,u_2,u_3,u_4,u_5\\}$.",
    "answer": "3",
    "explain": "Nhận xét: $u_3=u_1+u_2$ và $u_4=2u_1-u_2$ nên $W=\\mathrm{span}\\{u_1,u_2,u_5\\}$.<br>Xét hệ $\\{u_1,u_2,u_5\\}$: $\\begin{pmatrix} 1 & 0 & 2 & 1 & -1 \\\\ 0 & 1 & 1 & 2 & 1 \\\\ 1 & 1 & 0 & 1 & 1 \\end{pmatrix}\\xrightarrow{h_3-h_1}\\begin{pmatrix} 1 & 0 & 2 & 1 & -1 \\\\ 0 & 1 & 1 & 2 & 1 \\\\ 0 & 1 & -2 & 0 & 2 \\end{pmatrix}\\xrightarrow{h_3-h_2}\\begin{pmatrix} 1 & 0 & 2 & 1 & -1 \\\\ 0 & 1 & 1 & 2 & 1 \\\\ 0 & 0 & -3 & -2 & 1 \\end{pmatrix}$, có $3$ dòng khác không nên hệ độc lập tuyến tính.<br>Vậy $\\dim W=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321TL3",
    "question": "Gọi $W$ là tập hợp các ma trận vuông thực cấp $3$ vừa đối xứng vừa có vết bằng $0$. Biết $W$ là một không gian con của $M_3(\\mathbb{R})$. Tìm $\\dim W$.",
    "answer": "5",
    "explain": "Ma trận đối xứng cấp $3$ có dạng $\\begin{pmatrix} a & d & e \\\\ d & b & f \\\\ e & f & c \\end{pmatrix}$, phụ thuộc $6$ tham số (không gian ma trận đối xứng có số chiều $6$).<br>Điều kiện vết bằng $0$: $a+b+c=0\\Rightarrow c=-a-b$, giảm thêm $1$ tham số.<br>Còn $5$ tham số tự do $a,b,d,e,f$, nên $\\dim W=5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321TL4",
    "question": "Trong $P_2[x]$, tìm giá trị của tham số $m$ để hệ $\\{1+x,\\ x+mx^2,\\ 1+2x+3x^2\\}$ không phải là một cơ sở của $P_2[x]$.",
    "answer": "3",
    "explain": "Tọa độ của các đa thức theo cơ sở chính tắc $\\{1,x,x^2\\}$ lần lượt là $(1,1,0)$, $(0,1,m)$, $(1,2,3)$.<br>Hệ $3$ phần tử trong không gian $3$ chiều là cơ sở $\\Leftrightarrow$ định thức khác $0$:<br>$\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & m \\\\ 1 & 2 & 3 \\end{vmatrix}=1(3-2m)-1(0-m)+0=3-m$.<br>Hệ không là cơ sở $\\Leftrightarrow 3-m=0\\Leftrightarrow m=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321TL5",
    "question": "Trong $\\mathbb{R}^4$, cho $U=\\mathrm{span}\\{(1, 0, 1, 0),\\ (0, 1, 0, 1)\\}$ và $V=\\mathrm{span}\\{(1, 1, 1, 1),\\ (1, 0, 0, 1)\\}$. Tìm $\\dim(U\\cap V)$.",
    "answer": "1",
    "explain": "$\\dim U=2$, $\\dim V=2$ (mỗi hệ gồm hai vector không tỉ lệ).<br>$U+V=\\mathrm{span}\\{(1,0,1,0),(0,1,0,1),(1,1,1,1),(1,0,0,1)\\}$. Vì $(1,1,1,1)=(1,0,1,0)+(0,1,0,1)$ và $(1,0,0,1)\\notin U$ (vector thuộc $U$ có dạng $(a,b,a,b)$) nên $\\dim(U+V)=3$.<br>Công thức Grassmann: $\\dim(U\\cap V)=\\dim U+\\dim V-\\dim(U+V)=2+2-3=1$.<br>(Thật vậy, $U\\cap V=\\mathrm{span}\\{(1,1,1,1)\\}$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D321TL6",
    "question": "Trong $\\mathbb{R}^5$, cho hệ $S=\\{u_1,u_2,u_3\\}$ với $u_1=(1, 2, 0, -1, 1)$, $u_2=(0, 1, 1, 1, -2)$, $u_3=(1, 1, -1, -2, 3)$. Cần bổ sung vào $S$ ít nhất bao nhiêu vector để được một hệ sinh của $\\mathbb{R}^5$?",
    "answer": "3",
    "explain": "Ta có $u_3=u_1-u_2$, còn $u_1,u_2$ không tỉ lệ, nên $\\dim\\mathrm{span}(S)=\\mathrm{rank}(S)=2$.<br>Thêm mỗi vector vào hệ thì số chiều của không gian sinh tăng không quá $1$. Muốn sinh ra $\\mathbb{R}^5$ (số chiều $5$) cần thêm ít nhất $5-2=3$ vector, và $3$ vector là đủ (bổ sung cơ sở $\\{u_1,u_2\\}$ thành cơ sở của $\\mathbb{R}^5$).<br>Đáp số: $3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
