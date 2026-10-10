window.dungSai3G22 = [
  {
    "id": "3G221DS1",
    "question": "Cho tích phân $I=\\displaystyle\\int_0^{\\sqrt3} x\\sqrt{x^2+1}\\,dx$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Đặt $t=x^2+1$ thì $I=\\dfrac12\\displaystyle\\int_1^4\\sqrt{t}\\,dt$",
        "answer": true
      },
      {
        "text": "Đặt $t=x^2+1$ thì $I=\\displaystyle\\int_0^{\\sqrt3}\\sqrt{t}\\,dt$",
        "answer": false
      },
      {
        "text": "$I=\\dfrac{7}{3}$",
        "answer": true
      },
      {
        "text": "Đặt $x=\\tan u$ thì $I=\\displaystyle\\int_0^{\\pi/6}\\dfrac{\\sin u}{\\cos^4 u}\\,du$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $t=x^2+1\\Rightarrow dt=2x\\,dx$, tức $x\\,dx=\\dfrac{dt}{2}$. Đổi cận: $x=0\\Rightarrow t=1$; $x=\\sqrt3\\Rightarrow t=4$. Do đó $I=\\dfrac12\\displaystyle\\int_1^4\\sqrt t\\,dt$.<br>- <strong>Sai</strong>.<br>  Khi đổi biến phải đổi cả vi phân ($x\\,dx=\\dfrac{dt}{2}$) và cận ($t$ chạy từ $1$ đến $4$). Biểu thức đã cho giữ nguyên cận cũ và bỏ mất thừa số $\\dfrac12$; giá trị của nó là $\\dfrac23\\cdot 3^{3/4}\\approx 1{,}52\\neq\\dfrac73$.<br>- <strong>Đúng</strong>.<br>  $I=\\dfrac12\\cdot\\left.\\dfrac{2}{3}t^{3/2}\\right|_1^4=\\dfrac13(8-1)=\\dfrac73$.<br>- <strong>Sai</strong>.<br>  $x=\\tan u\\Rightarrow dx=\\dfrac{du}{\\cos^2 u}$, $\\sqrt{x^2+1}=\\dfrac{1}{\\cos u}$ (với $u\\in\\left[0;\\dfrac\\pi2\\right)$). Đổi cận: $x=0\\Rightarrow u=0$; $x=\\sqrt3\\Rightarrow u=\\dfrac\\pi3$ (không phải $\\dfrac\\pi6$ vì $\\tan\\dfrac\\pi6=\\dfrac{1}{\\sqrt3}$). Đúng là $I=\\displaystyle\\int_0^{\\pi/3}\\dfrac{\\sin u}{\\cos^4 u}\\,du=\\left.\\dfrac{1}{3\\cos^3 u}\\right|_0^{\\pi/3}=\\dfrac{8-1}{3}=\\dfrac73$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_1^e\\dfrac{\\ln^2 x}{x}\\,dx=\\dfrac13$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^{\\ln 2}\\dfrac{e^x}{e^x+1}\\,dx=\\ln\\dfrac32$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^{\\pi/2}\\sin^2 x\\cos x\\,dx=\\dfrac12$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_0^1\\dfrac{dx}{\\sqrt{4-x^2}}=\\dfrac{\\pi}{3}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đặt $t=\\ln x\\Rightarrow dt=\\dfrac{dx}{x}$; $x=1\\Rightarrow t=0$, $x=e\\Rightarrow t=1$. Tích phân bằng $\\displaystyle\\int_0^1 t^2\\,dt=\\dfrac13$.<br>- <strong>Đúng</strong>.<br>  Đặt $t=e^x+1\\Rightarrow dt=e^x\\,dx$; $x=0\\Rightarrow t=2$, $x=\\ln 2\\Rightarrow t=3$. Tích phân bằng $\\displaystyle\\int_2^3\\dfrac{dt}{t}=\\ln 3-\\ln 2=\\ln\\dfrac32$.<br>- <strong>Sai</strong>.<br>  Đặt $t=\\sin x\\Rightarrow dt=\\cos x\\,dx$; $x=0\\Rightarrow t=0$, $x=\\dfrac\\pi2\\Rightarrow t=1$. Tích phân bằng $\\displaystyle\\int_0^1 t^2\\,dt=\\dfrac13\\neq\\dfrac12$.<br>- <strong>Sai</strong>.<br>  Đặt $x=2\\sin t$, $t\\in\\left[-\\dfrac\\pi2;\\dfrac\\pi2\\right]$: $dx=2\\cos t\\,dt$, $\\sqrt{4-x^2}=2\\cos t$. Đổi cận: $x=0\\Rightarrow t=0$; $x=1\\Rightarrow \\sin t=\\dfrac12\\Rightarrow t=\\dfrac\\pi6$. Tích phân bằng $\\displaystyle\\int_0^{\\pi/6}dt=\\dfrac\\pi6\\neq\\dfrac\\pi3$ (nhầm $\\arcsin\\dfrac12$ với $\\arccos\\dfrac12$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221DS3",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Với $u=x$, $dv=e^{2x}dx$, ta có $\\displaystyle\\int_0^1 xe^{2x}\\,dx=\\left.\\dfrac{xe^{2x}}{2}\\right|_0^1-\\dfrac12\\int_0^1 e^{2x}\\,dx$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^1 xe^{2x}\\,dx=\\dfrac{e^2+1}{4}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_1^e x\\ln x\\,dx=\\dfrac{e^2-1}{4}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_0^{\\pi} x\\cos x\\,dx=-2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $u=x\\Rightarrow du=dx$; $dv=e^{2x}dx\\Rightarrow v=\\dfrac{e^{2x}}{2}$. Công thức tích phân từng phần $\\displaystyle\\int_a^b u\\,dv=\\left.uv\\right|_a^b-\\int_a^b v\\,du$ cho đúng đẳng thức đã nêu.<br>- <strong>Đúng</strong>.<br>  Từ ý trên: $\\displaystyle\\int_0^1 xe^{2x}\\,dx=\\dfrac{e^2}{2}-\\left.\\dfrac{e^{2x}}{4}\\right|_0^1=\\dfrac{e^2}{2}-\\dfrac{e^2-1}{4}=\\dfrac{e^2+1}{4}$.<br>- <strong>Sai</strong>.<br>  Đặt $u=\\ln x$, $dv=x\\,dx\\Rightarrow du=\\dfrac{dx}{x}$, $v=\\dfrac{x^2}{2}$. Tích phân bằng $\\left.\\dfrac{x^2\\ln x}{2}\\right|_1^e-\\displaystyle\\int_1^e\\dfrac{x}{2}\\,dx=\\dfrac{e^2}{2}-\\dfrac{e^2-1}{4}=\\dfrac{e^2+1}{4}\\neq\\dfrac{e^2-1}{4}$.<br>- <strong>Đúng</strong>.<br>  Đặt $u=x$, $dv=\\cos x\\,dx\\Rightarrow du=dx$, $v=\\sin x$. Tích phân bằng $\\left.x\\sin x\\right|_0^{\\pi}-\\displaystyle\\int_0^{\\pi}\\sin x\\,dx=0+\\left.\\cos x\\right|_0^{\\pi}=-1-1=-2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221DS4",
    "question": "Với mỗi số tự nhiên $n$, đặt $I_n=\\displaystyle\\int_0^1 x^ne^x\\,dx$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$I_1=1$",
        "answer": true
      },
      {
        "text": "$I_n=e-nI_{n-1}$ với mọi $n\\ge 1$",
        "answer": true
      },
      {
        "text": "$I_3=3e-6$",
        "answer": false
      },
      {
        "text": "Dãy $(I_n)$ là dãy tăng",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Từng phần với $u=x$, $dv=e^x dx$: $I_1=\\left.xe^x\\right|_0^1-\\displaystyle\\int_0^1 e^x\\,dx=e-(e-1)=1$.<br>- <strong>Đúng</strong>.<br>  Đặt $u=x^n$, $dv=e^xdx\\Rightarrow du=nx^{n-1}dx$, $v=e^x$: $I_n=\\left.x^ne^x\\right|_0^1-n\\displaystyle\\int_0^1 x^{n-1}e^x\\,dx=e-nI_{n-1}$.<br>- <strong>Sai</strong>.<br>  $I_0=e-1$, $I_1=e-I_0=1$, $I_2=e-2I_1=e-2$, $I_3=e-3I_2=e-3(e-2)=6-2e\\neq 3e-6$ (sai dấu).<br>- <strong>Sai</strong>.<br>  Với $x\\in(0;1)$: $x^{n+1}e^x\\lt x^ne^x$ nên $I_{n+1}\\lt I_n$, dãy $(I_n)$ giảm. Chẳng hạn $I_1=1\\gt I_2=e-2\\approx 0{,}718$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
