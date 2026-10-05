window.dungSai2D42 = [
  {
    "id": "2D422DS1",
    "question": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[a;b]$. Gọi $F(x)$ là một nguyên hàm của hàm số $y=f(x)$ trên đoạn $[a;b]$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=F(b)-F(a)$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=-\\displaystyle\\int\\limits_b^a f(x) \\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "Nếu $a&lt;c&lt;b$ và $\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x=m$, $\\displaystyle\\int\\limits_c^a f(x) \\mathrm{\\,d}x=n$ thì $\\displaystyle\\int\\limits_c^b f(x) \\mathrm{\\,d}x=m-n$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_a^b \\left[2024f(x)+2025\\right]\\mathrm{d}x=2024\\displaystyle\\int\\limits_a^b f(x) \\mathrm{\\,d}x+2025(a-b)$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x=F(x)\\Big|_a^b=F(b)-F(a)$.<br>- Ta có $\\displaystyle \\int\\limits_b^a f(x) \\mathrm{\\,d}x=F(x)\\Big|_b^a=F(a)-F(b)=-\\left[F(b)-F(a)\\right]=-\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x$.<br>- Với $a&lt;c&lt;b$ ta có  $\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_a^c f(x) \\mathrm{\\,d}x+\\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x-\\displaystyle \\int\\limits_a^c f(x) \\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x+\\displaystyle \\int\\limits_c^a f(x) \\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle \\int\\limits_c^b f(x) \\mathrm{\\,d}x=m+n.$<br>- Ta có $\\displaystyle \\int\\limits_a^b \\left[ 2024f(x)+2025\\right] \\mathrm{d}x = 2024 \\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x +2025 \\displaystyle \\int\\limits_a^b \\mathrm{d}x$<br>$= 2024\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x+2025x\\Big|_a^b$<br>$= 2024\\displaystyle \\int\\limits_a^b f(x) \\mathrm{\\,d}x+2025(b-a).$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427DS2",
    "question": "Một chất điểm chuyển động trên đường thẳng nằm ngang (chiều dương hướng sang phải) với gia tốc phụ thuộc vào thời gian $t$ (s) là $a(t)=2t-7$ (m/s$^2$). Biết vận tốc đầu bằng $6$ (m/s).",
    "subQuestions": [
      {
        "text": "Vận tốc tức thời của chất điểm tại thời điểm $t$ (s) xác định bởi $v(t)=t^2-7t+10$",
        "answer": false
      },
      {
        "text": "Tại thời điểm $t=7$ (s), vận tốc của chất điểm là $6$ m/s",
        "answer": true
      },
      {
        "text": "Độ dịch chuyển của vật trong khoảng thời gian $1 \\le t\\le 7$ là $18$ m",
        "answer": false
      },
      {
        "text": "Trong $8$ giây đầu tiên, thời điểm chất điểm xa nhất về phía bên phải là $t=7$ (s)",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $v(t)=\\displaystyle\\int\\limits a(t) \\mathrm{\\,d}t=\\displaystyle\\int\\limits \\left(2t-7\\right)\\mathrm{\\,d}t=t^2-7t+C$.<br>  Ta có $v(0)=6 \\Rightarrow C=6$.<br>  Vậy $v(t)=t^2-7t+6$ (m/s).<br>- Tại thời điểm $t=7$ (s), ta có $v(7)=7^2-7 \\cdot 7+6=6$ (m/s).<br>- Độ dịch chuyển của vật trong khoảng thời gian $1 \\le t \\le 7$ là \\[S=\\displaystyle\\int\\limits_1^7 v(t) \\mathrm{\\,d}t=\\displaystyle\\int\\limits_1^7 \\left(t^2-7t+6\\right)\\mathrm{\\,d}t=\\left(\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t\\right)\\Bigg|_1^7=-18.\\]<br>- Tọa độ của chất điểm tại thời điểm $t$ là   \\[x(t)=\\displaystyle\\int\\limits v(t) \\mathrm{\\,d}t=\\displaystyle\\int\\limits \\left(t^2-7t+6\\right) \\mathrm{\\,d}t=\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t+C.\\]  Ta cần tìm giá trị lớn nhất của $x(t)$ với $t \\in [0;8]$.<br>  Ta có $x'(t)=v(t)=0$ khi $t=1$ hoặc $t=6$.<br>  Ta có $x(0)=C$; $x(1)=\\dfrac{17}{6}+C$, $x(6)=-18+C$, $x(8)=-\\dfrac{16}{3}+C$.<br>  Vậy giá trị lớn nhất của $x(t)$ với $t \\in [0;8]$ đạt được khi $t=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS3",
    "question": "Cho hàm số $f(x)=2x^3-1$ và hàm số $g(x)$ xác định trên $\\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int f(x) \\mathrm{d}x =\\dfrac{x^4}{2}+C$",
        "answer": false
      },
      {
        "text": "Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành, $2$ đường thẳng $x=0$; $x=1$ quanh $Ox$ bằng $\\dfrac{5}{7}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x =\\left.\\left(\\dfrac{x^4}{2}-x\\right)\\right|_{-2}^2$",
        "answer": true
      },
      {
        "text": "Biết $\\displaystyle\\int_{-2}^2 \\left[f(x)+g(x)\\right] \\mathrm{d}x =15$. Khi đó $\\displaystyle\\int_{-2}^2 g(x) \\mathrm{d}x =19$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.  Ta thấy  $  \\displaystyle\\int f(x) \\mathrm{d}x   =\\displaystyle\\int \\left(2x^3-1\\right) \\mathrm{d}x   =\\dfrac{x^4}{2}-x+C.  $<br>- <strong>Sai</strong>.  Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành, $2$ đường thẳng $x=0$; $x=1$ quanh $Ox$ là  $V = \\pi \\displaystyle\\int \\left(2x^3-1\\right)^2 \\mathrm{d}x$<br>$= \\pi \\displaystyle\\int \\left(4x^6-4x^3+1\\right) \\mathrm{d}x$<br>$= \\pi \\left. \\left(\\dfrac{4}{7}x^7 - x^4 + x\\right) \\right|_0^1$<br>$= \\dfrac{4\\pi}{7}.$<br>- <strong>Đúng</strong>.  Ta thấy  $  \\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x  = \\displaystyle\\int_{-2}^2 \\left(2x^3-1\\right) \\mathrm{d}x  = \\left. \\left(\\dfrac{x^4}{2}-x\\right) \\right|_{-2}^2  = -4.  $<br>- <strong>Đúng</strong>.  Ta có  $  \\displaystyle\\int_{-2}^2 \\left[f(x)+g(x)\\right] \\mathrm{d}x =15  \\Leftrightarrow  \\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x + \\displaystyle\\int_{-2}^2 g(x) \\mathrm{d}x = 15.  $  Mà $\\displaystyle\\int_{-2}^2 f(x) \\mathrm{d}x = -4$ nên  $  \\displaystyle\\int_{-2}^2 g(x) \\mathrm{d}x = 15 + 4 = 19.  $",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS4",
    "question": "Cho $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x = 4$, $\\displaystyle\\int\\limits_{0}^{3} f(x)\\mathrm{\\,d}x= 3$ và $\\displaystyle\\int\\limits_{0}^{3} g(x)\\mathrm{\\,d}x= -2$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_{2}^{0} f(x)\\mathrm{\\,d}x= -\\dfrac{1}{4}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_{2}^{3} f(x)\\mathrm{\\,d}x= -1$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{0}^{2} (f(x)-x)\\mathrm{\\,d}x= 2$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{0}^{3} (f(x)-2g(x))\\mathrm{\\,d}x= 7$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x = 4\\Rightarrow \\displaystyle\\int\\limits_{2}^{0} f(x)\\mathrm{\\,d}x= -4$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_{2}^{3} f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{3} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x=3-4=-1$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_{0}^{2} (f(x)-x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{2} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{0}^{2} x\\mathrm{\\,d}x=4-2= 2$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int\\limits_{0}^{3} (f(x)-2g(x))\\mathrm{\\,d}x=3-2\\cdot(-2)= 7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427DS5",
    "question": "Một vật chuyển động với vận tốc $y=v(t)$ (m/s) được cho bởi đồ thị như hình vẽ bên dưới. Trong thời gian 3 giây kể từ khi bắt đầu chuyển động, đồ thị đó là một phần của đường parabol có đỉnh $I(2;4)$, khoảng thời gian còn lại đồ thị là đoạn thẳng song song trục hoành.<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS25_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Vận tốc không đổi trong khoảng thời gian từ $3$ giây đến $5$ giây",
        "answer": true
      },
      {
        "text": "Trong $3$ giây đầu tiên thì $v(t)=-t^2+4t$",
        "answer": true
      },
      {
        "text": "Quãng đường mà vật di chuyển trong 3 giây đầu được tính bởi công thức $\\displaystyle\\int_0^3\\left(-t^2+4t\\right) \\mathrm{\\,d}t$",
        "answer": true
      },
      {
        "text": "Quãng đường mà vật di chuyển trong $5$ giây kể từ khi bắt đầu chuyển động bằng $\\dfrac{250}{3}$ (m)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Vận tốc không đổi trong khoảng thời gian từ $3$ giây đến $5$ giây.<br>- <strong>Đúng</strong>.<br>  Giả sử phương trình vận tốc của vật là $v(t)=at^2+bt+c\\ (a\\ne 0)$.<br>  Ta có $c=0 \\text{ và } 4a+2b+c=4 \\text{ và } -\\dfrac{b}{2a}=2\\Leftrightarrow c=0 \\text{ và } b=4 \\text{ và } a=-1\\Leftrightarrow v(t)=-t^2+4t$.<br>- <strong>Đúng</strong>.<br>  Quãng đường mà vật di chuyển trong 3 giây đầu được tính bởi công thức $\\displaystyle\\int_0^3\\left(-t^2+4t\\right) \\mathrm{\\,d}t$<br>- <strong>Sai</strong>.<br>  Ta có $v(3)=3$ suy ra phương trình chuyển động của vận tốc trên khoảng từ $3$ đến $5$ giây là $v=3$.<br>  Vậy quãng đường mà vật di chuyển trong $5$ giờ là  $\\displaystyle\\int\\limits_{0}^{3} (-t^2+4t) \\mathrm{\\,d}t+\\displaystyle\\int\\limits_{3}^{5} 3 \\mathrm{\\,d}t =15$ (km).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427DS6",
    "question": "Một chất điểm chuyển động trên đường thẳng nằm ngang (chiều dương hướng sang phải) với gia tốc phụ thuộc vào thời gian $t$ (s) là $a(t)=2t-7$ m/s$^2$. Biết vận tốc đầu bằng $6$ m/s.",
    "subQuestions": [
      {
        "text": "Vận tốc tức thời của chất điểm tại thời điểm $t$ (s) xác định bởi $v(t)=t^2-7t+10$",
        "answer": false
      },
      {
        "text": "Tại thời điểm $t=7$ s, vận tốc của chất điểm là $6$ m/s",
        "answer": true
      },
      {
        "text": "Độ dịch chuyển của vật trong khoảng thời gian $1 \\le t \\le 7$ là $18$ m",
        "answer": false
      },
      {
        "text": "Trong $8$ giây đầu tiên, thời điểm chất điểm xa nhất về phía bên phải là $t=7$ s",
        "answer": false
      }
    ],
    "explain": "<br>- $v(t)=\\displaystyle\\int\\limits a(t) \\mathrm{\\,d}t=t^2-7t+C$.<br>  Khi $t=0$ thì $v=6$ m/s, suy ra $v(0)=6 \\Rightarrow C=6$.<br>  Vậy $v(t)=t^2-7t+6$ m/s.<br>- Ta có $v(7)=7^2-7\\cdot7+6=49-49+6=6$ m/s.<br>- Độ dịch chuyển $\\Delta s=s(7)-s(1)=\\displaystyle\\int\\limits_1^7 v(t) dt=\\displaystyle\\int\\limits_1^7 (t^2-7t+6) \\mathrm{\\,d}t=-18\\ne 18$.<br>- Độ dịch chuyển là<br>  $d(t)=\\displaystyle\\int\\limits v(t)\\,\\mathrm{d}t=\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t+C$. <br>  $d(0)=0 \\Rightarrow C=0$.<br>  $\\Rightarrow d(t)=\\dfrac{t^3}{3}-\\dfrac{7t^2}{2}+6t$  Ta có  $d'(t)=0 \\Leftrightarrow v(t)=0$<br>$\\Leftrightarrow t^2-7t+6=0$<br>$\\Leftrightarrow (t-6)(t-1)=0$<br>$\\Leftrightarrow t=1 \\text{ hoặc } t=6.$  Bảng biến thiên  <br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS27_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  $d(1)=\\dfrac{1^3}{3}-\\dfrac{7\\cdot1^2}{2}+6\\cdot1=2{,}83$,<br>  $d(8)=\\dfrac{8^3}{3}-\\dfrac{7\\cdot8^2}{2}+6\\cdot8=-5{,}33$.<br>  Vậy thời điểm chất điểm xa nhất về phía bên phải trong khoảng $0 \\le t \\le 8$ là $t=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS7",
    "question": "Cho số thực $a$ và hàm số $f(x) = 2x \\text{khi }x\\le0 \\text{ và } a\\left(x-x^2\\right) \\text{khi }x&gt;0$",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits_{-1}^0 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-1}^0 2x \\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{0}^1 f(x) \\mathrm{\\,d}x=-\\dfrac{a}{6}$",
        "answer": false
      },
      {
        "text": "Khi $a=2$, $\\displaystyle\\int\\limits_{-1}^1 f(x) \\mathrm{\\,d}x=-\\dfrac{2}{3}$",
        "answer": true
      },
      {
        "text": "Điều kiện cần cà đủ để $\\displaystyle\\int\\limits_{-1}^2 f(x) \\mathrm{\\,d}x&gt;3$ là $a&gt;-6$",
        "answer": false
      }
    ],
    "explain": "<br>- $\\displaystyle\\int\\limits_{-1}^0 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-1}^0 2x\\mathrm{\\,d}x$.<br>- $\\displaystyle\\int\\limits_{0}^1 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^1 a\\left(x-x^2\\right)\\mathrm{\\,d}x=a\\left(\\dfrac{x^2}{2}-\\dfrac{x^3}{3}\\right)\\Bigg|_0^1=a\\left(\\dfrac{1^2}{2}-\\dfrac{1^3}{3}\\right)=\\dfrac{a}{6}$.<br>- Khi $a=2$, $\\displaystyle\\int\\limits_{-1}^1 f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-1}^0 2x \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{0}^1 2\\left(x-x^2\\right) \\mathrm{\\,d}x=-1+\\dfrac{1}{3}=-\\dfrac{2}{3}$.<br>- Ta có   $\\displaystyle\\int\\limits_{-1}^2 f(x) \\mathrm{\\,d}x = \\displaystyle\\int\\limits_{-1}^0 2x \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{0}^2 a\\left(x-x^2\\right) \\mathrm{\\,d}x$<br>$= -1+a\\left(\\dfrac{x^2}{2}-\\dfrac{x^3}{3}\\right)\\Bigg|_0^2=-1-\\dfrac{2a}{3}$  Do đó $\\displaystyle\\int\\limits_{-1}^2 f(x) \\mathrm{\\,d}x&gt;3\\Leftrightarrow -1-\\dfrac{2a}{3}&gt;3\\Leftrightarrow a&lt;-6$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS8",
    "question": "Cho hàm số $f(x)=5x^4-2x$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int f(x) \\mathrm{\\,d}x$=$\\displaystyle\\int 5x^4 \\mathrm{\\,d}x$+ $\\displaystyle\\int 2x \\mathrm{\\,d}x$",
        "answer": false
      },
      {
        "text": "Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ thỏa mãn $F(0)=3$ thì $F(x)=x^5-x^2+3$",
        "answer": true
      },
      {
        "text": "Nếu $F'(x)=f(x), \\forall x\\in\\mathbb{R}$ thì $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ thõa mãn $F(1)=3$ thì $F(-1)=1$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x$=$\\displaystyle\\int 5x^4 \\mathrm{\\,d}x -\\displaystyle\\int 2x \\mathrm{\\,d}x$.<br>- Ta có $\\displaystyle\\int (5x^4-2x) \\mathrm{\\,d}x=x^5-x^2+C$.<br>  $F(0)=3\\Leftrightarrow C=3$. Suy ra $F(x)=x^5-x^2+3$.<br>- Nếu $F'(x)=f(x), \\forall x\\in\\mathbb{R}$ thì $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $\\mathbb{R}$.<br>- Ta có $F(1)=3\\Leftrightarrow C=3$, suy ra $F(x)=x^5-x^2+3$.<br>  Vậy $F(-1)=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427DS9",
    "question": "Một ô tô đang chạy với tốc độ $54\\,\\text{km/h}$ thì người lái xe bất ngờ phát hiện chướng ngại vật trên đường cách đó $38\\,\\text{m}$. Người lái xe phản ứng một giây và sau đó đạp phanh khẩn cấp. Kể từ thời điểm này, ô tô chuyển động chậm dần đều với tốc độ $v\\left( t \\right) = -5t + 15\\,\\left( \\text{m/s} \\right)$, trong đó $t$ là thời gian tính bằng giây. Gọi $s\\left( t \\right)$ là quãng đường xe ô tô đi được trong thời gian $t$ (giây) kể từ lúc đạp phanh.",
    "subQuestions": [
      {
        "text": "Hàm số $s\\left( t \\right)$ được biểu diễn bởi công thức $s\\left(t \\right) = -\\dfrac{5}{2}t^2 + 15t$",
        "answer": true
      },
      {
        "text": "Thời gian kể từ lúc đạp phanh đến khi ô tô dừng hẳn là $3$ giây",
        "answer": true
      },
      {
        "text": "Quãng đường ô tô đi được từ lúc đạp phanh đến lúc dừng hẳn là $20\\,\\text{m}$",
        "answer": false
      },
      {
        "text": "Ô tô không chạm vào chướng ngại vật",
        "answer": true
      }
    ],
    "explain": "Đổi $54\\,\\text{km/h} = 15\\,\\text{m/s} $  <br>- $s(t)=\\displaystyle \\int \\limits v(t)\\,\\mathrm{d}x =\\displaystyle \\int \\limits \\left(-5t+15\\right)\\,\\mathrm{d}x =-\\dfrac{5}{2}t^2 + 15t+C$.<br>  Vì $s(0)=0$ nên $C=0$.<br>  Do đó hàm số $s\\left( t \\right)$ được biểu diễn bởi công thức $s\\left(t \\right) = -\\dfrac{5}{2}t^2 + 15t$.<br>- Khi xe dừng hẳn thì $v(t)=0 \\Leftrightarrow -5t+15=0 \\Leftrightarrow t=3$.<br>  Vậy thời gian kể từ lúc đạp phanh đến khi ô tô dừng hẳn là $3$ giây.<br>- Quãng đường ô tô đi được từ lúc đạp phanh đến khi dừng hẳn là $s_1=\\displaystyle \\int \\limits_0^3 v(t)\\,\\mathrm{d}x=\\displaystyle \\int \\limits_0^3 (-5t+15)\\,\\mathrm{d}x=22{,}5\\, \\text{(m).}$<br>- Quãng đường ô tô đi được kể từ khi phát hiện chướng ngại vật đến khi đạp phanh là $s_2=15 \\cdot 1=15$ (m).<br>  Tổng quãng đường từ khi nhìn thấy chướng ngại vật đến khi xe dừng hẳn là $37{,}5$ (m).<br>  Vậy ô tô không chạm vào chướng ngại vật.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS10",
    "question": "Cho hàm số $f(x)$ thỏa mãn $f'(x)=x+{e}^x$, $\\forall x\\in\\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits_1^2 f'(x){\\,d}x={e}^2+{e}+\\dfrac{5}{2}$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị của các đường $y=f'(x)$, $y=x+1$ và $x=2$ là $\\dfrac{57}{13}$",
        "answer": false
      },
      {
        "text": "$f(x)={e}^x+x^2+C$",
        "answer": false
      },
      {
        "text": "Khi $f(0)=4$ thì $\\displaystyle\\int\\limits_0^1 f(x){\\,d}x=\\dfrac{6{e}+13}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có \\[\\displaystyle\\int\\limits_1^2 f'(x){\\,d}x=\\displaystyle\\int\\limits_1^2 x+{e}^x{\\,d}x=\\left.\\left({e}^x+\\dfrac{1}{2}x^2\\right)\\right|^2_1={e}^2-{e}+\\dfrac{3}{2}.\\]<br>- Hoàng độ giao điểm của các đường $y=f'(x)$, $y=x+1$ là  \\[x+{e}^x=x+1 \\Leftrightarrow {e}^x=1 \\Leftrightarrow x=0.\\]  Do trên đoạn $[0;2]$: $f'(x)-(x+1)={e}^x-1&gt;0$. <br>  Diện tích hình phẳng giới hạn là \\[S=\\displaystyle\\int\\limits_0^2 \\left({e}^x-1\\right){\\,d}x={e}^2-3.\\]<br>- $f(x)=\\displaystyle\\int f'(x){\\,d}x={e}^x+\\dfrac{1}{2}x^2+C$.<br>- Có $f(x)=\\displaystyle\\int f'(x){\\,d}x={e}^x+\\dfrac{1}{2}x^2+C$. <br>  Với $f(0)=4 \\Leftrightarrow {e}^0+\\dfrac{1}{2}\\cdot0^2+C=4 \\Leftrightarrow C=4$. <br>  Với $f(x)={e}^x+\\dfrac{1}{2}x^2+4$. <br>  Khi đó $\\displaystyle\\int\\limits_0^1 f(x){\\,d}x={e}+\\dfrac{6}{13}=\\dfrac{6{e}+13}{6}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS1",
    "question": "Biết rằng hàm số $f(x) = a x^2 + b x + c$, ($a$, $b$, $c \\in \\mathbb{R}$) thỏa mãn $\\displaystyle \\int \\limits_0^1 f(x)\\, \\mathrm{d}x = -\\dfrac{7}{2}$, $\\displaystyle \\int \\limits_0^2 f(x)\\, \\mathrm{d}x = -2$ và $F(x)$ là một nguyên hàm của $f(x)$ trên đoạn $[0; 3]$.",
    "subQuestions": [
      {
        "text": "$F(1) - F(0) = -\\dfrac{7}{2}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle \\int \\limits_1^2 f(x)\\, \\mathrm{d}x = \\dfrac{3}{2}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle \\int f(x)\\, \\mathrm{d}x = \\int \\left(a x^2 + b x + c\\right)\\, \\mathrm{d}x = \\dfrac{a}{3} x^3 + \\dfrac{b}{2} x^2 + c x$",
        "answer": false
      },
      {
        "text": "Biết $\\displaystyle \\int \\limits_0^3 f(x)\\, \\mathrm{d}x = \\dfrac{13}{2}$, khi đó $a + b + 3c = -12$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có  \\[F(1) - F(0)=\\displaystyle \\int \\limits_0^1 f(x)\\, \\mathrm{d}x=-\\dfrac{7}{2}.\\]<br>- Ta có  \\[\\displaystyle \\int \\limits_0^1 f(x)\\, \\mathrm{d}x + \\int \\limits_1^2 f(x)\\, \\mathrm{d}x=\\int \\limits_0^2 f(x)\\, \\mathrm{d}x \\Leftrightarrow -\\dfrac{7}{2}+ \\int \\limits_1^2 f(x)\\, \\mathrm{d}x=-2 \\Leftrightarrow \\int \\limits_1^2 f(x)\\, \\mathrm{d}x =\\dfrac{3}{2}.\\]<br>- Ta có  \\[\\displaystyle \\int f(x)\\, \\mathrm{d}x = \\int \\left(a x^2 + b x + c\\right)\\, \\mathrm{d}x = \\dfrac{a}{3} x^3 + \\dfrac{b}{2} x^2 + c x+C.\\]<br>- Ta có   <br>- $\\displaystyle \\int \\limits_0^1 f(x) \\ \\mathrm{d}x=\\left(\\dfrac{a}{3} x^3 + \\dfrac{b}{2} x^2 + c x\\right)\\Bigg|^1_0=\\dfrac{a}{3}+\\dfrac{b}{2}+c=-\\dfrac{7}{2}$.<br>- $\\displaystyle \\int \\limits_0^2 f(x) \\ \\mathrm{d}x=\\left(\\dfrac{a}{3} x^3 + \\dfrac{b}{2} x^2 + c x\\right)\\Bigg|^2_0=\\dfrac{8a}{3}+2b+2c=-2$.<br>- $\\displaystyle \\int \\limits_0^3 f(x) \\ \\mathrm{d}x=\\left(\\dfrac{a}{3} x^3 + \\dfrac{b}{2} x^2 + c x\\right)\\Bigg|^3_0=9a+\\dfrac{9b}{2}+3c=\\dfrac{13}{2}$.  Suy ra $a=1$, $b=3$, $c=-\\dfrac{16}{3}$.<br>  Nên $a+b+3c=1+3+3\\cdot \\left(-\\dfrac{16}{3}\\right)=-12$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS2",
    "question": "Cho hàm số $f(x)=2x+1$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle \\int f(x)\\,\\mathrm{d}x = x^2 + x + C$",
        "answer": true
      },
      {
        "text": "$\\displaystyle \\int \\limits_0^1 (x - 1) f(x)\\,\\mathrm{d}x = \\dfrac{2}{3}$",
        "answer": false
      },
      {
        "text": "Nếu $G(x)$ là một nguyên hàm của $f(x)$ với $G(2) = 5$ thì $G(x) = x^2 + x - 1$",
        "answer": true
      },
      {
        "text": "Gọi $F(x)$ là một nguyên hàm của $f(x)$, biết $F(1) = 2$ và $ \\dfrac{1}{F(1)} + \\dfrac{1}{F(2)} + \\cdots + \\dfrac{1}{F(100)} = \\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}$, $\\dfrac{a}{b}$ tối giản thì $a + b = 201$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có  \\[\\displaystyle \\int f(x)\\,\\mathrm{d}x =\\int (2x+1)\\,\\mathrm{d}x = x^2 + x + C.\\]<br>- Ta có  $\\displaystyle \\int \\limits_0^1(x-1)f(x)\\,\\mathrm{d}x = \\int \\limits_0^1(x-1)(2x+1)\\,\\mathrm{d}x =\\int \\limits_0^1 (2x^2-x-1)\\,\\mathrm{d}x$<br>$= \\left(\\dfrac{2}{3}x^3-\\dfrac{1}{2}x^2-x\\right) \\Bigg|_0^1=\\left(\\dfrac{2}{3}-\\dfrac{1}{2}-1\\right) -0=-\\dfrac{5}{6}.$<br>- $G(x)$ là một nguyên hàm của $f(x)$ nên $G(x)=x^2+x+C$.<br>  Lại có $G(2)=2^2+2+C=5$ nên $C=-1$.<br>  Vậy $G(x)=x^2+x-1$.<br>- $F(x)$ là một nguyên hàm của $f(x)$ nên $F(x)=x^2+x+C$.<br>  Lại có $F(1)=1^2+1+C=2$ nên $C=0$.<br>  Vậy $F(x)=x^2+x=x(x+1)$.<br>  Ta có $\\dfrac{1}{F(x)} =\\dfrac{1}{x(x+1)} =\\dfrac{1}{x}-\\dfrac{1}{x+1}$.<br>  Suy ra   \\[\\dfrac{1}{F(1)} + \\dfrac{1}{F(2)} + \\cdots + \\dfrac{1}{F(100)} = \\dfrac{1}{1}-  \\dfrac{1}{2}+\\dfrac{1}{2}-\\dfrac{1}{3}+\\cdots+\\dfrac{1}{99}-\\dfrac{1}{100}=1 -\\dfrac{1}{100}=\\dfrac{99}{100}.\\]  Vậy $a=99$, $b=100$ nên $a+b=199$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS11",
    "question": "Trong không gian $Oxyz$, cho mặt phẳng $(P)$ có phương trình $2x + y + 2z - 3 = 0$.",
    "subQuestions": [
      {
        "text": "Mặt phẳng $(P)$ có một vectơ pháp tuyến là $\\overrightarrow{n} = (2; 1; 2)$",
        "answer": true
      },
      {
        "text": "Điểm $M(1; -1; -1)$ thuộc mặt phẳng $(P)$",
        "answer": false
      },
      {
        "text": "Phương trình mặt phẳng $(Q)$ đi qua $A(2; 3; -1)$ và song song với mặt phẳng $(P)$ là $2x + y + 2z - 7 = 0$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(\\alpha)$ chứa trục $Ox$ và vuông góc với $(P)$ có phương trình dạng $ax + by - 2z + d = 0$, khi đó $T = a - 3b + d = -12$",
        "answer": true
      }
    ],
    "explain": "<br>- Phương trình mặt phẳng $(P) \\colon 2x+y+2z-3=0$ nên vectơ pháp tuyến của mặt phẳng $(P)$ là $\\overrightarrow{n}=(2;12)$.<br>- Thay tọa độ điểm $M(1; -1; -1)$ vào phương trình mặt phẳng, ta được   \\[2 \\cdot 1 + (-1) + 2 \\cdot (-1) = -1 \\ne 3\\]  nên $M$ không thuộc mặt phẳng.<br>- Vì $(P) \\parallel (Q)$ nên $\\overrightarrow{n}_{(P)}=\\overrightarrow{n}_{(Q)}=(2;1;2)$.<br>  Phương trình mặt phẳng $(Q)$ là  \\[2 \\cdot (x-2)+1 \\cdot (y-3) +2 \\cdot (z+1)=0 \\Leftrightarrow 2x+y+2z-5=0.\\]<br>- Vì mặt phẳng $(\\alpha)$ chứa trục $Ox$ và vuông góc với mặt phẳng $(P)$ nên $\\overrightarrow{i}$, $\\overrightarrow{n}_{(P)}$ là cặp vectơ chỉ phương của mặt phẳng $(\\alpha)$.<br>  Suy ra $\\overrightarrow{n}_{(\\alpha)}=\\left[\\overrightarrow{i},\\overrightarrow{n}_{(P)}\\right]=(0;-2;1)$.<br>  Lại có mặt phẳng $(\\alpha)$ đi qua gốc tọa độ $O$ nên phương trình mặt phẳng $(\\alpha)$ là  \\[0 \\cdot (x-0)-2(y-0)+1 \\cdot (z-0)= 0\\Leftrightarrow -2y+z=0 \\Leftrightarrow4y-2z=0.\\]  Vậy $a=0$, $b=4$, $d=0$ nên $a-3b+d=0-3\\cdot4+0=-12$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D423DS4",
    "question": "Cho hàm số $f(x) = 2x - 3\\cos x$.",
    "subQuestions": [
      {
        "text": "Một nguyên hàm của $f(x)$ là $g(x) = x^2 + 3\\sin x + 2$",
        "answer": false
      },
      {
        "text": "Nếu $F(x)$ là một nguyên hàm của $f(x)$ và $F\\left(\\dfrac{\\pi}{2}\\right) = 3$ thì $F(x) = x^2 - 3\\sin x + 6$",
        "answer": false
      },
      {
        "text": "Nguyên hàm $F(x)$ của $f(x)$ thỏa mãn điều kiện $F(0) = 0$ là $F(x) = x^2 - 3\\sin x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle \\int f(x + \\pi)\\,\\mathrm{d}x = x^2 + 3\\sin x + 2(\\pi + C)$, $C$ là hằng số",
        "answer": true
      }
    ],
    "explain": "Ta có nguyên hàm của $f(x)$ là $\\displaystyle \\int f(x)\\,\\mathrm{d}x = \\int (2x - 3\\cos x)\\,\\mathrm{d}x = x^2 - 3\\sin x + C$.  <br>- $g(x) = x^2 + 3\\sin x + 2$ không phải là một nguyên hàm của $f(x)$.<br>- $F(x)$ là một nguyên hàm của $f(x)$ nên $F(x) = x^2 - 3\\sin x + C$. Ta có   \\[F\\left(\\dfrac{\\pi}{2}\\right)=\\left(\\dfrac{\\pi}{2}\\right)^2-3 \\sin \\dfrac{\\pi}{2}+C=\\dfrac{\\pi^2}{4}-3+C=3 \\Leftrightarrow C=6-\\dfrac{\\pi^2}{4}.\\]  Suy ra $F(x)=x^2 -3\\sin x +6 -\\dfrac{\\pi^2}{4}$.<br>- $F(x)$ là một nguyên hàm của $f(x)$ nên $F(x) = x^2 - 3\\sin x + C$. Ta có   \\[F(0)=0^2-3 \\sin 0+C=C=0.\\]  Suy ra $F(x)=x^2 -3\\sin x$.<br>- Ta có  \\[\\displaystyle \\int f(x+\\pi)\\ \\mathrm{d} x=\\int 2(x+\\pi) -3 \\cos (x +\\pi) \\ \\mathrm{d}x=\\int 2x+3\\cos x +2\\pi \\ \\mathrm{d} x=x^2+3\\sin x +2\\pi x +C.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427DS10",
    "question": "Một loại thuốc $A$ được tiêm vào bệnh nhân, nồng độ (đơn vị: mg/l) của thuốc trong máu sau $x$ phút (kể từ khi bắt đầu tiêm) được xác định bởi công thức $f(x)=\\dfrac{30x}{x^2+4}$. Để đưa ra lời khuyên và cách xử lí phù hợp cho bệnh nhân, người ta cần tính toán một số yếu tố về nồng độ của thuốc trong máu.",
    "subQuestions": [
      {
        "text": "Sau $10$ ngày thì nồng độ thuốc $A$ trong máu nhỏ hơn $0{,}002$ mg/l",
        "answer": false
      },
      {
        "text": "Nồng độ thuốc trong máu đạt giá trị lớn nhất là $7{,}5$ mg/l tại thời điểm $2$ phút sau khi tiêm",
        "answer": true
      },
      {
        "text": "$F(x)=10\\ln \\left(x^2+4\\right)$ là một nguyên hàm của $f(x)$",
        "answer": false
      },
      {
        "text": "Nồng độ trung bình của thuốc $A$ (làm tròn đến hàng phần trăm) trong khoảng thời gian $30$ phút từ khi bắt đầu tiêm là $2{,}71$ mg/l",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Ta có $10$ ngày = $14\\,400$ phút.<br>  Ta tính $f(14\\,400)=f(14400)=\\dfrac{30 \\cdot 14\\,400}{14\\,400^2+4}\\approx 0{,}002083&gt;0{,}002$.<br>- <strong>Đúng</strong>.<br>  Xét hàm số $f(x)=\\dfrac{30x}{x^2+4}$ có $f'(x)=\\dfrac{30(-x^2+4)}{\\left(x^2+4\\right)^2}$.<br>  Ta có $f'(x)=0 \\Leftrightarrow -x^2+4=0 \\Leftrightarrow x=2 \\text{ hoặc } x=-2.$<br>  Do $x&gt;0$ nên ta nhận $x=2$, khi đó ta có bảng biến thiên sau  <br><img src=\"data/12/2D4/im2D42/loc3_2_TL_TN_THPT_Chu_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy nồng độ thuốc trong máu đạt giá trị lớn nhất là $7{,}5$ mg/l tại thời điểm $2$ phút sau khi tiêm.<br>- <strong>Sai</strong>.<br>  Xét $F(x)=10\\ln \\left(x^2+4\\right)$, ta tính đạo hàm  \\[  F'(x)=\\left[10\\ln (x^2+4)\\right]=\\dfrac{20x}{x^2+4} \\ne \\dfrac{30x}{x^2+4} = f(x).  \\]<br>- <strong>Đúng</strong>.<br>  Ta có $A=\\dfrac{1}{30-0}\\displaystyle\\int\\limits_{0}^{30} f(x) \\mathrm{\\,d}x \\approx 2{,}71$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS6",
    "question": "Cho hàm số $y=f(x)$ có đồ thị như hình bên.<br><img src=\"data/12/2D4/im2D42/loc3_2_TL_TN_THPT_Chu_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục $Ox$ và hai đường thẳng $x=3$, $x=5$ tính bởi công thức là $\\displaystyle\\int\\limits_3^5f(x)\\mathrm{\\,d}x$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục $Ox$ và hai đường thẳng $x=0$, $x=2$ là $2$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_1^2f(t)\\mathrm{\\,d}t=2$",
        "answer": true
      },
      {
        "text": "Biết rằng $f(x)$ là một hàm số bậc ba khi $x \\in[2; 5]$. Khi đó $\\displaystyle\\int\\limits_0^5f(x) \\mathrm{\\,d}x=-\\dfrac{9}{4}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục $Ox$ và hai đường thẳng $x=3$, $x=5$ tính bởi công thức là $\\displaystyle\\int\\limits_3^5|f(x)|\\mathrm{\\,d}x$.<br>- <strong>Sai</strong>.<br>  Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục $Ox$ và hai đường thẳng $x=0$, $x=2$ bằng  \\[  S_1=\\dfrac{1}{2}\\cdot 1 \\cdot 2 + 2 \\cdot 1 = 3.  \\]<br>- <strong>Đúng</strong>.<br>  Ta có trên đoạn $[1;2]$ thì $f(x)=2$ nên  \\[  \\displaystyle\\int\\limits_1^2f(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^2 2\\mathrm{\\,d}x=(2-1)\\cdot 2=2.  \\]<br>- <strong>Sai</strong>.<br>  Trên đoạn $[2;5]$, $f(x)$ là hàm số bậc ba nên có dạng $f(x)=ax^3+bx^2+cx+d$ có đồ thị $(P)$. <br>  Ta có  \\[  (2;2) \\in (P) \\text{ và } (3;0) \\in (P) \\text{ và } (4;-2) \\in (P) \\text{ và } (5;2) \\in (P) \\Leftrightarrow  8a+4b+2c+d=2 \\text{ và } 27a+9b+3c+d=0 \\text{ và } 64a+16b+4c+d=-2 \\text{ và } 125a+25b+5c+d=2 \\Leftrightarrow  a= 1 \\text{ và } b=-9 \\text{ và } c=24 \\text{ và } d=-18.  \\]  Khi đó $f(x)=x^3-9x^2+24x-18$ trên đoạn $[2;5]$.<br>  Ta có:  \\[  \\displaystyle\\int\\limits_0^5 f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^2 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_2^5 f(x)\\mathrm{\\,d}x=3+\\displaystyle\\int\\limits_2^5 \\left(x^3-9x^2+24x-18\\right)\\mathrm{\\,d}x=\\dfrac{9}{4}.  \\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D421DS12",
    "question": "Gọi $F(x)$, $G(x)$ là nguyên hàm của $f(x)$. Hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "$\\forall x \\in \\mathbb{R}$, $k\\cdot F(x)$ là một nguyên hàm của $k\\cdot f(x)$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_a^bf(x)\\mathrm{\\,d}x=G(a)-G(b)$",
        "answer": false
      },
      {
        "text": "$F(x)-G(x)=0$, $\\forall x \\in \\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Cho $F(1)-5G(2)=3$ và $F(2)-5G(1)=15$. Giá trị $\\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vì $(k\\cdot F(x))'=k\\cdot F'(x)=k\\cdot f(x)$.<br>- <strong>Sai</strong>.<br>  Vì $\\displaystyle\\int\\limits_a^bf(x)\\mathrm{\\,d}x=G(b)-G(a)$.<br>- <strong>Sai</strong>.<br>  Vì $F(x)-G(x)=C_1-C_2,\\forall x \\in \\mathbb{R}$.<br>- <strong>Đúng</strong>.<br>  Theo khái niệm tích phân $\\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=F(2)-F(1)=G(2)-G(1)$.<br> Ta có $F(1)-5G(2)=3$ và $F(2)-5G(1)=15$. Suy ra $$\\begin{aligned} & & F(2)-F(1)+5[G(2)-G(1)]=12\\\\ &\\Leftrightarrow& \\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x+5\\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=12\\\\ &\\Leftrightarrow& 6\\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=12\\\\ &\\Leftrightarrow& \\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=2. \\end{aligned}$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422DS13",
    "question": "Cho $f(x) = x^2 - x$.",
    "subQuestions": [
      {
        "text": "Nghiệm của $f(x)$ là $x=0$; $x=1$",
        "answer": true
      },
      {
        "text": "$f(x) &lt; 0 \\Leftrightarrow x \\in (0; 1)$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^2 \\left|x^2 - x\\right| \\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^1 \\left(x^2 - x\\right) \\mathrm{\\,d}x + \\displaystyle\\int\\limits_1^2 \\left(-x^2 + x\\right) \\mathrm{\\,d}x$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^2 \\left|x^2 - x\\right| \\mathrm{\\,d}x = \\left(-\\dfrac{x^3}{3} + \\dfrac{x^2}{2}\\right)\\Bigg|_0^1 + \\left(\\dfrac{x^3}{3} - \\dfrac{x^2}{2}\\right) \\Bigg|_1^2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $f(x) = 0 \\Leftrightarrow x^2 - x = 0 \\Leftrightarrow \\left[\\begin{aligned}&x = 0\\\\&x = 1.\\end{aligned}\\right.$<br>- <strong>Đúng</strong>.<br>  Bảng xét dấu<br><img src=\"data/12/2D4/im2D42/2D42_ex12_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng xét dấu, ta có $f(x) &lt; 0 \\Leftrightarrow x \\in (0; 1)$ và $f(x)&gt;0 \\Leftrightarrow x\\in (-\\infty;0)\\cup (1;+\\infty)$.<br>- <strong>Sai</strong>.<br>  Ta có $\\displaystyle\\int\\limits_0^2 \\left|x^2 - x\\right| \\mathrm{\\,d}x = -\\displaystyle\\int\\limits_0^1 \\left(x^2 - x\\right) \\mathrm{\\,d}x + \\displaystyle\\int\\limits_1^2 \\left(x^2 - x\\right) \\mathrm{\\,d}x$.<br>- <strong>Đúng</strong>.<br>  Ta có \\[\\displaystyle\\int\\limits_0^2 \\left|x^2 - x\\right| \\mathrm{\\,d}x = -\\displaystyle\\int\\limits_0^1 \\left(x^2 - x\\right) \\mathrm{\\,d}x + \\displaystyle\\int\\limits_1^2 \\left(x^2 - x\\right) \\mathrm{\\,d}x = \\left(-\\dfrac{x^3}{3} + \\dfrac{x^2}{2}\\right)\\Bigg|_0^1 + \\left(\\dfrac{x^3}{3} - \\dfrac{x^2}{2}\\right) \\Bigg|_1^2.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D423DS14",
    "question": "Lớp $12$B$11$ có $40$ học sinh. Thời gian tự học tại nhà hàng ngày của các học sinh trong lớp được thống kê trong bảng sau:<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Nhóm (giờ)</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[1;2)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[2;3)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[3;4)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[4;5)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[5;6)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số học sinh</td><td style=\"border:1px solid #888;padding:3px 8px;\">$4$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$6$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$12$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$8$</td></tr></table>",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu ghép nhóm này là $5$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu này bằng $1{,}8$",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu là $1{,}66$",
        "answer": false
      },
      {
        "text": "Cô giáo chia lớp thành ba nhóm: Nhóm chưa chăm gồm các em học sinh có thời gian tự học tại nhà hàng ngày ít hơn $3$ giờ, nhóm đạt yêu cầu gồm các em học sinh có thời gian tự học tại nhà hàng ngày từ $3$ giờ trở lên nhưng ít hơn $5$ giờ, nhóm chăm chỉ gồm các em học sinh có thời gian tự học tại nhà hàng ngày từ $5$ giờ trở lên. Cô giáo chọn ngẫu nhiên $4$ học sinh trong lớp để kiểm tra bài tập về nhà. Xác suất để ba nhóm học sinh trên đều có học sinh được chọn bằng $\\dfrac{88}{247}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khoảng biến thiên $R = 6 - 1 = 5$.<br>- <strong>Đúng</strong>.<br>  $Q_1=2+\\dfrac{10-4}{6}\\cdot1=3$, $Q_3=4+\\dfrac{30-22}{10}\\cdot1=4{,}8$ nên $\\Delta Q=4{,}8-3=1{,}8$. Mệnh đề đúng.<br>- <strong>Sai</strong>.<br>  <table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Nhóm (giờ)</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[1;2)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[2;3)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[3;4)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[4;5)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[5;6)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số học sinh</td><td style=\"border:1px solid #888;padding:3px 8px;\">$4$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$6$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$12$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$8$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Giá trị đại diện</td><td style=\"border:1px solid #888;padding:3px 8px;\">$1{,}5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$2{,}5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$3{,}5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$4{,}5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$5{,}5$</td></tr></table><br>Số trung bình $\\overline{x}=\\dfrac{4\\cdot1{,}5+6\\cdot2{,}5+12\\cdot3{,}5+10\\cdot4{,}5+8\\cdot5{,}5}{40}=3{,}8$. <br> Phương sai $s^2=\\dfrac{4\\cdot1{,}5^2+6\\cdot2{,}5^2+12\\cdot 3{,}5^2+10\\cdot4{,}5^2+8\\cdot5{,}5^2}{40}-(3{,}8\t)^2\\approx1{,}51$.<br>- <strong>Đúng</strong>.<br>  Nhóm chưa chăm có thời gian tự học dưới $3$ giờ (nhóm $1$ + $2$) là $4+6=10$ học sinh. <br> Nhóm đạt yêu cầu có thời gian tự học từ $3$ giờ tới $5$ giờ (nhóm $3$ + $4$) là $12+10=22$ học sinh. <br> Nhóm chăm chỉ có thời gian tự học trên $5$ giờ (nhóm $5$) là $8$ học sinh. <br> Không gian mẫu là chọn $4$ học sinh từ $40$ học sinh là $n(\\Omega)=\\mathrm{C}_{40}^4=91\\,390$. <br> Biến cố $A$ là “ ba nhóm học sinh đều có học học sinh được họn để kiểm tra bài tập về nhà” <br><br>- <strong>TH1:</strong> $2$ học sinh nhóm $1$, $1$ học sinh nhóm $2$, $1$ học sinh nhóm $3$ có <br>$\\mathrm{C}_{10}^2\\cdot\\mathrm{C}_{22}^1\\cdot\\mathrm{C}_8^1=7\\,920$ cách chọn.<br><br>- <strong>TH2:</strong> $1$ học sinh nhóm $1$, $2$ học sinh nhóm $2$, $1$ học sinh nhóm $3$ có <br>$\\mathrm{C}_{10}^1\\cdot\\mathrm{C}_{22}^2\\cdot\\mathrm{C}_8^1=18\\,480$ cách chọn.<br><br>- <strong>TH3:</strong> $1$ học sinh nhóm $1$, $1$ học sinh nhóm $2$, $2$ học sinh nhóm $3$ có <br>$\\mathrm{C}_{10}^1\\cdot\\mathrm{C}_{22}^1\\cdot\\mathrm{C}_8^2=6\\,160$ cách chọn.<br>Suy ra có tổng số kết quả thuận lợi là $n(A)=7\\,920+18\\,480+6\\,160=32\\,560$. <br> Vậy xác suất của biến cố $A$ là $P(A)=\\dfrac{n(A)}{n(\\Omega)}=\\dfrac{32\\,560}{91\\,390}=\\dfrac{88}{247}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS15",
    "question": "Một kiến trúc sư thiết kế bồn hoa trong công viên trên hệ trục tọa độ $Oxy$ (đơn vị: mét). Bồn hoa là hình phẳng giới hạn bởi parabol $(P)\\colon y = -x^2 + 4$ và trục hoành $Ox$. Kiến trúc sư bố trí một dải đèn LED thẳng, được mô phỏng bởi đường thẳng $d$ đi qua điểm $M(0;1)$, cắt parabol $(P)$ tại hai điểm phân biệt $A$ và $B$ (có hoành độ lần lượt là $x_1$, $x_2$). Dải đèn chia bồn hoa thành hai phần riêng biệt: Phần hình phẳng nằm phía trên dây cung $AB$ được dùng để trồng Hoa Hồng, phần còn lại của bồn hoa (nằm phía dưới dây cung $AB$) được dùng để trồng Cỏ Nhật.<br><img src=\"data/12/2D4/im2D42/2D42_ex12_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Diện tích toàn bộ bồn hoa (tổng diện tích trồng Hoa Hồng và Cỏ Nhật) bằng $16$ m$^2$",
        "answer": false
      },
      {
        "text": "Tích các hoành độ giao điểm của đường thẳng $d$ và parabol $(P)$ luôn bằng $3$",
        "answer": false
      },
      {
        "text": "Diện tích trồng Hoa Hồng đạt giá trị nhỏ nhất khi dải đèn LED được thiết kế nằm ngang (song song với trục hoành)",
        "answer": true
      },
      {
        "text": "Khi diện tích trồng Hoa Hồng gấp đôi diện tích trồng Cỏ Nhật, chiều dài của dải đèn LED (tính bằng độ dài đoạn thẳng $AB$) xấp xỉ $3{,}84$ mét (làm tròn đến hàng phần trăm)",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Phương trình hoành độ giao điểm của $(P)$ và trục $Ox$ là $-x^2 + 4 = 0 \\Leftrightarrow x = \\pm 2$.<br> Diện tích toàn bộ bồn hoa (tổng diện tích trồng Hoa Hồng và Cỏ Nhật) là $$ S = \\displaystyle\\int\\limits_{-2}^2 \\left|-x^2 + 4\\right| \\mathrm{d}x = \\displaystyle\\int\\limits_{-2}^2 \\left(-x^2 + 4\\right) \\mathrm{d}x = \\dfrac{32}{3} \\ (\\text{m}^2). $$<br>- <strong>Sai</strong>.<br>  Gọi $k$ là hệ số góc của đường thẳng $d$ đi qua điểm $M(0;1)$.<br> Khi đó phương trình đường thẳng $d$ là $y = kx + 1$.<br> Hoành độ giao điểm của $(P)$ và $d$ là nghiệm của phương trình $$ -x^2 + 4 = kx + 1 \\Leftrightarrow x^2 + kx - 3 = 0. $$ Ta có $\\Delta = (-k)^2 - 4 \\cdot 1 \\cdot (-3) = k^2 + 12 &gt; 0$, với mọi $k$.<br> Suy ra phương trình có hai nghiệm phân biệt $x_1$, $x_2$.<br> Theo định lý Viète ta có $x_1 x_2 = -3$ và $x_1 + x_2 = k$.<br>- <strong>Đúng</strong>.<br>  Diện tích trồng Hoa Hồng là diện tích hình phẳng giới hạn bởi $(P)$ và đường thẳng $d$.<br> Khi đó<br>$$\\begin{aligned} &S_{HH} &= \\displaystyle\\int\\limits_{x_1}^{x_2} \\left|-x^2 + 4 - (kx +1)\\right| \\mathrm{\\,d}x = \\displaystyle\\int\\limits_{x_1}^{x_2} \\left(-x^2 - kx + 3\\right) \\mathrm{\\,d}x = \\left(-\\dfrac{x^3}{3} - \\dfrac{kx^2}{2} \\right)\\Bigg|_{x_1}^{x_2} \\\\ &&= -\\dfrac{1}{3}\\left(x_2^2 - x_1^2\\right) - \\dfrac{k}{2}\\left(x_2^2 - x_1^2\\right) + 3\\left(x_2 - x_1\\right) \\\\ &&= -\\dfrac{1}{3}\\sqrt{k^2 + 12}\\left(k^2 + 3\\right) + \\dfrac{k^2}{2}\\sqrt{k^2 + 12} + 3\\sqrt{k^2 + 12} \\\\ &&= \\sqrt{k^2 + 12}\\left(-\\dfrac{k^3}{3} - 1 + \\dfrac{k^2}{2} + 3\\right) \\\\ &&= \\sqrt{k^2 + 12}\\left(\\dfrac{k^2}{6} + 2\\right) = \\dfrac{\\left(\\sqrt{k^2 + 12}\\right)^3}{6} \\geq \\dfrac{3\\sqrt{12}}{6}. \\end{aligned}$$ Dấu “$=$” xảy ra khi và chỉ khi $k = 0$.<br> Suy ra $d$ có phương trình là $y = 1$.<br> Vậy diện tích trồng Hoa Hồng đạt giá trị nhỏ nhất khi dải đèn LED được thiết kế nằm ngang (song song với trục hoành).<br>- <strong>Đúng</strong>.<br>  Khi diện tích trồng Hoa Hồng gấp đôi diện tích trồng Cỏ Nhật, ta có<br>$$\\begin{aligned} && S_{HH} = S_{CN} \\\\ &\\Leftrightarrow& S_{HH} = \\dfrac{2}{3}S \\\\ &\\Leftrightarrow& \\dfrac{\\left(\\sqrt{k^2 + 12}\\right)^3}{6} = \\dfrac{2}{3} \\cdot \\dfrac{32}{3} \\\\ &\\Leftrightarrow& \\sqrt{k^2 + 12} = \\sqrt[3]{\\dfrac{128}{3}}. \\end{aligned}$$ Khi đó $k = \\left(\\sqrt[3]{\\dfrac{128}{3}}\\right)^2 - 12$ và $x_2 - x_1 = \\sqrt[3]{\\dfrac{128}{3}}$.<br> Do $A$, $B$ thuộc $d$ nên $A(x_1; kx_1 + 1)$ và $B(x_2; kx_2 + 1)$.<br> Ta có $$ AB = \\sqrt{\\left(x_2 - x_1\\right)^2 + k^2\\left(x_2 - x_1\\right)^2} = \\sqrt{\\left(x_2 - x_1\\right)^2 \\left(k^2 + 1\\right)} \\approx 3{,}84. $$ Vậy khi diện tích trồng Hoa Hồng gấp đôi diện tích trồng Cỏ Nhật, chiều dài của dải đèn LED (tính bằng độ dài đoạn thẳng $AB$) xấp xỉ $3{,}84$ (mét).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS16",
    "question": "Một chất điểm $A$ xuất phát từ $0$, chuyển động thẳng với vận tốc biến thiên theo thời gian bởi quy luật $v(t)=\\dfrac{1}{120}t^2+\\dfrac{58}{45}t$ (m/s), trong đó $t$ (giây) là khoảng thời gian tính từ lúc $A$ bắt đầu chuyển động. Từ trạng thái nghỉ, một chất điểm $B$ cũng xuất phát từ $0$, chuyển động thẳng, cùng hướng với $A$ nhưng chậm hơn $3$ giây so với $A$ và có gia tốc bằng $a$ (m/s$^2$) ($a$ là hằng số). Sau khi $B$ xuất phát được $15$ giây thì đuổi kịp $A$.",
    "subQuestions": [
      {
        "text": "Thời điểm chất điểm $B$ đuổi kịp chất điểm $A$ thì chất điểm $B$ đi được $15$ giây, chất điểm $A$ đi được $18$ giây",
        "answer": true
      },
      {
        "text": "Vận tốc của $B$ tại thời điểm đuổi kịp $A$ bằng $30$ (m/s)",
        "answer": true
      },
      {
        "text": "$a=2$",
        "answer": true
      },
      {
        "text": "Sau khi $B$ xuất phát được $10$ giây thì quãng đường $A$ đi được không quá $100$ (m)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vì chất điểm $B$ xuất phát chậm hơn chất điểm $A$ $3$ giây nên khi chất điểm $B$ đi chuyển đươc $15$ giây thì $A$ di chuyển được $18$ giây.<br>- <strong>Đúng</strong>.<br>  Quãng đường $A$ đi được sau $18$ giây $s_A(18)=\\displaystyle\\int\\limits_{0}^{18}\\left|v(t)\\right|\\mathrm{\\,d}t=225$ (m).<br> Vì $B$ chuyển động từ trạng thái nghỉ và chuyển động với gia tốc $a$ (m/s$^2$) nên $v_B(t)=at$ (m/s).<br> Do sau $15$ giây thì $B$ đuổi kịp $A$ nên $s_A(18)=s_B(15)$.<br> Ta có $s_B(15)=225\\Leftrightarrow \\displaystyle\\int\\limits_{0}^{15}v_B(t)\\mathrm{\\,d}t=225\\Leftrightarrow \\displaystyle\\int\\limits_{0}^{15}at\\mathrm{\\,d}t=225\\Leftrightarrow a=2$.<br> Vận tốc của $B$ tại thời điểm đuổi kịp $A$ là $v_B(15)=2\\cdot 15=30$ (m/s).<br>- <strong>Đúng</strong>.<br>  $a=2$.<br>- <strong>Sai</strong>.<br>  Quãng đường $A$ đi được sau $13$ giây $s_A(13)=\\displaystyle\\int\\limits_{0}^{13}\\left|v(t)\\right|\\mathrm{\\,d}t=\\dfrac{8281}{72}&gt;100$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS17",
    "question": "Trong một thử nghiệm ô tô xuất phát từ trạng thái nghỉ. Người lái điều khiển xe đạt vận tốc cực đại tại $t = 18$ giây, rồi giảm tốc và dừng hẳn. Toàn bộ quá trình kéo dài $50$ giây. Đồ thị vận tốc $v(t)$ (m/s) theo thời gian $t$ (s) như hình vẽ. Trong đó, trên đoạn $[0;24]$ đồ thị là một phần của parabol có đỉnh $I(18;27)$ và đi qua điểm $O$; trên đoạn $(24;50]$ đồ thị là đoạn thẳng $AB$ với $A(24;24)$ và $B(50;0)$.<br><br><img src=\"data/12/2D4/im2D42/2D42_ex12_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Trong $24$ giây đầu tiên, vận tốc của ô tô luôn tăng",
        "answer": false
      },
      {
        "text": "Trong $24$ giây đầu tiên, có một thời điểm mà gia tốc của ô tô bằng $2 \\, \\text{m/s}^2$",
        "answer": true
      },
      {
        "text": "Gọi giai đoạn $1$ là $[0;24]$, giai đoạn $2$ là $(24;50]$. Độ lớn gia tốc của ô tô ngay trước thời điểm kết thúc giai đoạn $1$ ($t = 24$ giây) lớn hơn độ lớn gia tốc của ô tô trong suốt giai đoạn $2$ (từ $24$ giây đến $50$ giây)",
        "answer": true
      },
      {
        "text": "Quãng đường xe đi được trong $26$ giây cuối lớn hơn $70\\%$ quãng đường xe chạy trong $24$ giây đầu tiên",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Vì trên khoảng $(18;24)$ hàm số $v(t)$ nghịch biến nên vận tốc của ô tô giảm trên khoảng $(18;24)$.<br>- <strong>Đúng</strong>.<br>  Trên đoạn $[0;24]$ có $v(t) = at^2 + bt + c$.<br> Có $t = 0; v = 0 \\Rightarrow c = 0$.<br> Có $t = 18; v = 27 \\Rightarrow 18^2 a + 18b = 27$.<br> Có $t = 24; v = 24 \\Rightarrow 24^2 a + 24b = 24$.<br> Do đó $v = -\\dfrac{1}{12}t^2 + 3t \\Rightarrow v' = -\\dfrac{1}{6}t + 3 = a(t)$<br> $a=2 \\Rightarrow -\\dfrac{1}{6}t+3=2 \\Rightarrow -\\dfrac{1}{6}t = -1 \\Rightarrow t=6$.<br>- <strong>Đúng</strong>.<br>  Trên đoạn $(24;50]$ có $v(t) = mt + n$.<br> Có $t = 24; v = 24 \\Rightarrow 24m + n = 24$.<br> Có $t = 50; v = 0 \\Rightarrow 50m + n = 0$.<br> Do đó $v = -\\dfrac{12}{13}t + \\dfrac{600}{13} \\Rightarrow v' = -\\dfrac{12}{13} = a(t)$.<br> Độ lớn của gia tốc trong giai đoạn 2 là $\\dfrac{12}{13}$ (m/$s^2$).<br> Độ lớn của gia tốc tại $t = 24$ là $a = \\left|-\\dfrac{1}{6} \\cdot 24 + 3\\right| = 1$ (m/$s^2$).<br> Có $1 &gt; \\dfrac{12}{13}$ nên đúng.<br>- <strong>Sai</strong>.<br>  Quãng đường 24 s đầu: $s_1=\\displaystyle\\int_0^{24}\\left(-\\dfrac{1}{12}t^2+3t\\right)\\mathrm{d}t=480$ m, $70\\%\\,s_1=336$ m.<br>Quãng đường 26 s cuối (từ $t=24$ đến $t=50$) là diện tích tam giác: $s_2=\\dfrac{1}{2}\\cdot 26\\cdot 24=312$ m $&lt;336$ m. Mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS18",
    "question": "Một chất điểm $A$ xuất phát từ $O$, chuyển động thẳng với vận tốc $v(t) = \\dfrac{1}{120}t^2 + \\dfrac{58}{45}t$ (m/s). Chất điểm $B$ xuất phát từ $O$ chậm hơn $3$ giây so với $A$ và có gia tốc không đổi $a$ (m/s$^2$). Sau khi $B$ xuất phát được $15$ giây thì đuổi kịp $A$.",
    "subQuestions": [
      {
        "text": "Thời điểm chất điểm $B$ đuổi kịp chất điểm $A$ thì chất điểm $B$ đi được $15$ giây và $A$ đi được $18$ giây",
        "answer": true
      },
      {
        "text": "$a = 2$",
        "answer": true
      },
      {
        "text": "Vận tốc của $B$ tại thời điểm đuổi kịp $A$ bằng $30$ (m/s)",
        "answer": true
      },
      {
        "text": "Sau khi $B$ xuất phát $10$ giây thì quãng đường $A$ đi được không quá $100$ (m)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $B$ đi được $15$ giây, $A$ đi trước $3$ giây nên $A$ đi được $15 + 3 = 18$ giây.<br>- <strong>Đúng</strong>.<br>  Quãng đường của $A$: $$s_A(t) = \\displaystyle\\int\\limits v_A(t) \\,\\mathrm{\\,d}t = \\displaystyle\\int\\limits \\left( \\dfrac{1}{120} t^2 + \\dfrac{58}{45} t \\right) \\,\\mathrm{\\,d}t = \\dfrac{1}{360} t^3 + \\dfrac{29}{45} t^2 + C.$$<br>Ta có $s_A(0) = 0 \\Rightarrow c = 0 \\Rightarrow s_A(t) = \\dfrac{1}{360} t^3 + \\dfrac{29}{45} t^2$. <br><br>Tại $t = 18 \\Rightarrow s(18) = \\dfrac{1}{360} 18^3 + \\dfrac{29}{45} 18^2 = 225$. <br><br>Quãng đường của $B$ là $s_B(t) = \\dfrac{1}{2}at^2$. <br><br>Tại $t = 15 \\Rightarrow s(15) = \\dfrac{1}{2}\\cdot 15^2 a = 112{,}5a$. <br><br>Do chất điểm $B$ đuổi kịp chất điểm $A \\Rightarrow 112{,}5a = 225 \\Leftrightarrow a = 2$.<br>- <strong>Đúng</strong>.<br>  Khi đó $v_B = a \\cdot 15 = 2 \\cdot 15 = 30$ (m/s).<br>- <strong>Sai</strong>.<br>  Khi $B$ đi $10$ giây thì $A$ đi được $13$ giây. Khi đó, chất điểm $A$ đi được quãng đường $$s_A(13) = \\displaystyle\\int\\limits_0^{13} v(t)\\mathrm{\\,d}t = \\dfrac{13^3}{360} + \\dfrac{29 \\cdot 13^2}{45} \\approx 115{,}01 &gt; 100\\,\\left(\\text{m}\\right).$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS19",
    "question": "Cho một bể chứa nước và ban đầu chưa có nước. Người ta bắt đầu bơm nước vào bể với lưu lượng là $L_1(t) = 6t+3$ (lít/phút). Cùng lúc đó, do bể có một vết nứt dưới đáy nên nước bị chảy ra ngoài với lưu lượng là $L_2(t) = 2t$ (lít/phút). Dung tích tối đa của bể là $2\\,015$ lít.",
    "subQuestions": [
      {
        "text": "Khi nước chảy vào vừa làm đầy bể, thì đã có nhiều hơn $900$ lít nước bị chảy ra ngoài (<em>làm tròn kết quả đến hàng đơn vị</em>)",
        "answer": true
      },
      {
        "text": "Nếu bơm được $30$ phút thì dừng thì lượng nước trong bể chưa đầy bể",
        "answer": true
      },
      {
        "text": "Thể tích nước được bơm vào bể trong $5$ phút đầu tiên là $90$ (lít)",
        "answer": true
      },
      {
        "text": "Thể tích nước chảy ra từ bể trong $5$ phút đầu tiên là $10$ (lít)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có lưu lượng nước ròng là $L(t) = L_1(t) - L_2(t) = 4t + 3$.<br> Thời điểm $a$ (phút) khi nước đầy bể là \\[\\displaystyle \\int\\limits_0^a (4t + 3)\\,\\mathrm{d}t = 2\\,015 \\Leftrightarrow 2a^2 + 3a = 2\\,015 \\Rightarrow a = 31\\text{ phút}.\\] Vậy lượng nước chảy ra sau $31$ phút bằng $\\displaystyle \\int\\limits_0^{31} 2t\\,\\mathrm{d}t = 961 &gt; 900$.<br>- <strong>Đúng</strong>.<br>  Thời điểm $30$ phút khi bơm thì nước trong bể là $\\displaystyle \\int\\limits_0^{30} (4t + 3)\\,\\mathrm{d}t = 1\\,890 &lt; 2\\,015$.<br>- <strong>Đúng</strong>.<br>  Thể tích nước được bơm vào bể trong $5$ phút đầu tiên là $\\displaystyle \\int\\limits_0^5 (6t + 3)\\,\\mathrm{d}t = 90$ lít.<br>- <strong>Sai</strong>.<br>  Thể tích nước chảy ra từ bể trong $5$ phút đầu tiên là $\\displaystyle \\int\\limits_0^5 (2t)\\,\\mathrm{d}t = 25$ lít.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS20",
    "question": "Giả sử lợi nhuận biên (tính bằng triệu đồng) của một sản phẩm được mô hình hóa bằng công thức $P'(x) = -0{,}0008x + 10{,}4$. Ở đây $P(x)$ là lợi nhuận (tính bằng triệu đồng) khi bán được $x$ đơn vị sản phẩm.",
    "subQuestions": [
      {
        "text": "Công thức $P(x) = -0{,}0008x^2 + 10{,}4x$ được tính là lợi nhuận khi bán được $x$ đơn vị sản phẩm",
        "answer": false
      },
      {
        "text": "Lợi nhuận khi bán được $50$ sản phẩm đầu tiên là $519$ triệu đồng",
        "answer": true
      },
      {
        "text": "Sự thay đổi của lợi nhuận khi doanh số tăng từ $50$ lên $55$ đơn vị sản phẩm là $49{,}79$ triệu đồng",
        "answer": false
      },
      {
        "text": "Biết sự thay đổi của lợi nhuận khi doanh số tăng từ $50$ lên $a$ đơn vị sản phẩm lớn hơn $517$ triệu đồng, khi đó giá trị nhỏ nhất của $a$ là $100$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Hàm lợi nhuận là nguyên hàm của hàm lợi nhuận biên<br> $P(x) = \\displaystyle\\int (-0{,}0008x + 10{,}4) \\,\\mathrm{\\,d}x= -0{,}0004x^2 + 10{,}4x + C$.<br> Vậy công thức lợi nhuận khi bán được $x$ đơn vị sản phẩm được tính là $$P(x) =-0{,}0004x^2 + 10{,}4x + C.$$<br>- <strong>Đúng</strong>.<br>  Ta có $P(x)=-0{,}0004x^2 + 10{,}4x + C$.<br> Lợi nhuận ban đầu $P(0) = 0$, suy ra $C=0$.<br> Khi đó $P(x) = -0{,}0004x^2 + 10{,}4x$.<br> Do đó $P(50) = -0{,}0004 \\cdot 50^2 + 10{,}4 \\cdot 50 = 519$ triệu đồng.<br> Vậy lợi nhuận khi bán được $50$ sản phẩm đầu tiên là $519$ triệu đồng<br>- <strong>Sai</strong>.<br>  Sự thay đổi lợi nhuận<br> $\\displaystyle\\int\\limits_{50}^{55} (-0{,}0008x + 10{,}4) \\,\\mathrm{\\,d}x=-0{,}0004x^2 + 10{,}4x + C\\Big|_{50}^{55}=570{,}19-519=51{,}79$.<br> Vậy sự thay đổi của lợi nhuận khi doanh số tăng từ $50$ lên $55$ đơn vị sản phẩm là $51{,}79$ triệu đồng.<br>- <strong>Sai</strong>.<br>  Ta có $$\\begin{aligned} &&\\displaystyle\\int\\limits_{50}^{a} (-0{,}0008x + 10{,}4) \\,\\mathrm{\\,d}x&gt;517\\\\ &\\Leftrightarrow& (-0{,}0004a^2 + 10{,}4a) - 519 &gt; 517\\\\ &\\Leftrightarrow& -0{,}0004a^2 + 10{,}4a - 1\\,036 &gt; 0\\\\ &\\Leftrightarrow& 100 &lt; a &lt; 25\\,900. \\end{aligned}$$ Vậy giá trị nguyên nhỏ nhất của $a$ để thỏa mãn lợi nhuận khi doanh số tăng từ $50$ lên $a$ đơn vị sản phẩm lớn hơn $517$ triệu đồng là $101$ đơn vị sản phẩm.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS21",
    "question": "Để đảm bảo an toàn khi lưu thông trên đường, các xe ô tô khi dừng đèn đỏ phải cách nhau tối thiểu $1$ m. Ô tô $A$ đang chạy với vận tốc $15$ m/s thì gặp ô tô $B$ đang dừng đèn đỏ phía trước. Người lái xe $A$ đạp phanh và ô tô $A$ chuyển động chậm dần đều với vận tốc $v(t)=15-3t$ (m/s), trong đó $t$ là khoảng thời gian tính bằng giây kể từ thời điểm ô tô $A$ bắt đầu đạp phanh.",
    "subQuestions": [
      {
        "text": "Quãng đường ô tô $A$ đi được sau khi đạp phanh $2$ giây là $24$ m",
        "answer": true
      },
      {
        "text": "Kể từ lúc đạp phanh, sau thời gian $t=5$ giây thì ô tô $A$ dừng lại",
        "answer": true
      },
      {
        "text": "Quãng đường ô tô $A$ đi được từ lúc bắt đầu đạp phanh đến khi dừng hẳn được tính bởi công thức $s=\\displaystyle\\int\\limits_0^4 (15-3t)\\mathrm{\\,d}t$",
        "answer": false
      },
      {
        "text": "Để đảm bảo khoảng cách an toàn tối thiểu $1$ m với ô tô $B$ khi dừng lại, ô tô $A$ phải bắt đầu đạp phanh khi còn cách ô tô $B$ một khoảng tối thiểu là $37{,}5$ m",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Quãng đường ô tô $A$ đi được sau khi đạp phanh $2$ giây là<br> \\[s=\\displaystyle\\int\\limits_0^2 v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^2 (15-3t)\\mathrm{\\,d}t=\\left(15t-\\dfrac{3t^2}{2}\\right)\\bigg|_0^2=24\\,\\text{(m)}.\\]<br>- <strong>Đúng</strong>.<br>  Ô tô dừng lại khi và chỉ khi $v(t)=0$.<br> \\[v(t)=0\\Leftrightarrow 15-3t=0 \\Leftrightarrow t=5\\,\\text{(giây)}.\\] Vậy ô tô dừng lại sau $5$ giây kể từ lúc đạp phanh.<br>- <strong>Sai</strong>.<br>  Quãng đường ô tô $A$ đi được từ lúc bắt đầu đạp phanh đến khi dừng hẳn là tích phân của vận tốc theo thời gian từ thời điểm $t=0$ đến $t=5$ nên<br> \\[s=\\displaystyle\\int\\limits_0^5 v(t)\\mathrm{\\,d}t=\\int\\limits_0^5 (15-3t)\\mathrm{\\,d}t.\\]<br>- <strong>Sai</strong>.<br>  Quãng đường ô tô $A$ đi được từ lúc phanh đến khi dừng hẳn là \\[s=\\displaystyle\\int\\limits_0^5 v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^5 (15-3t)\\mathrm{\\,d}t=\\left(15t-\\dfrac{3t^2}{2}\\right)\\bigg|_0^5=37{,}5\\,\\text{(m)}.\\] Theo quy định an toàn, khi dừng lại ô tô $A$ phải cách ô tô $B$ tối thiểu $1$ m.<br> Khoảng cách tối thiểu từ xe $A$ đến xe $B$ tại thời điểm bắt đầu đạp phanh phải là \\[d_{\\min} = s + \\text{khoảng cách an toàn} = 37{,}5 + 1 = 38{,}5\\,\\text{(m)}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS22",
    "question": "Một người đang điều khiển ô tô chạy trên đường cao tốc. Khi cách trạm thu phí $1\\,000$ m, tốc độ của ô tô là $90$ km/h. Sau $20$ giây, người điều khiển ô tô bắt đầu giảm tốc với tốc độ $v(t)=at+b$ (m/s), trong đó $t$ là thời gian tính bằng giây kể từ khi bắt đầu giảm tốc và $v(t) &gt; 0$ với mọi $t\\in[0;30]$. Sau $30$ giây kể từ khi bắt đầu giảm tốc, ô tô đến trạm thu phí.",
    "subQuestions": [
      {
        "text": "Quãng đường từ vị trí ô tô bắt đầu giảm tốc đến trạm thu phí là $500$ m",
        "answer": true
      },
      {
        "text": "Giá trị của $b$ là $90$",
        "answer": false
      },
      {
        "text": "Giá trị của $a$ là $-\\dfrac{5}{9}$",
        "answer": true
      },
      {
        "text": "Tốc độ tối đa cho phép của phương tiện khi qua trạm thu phí là $30$ km/h. Người điều khiển ô tô đó đã tuân thủ đúng tốc độ quy định khi đi qua trạm thu phí",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Quãng đường từ vị trí ô tô bắt đầu giảm tốc đến trạm thu phí là $500$ m.<br> Từ đầu đến khi ô tô bắt đầu giảm tốc, quãng đường đi được là $90\\cdot\\dfrac{20}{3\\,600}=0{,}5$ km.<br> Sau $20$ s quãng đường từ vị trí ô tô bắt đầu giảm tốc đến trạm thu phí là $1\\,000-500=500$ (m).<br>- <strong>Sai</strong>.<br>  Vận tốc lúc bắt đầu giảm tốc là $90$ km/h $=25$ m/s. Giá trị của $b$ là $25$.<br>- <strong>Đúng</strong>.<br>  Quãng đường đi được sau $30$ s lúc giảm phanh là $s=\\displaystyle\\int\\limits_0^{30}\\left(at+25\\right)\\mathrm{\\,d}t=\\dfrac{a}{2}\\cdot30^2+750$.<br> Theo đề bài ta được $\\dfrac{a}{2}\\cdot30^2+750=500\\Leftrightarrow a=-\\dfrac{5}{9}$.<br>- <strong>Đúng</strong>.<br>  Vận tốc sau $30$ s là $v(30)=-\\dfrac{5}{9}\\cdot 30+25=\\dfrac{25}{3}$ (m/s), suy ra vận tốc khi qua trạm thu phí là $30$ km/h.<br> Tốc độ tối đa cho phép của phương tiện khi qua trạm thu phí là $30$ km/h.<br> Người điều khiển ô tô đó đã tuân thủ đúng tốc độ quy định khi đi qua trạm thu phí.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS23",
    "question": "Hai chất điểm chuyển động ngược chiều nhau thì xảy ra va chạm, hai chất điểm tiếp tục di chuyển theo chiều ban đầu thêm một quãng đường nữa thì dừng hẳn. Biết rằng sau khi va chạm, một chất điểm đi chuyển tiếp với vận tốc $v_1(t) = 6 - 3t \\text{ (m/s)}$, chất điểm còn lại đi chuyển với vận tốc $v_2(t) = 12 - 4t \\text{ (m/s)}$.",
    "subQuestions": [
      {
        "text": "Quãng đường chất điểm thứ nhất đi chuyển sau khi va chạm được biểu diễn bởi hàm số $s_1(t) = 6t - \\dfrac{3t^2}{2} + C_1$ (m)",
        "answer": true
      },
      {
        "text": "Quãng đường chất điểm thứ hai đi chuyển sau khi va chạm được biểu diễn bởi hàm số $s_2(t) = 12t - 2t^2 + C_2$ (m)",
        "answer": true
      },
      {
        "text": "Quãng đường chất điểm thứ nhất đi chuyển sau khi va chạm là $18$ (m)",
        "answer": false
      },
      {
        "text": "Khoảng cách hai chất điểm khi đã dừng hẳn $12$ (m)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Quãng đường chất điểm thứ nhất đi chuyển sau khi va chạm được biểu diễn bởi hàm số $s_1(t) = \\displaystyle\\int v_1(t) \\mathrm{\\,d}t = \\displaystyle\\int (6 - 3t) \\mathrm{\\,d}t = 6t - \\dfrac{3t^2}{2} + C_1$ (m).<br>- <strong>Đúng</strong>.<br>  Quãng đường chất điểm thứ hai đi chuyển sau khi va chạm được biểu diễn bởi hàm số $s_2(t) = \\displaystyle\\int v_2(t) \\mathrm{\\,d}t = \\displaystyle\\int (12 - 4t) \\mathrm{\\,d}t = 12t - 2t^2 + C_2$ (m).<br>- <strong>Sai</strong>.<br>  Thời gian chất điểm thứ nhất đi chuyển sau khi va chạm là $6 - 3t = 0 \\Leftrightarrow t = 2$ (s). Quãng đường chất điểm thứ nhất đi chuyển sau khi va chạm là $$S_1 = \\displaystyle\\int\\limits_0^2 v_1(t) \\mathrm{\\,d}t = \\displaystyle\\int\\limits_0^2 (6 - 3t) \\mathrm{\\,d}t = \\left(6t - \\dfrac{3t^2}{2}\\right)\\Bigg|_0^2 = 6\\text{ (m)}.$$<br>- <strong>Sai</strong>.<br>  Thời gian chất điểm thứ hai đi chuyển sau khi va chạm là $12 - 4t = 0 \\Leftrightarrow t = 3$ (s).<br> Quãng đường chất điểm thứ hai đi chuyển sau khi va chạm là $$S_2 = \\displaystyle\\int\\limits_0^3 v_2(t) \\mathrm{\\,d}t = \\displaystyle\\int\\limits_0^3 \\left(12 - 4t\\right) \\mathrm{\\,d}t = \\left(12t - 2t^2\\right)\\Bigg|_0^3 = 18\\text{ (m)}.$$ Khoảng cách hai chất điểm khi đã dừng hẳn là $S = S_1 + S_2 = 6 + 18 = 24$ (m).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS24",
    "question": "Tại thời điểm $t=0$, một chiếc xe đang chuyển động về một hướng với vận tốc ban đầu $v_0=10$ m/s, gia tốc của xe từ thời điểm đó được tính bằng công thức $a\\left(t\\right)=-2t+4\\left(\\text{m/s}^2\\right)$. Sau thời điểm đó $3$ giây, do gặp chướng ngại vật nên xe bắt đầu phanh gấp và chuyển động biến đổi đều với gia tốc $a_m\\left(t\\right)=-6\\left(\\text{m/s}^2\\right)$.",
    "subQuestions": [
      {
        "text": "Sau khi phanh gấp, xe chuyển động chậm dần đều",
        "answer": true
      },
      {
        "text": "Vận tốc của xe luôn tăng trong $3$ giây đầu tiên",
        "answer": false
      },
      {
        "text": "Vận tốc của xe tại thời điểm $t=3$ giây là $3\\left(\\text{m/s}\\right)$",
        "answer": false
      },
      {
        "text": "Quãng đường xe đi được từ thời điểm $t=0$ đến khi dừng hẳn là $92$ m",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Sau khi phanh gấp, xe chuyển động biến đổi đều với gia tốc $a_m\\left(t \\right)=-6&lt;0$ nên xe chuyển động chậm dần đều.<br>- <strong>Sai</strong>.<br>  Cho $a\\left(t\\right)=0\\Leftrightarrow -2t+4=0\\Leftrightarrow t=2$.<br> Bảng biến thiên<br><img src=\"data/12/2D4/im2D42/2D42_ex12_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Suy ra vận tốc của xe tăng trong khoảng $\\left(0;2 \\right)$ và giảm trong khoảng $\\left(2;3\\right)$.<br>- <strong>Sai</strong>.<br>  Ta có $v\\left( t\\right)=\\displaystyle\\int{a\\left(t \\right)\\mathrm{\\,d}t}=\\displaystyle\\int{\\left(-2t+4 \\right)\\mathrm{\\,d}t}=-t^2+4t+C$.<br> Mà $v_0=v\\left(0\\right)=10$ nên $C=10$ hay $v\\left(t\\right)=-t^2+4t+10$$\\left( \\text{m/s}\\right)$.<br> Suy ra $v\\left( 3 \\right)=-3^2+4\\cdot 3+10=13$$\\left( \\text{m/s} \\right)$.<br>- <strong>Sai</strong>.<br>  Ta có $v_m\\left(t\\right)=\\displaystyle\\int{a_m\\left(t \\right)\\mathrm{\\,d}t}=\\displaystyle\\int{\\left(-6 \\right)\\mathrm{\\,d}t}=-6t+C_1$.<br> Mà $v_m\\left(0\\right)=v\\left(3\\right)=13$ nên $C_1=13$ hay $v_m\\left(t \\right)=-6t+13\\left(\\text{m/s}\\right)$.<br> Khi xe dừng hẳn tức là $v_m\\left(t\\right)=0\\Leftrightarrow -6t+13=0\\Leftrightarrow t=\\dfrac{13}{6}\\left(\\text{s}\\right)$.<br> Quãng đường xe đi được trong $3$ giây đầu tiên là \\[s_1=\\displaystyle\\int\\limits_0^3{\\left(-t^2+4t+10\\right)}\\mathrm{\\,d}t=39\\,\\text{m}.\\] Quãng đường xe đi được trong từ lúc đạp phanh đến lúc dừng hẳn là \\[s_2=\\displaystyle\\int\\limits_0^{\\frac{13}{6}}{\\left(-6t+13 \\right)}\\mathrm{\\,d}t=\\dfrac{169}{12}\\approx 14{,}08\\,\\text{m}.\\] Vậy quãng đường xe đi được từ thời điểm $t=0$ đến khi dừng hẳn là $s_1+s_2\\approx 53{,}08$ m.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS25",
    "question": "Bác Thông đang điều khiển một chiếc container trên quốc lộ $1$A, xe đang chạy đều với vận tốc $x$ (m/s) thì gặp chướng ngại vật nên bác đạp phanh. Từ thời điểm đó, xe chuyển động chậm dần đều với vận tốc thay đổi theo hàm số $v = -4t + 20$ (m/s), trong đó $t$ là thời gian tính bằng giây kể từ lúc đạp phanh.",
    "subQuestions": [
      {
        "text": "Khi xe dừng hẳn thì vận tốc bằng $0$ (m/s)",
        "answer": true
      },
      {
        "text": "Thời gian từ lúc bác Thông đạp phanh cho đến khi xe dừng hẳn là $4$ s",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int (-4t+20)\\,\\mathrm{\\,d}t = -2t^2 + 20t + C$",
        "answer": true
      },
      {
        "text": "Quãng đường từ lúc đạp phanh cho đến khi xe dừng hẳn là $500$ m",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khi xe dừng hẳn thì vận tốc $v = 0$ (m/s).<br>- <strong>Sai</strong>.<br>  Xe dừng hẳn khi $v = 0 \\Rightarrow -4t + 20 = 0 \\Rightarrow t = 5$ (s).<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int (-4t+20)\\,\\mathrm{\\,d}t = -4 \\cdot \\dfrac{t^2}{2} + 20t + C = -2t^2 + 20t + C$.<br>- <strong>Sai</strong>.<br>  Quãng đường $S = \\displaystyle\\int\\limits_{0}^{5} (-4t+20)\\,\\mathrm{\\,d}t = (-2t^2 + 20t) \\Big|_0^5 = -2\\cdot5^2 + 20\\cdot5 = 50$ (m).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS26",
    "question": "Một vật chuyển động có vận tốc $v$ (m/s) phụ thuộc thời gian $t$ (s) và gia tốc là $a(t)=3t^2+2$ (m/s$^2$). Biết vận tốc ban đầu của vật là $5$ m/s. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$v(t)=\\displaystyle\\int a(t)\\mathrm{\\,d}t$",
        "answer": true
      },
      {
        "text": "$v(t)=t^3+2t+5$",
        "answer": true
      },
      {
        "text": "Vận tốc của vật (m/s) tại thời điểm $t=4$ (s) là $77$",
        "answer": true
      },
      {
        "text": "Quãng đường (m) vật đi được trong $4$ giây đầu tiên là $99$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $v(t)=\\displaystyle\\int a(t)\\mathrm{\\,d}t$.<br>- <strong>Đúng</strong>.<br>  Ta có $v(t)=\\displaystyle\\int a(t)\\mathrm{\\,d}t=\\displaystyle\\int (3t^2+2)\\mathrm{\\,d}t=t^3+2t+C$.<br> Vì $v(0)=5$ suy ra $C=5$ do đó $v(t)=t^3+2t+5$.<br>- <strong>Đúng</strong>.<br>  Tại $t=4$ thì $v(4)=4^3+2\\cdot4+5=77$ m/s.<br>- <strong>Sai</strong>.<br>  Quãng đường vật đi được trong $4$ giây đầu tiên là $$s=\\displaystyle\\int\\limits_0^4v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^4(t^3+2t+5)\\mathrm{\\,d}t=100 \\text{ m}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS27",
    "question": "Một vật chuyển động trong $5$ (s) với vận tốc $v=v(t)$ (m/s) phụ thuộc vào thời gian $t$ (s) có đồ thị vận tốc như hình vẽ. Trong khoảng thời gian $4$ (s) kể từ khi bắt đầu chuyển động, đồ thị đó là một phần của đường parabol đi qua $O(0;0)$, có đỉnh $I(3;12)$ với trục đối xứng song song với trục tung; khoảng thời gian còn lại, đồ thị là một đoạn thẳng song song với trục hoành.<br><img src=\"data/12/2D4/im2D42/2D42_ex12_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Trong khoảng thời gian $4$ (s) kể từ khi bắt đầu chuyển động, $v(t)=a(t-3)^2+12$",
        "answer": true
      },
      {
        "text": "$v(4)=9$",
        "answer": false
      },
      {
        "text": "Quãng đường vật di chuyển được từ thời điểm $t=4$ (s) đến thời điểm $t=5$ (s) là $9$ m",
        "answer": false
      },
      {
        "text": "Quãng đường mà vật di chuyển được trong $5$ (s) đầu tiên là $34$ m",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Parabol mô tả vận tốc trong $4$ (s) đầu tiên là $(P)\\colon y=at^2+bt+c$.<br> Vì $(P)$ đi qua gốc tọa độ và có đỉnh $I(3;12)$ nên $$\\begin{cases}&c=0\\\\&-\\dfrac{b}{2a}=3\\\\&9a+3b=12\\end{cases} \\Leftrightarrow\\begin{cases}&c=0\\\\&b=-6a\\\\&-9a=12\\end{cases} \\Leftrightarrow \\begin{cases}&c=0\\\\&a=-\\dfrac{4}{3}\\\\&b=8.\\end{cases}$$ Do đó $y=v(t)=-\\dfrac{4}{3}t^2+8t=-\\dfrac{4}{3}(t-3)^2+12$.<br>- <strong>Sai</strong>.<br>  Ta có $v(4)=-\\dfrac{4}{3}(4-3)^2+12=\\dfrac{32}{3}$.<br>- <strong>Sai</strong>.<br>  Quãng đường vật di chuyển được từ thời điểm $t=4$ (s) đến thời điểm $t=5$ (s) là $$s=v(4)\\cdot (5-4)=\\dfrac{32}{3} \\textrm{ (m)}.$$<br>- <strong>Sai</strong>.<br>  Quãng đường vật di chuyển được trong $4$ (s) đầu tiên là $$s_1=\\displaystyle\\int\\limits_0^4 \\left(-\\dfrac{4}{3}t^2+8t\\right)\\mathrm{\\,d}t=\\dfrac{320}{9}.$$ Vậy tổng quãng đường vật di chuyển được trong $5$ (s) đầu tiên là $$\\dfrac{320}{9}+\\dfrac{32}{3}=\\dfrac{416}{9} \\textrm{ (m)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS28",
    "question": "Một chiếc xe đang chạy với vận tốc $v_0 = 20$ m/s thì tài xế hãm phanh. Kể từ thời điểm đó, xe chuyển động chậm dần đều với vận tốc $v(t) = -4t + 20$ (m/s).",
    "subQuestions": [
      {
        "text": "Sau $3$ giây kể từ lúc hãm phanh, vận tốc của xe là $8$ m/s",
        "answer": true
      },
      {
        "text": "Xe dừng hẳn sau $5$ giây kể từ lúc hãm phanh",
        "answer": true
      },
      {
        "text": "Quãng đường xe đi được từ lúc hãm phanh đến khi dừng hẳn là $45$ m",
        "answer": false
      },
      {
        "text": "Trong giây cuối cùng trước khi dừng hẳn, xe đi được $18$ m",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Sau $3$ giây kể từ lúc hãm phanh, vận tốc của xe là $v(3)=-4\\cdot 3+20=8$ m/s.<br>- <strong>Đúng</strong>.<br>  Xe dừng hẳn khi $v(t)=0\\Leftrightarrow -4t+20=0\\Leftrightarrow t=5$ giây.<br> Do đó xe dừng hẳn sau $5$ giây kể từ lúc hãm phanh.<br>- <strong>Sai</strong>.<br>  Quãng đường xe đi được từ lúc hãm phanh đến khi dừng hẳn là $$s=\\displaystyle\\int\\limits_0^5 v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^5 (-4t+20)\\mathrm{\\,d}t=50 \\text{ m}.$$<br>- <strong>Sai</strong>.<br>  Trong giây cuối cùng trước khi dừng hẳn tức từ giây thứ $4$ đến giây thứ $5$, ta có xe đi được quãng đường $s=\\displaystyle\\int\\limits_4^5 v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_4^5 (-4t+20)\\mathrm{\\,d}t=2$ m.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS29",
    "question": "Từ thời điểm bắt đầu khảo sát ($t=0$), một ô tô đang chạy thẳng đều với vận tốc $10$ m/s. Sau khi đi được $2$ phút thì người đó gặp chướng ngại vật phía trước, người lái xe đạp phanh. Tiếp theo đó, ô tô chuyển động chậm dần đều với gia tốc $a(t)=-2$ (m/s$^2$) cho đến khi dừng hẳn ($t$ là thời gian tính bằng giây kể từ lúc bắt đầu khảo sát).",
    "subQuestions": [
      {
        "text": "Sau khi đạp phanh, người đó di chuyển với vận tốc được xác định bằng hàm số $v(t)=\\displaystyle\\int\\limits a(t)\\mathrm{\\,d}t$",
        "answer": true
      },
      {
        "text": "Sau $245$ giây kể từ lúc bắt đầu khảo sát thì xe dừng hẳn",
        "answer": false
      },
      {
        "text": "Khi xe chuyển động chậm dần đều thì vận tốc được xác định bởi hàm số $v(t)=-2t+10$ (m/s)",
        "answer": false
      },
      {
        "text": "Quãng đường người đó đã di chuyển từ lúc bắt đầu khảo sát đến khi dừng hẳn là $1225$ mét",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Theo ý nghĩa vật lý của đạo hàm và nguyên hàm, vận tốc là nguyên hàm của gia tốc theo thời gian, tức là $v(t)=\\displaystyle\\int\\limits a(t)\\mathrm{\\,d}t$.<br>- <strong>Sai</strong>.<br>  Đổi $2$ phút $= 120$ giây. <br> Trong $120$ giây đầu ($0 \\le t \\le 120$), ô tô chuyển động thẳng đều với vận tốc $v=10$ m/s.<br> Sau khi đạp phanh (từ $t &gt; 120$), xe chuyển động chậm dần đều với vận tốc $$v(t) = \\displaystyle\\int\\limits a(t)\\mathrm{\\,d}t = \\displaystyle\\int\\limits (-2)\\mathrm{\\,d}t = -2t + C.$$ Tại thời điểm đạp phanh $t = 120$ s, vận tốc của xe đang là $10$ m/s, nên $$v(120) = 10 \\Leftrightarrow -2(120) + C = 10 \\Leftrightarrow C = 250.$$ Vậy vận tốc của xe trong giai đoạn chậm dần đều là $v(t) = -2t + 250$ (m/s). <br> Khi xe dừng hẳn thì $v(t) = 0 \\Leftrightarrow -2t + 250 = 0 \\Leftrightarrow t = 125$ s.<br> Như vậy, sau $125$ giây kể từ lúc bắt đầu khảo sát thì xe dừng hẳn.<br>- <strong>Sai</strong>.<br>  Vận tốc của xe trong giai đoạn chuyển động chậm dần đều là $v(t) = -2t + 250$ (m/s).<br>- <strong>Đúng</strong>.<br>  Quãng đường xe đi được chia làm hai giai đoạn<br><br>- Giai đoạn 1 (chuyển động thẳng đều trong $120$ giây đầu) $$S_1 = v \\cdot t = 10 \\cdot 120 = 1200 \\text{ (m)}.$$<br><br>- Giai đoạn 2 (chuyển động chậm dần đều từ giây $120$ đến giây $125$) $$S_2 = \\displaystyle\\int\\limits_{120}^{125} v(t)\\mathrm{\\,d}t = \\displaystyle\\int\\limits_{120}^{125} (-2t + 250)\\mathrm{\\,d}t = \\left( -t^2 + 250t \\right)\\Big|_{120}^{125} = 25 \\text{ (m)}.$$<br>Tổng quãng đường người đó đã di chuyển từ lúc khảo sát đến khi dừng hẳn là $$S = S_1 + S_2 = 1200 + 25 = 1225 \\text{ (m)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426DS30",
    "question": "Trong một dự án khai thác khí đốt, gọi $t$ (tháng) là thời gian tính từ thời điểm bắt đầu khai thác, với $0\\leqslant t\\leqslant400$. Tốc độ khai thác khí đốt tại thời điểm $t$ được cho bởi hàm số $V'(t)=400-t$ (đơn vị: nghìn m$^3$/ tháng), trong đó $V(t)$ là tổng lượng khí đã khai thác được từ lúc bắt đầu đến thời điểm $t$ (đơn vị: nghìn m$^3$), $V(0)=0$. Để đơn giản hóa việc tính toán, đơn giá bán khí đốt tại thời điểm $t$ được mô hình hóa bởi hàm số $P(t)=10+0{,}02t$ (đơn vị: triệu đồng/nghìn m$^3$).",
    "subQuestions": [
      {
        "text": "$V(t)$ là một nguyên hàm hàm số $V'(t)$",
        "answer": true
      },
      {
        "text": "$V(t)=400t-\\dfrac{t^2}{2}$",
        "answer": true
      },
      {
        "text": "Tổng doanh thu của dự án sau khi kết thúc khai thác (hết tháng thứ $400$) là $906\\,667$ triệu đồng <em>(làm tròn đến hàng đơn vị)</em>",
        "answer": false
      },
      {
        "text": "Tổng lượng khí khai thác được sau $400$ tháng là $70\\,000$ nghìn m$^3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. Ta có $V(t)$ là một nguyên hàm hàm số $V'(t)$.<br>- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. Ta có $$V(t)=\\displaystyle\\int V'(t)\\mathrm{\\,d}t=\\displaystyle\\int (400-t)\\mathrm{\\,d}t=400t-\\dfrac{t^2}{2}+C.$$ Ta có $V(0)=0 \\Rightarrow C=0 \\Rightarrow V(t)=400t-\\dfrac{t^2}{2}$.<br>- <strong>Sai</strong>.<br>  Doanh thu tại thời điểm $t$ là $P(t)\\cdot V'(t)$ (nghìn m$^3$ khai thác mỗi tháng nhân đơn giá lúc đó), nên tổng doanh thu là $\\displaystyle\\int\\limits_0^{400}(10+0{,}02t)(400-t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^{400}(4000-2t-0{,}02t^2)\\mathrm{\\,d}t=\\left(4000t-t^2-\\dfrac{0{,}02t^3}{3}\\right)\\Bigg|_0^{400}\\approx 1\\,013\\,333$ (triệu đồng), khác $906\\,667$ nên mệnh đề sai.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>. Tổng lượng khí khai thác sau $400$ tháng là $V(400)=80\\,000$ (nghìn m$^3$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
