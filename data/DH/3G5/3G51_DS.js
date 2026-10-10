window.dungSai3G51 = [
  {
    "id": "3G511DS1",
    "question": "Cho phương trình vi phân $y'=2xy^2$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Với $y\\neq 0$, phương trình có nghiệm tổng quát $y=-\\dfrac{1}{x^2+C}$",
        "answer": true
      },
      {
        "text": "Hàm $y\\equiv 0$ cũng là một nghiệm của phương trình",
        "answer": true
      },
      {
        "text": "Nghiệm của bài toán Cauchy với điều kiện $y(1)=-1$ (xét trên $x\\gt 0$) thỏa mãn $y(2)=-\\dfrac12$",
        "answer": false
      },
      {
        "text": "Hàm $y=\\dfrac{1}{x^2+1}$ là một nghiệm của phương trình",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Với $y\\neq0$, tách biến: $\\dfrac{dy}{y^2}=2x\\,dx\\Rightarrow\\displaystyle\\int\\frac{dy}{y^2}=\\int 2x\\,dx\\Rightarrow -\\dfrac1y=x^2+C\\Rightarrow y=-\\dfrac{1}{x^2+C}$.<br>  Thử lại: $y'=\\dfrac{2x}{(x^2+C)^2}=2x\\cdot\\dfrac{1}{(x^2+C)^2}=2xy^2$.<br>- <strong>Đúng</strong>.<br>  Thay $y\\equiv0$: $y'=0$ và $2x\\cdot0^2=0$ nên $y\\equiv0$ là nghiệm (nghiệm này bị mất khi chia hai vế cho $y^2$).<br>- <strong>Sai</strong>.<br>  Từ $y(1)=-1$: $-\\dfrac{1}{1+C}=-1\\Rightarrow C=0$, nên $y=-\\dfrac{1}{x^2}$ và $y(2)=-\\dfrac14\\neq-\\dfrac12$.<br>- <strong>Sai</strong>.<br>  Với $y=\\dfrac{1}{x^2+1}$: $y'=-\\dfrac{2x}{(x^2+1)^2}$ còn $2xy^2=\\dfrac{2x}{(x^2+1)^2}$, khác nhau (chẳng hạn tại $x=1$: $-\\dfrac12\\neq\\dfrac12$). Đây là lỗi quên dấu trừ khi tính $\\displaystyle\\int\\frac{dy}{y^2}=-\\frac1y$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511DS2",
    "question": "Cho phương trình vi phân đẳng cấp $xy'=y+x\\cos^2\\dfrac{y}{x}$ với $x\\gt 0$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Đặt $y=tx$ với $t=t(x)$, phương trình trở thành $x\\dfrac{dt}{dx}=\\cos^2 t$",
        "answer": true
      },
      {
        "text": "Khi $\\cos\\dfrac{y}{x}\\neq0$, tích phân tổng quát của phương trình là $\\tan\\dfrac{y}{x}=\\ln x+C$",
        "answer": true
      },
      {
        "text": "Nghiệm thỏa mãn điều kiện $y(1)=\\dfrac{\\pi}{4}$ ứng với hằng số $C=\\dfrac{\\pi}{4}$",
        "answer": false
      },
      {
        "text": "Hàm $y=\\dfrac{\\pi x}{2}$ là một nghiệm của phương trình",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $y=tx\\Rightarrow y'=t+xt'$. Thay vào: $x(t+xt')=tx+x\\cos^2t\\Leftrightarrow x\\dfrac{dt}{dx}=\\cos^2t$.<br>- <strong>Đúng</strong>.<br>  Với $\\cos t\\neq0$, tách biến: $\\dfrac{dt}{\\cos^2t}=\\dfrac{dx}{x}\\Rightarrow\\tan t=\\ln x+C$, tức $\\tan\\dfrac{y}{x}=\\ln x+C$.<br>- <strong>Sai</strong>.<br>  Thay $x=1$, $y=\\dfrac{\\pi}{4}$: $\\tan\\dfrac{\\pi}{4}=\\ln1+C\\Rightarrow C=1\\neq\\dfrac{\\pi}{4}$. Nghiệm riêng là $y=x\\arctan(1+\\ln x)$.<br>- <strong>Đúng</strong>.<br>  Với $y=\\dfrac{\\pi x}{2}$: $xy'=\\dfrac{\\pi x}{2}$ và $y+x\\cos^2\\dfrac{\\pi}{2}=\\dfrac{\\pi x}{2}+0$. Hai vế bằng nhau nên đây là nghiệm (ứng với $\\cos t=0$, bị mất khi chia cho $\\cos^2t$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511DS3",
    "question": "Cho phương trình vi phân $y'=(x+y)^2$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Đặt $z=x+y$, phương trình trở thành $z'=1+z^2$",
        "answer": true
      },
      {
        "text": "Tích phân tổng quát của phương trình là $\\arctan(x+y)=C$",
        "answer": false
      },
      {
        "text": "Nghiệm của bài toán Cauchy với điều kiện $y(0)=0$ là $y=\\tan x-x$",
        "answer": true
      },
      {
        "text": "Hàm $y=\\tan x$ là một nghiệm của phương trình",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $z=x+y\\Rightarrow z'=1+y'=1+z^2$.<br>- <strong>Sai</strong>.<br>  Tách biến: $\\dfrac{dz}{1+z^2}=dx\\Rightarrow\\arctan z=x+C$. Tích phân tổng quát là $\\arctan(x+y)=x+C$ (mệnh đề đã quên tích phân vế phải $\\displaystyle\\int dx=x$).<br>- <strong>Đúng</strong>.<br>  Từ $\\arctan(x+y)=x+C$ và $y(0)=0$: $\\arctan0=C\\Rightarrow C=0$, nên $x+y=\\tan x$, tức $y=\\tan x-x$. Thử lại: $y'=\\tan^2x=(x+y)^2$.<br>- <strong>Sai</strong>.<br>  Với $y=\\tan x$: $y'=1+\\tan^2x$ còn $(x+\\tan x)^2=x^2+2x\\tan x+\\tan^2x$, không bằng nhau (chẳng hạn tại $x=1$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G511DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Phương trình $y'=e^{x-y}$ là phương trình tách biến",
        "answer": true
      },
      {
        "text": "Phương trình $y'=\\dfrac{x+y+1}{x}$ là phương trình đẳng cấp",
        "answer": false
      },
      {
        "text": "Hàm $y=Cx^2$ ($x\\gt 0$, $C$ là hằng số tùy ý) là nghiệm tổng quát của phương trình $xy'=2y$",
        "answer": true
      },
      {
        "text": "Hàm $y=\\sin x$ là nghiệm của phương trình $y'=\\sqrt{1-y^2}$ trên toàn bộ $\\mathbb{R}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $y'=e^xe^{-y}\\Leftrightarrow e^y\\,dy=e^x\\,dx$, mỗi vế chỉ chứa một biến nên là phương trình tách biến.<br>- <strong>Sai</strong>.<br>  Phương trình đẳng cấp phải có dạng $y'=f\\left(\\dfrac yx\\right)$. Ở đây $\\dfrac{x+y+1}{x}=1+\\dfrac yx+\\dfrac1x$ còn số hạng $\\dfrac1x$ không biểu diễn được qua $\\dfrac yx$ (viết dạng $(x+y+1)dx-x\\,dy=0$ thì các số hạng không cùng bậc). Đây là phương trình tuyến tính cấp một.<br>- <strong>Đúng</strong>.<br>  Với $y\\neq0$: $\\dfrac{dy}{y}=\\dfrac{2\\,dx}{x}\\Rightarrow\\ln|y|=2\\ln|x|+C_1\\Rightarrow y=Cx^2$; $C=0$ cho nghiệm $y\\equiv0$. Thử lại: $xy'=x\\cdot2Cx=2Cx^2=2y$.<br>- <strong>Sai</strong>.<br>  $y'=\\cos x$ còn $\\sqrt{1-\\sin^2x}=|\\cos x|$. Hai vế chỉ bằng nhau khi $\\cos x\\ge0$; chẳng hạn tại $x=\\pi$: $y'(\\pi)=-1$ nhưng $\\sqrt{1-\\sin^2\\pi}=1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
