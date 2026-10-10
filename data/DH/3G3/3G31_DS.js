window.dungSai3G31 = [
  {
    "id": "3G311DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\dfrac{3n^3-2n+1}{1-6n^3}=-\\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\left(\\sqrt{n^2+4n}-n\\right)=4$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\left(1+\\dfrac{2}{n}\\right)^{3n}=e^6$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\left(\\dfrac{n-1}{n+2}\\right)^{n}=e^{-1}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Chia cả tử và mẫu cho $n^3$: $\\dfrac{3n^3-2n+1}{1-6n^3}=\\dfrac{3-\\frac{2}{n^2}+\\frac{1}{n^3}}{\\frac{1}{n^3}-6}\\to\\dfrac{3}{-6}=-\\dfrac12$.<br>- <strong>Sai</strong>.<br>  Nhân lượng liên hợp: $\\sqrt{n^2+4n}-n=\\dfrac{4n}{\\sqrt{n^2+4n}+n}=\\dfrac{4}{\\sqrt{1+\\frac{4}{n}}+1}\\to\\dfrac{4}{2}=2\\neq 4$.<br>- <strong>Đúng</strong>.<br>  $\\left(1+\\dfrac{2}{n}\\right)^{3n}=\\left[\\left(1+\\dfrac{2}{n}\\right)^{\\frac{n}{2}}\\right]^{6}$. Đặt $m=\\dfrac n2\\to\\infty$ thì $\\left(1+\\dfrac1m\\right)^m\\to e$, nên giới hạn bằng $e^6$.<br>- <strong>Sai</strong>.<br>  $\\dfrac{n-1}{n+2}=1-\\dfrac{3}{n+2}$ nên $\\left(\\dfrac{n-1}{n+2}\\right)^{n}=\\left[\\left(1-\\dfrac{3}{n+2}\\right)^{\\frac{n+2}{3}}\\right]^{\\frac{3n}{n+2}}$. Biểu thức trong ngoặc vuông dần tới $e^{-1}$, số mũ $\\dfrac{3n}{n+2}\\to 3$, nên giới hạn bằng $e^{-3}\\neq e^{-1}$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\dfrac{\\cos(n^2)}{n+1}=0$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{3^n+4^n}=7$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n+2\\sin n}{3n-\\cos n}=\\dfrac{1}{3}$",
        "answer": true
      },
      {
        "text": "Dãy số $u_n=(-1)^n\\dfrac{n}{n+1}$ hội tụ về $0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $-\\dfrac{1}{n+1}\\le\\dfrac{\\cos(n^2)}{n+1}\\le\\dfrac{1}{n+1}$ với mọi $n$ và hai dãy biên cùng dần tới $0$. Theo định lý kẹp, giới hạn bằng $0$.<br>- <strong>Sai</strong>.<br>  Ta có $4^n\\le 3^n+4^n\\le 2\\cdot 4^n$ nên $4\\le\\sqrt[n]{3^n+4^n}\\le 4\\sqrt[n]{2}$. Vì $\\sqrt[n]{2}\\to 1$ nên theo định lý kẹp giới hạn bằng $4\\neq 7$ (không được \"cộng các cơ số\").<br>- <strong>Đúng</strong>.<br>  Chia tử và mẫu cho $n$: $\\dfrac{1+\\frac{2\\sin n}{n}}{3-\\frac{\\cos n}{n}}$. Do $\\left|\\dfrac{\\sin n}{n}\\right|\\le\\dfrac1n$, $\\left|\\dfrac{\\cos n}{n}\\right|\\le\\dfrac1n$ nên theo định lý kẹp $\\dfrac{\\sin n}{n}\\to 0$, $\\dfrac{\\cos n}{n}\\to0$. Vậy giới hạn bằng $\\dfrac13$.<br>- <strong>Sai</strong>.<br>  Dãy con chỉ số chẵn $u_{2m}=\\dfrac{2m}{2m+1}\\to 1$, dãy con chỉ số lẻ $u_{2m+1}=-\\dfrac{2m+1}{2m+2}\\to -1$. Hai dãy con có giới hạn khác nhau nên $(u_n)$ không có giới hạn. (Kẹp $-\\dfrac{n}{n+1}\\le u_n\\le\\dfrac{n}{n+1}$ không dùng được vì hai dãy biên có giới hạn khác nhau là $-1$ và $1$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311DS3",
    "question": "Cho dãy số $(u_n)$ xác định bởi $u_1=1$ và $u_{n+1}=\\sqrt{2u_n+8}$ với mọi $n\\ge 1$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$u_2=\\sqrt{10}$",
        "answer": true
      },
      {
        "text": "Dãy $(u_n)$ là dãy giảm",
        "answer": false
      },
      {
        "text": "$0\\lt u_n\\lt 4$ với mọi $n\\ge 1$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}u_n=4$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $u_2=\\sqrt{2\\cdot 1+8}=\\sqrt{10}$.<br>- <strong>Sai</strong>.<br>  $u_2=\\sqrt{10}\\gt 1=u_1$. Tổng quát, $u_{n+1}-u_n=\\dfrac{2u_n+8-u_n^2}{\\sqrt{2u_n+8}+u_n}=\\dfrac{(4-u_n)(u_n+2)}{\\sqrt{2u_n+8}+u_n}\\gt 0$ khi $0\\lt u_n\\lt 4$, nên dãy tăng chứ không giảm.<br>- <strong>Đúng</strong>.<br>  Quy nạp: $u_1=1\\in(0;4)$. Nếu $0\\lt u_n\\lt 4$ thì $8\\lt 2u_n+8\\lt 16$, suy ra $2\\sqrt2\\lt u_{n+1}\\lt 4$.<br>- <strong>Đúng</strong>.<br>  Dãy tăng và bị chặn trên bởi $4$ nên hội tụ về $L\\ge 1$. Chuyển qua giới hạn: $L=\\sqrt{2L+8}\\Rightarrow L^2-2L-8=0\\Rightarrow L=4$ hoặc $L=-2$ (loại vì $L\\ge1$). Vậy $\\lim u_n=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n^5}{2^n}=0$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{n!}=1$",
        "answer": false
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\dfrac{5^n}{n!}=0$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n!}{3^n}=0$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đặt $u_n=\\dfrac{n^5}{2^n}\\gt 0$. Ta có $\\dfrac{u_{n+1}}{u_n}=\\dfrac12\\left(1+\\dfrac1n\\right)^5\\to\\dfrac12$, nên tồn tại $N$ để $\\dfrac{u_{n+1}}{u_n}\\le\\dfrac34$ khi $n\\ge N$. Khi đó $0\\lt u_n\\le u_N\\left(\\dfrac34\\right)^{n-N}\\to 0$, theo định lý kẹp $u_n\\to 0$.<br>- <strong>Sai</strong>.<br>  Với $n\\ge 2$: $n!\\ge\\left(\\dfrac n2\\right)^{n/2}$ (có ít nhất $\\dfrac n2$ thừa số không nhỏ hơn $\\dfrac n2$), nên $\\sqrt[n]{n!}\\ge\\sqrt{\\dfrac n2}\\to+\\infty$. Vậy $\\lim\\sqrt[n]{n!}=+\\infty$ (đừng nhầm với $\\lim\\sqrt[n]{n}=1$).<br>- <strong>Đúng</strong>.<br>  Với $n\\ge 10$: $\\dfrac{5^n}{n!}=\\dfrac{5^{10}}{10!}\\cdot\\dfrac{5}{11}\\cdot\\dfrac{5}{12}\\cdots\\dfrac{5}{n}\\le\\dfrac{5^{10}}{10!}\\left(\\dfrac12\\right)^{n-10}\\to 0$. Theo định lý kẹp, giới hạn bằng $0$.<br>- <strong>Sai</strong>.<br>  Đặt $v_n=\\dfrac{n!}{3^n}$, ta có $\\dfrac{v_{n+1}}{v_n}=\\dfrac{n+1}{3}\\ge 2$ khi $n\\ge 5$, nên $v_n\\ge v_5\\cdot 2^{n-5}\\to+\\infty$. Giai thừa tăng nhanh hơn hàm mũ, giới hạn là $+\\infty$ chứ không phải $0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
