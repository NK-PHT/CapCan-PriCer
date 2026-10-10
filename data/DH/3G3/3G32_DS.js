window.dungSai3G32 = [
  {
    "id": "3G321DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2^n+3^{n-1}}{6^n}=\\dfrac56$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\sum_{n=0}^{\\infty}\\left(-\\dfrac23\\right)^n=3$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{3}{4^n}=\\dfrac14$",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{4^n}{3^{n+1}}$ hội tụ và có tổng bằng $-\\dfrac43$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Tách: $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\dfrac13\\right)^n+\\dfrac13\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\dfrac12\\right)^n=\\dfrac{1/3}{1-1/3}+\\dfrac13\\cdot\\dfrac{1/2}{1-1/2}=\\dfrac12+\\dfrac13=\\dfrac56$.<br>- <strong>Sai</strong>.<br>  Chuỗi hình học có số hạng đầu $u_0=1$, công bội $r=-\\dfrac23$, $|r|\\lt1$ nên tổng bằng $\\dfrac{1}{1-r}=\\dfrac{1}{1+\\frac23}=\\dfrac35\\neq 3$ (giá trị $3$ là tổng khi công bội bằng $\\dfrac23$).<br>- <strong>Đúng</strong>.<br>  Số hạng đầu $u_2=\\dfrac{3}{16}$, công bội $r=\\dfrac14$: tổng bằng $\\dfrac{3/16}{1-1/4}=\\dfrac{3}{16}\\cdot\\dfrac43=\\dfrac14$.<br>- <strong>Sai</strong>.<br>  Đây là chuỗi hình học với công bội $r=\\dfrac43\\gt 1$; số hạng $\\dfrac{4^n}{3^{n+1}}\\to+\\infty\\neq 0$ nên chuỗi phân kỳ. Công thức $\\dfrac{u_1}{1-r}=\\dfrac{4/9}{1-4/3}=-\\dfrac43$ chỉ dùng được khi $|r|\\lt1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321DS2",
    "question": "Cho chuỗi số $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{(n+1)(n+3)}$ có tổng riêng thứ $N$ là $S_N$ (áp dụng cho các ý a, b, c). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\dfrac{1}{(n+1)(n+3)}=\\dfrac12\\left(\\dfrac{1}{n+1}-\\dfrac{1}{n+3}\\right)$ với mọi $n\\ge1$",
        "answer": true
      },
      {
        "text": "$S_N=\\dfrac12\\left(\\dfrac12+\\dfrac13-\\dfrac{1}{N+2}-\\dfrac{1}{N+3}\\right)$",
        "answer": true
      },
      {
        "text": "Tổng của chuỗi bằng $\\dfrac14$",
        "answer": false
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\ln\\dfrac{n+1}{n}$ hội tụ vì $\\displaystyle\\lim_{n\\to\\infty}\\ln\\dfrac{n+1}{n}=0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Quy đồng: $\\dfrac12\\cdot\\dfrac{(n+3)-(n+1)}{(n+1)(n+3)}=\\dfrac{1}{(n+1)(n+3)}$.<br>- <strong>Đúng</strong>.<br>  $S_N=\\dfrac12\\left[\\left(\\dfrac12-\\dfrac14\\right)+\\left(\\dfrac13-\\dfrac15\\right)+\\left(\\dfrac14-\\dfrac16\\right)+\\cdots+\\left(\\dfrac{1}{N+1}-\\dfrac{1}{N+3}\\right)\\right]$. Các số hạng triệt tiêu, chỉ còn $\\dfrac12+\\dfrac13$ và $-\\dfrac{1}{N+2}-\\dfrac{1}{N+3}$.<br>- <strong>Sai</strong>.<br>  $S=\\lim S_N=\\dfrac12\\left(\\dfrac12+\\dfrac13\\right)=\\dfrac{5}{12}\\neq\\dfrac14$ (giá trị $\\dfrac14$ do chỉ giữ lại số hạng $\\dfrac12$, bỏ sót $\\dfrac13$).<br>- <strong>Sai</strong>.<br>  $S_N=\\displaystyle\\sum_{n=1}^{N}\\big(\\ln(n+1)-\\ln n\\big)=\\ln(N+1)\\to+\\infty$ nên chuỗi phân kỳ. Điều kiện $\\lim a_n=0$ chỉ là điều kiện cần, không đủ để chuỗi hội tụ.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321DS3",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{5^n}{n!}$ hội tụ",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\dfrac{2n+1}{n+3}\\right)^n$ hội tụ",
        "answer": false
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(n!)^2}{(2n)!}$ hội tụ",
        "answer": true
      },
      {
        "text": "Vì $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{a_{n+1}}{a_n}=1$ với $a_n=\\dfrac{1}{n^2}$ nên theo tiêu chuẩn d’Alembert, chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^2}$ phân kỳ",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Tiêu chuẩn d’Alembert: $\\dfrac{a_{n+1}}{a_n}=\\dfrac{5^{n+1}}{(n+1)!}\\cdot\\dfrac{n!}{5^n}=\\dfrac{5}{n+1}\\to 0\\lt 1$ nên chuỗi hội tụ.<br>- <strong>Sai</strong>.<br>  Tiêu chuẩn Cauchy: $\\sqrt[n]{a_n}=\\dfrac{2n+1}{n+3}\\to 2\\gt 1$ nên chuỗi phân kỳ.<br>- <strong>Đúng</strong>.<br>  Tiêu chuẩn d’Alembert: $\\dfrac{a_{n+1}}{a_n}=\\dfrac{(n+1)^2}{(2n+1)(2n+2)}=\\dfrac{n+1}{2(2n+1)}\\to\\dfrac14\\lt1$ nên chuỗi hội tụ.<br>- <strong>Sai</strong>.<br>  Khi giới hạn tỉ số bằng $1$, tiêu chuẩn d’Alembert không kết luận được gì. Thực tế $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^2}$ hội tụ (chuỗi $\\sum\\frac{1}{n^p}$ với $p=2\\gt1$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G321DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n+1}{n^3+2}$ hội tụ",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{\\sqrt{n(n+1)}}$ hội tụ",
        "answer": false
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{1}{n\\ln^2 n}$ hội tụ",
        "answer": true
      },
      {
        "text": "Chuỗi $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{1+\\frac1n}}$ hội tụ vì số mũ $1+\\dfrac1n\\gt 1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  So sánh với $b_n=\\dfrac{1}{n^2}$: $\\dfrac{a_n}{b_n}=\\dfrac{n^3+n^2}{n^3+2}\\to 1$ (hữu hạn, khác $0$). Chuỗi $\\sum\\frac{1}{n^2}$ hội tụ ($p=2\\gt1$) nên chuỗi đã cho hội tụ.<br>- <strong>Sai</strong>.<br>  So sánh với $b_n=\\dfrac1n$: $\\dfrac{a_n}{b_n}=\\dfrac{n}{\\sqrt{n^2+n}}\\to 1$. Chuỗi điều hòa $\\sum\\frac1n$ phân kỳ nên chuỗi đã cho phân kỳ.<br>- <strong>Đúng</strong>.<br>  Hàm $f(x)=\\dfrac{1}{x\\ln^2x}$ dương, giảm trên $[2;+\\infty)$ và $\\displaystyle\\int_2^{+\\infty}\\dfrac{dx}{x\\ln^2x}=\\lim_{b\\to+\\infty}\\left[-\\dfrac{1}{\\ln x}\\right]_2^b=\\dfrac{1}{\\ln 2}$ hữu hạn. Theo tiêu chuẩn tích phân, chuỗi hội tụ.<br>- <strong>Sai</strong>.<br>  Tiêu chuẩn $\\sum\\frac{1}{n^p}$ chỉ áp dụng với $p$ là hằng số. Ở đây $\\dfrac{a_n}{1/n}=\\dfrac{1}{\\sqrt[n]{n}}\\to 1$, mà $\\sum\\frac1n$ phân kỳ nên chuỗi đã cho phân kỳ theo tiêu chuẩn so sánh.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
