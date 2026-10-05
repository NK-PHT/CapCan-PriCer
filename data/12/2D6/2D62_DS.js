window.dungSai2D62 = [
  {
    "id": "2D622DS1",
    "question": "Một lớp có $70\\%$ học sinh là nữ. Tỉ lệ học sinh nữ đạt danh hiệu học sinh giỏi là $35\\%$, tỉ lệ học sinh nam đạt danh hiệu học sinh giỏi là $60\\%$. Chọn ngẫu nhiên một học sinh của lớp đó. Gọi $A$ là biến cố “ Học sinh được chọn là nữ” và $B$ là biến cố “ Học sinh được chọn đạt danh hiệu học sinh giỏi”.",
    "subQuestions": [
      {
        "text": "Xác suất của biến cố $\\overline{A}$ là $0{,}7$",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố $B$ là $0{,}425$",
        "answer": true
      },
      {
        "text": "$A$ và $B$ là hai biến cố độc lập",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố $A$ với điều kiện $B$ bằng $\\dfrac{5}{7}$",
        "answer": false
      }
    ],
    "explain": "<br>- Vì $\\mathrm{P}(A)=0{,}7$ nên $\\mathrm{P}(\\overline{A})=0{,}3$.<br>- Ta có $\\mathrm{P}(B|A)=0{,}35$ và $\\mathrm{P}(B|\\overline{A})=0{,}6$.<br>  Khi đó $\\mathrm{P}(B)=\\mathrm{P}(A)\\cdot \\mathrm{P}(B|A)+\\mathrm{P}(\\overline{A})\\cdot \\mathrm{P}(B|\\overline{A})=0{,7}\\cdot 0{,}35+0{,}3\\cdot 0,6=0{,}425$.<br>- Để $A$ và $B$ độc lập thì $\\mathrm{P}(B|A)=\\mathrm{P}(B)$.<br>  Vì $\\mathrm{P}(B|A) \\ne \\mathrm{P}(B)$ nên $A$ và $B$ không độc lập.<br>- $\\mathrm{P}(A|B)=\\dfrac{\\mathrm{P}(B|A)\\cdot \\mathrm{P}(A)}{\\mathrm{P}(B)}=\\dfrac{0{,}35 \\cdot 0{,}7}{0{,}425}=\\dfrac{49}{85}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D622DS2",
    "question": "Một hộp có $12$ quả bóng màu xanh, $7$ quả bóng màu đỏ; các quả bóng có kích thước và khối lượng như nhau. Lấy ngẫu nhiên lần lượt hai quả bóng trong hộp, lấy không hoàn lại. Xét các biến cố:  <br>- $A$: “ Lần thứ hai lấy được quả màu đỏ”.<br>- $B$: “ Lần thứ nhất lấy được quả màu xanh”.",
    "subQuestions": [
      {
        "text": "${P}(B)=\\dfrac{7}{9}$",
        "answer": false
      },
      {
        "text": "${P}\\left(A\\cap B\\right)=\\dfrac{28}{57}$",
        "answer": false
      },
      {
        "text": "${P}\\left(A\\mid B\\right)=\\dfrac{7}{18}$",
        "answer": true
      },
      {
        "text": "${P}\\left(\\overline{A}\\right)=\\dfrac{12}{19}$",
        "answer": true
      }
    ],
    "explain": "<br>- Có ${P}(B)=\\dfrac{12}{19}$.<br>- Có ${P}\\left(A\\cap B\\right)=\\dfrac{12}{19}\\cdot\\dfrac{7}{18}=\\dfrac{14}{57}$.<br>- ${P}\\left(A\\mid B\\right)=\\dfrac{{P}\\left(A\\cap B\\right)}{{P}(B)}=\\dfrac{7}{18}$.<br>- ${P}\\left(\\overline{A}\\right)={P}(B)\\cdot{P}\\left(\\overline{A}\\mid B\\right)+{P}\\left(\\overline{B}\\right)\\cdot{P}\\left(\\overline{A}\\mid \\overline{B}\\right)=\\dfrac{12}{19}\\cdot\\dfrac{11}{18}+\\dfrac{7}{19}+\\dfrac{12}{18}=\\dfrac{12}{19}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS3",
    "question": "Trong một xưởng máy, số linh kiện do cơ sở I sản xuất chiếm $61 \\%$, số linh kiện do cơ sở II sản xuất chiếm $39 \\%$. Tỉ lệ linh kiện đạt tiêu chuẩn của cơ sở I, cơ sở II lần lượt là $93\\%$, $82\\%$. Kiểm tra ngẫu nhiên một linh kiện ở xưởng máy. Xét các biến cố<br>  $A_1 \\colon$ “ Linh kiện được kiểm tra do cơ sở I sản xuất”;<br>  $A_2 \\colon$ “ Linh kiện được kiểm tra do cơ sở II sản xuất”;<br>  $B \\colon$ “ Linh kiện được kiểm tra đạt tiêu chuẩn”.",
    "subQuestions": [
      {
        "text": "Xác suất $\\mathrm{P}\\left(A_1\\right)=0{,}61$",
        "answer": true
      },
      {
        "text": "Xác suất có điều kiện $\\mathrm{P}\\left(B \\mid A_2\\right)=0{,}82$",
        "answer": true
      },
      {
        "text": "Xác suất $\\mathrm{P}(B)=0{,}8871$",
        "answer": true
      },
      {
        "text": "Xác suất có điều kiện $\\mathrm{P}\\left(A_1 \\mid B\\right)=0{,}55$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\mathrm{P}\\left(A_1\\right)=0{,}61$.<br>- Ta có $\\mathrm{P}\\left(B \\mid A_2\\right)=0{,}82$.<br>- Ta có $\\mathrm{P}\\left(A_1\\right)=0{,}61$; $\\mathrm{P}\\left(A_2\\right)=0{,}39$; $\\mathrm{P}\\left(B \\mid A_1\\right)=0{,}93$; $\\mathrm{P}\\left(B \\mid A_2\\right)=0{,}82$.<br>  Theo công thức xác suất toàn phần, ta có<br>  $\\mathrm{P}(B)=\\mathrm{P}\\left(A_1\\right) \\cdot \\mathrm{P}\\left(B \\mid A_1\\right)+\\mathrm{P}\\left(A_2\\right) \\cdot \\mathrm{P}\\left(B \\mid A_2\\right)=0{,}61 \\cdot 0{,}93+0{,}39 \\cdot 0{,}82=0{,}8871$.<br>- Theo công thức Bayes, ta có $\\mathrm{P}\\left(A_1 \\mid B\\right)=\\dfrac{\\mathrm{P}\\left(A_1\\right) \\cdot \\mathrm{P}\\left(B \\mid A_1\\right)}{\\mathrm{P}(B)}=\\dfrac{0{,}61 \\cdot 0{,}93}{0{,}8871} \\approx 0{,}64$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D622DS4",
    "question": "Khảo sát những người xem bộ phim hoạt hình vừa được phát hành cho thấy $70\\%$ người xem là trẻ em và $30\\%$ là người lớn. Trong số các trẻ em đến xem phim có $50\\%$ yêu thích bộ phim và khẳng định sẽ đi xem tiếp phần 2; $30\\%$ yêu thích bộ phim nhưng sẽ không xem tiếp phần 2; còn lại không thích bộ phim và không xem tiếp phần 2. Trong số những người lớn đi xem phim có $20\\%$ yêu thích bộ phim và khẳng định sẽ đi xem tiếp phần 2; $10\\%$ yêu thích bộ phim nhưng sẽ không xem tiếp phần 2; $70\\%$ còn lại không thích bộ phim và không xem tiếp phần 2. Chọn ngẫu nhiên $1$ người đã xem phim.",
    "subQuestions": [
      {
        "text": "Biết người được chọn là trẻ em, xác suất để người đó yêu thích bộ phim là $0{,}56$",
        "answer": false
      },
      {
        "text": "Xác suất để người đó không xem tiếp phần 2 là $0{,}59$",
        "answer": true
      },
      {
        "text": "Biết người đó sẽ xem tiếp phần 2 của bộ phim, xác suất để người đó là trẻ em lớn hơn $0{,}85$",
        "answer": true
      },
      {
        "text": "Biết người đó yêu thích bộ phim, xác suất để người đó không xem tiếp phần 2 là $0{,}37$ (kết quả làm tròn đến hàng phần trăm)",
        "answer": true
      }
    ],
    "explain": "Ta gọi các biến cố sau  <br>- $A\\colon$ “ Chọn được một trẻ em”~$\\Rightarrow \\overline{A}\\colon$ “ Chọn được một người lớn”.<br>- $B_1\\colon$ “ Người đó thích bộ phim và sẽ xem tiếp phần $2$”.<br>- $B_2\\colon$ “ Người đó thích bộ phim và sẽ không xem tiếp phần $2$”.<br>- $B_3\\colon$ “ Người đó không thích bộ phim và sẽ không xem tiếp phần $2$”.  Ta có các xác suất $\\mathrm{P}(A)=0{,}7$; $\\mathrm{P}\\left(\\overline{A}\\right)=0{,}3$; $\\mathrm{P}\\left(B_1\\mid A\\right)=0{,}5$; $\\mathrm{P}\\left(B_2\\mid A\\right)=0{,}3$; $\\mathrm{P}\\left(B_3\\mid A\\right)=0{,}2$; $\\mathrm{P}\\left(B_1\\mid \\overline{A}\\right)=0{,}2$; $\\mathrm{P}\\left(B_2\\mid \\overline{A}\\right)=0{,}1$; $\\mathrm{P}\\left(B_3\\mid \\overline{A}\\right)=0{,}7$. <br>  Lập sơ đồ cây biểu diễn phép thử  <br><img src=\"data/12/2D5/im2H52/dlts_12_DLTS38_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Xác suất cần tìm chính là $\\mathrm{P}\\left(B_1\\mid A\\right)+\\mathrm{P}(B_2\\mid A)=0{,}5+0{,}3=0{,}8$.<br>- Áp dụng công thức xác suất toàn phần, ta có xác suất cần tìm bằng $\\mathrm{P}(AB_2)+\\mathrm{P}(AB_3)+\\mathrm{P}\\left(\\overline{A_2}B\\right)+\\mathrm{P}\\left(\\overline{A_3}B\\right)=0{,}3\\cdot 0{,}7+0{,}2\\cdot 0{,}7+0{,}1\\cdot 0{,}3+0{,}7\\cdot 0{,}3=0{,}59.$<br>- Xác suất cần tìm là xác suất $\\mathrm{P}(A_1\\mid B)$. <br>  Áp dụng công thức xác suất Bayes, ta có  $\\mathrm{P}(A_1\\mid B) = \\dfrac{\\mathrm{P}(B_1\\mid A)\\cdot \\mathrm{P}(A)}{\\mathrm{P}(B_1)}$<br>$= \\dfrac{0{,}5\\cdot 0{,}7}{0{,}5\\cdot 0{,}7+0{,}3\\cdot 0{,}2}$<br>$= \\dfrac{35}{41}\\approx 0{,}854.$<br>- Ta có xác suất cần tìm là $\\mathrm{P}\\left((B_2\\cup B_3)\\mid (B_1\\cup B_2)\\right)$. <br>  Ta có   $\\mathrm{P}\\left((B_2\\cup B_3)\\mid (B_1\\cup B_2)\\right) = \\dfrac{\\mathrm{P}\\left((B_2\\cup B_3)\\cap (B_1\\cup B_2)\\right)}{\\mathrm{P}(B_1\\cup B_2)}$<br>$= \\dfrac{\\mathrm{P}(B_2)}{\\mathrm{P}(B_1)+\\mathrm{P}(B_2)}$<br>$= \\dfrac{0{,}7\\cdot 0{,}3+0{,}3\\cdot 0{,}1}{0{,}7\\cdot 0{,}5+0{,}3\\cdot 0{,}2+0{,}7\\cdot 0{,}3+0{,}3\\cdot 0{,}1}$<br>$= \\dfrac{24}{65}\\approx 0{,}37.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D623DS5",
    "question": "Trước thềm trận siêu kinh điển (El Clasico) giữa Barcelona và Real Madrid, Đài truyền hình Marca thực hiện phỏng vấn ngẫu nhiên một lượng người hâm mộ (biết rằng trong số những người được phỏng vấn, số người đang mặc áo thi đấu của hai đội chiếm $20\\%$). Kết quả khảo sát cho thấy rằng $60\\%$ người trả lời sẽ xem, $40\\%$ người còn lại trả lời sẽ không xem. Tuy nhiên, số liệu thực tế sau trận đấu cho thấy có sự sai lệch giữa câu trả lời và hành động thực.<br><br>- Trong số những người trả lời “ có xem”, tỉ lệ người thực sự xem là $90\\%$.<br><br>- Trong số những người trả lời “ không xem”, tỉ lệ người thực sự xem là $15\\%$.<br><br>- Gọi A là biến cố “ Người được phỏng vấn thực sự xem trận đấu”.<br><br>- Gọi B là biến cố “ Người được phỏng vấn trả lời sẽ xem trận đấu”.",
    "subQuestions": [
      {
        "text": "Tỉ lệ người được phỏng vấn thực sự xem trận đấu là $60\\%$",
        "answer": true
      },
      {
        "text": "Trong số những người thực sự xem trận đấu, số người đã trả lời “ không xem” khi phỏng vấn chiếm tỉ lệ $10\\%$",
        "answer": true
      },
      {
        "text": "Trong số những người mặc áo thi đấu tỉ lệ người thực sự xem trận đấu là $85\\%$, thì tỉ lệ người thực sự xem trận đấu trong những người không mặc áo thi đấu là $53{,}75\\%$",
        "answer": true
      },
      {
        "text": "Gọi E là biến cố “ Người trả lời sai sự thật” (trả lời có và không xem hoặc ngược lại). Biết rằng trong nhóm mặc áo thi đấu, xác suất xảy ra biến cố E là $10\\%$. Khi đó, xác suất để một người trả lời đúng sự thật trong nhóm không mặc áo thi đấu là $87{,}5\\%$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Theo đề bài ta có $\\mathrm{P}\\left(B\\right)=0{,}6$; $\\mathrm{P}\\left(\\overline{B}\\right)=0{,}4$; $P\\left(A\\mid B \\right)=0{,}9$; $\\mathrm{P}\\left(A\\mid\\overline{B} \\right)=0{,}15$.<br> Tỉ lệ người được phỏng vấn thực sự xem trận đấu là<br>$\\mathrm{P}\\left(A\\right)=\\mathrm{P}\\left(B\\right)\\cdot\\mathrm{P}\\left(A\\mid B\\right)+\\mathrm{P}\\left(\\overline{B}\\right)\\cdot \\mathrm{P}\\left(A\\mid\\overline{B}\\right)=0{,}6\\cdot0{,}9+0{,}4\\cdot0{,}15=0{,}6=60\\%$.<br>- <strong>Đúng</strong>.<br>  Trong số những người thực sự xem trận đấu, số người đã trả lời “ không xem” khi phỏng vấn chiếm tỉ lệ là<br>$\\mathrm{P}\\left(\\overline{B}\\mid A\\right)=\\dfrac{\\mathrm{P}\\left(\\overline{B} \\right)\\cdot\\mathrm{P}\\left(A\\mid\\overline{B} \\right)}{\\mathrm{P}\\left(A \\right)}=\\dfrac{0{,}4\\cdot 0{,}15}{0{,}6}=0{,}1=10\\%$.<br>- <strong>Đúng</strong>.<br>  Gọi $C$ là biến cố “ Người được phỏng vấn mặc áo thi đấu”.<br> Theo đề bài ta có $\\mathrm{P}\\left(C\\right)=0{,}2\\Rightarrow\\mathrm{P}\\left(\\overline{C}\\right)=0{,}8$.<br> Trong số những người mặc áo thi đấu tỉ lệ người thực sự xem trận đấu là $85\\%$ nên $\\mathrm{P}\\left(A\\mid C\\right)=0{,}85$.<br> Ta có $\\mathrm{P}\\left(A\\right)=\\mathrm{P}\\left(AC\\right)+\\mathrm{P}\\left(A\\overline{C} \\right)\\Leftrightarrow\\mathrm{P}\\left(A \\right)=P\\left(C\\right)\\cdot\\mathrm{P}\\left(A\\mid C\\right)+\\mathrm{P}\\left(A\\overline{C} \\right)$<br> $\\Rightarrow 0{,}6=0{,}2\\cdot0{,}85+P\\left(A\\overline{C}\\right)\\Rightarrow \\mathrm{P}\\left(A\\overline{C} \\right)=0{,}43$.<br> Ta có tỉ lệ người thực sự xem trận đấu trong những người không mặc áo thi đấu là<br>$\\mathrm{P}\\left(A\\mid\\overline{C} \\right)=\\dfrac{\\mathrm{P}\\left(A\\overline{C}\\right)}{\\mathrm{P}\\left(\\overline{C}\\right)}=\\dfrac{0{,}43}{0{,}8}=0{,}5375=53{,}75\\%$.<br>- <strong>Đúng</strong>.<br>  Ta có trong nhóm mặc áo thi đấu, xác suất xảy ra biến cố $E$ là $10\\%$ nên \\[\\mathrm{P}\\left( E\\mid C\\right)=0{,}1\\Rightarrow \\mathrm{P}\\left(\\overline{E}\\mid C\\right)=0{,}9.\\] Xác suất người trả lời sai sự thật là $$\\begin{aligned} \\mathrm{P}(E)&=\\mathrm{P}\\left(A\\overline{B}\\right)+\\mathrm{P}\\left(\\overline{A}B\\right)\\\\ &=\\mathrm{P}\\left(\\overline{B}\\right)\\cdot\\mathrm{P}\\left(A\\mid\\overline{B}\\right)+\\mathrm{P}\\left(B\\right)\\cdot\\mathrm{P}\\left(\\overline{A}\\mid B\\right)\\\\ &=0{,}4\\cdot 0{,}15+0{,}6\\cdot 0{,}1=0{,}12. \\end{aligned}$$ Xác suất người trả lời đúng sự thật là \\[\\mathrm{P}\\left(\\overline{E}\\right)=1-0{,}12=0{,}88.\\] Ta có $$\\begin{aligned} &&\\mathrm{P}\\left(\\overline{E}\\right)=\\mathrm{P}\\left(\\overline{E}C\\right)+\\mathrm{P}\\left(\\overline{E}\\,\\overline{C}\\right)=\\mathrm{P}\\left(C\\right)\\cdot\\mathrm{P}\\left(\\overline{E}\\mid C\\right)+\\mathrm{P}\\left(\\overline{E}\\,\\overline{C}\\right)\\\\ &\\Rightarrow&0{,}88=0{,}2\\cdot0{,}9+\\mathrm{P}\\left(\\overline{E}\\,\\overline{C}\\right)\\\\ &\\Rightarrow&\\mathrm{P}\\left(\\overline{E}\\,\\overline{C}\\right)=0{,}7. \\end{aligned}$$ Khi đó, xác suất để một người trả lời đúng sự thật trong nhóm không mặc áo thi đấu là \\[\\mathrm{P}\\left(\\overline{E}\\mid\\overline{C}\\right)=\\dfrac{\\mathrm{P}\\left(\\overline{E}\\,\\overline{C}\\right)}{\\mathrm{P}\\left(\\overline{C}\\right)}=\\dfrac{0{,}7}{0{,}8}=0{,}87 =87{,}5\\%.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D623DS6",
    "question": "Một nhà máy có hai phân xưởng X và Y cùng sản xuất một loại sản phẩm. Phân xưởng X sản xuất $60\\%$ và phân xưởng Y sản xuất $40\\%$ tổng số sản phẩm của cả nhà máy. Tỉ lệ phế phẩm của phân xưởng X, phân xưởng Y lần lượt là $10\\%$ và $5\\%$. Lấy ngẫu nhiên một sản phẩm trong kho hàng của nhà máy.",
    "subQuestions": [
      {
        "text": "Xác suất lấy được sản phẩm tốt, biết sản phẩm đó do phân xưởng X sản xuất bằng $95\\%$",
        "answer": false
      },
      {
        "text": "Xác suất lấy được phế phẩm là $10\\%$",
        "answer": false
      },
      {
        "text": "Giả sử đã lấy được phế phẩm, xác suất phế phẩm đó do phân xưởng Y sản xuất bằng $75\\%$",
        "answer": false
      },
      {
        "text": "Nếu lấy được sản phẩm tốt, khả năng sản phẩm đó do phân xưởng X sản xuất cao hơn khả năng sản phẩm đó do phân xưởng Y sản xuất",
        "answer": true
      }
    ],
    "explain": "Gọi $A$ là biến cố “ Lấy được sản phẩm của phân xưởng X”. Ta có $\\mathrm{P}(A)=0{,}6$.<br> Gọi $B$ là biến cố “ Lấy được phế phẩm”.<br> Ta sơ đồ hình cây như sau<br><img src=\"data/12/2D6/im2D62/2D62_ex12_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- <strong>Sai</strong>.<br>  Xác suất lấy được sản phẩm tốt, biết sản phẩm đó do phân xưởng X sản xuất là $\\mathrm{P}\\left(\\overline{B}\\mid A\\right)=0{,}9$.<br>- <strong>Sai</strong>.<br>  Xác suất lấy được phế phẩm là $\\mathrm{P}(B)=\\mathrm{P}\\left(B\\mid A\\right)\\cdot\\mathrm{P}(A)+\\mathrm{P} \\left(B\\mid \\overline{A}\\right)\\cdot\\mathrm{P}\\left(\\overline{A}\\right)=0{,}1\\cdot 0{,}6+0{,}05\\cdot 0{,}4= 8\\%$.<br>- <strong>Sai</strong>.<br>  $\\mathrm{P}\\left(\\overline{A}\\mid B\\right)=\\dfrac{\\mathrm{P}\\left(B\\mid\\overline{A}\\right)\\cdot \\mathrm{P}\\left(\\overline{A}\\right)}{\\mathrm{P}(B)}=\\dfrac{0{,}05\\cdot 0{,}4}{0{,}08}=25\\%$.<br>- <strong>Đúng</strong>.<br>  Xác suất lấy được sản phẩm do xưởng X sản suất, biết sản phẩm lấy được là sản phẩm tốt là $$\\mathrm{P}(A\\mid \\overline{B})=\\dfrac{\\mathrm{P}\\left(\\overline{B}\\mid A\\right)\\cdot \\mathrm{P}(A)}{\\mathrm{P}\\left(\\overline{B}\\right)}=\\dfrac{0{,}9\\cdot 0{,}6}{1-0{,}08 }=\\dfrac{27}{46}.$$ Xác suất lấy được sản phẩm do xưởng Y sản suất, biết sản phẩm lấy được là sản phẩm tốt là $$\\mathrm{P}\\left(\\overline{A}\\mid \\overline{B}\\right)=\\dfrac{\\mathrm{P}\\left(\\overline{B}\\mid \\overline{A}\\right)\\cdot \\mathrm{P}\\left(\\overline{A}\\right)}{\\mathrm{P}\\left(\\overline{B}\\right)}=\\dfrac{0{,}95\\cdot 0{,}4}{1-0{,}08 }=\\dfrac{19}{46}.$$ Vậy nếu lấy được sản phẩm tốt, khả năng sản phẩm đó do phân xưởng X sản xuất cao hơn khả năng sản phẩm đó do phân xưởng Y sản xuất.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS7",
    "question": "Một công ty khí tượng sử dụng hai mô hình dự báo thời tiết hoạt động độc lập với nhau là Mô hình $1$ và Mô hình $2$. Dựa trên dữ liệu quá khứ, độ chính xác của các mô hình được quy định như sau<br><br>- Mô hình $1$: Có xác suất dự báo đúng là $80\\%$. Nghĩa là, nếu thực tế trời mưa, xác suất mô hình báo có mưa là $0{,}8$, nếu thực tế không mưa, xác suất mô hình báo không mưa là $0{,}8$.<br><br>- Mô hình $2$: Có xác suất dự báo đúng là $90\\%$. Nghĩa là, nếu thực tế trời mưa, xác suất mô hình dự báo có mưa là $0{,}9$, nếu thực tế không mưa, xác suất mô hình báo không mưa là $0{,}9$.<br>Biết rằng tỷ lệ ngày có mưa ở khu vực này là $20\\%$.",
    "subQuestions": [
      {
        "text": "Xác suất để cả hai mô hình đều dự báo có mưa là $0{,}16$",
        "answer": true
      },
      {
        "text": "Xác suất để cả hai mô hình đều dự báo sai là $0{,}2$",
        "answer": false
      },
      {
        "text": "Trong trường hợp Mô hình $1$ dự báo không mưa và Mô hình $2$ dự báo có mưa, xác suất Mô hình $1$ dự báo đúng thấp hơn xác suất Mô hình $2$ dự báo đúng",
        "answer": false
      },
      {
        "text": "Nếu cả hai mô hình đều dự báo trời có mưa thì xác suất để thực tế trời có mưa là $0{,}9$",
        "answer": true
      }
    ],
    "explain": "Gọi các biến cố<br><br>- $M\\colon$“ Trời có mưa”;<br><br>- $M_1\\colon$“ Mô hình $1$ báo có mưa”;<br><br>- $M_2\\colon$“ Mô hình 2 báo có mưa”.<br>Từ giả thiết, ta có $2$ sơ đồ cây tương ứng cho Mô hình $1$ và Mô hình $2$ như sau<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><br><img src=\"data/12/2D6/im2D62/2D62_ex12_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"></td><td style=\"border:1px solid #888;padding:3px 8px;\"><br><img src=\"data/12/2D6/im2D62/2D62_ex12_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"></td></tr></table><br>- <strong>Đúng</strong>.<br>  Vì hai mô hình hoạt động độc lập nên biến cố cả hai mô hình đều báo có mưa xảy ra trong hai trường hợp<br><br>- Thực tế trời có mưa, Mô hình 1 báo có mưa và Mô hình 2 báo có mưa. Xác suất cho trường hợp này là $$ \\mathrm{P}(M) \\cdot \\mathrm{P}(M_1 \\mid M) \\cdot \\mathrm{P}(M_2 \\mid M) = 0{,}2 \\cdot 0{,}8 \\cdot 0{,}9 = 0{,}144. $$<br><br>- Thực tế trời không mưa, Mô hình 1 báo có mưa và Mô hình 2 báo có mưa. Xác suất cho trường hợp này là $$ \\mathrm{P}\\left(\\overline{M}\\right) \\cdot \\mathrm{P}\\left(M_1 \\mid \\overline{M}\\right) \\cdot \\mathrm{P}\\left(M_2 \\mid \\overline{M}\\right) = 0{,}8 \\cdot 0{,}2 \\cdot 0{,}1 = 0{,}016. $$<br>Xác suất để cả hai mô hình đều dự báo có mưa là $$ \\mathrm{P}(M_1 \\cap M_2) = 0{,}144 + 0{,}016 = 0{,}16. $$<br>- <strong>Sai</strong>.<br>  Để cả hai mô hình đều dự báo sai, ta xét hai trường hợp sau<br><br>- Thực tế trời có mưa nhưng cả hai mô hình đều báo không mưa. Xác suất cho trường hợp này là $$ \\mathrm{P}(M) \\cdot \\mathrm{P}\\left(\\overline{M_1} \\mid M\\right) \\cdot \\mathrm{P}\\left(\\overline{M_2} \\mid M\\right) = 0{,}2 \\cdot 0{,}2 \\cdot 0{,}1 = 0{,}004. $$<br><br>- Thực tế trời không mưa nhưng cả hai mô hình đều báo có mưa. Xác suất cho trường hợp này là $$ \\mathrm{P}\\left(\\overline{M}\\right) \\cdot \\mathrm{P}\\left(M_1 \\mid \\overline{M}\\right) \\cdot \\mathrm{P}\\left(M_2 \\mid \\overline{M}\\right) = 0{,}8 \\cdot 0{,}2 \\cdot 0{,}1 = 0{,}016. $$<br>Xác suất để cả hai mô hình đều dự báo sai bằng $$0{,}004 + 0{,}016 = 0{,}02.$$<br>- <strong>Sai</strong>.<br>  Khi Mô hình $1$ báo không mưa và Mô hình $2$ báo có mưa: $\\mathrm{P}(\\overline{M_1}\\cap M_2)=0{,}2\\cdot0{,}2\\cdot0{,}9+0{,}8\\cdot0{,}8\\cdot0{,}1=0{,}036+0{,}064=0{,}1$.<br>Mô hình $1$ đúng khi thực tế không mưa: $\\mathrm{P}(\\overline{M}\\mid\\overline{M_1}M_2)=\\dfrac{0{,}064}{0{,}1}=0{,}64$.<br>Mô hình $2$ đúng khi thực tế có mưa: $\\mathrm{P}(M\\mid\\overline{M_1}M_2)=\\dfrac{0{,}036}{0{,}1}=0{,}36$.<br>Vì $0{,}64&gt;0{,}36$ nên xác suất Mô hình $1$ đúng cao hơn, mệnh đề sai.<br>- <strong>Đúng</strong>.<br>  Xác suất để cả hai mô hình đều dự báo trời có mưa là $$ \\mathrm{P}(M_1 \\cap M_2) = 0{,}16. $$ Trong đó, xác suất để cả hai mô hình đều báo có mưa và thực tế trời có mưa là $$ \\mathrm{P}(M \\cap M_1 \\cap M_2) = \\mathrm{P}(M) \\cdot \\mathrm{P}(M_1 \\mid M) \\cdot \\mathrm{P}(M_2 \\mid M) = 0{,}2 \\cdot 0{,}8 \\cdot 0{,}9 = 0{,}144. $$ Xác suất để thực tế trời có mưa khi biết cả hai mô hình đều dự báo có mưa là $$ \\mathrm{P}(M \\mid M_1 \\cap M_2) = \\dfrac{\\mathrm{P}(M \\cap M_1 \\cap M_2)}{\\mathrm{P}(M_1 \\cap M_2)} = \\dfrac{0{,}144}{0{,}16} = 0{,}9. $$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS8",
    "question": "Một công ty công nghệ tổ chức một kỳ thi tuyển dụng với hai bài kiểm tra: một bài kiểm tra lập trình và một bài kiểm tra tư duy logic. Công ty nhận thấy rằng: $60\\%$ ứng viên là nam, $40\\%$ ứng viên là nữ, $80\\%$ nam vượt qua bài kiểm tra lập trình, $70\\%$ nữ vượt qua bài kiểm tra lập trình, $75\\%$ nam vượt qua bài kiểm tra tư duy logic, $85\\%$ nữ vượt qua bài kiểm tra tư duy logic. Giả sử các bài kiểm tra là độc lập giữa các giới tính.",
    "subQuestions": [
      {
        "text": "Trong những người vượt qua bài kiểm tra lập trình, tỉ lệ ứng viên nữ là $\\dfrac{7}{19}$",
        "answer": true
      },
      {
        "text": "Trong những ứng viên nam, có $40\\%$ ứng viên không vượt qua được ít nhất một bài kiểm tra",
        "answer": true
      },
      {
        "text": "Có $59{,}8\\%$ ứng viên vượt qua được hai bài kiểm tra",
        "answer": true
      },
      {
        "text": "Một ứng viên ngẫu nhiên được chọn và được biết rằng người đó đã vượt qua cả hai bài kiểm tra lập trình và logic. Khi đó, xác suất người đó là nữ là $0{,}397$ (<em>làm tròn đến hàng phần nghìn</em>)",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Gọi $A$ là biến cố ứng viên là nam, $B$ là biến cố ứng viên là nữ.<br> Theo đề ta có $\\mathrm {P}(A) = 0{,}6$; $\\mathrm {P}(B) = 0{,}4$.<br> Gọi $L$ là biến cố vượt qua bài kiểm tra lập trình, $T$ là biến cố vượt qua bài kiểm tra tư duy logic.<br> Theo đề bài, ta có các xác suất có điều kiện $\\mathrm {P}(L\\mid A) = 0{,}8$, $\\mathrm {P}(L\\mid B) = 0{,}7$, $\\mathrm {P}(T\\mid A) = 0{,}75$ và $\\mathrm {P}(T\\mid B) = 0{,}85$.<br> Xác suất một ứng viên vượt qua bài kiểm tra lập trình là $$\\mathrm {P}(L) = \\mathrm {P}(L\\mid A)P(A) + \\mathrm {P}(L\\mid B)P(B) = 0{,}8 \\cdot 0{,}6 + 0{,}7 \\cdot 0{,}4 = 0{,}48 + 0{,}28 = 0{,}76.$$ Tỉ lệ ứng viên nữ trong số những người vượt qua bài kiểm tra lập trình là $$\\mathrm {P}(B\\mid L) = \\dfrac{\\mathrm {P}(L\\mid B)\\cdot\\mathrm {P}(B)}{\\mathrm {P}(L)} = \\dfrac{0{,}28}{0{,}76} = \\dfrac{7}{19}.$$<br>- <strong>Đúng</strong>.<br>  Xét trong nhóm ứng viên nam, xác suất một ứng viên vượt qua cả hai bài kiểm tra là $$\\mathrm {P}(L \\cap T \\mid A) = \\mathrm {P}(L\\mid A) \\cdot \\mathrm {P}(T\\mid A) = 0{,}8 \\cdot 0{,}75 = 0{,}6.$$ Xác suất ứng viên nam không vượt qua được ít nhất một bài kiểm tra là $$1 - 0{,}6 = 0{,}4 = 40\\%.$$<br>- <strong>Đúng</strong>.<br>  Xác suất một ứng viên nữ vượt qua cả hai bài kiểm tra là $$\\mathrm {P}(L \\cap T \\mid B) = \\mathrm {P}(L\\mid B) \\cdot \\mathrm {P}(T\\mid B) = 0{,}7 \\cdot 0{,}85 = 0{,}595.$$ Xác suất một ứng viên bất kỳ vượt qua cả hai bài kiểm tra là $$\\mathrm {P}(L \\cap T) = \\mathrm {P}(L \\cap T \\mid A)\\cdot\\mathrm {P}(A) + \\mathrm {P}(L \\cap T \\mid B)\\cdot\\mathrm {P}(B) = 0{,}6 \\cdot 0{,}6 + 0{,}595 \\cdot 0{,}4= 59{,}8\\%.$$<br>- <strong>Sai</strong>.<br>  Gọi $E$ là biến cố ứng viên vượt qua cả hai bài kiểm tra, ta có $\\mathrm {P}(E) = 0{,}598$.<br> Xác suất ứng viên đó là nữ, biết rằng đã vượt qua cả hai bài kiểm tra là $$\\mathrm {P}(B\\mid E) = \\dfrac{\\mathrm {P}(E\\mid B)\\cdot\\mathrm {P}(B)}{\\mathrm {P}(E)} = \\dfrac{0{,}595 \\cdot 0{,}4}{0{,}598} = \\dfrac{0{,}238}{0{,}598} \\approx 0{,}398.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS9",
    "question": "Hộp $A$ chứa bốn quả bóng được đánh số $1$; $2$; $3$; $4$. Hộp $B$ chứa ba quả bóng được đánh số $1$; $2$; $3$. Hộp $C$ chứa hai quả bóng được đánh số $1$; $2$. Một trong ba hộp được chọn ngẫu nhiên và sau đó một quả bóng được chọn ngẫu nhiên từ hộp đó.<br><img src=\"data/12/2D6/im2D62/2D62_ex12_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Nếu hộp $A$ được chọn thì xác suất quả bóng số $1$ được chọn bằng $\\dfrac{1}{3}$",
        "answer": false
      },
      {
        "text": "Xác suất chọn được quả bóng số $3$ bằng $\\dfrac{5}{36}$",
        "answer": false
      },
      {
        "text": "Biết rằng quả bóng số $1$ đã được chọn, xác suất để quả bóng này thuộc hộp $A$ bằng $0{,}23$ <em>(làm tròn kết quả đến hàng phần trăm)</em>",
        "answer": true
      },
      {
        "text": "Nếu người ta lấy được quả bóng số $1$, sau đó hoàn lại quả bóng và tiếp tục lấy ngẫu nhiên một quả bóng từ hộp đó thì được quả bóng số $3$; xác suất để quả bóng này thuộc về hộp $B$ bằng $\\dfrac{16}{27}$",
        "answer": false
      }
    ],
    "explain": "Gọi $A$, $B$, $C$ lần lượt là biến cố chọn được hộp $A$, hộp $B$, hộp $C$.<br>- <strong>Sai</strong>.<br>  Xác suất để chọn được quả bóng mang số $1$ từ hộp $A$ là $\\dfrac{1}{4}$.<br>- <strong>Sai</strong>.<br>  Để chọn được quả bóng mang số $3$ thì có thể chọn từ hộp $A$ hoặc hộp $B$.<br><br>- Xác suất để chọn được quả bóng mang số $3$ từ hộp $A$ là $\\mathrm{P}(3\\mid A)=\\dfrac{1}{4}$.<br><br>- Xác suất để chọn được quả bóng mang số $3$ từ hộp $B$ là $\\mathrm{P}(3\\mid B)=\\dfrac{1}{3}$.<br>Xác suất để chọn được quả bóng mang số $3$ là $\\mathrm{P}(3)=\\dfrac{1}{3}\\cdot\\dfrac{1}{4}+\\dfrac{1}{3}\\cdot\\dfrac{1}{3}=\\dfrac{7}{36}$.<br>- <strong>Đúng</strong>.<br>  Xác suất để chọn được quả bóng mang số $1$ là \\[ \\mathrm{P}(1)=\\dfrac{1}{3}\\cdot\\dfrac{1}{4}+\\dfrac{1}{3}\\cdot\\dfrac{1}{3}+\\dfrac{1}{3}\\cdot\\dfrac{1}{2} = \\dfrac{13}{36}. \\] Suy ra \\[ \\mathrm{P}(A\\mid1)=\\dfrac{\\mathrm{P}(1\\mid A)\\mathrm{P}(A)}{\\mathrm{P}(1)}=\\dfrac{\\dfrac{1}{4}\\cdot\\dfrac{1}{3}}{\\dfrac{13}{36}}=\\dfrac{3}{13}. \\]<br>- <strong>Sai</strong>.<br>  Gọi $D$ là biến cố “ Lần $1$ lấy được quả bóng số $1$, hoàn lại; lần $2$ lấy được quả bóng số $3$ từ cùng một hộp”.<br> Ta có \\[ \\mathrm{P}(D\\mid A)=\\dfrac{1}{4}\\cdot\\dfrac{1}{4}=\\dfrac{1}{16},\\quad \\mathrm{P}(D\\mid B)=\\dfrac{1}{3}\\cdot\\dfrac{1}{3}=\\dfrac{1}{9},\\quad \\mathrm{P}(D\\mid C)=0. \\] Ta có $\\mathrm{P}(D)=\\mathrm{P}(D\\mid A)\\cdot\\mathrm{P}(A)+\\mathrm{P}(D\\mid B)\\cdot\\mathrm{P}(B)=\\dfrac{1}{16}\\cdot\\dfrac{1}{3}+\\dfrac{1}{9}\\cdot\\dfrac{1}{3}=\\dfrac{25}{432}$.<br> Suy ra \\[ \\mathrm{P}(B\\mid D)=\\dfrac{\\mathrm{P}(D\\mid B)\\cdot\\mathrm{P}(B)}{\\mathrm{P}(D)}=\\dfrac{\\dfrac{1}{3}\\cdot \\dfrac{1}{9} }{\\dfrac{25}{432}}= \\dfrac{16}{25}. \\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS10",
    "question": "Trong không gian $Oxyz$, xem mặt phẳng $(Oxy)$ là mặt đất, mỗi đơn vị trên trục tương ứng với $1$ km, một ra đa được đặt tại vị trí gốc tọa độ $O$ phát hiện một máy bay chiến đấu di chuyển với vận tốc và hướng không đổi từ điểm $M(500;200;10)$ đến điểm $N(300;800;10)$ trong $40$ phút.",
    "subQuestions": [
      {
        "text": "Khoảng cách $MN=200\\sqrt{10}$ km",
        "answer": true
      },
      {
        "text": "Máy bay chiến đấu khi bay từ $M$ đến $N$ luôn cách mặt đất là $10$ km",
        "answer": true
      },
      {
        "text": "Góc $\\widehat{MON}$ được gọi là góc quét của ra đa khi quan sát máy bay chiến đấu bay từ $M$ đến $N$. Trong tình huống trên góc quét $\\widehat{MON}$ lớn hơn $45^\\circ$",
        "answer": true
      },
      {
        "text": "Khi đến $N$ máy bay tiếp tục giữ nguyên vận tốc và hướng bay thì tọa độ của máy bay sau $8$ phút tiếp theo là $Q(a;b;c)$ với $a+b+c=1030$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có $\\overrightarrow{MN}=(-200;600;0)$ nên $MN=\\sqrt{(-200)^2+600^2}=200\\sqrt{10}$.<br>- <strong>Đúng</strong>.<br>  Ta có $MN \\parallel (Oxy)$ nên máy bay chiến đấu khi bay từ $M$ đến $N$ luôn cách mặt đất là $10$ km.<br>- <strong>Đúng</strong>.<br>  Ta có $\\cos\\widehat{MON}=\\dfrac{\\overrightarrow{OM}\\cdot \\overrightarrow{ON}}{OM\\cdot ON}=\\dfrac{500\\cdot300+200\\cdot800+10\\cdot10}{\\sqrt{500^2+200^2+10^2}\\cdot\\sqrt{300^2+800^2+10^2}}\\approx 0{,}67&lt;\\cos{45^\\circ}$<br> do đó nên $\\widehat{MON}&gt;45^\\circ$.<br>- <strong>Sai</strong>.<br>  Vận tốc không đổi: $40$ phút bay được $MN$ nên $8$ phút bay được $\\dfrac{1}{5}MN$, tức $\\overrightarrow{NQ}=\\dfrac{1}{5}\\overrightarrow{MN}=(-40;120;0)$.<br>Suy ra $Q(260;920;10)$ và $a+b+c=260+920+10=1190\\neq1030$. Mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS11",
    "question": "Tại tỉnh X, $20\\%$ dân số thường xuyên chơi thể thao. Trong số những người thường xuyên chơi thể thao, có $70\\%$ người có thể lực tốt. Trong số những người không thường xuyên chơi thể thao, có $15\\%$ người có thể lực tốt. Chọn ngẫu nhiên một người dân tỉnh X.",
    "subQuestions": [
      {
        "text": "Xác suất người đó có thể lực tốt và thường xuyên chơi thể thao là $0{,}14$",
        "answer": true
      },
      {
        "text": "Xác suất người đó có thể lực tốt, biết rằng người đó không thường xuyên chơi thể thao là $0{,}15$",
        "answer": true
      },
      {
        "text": "Tỉ lệ người có thể lực tốt trong toàn tỉnh là $36\\%$",
        "answer": false
      },
      {
        "text": "Xác suất người đó thường xuyên chơi thể thao, biết rằng họ có thể lực tốt là $\\dfrac{8}{13}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Gọi $A$: 'chơi thể thao thường xuyên', $B$: 'thể lực tốt'. $\\mathrm{P}(AB)=\\mathrm{P}(A)\\cdot\\mathrm{P}(B\\mid A)=0{,}2\\cdot0{,}7=0{,}14$.<br>- <strong>Đúng</strong>.<br>  Theo đề, $\\mathrm{P}(B\\mid\\overline{A})=0{,}15$.<br>- <strong>Sai</strong>.<br>  $\\mathrm{P}(B)=0{,}2\\cdot0{,}7+0{,}8\\cdot0{,}15=0{,}14+0{,}12=0{,}26=26\\%\\neq36\\%$.<br>- <strong>Sai</strong>.<br>  $\\mathrm{P}(A\\mid B)=\\dfrac{0{,}14}{0{,}26}=\\dfrac{7}{13}\\neq\\dfrac{8}{13}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS12",
    "question": "Tại một thành phố, người ta thực hiện xét nghiệm đại trà để phát hiện Virus X. Qua thống kê, tỉ lệ người dân có kết quả xét nghiệm Dương tính (được máy báo là nhiễm bệnh) là $12\\%$. Tuy nhiên, xét nghiệm không chính xác tuyệt đối:<br><br>- Trong số những người có kết quả Dương tính, có $5\\%$ thực chất là không nhiễm bệnh.<br><br>- Trong số những người có kết quả Âm tính (máy báo không nhiễm), có $2\\%$ thực chất là đang nhiễm bệnh.<br>Chọn ngẫu nhiên một người vừa thực hiện xét nghiệm:",
    "subQuestions": [
      {
        "text": "Xác suất để người đó có kết quả Âm tính là $0{,}98$",
        "answer": false
      },
      {
        "text": "Xác suất để người đó thực sự không nhiễm bệnh, biết rằng kết quả xét nghiệm là Âm tính, bằng $0{,}98$",
        "answer": true
      },
      {
        "text": "Xác suất để người đó thực sự không nhiễm bệnh là $0{,}8684$",
        "answer": true
      },
      {
        "text": "Xác suất để người đó có kết quả Âm tính, biết rằng người đó thực sự không nhiễm bệnh bé hơn $0{,}99$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Gọi $D$ là biến cố: “ Kết quả dương tính” thì $\\overline{D}$ là biến cố: “ Kết quả âm tính”.<br> $\\mathrm{P}(D)=12\\%, \\mathrm{P}(\\overline{D})=1-\\mathrm{P}(D)=1-12\\%=88\\%$.<br> Gọi $N$ là biến cố: “ Nhiễm bệnh” thì $\\overline{N}$ là biến cố: “ Không nhiễm bệnh”.<br> Trong số những người có kết quả Dương tính, có $5\\%$ thực chất là không nhiễm bệnh nên<br> $\\mathrm{P}(\\overline{N} \\mid D)=5\\% \\Rightarrow \\mathrm{P}(N \\mid D)=1-\\mathrm{P}(\\overline{N} \\mid D)=1-5\\%=95\\%$.<br> Trong số những người có kết quả Âm tính, có $2\\%$ thực chất là đang nhiễm bệnh nên<br> $\\mathrm{P}(N \\mid \\overline{D})=2\\% \\Rightarrow \\mathrm{P}(\\overline{N} \\mid \\overline{D})=1-\\mathrm{P}(N \\mid \\overline{D})=1-2\\%=98\\%$.<br> Chọn ngẫu nhiên một người vừa thực hiện xét nghiệm:<br> Xác suất để người đó có kết quả Âm tính là $\\mathrm{P}(\\overline{D})=1-12\\%=88\\%$.<br>- <strong>Đúng</strong>.<br>  Xác suất để người đó thực sự không nhiễm bệnh, biết rằng kết quả xét nghiệm là Âm tính, bằng<br> $\\mathrm{P}(\\overline{N} \\mid \\overline{D})=1-\\mathrm{P}(N \\mid \\overline{D})=1-2\\%=98\\%$.<br>- <strong>Đúng</strong>.<br>  Xác suất để người đó thực sự không nhiễm bệnh là<br> $\\mathrm{P}(\\overline{N})=\\mathrm{P}(D) \\cdot \\mathrm{P}(\\overline{N} \\mid D)+\\mathrm{P}(\\overline{D}) \\cdot \\mathrm{P}(\\overline{N} \\mid \\overline{D})=12\\% \\cdot 5\\%+88\\% \\cdot 98\\%=0{,}8684$.<br>- <strong>Sai</strong>.<br>  Xác suất để người đó có kết quả Âm tính, biết rằng người đó thực sự không nhiễm bệnh là<br> $\\mathrm{P}(\\overline{D} \\mid \\overline{N})=\\dfrac{\\mathrm{P}(\\overline{N} \\mid \\overline{D}) \\cdot \\mathrm{P}(\\overline{D})}{\\mathrm{P}(\\overline{N})}=\\dfrac{98\\% \\cdot 88\\%}{0{,}8684} \\approx 0{,}9931&gt;0{,}99$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D624DS13",
    "question": "Một cửa hàng bán áo sơ mi gồm $2$ loại áo tay ngắn và áo tay dài. Tỷ lệ khách hàng mua áo sơ mi tay ngắn là $75\\%$ và mua áo tay dài là $25\\%$. Trong số các khách hàng mua áo sơ mi tay ngắn thì có $60\\%$ mua kèm cà vạt; Trong số các khách hàng mua áo sơ mi tay dài thì có $30\\%$ mua kèm cà vạt. Chọn ngẫu nhiên một khách hàng mua áo sơ mi. Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "Xác suất khách hàng mua áo sơ mi kèm cà vạt là $0{,}525$",
        "answer": true
      },
      {
        "text": "Xác suất khách hàng mua áo sơ mi tay ngắn là $0{,}75$",
        "answer": true
      },
      {
        "text": "Trong số khách hàng mua áo sơ mi kèm cà vạt thì khoảng $14{,}3\\%$ là khách hàng mua áo sơ mi tay dài",
        "answer": true
      },
      {
        "text": "Trong số khách hàng mua áo sơ mi tay ngắn, có $30\\%$ khách hàng không mua kèm cà vạt",
        "answer": false
      }
    ],
    "explain": "Gọi $A_1$ là biến cố khách hàng mua áo sơ mi tay ngắn.<br> $A_2$ là biến cố khách hàng mua áo sơ mi tay dài.<br> Gọi $B$ là biến cố khách hàng mua kèm cà vạt.<br> Theo đề bài, ta có $\\mathrm{P}\\left(A_1\\right) = 0{,}75$; $\\mathrm{P}\\left(A_2\\right) = 0{,}25$; $\\mathrm{P}\\left(B|A_1\\right) = 0{,}6$; $\\mathrm{P}\\left(B|A_2\\right) = 0{,}3$.<br>- <strong>Đúng</strong>.<br>  Áp dụng công thức xác suất toàn phần ta có $$\\begin{aligned} \\mathrm{P}(B) &= \\mathrm{P}\\left(A_1\\right) \\cdot \\mathrm{P}\\left(B|A_1\\right) + \\mathrm{P}\\left(A_2\\right) \\cdot \\mathrm{P}\\left(B|A_2\\right)\\\\ &= 0{,}75 \\cdot 0{,}6 + 0{,}25 \\cdot 0{,}3 \\\\ &= 0{,}45 + 0{,}075\\\\ &= 0{,}525. \\end{aligned}$$<br>- <strong>Đúng</strong>.<br>  Theo giả thiết, tỷ lệ mua áo sơ mi tay ngắn là $75\\%$, nên xác suất khách hàng mua áo sơ mi tay ngắn là $0{,}75$.<br>- <strong>Đúng</strong>.<br>  Xác suất cần tìm là $\\mathrm{P}\\left(A_2|B\\right) = \\dfrac{\\mathrm{P}\\left(A_2\\cap B\\right)}{\\mathrm{P}\\left(B\\right)} = \\dfrac{0{,}25 \\cdot 0{,}3}{0{,}525} = \\dfrac{0{,}075}{0{,}525} = \\dfrac{1}{7} \\approx 14{,}3\\%$.<br>- <strong>Sai</strong>.<br>  Trong số khách hàng mua áo tay ngắn, tỷ lệ không mua kèm cà vạt là $$\\mathrm{P}\\left(\\overline{B}|A_1\\right) = 1 - \\mathrm{P}\\left(B|A_1\\right) = 1 - 0{,}6 = 0{,}4 = 40\\%.$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
