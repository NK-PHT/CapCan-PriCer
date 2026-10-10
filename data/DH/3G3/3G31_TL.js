window.traLoiNgan3G31 = [
  {
    "id": "3G311TL1",
    "question": "Tính giới hạn $\\displaystyle\\lim_{n\\to\\infty}\\left(\\sqrt{n^2+3n}-n\\right)$ (viết kết quả dưới dạng số thập phân).",
    "answer": "1,5",
    "explain": "Nhân và chia với lượng liên hợp:<br>$\\sqrt{n^2+3n}-n=\\dfrac{(n^2+3n)-n^2}{\\sqrt{n^2+3n}+n}=\\dfrac{3n}{\\sqrt{n^2+3n}+n}=\\dfrac{3}{\\sqrt{1+\\frac3n}+1}$.<br>Khi $n\\to\\infty$: giới hạn bằng $\\dfrac{3}{1+1}=\\dfrac32=1{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311TL2",
    "question": "Tìm số thực $a$ sao cho $\\displaystyle\\lim_{n\\to\\infty}\\left(\\dfrac{n+a}{n-1}\\right)^{n}=e^{6}$.",
    "answer": "5",
    "explain": "Ta có $\\dfrac{n+a}{n-1}=1+\\dfrac{a+1}{n-1}$. Với $a\\neq-1$:<br>$\\left(\\dfrac{n+a}{n-1}\\right)^{n}=\\left[\\left(1+\\dfrac{a+1}{n-1}\\right)^{\\frac{n-1}{a+1}}\\right]^{\\frac{(a+1)n}{n-1}}\\to e^{a+1}$ (biểu thức trong ngoặc vuông dần tới $e$, số mũ dần tới $a+1$).<br>Với $a=-1$ dãy bằng $1=e^0$. Vậy giới hạn luôn bằng $e^{a+1}$.<br>$e^{a+1}=e^6\\Leftrightarrow a=5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311TL3",
    "question": "Cho dãy số $(u_n)$ xác định bởi $u_1=1$ và $u_{n+1}=\\dfrac12\\left(u_n+\\dfrac{16}{u_n}\\right)$ với mọi $n\\ge1$. Tính $\\displaystyle\\lim_{n\\to\\infty}u_n$.",
    "answer": "4",
    "explain": "Quy nạp: $u_n\\gt 0$ với mọi $n$. Theo bất đẳng thức Cô-si: $u_{n+1}=\\dfrac12\\left(u_n+\\dfrac{16}{u_n}\\right)\\ge\\sqrt{u_n\\cdot\\dfrac{16}{u_n}}=4$ nên $u_n\\ge 4$ với mọi $n\\ge 2$.<br>Khi đó $u_{n+1}-u_n=\\dfrac{16-u_n^2}{2u_n}\\le 0$ với $n\\ge2$: dãy giảm từ $n=2$ và bị chặn dưới bởi $4$, nên hội tụ về $L\\ge 4$.<br>Chuyển qua giới hạn: $L=\\dfrac12\\left(L+\\dfrac{16}{L}\\right)\\Leftrightarrow L^2=16\\Rightarrow L=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311TL4",
    "question": "Tính giới hạn $\\displaystyle\\lim_{n\\to\\infty}\\left(\\dfrac{1}{n^2+1}+\\dfrac{2}{n^2+2}+\\cdots+\\dfrac{n}{n^2+n}\\right)$ (viết kết quả dưới dạng số thập phân).",
    "answer": "0,5",
    "explain": "Đặt $S_n=\\displaystyle\\sum_{k=1}^{n}\\dfrac{k}{n^2+k}$. Với $1\\le k\\le n$: $\\dfrac{k}{n^2+n}\\le\\dfrac{k}{n^2+k}\\le\\dfrac{k}{n^2+1}$.<br>Cộng lại với $\\displaystyle\\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}$: $\\dfrac{n(n+1)}{2(n^2+n)}\\le S_n\\le\\dfrac{n(n+1)}{2(n^2+1)}$.<br>Vế trái bằng $\\dfrac12$, vế phải dần tới $\\dfrac12$. Theo định lý kẹp $\\lim S_n=\\dfrac12=0{,}5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311TL5",
    "question": "Tính giới hạn $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{2\\,(n+2)!-(n+1)!}{(n^2+1)\\,n!}$.",
    "answer": "2",
    "explain": "Ta có $(n+2)!=(n+2)(n+1)\\,n!$ và $(n+1)!=(n+1)\\,n!$ nên<br>$2(n+2)!-(n+1)!=n!\\,(n+1)\\big(2(n+2)-1\\big)=n!\\,(n+1)(2n+3)$.<br>Do đó $\\dfrac{2(n+2)!-(n+1)!}{(n^2+1)n!}=\\dfrac{(n+1)(2n+3)}{n^2+1}=\\dfrac{2n^2+5n+3}{n^2+1}\\to 2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G311TL6",
    "question": "Tính giới hạn $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{4^{n+1}-3^n}{2^{2n-1}+5\\cdot 3^n}$.",
    "answer": "8",
    "explain": "Ta có $2^{2n-1}=\\dfrac{4^n}{2}$. Chia cả tử và mẫu cho $4^n$:<br>$\\dfrac{4-\\left(\\frac34\\right)^n}{\\frac12+5\\left(\\frac34\\right)^n}$.<br>Vì $\\left(\\dfrac34\\right)^n\\to 0$ nên giới hạn bằng $\\dfrac{4}{1/2}=8$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
