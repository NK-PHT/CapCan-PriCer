window.traLoiNgan3G22 = [
  {
    "id": "3G221TL1",
    "question": "Cho $I=\\displaystyle\\int_0^4\\dfrac{x}{\\sqrt{2x+1}}\\,dx$. Tính giá trị của $3I$.",
    "answer": "10",
    "explain": "Đặt $t=\\sqrt{2x+1}\\Rightarrow x=\\dfrac{t^2-1}{2}$, $dx=t\\,dt$; $x=0\\Rightarrow t=1$, $x=4\\Rightarrow t=3$.<br>$I=\\displaystyle\\int_1^3\\dfrac{t^2-1}{2t}\\cdot t\\,dt=\\dfrac12\\int_1^3 (t^2-1)\\,dt=\\dfrac12\\left.\\left(\\dfrac{t^3}{3}-t\\right)\\right|_1^3=\\dfrac12\\left(6+\\dfrac23\\right)=\\dfrac{10}{3}$.<br>Vậy $3I=10$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL2",
    "question": "Cho $I=\\displaystyle\\int_0^{\\pi/2}\\sin^2 x\\cos^3 x\\,dx$. Tính giá trị của $15I$.",
    "answer": "2",
    "explain": "$\\cos^3x\\,dx=(1-\\sin^2x)\\cos x\\,dx$. Đặt $t=\\sin x\\Rightarrow dt=\\cos x\\,dx$; $x=0\\Rightarrow t=0$, $x=\\dfrac\\pi2\\Rightarrow t=1$.<br>$I=\\displaystyle\\int_0^1 t^2(1-t^2)\\,dt=\\dfrac13-\\dfrac15=\\dfrac{2}{15}$.<br>Vậy $15I=2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL3",
    "question": "Tính tích phân $\\displaystyle\\int_1^{e^8}\\dfrac{dx}{x\\sqrt{1+\\ln x}}$.",
    "answer": "4",
    "explain": "Đặt $t=1+\\ln x\\Rightarrow dt=\\dfrac{dx}{x}$; $x=1\\Rightarrow t=1$, $x=e^8\\Rightarrow t=9$.<br>Tích phân bằng $\\displaystyle\\int_1^9 t^{-1/2}\\,dt=\\left.2\\sqrt t\\right|_1^9=2(3-1)=4$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL4",
    "question": "Tính tích phân $\\displaystyle\\int_0^1 x\\ln(1+x)\\,dx$ (viết kết quả dưới dạng số thập phân).",
    "answer": "0,25",
    "explain": "Đặt $u=\\ln(1+x)$, $dv=x\\,dx\\Rightarrow du=\\dfrac{dx}{1+x}$, $v=\\dfrac{x^2}{2}$.<br>$I=\\left.\\dfrac{x^2}{2}\\ln(1+x)\\right|_0^1-\\dfrac12\\displaystyle\\int_0^1\\dfrac{x^2}{1+x}\\,dx=\\dfrac{\\ln 2}{2}-\\dfrac12\\int_0^1\\left(x-1+\\dfrac{1}{1+x}\\right)dx$<br>$=\\dfrac{\\ln 2}{2}-\\dfrac12\\left(\\dfrac12-1+\\ln 2\\right)=\\dfrac14=0{,}25$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL5",
    "question": "Tính tích phân $\\displaystyle\\int_0^{\\pi^2/4}\\sin\\sqrt{x}\\,dx$.",
    "answer": "2",
    "explain": "Đặt $t=\\sqrt x\\Rightarrow x=t^2$, $dx=2t\\,dt$; $x=0\\Rightarrow t=0$, $x=\\dfrac{\\pi^2}{4}\\Rightarrow t=\\dfrac\\pi2$. Tích phân bằng $2\\displaystyle\\int_0^{\\pi/2}t\\sin t\\,dt$.<br>Từng phần với $u=t$, $dv=\\sin t\\,dt$: $\\displaystyle\\int_0^{\\pi/2}t\\sin t\\,dt=\\left.-t\\cos t\\right|_0^{\\pi/2}+\\int_0^{\\pi/2}\\cos t\\,dt=0+1=1$.<br>Vậy tích phân bằng $2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G221TL6",
    "question": "Biết $\\displaystyle\\int_1^e (4x+1)\\ln x\\,dx=ae^2+b$ với $a$, $b$ là các số nguyên. Tính $a+b$.",
    "answer": "3",
    "explain": "Đặt $u=\\ln x$, $dv=(4x+1)\\,dx\\Rightarrow du=\\dfrac{dx}{x}$, $v=2x^2+x$.<br>Tích phân bằng $\\left.(2x^2+x)\\ln x\\right|_1^e-\\displaystyle\\int_1^e (2x+1)\\,dx=(2e^2+e)-\\left.(x^2+x)\\right|_1^e=2e^2+e-(e^2+e-2)=e^2+2$.<br>Do đó $a=1$, $b=2$ (duy nhất vì $e^2$ là số vô tỉ) và $a+b=3$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL1",
    "question": "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=\\dfrac{1}{x-1}+6x$, $\\forall x\\in (1;+\\infty)$ và $f(2)=12$. Biết $F(x)$ là nguyên hàm của $f(x)$ thỏa mãn $F(2)=6$, khi đó giá trị biểu thức $P=F(5)-4F(3)$ bằng",
    "answer": "24",
    "explain": "Với $x\\in (1;+\\infty)$, ta có $f(x)=\\displaystyle\\int \\left(\\dfrac{1}{x-1}+6x\\right)\\mathrm{\\,d}x=\\ln (x-1)+3x^2+C$. <br>  Vì $f(2)=12$ nên ta có $C=0$, vậy $f(x)=\\ln (x-1)+3x^2$. <br>  Có $F(x)=\\displaystyle\\int (\\ln (x-1)+3x^2)\\mathrm{\\,d}x=\\displaystyle\\int \\ln (x-1)\\mathrm{\\,d}x+\\displaystyle\\int 3x^2\\mathrm{\\,d}x$. <br>  Xét $I=\\displaystyle\\int \\ln (x-1)\\mathrm{\\,d}x$. <br>  Đặt $u=\\ln (x-1) \\text{ và } \\mathrm{\\,d}v=\\mathrm{\\,d}x\\Rightarrow \\mathrm{\\,d}u=\\dfrac{1}{x-1}\\mathrm{\\,d}x \\text{ và } v=x.$ <br>  Khi đó $I=x\\ln (x-1)-\\displaystyle\\int \\dfrac{x}{x-1}\\mathrm{\\,d}x=x\\ln (x-1)-\\displaystyle\\int \\left(1+\\dfrac{1}{x-1}\\right)\\mathrm{\\,d}x=x\\ln (x-1)-x-\\ln (x-1)+D.$  Vậy $F(x)=x(\\ln (x-1)-1)-\\ln (x-1)+x^3+D$. <br>  Vì $F(2)=6$ nên ta có $-2+8+D=6\\Leftrightarrow D=0$. <br>  Vậy $F(x)=x(\\ln (x-1)-1)-\\ln (x-1)+x^3$. <br>  Có $F(5)=120+4\\ln 4=120+8\\ln 2$, $F(3)=24+2\\ln 2$, suy ra $P=F(5)-4F(3)=24$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL2",
    "question": "Cho $F(x)$ là một nguyên hàm của $f(x)=\\cos\\sqrt{x}$ trên khoảng $(0;+\\infty)$ và thỏa mãn $F\\left(\\pi^2\\right)=1$. Biết  ${F\\left(\\dfrac{\\pi^2}{9}\\right)=\\dfrac{\\pi\\sqrt{a}}{b}+c}$ ($a$, $b$, $c$ là các số nguyên dương và $a&lt;4$), tính $a+b+c$.",
    "answer": "10",
    "explain": "Xét $F(x)=\\displaystyle\\int \\cos\\sqrt{x}\\mathrm{\\,d}x$.<br>  Đặt $t=\\sqrt{x}$, khi đó $t^2=x$, suy ra $2t\\mathrm{\\,d}t = \\mathrm{d}x$.<br>  Do đó  $F(x) = \\displaystyle\\int 2t\\cos t\\mathrm{\\,d}t = 2t\\sin t - \\displaystyle\\int 2\\sin t\\mathrm{\\,d}t = 2t\\sin t+2\\cos t +C$<br>$= 2\\sqrt{x}\\sin\\sqrt{x}+2\\cos\\sqrt{x}+C.$  Mà $F\\left(\\pi^2\\right)=1$ nên  \\[2\\pi\\cdot \\sin \\pi+2\\cos \\pi + C=1 \\Leftrightarrow C=3.\\]  Vì thế $F(x)=2\\sqrt{x}\\sin \\sqrt{x}+2\\cos\\sqrt{x}+3$.<br>  Vậy $F\\left(\\dfrac{\\pi^2}{9}\\right) = 2\\cdot \\dfrac{\\pi}{3}\\sin\\dfrac{\\pi}{3}+2\\cos\\dfrac{\\pi}{3}+3 = \\dfrac{\\pi\\sqrt{3}}{3}+4$.<br>  Suy ra $a=3$, $b=3$ và $c=4$.<br>  Vậy $a+b+c=10$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL3",
    "question": "Biết $F(x)$ là một nguyên hàm của hàm số ${f(x)=\\dfrac{\\left( \\mathrm{e}^{- x}+1\\right) \\left( x+1\\right) ^2-1}{x + 1}}$ và đồ thị hàm số ${y=F(x)}$ cắt trục tung tại điểm có tung độ bằng $4$. Biết ${F(-3)= \\mathrm{e}^{a} - \\ln b + \\dfrac{c}{d}}$, trong đó $a,b,c,d \\in \\mathbb{N}$, $b&lt;5$, $\\dfrac{c}{d}$ là phân số tối giản. Tính $a+b+c+d$.",
    "answer": "22",
    "explain": "Ta có: $F(x)=\\displaystyle\\int{\\dfrac{\\left( \\mathrm{e}^{- x}+1\\right) \\left( x+1\\right) ^2-1}{x + 1}\\mathrm{\\,d}x}=\\displaystyle\\int{\\left( x+1\\right)\\mathrm{e}^{- x}\\mathrm{\\,d}x} + \\displaystyle\\int{\\left(x + 1 - \\dfrac{1}{x + 1}\\right)\\mathrm{\\,d}x}=I_1 + I_2$.  <br>- Giải $I_1=\\displaystyle\\int{\\left( x+1\\right)\\mathrm{e}^{- x}\\mathrm{\\,d}x}$; Đặt $u=x + 1 \\text{ và } \\mathrm{\\,d}v=\\mathrm{e}^{- x}\\mathrm{\\,d}x \\Rightarrow \\mathrm{\\,d}u=\\mathrm{\\,d}x \\text{ và } v= - \\mathrm{e}^{- x}$, khi đó:<br>  $I_1= - (x + 1)\\mathrm{e}^{- x} + \\displaystyle\\int{\\left(\\mathrm{e}^{- x}\\right)\\mathrm{\\,d}x}= - (x + 1)\\mathrm{e}^{- x} - \\mathrm{e}^{- x} + C= - \\mathrm{e}^{- x}(x + 2) + C$.<br>- Giải $I_2=\\displaystyle\\int{\\left(x + 1 - \\dfrac{1}{x + 1}\\right)\\mathrm{\\,d}x}=\\dfrac{x^2}{2} + x - \\ln \\left|x + 1\\right|+ C$.<br>- Suy ra: $F(x)= - \\mathrm{e}^{- x}(x + 2) + \\dfrac{x^2}{2} + x - \\ln \\left|x + 1\\right|+ C$.<br>- Đồ thị hàm số $y=F(x)$ cắt trục tung tại điểm có tung độ bằng $4$ nên $F\\left(0\\right)=4\\Rightarrow C=6$.<br>- Vậy $F(x)= - \\mathrm{e}^{- x}(x + 2) + \\dfrac{x^2}{2} + x - \\ln \\left|x + 1\\right|+ 6$.<br>- Suy ra $F(-3)= \\mathrm{e}^{3} - \\ln 2 + \\dfrac{15}{2} \\Rightarrow a = 3, b = 2, c= 15, d= 2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL4",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_1^5 \\dfrac{1}{x \\sqrt{3x + 1}}\\mathrm{\\,d}x$ ta được kết quả có dạng $a \\ln 3 + b \\ln 5$, với $a, b \\in \\mathbb{Z}$. Khi đó $2a + b^2$ bằng",
    "answer": "5",
    "explain": "Đặt $t=\\sqrt{3x+1}\\Rightarrow x=\\dfrac{t^2-1}{3}, \\mathrm{d}x=\\dfrac{2t}{3}\\mathrm{d}t$; đổi cận $x=1\\to t=2$, $x=5\\to t=4$.<br>$\\displaystyle I=\\int_2^4\\dfrac{1}{\\frac{t^2-1}{3}\\cdot t}\\cdot\\dfrac{2t}{3}\\mathrm{d}t=\\int_2^4\\dfrac{2}{t^2-1}\\mathrm{d}t=\\int_2^4\\left(\\dfrac{1}{t-1}-\\dfrac{1}{t+1}\\right)\\mathrm{d}t=\\Big[\\ln|t-1|-\\ln|t+1|\\Big]_2^4$<br>$=(\\ln3-\\ln5)-(\\ln1-\\ln3)=2\\ln3-\\ln5$.<br>Vậy $a=2,\\ b=-1$, nên $2a+b^2=4+1=5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL5",
    "question": "Tính tích phân $I=\\displaystyle\\int\\limits_0^{\\ln 2} 5 \\mathrm{e} ^{2x}\\cdot \\sqrt{4 \\mathrm{e}^x - 3} \\mathrm{\\,d}x$ ta được kết quả có dạng $\\dfrac{a \\sqrt{5} + b }{4}$, với $a, b \\in \\mathbb{Z}$. Khi đó $a + b^3$ bằng",
    "answer": "-2",
    "explain": "Đặt $u=4e^x-3\\Rightarrow \\mathrm{d}u=4e^x\\mathrm{d}x$, và $e^x=\\dfrac{u+3}{4}$; đổi cận $x=0\\to u=1$, $x=\\ln2\\to u=5$.<br>$5e^{2x}\\sqrt u\\,\\mathrm{d}x=5e^x\\sqrt u\\cdot(e^x\\mathrm{d}x)=5\\cdot\\dfrac{u+3}{4}\\sqrt u\\cdot\\dfrac{\\mathrm{d}u}{4}=\\dfrac{5(u+3)\\sqrt u}{16}\\mathrm{d}u$.<br>$\\displaystyle I=\\dfrac{5}{16}\\int_1^5\\left(u^{3/2}+3u^{1/2}\\right)\\mathrm{d}u=\\dfrac{5}{16}\\Big[\\dfrac25u^{5/2}+2u^{3/2}\\Big]_1^5=\\dfrac{5}{16}\\left[(10\\sqrt5+10\\sqrt5)-\\left(\\dfrac25+2\\right)\\right]=\\dfrac{5}{16}\\left(20\\sqrt5-\\dfrac{12}{5}\\right)=\\dfrac{25\\sqrt5-3}{4}$.<br>Vậy $a=25,\\ b=-3$, nên $a+b^3=25-27=-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL6",
    "question": "Có bao nhiêu giá trị của $a$ trong đoạn $\\left[\\dfrac{\\pi}{4};2\\pi \\right] $ thỏa mãn $\\displaystyle\\int\\limits_0^a {\\dfrac{\\sin x}{\\sqrt{1+3 \\cos x}}\\mathrm{\\,d}x}=\\dfrac{2}{3}$?",
    "answer": "2",
    "explain": "Đặt $t=1+3 \\cos x$, thì $\\mathrm{\\,d}t=-3\\sin x \\mathrm{\\,d}x\\Rightarrow \\sin x \\mathrm{\\,d}x = -\\dfrac{\\mathrm{\\,d}t}{3}$.<br>  Đổi cận: $x=0 \\Rightarrow t=4; x=a \\Rightarrow t=1+3 \\cos a$.<br>  Ta có  $\\displaystyle\\int\\limits_0^a {\\dfrac{\\sin x}{\\sqrt{1+3 \\cos x}}\\mathrm{d}x}=\\dfrac{2}{3}$<br>$\\Leftrightarrow \\displaystyle\\int\\limits_4^{1+3\\cos a} {-\\dfrac{\\mathrm{d}t}{3\\sqrt{t}}}= \\dfrac{2}{3}$<br>$\\Leftrightarrow -\\dfrac{2}{3}\\sqrt{t}\\Bigg|_{4}^{1+3 \\cos a}=\\dfrac{2}{3}$<br>$\\Leftrightarrow -\\dfrac{2}{3}\\left( \\sqrt{1+3\\cos a}-2\\right) = \\dfrac{2}{3} \\Leftrightarrow \\sqrt{1+3\\cos a} =1$<br>$\\Leftrightarrow \\cos a = 0\\Leftrightarrow a=\\dfrac{\\pi}{2}+k\\pi\\ (k\\in\\mathbb{Z}).$  Kết hợp điều kiện ta có $a\\in\\left\\{\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}\\right\\}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL7",
    "question": "Biết tích phân $ \\displaystyle \\int \\limits_0^{\\ln 6}\\dfrac{\\mathrm{e}^x}{1+\\sqrt{\\mathrm{e}^x+3}}\\mathrm{\\,d}x=a+b\\ln 2+c\\ln 3 $ với $ a $, $ b $, $ c $ là các số nguyên. Giá trị của biểu thức $ T=a+b+c $ là",
    "answer": "0",
    "explain": "Đặt $ t=\\sqrt{\\mathrm{e}^x+3} \\Rightarrow t^2=\\mathrm{e}^x+3 \\Rightarrow 2t \\mathrm{\\,d}t=\\mathrm{e}^x\\mathrm{\\,d}x$.<br>  Đổi cận $ x=0\\Rightarrow t=2 \\text{ và } x=\\ln 6\\Rightarrow t=3. $<br>  Ta có   $\\displaystyle \\int \\limits_0^{\\ln 6} \\dfrac{\\mathrm{e}^x}{1+\\sqrt{\\mathrm{e}^x+3}}\\mathrm{\\,d}x  = \\displaystyle \\int \\limits_2^3 \\dfrac{2t \\mathrm{\\,d}t}{1+t} =\\displaystyle \\int \\limits_2^3 \\left(2-\\dfrac{2}{1+t}\\right)\\mathrm{\\,d}t$<br>$= \\left(2t-2\\ln|1+t| \\right)\\bigg|_2^3=\\left(6-2\\ln 4 \\right)-\\left(4-2\\ln 3 \\right)=2-4\\ln 2+2\\ln 3.$  Vậy $ a=2 $, $ b=-4 $, $ c=2\\Rightarrow T=a+b+c=0 $.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL8",
    "question": "Biết $\\displaystyle\\int\\limits_0^{4} \\dfrac{\\mathrm{\\,d}x}{\\sqrt{2x+1}+3} = a+b\\ln 2+c\\ln 3$, với $a$, $b$, $c$ là các số hữu tỉ. Tính $S=a+b+c$.",
    "answer": "2",
    "explain": "Đặt $t=\\sqrt{2x+1}+3$. Ta có $2x+1=(t-3)^2 \\Rightarrow \\mathrm{\\, d} x=(t-3) \\mathrm{\\, d} t$. <br>  Đổi cận   <br><img src=\"data/12/2D4/im2D4/2D42_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>  Khi đó, ta có  $\\displaystyle\\int\\limits_0^{4} \\dfrac{\\mathrm{\\,d}x}{\\sqrt{2x+1}+3} =\\int\\limits_{4}^{6}\\dfrac{t-3}{t} \\mathrm{\\, d} t=\\int\\limits_{4}^{6}\\left(1-\\dfrac{3}{t}\\right) \\mathrm{\\, d} t$<br>$=\\left(t-3\\ln |t|\\right)\\Big|_{4}^{6}=(6-3\\ln 6)-(4-3\\ln 4)$<br>$=6-3\\ln 3 -3\\ln 2-4+6\\ln 2=2+3\\ln 2-3\\ln 3.$  Do đó $a=2$, $b=3$ và $c=-3$. Vậy $a+b+c=2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL9",
    "question": "cau28  Biết tích phân $\\displaystyle \\int \\limits_{0}^{\\frac{1}{2}}\\sqrt{1-x^2} \\mathrm{\\,d}x= \\frac{\\pi}{a}+\\frac{\\sqrt{3}}{b};\\ a,b \\in \\mathbb{R}$. Tổng $a+b$ bằng",
    "answer": "20",
    "explain": "Đặt $x = \\sin t; \\mathrm{\\,d}x = \\cos t \\mathrm{\\,d}t$.<br>  Đổi cận $x=0, t=0; x= \\dfrac{1}{2}, t = \\dfrac{\\pi}{6}$.<br>  Ta có $ \\sqrt{1-x^2} = \\sqrt{1-\\sin^{2}t} = \\cos t$ vì $t \\in \\left(0;\\dfrac{\\pi}{6} \\right) $.<br>  Do đó  $\\displaystyle\\int\\limits_{0}^{\\frac{1}{2}}\\sqrt{1-x^2}\\mathrm{\\,d}x = \\displaystyle\\int\\limits_{0}^{\\frac{\\pi}{6}}\\cos^{2} t \\mathrm{\\,d}t$<br>$= \\displaystyle\\int\\limits_{0}^{\\frac{\\pi}{6}}\\left( \\dfrac{1+\\cos 2t}{2}\\right)\\mathrm{\\,d}t$<br>$= \\dfrac{1}{2}\\left[ t+\\dfrac{\\sin 2t}{2}\\right]\\Bigg|_{0}^{\\frac{\\pi}{6}}$<br>$= \\dfrac{1}{2}\\left( \\dfrac{\\pi}{6}+\\dfrac{\\sqrt{3}}{4}\\right)$<br>$= \\dfrac{\\pi}{12}+\\dfrac{\\sqrt{3}}{8}.$  Nên $a=12; b=8 \\Rightarrow a+b = 20$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL10",
    "question": "Cho $\\displaystyle\\int\\limits_{\\frac{1}{\\sqrt{3}}}^1 \\dfrac{\\sqrt{x^2+1}}{x^4}\\mathrm{\\, d}x= -\\dfrac{1}{a}\\bigl(b\\sqrt{b}-c\\bigr)$ ($a$, $b$, $c$ là các số nguyên dương nhỏ hơn 10). Tính tổng $a+b+c$.",
    "answer": "13",
    "explain": "Đặt $x=\\tan\\theta\\Rightarrow \\sqrt{x^2+1}=\\sec\\theta$, $\\mathrm{d}x=\\sec^2\\theta\\,\\mathrm{d}\\theta$; đổi cận $x=\\tfrac1{\\sqrt3}\\to\\theta=\\pi/6$, $x=1\\to\\theta=\\pi/4$.<br>Biểu thức dưới dấu tích phân trở thành $\\dfrac{\\sec\\theta\\cdot\\sec^2\\theta}{\\tan^4\\theta}\\mathrm{d}\\theta=\\dfrac{\\cos\\theta}{\\sin^4\\theta}\\mathrm{d}\\theta$.<br>Đặt $u=\\sin\\theta$: $\\displaystyle\\int\\dfrac{\\mathrm{d}u}{u^4}=-\\dfrac{1}{3u^3}+C=-\\dfrac{1}{3\\sin^3\\theta}+C$.<br>Tại $\\theta=\\pi/4$: $\\sin^3\\theta=\\dfrac{\\sqrt2}{4}$, giá trị $=-\\dfrac{2\\sqrt2}{3}$. Tại $\\theta=\\pi/6$: $\\sin^3\\theta=\\dfrac18$, giá trị $=-\\dfrac83$.<br>Tích phân $=-\\dfrac{2\\sqrt2}{3}-\\left(-\\dfrac83\\right)=\\dfrac{8-2\\sqrt2}{3}=-\\dfrac13(2\\sqrt2-8)$.<br>Vậy $a=3,\\ b=2,\\ c=8$, nên $a+b+c=13$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL11",
    "question": "Biết tích phân $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{4}}(1+x)\\cos 2x\\mathrm{\\,d}x=\\dfrac{1}{a}+\\dfrac{\\pi}{b}$. Giá trị của $a+b$ bằng",
    "answer": "12",
    "explain": "Đặt $u=1+x$, $\\mathrm{d}v=\\cos2x\\mathrm{\\,d}x$, ta có $\\mathrm{d}u=\\mathrm{d}x$, $v=\\dfrac{1}{2}\\sin 2x$.<br>  Do đó,   $\\displaystyle\\int\\limits_0^{\\frac{\\pi}{4}}(1+x)\\cos 2x\\mathrm{\\,d}x=\\left[(1+x)\\cdot \\dfrac{1}{2}\\sin 2x \\right]\\Bigg|_0^{\\frac{\\pi}{4}}-\\displaystyle\\int\\limits_0^{\\frac{\\pi}{4}} \\dfrac{1}{2}\\sin 2x\\mathrm{\\,d}x=\\dfrac{1}{2}\\cdot \\left(1 +\\dfrac{\\pi}{4}\\right) +\\left( \\dfrac{1}{4}\\cos2x\\right) \\Bigg|_0^{\\frac{\\pi}{4}}=\\dfrac{1}{4} +\\dfrac{\\pi}{8}.$  Suy ra $a=4$, $b=8$, $a+b=12$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL12",
    "question": "Biết tích phân $ \\displaystyle\\int\\limits_1^2(4x-1)\\ln x\\mathrm{\\,d}x=a\\ln 2+b $ với $ a, b\\in\\mathbb{Z} $. Tổng $ 2a+b $ bằng",
    "answer": "10",
    "explain": "Đặt $u=\\ln x \\text{ và } \\mathrm{\\,d}v=(4x-1)\\mathrm{\\,d}x\\Rightarrow \\mathrm{\\,d}u=\\dfrac{1}{x}\\mathrm{\\,d}x \\text{ và } v=2x^2-x.$<br>  Suy ra $ \\displaystyle\\int\\limits_1^2(4x-1)\\ln x\\mathrm{\\,d}x=(2x^2-x)\\ln x\\bigg|_1^2-\\displaystyle\\int\\limits_1^2(2x-1)\\mathrm{\\,d}x=6\\ln 2-(x^2-x)\\bigg|_1^2=6\\ln 2-2 $.<br>  Suy ra $ a=6 $, $ b=-2 $.<br>  Vậy tổng $ 2a+b=2\\cdot 6-2=10 $.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL13",
    "question": "Biết $\\displaystyle\\int\\limits_{0}^2x\\ln\\left(x^2+4\\right) \\mathrm{\\,d}x=a \\ln 2+b$ ($a$, $b \\in \\mathbb{Z})$. Giá trị của biểu thức $T=ab$ là",
    "answer": "-16",
    "explain": "Đặt $I=\\displaystyle\\int\\limits_{0}^2x\\ln\\left(x^2+4\\right) \\mathrm{\\,d}x$.   Đặt $t=x^2+4\\Rightarrow \\mathrm{\\,d}t=2x\\mathrm{\\,d}x$, ta có $x=0\\Rightarrow t=4$, $x=2\\Rightarrow t=8$.  <br>  Vậy $I=\\displaystyle\\int\\limits_{4}^8 \\dfrac{1}{2}\\ln t \\mathrm{\\,d}t=\\dfrac{1}{2}\\left(t\\ln t -t\\right)\\Big|_{4}^{8}=\\dfrac{1}{2}\\left(8\\ln 8 -8 -(4\\ln 4 -4)\\right)=8\\ln 2-2$.  <br>  Suy ra $a=8 \\text{ và } b=-2\\Rightarrow T=ab=-16$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL14",
    "question": "Biết $\\displaystyle \\int\\limits_{0}^{4} (\\mathrm{e}^x + \\sqrt{3x^2+1}) x \\mathrm{\\,d}x=a\\mathrm{e}^b + c$ trong đó $a,b,c$ là các số nguyên. Tính giá trị của biểu thức $T=a+b+c$.",
    "answer": "46",
    "explain": "Đáp số: $3\\mathrm{e}^4 + 39$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL15",
    "question": "Cho hai số hữu tỉ $a, b$ sao cho tồn tại $F(x)$ là một nguyên hàm của hàm số $f(x)=\\dfrac{\\ln x}{(x+1)^2}$, biết rằng $F(1)=-\\dfrac{2}{3} \\ln 2$ và $F(2)=a\\ln 2 +b\\ln 3$. Tính giá trị của biểu thức $T=ab$.",
    "answer": "-1",
    "explain": "Xét $ I = \\displaystyle\\int\\limits_{1}^{2}f(x)\\mathrm{d}x $. Đặt  $ u=\\ln x \\text{ và } dv=\\dfrac{1}{(x+1)^2}\\mathrm{d}x  \\xrightarrow[]{\\text{Ta chọn}}  \\mathrm{d}u=\\dfrac{1}{x}\\mathrm{d}x \\text{ và } v=-\\dfrac{1}{x+1}  $  Vậy $ I=-\\dfrac{1}{x+1}\\ln x \\Big|_1^2+\\displaystyle\\int\\limits_{1}^{2}\\dfrac{x+1-x}{x(x+1)}\\mathrm{d}x  =-\\dfrac{1}{3}\\ln2+\\left( \\ln|x|-\\ln|x+1| \\right)\\Big|_1^2=\\dfrac{5}{3}\\ln2-\\ln3  $.<br>  Mặt khác $ I=F(2)-F(1) \\Rightarrow \\left(a+\\dfrac{2}{3}\\right)\\ln2+b\\ln3=\\dfrac{5}{3}\\ln2-\\ln3 \\Rightarrow a=1 \\text{ và } b=-1\\Rightarrow T=-1 $.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G229TL16",
    "question": "Cho hàm số $ y=f(x) $ liên tục trên $ \\mathbb{R} $ và hàm số $ y=g(x)=x.f(x^2) $ có đồ thị trên đoạn $ [0;2] $ như hình vẽ bên. Biết diện tích miền được gạch chéo là $ S=\\dfrac{5}{2} $, tính tích phân $ \\displaystyle I=\\int_{1}^{4}f(x)\\,\\mathrm{d}x $.  <br><img src=\"data/12/2D4/im2D4/2D43_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "5",
    "explain": "Từ hình vẽ, ta có: $\\displaystyle \\int \\limits_1^2 g(x) \\mathrm{\\, d}x=\\dfrac{5}{2}\\Rightarrow \\displaystyle \\int \\limits_1^2 x.f(x^2) \\mathrm{\\, d}x=\\dfrac{5}{2}$.<br>  Đặt $t=x^2$. Khi đó: $\\displaystyle \\int \\limits_1^2 x.f(x^2) \\mathrm{\\, d}x=\\dfrac{1}{2}\\displaystyle \\int \\limits_1^4 f(t) \\mathrm{\\, d}t$.<br>  Vậy $I=\\displaystyle \\int \\limits_1^4 f(x) \\mathrm{\\, d}x=5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
