window.dungSai3G41 = [
  {
    "id": "3G411DS1",
    "question": "Cho hàm số $f(x,y)=x^3y^2-2xy+y^3$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f'_x(1,2)=12$",
        "answer": false
      },
      {
        "text": "$f'_y(1,2)=14$",
        "answer": true
      },
      {
        "text": "$f''_{xy}(1,2)=f''_{yx}(1,2)=10$",
        "answer": true
      },
      {
        "text": "$f''_{xx}(1,2)=24$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Xem $y$ là hằng số: $f'_x=3x^2y^2-2y$, do đó $f'_x(1,2)=3\\cdot1\\cdot4-2\\cdot2=8\\neq 12$ (giá trị $12$ có được khi bỏ sót số hạng $-2y$).<br>- <strong>Đúng</strong>.<br>  Xem $x$ là hằng số: $f'_y=2x^3y-2x+3y^2$, do đó $f'_y(1,2)=4-2+12=14$.<br>- <strong>Đúng</strong>.<br>  $f''_{xy}=(f'_x)'_y=6x^2y-2$ và $f''_{yx}=(f'_y)'_x=6x^2y-2$ (hai đạo hàm hỗn hợp liên tục nên bằng nhau). Tại $(1,2)$: $6\\cdot2-2=10$.<br>- <strong>Đúng</strong>.<br>  $f''_{xx}=(3x^2y^2-2y)'_x=6xy^2$, do đó $f''_{xx}(1,2)=6\\cdot1\\cdot4=24$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G411DS2",
    "question": "Cho hàm số $f(x,y)=3x^2-xy+y^2$ và điểm $M(1,2)$. Đạo hàm theo hướng của vector đơn vị $\\vec u$ được tính theo công thức $D_{\\vec u}f=\\nabla f\\cdot\\vec u$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\nabla f(M)=(4,\\,3)$",
        "answer": true
      },
      {
        "text": "Đạo hàm theo hướng của vector đơn vị cùng hướng với $\\vec a=(3,\\,4)$ tại $M$ bằng $24$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của $D_{\\vec u}f(M)$ khi $\\vec u$ chạy trên tập các vector đơn vị bằng $5$",
        "answer": true
      },
      {
        "text": "Tại $M$, hàm số $f$ giảm nhanh nhất theo hướng của vector $(4,\\,3)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f'_x=6x-y$, $f'_y=-x+2y$ nên $\\nabla f(M)=(6-2,\\,-1+4)=(4,\\,3)$.<br>- <strong>Sai</strong>.<br>  Vector đơn vị cùng hướng với $\\vec a$ là $\\vec u=\\dfrac{\\vec a}{|\\vec a|}=\\left(\\dfrac35,\\dfrac45\\right)$. Khi đó $D_{\\vec u}f(M)=4\\cdot\\dfrac35+3\\cdot\\dfrac45=\\dfrac{24}{5}=4{,}8$. Giá trị $24$ là kết quả khi quên chuẩn hóa $\\vec a$.<br>- <strong>Đúng</strong>.<br>  $D_{\\vec u}f(M)=\\nabla f(M)\\cdot\\vec u=|\\nabla f(M)|\\cos\\alpha\\le|\\nabla f(M)|=\\sqrt{4^2+3^2}=5$, dấu bằng xảy ra khi $\\vec u$ cùng hướng với $\\nabla f(M)$.<br>- <strong>Sai</strong>.<br>  Theo hướng của $\\nabla f(M)=(4,\\,3)$ hàm số <em>tăng</em> nhanh nhất (đạo hàm theo hướng đạt giá trị lớn nhất $5$); hàm số giảm nhanh nhất theo hướng $-\\nabla f(M)=(-4,\\,-3)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G411DS3",
    "question": "Cho $z=u^2+uv-v^2$ với $u=x+2y$, $v=2x-y$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$z'_u=2u+v$ và $z'_v=u-2v$",
        "answer": true
      },
      {
        "text": "$z'_x(1,1)=9$",
        "answer": true
      },
      {
        "text": "$z'_y(1,1)=15$",
        "answer": false
      },
      {
        "text": "Nếu $x=y=t$ thì $\\dfrac{dz}{dt}\\Big|_{t=1}=22$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Xem $v$ là hằng số: $z'_u=2u+v$; xem $u$ là hằng số: $z'_v=u-2v$.<br>- <strong>Đúng</strong>.<br>  Tại $(x,y)=(1,1)$: $u=3$, $v=1$, $z'_u=7$, $z'_v=1$. Công thức đạo hàm hàm hợp: $z'_x=z'_u\\,u'_x+z'_v\\,v'_x=7\\cdot1+1\\cdot2=9$.<br>- <strong>Sai</strong>.<br>  $z'_y=z'_u\\,u'_y+z'_v\\,v'_y=7\\cdot2+1\\cdot(-1)=13\\neq15$ (giá trị $15$ có được khi lấy nhầm $v'_y=1$).<br>- <strong>Đúng</strong>.<br>  $\\dfrac{dz}{dt}=z'_x\\dfrac{dx}{dt}+z'_y\\dfrac{dy}{dt}=z'_x+z'_y$; tại $t=1$ (tức $x=y=1$) bằng $9+13=22$. Kiểm tra trực tiếp: $u=3t$, $v=t$ nên $z=9t^2+3t^2-t^2=11t^2$, $\\dfrac{dz}{dt}=22t$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G411DS4",
    "question": "Cho hàm số $f(x,y)=e^x\\ln(1+y)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$df(0,0)=dy$",
        "answer": true
      },
      {
        "text": "$d^2f(0,0)=dx\\,dy-dy^2$",
        "answer": false
      },
      {
        "text": "Khai triển Maclaurin của $f$ đến vi phân cấp hai là $f(x,y)\\approx y+xy-\\dfrac{y^2}{2}$",
        "answer": true
      },
      {
        "text": "Mặt phẳng tiếp xúc với mặt $z=f(x,y)$ tại điểm $O(0,0,0)$ có phương trình $z=x+y$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f'_x=e^x\\ln(1+y)$, $f'_y=\\dfrac{e^x}{1+y}$ nên $f'_x(0,0)=0$, $f'_y(0,0)=1$ và $df(0,0)=0\\cdot dx+1\\cdot dy=dy$.<br>- <strong>Sai</strong>.<br>  $f''_{xx}=e^x\\ln(1+y)$, $f''_{xy}=\\dfrac{e^x}{1+y}$, $f''_{yy}=-\\dfrac{e^x}{(1+y)^2}$; tại $(0,0)$ lần lượt bằng $0$, $1$, $-1$. Vậy $d^2f(0,0)=f''_{xx}dx^2+2f''_{xy}dx\\,dy+f''_{yy}dy^2=2\\,dx\\,dy-dy^2$ (mệnh đề thiếu hệ số $2$ của số hạng hỗn hợp).<br>- <strong>Đúng</strong>.<br>  $f(x,y)\\approx f(0,0)+df(0,0)+\\dfrac12d^2f(0,0)$ với $dx=x$, $dy=y$: $f\\approx 0+y+\\dfrac12(2xy-y^2)=y+xy-\\dfrac{y^2}{2}$.<br>- <strong>Sai</strong>.<br>  Mặt phẳng tiếp xúc: $z-f(0,0)=f'_x(0,0)(x-0)+f'_y(0,0)(y-0)$, tức $z=0\\cdot x+1\\cdot y=y$. Mệnh đề nhầm $f'_x(0,0)=e^0=1$, trong khi $f'_x(0,0)=e^0\\ln1=0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
