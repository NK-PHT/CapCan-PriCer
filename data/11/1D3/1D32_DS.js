// =========================================================================
// KHỐI DỮ LIỆU: 1D32 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D32 = [
  {
    "id": "1D328DS1",
    "question": "Chi phí (đơn vị: nghìn đồng) để sản xuất $x$ sản phẩm của một công ty được xác định bởi hàm số ${C(x)=600+500x}$.",
    "subQuestions": [
      {
        "text": "Chi phí để sản xuất $1$ sản phẩm là $1\\,100$ đồng",
        "answer": false
      },
      {
        "text": "Chi phí để sản xuất $10$ sản phẩm là $560\\,000$ đồng",
        "answer": false
      },
      {
        "text": "Công ty sản xuất $20$ sản phẩm thì chi phí trung bình của mỗi sản phẩm là $530\\,000$ đồng",
        "answer": true
      },
      {
        "text": "Nếu công ty sản xuất được số sản phẩm tăng lên rất nhiều thì chi phí trung bình của mỗi sản phẩm giảm dần về mức $500\\,000$ đồng",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>Chi phí để sản xuất $1$ sản phẩm là $C(1)=600+500\\cdot 1=1\\,100$ nghìn đồng.<br>- <strong>Sai</strong>.<br>Chi phí để sản xuất $10$ sản phẩm là $C(10)=600+500\\cdot 10=5\\,600$ nghìn đồng.<br>- <strong>Đúng</strong>.<br>Công ty sản xuất $20$ sản phẩm thì chi phí trung bình của mỗi sản phẩm là $$C(20)=\\dfrac{600+500\\cdot 20}{20}=530 \\text{ nghìn đồng}.$$<br>- <strong>Đúng</strong>.<br>Ta có $$\\lim\\limits_{x\\to +\\infty}\\dfrac{600+500x}{x}=500.$$ Vậy nếu công ty sản xuất được số sản phẩm tăng lên rất nhiều thì chi phí trung bình của mỗi sản phẩm giảm dần về mức $500\\,000$ đồng"
  },
  {
    "id": "1D327DS1",
    "question": "Cho hàm số $f(x)=\\left\\{\\begin{array}{l}x^2-3 x+1 \\text{ khi }x&lt;0\\\\\\sqrt{x^2+1} \\text{ khi }x \\geq 0\\end{array}\\right.$. Khi đó",
    "subQuestions": [
      {
        "text": "Giới hạn $\\displaystyle\\lim\\limits _{x \\rightarrow 2}f(x)=-1$",
        "answer": false
      },
      {
        "text": "Giới hạn $\\displaystyle\\lim\\limits _{x \\rightarrow 0^{-}}f(x)=-1$",
        "answer": false
      },
      {
        "text": "Giới hạn $\\displaystyle\\lim\\limits _{x \\rightarrow 0^{+}}f(x)=1$",
        "answer": true
      },
      {
        "text": "Giới hạn $\\displaystyle\\lim\\limits _{x \\rightarrow 0}f(x)=1$",
        "answer": true
      }
    ],
    "explain": "<br>- Giới hạn $\\displaystyle\\lim\\limits _{x \\rightarrow 2}f(x)=\\displaystyle\\lim\\limits_{x\\rightarrow 2} \\sqrt{x^2+1}=\\sqrt{5}$.<br>- Giới hạn $\\displaystyle\\lim\\limits _{x \\rightarrow 0^{-}}f(x)=\\displaystyle\\lim\\limits _{x \\rightarrow 0^{-}}(x^2-3x+1)=1$.<br>- Giới hạn $\\displaystyle\\lim\\limits _{x \\rightarrow 0^{+}}f(x)=\\displaystyle\\lim\\limits _{x \\rightarrow 0^{+}}\\sqrt{x^2+1}=1$.<br>- Vì $\\displaystyle\\lim\\limits _{x \\rightarrow 0^{-}}f(x)=\\displaystyle\\lim\\limits _{x \\rightarrow 0^{-}}(x^2-3x+1)=1$ và $\\displaystyle\\lim\\limits _{x \\rightarrow 0^{+}}f(x)=\\displaystyle\\lim\\limits _{x \\rightarrow 0^{+}}\\sqrt{x^2+1}=1$ nên \\break $\\displaystyle\\lim\\limits _{x \\rightarrow 0}f(x)=\\displaystyle\\lim\\limits _{x \\rightarrow 0}=1$."
  },
  {
    "id": "1D327DS2",
    "question": "Cho hàm số $f(x) = \\left\\{\\begin{array}{ll}x-2 & \\text{khi } x &lt; -1\\\\\\sqrt{x^2+1} & \\text{khi } x \\ge -1\\end{array}\\right.$. Khi đó",
    "subQuestions": [
      {
        "text": "$\\lim\\limits_{x \\to -2} f(x) = \\sqrt{5}$",
        "answer": false
      },
      {
        "text": "$\\lim\\limits_{x \\to -1^-} f(x) = -3$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{x \\to -1^+} f(x) = \\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Hàm số tồn tại giới hạn khi $x \\to -1$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Ta có $\\lim\\limits_{x \\to -2} f(x) =\\lim\\limits_{x \\to -2}(x-2)=-2-2=-4$.<br>- <strong>Đúng</strong>. Ta có $\\lim\\limits_{x \\to -1^-} f(x) =\\lim\\limits_{x \\to -1^-}(x-2) = -1-2=-3$.<br>- <strong>Đúng</strong>. Ta có $\\lim\\limits_{x \\to -1^+} f(x) =\\lim\\limits_{x \\to -1^+} \\sqrt{x^2+1}=\\sqrt{(-1)^2+1}= \\sqrt{2}$.<br>- <strong>Sai</strong>. Ta thấy $\\lim\\limits_{x \\to -1^-} f(x)\\neq \\lim\\limits_{x \\to -1^+} f(x)$. Nên hàm số không tồn tại giới hạn khi $x \\to -1$."
  }
];
