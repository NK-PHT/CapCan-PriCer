window.dungSai3G11 = [
  {
    "id": "3G111DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau về giới hạn một phía:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\lim_{x\\to 2^-}\\dfrac{|x-2|}{x^2-4}=-\\dfrac{1}{4}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 0^+}\\dfrac{1}{1+2^{1/x}}=1$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 1^-}e^{\\frac{1}{x-1}}=0$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 0}\\dfrac{x}{\\sqrt{1-\\cos x}}=\\sqrt{2}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khi $x\\to 2^-$ thì $x \\lt 2$ nên $|x-2|=2-x$. Do đó $\\dfrac{|x-2|}{x^2-4}=\\dfrac{-(x-2)}{(x-2)(x+2)}=-\\dfrac{1}{x+2}\\to-\\dfrac{1}{4}$.<br>- <strong>Sai</strong>.<br>  Khi $x\\to 0^+$ thì $\\dfrac{1}{x}\\to+\\infty$ nên $2^{1/x}\\to+\\infty$, suy ra $\\dfrac{1}{1+2^{1/x}}\\to 0$. (Giá trị $1$ là giới hạn bên trái: khi $x\\to0^-$ thì $2^{1/x}\\to 0$.)<br>- <strong>Đúng</strong>.<br>  Khi $x\\to 1^-$ thì $x-1\\to 0^-$ nên $\\dfrac{1}{x-1}\\to-\\infty$, do đó $e^{\\frac{1}{x-1}}\\to 0$.<br>- <strong>Sai</strong>.<br>  $1-\\cos x=2\\sin^2\\dfrac{x}{2}$ nên $\\sqrt{1-\\cos x}=\\sqrt{2}\\left|\\sin\\dfrac{x}{2}\\right|$. Khi $x\\to0^+$: $\\dfrac{x}{\\sqrt2\\sin(x/2)}\\to\\dfrac{2}{\\sqrt2}=\\sqrt2$; khi $x\\to0^-$: $\\dfrac{x}{-\\sqrt2\\sin(x/2)}\\to-\\sqrt2$. Hai giới hạn một phía khác nhau nên $\\displaystyle\\lim_{x\\to 0}\\dfrac{x}{\\sqrt{1-\\cos x}}$ không tồn tại.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau (các vô cùng bé được xét khi $x\\to 0$):",
    "subQuestions": [
      {
        "text": "$1-\\cos 2x\\sim 2x^2$",
        "answer": true
      },
      {
        "text": "$\\sqrt{1+4x}-1\\sim 4x$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\left(e^{3x}-1\\right)\\tan 2x}{1-\\cos 2x}=3$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x^3}=0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Với $u\\to0$: $1-\\cos u\\sim\\dfrac{u^2}{2}$. Thay $u=2x$: $1-\\cos 2x\\sim\\dfrac{(2x)^2}{2}=2x^2$.<br>- <strong>Sai</strong>.<br>  Với $u\\to 0$: $\\sqrt[n]{1+u}-1\\sim\\dfrac{u}{n}$. Thay $u=4x$, $n=2$: $\\sqrt{1+4x}-1\\sim\\dfrac{4x}{2}=2x$, không tương đương với $4x$ (tỉ số dần tới $\\dfrac12\\neq1$).<br>- <strong>Đúng</strong>.<br>  $e^{3x}-1\\sim 3x$, $\\tan 2x\\sim 2x$, $1-\\cos 2x\\sim 2x^2$. Do đó giới hạn bằng $\\displaystyle\\lim_{x\\to0}\\dfrac{3x\\cdot 2x}{2x^2}=3$.<br>- <strong>Sai</strong>.<br>  Không được thay $\\tan x\\sim x$ và $\\sin x\\sim x$ trong một hiệu (vì phần chính triệt tiêu). Viết $\\tan x-\\sin x=\\tan x\\,(1-\\cos x)\\sim x\\cdot\\dfrac{x^2}{2}=\\dfrac{x^3}{2}$, nên giới hạn bằng $\\dfrac12\\neq 0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111DS3",
    "question": "Cho hàm số $f(x)=\\begin{cases} \\dfrac{e^{2x}-1}{x} & \\text{khi } x \\lt 0 \\\\ ax+b & \\text{khi } 0\\le x\\le 1 \\\\ \\dfrac{x^2+x-2}{x-1} & \\text{khi } x\\gt 1 \\end{cases}$ với $a,b$ là các tham số thực. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\lim_{x\\to 0^-}f(x)=2$",
        "answer": true
      },
      {
        "text": "Khi $a=0$, $b=2$ thì $f$ liên tục tại $x=1$",
        "answer": false
      },
      {
        "text": "$f$ liên tục trên $\\mathbb{R}$ khi và chỉ khi $a=1$ và $b=2$",
        "answer": true
      },
      {
        "text": "Nếu $b\\neq 2$ thì $\\displaystyle\\lim_{x\\to 0}f(x)$ không tồn tại",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\displaystyle\\lim_{x\\to 0^-}\\dfrac{e^{2x}-1}{x}=\\lim_{x\\to 0^-}\\dfrac{2x}{x}=2$ (vì $e^{2x}-1\\sim 2x$).<br>- <strong>Sai</strong>.<br>  Khi $a=0$, $b=2$: $f(1)=2$, còn $\\displaystyle\\lim_{x\\to1^+}\\dfrac{x^2+x-2}{x-1}=\\lim_{x\\to1^+}\\dfrac{(x-1)(x+2)}{x-1}=\\lim_{x\\to1^+}(x+2)=3\\neq f(1)$ nên $f$ không liên tục tại $x=1$.<br>- <strong>Đúng</strong>.<br>  Trên mỗi khoảng $(-\\infty;0)$, $(0;1)$, $(1;+\\infty)$ hàm $f$ là hàm sơ cấp nên liên tục; chỉ cần xét tại các điểm nối.<br>  Tại $x=0$: $\\displaystyle\\lim_{x\\to0^-}f(x)=2$, $\\displaystyle\\lim_{x\\to0^+}f(x)=f(0)=b$ nên cần $b=2$.<br>  Tại $x=1$: $\\displaystyle\\lim_{x\\to1^-}f(x)=f(1)=a+b$, $\\displaystyle\\lim_{x\\to1^+}f(x)=3$ nên cần $a+b=3$.<br>  Vậy $f$ liên tục trên $\\mathbb{R}\\Leftrightarrow a=1,\\ b=2$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\lim_{x\\to0^-}f(x)=2$ còn $\\displaystyle\\lim_{x\\to0^+}f(x)=\\lim_{x\\to0^+}(ax+b)=b$. Nếu $b\\neq2$ thì hai giới hạn một phía khác nhau nên $\\displaystyle\\lim_{x\\to0}f(x)$ không tồn tại.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G111DS4",
    "question": "Xét phương trình $x^5-5x+1=0$ và đặt $f(x)=x^5-5x+1$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Vì $f(0)\\cdot f(1) \\lt 0$ nên phương trình có ít nhất một nghiệm thuộc khoảng $(0;1)$",
        "answer": true
      },
      {
        "text": "Phương trình có ít nhất một nghiệm thuộc khoảng $(1;2)$",
        "answer": true
      },
      {
        "text": "Vì $f(-1)\\cdot f(2)\\gt 0$ nên phương trình không có nghiệm nào thuộc khoảng $(-1;2)$",
        "answer": false
      },
      {
        "text": "Phương trình có đúng hai nghiệm thực",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f$ liên tục trên $[0;1]$, $f(0)=1$, $f(1)=-3$, $f(0)\\cdot f(1)=-3 \\lt 0$ nên theo định lý giá trị trung gian, phương trình có nghiệm thuộc $(0;1)$.<br>- <strong>Đúng</strong>.<br>  $f$ liên tục trên $[1;2]$, $f(1)=-3$, $f(2)=23$, trái dấu nên phương trình có nghiệm thuộc $(1;2)$.<br>- <strong>Sai</strong>.<br>  $f(-1)=5$, $f(2)=23$ cùng dấu, nhưng điều kiện $f(a)f(b) \\lt 0$ chỉ là điều kiện đủ để có nghiệm; khi $f(a)f(b)\\gt 0$ ta không kết luận được gì. Thực tế phương trình có nghiệm trong $(0;1)$ và $(1;2)$, đều nằm trong $(-1;2)$.<br>- <strong>Sai</strong>.<br>  $f(-2)=-21$, $f(-1)=5$ nên còn một nghiệm thuộc $(-2;-1)$; cùng với hai nghiệm trên, phương trình có ít nhất $3$ nghiệm. Mặt khác $f^{\\prime}(x)=5x^4-5=0\\Leftrightarrow x=\\pm1$ nên $f$ đơn điệu trên mỗi khoảng $(-\\infty;-1)$, $(-1;1)$, $(1;+\\infty)$, mỗi khoảng có không quá một nghiệm. Vậy phương trình có đúng $3$ nghiệm thực.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
