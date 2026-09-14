window.traLoiNgan1D31 = [
  {
    "id": "1D312TL1",
    "question": "Giới hạn $\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3 n^2+5 n-4}{9 n^2-1}=\\dfrac{a}{b}\\left(\\dfrac{a}{b}\\right.$ là phân số tối giản, với $a$ nguyên, $b$ nguyên dương $)$. Tính giá trị $10 a+b$.",
    "answer": "-7",
    "explain": "$\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3 n^2+5 n-4}{9 n^2-1}=\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3+\\tfrac{5}{n}-\\tfrac{4}{n^2}}{9-\\tfrac{1}{n^2}}=\\dfrac{-1}{3}$ $\\Rightarrow a=-1$ và $b=3$. Vậy $10a+b=-7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D312TL2",
    "question": "Một bệnh nhân hàng ngày phải uống một viên thuốc $8$ mg. Sau ngày đầu, trước mỗi lần uống, hàm lượng thuốc cũ trong cơ thể vẫn còn 5\\%. Ước tính lượng thuốc có trong cơ thể nếu bệnh nhân sử dụng thuốc trong một thời gian dài. (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "8,42",
    "explain": "Gọi $Q_n$ là lượng thuốc (tính bằng mg) có trong cơ thể ngay sau khi uống viên thuốc thứ $n$.  <br>- Sau ngày đầu tiên: $Q_1 = 8$ mg.<br>- Sau ngày thứ hai: $Q_2 = 8 + 0{,}05 \\cdot 8 = 8(1 + 0{,}05)$.<br>- $\\ldots$<br>- Sau ngày thứ $n$: $Q_n = 8(1 + 0{,}05 + 0{,}05^2 + \\ldots + 0{,}05^{n-1})$.  Đây là tổng của một cấp số nhân với số hạng đầu $a = 1$, công bội $q=0{,}05$.<br>  Vậy $Q_n =8\\cdot \\dfrac{1}{1 - 0{,}05} \\approx 8{,}42$ mg.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D312TL3",
    "question": "Giới hạn $\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3 n^2+5 n-4}{9 n^2-1}=\\dfrac{a}{b}\\left(\\dfrac{a}{b}\\right.$ là phân số tối giản, với $a$ nguyên, $b$ nguyên dương $)$. Tính giá trị $10 a+b$.",
    "answer": "-7",
    "explain": "$\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3 n^2+5 n-4}{9 n^2-1}=\\displaystyle\\lim\\limits _{n \\rightarrow +\\infty} \\dfrac{-3+\\tfrac{5}{n}-\\tfrac{4}{n^2}}{9-\\tfrac{1}{n^2}}=\\dfrac{-1}{3}$ $\\Rightarrow a=-1$ và $b=3$. Vậy $10a+b=-7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D312TL4",
    "question": "Cho hai dãy số $(u_n)$ và $(v_n)$ có $u_n = 1 + \\dfrac{2024}{n^2}$ và $v_n = \\dfrac{1}{n} + 2024$.<br>Tìm $L = \\displaystyle\\lim_{n \\to \\infty} (u_n + v_n)$.",
    "answer": "2025",
    "explain": "Ta có \\[\\begin{array}{rcl} L &=& \\lim_{n \\to \\infty} (u_n + v_n)\\\\ &=& \\lim_{n \\to \\infty} \\left( 1 + \\dfrac{2024}{n^2} + \\frac{1}{n} + 2024 \\right) \\\\ &=& \\lim_{n \\to \\infty} \\left( 2025 + \\dfrac{2024}{n^2} + \\dfrac{1}{n} \\right)\\\\ &=& 2025. \\end{array}\\] Vậy $L=2025$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D313TL1",
    "question": "Tính các giới hạn sau: $\\lim_{n \\to +\\infty} \\left(\\sqrt{n^2 - 3n + 1} - n\\right)$.",
    "answer": "-3/2",
    "explain": "$\\lim_{n \\to +\\infty} \\sqrt{n^2 - 3n + 1} - n<br>= \\lim_{n \\to +\\infty} \\dfrac{n^2 - 3n + 1 - n^2}{\\sqrt{n^2 - 3n + 1} + n}<br>= \\lim_{n \\to +\\infty} \\dfrac{-3n + 1}{n \\left(\\sqrt{1 - \\dfrac{3}{n} + \\dfrac{1}{n^2}} + 1 \\right)}<br>= \\lim_{n \\to +\\infty} \\dfrac{-3 + \\dfrac{1}{n}}{\\sqrt{1 - \\dfrac{3}{n} + \\dfrac{1}{n^2}} + 1}<br>= \\lim_{n \\to +\\infty} \\dfrac{-3 + 0}{\\sqrt{1 - 0 + 0} + 1} <br>= -\\dfrac{3}{2}$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
