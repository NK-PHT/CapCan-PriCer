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
    "explain": "<br>- Ta có $f\\left(\\dfrac{\\pi}{8}\\right)=\\tan\\left(2 \\cdot \\dfrac{\\pi}{8}\\right)-1=\\tan\\dfrac{\\pi}{4}-1=1-1=0$.<br>- Điều kiện xác định $2x \\ne \\dfrac{\\pi}{2}+k\\pi \\Leftrightarrow x \\ne \\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$).<br>Suy ra tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}\\right\\}$ ($k \\in \\mathbb{Z}$).<br>Do $y=\\tan 2x$ và $y=1$ có tập giá trị là $\\mathbb{R}$ nên $f(x)$ có tập giá trị là $\\mathbb{R}$.<br>- Ta có $\\forall x \\in \\mathscr{D}$ suy ra $-x \\in \\mathscr{D}$.<br>Ta có $f(-x)=\\tan(-2x)-1=-\\tan2x-1=-(\\tan2x+1)$.<br>Suy ra $f(-x) \\ne f(x)$ và $f(-x) \\ne -f(x)$.<br>Vậy hàm số $f(x)$ là hàm số không chẵn, không lẻ.<br>- Chọn $T=\\dfrac{\\pi}{2}$. Với mọi $x \\in \\mathscr{D}$, ta có <br>• $x+T \\in \\mathscr{D}$ và $x-T \\in \\mathscr{D}$;<br>• $f(x+T)=f\\left(2\\left(x+\\dfrac{\\pi}{2}\\right)\\right)-1=\\tan(2x+\\pi) -1=\\tan2x -1=f(x)$;<br>• $f(x-T)=f\\left(2\\left(x-\\dfrac{\\pi}{2}\\right)\\right) -1= \\tan(2x-\\pi) -1=\\tan2x -1 =f(x)$. Suy ra hàm số $f(x)$ là hàm số tuần hoàn.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D147DS1",
    "question": "Trong mặt phẳng tọa độ $O x y$, cho đồ thị hàm số $y=\\sin x$ trên đoạn $[-2 \\pi ; 2 \\pi]$ như hình vẽ sau <img src=\"data/11/1D1/im1D14/1D14_tikz_039.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$",
        "answer": true
      },
      {
        "text": "Trên đoạn $[-2 \\pi ; 2 \\pi]$ hàm số đã cho đạt giá trị lớn nhất bằng $0$",
        "answer": false
      },
      {
        "text": "Trên đoạn $[-2 \\pi ; 2 \\pi]$ phương trình $2 \\sin x-1=0$ có 4 nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Chu kì tuần hoàn của hàm số đã cho là $T=4 \\pi$",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào đồ thị hàm số đã đo ta thấy với $x\\in\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right) $ đồ thị có hướng đi lên từ trái qua phải. Đo đó hàm số đồng biến trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$.<br>- Dựa vào đồ thị ta thấy $-1\\le y\\le 1$. Do đó giá trị lớn nhất bằng $1$.<br>- Phương trình $2\\sin x=1\\Leftrightarrow \\sin x=\\dfrac{1}{2}$.<br>Nghiệm của phương trình trong đoạn $[-2\\pi; 2\\pi ]$ là số giao điểm của đồ thị với đường thẳng $y=\\dfrac{1}{2}$.<br>Từ đồ thị ta thấy phương trình có $4$ nghiệm phân biệt.<br>- Chu kì tuần hoàn của hàm số đã cho là $t=2\\pi$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D144DS1",
    "question": "Cho hàm số $f(x)=\\cos 2x$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho là hàm số chẵn",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đối xứng qua trục $Ox$",
        "answer": false
      },
      {
        "text": "Nghiệm của phương trình $\\cos 2x=1$ là $x=k \\pi$, $k \\in \\mathbb{Z}$",
        "answer": true
      },
      {
        "text": "Công thức $\\cos 2x=1-2 \\cos^2 x$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Hàm số $f(x)=\\cos 2x$ là hàm số chẵn.<br>- <strong>Sai</strong>. Vì $f(x)=\\cos 2x$ là hàm số chẵn nên đồ thị hàm số đối xứng qua trục $Oy$<br>- <strong>Đúng</strong>. $\\cos 2x=1\\Leftrightarrow 2x=k2\\pi\\Leftrightarrow x=k\\pi$, $k\\in\\mathbb{Z}$.<br>- <strong>Sai</strong>. $\\cos 2x=2 \\cos^2 x-1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1D144DS2",
    "question": "Cho hai hàm số $y=f(x)=\\cos x$ và $y=g(x)=\\cos\\left(x+\\dfrac{\\pi}{3}\\right)$. Xét tính đúng sai các phát biểu sau",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)=\\cos x$ là hàm số tuần hoàn",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)=\\cos x$ là hàm số chẵn",
        "answer": true
      },
      {
        "text": "Phương trình $\\cos x=1$ có họ nghiệm là $x=k\\pi$,($k \\in \\mathbb{Z}$)",
        "answer": false
      },
      {
        "text": "Phương trình $\\cos x=\\cos\\left(x+\\dfrac{\\pi}{3}\\right)$ có họ nghiệm là $x=\\dfrac{\\pi}{6}+k\\pi$,($k \\in \\mathbb{Z}$)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Hàm số $y=\\cos x$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>Ta có $\\cos(x+2\\pi)=\\cos x$. <br>Vậy $y=\\cos x$ là hàm số tuần hoàn với chu kì $T=2\\pi$.<br>- <strong>Đúng</strong>. Hàm số $y=\\cos x$ có tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>Ta có $\\cos(-x)=\\cos x$. <br>Vậy $y=\\cos x$ là hàm số chẵn.<br>- <strong>Sai</strong>. Phương trình $\\cos x=1 \\Leftrightarrow x=k2\\pi$,($k \\in \\mathbb{Z}$).<br>- <strong>Sai</strong>. Ta có \\begin{align*}\\cos x=\\cos\\left(x+\\dfrac{\\pi}{3}\\right) &\\Leftrightarrow \\left[\\begin{array}{l}x=x+\\dfrac{\\pi}{3}+k2\\pi\\\\x=-\\left(x+\\dfrac{\\pi}{3}\\right)+k2\\pi\\end{array}\\right. <br>&\\Leftrightarrow \\left[\\begin{array}{l}0x=\\dfrac{\\pi}{3}+k2\\pi \\quad \\text{(vô nghiệm)}\\\\2x=-\\dfrac{\\pi}{3}+k2\\pi\\end{array}\\right. <br>&\\Leftrightarrow 2x=-\\dfrac{\\pi}{3}+k2\\pi <br>&\\Leftrightarrow x=-\\dfrac{\\pi}{6}+k\\pi, \\quad(k \\in \\mathbb{Z}).\\end{align*} Do đó, họ nghiệm $x=\\dfrac{\\pi}{6}+k\\pi$ là sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
