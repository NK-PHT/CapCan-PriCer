window.traLoiNgan3D33 = [
  {
    "id": "3D331TL1",
    "question": "Trong $P_3[x]$, cho cơ sở $B=\\{1,\\ x-2,\\ (x-2)^2,\\ (x-2)^3\\}$ và đa thức $f(x)=x^3-2x^2+4x+1$. Gọi $(a_0,a_1,a_2,a_3)^T$ là tọa độ của $f$ theo cơ sở $B$. Tính $a_0+a_1+a_2+a_3$.",
    "answer": "22",
    "explain": "Theo khai triển Taylor tại $x_0=2$: $a_k=\\dfrac{f^{(k)}(2)}{k!}$.<br>$f(2)=8-8+8+1=9$; $f'(x)=3x^2-4x+4$, $f'(2)=8$; $f''(x)=6x-4$, $f''(2)=8\\Rightarrow a_2=4$; $f'''(x)=6\\Rightarrow a_3=1$.<br>Vậy $[f]_B=(9,8,4,1)^T$ và $a_0+a_1+a_2+a_3=22$.<br>(Kiểm tra nhanh: thay $x=3$ thì $x-2=1$, nên tổng các tọa độ bằng $f(3)=27-18+12+1=22$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331TL2",
    "question": "Trong $\\mathbb{R}^3$, cho hai cơ sở $B=\\{(1,1,0),\\ (0,1,1),\\ (1,0,1)\\}$ và $B'=\\{(1,2,3),\\ (0,1,2),\\ (1,1,2)\\}$. Gọi $P$ là ma trận chuyển từ cơ sở $B$ sang cơ sở $B'$ (cột thứ $j$ của $P$ là tọa độ của vector thứ $j$ của $B'$ theo cơ sở $B$). Tính $\\det P$ (viết kết quả dưới dạng số thập phân).",
    "answer": "0,5",
    "explain": "Gọi $M_B$, $M_{B'}$ là các ma trận có các cột lần lượt là các vector của $B$, $B'$ (tọa độ theo cơ sở chính tắc). Khi đó $M_{B'}=M_BP$, tức $P=M_B^{-1}M_{B'}$.<br>$\\det M_B=\\begin{vmatrix} 1 & 0 & 1 \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{vmatrix}=2$, $\\det M_{B'}=\\begin{vmatrix} 1 & 0 & 1 \\\\ 2 & 1 & 1 \\\\ 3 & 2 & 2 \\end{vmatrix}=1$.<br>Suy ra $\\det P=\\dfrac{\\det M_{B'}}{\\det M_B}=\\dfrac12=0{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331TL3",
    "question": "Gọi $P=\\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$ là ma trận chuyển từ cơ sở $B$ sang cơ sở $B'$ của không gian $\\mathbb{R}^3$ (tức là $[u]_B=P[u]_{B'}$ với mọi $u$). Biết $[u]_B=\\begin{pmatrix} 0 \\\\ -1 \\\\ 2 \\end{pmatrix}$ và $[u]_{B'}=(a,b,c)^T$. Tính $a+b+c$.",
    "answer": "2",
    "explain": "Từ $[u]_B=P[u]_{B'}$ suy ra $[u]_{B'}=P^{-1}[u]_B$.<br>$\\det P=1(1-1)-2(0-1)+1(0-1)=1\\neq0$, tính được $P^{-1}=\\begin{pmatrix} 0 & -1 & 1 \\\\ 1 & 0 & -1 \\\\ -1 & 1 & 1 \\end{pmatrix}$ (kiểm tra $PP^{-1}=I_3$).<br>$[u]_{B'}=\\begin{pmatrix} 0 & -1 & 1 \\\\ 1 & 0 & -1 \\\\ -1 & 1 & 1 \\end{pmatrix}\\begin{pmatrix} 0 \\\\ -1 \\\\ 2 \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix}$.<br>Vậy $a+b+c=3+(-2)+1=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331TL4",
    "question": "Cho ma trận $A=\\begin{pmatrix} 1 & 2 & 1 & 3 \\\\ 2 & 5 & 1 & 4 \\\\ 3 & 7 & m & 7 \\end{pmatrix}$. Tìm giá trị của tham số $m$ để $\\mathrm{rank}(A)=2$.",
    "answer": "2",
    "explain": "Biến đổi: $h_2\\to h_2-2h_1$, $h_3\\to h_3-3h_1$: $\\begin{pmatrix} 1 & 2 & 1 & 3 \\\\ 0 & 1 & -1 & -2 \\\\ 0 & 1 & m-3 & -2 \\end{pmatrix}\\xrightarrow{h_3-h_2}\\begin{pmatrix} 1 & 2 & 1 & 3 \\\\ 0 & 1 & -1 & -2 \\\\ 0 & 0 & m-2 & 0 \\end{pmatrix}$.<br>$\\mathrm{rank}(A)=2\\Leftrightarrow m-2=0\\Leftrightarrow m=2$ (khi $m\\neq2$ thì hạng bằng $3$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331TL5",
    "question": "Tìm số chiều của không gian nghiệm của hệ phương trình tuyến tính thuần nhất<br>$\\begin{cases} x_1-x_2+2x_3+x_5=0 \\\\ 2x_1-x_2+3x_3+x_4=0 \\\\ 3x_1-2x_2+5x_3+x_4+x_5=0 \\\\ x_1+x_3+x_4-x_5=0 \\end{cases}$.",
    "answer": "3",
    "explain": "Ma trận hệ số $A=\\begin{pmatrix} 1 & -1 & 2 & 0 & 1 \\\\ 2 & -1 & 3 & 1 & 0 \\\\ 3 & -2 & 5 & 1 & 1 \\\\ 1 & 0 & 1 & 1 & -1 \\end{pmatrix}$.<br>Ta có $h_3=h_1+h_2$ và $h_4=h_2-h_1$, còn $h_1,h_2$ không tỉ lệ nên $\\mathrm{rank}(A)=2$.<br>Số chiều không gian nghiệm $=n-\\mathrm{rank}(A)=5-2=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331TL6",
    "question": "Trong $M_2(\\mathbb{R})$, cho cơ sở $B=\\{E_1,E_2,E_3,E_4\\}$ với $E_1=\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$, $E_2=\\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$, $E_3=\\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix}$, $E_4=\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Gọi $(c_1,c_2,c_3,c_4)^T$ là tọa độ của ma trận $A=\\begin{pmatrix} 2 & -1 \\\\ 3 & 5 \\end{pmatrix}$ theo cơ sở $B$. Tính $c_3$.",
    "answer": "4",
    "explain": "$c_1E_1+c_2E_2+c_3E_3+c_4E_4=\\begin{pmatrix} c_1 & c_1+c_2 \\\\ c_1+c_2+c_3 & c_1+c_2+c_3+c_4 \\end{pmatrix}$.<br>Đồng nhất với $A$: $c_1=2$; $c_1+c_2=-1\\Rightarrow c_2=-3$; $c_1+c_2+c_3=3\\Rightarrow c_3=4$; $c_1+c_2+c_3+c_4=5\\Rightarrow c_4=2$.<br>Vậy $c_3=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
