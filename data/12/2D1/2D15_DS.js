window.dungSai2D15 = [
  {
    "id": "2D158DS1",
    "question": "Một chất điểm chuyển động theo phương trình $S=-t^3+9 t^2+21 t+9$ trong đó $t$ tính bằng giây $(s)$ và $S$ tính bằng mét $(m)$. Xét tính đúng sai của các khẳng định sau.",
    "subQuestions": [
      {
        "text": "$v(t)=-3 t^2+18 t+2$",
        "answer": false
      },
      {
        "text": "Vận tốc của chất điểm tại giây thứ $2$ là $45$ m/s",
        "answer": true
      },
      {
        "text": "Vận tốc của chất điểm tại thời điểm gia tốc triệt tiêu là $45$ m/s",
        "answer": false
      },
      {
        "text": "Vận tốc chuyển động đạt giá trị lớn nhất tại thời điểm $t=3$ s",
        "answer": true
      }
    ],
    "explain": "Ta có  <br>- <strong>Sai</strong> Vận tốc $v(t) = S'(t) = -3t^2 + 18t + 21$.<br>- <strong>Đúng</strong> Tại $t=2$, $v(2) = -3(2)^2 + 18(2) + 21 = -12 + 36 + 21 = 45$ m/s.<br>- <strong>Sai</strong> Gia tốc $a(t) = v'(t) = -6t + 18$.<br>   Gia tốc triệt tiêu khi $a(t) = 0 \\Leftrightarrow -6t + 18 = 0 \\Leftrightarrow t = 3$.<br>   Khi đó $v(3) = -3(3)^2 + 18(3) + 21 = -27 + 54 + 21 = 48$ m/s.<br>- <strong>Đúng</strong> Để tìm thời điểm vận tốc lớn nhất, ta xét $v'(t) = a(t) = -6t + 18 = 0 \\Leftrightarrow t = 3$.<br>   Vì $v''(t) = a'(t) = -6 &lt; 0$ nên $v(t)$ đạt cực đại tại $t=3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS2",
    "question": "Cho hàm số $y=\\dfrac{-2x^2+3x+12}{x+2}$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $y'=\\dfrac{-2x^2-8x-6}{(x+2)^2}$",
        "answer": true
      },
      {
        "text": "Tiệm cận đứng và tiệm cận xiên của đồ thị hàm số lần lượt là $x=-2$, $y=-2x+7$",
        "answer": true
      },
      {
        "text": "Bảng biến thiên của hàm số đã cho là<br>     <br><img src=\"data/12/2D1/im2D1/2D15_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": false
      },
      {
        "text": "Gọi $A$, $B$ là hai điểm cực trị của đồ thị hàm số $y=f(x)$, $O$ là gốc tọa độ. Khi đó diện tích tam giác $OAB$ bằng $6$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $y'=\\dfrac{-2x^2-8x-6}{(x+2)^2}$.<br>- Ta có $y= \\dfrac{-2x^2+3x+12}{x+2} = -2x + 7 - \\dfrac{2}{x+2}$.<br>  Vậy tiệm cận đứng là $x=-2$ và tiệm cận xiên là $y=-2x+7$.<br>- Ta có $y'=0\\Leftrightarrow -2x^2 - 8x - 6 =0\\Leftrightarrow x=-1 \\text{ hoặc } x=-3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- Gọi $A(-3;15)$ và $B(-1;7)$ là 2 điểm cực trị.<br>  Ta có $\\overrightarrow{AB}=(2;-8)\\Rightarrow AB=2\\sqrt{17}$.<br>  Phương trình đường thẳng $AB\\colon \\dfrac{x+3}{2}=\\dfrac{y-15}{-8}$ hay $AB\\colon 4x+y-3=0$.<br>  Ta có $S_{OAB}=\\dfrac{1}{2}\\cdot \\mathrm{d}[O,AB]\\cdot AB=\\dfrac{1}{2}\\cdot \\dfrac{3}{\\sqrt{17}}\\cdot 2\\sqrt{17}=3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS3",
    "question": "Cho hàm số $y=\\dfrac{x^2-2x+5}{x-1}$.",
    "subQuestions": [
      {
        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $\\left[-2;0\\right]$ bằng $-4$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có đường tiệm cận xiên là đường thẳng $y=x-1$",
        "answer": true
      },
      {
        "text": "Tâm đối xứng của đồ thị hàm số là điểm $I\\left(1;2\\right)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số không cắt trục hoành",
        "answer": true
      }
    ],
    "explain": "<br>- Sai.<br>  Tập xác định $ \\mathscr{D}=\\mathbb{R}\\setminus \\{1\\} $.<br>  $ y'=\\dfrac{x^2-2x-3}{\\left(x-1\\right)^2} $; $ y'=0\\Rightarrow x=-1\\in [-2;0] \\text{ hoặc } x=3 \\notin [-2;0]. $<br>  Ta có $ f\\left(-2\\right)=-\\dfrac{13}{3} $; $ f\\left(0\\right)=-5$; $ f\\left(-1\\right)=-4$.<br>  Suy ra giá trị nhỏ nhất của hàm số trên $\\left[-2;0\\right]$ bằng $ -5 $.<br>- Đúng.<br>  Ta có $\\lim\\limits_{x \\rightarrow+\\infty}[y - (x-1)]=\\lim\\limits_{x \\rightarrow +\\infty} \\dfrac{4}{x-1}=0$.<br>  Suy ra $ y=x-1 $ là tiệm cận xiên của đồ thị hàm số.<br>- Sai.<br>  Ta có $ \\lim \\limits_{x \\to 1^- } y=-\\infty $ nên $ x=1 $ là tiệm cận đứng.<br>  Tọa độ tâm đối xứng là nghiệm của hệ phương trình   $x=1 \\text{ và } y=x-1\\Leftrightarrow x=1 \\text{ và } y=0 \\Rightarrow I\\left(1;0\\right). $<br>- Đúng.<br>  Ta có $ x^2-2x+5&gt;0,~\\forall x\\in \\mathscr{D} $.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS4",
    "question": "Cho hàm số $f(x)=ax^3+bx^2+cx+d$ có đồ thị như hình vẽ.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đã cho nghịch biến trên $(-\\infty;1)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=0$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số cắt trục hoành tại $1$ điểm",
        "answer": true
      },
      {
        "text": "Hàm số đã cho là $y=-2x^3+3x+1$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Hàm số đã cho nghịch biến trên $(-\\infty;0)$.<br>- <strong>Đúng</strong>.<br>  Hàm số đạt cực tiểu tại $x=0$.<br>- <strong>Đúng</strong>.<br>  Đồ thị hàm số cắt trục hoành tại $1$ điểm.<br>- <strong>Sai</strong>.  Ta có $f'(x)=3ax^2+2bx+c$.<br>  Từ hình vẽ ta có hàm số $f'(0)=0 \\text{ và } f'(1)=0 \\text{ và } f(1)=2 \\text{ và } f(0)=1\\Rightarrow c=0 \\text{ và } 3a+2b+c=0 \\text{ và } a+b+c+d=2 \\text{ và } d=1\\Rightarrow a=-2 \\text{ và } b=3 \\text{ và } c=0 \\text{ và } d=1.$<br>  Vậy $y=-2x^3+3x+1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS5",
    "question": "Cho hàm số $y=x^3-3x+2$.",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có tâm đối xứng là điểm $(0;2)$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho không có cực trị",
        "answer": false
      },
      {
        "text": "Tập xác định của hàm số đã cho là $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=1$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $y'=3x^2-3$, $y''=6x$, $y''=0\\Leftrightarrow x=0$, $y(0)=2$. Khi đó điểm $(0;2)$ là tâm đối xứng của đồ thị hàm số.<br>- <strong>Sai</strong>. Ta có hàm số đã cho là hàm số bậc ba có $y'=0\\Leftrightarrow x=\\pm 1$ nên hàm số đã cho có hai điểm cực trị.<br>- <strong>Sai</strong>. Tập xác định của hàm số đã cho là $\\mathbb{R}$.<br>- <strong>Đúng</strong>. <br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra hàm số đạt cực tiểu tại $x=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS6",
    "question": "Cho hàm số $y=\\dfrac{2x+1}{x-1}$.",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên $\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm đứng là $x=1$ và tiệm cận ngang là $y=2$",
        "answer": true
      },
      {
        "text": "Tổng các giá trị lớn nhất trên đoạn $[2; 3]$ và giá trị nhỏ nhất trên đoạn $[-2;-1]$ là $\\dfrac{13}{2}$",
        "answer": false
      },
      {
        "text": "Hàm số có đồ thị như hình sau<br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br>  $y'=\\dfrac{-3}{(x-1)^2}&lt;0$ nên hàm số nghịch biến trên các khoảng $(-\\infty; 1)$ và $(1;+\\infty)$.<br>- Xét $\\lim\\limits_{x\\to1^+}\\dfrac{2x+1}{x-1}=+\\infty$ do đó $x=1$ là đường tiệm cận đứng của đồ thị hàm số.<br>  Ta có $\\lim\\limits_{x\\to -\\infty} \\dfrac{2x+1}{x-1}=2$ và $\\lim\\limits_{x\\to +\\infty} \\dfrac{2x+1}{x-1}=2$ nên $y=2$ là đường tiệm cận ngang của đồ thị hàm số.<br>- Do hàm số nghịch biến trên từng khoảng xác định nên $\\max\\limits_{[2;3]}y=y(2)=5, \\min\\limits_{[-2;-1]}y=y(-1)=\\dfrac{1}{2}.$  Suy ra $\\max\\limits_{[2;3]}y+\\min\\limits_{[-2;-1]}y=5+\\dfrac{1}{2}=\\dfrac{11}{2}$.<br>- Đồ thị hàm số đã cho là   <br><img src=\"data/12/2D1/im2D1/2D15_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS7",
    "question": "Lợi nhuận $N$ của một doanh nghiệp (triệu đồng) khi doanh nghiệp dùng số tiền $x$ để quảng cáo cho sản phẩm của doanh nghiệp đó ước tính theo công thức $N=f(x)=-0{,}1x^3+6x^2+400$, với $x \\geq 0$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm $f(x)$ là $f'(x)=-0{,}3x^2+12x+400$",
        "answer": false
      },
      {
        "text": "Khi tăng số tiền quảng cáo trong khoảng $(0; 40)$ thì lợi nhuận $N$ cũng tăng",
        "answer": true
      },
      {
        "text": "Phương án dùng số tiền quảng cáo $x$ sao cho lợi nhuận lớn nhất khi $x=40$",
        "answer": true
      },
      {
        "text": "Có hai phương án dùng số tiền đề quảng cáo sao cho lợi nhuận thu về là $800$",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số có đạo hàm là $f'(x)=-0{,}3x^2+12x$.<br>- Ta có $f'(x)=0\\Leftrightarrow x=0 \\text{ hoặc } x=40$, ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên ta thấy $f(x)$ đồng biến trên khoảng $(0;40)$ nên khi tăng số tiền quảng cáo trong khoảng từ $(0;40)$ thì lợi nhuận cũng tăng.<br>- Lợi nhuận đạt lớn nhất là $3\\,600$ khi $x=40$.<br>- Đường thẳng $y=800$ cắt đồ thị hàm số $f(x)$ tại hai điểm trong khoảng $(0;+\\infty)$ nên có hai phương án dùng số tiền để quảng cáo sao cho lợi nhuận thu về là $800$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D155DS8",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm trên $\\mathbb{R}$ và $f'(x)$ là hàm số bậc ba có đồ thị là đường cong trong hình bên.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(-\\infty;-2)$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Trên đoạn $[-3;1]$, hàm số $y=f(x)$ đạt giá trị lớn nhất bằng $f(-2)$",
        "answer": false
      },
      {
        "text": "Đồ thị của hàm số $g(x) = \\dfrac{x+2}{f'(x)}$ có tất cả $2$ đường tiệm cận",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_023.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Hàm số $y=f(x)$ nghịch biến trên khoảng $(-\\infty;-2)$.<br>- Hàm số $y=f(x)$ có một cực trị.<br>- Trên đoạn $[-3;1]$, hàm số $y=f(x)$ nghịch biến nên hàm số đạt giá trị lớn nhất bằng $f(-3)$.<br>- Ta có $f'(x)=a(x+2)^2(x-1)$.<br>  Do $f'(0)=-4\\Leftrightarrow -4a=-4\\Leftrightarrow a=1$.<br>  Vậy $f'(x)=(x+2)^2(x-1)$.<br>  Nên $g(x)=\\dfrac{x+2}{(x+2)^2(x-1)}=\\dfrac{1}{(x+2)(x-1)}$.<br>  Do $\\lim\\limits_{x\\to 1+}g(x)=+\\infty$ và $\\lim\\limits_{x\\to (-2)^-}g(x)=+\\infty$ nên  đồ thị hàm số có hai đường tiệm đứng là $x=-2$ và $x=1$.<br>  Do $\\lim\\limits_{x\\to \\pm\\infty}g(x)=0$ nên đồ thị hàm số có đường tiệm cận ngang là $y=0$.<br>  Vậy đồ thị hàm số $y=g(x)$ có $3$ đường tiệm cận.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS9",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d$ có đồ thị như hình dưới đây  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_026.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên khoảng $(-1;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đạt cực tiểu tại $x=1$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số cắt $Oy$ tại điểm có toạ độ $(0;1)$",
        "answer": true
      },
      {
        "text": "Trong 4 số $a$, $b$, $c$, $d$ có $3$ số dương",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Từ đồ thị hàm số, ta thấy trên khoảng $(-1;+\\infty)$ hàm số không đồng biến.<br>- <strong>Sai</strong>.<br>  Từ đồ thị hàm số, ta thấy hàm số đạt cực tiểu tại $x=0$.<br>- <strong>Đúng</strong>.<br>  Dựa vào đồ thị hàm số $f(x)$, ta thấy hàm số cắt trục $Oy$ tại điểm $(0;1)$.<br>- <strong>Đúng</strong>.<br>  Đồ thị hàm số đi qua điểm $(0;1)$ nên ta có $f(0)=a\\cdot 0^3+b\\cdot 0^2+c\\cdot 0+d=1\\Rightarrow d=1$.<br>  Đồ thị hàm số đi qua điểm $(-1;2)$ nên ta có $f(-1)=a\\cdot (-1)^3+b\\cdot (-1)^3+c\\cdot (-1)+d=2\\Rightarrow -a+b-c+d=2.$  Đồ thị hàm số đi qua điểm $(-2;1)$ nên ta có $f(-2)=a\\cdot (-2)^3+b\\cdot (-2)^3+c\\cdot (-2)+d=1\\Rightarrow -8a+4b-2c+d=1.$  Từ $y=ax^3+bx^2+cx+d\\Rightarrow y'=3ax^2+2bx+c$.<br>  Mặt khác, hàm số đạt cực tiểu tại $x=0$ nên $0=3\\cdot 0^2\\cdot a+2\\cdot 0.b+c\\Rightarrow c=0$. <br>  Do đó ta có hệ $-a+b-c+1=2 \\text{ và } -8a+4b-2c+1=1 \\text{ và } c=0 \\text{ và } d=1\\Rightarrow a=1 \\text{ và } b=2 \\text{ và } c=0 \\text{ và } d=1.$<br>  Vậy trong 4 số $a$, $b$, $c$, $d$ có ba số dương.<br>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS10",
    "question": "Cho hàm số $ y=x+\\dfrac{4}{x} $.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số đã cho là $ y’=1+\\dfrac{4}{x^2} $",
        "answer": false
      },
      {
        "text": "Đạo hàm của hàm số đã cho nhận giá trị âm trên các khoảng $ (-2 ; 0) \\cup(0 ; 2) $ và nhận giá trị dương trên các khoảng $ (-\\infty ;-2) \\cup(2 ;+\\infty) $",
        "answer": true
      },
      {
        "text": "Bảng biến thiên của hàm số đã cho là<br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_029.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho là<br>  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Vì $y' = 1 - \\dfrac{4}{x^2}$.<br>- <strong>Đúng</strong>. Xét dấu của đạo hàm $y'$.<br>  $y' = 0$ khi $1 - \\dfrac{4}{x^2} = 0 \\Rightarrow \\dfrac{4}{x^2} = 1 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.<br>  <strong>Xét dấu của $y'$ trên các khoảng:</strong>  <br>- Trên khoảng $(-\\infty, -2)$, chọn $x = -3$: $y' = 1 - \\dfrac{4}{9} &gt; 0$.<br>- Trên khoảng $(-2, 0)$, chọn $x = -1$: $y' = 1 - 4 &lt; 0$.<br>- Trên khoảng $(0, 2)$, chọn $x = 1$: $y' = 1 - 4 &lt; 0$.<br>- Trên khoảng $(2, +\\infty)$, chọn $x = 3$: $y' = 1 - \\dfrac{4}{9} &gt; 0$.  Vậy đạo hàm $y'$ nhận giá trị âm trên các khoảng $(-2, 0) \\cup (0, 2)$ và nhận giá trị dương trên các khoảng $(-\\infty, -2) \\cup (2, +\\infty)$. Đáp án này <strong>đúng</strong>.<br>- <strong>Đúng</strong>.<br>- <strong>Đúng</strong>.  Dựa vào bảng biến thiên, đồ thị hàm số có các đặc điểm:  <br>- Đi qua các điểm $(-2, -4)$ và $(2, 4)$.<br>- Tăng trên các khoảng $(-\\infty, -2)$ và $(2, +\\infty)$.<br>- Giảm trên các khoảng $(-2, 0)$ và $(0, 2)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS11",
    "question": "Cho hàm số $f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$ và có bảng biến thiên như hình dưới  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_033.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$f(x)$ đạt cực đại tại $x=0$",
        "answer": true
      },
      {
        "text": "$\\max\\limits_{(-\\infty ;+\\infty)} f(x)=3$",
        "answer": false
      },
      {
        "text": "$f(x)$ nghịch biến trên $(0 ;+\\infty)$",
        "answer": false
      },
      {
        "text": "Tiếp tuyến của đồ thị hàm số tại $A(0 ; 2)$ là $y=2$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Dựa vào bảng biến thiên ta thấy hàm số $ f(x) $ đạt cực đại tại $ x=0 $.<br>- <strong>Sai</strong>. Vì dựa vào bảng biên thiên ta có $ f(x)&lt;3 $, $ \\forall x \\in \\mathbb{R} $ và không tồn tại $ x \\in \\mathbb{R} $ để $ f(x)=3 $.<br>- <strong>Sai</strong>. Vì trên $ (0;+\\infty) $ hàm số không xác định tại $ x=1 $.<br>- <strong>Đúng</strong>. Ta có tại $ A(0;2) $ thì $ x_0=0 $, $ y_0=2 $, $ y'(x_0)=0 $.<br>  Khi đó phương trình tiếp tuyến của hàm số tại $ A(0;2) $ là $ y=0(x-0)+2 \\Leftrightarrow y=2 $.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS12",
    "question": "Cho hàm số $f(x)=\\dfrac{x^2-2x+6}{x+1}$",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ đồng biến trên khoảng $(2 ;+\\infty)$",
        "answer": true
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị hàm số đã cho đi qua điểm $M(4 ; 1)$",
        "answer": true
      },
      {
        "text": "$\\max\\limits_{[0;9]}f(x)=2$",
        "answer": false
      },
      {
        "text": "Hàm số $y=x \\cdot[f(x)]^2$ có đúng 3 điểm cực trị",
        "answer": true
      }
    ],
    "explain": "<br>- Hàm số có TXĐ: $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br> $y'=\\dfrac{x^2+2x-8}{(x+1)^2}$, $y'=0 \\Leftrightarrow x=-4 \\text{ hoặc } x=2.$<br> Bảng biến thiên <br><img src=\"data/12/2D1/im2D1/2D15_tikz_043.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Từ bảng biến thiên ta có hàm số đồng biến trên các khoảng $(-\\infty;-4)$ và $(2;+\\infty)$.<br>- Tiệm cận xiên của hàm số có dạng $y=ax+b$.<br> + $a = \\lim\\limits_{x\\to +\\infty}\\dfrac{f(x)}{x}=1$.<br> + $b = \\lim\\limits_{x\\to +\\infty}(f(x)-x)=\\lim\\limits_{x\\to +\\infty} \\dfrac{-3x+6}{x+1}=-3$.<br> Vậy tiệm cận xiên của hàm số là $y = x - 3$, và đường thẳng này đi qua $M(4;1)$.<br>- $f(0)=6$; $f(9)=\\dfrac{69}{10}$.<br> Từ bảng biến thiên ta có $\\max\\limits_{[0;9]}f(x)=\\max\\{f(0);f(9)\\}=\\dfrac{69}{10}$.<br>- Xét hàm số $g(x)=x \\cdot[f(x)]^2$.<br> Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.<br> $g'(x)=[f(x)]^2+2x\\cdot f(x)\\cdot f'(x)=f(x) [f(x) + 2x f'(x)]$.<br> Cho $g'(x) = 0 \\Leftrightarrow f(x) = 0 (1) \\text{ hoặc } f(x) + 2x f'(x) = 0 (2).$ <br>- $(1)\\Leftrightarrow \\dfrac{x^2-2x+6}{x+1}=0 \\Leftrightarrow x^2-2x+6 =0$ (vô nghiệm).<br>- Xét phương trình $(2)$ $(2) \\Leftrightarrow \\dfrac{x^2-2x+6}{x+1}+25\\left(\\dfrac{x^2+2x-8}{(x+1)^2}\\right)=0$<br>$\\Leftrightarrow 3x^3+3x^2-12x+6 =0 \\Leftrightarrow x=1 \\text{ hoặc } x=-1\\pm\\sqrt{3}.$ Vậy phương trình $g'(x) = 0$ có 3 nghiệm đơn phân biệt khác $-1$.<br> Do $g'(x)$ đổi dấu qua 3 nghiệm này, nên hàm số $g(x)$ có đúng $3$ điểm cực trị.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS13",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax+b}{cx+1}$ với $a$, $b$, $c\\in\\mathbb{R}$ có đồ thị như hình vẽ  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_045.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số $f'(x)&lt;0,\\,\\,\\forall x\\in\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên khoảng $(1;+\\infty)$ và đồng biến trên khoảng $(-\\infty ;1)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm cận đứng là $x=1$ và tiệm cận ngang là $y=-1$",
        "answer": true
      },
      {
        "text": "Tổng $a+b+c=5$",
        "answer": false
      }
    ],
    "explain": "Đồ thị nhận đường thẳng $y=-1$ làm tiệm cận ngang nên $\\lim\\limits_{x\\to +\\infty}\\dfrac{ax+b}{cx+1}=-1\\Leftrightarrow \\dfrac{a}{c}=-1.\\qquad (1)$  Đồ thị nhận đường thẳng $x=1$ làm tiệm cận đứng nên $1\\cdot c+1=0 \\text{ và } 1\\cdot a+b \\ne 0.$ \\qquad (2)<br>   Đồ thị đi qua các điểm $(2;0)$, $(0;-2)$ nên ta có $2a+b=0 \\text{ và } f(0)=-2.$ \\qquad (3)<br>   Từ $(1)$, $(2)$ và $(3)$ ta có $b=-2 \\text{ và } c=-1 \\text{ và } a=1$.<br>  Vậy đồ thị đã cho là đồ thị của hàm số $y=\\dfrac{x-2}{-x+1}$.  <br>- Ta có $f'(x)=\\dfrac{-2}{(-x+1)^2}&lt;0,\\,\\forall x\\in\\mathbb{R}\\setminus \\{1\\}$.<br>- Hàm số nghịch biến trên mỗi khoảng $(-\\infty;1)$, $(1;+\\infty)$.<br>- Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=1$ và tiệm cận ngang là đường thẳng $y=-1$<br>- Vì $b=-2 \\text{ và } c=-1 \\text{ và } a=1$ nên $a+b+c=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS14",
    "question": "Cho hàm số $f(x)=\\dfrac{ax^2+bx+c}{x+n}$ (với $a \\ne 0$) có đồ thị là đường cong như hình vẽ.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_052.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus \\{-2\\}$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=-3$; đạt cực tiểu tại $x=-1$",
        "answer": true
      },
      {
        "text": "Tiệm cận đứng của đồ thị hàm số đã cho là đường thẳng $y=-2$",
        "answer": false
      },
      {
        "text": "Công thức xác định của hàm số đã cho là $y=\\dfrac{x^2+3x+3}{x+2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Dựa vào hình vẽ, hàm số không xác định tại $x=-2$ nên tập xác định là $\\mathscr{D}=\\mathbb{R}\\setminus \\{-2\\}$.<br>- Hàm số đạt cực đại tại $x=-3$; đạt cực tiểu tại $x=-1$.<br>- Tiệm cận đứng của đồ thị hàm số đã cho là đường thẳng $x=-2$.<br>- Tiệm cận đứng của đồ thị hàm số đã cho là đường thẳng $x=-n$ nên $-n=-2 \\Rightarrow n=2$. Khi đó $f(x)=\\dfrac{ax^2+bx+c}{x+2}$.<br>  Đường tiệm cận xiên của đồ thị hàm số là đường thẳng đi qua $2$ điểm $(0;1)$ và $(-1;0)$ nên có phương trình $\\dfrac{x}{-1}+\\dfrac{y}{1}=1 \\Leftrightarrow y=x+1$. Khi đó $a=1$.<br>  Đồ thị hàm số đi qua điểm $(-1;1)$ nên $1-b+c=1 \\Leftrightarrow -b+c=0 \\quad (1).$  Đồ thị hàm số đi qua điểm $(-3;-3)$ nên $\\dfrac{9a-3b+c}{-3+2}=-3 \\Rightarrow 9-3b+c=3 \\Leftrightarrow -3b+c=-6 \\quad (2).$  Từ $(1)$ và $(2)$, ta có $b=c=3$.<br>  Vậy công thức xác định của hàm số đã cho là $y=\\dfrac{x^2+3x+3}{x+2}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS15",
    "question": "Cho hàm số $y=-x^3+6x^2-9x+1$.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_055.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số cắt trục tung tại điểm $(0; 1)$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(1; 3)$",
        "answer": false
      },
      {
        "text": "Đồ thị của hàm số là đường cong trong hình vẽ bên",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên khoảng $(-\\infty; 5)$ bằng $-3$",
        "answer": false
      }
    ],
    "explain": "Xét $f'(x)=-3x^2+12x-9$, cho $f'(x)=0\\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>  Bảng biến thiên của hàm số  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_056.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Cho $x=0$ suy ra $y=-0^3+6\\cdot 0^2-9\\cdot 0+1=1$.<br>  Vậy đồ thị hàm số cắt trục tung tại điểm $(0;1)$.<br>- Dựa vào bảng biến thiên, hàm số đồng biến trên khoảng $(1;3)$.<br>- Hàm số đã cho có hai điểm cực trị dương, nằm bên phải trục $Oy$.<br>  Do đó, hình vẽ đã cho không phải là đồ thị của hàm số.<br>- Bảng biến thiên của hàm số trên $(-\\infty;5)$  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_057.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, hàm số không có giá trị nhỏ nhất trên khoảng $(-\\infty;5)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS16",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2+3 x+5}{x+2}$. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=-2$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x+1$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số có tâm đối xứng là điểm $I(-2 ;-1)$",
        "answer": true
      },
      {
        "text": "Hàm số không có cực trị",
        "answer": false
      }
    ],
    "explain": "Ta có $y=f(x)=\\dfrac{x^2+3 x+5}{x+2}=x+1+\\dfrac{3}{x+2}$. Suy ra $y'=f'(x)=1-\\dfrac{3}{(x+2)^2}$.  <br>- <strong>Đúng</strong>. Ta có $\\mathop{\\lim}\\limits_{x\\rightarrow -2^-}y=+\\infty$ và $\\mathop{\\lim}\\limits_{x\\rightarrow -2^+}y=-\\infty$.<br>  Vậy đồ thị hàm số có hai đường tiệm cận đứng là $x=-2$.<br>- <strong>Đúng</strong>.Do $\\lim\\limits_{x \\to \\infty} [f(x) - (x + 1)] = \\lim\\limits_{x \\to \\infty} \\dfrac{3}{x + 2} = 0$ nên đường thẳng $y = x + 1$ là đường tiệm cận xiên của đồ thị hàm số đã cho.<br>- <strong>Đúng</strong>. Tâm đối xứng $I(-2 ;-1)$ của đồ thị làm giao điểm của tiệm cận đứng và tiện cận xiên có phương trình $x=-2$ và $y=x+1$.<br>- <strong>Sai</strong>. Ta có $y'=0\\Leftrightarrow 1-\\dfrac{3}{(x+2)^2}=0\\Leftrightarrow (x+2)^2=3\\Leftrightarrow x=-2+\\sqrt{3} \\text{ hoặc } x=-2-\\sqrt{3}$.<br>  Do $y'$ đổi dấu khi $x$ đi qua hai giá trị này nên hàm số có hai điểm cực trị, tức là mệnh đề trên sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS17",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2+4x-1}{x-1}$ có đồ thị là $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có đạo hàm $y'=\\dfrac{x^2-2x-3}{(x-1)^2}$",
        "answer": true
      },
      {
        "text": "Hàm số có $1$ cực trị",
        "answer": false
      },
      {
        "text": "Điểm $I(1;4)$ là giao điểm của hai đường tiệm cận của đồ thị hàm số $(C)$",
        "answer": false
      },
      {
        "text": "Diện tích của tam giác tạo bởi đường thẳng đi qua $2$ điểm cực trị của đồ thị hàm số $y=f(x)$ với $2$ trục tọa độ bằng $4$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $y'=\\dfrac{(2x+4)(x-1)-(x^2+4x-1)}{(x-1)^2}=\\dfrac{x^2-2x-3}{(x-1)^2}$.<br>- <strong>Sai</strong>. Do $y'=0\\Rightarrow x=-1 \\text{ hoặc } x=3.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_063.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Suy ra hàm số có hai cực trị.<br>- <strong>Sai</strong>.  <br>- $y=f(x)=\\dfrac{x^2+4x-1}{x-1}=x+5+\\dfrac{4}{x-1}$.<br>- Đồ thị hàm số có đường tiệm cận đứng là $x=1$.<br>- Đồ thị hàm số có đường tiệm cận xiên là $y=x+5$.  Điểm $I(1;6)$ là giao điểm của hai đường tiệm cận của đồ thị hàm số $(C)$<br>- <strong>Đúng</strong>. Đường thẳng đi qua hai điểm cực trị là $\\Delta\\colon y=2x+4$.<br>  Đường thẳng $\\Delta$ tạo với hai trục tọa độ một tam giác $OAB$ với $A(-2;0)$, $B(0;4)$.<br>  Ta có $S_{OAB}=\\dfrac{1}{2}\\cdot OA\\cdot OB=\\dfrac{1}{2}\\cdot 2\\cdot 4=4$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS18",
    "question": "Cho hàm số $y = \\dfrac{x^2 + x + 7}{x + 2}$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có đạo hàm là $y' = \\dfrac{x^2 + 4x - 5}{x + 2}$",
        "answer": false
      },
      {
        "text": "Điểm $A(-5; -9)$, $B(1; 3)$ lần lượt là điểm cực đại và điểm cực tiểu của đồ thị hàm số trên",
        "answer": true
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị hàm số đã cho là $y = x - 1$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho đi qua $12$ điểm có hoành độ và tung độ là những số nguyên",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Kiểm tra đạo hàm</strong>  $  y' = \\dfrac{(2x + 1)(x + 2) - (x^2 + x + 7)}{(x + 2)^2} = \\dfrac{x^2 + 4x - 5}{(x + 2)^2}.  $<br>- <strong>Xác định điểm cực trị</strong><br>  Giải phương trình $y' = 0 \\Leftrightarrow x^2 + 4x - 5 = 0 \\Leftrightarrow x=-5 \\text{ hoặc } x=1.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_068.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, ta có điểm $A(-5; -9)$, $B(1; 3)$ lần lượt là điểm cực đại và điểm cực tiểu của đồ thị hàm số.<br>- <strong>Tìm tiệm cận xiên</strong>  $  y = \\dfrac{x^2 + x + 7}{x + 2} = (x - 1) + \\dfrac{9}{x + 2}.  $  Suy ra tiệm cận xiên $y = x - 1$.<br>- <strong>Đếm điểm nguyên:</strong><br>  Điều kiện: $x + 2$ phải là ước của $9$ (vì $y = x - 1 + \\dfrac{9}{x + 2}$).<br>  Các ước $\\pm 1, \\pm 3, \\pm 9$ $\\Rightarrow$ $6$ giá trị $x$:   $x = -11, -5, -3, -1, 1, 7$.<br>  Tương ứng $6$ điểm nguyên:   $(-11; -13)$, $(-5; -9)$, $(-3; -13)$, $(-1; 7)$, $(1; 3)$, $(7; 7)$.<br>  Suy ra chỉ có $6$ điểm có toạ độ nguyên.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS19",
    "question": "Một chất điểm chuyển động theo phương trình $s(t)=t^3-3t^2+8t+1$, trong đó $t$ tính bằng giây và $s(t)$ tính bằng mét. Các phát biểu sau đúng hay sai",
    "subQuestions": [
      {
        "text": "Vận tốc nhỏ nhất của chất điểm là $5$ m/s",
        "answer": true
      },
      {
        "text": "Tại thời điểm mà chất điểm di chuyển được $13$ m, vận tốc khi đó bằng $8$ m/s",
        "answer": true
      },
      {
        "text": "Gia tốc tại thời điểm chất điểm đạt vận tốc nhỏ nhất bằng $2$ m/s$^2$",
        "answer": false
      },
      {
        "text": "Vận tốc của chất điểm tại thời điểm $t=3$ s bằng $8$ m/s",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. <br>  Ta có $v(t)=s'(t)=3t^2-6t+8$. Suy ra $v'(t)=6t-6$.<br>  Cho $v'(t)=0 \\Leftrightarrow t=1$.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_074.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, vận tốc nhỏ nhất của chất điểm là $5$ m/s.<br>- <strong>Đúng</strong>.<br>  Ta có $s(t)=13 \\Leftrightarrow t^3-3t^2+8t+1=13 \\Leftrightarrow t=2$.<br>  khi đó $v(2)=8$.<br>- <strong>Sai</strong>.<br>  Ta có $a(t)=v'(t)=6t-6$.<br>  Thời điểm chất điểm đạt vận tốc nhỏ nhất là $t=1$ nên $a(1)=0$ m/s$^2$.<br>- <strong>Sai</strong>.<br>  $v(3)=17$ m/s.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS20",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ bên.<br><img src=\"data/12/2D1/im2D1/2D15_tikz_075.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $[-1; 2]$ bằng $-1$ đạt được chỉ khi $x=2$",
        "answer": false
      },
      {
        "text": "Có $7$ giá trị nguyên của $m$ để phương trình $2f(x)+m=0$ có $3$ nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Gọi $x_1$, $x_2$ lần lượt là hoành độ điểm cực đại, hoành độ cực tiểu của hàm số $y=f(x)$. Ta có $x_1\\cdot x_2=-3$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên khoảng $(-1; 1)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Dựa vào đồ thị hàm số $f(x)$, ta có giá trị nhỏ nhất của hàm số trên đoạn $[-1;2]$ bằng $-1$ đạt được chỉ khi $x=1$.<br>- <strong>Đúng</strong>.<br>  Ta có $2f(x)+m=0 \\Leftrightarrow f(x)=\\dfrac{-m}{2}$.<br>  Để phương trình $2f(x)+m=0$ có $3$ nghiệm phân biệt thì đường thẳng $y=\\dfrac{-m}{2}$ cần cắt đồ thị hàm số $y=f(x)$ tại $3$ điểm phân biệt.<br>  Dựa vào đồ thị, ta có $-1 &lt; \\dfrac{-m}{2} &lt; 3 \\Leftrightarrow -6&lt;m&lt;2$.<br>  Do $m \\in \\mathbb{Z}$ nên $m \\in \\{-5;-4;-3;-2;-1;0;1\\}$.<br>  Vậy có $7$ giá trị nguyên của $m$ thỏa yêu cầu.<br>- <strong>Sai</strong>.<br>  Ta có  <br>- $x_1$ là hoành độ điểm cực đại, khi đó $x_1=-1$.<br>- $x_2$ là hoành độ điểm cực tiểu, khi đó $x_2=1$.  Suy ra $x_1 \\cdot x_2=-1$.<br>- <strong>Đúng</strong>.<br>  Dựa vào đồ thị, hàm số $y=f(x)$ nghịch biến trên khoảng $(-1;1)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS21",
    "question": "Cho hàm số $y=f(x)=-x^3-3x^2+4$.",
    "subQuestions": [
      {
        "text": "Phương trình $f'(x)=0$ có hai nghiệm phân biệt là $x=0$ hoặc $x=-2$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đạt cực tiểu tại $x=0$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đã cho nhận điểm $(-1;-2)$ làm tâm đối xứng",
        "answer": false
      },
      {
        "text": "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số đã cho cách gốc tọa độ $O$ một khoảng bằng $\\dfrac{4\\sqrt{5}}{5}$",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng.<br>  Ta có $y'=f'(x)=-3x^2-6x$; $f'(x)=0\\Leftrightarrow x=0$ hoặc $x=-2$.<br>- Sai.<br>  Ta có bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_077.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy, hàm số đạt cực tiểu tại điểm $x=-2$ và đạt cực đại tại điểm $x=0$.<br>- Sai.<br>  Ta có $f''(x)=-6x-6$; $f''(x)=0\\Leftrightarrow x=-1$. Do đó tâm đối xứng của đồ thị hàm số là điểm $(-1;2)$.<br>- Đúng<br>  Tọa độ hai điểm cực trị của đồ thị hàm số là $A(-2;0)$ và $B(0;4)$. Đường thẳng $AB$ có phương trình  $\\dfrac{x}{-2}+\\dfrac{y}{4}=1\\Leftrightarrow 2x-y+4=0.$  Khoảng cách từ $O$ đến đường thẳng $AB$ là  $\\mathrm{d}(O;AB)=\\dfrac{|2\\cdot 0-0+4|}{\\sqrt{2^2+(-1)^2}}=\\dfrac{4\\sqrt{5}}{5}.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS22",
    "question": "Cho hàm số $y=\\dfrac{x^3}{3}-2x^2+3x$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số là $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số có hai điểm cực trị",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=1$",
        "answer": true
      },
      {
        "text": "Đường thẳng $y=-\\dfrac{4}{3}$ là tiếp tuyến của đồ thị $(C)$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Tập xác định của hàm số là $(-\\infty;+\\infty)$<br>- <strong>Đúng</strong>. Ta có $y'=x^2-4x+3$.<br>  $y'=0\\Leftrightarrow x=1 \\text{ hoặc } x=3.$<br>  Khi đó hàm số đã cho có hai điểm cực trị.<br>- <strong>Đúng</strong>. Ta có bảng biến thiên của hàm số đã cho  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_084.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số đạt cực đại tại $x=1$.<br>- <strong>Sai</strong>. Đường thẳng $y=-\\dfrac{4}{3}$ song song với trục hoành, không đi qua điểm cực trị của đồ thị hàm số đã cho nên nó không là tiếp tuyến của đồ thị $(C)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS23",
    "question": "Cho đồ thị hàm số bậc ba như hình vẽ bên dưới  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_086.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm cực đại của đồ thị hàm số là $(-1;2)$",
        "answer": true
      },
      {
        "text": "Đồ thị cắt trục hoành tại hai điểm phân biệt",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có hai điểm cực trị đối xứng với nhau qua gốc tọa độ $O$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(1;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- Đồ thị hàm số có điểm cực đại là $(-1;2)$.<br>- Đồ thị hàm số cắt trục hoành $y=0$ tại ba điểm phân biệt.<br>- Đồ thị hàm số có hai điểm cực trị là $(-1;2)$ và $(1;-2)$ đối xứng với nhau qua gốc tọa độ $O$.<br>- Hàm số đồng biến trên $(-\\infty;-1)$ và $(1;+\\infty)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS24",
    "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như hàm số dưới đây. Xét tính đúng sai của các khẳng định sau  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_088.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phương trình $f(x) = 4$ có $4$ nghiệm phân biệt",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đã cho có một đường tiệm cận đứng",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(1;2)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $(2;3]$ bằng $-4$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Dựa vào bảng biến thiên, ta thấy phương trình $f(x) = 4$ có hai nghiệm phân biệt là $x_1 &lt; 1$ và $x_2 \\in (1;2)$.<br>- <strong>Đúng</strong>. Ta có  <br>- $\\displaystyle \\lim\\limits_{x \\to 2^{-}} f(x) = +\\infty$ nên $x = 2$ là tiệm cận đứng của đồ thị hàm số.<br>- $\\displaystyle \\lim\\limits_{x \\to 2^{+}} f(x) = -\\infty$ nên $x = 2$ là tiệm cận đứng của đồ thị hàm số.  Vậy đồ thị hàm số đã cho chỉ có một tiệm cận đứng là $x = 2$.<br>- <strong>Đúng</strong>. Vì $f'(x) &gt; 0 \\Leftrightarrow x \\in (1;2)$ nên hàm số đã cho đồng biến trên khoảng $(1;2)$.<br>- <strong>Đúng</strong>. Vì $f'(x) &gt; 0 \\Leftrightarrow x \\in (2;3]$ nên hàm số đã cho đồng biến trên khoảng $(2;3]$ và $f(3) = -4$ nên giá trị lớn nhất của hàm số trên $(2;3]$ bằng $-4$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D155DS25",
    "question": "Cho hàm số $y = f(x)$. Biết đạo hàm của $y = f(x)$ là hàm số $y = f'(x) = x^3 - 3x + 2$ có đồ thị là đường cong trong hình vẽ. Xét tính đúng sai của các khẳng định sau  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_089.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm cực đại của đồ thị hàm số $y = f'(x)$ là $(-1;4)$",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ có hai điểm cực trị",
        "answer": false
      },
      {
        "text": "Hàm số $y = f(x)$ đồng biến trên khoảng $(-\\infty;-2)$",
        "answer": false
      },
      {
        "text": "$f'(1) = 0$",
        "answer": true
      }
    ],
    "explain": "Ta có $f'(x) = 0 \\Leftrightarrow x^3 - 3x + 2 = 0 \\Leftrightarrow x = 1 \\text{ hoặc } x = -2.$<br>  Bảng biến thiên của hàm số $y = f(x)$  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_090.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>. Dựa vào đồ thị của $f'(x)$, ta thấy điểm cực đại của đồ thị hàm số $y = f'(x)$ là $(-1;4)$.<br>- <strong>Sai</strong>. Vì phương trình $f'(x)$ chỉ đổi dấu từ âm sang dương khi đi qua $x = -2$ nên chỉ có $x = -2$ là cực trị của hàm số.<br>  Vậy hàm số $y = f(x)$ chỉ có một điểm cực trị.<br>- <strong>Sai</strong>. Dựa vào bảng biến thiên, ta thấy hàm số $y = f(x)$ đồng biến trên $(-2;+\\infty)$.<br>- <strong>Đúng</strong>. Dựa vào kết quả tìm nghiệm từ phương trình $f'(x) = 0$, ta thấy $f'(1) = 0$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS26",
    "question": "Cho hàm số $y=\\dfrac{x^2+3x+5}{x+2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có đạo hàm $y'=\\dfrac{x^2+4x+1}{(x+2)^2}$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho cắt trục hoành tại 2 điểm phân biệt",
        "answer": false
      },
      {
        "text": "Tâm đối xứng của đồ thị hàm số có tọa độ $(-2;-1)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho có 1 đường tiệm cận đứng, 1 đường tiệm cận ngang và 1 đường tiệm cận xiên",
        "answer": false
      }
    ],
    "explain": "<br>- $y'=\\dfrac{x^2+4x+1}{(x+2)^2}$.<br>- Phương trình hoành độ giao điểm: $x^2+3x+5=0$. <br>  Do $\\Delta=3^2-4\\cdot 5= -11 &lt; 0$ nên phương trình trên vô nghiệm, tức là đồ thị hàm số đã cho không cắt trục hoành.<br>- Đồ thị hàm số đã cho có tiệm cận đứng $x=-2$ và tiệm cận xiên $y=x+1$. <br>  Tâm đối xứng của đồ thị hàm số và giao điểm của tiệm cận đứng và tiệm cận xiên, khi đó $I(-2;-1)$.<br>- Đồ thị hàm số không có tiệm cận ngang vì $\\lim\\limits_{x \\to +\\infty}y=+\\infty$ và $\\lim\\limits_{x \\to -\\infty}y=-\\infty$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS27",
    "question": "Cho hàm số $y=\\dfrac{a x+1}{b x+c}$ ($a, b, c \\in R$ và $b \\neq 0$) có bảng biến thiên như hình bên dưới.  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_104.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số không có giá trị lớn nhất trên $(-1; 5]$",
        "answer": false
      },
      {
        "text": "Biết $f(0)=1$. Giá trị $a+b+c=4$",
        "answer": true
      },
      {
        "text": "Đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số lần lượt là $x=-1$; $y=2$",
        "answer": true
      },
      {
        "text": "$y' &gt; 0$, $\\forall x \\in \\mathbb{R}$",
        "answer": false
      }
    ],
    "explain": "<br>- Vì hàm số đồng biến trên $(-1; 5]$ nên $\\max\\limits_{(-1;5]} f(x)=f(5)$.<br>- Ta có   <br>- $f(0)=1 \\Rightarrow \\dfrac{1}{c}=1 \\Rightarrow c=1$.<br>- Tiệm cận đứng $x=-\\dfrac{c}{b}=-1 \\Rightarrow c=b$. Suy ra $b=1$.<br>- Tiệm cận ngang $y=\\dfrac{a}{b}= 2 \\Rightarrow a=2b$. Suy ra $a=2$.  Vậy $a+b+c=2+1+1=4$.<br>- $y' &gt; 0$, $\\forall x \\in \\mathbb{R}\\setminus\\{-1\\}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS28",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2-2x+2}{x+2}$.",
    "subQuestions": [
      {
        "text": "$y'=\\dfrac{x^2+4x-2}{(x+2)^2}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có một đường tiệm cận đứng là $x=-2$",
        "answer": true
      },
      {
        "text": "Trên đoạn $[0;6]$, hàm số có giá trị lớn nhất bằng $\\dfrac{13}{4}$ và có giá trị nhỏ nhất bằng $1$",
        "answer": false
      },
      {
        "text": "Giao điểm của hai đường tiệm cận của đồ thị hàm số là điểm $I(-2;-6)$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $y'=\\dfrac{x^2+4x-6}{(x+2)^2}$.<br>- Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-2\\}$.<br>  Ta có $\\lim\\limits_{x \\to (-2)^+} f(x)=+\\infty$.<br>  Đồ thị hàm số có một đường tiệm cận đứng là $x=-2$.<br>- Trên đoạn $[0;6]$, ta có  \\[y'=\\dfrac{x^2+4x-6}{(x+2)^2}=0\\Rightarrow x^2+4x-6=0\\Leftrightarrow x=1\\in [0;6] \\text{ hoặc } x=-6 \\notin [0;6].\\]  Tính được các giá trị $f(0)=1$, $f(1)=\\dfrac{1}{3}$, $f(6)=\\dfrac{13}{4}$.<br>  Vậy $\\max\\limits_{[0;6]} f(x)=\\dfrac{13}{4}$ tại $x=6$; $\\min\\limits_{[0;6]} f(x)=\\dfrac{1}{3}$ tại $x=1$.<br>- Tiệm cận đứng $x=-2$.<br>  Tiệm cận xiên $y=ax+b$, trong đó  <br>- $a=\\lim\\limits_{x\\to +\\infty}\\left[\\dfrac{f(x)}{x}\\right]=\\lim\\limits_{x\\to +\\infty}\\left[\\dfrac{x^2-2x+2}{x+2}:x\\right]=1$.<br>- $b=\\lim\\limits_{x\\to +\\infty}\\left[f(x)-ax\\right]=\\lim\\limits_{x\\to +\\infty}\\left[\\dfrac{x^2-2x+2}{x+2}-1\\cdot x\\right]=-4$.  Suy ra tiệm cận xiên $y=x-4$.<br>  Vậy giao điểm hai đường tiệm cận có toạ độ là   \\[x=-2 \\text{ và } y=x-4\\Leftrightarrow x=-2 \\text{ và } y=-2-4=-6\\Rightarrow I(-2;-6).\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS29",
    "question": "Cho hàm số $y=\\dfrac{x^2+4x+7}{x+1}$.",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên mỗi khoảng xác định của nó",
        "answer": false
      },
      {
        "text": "Hàm số đạt giá trị lớn nhất tại điểm $x=-3$",
        "answer": false
      },
      {
        "text": "Hai điểm cực trị của đồ thị hàm số nằm về hai phía đối với đường thẳng $(\\Delta)\\colon y=-1$",
        "answer": true
      },
      {
        "text": "Hai trục đối xứng của đồ thị hàm số vuông góc với nhau tại điểm $I(-1; 2)$",
        "answer": true
      }
    ],
    "explain": "<br>- Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br>  Ta có $y'=\\dfrac{2^2+2x-3}{(x+1)^2}$. <br>  Xét $y'=0\\Leftrightarrow x=-3 \\text{ hoặc } x=1.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_109.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy hàm số đồng biến trên khoảng $(-\\infty;-3)$ và $(1;+\\infty)$.<br>- Hàm số không có giá trị lớn nhất trên $\\mathscr{D}$.<br>- Hai điểm cực trị của đồ thị hàm số là $(-3;-2)$ và $(1;6)$. Dễ thấy hai điểm này nằm về hai phía của đường thẳng $\\Delta\\colon y=-1$.<br>- Đồ thị hàm số có đường tiệm cận đứng là $x=-1$, đường tiệm cận xiên là $y=x+3$.<br>  Vậy hai trục đối xứng của đồ thị hàm số đi qua điểm $I(-1; 2)$ và hai trục đối xứng này vuông góc nhau.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS30",
    "question": "Cho hàm số $y=x^3-3 x^2+4$.",
    "subQuestions": [
      {
        "text": "Tập xác định là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số đã cho là $y^{\\prime}=3 x^2-6 x$",
        "answer": true
      },
      {
        "text": "Bảng biến thiên của hàm số đã cho là\\newline  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_119.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đã cho là \\newline  <br><img src=\"data/12/2D1/im2D1/2D15_tikz_120.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
        "answer": false
      }
    ],
    "explain": "Hàm số $y=x^3-3 x^2+4$ có tập xác định là $\\mathbb{R}$.<br>  $y'=3x^2-6x$.<br>  $y'=0 \\Leftrightarrow 3x^2-6x=0 \\Leftrightarrow x=0 \\text{ hoặc } x=2.$<br>- Hàm số là hàm đa thức nên có tập xác định là $\\mathbb{R}$.<br>- Có $y'=3x^2-6x$.<br>- Tại $x=0 \\Leftrightarrow y=4$ nên bảng biến thiên sai.<br>- Tại $x=0 \\Leftrightarrow y=4$ nên đồ thị sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS31",
    "question": "Cho hàm số $y=f(x)=ax^3+bx^2+cx+d, (a\\neq 0)$ có đồ thị như hình bên. Xét tính đúng, sai của các mệnh đề sau.<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS1_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hệ số $a&gt;0$",
        "answer": true
      },
      {
        "text": "Hàm số đạt cực đại tại $x=0$",
        "answer": false
      },
      {
        "text": "Phương trình $3f(x)=5$ có 3 nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "$f(x)=x^3-3x^2-2$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Từ dạng đồ thị hàm số ta có $a&gt;0$.<br>- <strong>Sai</strong>. Từ đồ thị ta có hàm số đạt cực đại tại $x=-2$.<br>- <strong>Đúng</strong>. Ta có $3f(x)-5=0 \\Leftrightarrow f(x)= \\dfrac{5}{3}$.<br>   Từ đồ thị ta thấy đường thẳng $y=\\dfrac{5}{3}$ cắt đồ thị hàm số $y=f(x)$ tại $3$ điểm phân biệt, nên phương trình $f(x)= \\dfrac{5}{3}$ có $3$ nghiệm phân biệt.<br>- <strong>Sai</strong>.   Đồ thị giao với $Oy$ tại điểm có tung độ $-2$ nên $d=-2$.<br>  Đồ thị đi qua các điểm $(-2;2), (-1;0), (1;2)$ nên ta có   $-8a+4b-2c-2=2 \\text{ và } -a+b-c-2=0 \\text{ và } a+b+c-2=2  \\Rightarrow  a=1 \\text{ và } b=3 \\text{ và } c=0 \\Rightarrow f(x)=x^3-3x^2-2.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS32",
    "question": "Cho hàm số $y=f(x)$ có đồ thị $(C)$ như hình vẽ bên<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS1_014.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ cắt trục $Oy$ tại điểm có tung độ bằng $2$",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x-1=0$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ có hai cực trị trong đó $y_{CT}&gt;y_{\\text{CĐ}}$",
        "answer": true
      },
      {
        "text": "Hai đường tiệm cận của đồ thị cùng với trục hoành tạo thành tam giác có diện tích bằng $2$",
        "answer": false
      }
    ],
    "explain": "Quan sát đồ thị ta thấy,  <br>- Đồ thị $(C)$ cắt $Oy$ tại điểm $(0;2)$ có tung độ bằng $2$.<br>- Đồ thị $(C)$ có tiệm cận đứng $x=1$.<br>- Hàm số $y=f(x)$ có hai cực trị và $y_{CT}&gt;y_{\\text{CĐ}}$.<br>- Hai đường tiệm cận và trục hoành tạo thành tam giác vuông, có độ dài hai cạnh góc vuông là $4$ và $4$. Suy ra diện tích tam giác là $S=8$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS33",
    "question": "Anh B chế tạo một bể cá có dạng khối hình hộp chữ nhật không nắp có thể tích $0,096$ m$^3$, chiều cao $h=0,6$ m, chiều rộng $x$, chiều dài $y$, với $0&lt;x&lt;y$. Anh B dùng loại kính để làm các mặt bên có giá $70.000$ đồng/m$^2$ và loại kính để làm mặt đáy có giá $100.000$ đồng/m$^2$. Mọi chi phí khác xem như không đáng kể. Khi đó",
    "subQuestions": [
      {
        "text": "Hàm số biểu thị $y$ theo $x$ là $y=\\dfrac{0{,}16}{x}$",
        "answer": true
      },
      {
        "text": "Chi phí mua kính để làm đáy bể là 11200 đồng",
        "answer": false
      },
      {
        "text": "Biểu thức tính chi phí làm các mặt xung quanh là $C_{xq}=84000\\left(x+\\dfrac{0{,}16}{x} \\right)$",
        "answer": true
      },
      {
        "text": "Chi phí làm bể cá thấp nhất là 100000 đồng",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Thể tích khối hộp hình chữ nhật: $V=xyh=xy\\cdot0{,}6=0{,}096$  $\\Rightarrow xy=0,16 \\Rightarrow y=\\dfrac{0{,}16}{x}$.<br>- <strong>Sai</strong>. Diện tích đáy bể là $S_d=xy=0{,}16 m^2$.<br>  Chi phí mua kính để làm đáy bể là $C_d=100000\\cdot S_d=16000$ đồng<br>- <strong>Đúng</strong>. Diện tích các mặt xung quanh:  $S_{xq}=2x\\cdot0{,}6+2y\\cdot0{,}6=1{,}2 \\left(x+\\dfrac{0{,}16}{x}\\right)$.<br>  Biểu thức tính chi phí làm các mặt xung quanh là  $C_{xq}=70000\\cdot S_{xq}=84000\\left(x+\\dfrac{0,16}{x}\\right)$.<br>- <strong>Sai</strong>. Chi phí làm bể cá  $C(x)=C_{xq}+C_d=84000\\left(x+\\dfrac{0{,}16}{x}\\right)+16000 \\ge 84000\\cdot 2 \\sqrt{ x \\cdot \\dfrac{0{,}16}{x}}+16000=83200.$  Vậy chi phí thấp nhất để làm bể cá là  $83200$ đồng khi $x=\\dfrac{0,16}{x} \\Leftrightarrow x = \\dfrac{2}{5}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS34",
    "question": "Công ty $X$ chuyên sản xuất một loại sản phẩm, bộ phận sản xuất ước tính rằng với $q$ sản phẩm được sản xuất trong một tháng thì tổng chi phí sẽ là $C(q)=8q^2+40q+1400$ (nghìn đồng) và mỗi sản phẩm công ty bán với giá $P(q)=1400-2q$ (nghìn đồng).",
    "subQuestions": [
      {
        "text": "Chi phí mỗi tháng công ty phải bỏ ra để sản xuất 50 sản phẩm là $23400$ (nghìn đồng)",
        "answer": true
      },
      {
        "text": "Lợi nhuận bán được $q$ sản phẩm là $F(q)=-10q^2+1440q-1400$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Lợi nhuận cao nhất trong một tháng của công ty là hơn $50000$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44200$ đến $44840$ (nghìn đồng)",
        "answer": true
      }
    ],
    "explain": "<br>- Chi phí mỗi tháng công ty phải bỏ ra để sản xuất $50$ sản phẩm là $C(50)=8\\cdot 50^2+40\\cdot 50+1400=23400$ (nghìn đồng).<br>- Tổng số tiền thu được sau khi bán $q$ sản phẩm là $q\\cdot \\left(1400-2q\\right)=-2q^2+1400q$. <br>  Do đó, lợi nhuận khi bán $q$ sản phẩm là \\[ F(q)=-2q^2+1400q-8q^2-40q-1400 =-10q^2+1360q-1400 \\text{ (nghìn đồng)}\\]<br>- Áp dụng công thức tọa độ đỉnh $I$ của parabol ta có:  \\[I \\left(\\dfrac{-b}{2a};\\dfrac{-\\Delta}{4a} \\right)=\\left(\\dfrac{-1360}{2\\cdot (-10)};\\dfrac{4\\cdot (-10)\\cdot (-1400)-1360^2}{4\\cdot (-10)} \\right)=(68;44840)\\]  Vì hàm lợi nhuận là một parabol có hệ số $a &lt; 0$ nên giá trị lớn nhất của hàm số là $y_I=44840$ (nghìn đồng).<br>- Xét hàm số $F(q)=-10q^2+1360q-1400$ trên khoảng $(60;70)$. <br>  $F^{\\prime}(q)=-20q+1360$ <br>  $F^{\\prime}(q)=0\\Leftrightarrow q=68$. <br>  Ta có bảng biến thiên:  <br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS4_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vậy nếu số lượng sản phẩm bán ra trong một tháng nằm trong khoảng từ $60$ đến $70$ thì lợi nhuận sẽ được ước tính trong khoảng $44200$ đến $44840$ (nghìn đồng).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS35",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau.<br><img src=\"data/12/2D1/im2D15/dlts_12_DLTS9_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên các khoảng $\\left(-\\infty ;3\\right)$ và $\\left(3;+\\infty\\right)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên khoảng $\\left(-\\infty ;3\\right)$ bằng $1$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có một tiệm cận đứng và một tiệm cận xiên",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $M\\left(3;1\\right)$",
        "answer": false
      }
    ],
    "explain": "<br>- Đúng.<br>  Hàm số nghịch biến trên các khoảng $\\left(-\\infty ;3\\right)$ và $\\left(3;+\\infty\\right)$.<br>- Sai. <br>  Hàm số không có giá trị lớn nhất của hàm số trên khoảng $\\left(-\\infty ;3\\right)$.<br>- Sai. <br>  Đồ thị có tiệm cận đứng $ x=3 $ và không có tiệm cận xiên.<br>- Sai. <br>  Tại $ x=3 $, hàm số không xác định.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS1",
    "question": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau  <br><img src=\"data/12/2D1/im2D15/loc3_2_TL_TN_DS_THPT__009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên các khoảng $\\left(-\\infty ;3\\right)$ và $\\left(3;+\\infty\\right)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên khoảng $\\left(-\\infty ;3\\right)$ bằng $1$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có một tiệm cận đứng và một tiệm cận xiên",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $M\\left(3;1\\right)$",
        "answer": false
      }
    ],
    "explain": "<br>- Đúng.<br>  Hàm số nghịch biến trên các khoảng $\\left(-\\infty ;3\\right)$ và $\\left(3;+\\infty\\right)$.<br>- Sai. <br>  Hàm số không có giá trị lớn nhất của hàm số trên khoảng $\\left(-\\infty ;3\\right)$.<br>- Sai. <br>  Đồ thị có tiệm cận đứng $ x=3 $ và không có tiệm cận xiên.<br>- Sai. <br>  Tại $ x=3 $, hàm số không xác định.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D155DS1",
    "question": "Cho hàm số $y = f(x)$ có đạo hàm trên $\\mathbb{R}$ và $f'(x)$ là hàm số bậc ba có đồ thị là đường cong trong hình vẽ.  <br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_Chuyen_B_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số $g(x) = f(x) - \\dfrac{1}{2}x^2 + x + 2\\,025$ cắt đường thẳng $y = m$ tại bốn điểm phân biệt khi và chỉ khi $g(-1) &lt; m &lt; \\min\\{g(-3);g(1)\\}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $h(x) = \\dfrac{2x+1}{f'(x)}$ có $3$ đường tiệm cận",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ đồng biến trên khoảng $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số $y = f(x)$ có hai điểm cực trị",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $g'(x) = f'(x) - x + 1$. <br>  Vẽ đường thẳng $d\\colon y=x-1$ trên cùng hệ trục tọa độ với $y=f'(x)$.  <br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_Chuyen_B_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ đồ thị hàm số ta thấy $g'(x)=0\\Leftrightarrow x=-3 \\text{ hoặc } x=-1 \\text{ hoặc } x=1.$<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_Chuyen_B_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Để đồ thị hàm số $g(x)$ và đường thẳng $y=m$ cắt nhau tại $4$ điểm phân biệt thì  \\[\\min\\{g(-3), g(1)\\} &lt; m &lt; g(-1). \\]<br>- Đặt $f'(x)=a x^3+bx^2+cx+d$ $(a\\ne 0)$.<br>  Vì $f'(x)=0$ nên $x=-2 \\text{ hoặc } x=1.$<br>  Tập xác định của hàm số $h(x)$ là $\\mathscr{D}=\\mathbb{R}\\setminus \\{-2;1\\}$.<br>  Ta có  <br>- $\\lim\\limits_{x\\to \\pm\\infty}h(x)=0$. Suy ra đồ thị hàm số $h(x)$ có một đường tiệm cận ngang là $y=0$.<br>- Vì $\\lim\\limits_{x\\to (-2)^-}(2x+1)=-3&lt;0 \\text{ và } f'(-2)=0 \\text{ và } f'(x)&lt;0\\;,\\forall x&lt;-2$ nên $\\lim\\limits_{x\\to (-2)^-}h(x)=+\\infty$. Suy ra đồ thị hàm số $h(x)$ có một đường tiệm cận đứng là $x=-2$.<br>- Vì $\\lim\\limits_{x\\to 1^-}(2x+1)=3&gt;0 \\text{ và } f'(1)=0 \\text{ và } f'(x)&lt;0\\;, \\forall x&lt;1$ nên $\\lim\\limits_{x\\to 1^-}h(x)=-\\infty$. Suy ra đồ thị hàm số $h(x)$ có một đường tiệm cận đứng là $x=1$.  Vậy đồ thị của hàm số $h(x)$ có $3$ đường tiệm cận.<br>- Quan sát đồ thị hàm số, ta thấy $f'(x)&gt;0,\\; \\forall x&gt;1$ nên hàm số $y = f(x)$ đồng biến trên khoảng $(1;+\\infty)$.<br>- Quan sát đồ thị hàm số, ta thấy $f'(x)$ chỉ đổi dấu từ “ âm”~sang “ dương”~khi $x$ qua điểm $x_0=1$ nên đồ thị hàm số $y=f(x)$ có một điểm cực trị.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS36",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax+b}{cx+1}$ với $a,b,c\\in \\mathbb{R}$ có đồ thị như hình vẽ dưới.  <br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_DaoDuyTu_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số $f'(x)&lt;0,\\forall x\\in \\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên mỗi khoảng xác định",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y=f(x)$ có đường tiệm cận đứng là $x=1$ và đường tiệm cận ngang là $y=-1$",
        "answer": true
      },
      {
        "text": "Tổng $a+b+c=5$",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào hình vẽ, đạo hàm của hàm số $f'(x)&lt;0,\\forall x\\ne 1$.<br>- Từ đồ thị ta có hàm số $y=f(x)$ nghịch biến trên khoảng $(-\\infty ;1)$ và $(1;+\\infty )$.<br>- Đồ thị hàm số $y=f(x)$ có đường tiệm cận đứng là $x=1$ và đường tiệm cận ngang là $y=-1$.<br>- Đồ thị hàm số có đường tiệm cận đúng $x=-\\dfrac{1}{c}=1\\Rightarrow c=-1$.<br>  Đồ thị hàm số có đường tiệm cận ngang $y=\\dfrac{a}{c}=-1\\Rightarrow a=1$.<br>  Đồ thị hàm số cắt trục tung tại điểm $(0;-2)\\Rightarrow b=-2$.<br>  Vậy $a+b+c=1-2-1=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS37",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2-x+2}{x-2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Tiệm cận đứng của đồ thị $(C)$ là $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên $(0; 2)$",
        "answer": false
      },
      {
        "text": "Đường thẳng $y=x+1$ là tiệm cận xiên của đồ thị $(C)$",
        "answer": true
      },
      {
        "text": "Có $2\\,024$ giá trị nguyên của $m \\in [0; 2025]$ để đường thẳng $y=m$ cắt đồ thị $(C)$ tại hai điểm phân biệt",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\lim\\limits_{x \\to 2^-} \\dfrac{x^2-x+2}{x-2} = -\\infty$; $\\lim\\limits_{x \\to 2^+} \\dfrac{x^2-x+2}{x-2} = +\\infty$.<br>  Do đó đồ thị $(C)$ có tiệm cận đứng là $x=2$.<br>- Điều kiện xác định $x \\ne 2$.<br>  Ta có $y' = \\dfrac{x^2-4x}{(x-2)^2}$; $y'=0 \\Leftrightarrow x=0$ hoặc $x=4$.<br>  Bảng biến thiên  <br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_Lien_cap_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ bảng biến thiên suy ra hàm số nghịch biến trên $(0; 2)$.<br>- Điều kiện xác định $x \\ne 2$.<br>  Khi đó $y = \\dfrac{x^2-x+2}{x-2} = x+1 + \\dfrac{4}{x-2}$.<br>  Ta có $\\lim\\limits_{x \\to +\\infty} \\left[y - (x + 1)\\right] = \\lim\\limits_{x \\to \\infty} \\dfrac{4}{x-2} = 0$.<br>  Vậy đường thẳng $y=x+1$ là tiệm cận xiên của đồ thị $(C)$.<br>- Dựa vào bảng biến thiên, ta có đường thẳng $y=m$ cắt đồ thị $(C)$ tại hai điểm phân biệt khi $m &gt; 7$ hoặc $m &lt; -1$.<br>  Kết hợp điều kiện $m \\in [0; 2\\,025]$ và $m \\in \\mathbb{Z}$, ta cần tìm $m$ nguyên sao cho $m \\in (7; 2\\,025]$.<br>  Suy ra các giá trị $m$ thỏa mãn thuộc tập $\\{8; 9; \\dots, 2\\,025\\}$.<br>  Vậy có $2\\,025 - 8 + 1 = 2\\,018$ số nguyên $m$ thỏa mãn.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS38",
    "question": "Cho hàm số bậc ba $y=f(x)$ có đồ thị như hình vẽ.<br><img src=\"data/12/2D1/im2D15/loc8_TT_THPT_NguyenVi_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ nghịch biến trên khoảng $(-1;1)$",
        "answer": true
      },
      {
        "text": "Trên đoạn $[-2;2]$ hàm số $f(x)$ đạt giá trị lớn nhất bằng $2$",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)$ có hai điểm cực trị",
        "answer": true
      },
      {
        "text": "$f(x)=x^3-3x+1$",
        "answer": true
      }
    ],
    "explain": "<br>- Từ đồ thị hàm số, ta có đồ thị hàm số “ đi xuống”\\ trên khoảng $(-1;1)$ nên hàm số $y = f(x)$ nghịch biến trên khoảng $(-1;1)$.<br>- Từ đồ thị hàm số, ta có trên đoạn $[-2;2]$ hàm số $f(x)$ đạt giá trị lớn nhất bằng $3$ tại $x=-1$ và $x=2$.<br>- Từ đồ thị hàm số ta có hàm số $y = f(x)$ có hai điểm cực trị là $x=-1$ và $x=1$.<br>- Gọi hàm số bậc ba có đồ thị như hình có dạng $y=f(x)=ax^3+bx^2+cx+d$.<br>  Ta có đồ thị hàm số đi qua điểm $(0;1)$ nên $d=1$.<br>  Đồ thị hàm số đi qua các điểm có tọa độ $(-1;3)$; $(1;-1)$ và $(2;3)$ nên ta có hệ phương trình  \\[  a \\cdot (-1)^3+b \\cdot (-1)^2+c \\cdot (-1)+1 = 3 \\text{ và } a \\cdot 1^3+b \\cdot 1^2+c \\cdot 1+1 = -1 \\text{ và } a \\cdot 2^3+b \\cdot 2^2+c \\cdot 2+1 = 3  \\Leftrightarrow  -a+b - c = 2 \\text{ và } a+b+c = -2 \\text{ và } 8a+4b+2c = 2  \\Leftrightarrow  a = 1 \\text{ và } b = 0 \\text{ và } c = -3.  \\]  Vậy hàm số cần tìm là $f(x)=x^3-3x+1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS39",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax+b}{cx+1}$ với $a,b,c\\in \\mathbb{R}$ có đồ thị như hình vẽ dưới.<br><img src=\"data/12/2D1/im2D15/2D15_ex12_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số $f'(x)&lt;0,\\forall x\\in \\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên mỗi khoảng xác định",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số $y=f(x)$ có đường tiệm cận đứng là $x=1$ và đường tiệm cận ngang là $y=-1$",
        "answer": true
      },
      {
        "text": "Tổng $a+b+c=5$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Dựa vào hình vẽ, đạo hàm của hàm số $f'(x)&lt;0,\\forall x\\ne 1$.<br>- <strong>Đúng</strong>.<br>  Từ đồ thị ta có hàm số $y=f(x)$ nghịch biến trên khoảng $(-\\infty ;1)$ và $(1;+\\infty )$.<br>- <strong>Đúng</strong>.<br>  Đồ thị hàm số $y=f(x)$ có đường tiệm cận đứng là $x=1$ và đường tiệm cận ngang là $y=-1$.<br>- <strong>Sai</strong>.<br>  Đồ thị hàm số có đường tiệm cận đúng $x=-\\dfrac{1}{c}=1\\Rightarrow c=-1$.<br> Đồ thị hàm số có đường tiệm cận ngang $y=\\dfrac{a}{c}=-1\\Rightarrow a=1$.<br> Đồ thị hàm số cắt trục tung tại điểm $(0;-2)\\Rightarrow b=-2$.<br> Vậy $a+b+c=1-2-1=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS40",
    "question": "Cho hàm số bậc ba $f(x)=ax^3+bx^2+cx+d,\\ (a\\ne 0)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ.<br><br><img src=\"data/12/2D1/im2D15/2D15_ex12_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Trong bốn giá trị $a$, $b$, $c$, $d$ có đúng một giá trị bằng $0$",
        "answer": false
      },
      {
        "text": "Hàm số $y=f(x)$ là hàm số lẻ trên tập $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Điểm cực tiểu của đồ thị hàm số $y=f(x)$ là $x=-1$",
        "answer": false
      },
      {
        "text": "Số nghiệm thực của phương trình $f(x)=\\dfrac{2\\,025}{2\\,026}$ là $3$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Dựa vào đồ thị<br><br>- Đồ thị đi qua gốc tọa độ $O(0;0) \\Rightarrow d=0$.<br><br>- Đồ thị nhận gốc tọa độ $O$ làm tâm đối xứng nên là hàm số lẻ $\\Rightarrow b=0$.<br><br>- Hàm số đạt cực trị tại $x=\\pm 1$.<br> Ta có $f'(x) = 3ax^2 + 2bx + c$. Vì $b=0$ nên $f'(x) = 3ax^2 + c$.<br> $f'(1) = 3a + c = 0 \\Rightarrow c = -3a$.<br> $f(1) = a + c = 2 \\Rightarrow a - 3a = 2 \\Rightarrow -2a = 2 \\Rightarrow a = -1$.<br> Suy ra $c = 3$.<br>Vậy $a=-1$, $b=0$, $c=3$, $d=0$. Có hai giá trị bằng $0$ là $b$ và $d$.<br>- <strong>Đúng</strong>.<br>  Hàm số có $b=0, d=0$ nên $f(x) = -x^3 + 3x$. Ta có $f(-x) = -(-x)^3 + 3(-x) = x^3 - 3x = -f(x)$. Vậy đây là hàm số lẻ.<br>- <strong>Sai</strong>.<br>  Điểm cực tiểu của đồ thị hàm số là $(-1;-2)$.<br>- <strong>Đúng</strong>.<br>  Phương trình $f(x) = \\dfrac{2\\,025}{2\\,026} \\approx 0{,}999$.<br> Giá trị cực đại là $2$, giá trị cực tiểu là $-2$.<br> Vì $-2 &lt; 0{,}999 &lt; 2$ nên đường thẳng $y = \\dfrac{2\\,025}{2\\,026}$ cắt đồ thị hàm số tại $3$ điểm phân biệt.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS41",
    "question": "Đồ thị cùa hàm số $y=ax+b+\\dfrac{c}{x+d}$ là hình bên<br><br><img src=\"data/12/2D1/im2D15/2D15_ex12_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên khoảng $(0;1)$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{x\\to 1^+}y=-\\infty $",
        "answer": false
      },
      {
        "text": "Phương trình đường tiệm cận xiên của đồ thị hàm số là $y=x+1$",
        "answer": true
      },
      {
        "text": "Tổng $a+b+c+d=2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Dựa vào đồ thị hàm số, ta thấy hàm số nghịch biến trên khoảng $ (0;1)$.<br>- <strong>Sai</strong>.<br>  Dựa vào đồ thị hàm số, ta thấy $\\lim\\limits_{x\\to 1^+}y=+\\infty$.<br>- <strong>Đúng</strong>.<br>  Phương trình đường tiệm cận xiên của đồ thị hàm số có dạng $ y=ax+b$. (1)<br> Do đường tiệm cận xiên đi qua $2$ điểm $(0;1)$ và $(1;2)$, ta thay vào $(1)$ ta có hệ phương trình: $\\begin{cases}& b=1\\\\& a+b=2\\end{cases} \\Leftrightarrow\\begin{cases}& b=1\\\\& a=1\\end{cases} \\Rightarrow $ phương trình đường tiệm cận xiên của đồ thị hàm số là $y=x+1$.<br>- <strong>Đúng</strong>.<br>  Dựa vào đồ thị hàm số, phương trình đường tiệm cận đứng là $x=1$.<br> Nên mẫu số có dạng $x-1\\Rightarrow d=-1$.<br> Kết hợp phương trình đường tiệm cận xiên của đồ thị hàm số là $ y=x+1$.<br> Ta có $y=x+1+\\dfrac{c}{x-1}$. (2)<br> Đồ thị hàm số đi qua điểm $(0;0)$ thay vào $(2)$ ta được $ 0+1+\\dfrac{c}{0-1}=0\\Leftrightarrow c=1$.<br> Vậy tổng $ a+b+c+d=1+1+1-1=2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS42",
    "question": "Cho hàm số $f(x)=x^3+3x^2-4$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có đạo hàm là $f'(x)=3x^2+6x$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho đồng biến trên khoảng $(-1;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho đạt cực đại tại $x=-2$",
        "answer": true
      },
      {
        "text": "Đồ thị của hàm số đã cho có dạng như hình vẽ sau",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đạo hàm của hàm số là $f'(x)=3x^2+6x$.<br>- <strong>Sai</strong>.<br>  Xét $f'(x)=0\\Leftrightarrow 3x^2+6x=0\\Leftrightarrow \\left[\\begin{aligned}&x=0\\\\&x=-2.\\end{aligned}\\right.$<br> Bảng biến thiên<br><img src=\"data/12/2D1/im2D15/2D15_ex12_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên ta thấy hàm số đồng biến trên khoảng $(0;+\\infty)$.<br>- <strong>Đúng</strong>.<br>  Từ bảng biến thiên ta thấy hàm số đạt cực đại tại $x=-2$.<br>- <strong>Đúng</strong>.<br>  Ta thấy tại $x=-2$ thì $y=0$; tại $x=0$ thì $y=-4$.<br> Do đó đồ thị hàm số đã cho có dạng như hình vẽ sau<br><img src=\"data/12/2D1/im2D15/2D15_ex12_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS43",
    "question": "Cho hàm số $f(x) = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có đồ thị như hình vẽ sau<br><br><img src=\"data/12/2D1/im2D15/2D15_ex12_030.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $f(x)$ đạt cực đại tại điểm $x = -1$",
        "answer": false
      },
      {
        "text": "Giá trị lớn nhất của hàm số $g(x) = 26x - f(x)$ trên đoạn $[0; 4]$ bằng $105$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ nghịch biến trên khoảng $(0; 4)$",
        "answer": true
      },
      {
        "text": "$16a - 8b + 3c + d = 11$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Dựa vào đồ thị, hàm số đạt cực đại tại điểm $x = 0$ và đạt cực tiểu tại điểm $x = 4$.<br>- <strong>Đúng</strong>.<br>  Từ đồ thị, ta xác định các hệ số của hàm số $f(x)$<br><br>- Đồ thị cắt trục $Oy$ tại $(0; 3)$ nên $f(0) = 3 \\Rightarrow d = 3$.<br><br>- Điểm cực đại tại $x = 0$ nên $f'(0) = 0 \\Rightarrow c = 0$.<br><br>- Điểm cực tiểu tại $x = 4$ nên $f'(4) = 0 \\Rightarrow 48a + 8b + c = 0 \\Rightarrow 6a + b = 0$.<br><br>- Đồ thị đi qua điểm $(4; -1)$ nên \\[f(4) = -1 \\Rightarrow 64a + 16b + 4c + d = -1 \\Rightarrow 64a + 16b = -4 \\Rightarrow 16a + 4b = -1.\\]<br>Giải hệ phương trình $\\begin{cases}&6a + b = 0 \\\\ &16a + 4b = -1\\end{cases}$ ta được $a = \\dfrac{1}{8}$, $b = -\\dfrac{3}{4}$.<br> Vậy $f(x) = \\dfrac{1}{8}x^3 - \\dfrac{3}{4}x^2 + 3$.<br> Xét $g(x) = 26x - f(x) = -\\dfrac{1}{8}x^3 + \\dfrac{3}{4}x^2 + 26x - 3$ trên $[0; 4]$.<br> $g'(x) = -\\dfrac{3}{8}x^2 + \\dfrac{3}{2}x + 26$. Trên đoạn $[0; 4]$, $g'(x) &gt; 0$ nên hàm số $g(x)$ đồng biến.<br> Suy ra $\\max\\limits_{[0; 4]} g(x) = g(4) = 26 \\cdot 4 - f(4) = 104 -(-1) = 105$.<br>- <strong>Đúng</strong>.<br>  Dựa vào đồ thị, hàm số đi xuống từ điểm cực đại $(0; 3)$ đến điểm cực tiểu $(4; -1)$ nên hàm số nghịch biến trên khoảng $(0; 4)$.<br>- <strong>Đúng</strong>.<br>  Ta có $16a - 8b + 3c + d = 16 \\cdot \\dfrac{1}{8} - 8 \\cdot \\left(-\\dfrac{3}{4}\\right) + 3 \\cdot 0 + 3 = 2 + 6 + 3 = 11$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D151DS44",
    "question": "Cho hàm số $y=\\dfrac{ax^2+bx+c}{x+d}$ ($a\\ne 0$) có đồ thị là đường cong $(C)$. Các đường thẳng $d_1$, $d_2$ lần lượt là tiệm cận đứng và tiệm cận xiên của đường cong $(C)$ như hình vẽ.<br><img src=\"data/12/2D1/im2D15/2D15_ex12_031.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ đi qua điểm có toạ độ $(0;2)$",
        "answer": false
      },
      {
        "text": "Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=-1$",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ có tiệm cận xiên là đường thẳng $y=x$",
        "answer": true
      },
      {
        "text": "Giá trị của tổng $a+b+c+d$ là một số âm",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Đồ thị $(C)$ có điểm chung với trục $Oy$ và điểm chung này có tung độ âm.<br>- <strong>Đúng</strong>.<br>  Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=-1$.<br>- <strong>Đúng</strong>.<br>  Đồ thị $(C)$ có tiệm cận xiên là đường thẳng $y=x$.<br>- <strong>Đúng</strong>.<br>  Ta có<br><br>- Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=-1$ nên $d=1 \\Rightarrow y=\\dfrac{ax^2+bx+c}{x+1}$.<br><br>- Đồ thị $(C)$ đi qua điểm $(2;0)$ nên $0=\\dfrac{a\\cdot2^2+b\\cdot2+c}{2+1}\\Rightarrow 4a+2b+c=0$ (1).<br><br>- $y=\\dfrac{ax^2+bx+c}{x+1}=ax+b-a+\\dfrac{a-b+c}{x+1}$.<br> Suy ra đồ thị hàm số $y=\\dfrac{ax^2+bx+c}{x+1}$ có đường tiệm cận xiên là đường thẳng $y=ax+b-a$.<br> Dựa vào hình vẽ thì đồ thị hàm số $y=\\dfrac{ax^2+bx+c}{x+1}$ có tiệm cận xiên là đường thẳng $y=x$ nên $\\begin{cases}& a=1\\\\ & b-a=0\\end{cases}\\Leftrightarrow a=b=1$ (2).<br> Từ (1) và (2) $\\Rightarrow a=b=1$, $c=-6$.<br> Suy ra $a+b+c+d=1+1-6+1=-3$.<br>Vậy, $a+b+c+d$ là một số âm.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D153DS45",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2-x+2}{x-2}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=2$",
        "answer": true
      },
      {
        "text": "Đường thẳng $y=x+1$ là tiệm cận xiên của đồ thị hàm số",
        "answer": true
      },
      {
        "text": "Đồ thị $(C)$ đi qua điểm $M(0;1)$",
        "answer": false
      },
      {
        "text": "Có đúng $3$ giá trị $m$ nguyên thuộc đoạn $\\left[0;10\\right]$ để đường thẳng $y=m$ cắt đồ thị $(C)$ tại hai điểm phân biệt",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R} \\setminus \\{2\\}$.<br> $\\lim\\limits_{x\\to 2^{+}}f(x)=+\\infty$ nên đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x=2$.<br>- <strong>Đúng</strong>.<br>  $y=\\dfrac{x^2-x+2}{x-2}=x+1+\\dfrac{4}{x-2}$ nên $y=x+1$ là tiệm cận xiên của đồ thị hàm số.<br>- <strong>Sai</strong>.<br>  Với $x=0$ suy ra $y=-1$. Vậy điểm $(0;-1)\\in (C)$.<br>- <strong>Đúng</strong>.<br>  $y'=\\dfrac{x^2-4 x}{(x-2)^2}$.<br> $y'=0 \\Leftrightarrow\\left[\\begin{aligned}&x=0\\\\&x=4.\\end{aligned}\\right.$<br> Ta có bảng biến thiên<br><img src=\"data/12/2D1/im2D15/2D15_ex12_028.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Đường thẳng $y=m$ cắt $(C)$ tại hai điểm phân biệt khi và chỉ khi $m&gt;7$ hoặc $m&lt;-1$.<br> Vì $m$ là số nguyên thuộc $[0;10]$ nên $m \\in\\{8,9,10\\}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D154DS46",
    "question": "Cho hàm số $y = f(x)$ có đạo hàm trên $\\mathbb{R}$ và $f'(x)$ là hàm số bậc ba có đồ thị là đường cong trong hình vẽ.<br><img src=\"data/12/2D1/im2D15/2D15_ex12_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số $g(x) = f(x) - \\dfrac{1}{2}x^2 + x + 2\\,025$ cắt đường thẳng $y = m$ tại bốn điểm phân biệt khi và chỉ khi $g(-1) &lt; m &lt; \\min\\{g(-3);g(1)\\}$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $h(x) = \\dfrac{2x+1}{f'(x)}$ có $3$ đường tiệm cận",
        "answer": true
      },
      {
        "text": "Hàm số $y = f(x)$ đồng biến trên khoảng $(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Hàm số $y = f(x)$ có hai điểm cực trị",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Từ đồ thị: $f'(x)=(x+2)^2(x-1)$. Ta có $g'(x)=f'(x)-x+1=(x-1)\\left[(x+2)^2-1\\right]=(x-1)(x+1)(x+3)$. Do đó $g$ giảm trên $(-\\infty;-3)$, tăng trên $(-3;-1)$, giảm trên $(-1;1)$, tăng trên $(1;+\\infty)$; $g(-1)$ là cực đại, $g(-3),g(1)$ là cực tiểu. Đường thẳng $y=m$ cắt đồ thị tại 4 điểm phân biệt khi và chỉ khi $\\max\\{g(-3);g(1)\\}&lt;m&lt;g(-1)$. Mệnh đề đã cho ($g(-1)&lt;m&lt;\\min\\{g(-3);g(1)\\}$) không thể xảy ra nên sai.<br>- <strong>Đúng</strong>.<br>  Đặt $f'(x)=a x^3+bx^2+cx+d$ $(a\\ne 0)$.<br> Vì $f'(x)=0$ nên $\\left[\\begin{aligned}&x=-2\\\\&x=1.\\end{aligned}\\right.$<br> Tập xác định của hàm số $h(x)$ là $\\mathscr{D}=\\mathbb{R}\\setminus \\{-2;1\\}$.<br> Ta có<br><br>- $\\lim\\limits_{x\\to \\pm\\infty}h(x)=0$. Suy ra đồ thị hàm số $h(x)$ có một đường tiệm cận ngang là $y=0$.<br><br>- Vì $\\begin{cases}&\\lim\\limits_{x\\to (-2)^-}(2x+1)=-3&lt;0\\\\&f'(-2)=0\\\\&f'(x)&lt;0\\;,\\forall x&lt;-2\\end{cases}$ nên $\\lim\\limits_{x\\to (-2)^-}h(x)=+\\infty$. Suy ra đồ thị hàm số $h(x)$ có một đường tiệm cận đứng là $x=-2$.<br><br>- Vì $\\begin{cases}&\\lim\\limits_{x\\to 1^-}(2x+1)=3&gt;0\\\\&f'(1)=0\\\\&f'(x)&lt;0\\;, \\forall x&lt;1\\end{cases}$ nên $\\lim\\limits_{x\\to 1^-}h(x)=-\\infty$. Suy ra đồ thị hàm số $h(x)$ có một đường tiệm cận đứng là $x=1$.<br>Vậy đồ thị của hàm số $h(x)$ có $3$ đường tiệm cận.<br>- <strong>Sai</strong>.<br>  Quan sát đồ thị hàm số, ta thấy $f'(x)&gt;0,\\; \\forall x&gt;1$ nên hàm số $y = f(x)$ đồng biến trên khoảng $(1;+\\infty)$.<br>- <strong>Sai</strong>.<br>  Quan sát đồ thị hàm số, ta thấy $f'(x)$ chỉ đổi dấu từ “ âm” sang “ dương” khi $x$ qua điểm $x_0=1$ nên đồ thị hàm số $y=f(x)$ có một điểm cực trị.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D154DS47",
    "question": "Cho hàm số $ f(x)=\\mathrm{e}^x-2x+\\mathrm{e}$. Khi đó",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số $f(x)$ là $\\mathscr{D}=\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Đạo hàm của hàm số $f(x)$ là $f'(x)=\\mathrm{e}^x-2$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $\\left[0;2\\right]$ bằng $\\mathrm{e}^2+\\mathrm{e}$",
        "answer": false
      },
      {
        "text": "Đường cong $y=f(x)$ cắt đường thẳng $y=-2x$ tại hai điểm phân biệt",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Hàm số $f(x)=\\mathrm{e}^x-2x+\\mathrm{e}$ xác định với mọi $x\\in\\mathbb{R}$ nên tập xác định là $\\mathscr{D}=\\mathbb{R}$.<br>- <strong>Đúng</strong>.<br>  Ta có $f'(x)=\\mathrm{e}^x-2$.<br>- <strong>Sai</strong>.<br>  Ta có $f'(x)=0\\Leftrightarrow \\mathrm{e}^x-2\\Leftrightarrow\\mathrm{e}^x=2\\Leftrightarrow x=\\ln 2\\in\\left[0;2\\right]$.<br> Ta có $f(0)=1+\\mathrm{e}$, $f\\left(\\ln 2\\right)= 2 + \\mathrm{e} -2\\ln 2$, $f(2)=\\mathrm{e}^2-4+\\mathrm{e}$.<br> So sánh các giá trị ta thấy $\\max\\limits_{\\left[0;2\\right]} f(x)= f(2)=\\mathrm{e}^2-4+\\mathrm{e}$.<br>- <strong>Sai</strong>.<br>  Phương trình hoành độ giao điểm $\\mathrm{e}^x-2x+\\mathrm{e}=-2x\\Leftrightarrow \\mathrm{e}^x+\\mathrm{e}=0$.<br> Phương trình này vô nghiệm nên đường cong $y=f(x)$ không cắt đường thẳng $ y=-2x$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D154DS48",
    "question": "Cho hàm số $y=\\dfrac{x+1}{x-1}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số nghịch biến trên khoảng $(1;+\\infty)$",
        "answer": true
      },
      {
        "text": "Biết cả hai đường thẳng $d_1\\colon y=a_1x+b_1$; $d_2\\colon y=a_2x+b_2$ đi qua điểm $I(1;1)$, cắt đồ thị $(C)$ tại $4$ điểm tạo thành một hình chữ nhật có $a_1+a_2=\\dfrac{5}{2}$. Khi đó giá trị biểu thức $b_1\\cdot b_2=-\\dfrac{1}{2}$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của hàm số trên $[2;5]$ là $3$",
        "answer": true
      },
      {
        "text": "Đường tiệm cận đứng của đồ thị hàm số có phương trình $y=1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br> Ta có $y'=\\dfrac{-2}{\\left(x-1\\right)^2}$, suy ra $y'&lt;0$, $\\forall x\\ne 1$.<br> Suy ra hàm số nghịch biến trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$.<br>- <strong>Đúng</strong>.<br>  <br><img src=\"data/12/2D1/im2D15/2D15_ex12_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Gọi $\\alpha$, $\\beta$ lần lượt là góc tạo bởi $d_1$, $d_2$ với trục $Ox\\Rightarrow{a_1}=\\tan\\alpha$, $a_2=\\tan\\beta $.<br> Để hai đường thẳng $d_1$, $d_2$ cắt đồ thị $(C)$ tại $4$ điểm tạo thành một hình chữ nhật $ABCD$ thì $ABCD$ phải nhận đường thẳng $y=x$ làm trục đối xứng và nhận $I(1;1)$ làm tâm đối xứng.<br> Khi đó $\\alpha+\\beta=90^\\circ\\Rightarrow\\tan\\alpha=\\cot\\beta\\Rightarrow{a_1}=\\dfrac{1}{a_2}\\Rightarrow a_1\\cdot a_2=1$.<br> Ta có $\\begin{cases}&a_1+a_2=\\dfrac{5}{2}\\\\ &a_1\\cdot a_2=1\\end{cases}$ suy ra $a_1$, $a_2$ là hai nghiệm phương trình $X^2-\\dfrac{5}{2}X+1=0$.<br> Phương trình có hai nghiệm $\\left[\\begin{aligned} & X=2\\\\ & X=\\dfrac{1}{2}\\end{aligned}\\right.\\Rightarrow\\begin{cases}&a_1=2\\\\ &a_2=\\dfrac{1}{2}.\\end{cases}$<br> Vì $d_1\\colon y=a_1x+b_1$; $d_2\\colon y=a_2x+b_2$ đi qua điểm $I(1;1)$ nên $$\\begin{cases} &a_1+b_1=1\\\\ &a_2+b_2=1\\end{cases}\\Rightarrow\\begin{cases}&b_1=-1\\\\ &b_2=\\dfrac{1}{2}\\end{cases}\\Rightarrow b_1\\cdot b_2=-\\dfrac{1}{2}.$$<br>- <strong>Đúng</strong>.<br>  Hàm số nghịch biến trên đoạn $[2;5]$ nên $\\max\\limits_{[2;5]}y=y(2)=3$.<br>- <strong>Sai</strong>.<br>  Ta có $\\lim\\limits_{x\\to1^+}y=\\lim\\limits_{x\\to1^+}\\dfrac{x+1}{x-1}=+\\infty $; $\\lim\\limits_{x\\to1^-}y=\\lim\\limits_{x\\to1^-}\\dfrac{x+1}{x-1}=-\\infty $.<br> Suy ra đồ thị hàm số có tiệm cận đứng $x=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D155DS49",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax+b}{x+c}$ có giá trị lớn nhất trên đoạn $[3;4]$ bằng $7$ và có đồ thị $y=f'(x)$ như hình vẽ. Khi đó<br><br><img src=\"data/12/2D1/im2D15/2D15_ex12_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đồ thị $y=f'(x)$ có đường tiệm cận đứng là $x=2$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ nghịch biến trên khoảng $(2;+\\infty)$",
        "answer": true
      },
      {
        "text": "$3b+2c=-2$",
        "answer": false
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[3;4]$ bằng $6$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có từ đồ thị hàm số $y=f'(x)$, đường tiệm cận đứng là $x=2$.<br>- <strong>Đúng</strong>.<br>  Ta có trên khoảng $(2;+\\infty)$ đồ thị $y=f'(x)$ nằm dưới trục hoành, nên $f'(x)&lt;0$, $\\forall x \\in (2;+\\infty)$.<br> Do đó hàm số $y=f(x)$ nghịch biến trên khoảng $(2;+\\infty)$.<br>- <strong>Sai</strong>.<br>  Ta có $y=f'(x)=\\dfrac{ac-b}{(x+c)^2}$.<br> Từ giả thiết ta có \\[\\begin{cases}&f(3)=7 \\\\ &f'(0)=-1 \\\\ &-c=2\\end{cases} \\Leftrightarrow \\begin{cases}&\\dfrac{3a+b}{3+c}=7 \\\\ &\\dfrac{ac-b}{c^2}=-1 \\\\ &c=-2\\end{cases} \\Leftrightarrow \\begin{cases}&3a+b=7 \\\\ &-2a-b=-4 \\\\ &c=-2\\end{cases} \\Leftrightarrow \\begin{cases}&a=3 \\\\ &b=-2 \\\\ &c=-2.\\end{cases}\\] Vậy $3b+2c=3 \\cdot (-2)+2 \\cdot (-2)=-10$.<br>- <strong>Sai</strong>.<br>  Vì trên đoạn $[3;4]$ hàm số nghịch biến nên $\\min\\limits_{[3;4]} f(x)=f(4)=5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D155DS50",
    "question": "Cho hàm số bậc bốn $y=f(x)$. Hàm số $y=f'(x)$ có đồ thị như hình vẽ bên.<br><br><img src=\"data/12/2D1/im2D15/2D15_ex12_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ nghịch biến trên khoảng $(-\\infty;-2)$",
        "answer": true
      },
      {
        "text": "Hàm số $y=f(x)$ có ba điểm cực trị",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số trên đoạn $[-2;2]$ là $f(0)$",
        "answer": false
      },
      {
        "text": "Biết $f(0)&gt;0$. Khi đó phương trình $f(x)=0$ có tối đa ba nghiệm phân biệt",
        "answer": false
      }
    ],
    "explain": "Từ đồ thị hàm số $f'(x)$, ta có bảng biến thiên của hàm số $y=f(x)$<br><img src=\"data/12/2D1/im2D15/2D15_ex12_016.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Đúng</strong>.<br>  Hàm số nghịch biến trên khoảng $(-\\infty;-2)$.<br>- <strong>Đúng</strong>.<br>  Dựa vào bảng biến thiên, hàm số $y=f(x)$ có ba điểm cực trị.<br>- <strong>Sai</strong>.<br>  Trên đoạn $[-2;2]$, $f(0)$ không phải là giá trị nhỏ nhất.<br>- <strong>Sai</strong>.<br>  Từ BBT, $f(0)$ là cực đại, $f(-2),f(2)$ là hai cực tiểu và $f\\to+\\infty$ khi $x\\to\\pm\\infty$. Với $f(0)&gt;0$, nếu $f(\\pm2)&lt;0$ thì phương trình $f(x)=0$ có $4$ nghiệm phân biệt (mỗi khoảng $(-\\infty;-2),(-2;0),(0;2),(2;+\\infty)$ có một nghiệm). Do đó số nghiệm tối đa là $4$, không phải $3$. Mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D156DS51",
    "question": "Cho hàm số $y=\\dfrac{x-1}{x+2}$ có đồ thị $\\left (C\\right )$. Gọi $I$ là giao điểm của hai tiệm cận của $\\left (C\\right )$.",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên $\\mathbb{R}\\setminus\\{-2\\}$",
        "answer": false
      },
      {
        "text": "Hàm số có tâm đối xứng $I(-2;1)$",
        "answer": true
      },
      {
        "text": "Phương trình tiếp tuyến của đồ thị $\\left (C\\right )$ tại điểm $x=1$ là $y=\\dfrac{1}{3}x-\\dfrac{1}{3}$",
        "answer": true
      },
      {
        "text": "Xét tam giác đều $ABI$ có hai đỉnh $A$, $B$ thuộc $\\left (C\\right )$. Đoạn thẳng $AB$ có độ dài bằng $2\\sqrt{3}$",
        "answer": true
      }
    ],
    "explain": "Đặt $y=f(x)=\\dfrac{x-1}{x+2}$. Ta có $y=f(x)=\\dfrac{x-1}{x+2}=1+\\dfrac{-3}{x+2}$.<br>- <strong>Sai</strong>.<br>  Tập xác định của hàm số $\\mathscr{D}=\\mathbb{R}\\setminus\\{-2\\}$.<br> Ta có $y'=f'(x)=\\dfrac{3}{(x+2)^2}&gt;0$ với mọi $x\\in\\mathscr{D}$.<br> Suy ra hàm số đã cho đồng biến trên mỗi khoảng $\\left (-\\infty;-2\\right )$ và $\\left (-2;+\\infty\\right )$.<br>- <strong>Đúng</strong>.<br>  Ta có<br><br>- $\\begin{cases}&\\lim \\limits_{x\\to-2^{+}}{y}=-\\infty\\\\&\\lim \\limits_{x\\to-2^{-}}{y}=+\\infty\\end{cases}$. Suy ra tiệm cận đứng của $\\left (C\\right )$ có phương trình $x=-2$.<br><br>- $\\begin{cases}&\\lim\\limits_{x\\to-\\infty}y=1\\\\&\\lim\\limits_{x\\to+\\infty}y=1\\end{cases}$. Suy ra tiệm cận ngang của $\\left (C\\right )$ có phương trình $y=1$.<br><br>- $I$ là giao điểm của hai đường tiệm cận của $\\left (C\\right )$ nên $I(-2;1)$.<br>- <strong>Đúng</strong>.<br>  Ta có $f(1)=0$ và $f'(1)=\\dfrac{1}{3}$. Tiếp tuyến của đồ thị $(C)$ đi qua điểm $(1;0)$ và có hệ số góc $k=f'(1)=\\dfrac{1}{3}$ có phương trình là $$y=f'(1)\\left (x-1\\right )+f(1)\\Leftrightarrow y=\\dfrac{1}{3}\\left (x-1\\right )+0\\Leftrightarrow y=\\dfrac{1}{3}x-\\dfrac{1}{3}.$$<br>- <strong>Đúng</strong>.<br>  Đặt $X=x+2,\\ Y=y-1$: đồ thị trở thành $XY=-3$ với $I$ là gốc. Tam giác $IAB$ đều thì $A,B$ cùng một nhánh và đối xứng qua đường phân giác $Y=-X$, nên $IA$, $IB$ lập với $Ox$ các góc $-15^\\circ$ và $-75^\\circ$. Điểm trên tia góc $\\theta$ cách $I$ một đoạn $r$ thỏa $r^2\\sin\\theta\\cos\\theta=-3\\Rightarrow r^2=\\dfrac{-6}{\\sin2\\theta}=\\dfrac{-6}{\\sin(-30^\\circ)}=12$. Vậy $AB=IA=\\sqrt{12}=2\\sqrt{3}$. Mệnh đề đúng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D156DS52",
    "question": "Cho hàm số $ y=x^3-3x^2+5$ có đồ thị là $(C)$. Khi đó",
    "subQuestions": [
      {
        "text": "Hàm số đã cho nghịch biến trên khoảng $\\left(0;2\\right)$",
        "answer": true
      },
      {
        "text": "Hàm số đã cho có hai điểm cực trị",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của hàm số đã cho trên khoảng $(0;+\\infty)$ bằng $2$",
        "answer": false
      },
      {
        "text": "Tiếp tuyến của đồ thị $(C)$ tại điểm có hoành độ bằng $1$ là đường thẳng có phương trình $ y=-3x+3$",
        "answer": false
      }
    ],
    "explain": "Ta có $y=x^3-3x^2+5$ suy ra $y'=3x^2-6x$.<br> Khi đó $y'=0\\Leftrightarrow3x^2-6x=0\\Leftrightarrow\\left[\\begin{aligned}&x=0\\\\&x=2.\\end{aligned}\\right.$<br> Bảng biến thiên của hàm số<br><img src=\"data/12/2D1/im2D15/2D15_ex12_018.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Dựa vào bảng biến thiên ta thấy<br>- <strong>Đúng</strong>.<br>  Hàm số nghịch biến trên $(0;2)$.<br>- <strong>Đúng</strong>.<br>  Hàm số có hai điểm cực trị.<br>- <strong>Sai</strong>.<br>  Hàm số có giá trị nhỏ nhất trên $(0;+\\infty)$ là $1$.<br>- <strong>Sai</strong>.<br>  Khi $x=1\\Rightarrow y=3$ và $y'(1)=-3$.<br> Phương trình tiếp tuyến tại $ x=1$ là $ y=-3\\cdot(x-1)+3=-3x+6$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D156DS53",
    "question": "Cho hàm số $y = \\dfrac{2x^2 - 5x + 7}{x - 5}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Tổng tất cả các giá trị cực trị của hàm số bằng $30$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng $(-1; 5)$",
        "answer": false
      },
      {
        "text": "Đường tiệm cận xiên của đồ thị $(C)$ có phương trình $y = 2x - 5$",
        "answer": false
      },
      {
        "text": "Tiếp tuyến của $(C)$ tại điểm $M(3; -5)$ cắt các đường tiệm cận đứng và tiệm cận xiên lần lượt tại $P$, $Q$. Diện tích tam giác $OPQ$ là $52$, với $O$ là gốc tọa độ",
        "answer": false
      }
    ],
    "explain": "Tập xác định là $\\mathscr{D}=\\mathbb{R}\\setminus \\left\\lbrace 5\\right\\rbrace $.<br> Ta có $\\dfrac{2x^2 - 5x + 7}{x - 5} = 2x + 5 + \\dfrac{32}{x - 5}$.<br> Suy ra $\\lim\\limits_{x\\rightarrow+\\infty}\\left[y-(2x+5)\\right] =\\lim\\limits_{x\\rightarrow+\\infty}\\dfrac{32}{x-5}=0$.<br> $\\lim\\limits_{x\\rightarrow-\\infty}\\left[y-(2x+5)\\right]=\\lim\\limits_{x\\rightarrow-\\infty}\\dfrac{32}{x-5}=0$.<br> Suy ra đồ thị hàm số có tiệm cận xiên $y = 2x + 5$.<br> Ta có $\\lim\\limits_{x\\rightarrow 5^+}\\dfrac{2x^2 - 5x + 7}{x - 5}=+\\infty$ và $\\lim\\limits_{x\\rightarrow 5^-}\\dfrac{2x^2 - 5x + 7}{x - 5}=-\\infty$.<br> Suy ra đồ thị hàm số có tiệm cận đứng $x = 5$.<br> Ta có $y' = \\dfrac{(4x - 5)(x - 5) - (2x^2 - 5x + 7)}{(x - 5)^2} = \\dfrac{2x^2 - 20x + 18}{(x - 5)^2}$. <br> $y' = 0 \\Leftrightarrow 2x^2 - 20x + 18 = 0 \\Leftrightarrow \\left[\\begin{aligned}&x=1\\\\& x=9\\end{aligned}\\right.\\Rightarrow \\left[\\begin{aligned}&y=-1\\\\&y=31.\\end{aligned}\\right. $<br> Ta có bảng biến thiên như sau<br><img src=\"data/12/2D1/im2D15/2D15_ex12_034.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Đúng</strong>.<br>  Dựa vào bảng biến thiên ta có tổng giá trị cực đại và cực tiểu là $-1 + 31 = 30$.<br>- <strong>Sai</strong>.<br>  Dựa vào bảng biến thiên ta thấy hàm số nghịch biến trên $(1; 5)$ và $(5; 9)$.<br>- <strong>Sai</strong>.<br>  Đường tiệm cận xiên của đồ thị hàm số là $y = 2x + 5$.<br>- <strong>Sai</strong>.<br>  $y'(3) = \\dfrac{2\\cdot 9 - 60 + 18}{4} = -6$. <br> Phương trình tiếp tuyến $(d)$ của $(C)$ tại điểm $M(3; -5)$ là $$y + 5 = -6(x - 3)\\Leftrightarrow y = -6x + 13.$$ Giao điểm của $(d)$ với tiệm cận đứng $x = 5 \\Rightarrow y = -6 \\cdot 5 + 13 = -17$ ta được $P(5;-17)$ <br> Giao với tiệm cận xiên $-6x + 13 = 2x + 5 \\Leftrightarrow x = 1 \\Rightarrow y = 7$ ta được $Q(1; 7)$ <br> Diện tích tam giác $OPQ$ là $S = \\dfrac{1}{2} \\left| 5 \\cdot 7 - (-17) \\cdot 1\\right|= 26$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D157DS54",
    "question": "Cho hàm số $f(x)=\\dfrac{2x^{2}-5x+9}{x-5}$. Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $-\\dfrac{9}{5}$",
        "answer": true
      },
      {
        "text": "Hàm số nghịch biến trên khoảng ($1;9$)",
        "answer": false
      },
      {
        "text": "Có đúng một điểm trên đồ thị cách đều hai trục tọa độ",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số có tiệm cận đứng là $y=5$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Với $x=0\\Rightarrow f(0)=-\\dfrac{9}{5}$.<br> Vậy đồ thị hàm số cắt trục tung tại điểm có tung độ bằng $-\\dfrac{9}{5}$.<br>- <strong>Sai</strong>.<br>  Tập xác định của hàm số là $\\mathbb{R}\\backslash\\{5\\}$ suy ra hàm số đã cho không xác định $\\forall x\\in(1;9)$.<br>- <strong>Sai</strong>.<br>  Gọi $M\\left(x_{0};y_{0}\\right)$ thuộc đồ thị hàm số (điều kiện $x_{0}\\neq 5$)<br> Vì điểm $M\\left(x_{0};y_{0}\\right)$ trên đồ thị cách đều hai trục tọa độ nên $y_{0}=\\pm x_{0}$<br><br>- <strong>Trường hợp 1</strong>.<br>$$\\begin{aligned} y_{0}=x_{0} &\\Leftrightarrow& \\dfrac{2x_{0}{}^{2}-5x_{0}+9}{x_{0}-5}=x_{0}\\\\ &\\Leftrightarrow& 2x_{0}{}^{2}-5x_{0}+9=x_{0}{}^{2}-5x_{0}\\\\ &\\Leftrightarrow& x_{0}{}^{2}+9=0 \\text{ (phương trình vô nghiệm).} \\end{aligned}$$<br><br>- <strong>Trường hợp 2</strong>.<br>$$\\begin{aligned} y_{0}=-x_{0} &\\Leftrightarrow& \\dfrac{2x_{0}{}^{2}-5x_{0}+9}{x_{0}-5}=-x_{0}\\\\ &\\Leftrightarrow& 2x_{0}{}^{2}-5x_{0}+9=-x_{0}{}^{2}+5x_{0}\\\\ &\\Leftrightarrow& 3x_{0}^{2}-10x_{0}+9=0 \\text{ (phương trình vô nghiệm).} \\end{aligned}$$<br>Vậy không có điểm nào trên đồ thị cách đều hai trục tọa độ<br>- <strong>Sai</strong>.<br>  Đồ thị hàm số có tiệm cận đứng là $x=5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D157DS55",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^2-2x+5}{x-1}$ có đồ thị là $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có tập xác định là $\\mathscr{D}=\\mathbb{R} \\setminus \\{1\\}$",
        "answer": true
      },
      {
        "text": "Gọi $x_1$, $x_2$ là hai nghiệm của phương trình $f'(x)=0$. Khi đó $x_1^2+x_2^2=10$",
        "answer": true
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(2;+\\infty)$",
        "answer": false
      },
      {
        "text": "Gọi $(d)$ là tiếp tuyến với đồ thị hàm số $(C)$ tại điểm $M(2;5)$. Biết $(d)$ cắt hai đường tiệm cận của $(C)$ tại hai điểm $A$, $B$. Gọi $I$ là tâm đối xứng của $(C)$. Diện tích tam giác $IAB$ bằng $8$ (đvdt)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Hàm số xác định khi $x-1\\ne0\\Leftrightarrow x\\ne1$. Vậy $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br>- <strong>Đúng</strong>.<br>  Ta có $x_1^2+x_2^2=3^2+(-1)^2=10$.<br>- <strong>Sai</strong>.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$.<br> Ta có $f'(x)=0\\Leftrightarrow\\dfrac{x^2-2x-3}{(x-1)^2}=0\\Rightarrow \\left[\\begin{aligned}&x_1=3\\\\&x_2=-1.\\end{aligned}\\right.$<br> Ta có bảng biến thiên<br><img src=\"data/12/2D1/im2D15/2D15_ex12_013.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên suy ra hàm số đồng biến trên $(-\\infty;-1)$, $(3;+\\infty)$<br> Vậy hàm số không đồng biến trên $(2;+\\infty)$.<br>- <strong>Đúng</strong>.<br>  Phương trình tiếp tuyến của đồ thị hàm số $(C)$ tại điểm $M(2;5)$ \\[y=f'(2)(x-2)+5\\Leftrightarrow y=-3x+11.\\] Ta có $\\lim\\limits_{x\\rightarrow 1^+}f(x)=+\\infty$ nên tiệm cận đứng của đồ thị hàm số $(C)$ là $x=1$.<br> Ta có $f(x)=x-1+\\dfrac{4}{x-1}$.<br> Khi đó, $\\lim\\limits_{x\\rightarrow +\\infty} \\left[f(x)-(x-1)\\right]=\\lim\\limits_{x\\rightarrow +\\infty} \\dfrac{4}{x-1}=0$ nên $(C)$ có tiệm cận xiên $y=x-1$.<br> Toạ độ tâm đối xứng $I$ của $(C)$ là nghiệm của hệ phương trình $\\begin{cases}&y=x-1\\\\&x=1\\end{cases}\\Leftrightarrow \\begin{cases}&x=1\\\\&y=0\\end{cases}\\Rightarrow I(1;0)$.<br> Toạ độ giao điểm $A$ của $(C)$ và tiệm cận đứng là nghiệm của hệ phương trình \\[\\begin{cases}&y=-3x+11\\\\&x=1\\end{cases}\\Leftrightarrow \\begin{cases}&x=1\\\\&y=8\\end{cases}\\Rightarrow A(1;8).\\] Toạ độ giao điểm $B$ của $(C)$ và tiệm cận xiên là nghiệm của hệ phương trình \\[\\begin{cases}&y=-3x+11\\\\&y=x-1\\end{cases}\\Leftrightarrow \\begin{cases}&x=3\\\\&y=2\\end{cases}\\Rightarrow B(3;2).\\] Độ dài các cạnh $IA=8$, $IB=\\sqrt{(3-1)^2+2^2}=2\\sqrt{2}$, $AB=\\sqrt{(3-1)^2+(2-8)^2}=2\\sqrt{10}$.<br> Nửa chu vi tam giác $IAB$ bằng $p=\\dfrac{8+2\\sqrt{2}+2\\sqrt{10}}{2}=4+\\sqrt{2}+\\sqrt{10}$.<br> Diện tích tam giác $IAB$ bằng \\[S_{\\triangle IAB}=\\sqrt{p(p-IA)(p-IB)(p-AB)}=8\\,\\text{(đvdt)}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D157DS56",
    "question": "Cho hàm số $y=\\dfrac{2x-1}{x+1}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số đồng biến trên tập xác định",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $(C)$ có tâm đối xứng là điểm $I(-1;2)$",
        "answer": true
      },
      {
        "text": "Tiếp tuyến của đồ thị hàm số $(C)$ tại giao điểm của đồ thị hàm số $(C)$ với trục tung có phương trình là $y=3x-1$",
        "answer": true
      },
      {
        "text": "Số điểm thuộc đồ thị hàm số $(C)$ có tọa độ nguyên là $2$",
        "answer": false
      }
    ],
    "explain": "- Tập xác định của hàm số là $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$. <br> Ta có $y'=\\dfrac{2\\cdot(1)-(-1)\\cdot(1)}{(x+1)^2}=\\dfrac{3}{(x+1)^2}&gt;0$, $\\forall x\\in D$. <br> Hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.<br><br>- Đồ thị hàm số $y = \\dfrac{ax+b}{cx+d}$ có tâm đối xứng là giao điểm của hai đường tiệm cận. <br> Ta có<br><br>- $\\displaystyle\\lim\\limits_{x\\to-1^{-}}\\dfrac{2x-1}{x+1}=+\\infty$.<br><br>- $\\displaystyle\\lim\\limits_{x\\to-1^{+}}\\dfrac{2x-1}{x+1}=-\\infty$.<br>Suy ra đồ thị hàm số đã cho có tiệm cận đứng là $x=-1$.<br> Lại có<br><br>- $\\displaystyle\\lim\\limits_{x\\to+\\infty}\\dfrac{2x-1}{x+1}=2$.<br><br>- $\\displaystyle\\lim\\limits_{x\\to-\\infty}\\dfrac{2x-1}{x+1}=2$.<br>Suy ra đồ thị hàm số đã cho có tiệm cận ngang là $y=\\dfrac{2}{1}=2$. <br> Vậy tâm đối xứng của đồ thị hàm số trên là $I(-1; 2)$.<br><br>- Giao điểm của $(C)$ với trục tung (cho $x=0$) là điểm $M(0; -1)$. <br> Hệ số góc của tiếp tuyến tại $M$ là $k=y'(0)=\\dfrac{3}{(0+1)^2}=3$. <br> Phương trình tiếp tuyến tại giao điểm của đồ thị $(C)$ với trục tung là $$y=3(x-0)-1\\Leftrightarrow y=3x-1.$$<br><br>- Ta có $y=\\dfrac{2x-1}{x+1} =\\dfrac{2(x+1)-3}{x+1}=2-\\dfrac{3}{x+1}$. <br> Để tọa độ $(x; y)$ nguyên thì $x+1$ phải là ước của $3$. <br> Suy ra $x+1\\in\\{1;- 1; 3; -3\\} \\Leftrightarrow x\\in\\{0; -2; 2; -4\\}$. <br> Khi đó, ta có<br><br>- Với $x=0$ thì $y=2-\\dfrac{3}{0+1}=-1$.<br><br>- Với $x=-2$ thì $y=2-\\dfrac{3}{-2+1}=5$.<br><br>- Với $x=2$ thì $y=2-\\dfrac{3}{2+1}=1$.<br><br>- Với $x=-4$ thì $y=2-\\dfrac{3}{-4+1}=3$.<br>Vậy có $4$ điểm có tọa độ nguyên là: $(0; -1)$, $(-2; 5)$, $(2; 1)$, $(-4; 3)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS57",
    "question": "Một hãng công nghệ dự định tung ra thị trường một loại tai nghe không dây mới. Chi phí sản xuất mỗi chiếc tai nghe là $500$ nghìn đồng với giá bán ra niêm yết là $1{,}2$ triệu đồng. Bộ phận bán hàng ước tính rằng, số lượng tai nghe bán được $n(x)$ phụ thuộc vào chi phí quảng cáo $x$ (đơn vị: triệu đồng) theo công thức $n(x)=A+30\\ln (1+x)$. Biết rằng nếu chi $\\mathrm{e}^3-1$ triệu đồng cho quảng cáo thì bán được $190$ sản phẩm. Xét tính đúng sai của các khẳng định sau.",
    "subQuestions": [
      {
        "text": "$A=100$",
        "answer": true
      },
      {
        "text": "Hàm lợi nhuận của hãng (tính theo triệu đồng) là $L(x)=70+21\\ln(x+1)-2x$",
        "answer": false
      },
      {
        "text": "Khi chi phí quảng cáo đang ở mức $6$ triệu đồng thì lợi nhuận đạt $99$ triệu đồng (kết quả làm tròn đến hàng đơn vị)",
        "answer": false
      },
      {
        "text": "Để đạt lợi nhuận lớn nhất thì số tiền chi cho quảng cáo là $19{,}766$ triệu đồng (kết quả làm tròn đến hàng phần nghìn)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $A+30 \\ln \\left(1+{\\mathrm{e}^3}-1 \\right)=190 \\Leftrightarrow A+90=190 \\Leftrightarrow A=100$.<br>- <strong>Sai</strong>.<br>  Ta có hàm lợi nhuận <br> $L(x)=1{,}2\\cdot n(x)-0{,}5\\cdot n(x)-x=0{,}7(100+30\\ln (1+x))-x =70+21\\ln(1+x)-x$.<br>- <strong>Sai</strong>.<br>  Khi $x=6$ ta có $L(6)=70+21\\ln(1+6)-6\\approx 105$ (triệu đồng).<br>- <strong>Sai</strong>.<br>  Ta khảo sát hàm số $L(x)=70+21\\ln(1+x)-x$.<br> Ta có $L'(x)=\\dfrac{21}{1+x}-1$<br> $L'(x)=0\\Leftrightarrow x=20$.<br> Ta có bảng biến thiên<br><img src=\"data/12/2D1/im2D15/2D15_ex12_014.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Vậy lợi nhuận đạt lớn nhất khi số tiền chi cho quảng cáo là $20$ triệu đồng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS58",
    "question": "Cho hàm số $y=f(x)=\\dfrac{ax^2+bx+c}{x+d}$ có bảng biến thiên như hình vẽ dưới đây:<br><img src=\"data/12/2D1/im2D15/2D15_ex12_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hàm số $y=f(x)$ đồng biến trên khoảng $(0;4)$",
        "answer": false
      },
      {
        "text": "Tích giá trị cực đại và giá trị cực tiểu của hàm số $y=f(x)$ bằng $-12$",
        "answer": true
      },
      {
        "text": "Cho điểm $M$ có hoành độ lớn hơn 2, di chuyển trên đồ thị hàm số $y=f(x)$. Giá trị nhỏ nhất của tổng khoảng cách từ điểm $M$ tới hai trục tọa độ bằng $4+4\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "$a+b+c+d=-5$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Hàm số đồng biến trên khoảng $\\left(0;2\\right)$ và $\\left(2;4\\right)$.<br>- <strong>Đúng</strong>.<br>  $y_{\\max} \\cdot y_{\\min} = \\left(-6\\right)\\cdot 2 = -12$.<br>- <strong>Đúng</strong>.<br>  - Tiệm cận đứng: $x=2 \\Leftrightarrow d = -2$.<br><br>- Ta có: $f(0) = 2\\Leftrightarrow \\dfrac{c}{0-2} = 2 \\Leftrightarrow c = -4$.<br><br>- Ta có: $f(4) = -6\\Leftrightarrow \\dfrac{16a+4b-4}{4-2}=-6\\Leftrightarrow 4a+b=-2\\Leftrightarrow b=-4a-2$<br><br>- Khi đó: $$\\begin{aligned} &f(x) = \\dfrac{ax^2-\\left(4a+2\\right)x-4}{x-2}\\\\ \\Rightarrow &f'(x)=\\dfrac{\\left[2ax-\\left(4a+2\\right)\\right]\\left(x-2\\right) - \\left[ax^2-\\left(4a+2\\right)x-4\\right]}{\\left(x-2\\right)^2} \\end{aligned}$$<br><br>- Lại có $f'(0)\\Leftrightarrow 2(4a+2)+4=0 \\Leftrightarrow a = -1 \\Rightarrow b = 2$.<br><br>- Vậy $f(x) = \\dfrac{-x^2+2x-4}{x-2}$. Gọi $M\\left(x_0;\\dfrac{-x_0^2+2x_0-4}{x_0-2}\\right)$ thuộc đồ thị hàm số.<br><br>- Tổng khoảng cách đến các trục tọa độ: $$\\left|x_0\\right|+\\left|\\dfrac{-x_0^2+2x_0-4}{x_0-2}\\right| = x_0+\\dfrac{x_0^2-2x_0+4}{x_0-2}\\text{ (vì $x_0&gt;2$)}$$<br><br>- Ta có: $$\\begin{aligned} &x_0+\\dfrac{-x_0^2+2x_0-4}{x_0-2} = 2x_0 + \\dfrac{4}{x_0-2}\\\\ &= 2(x_0-2)+\\dfrac{4}{x_0-2}+4 \\geqslant 2\\sqrt{2(x_0-2)\\dfrac{4}{x_0-2}}+4=4\\sqrt{2}+4 \\end{aligned}$$<br><br>- Dấu bằng xảy ra: $2(x_0-2)=\\dfrac{4}{x_0-2} \\Leftrightarrow \\left(x_0-2\\right)^2=2 \\Leftrightarrow \\left[\\begin{aligned}&x_0 = 2+\\sqrt{2}\\ \\text{(nhận)}\\\\ &x_0 = 2-\\sqrt{2} \\ \\text{(loại)}\\end{aligned}\\right. $<br>- <strong>Đúng</strong>.<br>  $a+b+c+d = -1+2-4-2 = -5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS59",
    "question": "Một công ty sau khi ra mắt sản phẩm mới đã ghi nhận lợi nhuận $P(t)$ (đơn vị: triệu đồng) sau $t$ tháng kinh doanh. Trong năm đầu tiên, giả sử mối liên hệ giữa lợi nhuận và thời gian kinh doanh được mô hình hóa bởi hàm số $P(t) = -t^3 + 10t^2 + 63t - 45$, $0 \\le t \\le 12$.",
    "subQuestions": [
      {
        "text": "Lợi nhuận của công ty sau $1$ quý là $27$ triệu đồng",
        "answer": false
      },
      {
        "text": "Lợi nhuận của công ty đạt mức tối đa tại thời điểm $t = 9$",
        "answer": true
      },
      {
        "text": "Tại thời điểm $t = 4$ thì tốc độ tăng trưởng lợi nhuận là lớn nhất",
        "answer": false
      },
      {
        "text": "Hàm số biểu thị tốc độ tăng trưởng lợi nhuận $P'(t) = -3t^2 + 20t + 63t$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Lợi nhuận của công ty sau $1$ quý tương ứng với thời điểm $t = 3$ là \\[P(3) = 207\\text{ (triệu đồng)}.\\]<br>- <strong>Đúng</strong>.<br>  Ta có $P'(t) = -3t^2 + 20t + 63 = 0 \\Leftrightarrow \\left[\\begin{aligned}&t = -\\dfrac{7}{3}\\\\ &t = 9.\\end{aligned}\\right.$<br> Khi đó $P(0) = -45$, $P(9) = 603$, $P(12) = 423$.<br> Vậy lợi nhuận của công ty đạt mức tối đa là $603$ triệu đồng tại thời điểm $t = 9$ (tháng).<br>- <strong>Sai</strong>.<br>  Ta có $$\\begin{aligned} P'(t) &= -3t^2 + 20t + 63\\\\ &= -3\\left(t^2 - \\dfrac{20}{3}t + \\dfrac{100}{9}\\right) + \\dfrac{289}{3} \\\\ &= -3\\left(t - \\dfrac{10}{3}\\right)^2 + \\dfrac{289}{3}. \\end{aligned}$$ Ta có $\\left(t - \\dfrac{10}{3}\\right)^2 \\ge 0$ với mọi $t$, suy ra $-3\\left(t - \\dfrac{10}{3}\\right)^2 \\le 0$ với mọi $t$.<br> Do đó $P'(t) \\le \\dfrac{289}{3}$ với mọi $t$.<br> Dấu ‘ ‘=’ ’ xảy ra khi và chỉ khi $t - \\dfrac{10}{3} = 0 \\Leftrightarrow t = \\dfrac{10}{3}$.<br> Vậy tốc độ tăng trưởng lợi nhuận là lớn nhất tại thời điểm $t = \\dfrac{10}{3}$ (tháng).<br>- <strong>Sai</strong>.<br>  Hàm số biểu thị tốc độ tăng trưởng lợi nhuận là $P'(t) = -3t^2 + 20t + 63$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS60",
    "question": "Một hộ gia đình muốn xây dựng một bể chứa nước có dạng hình hộp chữ nhật không nắp, thể tích $V=12$m$^3$. Đáy bể là hình chữ nhật có chiều dài gấp đôi chiều rộng. Giá thuê nhân công và vật liệu xây đáy là $500$ nghìn đồng/m$^2$, xây thành bể là $300$ nghìn đồng/m$^2$. Gọi $x$ là chiều rộng của đáy bể, $h$ là chiều cao của bể ($x&gt;0$, $h&gt;0$, đơn vị: m).",
    "subQuestions": [
      {
        "text": "Thể tích của bể nước được tính bằng công thức $V=2x^2h$ (m$^3$)",
        "answer": true
      },
      {
        "text": "Chiều cao của bể nước tính theo $x$ là $h=\\dfrac{6}{x^2}$ (m)",
        "answer": true
      },
      {
        "text": "Tổng chi phí xây dựng bể nước là $T(x)=500x^2+\\dfrac{10\\,800}{x}$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Tổng chi phí tối thiểu để xây dựng bể là $9\\,324$ (nghìn đồng) (<em>không làm tròn kết quả của các phép toán trung gian, chỉ làm tròn kết quả phép toán cuối cùng đến hàng đơn vị</em>)",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D1/im2D15/2D15_ex12_032.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Đúng</strong>.<br>  Thể tích của bể nước được tính bằng công thức $V=x \\cdot (2x) \\cdot h =2x^2h$ (m$^3$).<br>- <strong>Đúng</strong>.<br>  Ta có $V=12 \\Rightarrow 2x^2 h=12 \\Rightarrow h =\\dfrac{6}{x^2}$ (m).<br>- <strong>Sai</strong>.<br>  Chi phí để xây dựng đáy bể là $500 \\cdot x \\cdot 2x = 1\\, 000x^2$ (nghìn đồng).<br> Chi phí để xây dựng thành bể là $$300 \\left(2x h+ 4x h\\right)=1\\,800 xh= 1\\,800 x\\cdot \\dfrac{6}{x^2} = \\dfrac{19 \\, 800}{x^2} \\; \\text{(nghìn đồng)}.$$ Tổng chi phí xây dựng bể nước là $T(x)=1\\,000x^2+\\dfrac{10\\,800}{x}$ (nghìn đồng).<br>- <strong>Sai</strong>.<br>  Ta có $T'(x)=2 \\, 000x-\\dfrac{10 \\, 800}{x^2}$.<br> $T'(x) = 0 \\Leftrightarrow 2 \\, 000x-\\dfrac{10 \\, 800}{x^2} = 0 \\Leftrightarrow 2\\,000x^3 - {10 \\, 800}=0 \\Leftrightarrow x = \\dfrac{3}{\\sqrt[3]{5}}$.<br><img src=\"data/12/2D1/im2D15/2D15_ex12_033.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Vì $\\min \\limits_{(0,+\\infty)} T(x)=T\\left(\\dfrac{3}{\\sqrt[3]{5}}\\right)$ nên tổng chi phí tối thiểu để xây dựng bể là $$T \\left(\\dfrac{3}{\\sqrt[3]{5}}\\right) \\approx 9\\,234 \\; \\text{(nghìn đồng)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS61",
    "question": "Cho hàm số $y=f(x)=\\dfrac{3x+5}{2x+2}$ có đồ thị là $(C)$.",
    "subQuestions": [
      {
        "text": "Giá trị lớn nhất của hàm số $f(x)$ trên $[1;3]$ bằng $\\dfrac{7}{4}$",
        "answer": false
      },
      {
        "text": "Tâm đối xứng của $(C)$ là điểm $I\\left(1;\\dfrac{3}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)$ không có cực trị",
        "answer": true
      },
      {
        "text": "Một công ty sản xuất $x$ sản phẩm $(x \\ge 1)$ thì chi phí sản xuất trung bình một sản phẩm được tính theo công thức $\\overline{C}(x)=250f(x)$ (nghìn đồng). Khi đó số lượng sản phẩm sản xuất càng lớn thì chi phí sản xuất trung bình một sản phẩm sẽ giảm dần và luôn thấp hơn $375$ nghìn đồng",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$. Suy ra hàm số $y=f(x)$ liên tục trên đoạn $[1;3]$.<br> Ta có $f'(x) = -\\dfrac{4}{(2x+2)^2} &lt; 0, \\forall x \\neq -1$ và $f(1)=2$, $f(3)=\\dfrac{7}{4}$.<br> Vậy $\\max\\limits_{[1;3]} f(x) = f(1)=2$.<br>- <strong>Sai</strong>.<br>  Do $\\lim\\limits_{x\\to -1^+} \\dfrac{3x+5}{2x+2} = +\\infty$ nên đường thẳng $x=-1$ là đường tiệm cận đứng của đồ thị $(C)$.<br> Do $\\lim\\limits_{x\\to +\\infty} \\dfrac{3x+5}{2x+2} = \\dfrac{3}{2}$ nên đường thẳng $y=\\dfrac{3}{2}$ là đường tiệm cận ngang của đồ thị $(C)$.<br> Tâm đối xứng của $(C)$ là giao điểm của đường tiệm cận đứng và đường tiệm cận ngang nên tâm đối xứng của $(C)$ là điểm $\\left(-1;\\dfrac{3}{2}\\right)$.<br>- <strong>Đúng</strong>.<br>  Hàm số $y=f(x)=\\dfrac{3x+5}{2x+2}$ có tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$ và $$f'(x)=-\\dfrac{4}{(2x+2)^2} &lt; 0, \\forall x \\neq -1.$$ Do đó hàm số $f(x)$ không có cực trị.<br>- <strong>Sai</strong>.<br>  Xét $h(x)=\\overline{C}(x) = 250 \\cdot \\dfrac{3x+5}{2x+2}$.<br> Ta có $h'(x)= 250 \\cdot \\dfrac{-4}{(2x+2)^2} = \\dfrac{-1\\,000}{(2x+2)^2} &lt; 0, \\forall x \\ge 1$.<br> Bảng biến thiên<br><img src=\"data/12/2D1/im2D15/2D15_ex12_035.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Số lượng sản phẩm sản xuất càng lớn thì chi phí sản xuất trung bình một sản phẩm sẽ giảm dần và luôn cao hơn 375 nghìn đồng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D158DS62",
    "question": "Ông A muốn xây một cái bể chứa nước bằng bê-tông dạng hình hộp chữ nhật có nắp, đáy là hình vuông. Bể cần chứa được đúng $0{,}5$ mét khối (m$^3$) nước. Gọi độ dài cạnh đáy của bể là $x$ (dm), biết rằng chi phí nguyên vật liệu xây dựng mỗi mét vuông diện tích bề mặt là như nhau và diện tích mặt cắt của các ống nước để dẫn nước vào và ra là không đáng kể.",
    "subQuestions": [
      {
        "text": "Chiều cao của bể được tính theo công thức $\\dfrac{500}{x^2}$ (dm)",
        "answer": true
      },
      {
        "text": "Tổng diện tích bề mặt cần xây dựng là $S(x) = x^2 + \\dfrac{2\\,000}{x}$",
        "answer": false
      },
      {
        "text": "Đạo hàm của hàm số diện tích $S(x)$ (sau khi thay $h$ theo $x$) là $S'(x)=4x-\\dfrac{2\\,000}{x^2}$",
        "answer": true
      },
      {
        "text": "Để chi phí nguyên vật liệu xây bể là thấp nhất, độ dài cạnh đáy bể phải là $793{,}7$ mm, (với kết quả được làm tròn đến hàng phần chục)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Diện tích đáy là $x^2$ (dm$^2$). Đổi $0{,}5$ m$^3$ $= 500$ dm$^3$.<br> Ta có $V = S_{\\text{đáy}}\\cdot h = x^2 h \\Rightarrow h = \\dfrac{500}{x^2}$ (dm).<br>- <strong>Sai</strong>.<br>  Tổng diện tích bề mặt cần xây dựng là $S(x) = S_{\\text{xq}} + 2S_{\\text{đáy}}$ nên<br> $$S(x) = 4x \\cdot \\dfrac{500}{x^2} + 2x^2 = 2x^2 + \\dfrac{2\\,000}{x}.$$<br>- <strong>Đúng</strong>.<br>  Với $S(x) = 2x^2 + \\dfrac{2\\,000}{x}$, ta có $S'(x)=4x-\\dfrac{2\\,000}{x^2}$.<br>- <strong>Đúng</strong>.<br>  Để chi phí nguyên vật liệu xây bể thấp nhất thì diện tích bề mặt $S(x)$ nhỏ nhất.<br> Bài toán quy về tìm giá trị nhỏ nhất của hàm số $S(x) = 2x^2 + \\dfrac{2\\,000}{x}$ với $x &gt; 0$.<br> Ta có $S'(x)=0 \\Leftrightarrow 4x - \\dfrac{2\\,000}{x^2} = 0 \\Leftrightarrow 4x^3 = 2\\,000 \\Leftrightarrow x = \\sqrt[3]{500} = 5\\sqrt[3]{4}$.<br> Bảng biến thiên<br><img src=\"data/12/2D1/im2D15/2D15_ex12_036.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Từ bảng biến thiên ta có $\\min\\limits_{(0;+\\infty)} S(x) = S(5\\sqrt[3]{4})$, đạt được khi $x=5\\sqrt[3]{4}$.<br> Đổi $x = 5\\sqrt[3]{4} \\text{ (dm)} = 5\\sqrt[3]{4} \\cdot 100 \\text{ (mm)} \\approx 793{,}7$ (mm).<br> Vậy để chi phí nguyên vật liệu xây bể thấp nhất, độ dài cạnh đáy bể phải là $793{,}7$ (mm).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
