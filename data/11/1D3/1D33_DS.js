// =========================================================================
// KHỐI DỮ LIỆU: 1D33 - Đúng sai
// Nguồn: DeLuyenTap/11/DLTS9.tex (đề luyện tập lớp 11, GV cung cấp)
// =========================================================================
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
  }
];
