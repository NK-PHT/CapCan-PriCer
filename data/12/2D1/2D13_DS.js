window.dungSai2D13 = [
  {
    "id": "2D131DS1",
    "question": "Một trang sách có dạng hình chữ nhật có diện tích $384$ cm$^2$. Sau khi để lề trên và lề dưới đều là $3$ cm; lề trái và lề phải là $2$ cm; phần còn lại của trang sách được in chữ. Gọi $x$ là chiều rộng của trang sách.",
    "subQuestions": [
      {
        "text": "Chiều dài của trang sách là $384-x$ (cm)",
        "answer": false
      },
      {
        "text": "Diện tích lớn nhất của trang sách được in chữ là $360$ cm$^2$",
        "answer": false
      },
      {
        "text": "Trang sách được in chữ có diện tích lớn nhất khi $x=16$ (cm)",
        "answer": true
      },
      {
        "text": "Phần diện tích để trống là $144$ cm$^2$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Chiều dài trang sách là $\\dfrac{384}{x}$ m $(x&gt;0)$.<br>- <strong>Sai</strong>. Diện tích được in chữ  $  A(x) = (x-4)\\left( \\dfrac{384}{x} - 6 \\right) = -6x+408-\\dfrac{1\\,536}{x}.  $  Miền xác định của $A(x)$ là $\\mathscr{D} = (0,+\\infty)$.<br>  Đạo hàm $A'(x) = -6+\\dfrac{1\\,536}{x^2}$.<br>  Cho $A'(x)=0$ ta được $x=16\\sqrt{2}$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Diện tích lớn nhất của trang sách được in chữ là $216$ cm$^2$.<br>- <strong>Đúng</strong>. Diện tích lớn nhất của trang sách được in chữ là $216$ cm$^2$ khi $x=16$ cm.<br>- <strong>Sai</strong>. Diện tích để trống là $384-216 = 168$ cm$^2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS2",
    "question": "Cần rào ba cạnh để cùng với bờ tường có sẵn tạo thành mảnh vườn hình chữ nhật có diện tích $200 m^2$ (hình)  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ký hiệu $x(m)$, $y(m)$ lần lượt là độ dài các cạnh của mảnh vườn vuông góc và song song với bờ tường; $L(m)$ là tổng độ dài lưới thép cần để rào mảnh vườn. Biết rằng mỗi mét lưới théo dùng để rào mảnh vườn có đơn giá $250$ nghìn đồng.",
    "subQuestions": [
      {
        "text": "$y$ được tính theo $x$ bằng công thức $y=\\dfrac{200}{x}$",
        "answer": true
      },
      {
        "text": "$L$ đạt giá trị nhỏ nhất khi $x=10$ (m)",
        "answer": true
      },
      {
        "text": "Số tiền tối thiểu để mua lưới thép rào mảnh vườn là $2{,}5$ triệu đồng",
        "answer": false
      },
      {
        "text": "$L$ được tính theo $x$ theo công thức $L=2x+\\dfrac{100}{x}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $xy=200$, do đó $y=\\dfrac{200}{x}$.<br>- <strong>Đúng</strong>. Ta có $L(x)=2x+\\dfrac{200}{x}, x&gt;0$.<br>  $L'(x)=2-\\dfrac{200}{x^2}$.<br>  $L'(x)=0 \\Leftrightarrow 2-\\dfrac{200}{x^2}=0 \\Leftrightarrow x^2=100 \\Rightarrow x=10$.<br>  Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, $L$ đạt giá trị nhỏ nhất khi $x=10$.<br>- <strong>Sai</strong>. Ta có $\\min\\limits_{x \\in (0;+\\infty)} L(x) = L(10) =40$, do đó số tiền tối thiểu để mua lưới thép là $40\\cdot250\\,000=10\\,000\\,000$ (đồng).<br>- <strong>Sai</strong>. Do $L(x)=2x+\\dfrac{200}{x}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS3",
    "question": "Xét hàm số $y=\\dfrac{x^2+x}{x-1}$ với $x\\in\\mathbb{R}\\setminus\\{1\\}$, có đồ thị là $(H)$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đó là $f'(x)=\\dfrac{x^2-2x-1}{(x-1)^2}$ với $x\\in\\mathbb{R}\\setminus\\{1\\}$",
        "answer": true
      },
      {
        "text": "Đường tiệm cận xiên của $(H)$ có phương trình là $y=x-1$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa hai điểm cực trị của $(H)$ bằng $2\\sqrt{10}$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của $f(x)$ trên khoảng $(1;+\\infty)$ là $3+2\\sqrt{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $f'(x) = \\dfrac{x^2-2x-1}{(x-1)^2}$ với $x\\in\\mathbb{R}\\setminus\\{1\\}$.<br>- <strong>Sai</strong>. Ta có $f(x) = \\dfrac{x^2+x}{x-1} = x+2 + \\dfrac{2}{x-1}$. <br>  Suy ra đường tiệm cận xiên của $(H)$ có phương trình là $y=x+2$.<br>- <strong>Đúng</strong>. Ta có $f'(x) = 0\\Leftrightarrow x^2-2x-1=0\\Leftrightarrow x=-\\sqrt{2}+1\\Rightarrow y = -2\\sqrt{2}+3 \\text{ hoặc } x=\\sqrt{2}+1\\Rightarrow y = 2\\sqrt{2}+3.$ <br>  Suy ra $(H)$ có hai điểm cực trị $A\\left(-\\sqrt{2}+1;-2\\sqrt{2}+3\\right)$ và $B\\left(\\sqrt{2}+1;2\\sqrt{2}+3\\right)$. <br>  Do đó, khoảng cách giữa hai điểm cực trị của $(H)$ là $AB = \\sqrt{\\left(2\\sqrt{2}\\right)^2 + \\left(4\\sqrt{2}\\right)^2} = 2\\sqrt{10}.$<br>- <strong>Đúng</strong>. Ta có bảng biến thiên của $f(x)$ trên $(1;+\\infty)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy giá trị nhỏ nhất của $f(x)$ trên khoảng $(1;+\\infty)$ là $3+2\\sqrt{2}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS4",
    "question": "Một chất điểm $M$ chuyển động trên một đường thẳng đi qua $O$. Để khảo sát chuyển động của $M$ người ta gắn trên đường thẳng đó một hệ trục toạ độ là $Ox$ với $O$ là điểm gốc, mỗi đơn vị trên trục tương ứng với độ dài $1$ mét. Xét trong $12$ giây đầu tiên, toạ độ $x(t)$ của $M$ tại thời điểm $t$ giây kể từ lúc bắt đầu khảo sát được cho bởi công thức $x(t) = -\\dfrac{t^3}{3}+6t^2+4$.",
    "subQuestions": [
      {
        "text": "Ban đầu $M$ ở vị trí cách $O$ một khoảng cách bằng $6$ mét",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời của $M$ tại thời điểm $t$ giây ($0\\le t\\le 12$) là $v(t) = -t^2+12t$ (mét/giây)",
        "answer": true
      },
      {
        "text": "Trong suốt $6$ giây đầu tiên, vận tốc tức thời của $M$ luôn tăng",
        "answer": true
      },
      {
        "text": "Xét trong $12$ giây đầu tiên, tính từ lúc bắt đầu khảo sát đến lúc $M$ có vận tốc tức thời lớn nhất thì $M$ đi được một quãng đường dài $148$ mét",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Ta có $x(0) = 4$. <br>  Vậy ban đầu $M$ ở vị trí cách $O$ một khoảng cách bằng $4$ mét.<br>- <strong>Đúng</strong>. Ta có $v(t) = x'(t) = -t^2+ 12t$. <br>  Vậy vận tốc tức thời của $M$ tại thời điểm $t$ giây ($0\\le t\\le 12$) là $v(t) = -t^2+12t$ (mét/giây).<br>- <strong>Đúng</strong>. Ta có $v'(t) = -2t+12$. Khi đó $v'(t) &gt; 0\\Leftrightarrow -2t+12&gt;0\\Leftrightarrow t&lt;6$. <br>  Suy ra $v(t)$ đồng biến trên $[0;6]$. <br>  Vậy trong suốt $6$ giây đầu tiên, vận tốc tức thời của $M$ luôn tăng.<br>- <strong>Sai</strong>. Ta có bảng biến thiên của $v(t)$ như sau  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra $M$ có vận tốc tức thời lớn nhất tại $t=6$. <br>  Khi đó $x(6) - x(0) = -\\dfrac{6^3}{3} + 6\\cdot 6^2 + 4 - 4= 144$. <br>  Vậy xét trong $12$ giây đầu tiên, tính từ lúc bắt đầu khảo sát đến lúc $M$ có vận tốc tức thời lớn nhất thì $M$ đi được một quãng đường dài $144$ mét.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS5",
    "question": "Cho hàm số $f(x)=\\cos 2x-x$.",
    "subQuestions": [
      {
        "text": "$f\\left(-\\dfrac{\\pi}{2}\\right)=\\dfrac{\\pi}{2}-1$; $f\\left(\\dfrac{\\pi}{2}\\right)=-\\dfrac{\\pi}{2}-1$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=2\\sin 2x-1$",
        "answer": false
      },
      {
        "text": "Phương trình $f'(x)=0$ có đúng hai nghiệm trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ là $x=-\\dfrac{\\pi}{12}$ và $x=\\dfrac{5\\pi}{12}$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ là $-\\dfrac{\\pi}{2}-1$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  $f\\left(-\\dfrac{\\pi}{2}\\right)=\\cos (-\\pi)+\\dfrac{\\pi}{2}=\\dfrac{\\pi}{2}-1$.<br> $f\\left(\\dfrac{\\pi}{2}\\right)=\\cos (\\pi)-\\dfrac{\\pi}{2}=-\\dfrac{\\pi}{2}-1$<br>- <strong>Sai</strong>.<br>  Đạo hàm của hàm số đã cho là $f'(x)=-2\\sin 2x-1$.<br>- <strong>Sai</strong>.<br>  Ta có $f'(x)=-2\\sin 2x-1=0\\Leftrightarrow \\sin 2x=-\\dfrac{1}{2}\\Leftrightarrow x=-\\dfrac{\\pi}{12}+k\\pi \\text{ hoặc } x=\\dfrac{7\\pi}{12}+k\\pi, k\\in \\mathbb{Z}$.<br>  Vì $x\\in \\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ nên $x\\in \\left\\{-\\dfrac{\\pi}{12};-\\dfrac{5\\pi}{12}\\right\\}$.<br>- <strong>Đúng</strong>.<br>  Ta có $f\\left(-\\dfrac{\\pi}{2}\\right)=\\dfrac{\\pi}{2}-1$.<br>  $f\\left(\\dfrac{\\pi}{2}\\right)=-\\dfrac{\\pi}{2}-1$.<br>  $f\\left(-\\dfrac{\\pi}{12}\\right)=\\dfrac{\\pi}{12}+\\dfrac{\\sqrt{3}}{2}$.<br>  $f\\left(-\\dfrac{5\\pi}{12}\\right)=\\dfrac{5\\pi}{12}-\\dfrac{\\sqrt{3}}{2}$.<br>  Vậy giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ là $-\\dfrac{\\pi}{2}-1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS6",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$, có đồ thị $f(x)$ như hình vẽ.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(3) &lt; f(2)$",
        "answer": true
      },
      {
        "text": "Hàm số có $2$ điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số có giá trị lớn nhất bằng $3$ trên đoạn $[0;2]$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-1;2)$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số nghịch biến trên khoảng $(2;+\\infty)$ nên $f(2)&gt;f(3)$.<br>- Hàm số có $2$ điểm cực trị là $x=0$, $x=2$.<br>- Hàm số có giá trị lớn nhất bằng $3$ trên đoạn $[0;2]$.<br>- Hàm số đồng biến trên khoảng $(0;2)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS7",
    "question": "Cho hàm số $y=2^x+x+1$.",
    "subQuestions": [
      {
        "text": "Giá trị của hàm số tại $x=0$ là $ 2 $",
        "answer": true
      },
      {
        "text": "Tập xác định của hàm số là $\\mathscr{D}=(0 ;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đạo hàm $y'=2^x+1$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $[0 ; 1]$ bằng $ 4 $",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có với $ x=0 $, $ y=2^0+0+1=2 $.<br>- <strong>Sai</strong>. Tập xác định của hàm số là $ \\mathscr{D}=\\mathbb{R} $.<br>- <strong>Sai</strong>. Ta có $ y'=2^x\\ln 2+1 $.<br>- <strong>Đúng</strong>. Do $ y'=2^x\\ln 2+1&gt;0 $, $ \\forall x \\in [0;1] $ nên hàm số đồng biến trên $ (0;1) $.<br>  Khi đó $ \\max\\limits_{[0;1]}f(x)=f(1)=2^1+1+1=4 $.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS8",
    "question": "Cho hàm số $y=f(x)=x^3-3x-2$.",
    "subQuestions": [
      {
        "text": "Hàm số đạt cực tiểu tại $x=1$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-1;1)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên đoạn $[-1;1]$ bằng $-4$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $y=f(2x)$ trên đoạn $\\left[-\\dfrac{1}{2};\\dfrac{1}{2}\\right]$ bằng $-4$",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số có đạo hàm $f'(x) = 3x^2 - 3$.<br>  Giải phương trình $f'(x)=0$, ta có $x=1$ và $x=-1$.<br>   Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_043.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số đạt cực tiểu tại $x=1$.<br>- Trên khoảng $(-1;1)$, ta có $f'(x) &lt; 0$ nên hàm số nghịch biến trên khoảng $(-1;1)$.<br>- Giá trị lớn nhất của hàm số trên đoạn $[-1;1]$ bằng $0$.<br>- Xét $g(x) = f(2x) = 8x^3 - 6x - 2$ trên đoạn $\\left[-\\dfrac{1}{2};\\dfrac{1}{2}\\right]$. <br>  Đạo hàm của hàm số $g(x)$ là $g'(x)=24x^2-6$.<br>  giải phương trình $g'(x)=0$, ta có $x=-\\dfrac{1}{2}$ và $x=\\dfrac{1}{2}$.<br>  Ta có $g\\left(-\\dfrac{1}{2}\\right) = 0$ và $g\\left(\\dfrac{1}{2}\\right) = -4$. <br> Vậy giá trị nhỏ nhất của $g(x)$ trên đoạn $\\left[-\\dfrac{1}{2};\\dfrac{1}{2}\\right]$ là $-4$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS9",
    "question": "Dùng một dây thép dài $60$ m uốn thành một khung có dạng như hình vẽ. Biết phần dưới là hình chữ nhật và phía trên là một tam giác đều.  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_044.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Chu vi của khung thép $3x + 2y = 60$",
        "answer": true
      },
      {
        "text": "Khi $x = \\dfrac{60}{6 - \\sqrt{3}}$ thì khung có diện tích lớn nhất",
        "answer": true
      },
      {
        "text": "Tổng diện tích của khung là $S = \\dfrac{\\sqrt{3} - 6}{4} x^2 + 30x$",
        "answer": true
      },
      {
        "text": "Diện tích phần khung hình chữ nhật là $\\left(30 - \\dfrac{3}{2}x\\right)^2$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D1/im2D1/2D13_tikz_045.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Chu vi của khung thép $3x + 2y = 60$.<br>- Diện tích của khung là $\\dfrac{\\sqrt{3}}{4}x^2 + x \\cdot \\dfrac{60-3x}{2}=\\dfrac{\\sqrt{3}-6}{4}x^2+30x$ (cm$^2$).<br>  Xét hàm số $f(x)=\\dfrac{\\sqrt{3}-6}{4}x^2+30x$ với $0&lt;x&lt;20$.<br>  Ta có $f(x)$ đạt giá trị lớn nhất khi $x=-\\dfrac{b}{2a}=\\dfrac{60}{6-\\sqrt{3}}$.<br>- Tổng diện tích của khung là $S=\\dfrac{\\sqrt{3}-6}{4}x^2+30x$.<br>- Diện tích phần khung hình chữ nhật là $x y =x \\cdot (\\dfrac{60-3x}{2})= 30x-\\dfrac{3}{2}x^2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS10",
    "question": "Cho hàm số $y=f(x)=x^4-2x^2+2$. Xét các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên $(-\\infty ;-1)$ và $(1;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực đại tại $x=0$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên $(0;1)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $(-1;1)$ bằng $2$",
        "answer": true
      }
    ],
    "explain": "Xét hàm số $y=f(x)=x^4-2x^2+2$, ta có  <br>- Tập xác định $\\mathbb{R}$.<br>- Đạo hàm $f'(x)=4x^3-4x$.<br>- $f'(x)=0\\Leftrightarrow 4x^3-4x=0\\Leftrightarrow x=0 \\text{ hoặc } x=1 \\text{ hoặc } x=-1.$<br>- Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_051.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Từ bảng biến thiên, ta thấy hàm số nghịch biến trên khoảng $(-\\infty ;-1)$ và đồng biến trên khoảng $(1;+\\infty)$.<br>- Từ bảng biến thiên, ta thấy hàm số đạt cực đại tại $x=0$.<br>- Từ bảng biến thiên, ta thấy hàm số nghịch biến trên $(0;1)$.<br>- Từ bảng biến thiên, ta thấy giá trị lớn nhất của hàm số trên $(-1;1)$ bằng $2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS11",
    "question": "Cho hàm số $y=x+\\sqrt{9-x^2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định $\\mathscr{D}=[-3;3]$",
        "answer": true
      },
      {
        "text": "Hàm số có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-3;0)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số là $3\\sqrt{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Điều kiện $9-x^2 \\ge 0 \\Leftrightarrow -3 \\le x \\le 3$.<br>  Hàm số có tập xác định $\\mathscr{D}=[-3;3]$.<br>- $y'=1-\\dfrac{x}{\\sqrt{9-x^2}}$.<br>  Ta có $y'=0 \\Leftrightarrow 1=\\dfrac{x}{\\sqrt{9-x^2}}$<br>$\\Leftrightarrow x=\\sqrt{9-x^2}$<br>$\\Leftrightarrow 9-x^2=x^2 \\text{ và } x \\ge 0$<br>$\\Leftrightarrow x\\ge 0 \\text{ và } 9-2x^2=0$<br>$\\Leftrightarrow x=\\dfrac{3\\sqrt{2}}{2}.$  Ta có bảng biến thiên   <br><img src=\"data/12/2D1/im2D1/2D13_tikz_057.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số có $1$ điểm cực trị.<br>- Dựa vào bảng biến thiên, hàm số đồng biến trên khoảng $(-3;0)$.<br>- Dựa vào bảng biến thiên, giá trị lớn nhất của hàm số là $3\\sqrt{2}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS12",
    "question": "Cho hàm số $y=f(x)=x^3-6 x^2+9x-1$. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số $f(x)$ là $f'(x)=3 x^2-12 x+9$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(3 ;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực đại tại điểm $x=1$ và giá trị cực đại của hàm số bằng $3$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[2; 5]$ bằng $10$",
        "answer": false
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$ và $f'(x)=3x^2-12x+9$.<br>  Xét $f'(x)=0\\Leftrightarrow 3x^2-12x+9=0\\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>  Ta có $\\lim\\limits_{x \\to -\\infty} f(x) = -\\infty$ và $\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$.<br>  Bàng biến thiên   <br><img src=\"data/12/2D1/im2D1/2D13_tikz_061.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Từ bảng biến thiên ta có  <br>- <strong>Đúng</strong>. Đạo hàm của hàm số $f(x)$ là $f'(x)=3 x^2-12 x+9$.<br>- <strong>Sai</strong>. Hàm số nghịch biến trên khoảng $(3 ;+\\infty)$.<br>- <strong>Đúng</strong>. Hàm số đạt cực đại tại điểm $x=1$ và giá trị cực đại của hàm số bằng $3$.<br>- <strong>Sai</strong>. Ta có $f(2)=1$; $f(3)=-1$ và $f(5)=19$. Do đó giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[2; 5]$ bằng $19$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS13",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có đồ thị như hình vẽ.<br><img src=\"data/12/2D1/im2D1/2D13_tikz_069.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đạt cực tiểu tại $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(0;2)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng $-2$",
        "answer": false
      },
      {
        "text": "Tổng giá trị cực đại và giá trị cực tiểu của hàm số bằng $4$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.  Hàm số đạt cực tiểu tại $x=2$.<br>- <strong>Đúng</strong>.  Hàm số nghịch biến trên khoảng $(0;2)$.<br>- <strong>Sai</strong>.  Giá trị lớn nhất của hàm số trên đoạn $[0;2]$ bằng $2$.<br>- <strong>Sai</strong>.  Tổng giá trị cực đại và giá trị cực tiểu của hàm số bằng $2-2=0$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS14",
    "question": "Cho hàm số đa thức bậc ba $y = ax^3 + bx^2 + cx + d$ có đồ thị là đường cong trong hình vẽ bên.<br><img src=\"data/12/2D1/im2D1/2D13_tikz_072.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có hai điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(1;5)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên khoảng $(0;+\\infty)$ bằng $5$",
        "answer": false
      },
      {
        "text": "$a + b + c + d = 5$",
        "answer": true
      }
    ],
    "explain": "<br>- Dựa và đồ thị, hàm số có $2$ điểm cực trị là $x=1$ và $x=3$.<br>- Hàm số đồng biến trên khoảng $(-\\infty;1)$, $(3;+\\infty)$ và nghịch biến trên khoảng $(1;3)$.<br>- Ta có $\\lim\\limits_{x\\to +\\infty} y=+\\infty$ nên hàm số không có giá trị lớn nhất của hàm số trên khoảng $(0;+\\infty)$.<br>- Ta có $f(1)=a+b+c+d$, dựa cò đồ thị $f(1)=5$. Suy ra $a + b + c + d = 5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS15",
    "question": "Cho hàm số $y=\\dfrac{x+3}{x-2}$  . Xét tính đúng sai của mỗi mệnh đề sau",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên mỗi khoảng $(-\\infty;2)$, $(2;+\\infty)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có đường tiệm cận đứng là $x=2$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số cắt trục tung tại điểm $A\\left(0;-\\dfrac{3}{2}\\right)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên đoạn $[-2;1]$ bằng $-4$",
        "answer": true
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{2\\}$.<br>  Ta có $y'=\\dfrac{-5}{(x-2)^2}&lt;0, \\forall x\\in \\mathscr{D}$.  <br>- Do $y'&lt;0,\\ \\forall x\\in \\mathscr{D}$ nên hàm số đồng biến trên mỗi khoảng $(-\\infty;2)$, $(2;+\\infty)$.<br>- Ta có $\\lim\\limits_{x\\to 2^+}f(x)=\\lim\\limits_{x\\to 2^+}\\dfrac{x+3}{x-2}=+\\infty$ vì $\\lim\\limits_{x\\to 2^+}(x+3)=5&gt;0 \\text{ và } \\lim\\limits_{x\\to 2^+}(x-2)=0 \\text{ và } x-2&gt;0 \\ (\\text{vì} \\ x\\to 2^+ \\Rightarrow x&gt;2).$<br>  Suy ra $x=2$ là tiệm cận đứng của đồ thị hàm số.<br>- Thay $x=0$ vào hàm số $y=\\dfrac{x+3}{x-2}$ ta có  \\[y=\\dfrac{0+3}{0-2}=-\\dfrac{3}{2}.\\]  Suy ra đồ thị hàm số cắt trục tung tại điểm $A\\left(0;-\\dfrac{3}{2}\\right)$.<br>- Do hàm số đồng biển trên $[-2;1]$ nên giá trị lớn nhất của hàm số trên đoạn $[-2;1]$ là  \\[y(1)=\\dfrac{1+3}{1-2}=-4.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS16",
    "question": "Cho hàm số $f(x) = -x^3 + 3x^2 + 2$.",
    "subQuestions": [
      {
        "text": "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số là $\\sqrt{5}$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $y = f(x) = -x^3 + 3x^2 + 2$ trên đoạn $\\left[-2;1\\right]$ bằng $2$",
        "answer": true
      },
      {
        "text": "Điểm cực tiểu của hàm số là $x = 2$",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(0;2)$",
        "answer": true
      }
    ],
    "explain": "Ta có $f'(x)=-3x^2+6x$; $f'(x)=0\\Leftrightarrow x=0\\in [-2;1] \\text{ hoặc } x=2\\notin [-2;1].$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_092.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, hàm số đạt cực trị tại $A(0;2)$, $B(2;6)$.<br>- Ta có $AB=\\sqrt{(2-0)^2+(6-2)^2}=2\\sqrt{5}$.<br>- Ta có $f(-2) = 22$; $f(0)= 2$; $f(1)= 4$.<br>  Vậy $\\min\\limits_{[-2;1]} f(x)=2$ tại $x=0$.<br>- Dựa vào bảng biến thiên, hàm số đạt cực tiểu tại $x=0$.<br>- Dựa vào bảng biến thiên, hàm số đồng biến trên khoảng $(0;2)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS17",
    "question": "Người ta bơm xăng vào bình xăng của một xe ô tô, biết rằng thể tích $V$ (lít) của lượng xăng trong bình xăng được tính theo thời gian bơm xăng $t$ (phút) được cho bởi công thức  \\[V(t)=300\\left(t^2-t^3\\right)+4\\text{ với }0\\le t\\le0{,}5.\\]  Gọi $V'(t)$ là tốc độ tăng thể tích tại thời điểm $t$, với $0\\le t\\le0{,}5$.",
    "subQuestions": [
      {
        "text": "Lượng xăng ban đầu trong bình là $1$ lít",
        "answer": false
      },
      {
        "text": "$V'(t)=300\\left(2t-3t^2\\right)+4$, với $0\\le t\\le0{,}5$",
        "answer": false
      },
      {
        "text": "Xăng chảy vào bình xăng vào thời điểm ở giây thứ $30$ có tốc độ tăng thể tích là lớn nhất",
        "answer": false
      },
      {
        "text": "Lượng xăng lớn nhất bơm vào bình xăng là $41{,}5$ lít",
        "answer": true
      }
    ],
    "explain": "<br>- Lượng xăng ban đầu trong bình là $V(0)=4$ lít.<br>- Ta có $V'(t)=300\\left(2t-3t^2\\right)$, với $0\\le t\\le0{,}5$.<br>- Ta có $V''(t)=300(2-6t)$, $V''(t)=0\\Leftrightarrow t=\\dfrac{1}{6}$.<br>  Bảng biến thiên của $V'(t)$ như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_094.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy tại thời điểm $t=\\dfrac{1}{6}$ (phút)$=10$ (giây) thì tốc độ tăng thể tích là lớn nhất.<br>- Ta có $V'(t)=300t(2-3t)&gt;0$, $\\forall t\\in[0;0{,}5]$ nên $V(t)$ đồng biến trên đoạn $[0;0{,}5]$.<br>  Suy ra lượng xăng lớn nhất bơm vào bình xăng là $V(0{,}5)=41{,}5$ lít.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS18",
    "question": "Xét hàm số $y=f(x)=\\dfrac{x^2+x-1}{x-1}$ trên nửa khoảng $(1; 4]$.",
    "subQuestions": [
      {
        "text": "$f\\left(\\dfrac{1}{2}\\right) &lt; f\\left(\\dfrac{3}{2}\\right) &lt; f\\left(\\dfrac{5}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt giá trị nhỏ nhất tại điểm $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số đạt giá trị lớn nhất tại điểm $x=4$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên nửa khoàng ($1; 4]$ bằng $5$",
        "answer": true
      }
    ],
    "explain": "<br>- {\\bf Sai} <br>  Ta có $f\\left(\\dfrac{1}{2}\\right)=\\dfrac{1}{2}=0{,}5$; $f\\left(\\dfrac{3}{2}\\right)=\\dfrac{11}{2}=5{,}5$; $f\\left(\\dfrac{5}{2}\\right)=\\dfrac{31}{6}\\approx 5{,}5$.<br>  Do đó $f\\left(\\dfrac{1}{2}\\right) &lt; f\\left(\\dfrac{5}{2}\\right) &lt; f\\left(\\dfrac{3}{2}\\right)$.<br>- {\\bf Đúng}<br>  $y'=\\dfrac{x^2-2x}{(x-1)^2},\\forall x\\neq 1$; $y'=0\\Leftrightarrow x^2-2x=0\\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_103.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên trên nừa khoảng $(1; 4]$, ta thấy hàm số đạt giá trị nhỏ nhất tại điểm $x=2$.<br>- {\\bf Sai} <br>  Dựa vào bảng biến thiên trên nừa khoảng $(1; 4]$, ta thấy hàm số không đạt giá trị lớn nhất tại điểm $x=4$.<br>- {\\bf Đúng} <br>  Dựa vào bảng biến thiên trên nừa khoảng $(1; 4]$, ta thấy giá trị nhỏ nhất của hàm số là $5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS19",
    "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có bảng biến thiên như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D13_tikz_106.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên khoảng $(7;+\\infty)$",
        "answer": true
      },
      {
        "text": "$f(2)&lt;f(3)$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực tiểu tại điểm $x=3$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $[5;8]$ bằng $-18$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Từ bảng biến thiên, ta thấy hàm số đồng biến trên khoảng $(1;3)$ và $(7;+\\infty)$.<br>- <strong>Đúng</strong>.<br>  Do hàm số đồng biến trên khoảng $(1;3)$ nên $2&lt;3$ thì $f(2)&lt;f(3)$.<br>- <strong>Sai</strong>.<br>  Từ bảng biến thiên, ta có hàm số đạt cực đại tại $x=3$.<br>- <strong>Đúng</strong>.<br>  Trên đoạn $[5;8]$, giá trị nhỏ nhất của hàm số là $-18$, đạt tại $x=7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS20",
    "question": "Một chất điểm chuyển động trên đường thẳng có quãng đường đi được $s$ (tính bằng mét) theo thời gian $t$ (tính bằng giây) được biểu thị bởi công thức $s(t)=4t-\\ln(1+t)$, $t\\geq 0$.",
    "subQuestions": [
      {
        "text": "Sau 5 giây, quãng đường di chuyển của chất điểm là $s=20$ (mét)",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời tại thời điểm $t$ của chất điểm là $v(t)=1+s'(t)$",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời tại thời điểm $t=2$ giây là $v(2)=\\dfrac{11}{3}$ (m/s)",
        "answer": true
      },
      {
        "text": "Vận tốc luôn giảm theo thời gian",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $s(5)=20-\\ln 6$.<br>- Ta có $v(t)=s'(t)=4-\\dfrac{1}{1+t}$.<br>- Vận tốc tức thời tại thời điểm $t=2$ là $v(2)=4-\\dfrac{1}{1+2}=\\dfrac{11}{3}$ (m/s).<br>- Ta có $v'(t)=\\dfrac{1}{(1+t)^2}&gt;0,~\\forall t&gt;0$. Vậy hàm $v(t)$ là hàm đồng biến trên $(0;+\\infty)$ nên vận tốc của chất điểm tăng theo thời gian.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS21",
    "question": "Công ty $X$ chuyên sản xuất một loại sản phẩm, bộ phận sản xuất ước tính rằng với $q$ sản phẩm được sản xuất trong một tháng thì tổng chi phí sẽ là $C(q)=8q^2+40 q+1300$ (nghìn đồng) và mỗi sản phẩm công ty bán với giá $P(q)=1400-2q$ (nghìn đồng).",
    "subQuestions": [
      {
        "text": "Chi phí mỗi tháng công ty phải bỏ ra để sản xuất $50$ sản phẩm là $23400$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Lợi nhuận bán được $q$ sản phẩm là $F(q)=-10q^2+1360q-1300$ (nghìn đồng)",
        "answer": true
      },
      {
        "text": "Lợi nhuận cao nhất trong một tháng của công ty là hơn $44000$ (nghìn đồng)",
        "answer": true
      },
      {
        "text": "Nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44200$ đến $44840$ (nghìn đồng)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Chi phí mỗi tháng công ty phải bỏ ra để sản xuất $50$ sản phẩm là  \\[C(50)=8\\cdot 50^2+40\\cdot 50+1300=23300\\, (\\text{nghìn đồng}).\\]<br>- <strong>Đúng</strong>.<br>  Doanh thu khi bán $q$ sản phẩm là   \\[R(q)=q\\cdot P(q)=q\\cdot (1400-2q)=1400q-2q^2.\\]  Lợi nhuận khi bán được $q$ sản phẩm là   $F(q)=R(q)-C(q) =(1400-2q^2)-(8q^2+40 q+1300)$<br>$=-10q^2+1360q-1300\\, (\\text{nghìn đồng}).$<br>- <strong>Đúng</strong>.<br>  Ta có $F(q)$ là hàm số bậc hai có hệ số $a=-10&lt;0$ nên đạt giá trị lớn nhất tại \\[q=-\\dfrac{b}{2a}=-\\dfrac{1360}{2\\cdot (-10)}=68.\\]  Khi đó $F(68)=-10\\cdot 68^2+1360\\cdot 68-1300=44940$ (nghìn đồng).<br>- <strong>Sai</strong>.<br>  Với $q=60$ ta có $F(60)=-10\\cdot 60^2+1360\\cdot 60-1300=44300$ (nghìn đồng).<br>  Với $q=60$ ta có $F(70)=-10\\cdot 70^2+1360\\cdot 70-1300=44900$ (nghìn đồng).<br>  Vậy nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44300$ đến $44900$ (nghìn đồng).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS22",
    "question": "Cho hàm số $f(x)=\\sin2x-x$.",
    "subQuestions": [
      {
        "text": "$f(0)=0;f\\left(\\dfrac{\\pi }{2}\\right)=-\\dfrac{\\pi }{2}$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=\\cos2x-1$",
        "answer": false
      },
      {
        "text": "Nghiệm của phương trình $f'(x)=0$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\pi }{6}$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của $f(x)$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi }{6}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $f(0)=\\sin0-0=0$; $f\\left(\\dfrac{\\pi }{2}\\right)=\\sin\\pi -\\dfrac{\\pi }{2}=-\\dfrac{\\pi }{2}$.<br>- Ta có $f'(x)=(\\sin2x)'-x'=2\\cos2x-1$.<br>- $f'(x)=0\\Rightarrow \\cos2x=\\dfrac{1}{2}\\Rightarrow x=\\pm \\dfrac{\\pi }{6}+k\\pi $.<br>  Do đó, nghiệm của phương trình $f'(x)=0$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\pi }{6}$.<br>- Ta có $f(0)=0$; $f\\left(\\dfrac{\\pi }{2}\\right)=-\\dfrac{\\pi }{2}$; $f\\left(\\dfrac{\\pi }{6}\\right)=\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi }{6}$.<br>  Do đó, giá trị lớn nhất của $f(x)$ trên đoạn $\\left[0;\\dfrac{\\pi }{2}\\right]$ là $\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi }{6}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS20",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_Cum_lien_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "Hàm số có hệ số $a&lt;0$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đi qua hai điểm $(1;2)$, $(3;4)$",
        "answer": true
      },
      {
        "text": "$f'(x)=0$ tại các giá trị $x=2$, $x=4$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $[2;4]$ bằng $\\dfrac{7}{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- Từ bảng biến thiên, ta có $\\displaystyle \\lim_{x \\to +\\infty} f(x)=-\\infty \\Rightarrow a &lt; 0$.<br>- Đồ thị hàm số có hai điểm cực trị $A(1;2)$ và $B(3;4)$ nên đi qua hai điểm $(1;2)$ và $(3;4)$.<br>- Dựa vào bảng biến thiên, ta thấy $f'(x)=0 \\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>- Ta có $y'=f'(x)=3ax^2+2bx+c$. <br>  Vì đồ thị hàm số có hai điểm cực trị $A(1;2)$ và $B(3;4)$ nên  $f'(1)=0 \\text{ và } f(1)=2 \\text{ và } f'(3)=0 \\text{ và } f(3)=4 \\Leftrightarrow 3a+2b+c=0 \\text{ và } a+b+c+d=2 \\text{ và } 27a+6b+c=0 \\text{ và } 27a+9b+3c+d=4 \\Leftrightarrow a=-\\dfrac{1}{2} \\text{ và } b=3 \\text{ và } c=-\\dfrac{9}{2} \\text{ và } d=4.$  $\\Rightarrow f(x)=-\\dfrac{1}{2}x^3+3x^2-\\dfrac{9}{2}x+4$. <br>  Trên đoạn $[2;4]$, ta tính được $f(2)=3$, $f(3)=4$, $f(4)=2$. <br>  $\\Rightarrow \\displaystyle \\min_{[2;4]} f(x)=2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS2",
    "question": "Lợi nhuận thu được $P$ (nghìn USD) của một công ty khi dùng số tiền $x$ (nghìn USD) chi cho quảng cáo được cho bởi công thức $P(x) = -\\dfrac{1}{10}x^3 + 6x^2 + 400$ với $x \\ge 0$.",
    "subQuestions": [
      {
        "text": "Lợi nhuận của công ty tăng khi số tiền chi cho quảng cáo tăng",
        "answer": false
      },
      {
        "text": "Có hai phương án giúp công ty có thể thu được lợi nhuận bằng $800$ nghìn USD",
        "answer": true
      },
      {
        "text": "Hàm số $P = P(x)$ có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Lợi nhuận tối đa mà công ty thu được bằng $3{,}6$ triệu USD",
        "answer": true
      }
    ],
    "explain": "Ta có $P'(x) = -\\dfrac{3}{10}x^2 + 12x=0 \\Leftrightarrow x=0 \\text{ hoặc } x=40.$<br>  Ta có bảng biến thiên:  <br><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Khi $x &gt; 40$ thì lợi nhuận giảm.<br>- Xét phương trình $P(x)=800 \\Leftrightarrow -\\dfrac{1}{10}x^3 + 6x^2 + 400=800 \\Leftrightarrow x\\approx 58{,}84 \\text{ hoặc } x \\approx 8{,}84.$<br>  Vậy có $2$ phương án giúp công ty có thể thu được lợi nhuận bằng $800$ nghìn USD.<br>- Dựa vào bảng biến thiên ở trên, ta thấy hàm số $P=P(x)$ có $1$ điểm cực trị.<br>- Dựa vào bảng biến thiên, $\\max\\limits_{[0;+\\infty)} P(x) = P(40) = 3600$ (nghìn USD) $= 3{,}6$ (triệu USD).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS23",
    "question": "Bạn An làm đèn lồng bằng cách dùng một sợi dây đồng dài $28$ dm cắt thành ba đoạn để uốn làm khung đèn. Đoạn thứ nhất uốn thành hình vuông $ABCD$ có cạnh bằng $x$ (dm) để làm đáy, hai đoạn còn lại có độ dài bằng nhau uốn thành các đường gấp khúc $ASC$ và $BSD$. Khung đèn sau khi hoàn thiện có hình dạng là một hình chóp tứ giác đều $S.ABCD$ và bề mặt ngoài của đèn được dán giấy màu để trang trí, không dán mặt đáy (<em>xem các mối nối, dán là không đáng kể</em>).",
    "subQuestions": [
      {
        "text": "Độ dài cạnh bên của khung đèn bằng $(7 - x)$ dm với $0 &lt; x &lt; 7$",
        "answer": true
      },
      {
        "text": "Khi $x = 4$ thì độ dài đường cao của khung đèn là $1$ dm",
        "answer": true
      },
      {
        "text": "Khi các cạnh bằng nhau thì diện tích giấy màu cần dùng là $14\\sqrt{3}$ dm$^2$",
        "answer": false
      },
      {
        "text": "Thể tích phần không gian của đèn lồng lớn nhất khi $x \\approx 3{,}25$ dm",
        "answer": true
      }
    ],
    "explain": "<br><div style=\"display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;margin:8px auto;\"><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__006.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__007.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"></div>  Khối chóp tứ giác đều có $4$ cạnh đáy bằng $x$ và $4$ cạnh bên bằng $l$. <br>  Tổng chiều dài dây: $4x + 4l = 28 \\Rightarrow l = 7 - x$. <br>  Chiều cao khối chóp: $h = \\sqrt{l^2 - \\left(\\dfrac{x\\sqrt{2}}{2}\\right)^2} = \\sqrt{(7-x)^2 - \\dfrac{x^2}{2}}$.  <br>- Do $l = 7 - x &gt; 0 \\Rightarrow 0 &lt; x &lt; 7$.<br>- Thay $x = 4 \\Rightarrow h = \\sqrt{3^2 - \\dfrac{4^2}{2}} = 1$ dm.<br>- Vì các cạnh bằng nhau nên $x = 7 - x \\Leftrightarrow x = 3{,}5$. <br>  Diện tích giấy dán ($4$ mặt bên) là $S = 4 \\cdot \\dfrac{x^2\\sqrt{3}}{4} =\\dfrac{49\\sqrt{3}}{4}$ (dm$^2$).<br>- Thể tích đèn: $V = \\dfrac{1}{3}x^2\\sqrt{(7-x)^2 - \\dfrac{x^2}{2}} = \\dfrac{1}{3}\\sqrt{\\dfrac{x^6}{2} - 14x^5 + 49x^4}$. <br>  Xét hàm số $f(x) = \\dfrac{1}{2}x^6 - 14x^5 + 49x^4$ trên $(0;7)$. <br>  Ta có $f'(x) = x^3(3x^2 - 70x + 196) = 0 \\Rightarrow x= \\dfrac{35 - \\sqrt{637}}{3} \\approx 3{,}25 \\in (0;7)$. <br>  <br><img src=\"data/12/2D1/im2D13/loc8_TT_KSCL_THPT_Le__008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên, ta thấy $V$ đạt giá trị lớn nhất tại $x \\approx 3{,}25$ dm.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS22",
    "question": "Nhà ông $A$ cần làm một bể chứa nước có dạng khối hộp chữ nhật không nắp, có đáy là hình chữ nhật và chiều dài gấp ba lần chiều rộng, khối hộp tương ứng có thể tích bằng $1\\,152$ (dm$^3$). Giả sử bề dày của thành bể và đáy bể là không đáng kể. Giá thuê công nhân để làm bể là $400\\,000$ (đồng/m$^2$). Gọi $x$ là chiều rộng của đáy bể ($x$ là số dương và có đơn vị là dm).",
    "subQuestions": [
      {
        "text": "Chiều cao của bể nước là $\\dfrac{384}{x^2}$ (dm)",
        "answer": true
      },
      {
        "text": "Diện tích xung quanh của bể chứa nước là $\\dfrac{3\\,072}{x}$ (dm$^2$)",
        "answer": true
      },
      {
        "text": "Tổng diện tích cần làm của bể chứa nước là $\\dfrac{3\\,072}{x}+6x^2$ (dm$^2$)",
        "answer": false
      },
      {
        "text": "Chi phí thấp nhất mà ông $A$ trả cho công nhân làm bể nước theo yêu cầu là $3\\,072\\,000$ (đồng)",
        "answer": false
      }
    ],
    "explain": "<br>- Theo bài ra, ta có chiều dài của đáy bể nước là $3x$. <br> Gọi $h$ là chiều cao của bể nước (đơn vị dm), điều kiện $h&gt;0$. <br> Theo giả thiết, ta có thể tích của bể nước là $1\\,152$ (dm$^3$) hay $x \\cdot 3x \\cdot h = 1\\,152 \\Rightarrow h= \\dfrac{384}{x^2}$. <br>  Vậy chiều cao của bể là $\\dfrac{384}{x^2}$ (dm).<br>- Diện tích xung quanh của bể chứa nước là $2 \\cdot (x+3x) \\cdot \\dfrac{384}{x^2}=\\dfrac{3\\,072}{x}$ (dm$^2$).<br>- Vậy, tổng diện tích cần làm của bể chứa nước là $S(x)=\\dfrac{3\\,072}{x}+3x^2$ (dm$^2$).<br>- Ta có $S'(x) = \\dfrac{-3\\,072+6x^3}{x^2}$. <br>  $S'(x)=0 \\Rightarrow x=8$.  <br><img src=\"data/12/2D1/im2D13/loc8_TT_QV1_TT1_LVT_B_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Từ bảng biến thiên, ta suy ra $\\min\\limits_{(0; +\\infty)} S(x)=S(8)=576$ (dm$^2$) $=5{,}76$ (m$^2$). <br> Chi phí thấp nhất là $5{,}76 \\cdot 400\\,000=2\\,304\\,000$ (đồng).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS5",
    "question": "Cho hàm số $y = \\left(9-x^2\\right)^{\\tfrac{1}{3}} + \\ln(1-x)$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $(-\\infty;1)$",
        "answer": false
      },
      {
        "text": "Hàm số có đạo hàm $y' = \\dfrac{1}{3\\sqrt[3]{\\left(9-x^2\\right)^2}} - \\dfrac{1}{1-x}$",
        "answer": false
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(0;1)$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $\\left[\\dfrac{1}{4};\\dfrac{1}{2}\\right]$ bằng $\\dfrac{1}{2}\\sqrt[3]{70} - \\ln 2$",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số xác định khi và chỉ khi $9-x^2&gt;0 \\text{ và } 1-x&gt;0\\Leftrightarrow -3&lt;x&lt;3 \\text{ và } x&lt;1\\Leftrightarrow -3&lt;x&lt;1$.<br>  Vậy tập xác định của hàm số là $\\mathscr{D}=(-3;1)$.<br>- Ta có  $y = \\left(9-x^2\\right)^{\\tfrac{1}{3}} + \\ln(1-x)$<br>$\\Rightarrow y' = \\dfrac{1}{3}\\left(9-x^2\\right)^{-\\tfrac{2}{3}}\\cdot \\left(9-x^2\\right)'+\\dfrac{(1-x)'}{1-x}$<br>$= \\dfrac{-2x}{3\\sqrt[3]{\\left(9-x^2\\right)^2}}- \\dfrac{1}{1-x}.$<br>- Vì $y'= \\dfrac{-2x}{3\\sqrt[3]{\\left(9-x^2\\right)^2}}- \\dfrac{1}{1-x}$ nên với mọi $x\\in (0;1)$, ta có  \\[\\dfrac{-2x}{3\\sqrt[3]{\\left(9-x^2\\right)^2}}&lt;0 \\text{ và } -\\dfrac{1}{1-x}&lt;0\\Rightarrow y'&lt;0\\; \\forall x\\in (0;1).\\]  Vậy hàm số đã cho nghịch biến trên khoảng $(0;1)$.<br>- Vì $\\left[\\dfrac{1}{4};\\dfrac{1}{2}\\right]\\subset (0;1)$ nên hàm số đã cho nghịch biến trên $\\left[\\dfrac{1}{4};\\dfrac{1}{2}\\right]$.<br>  Vậy $\\min\\limits_{\\left[\\tfrac{1}{4};\\tfrac{1}{2}\\right]}y=y\\left(\\dfrac{1}{2}\\right)=\\dfrac{1}{2}\\sqrt[3]{70} - \\ln 2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS6",
    "question": "Một công ty robotics thử nghiệm một xe tự hành giao hàng chuyển động thẳng trên đoạn đường thí nghiệm. Quãng đường $s(t)$ (mét) mà xe đã đi được tính từ lúc bắt đầu chuyển động tới thời điểm $t$ (giây) được mô tả bởi công thức $s(t)=-\\dfrac{1}{3}t^3+4t^2+9t$.",
    "subQuestions": [
      {
        "text": "Trong khoảng thời gian $8$ giây kể từ lúc bắt đầu chuyển động, vận tốc lớn nhất của xe là $26$ (m/s)",
        "answer": false
      },
      {
        "text": "Vận tốc của xe tại thời điểm $t=3$ giây là $21$ (m/s)",
        "answer": false
      },
      {
        "text": "Quãng đường mà xe đi được trong $8$ giây đầu (làm tròn đến hàng đơn vị) là $157$ mét",
        "answer": true
      },
      {
        "text": "Trong khoảng thời gian $t \\in [0;10]$ (giây), có thời điểm xe dừng lại",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số biểu diễn vận tốc của xe là $v(t)=s'(t)=-t^2+8t+9$.<br>  Ta có $v'(t)=-2t+8$; $v'(t)=0 \\Leftrightarrow t=4$.<br>  Xét hàm số $v(t)$ trên đoạn $[0;8]$ ta có $v(0) = 9$; $v(4) = 25$; $v(8) = 9$.<br>  Suy ra vận tốc lớn nhất của xe là $25$ (m/s) tại thời điểm $t = 4$ (giây).<br>- Tại thời điểm $t=3$ (giây) thì $v(3) = -3^2+8\\cdot 3+9 = 24$ (m/s).<br>- Quãng đường mà xe đi được trong $8$ giây đầu là  \\[  s(8) = -\\dfrac{1}{3} \\cdot 8^3+4 \\cdot 8^2+9 \\cdot 8 = \\dfrac{472}{3} \\approx 157 \\ \\text{mét}.  \\]<br>- Khi xe dừng lại, ta có $v(t)=0 \\Leftrightarrow -t^2+8t+9=0 \\Leftrightarrow t=9$ hoặc $t=-1$ (loại).<br>  Thời điểm $t=9$ giây thuộc khoảng $[0;10]$.<br>  Vậy xe dừng lại vào thời điểm $9$ (giây).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS24",
    "question": "Cho hàm số $y=f(x)=x^3-3x$.",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên khoảng $(-1; 1)$",
        "answer": false
      },
      {
        "text": "Hàm số có $2$ điểm cực trị",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số $y=f(x)+2$ trên đoạn $[0; 2]$ bằng $4$",
        "answer": true
      },
      {
        "text": "Có duy nhất một giá trị của tham số thực $m$ sao cho giá trị lớn nhất của hàm số $y=\\left|f(x)+m\\right|$ trên đoạn $[0; 2]$ bằng $3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $y'=f'(x)=3x^2-3$; $y'=0 \\Leftrightarrow x=\\pm 1$.<br> Bảng biến thiên là<br><img src=\"data/12/2D1/im2D13/2D13_ex12_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên suy ra hàm số nghịch biến trên khoảng $(-1; 1)$.<br>- <strong>Đúng</strong>.<br>  Từ bảng biến thiên suy ra hàm số có $2$ điểm cực trị $x = -1$ và $x = 1$.<br>- <strong>Đúng</strong>.<br>  Xét hàm số $y = f(x) + 2$.<br> Ta có $y' = f'(x)$; $y'= 0 \\Leftrightarrow x = \\pm 1$.<br> Xét trên đoạn $[0;2]$ ta có $y(0) = f(0) + 2 = 2$; $y(1) = f(1) + 2 = 0$; $y(2) = f(2) + 2 = 4$.<br> Vậy $\\max\\limits_{[0;2]} y = 4$ tai $x = 2$.<br>- <strong>Sai</strong>.<br>  Xét hàm số $y = f(x) + m$. <br> Ta có $y'= f'(x)$, $y' = 0 \\Leftrightarrow x = \\pm 1$.<br> Xét trên đoạn $[0;2]$ ta có $\\max\\limits_{[0; 2]} (f(x)+m) = 2+m$ và $\\min\\limits_{[0; 2]} (f(x)+m) = -2+m$.<br> Khi đó $\\max\\limits_{[0; 2]} \\left|f(x)+m\\right| = \\max [|-2+m|; |2+m|]$.<br> Xét các trường hợp<br><br>- $|-2+m|=3 $ $\\Leftrightarrow m=5$ hoặc $m=-1$.<br><br>- Với $m=5 \\Rightarrow |2+m|=7$. <br> Suy ra $\\max\\limits_{[0; 2]} |f(x)+m| = 7$ (loại).<br><br>- Với $m=-1 \\Rightarrow |2+m|=1 &lt; 3$.<br> Suy ra $\\max\\limits_{[0; 2]} |f(x)+m| = 3$.<br> Vậy $m = -1$ thỏa mãn.<br><br>- $|2+m|=3$ $\\Leftrightarrow m=1$ hoặc $m=-5$.<br><br>- Với $m=1 \\Rightarrow |-2+1| = 1$.<br> Suy ra $\\max\\limits_{[0; 2]} |f(x)+m| = 3$.<br> Vậy $m=1$ thỏa mãn.<br><br>- Với $m=-5 \\Rightarrow |-2-5|= 7$.<br> Suy ra $\\max\\limits_{[0; 2]} |f(x)+m| = 7$ (loại).<br>Vậy có $2$ giá trị của $m$ là $m = 1$ và $m = -1$ thì giá trị lớn nhất của hàm số $y=|f(x)+m|$ trên đoạn $[0; 2]$ bằng $3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS25",
    "question": "Cho hàm số $f(x)=x-\\ln x$. Khi đó",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $\\mathscr {D}=(0;+\\infty)$",
        "answer": true
      },
      {
        "text": "Đạo hàm $f'(x)=1-\\dfrac{1}{x}$",
        "answer": true
      },
      {
        "text": "Phương trình $f'(x)=0$ có nghiệm duy nhất $x=1$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $\\left[ \\dfrac{1}{3}; 2\\right] $ bằng $\\dfrac{1}{3}+\\ln 3$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Điều kiện xác định $x &gt; 0$.<br> Tập xác định $\\mathscr{D}=(0;+\\infty)$.<br>- <strong>Đúng</strong>.<br>  Ta có $f'(x) = (x - \\ln x)' = 1 - \\dfrac{1}{x}$.<br>- <strong>Đúng</strong>.<br>  Xét $f'(x) = 0 \\Leftrightarrow 1 - \\dfrac{1}{x} = 0 \\Leftrightarrow x = 1$ (thoả mãn điều kiện).<br> Vậy phương trình $f'(x)=0$ có nghiệm duy nhất $x=1$.<br>- <strong>Đúng</strong>.<br>  Xét hàm số $f(x)$ trên đoạn $\\left[ \\dfrac{1}{3}; 2\\right] $ .<br> Ta có $f(1) = 1 - \\ln 1 = 1$;\t$f\\left( \\dfrac{1}{3}\\right) = \\dfrac{1}{3} +\\ln 3$; $f(2) = 2 - \\ln 2$.<br> Vậy giá trị lớn nhất của hàm số $f(x)$ trên đoạn $\\left[ \\dfrac{1}{3}; 2\\right] $ bằng $\\dfrac{1}{3} + \\ln 3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS26",
    "question": "Cho hàm số $f(x)=\\sin 2x-2x$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=\\cos 2x-2$",
        "answer": false
      },
      {
        "text": "Hàm số nghịch biến trên tập xác định",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của $f(x)$ trên đoạn $\\left[0; \\dfrac{\\pi}{6}\\right]$ là $-\\dfrac{\\pi}{3}+\\sqrt{3}$",
        "answer": false
      },
      {
        "text": "Nghiệm dương lớn nhất của phương trình $f'(x)+1=0$ trên đoạn $(-\\pi;\\pi)$ là $\\dfrac{5\\pi}{6}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $f'(x)=2\\cos 2x-2$.<br>- <strong>Đúng</strong>.<br>  $f'(x)=2\\cos 2x-2=2(\\cos 2x-1)\\le 0$ với mọi $x\\in\\mathbb{R}$ và dấu bằng chỉ xảy ra tại các điểm rời rạc nên hàm số nghịch biến trên $\\mathbb{R}$. Mệnh đề đúng.<br>- <strong>Sai</strong>.<br>  Hàm số nghịch biến nên $\\min_{[0;\\pi/6]}f=f\\left(\\dfrac{\\pi}{6}\\right)=\\sin\\dfrac{\\pi}{3}-\\dfrac{\\pi}{3}=\\dfrac{\\sqrt3}{2}-\\dfrac{\\pi}{3}$, khác $-\\dfrac{\\pi}{3}+\\sqrt3$. Mệnh đề sai.<br>- <strong>Đúng</strong>.<br>  $$\\begin{aligned} &&f'(x)+1=0\\\\ &\\Leftrightarrow& 2\\cos 2x-2+1=0\\\\ &\\Leftrightarrow& \\cos 2x=\\dfrac{1}{2}\\\\ &\\Leftrightarrow& \\left[\\begin{aligned}&2x=\\dfrac{\\pi}{3}+k2\\pi\\\\&2x= -\\dfrac{\\pi}{3}+l2\\pi\\end{aligned}\\right.\\\\ &\\Leftrightarrow& \\left[\\begin{aligned}&x=\\dfrac{\\pi}{6}+k\\pi\\\\&x= -\\dfrac{\\pi}{6}+l\\pi\\end{aligned}\\right. \\,(k,l\\in\\mathbb{Z}). \\end{aligned}$$ Với $x\\in(-\\pi;\\pi)$ nên ta có $$\\begin{aligned} &\\left[\\begin{aligned}&-\\pi&lt;\\dfrac{\\pi}{6} +k\\pi&lt;\\pi\\\\&-\\pi&lt; -\\dfrac{\\pi}{6}+l\\pi&lt;\\pi\\end{aligned}\\right.\\\\ \\Leftrightarrow& \\left[\\begin{aligned}&-\\dfrac{7}{6}&lt;k&lt;\\dfrac{5}{6} \\\\&-\\dfrac{5}{6}&lt;l &lt;\\dfrac{7}{6}\\end{aligned}\\right.,\\, (k,l\\in\\mathbb{Z}).\\\\ \\Rightarrow &\\left[\\begin{aligned}&k=0\\\\&l=\\{0;1\\}.\\end{aligned}\\right. \\end{aligned}$$ Suy ra $x=\\dfrac{\\pi}{6}$, $x=-\\dfrac{\\pi}{6}$, $x=\\dfrac{5\\pi}{6}$.<br> Nghiệm dương lớn nhất của phương trình $f'(x)+1=0$ trên khoảng $(-\\pi;\\pi)$ là $x=\\dfrac{5\\pi}{6}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS27",
    "question": "Cho hàm số $g(x) = \\sqrt{2} \\sin x + x$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $g^{\\prime}(x) = \\sqrt{2} \\cos x + 1$",
        "answer": true
      },
      {
        "text": "Trên đoạn $[0; \\pi]$, phương trình $g^{\\prime}(x) = 0$ có nghiệm là $x = \\dfrac{3 \\pi}{4}$",
        "answer": true
      },
      {
        "text": "$g(0) = 0$ và $g\\left(\\dfrac{\\pi}{4}\\right) = 1 + \\dfrac{\\pi}{4}$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $g(x)$ trên đoạn $[0; \\pi]$ là $1 + \\dfrac{3 \\pi}{4}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có đạo hàm $g^{\\prime}(x) = \\sqrt{2} \\cos x + 1$.<br>- <strong>Đúng</strong>.<br>  Xét phương trình $g^{\\prime}(x) = 0 \\Leftrightarrow \\sqrt{2} \\cos x + 1 = 0 \\Leftrightarrow \\cos x = -\\dfrac{\\sqrt{2}}{2}$.<br> Trên đoạn $[0; \\pi]$, phương trình có nghiệm duy nhất $x = \\dfrac{3 \\pi}{4}$.<br>- <strong>Đúng</strong>.<br>  Ta có $g(0) = \\sqrt{2} \\sin 0 + 0 = 0$.<br> Và $g\\left(\\dfrac{\\pi}{4}\\right) = \\sqrt{2} \\sin \\left(\\dfrac{\\pi}{4}\\right) + \\dfrac{\\pi}{4} = \\sqrt{2} \\cdot \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\pi}{4} = 1 + \\dfrac{\\pi}{4}$.<br>- <strong>Sai</strong>.<br>  Từ các ý trên, ta có bảng biến thiên hàm số $g(x)$ trên đoạn $[0; \\pi]$ như sau<br><img src=\"data/12/2D1/im2D13/2D13_ex12_036.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên ta thấy giá trị nhỏ nhất của hàm số $g(x)$ trên đoạn $[0; \\pi]$ bằng $0$ tại $x = 0$. <br> Giá trị $1 + \\dfrac{3\\pi}{4}$ thực chất là giá trị lớn nhất của hàm số trên đoạn này.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS28",
    "question": "Cho hàm số $f(x)=-\\sin x-\\dfrac{1}{2}x$.",
    "subQuestions": [
      {
        "text": "$f(2\\pi)=\\pi$",
        "answer": false
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=-\\cos x-\\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "Phương trình $ f'(x)=0$ có $2$ nghiệm phân biệt trên đoạn $[0;\\pi]$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[0;\\pi]$ là $-\\dfrac{\\pi}{2}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $f(2\\pi)=-\\sin 2\\pi-\\dfrac{1}{2}\\cdot 2\\pi=-\\pi$.<br>- <strong>Đúng</strong>.<br>  Ta có $f'(x)=-\\cos x-\\dfrac{1}{2}$.<br>- <strong>Sai</strong>.<br>  Ta có $f'(x)=0 \\Leftrightarrow-\\cos x-\\dfrac{1}{2}=0 \\Leftrightarrow \\cos x=-\\dfrac{1}{2} \\Leftrightarrow\\left[\\begin{aligned}& x=\\dfrac{2\\pi}{3}+k2\\pi \\\\& x=-\\dfrac{2\\pi}{3}+m2\\pi\\end{aligned}\\right.\\quad (k, m \\in \\mathbb{Z}).$<br> Do $x\\in[0;\\pi]$ nên ta có $k=0$.<br> Phương trình chỉ có $1$ nghiệm thuộc đoạn $[0;\\pi]$.<br>- <strong>Sai</strong>.<br>  Trên đoạn $[0;\\pi]$ thì $ f'(x)=0\\Leftrightarrow 2\\cos x+1=0\\Leftrightarrow\\cos x=-\\dfrac{1}{2}\\Leftrightarrow x=\\dfrac{2\\pi}{3}$.<br> Ta có $f(0)=0$; $f(\\pi)=-\\dfrac{\\pi}{2}$; $f\\left(\\dfrac{2\\pi}{3}\\right)=-\\sin\\dfrac{2\\pi}{3}-\\dfrac{1}{2}\\cdot\\dfrac{2\\pi}{3}=-\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi}{3}$.<br> Suy ra giá trị nhỏ nhất của hàm số $ f(x)$ trên đoạn $[0;\\pi]$ là $-\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\pi}{3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS29",
    "question": "Cho hàm số $y=f(x)=x^2\\mathrm{e}^x$.",
    "subQuestions": [
      {
        "text": "Nghiệm của phương trình $f'(x)=0$ là $x=0$ và $x=2$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $[-1;1]$ bằng $\\dfrac{1}{\\mathrm{e}}$",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(-2;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x)=\\left(x^2+2x\\right)\\mathrm{e}^x$",
        "answer": true
      }
    ],
    "explain": "Ta có $f'(x) = \\left(x^2\\right)' \\cdot \\mathrm{e}^x + x^2 \\cdot (\\mathrm{e}^x)' = 2x\\mathrm{e}^x + x^2\\mathrm{e}^x = (x^2+2x)\\mathrm{e}^x$.<br>- <strong>Sai</strong>.<br>  Ta có $f'(x)=0 \\Leftrightarrow \\left(x^2+2x\\right)\\mathrm{e}^x = 0 \\Leftrightarrow \\left[\\begin{aligned}&x=0\\\\&x=-2.\\end{aligned}\\right.$<br>- <strong>Sai</strong>.<br>  Xét trên đoạn $[-1;1]$, ta có $f'(x)=0 \\Leftrightarrow x=0 \\in [-1;1]$.<br> Ta có $f(0)=0$, $f(-1)=\\dfrac{1}{\\mathrm{e}}$, $f(1)=\\mathrm{e}$. <br> Vì $0 &lt; \\dfrac{1}{\\mathrm{e}} &lt; \\mathrm{e}$ nên $\\min\\limits_{[-1;1]}f(x)=f(0)=0$.<br>- <strong>Sai</strong>.<br>  Bảng biến thiên của hàm số $y=f(x)$<br><img src=\"data/12/2D1/im2D13/2D13_ex12_037.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Dựa vào bảng biến thiên ta thấy hàm số đồng biến trên các khoảng $(-\\infty; -2)$ và $(0; +\\infty)$.<br>- <strong>Đúng</strong>.<br>  Ta có $f'(x) = \\left(x^2+2x\\right)\\mathrm{e}^x$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS30",
    "question": "Cho hàm số $y = f(x) = (x^2 - 5x + 7)\\mathrm{e}^x$.",
    "subQuestions": [
      {
        "text": "$f(0) = 7$",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ nghịch biến trên khoảng $\\left(-\\infty; \\dfrac{5}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $f'(x) = (2x - 5)\\mathrm{e}^x$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $y = f(x)$ trên đoạn $[0;2]$ bằng $7$",
        "answer": true
      }
    ],
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br> Ta có $$\\begin{aligned} f(x) &= (x^2 - 5x + 7)\\mathrm{e}^x\\\\ \\Rightarrow f'(x)&=(2x - 5)\\mathrm{e}^x + (x^2 - 5x + 7)\\mathrm{e}^x\\\\ &=(x^2 - 3x + 2)\\mathrm{e}^x. \\end{aligned}$$<br>- <strong>Đúng</strong>.<br>  Ta có $f(0) = (0^2 - 5 \\cdot 0 + 7) \\cdot \\mathrm{e}^0 = 7 \\cdot 1 = 7$.<br>- <strong>Sai</strong>.<br>  Cho $f'(x)=0\\Leftrightarrow (x^2 - 3x + 2)\\mathrm{e}^x\\Leftrightarrow \\left[\\begin{aligned}&x=1\\\\&x=2.\\end{aligned}\\right.$<br> Bảng biến thiên<br><img src=\"data/12/2D1/im2D13/2D13_ex12_047.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên ta thấy, hàm số đã cho nghịch biến trên khoảng $(1;2)$.<br>- <strong>Sai</strong>.<br>  Ta có $f'(x)=(x^2 - 3x + 2)\\mathrm{e}^x$.<br>- <strong>Đúng</strong>.<br>  Ta có $f(0)=7$, $f(1)=3\\mathrm{e}$, $f(2)=\\mathrm{e}^2$.<br> Vậy $\\min\\limits_{[0;2]}f(x)=f(0)=7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS31",
    "question": "Cho hàm số $f(x) = 92 - 20\\ln(x+1)$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số đã cho là $\\mathscr{D} = (-1; +\\infty)$",
        "answer": true
      },
      {
        "text": "Bất phương trình $f(x) \\geq 36$ có đúng $15$ nghiệm nguyên",
        "answer": false
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(-1; +\\infty)$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số $g(x) = f(x) + 5x$ trên đoạn $[1; 4]$ bằng $107 - 40\\ln 2$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Hàm số xác định khi và chỉ khi $x+1 &gt; 0 \\Leftrightarrow x &gt; -1$.<br> Vậy tập xác định của hàm số là $\\mathscr{D} = (-1; +\\infty)$.<br>- <strong>Sai</strong>.<br>  Ta có<br>$$\\begin{aligned} & &f(x) \\geq 36\\\\ &\\Leftrightarrow& 92 - 20\\ln(x+1) \\geq 36\\\\ &\\Leftrightarrow& \\ln(x+1) \\leq 2{,}8\\\\ &\\Leftrightarrow&x+1 \\leq \\mathrm{e}^{2{,}8}\\\\ &\\Leftrightarrow&x\\leq \\mathrm{e}^{2{,}8} - 1. \\end{aligned}$$ So với điều kiện xác định $x &gt; -1$, ta được $-1 &lt; x \\leq \\mathrm{e}^{2{,}8} - 1$.<br> Vì $x \\in \\mathbb{Z}$ nên $x \\in \\{0; 1; 2; \\ldots; 15\\}$.<br> Vậy bất phương trình có $16$ nghiệm nguyên.<br>- <strong>Sai</strong>.<br>  Ta có $f'(x) = \\dfrac{-20}{x+1} &lt; 0$ với mọi $x \\in (-1; +\\infty)$.<br> Do đó hàm số nghịch biến trên khoảng $(-1; +\\infty)$.<br>- <strong>Sai</strong>.<br>  Ta có $g(x) = f(x) + 5x = 92 - 20\\ln(x+1) + 5x$ xác định trên đoạn $[1; 4]$.<br> Ta có $g'(x) = \\dfrac{-20}{x+1} + 5 = \\dfrac{5x - 15}{x+1}$.<br> Cho $g'(x) = 0 \\Leftrightarrow 5x - 15 = 0 \\Leftrightarrow x = 3 \\in [1; 4]$.<br> Ta có<br><br>- $g(1) = 97 - 20\\ln 2 \\approx 83{,}14$.<br><br>- $g(3) = 107 - 40\\ln 2 \\approx 79{,}27$.<br><br>- $g(4) = 112 - 20\\ln 5 \\approx 79{,}81$.<br>Vậy $\\max\\limits_{[1; 4]} g(x) = g(1) = 97 - 20\\ln 2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D131DS32",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm trên $\\mathbb{R}$ và đồ thị như hình vẽ.<br><br><img src=\"data/12/2D1/im2D13/2D13_ex12_058.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên khoảng $(-1;1)$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực tiểu tại điểm $x_0=1$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số nhận giá trị dương trên khoảng $(-\\infty;-1)$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $[-1;0]$ bằng $-3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Quan sát đồ thị, trên khoảng $(-1;1)$ đồ thị hàm số đi xuống từ trái sang phải nên hàm số nghịch biến trên khoảng $(-1;1)$.<br>- <strong>Đúng</strong>.<br>  Quan sát đồ thị, hàm số đạt cực tiểu tại điểm $x_0=1$.<br>- <strong>Đúng</strong>.<br>  Trên khoảng $(-\\infty;-1)$, đồ thị hàm số đi lên từ trái sang phải nên hàm số đồng biến trên khoảng này. Do đó đạo hàm $f'(x) &gt; 0$ với mọi $x \\in (-\\infty;-1)$.<br>- <strong>Sai</strong>.<br>  Quan sát đồ thị, hàm số nghịch biến trên đoạn $[-1;0]$, nên giá trị nhỏ nhất đạt tại $x=0$, tức là $\\min\\limits_{x \\in [-1;0]} f(x) = f(0)$. Dựa vào hình vẽ ta thấy đồ thị cắt với trục tung tại điểm có tung độ lớn hơn $-3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS33",
    "question": "Cho hàm số $f(x)=\\log_2 \\left(x^2-4x+8\\right)$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số $f(x)$ là $\\mathscr{D}=\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Đạo hàm $f' (x)=\\dfrac{2x-4}{x^2-4x+8}$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $f(x)$ trên $\\mathbb{R}$ bằng $1$",
        "answer": false
      },
      {
        "text": "Phương trình $f(x)=2025$ có đúng hai nghiệm",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Hàm số $f(x)=\\log_2 \\left(x^2-4x+8\\right)$ xác định khi $x^2-4x+8&gt; 0$.<br> Ta có $x^2-4x+8&gt; 0$ với mọi $x\\in \\mathbb{R}$. Vậy tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}$.<br>- <strong>Sai</strong>.<br>  Ta có \\[f' (x)=\\dfrac{\\left(x^2-4x+8\\right)^{'}}{\\left(x^2-4x+8\\right)\\ln 2}=\\dfrac{2x-4}{\\left(x^2-4x+8\\right)\\ln 2}.\\]<br>- <strong>Sai</strong>.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br> Ta có $f' (x)=\\dfrac{2x-4}{\\left(x^2-4x+8\\right)\\ln 2}=0\\Rightarrow 2x-4=0\\Rightarrow x=2$.<br> Bảng biến thiên<br><img src=\"data/12/2D1/im2D13/2D13_ex12_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Dựa vào bảng biến thiên ta thấy giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $2$<br>- <strong>Đúng</strong>.<br>  Ta có \\[f(x)=2025\\Leftrightarrow \\log_2 (x^2-4x+8)=2025\\Leftrightarrow x^2-4x+8=2^{2025}\\Leftrightarrow x^2-4x+(8-2^{2025})=0.\\] Đây là phương trình bậc hai có hệ số $a=1&gt; 0$ và $c=8-2^{2025} &lt; 0$.<br> Do $a\\cdot c &lt; 0$, suy ra phương trình bậc hai có hai nghiệm phân biệt.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS34",
    "question": "Cho hàm số $y=\\dfrac{-x^2+5x-7}{x-2}$ có đồ thị $(C)$. Xét tính đúng sai của các khẳng định sau.",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên $(-\\infty;1)$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa hai điểm cực trị của đồ thị $(C)$ bằng $2\\sqrt{5}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có tiệm cận xiên là $y=-x-3$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên $\\left[-2026;\\dfrac{3}{2}\\right]$ bằng $3$",
        "answer": true
      }
    ],
    "explain": "$y=\\dfrac{-x^2+5x-7}{x-2}=\\dfrac{-(x-2)(x-3)-1}{x-2}=-x+3-\\dfrac{1}{x-2}$.<br> $y'=-1+\\dfrac{1}{(x-2)^2}$; $y'=0\\Leftrightarrow (x-2)^2=1\\Leftrightarrow \\left[\\begin{aligned} & x=3\\\\ & x=1.\\end{aligned}\\right.$<br> Bảng biến thiên<br><img src=\"data/12/2D1/im2D13/2D13_ex12_029.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Đúng</strong>.<br>  Hàm số nghịch biến trên $(-\\infty;1)$ và $(3;+\\infty)$.<br>- <strong>Đúng</strong>.<br>  Từ bảng biến ta có hai điểm cực trị của đồ thị hàm số là $A(1;3)$; $B(3;-1)$<br> $\\Rightarrow AB=\\sqrt{4+16}=2\\sqrt{5}$.<br>- <strong>Sai</strong>.<br>  Ta có $\\lim\\limits_{x\\to +\\infty }[f(x)-(-x+3)]=\\lim\\limits_{x\\to +\\infty}\\dfrac{-3}{x-2}=0$.<br> Suy ra đường thẳng $y=-x+3$ là tiệm cận xiên của đồ thị hàm số.<br>- <strong>Đúng</strong>.<br>  Đặt $M=\\left[-2026;\\dfrac{3}{2}\\right]$.<br> Ta có $y(1)=3$; $y(-2026)=\\dfrac{4114813}{2028}$; $y\\left(\\dfrac{3}{2}\\right)=\\dfrac{7}{2}$.<br> Suy ra $\\min\\limits_{M}y=3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D132DS35",
    "question": "Cho hàm đa thức $y=f(x)$ xác định trên $\\mathbb{R}$ có bảng biến thiên như hình vẽ dưới đây.<br><img src=\"data/12/2D1/im2D13/2D13_ex12_054.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Giá trị lớn nhất của hàm số $y=f(x)$ trên khoảng $(-\\infty;2)$ là $2$",
        "answer": true
      },
      {
        "text": "$f\\left(\\cos^2 x\\right)&lt;f\\left(\\dfrac{3}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ có hai cực trị",
        "answer": true
      },
      {
        "text": "Hàm số $g(x)=2x-3f(x)$ nghịch biến trên khoảng $(0;2)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Từ bảng biến thiên, ta có $\\max\\limits_{(-\\infty;2)}f(x)=f(0)=2$.<br>- <strong>Sai</strong>.<br>  Ta có $0 \\leq \\cos^2 x \\leq 1$.<br> Trên $(0;2)$ hàm số nghịch biến nên $f\\left(\\cos^2x\\right) \\geq f(1)&gt;f\\left(\\dfrac{3}{2}\\right)$.<br>- <strong>Đúng</strong>.<br>  Từ bảng biến thiên, hàm số có hai cực trị.<br>- <strong>Sai</strong>.<br>  Ta có $g(x)=2x-3f(x)$, $g'(x)=2-3f'(x)&gt;0$, $\\forall x \\in(0;2)$ nên $g(x)$ đồng biến trên $(0;2)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS36",
    "question": "Bác Bình dự định làm một bể cá bằng kính cường lực dạng hình hộp chữ nhật không nắp. Bể có thể tích $3$ m$^3$ và có chiều dài gấp đôi chiều rộng. Chi phí làm bể gồm hai phần: phần làm đáy bể là $500$ ngàn đồng trên $1$ m$^2$ và phần làm mặt xung quanh là $400$ ngàn đồng trên $1$ m$^2$. Chi phí vận hành bể cá trong một tháng là $400$ ngàn đồng. Khi đó<br><br><img src=\"data/12/2D1/im2D13/2D13_ex12_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Chi phí vận hành bể cá trong một năm là $4{,}8$ triệu đồng",
        "answer": true
      },
      {
        "text": "Nếu chiều rộng của bể là $1$ m thì chiều cao của bể là $3$ m",
        "answer": false
      },
      {
        "text": "Nếu chiều rộng của bể là $x$ (m) thì diện tích xung quanh của bể là $\\dfrac{9}{x}$ (m$^2$)",
        "answer": true
      },
      {
        "text": "Chi phí ít nhất để làm bể là $4{,}44$ triệu đồng (<em>làm tròn đến hàng phần trăm</em>)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Chi phí vận hành bể trong $1$ năm là $400 \\cdot 12=4800$ (nghìn đồng) hay $4{,}8$ triệu đồng.<br>- <strong>Sai</strong>.<br>  Vì chiều dài gấp đôi chiều rộng nên chiều rộng của bể là $1$ m thì chiều dài của của bể là $2$ m.<br> Khi đó, chiều cao của bể là $\\dfrac{3}{1\\cdot 2}=1{,}5$ (m).<br>- <strong>Đúng</strong>.<br>  Giả sử chiều rộng của bể là $x$ (m), $x&gt;0$. Khi đó chiều dài của bể là $2x$ (m).<br> Chiều cao của bể là $\\dfrac{3}{x \\cdot 2x}=\\dfrac{3}{2x^2}$ (m).<br> Diện tích xung quanh của bể là $(x+2x) \\cdot 2 \\cdot \\dfrac{3}{2x^2}=\\dfrac{9}{x}\\, \\left(\\text{m}^2\\right)$.<br>- <strong>Đúng</strong>.<br>  Diện tích đáy bể là $2x^2\\, \\left(\\text{m}^2\\right)$.<br> Chi phí để làm bể là $500 \\cdot 2x^2+400 \\cdot \\dfrac{9}{x}=1\\,000x^2+\\dfrac{3\\,600}{x}$ (nghìn đồng).<br> Đặt $y=f(x)=1\\,000x^2+\\dfrac{3\\,600}{x}$, $x&gt;0$.<br> Ta có $f'(x)=2\\,000x-\\dfrac{3\\,600}{x^2}$, $f'(x)=0 \\Leftrightarrow x=\\sqrt[3]{1{,}8}$.<br> Bảng biến thiên<br><img src=\"data/12/2D1/im2D13/2D13_ex12_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Vậy $f(x)$ đạt giá trị nhỏ nhất khoảng $4\\,439$ (nghìn đồng) hay chi phí ít nhất để làm bể là $4{,}44$ triệu đồng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS37",
    "question": "Một công ty sau khi ra mắt sản phẩm mới đã ghi nhận lợi nhuận $P(t)$ sau $t$ tháng kinh doanh. Trong năm đầu tiên, giả sử mối liên hệ giữa lợi nhuận và thời gian kinh doanh được mô hình hóa bởi hàm số $P(t)=-t^3+12t^2+60t-50$, $0\\le t\\le 12$.",
    "subQuestions": [
      {
        "text": "Lợi nhuận của công ty tại thời điểm $t=2$ là $110$ tỷ đồng",
        "answer": true
      },
      {
        "text": "Hàm số biểu thị tốc độ tăng trưởng lợi nhuận $P' (t)=-3t^2+24t+10$",
        "answer": false
      },
      {
        "text": "Lợi nhuận của công ty đạt mức tối đa tại thời điểm $t=10$",
        "answer": true
      },
      {
        "text": "Tại thời điểm $t=4$ thì tốc độ tăng trưởng lợi nhuận là lớn nhất",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $P(2)=-2^3+12\\cdot2^2+60\\cdot2-50=110$.<br>- <strong>Sai</strong>.<br>  Ta có $P' (t)=-3t^2+24t+60$.<br>- <strong>Đúng</strong>.<br>  Ta có $P' (t)=-3t^2+24t+60=0$ $\\Leftrightarrow \\left[\\begin{aligned}&t=-2\\\\&t=10.\\end{aligned}\\right.$<br> Lập bảng biến thiên của $P(t)$ trên $\\left[0,12\\right]$ ta được<br><img src=\"data/12/2D1/im2D13/2D13_ex12_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Dựa vào bảng biến thiên ta thấy lợi nhuận tối đa là $750$ tỷ đồng tại $t=10$.<br>- <strong>Đúng</strong>.<br>  Tốc độ tăng trưởng lợi nhuận là $h(t)=P' (t)=-3t^2+24t+60$, $t \\in \\left[0,12\\right]$.<br> Ta có $h'(t)=-6t+24$, cho $h'(t)=0\\Rightarrow-6t+24=0$ $\\Leftrightarrow t=4\\in \\left[0;12\\right]$. <br> Lại có $h(0)=60$, $h(4)=108$ và $h(12)=-84$.<br> Ta thấy tốc độ tăng trưởng lợi nhuận lớn nhất là $108$ tại $t=4$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS38",
    "question": "Một xưởng mộc dùng gỗ sồi để sản xuất $5$ chiếc bàn mỗi ngày. Chi phí cho mỗi lần vận chuyển nguyên liệu là $5\\,625$ USD, chi phí để lưu trữ một đơn vị nguyên liệu là $10$ USD mỗi ngày. Giả sử lượng nguyên liệu cần thiết để sản xuất một chiếc bàn là $1$ đơn vị và lưu ý rằng trong mỗi ngày của chu kì sản xuất (thời gian giữa hai lần nhập nguyên liệu liên tiếp) thì lượng nguyên liệu lưu trữ trung bình mỗi ngày được tính bằng một nửa tổng lượng nguyên liệu tồn kho đầu kì và lượng nguyên liệu tồn kho cuối kì. Giả sử nguyên liệu được nhập về sau mỗi $x$ ngày.",
    "subQuestions": [
      {
        "text": "Một chu kì sản xuất, xưởng mộc này nhập về $5x$ đơn vị nguyên liệu",
        "answer": true
      },
      {
        "text": "Chi phí để lưu trữ nguyên liệu trong $x$ ngày của một chu kì sản xuất là $50x^2$ USD",
        "answer": false
      },
      {
        "text": "Hàm chi phí trung bình mỗi ngày trong một chu kì sản xuất là $c(x) = 50x + \\dfrac{5\\,625}{x}$",
        "answer": false
      },
      {
        "text": "Để chi phí trung bình mỗi ngày là một chu kì sản xuất là ít nhất thì xưởng mộc nên nhập hàng sau mỗi $15$ ngày và mỗi lần nhập về $75$ đơn vị nguyên liệu",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Mỗi ngày sản xuất $5$ chiếc bàn, mỗi chiếc cần $1$ đơn vị nguyên liệu.<br> Vậy mỗi ngày tiêu thụ $5$ đơn vị nguyên liệu.<br> Chu kì sản xuất là $x$ ngày, nên tổng số nguyên liệu cần nhập là $5x$ đơn vị.<br>- <strong>Sai</strong>.<br>  Lượng nguyên liệu tồn kho đầu kì là $5x$ (nhập về).<br> Lượng tồn kho cuối kì là $0$ (dùng hết sau $x$ ngày).<br> Lượng nguyên liệu lưu trữ trung bình mỗi ngày là $\\dfrac{5x + 0}{2} = \\dfrac{5x}{2}$.<br> Chi phí lưu trữ mỗi ngày cho một đơn vị là $10$ USD.<br> Vậy chi phí lưu trữ trung bình mỗi ngày là $10 \\cdot \\dfrac{5x}{2} = 25x$ USD.<br> Tổng chi phí lưu trữ trong $x$ ngày là $25x \\cdot x = 25x^2$ USD.<br>- <strong>Sai</strong>.<br>  Tổng chi phí cho một chu kì $x$ ngày gồm chi phí vận chuyển và chi phí lưu trữ \\[C(x) = 5\\,625 + 25x^2.\\] Chi phí trung bình mỗi ngày là $p(x) = \\dfrac{C(x)}{x} = \\dfrac{5\\,625 + 25x^2}{x} = \\dfrac{5\\,625}{x} + 25x$.<br>- <strong>Đúng</strong>.<br>  Để chi phí trung bình mỗi ngày thấp nhất, áp dụng bất đẳng thức AM-GM cho hai số dương \\[p(x) \\ge 2\\sqrt{25x \\cdot \\dfrac{5\\,625}{x}} = 2\\sqrt{25 \\cdot 5\\,625} = 750.\\] Đẳng thức xảy ra khi $25x = \\dfrac{5\\,625}{x} \\Leftrightarrow x^2 = \\dfrac{5\\,625}{25} = 225 \\Leftrightarrow x = 15$.<br> Vậy xưởng nên nhập hàng sau mỗi $15$ ngày.<br> Lượng hàng nhập về mỗi lần là $5x = 5 \\cdot 15 = 75$ đơn vị nguyên liệu.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS39",
    "question": "Xét chuyển động của một tàu lượn trên đoạn đường ray có hình dạng một phần đồ thị của hàm số $y = f\\left(x\\right) = \\dfrac{135x - x^2 - x^3}{200}$ $\\left(x \\ge 0\\right)$, trong đó $x$ là khoảng cách theo phương ngang kể từ điểm $A$, $y$ là độ cao tương ứng của tàu lượn so với phương ngang $AB$. Chọn hệ trục toạ độ $Oxy$ như hình vẽ $\\left(\\text{đơn vị trên mỗi trục là } 10\\text{ m}\\right)$. <em>Các kết quả được làm tròn đến hàng đơn vị.</em>",
    "subQuestions": [
      {
        "text": "Độ dài đoạn $AB$ bằng $111\\text{ m}$",
        "answer": true
      },
      {
        "text": "Hàm số $y = f\\left(x\\right)$ đạt cực trị tại $x_0 = \\dfrac{\\sqrt{406} - 1}{3}$",
        "answer": true
      },
      {
        "text": "Độ cao lớn nhất của tàu lượn so với phương ngang $AB$ là $64\\text{ m}$",
        "answer": false
      },
      {
        "text": "Khi tàu lượn đi qua điểm $A$, tiếp tuyến của quỹ đạo tại $A$ hợp với phương ngang $AB$ một góc $\\alpha \\approx 34^\\circ$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Điểm $B$ là giao điểm của đồ thị hàm số với phần dương của trục hoành.<br> Xét phương trình hoành độ giao điểm $\\dfrac{135x - x^2 - x^3}{200} = 0 \\Rightarrow x\\left(135 - x - x^2\\right) = 0$.<br> Vì $x_B &gt; 0$ nên $x^2 + x - 135 = 0 \\Leftrightarrow x = \\dfrac{-1 + \\sqrt{541}}{2} \\approx 11{,}13$.<br> Thực tế nên độ dài đoạn $AB$ là $11{,}13 \\cdot 10 = 111{,}3$ m $\\approx 111$ m.<br>- <strong>Đúng</strong>.<br>  Ta có $y' = f'\\left(x\\right) = \\dfrac{135 - 2x - 3x^2}{200}$.<br> $y' = 0 \\Leftrightarrow -3x^2 - 2x + 135 = 0 \\Leftrightarrow \\left[\\begin{aligned}& x = \\dfrac{-1 + \\sqrt{406}}{3} \\\\ & x = \\dfrac{-1 - \\sqrt{406}}{3} \\ \\left(\\text{loại vì } x \\ge 0\\right) .\\end{aligned}\\right.$<br> Vậy hàm số đạt cực trị tại $x_0 = \\dfrac{\\sqrt{406} - 1}{3}$.<br>- <strong>Sai</strong>.<br>  Hàm số đạt cực đại tại $x_0 = \\dfrac{\\sqrt{406} - 1}{3} \\approx 6{,}38$.<br> Giá trị cực đại của hàm số là $y_{\\max} = f\\left(x_0\\right) = \\dfrac{135x_0 - x_0^2 - x_0^3}{200} \\approx 2{,}8$.<br> Độ cao lớn nhất của tàu lượn trong thực tế là $2{,}8 \\cdot 10 = 28\\text{ m}$.<br>- <strong>Đúng</strong>.<br>  Hệ số góc của tiếp tuyến tại $A$ $\\left(x=0\\right)$ là $k = f'\\left(0\\right) = \\dfrac{135}{200} = 0{,}675$.<br> Vì cả hai trục cùng có đơn vị $10\\text{ m}$ nên tỷ lệ là $\\dfrac{1}{1}$. Khi đó $\\tan \\alpha = k = 0{,}675 \\Rightarrow \\alpha \\approx 34{,}02^\\circ \\approx 34^\\circ$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS40",
    "question": "Chi phí vận hành trung bình (tình bằng triệu đồng/chuyến) của một công ty vận tải khi vận hành $x$ chuyến xe mỗi ngày được cho bởi hàm số $A(x)=0{,}2x+2+\\dfrac{500}{x}$ với $10\\le x \\le 100$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm chi phí trung bình là $A'(x)=\\dfrac{0{,}2x^2+500}{x^2}$",
        "answer": false
      },
      {
        "text": "Chi phí trung bình trên mỗi chuyến xe thấp nhất bằng $22$ triệu đồng",
        "answer": true
      },
      {
        "text": "Nếu do giới hạn về số lượng tài xế khiến công ty chỉ có thể vận hành tối đa $40$ chuyến xe mỗi ngày. Chi phí trung bình mỗi chuyến xe trong trường hợp này thấp nhất bằng $22{,}5$ triệu đồng",
        "answer": true
      },
      {
        "text": "Tổng chi phí vận hành của công ty vận tải trong một ngày thấp nhất bằng $1{,}1$ tỷ đồng",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $A'(x) =0{,}2-\\dfrac{500}{x^2}= \\dfrac{0{,}2x^2 - 500}{x^2}$.<br>- <strong>Đúng</strong>.<br>  $A'(x)=0,2-\\dfrac{500}{x^2}=0\\Leftrightarrow x=50$. Hàm nghịch biến trên $(10;50)$, đồng biến trên $(50;100)$ nên $\\min A=A(50)=22$ triệu đồng/chuyến, đạt khi vận hành $50$ chuyến.<br>- <strong>Đúng</strong>.<br>  Với $x\\in[10;40]$, $A(x)$ nghịch biến nên $\\min A=A(40)=8+2+12,5=22,5$ triệu đồng, khi vận hành $40$ chuyến.<br>- <strong>Sai</strong>.<br>  Tổng chi phí vận hành của công ty vận tải trong một ngày là $$ B(x) = x \\cdot A(x) = 0{,}2x^2 + 2x + 500 \\ \\text{(triệu đồng).} $$ Ta có $B'(x) = 0{,}4x + 2 &gt; 0$ với mọi $x \\in [10;100]$.<br> Suy ra $\\min\\limits_{[10;100]} B(x) = B(10) = 540$.<br> Vậy tổng chi phí vận hành của công ty trong một ngày thấp nhất là $540$ triệu đồng khi vận hành $10$ chuyến xe.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS41",
    "question": "Bạch Đằng sóng dậy một trời đông,<br> Cọc ngầm dựng thẳng khóa muôn dòng,<br> Nam Hán thuyền tan theo triều xuống,<br> Toàn quân giặc chết gối non sông.<br>Chiến thắng Bạch Đằng năm $938$ là đỉnh cao nghệ thuật quân sự, khi Ngô Quyền đã đoán định chính xác nhịp lên xuống của thủy triều để nhử thuyền quân Nam Hán vào sâu bên trong, rồi phản công đúng thời khắc nước rút, qua đó đánh đuổi được giặc xâm lăng ra khỏi bờ cõi.<br> Để mô hình hóa chiến thuật “ cắm cọc nước rút” ấy dưới lăng kính Giải tích, ta xét bài toán sau:<br> Xét một bãi cọc được đóng xuống bùn theo phương thẳng đứng; chiều cao mỗi cọc (tính từ mặt bùn đến đầu cọc) là $2{,}4$ m. Gọi $h(t)$ (tính bằng mét) là độ sâu mực nước tại bãi cọc (tính từ mặt bùn đến mặt nước) ở thời điểm $t$ (giờ), trong đó $t=0$ ứng với thời điểm $09:00$, ($0\\leq t\\leq 4$). Thời gian này, mực nước rút nên $h(t)$ theo quy luật $h'(t)=-0{,}25 t-0{,}05$ m/giờ. Biết rằng vào lúc $09:00$, mực nước tại bãi cọc cao hơn mặt bùn $3{,}3$ m (tức là $h(0)=3{,}3$). Khi Ngô Quyền phát lệnh phản công, ông biết rằng thuyền địch sẽ quay đầu tháo chạy và mất $12$ phút để tới bãi cọc. Ngô Quyền muốn đúng lúc thuyền địch tới bãi cọc thì đầu cọc vừa nhô lên khỏi mặt nước $0{,}5$ m. Khi đó",
    "subQuestions": [
      {
        "text": "$h(t)=3{,}3-0{,}125 t^2-0{,}05t$ m trên $\\left[0;4\\right]$",
        "answer": true
      },
      {
        "text": "Từ $09:00$ đến $10:00$, mực nước giảm đúng $0{,}19$ m",
        "answer": false
      },
      {
        "text": "Sau $149$ phút kể từ thời điểm $09:00$ (làm tròn đến hàng đơn vị của phút) thì đầu cọc vừa chạm mặt nước",
        "answer": true
      },
      {
        "text": "Ngô Quyền phải phát lệnh phản công vào lúc $10:26$ (làm tròn đến hàng đơn vị của phút)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có<br>$$\\begin{aligned} h(t)&= \\displaystyle\\int h'(t)\\, \\mathrm{d}t\\\\ &=\t\\displaystyle\\int(-0{,}25 t-0{,}05)\\, \\mathrm{d}t =-0{,}125 t^2-0{,}05 t+C. \\end{aligned}$$ Vì $ h(0)=3{,}3\\Rightarrow C=3{,}3$.<br> Vậy $ h(t)=3{,}3-0{,}125 t^2-0{,}05 t$ (m) với $t\\in [0;4]$.<br>- <strong>Sai</strong>.<br>  Xét $\\Delta h=\\left|h(1)-h(0) \\right| =\\left|(3{,}3-0{,}125 \\cdot 1^2-0{,}05 \\cdot1)-(3{,}3-0{,}125 \\cdot0^2-0{,}05 \\cdot0)\\right|=0{,}175$.<br> Vậy khoảng thời gian từ $09:00$ đến $10:00$ mực nước giảm đúng $0{,}175$ (m).<br>- <strong>Đúng</strong>.<br>  Đầu cọc vừa chạm nước khi \\[ h(t)=2{,}4\\Leftrightarrow 3{,}3-0{,}125 t^2-0{,}05 t=2{,}4 \\Leftrightarrow -0{,}125 t^2-0{,}05 t +0{,}9=0\\Leftrightarrow \\left[\\begin{aligned}&t\\approx 2{,}49\\in[0; 4]\\\\&t\\approx-2{,}89\\notin[0; 4].\\end{aligned}\\right.\\] Vậy sau $2{,}49$ giờ, tức là khoảng $149$ phút thì đầu cọc vừa chạm mặt nước.<br>- <strong>Sai</strong>.<br>  Khi thuyền địch tới bãi cọc, đầu cọc nhô lên khỏi mặt nước $0{,}5$ (m),<br> Do đó độ sâu mực nước khi ấy là $h(t)=2{,}4-0{,}5=1{,}9$ (m).<br> Ta có $h(t)=3{,}3-0{,}125 t^2-0{,}05 t=1{,}9\\Leftrightarrow -0{,}125 t^2-0{,}05 t +1{,}4=0\\Leftrightarrow \\left[\\begin{aligned}&t\\approx 3{,}15\\in[0; 4]\\\\&t\\approx-3{,}55\\notin[0; 4].\\end{aligned}\\right.$<br> Vậy khoảng $9+3{,}15 =12{,}15$, tức là thời điểm $12:09$ thì đầu cọc nhô lên khỏi mặt nước $0{,}5$ (m).<br> Do thuyền mất $12$ phút $=0{,}2$ giờ để tới bãi cọc nên thời điểm Ngô Quyền phát lệnh phản công là \\[12{,}15 - 0{,}2 = 11{,}95~\\text{giờ},\\, \\text{tức là thời điểm}~ 11:57 ~\\text{phút}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS42",
    "question": "Anh Việt có một tấm tôn hình tam giác đều $ABC$ với cạnh bằng $6$ (dm). Bên trong tấm nhôm này anh vẽ thêm tam giác đều $DEF$ sao cho hai tam giác có cùng trọng tâm, đồng thời các cạnh tương ứng song song nhau. Anh Việt muốn làm một chậu đựng nước dạng hình chóp cụt tam giác đều với đáy nhỏ là $DEF$ và đáy lớn để hở. Anh cắt bỏ ba hình bình hành ở ba góc của tam giác $ ABC$ là $ AMDN$, $ BPEQ$, $CSFR$ (như hình vẽ). Kẻ đường cao $AH$ và gọi $O$ là trọng tâm tam giác $ABC$. Đặt $x=DN=DM$, ($0&lt;x&lt;2$).<br><img src=\"data/12/2D1/im2D13/2D13_ex12_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br><img src=\"data/12/2D1/im2D13/2D13_ex12_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$NP=QR=SM=6-2x$ (dm)",
        "answer": true
      },
      {
        "text": "$AH=3\\sqrt{3}$ (dm) và $ OA=2\\sqrt{3}$ (dm)",
        "answer": true
      },
      {
        "text": "$AD=x\\sqrt{3}$ (dm) và $ DE=6-3x$ (dm)",
        "answer": true
      },
      {
        "text": "Sau khi gập hình vuông và dùng keo dán kín các đoạn gập vào với nhau gồm $DM$ và $DN$, $EP$ với $EQ$, $FS$ với $FR$, sức chứa tối đa của chậu xấp xỉ $4{,}54$ (lít)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vì cạnh $AB=BC=CA=6$ (dm), cắt bỏ ở hai đầu một đoạn bằng cạnh của hình thoi có cạnh bằng $x$ (dm).<br> Do đó ta có $NP=QR=SM=6-2x$ (dm).<br>- <strong>Đúng</strong>.<br>  Vì $AH$ là đường cao của tam giác đều $ABC$.<br> Suy ra $AH=AB\\cdot\\dfrac{\\sqrt{3}}{2}=\\dfrac{6\\cdot\\sqrt{3}}{2}=3\\sqrt{3}$ (dm).<br> Vì $O$ là trọng tâm của tam giác đều $ABC$.<br> Suy ra $ OA=\\dfrac{2}{3}AH=\\dfrac{2}{3}\\cdot3\\sqrt{3}=2\\sqrt{3}$ (dm).<br>- <strong>Đúng</strong>.<br>  Vì $\\triangle ABC$ đều nên $AMDN$ là hình thoi cạnh $x$ (dm) và góc $\\widehat{MAN}=60^\\circ$.<br> Suy ra $AD=2\\cdot\\dfrac{x\\sqrt{3}}{2}=x\\sqrt{3}$ (dm), $DO=AO-AD =2\\sqrt{3}-x\\sqrt{3} =(2-x)\\sqrt{3}$ (dm).<br> Mà $\\triangle DEF$ đều, có $O$ là trọng tâm.<br> Suy ra $DO=\\dfrac{DE\\sqrt{3}}{3}\\Rightarrow DE= \\dfrac{3DO}{\\sqrt{3}}=3\\left(2-x\\right)=6-3x$ (dm).<br>- <strong>Đúng</strong>.<br>  Vì $DO=6-3x&gt;0\\Leftrightarrow 0&lt;x&lt;2$.<br> Theo đề bài ta có<br><br>- Diện tích đáy lớn là $S=\\dfrac{\\left(6-2x\\right)^2\\sqrt{3}}{4}=\\sqrt{3}{\\left(3-x\\right)^2}$.<br><br>- Diện tích đáy nhỏ là $S'=\\dfrac{\\left(6-3x\\right)^2\\sqrt{3}}{4}$.<br>Gọi $O'$ là trọng tâm của đáy lớn, $H$ là hình chiếu của $D$ lên $ MO'$.<br> Ta có $ MH=MO'-DO=\\dfrac{\\left(6-2x\\right)\\sqrt{3}}{3}-\\left(2-x\\right)\\sqrt{3}=\\dfrac{x\\sqrt{3}}{3}$.<br> Chiều cao của chậu là $ h=\\sqrt{DM^2-MH^2}=\\sqrt{x^2-\\left(\\dfrac{x\\sqrt{3}}{3}\\right)^2}=\\dfrac{x\\sqrt{6}}{3}$.<br> Thể tích của chậu là<br>$$\\begin{aligned} V&=\\dfrac{1}{3}h\\left(S+S'+\\sqrt{S. S'}\\right)\\\\ &= \\dfrac{1}{3}\\cdot\\dfrac{x\\sqrt{6}}{3}\\cdot\\left(\\sqrt{3}{\\left(3-x\\right)^2}+ \\dfrac{\\left(6-3x\\right)^2\\sqrt{3}}{4}+\\sqrt{\\sqrt{3}{\\left(3-x\\right)^2}\\cdot\\dfrac{\\left(6-3x\\right)^2\\sqrt{3}}{4}} \\right)\\\\ &=\\dfrac{1}{3}\\cdot\\dfrac{x\\sqrt{6}}{3}\\cdot\\dfrac{19\\sqrt{3}{x^2}-90\\sqrt{3}x+108\\sqrt{3}}{4}\\\\ &=\t\\dfrac{57\\sqrt{2}{x^3}-270\\sqrt{2}{x^2}+324\\sqrt{2}x}{36}. \\end{aligned}$$ Ta có $V'=\\dfrac{171\\sqrt{2}{x^2}-540\\sqrt{2}x+324\\sqrt{2}}{36}$.<br> Khi đó $V'=0\\Leftrightarrow171\\sqrt{2}{x^2}-540\\sqrt{2}x+324\\sqrt{2}=0 \\Leftrightarrow \\left[\\begin{aligned}& x=\\dfrac{30-6\\sqrt{6}}{19}\\approx 0{,}805\\,\\,\\,(\\text{nhận})\\\\ & x=\\dfrac{30+6\\sqrt{6}}{19}\\approx 2{,}352\\,\\,\\,(\\text{loại}).\\end{aligned}\\right.$<br> Lập bảng biến thiên hàm số $V(x)$ trên khoảng $(0;2)$.<br><img src=\"data/12/2D1/im2D13/2D13_ex12_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên suy ra thể tích lớn nhất của chậu là xấp xỉ $ 4,54$ (lít).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS43",
    "question": "Đậu đỏ là một loại thực phẩm quen thuộc trong bữa ăn của người Việt Nam. Ngoài giá trị dinh dưỡng cao, đậu đỏ còn có nhiều công dụng tuyệt vời cho sức khỏe và sắc đẹp như: chống oxy hóa, giúp cơ bắp con người khỏe mạnh, tăng cường sức khỏe cho tim mạch con người, lợi ích cho hệ tiêu hóa, bổ thận, cung cấp vitamin bổ dưỡng cho cơ thể, đào thải độc tố, giải độc, tốt cho hệ miễn dịch, giúp huyết áp ổn định, da đẹp. Cây đậu đỏ khi trồng có chiều cao $6$ cm. Khảo sát cho thấy độ cao tính bằng centimet của cây đậu đỏ tại thời điểm $t$ kể từ khi được trồng được cho bởi hàm số $h(t) = -0{,}005t^4 + bt^3 + c$ (trong đó $b$, $c \\in \\mathbb{R}$), với $t$ tính theo tuần. Giả sử $h'(t)$ là tốc độ tăng chiều cao của cây đậu đỏ sau khi trồng (đơn vị của $h'(t)$: cm/tuần). Biết $h'(5) = 5$.",
    "subQuestions": [
      {
        "text": "Hàm số $h(t)$ có công thức $h(t) = -0{,}005t^4 + 0{,}1t^3$",
        "answer": false
      },
      {
        "text": "Giai đoạn tăng trưởng của cây đậu đỏ đó kéo dài $15$ tuần",
        "answer": true
      },
      {
        "text": "Chiều cao tối đa của cây đậu đỏ đó là $90$ cm",
        "answer": false
      },
      {
        "text": "Vào thời điểm cây đậu đỏ đó phát triển nhanh nhất thì chiều cao của cây là $56$ cm",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Cây đậu đỏ khi trồng có chiều cao $6$ cm tức là $h(0)=6 \\Rightarrow c = 6$.<br>- <strong>Đúng</strong>.<br>  Với $c=6$, ta có $h(t) = -0{,}005t^4 + bt^3 + 6 \\Rightarrow h'(t) = -0{,}02t^3 + 3bt^2$.<br> Mà $h'(5) = 5 \\Rightarrow h'(5) = -0{,}02 \\cdot 5^3 + 3b \\cdot 5^2 = 5 \\Rightarrow b=0{,}1$. <br> Vậy $h(t) = -0{,}005t^4 + 0{,}1t^3 + 6$. <br> Khi đó $h'(t) = -0{,}02t^3 + 0{,}3t^2 = 0 \\Rightarrow \\left[\\begin{aligned}&t = 0\\\\&t=15.\\end{aligned}\\right.$<br> Ta có bảng biến thiên<br><img src=\"data/12/2D1/im2D13/2D13_ex12_031.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Giai đoạn tăng trưởng của cây đậu đỏ đó kéo dài $15$ tuần.<br>- <strong>Sai</strong>.<br>  Chiều cao tối đa của cây đậu đỏ đó là \\[h(15) = -0{,}005 \\cdot (15)^4 + 0{,}1 \\cdot (15)^3 + 6 = 90{,}375.\\]<br>- <strong>Đúng</strong>.<br>  Vào thời điểm cây đậu đỏ đó phát triển nhanh nhất. <br> Ta có $h''(t) = -0{,}06t^2 +0{,}6t = 0 \\Leftrightarrow \\left[\\begin{aligned}& t=0 \\\\ & t=10.\\end{aligned}\\right.$<br> Ta có bảng biến thiên<br><img src=\"data/12/2D1/im2D13/2D13_ex12_032.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Thời điểm cây đậu đỏ đó phát triển nhanh nhất là tuần thứ $10$ khi đó chiều cao cây đậu đỏ là \\[h(10) = -0{,}005 \\cdot (10)^4 +0{,}1 \\cdot (10)^3 + 6 = 56.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS44",
    "question": "Hai xạ thủ mỗi người một viên đạn bắn vào bia với xác suất bắn trúng của người thứ nhất là $0{,}9$ và của người thứ hai là $0{,}75$. Biết rằng kết quả bắn trúng hoặc không trúng bia của hai xạ thủ là độc lập với nhau.",
    "subQuestions": [
      {
        "text": "Khả năng xạ thủ thứ nhất không bắn trúng bia là $10\\%$",
        "answer": true
      },
      {
        "text": "Khả năng cả hai viên đạn đều trúng bia là $67\\%$",
        "answer": false
      },
      {
        "text": "Xác suất có đúng $1$ viên đạn bắn trúng bia là $0{,}3$",
        "answer": true
      },
      {
        "text": "Khả năng có ít nhất $1$ viên đạn bắn trúng bia là $95{,}7\\%$",
        "answer": false
      }
    ],
    "explain": "Gọi $A$ là biến cố “ Xạ thủ thứ nhất bắn trúng bia”, $\\mathrm{P}\\left(A\\right)=0{,}9$.<br> Gọi $B$ là biến cố “ Xạ thủ thứ hai bắn trúng bia”, $\\mathrm{P}\\left(B\\right)=0{,}75$.<br> Vì $A$ và $B$ là hai biến cố độc lập nên $\\overline{A}$ và $\\overline{B}$ cũng độc lập.<br> Ta có $\\mathrm{P}\\left(\\overline{A}\\right)=1-\\mathrm{P}\\left(A\\right)=1-0{,}9=0{,}1$; $\\mathrm{P}\\left(\\overline{B}\\right)=1-\\mathrm{P}\\left(B\\right)=1-0{,}75=0{,}25$.<br>- <strong>Đúng</strong>.<br>  Xác suất xạ thủ thứ nhất không trúng bia là $\\mathrm{P}\\left(\\overline{A}\\right)=0{,}1=10\\%$.<br>- <strong>Sai</strong>.<br>  Xác suất cả hai cùng trúng bia là $\\mathrm{P}\\left(A\\cap B\\right)=\\mathrm{P}\\left(A\\right)\\cdot \\mathrm{P}\\left(B\\right)=0{,}9\\cdot 0{,}75=0{,}675=67{,}5\\%$.<br>- <strong>Đúng</strong>.<br>  Biến cố có đúng $1$ viên trúng bia là $\\left(A\\cap\\overline{B}\\right)\\cup \\left(\\overline{A}\\cap B\\right)$.<br> Xác suất có đúng $1$ viên đạn bắn trúng bia là<br> $P=\\mathrm{P}\\left(A\\right)\\cdot \\mathrm{P}\\left(\\overline{B}\\right)+\\mathrm{P}\\left(\\overline{A}\\right)\\cdot \\mathrm{P}\\left(B\\right)=0{,}9\\cdot 0{,}25+0{,}1\\cdot 0{,}75=0{,}225+0{,}075=0{,}3$.<br>- <strong>Sai</strong>.<br>  Biến cố có ít nhất $1$ viên trúng bia là biến cố đối của “ Cả hai đều không trúng bia”.<br> Xác suất cần tìm<br> $\\mathrm{P}=1-\\mathrm{P}\\left(\\overline{A}\\cap\\overline{B}\\right)=1-\\left[\\mathrm{P}\\left(\\overline{A}\\right)\\cdot \\mathrm{P}\\left(\\overline{B}\\right)\\right]=1-\\left(0{,}1\\cdot 0{,}25\\right)=1-0{,}025=0{,}975=97{,}5\\%$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS45",
    "question": "Trong buổi tổng duyệt văn nghệ tại sân trường, một drone được sử dụng để ghi hình toàn cảnh. Trong $15$ giây đầu kể từ khi cất cánh, do hệ thống tự động điều chỉnh lực đẩy để tiết kiệm pin, độ cao của drone (tính bằng mét) tại thời điểm $t$ giây, được mô tả gần đúng bởi $h(t)=-0{,}05t^3+0{,}6t^2+3t$ ($0 \\le t \\le 15$). Cùng thời điểm đó, một thang nâng sân khấu bắt đầu nâng thẳng đứng từ mặt sân với vận tốc không đổi $1$ m/s.",
    "subQuestions": [
      {
        "text": "Vận tốc của drone tại thời điểm $t$ là $v(t)=-0{,}15t^2+1{,}2t+3$",
        "answer": true
      },
      {
        "text": "Drone luôn bay lên trong $12$ giây đầu",
        "answer": false
      },
      {
        "text": "Trong khoảng $0&lt;t\\le 15$, drone và thang nâng ở cùng độ cao đúng $1$ lần",
        "answer": true
      },
      {
        "text": "Độ cao lớn nhất mà drone đạt được trong $15$ giây đầu không vượt quá $39$ m",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vận tốc của drone là $v(t)=h'(t)=-0{,}15t^2+1{,}2t+3$.<br>- <strong>Sai</strong>.<br>  Drone bay lên khi và chỉ khi<br> \\[v(t)&gt;0 \\Leftrightarrow -0{,}15t^2+1{,}2t+3&gt;0 \\Leftrightarrow 0&lt;t&lt;10.\\] Suy ra drone luôn bay lên trong $10$ giây đầu.<br>- <strong>Đúng</strong>.<br>  Thang nâng từ mặt sân với vận tốc không đổi $1$ m/s suy ra độ cao của thang nâng tại thời điểm $t$ giây là $g(t)=t$ (m).<br> Drone và thang nâng cùng độ cao khi và chỉ khi<br>$$\\begin{aligned} h(t)=g(t) &\\Leftrightarrow & -0{,}05t^3+0{,}6t^2+3t=t\\\\ &\\Leftrightarrow & -0{,}05t^3+0{,}6t^2+2t=0\\\\ &\\Leftrightarrow & \\left[\\begin{aligned}&t=0 &&\\text{ (loại)}\\\\&t=6+\\sqrt{76} &&\\text{ (nhận)}\\\\&t=6-\\sqrt{76} &&\\text{ (loại)}.\\end{aligned}\\right.\\\\ \\end{aligned}$$ Vậy drone và thang nâng cùng độ cao đúng $1$ lần.<br>- <strong>Sai</strong>.<br>  Xét hàm số $h(t)=-0{,}05t^3+0{,}6t^2+3t$ liên tục trên đoạn $[0;15]$.<br> $h'(t)=0 \\Leftrightarrow -0{,}15t^2+1{,}2t+3=0 \\Leftrightarrow \\left[\\begin{aligned}&t=10 \\in (0;15)\\\\&t=-2 \\notin (0;15).\\end{aligned}\\right.$<br> $h(0)=0$, $h(10)=40$, $h(15)=11{,}25$.<br> Độ cao lớn nhất của drone trong $15$ giây đầu là $40$ m $&gt; 39$ m.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS46",
    "question": "Một công ty bất động sản $A$ có $100$ căn hộ cho thuê. Biết rằng, nếu cho thuê mỗi căn hộ với giá $3$ triệu đồng/tháng thì tất cả căn hộ đều có người thuê, và cứ mỗi lần tăng giá cho thuê mỗi căn hộ thêm $200\\,000$ đồng mỗi tháng thì có thêm $4$ căn hộ bị bỏ trống. Gọi $x,(x \\in \\mathbb{N})$ là số lần tăng giá cho thuê mỗi căn hộ của công ty $A$.",
    "subQuestions": [
      {
        "text": "Nếu giữ nguyên giá thuê mỗi căn hộ là $3$ triệu đồng một tháng thì công ty $A$ thu về $300$ triệu đồng mỗi tháng",
        "answer": true
      },
      {
        "text": "Sau $x$ lần tăng giá cho thuê mỗi căn hộ của công ty $A$, số căn hộ có người thuê là $100-4 x$",
        "answer": true
      },
      {
        "text": "Giá thuê một căn hộ của công ty $A$ là $200\\,000 x$ đồng/tháng sau $x$ lần tăng giá",
        "answer": false
      },
      {
        "text": "Công ty $A$ thu về nhiều nhất là $320$ triệu đồng/tháng",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Nếu giữ nguyên giá thuê mỗi căn hộ là $3$ triệu đồng một tháng thì công ty $A$ thu về: $3\\cdot 100=300$ (triệu đồng/tháng).<br>- <strong>Đúng</strong>.<br>  Sau $x$ lần tăng giá cho thuê mỗi căn hộ, công ty $A$ có số căn hộ bị bỏ trống là $4x$ (căn hộ). Do đó, số căn hộ có người thuê là $100-4x$.<br>- <strong>Sai</strong>.<br>  Sau $x$ lần tăng giá, giá thuê mỗi căn hộ của công ty $A$ là $3\\,000\\,000+200\\,000x$ (đồng/tháng).<br>- <strong>Đúng</strong>.<br>  Mỗi tháng, công ty $A$ thu về $$\\begin{aligned} f(x)&=(100-4x)\\cdot (3\\,000\\,000+200\\,000x)\\\\ & =-800\\,000x^2+8\\,000\\,000x+300\\,000\\,000. \\end{aligned}$$ $f'(x)=-1\\,600\\,000x+8\\,000\\,000=0\\Leftrightarrow x=5\\in[0;24]$.<br> Ta có $y(0)=300\\,000\\,000$, $y(5)=320\\,000\\,000$, $y(24)=31\\,200\\,000$.<br> Suy ra $\\max\\limits_{x \\in [0;24]}y=y(5)=320\\,000\\,000$.<br> Vậy công ty $A$ thu về nhiều nhất là $320\\,000\\,000$ đồng/tháng hay $320$ triệu đồng/tháng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D136DS47",
    "question": "Để kỷ niệm $70$ năm ngày thành lập trường THPT Việt Đức, các cựu học sinh tổ chức phát hành áo kỷ niệm gây quỹ học bổng. Giả sử doanh số (tính bằng số áo bán được) tuần theo quy luật logistic được mô hình hóa bằng hàm số $f(t)=\\dfrac{7\\,000}{1+69\\mathrm{e}^{-t}}, t \\ge 0$, trong đó thời gian $t$ được tính theo đơn vị ngày, kể từ thời điểm ngày phát hành đầu tiên (ngày 11/8/2025).",
    "subQuestions": [
      {
        "text": "Sau ba ngày kể từ thời điểm ngày phát hành đầu tiên, số áo bán ra vượt quá $2\\,000$ chiếc",
        "answer": false
      },
      {
        "text": "Tổng số áo được bán ra không vượt quá $7\\,000$ chiếc",
        "answer": true
      },
      {
        "text": "Ngay tại thời điểm ngày phát hành đầu tiên, số áo được bán ra đã đạt $100$ chiếc",
        "answer": true
      },
      {
        "text": "Đạo hàm $f'(t)$ sẽ biểu thị tốc độ phát hành. Sau $360$ giờ kể từ thời điểm phát hành đầu tiên thì tốc độ phát hành là lớn nhất",
        "answer": false
      }
    ],
    "explain": "$f(t)=\\dfrac{7\\,000}{1+69\\mathrm{e}^{- t}}, t \\ge 0 \\Rightarrow f'(t) = \\dfrac{483\\,000\\mathrm{e}^{-t}}{(1 + 69\\mathrm{e}^{-t})^2}$.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>. $f(3)\\approx1\\,578 &lt; 2\\,000$.<br>- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. $\\lim\\limits_{t\\to+\\infty} 69\\cdot \\mathrm{e}^{-t} = 0\\Rightarrow \\lim\\limits_{t\\to+\\infty}f(t)= \\dfrac{7\\,000}{1 + \\lim\\limits_{t\\to+\\infty} 69\\cdot \\mathrm{e}^{-t}} = 7\\,000.$<br>- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>. $f(0)=\\dfrac{7\\,000}{1+69\\mathrm{e}^{- 0}}=\\dfrac{7\\,000}{70}=100.$<br>- <strong>Sai</strong>.<br>  $f''(t)=0\\Leftrightarrow 69e^{-t}=1\\Leftrightarrow t=\\ln 69\\approx 4{,}23$ ngày $\\approx 101{,}6$ giờ, qua đó $f'(t)$ đạt giá trị lớn nhất. Còn $360$ giờ $=15$ ngày $\\ne \\ln 69$ nên mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
