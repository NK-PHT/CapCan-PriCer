window.traLoiNgan2D41 = [
  {
    "id": "2D414TL1",
    "question": "Biết $F(x)=\\left(x^2+mx+n\\right)\\mathrm{e}^x$, với $m$, $n\\in\\mathbb{N}$ là một nguyên hàm của $f(x)=\\left(x^2+4x+5\\right)\\mathrm{e}^x$. Tính $S=m^2+n^2$.",
    "answer": "13",
    "explain": "Do $F(x)$ là một nguyên hàm của $f(x)$ nên  $F'(x)=f(x),\\,\\forall x\\in\\mathbb{R}$<br>$\\Leftrightarrow \\left(2x+m\\right)\\mathrm{e}^x+\\left(x^2+mx+n\\right)\\mathrm{e}^x=\\left(x^2+4x+5\\right)\\mathrm{e}^x,\\,\\forall x\\in\\mathbb{R}$<br>$\\Leftrightarrow x^2+(m+2)x+m+n=x^2+4x+5,\\,\\forall x\\in\\mathbb{R}$<br>$\\Leftrightarrow m+2=4 \\text{ và } m+n=5\\Leftrightarrow m=2 \\text{ và } n=3.$  Vậy $S=m^2+n^2=13$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D417TL2",
    "question": "Một hộ gia đình sản xuất cơ khí nhỏ mỗi ngày sản xuất được $x$ sản phẩm $(0 \\le x \\le 20)$. Chi phí biên để sản xuất $x$ sản phẩm, tính bằng nghìn đồng, cho bởi hàm số sau $C'(x)=3x^2-4x+10$. Biết rằng chi phí cố định ban đầu để sản xuất là $500$ nghìn đồng. Giả sử cơ sở này bán hết sản phẩm mỗi ngày với giá $270$ nghìn đồng/sản phẩm. Tính lợi nhuận tối đa mà gia đình đó thu được khi sản xuất và bán sản phẩm.",
    "answer": "1300",
    "explain": "Chi phí để sản xuất $x$ sản phẩm bằng $C(x)=\\displaystyle\\int\\limits C'(x) \\mathrm{\\,d}x=x^3-2x^2+10x+C$.<br>  Mà chi phí cố định ban đầu để sản xuất $500$ nghìn đồng nên suy ra $C(0)=500$.<br>  Khi đó $C(0)=500 \\Rightarrow C=500 \\Rightarrow C(x)=x^3-2x^2+10x+500$.<br>  Khi bán $x$ sản phẩm, số tiền thu được là $270x$ nghìn đồng.<br>  Do đó lợi nhuận thu được là $T(x)=-x^3+2x^2+260x-500$ (nghìn đồng).<br>  Ta có $T'(x)=-3x^2+4x+260=0 \\Leftrightarrow x=10$ hoặc $x=-\\dfrac{26}{3}$ (loại).<br>  Bảng biến thiên  <br><img src=\"data/12/2D4/im2D41/dlts_12_DLTS17_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Lợi nhuận tối đa là $1300$ nghìn đồng khi sản xuất $10$ sản phẩm mỗi ngày.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D417TL3",
    "question": "Một chiếc xe đua đang chạy $180$ km/h. Tay đua nhấn ga để về đích kể từ đó xe chạy với gia tốc $a(t)=2t+1$ (m/s$^2$). Hỏi rằng $5$ s sau khi nhấn ga thì xe chạy với vận tốc bao nhiêu km/h?",
    "answer": "80",
    "explain": "Ta có $v(t)=\\displaystyle\\int a(t)\\mathrm{\\,d}t=\\displaystyle\\int(2 t+1) \\mathrm{\\,d}t=t^2+t+C$.<br>  Mặt khác vận tốc ban đầu là $180$ km/h hay $50$ m/s nên ta có  $v(0)=50 \\Leftrightarrow C=50$.<br>  Khi đó vận tốc của vật sau $5$ giây là  $v(5)=5^2+5+50=80$ m/s.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D417TL4",
    "question": "Khi nghiên cứu dịch sốt xuất huyết ở một địa phương, các chuyên gia y tế ước tính rằng tại ngày thứ $m$ có $F(m)$ người mắc bệnh (sau khi đã làm tròn đến chữ số hàng đơn vị). Biết rằng tốc độ lan truyền bệnh là $F'(m)=\\dfrac{150}{2m+1}$ và ở ngày đầu tiên ($m=0$) người ta phát hiện ra $50$ bệnh nhân. Hỏi số người mắc bệnh ở ngày thứ $10$ là bao nhiêu?",
    "answer": "278",
    "explain": "Ta có $F(m)=\\displaystyle\\int \\dfrac{150}{2m+1}\\mathrm{\\,d}m=75\\ln(2m+1)+C$ (vì $m\\ge 0$ nên $2m+1&gt;0$).<br>  Vì $F(0)=50$ nên $75\\ln 1+C=50\\Rightarrow C=50$.<br>  Vậy $F(m)=75\\ln(2m+1)+50$.<br>  Số người mắc bệnh ở ngày thứ $10$ là $F(10)=75\\ln 21+50\\approx 278$ (người).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412TL5",
    "question": "Cho $F(x)$ là nguyên hàm của hàm số $f(x)=2x+1$ và $F(0)=2024$. Tính $F(1)$.",
    "answer": "2026",
    "explain": "Ta có $F(x)=\\displaystyle\\int(2x+1)\\mathrm{\\,d}x=x^2+x+C$.<br> Theo giả thiết $F(0)=2024\\Rightarrow 0^2+0+C=2024\\Rightarrow C=2024$.<br> Suy ra $F(x)=x^2+x+2024$.<br> Do đó $F(1)=1^2+1+2024=2026$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412TL6",
    "question": "Biết rằng hàm số $F(x) = ax^3 + (2a+b)x^2 + 5x - 1$ ($a, b \\in \\mathbb{Z}$) là một nguyên hàm của hàm số $f(x) = 6x^2 + 10x + 5$. Giá trị của $10ab$ bằng bao nhiêu?",
    "answer": "20",
    "explain": "Ta có $F'(x) = 3ax^2 + 2(2a+b)x + 5$.<br> Vì $F'(x) = f(x)$ nên $3ax^2 + 2(2a+b)x + 5=6x^2 + 10x + 5 \\Rightarrow \\begin{cases} & 3a = 6 \\\\ & 2(2a+b) = 10 \\end{cases}\\Leftrightarrow \\begin{cases} & a = 2 \\\\ & b = 1. \\end{cases}$<br> Vậy $a=2$, $b=1$ $\\Rightarrow 10ab = 10 \\cdot 2 \\cdot 1 = 20$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412TL7",
    "question": "Cho hàm số $f(x)=x^6+1$. Gọi $F(x)=\\dfrac{x^7}{a}+bx+C$ là một nguyên hàm của hàm số $f(x)$ với $a$, $b$, $C$ là các số thực. Tính $a+b$.",
    "answer": "8",
    "explain": "Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\dfrac{x^7}{7}+x+C$.<br> Khi đó $a=7$ và $b=1$. Vậy $a+b=8$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D412TL8",
    "question": "Cho $F(x)$ là một nguyên hàm của hàm số $y=f(x)=x^2-2 x$ và $F(0)=6$. Tính giá trị của $F(3)$.",
    "answer": "6",
    "explain": "Ta có $F(x) = \\displaystyle\\int (x^2 - 2x) \\mathrm{\\,d}x = \\dfrac{x^3}{3} - x^2 + C$.<br> Vì $F(0) = 6 \\Rightarrow \\dfrac{0^3}{3} - 0^2 + C = 6 \\Rightarrow C = 6$.<br> Do đó, $F(x) = \\dfrac{x^3}{3} - x^2 + 6$.<br> Giá trị của $F(3) = \\dfrac{3^3}{3} - 3^2 + 6 = 9 - 9 + 6 = 6$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D413TL9",
    "question": "Cho hàm số $f(x)=(2\\tan x-\\cot x)^2$. $F(x)$ là một nguyên hàm của hàm số $f(x)$ sao cho $F\\left(\\dfrac{\\pi}{4}\\right)=3-\\dfrac{9\\pi}{4}$. Khi đó $F(x)=a\\tan x+b\\cot x+cx$ ($a$, $b$, $c$ là các hằng số). Tính $abc$.",
    "answer": "36",
    "explain": "Ta có $$ f(x) = (2\\tan x - \\cot x)^2 = 4\\tan^2 x - 4 + \\cot^2 x = \\dfrac{4}{\\cos^2 x} + \\dfrac{1}{\\sin^2 x} - 9. $$ Do đó $$ F(x) = \\displaystyle\\int\\left(\\dfrac{4}{\\cos^2 x} + \\dfrac{1}{\\sin^2 x} - 9\\right)\\mathrm{d}x= 4\\tan x - \\cot x - 9x + C. $$ Khi đó, ta có $$ F\\left(\\dfrac{\\pi}{4}\\right) = 4\\tan\\dfrac{\\pi}{4} - \\cot\\dfrac{\\pi}{4} - 9\\cdot\\dfrac{\\pi}{4} + C = 3 - \\dfrac{9\\pi}{4} \\Rightarrow C = 0. $$ Vậy $F(x) = 4\\tan x - \\cot x - 9x$.<br> Nên các hằng số là $a = 4$, $b = -1$, $c = -9$.<br> Suy ra $abc = 4 \\cdot (-1) \\cdot (-9) = 36$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D414TL10",
    "question": "Gọi $F(x)=\\left(ax^3+bx^2+cx+d\\right) \\mathrm{e}^x$ là một nguyên hàm của hàm số <br> $f(x)=\\left(2 x^3+9 x^2-2 x+5\\right) \\mathrm{e}^x$, với $a$, $b$, $c$, $d \\in \\mathbb{R}$. Tính $a^2+b^2+c^2+d^2$.",
    "answer": "246",
    "explain": "Ta có<br>$$\\begin{aligned} F'(x) &= \\left(3ax^2 + 2bx + c\\right)\\mathrm{e}^x + \\left(ax^3 + bx^2 + cx + d\\right)\\mathrm{e}^x \\\\ &= \\left[ax^3 + (3a+b)x^2 + (2b+c)x + (c+d)\\right]\\mathrm{e}^x. \\end{aligned}$$ Do $F'(x)=f(x)$ nên đồng nhất hệ số với $f(x) = \\left(2x^3 + 9x^2 - 2x + 5\\right)\\mathrm{e}^x$, ta có hệ \\[ \\begin{cases} &a = 2 \\\\ &3a + b = 9 \\\\ &2b + c = -2 \\\\ &c + d = 5 \\end{cases} \\Rightarrow \\begin{cases} &a = 2 \\\\ &b = 3 \\\\ &c = -8 \\\\ &d = 13. \\end{cases} \\] Vậy $a^2 + b^2 + c^2 + d^2 = 2^2 + 3^2 + (-8)^2 + 13^2 = 4 + 9 + 64 + 169 = 246$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416TL11",
    "question": "Ở giai đoạn thải trừ, giai đoạn cuối sau khi một người uống một liều thuốc, nồng độ thuốc trong máu, ký hiệu là $C(t)$ (đơn vị: mg/l), giảm dần sau $t$ giờ kể từ khi giai đoạn này bắt đầu. Khi đó, tốc độ giảm nồng độ $C'(t)$ tỉ lệ với chính nồng độ hiện có, tức là $\\dfrac{C'(t)}{C(t)}=-k$ ($k$ là một hằng số dương). Biết rằng khi bắt đầu giai đoạn thải trừ, nồng độ thuốc còn lại là $12$ mg/l và sau $6$ giờ kể từ lúc bắt đầu thải trừ, nồng độ đo được là $3$ mg/l. Sau khoảng bao nhiêu giờ thì nồng độ còn lại bằng $2$ mg/l (kết quả làm tròn đến hàng phần mười)?",
    "answer": "7,8",
    "explain": "Ta có $\\dfrac{C'(t)}{C(t)}=-k \\Rightarrow \\displaystyle \\int\\dfrac{C'(t)}{C(t)}\\mathrm{\\,d}t=\\displaystyle \\int-k\\mathrm{\\,d}t \\Rightarrow \\ln \\big|C(t)\\big|=-kt+m$ ($m$ là hằng số).<br> Vì $C(t)&gt;0$ nên ta có $C(t)=\\mathrm{e}^{-kt+m}=\\mathrm{e}^m \\cdot \\mathrm{e}^{-kt}=A\\mathrm{e}^{-kt}$ (đặt hằng số $\\mathrm{e}^m=A$).<br> $C(0)=12 \\Leftrightarrow A\\mathrm{e}^{-k.0}=12 \\Leftrightarrow A=12$.<br> $C(6)=3 \\Leftrightarrow 12\\mathrm{e}^{-k\\cdot6}=3 \\Leftrightarrow \\mathrm{e}^{-6k}=\\dfrac{1}{4} \\Leftrightarrow k=-\\dfrac{1}{6} \\ln \\dfrac{1}{4}$.<br> Suy ra $C(t)=12\\mathrm{e}^{\\frac{1}{6}\\left(\\ln \\frac{1}{4}\\right)t}$.<br> Mà ta lại có \\[C(t)=2\\Leftrightarrow 12\\mathrm{e}^{\\frac{1}{6}\\left(\\ln \\frac{1}{4}\\right)t}=2\\Leftrightarrow \\mathrm{e}^{\\frac{1}{6}\\left(\\ln \\frac{1}{4}\\right)t}=\\dfrac{1}{6}\\Leftrightarrow \\dfrac{1}{6}\\left(\\ln \\dfrac{1}{4}\\right)t=\\ln \\dfrac{1}{6}\\Leftrightarrow t=\\dfrac{6 \\ln \\dfrac{1}{6}}{\\ln \\dfrac{1}{4}} \\approx 7{,}8.\\] Vậy sau khoảng $7{,}8$ giờ thì nồng độ còn lại bằng $2$ mg/l.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D416TL12",
    "question": "Gọi $h(t)$ (m) là mực nước ở bồn chứa sau khi bơm nước được $t$ giây. Biết rằng $h'(t)=\\dfrac{1}{5}\\sqrt[3]{t}$ (m/s) và lúc đầu bồn không có nước. Mực nước ở bồn sau khi bơm nước được $9$ giây cao bao nhiêu mét <em>(làm tròn kết quả đến hàng phần trăm)</em>?",
    "answer": "2,81",
    "explain": "Ta có $h(t)=\\displaystyle\\int h'(t) \\mathrm{\\,d}t=\\dfrac{1}{5}\\displaystyle \\int t^{\\frac{1}{3}} \\mathrm{\\,d}t=\\dfrac{1}{5}\\cdot \\dfrac{t^{\\frac{4}{3}}}{\\dfrac{4}{3}}+C=\\dfrac{3}{20}\\sqrt[3]{t^4}+C$.<br> Ban đầu bồn không có nước nên $h(0)=0\\Leftrightarrow C=0$.<br> Vậy mức nước ở bồn sau khi bơm nước được $9$ giây là $$h(9)=\\dfrac{3}{20}\\cdot\\sqrt[3]{9^4}=2{,}81\\text{ (m)}.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
