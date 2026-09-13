// =========================================================================
// KHOI DU LIEU GOP - LOP 10 (tracNghiem + dungSai + traLoiNgan)
// File nay duoc gop tu toan bo cac file .js rieng le theo tung bai/dang
// truoc day trong data/10/**, de gon cau truc thu muc. Noi dung cau hoi
// khong doi (van phan loai theo 4 ky tu dau cua id qua co che quet dong o app.js).
// =========================================================================
window.tracNghiem10 = [
 {
  "id": "0C111TN1",
  "question": "Nghiệm của hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\x+y-z=0\\end{cases}$ là",
  "options": [
   "$(x;y;z)=(1;2;3)$",
   "$(x;y;z)=(2;1;3)$",
   "$(x;y;z)=(3;2;1)$",
   "$(x;y;z)=(1;3;2)$"
  ],
  "answer": 0,
  "explain": "Lấy (1) trừ (2): $2y=4\\Rightarrow y=2$. Lấy (1) trừ (3): $2z=6\\Rightarrow z=3$. Thay vào (1): $x=6-2-3=1$. Vậy $(x;y;z)=(1;2;3)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN2",
  "question": "Nghiệm của hệ phương trình $\\begin{cases}x+y+z=4\\\\2x-y+z=8\\\\x+2y-z=-3\\end{cases}$ là",
  "options": [
   "$(x;y;z)=(2;-1;3)$",
   "$(x;y;z)=(-1;2;3)$",
   "$(x;y;z)=(2;3;-1)$",
   "$(x;y;z)=(3;-1;2)$"
  ],
  "answer": 0,
  "explain": "Thử trực tiếp $(2;-1;3)$: $2+(-1)+3=4$ ✓; $2\\cdot 2-(-1)+3=8$ ✓; $2+2(-1)-3=-3$ ✓. Vậy nghiệm của hệ là $(2;-1;3)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN3",
  "question": "Hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\2x+2y+2z=10\\end{cases}$",
  "options": [
   "Vô nghiệm",
   "Vô số nghiệm",
   "Có nghiệm duy nhất",
   "Có đúng hai nghiệm"
  ],
  "answer": 0,
  "explain": "Nhân hai vế của phương trình (1) với $2$ ta được $2x+2y+2z=12$, mâu thuẫn với phương trình (3) là $2x+2y+2z=10$. Vậy hệ vô nghiệm.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN4",
  "question": "Hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\2x+2y+2z=12\\end{cases}$",
  "options": [
   "Vô số nghiệm",
   "Vô nghiệm",
   "Có nghiệm duy nhất",
   "Chỉ có nghiệm $(0;0;0)$"
  ],
  "answer": 0,
  "explain": "Phương trình (3) chính là $2$ lần phương trình (1) ($2x+2y+2z=2\\cdot 6=12$), nên phương trình (3) không cho thêm thông tin mới. Hệ chỉ còn thực chất $2$ phương trình độc lập với $3$ ẩn nên có vô số nghiệm.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN5",
  "question": "Tổng ba số bằng $30$; số thứ nhất gấp đôi số thứ hai; số thứ ba bằng tổng của số thứ nhất và số thứ hai. Số thứ ba bằng",
  "options": [
   "$15$",
   "$10$",
   "$5$",
   "$20$"
  ],
  "answer": 0,
  "explain": "Gọi ba số là $a,b,c$. Ta có hệ $\\begin{cases}a+b+c=30\\\\a=2b\\\\c=a+b\\end{cases}$. Thế $a=2b$ và $c=3b$ vào phương trình đầu: $2b+b+3b=30\\Rightarrow 6b=30\\Rightarrow b=5$. Suy ra $a=10,\\,c=15$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN6",
  "question": "Nghiệm của hệ phương trình dạng tam giác $\\begin{cases}x+y+z=9\\\\y+z=5\\\\z=2\\end{cases}$ là",
  "options": [
   "$(x;y;z)=(4;3;2)$",
   "$(x;y;z)=(2;3;4)$",
   "$(x;y;z)=(4;2;3)$",
   "$(x;y;z)=(3;4;2)$"
  ],
  "answer": 0,
  "explain": "Từ phương trình (3): $z=2$. Thay vào (2): $y=5-2=3$. Thay vào (1): $x=9-3-2=4$. Vậy $(x;y;z)=(4;3;2)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN7",
  "question": "Phương pháp Gauss để giải hệ ba phương trình bậc nhất ba ẩn là",
  "options": [
   "Khử dần từng ẩn để đưa hệ về dạng tam giác (bậc thang), sau đó giải ngược từ phương trình cuối lên",
   "Chỉ áp dụng được cho hệ hai ẩn",
   "Luôn cho hệ vô số nghiệm",
   "Không thể áp dụng cho hệ ba ẩn"
  ],
  "answer": 0,
  "explain": "Phương pháp Gauss (khử ẩn liên tiếp) đưa hệ phương trình về dạng tam giác, từ đó giải lần lượt từ phương trình cuối (chứa ít ẩn nhất) lên phương trình đầu.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN8",
  "question": "Với hệ ở câu \"Nghiệm của hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\x+y-z=0\\end{cases}$\" (có nghiệm $(1;2;3)$), tích $x\\cdot y\\cdot z$ bằng",
  "options": [
   "$6$",
   "$5$",
   "$0$",
   "$-6$"
  ],
  "answer": 0,
  "explain": "Với $(x;y;z)=(1;2;3)$ ta có $x\\cdot y\\cdot z=1\\cdot 2\\cdot 3=6$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN9",
  "question": "Một hệ ba phương trình bậc nhất ba ẩn có vô số nghiệm khi",
  "options": [
   "Một trong ba phương trình là tổ hợp tuyến tính của hai phương trình còn lại và hệ vẫn có nghiệm (hệ phụ thuộc)",
   "Ba phương trình đôi một mâu thuẫn với nhau",
   "Định thức của ma trận hệ số khác $0$",
   "Cả ba ẩn số đều bằng $0$"
  ],
  "answer": 0,
  "explain": "Khi một phương trình có thể suy ra từ hai phương trình còn lại (không cung cấp thêm ràng buộc mới) mà hệ vẫn có nghiệm, số ẩn thực chất nhiều hơn số phương trình độc lập nên hệ có vô số nghiệm.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TN10",
  "question": "Nghiệm của hệ phương trình $\\begin{cases}x+y+z=6\\\\y+2z=4\\\\z=1\\end{cases}$ là",
  "options": [
   "$(x;y;z)=(3;2;1)$",
   "$(x;y;z)=(1;2;3)$",
   "$(x;y;z)=(3;1;2)$",
   "$(x;y;z)=(2;3;1)$"
  ],
  "answer": 0,
  "explain": "Từ (3): $z=1$. Thay vào (2): $y=4-2\\cdot 1=2$. Thay vào (1): $x=6-2-1=3$. Vậy $(x;y;z)=(3;2;1)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN1",
  "question": "Để chứng minh mệnh đề $P(n)$ đúng với mọi số nguyên dương $n$ bằng phương pháp quy nạp toán học, ta thực hiện các bước nào?",
  "options": [
   "Chứng minh $P(1)$ đúng; sau đó giả sử $P(k)$ đúng với $k\\ge 1$ và chứng minh $P(k+1)$ đúng",
   "Chỉ cần chứng minh $P(1)$ đúng",
   "Chỉ cần chứng minh $P(k+1)$ đúng với một giá trị $k$ nào đó",
   "Chứng minh $P(n)$ đúng với $n=1,2,3$ là đủ"
  ],
  "answer": 0,
  "explain": "Phương pháp quy nạp toán học gồm hai bước: (1) bước cơ sở - kiểm tra mệnh đề đúng tại giá trị bắt đầu (thường là $n=1$); (2) bước quy nạp - giả sử mệnh đề đúng với $n=k$ (giả thiết quy nạp) và chứng minh nó cũng đúng với $n=k+1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN2",
  "question": "Xét mệnh đề $P(n)$: \"$1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$\". Kiểm tra bước cơ sở với $n=1$ ta được",
  "options": [
   "$1=\\dfrac{1\\cdot 2}{2}=1$, đúng",
   "$1=\\dfrac{1\\cdot 2}{2}=2$, sai",
   "Không kiểm tra được",
   "$P(1)$ sai vì vế trái bằng $0$"
  ],
  "answer": 0,
  "explain": "Với $n=1$, vế trái là $1$, vế phải là $\\dfrac{1\\cdot 2}{2}=1$. Hai vế bằng nhau nên $P(1)$ đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN3",
  "question": "Giả sử $P(k)$ đúng: $1+2+\\cdots+k=\\dfrac{k(k+1)}{2}$. Để hoàn thành bước quy nạp, ta cần chứng minh",
  "options": [
   "$1+2+\\cdots+k+(k+1)=\\dfrac{(k+1)(k+2)}{2}$",
   "$1+2+\\cdots+k=\\dfrac{(k+1)(k+2)}{2}$",
   "$k+1=\\dfrac{(k+1)(k+2)}{2}$",
   "$1+2+\\cdots+(k+1)=\\dfrac{k(k+1)}{2}$"
  ],
  "answer": 0,
  "explain": "Bước quy nạp yêu cầu chứng minh $P(k+1)$ đúng, tức là $1+2+\\cdots+k+(k+1)=\\dfrac{(k+1)((k+1)+1)}{2}=\\dfrac{(k+1)(k+2)}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN4",
  "question": "Từ giả thiết quy nạp $1+2+\\cdots+k=\\dfrac{k(k+1)}{2}$, ta có $1+2+\\cdots+k+(k+1)=\\dfrac{k(k+1)}{2}+(k+1)$. Rút gọn biểu thức này ta được",
  "options": [
   "$\\dfrac{(k+1)(k+2)}{2}$",
   "$\\dfrac{k(k+2)}{2}$",
   "$\\dfrac{(k+1)^2}{2}$",
   "$\\dfrac{k(k+1)}{2}+1$"
  ],
  "answer": 0,
  "explain": "$\\dfrac{k(k+1)}{2}+(k+1)=(k+1)\\left(\\dfrac{k}{2}+1\\right)=(k+1)\\cdot\\dfrac{k+2}{2}=\\dfrac{(k+1)(k+2)}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN5",
  "question": "Xét mệnh đề $Q(n)$: \"$n^3-n$ chia hết cho $3$\" với $n$ nguyên dương. Tại $n=2$ ta có",
  "options": [
   "$2^3-2=6$, chia hết cho $3$",
   "$2^3-2=6$, không chia hết cho $3$",
   "$2^3-2=8$",
   "Không xác định được"
  ],
  "answer": 0,
  "explain": "$2^3-2=8-2=6=3\\cdot 2$, chia hết cho $3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN6",
  "question": "Với mệnh đề $1+3+5+\\cdots+(2n-1)=n^2$, tổng khi $n=5$ bằng",
  "options": [
   "$25$",
   "$15$",
   "$20$",
   "$30$"
  ],
  "answer": 0,
  "explain": "$1+3+5+7+9=25=5^2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN7",
  "question": "Giả sử $1+3+\\cdots+(2k-1)=k^2$ đúng. Để chứng minh $1+3+\\cdots+(2k-1)+(2k+1)=(k+1)^2$, ta biến đổi vế trái thành $k^2+(2k+1)$. Biểu thức này bằng",
  "options": [
   "$(k+1)^2$",
   "$k^2+2k$",
   "$(k+2)^2$",
   "$k^2+1$"
  ],
  "answer": 0,
  "explain": "$k^2+2k+1=(k+1)^2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN8",
  "question": "Mệnh đề $2^n>n$ đúng với mọi số nguyên dương $n$. Kiểm tra bước cơ sở tại $n=1$ ta được",
  "options": [
   "$2^1=2>1$, đúng",
   "$2^1=2<1$, sai",
   "$2^1=1$",
   "Không kiểm tra được"
  ],
  "answer": 0,
  "explain": "$2^1=2$ và $2>1$ nên mệnh đề đúng tại $n=1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN9",
  "question": "Cho $P(n)$: \"$1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$\". Tại $n=3$, giá trị của tổng và của công thức lần lượt là",
  "options": [
   "$1^2+2^2+3^2=14$ và $\\dfrac{3\\cdot 4\\cdot 7}{6}=14$, khớp nhau",
   "$1^2+2^2+3^2=9$",
   "$\\dfrac{3\\cdot 4\\cdot 7}{6}=12$",
   "Công thức cho kết quả khác với tổng trực tiếp"
  ],
  "answer": 0,
  "explain": "Tổng trực tiếp: $1+4+9=14$. Theo công thức: $\\dfrac{3\\cdot 4\\cdot 7}{6}=\\dfrac{84}{6}=14$. Hai kết quả khớp nhau.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TN10",
  "question": "Phương pháp quy nạp toán học thường được dùng để chứng minh",
  "options": [
   "Một mệnh đề phụ thuộc số nguyên dương $n$ đúng với mọi $n$ kể từ một giá trị bắt đầu",
   "Một phương trình vô nghiệm",
   "Hai tam giác bằng nhau",
   "Một số là số nguyên tố"
  ],
  "answer": 0,
  "explain": "Quy nạp toán học là phương pháp chứng minh một mệnh đề $P(n)$ đúng với mọi số nguyên $n$ kể từ một giá trị bắt đầu cho trước (thường là $n=1$ hoặc $n=n_0$).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111TN1",
  "question": "Cho mệnh đề chứa biến $P(n)\\colon 2 - n &gt; 0$ với $n$ là số tự nhiên. Mệnh đề nào sau đây là đúng?",
  "options": [
   "$P(2)$",
   "$P(1)$",
   "$P(3)$",
   "$P(4)$"
  ],
  "answer": 1,
  "explain": "Ta có $P(1)\\colon 2 - 1 &gt; 0 $ là mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN1",
  "question": "Cho mệnh đề $P \\colon$ “ $\\exists n \\in \\mathbb{N}$, $n-1&lt;0$ ”. Mệnh đề phủ định của mệnh đề P là",
  "options": [
   "$\\overline{P} \\colon$ “ $\\forall x \\in \\mathbb{N}$, $n-1 \\geq 0$ ”",
   "$\\overline{P} \\colon$ “ $\\exists x \\in \\mathbb{N}$, $n-1 \\geq 0$ ”",
   "$\\overline{P} \\colon$ “ $\\forall x \\in \\mathbb{N}$, $n-1 &gt; 0$ ”",
   "$\\overline{P} \\colon$ “ $\\forall x \\in \\mathbb{N}$, $n-1 &lt; 0$ ”"
  ],
  "answer": 0,
  "explain": "Mệnh đề phủ định của mệnh đề $P \\colon$ “ $\\exists n \\in \\mathbb{N}$, $n-1&lt;0$ ” \\quad là $\\overline{P} \\colon$ “ $\\forall x \\in \\mathbb{N}$, $n-1 \\geq 0$ ”.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D113TN1",
  "question": "Mệnh đề phủ định của mệnh đề ``Phương trình $ax^{2}+bx+c=0(a \\neq 0)$ vô nghiệm'' là mệnh đề nào sau đây",
  "options": [
   "Phương trình $ax^{2}+bx+c=0$ $(a\\neq 0)$ không có nghiệm",
   "Phương trình $ax^{2}+bx+c=0$ $(a\\neq 0)$ có hai ngiệm phân biệt",
   "Phương trình $ax^{2}+bx+c=0$ $(a\\neq 0)$ có nghiệm kép",
   "Phương trình $ax^{2}+bx+c=0$ $(a\\neq 0)$ có nghiệm"
  ],
  "answer": 3,
  "explain": "Mệnh đề phủ định của mệnh đề ``Phương trình $ax^{2}+bx+c=0$ $(a\\neq 0)$ vô nghiệm'' là ``Phương trình $ax^{2}+bx+c=0$ $(a\\neq 0)$ có nghiệm''.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D113TN2",
  "question": "Phủ định của mệnh đề: ``Có ít nhất một số vô tỷ là số thập phân vô hạn tuần hoàn'' là",
  "options": [
   "Mọi số vô tỷ đều là số thập phân vô hạn không tuần hoàn",
   "Mọi số vô tỷ đều là số thập phân tuần hoàn",
   "Mọi số vô tỷ đều là số thập phân vô hạn tuần hoàn",
   "Có ít nhất một số vô tỷ là số thập phân vô hạn không tuần hoàn"
  ],
  "answer": 0,
  "explain": "Phủ định của mệnh đề: ``Có ít nhất một số vô tỷ là số thập phân vô hạn tuần hoàn'' là ``Mọi số vô tỷ đều là số thập phân vô hạn không tuần hoàn''.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN3",
  "question": "Cho mệnh đề ``$\\exists x \\in \\mathbb{R}, 2 x^{2}-3 x-5&lt;0$''. Mệnh đề phủ định sẽ là",
  "options": [
   "``$\\forall x \\in \\mathbb{R}, 2 x^{2}-3 x-5 \\geq 0$''",
   "``$\\forall x \\in \\mathbb{R}, 2 x^{2}-3 x-5&gt;0$''",
   "``$\\exists x \\in \\mathbb{R}: 2 x^{2}-3 x-5&gt;0$''",
   "``$\\exists x \\in \\mathbb{R}: 2 x^{2}-3 x-5 \\geq 0$''"
  ],
  "answer": 0,
  "explain": "Mệnh đề phủ định của mệnh đề đã cho là ``$\\forall x \\in \\mathbb{R}, 2 x^{2}-3 x-5 \\geq 0$''.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN4",
  "question": "Cho mệnh đề $P\\colon``\\forall x \\in \\mathbb{R}, x^{2}-x+7&lt;0$''. Mệnh đề phủ định của $P$ là",
  "options": [
   "$\\nexists x \\in \\mathbb{R}: x^{2}-x+7&lt;0$",
   "$\\forall x \\in \\mathbb{R}, x^{2}-x+7&gt;0$",
   "$\\forall x \\in \\mathbb{R}, x^{2}-x+7&lt;0$",
   "$\\exists x \\in \\mathbb{R}: x^{2}-x+7 \\geq 0$"
  ],
  "answer": 3,
  "explain": "Mệnh đề phủ định của $P$ là $\\exists x \\in \\mathbb{R}: x^{2}-x+7 \\geq 0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN5",
  "question": "Mệnh đề phủ định của mệnh đề $\\forall x \\in \\mathbb{R}: x^{2}+x+5&gt;0$ là",
  "options": [
   "$\\forall x \\in \\mathbb{R}, x^{2}+x+5&lt;0$",
   "$\\exists x \\in \\mathbb{R}: x^{2}+x+5 \\leq 0$",
   "$\\forall x \\in \\mathbb{R}, x^{2}+x+5 \\leq 0$",
   "$\\exists x \\in \\mathbb{R}: x^{2}+x+5&lt;0$"
  ],
  "answer": 1,
  "explain": "Mệnh đề phủ định của mệnh đề đã cho là $\\exists x \\in \\mathbb{R}, x^{2}+x+5 \\leq 0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112TN6",
  "question": "Trong các mệnh đề sau, mệnh đề nào đúng?",
  "options": [
   "$\\forall x \\in \\mathbb{R}, x^{2}&gt;9 \\Rightarrow x&gt;-3$",
   "$\\forall x \\in \\mathbb{R}, x&gt;-3 \\Rightarrow x^{2}&gt;9$",
   "$\\forall x \\in \\mathbb{R}, x^{2}&gt;9 \\Rightarrow x&gt;3$",
   "$\\forall x \\in \\mathbb{R}, x&gt;3 \\Rightarrow x^{2}&gt;9$"
  ],
  "answer": 3,
  "explain": "Mệnh đề đúng là $\\forall x \\in \\mathbb{R}, x&gt;3 \\Rightarrow x^{2}&gt;9$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN6",
  "question": "Trong các câu sau, câu nào <strong>không</strong> phải là một mệnh đề toán học?",
  "options": [
   "$4x^2 + 1\\ge 0, \\forall x \\in \\mathbb{R}$",
   "$\\sqrt{5}$ có lớn hơn $3$ không?",
   "Số $10$ là số chẵn",
   "$\\sqrt{(-5)^2} = -5$"
  ],
  "answer": 1,
  "explain": "Ta có “ $\\sqrt{5}$ có lớn hơn $3$ không?”\\, là một câu hỏi, không phải là một câu khẳng định. Do đó, không phải là một mệnh đề toán học.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN2",
  "question": "Phủ định của mệnh đề “$\\exists x \\in \\mathbb{Q},\\, 2x^2 - 5x + 2 = 0$ ”\\, là",
  "options": [
   "$\\exists x \\in \\mathbb{Q},\\, 2x^2 - 5x + 2 &gt; 0$",
   "$\\forall x \\in \\mathbb{Q},\\, 2x^2 - 5x + 2 = 0$",
   "$\\forall x \\in \\mathbb{Q},\\, 2x^2 - 5x + 2 \\ne 0$",
   "$\\exists x \\in \\mathbb{Q},\\, 2x^2 - 5x + 2 \\ne 0$"
  ],
  "answer": 2,
  "explain": "Mệnh đề phủ định của mệnh đề đã cho là $\\forall x \\in \\mathbb{Q},\\, 2x^2 - 5x + 2 \\ne 0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112TN3",
  "question": "Cho mệnh đề “ Nếu tứ giác $ABCD$ là hình vuông thì nó có hai đường chéo vuông góc với nhau”. Phát biểu nào sau đây đúng?",
  "options": [
   "Tứ giác $ABCD$ là hình vuông là điều kiện đủ để nó có hai đường chéo vuông góc với nhau",
   "Tứ giác $ABCD$ là hình vuông là điều kiện cần để nó có hai đường chéo vuông góc với nhau",
   "Tứ giác $ABCD$ có hai đường chéo vuông góc với nhau là điều kiện đủ để nó là hình vuông",
   "Tứ giác $ABCD$ có hai đường chéo vuông góc với nhau là điều kiện cần và đủ để nó là hình vuông"
  ],
  "answer": 0,
  "explain": "Mệnh đề đã cho có dạng $P \\Rightarrow Q$, trong đó:<br>  $P$: Tứ giác $ABCD$ là hình vuông.<br>  $Q$: Tứ giác $ABCD$ có hai đường chéo vuông góc với nhau.<br>  Ta biết rằng, mọi hình vuông đều có hai đường chéo vuông góc với nhau. Do đó, mệnh đề $P \\Rightarrow Q$ là mệnh đề đúng.<br>  Trong mệnh đề đúng $P \\Rightarrow Q$:  <br>- $P$ là điều kiện đủ để có $Q$.<br>- $Q$ là điều kiện cần để có $P$.  Do đó “ Tứ giác $ABCD$ là hình vuông”\\, là điều kiện đủ để “ Hình vuông có hai đường chéo vuông góc với nhau”.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN7",
  "question": "Trong các mệnh đề dưới đây, mệnh đề nào <strong>sai</strong>?",
  "options": [
   "$\\forall x \\in \\mathbb{R}, x^2 &gt; 0$",
   "$\\exists x \\in \\mathbb{R}, x^2 &lt; x$",
   "$\\exists x \\in \\mathbb{N}, x^2 = 4$",
   "$\\forall x \\in \\mathbb{R}, x^2 + 2x + 2 &gt; 0$"
  ],
  "answer": 0,
  "explain": "Xét mệnh đề $\\forall x \\in \\mathbb{R}, x^2 &gt; 0$. <br>  Bình phương của mọi số thực luôn không âm. Mệnh đề này sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112TN5",
  "question": "Cho các phát biểu sau đây:  <br>- [1.]<br>- “ $17$ là số nguyên tố ”<br>- “ Tam giác vuông có một đường trung tuyến bằng nửa cạnh huyền ”<br>- “ Các em C14 hãy cố gắng học tập thật tốt nhé! ”<br>- “ Mọi hình chữ nhật đều nội tiếp được đường tròn ”  Hỏi có bao nhiêu phát biểu là một mệnh đề?",
  "options": [
   "$1$",
   "$3$",
   "$4$",
   "$2$"
  ],
  "answer": 1,
  "explain": "Các phát biểu $1$, $2$, $4$ là những mệnh đề.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111TN6",
  "question": "Câu nào sau đây là mệnh đề toán học?",
  "options": [
   "Hôm nay trời nóng quá!",
   "Bạn có thích học toán không?",
   "Bài tập này khó quá!",
   "Số $5$ là một số tự nhiên"
  ],
  "answer": 3,
  "explain": "“ Số $5$ là một số tự nhiên”\\,là mệnh đề toán học.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN8",
  "question": "Mệnh đề phủ định của mệnh đề “$\\exists x \\in \\mathbb{R}, x^2-5=0$”\\, là",
  "options": [
   "“$\\forall x \\in \\mathbb{R}, x^2-5=0$”",
   "“$\\exists x \\in \\mathbb{R}, x^2-5\\neq 0$”",
   "“$\\forall x \\in \\mathbb{R}, x^2-5\\neq 0$”",
   "“$\\forall x \\in \\mathbb{R}, x^2-5&gt; 0$”"
  ],
  "answer": 2,
  "explain": "Mệnh đề phủ định của mệnh đề “$\\exists x \\in \\mathbb{R}, x^2-5=0$”\\, là “$\\forall x \\in \\mathbb{R}, x^2-5\\neq 0$”.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112TN8",
  "question": "Trong các phát biểu sau, có bao nhiêu mệnh đề Toán học?  <br>- Số $\\pi$ là một số hữu tỉ.<br>- $x+2\\ge0$.<br>- Phan Rang - Tháp Chàm là thành phố thuộc tỉnh Ninh Thuận.<br>- Trọng tâm của một tam giác là giao điểm của hai đường trung tuyến của tam giác đó.",
  "options": [
   "$1$",
   "$2$",
   "$3$",
   "$4$"
  ],
  "answer": 1,
  "explain": "Các mệnh đề Toán học là mệnh đề số $1$ và $4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111TN7",
  "question": "Phát biểu nào sau đây là mệnh đề?",
  "options": [
   "$\\sqrt{x}$ có phải là số vô tỉ?",
   "$ 3$ là số nguyên tố.",
   "$ 2x+1$ là số lẻ.",
   "Học Toán thật thú vị!"
  ],
  "answer": 1,
  "explain": "Phát biểu “ $ 3$ là số nguyên tố” là mệnh đề.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN9",
  "question": "Phủ định của mệnh đề $P\\colon$“ $\\forall x\\in\\mathbb{R},\\,x^2-3x&gt;0$”\\, là mệnh đề nào sau đây?",
  "options": [
   "$\\exists x\\in\\mathbb{R},x^2-3x\\ge 0$",
   "$\\exists x\\in\\mathbb{R},x^2-3x&gt;0$",
   "$\\exists x\\in\\mathbb{R},x^2-3x\\le 0$",
   "$\\forall x\\in\\mathbb{R},x^2-3x\\le 0$"
  ],
  "answer": 2,
  "explain": "$\\overline{P}\\colon\\exists x\\in\\mathbb{R},x^2-3x\\le 0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN10",
  "question": "Phủ định của mệnh đề “ $\\exists x\\in\\mathbb{N} \\colon 2x^2-5x+3=0$”\\ là mệnh đề nào sau đây?",
  "options": [
   "“ $\\exists x\\in\\mathbb{N} \\colon 2x^2-5x+3&gt;0$”",
   "“ $\\forall x\\in\\mathbb{N} \\colon 2x^2-5x+3=0$”",
   "“ $\\exists x\\in\\mathbb{N} \\colon 2x^2-5x+3\\ne 0$”",
   "“ $\\forall x\\in\\mathbb{N} \\colon 2x^2-5x+3\\ne 0$”"
  ],
  "answer": 3,
  "explain": "Phủ định của mệnh đề “ $\\exists x\\in\\mathbb{N} \\colon 2x^2-5x+3=0$”\\ là mệnh đề “ $\\forall x\\in\\mathbb{N} \\colon 2x^2-5x+3\\ne 0$”.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111TN4",
  "question": "Cho mệnh đề chứa biến $P(x)\\colon$“ $-2x^2+x+1&lt;0$”. Giá trị nào sau đây của biến $x$ làm cho $P(x)$ trở thành một mệnh đề <strong>sai</strong>?",
  "options": [
   "$x = 3$",
   "$x = \\dfrac{1}{2}$",
   "$x = 2$",
   "$x = \\dfrac{5}{2}$"
  ],
  "answer": 1,
  "explain": "Thay $x=3$, ta được $-2\\cdot 3^2+3+1=-14&lt;0$. Do đó, $P(3)$ là mệnh đề đúng. <br>   Thay $x=\\dfrac{1}{2}$, ta được $-2\\cdot\\left(\\dfrac{1}{2}\\right)^2+\\dfrac{1}{2}+1=1&gt;0$. Do đó, $P\\left(\\dfrac{1}{2}\\right)$ là mệnh đề sai. <br>   Thay $x=2$, ta được $-2\\cdot 2^2+2+1=-5&lt;0$. Do đó, $P(2)$ là mệnh đề đúng.<br>   Thay $x=\\dfrac{5}{2}$, ta được $-2\\cdot\\left(\\dfrac{5}{2}\\right)^2+\\dfrac{5}{2}+1=-9&lt;0$. Do đó, $P\\left(\\dfrac{5}{2}\\right)$ là mệnh đề đúng. <br>   Vậy giá trị của $x$ làm cho $P(x)$ trở thành một mệnh đề sai là $x=\\dfrac{1}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111TN5",
  "question": "Trong các câu sau, có bao nhiêu câu là mệnh đề?  <br>- [1)]<br>- “ $19$ là số nguyên tố”.<br>- “ Tam giác vuông có một đường trung tuyến bằng nửa cạnh huyền”.<br>- “ Các em cố gắng tập thật tốt nhé, sắp thi giữa học kì $1$ rồi”.<br>- “ Mọi hình chữ nhật đều nội tiếp được đường tròn”.",
  "options": [
   "$4$",
   "$3$",
   "$2$",
   "$1$"
  ],
  "answer": 1,
  "explain": "Xét các câu đã cho:  <br>- [1)]<br>- “ $19$ là số nguyên tố”\\ là mệnh đề.<br>- “ Tam giác vuông có một đường trung tuyến bằng nửa cạnh huyền”\\ là mệnh đề.<br>- “ Các em cố gắng tập thật tốt nhé, sắp thi giữa học kì $1$ rồi”\\ không phải là mệnh đề (là lời khuyên).<br>- “ Mọi hình chữ nhật đều nội tiếp được đường tròn”\\ là mệnh đề.  Vậy có $3$ câu là mệnh đề.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112TN9",
  "question": "Trong các phát biểu sau đây, phát biểu nào là một mệnh đề toán học?",
  "options": [
   "Hình chữ nhật là hình bình hành phải không?",
   "Số $1$ là số nguyên tố",
   "Tam giác cân có một góc $60^\\circ$ có là tam giác đều không?",
   "Học, học nữa, học mãi"
  ],
  "answer": 1,
  "explain": "<br>- “ Hình chữ nhật là hình bình hành phải không?”\\, là câu hỏi.<br>- “ Số $1$ là số nguyên tố”\\, là một khẳng định sai (số nguyên tố phải lớn hơn $1$), đây là một mệnh đề toán học.<br>- “ Tam giác cân có một góc $60^\\circ$ có là tam giác đều không?”\\, là câu hỏi.<br>- “ Học, học nữa, học mãi”\\, là câu khẩu hiệu (câu cảm thán).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112TN7",
  "question": "Trong các câu sau, câu nào <strong>không</strong> phải mệnh đề?",
  "options": [
   "$8$ là số chính phương",
   "Hà Nội là thủ đô Việt Nam",
   "Buồn ngủ quá!",
   "Hình thoi có hai đường chéo vuông góc với nhau"
  ],
  "answer": 2,
  "explain": "“ Buồn ngủ quá!”\\, là câu cảm thán nên không phải là mệnh đề.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TN11",
  "question": "Mệnh đề phủ định của mệnh đề $P\\colon \"\\forall x\\in\\mathbb{N}\\colon x^{2}+x-1&gt;0\"$ là",
  "options": [
   "$\\overline{P}\\colon \"\\exists x\\in\\mathbb{N}\\colon x^{2}+x-1&gt;0\"$",
   "$\\overline{P}\\colon \"\\forall x\\in\\mathbb{N}\\colon x^{2}+x-1&gt;0\"$",
   "$\\overline{P}\\colon \"\\exists x\\in\\mathbb{N}\\colon x^{2}+x-1\\le0\"$",
   "$\\overline{P}\\colon \"\\forall x\\in\\mathbb{N}\\colon x^{2}+x-1&lt;0\"$"
  ],
  "answer": 2,
  "explain": "Phủ định của “ với mọi”\\, ($\\forall$) là “ tồn tại”\\, ($\\exists$).<br>  Phủ định của “ $&gt;$”\\, là “ $\\le$”\\,.<br>  Vậy $\\overline{P}\\colon \"\\exists x\\in\\mathbb{N}\\colon x^{2}+x-1\\le0\"$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN1",
  "question": "Phần không bị gạch trên trục số dưới đây biểu diễn tập hợp $X$ là một tập con của tập số thực.  Mệnh đề nào dưới đây là đúng?<br><img src=\"data/10/0D1/im0D12/dlts_sbh_giuakii1_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$X = (-3; 2)$",
   "$X = [-3; 2]$",
   "$X = (-3; 2]$",
   "$X = [-3; 2)$"
  ],
  "answer": 2,
  "explain": "Ta có $X = (-3; 2]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN1",
  "question": "Cho tập hợp $X=\\left\\{x \\in \\mathbb{Z} \\mid x^2-2=0\\right\\}$. Mệnh đề nào sau đây là đúng?",
  "options": [
   "$X=\\{-\\sqrt{2}\\}$",
   "$X=\\{\\sqrt{2}\\}$",
   "$X=\\varnothing$",
   "$X=\\{-\\sqrt{2}; \\sqrt{2}\\}$"
  ],
  "answer": 2,
  "explain": "Ta có $x^2-2=0\\Leftrightarrow x= \\pm \\sqrt{2}$. Vì $x \\in \\mathbb{Z}$ nên $X=\\varnothing$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN2",
  "question": "Kí hiệu nào sau đây dùng để viết đúng mệnh đề ``7 là số tự nhiên'' ?",
  "options": [
   "$7 \\subset \\mathbb{N}$",
   "$7 \\in \\mathbb{N}$",
   "$7&lt;\\mathbb{N}$",
   "$7 \\leq \\mathbb{N}$"
  ],
  "answer": 1,
  "explain": "Mệnh đề đúng là $7 \\in \\mathbb{N}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN3",
  "question": "Kí hiệu nào sau đây dùng để viết đúng mệnh đề ``$\\sqrt{2}$ không phải là số hữu tỉ''?",
  "options": [
   "$\\sqrt{2} \\neq \\mathbb{Q}$",
   "$\\sqrt{2} \\not \\subset \\mathbb{Q}$",
   "$\\sqrt{2} \\notin \\mathbb{Q}$",
   "$\\sqrt{2} \\in \\mathbb{Q}$"
  ],
  "answer": 2,
  "explain": "Khẳng định đúng là $\\sqrt{2} \\notin \\mathbb{Q}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN3",
  "question": "Cho tập hợp $A=\\left\\lbrace x \\in \\mathbb{R} :\\left(x^{2}-1\\right)\\left(x^{2}+2\\right)=0\\right\\rbrace$. Các phần tử của tập $A$ là",
  "options": [
   "$A=\\{1\\}$",
   "$A=\\{-1 ; 1\\}$",
   "$A=\\left\\lbrace \\pm \\sqrt{2} ;\\pm 1\\right\\rbrace $",
   "$A=\\{-1\\}$"
  ],
  "answer": 1,
  "explain": "Ta có $\\left(x^{2}-1\\right)\\left(x^{2}+2\\right)=0\\Leftrightarrow x^2-1=0 \\text{ hoặc } x^2+2=0\\Leftrightarrow x^2=1 \\text{ hoặc } x^2=-2\\Leftrightarrow x=\\pm1 \\text{ hoặc } x\\in\\varnothing.$<br>  Vì $x\\in\\mathbb{R}$ nên $A=\\{-1 ; 1\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN4",
  "question": "Cho tập hợp $X=\\left\\lbrace x \\in \\mathbb{N} :(x+2)\\left(2 x^{2}-5 x+3\\right)=0\\right\\rbrace$. Các phần tử của tập $X$ là",
  "options": [
   "$X=\\{-2 ; 1\\}$",
   "$X=\\{1\\}$",
   "$X=\\left\\lbrace -2 ; 1 ; \\dfrac{3}{2}\\right\\rbrace$",
   "$X=\\left\\lbrace 1 ; \\dfrac{3}{2}\\right\\rbrace$"
  ],
  "answer": 1,
  "explain": "Ta có $(x+2)\\left(2 x^{2}-5 x+3\\right)=0\\Leftrightarrow x+2=0 \\text{ hoặc } 2 x^{2}-5 x+3=0\\Leftrightarrow x=-2 \\text{ hoặc } x=1,x=\\dfrac{3}{2}.$<br>  Vì $x\\in\\mathbb{N}$ nên $X=\\{1\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN5",
  "question": "Cho tập hợp $X=\\left\\lbrace x\\in\\mathbb{Z}\\mid x^4-6x^2+8=0\\right\\rbrace$. Các phần tử của tập $X$ là",
  "options": [
   "$X=\\{-2 ; 2\\}$",
   "$X=\\{-\\sqrt 2;\\sqrt 2\\}$",
   "$X=\\{\\sqrt 2; 2\\}$",
   "$X=\\{-2 ;-\\sqrt 2;\\sqrt 2; 2\\}$"
  ],
  "answer": 0,
  "explain": "Ta có $x^4-6x^2+8=0\\Leftrightarrow (x^2-3)^2=1\\Leftrightarrow x^2=4 \\text{ hoặc } x^2=2\\Leftrightarrow x=\\pm2 \\text{ hoặc } x=\\pm\\sqrt{2}.$<br>  Vì $x\\in \\mathbb{Z}$ nên $x=\\pm 2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN6",
  "question": "Cho tập hợp $X=\\left\\lbrace x\\in\\mathbb{Q}\\mid\\left(x^2-x-6\\right)\\left(x^2-5\\right)=0\\right\\rbrace$. Các phần tử của tập $X$ là",
  "options": [
   "$X=\\{\\sqrt 5; 3\\}$",
   "$X=\\{-\\sqrt 5;-2 ;\\sqrt 5; 3\\}$",
   "$X=\\{-2 ; 3\\}$",
   "$X=\\{x\\in\\mathbb{Q}\\mid-\\sqrt 5\\leq x\\leq 3\\}$"
  ],
  "answer": 2,
  "explain": "Ta có $\\left(x^2-x-6\\right)\\left(x^2-5\\right)=0\\Leftrightarrow x^2-x-6=0 \\text{ hoặc } x^2-5=0\\Leftrightarrow x=-2 \\text{ hoặc } x=3 \\text{ hoặc } x=\\pm \\sqrt{5}\\notin \\mathbb{Q}.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN7",
  "question": "Hãy liệt kê các phần tử của tập hợp $M=\\{x\\in\\mathbb{N}~\\text{sao cho}~\\sqrt x ~\\text{là ước của} ~8\\}$",
  "options": [
   "$M=\\{1 ; 2 ; 4 ; 8\\}$",
   "$M=\\{0 ; 1 ; 2 ; 4 ; 8\\}$",
   "$M=\\{1 ; 4 ; 16 ; 64\\}$",
   "$M=\\{0 ; 1 ; 4 ; 16 ; 64\\}$"
  ],
  "answer": 2,
  "explain": "Ta có $8\\not\\vdots\\sqrt{2}$ do đó loại $M=\\{1 ; 2 ; 4 ; 8\\}$ và $M=\\{0 ; 1 ; 2 ; 4 ; 8\\}$.<br>  Ta có $0$ không là ước của $8$ nên loại $M=\\{0 ; 1 ; 4 ; 16 ; 64\\}$.<br>  Chỉ có $M=\\{1 ; 4 ; 16 ; 64\\}$ thỏa đề bài.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN8",
  "question": "Số phần tử của tập hợp $A=\\left\\lbrace k^2+1|k\\in\\mathbb{Z},| k\\mid\\leq 2\\right\\rbrace$ là",
  "options": [
   "$1$",
   "$2$",
   "$3$",
   "$5$"
  ],
  "answer": 2,
  "explain": "Ta có $k\\in\\mathbb{Z}$ và $| k\\mid\\leq 2$ nên $k\\in \\{-2 ; -1 ; 0 ; 1 ; 2\\}$.<br>  Thay các giá trị của $k$ vào $k^2+1$ ta được $3$ giá trị là $5; 2;0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN9",
  "question": "Cho tập hợp $X=\\{0 ; 1 ; 2 ; a ; b\\}$. Số phần tử của tập $X $ là",
  "options": [
   "$3$",
   "$2$",
   "$5$",
   "$4$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN10",
  "question": "Cho tập hợp $X=\\{2 ; 3 ; 4\\}$. Tập $X$ có bao nhiêu tập hợp con?",
  "options": [
   "$3$",
   "$6$",
   "$8$",
   "$9$"
  ],
  "answer": 2,
  "explain": "Số tập con của $X$ là $2^3=8$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN11",
  "question": "Tập $A=\\{0 ; 2 ; 4 ; 6\\}$ có bao nhiêu tập hợp con có đúng hai phần tử?",
  "options": [
   "$4$",
   "$6$",
   "$7$",
   "$8$"
  ],
  "answer": 1,
  "explain": "Số tập con của $X$ có hai phần tử là   $\\{0 ; 2\\}$, $\\{0 ; 4\\}$, $\\{0 ; 6\\}$, $\\{2 ; 4\\}$, $\\{2 ; 6\\}$, $\\{4 ; 6\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN12",
  "question": "Cho hai tập hợp $A =(-\\infty; m+1]$ và $B = (-1;+\\infty)$. Điều kiện để $(A \\cup B) = \\mathbb{R}$ là",
  "options": [
   "$m &gt;-1$",
   "$m \\ge -2$",
   "$m \\ge 0$",
   "$m &gt;-2$"
  ],
  "answer": 1,
  "explain": "$(A \\cup B) = \\mathbb{R} \\Leftrightarrow -1 \\leq m+1 \\Leftrightarrow m\\geq-2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN13",
  "question": "Cho hai tập hợp $A =[1-2m;m+3]$ và $B = \\{ x \\in \\mathbb{R} | x \\ge 8-5m\\}$. Tìm tất cả các giá trị của tham số $m$ để $A \\cap B =\\varnothing$.",
  "options": [
   "$m \\ge \\dfrac{5}{6}$",
   "$m &lt; -\\dfrac{2}{3}$",
   "$m &lt;\\dfrac{5}{6}$",
   "$-\\dfrac{2}{3} \\le m &lt; \\dfrac{5}{6}$"
  ],
  "answer": 2,
  "explain": "<br>- Nếu $A =\\varnothing \\Leftrightarrow 1-2m &gt;m+3 \\Leftrightarrow m &lt; -\\dfrac{2}{3} $ thì $A \\cap B =\\varnothing$.<br>- Nếu $A \\ne \\varnothing \\Leftrightarrow 1-2m \\le m+3 \\Leftrightarrow m \\ge -\\dfrac{2}{3}$. Khi đó  $A \\cap B =\\varnothing \\Leftrightarrow m+3 &lt;8-5m \\Leftrightarrow m &lt; \\dfrac{5}{6}.$  Vậy tất cả $m$ thỏa bài toán là $m &lt; \\dfrac{5}{6}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN13",
  "question": "Cho tập hợp $A=(-1 ; 7)$; $B=[-2 ; 5]$. Khi đó, tập $A \\cap B$ là",
  "options": [
   "$[-1 ; 5]$",
   "$[-2 ; 7)$",
   "$[-2 ;-1)$",
   "$(-1 ; 5]$"
  ],
  "answer": 3,
  "explain": "$A \\cap B=(-1;5]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D122TN2",
  "question": "Cho tập hợp $A=\\{a ; b ; c ; d\\}$. Số tập con gồm hai phần tử của $A$ là",
  "options": [
   "$4$",
   "$6$",
   "$5$",
   "$7$"
  ],
  "answer": 1,
  "explain": "Tập con có hai phần tử của $A$ là $\\{a;b\\};\\{a;c\\};\\{a;d\\};\\{b;c\\};\\{b;d\\};\\{c;d\\}$.<br>  Vậy tập $A$ có $6$ tập hợp con.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN14",
  "question": "Cho tập hợp $A = \\{x \\in \\mathbb{N} | x \\le 5\\}$. Mệnh đề nào sau đây là <strong>đúng</strong>?",
  "options": [
   "$A=\\{1;2;3;4\\}$",
   "$A=\\{0;1;2;3;4;5\\}$",
   "$A=\\{1;2;3;4;5\\}$",
   "$A=\\{0;1;2;3;4\\}$"
  ],
  "answer": 1,
  "explain": "Vì $x \\in \\mathbb{N}$ (tập hợp số tự nhiên, bao gồm số $0$) và $x \\le 5$, nên các phần tử của $A$ là $0, 1, 2, 3, 4, 5$.<br>  Vậy $A = \\{0; 1; 2; 3; 4; 5\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D122TN3",
  "question": "Tập hợp $A=\\{1; 2\\}$ có bao nhiêu tập con?",
  "options": [
   "$2$",
   "$3$",
   "$1$",
   "$4$"
  ],
  "answer": 3,
  "explain": "Tập hợp $A=\\{1; 2\\}$ có $2$ phần tử nên tập $A$ có $2^2=4$ tập con.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN14",
  "question": "Tập hợp $M=\\{x \\in \\mathbb{R} \\mid 1\\leq x &lt; 6\\}$ bằng tập nào dưới đây?",
  "options": [
   "$\\{1; 2; 3; 4; 5\\}$",
   "$[1; 6)$",
   "$\\{1; 2; 3; 4; 5; 6\\}$",
   "$[1; 6]$"
  ],
  "answer": 1,
  "explain": "Ta có $x \\in \\mathbb{R} \\text{ và } 1\\leq x &lt; 6\\Rightarrow M=[1; 6)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D122TN1",
  "question": "Cho tập hợp $ A=\\left\\{ 1;2;5;6\\right\\}$. Khẳng định nào sau đây <strong>sai</strong>?",
  "options": [
   "$\\varnothing\\subset A$",
   "$\\left\\{ 1\\right\\}\\in A$",
   "$ 3\\notin A$",
   "$\\left\\{ 1;5\\right\\}\\subset A$"
  ],
  "answer": 1,
  "explain": "$\\left\\{ 1\\right\\}\\in A$ là khẳng định sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN2",
  "question": "Cho tập hợp $ B=\\left\\{ x\\in\\mathbb{R}|-\\dfrac{1}{2}&lt;x\\le 3\\right\\}$. Khẳng định nào sau đây đúng?",
  "options": [
   "$ B=\\left\\{0;1;2;3\\right\\}$",
   "$ B=\\left[-\\dfrac{1}{2};3\\right)$",
   "$ B=\\left\\{ 1;2;3\\right\\}$",
   "$ B=\\left(-\\dfrac{1}{2};3\\right]$"
  ],
  "answer": 3,
  "explain": "$ B=\\left(-\\dfrac{1}{2};3\\right]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN15",
  "question": "Phần <strong>không bị gạch</strong> trong hình vẽ sau đây là biểu diễn của tập hợp nào?  <br><img src=\"data/10/0D1/im0D12/loc3_0_TN_DS_THPT_chu_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$(-\\infty;2] \\cup (5;+\\infty)$",
   "$(-\\infty;2] \\cup [5;+\\infty)$",
   "$(-\\infty;2) \\cup (5;+\\infty)$",
   "$(-\\infty;2) \\cup [5;+\\infty)$"
  ],
  "answer": 3,
  "explain": "Dựa vào hình vẽ, ta thấy phần <strong>không bị gạch</strong> biểu diễn tập hợp $\\left(-\\infty;2\\right)\\cup\\left[5;+\\infty\\right)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN4",
  "question": "Hãy liệt kê các phần tử của tập $X=\\{x\\in\\mathbb{N}\\mid (x+3)(2x^2-7x+5)=0\\}$.",
  "options": [
   "$X=\\{1\\}$",
   "$X=\\{-3;1\\}$",
   "$X=\\left\\{1;\\dfrac{5}{2}\\right\\}$",
   "$X=\\left\\{-3;1;\\dfrac{5}{2}\\right\\}$"
  ],
  "answer": 0,
  "explain": "Ta có<br>  $\\begin{aligned}[c]  (x+3)(2x^2-7x+5) &=0 \\\\  x + 3 = 0\\ \\text{hoặc}\\ & 2x^2 - 7X + 5 = 0 \\\\  x = -3 \\ \\text{hoặc}\\ & x = \\dfrac{5}{2} \\ \\text{hoặc}\\ x = 1.   \\end{aligned}$<br>  Do $x \\in \\mathbb{N}$ nên ta nhận $x = 1$.  Vậy $X=\\{x\\in\\mathbb{N}\\mid (x+3)(2x^2-7x+5)=0\\}=\\{1\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN15",
  "question": "Cho tập hợp $A=\\{x\\in\\mathbb{N}^*\\mid x&lt;10;\\ x \\ \\vdots\\ 3\\}$. Khẳng định nào sau đây là đúng?",
  "options": [
   "$A$ có $2$ phần tử",
   "$A$ có $5$ phần tử",
   "$A$ có $4$ phần tử",
   "$A$ có $3$ phần tử"
  ],
  "answer": 3,
  "explain": "Các số tự nhiên khác $0$, nhỏ hơn $10$ và chia hết cho $3$ là $3$, $6$, $9$. <br>  Suy ra $A=\\{3;6;9\\}$  Vậy tập hợp $A$ có $3$ phần tử.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121TN6",
  "question": "Hãy liệt kê các phần tử của tập hợp $X=\\{x\\in\\mathbb{R} \\mid x^{2}+x+1=0\\}$.",
  "options": [
   "$X=\\varnothing$",
   "$X=\\{\\varnothing\\}$",
   "$X=\\{0\\}$",
   "$X=0$"
  ],
  "answer": 0,
  "explain": "Xét phương trình $x^2+x+1=0$.<br>  Ta có $\\Delta = 1^2 - 4\\cdot 1 \\cdot 1 = -3 &lt; 0$.<br>  Phương trình vô nghiệm trên $\\mathbb{R}$.<br>  Vậy $X=\\varnothing$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123TN7",
  "question": "Cho tập hợp $A=(-3;+\\infty)$. Tập hợp nào dưới đây là tập con của tập $A$?",
  "options": [
   "$(-\\infty;2)$",
   "$(-2;+\\infty)$",
   "$(-4;+\\infty)$",
   "$(-\\infty;+\\infty)$"
  ],
  "answer": 1,
  "explain": "Ta thấy $(-2; +\\infty) \\subset (-3; +\\infty)$ vì $-2 &gt; -3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN1",
  "question": "Cho 2 tập hợp $X=\\{1; 2; 4; 7; 9\\}$; $Y=\\{-1; 0; 7; 10\\}$. Tập hợp $X\\cup Y$ có bao nhiêu phần tử?",
  "options": [
   "$9$",
   "$7$",
   "$8$",
   "$10$"
  ],
  "answer": 2,
  "explain": "Ta có $X\\cup Y=\\{-1;0;1;2;4;7;9;10\\}$, có $8$ phần tử.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN2",
  "question": "Cho $A$ và $B$ là hai tập hợp bất kỳ. Phần gạch sọc trong hình vẽ bên là tập hợp nào?<br><img src=\"data/10/0D1/im0D13/dlts_sbh_ds10cd123_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$A \\cup B$",
   "$B \\setminus A$",
   "$A \\setminus B$",
   "$A \\cap B$"
  ],
  "answer": 3,
  "explain": "Phần gạch sọc là phần chung của cả hai tập hợp $A$ và $B$ nên đó là tập $A\\cap B$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN3",
  "question": "Cho các tập hợp $A=\\{1;2;3;4\\}$ và $B=\\{2;4;5;8\\}$. Tìm tập hợp $A\\cup B$?",
  "options": [
   "$\\{1;2;3;4;5;8\\}$",
   "$\\{1;2;3;5;8\\}$",
   "$\\{1;2;3;4;5;6;8\\}$",
   "$\\{1;3;4;5;8\\}$"
  ],
  "answer": 0,
  "explain": "Ta có $A\\cup B=\\{1;2;3;4;5;8\\}$ .",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN4",
  "question": "Cho $M=\\{0;1;2;3;4\\}$ và $N=\\{0;2;4;6;8\\}$. Khi đó tập hợp $M\\cap N$ là",
  "options": [
   "$\\{6;8\\}$",
   "$\\{1;3\\}$",
   "$\\{0;2;4\\}$",
   "$\\{0;1;2;3;4;6;8\\}$"
  ],
  "answer": 2,
  "explain": "Ta có $M \\cap N=\\{0;2;4\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN5",
  "question": "Các tập hợp $A$, $B$, $C$ được minh họa bằng biểu đồ Ven như hình bên. Phần gạch chéo trong hình là biểu diễn của tập hợp nào sau đây?  \\loigiai{  Phần gạch chéo trong hình vẽ là tập con của $A\\cap B$.<br>  Mặt khác, phần gạch chéo không nằm trong $C$ nên đó là tập $\\left(A\\cap B\\right)\\setminus C$.  }<br><img src=\"data/10/0D1/im0D13/dlts_sbh_ds10cd123_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$A\\cap B\\cap C$",
   "$\\left(A\\setminus C\\right)\\cup \\left(A\\setminus B\\right)$",
   "$\\left(A\\cup B\\right)\\setminus C$",
   "$\\left(A\\cap B\\right)\\setminus C$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN6",
  "question": "Cho hai tập hợp $A\\{a;b;1;2\\}$ và $B=\\{a;b;c;1;3\\}$. Tập hợp $A\\cap B$ là",
  "options": [
   "$\\{a;b;1\\}$",
   "$\\{a;b;2\\}$",
   "$\\{a;b;3\\}$",
   "$\\{2;3;c\\}$"
  ],
  "answer": 0,
  "explain": "Ta có $A\\cap B=\\{a;b;1\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN7",
  "question": "Cho hai tập hợp $A=\\{x\\in \\mathbb{N}\\big| x\\le 3\\}$ và $B=\\{0;1;2;3\\}$. Tập $A\\cap B$ là",
  "options": [
   "$\\{1;2;3\\}$",
   "$\\{-3;-3;-2;0;1;2;3\\}$",
   "$\\{0;1;2\\}$",
   "$\\{0;1;2;3\\}$"
  ],
  "answer": 3,
  "explain": "Ta có $A=\\{x\\in \\mathbb{N}\\big| x\\le 3\\}=\\{0;1;2;3\\}$.<br>  Do đó $A\\cap B=\\{0;1;2;3\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN8",
  "question": "Cho hai tập hợp $A=\\{2;4;6;9\\}$ và $B=\\{1;2;3;4\\}$. Khi đó tập hợp $A\\setminus B$ là",
  "options": [
   "$\\varnothing$",
   "$\\{6;9;1;3\\}$",
   "$\\{1;2;3;5\\}$",
   "$\\{6;9\\}$"
  ],
  "answer": 3,
  "explain": "Ta có $A\\setminus B=\\{6;9\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN9",
  "question": "Cho tập hợp $A=\\{0;2;4;6;8\\}$ và $B=\\{3;4;5;6;7\\}$. Tập $A\\setminus B$ là",
  "options": [
   "$\\{0;6;8\\}$",
   "$\\{0;2;8\\}$",
   "$\\{3;6;7\\}$",
   "$\\{0;2\\}$"
  ],
  "answer": 1,
  "explain": "$A\\setminus B=\\{0;2;8\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN10",
  "question": "Cho 2 tập hợp $A=\\{x\\in \\mathbb{R}\\big| (2x-x^2)(2x^2-3x-2)=0\\}$, $B=\\{n\\in \\mathbb{N}\\big| 3&lt;n^2&lt;30\\}$. Khi đó tập $A \\cap B$ là",
  "options": [
   "$\\{2\\}$",
   "$\\{4;5\\}$",
   "$\\{2;4\\}$",
   "$\\{3\\}$"
  ],
  "answer": 0,
  "explain": "Ta có $(2x-x^2)(2x^2-3x-2)=0\\Leftrightarrow 2x-x^2=0 \\text{ hoặc } 2x^2-3x-2=0\\Leftrightarrow x=0 \\text{ hoặc } x=2 \\text{ hoặc } x=-\\dfrac{1}{2}.$<br>  Do đó $A=\\left\\lbrace 0;2;-\\dfrac{1}{2}\\right\\rbrace$.<br>  $B=\\{n\\in \\mathbb{N}\\big| 3&lt;n^2&lt;30\\}=\\{2;3;4;5\\}$.<br>  Do đó $A\\cap B=\\{2\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN11",
  "question": "Cho $A=\\{1;2;3;4;5;6;9\\}$, $B=\\{0;2;4;6;8;9\\}$ và $C=\\{3;4;5;6;7\\}$. Tích các phần tử của tập hợp $A\\cap \\left(B\\setminus C\\right)$ bằng",
  "options": [
   "$18$",
   "$11$",
   "$2$",
   "$7$"
  ],
  "answer": 0,
  "explain": "Ta có $B\\setminus C=\\{0;2;8;9\\}$.<br>  Do đó $A\\cap (B\\setminus C)=\\{2;9\\}$.<br>  Tích các phần tử bằng $2\\cdot 9=18$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN12",
  "question": "Cho $A$ và $B$ thỏa $A\\cup B=\\{1;2;3;4;5\\}$ và $A\\cap B=\\{2\\}$ và $A\\setminus B=\\{4;5\\}$. Khi đó tập hợp $B$ có thể là",
  "options": [
   "$\\{3\\}$",
   "$\\{1;2;3\\}$",
   "$\\{2;3\\}$",
   "$\\{2;5\\}$"
  ],
  "answer": 1,
  "explain": "Vì $A\\cap B=\\{2\\}$ nên $2\\in \\{B\\}$.  Vì $A\\setminus B=\\{4;5\\}$ nên $4;5 \\notin B$.<br>  Từ $(A\\cup B) \\setminus (A\\cap B)=(A\\setminus B)\\cup (B \\setminus A)$ suy ra $\\{1;3;4;5\\}=\\{4;5\\}\\cup (B\\setminus A)$.<br>  Do đó $\\{1;3\\} \\subset B\\setminus A$, hay $\\{1;3\\}\\in B$.<br>  Vậy $B=\\{1;2;3\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D135TN13",
  "question": "Lớp $10A$ có $10$ học sinh giỏi Toán, $15$ học sinh giỏi Văn, $5$ học sinh giỏi cả hai môn và $17$ học sinh không giỏi môn nào. Số học sinh của lớp $10A$ là",
  "options": [
   "$37$",
   "$42$",
   "$47$",
   "$32$"
  ],
  "answer": 0,
  "explain": "Gọi $A$ và $B$ lần lượt là tập hợp học sinh giỏi Toán và học sinh giỏi văn của lớp $10A$.<br>  Khi đó số học sinh giỏi cả hai môn là $A\\cap B$.<br>  Số học sinh giỏi toán hoặc giỏi văn là $n\\left(A\\cup B\\right)=n(A)+n(B)-n(A\\cap B)=10+15-5=20$ học sinh.<br>  Số học sinh của lớp là $20+17=37$ học sinh.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN14",
  "question": "Để phục vụ cho hội nghị quốc tế, ban tổ chức đã huy động $30$ cán bộ phiên dịch tiếng Anh, $25$ cán bộ phiên dịch tiếng Pháp. Trong đó có $12$ cán bộ phiên dịch được cả hai thứ tiếng Anh và Pháp. Hỏi ban tổ chức đã huy động tất cả bao nhiêu cán bộ phiên dịch cho hội nghị đó?",
  "options": [
   "$42$",
   "$31$",
   "$55$",
   "$43$"
  ],
  "answer": 3,
  "explain": "Gọi $A$ và $B$ lần lượt là tập hợp các cán bộ phiên dịch tiếng Anh và tiếng Pháp.<br>  Khi đó cán bộ phiên dịch được cả hai thứ tiếng là $A\\cap B$.<br>  Số cán bộ phiên dịch được huy động là $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)=30+25-12=43$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D135TN15",
  "question": "Lớp $10A$ có $10$ học sinh giỏi Toán, $10$ học sinh giỏi Lý, $11$ học sinh giỏi Hóa, $6$ học sinh giỏi cả Toán và Lý, $5$ học sinh giỏi cả Hóa và Lý, $4$ học sinh giỏi cả Toán và Hóa, $3$ học sinh giỏi cả ba môn Toán, Lý, Hóa. Số học sinh giỏi ít nhất một trong ba môn (Toán, Lý, Hóa) của lớp $10A$ là<br><img src=\"data/10/0D1/im0D13/dlts_sbh_ds10cd123_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$19$",
   "$18$",
   "$31$",
   "$49$"
  ],
  "answer": 0,
  "explain": "Gọi $A$, $B$, $C$ lần lượt là tập hợp các học sinh giỏi Toán, Lý và Hóa của lớp $10A$.  <br>- Số học sinh học giỏi Toán $n(A)=10$.<br>- Số học sinh giỏi Lý $n(B)=10$.<br>- Số học sinh giỏi Hóa $n(C)=11$.<br>- Số học sinh giỏi cả Toán và Lý là $n(A\\cap B)=6$.<br>- Số học sinh giỏi cả Hóa và Lý là $n(B\\cap C)=5$.<br>- Số học sinh giỏi cả Toán và Hóa là $n(A\\cap C)=4$.<br>- Số học sinh giỏi cả ba môn là $n(A\\cap B\\cap C)=3$.  Số học sinh giỏi ít nhất một trong ba môn là   $n(A\\cup B\\cup C) = n(A)+n(B)+n(C)-\\left[n(A\\cap B)+n(B\\cap C)+n(A\\cap C)\\right]+n(A\\cap B\\cap C)$<br>$= 10+10+11-(6+5+4)+3=19.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D135TN16",
  "question": "Lớp $10A$ có $7$ học sinh giỏi Toán, $5$ học sinh giỏi Lý, $6$ học sinh giỏi Hóa, $3$ học sinh giỏi cả Toán và Lý, $4$ học sinh giỏi cả Toán và Hóa, $2$ học sinh giỏi cả Lý và Hóa, $1$ học sinh giỏi cả ba môn Toán, Lý, Hóa. Số học sinh giỏi ít nhất một môn (Toán, Lý, Hóa) của lớp $10A$ là<br><img src=\"data/10/0D1/im0D13/dlts_sbh_ds10cd123_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$9$",
   "$18$",
   "$10$",
   "$28$"
  ],
  "answer": 2,
  "explain": "Gọi $A$, $B$, $C$ lần lượt là tập hợp các học sinh giỏi Toán, Lý và Hóa của lớp $10A$.  <br>- Số học sinh học giỏi Toán $n(A)=7$.<br>- Số học sinh giỏi Lý $n(B)=5$.<br>- Số học sinh giỏi Hóa $n(C)=6$.<br>- Số học sinh giỏi cả Toán và Lý là $n(A\\cap B)=3$.<br>- Số học sinh giỏi cả Hóa và Lý là $n(B\\cap C)=2$.<br>- Số học sinh giỏi cả Toán và Hóa là $n(A\\cap C)=4$.<br>- Số học sinh giỏi cả ba môn là $n(A\\cap B\\cap C)=1$.  Số học sinh giỏi ít nhất một trong ba môn là $n(A\\cup B\\cup C)=n(A)+n(B)+n(C)-\\left[n(A\\cap B)+n(B\\cap C)+n(A\\cap C)\\right]+n(A\\cap B\\cap C)=7+5+6-(3+2+4)+1=10.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN17",
  "question": "Gọi $A$ là tập hợp các học sinh của một lớp học có $53$ học sinh, $B$ và $C$ lần lượt là tập hợp các học sinh thích môn Toán, tập hợp các học sinh thích môn Văn của lớp này. Biết rằng có $40$ học sinh thích môn Toán và $30$ học sinh thích môn Văn. Số phần tử lớn nhất có thể có của tập hợp $B\\cap C$ bằng",
  "options": [
   "$31$",
   "$29$",
   "$30$",
   "$32$"
  ],
  "answer": 2,
  "explain": "Ta có $B\\cap C\\subset B$ và $B\\cap C\\subset C$, do đó $n(B\\cap C)\\le n(B)$ và $n(B\\cap C)\\le n(C)$.<br>  Suy ra số phần tử lớn nhất có thể có của $B\\cap C$ là $30$ khi $C\\subset B$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN18",
  "question": "Cho 2 đa thức $f(x)$ và $g(x)$. Xét $A=\\{x\\in \\mathbb{R}\\big| f(x)=0\\}$, $B=\\{x\\in \\mathbb{R}\\big|g(x)=0\\}$ và $C=\\{x\\in \\mathbb{R}\\big| f^2(x)+g^2(x)=0\\}$. Mệnh đề nào là mệnh đề đúng?",
  "options": [
   "$C=A\\cup B$",
   "$C=A\\cap B$",
   "$C=A\\setminus B$",
   "$C=B\\setminus A$"
  ],
  "answer": 1,
  "explain": "Vì $f^2(x)\\ge 0$ và $g^2(x)\\ge 0$, $\\forall x$ nên $f^2(x)+g^2(x)=0\\Leftrightarrow f(x)=0 \\text{ và } g(x)=0.$  Do đó $x\\in C\\Leftrightarrow x\\in A \\text{ và } x\\in B\\Leftrightarrow x\\in (A\\cap B)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN19",
  "question": "Xét các tập hợp $X$, $Y$ có cùng số phần tử. Biết rằng số phần tử của tập hợp $X \\cup Y$ và $X\\setminus Y$ lần lượt là $35$ và $15$. Số phần tử của tập hợp $X$ bằng",
  "options": [
   "$35$",
   "$20$",
   "$50$",
   "$15$"
  ],
  "answer": 1,
  "explain": "Vì $n(X)=n(Y)$ nên $n(X\\setminus Y)=n(Y\\setminus X)=15$.<br>  Do đó $n\\left(X\\cap Y\\right)=n\\left(X\\cup Y\\right)-\\left(n(X\\setminus Y)+n(Y \\setminus X)\\right)=35-(15+15)=5$.<br>  Vì $(X\\setminus Y) \\cup (X\\cap Y)=X$ và $(X\\setminus Y) \\cap (X\\cap Y)=\\varnothing$ nên $n(X)=n\\left(X\\setminus Y\\right)+n(X\\cap Y)=15+5=20.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN20",
  "question": "Cho tập hợp $M=\\{ x \\in \\mathbb{R} | 2 \\le x &lt; 5\\}$. Hãy viết tập hợp $M$ dưới dạng khoảng, đoạn?",
  "options": [
   "$M= [2; 5)$",
   "$M= (2; 5)$",
   "$M= [2; 5]$",
   "$M= (2; 5]$"
  ],
  "answer": 0,
  "explain": "Viết lại $M= [2; 5)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN21",
  "question": "Kết quả của $[-4; 1) \\cup (-2;3]$ là",
  "options": [
   "$(-2;1)$",
   "$[-4;3]$",
   "$(-4; 2]$",
   "$(1;3]$"
  ],
  "answer": 1,
  "explain": "Ta có $[-4; 1) \\cup (-2;3] =[-4;3]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN22",
  "question": "Kết quả của phép toán $(-\\infty ; 1) \\cap [-1;2)$ là",
  "options": [
   "$(1;2)$",
   "$(-\\infty; 2)$",
   "$[-1;1)$",
   "$(-1;1)$"
  ],
  "answer": 2,
  "explain": "Ta có $(-\\infty ; 1) \\cap [-1;2) = [-1;1)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN23",
  "question": "Cho hai tập hợp $A =(1;9)$ và $B= [3;+\\infty)$, khi đó $A \\cap B$ là",
  "options": [
   "$[1;+\\infty)$",
   "$(9;+\\infty)$",
   "$(1;3)$",
   "$[3;9)$"
  ],
  "answer": 3,
  "explain": "Ta có $A \\cap B= [3;9)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN24",
  "question": "Cho hai tập hợp $A =[-1;3]$ và $B(2;5)$. Tìm mệnh đề <strong>sai</strong> trong các mệnh đề dưới đây.",
  "options": [
   "$B \\setminus A =[3;5)$",
   "$A \\cap B (2;3]$",
   "$A \\setminus B = [-1;2]$",
   "$A \\cup B = [-1;5]$"
  ],
  "answer": 0,
  "explain": "Ta có $B \\setminus A = (3;5)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN25",
  "question": "Cho $A =(-\\infty ; 2]$ và $B =(0;+\\infty)$, khi đó $A \\setminus B$ là",
  "options": [
   "$(-\\infty ; 0]$",
   "$(2; +\\infty)$",
   "$(0;2]$",
   "$(-\\infty ; 0)$"
  ],
  "answer": 0,
  "explain": "Ta có $A \\setminus B = (-\\infty ; 0]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN26",
  "question": "Phần bù của $[-2;1)$ trong $\\mathbb{R}$ là",
  "options": [
   "$(-\\infty ;1]$",
   "$(-\\infty ; -2) \\cup [1; +\\infty)$",
   "$(-\\infty ; -2)$",
   "$(2;+ \\infty)$"
  ],
  "answer": 1,
  "explain": "Phần bù của $[-2;1)$ trong $\\mathbb{R}$ là $(-\\infty ; -2) \\cup [1; +\\infty)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN27",
  "question": "Phần bù của tập hợp $(-\\infty ; -2)$ trong $(-\\infty ; 4) $ là",
  "options": [
   "$(-2;4)$",
   "$(-2;4]$",
   "$[-2;4)$",
   "$[-2;4]$"
  ],
  "answer": 2,
  "explain": "Phần bù của tập hợp $(-\\infty ; -2)$ trong $(-\\infty ; 4) $ là $[-2;4)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN28",
  "question": "Cho $A =\\{x \\in \\mathbb{R} | x&lt;3 \\}$, $B =\\{x\\in \\mathbb{R} | 1 &lt; x \\le 5\\}$ và $C =\\{x \\in \\mathbb{R} |-2 \\le x \\le 4\\}$. Khi đó $(B \\cup C) \\setminus (A\\cap C)$ bằng",
  "options": [
   "$[-2;3)$",
   "$[3;5]$",
   "$(-\\infty ; 1]$",
   "$[-2;5]$"
  ],
  "answer": 1,
  "explain": "Ta có $B \\cup C= [-2;5]$ và $A \\cap C = [-2;3)$ nên $(B \\cup C) \\setminus (A\\cap C) = [3;5]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN29",
  "question": "Cho $M= [-3;6]$ và $N= (-\\infty; -2) \\cup (3;+\\infty)$. Khi đó $M \\cap N$ là",
  "options": [
   "$(-\\infty ; -2) \\cup [3;6]$",
   "$(-\\infty; -2) \\cup [3;+\\infty)$",
   "$[-3;-2) \\cup (3;6]$",
   "$(-3;-2) \\cup (3;6)$"
  ],
  "answer": 2,
  "explain": "Ta có $M \\cap N =[-3;-2) \\cup (3;6]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN30",
  "question": "Cho ba tập hợp $A = (-\\infty ;1]$, $B =[1;+\\infty)$ và $C =(0;1]$. Khẳng định nào sau đây <strong>sai</strong>?",
  "options": [
   "$(A\\cup B) \\setminus C =(-\\infty; 0] \\cup (1;+\\infty)$",
   "$A \\cap B \\cap C =\\{-1\\}$",
   "$A \\cup B \\cup C = (-\\infty; +\\infty)$",
   "$(A \\cap B) \\setminus C =\\varnothing$"
  ],
  "answer": 1,
  "explain": "Ta có $A \\cap B \\cap C =\\{1\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN31",
  "question": "Cho ba tập hợp $A = (-\\infty ;2]$, $B =[2;+\\infty)$ và $C =(0;3)$. Khẳng định nào sau đây <strong>sai</strong>?",
  "options": [
   "$A \\cap C =(0;2]$",
   "$B \\cup C =(0;+\\infty)$",
   "$A \\cup B =\\mathbb{R} \\setminus \\{2\\}$",
   "$B \\cap C =[2;3)$"
  ],
  "answer": 2,
  "explain": "Ta có $A \\cup B =\\mathbb{R}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN32",
  "question": "Cho ba tập hợp $A =(-\\infty ; -2]$, $B =[3;+\\infty)$ và $C =(0;4)$. Khi đó $(A \\cup B) \\cap C$ là",
  "options": [
   "$(-\\infty; -2] \\cup (3;+\\infty)$",
   "$(-\\infty ;-2) \\cup [3; +\\infty)$",
   "$[3;4)$",
   "$[3;4]$"
  ],
  "answer": 2,
  "explain": "Ta có $A \\cup B = (-\\infty ; -2] \\cup [3;+\\infty) $ nên $(A\\cup B) \\cap C =[3;4)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN18",
  "question": "Cho hai tập hợp $A=\\{0;1;5\\}$ và $B=\\{1;3;5;7;9\\}$. Tập hợp $A \\cap B$ là",
  "options": [
   "$\\{1;5\\}$",
   "$\\{1\\}$",
   "$\\{1;3;5\\}$",
   "$\\{1;3\\}$"
  ],
  "answer": 0,
  "explain": "$A \\cap B$ là tập hợp các phần tử chung của $A$ và $B$.  $A \\cap B = \\{0;1;5\\} \\cap \\{1;3;5;7;9\\} = \\{1;5\\}.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN2",
  "question": "Phần bù của tập hợp $(-\\infty;-2)$ trong tập hợp $(-\\infty;4)$ là",
  "options": [
   "$[-2;4)$",
   "$[-2;4]$",
   "$(-2;4]$",
   "$(-\\infty;-2)$"
  ],
  "answer": 2,
  "explain": "Phần bù của $A = (-\\infty;-2)$ trong $E = (-\\infty;4)$ là $C_E A = E \\setminus A$.  $C_E A = (-\\infty;4) \\setminus (-\\infty;-2) = [-2;4).$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN1",
  "question": "Cho tập $A = \\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$ và tập $B = \\{7, 8, 9\\}$. Khi đó:",
  "options": [
   "$A \\setminus B = \\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$",
   "$A \\setminus B = \\{0, 1, 2, 3, 4, 5, 6\\}$",
   "$A \\setminus B = \\{7, 8, 9\\}$",
   "$A \\setminus B = \\varnothing$"
  ],
  "answer": 1,
  "explain": "Tập hợp $A \\setminus B$ là tập hợp gồm các phần tử thuộc $A$ nhưng không thuộc $B$.<br>  Các phần tử thuộc $A$ nhưng không thuộc $B$ là các số $0, 1, 2, 3, 4, 5, 6$.<br>  Vậy $A \\setminus B = \\{0, 1, 2, 3, 4, 5, 6\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TN2",
  "question": "Cho hai tập hợp $A=\\{2; 4; 6; 9\\}$, $B=\\{1; 2; 3; 4\\}$. Tập $A\\setminus B$ bằng tập nào sau đây?",
  "options": [
   "$\\{2; 4\\}$",
   "$\\{1; 2; 3; 4; 6; 9\\}$",
   "$\\{1; 3\\}$",
   "$\\{6; 9\\}$"
  ],
  "answer": 3,
  "explain": "Ta có $A=\\{2; 4; 6; 9\\}$, $B=\\{1; 2; 3; 4\\}$ suy ra $A\\setminus B=\\{6; 9\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN3",
  "question": "Cho hai tập hợp $M=(-\\infty; 5]$ và $N=(-3;+\\infty)$. Khẳng định nào sau đây đúng?",
  "options": [
   "$M\\cap N=(-3; 5)$",
   "$M\\cap N=(-3; 5]$",
   "$M\\cap N=\\varnothing$",
   "$M\\cap N=\\mathbb{R}$"
  ],
  "answer": 1,
  "explain": "<br><img src=\"data/10/0D1/im0D13/loc2_0_TN_DS_TL_SGD_B_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>  <br><img src=\"data/10/0D1/im0D13/loc2_0_TN_DS_TL_SGD_B_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào hình vẽ, ta có $M\\cap N=(-3; 5]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN6",
  "question": "Cho $A=[-2;2)$. Phần bù của $A$ trong $\\mathbb{R}$ là",
  "options": [
   "$B=(-\\infty;-2)\\cup[2;+\\infty)$",
   "$B=(-\\infty;-2]\\cup(2;+\\infty)$",
   "$B=(-2;2]$",
   "$B=(-\\infty;-2)\\cup(2;+\\infty)$"
  ],
  "answer": 0,
  "explain": "Ta có $B=C_\\mathbb{R}A=(-\\infty;-2)\\cup[2;+\\infty)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN1",
  "question": "Cho tập hợp $ A=\\left[2;5\\right)$. Khi đó $C_{\\mathbb{R}}A$ là tập hợp nào sau đây?",
  "options": [
   "$\\left(-\\infty;2\\right)\\cup\\left[5;+\\infty\\right)$",
   "$\\left[5;+\\infty\\right)$",
   "$\\left(-\\infty;2\\right)$",
   "$\\left(-\\infty;2\\right]\\cup\\left(5;+\\infty\\right)$"
  ],
  "answer": 0,
  "explain": "$C_{\\mathbb{R}}A=\\left(-\\infty;2\\right)\\cup\\left[5;+\\infty\\right)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TN2",
  "question": "Cho tập hợp $A=\\left(-\\infty ;1\\right]$ và $ B=\\left(-1;2\\right]$. Tập hợp $ A\\cap B$ có bao nhiêu phần tử là số nguyên?",
  "options": [
   "$ 3$",
   "$2$",
   "$ 1$",
   "$ 4$"
  ],
  "answer": 1,
  "explain": "$ A\\cap B=\\left(-1 ;1\\right]$ nên có các phần tử nguyên là $0$, $1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D135TN3",
  "question": "Trong kì thi học sinh giỏi cấp trường, lớp 10A có $15$ học sinh thi môn Ngữ văn, $20$ học sinh thi môn Toán, $5$ học sinh thi cả hai môn Ngữ văn và Toán. Biết rằng lớp 10A có $40$ học sinh, hỏi lớp 10A có bao nhiêu học sinh không thi cả hai môn Toán và Ngữ văn?",
  "options": [
   "$10$",
   "$8$",
   "$15$",
   "$5$"
  ],
  "answer": 0,
  "explain": "Số học sinh thi môn Ngữ văn nhưng không thi Toán là $15-5=10$ học sinh. <br>  Số học sinh thi môn Toán nhưng không thi môn Ngữ văn là $20-5=15$ học sinh. <br>   Từ đó, ta vẽ được biểu đồ Venn như sau   <br><img src=\"data/10/0D1/im0D13/loc3_0_TN_DS_THPT_chu_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Do đó, ta có số học sinh không thi cả Toán và Ngữ văn là $40-10-5-15=10$ học sinh.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TN4",
  "question": "Cho tập hợp $A=[-8;3]$, $B=(1;6]$. Tập $B\\setminus A$ là",
  "options": [
   "$[3; 6]$",
   "$(3; 6]$",
   "$(1; 3)$",
   "$[-8; 1)$"
  ],
  "answer": 1,
  "explain": "Vì $A=[-8;3]$ và $B=(1;6]$ nên $B\\setminus A=(3;6]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TN5",
  "question": "Cho tập hợp $A=\\{2;3;4\\}$ và $B=\\{2;4;6;7;8\\}$. Tập hợp $A\\cup B$ là",
  "options": [
   "$\\{2;4;6;7\\}$",
   "$\\{2;3;4;6;7;8\\}$",
   "$\\{2;4\\}$",
   "$\\{2;3;4;5;6;7;8\\}$"
  ],
  "answer": 1,
  "explain": "Với $A=\\{2;3;4\\}$ và $B=\\{2;4;6;7;8\\}$, ta có $A\\cup B=\\{2;3;4;6;7;8\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN1",
  "question": "Cặp số nào sau đây <strong>không</strong> là nghiệm của bất phương trình $x+2y-3&gt;0$?",
  "options": [
   "$(-2;3)$",
   "$(-1;0)$",
   "$(-1;4)$",
   "$(4;0)$"
  ],
  "answer": 1,
  "explain": "Thay $(-1;0)$ vào bất phương trình $x+2y-3&gt;0$ ta được $-1+2\\cdot 0-3=-4&lt;0$.<br>  Vậy $(-1;0)$ không là nghiệm của bất phương trình $x+2y-3&gt;0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN1",
  "question": "Phần không bị gạch chéo (gồm cả bờ) trong hình vẽ là miền nghiệm của bất phương trình nào dưới đây?<br><img src=\"data/10/0D2/im0D21/dlts_sbh_giuakii1_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$2x-4y \\leq 8$",
   "$2x-4y \\geq 8$",
   "$2x-4y &gt;-5$",
   "$2x-4y &gt; 8$"
  ],
  "answer": 1,
  "explain": "Từ hình vẽ ta thấy đường thẳng đi qua $(4;0)$ và $(0;-2)$ là đường thẳng $2x-4y=8$ và điểm $O(0;0)$ không thuộc $2x-4y \\geq 8$ nên phần không bị gạch chéo là miền nghiệm của bất phương trình $2x-4y \\geq 8$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN2",
  "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $x+y-2&gt;0$?",
  "options": [
   "$(2 ; 1)$",
   "$(0 ; 0)$",
   "$(1 ; 0)$",
   "$(0 ; 1)$"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN2",
  "question": "Điểm $A(-1 ; 3)$ thuộc miền của bất phương trình",
  "options": [
   "$x+3 y&lt;0$",
   "$3 x-y&gt;0$",
   "$-3 x+2 y-4&gt;0$",
   "$2 x-y+4&gt;0$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN3",
  "question": "Tìm tất cả các số thực $a$ sao cho miền nghiệm của bất phương trình $x \\leq a$ chứa điểm $M(-1 ; 0)$.",
  "options": [
   "$a&gt;-1$",
   "$a \\geq-1$",
   "$a&gt;0$",
   "$a \\geq 0$"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN4",
  "question": "Cho đường thẳng $d: 7 x-9 y+2=0$ chia mặt phẳng toạ độ làm hai nửa mặt phẳng, trong đó miền nghiệm của bất phương trình $7 x-9 y+2&gt;0$ là nửa mặt phẳng",
  "options": [
   "có bờ là đường thẳng $d$ và không chứa điểm $O(0 ; 0)$",
   "không có bờ $d$ và chứa điểm $O(0 ; 0)$",
   "có bờ là đường thẳng $d$ và chứa điểm $O(0 ; 0)$",
   "không chứa bờ $d$ và không chứa điểm $O(0 ; 0)$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN5",
  "question": "Phần gạch chéo trong hình vẽ dưới đây (không bao gồm đường thẳng $\\mathrm{d}$ ) là miền nghiệm cuả bất phương trình bậc nhất hai ẩn nào sau đây?<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd145_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$2 x-y&lt;0$",
   "$x-2 y&lt;2$",
   "$2 y-x&lt;-2$",
   "$2 x-y&gt;1$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN6",
  "question": "Bất phương trình nào sau đây có miền nghiệm (phần không gạch sọc) như hình vẽ bên?<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd145_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$2 x-y+1&lt;0$",
   "$x-y+1&lt;0$",
   "$2 x-3 y+1&lt;0$",
   "$2 x-y-1&lt;0$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN7",
  "question": "Miền nghiệm của bất phương trình $x+y \\leq 2$ là phần không bị gạch sọc của hình vẽ nào trong các hình sau?",
  "options": [
   "<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd145_009.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd145_010.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd145_011.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd145_012.png\" alt=\"hinh ve\" class=\"option-graph-img\">"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN8",
  "question": "Cho bất phương trình $2 x+3 y-2&lt;0$. Miền nghiệm của bất phương trình là",
  "options": [
   "nửa mặt phẳng chứa điểm $O$ có bờ là đường thẳng $2 x+3 y-2=0$ (không kể bờ)",
   "nửa mặt phẳng chứa điểm $O$ có bờ là đường thẳng $2 x+3 y-2=0$ (kể cả bờ)",
   "nửa mặt phẳng không chứa điểm $O$ có bờ là đường thẳng $2 x+3 y-2=0$ (không kể bờ)",
   "nửa mặt phẳng không chứa điểm $O$ có bờ là đường thẳng $2 x+3 y-2=0$ (kể cả bờ)"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN9",
  "question": "Miền nghiệm của bất phương trình $x-2 y+5&lt;0$ là",
  "options": [
   "Nửa mặt phẳng không chứa gốc tọa độ, bờ là đường thẳng $y=\\dfrac{1}{2} x+\\dfrac{5}{2}$ (không bao gồm đường thẳng)",
   "Nửa mặt phẳng chứa gốc tọa độ, bờ là đường thẳng $y=\\dfrac{1}{2} x+\\dfrac{5}{2}$ (không bao gồm đường thẳng)",
   "Nửa mặt phẳng không chứa gốc tọa độ, bờ là đường thẳng $y=\\dfrac{1}{2} x+\\dfrac{5}{2}$ (bao gồm đường thẳng)",
   "Nửa mặt phẳng chứa gốc tọa độ, bờ là đường thẳng $y=\\dfrac{1}{2} x+\\dfrac{5}{2}$ (không bao gồm đường thẳng)"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN10",
  "question": "Cặp điểm nào sau đây thuộc miền nghiệm của bất phương trình $3(x+\\sqrt{2} y-\\sqrt{3})&gt;$ $8(\\sqrt{3} x+2 y-\\sqrt{2}) ?$",
  "options": [
   "$A(2 ;-2)$ và $B(2 ; 2)$",
   "$C(-\\sqrt{3} ;-\\sqrt{2})$ và $D(\\sqrt{2} ;-1-\\sqrt{5})$",
   "$E(\\sqrt{2} ; \\sqrt{2})$ và $F(\\sqrt{5} ; 1)$",
   "$G(-\\sqrt{2} ; 2+\\sqrt{3})$ và $H(1 ; 4)$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN11",
  "question": "Giao miền nghiệm của ba bất phương trình $y \\geq 0 ; 3 x-2 y \\geq-6 ; 3 x+4 y \\leq 12$ tạo thành một tam giác có diện tích bằng",
  "options": [
   "$18$",
   "$9$",
   "$6$",
   "$12$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN12",
  "question": "Giao miền nghiệm của ba bất phương trình $x+4 y \\geq 8 ;-x+2 y \\leq 4 ; x+y \\leq 5$ tạo thành một tam giác có chu vi bằng",
  "options": [
   "$\\sqrt{17}+\\sqrt{5}+2 \\sqrt{2}$",
   "$\\sqrt{17}+\\sqrt{5}+\\sqrt{2}$",
   "$\\sqrt{17}+2 \\sqrt{5}+\\sqrt{2}$",
   "$\\sqrt{17}+2 \\sqrt{5}+2 \\sqrt{2}$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN13",
  "question": "Tìm tất cả các giá trị thực của tham số $m$ để bất phương trình $3 x+m y-7 \\geq 0$ có miền nghiệm chứa điểm $A(\\sqrt{2} ; 1)$.",
  "options": [
   "$m \\in[3 \\sqrt{2}-7 ;+\\infty)$",
   "$m \\in(-\\infty ; 3 \\sqrt{2}-7)$",
   "$m \\in(-\\infty ; 7-3 \\sqrt{3})$",
   "$m \\in[7-3 \\sqrt{2} ;+\\infty)$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN14",
  "question": "Cho bất phương trình $m x+\\sqrt{2} y-1&lt;0$ với $m$ là tham số thực. Điểm nào dưới đây luôn luôn không thuộc miền nghiệm của bất phương trình đã cho?",
  "options": [
   "$E\\left(m ; m^{2}\\right)$",
   "$F\\left(2 m^{2} ; m\\right)$",
   "$G\\left(0 ; 1+m^{2}\\right)$",
   "$H\\left(0 ;-1-m^{2}\\right)$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN15",
  "question": "Với giá trị nào của $m$ thì điểm $A(1-m ; m)$ không thuộc miền nghiệm của bất phương trình $2 x-3(y-x)&gt;4$.",
  "options": [
   "$0 \\leq m \\leq 1$",
   "$m&lt;\\dfrac{1}{8}$",
   "$\\dfrac{1}{8} \\leq m \\leq 1$",
   "$m \\geq \\dfrac{1}{8}$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN16",
  "question": "Miền tam giác $ABC$ kể cả ba cạnh sau đây là miền nghiệm của hệ bết phương trình nào trong bốn bệ $A$, $B$, $C$, $D$?<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd145_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$\\left\\{\\begin{array}{l}y \\geq 0 \\\\ 5 x-4 y \\geq 10 \\\\ 5 x+4 y \\leq 10\\end{array}\\right.$",
   "$\\left\\{\\begin{array}{l}x \\geq 0 \\\\ 4 x-5 y \\leq 10 \\\\ 5 x+4 y \\leq 10\\end{array}\\right.$",
   "$\\left\\{\\begin{array}{l}x \\geq 0 \\\\ 5 x-4 y \\leq 10 \\\\ 4 x+5 y \\leq 10\\end{array}\\right.$",
   "$\\left\\{\\begin{array}{l}x>0 \\\\ 5 x-4 y \\leq 10 \\\\ 4 x+5 y \\leq 10\\end{array}\\right.$"
  ],
  "answer": 2,
  "explain": "Dựa vào hình vẽ, ta thấy đồ thị gồm các đường thẳng:  $  \\begin{aligned}  &\\left(d_{1}\\right): x=0 \\\\  &\\left(d_{2}\\right): 4 x+5 y=10 \\\\  &\\left(d_{3}\\right): 5 x-4 y=10  \\end{aligned}  $  Miền nghiệm gần phần mặt phẳng nhận giá trị $x$ dương (kể cả bờ $\\left(d_{1}\\right)$ ). Lại có $(0 ; 0)$ là nghiệm của cả hai bất phương trình $4 x+5 y \\leq 10$ và $5 x-4 y \\leq 10$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN17",
  "question": "Miền nghiệm của bất phương trình $-x+2-3(y-1)\\le5(1-x)$ không chứa điểm nào trong các điểm sau?",
  "options": [
   "$I(2; 1)$",
   "$I(-1;-1)$",
   "$I(-1; 1)$",
   "$I(0; 0)$"
  ],
  "answer": 0,
  "explain": "Thay $x=2, y=1$ vào bất phương trình trên, ta được $0 \\le -5$ (sai). Do đó điểm $I(2;1)$ không thuộc miền nghiệm của bất phương trình.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN18",
  "question": "Miền nghiệm của bất phương trình $3x - 2y &gt; -6$ là phần tô đậm (không kể bờ) trong hình vẽ nào sau đây?",
  "options": [
   "<br><img src=\"data/10/0D2/im0D21/loc_ghk1hv_002.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D2/im0D21/loc_ghk1hv_003.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D2/im0D21/loc_ghk1hv_004.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D2/im0D21/loc_ghk1hv_005.png\" alt=\"hinh ve\" class=\"option-graph-img\">"
  ],
  "answer": 2,
  "explain": "Đường thẳng $3x-2y=-6$ đi qua hai điểm $\\left(-2;0\\right),\\left(0;3\\right)$.<br>  Thay toạ độ điểm $O$ vào bất phương trình ta có $3\\cdot 0-2\\cdot 0&lt;-6$.<br>  Miền nghiệm của bất phương trình là phần mặt phẳng chứa điểm $O$ (phần bị gạch đậm) không kể bờ đường thẳng $3x-2y=-6$.<br>  Miền nghiệm của bất phương trình được biểu diễn ở hình bên dưới  <br><img src=\"data/10/0D2/im0D21/loc_ghk1hv_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN19",
  "question": "Phần <strong>không</strong> bị gạch trong hình vẽ bên (kể cả đường thẳng $d$) là miền nghiệm của bất phương trình nào?<br><img src=\"data/10/0D2/im0D21/loc2_0_TL_TN_DS_THPT__001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$x - 2y \\ge 4$",
   "$4x - 2y \\le 1$",
   "$x - 2y \\le 4$",
   "$x - 2y &gt; 4$"
  ],
  "answer": 0,
  "explain": "Gọi $d$ là đường thẳng đi qua hai điểm thuộc trục tọa độ là $(4; 0)$ và $(0; -2)$. <br>  Suy ra $d \\colon x - 2y = 4$.<br>  Thay điểm $O(0;0)$ vào bất phương trình $x-2y \\ge 4$, ta được $0 - 2 \\cdot 0 = 0 \\ge 4$ (sai).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN20",
  "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y &gt; 3$?",
  "options": [
   "$M\\left(1; \\dfrac{3}{2}\\right)$",
   "$N(1; 1)$",
   "$P\\left(-1; \\dfrac{3}{2}\\right)$",
   "$Q(-1; -3)$"
  ],
  "answer": 0,
  "explain": "Để kiểm tra điểm nào thuộc miền nghiệm của bất phương trình $2x + y &gt; 3$, ta thay tọa độ $(x; y)$ của từng điểm vào bất phương trình.<br>  Xét điểm $M\\left(1; \\dfrac{3}{2}\\right)$, ta có $2\\cdot 1 + \\dfrac{3}{2} = 2 + 1{,}5 = 3{,}5$. Vì $3{,}5 &gt; 3$ nên $M$ thuộc miền nghiệm.<br>  Xét điểm $N(1; 1)$, ta có $2\\cdot 1 + 1 = 3$. Vì $3 \\ngtr 3$ nên $N$ không thuộc miền nghiệm.<br>  Xét điểm $P\\left(-1; \\dfrac{3}{2}\\right)$, ta có $2\\cdot (-1) + \\dfrac{3}{2} = -2 + 1{,}5 = -0{,}5$. Vì $-0{,}5 \\ngtr 3$ nên $P$ không thuộc miền nghiệm.<br>  Xét điểm $Q(-1; -3)$, ta có $2\\cdot (-1) + (-3) = -5$. Vì $-5 \\ngtr 3$ nên $Q$ không thuộc miền nghiệm.<br>  Vậy điểm $M$ thuộc miền nghiệm của bất phương trình đã cho.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN21",
  "question": "Phần không bị gạch chéo trong hình vẽ bên dưới là miền nghiệm của bất phương trình nào? <br><img src=\"data/10/0D2/im0D21/loc2_0_TL_TN_DS_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$3x-2y &gt;-6$",
   "$3x-2y &gt; 0$",
   "$3x-2y &lt;-6$",
   "$3x-2y &lt; 0$"
  ],
  "answer": 0,
  "explain": "Phần miền nghiệm chứa điểm $(0;0)$ và $3 \\cdot 0 -2 \\cdot 0 =0&gt;-6$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN4",
  "question": "Trong các cặp số sau đây, cặp số nào là nghiệm của bất phương trình $2x+y &gt; 1$?",
  "options": [
   "$(1;-5)$",
   "$(2;-1)$",
   "$(0;1)$",
   "$(-2;0)$"
  ],
  "answer": 1,
  "explain": "Ta có $2 \\cdot 2 +(-1)=3&gt;1$ nên $(-2;1)$ là nghiệm của bất phương trình đã cho.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN22",
  "question": "Phần mặt phẳng không bị gạch ở hình vẽ bên (kể cả biên) biểu diễn miền nghiệm của bất phương trình nào sau đây?<br><img src=\"data/10/0D2/im0D21/loc2_0_TN_DS_TL_SGD_B_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$3x+2y-6\\leq 0$",
   "$3x+2y-6\\geq 0$",
   "$2x+3y-6\\leq 0$",
   "$2x+3y-6\\geq 0$"
  ],
  "answer": 1,
  "explain": "Dựa vào hình vẽ, ta thấy miền nghiệm của bất phương trình  <br>- không chứa điểm $O$.<br>- biên của miền nghiệm là đường thẳng đi qua điểm $(0;3)$ và $(2;0)$.  Do đó, Phần mặt phẳng không bị gạch ở hình vẽ bên (kể cả biên) biểu diễn miền nghiệm của bất phương trình $3x+2y-6\\leq 0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN8",
  "question": "Bất phương trình nào dưới đây là bất phương trình bậc nhất hai ẩn?",
  "options": [
   "$2x^{2}-x-3\\le0$",
   "$2xy-x-3\\le0$",
   "$2y-x-3&gt;0$",
   "$2xy-x-3\\ge0$"
  ],
  "answer": 2,
  "explain": "Bất phương trình $2y-x-3&gt;0$ là bất phương trình bậc nhất hai ẩn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN9",
  "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn $x$, $y$?",
  "options": [
   "$ 2x-y&gt;0$",
   "$x^2+5y^2&gt;3$",
   "$ 2x+3y^2+1&gt;0$",
   "$ x+4y-3xy&gt;0$"
  ],
  "answer": 0,
  "explain": "$ 2x-y&gt;0$ là bất phương trình bậc nhất hai ẩn $x$, $y$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN23",
  "question": "Miền nghiệm của bất phương trình $ 2x-y&gt;1$ chứa điểm nào sau đây?",
  "options": [
   "$\\left(3;1\\right)$",
   "$\\left(1;2\\right)$",
   "$\\left(-3;-1\\right)$",
   "$\\left(1;1\\right)$"
  ],
  "answer": 0,
  "explain": "Thế tọa độ $\\left(3;1\\right)$ vào ta bất phương trình ta thấy thỏa mãn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN24",
  "question": "Miền nghiệm của bất phương trình $x+3+2(2y+5)&lt;2(1-x)$ <strong>không chứa</strong> điểm nào sau đây?",
  "options": [
   "$D(-4;0)$",
   "$C(0;-3)$",
   "$B(1;-7)$",
   "$A(-1;-2)$"
  ],
  "answer": 3,
  "explain": "Rút gọn bất phương trình $x+3+2(2y+5)&lt;2(1-x)$ ta được bất phương trình $3x+4y&lt;-11$.<br>  Thế lần lượt tọa độ các điểm đã cho vào biểu thức $3x+4y$, ta được  <br>- $D(-4; 0)$: $3x+4y=3\\cdot(-4)+4\\cdot 0=-12&lt;-11$ nên $D$ thuộc miền nghiệm.<br>- $C(0; -3)$: $3x+4y=3\\cdot 0+4\\cdot(-3)=-12&lt;-11$ nên $C$ thuộc miền nghiệm.<br>- $B(1; -7)$: $3x+4y=3\\cdot 1+4\\cdot(-7)=-25&lt;-11$ nên $B$ thuộc miền nghiệm.<br>- $A)(-1; -2)$: $3x+4y=3\\cdot(-1)+4\\cdot(-2)=-11$ nên $A$ không thuộc miền nghiệm.   Vậy miền nghiệm của bất phương trình đã cho <strong>không chứa</strong> điểm $A(-1; -2)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN10",
  "question": "Bất phương trình nào dưới đây <strong>không phải</strong> là bất phương trình bậc nhất hai ẩn?",
  "options": [
   "$3x-y\\le 1$",
   "$2x+xy\\le 4$",
   "$x+3y\\ge 1$",
   "$x-y\\le 0$"
  ],
  "answer": 1,
  "explain": "$2x+xy\\le 4$ không là bất phương trình bậc nhất hai ẩn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN5",
  "question": "Một cửa hàng dự định nhập hai loại sản phẩm. Mỗi sản phẩm loại A có giá $200$ nghìn đồng, mỗi sản phẩm loại B có giá $300$ nghìn đồng. Cửa hàng chỉ có số tiền tối đa là $12$ triệu đồng để nhập hàng. Gọi $x$ và $y$ lần lượt là số sản phẩm loại A và loại B được nhập. Hãy lập bất phương trình theo $x$ và $y$ để biểu diễn điều kiện về chi phí mà cửa hàng phải thỏa mãn.",
  "options": [
   "$200x+300y\\ge 12\\,000$",
   "$x+y\\le 12$",
   "$200x+300y=12\\,000$",
   "$200x+300y\\le 12\\,000$"
  ],
  "answer": 3,
  "explain": "Gọi $x$, $y$ lần lượt là số sản phẩm loại A và loại B được nhập ($x\\ge 0$, $y\\ge 0$). <br>  Mỗi sản phẩm loại A giá $200$ nghìn đồng, mỗi sản phẩm loại B giá $300$ nghìn đồng nên tổng chi phí (nghìn đồng) là $200x+300y$. <br>  Do cửa hàng có số tiền tối đa $12\\,000$ nghìn đồng để nhập hàng, ta có điều kiện  $  200x+300y\\le 12\\,000.  $",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TN6",
  "question": "Bất phương trình nào sau đây <strong>không</strong> phải là bất phương trình bậc nhất hai ẩn?",
  "options": [
   "$x-5y-1\\ge0$",
   "$2x-3y+5&lt;0$",
   "$\\dfrac{x}{2}-\\dfrac{y}{3}+10&lt;0$",
   "$x+3y^{2}-2x+1\\le0$"
  ],
  "answer": 3,
  "explain": "Bất phương trình $x+3y^{2}-2x+1\\le0$ có chứa $y^2$ (bậc 2) nên không phải là bất phương trình bậc nhất hai ẩn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212TN25",
  "question": "Điểm $A(2;1)$ thuộc miền nghiệm của bất phương trình nào sau đây?",
  "options": [
   "$x-y+1&lt;0$",
   "$-2x+y-2&gt;0$",
   "$2x-y+1&gt;0$",
   "$x-2y&gt;0$"
  ],
  "answer": 2,
  "explain": "Thay toạ độ $A(2;1)$ vào các phương án, ta thấy  <br>- Phương án $x-y+1&lt;0$: $2-1+1 = 2 &lt; 0$ (Sai).<br>- Phương án $-2x+y-2&gt;0$: $-2(2)+1-2 = -5 &gt; 0$ (Sai).<br>- Phương án $2x-y+1&gt;0$: $2(2)-1+1 = 4 &gt; 0$ (Đúng).<br>- Phương án $x-2y&gt;0$: $2-2(1) = 0 &gt; 0$ (Sai).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN1",
  "question": "Hệ nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
  "options": [
   "$2x - y &lt; 1 \\text{ và } x + y &lt; 2$",
   "$x + y \\le 2 \\text{ và } y^2 \\ge 4$",
   "$2x - y + z &lt; 1 \\text{ và } y \\ge -2$",
   "$2x - y &gt; 1 \\text{ và } 3y - x - x^2 &gt; 0$"
  ],
  "answer": 0,
  "explain": "Hệ bất phương trình bậc nhất hai ẩn là $2x - y &lt; 1 \\text{ và } x + y &lt; 2.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN2",
  "question": "Điểm nào sau đây thuộc miền nghiệm của hệ $x+y&gt;-3 \\text{ và } x-y\\leq 7$?",
  "options": [
   "$N(-7;0)$",
   "$Q(7;-10)$",
   "$P(0;-4)$",
   "$M(2;1)$"
  ],
  "answer": 3,
  "explain": "Thay $x=2$, $y=1$ vào hai bất phương trình của hệ được $2+1=3&gt;-3$ (đúng) và $2-1=1\\leq 7$ (đúng) nên điểm $M(2;1)$ thuộc miền nghiệm của hệ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN1",
  "question": "Bất phương trình bậc nhất hai ẩn nào có miền nghiệm như hình vẽ dưới đây (phần không tô đậm, kể cả đường thẳng)?  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$3 x+2 y&gt;300$",
   "$3 x+2 y \\leq 300$",
   "$3 x+2 y&lt;300$",
   "$3 x+2 y \\geq 300$"
  ],
  "answer": 1,
  "explain": "Vì miền nghiệm có kể cả đường thẳng nên phương án cần chọn là $3 x+2 y \\leq 300$ hoặc $3 x+2 y \\geq 300$.<br>  Điểm $O(0;0)$ nằm trong miền nghiệm nên thay tọa độ $O$ vào bất phương trình ta được bất đẳng thức đúng. Vậy phương án cần tìm là $3 x+2 y \\leq 300$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN3",
  "question": "Cho hệ bất phương trình $\\left\\{\\begin{array}{l}x+y>0 \\\\ 2 x+5 y<0\\end{array}\\right.$ có tập nghiệm là $S$. Khẳng định nào sau đây là khẳng định đúng?",
  "options": [
   "$(1 ; 1) \\in S$",
   "$(-1 ;-1) \\in S$",
   "$\\left(1 ;-\\dfrac{1}{2}\\right) \\in S$",
   "$\\left(-\\dfrac{1}{2} ; \\dfrac{2}{5}\\right) \\in S$"
  ],
  "answer": 2,
  "explain": "Ta thấy $\\left(1 ;-\\dfrac{1}{2}\\right) \\in S$ vì $\\left\\{\\begin{array}{l}1-\\dfrac{1}{2}>0 \\\\ 2 \\cdot 1+5 \\cdot\\left(-\\dfrac{1}{2}\\right)<0\\end{array}\\right.$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN4",
  "question": "Cho hệ bất phương trình $\\left\\{\\begin{array}{l}2 x-\\dfrac{3}{2} y \\geq 1 \\\\ 4 x-3 y \\leq 2\\end{array}\\right.$ có tập nghiệm $S$. Khẳng định nào sau đây là khẳng định đúng?",
  "options": [
   "$\\left(-\\dfrac{1}{4} ;-1\\right) \\notin S$",
   "$S=\\{(x ; y) \\mid 4 x-3=2\\}$",
   "Biểu diễn hình học của $S$ là nửa mặt phẳng chứa gốc tọa độ và kể cả bờ $d$, với $d$ là là đường thẳng $4 x-3 y=2$",
   "Biểu diễn hình học của $S$ là nưa mặt phẳng không chứa gốc tọa độ và kể cả bờ $d$, với $d$ là là đường thẳng $4 x-3 y=2$"
  ],
  "answer": 1,
  "explain": "Trước hết, ta vẽ hai đường thẳng:  $  \\begin{aligned}  &\\left(d_{1}\\right): 2 x-\\dfrac{3}{2} y=1 \\\\  &\\left(d_{2}\\right): 4 x-3 y=2  \\end{aligned}  $<br>  Thử trực tiếp ta thấy $(0 ; 0)$ là nghiệm của phương trình (2) nhưng không phải là nghiệm của phương trình (1). Sau khi gạch bỏ các miền không thích hợp, tập hợp nghiệm của bất phương trình chính là các điểm thuộc đường thẳng  $(d): 4 x-3 y=2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN2",
  "question": "Cho hệ $\\left\\{\\begin{array}{l}2 x+3 y<5(1) \\\\ x+\\dfrac{3}{2} y<5 \\text { (2) } \\end{array}\\right.$ Gọi $S_{1}$ là tập nghiệm của bất phương trình (1), $S_{2}$ là tập nghiệm của bất phương trình (2) và $S$ là tập nghiệm của hệ thì",
  "options": [
   "$S_{1} \\subset S_{2}$",
   "$S_{2} \\subset S_{1}$",
   "$S_{2}=S$",
   "$S_{1} \\neq S$"
  ],
  "answer": 1,
  "explain": "Trước hết, ta vẽ hai đường thẳng:  $\\left(d_{1}\\right): 2 x+3 y=5$  $\\left(d_{2}\\right): x+\\dfrac{3}{2} y=5$  Ta thấy $(0 ; 0)$ là nghiệm của cà hai bất phương trình. Điều đó có nghĩa gốc tọa độ thuộc cả hai miền nghiệm của hai bất phương trình. Say khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN3",
  "question": "Phần không gạch chéo ở hình sau đây là biểu diễn miền nghiệm của hệ bất phương trình nào trong bốn hệ $\\mathrm{A}, \\mathrm{B}, \\mathrm{C}, \\mathrm{D}$?<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$\\left\\{\\begin{array}{l}y>0 \\\\ 3 x+2 y<6\\end{array}\\right.$",
   "$\\left\\{\\begin{array}{l}y>0 \\\\ 3 x+2 y<-6\\end{array}\\right.$",
   "$\\left\\{\\begin{array}{l}x>0 \\\\ 3 x+2 y<6\\end{array}\\right.$",
   "$\\left\\{\\begin{array}{l}x>0 \\\\ 3 x+2 y>-6\\end{array}\\right.$"
  ],
  "answer": 0,
  "explain": "Dựa vào hình vẽ ta thấy đồ thị gồm hai đường thẳng $\\left(d_{1}\\right): y=0$ và đường thẳng $\\left(d_{2}\\right): 3 x+2 y=6$  Miền nghiệm gồm phần $y$ nhận giá trị dương.  Lại có $(0 ; 0)$ thỏa mãn bất phương trình $3 x+2 y&lt;6$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN4",
  "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x-2 y<0 \\\\ x+3 y>-2 \\text { chứa điểm nào sau đây? } \\\\ y-x<3\\end{array}\\right.$",
  "options": [
   "$A(1 ; 0)$",
   "$B(-2 ; 3)$",
   "$C(0 ;-1)$",
   "$D(-1 ; 0)$"
  ],
  "answer": 3,
  "explain": "Trước hết, ta vẽ ba đường thẳng:  $  \\begin{aligned}  &\\left(d_{1}\\right): x-2 y=0 \\\\  &\\left(d_{2}\\right): x+3 y=-2 \\\\  &\\left(d_{3}\\right): y-x=3  \\end{aligned}  $   Ta thấy $(0 ; 1)$ là nghiệm của cả ba bất phương trình. Điều đó có nghĩa điểm $(0 ; 1)$ thuộc cả ba miền nghiệm của ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN5",
  "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}2 x+3 y-6<0 \\\\ x \\geq 0 \\\\ 2 x-3 y-1 \\leq 0\\end{array}\\right.$ chứa điểm nào sau đây?",
  "options": [
   "$A(1 ; 2)$",
   "$B(0 ; 2)$",
   "$C(-1 ; 3)$",
   "$D\\left(0 ;-\\dfrac{1}{3}\\right)$"
  ],
  "answer": 3,
  "explain": "Chọn D.  Trước hết, ta vẽ ba đường thẳng:  $\\left(d_{1}\\right): 2 x+3 y-6=0$  $\\left(d_{2}\\right): x=0$  $\\left(d_{3}\\right): 2 x-3 y-1=0$  Ta thấy $(1 ; 1)$ là nghiệm của các ba bất phương trình. Điều này có nghĩa là điểm $(1 ; 1)$ thuộc cả ba miền nghiệm của ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN6",
  "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}2 x-1 \\leq 0 \\\\ -3 x+5 \\leq 0\\end{array}\\right.$ chứa điểm nào sau đây?",
  "options": [
   "Không có",
   "$B\\left(\\dfrac{5}{3} ; 2\\right)$",
   "$C(-3 ; 1)$",
   "$D\\left(\\dfrac{1}{2} ; 10\\right)$"
  ],
  "answer": 0,
  "explain": "Trước hết, ta vẽ hai đường thẳng:  $\\left(d_{1}\\right): 2 x-1=0$  $\\left(d_{2}\\right):-3 x+5=0$  Ta thấy $(1 ; 0)$ là không nghiệm của cả hai bất phương trình. Điều đó có nghĩa điểm $(1 ; 0)$  không thuộc cả hai miền nghiệm của hai bất phương trình. Vậy không có điểm nằm trên mặt phẳng tọa độ thỏa mãn hệ bất phương trình.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN7",
  "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}3-y<0 \\\\ 2 x-3 y+1>0\\end{array}\\right.$ chứa điểm nào sau đây?",
  "options": [
   "$A(3 ; 4)$",
   "$B(4 ; 3)$",
   "$C(7 ; 4)$",
   "$D(4 ; 4)$"
  ],
  "answer": 2,
  "explain": "Trước hết, ta vẽ hai đường thẳng:  $\\left(d_{1}\\right): 3-y=0$  $\\left(d_{2}\\right): 2 x-3 y+1=0$  Ta thấy $(6 ; 4)$ là nghiệm của hai bất phương trình. Điều đó có nghĩa điểm $(6 ; 4)$ thuộc cả hai miền nghiệm clia hai bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN8",
  "question": "Miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}3 x-2 y-6 \\geq 0 \\\\ 2(x-1)+\\dfrac{3 y}{2} \\leq 4 \\text { không chứa điểm nào sau đây? } \\\\ x \\geq 0\\end{array}\\right.$",
  "options": [
   "$A(2 ;-2)$",
   "$B(3 ; 0)$",
   "$C(1 ;-1)$",
   "$D(2 ;-3)$"
  ],
  "answer": 2,
  "explain": "Trước hết, ta vẽ ba đường thẳng:  $\\left(d_{1}\\right): 3 x-2 y-6=0$  $\\left(d_{2}\\right): 4 x+3 y-12=0$  $\\left(d_{3}\\right): x=0$  Ta thấy $(2 ;-1)$ là nghiệm của cả ba bất phương trình. Điều đó có nghĩa điềm $(2 ;-1)$ thuộc cả ba miền nghiệm của ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN9",
  "question": "Tìm số thực $a$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\leq 0 \\\\ y \\geq 0 \\\\ a x-3 y \\geq-12\\end{array}\\right.$ là một tam giác có diện tích bằng 6.",
  "options": [
   "$a=-4$",
   "$a=4$",
   "$a=6$",
   "$a=12$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN10",
  "question": "Tính diện tích $S$ của miền nghiệm hệ bất phương trình $\\left\\{\\begin{array}{l}y+x \\leq 3 \\\\ y-x \\leq 3 \\\\ y \\geq-1\\end{array}\\right.$",
  "options": [
   "$S=8$",
   "$S=25$",
   "$S=16$",
   "$S=12$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN11",
  "question": "Tính diện tích $S$ của miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq-3 \\\\ y+x \\leq 8 \\\\ y-x \\geq-2 .\\end{array}\\right.$",
  "options": [
   "$S=48$",
   "$S=64$",
   "$S=81$",
   "$S=49$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN12",
  "question": "Tính chu vi $P$ của miền nghiệm hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq-3 \\\\ x \\leq 6 \\\\ y \\leq 5 \\\\ y \\geq-6 .\\end{array}\\right.$",
  "options": [
   "$P=38$",
   "$P=36$",
   "$P=42$",
   "$P=40$"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN13",
  "question": "Tìm giá trị của số thực $a$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\leq a \\\\ x \\geq 0 \\\\ y \\geq 0 \\\\ y \\leq 2\\end{array}\\right.$ có  diện tích bằng $6 .$",
  "options": [
   "$a=-3$",
   "$a=8$",
   "$a=3$",
   "$a=-8$"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN14",
  "question": "Phần <strong>không bị gạch</strong> trong hình vẽ dưới đây (không kể đường thẳng), biểu diễn tập nghiệm của hệ bất phương trình nào trong các hệ bất phương trình sau?<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$-2x+3y \\leq 12 \\text{ và } 2x+y \\geq -4.$",
   "$2x-3y &gt; -12 \\text{ và } 2x+y &gt; -4.$",
   "$-2x+3y &gt; -12 \\text{ và } 2x+y &gt; -4.$",
   "$2x-3y &lt; -12 \\text{ và } 2x+y &gt; -4.$"
  ],
  "answer": 1,
  "explain": "Ta nhận thấy miền nghiệm của hệ là miền chứa điểm $O(0;0)$, thay tọa độ điểm $O$ vào các hệ bất phương trình ta nhận thấy chỉ có hệ $2x-3y &gt; -12 \\text{ và } 2x+y &gt; -4$ thỏa mãn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN15",
  "question": "Phần không gạch chéo ở hình sau đây là biểu diễn miền nghiệm của hệ bất phương trình nào trong bốn đáp án dưới đây?<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$x&gt;0 \\text{ và } 3x+2y&lt;6$",
   "$y&gt;0 \\text{ và } 3x+2y&lt;-6$",
   "$x&gt;0 \\text{ và } 3x+2y&gt;-6$",
   "$y&gt;0 \\text{ và } 3x+2y&lt;6$"
  ],
  "answer": 3,
  "explain": "Dựa vào hình vẽ, ta thấy điểm $(0;1)$ thuộc miền nghiệm.<br>  Mặt khác  <br>- $(0;1)$ không thỏa mãn hệ bất phương trình $x&gt;0 \\text{ và } 3x+2y&lt;6.$<br>- $(0;1)$ không thỏa mãn hệ bất phương trình $y&gt;0 \\text{ và } 3x+2y&lt;-6$<br>- $(0;1)$ không thỏa mãn hệ bất phương trình $x&gt;0 \\text{ và } 3x+2y&gt;-6$<br>- $(0;1)$ thỏa mãn hệ bất phương trình $y&gt;0 \\text{ và } 3x+2y&lt;6$  Do đó, phần không gạch chéo ở hình vẽ là biểu diễn miền nghiệm của hệ bất phương trình $y&gt;0 \\text{ và } 3x+2y&lt;6.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN16",
  "question": "Phần không tô đậm trong hình vẽ bên (không kể bờ) là hình biểu diễn miền nghiệm của hệ bất phương trình nào dưới đây?<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_023.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$x-2y &lt;-2 \\text{ và } x-2y &gt; 3$",
   "$x-2y &gt;-2 \\text{ và } x-2y &gt; 3$",
   "$x-2y &gt;-2 \\text{ và } x-2y &lt; 3$",
   "$x-2y &lt;-2 \\text{ và } x-2y &lt; 3$"
  ],
  "answer": 2,
  "explain": "Từ hình vẽ ta thấy $O(0;0)$ thuộc miền nghiệm của bất phương trình, dựa vào đáp án ta thấy $O(0;0)$ thỏa mãn $x-2y &gt;-2 \\text{ và } x-2y &lt; 3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN17",
  "question": "Tìm giá trị của số thực $a$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x-y \\geq a \\\\ x \\leq 0 \\\\ y \\geq 0\\end{array}\\right.$ là một tam giác có diện tích bằng $2$.",
  "options": [
   "$a=2$",
   "$a=-2$",
   "$a=\\sqrt{2}$",
   "$a=-\\sqrt{2}$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN18",
  "question": "Tìm giá trị của số thực $m$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x+m y \\leq 2 \\\\ x \\geq 0 \\\\ y \\geq 0\\end{array}\\right.$  là một tam giác có diện tích bằng $4$.",
  "options": [
   "$m=2$",
   "$m=4$",
   "$m=\\dfrac{1}{4}$",
   "$m=\\dfrac{1}{2}$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN19",
  "question": "Tìm giá trị của số thực $m$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq 0 \\\\ x \\leq 2 \\\\ y \\leq-1 \\\\ y \\geq m\\end{array}\\right.$ có chu vi bằng $8$.",
  "options": [
   "$m=-3$",
   "$m=2$",
   "$m=3$",
   "$m=-2$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN20",
  "question": "Tìm giá trị của số thực dương $m$ sao cho miền nghiệm của hệ bất phương trình $\\left\\{\\begin{array}{l}x \\geq 0 \\\\ y \\geq 0 \\\\ 2 x+3 y \\leq 12 \\\\ m x+y \\geq 2\\end{array}\\right.$ có diện tích bằng $6 .$",
  "options": [
   "$m=2$",
   "$m=3$",
   "$m=\\dfrac{1}{3}$",
   "$m=\\dfrac{1}{2}$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN5",
  "question": "Một cửa hàng dự định kinh doanh hai loại máy điều hòa: điều hòa một chiều và điều hòa hai chiều. Khảo sát thị trường cửa hàng thấy nhu cầu của thị trường sẽ không vượt quá $100$ máy cả hai loại. Gọi $x$, $y$ lần lượt là số máy điều hòa một chiều và điều hòa hai chiều mà cửa hàng nhập vào. Khi đó, $(x; y)$ là nghiệm của hệ bất phương trình nào dưới đây?",
  "options": [
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y \\leq 100$",
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y &lt; 100$",
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y \\geq 100$",
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y &gt; 100$"
  ],
  "answer": 0,
  "explain": "Gọi $x$, $y$ lần lượt là số máy điều hòa một chiều và điều hòa hai chiều mà cửa hàng nhập vào.<br>  Điều kiện $x\\geq 0$ và $y \\geq 0$.<br>  Khảo sát thị trường cửa hàng thấy nhu cầu của thị trường sẽ không vượt quá $100$ máy cả hai loại nên ta có $x + y \\leq 100$.<br>  Vậy hệ bất phương trình đúng là $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x + y \\leq 100.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN6",
  "question": "Giá trị nhỏ nhất của biết thức $F(x ; y)=x-2 y$ với điều kiện $\\left\\{\\begin{array}{c}0 \\leq y \\leq 5 \\\\ x \\geq 0 \\\\ x+y-2 \\geq 0 \\\\ x-y-2 \\leq 0\\end{array}\\right.$ là",
  "options": [
   "$-10$",
   "$12$",
   "$-8$",
   "$-6$"
  ],
  "answer": 0,
  "explain": "Nhận thấy biết thức $F=y-x$ chỉ đạt giá trị nhỏ nhất tại các điểm $A, B, C$ hoặc $D$.  Ta có: $F(A)=7-2 \\times 5=-3 ; F(B)=-2 \\times 5=-10$.  $  F(C)=-2 \\times 2=-4, F(D)=2-2 \\times 0=2 \\text {. }  $  Vậy $\\min F=-10$ khi $x=0, y=5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN7",
  "question": "Ngoài giờ học, bạn Nam làm thêm việc phụ bán cơm được 15 nghìn đồng/một giờ và phụ bán tạp hóa được 10 nghìn đồng/một giờ. Nam không thề làm thêm việc nhiều hơn 15 giờ mỗi tuần. Gọi $x, y$ lần lượt là số giờ phụ bán cơm và phụ bán tạp hóa. Hệ bất phương trình nào sau đây xác định số giờ để làm mồi việc nếu Nam muốn kiếm được ít nhất 100 nghìn đồng mỗi tuần?",
  "options": [
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\geq 15 \\text{ và } 15 x+10 y \\geq 100$",
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 15 \\text{ và } 15 x+10 y&gt;100$",
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 15 \\text{ và } 15 x+10 y \\geq 100$",
   "$x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y&gt;15 \\text{ và } 15 x+10 y&lt;100$"
  ],
  "answer": 2,
  "explain": "Gọi $x, y$ lần lượt là số giờ phụ bán cơm và phụ bán tạp hóa, tổng số giờ này không được nhiều hơn 15 nên $x+y \\leq 15$.<br> Số tiền kiếm được sau $x$ giờ phục vụ cơm là $15 x$.<br> Số tiền kiếm được sau $y$ giờ bán tạp hóa là $10 y$.<br> Để Nam kiếm được ít nhất 100 nghìn đồng mỗi tuần thì $15 x+10 y \\geq 100$.<br> Vậy ta có hệ: $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 15 \\text{ và } 15 x+10 y \\geq 100$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN21",
  "question": "Cho hệ $x-\\dfrac{3}{5}y&lt;5\\quad (1) \\text{ và } 5x-3y&lt;20\\quad (2)$. Gọi $S_1$ là tập nghiệm của bất phương trình (1), $S_2$ là tập nghiệm của bất phương trình (2) và $S$ là tập nghiệm của hệ thì",
  "options": [
   "$S_1=S$",
   "$S_1\\subset S_2$",
   "$S_2\\subset S_1$",
   "$S_2\\neq S$"
  ],
  "answer": 2,
  "explain": "<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_027.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> $x-\\dfrac{3}{5}y&lt;5\\quad (1) \\text{ và } 5x-3y&lt;20\\quad (2)$ $\\Leftrightarrow5x-3y&lt;25\\quad (1) \\text{ và } 5x-3y&lt;20\\quad (2')$<br> Từ miền nghiệm trên suy ra $S_2\\subset S_1$ và $S_2=S$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TN1",
  "question": "Một phân xưởng có hai máy đặc chủng $M_{1}, M_{2}$ sản xuât hai loại sản phẩm ký hiệu là $A$ và $B$. Một tấn sản phẩm loại $A$ lãi 2 triệu đồng, một tấn sản phẩm loại $B$ lãi 1,6 triệu đồng. Muốn sản xuất một tấn sản phẩm loại $A$ phải dùng máy $M_{1}$ trong 1 giờ. Muốn sản xuất một tấn sản phẩm loại $B$ phải dưng máy $M_{1}$ trong 1 giờ và máy $M_{2}$ trong 1 giờ. Một máy không thể dùng để sản xuất đồng thời hai loại sản phẩm. Máy $M_{1}$ làm việc không quá 6 giờ một ngày, máy $M_{2}$ làm việc không quá 4 giờ một ngày. Hỏi số tiền lãi lớn nhất mà phân xưởng này có thể thu được trong một ngày là bao nhiêu?",
  "options": [
   "6,8 triệu đồng",
   "4 triệu đồng",
   "6,4 triệu đồng",
   "8 triệu đồng"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TN2",
  "question": "Người ta dự định dùng hai loại nguyên liệu để chiết xuất ít nhất $140 \\mathrm{~kg}$ chất $A$ và 9 kg chất $B$. Từ mỗi tấn nguyên liệu loại I giá 4 triệu đồng, có thể chiết xuất được 20 kg chất $A$ và $0,6 \\mathrm{~kg}$ chất $B$. Từ mỗi tấn nguyên liệu loại II giá 3 triệu đồng có thể chiết xuất được $10 \\mathrm{~kg}$ chất $A$ và $1,5 \\mathrm{~kg}$ chất $B$. Hỏi phải dùng bao nhiêu tấn nguyên liệu mỗi loại để chi phí mua nguyên liệu là ít nhất, biết rằng cơ sở cung cấp nguyên liệu chỉ có thể cung cấp không quá 10 tấn nguyên liệu loại $I$ và không quá 9 tấn nguyên liệu loại $I I$.",
  "options": [
   "5 tấn nguyên liệu loại $I$ và 4 tấn nguyên liệu loại $I I$",
   "10 tấn nguyên liệu loại $I$ và 2 tấn nguyên liệu loại $I I$",
   "10 tấn nguyên liệu loại $I$ và 9 tấn nguyên liệu loại $I I$",
   "Cả ba đáp án đều sai"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TN3",
  "question": "Trong một cuộc thi về \"bữa ăn dinh dưỡng\", ban tổ chức yêu cầu để đảm bảo lượng dinh dưỡng hằng ngày thì mỗi gia đình có 4 thành viên cần ít nhất 900 đơn vị prôtêin và 400 đơn vị Lipít trong thức ăn hằng ngày. Mỗi kg thịt bò chứa 800 đơn vị prôtêin và 200 đơn vị Lipít, $1 \\mathrm{~kg}$ thịt heo chứa 600 đơn vị prôtêin và 400 đơn vị Lipit. Biết rằng người nội trợ chỉ được mua tối đa $1,6 \\mathrm{~kg}$ thịt bò và $1,1 \\mathrm{~kg}$ thịt heo. Biết rằng $1 \\mathrm{~kg}$ thịt bò giá $100.000 \\mathrm{~d}, 1$ $\\mathrm{kg}$ thịt heo giá $70.000$ đ. Tìm chi phí thấp nhất cho khẩu phần thức ăn đảm bảo chất dinh dưỡng?",
  "options": [
   "$100.000$ đ",
   "$107.000$ đ",
   "$109.000$ đ",
   "$150.000 \\mathrm{~d}$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN8",
  "question": "Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa 24 g hương liệu, 9 lít nước và $210 \\mathrm{~g}$ đường để pha chế nước đường và nước táo. Để pha chế 1 lít nước đường cần $30 \\mathrm{~g}$ đường và 1 lít nước; pha chế 1 lít nước táo cần $10 \\mathrm{~g}$ đường, 1 lít nước và $4 \\mathrm{~g}$ hương liệu. Mỗi lít nước đường nhận được 20 điểm thưởng, mỗi lít nước táo nhận được 80 điểm thưởng. Hỏi cần pha chế bao nhiêu lít nước mỗi loại để được số điểm thưởng là lớn nhất?",
  "options": [
   "7 lít nước đường",
   "6 lít nước táo",
   "3 lít nước đường, 6 lít nước táo",
   "6 lít nước đường, 3 lít nước táo"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TN4",
  "question": "Một máy cán thép có thể sản xuất hai sản phẩm thép tấm và thép cuộn (máy không thể sản xuất hai loại thép cùng lúc và có thể làm việc 40 giờ một tuần). Công suất sản xuất thép tấm là 250 tấn/giờ, công suất sản xuất thép cuộn là 150 tấn/giờ. Mỗi tấn thép tấm có giá 25 USD, mỗi tấn thép cuộn có giá 30 USD. Biết rằng mỗi tuần thị trường chỉ tiêu thụ tối đa 5000 tấn thép tấm và 3500 tấn thép cuộn. Hỏi cần sản xuất bao nhiêu tấn thép mỗi loại trong một tuần để lợi nhuận thu được là cao nhất?",
  "options": [
   "5000 tấn thép tấm và 3000 tấn thép cuộn",
   "4500 tấn thép tấm và 3500 tấn thép cuộn",
   "3500 tấn thép tấm và 2000 tấn thép cuộn",
   "5000 tấn thép tấm và 3500 tấn thép cuộn"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN22",
  "question": "Cho hệ bất phương trình $\\left\\{\\begin{array}{l}x-y \\leq 2 \\\\ 3 x+5 y \\leq 15 \\\\ x \\geq 0 \\\\ y \\geq 0\\end{array}\\right.$. Khẳng định nào sau đây là khẳng định sai ?",
  "options": [
   "Trên mặt phẳng tọa độ $O x y$, biểu diễn miền nghiệm của hệbất phương trình đã cho là miền tứ giác $A B C O$ kể cả các cạnh với $A(0 ; 3), B\\left(\\dfrac{25}{8} ; \\dfrac{9}{8}\\right), C(2 ; 0)$ và $O(0 ; 0)$",
   "Đường thẳng $\\Delta: x+y=m$ có giao điểm với tứ giác $A B C O$ kể cả khi $-1 \\leq m \\leq \\dfrac{17}{4}$",
   "Giá trị lớn nhất của biểu thức $x+y$, với $x$ và $y$ thỏa mãn hệ bất phương trình đã cho là $\\dfrac{17}{4}$",
   "Giá trị nhỏ nhất của biểu thức $x+y$, với $x$ và $y$ thõa mãn hệ bất phương trình đã cho là 0"
  ],
  "answer": 1,
  "explain": "Trước hết, ta vẽ bốn đường thẳng:  $\\left(d_{1}\\right): x-y=2$  $\\left(d_{2}\\right): 3 x+5 y=15$  $\\left(d_{3}\\right): x=0$  $\\left(d_{4}\\right): y=0$  Miền nghiệm là phần không bị gạch, kể cả biên.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN23",
  "question": "Giá trị lớn nhất của biết thức $F(x ; y)=x+2 y$ với điều kiện $\\left\\{\\begin{array}{c}0 \\leq y \\leq 4 \\\\ x \\geq 0 \\\\ x-y-1 \\leq 0 \\\\ x+2 y-10 \\leq 0\\end{array}\\right.$ là",
  "options": [
   "$6$",
   "$8$",
   "$10$",
   "$12$"
  ],
  "answer": 2,
  "explain": "Vẽ đường thẳng $d_{1}: x-y-1=0$, đường thẳng $d_{1}$ qua hai điểm $(0 ;-1)$ và $(1 ; 0)$.  Vẽ đường thẳng $d_{2}: x+2 y-10=0$, đường thẳng $d_{2}$ qua hai điểm $(0 ; 5)$ và $(2 ; 4)$. Vẽ đường thẳng $d_{3}: y=4$.  Miền nghiệm là ngũ giác $A B C O E$ với $A(4 ; 3), B(2 ; 4), C(0 ; 4), E(1 ; 0)$.  Ta có: $F(4 ; 3)=10, F(2 ; 4)=10, F(0 ; 4)=8, F(1 ; 0)=1, F(0 ; 0)=0$.  Vậy giá trị lớn nhất của biết thức $F(x ; y)=x+2 y$ bằng 10 .",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN24",
  "question": "Biểu thức $L=y-x$, với $x$ và $y$ thõa mãn hệ bất phương trình $\\left\\{\\begin{array}{l}2 x+3 y-6 \\leq 0 \\\\ x \\geq 0 \\\\ 2 x-3 y-1 \\leq 0\\end{array}\\right.$, đạt giá trị lớn nhất là $a$ và đạt giá trị nhỏ nhất là $b$. Hãy chọn kết quả đúng trong các kết quả sau:",
  "options": [
   "$a=\\dfrac{25}{8}$ và $b=-2$",
   "$a=2$ và $b=-\\dfrac{11}{12}$",
   "$a=3$ và $b=0$",
   "$a=3$ và $b=\\dfrac{-9}{8}$"
  ],
  "answer": 1,
  "explain": "Chọn B.  Trước hết, ta vẽ ba đường thẳng:  $\\left(d_{1}\\right): 2 x+3 y-6=0$  $\\left(d_{2}\\right): x=0$  $\\left(d_{3}\\right): 2 x-3 y-1=0$  Ta thấy $(0 ; 0)$ là nghiệm của cả ba bất phương trình. Điều đó có nghĩa gốc tọa độ thuộc cả ba miền nghiệm của cả ba bất phương trình. Sau khi gạch bỏ các miền không thích hợp, miền không bị gạch là miền nghiệm của hệ (kề cả biên).  Miền nghiệm là hình tam giác $A B C$ (kề cả biên), với $A(0 ; 2), B\\left(\\dfrac{7}{4} ; \\dfrac{5}{6}\\right), C\\left(0 ;-\\dfrac{1}{3}\\right)$.  Vậy ta có $a=2-0=2, b=\\dfrac{5}{6}-\\dfrac{7}{4}=-\\dfrac{11}{12}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN9",
  "question": "Biểu thức $F=y-x$ đạt giá trị nhỏ nhất với điều kiện $\\left\\{\\begin{array}{c}-2 x+y \\leq-2 \\\\ x-2 y \\leq 2 \\\\ x+y \\leq 5 \\\\ x \\geq 0\\end{array}\\right.$ tại điểm $S(x ; y)$ có toạ độ là",
  "options": [
   "$(4 ; 1)$",
   "$(3 ; 1)$",
   "$(2 ; 1)$",
   "$(1 ; 1)$"
  ],
  "answer": 0,
  "explain": "Biểu diễn miền ngiệm của hệ bất phương trình $\\left\\{\\begin{array}{c}-2 x+y \\leq-2 \\\\ x-2 y \\leq 2 \\\\ x+y \\leq 5 \\\\ x \\geq 0\\end{array}\\right.$ trên hệ trục tọa độ như dưới đây:<br>  Nhận thấy biết thức $F=y-x$ chỉ đạt giá trị nhỏ nhất tại các điểm $A, B$ hoặc $C$.  Chỉ $C(4 ; 1)$ có tọa độ nguyên nên thỏa mãn.  Vậy $\\min F=-3$ khi $x=4, y=1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN10",
  "question": "Cặp số nào sau đây <strong>không</strong> là một nghiệm của hệ bất phương trình $x+y \\leq 2 \\text{ và } 2 x-3 y&gt;-2$?",
  "options": [
   "$(0 ; 0)$",
   "$(1 ; 1)$",
   "$(-1 ; 1)$",
   "$(-1 ;-1)$"
  ],
  "answer": 2,
  "explain": "Vì $2\\cdot(-1)-3\\cdot1&gt;-2$ (vô lí) nên $(-1;1)$ không là nghiệm của hệ bất phương trình.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN25",
  "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x - 3y < 3 \\\\ x + y > 5 \\end{cases}$ là phần mặt phẳng chứa điểm nào sau đây?",
  "options": [
   "$A(0;0)$",
   "$B(5;3)$",
   "$C(-2;2)$",
   "$D(1;-1)$"
  ],
  "answer": 1,
  "explain": "Để xác định điểm nào thuộc miền nghiệm của hệ bất phương trình, ta thay tọa độ của từng điểm vào hai bất phương trình của hệ bất phương trình. <br>  Ta thay điểm $B (5;3)$ vào hệ bất phương trình trên, ta được <br>  $5 - 3\\cdot 3 &lt; 3 \\text{\\,\\,\\,(Đúng)} \\text{ và } 5 + 3 &gt; 5 \\text{\\,\\,\\,(Đúng).}$<br>  Vậy điểm $B$ thuộc miền nghiệm. <br>",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN11",
  "question": "Cho hệ bất phương trình $x-3y&gt;5 \\text{ và } 2x+y&lt;3.$<br> Cặp số $(x;y)$ nào sau đây là nghiệm của hệ bất phương trình trên",
  "options": [
   "$(3;-1)$",
   "$(1;2)$",
   "$(3;1)$",
   "$(1;-2)$"
  ],
  "answer": 3,
  "explain": "Ta có $1-3\\cdot (-2)=7&gt;5 \\text{ và } 2\\cdot 1 + (-2)=0&lt;3.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN12",
  "question": "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
  "options": [
   "$3x+y \\leq 9 \\text{ và } \\frac{2}{x}-3y &gt; 1$",
   "$3x^3-5y \\geq 8 \\text{ và } |-x-4y| \\leq 20$",
   "$2x+3y^2 &gt; 5 \\text{ và } -3x-5y \\leq-6$",
   "$-3x+y \\leq-1 \\text{ và } 4x-7y &gt; 5$"
  ],
  "answer": 3,
  "explain": "Ta có $-3x+y \\leq-1 \\text{ và } 4x-7y &gt; 5$ là hệ bất phương trình bậc nhất hai ẩn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN26",
  "question": "Trên mặt phẳng tọa độ $Oxy$, điểm nào dưới đây thuộc miền nghiệm của hệ bất phương trình $2x+5y \\leq 3 \\text{ và } x-y \\geq 5$?",
  "options": [
   "$A(-1; 1)$",
   "$B(1; 1)$",
   "$C(0;-5)$",
   "$D(2; 0)$"
  ],
  "answer": 2,
  "explain": "Ta có  <br>- $2\\cdot (-1)+5\\cdot 1 \\leq 3\\text{ đúng} \\text{ và } -1-1 \\geq 5\\text{ sai}.$ <br>  $\\Rightarrow A(-1; 1)$ không thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- $2\\cdot 1+5\\cdot 1 \\leq 3\\text{ sai} \\text{ và } 1-1 \\geq 5\\text{ sai}.$<br>  $\\Rightarrow B(1; 1)$ không thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- $2\\cdot 0+5\\cdot (-5) \\leq 3\\text{ đúng} \\text{ và } 0+5 \\geq 5\\text{ đúng}.$<br>  $\\Rightarrow C(0; 5)$ thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- $2\\cdot 2+5\\cdot 0 \\leq 3\\text{ sai} \\text{ và } 2-0 \\geq 5\\text{ sai}.$<br>  $\\Rightarrow D(2;0)$ không thuộc miền nghiệm của hệ bất phương trình đã cho.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN27",
  "question": "Cặp $(x_0;y_0)$ nào dưới đây thuộc miền nghiệm của hệ $x-2y\\ge3 \\text{ và } 2x+y\\le1.$",
  "options": [
   "$(1;-1)$",
   "$(1;1)$",
   "$(0;-1)$",
   "$(3;1)$"
  ],
  "answer": 0,
  "explain": "Thay cặp số $(1;-1)$ vào hệ bất phương trình và thỏa hệ trên nên cặp số đó thuộc miền nghiệm của hệ bất phương trình.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN28",
  "question": "Có bao nhiêu giá trị nguyên dương của tham số $m$ để miền nghiệm của hệ bất phương trình $\\left\\{\\begin{aligned}  & x\\le m\\\\  & y<m\\\\  \\end{aligned}\\right.$ không chứa điểm $ M\\left(0;2\\right)$?",
  "options": [
   "$ 3$",
   "$ 2$",
   "$ 1$",
   "$ 4$"
  ],
  "answer": 1,
  "explain": "$M$ không thuộc miền nghiệm của hệ bất phương trình nên $m\\le 2 \\text{ hoặc } m&lt;0\\Rightarrow m \\le 2$.<br>  Suy ra có $2$ giá trị nguyên dương của $m$ là $1$, $2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN29",
  "question": "Đường thẳng $\\Delta $ chia mặt phẳng toạ độ $Oxy$ làm hai miền. Miền không tô đậm (không kể $\\Delta $) ở hình vẽ dưới đây là miền nghiệm của bất phương trình nào?  <br><img src=\"data/10/0D2/im0D22/loc3_0_TL_TN_DS_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$ x+y+2\\ge 0$",
   "$ x-y+2\\le 0$",
   "$ x-y+2&gt;0$",
   "$ x-2y+2&gt;0$"
  ],
  "answer": 2,
  "explain": "Vì miền không tô đậm (không kể $\\Delta $) nên loại $ x+y+2\\ge 0$ và $ x-y+2\\le 0$.<br>  Mà $\\Delta$ đi qua $\\left(-2;0\\right)$ và $\\left(0;2\\right)$ nên bất phương trình cần tìm là $ x-y+2&gt;0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TN5",
  "question": "Một cơ sở sản xuất hai loại bàn và ghế. Để làm $1$ chiếc bàn cần $3$ tấm gỗ và $2$ giờ công; để làm $1$ chiếc ghế cần $2$ tấm gỗ và $1$ giờ công. Cơ sở có tối đa $18$ tấm gỗ và $10$ giờ công trong một ngày. Lợi nhuận từ mỗi chiếc bàn và ghế lần lượt là $200$ nghìn đồng và $100$ nghìn đồng. Gọi $x$, $y$ lần lượt là số bàn và ghế được làm trong ngày. Để lợi nhuận đạt lớn nhất, trong ngày cơ sở cần sản xuất bao nhiêu chiếc mỗi loại?",
  "options": [
   "$x=5$; $y=0$",
   "$x=0$; $y=9$",
   "$x=5$; $y=2$",
   "$x=0$; $y=0$"
  ],
  "answer": 0,
  "explain": "Gọi $x$, $y$ lần lượt là số bàn và số ghế sản xuất trong một ngày. Khi đó, $x\\ge 0$ và $y\\ge 0$. <br>  Đồng thời, kết hợp với các điều kiện về nguyên liệu và giờ công, ta được  $ x\\ge 0 \\text{ và } y\\ge 0 \\text{ và } 3x+2y\\le 18 \\text{ và } 2x+y\\le 10.$  Biểu thức tính lợi nhuận (theo đơn vị nghìn đồng) là:  $ P=200x+100y. $  Xét các phương án:  <br>- $x=5$, $y=0$ thỏa $3\\cdot 5+2\\cdot 0=15\\le 18$ và $2\\cdot 5+0=10\\le 10$.   Ta có $P=200\\cdot 5+100\\cdot 0=1000$.<br>- $x=0$, $y=9$ thỏa $3\\cdot 0+2\\cdot 9=18\\le 18$ và $0+9=9\\le 10$.  Ta có $P=200\\cdot 0+100\\cdot 9=900$.<br>- $x=5$, $y=2$ có $2\\cdot 5+2=12&gt;10$, không thỏa điều kiện giờ công nên ta loại.<br>- $x=0$, $y=0$ cho $P=0$.  Vậy lợi nhuận lớn nhất trong các phương án cho bởi phương án $x=5$, $y=0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN13",
  "question": "Hệ nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
  "options": [
   "$3x-y&gt;5 \\text{ và } x&lt;6+4y.$",
   "$x-5y=1 \\text{ và } x+y=5.$",
   "$xy&lt;1 \\text{ và } x+4x&gt;5.$",
   "$x^2+y&lt;3 \\text{ và } x-y&gt;1.$"
  ],
  "answer": 0,
  "explain": "Ta có $3x-y&gt;5 \\text{ và } x&lt;6+4y \\Rightarrow 3x-y&gt;5 \\text{ và } x-4y&lt;6$ là hệ bất phương trình bậc nhất hai ẩn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN30",
  "question": "Phần <strong>không tô đậm</strong> trong hình vẽ dưới đây (không kể bờ), biểu diễn miền nghiệm của hệ bất phương trình nào trong các hệ bất phương trình sau?  <br><img src=\"data/10/0D2/im0D22/loc3_0_TN_DS_THPT_chu_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$x-y\\ge 0 \\text{ và } 2x-y\\ge 1.$",
   "$x-y&lt;0 \\text{ và } 2x-3y&gt;1.$",
   "$x-y&lt;0 \\text{ và } 2x-y&lt;1.$",
   "$x-y&gt;0 \\text{ và } 2x-y&gt;1.$"
  ],
  "answer": 3,
  "explain": "Ta tìm phương trình của hai đường thẳng. <br>  <strong>Đường thẳng thứ nhất</strong> đi qua $O(0;0)$ và $M(1;1)$ nên có hệ số góc là  $ k=\\dfrac{1-0}{1-0}=1. $  Vì đường thẳng đi qua gốc tọa độ $O(0;0)$ nên có phương trình là  $ y=x\\ \\Leftrightarrow\\ x-y=0. $   <strong>Đường thẳng thứ hai</strong> đi qua $M(1;1)$ và $N(0;-1)$ nên có hệ số góc là  $ k=\\dfrac{1-(-1)}{1-0}=2. $  Vì đường thẳng đi qua $N(0;-1)$ nên có phương trình là  $ y=2x-1\\ \\Leftrightarrow\\ 2x-y=1. $  Phần không tô đậm (không kể bờ) là miền nghiệm của hệ bất phương trình ứng với phần giao của hai nửa mặt phẳng nằm về cùng một phía xác định bởi hai đường thẳng trên. <br>   Chọn điểm $A(2;0)$ thuộc miền không tô đậm. Khi đó, $x-y=2&gt;0$ và $ 2x-y=4&gt;1$. <br>  Vậy hệ bất phương trình biểu diễn miền nghiệm là phần không tô đậm (không kể bờ) là  $ x-y&gt;0 \\text{ và } 2x-y&gt;1. $",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TN31",
  "question": "Miền nghiệm của hệ bất phương trình $x-2y&lt;0 \\text{ và } x+3y&gt;2 \\text{ và } x-y&lt;3$ chứa điểm nào sau đây?",
  "options": [
   "$(1;-1)$",
   "$(2;6)$",
   "$(0;-4)$",
   "$(-2;-10)$"
  ],
  "answer": 1,
  "explain": "Ta thử lần lượt từng phương án.  <br>- Với $(1; -1)$, ta có $x-2y=1-2(-1)=3&gt;0$ nên $(1; -1)$ không thuộc miền nghiệm.<br>- Với điểm $(2; 6)$, ta có $x-2y=2-2\\cdot 6=-10&lt;0$; $x+3y=2+3\\cdot 6=20&gt;2$ và $x-y=2-6=-4&lt;3$.<br>  Vậy $(2; 6)$ thỏa cả ba bất phương trình nên thuộc miền nghiệm.<br>- Với $(0; -4)$, ta có $x-2y=0-2(-4)=8&gt;0$ nên $(0;-4)$ không thuộc miền nghiệm.<br>- Với điểm $(-2; -10)$, ta có $x-2y=-2-2(-10)=18&gt;0$ nên điểm $(-2;-10)$ không thuộc miền nghiệm.   Vậy miền nghiệm của hệ chứa điểm $(2; 6)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TN14",
  "question": "Cặp số $(x;y)$ nào sau đây là nghiệm của hệ bất phương trình $x+3y\\le0 \\text{ và } x-2y\\ge1$?",
  "options": [
   "$(1;0)$",
   "$(3;1)$",
   "$(1;-3)$",
   "$(-2;3)$"
  ],
  "answer": 2,
  "explain": "Kiểm tra cặp số $(1;-3)$, ta thấy  $1 + 3(-3) = -8 \\le 0 \\quad (\\text{Đúng}) \\text{ và } 1 - 2(-3) = 7 \\ge 1 \\quad (\\text{Đúng}).$<br>  Vậy cặp số $(1;-3)$ là nghiệm của hệ bất phương trình $x+3y\\le0 \\text{ và } x-2y\\ge1.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D311TN1",
  "question": "Một hàm số có thể được cho bằng:",
  "options": [
   "Bảng giá trị của hàm số",
   "Đồ thị của hàm số",
   "Công thức của hàm số",
   "Tất cả đều đúng"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D313TN1",
  "question": "Cho hàm số $y=f(x)=2(x+1)(x-3)+2 x-6$. Giá trị của hàm số khi $x=3$ là:",
  "options": [
   "$8$",
   "$0$",
   "$-6$",
   "$3$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312TN1",
  "question": "Hàm số $y=f(x)=\\sqrt{x-1}+\\dfrac{1}{x^2-9}$ có tập xác định $D$ là:",
  "options": [
   "$D=[1 ;+\\infty)$",
   "$D=\\mathbb{R} \\backslash\\{-3 ; 3\\}$",
   "$D=[1 ;+\\infty) \\backslash\\{3\\}$",
   "$D=[3 ;+\\infty)$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D314TN1",
  "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình bên dưới. Khẳng định nào sao đây là đúng?  <br><img src=\"data/10/0D3/im0D31/loc2_0_TL_TN_DS_THPT__001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "Hàm số đồng biến trên khoảng $(-\\infty;1)$",
   "Hàm số đồng biến trên khoảng $(1;+\\infty)$",
   "Hàm số đồng biến trên khoảng $(-\\infty;+\\infty)$",
   "Hàm số đồng biến trên khoảng $(-\\infty;0)$"
  ],
  "answer": 3,
  "explain": "Từ bảng biến thiên ta thấy hàm số đồng biến trên khoảng $(-\\infty;0)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312TN2",
  "question": "Tập xác định của hàm số $y=|1-x|$ là",
  "options": [
   "$D=\\mathbb{R}$",
   "$D=[0;+\\infty)$",
   "$D=(0;+\\infty)$",
   "$D=\\mathbb{R}\\backslash\\{1\\}$"
  ],
  "answer": 0,
  "explain": "Tập xác định của hàm số trên là $D=\\mathbb{R}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312TN3",
  "question": "Tìm tập xác định của hàm số $y=\\sqrt{x^2+2025}$.",
  "options": [
   "$\\mathscr{D}=\\varnothing$",
   "$\\mathscr{D}=(-2025;+\\infty)$",
   "$\\mathscr{D}=\\mathbb{R}$",
   "$\\mathscr{D}=\\mathbb{R} \\setminus\\{0\\}$"
  ],
  "answer": 2,
  "explain": "Vì $x^2+2025\\geq 2025$, $\\forall x\\in\\mathbb{R}$ nên tập xác định $\\mathscr{D}=\\mathbb{R}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312TN4",
  "question": "Tập xác định của hàm số $y=\\dfrac{2x-1}{x^2-4x-5}$ là",
  "options": [
   "$\\mathscr{D} = \\mathbb{R}\\setminus\\{-1;5\\}$",
   "$\\mathscr{D} = \\mathbb{R}\\setminus\\{-1\\}$",
   "$\\mathscr{D} = \\mathbb{R}$",
   "$\\mathscr{D} = \\mathbb{R}\\setminus\\{5\\}$"
  ],
  "answer": 0,
  "explain": "Điều kiện xác định của hàm số là $\\begin{aligned}[t]  x^2-4x-5\\neq 0 \\\\\\  x \\ne 5 \\ \\text{và}\\ x \\ne -1.  \\end{aligned}$<br>  Vậy tập xác định của hàm số là $\\mathscr{D} = \\mathbb{R}\\setminus\\{-1;5\\}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D314TN3",
  "question": "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ bên dưới. Tập giá trị của hàm số đã cho là  <br><img src=\"data/10/0D3/im0D31/loc3_0_TN_DS_THPT_chu_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$[-3;+\\infty)$",
   "$[0;5]$",
   "$[-4;4]$",
   "$[-3;5]$"
  ],
  "answer": 3,
  "explain": "Dựa vào hình vẽ, ta thấy hàm số nhận các giá trị từ $-3$ đến $5$. <br>  Do đó, tập giá trị của hàm số là $[-3;5]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TN1",
  "question": "Hàm số nào trong các hàm sau đây không phải là hàm số bậc hai?",
  "options": [
   "$y=f(x)=\\sqrt{3} x^2+x-4$",
   "$y=f(x)=x^2+\\dfrac{1}{x}-5$",
   "$y=f(x)=-2 x(x-1)$",
   "$y=f(x)=2\\left(x^2+1\\right)+3 x-1$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TN2",
  "question": "Tập giá trị của hàm số $y=f(x)=-2 x^2+\\sqrt{2} x+1$ là",
  "options": [
   "$T=\\left(-\\dfrac{5}{4} ;+\\infty\\right)$",
   "$T=\\left[-\\dfrac{5}{4} ;+\\infty\\right)$",
   "$T=\\left(-\\infty ; \\dfrac{5}{4}\\right)$",
   "$T=\\left(-\\infty ; \\dfrac{5}{4}\\right]$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D322TN1",
  "question": "Hàm số $y=f(x)=-(x+2)(x-4)$ đồng biến trên khoảng:",
  "options": [
   "$(-\\infty ;-1)$",
   "$(1 ;+\\infty)$",
   "$(-\\infty ; 1)$",
   "$(-1 ;+\\infty)$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TN3",
  "question": "Hàm số $y=f(x)=(x+2)(x-2)$ có:",
  "options": [
   "Giá trị nhỏ nhất là $4$",
   "Giá trị lớn nhất là $4$",
   "Giá trị lớn nhất là $-4$",
   "Giá trị nhỏ nhất là $-4$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TN4",
  "question": "Để hàm số $y=f(x)=(m-2)(x+5)^2+\\left(m^2-4\\right)|x-7|+3$ là một hàm số bậc hai thì giá trị của $m$ là:",
  "options": [
   "$2$",
   "$2$ hay $-2$",
   "$-2$",
   "$4$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TN5",
  "question": "Đồ thị hàm số $y=f(x)=-x^2+4(5 m+1) x+(3-2 m)$ có trục đối xứng là đường thẳng $x=-2$ khi $m$ có giá trị là:",
  "options": [
   "$-3$",
   "$-\\dfrac{2}{5}$",
   "$\\dfrac{3}{2}$",
   "$-\\dfrac{1}{5}$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323TN1",
  "question": "Đồ thị trong hình vẽ là của hàm số nào?  <br><img src=\"data/10/0D3/im0D32/loc_ghk1lhp_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$y=x^2-2 x-1$",
   "$y=x^2+2 x-1$",
   "$y=x^2+2 x-2$",
   "$y=2 x^2-4 x-2$"
  ],
  "answer": 0,
  "explain": "Gọi hàm số cần tìm là $y=ax^2+bx+c\\ (a\\ne 0)$.<br>  Đồ thị cắt trục $Oy$ tại điểm có tung độ $-1$ nên $c=-1$. <br>  Tọa độ đỉnh $(1;-2)$ nên $a+b-1=-2 \\text{ và } -\\dfrac{b}{2a}=1\\Rightarrow a=1 \\text{ và } b=-2.$<br>  Vậy hàm số cần tìm là $y=x^2-2 x-1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TN6",
  "question": "Cho $(P) \\colon y=x^2+bx+1$ đi qua điểm $A(-1;3)$. Khi đó",
  "options": [
   "$b=-1$",
   "$b=3$",
   "$b=1$",
   "$b=-2$"
  ],
  "answer": 0,
  "explain": "Vì $(P)$ đi qua $A(-1;3)$ nên ta có $3=(-1)^2-b+1 \\Leftrightarrow b=-1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323TN3",
  "question": "Cho hàm bậc hai $y=ax^{2}+bx+c$ $(a\\ne0)$ có bảng biến thiên như hình vẽ bên dưới.  <br><img src=\"data/10/0D3/im0D32/loc2_0_TN_DS_TLN_Chuy_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Khi đó, dấu của các hệ số $a$, $b$, $c$ là",
  "options": [
   "$a&gt;0$, $b&lt;0$, $c&gt;0$",
   "$a&gt;0$, $b&gt;0,$ $c&gt;0$",
   "$a&gt;0$, $b&lt;0$, $c&lt;0$",
   "$a&gt;0$, $b&gt;0$, $c&lt;0$"
  ],
  "answer": 0,
  "explain": "Ta có bề lõm của parabol hướng lên nên $a&gt;0$.<br>  Với $x=0$, ta được $y=2$ nên $2=c$ do đó $c&gt;0$.<br>  Từ bảng biến thiên, ta có hoành độ đỉnh dương nên $-\\dfrac{b}{2a}&gt;0$ mà $a&gt;0$ nên ta được $b&lt;0$.<br>  Vậy $a&gt;0$, $b&lt;0$, $c&gt;0$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323TN4",
  "question": "Bảng biến thiên của hàm số $y=-2x^2+4x+1$ là bảng nào sau đây?",
  "options": [
   "<br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_005.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_006.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_007.png\" alt=\"hinh ve\" class=\"option-graph-img\">",
   "<br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_008.png\" alt=\"hinh ve\" class=\"option-graph-img\">"
  ],
  "answer": 0,
  "explain": "Ta có $y=-2x^2+4x+1$ nên $a=-2$, $b=4$, $c=1$.  <br>   Suy ra $  \\Delta=b^2-4ac=4^2-4\\cdot\\left(-2\\right)\\cdot 1=16+8=24  $. <br>  Từ đó, tọa độ đỉnh của parabol là  $  x_I=-\\dfrac{b}{2a}=-\\dfrac{4}{2\\cdot\\left(-2\\right)}=1,\\qquad   y_I=-\\dfrac{\\Delta}{4a}=-\\dfrac{24}{4\\cdot\\left(-2\\right)}=3.  $  Suy ra parabol có đỉnh $I\\left(1;3\\right)$. <br>   Vì $a&lt;0$ nên hàm số đồng biến trên khoảng $\\left(-\\infty;1\\right)$ và nghịch biến trên khoảng $\\left(1;+\\infty\\right)$. <br>  Do đó, hàm số $y=-2x^2+4x+1$ có bảng biến thiên như sau  <br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323TN2",
  "question": "Một chiếc cổng hình parabol có phương trình $f(x)=-\\dfrac{1}{2}x^2$. Biết cổng có chiều rộng $d=6$ m (như hình vẽ). Hãy tính chiều cao $h$ của cổng.  <br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$h=5$ (m)",
   "$h=-4{,}5$ (m)",
   "$h=6$ (m)",
   "$h=4{,}5$ (m)"
  ],
  "answer": 3,
  "explain": "Đồ thị $y=f(x)=-\\dfrac{1}{2}x^2$ có đỉnh tại $O(0;0)$ và trục đối xứng là $Oy$. <br>   Chiều rộng cổng $d=6$ m nên hai điểm chân cổng đối xứng qua $Oy$ có hoành độ là $-3$ và $3$. <br>  Khi đó, tung độ của chân cổng là  $  f(3)=-\\dfrac{1}{2}\\cdot 3^2=-\\dfrac{9}{2}=-4{,}5.  $  Vậy chiều cao của cổng là $h = |-4{,}5| =4{,}5$ (m).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TN7",
  "question": "Một cửa hàng bán giày nhập vào một đôi với giá là $40$ nghìn đồng. Cửa hàng ước tính rằng nếu đôi giày được bán với giá $x$ nghìn đồng thì mỗi tháng khách hàng sẽ mua $(120 - x)$ đôi. Hỏi cửa hàng bán một đôi giày giá bao nhiêu nghìn đồng thì thu được nhiều lãi nhất?",
  "options": [
   "$240$ nghìn đồng",
   "$80$ nghìn đồng",
   "$40$ nghìn đồng",
   "$160$ nghìn đồng"
  ],
  "answer": 1,
  "explain": "Giá nhập một đôi giày là $40$ nghìn đồng. Nếu bán với giá $x$ nghìn đồng thì mỗi tháng bán được $(120 - x)$ đôi, nên lợi nhuận (nghìn đồng) là  $  P(x) = (x - 40)(120 - x) = -x^2+160x-4800.  $  Đây là hàm số bậc hai có $a=-1&lt;0$ nên đạt giá trị lớn nhất tại  $  x=-\\dfrac{b}{2a}=-\\dfrac{160}{2\\cdot\\left(-1\\right)}=80.  $  Vậy cửa hàng nên bán với giá $80$ nghìn đồng để thu được nhiều lãi nhất.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D613TN1",
  "question": "Số quy tròn của 45,6534 với độ chính xác $d=0,01$:",
  "options": [
   "$45,65$",
   "$45,6$",
   "$45,7$",
   "$45$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D612TN1",
  "question": "Cho biết $\\sqrt[3]{3}=1,44224957....$ Số gần đúng của $\\sqrt[3]{3}$ với độ chính xác $0,0001$ là:",
  "options": [
   "$1,4422$",
   "$1,4421$",
   "$1,442$",
   "$1,44$"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D613TN2",
  "question": "Cho số gần đúng $a=0,1571$. Số quy tròn của $a$ với độ chính xác $d=0,002$ là:",
  "options": [
   "$ 0,16$",
   "$0,15$",
   "$0,157$",
   "$0,159$"
  ],
  "answer": 0,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D612TN2",
  "question": "Độ dài cạnh của một hình vuông là $8 \\pm 0,2 {~cm}$ thì chu vi của hình vuông đó bằng:",
  "options": [
   "$32~cm$",
   "$32 \\pm 0,2~cm$",
   "$64 \\pm 0,8~cm$",
   "$32 \\pm 0,8~cm$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN1",
  "question": "Bảng sau ghi lại nhiệt độ không khí trung bình (đơn vị: $^\\circ C$) các tháng trong năm 2020 tại một trạm quan trắc ở thành phố Vinh:<br>Tháng 1–12: $20,9;\\,20,7;\\,23,7;\\,23;\\,29,5;\\,32,2;\\,4,5;\\,29,6;\\,28,9;\\,23,8;\\,23,1;\\,18,4$.<br>Biết tháng 7 là mùa hè nên nhiệt độ trung bình phải cao. Số liệu của tháng nào đã bị ghi nhầm?",
  "options": [
   "Tháng $7$",
   "Tháng $1$",
   "Tháng $9$",
   "Tháng $12$"
  ],
  "answer": 0,
  "explain": "Các tháng khác đều có nhiệt độ trong khoảng $18^\\circ C$ đến $32^\\circ C$, riêng tháng $7$ (mùa hè, lẽ ra phải nóng nhất) lại ghi $4,5^\\circ C$ – thấp bất thường so với quy luật khí hậu. Vậy số liệu tháng $7$ bị ghi nhầm.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN2",
  "question": "Một trường THPT thống kê số lớp và số học sinh theo khối: Khối $10$ có $9$ lớp, $396$ học sinh; Khối $11$ có $8$ lớp, $370$ học sinh; Khối $12$ có $8$ lớp, $345$ học sinh. Biết sĩ số mỗi lớp không vượt quá $45$ học sinh. Khối nào bị thống kê sai?",
  "options": [
   "Khối $11$",
   "Khối $10$",
   "Khối $12$",
   "Không có khối nào sai"
  ],
  "answer": 0,
  "explain": "Sĩ số trung bình mỗi lớp: Khối $10$: $396:9=44$; Khối $11$: $370:8=46,25$; Khối $12$: $345:8=43,125$.<br>Vì sĩ số mỗi lớp không vượt quá $45$ nên khối $11$ (trung bình $46,25>45$) có số liệu không hợp lý, tức là bị thống kê sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN3",
  "question": "Với bảng số liệu ở câu trên (Khối $12$ có $8$ lớp, $345$ học sinh), sĩ số trung bình mỗi lớp của khối $12$ là",
  "options": [
   "$43,125$",
   "$44$",
   "$46,25$",
   "$45$"
  ],
  "answer": 0,
  "explain": "Sĩ số trung bình mỗi lớp của khối $12$ là $345:8=43,125$ (học sinh).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN4",
  "question": "Số sản phẩm bán ra trong $6$ tháng đầu năm của một cửa hàng là $145;175;211;256;340;371$ (mỗi tháng đều tăng khoảng $20\\%$ so với tháng trước). Tỉ lệ phần trăm tăng thêm của số sản phẩm bán ra từ tháng $4$ sang tháng $5$ (làm tròn đến $1$ chữ số thập phân) là",
  "options": [
   "$32,8\\%$",
   "$20,6\\%$",
   "$21,3\\%$",
   "$9,1\\%$"
  ],
  "answer": 0,
  "explain": "Tỉ lệ tăng từ tháng $4$ ($256$) sang tháng $5$ ($340$) là $\\dfrac{340-256}{256}\\approx 32,8\\%$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN5",
  "question": "Vẫn với bảng số sản phẩm bán ra $6$ tháng ở câu trên, số liệu của tháng nào không hợp lý so với xu hướng tăng đều khoảng $20\\%$ mỗi tháng:",
  "options": [
   "Tháng $5$",
   "Tháng $2$",
   "Tháng $3$",
   "Tháng $6$"
  ],
  "answer": 0,
  "explain": "Tỉ lệ tăng từ tháng $1\\to 2$ là $20,7\\%$, từ $2\\to 3$ là $20,6\\%$, từ $3\\to 4$ là $21,3\\%$ – đều xấp xỉ $20\\%$. Nhưng tỉ lệ tăng từ $4\\to 5$ lên tới $32,8\\%$ và từ $5\\to 6$ chỉ còn $9,1\\%$ – cả hai đều lệch xa $20\\%$. Điều này cho thấy chính số liệu của <strong>tháng $5$</strong> ($340$) không chính xác.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN6",
  "question": "Một đội $20$ thợ thủ công được chia đều vào $5$ tổ. Số người của mỗi tổ là",
  "options": [
   "$4$ người",
   "$5$ người",
   "$6$ người",
   "$3$ người"
  ],
  "answer": 0,
  "explain": "Số người mỗi tổ là $20:5=4$ (người).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN7",
  "question": "Ở đội thợ trên (mỗi tổ $4$ người), trong một ngày mỗi người thợ làm được $4$ hoặc $5$ sản phẩm. Số sản phẩm mà một tổ làm được trong ngày phải nằm trong khoảng nào?",
  "options": [
   "Từ $16$ đến $20$ sản phẩm",
   "Từ $15$ đến $20$ sản phẩm",
   "Từ $16$ đến $21$ sản phẩm",
   "Từ $17$ đến $21$ sản phẩm"
  ],
  "answer": 0,
  "explain": "Mỗi tổ có $4$ người, mỗi người làm $4$ hoặc $5$ sản phẩm nên số sản phẩm của tổ nằm trong đoạn $[4\\times 4;\\,4\\times 5]=[16;20]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN8",
  "question": "Đội trưởng thống kê số sản phẩm $5$ tổ làm được trong ngày lần lượt là $17;19;19;21;20$. Biết mỗi tổ có $4$ người và mỗi người làm $4$ hoặc $5$ sản phẩm/ngày. Tổ nào có số liệu liệu không hợp lý?",
  "options": [
   "Tổ $4$",
   "Tổ $1$",
   "Tổ $2$",
   "Tổ $5$"
  ],
  "answer": 0,
  "explain": "Số sản phẩm hợp lý của một tổ chỉ có thể sừ $16$ đến $20$. Tổ $4$ ghi $21$ sản phẩm, vưượt quá giới hạn $20$, nên số liệu của tổ $4$ không hợp lý.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN9",
  "question": "Để kiểm tra tính hợp lý của một số liệu thống kê, cách làm phù hợp nhất là",
  "options": [
   "Đối chiếu số liệu đó với các số liệu liên quan hoặc kiến thức thực tế đã biết",
   "Luôn tin tưởng tuyệt đối vào số liệu vì đó là số liệu đã công bố",
   "Chỉ cần tính trung bình cộng của tất cả số liệu trong bảng",
   "Bỏ số liệu đó đi nếu thấy giá trị lớn hơn các số liệu còn lại"
  ],
  "answer": 0,
  "explain": "Muốn phát hiện số liệu thống kê không chính xác, ta cần dựa vào các thông tin, quy luật hoặc kiến thức thực tế đã biết (ví dụ: quy luật thời tiết, giới hạn sĩ số, tỉ lệ tăng trưởng…) và đối chiếu với số liệu đã cho, chứ không chỉ dựa vào độ lớn hay tin tưởng tuyệt đối vào số liệu.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621TN10",
  "question": "Theo bảng thống kê số lớp và học sinh (Khối $10$: $9$ lớp, $396$ học sinh), sĩ số trung bình mỗi lớp của khối $10$ là",
  "options": [
   "$44$",
   "$43,125$",
   "$46,25$",
   "$45$"
  ],
  "answer": 0,
  "explain": "Sĩ số trung bình mỗi lớp của khối $10$ là $396:9=44$ (học sinh).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D633TN1",
  "question": "Trung vị của mẫu số liệu $4 ; 6 ; 7 ; 6 ; 5 ; 4 ; 5$ là:",
  "options": [
   "$4$",
   "$5$",
   "$6$",
   "$7$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634TN1",
  "question": "Tứ phân vị thứ nhất của mẫu số liệu $2 ; 4 ; 5 ; 6 ; 6 ; 7 ; 3 ; 4$ là:",
  "options": [
   "$3$",
   "$3,5$",
   "$4$",
   "$4,5$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634TN2",
  "question": "Tứ phân vị thứ ba của mẫu số liệu $27 ; 15 ; 18 ; 30 ; 19 ; 40 ; 100 ; 9 ; 46 ; 10 ; 200$ là",
  "options": [
   "$18$",
   "$15$",
   "$46$",
   "$40$"
  ],
  "answer": 2,
  "explain": "Sắp xếp mẫu số liệu theo thứ tự không giảm $9;10;15;18;19;27;30;40;46;100;200$.<br>  Tứ phân vị thứ 2: $Q_2=27$.<br>  Tứ phân vị thứ 3 là trung vị của mẫu $30;40;46;100;200$ là $46$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D632TN2",
  "question": "Tuổi thọ của $20$ bóng đèn được thắp thử được ghi lại ở bảng số liệu sau (đơn vị: giờ).  <br><img src=\"data/10/0D6/im0D63/loc_ghk1lhp_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Tuổi thọ trung bình của số bóng đèn trên là",
  "options": [
   "$1\\,175{,}5$",
   "$1\\,174{,}5$",
   "$1\\,173{,}5$",
   "$1\\,176{,}5$"
  ],
  "answer": 1,
  "explain": "Tuổi thọ trung bình của số bóng đèn trên là:  $\\overline{x}=\\dfrac{1\\,160\\cdot 4+1\\,170\\cdot 6+1\\,180\\cdot 7+1\\,190\\cdot 3}{20}=1\\,174{,}5.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642TN1",
  "question": "Khoảng biến thiên của mẫu số liệu $6 ; 7 ; 9 ; 4 ; 7 ; 5 ; 6 ; 6 ; 7$;<br> $9 ; 5 ; 6$ là:",
  "options": [
   "$3$",
   "$4$",
   "$5$",
   "$6$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642TN2",
  "question": "Khoảng tứ phân vị của mẫu số liệu $4 ; 7 ; 5 ; 6 ; 6 ; 7 ; 9 ; 5 ; 6$ là:",
  "options": [
   "$1$",
   "$1,5$",
   "$2$",
   "$2,5$"
  ],
  "answer": 2,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D643TN1",
  "question": "Dãy số liệu $5 ; 6 ; 0 ; 3 ; 5 ; 10 ; 3 ; 4$ có các giá trị ngoại lệ là:",
  "options": [
   "$0$",
   "$10$",
   "$0 ; 10$",
   "$\\varnothing$"
  ],
  "answer": 1,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644TN1",
  "question": "Phương sai của dãy số liệu $4 ; 5 ; 0 ; 3 ; 3 ; 5 ; 6 ; 10$ là:",
  "options": [
   "$6,5$",
   "$6,75$",
   "$7$",
   "$7,25$"
  ],
  "answer": 3,
  "explain": "",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644TN2",
  "question": "Cho mẫu số liệu: $1 ; 3 ; 4 ; 6 ; 8 ; 9 ; 11$. Phương sai của mẫu số liệu trên bằng",
  "options": [
   "$\\dfrac{76}{7}$",
   "$\\sqrt{\\dfrac{76}{7}}$",
   "$7$",
   "$49$"
  ],
  "answer": 0,
  "explain": "Số trung bình $\\overline{x}=\\dfrac{1+3+4+6+8+9+11}{7}=6$.<br>  Phương sai $S^2=\\dfrac{1}{7}\\left(1^2+3^2+4^2+6^2+8^2+9^2+11^2\\right)-6^2=\\dfrac{76}{6}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D711TN1",
  "question": "Giá trị của tham số $m$ để biểu thức $f(x)=(2-m)x^{2}-mx+3$ là một tam thức bậc hai là",
  "options": [
   "$m\\ne2$",
   "$m=2$",
   "$m\\ne0 \\text{ và } m\\ne2$",
   "$m=0 \\text{ hoặc } m=2$"
  ],
  "answer": 0,
  "explain": "Để $f(x)=(2-m)x^{2}-mx+3$ là một tam thức bậc hai thì $2-m\\ne 0$ hay $m\\ne 2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D711TN2",
  "question": "Cho tam thức bậc hai $ f(x)=ax^2+bx+c$ với $ a&lt;0$ và $\\Delta &lt;0$. Khẳng định nào dưới đây đúng?",
  "options": [
   "$ f(x)&lt;0,\\forall x\\in\\mathbb{R}$",
   "$ f(x)&gt;0,\\forall x\\in\\mathbb{R}$",
   "$ f(x)&gt;0,\\forall x\\in\\mathbb{R}\\setminus\\left\\{-\\dfrac{b}{2a}\\right\\}$",
   "$ f(x)\\ge 0,\\forall x\\in\\mathbb{R}$"
  ],
  "answer": 0,
  "explain": "Ta có $f(x)=ax^2+bx+c&lt;0,\\forall x\\in\\mathbb{R}\\Leftrightarrow a&lt;0 \\text{ và } \\Delta &lt;0.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D711TN3",
  "question": "Tập xác định của hàm số $ y=\\dfrac{x-2}{\\sqrt{-x^2+3x}}$ là",
  "options": [
   "$ (0;3)$",
   "$ (-\\infty ;0)\\cup (3;+\\infty)$",
   "$\\left[0;3\\right]$",
   "$\\mathbb{R}\\setminus\\left\\{ 0;3\\right\\}$"
  ],
  "answer": 0,
  "explain": "Hàm số xác định khi $-x^2+3x&gt;0\\Leftrightarrow 0&lt;x&lt;3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D711TN4",
  "question": "Cho tam thức bậc hai $ f(x)=ax^2+bx+c$ có bảng xét dấu như hình bên dưới  <br><img src=\"data/10/0D7/im0D71/loc3_0_TL_TN_DS_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tập nghiệm của bất phương trình $ f(x)\\le 0$ là",
  "options": [
   "$\\left\\{-4\\right\\}$",
   "$\\varnothing $",
   "$\\mathbb{R}$",
   "$\\mathbb{R}\\setminus\\left\\{-4\\right\\}$"
  ],
  "answer": 0,
  "explain": "Dựa vào bảng xét dấu ta suy ra $ f(x)\\le 0 \\Leftrightarrow x=-4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D711TN5",
  "question": "Tất cả các giá trị của $ m$ để đa thức $ f(x)=\\left(m^2-4\\right)x^2-3mx+m+1$ là một tam thức bậc hai là",
  "options": [
   "$\\left\\{\\begin{aligned}  & m\\ne 2\\\\   & m\\ne-2\\\\   \\end{aligned}\\right.$",
   "$\\left[\\begin{aligned}  & m=2\\\\   & m=-2\\\\   \\end{aligned}\\right.$",
   "$ m\\ne 2$",
   "$ m\\ne-2$"
  ],
  "answer": 0,
  "explain": "$f(x)=\\left(m^2-4\\right)x^2-3mx+m+1$ là một tam thức bậc hai khi và chỉ khi $m^2-4\\ne 0\\Leftrightarrow m\\ne 2 \\text{ và } m\\ne -2.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D711TN6",
  "question": "Cho tam thức bậc hai $f(x)=a x^2+b x+c$ ($a \\neq 0$), $\\Delta=b^2-4a c$. Ta có $f(x) \\leq 0$ với $\\forall x \\in \\mathbb{R}$ khi và chỉ khi",
  "options": [
   "$a \\leq 0 \\text{ và } \\Delta \\leq 0$",
   "$a \\leq 0 \\text{ và } \\Delta &lt; 0$",
   "$a &lt; 0 \\text{ và } \\Delta \\geq 0$",
   "$a &lt; 0 \\text{ và } \\Delta \\leq 0$"
  ],
  "answer": 3,
  "explain": "Ta có $f(x) \\leq 0$ với $\\forall x \\in \\mathbb{R}$ khi và chỉ khi $a &lt; 0 \\text{ và } \\Delta \\leq 0.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D731TN1",
  "question": "Cho phương trình $\\sqrt{x^2-2x+4}=2$. Chọn khẳng định đúng.",
  "options": [
   "Phương trình đã cho vô nghiệm",
   "Phương trình đã cho có đúng một nghiệm",
   "Tích các nghiệm của phương trình đã cho bằng $0$",
   "Tổng các nghiệm của phương trình đã cho bằng $-2$"
  ],
  "answer": 2,
  "explain": "Ta có $\\begin{aligned}[t]  &\\sqrt{x^2-2x+4}=2\\\\  &x^2-2x+4=4\\\\  &x^2-2x=0\\\\  &x=0\\ \\text{hoặc}\\ x=2. \\end{aligned}$<br> Thử lại ta thấy $x\\in\\{0;2\\}$ đều thỏa mãn.<br> Vậy tích các nghiệm của phương trình đã cho bằng $0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D811TN1",
  "question": "Lớp 10A có $20$ bạn nữ và $25$ bạn nam. Giáo viên chủ nhiệm có bao nhiêu cách chọn ngẫu nhiên một bạn làm trực nhật?",
  "options": [
   "$25$",
   "$20$",
   "$45$",
   "$500$"
  ],
  "answer": 2,
  "explain": "Phương án $1$: Chọn $1$ bạn nữ có $20$ cách chọn.<br>  Phương án $2$: Chọn $1$ bạn nam có $25$ cách chọn.<br>  Áp dụng quy tắc cộng ta có $ 20+25=45$ cách chọn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D811TN2",
  "question": "Bạn Nhân có $5$ con gà trống và $4$ con gà mái. Bạn Nhân có bao nhiêu cách chọn một cặp gà gồm một trống và một mái để tặng cho bạn Tài?",
  "options": [
   "$9$",
   "$5$",
   "$20$",
   "$4$"
  ],
  "answer": 2,
  "explain": "Số cách chọn một con gà trống là $5$ (cách).<br>  Số cách chọn một con gà mái là $4$ (cách).<br>  Áp dụng quy tắc nhân ta có $ 5\\cdot 4=20$ (cách).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D811TN3",
  "question": "Lớp $10$A có $15$ học sinh nam và $22$ học sinh nữ. Số cách chọn một học sinh trong lớp $10$A là",
  "options": [
   "$330$",
   "$37$",
   "$15$",
   "$22$"
  ],
  "answer": 1,
  "explain": "Việc chọn $1$ học sinh trong lớp $10$A chia thành 2 phương án: <br>- <em>Phương án 1</em>: chọn $1$ học sinh nam, có $15$ cách chọn.<br>- <em>Phương án 2</em>: chọn $1$ học sinh nữ, có $22$ cách chọn. Theo quy tắc cộng, ta có $15+22=37$ cách chọn một học sinh trong lớp $10$A.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D811TN4",
  "question": "Tung đồng thời một đồng xu và một con xúc xắc, nhận được kết quả là mặt xuất hiện trên đồng xu (sấp hay ngửa) và số chấm xuất hiện trên con xúc xắc. Số kết quả có thể xảy ra là",
  "options": [
   "$12$",
   "$6$",
   "$2$",
   "$8$"
  ],
  "answer": 0,
  "explain": "Việc tung đồng thời một đồng xu và một con xúc xắc chia làm $2$ công đoạn. <br>- <em>Công đoạn 1</em>: mặt xuất hiện trên đồng xu, có $2$ khả năng.<br>- <em>Công đoạn 2</em>: số chấm xuất hiện trên con xúc xắc, có $6$ khả năng. Theo quy tắc nhân, ta có $2\\cdot 6=12$ kết quả.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D821TN1",
  "question": "Cho tập hợp $ M=\\left\\{ 1;2;3;4;5\\right\\}$. Số tập con gồm $4$ phần tử của $ M$ bằng",
  "options": [
   "$\\mathrm{C}_5^4$",
   "$\\mathrm{ A}_5^4$",
   "$20$",
   "$ 5!$"
  ],
  "answer": 0,
  "explain": "Mỗi tập con $4$ phần tử của $ M$ là một tổ hợp chập $4$ của $5$ phần tử.<br>  Vậy số tập con gồm $4$ phần tử của $ M$ bằng $ \\mathrm{C}_5^4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D821TN2",
  "question": "Có bao nhiêu cách xếp $10$ quyển sách khác nhau lên một tầng kệ sách thành hàng ngang?",
  "options": [
   "$ 10!$",
   "$10$",
   "$1$",
   "$9!$"
  ],
  "answer": 0,
  "explain": "Xếp $10$ quyển sách khác nhau lên một tầng kệ sách thành hàng ngang là $10!$ cách.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D821TN3",
  "question": "Số cách xếp bốn bạn Xuân, Hạ, Thu, Đông ngồi vào một bàn dài gồm có $4$ chỗ là",
  "options": [
   "$24$",
   "$1$",
   "$4$",
   "$8$"
  ],
  "answer": 0,
  "explain": "Mỗi cách xếp bốn bạn Xuân, Hạ, Thu, Đông ngồi vào một bàn dài gồm có $4$ chỗ là một hoán vị của $4$ phần tử.<br> Số cách xếp là $4!=24$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D821TN4",
  "question": "Số các số tự nhiên có $3$ chữ số khác nhau được lập từ tập $A=\\{1; 2; 3; 4; 5; 6\\}$ là",
  "options": [
   "$6^3$",
   "$\\mathrm{C}_6^3$",
   "$\\mathrm{A}_6^3$",
   "$3!$"
  ],
  "answer": 2,
  "explain": "Chọn $3$ chữ số trong tập hợp $A$ và sắp chúng theo thứ tự để được số tự nhiên có $3$ chữ số là một chỉnh hợp chập $3$ của $6$.<br> Số các số tự nhiên được lập là $\\mathrm{A}_6^3$ số.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D831TN1",
  "question": "Đa thức $P(x)=x^5+5x^4+10x^3+10x^2+5x+1$ là khai triển của nhị thức nào dưới đây?",
  "options": [
   "$(1-x)^5$",
   "$(1+2x)^5$",
   "$(x+2)^5$",
   "$(x+1)^5$"
  ],
  "answer": 3,
  "explain": "Ta có $P(x)=x^5+5x^4+10x^3+10x^2+5x+1=(x+1)^5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN1",
  "question": "Cho góc $x$ thỏa mãn $0^\\circ &lt; x &lt; 180^\\circ$. Khẳng định nào sau đây là đúng?",
  "options": [
   "$\\cos \\left(180^\\circ - x \\right) = \\cos x$",
   "$\\cos \\left(90^\\circ - x \\right) = \\cos x$",
   "$\\sin \\left(180^\\circ - x \\right) = \\sin x$",
   "$\\sin \\left(90^\\circ - x \\right) = - \\cos x$"
  ],
  "answer": 2,
  "explain": "Khẳng định đúng là $\\sin \\left(180^\\circ - x \\right) = \\sin x$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN2",
  "question": "Cho $\\alpha \\in\\left(0^\\circ; 180^\\circ\\right)$ và $\\cos \\alpha=-\\dfrac{4}{5}$. Giá trị của $\\sin \\alpha$ là",
  "options": [
   "$\\sin \\alpha=-\\dfrac{3}{4}$",
   "$\\sin \\alpha=\\dfrac{3}{5}$",
   "$\\sin \\alpha=-\\dfrac{3}{5}$",
   "$\\sin \\alpha=\\dfrac{3}{4}$"
  ],
  "answer": 1,
  "explain": "Vì $\\alpha \\in\\left(0^\\circ; 180^\\circ\\right)$ nên $\\sin \\alpha &gt;0$.<br>  Khi đó $\\sin \\alpha =\\sqrt{1-\\cos^2\\alpha}=\\sqrt{1-\\left(-\\dfrac{4}{5}\\right)^2}=\\dfrac{3}{5}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN3",
  "question": "Cho góc $\\alpha$ thỏa mãn $0^\\circ \\le \\alpha \\leq 180^\\circ$. Khẳng định nào dưới đây đúng?",
  "options": [
   "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
   "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha$",
   "$\\cos(180^\\circ - \\alpha) = \\cos \\alpha$",
   "$\\tan(180^\\circ - \\alpha) = \\tan \\alpha$"
  ],
  "answer": 0,
  "explain": "Ta sử dụng công thức lượng giác cho hai góc bù nhau ($180^\\circ - \\alpha$ và $\\alpha$) là $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN4",
  "question": "Với giá trị nào của góc $\\alpha$ thì $\\cos \\alpha &gt; 0$?",
  "options": [
   "$0^\\circ &lt; \\alpha &lt; 90^\\circ$",
   "$90^\\circ &lt; \\alpha \\leq 180^\\circ$",
   "$0^\\circ \\leq \\alpha &lt; 90^\\circ$",
   "$0^\\circ \\leq \\alpha \\leq 90^\\circ$"
  ],
  "answer": 2,
  "explain": "Với $0^\\circ \\leq \\alpha &lt; 90^\\circ$ thì $\\cos \\alpha &gt; 0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN5",
  "question": "Cho góc $\\alpha$ thỏa mãn $0^{\\circ} &lt; \\alpha &lt; 180^{\\circ}$, $\\alpha \\neq 90^{\\circ}$. Khẳng định nào sau đây đúng?",
  "options": [
   "$\\sin \\left(180^{\\circ}-\\alpha\\right)=-\\sin \\alpha$",
   "$\\cos \\left(180^{\\circ}-\\alpha\\right)=\\cos \\alpha$",
   "$\\tan \\left(180^{\\circ}-\\alpha\\right)=\\tan \\alpha$",
   "$\\cot \\left(180^{\\circ}-\\alpha\\right)=-\\cot \\alpha$"
  ],
  "answer": 3,
  "explain": "Ta có $\\cot \\left(180^{\\circ}-\\alpha\\right)=-\\cot \\alpha$, với $0^{\\circ} &lt; \\alpha &lt; 180^{\\circ}$, $\\alpha \\neq 90^{\\circ}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN6",
  "question": "Biết rằng điểm $M(a;b)$ thoả mãn $\\widehat{MOx}=30^{\\circ}$ như hình vẽ.  Khi đó giá trị của $a$ bằng<br><img src=\"data/10/0H4/im0H41/loc2_0_TN_DS_TLN_Chuy_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$\\dfrac{4}{5}$",
   "$\\dfrac{\\sqrt{2}}{2}$",
   "$\\dfrac{\\sqrt{3}}{2}$",
   "$\\dfrac{1}{2}$"
  ],
  "answer": 2,
  "explain": "Ta có $a=\\cos30^\\circ=\\dfrac{\\sqrt{3}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN7",
  "question": "Với mọi góc $\\alpha$ thỏa mãn $ 0^\\circ &lt;\\alpha &lt;180^\\circ$. Khẳng định nào sau đây đúng?",
  "options": [
   "$\\sin\\left(180^\\circ-\\alpha\\right)=-\\cos\\alpha $",
   "$\\sin\\left(180^\\circ-\\alpha\\right)=-\\sin\\alpha $",
   "$\\cos\\left(180^\\circ-\\alpha\\right)=\\sin\\alpha $",
   "$\\cos\\left(180^\\circ-\\alpha\\right)=-\\cos\\alpha $"
  ],
  "answer": 3,
  "explain": "$\\cos\\left(180^\\circ-\\alpha\\right)=-\\cos\\alpha $.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN8",
  "question": "Cho biết $\\tan\\alpha=\\dfrac{1}{3}$. Tính $\\cot\\alpha$.",
  "options": [
   "$\\cot\\alpha=\\dfrac{1}{4}$",
   "$\\cot\\alpha=3$",
   "$\\cot\\alpha=\\sqrt{3}$",
   "$\\cot\\alpha=\\dfrac{1}{2}$"
  ],
  "answer": 1,
  "explain": "Ta có $\\cot \\alpha = \\dfrac{1}{\\tan\\alpha}=\\dfrac{1}{\\dfrac{1}{3}}=3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN9",
  "question": "Cho $0^\\circ\\le x\\le 180^\\circ$. Khẳng định nào sau đây đúng?",
  "options": [
   "$\\cot\\left(180^\\circ-x\\right)=\\cot x$",
   "$\\tan\\left(180^\\circ-x\\right)=\\tan x$",
   "$\\sin\\left(180^\\circ-x\\right)=\\sin x$",
   "$\\cos\\left(180^\\circ-x\\right)=\\cos x$"
  ],
  "answer": 2,
  "explain": "Đối với hai góc bù nhau, ta có  $\\sin\\left(180^\\circ-x\\right)=\\sin x;$  $\\cos\\left(180^\\circ-x\\right)=-\\cos x;$  $\\tan\\left(180^\\circ-x\\right)=-\\tan x;$  $\\cot\\left(180^\\circ-x\\right)=-\\cot x;$  Vậy $\\sin\\left(180^\\circ-x\\right)=\\sin x$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN10",
  "question": "Giá trị của $\\tan 36^\\circ$ bằng",
  "options": [
   "$\\cot 54^\\circ$",
   "$\\cos 54^\\circ$",
   "$\\sin 54^\\circ$",
   "$\\tan 54^\\circ$"
  ],
  "answer": 0,
  "explain": "Ta có $36^\\circ+54^\\circ=90^\\circ$. <br>  Với hai góc phụ nhau, ta có $\\tan x=\\cot (90^\\circ-x)$. <br>   Do đó, $\\tan 36^\\circ=\\cot 54^\\circ$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN11",
  "question": "Đẳng thức nào sau đây <strong>sai</strong>?",
  "options": [
   "$\\sin 45^{\\circ}+\\cos 45^{\\circ}=\\sqrt{2}$",
   "$\\sin 30^{\\circ}+\\cos 60^{\\circ}=1$",
   "$\\sin 60^{\\circ}+\\cos 150^{\\circ}=0$",
   "$\\sin 120^{\\circ}+\\cos 30^{\\circ}=0$"
  ],
  "answer": 3,
  "explain": "<br>- $\\sin 45^{\\circ}+\\cos 45^{\\circ} = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2} = \\sqrt{2}$ (Đúng).<br>- $\\sin 30^{\\circ}+\\cos 60^{\\circ} = \\dfrac{1}{2} + \\dfrac{1}{2} = 1$ (Đúng).<br>- $\\sin 60^{\\circ}+\\cos 150^{\\circ} = \\dfrac{\\sqrt{3}}{2} + \\left(-\\dfrac{\\sqrt{3}}{2}\\right) = 0$ (Đúng).<br>- $\\sin 120^{\\circ}+\\cos 30^{\\circ} = \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{3}}{2} = \\sqrt{3} \\ne 0$ (Sai).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TN12",
  "question": "Cho góc $\\alpha$ là góc tù. Mệnh đề nào sau đây là đúng?",
  "options": [
   "$\\sin \\alpha &lt; 0$",
   "$\\cos \\alpha &lt; 0$",
   "$\\tan \\alpha &gt; 0$",
   "$\\cot \\alpha &gt; 0$"
  ],
  "answer": 1,
  "explain": "Vì $\\alpha$ là góc tù ($90^\\circ &lt; \\alpha &lt; 180^\\circ$) nên điểm biểu diễn trên đường tròn lượng giác thuộc góc phần tư thứ II.  Do đó $\\sin\\alpha &gt; 0$, $\\cos\\alpha &lt; 0$, $\\tan\\alpha &lt; 0$, $\\cot\\alpha &lt; 0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN1",
  "question": "Tam giác $ABC$ có $\\widehat{B}=30^{\\circ}$, $\\widehat{C}=45^{\\circ}$ và $AB=5$. Tính độ dài cạnh $AC$.<br><img src=\"data/10/0H4/im0H42/dlts_sbh_giuakii1_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$AC=\\dfrac{5\\sqrt{6}}{2}$",
   "$AC=\\dfrac{5\\sqrt{3}}{2}$",
   "$AC=\\dfrac{5\\sqrt{2}}{2}$",
   "$AC=5\\sqrt{2}$"
  ],
  "answer": 2,
  "explain": "Theo định lý Sin, ta có $\\dfrac{AC}{\\sin B}=\\dfrac{AB}{\\sin C}$ <br>  $\\Rightarrow AC=\\dfrac{AB\\sin B}{\\sin C}=\\dfrac{5\\sin 30^{\\circ}}{\\sin 45^{\\circ}}=\\dfrac{5\\sqrt{2}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN2",
  "question": "Tam giác $A B C$ có $a=8$, $c=3$, $\\widehat{B}=60^{\\circ}$. Độ dài cạnh $b$ bằng bao nhiêu?",
  "options": [
   "$7$",
   "$\\sqrt{61}$",
   "$\\sqrt{97}$",
   "$49$"
  ],
  "answer": 0,
  "explain": "Áp dụng định lí côsin trong tam giác $ABC$ ta được  $b^2=a^2+c^2-2ac\\cos \\widehat{B}=8^2+ 3^2-2\\cdot8\\cdot3\\cdot\\cos 60^{\\circ}=49 \\Rightarrow b=7.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN3",
  "question": "Cho tam giác $ABC$ có $AB=2$, $AC=1$ và $\\widehat{BAC}=60^\\circ$. Độ dài cạnh $BC$ là",
  "options": [
   "$BC=\\sqrt{3}$",
   "$BC=2$",
   "$BC=1$",
   "$BC=\\sqrt{2}$"
  ],
  "answer": 0,
  "explain": "Áp dụng định lí côsin trong $\\triangle ABC$<br>  $BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\widehat{BAC})$<br>$= 2^2 + 1^2 - 2 \\cdot 2 \\cdot 1 \\cdot \\cos(60^\\circ)$<br>$= 4 + 1 - 4 \\cdot \\left(\\dfrac{1}{2}\\right) = 5 - 2 = 3$<br>$\\Rightarrow BC = \\sqrt{3}.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN4",
  "question": "Cho tam giác $ABC$ có $AB=26$, $BC=28$, $CA=30$. Độ dài đường cao $AH$ của tam giác là",
  "options": [
   "$21$",
   "$24$",
   "$14$",
   "$12$"
  ],
  "answer": 1,
  "explain": "Nửa chu vi $p = \\dfrac{AB+BC+CA}{2} = \\dfrac{26+28+30}{2} = \\dfrac{84}{2} = 42.$  Diện tích   $S = \\sqrt{p(p-AB)(p-BC)(p-CA)}$<br>$= \\sqrt{42(42-28)(42-30)(42-26)}$<br>$= 336.$  Mặt khác, $S = \\dfrac{1}{2} \\cdot a \\cdot h_a = \\dfrac{1}{2} \\cdot BC \\cdot AH$ nên  $336 = \\dfrac{1}{2} \\cdot 28 \\cdot AH$<br>$\\Rightarrow AH = \\dfrac{336}{14} = 24.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN5",
  "question": "Cho tam giác $ABC$ có $AC = 2$, $\\widehat{C} = 150^\\circ$, $BC = \\sqrt{3}$. Tính độ dài cạnh $AB$.",
  "options": [
   "$AB = 13$",
   "$AB = 10$",
   "$AB = \\sqrt{10}$",
   "$AB = \\sqrt{13}$"
  ],
  "answer": 3,
  "explain": "Áp dụng định lý côsin trong tam giác $ABC$<br>  $AB^2 = AC^2 + BC^2 - 2 \\cdot AC \\cdot BC \\cdot \\cos {C}$<br>  Thay $AC = 2$, $BC = \\sqrt{3}$, $\\widehat{C} = 150^\\circ$ vào công thức trên, ta được  $AB^2 = 2^2 + (\\sqrt{3})^2 - 2 \\cdot 2 \\cdot \\sqrt{3} \\cdot \\cos {150^\\circ}$<br>$= 2^2 + (\\sqrt{3})^2 - 2 \\cdot 2 \\cdot \\sqrt{3} \\cdot \\left(-\\dfrac{\\sqrt{3}}{2}\\right)$<br>$= 13.$  Vậy cạnh $AB = \\sqrt{13}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN6",
  "question": "Cho tam giác $ABC$ với $BC=a, AC=b, AB=c$. Đẳng thức nào <strong>sai</strong>?",
  "options": [
   "$c^2=b^2+a^2+2ab \\cos C$",
   "$b^2=a^2+c^2-2ac \\cos B$",
   "$c^2=b^2+a^2-2ab \\cos C$",
   "$a^2=b^2+c^2-2bc \\cos A$"
  ],
  "answer": 0,
  "explain": "Theo định lí côsin ta có $c^2=b^2+a^2-2ab \\cos C$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422TN4",
  "question": "Cho tam giác $ABC$ có $BC=a$, $AC=b$, $AB=c$ và $S$ là diện tích tam giác. Khẳng định nào dưới đây {\\bf sai}?",
  "options": [
   "$a^2=b^2+c^2+2b c\\cdot \\cos A$",
   "$c^2=a^2+b^2-2a b \\cdot \\cos C$",
   "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$",
   "$S=\\dfrac{1}{2} c\\cdot a\\cdot \\sin B$"
  ],
  "answer": 0,
  "explain": "“$a^2=b^2+c^2+2b c\\cdot \\cos A$”\\, là khẳng định sai vì $a^2=b^2+c^2-2b c\\cdot \\cos A$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN7",
  "question": "Tam giác $ABC$ có $AB=3,$ $BC=6$ và $\\widehat{ABC}=60^{\\circ}$.  Khi đó $AC$ bằng",
  "options": [
   "$3\\sqrt{3}$",
   "$27$",
   "$8$",
   "$2\\sqrt{2}$"
  ],
  "answer": 0,
  "explain": "Ta có $AC^2=AB^2+BC^2-2\\cdot AB \\cdot BC\\cdot\\cos\\widehat{ABC}\\Rightarrow AC=\\sqrt{3^2+6^2-2\\cdot3\\cdot6\\cdot\\cos60^\\circ}=3\\sqrt{3}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422TN2",
  "question": "Cho $\\triangle ABC$ với các cạnh $AB=c$, $AC=b$, $BC=a$. Gọi $R$, $S$ lần lượt là bán kính đường tròn ngoại tiếp và diện tích của tam giác $ABC$. Trong các phát biểu sau, phát biểu nào <strong>sai</strong>?",
  "options": [
   "$S=\\dfrac{abc}{4R}$",
   "$R=\\dfrac{a}{\\sin A}$",
   "$S=\\dfrac{1}{2}ab \\sin C$",
   "$c^{2}=a^{2}+b^{2}-2ab \\cos C$"
  ],
  "answer": 1,
  "explain": "Theo định lý sin, ta có $\\dfrac{a}{\\sin A} = 2R \\Rightarrow R = \\dfrac{a}{2\\sin A}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TN8",
  "question": "Cho $\\triangle ABC$ có $\\widehat{B}=60^{\\circ}$, $a=8$, $c=5$. Độ dài cạnh $b$ bằng",
  "options": [
   "$7$",
   "$129$",
   "$49$",
   "$\\sqrt{129}$"
  ],
  "answer": 0,
  "explain": "Áp dụng định lý cô-sin trong $\\triangle ABC$:  $b^2 = a^2 + c^2 - 2ac \\cos B$<br>$= 8^2 + 5^2 - 2 \\cdot 8 \\cdot 5 \\cdot \\cos 60^\\circ$<br>$= 64 + 25 - 80 \\cdot \\dfrac{1}{2}$<br>$= 89 - 40 = 49.$  Suy ra $b = \\sqrt{49} = 7$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431TN1",
  "question": "Cho tam giác $ABC$ có $a=4$, $c=5$, $\\widehat{B}=150^{\\circ}$. Diện tích của tam giác $ABC$ bằng<br><img src=\"data/10/0H4/im0H43/dlts_sbh_giuakii1_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$5$",
   "$10\\sqrt{3}$",
   "$5\\sqrt{3}$",
   "$10$"
  ],
  "answer": 0,
  "explain": "Ta có $S_{ABC}=\\dfrac{1}{2}ac\\sin B=\\dfrac{1}{2}\\cdot 4 \\cdot 5 \\cdot \\sin 150^{\\circ}=5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431TN2",
  "question": "Diện tích $S$ của tam giác $A B C$ là",
  "options": [
   "$S=\\dfrac{1}{2} A B \\cdot B C \\cdot \\sin A$",
   "$S=\\dfrac{1}{2} A B \\cdot B C \\cdot \\cos A$",
   "$S=\\dfrac{1}{2} A B \\cdot A C \\cdot \\cos A$",
   "$S=\\dfrac{1}{2} A B \\cdot A C \\cdot \\sin A$"
  ],
  "answer": 3,
  "explain": "Diện tích $S$ của tam giác $A B C$ là $S=\\dfrac{1}{2} A B \\cdot A C \\cdot \\sin A$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431TN3",
  "question": "Để lắp đường dây điện cao thế từ vị trí $A$ đến vị trí $B$, do phải tránh một ngọn núi nên người ta phải nối đường dây từ vị trí $A$ đến vị trí $C$ dài $10\\,\\text{km}$, sau đó nối đường dây từ vị trí $C$ đến vị trí $B$ dài $8\\,\\text{km}$. Góc tạo bởi hai đoạn dây $AC$ và $CB$ là $70^\\circ$.  <br><img src=\"data/10/0H4/im0H43/loc_ghk1hv_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Chiều dài tăng thêm của dây điện vì không thể nối trực tiếp từ $A$ đến $B$ là bao nhiêu kilômét? (Kết quả làm tròn đến hàng phần mười)",
  "options": [
   "$7{,}5$",
   "$6{,}3$",
   "$14{,}3$",
   "$3{,}2$"
  ],
  "answer": 0,
  "explain": "Chiều dài đường dây đi vòng qua $C$ là $L_C = AC + CB = 10 + 8 = 18\\,\\text{km}.$  Chiều dài đường dây nối trực tiếp $A$ đến $B$ là $AB$. Ta có  $AB^2 = AC^2 + CB^2 - 2 \\cdot AC \\cdot CB \\cdot \\cos(\\widehat{ACB})$<br>$= 10^2 + 8^2 - 2 \\cdot 10 \\cdot 8 \\cdot \\cos(70^\\circ)$<br>$= 100 + 64 - 160 \\cdot \\cos(70^\\circ)$<br>$\\approx 109{,}28$<br>$\\Rightarrow AB = \\sqrt{109{,}28}$<br>$\\approx 10{,}5\\,\\text{km}.$  Chiều dài tăng thêm là $L_C - AB = 18 - 10{,}5 = 7{,}5\\,\\text{km}.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H511TN1",
  "question": "Cho ba điểm $M, N, P$ thẳng hàng, trong đó $N$ nằm giữa hai điểm $M$ và $P$. Khi đó cặp vectơ nào sau đây cùng hướng?",
  "options": [
   "$\\vec{NP}$ và $\\vec{NM}$",
   "$\\vec{MN}$ và $\\vec{PN}$",
   "$\\vec{MP}$ và $\\vec{PN}$",
   "$\\vec{MN}$ và $\\vec{MP}$"
  ],
  "answer": 3,
  "explain": "<br><img src=\"data/10/0H5/im0H51/loc2_0_TL_TN_DS_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H511TN2",
  "question": "Cho lục giác đều $ABCDEF$ tâm $O$. Các vectơ khác $\\overrightarrow{0}$ bằng vectơ $\\vec{AB}$, có điểm đầu và điểm cuối là các đỉnh hoặc tâm $O$ của lục giác là<br><img src=\"data/10/0H5/im0H51/loc2_0_TL_TN_DS_THPT__002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$\\vec{BO}, \\vec{OC}, \\vec{ED}$",
   "$\\vec{FO}, \\vec{OC}, \\vec{FD}$",
   "$\\vec{FO}, \\vec{AC}, \\vec{ED}$",
   "$\\vec{FO}, \\vec{OC}, \\vec{ED}$"
  ],
  "answer": 3,
  "explain": "Các vectơ bằng $\\vec{AB}$ là $\\vec{OC}$, $\\vec{FO}$ và $\\vec{ED}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H511TN3",
  "question": "Vectơ có điểm đầu $D$, điểm cuối $E$ được kí hiệu là",
  "options": [
   "$\\overrightarrow{ED}$",
   "$\\overrightarrow{DE}$",
   "$\\overline{DE}$",
   "$\\left| \\overrightarrow{DE}\\right| $"
  ],
  "answer": 1,
  "explain": "Vectơ có điểm đầu $D$, điểm cuối $E$ được kí hiệu là $\\overrightarrow{DE}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H521TN1",
  "question": "Cho $\\triangle A B C$. Gọi $I$ là trung điểm $B C$. Mệnh đề nào sau đây đúng?",
  "options": [
   "$\\overrightarrow{A I}+\\overrightarrow{A B}=\\overrightarrow{0}$",
   "$\\overrightarrow{A I}+\\overrightarrow{B I}=\\overrightarrow{0}$",
   "$\\overrightarrow{C I}+\\overrightarrow{A I}=\\overrightarrow{0}$",
   "$\\overrightarrow{B I}+\\overrightarrow{C I}=\\overrightarrow{0}$"
  ],
  "answer": 3,
  "explain": "Vì $I$ là trung điểm $B C$ nên $\\overrightarrow{B I}+\\overrightarrow{C I}=\\overrightarrow{0}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H521TN2",
  "question": "Rút gọn biểu thức $\\overrightarrow{MN}-\\overrightarrow{QP}+\\overrightarrow{RN}-\\overrightarrow{PN}+\\overrightarrow{QR}$ được kết quả nào sau đây?",
  "options": [
   "$\\overrightarrow{MP}$",
   "$\\overrightarrow{MR}$",
   "$\\overrightarrow{MN}$",
   "$\\overrightarrow{MQ}$"
  ],
  "answer": 2,
  "explain": "Ta có $\\overrightarrow{MN}-\\overrightarrow{QP}+\\overrightarrow{RN}-\\overrightarrow{PN}+\\overrightarrow{QR}$<br>$= \\overrightarrow{MN}+\\overrightarrow{PQ}+\\overrightarrow{RN}+\\overrightarrow{NP}+\\overrightarrow{QR}$<br>$= \\overrightarrow{MN}+ \\overrightarrow{NP}+\\overrightarrow{PQ}+\\overrightarrow{QR}+\\overrightarrow{RN}$<br>$= \\overrightarrow{MP}+\\overrightarrow{PR}+\\overrightarrow{RN}=\\overrightarrow{MR}+\\overrightarrow{RN}=\\overrightarrow{MN}.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H521TN3",
  "question": "Cho hình bình hành $ABCD$ tâm $O$. Khẳng định nào sau đây đúng?",
  "options": [
   "$\\overrightarrow{BC}+\\overrightarrow{AB}=\\overrightarrow{CA}$",
   "$\\overrightarrow{OC}+\\overrightarrow{AO}=\\overrightarrow{CA}$",
   "$\\overrightarrow{BA}+\\overrightarrow{DA}=\\overrightarrow{CA}$",
   "$\\overrightarrow{DC}+\\overrightarrow{BC}=\\overrightarrow{CA}$"
  ],
  "answer": 2,
  "explain": "<br><img src=\"data/10/0H5/im0H52/loc2_0_TN_DS_TL_SGD_B_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có   <br>- $\\overrightarrow{BC}+\\overrightarrow{AB}=\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.<br>- $\\overrightarrow{OC}+\\overrightarrow{AO}=\\overrightarrow{AO}+\\overrightarrow{OC}=\\overrightarrow{AC}$.<br>- $\\overrightarrow{BA}+\\overrightarrow{DA}=\\overrightarrow{CA}=\\overrightarrow{CD}+\\overrightarrow{CB}=\\overrightarrow{CA}$ (vì $ABCD$ là hình bình hành).<br>- $\\overrightarrow{DC}+\\overrightarrow{BC}=\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$ (vì $ABCD$ là hình bình hành).  Do đó, $\\overrightarrow{BA}+\\overrightarrow{DA}=\\overrightarrow{CA}$ là khẳng định đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H521TN4",
  "question": "Cho ba điểm $M$, $N$, $P$ bất kì. Hiệu $\\overrightarrow{MN}-\\overrightarrow{MP}$ bằng vectơ nào sau đây?",
  "options": [
   "$\\overrightarrow{NP}$",
   "$\\overrightarrow{PN}$",
   "$\\overrightarrow{PM}$",
   "$\\overrightarrow{MP}$"
  ],
  "answer": 1,
  "explain": "Ta có $\\overrightarrow{MN}-\\overrightarrow{MP}=\\overrightarrow{PN}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H521TN5",
  "question": "Cho hình lục giác đều $ABCDEF$ tâm $O$. Khẳng định nào dưới đây đúng?<br><img src=\"data/10/0H5/im0H52/loc2_0_TN_DS_TLN_Chuy_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "options": [
   "$\\overrightarrow{AB}+\\overrightarrow{AF}=\\overrightarrow{AO}$",
   "$\\overrightarrow{AB}+\\overrightarrow{AF}=\\overrightarrow{DO}$",
   "$\\overrightarrow{AB}+\\overrightarrow{AF}=\\overrightarrow{CO}$",
   "$\\overrightarrow{AB}+\\overrightarrow{AF}=\\overrightarrow{OA}$"
  ],
  "answer": 0,
  "explain": "Ta có $\\overrightarrow{AB}+\\overrightarrow{AF}=\\overrightarrow{AB}+\\overrightarrow{BO}=\\overrightarrow{AO}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H531TN1",
  "question": "Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là điểm bất kì. Khẳng định nào dưới đây sai?",
  "options": [
   "$\\overrightarrow{AG}+\\overrightarrow{BG}+\\overrightarrow{CG}=\\overrightarrow{0}$",
   "$\\overrightarrow{AM}+\\overrightarrow{BM}+\\overrightarrow{CM}=3\\overrightarrow{GM}$",
   "$\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\overrightarrow{0}$",
   "$\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}=2\\overrightarrow{MG}$"
  ],
  "answer": 3,
  "explain": "Vì $G$ là trọng tâm nên với mọi điểm $M$, ta có $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}=3\\overrightarrow{MG}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H531TN2",
  "question": "Trong không gian, cho ba véc-tơ $\\overrightarrow{a}, \\overrightarrow{b}, \\overrightarrow{c}$ và số thực $k$. Khẳng định nào sau đây <strong>sai</strong>?",
  "options": [
   "$\\overrightarrow{a} \\cdot \\overrightarrow{b} = \\overrightarrow{b} \\cdot \\overrightarrow{a}$",
   "$\\left(\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right)^2 = \\overrightarrow{a}^2 \\cdot \\overrightarrow{b}^2$",
   "$\\overrightarrow{a} \\cdot \\left(\\overrightarrow{b} + \\overrightarrow{c}\\right) = \\overrightarrow{a} \\cdot \\overrightarrow{b} + \\overrightarrow{a} \\cdot \\overrightarrow{c}$",
   "$\\left(k\\overrightarrow{a}\\right) \\cdot \\overrightarrow{b} = k\\left(\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right) = \\overrightarrow{a} \\cdot \\left(k\\overrightarrow{b}\\right)$"
  ],
  "answer": 1,
  "explain": "Ta có $\\left(\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right)^2 = \\left[|\\overrightarrow{a}| \\cdot |\\overrightarrow{b}| \\cdot \\cos(\\overrightarrow{a}, \\overrightarrow{b})\\right]^2$.<br>  $\\left(\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right)^2=\\overrightarrow{a}^2 \\cdot \\overrightarrow{b}^2$ xảy ra khi hai véc-tơ cùng phương.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H541TN1",
  "question": "Cho tam giác đều $A B C$ có cạnh bằng $a$. Khẳng định nào sau đây đúng?",
  "options": [
   "$\\overrightarrow{A B} \\cdot \\overrightarrow{B C}=\\dfrac{-a^2}{2}$",
   "$\\overrightarrow{A B} \\cdot \\overrightarrow{B C}=\\dfrac{a^2 \\sqrt{3}}{2}$",
   "$\\overrightarrow{A B} \\cdot \\overrightarrow{B C}=\\dfrac{a^2}{2}$",
   "$\\overrightarrow{A B} \\cdot \\overrightarrow{B C}=\\dfrac{-a^2 \\sqrt{3}}{2}$"
  ],
  "answer": 0,
  "explain": "Ta có $\\overrightarrow{A B} \\cdot \\overrightarrow{B C}=-\\overrightarrow{BA} \\cdot \\overrightarrow{B C}=-a\\cdot a\\cdot \\cos 60^\\circ=\\dfrac{-a^2}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H541TN2",
  "question": "Trong các khẳng định sau, khẳng định nào đúng với mọi $\\overrightarrow{a}$ và $\\overrightarrow{b}$?",
  "options": [
   "$\\left| \\overrightarrow{a} \\cdot \\overrightarrow{b}\\right| =\\left| \\overrightarrow{b} \\right| \\cdot \\left| \\overrightarrow{a}\\right| $",
   "$\\left|\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right| =|\\overrightarrow{a}| \\cdot |\\overrightarrow{b}| \\cdot \\left| \\cos(\\overrightarrow{a}, \\overrightarrow{b})\\right| $",
   "$\\overrightarrow{a} \\cdot \\overrightarrow{b}=|\\overrightarrow{a}| \\cdot |\\overrightarrow{b}|$",
   "$\\overrightarrow{a} \\cdot \\overrightarrow{b}=-\\left| \\overrightarrow{b}\\right| \\cdot \\left| \\overrightarrow{a}\\right| $"
  ],
  "answer": 1,
  "explain": "Theo định nghĩa ta có $\\overrightarrow{a} \\cdot \\overrightarrow{b}=|\\overrightarrow{a}| \\cdot |\\overrightarrow{b}| \\cos(\\overrightarrow{a}, \\overrightarrow{b})$ suy ra $\\left|\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right| =|\\overrightarrow{a}| \\cdot |\\overrightarrow{b}| \\cdot \\left| \\cos(\\overrightarrow{a}, \\overrightarrow{b})\\right| $.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H541TN3",
  "question": "Cho $\\overrightarrow{a}$, $\\overrightarrow{b}\\ne\\overrightarrow{0}$ là hai vectơ ngược hướng nhau. Khẳng định nào dưới đây đúng?",
  "options": [
   "$\\overrightarrow{a}\\cdot\\overrightarrow{b}=\\left| \\overrightarrow{a}\\right| \\cdot\\left| \\overrightarrow{b}\\right| $",
   "$\\overrightarrow{a}\\cdot\\overrightarrow{b}=-\\left| \\overrightarrow{a}\\right| \\cdot\\left| \\overrightarrow{b}\\right| $",
   "$\\overrightarrow{a}\\cdot\\overrightarrow{b}=0$",
   "$\\overrightarrow{a}\\cdot\\overrightarrow{b}=\\overrightarrow{0}$"
  ],
  "answer": 1,
  "explain": "Vì hai vectơ ngược hướng nhau nên $\\overrightarrow{a}\\cdot\\overrightarrow{b}=-\\left| \\overrightarrow{a}\\right| \\cdot\\left| \\overrightarrow{b}\\right| $.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H911TN1",
  "question": "Trong mặt phẳng $ Oxy$, cho tam giác $ ABC$ có $A\\left(-3;5\\right)$, $B\\left(1;2\\right)$, $C\\left(5;2\\right)$. Tọa độ trọng tâm $ G$ của tam giác $ ABC$ là",
  "options": [
   "$\\left(1;3\\right)$",
   "$\\left(\\dfrac{3}{2};\\dfrac{9}{2}\\right)$",
   "$\\left(3;3\\right)$",
   "$\\left(3;9\\right)$"
  ],
  "answer": 0,
  "explain": "Ta có $\\left\\{\\begin{aligned}  &{x_G}=\\dfrac{-3+1+5}{3}=1\\\\   &{y_G}=\\dfrac{5+2+2}{3}=3\\\\   \\end{aligned}\\right.\\Rightarrow G\\left(1;3\\right).$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H911TN2",
  "question": "Trong mặt phẳng $ Oxy,$ cho vectơ $\\overrightarrow{a}=3\\overrightarrow{j}-\\overrightarrow{i}$. Tọa độ của $\\overrightarrow{a}$ là",
  "options": [
   "$\\left(-1;3\\right)$",
   "$\\left(3;-1\\right)$",
   "$\\left(1;-3\\right)$",
   "$\\left(-3;1\\right)$"
  ],
  "answer": 0,
  "explain": "Ta có $\\overrightarrow{a}=3\\overrightarrow{j}-\\overrightarrow{i}\\Leftrightarrow \\overrightarrow{a}=(-1;3)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN1",
  "question": "Trong mặt phẳng tọa độ, cho $\\vec{u}=(3;-2)$ và $\\vec{v}=(-1;4)$. Tọa độ của $\\vec{u}+\\vec{v}$ là",
  "options": [
   "$(2;2)$",
   "$(4;-6)$",
   "$(-3;-8)$",
   "$(2;-6)$"
  ],
  "answer": 0,
  "explain": "$\\vec u+\\vec v=(3+(-1);\\,-2+4)=(2;2)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN2",
  "question": "Cho $\\vec{u}=(2;5)$ và $\\vec{v}=(-3;1)$. Tọa độ của $\\vec{u}-2\\vec{v}$ là",
  "options": [
   "$(8;3)$",
   "$(-4;3)$",
   "$(8;7)$",
   "$(-4;7)$"
  ],
  "answer": 0,
  "explain": "$\\vec u-2\\vec v=(2-2\\cdot(-3);\\,5-2\\cdot 1)=(2+6;\\,5-2)=(8;3)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN3",
  "question": "Trong mặt phẳng tọa độ, cho $A(1;2)$ và $B(4;6)$. Tọa độ của vectơ $\\vec{AB}$ là",
  "options": [
   "$(3;4)$",
   "$(5;8)$",
   "$(-3;-4)$",
   "$(3;-4)$"
  ],
  "answer": 0,
  "explain": "$\\vec{AB}=(x_B-x_A;\\,y_B-y_A)=(4-1;\\,6-2)=(3;4)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN4",
  "question": "Cho $A(-2;3)$ và $B(4;-1)$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là",
  "options": [
   "$(1;1)$",
   "$(2;2)$",
   "$(-1;-1)$",
   "$(3;-1)$"
  ],
  "answer": 0,
  "explain": "$I=\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)=\\left(\\dfrac{-2+4}{2};\\dfrac{3+(-1)}{2}\\right)=(1;1)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN5",
  "question": "Cho tam giác $ABC$ với $A(0;0)$, $B(6;0)$, $C(0;6)$. Tọa độ trọng tâm $G$ của tam giác là",
  "options": [
   "$(2;2)$",
   "$(3;3)$",
   "$(6;6)$",
   "$(2;3)$"
  ],
  "answer": 0,
  "explain": "$G=\\left(\\dfrac{x_A+x_B+x_C}{3};\\dfrac{y_A+y_B+y_C}{3}\\right)=\\left(\\dfrac{0+6+0}{3};\\dfrac{0+0+6}{3}\\right)=(2;2)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN6",
  "question": "Cho $\\vec{u}=(2;3)$ và $\\vec{v}=(4;6)$. Khẳng định nào sau đây đúng?",
  "options": [
   "$\\vec u$ và $\\vec v$ cùng phương",
   "$\\vec u$ và $\\vec v$ không cùng phương",
   "$\\vec u$ và $\\vec v$ vuông góc với nhau",
   "$\\vec u=\\vec v$"
  ],
  "answer": 0,
  "explain": "Hai vectơ $\\vec u=(x_1;y_1),\\,\\vec v=(x_2;y_2)$ cùng phương khi $x_1y_2-x_2y_1=0$. Ta có $2\\cdot 6-4\\cdot 3=12-12=0$ nên $\\vec u$ và $\\vec v$ cùng phương (thực chất $\\vec v=2\\vec u$). Ngoài ra $\\vec u\\cdot\\vec v=2\\cdot 4+3\\cdot 6=26\\ne 0$ nên không vuông góc, và $\\vec u\\ne\\vec v$ (khác tọa độ).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN7",
  "question": "Cho $\\vec{a}=(1;2)$, $\\vec{b}=(3;-1)$ và $\\vec{c}=(5;3)$. Biết $\\vec c=m\\vec a+n\\vec b$ với $m,n$ là các số thực. Khi đó $m+n$ bằng",
  "options": [
   "$3$",
   "$1$",
   "$5$",
   "$-1$"
  ],
  "answer": 0,
  "explain": "Ta có hệ $\\begin{cases}m+3n=5\\\\2m-n=3\\end{cases}$. Giải hệ được $m=2,\\,n=1$ (thử lại: $2(1;2)+(3;-1)=(2;4)+(3;-1)=(5;3)$, đúng). Vậy $m+n=3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN8",
  "question": "Tìm $x$ để hai vectơ $\\vec{u}=(2x;3)$ và $\\vec{v}=(4;6)$ cùng phương.",
  "options": [
   "$x=1$",
   "$x=2$",
   "$x=-1$",
   "$x=0$"
  ],
  "answer": 0,
  "explain": "$\\vec u,\\vec v$ cùng phương $\\Leftrightarrow 2x\\cdot 6-4\\cdot 3=0\\Leftrightarrow 12x-12=0\\Leftrightarrow x=1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN9",
  "question": "Cho tam giác $ABC$ với $A(1;2)$, $B(4;2)$, $C(1;8)$. Tọa độ trọng tâm $G$ của tam giác là",
  "options": [
   "$(2;4)$",
   "$(6;12)$",
   "$(2;12)$",
   "$(6;4)$"
  ],
  "answer": 0,
  "explain": "$G=\\left(\\dfrac{1+4+1}{3};\\dfrac{2+2+8}{3}\\right)=(2;4)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TN10",
  "question": "Cho hình bình hành $ABCD$ với $A(1;1)$, $B(4;1)$, $D(1;5)$. Tọa độ đỉnh $C$ là",
  "options": [
   "$(4;5)$",
   "$(4;1)$",
   "$(1;5)$",
   "$(6;6)$"
  ],
  "answer": 0,
  "explain": "Vì $ABCD$ là hình bình hành nên $\\vec{AB}=\\vec{DC}$, suy ra $C=D+\\vec{AB}$. Ta có $\\vec{AB}=(4-1;1-1)=(3;0)$, nên $C=(1+3;5+0)=(4;5)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H931TN1",
  "question": "Trong mặt phẳng $ Oxy$, cho đường thẳng $d\\colon 2x-y+3=0$. Một vectơ pháp tuyến của $d$ là",
  "options": [
   "$\\overrightarrow{n_2}=\\left(2;-1\\right)$",
   "$\\overrightarrow{n_1}=\\left(2;3\\right)$",
   "$\\overrightarrow{n_3}=\\left(2;1\\right)$",
   "$\\overrightarrow{n_4}=\\left(-1;3\\right)$"
  ],
  "answer": 0,
  "explain": "$d\\colon 2x-y+3=0$ có một vectơ pháp tuyến $\\overrightarrow{n_2}=\\left(2;-1\\right)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H931TN2",
  "question": "Trong mặt phẳng $ Oxy,$ phương trình đường thẳng đi qua hai điểm $ A\\left(0;5\\right)$ và $ B\\left(-3;0\\right)$ là",
  "options": [
   "$-\\dfrac{x}{3}+\\dfrac{y}{5}=0$",
   "$-\\dfrac{x}{3}+\\dfrac{y}{5}=1$",
   "$\\dfrac{x}{3}-\\dfrac{y}{5}=1$",
   "$\\dfrac{x}{5}-\\dfrac{y}{3}=1$"
  ],
  "answer": 1,
  "explain": "Phương trình đường thẳng theo đoạn chắn đi qua hai điểm $ A\\left(0;5\\right)$ và $ B\\left(-3;0\\right)$ là $-\\dfrac{x}{3}+\\dfrac{y}{5}=1.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN1",
  "question": "Đường tròn $(x-2)^2+(y+3)^2=16$ có tâm và bán kính là",
  "options": [
   "$I(2;-3),\\,R=4$",
   "$I(-2;3),\\,R=4$",
   "$I(2;-3),\\,R=16$",
   "$I(-2;3),\\,R=16$"
  ],
  "answer": 0,
  "explain": "Đường tròn $(x-a)^2+(y-b)^2=R^2$ có tâm $I(a;b)$, bán kính $R$. Ở đây $a=2,\\,b=-3,\\,R^2=16$ nên $I(2;-3)$, $R=4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN2",
  "question": "Phương trình $x^2+y^2-4x+6y-3=0$ là phương trình của đường tròn có tâm và bán kính là",
  "options": [
   "$I(2;-3),\\,R=4$",
   "$I(-2;3),\\,R=4$",
   "$I(2;-3),\\,R=16$",
   "$I(2;3),\\,R=4$"
  ],
  "answer": 0,
  "explain": "Với dạng $x^2+y^2-2ax-2by+c=0$ ($a^2+b^2-c>0$), ta có $-2a=-4\\Rightarrow a=2$; $-2b=6\\Rightarrow b=-3$; $c=-3$. Tâm $I(2;-3)$, bán kính $R=\\sqrt{a^2+b^2-c}=\\sqrt{4+9+3}=\\sqrt{16}=4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN3",
  "question": "Cho đường tròn tâm $I(1;2)$, bán kính $R=3$. Điểm nào sau đây thuộc đường tròn?",
  "options": [
   "$M(4;2)$",
   "$N(1;2)$",
   "$P(0;0)$",
   "$Q(4;5)$"
  ],
  "answer": 0,
  "explain": "Điểm thuộc đường tròn khi $IM=R$, tức $(x-1)^2+(y-2)^2=9$. Với $M(4;2)$: $(4-1)^2+(2-2)^2=9$, thỏa mãn. Các điểm còn lại đều không thỏa mãn (thử trực tiếp: $N$ là tâm nên $IN=0$; $P$ cho $1+4=5\\ne 9$; $Q$ cho $9+9=18\\ne 9$).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN4",
  "question": "Đường tròn đường kính $AB$ với $A(1;1)$, $B(7;1)$ có tâm và bán kính là",
  "options": [
   "$I(4;1),\\,R=3$",
   "$I(4;1),\\,R=6$",
   "$I(3;1),\\,R=3$",
   "$I(4;0),\\,R=3$"
  ],
  "answer": 0,
  "explain": "Tâm $I$ là trung điểm $AB$: $I=\\left(\\dfrac{1+7}{2};\\dfrac{1+1}{2}\\right)=(4;1)$. Bán kính $R=\\dfrac{AB}{2}=\\dfrac{6}{2}=3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN5",
  "question": "Tìm $m$ để đường thẳng $3x-4y+m=0$ tiếp xúc với đường tròn tâm $I(1;2)$, bán kính $R=2$.",
  "options": [
   "$m=15$ hoặc $m=-5$",
   "$m=5$",
   "$m=10$",
   "$m=-10$ hoặc $m=10$"
  ],
  "answer": 0,
  "explain": "Đường thẳng tiếp xúc với đường tròn khi khoảng cách từ tâm đến đường thẳng bằng $R$: $\\dfrac{|3\\cdot 1-4\\cdot 2+m|}{\\sqrt{3^2+4^2}}=2\\Leftrightarrow |m-5|=10\\Leftrightarrow m=15$ hoặc $m=-5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN6",
  "question": "Phương trình nào sau đây là phương trình của một đường tròn?",
  "options": [
   "$x^2+y^2-2x+4y+1=0$",
   "$x^2+y^2-2x+4y+10=0$",
   "$x^2+y^2+2x-4y+10=0$",
   "$x^2+2y^2-2x+4y+1=0$"
  ],
  "answer": 0,
  "explain": "Phương trình $x^2+y^2-2ax-2by+c=0$ là đường tròn khi $a^2+b^2-c>0$. Với đáp án A: $a=1,b=-2,c=1$, ta có $a^2+b^2-c=1+4-1=4>0$: là đường tròn. Với B và C: $a^2+b^2-c=1+4-10=-5<0$: không phải đường tròn. Đáp án D không có dạng $x^2+y^2+\\ldots$ (hệ số của $y^2$ khác hệ số của $x^2$) nên không phải phương trình đường tròn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN7",
  "question": "Tâm và bán kính của đường tròn $x^2+y^2-2x+4y+1=0$ là",
  "options": [
   "$I(1;-2),\\,R=2$",
   "$I(-1;2),\\,R=2$",
   "$I(1;-2),\\,R=4$",
   "$I(1;2),\\,R=2$"
  ],
  "answer": 0,
  "explain": "Ta có $a=1,\\,b=-2,\\,c=1$ nên $I(1;-2)$ và $R=\\sqrt{a^2+b^2-c}=\\sqrt{1+4-1}=\\sqrt{4}=2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN8",
  "question": "Đường tròn tâm $I(0;0)$, bán kính $R=5$ và đường thẳng $3x+4y-25=0$ có vị trí tương đối là",
  "options": [
   "Tiếp xúc nhau",
   "Cắt nhau tại hai điểm",
   "Không có điểm chung",
   "Đường thẳng đi qua tâm $I$"
  ],
  "answer": 0,
  "explain": "Khoảng cách từ $I(0;0)$ đến đường thẳng là $d=\\dfrac{|3\\cdot 0+4\\cdot 0-25|}{\\sqrt{3^2+4^2}}=\\dfrac{25}{5}=5=R$. Vì $d=R$ nên đường thẳng tiếp xúc với đường tròn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN9",
  "question": "Cho tam giác $ABC$ vuông tại $A$ với $A(0;0)$, $B(6;0)$, $C(0;8)$. Bán kính đường tròn ngoại tiếp tam giác $ABC$ bằng",
  "options": [
   "$5$",
   "$10$",
   "$3$",
   "$4$"
  ],
  "answer": 0,
  "explain": "Vì tam giác vuông tại $A$ nên tâm đường tròn ngoại tiếp là trung điểm cạnh huyền $BC$ và bán kính $R=\\dfrac{BC}{2}$. Ta có $BC=\\sqrt{6^2+8^2}=\\sqrt{100}=10$, suy ra $R=\\dfrac{10}{2}=5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TN10",
  "question": "Với tam giác $ABC$ ở câu trên ($A(0;0),\\,B(6;0),\\,C(0;8)$, vuông tại $A$), tâm đường tròn ngoại tiếp tam giác là",
  "options": [
   "$(3;4)$",
   "$(0;0)$",
   "$(6;8)$",
   "$(3;0)$"
  ],
  "answer": 0,
  "explain": "Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm cạnh huyền $BC$: $\\left(\\dfrac{6+0}{2};\\dfrac{0+8}{2}\\right)=(3;4)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H951TN1",
  "question": "Quỹ đạo của sao hỏa là elip có bán trục lớn $227{,}9$ triệu km, bán trục nhỏ bằng $226{,}9$ triệu km và quay quanh mặt trời một vòng hết $687$ ngày. Khoảng cách xa nhất giữa sao hỏa và mặt trời gần số nào sau đây nhất?",
  "options": [
   "$21{,}32604$",
   "$226{,}9$",
   "$206{,}57396$",
   "$249{,}22604$"
  ],
  "answer": 3,
  "explain": "Theo giả thiết quỹ đạo của sao hỏa là elip có bán trục lớn $a = 227{,}9$ triệu km, bán trục nhỏ bằng $b = 226{,}9$ triệu km, suy ra tiêu cự $c = \\sqrt{a^2-b^2} = \\sqrt{227{,}9^2 - 226{,}9^2}$ triệu km.<br>  Khoảng cách xa nhất giữa sao hỏa và mặt trời là   $a + c = 227{,}9+\\sqrt{227{,}9^2 - 226{,}9^2} \\approx 249{,}22604$ triệu km.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 }
];
window.dungSai10 = [
 {
  "id": "0C111DS1",
  "question": "Cho hệ phương trình $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\x+y-z=0\\end{cases}$ (có nghiệm $(x;y;z)=(1;2;3)$).",
  "subQuestions": [
   {
    "text": "Hệ có nghiệm duy nhất",
    "answer": true
   },
   {
    "text": "$(x;y;z)=(1;2;3)$ là nghiệm của hệ",
    "answer": true
   },
   {
    "text": "Với nghiệm trên, $x+y+z$ bằng $5$",
    "answer": false
   },
   {
    "text": "Nếu thay $(x;y;z)=(2;2;2)$ vào hệ thì thỏa mãn phương trình (1) và (2) nhưng không thỏa mãn phương trình (3)",
    "answer": true
   }
  ],
  "explain": "<br>- <strong>Đúng</strong>. Giải hệ (bằng phép trừ các phương trình) cho đúng một bộ nghiệm.<br>- <strong>Đúng</strong>. Thử lại: $1+2+3=6$; $1-2+3=2$; $1+2-3=0$, đều đúng.<br>- <strong>Sai</strong>. $x+y+z=1+2+3=6$ (chính là vế phải của phương trình (1)), không phải $5$.<br>- <strong>Đúng</strong>. Thay $(2;2;2)$: pt (1): $2+2+2=6$ ✓; pt (2): $2-2+2=2$ ✓; pt (3): $2+2-2=2\\ne 0$, không thỏa.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211DS1",
  "question": "Xét mệnh đề $P(n)$: \"$1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$\", chứng minh bằng phương pháp quy nạp toán học.",
  "subQuestions": [
   {
    "text": "Bước cơ sở là kiểm tra $P(1)$ đúng",
    "answer": true
   },
   {
    "text": "Giả thiết quy nạp là giả sử $P(k)$ đúng với một số nguyên dương $k$ nào đó",
    "answer": true
   },
   {
    "text": "Ở bước quy nạp, ta cần chứng minh lại $P(k)$ đúng",
    "answer": false
   },
   {
    "text": "Khi $n=4$, tổng $1+2+3+4$ bằng $\\dfrac{4\\cdot 5}{2}=10$",
    "answer": true
   }
  ],
  "explain": "<br>- <strong>Đúng</strong>. Đây là bước đầu tiên của phép chứng minh quy nạp.<br>- <strong>Đúng</strong>. Đây chính là giả thiết quy nạp.<br>- <strong>Sai</strong>. Ở bước quy nạp ta cần chứng minh $P(k+1)$ đúng (dựa vào giả thiết $P(k)$ đúng), chứ không phải chứng minh lại $P(k)$.<br>- <strong>Đúng</strong>. $1+2+3+4=10$ và $\\dfrac{4\\cdot 5}{2}=10$, khớp nhau.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D011DS1",
  "question": "Gieo một con xúc xắc cân đối, đồng chất một lần. Gọi $\\Omega$ là không gian mẫu của phép thử.",
  "subQuestions": [
   {
    "text": "$\\Omega=\\{1;2;3;4;5;6\\}$",
    "answer": true
   },
   {
    "text": "Số phần tử của không gian mẫu là $6$",
    "answer": true
   },
   {
    "text": "Biến cố $A$: \"Xuất hiện mặt có số chấm là số nguyên tố\" được viết là $A=\\{2;3;5;7\\}$",
    "answer": false
   },
   {
    "text": "Biến cố $B$: \"Xuất hiện mặt có số chấm lớn hơn $6$\" là biến cố không thể",
    "answer": true
   }
  ],
  "explain": "<br>- <strong>Đúng</strong>. Xúc xắc có $6$ mặt với số chấm từ $1$ đến $6$.<br>- <strong>Đúng</strong>. $|\\Omega|=6$.<br>- <strong>Sai</strong>. Các số nguyên tố có mặt trên xúc xắc (từ $1$ đến $6$) là $2,3,5$, nên $A=\\{2;3;5\\}$ (không có $7$ vì $7\\notin\\Omega$).<br>- <strong>Đúng</strong>. Không có mặt nào có số chấm lớn hơn $6$ nên $B=\\varnothing$, là biến cố không thể.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D011DS2",
  "question": "Gieo đồng thời hai đồng xu cân đối, đồng chất (kí hiệu $S$: sấp, $N$: ngửa).",
  "subQuestions": [
   {
    "text": "Không gian mẫu có $4$ phần tử: $\\Omega=\\{SS;SN;NS;NN\\}$",
    "answer": true
   },
   {
    "text": "Biến cố \"Có ít nhất một mặt sấp\" là $\\{SS;SN;NS\\}$",
    "answer": true
   },
   {
    "text": "Biến cố \"Cả hai đồng xu đều ngửa\" và biến cố \"Có ít nhất một mặt sấp\" là hai biến cố đối nhau",
    "answer": true
   },
   {
    "text": "Biến cố \"Có đúng ba mặt sấp\" là biến cố chắc chắn",
    "answer": false
   }
  ],
  "explain": "<br>- <strong>Đúng</strong>. Mỗi đồng xu có $2$ khả năng nên $\\Omega$ có $2\\times 2=4$ phần tử.<br>- <strong>Đúng</strong>. Liệt kê trực tiếp từ $\\Omega$.<br>- <strong>Đúng</strong>. Hai biến cố đối nhau khi hợp của chúng là $\\Omega$ và giao là $\\varnothing$; ở đây $\\{NN\\}$ và $\\{SS;SN;NS\\}$ thỏa mãn điều đó.<br>- <strong>Sai</strong>. Chỉ gieo $2$ đồng xu nên không thể có $3$ mặt sấp; đây là biến cố không thể ($\\varnothing$), không phải biến cố chắc chắn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D021DS1",
  "question": "Trong hộp có $45$ quả cầu có cùng kích thước và khối lượng được đánh số từ $1$ đến $45$. Lấy ngẫu nhiên $3$ quả cầu từ hộp đó.",
  "subQuestions": [
   {
    "text": "Số cách lấy được cả $3$ quả cầu đánh số chẵn bằng $1\\,540$",
    "answer": true
   },
   {
    "text": "Xác xuất để tích $3$ số ghi trên $3$ quả cầu là một số chia hết cho $8$ bằng $\\dfrac{523}{1\\,290}$",
    "answer": false
   },
   {
    "text": "Xác xuất để tổng $3$ số ghi trên $3$ quả cầu là số lẻ bằng $\\dfrac{1}{2}$",
    "answer": false
   },
   {
    "text": "Xác xuất để tổng $3$ số ghi trên $3$ quả cầu là số chia hết cho $4$ bằng $\\dfrac{323}{1\\,290}$",
    "answer": true
   }
  ],
  "explain": "Số cách lấy ngẫu nhiên $3$ quả cầu từ $45$ quả cầu là  $n(\\Omega) = \\mathrm{C}_{45}^3 = 14\\,190$.  <br>- Trong tập hợp các số $\\{1; 2; \\ldots; 45\\}$ có tập số chẵn là $\\{2; 4; \\dots; 44\\}$ gồm $\\dfrac{44-2}{2} + 1 = 22$ số.<br>  Số cách lấy $3$ quả cầu từ nhóm $22$ quả cầu số chẵn là  $\\mathrm{C}_{22}^3 = 1\\,540$.<br>- Gọi $A$ là biến cố “ tích $3$ số ghi trên $3$ quả cầu là một số chia hết cho $8$”.<br>  Xét các tập hợp sau  <br>- $S_0=\\{1; 3; \\ldots; 45\\}$ có $23$ số (số lẻ).<br>- $S_1=\\{2; 6; 10; \\ldots; 42\\}$ có $11$ số (số chia hết cho $2$ nhưng không chia hết cho $4$).<br>- $S_2=\\{4; 12; 20; 28; 36; 44\\}$ có $6$ số (số chia hết cho $4$ nhưng không chia hết cho $8$).  Gọi $a$, $b$, $c$ là các số mà tích của chúng không chia hết cho $8$.<br>  Xét các trường hợp  <br>- [$\\bullet$ TH 1.]<br>- $(a,b,c)\\in S_0$ có $\\mathrm{C}_{23}^3 = 1\\,771$ cách.<br>- $a,b\\in S_0$; $c\\in S_1$ có $\\mathrm{C}_{23}^2 \\cdot \\mathrm{C}_{11}^1 = 2\\,783$ cách.<br>- $a,b\\in S_0$; $c\\in S_2$ có $\\mathrm{C}_{23}^2 \\cdot \\mathrm{C}_{6}^1 = 1\\,518$ cách.<br>- $a\\in S_0$; $b,c\\in S_1$ có $\\mathrm{C}_{23}^1 \\cdot \\mathrm{C}_{11}^2 = 1\\,265$ cách.  Tổng số cách để tích không chia hết cho $8$ là   \\[n\\left(\\overline{A}\\right)=1\\,771 + 2\\,783 + 1\\,518 + 1\\,265 = 7\\,337.\\]  Vậy  $\\mathrm{P}(A) = 1-\\mathrm{P}\\left(\\overline{A}\\right)=1-\\dfrac{n\\left(\\overline{A}\\right)}{n(\\Omega)}=1-\\dfrac{7\\,337}{14\\,190} = \\dfrac{623}{1\\,290}$.<br>- Gọi $B$ là biến cố “ tổng $3$ số ghi trên $3$ quả cầu là số lẻ”.<br>  Vì tổng $3$ số là lẻ khi cả $3$ số đều lẻ hoặc $1$ số lẻ, $2$ số chẵn nên  \\[ n(B) = \\mathrm{C}_{23}^3 + \\mathrm{C}_{23}^1 \\cdot \\mathrm{C}_{22}^2 = 7\\,084.\\]  Vậy xác suất cần tìm là  $\\mathrm{P}(B) = \\dfrac{n(B)}{n(\\Omega)}=\\dfrac{7\\,084}{14\\,190} = \\dfrac{322}{645}$.<br>- Gọi $D$ là biến cố “ tổng $3$ số ghi trên $3$ quả cầu là số chia hết cho $4$”.<br>  Xét các nhóm số sau  <br>- $T_0=\\{4; 8; \\ldots; 44\\}$ có $11$ số (số chia hết cho $4$).<br>- $T_1=\\{1; 5; \\ldots; 45\\}$ có $12$ số (số chia $4$ dư $1$).<br>- $T_2=\\{2; 6; \\ldots; 42\\}$ có $11$ số (số chia $4$ dư $2$).<br>- $T_3=\\{3; 7; \\ldots; 43\\}$ có $11$ số (số chia $4$ dư $3$).  Đặt $x$, $y$, $z$ là các số được chọn.<br>  Xét các trường hợp sau  <br>- [$\\bullet$ TH 1.]<br>- $(x;y;z)\\in T_0$ có $\\mathrm{C}_{11}^3 = 165$ cách.<br>- $x\\in T_0$; $y\\in T_1$; $z\\in T_3$ có $\\mathrm{C}_{11}^1 \\cdot \\mathrm{C}_{12}^1 \\cdot \\mathrm{C}_{11}^1 = 1\\,452$ cách.<br>- $x\\in T_0$; $y,z\\in T_2$ có $\\mathrm{C}_{11}^1 \\cdot \\mathrm{C}_{11}^2 = 605$ cách.<br>- $x,y\\in T_1$; $z\\in T_2$ có $\\mathrm{C}_{12}^2 \\cdot \\mathrm{C}_{11}^1= 726$ cách.<br>- $x,y\\in T_3$; $z\\in T_2$ có $\\mathrm{C}_{11}^2 \\cdot \\mathrm{C}_{11}^1 = 605$ cách.  Do đó $n(D) = 165 + 1\\,452 + 605 + 726 + 605 = 3\\,553$.<br>  Vậy xác suất cần tìm là   $\\mathrm{P}(D) = \\dfrac{n(D)}{n(\\Omega)}=\\dfrac{3\\,553}{14\\,190} = \\dfrac{323}{1290}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D021DS2",
  "question": "Trong đề kiểm tra $15$ phút môn Toán của lớp $11$A có $20$ câu trắc nghiệm. Mỗi câu trắc   nghiệm có $4$ phương án trả lời, trong đó chỉ có một phương án trả lời đúng. Biết rằng mỗi câu trả lời đúng được $0{,}5$ điểm. Nam giải chắc chắn đúng $10$ câu, $10$ câu còn lại lựa chọn ngẫu nhiên đáp án. Biết rằng mỗi câu trả lời đúng được $0{,}5$ điểm, trả lời sai không bị trừ điểm. Khi đó:",
  "subQuestions": [
   {
    "text": "Xác suất để Nam trả lời sai $1$ câu là $\\dfrac{1}{4}$",
    "answer": false
   },
   {
    "text": "Xác suất để Nam trả lời đúng hết $20$ câu là $\\left(\\dfrac{1}{4} \\right)^{20}$",
    "answer": false
   },
   {
    "text": "Xác suất để Nam đạt đúng $8$ điểm là $\\mathrm{C}_{10}^6\\cdot \\left( \\dfrac{1}{4} \\right)^6\\cdot \\left( \\dfrac{3}{4} \\right)^4$",
    "answer": true
   },
   {
    "text": "Xác suất để Nam đạt từ $9$ điểm trở lên lớn hơn $0{,}0004$",
    "answer": true
   }
  ],
  "explain": "<br>- Xác suất để Nam trả lời sai $1$ câu là $\\dfrac{3}{4}$.<br>- Nam giải chắc chắn đúng $10$ câu nên Nam cần trả lời đúng thêm $10$ câu.<br>  Xác suất là $\\mathrm{C}_{10}^{10}\\cdot \\left(\\dfrac{1}{4} \\right)^{10}\\cdot \\left(\\dfrac{3}{4} \\right)^0 =\\left(\\dfrac{1}{4} \\right)^{10}$.<br>- Để Nam đạt được đúng $8$ điểm thì trong $10$ câu còn lại lựa chọn ngẫu nhiên đáp án phải đúng $6$ câu nữa ( vì đã có $5$ điểm chắc chắn), sai $4$ câu.<br>  Xác suất khi đánh ngẫu nhiên đúng một câu trắc nghiệm là $\\dfrac{1}{4}$.<br>  Xác suất khi đánh ngẫu nhiên sai một câu trắc nghiệm là $\\dfrac{3}{4}$.<br>  Chọn $6$ câu trắc nghiệm để đáp đúng từ $10$ câu trắc nghiệm có $\\mathrm{C}_{10}^6$ (cách).<br>  Vậy xác suất để Nam đạt được đúng $8$ điểm là $\\mathrm{C}_{10}^6\\cdot \\left( \\dfrac{1}{4} \\right)^6\\cdot \\left( \\dfrac{3}{4} \\right)^4$.<br>- Để đạt $9$ điểm, Nam cần trả lời đúng thêm $8$ câu. Xác suất là $\\mathrm{C}_{10}^8\\cdot \\left( \\dfrac{1}{4} \\right)^8\\cdot \\left( \\dfrac{3}{4} \\right)^2$.<br>  Để đạt $9{,}5$ điểm, Nam cần trả lời đúng thêm $9$ câu. Xác suất là $\\mathrm{C}_{10}^9\\cdot \\left(\\dfrac{1}{4} \\right)^9\\cdot \\left(\\dfrac{3}{4} \\right)^1$.<br>  Để đạt $10$ điểm, Nam cần trả lời đúng thêm $10$ câu. Xác suất là $\\mathrm{C}_{10}^{10}\\cdot \\left(\\dfrac{1}{4} \\right)^{10}\\cdot \\left(\\dfrac{3}{4} \\right)^0$.<br>  Như vậy, xác suất để đạt từ $9$ điểm trở lên là tổng xác suất đạt $9$ điểm, $9{,}5$ điểm , $10$ điểm và bằng $\\mathrm{C}_{10}^8\\cdot \\left(\\dfrac{1}{4} \\right)^8\\cdot \\left(\\dfrac{3}{4}\\right)^2$+$\\mathrm{C}_{10}^9\\cdot \\left(\\dfrac{1}{4} \\right)^9\\cdot \\left(\\dfrac{3}{4}\\right)^1$+$\\mathrm{C}_{10}^{10}\\cdot \\left(\\dfrac{1}{4} \\right)^{10}\\cdot \\left(\\dfrac{3}{4}\\right)^0 \\approx 0{,}0004158&gt;0{,}0004$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D021DS3",
  "question": "Cuối tuần bạn Bảo được cha chở đi mua sách tại một tiệm sách cũ. Bảo chọn mua $12$ quyển (không có hai quyển nào giống nhau), trong đó có $7$ quyển thuộc thể loại Khoa Học Tự Nhiên và $5$ quyển còn lại thuộc thể loại Khoa Học Xã Hội. Trước khi tính tiền sách cho Bảo, cha chọn ngẫu nhiên $3$ quyển trong $12$ quyển đã được Bảo chọn mua để kiểm tra nội dung trong sách có thực sự phù hợp với Bảo hay không.",
  "subQuestions": [
   {
    "text": "Nếu $\\mathrm{P}_a$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra đều thuộc thể loại Khoa Học Xã Hội thì $11\\mathrm{P}_a=1$",
    "answer": false
   },
   {
    "text": "Nếu $\\mathrm{P}_b$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra có đúng một quyển thuộc thể loại Khoa Học Tự Nhiên thì $22\\mathrm{P}_b=7$",
    "answer": true
   },
   {
    "text": "Nếu $\\mathrm{P}_c$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra có đúng hai quyển thuộc thể loại Khoa Học Tự Nhiên thì $44\\mathrm{P}_c=21$",
    "answer": true
   },
   {
    "text": "Nếu $\\mathrm{P}_d$ là xác suất để $3$ quyển sách được cha của Bảo chọn để kiểm tra có đủ hai thể loại Khoa Học Tự Nhiên và Khoa Học Xã Hội thì $44\\mathrm{P}_d=35$",
    "answer": true
   }
  ],
  "explain": "<br>- Chọn $3$ quyển sách trong $12$ quyển sách, ta có số cách chọn là $\\mathrm{C}_{12}^3=220$.<br>  Chọn $3$ quyển sách đều thuộc thể loại khoa học xã hội trong $5$ quyển có số cách chọn là $\\mathrm{C}_5^3=10$.<br>  Vậy $\\mathrm{P}_a=\\dfrac{10}{220}=\\dfrac{1}{22} \\Rightarrow 11\\mathrm{P}_a=\\dfrac{1}{2}$.<br>- Số cách chọn $3$ quyển sách có đúng một quyển thuộc thể loại Khoa Học Tự Nhiên là $\\mathrm{C}_7^1\\cdot \\mathrm{C}_5^2=70$.<br>  Vậy $\\mathrm{P}_b=\\dfrac{70}{220}=\\dfrac{7}{22} \\Rightarrow 22\\mathrm{P}_b=7$.<br>- Số cách chọn để $3$ quyển sách có đúng hai quyển thuộc thể loại Khoa Học Tự Nhiên là $\\mathrm{C}_7^2\\cdot \\mathrm{C}_5^1=105$.<br>  Vậy $\\mathrm{P}_c=\\dfrac{105}{220}=\\dfrac{21}{44} \\Rightarrow 44\\mathrm{P}_c=21$.<br>- Số cách chọn $3$ quyển sách có đủ hai thể loại Khoa Học Tự Nhiên và Khoa Học Xã Hội $\\mathrm{C}_7^2\\cdot \\mathrm{C}_5^1+\\mathrm{C}_7^1\\cdot \\mathrm{C}_5^2=175$.<br>  Vậy $\\mathrm{P}_d=\\dfrac{175}{220}=\\dfrac{35}{44} \\Rightarrow 44\\mathrm{P}_d=35$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111DS1",
  "question": "Xét các câu sau đây  <br>- (1) Ở đây đẹp quá!<br>- (2) Phương trình $x^2-3 x+1=0$ vô nghiệm.<br>- (3) 16 không là số nguyên tố.<br>- (4) Số $\\pi$ có lớn hơn $3$ hay không?  Trong mỗi ý a,b,c,d ở mỗi câu, thí sinh chọn đúng hoặc sai.",
  "subQuestions": [
   {
    "text": "Trong các câu trên có $3$ mệnh đề",
    "answer": false
   },
   {
    "text": "Trong các câu trên có $2$ câu không phải là mệnh đề",
    "answer": true
   },
   {
    "text": "Câu (3) là mệnh đề",
    "answer": true
   },
   {
    "text": "Câu (1), (4) không phải là mệnh đề",
    "answer": true
   }
  ],
  "explain": "<br>- Các câu mệnh đề là (2), (3). Suy ra mệnh đề sai.<br>- Hai câu không phải mệnh đề là (1) và (4). Suy ra mệnh đề đúng.<br>- Câu (3) là mệnh đề. Suy ra mệnh đề đúng.<br>- Câu (1), (4) không phải là mệnh đề. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111DS2",
  "question": "Xét các câu sau đây:  <br>- (1) $5$ là số lẻ.<br>- (2) $2+7&lt;\\pi$.<br>- (3) $\\dfrac{\\sqrt{3}}{2}$ có phải là số hữu tỉ không?<br>- (4) Vịnh Hạ Long là di sản thiên nhiên thế giới.<br>- (5) Trời hôm nay đẹp quá!  Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.",
  "subQuestions": [
   {
    "text": "Các câu (1), (4) là mệnh đề",
    "answer": true
   },
   {
    "text": "Trong các câu trên có nhiều hơn $2$ câu là mệnh đề đúng",
    "answer": false
   },
   {
    "text": "Các câu (1) (2) là mệnh đề toán học",
    "answer": true
   },
   {
    "text": "Các câu (2), (3) không phải là mệnh đề",
    "answer": false
   }
  ],
  "explain": "<br>- Câu (1), (4) là mệnh đề. Suy ra mệnh đề đúng.<br>- Chỉ có hai mệnh đề đúng là (1) và (4). Suy ra mệnh đề sai.<br>- Câu (1) (2) là mệnh đề toán học. Suy ra mệnh đề sai.<br>- Câu (2) là mệnh đề và câu (3) không phải là mệnh đề. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112DS3",
  "question": "Với mỗi mệnh đề sau, em hãy chọn Đ (đúng) hoăc S (sai).",
  "subQuestions": [
   {
    "text": "Một tam giác cân thì hai góc đều bằng $60^{\\circ}$",
    "answer": true
   },
   {
    "text": "Tích của hai số tự nhiên là một số lẻ khi và chỉ khi cả hai số đều là số lẻ",
    "answer": true
   },
   {
    "text": "1 là số nguyên tố lẻ nhỏ nhất",
    "answer": false
   },
   {
    "text": "Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi",
    "answer": true
   }
  ],
  "explain": "<br>- Một tam giác cân thì ba góc đều bằng $60^{\\circ}$. Suy ra mệnh đề đúng.<br>- Tích của hai số tự nhiên là một số lẻ khi và chỉ khi cả hai số đều là số lẻ. Suy ra mệnh đề đúng.<br>- $1$ là không phải số nguyên tố. Suy ra mệnh đề sai.<br>- Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111DS4",
  "question": "Cho các phát biểu sau: $x \\in \\mathbb{Z}, 2 x&lt;3~~(1)$; $x \\in \\mathbb{Z}, x^4-x^2&lt;0 ~~(2)$. Với mỗi khẳng định sau em hãy chọn Đ (đúng) hoặc S (sai).",
  "subQuestions": [
   {
    "text": "(1) là $1$ mệnh đề chứa biến",
    "answer": true
   },
   {
    "text": "Khi $x=1$ thì (1) trở thành mệnh đề đúng",
    "answer": true
   },
   {
    "text": "Khi $x=-2$ thì (2) trở thành mệnh đề đúng",
    "answer": true
   },
   {
    "text": "Không có số nguyên $x$ nào đế cả (1) và (2) trở thành các mệnh đề đúng",
    "answer": false
   }
  ],
  "explain": "<br>- (1) là $1$ mệnh đề chứa biến $x$. Suy ra mệnh đề đúng.<br>- Khi $x=1$ thì (1) trở thành $1&lt;3$ đúng. Suy ra mệnh đề đúng.<br>- Khi $x=-2$ thì (2) trở thành $(-2)^4-(-2)^2&gt;0$. Suy ra mệnh đề đúng.<br>- Kkhi $x=-2$ thì (1) và (2) đều đúng. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112DS5",
  "question": "Cho $P(n)=n^2-6 n+10$ với $n$ là số tự nhiên. Xét tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "$P(1)$ chia hết cho $3$",
    "answer": false
   },
   {
    "text": "$P(2)$ là số lẻ",
    "answer": false
   },
   {
    "text": "$P(2 n)&gt;P(n)-1$ với $n=1$",
    "answer": false
   },
   {
    "text": "Tồn tại số tự nhiên $n$ thỏa mãn điều kiện $\\dfrac{2 P(n)-1}{n-3}$ là số nguyên",
    "answer": true
   }
  ],
  "explain": "<br>- $P(1)=5$ không chia hết cho 3. Suy ra mệnh đề sai.<br>- $P(2)=2$ là số chẵn. Suy ra mệnh đề sai.<br>- Với $n=1$, $P(2n)=P(2)=2;P(n)-1=P(2)-1=1$. Suy ra mệnh đề đúng.<br>- $\\dfrac{2 P(n)-1}{n-3}=\\dfrac{2(n-3)^2+1}{n-3}=2(n-3)+\\dfrac{1}{n-3}$. Với $n=4$ thì $\\dfrac{2 P(n)-1}{n-3}$ là số nguyên. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D116DS6",
  "question": "Lớp $10 B$ có $7$ học sinh giỏi Toán, $5$ học sinh giỏi Lý, $6$ học sinh giỏi Hóa, $3$ học sinh giỏi cả Toán và Lý, $4$ học sinh giỏi cả Toán và Hóa, $2$ học sinh giỏi cả Lý và Hóa, $1$ học sinh giỏi cả ba môn Toán, Lý, Hóa và không có học sinh nào không giỏi một trong ba môn Toán, Lý, Hóa.",
  "subQuestions": [
   {
    "text": "Lớp $10B$ không có học sinh giỏi Toán",
    "answer": false
   },
   {
    "text": "Lớp $10B$ không có học sinh giỏi cả ba môn Toán, Lý, Hóa",
    "answer": false
   },
   {
    "text": "Số học sinh giỏi Toán và Lý hoặc giỏi Toán và Hóa của lớp $10 B$ không bằng $7$",
    "answer": true
   },
   {
    "text": "Số học sinh giỏi ít nhất một môn trong ba môn Toán, Lý, Hóa của lớp $10 B$ không lớn hơn $10$",
    "answer": false
   }
  ],
  "explain": "<br>- Có $7$ học sinh giỏi Toán. Suy ra mệnh đề sai.<br>- Có $1$ học sinh giỏi cả ba môn Toán, Lý, Hóa. Suy ra mệnh đề sai.<br>- Số học sinh giỏi Toán và Lý hoặc giỏi Toán và Hóa của lớp $10 B$ là $1+2+1+3+1+1+1=10$.  <br><img src=\"data/10/0D1/im0D11/dlts_sbh_ds10cd13_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra mệnh đề đúng.<br>- Số học sinh giỏi ít nhất một môn trong ba môn Toán, Lý, Hóa của lớp $10 B$ bằng $11$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D116DS7",
  "question": "Một số nguyên dương $n$ được gọi là ``số hoàn hảo'' nếu số đó bằng tổng các ước nguyên dương thực sự của nó. Ví dụ số $6$ là một số hoàn hảo vì các ước nguyên dương thực sự của $6$ là $1 ; 2 ; 3$ và $6=1+2+3$.",
  "subQuestions": [
   {
    "text": "Không có số hoàn hảo nào nhỏ hơn $10$",
    "answer": false
   },
   {
    "text": "Số $10$ là một số không hoàn hảo",
    "answer": true
   },
   {
    "text": "Tất cả các số nguyên tố đều là các số không hoàn hảo",
    "answer": true
   },
   {
    "text": "Số $2020$ không phải là một số hoàn hảo",
    "answer": true
   }
  ],
  "explain": "<br>- Số $6$ là một số hoàn hảo. Suy ra mệnh đề sai.<br>- Ta có $10\\ne 1+2+5$. Suy ra mệnh đề đúng.<br>- Số nguyên tố chỉ có một ước thực sự là số $1$. Suy ra mệnh đề đúng.<br>- Ta có $2020\\ne 1+2+5+101$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111DS8",
  "question": "Cho hai mệnh đề sau:<br>  $P$ : ``Hình bình hành có một góc vuông là hình chữ nhật''.<br>  $Q$ : ``Số 7 là hợp số''.",
  "subQuestions": [
   {
    "text": "Mệnh đề $P$ là mệnh đề đúng",
    "answer": true
   },
   {
    "text": "Mệnh đề $Q$ là mệnh đề đúng",
    "answer": false
   },
   {
    "text": "Mệnh đề $P \\Rightarrow Q$ là mệnh đề đúng",
    "answer": false
   },
   {
    "text": "Mệnh đề $Q \\Rightarrow P$ là mệnh đề sai",
    "answer": true
   }
  ],
  "explain": "<br>- Mệnh đề $P$ là mệnh đề đúng. Suy ra mệnh đề đúng.<br>- Số 7 là số nguyên tố. Suy ra mệnh đề sai.<br>- Vì $P$ đúng và $Q$ sai nên $P \\Rightarrow Q$ là mệnh đề sai. Suy ra mệnh đề sai.<br>- Vì $Q$ sai và $Q$ đúng nên $Q \\Rightarrow P$ là mệnh đề đúng. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115DS9",
  "question": "Cho các mệnh đề: $P: ``\\exists x \\in \\mathbb{R}: x&gt;x^2$ '' và $Q: `` \\forall x \\in \\mathbb{R}: x^2&gt;0$ ''. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$P$ là mệnh đề đúng",
    "answer": true
   },
   {
    "text": "$\\overline{Q}$ là mệnh đề sai",
    "answer": false
   },
   {
    "text": "$P \\Rightarrow Q$",
    "answer": false
   },
   {
    "text": "$(\\overline{P}\\Rightarrow Q) \\Rightarrow (P \\Rightarrow \\overline{Q}$)",
    "answer": false
   }
  ],
  "explain": "<br>- Với $x=0,1$ để $x&gt;x^2$ nên $P$ là mệnh đề đúng. Suy ra mệnh đề đúng.<br>- Với $x=0$ thì $0^2=0$ nên $Q$ là mệnh đề sai nên $\\overline{Q}$ là mệnh đề đúng. Suy ra mệnh đề sai.<br>- Vì $P$ đúng, $Q$ sai nên $P \\Rightarrow Q$ là mệnh đề sai.<br>- vì $\\overline{P} \\Rightarrow Q$ đúng, $P \\Rightarrow \\overline{Q}$ sai nên $(\\overline{P}\\Rightarrow Q) \\Rightarrow (P \\Rightarrow \\overline{Q}$ mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112DS10",
  "question": "Cho hai số nguyên $a$ và $b$. Xét tính đúng, sai của các mệnh đề sau:",
  "subQuestions": [
   {
    "text": "$a^2&gt;b^2 \\Leftrightarrow a&gt;b$",
    "answer": false
   },
   {
    "text": "$a^3&gt;b^3 \\Leftrightarrow a&gt;b$",
    "answer": true
   },
   {
    "text": "$a+b$ chia hết cho $3$ khi và chỉ khi cả hai số $a$ và $b$ cùng chia hết cho $3$",
    "answer": false
   },
   {
    "text": "$a+b&gt;2$ khi và chỉ khi có ít nhất một trong hai số $a, b$ lớn hơn $1$",
    "answer": false
   }
  ],
  "explain": "<br>- $(-3)^2&gt;(-2)^2$ nhưng $-3&lt;-2$. Suy ra mệnh đề sai.<br>- $a^3&gt;b^3 \\Leftrightarrow a&gt;b$. Suy ra mệnh đề đúng.<br>- Với $a=1, b=2$ không chia hết cho $3$ nhưng $a+b$ chia hết cho $3$. Suy ra mệnh đề sai.<br>- Nếu $a+b&gt;2$ thì có ít nhất một trong hai số $a, b$ lớn hơn 1. Ngược lại với $a=2;b=-1$ thì $a+b=1$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112DS11",
  "question": "Cho tứ giác $A B C D$.",
  "subQuestions": [
   {
    "text": "Tứ giác $A B C D$ là hình bình hành khi và chỉ khi nó có hai đường chéo bằng nhau",
    "answer": false
   },
   {
    "text": "Tứ giác $A B C D$ là hình bình hành khi và chỉ khi nó có hai đường chéo cắt nhau tại trung điểm mỗi đường",
    "answer": true
   },
   {
    "text": "Tứ giác $A B C D$ là hình vuông khi và chỉ khi tứ giác là hình chữ nhật có hai cạnh kề bằng nhau",
    "answer": true
   },
   {
    "text": "Tứ giác $A B C D$ là hình vuông khi và chỉ khi nó có hai đường chéo vuông góc với nhau",
    "answer": false
   }
  ],
  "explain": "<br>- Tứ giác $A B C D$ là hình bình hành thì nó có hai đường chéo bằng nhau có thể không bằng nhau. Suy ra mệnh đề sai.<br>- Tứ giác $A B C D$ là hình bình hành khi và chỉ khi nó có hai đường chéo cắt nhau tại trung điểm mỗi đường. Suy ra mệnh đề đúng.<br>- Tứ giác $A B C D$ là hình vuông khi và chỉ khi tứ giác là hình chữ nhật có hai cạnh kề bằng nhau. Suy ra mệnh đề sai.<br>- Tứ giác có hai đường chéo vuông góc với nhau chưa chắc là hình vuông. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115DS12",
  "question": "Cho hai mệnh đề sau: $A:$ ``$\\forall n \\in \\mathbb{N}, n^2&gt;n$.'' và $B:$ ``$\\exists n \\in \\mathbb{N}: n^2+3 n$ chia hết cho 3''.",
  "subQuestions": [
   {
    "text": "Mệnh đề $A$ sai",
    "answer": true
   },
   {
    "text": "Mệnh đề phủ định của mệnh đề $A$ là $\\overline{A}$ : ``$\\forall n \\in \\mathbb{N}, n^2 \\leq n$''",
    "answer": false
   },
   {
    "text": "Mệnh đề phủ định của mệnh đề $B$ là $\\overline{B}:$ ``$\\forall n \\in \\mathbb{N}: n^2+3 n$ không chia hết cho $3$''",
    "answer": true
   },
   {
    "text": "Mệnh đề $\\overline{B}$ là mệnh đề đúng",
    "answer": false
   }
  ],
  "explain": "<br>- Với $n=1$ thì $1^2=1$. Suy ra mệnh đề $A$ sai.<br>- Mệnh đề phủ định của mệnh đề $A$ là $\\overline{A}$ : ``$\\exists n \\in \\mathbb{N}, n^2 \\leq n$''. Suy ra mệnh đề sai.<br>- Mệnh đề phủ định của mệnh đề $B$ là $\\overline{B}:$ ``$\\forall n \\in \\mathbb{N}: n^2+3 n$ không chia hết cho $3$''. Suy ra mệnh đề đúng.<br>- Mệnh đề $B$ là mệnh đề đúng nên mệnh đề $\\overline{B}$ là mệnh đề sai. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115DS13",
  "question": "Cho các mệnh đề: $A$ : ``$\\exists n \\in \\mathbb{Z}, n^2-8=0 \", B: \" \\forall x \\in \\mathbb{R},(x-2)^2 \\neq x-2$'',<br>  $C: \" \\exists n \\in \\mathbb{N}, n^2+11 n+2$ chia hết cho $11$ \". Trong các câu khẳng định sau câu nào đúng?",
  "subQuestions": [
   {
    "text": "Mệnh đề $A$ sai",
    "answer": true
   },
   {
    "text": "Mệnh $B$ đúng",
    "answer": false
   },
   {
    "text": "Mệnh đề phủ định của mệnh đề $C$ là: $\\overline{C}: ``\\exists n \\in \\mathbb{N}, n^2+11 n+2$ không chia hết cho $11$''",
    "answer": false
   },
   {
    "text": "Mệnh đề $\\overline{C}$ đúng",
    "answer": false
   }
  ],
  "explain": "<br>- $n^2-8=0\\Leftrightarrow n=2\\sqrt{2}\\notin\\mathbb{Z}$. Do đó Mệnh đề $A$ sai. Suy ra mệnh đề đúng.<br>- Với $x=2$ thì $(2-2)^2=2-2 \\Rightarrow$ Mệnh $B$ sai. Suy ra mệnh đề sai.<br>- Mệnh đề phủ định của mệnh đề $C$ là $\\overline{C}: ``\\forall n \\in \\mathbb{N}, n^2+11 n+2$ không chia hết cho $11$''. Suy ra mệnh đề sai.<br>- Với $n=3$ thì $n^2+11 n+2$ chia hết cho $11 \\Rightarrow$ mệnh đề $C$ là đúng.<br> Do đó $\\overline{C}$ là mệnh đề sai. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115DS14",
  "question": "Cho các mệnh đề: $A: ``\\forall x \\in \\mathbb{R}: x-3&gt;0$''; $B: ``\\exists n \\in \\mathbb{Z}: \\sqrt{2^n+1}$ '' là số nguyên;<br>  $C: ``\\exists n \\in \\mathbb{N}, n^2 ~\\vdots ~ 9 \\Rightarrow n~ \\vdots~ 9$''. Trong các câu khẳng định sau câu nào đúng?",
  "subQuestions": [
   {
    "text": "Mệnh đề $\\mathrm{A}$ đúng",
    "answer": false
   },
   {
    "text": "Mệnh đề phủ định của $\\mathrm{A}$ là: $\\overline{A}: \\exists x \\in \\mathbb{R}: x-3&lt;0$",
    "answer": false
   },
   {
    "text": "Mệnh đề $\\mathrm{B}$ sai",
    "answer": false
   },
   {
    "text": "Mệnh đề $\\mathrm{C}$ đúng",
    "answer": true
   }
  ],
  "explain": "<br>- Mệnh đề $\\mathrm{A}$ sai. Suy ra mệnh đề sai.<br>- Mệnh đề phủ định của $\\mathrm{A}$ là: $\\overline{A}: \\exists x \\in \\mathbb{R}: x-3\\le 0$. Suy ra mệnh đề sai.<br>- Với $n=3$, $\\sqrt{2^n+1}=3$ là số nguyên. Mệnh đề $\\mathrm{B}$ đúng. Suy ra mệnh đề sai.<br>- Với $n=9$ thì $n^2 ~\\vdots ~ 9$ và $n~ \\vdots~ 9 \\Rightarrow C$ là mệnh đề đúng. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115DS15",
  "question": "Xác định tính Đúng - Sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "$\\forall x \\in \\mathbb{R}, x^2-x+1&gt;0$",
    "answer": true
   },
   {
    "text": "$\\exists x \\in \\mathbb{Q}, x^2=3$",
    "answer": false
   },
   {
    "text": "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x+y^2 \\geq 0$",
    "answer": true
   },
   {
    "text": "$\\exists n \\in \\mathbb{N}, n(n+11)+6$ chia hết cho $11$",
    "answer": true
   }
  ],
  "explain": "<br>- $\\forall x \\in \\mathbb{R}, x^2-x+1=\\left(x-\\dfrac{1}{2}\\right)^2+\\dfrac{3}{4}&gt;0$ (đúng). Suy ra mệnh đề đúng.<br>- $x^2=3\\Leftrightarrow x=\\pm\\sqrt{3} \\notin\\mathbb{Q}$. Suy ra mệnh đề sai.<br>- Với $x=1, \\forall y \\in \\mathbb{R}, x+y^2 \\geq 0$ (đúng). Suy ra mệnh đề đúng.<br>- Với $n=7$ thì $n(n+11)+6=132$ chia hết cho $11$ (đúng). Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112DS12",
  "question": "Cho các câu sau:<br>  $P$: \\text{“}Số tự nhiên $n$ có chữ số tận cùng bằng 5\\text{”}.<br>  $Q$: \\text{“}Số tự nhiên $n$ chia hết cho 5\\text{”}.",
  "subQuestions": [
   {
    "text": "Mệnh đề $P \\Rightarrow Q$ được phát biểu là \\text{“}Nếu số tự nhiên $n$ có chữ số tận cùng bằng 5 thì $n$ chia hết cho 5\\text{”}",
    "answer": true
   },
   {
    "text": "Trong mệnh đề $P \\Rightarrow Q$ thì $P$ là điều kiện đủ để có $Q$",
    "answer": true
   },
   {
    "text": "Mệnh đề $P \\Rightarrow Q$ là một mệnh đề sai",
    "answer": false
   },
   {
    "text": "Trong mệnh đề $P \\Rightarrow Q$ thì $Q$ là điều kiện cần và đủ để có $P$",
    "answer": false
   }
  ],
  "explain": "<br>- Đúng. Mệnh đề $P \\Rightarrow Q$ được phát biểu là \\text{“}Nếu số tự nhiên $n$ có chữ số tận cùng bằng 5 thì $n$ chia hết cho 5\\text{”}.<br>- Đúng. Trong mệnh đề $P \\Rightarrow Q$ thì $P$ là điều kiện đủ để có $Q$<br>- Sai. Số tự nhiên $n$ có chữ số tận cùng bằng $5$ thì số đó chia hết cho $5$.<br>- Sai. Trong mệnh đề $P \\Rightarrow Q$ thì $Q$ là điều kiện cần để có $P$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121DS1",
  "question": "Cho tập hợp $A$ gồm các số nguyên tố có một chữ số và tập hợp $B=\\left\\{x \\in \\mathbb{N}\\mid x^2-2 x-3=0\\right\\}$.",
  "subQuestions": [
   {
    "text": "Các số tự nhiên lẻ có một chữ số đều thuộc tập hợp $A$",
    "answer": false
   },
   {
    "text": "$B=\\{-1 ; 3\\}$",
    "answer": false
   },
   {
    "text": "Tập hợp $A$ có $4$ phần tử",
    "answer": true
   },
   {
    "text": "Số phần tử của tập $A$ gấp $4$ lần số phần tử của tập hợp $B$",
    "answer": true
   }
  ],
  "explain": "<br>- $1\\notin A$. Suy ra mệnh đề sai.<br>- $B=\\{3\\}$. Suy ra mệnh đề sai.<br>- $A=\\{2;3;5;7\\}$. Suy ra mệnh đề đúng.<br>- Số phần tử của tập $A$ gấp $4$ lần số phần tử của tập hợp $B$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS2",
  "question": "Cho tập hợp $A=\\left\\{x \\in \\mathbb{R}\\mid\\left(x^2-6 x+5\\right)(x-m)=0\\right\\}$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$1 \\in A$",
    "answer": true
   },
   {
    "text": "Tập hợp $A$ có ba phần tử với mọi giá trị của tham số $m$",
    "answer": false
   },
   {
    "text": "Có hai giá trị của tham số $m$ để tập hợp $A$ có đúng hai phần tử",
    "answer": true
   },
   {
    "text": "Có hai giá trị của tham số $m$ để tổng tất cả các phần tử của tập $A$ bằng 6",
    "answer": false
   }
  ],
  "explain": "<br>- $x^2-6 x+5=0\\Leftrightarrow x=1;x=5 \\Rightarrow 1 \\in A$. Suy ra mệnh đề đúng.<br>- $A$ có $2$ hoặc $3$ phần tử. Suy ra mệnh đề sai.<br>- Với $m=1$ hoặc $m=5$ thì $A=\\{1;5\\}$. Suy ra mệnh đề đúng.<br>- Có $3$ giá trị $m=1;m=5;m=0$ để tổng tất cả các phần tử của tập $A$ bằng $6$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS3",
  "question": "Cho hai tập hợp $A=\\left\\{n \\in \\mathbb{N}\\mid \\left(n^2-2 n-3\\right)\\left(n^2-1\\right)=0\\right\\}$ và $B=\\left\\{x \\in \\mathbb{R}\\mid 2 x^2-x+3=0\\right\\}$.  Trong mỗi ý a), b), c), d) thí sinh chọn đúng hay sai.",
  "subQuestions": [
   {
    "text": "Tập hợp $A$ có $3$ phần tử",
    "answer": false
   },
   {
    "text": "Số tập hợp con của tập hợp $A$ là $4$ tập hợp",
    "answer": true
   },
   {
    "text": "Tập hợp $B$ là tập hợp rỗng",
    "answer": true
   },
   {
    "text": "Tổng các phần tử của tập hợp $A$ và tập hợp $B$ là $3$",
    "answer": false
   }
  ],
  "explain": "<br>- $A=\\{3;1\\}$. Suy ra mệnh đề sai.<br>- $A$ có 4 tập con. Suy ra mệnh đề đúng.<br>- $2x^2-x+3=0$ vô nghiệm do đó tập hợp $B$ là tập hợp rỗng. Suy ra mệnh đề đúng.<br>- Tổng các phần tử của tập hợp $A$ và tập hợp $B$ là 2. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS4",
  "question": "Trong mỗi ý a,b,c,d ở mỗi câu, thí sinh chọn đúng hoặc sai.",
  "subQuestions": [
   {
    "text": "Tập hợp $(-\\infty ;-3) \\backslash[-5 ; 2)=(-\\infty ;-5)$",
    "answer": true
   },
   {
    "text": "Cho $M=[-3 ; 6]$ và $N=(-\\infty ;-2) \\cup(3 ;+\\infty)$. Khi đó $M \\cap N=(-\\infty ;-2) \\cup(3 ; 6]$",
    "answer": false
   },
   {
    "text": "Cho $X=(-4 ; 3)$, $Y=\\{x \\in \\mathbb{R}\\mid 2 x+4&gt;0, x&lt;5\\}$, $ Z=\\{x \\in \\mathbb{R}\\mid(x+3)(x-4)=0\\}$. Khi đó $Z \\subset X \\cup Y$",
    "answer": false
   },
   {
    "text": "Cho số thực $a&lt;0$. Điều kiện cần và đủ để $(-\\infty ; 9 a) \\cap\\left(\\dfrac{4}{a};+\\infty\\right) \\neq \\varnothing$ là $-\\dfrac{2}{3}&lt;a&lt;0$",
    "answer": true
   }
  ],
  "explain": "<br>- $(-\\infty ;-3) \\backslash[-5 ; 2)=(-\\infty ;-5)$. Suy ra mệnh đề đúng.<br>- $M=[-3 ; 6]$ và $N=(-\\infty ;-2) \\cup(3 ;+\\infty)$. Khi đó $M \\cap N=[-3;-2) \\cup(3 ; 6]$. Suy ra mệnh đề sai.<br>- $Z=\\{-3;4\\}$; $Y=(-2;5)$ và $X \\cup Y=(-4;5)$. Suy ra mệnh đề đúng.<br>- $(-\\infty ; 9 a) \\cap\\left(\\dfrac{4}{a};+\\infty\\right) \\neq \\varnothing \\Leftrightarrow \\dfrac{4}{a}&lt;9a \\Leftrightarrow 4&gt;9a^2 \\Leftrightarrow -\\dfrac{2}{3}&lt;a&lt;\\dfrac{2}{3}$. Vì $a&lt;0$ nên $-\\dfrac{2}{3}&lt;a&lt;0$.<br> Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS5",
  "question": "Cho $A=[m ; +\\infty)$ và $B=(2 m ; 2 m+1]$ là các tập hợp khác rỗng .",
  "subQuestions": [
   {
    "text": "$A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\ge 1$",
    "answer": false
   },
   {
    "text": "$\\mathrm{B}$ nằm trong $\\mathrm{A}$ khi $m&gt;0$",
    "answer": false
   },
   {
    "text": "Với $\\mathrm{m}=2$ thì tập $\\mathrm{A}=[2 ; +\\infty)$",
    "answer": true
   },
   {
    "text": "$A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\ge -1$",
    "answer": true
   }
  ],
  "explain": "<br>- $A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\le 2m+1 \\Leftrightarrow m\\ge -1$. Suy ra mệnh đề sai.<br>- $\\mathrm{B}$ nằm trong $\\mathrm{A}$ khi $2m\\ge m \\Leftrightarrow m\\ge 0$. Suy ra mệnh đề sai.<br>- Với $m=2$ thì $\\mathrm{A}=[2 ; +\\infty)$. Suy ra mệnh đề đúng.<br>- $A\\cap B \\ne \\varnothing$ khi và chỉ khi $m\\le 2m+1 \\Leftrightarrow m\\ge -1$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS6",
  "question": "Cho ba tập hợp $A=\\left\\{x \\in \\mathbb{N}\\mid(2 x+1)\\left(x^2-7 x+10\\right)=0\\right\\}$, $B=\\{x \\in \\mathbb{R}\\mid 2&lt;x \\leq 5\\}$ và $C=\\{2 ; m ; 5\\}$",
  "subQuestions": [
   {
    "text": "Tập hợp $A$ có hai tập hợp con khác rỗng",
    "answer": true
   },
   {
    "text": "$A \\subset B$",
    "answer": false
   },
   {
    "text": "$\\{3 ; 4 ; 5\\}\\subset B$",
    "answer": true
   },
   {
    "text": "Không có giá trị nào của $m$ để $A=C$",
    "answer": true
   }
  ],
  "explain": "<br>- $A=\\left\\{2;5\\right\\}$. Suy ra mệnh đề đúng.<br>- $2\\notin B$. Suy ra mệnh đề sai.<br>- $\\{3 ; 4 ; 5\\}\\subset B$. Suy ra mệnh đề đúng.<br>- Vì $m\\ne 2, m\\ne 5$ nên $A\\ne C$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS7",
  "question": "Cho các tập hợp $A=\\left\\{x \\in \\mathbb{N}\\mid 2 x^2-3 x+1=0\\right\\}, B=\\left\\{x \\in \\mathbb{N}^*\\mid x&lt;2\\right\\}$, $ X=\\{x \\in \\mathbb{Z}\\mid|x|&lt;3\\}$<br>  và $Y=\\left\\{y \\in \\mathbb{R}\\mid\\left(y^2-1\\right)\\left(y^2-4\\right)=0\\right\\}$. Ta có",
  "subQuestions": [
   {
    "text": "$A \\subset B$",
    "answer": false
   },
   {
    "text": "$B \\subset X$",
    "answer": true
   },
   {
    "text": "Tập $B$ có tất cả $8$ tập con",
    "answer": false
   },
   {
    "text": "$X=Y$",
    "answer": false
   }
  ],
  "explain": "Ta có $A=\\left\\{1\\right\\}$, $B=\\{1\\}$, $X=\\{-2;-1;0;1;2\\}$ và $Y=\\{-1;1;-2;2\\}$  <br>- Mệnh đề đúng.<br>- Mệnh đề đúng.<br>- $B$ có $2$ tập con. Suy ra mệnh đề đúng.<br>- Mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121DS8",
  "question": "Cho hai tập hợp $A=\\left\\{x \\in \\mathbb{R}\\mid 2 x-x^2=0\\right\\}$ và <br> $B=\\{x \\in \\mathbb{N}\\mid x \\leq 3\\}$.",
  "subQuestions": [
   {
    "text": "$A \\cup B=\\{0 ; 2\\}$",
    "answer": false
   },
   {
    "text": "$B \\backslash A=\\{1 ; 3\\}$",
    "answer": true
   },
   {
    "text": "$(A \\backslash B) \\cap A=\\varnothing$",
    "answer": true
   },
   {
    "text": "$(A \\cap B) \\cup(B \\backslash A)=B$",
    "answer": true
   }
  ],
  "explain": "<br>- $A=\\left\\{0;2\\right\\}$, $B=\\{0;1;2;3\\}$ suy ra $A \\cup B=\\{0 ;1; 2;3\\}$. Suy ra mệnh đề sai.<br>- $B \\backslash A=\\{1 ; 3\\}$. Suy ra mệnh đề đúng.<br>- $A \\backslash B=\\varnothing$ nên $(A \\backslash B) \\cap A=\\varnothing$. Suy ra mệnh đề đúng.<br>- $A \\cap B=\\{0;2\\}$ nên $(A \\cap B) \\cup(B \\backslash A)=B$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121DS9",
  "question": "Cho hai tập hợp $A=\\{-1 ; 1 ; 2 ; 3 ; 5 ; 7\\}$ và <br>$B=\\left\\{x \\in \\mathbb{N}\\mid x^2&lt;9\\right\\}$",
  "subQuestions": [
   {
    "text": "Tập $A \\cap \\mathbb{N}=\\{1 ; 2 ; 3 ; 5 ; 7\\}$",
    "answer": true
   },
   {
    "text": "$A \\cap B=\\{-1 ; 1 ; 2\\}$",
    "answer": false
   },
   {
    "text": "$ A \\cup B=\\{-2 ;-1 ; 0 ; 1 ; 2 ; 3 ; 5 ; 7\\}$",
    "answer": false
   },
   {
    "text": "Tập $A \\backslash B$ có $4$ phần tử",
    "answer": true
   }
  ],
  "explain": "<br>- $A \\cap \\mathbb{N}=\\{1 ; 2 ; 3 ; 5 ; 7\\}$. Suy ra mệnh đề đúng.<br>- $B=\\{0;1;2\\}$ nên $A \\cap B=\\{1 ; 2\\}$. Suy ra mệnh đề sai.<br>- $ A \\cup B=\\{-1 ; 0 ; 1 ; 2 ; 3 ; 5 ; 7\\}$. Suy ra mệnh đề sai.<br>- $A \\backslash B=\\{-1;3;5;7\\}$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS10",
  "question": "Cho các tập hợp $A=(-\\infty ; m), B=[3 m-1 ; 3 m+3]$ với $m \\in \\mathbb{R}$.",
  "subQuestions": [
   {
    "text": "Khi $m=1$ thì tập $B$ chứa $3$ giá trị nguyên",
    "answer": false
   },
   {
    "text": "Với $m=2$ thì $A \\cap B=\\varnothing$",
    "answer": true
   },
   {
    "text": "Các giá trị của $m$ để $B \\subset A$ là $m \\geq \\dfrac{1}{2}$",
    "answer": false
   },
   {
    "text": "Các giá trị của $m$ để $C_{\\mathbb{R}}A \\cap B \\neq \\varnothing$ là $m \\geq-\\dfrac{3}{2}$",
    "answer": true
   }
  ],
  "explain": "<br>- Khi $m=1$ thì tập $B=[2;6]$ chứa $5$ giá trị nguyên. Suy ra mệnh đề sai.<br>- Với $m=2$ thì $A=(-\\infty;2)$ và $B=[5;9]$, suy ra $A \\cap B=\\varnothing$. Suy ra mệnh đề đúng.<br>- $B \\subset A$ khi $3m+3&lt;m \\Leftrightarrow m&lt;-\\dfrac{3}{2}$. Suy ra mệnh đề sai.<br>- $C_{\\mathbb{R}}A=[m;+\\infty)$. Ta có $C_{\\mathbb{R}}A \\cap B \\neq \\varnothing$ khi $3m+3\\ge m \\Leftrightarrow m \\geq-\\dfrac{3}{2}$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D121DS11",
  "question": "Cho $A=\\{n \\in \\mathbb{N}\\mid n ~\\vdots ~2\\}$, $B=\\{n \\in \\mathbb{N}\\mid n ~\\vdots~ 4\\}$ và $\\mathrm{C}=\\{n \\in \\mathbb{N}\\mid n ~\\vdots~ 5\\}$.",
  "subQuestions": [
   {
    "text": "$A \\cap B=A$",
    "answer": false
   },
   {
    "text": "$C \\backslash A=\\{10 k+5 \\mid k \\in \\mathbb{N}\\}$",
    "answer": true
   },
   {
    "text": "$B \\cap C=\\{n \\in N \\mid n ~\\vdots ~20\\}$",
    "answer": true
   },
   {
    "text": "Tập hợp $A \\cup C$ có $60$ phần tử nhỏ hơn $100$",
    "answer": true
   }
  ],
  "explain": "<br>- $A \\cap B=B$. Suy ra mệnh đề sai.<br>- $C \\backslash A=\\{10 k+5 \\mid k \\in \\mathbb{N}\\}$. Suy ra mệnh đề đúng.<br>- $B \\cap C=\\{n \\in N \\mid n ~\\vdots~ 20\\}$. Suy ra mệnh đề đúng.<br>- $A \\cup C=\\{0;2;4;6;8;\\ldots; 5;15;25;\\ldots\\}$. Ta có $0;2;4;\\ldots;98$ có $50$ số và $5;15;25;\\ldots;95$ có $19$ số. Do đó có $69$ phần tử nhỏ hơn $100$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS12",
  "question": "Cho hai tập $A=[0 ; 5] ; B=(2 a ; 3 a+1], a&gt;-1$. Trong mỗi ý a), b), c), d) Thí sinh chọn đúng hoặc sai.",
  "subQuestions": [
   {
    "text": "Trong tập $A$ có đúng $5$ số nguyên",
    "answer": false
   },
   {
    "text": "$B \\subset A$ đúng $\\forall a&gt;-1$",
    "answer": false
   },
   {
    "text": "Nếu $a=0$ thì $A \\cap B=A$",
    "answer": false
   },
   {
    "text": "Điều kiện của $a$ để $A \\cap B \\neq \\varnothing$ là $-\\dfrac{1}{3}\\leq a&lt;\\dfrac{5}{2}$",
    "answer": true
   }
  ],
  "explain": "<br>- Trong tập $A$ có đúng 6 số nguyên. Suy ra mệnh đề sai.<br>- $B \\subset A\\Leftrightarrow 2a&lt;3a+1 \\text{ và } 2a\\ge 0 \\text{ và } 3a+1\\le 5\\Leftrightarrow 0\\le a\\le \\dfrac{4}{3}$. Suy ra mệnh đề sai.<br>- Nếu $a=0$ thì $B=(0;1] \\Rightarrow A \\cap B=(0;1]$. Suy ra mệnh đề sai.<br>- $A \\cap B \\neq \\varnothing \\Leftrightarrow2a&lt;3a+1 \\text{ và } 0&lt;2a&lt;5 \\text{ hoặc } 0\\le 3a+1\\le 5 \\Leftrightarrow-\\dfrac{1}{3}\\leq a&lt;\\dfrac{5}{2}$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D122DS13",
  "question": "Cho tập $A=\\{x \\in \\mathbb{R}\\mid 1 \\leq x \\leq 10\\}$ và $B=\\{x \\in \\mathbb{N}\\mid 2 \\leq x \\leq 11\\}$. Trong mỗi ý a), b), c), d) Thí sinh chọn đúng hoặc sai.",
  "subQuestions": [
   {
    "text": "Tập $A$ có $10$ phần tử",
    "answer": false
   },
   {
    "text": "Số phần tử tập $B$ ít hơn số phần tử tập $A$",
    "answer": true
   },
   {
    "text": "Trong tập $A$ chỉ có $4$ số nguyên tố",
    "answer": true
   },
   {
    "text": "Nếu $C=\\left\\{x \\in \\mathbb{Q}\\mid x^4+3 x^2-2548=0\\right\\}$ thì $C \\subset A$",
    "answer": false
   }
  ],
  "explain": "<br>- Tập $A=[1;10]$ có vô số phần tử. Suy ra mệnh đề sai.<br>- Tập $B$ có $10$ phần tử. Suy ra mệnh đề đúng.<br>- Tập $A$ chỉ có $4$ số nguyên tố là $2;3;5;7$. Suy ra mệnh đề đúng.<br>- $x^4+3 x^2-2548=0\\Leftrightarrow x=7;x=-7\\Rightarrow C=\\left\\{-7;7\\right\\}\\not\\subset A$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D122DS14",
  "question": "Cho tập hợp: $A=\\{x \\in \\mathrm{R}\\mid(x-1)(x-2)(x-3)=0\\}$ và $B=\\{5 ; 3 ; 1\\}$. Ta có",
  "subQuestions": [
   {
    "text": "Tập hợp $A$ có 3 phần tử",
    "answer": true
   },
   {
    "text": "Tập hợp $A \\cup B$ có 6 phần tử",
    "answer": false
   },
   {
    "text": "Tập hợp $A \\subset B$",
    "answer": false
   },
   {
    "text": "Tập hợp $B \\subset A$",
    "answer": false
   }
  ],
  "explain": "<br>- Tập $A=\\{1;2;3\\}$. Suy ra mệnh đề đúng.<br>- Tập $A \\cup B=\\{1;2;3;5\\}$. Suy ra mệnh đề sai.<br>- Tập $A \\not\\subset B$. Suy ra mệnh đề sai.<br>- Tập $B \\not\\subset A$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS15",
  "question": "Cho hai tập hợp $A=\\{x \\in \\mathbb{R}|| x \\mid&gt;4\\}$ và <br> $B=\\{x \\in \\mathbb{R}\\mid-5 \\leq x-1&lt;5\\}$. Xét tính đúng - sai của các mệnh đề sau?",
  "subQuestions": [
   {
    "text": "$B \\backslash A=[-4 ; 4]$",
    "answer": true
   },
   {
    "text": "$A \\cap B=(4 ; 6)$",
    "answer": true
   },
   {
    "text": "$\\mathbb{R}\\backslash(A \\cap B)=(-\\infty ; 4) \\cup[6 ;+\\infty)$",
    "answer": false
   },
   {
    "text": "$\\mathbb{R}\\backslash(A \\cup B)=\\varnothing$",
    "answer": true
   }
  ],
  "explain": "<br>- $A=(-\\infty;-4)\\cup (4;+\\infty)$ và $B=[-4;6)$ nên $B \\backslash A=[-4 ; 4]$. Suy ra mệnh đề đúng.<br>- $A \\cap B=(4;6)$. Suy ra mệnh đề đúng.<br>- $\\mathbb{R}\\backslash(A \\cap B)=(-\\infty ; 4] \\cup[6 ;+\\infty)$. Suy ra mệnh đề sai.<br>- $A \\cup B=\\mathbb{R}\\Rightarrow \\mathbb{R}\\backslash(A \\cup B)=\\varnothing$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS16",
  "question": "Cho hai tập hợp $A=(-\\infty ; 3]$ và $B=[-1 ; 5)$. Xét tính đúng - sai của các mệnh đề sau :",
  "subQuestions": [
   {
    "text": "$A \\cap B=[-1 ; 3]$",
    "answer": true
   },
   {
    "text": "$A \\cup B=(-\\infty ; 5)$",
    "answer": true
   },
   {
    "text": "$A \\backslash B=(-\\infty ;-1]$",
    "answer": false
   },
   {
    "text": "Tập hợp $B \\backslash A$ chứa $2$ số nguyên",
    "answer": false
   }
  ],
  "explain": "<br>- $A \\cap B=[-1 ; 3]$. Suy ra mệnh đề đúng.<br>- $A \\cup B=(-\\infty ; 5)$. Suy ra mệnh đề đúng.<br>- $A \\backslash B=(-\\infty ;-1)$. Suy ra mệnh đề sai.<br>- Tập hợp $B \\backslash A=(3;5)$ chứa $1$ số nguyên. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS17",
  "question": "Cho tập hợp các số nguyên $\\mathbb{Z}$ và tập hợp khác rỗng $A=(-5 ; 2-m]$, với $m$ là tham số thực.",
  "subQuestions": [
   {
    "text": "Tập $\\mathbb{Z}$ có vô số phần tử",
    "answer": true
   },
   {
    "text": "Với $m=2$ thì tập hợp $A=(-5 ; 0]$",
    "answer": true
   },
   {
    "text": "Với $m&lt;7$ thì tập hợp $\\mathbb{Z}\\cap A=(-5 ; 2-m]$",
    "answer": false
   },
   {
    "text": "Tập hợp $\\mathbb{Z}\\cap A$ chứa không quá $10$ phần tử khi và chỉ khi $-3 \\leq m&lt;7$",
    "answer": true
   }
  ],
  "explain": "<br>- Tập $\\mathbb{Z}$ có vô số phần tử. Suy ra mệnh đề đúng.<br>- Với $m=2$ thì tập hợp $A=(-5 ; 0]$. Suy ra mệnh đề đúng.<br>- Với $m&lt;7$ thì tập hợp $\\mathbb{Z}\\cap A$ là tập rỗng hoặc các số nguyên. Suy ra mệnh đề sai.<br>- Tập hợp $\\mathbb{Z}\\cap A$ chứa không quá 10 phần tử khi và chỉ khi $ m&lt;7, 2-m\\le 5 \\Leftrightarrow -3 \\leq m&lt;7$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS18",
  "question": "Cho tập hợp $A=[-2 ; 4), B=(0 ; 6]$ và $C=(1 ;+\\infty)$.",
  "subQuestions": [
   {
    "text": "$A \\cup B=[-2 ; 6]$",
    "answer": true
   },
   {
    "text": "$(A \\cap B) \\cup C=(-\\infty ; 0)$",
    "answer": false
   },
   {
    "text": "$A \\backslash(B \\cup C)=\\varnothing$",
    "answer": false
   },
   {
    "text": "Số giá trị nguyên thuộc tập hợp $A \\cap B \\cap C$ là $3$",
    "answer": true
   }
  ],
  "explain": "<br>- $A \\cup B=[-2 ; 6]$. Suy ra mệnh đề đúng.<br>- $A \\cap B=(0;4) \\Rightarrow (A \\cap B) \\cup C=(0;+\\infty)$. Suy ra mệnh đề sai.<br>- $B \\cup C=(0;+\\infty)\\Rightarrow A \\backslash(B \\cup C)=[-2;0]$. Suy ra mệnh đề sai.<br>- $A \\cap B \\cap C=(1;4)$ chứa 3 giá trị nguyên. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS19",
  "question": "Cho hai tập hợp $A=\\left[1-m ; \\dfrac{m+3}{2}\\right] \\neq \\varnothing$ và<br> $B=(-\\infty ;-3) \\cup(3 ;+\\infty)$.",
  "subQuestions": [
   {
    "text": "$A \\neq \\varnothing \\Leftrightarrow m \\geq -\\dfrac{1}{3}$",
    "answer": true
   },
   {
    "text": "Với $m=3$ thì $A \\cap B \\neq \\varnothing$",
    "answer": false
   },
   {
    "text": "Có $6$ giá trị nguyên của tham số $m$ để $A \\subset B$",
    "answer": false
   },
   {
    "text": "Có $7$ giá trị nguyên nhỏ hơn $10$ của tham số $m$ để $A \\cup B=\\mathbb{R}$",
    "answer": true
   }
  ],
  "explain": "<br>- $A \\neq \\varnothing\\Leftrightarrow \\dfrac{m+3}{2}\\ge1-m \\Leftrightarrow m \\geq -\\dfrac{1}{3}$. Suy ra mệnh đề đúng.<br>- Với $m=3$ thì $A=[-2;3] \\Rightarrow A \\cap B= \\varnothing$. Suy ra mệnh đề sai.<br>- $A \\subset B$ khi $m \\geq -\\dfrac{1}{3} \\text{ và } 1-m&gt;3 \\text{ hoặc } \\dfrac{m+3}{2}&lt;-3 \\Leftrightarrow m \\geq -\\dfrac{1}{3} \\text{ và } m&lt;-2 \\text{ hoặc } m&lt;-9$ không tồn tại $m$. Suy ra mệnh đề sai.<br>- $A \\cup B=\\mathbb{R}\\Leftrightarrow m \\geq -\\dfrac{1}{3} \\text{ và } 1-m\\le -3 \\text{ và } \\dfrac{m+3}{2}\\ge 3 \\Leftrightarrow m \\geq -\\dfrac{1}{3} \\text{ và } m\\ge 4 \\text{ và } m\\ge 3 \\Leftrightarrow m\\ge 3$. Có $7$ giá trị nguyên nhỏ hơn $10$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D123DS20",
  "question": "Cho tập $A=(-10 ; 1)$ và $B=(m ; m+7)$. Trong mỗi ý a), b), c), d) dưới đây, thí sinh chọn đúng hoặc sai.",
  "subQuestions": [
   {
    "text": "Điều kiện để $B \\subset A$ là $-10 \\leq m \\leq-6$",
    "answer": true
   },
   {
    "text": "Điều kiện để $A \\cap B=\\varnothing$ là $m \\geq 1$ hoặc $m \\leq-17$",
    "answer": true
   },
   {
    "text": "Điều kiện để $A \\backslash B \\neq \\varnothing$ là $-17&lt;m&lt;1$",
    "answer": false
   },
   {
    "text": "Điều kiện để $A \\cup B$ là một khoảng có độ dài bằng $12$ thì tổng các giá trị $m$ bằng $-18$",
    "answer": false
   }
  ],
  "explain": "<br>- $B \\subset A \\Leftrightarrow m\\ge -10 \\text{ và } m+7\\le 1 \\Leftrightarrow m\\ge -10 \\text{ và } m\\le -6\\Leftrightarrow -10 \\leq m \\leq-6$. Suy ra mệnh đề đúng.<br>- $A \\cap B=\\varnothing\\Leftrightarrow m+7\\le -10 \\text{ hoặc } m\\ge 1 \\Leftrightarrow m\\le -17 \\text{ hoặc } m\\ge 1$. Suy ra mệnh đề đúng.<br>- $A \\backslash B \\neq \\varnothing \\Leftrightarrow A\\not\\subset B$. Độ dài của $A$ là $1-(-10)=11$ và độ dài của $B$ là $(m+7)-m=7$. Vì $11&gt;7$ nên $A\\not\\subset B$ với mọi $m$. Suy ra mệnh đề sai.<br>- $A \\cup B$ là một khoảng có độ dài bằng $12$ khi $-10&lt;m&lt;1;m+7+10=12 \\text{ hoặc } -10&lt;m+7&lt;1; 1-m=12 \\Leftrightarrow m=-5;m=-11.$  Tổng các giá trị $m$ bằng $-16$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D122DS1",
  "question": "Cho tập hợp $A = \\{2,4,6,8\\}$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$\\varnothing \\subset A$",
    "answer": true
   },
   {
    "text": "$2 \\in A$",
    "answer": true
   },
   {
    "text": "Số tập con của tập hợp $A$ có $1$ phần tử là $8$",
    "answer": false
   },
   {
    "text": "$A = \\{n \\in \\mathbb{N} | n = 2k, 0 \\le k \\le 4, k \\in \\mathbb{N}\\}$",
    "answer": false
   }
  ],
  "explain": "<br>- Tập rỗng là tập con của mọi tập hợp.<br>- $2$ là một phần tử của tập hợp $A$.<br>- Các tập con có $1$ phần tử là $\\{2\\}, \\{4\\}, \\{6\\}, \\{8\\}$. Có $4$ tập con.<br>- Với $k=0$, ta có $n=0$. $0 \\notin A$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134DS1",
  "question": "Cho hai tập hợp:  $A=\\{1;2;3;4\\}$; $B=\\{x \\in\\mathbb{R} \\mid-2 \\le x \\le 2\\}$.",
  "subQuestions": [
   {
    "text": "$\\{1; 2\\} \\subset A$",
    "answer": true
   },
   {
    "text": "$B = \\{-2; -1; 0; 1; 2\\}$",
    "answer": false
   },
   {
    "text": "$A \\setminus B = \\varnothing$",
    "answer": false
   },
   {
    "text": "$A \\cup B$ có đúng $7$ phần tử",
    "answer": false
   }
  ],
  "explain": "<br>- Đúng.<br>- Sai. $B=[-2;2]$.<br>- Sai. $A\\setminus B=\\{3;4\\}$.<br>- Sai. $A\\cup B=[-2;2]\\cup \\{3;4\\}$. Tập này có vô số phần tử.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134DS2",
  "question": "Cho ba tập hợp $A = (1;5)$; $B = [-2;3]$ và $C = (m-1;+\\infty)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$A \\cup B = [-2;1)$",
    "answer": false
   },
   {
    "text": "$A \\cap B = (1;3]$",
    "answer": true
   },
   {
    "text": "$\\mathbb{R} \\setminus A = (-\\infty;1] \\cup [5;+\\infty)$",
    "answer": true
   },
   {
    "text": "Nếu $2 \\le m \\le 4$ thì $B \\cap C = (0;3]$",
    "answer": false
   }
  ],
  "explain": "<br>- $A \\cup B = (1;5) \\cup [-2;3] = [-2;5)$.<br>- $A \\cap B = (1;5) \\cap [-2;3] = (1;3]$.<br>- $\\mathbb{R} \\setminus A = \\mathbb{R} \\setminus (1;5) = (-\\infty;1] \\cup [5;+\\infty)$.<br>- Giả sử $m=4$, ta có $C = (3;+\\infty)$. Khi đó $B \\cap C = [-2;3] \\cap (3;+\\infty) = \\varnothing \\neq (0;3]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133DS1",
  "question": "Cho ba tập hợp $A = [-5;1]$, $B = (-3;2)$ và $C = [2;+\\infty)$. Khi đó:",
  "subQuestions": [
   {
    "text": "$A = \\{x \\in \\mathbb{Q}\\mid-5 \\le x \\le 1\\}$",
    "answer": false
   },
   {
    "text": "$B \\cup C=(-3;+\\infty)$",
    "answer": true
   },
   {
    "text": "$A \\cap B \\cap C = \\varnothing$",
    "answer": true
   },
   {
    "text": "$C_R B = (-\\infty ;-3) \\cup [2 ;+\\infty)$",
    "answer": false
   }
  ],
  "explain": "<br>- Tập $A = \\{x \\in \\mathbb{Q} | -5 \\le x \\le 1\\}$ là sai vì tập $A$ ban đầu là tập hợp các số thực, không phải số hữu tỉ.<br>- $B \\cup C = (-3;2) \\cup [2;+\\infty) = (-3;+\\infty)$ là đúng.<br>- $A \\cap B \\cap C = [-5;1] \\cap (-3;2) \\cap [2;+\\infty) = \\emptyset$ là đúng.<br>- $C_{\\mathbb{R}} B = \\mathbb{R} \\setminus (-3;2) = (-\\infty;-3] \\cup [2;+\\infty)$ là sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134DS3",
  "question": "Cho hai tập hợp $A=[-2;+\\infty)$ và $B=(-\\infty; 5)$.",
  "subQuestions": [
   {
    "text": "$A \\cup B=\\mathbb{R}$",
    "answer": true
   },
   {
    "text": "$A \\cap B=[-2;5)$",
    "answer": true
   },
   {
    "text": "$A \\setminus B=(5;+\\infty)$",
    "answer": false
   },
   {
    "text": "$C_R (A \\cap B)=(5;+\\infty)$",
    "answer": false
   }
  ],
  "explain": "<br>- ĐÚNG.<br>  Ta có $A \\cup B=\\mathbb{R}$.<br>- ĐÚNG.<br>  Ta có $A \\cap B=[-2;5)$.<br>- SAI.<br>  Vì $A \\setminus B=[5;+\\infty)$.<br>- SAI.<br>  Vì $C_\\mathbb{R} (A \\cap B)=(-\\infty;-2) \\cup [5;+\\infty]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132DS3",
  "question": "Lớp $10$A có sĩ số $45$ học sinh. Trong lớp có $22$ học sinh tham gia Câu lạc bộ Bóng đá, $18$ học sinh tham gia Câu lạc bộ Bóng rổ và $10$ học sinh tham gia cả hai câu lạc bộ trên.",
  "subQuestions": [
   {
    "text": "Lớp $10$A có $12$ học sinh tham gia Câu lạc bộ Bóng đá và không tham gia Câu lạc bộ Bóng rổ",
    "answer": true
   },
   {
    "text": "Lớp $10$A có $30$ học sinh tham gia ít nhất một trong hai câu lạc bộ trên",
    "answer": true
   },
   {
    "text": "Lớp $10$A có $25$ học sinh không tham gia Câu lạc bộ Bóng đá",
    "answer": false
   },
   {
    "text": "Lớp $10$A có $20$ học sinh không tham gia câu lạc bộ nào trong hai câu lạc bộ trên",
    "answer": false
   }
  ],
  "explain": "<br><img src=\"data/10/0D1/im0D13/loc2_0_TN_DS_TL_SGD_B_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $A$ là tập hợp các học sinh lớp $10$A tham gia Câu lạc bộ Bóng đá.<br>  $B$ là tập hợp các học sinh lớp $10$A tham gia Câu lạc bộ Bóng rổ.<br>  $A\\cap B$ là tập hợp các học sinh lớp $10$A tham gia cả hai câu lạc bộ trên.<br>  $A\\cup B$ là tập hợp các học sinh lớp $10$A tham gia ít nhất một trong hai câu lạc bộ trên.<br>  Ta có $n(A)=22$, $n(B)=18$, $n\\left(A\\cap B\\right)=10$.  <br>- Số học sinh lớp $10$A tham gia Câu lạc bộ Bóng đá và không tham gia Câu lạc bộ Bóng rổ là $22-10=12$.<br>- Số học sinh lớp $10$A tham gia ít nhất một trong hai câu lạc bộ trên là \\[n\\left(A\\cup B\\right)=n(A)+n(B)-n\\left(A\\cap B\\right)=22+18-10=30.\\]<br>- Số học sinh lớp $10$A học sinh không tham gia Câu lạc bộ Bóng đá có thể  <br>- tham gia câu lạc bộ Bóng rổ là $18-10=8$.<br>- không tham gia cả hai môn Bóng đá và bóng rổ $45-30=15$.  Vậy số học sinh lớp $10$A học sinh không tham gia Câu lạc bộ Bóng đá là $8+15=23$.<br>- Số học sinh lớp $10$A không tham gia cả hai câu lạc bộ trên là $45-30=15$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131DS5",
  "question": "Lớp 10A có $19$ học sinh tham gia câu lạc bộ cầu lông, $15$ học sinh tham gia câu lạc bộ bóng đá, $7$ học sinh tham gia cả hai câu lạc bộ cầu lông và bóng đá, $8$ học sinh không tham gia câu lạc bộ nào trong hai câu lạc bộ cầu lông và bóng đá. Gọi $A$ là tập các học sinh tham gia câu lạc bộ cầu lông, $B$ là tập các học sinh tham gia câu lạc bộ bóng đá.",
  "subQuestions": [
   {
    "text": "Số phần tử của tập hợp $A\\cap B$ là $7$",
    "answer": true
   },
   {
    "text": "Tập $A\\cup B$ là tập tất cả các học sinh có tham gia ít nhất một trong hai câu lạc bộ cầu lông và bóng đá",
    "answer": true
   },
   {
    "text": "Số phần tử của tập hợp $A\\backslash B$ là $4$",
    "answer": false
   },
   {
    "text": "Sĩ số lớp 10A là $35$",
    "answer": true
   }
  ],
  "explain": "Từ đề bài, ta có $n(A)=19$, $n(B)=15$, $n(A\\cap B)=7$.  <br>- <strong>Đúng</strong>. Số phần tử của tập hợp $A\\cap B$ là $7$.<br>- <strong>Đúng</strong>. Tập $A\\cup B$ là tập tất cả các học sinh có tham gia ít nhất một trong hai câu lạc bộ cầu lông và bóng đá.<br>- <strong>Sai</strong>. Ta có $n(A\\setminus B)=19-7=12$.<br>- <strong>Đúng</strong>. Số học sinh tham gia thể thao mà $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)=19+15-7=27$.<br>  Do đó số học sinh lớp 10A là $27+8=35$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134DS4",
  "question": "Cho hai tập hợp $ A=\\left\\{ x\\in\\mathbb{R}|x\\le 7\\right\\}$ và $ B=\\left[3;7\\right)$.",
  "subQuestions": [
   {
    "text": "$ A=\\left(-\\infty ;7\\right)$",
    "answer": false
   },
   {
    "text": "$ A\\cup B=B$",
    "answer": false
   },
   {
    "text": "$ B\\subset A$",
    "answer": true
   },
   {
    "text": "Tập hợp $ A\\setminus B$ chứa $ 3$ phần tử là số nguyên dương",
    "answer": true
   }
  ],
  "explain": "<br>- $ A=\\left(-\\infty ;7\\right]$.<br>- $ A\\cup B=A$.<br>- $ B\\subset A$.<br>- Tập hợp $ A\\setminus B=\\left(-\\infty;3\\right)\\cup \\{7\\}$. Suy ra có $3$ phần tử là số nguyên dương.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133DS2",
  "question": "Cho hai tập hợp $A = (-3;5]$, $B = (2;+\\infty)$.",
  "subQuestions": [
   {
    "text": "$B = \\{x \\in \\mathbb{R} \\mid x &gt; 2\\}$",
    "answer": true
   },
   {
    "text": "$A \\cup B = (-3;+\\infty)$",
    "answer": true
   },
   {
    "text": "$A = \\{x \\in \\mathbb{R} \\mid -3 \\leq x \\leq 5\\}$",
    "answer": false
   },
   {
    "text": "$A \\cap B = (-3;2]$",
    "answer": false
   }
  ],
  "explain": "<br>- Ta có $B = (2; +\\infty) = \\{x \\in \\mathbb{R} \\mid x &gt; 2\\}$.<br>- Ta có $A \\cup B = (-3; +\\infty)$.<br>- Ta có $A = (-3; 5] = \\{x \\in \\mathbb{R} \\mid -3 &lt; x \\leq 5\\}$.<br>- Ta có $A \\cap B = (2; 5]$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134DS5",
  "question": "Cho hai tập hợp $A=\\{x\\in\\mathbb{R} \\mid x+2\\ge0\\}$ và $B=\\{x\\in\\mathbb{R} \\mid 5-x&gt;0\\}$. Xét tính đúng sai của các khẳng định sau:",
  "subQuestions": [
   {
    "text": "$A=[-2;+\\infty)$",
    "answer": true
   },
   {
    "text": "$A\\cap B=[-2;5)$",
    "answer": true
   },
   {
    "text": "$A\\setminus B=[5;+\\infty)$",
    "answer": true
   },
   {
    "text": "$C_{A}(A\\cap B)=(5;+\\infty)$",
    "answer": false
   }
  ],
  "explain": "Ta có  <br>- $x+2 \\ge 0 \\Leftrightarrow x \\ge -2 \\Rightarrow A=[-2;+\\infty)$.<br>- $5-x &gt; 0 \\Leftrightarrow x &lt; 5 \\Rightarrow B=(-\\infty; 5)$.  Khi đó  <br>- $A=[-2;+\\infty)$.<br>- $A\\cap B = [-2; 5)$.<br>- $A\\setminus B = \\{x \\in A \\mid x \\notin B\\} = [5;+\\infty)$.<br>- $C_{A}(A\\cap B) = A \\setminus (A \\cap B) = A \\setminus B = [5;+\\infty) \\ne (5;+\\infty)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS1",
  "question": "Cho bất phương trình $2 x-5 y&gt;5$ $(1)$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Bất phương trình $(1)$ là bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Cặp số $(x, y)=(1,1)$ thuộc miền nghiệm của bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Bất phương trình $(1)$ có một nghiệm duy nhất",
    "answer": false
   },
   {
    "text": "Miền được tô đậm (không kể bờ $d$) trong hình sau là miền nghiệm của bất phương trình $(1)$",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Ta có $2 x-5 y&gt;5$ là bất phương trình bậc nhất hai ẩn dạng $a x+b y&gt;c$.<br>- Sai. Thế cặp số $(x, y)=(1,1)$ vào bất phương trình $2 x-5 y&gt;5$ ta thấy $2\\cdot 1-5\\cdot 1=-3&lt;5$.<br>- Sai. Vì bất phương trình bậc nhất hai ẩn luôn có một miền nghiệm thoả mãn bất phương trình.<br>- Đúng. Đường thẳng $d\\colon 2 x-5 y=5$ đi qua hai điểm $(0;-1)$ và $\\left(\\dfrac{5}{2}; 0\\right)$.<br> Lấy điểm $O(0; 0)$. Ta có $0&gt;5$ sai do đó miền nghiệm của bất phương trình $(1)$ là nửa mặt phẳng không chứa điểm $O(0; 0)$ kể cả đường thẳng $d$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS2",
  "question": "Cho bất phương trình: $x+y+1&lt;0$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Bất phương trình đã cho là bất phương trình bậc nhất một ẩn",
    "answer": true
   },
   {
    "text": "Cặp số $(1;1)$ là nghiệm của bất phương trình đã cho",
    "answer": false
   },
   {
    "text": "Miền nghiệm của bất phương trình đã cho là nửa mặt phẳng chứa gốc tọa độ có bờ là đường thẳng $x+y+1=0$",
    "answer": false
   },
   {
    "text": "Miền nghiệm của bất phương trình là nửa mặt phẳng phần không bị tô đậm có bờ là đường thẳng $x+y+1=0$ (không lấy những điểm nằm trên đường thẳng $x+y+1=0$)",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Bất phương trình trên là bất phương trình bậc nhất một ẩn.<br>- Sai. Cặp số $(1;1)$ là nghiệm của bất phương trình.<br>  Thay $x=1; y=1$ vào bất phương trình: $1+1+1&lt;0$.<br>  Vậy cặp số $(1;1)$ là không là nghiệm của bất phương trình.<br>- Sai. Miền nghiệm của bất phương trình trên là nửa mặt phẳng chứa gốc tọa độ có bờ là đường thẳng $x+y+1=0$.<br>  Thay $x=0; y=0$ vào bất phương trình: $0+0+1&lt;0$.<br>  Vậy miền nghiệm của bất phương trình trên là nửa mặt phẳng không chứa gốc tọa độ.<br>- Đúng. Miền nghiệm của bất phương trình là nửa mặt phẳng phần không bị tô đậm có bờ là đường thẳng $x+y+1=0$ (không lấy những điểm nằm trên đường thẳng $x+y+1=0$).<br>  Nhìn vào hình vẽ ta thấy:  <br>- Đường thẳng $x+y+1=0$ cắt hai trục tọa độ tại $(-1; 0)$; $(0;-1)$.<br>- Miền nghiệm không chứa gốc tọa độ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS3",
  "question": "Cho bất phương trình $9 x+8 y \\leq 6(x+y+1)(1)$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Bất phương trình $(1)$ không là bất phương trình bậc nhất hai ẩn",
    "answer": false
   },
   {
    "text": "Với $y=0$ thì chỉ có $3$ giá trị của $x$ thỏa mãn bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Cặp số $(2;-2)$ là một nghiệm của bất phương trình $(1)$",
    "answer": true
   },
   {
    "text": "Nửa mặt phẳng không bị gạch trong hình sau là miền nghiệm của bất phương trình $(1)$",
    "answer": false
   }
  ],
  "explain": "<br>- Sai. Ta có $9 x+8 y \\leq 6(x+y+1) \\Leftrightarrow 3 x+2 y \\leq 6$ nên bất phương trình $(1)$ không là bất phương trình bậc nhất hai ẩn.<br>- Sai. Bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm.<br>- Đúng. Vì $3\\cdot 2+2\\cdot (-2) \\leq 6$ nên cặp số $(2;-2)$ là một nghiệm của bất phương trình $(1)$.<br>- Sai. Trước hết, ta vẽ đường thẳng $d\\colon 3 x+2 y=6$.<br>  Ta thấy $(0; 0)$ là nghiệm của bất phương trình đã cho. Vậy miền nghiệm cần tìm là nửa mặt phẳng chứa điểm $(0; 0)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS4",
  "question": "Cho bất phương trình $3(x-1)+4(y-2)&lt;5 x-3$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Bất phương trình đã cho là bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Điểm $B(-2; 2)$ thuộc miền nghiệm của bất phương trình đã cho",
    "answer": false
   },
   {
    "text": "Miền nghiệm của bất phương trình đã cho chứa gốc tọa độ",
    "answer": true
   },
   {
    "text": "Miền không tô màu, không kể bờ là miền nghiệm của bất phương trình đã cho",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. $3(x-1)+4(y-2)&lt;5 x-3$ là bất phương trình bậc nhất hai ẩn.<br>- Sai. Ta thay tọa độ điểm $B(-2; 2)$ vào bất phương trình đã cho, ta được $3(-2-1)+4(2-2)&lt;5 \\cdot (-2)-3\\Leftrightarrow -9&lt;-13$ (vô lý).<br>  Do đó $B(-2; 2)$ không thuộc miện nghiệm của bất phương trình đã cho.<br>- Đúng. Thay tọa độ điểm $O(0,0)$ vào bất phương trình đã cho, ta được $3(0-1)+4(0-2)&lt;5 \\cdot 0-3\\Leftrightarrow -11&lt;-3$.<br>  Do đó, miền nghiệm của bất phương trình đã cho chứa gốc tọa độ<br>- Đúng. Ta có $3(x-1)+4(y-2)&lt;5 x-3 \\Leftrightarrow x-2 y+4&gt;0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS5",
  "question": "Cho bất phương trình bậc nhất hai ẩn $3 x+5 y \\leq 6$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Cặp $(3; 3)$ là một nghiệm của bất phương trình",
    "answer": false
   },
   {
    "text": "Điểm $B(-2; 2)$ thuộc miền nghiệm của bất phương trình đã cho",
    "answer": true
   },
   {
    "text": "Với $x=0$ thì chỉ có 2 giá trị của $y$ thỏa mãn bất phương trình",
    "answer": false
   },
   {
    "text": "Miền nghiệm của bất phương trình đã cho là miền tô đậm trong hình vẽ bao gồm cả bờ là đường thẳng $3 x+5 y=6$",
    "answer": true
   }
  ],
  "explain": "<br>- Sai. Thay $x=3; y=3$ vào bất phương trình $(1)$ ta thấy không thỏa mãn.<br>- Đúng. Thay $x=-2; y=2$ vào bất phương trình $(1)$ ta thấy thỏa mãn.<br>- Sai. Thay $x=0$ vào bất phương trình ta được $5 y \\leq 6$, bất phương trình này có nhiều hơn $2$ giá trị của $y$ thỏa mãn.<br>- Đúng. Ta thấy $(0; 0)$ là nghiệm cúa bất phương trình đã cho. Vậy miền nghiệm cần tìm là nửa mặt phẳng chứa điểm $(0; 0)$ nên miền nghiệm là miền tô đậm trong hình vẽ bao gồm cả bờ là đường thẳng $3 x+5 y=6$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS6",
  "question": "Cho bất phương trình $3(x-2 y)+1&gt;2 x-8\\left(y-\\dfrac{5}{8}\\right)(1)$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "$(1)$ là bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Cặp số $(x; y)=(-2; 1)$ thuộc miền nghiệm của bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Tập tất cả các điểm $M(x; y)$ nằm trên đường thẳng $(d)\\colon x+2 y-4=0$ đều thuộc miền nghiệm của bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Miền không gạch chéo (không kể bờ $d$) trong hình sau là miền nghiệm của bất phương trình $(1)$",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Ta có $3(x-2 y)+1&gt;2 x-8\\left(y-\\dfrac{5}{8}\\right) \\Leftrightarrow x+2 y&gt;4$.<br>- Sai. Thế cặp số $(x; y)=(-2; 1)$ vào bất phương trình $(1)$ thấy không thỏa.<br>- Sai. $(1)\\Leftrightarrow x+2 y&gt;4$ nên miền nghiệm của bất phương trình $(1)$ không nhận các điểm nằm trên đường thẳng $(d)\\colon x+2 y-4=0$.<br>- Đúng. Đường thẳng đi qua hai điểm $(0; 2)$ và $(4; 0)$ nên có phương trình là $x+2 y=4$.<br>  Điểm $O(0; 0)$ không thuộc miền nghiệm nên cặp số $(0; 0)$ không là nghiệm của bất phương trình $(1)$. Vậy hình vẽ trên là miền nghiệm của bất phương trình $(1)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS7",
  "question": "Cho bất phương trình $x+3+2(2 y+5)&lt;2(1-x)$ $(1)$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "$(1)$ là bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Cặp số $(x; y)=(-2; 1)$ thuộc miền nghiệm của bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Tập tất cả các điểm $M(x; y)$ nằm trên đường thẳng $(d): 3 x+4 y+11=0$ đều thuộc miền nghiệm của bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Miền không gạch chéo (không kể bờ $d$) trong hình sau là miền nghiệm của bất phương trình $(1)$",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Ta có $x+3+2(2 y+5)&lt;2(1-x) \\Leftrightarrow 3 x+4 y+11&lt;0$.<br>- Sai. Thế cặp số $(x; y)=(-2; 1)$ vào bất phương trình $(1)$ thấy không thỏa.<br>- Sai. $(1) \\Leftrightarrow 3 x+4 y+11&lt;0$ nên miền nghiệm của bất phương trình $(1)$ không nhận các điểm nằm trên đường thẳng $(d): 3 x+4 y+11=0$.<br>- Đúng. Đường thẳng đi qua hai điểm $\\left(-\\dfrac{11}{3}; 0\\right)$ và $\\left(0;-\\dfrac{11}{4}\\right)$ có phương trình là $3 x+4 y+11=0$.<br>  Điểm $O(0; 0)$ không thuộc miền nghiệm nên cặp số $(0; 0)$ không là nghiệm của bất phương trình $(1)$. Vậy hình vẽ trên là miền nghiệm của bất phương trình $(1)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS8",
  "question": "Cho bất phương trình $x+2 y&gt;4$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Bất phương trình đã cho là bất phương trình bật nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Bất phương trình đã cho là bất phương trình bật nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Miền nghiệm của bất phương trình đã cho có chứa gốc tọa độ",
    "answer": false
   },
   {
    "text": "Miền nghiệm của bất phương trình đã cho được biểu diễn trong mặt phẳng tọa độ $O x y$ như sau, trong đó miền nghiệm là nữa mặt phẳng không chứa gốc tọa độ (phần không bị gạch) không kể đường thẳng $d$",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng.<br>- Đúng. Thay $x=1, y=2$ vào bất phương trình ta được $1+2.2&gt;4$ (Thỏa mãn). Do đó, điểm $(1; 2)$ thuộc miền nghiệm của bất phương trình đã cho.<br>- Sai. Thay $x=0, y=0$ vào bất phương trình ta được $0+2.0&gt;4$ (Không thỏa mãn). Do đó, miền nghiệm của bất phương trình không chứa điểm $O(0; 0)$.<br>- Đúng. Đường thẳng $d\\colon x+2 y=4$ đi qua hai điểm $(0; 2)$ và $(4; 0)$.<br>  Điểm $O(0; 0)$ không thuộc miền nghiệm của bất phương trình đã cho.<br>  Vậy miền nghiệm của bất phương trình đã cho là nữa mặt phẳng bờ chứa đường thẳng $d\\colon x+2 y=4$ không kể đường thẳng $d$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D212DS9",
  "question": "Cho bất phương trình $x+3+2(2 y+5)&lt;2(1-x)(1)$. Khi đó<br><img src=\"data/10/0D2/im0D21/dlts_sbh_ds10cd44_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Bất phương trình $(1)$ là bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Với $x=0$ thì có duy nhất một giá trị của $y$ thoả mãn bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Cặp số $\\left(-\\dfrac{1}{11};-\\dfrac{2}{11}\\right)$ là một nghiệm của bất phương trình $(1)$",
    "answer": false
   },
   {
    "text": "Nửa mặt phẳng không bị gạch trong hình sau là miền nghiệm của bất phương trình $(1)$",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Ta có $x+3+2(2 y+5)&lt;2(1-x) \\Leftrightarrow 3 x+4 y+11&lt;0$. là bất phương trình bậc nhất hai ẩn.<br>- Sai. Bất phương trình bậc nhất hai ẩn có vô số nghiệm.<br>- Sai. Vì $3\\left(\\dfrac{-1}{11}\\right)+4\\left(\\dfrac{-2}{11}\\right)+11&gt;0$ nên $\\left(-\\dfrac{1}{11};-\\dfrac{2}{11}\\right)$ không là nghiệm của bất phương trình $(1)$.C sai<br>- Đúng. Ta vẽ đường thẳng $(d)\\colon 3 x+4 y+11=0$.<br>  Ta thấy $(0; 0)$ không là nghiệm của bất phương trình.<br>  Vậy miền nghiệm là nửa mặt phẳng (không kể bờ $(d)$) không chứa điểm $(0; 0)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D213DS1",
  "question": "Nam thích uống hai loại nước ép là cam và táo, mỗi tuần bố cho Nam tối đa $150\\,000$ đồng để mua nguyên liệu làm nước ép. Biết rằng giá cam là $20\\,000$ đồng/$1$ kg, giá táo là $25\\,000$ đồng/$1$ kg. Gọi $x$, $y$ ($x$, $y \\in \\mathbb{N}$) lần lượt là số kg cam và táo mà Nam có thể mua trong một tuần.",
  "subQuestions": [
   {
    "text": "Tổng số tiền mà Nam phải trả để mua cam và táo trong vòng $1$ tuần là $25\\,000 x+20\\,000 y$ đồng",
    "answer": false
   },
   {
    "text": "Điều kiện về số tiền Nam có thể mua hai loại nước ép đó là $4x+5y \\ge 30$",
    "answer": false
   },
   {
    "text": "Nam có thể mua $2$ kg cam và $4$ kg táo mỗi tuần mà không vượt quá số tiền cho phép",
    "answer": true
   },
   {
    "text": "Nếu Nam phải mua cả cam và táo trong tuần thì số kg cam tối đa có thể mua là $7$ kg",
    "answer": false
   }
  ],
  "explain": "<br>- Sai. Ta có số tiền mà Nam phải trả để mua cam và táo trong vòng $1$ tuần là $20\\,000 x+25\\,000 y$ đồng.<br>- Sai. Do Nam chỉ có tối đa $150\\,000$ đồng mỗi tuần nên ta có $$20\\,000x+25\\,000y \\le 150\\,000 \\Leftrightarrow 4x+5y \\le 30.$$<br>- Đúng. Với $2$ kg cam và $4$ kg táo tức là $x=2$ và $y=4$ nên thay vào bất phương trình điều kiện là $$4\\cdot 2+5\\cdot 4=28\\le 30$$ nên Nam có thể mua $2$ kg cam và $4$ kg táo mỗi tuần mà không vượt quá số tiền cho phép.<br>- Sai. Do Nam phải mua cả cam và táo trong tuần nên $x, y \\ge 1$ nên ta có $$30\\ge 4x+5y\\ge 4x+5 \\Leftrightarrow 4x\\le 25 \\Leftrightarrow x\\le \\dfrac{25}{4}.$$ Và do $x \\in \\mathbb{N}$ nên $x\\le 6$ do đó số kg cam tối đa có thể mua là $6$ kg.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D213DS2",
  "question": "Bình thích ăn hai loại trái cây là cam và xoài, mỗi tuần mẹ cho Bình tối đa $200\\,000$ đồng để mua trái cây. Biết rằng giá cam là $15\\,000$ đồng/$ 1 $ kg, giá xoài là $30\\,000$ đồng/$ 1 $ kg. Gọi $x$, $y$ ($x$, $y \\in \\mathbb{N}$) lần lượt là số kg cam và xoài mà Bình có thể mua về trong một tuần.",
  "subQuestions": [
   {
    "text": "Tổng số tiền mà Bình phải trả để mua cam và xoài trong vòng $ 1 $ tuần là $30\\,000 x+15\\,000 y$ đồng",
    "answer": false
   },
   {
    "text": "Điều kiện về số tiền Bình có thể mua hai loại trái cây đó là $3 x+6 y \\ge 40$",
    "answer": false
   },
   {
    "text": "Bình có thể mua $ 5 $ kg cam và $ 4 $ kg xoài mỗi tuần mà không vượt quá số tiền cho phép",
    "answer": true
   },
   {
    "text": "Nếu Bình phải mua cả cam và xoài trong tuần thì số kg cam tối đa có thể mua là $ 10 $ kg",
    "answer": false
   }
  ],
  "explain": "<br>- <strong>Sai</strong>. Ta có số tiền mà Bình phải trả để mua cam và xoài trong vòng $ 1 $ tuần là $ 15\\,000 x+30\\,000 y $ đồng.<br>- <strong>Sai</strong>. Do Bình chỉ có tối đa $200\\,000$ đồng mỗi tuần nên ta có  $ 15\\,000 x+30\\,000 y \\le 200\\,000 \\Leftrightarrow 3x+6y \\le 40. $<br>- <strong>Đúng</strong>. Với $ 5 $ kg cam và $ 4 $ kg xoài tức là $ x=5 $ và $ y=4 $ nên thay vào bất phương trình điều kiện là  $ 3\\cdot 5 + 4 \\cdot 4 =31 \\le 40 $  nên Bình có thể mua $ 5 $ kg cam và $ 4 $ kg xoài mỗi tuần mà không vượt quá số tiền cho phép.<br>- <strong>Sai</strong>. Do Bình phải mua cả cam và xoài trong tuần nên $ x $, $ y \\ge 1 $ nên ta có  $ 40 \\ge 3x+6y \\ge 3x +6 \\Leftrightarrow 3x \\le 34 \\Leftrightarrow x \\le \\dfrac{34}{3}.$  Và do $ x \\in \\mathbb{N} $ nên $ x \\le 11 $ do đó số kg cam tối đa có thể mua là $ 11 $ kg.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS1",
  "question": "Một công ty TNHH trong một đợt quảng cáo và bán hàng khuyến mại hàng hóa (một sản phẩm mới của công ty) cần thuê xe để chở $140$ người và $9$ tấn hàng. Nơi thuê chỉ có hai loại xe $A$ và $B$. Trong đó xe loại $A$ có $10$ chiếc, xe loại $B$ có $9$ chiếc. Một chiếc xe loại $A$ cho thuê với giá $4$ triệu, loại $B$ giá $3$ triệu. Biết rằng xe $A$ chỉ chở tối đa $20$ người và $0{,}6$ tấn hàng; xe $B$ chở tối đa $10$ người và $1{,}5$ tấn hàng. Gọi $x$, $y$ lần lượt là số xe loại $A$ và loại $B$ mà công ty thuê. Khi đó",
  "subQuestions": [
   {
    "text": "Số tiền thuê xe là $4 x+3 y$",
    "answer": true
   },
   {
    "text": "$2 x+y&lt;14$",
    "answer": false
   },
   {
    "text": "$2 x+5 y \\geq 30$",
    "answer": true
   },
   {
    "text": "Sô tiền thuê xe thấp nhất là $32$ triệu",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Gọi $x, y$ lần lượt là số xe loại $A$ và loại $B$ cần phải thuê $(x, y \\in \\mathbb{N})$. Khi đó số tiền thuê xe là $T=4 x+3 y$ (triệu đồng).<br>- Sai. Theo bài ra ta có hệ phương trình: $0 \\leq x \\leq 10 \\text{ và } 0 \\leq y \\leq 9 \\text{ và } 20 x+10 y \\geq 140 \\text{ và } 0{,}6 x+1{,}5 y \\geq 9 \\Leftrightarrow0 \\leq x \\leq 10 \\text{ và } 0 \\leq y \\leq 9 \\text{ và } 2 x+y \\geq 14 \\text{ và } 2 x+5 y \\geq 30$.<br>- Đúng. Miền nghiệm của hệ $(1)$ là miền đa giác $A B C D$ (kể cả biên).  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có bảng  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- Đúng. Giá trị nhó nhất của $T$ là $32$ đạt tại $x=5, y=4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS2",
  "question": "Một gia đinh cần ít nhất $900$ đơn vị protein và $400$ đơn vị lipit trong thức ăn mỗi ngày. Mỗi kilôgam thịt bò chứa $800$ đơn vị protein và $200$ đơn vị lipit. Mỗi kilôgam thịt lợn chứa $600$ đơn vị protein và $400$ đơn vị lipit. Biết rằng gia đình này chỉ mua nhiều nhất là $1{,}6$ kg thịt bò và $1{,}1$ kg thịt lợn; giá tiền $1$ kg thịt bò là $250$ nghìn đồng; $1$ kg thịt lợn là $160$ nghìn đồng. Giả sử gia đình đó mua x kilôgam thịt bò và y kilôgam thịt lợn. Khi đó",
  "subQuestions": [
   {
    "text": "Bất phương trình biểu thị lượng lipit tối thiểu trong thức ăn mỗi ngày của gia đình đó là $x+2 y \\leq 2$",
    "answer": false
   },
   {
    "text": "Các bất phương trình biểu thị các điều kiện của bài toán thành một hệ bất phương trình là $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$",
    "answer": true
   },
   {
    "text": "Gọi $F$ (nghìn đồng) là số tiền phải trả cho $x$ kilôgam thịt bò và $y$ kilôgam thịt lợn. Biểu thức biểu diễn $F$ theo $x$ và $y$ là $F(x; y)=250 x+160 y$",
    "answer": true
   },
   {
    "text": "Để chi phí ít nhất gia đình thì cần mua $0{,}3 k g$ thịt bò và $1{,}1$ thịt lợn",
    "answer": true
   }
  ],
  "explain": "<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Sai. Giả sử gia đình đó mua $x$ kilôgam thịt bò và $y$ kilôgam thịt lợn.  <br>  Một gia đình cần ít nhất $400$ đơn vị lipit trong thức ăn mỗi ngày nên ta có   $200 x+400 y \\geq 400 \\Leftrightarrow x+2 y \\geq 2.$<br>- Đúng. Giả sử gia đình đó mua $x$ kilôgam thịt bò và $y$ kilôgam thịt lợn.  <br>  Số lượng thịt bò và thịt lợn phải là một số không âm nên ta có $x \\geq 0, y \\geq 0$.  <br>  Một gia đình cần ít nhất $900$ đơn vị protein trong thức ăn mỗi ngày nên ta có  $800 x+600 y \\geq 900 \\Leftrightarrow 8 x+6 y \\geq 9.$  Một gia đình cần ít nhất $400$ đơn vị lipit trong thức ăn mỗi ngày nên ta có  $200 x+400 y \\geq 400 \\Leftrightarrow x+2 y \\geq 2.$  Vì gia đînh này chỉ mua nhiều nhất là $1{,}6 kg$ thịt bò và $1{,}1 kg$ thịt lợn nên ta có  $x \\leq 1{,}6$ và $y \\leq 1{,}1$.<br>  Vậy ta có hệ $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2.$  <br>  Miền nghiệm của hệ là miền đa giác $A B C D$ (kể cả biên).<br>  $A(1{,}6; 0{,}2)$ (giao của $d^{\\prime}$ và đường thẳng $x=1{,}6$).<br>  $B(1{,}6; 1{,}1)$ (giao của đường thẳng $x=1{,}6$ và đường thẳng $y=1{,}1$).<br>  $C(0{,}3; 1{,}1)$ (giao của $d$ và đường thẳng $y=1{,}1$)  .<br>  $D(0{,}6; 0{,}7)$ (giao của $d$ và $d^{\\prime}$).<br>- Đúng. Vì số tiền mỗi kg thịt bò và thịt lợn lần lượt là $250$ nghìn đồng và $160$ nghìn đồng nên ta có $F(x; y)=250 x+160 y$ (nghìn đồng).<br>- Đúng. Miền nghiệm của hệ $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$ là tứ giác $A B C D$ với  <br>- $A(1{,}6; 0{,}2)$ (giao của $d^{\\prime}$ và đường thẳng $x=1{,}6$).<br>- $B(1{,}6; 1{,}1)$ (giao của đường thẳng $x=1{,}6$ và đường thẳng $y=1{,}1$).<br>- $C(0{,}3; 1{,}1)$ (giao của $d$ và đường thẳng $y=1{,}1$).<br>- $D(0{,}6; 0{,}7)$ (giao của $d$ và $d^{\\prime}$).  Ta cần tìm giá trị lớn nhất của $F(x; y)$ khi $(x; y)$ thỏa mãn hệ bất phương trình $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$<br>  Ta có bảng  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị nhỏ nhất là $F(0{,}3; 1{,}1)=251$.  <br>  Vậy để chi phí ít nhất thì cần mua $0{,}3 k g$ thịt bò và $1{,}1$ thịt lợn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS3",
  "question": "Một hộ nông dân định trồng dứa và củ đậu trên diện tích $8$ ha. Trên diện tích mỗi ha, nếu trồng dứa thì cần $20$ công và thu $3$ triệu đồng, nếu trồng củ đậu thì cần $30$ công và thu $4$ triệu đồng. Biết rằng tổng số công không quá $180$. Gọi $x$, $y$ lần lượt là số ha trồng dứa và củ đậu. Khi đó các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Số tiền thu được là $T(x, y)=3 x+4 y$",
    "answer": true
   },
   {
    "text": "$x+y \\leq 8$",
    "answer": true
   },
   {
    "text": "$2 x+3 y \\geq 18$",
    "answer": false
   },
   {
    "text": "Số tiền thu được lớn nhất là $26$ triệu đồng",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Gọi $x, y$ lần lượt là số $h a$ trồng dứa và củ đậu.<br>- Sai. Có $0 \\leq x \\leq 8; 0 \\leq y \\leq 8; x+y \\leq 8; 20 x+30 y \\leq 180 \\Rightarrow 2 x+3 y \\leq 18$.<br>- Đúng. Số tiền thu được là $T(x, y)=3 x+4 y$.<br>- Đúng. Ta có hệ $0 \\leq x \\leq 8 \\text{ và } 0 \\leq y \\leq 8 \\text{ và } x+y \\leq 8 \\text{ và } 2 x+3 y \\leq 18.$  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ là miền tứ giác $O A B C$ với $A(0; 6), B(6; 2), C(0; 8)$. Khi đó $T(x, y)$ đạt cực đại tại một trong các đỉnh của $O A B C$.<br>  Có $T(0{,}0)=0$; $T(0; 6)=24$; $T(6; 2)=26$; $T(8; 0)=24$. Vậy số tiền thu được lớn nhất là $26$ triệu đồng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS4",
  "question": "Một công ty thời trang chuẩn bị cho một đợt khuyến mãi nhằm thu hút khách hàng bằng cách tiến hành quảng cáo sản phẩm của công ty trên hai nền tảng mạng xã hội Tik Tok và You Tube. Biết chi phí cho $1000000$ lượt xem quảng cáo trên Tik Tok là $20$ triệu đồng, chi phí cho $1000000$ lượt xem quảng cáo trên You Tube là $40$ triệu đồng. Tik Tok chỉ nhận các hợp đồng trên $6000000$ lượt xem. You Tube do các công ty có nhu cầu quảng cáo lớn nên chỉ nhận các hợp đồng dưới $3000000$ lượt xem. Theo các phân tích, cùng một lượng lượt xem quảng cáo thì trên You Tube cho hiệu quả gấp $3$ lần quảng cáo trên Tik Tok. Công ty thời trang dự tính chi tối đa $160$ triệu cho quảng cáo. Gọi $x$(triệu lượt) là số lượt xem trên Tik Tok, $y$(triệu lượt) là số lượt xem trên You Tube mà công ty cần thuê để quảng cáo. Khi đó các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Số tiền công ty phải trả cho $6$ triệu lượt xem trên TikTok là $120$ triệu đồng",
    "answer": true
   },
   {
    "text": "Chi phí quảng cáo mà công ty phải trả là $20 y+40 x$ triệu đồng",
    "answer": false
   },
   {
    "text": "Để hiệu quảng cáo cao nhất thì giá trị của biểu thức $x+3 y$ là nhỏ nhất",
    "answer": false
   },
   {
    "text": "Khi thời lượng quảng cáo đạt hiểu quả cao nhất thì $x=6$ (triệu lượt), $y=1$ (triệu lượt)",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Do chi phí cho $1000000$ lượt xem quảng cáo trên Tik Tok là $20$ triệu đồng nên Số tiền công ty phải trả cho $6$ triệu lượt xem trên TikTok là $6\\cdot 20=120$ triệu đồng.<br>- Sai. Do số lượt xem trên Tik Tok là $x$ (triệu lượt) với $x \\geq 6$ nên chi phí quảng cáo là $20 x$ (triệu đồng).<br> Do số lượt xem trên You Tube là $y$ (triệu lượt) với $0 \\leq y \\leq 3$ nên chi phí quảng cáo là $40 y$ (triệu đồng).<br> Vậy Chi phí quảng cáo mà công ty phải trả là $20 x+40 y$ triệu đồng.<br>- Sai. Hiệu quả thu được lớn nhất khi giá trị của biểu thức $T=x+3 y$ là lớn nhất.<br>- Đúng. Dựa vào dữ kiện của đề bài ta có hệ bất phương trình $x \\geq 6 \\text{ và } 0 \\leq y \\leq 3 \\text{ và } 20 x+40 y \\leq 160 \\Leftrightarrow x \\geq 6 (1) \\text{ và } 0 \\leq y \\leq 3 (2) \\text{ và } x+2 y-8 \\leq 0. (3)$<br> Ta vẽ các đường thẳng $\\left(d_1\\right)\\colon x=6,\\left(d_2\\right)\\colon y=0,\\left(d_3\\right)\\colon x+2 y-8=0,\\left(d_4\\right)\\colon y=3$ trên cùng hệ trục tọa độ. <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_014.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Lấy điểm $M(1; 1)$ ta thấy $M(1; 1) \\notin(1), M(1; 1) \\in(2), M(1; 1) \\in(3)$. Ta gạch bỏ các phần chứa điểm $M(1; 1)$ của mặt phẳng có bờ là đường thẳng $\\left(d_1\\right)$, gạch bỏ phần không chứa điểm $M(1; 1)$ của mặt phẳng có bờ là đường thẳng $d(2), d(3),\\left(d_4\\right)$. Ta được miền nghiệm của hệ bất phương trình là miền trong và viền của tam giác $A B C$. Trong đó $\\left(d_1\\right) \\cap\\left(d_2\\right)=B(6; 0),\\left(d_1\\right) \\cap\\left(d_3\\right)=A(6; 1),\\left(d_2\\right) \\cap\\left(d_3\\right)=C(8; 0).$ <br>- Với $A(6; 1)$ Hiệu quả thu được: $T=6+3\\cdot 1=9$.<br>- Với $B(6; 0)$ Hiệu quả thu được: $T=6+3\\cdot 0=6$.<br>- Với $A(8; 0)$ Hiệu quả thu được: $T=8+3\\cdot 0=8$. Vậy thời lượng quảng cáo đạt hiểu quả cao nhất thì $x=6$ (triệu lượt), $y=1$ (triệu lượt).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221DS5",
  "question": "Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa $24$ g hương liệu, $9$ lít nước và $210$ g đường để pha chế nước cam và nước táo. Để pha chế $1$ lít nước cam cần $30$ g đường, $1$ lít nước và $1$ g hương liệu; Để pha chế $1$ lít nước táo cần $10$ g đường, $1$ lít nước và $4$ g hương liệu. Mỗi lít nước cam nhận được $60$ điểm thưởng, mỗi lít nước táo nhận được $80$ điểm thưởng, Giả sử $x$, $y$ là số lít nước cam và số lít nước táo mà mỗi đội cần pha chế. Khi đó các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Số gam hương liệu cần dùng là $x+4 y$",
    "answer": true
   },
   {
    "text": "$x+y&gt;9$",
    "answer": false
   },
   {
    "text": "Số điểm thưởng lớn nhất là $640$ điểm",
    "answer": true
   },
   {
    "text": "Điểm thưởng lớn nhất đạt tại $x=4, y=5$",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Giả sử $x$, $y$ là số lít nước cam và số lít nước táo mà mỗi đội cần pha chế.<br>  Suy ra $30 x+10 y$ là số gam đường cần dùng;<br>  $x+y$ là số lít nước cần dùng;<br>  $x+4 y$ là số gam hương liệu cần dùng.<br>- Sai. Theo giả thiết ta có $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } 30 x+10 y \\leq 210 \\text{ và } x+y \\leq 9 \\text{ và } x+4 y \\leq 24 \\Leftrightarrow x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } 3 x+y \\leq 21 \\text{ và } x+y \\leq 9 \\text{ và } x+4 y \\leq 24. (*)$<br>  Số điểm thưởng nhận được sẽ là $P=60 x+80 y$.<br>  Trong mặt phẳng tọa độ $O x y$, vẽ các đường thẳng  $d\\colon 3 x+y-21=0$, $\\left(d'\\right)\\colon x+y-9=0$, $(\\Delta)\\colon x+4 y-24=0$.<br>  Khi đó miền nghiệm của hệ bất phương trình $\\left(^{*}\\right)$ là phần mặt phẳng (ngũ giác $O A B C D$) không tô màu trên hình vẽ  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét các đỉnh của miền khép kín tạo ra bởi hệ $(*)$ là $O(0; 0)$, $A(0; 6)$, $B(4; 5)$, $C(6; 3)$, $D(7; 0)$.<br>  Ta thấy $P$ đạt giá trị lớn nhất tại $x=4, y=5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS6",
  "question": "Bác An dự định trồng hai loại cây ăn trái là mít và xoài trong nông trại rộng $100$ hecta. Biết mỗi hecta trồng mít cần $20$ công chăm sóc và thu lại lợi nhuận $150$ triêu đồng, mỗi hecta trồng xoài cần $40$ công chăm sóc và thu lại lợi nhuận $180$ triệu đồng. Biết rằng tổng số công cần dùng không được vượt quá $2800$ công. Gọi $x$, $y$(hecta) lần lượt là diện tích đất dùng để trồng mít và xoài. Khi đó các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$x+y&lt;100$",
    "answer": false
   },
   {
    "text": "$x+2 y \\leq 140$",
    "answer": true
   },
   {
    "text": "Tổng lợi nhuận thu được là $F=150 x+180 y$(triệu đồng)",
    "answer": true
   },
   {
    "text": "Lợi nhuận thu được lớn nhất là $15$ tỷ đồng",
    "answer": false
   }
  ],
  "explain": "<br>- Sai. $x+y \\leq 100$.<br>- Đúng. Số công cần dùng là $20 x+40 y \\leq 2800$ hay $x+2 y \\leq 140$.<br>- Đúng. Tổng số tiền thu được là $F=150 x+180 y$ (triệu đồng).<br>- Sai. Điều kiện: $x \\geq 0, y \\geq 0$.<br>  Nên ta cần tìm $x, y$ thỏa mãn hệ bất phương trình: $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 100 \\text{ và } x+2 y \\leq 140$ sao cho $F=150 x+180 y$ đạt giá trị lớn nhất.<br>  Biểu diễn tập nghiệm của hệ bất phương trình trên ta được miền tứ giác $O A B C$ (kể cả biên) với $A(0; 70)$, $B(60; 40)$, $C(100; 0)$ và $O(0; 0)$ như hình bên dưới  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_016.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Biểu thức $F=150 x+180 y$ đạt giá trị lớn nhất tại $(x; y)$ là tọa độ một trong các đỉnh của tứ giác.<br>  Ta có  $F(0; 0)=0$, $F(0; 70)=12600$, $F(100; 0)=15000$, $F(60; 40)=16200$.<br>  Khi đó giá trị lớn nhất tại $B(60; 40)$ nghĩa là bác Long cần trồng $60$ hecta mít và 40 hecta xoài thì thu được lợi nhuận lớn nhất là $16{,}2$ tỷ đồng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS7",
  "question": "Một nhà máy sản xuất, sử dụng ba loại máy đặc chủng để sản xuất sản phẩm $A$ và sản phẩm $B$ trong một chu trình sản xuất. Để sản xuất một tấn sản phẩm $A$ người ta sử dụng máy $I$ trong $1$ giờ, máy II trong $2$ giờ và máy III trong $3$ giờ. Để sản xuất ra một tấn sản phẩm $B$ người ta sử dụng máy I trong $6$ giờ, máy II trong $3$ giờ và máy III trong $2$ giờ. Biết rằng máy I chỉ hoạt động không quá $36$ giờ, máy II hoạt động không quá $23$ giờ và máy III hoạt động không quá $27$ giờ. Một tấn sản phẩm $A$ lãi $4$ triệu đồng và một tấn sản phẩm $B$ lãi được $3$ triệu đồng. Gọi $x \\geq 0, y \\geq 0$(tấn) là sản lượng cần sản xuất của sản phẩm $A$ và sản phẩm $B$. Khi đó các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Số tiền lãi của nhà máy: $T(x; y)=4 x+3 y$ (triệu đồng).",
    "answer": true
   },
   {
    "text": "$x+6 y&gt;36$",
    "answer": false
   },
   {
    "text": "$3 x+2 y&lt;27$",
    "answer": true
   },
   {
    "text": "Tiền lãi cao nhất trong một chu trình sản xuất là $37$ triệu đồng",
    "answer": false
   }
  ],
  "explain": "Gọi $x \\geq 0, y \\geq 0$ (tấn) là sản lượng cần sản xuất của sản phẩm $A$ và sản phẩm $B$. Ta có  <br>- $x+6 y$ là thời gian hoạt động của máy I.<br>- $2 x+3 y$ là thời gian hoạt động của máy II.<br>- $3 x+2 y$ là thời gian hoạt động của máy III.  Số tiền lãi của nhà máy: $T(x; y)=4 x+3 y$ (triệu đồng).<br>  Bài toán trở thành: Tìm $x \\geq 0, y \\geq 0$ thỏa mãn $x+6 y \\leq 36 \\text{ và } 2 x+3 y \\leq 23 \\text{ và } 3 x+2 y \\leq 27$ để $T(x; y)=4 x+3 y$ đạt giá trị lớn nhất.<br>  Ta được miền nghiệm là phần giới hạn bởi tam giác $A B C$.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Với $A\\left(\\dfrac{10}{3}; \\dfrac{49}{9}\\right); B\\left(\\dfrac{45}{8}; \\dfrac{81}{16}\\right)$ và $C(7; 3)$.<br>  Nhận thấy $T\\left(\\dfrac{45}{8}; \\dfrac{81}{16}\\right)=4 \\cdot \\dfrac{45}{8}+3 \\cdot \\dfrac{81}{16}=37{,}6875$ triệu đồng, đạt giá trị lớn nhất.<br>  Do đó   <br>- Đúng.<br>- Sai.<br>- Đúng.<br>- Sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS8",
  "question": "Một xưởng cơ khí có hai công nhân là Chiến và Bình. Xưởng sản xuất loại sản phẩm $I$ và $I I$. Mỗi sản phẩm $I$ bán lãi $500$ nghìn đồng, mỗi sản phẩm II bán lãi $700$ nghì đồng. Để sản xuất được một sản phẩm $I$ thì Chiến phải làm việc trong $3$ giờ, Bình phải làm việc trong $1$ giờ. Để sản xuất được một sản phẩm II thì Chiến phải làm việc trong $2$ giờ, Bình phải làm việc trong $6$ giờ. Một người không thể làm được đồng thời hai sản phẩm. Biết rằng trong một tháng Chiến không thể làm việc quá $180$ giờ và Bình không thể làm việc quá $220$ giờ. Gọi $x$, $y$ lần lượt là số sản phẩm loại $I$ và loại $I I$ được sản xuất ra. Điều kiện $x$, $y$ là hai số tự nhiên. Khi đó các mệnh đề sau đúng hay sai?<br>",
  "subQuestions": [
   {
    "text": "$3 x+2 y \\leq 180$",
    "answer": true
   },
   {
    "text": "$x+6 y \\leq 220$",
    "answer": true
   },
   {
    "text": "Tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}7 y$ (triệu đồng)",
    "answer": true
   },
   {
    "text": "Tiền lãi lớn nhất trong một tháng của xưởng là $30$ triệu đồng",
    "answer": false
   }
  ],
  "explain": "<br>- Đúng. Số giờ làm việc của Chiến là $3 x+2 y \\Rightarrow 3 x+2 y \\leq 180$.<br>- Đúng. Số giờ làm việc của Bình là $x+6 y \\Rightarrow x+6 y \\leq 220$.<br>- Đúng. Mỗi sản phẩm $I$ bán lãi $500$ nghìn đồng, mỗi sản phẩm II bán lãi $700$ nghìn đồng nên tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}7 y$ (triệu đồng).<br>- Sai.  Ta có hệ bất phương trình sau: $3 x+2 y \\leq 180 \\text{ và } x+6 y \\leq 220 \\text{ và } x \\geq 0 \\text{ và } y \\geq 0.$<br>  Miền nghiệm của hệ trên là miền đa giác $O A B C$.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Với $O(0; 0), A(60; 0), C\\left(0; \\dfrac{110}{3}\\right)$ và tọa độ $B$ là nghiệm của hệ $3 x+2 y=180 \\text{ và } x+6 y=220 \\Rightarrow B(40; 30)$.<br>  Tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}7 y$(triệu đồng).<br>  Ta thấy $T$ đạt giá trị lớn nhất chỉ có thể tại các điểm $A, B, C$.<br>  Mà   $T(60; 0)=0{,}5\\cdot 60+0{,}7\\cdot 0=30;$<br>$T(40; 30)=0{,}5\\cdot 40+0{,}7\\cdot 30=41;$<br>$T(0; 0)=0{,}5\\cdot 0+0{,}7\\cdot 0=0;$<br>$T\\left(0; \\dfrac{110}{3}\\right)=0{,}5\\cdot 0+0{,}7 \\cdot \\dfrac{110}{3}=\\dfrac{77}{3}.$  Vậy tiền lãi lớn nhất trong một tháng của xưởng là $41$ triệu đồng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS9",
  "question": "Trong một dây chuyển sản xuất có hai công nhân là $A$ và B. Dây chuyền này sản xuất ra sản phẩm loại I và loại II. Mỗi sản phẩm loại I, loại II bán ra thu về lợi nhuận lần lượt là $40000$ đồng và $30000$ đồng. Để sản xuất được một sản phẩm loại I thì A phải làm việc trong $1$ giờ, B phải làm việc trong $2$ giờ. Để sản xuất được một sản phẩm loại II thì A phải làm việc trong $2$ giờ, $B$ phải làm việc trong $1$ giờ. Một người không thể làm đồng thời hai loại sản phẩm. Biết rằng trong một ngày $A$ không thể làm việc quá $10$ giờ, $B$ không thể làm việc quá $8$ giờ. Gọi $x, y$ lần lượt là số sản phẩm loại I và loại II được sản xuất. Khi đó",
  "subQuestions": [
   {
    "text": "Thời gian của công nhân $A$ dùng để sản xuất xuất ra sản phẩm I, II là $x+2 y$",
    "answer": true
   },
   {
    "text": "Lợi nhuận trong một ngày của dây chuyển sản xuất là $T(x; y)=40000 x+30000 y$(đồng)",
    "answer": true
   },
   {
    "text": "Lợi nhuận lớn nhất trong một ngày của dây chuyền sản xuất là $200000$ đồng",
    "answer": true
   },
   {
    "text": "Để có được lợi nhuận lớn nhất thì cần sản xuất $4$ sản phẩm loại I và $2$ sản phẩm loại II",
    "answer": false
   }
  ],
  "explain": "Với $x$, $y$ lần lượt là số sản phẩm loại I và loại II được sản xuất $(x \\in \\mathbb{N}, y \\in \\mathbb{N}$).<br>  Ta có hệ bất phương trình $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+2 y \\leq 10 \\text{ và } 2 x+y \\leq 8(*)$.<br>  Miền nghiệm của hệ bất phương trình $(*)$ được biểu diễn như sau  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ bất phương trình $(*)$ là tứ giác $O A B C$ với $O(0; 0)$, $A(0; 5)$, $B(2; 4)$, $C(4; 0)$.<br>  Lợi nhuận trong một ngày của dây chuyển sản xuất là $T(x; y)=40000 x+30000 y$ (đồng).<br>  Dựa vào miền nghiệm của hệ $\\left(*\\right)$, ta thấy $T$ chỉ đạt giá trị lớn nhất tại $(x; y)$ là tọa độ của một trong các điểm $O(0; 0)$, $A(0; 5)$, $B(2; 4)$, $C(4; 0)$.<br>  Ta có bảng giá trị sau:  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Lợi nhuận lớn nhất trong một ngày của dây chuyền sản xuất là $200000$ đồng khi sản xuất $2$ sản phẩm loại I và $4$ sản phẩm loại II.<br>  Từ đó ta có   <br>- Đúng.<br>- Đúng.<br>- Đúng.<br>- Sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS10",
  "question": "Một xưởng cơ khí có hai công nhân là Chiến và Bình. Xưởng sản xuất loại sản phẩm $I$ và $I I$. Mỗi sản phẩm $I$ bán lãi $500$ nghìn đồng, mỗi sản phẩm II bán lãi $400$ nghìn đồng. Để sản xuất được một sản phẩm $I$ thì Chiến phải làm việc trong $3$ giờ, Bình phải làm việc trong $1$ giờ. Để sản xuất được một sản phẩm II thì Chiến phải làm việc trong $2$ giờ, Bình phải làm việc trong $6$ giờ. Một người không thể làm được đồng thời hai sản phẩm. Biết rằng trong một tháng Chiến không thể làm việc quá $180$ giờ và Bình không thể làm việc quá $220$ giờ. Giả sử $x; y$ lần lượt là số sản phẩm loại $I$ và loại $I I$ được sản xuất ra. Khi đó",
  "subQuestions": [
   {
    "text": "Thời gian Chiến, Bình có thể làm trong một tháng lần lượt là $3 x+2 y; y+6 x$",
    "answer": false
   },
   {
    "text": "Số tiền lãi xưởng thu được $0{,}5 x+0{,}4 y$(triệu đồng)",
    "answer": true
   },
   {
    "text": "Để xưởng đạt được lãi suất cao nhất thì số sản phẩm loại $I$, loại II xưởng cần sản xuất lần lượt là $60$, $40$ sản phẩm",
    "answer": true
   },
   {
    "text": "Lãi cao nhất của xưởng thu được trong $1$ tháng là $30$ triệu đồng",
    "answer": false
   }
  ],
  "explain": "Điều kiện $x, y$ nguyên dương.<br>  Ta có hệ bất phương trình sau $3 x+2 y \\leq 180 \\text{ và } x+6 y \\leq 220 \\text{ và } x&gt;0 \\text{ và } y&gt;0$  Miền nghiệm của hệ trên là  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}4 y$(triệu đồng).<br>  Ta thấy $T$ đạt giá trị lớn nhất chỉ có thể tại các điểm $A, B, C$.<br>  Tại $A(60; 0)$ thì $T=30$ triệu đồng.<br>  Tại $B(40; 30)$ thì $T=32$ triệu đồng.<br>  Tại $C\\left(0; \\dfrac{110}{3}\\right)$ thì $T=\\dfrac{44}{3}$ triệu đồng.<br>  Vậy tiền lãi lớn nhất trong một tháng của xưởng là $32$ triệu đồng.<br>  Do đó   <br>- Sai.<br>- Đúng.<br>- Đúng.<br>- Sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS11",
  "question": "Một gia đình cần ít nhất $900$ đơn vị protein và $400$ đơn vị lipit trong thức ăn mỗi ngày. Mỗi kiogam thịt bò chứa $800$ đơn vị protein và $200$ đơn vị lipit. Mỗi kilogam thịt lợn chứa $600$ đơn vị protein và $400$ đơn vị lipit. Biết rằng gia đình này chỉ mua nhiều nhất $1{,}6$ kg thịt bò và $1{,}1$ kg thịt lợn. Giá tiền một kg thịt bò là $160$ nghìn đồng, một kg thịt lợn là $110$ nghìn đồng. Gọi x, y lần lượt là số kg thịt bò và thịt lợn mà gia đình đó cần mua. Khi đó",
  "subQuestions": [
   {
    "text": "Số tiền gia đình đó cần trả là $160 x+110 y$(nghìn đồng)",
    "answer": true
   },
   {
    "text": "Số đơn vị lipit gia đình đó có trong một ngày là $200 x+400 y$(đơn vị lipit)",
    "answer": true
   },
   {
    "text": "Số tiền mà gia đình đó phải bỏ ra một ngày nhiều nhất là $377$(nghìn đồng)",
    "answer": true
   },
   {
    "text": "Tổng số tiền họ phải trả là ít nhất mà vẫn đảm bảo lượng protein và lipit trong thức ăn thì $x=0{,}3$ kg và $y=1{,}1$ kg",
    "answer": true
   }
  ],
  "explain": "Theo bài ra ta có số tiền gia đình cần trả là $160 \\cdot x+110. y$ với $x, y$ thỏa mãn: $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\leq 1{,}1.$<br>  Số đơn vị protein gia đình có là $800\\cdot x+600\\cdot y \\geq 900 \\Leftrightarrow 8 x+6 y \\geq 9\\left(d_1\\right)$.<br>  Số đơn vị lipit gia đình có là $200\\cdot x+400\\cdot y \\geq 400 \\Leftrightarrow x+2 y \\geq 2\\left(d_2\\right)$.<br>  Bài toán trở thành: Tìm $x, y$ thỏa mãn hệ bất phương trình $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\leq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$ sao cho $T=160\\cdot x+110\\cdot y$ nhỏ nhất.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vẽ hệ trục tọa độ ta tìm được tọa độ các điểm $A(1{,}6; 1{,}1); B(1{,}6; 0{,}2); C(0{,}6; 0{,}7)$; $D(0{,}3; 1{,}1)$.<br>  Nhận xét $T(A)=377$ nghìn, $T(B)=278$ nghìn, $T(C)=173$ nghìn, $T(D)=169$ nghìn.<br>  Vậy tổng số tiền họ phải trả là ít nhất mà vẫn đảm bảo lượng protein và lipit trong thức ăn thì $x=0{,}3$ và $y=1{,}1$.  Do đó   <br>- Đúng.<br>- Đúng.<br>- Sai.<br>- Sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222DS12",
  "question": "Cho hệ bất phương trình $y-2 x \\leq 2 \\text{ và } 2 y-x \\geq 4 \\text{ và } x+y \\leq 5$ $(I)$. Khi đó<br>",
  "subQuestions": [
   {
    "text": "$(0; 3)$ là một nghiệm của $(I)$",
    "answer": false
   },
   {
    "text": "Miền nghiệm của $(I)$ chứa điểm $(1; 3)$",
    "answer": true
   },
   {
    "text": "$M(x; y)$ thuộc miền nghiệm của $(I)$ thì $2 y-x \\leq 7$",
    "answer": true
   },
   {
    "text": "Giá trị nhỏ nhất của biểu thức $F=y-x$ trên miền xác định bởi hệ là $1$",
    "answer": true
   }
  ],
  "explain": "<br>- Sai. Thay $(0; 3)$ vào bất phương trình thứ nhất được $3&lt;2$ vô lý.<br>- Đúng. Thay $(1;3)$ vào hệ thoả mãn.<br>- Đúng. Từ bất phương trình thứ nhất và bất phương trình thứ ba của $(I)$, cộng theo vế ta được   $y-2 x+x+y \\leq 2+5 \\Leftrightarrow 2 y-x \\leq 7.$<br>- Đúng. Miền nghiệm của hệ $y-2 x \\leq 2 \\text{ và } 2 y-x \\geq 4 \\text{ và } x+y \\leq 5$ là miền trong của tam giác $A B C$ kể cả biên.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_023.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy $F=y-x$ đạt giá trị nhỏ nhất chỉ có thể tại các điểm $A, B, C$.<br>  Tại $A(0; 2)$ thì $F=2$.<br>  Tại $B(1; 4)$ thì $F=3$.<br>  Tại $A(2; 3)$ thì $F=1$.<br>  Vậy $\\min F=1$ khi $x=2, y=3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS13",
  "question": "Một cơ sở sản xuất hàng hóa sản xuất hai loại hàng I và II từ nguyên liệu A, B. Trữ lượng các nguyên liệu A và B hằng ngày lần lượt là $12$ kg và $9$ kg. Để sản xuất một thùng hàng loại $I$ cần $2$ kg nguyên liệu loại A và $1$ kg nguyên liệu loại $B$. Để sản xuất một thùng hàng loại II cần $3$ kg nguyên liệu loại A và $3$ kg nguyên liệu loại B. Giá bán một thùng hàng loại I và loại II lần lượt là $5$ triệu đồng và $7$ triệu đồng. Qua tiếp thị, được biết một ngày nhu cầu tiêu thụ hàng loại II là không quá $3$ thùng và nhu cầu hàng loại I hơn hàng loại II không quá $1$ thùng. Gọi $x, y$ lần lượt là số thùng hàng loại I và loại II mà cơ sở sản xuất $(x, y \\in \\mathbb{N})$. Khi đó",
  "subQuestions": [
   {
    "text": "Doanh thu của cửa hàng là $T(x, y)=5 x+7 y$",
    "answer": true
   },
   {
    "text": "Lượng nguyên liệu A, B cần sử dụng lần lượt là $2 x+y$ kg, $3 x+3 y$ kg",
    "answer": false
   },
   {
    "text": "Doanh thu lớn nhất cửa hàng có thể thu được là $21$ triệu đồng",
    "answer": false
   },
   {
    "text": "Trong trường hợp tối ưu, cửa hàng đạt doanh thu lớn nhất thì lượng nguyên liệu loại A cần dùng là $12$ kg",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng. Doanh thu của cửa hàng là $T(x, y)=5 x+7 y$ (triệu đồng).<br>- Sai. Lượng nguyên liệu A, B cần sử dụng lần lượt là $2 x+3 y$ kg, $x+3 y$ kg.<br>- Sai. Theo đề ra ta có $x \\geq 0 \\text{ và } 0 \\leq y \\leq 3 \\text{ và } x-y \\leq 1 \\text{ và } 2 x+3 y \\leq 12 \\text{ và } x+3 y \\leq 9(*)$  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_024.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ bất phương trình (*) là tứ giác $ABCO$ và miền trong của nó(hình vẽ) trong đó $A(0,3), B(3,2), C(1,0), O(0,0)$.<br>  Do biểu thức $T(x, y)=5 x+7 y$ đạt giá trị nhỏ nhất trên miền nghiệm tại một trong $4$ điểm $A, B, C, O$, thay tọa độ các điểm vào, ta được  $T(A)=21$, $T(B)=29$, $T(C)=5$, $T(D)=0$.<br>  Vậy $T_{\\max}=29$ cơ sở nên sản xuất $3$ thùng hàng loại $I$ và $2$ thùng hàng loại II.<br>- Đúng. Khi đó, lượng nguyên liệu loại $A$ cần dùng là $2 \\cdot 3+3 \\cdot 2=12$ kg.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223DS14",
  "question": "Một khách hàng cần đặt một thợ mộc một số bàn học và một số ghế. Để làm một cái bàn học người thợ mất $6$ giờ và mất $4$ giờ để làm một cái ghế. Người thợ mộc có tối đa $36$ giờ/tuần để làm bàn và ghế. Khách hàng yêu cầu người thợ mộc làm số ghế nhiều nhất là hơn số bàn một cái. Số lượng bàn và ghế tối đa người thợ mộc có thể làm được trong một tuần là $7$ cái. Biết một cái bàn học bán ra lãi $180$ nghìn đồng, mỗi cái ghế bán ra lãi $140$ nghìn đồng. Gọi $x$ và $y$ lần lượt là số ghế và số bàn học mà người thợ mộc làm được trong một tuần $(x, y \\geq 0)$. Khi đó",
  "subQuestions": [
   {
    "text": "Số tiền lãi xưởng thu được là $f(x; y)=180 x+140 y$ (nghìn đồng)",
    "answer": false
   },
   {
    "text": "Tổng thời gian hoàn thành số bàn và ghế là $6 x+4 y$ (giờ)",
    "answer": false
   },
   {
    "text": "Số tiền lãi thu về lớn nhất khi người thợ đóng được $3$ cái ghế và $4$ cái bàn trong $1$ tuần",
    "answer": true
   },
   {
    "text": "Số tiền lãi thu về lớn nhất khi người thợ đóng được $21$ cái ghế và $16$ cái bàn trong $5$ tuần",
    "answer": false
   }
  ],
  "explain": "Theo giả thiết bài ra ta có hệ bất phương trình sau đây $4 x+6 y \\leq 36 \\text{ và } y+1 \\geq x \\text{ và } x+y \\leq 7 \\text{ và } x \\geq 0 \\text{ và } y \\geq 0 \\Leftrightarrow2 x+3 y \\leq 18 \\text{ và } x-y \\leq 1 \\text{ và } x+y \\leq 7 \\text{ và } x \\geq 0 \\text{ và } y \\geq 0.$ $(1)$<br> Xét hệ phương trình $2 x+3 y-18=0 \\left(d_1\\right) \\text{ và } x+y=7 \\left(d_2\\right) \\text{ và } x-y-1=0 \\left(d_3\\right) \\text{ và } x \\geq 0 \\text{ và } y \\geq 0.$<br> Với $E=d_1 \\cap d_3 \\text{ và } D=d_1 \\cap O y \\text{ và } C=d_1 \\cap d_2 \\text{ và } B=d_2 \\cap d_3 \\text{ và } A=d_3 \\cap O x \\Rightarrow E\\left(\\dfrac{21}{5}; \\dfrac{16}{5}\\right) \\text{ và } D(0; 6) \\text{ và } C(3; 4) \\text{ và } B(4; 3) \\text{ và } A(1; 0).$<br> Miền nghiệm của hệ $(1)$ là miền trong tứ giác $O A B D$ (kể cả biên) như hình vẽ. <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_025.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Khi đó số tiền lãi mà người thợ mộc thu được là $f(x; y)=140 x+180 y$ (nghìn đồng).<br> Ta có $f(A)=140\\cdot 1=140 \\text{ và } f(B)=140\\cdot 4+180\\cdot 3=1100 \\text{ và } f(C)=140\\cdot 3+180\\cdot 4=1140 \\text{ và } f(D)=140\\cdot 0+180\\cdot 6=1080.$<br> $f_{\\max}(x, y)=f(B)$ nên người thợ mộc cần làm được $3$ cái ghế và $4$ cái bàn trong $1$ tuần thì được số tiền lãi lớn nhất.<br> Ta có điểm $E\\left(\\dfrac{21}{5}; \\dfrac{16}{5}\\right)$ không thuộc miền nghiệm. Do đó <br>- Sai.<br>- Sai.<br>- Đúng.<br>- Sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222DS15",
  "question": "Cho hệ bất phương trình: $y \\geq 0 (1) \\text{ và } 3 x+2 y \\leq 6 (2)$. Khi đó<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_026.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Hệ đã cho là hệ bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Hệ đã cho có một nghiệm duy nhất",
    "answer": false
   },
   {
    "text": "Điểm $A(1; 1)$ không thuộc miền nghiệm của hệ đã cho",
    "answer": false
   },
   {
    "text": "Phần không tô đậm trong hình vẽ dưới đây biểu diễn miền nghiệm của hệ đã cho",
    "answer": true
   }
  ],
  "explain": "<br>- Đúng.<br>- Sai. Vì hệ có vô số nghiệm.<br>- Sai. Vì tọa độ $A(1; 1)$ thỏa mãn hệ đã cho. $ 1 \\geq 0 (1) \\text{ và } 3\\cdot 1+2\\cdot 1=5 \\leq 6. (2) $<br>- Đúng vì <br>- Vẽ các đường thẳng $\\left(d_1\\right): y=0$ (trục hoành).<br> Miền nghiệm của (1) gồm phần $y$ nhận giá trị dương là nửa $mp$ nằm phía trên trục hoành(lấy cả trục hoành)<br>- Vẽ đường thẳng $\\left(d_2\\right): 3 x+2 y=6$ (đi qua hai điểm $(0; 3)$ và $(2; 0)$.<br> Lại có $(0; 0)$ thỏa mãn bất phương trình $3 x+2 y \\leq 6$ nên miền nghiệm của(2) là nửa mp có bờ là đường thẳng $\\left(d_2\\right)$ và chứa điểm $O$ (lấy cả bờ). Suy ra miền nghiệm của hệ đã cho là phần không tô đậm như hình vẽ.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222DS1",
  "question": "Cho hệ bất phương trình $3-y &lt; 0 \\text{ và } 2x-3y+1 &gt; 0$.<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Hệ đã cho không phải là hệ bất phương trình bậc nhất hai ẩn",
    "answer": false
   },
   {
    "text": "$B(4; 3)$ là một điểm thuộc miền nghiệm của hệ",
    "answer": false
   },
   {
    "text": "$C(7; 4)$ là một điểm thuộc miền nghiệm của hệ",
    "answer": true
   },
   {
    "text": "Miền không bị gạch (không kể bờ) là miền nghiệm của hệ",
    "answer": true
   }
  ],
  "explain": "<br>- Hệ bất phương trình $3-y &lt; 0 \\text{ và } 2x-3y+1 &gt; 0$ là hệ bất phương trình bậc nhất hai ẩn.<br>- Thay tọa độ điểm $B(4; 3)$ vào bất phương trình $3-y &lt; 0$ ta được  <br>- $3-3 &lt; 0 \\Leftrightarrow 0 &lt; 0$.  Vì $B(4; 3)$ không thỏa mãn bất phương trình thứ nhất nên nó không thuộc miền nghiệm của hệ<br>- Thay tọa độ điểm $C(7; 4)$ vào hệ:  <br>- $3-y &lt; 0 \\Leftrightarrow 3-4 &lt; 0 \\Leftrightarrow -1 &lt; 0$. Đây là mệnh đề đúng.<br>- $2x-3y+1 &gt; 0 \\Leftrightarrow 2(7)-3(4)+1 &gt; 0 \\Leftrightarrow 14-12+1 &gt; 0 \\Leftrightarrow 3 &gt; 0$. Đây là mệnh đề đúng.  Vì $C(7; 4)$ thỏa mãn cả hai bất phương trình nên nó thuộc miền nghiệm của hệ. Khẳng định “ $C(7; 4)$ là một điểm thuộc miền nghiệm của hệ” là <strong>Đúng</strong>.<br>- <br>- Bất phương trình $3-y &lt; 0 \\Leftrightarrow y &gt; 3$ có miền nghiệm là nửa mặt phẳng phía trên đường thẳng $(d_1)$ (không kể bờ).<br>- Bất phương trình $2x-3y+1 &gt; 0$ có miền nghiệm là nửa mặt phẳng chứa gốc tọa độ $O(0;0)$ (vì $2(0)-3(0)+1=1&gt;0$) (không kể bờ).  Miền nghiệm của hệ là phần giao của hai nửa mặt phẳng trên. Trên hình vẽ, miền không bị gạch chính là phần giao này.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222DS16",
  "question": "Cho hệ bất phương trình $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 2.$",
  "subQuestions": [
   {
    "text": "Điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình đã cho",
    "answer": true
   },
   {
    "text": "Miền nghiệm của hệ bất phương trình chỉ chứa 3 nghiệm có tọa độ là các số nguyên",
    "answer": false
   },
   {
    "text": "Miền nghiệm của hệ bất phương trình là miền tam giác",
    "answer": true
   },
   {
    "text": "Giá trị lớn nhất của $F (x, y)=3x-4y$ với $(x, y)$ thuộc miền nghiệm của hệ bất phương trình là $5$",
    "answer": false
   }
  ],
  "explain": "Miện nghiệm của hệ bất phương trình đã cho.  <br><img src=\"data/10/0D2/im0D22/loc_ghk1lhp_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Dựa vào miền nghiệm đã xác định, điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- Ta có $6$ điểm: $(0;2)$, $(0;1)$, $(0;0)$, $(1;0)$, $(2;0)$, $(1;1)$ đều thuộc miền nghiệm của hệ bất phương trình.<br>- Miền nghiệm của hệ bất phương trình là miền tam giác.<br>- Ta có tọa độ các đỉnh của miền nghiệm là: $(0;2)$, $(0;0)$, $(2;0)$. <br>  Giá trị $F(2,0)=6$ là giá trị lớn nhất của $F(x,y)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221DS2",
  "question": "Cho tam giác $ABC$ có $BC=a=8, AB=c=5, \\widehat{ABC}=60^\\circ$. Xét tính đúng sai của các khẳng định sau:",
  "subQuestions": [
   {
    "text": "Độ dài cạnh $AC=7$",
    "answer": true
   },
   {
    "text": "Góc $\\widehat{BAC}$ là góc tù",
    "answer": false
   },
   {
    "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ bằng $\\dfrac{7\\sqrt{3}}{3}$",
    "answer": true
   },
   {
    "text": "Biểu thức $T=\\sin A-2 \\sin B+\\sin C$ có giá trị bằng 0",
    "answer": false
   }
  ],
  "explain": "<br>- ĐÚNG.<br>  Ta có $AC^2=AB^2+BC^2-2\\cdot AB \\cdot BC \\cdot \\cos \\widehat{ABC} =49 \\Leftrightarrow AC =7$.<br>- SAI.<br>  Ta có $\\cos \\widehat{BAC}=\\dfrac{AB^2+AC^2-BC^2}{2\\cdot AB \\cdot AC}=\\dfrac{1}{7}&gt;0$, vậy góc $\\widehat{BAC}$ là góc nhọn.<br>- ĐÚNG.<br>  Diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}\\cdot BA \\cdot BC \\cdot \\sin \\widehat{ABC}=10\\sqrt{3}.$<br>  $S=\\dfrac{abc}{4R} \\Leftrightarrow R =\\dfrac{abc}{4S}=\\dfrac{7\\sqrt{3}}{3}.$<br>- SAI.<br>  Ta có $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R \\Rightarrow \\sin A = \\dfrac{a}{2R}=\\dfrac{4\\sqrt{3}}{7} \\text{ và } \\sin B = \\dfrac{b}{2R}=\\dfrac{\\sqrt{3}}{2} \\text{ và } \\sin C = \\dfrac{c}{2R}=\\dfrac{5\\sqrt{3}}{14}.$<br>  Từ đó $T=\\sin A-2 \\sin B+\\sin C = -\\dfrac{\\sqrt{3}}{14}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222DS17",
  "question": "Cho hệ bất phương trình $x+2y \\leq 5 \\text{ và } y \\ge 0 \\text{ và } -2x+6y \\ge 12.$",
  "subQuestions": [
   {
    "text": "Cặp số $(-1;3)$ không là nghiệm của hệ bất phương trình trên",
    "answer": false
   },
   {
    "text": "Cặp số $(-2;0)$ là một nghiệm của hệ bất phương trình trên",
    "answer": false
   },
   {
    "text": "Hệ trên là một hệ bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Miền nghiệm của hệ bất phương trình trên là miền tam giác, kể cả ba cạnh, với các đỉnh có tọa độ lần lượt là: $(-6;0)$, $(5;0)$, $(1;1)$",
    "answer": false
   }
  ],
  "explain": "Xét hệ bất phương trình $x+2y \\leq 5 \\quad(1) \\text{ và } y \\ge 0 \\quad(2) \\text{ và } -2x+6y \\ge 12. \\quad(3) \\quad(\\ast)$ <br>- Thay cặp số $(-1;3)$ vào lần lượt ba bất phương trình, ta có <br>- $-1 + 2 \\cdot 3 = 5 \\leq 5$.<br>- $3 \\geq 0$.<br>- $-2 \\cdot (-1) + 6 \\cdot (3) = 20 \\geq 12$. Vậy cặp số $(-1;3)$ là một nghiệm của hệ bất phương trình $(\\ast)$.<br>- Thay cặp số $(-2;0)$ vào bất phương trình $(3)$ ta được $-2 \\cdot (-2) + 6 \\cdot 0 = 4 &lt; 12$.<br> Vậy cặp số $(-2;0)$ không là nghiệm của hệ bất phương trình $(\\ast)$.<br>- Hệ $(\\ast)$ là một hệ bất phương trình bậc nhất hai ẩn.<br>- Miền nghiệm của hệ bất phương $(\\ast)$ là miền tam giác $ABC$, kể cả ba cạnh với các đỉnh lần lượt là $A\\left(\\dfrac{3}{5}; \\dfrac{11}{5}\\right)$; $B\\left(0;\\dfrac{5}{2}\\right)$ và $C(0;2)$ như hình vẽ sau. <br><img src=\"data/10/0D2/im0D22/loc3_0_TN_DS_THPT_chu_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222DS2",
  "question": "Cho hệ bất phương trình $-2x+y\\le2 \\text{ và } -x+2y\\ge4 \\text{ và } x+y\\le5$ có miền nghiệm là miền $D$.",
  "subQuestions": [
   {
    "text": "Hệ bất phương trình trên là hệ bất phương trình bậc nhất hai ẩn",
    "answer": true
   },
   {
    "text": "Cặp số $(x;y)=(1;3)$ là nghiệm của hệ bất phương trình trên",
    "answer": true
   },
   {
    "text": "Miền nghiệm $D$ của hệ bất phương trình trên là một tứ giác",
    "answer": false
   },
   {
    "text": "Giá trị nhỏ nhất của biểu thức $F(x;y)=-x+y$ trên miền $D$ bằng $1$",
    "answer": true
   }
  ],
  "explain": "<br>- Các bất phương trình trong hệ đều là bậc nhất hai ẩn.<br>- Thay $(1;3)$ vào hệ: $-2(1)+3=1\\le2 \\quad (\\text{Đúng}) \\text{ và } -1+2(3)=5\\ge4 \\quad (\\text{Đúng}) \\text{ và } 1+3=4\\le5 \\quad (\\text{Đúng}).$<br>- Xác định giao điểm của các đường thẳng bờ:  <br>- $d_1 \\cap d_2$: $-2x+y=2 \\text{ và } -x+2y=4 \\Leftrightarrow x=0 \\text{ và } y=2 \\Rightarrow M(0;2)$.<br>- $d_2 \\cap d_3$: $-x+2y=4 \\text{ và } x+y=5 \\Leftrightarrow x=2 \\text{ và } y=3 \\Rightarrow N(2;3)$.<br>- $d_1 \\cap d_3$: $-2x+y=2 \\text{ và } x+y=5 \\Leftrightarrow x=1 \\text{ và } y=4 \\Rightarrow P(1;4)$.  <br><img src=\"data/10/0D2/im0D22/loc3_0_TN_DS_TL_THPT__000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm là tam giác $MNP$.<br>- Tính $F(x;y)=-x+y$ tại các đỉnh:<br>- $F(0;2)=2$;<br>- $F(2;3)=-2+3=1$;<br>- $F(1;4)=-1+4=3$.  Vậy giá trị nhỏ nhất là $1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS1",
  "question": "Cho hàm số $y=x^3-3x$ có đồ thị $(C)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Điểm $M(0;1)$ thuộc đồ thị hàm số",
    "answer": false
   },
   {
    "text": "Tập xác định là $\\mathbb{R}$",
    "answer": true
   },
   {
    "text": "Tập xác định là $(-\\infty;+\\infty)$",
    "answer": true
   },
   {
    "text": "Hàm số đi qua điểm $N(1;-2)$",
    "answer": true
   }
  ],
  "explain": "Ta có $y(0)=0$ nên điểm $(0;0)$ thuộc đồ thị hàm số và điểm $M(0;1)$ không thuộc đồ thị hàm số.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS2",
  "question": "Cho hàm số $y=f(x)=\\dfrac{2x-1}{x-2}$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Tập xác định là $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Tập xác định là $\\mathbb{R} \\setminus\\{2\\}$",
    "answer": true
   },
   {
    "text": "Tập xác định là $\\mathscr{D}=(-\\infty;2) \\cup(2;+\\infty)$",
    "answer": true
   },
   {
    "text": "Tập xác định là $\\mathbb{R} \\setminus\\{-2\\}$",
    "answer": false
   }
  ],
  "explain": "Điều kiện $x-2\\neq 0 \\Leftrightarrow x \\neq 2$.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R} \\setminus\\{2\\}$ hoặc $\\mathscr{D}=(-\\infty; 2) \\cup(2;+\\infty)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS3",
  "question": "Cho hàm số $y=f(x)=\\sqrt{x-1}+2 \\text {khi } x \\geq 1 \\text{ và } \\dfrac{x^2-4}{x+1} \\text {khi } x &lt; 1 $. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Hàm số xác định tại giá trị $x=2$",
    "answer": true
   },
   {
    "text": "Điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ thuộc đồ thị hàm số",
    "answer": false
   },
   {
    "text": "Tập xác định của hàm số là $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Giá trị biểu thức $f(0)+f(2)=-1$",
    "answer": true
   }
  ],
  "explain": "<br>- Với $x \\geq 1$ thì hàm số $f(x)=\\sqrt{x-1}+2$ xác định nên hàm số xác định tại $x=2$.<br>- Ta có $f(1)=\\sqrt{1-1}+2=2$ nên điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ không thuộc đồ thị hàm số.<br>- Với $x&lt;1$ hàm số $f(x)=\\dfrac{x^2-4}{x+1}$ không xác định tại $x=-1$.<br>- $f(0)=\\dfrac{0-4}{0+1}=-4$, $f(2)=\\sqrt{2-1}+2=3$. Do đó $f(0)+f(2)=-1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS4",
  "question": "Cho hàm số $y=\\dfrac{2}{x-1}, x \\in(-\\infty; 0) \\text{ và } \\sqrt{x+1}, x \\in[0; 2] \\text{ và } x^2-1, x \\in(2; 5]$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Tập xác định của hàm sồ là $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Điểm $A(0;2)$ thuộc đồ thị hàm số",
    "answer": false
   },
   {
    "text": "Giá trị $f(4)=15$",
    "answer": true
   },
   {
    "text": "Giá trị $f(0)+f(-1)=0$",
    "answer": true
   }
  ],
  "explain": "<br>- Tập xác định của hàm số là $(-\\infty; 5]$.<br>- Với $x=0$ ta có $f(0)=\\sqrt{0+1}=1$ nên điểm $A(0;2)$ không thuộc đồ thị hàm số.<br>- Với $x=4\\Rightarrow f(4)=4^2-1=15$.<br>- Với $x=-1$ ta có $f(-1)=-1$.<br>  Vậy $f(0)+f(-1)=0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D314DS5",
  "question": "Cho đồ thị hàm số $y=f(x)$ có đồ thị như hình bên. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D31/dlts_sbh_ds10cd34_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Đồ thị hàm số đi qua điểm $A(1;0)$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số đi qua điểm $B(3;-2)$",
    "answer": true
   },
   {
    "text": "Đồ thị hàm số đi qua điểm $C(2;-2)$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số đi qua điểm $D(1;2)$",
    "answer": true
   }
  ],
  "explain": "<br>- Đồ thị hàm số đi qua điểm $A(1;0)$ là mệnh đề sai.<br>- Đồ thị hàm số đi qua điểm $B(3;-2)$ là mệnh đề đúng.<br>- Đồ thị hàm số đi qua điểm $C(2;-2)$ là mệnh đề sai.<br>- Đồ thị hàm số đi qua điểm $D(1;2)$ là mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D311DS6",
  "question": "Cho hàm số $y=\\dfrac{-1}{2}x+3$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Điểm $A(2;2)$ thuộc đồ thị hàm số",
    "answer": true
   },
   {
    "text": "Điểm $B(2024;-1009)$ thuộc đồ thị hàm số",
    "answer": true
   },
   {
    "text": "Đồ thị hàm số đi qua điểm $C(0;-3)$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số đi qua điểm $D(6;0)$",
    "answer": true
   }
  ],
  "explain": "<br>- Thay tọa độ điểm $A(2; 2)$ vào hàm số ta được $2=\\dfrac{-1}{2} \\cdot 2+3$ (đúng).<br>  Do đó điểm $A(2;2)$ thuộc đồ thị hàm số. Vậy mệnh đề này đúng.<br>- Thay tọa độ điểm $B(2024;-1009)$ vào hàm số ta được $-1009=\\dfrac{-1}{2}\\cdot (2024)+3$ (đúng).<br>  Do đó điểm $B(2024;-1009)$ thuộc đồ thị hàm số.<br>  Vậy mệnh đề này đúng.<br>- Thay tọa độ điểm $C(0;-3)$ vào hàm số ta được $-3=\\dfrac{-1}{2} \\cdot 0+3$ (sai).<br>  Do đó điểm $C(0;-3)$ không thuộc đồ thị hàm số.<br>  Vậy mệnh đề hàm số đi qua điểm $C(0;-3)$ là mệnh đề sai.<br>- Thay tọa độ điểm $D(6;0)$ vào hàm số ta được $0=\\dfrac{-1}{2} \\cdot 6+3$ (đúng).<br>  Do đó đồ thị hàm số đi qua điểm $D(6;0)$.<br>  Vậy mệnh đề hàm số đi qua điểm $D(6;0)$ là mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D315DS7",
  "question": "Cho hàm số $y=-2x+1$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Hàm số đã cho đồng biến trên trên $(0;+\\infty)$",
    "answer": false
   },
   {
    "text": "Hàm số đã cho nghịch biến trên $\\mathbb{R}$",
    "answer": true
   },
   {
    "text": "Đồ thị của hàm số là một đường thẳng đi lên theo hướng từ trái sang phải",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số luôn cắt trục tung tại điểm có tọa độ $(0;1)$",
    "answer": true
   }
  ],
  "explain": "Hàm số $y=-2x+1$ có hệ số $a=-2&lt; 0$ nên nghịch biến trên $\\mathbb{R}$, đồ thị của nó là một đường thẳng hướng xuống từ trái sang phải, đồ thị luôn cắt trục tung tại điểm có tọa độ $(0;1)$, nên  <br>- Mệnh đề ``Hàm số đã cho đồng biến trên trên $(0;+\\infty)$'' sai.<br>- Mệnh đề ``Hàm số đã cho nghịch biến trên $\\mathbb{R}$'' đúng.<br>- Mệnh đề ``Đồ thị của hàm số là một đường thẳng đi lên theo hướng từ trái sang phải'' sai.<br>- Mệnh đề ``Đồ thị hàm số luôn cắt trục tung tại điểm có tọa độ $(0;1)$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D311DS8",
  "question": "Cho hàm số $y=\\dfrac{2}{3} x-3$ có đồ thị là đường thẳng $d$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Đường thẳng $d$ đi qua điểm $A(1;-1)$",
    "answer": false
   },
   {
    "text": "Đường thẳng $d$ đi qua điểm $A\\left(5; y_0\\right)$ thì $y_0$ là một số nguyên",
    "answer": false
   },
   {
    "text": "Đường thẳng $d$ đi qua điểm $M\\left(x_0; y_0\\right)$ thì $2x_0-3y_0=9$",
    "answer": true
   },
   {
    "text": "Đường thẳng $d$ đi qua $M$ là giao điểm của đường thẳng $y=2x-3$ với trục tung",
    "answer": true
   }
  ],
  "explain": "<br>- Đường thẳng $d$ đi qua điểm $A(1;-1) \\Leftrightarrow-1=\\dfrac{2}{3} \\cdot 1-3 \\Leftrightarrow-1=-\\dfrac{7}{3}$ (vô lý).<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $A(1;-1)$'' sai.<br>- Đường thẳng $d$ có đi qua điểm có hoành độ bằng $5\\Rightarrow y=\\dfrac{2}{3} \\cdot 5-3=\\dfrac{1}{3} \\notin \\mathbb{Z}$.<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $A\\left(5; y_0\\right)$ thì $y_0$ là một số nguyên'' sai.<br>- Đường thẳng $d$ đi qua điểm $M\\left(x_0;y_0\\right)$ thì $y_0=\\dfrac{2}{3} x_0-3 \\Leftrightarrow 2x_0-3y_0=9$.<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $M\\left(x_0; y_0\\right)$ thì $2x_0-3y_0=9$'' đúng.<br>- Giao điểm của đường thẳng $y=2x-3$ với trục tung là $B(0;-3)$.<br>  Ta có $B(0;-3) \\in d$.<br>  Vậy mệnh đề ``Đường thẳng $d$ đi qua điểm $M$ là giao điểm của đường thẳng $y=2x-3$ với trục tung'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D315DS9",
  "question": "Cho hàm số $y=\\left(m^2-1\\right) x+(m-1)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Với $m=3$ hàm số đồng biến trên $\\mathbb{R}$",
    "answer": true
   },
   {
    "text": "Với $m=-2$ đồ thị hàm số là đường thẳng đi lên từ trái qua phải",
    "answer": true
   },
   {
    "text": "Có ba giá trị nguyên của $m$ để hàm số nghịch biến trên $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Hàm số đồng biến trên $\\mathbb{R}$ khi $m \\in(-\\infty;-1) \\cup(1;+\\infty)$",
    "answer": true
   }
  ],
  "explain": "<br>- Khi $m=3$ hàm số trở thành $y=8x+2$ đồng biến trên $\\mathbb{R}$.<br>  Vậy mệnh đề ``Với $m=3$ hàm số đồng biến trên $\\mathbb{R}$'' đúng.<br>- Khi $m=-2$ hàm số trở thành $y=3x-3$ đồng biến trên $\\mathbb{R}$ nên đồ thị hàm số là đường đi lên từ trái qua phải.<br>  Vậy mệnh đề ``Với $m=-2$ đồ thị hàm số là đường thẳng đi lên từ trái qua phải'' đúng.<br>- Hàm số nghịch biến trên $\\mathbb{R}$ khi $m^2-1&lt; 0\\Leftrightarrow-1&lt; m &lt; 1$.<br>  Mà $m$ nhận giá trị nguyên nên chỉ có $1$ giá trị $m=0$ thỏa mãn.<br>  Vậy mệnh đề ``Có ba giá trị nguyên của $m$ để hàm số nghịch biến trên $\\mathbb{R}$'' sai.<br>- Hàm số đồng biến trên $\\mathbb{R}$ khi $m^2-1&gt; 0\\Leftrightarrow m &lt;-1 \\text{ hoặc } m &gt; 1 \\Leftrightarrow m \\in(-\\infty;-1) \\cup(1;+\\infty)$.<br>  Vậy mệnh đề ``Hàm số đồng biến trên $\\mathbb{R}$ khi $m \\in(-\\infty;-1) \\cup(1;+\\infty)$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D311DS10",
  "question": "Cho hàm số $y=(m+5) x+2m-10$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Đồ thị hàm số đi qua điểm $A(2;3)$ khi và chỉ khi $m=\\dfrac{3}{4}$",
    "answer": true
   },
   {
    "text": "Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $9$ khi và chỉ khi $m=3$",
    "answer": false
   },
   {
    "text": "Có $2$ giá trị nguyên của tham số $m$ để đồ thị hàm số tạo với hai trục tọa độ một tam giác có diện tích bằng $4$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số luôn đi qua điểm $M(-2;-20)$ với mọi giá trị của $m$",
    "answer": true
   }
  ],
  "explain": "<br>- Đồ thị hàm số đi qua điểm $A(2;3) \\Rightarrow 3=2(m+5)+2 m-10 \\Leftrightarrow m=\\dfrac{3}{4}$.<br>  Vậy mệnh đề ``Đồ thị hàm số đi qua điểm $A(2;3)$ khi và chỉ khi $m=\\dfrac{3}{4}$'' đúng.<br>- Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $9\\Rightarrow 9=2m-10\\Leftrightarrow m=\\dfrac{19}{2}$.<br>  Vậy mệnh đề ``Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $9$ khi và chỉ khi $m=3$'' sai.<br>- TH1: $m=-5$. Khi đó hàm số trở thành $y=-20$ là đường thẳng song song với trục $Ox$ nên không tạo thành tam giác.<br>   TH2: $m \\neq-5$. Khi đó đồ thị hàm số cắt trục $Ox$ tại $A\\left(\\dfrac{10-2m}{m+5};0\\right)$, cắt trục $Oy$ tại $B(0;2m-10)$.<br>  Tam giác $OAB$ vuông tại $O$ nên  $S_{\\triangle OAB} = \\dfrac{1}{2} \\cdot OA \\cdot OB$<br>$\\Rightarrow \\dfrac{1}{2} \\cdot\\left|\\dfrac{10-2m}{m+5}\\right|\\cdot|2m-10|=4$<br>$\\Leftrightarrow (2m-10)^2=8|m+5|$<br>$\\Leftrightarrow 4m^2-40m+100=8m+40 \\text{ hoặc } 4m^2-40m+100=-8m-40$<br>$\\Leftrightarrow 4m^2-48m+60=0 \\text{ hoặc } 4m^2-32m+140=0$<br>$\\Leftrightarrow m=6\\pm \\sqrt{21}.$  Vậy ``Có $2$ giá trị nguyên của tham số $m$ để đồ thị hàm số tạo với hai trục tọa độ một tam giác có diện tích bằng $4$'' sai.<br>- Ta có $y=(m+5)x+2m-10 \\Leftrightarrow m(x+2)+(5x-y-10)=0$.<br>  Đồ thị hàm số luôn đi qua điểm cố định với mọi $m$ $\\Leftrightarrow x+2=0 \\text{ và } 5x-y-10=0 \\Leftrightarrow x=-2 \\text{ và } y=-20.$<br>  Do đó điểm cố định có tọa độ là $M(-2;-20)$.<br>  Vậy mệnh đề ``Đồ thị hàm số luôn đi qua điểm $M(-2;-20)$ với mọi giá trị của $m$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D315DS11",
  "question": "Cho hàm số $y=\\dfrac{m-2}{m+1}x+2m-1$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Với $m&gt;2$, thì hàm số đồng biến trên $\\mathbb{R}$",
    "answer": true
   },
   {
    "text": "Với $m&lt;1$, thì hàm số nghịch biến trên $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Có $2$ giá trị nguyên của tham số $m$ để hàm số đã cho nghịch biến trên $\\mathbb{R}$",
    "answer": true
   },
   {
    "text": "Có $4$ giá trị của tham số $m$ để giá trị lớn nhất của hàm số trên $[-2;3]$ bằng $5$",
    "answer": false
   }
  ],
  "explain": "<br>- Hàm số đồng biến trên $\\mathbb{R}$ khi và chỉ khi $\\dfrac{m-2}{m+1}&gt;0\\Leftrightarrow m&lt;-1 \\text{ hoặc } m&gt;2.$<br>  Vậy mệnh đề ``Với $m&gt;2$, thì hàm số đồng biến trên $\\mathbb{R}$'' đúng.<br>- Hàm số nghịch biến trên $\\mathbb{R}$ khi và chỉ khi $\\dfrac{m-2}{m+1}&lt;0\\Leftrightarrow -1&lt;m&lt;2$.<br>  Vậy mệnh đề ``Với $m&lt;1$, thì hàm số nghịch biến trên $\\mathbb{R}$'' sai.<br>- Với $-1&lt;m&lt;2$ thì hàm số đã cho nghịch biến trên $\\mathbb{R}$, mà $m$ nguyên nên $m=0$ hoặc $m=1$ để hàm số đã cho nghịch biến trên $\\mathbb{R}$.<br>  Vậy mệnh đề ``Có $2$ giá trị nguyên của tham số $m$ để hàm số đã cho nghịch biến trên $\\mathbb{R}$'' đúng.<br>- TH1: Với $\\dfrac{m-2}{m+1}&gt;0\\Leftrightarrow m&lt;-1 \\text{ hoặc } m&gt;2$ thì hàm số đã cho đồng biến trên $\\mathbb{R}$.<br>  Suy ra $\\max\\limits_{[-2;3]} y=y(3)=\\dfrac{3(m-2)}{m+1}+2m-1=5  \\Leftrightarrow 2m^2-m-12=0 \\Leftrightarrow m=\\dfrac{1+\\sqrt{97}}{4}\\text{ (thỏa mãn)} \\text{ hoặc } m=\\dfrac{1-\\sqrt{97}}{4}\\text{ (thỏa mãn).}$<br>  TH2: Với $\\dfrac{m-2}{m+1}&lt;0 \\Leftrightarrow-1&lt;m&lt;2$ thì hàm số đã cho nghịch biến trên $\\mathbb{R}$.<br>  Suy ra $\\max\\limits_{[-2;3]} y=y(-2)=-2\\cdot\\dfrac{m-2}{m+1}+2m-1=5  \\Leftrightarrow 2m^2-6m-2=0 \\Leftrightarrow m=\\dfrac{3-\\sqrt{13}}{2}\\text{ (thỏa mãn)} \\text{ hoặc } m=\\dfrac{3+\\sqrt{13}}{2}\\text{ (không thỏa mãn)}$.<br>  Do đó có $3$ giá trị của $m$ thỏa mãn yêu cầu.<br>  Vậy mệnh đề ``Có $4$ giá trị của tham số $m$ để giá trị lớn nhất của hàm số trên $[-2;3]$ bằng $5$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D311DS12",
  "question": "Cho hàm số bậc nhất $y=a x+b$ $(a \\neq 0)$, có đồ thị là đường thẳng $(d)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Với $a=2$, $b=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $A$, $B$. Khi đó diện tích của tam giác $OAB$ bằng $\\dfrac{1}{2}$",
    "answer": false
   },
   {
    "text": "Biết $(d)$ đi qua điểm $K(1;-2)$ và cắt đường thẳng $y=2x+1$ tại điểm có hoành độ bằng $6$. Khi đó tổng $S=a+3b=-12$",
    "answer": true
   },
   {
    "text": "Biết $(d)$ đi qua điểm $A(1;3)$ và cắt trục tung tại điểm có tung độ bằng $2$. Khi đó tổng $S=a^2+b=4$",
    "answer": false
   },
   {
    "text": "Với $a=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $P$ và $Q$. Khi đó diện tích tam giác $OPQ$ bằng $2$ thì $b\\in\\{-2;2\\}$",
    "answer": true
   }
  ],
  "explain": "<br>- Với $a=2$, $b=1$, ta có $d\\colon y=2x+1$.<br>  Khi đó $d\\cap Ox=A\\left(-\\dfrac{1}{2};0\\right) \\text{ và } d\\cap Oy=B(0;1)\\Rightarrow S_{\\triangle OAB}=\\dfrac{1}{2}OA\\cdot OB=\\dfrac{1}{2}\\cdot \\dfrac{1}{2}\\cdot 1=\\dfrac{1}{4}$.<br>  Vậy mệnh đề ``Với $a=2$, $b=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $A$, $B$. Khi đó diện tích của tam giác $OAB$ bằng $\\dfrac{1}{2}$'' sai.<br>- Điểm thuộc đường thẳng $y=2x+1$ có hoành độ bằng $6$ là $I(6;13)$.<br>  Gọi $d\\colon y=ax+b$. Ta có $K(1;-2)\\in d \\text{ và } I(6;13)\\in d\\Leftrightarrow a+b=-2 \\text{ và } 6a+b=13\\Leftrightarrow a=3 \\text{ và } b=-5.$<br>  Do đó $S=a+3b=-12$.<br>  Vậy mệnh đề ``Biết $(d)$ đi qua điểm $K(1;-2)$ và cắt đường thẳng $y=2x+1$ tại điểm có hoành độ bằng $6$. Khi đó tổng $S=a+3b=-12$'' đúng.<br>- Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $2$ suy ra đồ thị hàm số đi qua điểm $B(0;2)$.<br>  Đồ thị hàm số đi qua các điểm $A(1;3)$ và $B(0;2)$ nên ta có   \\[3=a\\cdot 1+b \\text{ và } 2=a\\cdot 0+b\\Leftrightarrow a=1 \\text{ và } b=2.\\]  Do đó $S=a^2+b=1^2+2=3$.<br>  Vậy mệnh đề ``Biết $(d)$ đi qua điểm $A(1;3)$ và cắt trục tung tại điểm có tung độ bằng $2$. Khi đó tổng $S=a^2+b=4$'' sai.<br>- Với $a=1$, ta có $d\\colon y=x+b$.<br>  Ta có $d\\cap Ox=P(-b;0),\\, OP=|b| \\text{ và } d\\cap Oy=Q(0;b),\\, OQ=|b|\\Rightarrow S_{\\triangle OPQ}=\\dfrac{1}{2}OP\\cdot OQ=\\dfrac{1}{2}b^2$, $b\\ne 0$.<br>  $S_{\\triangle OPQ}=2\\Leftrightarrow \\dfrac{1}{2}b^2=2\\Leftrightarrow b=\\pm 2$.<br>  Vậy mệnh đề ``Với $a=1$; $(d)$ cắt các trục $Ox$, $Oy$ lần lượt tại $P$ và $Q$. Khi đó diện tích tam giác $OPQ$ bằng $2$ thì $b\\in\\{-2;2\\}$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D315DS13",
  "question": "Cho hàm số $f(x)=|x+m|$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Khi $m=-1$, hàm số $g(x)=f(x)+|x+3|$ nghịch biến trên $(-2025;-5)$",
    "answer": true
   },
   {
    "text": "Khi $m=-1$, gọi $T$ là tập hợp các giá trị nguyên của $x$ để hàm số $g(x)=f(x)+|x+3|$ đạt giá trị nhỏ nhất. Số phần tử của $T$ là $3$",
    "answer": false
   },
   {
    "text": "Khi $m=-1$, miền giá trị của hàm số $h(x)=f(x)+2$ trên $[-1;3]$ là $T=[a;b]$, với $a+b=6$",
    "answer": true
   },
   {
    "text": "Gọi $S$ là tập hợp các giá trị của tham số $m$ để hàm số $f(x)=|x+m|$ đạt giá trị nhỏ nhất trên $[0;2]$ bằng $3$. Tổng tất cả các phần tử của $S$ là $8$",
    "answer": false
   }
  ],
  "explain": "<br>- Khi $m=-1$, hàm số $g(x)=|x-1|+|x+3|$ trên $(-2025;-5)$ có dạng $g(x)=-x+1-x-3=-2x-2$ nên hàm số nghịch biến trên $(-2025;-5)$.<br>  Vậy mệnh đề ``Khi $m=-1$, hàm số $g(x)=f(x)+|x+3|$ nghịch biến trên $(-2025;-5)$'' đúng.<br>- Khi $m=-1$, hàm số $g(x)=|x-1|+|x+3|=-2x-2,\\,x&lt;-3 \\text{ và } 4,\\,-3\\leq x \\leq 1 \\text{ và } 2x+2,\\,x&gt;1$ đạt giá trị nhỏ nhất là $4$, khi $x \\in[-3;1]$. Vì $x$ nguyên nên có $5$ giá trị của $x$ là $-3$; $-2$; $-1$; $0$; $1$.<br>  Vậy mệnh đề ``Khi $m=-1$, gọi $T$ là tập hợp các giá trị nguyên của $x$ để hàm số $g(x)=f(x)+|x+3|$ đạt giá trị nhỏ nhất. Số phần tử của $T$ là $3$'' sai.<br>- Khi $m=-1$, $f(x)=|x-1|$.<br>  Ta có  $-1\\le x\\le 3,\\,\\forall x \\in [-1;3]$<br>$\\Leftrightarrow -2 \\leq x-1 \\leq 2,\\, \\forall x \\in[-1;3]$<br>$\\Leftrightarrow 0 \\leq|x-1|\\leq 2,\\, \\forall x \\in[-1;3]$<br>$\\Leftrightarrow 2 \\leq|x-1|+2 \\leq 4,\\, \\forall x \\in[-1;3]$<br>$\\Leftrightarrow 2 \\leq h(x) \\leq 4,\\, \\forall x \\in[-1;3].$  Vậy miền giá trị của hàm số trên đoạn $[-1;3]$ là $T=[2;4]$. Suy ra $a+b=6$.<br>  Vậy mệnh đề ``Khi $m=-1$, miền giá trị của hàm số $h(x)=f(x)+2$ trên $[-1;3]$ là $T=[a;b]$, với $a+b=6$'' đúng.<br>- Với $\\forall x \\in[0; 2]$ ta có $m \\leq x+m \\leq 2+m$.<br>  Do đó nếu $m \\in[-2;0]$ thì $|x+m|$ đạt giá trị nhỏ nhất là $0$; nếu $m \\notin[-2;0]$ thì $|x+m|$ đạt giá trị nhỏ nhất là min $\\{|m|;|2+m|\\}$.<br>  Yêu cầu bài toán trở thành tìm $m$ sao cho $\\min \\{|m|;|2+m|\\}=3$.<br>  Trường hợp 1: $|m|=3 \\text{ và } |2+m|\\geq 3 \\Leftrightarrow m=3$ (thỏa mãn).<br>  Trường hợp 2: $|m|\\geq 3 \\text{ và } |2+m|=3 \\Leftrightarrow m=-5$ (thỏa mãn).<br>  Do đó giá trị $m$ thỏa mãn bài toán là $m=3$ và $m=-5$. Vậy tổng các giá trị của $m$ là $3-5=-2$.<br>  Vậy mệnh đề ``Gọi $S$ là tập hợp các giá trị của tham số $m$ để hàm số $f(x)=|x+m|$ đạt giá trị nhỏ nhất trên $[0;2]$ bằng $3$. Tổng tất cả các phần tử của $S$ là $8$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D313DS1",
  "question": "Cho hàm số $y=1+2x$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Đồ thị hàm số không cắt trục hoành",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số cắt tung tại một điểm",
    "answer": true
   },
   {
    "text": "Hoành độ giao điểm của đồ thị hàm số với trục hoành là một giá trị dương",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số giao với trục tung tại điểm có tung độ bé hơn $1$",
    "answer": false
   }
  ],
  "explain": "Ta có đồ thị hàm số $y=1+2x$ cắt trục hoành tại điểm có tọa độ là $\\left(-\\dfrac{1}{2}; 0\\right)$ và cắt trục tung tại điểm có tọa độ là $(0;1)$ suy ra  <br>- Mệnh đề ``Đồ thị hàm số không cắt trục hoành'' sai.<br>- Mệnh đề ``Đồ thị hàm số cắt tung tại một điểm'' đúng.<br>- Mệnh đề ``Hoành độ giao điểm của đồ thị hàm số với trục hoành là một giá trị dương'' sai.<br>- Mệnh đề ``Đồ thị hàm số giao với trục tung tại điểm có tung độ bé hơn $1$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS5",
  "question": "Cho hàm số $f(x)=\\dfrac{2x-1}{x^2-6x+5} \\text { khi} x&lt;5 \\text{ và } \\sqrt{x+2} \\text { khi} x \\geq 5 $. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Hàm số xác định tại $x=1$",
    "answer": false
   },
   {
    "text": "Hàm số không xác định tại $x=5$",
    "answer": false
   },
   {
    "text": "Hàm số xác định trong nửa khoảng $[-2;+\\infty)$",
    "answer": false
   },
   {
    "text": "Hàm số xác định trong khoảng $(1;3)$",
    "answer": true
   }
  ],
  "explain": "Hàm số có tập xác định $\\mathbb{R} \\setminus\\{1\\}$ nên  <br>- Mệnh đề ``Hàm số xác định tại $x=1$'' sai.<br>- Mệnh đề ``Hàm số không xác định tại $x=5$'' sai.<br>- Mệnh đề ``Hàm số xác định trong nửa khoảng $[-2;+\\infty)$'' sai.<br>- Mệnh đề ``Hàm số xác định trong khoảng $(1;3)$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS6",
  "question": "Cho hàm số $f(x)=\\sqrt{3x+1}-1 \\text {khi } x \\geq 5 \\text{ và } 2x-7 \\text {khi }-2\\leq x&lt;5 $. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$f(8)=4$",
    "answer": true
   },
   {
    "text": "$f(-3)=-13$",
    "answer": false
   },
   {
    "text": "Có một giá trị của $x$ để $f(x)=1$",
    "answer": true
   },
   {
    "text": "$3f(5)+f(0)=15$",
    "answer": false
   }
  ],
  "explain": "<br>- Với $x=8$ thì $f(8)=\\sqrt{3\\cdot 8+1}-1=4$.<br>- Vì $-3$ không thuộc tập xác định của hàm số nên không tồn tại $f(-3)$.<br>- $f(x)=1\\Leftrightarrow -2\\leq x&lt;5 \\text{ và } 2x-7=1\\Leftrightarrow-2\\leq x&lt;5 \\text{ và } x=4 \\Leftrightarrow x=4$.<br>  Vậy có một giá trị của $x$ để $f(x)=1$ là mệnh đề đúng.<br>- $3f(5)+f(0)=3\\left(\\sqrt{3\\cdot 5+1}-1\\right)+(2\\cdot 0-7)=2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS7",
  "question": "Cho hàm số $y=\\sqrt{3-2x}$ có tập xác định là $\\mathscr{D}$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$\\mathscr{D}=\\left[\\dfrac{3}{2};+\\infty\\right)$",
    "answer": false
   },
   {
    "text": "$x_0=1\\in \\mathscr{D}$",
    "answer": true
   },
   {
    "text": "$(-3;0) \\subset \\mathscr{D}$",
    "answer": true
   },
   {
    "text": "$\\left(\\dfrac{3}{2};3\\right) \\cap \\mathscr{D}=\\left\\{\\dfrac{3}{2}\\right\\}$",
    "answer": false
   }
  ],
  "explain": "<br>- Điều kiện xác định là $3-2x \\geq 0\\Leftrightarrow x \\leq \\dfrac{3}{2}$. Suy ra $\\mathscr{D}=\\left(-\\infty;\\dfrac{3}{2}\\right]$.<br>- $\\mathscr{D}=\\left(-\\infty; \\dfrac{3}{2}\\right]$ nên $x_0=1\\in \\mathscr{D}$.<br>- Vì $(-3;0) \\subset\\left(-\\infty;\\dfrac{3}{2}\\right]$ nên $(-3;0) \\subset\\mathscr{D}$.<br>- $\\left(\\dfrac{3}{2};3\\right) \\cap \\mathscr{D}=\\varnothing$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D315DS1",
  "question": "Cho hàm số $y=(m-7) x+2$ có đồ thị là $(d)$ ($m$ là tham số thực). Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Hàm số đã cho là hàm số nhất $\\Leftrightarrow m \\neq 7$",
    "answer": true
   },
   {
    "text": "$(d)$ luôn đi qua điểm $A(0; 2)$ với mọi $m$",
    "answer": true
   },
   {
    "text": "Khi $m=6$ thì $(d)$ tạo với hai trục tọa độ $Ox$, $Oy$ một tam giác có diện tích bằng $4$",
    "answer": false
   },
   {
    "text": "Chỉ có đúng $6$ giá trị nguyên dương của tham số $m$ để hàm số đã cho là hàm số nghịch biến",
    "answer": true
   }
  ],
  "explain": "<br>- Hàm số đã cho là hàm số bậc nhất $\\Leftrightarrow m-7\\neq 0\\Leftrightarrow m \\neq 7$.<br>  Vậy mệnh đề ``Hàm số đã cho là hàm số nhất $\\Leftrightarrow m \\neq 7$'' đúng.<br>- Thay tọa độ điểm $A(0;2)$ vào công thức hàm số ta được $2=(m-7)\\cdot 0+2$ (luôn đúng với mọi $m$).<br>  Vậy mệnh đề ``$(d)$ luôn đi qua điểm $A(0;2)$ với mọi $m$'' là đúng.<br>- Khi $m=6\\Rightarrow(d)\\colon y=-x+2$.<br>  Gọi $A$, $B$ lần lượt là giao điểm của $(d)$ và $Ox$, $Oy$ $\\Rightarrow A(2;0)$, $B(0;2)$.<br>  Nhận xét: $\\triangle OAB$ vuông tại $O \\Rightarrow S_{\\triangle OAB}=\\dfrac{1}{2} OA \\cdot OB=2$.<br>  Vậy mệnh đề ``Khi $m=6$ thì $(d)$ tạo với hai trục tọa độ $Ox$, $Oy$ một tam giác có diện tích bằng $4$'' sai.<br>- Hàm số đã cho là hàm số nghịch biến $\\Leftrightarrow m-7&lt;0\\Leftrightarrow m&lt;7$.<br>  Mà $m$ là số nguyên dương nên $m \\in\\{1;2;3;4;5;6\\}$.  Vậy mệnh đề ``Chỉ có đúng $6$ giá trị nguyên dương của tham số $m$ để hàm số đã cho là hàm số nghịch biến'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D311DS1",
  "question": "Cho hàm số $y=-x+3$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Đồ thị hàm số cắt trục hoành tại điểm $A(-3;0)$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số cắt trục tung tại điểm $B(0;3)$",
    "answer": true
   },
   {
    "text": "Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác vuông cân",
    "answer": true
   },
   {
    "text": "Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác có diện tích bằng $9$",
    "answer": false
   }
  ],
  "explain": "<br>- Thay tọa độ $A(-3;0)$ vào hàm số $y=-x+3$ ta được $0=6$ (không thoả mãn).<br>  Vậy mệnh đề ``Đồ thị hàm số cắt trục hoành tại điểm $A(-3;0)$'' sai.<br>- Thay tọa độ $B(0;3)$ vào hàm số $y=-x+3$ ta được $3=3$ (thoả mãn).<br>  Vậy mệnh đề ``Đồ thị hàm số cắt trục tung tại điểm $B(0;3)$'' đúng.<br>- Đồ thị hàm số cắt trục hoành, trục tung lần lượt tại điểm điểm $M(3;0)$ và $B(0;3)$ nên $OM=OB=3$. Do đó $\\triangle MOB$ vuông cân tại $O$.<br>  Vậy mệnh đề ``Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác vuông cân'' đúng.<br>- Diện tích tam giác $MOB$ là $S=\\dfrac{1}{2} \\cdot OM\\cdot OB=\\dfrac{1}{2} \\cdot 3\\cdot 3=\\dfrac{9}{2}$.<br>  Vậy mệnh đề ``Đồ thị hàm số cùng với hai trục toạ độ tạo thành tam giác có diện tích bằng $9$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D314DS1",
  "question": "Thành phố Hồ Chí Minh ghi nhận số ca mắc mới Covid-19 trong các tuần đầu năm 2023 như biểu đồ dưới đây.  <br><img src=\"data/10/0D3/im0D31/loc2_0_TN_DS_TLN_Chuy_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đặt $y$ là số ca mắc mới Covid-19 tương ứng với với tuần thứ $x$ thì phép đặt đó cho ta một hàm số $y=f(x)$.",
  "subQuestions": [
   {
    "text": "$f(3)=16$",
    "answer": true
   },
   {
    "text": "Tập giá trị của hàm số là $T=[0;50]$",
    "answer": false
   },
   {
    "text": "Trong $4$ tuần đầu năm 2023, hàm số $y=f(x)$ nghịch biến",
    "answer": true
   },
   {
    "text": "Giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y=f(x)$ lần lượt là $M$, $m$. Khi đó $M-m=14$",
    "answer": false
   }
  ],
  "explain": "<br>- <strong>Đúng</strong>. Với $x=3$ thì số ca mắc bệnh là $16$.<br>- <strong>Sai</strong>. Tập giá trị của hàm số là $T=[3;47]$.<br>- <strong>Đúng</strong>. Trong $4$ tuần đầu năm 2023, hàm số $y=f(x)$ nghịch biến.<br>- <strong>Sai</strong>. Giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y=f(x)$ lần lượt là $M=47$, $m=3$. Khi đó $M-m=47-3=44$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D315DS14",
  "question": "Cho hàm số $f(x) = 5x+2 \\text{ khi } x \\ge 1 \\text{ và } 3-x \\text{ khi } x &lt; 1.$",
  "subQuestions": [
   {
    "text": "Ta có $f(0) = 3$",
    "answer": true
   },
   {
    "text": "Hàm số đã cho đồng biến trên khoảng $(-\\infty;+\\infty)$",
    "answer": false
   },
   {
    "text": "Tập xác định của hàm số đã cho là $\\mathscr{D} = \\mathbb{R}$",
    "answer": true
   },
   {
    "text": "Ta có $f(2) = 12$",
    "answer": true
   }
  ],
  "explain": "<br>- Với $x = 0 &lt; 1$, ta có $f(0) = 3 - 0 = 3$.<br>- Khi $x \\geq 1$, ta có $f(x) = 5x + 2$ là hàm số đồng biến trên khoảng $(1;+\\infty)$.<br>  Khi $x &lt; 1$, ta có $f(x) = 3 - x$ là hàm số nghịch biến trên khoảng $(-\\infty;1)$.<br>  Vậy hàm số không đồng biến trên khoảng $(-\\infty; +\\infty)$.<br>- Khi $x \\geq 1$, ta có $f(x) = 5x + 2$, hàm số có tập xác định là $\\mathscr{D}_1 = [1;+\\infty)$.<br>  Khi $x &lt; 1$, ta có $f(x) = 3 - x$, hàm số có tập xác định là $\\mathscr{D}_2 = (-\\infty;1)$.<br>  Khi đó, hàm số $y = f(x)$ có tập xác định $\\mathscr{D} = \\mathscr{D}_1 \\cup \\mathscr{D}_2 = \\mathbb{R}$.<br>- Với $x = 2 &gt; 1$, ta có $f(2) = 5 \\cdot 2 + 2 = 12$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS8",
  "question": "Cho hàm số $y=f(x)=\\sqrt{x-1}+2 \\text {khi } x \\geq 1 \\text{ và } \\dfrac{x^2-4}{x+1} \\text {khi } x &lt; 1 $. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Hàm số xác định tại giá trị $x=2$",
    "answer": true
   },
   {
    "text": "Điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ thuộc đồ thị hàm số",
    "answer": false
   },
   {
    "text": "Tập xác định của hàm số là $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Giá trị biểu thức $f(0)+f(2)=-1$",
    "answer": true
   }
  ],
  "explain": "<br>- Với $x \\geq 1$ thì hàm số $f(x)=\\sqrt{x-1}+2$ xác định nên hàm số xác định tại $x=2$.<br>- Ta có $f(1)=\\sqrt{1-1}+2=2$ nên điểm $A\\left(1;-\\dfrac{3}{2}\\right)$ không thuộc đồ thị hàm số.<br>- Với $x&lt;1$ hàm số $f(x)=\\dfrac{x^2-4}{x+1}$ không xác định tại $x=-1$.<br>- $f(0)=\\dfrac{0-4}{0+1}=-4$, $f(2)=\\sqrt{2-1}+2=3$. Do đó $f(0)+f(2)=-1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D312DS9",
  "question": "Cho hàm số $y=\\dfrac{2}{x-1}, x \\in(-\\infty; 0) \\text{ và } \\sqrt{x+1}, x \\in[0; 2] \\text{ và } x^2-1, x \\in(2; 5]$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Tập xác định của hàm sồ là $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Điểm $A(0;2)$ thuộc đồ thị hàm số",
    "answer": false
   },
   {
    "text": "Giá trị $f(4)=15$",
    "answer": true
   },
   {
    "text": "Giá trị $f(0)+f(-1)=0$",
    "answer": true
   }
  ],
  "explain": "<br>- Tập xác định của hàm số là $(-\\infty; 5]$.<br>- Với $x=0$ ta có $f(0)=\\sqrt{0+1}=1$ nên điểm $A(0;2)$ không thuộc đồ thị hàm số.<br>- Với $x=4\\Rightarrow f(4)=4^2-1=15$.<br>- Với $x=-1$ ta có $f(-1)=-1$.<br>  Vậy $f(0)+f(-1)=0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS1",
  "question": "Cho hàm số bậc hai $y=2x^2-4x+c$ có đồ thị là một parabol $(P)$. Biết $(P)$ đi qua điểm $M(0; 1)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Trục đối xứng là đường thẳng $x=-1$",
    "answer": false
   },
   {
    "text": "$c&gt;0$",
    "answer": true
   },
   {
    "text": "$(P)$ đi qua $A(1;-1)$",
    "answer": true
   },
   {
    "text": "$(P)$ có bề lõm quay xuống dưới",
    "answer": false
   }
  ],
  "explain": "<br>- Trục đối xứng là đường thẳng $x=1$.<br>- $(P)$ đi qua điểm $M(0;1)$ nên $c=1$.<br>- $(P)$ là đồ thị hàm số $y=2x^2-4x+1$ nên đi qua điểm $A(1;-1)$.<br>- $a=2&gt;0$ nên $(P)$ có bề lõm quay lên trên.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D322DS2",
  "question": "Cho hàm số $y=x^2-4x+3$. Xác định tính đúng sai của các khẳng định sau?",
  "subQuestions": [
   {
    "text": "Trên khoảng $(-\\infty;1)$ hàm số đồng biến",
    "answer": false
   },
   {
    "text": "Hàm số đồng biến trên khoảng $(2;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;2)$",
    "answer": true
   },
   {
    "text": "Trên khoảng $(3;+\\infty)$ hàm số nghịch biến",
    "answer": false
   },
   {
    "text": "Hàm số nghịch biến trên khoảng $(4;+\\infty)$ và đồng biến trên khoảng $(-\\infty;4)$",
    "answer": false
   }
  ],
  "explain": "Hàm số $y=x^2-4x+3$ có $a=1&gt;0$.<br>  Khi $a&gt;0$, hàm số đồng biến trên khoảng $\\left(-\\dfrac{b}{2a};+\\infty\\right)$ và nghịch biến trên khoảng $\\left(-\\infty;-\\dfrac{b}{2a}\\right)$.<br>  Vì vậy hàm số đồng biến trên khoảng $(2;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;2)$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS3",
  "question": "Cho hàm số $f(x)=-3x^2+x+2$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Hàm số luôn nghịch biến trên $\\mathbb{R}$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số đi qua điểm $A(2;-8)$",
    "answer": true
   },
   {
    "text": "Hàm số đồng biến trên khoảng $(0;2)$",
    "answer": false
   },
   {
    "text": "Giá trị lớn nhất của hàm số bằng $\\dfrac{25}{12}$",
    "answer": true
   }
  ],
  "explain": "<br>- Hàm số bậc hai không thể đồng biến hoặc nghịch biến trên $\\mathbb{R}$ nên mệnh đề ``Hàm số luôn nghịch biến trên $\\mathbb{R}$'' sai.<br>- Vì $f(2)=-3\\cdot 2^2+2+2=-8$ nên mệnh đề ``Đồ thị hàm số đi qua điểm $A(2;-8)$'' đúng.<br>- Hàm số $f(x)=-3x^2+x+2$ đồng biến trên khoảng $\\left(-\\infty;\\dfrac{1}{6}\\right)$ mà $(0;2) \\not\\subset\\left(-\\infty;\\dfrac{1}{6}\\right)$.<br>  Vậy mệnh đề ``Hàm số đồng biến trên khoảng $(0;2)$'' sai.<br>- Hàm số $f(x)=-3x^2+x+2$ đạt giá trị lớn nhất tại $x=\\dfrac{1}{6}$ và $f\\left(\\dfrac{1}{6}\\right)=-3\\cdot \\left(\\dfrac{1}{6}\\right)^2+\\dfrac{1}{6}+2=\\dfrac{25}{12}$ nên giá trị lớn nhất của hàm số bằng $\\dfrac{25}{12}$.<br>  Vậy mệnh đề ``Giá trị lớn nhất của hàm số bằng $\\dfrac{25}{12}$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS4",
  "question": "Cho hàm số bậc hai $y=ax^2+bx+c$ có đồ thị là $(P)$. Biết $(P)$ đi qua $A(-1;1)$ và có đỉnh $I(1;-3)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$a+b+c=-3$",
    "answer": true
   },
   {
    "text": "$b=2a$",
    "answer": false
   },
   {
    "text": "$a-2b+3c=-1$",
    "answer": true
   },
   {
    "text": "$(P)$ đi qua điểm $B(4;6)$",
    "answer": true
   }
  ],
  "explain": "Vì $(P)$ có đỉnh $I(1;-3)$ nên ta có $a+b+c=-3 \\text{ và } -\\dfrac{b}{2a}=1 \\Leftrightarrow a+b+c=-3 \\text{ và } b=-2a.$<br>  Suy ra mệnh đề ``$a+b+c=-3$'' đúng, mệnh đề ``$b=2a$'' sai.<br>  Vì $(P)$ đi qua $A(-1;1)$ nên ta có $a-b+c=1$.<br>  Ta có hệ phương trình $a+b+c=-3 \\text{ và } 2a+b=0 \\text{ và } a-b+c=1 \\Leftrightarrow a=1 \\text{ và } b=-2 \\text{ và } c=-2$  $\\Rightarrow a-2b+3c=-1$.<br>  Suy ra mệnh đề ``$a-2b+3c=-1$'' đúng.<br>  Thay tọa độ điểm $B(4;6)$ vào phương trình $(P)\\colon y=x^2-2x-2$ ta được $6=4^2-2\\cdot 4-2\\Leftrightarrow 6=6$ (đúng) nên $B(4;6)\\in (P)$.<br>  Vậy mệnh đề ``$(P)$ đi qua điểm $B(4;6)$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS5",
  "question": "Cho hàm số bậc hai $y=f(x)=-(x-a)(x-b)$ có đồ thị là $(P)$ $(a&lt;b)$. Biết $(P)$ có đỉnh $I(1;4)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$a+2b=1$",
    "answer": false
   },
   {
    "text": "Đường thẳng $(d)\\colon y=x+1$ luôn cắt $(P)$ tại hai điểm phân biệt",
    "answer": true
   },
   {
    "text": "$f(x)&gt;0,\\,\\forall x \\in(-1;2)$",
    "answer": true
   },
   {
    "text": "Giá trị nhỏ nhất của hàm số trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$",
    "answer": true
   }
  ],
  "explain": "Ta có $(P)\\colon y=-x^2+(a+b)x-ab$.<br>  Vì $(P)$ có đỉnh $I(1;4)$ nên ta có  $4=-1+(a+b)-ab \\text{ và } \\dfrac{a+b}{2}=1$<br>$\\Leftrightarrow ab=-3 \\text{ và } a+b=2$<br>$\\Rightarrow a(2-a)=-3$<br>$\\Leftrightarrow a=-1\\Rightarrow b=3\\text{ (nhận)} \\text{ hoặc } a=3\\Rightarrow b=-1\\text{ (loại).}$  <br>- Ta có $a+2b=5$ nên phát biểu “ $a+2b=1$”\\, là sai.<br>- Ta có $(P)\\colon y=-(x+1)(x-3)=-x^2+2x+3$.<br>  Phương trình hoành độ giao điểm của $(P)$ và $(d)$  \\[-x^2+2x+3=x+1\\Leftrightarrow -x^2+x+2=0x=-1 \\text{ hoặc } x=2.\\]  Vậy mệnh đề ``Đường thẳng $(d)\\colon y=x+1$ luôn cắt $(P)$ tại hai điểm phân biệt'' đúng.<br>- Ta có $f(x)=-x^2+2x+3$, $f(x)=0\\Leftrightarrow x=-1 \\text{ hoặc } x=3.$<br>  Suy ra $f(x)&gt;0 \\Leftrightarrow -1&lt;x&lt;3$.<br>  Vậy mệnh đề ``$f(x)&gt;0,\\,\\forall x \\in(-1;2)$'' đúng.<br>- Vì $(P)\\colon y=-x^2+2x+3$ có đỉnh $I(1;4)$ và bề lõm quay xuống nên ta có bảng biến thiên sau  <br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Khi đó giá trị nhỏ nhất của hàm số đã cho trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$.<br>  Vậy mệnh đề ``Giá trị nhỏ nhất của hàm số đã cho trên $\\left[-\\dfrac{1}{2};2\\right]$ là $\\dfrac{7}{4}$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323DS6",
  "question": "Cho hàm số $y=f(x)=ax^2+bx+c$ có đồ thị như hình vẽ bên. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Với $x \\in(-3;-1)$ thì $f(x)&lt;0$",
    "answer": true
   },
   {
    "text": "Ta có $a&gt;0$; $b&gt;0$; $c&gt;0$",
    "answer": true
   },
   {
    "text": "Phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt với mọi $m&gt;0$",
    "answer": false
   },
   {
    "text": "Phương trình $af(x)^2+bf(x)+c=0$ có $4$ nghiệm phân biệt",
    "answer": false
   }
  ],
  "explain": "<br>- $f(x)&lt;0$ tương ứng với phần đồ thị hàm số nằm phía dưới trục hoành, tức là $x \\in(-3;-1)$.<br>  Vậy mệnh đề ``Với $x \\in(-3;-1)$ thì $f(x)&lt;0$'' đúng.<br>- Đồ thị của hàm số có bề lõm hướng lên trên, suy ra $a&gt;0$.<br>  Đồ thị của hàm số có trục đối xứng $x=\\dfrac{-b}{2a}&lt;0\\Rightarrow b&gt;0$.<br>  Đồ thị hàm số cắt trục $Oy$ tại điểm $(0;c)$ có tung độ dương, suy ra $c&gt;0$.<br>  Vậy mệnh đề ``Ta có $a&gt;0$; $b&gt;0$; $c&gt;0$'' đúng.<br>- Từ đồ thị hàm số $y=f(x)$, suy ra đồ thị hàm số $y=|f(x)|$ như sau  <br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd34_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Số nghiệm của phương trình $|f(x)|=m$ chính là số giao điểm của đồ thị hàm số $y=|f(x)|$ và đường thẳng $y=m$.<br>  Căn cứ vào hình vẽ suy ra để phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt khi $0&lt;m&lt;1$.<br>  Vậy mệnh đề ``Phương trình $|f(x)|=m$ có $4$ nghiệm phân biệt với mọi $m&gt;0$'' sai.<br>- Đồ thị hàm số $y=ax^2+bx+c$ đi qua các điểm có tọa độ $(-3;0)$, $(-1;0)$, $(0;3)$ nên  \\[9a-3b+c=0 \\text{ và } a-b+c=0 \\text{ và } c=3\\Leftrightarrow a=1 \\text{ và } b=4 \\text{ và } c=3.\\] $af(x)^2+bf(x)+c=0\\Leftrightarrow f(x)^2+4f(x)+3=0\\Leftrightarrow f(x)=-3 \\text{ hoặc } f(x)=-1.$<br>  Căn cứ vào đồ thị hàm số $y=f(x)$, suy ra phương trình $f(x)=-3$ vô nghiệm, phương trình $f(x)=-1$ có nghiệm duy nhất $x=-2$, suy ra phương trình $af(x)^2+bf(x)+c=0$ có đúng $1$ nghiệm.<br>  Vậy mệnh đề ``Phương trình $af(x)^2+bf(x)+c=0$ có $4$ nghiệm phân biệt'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS7",
  "question": "Xác định tính đúng, sai của các khẳng định sau?",
  "subQuestions": [
   {
    "text": "Tập hợp tất cả các giá trị của tham số $m$ để hàm số $y=mx^2+2(m-1)x+2m+1$ nghịch biến trên $(-1;2)$ là $m \\leq \\dfrac{1}{6}$",
    "answer": false
   },
   {
    "text": "Cho đa thức $f(x)$ hệ số thực và thỏa điều kiện $2f(x)+f(1-x)=x^2,\\, \\forall x \\in \\mathbb{R}$. Hàm số $y=3f(x)$ đồng biến trên $(0;+\\infty)$",
    "answer": true
   },
   {
    "text": "Số giá trị của tham số $m$ sao cho parabol $(P)\\colon y=x^2-4x+m$ cắt trục $Ox$ tại hai điểm phân biệt $A$, $B$ thỏa mãn $OA=3OB$ là $2$",
    "answer": true
   },
   {
    "text": "Cho parabol $(P)\\colon y=f(x)=ax^2+bx+c,\\,a \\neq 0$ biết $(P)$ đi qua $M(4;3)$, $(P)$ cắt $Ox$ tại $N(3;0)$ và $Q$ sao cho $\\triangle INQ$ có diện tích bằng $1$ đồng thời hoành độ điểm $Q$ nhỏ hơn $3$. Khi đó hàm số $f(2x-1)$ đồng biến trên khoảng $\\left(\\dfrac{1}{2};+\\infty\\right)$ ($I$ là đỉnh của parabol $(P)$)",
    "answer": false
   }
  ],
  "explain": "<br>- Ta có $a=m$, $-\\dfrac{b}{2a}=\\dfrac{1-m}{m}$ với $m \\neq 0$.  <br>- Trường hợp $m=0$: Hàm số đã cho trở thành $y=-2x+1$, là hàm số nghịch biến trên $\\mathbb{R}$ nên cũng nghịch biến trên $(-1;2)$. Tức $m=0$ thỏa mãn yêu cầu của bài toán.<br>- Trường hợp $m&lt;0$: Ta có $a=m&lt;0$ nên hàm số nghịch biến trên $\\left(\\dfrac{1-m}{m};+\\infty\\right)$.<br>  Do vậy yêu cầu của bài toán $\\Leftrightarrow \\dfrac{1-m}{m} \\leq-1\\Leftrightarrow \\dfrac{1}{m} \\leq 0$, đúng với $m&lt;0$.<br>- Trường hợp $m&gt;0$: Ta có $a=m&gt;0$ nên hàm số nghịch biến trên $\\left(-\\infty;\\dfrac{1-m}{m}\\right)$.<br>  Do vậy yêu cầu của bài toán $\\Leftrightarrow\\dfrac{1-m}{m} \\geq 2\\Leftrightarrow \\dfrac{1-3m}{m} \\geq 0\\Leftrightarrow 0&lt;m \\leq \\dfrac{1}{3}$.<br>  Tóm lại $m \\leq \\dfrac{1}{3}$.<br>  Vậy mệnh đề ``Tập hợp tất cả các giá trị của tham số $m$ để hàm số $y=mx^2+2(m-1)x+2m+1$ nghịch biến trên $(-1;2)$ là $m \\leq \\dfrac{1}{6}$'' sai.<br>- Từ giả thiết, thay $x$ bởi $1-x$ ta được $2f(1-x)+f(x)=(x-1)^2$.<br>  Khi đó ta có $2f(x)+f(1-x)=x^2 \\text{ và } 2f(1-x)+f(x)=x^2-2x+1\\Rightarrow f(x)=x^2+2x-1$.<br>  Do đó hàm số $y=3f(x)$ đồng biến trên $(-1;+\\infty)$ nên cũng đồng biến trên khoảng $(0;+\\infty)$.<br>  Vậy mệnh đề ``Cho đa thức $f(x)$ hệ số thực và thỏa điều kiện $2f(x)+f(1-x)=x^2,\\, \\forall x \\in \\mathbb{R}$. Hàm số $y=3f(x)$ đồng biến trên $(0;+\\infty)$'' đúng.<br>- Phương trình hoành độ giao điểm của $(P)$ và $Ox$ là $x^2-4x+m=0.\\quad (*)$<br>  $(P)$ cắt $Ox$ tại hai điểm phân biệt $A$, $B\\Leftrightarrow (*)$ có hai nghiệm phân biệt $\\Leftrightarrow \\Delta'=4-m&gt;0\\Leftrightarrow m&lt;4$.<br>  Gọi $x_A$, $x_B$ là hai nghiệm của $(*)$.<br>  Ta có $OA=3OB\\Rightarrow\\left|x_A\\right|=3\\left|x_B\\right|\\Leftrightarrow x_A=3x_B \\text{ hoặc } x_A=-3x_B.$  <br>- TH1: $x_A=3x_B \\Rightarrow x_A=3x_B \\text{ và } x_A+x_B=4 \\text{ và } x_A \\cdot x_B=m  \\Leftrightarrow x_A=3 \\text{ và } x_B=1 \\text{ và } x_A \\cdot x_B=m \\Rightarrow m=x_A \\cdot x_B=3&lt;4$.<br>- TH2: $x_A=-3x_B \\Rightarrow x_A=-3x_B \\text{ và } x_A+x_B=4 \\text{ và } x_A \\cdot x_B=m \\Leftrightarrow x_A=6 \\text{ và } x_B=-2 \\text{ và } x_A \\cdot x_B=m \\Rightarrow m=x_A \\cdot x_B=-12&lt;4$.  Do đó $m \\in\\{-12;3\\}$.<br>  Vậy mệnh đề ``Số giá trị của tham số $m$ sao cho parabol $(P)\\colon y=x^2-4x+m$ cắt trục $Ox$ tại hai điểm phân biệt $A$, $B$ thỏa mãn $OA=3OB$ là $2$'' đúng.<br>- Vì $(P)$ đi qua $M(4;3)$ nên $3=16a+4b+c.\\quad (1)$<br>  Mặt khác $(P)$ cắt $Ox$ tại $N(3;0)$ suy ra $0=9a+3b+c\\quad (2)$.<br>  $(P)$ cắt $Ox$ tại $Q$ nên $Q(t;0)$, $t&lt;3$.<br>  Theo định lý Vi-ét ta có $t+3=-\\dfrac{b}{a} \\text{ và } 3t=\\dfrac{c}{a}.$<br>  Ta có $S_{\\triangle INQ}=\\dfrac{1}{2} IH\\cdot NQ$ với $H$ là hình chiếu của $I\\left(-\\dfrac{b}{2a};-\\dfrac{\\Delta}{4a}\\right)$ lên trục hoành.<br>  Do $IH=\\left|-\\dfrac{\\Delta}{4a}\\right|$, $NQ=3-t$ nên  $S_{\\triangle INQ}=1 \\Leftrightarrow \\dfrac{1}{2}\\left|-\\dfrac{\\Delta}{4a}\\right|\\cdot(3-t)=1$<br>$\\Leftrightarrow (3-t)\\left|\\left(\\dfrac{b}{2a}\\right)^2-\\dfrac{c}{a}\\right|=\\left|\\dfrac{2}{a}\\right|$<br>$\\Leftrightarrow (3-t)\\left|\\dfrac{(t+3)^2}{4}-3t\\right|=\\left|\\dfrac{2}{a}\\right|$<br>$\\Leftrightarrow (3-t)^3=\\dfrac{8}{|a|}.\\quad (3)$  Từ $(1)$ và $(2)$ ta có $7a+b=3\\Leftrightarrow b=3-7a$, suy ra $t+3=-\\dfrac{3-7a}{a} \\Leftrightarrow \\dfrac{1}{a}=\\dfrac{4-t}{3}$.<br>  Thay vào $(3)$ ta có $(3-t)^3=\\dfrac{8(4-t)}{3} \\Leftrightarrow 3t^3-27t^2+73t-49=0\\Leftrightarrow t=1$.<br>  Suy ra $a=1\\Rightarrow b=-4\\Rightarrow c=3$.<br>  Do đó parabol $(P)$ cần tìm là $y=f(x)=x^2-4x+3$.<br>  Khi đó $f(2x-1)=(2 x-1)^2-4(2 x-1)+3=4x^2-12x+8$.  Hàm số này đồng biến trên khoảng $\\left(\\dfrac{3}{2};+\\infty\\right)$.<br>  Vậy mệnh đề ``Hàm số $f(2x-1)$ đồng biến trên khoảng $\\left(\\dfrac{1}{2};+\\infty\\right)$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D322DS8",
  "question": "Cho hàm số: $f(x)=-2x^2+(m-1) x-2$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Tập tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ nằm hoàn toàn phía dưới trục hoành là $(-\\infty;-3] \\cup[5;+\\infty)$",
    "answer": false
   },
   {
    "text": "Tổng các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ cắt đường thẳng $y=x-1$ tại $2$ điểm phân biệt có hoành độ $x_1$, $x_2$: $x_1^2+x_2^2=4$ bằng $4$",
    "answer": true
   },
   {
    "text": "Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty)$ là $\\{5\\}$",
    "answer": false
   },
   {
    "text": "Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=|f(x)|$ đồng biến trên $(2;+\\infty)$ là $[3;5] \\cup[6;9)$",
    "answer": false
   }
  ],
  "explain": "<br>- Đồ thị hàm số $y=f(x)$ nằm hoàn toàn phía dưới trục hoành  $\\Leftrightarrow -2x^2+(m-1) x-2 lt; 0, \\forall x \\in \\mathbb{R}$<br>$\\Leftrightarrow a=-2 lt;0 \\text{ và } \\Delta=(m-1)^2-16 lt;0$<br>$\\Leftrightarrow -3 lt;m lt;5.$  Vậy mệnh đề ``Tập tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ nằm hoàn toàn phía dưới trục hoành là $(-\\infty;-3] \\cup[5;+\\infty)$'' sai.<br>- Phương trình hoành độ giao điểm của đồ thị hàm số $y=f(x)$ và đường thẳng $y=x-1$ là  \\[-2x^2+(m-1) x-2=x-1\\Leftrightarrow 2x^2-(m-2) x+1=0.\\]  Yêu cầu bài toán  $\\Leftrightarrow \\Delta=(m-2)^2-8 gt;0 \\text{ và } \\left(x_1+x_2\\right)^2-2x_1x_2=4$<br>$\\Leftrightarrow (m-2)^2 gt;8 \\text{ và } \\dfrac{(m-2)^2}{4}-2\\cdot \\dfrac{1}{2}=4\\text { (Vi-ét)}$<br>$\\Leftrightarrow (m-2)^2 gt;8 (1) \\text{ và } (m-2)^2=20 \\text{ (thỏa mãn (1))}$<br>$\\Leftrightarrow m^2-4m-16=0.$  Tổng các giá trị thực của tham số $m$ thoả mãn bằng $4$.<br>  Vậy mệnh đề ``Tổng các giá trị thực của tham số $m$ để đồ thị hàm số $y=f(x)$ cắt đường thẳng $y=x-1$ tại $2$ điểm phân biệt có hoành độ $x_1$, $x_2$: $x_1^2+x_2^2=4$ bằng $4$'' đúng.<br>- Hoành độ đỉnh của parabol $y=f(x)$ là $x_I=\\dfrac{m-1}{4}$.<br>  Mà $a=-2&lt;0$ nên hàm số nghịch biến trên khoảng $\\left(\\dfrac{m-1}{4};+\\infty\\right)$.<br>  Khi đó hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty) \\Leftrightarrow \\dfrac{m-1}{4} \\leq 1 \\Leftrightarrow m \\leq 5$.<br>  Vậy mệnh đề ``Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty)$ là $\\{5\\}$'' sai.<br>- Cách vẽ đồ thị hàm số $y=|f(x)|$ từ đồ thị hàm số $y=f(x)$:  <br>- Giữ nguyên phần đồ thị hàm số $y=f(x)$ ở phía trên trục hoành.<br>- Lấy đối xứng phần đồ thị hàm số $y=f(x)$ ở phía dưới trục hoành qua trục hoành rồi xoá phần đồ thị hàm số $y=f(x)$ ở phía dưới trục hoành.  Vì đồ thị hàm số $y=f(x)$ là parabol hướng bề lõm xuống dưới nên:<br>  Hàm số $y=|f(x)|$ đồng biến trên $(2;+\\infty)$ khi và chỉ khi hàm số $y=f(x)$ nghịch biến trên khoảng $(2;+\\infty)$ và $f(x) \\leq 0,\\, \\forall x \\in[2;+\\infty)$  $\\Leftrightarrow f(2)\\leq 0 \\text{ và } \\dfrac{m-1}{4} \\leq 2$<br>$\\Leftrightarrow 2m-12\\leq 0 \\text{ và } m \\leq 9$<br>$\\Leftrightarrow m \\leq 6.$  Do đó $m \\in(-\\infty;6]$.<br>  Vậy mệnh đề ``Tập tất cả các giá trị thực của tham số $m$ để hàm số $y=|f(x)|$ đồng biến trên $(2;+\\infty)$ là $[3;5] \\cup[6;9)$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D324DS1",
  "question": "Cho hàm số $y=x^2+2m x+4$ có đồ thị $(P)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Với $m=1$ đồ thị $(P)$ không cắt trục hoành",
    "answer": true
   },
   {
    "text": "Với $m=-2$ đồ thị $(P)$ tiếp xúc trục hoành",
    "answer": true
   },
   {
    "text": "Với $m=\\dfrac{7}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt",
    "answer": true
   },
   {
    "text": "Với $m=-\\dfrac{5}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt $A$, $B$. Khi đó độ dài đoạn thẳng $AB=4$",
    "answer": false
   }
  ],
  "explain": "<br>- Với $m=1\\Rightarrow y=x^2+2x+4$ ta có đồ thị $(P)\\colon y=x^2+2x+4$ không cắt trục hoành vì phương trình $y=0\\Leftrightarrow x^2+2x+4=0$ vô nghiệm do $\\Delta'=-3&lt;0$.<br>  Vậy mệnh đề ``Với $m=1$ đồ thị $(P)$ không cắt trục hoành'' đúng.<br>- Với $m=-2\\Rightarrow y=x^2-4x+4$ ta có đồ thị $(P)\\colon y=x^2-4x+4$ tiếp xúc trục hoành vì phương trình $y=0\\Leftrightarrow x^2-4x+4=0\\Leftrightarrow(x-2)^2=0$ có nghiệm kép $x=2$.<br>  Vậy mệnh đề ``Với $m=-2$ đồ thị $(P)$ tiếp xúc trục hoành'' đúng.<br>- Với $m=\\dfrac{7}{2} \\Rightarrow y=x^2+7x+4$ ta có đồ thị $(P)\\colon y=x^2+7x+4$ cắt trục hoành tại hai điểm phân biệt vì phương trình $y=0\\Leftrightarrow x^2+7x+4=0$ có hai nghiệm phân biệt do $\\Delta=33&gt;0$.<br>  Vậy mệnh đề ``Với $m=\\dfrac{7}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt'' đúng.<br>- Với $m=-\\dfrac{5}{2} \\Rightarrow y=x^2-5x+4$ ta có phương trình $y=0\\Leftrightarrow x^2-5x+4=0\\Leftrightarrow x=1 \\text{ hoặc } x=4$ có hai nghiệm phân biệt nên đồ thị $(P)\\colon y=x^2-5x+4$ cắt trục hoành tại hai điểm phân biệt $A(1;0)$ và $B(4;0)$. Khi đó độ dài đoạn thẳng $AB=\\sqrt{(4-1)^2}=3$.<br>  Vậy mệnh đề ``Với $m=-\\dfrac{5}{2}$ đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt $A$, $B$. Khi đó độ dài đoạn thẳng $AB=4$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323DS1",
  "question": "Cho hàm số $y=f(x)$ có đồ thị dạng parabol như hình bên. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd33b2_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Parabol trên là đồ thị của hàm số $y=-x^2+2x$",
    "answer": true
   },
   {
    "text": "Khoảng nghịch biến của hàm số $f(x)$ là $(-\\infty;2)$",
    "answer": false
   },
   {
    "text": "Tập nghiệm của bất phương trình $f(x) \\geq 0$ là $S=(0;2)$",
    "answer": false
   },
   {
    "text": "$f(x)&lt;0,\\,\\forall x \\in(-\\infty;0) \\cup(2;+\\infty)$",
    "answer": true
   }
  ],
  "explain": "Giả sử $y=f(x)=ax^2+bx+c$ $(a \\neq 0)$.<br>- Dựa vào đồ thị đề bài cho suy ra  $c=0 \\text{ và } a+b+c=1 \\text{ và } 4a+2b+c=0   \\Leftrightarrow  a=-1 \\text{ và } b=2 \\text{ và } c=0.$<br>  Do đó $y=-x^2+2x$.<br>  Vậy mệnh đề ``Parabol trên là đồ thị của hàm số $y=-x^2+2x$'' đúng.<br>- Dựa vào đồ thị ta thấy trên khoảng $(-\\infty;1)$ đồ thị đi lên từ trái sang phải nên hàm số đồng biến trên khoảng $(-\\infty;1)$, trên khoảng $(1;+\\infty)$ đồ thị đi xuống từ trái sang phải nên hàm số nghịch biến trên khoảng $(1;+\\infty)$.<br>  Vậy mệnh đề ``Khoảng nghịch biến của hàm số $f(x)$ là $(-\\infty;2)$'' sai.<br>- Dựa vào đồ thị suy ra tập nghiệm của bất phương trình $f(x) \\geq 0$ là $S=[0;2]$.<br>  Vậy mệnh đề ``Tập nghiệm của bất phương trình $f(x) \\geq 0$ là $S=(0;2)$'' sai.<br>- Trên $(-\\infty;0) \\cup(2;+\\infty)$, đồ thị hàm số $f(x)$ nằm phía dưới trục $Ox$ nên $f(x)&lt;0,\\,\\forall x\\in (-\\infty;0) \\cup(2;+\\infty)$.<br>  Vậy mệnh đề ``$f(x)&lt;0,\\,\\forall x \\in(-\\infty;0) \\cup(2;+\\infty)$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323DS2",
  "question": "Cho hàm số bậc hai $y=ax^2+bx+c$ có đồ thị như hình vẽ sau. Các mệnh đề sau đúng hay sai?<br><img src=\"data/10/0D3/im0D32/dlts_sbh_ds10cd33b2_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "$a&gt;0$",
    "answer": true
   },
   {
    "text": "$c&gt;0$",
    "answer": false
   },
   {
    "text": "$a-2b+c=7$",
    "answer": true
   },
   {
    "text": "$a-b^2+c^3=10$",
    "answer": false
   }
  ],
  "explain": "Khi $x=1$ thì $y=-2\\Rightarrow a+b+c=-2$.<br>  Khi $x=2$ thì $y=1\\Rightarrow 4a+2b+c=1$.<br>  Đồ thị cắt trục tung tại điểm có tung độ bằng $-1$ nên $c=-1$.<br>  Ta có hệ phương trình $c=-1 \\text{ và } a+b+c=-2 \\text{ và } 4a+2b+c=1 \\Leftrightarrow a=2 \\text{ và } b=-3 \\text{ và } c=-1.$  <br>- Vì bề lõm của parabol quay lên nên $a&gt;0$.  Vậy mệnh đề ``$a&gt;0$'' đúng.<br>- Ta có $c=-1&lt;0$ nên mệnh đề ``$c&gt;0$'' sai.<br>- Ta có $a-2b+c=7$ nên mệnh đề ``$a-2b+c=7$'' đúng.<br>- Ta có $a-b^2+c^3=-8$ nên mệnh đề ``$a-b^2+c^3=10$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D322DS1",
  "question": "Cho hàm số $y=-x^2+2mx+1$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Với $m=1$ hàm số đồng biến trên khoảng $(-\\infty;1)$",
    "answer": true
   },
   {
    "text": "Với $m=-2$ hàm số nghịch biến trên khoảng $(-\\infty;-2)$",
    "answer": false
   },
   {
    "text": "Hàm số đồng biến trên $(-\\infty;3)$ khi và chỉ khi $m=3$",
    "answer": false
   },
   {
    "text": "Có $4$ giá trị nguyên dương của $m$ để hàm số nghịch biến $(5;+\\infty)$",
    "answer": false
   }
  ],
  "explain": "Ta có $a=-1&lt;0$; $-\\dfrac{b}{2a}=m$ nên hàm số đã cho đồng biến trên khoảng $(-\\infty;m)$, nghịch biến trên khoảng $(m;+\\infty)$.  <br>- Với $m=1$ hàm số đồng biến trên khoảng $(-\\infty;1)$ nên mệnh đề ``Với $m=1$ hàm số đồng biến trên khoảng $(-\\infty;1)$'' đúng.<br>- Với $m=-2$ hàm số đồng biến trên khoảng $(-\\infty;-2)$ nên mệnh đề ``Với $m=-2$ hàm số nghịch biến trên khoảng $(-\\infty;-2)$'' sai.<br>- Hàm số đồng biến trên $(-\\infty;3)$ khi và chỉ khi $(-\\infty;3) \\subset(-\\infty;m) \\Leftrightarrow m \\geq 3$ nên mệnh đề ``Hàm số đồng biến trên $(-\\infty;3)$ khi và chỉ khi $m=3$'' sai.<br>- Hàm số nghịch biến $(5;+\\infty)$ khi và chỉ khi $(5;+\\infty) \\subset(m;+\\infty) \\Leftrightarrow m \\leq 5$ mà do $m$ nguyên dương nên $m \\in\\{1; 2; 3; 4; 5\\}$ nên có $5$ giá trị $m$ thỏa mãn nên mệnh đề ``Có $4$ giá trị nguyên dương của $m$ để hàm số nghịch biến $(5;+\\infty)$'' sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS8",
  "question": "Cho hàm số $y=-x^2+2x+3$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}$",
    "answer": true
   },
   {
    "text": "Tọa độ đỉnh $I(1;2)$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số có trục đối xứng là đường thẳng $x=2$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số là Parabol có bề lõm hướng xuống dưới",
    "answer": true
   }
  ],
  "explain": "Hàm số $y=-x^2+2x+3$ có $a=-1$, $b=2$, $c=3$.  <br>- Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}$.<br>- Tọa độ đỉnh $x_I=-\\dfrac{b}{2a}=1$; $y_I=-1^2+2\\cdot 1+3=4\\Rightarrow I(1;4)$.<br>- Đồ thị hàm số có trục đối xứng là đường thẳng $x=1$.<br>- Vì $a=-1&lt;0$ nên đồ thị hàm số là Parabol có bề lõm hướng xuống dưới.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D324DS2",
  "question": "Trong mặt phẳng tọa độ cho đồ thị $(P)\\colon y=2x^2-3x+2$ và $(d)\\colon y=x+2$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Parabol $(P)$ và đường thẳng $(d)$ không giao nhau",
    "answer": false
   },
   {
    "text": "Số giao điểm của Parabol $(P)$ và đường thẳng $(d)$ là $2$",
    "answer": true
   },
   {
    "text": "Hoành độ giao điểm của Parabol $(P)$ và đường thẳng $(d)$ lần lượt là $x=2$ và $x=0$",
    "answer": true
   },
   {
    "text": "Tọa độ giao điểm của Parabol $(P)$ và đường thẳng $(d)$ lần lượt là $A(0;2)$ và $B(2;0)$",
    "answer": false
   }
  ],
  "explain": "Phương trình hoành độ giao điểm của Parabol $(P)\\colon y=2x^2-3x+2$ và đường thẳng $(d)\\colon y=x+2$ là  \\[2x^2-3x+2=x+2\\Leftrightarrow 2x^2-4x=0\\Leftrightarrow x=2 \\text{ hoặc } x=0.\\]  Suy ra Parabol $(P)$ và đường thẳng $(d)$ giao nhau tại hai điểm phân biệt có toạ độ lần lượt là $A(0;2)$ và $B(2;4)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS2",
  "question": "Cho hàm số $y=f(x)=x^2$ có đồ thị $(C)$ và hàm số $y=g(x)=-2x+3$ có đồ thị là đường thẳng $(d)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Điểm $M(-1;1)$ thuộc đồ thị $(C)$",
    "answer": true
   },
   {
    "text": "Hàm số $y=f(x)$ nghịch biến trên $(1;5)$",
    "answer": false
   },
   {
    "text": "Đồ thị hàm số $(C)$ đi qua giao điểm của đường thẳng $(d)$ với trục tung",
    "answer": false
   },
   {
    "text": "Điểm $A(1;1)$ và $B(-3;9)$ là hai giao điểm của đồ thị $(C)$ và đường thẳng $(d)$",
    "answer": true
   }
  ],
  "explain": "<br>- Ta có $f(-1)=1$ nên $M(-1; 1) \\in(C)$.<br>  Vậy mệnh đề ``Điểm $M(-1;1)$ thuộc đồ thị $(C)$'' đúng.<br>- Hàm số $y=f(x)=x^2$ đồng biến trên $(0;+\\infty)$ và nghịch biến trên $(-\\infty;0)$.<br>  Lại có $(1;5) \\subset(0;+\\infty)$ nên hàm số đồng biến trên $(1;5)$.<br>  Vậy mệnh đề ``Hàm số $y=f(x)$ nghịch biến trên $(1;5)$'' sai.<br>- Đường thẳng $(d)$ cắt trục tung tại điểm có $N(0;3)$. Ta có $f(0)=0$ nên điểm $N(0;3)$ không thuộc đồ thị hàm số $(C)$.<br>  Vậy mệnh đề ``Đồ thị hàm số $(C)$ đi qua giao điểm của đường thẳng $(d)$ với trục tung'' sai.<br>- Thay tọa độ điểm $A(1;1)$ và $B(-3;9)$ vào phương trình của $(C)$ và $(d)$ đều thỏa mãn.<br>  Vậy mệnh đề ``Điểm $A(1;1)$ và $B(-3;9)$ là hai giao điểm của đồ thị $(C)$ và đường thẳng $(d)$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321DS9",
  "question": "Cho hàm số $y=a x^2+b x+2$ với $a \\neq 0$, có đồ thị là $(P)$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Biết $(P)$ đi qua hai điểm $M(1;0)$ và $N(-1;0)$. Khi đó $a+2024b=-2$",
    "answer": true
   },
   {
    "text": "Biết $(P)$ đi qua điểm $E(-1;5)$ và có trục đối xứng là $x=1$. Khi đó $2a+b=1$",
    "answer": false
   },
   {
    "text": "Biết $(P)$ đi qua điểm $F(-1;6)$ và có tung độ đỉnh bằng $-\\dfrac{1}{4}$. Khi đó $ab=-36$",
    "answer": false
   },
   {
    "text": "Biết $(P)$ có đỉnh là điểm $S\\left(-1;-\\dfrac{3}{2}\\right)$. Khi đó $(2a+b)\\,\\vdots\\, 14$",
    "answer": true
   }
  ],
  "explain": "<br>- $(P)$ đi qua hai điểm $M(1;0)$ và $N(-1;0)$ nên ta có $a+b+2=0 \\text{ và } a-b+2=0\\Leftrightarrow a=-2 \\text{ và } b=0.$<br>  Do đó $a+2024b=-2$.<br>  Vậy mệnh đề ``Biết $(P)$ đi qua hai điểm $M(1;0)$ và $N(-1;0)$. Khi đó $a+2024b=-2$'' đúng.<br>- $(P)$ có trục đối xứng là $x=1\\Rightarrow-\\dfrac{b}{2a}=1\\Rightarrow 2a+b=0\\quad (1)$.<br>  Mặt khác $(P)$ đi qua điểm $E(-1;5)$ nên $a-b+2=5\\Leftrightarrow a-b=3\\quad (2)$.<br>  Từ $(1)$, $(2)$ suy ra $a=1$, $b=-2$. Do đó $2a+b=0$.<br>  Vậy mệnh đề ``Biết $(P)$ đi qua điểm $E(-1;5)$ và có trục đối xứng là $x=1$. Khi đó $2a+b=1$'' sai.<br>- $(P)$ đi qua điểm $F(-1;6)$ nên $a-b+2=6\\Leftrightarrow a-b=4\\Leftrightarrow a=b+4$ \\quad $(3)$.<br>  Lại có $(P)$ có tung độ đỉnh bằng $-\\dfrac{1}{4}$ nên  $-\\dfrac{\\Delta}{4a}=-\\dfrac{1}{4} \\Rightarrow \\dfrac{b^2-4ac}{4a}=\\dfrac{1}{4} \\Rightarrow b^2-8a=a \\Rightarrow b^2-9a=0\\quad (4)$.<br>  Thay $(3)$ vào $(4)$ được $b^2-9(b+4)=0\\Leftrightarrow b^2-9b-36=0\\Leftrightarrow b=-3\\Rightarrow a=1 \\text{ hoặc } b=12\\Rightarrow a=16.$<br>  Suy ra $ab=-3$ hoặc $ab=192$.<br>  Vậy mệnh đề ``Biết $(P)$ đi qua điểm $F(-1;6)$ và có tung độ đỉnh bằng $-\\dfrac{1}{4}$. Khi đó $ab=-36$'' sai.<br>- Vì $(P)$ có đỉnh là điểm $S\\left(-1;-\\dfrac{3}{2}\\right)$ nên hoành độ đỉnh $x=-1=-\\dfrac{b}{2a} \\Rightarrow 2a-b=0\\quad (5)$.<br>  Lại có $(P)$ đi qua $S\\left(-1;-\\dfrac{3}{2}\\right)$ nên $a-b+2=-\\dfrac{3}{2} \\Leftrightarrow a-b=-\\dfrac{7}{2}\\quad (6)$.<br>  Từ $(5)$, $(6)$ ta được $a=\\dfrac{7}{2}$, $b=7$ $\\Rightarrow 2a+b=14$.<br>  Vậy mệnh đề ``Biết $(P)$ có đỉnh là điểm $S\\left(-1;-\\dfrac{3}{2}\\right)$. Khi đó $(2a+b)\\,\\vdots\\, 14$'' đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323DS7",
  "question": "Cho hàm số bậc hai $y=f(x)=a x^2+b x+c$ có đồ thị như hình vẽ bên.<br><img src=\"data/10/0D3/im0D32/loc_ghk1lhp_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Đồ thị hàm số có trục đối xứng $x=-\\dfrac{3}{2}$",
    "answer": true
   },
   {
    "text": "$a &gt; 0$, $b &lt; 0$, $c &gt; 0$",
    "answer": false
   },
   {
    "text": "Phương trình $f(x)=0$ có hai nghiệm phân biệt",
    "answer": true
   },
   {
    "text": "Tập hợp các giá trị $x$ nguyên sao cho $f(x) \\leq 3$ có $4$ phần tử",
    "answer": false
   }
  ],
  "explain": "<br>- Đồ thị hàm số có trục đối xứng là $x=-\\dfrac{3}{2}$.<br>- Dựa vào hình dáng đồ thị hàm số, ta có $a&gt;0$.<br>  Ta có $f(0)=3=c&gt;0$.<br>  Đồ thị hàm số có trục đối xứng là $x=-\\dfrac{3}{2}$, do đó $-\\dfrac{b}{2a}=-\\dfrac{3}{2}$, suy ra $b&gt;0$.<br>- Đồ thị hàm số cắt trục hoành tại hai điểm phân biệt nên phương trình $f(x)=0$ có hai nghiệm phân biệt.<br>- Trên đoạn $\\left[ -\\dfrac{3}{2};0\\right]$ phương trình $f(x)=0$ có $2$ giá trị nguyên $x=-1$, $x=0$ thỏa mãn $f(x)\\le 3$. Do $x=-\\dfrac{3}{2}$ là trục đối xứng của đồ thị hàm số nên có $4$ giá trị nguyên thảo mãn yêu cầu.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323DS8",
  "question": "Cho hàm số $y=-x^2+3$. Khi đó:",
  "subQuestions": [
   {
    "text": "Tọa độ đỉnh $I$ của parabol $I(0;3)$",
    "answer": true
   },
   {
    "text": "Bề lõm parabol hướng lên",
    "answer": false
   },
   {
    "text": "Hàm số đã cho đồng biến trên khoảng $(0;+\\infty)$ và nghịch biến trên khoảng $(-\\infty;0)$",
    "answer": false
   },
   {
    "text": "Giá trị lớn nhất của hàm số là $3$, khi $x=0$",
    "answer": true
   }
  ],
  "explain": "<br>- ĐÚNG.<br>  Ta có $a=-1$, $b=0$, $c=-3$ từ đó hoành độ đỉnh $I$ là $x_{I}=-\\dfrac{b}{2a}=0$ và tung độ đỉnh $y_{I}=-0^2+3=3$. Vậy $I(0;3)$.<br>- SAI.<br>  Vì hệ số $a=-1&lt;0$ nên bề lõm parabol hướng xuống dưới.<br>- SAI.<br>  Ta có bảng biến thiên:  <br><img src=\"data/10/0D3/im0D32/loc2_0_TL_TN_DS_THPT__002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên hàm số đã cho nghịch biến trên khoảng $(0;+\\infty)$ và đồng biến trên khoảng $(-\\infty;0)$.<br>- ĐÚNG.<br>  Với hệ số $a=-1&lt;0$ thì hàm số đạt giá trị lớn nhất tại $x=-\\dfrac{b}{2a}=0$ là giá trị lớn nhất của hàm số là $y(0)=3$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323DS9",
  "question": "Xét hàm số bậc hai $y = -x^2 + 4x + 5$ có đồ thị là parabol $(P)$.",
  "subQuestions": [
   {
    "text": "Trục đối xứng của đồ thị $(P)$ là đường thẳng $x = 2$",
    "answer": true
   },
   {
    "text": "Tung độ đỉnh $I$ của parabol $(P)$ là $y_I = 9$",
    "answer": true
   },
   {
    "text": "Hệ số $a = -1 &lt; 0$, nên đồ thị của hàm số là parabol có bề lõm hướng lên trên",
    "answer": false
   },
   {
    "text": "Giá trị lớn nhất của hàm số trên đoạn $[0; 4]$ là $12$",
    "answer": false
   }
  ],
  "explain": "<br>- Trục đối xứng của đồ thị hàm số là $x = \\dfrac{-4}{2 \\cdot (-1)} = 2$.<br>- Ta có hoành độ đỉnh $I$ của parabol là $x_I = 2$.<br>  Thay $x = 2$ vào hàm số ta được $y = -2^2 + 4 \\cdot 2 + 5 = 9$.<br>  Suy ra tung độ đỉnh $I$ của parabol là $y_I = 9$.<br>- Do hệ số $a = -1 &lt; 0$ nên đồ thị hàm số có bề lõm hướng xuống dưới.<br>- Bảng biên thiên của đồ thị hàm số  <br><img src=\"data/10/0D3/im0D32/loc3_0_TN_DS_THPT_chu_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên, suy ra trên đoạn $[0; 4]$, hàm số đạt giá trị lớn nhất là $9$ khi $x=2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D613DS1",
  "question": "Biết $\\mathrm{e}$ là một số vô tỉ và $2{,}7182&lt;\\mathrm{e}&lt;2{,}7183$. Lấy $\\mathrm{e} \\approx 2{,}71828$.  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số đúng là $2{,}71828$. Số gần đúng là $\\mathrm{e}$",
    "answer": false
   },
   {
    "text": "Sai số tuyệt đối của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ là $\\Delta_a \\leq 0{,}00008$",
    "answer": true
   },
   {
    "text": "Sai số tương đối của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ là $\\delta \\leq 0{,}0029 \\%$",
    "answer": true
   },
   {
    "text": "Số quy tròn của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ với độ chính xác $d$ tìm được ở trên là $2{,}7183$",
    "answer": true
   }
  ],
  "explain": "<br>- $\\mathrm{e}$ là số đúng; $2{,}71828$ là số gần đúng. Suy ra mệnh đề sai.<br>- Ta có: $2{,}7182&lt;\\mathrm{e}&lt;2{,}7183$ và có số gần đúng là $2{,}71828 $.<br>  Sai số tuyệt đối là $\\Delta_a=|\\mathrm{e}-2{,}71828| \\leq 0{,}00008=d$. Suy ra mệnh đề đúng.<br>- Do đó sai số tương đối là $\\delta \\leq \\dfrac{d}{a}=\\dfrac{0{,}00008}{2{,}71828}\\approx 0{,}0029 \\%$. Suy ra mệnh đề đúng.<br>- Số quy tròn của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ với độ chính xác $d=0{,}00008$ là $2{,}7183.$  Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D613DS2",
  "question": "Một hình lập phương có cạnh là $\\bar{a}=2{,}4 \\mathrm{~m}\\pm 1 \\mathrm{~cm}$.  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "$a=2{,}4 \\mathrm{m} \\text{ và } d=1 \\mathrm{~cm}$",
    "answer": true
   },
   {
    "text": "Sai số tương đối $\\delta_a$ của số gần đúng $a$ là $\\delta_a&lt;0{,}42 \\%$",
    "answer": true
   },
   {
    "text": "Số quy tròn của số $a$ với độ chính xác là $d$ là $2{,}4 \\mathrm{~m}$",
    "answer": true
   },
   {
    "text": "Gọi $\\bar{S}$ là diện tích toàn phần của hình lập phương. Giá trị $\\bar{S}$ nằm trong đoạn $[34{,}2726 ; 34{,}8486]$",
    "answer": true
   }
  ],
  "explain": "<br>- Ta có $\\bar{a}=2{,}4\\,(\\mathrm{m}) \\pm 1 (\\mathrm{cm})$ nên $a=2{,}4(\\mathrm{~m})$ và $d=1(\\mathrm{cm})$. Suy ra mệnh đề đúng.<br>- Đổi đơn vị $d=1\\,(\\mathrm{cm})=0{,}01 (\\mathrm{m})$.  Sai số tuyệt đối $\\delta_a$ của số gần đúng này là $\\delta_a&lt;\\dfrac{d}{|a|}=\\dfrac{0{,}01}{2{,}4}\\approx 0{,}42 \\%$.<br>  Suy ra mệnh đề đúng.<br>- Số quy tròn của số $a$ với độ chính xác là $d$ là $2{,}4(\\mathrm{m})$. Suy ra mệnh đề đúng.<br>- Ta có $\\bar{a}=2{,}4 \\mathrm{~m}\\pm 1 \\mathrm{~cm}\\Rightarrow 2{,}39 \\mathrm{~m}\\leq \\bar{a}\\leq 2{,}41 \\mathrm{~m}$.  Khi đó diện tích toàn phần của hình lập phương là $S=6\\cdot (\\bar{a})^2$ nên $34{,}2726 \\leq \\bar{S}\\leq 34{,}8486$.  Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D612DS3",
  "question": "Hình chữ nhật có độ dài các các cạnh $x=2 \\mathrm{m} \\pm 1 \\mathrm{~cm}, y=6 \\mathrm{m} \\pm 2 \\mathrm{~cm}$.  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Giá trị $x$ nằm trong đoạn $[1 ; 3]$ và giá trị của $y$ nằm trong đoạn $[4 ; 8]$",
    "answer": true
   },
   {
    "text": "Giá trị diện tích hình chữ nhật nằm trong đoạn $[11{,}9002 ; 12{,}1002]$",
    "answer": true
   },
   {
    "text": "Sai số tuyệt đối của diện tích là $\\Delta S \\leq 0{,}1$",
    "answer": false
   },
   {
    "text": "Sai số tương đối của diện tích là $\\dfrac{\\Delta S}{|S|}\\leq 8{,}3 \\%$",
    "answer": false
   }
  ],
  "explain": "<br>- $x=2 \\mathrm{m} \\pm 1 \\mathrm{~cm}\\Rightarrow 2-0{,}01(m) \\leq x \\leq 2+0{,}01(m) \\Rightarrow 1{,}99 \\leq x \\leq 2{,}01$.<br>  $y=6 \\mathrm{m} \\pm 2 \\mathrm{~cm}\\Rightarrow 6-0{,}02 (\\mathrm{m}) \\leq y \\leq 6+0{,}02(m) \\Rightarrow 5{,}98 \\leq y \\leq 6{,}02$.<br>- Vì $\\left [1{,}99 ; 2{,}001\\right ] \\subset[1 ; 3]$ và $\\left [5{,}98 ; 6{,}02\\right ] \\subset\\left [4 ; 8\\right ]$. Suy ra mệnh đề đúng.  Diện tích hình chữ nhật là  $  S_0=x_0 \\cdot y_0=2\\cdot 6=12 \\mathrm{~m}^2.  $  Cận trên của diện tích  $  (2+0{,}01)(6+0{,}02)=12{,}1002.  $   Cận dưới của diện tích  $  (2-0{,}01)(6-0{,}02)=11{,}9002.  $  $\\Rightarrow 11{,}9002 \\leq S \\leq 12{,}1002$. Suy ra mệnh đề đúng.<br>- Sai số tuyệt đối của diện tích là  $\\Delta S=\\left|S-S_0\\right| \\leq 0{,}1002$. Suy ra mệnh đề sai.<br>- Sai số tương đối của diện tích là  $\\dfrac{\\Delta S}{|S|}\\leq \\dfrac{0{,}1002}{12}\\approx 8{,}35 \\%$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D613DS4",
  "question": "Quy tròn số $\\bar{a}=\\dfrac{1}{3}=0{,}33333 \\ldots$ đến hàng phần trăm.  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số gần đúng là $a=0{,}33$",
    "answer": true
   },
   {
    "text": "Độ chính xác $d=0{,}1$",
    "answer": false
   },
   {
    "text": "Sai số tuyệt đối là $\\Delta_a&lt;0{,}005$",
    "answer": true
   },
   {
    "text": "Sai số tương đối là $\\delta_a \\leq 0{,}1 \\%$",
    "answer": true
   }
  ],
  "explain": "<br>- Quy tròn số $\\bar{a}=\\dfrac{1}{3}=0{,}33333 \\ldots$ đến hàng phần trăm, ta được số gần đúng là $a=0{,}33$. Suy ra mệnh đề đúng.<br>- Do $a&lt;\\bar{a}&lt;0{,}335 \\Rightarrow|\\bar{a}-a|&lt;0{,}005$ nên độ chính xác $d=0{,}005$. Suy ra mệnh đề sai.<br>- Ta có $\\Delta_a=|\\bar{a}-a|&lt;0{,}005$ nên sai số tuyệt đối $\\Delta_a&lt;0{,}005$. Suy ra mệnh đề đúng.<br>- Sai số tương đối $\\delta_a \\leq \\dfrac{0{,}005}{1{,}33}\\approx 0{,}4 \\%$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D613DS5",
  "question": "Cho số gần đúng $a=4536$ với độ chính xác $d=100$.  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số gần đúng của $a$ với độ chính xác $d$ là $ 5000 $",
    "answer": false
   },
   {
    "text": "Số quy tròn của $a$ với độ chính xác $d$ là $5000 $",
    "answer": true
   },
   {
    "text": "Sai số tuyệt đối là $\\Delta_a$ của số quy tròn của số $a$ với độ chính xác $d$ là $\\Delta_a&lt;564$",
    "answer": true
   },
   {
    "text": "Sai số tương đối là $\\delta_a$ của số quy tròn của số $a$ với độ chính xác $d$ là $\\delta_a&lt;0{,}11 \\%$",
    "answer": false
   }
  ],
  "explain": "<br>- Hàng của chữ số khác $0$ đầu tiên của $d=100$ là hàng trăm nên quy tròn $a$ đến hàng trăm ta được số gần đúng của số $a=4536$ là $4500$. Suy ra mệnh đề sai.<br>- Hàng của chữ số khác $0$ đầu tiên của $d=100$ là hàng trăm nên quy tròn $a$ đến hàng nghìn ta được số quy tròn của số $a=4536$ là $5000$. Suy ra mệnh đề đúng.<br>- Vì $4536-100&lt;\\bar{a}&lt;4536+100 \\Leftrightarrow 4436&lt;\\bar{a}&lt;4636$  Nên $4436-5000&lt;\\bar{a}-5000&lt;4636-5000 \\Leftrightarrow \\Delta_e&lt;564$. Suy ra mệnh đề đúng.<br>- Sai số tương đối là $\\delta_a$ của số quy tròn của số $a$ với độ chính xác $d$ là  $\\delta_a&lt;\\dfrac{564}{5000}\\approx 11{,}28 \\%$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D611DS6",
  "question": "Đường kính của một đồng hồ cát là $8{,}52 \\mathrm{~m}$. Cho giá trị gần đúng của $\\pi=3{,}141592654$. Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Giá trị gần đúng của $\\pi$ chính xác đến hàng phần nghìn là $3{,}142$",
    "answer": true
   },
   {
    "text": "Chu vi đồng hổ cát là $26{,}8 \\mathrm{~m}$",
    "answer": false
   },
   {
    "text": "Bán kính của đồng hồ cát chính xác đến hàng phần mười là $4{,}3$",
    "answer": true
   },
   {
    "text": "Dùng giá trị gần đúng của $\\pi=3{,}141592654$ chính xác đến hàng phần trăm để tính chu vi của đồng hồ. Kết quả chính xác đến hàng phần chục là $26{,}8 \\mathrm{~m}$",
    "answer": true
   }
  ],
  "explain": "<br>- Làm tròn số gần đúng $\\pi$ đến hàng phần nghìn ta được $3{,}142$. Suy ra mệnh đề đúng.<br>- Chu vi đồng hồ cát là $2 \\pi r=8{,}52\\cdot 3{,}141592654=26{,}76636941 \\mathrm{~m}$. Suy ra mệnh đề sai.<br>- Bán kính của đồng hồ cát là $r=\\dfrac{8\\cdot 52}{2}=4{,}26 \\mathrm{~m}$. Làm tròn đến hàng phần mười ta được $r=4{,}3 m$. Suy ra mệnh đề đúng.<br>- Dùng giá trị gần đúng của $\\pi=3{,}141592654$ chính xác đến hàng phần trăm là $\\pi=3{,}14$.  Chu vi đồng hồ cát là $C=\\pi d=3{,}14\\cdot 8{,}52=26{,}7528 \\mathrm{~m}$. Giá trị gần đúng của chu vi chính xác đến hàng phần chục là $26{,}8 \\mathrm{~m}$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D612DS7",
  "question": "Có $3$ học sinh An , Ba, Na lần lượt đo chiều cao của mình. Bạn An đo được là $168 \\mathrm{~cm}\\pm 0{,}5 \\mathrm{~cm}$. Bạn Ba đo được là $181 \\mathrm{~cm}\\pm 2 \\mathrm{~cm}$. Bạn Na đo được là $148 \\mathrm{~cm}\\pm 1 \\mathrm{~cm}$. Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Phép đo của bạn An có sai số tương đối là $\\dfrac{0{,}5}{168}$",
    "answer": true
   },
   {
    "text": "Phép đo của bạn Ba có sai số tương đối là $\\dfrac{-2}{181}$",
    "answer": false
   },
   {
    "text": "Phép đo của bạn Na có sai số tương đối tính chính xác đến hàng phần chục ngàn là $0{,}0068 $",
    "answer": true
   },
   {
    "text": "Trong ba phép đo trên, bạn An có phép đo chính xác nhất",
    "answer": true
   }
  ],
  "explain": "<br>- Phép đo của bạn An có sai số tương đối là $\\delta_1 \\leq \\dfrac{0{,}5}{168}$. Suy ra mệnh đề đúng.<br>- Phép đo của bạn Ba có sai số tương đối là $\\delta_2 \\leq \\dfrac{2}{181}$. Suy ra mệnh đề sai .<br>- Phép đo của bạn Na có sai số tương đối là $\\delta_3 \\leq \\dfrac{1}{148}=0{,}0067567568$. Làm tròn đến hàng phần chục ngàn ta được $0{,}0068$. Suy ra mệnh đề đúng.<br>- Ta có $\\delta_1 \\leq \\dfrac{0,5}{168}\\approx 0{,}00298 ; \\delta_2 \\leq \\dfrac{2}{181}=0{,}01105 ; \\delta_3 \\leq \\dfrac{1}{148}=0{,}0067567568$.  Từ đó ta thấy phép đo của bạn An chính xác nhất. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D612DS1",
  "question": "Kết quả đo chiểu dài của một thửa đất là $75{,}4 \\mathrm{~m}\\pm 0{,}5 \\mathrm{~m}$ và đo chiều dài của một cây cầu là $466{,}2 \\mathrm{~m} \\pm 0{,}5 \\mathrm{~m}$. Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Đối với phép đo thửa đất, sai số tương đối không vượt quá $0{,}663 \\%$",
    "answer": true
   },
   {
    "text": "Đối với phép đo thửa đất, có sai số tương đối: $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{75{,}4}=\\dfrac{5}{754}$",
    "answer": true
   },
   {
    "text": "Đối với phép đo chiều dài cây cầu, có sai số tương đối lớn hơn $\\dfrac{5}{4662}\\approx 0{,}107 \\%$",
    "answer": false
   },
   {
    "text": "Phép đo cây cầu có độ chính xác cao hơn phép đo chiều dài của một thửa đất",
    "answer": true
   }
  ],
  "explain": "<br>- Đối với phép đo thửa đất, tỉ số $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{75{,}4}=\\dfrac{5}{754}$ (tức là sai số tương đối không vượt quá $\\dfrac{5}{754}\\approx 0{,}663 \\%$ ). Suy ra mệnh đề đúng.<br>- Đối với phép đo thửa đất, có sai số tương đối $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{75{,}4}=\\dfrac{5}{754}$. Suy ra mệnh đề đúng.<br>- Đối với phép đo chiều dài cây cầu, tỉ số $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{466{,}2}=\\dfrac{5}{4662}$ (nghĩa là sai số tương đối không vượt quá $\\left.\\dfrac{5}{4662}\\approx 0{,}107 \\%\\right)$. Suy ra mệnh đề sai.<br>- Ta có $\\dfrac{5}{754}&gt;\\dfrac{5}{4662}$ nên phép đo cây cầu có độ chính xác cao hơn. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D612DS2",
  "question": "Một công ty sử dụng dây chuyền $A$ để đóng vào bao với khối lượng mong muốn là $5 \\mathrm{~kg}$. Trên bao bì ghi thông tin khối lượng là $5 \\pm 0{,}2 \\mathrm{~kg}$. Gọi $\\bar{a}$ là khối lượng thực của một bao gạo do đây chuyền $A$ đóng gói. Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số đúng là $a=0{,}2$",
    "answer": false
   },
   {
    "text": "Số gần đúng là $\\bar{a}=5{,}2$",
    "answer": false
   },
   {
    "text": "Độ chính xác là $d=0{,}2$",
    "answer": true
   },
   {
    "text": "Giá trị của $\\bar{a}$ nằm trong đoạn $[4{,}8 ; 5{,}2]$",
    "answer": true
   }
  ],
  "explain": "<br>- Theo định nghĩa số đúng là $a=5$. Suy ra mệnh đề sai.<br>- Số gần đúng là $\\bar{a}=5{,}2$. Suy ra mệnh đề sai. Vì Trong trường hợp này, thông tin trên bao bì ghi khối lượng là $5 \\pm 0{,}2 \\mathrm{~kg}$, điều này có nghĩa là khối lượng của sản phẩm có thể dao động từ $4{,}8 \\mathrm{~kg}$ đến $5{,}2 \\mathrm{~kg}$. Số gần đúng $\\bar{a}$ trong trường hợp này thường được hiểu là giá trị trung bình hoặc giá trị dự kiến của sản phẩm, không phải là giá trị cao nhất hoặc thấp nhất có thể.<br>   Do đó, việc cho rằng $\\bar{a} = 5{,}2$ là sai bởi vì $5{,}2 \\mathrm{~kg}$ không phải là giá trị trung bình, mà là giá trị cao nhất có thể trong khoảng cho phép. Giá trị $\\bar{a}$ hợp lý nhất trong trường hợp này phải là $5 \\mathrm{~kg}$, vì nó chính là giá trị mà người sản xuất dự định làm giá trị trung tâm của khoảng dao động cho phép.<br>- Độ chính xác là $d=0{,}2$. Suy ra mệnh đề đúng.<br>- Giá trị của $\\bar{a}$ nằm trong đoạn $[4{,}8 ; 5{,}2]$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D611DS1",
  "question": "Cho ba giá trị gần đúng của $\\dfrac{3}{7}$ là $0{,}429$; $0{,}4$ và $0{,}42$.   Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Công thức đánh giá sai số tuyệt đối là $\\Delta=|\\bar{a}-a|$",
    "answer": true
   },
   {
    "text": "Xét số gần đúng $0{,}429$ ta có $\\Delta_1=\\left|\\dfrac{3}{7}-0{,}429\\right|&lt;0{,}0005$",
    "answer": true
   },
   {
    "text": "Xét số gần đúng $0{,}4$ ta có $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}4\\right|&lt;0{,}03$",
    "answer": true
   },
   {
    "text": "Xét số gần đúng $0{,}42$ ta có $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}42\\right|&lt;0{,}009$",
    "answer": true
   }
  ],
  "explain": "<br>- Ta sử dụng công thức đánh giá sai số tuyệt đối là $\\Delta=|\\bar{a}-a|$. Suy ra mệnh đề đúng.<br>- Xét số gần đúng $0{,}429$ ta có: $\\Delta_1=\\left|\\dfrac{3}{7}-0{,}429\\right|&lt;0{,}0005$. Suy ra mệnh đề đúng.<br>- Xét số gần đúng $0{,}4$ ta có: $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}4\\right|&lt;0{,}03$. Suy ra mệnh đề đúng.<br>- Xét số gần đúng $0{,}42$ ta có: $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}42\\right|&lt;0{,}009$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D621DS1",
  "question": "Một trường THPT thống kê số lớp và số học sinh theo khối: Khối $10$ có $9$ lớp, $396$ học sinh; Khối $11$ có $8$ lớp, $370$ học sinh; Khối $12$ có $8$ lớp, $345$ học sinh. Biết sĩ số mỗi lớp trong trường không vượt quá $45$ học sinh.",
  "subQuestions": [
   {
    "text": "Sĩ số trung bình mỗi lớp của khối $10$ là $44$ học sinh",
    "answer": true
   },
   {
    "text": "Sĩ số trung bình mỗi lớp của khối $11$ là $46,25$ học sinh",
    "answer": true
   },
   {
    "text": "Số liệu thống kê của khối $11$ là hợp lý vì $46,25$ chỉ lớn hơn $45$ một chút",
    "answer": false
   },
   {
    "text": "Số liệu thống kê của khối $12$ là hợp lý vì sĩ số trung bình $43,125$ học sinh nhỏ hơn $45$",
    "answer": true
   }
  ],
  "explain": "<br>- <strong>Đúng</strong>. $396:9=44$.<br>- <strong>Đúng</strong>. $370:8=46,25$.<br>- <strong>Sai</strong>. Vì sĩ số mỗi lớp không được vượt quá $45$, mà $46,25>45$, nên số liệu của khối $11$ không hợp lý (bị thống kê sai), dù chỉ lệch một chút.<br>- <strong>Đúng</strong>. $345:8=43,125<45$ nên số liệu khối $12$ hợp lý.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D635DS1",
  "question": "Hai phương pháp học Toán khác nhau được áp dụng cho lớp 10A, 10B. Sau một học kì, điểm khảo sát của hai lớp như sau   <br><div style=\"display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;margin:8px auto;\"><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_000.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_001.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"></div>  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Điểm trung bình của hai lớp là bằng nhau",
    "answer": false
   },
   {
    "text": "Số trung vị của hai bảng số liệu bằng nhau",
    "answer": true
   },
   {
    "text": "Mốt của hai bảng số liệu bằng nhau",
    "answer": true
   },
   {
    "text": "Phương pháp lớp $\\mathrm{A}$ hiệu quả hơn lớp $\\mathrm{B}$",
    "answer": false
   }
  ],
  "explain": "<br>- Số trung bình là $\\bar{x}_A=5{,}92, \\bar{x}_B=6{,}28$ mệnh đề sai.<br>- Đối với lớp A: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{lllllllllllllllllllllllll}  2 & 2 & 3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 5 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 8 & 9 & 9 & 9 .  \\end{array}  $  Số trung vị của mẫu số liệu là $M_e=6$.  Đối với lớp B: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{llllllllllllllllllllllllll}  3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 6 & 6 & 6 & 6 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 9 & 9 & 10  \\end{array}  $  Số trung vị của mẫu số liệu là $M_e=6$. Nên mệnh đề đúng.<br>- Đối với lớp A: điểm 7 xuất hiện 6 lần là nhiều nhất nên mốt của mẫu số liệu là $M_o=7$.<br>   Đối với lớp B: điểm 7 xuất hiện 6 lần là nhiều nhất nên mốt của mẫu số liệu là $M_o=7$. Nên mệnh đề đúng.<br>- Đối với lớp A: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{lllllllllllllllllllllllll}  2 & 2 & 3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 5 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 8 & 9 & 9 & 9 .  \\end{array}  $   Tứ phân vị $Q_1=4{,}5 ; Q_2=6 ; Q_3=7{,}5$.  Đối với lớp B: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{llllllllllllllllllllllllll}  3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 6 & 6 & 6 & 6 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 9 & 9 & 10  \\end{array}  $   Tứ phân vị $Q_1=5 ; Q_2=6 ; Q_3=7$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634DS2",
  "question": "Mẫu số liệu về chiều cao của học sinh trong một lớp 10 được sắp xếp như sau   $  161 ; 162 ; 163 ; 164 ; 165 ; 166 ; 167 ; 168 ; 169 ; 170 ; 171(\\mathrm{~mm})  $  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số trung bình của mẫu số liệu là $\\bar{x}=166$",
    "answer": true
   },
   {
    "text": "Số trung vị của mẫu số liệu là $M_e=167$",
    "answer": false
   },
   {
    "text": "Tứ phân vị thứ ba của mẫu số liệu là $Q_3=169$",
    "answer": true
   },
   {
    "text": "Số trung bình và số trung vị bằng nhau",
    "answer": true
   }
  ],
  "explain": "<br>- Ta có số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{161+162+163+164+165+166+167+168+169+170+171}{11}=166.$   Suy ra mệnh đề đúng.<br>- Số các số liệu là $N=11$ (lẻ).<br>   Các số liệu đã sắp xếp theo thứ tự không giảm nên số trung vị là số đứng thứ $6$. Vậy số trung vị là $M_e=166$. Suy ra mệnh đề sai.<br>- Tứ phân vị thứ ba là trung vị của mẫu $167 ; 168 ; 169 ; 170 ; 171$.<br>  Do đó $Q_3=169$. Suy ra mệnh đề đúng.<br>- Ta có số trung bình của mẫu số liệu là $\\bar{x}=166$.<br>   Số trung vị của mẫu số liệu là $M_e=166$ nên số trung bình và số trung vị bằng nhau. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634DS3",
  "question": "Cho các số liệu thống kê về mẫu sản lượng chè thu được trong 1 năm ($\\mathrm{kg}/$ sào) của $20$ hộ gia đình như sau   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Mốt của mẫu số liệu là $M_0=115$",
    "answer": true
   },
   {
    "text": "Số trung bình của mẫu số liệu là $\\bar{x}=114{,}15$",
    "answer": true
   },
   {
    "text": "Số trung vị của mẫu số liệu là $M=114$",
    "answer": false
   },
   {
    "text": "Tứ phân vị của mẫu số liệu là $Q_1=112{,}5$, $Q_2=114{,}5$, $Q_3=115{,}5$",
    "answer": false
   }
  ],
  "explain": "<br>- Do giá trị $115$ có tần số lớn nhất là $5$ nên ta có: $M_0=115$. Suy ra mệnh đề đúng.<br>- Ta có số trung bình của mẫu số liệu là   $\\bar{x}=\\dfrac{111 \\cdot 1+112 \\cdot 3+113 \\cdot 4+114 \\cdot 2+115\\cdot 4+116 \\cdot 5+117\\cdot 1}{20}=114{,}15$.  Suy ra mệnh đề đúng.<br>- Ta có mẫu số liệu gồm $20$ giá trị nên trung vị là $M_e=\\dfrac{114+115}{2}=114{,}5$. Suy ra mệnh đề sai.<br>- Ta có $N=20$ là số chẵn, nên giá trị tứ phân vị thứ hai là $Q_2=114{,}5$.<br>   tứ phân vị thứ nhất là $Q_1=\\dfrac{113+113}{2}=113$.<br>  Tứ phân vị thứ ba là $Q_3=\\dfrac{115+116}{2}=115{,}5$.  Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D635DS4",
  "question": "Bác Nam và Bác Linh ghi lại số cuộc điện thoại mà mỗi người gọi mỗi ngày trong $10$ ngày được lựa chọn ngẫu nhiên từ tháng 01/2024 ở bảng sau   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Mốt của mẫu số liệu của Bác Nam là $M_0=1$",
    "answer": true
   },
   {
    "text": "Số trung bình của số cuộc điện thoại mà Bác Linh gọi là $3{,}9$",
    "answer": true
   },
   {
    "text": "Xét theo số trung bình Bác Nam gọi điện thoại thường xuyên hơn",
    "answer": false
   },
   {
    "text": "Nên dùng trung vị để so sánh số cuộc gọi của Bác Nam và Bác Linh",
    "answer": true
   }
  ],
  "explain": "<br>- Trong số $10$ ngày có ngày thứ hai bác Nam gọi nhiều nhất nên mốt của mẫu số liệu của Bác Nam là $M_0=2$. Suy ra mệnh đề sai.<br>- Ta có số trung bình của số cuộc điện thoại mà Bác Linh gọi là $\\bar{x}=\\dfrac{1 \\cdot 3+2 \\cdot 3+3 \\cdot 2+4+20}{10}=3{,}9.$   Suy ra mệnh đề đúng.<br>- Ta có số trung bình của số cuộc điện thoại mà Bác Nam gọi là $\\bar{x}=\\dfrac{1 \\cdot 3+2+3+4 \\cdot 2+5+6+7}{10}=3{,}4.$   Do đó xét theo số trung bình Bác Linh gọi điện thoại thường xuyên hơn. Suy ra mệnh đề sai.<br>- Tứ phân vị   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng trên nên dùng trung vị để so sánh số cuộc gọi của Bác Nam và Bác Linh Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634DS5",
  "question": "Cho bảng số liệu điểm kiểm tra môn Toán của $20$ học sinh.  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Mốt của mẫu số liệu là $5 $",
    "answer": false
   },
   {
    "text": "Điểm kiểm tra trung bình của nhóm học sinh là $5 $",
    "answer": false
   },
   {
    "text": "Số trung vị của mẫu số liệu là $7$",
    "answer": false
   },
   {
    "text": "Tứ phân vị thứ nhất của mẫu số liệu trên là $6 $",
    "answer": true
   }
  ],
  "explain": "<br>- Mốt của mẫu số liệu là $8$. Suy ra mệnh đề sai.<br>- Điểm kiểm tra trung bình của nhóm học sinh là $\\bar{x}=\\dfrac{4\\cdot 1+5\\cdot 2+\\ldots+10\\cdot 1}{20}=7{,}3$.<br>  Suy ra mệnh đề sai.<br>- Số trung vị của mẫu số liệu là $M_e=\\dfrac{x_{10}+x_{11}}{2}=\\dfrac{7+8}{2}=7{,}5$. Suy ra mệnh đề sai.<br>- Tứ phân vị thứ nhất của mẫu số liệu trên là  $Q_1=\\dfrac{x_5+x_0}{2}=\\dfrac{6+6}{2}=6$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D635DS6",
  "question": "Sản lượng lúa (tạ) của $40$ thửa ruộng thí nghiệm có cùng diện tích được trình bày trong bảng phân bố tần số sau đây:  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các câu sau",
  "subQuestions": [
   {
    "text": "Với $m=13, n=8$ thì mốt của mẫu số liệu trên là $23$ tạ",
    "answer": true
   },
   {
    "text": "Với $m=13, n=8$ thì sản lượng trung bình của $40$ thửa ruộng trên làm tròn đến hàng phần trăm là $ 19{,}92$ tạ",
    "answer": false
   },
   {
    "text": "Với $m=13, n=8$ thì số trung vị của mẫu số liệu trên là $21$",
    "answer": false
   },
   {
    "text": "Biết sản lượng trung bình của $40$ thửa ruộng là $22{,}1$ tạ khi đó $n=11$",
    "answer": true
   }
  ],
  "explain": "Với $m=13, n=8$ ta có bảng sản lượng của $40$ thửa ruộng như sau  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Dựa vào bảng phân bố tần số của mẫu số liệu trên ta thấy sản lượng có tần số lớn nhất là $23$ tạ. Suy ra mệnh đề đúng.<br>- Sản lượng trung bình của $40$ thửa ruộng trên là  $\\bar{x}=\\dfrac{5 \\cdot 20+21 \\cdot 8+22 \\cdot 8+23 \\cdot 13+24 \\cdot 6}{40}=19{,}93.$  Suy ra mệnh đề sai.<br>- Do số thửa ruộng là $40$ là số chẵn nên số trung vị là trung bình cộng của hai số hạng đứng chính giữa là số hạng thứ $20$ và $21$ khi đó $M_e=\\dfrac{22+22}{2}=22$. Suy ra mệnh đề sai.<br>- Ta có $5+8+n+m+6=40 \\Leftrightarrow n+m=21$.  Sản lượng trung bình của $40$ thửa ruộng là $22{,}1$ nên  $  \\dfrac{1}{40}(5\\cdot 20+8\\cdot 21+n \\cdot 22+m \\cdot 23+6\\cdot 24)=22{,}1 \\Leftrightarrow 22 n+23 m=472 .  $  Giải hệ phương trình $n+m=21 \\text{ và } 22 n+23 m=472\\Leftrightarrow n=11 \\text{ và } m=10.$<br>  Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634DS7",
  "question": "Khối lượng cơ thể lúc trưởng thành của $11$ con chim được ghi lại ở bảng sau (đơn vị: gam).  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các câu sau (các kết quả làm tròn đến hàng đơn vị)",
  "subQuestions": [
   {
    "text": "Mốt của mẫu số liệu trên là $165$ gam",
    "answer": true
   },
   {
    "text": "Tứ phân vị dưới của mẫu số liệu trên là $160$",
    "answer": false
   },
   {
    "text": "Khối lượng trung bình của 11 con chim đó là $161$",
    "answer": true
   },
   {
    "text": "Mẫu số liệu tập trung mật độ cao bên phải $Q_2$ và mật độ thấp bên trái $Q_2$.",
    "answer": true
   }
  ],
  "explain": "<br>- Ta thấy khối lượng cơ thể lúc trưởng thảnh của con chim có giá trị 165 gam là xuất hiện nhiều nhất. Như vậy mốt của mẫu số liệu trên là $165$. Suy ra mệnh đề đúng.<br>- Sắp xếp mẫu số liệu trên theo thứ tự không giảm ta được  $  \\begin{array}{llllllllllllll}  150 & 150 & 155 & 155 & 160 & 165 & 165 & 165 & 165 & 170 & 170  \\end{array} .  $  Ta thấy dãy số liệu trên có $11$ giá trị nên trung vị là số hạng đứng thứ $6$ với $ M_e=Q_2=165$.<br>  Nửa số liệu bên trái $Q_2$ gồm $150 \\quad 150 \\quad 155 \\quad 155 \\quad 160$. Trung vị của nửa số liệu bên trải là tứ phân vị dưới $Q_1=155$. Suy ra mệnh đề sai .<br>- Khối lượng trung bình của 11 con chim đó là  $\\bar{x}=\\dfrac{165+150+155+165+170+165+150+155+170+165+160}{11}\\approx 161.$   Suy ra mệnh đề đúng.<br>- Các tứ phân vị trong mẫu số liệu trên là $Q_1=155 ; Q_2=165 ; Q_3=165$. Ta thấy khoảng cách tứ $Q_1$ đến $Q_3$ là $10 $, trong khi đó khoảng cách từ $Q_2$ đến $Q_3$ là $0 $. Điều này cho thấy mẫu số liệu tập trung mật độ cao bên phải $Q_2$, và mật độ thấp bên trái $Q_2$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634DS8",
  "question": "Chỉ số IQ của một nhóm học sinh có kết quả như sau $\\begin{array}{llllllllllll}60 & 72 & 63 & 83 & 68 & 90 & 74 & 86 & 74 & 80 & 82\\end{array}$   Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Mốt của mẫu số liệu là $M_0=90$",
    "answer": false
   },
   {
    "text": "Số trung bình cộng của mẫu số liệu (làm tròn kết quả đến một chữ số thập phân) là $75{,}6 $",
    "answer": true
   },
   {
    "text": "Số trung vị của mẫu số liệu là $74$",
    "answer": true
   },
   {
    "text": "Tổng của tứ phân vị thứ nhất và thứ $3$ là $151$",
    "answer": true
   }
  ],
  "explain": "<br>- Mốt của mẫu số liệu là $M_0=74$. Suy ra mệnh đề sai.<br>- Số trung bình cộng của bảng đã cho là  $  \\dfrac{60+63+68+72+74+74+80+82+83+86+90}{11} \\approx 75{,}6  $   Suy ra mệnh đề đúng.<br>- Dựa vào kết quả của mẫu số liệu đã Sắp xếp theo thứ tự không giảm  Dãy trên có $11$ giá trị nên ta lấy giá trị ở chính giữa là $74$. Suy ra mệnh đề đúng.<br>- Tổng của tứ phân vị thứ nhất và thứ ba là $Q+Q_3=68+83=151$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D635DS9",
  "question": "Một cửa hàng bún đậu vừa khai trương, thống kê lượng khách tới quán trong $7$ ngày đầu và thu được mẫu số liệu sau   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số trung bình làm tròn đến hàng phần trăm của mẫu số liệu là $407{,}14$",
    "answer": true
   },
   {
    "text": "Số trung vị của mẫu số liệu là $263$",
    "answer": false
   },
   {
    "text": "Ngày $1$ là mốt của mẫu số liệu này",
    "answer": false
   },
   {
    "text": "Nếu ngày $6 $ có $400$ lượt khách thì mốt của mẫu số liệu là ngày $3$",
    "answer": false
   }
  ],
  "explain": "<br>- Số trung bình là $\\bar{x}=\\dfrac{575+454+400+325+351+333+412}{7}\\approx 407{,}142857$ nên mệnh đề đúng.<br>- Sắp xếp số liệu theo thứ tự không giảm $325$ $333$ $351$ $400$ $412$ $454$ $575$.<br>  Trung vị của mẫu số liệu là $M_e=400$ nên mệnh đề sai.<br>- Ngày $1$ không là mốt nên mệnh đề sai.<br>- Nếu ngày $6$ có $400$ lượt khách thì mốt là $400$ mà không phải là ngày 3 nên mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D635DS10",
  "question": "Bảng sau đây cho biết số chỗ ngồi của một số sân vận động được sử dụng trong giải Bóng đá Vô địch Quốc gia Việt Nam năm 2022 (số liệu gần đúng).  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các câu sau",
  "subQuestions": [
   {
    "text": "Mốt của mẫu số liệu trên là $20120$",
    "answer": true
   },
   {
    "text": "Trung vị của mẫu số liệu trên là $23407$",
    "answer": false
   },
   {
    "text": "Số chỗ ngồi đã được sử dụng trung bình của $5$ sân đó là $24502$",
    "answer": true
   },
   {
    "text": "Nếu bỏ đi số liệu chỗ ngồi của Sân vân động Quốc gia Mỹ Đình thì mốt không thay đối số trung bình và trung vị sẽ thay đổi",
    "answer": true
   }
  ],
  "explain": "<br>- Ta thấy có hai sân có số chỗ ngồi $20120$ xuất hiện nhiều nhất. Như vậy mốt của mẫu số liệu trên là $20120$. Suy ra mệnh đề đúng.<br>- Sắp xếp số liệu theo thứ tự không giảm   $20120 \\quad 20120 \\quad 2131623407 \\quad 37546.$  Trung vị của mẫu số liệu trên là $21316$. Suy ra mệnh đề sai.<br>- Số trung bình là $\\dfrac{20120+21316+23407+20120+37546}{5}\\approx 24502$. Suy ra mệnh đề đúng.<br>- Nếu bỏ số liệu chỗ ngồi của Sân vận động Quốc gia Mỹ Đình thì ta có Số trung bình là $\\dfrac{20120+21316+23407+20120}{4}=21241$.<br>  Sắp xếp số liệu theo thứ tự không giảm $2012020120 \\quad 21316 \\quad 23407$.<br>  Mốt là $20120$.<br>  Trung vị $20718$.<br>  Vậy nếu bỏ số liệu chỗ ngồi của Sân vận động Quốc gia Mỹ Đình thì mốt giữ nguyên, số trung bình và trung vị sẽ thay đổi. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D635DS11",
  "question": "Bảng sau đây cho biết số chỗ ngồi của một số sân vận động được sử dụng trong giải bóng đá vô địch Quốc gia năm 2018 (số liệu gần đúng).  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số trung bình của mẫu số liệu là $24501{,}3$",
    "answer": false
   },
   {
    "text": "Mốt của mẫu số liệu là $20120 $",
    "answer": true
   },
   {
    "text": "Trung vị của mẫu số liệu là $21315$",
    "answer": true
   },
   {
    "text": "Nếu bỏ đi số liệu chỗ ngồi của Sân vận động Mỹ Đình thì mốt của mẫu số liệu không thay đổi",
    "answer": true
   }
  ],
  "explain": "<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{20120+21315+23405+20120+37546}{5}=24501{,}2$ nên mệnh đề sai.<br>- Giá trị $20120$ có tần số xuất hiện nhiều nhất do đó mốt của mẫu số liệu là $M_0=20120$ nên mệnh đề đúng.<br>- Sắp xếp số liệu theo thứ tự không giảm $20120$\\qquad $20120$\\qquad $21315$\\qquad $23405$ \\qquad $37546$.<br>  Trung vị của mẫu số liệu là $M_e=21315$ nên mệnh đề đúng.<br>- Nếu bỏ đi số liệu chỗ ngồi của Sân vận động Mỹ Đình. Khi đó Sắp xếp số liệu theo thứ tự không giảm   $20120$\\qquad $20120$ \\qquad $21315$ \\qquad $23405 $  Mốt của mẫu số liệu là $M_0=20120$ nên mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634DS12",
  "question": "Cho bảng số liệu thống kê chiều cao của một nhóm học sinh như sau  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Có $16$ học sinh được thống kê chiều cao",
    "answer": true
   },
   {
    "text": "Chiều cao trung bình của nhóm học sinh là $160 $",
    "answer": false
   },
   {
    "text": "Số trung vị của mẫu số liệu là $160 $",
    "answer": false
   },
   {
    "text": "Tứ phân vị thứ nhất của mẫu số liệu trên là $154$",
    "answer": true
   }
  ],
  "explain": "<br>- Có $16$ học sinh được thống kê chiều cao. Suy ra mệnh đề đúng.<br>- Chiều cao trung bình của nhóm học sinh là  $\\bar{x}=\\dfrac{150+153\\cdot 2+154\\cdot 2+\\ldots+167}{16}=159{,}3125$. Suy ra mệnh đề sai.<br>- Số trung vị của mẫu số liệu là $M_e=\\dfrac{x_8+x_9}{2}=\\dfrac{160+162}{2}=161$. Suy ra mệnh đề sai.<br>- Tứ phân vị thứ nhất của mẫu số liệu trên là  $Q_1=\\dfrac{x_4+x_3}{2}=\\dfrac{154+154}{2}=154$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D634DS1",
  "question": "Cho bảng phân bố tần số khối lượng $30$ quả trứng gà của một rổ trứng gà   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd15_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Số quá trứng gà có khối lượng $40 \\mathrm{~g}$ trong rổ trứng là $6 $",
    "answer": true
   },
   {
    "text": "Tổng số trứng trong rổ có khối lượng nhỏ hơn $35 \\mathrm{~g}$ là $18 $",
    "answer": false
   },
   {
    "text": "Khối lượng trung bình cộng của rổ trứng gà là $36{,}5$",
    "answer": true
   },
   {
    "text": "Tứ phân vị thứ nhất của bảng số liệu là $30$",
    "answer": true
   }
  ],
  "explain": "<br>- Số quả trứng gả có khổi lượng $40 \\mathrm{~g}$ trong rổ trứng là $6 $. Suy ra mệnh đề đúng.<br>- Tổng số trứng trong rổ có khối lượng nhỏ hơn $35 \\mathrm{~g}$ là $8$. Suy ra mệnh đề sai.<br>- Số trung bình cộng của bảng đã cho là  $\\dfrac{25\\cdot 3+30\\cdot 5+35\\cdot 10+40\\cdot 6+45\\cdot 4+50\\cdot 2}{30} =36{,}5$.<br>  Suy ra mệnh đề đúng.<br>- Bảng số liệu có $30$ giá trị nên tứ phân vị thứ nhất $Q_1$ đứng ở vị trí thứ $8 $. Vây $Q_1=30$.<br>  Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS1",
  "question": "Cuối học kì 1 vừa qua, bạn An đạt được kết quả sáu môn như sau  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Điểm trung bình các môn thi học kì của bạn An là $7{,}0 $",
    "answer": true
   },
   {
    "text": "Điểm trung bình các môn thi học kì của bạn An là $7{,}3 $",
    "answer": false
   },
   {
    "text": "Khoảng biển thiên của bảng điểm của bạn An bằng $3{,}4$",
    "answer": false
   },
   {
    "text": "Khoảng tứ phân vị bảng điểm của bạn An bằng $2{,}2$",
    "answer": false
   }
  ],
  "explain": "<br>- Điểm trung bình các môn học kì 1 của bạn An là  $\\bar{x}=\\dfrac{7{,}2+8{,}0+5{,}8+7{,}2+9{,}0+4{,}6}{6}\\approx 7{,}0$. Suy ra mệnh đề đúng.<br>- Điểm trung bình các môn học kì 1 của bạn An là $\\bar{x}=\\dfrac{7{,}2+8{,}0+5{,}8+7{,}2+9{,}0+4{,}6}{6}\\approx 7{,}0$. Suy ra mệnh đề sai.<br>- Điểm số cao nhất là $9{,}0 $. Điểm số thấp nhất là $4{,}6$. Khoảng biến thiên $R=9-4{,}6=4{,}4$. Suy ra mệnh đề sai.<br>- Sắp xếp các điểm theo thứ tự không giảm  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Trung vị $M_e=\\dfrac{7{,}2+7{,}2}{2}=7{,}2$.<br>  Nửa số liệu bên trải $Q_2$ là $4{,}6$, $5{,}8$, $7{,}2$. Suy ra $Q_1=5{,}8$.<br>   Nửa số liệu bên phải $Q_2$ là $7{,}2$, $8$, $9$. Suy ra $Q_3=8$.<br>  Khoảng tứ phân vị $\\Delta_0=Q_3-Q_1=8-5{,}8=2{,}2$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644DS2",
  "question": "Hai xạ thủ $A$ và $B$ mỗi xạ thủ bắn $10$ phát đạn. Kết quả được thể hiện trong bảng sau  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Điểm thấp nhất của xạ thủ $A$ là $6 $",
    "answer": true
   },
   {
    "text": "Điểm trung bình của xạ thủ $A$ cao hơn điểm trung bình của xạ thủ $B$",
    "answer": false
   },
   {
    "text": "Độ lệch chuẩn bảng điểm của xạ thủ $A$ lớn hơn độ lệch chuẩn bảng điểm của xạ thủ $B$",
    "answer": true
   },
   {
    "text": "Xạ thủ $A$ bắn đều hơn xạ thủ $B$",
    "answer": false
   }
  ],
  "explain": "<br>- Điểm thấp nhất của xạ thủ $ A $ là $6 $. Suy ra mệnh đề đúng.<br>- Điểm trung bình của xạ thủ A là $\\overline{x_1}=\\dfrac{7+9+6+9+8+6+8+7+10+8}{10}\\approx 7{,}8$  Điểm trung bình của xạ thủ $B$ là $\\overline{x_2}=\\dfrac{8+7+8+9+6+7+7+9+9+8}{10}\\approx 7{,}8$.<br>  Suy ra mệnh đề sai.<br>- Phương sai bảng điểm của xạ thủ $ A $ là  $  s_1^2=\\dfrac{\\left(x_1-\\bar{x}\\right)^2+\\left(x_2-\\bar{x}\\right)^2+\\cdots+\\left(x_n-\\bar{x}\\right)^2}{n}=1{,}56  $   Độ lệch chuẩn bảng điểm của xạ thủ $A$ là $s_1=\\sqrt{s_1^2}\\approx 1{,}249$.<br>  Phương sai bảng điểm của xạ thủ $B $ là $s_2^2=\\dfrac{\\left(x_1-\\bar{x}\\right)^2+\\left(x_2-\\bar{x}\\right)^2+\\cdots+\\left(x_n-\\bar{x}\\right)^2}{n}=0{,}96$.<br>  Độ lệch chuẩn bảng điểm của xạ thủ $B$ là $s_1=\\sqrt{s_1^2}\\approx 0{,}980$.<br>  Suy ra mệnh đề đúng.<br>- Độ lệch chuẩn bảng điểm của xạ thủ $ A $ lớn hơn độ lệch chuẩn bảng điểm của xạ thủ $ B $. Suy ra xạ thủ $ B $ bắn đều hơn xạ thủ $ A $. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644DS3",
  "question": "Mẫu số liệu sau đây cho biết chiều cao của 10 học $\\sinh$ (đơn vị cm)  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Chiều cao trung bình của 10 học sinh là $157{,}6$",
    "answer": false
   },
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $27$",
    "answer": true
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liệu là $13$",
    "answer": true
   },
   {
    "text": "Phương sai của mẫu số liệu trên nhỏ hơn $64$",
    "answer": false
   }
  ],
  "explain": "<br>- Chiều cao trung bình của 10 học sinh là $\\bar{x}=<u>165+155+160+145+157+162+148+170+172+152</u>=158{,}6.$   Suy ra mệnh đề sai.<br>- Số liệu lớn nhất là $172$.   Số liệu nhỏ nhất là $145 $.<br>  Khoảng biến thiên của mẫu số liệu là $R=172-145=27$. Suy ra mệnh đề đúng.<br>- Sắp xếp các số liệu theo thứ tư không giảm  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  $Q_2=M_e=\\dfrac{157+160}{2}=158{,}5$.<br>  $Q_1=152$.<br>  $Q_3=165$.<br>  Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=Q_3-Q_1=165-152=13$. Suy ra mệnh đề đúng.<br>- Phương sai của mẫu số liệu trên là  $s^2=\\dfrac{\\left(x_1-\\bar{x}\\right)^2+\\left(x_2-\\bar{x}\\right)^2+\\cdots+\\left(x_n-\\bar{x}\\right)^2}{n}=72{,}04$. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644DS4",
  "question": "Mẫu số liệu sau cho biết số ghế trống tại một rạp chiếu phim trong $9$ ngày là  $  \\begin{array}{lllllllll}  7 & 8 & 22 & 20 & 18 & 15 & 19 & 13 & 11  \\end{array}  $  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $R=15$",
    "answer": true
   },
   {
    "text": "Trung vị của mẫu số liệu là $Q_2=18$",
    "answer": false
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=10$",
    "answer": true
   },
   {
    "text": "Phương sai của mẫu số liệu là $s^2 \\approx 25{,}73$",
    "answer": true
   }
  ],
  "explain": "Sắp xếp mẫu số liệu theo thứ tự không giảm:  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_014.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Khoảng biến thiên của mẫu số liệu là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất. Ta có $R=22-7=15$. Suy ra mệnh đề đúng.<br>- Mẫu số liệu gồm $9$ giá trị nên trung vị là số ở vị trí chính giữa $Q_2=15$. Suy ra mệnh đề sai.<br>- Ta có $Q_1=\\dfrac{8+11}{2}=9{,}5$ và $Q_3=\\dfrac{19+20}{2}=19{,}5$ Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=Q_3-Q_1=10$. Suy ra mệnh đề đúng.<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{7+8+11+13+15+18+19+20+22}{9}\\approx 14{,}78$.<br>  Phương sai của mẫu số liệu là  $s^2=\\dfrac{(7-14{,}78)^2+(8-14{,}78)^2+\\ldots+(22-14{,}78)^2}{9}\\approx 25{,}73$. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644DS5",
  "question": "Mẫu số liệu sau cho biết sĩ số của $5$ lớp khối $10$ tại một trường Trung học là  $  \\begin{array}{lllll}  40 & 45 & 46 & 41 & 43  \\end{array}  $  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $R=3$",
    "answer": false
   },
   {
    "text": "Trung vị của mẫu số liệu là $Q_2=46$",
    "answer": false
   },
   {
    "text": "Số trung bình của mẫu số liệu là $\\bar{x}=43$",
    "answer": true
   },
   {
    "text": "Phương sai của mẫu số liệu là $s^2=5{,}2$",
    "answer": true
   }
  ],
  "explain": "Sắp xếp mẫu số liệu theo thứ tự không giảm:  $  \\begin{array}{lllll}  40 & 41 & 43 & 45 & 46  \\end{array}  $  <br>- Nếu cộng mỗi giá trị của mẫu số liệu với 2 thì khoảng biến thiên của mẫu số liệu là $R=(172+2)-(159+2)=13$. Vậy mệnh đề sai.<br>- Mẫu số liệu gồm 5 giá trị nên trung vị là số ở vị trí chính giữa số liệu là $Q_2=43$. Suy ra mệnh đề sai.<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{40+41+43+45+46}{5}=43$. Suy ra mệnh đề đúng.<br>- Phương sai của mẫu số liệu là  $  s^2=\\dfrac{(40-43)^2+(41-43)^2+(43-43)^2+(45-43)^2+(46-43)^2}{5}=5{,}2.$Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644DS6",
  "question": "Tỉ lệ trẻ suy dinh dưỡng (tính theo cân nặng ứng với độ tuổi) của $10$ tỉnh thuộc Đồng bằng sông Hồng được cho như sau   $\\begin{array}{llllllllll}5{,}5 & 13{,}8 & 10{,}2 & 12{,}2 & 11{,}0 & 7{,}4 & 11{,}4 & 13{,}1 & 12{,}5 & 13{,}4\\end{array}$  \\hfill (Theo Tổng cục thống kê)<br>  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $R=8{,}3$",
    "answer": true
   },
   {
    "text": "Trung vị của mẫu số liệu là $Q_2=9{,}2$",
    "answer": false
   },
   {
    "text": "Số trung bình của mẫu số liệu là $\\bar{x}=11{,}05$",
    "answer": true
   },
   {
    "text": "Độ lệch chuẩn của mẫu số liệu là $s \\approx 2{,}57$",
    "answer": true
   }
  ],
  "explain": "Sắp xếp mẫu số liệu theo thứ tự không giảm:  $\\begin{array}{llllllllll}5{,}5 & 7{,}4 & 10{,}2 & 11{,}0 & 11{,}4 & 12{,}2 & 12{,}5 & 13{,}1 & 13{,}4 & 13{,}8\\end{array}$  <br>- Khoảng biến thiên của mẫu số liệu là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất. Ta có $R=13{,}8-5{,}5=8{,}3$. Suy ra mệnh đề đúng.<br>- Mẫu số liệu gồm 10 giá trị nên trung vị là $Q_2=\\dfrac{11{,}4+12{,}2}{2}=11{,}8$. Suy ra mệnh đề sai.<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{5{,}5+7{,}4+10{,}2+\\ldots+13{,}4+13{,}8}{10}=11{,}05$. Suy ra mệnh đề đúng.<br>- Phương sai của mẫu số liệu là  $  s^2=\\dfrac{(5{,}5-11{,}05)^2+(7{,}4-11{,}05)^2+\\ldots+(13{,}8-11{,}05)^2}{10}\\approx 6{,}6.  $   Vậy độ lệch chuẩn của mẫu số liệu là $s=\\sqrt{s^2}\\approx \\sqrt{6{,}6}=2{,}57$.  Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS7",
  "question": "Mẫu số liệu sau cho biết chiều cao (đơn vị cm) của các bạn học sinh tổ $1$ lớp $10$A:  $\\begin{array}{llllllll}163 & 159 & 172 & 167 & 165 & 168 & 170 & 161\\end{array}$  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $13$",
    "answer": true
   },
   {
    "text": "Chiều cao trung bình của các học sinh tổ 1 là $160 \\mathrm{~cm}$",
    "answer": false
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_{Q}=10$",
    "answer": false
   },
   {
    "text": "Nếu cộng mỗi giá trị của mẫu số liệu với $2$ thì khoảng biến thiên tăng lên $2$ đơn vị",
    "answer": false
   }
  ],
  "explain": "<br>- Khoảng biến thiên của mẫu số liệu là $R=172-159=13$. Vậy mệnh đề đúng.<br>- Chiều cao trung bình của các học sinh tố 1 là  $  \\bar{x}=\\dfrac{159+161+163+165+167+168+170+172}{8}=165{,}6 \\mathrm{~cm}.  $  Vậy mệnh đề sai.<br>- Ta có $Q_2=\\dfrac{165+167}{2}=166$; $  Q_1=\\dfrac{161+163}{2}=162 ; \\quad Q_3=\\dfrac{168+170}{2}=169.  $<br>   Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=Q_3-Q_1=169-162=7$. Vậy mệnh đề sai.<br>- Nếu cộng mỗi giá trị của mẫu số liệu với 2 thì khoảng biến thiên của mẫu số liệu là $R=(172+2)-(159+2)=13$. Vậy mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644DS8",
  "question": "Mẫu số liệu sau cho biết sĩ số của $5$ lớp khối $10$ tại một trường THPT   $\\begin{array}{lllll}43 & 45 & 46 & 41 & 40\\end{array}$  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $6$",
    "answer": true
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_{Q}=4{,}5$",
    "answer": false
   },
   {
    "text": "Phương sai của mẫu số liệu là $\\mathrm{s}^2=5{,}2$",
    "answer": true
   },
   {
    "text": "Nếu cộng mỗi giá trị của mẫu số liệu với $5$ thì khoảng biến thiên không thay đổi",
    "answer": true
   }
  ],
  "explain": "<br>- Khoảng biến thiên của mẫu số liệu là $R=46-40=6$. Vậy mệnh đề đúng.<br>- Sắp xếp mẫu số liệu theo thứ tự không giảm   $\\begin{array}{lllll}40 & 41 & 43 & 45 & 46\\end{array}$  Ta có $\\quad Q_2=43 ; \\quad Q_1=\\dfrac{40+41}{2}=40{,}5 ; \\quad Q_3=\\dfrac{45+46}{2}=45{,}5$.<br>  Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=Q_3-Q_1=45{,}5-40{,}5=5$. Vậy mệnh đề sai<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{43+45+46+41+40}{5}=43$.  Ta có bảng sau  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Mẫu số liệu gồm $5$ giá trị nên $n=5$. Do đó phương sai là $\\mathrm{s}^2=\\dfrac{26}{5}=5{,}2$.<br>  Vậy mệnh đề đúng.<br>- Nếu cộng mỗi giá trị của mẫu số liệu với $5$ thì khoảng biến thiên của mẫu số liệu là $R=(46+5)-(40+5)=6$. Vậy mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS9",
  "question": "Tiến hành đo huyết áp của $8$ người ta thu được kết quả sau   $\\begin{array}{llllllll}77 & 105 & 117 & 84 & 96 & 72 & 105 & 124.\\end{array}$  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $50$",
    "answer": false
   },
   {
    "text": "Giá trị trung bình của mẫu số liệu là $97{,}5$",
    "answer": true
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_{Q}=30$",
    "answer": false
   },
   {
    "text": "Mẫu số liệu không có giá trị bất thường",
    "answer": true
   }
  ],
  "explain": "<br>- Khoảng biến thiên của mẫu số liệu là $R=124-72=52$. Vậy mệnh đề sai.<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{77+105+117+84+96+72+105+124}{8}=97{,}5$.  Vậy mệnh đề đúng.<br>- Sắp xếp mẫu số liệu theo thứ tự không giảm $ \\begin{array}{llllllll}72&77 & 84 & 96 & 105 & 105 & 117 & 124\\end{array}$<br>  Ta có $Q_2=\\dfrac{96+105}{2}=100{,}5 ; \\quad Q_1=\\dfrac{77+84}{2}=80{,}5 ; \\quad Q_3=\\dfrac{105+117}{2}=111$.<br>  Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=Q_3-Q_1=111-80{,}5=30{,}5$. Vậy mệnh đề sai.<br>- Ta có $Q_1-1{,}5 \\Delta Q=80{,}5-1{,}5\\cdot 30{,}5=34{,}75$ và  $  Q_3+1{,}5 \\cdot \\Delta Q=111+1{,}5 \\cdot 30{,}5=156{,}75.  $   Tất cả các giá trị của mẫu số liệu đều thuộc đoạn $[34{,}75 ; 156{,}75]$ nên mẫu số liệu không có giá trị bất thường. Vậy mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS10",
  "question": "Số điểm mà các vận động viên bóng rổ ghi được trong một trận đấu   $  \\begin{array}{llllllll}  9 & 8 & 15 & 14 & 11 & 20 & 13 & 17  \\end{array}  $  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $12 $",
    "answer": true
   },
   {
    "text": "Số trung bình của mẫu số liệu là $13{,}5$",
    "answer": false
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liện là $6$",
    "answer": true
   },
   {
    "text": "Mẫu số liệu có giá trị bất thường",
    "answer": false
   }
  ],
  "explain": "<br>- Khoảng biến thiên $R$ của mẫu số liệu là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất.<br>   Ta có: $R=20-8=12$. Suy ra mệnh đề đúng.<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{8+9+11+13+14+15+17+20}{8}=13{,}375$.<br>  Suy ra mệnh đề sai.<br>- Tứ phân vị $Q_1$ là trung vị của nửa số liệu bên trái, suy ra $Q_1=\\dfrac{9+11}{2}=10$.  Tứ phân vị $Q_3$ là trung vị của nửa số liệu bên phải, suy ra $Q_3=\\dfrac{15+17}{2}=16$.  Suy ra khoảng tứ phân vị $\\Delta_Q=Q_3-Q_1=16-10=6$. Suy ra mệnh đề đúng.<br>- Ta có $Q_1-1{,}5 \\Delta_Q=1$ và $Q_3+1{,}5 \\Delta_Q=25$ nên mẫu số liệu không có giá trị bất thường.<br>  Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS11",
  "question": "Kết quả đo chiều cao của nhóm gồm 20 học sinh được ghi lại như sau   <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_016.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $31$",
    "answer": true
   },
   {
    "text": "Trung vị của mẫu số liệu là $163 $",
    "answer": true
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liệu là $14{,}5$",
    "answer": true
   },
   {
    "text": "Giá trị $181$ là giá trị bất thường của mẫu số liệu",
    "answer": false
   }
  ],
  "explain": "<br>- Khoảng biến thiên $R$ của mẫu số liệu là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất.  Ta có: $R=181-150=31$. Suy ra mệnh đề đúng.<br>- Mẫu số liệu gồm 20 giá trị nên trung vị là $Q_2=\\dfrac{162+164}{2}=163$.  Suy ra mệnh đề đúng.<br>- Tứ phân vị $Q_1$ là trung vị của nửa số liệu bên trái, suy ra $Q_2=\\dfrac{156+157}{2}=156{,}5$.  Tứ phân vị $Q_3$ là trung vị của nửa số liệu bên phải, suy ra $Q_3=\\dfrac{170+172}{2}=171$.  Suy ra khoảng tứ phân vị $\\Delta_Q=Q_3-Q_2=171-156{,}5=14{,}5$.  Suy ra mệnh đề đúng.<br>- Ta có $Q_1-1{,}5 \\Delta_Q=134{,}25$ và $Q_3+1{,}5 \\Delta_Q=202{,}75$, do đó 181 không phải là giá trị bất thường của mẫu số liệu.  Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS12",
  "question": "Nhiệt độ trung bình theo tháng tại Thành phố Hồ Chí Minh trong năm 2023 được cho như sau   $  \\begin{array}{llllllllllll}  21 & 23 & 25 & 27 & 28 & 30 & 26 & 28 & 25 & 23 & 23 & 24  \\end{array}  $  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu trên là $9$",
    "answer": false
   },
   {
    "text": "Nhiệt độ trung bình năm 2023 của Thành phố Hồ Chí Minh là $25^{\\circ}\\mathrm{C}$",
    "answer": false
   },
   {
    "text": "Tứ phân vị thứ ba của mẫu số liệu trên là $24$",
    "answer": false
   },
   {
    "text": "Giá trị bất thường của mẫu dữ liệu là $30 $",
    "answer": false
   }
  ],
  "explain": "Sắp xếp mẫu số liệu theo thứ tự không giảm:  $\\begin{array}{llllllllllll}21 & 23 & 25 & 27 & 28 & 30 & 26 & 28 & 25 & 23 & 23 & 24\\end{array}$  <br>- Khoảng biến thiên $R$ của mẫu số liệu là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất.  Ta có: $R=24-21=3$. Suy ra mệnh đề sai.<br>- Số trung bình của mẫu số liệu là  $  \\bar{x}=\\dfrac{21+23\\cdot 3+24+25 \\cdot 2+26+27+28\\cdot 2+30}{12}=25{,}25 .  $  Suy ra mệnh đề sai<br>- Tứ phân vị thứ ba $Q_3$ là trung vị của nửa số liệu bên phải, suy ra $Q_3=\\dfrac{27+28}{2}=27{,}5$.  Suy ra mệnh đề sai.<br>- Tứ phân vị thứ nhất $Q_1$ là trung vị của nửa số liệu bên trái, suy ra $Q_1=\\dfrac{23+23}{2}=23$.  Ta có tứ phân vị thứ ba $Q_3=\\dfrac{27+28}{2}=27{,}5$.<br>  Suy ra khoảng tứ phân vị $\\Delta_Q=Q_3-Q_1=27{,}5-23=4{,}5$.<br>  Ta có $Q_1-1{,}5 \\Delta_Q=16{,}25$ và $Q_3+1{,}5 \\Delta_Q=34{,}25$, do đó $30$ không phải là giá trị bất thường của mẫu số liệu. Suy ra mệnh đề sai.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D644DS13",
  "question": "Số lượng gạo bán ra tại một quầy hàng các tháng trong một năm được cho bởi bảng sau   <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Mốt của bảng số liệu trên là $430$",
    "answer": true
   },
   {
    "text": "Số trung vị của bảng số liệu trên là $525$",
    "answer": false
   },
   {
    "text": "Khoảng tứ vị phân của mẫu số liệu là $257$",
    "answer": false
   },
   {
    "text": "Phương sai của mẫu số liệu trên là $s^2=\\dfrac{49375}{2}$",
    "answer": true
   }
  ],
  "explain": "Sắp xếp các số liệu của mẫu theo thứ tự không giảm ta được:  $\\begin{array}{llllllllllll}410 & 430 & 430 & 450 & 460 & 525 & 550 & 560 & 635 & 760 & 800 & 950\\end{array}$  <br>- Mốt của bảng số liệu trên là $430$ vì số $430$ xuất hiện nhiều nhất. Suy ra mệnh đề đúng.<br>- Vì $n=12$ là số chẵn nên số trung vị là trung bình cộng của hai số chính giữa.<br>   Số trung vị của bảng số liệu trên là $\\dfrac{525+550}{2}=537{,}5$. Suy ra mệnh đề sai.<br>- Ta có $Q_1=440$; $Q_2=537{,}5$; $Q_3=697{,}5$, suy ra $\\Delta_Q=Q_3-Q_1=697{,}5- 440=257{,}5$.<br>   Vậy khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=257{,}5$. Suy ra mệnh đề sai.<br>- Giá trị trung bình của mẫu số liệu trên là  $  \\bar{x}=\\dfrac{410+430\\cdot 2+450+460+525+550+560+635+760+800+950}{12}=580.   $  Các độ lệch   $  \\begin{aligned}  &410-580=-170 ; 430-580=-150 ; 450-580=-130 ; 460-580=-120  525-580=-55 ;\\\\  & 550-580=-30 ; 560-580=-20 ; 635-580=55 ; 760-580=180;   800-580=120 ;\\\\  & 950-580=370  \\end{aligned}  $  Phương sai của mẫu số liệu là  $  \\begin{aligned}  & s^2= \\\\  & \\dfrac{(-170)^2+2(-150)^2+(-130)^2+(120)^2+(-55)^2+(-30)^2+(-20)^2+(55)^2+(180)^2+(120)^2+(370)^2}{12}\\\\  & =\\dfrac{49375}{2}  \\end{aligned}  $  Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS14",
  "question": "Dưới đây là điểm kiểm tra giữa kì I của hai bạn An và Bình   <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd16_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu điểm kiểm tra của An là $2$",
    "answer": true
   },
   {
    "text": "Điểm kiểm tra trung bình của học sinh An là $8{,}3$",
    "answer": false
   },
   {
    "text": "Điểm kiểm tra trung bình của học sinh Bình là $8{,}1$",
    "answer": true
   },
   {
    "text": "Bạn An học đều hơn bạn Bình",
    "answer": true
   }
  ],
  "explain": "<br>- Trong mẫu số liệu trên, số lớn nhất là $9$ và số bé nhất là $7 $. Vậy khoảng biến thiên của mầu số liệu trên là  $  R=x_{\\max}-x_{\\min}=9-7=2 .  $   Suy ra mệnh đề đúng.<br>- Điểm kiểm tra trung bình cộng của An là  $  \\begin{aligned}  & \\bar{x}_{A}=\\dfrac{8\\cdot 3+7{,}5+7{,}8+8{,}3+9 \\cdot 2+7+8{,}2+9+8{,}3}{11}\\\\  & \\bar{x}_{A}=8{,}1.  \\end{aligned}  $  Suy ra mệnh đề sai.<br>- Điểm kiểm tra trung bình cộng của Bình là  $  \\begin{aligned}  & \\bar{x}_{B}=\\dfrac{8{,}5\\cdot 3+9{,}5{,}2+9{,}2+5+5{,}5+6+10}{11}\\\\  & \\bar{x}_{B}=\\dfrac{89}{11}\\approx 8{,}1 .  \\end{aligned}  $  Suy ra mệnh đề đúng.<br>- Điểm trung bình cộng của An là $\\bar{A}_x=8{,}1$.  Điếm trung bình cộng của Bình là $\\bar{x}_{B}=\\dfrac{89}{11}\\approx 8{,}1$.  Phương sai của số liệu điểm của bạn An:  $  s_{An}^2=\\dfrac{0{,}1^2+0{,}6^2+0{,}3^2+0{,}2^2+0{,}9^2+1{,}1^2+0{,}1^2+0{,}1^2+0{,}9^2+0{,}1^2+0{,}2^2}{11}=\\dfrac{17}{55}\\approx 0{,}31 .  $  Phương sai của số liệu điểm của bạn Bình:  $  s_B^2=\\dfrac{3 \\cdot 0{,}4^2+1{,}4^2 \\cdot 2+0{,}9^2+3{,}1^2+2{,}6^2+2{,}1^2+1{,}9^2+0{,}9^2}{11}\\approx 2{,}76 .  $  Do $\\bar{x}_{A}=\\bar{x}_B$; $s_{A}^2&lt;s_B^2$ nên bạn An học đều các mọn hơn bạn Bình. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D642DS15",
  "question": "Điểm khảo sát chất lượng học sinh giỏi của 15 học sinh khối 10 được thống kê như sau  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd15_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
  "subQuestions": [
   {
    "text": "Khoảng biến thiên của mẫu số liệu là $5$",
    "answer": true
   },
   {
    "text": "Khoảng tứ phân vị của mẫu số liệu là $1$",
    "answer": false
   },
   {
    "text": "Số trung vị của bảng số liệu trên là $4$",
    "answer": false
   },
   {
    "text": "Mẫu số liệu không có giá trị bất thường",
    "answer": true
   }
  ],
  "explain": "Trước hết, ta sẽ sắp xếp mẫu số liệu theo thứ tự không giảm:  <br><img src=\"data/10/0D6/im0D64/dlts_sbh_tk10cd15_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Trong mẫu số liệu trên, số lớn nhất là 9 và số bé nhất là $4$. Vậy khoảng biến thiên của mẫu số liệu trên là  $  R=x_{\\max}-x_{\\min}=9-4=5.  $  Suy ra mệnh đề đúng.<br>- Từ mẫu số liệu ta tính được $Q_1=6 ; Q_2=7$ và $Q_3=8$.  Do đó, khoảng tứ phân vị là $\\Delta_Q=Q_3-Q_1=8-6=2$. Suy ra mệnh đề sai.<br>- Vì $n=15$ là số lẻ nên số trung vị là số chính giữa .<br>   Số trung vị của bảng số liệu trên là $7 $. Suy ra mệnh đề sai.<br>- Ta có $Q_1-1{,}5\\cdot \\Delta_Q=3$ và $Q_3+1{,}5\\cdot \\Delta_Q=11$  Giá trị được xem là bất thường khi lơn hơn $11$ hoặc bé hơn $3$ nên trong mẫu số liệu không có giá trị được xem là bất thường. Suy ra mệnh đề đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D721DS1",
  "question": "Cho tam thức bậc hai $ f(x)=x^2-4x-5$.",
  "subQuestions": [
   {
    "text": "Tam thức bậc hai có hai nghiệm phân biệt",
    "answer": true
   },
   {
    "text": "Bất phương trình $ f(x)&lt;0$ có $4$ nghiệm nguyên dương",
    "answer": true
   },
   {
    "text": "Phương trình $\\sqrt{f(x)}=-4$ có hai nghiệm phân biệt",
    "answer": false
   },
   {
    "text": "Tập nghiệm của bất phương trình $ f(x)&lt;x-20$ là $\\mathbb{R}$",
    "answer": false
   }
  ],
  "explain": "<br>- Đúng vì phương trình $x^2-4x-5=0\\Leftrightarrow\\left[\\begin{aligned}  & x=-1\\\\   & x=5\\\\   \\end{aligned}\\right.$.<br>- Đúng vì bất phương trình $x^2-4x-5&lt;0\\Leftrightarrow-1&lt;x&lt;5$.<br>  Do $x$ nguyên dương nên $ x\\in\\left\\{ 1;2;3;4\\right\\}$<br>- Sai vì vế phải là số âm.<br>- Sai vì $ f(x)&lt;x-20\\Leftrightarrow{x^2}-5x+15&lt;0\\Leftrightarrow S=\\varnothing $.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D821DS1",
  "question": "Cho $10$ điểm cùng nằm trên một đường tròn như hình bên dưới  <br><img src=\"data/10/0D8/im0D82/loc3_0_TL_TN_DS_THPT__001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Số vectơ khác $\\overrightarrow{0}$ có điểm đầu và điểm cuối thuộc các điểm đã cho là $ \\mathrm{C}_{10}^2$",
    "answer": false
   },
   {
    "text": "Số đoạn thẳng có điểm đầu mút thuộc các điểm đã cho là $ \\mathrm{A}_{10}^2$",
    "answer": false
   },
   {
    "text": "Số tam giác có đỉnh thuộc các điểm đã cho là $ \\mathrm{C}_{10}^3$",
    "answer": true
   },
   {
    "text": "Số đường chéo của đa giác có 10 đỉnh thuộc các điểm đã cho là $45$",
    "answer": false
   }
  ],
  "explain": "<br>- Sai. Số vectơ khác vectơ $\\overrightarrow{0}$ có điểm đầu và điểm cuối thuộc các điểm đã cho là $ \\mathrm{A}_{10}^2$.<br>- Sai. Số đoạn thẳng có điểm đầu mút thuộc các điểm đã cho là $ \\mathrm{C}_{10}^2$.<br>- Đúng. Số tam giác có đỉnh thuộc các điểm đã cho là $ \\mathrm{C}_{10}^3$.<br>- Sai. Số đường chéo của đa giác có $10$ đỉnh thuộc các điểm đã cho là $\\mathrm{C}_{10}^2-10=35$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412DS1",
  "question": "Cho góc $\\alpha = \\widehat{xOM}$ với điểm $M(x_0;y_0)$ trên nửa đường tròn đơn vị. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$\\sin \\alpha = x_0;\\cos\\alpha =y _0$",
    "answer": false
   },
   {
    "text": "Nếu $x_0&lt;0$ thì $0^\\circ&lt;\\alpha&lt;90^\\circ$",
    "answer": false
   },
   {
    "text": "Nếu $x_0=\\dfrac{1}{3};y_0=\\dfrac{2\\sqrt{2}}{3}$ thì $\\cot \\alpha = \\dfrac{1}{2\\sqrt{2}}$",
    "answer": true
   },
   {
    "text": "Nếu $x_0=-\\dfrac{1}{3};y_0=\\dfrac{2\\sqrt{2}}{3}$ thì $\\dfrac{\\tan\\alpha-\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha} = \\dfrac{7}{9}$",
    "answer": true
   }
  ],
  "explain": "<br>- Khẳng định <strong>sai</strong> vì điểm $M(x_0;y_0)$ trên nửa đường tròn đơn vị thì $\\sin \\alpha = y_0;\\cos\\alpha =x_0$.<br>- Khẳng định <strong>sai</strong> vì $x_0&lt;0$ thì $90^\\circ &lt; \\alpha \\leq 180^\\circ$.<br>- Khẳng định <strong>đúng</strong> vì điểm $M\\left(\\dfrac{1}{3};\\dfrac{2\\sqrt{2}}{3}\\right)$ trên nửa đường tròn đơn vị thì $\\cos \\alpha = \\dfrac{1}{3};\\sin\\alpha = \\dfrac{2\\sqrt{2}}{3} \\Rightarrow \\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\dfrac{1}{2\\sqrt{2}}$.<br>- Khẳng định <strong>đúng</strong> vì $\\cos \\alpha = -\\dfrac{1}{3};\\sin\\alpha = \\dfrac{2\\sqrt{2}}{3} \\Rightarrow \\cot\\alpha = -\\dfrac{1}{2\\sqrt{2}};\\tan\\alpha=-2\\sqrt{2}$ nên $\\dfrac{\\tan\\alpha-\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha} =\\dfrac{-2\\sqrt{2}+\\dfrac{1}{2\\sqrt{2}}}{-2\\sqrt{2}-\\dfrac{1}{2\\sqrt{2}}}= \\dfrac{7}{9}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H413DS2",
  "question": "Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Hai góc $\\alpha$ và $180^\\circ-\\alpha$ gọi là hai góc bù nhau",
    "answer": true
   },
   {
    "text": "Nếu $\\alpha$ và $\\beta$ là hai góc hai góc bù nhau thì $\\sin\\alpha=\\sin\\beta$",
    "answer": true
   },
   {
    "text": "Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $\\cos\\alpha=\\cos\\beta$",
    "answer": false
   },
   {
    "text": "Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $P=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta = 1$",
    "answer": true
   }
  ],
  "explain": "<br>- Hai góc $\\alpha$ và $180^\\circ-\\alpha$ gọi là hai góc bù nhau.<br>- Nếu $\\alpha$ và $\\beta$ là hai góc hai góc bù nhau thì $\\sin\\alpha=\\sin\\beta$.<br>- Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $\\cos\\alpha=\\sin\\beta$.<br>- Nếu $\\alpha$ và $\\beta$ là hai góc hai góc phụ nhau thì $\\cos\\alpha=\\sin\\beta$; $\\sin\\alpha=\\cos\\beta$ nên $P=\\sin^2\\alpha+\\cos^2\\alpha = 1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412DS3",
  "question": "Cho $\\sin\\alpha = \\dfrac{1}{3}$ với $90^\\circ &lt; \\alpha &lt; 180^\\circ$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Điểm $M$ trên nửa đường tròn đơn vị phía trên trục $Ox$ sao cho $\\widehat{xOM} = \\alpha$ có tung độ bằng $\\dfrac{1}{3}$",
    "answer": true
   },
   {
    "text": "Giá trị $\\cos\\alpha = \\dfrac{2\\sqrt{2}}{3}$",
    "answer": false
   },
   {
    "text": "Giá trị $\\cot \\alpha = -2\\sqrt{2}$",
    "answer": true
   },
   {
    "text": "Giá trị $\\dfrac{\\tan\\alpha+3\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=\\dfrac{25}{9}$",
    "answer": true
   }
  ],
  "explain": "<br>- Theo lý thuyết ta có $\\sin\\alpha=y_M = \\dfrac{1}{3}$.<br>- Vì $90^\\circ&lt;\\alpha&lt;180^\\circ$ nên $\\cos\\alpha=-\\sqrt{1-\\sin^2 \\alpha}=-\\dfrac{2\\sqrt{2}}{3}$.<br>- Vì $90^\\circ&lt;\\alpha&lt;180^\\circ$ nên $\\cot \\alpha &lt; 0\\Rightarrow \\cot \\alpha = - \\sqrt{\\dfrac{1}{\\sin^2 \\alpha}-1}=-2\\sqrt{2}$.<br>- Ta có $\\tan\\alpha=\\dfrac{1}{\\cot \\alpha} = -\\dfrac{1}{2\\sqrt{2}}$.<br>  Suy ra $\\dfrac{\\tan\\alpha+3\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=\\dfrac{25}{9}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412DS4",
  "question": "Cho $\\tan\\alpha=\\dfrac{1}{2}$ với $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$. Các mệnh đề sau đây đúng hay sai?",
  "subQuestions": [
   {
    "text": "$\\sin\\left(180^\\circ - \\alpha\\right)&lt;0$",
    "answer": false
   },
   {
    "text": "Giá trị $\\cos\\left(180^\\circ-\\alpha\\right) = \\dfrac{2}{\\sqrt{5}}$",
    "answer": false
   },
   {
    "text": "Giá trị $\\cot^2\\alpha = 2$",
    "answer": false
   },
   {
    "text": "Giá trị $\\dfrac{\\sin\\alpha+3\\cos\\alpha}{\\sin\\alpha-\\cos\\alpha}=7$",
    "answer": false
   }
  ],
  "explain": "<br>- $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$ thì $\\sin\\alpha&gt;0$, ta có $\\sin\\left(180^\\circ-\\alpha\\right)=\\sin\\alpha&gt;0$.<br>- Vì $0&lt;\\alpha&lt;\\dfrac{\\pi}{2}$ nên $\\cos\\alpha&gt;0$.<br>  Giá trị $\\cos\\left(180^\\circ-\\alpha\\right)=-\\cos\\alpha=-\\dfrac{1}{\\sqrt{1+\\tan^{2}\\alpha}}=-\\dfrac{2}{\\sqrt{5}}$.<br>- $\\cot\\alpha=\\dfrac{1}{\\tan\\alpha}=2$ nên $\\cot^{2}\\alpha=4$ .<br>- Do $\\cos\\alpha\\ne 0$ nên $\\dfrac{\\sin\\alpha+3\\cos\\alpha}{\\sin\\alpha-\\cos\\alpha} = \\dfrac{\\dfrac{\\sin\\alpha}{\\cos\\alpha}+3}{\\dfrac{\\sin\\alpha}{\\cos\\alpha}-1}=\\dfrac{\\tan \\alpha + 3}{\\tan\\alpha-1} = -7$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412DS5",
  "question": "Cho $\\sin\\alpha=\\dfrac{1}{3}$ với $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Giá trị $\\cos\\left(90^\\circ-\\alpha\\right)&lt;0$",
    "answer": false
   },
   {
    "text": "$\\cos\\alpha=-\\dfrac{2\\sqrt{2}}{3}$",
    "answer": true
   },
   {
    "text": "Giá trị $\\cot^{2}\\alpha=8$",
    "answer": true
   },
   {
    "text": "Giá trị $\\dfrac{5\\tan\\alpha+\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=4$",
    "answer": false
   }
  ],
  "explain": "<br>- $\\cos\\left(90^\\circ-\\alpha\\right)=\\sin\\alpha=\\dfrac{1}{3}&gt;0$.<br>- $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ nên $\\cos\\alpha&lt;0$. Do đó $\\cos\\alpha=-\\sqrt{1-\\sin^{2}\\alpha}=\\sqrt{1-\\left(\\dfrac{1}{3}\\right)^{2}}=-\\dfrac{2\\sqrt{2}}{3}$.<br>- $\\cot^{2}\\alpha=\\dfrac{1}{\\sin^{2}\\alpha}-1=\\dfrac{1}{\\left(\\dfrac{1}{3}\\right)^{2}}-1=8$.<br>- $\\dfrac{5\\tan\\alpha+\\cot\\alpha}{\\tan\\alpha+\\cot\\alpha}=\\dfrac{\\dfrac{5}{\\cot\\alpha}+\\cot\\alpha}{\\dfrac{1}{\\cot\\alpha}+\\cot\\alpha}=\\dfrac{5+\\cot^{2}\\alpha}{1+\\cot^{2}\\alpha}=\\dfrac{4+\\dfrac{1}{\\sin^{2}\\alpha}}{\\dfrac{1}{\\sin^{2}\\alpha}}=\\dfrac{9+4}{9}=\\dfrac{13}{9}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H413DS6",
  "question": "Xác định tính đúng sai của các mệnh đề sau (Giả sử các biểu thức luôn có nghĩa).",
  "subQuestions": [
   {
    "text": "$\\tan x+\\cot x=1$",
    "answer": false
   },
   {
    "text": "$(\\tan x+\\cot x)^{2}-(\\tan x-\\cot x)^{2}=-2$",
    "answer": false
   },
   {
    "text": "$\\dfrac{\\cot^{2}x-\\cos^{2}x}{\\cot^{2}x}+\\dfrac{\\sin x\\cdot\\cos x}{\\cot x}=1$",
    "answer": true
   },
   {
    "text": "$3\\left(\\sin^{4}x+\\cos^{4}x\\right)-2\\left(\\sin^{6}x+\\cos^{6}x\\right)=2$",
    "answer": false
   }
  ],
  "explain": "<br>- Ta có $\\tan x+\\cot x=\\dfrac{\\sin x}{\\cos x}+\\dfrac{\\cos x}{\\sin x}=\\dfrac{\\sin^{2}x+\\cos^{2}x}{\\sin x\\cdot\\cos x}=\\dfrac{1}{\\sin x\\cdot\\cos x}$.<br>- $\\left(\\tan^{2}x+2\\tan x\\cdot\\cot x+\\cot^{2}x\\right)-\\left(\\tan^{2}x-2\\tan x\\cdot\\cot x+\\cot^{2}x\\right)=4$<br>- $\\dfrac{\\cot^{2}x-\\cos^{2}x}{\\cot^{2}x}+\\dfrac{\\sin x\\cdot\\cos x}{\\cot x} = \\dfrac{\\dfrac{\\cos^{2}x}{\\sin^{2}x}-\\cos^{2}x}{\\dfrac{\\cos^{2}x}{\\sin^{2}x}}+\\dfrac{\\sin x\\cdot\\cos x}{\\dfrac{\\cos x}{\\sin x}}$<br>$= \\dfrac{\\cos^{2}x\\left(1-\\sin^{2}x\\right)}{\\cos^{2}x}+\\sin^{2}x=1-\\sin^{2}x+\\sin^{2}x=1.$<br>- $\\sin^{4}x+\\cos^{4}x=1-2\\sin^{2}x\\cos^{2}x$ và $\\sin^{6}x+\\cos^{6}x=1-3\\sin^{2}x\\cos^{2}x$. Suy ra $3\\left(1-2\\sin^{2}x\\cos^{2}x\\right)-2\\left(1-3\\sin^{2}x\\cos^{2}x\\right)=1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412DS6",
  "question": "Cho $\\cos \\alpha=-\\dfrac{2}{3}$. Khi đó",
  "subQuestions": [
   {
    "text": "$90^{\\circ}&lt;\\alpha&lt;180^{\\circ}$",
    "answer": true
   },
   {
    "text": "$\\cot \\alpha&lt;0$",
    "answer": true
   },
   {
    "text": "$\\sin \\alpha=-\\dfrac{\\sqrt{5}}{3}$",
    "answer": false
   },
   {
    "text": "$\\tan \\alpha=\\dfrac{\\sqrt{5}}{2}$",
    "answer": false
   }
  ],
  "explain": "Vì $\\cos \\alpha &lt; 0$ nên $\\alpha$ là góc tù ($90^\\circ &lt; \\alpha &lt; 180^\\circ$).  <br>- Vì $\\cos \\alpha &lt; 0$ nên $90^\\circ &lt; \\alpha &lt; 180^\\circ$.<br>- Ta có $90^\\circ &lt; \\alpha &lt; 180^\\circ$ nên $\\cot \\alpha &lt; 0$.<br>- Ta có $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\left(-\\dfrac{2}{3}\\right)^2 = \\dfrac{5}{9}$.<br>  Vì $0^\\circ &lt; \\alpha &lt; 180^\\circ$ nên $\\sin\\alpha &gt; 0 \\Rightarrow \\sin\\alpha = \\dfrac{\\sqrt{5}}{3}$.<br>- $\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}=\\dfrac{\\dfrac{\\sqrt{5}}{3}}{-\\dfrac{2}{3}}=-\\dfrac{\\sqrt{5}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS1",
  "question": "Cho tam giác $ABC$ có $AB=3$, $AC=2$,$\\widehat{A}=60^\\circ$. Trên cạnh $BC$ lấy điểm $M$ nằm giữa $B$ và $C$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "$BC^{2}=AB^{2}+AC^{2}+2 AB\\cdot AC\\cdot\\cos A$",
    "answer": false
   },
   {
    "text": "$BC=\\sqrt{7}$",
    "answer": true
   },
   {
    "text": "$\\cos B=\\dfrac{\\sqrt{7}}{7}$",
    "answer": false
   },
   {
    "text": "Độ dài $AM$ nhỏ nhất bằng $\\dfrac{189}{49}$",
    "answer": false
   }
  ],
  "explain": "<br>- Ta có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A$<br>- $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A=9+4-2\\cdot 3\\cdot 2\\cdot\\cos 60^\\circ=7\\Rightarrow BC=\\sqrt{7}$.<br>- $\\cos B=\\dfrac{AB^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{9+7-4}{2\\cdot 3\\cdot\\sqrt{7}}=\\dfrac{2\\sqrt{7}}{7}$.<br>- Với $M$ tùy ý nằm giữa $B$ và $C$ ,ta có  $AM^{2} = AB^{2}+BM^{2}-2 AB\\cdot BM\\cdot\\cos B=9+BM^{2}-2\\cdot 3\\cdot BM\\cdot\\dfrac{2\\sqrt{7}}{7}$<br>$= BM^{2}-\\dfrac{12\\sqrt{7}}{7} BM+9$<br>$= \\left(BM-\\dfrac{6\\sqrt{7}}{7}\\right)^{2}+\\dfrac{189}{49}\\geq\\dfrac{189}{49}.$  Do đó $AM^{2}\\geq\\dfrac{189}{49}\\Rightarrow AM\\geq\\dfrac{\\sqrt{189}}{7}$.<br>  Dấu bằng xảy ra khi $BM-\\dfrac{6\\sqrt{7}}{7}=0\\Leftrightarrow BM=\\dfrac{6\\sqrt{7}}{7}$ hay $BM=\\dfrac{6}{7}BC$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS2",
  "question": "Cho $\\triangle ABC$, có diện tích bằng $12\\sqrt{3}$, cạnh $AB=6$, $\\widehat{BAC}=120^\\circ$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos B$",
    "answer": false
   },
   {
    "text": "Độ dài cạnh $BC=2\\sqrt{37}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn ngoại tiếp $\\triangle ABC$ là $\\dfrac{3\\sqrt{111}}{2}$",
    "answer": false
   },
   {
    "text": "Độ dài chân đường phân giác trong góc $A$ của $\\triangle ABC$ có độ dài là $\\dfrac{25}{7}$",
    "answer": false
   }
  ],
  "explain": "<br>- Ta có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A$<br>- Ta có $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin A\\Rightarrow\\dfrac{1}{2}\\cdot 6\\cdot AC\\cdot\\sin 120^\\circ=12\\sqrt{3}\\Rightarrow AC=8$.<br>  Suy ra $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A$<br>  $\\Rightarrow BC^{2}=6^{2}+8^{2}-2\\cdot 6\\cdot 8\\cdot\\cos 120^\\circ=148$.  $\\Rightarrow BC=2\\sqrt{37}$.<br>- Bán kính đường tròn ngoại tiếp tam giác $\\triangle ABC$ là $R$. Ta có<br>  $S_{ABC}=\\dfrac{AB\\cdot AC\\cdot BC}{4\\cdot R}\\Rightarrow R=\\dfrac{AB\\cdot AC\\cdot BC}{4 S_{ABC}}=\\dfrac{6\\cdot 8\\cdot 2\\sqrt{37}}{4\\cdot 12\\sqrt{3}}=\\dfrac{2\\sqrt{111}}{3}$<br>- Gọi $M$ là chân đường phân giác góc $A$. Ta có <br>  $S_{ABC}=S_{ABM}+S_{ACM} \\Rightarrow \\dfrac{1}{2} AB \\cdot AC \\sin \\widehat{BAC}=\\dfrac{1}{2} AB \\cdot AM \\sin \\dfrac{\\widehat{BAC}}{2}+\\dfrac{1}{2} AC \\cdot AM \\sin \\dfrac{\\widehat{BAC}}{2}$.<br>  Do đó $AM = \\dfrac{ AB \\cdot AC \\sin \\widehat{BAC}}{ \\left(AB + AC\\right) \\sin \\dfrac{\\widehat{BAC}}{2}} = \\dfrac{ 6 \\cdot 8 \\sin 120^\\circ}{ \\left(6 + 8\\right) \\sin 60^\\circ} = \\dfrac{24}{7}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS3",
  "question": "Cho $\\triangle ABC$ có $BC=a$, $CA=b$, $AB=c$ và bán kính đường tròn ngoại tiếp $R$.",
  "subQuestions": [
   {
    "text": "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=R$",
    "answer": false
   },
   {
    "text": "Nếu $a=50\\mathrm{~cm}$, $\\widehat{B}=65^\\circ$ và $\\widehat{C}=45^\\circ$ thì bán kính đường tròn ngoại tiếp làm tròn kết quả đến hàng phần mười là $R\\approx 26{,}6\\mathrm{~cm}$",
    "answer": true
   },
   {
    "text": "Nếu $a=10$, $\\widehat{B}=80^\\circ$, $R=10$ thì góc $\\widehat{C}=60^\\circ$",
    "answer": false
   },
   {
    "text": "Giả sử tam giác $ABC$ được bạn An đã cắt từ một tấm tôn hình tròn có bán kính $R=1~\\mathrm{(m)}$. Để tam giác $ABC$ có $A=45^\\circ,B=75^\\circ$ thì An phải cắt miếng tôn theo hai dây cung $AB\\approx 1{,}73(\\mathrm{~m})$ và $BC\\approx 1{,}41(\\mathrm{~m})$.(kết quả làm tròn đến hàng phần trăm)",
    "answer": true
   }
  ],
  "explain": "<br>- Ta có $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2 R$.<br>- Vì $A+B+C=180^\\circ\\Rightarrow A=180^\\circ-\\left(65^\\circ+45^\\circ\\right)=70^\\circ$.<br>  Ta có $\\dfrac{a}{\\sin A}=2 R$ nên $R=\\dfrac{50}{2\\cdot\\sin 70^\\circ}\\approx 26{,}6$.<br>- Ta có $\\dfrac{a}{\\sin A}=2R \\Rightarrow \\sin A=\\dfrac{a}{2R}=\\dfrac{10}{20}=\\dfrac{1}{2}$. Vì $B=80^\\circ$ nên $A&lt;100^\\circ$, suy ra $A=30^\\circ$. Vậy $C=180^\\circ-80^\\circ-30^\\circ=70^\\circ$.<br>- Xét tam giác $ABC$ ta có $A+B+C=180^\\circ\\Rightarrow C=180^\\circ-45^\\circ-75^\\circ=60^\\circ$.<br>  Áp dụng định lý sin ta có $\\dfrac{AB}{\\sin C}=\\dfrac{BC}{\\sin A}=2 R=2$.<br>  Suy ra $AC=2\\sin C=2\\sin 60^\\circ\\approx 1{,}73(\\mathrm{~m})$ và $BC=2\\sin A=2\\sin 45^\\circ\\approx 1{,}41(\\mathrm{~m})$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H424DS4",
  "question": "Cho $\\triangle ABC$ có $BC=a$, $CA=b$, $AB=c$ và bán kính đường tròn ngoại tiếp $R$.",
  "subQuestions": [
   {
    "text": "$a\\sin C=c\\sin A$",
    "answer": true
   },
   {
    "text": "Nếu $a=7$, $B=60^\\circ$ và $C=75^\\circ$ thì $b=\\dfrac{7\\sqrt{6}}{2}$",
    "answer": true
   },
   {
    "text": "Nếu $a=7$, $B=60^\\circ$ và $C=75^\\circ$ thì $R=7\\sqrt{2}$",
    "answer": false
   },
   {
    "text": "Nếu $4\\sin A=3\\sin B-2\\sin C$ và $b=2 c$ thì $\\triangle ABC$ vuông tại $A$",
    "answer": false
   }
  ],
  "explain": "<br>- Ta có $\\dfrac{a}{\\sin A}=\\dfrac{c}{\\sin C}\\Leftrightarrow a\\sin C=c\\sin A$.<br>- Ta có $A+B+C=180^\\circ\\Rightarrow A=180^\\circ-\\left(60^\\circ+75^\\circ\\right)=45^\\circ$.<br>  Mà $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$ nên $b=\\dfrac{7\\cdot\\sin 60^\\circ}{\\sin 45^\\circ}=\\dfrac{7\\sqrt{6}}{2}$.<br>- Ta có $\\dfrac{a}{\\sin A}=2 R$ nên $R=\\dfrac{7}{2\\cdot\\sin 45^\\circ}=\\dfrac{7\\sqrt{2}}{2}$.<br>- Ta có $4\\sin A=3\\sin B-2\\sin C\\Leftrightarrow\\dfrac{4a}{2R}=\\dfrac{3b}{2R}-\\dfrac{2c}{2R}\\Leftrightarrow 4a=3b-2c$.<br>  Mà $b=2c$ nên $4a=6c-2c\\Leftrightarrow 4a=4c\\Leftrightarrow a=c$.<br>  Suy ra $\\triangle ABC$ cân tại $B$ nên không thể vuông tại $A$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS5",
  "question": "Cho tam giác $ABC$ có $a=13$, $b=8$, $c=7$. Các mệnh đề sau đây đúng hay sai?",
  "subQuestions": [
   {
    "text": "Góc $A$ bằng $60^\\circ$",
    "answer": false
   },
   {
    "text": "Diện tích tam giác $AB C$ là $14\\sqrt{3}$",
    "answer": true
   },
   {
    "text": "Chiều cao từ $A$ đến $B C$ là $\\dfrac{28\\sqrt{3}}{13}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn nội tiếp tam giác $AB C\\sqrt{3}$",
    "answer": true
   }
  ],
  "explain": "<br>- $a^{2}=b^{2}+c^{2}-2 b c\\cos A\\Rightarrow\\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2 b c}=-\\dfrac{1}{2}\\Rightarrow A=120^\\circ$.<br>- $S=\\dfrac{1}{2}b c\\sin A=\\dfrac{1}{2}56\\cdot\\dfrac{\\sqrt{3}}{2}=14\\sqrt{3}$.<br>- $S=\\dfrac{1}{2}a\\cdot h_{a}\\Rightarrow h_{a}=\\dfrac{2 S}{a}=\\dfrac{28\\sqrt{3}}{13}$.<br>- $S=p\\cdot r\\Rightarrow r=\\dfrac{2 S}{a+b+c}=\\dfrac{2.14\\sqrt{3}}{7+8+13}=\\sqrt{3}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS6",
  "question": "Cho tam giác $ABC$ có $BC=a=7$; $AC=b=8$; $AB=c=5$.",
  "subQuestions": [
   {
    "text": "Góc $\\widehat{BAC}=60^\\circ$",
    "answer": true
   },
   {
    "text": "Diện tích tam giác $ABC$ là $10\\sqrt{3}$",
    "answer": true
   },
   {
    "text": "Chiều cao từ $A$ đến $BC$ là $\\dfrac{20\\sqrt{3}}{7}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ bằng $\\dfrac{7\\sqrt{3}}{3}$",
    "answer": true
   }
  ],
  "explain": "<br>- $\\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2bc}=\\dfrac{8^{2}+5^{2}-7^{2}}{2\\cdot 8\\cdot 5}=\\dfrac{1}{2}\\Rightarrow A=60^\\circ$.<br>- $S=\\dfrac{1}{2} b\\cdot c \\cdot \\sin A=\\dfrac{1}{2}\\cdot 8\\cdot 5\\cdot\\sin 60^\\circ=10\\sqrt{3}$.<br>- Ta có $S=\\dfrac{1}{2}a \\cdot h_{a}\\Rightarrow h_{a}=\\dfrac{2 S}{a}=\\dfrac{2 \\cdot 10\\sqrt{3}}{7}=\\dfrac{20\\sqrt{3}}{7}$.<br>- Ta có: $S=\\dfrac{a\\cdot b\\cdot c}{4R}\\Rightarrow R=\\dfrac{a\\cdot b\\cdot c}{4 S}=\\dfrac{7 \\cdot 8\\cdot 5}{4\\cdot 10\\sqrt{3}}=\\dfrac{7\\sqrt{3}}{3}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS7",
  "question": "Cho tam giác $\\triangle ABC$ có $AC=b=7$; $AB=c=5$; $\\cos A=\\dfrac{3}{5}$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Góc $A$ là góc tù",
    "answer": false
   },
   {
    "text": "$a=4\\sqrt{2}$",
    "answer": true
   },
   {
    "text": "$\\sin A=-\\dfrac{4}{5}$",
    "answer": false
   },
   {
    "text": "Độ dài đường cao hạ từ đỉnh $A$ bằng $\\dfrac{7\\sqrt{2}}{2}$",
    "answer": true
   }
  ],
  "explain": "<br>- $\\cos A=\\dfrac{3}{5}&gt;0\\Rightarrow A$ nhọn.<br>- $a=\\sqrt{b^{2}+c^{2}-2bc\\cos A}=\\sqrt{7^{2}+5^{2}-2\\cdot 7\\cdot 5\\cdot\\dfrac{3}{5}}=\\sqrt{32}=4\\sqrt{2}$.<br>- $\\sin^{2}A=1-\\cos^{2}A=1-\\left(\\dfrac{3}{5}\\right)^{2}=\\dfrac{16}{25}$.<br>  Suy ra $\\sin A=\\dfrac{4}{5} \\text{ hoặc } \\sin A=-\\dfrac{4}{5}$ vì $0\\leq A\\leq 180^\\circ$ nên $\\sin A=\\dfrac{4}{5}$.<br>- $S=\\dfrac{1}{2}bc\\sin A=\\dfrac{1}{2}\\cdot 7\\cdot 5\\cdot\\dfrac{4}{5}=14$<br>  mà $S=\\dfrac{1}{2}a\\cdot h_{a}\\Leftrightarrow 14=\\dfrac{1}{2}\\cdot 4\\sqrt{2}\\cdot h_{a}\\Leftrightarrow h_{a}=\\dfrac{7\\sqrt{2}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS8",
  "question": "Cho tam giác $ABC$ có $AB=2$; $AC=3$; $BC=4$. Xét tính đúng sai của các mệnh đề sau.<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Diện tích của tam giác $ABC$ là $S_{ABC}=\\dfrac{3\\sqrt{15}}{4}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn nội tiếp của tam giác $ABC$ là $r=\\dfrac{\\sqrt{15}}{5}$",
    "answer": false
   },
   {
    "text": "Gọi $M$, $N$ lần lượt là trung điểm của cạnh $AC$ và $AB$. Khi đó, $S_{ANC}&lt;S_{AMB}$",
    "answer": false
   },
   {
    "text": "Gọi $D$ là điểm đối xứng của $N$ qua $B$. Khi đó, $\\cos \\widehat{NCD}=\\dfrac{2\\sqrt{115}}{23}$",
    "answer": true
   }
  ],
  "explain": "<br>- Ta có $S_{ABC}=\\sqrt{p(p-AB)(p-AC)(p-BC)}=\\dfrac{3\\sqrt{15}}{4}$.<br>- Ta có: $S_{ABC}=p\\cdot r\\Rightarrow r=\\dfrac{S_{ABC}}{p}=\\dfrac{\\sqrt{15}}{6}\\neq\\dfrac{\\sqrt{15}}{5}$.<br>- Ta có $\\dfrac{S_{ANC}}{S_{ABC}}=\\dfrac{\\dfrac{1}{2}AN\\cdot AC\\cdot\\sin \\widehat{BAC}}{\\dfrac{1}{2}AC\\cdot AB\\cdot\\sin \\widehat{BAC}}=\\dfrac{AN}{AB}=\\dfrac{1}{2}\\Rightarrow S_{ANC}=\\dfrac{1}{2}S_{ABC}$.<br>  Tương tự $\\dfrac{S_{AMB}}{S_{ABC}}=\\dfrac{\\dfrac{1}{2}AM\\cdot AB\\cdot\\sin \\widehat{BAC}}{\\dfrac{1}{2}AC\\cdot AB\\cdot\\sin \\widehat{BAC}}=\\dfrac{AM}{AC}=\\dfrac{1}{2}\\Rightarrow S_{AMB}=\\dfrac{1}{2}S_{ABC}$.<br>  Khi đó $S_{ANC}=S_{AMB}$.<br>- Ta có $ND=2 NB=2\\Rightarrow AD=3$.<br>  Ta có $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos \\widehat{BAC}\\Rightarrow\\cos \\widehat{BAC}=-\\dfrac{1}{4}$.<br>  Ta có $CD^{2}=AD^{2}+AC^{2}-2\\cdot AD\\cdot AC\\cdot\\cos \\widehat{BAC}\\Rightarrow CD=\\dfrac{3\\sqrt{10}}{2}$.<br>  Ta có $CN^{2}=\\dfrac{2\\left(CA^{2}+CB^{2}\\right)-AB^{2}}{4}\\Rightarrow CN=\\dfrac{\\sqrt{46}}{2}$.<br>  Ta có $DN^{2}=CN^{2}+CD^{2}-2 CN\\cdot CD\\cdot\\cos \\widehat{NCD}\\Rightarrow\\cos \\widehat{NCD}=\\dfrac{2\\sqrt{115}}{23}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS9",
  "question": "Cho tam giác $ABC$ cân tại $A$ có $C=30^\\circ$, $BC=3\\mathrm{~cm}$. Xét tính đúng sai của các khẳng định sau.",
  "subQuestions": [
   {
    "text": "Bán kính đường tròn ngoại tiếp của tam giác $ABC$ là $R=\\sqrt{3}$",
    "answer": true
   },
   {
    "text": "Diện tích tam giác $ABC$ là $\\dfrac{\\sqrt{3}}{4}\\mathrm{~cm}^{2}$",
    "answer": false
   },
   {
    "text": "$MB\\perp NC$ ở đó $M$, $N$ là trung điểm của $AC$ và $AB$",
    "answer": false
   },
   {
    "text": "Trên tia đối của tia $AC$ ta lấy $D$ sao cho $BD=\\dfrac{3\\sqrt{2}}{2}\\mathrm{~cm}$. Khi đó $\\cos \\widehat{ABD}=\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$",
    "answer": true
   }
  ],
  "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Do tam giác $ABC$ cân tại $A$ nên $B=C=30^\\circ\\Rightarrow A=120^\\circ$.<br>  Theo định lí sin ta có: $R=\\dfrac{BC}{2\\sin A}=\\dfrac{3}{2\\cdot\\dfrac{\\sqrt{3}}{2}}=\\sqrt{3}$.<br>- Theo định lí sin ta có: $AB=2 R\\cdot\\sin C=2\\cdot\\sqrt{3}\\cdot\\sin 30^\\circ=2\\cdot\\sqrt{3}\\cdot\\dfrac{1}{2}=\\sqrt{3}\\Rightarrow AC=\\sqrt{3}$.<br>  Diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin A=\\dfrac{1}{2}\\cdot\\sqrt{3}\\cdot\\sqrt{3}\\cdot\\dfrac{\\sqrt{3}}{2}=\\dfrac{3\\sqrt{3}}{4}\\mathrm{~cm}^{2}$.<br>- Do tam giác $ABC$ cân tại $A$ nên $BM=CN$.<br>  Áp dụng công thức đường trung tuyến ta được:  $BM^{2}=CN^{2}=\\dfrac{BC^{2}+AB^{2}}{2}-\\dfrac{AC^{2}}{4}=\\dfrac{3^{2}+\\sqrt{3}^{2}}{2}-\\dfrac{\\sqrt{3}^{2}}{4}=\\dfrac{21}{4}.$  $\\Rightarrow BM=CN=\\dfrac{\\sqrt{21}}{2}$.  Gọi $G$ là trọng tâm tam giác $ABC$. Suy ra $GB=GC=\\dfrac{2}{3}BM=\\dfrac{2}{3}\\cdot\\dfrac{\\sqrt{21}}{2}=\\dfrac{\\sqrt{21}}{3}$.<br>  Xét tam giác $GBC$ ta thấy $GB^{2}+GC^{2}=\\dfrac{42}{9}\\neq BC^{2}$ nên $GB$ không vuông góc $GC$.<br>- Xét tam giác $ABD$ có $\\widehat{DAB}=60^\\circ$. Áp dụng định lí cô-sin vào tam giác $ABD$ có  $BD^{2}=AB^{2}+AD^{2}-2\\cdot AB\\cdot AD\\cdot\\cos \\widehat{DAB}$<br>$\\Leftrightarrow 3+AD^{2}-2\\cdot\\sqrt{3}\\cdot AD\\cdot\\dfrac{1}{2}=\\dfrac{9}{2}$<br>$\\Leftrightarrow 2 AD^{2}-2\\sqrt{3}\\cdot AD-3=0$<br>$\\Leftrightarrow A D=\\dfrac{\\sqrt{3}+3}{2} \\text{(thoả)} \\text{ hoặc } A D=\\dfrac{\\sqrt{3}-3}{2} \\text{(không thoả).}$  Ta có $\\cos \\widehat{ABD}=\\dfrac{AB^{2}+BD^{2}-AD^{2}}{2\\cdot AB\\cdot BD}=\\dfrac{3+\\dfrac{9}{2}-\\dfrac{6+3\\sqrt{3}}{2}}{2\\cdot\\sqrt{3}\\cdot\\dfrac{3\\sqrt{2}}{2}}=\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS10",
  "question": "Tam giác $ABC$ có $2\\sin A=\\sin B$; $c=2$ và $a^{2}+b^{2}=15$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Độ dài cạnh $AB$ lớn nhất",
    "answer": false
   },
   {
    "text": "Độ dài cạnh $BC=\\sqrt{3}$",
    "answer": true
   },
   {
    "text": "$\\cos C=\\dfrac{11}{12}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn nội tiếp tam giác là $r=\\dfrac{3\\sqrt{69}-2\\sqrt{23}}{46}$",
    "answer": true
   }
  ],
  "explain": "<br>- Áp dụng định lý sin ta có $a = 2R\\sin A$; $b=2R\\sin B$ nên $2\\sin A=\\sin B\\Rightarrow 2a=b$ mà $a^{2}+b^{2}=15\\Rightarrow a^{2}+4 a^{2}=15\\Rightarrow a=\\sqrt{3}\\Rightarrow b=2\\sqrt{3}$.<br>  Do đó $b&gt;c&gt;a\\Rightarrow \\widehat{ABC}$ là góc lớn nhất.<br>- Ta có $BC=a=\\sqrt{3}$.<br>- Áp dụng định lý cô-sin ta có $\\cos C=\\dfrac{a^{2}+b^{2}-c^{2}}{2\\cdot a\\cdot b}=\\dfrac{11}{12}$.<br>- Ta có $p=\\dfrac{a+b+c}{2}=\\dfrac{3\\sqrt{3}+2}{2}$.<br>  Diện tích tam giác $S=\\sqrt{p(p-a)(p-b)(p-c)}=pr\\Rightarrow r=\\dfrac{\\sqrt{p(p-a)(p-b)(p-c)}}{p}=\\dfrac{3\\sqrt{69}-2\\sqrt{23}}{46}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS11",
  "question": "Cho tam giác $ABC$ biết $AB=2$; $AC=5$; $\\widehat{BAC}=60^\\circ$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R=\\dfrac{BC}{2\\cdot\\sin \\widehat{BAC}}$",
    "answer": true
   },
   {
    "text": "Độ dài cạnh $BC$ bằng $2\\sqrt{6}$",
    "answer": false
   },
   {
    "text": "Diện tích tam giác $ABC$ bằng $\\dfrac{5\\sqrt{3}}{2}$",
    "answer": true
   },
   {
    "text": "Gọi $E$ là điểm thỏa mãn $\\overrightarrow{BE}=3\\overrightarrow{CE}$. Bán kính đường tròn ngoại tiếp tam giác $ABE$ bằng $\\dfrac{19\\sqrt{11343}}{285}$",
    "answer": true
   }
  ],
  "explain": "<br>- Áp dụng định lý sin cho tam giác $ABC$ ta có $\\dfrac{BC}{\\sin \\widehat{BAC}}=2R\\Leftrightarrow R=\\dfrac{BC}{2\\cdot\\sin \\widehat{BAC}}$.<br>- Áp dụng định lý cos cho tam giác $ABC$ ta có $BC^{2}=2^{2}+5^{2}-2\\cdot 2\\cdot 5\\cdot\\cos 60^\\circ=19\\Rightarrow BC=\\sqrt{19}$.<br>- Ta có diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin \\widehat{BAC}=\\dfrac{1}{2}\\cdot 2\\cdot 5\\cdot\\sin 60^\\circ=\\dfrac{5\\sqrt{3}}{2}$.<br>- Ta có $BE=\\dfrac{3}{2}BC=\\dfrac{3\\sqrt{19}}{2}$.<br>  Từ định lý $\\cos$ cho tam giác $ABC$ ta có $\\cos B=\\dfrac{BA^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{4+19-25}{2\\cdot 2\\cdot\\sqrt{19}}=-\\dfrac{1}{2\\sqrt{19}}\\Rightarrow\\sin B=\\sqrt{1-\\cos^{2}B}=\\dfrac{5\\sqrt{57}}{38}$.<br>  Áp dụng định lý cos cho tam giác $ABE$ ta có $AE^{2}=AB^{2}+BE^{2}-2\\cdot AB\\cdot BE\\cdot\\cos B=4+\\left(\\dfrac{3\\sqrt{19}}{2}\\right)^{2}-2\\cdot 2\\cdot\\dfrac{3\\sqrt{19}}{2}\\cdot\\left(-\\dfrac{1}{2\\sqrt{19}}\\right)=\\dfrac{199}{4}$  $\\Rightarrow AE=\\dfrac{\\sqrt{199}}{2}$.  Vậy bán kính đường tròn ngoại tiếp tam giác $ABE$ là $R_{1}=\\dfrac{AE}{2\\sin B}=\\dfrac{\\sqrt{199}}{2\\cdot\\dfrac{5\\sqrt{57}}{38}}=\\dfrac{19\\sqrt{199}}{5\\sqrt{57}}=\\dfrac{19\\sqrt{11343}}{285}.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS12",
  "question": "Cho tam giác $ABC$ có cạnh $AB=c$, $BC=a$, $CA=b$.",
  "subQuestions": [
   {
    "text": "Khi $a=b=c=5$ thì $\\cot A=\\dfrac{1}{\\sqrt{3}}$",
    "answer": true
   },
   {
    "text": "Khi $a=\\sqrt{2}b=\\sqrt{2}c$ thì $\\cot A=1$",
    "answer": false
   },
   {
    "text": "$\\cot A=\\dfrac{b^{2}+c^{2}-a^{2}}{5S}$ ,với $S$ là diện tích tam giác $ABC$",
    "answer": false
   },
   {
    "text": "$\\cot A+\\cot B+\\cot C=\\dfrac{b^{2}+c^{2}+a^{2}}{4 S}$ ,với $S$ là diện tích tam giác $ABC$",
    "answer": true
   }
  ],
  "explain": "<br>- Khi $a=b=c=5$ thì tam giác $ABC$ đều nên $\\cot A=\\cot 60^\\circ=\\dfrac{1}{\\sqrt{3}}$<br>- Khi $a=\\sqrt{2}b=\\sqrt{2}c\\Leftrightarrow b=c=\\dfrac{a}{\\sqrt{2}}$ suy ra tam giác $ABC$ vuông cân tại $A$.<br>  Do đó $\\cot A=\\cot 90^\\circ=0$.<br>- Theo định lí sin và định lí côsin ta có  $\\sin A=\\dfrac{a}{2 R};\\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2 bc},(R$ là bán kính đường tròn ngoại tiếp tam giác $ABC)$.<br>  Và công thức $S=\\dfrac{abc}{4 R}\\Leftrightarrow\\dfrac{R}{abc}=\\dfrac{1}{4 S}$.<br>  Khi đó $\\cot A=\\dfrac{\\cos A}{\\sin A}=\\dfrac{b^{2}+c^{2}-a^{2}}{2 bc}:\\dfrac{a}{2 R}=\\dfrac{b^{2}+c^{2}-a^{2}}{abc}R=\\dfrac{b^{2}+c^{2}-a^{2}}{4S}$.<br>- Ta lại có $\\cot B=\\dfrac{a^{2}+c^{2}-b^{2}}{4 S};\\cot C=\\dfrac{a^{2}+b^{2}-c^{2}}{4 S}$.<br>  Khi đó $\\cot A+\\cot B+\\cot C=\\dfrac{b^{2}+c^{2}-a^{2}}{4 S}+\\dfrac{a^{2}+c^{2}-b^{2}}{4 S}+\\dfrac{a^{2}+b^{2}-c^{2}}{4 S}=\\dfrac{b^{2}+c^{2}+a^{2}}{4 S}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS13",
  "question": "Cho tam giác $ABC$ với $AB=2,BC=3,CA=4$. Xét tính đúng, sai của các mệnh đề sau:",
  "subQuestions": [
   {
    "text": "Tam giác $ABC$ có diện tích bằng $\\sqrt{2}$",
    "answer": false
   },
   {
    "text": "Tam giác $ABC$ có chiều cao $AH=1$",
    "answer": false
   },
   {
    "text": "Tam giác $ABC$ có góc $B$ là góc tù",
    "answer": true
   },
   {
    "text": "Tam giác $ABC$ có tổng độ dài bán kính đường tròn nội tiếp và ngoại tiếp bằng $\\dfrac{7\\sqrt{15}}{10}$",
    "answer": true
   }
  ],
  "explain": "<br>- Trong tam giác $ABC$ có $p=\\dfrac{2+3+4}{2}=\\dfrac{9}{2}$ nên theo công thức Hê-rông ta có $S=\\sqrt{p(p-a)(p-b)(p-c)}=\\dfrac{3\\sqrt{15}}{4}$.<br>- $S=\\dfrac{1}{2}AH\\cdot BC\\Leftrightarrow AH=\\dfrac{2S}{BC}=\\dfrac{\\sqrt{15}}{2}$.<br>- Theo định lí cô-sin, $\\cos B=\\dfrac{AB^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{2^{2}+3^{2}-4^{2}}{2\\cdot 2\\cdot 3}=-\\dfrac{1}{4}&lt;0 \\Rightarrow B&gt;90^\\circ$.<br>- Ta có $S=\\dfrac{a b c}{4 R}\\Leftrightarrow R=\\dfrac{a b c}{4 S}=\\dfrac{2.3\\cdot 4}{4\\cdot\\dfrac{3\\sqrt{15}}{4}}=\\dfrac{8\\sqrt{15}}{15}$.<br>  Lại có $S=pr\\Leftrightarrow r=\\dfrac{S}{p}=\\dfrac{\\sqrt{15}}{6}$.<br>  Vậy $R+r=\\dfrac{8\\sqrt{15}}{15}+\\dfrac{\\sqrt{15}}{6}=\\dfrac{7\\sqrt{15}}{10}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS14",
  "question": "Từ vị trí $A$ người ta quan sát một cây cao (hình vẽ). Biết $AH=4\\mathrm{~m}$, $HB=20\\mathrm{~m}$, $\\widehat{BAC}=45^\\circ$.  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Độ dài đoạn $AB=24$",
    "answer": false
   },
   {
    "text": "$\\tan \\widehat{ABH}=\\dfrac{1}{5}$",
    "answer": true
   },
   {
    "text": "Số đo góc $\\widehat{ACB}$ làm tròn đến phút là $56^\\circ 18'$",
    "answer": true
   },
   {
    "text": "Độ dài đoạn $BC=\\dfrac{52}{3}$",
    "answer": true
   }
  ],
  "explain": "<br>- Độ dài $AB=\\sqrt{4^{2}+20^{2}}=4\\sqrt{26}$.<br>- Xét tam giác vuông $AHB$ có $\\tan \\widehat{ABH}=\\dfrac{AH}{BH}=\\dfrac{4}{20}=\\dfrac{1}{5}$.<br>- Góc $\\widehat{CBA}=90^\\circ-\\widehat{ABH}\\approx 78^\\circ 41'\\Rightarrow \\widehat{ACB} = 180^\\circ-45^\\circ-\\widehat{CBA}\\approx 56^\\circ 18'$.<br>- Áp dụng định lí sin trong tam giác $ABC$ ta có $\\dfrac{BC}{\\sin 45^\\circ}=\\dfrac{AB}{\\sin\\widehat{ACB}}\\Rightarrow BC=\\dfrac{AB\\cdot\\sin 45^\\circ}{\\sin \\widehat{ACB}}=\\dfrac{52}{3}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS15",
  "question": "Cho tam giác $ABC$ có $AB=2\\sqrt{3},AC=3$ và $\\cos A=\\dfrac{-\\sqrt{3}}{9}$.",
  "subQuestions": [
   {
    "text": "Góc nhỏ nhất trong tam giác là góc $B$",
    "answer": false
   },
   {
    "text": "Độ dài cạnh $BC$ là $5$",
    "answer": true
   },
   {
    "text": "Gọi $M$ là trung điểm của cạnh $AC$. Độ dài cạnh $BM$ là $\\sqrt{13}$",
    "answer": false
   },
   {
    "text": "Diện tích của tam giác $ABC$ là $\\sqrt{26}$",
    "answer": true
   }
  ],
  "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $\\cos A=\\dfrac{-\\sqrt{3}}{9}$ nên góc $A$ là góc lớn nhất<br>  mà $AB&lt;AC\\Rightarrow C&lt;B$. Vậy góc $C$ là góc nhỏ nhất trong tam giác $ABC$.<br>- Theo định lí cô-sin trong tam giác ta có  $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos A = 3^{2}+ (2\\sqrt{3})^{2}-2\\cdot 3\\cdot 2\\sqrt{3}\\cdot\\dfrac{-\\sqrt{3}}{9}=25\\Rightarrow BC=5.$<br>- Theo định lí cô-sin trong tam giác $AMB$ ta có  $BM^{2}=AB^{2}+AM^{2}-2 AB\\cdot AM\\cdot\\cos A=3^{2}+(\\sqrt{3})^{2}-2\\cdot 3\\cdot\\sqrt{3}\\cdot\\dfrac{-\\sqrt{3}}{9}=14 \\Rightarrow BM=\\sqrt{14}.$<br>- Ta có $\\sin A=\\sqrt{1-\\cos^{2}A}=\\sqrt{1-\\left(\\dfrac{-\\sqrt{3}}{9}\\right)^{2}}=\\dfrac{\\sqrt{78}}{9}$.<br>  Diện tích của tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin A=\\dfrac{1}{2}\\cdot 2\\sqrt{3}\\cdot 3\\cdot\\dfrac{\\sqrt{78}}{9}=\\sqrt{26}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS16",
  "question": "Cho tam giác $ABC$ có $AB=6;AC=8;\\widehat{BAC}=90^\\circ$. Gọi $D,E$ là các điểm thuộc cạnh $BC$ sao cho $CD=BE=\\dfrac{1}{4}BC$.",
  "subQuestions": [
   {
    "text": "Tam giác $ABC$ vuông cân",
    "answer": false
   },
   {
    "text": "Độ dài cạnh $BC=10$",
    "answer": true
   },
   {
    "text": "Số đo góc $\\widehat{ABC}=60^\\circ$",
    "answer": false
   },
   {
    "text": "Số đo góc $\\widehat{EAD}\\approx 52^\\circ$",
    "answer": true
   }
  ],
  "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $AB=6;AC=8\\Rightarrow\\triangle ABC$ không cân.<br>- Ta có $BC^{2}=AB^{2}+AC^{2}=6^{2}+8^{2}=100\\Rightarrow BC=10$.<br>- Xét $\\triangle ABC:\\tan \\widehat{ABC}=\\dfrac{AC}{AB}=\\dfrac{8}{6}=\\dfrac{4}{3}\\Rightarrow \\widehat{ABC}\\approx 53^\\circ$.  Vậy $A B C=60^\\circ$ (sai)<br>- Vì $CD=BE=\\dfrac{1}{4}BC\\Rightarrow CD=BE=\\dfrac{5}{2}\\Rightarrow DE=5$.<br>  Vì $\\triangle ABC$ vuông tại $A$ suy ra $\\cos \\widehat{ABC}=\\dfrac{AB}{BC}=\\dfrac{3}{5};\\cos \\widehat{ACB}=\\dfrac{AC}{BC}=\\dfrac{4}{5}$.<br>  Áp dụng định lí cô sin cho $\\triangle ABE$ và $\\triangle ACD$ có $AE^{2}=AB^{2}+BE^{2}-2 AB\\cdot BE\\cdot\\cos \\widehat{ABE}=6^{2}+\\left(\\dfrac{5}{2}\\right)^{2}-2\\cdot 6\\cdot\\dfrac{5}{2}\\cdot\\dfrac{3}{5}=\\dfrac{97}{4}\\Rightarrow AE=\\dfrac{\\sqrt{97}}{2}.$  $AD^{2}=AC^{2}+CD^{2}-2 AC\\cdot CD\\cdot\\cos \\widehat{ACD}=8^{2}+\\left(\\dfrac{5}{2}\\right)^{2}-2\\cdot 8\\cdot\\dfrac{5}{2}\\cdot\\dfrac{4}{5}=\\dfrac{153}{4}\\Rightarrow AD=\\dfrac{\\sqrt{153}}{2}$.<br>  $\\cos \\widehat{DAE}=\\dfrac{AD^{2}+AE^{2}-DE^{2}}{2\\cdot AD\\cdot AE}=\\dfrac{\\dfrac{153}{4}+\\dfrac{97}{4}-5^{2}}{2\\cdot\\dfrac{\\sqrt{153}}{2}\\cdot\\dfrac{\\sqrt{97}}{2}}\\approx 0{,}6156 \\Rightarrow \\widehat{DAE}\\approx 52^\\circ$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS17",
  "question": "Cho tam giác $ABC$ có $AB=15$, $AC=20$ và $\\widehat{BAC}=60^\\circ$. Gọi $R$, $r$ lần lượt là bán kính đường tròn ngoại tiếp, nội tiếp tam giác $ABC$. Các kết quả làm tròn đến hàng đơn vị.",
  "subQuestions": [
   {
    "text": "$BC=18$",
    "answer": true
   },
   {
    "text": "$\\widehat{ABC}=75^\\circ$",
    "answer": false
   },
   {
    "text": "$S=129$",
    "answer": false
   },
   {
    "text": "$2R-5r&lt;0$",
    "answer": true
   }
  ],
  "explain": "<br>- Áp dụng định lí cô-sin trong tam giác $ABC$, ta có  $BC^{2}=AB^{2}+AC^{2}-2\\cdot AB\\cdot AC\\cdot\\cos A=15^{2}+20^{2}-2\\cdot 15\\cdot 20\\cdot\\cos 60^\\circ=325.$  Do đó $BC=\\sqrt{325}\\approx 18$.<br>- Ta có   $\\cos B=\\dfrac{AB^{2}+BC^{2}-AC^{2}}{2\\cdot AB\\cdot BC}=\\dfrac{5^{2}+18^{2}-20^{2}}{2\\cdot 15\\cdot 18}=\\dfrac{149}{540}.$  Do đó $\\widehat{ABC}\\approx 74^\\circ$.<br>- Diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin \\widehat{BAC}=\\dfrac{1}{2}\\cdot 15\\cdot 20\\cdot\\sin 60^\\circ=75\\sqrt{3}\\approx 130$.<br>- Áp dụng định lí Sin trong tam giác $A B C$ ,ta có  $2 R=\\dfrac{BC}{\\sin A} \\Leftrightarrow R=\\dfrac{BC}{2\\cdot\\sin A}=\\dfrac{\\sqrt{325}}{2\\cdot\\sin 60^\\circ}=\\sqrt{\\dfrac{325}{3}}.$  Lại có $S=r\\cdot \\dfrac{a+b+c}{2}\\Leftrightarrow r=\\dfrac{2S}{a+b+c}=\\dfrac{2.75\\sqrt{3}}{15+\\sqrt{325}+20}\\approx 4{,}9$.<br>  Do đó $2R-5r&lt;0$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS18",
  "question": "Cho tam giác $ABC$ có $BC=12~(\\mathrm{cm})$, $AC=15~(\\mathrm{cm})$, $C=120^\\circ$. Các độ dài đoạn thẳng làm tròn đến hàng phần trăm và số đo góc làm tròn đến độ.",
  "subQuestions": [
   {
    "text": "$AB^{2}=AC^{2}+CB^{2}+2 BC\\cdot AC\\cdot\\cos C$",
    "answer": false
   },
   {
    "text": "$\\widehat{BAC}=26^\\circ$",
    "answer": true
   },
   {
    "text": "Độ dài đường cao hạ từ $C$ của tam giác là $CH=6{,}65~(\\mathrm{cm})$",
    "answer": true
   },
   {
    "text": "Độ dài đường phân giác trong hạ từ $C$ là $C D$ lớn hơn $7~(\\mathrm{cm})$",
    "answer": false
   }
  ],
  "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- $AB^{2}=AC^{2}+CB^{2}-2 BC\\cdot AC\\cdot\\cos C$.<br>- Ta có   $AB^{2} = AC^{2}+CB^{2}-2 BC\\cdot AC\\cdot\\cos C$<br>$= 12^{2}+15^{2}-2\\cdot 12\\cdot 15\\cdot\\cos 120^\\circ$<br>$= 549$<br>$\\Leftrightarrow AB = \\sqrt{549}=3\\sqrt{61}$  Áp dụng định lý sin, ta có $\\dfrac{BC}{\\sin A}=\\dfrac{AB}{\\sin C}\\Rightarrow \\sin A=\\dfrac{12\\cdot\\sin 120^\\circ}{3\\sqrt{61}}=\\dfrac{2\\sqrt{83}}{61}$<br>  $\\Rightarrow A\\approx 26^\\circ$ (vì góc $C$ tù nên góc $A$ nhọn)<br>- Xét tam giác vuông $AHC$ có $\\sin A=\\dfrac{CH}{CA}\\Rightarrow CH=AC\\cdot\\sin A\\approx 6{,}65$.<br>- Gọi $D$ là chân đường phân giác trong, ta có  $\\dfrac{AD}{BD}=\\dfrac{AC}{CB}=\\dfrac{5}{4}\\Rightarrow AD=\\dfrac{5}{4}BD\\Rightarrow AD=\\dfrac{5}{9}\\cdot 3\\sqrt{61}=\\dfrac{5\\sqrt{61}}{3}$.<br>  Áp dụng định lý sin trong tam giác $ACD$ ta có $\\dfrac{CD}{\\sin A}=\\dfrac{AD}{\\sin 60^\\circ}\\Rightarrow CD=\\dfrac{AD\\cdot\\sin A}{\\sin 60^\\circ}\\approx 6{,}67&lt;7$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS19",
  "question": "Cho tam giác $ABC$ có độ dài ba cạnh là $AB=2,BC=5,CA=6$. Gọi $M$ là trung diểm của $BC$.",
  "subQuestions": [
   {
    "text": "Trong tam giác $ABC$, số đo của góc $B$ là lớn nhất",
    "answer": true
   },
   {
    "text": "Giá trị của $\\cos B$ là $\\dfrac{7}{20}$",
    "answer": false
   },
   {
    "text": "Diện tích của tam giác $ABC$ là $\\dfrac{3\\sqrt{39}}{4}$",
    "answer": true
   },
   {
    "text": "$\\dfrac{\\sqrt{55}}{2}$ là độ dài đường trung tuyến $M A$ của tam giác $ABC$",
    "answer": true
   }
  ],
  "explain": "<br>- Cạnh $CA=6$ là lớn nhất trong 3 cạnh của tam giác $ABC$ nên góc $B$ là góc lớn nhất.<br>- Áp dụng hệ quả định lí cô-sin ta có $\\cos B=\\dfrac{a^{2}+c^{2}-b^{2}}{2\\cdot a\\cdot c}=\\dfrac{5^{2}+2^{2}-6^{2}}{2\\cdot 5\\cdot 2}=-\\dfrac{7}{20}$.<br>- Ta có $p=\\dfrac{2+5+6}{2}=\\dfrac{13}{2}$. Áp dụng công thức Hê-rông ta có $S=\\sqrt{p(p-a)(p-b)(p-c)}=\\dfrac{3\\sqrt{39}}{4}.$<br>- Áp dụng công thức tính độ dài trung tuyến ta có  $MA=\\sqrt{\\dfrac{c^{2}+b^{2}}{2}-\\dfrac{a^{2}}{4}}=\\sqrt{\\dfrac{2^{2}+6^{2}}{2}-\\dfrac{5^{2}}{4}}=\\dfrac{\\sqrt{55}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS20",
  "question": "Hai người dân đứng cách nhau $30\\mathrm{~m}$ cùng nhìn lên đỉnh của một tòa nhà theo góc nhìn lần lượt là $30^\\circ$ và $50^\\circ$ (tham khảo hình vẽ).  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Các mệnh đề sau đúng hay sai? (các kết quả làm tròn đến hàng phần chục)",
  "subQuestions": [
   {
    "text": "Góc nhìn từ đỉnh tòa nhà về hai phía $A$ và $B$ nơi hai người dân đang đứng là góc $A C B$ có số đo $30^\\circ$",
    "answer": false
   },
   {
    "text": "Khoảng cách từ vị trí người $A$ tới nóc của tòa nhà là $43,9~\\rm{m}$",
    "answer": true
   },
   {
    "text": "Chiều cao của tòa nhà là khoảng $30\\mathrm{~m}$",
    "answer": false
   },
   {
    "text": "Vì gặp sự cố nên tầng trên cùng của tòa nhà đang bị cháy. Để cứu hộ đám cháy, một xe cứu hỏa đã tiếp cận dưới chân tòa nhà và chân thang đứng cách mặt đất $1,8~m$,chiều dài tối đa của thang xếp là $40\\mathrm{~m}$. Để tiếp cận được đám cháy thì xe cứu hỏa phải đứng cách chân tòa một khoảng xa nhất là $21,7\\mathrm{~m}$",
    "answer": true
   }
  ],
  "explain": "<br>- Xét tam giác $\\triangle ABC$ có $\\widehat{BAC}=180^\\circ-50^\\circ = 130^\\circ$, $\\widehat{ABC}=30^\\circ$ nên $\\widehat{ACB} = 180^\\circ-130^\\circ-30^\\circ=20^\\circ$.<br>- Áp dụng định lý sin cho tam giác $\\triangle ABC$ ta được  $\\dfrac{AB}{\\sin C}=\\dfrac{AC}{\\sin B}\\Rightarrow\\dfrac{30}{\\sin 20^\\circ}=\\dfrac{AC}{\\sin 30^\\circ}\\Rightarrow AC=\\dfrac{30\\cdot\\sin 30^\\circ}{\\sin 20^\\circ}\\approx 43,9\\mathrm{~m}.$<br>- Xét tam giác $CHA$ vuông tại $H$ nên $CH=AC\\sin 50^\\circ\\approx 33,6\\mathrm{~m}$.<br>- ${}$  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Chân thang cách mặt đất $1{,}8~\\rm{m}$ ta có: $CK=CH-HK=33{,}6=1{,}8=31{,}8 ~\\rm{m}$.<br>  Khi đó, khoảng cách tới chân tòa nhà xa nhất có thể là $KD=\\sqrt{CD^{2}-CK^{2}}=\\sqrt{40^{2}-31{,}8^{2}}\\approx 24{,}3\\mathrm{~m}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS21",
  "question": "Lúc 7 giờ kém 5 sáng,bạn Mai đi xe đạp tự nhà (điểm $\\mathrm{A}$) đến trường (điểm $\\mathrm{B}$) phải đi lên dốc và xuống một con dốc (hình vẽ). Cho biết đoạn lên dốc dài $300\\mathrm{~m},A=6^\\circ,B=4^\\circ$. Gọi $C$ là đỉnh dốc. Xác định tính đúng sai của các mệnh đề sau.  <br><img src=\"data/10/0H4/im0H42/dlts_sbh_hh10cd14_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "subQuestions": [
   {
    "text": "Độ dốc lúc lên cao hơn lúc xuống",
    "answer": true
   },
   {
    "text": "Độ cao con dốc là (làm tròn đến hàng phần mười) là $31,3 \\mathrm{~m}$",
    "answer": false
   },
   {
    "text": "Quãng đường chim bay đi từ nhà đến trường (làm tròn đến hàng đơn vị) là $749\\mathrm{~m}$",
    "answer": false
   },
   {
    "text": "Để kịp đến trường lúc 7h đúng, Mai đã lên dốc với vận tốc (làm tròn đến hàng đơn vị) là $6\\mathrm{~km}/\\mathrm{h}$, biết Mai khi xuống dốc bạn đi tự do không đạp xe với vận tốc không đổi là $15\\mathrm{~km}/\\mathrm{h}$",
    "answer": true
   }
  ],
  "explain": "<br>- Do $A&gt;B$ nên độ dốc lúc lên cao hơn lúc xuống.<br>- Áp dụng hệ thức lượng trong tam giác vuông $ACH$, ta có độ cao con dốc là $CH=AC\\cdot\\sin A=300\\cdot\\sin 6^{0}\\approx 31,4~(\\mathrm{m})$.<br>- Xét tam giác $ABC$ có $\\widehat{ACB} = 180^\\circ - 4^\\circ - 6^\\circ = 170^\\circ$.<br>  Áp dụng định lý $\\sin$ ta có $\\dfrac{AC}{\\sin B}=\\dfrac{AB}{\\sin C}\\Rightarrow AB=\\dfrac{AC\\cdot\\sin C}{\\sin B}\\approx 747~(\\mathrm{m})$.<br>- Sử dụng định lý sin ta có $\\dfrac{BC}{\\sin A}=\\dfrac{AC}{\\sin B}\\Rightarrow BC=\\dfrac{AC\\cdot\\sin A}{\\sin B}\\approx 449,5~(\\mathrm{m})$ .<br>  Thời gian bạn Mai đi từ nhà tới trường  $\\dfrac{5}{60}=\\dfrac{1}{12}=\\dfrac{A C}{v_{A C}}+\\dfrac{B C}{15}\\Rightarrow v_{A C}=A C:\\left(\\dfrac{1}{12}-\\dfrac{B C}{15}\\right)=0,3:\\left(\\dfrac{1}{12}-\\dfrac{0,3\\cdot\\sin 6^\\circ}{15\\cdot\\sin 4^\\circ}\\right)\\approx 6~(\\mathrm{km}/\\mathrm{h}).$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS22",
  "question": "Ông Ba có một mảnh vườn hình tam giác $ABC$ có $B&gt;90^\\circ$. Cho biết độ dài các cạnh $AB$, $AC$ lần lượt là $20$ mét và $30$ mét; $\\widehat{BAC}=45^\\circ$.",
  "subQuestions": [
   {
    "text": "Diện tích của mảnh vườn của ông Ba là $150\\sqrt{2}$ mét vuông",
    "answer": true
   },
   {
    "text": "Ông Ba muốn dựng hàng rào bao quanh mảnh vườn theo các cạnh của tam giác $ABC$. Tổng độ dài của hàng rào là $21{,}25$ mét (làm tròn đến chữ số thứ hai sau dấu phẩy)",
    "answer": false
   },
   {
    "text": "Ông Ba lấy điểm $M$ trên cạnh $AC$ và dựng đoạn hàng rào $BM$ sao cho mảnh vườn được chia thành hai tam giác có diện tích bằng nhau. Khi đó đoạn hàng rào $BM$ có độ dài là $14{,}17$ mét (làm tròn đến chữ số thứ hai sau dấu phẩy)",
    "answer": true
   },
   {
    "text": "Ông Ba tiếp tục dựng hàng rào $BH$ vuông góc với cạnh $AC$ ($H$ thuộc $AC$) và muốn xác định vị trí điểm $N$ thuộc mảnh vườn tam giác $AHB$ sao cho $NA:NH:NB=1:2:3$. Khi đó, tổng $NA+NB+NH$ bằng 25,27 mét (làm tròn đến chữ số thứ hai sau dấu phẩy)",
    "answer": true
   }
  ],
  "explain": "<br>- Diện tích mảnh vườn là $S_{ABC}=\\dfrac{1}{2}AB\\cdot AC\\cdot\\sin \\widehat{BAC}=\\dfrac{1}{2}\\cdot 20\\cdot 30\\cdot\\sin 45^\\circ = 150\\sqrt{2}$ mét vuông.<br>- Áp dụng định lí cosin cho tam giác $ABC$   $BC^{2}=AB^{2}+AC^{2}-2 AB\\cdot AC\\cdot\\cos \\widehat{BAC}=20^{2}+30^{2}-2\\cdot 20\\cdot 30\\cdot\\cos 45^\\circ=1300-600\\sqrt{2}$  Suy ra $BC=\\sqrt{1300-600\\sqrt{2}}$.<br>  Tổng độ dài hàng rào là: $AB+BC+CA=20+\\sqrt{1300-600\\sqrt{2}}+30\\approx 71,25$ mét.<br>- Do hai tam giác $ABM$ và $BCM$ có chung đường cao từ đỉnh $B$ nên $\\dfrac{S_{ABM}}{S_{BCM}}=\\dfrac{MA}{MC}$. Do đó hai tam giác có diện tích bằng nhau khi $MA=MC=\\dfrac{AC}{2}=\\dfrac{30}{2}=15$ mét.<br>  Áp dụng định lí cosin cho tam giác $ABM$   $BM^{2}=AB^{2}+AM^{2}-2 AB\\cdot AM\\cdot\\cos \\widehat{BAC}=20^{2}+15^{2}-2\\cdot 20\\cdot 15\\cdot\\cos 45^\\circ=625-300\\sqrt{2}.$  Suy ra $BM=\\sqrt{625-300\\sqrt{2}}\\approx 14,17.$<br>- Tam giác $AHB$ vuông tại $H$ có $A=45^\\circ$ nên vuông cân tại $H$. Đặt $HA=HB=a$ thì $a=AB\\sin \\widehat{HAB}=20\\sin 45^\\circ=10\\sqrt{2}$.<br>  Đặt $NA=x$ thì $NH=2x$, $NB=3x$.<br>  Áp dụng định lí cosin cho $\\triangle HMA:\\cos \\widehat{NHA}=\\dfrac{HA^{2}+HN^{2}-AN^{2}}{2 HA\\cdot HN}=\\dfrac{a^{2}+4x^{2}-x^{2}}{4ax}=\\dfrac{3x^{2}+a^{2}}{4ax}$.<br>  Áp dụng định lí cosin cho $\\triangle HMB:\\cos \\widehat{NHB}=\\dfrac{HB^{2}+HN^{2}-BN^{2}}{2 HB\\cdot HN}=\\dfrac{a^{2}+4x^{2}-9x^{2}}{4ax}=\\dfrac{a^{2}-5x^{2}}{4ax}$.<br>  Do $\\widehat{NHA}+\\widehat{NHB}=90^\\circ$ nên $\\sin \\widehat{NHA}=\\cos \\widehat{NHB}$. Do đó ta có:  $\\left(\\dfrac{3x^{2}+a^{2}}{4ax}\\right)^{2}+\\left(\\dfrac{a^{2}-5x^{2}}{4ax}\\right)^{2}=1$<br>$\\Leftrightarrow 9x^{4}+6a^{2}x^{2}+a^{4}+a^{4}-10a^{2}x^{2}+25x^{2}=16a^{2}x^{2}$<br>$\\Leftrightarrow 34 x^{4}-20 a^{2}x^{2}+2 a^{4}=0$<br>$\\Leftrightarrow x^{2}=\\dfrac{5+2\\sqrt{2}}{17}a^{2} \\text{ hoặc } x^{2}=\\dfrac{5-2\\sqrt{2}}{17}a^{2}.$  Do $\\widehat{NHB}$ nhọn nên $\\cos \\widehat{NHB}=\\dfrac{a^{2}-5x^{2}}{4ax}&gt;0$, suy ra $x^{2}&lt;\\dfrac{a^{2}}{5}$.<br>  Vậy $x^{2}=\\dfrac{5-2\\sqrt{2}}{17}a^{2}$ tức là $x=\\sqrt{\\dfrac{5-2\\sqrt{2}}{17}}a$.<br>  Do đó  $N A+N B+N H=x+3 x+2 x=5 x=5\\sqrt{\\dfrac{5-2\\sqrt{2}}{17}}a=5\\sqrt{\\dfrac{5-2\\sqrt{2}}{17}}\\cdot 10\\sqrt{2}=50\\sqrt{\\dfrac{10-4\\sqrt{2}}{17}}\\approx 25,27.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS22",
  "question": "Cho tam giác $A B C$ có $\\widehat{C}=60^{\\circ}$, $b=10$, $a=20$.",
  "subQuestions": [
   {
    "text": "Độ dài cạnh còn lại của tam giác $A B C$ là $c=10 \\sqrt{3}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn ngoại tiếp tam giác $A B C$ là $R=10$",
    "answer": true
   },
   {
    "text": "Độ dài đường trung tuyến hạ từ đỉnh $A$ của tam giác $A B C$ là $m_a=10$",
    "answer": true
   },
   {
    "text": "Độ dài đường cao hạ từ đỉnh $A$ của tam giác $A B C$ là $h_a=10 \\sqrt{3}$",
    "answer": false
   }
  ],
  "explain": "<br><img src=\"data/10/0H4/im0H42/dlts_sbh_giuakii1_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>. Theo định lý cos, ta có $ c=\\sqrt{a^2+b^2-2ab\\cos C}=10\\sqrt{3} $.<br>- <strong>Đúng</strong>. Theo đính lý sin, ta có $ R=\\dfrac{c}{2\\sin C}=\\dfrac{10\\sqrt{3}}{2\\sin 60^\\circ}= 10$.<br>- <strong>Đúng</strong>. Gọi $ M $ là trung điểm $ BC $ nên $ BM=MC=\\dfrac{BC}{2}=10 $.<br>  Ta có $ m_a=MA=\\sqrt{10^2+10^2-2\\cdot 10\\cdot 10 \\cdot \\cos 60^\\circ}=10 $.<br>- <strong>Sai</strong>. Ta có $ S_{ABC}=\\dfrac{1}{2}ba\\sin C=50\\sqrt{3}$.<br>  Gọi $ H $ là chân đường cao hạ từ $ A $ của $ \\triangle ABC $.<br>  Ta có $ S_{ABC}=\\dfrac{1}{2}\\cdot AH\\cdot BC \\Leftrightarrow h_a=HA=\\dfrac{2S_{ABC}}{BC}=\\dfrac{2\\cdot 50\\sqrt{3}}{20}= 5\\sqrt{3}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS1",
  "question": "Cho tam giác $ABC$ có các cạnh $a = 7$, $b = 9$, $c = 12$. Các mệnh đề sau đúng hay sai?",
  "subQuestions": [
   {
    "text": "Diện tích tam giác $ABC$ là $S = 14\\sqrt{5}$",
    "answer": true
   },
   {
    "text": "Nửa chu vi của tam giác $ABC$ là $p = 14$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn nội tiếp tam giác $ABC$ là $r = \\sqrt{3}$",
    "answer": false
   },
   {
    "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = \\dfrac{54\\sqrt{5}}{5}$",
    "answer": false
   }
  ],
  "explain": "<br>- Nửa chu vi $p = \\dfrac{a+b+c}{2} = \\dfrac{7+9+12}{2} = \\dfrac{28}{2} = 14$.<br>  Áp dụng công thức Heron, ta được  $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{14(14-7)(14-9)(14-12)}= 14\\sqrt{5}.$<br>- Nửa chu vi $p = \\dfrac{7+9+12}{2} = 14$.<br>- Bán kính đường tròn nội tiếp $r = \\dfrac{S}{p} = \\dfrac{14\\sqrt{5}}{14} = \\sqrt{5}$.<br>- Bán kính đường tròn ngoại tiếp $R = \\dfrac{abc}{4S} = \\dfrac{7 \\cdot 9 \\cdot 12}{4 \\cdot 14\\sqrt{5}} = \\dfrac{756}{56\\sqrt{5}} = \\dfrac{27}{2\\sqrt{5}} = \\dfrac{27\\sqrt{5}}{10}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421DS2",
  "question": "Sau khi phát hiện một dịch bệnh, các chuyên gia y tế nhận thấy trong $25$ ngày đầu tốc độ truyền bệnh (người/ngày) tại thời điểm ngày thứ $t$ sau khi phát hiện dịch được cho bởi công thức $f(t)=-3t^{2}+90t$ với $t=0,1,2,...,25$.",
  "subQuestions": [
   {
    "text": "Đồ thị mô tả cho tốc độ truyền bệnh là một đường parabol có bề lõm hướng xuống dưới",
    "answer": true
   },
   {
    "text": "Tốc độ truyền bệnh không thể đạt $700$ người/ngày",
    "answer": true
   },
   {
    "text": "Tốc độ truyền bệnh đạt $312$ người/ngày chỉ tại thời điểm $4$ ngày kể từ sau khi phát hiện dịch bệnh",
    "answer": false
   },
   {
    "text": "Thời điểm từ ngày thứ $13$ đến ngày thứ $17$ sau khi phát hiện dịch, tốc độ truyền bệnh giảm",
    "answer": false
   }
  ],
  "explain": "Ta có hoành độ đỉnh $x_I=-\\dfrac{b}{2a}=-\\dfrac{90}{2\\cdot(-3)}=15$.<br>  Tung độ đỉnh $y_I=-3\\cdot30^2+90\\cdot30=675$.<br>  Do đó tọa độ đỉnh là $I(15;675)$.<br>  Bảng biến thiên:  <br><img src=\"data/10/0H4/im0H42/loc2_0_TN_DS_TLN_Chuy_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>. Vì $a=-3&lt;0$ nên đồ thị mô tả cho tốc độ truyền bệnh là một đường parabol có bề lõm hướng xuống dưới.<br>- <strong>Đúng</strong>. Ta có giá trị lớn nhất của hàm số là $675$ nên không thể đạt $700$ người/ngày.<br>- <strong>Đúng</strong>. Tốc độ truyền bệnh đạt $312$ người/ngày nên $y=312$ do đó $-3t^2+90t=312\\Rightarrow t=4$ hay $t=26$.<br>  Mà $t\\le 25$ nên ta chọn $t=4$.<br>  Vậy tại thời điểm $4$ ngày sau khi phát hiện dịch bệnh thì tốc độ truyền bệnh đạt $312$ người/ngày<br>- <strong>Sai</strong>. Từ bảng biến thiên, từ sau ngày $15$ thì tốc độ truyền bệnh giảm.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H422DS23",
  "question": "Cho $\\Delta ABC$ có $\\widehat{A}=45^\\circ$, $\\widehat{B}=60^\\circ$, $BC=2$. Gọi $ R$, $ S$ lần lượt là bán kính đường tròn ngoại tiếp và diện tích của tam giác $ ABC$.",
  "subQuestions": [
   {
    "text": "$\\widehat{C}=75^\\circ$",
    "answer": true
   },
   {
    "text": "$ AC&gt;BC$",
    "answer": true
   },
   {
    "text": "$ R=\\dfrac{\\sqrt{2}}{2}$",
    "answer": false
   },
   {
    "text": "$ S=\\dfrac{3+\\sqrt{3}}{2}$",
    "answer": true
   }
  ],
  "explain": "<br>- $\\widehat{C}=180^\\circ-\\left(45^\\circ+\\sin 60^\\circ\\right)=75^\\circ $.<br>- Ta có $\\widehat{B}&gt;\\widehat{A}$ nên suy ra $AC&gt;BC$.<br>- $R=\\dfrac{BC}{2\\sin A}=\\dfrac{2}{2\\sin 45^\\circ}=\\sqrt{2}$.<br>- $AC=\\dfrac{2\\sin 60^\\circ}{\\sin 45^\\circ}=\\sqrt{6}$.<br>  $S=\\dfrac{1}{2}.AC.BC.\\sin C=\\dfrac{1}{2}.\\sqrt{6}.2.\\sin 75^\\circ=\\dfrac{3+\\sqrt{3}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431DS1",
  "question": "Cho tam giác $ABC$ có $AB=1$; $AC=2$; $\\widehat A=120^{\\circ}$.",
  "subQuestions": [
   {
    "text": "Diện tích tam giác $ABC$ bằng $2$",
    "answer": false
   },
   {
    "text": "Độ dài cạnh $BC=\\sqrt{7}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R=\\dfrac{\\sqrt{21}}{3}$",
    "answer": true
   },
   {
    "text": "Bán kính đường tròn nội tiếp tam giác $ABC$ là $r=\\dfrac{3\\sqrt{3}-\\sqrt{21}}{2}$",
    "answer": false
   }
  ],
  "explain": "<br>- Ta có $S_{\\triangle ABC} = \\dfrac{1}{2}\\cdot AB\\cdot AC\\cdot \\sin A=\\dfrac{1}{2}\\cdot 1\\cdot2\\cdot\\sin 120^\\circ=\\dfrac{\\sqrt{3}}{2}$.<br>- Ta có $BC=\\sqrt{AB^2+AC^2-2\\cdot AB\\cdot AC\\cdot\\cos A}=\\sqrt{7}$.<br>- Ta có $R=\\dfrac{AB\\cdot AC\\cdot BC}{4S_{\\triangle ABC}}=\\dfrac{1\\cdot2\\cdot\\sqrt{7}}{4\\cdot\\frac{\\sqrt{3}}{2}}=\\dfrac{\\sqrt{21}}{3}$.<br>- Ta có $p=\\dfrac{3+\\sqrt{7}}{2}$. Suy ra $r=\\dfrac{S}{p}=\\dfrac{3\\sqrt{3}-\\sqrt{21}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431DS2",
  "question": "Cho tam giác $ABC$ có các cạnh $AB = 5$, $AC = 8$, và $BC = 7$.",
  "subQuestions": [
   {
    "text": "Chu vi tam giác $ABC$ bằng $20$",
    "answer": true
   },
   {
    "text": "$\\cos C = \\dfrac{1}{7}$",
    "answer": false
   },
   {
    "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = \\dfrac{35}{8\\sqrt{3}}$",
    "answer": false
   },
   {
    "text": "Lấy điểm $K$ là điểm đối xứng của $B$ qua $C$. Diện tích tam giác $ABK$ bằng $30\\sqrt{3}$",
    "answer": false
   }
  ],
  "explain": "<br>- Chu vi tam giác $ABC$ là $AB + AC + BC = 5 + 8 + 7 = 20$ là đúng.<br>- Áp dụng định lý côsin trong tam giác $ABC$ với góc $C$ <br>  $\\cos C = \\dfrac{AC^2 + BC^2-AB^2}{2 \\cdot AC \\cdot BC}$<br>$= \\dfrac{ 8^2 + 7^2 - 5^2}{2 \\cdot 8 \\cdot 7}$<br>$= \\dfrac{11}{14}$<br>- Ta có $\\sin C = \\sqrt{1 - \\cos^2 C} = \\sqrt{1 - \\left(\\dfrac{11}{14}\\right)^2} = \\dfrac{5\\sqrt{3}}{14}$ (do $0^\\circ &lt; C &lt; 180^\\circ$ nên $\\sin C &gt;0$). <br>  Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = \\dfrac{AB}{2\\sin C} = \\dfrac{5}{2 \\cdot \\dfrac{5\\sqrt{3}}{14}} = \\dfrac{7\\sqrt{3}}{3}$. <br>- $K$ là điểm đối xứng của $B$ qua $C$, nghĩa là $C$ là trung điểm của $BK$. <br>  <br><img src=\"data/10/0H4/im0H43/loc2_0_TL_TN_DS_THPT__003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Tam giác $ABC$ có diện tích $S_{ABC} = \\dfrac{1}{2}\\cdot AC \\cdot BC \\cdot \\sin C = \\dfrac{1}{2} \\cdot 8 \\cdot 7 \\cdot \\dfrac{5\\sqrt{3}}{14} = 10\\sqrt{3}$. <br>  Tam giác $ABK$ có đáy $BK = 2 BC = 2 \\cdot 7 = 14$.<br>   Hai tam giác $ABC$ và $ABK$ có chung đường cao kẻ từ đỉnh $A$ xuống đường thẳng $BK$ (chứa cạnh đáy $BC$ và $BK$).<br>   Tỉ số diện tích của hai tam giác có chung đường cao bằng tỉ số độ dài hai đáy tương ứng:  $\\dfrac{S_{\\Delta ABK}}{S_{\\Delta ABC}} = \\dfrac{BK}{BC} = \\dfrac{2 \\cdot BC}{BC} = 2$.  Diện tích tam giác $ABK$ được tính bằng $S_{\\Delta ABK} = 2 \\cdot S_{\\Delta ABC}$.  Diện tích tam giác $ABK$ là $S_{\\Delta ABK} = 2 \\cdot 10\\sqrt{3} = 20\\sqrt{3}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431DS3",
  "question": "Tam giác $ABC$ có $AB=14$, $AC=13$, $BC=15$. Khi đó",
  "subQuestions": [
   {
    "text": "Tam giác $ABC$ có diện tích là $39$",
    "answer": false
   },
   {
    "text": "Tam giác $ABC$ có bán kính đường tròn nội tiếp là $4$",
    "answer": true
   },
   {
    "text": "Độ dài đường cao ứng với cạnh $AB$ có độ dài là $12$",
    "answer": true
   },
   {
    "text": "Tam giác $ABC$ có $3$ góc là góc nhọn",
    "answer": true
   }
  ],
  "explain": "Nửa chu vi tam giác là $p = \\dfrac{13+14+15}{2} = 21$.  <br>- Diện tích $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{21 \\cdot 6 \\cdot 8 \\cdot 7} = 84$.<br>- Bán kính nội tiếp $r = \\dfrac{S}{p} = \\dfrac{84}{21} = 4$.<br>- Ta có $S = \\dfrac{1}{2}c \\cdot h_c \\Rightarrow 84 = \\dfrac{1}{2} \\cdot 14 \\cdot h_c \\Rightarrow h_c = 12$.<br>- Áp dụng định lý cô-sin, ta có  $\\cos A = \\dfrac{b^2+c^2-a^2}{2bc} = \\dfrac{13^2+14^2-15^2}{2\\cdot 13 \\cdot 14} = \\dfrac{140}{364} gt; 0 \\Rightarrow \\widehat{A} lt; 90^\\circ$<br>$\\cos B = \\dfrac{a^2+c^2-b^2}{2ac} = \\dfrac{13^2+15^2-14^2}{2\\cdot 13 \\cdot 15} = \\dfrac{198}{390} gt; 0 \\Rightarrow \\widehat{B} lt; 90^\\circ$<br>$\\cos C = \\dfrac{a^2+b^2-c^2}{2ab} = \\dfrac{13^2+14^2-15^2}{2\\cdot 13 \\cdot 14} = \\dfrac{140}{364} gt; 0 \\Rightarrow \\widehat{C} lt; 90^\\circ.$  Vậy $\\triangle ABC$ có $3$ góc là góc nhọn.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H521DS1",
  "question": "Cho tam giác $ABC$ dều cạnh bằng $5$. Gọi $M$ là trung điểm của $BC$. Khi đó",
  "subQuestions": [
   {
    "text": "$\\overrightarrow{AB}+\\overrightarrow{AC}=\\overrightarrow{AM}$",
    "answer": false
   },
   {
    "text": "$\\overrightarrow{AB}-\\overrightarrow{AC}=\\overrightarrow{BC}$",
    "answer": false
   },
   {
    "text": "$\\left|\\overrightarrow{AB}+\\overrightarrow{AC}\\right|=5\\sqrt{3}$",
    "answer": true
   },
   {
    "text": "$\\left|\\overrightarrow{AB}-\\overrightarrow{AC}\\right|=5$",
    "answer": true
   }
  ],
  "explain": "<br><img src=\"data/10/0H5/im0H52/loc2_0_TN_DS_TL_SGD_B_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Vì $M$ là trung điểm của $BC$ nên $\\overrightarrow{AB}+\\overrightarrow{AC}=2\\overrightarrow{AM}$.<br>- Ta có $\\overrightarrow{AB}-\\overrightarrow{AC}=\\overrightarrow{CB}$.<br>- Vì $M$ là trung điểm của $BC$ nên $\\left|\\overrightarrow{AB}+\\overrightarrow{AC}\\right|=2\\left|\\overrightarrow{AM}\\right|=2\\cdot\\dfrac{5\\sqrt{3}}{2}=5\\sqrt{3}$.<br>- Ta có $\\left|\\overrightarrow{AB}-\\overrightarrow{AC}\\right|=\\left|\\overrightarrow{CB}\\right|=5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H531DS1",
  "question": "Cho tam giác $ABC$ có $G$ là trọng tâm và $I$ là trung điểm của đoạn thẳng $BC$. Đặt $\\vec{AB}=\\overrightarrow{a}$, $\\overrightarrow{AC}=\\overrightarrow{b}$.",
  "subQuestions": [
   {
    "text": "$\\overrightarrow{AI}=\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$",
    "answer": true
   },
   {
    "text": "$\\overrightarrow{IG}=-\\dfrac{1}{6} \\overrightarrow{a}+\\dfrac{1}{6} \\overrightarrow{b}$",
    "answer": false
   },
   {
    "text": "$\\overrightarrow{BI}=-\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$",
    "answer": true
   },
   {
    "text": "$\\overrightarrow{CI}=\\dfrac{1}{2} \\overrightarrow{a}-\\dfrac{1}{2} \\overrightarrow{b}$",
    "answer": true
   }
  ],
  "explain": "<br>- Ta có $\\overrightarrow{AI}=\\dfrac{1}{2} \\overrightarrow{AB}+\\dfrac{1}{2} \\overrightarrow{AC}=\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$.<br>- Ta có $\\overrightarrow{IG}=-\\dfrac{1}{3}\\overrightarrow{AI}=-\\dfrac{1}{6} \\overrightarrow{a}-\\dfrac{1}{6} \\overrightarrow{b}$.<br>- Ta có $\\overrightarrow{BI}=\\vec{AI}-\\overrightarrow{AB}=-\\dfrac{1}{2} \\overrightarrow{a}+\\dfrac{1}{2} \\overrightarrow{b}$.<br>- Ta có $\\overrightarrow{CI}=-\\overrightarrow{BI}=\\dfrac{1}{2} \\vec{a}-\\dfrac{1}{2} \\overrightarrow{b}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H531DS2",
  "question": "Cho hình bình hành $ABCD$. Gọi $I, J$ lần lượt là trung điểm $BC$ và $CD$. Khi đó:",
  "subQuestions": [
   {
    "text": "$\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}$",
    "answer": true
   },
   {
    "text": "$\\overrightarrow{AI}=\\overrightarrow{AC}+\\overrightarrow{AB}$",
    "answer": false
   },
   {
    "text": "$\\overrightarrow{AI}=\\overrightarrow{AB}+\\dfrac{3}{2}\\cdot\\overrightarrow{AD}$",
    "answer": false
   },
   {
    "text": "$\\overrightarrow{AJ}=\\dfrac{1}{2} \\cdot \\overrightarrow{AB}+\\dfrac{3}{2}\\cdot \\overrightarrow{AD}$",
    "answer": false
   }
  ],
  "explain": "<br><img src=\"data/10/0H5/im0H53/loc2_0_TL_TN_DS_THPT__003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- ĐÚNG.<br>  Theo quy tắc hình bình hành ta có $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}$<br>- SAI.<br>  Theo quy tắc trung điểm ta có $\\overrightarrow{AI}=\\dfrac{1}{2}\\left( \\overrightarrow{AC}+\\overrightarrow{AB}\\right)$.<br>- SAI.<br>  Ta có $\\overrightarrow{AI}=\\dfrac{1}{2}\\left( \\overrightarrow{AC}+\\overrightarrow{AB}\\right)=\\dfrac{1}{2}\\left( \\overrightarrow{AB}+\\overrightarrow{AD} +\\overrightarrow{AB}\\right) = \\overrightarrow{AB}+\\dfrac{1}{2}\\cdot \\overrightarrow{AD}$.<br>- SAI.<br>  Ta có $\\overrightarrow{AJ}=\\dfrac{1}{2}\\left( \\overrightarrow{AC}+\\overrightarrow{AD}\\right)=\\dfrac{1}{2}\\left(\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AD}\\right) =\\overrightarrow{AD}+\\dfrac{1}{2}\\cdot \\overrightarrow{AB}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H541DS1",
  "question": "Cho hình vuông $ABCD$ cạnh $a$. Gọi $E$ là trung điểm $BC$ và $F$ là điểm thuộc đoạn $BD$ sao cho $BF=\\dfrac{3}{4}BD$.",
  "subQuestions": [
   {
    "text": "$\\overrightarrow{BA}+\\overrightarrow{BD}=\\overrightarrow{BC}$",
    "answer": false
   },
   {
    "text": "$\\overrightarrow{AB}\\cdot\\overrightarrow{DB}=a^{2}$",
    "answer": true
   },
   {
    "text": "$\\overrightarrow{EF}=-\\dfrac{3}{4}\\overrightarrow{AB}+\\dfrac{1}{4}\\overrightarrow{AD}$",
    "answer": true
   },
   {
    "text": "$\\left| \\overrightarrow{FA}+\\overrightarrow{FE}\\right| =\\dfrac{a\\sqrt{5}}{2}$",
    "answer": true
   }
  ],
  "explain": "<br><img src=\"data/10/0H5/im0H54/loc2_0_TN_DS_TLN_Chuy_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>. Theo quy tắc hình bình hành, ta có $\\overrightarrow{BA}+\\overrightarrow{BC}=\\overrightarrow{BD}$.<br>- <strong>Đúng</strong>. $\\overrightarrow{AB}\\cdot\\overrightarrow{DB}=\\left| \\overrightarrow{AB}\\right| \\cdot\\left|\\overrightarrow{DB} \\right|\\cdot\\cos\\widehat{ABD} =a\\cdot a\\sqrt{2}\\cdot\\cos45^\\circ=a^{2}$.<br>- <strong>Đúng</strong>. $\\overrightarrow{EF}=\\overrightarrow{EB}+\\overrightarrow{BF}=-\\dfrac{1}{2}\\overrightarrow{BC}+\\dfrac{3}{4}\\overrightarrow{BD}=-\\dfrac{1}{2}\\overrightarrow{AD}+\\dfrac{3}{4}\\left(\\overrightarrow{BA}+\\overrightarrow{AD} \\right) =-\\dfrac{3}{4}\\overrightarrow{AB}+\\dfrac{1}{4}\\overrightarrow{AD}$.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{FA}=\\overrightarrow{FD}+\\overrightarrow{DA}=\\dfrac{1}{4}\\overrightarrow{BD}-\\overrightarrow{AD}=\\dfrac{1}{4}\\left( \\overrightarrow{BA}+\\overrightarrow{AD}\\right)-\\overrightarrow{AD}=-\\dfrac{1}{4}\\overrightarrow{AB}-\\dfrac{3}{4}\\overrightarrow{AD}$.<br>  Ta xét $\\overrightarrow{FA}\\cdot\\overrightarrow{FE}=\\left(-\\dfrac{1}{4}\\overrightarrow{AB}-\\dfrac{3}{4}\\overrightarrow{AD} \\right) \\cdot\\left(-\\dfrac{3}{4}\\overrightarrow{AB}+\\dfrac{1}{4}\\overrightarrow{AD} \\right)=\\dfrac{3}{16}AB^2-\\dfrac{1}{2}\\overrightarrow{AB}\\cdot\\overrightarrow{AD}-\\dfrac{3}{16}AD^2$.<br>  Mà $AB$ vuông góc với $AD$ nên $\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=0$.<br>  Suy ra $\\overrightarrow{FA}\\cdot\\overrightarrow{FE}=\\dfrac{3}{16}a^2-\\dfrac{3}{16}a^2=0$ nên $FA\\perp FE$.<br>  Suy ra tam giác $AFE$ vuông tại $F$.<br>  Gọi $K$ là trung điểm $AE$, khi đó $FK=\\dfrac{1}{2}AE$.<br>  Xét $\\left| \\overrightarrow{FA}+\\overrightarrow{FE}\\right|=\\left|2\\cdot\\overrightarrow{FK} \\right|=2\\cdot FK=2\\cdot\\dfrac{1}{2}\\cdot AE=AE$.<br>  Trong tam giác $ABE$ vuông tại $B$, ta có $AE=\\sqrt{AB^2+BE^2}=\\sqrt{\\left( a\\right)^2+\\left( \\dfrac{a}{2}\\right)^2}=\\dfrac{a\\sqrt{5}}{2}$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 }
];
window.traLoiNgan10 = [
 {
  "id": "0C111TL1",
  "question": "Giải hệ $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\x+y-z=0\\end{cases}$. Tính tích $x\\cdot y\\cdot z$.",
  "answer": "6",
  "explain": "Nghiệm của hệ là $(x;y;z)=(1;2;3)$ nên $x\\cdot y\\cdot z=1\\cdot 2\\cdot 3=6$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TL2",
  "question": "Tổng ba số bằng $30$; số thứ nhất gấp đôi số thứ hai; số thứ ba bằng tổng số thứ nhất và số thứ hai. Tìm số thứ hai.",
  "answer": "5",
  "explain": "Giải hệ như ở câu trắc nghiệm tương ứng, ta được số thứ hai $b=5$ (số thứ nhất $10$, số thứ ba $15$).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C111TL3",
  "question": "Giải hệ $\\begin{cases}x+y+z=9\\\\y+z=5\\\\z=2\\end{cases}$. Tính $x-y$.",
  "answer": "1",
  "explain": "Nghiệm của hệ là $(x;y;z)=(4;3;2)$ nên $x-y=4-3=1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TL1",
  "question": "Tính tổng $1+3+5+\\cdots+(2n-1)$ khi $n=6$.",
  "answer": "36",
  "explain": "$1+3+5+7+9+11=36=6^2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TL2",
  "question": "Với mệnh đề \"$n^3-n$ chia hết cho $3$\", tính giá trị của $n^3-n$ khi $n=4$.",
  "answer": "60",
  "explain": "$4^3-4=64-4=60$ (và $60=3\\cdot 20$ nên chia hết cho $3$).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0C211TL3",
  "question": "Tính $1^2+2^2+3^2+4^2$ bằng công thức $\\dfrac{n(n+1)(2n+1)}{6}$ với $n=4$.",
  "answer": "30",
  "explain": "$\\dfrac{4\\cdot 5\\cdot 9}{6}=\\dfrac{180}{6}=30$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D011TL1",
  "question": "Gieo một con xúc xắc cân đối, đồng chất một lần. Không gian mẫu của phép thử có bao nhiêu phần tử?",
  "answer": "6",
  "explain": "Không gian mẫu $\\Omega=\\{1;2;3;4;5;6\\}$ có $6$ phần tử.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D011TL2",
  "question": "Gieo đồng thời hai đồng xu cân đối, đồng chất. Không gian mẫu của phép thử có bao nhiêu phần tử?",
  "answer": "4",
  "explain": "Mỗi đồng xu có $2$ khả năng (sấp/ngửa) nên không gian mẫu có $2\\times 2=4$ phần tử.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D011TL3",
  "question": "Một hộp có $3$ viên bi đỏ và $2$ viên bi xanh (các viên bi phân biệt). Lấy ngẫu nhiên đồng thời $2$ viên bi từ hộp. Không gian mẫu của phép thử có bao nhiêu phần tử?",
  "answer": "10",
  "explain": "Số cách chọn $2$ viên bi trong $5$ viên bi (không kể thứ tự) là $C_5^2=\\dfrac{5!}{2!3!}=10$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D021TL1",
  "question": "Trong cuộc gặp mặt dặn dò trước khi lên đường tham gia kì thi học sinh giỏi, có $10$ bạn trong đội tuyển gồm $2$ bạn đến từ lớp $12A$, $3$ bạn từ lớp $12B$, $5$ bạn còn lại đến từ $5$ lớp khác (mỗi lớp một bạn). Thầy giáo xếp ngẫu nhiên các bạn kể trên ngồi vào một bàn dài có $10$ ghế mà mỗi bên có $5$ ghế xếp đối diện nhau. Xác suất để không có học sinh nào cùng lớp ngồi đối diện nhau bằng $\\dfrac{a}{b}$ (với $\\dfrac{a}{b}$ là phân số tối giản). Tính $a-b$.",
  "answer": "-25",
  "explain": "Số cách xếp $10$ bạn học sinh trong đội tuyển thi HSG vào một bàn dài mà mỗi bên có $5$ ghế đối diện nhau là $n(\\Omega )=10!$.  Xét các biến cố: <br>  $A$: ” Có học sinh cùng lớp ngồi đối diện nhau “.<br>  $A_1$: ” Học sinh lớp $12A$ ngồi đối diện nhau “.<br>  $A_2$: ” Học sinh lớp $12B$ ngồi đối diện nhau “.<br>  $A_1 \\cap A_2$: ” Học sinh $12A$ ngồi đối diện nhau và học sinh $12B$ ngồi đối diện nhau “.<br>  Ta có: $A=A_1 \\cup A_2$ nên $n(A)=n(A_1)+n(A_2)-n(A_1 \\cap A_2)$.<br>  Sắp xếp $2$ học sinh lớp $12A$ ngồi vào hai ghế đối diện nhau, hoán đổi vị trí của $2$ học sinh, sau đó sắp xếp $8$ học sinh còn lại là  \\[n(A_1)=\\mathrm{C}_5^1 \\cdot 2! \\cdot 8!.\\]   Từ $3$ học sinh lớp $12B$, chọn ra $2$ học sinh sắp xếp $2$ học sinh này ngồi vào hai ghế đối diện, sau đó sắp xếp $8$ học sinh còn lại là  \\[n(A_2)=\\mathrm{A}_3^2 \\cdot \\mathrm{C}_5^1 \\cdot 8!.\\]   Sự kiện cả $12A$ và $12B$ đều có một cặp ngồi đối diện (các cặp ghế phải khác nhau):  <br>- Chọn cặp ghế cho $12A$: $5$ cách.<br>- Chọn cặp ghế khác cho $12B$: còn $4$ cách.<br>- Chọn $2$ trong $3$ học sinh $12B$ để tạo cặp đối diện: $ \\mathrm{C}_3^2=3 $.<br>- Sắp xếp trong mỗi cặp cho $12A$ và cho $12B$ là $2! \\cdot 2!$.<br>- Còn $6$ học sinh còn lại sắp xếp vào $6$ ghế còn lại là $6!$.  Do đó $n(A_1 \\cap A_2)=5 \\cdot 4 \\cdot 3 \\cdot 2! \\cdot 2! \\cdot 6!$. Suy ra $n(A)=1440000$. <br>  Từ đó $\\mathrm{P}(\\overline{A})=1- \\mathrm{P}(A)=1-\\dfrac{25}{63}=\\dfrac{38}{63}$ nên $a=38$, $b=63$.<br>  Vậy $a-b=38-63=-25$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D021TL2",
  "question": "Một giờ hoạt động ngoài trời của lớp $1/1$ trường tiểu học $X$, cô giáo cho $35$ học sinh lớp mình nắm tay nhau xếp thành một vòng tròn để chơi trò chơi “Mèo bắt Chuột”. Sau khi ổn định, cô gọi tên ngẫu nhiên $6$ học sinh trong lớp ra giữa vòng ($3$ em làm “Mèo”, $3$ em làm “Chuột”). Xác suất $6$ em được gọi tên không có hai em nào đứng cạnh nhau trong vòng tròn bằng $a$. Tính $11594a$.",
  "answer": "4095",
  "explain": "Số cách chọn ngẫu nhiên $6$ học sinh từ $35$ học sinh là $n(\\Omega) = \\mathrm{C}_{35}^6 = 1\\,623\\,160$.<br>  Gọi $A$: “$6$ học sinh được chọn không có hai em nào đứng cạnh nhau trong vòng tròn”.<br>  Giả sử xếp $35$ học sinh thành một hàng ngang, chọn ra $6$ em sao cho không có hai em nào đứng cạnh nhau, còn lại $29$ em sẽ tạo ra $30$ khoảng trống.<br>  Số cách xếp $6$ em vào $30$ khoảng trống là $\\mathrm{C}_{30}^6 = 593\\,775$.<br>  Khi xếp thành vòng tròn thì $2$ em đầu hàng và em cuối hàng sẽ xếp cạnh nhau, do đó ta loại trừ trường hợp này.<br>  Khi đó, ta cố định $2$ em ở đầu và cuối, chọn $4$ em còn lại xếp vào $28$ khoảng trống ở giữa, số cách chọn là $\\mathrm{C}_{28}^4 = 20\\,475$.<br>  Vậy số phần tử thuận lợi cho biến cố $A$: $n(A) = 593\\,775 - 20\\,475 = 573\\,300$.<br>  Xác suất cần tìm là: $a = \\mathrm{P}(A) = \\dfrac{n(A)}{n(\\Omega)} = \\dfrac{573\\,300}{1\\,623\\,160} = \\dfrac{4\\,095}{11\\,594}.$  Vậy $11\\,594a=11\\,594 \\cdot \\dfrac{4\\,095}{11\\,594} = 4\\,095$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D021TL3",
  "question": "Công ty VinaElectro sản xuất một loại thiết bị điện tử tiêu dùng và đánh số seri cho từng sản phầm bằng một mã $6$ chữ số được tạo ngẫu nhiên từ các số $0$; $1$; $2$; $3$; $4$; $5$; $6$; $7$; $8$; $9$ và chữ số đầu tiên không được là $0$. Trong một chương trình khuyến mãi nhân dịp ra mắt sản phẩm mới, công ty muốn tặng quà cho khách hàng nếu sản phẩm của họ mua có mã seri ``đặc biệt'' là mã số có tích các chữ số bằng $1\\,400$. Biết xác suất để khách hàng được tặng quà (tức có mã ``đặc biệt'') là $\\dfrac{a}{b}$ với $\\dfrac{a}{b}$ là phân số tối giản và $a$, $b\\in \\mathbb{N^*}$. Tính $b-a$.",
  "answer": "1499",
  "explain": "Số phần tử của không gian mẫu là: $n\\left(\\Omega \\right)=9\\cdot 10^5=900\\,000$.<br>  Gọi $A$ là biến cố: ``Khách hàng được tặng quà''.<br>  Vì mã seri ``đặc biệt'' là mã số có tích các chữ số bằng $1\\,400$, mà dãy số có $6$ chữ số nên ta chỉ có $3$ cách phân tích như sau  \\[1\\,400=7\\cdot 5^2\\cdot 2^3=7\\cdot 5\\cdot 5\\cdot 2\\cdot 2\\cdot 2=7\\cdot 5\\cdot 5\\cdot 4\\cdot 2\\cdot 1=7\\cdot 5\\cdot 5\\cdot 8\\cdot 1\\cdot 1.  \\]  Do đó, số phần tử của biến cố $A$ chính là tổng số hoán vị của $3$ bộ $\\left\\{7; 5; 5; 2; 2; 2\\right\\}$, $\\left\\{7; 5; 5; 4; 2; 1\\right\\}$, $\\left\\{7; 5; 5; 8; 1; 1\\right\\}$. Suy ra số phần tử của biến cố $A$ là  \\[n\\left(A\\right)=\\dfrac{6!}{2!\\cdot 3!}+\\dfrac{6!}{2!}+\\dfrac{6!}{2!\\cdot 2!}=600.  \\]  Xác suất khách hàng được tặng quà là $P\\left(A\\right)=\\dfrac{n\\left(A\\right)}{n\\left(\\Omega \\right)}=\\dfrac{600}{900\\,000}=\\dfrac{1}{1\\,500}$.  \\[\\Rightarrow \\left\\{\\begin{array}{l} {a=1} \\\\ {b=1\\,500} \\end{array}\\right. \\Rightarrow b-a=1\\,499.  \\]",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111TL1",
  "question": "Trong các phát biểu sau, có bao nhiêu phát biểu là mệnh đề đúng?<br>- (1) $2^{10}=1024$.<br>- (2) Số $91$ là số nguyên tố.<br>- (3) Tổng ba góc trong một tam giác bằng $180^\\circ$.<br>- (4) $\\sqrt{16}=-4$.<br>- (5) Phương trình $x^2+1=0$ vô nghiệm trên $\\mathbb{R}$.",
  "answer": "3",
  "explain": "Xét từng phát biểu:<br>- (1) $2^{10}=1024$ là mệnh đề đúng.<br>- (2) Ta có $91=7\\cdot 13$ nên $91$ không phải là số nguyên tố, mệnh đề (2) sai.<br>- (3) Tổng ba góc trong một tam giác luôn bằng $180^\\circ$, mệnh đề (3) đúng.<br>- (4) Căn bậc hai số học của $16$ là $4$ (không âm) nên $\\sqrt{16}=-4$ là mệnh đề sai.<br>- (5) Với mọi $x\\in\\mathbb{R}$, $x^2\\ge 0$ nên $x^2+1&gt;0$, do đó phương trình $x^2+1=0$ vô nghiệm trên $\\mathbb{R}$, mệnh đề (5) đúng.<br>  Vậy có $3$ mệnh đề đúng, đó là các phát biểu (1), (3), (5).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D111TL2",
  "question": "Cho mệnh đề chứa biến $P(n)\\colon$ “ $n^2-5n+6\\le 0$” với $n\\in\\mathbb{N}$. Hỏi có bao nhiêu giá trị của $n$ làm cho $P(n)$ trở thành mệnh đề đúng?",
  "answer": "2",
  "explain": "Ta có $n^2-5n+6\\le 0 \\Leftrightarrow (n-2)(n-3)\\le 0 \\Leftrightarrow 2\\le n\\le 3$.<br>  Vì $n\\in\\mathbb{N}$ nên $n\\in\\{2;3\\}$.<br>  Vậy có $2$ giá trị của $n$ làm cho $P(n)$ đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D112TL1",
  "question": "Cho các mệnh đề sau:<br>- (1) “ Tam giác $ABC$ đều $\\Rightarrow$ Tam giác $ABC$ cân”.<br>- (2) “ Tứ giác có bốn cạnh bằng nhau $\\Rightarrow$ Tứ giác đó là hình vuông”.<br>- (3) “ $x&gt;2 \\Rightarrow x^2&gt;4$” với $x\\in\\mathbb{R}$.<br>- (4) “ $x^2&gt;4 \\Rightarrow x&gt;2$” với $x\\in\\mathbb{R}$.<br>- (5) “ Số tự nhiên $n$ chia hết cho $6$ $\\Leftrightarrow$ $n$ chia hết cho $2$ và $n$ chia hết cho $3$”.<br>Có bao nhiêu mệnh đề đúng trong các mệnh đề trên?",
  "answer": "3",
  "explain": "Xét từng mệnh đề:<br>- (1) Tam giác đều là trường hợp đặc biệt của tam giác cân (có ít nhất hai cạnh bằng nhau) nên mệnh đề (1) đúng.<br>- (2) Hình thoi có bốn cạnh bằng nhau nhưng chưa chắc có góc vuông nên chưa chắc là hình vuông, mệnh đề (2) sai.<br>- (3) Với $x&gt;2&gt;0$ thì $x^2&gt;2^2=4$, mệnh đề (3) đúng.<br>- (4) Với $x=-3$ thì $x^2=9&gt;4$ nhưng $x=-3$ không lớn hơn $2$, mệnh đề (4) sai.<br>- (5) Vì $6=2\\cdot 3$ với $\\text{ƯCLN}(2,3)=1$ nên $n\\ \\vdots\\ 6 \\Leftrightarrow n\\ \\vdots\\ 2$ và $n\\ \\vdots\\ 3$, mệnh đề (5) đúng.<br>  Vậy có $3$ mệnh đề đúng, đó là các mệnh đề (1), (3), (5).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D115TL1",
  "question": "Cho mệnh đề chứa biến $P(x)\\colon$ “ $x^2-4x+3&gt;0$” với $x\\in\\mathbb{Z}$. Trong các số nguyên $x$ thỏa mãn $-2\\le x\\le 6$, có bao nhiêu giá trị của $x$ làm cho mệnh đề phủ định $\\overline{P(x)}$ trở thành mệnh đề đúng?",
  "answer": "3",
  "explain": "Mệnh đề phủ định của $P(x)$ là $\\overline{P(x)}\\colon$ “ $x^2-4x+3\\le 0$”.<br>  Ta có $x^2-4x+3\\le 0 \\Leftrightarrow (x-1)(x-3)\\le 0 \\Leftrightarrow 1\\le x\\le 3$.<br>  Kết hợp với điều kiện $-2\\le x\\le 6$ và $x\\in\\mathbb{Z}$, ta được $x\\in\\{1;2;3\\}$.<br>  Vậy có $3$ giá trị của $x$ làm cho $\\overline{P(x)}$ đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D116TL1",
  "question": "Một lớp học có $40$ học sinh, trong đó có $20$ học sinh giỏi môn Toán, $15$ học sinh giỏi môn Văn và $10$ học sinh không giỏi môn nào trong hai môn Toán, Văn. Xét mệnh đề $P$: “ Học sinh này giỏi cả hai môn Toán và Văn”. Hỏi có bao nhiêu học sinh của lớp làm cho mệnh đề $P$ trở thành mệnh đề đúng?",
  "answer": "5",
  "explain": "Số học sinh giỏi ít nhất một trong hai môn Toán, Văn là $40-10=30$ (học sinh).<br>  Gọi số học sinh giỏi cả hai môn là $x$. Theo công thức bao gồm - loại trừ:<br>  $30=20+15-x \\Rightarrow x=5$.<br>  Vậy có $5$ học sinh làm cho mệnh đề $P$ đúng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D116TL2",
  "question": "Cho mệnh đề chứa hai biến $P(m,n)\\colon$ “ $m^2+n^2=25$” với $m,n$ là các số nguyên dương. Hỏi có bao nhiêu cặp số $(m,n)$ làm cho $P(m,n)$ trở thành mệnh đề đúng?",
  "answer": "2",
  "explain": "Ta cần tìm các số nguyên dương $m,n$ thỏa $m^2+n^2=25$.<br>  Do $m^2&lt;25$ nên $m\\in\\{1,2,3,4\\}$: với $m=3$ thì $n^2=16\\Rightarrow n=4$ (thỏa mãn); với $m=4$ thì $n^2=9\\Rightarrow n=3$ (thỏa mãn); với $m=1$ thì $n^2=24$ không phải số chính phương; với $m=2$ thì $n^2=21$ không phải số chính phương.<br>  Vậy có đúng $2$ cặp số thỏa mãn là $(3;4)$ và $(4;3)$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D135TL1",
  "question": "Một cuộc khảo sát về khán giả tại một rạp chiếu phim cho thấy trong $1\\,250$ khán giả được phỏng vấn có $700$ khán giả đã xem phim hành động, $820$ khán giả đã xem phim hài. Biết rằng toàn bộ khán giả được phỏng vấn đã xem ít nhất một trong hai thể loại phim trên. Hỏi có bao nhiêu khán giả đã xem cả phim hành động và phim hài?",
  "answer": "270",
  "explain": "Gọi $A$ là tập hợp khán giả đã xem phim hành động, khi đó $n(A)=700$.<br>$B$ là tập hợp khán giả đã xem phim hài, khi đó $n(B)=820$.<br>$n(A\\cup B)$ là tổng số khán giả đã xem ít nhất một trong hai thể loại, khi đó $n(A\\cup B)=1\\,250$.<br>$n(A\\cap B)$ là số khán giả đã xem cả hai thể loại phim.<br>Theo công thức $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$ ta có $$1\\,250=700+820-n(A\\cap B) \\Leftrightarrow n(A\\cap B)=1\\,520-1\\,250=270.$$ Vậy có $270$ khán giả đã xem cả phim hành động và phim hài.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D134TL1",
  "question": "Cho hai tập $A=(-10;4)$ và $B=[-5;3]$. Tập hợp $C_A B$ có bao nhiêu phần tử là số nguyên?",
  "answer": "4",
  "explain": "$C_AB=A\\setminus B=(-10;-5) \\cup (3;4)$.<br>Tập hợp $C_A B$ có $4$ phần tử là số nguyên.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D131TL1",
  "question": "Cho hai tập khác rỗng $A=(m-1; 104]; B=(-6; 2m+2)$. Có bao nhiêu giá trị nguyên của tham số $m$ để $A\\cap B\\ne \\varnothing$?",
  "answer": "107",
  "explain": "Xét các điều kiện:  <br>- Tập $A = (m-1; 104]\\ne \\varnothing$ khi $m-1&lt;104\\Rightarrow m&lt;105$.<br>- Tập $B = (-6; 2m+2)\\ne \\varnothing$ khi $-6&lt;2m+2\\Rightarrow m&gt;-4$.<br>- $A\\cap B\\ne \\varnothing$ khi $m-1&lt;2m+2\\Rightarrow m&gt;-3$.  S0 với điều kiện suy ra $-3&lt;m&lt;105$.<br>  Do $m\\in \\mathbb{Z}$ nên $m\\in \\{{-2, -1, 0,\\cdots, 104}\\}$.<br>  Vậy có $107$ giá trị nguyên của tham số $m$ để $A\\cap B\\ne \\varnothing$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D133TL2",
  "question": "Cho tập $A=\\left\\{x \\in \\mathbb{Z} \\mid(2-x)\\left(2x^2+3x+1\\right)=0\\right\\}$;<br> $B=\\left\\{x \\in \\mathbb{R} \\mid x^2+(2m+1) x+2m=0\\right\\}$ với $m \\in \\mathbb{R}$. Tìm $m$ để tập $A\\cup B$ có đúng $3$ phần từ và tổng bình phương của chúng bằng $9$.",
  "answer": "1",
  "explain": "Ta có $(2-x)\\left(2x^2+3x+1\\right)=0\\Leftrightarrow x=2\\in \\mathbb{Z} \\text{ hoặc } x=-1\\in \\mathbb{Z} \\text{ hoặc } x=-\\dfrac{1}{2}\\notin \\mathbb{Z}.$<br>  Suy ra $A=\\left\\{x \\in \\mathbb{Z} \\mid(2-x)\\left(2x^2+3x+1\\right)=0\\right\\}=\\{-1;2\\}$.<br>  Ta có $x^2+(2m+1) x+2m=0\\Leftrightarrow x=-1 \\text{ hoặc } x=-2m.$<br>  Suy ra $B=\\left\\{x \\in \\mathbb{R} \\mid x^2+(2m+1) x+2m=0\\right\\}=\\{-1;-2m\\}$.<br>  Theo đề bài ta có   $-2m\\ne -1 \\text{ và } -2m\\ne 2 \\text{ và } (-1)^2+2^2+(2m)^2=9 \\Leftrightarrow m\\ne \\dfrac{1}{2} \\text{ và } m\\ne -1 \\text{ và } m=\\pm 1$<br>$\\Leftrightarrow m=1.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D132TL1",
  "question": "Lớp $ 10A$ có $ 20$ bạn tham gia câu lạc bộ âm nhạc, trong đó có $ 15$ bạn tham gia đánh đàn, $ 10$ bạn tham gia hát. Có bao nhiêu bạn tham gia cả hai môn đánh đàn và hát?",
  "answer": "5",
  "explain": "Gọi $A$, $B$ lần lượt là tập hợp các bạn tham gia đánh đàn và tham gia hát.<br>  Ta có $n(A\\cap B)=n(A)+n(B)-n(A\\cup B)=15+10-20=5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D213TL1",
  "question": "Một xưởng may cần $50$ giờ để may xong một bộ vest và $40$ giờ để may xong một bộ áo dài. Biết thời gian tối đa cho việc may hai loại trang phục trên là $200$ giờ. Nếu gọi $x$, $y$ ($x, y\\in \\mathbb{N}$) lần lượt là số bộ vest, bộ áo dài mà xưởng may được trong thời gian cho phép thì $x$, $y$ phải thỏa mãn bất phương trình $ax+4y\\le b$ ($a, b\\in \\mathbb{N}$). Tính $T=a-b$.",
  "answer": "-15",
  "explain": "Tổng thời gian may hai loại trang phục là $50x+40y$.<br>Vì thời gian tối đa cho việc may hai loại trang phục trên là $200$ giờ nên $50x+40y\\le 200\\Leftrightarrow 5x+4y\\le 20$.<br>Suy ra $a=5$, $b=20$.<br>Vậy $T=a-b=5-20=-15$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TL1",
  "question": "Mẹ cho bạn An $200$ nghìn đồng để mua vở và bút bi cho năm học mới. Khi đến nhà sách loại vở mà An hay dùng có giá $7$ nghìn đồng một quyển, loại bút bi An hay dùng có giá $4{,}5$ nghìn đồng một cây. Gọi $x$ và $y$ ($x, y \\in \\mathbb{N}$) lần lượt là số quyển vở và số bút bi bạn An mua. Khi đó $x$ và $y$ thỏa mãn bất phương trình $ax + 9y \\le b$. Biểu thức $5a + b$ có giá trị là bao nhiêu?",
  "answer": "470",
  "explain": "Tổng số tiền An chi để mua x quyển vở là $7x$ (nghìn đồng).<br>  Tổng số tiền An chi để mua y cây bút bi là $4{,}5y$ (nghìn đồng).<br>  Vì tổng số tiền chi tiêu không vượt quá $200$ nghìn đồng, ta có bất phương trình  \\[ 7x + 4{,}5y \\le 200\\Rightarrow 14x + 9y \\le 400. \\]  Ta có $a = 14$ và $b = 400$.<br>  Vậy $5a + b=5\\cdot 14 + 400 = 470$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TL2",
  "question": "Bạn Lan mang $120\\,000$ đồng đi nhà sách để mua một số quyển tập và bút. Biết rằng giá một quyển tập là $8\\,000$ đồng và giá của một cây bút là $6\\,000$ đồng. Bạn Lan có thể mua được $x$ quyển tập và $y$ cây bút. Bất phương trình theo $x$, $y$ diễn tả số quyển tập và cây bút mà bạn Lan mua là $4x+m y \\leq n$. Tính $m+n$.",
  "answer": "63",
  "explain": "Gọi $x$ là số quyển tập bạn Lan mua được, $y$ là số cây bút bạn Lan mua được. Khi đó   $8\\,000x+6\\,000y \\le 120\\,000 \\Leftrightarrow 4x+3y\\le 60.$  Khi đó, $m=3$ và $n=60$ nên $m+n=63$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D213TL2",
  "question": "Một đội sản xuất cần $55$ giờ để làm xong một sản phẩm loại (I) và $45$ giờ để làm xong một sản phẩm loại (II). Biết thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ. Nếu gọi $x$, $y$ ($x, y\\in \\Bbb{N}$) lần lượt là số sản phẩm loại (I), loại (II) mà đội làm được trong thời gian cho phép thì $x$, $y$ phải thỏa mãn bất phương trình $ax+9y\\le b$ ($a, b\\in \\Bbb{N}$). Tính $T=a-b$.",
  "answer": "-25",
  "explain": "Tổng thời gian sản xuất hai loại sản phẩm là $55x+45y$.<br>  Vì thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ nên $55x+45y\\le 180\\Leftrightarrow 11x+9y\\le 36$.<br>  Suy ra $a=11$, $b=36$.<br>  Vậy $T=a-b=11-36=-25$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D213TL3",
  "question": "Một đội sản xuất cần $55$ giờ để làm xong một sản phẩm loại (I) và $45$ giờ để làm xong một sản phẩm  loại (II). Biết thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ. Nếu $x$, $y$ ($x$, $y\\in \\mathbb{N}$) lần lượt là số sản phẩm loại (I), loại (II) mà đội làm được trong thời gian cho phép thì $x$, $y$ phải thỏa mãn bất phương trình $ax+9y\\le b$ ($a$, $b\\in \\mathbb{Z}$). Giá trị của biểu thức $T=2a+b$ bằng bao nhiêu?",
  "answer": "58",
  "explain": "Thời gian để làm xong $x$ sản phẩm loại (I) là $55x$ (giờ).<br>  Thời gian để làm xong $y$ sản phẩm loại (II) là $45y$ (giờ).<br>  Tổng thời gian làm xong $x$ sản phẩm loại (I) và $y$ sản phẩm loại (II) là $55x+45y$ (giờ).<br>  Vì thời gian tối đa cho việc sản xuất hai sản phẩm trên là $180$ giờ nên ta có bất phương trình \\[55x+45y\\le 180 \\text{ hay } 11x+9y\\le 36.\\]  Suy ra $a=11$ và $b=36$.<br>  Vậy $T=2a+b=2\\cdot 11+36=58$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D213TL4",
  "question": "Một cửa hàng bán hai loại gạo, bán mỗi kg loại $I$ lãi $3\\,000$ đồng, mỗi kg loại $II$ lãi $2\\,000$ đồng. Giả sử cửa hàng bán $x$ kg gạo loại $I$ và $y$ kg gạo loại $II$. Bất phương trình biểu thị mối liên hệ giữa $x$ và $y$ để cửa hàng đó thu được số lãi lớn hơn $100\\,000$ đồng có dạng $ax+by &gt; 10$. Khi đó $a+b$ bằng?",
  "answer": "0,5",
  "explain": "Gọi số tiền lãi thu được là $L$.<br>  Ta có $L = 3\\,000x + 2\\,000y$.<br>  Theo đề bài, số lãi thu được lớn hơn $100\\,000$ đồng nên ta có bất phương trình  $3\\,000x + 2\\,000y gt; 100\\,000$<br>$\\Leftrightarrow 3x + 2y gt; 100$<br>$\\Leftrightarrow \\dfrac{3}{10}x + \\dfrac{2}{10}y gt; 10$<br>$\\Leftrightarrow 0,3x + 0,2y gt; 10$  Suy ra $a = 0{,}3$ và $b = 0{,}2$.<br>  Vậy $a+b = 0{,}3 + 0{,}2 = 0{,}5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D211TL3",
  "question": "Bạn Lan mang $180\\,000$ đồng đi nhà sách để mua một số quyển tập và bút. Biết rằng giá một quyển tập là $9\\,000$ đồng và giá của một cây bút là $5\\,000$ đồng. Bạn Lan có thể mua được tối đa bao nhiêu quyển tập nếu bạn đã mua $10$ cây bút?",
  "answer": "14",
  "explain": "Gọi $x$,$y$ lần lượt là số quyển tập và bút bạn Lan mua.<br>  Bất phương trình biểu diễn số quyển vở và bút có thể mua là $9x+5y\\le 180$.<br>  Vì bạn Lan đã mua $10$ cây bút nên $9\\cdot x+5.10\\le 180\\Rightarrow x\\le \\dfrac{130}{9}=14{,}4$.<br>  Vì $x$ nguyên dương nên bạn Lan mua được nhiều nhất là $14$ quyển tập.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TL1",
  "question": "Một công ty tổ chức hội thảo cần thuê xe đưa đón $120$ đại biểu và $8$ tấn thiết bị. Nơi cho thuê xe có hai loại xe $P$ và $Q$, có thể cho thuê tối đa $14$ xe loại $P$ và $6$ xe loại $Q$. Xe loại $P$ giá thuê $3$ triệu đồng, xe loại $Q$ giá thuê $2$ triệu đồng. Mỗi xe loại $P$ chở tối đa $10$ người và $1$ tấn thiết bị, mỗi xe loại $Q$ chở tối đa $10$ người và $1{,}5$ tấn thiết bị. Hỏi chi phí thấp nhất cần bỏ ra để thuê đủ xe chở người và thiết bị là bao nhiêu triệu đồng?",
  "answer": "30",
  "explain": "Gọi số xe loại $P$, $Q$ cần thuê lần lượt là $x$, $y$ xe ($x, y\\in\\mathbb{N}$).<br>Chi phí thuê xe là $C=3x+2y$ triệu đồng.<br>Theo bài ta có $$0\\le x\\le 14,\\ 0\\le y\\le 6,\\ 10x+10y\\ge 120,\\ x+1{,}5y\\ge 8.$$<br>Miền nghiệm của hệ trên là một tứ giác có các đỉnh $(6;6)$, $(12;0)$, $(14;0)$, $(14;6)$.<br>Chi phí tại các đỉnh: $C(6;6)=30$; $C(12;0)=36$; $C(14;0)=42$; $C(14;6)=54$.<br>Vậy chi phí thấp nhất là $30$ triệu đồng khi thuê $6$ xe loại $P$ và $6$ xe loại $Q$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TL2",
  "question": "Công ty TNHH A dự định sản xuất ít nhất $80$ kg đường vàng và $20$ kg đường trắng từ hai nguyên liệu là mía và củ cải. Từ một tạ mía giá $600$ ngàn đồng có thể sản xuất $40$ kg đường vàng và $5$ kg đường trắng. Từ một tạ củ cải giá $300$ ngàn đồng có thể sản xuất $8$ kg đường vàng và $4$ kg đường trắng. Nhưng nhà cung cấp nguyên liệu cho công ty chỉ còn $8$ tạ mía và $12$ tạ củ cải. Hỏi chi phí mua nguyên liệu của công ty ít nhất là bao nhiêu ngàn đồng?",
  "answer": "1800",
  "explain": "Gọi $x$ là số tạ mía cần mua, $y$ là số tạ củ cải cần mua. ($x,\\, y \\ge 0$)<br>  Số lượng đường vàng: $40x + 8y \\ge 80$.<br>  Số lượng đường trắng: $5x + 4y \\ge 20$.<br>  Giới hạn nguyên liệu: $x \\le 8$; $y \\le 12$.<br>  Chi phí mua nguyên liệu: $f(x;y) = 600x + 300y$.<br>  Bài toán trở thành: Tìm giá trị nhỏ nhất của biểu thức $f(x;y) = 600x + 300y$ với $(x;y)$ thoả mãn hệ bất phương trình  $40x + 8y \\ge 80 \\text{ và } 5x + 4y \\ge 20 \\text{ và } 0\\le x \\le 8 \\text{ và } 0\\le y \\le 12$  Biểu diễn miền nghiệm của hệ bất phương trình ta được  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_024.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ bất phương trình là miền đa giác $ABCDEF$ (kể cả biên) với $A\\left(\\dfrac{4}{3};\\dfrac{10}{3}\\right)$, $B(0;10)$, $C(0;12)$, $D(8;12)$, $E(8;0)$ và $F(4;0)$.<br>  Tính giá trị của $f(x;y)$ với $(x;y)$ tương ứng là toạ độ các điểm $A$, $B$, $C$, $D$, $E$, $F$ ta được $f(x;y)$ đạt giá trị nhó nhất bằng $1\\,800$ tại $x=\\dfrac{4}{3}$; $y=\\dfrac{10}{3}$.<br>  Vậy chi phí mua nguyên liệu của công ty ít nhất là $1\\,800$ ngàn đồng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D222TL1",
  "question": "Bạn Hoa dự định làm thiệp chúc Tết handmade để bán trong hội Xuân Ất Tỵ $2025$ nhằm gây quỹ từ thiện. Biết rằng Hoa cần $1$ giờ để làm một tấm thiệp loại nhỏ và sẽ bán với giá $20$ nghìn đồng; $3$ giờ để làm một tấm thiệp loại lớn và sẽ bán với giá $30$ nghìn đồng. Hoa chỉ thu xếp được $20$ giờ nghỉ để làm thiệp và ban tổ chức yêu cầu phải làm ít nhất là $10$ tấm thiệp. Hãy cho biết bạn Hoa cần phải làm bao nhiêu tấm thiệp loại nhỏ để số tiền ủng hộ quỹ từ thiện được nhiều nhất?",
  "answer": "20",
  "explain": "Gọi $x$, $y$ ($x, y \\in \\mathbb{N}$) lần lượt là số thiệp chúc Tết loại nhỏ và loại lớn mà bạn Hoa dự định làm.<br>  Theo đề bài, ban tổ chức yêu cầu phải làm ít nhất là $10$ tấm thiệp nên ta có bất phương trình   $x+y \\leq 10$.  Mặt khác, bạn Hoa cần $1$ giờ để làm một tấm thiệp loại nhỏ, $3$ giờ để làm một tấm thiệp loại lớn và chỉ thu xếp được $20$ giờ để làm nên ta có  $x+3y \\leq 20$.  Tấm thiệp loại nhỏ bán với giá $20$ nghìn đồng, tấm thiệp loại lớn bán với giá $30$ nghìn đồng nên số tiền bạn Hoa thu được khi bán $x$ tấm thiệp loại nhỏ và $y$ tấm thiệp loại lớn là $F(x,y)=20x+30y$ nghìn đồng.<br>  Theo giả thiết, ta cần tìm $x$ và $y$ sao cho biểu thức $F(x,y)=20x+30y$ đạt giá trị lớn nhất biết $x$ và $y$ thỏa mãn hệ bất phương trình $x+y \\geq 10 \\text{ và } x+3y \\leq 20 \\text{ và } x \\geq 0 \\text{ và } y\\geq 0.$<br>  Biểu diễn miền nghiệm của hệ bất phương trình trên mặt phẳng tọa độ $Oxy$, ta được miền nghiệm là tam giác $ABC$ (kể cả các cạnh của tam giác) với $A(5;5)$, $B(10;0)$ và $C(20;0)$.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_025.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có<br>  $F(5,5)=20\\cdot 5+30\\cdot 5=250$.<br>  $F(10,0)=20\\cdot 10 +30\\cdot 0=200$.<br>  $F(20,0)=20\\cdot 20+30\\cdot 0=400$.<br>  Vậy bạn Hoa nên làm $20$ thiệp loại nhỏ và $0$ thẻ loại lớn thì số tiền thu được sẽ nhiều nhất.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D221TL1",
  "question": "Nếu hệ $x(ay+1)+y(x-1)-3&gt; 0 \\text{ và } 2x+y(by+2)+5\\geq 0$ là hệ bất phương trình bậc nhất hai ẩn thì tổng $a+b$ bằng bao nhiêu?",
  "answer": "-1",
  "explain": "Ta có  $x(ay + 1) + y(x - 1) - 3 gt; 0 \\text{ và } 2x + y(by + 2) + 5 \\geq 0$<br>$\\Leftrightarrow   axy + x + xy - y - 3 gt; 0 \\text{ và } 2x + by^2 + 2y + 5 \\geq 0$<br>$\\Leftrightarrow   xy(a + 1) + x - y - 3 gt; 0 \\text{ và } 2x + by^2 + 2y + 5 \\geq 0. \\quad(\\ast)$  Hệ bất phương trình $(\\ast)$ là hệ bất phương trình bậc nhất hai ẩn khi và chỉ khi  \\[a+1=0 \\text{ và } b=0 \\Leftrightarrow a = -1 \\text{ và } b = 0.\\]  Vậy $a+b=-1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TL3",
  "question": "Trường THPT TPC tổ chức gian hàng hội chợ chào mừng ngày 26 tháng 3, lớp 12 Nga lên kế hoạch bán trà sữa và bánh flan, toàn bộ số tiền lãi thu được sẽ quyên góp để gây quỹ khuyến học cho các bạn khó khăn trong trường. Lớp có số tiền vốn là $990$ nghìn đồng, biết một ly trà sữa kèm topping có giá vốn là $15$ nghìn đồng, bán ra lãi $5$ nghìn đồng; một cái bánh flan có giá vốn là $3$ nghìn đồng, bán ra lãi $2$ nghìn đồng. Để được giá sỉ thì lớp phải nhập từ $20$ ly trà sữa và từ $40$ cái bánh flan trở lên, theo khảo sát nhu cầu thì không thể bán vượt quá $60$ cái bánh flan. Lớp 12 Nga cần tính toán số lượng ly trà sữa và bánh flan để thu được lợi nhuận lớn nhất, khi đó lợi nhuận lớn nhất là bao nhiêu? (đơn vị tính: nghìn đồng).",
  "answer": "390",
  "explain": "Gọi $x$ là số ly trà sữa và $y$ là số cái bánh flan mà lớp 12 Nga bán ($x$, $y\\in \\mathbb{N^*}$).  Theo đề bài ta có hệ bất phương trình sau   \\[x\\ge 20 \\text{ và } 40\\le y\\le 60 \\text{ và } 15x + 3y \\le 990\\]  Miền nghiệm là tứ giác $ABCD$ với $A(20;40)$, $B(20;60)$, $C(54;60)$, $D(58;40)$.  Ta cần tìm $x$, $y$ sao cho $L(x,y)=5x+2y$ đạt giá trị lớn nhất.  <br>- $L(20, 40) = 5(20) + 2(40) = 100 + 80 = 180$ (nghìn đồng).<br>- $L(20, 60) = 5(20) + 2(60) = 100 + 120 = 220$ (nghìn đồng).<br>- $L(54, 60) = 5(54) + 2(60) = 270 + 120 = 390$ (nghìn đồng).<br>- $L(58, 40) = 5(58) + 2(40) = 290 + 80 = 370$ (nghìn đồng).  So sánh các giá trị lợi nhuận, ta thấy giá trị lớn nhất là $390$ nghìn đồng.  Giá trị này đạt được khi lớp 12 Nga bán được $54$ ly trà sữa và $60$ cái bánh flan.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TL4",
  "question": "Một xưởng sản xuất có hai máy sản xuất ra hai loại sản phẩm I và II. Một tấn sản phẩm loại I lãi $300$ nghìn đồng, một tấn sản phẩm loại II lãi $400$ nghìn đồng. Để sản xuất một tấn sản phẩm loại I cần máy thứ nhất làm việc trong $1$ giờ và máy thứ hai làm việc trong $2$ giờ. Để sản xuất một tấn sản phẩm loại II cần máy thứ nhất làm việc trong $2$ giờ và máy thứ hai làm việc trong $1$ giờ. Mỗi máy không đồng thời làm hai loại sản phẩm cùng lúc. Một ngày máy thứ nhất làm việc không quá $5$ giờ, máy thứ hai làm việc không quá $4$ giờ. Tiền lãi lớn nhất trong một ngày mà xưởng thu được khi sản xuất hai loại sản phẩm trên là bao nhiêu triệu đồng?",
  "answer": "1,1",
  "explain": "Gọi $x$, $y~\\left(x\\ge 0,y\\ge 0\\right)$ lần lượt là số tấn sản phẩm loại I, loại II sản xuất trong một ngày.<br>  Khi đó:  <br>- Số tiền lãi một ngày là $ L=300x+400y$.<br>- Số giờ làm việc của mỗi ngày của máy thứ nhất là $ x+2y$.<br>- Số giờ làm việc của máy thứ hai là $ 2x+y$.  Vì một ngày máy thứ nhất làm việc không quá $5$ giờ, máy thứ hai làm việc không quá $4$ giờ nên $x$, $y$ thỏa mãn hệ bất phương trình  $\\left\\{\\begin{aligned}  & x+2y\\le 5\\\\   & 2x+y\\le 4\\\\   & x\\ge 0\\\\   & y\\ge 0\\\\   \\end{aligned}\\right.\\,\\,(*)$<br>  Vẽ miền nghiệm của hệ bất phương trình $(*)$ trên mặt phẳng toạ độ $ Oxy$.<br>  Khi đó miền nghiệm của hệ bất phương trình $(*)$ là miền tứ giác $ OABC$.<br>  Biểu thức $ L=300x+400y$ đạt giá trị lớn nhất tại một trong các đỉnh của tứ giác $OABC$.<br>  Tính giá trị của $ L$ tại các đỉnh $ O\\left(0\\,;\\,0\\right)$, $ A\\left(0\\,;\\dfrac{5}{2}\\right)$, $ B\\left(1\\,;2\\right)$, $ C\\left(2\\,;0\\right)$, ta thấy $ L$ đạt giá trị lớn nhất là $L_{max}=1100$ tại đỉnh $ B$.<br>  Vậy tiền lãi lớn nhất trong một ngày mà xưởng thu được khi sản xuất hai loại sản phẩm trên là $1{,}1$ triệu đồng.  <br><img src=\"data/10/0D2/im0D22/loc3_0_TL_TN_DS_THPT__002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TL5",
  "question": "Có ba nhóm máy $A$, $B$, $C$ dùng để sản xuất ra hai loại sản phẩm $I$ và $II$. Để sản xuất một đơn vị sản phẩm mỗi loại phải lần lượt dùng các máy thuộc các nhóm khác nhau. Số máy trong một nhóm và số máy của từng nhóm cần thiết để sản xuất ra một đơn vị sản phẩm thuộc mỗi loại được cho trong bảng sau  <br><img src=\"data/10/0D2/im0D22/loc8_TT_KSCL_Cum_lien_014.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Một đơn vị sản phẩm $I$ lãi ba nghìn đồng, một đơn vị sản phẩm loại $II$ lãi năm nghìn đồng. Trong điều kiện sản xuất đó hãy tính số tiền lãi có thể đạt cao nhất (tiền lãi có đơn vị nghìn đồng)?",
  "answer": "17",
  "explain": "Gọi $x$, $y$ lần lượt là số đơn vị sản phẩm loại $I$, $II$ ($x \\ge 0$, $y \\ge 0$). <br>  Theo bảng số liệu ta có hệ bất phương trình  $2x+2y \\le 10 \\text{ và } 2y \\le 4 \\text{ và } 2x+4y \\le 12 \\Leftrightarrow x+y \\le 5 \\text{ và } y \\le 2 \\text{ và } x+2y \\le 6.$  Gọi $L(x; y)$ là tổng số tiền lãi (đơn vị nghìn đồng), ta có $L(x; y)=3x+5y$. <br>  Biểu diễn miền nghiệm của hệ phương trình trên mặt phẳng tọa độ $Oxy$, ta được miền ngũ giác $OABCD$ (kể cả biên) như hình vẽ  <br><img src=\"data/10/0D2/im0D22/loc8_TT_KSCL_Cum_lien_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tọa độ các đỉnh của miền ngũ giác là $O(0;0)$, $A(5;0)$, $B(4;1)$, $C(2;2)$, $D(0;2)$.<br>  Tính giá trị của $L(x; y)$ tại các đỉnh  <br>- $L(O)=3\\cdot 0+5\\cdot 0=0$.<br>- $L(A)=3\\cdot 5+5\\cdot 0=15$.<br>- $L(B)=3\\cdot 4+5\\cdot 1=17$.<br>- $L(C)=3\\cdot 2+5\\cdot 2=16$.<br>- $L(D)=3\\cdot 0+5\\cdot 2=10$.  Vậy tiền lãi lớn nhất là $17$ nghìn đồng.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D223TL6",
  "question": "Một nhà phân phối có thể thuê tối đa $3$ chiếc xe tải loại A và $8$ chiếc xe tải loại B để vận chuyển $100$ chiếc máy giặt từ nhà máy sản xuất đến nơi tiêu thụ. Mỗi xe loại A chở được tối đa $20$ máy giặt với giá cước $3$ triệu đồng mỗi chuyến, mỗi xe loại B chở được tối đa $10$ máy giặt với giá cước $2$ triệu đồng mỗi chuyến. Nếu mỗi xe chỉ chở nhiều nhất một chuyến, số tiền cước tối thiểu (triệu đồng) mà nhà phân phối phải trả là bao nhiêu?",
  "answer": "17",
  "explain": "Gọi $x$, $y$ $(x \\ge 0;\\, y \\ge 0;\\, x, y \\in \\mathbb{Z})$ lần lượt là số chiếc xe tải loại A và loại B nhà phân phối thuê để vận chuyển máy giặt.<br> Vì có thể thuê tối đa $3$ chiếc xe tải loại A và $8$ chiếc xe tải loại B nên $x \\le 3$ và $y \\le 8$.<br> Tổng số máy giặt vận chuyển nhiều nhất được khi dùng $x$ xe loại A và $y$ xe loại B nếu mỗi xe chỉ chở nhiều nhất một chuyến là $20x + 10y$ (chiếc).<br> Vì phải vận chuyển $100$ chiếc máy giặt nên $20x+10y \\ge 100$ hay $2x+y\\ge 10$.<br> Số tiền cước (triệu đồng) mà nhà phân phối phải trả là $F(x;y) = 3x + 2y$.<br> Từ đó, bài toán trở thành tìm các số nguyên dương $x$, $y$ sao cho $F(x;y) = 3x + 2y$ đạt giá trị nhỏ nhất với $x$, $y$ thỏa mãn hệ điều kiện $2x + y \\ge 10, \\text{ và } 0 \\le x \\le 3, \\text{ và } 0 \\le y \\le 8.$ Miền nghiệm của hệ bất phương trình là tam giác $ABC$ được tô màu như hình vẽ dưới và có các đỉnh là $A(1;8)$, $B(3;8)$, $C(3;4)$. <br><img src=\"data/10/0D2/im0D22/loc8_TT_THPT_NguyenKh_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Ta có $F(1;8) =19 \\text{ và } F(3;8) =25 \\text{ và } F(3;4) =17$. Do đó giá trị nhỏ nhất của $F(x;y)$ là $17$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D323TL1",
  "question": "Gia đình ông Thanh nuôi tôm với diện tích ao nuôi là $100$ m$^2$. Vụ tôm vừa qua ông nuôi với mật độ là $1$ kg/m$^2$ tôm giống và sản lượng tôm khi thu hoạch được $2$ tấn tôm. Với kinh nghiệm nuôi tôm nhiều năm, ông cho biết cứ thả giảm đi $200$ g/m$^2$ tôm giống thì sản lượng tôm thu hoạch tăng thêm $0{,}4$ tấn tôm. Vậy vụ tới ông phải thả bao nhiêu kg tôm giống để sản lượng tôm cho thu hoạch là lớn nhất? (Giả sử không có dịch bệnh, hao hụt khi nuôi tôm giống).",
  "answer": "70",
  "explain": "Vụ trước thả $1$ kg/m$^2$ trên diện tích $100$ m$^2$ nên tổng lượng tôm giống là $100$ kg, sản lượng thu hoạch là $2\\,000$ kg.<br> Khi giảm $200$ g/m$^2$ tức là $0{,}2$ kg/m$^2$ thì trên toàn bộ diện tích $100$ m$^2$ sẽ giảm đi $20$ kg, lúc đó sản lượng tăng lên $2\\,400$ kg.<br> Gọi $x$ (kg) là lượng tôm giống giảm so với ban đầu. Khi đó lượng tôm giống thả là $(100-x)$ kg.<br> Giả sử năng suất thu hoạch trên mỗi kg tôm giống có dạng tuyến tính $20+ax$ (kg).<br> Khi $x=20$ thì sản lượng đạt $2\\,400$ kg, tức là \\[(100-20)(20+20a)=2\\,400\\Rightarrow 20+20a=30\\Rightarrow a=0{,}5. \\] Sau đây là bảng tóm tắt các yếu tố đã biết, các đại lượng và yêu cầu trong bài toán \\renewcommand{\\arraystretch}{1.2} <br><img src=\"data/10/0D3/im0D32/loc8_TT_QV1_TT1_LVT_B_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Xét hàm sản lượng \\[y=f(x)=(100-x)(20+0{,}5x)= -0{,}5x^2+30x+2\\,000. \\] Đây là hàm số bậc hai với hệ số $a=-0{,}5&lt;0$ nên đồ thị là parabol có bề lõm quay xuống dưới. Vì vậy hàm số $f(x)$ đạt tại \\[x=\\dfrac{-b}{2a}=\\dfrac{-30}{2(-0{,}5)}=30. \\] Vậy lượng tôm giống cần thả là $100-30=70$ (kg).<br> Vậy ông Thanh cần thả $70$ kg tôm giống.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TL2",
  "question": "Giả sử lợi nhuận (tính bằng nghìn đồng) của một quán cà phê nhỏ trong ngày thứ $x$ của một tháng được cho bởi công thức $h(x)=-2x^2+40x+700$, trong đó $x$ là số ngày tính từ ngày đầu tiên của tháng. Do vào đầu tháng, quán bắt đầu có chương trình ưu đãi nên lượng khách tăng nhanh, sau đó lợi nhuận đạt đỉnh rồi giảm dần về cuối tháng. Giả sử tháng đó có $30$ ngày. Hỏi trong bao nhiêu ngày của tháng, lợi nhuận của quán cà phê tăng so với ngày liền trước?",
  "answer": "10",
  "explain": "Hàm lợi nhuận là một hàm bậc hai $h(x)=-2x^2+40x+700$.<br>  Lợi nhuận sẽ đạt giá trị lớn nhất tại đỉnh của parabol.<br>  Giá trị lớn nhất của hàm số đạt được tại $x=10$.<br>  Vì hệ số $a=-2&lt;0$ nên hàm số đồng biến (lợi nhuận tăng) trên khoảng $(-\\infty;10)$ và nghịch biến (lợi nhuận giảm) trên khoảng $(10;+\\infty)$.<br>  Do $x$ là số ngày của tháng (với $1\\leq x\\leq 30$) nên lợi nhuận tăng trong đoạn $[1;10]$.<br>  Vậy lợi nhuận của quán cà phê tăng trong $10$ ngày đầu tiên của tháng và đạt giá trị lớn nhất tại ngày thứ $10$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D321TL3",
  "question": "Một quả bóng được đá lên từ mặt đất, biết rằng chiều cao $y$ (mét) của quả bóng so với mặt đất được biểu diễn bởi một hàm số bậc hai theo thời gian $t$ (giây). Sau $3$ giây kể từ lúc được đá lên, quả bóng đạt chiều cao tối đa là $21\\,m$ và bắt đầu rơi xuống. Tìm thời điểm $t$ lớn nhất sau khi quả bóng được đá lên để quả bóng vẫn đang ở độ cao trên $10\\,m$ so với mặt đất (kết quả làm tròn đến hàng đơn vị).",
  "answer": "5",
  "explain": "Gọi hàm số bậc hai theo $t$ là $y(t)=at^2+bt+c$ với $a\\ne 0$.<br>  Theo đề, khi $t=0$ thì $y=0$ nên $c=0$, do đó $y(t)=at^2+bt$.<br>  Theo đề, tại $t=3$ thì $y_{max}=21$, tức là parabol có đỉnh $I(3;21)$.<br>  Vậy ta có hệ $-\\dfrac{b}{2a}=3$ và $y(3)=21 \\Leftrightarrow 6a+b=0$ và $9a+3b=21 \\Leftrightarrow a=-\\dfrac{7}{3}$ và $b=14$.<br>  Vậy $y(t)=-\\dfrac{7}{3}t^2+14t$ (kiểm tra: $y(6)=0$, đúng với việc bóng chạm đất sau $6$ giây).<br>  Quả bóng ở độ cao trên $10\\,m$ khi $y(t)&gt;10 \\Leftrightarrow -\\dfrac{7}{3}t^2+14t&gt;10 \\Leftrightarrow 7t^2-42t+30&lt;0 \\Leftrightarrow \\dfrac{42-\\sqrt{924}}{14}&lt;t&lt;\\dfrac{42+\\sqrt{924}}{14}$, tức là $0{,}83&lt;t&lt;5{,}17$ (xấp xỉ).<br>  Vậy thời điểm $t$ lớn nhất để quả bóng vẫn ở độ cao trên $10\\,m$ là $t\\approx 5{,}17$ giây, làm tròn đến hàng đơn vị là $t=5$ (giây).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D721TL1",
  "question": "Một quả bóng được ném thẳng lên cao từ độ cao $1{,}5$ m so với mặt đất với vận tốc $10$ m/s. Độ cao của quả bóng so với mặt đất (tính bằng mét) sau $ t$ giây được cho bởi hàm số $ h(t)=-3{,}5t^2+7t+1{,}5$. Khoảng thời gian dài nhất bóng ở độ cao trên $4$ m là $\\left(a;b\\right)$. Giá trị của $ a+b$ bằng bao nhiêu?",
  "answer": "2",
  "explain": "Khi quả bóng ở độ cao trên 4 m nghĩa là $h(t) gt;4 \\Leftrightarrow -3{,}5t^2+7t+1{,}5 gt;4$<br>$\\Leftrightarrow -3{,}5t^2+7t-2{,}5 gt;0$<br>$\\Leftrightarrow \\dfrac{7-\\sqrt{14}}{7} lt;t lt;\\dfrac{7+\\sqrt{14}}{7}.$  Khoảng thời gian dài nhất bóng ở độ cao trên $4$ m là $\\left(\\dfrac{7-\\sqrt{14}}{7};\\dfrac{7+\\sqrt{14}}{7}\\right)$.<br>  Suy ra $ a=\\dfrac{7-\\sqrt{14}}{7};b=\\dfrac{7+\\sqrt{14}}{7}$.<br>  Vậy $ a+b=2$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D821TL1",
  "question": "Một người có $5$ thẻ được đánh số từ $1$ đến $5$. Chọn $3$ thẻ để lập số tự nhiên có $3$ chữ số. Có bao nhiêu số tự nhiên được lập chia hết cho $2$?",
  "answer": "24",
  "explain": "Giả sử số cần lập có dạng $\\overline{abc}$.<br>  Chữ số $c$ có 2 lựa chọn với $ c\\in\\left\\{ 2;4\\right\\}.$<br>  Số cách sắp xếp $\\overline{ab}$ là $ \\mathrm{A}_4^2$.<br>  Vậy số tự nhiên theo yêu cầu bài toán là $ A_4^2\\cdot2=24$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0D821TL2",
  "question": "Anh Nam mới vừa mua xe ô tô nhưng chưa ra biển số, anh rất mong muốn 5 chữ số trên biển số xe của mình là “ không lùi”\\ hoặc “ không quá bé”. Theo cách nghĩ của anh Nam, đó là một số tự nhiên có $5$ chữ số dạng $\\overline{m a b c n}$ sao cho $4\\leqslant m \\leqslant a \\leqslant b \\leqslant c \\leqslant n$. Có tất cả bao nhiêu số tự nhiên phù hợp với mong muốn của anh Nam?",
  "answer": "252",
  "explain": "Ta có $m$, $a$, $b$, $c$, $n$ được chọn từ tập $A=\\left\\{4; 5; 6; 7; 8; 9\\right\\}$.<br>  Đây là bài toán chọn $5$ phần từ từ tập hợp $A$ với phép chọn có thể có các phần tử trùng nhau.<br>  Suy ra tổ hợp chập $k$ của $n$ phần tử với phép lặp có công thức là $\\mathrm{C}_{n+k-1}^k$ cách.<br>  Ta có $n=6$ (số lượng phần tử trong tập $A$) và $k=5$ (số lượng chữ số cần chọn).<br>  Suy ra số các số tự nhiên phù hợp là $C_{6+5-1}^5=C_{10}^5=252$.<br>  \\textbf{\\color{red}<u>Cách khác:</u>}<br>  Do $4\\leqslant m \\leqslant a \\leqslant b \\leqslant c \\leqslant n$<br>  nên $4\\leqslant m &lt; a+1&lt; b+2&lt; c+3&lt; n+4\\leqslant 13$<br>  $\\Rightarrow 1\\leqslant m-3&lt; a-2&lt; b-1&lt; c &lt; n+1\\leqslant 10$.<br>  Đặt $m-3=a_1$; $a-2=a_2$; $b-1=a_3$; $c=a_4$; $n+1=a_5 \\Rightarrow 1\\leqslant a_1 &lt; a_2 &lt; a_3 &lt; a_4 &lt; a_5 \\leqslant 10$.<br>  Do đó mỗi các chọn một bộ $(m; a; b; c; n)$ tương ứng với một cách chọn năm số phân biệt từ tập $\\left\\{1; 2; \\ldots; 10\\right\\}$.<br>  Vậy ra số các số tự nhiên phù hợp là $\\mathrm{C}_{10}^5=252$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H413TL1",
  "question": "Biết $a \\in \\left(0^\\circ; 180^\\circ\\right)$ và $\\tan a=-3$. Tính giá trị biểu thức $P=\\dfrac{3\\cos^2 a+3\\sin a\\cdot \\cos a}{\\cos^2 a+1}$ (kết quả làm tròn đến hàng phần chục).",
  "answer": "-0,5",
  "explain": "Ta có $\\cos^2 a=\\dfrac{1}{1+\\tan^2a}=\\dfrac{1}{1+9}=\\dfrac{1}{10}$.<br>Và $\\sin a\\cdot\\cos a=\\tan a\\cdot\\cos^2a=-3\\cdot\\dfrac{1}{10}=-\\dfrac{3}{10}$.<br>Suy ra $3\\cos^2a+3\\sin a\\cdot\\cos a=3\\cdot\\dfrac{1}{10}-3\\cdot\\dfrac{3}{10}=-\\dfrac{6}{10}=-\\dfrac{3}{5}$.<br>Và $\\cos^2a+1=\\dfrac{1}{10}+1=\\dfrac{11}{10}$.<br>Vậy $P=\\dfrac{-\\frac{3}{5}}{\\frac{11}{10}}=-\\dfrac{6}{11}\\approx -0{,}5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TL1",
  "question": "Cho $\\cos \\alpha = -\\dfrac{3}{5}$ và $90^\\circ &lt; \\alpha &lt; 180^\\circ$. Tính $A = \\cos^2 \\alpha + 2\\sin^2 \\alpha$.",
  "answer": "1,64",
  "explain": "Ta có $\\cos^2 \\alpha + \\sin^2 \\alpha = 1 \\Rightarrow \\sin^2 \\alpha = 1 - \\cos^2 \\alpha = 1 - \\left(-\\dfrac{3}{5}\\right)^2 = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$.<br>  Vậy $A = \\cos^2 \\alpha + 2\\sin^2 \\alpha = \\left(-\\dfrac{3}{5}\\right)^2 + 2 \\cdot \\dfrac{16}{25}  = \\dfrac{41}{25} = 1{,}64$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H412TL2",
  "question": "Cho $\\cot \\alpha=2$. Tính $B=\\dfrac{2\\sin \\alpha+3\\cos \\alpha}{3\\sin ^3\\alpha-\\cos ^3\\alpha}$.",
  "answer": "-8",
  "explain": "Ta có $\\cot \\alpha=2$ nên $\\sin \\alpha\\ne 0$.<br>  Khi đó   $B =\\dfrac{2\\sin \\alpha+3\\cos \\alpha}{3\\sin ^3\\alpha-\\cos ^3\\alpha}$<br>$=\\dfrac{\\dfrac{2\\sin \\alpha+3\\cos \\alpha}{\\sin^3 \\alpha}}{\\dfrac{3\\sin ^3\\alpha-\\cos ^3\\alpha}{\\sin^3 \\alpha}}$<br>$=\\dfrac{\\dfrac{1}{\\sin^2 \\alpha}\\left(2+\\dfrac{3\\cos \\alpha}{\\sin \\alpha}\\right)}{3-\\cot^3 \\alpha}$<br>$=\\dfrac{\\left(1+\\cot^2 \\alpha\\right)\\cdot (2+3\\cot \\alpha)}{3-\\cot^3 \\alpha}$<br>$=\\dfrac{(1+2^2)\\cdot (2+3\\cdot 2)}{3-2^3}$<br>$=-8.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TL1",
  "question": "Cho hình vuông $ABCD$ cạnh bằng $3$. Trên cạnh $AB$ lấy điểm $M$ sao cho $BM = 1$, trên cạnh $CD$ lấy điểm $N$ sao cho $DN = 1$ và $P$ là trung điểm $BC$. Tính $\\cos \\widehat{MNP}$ (kết quả làm tròn đến hàng phần trăm).",
  "answer": "0,82",
  "explain": "<br><img src=\"data/10/0H4/im0H42/loc2_0_TL_TN_DS_THPT__004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Trên cạnh $AB$ lấy điểm $Q$ sao cho $AQ=1$, ta có tứ giác $AQND$ là hình chữ nhật.<br>  Theo định lí Py-ta-go:<br>  $MN=\\sqrt{QN^2+QM^2}=\\sqrt{10}$, $PN=\\sqrt{NC^2+CP^2}=\\dfrac{5}{2}$, $PM=\\sqrt{PB^2+BM^2}=\\dfrac{\\sqrt{13}}{2}$.<br>  Áp dụng định lí Cô-sin trong tam giác $MNP$ ta có:<br>  $\\cos \\widehat{MNP}=\\dfrac{PN^2+NM^2-PM^2}{2\\cdot PN \\cdot NM}=\\dfrac{\\dfrac{25}{4}+10-\\dfrac{13}{4}}{2\\cdot \\dfrac{5}{2}\\cdot\\sqrt{10}}\\approx 0{,}82.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TL2",
  "question": "Cho tam giác $ABC$ có $\\widehat{C}$ nhọn và $AC=3$; $BC=4$; $S_{ABC}=3\\sqrt{3}$ (tham khảo hình vẽ). Tính độ dài cạnh $AB$ (kết quả làm tròn đến hàng phần trăm).<br><img src=\"data/10/0H4/im0H42/loc2_0_TN_DS_TLN_THPT_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "answer": "3,61",
  "explain": "Ta có  $S_{ABC}=3\\sqrt{3} \\Leftrightarrow \\dfrac{1}{2}\\cdot CA\\cdot CB\\cdot \\sin \\widehat{ACB}=3\\sqrt{3}$<br>$\\Leftrightarrow \\dfrac{1}{2}\\cdot 3\\cdot 4\\cdot \\sin \\widehat{ACB}=3\\sqrt{3}$<br>$\\Leftrightarrow \\sin \\widehat{ACB}=\\dfrac{\\sqrt{3}}{2}$<br>$\\Leftrightarrow \\widehat{ACB}=60^\\circ ~(\\text{do}~ \\widehat{C}~ \\text{nhọn}).$  Áp dụng định lí côsin cho tam giác $ABC$ ta có  $AB =\\sqrt{AC^2+BC^2-2\\cdot AC\\cdot BC\\cdot \\cos \\widehat{ACB}}$<br>$=\\sqrt{3^2+4^2-2\\cdot 3\\cdot 4\\cdot \\cos 60^\\circ}$<br>$=\\sqrt{13}$<br>$\\approx 3{,}61.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H421TL3",
  "question": "Cho tam giác $ABC$ có $AB=10$, $AC=20$, $\\widehat{BAC}=60^\\circ$. Tính diện tích tam giác $ABC$ (kết quả làm tròn đến hàng phần mười).",
  "answer": "86,6",
  "explain": "Diện tích tam giác $ABC$ là $S_{\\triangle ABC}=\\dfrac{1}{2}\\cdot AB\\cdot AC\\cdot \\sin \\widehat{BAC}=\\dfrac{1}{2}\\cdot 10\\cdot 20\\cdot \\sin 60^\\circ=50\\sqrt{3}\\approx 86{,}6.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H432TL1",
  "question": "Một thành phố dự định xây dựng một trạm cấp nước sạch để phục vụ cho hai khu dân cư $A$ và $B$ nằm trên một bãi đất ven sông, được mô hình hoá như hình vẽ. Biết rằng trạm cấp nước phải đặt tại vị trí $C$ trên bờ sông; $AB=8$ km, khoảng cách từ $A$ và $B$ đến bờ sông lần lượt là $AM=3$ km, $BN=6$ km; $M$, $N$, $C$ thẳng hàng. Gọi $T$ là tổng độ dài đường ống dẫn nước từ trạm nước $C$ đến $A$ và $B$. Tìm giá trị nhỏ nhất của $T$ (kết quả làm tròn đến hàng phần chục).<br><img src=\"data/10/0H4/im0H43/dlts_sbh_giuakii1_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "answer": "11,7",
  "explain": "Gọi $H$ là hình chiếu vuông góc của $A$ trên đường thẳng $BN$ và $B'$ đối xứng với $B$ qua $MN$.<br>Ta có $AM=HN=3$, $BH=3$, $B' N=BN=6$.<br>Tam giác $ABH$ vuông tại $H\\Rightarrow AH^2=AB^2-BH^2=8^2-3^2=55$.<br>Tam giác $AHB'$ vuông tại $H$ có $B' H=B' N+HN=6+3=9$<br>$\\Rightarrow AB'^2=AH^2+B' H^2=55+9^2=136\\Rightarrow AB'=\\sqrt{136}\\approx 11{,}7$.<br>Vậy giá trị nhỏ nhất của $T$ là $AB'\\approx 11{,}7$ km.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431TL1",
  "question": "Hai tàu du lịch xuất phát từ hai thành phố cảng $A$ và $B$ cách nhau $300$ km đến đảo $C$ như hình minh họa. Biết hai tàu cùng chuyển động đều với vận tốc $80$ km/h và $\\widehat{CAB} = 30^\\circ$, $\\widehat{CBA} = 45^\\circ$. Tàu 1 ở thành phố $A$ khởi hành lúc $8$ h, tàu $2$ ở thành phố $B$ muốn đến đảo $C$ cùng lúc với tàu $1$ thì phải khởi hành sau tàu $1$ bao nhiêu phút? (làm tròn kết quả đến hàng đơn vị của phút)<br><img src=\"data/10/0H4/im0H43/loc2_0_TL_TN_DS_THPT__004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "answer": "48",
  "explain": "Xét tam giác $ABC$, ta có $\\widehat{ACB} = 180^\\circ - (\\widehat{CAB} + \\widehat{CBA}) = 180^\\circ - (30^\\circ + 45^\\circ) = 105^\\circ$.<br>  Áp dụng định lý sin trong tam giác $ABC$, ta có $\\dfrac{AC}{\\sin\\widehat{CBA}} = \\dfrac{BC}{\\sin\\widehat{CAB}} = \\dfrac{AB}{\\sin\\widehat{ACB}}$.<br>  Suy ra $AC=\\dfrac{AB \\cdot \\sin\\widehat{CBA}}{\\sin\\widehat{ACB}}$ và $BC=\\dfrac{AB \\cdot \\sin\\widehat{CAB}}{\\sin\\widehat{ACB}}$.<br>  Thời gian tàu $1$ đi từ $A$ đến $C$ là $t_1=\\dfrac{AC}{80}$ (giờ).<br>  Thời gian tàu $2$ đi từ $B$ đến $C$ là $t_2=\\dfrac{BC}{80}$ (giờ).<br>  Khi đó  $t=t_1-t_2=\\dfrac{AC}{80}-\\dfrac{BC}{80}=\\dfrac{300\\cdot\\sin45^\\circ}{80\\sin105^\\circ}-\\dfrac{300\\cdot\\sin30^\\circ}{80\\cdot\\sin105^\\circ}\\approx0{,}8 \\ (\\text{giờ}).$  Vậy $t=0{,}8$ (giờ).<br>  Đổi sang phút $t \\approx 0{,}8 \\cdot 60 \\approx 48$ (phút).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431TL2",
  "question": "Trên sườn đồi có $1$ cái cây thẳng đứng (tham khảo hình vẽ) đổ bóng dài $AB=39{,}5$ m xuống đồi. Biết góc nghiêng của sườn đồi là $\\alpha=\\widehat{OAB}=26^{\\circ}$ so với phương ngang và góc nâng của mặt trời là $\\beta=\\widehat{OAC}=50^{\\circ}$. Tính chiều cao $BC$ của cái cây (đơn vị tính là mét và kết quả làm tròn đến hàng đơn vị).<br><img src=\"data/10/0H4/im0H43/loc2_0_TN_DS_TLN_THPT_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "answer": "25",
  "explain": "<br>- Tam giác $OAB$ vuông tại $O$ nên $OA=AB\\cdot \\cos 26^\\circ \\approx 35{,}5$ (m).<br>- Tam giác $OAC$ vuông tại $O$ nên $AC=\\dfrac{OA}{\\cos 50^\\circ}=\\dfrac{35{,}5}{\\cos 50^\\circ}\\approx 55{,}23$ (m).<br>- $\\widehat{CAB}=\\beta-\\alpha=50^\\circ-26^\\circ=24^\\circ$.<br>- Áp dụng định lí côsin cho tam giác $ABC$ ta được  $BC =\\sqrt{AB^2+AC^2-2\\cdot AB\\cdot AC\\cdot \\cos \\widehat{CAB}}$<br>$=\\sqrt{(39{,}5)^2+(55{,}23)^2-2\\cdot 39{,}5\\cdot 55{,}23\\cdot \\cos 24^\\circ}$<br>$\\approx 25~\\text{(m)}.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H431TL3",
  "question": "Nhà anh Bình có một cái ao với hình dạng là một nửa hình tròn, bờ ao là đường kính $ AB=12$ m. Trên lối đi quanh ao (tức trên cung $\\overset\\frown{AB}$) anh Bình đặt $ 3$ chiếc cọc tại vị trí điểm $ C$, $D$ và $ B$. Sau đó anh Bình dùng lưới rào thành một vùng mặt ao hình tam giác $ BCD$ để nuôi vịt trong đó, biết rằng $\\overset\\frown{AD}=\\overset\\frown{CD}$. Khi số đo $\\overset\\frown{AD}$ bằng $ 30^\\circ$ thì diện tích của phần ao được rào để nuôi vịt bằng $ a\\sqrt{b}\\,\\mathrm{m^2}$, với $a&gt;b$, $ a\\in\\mathbb{Z}$, $b\\in\\mathbb{Z}$. Giá trị của $ a^2+b^2$ bằng bao nhiêu?<br><img src=\"data/10/0H4/im0H43/loc3_0_TL_TN_DS_THPT__001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "answer": "90",
  "explain": "Vì $\\wideparen{AD}=\\wideparen{CD} \\text{ và } \\text{sđ}\\wideparen{AD}=30^\\circ\\Rightarrow \\widehat{AOD}=\\widehat{DOC}=30^\\circ \\text{ và } \\widehat{DOB}=150^\\circ.$<br>  Ta có <br>$BD=\\sqrt{OD^2+OB^2-2.OD.OB.\\cos 150^\\circ}=\\sqrt{72+36\\sqrt{3}}$.<br>  $DC=\\sqrt{OD^2+OC^2-2.OD.OC.\\cos 30^\\circ}=\\sqrt{72-36\\sqrt{3}}$.<br>  Mặt khác $\\widehat{BDC}=\\dfrac{1}{2}\\widehat{BOC}=\\dfrac{1}{2}.120^\\circ=60^\\circ$.  Suy ra $S_{\\triangle BCD}=\\dfrac{1}{2}\\cdot DC\\cdot BD\\cdot\\sin\\widehat{BDC}=\\dfrac{1}{2}\\cdot\\sqrt{72-36\\sqrt{3}}\\cdot\\sqrt{72+36\\sqrt{3}}\\cdot\\sin 60^\\circ=9\\sqrt{3} $.<br>  Vậy $a=9$, $b=3$ nên $a^2+b^2=90$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H911TL1",
  "question": "Trong mặt phẳng $ Oxy,$ cho hình bình hành $ADBC$ có $A\\left(-3;5\\right)$, $B\\left(1;1\\right)$, $C\\left(2;3\\right)$, $D\\left(m;n\\right)$. Giá trị của $ m+n$ bằng bao nhiêu?",
  "answer": "-1",
  "explain": "Ta có $\\overrightarrow{AD}=\\left(m+3;n-5\\right),\\overrightarrow{CB}=\\left(-1;-2\\right)$.<br>  $ADBC$ là hình bình hành $\\Leftrightarrow\\overrightarrow{AD}=\\overrightarrow{CB}\\Leftrightarrow\\left\\{\\begin{aligned}  & m+3=-1\\\\   & n-5=-2\\\\   \\end{aligned}\\right.\\Leftrightarrow\\left\\{\\begin{aligned}  & m=-4\\\\   & n=3.\\\\   \\end{aligned}\\right.$<br>  Vậy $ m+n=-1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TL1",
  "question": "Cho $\\vec{u}=(3;-2)$ và $\\vec{v}=(-1;4)$. Tính hoành độ của vectơ $\\vec{u}+\\vec{v}$.",
  "answer": "2",
  "explain": "$\\vec u+\\vec v=(3-1;-2+4)=(2;2)$, hoành độ bằng $2$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TL2",
  "question": "Trong mặt phẳng tọa độ, cho $A(1;2)$ và $B(4;6)$. Tính độ dài đoạn thẳng $AB$.",
  "answer": "5",
  "explain": "$\\vec{AB}=(3;4)$ nên $AB=\\sqrt{3^2+4^2}=\\sqrt{25}=5$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H921TL3",
  "question": "Cho tam giác $ABC$ với $A(0;0)$, $B(6;0)$, $C(0;6)$. Tính $x_G+y_G$, trong đó $G$ là trọng tâm của tam giác.",
  "answer": "4",
  "explain": "$G=(2;2)$ nên $x_G+y_G=2+2=4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H931TL1",
  "question": "Hai bạn An và Bình cùng học chung Trường trung học phổ thông Phan Bội Châu. Nhà An tại vị trí điểm $ A\\left(4;-1\\right),$ trường học của hai bạn tại vị trí điểm $ C\\left(10;7\\right)$ cùng trên một con đường thẳng. Mỗi ngày An đi học chạy xe ngang khu vực nhà Bình tại vị trí điểm $ B\\left(5;1\\right)$ nằm trên con đường vuông góc với con đường đi đến trường (minh họa như hình bên dưới). Để tiện cho việc An cùng đón đến trường, Bình đi một đoạn từ nhà ra đường. Bình phải đi một đoạn đường bao nhiêu đơn vị độ dài để đi cùng xe với An đến trường? (Biết rằng đơn vị độ dài tính bằng kilômét).  <br><img src=\"data/10/0H9/im0H93/loc3_0_TL_TN_DS_THPT__002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
  "answer": "0,4",
  "explain": "Phương trình đường thẳng $ AC$ là  $\\dfrac{x-x_A}{x_C-x_A}=\\dfrac{y-y_A}{y_C-y_A}\\Leftrightarrow\\dfrac{x-4}{10-4}=\\dfrac{y+1}{7+1}\\Leftrightarrow 8x-6y-38=0.$  Bạn Bình phải đi một đoạn đường để đi cùng xe với bạn An đến trường chính là khoảng cách từ điểm $B$ đến đường thẳng $AC.$<br>  Vậy độ dài đoạn đường Bình đi là $\\mathrm{d}\\left(B,AC\\right)=\\dfrac{\\left| 8\\cdot 5-6\\cdot 1-38\\right|}{\\sqrt{8^2+6^2}}=0{,}4.$",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TL1",
  "question": "Đường tròn $(x-2)^2+(y+3)^2=16$ có bán kính bằng bao nhiêu?",
  "answer": "4",
  "explain": "$R^2=16\\Rightarrow R=4$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TL2",
  "question": "Phương trình $x^2+y^2-4x+6y-3=0$ là phương trình đường tròn có tâm $I(a;b)$. Tính $a+b$.",
  "answer": "-1",
  "explain": "$a=2,\\,b=-3$ nên $a+b=2+(-3)=-1$.",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 },
 {
  "id": "0H941TL3",
  "question": "Cho tam giác $ABC$ vuông tại $A$ với $A(0;0)$, $B(6;0)$, $C(0;8)$. Tính bán kính đường tròn ngoại tiếp tam giác $ABC$.",
  "answer": "5",
  "explain": "$BC=\\sqrt{6^2+8^2}=10$ nên $R=\\dfrac{BC}{2}=5$ (do tam giác vuông tại $A$).",
  "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
 }
];
