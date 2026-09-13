// =========================================================================
// KHỐI DỮ LIỆU: 1D22 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS3.tex), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D22 = [
  {
    "id": "1D223DS1",
    "question": "Cho dãy số $(u_n)$, biết $\\left\\{\\begin{array}{l}u_1=-1\\\\u_{n+1}=u_n+3\\end{array}\\right.$ với $n \\ge 1$.",
    "subQuestions": [
      {
        "text": "Năm số hạng đầu tiên của dãy số lần lượt là $-1$; $2$; $5$; $8$; $11$",
        "answer": true
      },
      {
        "text": "Số hạng thứ tám của dãy là $19$",
        "answer": false
      },
      {
        "text": "Công thức số hạng tổng quát của dãy số là $u_n=2n-3$",
        "answer": false
      },
      {
        "text": "$104$ là số hạng thứ $36$ của dãy số đã cho",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có <br>• $u_2=u_1+3=-1+3=2$;<br>• $u_3=u_2+3=2+3=5$;<br>• $u_4=u_3+3=5+3=8$;<br>• $u_5=u_4+3=8+3=11$. Vậy năm số hạng đầu tiên của dãy số lần lượt là $-1$; $2$; $5$; $8$; $11$.<br>- Ta có <br>• $u_6=u_5+3=11+3=14$;<br>• $u_7=u_6+3=14+3=17$;<br>• $u_8=u_7+3=17+3 =20$. Vậy số hạng thứ tám của dãy là $20$.<br>- Ta có $u_1=-1$; $u_{n+1}=u_n+3 \\Leftrightarrow u_{n+1}-u_n=3$, $\\forall n&gt;1$.<br>Suy ra dãy số $(u_n)$ là cấp số cộng với số hạng đầu $u_1=-1$, công sai $d=3$.<br>Công thức tổng quát của cấp số cộng là $u_n=-1+(n-1)\\cdot 3=3n-4$.<br>- Giả sử $104$ là một số hạng của cấp số cộng $(u_n)$, khi đó tồn tại số nguyên dương $k$ sao cho $u_k=104 \\Rightarrow 3k-4 =104 \\Leftrightarrow k=36$.<br>Vậy $104$ là số hạng thứ $36$ của dãy số $(u_n)$."
  },
  {
    "id": "1D227DS1",
    "question": "Trong một hội chợ đón Xuân, một gian hàng sữa muốn xếp $900$ hộp sữa theo quy luật là hàng trên cùng có $1$ hộp sữa, mỗi hàng ngay phía dưới lần lượt được xếp nhiều hơn $2$ hộp so với hàng trên nó.",
    "subQuestions": [
      {
        "text": "Số hộp sữa ở các hàng lập thành một cấp số cộng với số hạng đầu $u_1=1$ và công sai $d=2$",
        "answer": true
      },
      {
        "text": "Hàng thứ $10$ có $20$ hộp sữa",
        "answer": false
      },
      {
        "text": "$23$ hộp là số hộp sữa ở hàng thứ $12$",
        "answer": true
      },
      {
        "text": "Cần $30$ hàng để xếp hết tất cả số hộp sữa lên gian hàng",
        "answer": true
      }
    ],
    "explain": "<br>- Do mỗi hàng ngay phía dưới lần lượt được xếp nhiều hơn $2$ hộp so với hàng trên nó nên số hộp sữa ở các hàng lập thành một cấp số cộng với số hạng đầu $u_1=1$ và công sai $d=2$.<br>- Số hộp sữa ở hàng thứ $10$ là $u_{10}=u_1+9d=1+9\\cdot2=19$ (hộp).<br>- Số hộp sữa ở hàng thứ $12$ là $u_{12}=u_1+11d=1+11\\cdot2=23$ (hộp).<br>- Gọi $n$ là số hàng để đặt $900$ hộp sữa của gian hàng, ta có \\[\\begin{array}{rcl} S_n=900&\\Leftrightarrow&\\dfrac{n}{2}\\left(2u_1+(n-1)d\\right)=900\\\\ &\\Leftrightarrow&\\dfrac{n}{2}\\left(2\\cdot1+(n-1)\\cdot2\\right)=900\\\\ &\\Leftrightarrow&n^2=900\\Leftrightarrow n=30. \\end{array}\\] Vậy cần $30$ hàng để xếp hết tất cả số hộp sữa lên gian hàng."
  }
];
