// =========================================================================
// KHỐI DỮ LIỆU: 1D13 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D13 = [
  {
    "id": "1D133DS1",
    "question": "Cho biểu thức $H=\\dfrac{\\sin (x-2024\\pi)+\\cos \\left(\\dfrac{\\pi}{2}-x\\right)}{\\sin (\\pi-x)+\\sin (\\pi+x)-2}$.",
    "subQuestions": [
      {
        "text": "$\\sin (\\pi-x)=\\sin x$",
        "answer": true
      },
      {
        "text": "$\\cos \\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$",
        "answer": true
      },
      {
        "text": "$\\sin (x-2024\\pi)=-\\sin x$",
        "answer": false
      },
      {
        "text": "Rút gọn biểu thức $H=0$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>Ta có $\\sin (\\pi-x)=\\sin x$.<br>- <strong>Đúng</strong>.<br>Ta có $\\cos \\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$.<br>- <strong>Sai</strong>.<br>Ta có $\\sin (x-2024\\pi)=\\sin x$.<br>- <strong>Sai</strong>.<br>$H=\\dfrac{\\sin (x-2024\\pi)+\\cos \\left(\\dfrac{\\pi}{2}-x\\right)}{\\sin (\\pi-x)+\\sin (\\pi+x)-2}=\\dfrac{\\sin x+\\sin x}{\\sin x-\\sin x-2}=-\\sin x$."
  }
];
