window.dungSai3D41 = [
  {
    "id": "3D411DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau về tính tuyến tính của các ánh xạ:",
    "subQuestions": [
      {
        "text": "Ánh xạ $f:\\mathbb{R}^3\\to\\mathbb{R}^2$, $f(x,y,z)=(x+2y,\\,y-z)$ là ánh xạ tuyến tính",
        "answer": true
      },
      {
        "text": "Ánh xạ $g:\\mathbb{R}^2\\to\\mathbb{R}^2$, $g(x,y)=(x+1,\\,2y)$ là ánh xạ tuyến tính",
        "answer": false
      },
      {
        "text": "Ánh xạ $h:\\mathbb{R}^2\\to\\mathbb{R}^2$, $h(x,y)=(xy,\\,x-y)$ là ánh xạ tuyến tính",
        "answer": false
      },
      {
        "text": "Ánh xạ $k:\\mathbb{R}^3\\to\\mathbb{R}^3$, $k(x,y,z)=(3x-z,\\,0,\\,x+y+z)$ là ánh xạ tuyến tính",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Với $u=(x_1,y_1,z_1)$, $v=(x_2,y_2,z_2)$ và $\\alpha,\\beta\\in\\mathbb{R}$: mỗi tọa độ của $f$ là biểu thức bậc nhất thuần nhất nên $f(\\alpha u+\\beta v)=\\alpha f(u)+\\beta f(v)$. Thực chất $f(X)=AX$ với $A=\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & -1 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  Ánh xạ tuyến tính luôn biến vector không thành vector không, nhưng $g(0,0)=(1,0)\\neq(0,0)$ nên $g$ không tuyến tính.<br>- <strong>Sai</strong>.<br>  Ta có $h(2,2)=(4,0)$ nhưng $2h(1,1)=2(1,0)=(2,0)$, tức $h(2u)\\neq 2h(u)$ với $u=(1,1)$, nên $h$ không tuyến tính (do có tích $xy$).<br>- <strong>Đúng</strong>.<br>  Các tọa độ $3x-z$, $0$, $x+y+z$ đều là biểu thức bậc nhất thuần nhất nên $k(X)=AX$ với $A=\\begin{pmatrix} 3 & 0 & -1 \\\\ 0 & 0 & 0 \\\\ 1 & 1 & 1 \\end{pmatrix}$, do đó $k$ tuyến tính.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411DS2",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^3$, $f(x,y,z)=(x+2y-z,\\,2x+5y+z,\\,x+3y+2z)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\ker f$ có một cơ sở là $\\{(7,\\,-3,\\,1)\\}$",
        "answer": true
      },
      {
        "text": "$\\dim\\mathrm{Im} f=2$",
        "answer": true
      },
      {
        "text": "$f$ là đơn ánh",
        "answer": false
      },
      {
        "text": "Vector $(1,\\,2,\\,3)$ thuộc $\\mathrm{Im} f$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\ker f$ là tập nghiệm của hệ $\\begin{cases} x+2y-z=0 \\\\ 2x+5y+z=0 \\\\ x+3y+2z=0 \\end{cases}$. Phương trình thứ ba bằng phương trình thứ hai trừ phương trình thứ nhất. Từ hai phương trình đầu: $y=-3z$, $x=7z$. Vậy $\\ker f=\\{t(7,-3,1)\\}$, có cơ sở $\\{(7,\\,-3,\\,1)\\}$.<br>- <strong>Đúng</strong>.<br>  Theo định lý hạng – số khuyết: $\\dim\\mathrm{Im} f=\\dim\\mathbb{R}^3-\\dim\\ker f=3-1=2$.<br>- <strong>Sai</strong>.<br>  $\\ker f\\neq\\{0\\}$ (chứa $(7,-3,1)$) nên $f$ không là đơn ánh.<br>- <strong>Sai</strong>.<br>  $\\mathrm{Im} f$ sinh bởi các cột $(1,2,1)$, $(2,5,3)$, $(-1,1,2)$; mọi vector $(a,b,c)$ trong $\\mathrm{Im} f$ thỏa $c=b-a$ (vì dòng $3$ = dòng $2$ $-$ dòng $1$ của ma trận). Với $(1,2,3)$: $b-a=1\\neq 3$ nên $(1,2,3)\\notin\\mathrm{Im} f$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411DS3",
    "question": "Cho $f:V\\to W$ là ánh xạ tuyến tính, trong đó $\\dim V=5$ và $\\dim W=3$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f$ không thể là đơn ánh",
        "answer": true
      },
      {
        "text": "$\\dim\\ker f\\ge 2$",
        "answer": true
      },
      {
        "text": "Nếu $f$ là toàn ánh thì $\\dim\\ker f=3$",
        "answer": false
      },
      {
        "text": "Nếu $\\dim\\ker f=4$ thì $\\dim\\mathrm{Im} f=1$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Theo định lý hạng – số khuyết $\\dim\\ker f=5-\\dim\\mathrm{Im} f\\ge 5-3=2\\gt 0$, nên $\\ker f\\neq\\{0\\}$ và $f$ không là đơn ánh.<br>- <strong>Đúng</strong>.<br>  $\\mathrm{Im} f\\subset W$ nên $\\dim\\mathrm{Im} f\\le 3$, suy ra $\\dim\\ker f=5-\\dim\\mathrm{Im} f\\ge 2$.<br>- <strong>Sai</strong>.<br>  Nếu $f$ toàn ánh thì $\\mathrm{Im} f=W$, $\\dim\\mathrm{Im} f=3$, do đó $\\dim\\ker f=5-3=2\\neq 3$.<br>- <strong>Đúng</strong>.<br>  $\\dim\\mathrm{Im} f=\\dim V-\\dim\\ker f=5-4=1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D411DS4",
    "question": "Cho ánh xạ tuyến tính $f:\\mathbb{R}^3\\to\\mathbb{R}^3$, $f(x,y,z)=(x+y+mz,\\,x+2y+z,\\,2x+3y+4z)$ với $m$ là tham số thực. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f$ là song ánh (đẳng cấu) khi và chỉ khi $m\\neq 3$",
        "answer": true
      },
      {
        "text": "Khi $m=3$ thì $\\dim\\ker f=1$",
        "answer": true
      },
      {
        "text": "Khi $m=3$ thì $\\dim\\mathrm{Im} f=1$",
        "answer": false
      },
      {
        "text": "Khi $m=3$ thì $\\ker f$ được sinh bởi vector $(5,\\,2,\\,-1)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ma trận chính tắc $A=\\begin{pmatrix} 1 & 1 & m \\\\ 1 & 2 & 1 \\\\ 2 & 3 & 4 \\end{pmatrix}$ có $\\det A=1(8-3)-1(4-2)+m(3-4)=3-m$. $f$ là đẳng cấu $\\Leftrightarrow\\det A\\neq0\\Leftrightarrow m\\neq3$.<br>- <strong>Đúng</strong>.<br>  Khi $m=3$: dòng $3$ = dòng $1$ + dòng $2$, hai dòng đầu không tỉ lệ nên $\\mathrm{rank} A=2$, suy ra $\\dim\\ker f=3-2=1$.<br>- <strong>Sai</strong>.<br>  Khi $m=3$: $\\dim\\mathrm{Im} f=\\mathrm{rank} A=2\\neq1$.<br>- <strong>Sai</strong>.<br>  Khi $m=3$, giải $\\begin{cases} x+y+3z=0 \\\\ x+2y+z=0 \\end{cases}$ được $y=2z$, $x=-5z$, nên $\\ker f$ sinh bởi $(-5,2,1)$. Vector $(5,2,-1)$ không tỉ lệ với $(-5,2,1)$ (thử lại: $f(5,2,-1)=(4,8,12)\\neq 0$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
