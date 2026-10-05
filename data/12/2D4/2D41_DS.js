window.dungSai2D41 = [
  {
    "id": "2D412DS1",
    "question": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thoả mãn $f'(x)=2x+1$ và $f(0)=1$.",
    "subQuestions": [
      {
        "text": "$f(x)=x^2+x+1$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^2f'(x)\\mathrm{\\,d}x=9$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^2[f(x)-2]\\mathrm{\\,d}x=8$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^2\\left[f(x)-2xf'(x)\\right]\\mathrm{\\,d}x=-8$",
        "answer": true
      }
    ],
    "explain": "Ta có $f'(x)=2x+1\\Rightarrow\\displaystyle\\int f(x)\\mathrm{\\,d}x=x^2+x+C$.<br>  Vì $f(0)=1\\Rightarrow C=1\\Rightarrow f(x)=x^2+x+1$.  <br>- Ta có $f(x)=x^2+x+1$.<br>- Ta có $\\displaystyle\\int\\limits_0^2f'(x)\\mathrm{\\,d}x=f(x)\\Big|_0^2=(2x+1)\\Big|_0^2=4$.<br>- Ta có $\\displaystyle\\int\\limits_0^2[f(x)-2]\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^2\\left(x^2+x-1\\right)\\mathrm{\\,d}x=\\left(\\dfrac{x^3}{3}+\\dfrac{x^2}{2}-x\\right)\\Bigg|_0^2=\\dfrac{8}{3}$.<br>- Ta có   $\\displaystyle\\int\\limits_0^2\\left[f(x)-2xf'(x)\\right]\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^2\\left(x^2+x+1-2x(2x+1)\\right)\\mathrm{\\,d}x$<br>$= \\displaystyle\\int\\limits_0^2\\left(-3x^2-x+1\\right)\\mathrm{\\,d}x$<br>$= \\left(-x^3-\\dfrac{x^2}{2}+x\\right)\\Bigg|_0^2=-8.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412DS2",
    "question": "Cho hàm số $f(x)=3x^2+1$. Gọi $F(x)$ là nguyên hàm của $f(x)$ trên $\\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "$f'(x)=F(x), \\forall x \\in \\mathbb{R}$",
        "answer": false
      },
      {
        "text": "$F(x)=x^3+x+C$",
        "answer": true
      },
      {
        "text": "Biết $F(0)=1$. Giá trị của $F(2)$ bằng 11",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int (f(x)-f'(x))\\mathrm{\\,d}x= x^3-3x^2+x+C$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Ta có $F'(x)=f(x), \\forall x \\in \\mathbb{R}$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int f(x)\\mathrm{\\,d}x = \\displaystyle\\int (3x^2+1)\\mathrm{\\,d}x = x^3+x+C$.<br>- <strong>Đúng</strong>.<br>  $F(0)=1$ nên $0^3+0+C=1\\Rightarrow C=1$.<br>  $F(x)=x^3+x+1\\Rightarrow F(2)=11$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int (f(x)-f'(x))\\mathrm{\\,d}x =\\displaystyle\\int (3x^2+1-6x)\\mathrm{\\,d}x = x^3-3x^2+x+C$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412DS3",
    "question": "Cho hàm số $f(x)=4x^3-2x$. Biết $F(x)$ là nguyên hàm của hàm số $f(x)$.",
    "subQuestions": [
      {
        "text": "$F'(x)=4x^3-2x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits f(x)\\mathrm{\\,d}x=x^4-x^2+C$",
        "answer": true
      },
      {
        "text": "Một nguyên hàm $F(x)$ của hàm số $f(x)$ thoả mãn $F(0)=1$ là $F(x)=x^4-x^2-1$",
        "answer": false
      },
      {
        "text": "Biết $F(0)=1$. Khi đó $F(-1)=-1$",
        "answer": false
      }
    ],
    "explain": "<br>- Do $F(x)$ là nguyên hàm của hàm số $f(x)$ nên $F'(x)=f(x)=4x^3-2x$.<br>- Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\left(4x^3-2x\\right)\\mathrm{\\,d}x=x^4-x^2+C$.<br>- Do $F(x)$ là nguyên hàm của hàm số $f(x)$ nên $F(x)=\\displaystyle\\int f(x)\\mathrm{\\,d}x=x^4-x^2+C$.<br>  Do $F(0)=1$ nên $C=1$, suy ra $F(x)=x^4-x^2+1$.<br>- Do $F(x)$ là nguyên hàm của hàm số $f(x)$ và $F(0)=1$ nên $F(x)=x^4-x^2+1$.<br>  Suy ra $F(-1)=(-1)^4-(-1)^2+1=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412DS4",
    "question": "Cho hàm số $f(x)$ xác định trên khoảng $K$. Gọi $F(x)$ là họ nguyên hàm của $f(x)$ trên $K$.",
    "subQuestions": [
      {
        "text": "$F'(x) = f(x)$",
        "answer": true
      },
      {
        "text": "Nếu $f(x) = \\dfrac{1}{x}$ thì $F(x) = \\ln x + C$",
        "answer": false
      },
      {
        "text": "Nếu $f(x) = \\cos x$ thì $F(x) = \\sin x$",
        "answer": false
      },
      {
        "text": "Nếu $f(x) = \\mathrm{e}^x$ thì $F(x) = \\mathrm{e}^x + C$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Định nghĩa nguyên hàm $F'(x) = f(x)$.<br>- <strong>Sai</strong>. Nguyên hàm của $\\dfrac{1}{x}$ là $\\ln|x| + C$ chứ không phải $\\ln x + C$ với mọi $x$.<br>- <strong>Sai</strong>. $\\displaystyle\\int \\cos x \\,\\mathrm{\\,d}x = \\sin x + C$ nên thiếu hằng số $C$.<br>- <strong>Đúng</strong>. $\\displaystyle\\int \\mathrm{e}^x \\mathrm{d}x = \\mathrm{e}^x + C$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D417DS5",
    "question": "Một xe ô tô đang chạy với vận tốc $72$ (km/h) thì người lái xe bất ngờ phát hiện chướng ngại vật trên đường cách đó $50$ (m). Người lái xe phản ứng một giây, sau đó đạp phanh khẩn cấp. Kể từ thời điểm này, ô tô chuyển động chậm dần đều với tốc độ $v(t) = -10t + 20$ (m/s), trong đó $t$ là thời gian tính bằng giây kể từ lúc đạp phanh. Gọi $s(t)$ là quãng đường xe ô tô đi được trong $t$ (giây) kể từ lúc đạp phanh. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Quãng đường $s(t)$ mà xe ô tô đi được trong thời gian $t$ (giây) là một nguyên hàm của hàm số $v(t)$",
        "answer": true
      },
      {
        "text": "$s(t) = -5t^2 + 20t$",
        "answer": true
      },
      {
        "text": "Thời gian kể từ lúc đạp phanh đến khi xe ô tô dừng hẳn là $20$ giây",
        "answer": false
      },
      {
        "text": "Xe ô tô đó không va vào chướng ngại vật ở trên đường",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br> Vì quãng đường $s(t)$ là nguyên hàm của vận tốc $v(t)$.<br>- <strong>Đúng</strong>.<br> Vì $s(t) = \\displaystyle\\int\\limits v(t)\\,\\mathrm{d}t = \\displaystyle\\int\\limits (-10t + 20)\\,\\mathrm{d}t = -5t^2 + 20t + C$.<br>  Mà $s(0) = 0$ nên $C = 0$. Vậy $s(t)=-5t^2+20t$.<br>- <strong>Sai</strong>.<br> Xe dừng hẳn khi $v(t) = 0 \\Rightarrow -10t + 20 = 0 \\Rightarrow t = 2$ giây.<br>- <strong>Đúng</strong>.<br> Trong 1 giây phản ứng, xe đi được $20\\,\\text{m}$ (vì $72\\,\\text{km/h} = 20\\,\\text{m/s}$).<br>  Sau đó, quãng đường phanh là $s(2) = -5 \\cdot 2^2 + 20 \\cdot 2 = 20\\,\\text{m}$.<br> Tổng cộng là $20 + 20 = 40\\,\\text{m} &lt; 50\\,\\text{m}$ nên không va chạm.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412DS6",
    "question": "Cho $F(x)$ là một nguyên hàm của hàm số $f(x)=2x-2$, biết rằng $F(1)=1$. Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "$F(x)$ luôn xác định trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "$F(x)=x^2-2x$",
        "answer": false
      },
      {
        "text": "$F(x) &gt; 0$, với mọi $x \\in \\mathbb{R}$",
        "answer": true
      },
      {
        "text": "$F(-2)=2$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  $F(x)=x^2-2x+C$.  Suy ra $F(x)$ luôn xác định trên $\\mathbb{R}$.<br>- <strong>Sai</strong>.<br>  $F(x)=x^2-2x+C$ mà $F(1)=1 \\Rightarrow C=2$.<br>  Vậy $F(x)=x^2-2x+2$.<br>- <strong>Đúng</strong>.<br>  Ta có $F(x)=x^2-2x+2=(x-1)^2+1&gt;0$, $\\forall x\\in \\mathbb{R}$.<br>- <strong>Sai</strong>.<br>  $F(-2)=(-2)^2-2\\cdot(-2)+2=10.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D413DS2",
    "question": "Cho hàm số $f(x)$, $g(x)$ liên tục trên $\\mathbb{R}$. Biết $F(x)=\\sin x$ là một nguyên hàm của $f(x)$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int[f(x)+2g(x)]\\mathrm{\\,d}x=\\displaystyle\\int f(x)\\mathrm{\\,d}x+2\\displaystyle\\int g(x)\\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int[f(x)\\cdot g(x)]\\mathrm{\\,d}x=\\displaystyle\\int f(x)\\mathrm{\\,d}x\\cdot\\displaystyle\\int g(x)\\mathrm{\\,d}x$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int\\left(f(x)+\\mathrm{e}^x\\right)\\mathrm{\\,d}x=\\sin x+\\mathrm{e}^x+C$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\left(f^2(x)+\\sin^2x\\right)\\mathrm{\\,d}x=2x+C$",
        "answer": false
      }
    ],
    "explain": "Vì $F(x)=\\sin x$ là một nguyên hàm của $f(x)$ nên $f(x)=F'(x)=\\cos x$.  <br>- Ta có $\\displaystyle\\int[f(x)+2g(x)]\\mathrm{\\,d}x=\\displaystyle\\int f(x)\\mathrm{\\,d}x+2\\displaystyle\\int g(x)\\mathrm{\\,d}x$.<br>- Ta có $\\displaystyle\\int[f(x)\\cdot g(x)]\\mathrm{\\,d}x\\ne \\displaystyle\\int f(x)\\mathrm{\\,d}x\\displaystyle\\int g(x)\\mathrm{\\,d}x$.<br>- $\\displaystyle\\int\\left(f(x)+\\mathrm{e}^x\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\left(\\cos x+\\mathrm{e}^x\\right)\\mathrm{\\,d}x=\\sin x+\\mathrm{e}^x+C$.<br>- Ta có $\\displaystyle\\int\\left(f^2(x)+\\sin^2x\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\left(\\cos^2x+\\sin^2x\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\mathrm{\\,d}x=x+C$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D414DS3",
    "question": "Trên $(0;+\\infty)$, cho hai hàm số $f(x)=\\sqrt{\\mathrm{e}^x}$ và $g(x)=\\sqrt{x}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits f(x) \\cdot g(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits \\sqrt{x\\mathrm{e}^x} \\mathrm{\\,d}x$",
        "answer": true
      },
      {
        "text": "Một nguyên hàm của $g(x)$ là $G(x)=\\dfrac{2\\sqrt{x^3}}{3}$",
        "answer": true
      },
      {
        "text": "Một nguyên hàm của $f(x)$ là $F(x)=\\sqrt{\\mathrm{e}^x}$",
        "answer": false
      },
      {
        "text": "Hàm số $y=F(x)-G(x)$ đồng biến trên $(0;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Trên $(0;+\\infty)$, ta có  \\[  \\displaystyle\\int\\limits f(x) \\cdot g(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits \\sqrt{\\mathrm{e}^x} \\cdot \\sqrt{x} \\mathrm{\\,d}x=\\displaystyle\\int\\limits \\sqrt{x\\mathrm{e}^x} \\mathrm{\\,d}x.  \\]<br>- <strong>Đúng</strong>.<br>  Trên $(0;+\\infty)$, ta có  \\[  \\displaystyle\\int\\limits g(x) \\mathrm{\\,d}x  =\\displaystyle\\int\\limits \\sqrt{x} \\mathrm{\\,d}x  =\\displaystyle\\int\\limits x^{\\tfrac{1}{2}} \\mathrm{\\,d}x  =\\dfrac{x^{\\tfrac{3}{2}}}{\\dfrac{3}{2}}+C = \\dfrac{2\\sqrt{x^3}}{3}+C.  \\]  Do đó, $G(x)=\\dfrac{2\\sqrt{x^3}}{3}$ là một nguyên hàm của $g(x)$.<br>- <strong>Sai</strong>.<br>  Trên $(0;+\\infty)$, ta có  \\[  \\displaystyle\\int\\limits f(x) \\mathrm{\\,d}x  =\\displaystyle\\int\\limits \\sqrt{\\mathrm{e}^x} \\mathrm{\\,d}x  =\\displaystyle\\int\\limits \\mathrm{e}^{\\tfrac{x}{2}} \\mathrm{\\,d}x  =2\\mathrm{e}^{\\tfrac{x}{2}}+C=2\\sqrt{\\mathrm{e}^x}+C.  \\]  Do đó, $F(x)=\\sqrt{\\mathrm{e}^x}$ <strong>không</strong> là một nguyên hàm của $f(x)$.<br>- <strong>Đúng</strong>.<br>  Xét hàm số $y=F(x)-G(x)$ trên $(0;+\\infty)$ có $y'=f(x)-g(x)=\\sqrt{\\mathrm{e}^x}-\\sqrt{x}&gt;0$ (do $\\mathrm{e}^x&gt;x$ với mọi $x \\in (0;+\\infty)$).<br>  Vậy hàm số $y=F(x)-G(x)$ đồng biến trên $(0;+\\infty)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D411DS1",
    "question": "Cho hàm số $f(x)=3\\sin x-\\dfrac{2}{x}+4^x$ xác định trên khoảng $(0;+\\infty)$. Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-3\\cos x-2\\ln x+\\dfrac{4^x}{\\ln 4}+C$",
        "answer": true
      },
      {
        "text": "Một nguyên hàm của $g(x)=\\cos x$ là $G(x)=-\\sin x$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int \\dfrac{1}{x^2}\\mathrm{\\,d}x=-\\dfrac{1}{x}+C$",
        "answer": true
      },
      {
        "text": "Trên khoảng $(0;+\\infty)$, mọi nguyên hàm của $f(x)$ đều có dạng $-3\\cos x-2\\ln x+\\dfrac{4^x}{\\ln 4}+2025$",
        "answer": false
      }
    ],
    "explain": "<br>- Áp dụng bảng nguyên hàm cơ bản: $\\displaystyle\\int 3\\sin x\\,\\mathrm{d}x=-3\\cos x$, $\\displaystyle\\int\\dfrac{-2}{x}\\mathrm{\\,d}x=-2\\ln x$ (vì $x>0$), $\\displaystyle\\int 4^x\\mathrm{\\,d}x=\\dfrac{4^x}{\\ln 4}$. Cộng lại được $\\displaystyle\\int f(x)\\mathrm{\\,d}x=-3\\cos x-2\\ln x+\\dfrac{4^x}{\\ln 4}+C$. Suy ra mệnh đề đúng.<br>- Vì $(\\sin x)'=\\cos x$ nên $\\displaystyle\\int \\cos x\\,\\mathrm{d}x=\\sin x+C$, không phải $-\\sin x$ (đó là nguyên hàm của $-\\cos x$). Suy ra mệnh đề sai.<br>- Đây là công thức cơ bản trong bảng nguyên hàm: $\\displaystyle\\int \\dfrac{1}{x^2}\\mathrm{\\,d}x=-\\dfrac{1}{x}+C$. Suy ra mệnh đề đúng.<br>- Họ nguyên hàm của $f(x)$ có dạng $-3\\cos x-2\\ln x+\\dfrac{4^x}{\\ln 4}+C$ với $C$ là <strong>một hằng số bất kì</strong> thuộc $\\mathbb{R}$, không phải chỉ riêng giá trị $C=2025$. Suy ra mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D413DS3",
    "question": "Cho hai hàm số $f(x)$, $g(x)$ liên tục trên $\\mathbb{R}$, biết $\\displaystyle\\int f(x)\\mathrm{\\,d}x=x^2-3x+C$ và $\\displaystyle\\int g(x)\\mathrm{\\,d}x=\\sin x+C$. Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\left[2f(x)-3g(x)\\right]\\mathrm{\\,d}x=2x^2-6x-3\\sin x+C$",
        "answer": true
      },
      {
        "text": "$f(0)+g(0)=-3$",
        "answer": false
      },
      {
        "text": "Hàm số $h(x)=f(x)\\cdot g(x)$ có một nguyên hàm là $H(x)=(x^2-3x)\\sin x$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int \\left[f(x)+g(x)\\right]\\mathrm{\\,d}x = x^2-3x+\\sin x+C$",
        "answer": true
      }
    ],
    "explain": "Từ giả thiết suy ra $f(x)=\\left(x^2-3x\\right)'=2x-3$ và $g(x)=(\\sin x)'=\\cos x$.<br>- Áp dụng tính chất tuyến tính: $\\displaystyle\\int\\left[2f(x)-3g(x)\\right]\\mathrm{\\,d}x=2\\displaystyle\\int f(x)\\mathrm{\\,d}x-3\\displaystyle\\int g(x)\\mathrm{\\,d}x=2x^2-6x-3\\sin x+C$. Suy ra mệnh đề đúng.<br>- Ta có $f(0)=2\\cdot 0-3=-3$ và $g(0)=\\cos 0=1$ nên $f(0)+g(0)=-3+1=-2$, không phải $-3$. Suy ra mệnh đề sai.<br>- Nguyên hàm của một tích hai hàm số <strong>không</strong> bằng tích của nguyên hàm từng hàm cộng lại theo kiểu đơn giản như vậy. Thật vậy, $H'(x)=(2x-3)\\sin x+(x^2-3x)\\cos x$, trong khi $f(x)g(x)=(2x-3)\\cos x$; hai biểu thức này không bằng nhau nên $H(x)$ không phải là nguyên hàm của $h(x)$. Suy ra mệnh đề sai.<br>- Áp dụng tính chất nguyên hàm của một tổng: $\\displaystyle\\int \\left[f(x)+g(x)\\right]\\mathrm{\\,d}x=\\displaystyle\\int f(x)\\mathrm{\\,d}x+\\displaystyle\\int g(x)\\mathrm{\\,d}x=x^2-3x+\\sin x+C$. Suy ra mệnh đề đúng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D417DS6",
    "question": "Một vật chuyển động trên đường thẳng với vận tốc thay đổi theo thời gian $v(t)=6t^2-4t+3$ (m/s), trong đó $t$ (giây, $t\\ge 0$) là thời gian tính từ lúc vật bắt đầu chuyển động. Biết tại thời điểm $t=0$, vật ở vị trí có toạ độ $x=2$ (m). Gọi $x(t)$ là toạ độ của vật tại thời điểm $t$. Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "$x(t)$ là một nguyên hàm của $v(t)$",
        "answer": true
      },
      {
        "text": "$x(t)=2t^3-2t^2+3t+2$",
        "answer": true
      },
      {
        "text": "Quãng đường vật đi được trong $2$ giây đầu tiên bằng $x(2)-x(0)$",
        "answer": true
      },
      {
        "text": "Vận tốc nhỏ nhất của vật bằng $3$ (m/s), đạt được tại thời điểm $t=0$",
        "answer": false
      }
    ],
    "explain": "<br>- Theo định nghĩa, toạ độ $x(t)$ là một nguyên hàm của vận tốc $v(t)$. Suy ra mệnh đề đúng.<br>- Ta có $x(t)=\\displaystyle\\int v(t)\\mathrm{\\,d}t=\\displaystyle\\int\\left(6t^2-4t+3\\right)\\mathrm{\\,d}t=2t^3-2t^2+3t+C$. Vì $x(0)=2$ nên $C=2$, suy ra $x(t)=2t^3-2t^2+3t+2$. Suy ra mệnh đề đúng.<br>- Xét $v(t)=6t^2-4t+3$ có $\\Delta'=4-18=-14&lt;0$ và hệ số $a=6&gt;0$ nên $v(t)&gt;0$ với mọi $t$, tức vật luôn di chuyển theo một chiều. Do đó quãng đường đi được trong $2$ giây đầu bằng $\\displaystyle\\int_0^2 v(t)\\mathrm{\\,d}t=x(2)-x(0)$. Suy ra mệnh đề đúng.<br>- Vận tốc nhỏ nhất đạt tại đỉnh parabol $t=\\dfrac{4}{2\\cdot 6}=\\dfrac{1}{3}$, khi đó $v\\left(\\dfrac{1}{3}\\right)=6\\cdot\\dfrac{1}{9}-4\\cdot\\dfrac{1}{3}+3=\\dfrac{2}{3}-\\dfrac{4}{3}+3=\\dfrac{7}{3}$, nhỏ hơn $v(0)=3$. Vậy vận tốc nhỏ nhất bằng $\\dfrac{7}{3}$, không phải $3$. Suy ra mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS1",
    "question": "Chi phí biên (chi phí tăng thêm khi sản xuất thêm một đơn vị sản phẩm) để sản xuất $x$ sản phẩm của một xưởng thủ công được cho bởi $C'(x)=0{,}3x^2-2x+15$ (nghìn đồng), với $x\\ge 0$. Biết chi phí cố định ban đầu (khi chưa sản xuất sản phẩm nào) là $200$ nghìn đồng. Gọi $C(x)$ là hàm chi phí để sản xuất $x$ sản phẩm. Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "$C(x)=0{,}1x^3-x^2+15x+200$",
        "answer": true
      },
      {
        "text": "Chi phí để sản xuất $10$ sản phẩm là $250$ nghìn đồng",
        "answer": false
      },
      {
        "text": "Nếu tăng sản lượng từ $10$ lên $20$ sản phẩm thì chi phí tăng thêm $\\displaystyle\\int_{10}^{20}C'(x)\\mathrm{\\,d}x$ (nghìn đồng)",
        "answer": true
      },
      {
        "text": "Chi phí biên tại thời điểm sản xuất được $5$ sản phẩm là $12{,}5$ nghìn đồng",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $C(x)=\\displaystyle\\int C'(x)\\mathrm{\\,d}x=\\displaystyle\\int\\left(0{,}3x^2-2x+15\\right)\\mathrm{\\,d}x=0{,}1x^3-x^2+15x+C$. Vì chi phí cố định ban đầu $C(0)=200$ nên $C=200$, suy ra $C(x)=0{,}1x^3-x^2+15x+200$. Suy ra mệnh đề đúng.<br>- Ta có $C(10)=0{,}1\\cdot 10^3-10^2+15\\cdot 10+200=100-100+150+200=350$ (nghìn đồng), không phải $250$. Suy ra mệnh đề sai.<br>- Theo công thức Newton–Leibniz, $C(20)-C(10)=\\displaystyle\\int_{10}^{20}C'(x)\\mathrm{\\,d}x$, đúng là chi phí tăng thêm khi tăng sản lượng từ $10$ lên $20$ sản phẩm. Suy ra mệnh đề đúng.<br>- Ta có $C'(5)=0{,}3\\cdot 5^2-2\\cdot 5+15=7{,}5-10+15=12{,}5$ (nghìn đồng). Suy ra mệnh đề đúng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412DS7",
    "question": "Cho hàm số $f(x) = x^2(x+3)$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle \\int \\limits {f(x)} \\mathrm{\\, d}x = \\displaystyle \\int \\limits {(x^3 + 3x^2)} \\mathrm{\\, d}x$",
        "answer": true
      },
      {
        "text": "$\\displaystyle \\int \\limits{f(x)} \\mathrm{\\, d}x = x^4 + x^3 + C$ ($C$ là hằng số)",
        "answer": false
      },
      {
        "text": "Một nguyên hàm $F(x)$ của hàm số $f(x)$ thoả mãn $F(2) = 15$ là $F(x) = \\dfrac{x^4}{4} + x^3 + 3$",
        "answer": true
      },
      {
        "text": "$\\displaystyle \\int \\limits {f(x)} \\mathrm{\\, d}x = \\displaystyle \\int \\limits {x^2} \\mathrm{\\, d}x \\cdot \\displaystyle \\int \\limits {(x+3)} \\mathrm{\\,d}x$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $f(x)=x^2(x+3)=x^3+3x^2$.<br> Suy ra $\\displaystyle \\int \\limits {f(x)} \\mathrm{\\, d}x = \\displaystyle \\int \\limits {(x^3 + 3x^2)} \\mathrm{\\, d}x$.<br>- <strong>Sai</strong>.<br>  Ta có $\\displaystyle \\int \\limits (x^3+3x^2)\\,dx=\\dfrac{x^4}{4}+x^3+C \\ne x^4+x^3+C$.<br>- <strong>Đúng</strong>.<br>  Ta có $F(x)=\\dfrac{x^4}{4}+x^3+C$.<br> Khi đó\t$F(2)=\\dfrac{16}{4}+8+C=4+8+C=12+C=15 \\Rightarrow C=3$.<br> Vậy $F(x)=\\dfrac{x^4}{4}+x^3+3$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle \\int \\limits f(x)\\mathrm{\\, d}x \\ne \\int x^2\\mathrm{\\, d}x \\cdot \\int (x+3)\\mathrm{\\, d}x$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D413DS8",
    "question": "Cho hàm số $f(x) = \\cos^2 \\dfrac{x}{2}$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle \\int f(x)\\mathrm{\\,d}x = \\dfrac{x}{2} - \\dfrac{1}{2}\\sin x + C$",
        "answer": false
      },
      {
        "text": "Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên khoảng $(-\\infty; +\\infty)$ và thỏa mãn $F(0)=3$ thì $F\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\pi}{12} + \\dfrac{11}{4}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle \\int\\limits_0^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x = a + b\\pi$ ($a, b \\in \\mathbb{Q}$), trong đó $a^2 + b = \\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "Diện tích của hình phẳng giới hạn bởi đồ thị hàm số $y=f(x)$, $y=x^2-4+\\cos^2 \\dfrac{x}{2}$ và hai đường thẳng $x=0, x=3$ bằng $\\dfrac{23}{3}$",
        "answer": true
      }
    ],
    "explain": "Ta có $f(x) = \\cos^2 \\dfrac{x}{2} = \\dfrac{1 + \\cos x}{2} = \\dfrac{1}{2} + \\dfrac{1}{2}\\cos x$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle \\int f(x) \\mathrm{\\,d}x = \\int \\left(\\dfrac{1}{2} + \\dfrac{1}{2}\\cos x\\right) \\mathrm{\\,d}x = \\dfrac{x}{2} + \\dfrac{1}{2}\\sin x + C$.<br>- <strong>Sai</strong>.<br>  Ta có $F(x) = \\dfrac{x}{2} + \\dfrac{1}{2}\\sin x + C$. <br> Vì $F(0)=3 \\Rightarrow \\dfrac{0}{2} + \\dfrac{1}{2}\\sin 0 + C = 3 \\Rightarrow C = 3$. <br> Khi đó $F\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\pi}{12} + \\dfrac{1}{2}\\sin\\dfrac{\\pi}{6} + 3 = \\dfrac{\\pi}{12} + \\dfrac{13}{4}$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle \\int\\limits_0^{\\frac{\\pi}{2}} f(x) \\mathrm{\\,d}x = \\left[ \\dfrac{x}{2} + \\dfrac{1}{2}\\sin x \\right]\\bigg|_0^{\\frac{\\pi}{2}} = \\left(\\dfrac{\\pi}{4} + \\dfrac{1}{2}\\right) - 0= \\dfrac{1}{2} + \\dfrac{1}{4}\\pi$. <br> Suy ra $a = \\dfrac{1}{2}$, $b = \\dfrac{1}{4}$. Vậy $a^2 + b = \\left(\\dfrac{1}{2}\\right)^2 + \\dfrac{1}{4} = \\dfrac{1}{2}$.<br>- <strong>Đúng</strong>.<br>  Diện tích $S = \\displaystyle \\int\\limits_0^3 |f(x) - (x^2 - 4 + f(x))|\\mathrm{\\,d}x = \\int\\limits_0^3 |4 - x^2|\\mathrm{\\,d}x$. <br> $S = \\displaystyle \\int\\limits_0^2 (4-x^2) \\mathrm{\\,d}x + \\int\\limits_2^3 (x^2-4) \\mathrm{\\,d}x = \\dfrac{16}{3} + \\dfrac{7}{3} = \\dfrac{23}{3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D413DS9",
    "question": "Cho $\\displaystyle\\int f(x)\\mathrm{\\,d}x = \\cos x + C$.",
    "subQuestions": [
      {
        "text": "$f(x) = \\sin x$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int f'(x)\\mathrm{\\,d}x = -\\sin x + C$",
        "answer": true
      },
      {
        "text": "$F(x)$ là một nguyên hàm của $f(x)$. Nếu $F(0)=-3$ thì $F\\left(\\dfrac{3\\pi}{2}\\right)=1$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int -2\\cos x \\cdot f(x)\\mathrm{\\,d}x = \\dfrac{1}{2}\\cos 2x + C$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $f(x) = (\\cos x + C)' = -\\sin x$.<br>- <strong>Đúng</strong>.<br>  Vì $f'(x) = (-\\sin x)' = -\\cos x$ nên $\\displaystyle\\int f'(x)\\mathrm{\\,d}x = \\displaystyle\\int -\\cos x\\mathrm{\\,d}x = -\\sin x + C$.<br>- <strong>Sai</strong>.<br>  $F(x) = \\displaystyle\\int f(x)\\mathrm{\\,d}x = \\cos x + C$.<br> Vì $F(0) = -3 \\Rightarrow \\cos 0 + C = -3 \\Rightarrow 1 + C = -3 \\Rightarrow C = -4$.<br> Vậy $F(x) = \\cos x - 4$. Khi đó $F\\left(\\dfrac{3\\pi}{2}\\right) = \\cos\\left(\\dfrac{3\\pi}{2}\\right) - 4 = 0 - 4 = -4$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int -2\\cos x \\cdot (-\\sin x)\\mathrm{\\,d}x = \\displaystyle\\int 2\\sin x \\cos x\\mathrm{\\,d}x = \\displaystyle\\int \\sin 2x\\mathrm{\\,d}x = -\\dfrac{1}{2}\\cos 2x + C$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D414DS10",
    "question": "Cho hàm số $f(x)=2x+\\mathrm{e}^x$, $g(x)=\\cos x$.",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\limits_1^1 [f(x)-g(x)]\\mathrm{\\,d}x=0$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x=\\mathrm{e}-1$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int g(x)\\mathrm{\\,d}x=\\sin x+C$ ($C\\in\\mathbb{R}$)",
        "answer": true
      },
      {
        "text": "$F(x)=\\displaystyle\\int [f(x)+g(x)]\\mathrm{\\,d}x=x^2+\\mathrm{e}^x-\\sin x+2026$ khi $F(0)=2026$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $\\displaystyle\\int\\limits_1^1 [f(x)-g(x)]\\mathrm{\\,d}x=0$ vì tích phân có cận trên và cận dưới bằng nhau.<br>- <strong>Sai</strong>.<br>  Ta có $\\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^1 (2x+\\mathrm{e}^x)\\mathrm{\\,d}x = \\left( x^2+\\mathrm{e}^x \\right)\\bigg|_0^1 = (1+\\mathrm{e})-(0+1) = \\mathrm{e}$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\displaystyle\\int g(x)\\mathrm{\\,d}x = \\displaystyle\\int \\cos x\\mathrm{\\,d}x = \\sin x+C$, với $C$ là hằng số.<br>- <strong>Sai</strong>.<br>  Ta có $\\displaystyle\\int [f(x)+g(x)]\\mathrm{\\,d}x = \\displaystyle\\int (2x+\\mathrm{e}^x+\\cos x)\\mathrm{\\,d}x = x^2+\\mathrm{e}^x+\\sin x+C$.<br> Vì $F(0)=2026$ nên $0^2+\\mathrm{e}^0+\\sin 0+C=2026 \\Leftrightarrow 1+C=2026 \\Leftrightarrow C=2025$.<br> Vậy $F(x)=x^2+\\mathrm{e}^x+\\sin x+2025$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS11",
    "question": "Một quần thể vi khuẩn ban đầu có $1\\,000$ con. Gọi $P(t)$ là số lượng vi khuẩn của quần thể đó tại thời điểm $t$ tính theo giờ $\\left(t\\geqslant0\\right)$. Tốc độ tăng trưởng vi khuẩn của quần thể này tại thời điểm $t$ được cho bởi hàm số $P'(t)=kt$, trong đó $k$ là một hằng số. Biết rằng sau $2$ giờ, số lượng vi khuẩn của quần thể tăng lên thành $1\\,400$ vi khuẩn.",
    "subQuestions": [
      {
        "text": "Số lượng vi khuẩn $P(t)$ là một nguyên hàm của hàm số tốc độ tăng trưởng $P'(t)$",
        "answer": true
      },
      {
        "text": "Số lượng vi khuẩn tại thời điểm $t$ là $P(t)=200t^2+1\\,000$",
        "answer": false
      },
      {
        "text": "Sau $5$ giờ, số lượng vi khuẩn tăng thêm $2\\,500$ con so với thời điểm ban đầu",
        "answer": true
      },
      {
        "text": "Sau $9$ giờ số lượng vi khuẩn vượt quá $10\\,000$ con",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vì $P'(t)$ là đạo hàm của $P(t)$ nên $P(t)$ là một nguyên hàm của $P'(t)$.<br>- <strong>Sai</strong>.<br>  Ta có: $P(t) = \\displaystyle\\int P'(t)\\,\\mathrm{\\,d}t = k\\dfrac{t^2}{2} +C$.<br> Tại $t=0$, $P(0) = 1\\,000 \\Leftrightarrow C = 1\\,000$.<br> Theo đề bài, ta có: $P(2) = 1\\,400 \\Leftrightarrow k\\dfrac{2^2}{2}+1\\,000 = 1\\,400 \\Leftrightarrow k = 200$.<br> Vậy $P(t) = 100t^2+1\\,000$.<br>- <strong>Đúng</strong>.<br>  $\\Delta P = P(5) - P(0) = 100\\left(5^2-0\\right)= 2\\,500$.<br>- <strong>Sai</strong>.<br>  $P(9)=100\\cdot 9^2+1\\,000=9\\,100&lt;10\\,000$ nên mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS12",
    "question": "Một lon sữa cho trẻ em được lấy ra khỏi tủ lạnh và đặt trên bàn để rã đông. Nhiệt độ lon sữa tại thời điểm lấy ra khỏi tủ là $-4^\\circ C$ và sau $t$ giờ, tốc độ tăng nhiệt độ của lon sữa được cho bởi công thức $T'(t)=7\\cdot\\mathrm{e}^{-0{,}35t}$ ($^\\circ$C/giờ) cho đến khi lon sữa đạt nhiệt độ môi trường là $10^\\circ C$.",
    "subQuestions": [
      {
        "text": "Sau $2$ giờ, tốc độ thay đổi nhiệt độ của lon sữa bằng $3{,}48^\\circ$C/giờ (làm tròn kết quả đến hai chữ số thập phân)",
        "answer": true
      },
      {
        "text": "Nhiệt độ của lon sữa được tính từ thời điểm lấy ra khỏi tủ lạnh cho đến khi lon sữa đạt nhiệt độ môi trường được tính bởi công thức $T(t)=-20\\cdot\\mathrm{e}^{-0{,}35t}$",
        "answer": false
      },
      {
        "text": "Thời gian để lon sữa đạt nhiệt độ môi trường là $3{,}44$ giờ (làm tròn kết quả đến hai chữ số thập phân của giờ)",
        "answer": true
      },
      {
        "text": "Ngay sau khi đạt nhiệt độ môi trường, lon sữa được đưa vào máy hâm sữa. Tốc độ tăng nhiệt độ của lon sữa trong máy sau $t$ giờ được xác định bởi $L'(t)=k\\cdot\\mathrm{e}^{-0{,}22t}$ ($k$ là hằng số). Lon sữa được coi là đạt yêu cầu khi nhiệt độ lon sữa bằng $70^\\circ C$. Biết rằng thời gian cần thiết để hâm nóng lon sữa là 5 phút thì hằng số $k\\in(720;730)$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Tốc độ thay đổi nhiệt độ tại $t=2$ là $T'(2)=7\\cdot\\mathrm{e}^{-0{,}35\\cdot2}=7\\cdot\\mathrm{e}^{-0{,}7}\\approx3{,}476\\approx3{,}48^\\circ C$/giờ.<br>- <strong>Sai</strong>.<br>  Ta có $T(t)=\\displaystyle\\int T'(t)\\mathrm{\\,d}t=\\displaystyle\\int7\\cdot\\mathrm{e}^{-0{,}35t}\\mathrm{\\,d}t=\\dfrac{7}{-0{,}35}\\cdot\\mathrm{e}^{-0{,}35t}+C=-20\\cdot\\mathrm{e}^{-0{,}35t}+C$. <br> Tại thời điểm $t=0$, nhiệt độ là $-4^\\circ C \\Rightarrow T(0)=-20\\cdot\\mathrm{e}^0+C=-4\\Rightarrow C=16$. <br> Vậy công thức đúng phải là $T(t)=16-20\\mathrm{e}^{-0{,}35t}$.<br>- <strong>Đúng</strong>.<br>  Lon sữa đạt nhiệt độ môi trường khi $T(t)=10$.<br> Khi đó $$\\begin{aligned} &&16-20\\mathrm{e}^{-0{,}35t}=10\\\\ &\\Leftrightarrow&20\\mathrm{e}^{-0{,}35t}=6\\\\ &\\Leftrightarrow&\\mathrm{e}^{-0{,}35t}=0{,}3\\\\ &\\Rightarrow&t=\\dfrac{\\ln(0{,}3)}{-0{,}35}\\\\ &&t\\approx3{,}44\\text{ (giờ)}. \\end{aligned}$$ Vậy thời gian để lon sữa đạt nhiệt độ môi trường là $t\\approx3{,}44$ giờ.<br>- <strong>Đúng</strong>.<br>  Đổi $5$ phút $=\\dfrac{1}{12}$ giờ.<br> Nhiệt độ tăng thêm là $70-10=60^\\circ C$. <br> Ta có $$\\begin{aligned} &&\\displaystyle\\int_{0}^{\\frac{1}{12}}k\\cdot\\mathrm{e}^{-0{,}22t}\\mathrm{\\,d}t=60\\\\ &\\Leftrightarrow&k\\cdot\\left[\\dfrac{\\mathrm{e}^{-0{,}22t}}{-0{,}22}\\right]\\bigg|_{0}^{\\frac{1}{12}}=60. \\\\ &\\Leftrightarrow&k\\cdot\\dfrac{\\mathrm{e}^{\\frac{-0{,}22}{12}}-1}{-0{,}22} = 60\\\\ &\\Leftrightarrow&k\\cdot\\dfrac{1-\\mathrm{e}^{\\frac{-0{,}22}{12}}}{0{,}22}=60. \\\\ &\\Rightarrow&k=\\dfrac{60\\cdot0{,}22}{1-\\mathrm{e}^{\\frac{-0{,}22}{12}}}\\\\ &\\Rightarrow&k\\approx726{,}62. \\end{aligned}$$ <br> Vậy $k\\in(720;730)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS13",
    "question": "Một bồn chứa nước đang chứa $200$ lít nước. Người ta bắt đầu bơm nước vào bồn qua một đường ống. Tại thời điểm $t$ (phút), tốc độ dòng chảy của nước vào bồn được xác định bởi hàm số $v(t) = 6t^2 + 8t$ (lít/phút). Gọi $V(t)$ là thể tích nước có trong bồn tại thời điểm $t$.",
    "subQuestions": [
      {
        "text": "Tốc độ dòng chảy của nước vào bồn tại thời điểm $t=5$ (phút) là $190$ (lít/phút)",
        "answer": true
      },
      {
        "text": "Tốc độ dòng chảy tăng theo thời gian",
        "answer": true
      },
      {
        "text": "Hàm số thể tích $V(t)$ là một nguyên hàm của hàm tốc độ dòng chảy $v(t)$ và có dạng tổng quát là $V(t) = 6t^3 + 4t^2 + C$ ($C$ là hằng số)",
        "answer": false
      },
      {
        "text": "Sau $10$ phút bơm, nếu bồn có dung tích $2\\,500$ lít thì nước sẽ tràn ra ngoài",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Tại thời điểm $t = 5$, tốc độ dòng chảy của nước vào bồn là $v(5) = 6 \\cdot 5^2 + 8 \\cdot 5 = 150 + 40 = 190$ (lít/phút).<br>- <strong>Đúng</strong>.<br>  Ta có đạo hàm của hàm tốc độ dòng chảy là $v^{\\prime}(t) = 12t + 8 &gt; 0$ với mọi $t &gt; 0$.<br> Do đó tốc độ dòng chảy luôn tăng theo thời gian.<br>- <strong>Sai</strong>.<br>  Thể tích nước bơm thêm vào bồn là một nguyên hàm của hàm tốc độ dòng chảy. <br> Ta có thể tích nước trong bồn tại thời điểm $t$ là $$V(t) = \\displaystyle\\int v(t) \\mathrm{d}t = \\displaystyle\\int \\left( 6t^2 + 8t \\right) \\mathrm{d}t = 2t^3 + 4t^2 + C \\quad \\text{(với $C$ là hằng số).}$$<br>- <strong>Đúng</strong>.<br>  Theo tính toán ở trên, hàm số thể tích $V(t)$ có dạng tổng quát là $V(t) = 2t^3 + 4t^2 + C$.<br> Tại thời điểm ban đầu $t = 0$, bồn chứa $200$ lít nước nên $V(0) = 200 \\Rightarrow C = 200$.<br> Vậy hàm số thể tích là $V(t) = 2t^3 + 4t^2 + 200$.<br> Sau $10$ phút, thể tích nước trong bồn là $V(10) = 2 \\cdot 10^3 + 4 \\cdot 10^2 + 200 = 2\\,600$ (lít).<br> Vì $2\\,600 &gt; 2\\,500$ nên nếu bồn có dung tích $2\\,500$ lít thì nước sẽ tràn ra ngoài.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS14",
    "question": "Một xe ô tô đang chạy trên đường cao tốc với tốc độ $90$ (km/h) thì tài xế nhìn thấy biển báo trạm thu phí ở phía trước cách đó $400$ (m). Sau $4$ giây, tài xế đạp nhẹ phanh, kể từ đó xe chạy chậm dần đều với gia tốc $2$ (m/s$^2$) cho đến khi tốc độ xe giảm về tốc độ quy định khi qua các làn thu phí tự động là $30$ (km/h). Gọi $t$ (đơn vị giây) là thời gian kể từ lúc đạp phanh cho đến khi giảm về tốc độ $30$ (km/h).",
    "subQuestions": [
      {
        "text": "Vận tốc của ô tô kể từ lúc đạp phanh đến khi giảm về tốc độ $30$ (km/h) là $v(t) = 25 - 2t$ (m/s)",
        "answer": true
      },
      {
        "text": "Thời gian kể từ lúc đạp phanh đến khi giảm về tốc độ $30$ (km/h) là $9$ giây",
        "answer": false
      },
      {
        "text": "Quãng đường xe đi được kể từ lúc đạp phanh đến khi giảm về tốc độ $30$ (km/h) là $139$ (m) (làm tròn đến hàng đơn vị)",
        "answer": true
      },
      {
        "text": "Khi giảm về tốc độ $30$ (km/h), khoảng cách giữa xe và trạm thu phí là $161$ (m) (làm tròn đến hàng đơn vị)",
        "answer": true
      }
    ],
    "explain": "Vận tốc ban đầu là $v_0 = 90$ (km/h) hay $v_0 = \\dfrac{90 \\cdot 1\\,000}{3\\,600}$ (m/s) $= 25$ (m/s).<br> Vận tốc lúc sau là $v_t = 30$ (km/h) hay $v_t = \\dfrac{30 \\cdot 1\\,000}{3\\,600}$ (m/s) $= \\dfrac{25}{3}$ (m/s) $\\approx 8{,}33$ (m/s).<br>- <strong>Đúng</strong>.<br>  Xe chuyển động chậm dần đều với gia tốc $a = -2$ (m/s$^2$) (vì ngược chiều chuyển động).<br> Công thức vận tốc là $v(t) = v_0 + at = 25 - 2t$ (m/s).<br>- <strong>Sai</strong>.<br>  Khi giảm về tốc độ $30$ (km/h) hay $\\dfrac{25}{3}$ (m/s). Ta có \\[\\dfrac{25}{3} = 25 - 2t \\Rightarrow 2t = 25 - \\dfrac{25}{3} = \\dfrac{50}{3} \\Rightarrow t = \\dfrac{25}{3} \\approx 8{,}33 \\text{ (giây)}.\\]<br>- <strong>Đúng</strong>.<br>  Quãng đường xe đi được kể từ lúc đạp phanh đến khi giảm về tốc độ $30$ (km/h) là \\[\\displaystyle\\int\\limits_{0}^{\\frac{25}{3}} (25-2t)\\mathrm{\\,d}t=\\dfrac{1\\,250}{9}\\approx 138{,}9 \\text{ (m)}.\\]<br>- <strong>Đúng</strong>.<br>  Tổng quãng đường xe đi được từ lúc nhìn thấy biển báo trạm thu phí đến lúc giảm tốc độ về $30$ (km/h) là \\[S=25\\cdot 4+\\dfrac{1\\,250}{9}=\\dfrac{2\\,150}{9}\\text{ (m)}.\\] Khoảng cách còn lại đến trạm thu phí là \\[\\Delta S = 400 - \\dfrac{2\\,150}{9} =\\dfrac{1\\,450}{9} \\approx 161\\text{ (m)}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS15",
    "question": "Cây cà chua khi trồng có chiều cao $5$ cm. Tốc độ tăng chiều cao của cây cà chua sau khi trồng $t$ tuần được cho bởi hàm số $v(t) = -0{,}1t^3 + t^2$, đơn vị: centimét/tuần. Gọi $h(t)$ là độ cao của cây cà chua ở tuần thứ $t$, đơn vị: centimét.",
    "subQuestions": [
      {
        "text": "Vào thời điểm cây cà chua đó phát triển nhanh nhất, chiều cao của cây cà chua nhỏ hơn $54$ cm",
        "answer": false
      },
      {
        "text": "Cây cà chua đó có thể phát triển và cao hơn $88$ cm",
        "answer": true
      },
      {
        "text": "Tốc độ tăng chiều cao của cây cà chua sau khi trồng được $2$ tuần là $3{,}2$ centimét/tuần",
        "answer": true
      },
      {
        "text": "Giai đoạn tăng trưởng của cây cà chua đó kéo dài $8$ tuần",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Xét $v(t) = -0{,}1t^3 + t^2\\Rightarrow v'(t) = -0{,}3t^2 + 2t$.<br> Cho $v'(t)=0\\Leftrightarrow -0{,}3t^2 + 2t=0\\Leftrightarrow\\left[\\begin{aligned}&t=0\\\\&t = \\dfrac{20}{3}.\\end{aligned}\\right.$<br> Bảng biến thiên<br><img src=\"data/12/2D4/im2D41/2D41_ex12_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên suy ra thời điểm cây phát triển nhanh nhất khi $t = \\dfrac{20}{3}$ tuần.<br> Ta có $$\\begin{aligned} h(t)&=\\displaystyle\\int v(t)\\mathrm{\\,d}t\\\\ &=\\displaystyle\\int \\left(-0{,}1t^3 + t^2\\right)\\mathrm{d}t\\\\ &=-\\dfrac{1}{40}t^4+\\dfrac{1}{3}t^3+C. \\end{aligned}$$ Do cây cà chua khi trồng có chiều cao $5$ cm nên $h(0)=5$.<br> Suy ra $$\\begin{aligned} -\\dfrac{1}{40}\\cdot 0^4+\\dfrac{1}{3}\\cdot 0^3+C=5\\Rightarrow C=5. \\end{aligned}$$ Khi đó $h(t)=-\\dfrac{1}{40}t^4+\\dfrac{1}{3}t^3+5$.<br> Vậy $h\\left(\\dfrac{20}{3}\\right) = -\\dfrac{1}{40} \\cdot \\left(\\dfrac{20}{3}\\right)^4 + \\dfrac{1}{3} \\cdot \\left(\\dfrac{20}{3}\\right)^3 + 5 \\approx 54{,}38$ (cm).<br>- <strong>Đúng</strong>.<br>  Giai đoạn tăng trưởng kết thúc khi $v(t) = 0 \\Leftrightarrow -0{,}1t^3 + t^2 = 0 \\Leftrightarrow \\left[\\begin{aligned}&t=0\\\\&t=10.\\end{aligned}\\right.$<br> Chiều cao tối đa cây đạt được tại $t = 10$ (tuần). Do đó \\[ h(10) = -\\dfrac{1}{40}\\cdot 10^4 + \\dfrac{1}{3}\\cdot 10^3 + 5 \\approx 88{,}33 \\text{ (cm)}. \\]<br>- <strong>Đúng</strong>.<br>  Tốc độ tăng chiều cao của cây cà chua sau khi trồng được $2$ tuần là \\[v(2) = -0{,}1\\cdot 2^3 + 2^2 = 3{,}2 \\text{ (cm/tuần)}.\\]<br>- <strong>Sai</strong>.<br>  Cây tăng trưởng chiều cao khi $$\\begin{aligned} &&v(t) \\ge 0\\\\ &\\Leftrightarrow&-0{,}1t^3 + t^2\\ge 0\\\\ &\\Leftrightarrow& 0\\le t\\le 10. \\end{aligned}$$ Vậy, giai đoạn tăng trưởng của cây cà chua kéo dài $10$ tuần kể từ khi trồng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS16",
    "question": "Một địa phương A bị thiệt hại do lũ lụt được trợ cấp số tiền $2$ tỷ đồng. Số tiền này sẽ được giải ngân toàn bộ trong $100$ ngày kể từ khi bắt đầu giải ngân. Kết quả theo dõi cho thấy tốc độ giải ngân tiền trợ cấp $M'(t)$ (đơn vị: triệu đồng/ngày) tại thời điểm $t$ ngày ($0 \\le t \\le 100$) kể từ khi bắt đầu giải ngân được cho bởi công thức $M'(t) = k(100 - t)^2$ ($0 \\le t \\le 100$), trong đó $M(t)$ (đơn vị: triệu đồng) là số tiền đã giải ngân sau $t$ ngày ($0 \\le t \\le 100$) kể từ khi bắt đầu giải ngân và $k$ là hằng số khác không.",
    "subQuestions": [
      {
        "text": "$M(t) = k\\left(10\\,000t - 100t^2 + \\dfrac{t^3}{3}\\right) + C$",
        "answer": true
      },
      {
        "text": "$C = 2\\,000$",
        "answer": false
      },
      {
        "text": "$k = 0{,}6$",
        "answer": false
      },
      {
        "text": "Số tiền còn lại chưa giải ngân sau $40$ ngày kể từ khi bắt đầu giải ngân là $432$ triệu đồng",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $M(t)$ là nguyên hàm của $M'(t)$ nên $$\\begin{aligned} M(t) \t&= \\displaystyle\\int k(100 - t)^2 \\mathrm{\\,d}t \\\\ &= \\displaystyle\\int k(10\\,000 - 200t + t^2) \\mathrm{\\,d}t\\\\ &= k\\left(10\\,000t - \\dfrac{200t^2}{2} + \\dfrac{t^3}{3}\\right) + C \\\\ &= k\\left(10\\,000t - 100t^2 + \\dfrac{t^3}{3}\\right) + C. \\end{aligned}$$<br>- <strong>Sai</strong>.<br>  Tại thời điểm bắt đầu giải ngân ($t = 0$), số tiền đã giải ngân phải bằng $0$, tức là $M(0) = 0$.<br> Thay vào công thức ở ý trên ta được $M(0) = k\\cdot0 + C = 0 \\Rightarrow C = 0$.<br>- <strong>Sai</strong>.<br>  Tổng số tiền trợ cấp là $2$ tỷ đồng bằng $2\\,000$ triệu đồng. Sau $100$ ngày giải ngân hết nên $M(100) = 2\\,000$.<br> Với $C = 0$, ta có $$\\begin{aligned} && M(100) = k\\left(10\\,000 \\cdot 100 - 100 \\cdot 100^2 + \\dfrac{100^3}{3}\\right) = 2\\,000\\\\ &\\Leftrightarrow& k\\left(1\\,000\\,000 - 1\\,000\\,000 + \\dfrac{1\\,000\\,000}{3}\\right) = 2\\,000\\\\ &\\Leftrightarrow& k \\cdot \\dfrac{1\\,000\\,000}{3} = 2\\,000\\\\ &\\Leftrightarrow& k = \\dfrac{6\\,000}{1\\,000\\,000} = 0{,}006. \\end{aligned}$$<br>- <strong>Đúng</strong>.<br>  Số tiền đã giải ngân sau $40$ ngày là $$\\begin{aligned} M(40) \t&= 0{,}006\\left(10\\,000 \\cdot 40 - 100 \\cdot 40^2 + \\dfrac{40^3}{3}\\right)\\\\ &= 0{,}006\\left(400\\,000 - 160\\,000 + \\dfrac{64\\,000}{3}\\right) \\\\ &= 0{,}006 \\cdot \\dfrac{784\\,000}{3} \\\\ &= 1\\,568 \\text{(triệu đồng).} \\end{aligned}$$ Số tiền còn lại chưa giải ngân là $2\\,000 - 1\\,568 = 432$ (triệu đồng).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416DS17",
    "question": "Tại một nhà máy sản xuất một loại phân bón. Gọi $P(x)$ là lợi nhuận (tính theo triệu đồng) thu được từ việc bán $x$ (tấn) sản phẩm trong một tuần. Khi đó đạo hàm $P'(x)$ gọi là lợi nhuận cận biên, cho biết tốc độ tăng lợi nhuận theo lượng sản phẩm bán được. Giả sử lợi nhuận cận biên (tính theo triệu đồng trên tấn) của nhà máy được ước lượng bởi công thức $P'(x)=17-0{,}025x$ với $0 \\le x \\le 1\\,000$. Biết nhà máy lỗ $24$ triệu đồng nếu không bán được lượng sản phẩm nào trong tuần.",
    "subQuestions": [
      {
        "text": "Nếu nhà máy bán được $1{,}3$ tấn sản phẩm trên tuần thì nhà máy bắt đầu có lãi",
        "answer": false
      },
      {
        "text": "Lợi nhuận nhà máy thu được khi bán $80$ tấn sản phẩm trong tuần là $1$ tỉ $256$ triệu đồng",
        "answer": true
      },
      {
        "text": "Công thức lợi nhuận (tính theo triệu đồng) thu được từ việc bán $x$ (tấn) sản phẩm trong một tuần là $P(x)=17x-0{,}0125x^2+C$ với $C$ là một hằng số bất kỳ",
        "answer": false
      },
      {
        "text": "Phương trình $P'(x)=0$ có tập nghiệm là $S=\\{680\\}$",
        "answer": true
      }
    ],
    "explain": "Ta có $P'(x)=17-0{,}025x$.<br> Lợi nhuận $P(x)$ là một nguyên hàm của $P'(x)$.<br> Khi đó $P(x)=\\displaystyle\\int P'(x)\\mathrm{\\,d}x=\\displaystyle\\int(17-0{,}025x)\\mathrm{\\,d}x=17x-0{,}0125x^2+C$.<br> Vì nhà máy lỗ $24$ triệu đồng khi không bán được sản phẩm nào nên \\[P(0)=-24 \\Rightarrow 17 \\cdot 0 - 0{,}0125 \\cdot 0^2 + C = -24 \\Rightarrow C = -24.\\] Vậy công thức lợi nhuận là $P(x)=17x-0{,}0125x^2-24$.<br>- <strong>Sai</strong>.<br>  Ta có $P(1{,}3)=17 \\cdot 1{,}3 - 0{,}0125 \\cdot (1{,}3)^2 - 24 = -1{,}921125 &lt; 0$ nên nhà máy vẫn lỗ.<br>- <strong>Đúng</strong>.<br>  Ta có $P(80)=17 \\cdot 80 - 0{,}0125 \\cdot 80^2 - 24 = 1\\,256$ (triệu đồng), tương đương $1$ tỉ $256$ triệu đồng.<br>- <strong>Sai</strong>.<br>  Hằng số $C$ được xác định duy nhất là $C = -24$ chứ không phải hằng số bất kỳ.<br>- <strong>Đúng</strong>.<br>  Ta có $P'(x)=0 \\Leftrightarrow 17-0{,}025x=0 \\Leftrightarrow x=680$. Vậy tập nghiệm là $S=\\{680\\}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
