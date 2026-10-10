window.dungSai3G21 = [
  {
    "id": "3G211DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau ($C$ là hằng số tùy ý):",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int\\left(x^2-4x+\\dfrac{3}{x}\\right)dx=\\dfrac{x^3}{3}-2x^2+3\\ln|x|+C$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\dfrac{dx}{x^2+9}=\\dfrac{1}{3}\\arctan\\dfrac{x}{3}+C$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int\\dfrac{dx}{\\sin^2 x}=\\cot x+C$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int 2^x\\,dx=2^x\\ln 2+C$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Theo bảng nguyên hàm: $\\displaystyle\\int x^2\\,dx=\\dfrac{x^3}{3}+C$, $\\displaystyle\\int 4x\\,dx=2x^2+C$, $\\displaystyle\\int\\dfrac{3}{x}\\,dx=3\\ln|x|+C$. Cộng lại được kết quả đã cho (kiểm tra: đạo hàm của vế phải bằng $x^2-4x+\\dfrac{3}{x}$).<br>- <strong>Đúng</strong>.<br>  Áp dụng công thức $\\displaystyle\\int\\dfrac{dx}{x^2+a^2}=\\dfrac{1}{a}\\arctan\\dfrac{x}{a}+C$ với $a=3$. Kiểm tra: $\\left(\\dfrac{1}{3}\\arctan\\dfrac{x}{3}\\right)'=\\dfrac{1}{3}\\cdot\\dfrac{1/3}{1+x^2/9}=\\dfrac{1}{x^2+9}$.<br>- <strong>Sai</strong>.<br>  Ta có $(\\cot x)'=-\\dfrac{1}{\\sin^2 x}$ nên $\\displaystyle\\int\\dfrac{dx}{\\sin^2 x}=-\\cot x+C$; mệnh đề đã cho sai dấu.<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int a^x\\,dx=\\dfrac{a^x}{\\ln a}+C$ nên $\\displaystyle\\int 2^x\\,dx=\\dfrac{2^x}{\\ln 2}+C$. Biểu thức $2^x\\ln 2$ là đạo hàm của $2^x$, không phải nguyên hàm.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211DS2",
    "question": "Cho các hàm số $f$, $g$ liên tục trên $[0;5]$ thỏa mãn $\\displaystyle\\int_0^2 f(x)\\,dx=3$, $\\displaystyle\\int_0^5 f(x)\\,dx=7$ và $\\displaystyle\\int_0^2 g(x)\\,dx=-1$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_2^5 f(x)\\,dx=4$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_5^2 f(x)\\,dx=4$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_0^2 \\left[2f(x)-3g(x)\\right]dx=9$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^2 \\left[f(x)+1\\right]dx=4$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Theo tính chất cộng cận: $\\displaystyle\\int_2^5 f(x)\\,dx=\\int_0^5 f(x)\\,dx-\\int_0^2 f(x)\\,dx=7-3=4$.<br>- <strong>Sai</strong>.<br>  Đổi chỗ hai cận thì tích phân đổi dấu: $\\displaystyle\\int_5^2 f(x)\\,dx=-\\int_2^5 f(x)\\,dx=-4\\neq 4$.<br>- <strong>Đúng</strong>.<br>  Theo tính chất tuyến tính: $\\displaystyle\\int_0^2 \\left[2f(x)-3g(x)\\right]dx=2\\int_0^2 f(x)\\,dx-3\\int_0^2 g(x)\\,dx=2\\cdot 3-3\\cdot(-1)=9$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int_0^2 \\left[f(x)+1\\right]dx=\\int_0^2 f(x)\\,dx+\\int_0^2 1\\,dx=3+2=5\\neq 4$ (sai lầm thường gặp: coi $\\displaystyle\\int_0^2 1\\,dx=1$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211DS3",
    "question": "Cho hàm số $f(x)=\\begin{cases} 2x & \\text{khi } x\\le 1\\\\ 3x^2-1 & \\text{khi } x\\gt 1\\end{cases}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_0^3 |x-1|\\,dx=\\dfrac{5}{2}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_{-1}^{2} |x^2-1|\\,dx=\\dfrac{4}{3}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_0^2 f(x)\\,dx=7$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_{-1}^{1} x|x|\\,dx=\\dfrac{2}{3}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $|x-1|=1-x$ trên $[0;1]$ và $|x-1|=x-1$ trên $[1;3]$. Do đó $\\displaystyle\\int_0^3 |x-1|\\,dx=\\int_0^1 (1-x)\\,dx+\\int_1^3 (x-1)\\,dx=\\dfrac{1}{2}+\\left.\\dfrac{(x-1)^2}{2}\\right|_1^3=\\dfrac12+2=\\dfrac52$.<br>- <strong>Sai</strong>.<br>  $x^2-1\\le 0$ trên $[-1;1]$ và $x^2-1\\ge 0$ trên $[1;2]$. Ta có $\\displaystyle\\int_{-1}^{1}(1-x^2)\\,dx=\\dfrac43$, $\\displaystyle\\int_1^2 (x^2-1)\\,dx=\\left.\\left(\\dfrac{x^3}{3}-x\\right)\\right|_1^2=\\dfrac23-\\left(-\\dfrac23\\right)=\\dfrac43$. Vậy tích phân bằng $\\dfrac83\\neq\\dfrac43$ (giá trị $\\dfrac43$ mới chỉ là phần tích phân trên $[-1;1]$).<br>- <strong>Đúng</strong>.<br>  Tách tại $x=1$: $\\displaystyle\\int_0^2 f(x)\\,dx=\\int_0^1 2x\\,dx+\\int_1^2 (3x^2-1)\\,dx=\\left.x^2\\right|_0^1+\\left.(x^3-x)\\right|_1^2=1+6=7$.<br>- <strong>Sai</strong>.<br>  Hàm $h(x)=x|x|$ là hàm lẻ ($h(-x)=-x|x|=-h(x)$) nên tích phân trên đoạn đối xứng $[-1;1]$ bằng $0$. Cụ thể: $\\displaystyle\\int_{-1}^0 (-x^2)\\,dx+\\int_0^1 x^2\\,dx=-\\dfrac13+\\dfrac13=0\\neq\\dfrac23$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G211DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Nếu $F(x)=\\displaystyle\\int_1^x (t^2-4t+3)\\,dt$ thì $F'(x)=x^2-4x+3$ với mọi $x\\in\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $F(x)=\\displaystyle\\int_1^x (t^2-4t+3)\\,dt$ đạt cực tiểu tại $x=1$",
        "answer": false
      },
      {
        "text": "Nếu $G(x)=\\displaystyle\\int_0^{x^2}\\sqrt{1+t^3}\\,dt$ thì $G'(1)=\\sqrt{2}$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 0}\\dfrac{1}{x^2}\\int_0^x \\sin t\\,dt=\\dfrac{1}{2}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Hàm $f(t)=t^2-4t+3$ liên tục trên $\\mathbb{R}$; theo định lý đạo hàm của tích phân theo cận trên: $\\left(\\displaystyle\\int_a^x f(t)\\,dt\\right)'=f(x)$, nên $F'(x)=x^2-4x+3$.<br>- <strong>Sai</strong>.<br>  $F'(x)=x^2-4x+3=(x-1)(x-3)$ đổi dấu từ dương sang âm khi $x$ đi qua $1$ nên $F$ đạt cực đại (không phải cực tiểu) tại $x=1$; $F$ đạt cực tiểu tại $x=3$.<br>- <strong>Sai</strong>.<br>  Với cận trên $u(x)=x^2$: $G'(x)=\\sqrt{1+(x^2)^3}\\cdot (x^2)'=2x\\sqrt{1+x^6}$. Do đó $G'(1)=2\\sqrt2\\neq\\sqrt2$ (sai lầm: quên nhân với $u'(x)$).<br>- <strong>Đúng</strong>.<br>  Giới hạn có dạng $\\dfrac00$. Áp dụng quy tắc L'Hospital và đạo hàm theo cận trên: $\\displaystyle\\lim_{x\\to0}\\dfrac{\\int_0^x\\sin t\\,dt}{x^2}=\\lim_{x\\to0}\\dfrac{\\sin x}{2x}=\\dfrac12$. (Cách khác: $\\displaystyle\\int_0^x\\sin t\\,dt=1-\\cos x\\sim\\dfrac{x^2}{2}$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
