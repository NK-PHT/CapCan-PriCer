window.dungSai3G52 = [
  {
    "id": "3G521DS1",
    "question": "Cho phương trình vi phân tuyến tính $y'+\\dfrac{2}{x}y=x^2$ với $x\\gt 0$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Thừa số tích phân của phương trình là $\\mu(x)=e^{\\int\\frac2x\\,dx}=x^2$",
        "answer": true
      },
      {
        "text": "Nghiệm tổng quát của phương trình là $y=\\dfrac{x^3}{3}+\\dfrac{C}{x^2}$",
        "answer": false
      },
      {
        "text": "Nghiệm thỏa mãn $y(1)=\\dfrac65$ là $y=\\dfrac{x^3}{5}+\\dfrac{1}{x^2}$",
        "answer": true
      },
      {
        "text": "Mọi nghiệm của phương trình đều bị chặn khi $x\\to0^+$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $p(x)=\\dfrac2x$, $\\displaystyle\\int p(x)\\,dx=2\\ln x$ nên $\\mu(x)=e^{2\\ln x}=x^2$.<br>- <strong>Sai</strong>.<br>  Nhân hai vế với $x^2$: $(x^2y)'=x^2\\cdot x^2=x^4\\Rightarrow x^2y=\\dfrac{x^5}{5}+C\\Rightarrow y=\\dfrac{x^3}{5}+\\dfrac{C}{x^2}$. Mệnh đề đã quên nhân vế phải với thừa số tích phân (tích phân $x^2$ thay vì $x^4$).<br>- <strong>Đúng</strong>.<br>  Từ $y=\\dfrac{x^3}{5}+\\dfrac{C}{x^2}$ và $y(1)=\\dfrac65$: $\\dfrac15+C=\\dfrac65\\Rightarrow C=1$.<br>- <strong>Sai</strong>.<br>  Với $C\\neq0$ thì $\\dfrac{C}{x^2}\\to\\pm\\infty$ khi $x\\to0^+$; ví dụ nghiệm $y=\\dfrac{x^3}{5}+\\dfrac1{x^2}\\to+\\infty$. Chỉ nghiệm ứng với $C=0$ là bị chặn.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G521DS2",
    "question": "Cho phương trình Bernoulli $y'+\\dfrac{y}{x}=xy^2$ với $x\\gt 0$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Với $y\\neq0$, đặt $z=\\dfrac1y$ thì phương trình trở thành $z'+\\dfrac{z}{x}=x$",
        "answer": false
      },
      {
        "text": "Với $y\\neq0$, nghiệm tổng quát của phương trình là $y=\\dfrac{1}{x(C-x)}$",
        "answer": true
      },
      {
        "text": "Hàm $y\\equiv0$ là một nghiệm của phương trình",
        "answer": true
      },
      {
        "text": "Nghiệm thỏa mãn $y(1)=1$ có $y\\left(\\dfrac32\\right)=\\dfrac43$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Chia hai vế cho $y^2$: $\\dfrac{y'}{y^2}+\\dfrac{1}{xy}=x$. Với $z=\\dfrac1y$ thì $z'=-\\dfrac{y'}{y^2}$, nên $-z'+\\dfrac zx=x\\Leftrightarrow z'-\\dfrac zx=-x$ (mệnh đề sai dấu).<br>- <strong>Đúng</strong>.<br>  Giải $z'-\\dfrac zx=-x$: thừa số tích phân $\\dfrac1x$, $\\left(\\dfrac zx\\right)'=-1\\Rightarrow z=x(C-x)$. Vậy $y=\\dfrac{1}{x(C-x)}$.<br>- <strong>Đúng</strong>.<br>  $y\\equiv0$: $y'=0$, vế trái $0+0=0$ và vế phải $x\\cdot0=0$.<br>- <strong>Đúng</strong>.<br>  Từ $y(1)=1$: $\\dfrac{1}{C-1}=1\\Rightarrow C=2$, $y=\\dfrac{1}{x(2-x)}$. Khi đó $y\\left(\\dfrac32\\right)=\\dfrac{1}{\\frac32\\cdot\\frac12}=\\dfrac43$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G521DS3",
    "question": "Cho phương trình vi phân $(2xy+\\cos x)\\,dx+(x^2+2y)\\,dy=0$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Đây là phương trình vi phân toàn phần vì $\\dfrac{\\partial P}{\\partial y}=\\dfrac{\\partial Q}{\\partial x}=2x$",
        "answer": true
      },
      {
        "text": "Tích phân tổng quát của phương trình là $x^2y+\\sin x+y^2=C$",
        "answer": true
      },
      {
        "text": "Hàm $U(x,y)=x^2y+\\sin x$ thỏa mãn $dU=(2xy+\\cos x)\\,dx+(x^2+2y)\\,dy$",
        "answer": false
      },
      {
        "text": "Nghiệm $y=y(x)$ thỏa mãn $y(0)=1$ có $y'(0)=-\\dfrac12$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $P=2xy+\\cos x\\Rightarrow P'_y=2x$; $Q=x^2+2y\\Rightarrow Q'_x=2x$. Hai đạo hàm bằng nhau nên phương trình là toàn phần.<br>- <strong>Đúng</strong>.<br>  $U=\\displaystyle\\int(2xy+\\cos x)\\,dx+C(y)=x^2y+\\sin x+C(y)$. Từ $U'_y=Q$: $x^2+C'(y)=x^2+2y\\Rightarrow C(y)=y^2$. Tích phân tổng quát: $x^2y+\\sin x+y^2=C$.<br>- <strong>Sai</strong>.<br>  Với $U=x^2y+\\sin x$ thì $U'_y=x^2\\neq x^2+2y$; mệnh đề đã bỏ quên hàm $C(y)=y^2$.<br>- <strong>Đúng</strong>.<br>  Từ phương trình: $y'=-\\dfrac{2xy+\\cos x}{x^2+2y}$. Tại $(0;1)$: $y'(0)=-\\dfrac{0+1}{0+2}=-\\dfrac12$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G521DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Phương trình $(x+e^y)\\,y'=1$ là phương trình tuyến tính cấp một đối với hàm $x=x(y)$",
        "answer": true
      },
      {
        "text": "Phương trình $y'+y^2=x$ là phương trình vi phân tuyến tính cấp một",
        "answer": false
      },
      {
        "text": "Phương trình $(y+2x)\\,dx+(y-x)\\,dy=0$ là phương trình vi phân toàn phần",
        "answer": false
      },
      {
        "text": "Phương trình $xy'-y=x^2$ ($x\\gt 0$) có nghiệm tổng quát $y=x^2+Cx$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Coi $x$ là hàm của $y$: $\\dfrac{dx}{dy}=x+e^y\\Leftrightarrow x'-x=e^y$, có dạng tuyến tính với $p(y)=-1$, $f(y)=e^y$ (nghiệm $x=(y+C)e^y$).<br>- <strong>Sai</strong>.<br>  Phương trình chứa $y^2$ nên không tuyến tính đối với $y$ (đây là phương trình Riccati).<br>- <strong>Sai</strong>.<br>  $P=y+2x\\Rightarrow P'_y=1$; $Q=y-x\\Rightarrow Q'_x=-1$. Vì $P'_y\\neq Q'_x$ nên không là phương trình toàn phần.<br>- <strong>Đúng</strong>.<br>  Viết lại $y'-\\dfrac yx=x$, thừa số tích phân $\\mu=e^{-\\ln x}=\\dfrac1x$: $\\left(\\dfrac yx\\right)'=1\\Rightarrow\\dfrac yx=x+C\\Rightarrow y=x^2+Cx$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
