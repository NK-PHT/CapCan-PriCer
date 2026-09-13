// =========================================================================
// KHỐI DỮ LIỆU: 1D14 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS3.tex), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D14 = [
  {
    "id": "1D142DS1",
    "question": "Cho hàm số $f(x)=\\tan 2x-1$.",
    "subQuestions": [
      {
        "text": "Giá trị của hàm số $f(x)$ tại $x=\\dfrac{\\pi}{8}$ bằng $0$",
        "answer": true
      },
      {
        "text": "Tập xác định của hàm số $f(x)$ là $\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}\\right\\}$ ($k \\in \\mathbb{Z}$) và tập giá trị là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ là hàm số chẵn",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)$ là hàm tuần hoàn",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f\\left(\\dfrac{\\pi}{8}\\right)=\\tan\\left(2 \\cdot \\dfrac{\\pi}{8}\\right)-1=\\tan\\dfrac{\\pi}{4}-1=1-1=0$.<br>- Điều kiện xác định $2x \\ne \\dfrac{\\pi}{2}+k\\pi \\Leftrightarrow x \\ne \\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$).<br>Suy ra tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}\\right\\}$ ($k \\in \\mathbb{Z}$).<br>Do $y=\\tan 2x$ và $y=1$ có tập giá trị là $\\mathbb{R}$ nên $f(x)$ có tập giá trị là $\\mathbb{R}$.<br>- Ta có $\\forall x \\in \\mathscr{D}$ suy ra $-x \\in \\mathscr{D}$.<br>Ta có $f(-x)=\\tan(-2x)-1=-\\tan2x-1=-(\\tan2x+1)$.<br>Suy ra $f(-x) \\ne f(x)$ và $f(-x) \\ne -f(x)$.<br>Vậy hàm số $f(x)$ là hàm số không chẵn, không lẻ.<br>- Chọn $T=\\dfrac{\\pi}{2}$. Với mọi $x \\in \\mathscr{D}$, ta có <br>• $x+T \\in \\mathscr{D}$ và $x-T \\in \\mathscr{D}$;<br>• $f(x+T)=f\\left(2\\left(x+\\dfrac{\\pi}{2}\\right)\\right)-1=\\tan(2x+\\pi) -1=\\tan2x -1=f(x)$;<br>• $f(x-T)=f\\left(2\\left(x-\\dfrac{\\pi}{2}\\right)\\right) -1= \\tan(2x-\\pi) -1=\\tan2x -1 =f(x)$. Suy ra hàm số $f(x)$ là hàm số tuần hoàn."
  }
];
