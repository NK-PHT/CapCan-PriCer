window.dungSai3G12 = [
  {
    "id": "3G121DS1",
    "question": "Cho hàm số $f(x)=\\begin{cases} x^2+x & \\text{khi } x\\le 1 \\\\ 3x-1 & \\text{khi } x\\gt 1 \\end{cases}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f$ liên tục tại $x=1$",
        "answer": true
      },
      {
        "text": "Đạo hàm bên trái của $f$ tại $x=1$ là $f'_-(1)=3$",
        "answer": true
      },
      {
        "text": "$f$ không có đạo hàm tại $x=1$ vì $f$ được cho bởi hai công thức khác nhau ở hai phía của $x=1$",
        "answer": false
      },
      {
        "text": "Hàm số $g(x)=|x-1|\\,(x+1)$ có đạo hàm tại $x=1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f(1)=1^2+1=2$, $\\displaystyle\\lim_{x\\to1^-}f(x)=2$, $\\displaystyle\\lim_{x\\to1^+}(3x-1)=2$ nên $f$ liên tục tại $x=1$.<br>- <strong>Đúng</strong>.<br>  $f'_-(1)=\\displaystyle\\lim_{\\Delta x\\to0^-}\\dfrac{(1+\\Delta x)^2+(1+\\Delta x)-2}{\\Delta x}=\\lim_{\\Delta x\\to0^-}\\dfrac{3\\Delta x+\\Delta x^2}{\\Delta x}=3$.<br>- <strong>Sai</strong>.<br>  $f'_+(1)=\\displaystyle\\lim_{\\Delta x\\to0^+}\\dfrac{3(1+\\Delta x)-1-2}{\\Delta x}=3=f'_-(1)$ nên $f$ có đạo hàm tại $x=1$ và $f'(1)=3$. Hàm từng khúc vẫn có thể có đạo hàm tại điểm nối.<br>- <strong>Sai</strong>.<br>  $g(1)=0$. $g'_+(1)=\\displaystyle\\lim_{\\Delta x\\to0^+}\\dfrac{\\Delta x\\,(2+\\Delta x)}{\\Delta x}=2$, $g'_-(1)=\\displaystyle\\lim_{\\Delta x\\to0^-}\\dfrac{-\\Delta x\\,(2+\\Delta x)}{\\Delta x}=-2$. Hai đạo hàm một phía khác nhau nên $g$ không có đạo hàm tại $x=1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau về đạo hàm:",
    "subQuestions": [
      {
        "text": "Với $x\\gt 0$, đạo hàm của $f(x)=x^x$ là $f'(x)=x\\cdot x^{x-1}$",
        "answer": false
      },
      {
        "text": "Đạo hàm của $f(x)=\\ln\\left(x+\\sqrt{x^2+1}\\right)$ là $f'(x)=\\dfrac{1}{\\sqrt{x^2+1}}$",
        "answer": true
      },
      {
        "text": "Nếu $f(x)=e^{\\sin 2x}$ thì $f'(0)=2$",
        "answer": true
      },
      {
        "text": "Nếu $f(x)=\\left(x^2+1\\right)^{10}$ thì $f'(1)=5120$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Công thức $(x^\\alpha)'=\\alpha x^{\\alpha-1}$ chỉ đúng khi số mũ $\\alpha$ là hằng số. Logarit hóa: $\\ln f(x)=x\\ln x$, đạo hàm hai vế: $\\dfrac{f'(x)}{f(x)}=\\ln x+1$, nên $f'(x)=x^x(\\ln x+1)$.<br>- <strong>Đúng</strong>.<br>  $f'(x)=\\dfrac{\\left(x+\\sqrt{x^2+1}\\right)'}{x+\\sqrt{x^2+1}}=\\dfrac{1+\\frac{x}{\\sqrt{x^2+1}}}{x+\\sqrt{x^2+1}}=\\dfrac{\\frac{\\sqrt{x^2+1}+x}{\\sqrt{x^2+1}}}{x+\\sqrt{x^2+1}}=\\dfrac{1}{\\sqrt{x^2+1}}$.<br>- <strong>Đúng</strong>.<br>  $f'(x)=e^{\\sin 2x}\\cdot(\\sin 2x)'=2\\cos 2x\\,e^{\\sin 2x}$, nên $f'(0)=2\\cdot1\\cdot e^0=2$.<br>- <strong>Sai</strong>.<br>  Đạo hàm hàm hợp: $f'(x)=10\\left(x^2+1\\right)^9\\cdot 2x=20x\\left(x^2+1\\right)^9$, nên $f'(1)=20\\cdot 2^9=10240\\neq 5120$ (giá trị $5120$ là do quên nhân đạo hàm của hàm trong $2x$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121DS3",
    "question": "Xét tính đúng sai của các mệnh đề sau về đạo hàm của hàm ngược, hàm ẩn và hàm cho bởi tham số:",
    "subQuestions": [
      {
        "text": "Cho $f(x)=e^x+2x$ và $g$ là hàm ngược của $f$. Khi đó $g'(1)=\\dfrac{1}{3}$",
        "answer": true
      },
      {
        "text": "Hàm ẩn $y=y(x)$ xác định bởi $x^2+xy+y^3=3$ và $y(1)=1$ có $y'(1)=-\\dfrac{3}{4}$",
        "answer": true
      },
      {
        "text": "Hàm số $y=y(x)$ cho bởi $x=t^2+1,\\ y=t^3-t$ $(t\\gt 0)$ có $\\dfrac{dy}{dx}\\Big|_{t=1}=2$",
        "answer": false
      },
      {
        "text": "Hàm số $y=y(x)$ cho bởi $x=t^2+1,\\ y=t^3-t$ $(t\\gt 0)$ có $\\dfrac{d^2y}{dx^2}\\Big|_{t=1}=1$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f'(x)=e^x+2\\gt 0$ nên $f$ đồng biến, có hàm ngược $g$. $f(0)=1$ nên $g(1)=0$ và $g'(1)=\\dfrac{1}{f'(0)}=\\dfrac{1}{e^0+2}=\\dfrac13$.<br>- <strong>Đúng</strong>.<br>  Đạo hàm hai vế theo $x$: $2x+y+xy'+3y^2y'=0\\Rightarrow y'=-\\dfrac{2x+y}{x+3y^2}$. Tại $(1;1)$: $y'(1)=-\\dfrac{3}{4}$.<br>- <strong>Sai</strong>.<br>  $x'(t)=2t$, $y'(t)=3t^2-1$ nên $\\dfrac{dy}{dx}=\\dfrac{y'(t)}{x'(t)}=\\dfrac{3t^2-1}{2t}$; tại $t=1$ bằng $\\dfrac{2}{2}=1\\neq2$ (giá trị $2$ là $y'(t)$, quên chia cho $x'(t)$).<br>- <strong>Đúng</strong>.<br>  Đặt $u(t)=\\dfrac{dy}{dx}=\\dfrac{3t}{2}-\\dfrac{1}{2t}$. Khi đó $\\dfrac{d^2y}{dx^2}=\\dfrac{u'(t)}{x'(t)}=\\dfrac{\\frac32+\\frac{1}{2t^2}}{2t}$; tại $t=1$ bằng $\\dfrac{2}{2}=1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G121DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Với $f(x)=\\dfrac{1}{1-2x}$ thì $f^{(n)}(x)=\\dfrac{2^n\\,n!}{(1-2x)^{n+1}}$ với mọi số nguyên dương $n$",
        "answer": true
      },
      {
        "text": "Với $f(x)=\\cos 2x$ thì $f^{(6)}(0)=64$",
        "answer": false
      },
      {
        "text": "Vi phân của hàm số $y=x\\ln x$ tại $x=e$ ứng với số gia $\\Delta x=0{,}01$ là $dy=0{,}02$",
        "answer": true
      },
      {
        "text": "Dùng vi phân, ta tính được giá trị gần đúng $\\sqrt{9{,}06}\\approx 3{,}02$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f(x)=(1-2x)^{-1}$, $f'(x)=2(1-2x)^{-2}$, $f''(x)=2\\cdot2\\cdot2(1-2x)^{-3}=2^2\\cdot2!\\,(1-2x)^{-3}$. Quy nạp: mỗi lần lấy đạo hàm nhân thêm $2(k+1)$, nên $f^{(n)}(x)=\\dfrac{2^n\\,n!}{(1-2x)^{n+1}}$.<br>- <strong>Sai</strong>.<br>  $f^{(n)}(x)=2^n\\cos\\left(2x+\\dfrac{n\\pi}{2}\\right)$. Với $n=6$: $f^{(6)}(0)=64\\cos 3\\pi=-64\\neq64$.<br>- <strong>Đúng</strong>.<br>  $y'=\\ln x+1$, $y'(e)=2$. Vi phân $dy=y'(e)\\,\\Delta x=2\\cdot0{,}01=0{,}02$.<br>- <strong>Sai</strong>.<br>  Với $f(x)=\\sqrt{x}$, $x_0=9$, $\\Delta x=0{,}06$: $f'(x)=\\dfrac{1}{2\\sqrt x}$, $f'(9)=\\dfrac16$. $\\sqrt{9{,}06}\\approx f(9)+f'(9)\\Delta x=3+\\dfrac{0{,}06}{6}=3{,}01\\neq3{,}02$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
