window.dungSai2H22 = [
  {
    "id": "2H223DS1",
    "question": "Trong không gian với hệ trục toạ độ $Oxyz$, cho tam giác $ABC$ có toạ độ các điểm $A(2;-1;0)$, $B(2;1;-2)$, $C(-2;5;6)$.",
    "subQuestions": [
      {
        "text": "Gọi $M$ là điểm thoả mãn đẳng thức $\\overrightarrow{MB}+\\overrightarrow{MC}=\\overrightarrow{CA}$. Khi đó, độ dài của đoạn thẳng $OM=\\dfrac{65}{2}$",
        "answer": false
      },
      {
        "text": "Gọi $E(m;3;n)$ là điểm sao cho tam giác $BCE$ là cân tại $E$. Khi đó, ta có $m\\ne 0$; $n\\ne2$ và $m-2n+4=0$",
        "answer": true
      },
      {
        "text": "Gọi $D(a;b;c)$ là đỉnh thứ tư của hình bình hành $ABCD$. Khi đó, giá trị của biểu thức $a+b+c=9$",
        "answer": true
      },
      {
        "text": "Độ dài của đoạn thẳng $BC$ bằng $2\\sqrt{6}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Gọi $M(x;y;z)$.<br>  Ta có $\\overrightarrow{MB}=(2-x;1-y;-2-z)$, $\\overrightarrow{MC}=(-2-x;5-y;6-z)$, $\\overrightarrow{CA}=(4;-6;-6)$.<br>  Ta có   $\\overrightarrow{MB}+\\overrightarrow{MC}=\\overrightarrow{CA}$<br>$\\Leftrightarrow 2-x-2-x=4 \\text{ và } 1-y+5-y=-6 \\text{ và } -2-z+6-z=-6$<br>$\\Leftrightarrow x=-2 \\text{ và } y=6 \\text{ và } z=-5.$  Toạ độ $M(-2;6;-5)$. Độ dài $OM=\\sqrt{(-2)^2+6^2+(-5)^2}=\\sqrt{65}$.<br>- <strong>Đúng</strong>.<br>  Gọi $I$ là trung điểm của $BC$, suy ra $I(0;3;4)$.<br>  Ta có <br>- $\\overrightarrow{BE}=(m-2;;2;n+2)\\Rightarrow BE=\\sqrt{(m-2)^2+4+(n+2)^2}$.<br>- $\\overrightarrow{CE}=(m+2;;-2;n-6)\\Rightarrow BE=\\sqrt{(m+2)^2+4+(n-6)^2}$.  Tam giác $BCE$ cân tại $E$ khi và chỉ khi   $E\\ne I \\text{ và } BE=CE$<br>$\\Leftrightarrow m\\ne0; \\,n\\ne 2 \\text{ và } \\sqrt{(m-2)^2+4+(n+2)^2}=\\sqrt{(m+2)^2+4+(n-6)^2}$<br>$\\Leftrightarrow m\\ne0; \\,n\\ne 2 \\text{ và } m-2n+4=0$<br>- <strong>Đúng</strong>.<br>  $ABCD$ là hình bình hành nên $x_A+x_C=x_B+x_D \\text{ và } y_A+y_C=y_B+y_D \\text{ và } z_A+z_C=z_B+z_D\\Leftrightarrow 2-2=2+a \\text{ và } -1+5=1+b \\text{ và } 0+6=-2+c\\Leftrightarrow a=-2 \\text{ và } b=3 \\text{ và } c=8.$  Vậy $a+b+c=-2+3+8=9$.<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{BC}=(-4;4;8) \\Rightarrow BC=\\sqrt{(-4)^2+4^2+8^2}=4\\sqrt{6}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS2",
    "question": "Trong không gian $Oxyz$, $\\Delta ABC$ với $A(1;2;3)$, $B(5;0;-1)$ và $C(-3;1;7)$. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Chu vi $\\Delta ABC$ bằng $23{,}1$ làm tròn tới hàng phần chục",
        "answer": true
      },
      {
        "text": "$\\cos \\widehat{BAC}=\\dfrac{5\\sqrt{33}}{33}$",
        "answer": false
      },
      {
        "text": "Tọa độ $\\vec{AB}=(4;-2;-4)$",
        "answer": true
      },
      {
        "text": "Khi $ABCD$ là hình bình hành thì hoành độ của điểm $D$ bằng $7$",
        "answer": false
      }
    ],
    "explain": "<br>- <br>- $\\vec{AB}=(4; -2; -4) \\Rightarrow AB = \\sqrt{4^2 + (-2)^2 + (-4)^2} = 6$.<br>- $\\vec{AC}=(-4; -1; 4) \\Rightarrow AC = \\sqrt{(-4)^2 + (-1)^2 + 4^2} = \\sqrt{33}$.<br>- $\\vec{BC}=(-8; 1; 8) \\Rightarrow BC = \\sqrt{(-8)^2 + 1^2 + 8^2} = \\sqrt{129}$.<br>- Chu vi $\\Delta ABC$ là $AB + AC + BC = 6 + \\sqrt{33} + \\sqrt{129} \\approx 23{,}1$.<br>- $\\cos \\widehat{BAC} = \\dfrac{\\vec{AB} \\cdot \\vec{AC}}{AB \\cdot AC} = \\dfrac{-30}{6\\sqrt{33}}= \\dfrac{-5\\sqrt{33}}{33}$.<br>- $\\vec{AB}=(4;-2;-4)$.<br>- Gọi $D(x; y; z)$. Do $ABCD$ là hình bình hành nên $\\vec{AB} = \\vec{DC}$. <br>- $\\vec{AB} = (4; -2; -4)$<br>- $\\vec{DC} = (-3-x; 1-y; 7-z)$ Suy ra: \\[-3-x = 4 \\text{ và } 1-y = -2 \\text{ và } 7-z = -4 \\Leftrightarrow x = -7 \\text{ và } y = 3 \\text{ và } z = 11.\\] Vậy, $D(-7; 3; 11)$. Hoành độ của $D$ là $-7$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS3",
    "question": "Một sân vận động với sân bóng phẳng hình chữ nhật có chấm trắng trung tâm là nơi giao bóng, một đường kẻ vạch chia đôi sân và các khán đài. Khán đài $A$ gồm những dãy ghế nằm vuông góc với vạch chia đôi sân có độ cao tăng dần (các ghế cùng hàng thì cùng độ cao so với mặt sân). Chọn hệ trục tọa độ $Oxyz$ sao cho $O$ trùng với điểm giao bóng, mặt phẳng $Oxy$ trùng với mặt sân, trục $Ox$ trùng với vạch chia đôi sân, tia $Oz$ vuông góc với mặt sân (đơn vị đo lấy theo mét).  Một khán giả ngồi tại vị trí $M$ của khán đài $A$, có hình chiếu vuông góc lên mặt phẳng chứa sân là một điểm thuộc $Ox$. Góc hợp bởi $OM$ và mặt sân là $\\alpha$ với $\\sin \\alpha=\\dfrac{1}{3}$, nếu người này di chuyển 10 $(m)$ trên hàng ngang đến ngồi tại một vị trí $N$ thì góc hợp bởi $ON$ và mặt sân là $\\beta$ với $\\sin \\beta=\\dfrac{\\sqrt{10}}{10}$. Gọi $h(m)$ là độ cao tại $M$ so với mặt sân.   <br><img src=\"data/12/2H2/im2H22/loc2_2_TN_DS_TL_SGD_H_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm $M$ có cao độ bằng $0$",
        "answer": false
      },
      {
        "text": "Điểm $N$ có cùng tung độ với điểm $M$",
        "answer": false
      },
      {
        "text": "$OM=3h$",
        "answer": true
      },
      {
        "text": "$h=10$ m",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $z_M=MH$, vì khán giả ngồi tại vị trí $M$ có độ cao cao hơn so với mặt sân, nên cao độ của điểm $M$ phải lớn hơn $0$.<br>- Khi người đó dịch chuyển tới vị trí điểm $N$ thì $y_N=y_M+10$, nên điểm $N$ không có cùng tung độ với điểm $M$.<br>- Xét tam giác $OHM$ vuông tại $H$ có  $OH=OM\\cdot \\sin\\alpha\\Leftrightarrow OM=\\dfrac{OH}{\\sin\\alpha}=3h.$<br>- Gọi $K$ là hình chiếu vuông góc của $N$ trên $(Oxy)$. <br>  Xét tam giác $OMN$ vuông tại $M$ ta có $ON=\\sqrt{OM^2+MN^2}=\\sqrt{9h^2+100}$. <br>  Xét tam giác $OKN$ vuông tại $K$ có   $\\sin\\beta=\\dfrac{HN}{ON}=\\dfrac{h}{\\sqrt{9h^2+100}}=\\dfrac{1}{\\sqrt{10}}\\Leftrightarrow h^2=100\\Leftrightarrow h=10.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS4",
    "question": "Trong hệ trục tọa độ $Oxyz$, cho hai vectơ $\\vec{a}=(2;1;-2)$, $\\vec{b}=(0;-1;1)$.",
    "subQuestions": [
      {
        "text": "$\\cos\\left(\\vec{a},\\vec{b}\\right)=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\left|\\vec{a}\\right|\\cdot\\left|\\vec{b}\\right|}$",
        "answer": true
      },
      {
        "text": "$\\vec{a}\\cdot\\vec{b}=3$",
        "answer": false
      },
      {
        "text": "$\\left|\\vec{b}\\right|=\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng $45^\\circ$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. <br>  Ta có $\\cos(\\vec{a},\\vec{b})=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\left|\\vec{a}\\right|\\cdot\\left|\\vec{b}\\right|}$ theo công thức tích vô hướng.<br>- <strong>Sai</strong>. <br>  Ta có $\\vec{a}\\cdot\\vec{b}=2\\cdot 0+1\\cdot (-1)+(-2)\\cdot 1=-3$.<br>- <strong>Đúng</strong>. <br>  Ta có $\\left|\\vec{b}\\right|=\\sqrt{(-1)^2+1^2}=\\sqrt{2}$.<br>- <strong>Sai</strong>. <br>  Ta có  $\\cos\\left(\\vec{a},\\vec{b}\\right)=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\left|\\vec{a}\\right|\\cdot\\left|\\vec{b}\\right|}=\\dfrac{-3}{3\\cdot \\sqrt{2}}=-\\dfrac{1}{\\sqrt{2}}.$  Suy ra $\\left(\\vec{a},\\vec{b}\\right)=135^\\circ$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS3",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ với $A\\left(2;1;1\\right)$, $B\\left(1;2;1\\right)$ và $C\\left(-2;2;0\\right)$.",
    "subQuestions": [
      {
        "text": "Số đo góc $\\widehat{BAC}$ làm tròn tới hàng phần mười theo đơn vị độ bằng $33{,}6^{\\circ}$",
        "answer": true
      },
      {
        "text": "Tọa độ trọng tâm $G$ của tam giác $ABC$ là $G\\left(\\dfrac{1}{3};\\dfrac{5}{3};\\dfrac{2}{3}\\right)$",
        "answer": true
      },
      {
        "text": "Diện tích của tam giác $ABC$ bằng $\\sqrt{11}$",
        "answer": false
      },
      {
        "text": "Đường phân giác trong của góc $\\widehat{BAC}$ cắt cạnh $BC$ tại điểm $D$ có tọa độ là $(a;b;c)$ thì $a+b+c=3$",
        "answer": true
      }
    ],
    "explain": "Ta có $\\overrightarrow{AB}=(-1;1;0)$; $\\overrightarrow{AC}=(-4;1;-1)$.<br>  Suy ra $\\left[\\overrightarrow{AB};\\overrightarrow{AC}\\right]=(-1;-1;3)$.  <br>- Ta có $\\cos(\\widehat{BAC}) = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{\\left|\\overrightarrow{AB}\\right| \\cdot \\left|\\overrightarrow{AC}\\right|}= \\dfrac{5}{\\sqrt{2} \\cdot 3\\sqrt{2}} = \\dfrac{5}{6}$.<br>  Suy ra $\\widehat{BAC}\\approx 33{,}557^{\\circ}$.<br>  Làm tròn tới hàng phần mười, ta được $33{,}6^{\\circ}$.<br>- Tọa độ của trọng tâm $G$ của $\\triangle ABC$ $x=\\dfrac{x_A+x_B+x_C}{3}=\\dfrac{1}{3} \\text{ và } y_G=\\dfrac{y_A+y_B+y_C}{3}=\\dfrac{5}{3} \\text{ và } z_G=\\dfrac{z_A+z_B+z_C}{3}=\\dfrac{2}{3}\\Rightarrow G\\left(\\dfrac{1}{3};\\dfrac{5}{3};\\dfrac{2}{3}\\right).$<br>- Ta có $S_{\\triangle ABC}=\\dfrac{1}{2}\\cdot\\left|\\left[\\overrightarrow{AB};\\overrightarrow{AC}\\right]\\right|=\\dfrac{1}{2}\\cdot \\sqrt{(-1)^2+(-1)^2+3^2}=\\dfrac{\\sqrt{11}}{2}$.<br>- Vì $AD$ là đường phân giác trong của góc $\\widehat{BAC}$, theo tính chất đường phân giác, ta có  $\\dfrac{DB}{DC} = \\dfrac{AB}{AC}=\\dfrac{1}{3}\\Rightarrow \\dfrac{\\overrightarrow{DB}}{\\overrightarrow{DC}}=-\\dfrac{1}{3}\\Leftrightarrow \\overrightarrow{DC}=-3\\overrightarrow{DB}$. \\,\\,\\ $(*)$.  Ta có $(*)\\Leftrightarrow (-2-a;2-b;-c)=-3(1-a;2-a;1-c)\\Rightarrow a=\\dfrac{1}{4} \\text{ và } b=2 \\text{ và } c=\\dfrac{3}{4}.$<br>  Vậy $a + b + c = \\dfrac{1}{4} + 2 + \\dfrac{3}{4}=3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS4",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$ có $AB=1$; $AD=2$; $AA'=3$, $\\widehat{A'AB}=90^{\\circ}$; $\\widehat{A'AD}=120^{\\circ}$; $\\widehat{DAB}=60^{\\circ}$. Khi đó",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB} \\cdot \\overrightarrow{AD}=-1$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{CC'}=\\overrightarrow{BD'}$",
        "answer": true
      },
      {
        "text": "Đường chéo $AC'$ có độ dài bằng $\\sqrt{14}$",
        "answer": false
      },
      {
        "text": "Số đo góc giữa hai vecto $\\overrightarrow{AB}$, $\\overrightarrow{AC'}$ làm tròn tới hàng đơn vị theo đơn vị độ bằng $39^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = |\\overrightarrow{AB}| \\cdot |\\overrightarrow{AD}| \\cdot \\cos(\\widehat{DAB}= 1 \\cdot 2 \\cdot \\cos 60^{\\circ} = 1$.<br>- Ta có $\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{CC'} = \\overrightarrow{BD} + \\overrightarrow{DD'}= \\overrightarrow{BD'}$.<br>- Ta có   $AC'^2 = (\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'})^2$<br>$= AB^2+AD^2+AA'^2+2\\overrightarrow{AB}\\cdot\\overrightarrow{AD}+2\\overrightarrow{AB}\\cdot\\overrightarrow{AA'}+2\\overrightarrow{AD}\\cdot\\overrightarrow{AA'}$<br>$= 1^2 + 2^2 + 3^2 + 2 \\cdot 1 \\cdot 2 \\cdot \\cos 60^{\\circ} + 2 \\cdot 1 \\cdot 3 \\cdot \\cos 90^{\\circ} + 2\\cdot 2 \\cdot 3 \\cdot \\cos 120^{\\circ}$<br>$= 10.$  Suy ra $AC' = \\sqrt{10}$.<br>- Ta có   $\\cos(\\overrightarrow{AB}, \\overrightarrow{AC'}) = \\dfrac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC'}}{|\\overrightarrow{AB}|\\cdot|\\overrightarrow{AC'}|}$<br>$= \\dfrac{\\overrightarrow{AB} \\cdot (\\overrightarrow{AB} + \\overrightarrow{AD}+\\overrightarrow{AA'})}{|\\overrightarrow{AB}| \\cdot |\\overrightarrow{AC'}|}$<br>$= \\dfrac{\\overrightarrow{AB}^2 + \\overrightarrow{AB}\\overrightarrow{AD} + \\overrightarrow{AB}\\overrightarrow{AA'}}{|\\overrightarrow{AB}| \\cdot |\\overrightarrow{AC'}|}$<br>$= \\dfrac{1 + 1 + 0}{1 \\cdot \\sqrt{10}}$<br>$= \\dfrac{2}{\\sqrt{10}}.$  Suy ra $(\\overrightarrow{AB}, \\overrightarrow{AC'}) \\approx 51^{\\circ}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS5",
    "question": "Trong không gian $O x y z$, cho $A(2 ; 0 ;-1)$, $B(1 ; 2 ; 1)$, $C(3 ; 1 ;-2)$.",
    "subQuestions": [
      {
        "text": "Ba điểm $A$, $B$, $C$ lập được thành một tam giác",
        "answer": true
      },
      {
        "text": "$G(2 ; 1 ;-1)$ là trọng tâm của $\\triangle ABC$",
        "answer": false
      },
      {
        "text": "Gọi $D(a ; b ; c)$ sao cho $ABCD$ là hình bình hành. Khi đó $ a+b+c= 5$",
        "answer": false
      },
      {
        "text": "$\\cos \\widehat{BAC}=-\\dfrac{\\sqrt{3}}{9}$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta thấy $\\overrightarrow{AB} = (-1;2;2)$ và $\\overrightarrow{AC} = (1;1;-1)$. Do $\\dfrac{-1}{1} \\ne \\dfrac{2}{1}$ nên $\\overrightarrow{AB}$ không cùng phương $\\overrightarrow{AC}$.<br>  Suy ra ba điểm $A$, $B$, $C$ lập được thành một tam giác.<br>- <strong>Sai</strong>. $G\\left(2 ; 1 ;-\\dfrac{2}{3}\\right)$ là trọng tâm của $\\triangle ABC$.<br>- Ta có $\\overrightarrow{CD} = (a-3;b-1;c+2)$ và $\\overrightarrow{BA} = (1;-2;-2)$.<br>  Để $ABCD$ là hình bình hành thì $\\overrightarrow{CD} = \\overrightarrow{BA}$ hay $a=4$, $b=-1$ và $c=-4$.<br>  Khi đó, $a+b+c=-1$.<br>- <strong>Đúng</strong>. Ta có  $  \\cos\\widehat{BAC}  = \\cos(\\overrightarrow{AB},\\overrightarrow{AC})  = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{AB \\cdot AC}  =-\\dfrac{\\sqrt{3}}{9}.  $",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS6",
    "question": "Trong không gian toạ độ $Oxyz$, cho hai véc-tơ $\\overrightarrow{u}=(-1; 2; 2)$ và $\\overrightarrow{v}=(-3;-4; 0)$.",
    "subQuestions": [
      {
        "text": "Nếu một véc-tơ có tọa độ là $(x; y; z)$ thì véc-tơ đó có độ dài là $\\sqrt{x^2+y^2+z^2}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{u}$, $\\overrightarrow{v}$ cùng phương",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{u} \\cdot \\overrightarrow{v}=5$",
        "answer": false
      },
      {
        "text": "Góc giữa hai véc-tơ $\\overrightarrow{u}$ và $\\overrightarrow{v}$ (làm tròn đến hàng đơn vị của độ) là $115^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Nếu một véc-tơ có tọa độ là $(x; y; z)$ thì véc-tơ đó có độ dài là $\\sqrt{x^2+y^2+z^2}$.<br>- <strong>Sai</strong>.<br>  Ta có $\\dfrac{-1}{-3}\\ne \\dfrac{2}{-4}$ nên $\\overrightarrow{u}$, $\\overrightarrow{v}$ không cùng phương.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{u} \\cdot \\overrightarrow{v}=(-1)\\cdot (-3)+2\\cdot (-4)+2\\cdot 0=-5$.<br>- <strong>Sai</strong>.<br>  Ta có $\\cos \\left(\\overrightarrow{u},\\overrightarrow{v}\\right)=\\dfrac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{\\left |\\overrightarrow{u}\\right | \\cdot \\left |\\overrightarrow{v}\\right |}=\\dfrac{-5}{3\\cdot 5}=-\\dfrac{1}{3}$.<br>  Vậy $\\left(\\overrightarrow{u},\\overrightarrow{v}\\right)\\approx 108^\\circ$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS7",
    "question": "Một tháp trung tâm kiểm soát không lưu ở sân bay cao $80$ m sử dụng ra đa có phạm vi theo dõi $500$ km được đặt trên đỉnh tháp. Chọn hệ trục toạ độ $Oxyz$ có gốc $O$ trùng với vị trí chân tháp, mặt phẳng $(Oxy)$ trùng với mặt đất sao cho trục $Ox$ hướng về phía Tây, trục $Oy$ hướng về phía Nam, trục $Oz$  hướng thẳng đứng lên phía trên (đơn vị trên mỗi trục tính theo kilômét).  Một máy bay tại vị trí $A$ cách mặt đất $10$ km, cách $300$ km về phía Tây và $200$ km về phía Nam so với tháp trung tâm kiểm soát không lưu        <br><img src=\"data/12/2D2/im2H2/2H22_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Ra đa ở vị trí có toạ độ $(0; 0; 0)$",
        "answer": false
      },
      {
        "text": "Vị trí $A$ có tọa độ $(300; 200; 10)$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ máy bay đến ra đa là khoảng $360{,}67$ km (làm tròn kết quả đến hàng phần trăm)",
        "answer": false
      },
      {
        "text": "Ra đa của trung tâm kiểm soát không lưu không phát hiện được máy bay tại vị trí $A$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Theo giả thiết, ra đa ở vị trí có toạ độ $(0;0;0{,}08)$.<br>- <strong>Đúng</strong>.<br>  Vì điểm $A(300;200;10)$.<br>- <strong>Sai</strong>.<br>  Khoảng cách từ máy bay đến ra đa là  $\\sqrt{(300-0)^2+(200-0)^2+(10-0{,}08)^2} \\approx 360{,}69$ (km).<br>- <strong>Sai</strong>.<br>  Vì $360{,}69&lt; 500$ nên ra đa của trung tâm kiểm soát không lưu có phát hiện được máy bay tại vị trí $A$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS8",
    "question": "Trong không gian $Oxyz$, cho các điểm $A(4;2;-1)$, $B(1;-1;2)$ và $C(0;-2;3)$.",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $N$ thuộc mặt phẳng $(Oxy)$, sao cho $A$, $B$, $N$ thẳng hàng là $(3;-1;0)$",
        "answer": false
      },
      {
        "text": "Tọa độ trung điểm $I$ của đoạn thẳng $AC$ là $(2;0;1)$",
        "answer": true
      },
      {
        "text": "$\\vec{AB}=(-3;-3;3)$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $M$ sao cho $\\vec{AB}+\\vec{CM}=\\vec{0}$ là $(3;1;0)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong><br>  Vì điểm $N$ thuộc mặt phẳng $(Oxy)$ nên $N(x;y;0)$.<br>  Ta có $\\vec{AN}=(x-4;y-2;1)$, $\\vec{BN}=(x-1;y+1;-2)$.<br>  Để $A$, $B$, $N$ thẳng hàng thì hai vectơ $\\vec{AN}$, $\\vec{BN}$ cùng phương. Do đó, $\\vec{AN}=k\\vec{BN}$ (với $k$ là số thực bất kì).<br>  $\\Rightarrow x-4=k(x-1) \\text{ và } y-2=k(y+1) \\text{ và } 1=-2k   \\Rightarrow x-4=-\\dfrac{1}{2}(x-1) \\text{ và } y-2=-\\dfrac{1}{2}(y+1) \\text{ và } k=-\\dfrac{1}{2}  \\Rightarrow x=3 \\text{ và } y=1.$<br>  Vậy $N(3;1;0)$.<br>- <strong>Đúng</strong><br>  Tọa độ trung điểm $I$ của đoạn thẳng $AC$ là<br>  $x_I=\\dfrac{4+0}{2} \\text{ và } y_I=\\dfrac{2+(-2)}{2} \\text{ và } z_I=\\dfrac{-1+3}{2}  \\Leftrightarrow x_I=2 \\text{ và } y_I=0 \\text{ và } z_I=1.$<br>  Vậy $I(2;0;1)$.<br>- <strong>Đúng</strong><br>  Ta có $\\vec{AB}=(-3;-3;3)$.<br>- <strong>Đúng</strong><br>  Gọi $M(x;y;z)$ thì $\\vec{MC}=(-x;-2-y;3-z)$.<br>  Vì $\\vec{AB}+\\vec{CM}=\\vec{0} \\Rightarrow \\vec{AB}=\\vec{MC}   \\Rightarrow -x=-3 \\text{ và } -2-y=-3 \\text{ và } 3-z=3   \\Leftrightarrow x=3 \\text{ và } y=1 \\text{ và } z=0  \\Rightarrow M(3;1;0)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS9",
    "question": "Trong không gian với hệ trục toạ độ $Oxyz$, cho hình bình hành $ABCD$ có $A(-1;3;0)$, $B(1;2;-1)$, $C(1;1;-2)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB} = (2;-1;-1)$",
        "answer": true
      },
      {
        "text": "$\\cos\\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right) = \\dfrac{2\\sqrt{2}}{3}$",
        "answer": true
      },
      {
        "text": "Diện tích của tam giác $ABC$ bằng $2\\sqrt{2}$",
        "answer": false
      },
      {
        "text": "Toạ độ của điểm $D$ là $(-1;2;-1)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AB} = (2;-1;-1)$.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AC} = (2;-2;-2)$. <br>  Suy ra $\\cos\\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right) = \\dfrac{\\overrightarrow{AB}\\cdot \\overrightarrow{AC}}{AB\\cdot AC} = \\dfrac{2\\cdot 2 + (-1)\\cdot (-2) + (-1)\\cdot (-2)}{\\sqrt{2^2 + (-1)^2 + (-1)^2} \\cdot \\sqrt{2^2 + (-2)^2 + (-2)^2}} = \\dfrac{2\\sqrt{2}}{3}.$<br>- <strong>Sai</strong>. Ta có $\\sin \\widehat{BAC} = \\sqrt{1-\\cos^2 \\widehat{BAC}} = \\sqrt{1-\\left(\\dfrac{2\\sqrt{2}}{3}\\right)^2} = \\dfrac{1}{3}$. <br>  Suy ra $S_{ABC} = \\dfrac{1}{2}\\cdot AB\\cdot AC \\cdot \\sin\\widehat{BAC} = \\dfrac{1}{2}\\cdot \\sqrt{6}\\cdot 2\\sqrt{3}\\cdot \\dfrac{1}{3} = \\sqrt{2}$.<br>- <strong>Đúng</strong>. Ta có   $\\overrightarrow{CD} = \\overrightarrow{BA}\\Leftrightarrow x_D-1 = -2 \\text{ và } y_D - 1 = 1 \\text{ và } z_D + 2 = 1\\Leftrightarrow x_D = -1 \\text{ và } y_D = 2 \\text{ và } z_D = -1.$  Vậy toạ độ điểm $D$ là $(-1;2;-1)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS10",
    "question": "Trong không gian $Oxyz$, cho hai điểm $M(2;3;-1)$, $N(-1;1;1)$.",
    "subQuestions": [
      {
        "text": "Tọa độ vectơ $\\overrightarrow{OM}$ cho bởi $\\overrightarrow{OM} = 2\\overrightarrow{i} - 3\\overrightarrow{j} + \\overrightarrow{k}$",
        "answer": false
      },
      {
        "text": "Độ dài của vectơ $|\\overrightarrow{MN}|$ bằng $\\sqrt{17}$",
        "answer": true
      },
      {
        "text": "Tọa độ của vectơ $\\overrightarrow{v} = \\overrightarrow{OM} + \\overrightarrow{ON}$ là $\\overrightarrow{v}=(1;4;0)$",
        "answer": true
      },
      {
        "text": "Cho $P(1;m-1;3)$. Tam giác $MNP$ vuông tại $N$ khi và chỉ khi $m=1$",
        "answer": true
      }
    ],
    "explain": "Ta có $M(2;3;-1)$ và $N(-1;1;1)$.  <br>- $\\overrightarrow{OM} = (2;3;-1) = 2\\overrightarrow{i} + 3\\overrightarrow{j} - \\overrightarrow{k}$.<br>- Tọa độ vectơ $\\overrightarrow{MN} = (-3; -2; 2)$.<br>  Suy ra $|\\overrightarrow{MN}| = \\sqrt{(-3)^2 + (-2)^2 + 2^2} = \\sqrt{17}$.<br>- Tọa độ của vectơ $\\overrightarrow{v} = \\overrightarrow{OM} + \\overrightarrow{ON}= (2+(-1); 3+1; -1+1) = (1; 4; 0)$.<br>- Tam giác $MNP$ vuông tại $N$ khi $\\overrightarrow{NM} \\cdot \\overrightarrow{NP} = 0$.  <br>- $\\overrightarrow{NM} = (3; 2; -2)$.<br>- $\\overrightarrow{NP} = (1-(-1); (m-1)-1; 3-1) = (2; m-2; 2)$.  Tích vô hướng $\\overrightarrow{NM} \\cdot \\overrightarrow{NP} = 3 \\cdot 2 + 2 \\cdot (m-2) + (-2) \\cdot 2 = 6 + 2m - 4 - 4 = 2m - 2$.  $\\overrightarrow{NM} \\cdot \\overrightarrow{NP} = 0 \\Leftrightarrow 2m - 2 = 0 \\Leftrightarrow m = 1.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS11",
    "question": "Khối rubik như hình vẽ có độ dài cạnh bằng $2$. Khi gắn rubik vào hệ trục tọa độ trong không gian $Oxyz$, cho ta lập phương $ABCD.A'B'C'D'$ có $A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $A'(0;0;2)$. Gọi $N$ là trung điểm của $AA'$.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">\\quad  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $B(2;0;0)$ suy ra vectơ là $\\overrightarrow{OB} = 2\\overrightarrow{i} + 0\\overrightarrow{j} + 0\\overrightarrow{k}$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $C(0;2;2)$",
        "answer": false
      },
      {
        "text": "Tọa độ của điểm $N$ là $N(0;0;1)$",
        "answer": true
      },
      {
        "text": "Độ dài của vectơ $\\overrightarrow{AC'}$ bằng $3\\sqrt{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- Lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2$, với $A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $A'(0;0;2)$.<br>  Tọa độ vectơ $\\overrightarrow{OB} = (2;0;0) = 2\\overrightarrow{i} + 0\\overrightarrow{j} + 0\\overrightarrow{k}$.<br>- Toạ độ điểm $C(2;2;0)$.<br>- $N$ là trung điểm của $AA'$ nên  $N \\left( \\dfrac{0+0}{2}; \\dfrac{0+0}{2}; \\dfrac{0+2}{2} \\right) = N(0;0;1).$<br>- Độ dài của vectơ $\\overrightarrow{AC'}$ là  $|\\overrightarrow{AC'}|=AC' = 2\\sqrt{3}.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS12",
    "question": "Trong không gian $Oxyz$ cho các vectơ  $\\overrightarrow{a}=(-2;1;1)$, $\\overrightarrow{b}=(2;-1;1)$, $\\overrightarrow{c}=(x;1;y)$, $\\overrightarrow{u}=-2\\overrightarrow{a}+3\\overrightarrow{b}$. Gọi $\\varphi$ là góc giữa hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ và $\\overrightarrow{c}$ là một vectơ cùng phương với $\\overrightarrow{b}$.",
    "subQuestions": [
      {
        "text": "$|\\overrightarrow{a}|=\\sqrt{6}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{u}=(10;-5;4)$",
        "answer": false
      },
      {
        "text": "$x+y=3$",
        "answer": false
      },
      {
        "text": "$\\cos\\varphi=-\\dfrac{2}{3}$",
        "answer": true
      }
    ],
    "explain": "<br>- $\\left|\\overrightarrow{a}\\right|=\\sqrt{(-2)^2+1^2+1^2}=\\sqrt{6}$.<br>- $-2\\overrightarrow{a}+3\\overrightarrow{b}=(10;-5;1)\\ne(10;-5;4)$.<br>  Vậy $(10;-5;4)$ không phải là tọa độ của $\\overrightarrow{u}$.<br>- Vì $\\overrightarrow{c}$ cùng phương với $\\overrightarrow{b}$ nên $\\overrightarrow{c}=k\\overrightarrow{b}\\Rightarrow x=2k \\text{ và } 1=-1k \\text{ và } y=k \\Rightarrow x=-2 \\text{ và } k=-1 \\text{ và } y=-1.$<br>  Suy ra $(x;y)=(-2;-1)\\Rightarrow x+y=-3$.<br>- $\\cos\\varphi=\\dfrac{\\overrightarrow{a}\\cdot\\overrightarrow{b}}{\\left|\\overrightarrow{a}\\right|\\cdot\\left|\\overrightarrow{b}\\right|}  =\\dfrac{(-2)\\cdot2+1\\cdot(-1)+1\\cdot1}{\\sqrt{(-2)^2+1^2+1^2}\\cdot\\sqrt{2^2+(-1)^2+1^2}}=\\dfrac{-4}{6}=-\\dfrac{2}{3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS13",
    "question": "Trong không gian $Oxyz$ cho tam giác $ABC$ với $A(3;0;-1)$, $B(1;3;-2)$, $C(2;-6;0)$. Gọi $G$ là trọng tâm của tam giác $ABC$, điểm $M(a;b;c)$ nằm trên trục hoành và cách đều hai điểm $A$ và $B$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=(2;-3;1)$",
        "answer": false
      },
      {
        "text": "$BC=\\sqrt{86}$",
        "answer": true
      },
      {
        "text": "$G(2;-1;-1)$",
        "answer": true
      },
      {
        "text": "$a+b+c=-1$",
        "answer": true
      }
    ],
    "explain": "<br>- $\\overrightarrow{AB}=(1-3;3-0;-2+1)=(-2;3;-1)$.<br>- $\\overrightarrow{BC} = (1;-9;2)\\Rightarrow \\left|\\overrightarrow{BC}\\right|=\\sqrt{1^2+(-9)^2+2^2}=\\sqrt{86}$.  Vậy $BC=\\sqrt{86}$.<br>- Gọi $G(x;y;z)$ là trọng tâm tam giác $ABC$, ta có  \\[x=\\dfrac{3+1+2}{3} \\text{ và } y=\\dfrac{0+3-6}{3} \\text{ và } z=\\dfrac{-1-2+0}{3}\\Leftrightarrow x=2 \\text{ và } y=-1 \\text{ và } z=-1.  \\]  Vậy $G(2;-1;-1)$.<br>- Vì điểm $M$ nằm trên trục hoành nên $M(a;0;0)$. Suy ra $b=0$ và $c=0$.<br>  Vì $M$ cách đều $A$ và $B$ nên $MA=MB$, tức là  $\\sqrt{(3-a)^2+0^2+(-1)^2}=\\sqrt{(1-a)^2+3^2+2^2}$<br>$\\Leftrightarrow\\ \\sqrt{(3-a)^2+1}=\\sqrt{(1-a)^2+13}$<br>$\\Leftrightarrow\\ (3-a)^2+1=(1-a)^2+13$<br>$\\Leftrightarrow\\ a=-1.$  Vậy $a+b+c=-1+0+0=-1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS14",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$, biết điểm $A(0;0;0)$, $B(1;0;0)$, $C(1;2;0)$, $D'(-1;3;5)$. Gọi $M, N$ là tâm của các hình bình hành $ABB'A'$, $CC'D'D$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ $D(0;2;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ $A'(-1;1;5)$",
        "answer": true
      },
      {
        "text": "Tọa độ $\\overrightarrow{MN} = (-1;1;0)$",
        "answer": false
      },
      {
        "text": "$\\left|\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'}\\right| = \\sqrt{29}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Vì $ABCD$ là hình bình hành nên $\\overrightarrow{DC} = \\overrightarrow{AB}\\Leftrightarrow (1-x; 2-y; -z) = (1;0;0) \\Leftrightarrow D(0;2;0)$.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AA'} = \\overrightarrow{DD'}\\Leftrightarrow \\overrightarrow{AA'} =(-1; 1; 5)\\Leftrightarrow A'(-1;1;5)$.<br>- <strong>Sai</strong>. $M$ là trung điểm của $BA'$ nên $M\\left( 0;\\dfrac{1}{2}; \\dfrac{5}{2}\\right)$ và $N$ là trung điểm của $CD'$ nên $N\\left( 0;\\dfrac{5}{2}; \\dfrac{5}{2}\\right)$.<br>  Vậy $\\overrightarrow{MN} = (0;2;0)$.<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{CC'} = \\overrightarrow{DD'} = (-1; 1; 5)$.<br>  Vậy $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'} = (1;0;0) + (0;2;0) + (-1;1;5) = (0; 3; 5)$.<br>  Suy ra $|\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CC'} | = \\sqrt{34}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS15",
    "question": "Cho hình chóp $S.ABCD$ đáy là hình thang vuông tại $A$ và $D$, $SA \\perp (ABCD)$. Góc giữa $SB$ và mặt phẳng đáy bằng $45^\\circ$, $E$ là trung điểm của $SD$, $AB = 2a$, $AD = DC = a$. Gọi $G$ là trọng tâm của tam giác $ACE$. Chọn hệ trục tọa độ như hình vẽ.  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_024.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{SA} \\cdot \\overrightarrow{CB} = 0$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{CE} = \\overrightarrow{CD} + \\overrightarrow{CS}$",
        "answer": false
      },
      {
        "text": "Tọa độ của điểm $C(a; 2a; 0)$",
        "answer": false
      },
      {
        "text": "Độ dài $BG$ là $\\dfrac{a\\sqrt{113}}{6}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Vì $SA\\perp (ABCD)$ nên $SA\\perp BC$ do đó $\\overrightarrow{SA} \\cdot \\overrightarrow{CB} = 0$.<br>- <strong>Sai</strong>.<br>  Vì $E$ là trung điểm của $SD$ nên $\\overrightarrow{CE} = \\dfrac{1}{2}\\left(\\overrightarrow{CD} + \\overrightarrow{CS}\\right)$.<br>- <strong>Sai</strong>.<br>  Dựa vào hình vẽ, ta có $A(0;0;0)$, $B(0;2a;0)$, $D(a;0;0)$.<br>  Vì $CD \\parallel AB$ và $CD=\\dfrac{1}{2}AB$ nên $\\overrightarrow{DC}=\\dfrac{1}{2}\\overrightarrow{AB}$.<br>  Mà $\\overrightarrow{AB}=(0;2a;0)$.<br>  Do đó $x_C-a=0 \\text{ và } y_C=a \\text{ và } z_C=0 \\Leftrightarrow x_C=a \\text{ và } y_C=a \\text{ và } z_C=0.$<br>  Vậy $C(a;a;0)$.<br>- <strong>Sai</strong>.<br>  Xét tam giác $SAB$ vuông tại $A$ có $\\widehat{B}=45^\\circ$ suy ra tam giác $SAB$ vuông cân tại $A$ hay $SA=AB=2a$.<br>  Do đó $S(0;0;2a)$.<br>  Vì $E$ là trung điểm $SD$ nên $E\\left(\\dfrac{a}{2};0;\\dfrac{a}{2}\\right)$.<br>  Vì $G$ là trọng tâm tam giác $ACE$ nên $G\\left(\\dfrac{a}{2};\\dfrac{a}{3};\\dfrac{a}{6}\\right)$.<br>  Khi đó $BG=\\sqrt{\\left(\\dfrac{a}{2}-0\\right)^2 + \\left(\\dfrac{a}{3}-2a\\right)^2 + \\left(\\dfrac{a}{6}-0\\right)^2}=\\dfrac{a\\sqrt{110}}{6}$.<br>  Vậy $BG=\\dfrac{a\\sqrt{110}}{6}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS16",
    "question": "Trong không gian $Oxyz$, cho hình bình hành $ABCD$, biết $A(-1; 0; 3)$, $B(2; 1; -1)$, $C(3; 2; 2)$.",
    "subQuestions": [
      {
        "text": "Côsin góc $C$ của tam giác $ABC$ bằng $\\dfrac{\\sqrt{231}}{77}$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $D$ là $D(0; 1; 6)$",
        "answer": true
      },
      {
        "text": "Điểm $M \\in (Oxy)$ sao cho $A$, $M$, $B$ thẳng hàng có tọa độ $M \\left( \\dfrac{5}{4}; -\\dfrac{3}{4}; 0 \\right)$",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $N$ thỏa mãn $\\overrightarrow{NA} + \\overrightarrow{NB} - 3\\overrightarrow{NC} = \\overrightarrow{0}$ là $N(10; 5; 4)$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{CA}=(-4;-2;1)$, $\\overrightarrow{CB}=(-1;-1;-3)$.<br>  Khi đó  \\[\\cos C = \\cos \\left(\\overrightarrow{CA},\\overrightarrow{CB}\\right) = \\dfrac{(-4)\\cdot(-1) + (-2)\\cdot(-1) + 1\\cdot(-3)}{\\sqrt{(-4)^2+(-2)^2+1^2}\\cdot\\sqrt{(-1)^2+(-1)^2+(-3)^2}} = \\dfrac{\\sqrt{231}}{77}.\\]<br>- <strong>Đúng</strong>.<br>  Vì $ABCD$ là hình bình hành nên $\\overrightarrow{AD}=\\overrightarrow{BC} \\Leftrightarrow x_D+1=1 \\text{ và } y_D=1 \\text{ và } z_D-3=3 \\Leftrightarrow x_D=0 \\text{ và } y_D=1 \\text{ và } z_D=6.$<br>  Vậy $D(0;1;6)$.<br>- <strong>Sai</strong>.<br>  Vì $M\\in (Oxy)$ nên $M(a;b;0)$.<br>  Ta có $\\overrightarrow{AB}=(3;1;-4)$, $\\overrightarrow{AM}=(a+1;b;-3)$.<br>  Để $A$, $M$, $B$ thẳng hàng thì $\\overrightarrow{AM}$ và $\\overrightarrow{AB}$ cùng phương suy ra  \\[\\dfrac{a+1}{3}=\\dfrac{b}{1}=\\dfrac{-3}{-4} \\Leftrightarrow a=\\dfrac{5}{4} \\text{ và } b=\\dfrac{3}{4}.\\]  Vậy $M\\left(\\dfrac{5}{4};\\dfrac{3}{4};0\\right)$.<br>- <strong>Sai</strong>.<br>  Ta có  $\\overrightarrow{NA} + \\overrightarrow{NB} - 3\\overrightarrow{NC} = \\overrightarrow{0}$<br>$\\Leftrightarrow \\overrightarrow{NA}-\\overrightarrow{NC} + \\overrightarrow{NB}-\\overrightarrow{NC} = \\overrightarrow{NC}$<br>$\\Leftrightarrow \\overrightarrow{NC}=\\overrightarrow{CA}+\\overrightarrow{CB}.$  Ta lại có $\\overrightarrow{CA}=(-4;-2;1)$, $\\overrightarrow{CB}=(-1;-1;-3)$.<br>  Suy ra $\\overrightarrow{CA}+\\overrightarrow{CB}=(-5;-3;-2)$.<br>  Khi đó $3-x_N=-5 \\text{ và } 2-y_N=-3 \\text{ và } 2-z_N=-2 \\Leftrightarrow x_N=8 \\text{ và } y_N=5 \\text{ và } z_N=4.$<br>  Vậy $N(8;5;4)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS17",
    "question": "Trong không gian với hệ trục tọa độ $Oxyz$, cho ba điểm $A(1; 2; 3)$, $B(2; 1; 5)$, $C(2; 4; 2)$.",
    "subQuestions": [
      {
        "text": "Điểm $I(a; b; c)$ nằm trên mặt phẳng $(Oxz)$ thỏa mãn $|3\\overrightarrow{IB} - \\overrightarrow{IC}|$ đạt giá trị nhỏ nhất. Khi đó $a - 2b + 2c = 15$",
        "answer": false
      },
      {
        "text": "Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ bằng $30^\\circ$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = (5; 7; 10)$",
        "answer": true
      },
      {
        "text": "Tọa độ trung điểm của $AB$ là $\\left(\\dfrac{3}{2};\\dfrac{3}{2};4\\right)$",
        "answer": true
      }
    ],
    "explain": "<br>- Lấy điểm $M$ sao cho $3\\overrightarrow{MB}-\\overrightarrow{MC}$. Khi đó $M\\left(2;-\\dfrac{1}{2};4\\right)$.<br>  Ta có $\\left|3\\overrightarrow{IB}-\\overrightarrow{IC}\\right|=\\left|3\\overrightarrow{IM}+3\\overrightarrow{MB}-\\overrightarrow{IM}-\\overrightarrow{MC}\\right|=\\left|2\\overrightarrow{IM}\\right|=2IM$.<br>  $\\left|3\\overrightarrow{IB}-\\overrightarrow{IC}\\right|$ đạt giá trị nhỏ nhất khi $IM$ nhỏ nhất.<br>  Suy ra $I$ là hình chiếu $M$ lên mặt phẳng $\\left(Oxz\\right)$ nên $I\\left(2;0;4\\right)$.<br>  Do đó ta có $a-2b+2c=10$.<br>- Ta có $\\overrightarrow{AB}=(1;-1;2)$ và $\\overrightarrow{AC}=(1;2;-1)$.<br>  Khi đó  \\[\\cos \\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right)=\\dfrac{1 \\cdot 1+ (-1) \\cdot 2 +2 \\cdot (-1)}{\\sqrt{1^2+(-1)^2+2^2} \\cdot \\sqrt{1^2+2^2+(-1)^2}}=-\\dfrac{1}{2}.\\]  Nên góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là $120^\\circ$.<br>- Ta có $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = (5; 7; 10)$.<br>- Tọa độ trung điểm của $AB$ là $\\left(\\dfrac{3}{2}; \\dfrac{3}{2}; 4\\right)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS18",
    "question": "Trong không gian $Oxyz$, cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, cạnh bên $SA$ vuông góc với đáy. Biết $A(0; 0; 0)$, $B(3; 0; 0)$, $D(0; 4; 0)$ và $S(0; 0; 5)$ (tham khảo hình vẽ).<br><img src=\"data/12/2D2/im2H2/2H22_tikz_028.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Điểm $C$ có tọa độ là $(3; 4; 0)$",
        "answer": true
      },
      {
        "text": "Vectơ $\\overrightarrow{SC}$ có tọa độ là $(-3; -4; 5)$",
        "answer": false
      },
      {
        "text": "Trọng tâm $\\triangle SBD$ có tọa độ là $\\left(1; \\dfrac{4}{3}; \\dfrac{5}{3}\\right)$",
        "answer": true
      },
      {
        "text": "Nếu $M$ là trung điểm $AB$ thì $MD$ vuông góc với $SC$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng.</strong><br>  Gọi tọa độ $C(m; n; 0) \\in (Oxy)$.<br>  Ta có $\\overrightarrow{AD} = (0; 4; 0)$; $\\overrightarrow{BC} =(m - 3; n; 0)$.<br>  Do $\\overrightarrow{AD} = \\overrightarrow{BC} \\Leftrightarrow m = 3 \\text{ và } n = 4 \\text{ và } 0=0$. Suy ra tọa độ $C(3; 4; 0).$<br>- <strong>Sai.</strong><br>  Tọa độ $\\overrightarrow{SC} = (3; 4; -5)$.<br>- <strong>Đúng.</strong><br>  Trọng tâm $\\triangle SBD$ có tọa độ là $G\\left(1; \\dfrac{4}{3}; \\dfrac{5}{3}\\right)$.<br>- <strong>Sai.</strong><br>  Tọa độ $M \\left(\\dfrac{3}{2}; 0; 0\\right)$. Khi đó $\\overrightarrow{MD} = \\left(-\\dfrac{3}{2}; 0; 5\\right)$.<br>  Mặt khác $\\overrightarrow{SC} = (3; 4; -5)$.<br>  Suy ra $\\overrightarrow{MD} \\cdot \\overrightarrow{SC} = -\\dfrac{3}{2}\\cdot 3 + 0 \\cdot 4 + 5 \\cdot (-5) \\ne 0$.<br>  Vậy $MD$ không vuông góc với $SC$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS19",
    "question": "Trong không gian $Oxyz$, cho hình chóp đều $S.ABCD$ có $SB=5$, $CD=3\\sqrt{2}$ được gắn vào hệ trục sao cho tâm của đáy $ABCD$ trùng với gốc tọa độ $O$ như hình vẽ.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_030.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ đỉnh $S(0;0;4)$",
        "answer": true
      },
      {
        "text": "Trọng tâm tam giác $SCD$ là điểm $G(-1;1;1)$",
        "answer": false
      },
      {
        "text": "Gọi $M$ là trung điểm cạnh $SD$ thì $BM=2\\sqrt{6}$",
        "answer": false
      },
      {
        "text": "Nếu $E(a;0;b)$ thuộc mặt phẳng $(Oxz)$ sao cho $|EG-EA|$ là lớn nhất thì $4a^2-b^2=5$, ($G$ là trọng tâm tam giác $SCD$)",
        "answer": true
      }
    ],
    "explain": "<br>- {\\bf Đúng}.<br>  Ta có $AC=BD=6$.<br>  Xét tam giác vuông $SOB$ ta có $SO=\\sqrt{SB^2-OB^2}=\\sqrt{5^2-3^2}=4$.<br>   Vậy đỉnh $S(0;0;4)$.<br>- {\\bf Sai}.<br>  Ta có $S(0;0;4)$, $C(0;3;0)$ và $D(-3;0;0)$.<br>  Trọng tâm tam giác $SCD$ là điểm $G\\left(-1;1;\\dfrac{4}{3}\\right)$.<br>- {\\bf Sai}.<br>  Ta có $B(3;0;0)$.<br>  Vì $M$ là trung điểm cạnh $SD$ suy ra $M\\left(-\\dfrac{3}{2};0;2\\right)$.<br>  Vậy $BM=\\sqrt{\\left(-\\dfrac{3}{2}-3\\right)^2+(0-0)^2+(2-0)^2}=\\dfrac{\\sqrt{97}}{2}$.<br>- {\\bf Đúng}.<br>  Ta có $C$ đối xứng với $A$ qua $(Oxz)$ nên $EA=EC$.<br>  Ta có $|EG-EA|=|EG-EC|$.<br>  Do $E$ và $C$ nằm cùng phía với $(Oxz)$ nên $|EG-EA|=|EG-EC|\\le CG$.<br>  Dấu $\"=\"$ xảy ra khi $E=CG\\cap(Oxz)$.<br>  Mà $G$ là trọng tâm tam giác $SCD$ nên $E$ là trung điểm $SD\\Rightarrow E\\left(-\\dfrac{3}{2};0;2\\right)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS20",
    "question": "Cho hình chóp tứ giác đều $S. ABCD$ có $O$ là tâm của đáy $ABCD$, cạnh đáy bằng $a$, cạnh bên bằng $2a$ (<em>tham khảo hình bên dưới</em>).  <br><img src=\"data/12/2D2/im2H2/2H22_tikz_033.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Cosin góc giữa hai vectơ $\\overrightarrow{BA}$ và $\\overrightarrow{CS}$ bằng $\\dfrac{1}{4}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=\\overrightarrow{0}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{SA}=\\overrightarrow{SC}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AO}\\cdot\\overrightarrow{SD}=\\dfrac{a^2}{2}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_034.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- $\\cos\\left(\\overrightarrow{BA},\\overrightarrow{CS}\\right)=\\cos\\left(\\overrightarrow{CD},\\overrightarrow{CS}\\right)=\\cos \\widehat{SCD}=\\dfrac{CD^2+CS^2-DS^2}{2CD.CS}=\\dfrac{a^2}{2a.2a^2}=\\dfrac{1}{4}$.<br>- $\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=\\left(\\overrightarrow{OA}+\\overrightarrow{{OC}}\\right)+\\left(\\overrightarrow{OB}+\\overrightarrow{OD}\\right)=\\overrightarrow{0}$ (do $O$ là trung điểm $AC$, $BD$).<br>- Hai vectơ $\\overrightarrow{SA}$ và $\\overrightarrow{SC}$ cùng độ dài nhưng khác hướng, do đó $\\overrightarrow{SA}\\neq \\overrightarrow{SC}$.<br>- Ta có<br>  $\\overrightarrow{AO}\\cdot \\overrightarrow{SD}=\\overrightarrow{AO}\\cdot\\left(\\overrightarrow{OD}-\\overrightarrow{OS}\\right)=\\overrightarrow{AO}\\cdot\\overrightarrow{OD}-\\overrightarrow{AO}\\cdot \\overrightarrow{OS}=0$ (do $S.ABCD$ là chóp đều).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS21",
    "question": "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD\\cdot A'B'C'D'$ có đỉnh $A$ trùng với gốc toạ độ $O$, các vectơ $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA'}$ theo thứ tự cùng hướng với các vectơ $\\overrightarrow{i}$, $\\overrightarrow{j}$, $\\overrightarrow{k}$ và $AB=4$, $AD=3$, $\\left(\\overrightarrow{AC},\\overrightarrow{AC'} \\right)=\\ 30^{\\circ}$",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=4\\overrightarrow{i}+0\\overrightarrow{j}+0\\overrightarrow{k}$",
        "answer": true
      },
      {
        "text": "$C'(4;3;5\\sqrt{3})$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AC}=3\\overrightarrow{i}+4\\overrightarrow{j}+0\\overrightarrow{k}$",
        "answer": true
      },
      {
        "text": "Gọi $x,y,z$ theo thứ tự là số đo các góc hợp bởi vectơ $\\overrightarrow{AC'}$ với các vectơ $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA'}$. Khi đó $\\cos^2 x+\\cos^2 y+\\cos^2 z=1$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2D2/im2H2/2H22_tikz_035.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   <br>- Ta có $B(4;0;0)\\Rightarrow \\overrightarrow{AB}=4.\\overrightarrow{i}+0.\\overrightarrow{j}+0.\\overrightarrow{k}$.<br>- Trong tam giác vuông $ACC'$ có: $\\tan \\widehat{CAC'}=\\dfrac{CC'}{AC} \\Rightarrow CC'=AC.\\tan30^\\circ=\\dfrac{5}{\\sqrt{3}}$.<br>  Khi đó $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=4.\\overrightarrow{i}+3\\overrightarrow{j}+CC'.\\overrightarrow{k}\\Rightarrow C'\\left(4;3;\\dfrac{5}{\\sqrt{3}}\\right)$.<br>- $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}=4\\overrightarrow{i}+3\\overrightarrow{j}+0\\overrightarrow{k}$.<br>- Trong các tam giác vuông $ABC'$, $ADC'$, $AA'C'$ ta lần lượt có<br>  $\\cos x = \\dfrac{AB}{AC'}=\\dfrac{4}{\\dfrac{10\\sqrt{3}}{3}}=\\dfrac{2\\sqrt{3}}{5} \\text{ và } \\cos y = \\dfrac{AD}{AC'}=\\dfrac{3}{\\dfrac{10\\sqrt{3}}{3}}=\\dfrac{3\\sqrt{3}}{10} \\text{ và } \\cos z = \\dfrac{AA'}{AC'}=\\dfrac{\\dfrac{5}{\\sqrt{3}}}{\\dfrac{10\\sqrt{3}}{3}}=\\dfrac{1}{2}   \\Rightarrow \\cos^2x= \\dfrac{12}{25} \\text{ và } \\cos^2y=\\dfrac{27}{100} \\text{ và } \\cos^2z=\\dfrac{1}{4} \\Rightarrow \\cos^2x + \\cos^2y + \\cos^2z = 1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS22",
    "question": "Trong không gian với hệ trục $Oxyz$ cho hình lăng trụ $OAB.O'A'B'$ Biết $O(0;0;0)$, $A(2;0;0)$, $B(0;1;0)$, $O'(0;0;3)$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_039.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Đường thẳng $AO'$ có một vectơ chỉ phương là $\\overrightarrow{a}=(2;0;-3)$",
        "answer": true
      },
      {
        "text": "Góc gữa hai đường thẳng $O'A'$ và $AB$ bằng $56^\\circ28'$ (làm tròn kết quả đến hàng phút)",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(ABO')$ có một vectơ pháp tuyến là $\\overrightarrow{n}=(3;6;2)$",
        "answer": true
      },
      {
        "text": "Trong tất các mặt cầu tiếp xúc với hai đường thẳng $AB$ và $OO'$ thì mặt cầu có bán kính $R=\\dfrac{\\sqrt{5}}{5}$ là mặt cầu có bán kính nhỏ nhất trong các mặt cầu nói trên",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\overrightarrow{AO'}=(2;0;-3)$.<br>- Ta có $\\left|\\overrightarrow{AB}\\right|=\\sqrt{5}$, $\\left|\\overrightarrow{O'A'}\\right|=2$. <br>  Khi đó $\\cos\\alpha=\\dfrac{\\left|\\overrightarrow{O'A'}\\cdot\\overrightarrow{AB}\\right|}{\\left|\\overrightarrow{O'A'}\\right|\\cdot\\left|\\overrightarrow{AB}\\right|}=\\dfrac{2\\sqrt{5}}{5}$. <br>  Suy ra $\\alpha\\approx 26{,}565\\approx 26^\\circ33'$.<br>- Ta có $\\overrightarrow{AO'}=(-2;0;3)$, $\\overrightarrow{AB}=(-2;1;0)$. <br>  Gọi $\\overrightarrow{n}$ là $1$ vectơ pháp tuyến của mặt phẳng cần tìm.<br>  Vì $\\overrightarrow{n}\\perp \\overrightarrow{AO'} \\text{ và } \\overrightarrow{n}\\perp \\overrightarrow{AB}\\Rightarrow \\overrightarrow{n}=\\left[\\overrightarrow{AO'},\\overrightarrow{AB}\\right]=(3;6;2)$.<br>- Mặt cầu có bán kính nhỏ nhất tiếp xúc với hai đường thẳng có tâm là trung điểm đoạn vuông góc chung. <br>  Có $\\overrightarrow{OO'}=(0;0;3)$, $\\overrightarrow{AB}=(-2;1;0)$ <br>  Suy ra Phương trình của hai đường thẳng là  \\[OO'\\colonx=0 \\text{ và } y=0 \\text{ và } z=3t;\\quad AB\\colonx=2-2t' \\text{ và } y=t' \\text{ và } z=0.\\]  Gọi $M\\in OO'$; $M(0;0;3t)$, $N\\in AB$; $N(2-2t';t';0)$ sao cho $MN$ là đoạn vuông góc chung giữa $OO'$ và $AB$. <br>  Khi đó $\\overrightarrow{MN}=(2-2t';t';-3t)$. <br>  Do $MN$ là đoạn vuông góc chung \\[\\Leftrightarrow \\overrightarrow{MN}\\cdot\\overrightarrow{OO'}=0 \\text{ và } \\overrightarrow{MN}\\cdot\\overrightarrow{AB}=0 \\Leftrightarrow -9t=0 \\text{ và } -2(2-2t')+t'=0 \\Leftrightarrow t=0 \\text{ và } t'=\\dfrac{4}{5} \\Rightarrow M=(0;0;0) \\text{ và } N=\\left(\\dfrac{2}{5};\\dfrac{4}{5};0\\right).\\]  Suy ra bán kính nhỏ nhất mặt cầu thỏa mãn là   \\[\\dfrac{\\left|\\overrightarrow{MN}\\right|}{2}=\\dfrac{\\sqrt{\\left(\\dfrac{2}{5}\\right)^2+\\left(\\dfrac{4}{5}\\right)^2}}{2}=\\dfrac{\\sqrt{5}}{5}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS23",
    "question": "Trong không gian $Oxyz$ cho $\\overrightarrow{a}=(2 ; 1 ;-2)$ và $\\overrightarrow{b}=(0 ; 3 ; 0)$. Các mệnh đề dưới đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "Độ dài véc tơ $\\overrightarrow{a}$ bằng 3",
        "answer": true
      },
      {
        "text": "Tích vô hướng của véc tơ $\\overrightarrow{a} ; \\vec{b}$ là $\\overrightarrow{a} \\cdot \\overrightarrow{b}=5$",
        "answer": false
      },
      {
        "text": "Tích có hướng của vec tơ $\\overrightarrow{a} ; \\overrightarrow{b}$ là $\\left[\\overrightarrow{a} ; \\overrightarrow{b}\\right]=(6 ; 0 ;-4)$",
        "answer": false
      },
      {
        "text": "Véc tơ $\\overrightarrow{c}=(3 ; 2 ;-2)$ vuông góc với $\\overrightarrow{a}=(2 ; 1 ;-2)$",
        "answer": false
      }
    ],
    "explain": "<br>- $|\\overrightarrow{a}|=\\sqrt{2^2+1^2+2^2}=3$.<br>- $\\overrightarrow{a} \\cdot \\overrightarrow{b}=2\\cdot0 + 1\\cdot 3 -2\\cdot 0=3$.<br>- $\\left[\\overrightarrow{a} ; \\overrightarrow{b}\\right]=(1\\cdot0 +2\\cdot3; -2\\cdot0-2\\cdot0 ;2\\cdot3-0\\cdot1)=(6;0;6)$.<br>- Ta có $\\overrightarrow{a} \\cdot \\overrightarrow{c}=6+2+4=12 \\ne 0$ nên véc tơ $\\overrightarrow{c}$ không vuông góc với $\\overrightarrow{a}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS24",
    "question": "Một chiếc trực thăng $H$ cất cánh từ một sân bay. Xét hệ trục tọa độ $O x y z$ có gốc tọa độ $O$ là chân tháp điều khiển sân bay; trục $O x$ là hướng đông, trục $O y$ là hướng bắc và trục $O z$ là trục thẳng đứng, đơn vị trên mỗi trục là kilômét. Trực thăng cất cánh từ điểm $G$ trên mặt đất. Vị trí của trực thăng tại thời điểm $t$ phút sau khi cất cánh $(t \\geq 0)$ có tọa độ là $M\\left(1+t ; \\dfrac{1}{2}+2 t ; 2 t\\right)$. Một hòn đảo ở vị trí $D(150 ; 115 ; 0)$",
    "subQuestions": [
      {
        "text": "Toạ độ điểm $G$ là $\\left(1 ; \\dfrac{1}{2}; 0\\right)$",
        "answer": true
      },
      {
        "text": "Toạ độ của véctơ $\\overrightarrow{M D}$ là $\\left(149-t ; \\dfrac{129}{2}-2 t ;-2 t\\right)$",
        "answer": false
      },
      {
        "text": "Khoảng cách của trực thăng so với vị trí xuất phát sau 5 phút bay là 15 km",
        "answer": true
      },
      {
        "text": "Trực thăng $H$ bay đến vị trí $M_0(x_0 ; y_0 ; z_0)$ thì khoảng cách từ trực thăng đến $D$ là nhỏ nhất. Khi đó $20(x_0+y_0+z_0)=4320$",
        "answer": false
      }
    ],
    "explain": "<br>- Từ giả thiết vị trí của trực thăng tại thời điểm $t$ phút sau khi cất cánh $(t \\geq 0)$ có tọa độ là $M\\left(1+t ; \\dfrac{1}{2}+2 t ; 2 t\\right)$ ta cho $t=0$ được tọa độ điểm $G\\left(1;\\dfrac{1}{2};0\\right)$.<br>- $\\overrightarrow{M D}$ là $\\left(149-t ; \\dfrac{229}{2}-2 t ;-2 t\\right)$.<br>- Sau thời gian $5$ phút thì trực thăng ở vị trí điểm $K\\left(6;\\dfrac{21}{2};10\\right)$.<br>  Vậy khoảng cách của trực thăng so với vị trí xuất phát là $GK=\\sqrt{5^2+10^2+10^2}=15$ (km).<br>- Ta có $MD=\\sqrt{(149-t)^2 + \\left(\\dfrac{229}{2}-2t\\right)^2+4t^2}=\\sqrt{9(t-42)^2+\\dfrac{77741}{4}} \\geq \\dfrac{17\\sqrt{269}}{2}$.<br>  Dấu đẳng thức xảy ra khi $t=42$. Do đó khoảng cách từ trực thăng đến $D$ nhỏ nhất khi $t=42$ hay trực thăng ở vị trí $M_0\\left(43;\\dfrac{169}{2};84\\right)$.<br>  Suy ra $x_0=43 \\text{ và } y_0=\\dfrac{169}{2} \\text{ và } z_0=84. \\Rightarrow 20(x_0+y_0+z_0)=4230$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS25",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ biết $A(2;1;1)$, $B(1;2;1)$, $C(2;-1;3)$.",
    "subQuestions": [
      {
        "text": "Độ dài cạnh $AB$ bằng $\\sqrt{2}$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $M$ sao cho $\\vec{AB}+\\vec{AM}=\\vec{0}$ là $(3;0;1)$",
        "answer": true
      },
      {
        "text": "Tọa độ trọng tâm của tam giác $ABC$ là $(5;2;0)$",
        "answer": false
      },
      {
        "text": "$\\widehat{BAC}=45^{\\circ}$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $AB=\\sqrt{(1-2)^2+(2-1)^2+(1-1)^2}=\\sqrt{2}$.<br>- Do $\\vec{AB}+\\vec{AM}=\\vec{0}$ nên $A$ là trung điểm của $BM$.<br>  Suy ra $x_M=2x_A-x_B=3 \\text{ và } y_M=2y_A-y_B=0 \\text{ và } z_M=2z_A-z_B=1\\Rightarrow M(3;0;1)$.<br>- Gọi $G$ là trọng tâm của tam giác $ABC$, ta có $x_G=\\dfrac{x_A+x_B+x_C}{3}=\\dfrac{5}{3} \\text{ và } y_G=\\dfrac{y_A+y_B+y_C}{3}=\\dfrac{2}{3} \\text{ và } z_G=\\dfrac{z_A+z_B+z_C}{3}=\\dfrac{5}{3}\\Rightarrow G\\left(\\dfrac{5}{3};\\dfrac{2}{3};\\dfrac{5}{3}\\right)$.<br>- Ta có $\\vec{AB}=(-1;1;0)$, $\\vec{AC}=(0;-2;2)$, suy ra  \\[\\cos\\widehat{BAC}=\\cos\\left(\\vec{AB},\\vec{AC}\\right)=\\dfrac{\\vec{AB}\\cdot\\vec{AC}}{\\left|\\vec{AB}\\right|\\cdot\\left|\\vec{AC}\\right|}=\\dfrac{-2}{\\sqrt{2}\\cdot\\sqrt{8}}=-\\dfrac{1}{2}.\\]  Vậy $\\widehat{BAC}=120^\\circ$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS26",
    "question": "Trong không gian $Oxyz$, cho $\\triangle ABC$, biết $A(3;1;-3)$, $B(4; 2;0)$, $C(-1;0;3)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{OA}=3\\overrightarrow{i}+\\overrightarrow{j}+3\\overrightarrow{k}$",
        "answer": false
      },
      {
        "text": "$G(2;1;0)$ là trọng tâm tam giác $ABC$",
        "answer": true
      },
      {
        "text": "Hình chiếu của $C$ lên $Ox$ là $C'(-1; 0; 0)$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa $2$ điểm $A$ và $B$ bằng $\\sqrt{8}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{OA}=3\\overrightarrow{i}+\\overrightarrow{j}-3\\overrightarrow{k}$.<br>- <strong>Đúng</strong>.<br> Tam giác $ABC$ có tọa độ trọng tâm $G=\\left( \\dfrac{3+4-1}{3};\\dfrac{1+2+0}{3};\\dfrac{-3+0+3}{3}\\right) =(2;1;0)$.<br>- <strong>Đúng</strong>. Hình chiếu của $C$ lên $Ox$ là $C'(-1;0;0)$.<br>- <strong>Sai</strong>. Ta có $AB=\\sqrt{(4-3)^2+(2-1)^2+(0+3)^2}=\\sqrt{11}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS27",
    "question": "Trong không gian $Oxyz$, vị trí của điểm $M$ như hình vẽ. Gọi $H$ là hình chiếu vuông góc của $M$ xuống mặt phẳng $(Oxy)$. Cho biết $AH=12$, $(\\vec{i},\\overrightarrow{OH})=30^{\\circ}$, $(\\overrightarrow{OH}, \\overrightarrow{OM})=60^{\\circ}$.<br><img src=\"data/12/2D2/im2H2/2H22_tikz_045.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ của điểm $A$ là $(12\\sqrt{3};0;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $B$ là $(12;0;0)$",
        "answer": false
      },
      {
        "text": "$OC=OM\\cdot \\sin \\widehat{HOM}$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $M$ là $(12\\sqrt{3};12;48\\sqrt{3})$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $OA=AH\\cdot \\cot 30^\\circ=12\\sqrt{3}$ nên $A=(12\\sqrt{3};0;0)$.<br>- <strong>Sai</strong>. Ta có $OB=AH=12$ nên $A=(0;12;0)$.<br>- <strong>Đúng</strong>. Ta có $OC=OM\\cdot \\cos \\widehat{MOC}= OM\\cdot \\sin \\widehat{HOM}$.<br>- <strong>Sai</strong>. Ta có $OH=\\sqrt{OA^2+AH^2}=\\sqrt{(12\\sqrt{3})^2+12^2}=24$.<br>  $HM=OH\\cdot \\tan 60^\\circ=24\\sqrt{3}$.  Suy ra $M(12\\sqrt{3};12;24\\sqrt{3})$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS28",
    "question": "Trong hệ trục $Oxyz$, cho 3 điểm $A(1;0;0)$, $B(0;0;1)$, $C(2;1;1)$. Xét tính đúng sai của các mệnh đề",
    "subQuestions": [
      {
        "text": "Diện tích của tam giác $ABC$ bằng $\\dfrac{\\sqrt{6}}{2}$ (đvdt)",
        "answer": true
      },
      {
        "text": "Gọi $D(x ; y ; z)$ sao cho tứ giác $A B C D$ là một hình bình hành khi đó $x+y+z=3$",
        "answer": false
      },
      {
        "text": "Độ dài đường cao của tam giác $ABC$ hạ từ $A$ bằng $AH=\\dfrac{\\sqrt{30}}{5}$ (đơn vị dài)",
        "answer": true
      },
      {
        "text": "Thể tích của khối chóp $S.ABCD$ với đỉnh $S(0;3;4)$ bằng $2$ (đvtt)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AB}=(-1;0;1) \\text{ và } \\overrightarrow{AC}=(1;1;1)\\Rightarrow\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]=(-1;2;-1)\\Rightarrow\\left|\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]\\right|=\\sqrt{6}$.<br>  $S_{ABC}=\\dfrac{1}{2}\\cdot\\left|\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]\\right|=\\dfrac{\\sqrt{6}}{2}$.<br>- <strong>Sai</strong>. Do $ABCD$ là hình bình hành nên<br>  $\\overrightarrow{AB}=\\overrightarrow{CD}\\Rightarrow x=1+2-0=3 \\text{ và } y=0+1-0=1 \\text{ và } z=0+1-1=0\\Rightarrow x+y+z=4$.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{BC}=(2;1;0)\\Rightarrow BC=\\sqrt{5}$.<br>  Ta có $AH=\\dfrac{2S_{ABC}}{BC}=\\dfrac{\\sqrt{30}}{5}$.<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{n}=\\left[ \\overrightarrow{AB},\\overrightarrow{AC}\\right]=(-1;2;-1)$ là vectơ pháp tuyến của $(ABCD)$.<br>  Nên $(ABCD)\\colon x-2y+z-1=0$, $\\mathrm{d}\\left(S,(ABCD)\\right)=\\dfrac{3}{\\sqrt{6}}=\\dfrac{\\sqrt{6}}{2}$.<br>  $V_{S.ABCD}=\\dfrac{1}{3}\\cdot\\mathrm{d}\\left(S,(ABCD)\\right)\\cdot2\\cdot S_{ABC}=\\dfrac{1}{3}\\cdot\\dfrac{\\sqrt{6}}{2}\\cdot2\\cdot\\dfrac{\\sqrt{6}}{2}=1$ (đvtt).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS29",
    "question": "Trong không gian $Oxyz$, cho vectơ $\\overrightarrow{OA} = (2;1;3)$ và điểm $B(3;4;5)$.",
    "subQuestions": [
      {
        "text": "Cho $N \\in (Oxy)$ để $\\triangle ABN$ cân tại $N$ và tam giác $OAN$ vuông tại $O$. Tổng hoành độ và tung độ điểm $N$ thỏa mãn yêu cầu bằng $\\dfrac{18}{5}$",
        "answer": true
      },
      {
        "text": "Tọa độ của điểm $A$ là $(2;1;3)$",
        "answer": true
      },
      {
        "text": "Nếu $A$, $B$, $M(x;y;1)$ thẳng hàng thì tổng $x + y = -1$",
        "answer": true
      },
      {
        "text": "Gọi $C(a;b;c)$ thỏa mãn $\\triangle ABC$ nhận $G(1;1;1)$ làm trọng tâm. Khi đó $a + b + c = -9$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{OA} = (2;1;3) \\Rightarrow A(2;1;3)$.<br>  Vì $N \\in (Oxy)$ nên $N(x;y;0) \\Rightarrow \\overrightarrow{AN} = (x-2;y-1;-3)$, $\\overrightarrow{BN} = (x-3;y-4;-5)$.<br>  Để $\\triangle ABN$ cân tại $N$ thì  $ AN = BN \\Leftrightarrow AN^2 = BN^2 \\Leftrightarrow (x-2)^2 + (y-1)^2 + 9 = (x-3)^2 + (y-4)^2 + 25. \\qquad (1) $  Hơn nữa, ta có $\\overrightarrow{ON} = (x;y;0)$.<br>  Để $\\triangle OAN$ vuông tại $O$ thì  $ \\overrightarrow{OA}\\cdot \\overrightarrow{ON} = 0 \\Leftrightarrow 2\\cdot x + 1\\cdot y + 3\\cdot 0 = 0 \\Leftrightarrow y = -2x. $  Thay $y = -2x$ vào $(1)$, ta được  $(x-2)^2 + (y-1)^2 + 9 = (x-3)^2 + (y-4)^2 + 25$<br>$\\Leftrightarrow (x-2)^2 + (-2x-1)^2 + 9 = (x-3)^2 + (-2x-4)^2 + 25$<br>$\\Leftrightarrow x^2 - 4x + 4 + 4x^2 + 4x + 1 + 9 = x^2 - 6x + 9 + 4x^2 + 16x + 16 + 25$<br>$\\Leftrightarrow -10x = 36$<br>$\\Leftrightarrow x = -\\dfrac{18}{5}.$  Suy ra $y = -2x = -2\\cdot \\left(-\\dfrac{18}{5}\\right) = \\dfrac{36}{5} \\Rightarrow N\\left(-\\dfrac{18}{5};\\dfrac{36}{5};0\\right)$.<br>  Do đó, tổng hoành độ và tung độ điểm $N$ thỏa mãn yêu cầu bằng   $x + y = -\\dfrac{18}{5} + \\dfrac{36}{5} = \\dfrac{18}{5}.$<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{OA} = (2;1;3) \\Rightarrow A(2;1;3)$.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AB} = (1;3;2)$, $\\overrightarrow{AM} = (x-2;y-1;-2)$.<br>  Nếu $A$, $B$, $M$ thẳng hàng thì $\\overrightarrow{AB}$ và $\\overrightarrow{AM}$ cùng phương hay  $ \\dfrac{x-2}{1} = \\dfrac{y-1}{3} = \\dfrac{-2}{2} \\Leftrightarrow \\dfrac{x-2}{1} = \\dfrac{-2}{2} \\text{ và } \\dfrac{y-1}{3} = \\dfrac{-2}{2} \\Leftrightarrow x = 1 \\text{ và } y = -2 \\Rightarrow x + y = 1 + (-2) = -1. $<br>- <strong>Đúng</strong>. Để $\\triangle ABC$ nhận $G(1;1;1)$ làm trọng tâm thì  $ 1 = \\dfrac{2 + 3 + a}{3} \\text{ và } 1 = \\dfrac{1 + 4 + b}{3} \\text{ và } 1 = \\dfrac{3 + 5 + c}{3} \\Leftrightarrow a = -2 \\text{ và } b = -2 \\text{ và } c = -5 \\Rightarrow a + b + c = (-2) + (-2) + (-5) = -9. $",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS30",
    "question": "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có đỉnh $A$ trùng với gốc tọa độ $O$ và các đỉnh $B$; $C$; $D'$ có tọa độ lần lượt là $(3;0;0)$, $(3;4;0)$, $(0;4;5)$. Khi đó<br><img src=\"data/12/2D2/im2H2/2H22_tikz_054.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}\\cdot \\overrightarrow{AC}=0$",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $D$ là $(0;4;0)$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AB'}$",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $C'$ là $(3;4;5)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>   Ta thấy $\\overrightarrow{AB}=(3;0;0)$, $\\overrightarrow{AC}=(3;4;0)$ nên $\\overrightarrow{AB}\\cdot \\overrightarrow{AC}=9\\neq 0$.<br>- <strong>Đúng</strong>.<br>   Vì $D$ là hình chiếu vuông góc của $D'$ lên $Ay$ nên $D(0;4;0)$.<br>- <strong>Sai</strong>.<br>   Vì $A'$ là hình chiếu vuông góc của $D'$ lên $Az$ nên $A'(0;0;5)$.<br>  Vì $\\overrightarrow{AB'}=\\overrightarrow{AB}+\\overrightarrow{AA'}=(3;0;5)$ nên $B'(3;0;5)$.<br>  Do đó $\\overrightarrow{AD}+\\overrightarrow{AA'}=(0;4;5)\\neq \\overrightarrow{AB'}=(3;0;5)$.<br>- <strong>Đúng</strong>.<br>   Theo quy tắc hình hộp, ta có $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=(3;4;5)$ nên $C'(3;4;5)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS31",
    "question": "Trong không gian $Oxyz$, cho các điểm $A(3;1;1)$, $B(1;1;-1)$ và $C(2;-2;-3)$.",
    "subQuestions": [
      {
        "text": "Tọa độ trung điểm $I$ của đọan thẳng $AB$ là $(2;1;0)$",
        "answer": true
      },
      {
        "text": "Hình chiếu vuông góc của điểm $B$ lên mặt phẳng $(Oxz)$ có tọa độ là $(0;1;0)$",
        "answer": false
      },
      {
        "text": "Toạ độ trọng tâm của tam giác $ABC$ là $(2;0;-1)$",
        "answer": true
      },
      {
        "text": "Độ dài đoạn $BC$ là $14$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là $I\\left(\\dfrac{3+1}{2};\\dfrac{1+1}{2};\\dfrac{1+(-1)}{2}\\right)$ hay $I(2;1;0)$.<br>- <strong>Sai</strong>.<br>  Điểm $B$ chiếu xuống mặt phẳng $(Oxz)$ nên ta sẽ giữ nguyên hoành độ và cao độ, còn tung độ bằng $0$, do đó ta có điểm $(1;0;-1)$.<br>- <strong>Đúng</strong>.<br>  Trọng tâm của tam giác $ABC$ có tọa độ là $G\\left(\\dfrac{3+1+2}{3};\\dfrac{1+1+(-2)}{3};\\dfrac{1+(-1)+(-3)}{3}\\right)$ hay $G(2;0;-1)$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{BC}=(1;-3;-2)$ nên $BC=\\left|\\overrightarrow{BC}\\right|=\\sqrt{1+9+4}=\\sqrt{14}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS32",
    "question": "Trong không gian $Oxyz$, cho các vectơ  $\\overrightarrow{a}=(-2;3;1),\\, \\overrightarrow{b}=(1;-1;2),\\, \\overrightarrow{c}=(-7;9;-4).$",
    "subQuestions": [
      {
        "text": "$2\\overrightarrow{a}=(-4;6;2)$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{a}+2\\overrightarrow{b}=(0;1;3)$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{c}=2\\overrightarrow{a}-3\\overrightarrow{b}$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{a}\\cdot \\overrightarrow{b}=-7$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  $2\\overrightarrow{a}=(-2\\cdot 2;3\\cdot 2;1\\cdot 2)=(-4;6;2)$.<br>- <strong>Sai</strong>.<br>  $\\overrightarrow{a}=(-2;3;1)$.<br>  $2\\overrightarrow{b}=(2;-2;4)$.<br>  $\\overrightarrow{a}+2\\overrightarrow{b}=(0;1;5)$.<br>- <strong>Đúng</strong>.<br>  $2\\overrightarrow{a}=(-4;6;2)$.<br>  $-3\\overrightarrow{b}=(-3;3;-6)$.<br>  $2\\overrightarrow{a}-3\\overrightarrow{b}=(-7;9;-4)=\\overrightarrow{c}$.<br>- <strong>Sai</strong>.<br>  $\\overrightarrow{a}\\cdot \\overrightarrow{b}  =(-2)\\cdot 1+3\\cdot (-1)+1\\cdot 2=-3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS33",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(1;1;2)$; $B(3;1;0)$ và $C(-2;1;5)$.",
    "subQuestions": [
      {
        "text": "Điểm đối xứng của điểm $A$ qua trục hoành là điểm $A'(-1;1;2)$",
        "answer": false
      },
      {
        "text": "Tọa độ của vectơ $\\overrightarrow{OB}=(-3;-1;0)$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AB}=2\\vec{i}-2\\vec{k}$",
        "answer": true
      },
      {
        "text": "Trọng tâm của tam giác $ABC$ là điểm $G\\left(\\dfrac{2}{3};1;\\dfrac{7}{3}\\right)$",
        "answer": true
      }
    ],
    "explain": "<br>- Điểm đối xứng của điểm $A(1;1;2)$ qua trục hoành là điểm $A'(1;-1;-2)$.<br>- Tọa độ của vectơ $\\overrightarrow{OB}=(3;1;0)$.<br>- Ta có $\\overrightarrow{AB}=(2;0;-2)=2\\vec{i}-2\\vec{k}$.<br>- Toa độ trọng tâm $G$ của tam giác $ABC$ là   \\[x_G=\\dfrac{1+3+(-2)}{3}=\\dfrac{2}{3} \\text{ và } y_G=\\dfrac{1+1+1}{3}=1 \\text{ và } z_G=\\dfrac{2+0+5}{3}=\\dfrac{7}{3}\\Rightarrow G\\left(\\dfrac{2}{3};1;\\dfrac{7}{3}\\right).\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS36",
    "question": "Trong không gian $Oxyz$ cho các điểm $A(5 ; 1 ; 3) ; B(4 ; 2 ; 3) ; C(5 ; 0 ; 3)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=(-1 ; 1 ; 0)$; $\\overrightarrow{A C}=(0 ;-1 ; 0)$",
        "answer": true
      },
      {
        "text": "$AB=\\sqrt{3}$; $AC=2$",
        "answer": false
      },
      {
        "text": "Góc $\\widehat{B A C}=45^{\\circ}$",
        "answer": true
      },
      {
        "text": "Diện tích tam giác $ABC$ bằng $\\dfrac{1}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\overrightarrow{AB}=(-1 ; 1 ; 0)$; $\\overrightarrow{A C}=(0 ;-1 ; 0)$.<br>- Ta có $AB=\\sqrt{(-1)^2+1^2+0^2}=\\sqrt{2}$.<br>  $AC=\\sqrt{0^2+(-1)^2+0^2}=1$.<br>- Ta có $\\cos ({BAC})=\\left| \\cos (\\vec{AB};\\vec{AC}) \\right|= \\dfrac{\\left| (-1)\\cdot0+1\\cdot(-1)+0\\cdot0\\right| }{\\sqrt{2}\\cdot1}=\\dfrac{1}{\\sqrt{2}}$<br>  Suy ra $\\widehat{BAC}=45^\\circ$.<br>- Diện tích tam giác $ABC$ là<br>  $S=\\dfrac{1}{2}AB\\cdot AC \\cdot \\sin ({BAC})=\\dfrac{1}{2} \\sqrt{2}\\cdot 1 \\cdot \\sin (45^\\circ)=\\dfrac{1}{2}$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS37",
    "question": "Trong không gian $Oxyz$, cho hình chóp đều $S.ABCD$ có $SB=10$, $CD=6\\sqrt{2}$ được gắn vào hệ trục sao cho tâm của đáy $ABCD$ trùng với gốc tọa độ $O$ như hình vẽ.<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS10_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ đỉnh $S(0;0;6)$",
        "answer": false
      },
      {
        "text": "Trọng tâm tam giác $SCD$ là điểm $G\\left(-2;2;\\dfrac{8}{3}\\right)$",
        "answer": true
      },
      {
        "text": "Gọi $M$ là trung điểm cạnh $SD$ thì $BM=\\sqrt{79}$",
        "answer": false
      },
      {
        "text": "Nếu $E(a;0;b)$ thuộc mặt phẳng $(Oxz)$ sao cho $|EG-EA|$ là lớn nhất thì $4a^2-b^2=5$ ($G$ là trọng tâm tam giác $SCD$)",
        "answer": false
      }
    ],
    "explain": "Ta tính được $BD=CD\\sqrt{2}=12$, suy ra $SO=\\sqrt{SB^2-OB^2}=\\sqrt{10^2-6^2}=8$.<br>  Do hệ trục tọa độ gắn như hình vẽ nên ta có tọa độ các điểm như sau $O(0;0;0)$, $A(0;-6;0)$, $B(6;0;0)$, $C(0;6;0)$, $D(-6;0;0)$ và $S(0;0;8)$.  <br>- <strong>Sai</strong>.<br>  Tọa độ đỉnh $S(0;0;8)$.<br>- <strong>Đúng</strong>.<br>  $G$ là trọng tâm tam giác $SCD$ nên $G\\left(-2;2;\\dfrac{8}{3}\\right)$.<br>- <strong>Sai</strong>.<br>  $M$ là trung điểm cạnh $SD$ nên $M(-3;0;4)$.<br>  Khi đó $\\overrightarrow{BM}=(-9;0;4)$, suy ra $BM=\\left|\\overrightarrow{BM}\\right|=\\sqrt{(-9)^2+4^2}=\\sqrt{97}$.<br>- <strong>Sai</strong>.<br>  Nhận thấy $A$ và $G$ nằm khác phía so với mặt phẳng $(Oxz)$.<br>  Gọi $G'$ là điểm đối xứng với $G$ qua mặt phẳng $(Oxz)$ nên ta có $G'\\left(-2;-2;\\dfrac{8}{3}\\right)$.<br>  Khi đó $|EG-EA|=|EG'-EA|\\leq AG'$.<br>  Dấu “$=$”\\ xảy ra khi $E$ là giao điểm của đường thẳng $AG'$ với mặt phẳng $(Oxz)$.<br>  Ta có $\\overrightarrow{AG'}=\\left(-2;4;\\dfrac{8}{3}\\right)$.<br>  Đường thẳng $AG'$ đi qua $A(0;-6;0)$ và có một vectơ chỉ phương là $\\overrightarrow{u}=\\dfrac{3}{2}\\overrightarrow{AG'}=(-3;6;4)$ nên có phương trình tham số là $x=-3t \\text{ và } y=-6+6t \\text{ và } z=4t.$<br>  Giao điểm của $AG'$ và mặt phẳng $(Oxz)$ thỏa mãn \\[-6+6t=0\\Leftrightarrow t=1\\Rightarrow E(-3;0;4).\\]  Suy ra $a=-3$, $b=4$ nên $4a^2-b^2=4\\cdot (-3)^2-4^2=20$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS38",
    "question": "Trong không gian $Oxyz$, cho hai điểm $B\\left( 0;3;1\\right)$, $C\\left( -3;6;4\\right)$. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Véc-tơ đơn vị của trục $ Oy $ là $ \\overrightarrow{j}=(0;-1;0) $",
        "answer": false
      },
      {
        "text": "$ \\overrightarrow{BC}=\\left(3;-3;-3\\right) $",
        "answer": false
      },
      {
        "text": "Hình chiếu của $ C $ trên $ \\left(Oxy\\right) $ có tọa độ là $ \\left(-3;6;0\\right) $",
        "answer": true
      },
      {
        "text": "Gọi $M$ là điểm nằm trên đoạn $BC$ sao cho $MC=2MB$. Tọa độ của $ M $ là $ \\left( -1;4;2\\right) $",
        "answer": true
      }
    ],
    "explain": "<br>- Véc-tơ đơn vị của trục $ Oy $ là $ \\overrightarrow{j}=(0;1;0) $.<br>- $ \\overrightarrow{BC}=\\left(x_C-x_B;y_C-y_B;z_C-z_B\\right)\\left(-3;3;3\\right) $.<br>- Hình chiếu của $ C $ trên $ \\left(Oxy\\right) $ có tọa độ là $ \\left(-3;6;0\\right) $<br>- Gọi $M(a;b;c)$, khi đó $\\overrightarrow{MC}=-2\\overrightarrow{MB} \\Leftrightarrow -3-a=-2(-a) \\text{ và } 6-b=-2(3-b) \\text{ và } 4-c=-2(1-c) \\Leftrightarrow a=-1 \\text{ và } b=4 \\text{ và } c=2.$<br>  Vậy $M\\left( -1;4;2\\right)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS39",
    "question": "Cho hình hộp chữ nhật $ OACB.O'A'C'B' $ có $ OA=2 $; $ OB=3 $; $ OC=4 $ được đặt trong không gian $ Oxyz $ như hình vẽ. Các khẳng định sau đúng hay sai?<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS6_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $A$ là $(2;0;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $C$ là $(2;3;0)$",
        "answer": true
      },
      {
        "text": "Tọa độ của $C'$ là $(2;3;4)$",
        "answer": true
      },
      {
        "text": "Gọi $ I $ là tâm của hình hộp chữ nhật đã cho. Tọa độ $ I $ là $H(1;2;2)$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $A(2;0;0)$.<br>- Ta có $ C(2;3;0) $.<br>- Ta có $ C'(2;3;4) $.<br>- $ I $ là trung điểm $ OC' $.<br>  $\\overrightarrow{OI}=\\dfrac{1}{2}\\overrightarrow{OC'}=\\dfrac{1}{2}\\left(\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OO'}\\right) =\\dfrac{1}{2}(2\\overrightarrow{i}+3\\overrightarrow{j}+4\\overrightarrow{k}) \\Rightarrow I\\left(1;\\dfrac{3}{2};2\\right)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS40",
    "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh bằng $2$, $SA$ vuông góc với đáy và $SA =1$. Thiết lập hệ toạ độ $ Oxyz $ như hình vẽ bên. Các khẳng định sau đúng hay sai?<br><img src=\"data/12/2D2/im2H22/dlts_12_DLTS6_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $ H $ là $\\left(0;0;1\\right) $",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $ B $ là $ (1;0;0) $",
        "answer": false
      },
      {
        "text": "Tọa độ điểm $ S $ là $ \\left(0;\\sqrt{3};1\\right) $",
        "answer": true
      },
      {
        "text": "Tọa độ véc-tơ $ \\overrightarrow{AC}=\\left(1;\\sqrt{3};0\\right) $",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào hình vẽ ta thấy $ H \\in Oz $, $ OH=AS=1 $ nên $ H(0;0;1) $.<br>- $ B $ thuộc tia đối của tia $ Ox $, $ OB=1 $ nên $ B\\left(-1;0;0\\right) $.<br>- $ S \\in \\left(Oyz\\right) $, hình chiếu của $ S $ lên trục $ Oy, Oz $ lần lượt là $ A, H $ và $ OA=\\sqrt{AB^2-BO^2}=\\sqrt{3} $; $ OH=AS=1 $ nên $ S\\left(0;\\sqrt{3};1\\right) $.<br>- $ A(0;\\sqrt{3};0) $, $ C(1;0;0) \\Rightarrow \\overrightarrow{AC}=\\left(1;\\sqrt{3};0\\right)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS41",
    "question": "Trong hệ trục tọa độ $O x y z$, cho bốn điểm $A(0 ;-2 ; 1)$; $B(1;0;-2)$; $C(3 ; 1 ;-2)$; $D(-2;-2;-1)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Bốn điểm $A$, $B$, $C$, $D$ không đồng phẳng",
        "answer": false
      },
      {
        "text": "Tam giác $A C D$ là tam giác vuông tại $A$",
        "answer": true
      },
      {
        "text": "Góc giữa hai véctơ $\\overrightarrow{A B}$ và $\\overrightarrow{C D}$ là góc tù",
        "answer": true
      },
      {
        "text": "Tam giác $A B D$ là tam giác cân tại $B$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{AB}=(1;2;-3)$, $\\overrightarrow{AC}=(3;3;-3)$, $\\overrightarrow{AD}=(-2;0;-2)$.<br>  Suy ra $\\left[\\overrightarrow{AB},\\overrightarrow{AC}\\right]\\cdot\\overrightarrow{AD}=0$ nên $A$, $B$, $C$, $D$ đồng phẳng.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AC}\\cdot\\overrightarrow{AD}=0 \\text{ và } AC=3\\sqrt{3}\\neq AD=2\\sqrt{2}$ nên tam giác $ACD$ vuông tại $A$.<br>- <strong>Sai</strong>. Ta có $\\overrightarrow{CD}=(-5;-3;1)\\Rightarrow CD=\\sqrt{35}$, $\\overrightarrow{AB}=(1;2;-3)\\Rightarrow AB=\\sqrt{14}$.<br>   Ta có $\\cos\\left(\\overrightarrow{AB},\\overrightarrow{CD}\\right)=\\dfrac{\\overrightarrow{AB}\\cdot \\overrightarrow{CD}}{AB\\cdot CD}=\\dfrac{-\\sqrt{10}}{5}$.<br>  Vậy góc giữa hai véctơ $\\overrightarrow{A B}$ và $\\overrightarrow{CD}$ là góc tù.<br>- <strong>Đúng</strong>. Ta có $\\overrightarrow{AB}=(1;2;-3)\\Rightarrow AB=\\sqrt{14} \\text{ và } \\overrightarrow{BD}=(-3;-2;1)\\Rightarrow BD=\\sqrt{14}$. Vậy $\\triangle{ABD}$ cân tại $B$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS1",
    "question": "Hình vẽ sau mô tả vị trí của máy bay vào thời điểm $9$ giờ $30$ phút. Biết các đơn vị trên hình tính theo đơn vị km.  <br><img src=\"data/12/2H2/im2H22/loc8_TT_THPT_AnDuong__011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phi công để máy bay ở chế độ tự động với vận tốc theo hướng đông là $750$ km/h, độ cao không đổi. Biết rằng gió thỏi theo hướng đông với vận tốc $10$ m/s. Giả sử vận tốc và hướng gió không đổi thì lúc $10$ giờ $30$ phút máy bay ở tọa độ $(150;1\\,086;9)$",
        "answer": true
      },
      {
        "text": "Tọa độ của máy bay vào lúc $9$ giờ $30$ phút là $(300;150;9)$",
        "answer": false
      },
      {
        "text": "Vào thời điểm $9$ giờ $30$ phút máy bay ở độ cao $9$ km",
        "answer": true
      },
      {
        "text": "Sau khi bay đến vị trí lúc $10$ giờ $30$ phút thì máy bay bay ngược lại với vận tốc $800$ km/h với độ cao không đổi, biết lúc đó trời lặng gió thì lúc $11$ giờ máy bay ở tọa độ $(686;150;9)$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $v=10\\,m/s=10\\cdot3,6=36\\,km/h$.<br>  Lại có tọa độ máy bay theo hình vẽ là $(150;300;9)$.<br>  Vì cả máy bay và gió đều cùng hướng Đóng nên vận tốc tổng là $v=750+36=786$ km/h.<br>  Quãng đường máy bay bay từ $9$ giờ $30$ phút đến $10$ giờ $30$ phút là $s=786\\cdot 1=786$ km.<br>  Khi đó máy bay đã di chuyển được thêm được theo hướng Đông là $300+786=1\\,086$ km.<br>  Vậy tọa độ máy bay lúc $10$ giờ $30$ phút là $(150;1\\,086;9)$<br>- <strong>Sai</strong>.<br>  Dựa vào hình mô tả, ta thấy máy bay đang ở tọa độ $(150;300;9)$.<br>- <strong>Đúng</strong>.<br>  Dựa vào hình mô tả, ta thấy máy bay vào lúc $9$ giờ $30$ phút đang ở độ cao $9$ km.<br>- <strong>Sai</strong>.<br>  Quãng đường máy bay quay ngược lại từ $10$ giờ $30$ phút đến $11$ giờ là $s=v\\cdot t=800\\cdot0{,}5=400$ km.<br>  Vì lúc đó trời lặng gió và máy bay ở độ cao không đổi nên vị trí máy bay quay người lại là $1\\,086-400=686$ km.<br>  Vậy tọa độ của máy bay lúc $11$ giờ là $(150;686;9)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS42",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(-3; 2;-1)$, $B(-1;-1;-3)$, $C(-2; 4;-3)$.",
    "subQuestions": [
      {
        "text": "Điểm $I(-1; 1;-2)$ là trung điểm của đoạn thẳng $BC$",
        "answer": false
      },
      {
        "text": "$AB=\\sqrt{17}$ và $AC=\\sqrt{3}$",
        "answer": false
      },
      {
        "text": "Tam giác $ABC$ là một tam giác vuông",
        "answer": true
      },
      {
        "text": "Diện tích tam giác $ABC$ là $S_{ABC}=\\dfrac{3\\sqrt{17}}{4}$",
        "answer": false
      }
    ],
    "explain": "<br>- Trung điểm của đoạn thẳng $BC$ là $I\\left(-\\dfrac{3}{2}; \\dfrac{3}{2};-3\\right)$.<br>- $  \\begin{aligned}  & A B=\\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2+\\left(z_B-z_A\\right)^2}=\\sqrt{2^2+(-3)^2+(-2)^2}=\\sqrt{17} \\\\  & A C=\\sqrt{\\left(x_C-x_A\\right)^2+\\left(y_C-y_A\\right)^2+\\left(z_C-z_A\\right)^2}=\\sqrt{1+2^2+(-2)^2}=3.  \\end{aligned}  $<br>- Ta có: $\\overrightarrow{AB}=(2;-3;-2), \\overrightarrow{AC}=(1; 2;-2)$.<br>  $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}=0\\Rightarrow AB\\perp AC$ nên tam giác $ABC$ là tam giác vuông tại $A$.<br>- Tam giác $ABC$ là tam giác vuông tại $A$ nên   \\[S_{ABC}=\\dfrac{1}{2} \\cdot AB\\cdot AC=\\dfrac{1}{2} \\cdot \\sqrt{17} \\cdot 3=\\dfrac{3\\sqrt{17}}{2}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS3",
    "question": "Trong không gian $Oxyz$, xem mặt đất là mặt phẳng $(Oxy)$; trục $Oz$ hướng lên (đơn vị trên mỗi trục là một kilomet). Tại cùng một thời điểm, một radar phát hiện một máy bay tại $A(0; 0; 10)$ bay theo hướng $\\vec{v}=(-4; 3; 0)$ không đổi và một xe tăng tại $O$ di chuyển theo hướng $\\vec{u}=(3; 4; 0)$ không đổi. Sau $20$ giây radar xác định được vị trí máy bay tại $B(-8; 6; 10)$ và xe tăng tại $E\\left(\\dfrac{3}{20}; \\dfrac{1}{5}; 0\\right)$.",
    "subQuestions": [
      {
        "text": "Nếu máy bay và xe tăng tiếp tục giữ nguyên hướng và vận tốc không đổi thì 10 giây tiếp theo vị trí máy bay và xe tăng lần lượt là $C(-12; 9; 10)$, $F\\left(\\dfrac{9}{40}; \\dfrac{3}{10}; 0\\right)$",
        "answer": true
      },
      {
        "text": "Khoảng cách giữa máy bay và xe tăng sau $20$ giây kể từ lúc radar phát hiện là $15$ km (kết quả làm tròn đến hàng đơn vị)",
        "answer": false
      },
      {
        "text": "Vận tốc trung bình của xe tăng trong 20 giây đầu tiên là $12{,}5$ m/s",
        "answer": true
      },
      {
        "text": "Một lúc sau, radar phát hiện máy bay vẫn giữ nguyên hướng bay ban đầu và cách $A$ một khoảng $27$ km, tốc độ máy bay lúc đó $1\\,800$ km/h, đồng thời xe tăng đang di chuyển theo hướng ban đầu và cách $O$ $1$ kilomet với tốc độ $60$ km/h. Tốc độ thay đổi khoảng cách giữa máy bay và xe tăng lúc này là $1\\,689$ km/h (kết quả làm tròn đến hàng đơn vị)",
        "answer": true
      }
    ],
    "explain": "<br>- Vì máy bay giữ nguyên hướng và tốc độ nên sau $10$ giây máy bay đến vị trí $C$, ta có $\\vec{AB}=2\\vec{BC}$.<br>  Gọi $C(a; b; c) \\Rightarrow \\vec{BC}=(a+8; b-6; c-10)$; $\\vec{AB}=(-8; 6; 0)$. Ta có  $\\vec{AB}=2 \\vec{BC} \\Rightarrow-8=2(a+8) \\text{ và } 6=2(b-6) \\text{ và } 0=2(c-10)\\Leftrightarrow a=-12 \\text{ và } b=9 \\text{ và } c=10\\Rightarrow C(-12; 9; 10).$  Tương tự, xe tăng giữ nguyên hướng và vận tốc nên sau $10$ giây đến vị trí $F$, ta có $\\vec{OE}=2 \\vec{EF}$.<br>  Gọi $F(a;b;c)\\Rightarrow \\vec{EF}=\\left(a-\\dfrac{3}{20}; b-\\dfrac{1}{5}; c\\right)$. Ta có   $\\vec{OE}=2 \\vec{EF} \\Rightarrow\\dfrac{3}{20}=2\\left(a-\\dfrac{3}{20}\\right) \\text{ và } \\dfrac{1}{5}=2\\left(b-\\dfrac{1}{5}\\right) \\text{ và } 0=2c\\Leftrightarrow a=\\dfrac{9}{40} \\text{ và } b=\\dfrac{3}{10} \\text{ và } c=10\\Rightarrow F\\left(\\dfrac{9}{40}; \\dfrac{3}{10}; 0\\right).$<br>- Khoảng cách giữa máy bay và xe tăng là<br> $BE=\\sqrt{\\left(\\dfrac{3}{20}+8\\right)^2+\\left(\\dfrac{1}{5}+6\\right)^2+(-10)^2} \\approx 14$ km.<br>- Quãng đường xe tăng đi được trong $20$ giây đầu tiên là  $OE=\\sqrt{\\left(\\dfrac{3}{20}\\right)^2+\\left(\\dfrac{1}{5}\\right)^2+0^2}=0{,}25 \\text{ km}=250 \\text{ m} \\Rightarrow v_{tb}=12{,}5 \\text{ m/s}.$<br>- Giả sử sau thời gian $t$ máy bay đang ở vị trí $D$ và xe tăng đang ở vị trí $K$.<br>  Vectơ vận tốc của máy bay là $\\vec{v}_1=1\\,800 \\cdot \\dfrac{\\vec{v}}{|\\vec{v}|}=(-1\\,440; 1\\,080; 0)$.<br>  Ta có $\\vec{AD}=t \\cdot \\vec{v}_1 \\Rightarrow D(-1\\,440t; 1\\,080t; 0)$.<br>  Vectơ vận tốc của xe tăng là $\\vec{u}_1=60 \\cdot \\dfrac{\\vec{u}}{|\\vec{u}|}=(36; 48; 0) \\Rightarrow \\vec{OK}=t \\cdot \\vec{u}_1 \\Rightarrow K(36t; 48t; 0)$.<br>  Khoảng cách giữa máy bay và xe tăng là  $DK=\\sqrt{1\\,476^2 t^2+1\\,032^2 t^2+100}=f(t)$  Thời gian máy bay di chuyển $27$ km là $\\dfrac{27}{1\\,800}=0{,}015$ giờ.<br>  Tốc độ thay đổi khoảng cách giữa máy bay và xe tăng lúc này là $f'(0{,}015)=1\\,689$ km/h.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS4",
    "question": "Đối với một vị trí $P$ trong không trung, gọi $M$ là giao điểm của tia $OP$ với bề mặt Trái Đất. Khi đó vĩ độ, kinh độ của $M$ cũng tương ứng được gọi là vĩ độ, kinh độ của $P$; độ dài $PM$ được gọi là cao độ (so với mặt đất) của $P$. Tại một thời điểm, $P$ là một vệ tinh ở vị trí có độ cao $19\\,113$ km so với mặt đất và có vĩ độ, kinh độ tương ứng là $30^\\circ$N, $60^\\circ$W. Trong không gian $Oxyz$ với gốc $O$ là tâm Trái Đất, đơn vị độ dài bằng bán kính Trái Đất $R=6371$ km. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Điểm $M$ có tọa độ là $\\left(\\dfrac{\\sqrt{3}}{4};\\dfrac{-3}{4};\\dfrac{1}{2}\\right)$",
        "answer": true
      },
      {
        "text": "Điểm $P$ có tọa độ là $(\\sqrt{3};-3;2)$",
        "answer": true
      },
      {
        "text": "Cho điểm $N$ trên mặt đất cách điểm $M$ trên mặt đất một khoảng $3\\,335{,}8478$ km. Khi đó $\\widehat{MON}\\approx 30^\\circ$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ vệ tinh đến điểm $N$ xấp xỉ $26\\,268{,}3$ km (làm tròn đến hàng phần chục của km)",
        "answer": false
      }
    ],
    "explain": "<br>- Vĩ độ $30^\\circ$N, kinh độ $60^\\circ$W nên $M=\\left(\\cos30^\\circ\\cos60^\\circ;-\\cos30^\\circ\\sin60^\\circ;\\sin30^\\circ\\right)=\\left(\\dfrac{\\sqrt{3}}{4};\\dfrac{-3}{4};\\dfrac{1}{2}\\right)$ (dấu trừ ở tọa độ thứ hai do kinh độ là kinh Tây). Suy ra mệnh đề đúng.<br>- Vì $1$ đơn vị dài trong không gian $Oxyz$ ứng với $6\\,371$ km nên độ cao $19\\,113$ km ứng với $19\\,113:6\\,371=3$ đơn vị dài, tức $OP=3+1=4$ (đơn vị, do $OM=1$). Do $P$, $M$, $O$ thẳng hàng nên $\\overrightarrow{OP}=4\\overrightarrow{OM}=(\\sqrt{3};-3;2)$, suy ra $P(\\sqrt{3};-3;2)$. Suy ra mệnh đề đúng.<br>- Cung nhỏ $MN$ dài $3\\,335{,}8478$ km ứng với góc ở tâm $\\widehat{MON}=\\dfrac{3\\,335{,}8478\\times 180^\\circ}{6\\,371\\pi}\\approx 30^\\circ$. Suy ra mệnh đề đúng.<br>- Ta có $ON=OM=1$ (đơn vị) và $OP=4$ (đơn vị), $\\widehat{MON}=\\widehat{PON}\\approx 30^\\circ$. Áp dụng định lí côsin: $PN=\\sqrt{ON^2+OP^2-2\\cdot ON\\cdot OP\\cdot\\cos30^\\circ}=\\sqrt{1+16-8\\cos30^\\circ}\\approx 3{,}1736$ (đơn vị), tức $PN\\approx 3{,}1736\\times 6\\,371\\approx 20\\,219{,}0$ km, không phải $26\\,268{,}3$ km. Suy ra mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS5",
    "question": "Tại một thời điểm, một vệ tinh $P$ ở vị trí có độ cao $25\\,484$ km so với mặt đất và có vĩ độ, kinh độ tương ứng là $60^\\circ$S, $30^\\circ$W. Cùng thời điểm, vệ tinh thứ hai $Q$ ở vị trí có độ cao $12\\,742$ km so với mặt đất và có vĩ độ, kinh độ tương ứng là $60^\\circ$N, $30^\\circ$E. Trong không gian $Oxyz$ với gốc $O$ là tâm Trái Đất, đơn vị độ dài bằng bán kính Trái Đất $R=6371$ km. Gọi $M$, $N$ lần lượt là giao điểm của tia $OP$, $OQ$ với bề mặt Trái Đất. Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Tia $OP$ cắt bề mặt Trái Đất tại điểm $M$ có tọa độ là $\\left(\\dfrac{\\sqrt{3}}{4};-\\dfrac{1}{4};\\dfrac{\\sqrt{3}}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Điểm $P$ có tọa độ là $\\left(\\dfrac{5\\sqrt{3}}{4};-\\dfrac{5}{4};-\\dfrac{5\\sqrt{3}}{2}\\right)$",
        "answer": true
      },
      {
        "text": "Tia $OQ$ cắt bề mặt Trái Đất tại điểm $N$ có tọa độ là $\\left(\\dfrac{3}{4};\\dfrac{\\sqrt{3}}{4};\\dfrac{1}{2}\\right)$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa hai vệ tinh là $40\\,542{,}4$ km (làm tròn đến hàng phần chục của km)",
        "answer": false
      }
    ],
    "explain": "<br>- Vĩ độ $60^\\circ$S (nằm dưới xích đạo nên tọa độ thứ ba âm), kinh độ $30^\\circ$W (kinh Tây nên tọa độ thứ hai âm): $M=\\left(\\cos60^\\circ\\cos30^\\circ;-\\cos60^\\circ\\sin30^\\circ;-\\sin60^\\circ\\right)=\\left(\\dfrac{\\sqrt{3}}{4};-\\dfrac{1}{4};-\\dfrac{\\sqrt{3}}{2}\\right)$, không phải $\\left(\\dfrac{\\sqrt{3}}{4};-\\dfrac{1}{4};\\dfrac{\\sqrt{3}}{2}\\right)$ (sai dấu tọa độ thứ ba). Suy ra mệnh đề sai.<br>- Độ cao $25\\,484$ km ứng với $25\\,484:6\\,371=4$ đơn vị dài nên $OP=4+1=5$ (đơn vị). Do đó $\\overrightarrow{OP}=5\\overrightarrow{OM}=\\left(\\dfrac{5\\sqrt{3}}{4};-\\dfrac{5}{4};-\\dfrac{5\\sqrt{3}}{2}\\right)$, suy ra $P\\left(\\dfrac{5\\sqrt{3}}{4};-\\dfrac{5}{4};-\\dfrac{5\\sqrt{3}}{2}\\right)$. Suy ra mệnh đề đúng.<br>- Vĩ độ $60^\\circ$N, kinh độ $30^\\circ$E (đều dương): $N=\\left(\\cos60^\\circ\\cos30^\\circ;\\cos60^\\circ\\sin30^\\circ;\\sin60^\\circ\\right)=\\left(\\dfrac{\\sqrt{3}}{4};\\dfrac{1}{4};\\dfrac{\\sqrt{3}}{2}\\right)$, không phải $\\left(\\dfrac{3}{4};\\dfrac{\\sqrt{3}}{4};\\dfrac{1}{2}\\right)$. Suy ra mệnh đề sai.<br>- Độ cao $12\\,742$ km ứng với $12\\,742:6\\,371=2$ đơn vị dài nên $OQ=2+1=3$ (đơn vị), $\\overrightarrow{OQ}=3\\overrightarrow{ON}=\\left(\\dfrac{3\\sqrt{3}}{4};\\dfrac{3}{4};\\dfrac{3\\sqrt{3}}{2}\\right)$. Ta có $\\overrightarrow{PQ}=\\left(\\dfrac{3\\sqrt{3}}{4}-\\dfrac{5\\sqrt{3}}{4};\\dfrac{3}{4}+\\dfrac{5}{4};\\dfrac{3\\sqrt{3}}{2}+\\dfrac{5\\sqrt{3}}{2}\\right)=\\left(-\\dfrac{\\sqrt{3}}{2};2;4\\sqrt{3}\\right)$. Suy ra $PQ=\\sqrt{\\dfrac{3}{4}+4+48}=\\sqrt{\\dfrac{211}{4}}=\\dfrac{\\sqrt{211}}{2}$ (đơn vị) $\\approx\\dfrac{\\sqrt{211}}{2}\\times 6\\,371\\approx 46\\,262{,}1$ km, không phải $40\\,542{,}4$ km. Suy ra mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H222DS43",
    "question": "Trong không gian hệ tọa độ $Oxyz$ cho tam giác $ABC$ có $A(1;-2;0)$, $B(2;1;-2)$, $C(0;3;4)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=(1;3;-2)$",
        "answer": true
      },
      {
        "text": "Tọa độ hình chiếu $B$ lên mặt phẳng $Oyz$ là $H(0;0;-2)$",
        "answer": false
      },
      {
        "text": "Gọi $G$ là trọng tâm của tam giác $ABC$, khi đó $a+b-c=1$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $M$ thuộc mặt $(Ozx)$ sao cho $T=MB^2+MC^2$ nhỏ nhất là $M\\left(\\dfrac{3}{2};0;-\\dfrac{1}{2}\\right)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>.<br> $\\overrightarrow{AB}=(1;3;-2)$.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>.<br> Tọa độ hình chiếu $B$ lên mặt phẳng $Oyz$ là $H(0;1;-2)$.<br>- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>.<br> Gọi $G$ là trọng tâm của tam giác $ABC$ khi đó $$ G\\left(\\dfrac{1+2+0}{3};\\dfrac{-2+1+3}{3};\\dfrac{0-2+4}{3}\\right)=\\left(1;\\dfrac{2}{3};\\dfrac{2}{3}\\right). $$ Suy ra $a=1$, $b=\\dfrac{2}{3}$, $c=\\dfrac{2}{3}$. Vậy $a+b-c=1$.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>.<br> Tọa độ điểm $M$ thuộc mặt phẳng $Oxz$ nên $M\\left(x_M;0;z_M\\right)$.<br> Ta có $$\\begin{aligned} T&=MB^2+MC^2\\\\ &=\\left(2-x_M\\right)^2+1+(-2-z_M)^2+x_M^2+9+\\left(4-z_M\\right)^2\\\\ &=2(x_M-1)^2+2(z_M-1)^2+30. \\end{aligned}$$ Vậy $T_{\\min}=30$ khi $M(1;0;1)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H222DS44",
    "question": "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(2;-1;2)$, $B(4;3;-2)$ và $C(5;-1;6)$.",
    "subQuestions": [
      {
        "text": "Tam giác $ABC$ có ba góc đều là góc nhọn",
        "answer": false
      },
      {
        "text": "Chu vi tam giác $ABC$ là $20$",
        "answer": true
      },
      {
        "text": "Điểm $M(a;b;0)$ thuộc mặt phẳng $(Oxy)$ sao cho biểu thức $2MA^2-3MB^2+3MC^2$ đạt giá trị nhỏ nhất thỏa mãn $2a+b=0$",
        "answer": true
      },
      {
        "text": "$M$, $N$, $K$ tương ứng là hình chiếu của $A$ lên trục $Ox$, $Oy$, $Oz$. Điểm $I\\left(x_0 ; y_0 ; z_0\\right)$ thỏa $IM=IN=IK=IA$. Giá trị $x_0+2y_0+z_0$ bằng $1$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $AB=\\sqrt{(4-2)^2+(3-(-1))^2+(-2-2)^2}=6$;<br> $AC=\\sqrt{(5-2)^2+(-1-(-1))^2+(6-2)^2}=5$;<br> $BC=\\sqrt{(5-4)^2+(-1-3)^2+(6-(-2))^2}=9$.<br> Vì $BC$ là cạnh lớn nhất nên $\\widehat{BAC}$ là góc lớn nhất.<br> Ta có $\\cos \\widehat{BAC}=\\dfrac{AB^2+AC^2-BC^2}{2AB\\cdot AC}=\\dfrac{6^2+5^2-9^2}{2\\cdot6\\cdot5}=\\dfrac{-1}{3}$.<br> Suy ra $\\widehat{BAC}=109^{\\circ}$.<br> Do đó tam giác $ABC$ là tam giác tù.<br>- <strong>Đúng</strong>.<br>  Chu vi của tam giác $ABC$ là $6+5+9=20$.<br>- <strong>Đúng</strong>.<br>  $\\overrightarrow{AM}=(a-2;b+1;0-2);MA^2=(a-2)^2+(b+1)^2+4=a^2+b^2-4a+2b+9$.<br> $\\overrightarrow{BM}=(a-4;b-3;2);MB^2=(a-4)^2+(b-3)^2+4=a^2+b^2-8a-6b+29$.<br> $\\overrightarrow{CM}=(a-5;b+1;-6);MC^2=(a-5)^2+(b+1)^2+(-6)^2=a^2+b^2-10a+2b+62$.<br> Ta có $$2MA^2-3MB^2+3MC^2=2a^2+2b^2-14a+28b+117=2\\left(a-\\dfrac{7}{2}\\right)^2+2(b+7)^2-\\dfrac{11}{2} \\geq \\dfrac{-11}{2}.$$ Vậy $2MA^2-3MB^2+3MC^2$ đạt giá trị nhỏ nhất là $\\dfrac{-11}{2}$ khi và chỉ khi $a=\\dfrac{7}{2}$; $b=-7$.<br> Ta có $2a+b=2\\cdot\\dfrac{7}{2}-7=0$.<br>- <strong>Đúng</strong>.<br>  $M$, $N$, $K$ là hình chiếu của $A$ lên $Ox$, $Oy$, $Oz$ nên $M(2;0;0)$, $N(0;-1;0)$, $K(0;0;2)$.<br> Điểm $I\\left(x_0;y_0;z_0\\right)$ thỏa $IM=IN=IK=IA$ nên $$\\begin{aligned} & &\\begin{cases}&IA^2=IM^2\\\\&IA^2=IN^2\\\\&IA^2=IK^2\\end{cases}\\\\ &\\Rightarrow& \\begin{cases}&\\left(x_0-2\\right)^2+\\left(y_0+1\\right)^2+\\left(z_0-2\\right)^2=\\left(x_0-2\\right)^2+y_0^2+z_0^2\\\\&\\left(x_0-2\\right)^2+\\left(y_0+1\\right)^2+\\left(z_0-2\\right)^2=x_0^2+\\left(y_0+1\\right)^2+z_0^2\\\\&\\left(x_0-2\\right)^2+\\left(y_0+1\\right)^2+\\left(z_0-2\\right)^2=x_0^2+y_0^2+\\left(z_0-2\\right)^2\\end{cases}\\\\ &\\Leftrightarrow&\\begin{cases}&(y_0+1)^2+(z_0-2)^2=y_0^2+z_0^2\\\\&(x_0-2)^2+(z_0-2)^2=x_0^2+z_0^2\\\\&(x_0-2)^2+(y_0+1)^2=x_0^2+y_0^2\\end{cases}\\\\ &\\Leftrightarrow&\\begin{cases}&2y_0-4z_0+5=0\\\\&-4x_0-4z_0+8=0\\\\&-4x_0+2y_0+5=0\\end{cases}\\\\ &\\Leftrightarrow&\\begin{cases}&x_0=1\\\\&y_0=-\\dfrac{1}{2}\\\\&z_0=1.\\end{cases} \\end{aligned}$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS45",
    "question": "Cho hình chóp tứ giác đều $S.ABCD$, $O$ là tâm của đáy $ABCD$, được gắn vào hệ trục toạ độ $Oxyz$ như hình vẽ. Biết cạnh $SA=AB=3\\sqrt{2}$ và điểm $G$ là trọng tâm tam giác $SAB$.<br><br><img src=\"data/12/2H2/im2H22/2H22_ex12_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Độ dài đoạn $BG=6\\sqrt{2}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=\\overrightarrow{0}$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $C$ là $(0;6;0)$",
        "answer": false
      },
      {
        "text": "Nếu $K(0;m;n)$ là điểm thuộc mặt phẳng $(Oyz)$ sao cho $KG+KB$ đạt giá trị nhỏ nhất thì $m^2+n^2=\\dfrac{9}{8}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Do $SA=SB=AB=3\\sqrt{2}$ nên $\\triangle SAB$ đều, có trọng tâm $G \\Rightarrow BG=\\dfrac{2}{3}\\cdot 3\\sqrt{2}\\cdot \\dfrac{\\sqrt{3}}{2}=\\sqrt 6$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\begin{cases}&\\overrightarrow{OA}=-\\overrightarrow{OC} \\\\&\\overrightarrow{OB}=-\\overrightarrow{OD}\\end{cases} \\Rightarrow \\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=\\overrightarrow{0}$.<br>- <strong>Sai</strong>.<br>  Hình vuông $ABCD$ có $AB=3\\sqrt{2}\\Rightarrow OC=\\dfrac{AC}{2}=\\dfrac{3\\sqrt{2}\\cdot \\sqrt{2}}{2}=3\\Rightarrow C(0;3;0)$.<br>- <strong>Đúng</strong>.<br>  Ta có $A(0;-3;0)$, $B(3;0;0)$, $SO=\\sqrt{S{{A}^2}-O{{A}^2}}=\\sqrt{{{(3\\sqrt{2})}^2}-{{3}^2}}=3\\Rightarrow S(0;0;3)$.<br> Suy ra, tọa độ trọng tâm $G$: $\\begin{cases}&x_G=\\dfrac{0+3+0}{3}=1\\\\& y_G=\\dfrac{-3+0+0}{3}=-1\\\\&z_G=\\dfrac{0+0+3}{3}=1\\end{cases}\\Rightarrow G(1;-1;1)$.<br> Ta có, hai điểm $B, G$ nằm cùng phía so với mặt phẳng $(Oyz)$.<br> Gọi $G'$ là điểm đối xứng với $G$ qua mặt phẳng $(Oyz) \\Rightarrow G'(-1;-1;1)$.<br> Xét $KG+KB=KG'+KB\\ge G'B$, dấu bằng xảy ra khi ba điểm $B$, $K$, $G'$ thẳng hàng.<br> Khi đó $\\overrightarrow{G'K}=(1;m+1;n-1)$ cùng phương với $\\overrightarrow{G'B}=(4;1;-1)$.<br> Suy ra $\\dfrac{1}{4}=\\dfrac{m+1}{1}=\\dfrac{n-1}{-1}\\Rightarrow \\begin{cases}&m=-\\dfrac{3}{4}\\\\&n=\\dfrac{3}{4}\\end{cases}\\Rightarrow {{m}^2}+{{n}^2}=\\dfrac{9}{8}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H223DS46",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho hình hộp $ABCD.A'B'C'D'$ có tọa độ các đỉnh $A(1;-1;3)$, $B(0;2;4)$, $D(2;-1;1)$ và $A'(0;1;2)$.",
    "subQuestions": [
      {
        "text": "Tọa độ của vectơ $\\overrightarrow{AD} = (1; 0; -2)$",
        "answer": true
      },
      {
        "text": "Tọa độ đỉnh $B'(-1; 4; 3)$",
        "answer": true
      },
      {
        "text": "Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AD}$ là góc nhọn",
        "answer": false
      },
      {
        "text": "Phương trình mặt phẳng $(CB'D')$ có dạng $ax + by + cz - 7 = 0$. Khi đó: $a + b - c = 10$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2H2/im2H22/2H22_ex12_040.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Đúng</strong>.<br>  $\\overrightarrow{AD} = (1;0;-2)$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{AB} = \\overrightarrow{A'B'} \\Leftrightarrow B' = A' + B - A = \\left(-1;4;3\\right)$. Vậy $B'\\left(-1;4;3\\right)$.<br>- <strong>Sai</strong>.<br>  $\\overrightarrow{AB} = (-1;3;1)$. Ta có $$ \\cos\\left(\\overrightarrow{AB},\\overrightarrow{AD}\\right) = \\dfrac{\\overrightarrow{AB}\\cdot\\overrightarrow{AD}}{\\left|\\overrightarrow{AB}\\right|.\\left|\\overrightarrow{AD}\\right|}=\\dfrac{-1\\cdot1+3\\cdot0+1\\cdot(-2)}{\\sqrt{1^2+0^2+(-2)^2}\\cdot\\sqrt{(-1)^2+3^2+1^2}} = \\dfrac{-3}{\\sqrt{55}}&lt;0. $$ Do đó góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AD}$ là góc tù.<br>- <strong>Sai</strong>.<br>  $\\overrightarrow{BC} = \\overrightarrow{AD}\\Leftrightarrow C = B + D- A = (1;2;2)$. Vậy $C(1;2;2)$.<br> Tương tự, $\\overrightarrow{AD} = \\overrightarrow{A'D'}\\Leftrightarrow D'(1;1;0)$.<br> Ta có $\\overrightarrow{CB'}=(-2;2;1)$, $\\overrightarrow{CD'}=(0;-1;-2)$.<br> Véc-tơ pháp tuyến của mặt phẳng $(CB'D')$ là $\\overrightarrow{n}=\\left[\\overrightarrow{CB'},\\overrightarrow{CD'}\\right] = (-3;-4;2)$.<br> Khi đó, phương trình mặt phẳng $(CB'D')$ có dạng $-3x-4y+2z+D=0$.<br> Vì $C\\in(C'B'D')$ nên $-3-8+4+D=0\\Leftrightarrow D=7$.<br> Vậy $(CB'D')\\colon 3x+4y-2z-7=0$. Suy ra $a=3$, $b=4$, $c=-2$.<br> Khi đó, $a+b-c=9$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS47",
    "question": "Trong không gian $Oxyz$, cho bốn điểm $S$, $A$, $B$, $C$ như hình vẽ bên (mỗi ô lưới là 1 đơn vị).<br><br><img src=\"data/12/2H2/im2H22/2H22_ex12_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $A, B$ lần lượt là $(3;2;3)$ và $(1;5;3)$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{SC}\\cdot\\overrightarrow{BC} = 6$",
        "answer": false
      },
      {
        "text": "$\\cos \\widehat{BAC} = \\dfrac{\\sqrt{2}}{5}$",
        "answer": false
      },
      {
        "text": "Xét hình nón $(\\mathcal{N})$ có đỉnh $S$, điểm $A$ thuộc đường sinh và hai điểm $B, C$ thuộc đường tròn đáy của $(\\mathcal{N})$. Bán kính hình nón bằng $\\sqrt{6}$",
        "answer": true
      }
    ],
    "explain": "Từ hình vẽ ta xác định được tọa độ các điểm: $S(1;2;3)$, $A(3;2;3)$, $B(1;5;3)$, $C(1;2;6)$.<br>- <strong>Đúng</strong>.<br>  Tọa độ điểm $A(3;2;3)$ và $B(1;5;3)$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{SC} = (0;0;3)$ và $\\overrightarrow{BC} = (0;-3;3)$. <br> Suy ra $\\overrightarrow{SC} \\cdot \\overrightarrow{BC} = 0 \\cdot 0 + 0 \\cdot (-3) + 3 \\cdot 3 = 9$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AB} = (-2;3;0)$ và $\\overrightarrow{AC} = (-2;0;3)$. Khi đó: $$\\cos \\widehat{BAC} = \\cos \\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right) = \\dfrac{(-2)\\cdot (-2) + 3 \\cdot 0 + 0 \\cdot 3}{\\sqrt{4+9+0} \\cdot \\sqrt{4+0+9}} = \\dfrac{4}{13}.$$<br>- <strong>Đúng</strong>.<br>  { Dễ thấy $SB = SC = 3$; $SA = 2$ và $SA$, $SB$, $SC$ đôi một vuông góc. Kéo dài $SA$ đến $A'$ sao cho $SA' = 3$. <br> Khi đó nón $(\\mathcal{N})$ chính là nón ngoại tiếp chóp tam giác đều $S.A'BC$ có cạnh đáy $BC = 3\\sqrt{2}$ và khi đó bán kính đáy của nón $(\\mathcal{N})$ chính là bán kính đường tròn ngoại tiếp tam giác đều $ A'BC $. <br> Suy ra $r = \\dfrac{2}{3} \\cdot \\dfrac{BC\\sqrt{3}}{2} = \\dfrac{2}{3} \\cdot \\dfrac{3\\sqrt{2}\\sqrt{3}}{2} = \\sqrt{6} $. } <br><img src=\"data/12/2H2/im2H22/2H22_ex12_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS48",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho tam giác $ABC$, với $A(5;1;3)$, $B(1;6;2)$, $C(5;0;4)$.",
    "subQuestions": [
      {
        "text": "$\\overrightarrow{AB}=(-4;5;-1)$, $\\overrightarrow{AC}=(0;-1;-1)$",
        "answer": false
      },
      {
        "text": "Biết điểm $D(a;b;c)$ sao cho tứ giác $ABCD$ là hình bình hành, ta có $a+b+c=9$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=-10$",
        "answer": false
      },
      {
        "text": "Gọi $\\alpha$ là số đo góc $A$ của tam giác $ABC$. Khi đó $\\cos \\alpha = \\dfrac{\\sqrt{21}}{7}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có<br><br>- $\\overrightarrow{AB} = (1-5; 6-1; 2-3) = (-4; 5; -1)$;<br><br>- $\\overrightarrow{AC} = (5-5; 0-1; 4-3) = (0; -1; 1)$.<br>- <strong>Đúng</strong>.<br>  Tứ giác $ABCD$ là hình bình hành khi và chỉ khi \\[\\overrightarrow{AB} = \\overrightarrow{DC}\\Leftrightarrow \\begin{cases}&5-a=-4 \\\\ &-b=5 \\\\ &4-c=-1\\end{cases} \\Rightarrow \\begin{cases}&a=9\\\\&b=-5\\\\&c=5.\\end{cases}\\] Khi đó $a+b+c = 9 + (-5) + 5 = 9$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-4) \\cdot 0 + 5 \\cdot (-1) + (-1) \\cdot 1 = 0 - 5 - 1 = -6$.<br>- <strong>Sai</strong>.<br>  Ta có<br><br>- $\\left| \\overrightarrow{AB}\\right| = \\sqrt{(-4)^2 + 5^2 + (-1)^2}= \\sqrt{42}$;<br><br>- $\\left| \\overrightarrow{AC}\\right| = \\sqrt{0^2 + (-1)^2 + 1^2} = \\sqrt{2}$.<br>Suy ra \\[\\cos \\alpha = \\cos \\left( \\overrightarrow{AB}, \\overrightarrow{AC}\\right) = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{\\left| \\overrightarrow{AB}\\right| \\cdot\\left| \\overrightarrow{AC}\\right| }= \\dfrac{-6}{\\sqrt{42} \\cdot \\sqrt{2}} = -\\dfrac{\\sqrt{21}}{7}.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS49",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho tam giác $ABC$ với $A(3;0;0)$, $B(0;6;0)$, $C(0;0;-9)$.",
    "subQuestions": [
      {
        "text": "Tọa độ trọng tâm $G$ của tam giác $ABC$ là $(1;2;-3)$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{GA}=(-2;2;-3)$",
        "answer": false
      },
      {
        "text": "$GA=\\sqrt{17}$",
        "answer": true
      },
      {
        "text": "$\\cos \\widehat{AGB}=\\dfrac{1}{\\sqrt{442}}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\begin{cases}&x_{G}=\\dfrac{3+0+0}{3}=1\\\\& y_{G}=\\dfrac{0+6+0}{3}=2\\\\& z_{G}=\\dfrac{0+0-9}{3}=-3\\end{cases} \\Rightarrow G(1;2;-3)$.<br>- <strong>Sai</strong>.<br>  $\\overrightarrow{GA}=(3-1; 0-2; 0-(-3)) = (2;-2;3)$.<br>- <strong>Đúng</strong>.<br>  $GA=\\sqrt{2^2+(-2)^2+3^2}=\\sqrt{17}$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{GA}=(2;-2;3)$ và $\\overrightarrow{GB}=(-1;4;3)$.<br> Suy ra $\\cos \\widehat{AGB}=\\dfrac{\\overrightarrow{GA}\\cdot \\overrightarrow{GB}}{\\left|\\overrightarrow{GA}\\right|\\cdot \\left|\\overrightarrow{GB}\\right|}=\\dfrac{2\\cdot (-1)+(-2)\\cdot 4+3\\cdot 3}{\\sqrt{17}\\cdot \\sqrt{(-1)^2+4^2+3^2}}=-\\dfrac{1}{\\sqrt{442}}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS50",
    "question": "Trong không gian gian với hệ tọa độ $Oxyz$, cho hình thang $ABCD$ vuông tại $A$ và $B$. Biết $A(1;2;1), B(2;0;-1), C(6;1;0)$ và diện tích hình thang $ABCD$ bằng $6\\sqrt{2}$.",
    "subQuestions": [
      {
        "text": "$\\cos \\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right) = \\dfrac{\\sqrt{3}}{3}$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $D$ là $(a;b;c)$. Khi đó $a+b+c = \\dfrac{22}{3}$",
        "answer": false
      },
      {
        "text": "Gọi điểm $M(x_M;y_M;z_M)$ nằm trên mặt phẳng $(Oxy)$ thỏa mãn $MA^2 + 2MB^2 + 3MC^2$ đạt giá trị nhỏ nhất. Khi đó $x_M &lt; 4$",
        "answer": true
      },
      {
        "text": "$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=9$",
        "answer": true
      }
    ],
    "explain": "Ta có $\\overrightarrow{AB}=(1; -2; -2)$, $\\overrightarrow{AC}=(5; -1; -1)$.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_035.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Đúng</strong>.<br>  Vì $$\\begin{aligned} \\cos \\left(\\overrightarrow{AB},\\overrightarrow{AC}\\right)&=\\dfrac{\\overrightarrow{AB}\\cdot \\overrightarrow{AC}}{|\\overrightarrow{AB}|\\cdot |\\overrightarrow{AC}|}\\\\ &=\\dfrac{1\\cdot 5+(-2)\\cdot (-1)+(-2)\\cdot (-1)}{\\sqrt{9}\\cdot \\sqrt{27}}\\\\ &=\\dfrac{\\sqrt{3}}{3}. \\end{aligned}$$<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{BC}=(4;1;1)$.<br> Vì $\\overrightarrow{AD}$ cùng hướng với $\\overrightarrow{BC}$ nên $\\overrightarrow{AD}=t\\overrightarrow{BC}$, $t&gt;0$.<br> Ta có $BC=\\sqrt{18}=3\\sqrt{2}$, $AD=t\\sqrt{18}=3t\\sqrt{2}$.<br> Diện tích hình thang là $$\\begin{aligned} &&S=\\dfrac{1}{2}(AD+BC)\\cdot AB\\\\ &\\Leftrightarrow&6\\sqrt{2}=\\dfrac{1}{2}(3\\sqrt{2}t+3\\sqrt{2})\\cdot 3\\\\ &\\Leftrightarrow&t=\\dfrac{1}{3}. \\end{aligned}$$ Do đó $\\overrightarrow{AD}=\\dfrac{1}{3}\\overrightarrow{BC}$. Suy ra $D\\left(\\dfrac{7}{3};\\dfrac{7}{3};\\dfrac{4}{3}\\right)$.<br> Vậy $a+b+c=\\dfrac{7}{3}+\\dfrac{7}{3}+\\dfrac{4}{3}=\\dfrac{18}{3}=6$.<br>- <strong>Đúng</strong>.<br>  Vì $M\\in (Oxy)$ nên $M(a; b; 0)$.<br> Ta có $\\overrightarrow{MA}=(1-a; 2-b; 1)$, $\\overrightarrow{MB}=(2-a; -b; -1)$, $\\overrightarrow{MC}=(6-a; 1-b; 0)$.<br> Xét $$\\begin{aligned} F&=MA^2+2MB^2+3MC^2\\\\ &=\\left[(1-a)^2+(2-b)^2+1\\right]+2\\left[(2-a)^2+(-b)^2+(-1)^2\\right]+3\\left[(6-a)^2+(1-b)^2\\right]\\\\ &=6a^2-46a+6b^2-10b+123\\\\ &=6\\left(a-\\dfrac{23}{6}\\right)^2+6\\left(b-\\dfrac{5}{6}\\right)^2+\\dfrac{92}{3}\\\\ &\\ge &\\dfrac{92}{3}. \\end{aligned}$$ Dấu “ = ” xảy ra khi và chỉ khi $a=\\dfrac{23}{6}$ và $b=\\dfrac{5}{6}$.<br> Khi đó $F$ đạt giá trị nhỏ nhất khi $M\\left(\\dfrac{23}{6};\\dfrac{5}{6};0\\right)$.<br> Do đó $x_M=\\dfrac{23}{6}&lt;4$.<br>- <strong>Đúng</strong>.<br>  Vì đã tính được $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=9$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS51",
    "question": "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình chữ nhật với $AB=5$, $AD=6$, $AA'=10$ và $G$ là trọng tâm của tam giác $BDA'$. Gắn một hệ tọa độ $Oxyz$ có gốc $O$ trùng với điểm $A$, tia $Ox$ trùng với tia $AB$, tia $Oy$ trùng với tia $AD$, tia $Oz$ trùng với tia $AA'$.<br><br><img src=\"data/12/2H2/im2H22/2H22_ex12_036.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ của điểm $C$ là $(5;6;0)$",
        "answer": true
      },
      {
        "text": "$|\\overrightarrow{AC} + 2\\overrightarrow{A'B}| = \\sqrt{661}$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $G$ là $\\left( 2; \\dfrac{5}{3}; \\dfrac{10}{3} \\right)$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{AG} \\cdot \\overrightarrow{B'C} = -\\dfrac{64}{3}$",
        "answer": true
      }
    ],
    "explain": "Thiết lập tọa độ các điểm: $A(0;0;0)$, $B(5;0;0)$, $D(0;6;0)$, $C(5;6;0)$, $A'(0;0;10)$, $B'(5;0;10)$.<br>- <strong>Đúng</strong>.<br>  Điểm $C$ có tọa độ $(5;6;0)$.<br>- <strong>Đúng</strong>.<br>  $\\overrightarrow{AC} = (5;6;0)$; $\\overrightarrow{A'B} = (5;0;-10) \\Rightarrow 2\\overrightarrow{A'B} = (10;0;-20)$. <br> $\\overrightarrow{u} = \\overrightarrow{AC} + 2\\overrightarrow{A'B} = (15; 6; -20)$. <br> $|\\overrightarrow{u}| = \\sqrt{15^2 + 6^2 + (-20)^2} = \\sqrt{225 + 36 + 400} = \\sqrt{661}$.<br>- <strong>Sai</strong>.<br>  $G$ là trọng tâm $\\triangle BDA'$<br> $\\Rightarrow x_G = \\dfrac{5+0+0}{3} = \\dfrac{5}{3}$; $y_G = \\dfrac{0+6+0}{3} = 2$; $z_G = \\dfrac{0+0+10}{3} = \\dfrac{10}{3}$. <br> Vậy $G\\left( \\dfrac{5}{3}; 2; \\dfrac{10}{3} \\right)$.<br>- <strong>Đúng</strong>.<br>  $\\overrightarrow{AG} = \\left( \\dfrac{5}{3}; 2; \\dfrac{10}{3} \\right)$. <br> $\\overrightarrow{B'C} = (5-5; 6-0; 0-10) = (0; 6; -10)$. <br> $\\overrightarrow{AG} \\cdot \\overrightarrow{B'C} = \\dfrac{5}{3} \\cdot 0 + 2 \\cdot 6 + \\dfrac{10}{3} \\cdot (-10) = -\\dfrac{64}{3}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS52",
    "question": "Trong không gian với hệ tọa độ $Oxyz$, cho hình hộp $ABCD.A'B'C'D'$ có $A(0;0;0)$, $B(3;0;0)$, $D(0;3;0)$, $D'(0;3;-3)$. Gọi $G$ là trọng tâm của tam giác $B'BD'$.",
    "subQuestions": [
      {
        "text": "Tọa độ của điểm $C$ là $C(-3;-3;0)$",
        "answer": false
      },
      {
        "text": "Tọa độ trọng tâm $G$ của tam giác $B'BD'$ là $(2;1;-2)$",
        "answer": true
      },
      {
        "text": "Diện tích tam giác $A'B'C$ bằng $4{,}5$ (đơn vị diện tích)",
        "answer": false
      },
      {
        "text": "Góc giữa hai đường thẳng $AC$ và $B'G$ là $60^\\circ$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2H2/im2H22/2H22_ex12_042.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Ta có $\\overrightarrow{AB} = (3;0;0)$, $\\overrightarrow{AD} = (0;3;0)$, $\\overrightarrow{AA'}=\\overrightarrow{DD'} = (0;0;-3)$.<br> Suy ra $ABCD.A'B'C'D'$ là hình lập phương cạnh bằng $3$.<br> Ta suy ra được tọa độ các đỉnh còn lại là $C(3;3;0)$, $A'(0;0;-3)$, $B'(3;0;-3)$.<br>- <strong>Sai</strong>.<br>  Tọa độ điểm $C$ là $(3;3;0)$.<br>- <strong>Đúng</strong>.<br>  Trọng tâm $G$ của tam giác $B'BD'$ có tọa độ là \\[ \\begin{cases}&x_G = \\dfrac{x_{B'} + x_B + x_{D'}}{3} = \\dfrac{3+3+0}{3} = 2\\\\&y_G = \\dfrac{y_{B'} + y_B + y_{D'}}{3} = \\dfrac{0+0+3}{3} = 1\\\\&z_G = \\dfrac{z_{B'} + z_B + z_{D'}}{3} = \\dfrac{-3+0-3}{3} = -2\\end{cases} \\Rightarrow G(2;1;-2). \\]<br>- <strong>Sai</strong>.<br>  Ta có $A'B'\\perp (BCC'B')$ suy ra $A'B'\\perp B'C\\Rightarrow \\triangle A'B'C$ vuông tại $B'$.<br> Diện tích tam giác $A'B'C$ là \\[S = \\dfrac{1}{2} A'B' \\cdot B'C= \\dfrac{1}{2} \\cdot 3 \\cdot 3\\sqrt{2} = \\dfrac{9\\sqrt{2}}{2} \\approx 6{,}36 \\text{ (đơn vị diện tích).}\\]<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AC} = (3;3;0)$ và $\\overrightarrow{B'G} = (-1;1;1)$.<br> Xét $\\overrightarrow{AC} \\cdot \\overrightarrow{B'G} = 3\\cdot(-1) + 3\\cdot1 + 0\\cdot 1 = 0 \\Rightarrow AC \\perp B'G$.<br> Vậy góc giữa hai đường thẳng là $90^\\circ$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H224DS53",
    "question": "Trong không gian $Oxyz$, cho tam giác $OAB$ có $O(0;0;0)$, $A(1;2;7)$, $B(4;3;5)$.",
    "subQuestions": [
      {
        "text": "$AB = 5\\sqrt{2}$",
        "answer": false
      },
      {
        "text": "$\\overrightarrow{OA}\\cdot\\overrightarrow{OB}=45$",
        "answer": true
      },
      {
        "text": "$\\widehat{AOB}=30^\\circ$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $C$ sao cho tứ giác $OABC$ là hình bình hành là $(-3;-1;2)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AB}=(3;1;-2)\\Rightarrow \\left|\\overrightarrow{AB}\\right| =\\sqrt{9+1+4}=\\sqrt{14}$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{OA}\\cdot\\overrightarrow{OB}=1\\cdot4+2\\cdot3+7\\cdot5=4+6+35=45$.<br>- <strong>Đúng</strong>.<br>  Ta có $$\\cos\\widehat{AOB}=\\dfrac{\\overrightarrow{OA}\\cdot\\overrightarrow{OB}}{\\left|\\overrightarrow{OA}\\right|\\cdot \\left|\\overrightarrow{OB}\\right| }=\\dfrac{45}{\\sqrt{1+4+49}\\cdot\\sqrt{16+9+25}}=\\dfrac{45}{\\sqrt{54}\\cdot\\sqrt{50}}=\\dfrac{\\sqrt{3}}{2}\\Rightarrow \\widehat{AOB}=30^\\circ.$$<br>- <strong>Sai</strong>.<br>  Để tứ giác $OABC$ là hình bình hành thì<br> $\\overrightarrow{OA}=\\overrightarrow{CB}\\Leftrightarrow (1;2;7)=(4-x_C;3-y_C;5-z_C)$ $\\Leftrightarrow C(3;1;-2)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS54",
    "question": "Hình vẽ sau mô tả vị trí của máy bay vào thời điểm $9$ giờ $30$ phút. Biết các đơn vị trên hình tính theo đơn vị km.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phi công để máy bay ở chế độ tự động với vận tốc theo hướng đông là $750$ km/h, độ cao không đổi. Biết rằng gió thỏi theo hướng đông với vận tốc $10$ m/s. Giả sử vận tốc và hướng gió không đổi thì lúc $10$ giờ $30$ phút máy bay ở tọa độ $(150;1\\,086;9)$",
        "answer": true
      },
      {
        "text": "Tọa độ của máy bay vào lúc $9$ giờ $30$ phút là $(300;150;9)$",
        "answer": false
      },
      {
        "text": "Vào thời điểm $9$ giờ $30$ phút máy bay ở độ cao $9$ km",
        "answer": true
      },
      {
        "text": "Sau khi bay đến vị trí lúc $10$ giờ $30$ phút thì máy bay bay ngược lại với vận tốc $800$ km/h với độ cao không đổi, biết lúc đó trời lặng gió thì lúc $11$ giờ máy bay ở tọa độ $(686;150;9)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>.<br> Ta có $v=10\\,m/s=10\\cdot3,6=36\\,km/h$.<br> Lại có tọa độ máy bay theo hình vẽ là $(150;300;9)$.<br> Vì cả máy bay và gió đều cùng hướng Đóng nên vận tốc tổng là $v=750+36=786$ km/h.<br> Quãng đường máy bay bay từ $9$ giờ $30$ phút đến $10$ giờ $30$ phút là $s=786\\cdot 1=786$ km.<br> Khi đó máy bay đã di chuyển được thêm được theo hướng Đông là $300+786=1\\,086$ km.<br> Vậy tọa độ máy bay lúc $10$ giờ $30$ phút là $(150;1\\,086;9)$<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>.<br> Dựa vào hình mô tả, ta thấy máy bay đang ở tọa độ $(150;300;9)$.<br>- <strong>Đúng</strong>.<br>  <strong>Đúng</strong>.<br> Dựa vào hình mô tả, ta thấy máy bay vào lúc $9$ giờ $30$ phút đang ở độ cao $9$ km.<br>- <strong>Sai</strong>.<br>  <strong>Sai</strong>.<br> Quãng đường máy bay quay ngược lại từ $10$ giờ $30$ phút đến $11$ giờ là $s=v\\cdot t=800\\cdot0{,}5=400$ km.<br> Vì lúc đó trời lặng gió và máy bay ở độ cao không đổi nên vị trí máy bay quay người lại là $1\\,086-400=686$ km.<br> Vậy tọa độ của máy bay lúc $11$ giờ là $(150;686;9)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS55",
    "question": "Trong không gian với hệ tọa độ $Oxyz$ (đơn vị trên mỗi trục là $10$ km), hai khinh khí cầu $A$ và $B$ bay với vectơ vận tốc lần lượt là $\\overrightarrow{v}_a=(1;2;0)$ và $\\overrightarrow{v}_b=(-2;3;0)$ (tọa độ vectơ vận tốc được tính theo đơn vị của hệ trục tọa độ trên giờ). Tại thời điểm $t=0$ vị trí của khinh khí cầu $A$ là $M(5;4;2)$ và vị trí của khinh khí cầu $B$ là $N(6;5;3)$. Hai khinh khí cầu sẽ bay trong $10$ giờ tiếp theo và dừng lại. Khi đó",
    "subQuestions": [
      {
        "text": "Sau $3$ giờ vị trí của khinh khí cầu $A$ là $M'(8;10;2)$",
        "answer": true
      },
      {
        "text": "Khinh khí cầu $B$ không bay qua vị trí $N'(0;14;3)$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa hai khinh khí cầu sau $3$ giờ là $9$ km",
        "answer": false
      },
      {
        "text": "Trong khoảng thời gian từ $t=0$ đến $t=10$ giờ, khoảng cách ngắn nhất giữa hai khinh khí cầu là $16{,}1$ km (<em>làm tròn đến hàng phần chục</em>)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Giả sử sau $t$ giờ, vị trí máy bay $A$ là $M'$ khi đó ta có $\\overrightarrow{MM'}=\\overrightarrow{v}_a \\cdot t=(t;2t;0)$.<br> Khi đó $M'(t+5;2t+4;2)$.<br> Với $t=3 \\Rightarrow M'(8;10;2)$.<br>- <strong>Sai</strong>.<br>  Giả sử sau $t$ giờ, vị trí máy bay $B$ là $N'$ khi đó ta có $\\overrightarrow{NN'}=\\overrightarrow{v}_b \\cdot t=(-2t;3t;0)$.<br> Khi đó $N'(-2t+6;3t+5;3)$.<br> Nếu khinh khí cầu $B$ bay qua vị trí $N'(0;14;3)$ thì $\\begin{cases}&-2t+6=0 \\\\ &3t+5=14\\end{cases} \\Leftrightarrow \\begin{cases}&t=3 \\\\ &t=3\\end{cases}$ (thỏa mãn).<br> Vậy khinh khí cầu $B$ bay qua vị trí $N'(0;14;3)$.<br>- <strong>Sai</strong>.<br>  Sau $3$ giờ vị trí khinh khí cầu $B$ là $N'(0;14;3)$.<br> Khoảng cách giữa hai khinh khí cầu là $M'N'=\\sqrt{(0-8)^2+(14-10)^2+(3-2)^2}=\\sqrt{81}=9$.<br> Vậy khoảng cách giữa hai khinh khí cầu sau $3$ giờ là $90$ km.<br>- <strong>Đúng</strong>.<br>  Gọi $t$ là thời điểm hai khinh khí cầu ở vị trí ngắn nhất.<br> Khi đó $M'(t+5;2t+4;2)$ và $N'(-2t+6;3t+5;3)$.<br> Do đó $\\overrightarrow{M'N'}=(-3t+1;t+1;1)$.<br> Suy ra $M'N'=\\sqrt{(-3t+1)^2+(t+1)^2+1}=\\sqrt{10t^2-4t+3}=\\sqrt{10\\left(t-\\dfrac{1}{5}\\right)^2+\\dfrac{13}{5}} \\ge \\sqrt{\\dfrac{13}{5}}$.<br> Vậy $M'N'$ đạt giá trị nhỏ nhất là $\\sqrt{\\dfrac{13}{5}} \\approx 1{,}61$ ứng với $16{,}1$ km khi $t=\\dfrac{1}{5}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS56",
    "question": "Trong không gian, xét hệ tọa độ $Oxyz$ có gốc $O$ trùng với vị trí một giàn khoan trên biển, mặt phẳng $(Oxy)$ trùng với mặt biển (được gọi là mặt phẳng) với tia $Ox$ hướng về phía nam, tia $Oy$ hướng về phía đông, tia $Oz$ hướng thẳng lên trời (tham khảo hình vẽ). Đơn vị đo trong không gian $Oxyz$ lấy theo kilômét. Một chiếc radar đặt tại $O$ có phạm vi theo dõi $30$ km. Một chiếc tàu thám hiểm tại vị trí $A$ ở độ sâu $10$ km so với mặt nước biển, cách $O$ $25$ km về phía nam và $15$ km về phía tây. Một tàu đánh cá tại vị trí $B(-20;15;0)$.<br><br><img src=\"data/12/2H2/im2H22/2H22_ex12_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Một chiếc tàu của cảnh sát biển đang tuần tra di chuyển đến vị trí $C$ cách $O$ một khoảng $15$ km về phía nam. Để radar phát hiện ra thì tàu cảnh sát biển cần di chuyển về phía đông cách $O$ tối đa $15\\sqrt{3}$ km",
        "answer": true
      },
      {
        "text": "Radar phát hiện ra tàu đánh cá tại vị trí $B$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ chiếc tàu thám hiểm đến radar bằng $3\\sqrt{58}$ km",
        "answer": false
      },
      {
        "text": "Radar không phát hiện được tàu thám hiểm đặt tại vị trí $A$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Gọi $x$ (km), $x&gt;0$ là khoảng cách từ tàu cảnh sát biển cách radar $O$ về phía đông.<br> Khi đó toạ độ của tàu cảnh sát biển là $C(15;x;0)$. Ta có $OC=\\sqrt{15^{2}+x^{2}+0^{2}}=\\sqrt{x^{2}+225}$.<br> Để radar phát hiện được tàu cảnh sát biển thì $OC\\leq 30$ km.<br> Suy ra $\\sqrt{x^{2}+225}\\leq 30\\Leftrightarrow x^{2}+225\\leq 900\\Leftrightarrow x^{2}\\leq 675\\Leftrightarrow x\\leq 15\\sqrt{3}$ km.<br> Vậy tàu cảnh sát biển cần di chuyển về phía đông cách $O$ tối đa $15\\sqrt{3}$ km.<br>- <strong>Đúng</strong>.<br>  Ta có $OB=\\sqrt{(-20)^{2}+15^{2}+0^{2}}=25$ (km) $&lt;30$ (km) nên radar phát hiện ra tàu đánh cá tại vị trí $B$.<br>- <strong>Sai</strong>.<br>  Một chiếc tàu thám hiểm tại vị trí $A$ ở độ sâu $10$ km so với mặt nước biển, cách $O$ một khoảng $25$ km về phía nam và $15$ km về phía tây nên ta có tọa độ tàu thám hiểm là điểm tọa độ điểm $A(25;-15;-10)$. Khi đó khoảng cách từ chiếc tàu thám hiểm đến radar bằng $$OA=\\sqrt{25^{2}+(-15)^{2}+(-10)^{2}}=5\\sqrt{38}\\,(\\mathrm{km}).$$<br>- <strong>Đúng</strong>.<br>  Ta thấy $OA=5\\sqrt{38}$ (km) $\\approx 30{,}82$ (km,) mà phạm vi theo dõi của radar là $30$ km nên radar không phát hiện được tàu thám hiểm đặt tại vị trí $A$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS57",
    "question": "Hình minh họa sơ đồ một ngôi nhà trong hệ trục tọa độ $Oxyz$, trong đó nền nhà, bốn bức tường và hai mái nhà đều là hình chữ nhật.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ của điểm $A\\left(5; 0; 0\\right)$",
        "answer": false
      },
      {
        "text": "Tọa độ của điểm $H\\left(0; 5; 3\\right)$",
        "answer": true
      },
      {
        "text": "Góc nhị diện có cạnh là đường thẳng $PQ$, hai mặt lần lượt là $\\left(PQGF\\right)$ và $\\left(PQHE\\right)$ gọi là góc của mái nhà. Số đo của góc của mái nhà bằng $53{,}1^\\circ$ $\\left(\\text{\\textit{làm tròn kết quả đến hàng phần mười của độ}}\\right)$",
        "answer": false
      },
      {
        "text": "Chiều cao của ngôi nhà là $4$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  $OABC$ là hình chữ nhật nằm trong mặt phẳng $\\left(Oxy\\right)$.<br> Ta có điểm $B\\left(4; 5; 0\\right)$ và điểm $A$ nằm trên trục $Ox$ nên suy ra $A\\left(4; 0; 0\\right)$.<br>- <strong>Đúng</strong>.<br>  Tương tự ta có điểm $C\\left(0; 5; 0\\right)$ nằm trên trục $Oy$.<br> Điểm $H$ sẽ có cùng hoành độ và tung độ với điểm $C$, đồng thời có cùng cao độ với điểm $G\\left(4; 5; 3\\right)$.<br> Suy ra $H\\left(0; 5; 3\\right)$.<br>- <strong>Sai</strong>.<br>  Góc nhị diện cạnh $PQ$, hai mặt $\\left(PQGF\\right)$ và $\\left(PQHE\\right)$ có số đo chính là góc giữa hai véctơ $\\overrightarrow{PF}$ và $\\overrightarrow{PE}$ $\\left(\\text{vì } PF \\perp PQ \\text{ và } PE \\perp PQ\\right)$.<br> Ta có $F\\left(4; 0; 3\\right)$ $\\left(\\text{do cùng hoành độ, tung độ với } A \\text{ và cùng cao độ với } E\\right)$.<br> Suy ra $\\overrightarrow{PE} = \\left(0-2; 0-0; 3-4\\right) = \\left(-2; 0; -1\\right)$.<br> Và $\\overrightarrow{PF} = \\left(4-2; 0-0; 3-4\\right) = \\left(2; 0; -1\\right)$.<br> Khi đó ta có $\\cos \\left(\\overrightarrow{PE}, \\overrightarrow{PF}\\right) = \\dfrac{\\overrightarrow{PE} \\cdot \\overrightarrow{PF}}{\\left|\\overrightarrow{PE}\\right| \\cdot \\left|\\overrightarrow{PF}\\right|} = \\dfrac{-2 \\cdot 2 + 0 \\cdot 0 + \\left(-1\\right) \\cdot \\left(-1\\right)}{\\sqrt{\\left(-2\\right)^2+0^2+\\left(-1\\right)^2} \\cdot \\sqrt{2^2+0^2+\\left(-1\\right)^2}} = \\dfrac{-3}{5} = -0{,}6$.<br> Suy ra số đo góc nhị diện cần tìm bằng $\\arccos \\left(-0{,}6\\right) \\approx 126{,}9^\\circ \\neq 53{,}1^\\circ$.<br>- <strong>Đúng</strong>.<br>  Quan sát thấy nóc nhà là đường thẳng $PQ$ với các đỉnh $P\\left(2; 0; 4\\right)$ và $Q\\left(2; 5; 4\\right)$ đều có cao độ $z = 4$.<br> Vậy chiều cao của ngôi nhà bằng khoảng cách từ $P$ xuống mặt phẳng $\\left(Oxy\\right)$ và bằng $4$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS58",
    "question": "Trong không gian, xét hệ toạ độ $Oxyz$ có gốc $O$ trùng với vị trí một giàn khoan trên biển, mặt phẳng $(Oxy)$ trùng với mặt biển với tia $Ox$ hướng về phía nam, tia $Oy$ hướng về phía đông, tia $Oz$ hướng thẳng lên trời. Đơn vị đo trong không gian $Oxyz$ lấy theo kilômét. Một chiếc radar đặt tại $O$ có phạm vi theo dõi là $30$ km. Một chiếc tàu thám hiểm tại vị trí $A$ ở độ sâu $10$ km so với mặt nước biển, cách $O$ là $25$ km về phía nam và $15$ km về phía tây. Một tàu đánh cá tại vị trí $B(-20;15;0)$.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Một chiếc tàu của cảnh sát biển đang tuần tra di chuyển đến vị trí $C$ cách $O$ là $15$ km về phía nam. Để radar phát hiện ra thì tàu cảnh sát biển cần di chuyển về phía đông cách $O$ tối đa $15\\sqrt{3}$ km",
        "answer": true
      },
      {
        "text": "Radar phát hiện ra tàu đánh cá tại vị trí $B$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ chiếc tàu thám hiểm đến radar bằng $3\\sqrt{58}$ km",
        "answer": false
      },
      {
        "text": "Radar không phát hiện được tàu thám hiểm đặt tại vị trí $A$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Gọi vị trí của tàu cảnh sát biển sau khi di chuyển là $C$. Vì tàu nằm trên mặt biển, cách $O$ là $15$ km về phía nam nên hoành độ $x=15$, cao độ $z=0$.<br> Gọi khoảng cách tàu di chuyển về phía đông là $y$ với $y&gt;0$. Khi đó tung độ của $C$ là $y$, suy ra $C(15;y;0)$.<br> Khoảng cách từ tàu đến radar là $OC=\\sqrt{15^2+y^2+0^2}=\\sqrt{y^2+225}$.<br> Để radar phát hiện được tàu thì $$\\begin{aligned} &&OC \\le 30\\\\ & \\Leftrightarrow &\\sqrt{y^2+225} \\le 30\\\\ &\\Leftrightarrow& y^2+225 \\le 900\\\\ &\\Leftrightarrow &y^2 \\le 675 \\\\ &\\Rightarrow& y \\le 15\\sqrt{3}. \\end{aligned}$$ Vậy tàu cảnh sát biển cần di chuyển về phía đông một khoảng tối đa $15\\sqrt{3}$ km.<br>- <strong>Đúng</strong>.<br>  Khoảng cách từ radar đến tàu đánh cá $B$ là $OB=\\sqrt{(-20)^2+15^2+0^2}=25$ km.<br> Vì $OB = 25 &lt; 30$ nên radar phát hiện ra tàu đánh cá tại vị trí $B$.<br>- <strong>Sai</strong>.<br>  Tàu thám hiểm ở vị trí $A$ có độ sâu $10$ km so với mặt nước biển (nằm dưới mặt phẳng $(Oxy)$) nên cao độ $z=-10$.<br> Tàu cách $O$ là $25$ km về phía nam (cùng hướng tia $Ox$) nên hoành độ $x=25$.<br> Tàu cách $O$ là $15$ km về phía tây (ngược hướng tia $Oy$) nên tung độ $y=-15$.<br> Suy ra tọa độ của tàu thám hiểm là $A(25;-15;-10)$.<br> Khoảng cách từ tàu thám hiểm đến radar là \\[OA=\\sqrt{25^2+(-15)^2+(-10)^2}=\\sqrt{950}=5\\sqrt{38}\\; \\text{km}.\\]<br>- <strong>Đúng</strong>.<br>  Ta có $OA=5\\sqrt{38} \\approx 30{,}82$ km.<br> Vì $OA &gt; 30$ km (vượt quá phạm vi theo dõi của radar là $30$ km) nên radar không phát hiện được tàu thám hiểm tại vị trí $A$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS59",
    "question": "Hình minh hoạ sơ đồ một ngôi nhà kho của ông Minh trong hệ trục toạ độ $Oxyz$, trong đó nền nhà, bốn bức tường và hai mái nhà đều là hình chữ nhật. Đơn vị của hệ trục là mét.<br><br><img src=\"data/12/2H2/im2H22/2H22_ex12_014.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Toạ độ điểm $A$ là $(4;0;0)$",
        "answer": true
      },
      {
        "text": "Toạ độ $\\overrightarrow{AH}=(4;5;3)$",
        "answer": false
      },
      {
        "text": "Thể tích của nhà kho là $70\\,\\left(\\text{m}^3\\right)$",
        "answer": true
      },
      {
        "text": "Ông Minh muốn thiết kế một dây đèn bên trong nhà kho theo phong cách Chrismas, dây đèn giăng từ vị trí $O$ kéo thẳng đến một điểm trên cây cột $BG$ rồi lại kéo thẳng về một điểm trên cây cột $OE$ rồi kéo thẳng đến vị trị $G$. Chi phí cho 1 mét dây đèn là $50\\,000$ đồng. Ông Minh đã tính toán để tiết kiệm nhất có thể và chỉ $970\\,000$ đồng cho công trình trên (<em>làm tròn kết quả đến hàng nghìn</em>)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Toạ độ điểm $A$ là $(4;0;0)$.<br> Vì điểm $A\\in Ox$ và hoành độ điểm $A$ bằng hoành độ điểm $B$.<br>- <strong>Sai</strong>.<br>  Ta có $C(0;5;0)$, $H(0;5;3)$, $F(4;0;3)$, $B(4;5;0)$, $\\overrightarrow{AH}=(0-4;5-0;3-0)=(-4;5;3)$.<br>- <strong>Đúng</strong>.<br>  Gọi $V$ là thể tích ngôi nhà.<br> Ta có $OA=EF=4$, $OE=3$, $OC=EH=5$, $EP=FP=\\sqrt{5}$.<br> Vậy\t$V=V_{OABC.EFGH}+V_{EFP.HGQ}=3\\cdot4\\cdot5+\\dfrac{1}{2}\\cdot1\\cdot4\\cdot5=70$ m$^3$.<br>- <strong>Sai</strong>.<br>  Gọi $M\\in BG$, $N\\in OE$. Trải phẳng các mặt, ta có $OM+MN+NG\\ge OG'$ với $OG'=\\sqrt{(3\\sqrt{41})^2+3^2}=\\sqrt{378}\\approx19{,}44$ m.<br>Chi phí nhỏ nhất $=50\\,000\\cdot\\sqrt{378}\\approx972\\,111$ đồng $\\approx972\\,000$ đồng.<br>Vì $972\\,000&gt;970\\,000$ nên không thể chỉ tốn $970\\,000$ đồng. Mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS60",
    "question": "Bạn Mạnh rất yêu thích tập Gym và bạn thường thực hiện bài tập ép ngực với máy tập cáp chéo có tên Tiếng Anh là \"Cable Crossover\". Thiết lập hệ trục tọa độ $Oxyz$ với đơn vị trên mỗi trục là mét có gốc tọa độ $O(0;0;0)$ nằm trên sàn ngay chính giữa hai trụ của máy tập, các trục $Ox, Oy, Oz$ được chọn như hình vẽ minh họa. Các ròng rọc cùa hai dây cáp được gắn tại các điểm $A(-1{,}3;0;1{,}9)$ và $B(1{,}3;0;1{,}9)$. Khi tập thì Mạnh kéo và giữ hai tay cầm tại điểm $D(0;0{,}7;1{,}2)$ và tại đó hai tay sẽ chịu tác dụng của hai lực căng $\\overrightarrow{T}_{1}$ và $\\overrightarrow{T}_{2}$. Biết rằng mức tạ được cài đặt sao cho độ lớn lực căng trên mỗi sợi dây cáp đều là $320$ N (kết quả tính được ở các ý đều làm tròn đến hàng phần trăm). Xét tính đúng sai của các khẳng định sau.<br><br><img src=\"data/12/2H2/im2H22/2H22_ex12_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Chiều dài đoạn dây cáp tính từ ròng rọc $A$ đến tay cầm $D$ bằng $1{,}63$ m",
        "answer": true
      },
      {
        "text": "Vectơ hợp lực tác dựng lên tay Mạnh có phương không song song với trục $Oz$",
        "answer": true
      },
      {
        "text": "Để giữ yên hai tay tại vị trí $D$ thì Mạnh phải tác dụng một lực giữ có độ lớn bằng $387{,}74$ N",
        "answer": true
      },
      {
        "text": "Để tối ưu hóa nhóm cơ ngực, huấn luyện viên yêu cầu Mạnh điều chinh vị trí giữ tay (thay đổi tung độ $y$ của điểm $D$) sao cho góc tạo bởi hai dây cáp tại $D$ đúng bằng $90^{\\circ}$. Biết cao độ của tay vẫn giữ nguyên ở $z_{D}=1{,}2$ m thì khi đó Mạnh cần giữ tay cầm ở vị trí sao cho $y_{D}=0{,}99$ m",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\overrightarrow{DA}=(-1{,}3;-0{,}7; 0{,}7)\\Rightarrow DA\\approx 1{,}63$ m.<br>- <strong>Đúng</strong>.<br>  Ta có: $\\overrightarrow{DB}=(1{,}3;-0{,}7;0{,}7)$; \t\t$\\overrightarrow{T}_{1}=k\\overrightarrow{DA}$ và $\\overrightarrow{T}_{2}=k\\overrightarrow{DB}$ (với $k&gt;0$)<br> Vectơ hợp lực tác dụng lên tay Mạnh:<br> $\\overrightarrow{T}_{1}+\\overrightarrow{T}_{2}=k(\\overrightarrow{DA}+\\overrightarrow{DB})=(0;-1{,}4k; 1{,}4k)$<br> $\\Rightarrow \\overrightarrow{T}_{1}+\\overrightarrow{T}_{2}$ không cùng phương $\\overrightarrow{k}=(0;0;1)$.<br>- <strong>Đúng</strong>.<br>  Lực giữ tay Mạnh có độ lớn bằng<br> $|\\overrightarrow{T}_{1}+\\overrightarrow{T}_{2}|=k|\\overrightarrow{DA}+\\overrightarrow{DB}|=k\\sqrt{0^2+(-1{,}4)^2+1{,}4^2}=1{,}4\\cdot k\\cdot \\sqrt{2}$.<br> Với $k=\\dfrac{|\\overrightarrow{T}_{1}|}{|\\overrightarrow{DA}|}=\\dfrac{320}{\\sqrt{1{,}3^2+0{,}7^2+0{,}7^2}}=\\dfrac{320}{\\sqrt{2{,}67}}$<br> $\\Rightarrow |\\overrightarrow{T}_{1}+\\overrightarrow{T}_{2}|=1{,}4\\cdot \\sqrt{2}\\cdot \\dfrac{320}{\\sqrt{2{,}67}}\\approx 387{,}74$.<br>- <strong>Sai</strong>.<br>  $D(0;y;1{,}2)$, $\\overrightarrow{DA}=(-1{,}3;-y;0{,}7)$, $\\overrightarrow{DB}=(1{,}3;-y;0{,}7)$.<br>$\\overrightarrow{DA}\\cdot\\overrightarrow{DB}=-1{,}3^2+y^2+0{,}7^2=0\\Leftrightarrow y^2=1{,}2\\Rightarrow y\\approx1{,}10$ m (y&gt;0).<br>Vậy $y_D\\approx1{,}10\\ne0{,}99$. Mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS61",
    "question": "Trong không gian với hệ trục tọa độ $Oxyz$, cho các điểm $A(3;-4;1)$, $B(1;1;-1)$ và $C(2;0;-3)$. Khi đó",
    "subQuestions": [
      {
        "text": "Hình chiếu vuông góc của điểm $A$ lên mặt phẳng $Oxy$ có tọa độ là $(0;0;1)$",
        "answer": false
      },
      {
        "text": "Tọa độ trọng tâm của tam giác $ABC$ là $(2;1;-1)$",
        "answer": false
      },
      {
        "text": "Biết rằng điểm $I$ thỏa mãn điều kiện $\\overrightarrow{IA}+3\\overrightarrow{IB} - 2\\overrightarrow{IC}=\\overrightarrow{0}$. Cao độ của điểm $I$ bằng $2$",
        "answer": true
      },
      {
        "text": "Xét $M$ là điểm thay đổi trên mặt phẳng $Oxy$. Giá trị nhỏ nhất của biểu thức $S=MA^2+3MB^2 - 2MC^2$ bằng $\\dfrac{13}{2}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Hình chiếu của $A$ lên mặt phẳng $Oxy$ có tọa độ là $A(3;-4;0)$.<br>- <strong>Sai</strong>.<br>  Tọa độ trọng tâm tam giác $ABC$: $\\begin{cases} &x_G = \\dfrac{x_A+x_B+x_C}{3} = 2\\\\ &y_G = \\dfrac{y_A+y_B+y_C}{3} = -1\\\\ &z_G = \\dfrac{z_A+z_B+z_C}{3}=-1 \\end{cases}$. Vậy $G(2;-1;-1)$.<br>- <strong>Đúng</strong>.<br>  - Gọi $I(x;y;z)$. Ta có $$\\begin{aligned} MA^2+3MB^2-2MC^2&={\\overrightarrow{MA}}^2+3{\\overrightarrow{MB}}^2-2{\\overrightarrow{MC}}^2\\\\ &=\\left(\\overrightarrow{MI}+\\overrightarrow{IA}\\right)^2+3\\left(\\overrightarrow{MI}+\\overrightarrow{IB}\\right)^2-2\\left(\\overrightarrow{MI}+\\overrightarrow{IC}\\right)^2\\\\ &=2MI^2+{IA}^2+3{IB}^2-2{IC}^2+2\\overrightarrow{MI}\\left(\\overrightarrow{IA}+3\\overrightarrow{IB}-2\\overrightarrow{IC}\\right). \\end{aligned}$$ Ta tìm được tọa độ điểm $I$ thỏa mãn hệ thức vectơ $$\\begin{aligned} \\overrightarrow{IA}+3\\overrightarrow{IB}-2\\overrightarrow{IC}=\\overrightarrow{0}&\\Leftrightarrow \\begin{cases}&3-x+3\\left(1-x\\right)-2\\left(2-x\\right)=0\\\\ &-4-y+3\\left(1-y\\right)-2\\left(0-y\\right)=0\\\\ &1-z+3\\left(-1-z\\right)-2\\left(-3-z\\right)=0\\end{cases}\\\\ &\\Leftrightarrow \\begin{cases}&x=1\\\\ &y=-\\dfrac{1}{2}\\\\ &z=2\\end{cases} \\end{aligned}$$<br><br>- Biểu thức $S$ nhỏ nhất khi và chỉ khi $MI$ nhỏ nhất nên $M$ là hình chiếu của $I$ lên mặt phẳng $(Oxy)$.<br> Vậy $I\\left(1;-\\dfrac{1}{2};2\\right)\\Rightarrow$ cao độ điểm $I$ bằng $2$.<br>- <strong>Đúng</strong>.<br>  - Gọi $I$ thỏa $\\overrightarrow{IA}+3\\overrightarrow{IB}-2\\overrightarrow{IC}=\\overrightarrow{0}\\Rightarrow I\\left(1;\\dfrac{-1}{2};2\\right)$.<br><br>- Ta có: $$\\begin{aligned} S&=MA^2+3MB^2 - 2MC^2\\\\ &= \\left(\\overrightarrow{MI}+\\overrightarrow{IA}\\right)^2+3\\left(\\overrightarrow{MI}+\\overrightarrow{IB}\\right)^2-2\\left(\\overrightarrow{MI}+\\overrightarrow{IC}\\right)^2\\\\ &=2MI^2+IA^2+3IB^2-2IC^2+2\\overrightarrow{MI}\\left(\\overrightarrow{IA}+3\\overrightarrow{IB}-2\\overrightarrow{IC}\\right)\\\\ &=2MI^2+IA^2+3IB^2-2IC^2. \\end{aligned}$$<br><br>- Vì $IA^2+3IB^2-2IC^2$ là một giá trị không đổi nên $S$ đạt giá trị nhỏ nhất khi và chỉ khi $MI$ đạt giá trị nhỏ nhất.<br><br>- $MI$ nhỏ nhất bằng $\\mathrm{d}\\left(I,\\left(Oxy\\right)\\right) = 2$.<br><br>- Khi đó, giá trị nhỏ nhất $S = 2\\cdot2^2-\\dfrac{3}{2}=\\dfrac{13}{2}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS62",
    "question": "Trong một gian triển lãm nghệ thuật, người ta thiết kế một không gian hình hộp chữ nhật $ABCD.A'B'C'D'$ có kích thước $AD=20$ m; $AB=10$ m; $AA'=5$ m và được gắn vào hệ trục tọa độ $Oxyz$ sao cho gốc tọa độ $O$ trùng với điểm $A$, tia $Ox$ chứa điểm $D$, tia $Oy$ chứa điểm $B$, tia $Oz$ chứa điểm $A'$ như hình vẽ. Đơn vị trên mỗi trục tọa độ là mét.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_026.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Người ta căng hai sợi dây cáp phát sáng vào hai đường chéo của hình hộp là $A'C$ và $BD'$. Giá sợi dây cáp là $100$ nghìn đồng/mét.",
    "subQuestions": [
      {
        "text": "Tọa độ các điểm $B(0;10;0)$, $C(20;10;0)$, $A'(0;0;5)$, $D'(20;0;5)$",
        "answer": true
      },
      {
        "text": "Tổng số tiền cần để mua hai sợi dây cáp phát sáng nói trên là $2\\,613$ nghìn đồng (làm tròn đến hàng đơn vị)",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(A'BC)$ có phương trình là $y+2z-10=0$",
        "answer": true
      },
      {
        "text": "Trên dây $A'C$ một điểm sáng $M$ chuyển động đều từ $A'$ đến $C$ với vận tốc $3$ m/s. Đồng thời, trên dây $BD'$, điểm sáng $N$ chuyển động đều từ $B$ đến $D'$ với vận tốc $2$ m/s. Tính từ khi hai điểm sáng bắt đầu chuyển động đến khi có ít nhất một điểm sáng về đích thì khoảng cách nhỏ nhất giữa hai điểm sáng $M$ và $N$ bằng $3{,}77$ m (làm tròn kết quả đến hàng phần trăm)",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Theo đề bài, ta có $A(0;0;0)$.<br><br>- Vì $AD=20$ nằm trên $Ox \\Rightarrow D(20;0;0)$.<br><br>- Vì $AB=10$ nằm trên $Oy \\Rightarrow B(0;10;0)$.<br><br>- Vì $AA'=5$ nằm trên $Oz \\Rightarrow A'(0;0;5)$.<br>Từ đó $C(20;10;0)$ và $D'(20;0;5)$.<br>- <strong>Sai</strong>.<br>  $A'C=BD'=\\sqrt{20^2+10^2+5^2}=\\sqrt{525}\\approx22{,}913$ m.<br>Tổng chi phí $=2\\cdot22{,}913\\cdot100\\approx4\\,583$ nghìn đồng, khác $2\\,613$ nghìn. Mệnh đề sai.<br>- <strong>Đúng</strong>.<br>  Mặt phẳng $(A'BC)$ qua $A'(0;0;5)$, $B(0;10;0)$, $C(20;10;0)$. <br> Ta có $\\overrightarrow{A'B}=(0;10;-5)$ và $\\overrightarrow{BC}=(20;0;0)$. <br> Vectơ pháp tuyến là $\\overrightarrow{n}=\\left[\\overrightarrow{A'B},\\overrightarrow{BC}\\right]=(0;-100;-200)=-100(0; 1; 2)$.<br> Khi đó ta có một vectơ pháp tuyến của mặt phẳng (A'BC) là $\\overrightarrow{n}_{1}=(0;1;2)$. <br> Phương trình mặt phẳng (A'BC) là $$0\\cdot(x-0)+1\\cdot(y-10)+2\\cdot(z-0)=0\\Leftrightarrow y+2z-10=0.$$<br>- <strong>Đúng</strong>.<br>  Trên dây $A'C$, một điểm sáng $M$ chuyển động đều từ $A'$ đến $C$ với vận tốc $3$ m/s nên sau $t$ giây ta có $$\\overrightarrow{A'M}=\\dfrac{3t}{A'C}\\cdot\\overrightarrow{A'C}=\\dfrac{3t}{\\sqrt{525}}\\overrightarrow{A'C}.$$ Suy ra tọa độ điểm $M$ tại thời điểm $t$ là $M\\left(\\dfrac{60t}{\\sqrt{525}};\\dfrac{30t}{\\sqrt{525}};5-\\dfrac{15t}{\\sqrt{525}}\\right)$.<br> Trên dây $BD'$, điểm sáng $N$ chuyển động đều từ $B$ đến $D'$ với vận tốc $2$ m/s nên sau $t$ giây ta có $$\\overrightarrow{BN}=\\dfrac{2t}{BD'}\\cdot\\overrightarrow{BD'}=\\dfrac{2t}{\\sqrt{525}}\\overrightarrow{BD'}.$$ Suy ra tọa độ điểm $N$ tại thời điểm $t$ là $N\\left(\\dfrac{40t}{\\sqrt{525}};10-\\dfrac{20t}{\\sqrt{525}};\\dfrac{10t}{\\sqrt{525}}\\right)$.<br> Do $M$ có vận tốc lớn hơn $N$ trong khi quãng đường hai dây bằng nhau ($A'C=BD'=\\sqrt{525}$) nên điểm sáng $M$ sẽ về đích trước. Thời gian để $M$ về đích là $$t_0=\\dfrac{\\sqrt{525}}{3}\\approx7{,}64\\text{ (s)}.$$ Bài toán tương đương với việc tìm $t\\in[0;t_0]$ để độ dài đoạn $MN$ nhỏ nhất $$\\begin{aligned} MN&=\\sqrt{\\left(\\dfrac{40t-60t}{\\sqrt{525}}\\right)^2+\\left(10-\\dfrac{20t+30t}{\\sqrt{525}}\\right)^2+\\left(\\dfrac{10t+15t}{\\sqrt{525}}-5\\right)^2}\\\\ &=\\sqrt{\\dfrac{400t^2}{525}+\\left(10-\\dfrac{50t}{\\sqrt{525}}\\right)^2+\\left(\\dfrac{25t}{\\sqrt{525}}-5\\right)^2}\\\\ &=\\sqrt{\\dfrac{3\\,525}{525}t^2-\\dfrac{1\\,250t}{\\sqrt{525}}+125} \\end{aligned}$$ Xét hàm số bậc hai dưới dấu căn, ta tìm được giá trị nhỏ nhất $$MN_{\\min}\\approx3{,}77\\text{ m khi }t\\approx 4{,}063\\text{ s (thỏa mãn }t\\leq t_0).$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS63",
    "question": "Một phòng trưng bày nghệ thuật dạng hình hộp chữ nhật $ABCD.A'B'C'D'$ với kích thước: dài $AD = 8$ mét, rộng $AB = 6$ mét, cao $AA'= 4$ mét. Kỹ sư thiết lập hệ trục tọa độ $Oxyz$ để số hóa căn phòng như sau: Gốc tọa độ $O(0;0;0)$ đặt tại A; các trục Ox, Oy, Oz lần lượt trùng với các cạnh $AD$, $AB$, $AA'$ (chiều dương lần lượt từ $A$ đến $D$, từ $A$ đến $B$, từ $A$ đến $A')$ (Đơn vị trên các trục tọa độ là mét). Hệ thống giám sát gồm một camera gắn tại tâm $S$ của mặt trần $A'B'C'D'$ và một cảm biến hồng ngoại gắn tại đỉnh $C$ (đỉnh đối diện với $A$ trên mặt sàn $ABCD)$. Camera đang giám sát một bức tranh được treo chính giữa bức tường $CDD'C'$, gọi $P$ là tâm của bức tranh (cũng là tâm của hình chữ nhật $CDD'C')$.",
    "subQuestions": [
      {
        "text": "Tọa độ vị trí lắp đặt camera là $S(4;3;4)$",
        "answer": true
      },
      {
        "text": "Khoảng cách từ camera đến tâm bức tranh $P$ là $5$ mét",
        "answer": false
      },
      {
        "text": "Có yêu cầu góc tạo bởi trục thẳng đứng của giá treo camera (phương song song $Oz$, hướng xuống) và tia nhìn từ camera đến tâm bức tranh ($SP$) phải nhỏ hơn $60^\\circ$. Thiết kế hiện tại thỏa mãn yêu cầu này",
        "answer": false
      },
      {
        "text": "Để tránh chói camera, kỹ sư cho lắp thêm một trục đỡ đèn chiếu sáng nghệ thuật, trục đèn được chọn vuông góc với mặt phẳng $(SPC)$. Chọn một vectơ $\\overrightarrow{u}$ có giá song song với trục đèn, ta có $\\overrightarrow{u}$ ($3$;$4$;$6$)",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2H2/im2H22/2H22_ex12_031.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Đúng</strong>.<br>  Chọn hệ trục tọa độ như hình vẽ, ta có $A'(0;0;4)$, $C'(8;6;4)$ $\\Rightarrow$ $S(4;3;4)$.<br>- <strong>Sai</strong>.<br>  Có $D(8;0;0)$, $C'(8;6;4)$ $\\Rightarrow$ $P(8;3;2)$ $\\Rightarrow$ $SP = 2\\sqrt{5}$.<br>- <strong>Sai</strong>.<br>  Ta có $A(0;0;0)$, $C(8;6;0)$ $\\Rightarrow$ $S'(4;3;0)$ $\\Rightarrow$ $\\overrightarrow{SS'} = (0;0;-4)$. <br> Mà $\\overrightarrow{SP} = (4;0;-2)$ nên $\\cos(\\overrightarrow{SP},\\overrightarrow{SS'}) = \\dfrac{\\sqrt{5}}{5} \\approx 63,43^\\circ$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{SP} = (4;0;-2)$, $\\overrightarrow{SC} = (4;3;-4)$ $\\Rightarrow$ $[\\overrightarrow{SP};\\overrightarrow{SC}] = (6;8;12)$. <br> Chọn $\\overrightarrow{u} = \\dfrac{1}{2}[\\overrightarrow{SP};\\overrightarrow{SC}] = (3;4;6)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS64",
    "question": "Một kĩ sư xây dựng muốn thăm dò một mảnh đất dốc hình tứ giác $ABCD$ để sử dụng cho dự án phát triển bất động sản nhà ở. Kĩ sư sử dụng một thiết bị điện tử để xác định vị trí bốn góc của khu đất. Tọa độ của bốn vị trí góc của khu đất lần lượt $A(15; 25; 9)$, $B(20; 5; 5)$, $C(-10; -10; 2)$ và $D(-15; 10; 6)$ trong một hệ tọa độ $Oxyz$ mà gốc tọa độ $O$ trùng với vị trí đứng của kĩ sư, mặt đất nằm ngang trùng với mặt phẳng tọa độ $(Oxy)$ <em>(đơn vị trên các trục tính theo mét)</em>.",
    "subQuestions": [
      {
        "text": "Tọa độ của véc-tơ $\\overrightarrow{AB} = (-5; 20; 4)$",
        "answer": false
      },
      {
        "text": "Mảnh đất $ABCD$ có dạng hình bình hành",
        "answer": true
      },
      {
        "text": "Mặt phẳng chứa mảnh đất $ABCD$ tạo với mặt đất nằm ngang một góc nhỏ hơn $10^\\circ$",
        "answer": false
      },
      {
        "text": "Diện tích của mảnh đất $ABCD$ (làm tròn kết quả đến hàng đơn vị) là $688$ m$^2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AB} = (5; -20; -4)$.<br>- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{AC} = (-25; -35; -7)$ suy ra $A$, $B$, $C$ không thẳng hàng.<br> Lại có $\\overrightarrow{DC} = (5; -20; -4)$. <br> Suy ra $\\overrightarrow{AB} = \\overrightarrow{DC}$.<br> Do đó $ABCD$ là hình bình hành.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AB} = (5; -20; -4)$ và $\\overrightarrow{AD} = (-30; -15; -3)$.<br> Mặt phẳng $(ABCD)$ có vectơ pháp tuyến $\\overrightarrow{n} = \\left[\\overrightarrow{AB}; \\overrightarrow{AD}\\right] = (0; 135; -675)$.<br> Mặt phẳng $(Oxy)$ có vectơ pháp tuyến $\\overrightarrow{k} = (0; 0; 1)$.<br> Khi đó ta có $\\cos\\left((Oxy), (ABCD)\\right) = \\dfrac{\\left|\\overrightarrow{n} \\cdot \\overrightarrow{k}\\right|}{\\left|\\overrightarrow{n}\\right| \\cdot \\left|\\overrightarrow{k}\\right|} = \\dfrac{5}{\\sqrt{26}}$.<br> Suy ra góc $\\left((Oxy), (ABCD)\\right) \\approx 11{,}3^\\circ$.<br>- <strong>Đúng</strong>.<br>  Vì $ABCD$ là hình bình hành nên $S = \\left|\\left[\\overrightarrow{AB}; \\overrightarrow{AD}\\right]\\right| = 135\\sqrt{26} \\approx 688$ m$^2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS65",
    "question": "Để kỷ niệm ngày thành lập quân đội Nhân Dân Việt Nam, một đơn vị tổ chức lễ duyệt binh chào mừng. Trong buổi lễ vị trí $A$ là cột cờ, $B$ là nơi tập kết đơn vị duyệt binh. Các khinh khí cầu tại vị trí $D$ mang cờ Đảng, tại vị trí $C$ mang cờ tổ quốc luôn giữ cố định vị trí. Một Flycam bay trong không gian để ghi lại hình ảnh của buổi lễ. Chọn hệ trục tọa độ $Oxyz$ gốc tọa độ tại $A$, điểm $B$ thuộc tia $Ox$, điểm $D$ thuộc tia $Oz$, mặt phằng $(Oxy)$ trùng với mặt đất (Hình vẽ dưới đây). Biết tọa độ của điểm $B(50;0;0)$, khoảng cách giữa các vị trí $AC=BD=BC=100$, $CD=50$ và các đơn vị trong không gian là mét.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_037.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ của $C(a;b;c)$ với $a\\cdot b\\cdot c=93\\,750$",
        "answer": true
      },
      {
        "text": "Thời điểm Flycam tại vị trí $M(x;0;z)$ và cách đều các điểm $A$, $B$, $D$ thì cách mặt đất $25\\sqrt{3}$ (m)",
        "answer": true
      },
      {
        "text": "Số đo góc $\\widehat{CBD}&gt;30^\\circ$",
        "answer": false
      },
      {
        "text": "Tọa độ của $D(0;0;50\\sqrt{3})$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $\\begin{cases} &AC=100\\\\ &BC=100\\\\ &CD=50\\end{cases} \\Leftrightarrow \\begin{cases}&a^2+b^2+c^2=100^2\\\\ &(a-50)^2+b^2+c^2=100^2\\\\ &a^2+b^2+\\left(c-50\\sqrt{3}\\right)^2=50^2\\end{cases} \\Leftrightarrow \\begin{cases} &a=25\\\\ &b=25\\sqrt{3}\\\\ &c=50\\sqrt{3}\\end{cases}$ (Chú ý: Từ hình vẽ ta có $b&gt;0$).<br> Suy ra $ C\\left(25;25\\sqrt{3};50\\sqrt{3}\\right)$. Vậy $a\\cdot b\\cdot c=93\\,750$.<br>- <strong>Đúng</strong>.<br>  Ta có $$\\begin{aligned} MA=MB=MD&\\Leftrightarrow& MA^2=MB^2=MD^2\\\\ &\\Leftrightarrow&x^2+z^2=\\left(x-50\\right)^2+z^2=x^2+\\left(z-50\\sqrt{3}\\right)^2\\\\ &\\Leftrightarrow&\\begin{cases} &x=25\\\\ &z=25\\sqrt{3}.\\end{cases} \\end{aligned}$$ Vậy $ M\\left(25;0;25\\sqrt{3}\\right)$ nên Flycam cách mặt đất $25\\sqrt{3}$ (m).<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{BC}=\\left(-25;25\\sqrt{3};50\\sqrt{3}\\right)=25\\left(-1;\\sqrt{3};2\\sqrt{3}\\right)$; $\\overrightarrow{BD}=\\left(-50;0;50\\sqrt{3}\\right)=50\\left(-1;0;\\sqrt{3}\\right)$.<br> Suy ra $\\cos\\widehat{CBD}=\\cos\\left(\\overrightarrow{BC},\\overrightarrow{BD}\\right)=\\dfrac{1+6}{\\sqrt{16}\\cdot\\sqrt{4}}=\\dfrac{7}{8}\\Rightarrow\\widehat{CBD}\\approx 28{,}96^\\circ&lt;30^\\circ$.<br>- <strong>Đúng</strong>.<br>  $D$ thuộc tia $Oz$, $AD=\\sqrt{BD^2-BA^2}=\\sqrt{100^2-50^2}=50\\sqrt{3}$ $\\Rightarrow D\\left(0;0;50\\sqrt{3}\\right)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS66",
    "question": "Xét hai chiếc khinh khí cầu bay lên từ cùng một điểm trong cùng một ngày. Lúc $9$ h sáng, chiếc thứ nhất đang ở vị trí $A$ cách điểm xuất phát $2 \\text{ km}$ về phía nam và $1 \\text{ km}$ về phía đông, đồng thời cách mặt đất $0{,}5 \\text{ km}$. Chiếc thứ hai đang ở vị trí $B$ nằm cách điểm xuất phát $1 \\text{ km}$ về phía bắc và $1{,}5 \\text{ km}$ về phía tây đồng thời cách mặt đất $0{,}8 \\text{ km}$. Chọn hệ trục tọa độ $Oxyz$ với gốc $O$ đặt tại điểm xuất phát của hai khinh khí cầu, mặt phẳng $(Oxy)$ trùng với mặt đất, trục $Ox$ hướng về phía nam, trục $Oy$ hướng về phía đông và trục $Oz$ hướng thẳng đứng lên trời (như hình vẽ) <em>Lấy đơn vị đo trên mỗi trục là km</em>.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_041.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ của khinh khí cầu thứ nhất lúc $9 \\text{ h}$ sáng là $A(2;1;0{,}5)$",
        "answer": true
      },
      {
        "text": "Lúc $9 \\text{ h}$ sáng, khinh khí cầu thứ hai cách vị trí xuất phát hơn $2 \\text{ km}$",
        "answer": false
      },
      {
        "text": "Lúc $9 \\text{ h}$ sáng, khoảng cách giữa hai chiếc khinh khí cầu là $3{,}92 \\text{ km}$ <em>(làm tròn đến hàng phần trăm)</em>",
        "answer": true
      },
      {
        "text": "Từ $9 \\text{ h}$ sáng đến $9 \\text{h}10'$ sáng, khinh khí cầu thứ nhất đi thẳng về hướng Nam với vận tốc $50 \\text{km/h}$ và độ cao không đổi để đến điểm $M$, khinh khí cầu thứ hai chuyển động thẳng đều đến điểm $N$ với vận tốc $60 \\text{ km/h}$, biết vectơ $\\overrightarrow{BN}$ cùng hướng với vectơ $\\overrightarrow{u}(2;2;1)$. Bỏ qua lực cản của gió, khoảng cách $MN$ là $4{,}66 \\text{ km}$ <em>(làm tròn đến hàng phần trăm)</em>",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vị trí của khinh khí cầu thứ nhất lúc $9$ giờ sáng là $A(x_A;y_A;z_A)$, biết $A$ cách điểm xuất phát<br><br>- $2 \\text{ km}$ về phía Nam nên $x_A = 2$.<br><br>- $1 \\text{ km}$ về phía Đông nên $y_A = 1$.<br><br>- cách mặt đất $0{,}5 \\text{ km}$ nên $z_A = 0{,}5$.<br>Vậy $A(2;1;0{,}5)$.<br>- <strong>Sai</strong>.<br>  Dựa vào giả thiết, ta có $B(-1;-1{,}5;0{,}8)$ nên $ OB = \\dfrac{\\sqrt{389}}{10} \\approx 1{,}97 &lt; 2$.<br>- <strong>Đúng</strong>.<br>  Lúc $9$ giờ sáng, khoảng cách giữa hai khinh khí cầu bằng $$AB = \\sqrt{(-3)^2 + (-2{,}5)^2 + 0{,}3^2} \\approx 3{,}92 \\text{(km)}.$$<br>- <strong>Sai</strong>.<br>  Để tính được khoảng cách $MN$, ta cần tìm tọa độ của điểm $M$ và $N$ lúc $9$ giờ $10$ phút sáng.<br><br>- Tìm điểm $M(x_M;y_M;z_M)$.<br> Khinh khí cầu thứ nhất đi chuyển thẳng đều về phía Nam (tức tung độ của khinh khí cầu không đổi nên $y_M = 1$) với vận tốc $50 \\text{km/h}$ suy ra từ $9$ giờ sáng đến $9$ giờ $10$ phút sáng, khinh khí cầu đi được $50 \\cdot \\dfrac{1}{6} = \\dfrac{25}{3} \\text{ (km)}$.<br> Ta có $x_M = 2 + \\dfrac{25}{3} = \\dfrac{31}{3}$, độ cao không đổi nên $z_M = 0{,}5$.<br> Vậy điểm $M\\left(\\dfrac{31}{3}; 1; 0{,}5\\right)$.<br><br>- Tìm điểm $N(x_N;y_N;z_N)$.<br> Vì vectơ $\\overrightarrow{BN}$ cùng hướng với vectơ $\\overrightarrow{u}(2;2;1)$, nên suy ra $\\overrightarrow{BN} = k \\cdot \\overrightarrow{u}$, $(k &gt; 0)$.<br> Khinh khí cầu thứ hai chuyển động thẳng đều đến điểm $N$ với vận tốc $60 \\text{ km/h}$, nên trong khoảng thời gian từ $9$ giờ sáng đến $9$ giờ $10$ phút sáng khinh khí cầu đi được $1$ đoạn $BN = 60 \\cdot \\dfrac{1}{6} = 10 \\text{ (km)}$ nên $k\\sqrt{2^2 + 2^2 + 1^2} = 10 \\Leftrightarrow k = \\dfrac{10}{3}$.<br> Ta có $\\overrightarrow{BN} = \\left(x_N + 1; y_N + 1{,}5; z_N - 0{,}8\\right) = \\left(\\dfrac{20}{3}; \\dfrac{20}{3}; \\dfrac{10}{3}\\right)$. <br> Vậy $N\\left(\\dfrac{17}{3}; \\dfrac{31}{6}; \\dfrac{62}{15}\\right)$.<br>Vậy $MN = \\sqrt{\\left(\\dfrac{17}{3} - \\dfrac{31}{3}\\right)^2 + \\left(\\dfrac{31}{6} - 1\\right)^2 + \\left(\\dfrac{62}{15} - 0{,}5\\right)^2} \\approx 7{,}23$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS67",
    "question": "Một kho chứa hàng có dạng hình lăng trụ đứng $ABFPE.DCGQH$ với $ABFE$ là hình chữ nhật và $EFP$ là tam giác cân tại $P$. Gọi $T$ là trung điểm của $DC$. Các kích thước của kho chứa lần lượt là $AB=6$ m; $AE=5$ m; $AD=8$ m; $QT=7$ m. Người ta mô hình hóa nhà kho bằng cách chọn hệ trục tọa độ có gốc tọa độ là điểm $O$ thuộc đoạn $AD$ sao cho $OA=2$ m và các trục tọa độ tương ứng như hình vẽ dưới đây.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_043.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $Q$ là $\\left(-6;3;5\\right)$",
        "answer": false
      },
      {
        "text": "Vectơ $\\overrightarrow{OC}$ có tọa độ là $\\left(-6;6;0\\right)$",
        "answer": true
      },
      {
        "text": "Người ta muốn lắp camera quan sát trong nhà kho tại vị trí trung điểm của $FG$ và đầu thu dữ liệu đặt tại vị trí $O$. Người ta thiết kế đường dây cáp nối từ $O$ đến $K$ sau đó nối thẳng đến camera. Độ dài đoạn cáp nối tối thiểu bằng $5+2\\sqrt{10}$ m",
        "answer": true
      },
      {
        "text": "Mái nhà được lợp bằng tôn Hoa Sen, giá tiền mỗi mét vuông tôn là $130\\,000$ đồng. Số tiền cần bỏ ra để mua tôn lợp mái nhà là $3\\,750\\,000$ đồng <em>(không kể hao phí do việc cắt và ghép các miếng tôn, làm tròn kết quả đến hàng nghìn)</em>",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/12/2H2/im2H22/2H22_ex12_044.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Sai</strong>.<br>  Kẻ $TM \\bot Oy, CN\\bot Oy$. Vì $T$ là hình chiếu của $Q$ lên $\\left(Oxy\\right)$ nên<br>$ \\begin{cases}&x_Q=x_T=-OD=-\\left(AD-OA\\right)=-6\\\\&y_Q=y_T=OM=\\dfrac{AB}{2}=3\\\\& z_Q=QT=7.\\end{cases}$<br>Suy ra $Q\\left(-6;3;7 \\right)$.<br>- <strong>Đúng</strong>.<br>  Vì $C\\in \\left(Oxy\\right)$ nên $z_C=0$. Ta có $\\begin{cases}&x_C=-OD=-6 \\\\&{{y}_C}=ON=AB=6.\\end{cases}$<br> Suy ra $C\\left(-6;6;0 \\right)$ nên $\\overrightarrow{OC}=\\left(-6;6;0\\right)$.<br>- <strong>Đúng</strong>.<br>  Ta có $z_K=OK=AE=5\\Rightarrow K\\left(0;0;5\\right)$.<br> Vì $B,C$ lần lượt là hình chiếu của $F, G$ lên $\\left(Oxy\\right)$ nên $F\\left(2;6;5\\right)$ và $G\\left(-6;6;5\\right)$.<br> Gọi $L$ là trung điểm của $FG$ nên $L\\left(-2;6;5\\right)$$\\Rightarrow $ $KL=2\\sqrt{10}$.<br> Độ dài đoạn cáp tối thiểu từ $O$ đến $K$ sau đó nối thẳng đến camera là \\[OK+KL=5+2\\sqrt{10}\\,\\text{(m)}.\\]<br>- <strong>Sai</strong>.<br>  $FG=\\sqrt{\\left(-6-2\\right)^2+\\left(6-6\\right)^2+\\left(5-5 \\right)^2}=8$ m.<br> $QG=\\sqrt{\\left(-6+6\\right)^2+\\left(3-6\\right)^2+\\left(7-5\\right)^2}=\\sqrt{13}$ m.<br> Suy ra $S_{FGQP}=FG\\cdot QG=8\\sqrt{13}\\left(m^2\\right)$.<br> Diện tích lợp tôn mái nhà là $S=2S_{FGQP}=16\\sqrt{13}\\left(\\text{m}^2\\right)$.<br> Số tiền cần bỏ ra để mua tôn lợp mái nhà là $16\\sqrt{13}\\cdot 130\\,000\\approx7\\,500\\,000$ (đồng).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS68",
    "question": "Một tòa nhà được thiết kế để làm $2$ phòng dạy học có trang bị máy chiếu. Mái nhà là dạng mái vát hình chữ nhật $CDFE$ như hình vẽ. Chiều dài của mỗi phòng học là $OA=40$ m và chiều rộng là $OB = 30$ m, chiều cao các bức tường $BD=12$ m, $EA=8$ m. Từ vị trí $P$ cách $B$ một khoảng $10$ m, người ta xây các bậc thang cao dần về phía cuối của phòng học để đặt các dãy bàn ghế học sinh trên các bậc thang đó. Chiều rộng mỗi bậc thang là $3$ m và chiều cao mỗi bậc thang là $30$ cm. Chủ tòa nhà muốn lắp giá treo máy chiếu tại vị trí $I$ là giao điểm của $DE$ và $CF$ như hình vẽ, vuông góc với mặt sàn sao cho không vướng vào đầu học sinh khi học sinh đứng tại bậc thang ngay dưới máy chiếu (chiều cao học sinh đó là $1{,}8$ m) và cũng không che khuất tầm nhìn của học sinh ngồi ở hàng ghế sau cùng, tại vị trí $X$ trung điểm đoạn $SQ$ theo phương vuông góc bức tường $OBDC$ (chiều cao mắt học sinh so với bậc thang tại đó là $1{,}3$ m). Xét hệ trục tọa độ $Oxyz$, với $O$ là gốc tọa độ, điểm $A \\in Ox$, $B \\in Oy$, $C \\in Oz$ có tọa độ không âm, đơn vị trên mỗi trục là mét.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_045.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$C(0;0;12)$",
        "answer": true
      },
      {
        "text": "Tọa độ hình chiếu vuông góc của điểm $I$ lên mặt phẳng $Oxy$ là $I'(20;10;0)$",
        "answer": false
      },
      {
        "text": "$CFB \\approx 39^\\circ$ (kết quả làm tròn đến hàng đơn vị của độ)",
        "answer": false
      },
      {
        "text": "Tổng độ dài thanh treo máy chiếu và cả thân máy chiếu lớn nhất là $5{,}7$ m",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Vì $OBDC$ là hình chữ nhật nên $OC=BD=12$ m. <br> Do $C \\in Oz$, $z_C \\ge 0$ nên $C(0;0;12)$.<br>- <strong>Sai</strong>.<br>  Ta có $OB = 30$ m, $y_B \\ge 0$ và $B \\in Oy$ nên $B(0;30;0)$.<br> Vì $BD=12$m, $BD \\parallel Oz$ nên $D(0;30;12)$.<br> Do $A \\in Ox, x_A \\ge 0$ và $OA=40$ m nên $A(40;0;0)$.<br> Vì $EA=8$ m, $EA\\parallel Oz$ nên $E(40;0;8)$.<br> Do tứ giác $CDFE$ là hình chữ nhật nên $I$ là trung điểm của $DE$ suy ra $I(20;15;10)$.<br> Vậy hình chiếu của $I$ lên mặt phẳng $(Oxy)$ là $I'(20;15;0)$.<br>- <strong>Sai</strong>.<br>  Ta có tọa độ các điểm là $C(0;0;12)$, $F(40;30;8)$, $B(0;30;0)$.<br> Suy ra $\\overrightarrow{FC}=(-40;-30;4)$ và $\\overrightarrow{FB}=(-40;0;-8)$. Nên $$\\cos\\widehat{CFB} = \\dfrac{\\overrightarrow{FC} \\cdot \\overrightarrow{FB}}{|\\overrightarrow{FC}| \\cdot |\\overrightarrow{FB}|} = \\dfrac{-40\\cdot(-40)-30\\cdot 0+4\\cdot(-8)}{\\sqrt{(-40)^2+(-30)^2+4^2}\\sqrt{(-40)^2+0^2+(-8)^2}} = 49\\sqrt{\\dfrac{2}{8177}}.$$ Vậy $\\widehat{CFB} \\approx 40^\\circ$.<br>- <strong>Đúng</strong>.<br>  Ta có tổng chiều rộng các bậc thang là $40-10=30$ m, chiều rộng mỗi bậc thang là $3$ m nên ta sẽ có tổng cộng $10$ bậc thang.<br> Ta có hoành độ điểm $I$ là $20$ nên cách bức tường $OBDC$ một khoảng cách là $20$ m. Như vậy hình chiếu vuông góc của $I$ nằm trên bậc thang thứ $4$ (bậc thang thứ $4$ nằm từ mét thứ $19$ tới mét thứ $22$ tính từ bức tường $OBDC$).<br> Suy ra tổng chiều cao của bậc thang thứ $4$ và học sinh là $4 \\cdot 0,3+1,8=3$ (m).<br> Chiều cao tính từ mặt sàn tới tầm mắt học sinh ngồi hàng cuối cùng ở bậc thang thứ $10$ là $10 \\cdot 0{,}3+1{,}3=4{,}3$ (m).<br> Vì $4{,}3&gt;3$ và cao độ điểm $I$ là $10$ nên tổng độ dài thanh treo máy chiếu và cả thân máy chiếu lớn nhất là $10-4{,}3=5{,}7$ (m).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2H226DS69",
    "question": "Một chiếc trực thăng $H$ cất cánh từ một sân bay. Xét hệ trục tọa độ $Oxyz$, có gốc tọa độ $O$ là chân tháp điều khiển sân bay, trục $O x$ là hướng Đông, trục $Oy$ là hướng Bắc và trục $Oz$ là trục thẳng đứng, đơn vị trên mỗi trục là kilômét. Trực thăng cất cánh từ điểm $G$ trên mặt đất (mặt phẳng $Oxy$). Vectơ $\\overrightarrow{u}$ chỉ vị trí của trực thăng tại thời điểm $t$ phút sau khi cất cánh $(t \\geq 0)$ có tọa độ là $\\overrightarrow{u}=\\left(1+t ; \\dfrac{1}{2}+2 t ; 2 t\\right)$. Một hòn đảo ở vị trí $D(150 ; 115 ; 0)$ (hình vẽ minh hoạ). Gọi $M$ là vị trí của máy bay $H$ tại thời điểm $t$ phút sau khi cất cánh.<br><img src=\"data/12/2H2/im2H22/2H22_ex12_046.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tọa độ điểm $M$ tại thời điểm $t$ phút sau khi máy bay $H$ cất cánh là $M\\left(1+t;\\dfrac{1}{2}+2t;2t\\right)$",
        "answer": true
      },
      {
        "text": "Tọa độ điểm $G$ là $\\left(1;\\dfrac{1}{2};0\\right)$",
        "answer": true
      },
      {
        "text": "Tọa độ của vectơ $\\overrightarrow{MD}$ là $\\left(149-t;\\dfrac{129}{2}-2t;-2t\\right)$",
        "answer": false
      },
      {
        "text": "Máy bay $H$ bay đến vị trí $M(x_0;y_0;z_0)$ thì khoảng cách từ máy bay đến $D$ là nhỏ nhất. Khi đó $20(x_0+y_0+z_0)=4\\,320$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Gắn vào hệ trục tọa độ $Oxyz$, ta có: $\\overrightarrow{OM}=\\overrightarrow{u}=\\left(1+t;\\dfrac{1}{2}+2t;2t \\right)$.<br> Khi đó vị trí máy bay $H$ ở thời điểm $t$ phút sau khi máy bay cất cánh là $M\\left(1+t;\\dfrac{1}{2}+2t;2t \\right)$.<br>- <strong>Đúng</strong>.<br>  Khi máy bay bắt đầu khởi hành, với $t=0\\Rightarrow M \\equiv G\\left(1;\\dfrac{1}{2};0\\right)$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{MD}=\\left(149-t;\\dfrac{229}{2}-2t;-2t\\right)$.<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{MG}=t\\overrightarrow{u}$, $\\overrightarrow{u}=(1;2;2)$.<br> Khoảng cách từ máy bay $H$ đến $D$ nhỏ nhất khi và chỉ khi <br> $MG \\perp MD$ $\\Leftrightarrow$ $\\overrightarrow{u}\\cdot \\overrightarrow{MD}=0 \\Leftrightarrow 149-t+229-4t-4t=0 \\Leftrightarrow t=42$.<br> Suy ra $M \\left(43;\\dfrac{169}{2};84\\right)$. Vậy $T=20(x_0+y_0+z_0)=4\\,230$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
