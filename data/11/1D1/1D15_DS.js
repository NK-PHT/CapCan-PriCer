// =========================================================================
// KHỐI DỮ LIỆU: 1D15 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS3.tex), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D15 = [
  {
    "id": "1D153DS1",
    "question": "Cho phương trình lượng giác $2\\sin x=\\sqrt2$.\\quad$(\\ast)$",
    "subQuestions": [
      {
        "text": "Phương trình tương đương với phương trình $(\\ast)$ là $\\sin x=\\sin\\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Phương trình $(\\ast)$ có nghiệm là: $x=\\dfrac{3\\pi}{4}+k2\\pi$; $x=\\dfrac{\\pi}{3}+k2\\pi (k \\in \\mathbb{Z})$",
        "answer": false
      },
      {
        "text": "Phương trình $(\\ast)$ có nghiệm dương nhỏ nhất bằng $\\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Số nghiệm của phương trình $(\\ast)$ trong khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là hai nghiệm",
        "answer": false
      }
    ],
    "explain": "<br>- Phương trình $(\\ast)$ tương đương $$2\\sin x=\\sqrt2 \\Leftrightarrow \\sin x=\\dfrac{\\sqrt2}{2} \\Leftrightarrow \\sin x=\\sin\\dfrac{\\pi}{4}.$$<br>- Phương trình $(\\ast)$ có nghiệm $\\left[\\begin{array}{l}x=\\dfrac{\\pi}{4}+k2\\pi\\\\x=\\pi -\\dfrac{\\pi}{4}+k2\\pi\\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l}x=\\dfrac{\\pi}{4}+k2\\pi\\\\x=\\dfrac{3\\pi}{4}+k2\\pi\\end{array}\\right.$ ($k \\in \\mathbb{Z}$).<br>- Với nghiệm $x=\\dfrac{\\pi}{4}+k2\\pi$, để $x&gt;0$ thì $k \\geq 0$. Suy ra nghiệm dương nhỏ nhất là $x=\\dfrac{\\pi}{4}+0\\cdot 2\\pi=\\dfrac{\\pi}{4}$.<br>Với nghiệm $x=\\dfrac{3\\pi}{4}+k2\\pi$, để $x&gt;0$ thì $k \\geq 0$. Suy ra nghiệm dương nhỏ nhất là $x=\\dfrac{3\\pi}{4}+0\\cdot 2\\pi=\\dfrac{3\\pi}{4}$.<br>Suy ra nghiệm dương nhỏ nhất của phương trình $(\\ast)$ là $x=\\dfrac{\\pi}{4}$.<br>- Để nghiệm của phương trình $(\\ast)$ thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$. <br>• [\\it TH 1.]<br>• Với nghiệm $x=\\dfrac{\\pi}{4}+k2\\pi$, ta có $$-\\dfrac{\\pi}{2} &lt; \\dfrac{\\pi}{4}+k2\\pi &lt; \\dfrac{\\pi}{2} \\Leftrightarrow -0{,}375 &lt; k &lt; 0{,}125.$$ Do $k \\in \\mathbb{Z}$ nên $k=0$.<br>Suy ra có một nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là $x=\\dfrac{\\pi}{4}$.<br>• Với nghiệm $x=\\dfrac{3\\pi}{4}+k2\\pi$, ta có $$-\\dfrac{\\pi}{2} &lt; \\dfrac{3\\pi}{4}+k2\\pi &lt; \\dfrac{\\pi}{2} \\Leftrightarrow -0{,}625 &lt; k &lt; -0{,}125.$$ Do $k \\in \\mathbb{Z}$ nên không có $k$ thỏa mãn.<br>Suy ra không có nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$. Vậy phương trình $(\\ast)$ có một nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$."
  }
];
