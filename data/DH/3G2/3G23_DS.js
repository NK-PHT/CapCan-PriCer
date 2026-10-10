window.dungSai3G23 = [
  {
    "id": "3G231DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau về tích phân suy rộng loại 1:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x^3}=\\dfrac12$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^{+\\infty}e^{-3x}\\,dx=3$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{\\sqrt{x}}$ phân kỳ",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_{-\\infty}^{+\\infty}x\\,dx$ hội tụ và bằng $0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x^3}=\\lim_{b\\to+\\infty}\\left.\\left(-\\dfrac{1}{2x^2}\\right)\\right|_1^b=\\lim_{b\\to+\\infty}\\left(\\dfrac12-\\dfrac{1}{2b^2}\\right)=\\dfrac12$.<br>- <strong>Sai</strong>.<br>  $\\displaystyle\\int_0^{+\\infty}e^{-3x}\\,dx=\\lim_{b\\to+\\infty}\\left.\\left(-\\dfrac{e^{-3x}}{3}\\right)\\right|_0^b=\\lim_{b\\to+\\infty}\\dfrac{1-e^{-3b}}{3}=\\dfrac13\\neq 3$.<br>- <strong>Đúng</strong>.<br>  $\\displaystyle\\int_1^{b}\\dfrac{dx}{\\sqrt x}=2\\sqrt b-2\\to+\\infty$ khi $b\\to+\\infty$ nên tích phân phân kỳ. (Tích phân $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x^\\alpha}$ hội tụ khi và chỉ khi $\\alpha\\gt 1$; ở đây $\\alpha=\\dfrac12$.)<br>- <strong>Sai</strong>.<br>  Theo định nghĩa, $\\displaystyle\\int_{-\\infty}^{+\\infty}x\\,dx$ hội tụ khi và chỉ khi cả hai tích phân $\\displaystyle\\int_{-\\infty}^{0}x\\,dx$ và $\\displaystyle\\int_0^{+\\infty}x\\,dx$ hội tụ. Nhưng $\\displaystyle\\int_0^{b}x\\,dx=\\dfrac{b^2}{2}\\to+\\infty$ nên tích phân phân kỳ. (Việc $\\displaystyle\\lim_{b\\to+\\infty}\\int_{-b}^{b}x\\,dx=0$ không có nghĩa là tích phân hội tụ.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau về tích phân suy rộng loại 2:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_0^1\\dfrac{dx}{\\sqrt{x}}=2$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_{-1}^{1}\\dfrac{dx}{x^2}=-2$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_0^1\\ln x\\,dx=-1$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^2\\dfrac{dx}{\\sqrt[3]{x-1}}=0$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Hàm số không xác định tại $x=0$. $\\displaystyle\\int_0^1\\dfrac{dx}{\\sqrt x}=\\lim_{a\\to0^+}\\left.2\\sqrt x\\right|_a^1=\\lim_{a\\to0^+}(2-2\\sqrt a)=2$.<br>- <strong>Sai</strong>.<br>  Hàm $\\dfrac{1}{x^2}$ không bị chặn tại $x=0\\in[-1;1]$ nên không được áp dụng trực tiếp công thức Newton–Leibniz (cách tính sai: $\\left.-\\dfrac1x\\right|_{-1}^{1}=-2$; hàm dưới dấu tích phân dương nên kết quả âm là vô lý). Ta có $\\displaystyle\\int_0^1\\dfrac{dx}{x^2}=\\lim_{a\\to0^+}\\left(\\dfrac1a-1\\right)=+\\infty$ nên tích phân đã cho phân kỳ.<br>- <strong>Đúng</strong>.<br>  Từng phần: $\\displaystyle\\int_a^1\\ln x\\,dx=\\left.(x\\ln x-x)\\right|_a^1=-1-a\\ln a+a$. Vì $\\displaystyle\\lim_{a\\to0^+}a\\ln a=0$ nên $\\displaystyle\\int_0^1\\ln x\\,dx=-1$.<br>- <strong>Đúng</strong>.<br>  Hàm số không xác định tại $x=1$. Một nguyên hàm là $\\dfrac32\\sqrt[3]{(x-1)^2}$. Ta có $\\displaystyle\\int_0^1\\dfrac{dx}{\\sqrt[3]{x-1}}=\\lim_{b\\to1^-}\\left.\\dfrac32\\sqrt[3]{(x-1)^2}\\right|_0^b=-\\dfrac32$ và $\\displaystyle\\int_1^2\\dfrac{dx}{\\sqrt[3]{x-1}}=\\lim_{a\\to1^+}\\left.\\dfrac32\\sqrt[3]{(x-1)^2}\\right|_a^2=\\dfrac32$. Cả hai hội tụ nên tích phân hội tụ và bằng $-\\dfrac32+\\dfrac32=0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231DS3",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_1^{+\\infty}\\dfrac{x+1}{x^3+2}\\,dx$ hội tụ",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_2^{+\\infty}\\dfrac{dx}{\\ln x}$ hội tụ",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_1^{+\\infty}\\dfrac{\\sin^2 x}{x^2}\\,dx$ hội tụ",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_1^{+\\infty}e^{-x^2}\\,dx$ phân kỳ",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Với $f(x)=\\dfrac{x+1}{x^3+2}\\gt 0$ và $g(x)=\\dfrac{1}{x^2}$: $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{f(x)}{g(x)}=\\lim_{x\\to+\\infty}\\dfrac{x^3+x^2}{x^3+2}=1\\in(0;+\\infty)$. Mà $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x^2}$ hội tụ ($\\alpha=2\\gt 1$) nên tích phân đã cho hội tụ (tiêu chuẩn so sánh dạng giới hạn).<br>- <strong>Sai</strong>.<br>  Với $x\\ge 2$: $0\\lt \\ln x\\lt x$ nên $\\dfrac{1}{\\ln x}\\gt \\dfrac{1}{x}\\gt 0$. Mà $\\displaystyle\\int_2^{+\\infty}\\dfrac{dx}{x}=\\lim_{b\\to+\\infty}(\\ln b-\\ln 2)=+\\infty$ (phân kỳ) nên tích phân đã cho phân kỳ (tiêu chuẩn so sánh).<br>- <strong>Đúng</strong>.<br>  $0\\le\\dfrac{\\sin^2 x}{x^2}\\le\\dfrac{1}{x^2}$ với $x\\ge1$ và $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x^2}=1$ hội tụ nên tích phân đã cho hội tụ (tiêu chuẩn so sánh).<br>- <strong>Sai</strong>.<br>  Với $x\\ge1$: $x^2\\ge x$ nên $0\\lt e^{-x^2}\\le e^{-x}$, mà $\\displaystyle\\int_1^{+\\infty}e^{-x}\\,dx=e^{-1}$ hội tụ. Do đó tích phân đã cho hội tụ (dù nguyên hàm của $e^{-x^2}$ không biểu diễn được qua hàm sơ cấp).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G231DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\int_0^1\\dfrac{dx}{\\sqrt{x}+x^2}$ hội tụ",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^1\\dfrac{dx}{x-\\sin x}$ hội tụ",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\int_0^1\\dfrac{dx}{e^x-1}$ phân kỳ",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int_0^1\\dfrac{\\sqrt{x}}{e^{\\sin x}-1}\\,dx$ phân kỳ",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Tích phân suy rộng loại 2 tại $x=0$. Với $x\\in(0;1]$: $0\\lt \\dfrac{1}{\\sqrt x+x^2}\\lt \\dfrac{1}{\\sqrt x}$ và $\\displaystyle\\int_0^1\\dfrac{dx}{\\sqrt x}=2$ hội tụ nên tích phân đã cho hội tụ (tiêu chuẩn so sánh).<br>- <strong>Sai</strong>.<br>  Trên $(0;1]$ có $x-\\sin x\\gt 0$ và $x-\\sin x\\sim\\dfrac{x^3}{6}$ khi $x\\to0^+$, nên với $g(x)=\\dfrac{1}{x^3}$: $\\displaystyle\\lim_{x\\to0^+}\\dfrac{1/(x-\\sin x)}{1/x^3}=6$. Mà $\\displaystyle\\int_0^1\\dfrac{dx}{x^3}$ phân kỳ ($\\alpha=3\\ge1$) nên tích phân đã cho phân kỳ.<br>- <strong>Đúng</strong>.<br>  $e^x-1\\sim x$ khi $x\\to0^+$ nên $\\displaystyle\\lim_{x\\to0^+}\\dfrac{1/(e^x-1)}{1/x}=1$. Mà $\\displaystyle\\int_0^1\\dfrac{dx}{x}$ phân kỳ nên tích phân đã cho phân kỳ (tiêu chuẩn so sánh dạng giới hạn).<br>- <strong>Sai</strong>.<br>  Khi $x\\to0^+$: $e^{\\sin x}-1\\sim\\sin x\\sim x$ nên $\\dfrac{\\sqrt x}{e^{\\sin x}-1}\\sim\\dfrac{1}{\\sqrt x}$, tức $\\displaystyle\\lim_{x\\to0^+}\\dfrac{\\sqrt x/(e^{\\sin x}-1)}{1/\\sqrt x}=1$. Mà $\\displaystyle\\int_0^1\\dfrac{dx}{\\sqrt x}$ hội tụ ($\\alpha=\\dfrac12\\lt 1$) nên tích phân đã cho hội tụ.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
