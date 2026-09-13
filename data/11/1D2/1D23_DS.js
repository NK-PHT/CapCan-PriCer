// =========================================================================
// KHỐI DỮ LIỆU: 1D23 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS3.tex), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D23 = [
  {
    "id": "1D234DS1",
    "question": "Cho cấp số nhân $(u_n)$, biết $u_1+u_5=51$; $u_2+u_6=102$.",
    "subQuestions": [
      {
        "text": "Số hạng đầu $u_1=3$",
        "answer": true
      },
      {
        "text": "Số hạng $u_4=48$",
        "answer": false
      },
      {
        "text": "Số $12\\,288$ là số hạng thứ $12$ của cấp số nhân $(u_n)$",
        "answer": false
      },
      {
        "text": "Tổng tám số hạng đầu của cấp số nhân là $765$",
        "answer": true
      }
    ],
    "explain": "<br>- Gọi $q$ là công bội của cấp số nhân $(u_n)$.<br>Ta có $u_1+u_5=51 \\Leftrightarrow u_1+u_1\\cdot q^4=51 \\Leftrightarrow u_1(1+q^4)=51$.<br>Ta có $$u_2+u_6=102 \\Leftrightarrow u_1\\cdot q+u_1\\cdot q^5=102 \\Leftrightarrow u_1 q (1+q^4)=102 \\Leftrightarrow q \\cdot 51=102 \\Leftrightarrow q=2.$$ Thay $q=2$ vào $(1)$ ta được $u_1(1+2^4)=51 \\Leftrightarrow u_1=3$.<br>Vậy số hạng đầu là $u_1=3$.<br>- Số hạng $u_4=u_1 \\cdot q^3=3 \\cdot 2^3=24$.<br>- Số hạng tổng quát của cấp số nhân là $u_n=3\\cdot 2^{n-1}$.<br>Giả sử $12\\,288$ là một số hạng của cấp số nhân $(u_n)$, khi đó tồn tại số nguyên dương $k$ sao cho $u_k=12\\,288$, suy ra \\[\\begin{array}{rcl} && 3\\cdot 2^{n-1}=12\\,288 \\\\ &\\Leftrightarrow& 2^{n-1}=4\\,096 \\\\ &\\Leftrightarrow& 2^{n-1}=2^{12}. \\end{array}\\] Suy ra $n-1=12 \\Leftrightarrow n=13$.<br>Vậy $12\\,288$ là số hạng thứ $13$ của cấp số nhân $(u_n)$.<br>- Tổng của $8$ số hạng đầu của cấp số nhân là $$S=\\dfrac{3\\cdot (1-2^8)}{1-2}=765.$$"
  }
];
