window.traLoiNgan2D42 = [
  {
    "id": "2D424TL1",
    "question": "Biết tích phân $I=\\displaystyle\\int\\limits_1^3\\dfrac{2x^2-3x+1}{x}\\mathrm{\\,d}x=a+\\ln b$, $a$, $b\\in\\mathbb{N}$. Tính $S=2a+b$.",
    "answer": "7",
    "explain": "Ta có $I=\\displaystyle\\int\\limits_1^3\\dfrac{2x^2-3x+1}{x}\\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^3\\left(2x-3+\\dfrac{1}{x}\\right)\\mathrm{\\,d}x=\\left(x^2-3x+\\ln|x|\\right)\\bigg|_1^3=2+\\ln3$.<br>  Vậy $a=2$, $b=3$ nên $S=2a+b=7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL2",
    "question": "Một vật chuyển động với tốc độ $v(t)=3t+4$ (m/s), với thời gian $t$ tính theo giây, $t\\in[0;5]$. Tính quãng đường (đơn vị: mét) vật đi được trong khoảng thời gian từ $t=0$ đến $t=5$.",
    "answer": "57,5",
    "explain": "Quãng đường (đơn vị: mét) vật đi được trong khoảng thời gian từ $t=0$ đến $t=5$ là  \\[S=\\displaystyle\\int\\limits_0^5v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^5(3t+4)\\mathrm{\\,d}t=\\dfrac{115}{2}=57{,}5\\text{\\,m.}\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL3",
    "question": "Một quần thể vi khuẩn ban đầu gồm $500$ vi khuẩn, sau đó bắt đầu tăng trưởng. Gọi $P(t)$ là số lượng vi khuẩn của quần thể đó tại thời điểm $t$, trong đó $t$ tính theo ngày ($0 \\le t \\le 10$). Tốc độ tăng trưởng của quần thể vi khuẩn đó cho bởi hàm số $P'(t) = 150 \\sqrt{t}$. Tính số lượng vi khuẩn của quần thể đó sau $9$ ngày.",
    "answer": "3200",
    "explain": "Số lượng vi khuẩn của quần thể sau $t$ ngày $P(t)=\\displaystyle\\int150\\sqrt{t}\\;\\mathrm{d}t=100\\cdot t\\sqrt{t}+C$.<br>  Vì ban đầu quần thể có $500$ vi khuẩn nên $P(0)=500 \\Leftrightarrow C=500$.<br>  Vậy $P(t)=100\\cdot t\\sqrt{t}+500$.<br>  Số lượng vi khuẩn của quần thể sau $9$ ngày $P(9)=3200$ (vi khuẩn).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL4",
    "question": "Một viên đạn được bắn lên trời với vận tốc là $72$ (m/s) bắt đầu từ độ cao $2$ m. Hãy xác định chiều cao của viên đạn sau thời gian $5$ s kể từ lúc bắn biết gia tốc trọng trường là $9{,}8$ m/s$^2$ (làm tròn kết quả đến hàng đơn vị).",
    "answer": "240",
    "explain": "Vận tốc tại thời điểm $t$ là $v(t)=\\displaystyle\\int\\limits -9{,}8 \\mathrm{\\,d}t=-9{,}8t+C_1$.<br>  Do $v(0)=72$ nên $v(0)=-9{,}8 \\cdot 0+C_1 =72 \\Leftrightarrow C_1=72 \\Rightarrow v(t)=-9{,}8t+72$.<br>  Độ cao của viên đạn tại thời điểm $t$ là   \\[s(t)=\\displaystyle\\int\\limits v(t) \\mathrm{\\,d}x=\\displaystyle\\int\\limits \\left(-9{,}8t+72\\right)\\mathrm{d}t=-4{,}9t^2+72t+C_2.\\]  Vì $s(0)=2$ nên $s(0)=-4{,}9 \\cdot 0^2+72 \\cdot 0+C_2=2\\Leftrightarrow C_2=2 \\Rightarrow s(t)=-4{,}9t^2+72t+2$.<br>  Vậy sau khoảng thời gian $5$ s kể từ lúc bắn, viên đạn ở độ cao  \\[s(5)=-4{,}9 \\cdot 5^2+72 \\cdot 5+2=239{,}5 \\ \\text{m}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL5",
    "question": "Một xe ô tô sau khi chờ hết đèn đỏ đã bắt đầu chuyển động với vận tốc được biểu thị bằng đồ thị là đường cong parabol. Biết rằng sau $5$ phút thì xe đạt đến vận tốc cao nhất $1\\,000$ m/phút và bắt đầu giảm tốc, đi được $6$ phút thì xe chuyển động đều. Quãng đường xe đi được sau $10$ phút đầu tiên kể từ khi hết đèn đỏ là bao nhiêu mét?<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS17_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "8160",
    "explain": "Gọi phương trình parabol $(P)$ là $y=at^2+bt$ ($0 \\le t\\le 6$) (vì $O \\in (P)$).<br>  Dựa vào đồ thị hàm số, ta có $-\\dfrac{b}{2a}=5 \\text{ và } 25a+5b=1000 \\Leftrightarrow a=-40 \\text{ và } b=400.$<br>  Phương trình vận tốc của xe trong $6$ phút đầu là $v(t)=-40t^2+400t$.<br>  Bắt đầu từ phút thứ $6$ trở đi, xe chuyển động đều với vận tốc $v(6)=960$ m/s.<br>  Quãng đường xe đi được sau $10$ phút là \\[s(t)=\\displaystyle\\int\\limits_0^6 \\left(-40t^2+400t\\right)\\mathrm{d}t+\\displaystyle\\int\\limits_6^{10}960 \\mathrm{\\,d}t=8160 \\text{ m}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL6",
    "question": "Một máy bay di chuyển ra đến đường băng và bắt đầu chạy đà để cất cánh. Giả sử vận tốc của máy bay khi chạy đà được cho bởi $v(t) = 3t + 5$ (m/s), với $t$ là thời gian (tính bằng giây) kể từ khi máy bay bắt đầu chạy đà. Sau $30$ giây thì máy bay cất cánh rời đường băng. Quãng đường máy bay đã di chuyển từ khi bắt đầu chạy đà đến khi rời đường băng là bao nhiêu mét?",
    "answer": "1500",
    "explain": "Vận tốc của máy bay khi chạy đà là $v(t) = 3t + 5$ (m/s).<br>  Thời gian máy bay chạy đà trên đường băng là từ $t=0$ đến $t=30$ giây.<br>  Quãng đường $S$ máy bay đã di chuyển từ khi bắt đầu chạy đà đến khi rời đường băng là  \\[ S = \\displaystyle \\int _{0}^{30} v(t) \\mathrm{\\,d}t = \\displaystyle \\int _{0}^{30} (3t + 5) \\mathrm{\\,d}t = \\left. \\left( \\dfrac{3}{2}t^2 + 5t \\right) \\right|_{0}^{30} = 1500\\]  Vậy, quãng đường máy bay đã di chuyển là $1500$ mét.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL7",
    "question": "Một ô tô đang chạy với vận tốc $20$ m/s thì người lái xe đạp thắng. Sau khi đạp thắng, ô tô chuyển động chậm dần đều với vận tốc $v(t) = -40t + 20$ (m/s), trong đó $t$ là thời gian tính bằng giây kể từ lúc đạp thắng. Hỏi từ lúc đạp thắng đến khi dừng hẳn, ô tô di chuyển bao nhiêu mét?",
    "answer": "320",
    "explain": "Khi bắt đầu đạp thắng thì $v=20\\Leftrightarrow -40t + 20 = 20 \\Leftrightarrow t = 0$.<br>  Khi ô tô dừng hẳn thì $v=0\\Leftrightarrow -40t + 20 = 0 \\Leftrightarrow t = \\dfrac{1}{2}$.<br>  Vậy   \\[ S = \\displaystyle\\int_{0}^{\\frac{1}{2}} (-40t + 20)\\mathrm{\\,d}t = 5. \\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422TL8",
    "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[-1;6]$ và có đồ thị là đường gấp khúc như hình bên. Biết $F(x)$ là một nguyên hàm của $f(x)$ trên đoạn $[-1;6]$ và thỏa mãn $F(-1)=-2$. Giá trị của $F(4)+F(6)$ bằng bao nhiêu?<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS23_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "3",
    "explain": "Ta có  <br>- $S_1=\\displaystyle\\int_{-1}^{2} f(x) \\mathrm{\\,d}x=3 \\Leftrightarrow F(2)-F(-1)=3 \\Leftrightarrow F(2)=1$.<br>- $S_2=\\displaystyle\\int_2^{4} f(x) \\mathrm{\\,d}x=1 \\Leftrightarrow F(4)-F(2)=1 \\Leftrightarrow F(4)=2$.<br>- $S_3=-\\displaystyle\\int_4^{6} f(x) \\mathrm{\\,d}x=1 \\Leftrightarrow F(4)-F(6)=1 \\Leftrightarrow F(6)=1$.  Vậy $F(4)+F(6)=3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL9",
    "question": "Một chiếc xe đua $F1$ đạt tới vận tốc lớn nhất là $360$ km/h. Đồ thị bên biểu thị vận tốc $v$ của xe trong $5$ giây đầu tiên kể từ lúc xuất phát. Đồ thị trong $2$ giây đầu là một phần của một parabol đỉnh tại gốc tọa độ $O$, giây tiếp theo là đoạn thẳng và sau đúng $3$ giây thì xe đạt vận tốc lớn nhất. Biết rằng mỗi đơn vị trục hoành biểu thị $1$ giây, mỗi đơn vị trục tung biểu thị $10$ m/s và trong $5$ giây đầu xe chuyển động theo đường thẳng. Hỏi trong $5$ giây đó xe đã đi được quãng đường là bao nhiêu mét?<br><img src=\"data/12/2D4/im2D42/dlts_12_DLTS23_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "320",
    "explain": "Đổi $360$ km/h $=100$ m/s. <br>  Ta xây dựng hàm vận tốc như sau:  <br>- Trong $2$ giây đầu: $v(t)=15t^2$.<br>- Từ giây thứ $2$ đến giây thứ $3$: $v(t)=40t-20$.<br>- Từ giây thứ $3$ đến giây thứ $5$: $v(t)=100$.  Vậy $\\displaystyle\\int_0^{2} 15t^2 \\mathrm{\\,d}t+\\displaystyle\\int_2^{3} \\left(40t-20 \\right) \\mathrm{\\,d}t+\\displaystyle\\int_3^{5} 100 \\mathrm{\\,d}t=320$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D424TL10",
    "question": "Cho hàm số $f(x)=\\dfrac{a}{x^2}+\\dfrac{b}{x}+2$, với $a, b$ là các số hữu tỉ thỏa điều kiện $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1 f(x)\\mathrm{\\,d}x=2-3 \\ln 2$. Tính $T=a+b$.",
    "answer": "-2",
    "explain": "Ta có   $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1 f(x)\\mathrm{\\,d}x = \\int\\limits_{\\tfrac{1}{2}}^1\\left(\\dfrac{a}{x^2}+\\dfrac{b}{x}+2\\right)\\mathrm{\\,d}x$<br>$= \\left(-\\dfrac{a}{x}+b\\ln x+2x\\right)\\Bigg|_{\\tfrac{1}{2}}^1$<br>$= -a+2+2a+b\\ln 2-1$<br>$= a+1+b\\ln 2$  Khi đó ta được $ a+1=2 \\text{ và } b=-3\\Leftrightarrow a=1 \\text{ và } b=-3 $.<br>  Vậy $T=a+b=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D427TL11",
    "question": "Một xe ô tô đang chạy với vận tốc $18 \\mathrm{~m} / \\mathrm{s}$ thì người lái xe bất ngờ phát hiện chướng ngại vật trên đường. Người lái xe phản ứng một giây, sau đó đạp phanh khẩn cấp. Kể từ thời điểm này, ô tô chuyển động chậm dần đều với tốc độ $v(t)=-10 t+20~(\\mathrm{m} / \\mathrm{s})$, trong đó $t$ là thời gian tính bằng giây kể từ lúc đạp phanh. Hỏi kể từ lúc người lái xe phát hiện chướng ngại vật trên đường đến khi dừng hẳn, ô tô di chuyển được quãng đường bằng bao nhiêu mét?",
    "answer": "38",
    "explain": "Ta có ô tô dừng khi $ -10 t+20 =0\\Leftrightarrow t=2$.<br>  Vậy quãng đường xe di chuyển được từ lúc phát hiện chướng ngại vật đến khi xe dừng hẳn là   $ S=18+\\displaystyle\\int\\limits_{0}^{2} \\left(-10 t+20\\right) \\mathrm{\\,d}x =38.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422TL12",
    "question": "Tìm giá trị của $b \\neq 1$ để $\\displaystyle\\int\\limits_1^b(2x-6)\\mathrm{\\,d}x=0$.",
    "answer": "-2",
    "explain": "Ta có $\\displaystyle\\int\\limits_1^b(2x-6)\\mathrm{\\,d}x=0\\Leftrightarrow (x^2-6x)\\bigg|_1^b=0\\Leftrightarrow b^2-6b+5=0\\Leftrightarrow b=1~\\text{(loại)} \\text{ hoặc } b=5~\\text{(nhận)}.$<br>  Vậy $b=5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D424TL13",
    "question": "Cho hàm số $f(x)=\\dfrac{a}{x^2}+\\dfrac{b}{x}+2$, với $a$, $b$ là các số hữu tỉ thỏa điều kiện $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1f(x)\\mathrm{\\,d}x=2-3\\ln 2$. Tính $T=a+b$.",
    "answer": "-2",
    "explain": "Ta có  $\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1f(x)\\mathrm{\\,d}x =\\displaystyle\\int\\limits_{\\tfrac{1}{2}}^1 \\left(\\dfrac{a}{x^2}+\\dfrac{b}{x}+2\\right)\\mathrm{\\,d}x$<br>$=\\left(-\\dfrac{a}{x}+b\\ln |x|+2x\\right)\\Bigg|_{\\tfrac{1}{2}}^1$<br>$=-a+2-(-2a-b\\ln 2+1)$<br>$=a+1+b\\ln 2.$  Suy ra $a+1=2\\Leftrightarrow a=1$, $b=-3$.<br>  Vậy $a+b=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422TL14",
    "question": "Người ta truyền nhiệt (tính bằng $^{\\circ} C)$ cho một bình nuôi cấy vi sinh vật từ $1^{\\circ} C$. Tốc độ tăng nhiệt độ của bình tại thời điểm $t$ phút $(0\\leq t \\leq 5)$ được cho bởi hàm số $f(t)=3t^2$ ($^{\\circ} C$/phút). Biết rằng nhiệt độ của bình đó tại thời điểm $t$ là một nguyên hàm của hàm số $f(t)$, tìm nhiệt độ trung bình của bình đó trong thời gian kể từ khi truyền nhiệt đến $5$ phút đầu. (làm tròn số đến hàng đơn vị)",
    "answer": "32",
    "explain": "Tính nguyên hàm của $f(t)$ để tìm hàm nhiệt độ $T(t)$:  \\[T(t)=\\displaystyle\\int f(t)\\mathrm{\\,d} t=\\displaystyle\\int 3 t^2 d t=t^3+C.\\]  Người ta truyền nhiệt cho một bình nuôi cấy vi sinh vật từ $1^{\\circ} C$.<br> Suy ra $T(0)=1 \\Rightarrow C=1 \\Rightarrow T(t)=t^3+1$.<br>  Vậy nhiệt độ trung bình của bình đó tại trong thời gian kể từ khi truyền nhiệt đến $5$ phút đầu là  \\[T_{t b}=\\dfrac{1}{5-0} \\cdot \\displaystyle\\int\\limits_0^5 T(t)\\mathrm{\\,d} t=\\dfrac{1}{5} \\cdot \\displaystyle\\int\\limits_0^5\\left(t^3+1\\right) \\mathrm{\\,d} t \\approx 32^{\\circ} C.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D424TL15",
    "question": "Cho hàm số $ f(x) =x^2 + x \\text{ khi} x \\leq 1, \\text{ và } \\dfrac{1}{x} + 1 \\text{ khi} x &gt; 1$. Biết rằng $\\displaystyle \\int \\limits_{-1}^2 f(x)\\, \\mathrm{d}x = \\dfrac{a}{b} + \\ln c$, $(a, b, c \\in \\mathbb{Z}$, $ \\dfrac{a}{b}$ là phân số tối giản). Tính $abc$.",
    "answer": "30",
    "explain": "Ta có  $\\displaystyle \\int \\limits_{-1}^2 f(x)\\, \\mathrm{d}x = \\int \\limits_{-1}^1 x^2+x \\mathrm{d}x + \\int \\limits_1^2 \\dfrac{1}{x} + 1 \\mathrm{\\,d}x$<br>$= \\left(\\dfrac{x^3}{3}+\\dfrac{x^2}{2}\\right)\\Bigg|_{-1}^1 + \\left(\\ln |x| +x\\right)\\Bigg|^2_1$<br>$= \\left(\\dfrac{1}{3}+\\dfrac{1}{2}+\\dfrac{1}{3}-\\dfrac{1}{2}\\right) + \\left(\\ln 2 +2 -\\ln 1-1\\right)$<br>$= \\dfrac{5}{3} + \\ln 2.$  Suy ra $a=5$, $b=3$ và $c=2$. <br>  Ta có \\[abc=5\\cdot 3 \\cdot 2=30.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D423TL16",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số $f(x)=\\sin x$ và $F(0)=1$. Tính $F \\left(\\dfrac{\\pi}{2}\\right)$.",
    "answer": "2",
    "explain": "Vì $F(x)$ là một nguyên hàm của hàm số $f(x)=\\sin x$ nên  $F\\left(\\dfrac{\\pi}{2}\\right)-F(0)=\\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x.$  Do đó $F\\left(\\dfrac{\\pi}{2}\\right)=F(0)+ \\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x=1+\\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} \\sin x \\mathrm{\\,d}x=1+1=2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D423TL17",
    "question": "Kết quả của tích phân $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{4}} \\sin x\\mathrm{\\,d}x = \\dfrac{a-\\sqrt{b}}{2}$. Tính $a+b$.",
    "answer": "4",
    "explain": "Ta có $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{4}} \\sin x\\mathrm{\\,d}x = -\\cos x\\Bigg|_0^{\\tfrac{\\pi}{4}} = \\left(-\\cos\\dfrac{\\pi}{4}\\right)-(-\\cos 0)=-\\dfrac{\\sqrt{2}}{2}-(-1)=\\dfrac{2-\\sqrt{2}}{2}$.<br>  Vậy $a+b=2+2=4$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D423TL3",
    "question": "Cho $f(x)=\\dfrac{1}{\\sin ^2 x}$. Biết rằng $F(x)$ là một nguyên hàm của $f(x)$ thỏa $F\\left(\\dfrac{\\pi}{6}\\right)=0$. Tính $F\\left(\\dfrac{\\pi}{3}\\right)$. Kết quả được làm tròn đến hàng phần trăm.",
    "answer": "1,15",
    "explain": "Ta có   $\\displaystyle\\int\\limits_{\\dfrac{\\pi}{6}}^{\\dfrac{\\pi}{3}} f(x) \\mathrm{\\,d}x=\\dfrac{2}{\\sqrt{3}} \\Leftrightarrow F\\left(\\dfrac{\\pi}{3}\\right)-F\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{2}{\\sqrt{3}} \\Leftrightarrow F\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{2}{\\sqrt{3}} +F\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{2}{\\sqrt{3}} \\approx 1{,}15.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D421TL18",
    "question": "Cho $\\displaystyle\\int\\limits_0^2f(x)\\mathrm{\\,d}x=3$. Tính $I=\\displaystyle\\int\\limits_0^24f(x)\\mathrm{\\,d}x$.",
    "answer": "12",
    "explain": "Ta có \\[I=\\displaystyle\\int\\limits_0^24f(x)\\mathrm{\\,d}x=4\\displaystyle\\int\\limits_0^2f(x)\\mathrm{\\,d}x=4\\cdot3=12.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D421TL19",
    "question": "Cho $\\displaystyle\\int\\limits_{-2}^{5} f(x) \\mathrm{\\,d}x = -12$, $F(x)$ là một nguyên hàm của $f(x)$ trên $[-2;5]$, $F(5) = -10$. Giá trị $F(-2)$ bằng bao nhiêu?",
    "answer": "2",
    "explain": "Ta có $\\displaystyle\\int\\limits_{-2}^{5} f(x) \\mathrm{\\,d}x = F(5) - F(-2)$.<br> Suy ra $-12 = (-10) - F(-2) \\Rightarrow F(-2) = -10 + 12 = 2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422TL20",
    "question": "Biết $\\displaystyle\\int\\limits_{1}^{2}\\left(1+\\dfrac{3}{x}\\right)\\,\\mathrm{\\,d}x=a+b\\ln c$, với $a$, $b$, $c\\in\\mathbb{Z}$, $c&lt;7$. Tính $S=a+b+c$.",
    "answer": "6",
    "explain": "Ta có $\\displaystyle\\int\\limits_{1}^{2}\\left(1+\\dfrac{3}{x}\\right)\\,\\mathrm{\\,d}x=\\left(x+3\\ln x\\right)\\Big|_1^2=1+3\\ln 2$. Suy ra $a=1$, $b=3$, $c=2$.<br> Vậy $S=a+b+c=1+3+2=6$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D422TL21",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số $f(x)=(x^2-2)(2x+1)$ trên $\\mathbb{R}$ và $F(2)=9$. Tính $F(0)$ (kết quả làm tròn đến hàng phần mười).",
    "answer": "10,3",
    "explain": "Ta có $f(x)=(x^2-2)(2x+1)=2x^3+x^2-4x-2$.<br> Khi đó $\\displaystyle\\int\\limits_{0}^{2}f(x)\\,\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{2}(2x^3+x^2-4x-2)\\,\\mathrm{\\,d}x=\\left(\\dfrac{x^4}{2}+\\dfrac{x^3}{3}-2x^2-2x\\right)\\Bigg|_{0}^{2}=-\\dfrac{4}{3}$.<br> Suy ra $F(0)=F(2)-\\displaystyle\\int\\limits_{0}^{2}f(x)\\,\\mathrm{\\,d}x=9+\\dfrac{4}{3}\\approx 10{,}3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D424TL22",
    "question": "Cho $\\displaystyle\\int\\limits_{0}^{1} \\left( \\sqrt{x}-\\mathrm{e}^x\\right) \\mathrm{d}x=a\\mathrm{e}+\\dfrac{b}{c}$, ($a$, $b$, $c \\in \\mathbb{Q}$), $\\dfrac{b}{c}$ là phân số tối giản. Biểu thức $a-b+c$ bằng bao nhiêu?",
    "answer": "-3",
    "explain": "Ta có \\[\\displaystyle\\int\\limits_{0}^{1} \\left( \\sqrt{x}-\\mathrm{e}^x\\right) \\mathrm{d}x =\\left(\\dfrac{2}{3}x\\sqrt{x}-\\mathrm{e}^x\\right)\\Bigg|_0^1\\\\ =-\\mathrm{e}+\\dfrac{5}{3}.\\] Suy ra $a=-1$, $b=5$, $c=3$.<br> Vậy $a-b+c=-3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D424TL23",
    "question": "Cho biết $\\displaystyle \\int \\limits_{1}^{2} \\left(1+2^x\\right) \\mathrm{d\\,}x=a-\\dfrac{b}{\\ln 2}$ ($\\forall a$, $b \\in \\mathbb{Z}$). Giá trị của $a+b$ bằng bao nhiêu?",
    "answer": "-1",
    "explain": "$\\displaystyle \\int \\limits_{1}^{2} \\left(1+2^x\\right) \\mathrm{d\\,}x= \\left(x+\\dfrac{2^x}{\\ln 2}\\right) \\Biggr|_1^2= \\left(2+\\dfrac{2^2}{\\ln 2}\\right) -\\left(1+\\dfrac{2^1}{\\ln 2}\\right)=1-\\dfrac{-2}{\\ln 2}$.<br> Vậy $\\begin{cases}&a=1\\\\&b=-2\\end{cases} $ nên $a+b=-1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL24",
    "question": "Công tử Bạc Liêu có một mảnh đất hình vuông ở một khu đô thị sầm uất, hình vuông có cạnh $40$ (m), công tử dự định xây một hồ bơi được giới hạn bởi cạnh $AB$ của hình vuông và một parabol đi qua hai đầu mút cạnh đó, đỉnh của parabol cách cạnh $AB$ một đoạn $10$ (m). Từ vị trí $O$ là trung điểm $AB$, kẻ tia $Ot$ bất kì cắt parabol và một cạnh khác của hình vuông theo thứ tự tại các điểm $M$, $N$. Gọi $P$ là trung điểm $MN$, khi tia $Ot$ quay quanh gốc $O$ thì tập hợp các điểm $P$ tạo thành đường cong $(L)$. Công tử dự định sử dụng một loại gạch men đặc biệt để lát nền cho toàn bộ khu vực được giới hạn bởi đường cong $(L)$ và parabol. Phần còn lại trên mảnh đất hình vuông đó thì công tử sẽ trồng cỏ. Biết rằng chi phí xây hồ bơi là $5$ (triệu đồng/m$^2$), chi phí lát gạch men là $2$ (triệu đồng/m$^2$), chi phí trồng cỏ tự nhiên là $100$ (nghìn đồng/m$^2$). Tính tổng số tiền mà công tử Bạc Liêu phải chi trả cho toàn bộ dự án trên theo đơn vị tỷ đồng <em>(làm tròn kết quả đến hàng phần chục)</em>.<br><img src=\"data/12/2D4/im2D42/2D42_ex12_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2,4",
    "explain": "Chọn hệ trục tọa độ $Oxy$ sao cho gốc tọa độ $O$ trùng với trung điểm của cạnh $AB$.<br> Trục $Ox$ nằm trên đường thẳng $AB$, chiều dương hướng sang phải.<br> Trục $Oy$ đi qua $O$ và vuông góc với $AB$, chiều dương hướng lên trên.<br> Khi đó, ta có $A(20;0)$, $B(-20;0)$, đỉnh parabol $O_1(0;-10)$.<br> Phương trình parabol có dạng $y=\\dfrac{x^2}{40}-10$.<br> Gọi tia $Ot$ có phương trình $y=kx$.<br> Mà $M(x_{M};y_{M}) \\in Ot$ nên $y_{M}=kx_{M}$.<br> Gọi $K(0;-40)$ là trung điểm của $CD$.<br> Vì phần diện tích lát gạch men đối xứng qua trục $Oy$ nên ta xét $Ot$ quay qua cạnh $BC$ và $CK$.<br> Do đó, $x_N \\le 0$.<br><br>- Khi $Ot$ quay qua cạnh $BC$. {Nên $ N \\in BC \\Rightarrow N(-20;y_N)$.<br> Mà $N \\in Ot \\Rightarrow y_N=-20k$.<br> Vì $P(x_P;y_P)$ là trung điểm của $MN$ nên \\[x_P=\\dfrac{x_M+x_N}{2}=\\dfrac{x_M-20}{2} \\Rightarrow x_M=2x_P+20. \\quad (1)\\] \\[y_P=\\dfrac{y_M+y_N}{2}=\\dfrac{y_M-20k}{2}=\\dfrac{kx_M-20k}{2}=kx_P. \\quad (2)\\] Vì $M$ là giao của tia $Ot$ và parabol nên xét phương trình hoành độ giao điểm, ta có \\[kx_M=\\dfrac{x_M^2}{40}-10 \\Rightarrow \\dfrac{x_M^2}{40}-kx_M-10=0.\\] Thay $(1)$, $(2)$ vào phương trình trên, ta có<br>$$\\begin{aligned} \\dfrac{(2x_P+20)^2}{40}-\\dfrac{y_P}{x_P}(2x_P+20)-10 &= 0 \\\\ \\dfrac{y_P}{x_P}(2x_P+20) &= \\dfrac{(2x_P+20)^2}{40} - 10 \\\\ y_P &= \\left[\\dfrac{(2x_P+20)^2}{40} - 10\\right] \\cdot \\dfrac{x_P}{2x_P+20} \\\\ y_P &= \\dfrac{4x_P^2 + 80x_P +400 - 400}{40} \\cdot \\dfrac{x_P}{2x_P+20} \\\\ y_P &= \\dfrac{\\left(x_P^2 + 20x_P\\right) \\cdot x_P}{10 \\cdot \\left(2x_P+20\\right)} \\\\ y_P &= \\dfrac{x_P^3+20x_P^2}{20(x_P+10)}. \\end{aligned}$$ Vậy khi $Ot$ quay qua cạnh $BC$ thì $P$ thuộc đường cong $y=\\dfrac{x^3+20x^2}{20(x+10)}$.}<br><img src=\"data/12/2D4/im2D42/2D42_ex12_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br><br>- Khi $Ot$ quay qua cạnh $CK$.<br> Nên $ N \\in CD \\Rightarrow N(x_N;-40)$ và $x_N \\le 0$.<br> Mà $N \\in Ot \\Rightarrow x_N=-\\dfrac{40}{k}$.<br> Vì $P(x_P;y_P)$ là trung điểm của $MN$ nên \\[x_P=\\dfrac{x_M+x_N}{2}=\\dfrac{x_M-\\dfrac{40}{k}}{2}=\\dfrac{\\dfrac{y_M}{k}-\\dfrac{40}{k}}{2}=\\dfrac{y_P}{k}. \\quad (3)\\] \\[y_P=\\dfrac{y_M+y_N}{2}=\\dfrac{y_M-40}{2} \\Rightarrow y_M=2y_P+40. \\quad (4)\\] Ta có \\[\\dfrac{x_M^2}{40}-kx_M-10=0 \\Rightarrow \\dfrac{\\left(\\dfrac{y_M}{k}\\right)^2}{40}-y_M-10=0.\\] Thay $(3)$, $(4)$ vào phương trình trên, ta có<br>$$\\begin{aligned} \\dfrac{\\left(\\dfrac{y_M}{k}\\right)^2}{40}-y_M-10 &= 0 \\\\ \\dfrac{(2y_P + 40)^2 \\cdot x_P^2}{40 y_P^2} - 2y_P - 40 - 10 &= 0 \\\\ \\dfrac{(2y_P + 40)^2 \\cdot x_P^2}{40 y_P^2} &= 2y_P + 50 \\\\ x_P^2 &= \\dfrac{40y_P^2 (2y_P + 50)}{(2y_P + 40)^2} \\\\ x_P^2 &= \\dfrac{4\\cdot 20y_P^2 (y_P + 25)}{(2y_P + 40)^2} \\\\ x_P &= \\dfrac{-2y_P\\sqrt{20(y_P+25)}}{2(y_P+20)} \\\\ x_P &= \\dfrac{-y_P\\sqrt{20(y_P+25)}}{y_P+20}. \\end{aligned}$$ Vậy khi $Ot$ quay qua cạnh $CK$ thì $P$ thuộc đường cong $x = \\dfrac{-y\\sqrt{20(y+25)}}{y+20}$.<br><br>Ta có phương trình đường thẳng đi qua $OC$ là $y=2x$.<br> Xét phương trình hoành độ giao điểm của $y=2x$ và $y=\\dfrac{x^3+20x^2}{20(x+10)}$, ta có $$\\begin{aligned} &&\\dfrac{x^3+20x^2}{20(x+10)} = 2x \\\\ &\\Leftrightarrow& x^3 + 20x^2 = 40x^2 + 400x \\\\ &\\Leftrightarrow& x^3 - 20x^2 - 400x = 0 \\\\ &\\Leftrightarrow& \\left[\\begin{aligned}&x = 10 + 10\\sqrt{5}& \\text{ (không thỏa mãn)} \\\\ &x = 10 - 10\\sqrt{5} &\\text{ (thỏa mãn)} \\\\ &x = 0&\\text{ (không thỏa mãn)}.\\end{aligned}\\right. \\end{aligned}$$ Vậy tia $OC$ cắt đường cong $y=\\dfrac{x^{3}+20x^2}{20(x+10)}$ tại điểm $Q \\left(10-10\\sqrt{5};20-20\\sqrt{5}\\right)$.<br> Diện tích hồ bơi là \\[S_1 = \\displaystyle\\int\\limits_{-20}^{20} \\left(10-\\dfrac{x^{2}}{40}\\right)\\mathrm{\\,d}x = \\dfrac{800}{3}.\\] Diện tích lát gạch men được tính theo các phần là<br>$$\\begin{aligned} &&S_{BQQ'} + S_{ARR'} = 2 \\cdot \\displaystyle\\int\\limits_{-20}^{10-10\\sqrt{5}} -\\left[\\dfrac{x^{3}+20x^{2}}{20(x+10)}\\right] \\mathrm{\\,d}x \\approx 140{,}65\\\\ &&S_{QRO_2} = 2 \\cdot \\left[- \\displaystyle\\int\\limits_{-25}^{20-20\\sqrt{5}} \\dfrac{-y\\sqrt{20(y+25)}}{y+20} \\mathrm{\\,d}y \\right]\\approx 4{,}51.\\\\ &&S_{QQ'R'R} = 2\\left(10 - 10\\sqrt{5}\\right) \\left(20-20\\sqrt{5}\\right) \\approx 611{,}15\\\\ &&S_2 = S_{BQQ'} + S_{ARR'} + S_{QQ'R'R} + S_{QRO_2} - S_1 = 489{,}64. \\end{aligned}$$ Trong đó<br><br>- $Q$, $O_2$ và $R$ lần lượt là vị trí của $P$ khi $N$ trùng $C$, $K$ và $D$.<br><br>- $Q'$ và $R'$ lần lượt là hình chiếu của $Q$ và $R$ trên $Ox$.<br>Diện tích trồng cỏ là \\[S_3 = 1\\,600-\\dfrac{800}{3}-489{,}64 \\approx 843{,}69\\;\\left(\\text{m}^2\\right).\\] Tổng chi phí là \\[T = 5S_1 + 2S_2 + 0{,}1S_3 \\approx 2\\,397 \\text{ (triệu đồng)}.\\] Vậy tổng chi phí xấp xỉ $2{,}4$ tỷ đồng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL25",
    "question": "Một xe ô tô sau khi chờ hết đèn đỏ đã bắt đầu chuyển động. Trong $7$ phút đầu tiên với tốc độ được biểu thị bằng đồ thị là đường cong parabol, biết rằng sau $5$ phút thì xe đạt đến tốc độ cao nhất $900$ (m/phút) và bắt đầu giảm tốc độ. Sau khi đi được $7$ phút thì xe chuyển động đều (tham khảo hình vẽ). Quãng đường xe đi được sau $10$ phút đầu tiên kể từ khi hết đèn đỏ là bao nhiêu mét?<br><img src=\"data/12/2D4/im2D42/2D42_ex12_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "6972",
    "explain": "Giả sử phương trình vận tốc chuyển động trong $7$ phút đầu là $v(t)=at^2+bt+c$, $a \\neq 0$.<br> Do đồ thị $v(t)$ đi qua $O(0;0)$ và có đỉnh $I(5;900)$ nên ta có hệ phương trình $$\\begin{cases}&c=0\\\\&-\\dfrac {b}{2a}=5\\\\&25a+5b+c=900\\end{cases} \\Leftrightarrow \\begin{cases}&25a+5b=900\\\\&10a+b=0\\\\&c=0\\end{cases}\\Leftrightarrow \\begin{cases}&a=-36\\\\&b=360\\\\&c=0.\\end{cases}$$ Vậy $v(t)=-36t^2+360 t$.<br> Sau phút thứ $7$ xe chuyển động đều với vận tốc $v(7)=-36\\cdot 7^2+360\\cdot 7=756$ (m/phút).<br> Quãng đường ô tô đi được trong $7$ phút đầu là $s_1=\\displaystyle\\int\\limits_0^7\\left(-36 t^2+360 t\\right)\\mathrm{\\,d}x=4\\,704$ m.<br> Quãng đường đi được trong $3$ phút sau là $756\\cdot 3=2268(m)$.<br> Tổng quãng đường xe đi được trong 10 phút là $4\\,704+2\\,268=6\\,972$ m.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL26",
    "question": "Đối với ngành nuôi trồng thủy sản, việc kiểm soát lượng thuốc tồn dư trong nước là một nhiệm vụ quan trọng nhằm đáp ứng các tiêu chuẩn an toàn về môi trường. Khi nghiên cứu một loại thuốc trị bệnh trong nuôi trồng thủy sản, người ta sử dụng thuốc đó một lần và theo dõi nồng độ thuốc tồn dư trong nước kể từ lúc sử dụng thuốc. Kết quả cho thấy nồng độ thuốc $y(t)$ (đơn vị: mg/lít) tồn dư trong nước tại thời điểm $t$ ngày kể từ lúc sử dụng thuốc, thỏa mãn $y(t) = \\mathrm{e}^{g(t)}$ và $y'(t) = k \\cdot y(t)$ với $t \\geq 0$, trong đó $k$ là hằng số khác không. Đo nồng độ thuốc tồn dư trong nước tại các thời điểm $t=6$ ngày, $t=12$ ngày nhận được kết quả lần lượt là $2$ mg/lít, $1$ mg/lít. Nồng độ thuốc tồn dư trong nước tại thời điểm $30$ ngày bằng bao nhiêu mg/lít (Kết quả làm tròn đến hàng phần trăm)?",
    "answer": "0,13",
    "explain": "Từ giả thiết, ta có $$\\begin{aligned} y'(t) &= k \\cdot y(t)\\\\ \\Rightarrow \\dfrac{y'(t)}{y(t)} &= k\\\\ \\Rightarrow \\ln |y(t)| &= kt + C. \\end{aligned}$$ Vì $y(t) = \\mathrm{e}^{g(t)} &gt; 0$ nên $y(t) = \\mathrm{e}^{kt+C} = A \\cdot \\mathrm{e}^{kt}$ (với $A = \\mathrm{e}^C$).<br><br>- Tại $t=6$ thì $y(6) = A \\cdot \\mathrm{e}^{6k} = 2$.<br><br>- Tại $t=12$ thì $y(12) = A \\cdot \\mathrm{e}^{12k} = 1$.<br>Suy ra $$\\dfrac{y(12)}{y(6)} = \\dfrac{\\mathrm{e}^{12k}}{\\mathrm{e}^{6k}} = \\dfrac{1}{2} \\Rightarrow \\mathrm{e}^{6k} = \\dfrac{1}{2} \\Rightarrow \\mathrm{e}^k = \\left(\\dfrac{1}{2}\\right)^{\\frac{1}{6}}.$$ Thay vào $y(6)$, ta được $$A \\cdot \\dfrac{1}{2} = 2 \\Rightarrow A = 4.$$ Vậy $y(t) = 4 \\cdot \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{6}}.$ Khi $t=30$, ta được $y(30) = 4 \\cdot \\left(\\dfrac{1}{2}\\right)^{\\frac{30}{6}} = 4 \\cdot \\left(\\dfrac{1}{2}\\right)^5 = \\dfrac{4}{32} = 0{,}125 \\approx 0{,}13$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL27",
    "question": "Trong một thí nghiệm sinh học, người ta theo dõi sự phát triển của một khối tế bào ung thư trong môi trường nuôi cấy. Ban đầu, khối tế bào có $1000$ tế bào. Sau $1$ ngày và sau $4$ ngày kể từ khi bắt đầu theo dõi, số lượng tế bào ung thư lần lượt là $1250$ tế bào và $2600$ tế bào. Gọi $N$ là số lượng tế bào ung thư tại thời điểm $t$ ngày $(0\\le t\\le 10 )$. Người ta ước tính tốc độ tăng trưởng của khối tế bào được mô tả bởi $N'(t)=at+b\\sqrt{t}$, trong đó $a, b$ là các hằng số. Hỏi sau $8$ ngày, số lượng tế bào ung thư của khối tế bào là bao nhiêu? (kết quả làm tròn đến hàng đơn vị)",
    "answer": "4588",
    "explain": "Ta có $N(t )=\\displaystyle\\int\\left(at+b\\sqrt{t} \\right)\\mathrm{\\,d}t=\\dfrac{at^2}{2}+\\dfrac{2}{3}bt\\sqrt{t}+C$.<br> Theo đề, ta có hệ $\\begin{cases} & N(0)=\\dfrac{a\\cdot 0^2}{2}+\\dfrac{2}{3}b\\cdot 0\\sqrt{0}+C=1000 \\\\ & N(1)=\\dfrac{a\\cdot 1^2}{2}+\\dfrac{2}{3}b\\cdot 1\\sqrt{1}+C=1250 \\\\ & N(4)=\\dfrac{ac\\dot 4^2}{2}+\\dfrac{2}{3}b\\cdot 4\\sqrt{4}+C=2600 \\\\ \\end{cases}\\Leftrightarrow \\begin{cases} & a=-100 \\\\ & b=450 \\\\ & c=1000.\\end{cases}$<br> Vậy sau $8$ ngày, số lượng tế bào ung thư của khối tế bào là <br> $N(8)=\\dfrac{-100\\cdot.8^2}{2}+\\dfrac{2}{3}\\cdot 450\\cdot 8\\sqrt{8}+1000\\approx 4588$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL28",
    "question": "Một vật chuyển động trong $4$ giờ với vận tốc $v$ (km/h) phụ thuộc thời gian $t$ (h) có đồ thị của vận tốc như hình bên. Trong khoảng thời gian $2$ giờ kể từ khi bắt đầu chuyển động, đồ thị đó là một phần của đường parabol có đỉnh $I(2;7)$ và trục đối xứng của parabol song song với trục tung, khoảng thời gian còn lại đồ thị là đoạn thẳng $IA$. Quãng đường $s$ mà vật di chuyển được trong $4$ giờ đó là bao nhiêu km (kết quả được làm tròn đến hàng phần chục)?<br><img src=\"data/12/2D4/im2D42/2D42_ex12_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "21,3",
    "explain": "Phương trình parabol là $v = -t^2 + 4t + 3$ (km/h).<br> Quãng đường vật chuyển động được trong khoảng thời gian $2$ giờ đầu là $$\\displaystyle\\int\\limits_0^2 v(t)\\mathrm{\\,d}t = \\displaystyle\\int\\limits_0^2 \\left(-t^2 + 4t + 3\\right)\\mathrm{d}t = \\dfrac{34}{3}\\,\\text{(km)}.$$ Quãng đường vật đi được trong $2$ giờ sau là $\\dfrac{(7+3)\\cdot 2}{2} = 10$ km.<br> Vậy tổng quãng đường vật đi được trong $4$ giờ là $\\dfrac{34}{3}+10\\approx 21{,}3$ (km).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL29",
    "question": "Một vật chuyển động với vận tốc $15$ m/s thì tăng tốc với gia tốc được tính theo thời gian là $a(t)=t^2+3t$. Hỏi quãng đường vật đi được trong khoảng thời gian $6$ giây kể từ khi vật bắt đầu tăng tốc là bao nhiêu mét?",
    "answer": "306",
    "explain": "Vận tốc của vật tại thời điểm $t$ là $v(t) = \\displaystyle\\int a(t) \\mathrm{\\,d}t = \\displaystyle\\int (t^2+3t) \\mathrm{\\,d}t = \\dfrac{t^3}{3} + \\dfrac{3t^2}{2} + C$.<br> Tại thời điểm $t=0$, $v(0)=15 \\Rightarrow C=15$. Do đó $v(t) = \\dfrac{t^3}{3} + \\dfrac{3t^2}{2} + 15$.<br> Quãng đường vật đi được trong $6$ giây đầu tiên là $$s = \\displaystyle\\int\\limits_0^6 v(t) \\mathrm{\\,d}t = \\displaystyle\\int\\limits_0^6 \\left( \\dfrac{t^3}{3} + \\dfrac{3t^2}{2} + 15 \\right) \\mathrm{\\,d}t=306 \\, \\text{(m)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL30",
    "question": "Một vật chuyển động trong $4$ giờ với vận tốc $v$ (km/h) phụ thuộc thời gian $t$ (h) có đồ thị như hình dưới. Trong khoảng thời gian $3$ giờ kể từ khi bắt đầu chuyển động, đồ thị đó là một phần của đường parabol có đỉnh $I(2;9)$ và trục đối xứng song song với trục tung, khoảng thời gian còn lại đồ thị là một đoạn thẳng song song với trục hoành. Tính quãng đường $s$ (km) mà vật di chuyển được trong $4$ giờ đó.<br><img src=\"data/12/2D4/im2D42/2D42_ex12_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "27",
    "explain": "Giả sử $v(t)=at^2+bt+c$ với $(0\\le t\\le 3)$.<br> Ta có $\\begin{cases}&\\dfrac{-b}{2a}=2\\\\ &4a+2b+c=9\\\\&c=0\\end{cases}\\Rightarrow\\begin{cases}&a=- \\dfrac{9}{4}\\\\&b=9\\\\&c=0.\\end{cases}$<br> Vậy $v(t)= -\\dfrac{9}{4}t^2 +9t$.<br> Khi đó quãng đường đi được từ 0 giờ đến 3 giờ là $\\displaystyle\\int\\limits_0^3 \\left(-\\dfrac{9}{4}t^2 + 9t\\right)\\,\\mathrm{\\,d}t=\\dfrac{81}{4}$.<br> Vì từ $3$ giờ tới $4$ giờ vận tốc không đổi nên ta có $v(4)=v(3)=\\dfrac{27}{4}$.<br> Vậy tổng quảng đường vật di chuyển được bằng $\\dfrac{81}{4}+\\dfrac{27}{4}=27$ (km).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL31",
    "question": "Giá trị trung bình của hàm số liên tục $f(x)$ trên đoạn $[a;b]$ được định nghĩa là $\\dfrac{1}{b-a}\\displaystyle\\int\\limits_a^b f(x)\\,\\mathrm{d}x$. Giả sử nhiệt độ (tính bằng độ) tại thời điểm $t$ giờ trong khoảng thời gian từ $6$ giờ sáng đến $12$ giờ trưa ở một địa phương vào một ngày nào đó trong năm được mô hình hóa bởi hàm số $T(t)=28+2t(t-7)$, với $6\\le t\\le 12$. Hỏi nhiệt độ trung bình vào ngày đó là bao nhiêu độ?",
    "answer": "70",
    "explain": "Nhiệt độ trung bình ($t_{\\text{tb}}$) vào ngày đó là \\[ t_{\\text{tb}} =\\dfrac{1}{12-6} \\cdot \\displaystyle\\int\\limits_6^{12} \\left[28+2t(t-7)\\right]\\,\\mathrm{d}t =\\dfrac{1}{6} \\cdot \\displaystyle\\int\\limits_6^{12} \\left(2t^2-14t+28\\right)\\,\\mathrm{d}t =70. \\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D426TL32",
    "question": "Cho hai quả bóng $A$, $B$ di chuyển ngược chiều nhau va chạm với nhau. Sau va chạm mỗi quả bóng nảy ngược lại một đoạn thì dừng hẳn. Biết sau khi va chạm, quả bóng $A$ nảy ngược lại với gia tốc bằng $-2$ (m$^2$/s) và vận tốc lúc va chạm của quả bóng $A$ là $10$ (m/s). Khoảng cách từ vị trí quả bóng $A$ dừng hẳn tới vị trí va chạm ban đầu của hai quả bóng là bao nhiêu (giả sử hai quả bóng đều chuyển động thẳng)?",
    "answer": "25",
    "explain": "Vận tốc tức thời của quả bóng $A$ tại thời điểm $t$ (s) là $$v(t)= \\displaystyle \\int a(t) \\mathrm{d\\,}t = \\displaystyle \\int (-2) \\mathrm{d\\,}t =-2t+C.$$ Vì $v(0)=10$ nên $-2 \\cdot 0+C=10 \\Leftrightarrow C=10$.<br> Vậy $v(t)=-2t+10$.<br> Khi xe dừng hẳn thì $v(t)=0 \\Leftrightarrow -2t+10 = 0\\Leftrightarrow t=5$.<br> Khoảng cách từ vị trí quả bóng $A$ dừng hẳn tới vị trí va chạm ban đầu của hai quả bóng là $$ \\displaystyle \\int \\limits_{0}^{5} v(t) \\mathrm{d}t= \\displaystyle \\int \\limits_{0}^{5} \\left(-2t+10\\right) \\mathrm{d}t=25 \\; \\text{(m)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
