window.dungSai3G33 = [
  {
    "id": "3G331DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{\\sqrt n+1}$ hội tụ",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n\\dfrac{n+1}{2n-1}$ hội tụ theo tiêu chuẩn Leibniz",
        "answer": false
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n\\dfrac{n}{n^2+4}$ hội tụ",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{(-1)^n}{\\sqrt n+(-1)^n}$ hội tụ vì $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{1}{\\sqrt n+(-1)^n}=0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $u_n=\\dfrac{1}{\\sqrt n+1}\\gt0$ giảm (mẫu tăng) và $u_n\\to0$. Theo tiêu chuẩn Leibniz, chuỗi đan dấu hội tụ.<br>- <strong>Sai</strong>.<br>  $u_n=\\dfrac{n+1}{2n-1}\\to\\dfrac12\\neq0$ nên số hạng $(-1)^nu_n$ không dần tới $0$: chuỗi phân kỳ (không thỏa điều kiện cần). Tiêu chuẩn Leibniz đòi hỏi $u_n\\to 0$.<br>- <strong>Đúng</strong>.<br>  Xét $f(x)=\\dfrac{x}{x^2+4}$: $f^{\\prime}(x)=\\dfrac{4-x^2}{(x^2+4)^2}\\lt0$ khi $x\\gt2$, nên $u_n=\\dfrac{n}{n^2+4}$ giảm khi $n\\ge2$; đồng thời $u_n\\to0$. Theo tiêu chuẩn Leibniz chuỗi hội tụ.<br>- <strong>Sai</strong>.<br>  Dãy $u_n=\\dfrac{1}{\\sqrt n+(-1)^n}$ không giảm ($u_2\\approx0{,}414\\lt u_3\\approx1{,}366$) nên không áp dụng được Leibniz. Thực tế $\\dfrac{(-1)^n}{\\sqrt n+(-1)^n}=\\dfrac{(-1)^n\\sqrt n}{n-1}-\\dfrac{1}{n-1}$; chuỗi $\\sum\\dfrac{(-1)^n\\sqrt n}{n-1}$ hội tụ (Leibniz) còn $\\sum\\dfrac{1}{n-1}$ phân kỳ, nên chuỗi đã cho phân kỳ.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{n\\sqrt n}$ hội tụ tuyệt đối",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{\\sqrt{n+1}}$ hội tụ tuyệt đối",
        "answer": false
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{\\sin n}{n^2}$ hội tụ tuyệt đối",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=2}^{\\infty}(-1)^n\\dfrac{\\ln n}{n}$ hội tụ tuyệt đối",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\left|\\dfrac{(-1)^n}{n\\sqrt n}\\right|=\\dfrac{1}{n^{3/2}}$, chuỗi $\\sum\\dfrac{1}{n^{3/2}}$ hội tụ ($p=\\dfrac32\\gt1$) nên chuỗi đã cho hội tụ tuyệt đối.<br>- <strong>Sai</strong>.<br>  Chuỗi trị tuyệt đối $\\sum\\dfrac{1}{\\sqrt{n+1}}$ phân kỳ (so sánh với $\\sum\\frac{1}{\\sqrt n}$, $p=\\frac12\\le1$). Chuỗi đan dấu hội tụ theo Leibniz ($\\frac{1}{\\sqrt{n+1}}$ giảm về $0$). Vậy chuỗi nửa hội tụ, không hội tụ tuyệt đối.<br>- <strong>Đúng</strong>.<br>  $\\left|\\dfrac{\\sin n}{n^2}\\right|\\le\\dfrac{1}{n^2}$ và $\\sum\\dfrac{1}{n^2}$ hội tụ, theo tiêu chuẩn so sánh $\\sum\\left|\\dfrac{\\sin n}{n^2}\\right|$ hội tụ.<br>- <strong>Sai</strong>.<br>  Với $n\\ge3$: $\\dfrac{\\ln n}{n}\\gt\\dfrac1n$ nên $\\sum\\dfrac{\\ln n}{n}$ phân kỳ. Chuỗi đan dấu vẫn hội tụ theo Leibniz ($f(x)=\\dfrac{\\ln x}{x}$ có $f^{\\prime}(x)=\\dfrac{1-\\ln x}{x^2}\\lt0$ khi $x\\gt e$, và $\\dfrac{\\ln n}{n}\\to0$). Vậy chuỗi nửa hội tụ, không hội tụ tuyệt đối.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331DS3",
    "question": "Cho chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x-2)^n}{n\\cdot 3^n}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Bán kính hội tụ của chuỗi là $R=\\dfrac13$",
        "answer": false
      },
      {
        "text": "Chuỗi hội tụ tại $x=-1$",
        "answer": true
      },
      {
        "text": "Chuỗi hội tụ tại $x=5$",
        "answer": false
      },
      {
        "text": "Miền hội tụ của chuỗi là $[-1;5)$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Với $a_n=\\dfrac{1}{n\\cdot3^n}$: $R=\\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|=\\lim\\dfrac{(n+1)3^{n+1}}{n\\cdot3^n}=3\\neq\\dfrac13$ (giá trị $\\dfrac13$ là $\\lim\\left|\\dfrac{a_{n+1}}{a_n}\\right|$, phải lấy nghịch đảo).<br>- <strong>Đúng</strong>.<br>  Tại $x=-1$: $x-2=-3$, chuỗi trở thành $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{n}$, hội tụ theo tiêu chuẩn Leibniz.<br>- <strong>Sai</strong>.<br>  Tại $x=5$: $x-2=3$, chuỗi trở thành $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n}$ (chuỗi điều hòa) phân kỳ.<br>- <strong>Đúng</strong>.<br>  Chuỗi hội tụ khi $|x-2|\\lt3\\Leftrightarrow-1\\lt x\\lt5$, phân kỳ khi $|x-2|\\gt3$. Kết hợp hai điểm biên: hội tụ tại $x=-1$, phân kỳ tại $x=5$. Miền hội tụ $[-1;5)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G331DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau về miền hội tụ của chuỗi hàm:",
    "subQuestions": [
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{x^n}{n!}$ hội tụ với mọi $x\\in\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}n^n x^n$ hội tụ với mọi $x$ thỏa $|x|\\lt1$",
        "answer": false
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\dfrac{x-1}{x+3}\\right)^n$ hội tụ khi và chỉ khi $x\\gt-1$",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^x}$ hội tụ khi và chỉ khi $x\\ge1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Với $a_n=\\dfrac{1}{n!}$: $R=\\lim\\dfrac{a_n}{a_{n+1}}=\\lim(n+1)=+\\infty$, nên chuỗi hội tụ (tuyệt đối) với mọi $x$.<br>- <strong>Sai</strong>.<br>  $\\sqrt[n]{|a_n|}=n\\to+\\infty$ nên $R=0$: chuỗi chỉ hội tụ tại $x=0$. Chẳng hạn với $x=\\dfrac12$ số hạng $\\left(\\dfrac n2\\right)^n\\to+\\infty$, chuỗi phân kỳ.<br>- <strong>Đúng</strong>.<br>  Với $x\\neq-3$, đây là chuỗi hình học công bội $q=\\dfrac{x-1}{x+3}$; hội tụ $\\Leftrightarrow|x-1|\\lt|x+3|\\Leftrightarrow(x-1)^2\\lt(x+3)^2\\Leftrightarrow 8x+8\\gt0\\Leftrightarrow x\\gt-1$.<br>- <strong>Sai</strong>.<br>  Tại $x=1$ chuỗi là chuỗi điều hòa $\\sum\\frac1n$, phân kỳ. Chuỗi $\\sum\\frac{1}{n^x}$ hội tụ khi và chỉ khi $x\\gt1$; miền hội tụ là $(1;+\\infty)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
