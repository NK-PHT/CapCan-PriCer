window.dungSai3G13 = [
  {
    "id": "3G131DS1",
    "question": "Cho hàm số $f(x)=\\left(x^2-3\\right)e^x$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f$ có đúng hai điểm cực trị",
        "answer": true
      },
      {
        "text": "$f$ đạt cực đại tại $x=1$",
        "answer": false
      },
      {
        "text": "Giá trị cực tiểu của $f$ bằng $-2e$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của $f$ trên đoạn $[0;2]$ bằng $f(0)=-3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f'(x)=2xe^x+\\left(x^2-3\\right)e^x=\\left(x^2+2x-3\\right)e^x=(x-1)(x+3)e^x$. $f'$ đổi dấu khi qua $x=-3$ và $x=1$ nên $f$ có đúng hai điểm cực trị.<br>- <strong>Sai</strong>.<br>  $f'(x) \\lt 0$ trên $(-3;1)$ và $f'(x)\\gt 0$ trên $(1;+\\infty)$ nên $x=1$ là điểm cực tiểu (cực đại tại $x=-3$).<br>- <strong>Đúng</strong>.<br>  Giá trị cực tiểu: $f(1)=(1-3)e=-2e$.<br>- <strong>Sai</strong>.<br>  Trên $[0;2]$ chỉ có điểm tới hạn $x=1$. So sánh $f(0)=-3$, $f(1)=-2e\\approx-5{,}44$, $f(2)=e^2$: giá trị nhỏ nhất là $-2e$ (đạt tại $x=1$), không phải $-3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau về giới hạn và quy tắc L'Hospital:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\lim_{x\\to 0}\\dfrac{e^x-1-x}{x^2}=\\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 0^+}x^{\\sin x}=0$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{x\\to 0}\\left(\\dfrac{1}{x}-\\dfrac{1}{e^x-1}\\right)=\\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "Vì $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{(x+\\sin x)'}{(x)'}=\\lim_{x\\to+\\infty}(1+\\cos x)$ không tồn tại nên $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{x+\\sin x}{x}$ không tồn tại",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Dạng $\\dfrac00$, áp dụng quy tắc L'Hospital hai lần: $\\displaystyle\\lim_{x\\to0}\\dfrac{e^x-1-x}{x^2}=\\lim_{x\\to0}\\dfrac{e^x-1}{2x}=\\lim_{x\\to0}\\dfrac{e^x}{2}=\\dfrac12$.<br>- <strong>Sai</strong>.<br>  Dạng $0^0$: $x^{\\sin x}=e^{\\sin x\\ln x}$. $\\displaystyle\\lim_{x\\to0^+}\\sin x\\ln x=\\lim_{x\\to0^+}x\\ln x=\\lim_{x\\to0^+}\\dfrac{\\ln x}{1/x}=\\lim_{x\\to0^+}\\dfrac{1/x}{-1/x^2}=\\lim_{x\\to0^+}(-x)=0$. Vậy giới hạn bằng $e^0=1\\neq0$.<br>- <strong>Đúng</strong>.<br>  Dạng $\\infty-\\infty$, quy đồng: $\\dfrac{e^x-1-x}{x(e^x-1)}$. Áp dụng L'Hospital: $\\displaystyle\\lim_{x\\to0}\\dfrac{e^x-1}{e^x-1+xe^x}=\\lim_{x\\to0}\\dfrac{e^x}{2e^x+xe^x}=\\dfrac12$.<br>- <strong>Sai</strong>.<br>  Quy tắc L'Hospital chỉ cho kết luận khi $\\lim\\dfrac{f'}{g'}$ tồn tại; nếu giới hạn này không tồn tại thì chưa kết luận được gì. Thực tế $\\dfrac{x+\\sin x}{x}=1+\\dfrac{\\sin x}{x}\\to1$ vì $\\left|\\dfrac{\\sin x}{x}\\right|\\le\\dfrac1x\\to0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131DS3",
    "question": "Cho hàm số $f(x)=e^x\\cos x$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Trong khai triển Maclaurin của $f$, hệ số của $x^2$ bằng $1$",
        "answer": false
      },
      {
        "text": "Khai triển Maclaurin của $f$ đến cấp $3$ là $f(x)=1+x-\\dfrac{x^3}{3}+o\\left(x^3\\right)$",
        "answer": true
      },
      {
        "text": "$f'''(0)=-\\dfrac{1}{3}$",
        "answer": false
      },
      {
        "text": "Khai triển Taylor của hàm số $g(x)=\\dfrac{1}{x}$ tại $x_0=1$ đến cấp $2$ là $g(x)=1-(x-1)+(x-1)^2+o\\left((x-1)^2\\right)$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  $e^x=1+x+\\dfrac{x^2}{2}+\\dfrac{x^3}{6}+o(x^3)$, $\\cos x=1-\\dfrac{x^2}{2}+o(x^3)$. Hệ số của $x^2$ trong tích: $\\dfrac12-\\dfrac12=0\\neq1$.<br>- <strong>Đúng</strong>.<br>  Nhân hai khai triển và giữ các số hạng bậc $\\le3$: $1+x+\\left(\\dfrac12-\\dfrac12\\right)x^2+\\left(\\dfrac16-\\dfrac12\\right)x^3=1+x-\\dfrac{x^3}{3}$.<br>- <strong>Sai</strong>.<br>  Hệ số của $x^3$ trong khai triển Maclaurin là $\\dfrac{f'''(0)}{3!}=-\\dfrac13$, nên $f'''(0)=-\\dfrac{3!}{3}=-2\\neq-\\dfrac13$.<br>- <strong>Đúng</strong>.<br>  $g(1)=1$, $g'(x)=-\\dfrac{1}{x^2}$, $g'(1)=-1$, $g''(x)=\\dfrac{2}{x^3}$, $g''(1)=2$. Khai triển: $g(x)=1-(x-1)+\\dfrac{2}{2!}(x-1)^2+o\\left((x-1)^2\\right)=1-(x-1)+(x-1)^2+o\\left((x-1)^2\\right)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G131DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau về các định lý giá trị trung bình:",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)=x^2-4x+1$ thỏa mãn định lý Rolle trên đoạn $[0;4]$ và điểm $c$ thỏa mãn $f'(c)=0$ là $c=2$",
        "answer": true
      },
      {
        "text": "Áp dụng định lý Lagrange cho $f(x)=x^3$ trên đoạn $[0;3]$, điểm $c\\in(0;3)$ thỏa mãn $f(3)-f(0)=f'(c)\\,(3-0)$ là $c=\\dfrac{3}{2}$",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)=|x|$ thỏa mãn mọi giả thiết của định lý Rolle trên đoạn $[-1;1]$",
        "answer": false
      },
      {
        "text": "Áp dụng định lý Cauchy cho $f(x)=x^2$, $g(x)=x^3$ trên đoạn $[1;2]$, điểm $c\\in(1;2)$ thỏa mãn $\\dfrac{f(2)-f(1)}{g(2)-g(1)}=\\dfrac{f'(c)}{g'(c)}$ là $c=\\dfrac{14}{9}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f$ liên tục trên $[0;4]$, khả vi trên $(0;4)$, $f(0)=f(4)=1$ nên thỏa định lý Rolle. $f'(c)=2c-4=0\\Leftrightarrow c=2\\in(0;4)$.<br>- <strong>Sai</strong>.<br>  $\\dfrac{f(3)-f(0)}{3-0}=\\dfrac{27}{3}=9=f'(c)=3c^2\\Leftrightarrow c^2=3$, nên $c=\\sqrt3\\in(0;3)$, không phải trung điểm $\\dfrac32$.<br>- <strong>Sai</strong>.<br>  $f(-1)=f(1)=1$ và $f$ liên tục trên $[-1;1]$, nhưng $f$ không khả vi tại $x=0\\in(-1;1)$ (đạo hàm trái bằng $-1$, phải bằng $1$). Do đó không thỏa giả thiết; thực tế không có $c$ nào để $f'(c)=0$.<br>- <strong>Đúng</strong>.<br>  $f,g$ liên tục trên $[1;2]$, khả vi trên $(1;2)$, $g'(x)=3x^2\\neq0$ trên $(1;2)$. $\\dfrac{f(2)-f(1)}{g(2)-g(1)}=\\dfrac{3}{7}$, $\\dfrac{f'(c)}{g'(c)}=\\dfrac{2c}{3c^2}=\\dfrac{2}{3c}$. Giải $\\dfrac{2}{3c}=\\dfrac37\\Leftrightarrow c=\\dfrac{14}{9}\\in(1;2)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
