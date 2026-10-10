window.dungSai3G43 = [
  {
    "id": "3G431DS1",
    "question": "Cho tích phân $I=\\displaystyle\\int_0^1\\int_{x^2}^{x} f(x,y)\\,dy\\,dx$ với $f$ liên tục. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Miền lấy tích phân $D=\\{(x,y):\\ 0\\le x\\le1,\\ x^2\\le y\\le x\\}$ có diện tích bằng $\\dfrac16$",
        "answer": true
      },
      {
        "text": "Đổi thứ tự lấy tích phân: $I=\\displaystyle\\int_0^1\\int_{y}^{\\sqrt y} f(x,y)\\,dx\\,dy$",
        "answer": true
      },
      {
        "text": "Đổi thứ tự lấy tích phân: $I=\\displaystyle\\int_0^1\\int_{\\sqrt y}^{y} f(x,y)\\,dx\\,dy$",
        "answer": false
      },
      {
        "text": "Với $f(x,y)=x$ thì $I=\\dfrac{1}{12}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $S(D)=\\displaystyle\\int_0^1(x-x^2)\\,dx=\\dfrac12-\\dfrac13=\\dfrac16$.<br>- <strong>Đúng</strong>.<br>  Miền $D$ nằm giữa đường thẳng $y=x$ và parabol $y=x^2$, $0\\le y\\le1$. Với mỗi $y\\in[0,1]$, $x$ chạy từ đường $x=y$ (bên trái) đến đường $x=\\sqrt y$ (bên phải) vì $y\\le\\sqrt y$. Vậy $D=\\{0\\le y\\le1,\\ y\\le x\\le\\sqrt y\\}$.<br>- <strong>Sai</strong>.<br>  Với $0\\lt y\\lt 1$ thì $y\\lt \\sqrt y$ nên cận dưới phải là $y$, cận trên là $\\sqrt y$. Viết ngược cận làm đổi dấu tích phân (ví dụ với $f=x$ được $-\\dfrac1{12}$ thay vì $\\dfrac1{12}$).<br>- <strong>Đúng</strong>.<br>  $I=\\displaystyle\\int_0^1 x(x-x^2)\\,dx=\\int_0^1(x^2-x^3)\\,dx=\\dfrac13-\\dfrac14=\\dfrac1{12}$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431DS2",
    "question": "Cho $D$ là miền phẳng giới hạn bởi parabol $y=x^2$ và đường thẳng $y=2x$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$D=\\{(x,y):\\ 0\\le x\\le2,\\ x^2\\le y\\le2x\\}$",
        "answer": true
      },
      {
        "text": "$D=\\{(x,y):\\ 0\\le y\\le4,\\ \\dfrac y2\\le x\\le\\sqrt y\\}$",
        "answer": true
      },
      {
        "text": "Diện tích của $D$ bằng $\\dfrac83$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\iint_D x\\,dx\\,dy=\\dfrac43$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Hoành độ giao điểm: $x^2=2x\\Leftrightarrow x=0$ hoặc $x=2$. Trên $[0,2]$ ta có $x^2\\le2x$, nên $D$ là miền loại I như trên.<br>- <strong>Đúng</strong>.<br>  Tung độ giao điểm $y=0$, $y=4$. Với $0\\le y\\le4$: đường $y=2x$ cho $x=\\dfrac y2$ (bên trái), parabol cho $x=\\sqrt y$ (bên phải), và $\\dfrac y2\\le\\sqrt y$. Đây là cách viết $D$ dưới dạng miền loại II.<br>- <strong>Sai</strong>.<br>  $S(D)=\\displaystyle\\int_0^2(2x-x^2)\\,dx=4-\\dfrac83=\\dfrac43\\neq\\dfrac83$ (giá trị $\\dfrac83=\\displaystyle\\int_0^2x^2dx$ là kết quả khi lấy nhầm hàm dưới tích phân).<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\iint_D x\\,dx\\,dy=\\int_0^2x(2x-x^2)\\,dx=\\int_0^2(2x^2-x^3)\\,dx=\\dfrac{16}3-4=\\dfrac43$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431DS3",
    "question": "Cho $D$ là nửa hình vành khăn $1\\le x^2+y^2\\le4$, $y\\ge0$. Dùng phép đổi biến sang tọa độ cực $x=r\\cos\\theta$, $y=r\\sin\\theta$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Miền $D$ tương ứng với miền $0\\le\\theta\\le\\pi$, $1\\le r\\le2$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\iint_D(x^2+y^2)\\,dx\\,dy=\\int_0^{\\pi}\\int_1^2 r^2\\,dr\\,d\\theta=\\dfrac{7\\pi}{3}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\iint_D y\\,dx\\,dy=\\dfrac{14}{3}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\iint_D x\\,dx\\,dy=\\dfrac{14}{3}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $1\\le x^2+y^2\\le4\\Leftrightarrow1\\le r\\le2$; điều kiện $y\\ge0\\Leftrightarrow\\sin\\theta\\ge0\\Leftrightarrow0\\le\\theta\\le\\pi$.<br>- <strong>Sai</strong>.<br>  Khi đổi sang tọa độ cực phải nhân thêm Jacobian $|J|=r$: $\\displaystyle\\iint_D(x^2+y^2)\\,dx\\,dy=\\int_0^{\\pi}\\int_1^2 r^2\\cdot r\\,dr\\,d\\theta=\\pi\\cdot\\dfrac{2^4-1}{4}=\\dfrac{15\\pi}{4}$. Mệnh đề đã quên thừa số $r$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\iint_D y\\,dx\\,dy=\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_1^2r^2\\,dr=2\\cdot\\dfrac73=\\dfrac{14}3$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\iint_D x\\,dx\\,dy=\\int_0^{\\pi}\\cos\\theta\\,d\\theta\\int_1^2r^2\\,dr=0\\cdot\\dfrac73=0$ (miền $D$ đối xứng qua trục $Oy$, hàm $x$ lẻ theo $x$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G431DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau về phép đổi biến trong tích phân bội:",
    "subQuestions": [
      {
        "text": "Với phép đổi biến $x=2u+v$, $y=u-v$ thì $\\left|\\dfrac{\\partial(x,y)}{\\partial(u,v)}\\right|=3$",
        "answer": true
      },
      {
        "text": "Với phép đổi biến sang tọa độ cầu $x=\\rho\\cos\\theta\\sin\\varphi$, $y=\\rho\\sin\\theta\\sin\\varphi$, $z=\\rho\\cos\\varphi$ ($0\\le\\varphi\\le\\pi$) thì trị tuyệt đối của Jacobian bằng $\\rho^2\\sin\\varphi$",
        "answer": true
      },
      {
        "text": "Thể tích khối $V$ giới hạn bởi paraboloid $z=x^2+y^2$ và mặt phẳng $z=4$ bằng $8\\pi$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\iiint_{x^2+y^2+z^2\\le1}(x^2+y^2+z^2)\\,dx\\,dy\\,dz=\\dfrac{4\\pi}{3}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\dfrac{\\partial(x,y)}{\\partial(u,v)}=\\begin{vmatrix} 2 & 1 \\\\ 1 & -1 \\end{vmatrix}=-2-1=-3$, trị tuyệt đối bằng $3$.<br>- <strong>Đúng</strong>.<br>  Tính định thức ma trận các đạo hàm riêng của $(x,y,z)$ theo $(\\rho,\\theta,\\varphi)$ được $-\\rho^2\\sin\\varphi$; với $0\\le\\varphi\\le\\pi$ thì $\\sin\\varphi\\ge0$ nên $|J|=\\rho^2\\sin\\varphi$.<br>- <strong>Đúng</strong>.<br>  Tọa độ trụ: $V=\\{0\\le\\theta\\le2\\pi,\\ 0\\le r\\le2,\\ r^2\\le z\\le4\\}$. Thể tích bằng $\\displaystyle\\int_0^{2\\pi}\\int_0^2 r(4-r^2)\\,dr\\,d\\theta=2\\pi\\left(8-4\\right)=8\\pi$.<br>- <strong>Sai</strong>.<br>  Tọa độ cầu: $\\displaystyle\\int_0^{2\\pi}\\int_0^{\\pi}\\int_0^1\\rho^2\\cdot\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta=2\\pi\\cdot2\\cdot\\dfrac15=\\dfrac{4\\pi}{5}\\neq\\dfrac{4\\pi}3$ ($\\dfrac{4\\pi}{3}$ là thể tích khối cầu đơn vị).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
