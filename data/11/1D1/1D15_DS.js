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
    "explain": "<br>- Phương trình $(\\ast)$ tương đương $$2\\sin x=\\sqrt2 \\Leftrightarrow \\sin x=\\dfrac{\\sqrt2}{2} \\Leftrightarrow \\sin x=\\sin\\dfrac{\\pi}{4}.$$<br>- Phương trình $(\\ast)$ có nghiệm $\\left[\\begin{array}{l}x=\\dfrac{\\pi}{4}+k2\\pi\\\\x=\\pi -\\dfrac{\\pi}{4}+k2\\pi\\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l}x=\\dfrac{\\pi}{4}+k2\\pi\\\\x=\\dfrac{3\\pi}{4}+k2\\pi\\end{array}\\right.$ ($k \\in \\mathbb{Z}$).<br>- Với nghiệm $x=\\dfrac{\\pi}{4}+k2\\pi$, để $x&gt;0$ thì $k \\geq 0$. Suy ra nghiệm dương nhỏ nhất là $x=\\dfrac{\\pi}{4}+0\\cdot 2\\pi=\\dfrac{\\pi}{4}$.<br>Với nghiệm $x=\\dfrac{3\\pi}{4}+k2\\pi$, để $x&gt;0$ thì $k \\geq 0$. Suy ra nghiệm dương nhỏ nhất là $x=\\dfrac{3\\pi}{4}+0\\cdot 2\\pi=\\dfrac{3\\pi}{4}$.<br>Suy ra nghiệm dương nhỏ nhất của phương trình $(\\ast)$ là $x=\\dfrac{\\pi}{4}$.<br>- Để nghiệm của phương trình $(\\ast)$ thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$. <br>• [\\it TH 1.]<br>• Với nghiệm $x=\\dfrac{\\pi}{4}+k2\\pi$, ta có $$-\\dfrac{\\pi}{2} &lt; \\dfrac{\\pi}{4}+k2\\pi &lt; \\dfrac{\\pi}{2} \\Leftrightarrow -0{,}375 &lt; k &lt; 0{,}125.$$ Do $k \\in \\mathbb{Z}$ nên $k=0$.<br>Suy ra có một nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là $x=\\dfrac{\\pi}{4}$.<br>• Với nghiệm $x=\\dfrac{3\\pi}{4}+k2\\pi$, ta có $$-\\dfrac{\\pi}{2} &lt; \\dfrac{3\\pi}{4}+k2\\pi &lt; \\dfrac{\\pi}{2} \\Leftrightarrow -0{,}625 &lt; k &lt; -0{,}125.$$ Do $k \\in \\mathbb{Z}$ nên không có $k$ thỏa mãn.<br>Suy ra không có nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$. Vậy phương trình $(\\ast)$ có một nghiệm thuộc khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D153DS2",
    "question": "Cho phương trình lượng giác: $2\\sin\\left(x - \\dfrac{\\pi}{12}\\right) + \\sqrt{3} = 0$. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Phương trình tương đương $\\sin\\left(x - \\dfrac{\\pi}{12}\\right) = \\sin\\dfrac{\\pi}{3}$",
        "answer": false
      },
      {
        "text": "Phương trình có nghiệm là $x = \\dfrac{\\pi}{4} + k2\\pi$; $x = \\dfrac{7\\pi}{12} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
        "answer": false
      },
      {
        "text": "Phương trình có nghiệm âm lớn nhất bằng $-\\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Số nghiệm của phương trình trong khoảng $(-\\pi; \\pi)$ là $2$ nghiệm",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có: \\[\\begin{array}{rcl} & & 2\\sin\\left(x - \\dfrac{\\pi}{12}\\right) + \\sqrt{3} = 0\\\\ &\\Leftrightarrow & \\sin\\left(x - \\dfrac{\\pi}{12}\\right) = -\\dfrac{\\sqrt{3}}{2}\\\\ &\\Leftrightarrow & \\sin\\left(x - \\dfrac{\\pi}{12}\\right) = \\sin\\left(-\\dfrac{\\pi}{3}\\right). \\end{array}\\]<br>- Ta có: \\[\\begin{array}{rcl} & & 2\\sin\\left(x - \\dfrac{\\pi}{12}\\right) + \\sqrt{3} = 0\\\\ &\\Leftrightarrow & \\sin\\left(x - \\dfrac{\\pi}{12}\\right) = -\\dfrac{\\sqrt{3}}{2} \\\\ &\\Leftrightarrow & \\sin\\left(x - \\dfrac{\\pi}{12}\\right) = \\sin\\left(-\\dfrac{\\pi}{3}\\right) \\\\ &\\Leftrightarrow & \\left[\\begin{array}{l}x - \\dfrac{\\pi}{12} = -\\dfrac{\\pi}{3} + k2\\pi\\\\x - \\dfrac{\\pi}{12} = \\pi - \\left(-\\dfrac{\\pi}{3}\\right) + k2\\pi\\end{array}\\right. \\\\ &\\Leftrightarrow & \\left[\\begin{array}{l}x = -\\dfrac{\\pi}{4} + k2\\pi\\\\x = \\dfrac{17\\pi}{12} + k2\\pi\\end{array}\\right. \\, (k \\in \\mathbb{Z}). \\end{array}\\] Vậy phương trình có nghiệm là $x = -\\dfrac{\\pi}{4} + k2\\pi$; $x = \\dfrac{17\\pi}{12} + k2\\pi \\, (k \\in \\mathbb{Z})$.<br>- Với $x = -\\dfrac{\\pi}{4} + k2\\pi$ có nghiệm âm lớn nhất là $-\\dfrac{\\pi}{4}$ (ứng với $k=0$).<br>Với $x = \\dfrac{17\\pi}{12} + k2\\pi$ có nghiệm âm lớn nhất là $-\\dfrac{7\\pi}{12}$ (ứng với $k=-1$).<br>Vậy phương trình có nghiệm âm lớn nhất bằng $-\\dfrac{\\pi}{4}$.<br>- Vì $x\\in (-\\pi; \\pi)$ nên:<br>Với $x = -\\dfrac{\\pi}{4} + k2\\pi$ chỉ có nghiệm $-\\dfrac{\\pi}{4}$ (ứng với $k=0$) được nhận.<br>Với $x = \\dfrac{17\\pi}{12} + k2\\pi$ chỉ có nghiệm $-\\dfrac{7\\pi}{12}$ (ứng với $k=-1$) được nhận.<br>Vậy phương trình có $2$ nghiệm trong khoảng $(-\\pi; \\pi)$ là $-\\dfrac{\\pi}{4}$ và $-\\dfrac{7\\pi}{12}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D153DS3",
    "question": "Cho phương trình lượng giác $2 \\cos x=\\sqrt{3}$. Khi đó",
    "subQuestions": [
      {
        "text": "Phương trình có nghiệm $x= \\pm \\dfrac{\\pi}{6}+k 2 \\pi, (k \\in \\mathbb{Z})$",
        "answer": true
      },
      {
        "text": "Trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có $4$ nghiệm",
        "answer": false
      },
      {
        "text": "Tổng các nghiệm của phương trình trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ bằng $\\dfrac{25 \\pi}{6}$",
        "answer": true
      },
      {
        "text": "Trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có nghiệm nhỏ nhất bằng $\\dfrac{\\pi}{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- Phương trình tương đương với $\\cos x=\\dfrac{\\sqrt{3}}{2}=\\cos \\dfrac{\\pi}{6}\\Leftrightarrow x=\\pm \\dfrac{\\pi}{6}+k2\\pi, k\\in \\mathbb{Z}$.<br>- Xét <br>• $0\\le \\dfrac{\\pi}{6}+k2\\pi\\le \\dfrac{5\\pi}{2}\\Leftrightarrow -\\dfrac{1}{12}\\le k\\le \\dfrac{7}{6}$ mà $k\\in \\mathbb{Z}$ nên $k\\in \\{0;1\\}$.<br>Suy ra $x=\\dfrac{\\pi}{6}$ và $x=\\dfrac{13\\pi}{6}$.<br>• $0\\le -\\dfrac{\\pi}{6}+k2\\pi\\le \\dfrac{5\\pi}{2}\\Leftrightarrow \\dfrac{1}{12}\\le k\\le \\dfrac{4}{3}$ mà $k\\in \\mathbb{Z}$ nên $k\\in \\{1\\}$.<br>Suy ra $x=\\dfrac{11\\pi}{6}$. Vậy trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có $3$ nghiệm.<br>- Tổng các nghiệm trên đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ bằng $\\dfrac{\\pi}{6}+\\dfrac{13\\pi}{6}+\\dfrac{11\\pi}{6}=\\dfrac{25\\pi}{6}$.<br>- Trong đoạn $\\left[0 ; \\dfrac{5 \\pi}{2}\\right]$ phương trình có nghiệm nhỏ nhất bằng $\\dfrac{\\pi}{6}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
