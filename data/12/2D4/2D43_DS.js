window.dungSai2D43 = [
  {
    "id": "2D431DS1",
    "question": "Cho hàm số $f(x)=x^2-4$ có đồ thị $(C)$. Gọi $D$ là hình phẳng giới hạn bởi đồ thị $(C)$ và trục hoành.",
    "subQuestions": [
      {
        "text": "Diện tích hình phẳng $D$ là $S=\\displaystyle\\int\\limits_{-2}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "Thể tích khối tròn xoay khi quay hình phẳng $D$ quanh trục $Ox$ là $V=\\displaystyle\\int\\limits_{-2}^2\\left(x^2-4\\right)^2\\mathrm{\\,d}x$",
        "answer": false
      },
      {
        "text": "Gọi $S_1$ là diện tích hình phẳng giới hạn bởi đồ thị $(C)$, đường thẳng $d\\colon y=-3x$ và hai đường thẳng $x=-4$; $x=1$. Khi đó $S_1=125$",
        "answer": false
      },
      {
        "text": "Đường thẳng $x=m$, $(m\\in\\mathbb{R})$ chia hình phẳng $D$ thành hai phần có diện tích bằng nhau. Khi đó $m=0$",
        "answer": true
      }
    ],
    "explain": "Phương trình hoành độ giao điểm của đồ thị hàm số $f(x)=x^2-4$ và trục hoành là  \\[x^2-4=0\\Leftrightarrow x=2 \\text{ hoặc } x=-2.\\]  <br>- Diện tích hình phẳng $D$ là $S=\\displaystyle\\int\\limits_{-2}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$.<br>- Thể tích khối tròn xoay khi quay hình phẳng $D$ quanh trục $Ox$ là $V=\\pi\\displaystyle\\int\\limits_{-2}^2\\left(x^2-4\\right)^2\\mathrm{\\,d}x$.<br>- Phương trình hoành độ giao điểm của đồ thị hàm số $(C)\\colon y=x^2-4$ và đường thẳng $d\\colon y=-3x$ là  \\[x^2-4=-3x\\Leftrightarrow x^2+3x-4=0\\Leftrightarrow x=1 \\text{ hoặc } x=-4.\\]  Diện tích hình phẳng giới hạn bởi đồ thị $(C)$, đường thẳng $d\\colon y=-3x$ và hai đường thẳng $x=-4$; $x=1$ là  \\[S=\\displaystyle\\int\\limits_{-4}^1\\left|x^2+3x-4\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-4}^1\\left(-x^2-3x+4\\right)\\mathrm{\\,d}x=\\left(-\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}-4x\\right)\\Bigg|_{-4}^1=\\dfrac{125}{6}.\\]<br>- Ta có $\\displaystyle\\int\\limits_{-2}^m\\left|x^2-4\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{m}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$ với $-2&lt;m&lt;2$.<br>  Xét biểu thức $h(x)=x^2-4$ ta có bảng xét dấu như sau  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS16_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra   $\\displaystyle\\int\\limits_{-2}^m\\left|x^2-4\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{m}^2\\left|x^2-4\\right|\\mathrm{\\,d}x$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_{-2}^m\\left(4-x^2\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{m}^2\\left(4-x^2\\right)\\mathrm{\\,d}x$<br>$\\Leftrightarrow \\left(4x-\\dfrac{x^3}{3}\\right)\\Bigg|_{-2}^m=\\left(4x-\\dfrac{x^3}{3}\\right)\\Bigg|_m^2$<br>$\\Leftrightarrow \\dfrac{m^3}{3}-4m-\\dfrac{16}{3}=-\\dfrac{16}{3}-\\dfrac{m^3}{3}+4m$<br>$\\Leftrightarrow \\dfrac{2m^3}{3}-8m=0$<br>$\\Leftrightarrow m=0 \\text{ hoặc } m=\\pm2\\sqrt{3.}$  So với điều kiện suy ra $m=0$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS2",
    "question": "Một vật chuyển động đều với vận tốc có phương trình $v(t)=t^2-2 t+1$, trong đó $t$ được tính bằng giây, quãng đường $s(t)$ được tính bằng mét.",
    "subQuestions": [
      {
        "text": "Quãng đường vật đi được từ khi vật bắt đầu chuyển động đến khi gia tốc bị triệt tiêu là $\\dfrac{1}{3}$ m",
        "answer": true
      },
      {
        "text": "Quãng đường vật đi được trong 2 giây tính đến thời điểm mà vận tốc đạt $9(\\mathrm{m} / \\mathrm{s})$ là $\\dfrac{26}{3}$ m",
        "answer": false
      },
      {
        "text": "Quãng đường đi được của vật sau 2 giây kể từ khi vật bắt đầu chuyển động là $\\dfrac{2}{3}$ m",
        "answer": true
      },
      {
        "text": "Quãng đường vật đi được từ 0 giây đến thời điểm mà gia tốc bằng $10(\\mathrm{m} / \\mathrm{s}^2)$ là $44$ m",
        "answer": false
      }
    ],
    "explain": "<br>- Gia tốc tức thời của vật là $a(t)=v'(t)=2t-2$.<br>  Gia tốc triệt tiêu khi $a(t)=0 \\Leftrightarrow t=1$. Tức là gia tốc triệt tiêu tại thời điểm $t=1$ giây.<br>  Vậy quãng đường vật đi được từ khi bắt đầu chuyển động đến khi gia tốc triệt tiêu là<br>  $s=\\displaystyle \\int \\limits_0^{1} (t^2-2t+1) \\mathrm{~d}t=\\dfrac{1}{3}$ m.<br>- Cho $v(t)=9 \\Leftrightarrow t=4$.<br>  Quãng đường vật đi được trong 2 giây tính đến thời điểm mà vận tốc đạt $9(\\mathrm{m} / \\mathrm{s})$ là<br>  $s=\\displaystyle \\int \\limits_4^{6} (t^2-2t+1) \\mathrm{~d}t=\\dfrac{98}{3}$ m.<br>- Quãng đường đi được của vật sau 2 giây kể từ khi vật bắt đầu chuyển động là<br>  $s=\\displaystyle \\int \\limits_0^{2} (t^2-2t+1) \\mathrm{~d}t=\\dfrac{2}{3}$ m.<br>- Cho $a(t)=10\\Leftrightarrow 2t-2=10 \\Leftrightarrow t=6$.<br>  Quãng đường vật đi được từ 0 giây đến thời điểm mà gia tốc bằng $10(\\mathrm{m} / \\mathrm{s}^2)$ là<br>  $s=\\displaystyle \\int \\limits_0^{6} (t^2-2t+1) \\mathrm{~d}t=42$ m.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS3",
    "question": "Cho đồ thị hàm số $y=x^3-2x^2-3x+4 \\quad (C)$ và đường thẳng $d \\colon y=2x-2$.<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS17_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đường thẳng $d$ cắt đồ thị $(C)$ tại ba điểm $A(-2;-6)$, $B(1;0)$, $C(3;4)$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị $(C)$, trục hoành, đường thẳng $x=-1$, $x=2$ bằng $\\dfrac{21}{4}$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị $(C)$ và đường thẳng $d$ bằng $\\dfrac{253}{12}$",
        "answer": false
      },
      {
        "text": "Biết đường thẳng $d$ cắt đồ thị $(C)$ thành hai miền $S_1$ và $S_2$. Tỉ số $\\dfrac{S_1}{S_2}=\\dfrac{63}{16}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có phương trình hoành độ giao điểm \\[x^3-2x^2-3x+4=2x-2 \\Leftrightarrow x^3-2x^2-5x+6=0 \\Leftrightarrow x=-2 \\text{ hoặc } x=1 \\text{ hoặc } x=3.\\]  Với $x=-2 \\Rightarrow y=-6$; với $x=1 \\Rightarrow y=0$; với $x=3 \\Rightarrow y=4$.<br>  Vậy đường thẳng $d$ cắt đồ thị $(C)$ tại ba điểm $A(-2;-6)$, $B(1;0)$ và $C(3;4)$.<br>- Diện tích cần tính là $S=\\displaystyle\\int\\limits_{-1}^2 |x^3-2x^2-3x+4| \\mathrm{\\,d}x=\\dfrac{97}{12}$.<br>- Hình phẳng cần tìm được giới hạn bởi các đường $y=f(x)=x^3-2x^2-3x+4 \\text{ và } y=g(x)=2x-2 \\text{ và } x=-2 \\text{ và } x=3.$<br>  Ta có $f(x)-g(x)=x^3-2x^2-5x+6$.<br>  Diện tích cần tính là \\[S=S_1+S_2=\\displaystyle\\int\\limits_{-2}^1 \\left| x^3-2x^2-5x+6 \\right|\\mathrm{d}x+\\displaystyle\\int\\limits_{1}^3 \\left| x^3-2x^2-5x+6 \\right|\\mathrm{d}x=\\dfrac{63}{4}+\\dfrac{16}{3}=\\dfrac{253}{12}.\\]<br>- Ta có $\\dfrac{S_1}{S_2}=\\dfrac{\\dfrac{63}{4}}{\\dfrac{16}{3}}=\\dfrac{189}{64}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS4",
    "question": "Cho hai hàm số $f(x)=ax^3+bx^2+cx-2$ và $g(x)=dx^2+ex+2$ ($a$, $b$, $c$, $d$, $e \\in \\mathbb{R}$). Biết rằng đồ thị của hai hàm số $y=f(x)$ và $y=g(x)$ cắt nhau tại ba điểm có hoành độ lần lượt là $-2$; $-1$; $1$ (tham khảo hình vẽ).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS23_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(x)-g(x)=0 \\Leftrightarrow ax^3 + (b-d)x^2 + (c-e)x - 4 = 0$",
        "answer": true
      },
      {
        "text": "$a$ là số thực dương",
        "answer": true
      },
      {
        "text": "Giá trị của $a = \\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "Hình phẳng giới hạn bởi hai đồ thị hàm số đã cho có diện tích bằng $\\dfrac{37}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Phương trình hoành độ giao điểm của đồ thị $f\\left( x \\right)$ và $g\\left( x \\right)$ là<br>  $a{x^3}+b{x^2}+cx-2=d{x^2}+3x+2\\Leftrightarrow ax^3+\\left( b-d \\right){x^2}+\\left( c-e \\right)x-4=0.\\left( * \\right)$<br>- <strong>Đúng</strong>.<br>  $a$ là số thực dương.<br>- <strong>Sai</strong>.<br>  Do đồ thị của hai hàm số cắt nhau tại ba điểm suy ra phương trình $\\left( * \\right)$ có ba nghiệm $x=-2$; $x=-1$; $x=1$.<br>  Ta được  $a{x^3}+\\left( b-d \\right){x^2}+\\left( c-e \\right)x-4=a\\left( x+2 \\right)\\left( x+1 \\right)\\left( x-1 \\right)$.<br>  Khi đó $-4=-2a\\Rightarrow a=2$.<br>- <strong>Đúng</strong>.<br>  Vậy diện tích hình phẳng cần tìm là $\\displaystyle\\int\\limits_{-2}^{1}{\\left| 2\\left( x+2 \\right)\\left( x+1 \\right)\\left( x-1 \\right) \\right|\\text{d}x=\\dfrac{37}{6}}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D433DS5",
    "question": "Một chiếc trống có dạng khối tròn xoay. Một mặt phẳng đi qua tâm của đáy và vuông góc với mặt phẳng đáy cắt khối tròn xoay là phần hình phẳng được tô đậm trong hình vẽ. Biết rằng hai đường cong thành bên lần lượt là một phần của đồ thị $y = f(x)$ và $y = g(x)$.  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS24_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(x) = -\\dfrac{1}{100}x^2 + 40$",
        "answer": true
      },
      {
        "text": "Diện tích của phần mặt cắt bằng $\\dfrac{16640}{3}\\text{ cm}^2$",
        "answer": true
      },
      {
        "text": "Thể tích của chiếc trống bằng $\\dfrac{293888\\pi}{3}\\text{ cm}^3$",
        "answer": true
      },
      {
        "text": "$g(x) = f(-x)$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS24_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $(H)$ là hình phẳng giới hạn bởi các đường   $y=f(x)$, trục hoành, trục tung và đường thẳng $x= 40$.  <br>- <strong>Đúng</strong>.<br>  Đường cong phía trên là một phần của parabol quay bề lõm xuống dưới, tọa độ đỉnh là $(0; 40)$ nên có phương trình $y=ax^2+40$.<br>  Vì parabol đi qua điểm $(40; 24)$ nên suy ra  $24=a\\cdot 40^2+40\\Rightarrow a=-\\dfrac{1}{100}$.<br>  Vậy $f(x) = -\\dfrac{1}{100}x^2 + 40$.<br>- <strong>Đúng</strong>.<br>  Mặt cắt là một hình đối xứng, diện tích mặt cắt này bằng $4$ lần diện tích hình phẳng $(H)$ nên diện tích mặt cắt bằng   $S = 4\\cdot S_H$<br>$= 4\\displaystyle \\int\\limits_0^{40} f(x) \\mathrm{\\,d}x$<br>$= 4 \\displaystyle \\int\\limits_0^{40} \\left(-\\dfrac{1}{100}x^2 + 40\\right) \\mathrm{\\,d}x$<br>$=4\\left(-\\dfrac{1}{300}x^3 + 40x\\right)\\Bigg|_0^{40}$<br>$= \\dfrac{16640}{3}.$<br>- <strong>Đúng</strong>.<br>  Thể tích của chiếc trống bằng $2$ lần thể tích vật thể tròn xoay giới hạn bởi hình phẳng $(H)$ khi nó quanh trục hoành  $V = 2\\pi \\displaystyle \\int\\limits_0^{40} [f(x)]^2 \\mathrm{\\,d}x$<br>$= 2\\pi \\displaystyle \\int\\limits_0^{40} \\left(-\\dfrac{1}{100}x^2 + 40\\right)^2 \\mathrm{\\,d}x$<br>$= 2\\pi \\displaystyle \\int\\limits_0^{40} \\left(\\dfrac{1}{10000}x^4 -\\dfrac{4}{5}x^2+ 1600\\right) \\mathrm{\\,d}x$<br>$=2\\pi \\left(\\dfrac{1}{50000}x^5 -\\dfrac{4}{15}x^3+ 1600x\\right)\\Bigg|_0^{40}$<br>$=\\dfrac{293888\\pi}{3}.$<br>- <strong>Sai</strong>.<br>   Do tính đối xứng của mặt cắt của trống nên ta có  \\[f(x) = -\\dfrac{1}{100}x^2 + 40 \\Rightarrow g(x) = \\dfrac{1}{100}x^2 -40.  \\]   Suy ra $g(x) \\neq f(-x)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS6",
    "question": "Cho hàm số $f(x) = x^3 - 3x^2 + 2x - 1$ và $F(x)$ là một nguyên hàm tùy ý của $f(x)$.",
    "subQuestions": [
      {
        "text": "Hàm số $y = \\dfrac{1}{4}x^4 - x^3 + x^2 - x$ là một nguyên hàm của hàm số $f(x)$",
        "answer": true
      },
      {
        "text": "$F'(x) = x^3 - 3x^2 + 2x - 1$",
        "answer": true
      },
      {
        "text": "Biết $F(0) = 1$. Khi đó $F(1) = \\dfrac{5}{4}$",
        "answer": false
      },
      {
        "text": "$F(x) = \\dfrac{1}{4}x^4 - x^3 + x^2 - x$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Nguyên hàm của $f(x)$ là $F(x) = \\dfrac{1}{4}x^4 - x^3 + x^2 - x + C$, với $C$ hằng số. <br>  Nên biểu thức đã cho là một nguyên hàm.<br>- <strong>Đúng</strong>.<br>  Vì $F(x)$ là nguyên hàm của $f(x)$ nên $F'(x) = f(x)$.<br>- <strong>Sai</strong>.<br>  Từ $F(0) = 1$, ta tìm được hằng số $C = 1$. Thay vào   \\[  F(1) = \\dfrac{1}{4} - 1 + 1 - 1 + 1 = \\dfrac{1}{4} \\neq \\dfrac{5}{4}.  \\]<br>- <strong>Sai</strong>.<br>  Vì thiếu hằng số $C$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS7",
    "question": "Cho hàm số $f(x) = \\begin{cases}   x^2 - x & \\text{khi} x \\le 0 \\\\  x & \\text{khi } x > 0  \\end{cases}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\displaystyle \\int\\limits_2^5 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_2^5 x\\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{-4}^{-2} f(x)\\mathrm{\\,d}x = 6$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_{-1}^{1} f(x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_1^3 f(x)\\mathrm{\\,d}x = \\dfrac{20}{3}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{-2}^{1} f(x)\\mathrm{\\,d}x = \\dfrac{31}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Vì $2 &gt; 0$ nên $f(x) = x$ trên đoạn $[2;5]$, do đó $\\displaystyle \\int\\limits_2^5 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_2^5 x\\mathrm{\\,d}x$.<br>- <strong>Sai</strong>.<br>  Với $x \\in [-4; -2]$, ta có $f(x) = x^2 - x$. Khi đó  \\[  \\displaystyle \\int\\limits_{-4}^{-2} f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_{-4}^{-2} (x^2 - x)\\mathrm{\\,d}x = \\left(\\dfrac{x^3}{3} - \\dfrac{x^2}{2}\\right)\\Bigg|_{-4}^{-2} = \\dfrac{74}{3}.  \\]<br>- <strong>Đúng</strong>.<br>  Ta có $f(x) = x^2 - x$ khi $x \\le 0$, $f(x) = x$ khi $x &gt; 0$. Khi đó  \\[  \\displaystyle \\int\\limits_{-1}^3 f(x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_1^3 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_{-1}^{0} (x^2 - x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_{0}^{1} x\\mathrm{\\,d}x + \\displaystyle \\int\\limits_1^3 x\\mathrm{\\,d}x = \\dfrac{20}{3}.  \\]<br>- <strong>Đúng</strong>.<br>  Tính $\\displaystyle \\int\\limits_{-2}^1 f(x)\\mathrm{\\,d}x = \\displaystyle \\int\\limits_{-2}^0 (x^2 - x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_0^1 x\\mathrm{\\,d}x = \\dfrac{14}{3} + \\dfrac{1}{2} = \\dfrac{31}{6}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS8",
    "question": "Trong không gian tọa độ $Oxyz$, cho hai điểm $A(1;0;1)$, $B(5;2;3)$ và mặt phẳng $(P)\\colon 2x - y + z - 4 = 0$.",
    "subQuestions": [
      {
        "text": "Mặt phẳng $(P)$ cắt trục $Ox$ tại điểm có hoành độ bằng $3$",
        "answer": false
      },
      {
        "text": "$d(A, (P)) &gt; d(B, (P))$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(Q)$ đi qua hai điểm $A$, $B$ và vuông góc với mặt phẳng $(P)$ có phương trình là $x - 2z + 1 = 0$",
        "answer": true
      },
      {
        "text": "Mặt phẳng trung trực của đoạn thẳng $AB$ có phương trình là $2x + y + z - 9 = 0$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Giao điểm của mặt phẳng $(P)$ với trục $Ox$ là khi $y = z = 0$, suy ra $2x = 4 \\Rightarrow x = 2$.<br>- <strong>Sai</strong>.<br>  Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ là  \\[  d(A, P) = \\dfrac{|2\\cdot1 - 0 + 1 - 4|}{\\sqrt{2^2 + (-1)^2 + 1^2}} = \\dfrac{1}{\\sqrt{6}}.  \\]  Khoảng cách từ điểm $B$ đến mặt phẳng $(P)$ là  \\[d(B, P) = \\dfrac{|2\\cdot5 - 2 + 3 - 4|}{\\sqrt{6}} = \\dfrac{7}{\\sqrt{6}}.  \\]  Ta có $d(A, P) &lt; d(B, P)$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{AB} = (4;2;2)$, vectơ pháp tuyến của $(P)$ là $\\overrightarrow{n} = (2; -1; 1)$.<br>  Mặt phẳng $(Q)$ đi qua $A$, $B$ và vuông góc với $(P)$ nên nhận $\\overrightarrow{n}_Q = \\left[\\overrightarrow{AB}, \\overrightarrow{n}\\right]=(4;0;-8)$ là vectơ pháp tuyến.<br>  Phương trình mặt phẳng $(Q)$ là   \\[4(x-1)+0(y-0) -8(z-1)=0 \\enspace \\text{hay} \\enspace x-2z+1=0.  \\]<br>- <strong>Đúng</strong>.<br>  Gọi $M$ là trung điểm của đoạn thẳng $AB$, khi đó $M = \\left(\\dfrac{6}{2}; \\dfrac{2}{2}; \\dfrac{4}{2}\\right) = (3;1;2)$.<br>  Ta có $\\overrightarrow{AB} = (4;2;2)$.<br>  Mặt phẳng trung trực $(Q)$ của đoạn thẳng $AB$ đi qua điểm $M$ và vuông góc với $AB$ nên có vectơ pháp tuyến là $\\overrightarrow{AB}$. <br>  Phương trình của $(Q)$ là  \\[  4(x-3)+2(y-1)+2(z-2)=0 \\enspace \\text{hay} \\enspace 2x + y + z - 9 = 0.  \\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS9",
    "question": "Cho hàm số $y=5x-x^2$ có đồ thị $(P)$ và đường thẳng $d\\colon y=x$.",
    "subQuestions": [
      {
        "text": "$(P)$ và $d$ có một điểm chung",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi parabol $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ bằng $\\dfrac{71}{3}$",
        "answer": true
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi parabol $(P)$, đường thẳng $d$ và hai đường thẳng $x=0$, $x=4$ bằng $\\dfrac{32}{3}$",
        "answer": true
      },
      {
        "text": "Thể tích của khối tròn xoay khi cho hình phẳng giới hạn bởi $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ quay quanh trục $Ox$ bằng $115$",
        "answer": false
      }
    ],
    "explain": "<br>- Phương trình hoành độ giao điểm của $(P)$ và $d$ là  \\[5x-x^2=x\\Leftrightarrow x^2-4x=0\\Leftrightarrow x=0 \\text{ hoặc } x=4.\\]  Vậy $d$ cắt $(P)$ tại hai điểm phân biệt.<br>- Diện tích hình phẳng giới hạn bởi parabol $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ là  \\[S=\\displaystyle\\int\\limits_0^6\\left|5x-x^2\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_0^5\\left(5x-x^2\\right)\\mathrm{d}x-\\displaystyle\\int\\limits_5^6\\left(5x-x^2\\right)\\mathrm{d}x=\\dfrac{125}{6}+\\dfrac{17}{6}=\\dfrac{71}{3}.\\]<br>- Diện tích hình phẳng giới hạn bởi parabol $(P)$, đường thẳng $d$ và hai đường thẳng $x=0$, $x=4$ là  \\[S=\\displaystyle\\int\\limits_0^4\\left|5x-x^2-x\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_0^4\\left|4x-x^2\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_0^4\\left(4x-x^2\\right)\\mathrm{d}x=\\dfrac{32}{3}.\\]<br>- Thể tích của khối tròn xoay khi cho hình phẳng giới hạn bởi $(P)$, trục $Ox$ và hai đường thẳng $x=0$, $x=6$ là  \\[V=\\pi\\displaystyle\\int\\limits_0^6\\left(5x-x^2\\right)^2\\mathrm{\\,d}x=\\pi\\displaystyle\\int\\limits_0^6\\left(x^4-10x^3+25x^2\\right)\\mathrm{d}x=\\dfrac{576\\pi}{5}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS10",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $f'(x)=2-5\\sin x$ và $f(0)=10$.",
    "subQuestions": [
      {
        "text": "$f(\\pi) = 2\\pi$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int f'(x)\\mathrm{\\,d}x=2x-5\\cos x+C$, với $C$ là hằng số",
        "answer": false
      },
      {
        "text": "$f(x)=2x+5\\cos x+5$",
        "answer": true
      },
      {
        "text": "Diện tích $S$ của hình phẳng $(H)$ giới hạn bởi các đường cong $y=f(x)$; $y=g(x)=5\\cos x+9$ và trục tung bằng $4$",
        "answer": true
      }
    ],
    "explain": "Ta có $f(x)=\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int \\left(2-5\\sin x\\right)\\mathrm{\\,d}x=2x+5\\cos x+C$.<br>  $f(0) = 10\\Leftrightarrow 2\\cdot0+5\\cos0+C=10\\Leftrightarrow C=5$.<br>  Suy ra $f(x)=2x+5\\cos x+5$.<br>  $f(\\pi) = 2\\pi$  <br>- Vì $f(\\pi)=2\\pi+5\\cos \\pi+5=2\\pi$.<br>- Vì $\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int \\left(2-5\\sin x\\right)\\mathrm{\\,d}x=2x+5\\cos x+C$.<br>- Ta có $f(x)=2x+5\\cos x+5$.<br>- Phương tình hoành độ giao điểm của $f(x)$ và $g(x)$ là  $2x+5\\cos x+5=5\\cos x+9\\Leftarrow x=2.$  Do đó diện tích hình $(H)$ được tính bởi   $S=\\displaystyle\\int\\limits_2^4 \\left|\\left(2x+5\\cos x+5\\right)-\\left(5\\cos x+9\\right)\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_2^4 \\left|2x-4\\right|\\mathrm{d}x=\\displaystyle\\int\\limits_2^4 \\left(2x-4\\right)\\mathrm{d}x=4.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS11",
    "question": "Cho hàm số $f(x)=x^2-2x$ có đồ thị là $(C)$ và đường thẳng $d\\colon y=x$.",
    "subQuestions": [
      {
        "text": "Tích phân $\\displaystyle\\int_0^1f(x){\\,d}x$ bằng $-\\dfrac{2}{3}$",
        "answer": true
      },
      {
        "text": "Hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=1$, $x=2$ có diện tích bằng $\\dfrac{4}{3}$",
        "answer": false
      },
      {
        "text": "Hình phẳng giới hạn bởi $(C)$ và $d$ có diện tích bằng $\\dfrac{9}{2}$",
        "answer": true
      },
      {
        "text": "Gọi $(H)$ là hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=0$, $x=1$. Khối tròn xoay thu được khi cho $(H)$ quay quanh trục hoành có thể tích bằng $\\dfrac{8\\pi}{15}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_0^1f(x){\\,d}x=\\displaystyle\\int_0^1 (x^2-2x){\\,d}x=-\\dfrac{2}{3}$.<br>- <strong>Sai</strong>.<br>  Diện tích hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=1$, $x=2$ là $\\displaystyle\\int_1^2|x^2-2x|{\\,d}x=\\dfrac{2}{3}$.<br>- <strong>Đúng</strong>.<br>  Xét $x^2-2x=x \\Leftrightarrow x^2 -3x=0 \\Leftrightarrow x=0 \\text{ hoặc } x=3. $<br>  Diện tích hình phẳng giới hạn bởi $(C)$ và $d$ là   $\\displaystyle\\int_0^3|(x^2-2x)-x|{\\,d}x=\\dfrac{9}{2}$.<br>- <strong>Đúng</strong>.<br>  Thể tích khối tròn xoay thu được khi cho $(H)$ quay quanh trục hoành là $V=\\pi \\displaystyle\\int_0^1 (x^2-2x)^2 {\\,d}x=\\dfrac{8\\pi}{15}.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS12",
    "question": "Cho hai hàm số $f(x) = x\\sqrt{x} + 8$, $g(x) = 5^x - e^x$ và $F(x)$ là một nguyên hàm của $f(x)$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle \\int \\limits g\\left( x \\right)\\,\\mathrm{d}x = 5^x \\ln 5 - e^x + C$",
        "answer": false
      },
      {
        "text": "$\\displaystyle \\int\\limits_{1}^{3} f\\left( x \\right)\\,\\mathrm{d}x = F\\left( 3 \\right) - F\\left( 1 \\right)$",
        "answer": true
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = g\\left( x \\right)$, trục $Ox$ và các đường thẳng $x = 1$, $x = 2$ bằng $7{,}8$ (làm tròn đến hàng phần chục)",
        "answer": true
      },
      {
        "text": "Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục $Ox$, $x = 0$, $x = 3$ quanh trục $Ox$ bằng $312$ (làm tròn đến hàng đơn vị)",
        "answer": false
      }
    ],
    "explain": "<br>- $\\displaystyle \\int \\limits g\\left( x \\right)\\,\\mathrm{d}x = \\dfrac{5^x}{\\ln 5} - e^x + C$.<br>- $\\displaystyle \\int\\limits_{1}^{3} f\\left( x \\right)\\,\\mathrm{d}x = F\\left( 3 \\right) - F\\left( 1 \\right)$.<br>- Diện tích hình phẳng cần tìm là $S=\\displaystyle \\int\\limits_{1}^{2} \\left| 5^x -e^x \\right|\\,\\mathrm{d}x = 7{,}8$.<br>- Thể tích khối tròn xoay cần tìm là $V=\\pi \\displaystyle \\int\\limits_{0}^{3}\\left(x\\sqrt{x} + 8\\right)^2\\,\\mathrm{d}x=980.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS13",
    "question": "Trên đường quốc lộ, một ô tô đang di chuyển với vận tốc $45$ km/h. Cùng lúc, một đoàn tàu chạy song song với đường quốc lộ với vận tốc $60$ km/h. Khi ô tô cách đuôi tàu $100$ m thì ô tô bắt đầu tăng tốc với vận tốc $v(t)=2{,}5t+b$ (m/s) với $t$ là thời gian kể từ lúc ô tô bắt đầu tăng tốc. Khi đạt đến tốc độ tối đa cho phép là $90$ km/h thì ô tô giữ nguyên vận tốc.",
    "subQuestions": [
      {
        "text": "Giá trị của $b$ bằng $12{,}5$",
        "answer": true
      },
      {
        "text": "Thời gian ô tô đạt vận tốc tối đa cho phép là $5$ giây",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa ô tô và đuôi tàu sau $3$ giây là $51{,}25$ m",
        "answer": false
      },
      {
        "text": "Thời gian ô tô bắt kịp đuôi tàu kể từ lúc ô tô bắt đầu tăng tốc là $15{,}75$ giây",
        "answer": true
      }
    ],
    "explain": "Đổi đơn vị: $45$ km/h $=12{,}5$ m/s, $60$ km/h $=\\dfrac{50}{3}$ m/s, $90$ km/h $=25$ m/s.  <br>- Ta có $v(0)$ là vận tốc của ô tô lúc bắt đầu tăng tốc, vậy $v(0)=b=12{,}5$.<br>- Hàm số biểu thị vận tốc của ô tô là $v=2{,}5t+12{,}5$. <br>  Khi ô tô đạt vận tốc tối đa cho phép là $25$ m/s, ta có phương trình  $2{,}5t+12{,}5=25\\Leftrightarrow t=5.$  Vậy ô tô đạt vận tốc tối đa cho phép sau $5$ giây.<br>- Sau $3$ giây thì ô tô đi được $\\displaystyle\\int\\limits_{0}^{3} \\left(2{,}5t+12{,}5\\right)\\mathrm{\\,d}t=48{,}75$ m. <br>  Sau $3$ giây thì tàu đi được $\\dfrac{50}{3}\\cdot 3=50$ m. <br>  Vậy sau $3$ giây thì ô tô cách tàu một quãng là $100+(50-48{,}75)=101{,}25$ mét.<br>- Sau $5$ giây ô tô đi được $\\displaystyle\\int\\limits_{0}^{5} (2{,}5t+12{,}5)\\mathrm{\\,d}t=93{,}75$ m. <br>  Sau $5$ giây tàu đi được $\\dfrac{50}{3}\\cdot 5=\\dfrac{250}{3}$ m. <br>  Vậy khoảng cách giữa ô tô và tàu sau $5$ giây là $100+\\left(\\dfrac{250}{3}-93{,}75\\right)=\\dfrac{1075}{12}$ (m). <br>  Vì sau $5$ giây thì cả ô tô và tàu đều chuyển động thẳng đều và ô tô đi nhanh hơn, nên thời gian để ô tô bắt kịp đuôi tàu là $\\dfrac{1075}{12}:\\left(25-\\dfrac{50}{3}\\right)=10{,}75$ (giây). <br>  Vậy tổng thời gian ô tô cần để bắt kịp đuôi tàu kể từ lúc bắt đầu tăng tốc là $15{,}75$ (giây).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D435DS14",
    "question": "Một kiến trúc sư đang thiết kế mái vòm cong cho một trung tâm triển lãm nghệ thuật. Mặt cắt đứng của mái vòm có hình dáng nửa trên của một hinhg Elip. Hình elip này có trục lớn nằm ngang. Chiều rộng của mái vòm (theo phương ngang) là $20$ mét và chiều cao tối đa của mái vòm (từ đáy đến đỉnh vòm) là $8$ mét.  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS36_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Nếu ta đặt gốc tọa độ tại tâm hình elip thì phương trình hình elip là $\\dfrac{x^2}{100}+\\dfrac{y^2}{64}=1$",
        "answer": true
      },
      {
        "text": "Diện tích của mặt cắt đứng của mái vòm (phần hình elip) bằng $40{,}6\\pi$ ($\\text{m}^2$)",
        "answer": false
      },
      {
        "text": "Thể tích không gian bên trong mái vòm (khi ta tưởng tượng mái vòm kéo dài theo chiều sâu và tạo thành một không gian ba chiều) được tạo ra bằng cách quay nửa hình elip quanh trục nằm ngang bằng $\\dfrac{1380\\pi}{2}\\ (\\text{m}^3)$",
        "answer": false
      },
      {
        "text": "Nếu kiến trúc sư muốn làm cho mái vòm cao hơn bằng cách tăng chiều cao lên $10$ mét (thay vì $8$ mét) nhưng vẫn giữ nguyên chiều rộng $20$ mét thì cả diện tích mặt cắt đứng và thể tích không gian bên trong mái vòm sẽ tăng lên theo cùng một tỉ lệ",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Chiều rộng mái vòm là $20$ mét suy ra $2a=20\\Leftrightarrow a=10\\Rightarrow a^2=100$.<br>  Chiều cao tối đa của mái vòm là $8$ mét, suy ra $b=8\\Rightarrow b^2=64$.<br>  Vậy phương trình elip là $\\dfrac{x^2}{100}+\\dfrac{y^2}{64}=1$.<br>- <strong>Sai</strong>. Ta có $  \\dfrac{x^2}{100}+\\dfrac{y^2}{64}=1\\Leftrightarrow y=\\pm \\sqrt{64\\left(1-\\dfrac{x^2}{100}\\right)}=\\pm 8 \\sqrt{ 1-\\dfrac{x^2}{100}}=\\pm \\dfrac{4}{5}\\sqrt{100-x^2}$.<br>  Diện tích mặt cắt đứng mái vòm là   $ S=\\displaystyle \\int\\limits_{-10}^{10}\\dfrac{4}{5}\\sqrt{100-x^2}\\mathrm{\\,d }x=\\dfrac{4}{5}\\displaystyle \\int\\limits_{-10}^{10}\\sqrt{100-x^2}\\mathrm{\\,d }x=\\dfrac{4}{5}\\cdot 50\\pi=40\\pi.$  Hoặc dùng công thức diện tích diện tích nửa elip (giới thiệu thêm - không khuyến khích dùng)  $S=\\dfrac{1}{2}\\pi \\cdot a\\cdot b=\\dfrac{1}{2}\\cdot \\pi\\cdot 10\\cdot 8=40\\pi\\text{ m}^2.$<br>- <strong>Sai</strong>. Thể tích không gian bên trong mái vòm là  $V = \\dfrac{1}{2}\\pi\\displaystyle \\int\\limits_{-10}^{10}\\left(\\dfrac{4}{5}\\sqrt{100-x^2}\\right)^2\\mathrm{\\,d}x  = \\dfrac{1}{2}\\pi \\displaystyle \\int\\limits_{-10}^{10}\\dfrac{16}{25}\\left(100-x^2\\right)\\mathrm{\\,d}x$<br>$= \\dfrac{1}{2}\\cdot \\dfrac{16\\pi}{25}\\cdot \\dfrac{4000}{3}=   \\dfrac{1280\\pi}{3}\\text{ m}^3.$   Hoặc có thể sử dụng công thức (giới thiệu thêm - không khuyến khích dùng)  $V=\\dfrac{1}{2}\\cdot \\dfrac{4}{3}\\pi\\cdot a\\cdot b^2=\\dfrac{1}{2}\\cdot \\dfrac{4}{3}\\pi\\cdot 10\\cdot 8^2=\\dfrac{1280\\pi}{3}\\text{ m}^3$.<br>- <strong>Sai</strong>. Nếu tăng trục chiều cao thành $10$ m thì nửa elip trở thành nửa hình tròn.<br>  Do đó, diện tích mặt cắt lúc sau là $S'=\\dfrac{1}{2}\\pi R^2=50\\pi$. <br>  Tỉ lệ diện tích tăng lên là $\\dfrac{S'}{S}=\\dfrac{5}{4}$.<br>  Thể tích vòm lúc sau là nửa hình cầu và bằng $V'=\\dfrac{1}{2}\\cdot\\dfrac{4}{3}\\pi R^3=\\dfrac{2000\\pi}{3}$.<br>  Tỉ lệ thể tích tăng lên là $\\dfrac{V'}{V}=\\dfrac{25}{16}$.<br>  Do đó tỉ lệ diện tích mặt cắt đứng và thể tích tăng lên theo hai tỉ lệ khác nhau.<br>  Ghi chú: Nếu tăng chiều rộng lên (chẳng hạn từ $20$m thành $25$m) thì tỷ lệ diện tích mặt cắt đứng và thể tích vòm sẽ tăng lên theo cùng một tỉ lệ (Học sinh tự kiểm chứng, xem như bài tập).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D436DS1",
    "question": "Một người điều khiển ô tô đang ở đường dẫn muốn nhập làn vào đường cao tốc. Khi ô tô cách điểm nhập làn $200$ m, tốc độ của ô tô là $36$ km/h. Hai giây sau đó, ô tô bắt đầu tăng tốc với vận tốc $v(t)=at+b$ $(a,b\\in\\mathbb{R}, a>0)$, trong đó $t$ là thời gian tính bằng giây kể từ khi bắt đầu tăng tốc. Biết rằng ô tô nhập làn cao tốc sau $12$ giây và duy trì sự tăng tốc trong $24$ giây kể từ khi bắt đầu tăng tốc. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Quãng đường ô tô đi được từ khi bắt đầu tăng tốc đến khi nhập làn là $180$ m",
        "answer": true
      },
      {
        "text": "Giá trị của $b$ là $10$",
        "answer": true
      },
      {
        "text": "Quãng đường $S(t)$ (đơn vị: mét) mà ô tô đi được trong thời gian $t$ giây $(0\\le t\\le 24)$ kể từ khi tăng tốc được tính theo công thức $S(t)=\\displaystyle\\int\\limits_0^{24}v(t)\\,\\mathrm{d}t$",
        "answer": false
      },
      {
        "text": "Sau $24$ giây kể từ khi tăng tốc, tốc độ của ô tô không vượt quá tốc độ tối đa cho phép là $100$ km/h",
        "answer": false
      }
    ],
    "explain": "<br>- Tốc độ $36$ km/h $=10$ m/s. Trong $2$ giây trước khi tăng tốc, ô tô đi được $10\\cdot 2=20$ m. Vậy quãng đường còn lại từ lúc bắt đầu tăng tốc đến khi nhập làn là $200-20=180$ m. Suy ra mệnh đề đúng.<br>- Tại thời điểm bắt đầu tăng tốc ($t=0$), vận tốc phải bằng vận tốc trước đó (tính liên tục) là $10$ m/s, tức $v(0)=b=10$. Suy ra mệnh đề đúng.<br>- Vì ô tô nhập làn sau $12$ giây kể từ khi tăng tốc nên $\\displaystyle\\int_0^{12}v(t)\\,\\mathrm{d}t=180\\Leftrightarrow \\int_0^{12}(at+10)\\,\\mathrm{d}t=180\\Leftrightarrow 72a+120=180\\Leftrightarrow a=\\dfrac{5}{6}$. Vậy $v(t)=\\dfrac{5}{6}t+10$.<br>- Quãng đường đi được tính từ lúc bắt đầu tăng tốc đến thời điểm $t$ bất kì phải là $S(t)=\\displaystyle\\int_0^{t}v(x)\\,\\mathrm{d}x$ (cận trên thay đổi theo $t$), không phải $\\displaystyle\\int_0^{24}v(t)\\,\\mathrm{d}t$ (một hằng số cố định, không phụ thuộc $t$). Suy ra mệnh đề sai.<br>- Sau $24$ giây, tốc độ ô tô là $v(24)=\\dfrac{5}{6}\\cdot 24+10=30$ m/s $=30\\cdot 3{,}6=108$ km/h, vượt quá tốc độ tối đa cho phép $100$ km/h. Suy ra mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS15",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có đồ thị như hình vẽ. Gọi $(H)$ là hình phẳng được giới hạn bởi đồ thị $y=f(x)$ và trục $Ox$.<br><br><img src=\"data/12/2D4/im2D43/2D43_ex12_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hệ số $a$ dương",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(-\\infty;4)$",
        "answer": false
      },
      {
        "text": "Phương trình $f'(x)=0$ có hai nghiệm là $x=0$ và $x=2$",
        "answer": true
      },
      {
        "text": "Diện tích hình $(H)$ là $\\dfrac{27}{4}$",
        "answer": true
      }
    ],
    "explain": "Từ đồ thị ta thấy hàm số đạt cực đại tại điểm có tọa độ $(0;4)$ và cực tiểu tại điểm có tọa độ $(2;0)$. Đồ thị cắt trục hoành tại $x=-1$ và tiếp xúc với trục hoành tại $x=2$.<br> Do đó ta có thể giả sử phương trình của hàm số là $f(x) = a(x+1)(x-2)^2$.<br> Vì đồ thị đi qua $(0;4)$ nên ta thay $x=0$, $y=4$ vào phương trình: \\[4 = a\\cdot 1\\cdot(-2)^2 \\Rightarrow 4a = 4 \\Rightarrow a=1.\\] Vậy hàm số là $f(x) = (x+1)(x-2)^2 = x^3 - 3x^2 + 4$.<br>- <strong>Đúng</strong>.<br>  Vì $a=1 &gt; 0$.<br>- <strong>Sai</strong>.<br>  Dựa vào đồ thị, hàm số chỉ đồng biến trên các khoảng $(-\\infty; 0)$ và $(2; +\\infty)$.<br>- <strong>Đúng</strong>.<br>  Hàm số đạt cực trị tại $x=0$ và $x=2$ nên phương trình $f'(x) = 0$ có hai nghiệm là $x=0$ và $x=2$.<br>- <strong>Đúng</strong>.<br>  Diện tích hình $(H)$ là \\[ S = \\displaystyle\\int\\limits_{-1}^2 \\left|x^3 - 3x^2 + 4\\right| \\mathrm{\\,d}x = \\displaystyle\\int\\limits_{-1}^2 (x^3 - 3x^2 + 4) \\mathrm{\\,d}x = \\left( \\dfrac{x^4}{4} - x^3 + 4x \\right) \\Bigg|_{-1}^2 = 4 - \\left(-\\dfrac{11}{4}\\right) = \\dfrac{27}{4}. \\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS16",
    "question": "Cho hàm số $f(x)=2x^3-3x^2+1$.",
    "subQuestions": [
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số đã cho, trục hoành và hai đường thẳng $x=0$, $x=2$ bằng $2$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho có một nguyên hàm là hàm số $G(x)=\\dfrac{x^4}{2}-x^3+x$",
        "answer": true
      },
      {
        "text": "$F(x)$ là một nguyên hàm của hàm số đã cho thoả mãn $F(2)=2$, khi đó $F(-1)=\\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "Với $a\\in [-1; 2]$, hàm số $H(a)=\\displaystyle\\int\\limits_{-1}^a f(x) \\mathrm{\\,d}x$ đạt giá trị lớn nhất tại $a=1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có phương trình hoành độ giao điểm của đồ thị hàm số $y=f(x)$ và trục hoành \\[2x^3-3x^2+1=0\\Leftrightarrow (x-1)^2(2x+1)=0.\\] Trên đoạn $[0; 2]$, hàm số $f(x)\\ge 0$ (chỉ bằng $0$ tại $x=1$).<br> Diện tích hình phẳng cần tìm là \\[S = \\displaystyle\\int\\limits_0^2 \\left|f(x)\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^2 \\left(2x^3 - 3x^2 + 1\\right)\\mathrm{\\,d}x = \\left( \\dfrac{x^4}{2}-x^3+x\\right)\\Bigg|_0^2=(8-8+2)-0=2.\\]<br>- <strong>Đúng</strong>.<br>  Ta có họ nguyên hàm của hàm số $f(x)$ là \\[\\displaystyle\\int f(x)\\mathrm{\\,d}x =\\displaystyle\\int \\left(2x^3-3x^2+1\\right)\\mathrm{\\,d}x=\\dfrac{x^4}{2}-x^3+x+C.\\] Chọn hằng số $C=0$, ta được một nguyên hàm là $G(x)=\\dfrac{x^4}{2}-x^3+x$.<br>- <strong>Đúng</strong>.<br>  Từ câu trên, ta có $F(x)=\\dfrac{x^4}{2}-x^3+x+C$.<br> Theo giả thiết $F(2)=2$, ta có \\[\\dfrac{2^4}{2}-2^3+2+C=2\\Leftrightarrow 2+C=2\\Leftrightarrow C=0.\\] Do đó $F(x)=\\dfrac{x^4}{2}-x^3+x$.<br> Suy ra $F(-1)=\\dfrac{(-1)^4}{2}-(-1)^3+(-1)=\\dfrac{1}{2}+1-1=\\dfrac{1}{2}$.<br>- <strong>Sai</strong>.<br>  Ta có \\[H'(a)=f(a)=2a^3-3a^2+1=(a-1)^2(2a+1).\\] Cho $H'(a)=0\\Leftrightarrow \\left[\\begin{aligned}&a = 1 \\\\ &a=-\\dfrac{1}{2}.\\end{aligned}\\right.$<br> Vì $(a-1)^2 \\ge 0$ nên dấu của $H'(a)$ phụ thuộc vào dấu của $2a+1$.<br> Trên đoạn $[-1; 2]$, ta có<br><br>- $H'(a)&lt;0$ khi $a \\in \\left[-1; -\\dfrac{1}{2}\\right)$.<br><br>- $H'(a) &gt; 0$ khi $a \\in \\left(-\\dfrac{1}{2}; 2\\right] \\setminus \\{1\\}$.<br>Do đó, hàm số $H(a)$ nghịch biến trên đoạn $\\left[-1; -\\dfrac{1}{2}\\right]$ và đồng biến trên đoạn $\\left[-\\dfrac{1}{2}; 2\\right]$.<br> Suy ra giá trị lớn nhất của $H(a)$ trên đoạn $[-1; 2]$ sẽ đạt được tại một trong hai đầu mút $a=-1$ hoặc $a=2$.<br> Mà $H(a)$ đồng biến, liên tục tại $a=2$ nên giá trị lớn nhất tại $a=2$, không phải tại $a=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS17",
    "question": "Gọi $S$ là diện tích của hình phẳng giới hạn bởi đồ thị $(C)$ của hàm số $y=f\\left( x \\right)=ax^3+bx^2+c$, các đường thẳng $x=-1$, $x=2$ và trục hoành (miền gạch chéo trong hình vẽ bên)<br><img src=\"data/12/2D4/im2D43/2D43_ex12_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Từ hình vẽ, ta có $c=1$",
        "answer": false
      },
      {
        "text": "Giá trị của biểu thức $a+b+c$ là $2$",
        "answer": true
      },
      {
        "text": "Giá trị của $S$ bằng $\\dfrac{51}{8}$",
        "answer": true
      },
      {
        "text": "Dịch chuyển đồ thị $(C)$ lên theo phương $Oy$. Gọi $S'$ là diện tích hình phẳng giới hạn bởi đồ thị $(C)$ sau khi đã dịch chuyển, trục $Ox$ và các đường thẳng $x=-1$, $x=2$. Để $S'=15$ thì ta phải dịch chuyển đồ thị $(C)$ lên trên một đoạn lớn hơn $3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Từ hình vẽ, ta thấy đồ thị hàm số cắt trục tung tại điểm $\\left( 0;3 \\right)$ nên $c=3$.<br>- <strong>Đúng</strong>.<br>  Đồ thị hàm số đi qua ba điểm $\\left( 0;3 \\right)$, $\\left( -1;1 \\right)$ và $\\left( 2;1 \\right)$ nên ta có hệ phương trình<br><br>$ \\begin{cases}&c=3 \\\\&-a+b+c=1 \\\\& 8a+4b+c=1\\end{cases} \\Rightarrow \\begin{cases}&a=\\dfrac{1}{2} \\\\&b=-\\dfrac{3}{2} \\\\& c=3.\\end{cases}$<br>Suy ra $a+b+c=\\dfrac{1}{2}+\\left( -\\dfrac{3}{2} \\right)+3=2$.<br>- <strong>Đúng</strong>.<br>  Với $a=\\dfrac{1}{2}$, $b=-\\dfrac{3}{2}$ và $c=3$ suy ra $y=f\\left( x \\right)=\\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3$.<br> Diện tích hình phẳng giới hạn bởi $y=f\\left( x \\right)$, trục $Ox$ và $x=-1$, $x=2$ là<br>$S=\\displaystyle\\int\\limits_{-1}^2{\\left| \\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3 \\right|\\mathrm{\\,d}x}=\\displaystyle\\int\\limits_{-1}^2{\\left( \\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3 \\right)\\mathrm{\\,d}x}=\\dfrac{51}{8}$.<br>- <strong>Sai</strong>.<br>  Giả sử dịch chuyển đồ thị $(C)$ lên theo phương $Oy$ một khoảng là $k$ $\\left( k&gt;0 \\right)$ đơn vị, khi đó $y=f\\left( x \\right)=\\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3+k$.<br> Diện tích hình phẳng giới hạn bởi $y=f\\left( x \\right)=\\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3+k$, trục $Ox$ và $x=-1$, $x=2$ là $$S'=\\displaystyle\\int\\limits_{-1}^2{\\left| \\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3+k \\right|\\mathrm{\\,d}x}$$ Do hàm số $y=f\\left( x \\right)=\\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3+k&gt;0$, $\\forall x\\in \\left[ -1;2 \\right]$ nên $$\\begin{aligned} S'&=\\displaystyle\\int\\limits_{-1}^2\\left(\\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3+k \\right)\\mathrm{\\,d}x\\\\ &=\\displaystyle\\int\\limits_{-1}^2{\\left( \\dfrac{1}{2}x^3-\\dfrac{3}{2}x^2+3 \\right)\\mathrm{\\,d}x}+\\displaystyle\\int\\limits_{-1}^2{k\\mathrm{\\,d}x}\\\\ &=S+\\left(kx\\right)\\Big|_{-1}^2=\\dfrac{51}{8}+2k+k=\\dfrac{51}{8}+3k. \\end{aligned}$$ Để $S'=15$ thì $\\dfrac{51}{8}+3k=15\\Rightarrow 3k=\\dfrac{69}{8}\\Rightarrow k=\\dfrac{23}{8}$.<br> Vậy phải dịch chuyển đồ thị $(C)$ lên một đoạn $\\dfrac{23}{8}$ đơn vị.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS18",
    "question": "Cho hàm số $f(x)=x^2+2x$, $g(x)=3$.",
    "subQuestions": [
      {
        "text": "Thể tích của khối tròn xoay khi cho hình phẳng $H$ giới hạn bởi $y=f(x)$, trục hoành quay xung quanh trục hoành là $V=\\pi\\displaystyle\\int\\limits_0^2(x^2+2x)^2\\mathrm{\\,d}x$ (đơn vị thể tích)",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng $S$ giới hạn bởi $y=f(x)$, trục hoành và hai đường thẳng $x=1$, $x=2$ là $S=\\displaystyle\\int\\limits_1^2(x^2+2x)\\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi $y=f(x)$, $y=g(x)$ là $\\dfrac{32}{3}$ (đơn vị diện tích)",
        "answer": true
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi $y=f(x)$, trục hoành là $\\dfrac{5}{3}$ (đơn vị diện tích)",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Phương trình hoành độ giao điểm của đồ thị hàm số $y=f(x)$ và trục hoành là \\[x^2+2x=0 \\Leftrightarrow \\left[\\begin{aligned}&x=0\\\\&x=-2\\end{aligned}\\right..\\] Thể tích khối tròn xoay cần tìm là $V=\\pi\\displaystyle\\int\\limits_{-2}^0 (x^2+2x)^2\\mathrm{\\,d}x$.<br>- <strong>Đúng</strong>.<br>  Vì trên đoạn $[1;2]$ ta có $x^2+2x &gt; 0$ nên diện tích hình phẳng cần tìm là \\[S=\\displaystyle\\int\\limits_1^2 \\left|x^2+2x\\right|\\mathrm{\\,d}x = \\displaystyle\\int\\limits_1^2(x^2+2x)\\mathrm{\\,d}x.\\]<br>- <strong>Đúng</strong>.<br>  Phương trình hoành độ giao điểm của hai đồ thị hàm số là \\[x^2+2x=3 \\Leftrightarrow x^2+2x-3=0 \\Leftrightarrow \\left[\\begin{aligned}&x=1\\\\&x=-3\\end{aligned}\\right..\\] Diện tích hình phẳng cần tìm là \\[S = \\displaystyle\\int\\limits_{-3}^1 \\left|x^2+2x-3\\right|\\mathrm{\\,d}x = \\left| \\left(\\dfrac{x^3}{3}+x^2-3x\\right)\\Bigg|_{-3}^1 \\right| = \\left| -\\dfrac{5}{3} - 9 \\right| = \\dfrac{32}{3}.\\]<br>- <strong>Sai</strong>.<br>  Phương trình hoành độ giao điểm của đồ thị hàm số $y=f(x)$ và trục hoành là \\[x^2+2x=0 \\Leftrightarrow \\left[\\begin{aligned}&x=0\\\\&x=-2\\end{aligned}\\right..\\] Diện tích hình phẳng cần tìm là \\[S = \\displaystyle\\int\\limits_{-2}^0 \\left|x^2+2x\\right|\\mathrm{\\,d}x = \\left| \\left(\\dfrac{x^3}{3}+x^2\\right)\\Bigg|_{-2}^0 \\right| = \\left| 0 - \\left(-\\dfrac{8}{3}+4\\right) \\right| = \\dfrac{4}{3}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS19",
    "question": "Cho $(P)\\colon y = x(1 - x)$ và $(C)\\colon y = x^3 - x$.",
    "subQuestions": [
      {
        "text": "Phương trình hoành độ giao điểm của $(P)$ và $(C)$ là $x^3+x^2-2x=0$",
        "answer": true
      },
      {
        "text": "Tập nghiệm của phương trình $x^3 + x^2 - 2x=0$ là $\\{0; 1\\}$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi $(P)$ và $(C)$ là $S = \\displaystyle\\int\\limits_0^1 \\left|x^3 + x^2 - 2x\\right| \\mathrm{d}x$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi $(P)$ và $(C)$ là $S = \\dfrac{37}{12}$ (đvdt)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Phương trình hoành độ giao điểm của $(P)$ và $(C)$ là \\[x(1 - x) = x^3 - x \\Leftrightarrow x^3 + x^2 - 2x = 0.\\]<br>- <strong>Sai</strong>.<br>  Ta có $x^3+x^2-2 x=0\\Leftrightarrow \\left[\\begin{aligned}&x = 0\\\\&x = 1\\\\&x = -2.\\end{aligned}\\right.$<br> Do đó tập nghiệm của phương trình $x^3+x^2-2 x=0$ là $\\{-2; 0; 1\\}$.<br>- <strong>Sai</strong>.<br>  Diện tích hình phẳng giới hạn bởi $(P)$ và $(C)$ là $S = \\displaystyle\\int\\limits_{-2}^1 \\left|x^3 + x^2 - 2x\\right| \\mathrm{d}x$.<br>- <strong>Đúng</strong>.<br>  Diện tích hình phẳng giới hạn bởi $(P)$ và $(C)$ là \\[S = \\displaystyle\\int\\limits_{-2}^1 \\left|x^3 + x^2 - 2x\\right| \\mathrm{d}x = \\dfrac{37}{12} \\text{ (đvdt)}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS20",
    "question": "Cho $f(x)$ là hàm đa thức thỏa mãn $f'(x)=3x^2-6x+1$, $f(0)=2$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits f'(x)\\mathrm{\\,d}x=x^3-3x^2+x+C$",
        "answer": true
      },
      {
        "text": "$f(x)=x^3-3x^2+x-2$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_{1}^{3} f'(x)\\mathrm{\\,d}x=9$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số $y=f(x)$ và $y=f'(x)+1$ bằng $8\\sqrt{2}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. Ta có $\\displaystyle\\int f'(x)\\mathrm{\\,d}x=\\displaystyle\\int \\left(3x^2-6x+1\\right)\\mathrm{\\,d}x=x^3-3x^2+x+C$.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>. Ta có $f(x)=\\displaystyle\\int f'(x)\\mathrm{\\,d}x=x^3-3x^2+x+C$. <br> Vì $f(0)=2$ nên $C=2$. <br> Do đó $f(x)=x^3-3x^2+x+2$.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>. Ta có $\\displaystyle\\int\\limits_{1}^{3} f'(x)\\mathrm{\\,d}x=f(x)\\Big|_{1}^{3}=f(3)-f(1)=5-1=4$.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>. Ta có $$f(x)=f'(x)+1 \\Leftrightarrow x^3-3x^2+x+2=3x^2-6x+1+1 \\Leftrightarrow x^3-6x^2+7x=0 \\Leftrightarrow \\left[\\begin{aligned} & x=0 \\\\ & x=3+\\sqrt{2} \\\\ & x=3-\\sqrt{2}.\\end{aligned}\\right.$$ Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số $y=f(x)$ và $y=f'(x)+1$ là $$S=\\displaystyle\\int\\limits_{0}^{3+\\sqrt{2}} \\left|f(x)-f'(x)-1\\right|\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{3+\\sqrt{2}} \\left|x^3-6x^2+7x\\right|\\mathrm{\\,d}x\\approx13{,}72\\ne8\\sqrt{2}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS21",
    "question": "Hàm số $y = f(x)$ có nguyên hàm là $F(x)$ trên $[a;b]$ và có đồ thị như hình vẽ.<br><img src=\"data/12/2D4/im2D43/2D43_ex12_050.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Biết $\\displaystyle\\int\\limits_a^c f(x)\\mathrm{\\,d}x = m$, $\\displaystyle\\int\\limits_c^b f(x)\\mathrm{\\,d}x = n$.",
    "subQuestions": [
      {
        "text": "$F(c) - F(a) = m$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_b^c 2f(x)\\mathrm{\\,d}x = 2n$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x = m + n$",
        "answer": true
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi $y=f(x)$, trục hoành, $x=a$ và $x=b$ bằng $m - n$",
        "answer": true
      }
    ],
    "explain": "Quan sát đồ thị, ta thấy<br><br>- Trên khoảng $(a; c)$ thì đồ thị $f(x)$ nằm phía trên trục hoành nên $f(x) \\ge 0$. Do đó $\\displaystyle\\int\\limits_a^c f(x)\\mathrm{\\,d}x = m&gt;0$.<br><br>- Trên khoảng $(c; b)$ thì đồ thị $f(x)$ nằm phía dưới trục hoành nên $f(x) \\le 0$. Do đó $\\displaystyle\\int\\limits_c^b f(x)\\mathrm{\\,d}x = n&lt;0$.<br>- <strong>Đúng</strong>.<br>  Ta có $$ \\displaystyle\\int\\limits_a^c f(x)\\mathrm{\\,d}x = F(c) - F(a) \\Rightarrow F(c) - F(a) = m. $$<br>- <strong>Sai</strong>.<br>  Ta có $$ \\displaystyle\\int\\limits_b^c 2f(x)\\mathrm{\\,d}x = -2 \\displaystyle\\int\\limits_c^b f(x)\\mathrm{\\,d}x = -2n \\neq 2n. $$<br>- <strong>Đúng</strong>.<br>  Ta có $$ \\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x = \\displaystyle\\int\\limits_a^c f(x)\\mathrm{\\,d}x + \\displaystyle\\int\\limits_c^b f(x)\\mathrm{\\,d}x = m + n. $$<br>- <strong>Đúng</strong>.<br>  Gọi $S$ là diện tích hình phẳng cần tìm. Khi đó ta có<br>$$\\begin{aligned} S &= \\displaystyle\\int\\limits_a^b \\left| f(x) \\right|\\mathrm{\\,d}x = \\displaystyle\\int\\limits_a^c \\left| f(x) \\right|\\mathrm{\\,d}x + \\displaystyle\\int\\limits_c^b \\left| f(x) \\right|\\mathrm{\\,d}x \\\\ &= \\displaystyle\\int\\limits_a^c f(x)\\mathrm{\\,d}x - \\displaystyle\\int\\limits_c^b f(x)\\mathrm{\\,d}x \\quad (\\text{do } f(x) \\ge 0 \\text{ trên } [a;c] \\text{ và } f(x) \\le 0 \\text{ trên } [c;b]) \\\\ &= m - n. \\end{aligned}$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D431DS22",
    "question": "Cho parabol $(P): f(x) = x^2 - 3x + 2$ và đường thẳng $d: g(x) = 5 - x$. Gọi $S$ là diện tích hình phẳng giới hạn bởi $(P)$ và $d$; $S'$ là diện tích hình phẳng $(H)$ giới hạn bởi $(P)$ và trục hoành. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Hình phẳng $(H)$ quay quanh trục hoành tạo thành khối tròn xoay có thể tích bằng $\\dfrac{\\pi}{30}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle \\int f(x) \\text{d}x = 2x - 3 + C$",
        "answer": false
      },
      {
        "text": "$S = 64 \\cdot S'$",
        "answer": true
      },
      {
        "text": "$S = \\dfrac{32}{3}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Thể tích khối tròn xoay $V = \\pi \\displaystyle \\int\\limits_1^2 \\left[f(x)\\right]^2 \\mathrm{\\,d}x = \\pi \\int\\limits_1^2 \\left(x^2-3x+2\\right)^2 \\mathrm{\\,d}x = \\dfrac{\\pi}{30}$.<br>- <strong>Sai</strong>.<br>  Ta có $$\\displaystyle \\int f(x) \\mathrm{\\,d}x = \\int\\left(x^2 - 3x + 2\\right) \\mathrm{\\,d}x = \\dfrac{x^3}{3} - \\dfrac{3x^2}{2} + 2x + C.$$<br>- <strong>Đúng</strong>.<br>  Xét $x^2 - 3x + 2 = 0 \\Leftrightarrow \\left[\\begin{aligned}&x=1\\\\& x=2.\\end{aligned}\\right.$<br> Khi đó Parabol $(P)$ cắt trục hoành tại các điểm có hoành độ $x=1$ và $x=2$.<br> Diện tích $$S' = \\displaystyle \\int\\limits_1^2 \\left|x^2 - 3x + 2\\right| \\mathrm{\\,d}x = \\dfrac{1}{6}.$$ Phương trình hoành độ giao điểm của $(P)$ và $d$ là $$x^2 - 3x + 2 = 5 - x \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow \\left[\\begin{aligned}&x=-1\\\\&x=3.\\end{aligned}\\right.$$ Diện tích $$S = \\displaystyle \\int\\limits_{-1}^3 \\left|\\left(5-x\\right) - \\left(x^2-3x+2\\right)\\right| \\mathrm{\\,d}x = \\displaystyle\\int\\limits_{-1}^3 \\left(-x^2 + 2x + 3\\right) \\mathrm{\\,d}x = \\dfrac{32}{3}.$$ Suy ra $\\dfrac{S}{S'} = \\dfrac{32/3}{1/6} = 64 \\Rightarrow S = 64 \\cdot S'$.<br>- <strong>Đúng</strong>.<br>  Ta có $S'=\\dfrac{1}{6}\\Rightarrow S=64\\cdot\\dfrac{1}{6} = \\dfrac{32}{3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D432DS23",
    "question": "Cho hàm số $f(x) = 6x^2 - 4x - 2$.",
    "subQuestions": [
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành và hai đường thẳng $x = 0$, $x = 3$ là $34$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int k\\cdot f(x)\\,\\mathrm{d}x = k \\displaystyle\\int f(x)\\,\\mathrm{\\,d}x, \\forall k \\in \\mathbb{R}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int f(2x)\\,\\mathrm{\\,d}x = 8x^3 - 4x^2 - 2x + C$",
        "answer": true
      },
      {
        "text": "$F(x) = 2x^3 - 2x^2 + 5$ là một nguyên hàm của hàm số $y = f(x)$ thỏa mãn $F(1) = 5$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f(x)=0\\Leftrightarrow x=1$ hoặc $x=-\\dfrac13$; trên $[0;1]$ có $f(x)\\le 0$, trên $[1;3]$ có $f(x)\\ge 0$. Với $F(x)=2x^3-2x^2-2x$: $S=-\\big(F(1)-F(0)\\big)+\\big(F(3)-F(1)\\big)=-(-2)+(30-(-2))=2+32=34$. Vậy mệnh đề đúng.<br>- <strong>Sai</strong>.<br>  Ta có $\\displaystyle\\int k\\cdot f(x)\\,\\mathrm{\\,d}x = k \\displaystyle\\int f(x)\\,\\mathrm{\\,d}x$ với ($k\\ne 0$).<br>- <strong>Đúng</strong>.<br>  Ta có $f(2x) = 6(2x)^2 - 4(2x) - 2 = 24x^2 - 8x - 2$.<br> Suy ra $\\displaystyle\\int f(2x)\\,\\mathrm{\\,d}x =\\displaystyle\\int \\left( 24x^2 - 8x - 2\\right) \\,\\mathrm{\\,d}x = 8x^3 - 4x^2 - 2x + C$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int (6x^2 - 4x - 2)\\,\\mathrm{\\,d}x = 2x^3 - 2x^2 - 2x + C$.<br> Với $F(1)=5 \\Rightarrow 2-2-2+C=5 \\Rightarrow C=7$.<br> Vậy $F(x) = 2x^3 - 2x^2 - 2x + 7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D432DS24",
    "question": "Trong hệ trục $Oxy$ đường biên của một hòn đảo được mô hình hóa bởi hàm số $f(x)=\\dfrac{-x^2+10x-12}{x}$ ($x&gt;0$) (đơn vị mỗi trục là $100$ m). Ban quản lý hòn đảo muốn quây một vùng tam giác an toàn để người dân có thể vui chơi và tắm biển ở khu vực đó. Đặt cố định một điểm ngoài biển tại tọa độ $I(2; 8)$, sau đó căng hai tấm lưới bảo vệ $IA$, $IB$ với hai điểm $A$, $ B$ ($x_A&gt;x_B&gt;0$) nằm trên đường biên và luôn thỏa mãn $AB \\parallel Ox$.<br><img src=\"data/12/2D4/im2D43/2D43_ex12_028.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đỉnh cao nhất của hòn đảo (điểm cực đại của đồ thị hàm số) cách điểm $I$ một khoảng $514$ m (làm tròn kết quả đến hàng đơn vị)",
        "answer": true
      },
      {
        "text": "Tâm đối xứng của đồ thị hàm số $f(x)=\\dfrac{-x^2+10x-12}{x}$ là $M(0; 10)$",
        "answer": true
      },
      {
        "text": "Quãng đường ngắn nhất từ hòn đảo đến điểm $I$ là $510$ m (làm tròn kết quả đến hàng đơn vị)",
        "answer": false
      },
      {
        "text": "Nếu điều chỉnh dây phao sao cho khoảng cách từ trạm $I$ đến dây phao $AB$ bằng đúng chiều dài dây phao $AB$ thì diện tích vùng an toàn $\\Delta IAB$ là $605\\,000$ m$^2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $f(x)=\\dfrac{-x^2+10x-12}{x}=-x+10-\\dfrac{12}{x}$ với $x&gt;0$;<br> $f'(x)=-1+\\dfrac{12}{x^2}$; $f''(x)=-\\dfrac{24}{x^3}$.<br> Cho $f'(x)=0 \\Leftrightarrow -1+\\dfrac{12}{x^2}=0 \\Leftrightarrow x=\\pm 2\\sqrt{3}$. Vì $x&gt;0$, ta chọn $x=2\\sqrt{3}$.<br> Mặt khác, $f''(2\\sqrt{3})=-\\dfrac{24}{(2\\sqrt{3})^3}=-\\dfrac{1}{\\sqrt{3}}&lt;0$ nên $x=2\\sqrt{3}$ là điểm cực đại của hàm số.<br> Do đó, điểm cực đại của đồ thị hàm số là $C(2\\sqrt{3}; 10-4\\sqrt{3})$.<br> Ta có $IC=\\sqrt{(2\\sqrt{3}-2)^2+(10-4\\sqrt{3}-8)^2} \\approx 5{,}1411$ (đơn vị).<br> Vậy đỉnh cao nhất của hòn đảo (điểm cực đại của đồ thị hàm số) cách điểm $I$ một khoảng $514$ m (làm tròn kết quả đến hàng đơn vị).<br>- <strong>Đúng</strong>.<br>  Đồ thị của hàm số $f(x)=-x+10-\\dfrac{12}{x}$ có một đường tiệm cận đứng $x=0$ và một đường tiệm cận xiên $y=-x+10$.<br> Do đó, tâm đối xứng của đồ thị là giao điểm $M(0; 10)$ của hai đường tiệm cận.<br>- <strong>Sai</strong>.<br>  Quãng đường ngắn nhất từ hòn đảo đến điểm $I$ là khoảng cách nhỏ nhất từ một điểm $P\\left(x; -x+10-\\dfrac{12}{x}\\right)$ thuộc đồ thị đến điểm $I(2; 8)$.<br> Đặt $g(x)=IP^2=(x-2)^2+\\left(-x+2-\\dfrac{12}{x}\\right)^2$.<br> Ta có $g'(x)=2(x-2)+2\\left(-x+2-\\dfrac{12}{x}\\right)\\left(-1+\\dfrac{12}{x^2}\\right)$;<br> $g'(x)=0 \\Leftrightarrow x^3(x-2)+(-x^2+2x-12)(-x^2+12)=0 \\Leftrightarrow x^4-2x^3+12x-72=0 \\Leftrightarrow x \\approx 3{,}12722$.<br> Do đó, $IP_{\\min} = \\sqrt{g(3{,}12722)} \\approx 5{,}090857$ (đơn vị).<br> Vậy quãng đường ngắn nhất từ hòn đảo đến điểm $I$ là $509$ m (làm tròn kết quả đến hàng đơn vị).<br>- <strong>Đúng</strong>.<br>  Do $AB \\parallel Ox$ nên $y_A=y_B=k$ (với $k$ là hằng số).<br> Khi đó, $x_A$ và $x_B$ là hai nghiệm dương phân biệt của phương trình $f(x)=k$<br> $\\Leftrightarrow -x+10-\\dfrac{12}{x}=k \\Leftrightarrow x^2+(k-10)x+12=0$.<br> Theo Vi-ét, ta có $x_A+x_B=10-k$; $x_A x_B=12$.<br> Chiều dài dây phao $AB$ là<br> $L=|x_A-x_B|=\\sqrt{(x_A-x_B)^2}=\\sqrt{(x_A+x_B)^2-4x_A x_B}=\\sqrt{(10-k)^2-48}$.<br> Khoảng cách từ trạm $I(2; 8)$ đến dây phao $AB$ (đường thẳng $y=k$) là $h=|8-k|$.<br> Theo giả thiết, ta có $h=L \\Leftrightarrow |8-k|=\\sqrt{(10-k)^2-48}$<br> $\\Leftrightarrow 64-16k+k^2=100-20k+k^2-48$<br> $\\Leftrightarrow 4k+12=0 \\Leftrightarrow k=-3$.<br> Do đó, $h=L=11$ (đơn vị).<br> Diện tích vùng an toàn $\\Delta IAB$ là $S_{IAB}=\\dfrac{1}{2}Lh=\\dfrac{1}{2} \\cdot 11 \\cdot 11=60{,}5$ (đơn vị diện tích).<br> Vì đơn vị trên mỗi trục là $100$ m nên $1$ đơn vị diện tích trên hệ trục tọa độ ứng với $100 \\cdot 100=10000$ (m$^2$).<br> Vậy diện tích vùng an toàn $\\Delta IAB$ là $S_{IAB}=60{,}5 \\cdot 10\\,000=605\\,000$ (m$^2$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D432DS25",
    "question": "Một công ty thiết kế mẫu kỉ niệm chương để tặng cho khách hàng thân thiết nhân dịp $10$ năm ngày thành lập. Kỉ niệm chương gồm một tấm thủy tinh hình tròn có bán kính $30$ cm và $4$ dải sóng được làm từ inox sơn trắng đặt nổi trọn vẹn trên bề mặt tấm thủy tinh (tấm thủy tinh hình tròn vẫn nguyên vẹn) như hình vẽ.<br><img src=\"data/12/2D4/im2D43/2D43_ex12_033.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> <br><img src=\"data/12/2D4/im2D43/2D43_ex12_034.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Để chính xác hóa kích thước và hình dạng như hình vẽ, trong mặt phẳng tọa độ $Oxy$ (mỗi đơn vị ứng với $1$ cm trên thực tế), mỗi dải sóng được xem là một hình phẳng giới hạn bởi hai đồ thị hàm số bậc ba $f(x)=\\dfrac{1}{500}x^3-\\dfrac{3}{100}x^2-\\dfrac{1}{5}x+a$ và $g(x)=\\dfrac{1}{500}x^3-\\dfrac{1}{50}x^2-\\dfrac{3}{10}x+b$. Biết chi phí làm thủy tinh là $1\\,000$ đồng trên mỗi cm$^2$ và chi phí làm inox sơn trắng là $3\\,000$ đồng trên mỗi cm$^2$.",
    "subQuestions": [
      {
        "text": "$a=5$",
        "answer": true
      },
      {
        "text": "$b=3$",
        "answer": true
      },
      {
        "text": "Diện tích $4$ dải sóng màu trắng là $160$ cm$^2$",
        "answer": false
      },
      {
        "text": "Chi phí sản xuất một cái kỉ niệm chương như hình trên nhỏ hơn $3\\,400\\,000$ đồng",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đồ thị hàm số $y=f(x)$ cắt trục tung tại điểm có tung độ bằng $5$ nên $a=5$.<br>- <strong>Đúng</strong>.<br>  Đồ thị hàm số $y=g(x)$ cắt trục tung tại điểm có tung độ bằng $3$ nên $b=3$.<br>- <strong>Sai</strong>.<br>  Diện tích $4$ dải sóng màu trắng là $$S=4\\cdot \\displaystyle\\int\\limits_{-10}^{20} \\left[f(x)-g(x)\\right]\\mathrm{\\,d}x =4\\cdot \\displaystyle\\int\\limits_{-10}^{20} \\left(-\\dfrac{1}{100}x^2+\\dfrac{1}{10}x+2\\right)\\mathrm{\\,d}x=180.$$<br>- <strong>Đúng</strong>.<br>  Chi phí sản xuất một cái kỉ niệm chương như hình trên là $$S=180\\cdot 3\\,000 + 900\\pi\\cdot 1\\,000 \\approx 3\\,367\\,433 \\textrm{ (đồng)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D432DS26",
    "question": "Trường THPT X thiết kế lại sân trường để tổ chức hội trại chào mừng ngày thành lập Đoàn, Đoàn trường cải tạo một khoảng đất trong khuôn viên nhà trường thành khu vực để tổ chức hội trại là hình được giới hạn bởi Parabol $y = -x^2 + 4x - 3$ và đường thẳng $y = k$ ($k &lt; 0$) được mô tả như hình vẽ bên dưới. Trục hoành chia khu vực này thành hai phần: phần gạch chéo dùng để trang trí và phần còn lại dùng để chơi trò chơi và dựng trại (đơn vị đo trên mỗi trục số là mét).<br><br><img src=\"data/12/2D4/im2D43/2D43_ex12_039.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Diện tích hình phẳng giới hạn bởi Parabol và trục $Ox$ là $S = \\displaystyle \\int \\limits_{1}^{3} {\\left| -x^2 + 4x - 3 \\right|} \\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "Biết $k = -35$. Khi đó tổng diện tích khu vực tổ chức hội trại là $S = 288$ (m$^2$)",
        "answer": true
      },
      {
        "text": "Trong phần sân để chơi trò chơi và dựng trại, trường giới hạn khu vực trò chơi trong một đường tròn có bán kính là $5$ (mét), phần dựng trại trường sẽ trải thảm cỏ. Biết rằng $1$ m$^2$ vuông cỏ có giá là $70$ (nghìn đồng) và với $k = -35$ thì số tiền trường mua thảm cỏ là $14\\,568$ nghìn đồng (<em>làm tròn đến hàng đơn vị</em>)",
        "answer": false
      },
      {
        "text": "Để giảm chi phí trang bị thảm cỏ, trường giảm diện tích phần dựng trại lại còn $\\dfrac{496 - 75\\pi}{3}$ (m$^2$). Biết rằng diện tích phần trang trí và khu vực trò chơi không thay đổi. Khi đó giá trị của $k \\in (-27; -24{,}8)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Parabol ($P$) có phương trình $y=-x^2+4x-3$.<br> Xét ($P$) giao với $Ox$, ta được $-x^2+4x-3=0 \\Leftrightarrow x=1$ hoặc $x=3$.<br> Diện tích hình phẳng giới hạn bởi Parabol và trục $Ox$ là $S = \\displaystyle \\int \\limits_{1}^{3} {\\left| -x^2 + 4x - 3 \\right|} \\mathrm{\\,d}x$.<br>- <strong>Đúng</strong>.<br>  Xét ($P$) giao với đường thẳng $y=k$, ta được $-x^2+4x-3=k \\Leftrightarrow -x^2+4x-3-k=0$.<br> Với $k=-35$ thì ta được phương trình $-x^2+4x+32=0\\Leftrightarrow x=-4$ hoặc $x=8$.<br> Tổng diện tích khu vực tổ chức hội trại là $$S_\\text{tổng}=\\displaystyle \\int \\limits_{-4}^8(-x^2+4x+32)\\mathrm{\\,d}x =\\left[-\\dfrac{-x^3}{3}+2x^2+32x\\right]\\Bigg|_{-4}^8=288 (\\text{ m$^2$}).$$ Vậy tổng diện tích khu vực tổ chức hội trại là $288$ m$^2$.<br>- <strong>Sai</strong>.<br>  Diện tích phần chơi trò chơi là $S_\\text{trò chơi}=\\pi\\cdot R^2=\\pi\\cdot 5^2=25\\pi$ (m$^2$).<br> Diện tích phần trang trí là diện tích hình phẳng giới hạn bởi Parabol với trục $Ox$ và bằng $S=\\displaystyle \\int \\limits_{1}^{3} {\\left| -x^2 + 4x - 3 \\right|} \\mathrm{\\,d}x=\\left[-\\dfrac{x^3}{3}+2x^2-3x\\right]\\Bigg|_1^3=\\dfrac{4}{3}$ (m$^2$).<br> Do đó diện tích phần trồng cỏ là $S_\\text{cỏ}=S_\\text{tổng}-(S+S_\\text{trò chơi})=288-\\left(\\dfrac{4}{3}+25\\pi\\right)$ (m$^2$).<br> Số tiền trường mua thảm cỏ là $\\left(288-\\left(\\dfrac{4}{3}+25\\pi\\right)\\right)\\cdot 70\\approx 14\\,569$ (nghìn đồng).<br>- <strong>Sai</strong>.<br>  Gọi $S_{\\text{cỏ}}(k)$ là diện tích phần dựng trại.<br> Xét ($P$) giao với đường thẳng $y=k$, ta có $$-x^2+4x-3=k \\Leftrightarrow -x^2+4x-3-k=0\\Rightarrow x=2\\pm\\sqrt{1-k}.$$ Diện tích toàn bộ khu vực là $S_{\\text{Tổng}}=\\displaystyle \\int \\limits_{2-\\sqrt{1-k}}^{2+\\sqrt{1-k}}(-x^2+4x-3-k)\\mathrm{\\,d}x$.<br> Đặt $t=x-2$, suy ra $S_{\\text{Tổng}}=\\displaystyle \\int \\limits_{-\\sqrt{1-k}}^{\\sqrt{1-k}}(1-k-t^2)\\mathrm{\\,d}t =\\dfrac{4}{3}(1-k)^{3/2}$ (m$^2$) Diện tích phần trang trí là $S_{\\text{trang trí}}=\\dfrac{4}{3}$ m$^2$, diện tích phần trò chơi là $S_{\\text{trò chơi}}=25\\pi$ m$^2$.<br> Do đó $S_{\\text{cỏ}}(k)=\\dfrac{4}{3}(1-k)^{3/2}-\\left(\\dfrac{4}{3}+25\\pi\\right)$.<br> Theo đề bài thì\t$S_{\\text{cỏ}}(k)=\\dfrac{496-75\\pi}{3}$.<br> Suy ra $$\\begin{aligned} &&\\dfrac{4}{3}(1-k)^{3/2}-\\left(\\dfrac{4}{3}+25\\pi\\right)=\\dfrac{496-75\\pi}{3}\\\\ &\\Leftrightarrow& 4(1-k)^{3/2}=500\\\\ &\\Leftrightarrow&(1-k)^{3/2}=125\\\\ &\\Leftrightarrow&1-k=25 \\Leftrightarrow k=-24. \\end{aligned}$$ Vậy $k=-24 \\notin (-27;-24{,}8)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D432DS27",
    "question": "Một chất điểm chuyển động trong $19$ giây với vận tốc $v(t)$ (đơn vị m/s) là hàm số phụ thuộc thời gian $t$ (đơn vị: giây) có đồ thị như hình vẽ.<br><img src=\"data/12/2D4/im2D43/2D43_ex12_048.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Vận tốc lớn nhất của chất điểm bằng $19$ (m/s)",
        "answer": false
      },
      {
        "text": "Quãng đường chất điểm đi được trong khoảng thời gian từ $0$ giây đến $4$ giây bằng $26$ m",
        "answer": false
      },
      {
        "text": "Trong khoảng thời gian từ $13$ giây đến $19$ giây, đồ thị của $v(t)$ là một phần của đường parabol. Khi đó, $v(t) = -t^2 + 30t - 209$ (m/s)",
        "answer": true
      },
      {
        "text": "Quãng đường chất điểm đi được từ lúc xuất phát đến khi dừng lại bằng $204$ (m)",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D4/im2D43/2D43_ex12_049.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Sai</strong>.<br>  Từ đồ thị, vận tốc lớn nhất của chất điểm bằng $16$ (m/s).<br>- <strong>Sai</strong>.<br>  Quãng đường chất điểm đi được trong khoảng thời gian từ $0$ giây đến $4$ giây bằng diện tích tam giác $OAB$ và bằng $\\dfrac{4\\cdot 12}{2}=24$ (m).<br>- <strong>Đúng</strong>.<br>  Ta thấy các điểm $(13;12)$, $(15;16)$ và $(19;0)$ thoả mãn phương trình $v(t) = -t^2 + 30t - 209$ nên trong khoảng thời gian từ $13$ giây đến $19$ giây, $v(t) = -t^2 + 30t - 209$ (m/s).<br>- <strong>Đúng</strong>.<br>  Quãng đường chất điểm đi được từ lúc xuất phát đến khi dừng lại bằng { $$\\begin{aligned} &&\\dfrac{1}{2}\\cdot 4\\cdot 12+(13-4)\\cdot 12+\\displaystyle\\int\\limits_{13}^{19} \\left(-t^2 + 30t - 209\\right)\\mathrm{\\,d}t\\\\ &= 132 +\\left(-\\dfrac{t^3}{3}+15t^2-209t\\right)\\bigg|_{13}^{19}\\\\ &= 132 +\\left(-\\dfrac{{19}^3}{3}+15\\cdot {19}^2-209\\cdot 19\\right)-\\left(-\\dfrac{{13}^3}{3}+15\\cdot {13}^2-209\\cdot 13\\right)\\\\ &= 204 \\text{ (m).} \\end{aligned}$$}",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D433DS28",
    "question": "Cho hàm số $f(x)= \\sin x +2x$. Hàm số $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$ và thỏa mãn $F(0)=4$.",
    "subQuestions": [
      {
        "text": "Tiếp tuyến của đồ thị hàm số $y=F(x)$ tại điểm có hoành độ $x = \\pi$ có hệ số góc $k=2\\pi$",
        "answer": true
      },
      {
        "text": "Họ nguyên hàm của hàm số $f(x)$ là $-\\cos x+x^2+C$ (với $C$ là hằng số)",
        "answer": true
      },
      {
        "text": "$F(x)= -\\cos x+x^2+4$",
        "answer": false
      },
      {
        "text": "Thể tích khối tròn xoay sinh bởi miền phẳng $D$ giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành và hai đường thẳng có phương trình $x=0$, $x= \\dfrac{\\pi}{2}$ bằng $31$ (đvtt) (<em>không làm tròn kết quả của các phép toán trung gian, chỉ làm tròn kết quả phép toán cuối cùng đến hàng đơn vị</em>)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vì $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$ nên $F'(x)=f(x)$, $\\forall x \\in \\mathbb{R}$.<br> Tiếp tuyến của đồ thị hàm số $y=F(x)$ tại điểm có hoành độ $x = \\pi$ có hệ số góc là $$k=F'(\\pi)=f(\\pi)=\\sin \\pi +2 \\pi = 2\\pi.$$<br>- <strong>Đúng</strong>.<br>  Họ nguyên hàm của hàm số $f(x)$ là $$F(x)=\\displaystyle \\int f(x) \\mathrm{\\,d}x= \\displaystyle \\int \\left(\\sin x +2x\\right)\\mathrm{\\,d}x=-\\cos x +x^2+C.$$<br>- <strong>Sai</strong>.<br>  Vì $F(0)=4$ nên $-\\cos 0+0^2+C=4 \\Rightarrow C=5$.<br> Vậy $F(x)=-\\cos x +x^2+5$.<br>- <strong>Đúng</strong>.<br>  Thể tích khối tròn xoay sinh bởi miền phẳng $D$ giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành và hai đường thẳng có phương trình $x=0$, $x= \\dfrac{\\pi}{2}$ là $$V=\\pi \\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} \\left[f(x)\\right]^2 \\mathrm{\\,d}x = \\pi \\displaystyle \\int \\limits_{0}^{\\frac{\\pi}{2}} \\left( \\sin x+2x\\right)^2 \\mathrm{\\,d}x \\approx 31\\; \\text{(đvtt)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D433DS29",
    "question": "Cho hàm số $y=f(x)=x^2+2x$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\left(x^2+2x\\right)\\mathrm{\\,d}x=\\dfrac{x^3}{3}+x^2+C$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^1\\left(x^2+2x\\right)\\mathrm{\\,d}x=\\dfrac{2}{3}$",
        "answer": false
      },
      {
        "text": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành, $x=0$ và $x=2$ bằng $\\dfrac{10}{3}$",
        "answer": false
      },
      {
        "text": "Thể tích của khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi các đường $y=f(x)$, $x=0$ và $x=1$ quanh trục $Ox$ bằng $\\dfrac{38}{15}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $\\displaystyle\\int\\left(x^2+2x\\right)\\mathrm{\\,d}x=\\dfrac{x^3}{3}+x^2+C$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int\\limits_0^1\\left(x^2+2x\\right)\\mathrm{\\,d}x=\\left(\\dfrac{x^3}{3}+x^2\\right)\\bigg|_0^1=\\dfrac{1}{3}+1-0=\\dfrac{4}{3}$.<br>- <strong>Sai</strong>.<br>  Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, trục hoành, $x=0$ và $x=2$ là $$S=\\displaystyle\\int\\limits_0^2\\left(x^2+2x\\right)\\mathrm{\\,d}x=\\left(\\dfrac{x^3}{3}+x^2\\right)\\bigg|_0^2=\\dfrac{8}{3}+4=\\dfrac{20}{3}.$$<br>- <strong>Sai</strong>.<br>  Thể tích của khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi các đường $y=f(x)$, $x=0$ và $x=1$ quanh trục $Ox$ là $$V=\\pi\\displaystyle\\int\\limits_0^1\\left(x^2+2x\\right)^2\\mathrm{\\,d}x=\\dfrac{38\\pi}{15}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D433DS30",
    "question": "Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y=f(x)=3\\mathrm{e}^{-x}$, trục hoành, trục tung và đường thẳng $x=2$. Khi đó:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int f(x) \\mathrm{\\,d}x = 3\\mathrm{e}^{-x}+C$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^2 f(x) \\mathrm{\\,d}x = \\dfrac{3\\mathrm{e}^2-3}{\\mathrm{e}^2}$",
        "answer": true
      },
      {
        "text": "Diện tích của hình phẳng $(H)$ bằng $\\dfrac{3}{\\mathrm{e}^2}-3$",
        "answer": false
      },
      {
        "text": "Thể tích khối tròn xoay tạo thành khi quay $(H)$ quanh trục hoành bằng $\\dfrac{9(\\mathrm{e}^4-1)}{2\\mathrm{e}^4}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x = \\dfrac{3}{-1}\\cdot \\mathrm{e}^{-x}+C=-3\\mathrm{e}^{-x}+C$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\displaystyle\\int\\limits_0^2 f(x) \\mathrm{\\,d}x =-3\\mathrm{e}^{-x}\\Big|_0^2=-3\\mathrm{e}^{-2}+3=\\dfrac{-3}{\\mathrm{e}^2}+3= \\dfrac{3\\mathrm{e}^2-3}{\\mathrm{e}^2}$.<br>- <strong>Sai</strong>.<br>  Diện tích của hình phẳng $(H)$ bằng $\\displaystyle\\int\\limits_0^2 f(x) \\mathrm{\\,d}x = \\dfrac{-3}{\\mathrm{e}^2}+3$.<br>- <strong>Sai</strong>.<br>  Thể tích khối tròn xoay tạo thành khi quay $(H)$ quanh trục hoành là $$V=\\pi \\displaystyle\\int\\limits_0^2 f^2(x)\\mathrm{\\,d}x=\\pi \\displaystyle\\int\\limits_0^2 9\\mathrm{e}^{-2x}\\mathrm{\\,d}x=9\\pi\\left( -\\dfrac{1}{2}\\mathrm{e}^{-2x}\\right)\\Big|_0^2=9\\pi\\left(-\\dfrac{1}{2}\\mathrm{e}^{-4}+\\dfrac{1}{2} \\right)=\\dfrac{9\\pi(\\mathrm{e}^4-1)}{2\\mathrm{e}^4}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D433DS31",
    "question": "Cho hàm số bậc hai $y=f(x)$ có đồ thị $(P)$ và đường thẳng $d$ cắt nhau tại hai điểm $A(1;2)$ và $B(3;4)$ như hình vẽ. Biết rằng hình phẳng giới hạn bởi $(P)$ và $d$ có diện tích $S=\\dfrac{100}{57}$.<br><br><img src=\"data/12/2D4/im2D43/2D43_ex12_044.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phương trình đường thẳng $d$ là $y=x+1$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_{1}^{3} f'(x)\\mathrm{\\,d}x=2$",
        "answer": true
      },
      {
        "text": "Thể tích khối tròn xoay khi cho hình phẳng giới hạn bởi $d$, trục hoành và $2$ đường thẳng $x=0$, $x=3$ quay quanh trục $Ox$ bằng $\\dfrac{15\\pi}{2}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_{1}^{3} \\left[3f(x)-2x\\right]\\mathrm{\\,d}x=\\dfrac{90}{19}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. Đường thẳng $d\\colon y=ax+b$ đi qua hai điểm $A(1;2)$ và $B(3;4)$ nên $$\\begin{cases}&a+b=2\\\\&3a+b=4\\end{cases} \\Rightarrow \\begin{cases}&a=1\\\\&b=1\\end{cases} \\Rightarrow d\\colon y=x+1.$$<br>- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. Ta có $\\displaystyle\\int\\limits_{1}^{3} f'(x)\\mathrm{\\,d}x=f(x)\\Big|_{1}^{3}=f(3)-f(1)=4-2=2$.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>. Thể tích khối tròn xoay khi cho hình phẳng giới hạn bởi $d$, trục hoành và $2$ đường thẳng $x=0$, $x=3$ quay quanh trục $Ox$ là $$V=\\pi\\displaystyle\\int\\limits_{0}^{3} \\left(x+1\\right)^2\\mathrm{\\,d}x=21\\pi.$$<br>- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. Ta có $S=\\displaystyle\\int\\limits_{1}^{3} \\left[(x+1)-f(x)\\right]\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{1}^{3} (x+1)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{1}^{3} f(x)\\mathrm{\\,d}x=6-\\displaystyle\\int\\limits_{1}^{3}f(x)\\mathrm{\\,d}x$. <br> Suy ra $\\displaystyle\\int\\limits_{1}^{3} f(x)\\mathrm{\\,d}x=6-S=6-\\dfrac{100}{57}=\\dfrac{242}{57}$. <br> Do đó $\\displaystyle\\int\\limits_{1}^{3} \\left[3f(x)-2x\\right]\\mathrm{\\,d}x=3\\displaystyle\\int\\limits_{1}^{3} f(x)\\mathrm{\\,d}x-\\displaystyle\\int\\limits_{1}^{3} 2x\\mathrm{\\,d}x=3\\cdot\\dfrac{242}{57}-8=\\dfrac{90}{19}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D435DS32",
    "question": "Một đồ lưu niệm bằng thủy tinh có chiều cao bằng $14$ cm, được thiết kế gồm hai phần, phần dưới là một khối lập phương cạnh bằng $8$ cm và phần trên là một phần của khối cầu có đường kính bằng $8$ cm (được mô hình hóa bởi hình vẽ bên dưới).<br><img src=\"data/12/2D4/im2D43/2D43_ex12_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br><img src=\"data/12/2D4/im2D43/2D43_ex12_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Thể tích phần dưới (khối lập phương) bằng $512$ cm$^3$",
        "answer": true
      },
      {
        "text": "Phần chỏm cầu có bán kính $R = 4$ cm và chiều cao $h = 6$ cm",
        "answer": true
      },
      {
        "text": "Thể tích của chỏm cầu (phần phía trên) bằng $70\\pi$ cm$^3$",
        "answer": false
      },
      {
        "text": "Thể tích của đồ lưu niệm đó là $738$ cm$^3$ (làm tròn kết quả đến hàng đơn vị)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Phần dưới là khối lập phương có cạnh bằng $8$ cm. Do đó có thể tích là \\[V_1= a^3 = 8^3 = 512\\;(\\text{cm}^3).\\]<br>- <strong>Đúng</strong>.<br>  Phần trên là một phần của khối cầu có đường kính $8$ cm, suy ra bán kính của khối cầu là $R = \\dfrac{8}{2} = 4$ cm.<br> Tổng chiều cao của đồ lưu niệm là $14$ cm.<br> Khối lập phương có chiều cao là $8$ cm.<br> Vậy chiều cao của phần chỏm cầu là $h = 14 - 8 = 6$ cm.<br>- <strong>Sai</strong>.<br>  Thể tích của chỏm cầu là \\[V_2 = \\dfrac{1}{3}\\pi h^2 (3R - h)=\\dfrac{1}{3}\\pi\\cdot 6^2(3\\cdot 4-6)=72\\pi\\;(\\text{cm}^3).\\]<br>- <strong>Đúng</strong>.<br>  Thể tích của đồ lưu niệm là tổng thể tích của khối lập phương và chỏm cầu.<br> Vậy $V = V_1 + V_2 = 512 + 72\\pi\\approx 738$ (cm$^3$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D435DS33",
    "question": "Giả sử rằng khi được $t$ năm tuổi, một máy công nghiệp A tạo ra doanh thu với tốc độ $R'(t)=588-3 t^2$ (triệu đồng/năm), thời điểm $t=0$ tính từ lúc máy A bắt đầu hoạt động. Biết rằng chi phí biên cho vận hành và bảo trì là $C'(t)=48+12 t^2$ (triệu đồng/năm), ở đây $C(t)$ là chi phí vận hành và bảo trì của máy A khi nó được $t$ năm tuổi. Khi đó",
    "subQuestions": [
      {
        "text": "Doanh thu sau $10$ năm của máy A là $\\displaystyle\\int\\limits_0^{10}\\left(588-3 t^2\\right) \\mathrm{\\, d} t$ (triệu đồng)",
        "answer": true
      },
      {
        "text": "Tổng chi phí vận hành và bảo trì của máy A trong $6$ năm là $1\\,152$ (triệu đồng)",
        "answer": true
      },
      {
        "text": "Tuổi thọ hữu ích của một máy là số năm $T$ trước khi lợi nhuận (bằng doanh thu trừ chi phí) mà nó tạo ra bắt đầu giảm. Tuổi thọ hữu ích của máy A này là $8$ năm",
        "answer": false
      },
      {
        "text": "Lợi nhuận do máy A tạo ra trong suốt thời gian tuổi thọ hữu ích của nó là $2\\,180$ (triệu đồng)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Doanh thu sau $10$ năm của máy A là $\\displaystyle\\int\\limits_0^{10}R'(t) \\mathrm{\\, d} t=\\displaystyle\\int\\limits_0^{10}\\left(588-3 t^2\\right) \\mathrm{\\, d} t$ (triệu đồng).<br>- <strong>Đúng</strong>.<br>  Tổng chi phí vận hành và bảo trì của máy A trong $6$ năm là $$\\displaystyle\\int\\limits_0^{6}C'(t) \\mathrm{\\, d} t=\\displaystyle\\int\\limits_0^{6}\\left(48+12 t^2\\right) \\mathrm{\\, d} t=48t+4t^3\\Bigg|_0^6=48\\cdot6+4\\cdot6^3=1\\,152 (\\text{triệu đồng}).$$<br>- <strong>Sai</strong>.<br>  Tuổi thọ của máy A là $$L(t)=\\displaystyle\\int\\limits \\left(R'(t)-C'(t)\\right) \\mathrm{\\, d} t=\\displaystyle\\int\\limits \\left(588-3t^2-48-12t^2\\right) \\mathrm{\\, d} t=540t-5t^3+C.$$ Ta có $L'(t)=540-15t^2$. Cho $L'(t)=0\\Leftrightarrow t=6$.<br> Lợi nhuận $L(t)$ giảm khi $L'(t)&lt;0 \\Leftrightarrow t&gt;6$.<br> Vậy tuổi thọ hữu ích của máy A là $6$ năm.<br>- <strong>Sai</strong>.<br>  Vì ở thời điểm ban đầu $t=0$, máy chưa tạo ra lợi nhuận nên ta có $$ L(0)=0 \\Leftrightarrow 540\\cdot 0-5\\cdot0^3+C=0 \\Leftrightarrow C=0.$$ Khi đó $L(t)=540t-5t^3$.<br> Lợi nhuận máy A tạo ra trong $6$ năm tuổi thọ hữu ích là $L(6)=540\\cdot6-5\\cdot6^3=2160$ (triệu đồng).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D435DS34",
    "question": "Cần kề Tết Nguyên Đán. Bác Nghĩa muốn thiết kế của một đèn lồng cao $40$ (cm) để treo lên ở hiên nhà. Mặt cắt ngang tại mọi độ cao vuông góc với trục thẳng đứng của đèn lồng luôn là một hình vuông (xem hình vẽ). Mặt đáy và đỉnh của đèn lồng là hình vuông có cạnh $L_0 = 10\\sqrt{2}$ (cm). Mặt cắt ngang tại vị trí rộng nhất của đèn lồng là hình vuông (hình vuông có diện tích lớn nhất) có cạnh $L_{\\max} = 14\\sqrt{2}$ (cm). Mặt cắt của đèn lồng theo mặt phẳng thẳng đứng chứa đường chéo đáy có dạng là hình phẳng giới hạn bởi hai đường cong Parabol đối xứng nhau qua trục thẳng đứng đi qua tâm đáy của đèn lồng. Một đường cong Parabol $y = f(x)$ trong bốn đường cong để tạo ra <strong>khung</strong> đèn lồng được gắn trong hệ trục $Oxy$ với trục $Ox$ biểu diễn chiều cao của chiếc đèn lồng (đơn vị mỗi trục là $1$ (cm)).<br><img src=\"data/12/2D4/im2D43/2D43_ex12_029.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br><img src=\"data/12/2D4/im2D43/2D43_ex12_030.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Diện tích lớn nhất của mặt cắt ngang hình vuông, vuông góc với trục thẳng đứng bằng $196$ (cm$^2$)",
        "answer": false
      },
      {
        "text": "Phương trình đường cong Parabol $y = f(x) = \\dfrac{-1}{100}x^2 + 14$",
        "answer": true
      },
      {
        "text": "Tính thể tích của chiếc đèn lồng đó là $12{,}95$ lít (làm tròn đến hàng phần trăm)",
        "answer": true
      },
      {
        "text": "Để đảm bảo an toàn, bác Nghĩa treo một chiếc bóng đèn sợi đốt hình cầu có tâm (được xem là một điểm) đặt trên trục thẳng đứng của lồng đèn và cách đáy $22$ (cm). Bác quy định rằng để tránh làm cháy lớp giấy dán, khoảng cách từ mặt bóng đèn đến bất kỳ điểm nào trên lồng đèn phải ít nhất là $7$ (cm). Bác có thể chọn chiếc bóng đèn có bán kính lớn là $2{,}8666$ (cm) (làm tròn đến bốn chữ số sau dấu phẩy)",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Diện tích hình vuông lớn nhất là $S_{\\max} = \\left(14\\sqrt{2}\\right)^2 = 392$ (cm$^2$)<br>- <strong>Đúng</strong>.<br>  Gọi Parabol trong hình vẽ là $y = f(x) = ax^2 + bx + c$<br> Trục đối xứng của parabol là $x = \\dfrac{-b}{2a} = 0$ nên $b = 0$.<br> Vì độ dài đường chéo của hình vuông lớn nhất là $28$ (cm) nên đỉnh của Parabol là $(0; 14)$. Từ đó ta có $c = 14$.<br> Vì độ dài đường chéo của hình vuông đỉnh là $20$ (cm) nên Parabol đi qua $(20; 10)$. Nên ta có phương trình<br> $400a + 14 = 10 \\Rightarrow a = -\\dfrac{1}{100}$.<br> Vậy $(P) \\colon y = f(x) = -\\dfrac{1}{100}x^2 + 14$.<br>- <strong>Đúng</strong>.<br>  Với $(P) \\colon y = f(x) = -\\dfrac{1}{100}x^2 + 14$<br> Với $M(x; f(x)) \\in (P)$ khoảng cách từ $M$ đến $Ox$ là một nửa đường chéo của hình vuông mặt cắt vuông góc với trục của chiếc lồng đèn và song song với hai đáy.<br> Nên độ dài cạnh của hình vuông mặt cắt là $a = \\left(-\\dfrac{1}{100}x^2 + 14\\right)\\sqrt{2}$<br> Diện tích mặt cắt là $S(x) = 2\\left(-\\dfrac{1}{100}x^2 + 14\\right)^2$<br> Thể tích của đèn lồng $V = \\displaystyle\\int\\limits_{-20}^{20} S(x)\\text{d}x = 2 \\displaystyle\\int\\limits_{-20}^{20} \\left(-\\dfrac{1}{100}x^2 + 14\\right)^2 \\text{d}x$<br> $V = \\displaystyle\\int\\limits_{-20}^{20} S(x)\\text{d}x = 2 \\displaystyle\\int\\limits_{-20}^{20} \\left(-\\dfrac{1}{100}x^2 + 14\\right)^2 \\text{d}x = \\dfrac{38\\,848}{3} \\text{ (ml)} \\approx 12{,}95$ (lít).<br>- <strong>Đúng</strong>.<br>  Tâm bóng đèn ứng với $x=22-20=2$. Tại độ cao $x$, mặt cắt là hình vuông có nửa đường chéo $f(x)$ nên nửa cạnh bằng $\\dfrac{f(x)}{\\sqrt2}$; điểm trên lồng đèn gần trục nhất là trung điểm cạnh. Do đó $d^2=(x-2)^2+\\dfrac{f^2(x)}{2}$ với $f(x)=-\\dfrac{x^2}{100}+14$. Xét $g(x)=(x-2)^2+\\dfrac12\\left(-\\dfrac{x^2}{100}+14\\right)^2$, $g'(x)=0\\Leftrightarrow x\\approx 2{,}3241$, khi đó $d_{\\min}\\approx 9{,}8666$ cm. Điều kiện $d_{\\min}-R\\ge 7$ nên $R_{\\max}\\approx 9{,}8666-7=2{,}8666$ cm.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
