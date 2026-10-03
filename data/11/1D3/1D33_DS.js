window.dungSai1D33 = [
  {
    "id": "1D333DS1",
    "question": "Xét tính liên tục của hàm số",
    "subQuestions": [
      {
        "text": "$f(x)=\\dfrac{3x-2}{x-5}$ là hàm số liên tục trên mỗi khoảng $(-\\infty;5),(5;+\\infty)$",
        "answer": true
      },
      {
        "text": "$f(x)=\\sin x-2\\cos x+3$ là hàm số liên tục trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)=\\left\\{\\begin{array}{lll}-\\dfrac{x}{2}&\\text{ khi }&x\\le 1\\\\\\dfrac{x^2-3x+2}{x^2-1}&\\text{ khi }&x&gt;1\\end{array}\\right.$ là hàm gián đoạn tại điểm $x_0=1$",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)=\\dfrac{3x-2}{x-5}$ là hàm số gián đoạn tại điểm $x_0=5$",
        "answer": true
      }
    ],
    "explain": "<br>- $f(x)=\\dfrac{3x-2}{x-5}$ là hàm phân thức, có tập xác định là $\\left(-\\infty;5\\right)\\cup\\left(5;+\\infty\\right)$ nên hàm số liên tục trên các khoảng $\\left(-\\infty;5\\right)$ và $\\left(5;+\\infty\\right)$.<br>- $f(x)=\\sin x-2\\cos x+3$ có tập xác định là $\\mathbb{R}$ nên hàm số liên tục trên $\\mathbb{R}$.<br>- $f(1)=-\\dfrac{1}{2}$.<br>$\\lim\\limits_{x\\to1^{-}}f(x)=\\lim\\limits_{x\\to1^{-}}\\left(-\\dfrac{x}{2}\\right)=-\\dfrac{1}{2}$.<br>$\\lim\\limits_{x\\to1^{+}}f(x)=\\lim\\limits_{x\\to1^{+}}\\dfrac{x^2-3x+2}{x^2-1}=\\lim\\limits_{x\\to1^{+}}\\dfrac{(x-1)(x-2)}{(x-1)(x+1)}=\\lim\\limits_{x\\to1^{+}}\\dfrac{x-2}{x+1}=-\\dfrac{1}{2}$.<br>Vì $\\lim\\limits_{x\\to1^{+}}f(x)=\\lim\\limits_{x\\to1^{-}}f(x)=f(1)=-\\dfrac{1}{2}$ nên hàm số liên tục tại $x_0=1$.<br>- Vì $f(5)$ không tồn tại nên hàm số không liên tục tại $x_0=5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D333DS2",
    "question": "Cho hàm số $f(x)=\\left\\{\\begin{array}{ll}x^2-6x+2 & \\text{khi} x &gt; 2\\\\3a+1 & \\text{khi} x \\le 2\\end{array}\\right.$, với $a$ là số thực. Xét tính đúng sai các phát biểu sau",
    "subQuestions": [
      {
        "text": "$f(2)=7$",
        "answer": false
      },
      {
        "text": "$\\lim\\limits_{x\\to 2^-} f(x)=3a+1$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{x\\to 2^+} f(x)=-5$",
        "answer": false
      },
      {
        "text": "Khi $a=-\\dfrac{7}{3}$ thì hàm số $y=f(x)$ liên tục tại điểm $x=2$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Vì $x=2$ thỏa mãn $x \\le 2$ nên $f(2)=3a+1$.<br>- <strong>Đúng</strong>. Ta có $\\lim\\limits_{x\\to 2^-} f(x)=\\lim\\limits_{x\\to 2^-}(3a+1)=3a+1$.<br>- <strong>Sai</strong>. Ta có $\\lim\\limits_{x\\to 2^+} f(x)=\\lim\\limits_{x\\to 2^+}(x^2-6x+2)=2^2-6 \\cdot 2+2=4-12+2=-6$.<br>- <strong>Đúng</strong>. Để hàm số $y=f(x)$ liên tục tại $x=2$, ta cần có $f(2)=\\lim\\limits_{x\\to 2^-} f(x)=\\lim\\limits_{x\\to 2^+} f(x)$.<br>Ta có $f(2)=3a+1$, $\\lim\\limits_{x\\to 2^-} f(x)=3a+1$, và $\\lim\\limits_{x\\to 2^+} f(x)=-6$.<br>Do đó, hàm số liên tục tại $x=2$ khi $3a+1=-6 \\Leftrightarrow 3a=-7 \\Leftrightarrow a=-\\dfrac{7}{3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D333DS3",
    "question": "Cho hàm số $f(x)=\\left\\{\\begin{array}{ll}x-2 & \\text{khi}x&lt;-1\\\\\\sqrt{x^2+1}& \\text{khi}x \\geq-1\\end{array}\\right.$. Xét tính đúng - sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Giới hạn $\\displaystyle\\lim\\limits_{x \\rightarrow-1^{-}}f(x)=-3$",
        "answer": true
      },
      {
        "text": "Giới hạn $\\displaystyle\\lim\\limits_{x \\rightarrow-1^{+}}f(x)=\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "$f(-1)=\\sqrt{5}$",
        "answer": false
      },
      {
        "text": "Hàm số liên tục tại $x=-1$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\displaystyle\\lim\\limits_{x \\rightarrow-1^{-}}f(x)=\\displaystyle\\lim\\limits_{x \\rightarrow-1^{-}}(x-2)=-1-2=-3$.<br>- Ta có $\\displaystyle\\lim\\limits_{x \\rightarrow-1^{+}}\\sqrt{x^2+1}=\\sqrt{(-1)^2+1}=\\sqrt{2}$.<br>- $f(-1)=\\sqrt{(-1)^2+1}=\\sqrt{2}$.<br>- Ta có $\\displaystyle\\lim\\limits_{x \\rightarrow-1^{-}}f(x)\\ne \\displaystyle\\lim\\limits_{x \\rightarrow-1^{+}}f(x)$ vì $(-2\\ne \\sqrt{2})$ do đó hàm số không tiên tục.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D332DS1",
    "question": "Cho hàm số $f(x)=\\heva{&\\dfrac{1}{4} x+\\dfrac{1}{4} &\\text{khi } x \\leq 2\\\\&\\dfrac{\\sqrt{3x-2}-2}{x-2} &\\text{khi } x > 2.}$ Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "$\\lim\\limits_{x \\to 2^{+}} f(x)=\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "$\\lim\\limits_{x \\to 0} f(x)=\\dfrac{1}{4}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ liên tục tại $x=2$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{x \\to 2^{-}} f(x)=\\dfrac{3}{4}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\lim\\limits_{x \\to 2^{+}} f(x)=\\lim\\limits_{x \\to 2^{+}}\\dfrac{\\sqrt{3x-2}-2}{x-2}=\\lim\\limits_{x \\to 2^{+}}\\dfrac{3x-6}{(x-2)\\left(\\sqrt{3x-2}+2\\right)}=\\lim\\limits_{x \\to 2^{+}}\\dfrac{3}{\\sqrt{3x-2}+2}=\\dfrac{3}{4}$, không phải $\\dfrac{1}{2}$. Suy ra mệnh đề sai.<br>- $\\lim\\limits_{x \\to 0} f(x)=\\lim\\limits_{x \\to 0}\\left(\\dfrac{1}{4} x+\\dfrac{1}{4}\\right)=\\dfrac{1}{4}$. Suy ra mệnh đề đúng.<br>- Ta có $f(2)=\\dfrac{1}{4}\\cdot 2+\\dfrac{1}{4}=\\dfrac{3}{4}$ và $\\lim\\limits_{x \\to 2^{-}} f(x)=\\dfrac{3}{4}=\\lim\\limits_{x \\to 2^{+}} f(x)$, nên $f(x)$ liên tục tại $x=2$. Suy ra mệnh đề đúng.<br>- $\\lim\\limits_{x \\to 2^{-}} f(x)=\\lim\\limits_{x \\to 2^{-}}\\left(\\dfrac{1}{4} x+\\dfrac{1}{4}\\right)=\\dfrac{3}{4}$. Suy ra mệnh đề đúng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D332DS2",
    "question": "Cho hàm số $f(x)=\\heva{&x-2&\\text{khi } x\\leq 2\\\\&\\dfrac{mx-2}{x^2-3x+2}&\\text{khi }x>2}$ ($m$ là tham số). Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "$f(2)=2$",
        "answer": false
      },
      {
        "text": "$\\lim\\limits_{x\\to 2^-}f(x)=0$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho liên tục tại $x=2$ với $m\\neq 1$",
        "answer": false
      },
      {
        "text": "Với $m=1$ thì hàm số đã cho không liên tục tại $x=2$",
        "answer": true
      }
    ],
    "explain": "<br>- $f(2)=2-2=0$, không phải $2$. Suy ra mệnh đề sai.<br>- $\\lim\\limits_{x\\to 2^-}f(x)=\\lim\\limits_{x\\to 2^-}(x-2)=0$. Suy ra mệnh đề đúng.<br>- Để hàm số liên tục tại $x=2$ cần $\\lim\\limits_{x\\to 2^+}f(x)=f(2)=0$. Vì $x^2-3x+2=(x-1)(x-2)\\to 0$ khi $x\\to 2$, muốn giới hạn hữu hạn thì tử phải $\\to 0$, tức $2m-2=0 \\Leftrightarrow m=1$. Vậy chỉ khi $m=1$ giới hạn mới tồn tại hữu hạn, nên với $m\\neq 1$ hàm số không có giới hạn hữu hạn tại $x=2$ (không liên tục); mệnh đề nói liên tục khi $m\\neq 1$ là sai. Suy ra mệnh đề sai.<br>- Với $m=1$: $f(x)=\\dfrac{x-2}{(x-1)(x-2)}=\\dfrac{1}{x-1}$ khi $x>2$, nên $\\lim\\limits_{x\\to 2^+}f(x)=\\dfrac{1}{2-1}=1\\neq f(2)=0$. Vậy hàm số không liên tục tại $x=2$ khi $m=1$. Suy ra mệnh đề đúng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D332DS3",
    "question": "Cho hàm số $f(x)=\\dfrac{x-3}{x+1}$. Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "Hàm số đã cho liên tục tại $x_{0}=1$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho liên tục trên các khoảng $\\left(-\\infty;1\\right)$, $\\left(1;+\\infty \\right)$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{x\\rightarrow (-1)^{+}}\\dfrac{x-3}{x+1}=+\\infty$",
        "answer": false
      },
      {
        "text": "Không tồn tại giới hạn $\\displaystyle\\lim_{x\\rightarrow -1}\\left[f(x) \\right]^{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số $f(x)$ xác định trên $\\mathbb{R}\\setminus\\{-1\\}$ nên $x_0=1$ thuộc tập xác định. $\\lim\\limits_{x\\to 1}f(x)=\\dfrac{1-3}{1+1}=-1=f(1)$. Suy ra mệnh đề đúng.<br>- Vì $f(x)$ không xác định tại $x=-1$ nên hàm số chỉ liên tục trên $\\left(-\\infty;-1\\right)$ và $\\left(-1;+\\infty\\right)$, không phải trên $\\left(-\\infty;1\\right)$, $\\left(1;+\\infty\\right)$ (hai khoảng này đều chứa điểm $-1$ không thuộc tập xác định). Suy ra mệnh đề sai.<br>- Khi $x\\to(-1)^+$ thì tử $\\to -4$, mẫu $\\to 0^+$, nên $\\lim\\limits_{x\\to(-1)^+}f(x)=-\\infty$, không phải $+\\infty$. Suy ra mệnh đề sai.<br>- Khi $x\\to -1$ (từ hai phía), $f(x)\\to\\pm\\infty$ nên $[f(x)]^2\\to+\\infty$ từ cả hai phía, tức giới hạn $\\lim\\limits_{x\\to -1}[f(x)]^2=+\\infty$ tồn tại (bằng $+\\infty$). Suy ra mệnh đề \"không tồn tại giới hạn\" là sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
