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
  }
];
