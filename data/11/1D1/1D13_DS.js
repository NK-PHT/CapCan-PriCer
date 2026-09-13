// =========================================================================
// KHỐI DỮ LIỆU: 1D13 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D13 = [
  {
    "id": "1D133DS1",
    "question": "Cho biểu thức $H=\\dfrac{\\sin (x-2024\\pi)+\\cos \\left(\\dfrac{\\pi}{2}-x\\right)}{\\sin (\\pi-x)+\\sin (\\pi+x)-2}$.",
    "subQuestions": [
      {
        "text": "$\\sin (\\pi-x)=\\sin x$",
        "answer": true
      },
      {
        "text": "$\\cos \\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$",
        "answer": true
      },
      {
        "text": "$\\sin (x-2024\\pi)=-\\sin x$",
        "answer": false
      },
      {
        "text": "Rút gọn biểu thức $H=0$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>Ta có $\\sin (\\pi-x)=\\sin x$.<br>- <strong>Đúng</strong>.<br>Ta có $\\cos \\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$.<br>- <strong>Sai</strong>.<br>Ta có $\\sin (x-2024\\pi)=\\sin x$.<br>- <strong>Sai</strong>.<br>$H=\\dfrac{\\sin (x-2024\\pi)+\\cos \\left(\\dfrac{\\pi}{2}-x\\right)}{\\sin (\\pi-x)+\\sin (\\pi+x)-2}=\\dfrac{\\sin x+\\sin x}{\\sin x-\\sin x-2}=-\\sin x$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D135DS1",
    "question": "Xét tính đúng sai của các phát biểu sau:",
    "subQuestions": [
      {
        "text": "$\\sin \\left(a+b\\right)=\\sin a \\cos b + \\cos a \\sin b$",
        "answer": true
      },
      {
        "text": "$\\sin 31^{\\circ} \\cdot \\cos 12^{\\circ} + \\cos 12^{\\circ} \\cdot \\sin 31^{\\circ}=\\sin 19^{\\circ}$",
        "answer": false
      },
      {
        "text": "Cho $\\cos x=\\dfrac{4}{5}$, $x \\in \\left(-\\dfrac{\\pi}{2};0 \\right)$. Giá trị của $\\sin 2x$ là $-\\dfrac{24}{25}$",
        "answer": true
      },
      {
        "text": "Cho $\\dfrac{\\sin^4{\\alpha}}{a}+\\dfrac{\\cos^4{\\alpha}}{b}=\\dfrac{1}{a+b}$. Giá trị của biểu thức: $A=\\dfrac{\\sin^{8}\\alpha}{a^{3}} + \\dfrac{\\cos^{8}\\alpha}{b^{3}}=\\dfrac{1}{a^{3}+b^{3}}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\sin 31^{\\circ} \\cdot \\cos 12^{\\circ} + \\cos 12^{\\circ} \\cdot \\sin 31^{\\circ}=2\\sin 31^{\\circ} \\cdot \\cos 12^{\\circ}$.<br>- Vì $x\\in\\left(-\\dfrac{\\pi}{2};0\\right)$ nên $\\cos x&gt;0$ và $\\sin x&lt;0$. <br>Từ $\\cos x=\\dfrac{4}{5}\\Rightarrow \\sin x=-\\sqrt{1-\\cos^2 x}=-\\dfrac{3}{5}$.<br>Suy ra $\\sin 2x=2\\sin x\\cos x=2\\cdot\\left(-\\dfrac{3}{5}\\right)\\cdot\\dfrac{4}{5}=-\\dfrac{24}{25}$.<br><br>- Thay $\\sin^2\\alpha = 1 - \\cos^2\\alpha$ vào đẳng thức $\\dfrac{\\sin^4\\alpha}{a}+\\dfrac{\\cos^4\\alpha}{b}=\\dfrac{1}{a+b}$, ta có: <br>\\allowdisplaybreaks \\[\\begin{array}{rcl} & & \\dfrac{\\left(1-\\cos^2\\alpha\\right)^2}{a}+\\dfrac{\\cos^4\\alpha}{b}=\\dfrac{1}{a+b}\\\\ &\\Leftrightarrow & b(a+b) \\left(1-2\\cos^2\\alpha +\\cos^4\\alpha\\right)+a(a+b){\\cos^4\\alpha}=ab\\\\ &\\Leftrightarrow & (a+b)^2\\cos^4\\alpha - 2b(a+b)\\cos^2 \\alpha + b^{2} = 0\\\\ &\\Leftrightarrow & \\left[(a+b)\\cos^2\\alpha-b\\right]^2=0\\\\ &\\Leftrightarrow & \\cos^2\\alpha = \\dfrac{b}{a+b}. \\end{array}\\] Từ đó suy ra $\\sin^2\\alpha = \\dfrac{a}{a+b}$.<br>Do đó $A=\\dfrac{\\sin^8\\alpha}{a^3}+\\dfrac{\\cos^8\\alpha}{b^3}=\\dfrac{\\left(\\dfrac{a}{a+b}\\right)^4}{a^3}+\\dfrac{\\left(\\dfrac{b}{a+b}\\right)^4}{b^3}=\\dfrac{1}{\\left(a+b\\right)^3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D133DS2",
    "question": "Cho biết $\\sin \\alpha = \\dfrac{1}{3}$ và $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "$\\cos 2\\alpha &lt; 0$",
        "answer": false
      },
      {
        "text": "$\\sin 2\\alpha = -\\dfrac{4\\sqrt{2}}{9}$",
        "answer": true
      },
      {
        "text": "$\\tan \\alpha &gt; 0$",
        "answer": false
      },
      {
        "text": "$\\cos \\alpha = -\\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      }
    ],
    "explain": "Ta có $\\cos\\alpha=1-\\sin^2\\alpha=1-\\dfrac{1}{9}=\\dfrac{8}{9}\\Rightarrow\\cos\\alpha=-\\dfrac{2\\sqrt{2}}{3}$ (vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$)<br><br>- <strong>Sai</strong>. $\\cos2\\alpha=1-2\\sin^2\\alpha=1-\\dfrac{2}{9}=\\dfrac{7}{9}&gt;0$.<br>- <strong>Đúng</strong>. $\\sin 2\\alpha =2\\sin \\alpha\\cdot\\cos\\alpha=2\\cdot\\dfrac{1}{3}\\cdot\\dfrac{-2\\sqrt{2}}{3}= -\\dfrac{4\\sqrt{2}}{9}$.<br>- <strong>Sai</strong>. $\\tan \\alpha =\\dfrac{\\sin\\alpha}{\\cos\\alpha}=\\dfrac{\\tfrac{1}{3}}{\\tfrac{-2\\sqrt{2}}{3}}=-\\dfrac{\\sqrt{2}}{4}&lt;0$.<br>- <strong>Đúng</strong>. Ta có $\\cos \\alpha = -\\dfrac{2\\sqrt{2}}{3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
