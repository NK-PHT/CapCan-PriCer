// =========================================================================
// KHỐI DỮ LIỆU: 1D21 - Trắc nghiệm
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D21 = [
  {
    "id": "1D212TN1",
    "question": "Cho dãy số $(u_n)$ với $u_n=\\dfrac{n+2}{3n+3}$. Số hạng thứ $5$ của dãy số đó bằng",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{4}{9}$",
      "$\\dfrac{7}{18}$",
      "$5$"
    ],
    "answer": 2,
    "explain": "Ta có $u_5= \\dfrac{5+2}{3\\cdot 5 +3}= \\dfrac{7}{18}$."
  },
  {
    "id": "1D212TN2",
    "question": "Cho dãy số $(u_n)$ có $u_n=-n^2+n+1$. Số $-19$ là số hạng thứ mấy của dãy $(u_n)$?",
    "options": [
      "$5$",
      "$6$",
      "$7$",
      "$4$"
    ],
    "answer": 0,
    "explain": "Do $-19$ là một số hạng của dãy số $(u_n)$ nên tồn tại số nguyên dương $k$ sao cho $u_k=-19$, suy ra<br>\\[\\begin{array}{rcl} && -k^2+k+1=-19 \\\\ &\\Leftrightarrow& -k^2+k+20=0 \\\\ &\\Leftrightarrow& \\left[\\begin{array}{ll}k=5 &\\quad\\text{(nhận)}\\\\k =-4. &\\quad\\text{(loại)}\\end{array}\\right. \\end{array}\\] Vậy $-19$ là số hạng thứ $5$ của dãy số $(u_n)$."
  },
  {
    "id": "1D211TN1",
    "question": "Cho dãy số $(u_n)$, biết $u_n=2^n$. Tìm số hạng $u_{n+1}$.",
    "options": [
      "$u_{n+1}=2^n+2$",
      "$u_{n+1}=2^n+1$",
      "$u_{n+1}=2^n \\cdot 2$",
      "$u_{n+1}=2(n+1)$"
    ],
    "answer": 2,
    "explain": "Ta có $u_{n+1}=2^{n+1}=2^n \\cdot 2$."
  },
  {
    "id": "1D214TN1",
    "question": "Cho dãy số $(u_n)$, biết $u_n=\\dfrac{3n-1}{3n+1}$. Dãy số $(u_n)$ bị chặn trên bởi số nào dưới đây?",
    "options": [
      "$\\dfrac{1}{2}$",
      "$0$",
      "$1$",
      "$\\dfrac{1}{3}$"
    ],
    "answer": 2,
    "explain": "Ta có $\\dfrac{3n-1}{3n+1}=\\dfrac{3n+1 -2}{3n +1}=1-\\dfrac{2}{3n+1}$.<br>Với mọi $n \\in \\mathbb{N}^*$ ta có $3n+1 &gt;0$, suy ra $\\dfrac{2}{3n+1}&gt;0 \\Leftrightarrow -\\dfrac{2}{3n+1} &lt; 0 \\Leftrightarrow 1-\\dfrac{2}{3n+1} &lt; 1$.<br>Suy ra $u_n &lt; 1$ với mọi $n \\in \\mathbb{N}^*$.<br>Vậy dãy số $(u_n)$ bị chặn trên bởi $1$."
  },
  {
    "id": "1D212TN3",
    "question": "Cho dãy số $(u_n)$, biết $u_n=\\dfrac{-n}{n+1}$. Năm số hạng đầu tiên của dãy số đó lần lượt là những số nào dưới đây?",
    "options": [
      "$\\dfrac{1}{2}$; $\\dfrac{2}{3}$; $\\dfrac{3}{4}$; $\\dfrac{4}{5}$; $\\dfrac{5}{6}$",
      "$\\dfrac{2}{3}$; $\\dfrac{3}{4}$; $\\dfrac{4}{5}$; $\\dfrac{5}{6}$; $\\dfrac{6}{7}$",
      "$-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$; $-\\dfrac{6}{7}$",
      "$-\\dfrac{1}{2}$; $-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$"
    ],
    "answer": 3,
    "explain": "Ta có <br>• $u_1=\\dfrac{-1}{1+1}=-\\dfrac{1}{2}$;<br>• $u_2=\\dfrac{-2}{2+1}=-\\dfrac{2}{3}$;<br>• $u_3=\\dfrac{-3}{3+1}=-\\dfrac{3}{4}$;<br>• $u_4=\\dfrac{-4}{4+1}=-\\dfrac{4}{5}$;<br>• $u_5=\\dfrac{-4}{5+1}=-\\dfrac{5}{6}$. Vậy năm số hạng đầu tiên của dãy số đó lần lượt là $-\\dfrac{1}{2}$; $-\\dfrac{2}{3}$; $-\\dfrac{3}{4}$; $-\\dfrac{4}{5}$; $-\\dfrac{5}{6}$."
  }
];
