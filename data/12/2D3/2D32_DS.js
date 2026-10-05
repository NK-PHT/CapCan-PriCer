window.dungSai2D32 = [
  {
    "id": "2D323DS1",
    "question": "Một trang trại phân $1 \\, 000$ quả trứng thành $5$ loại, tuỳ theo khối lượng (đã được làm tròn) của chúng được thống kê bởi bảng dưới đây:  <br><img src=\"data/12/2D3/im2D3/2D32_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu là $30$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu là $6{,} 48$",
        "answer": true
      },
      {
        "text": "Khối lượng trung bình của 100 quả trứng là 45 gam",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu là $\\dfrac{6\\sqrt{17}}{5}$",
        "answer": true
      }
    ],
    "explain": "<br>- [a)]<br>- Khoảng biến thiên là $60-30=30$.<br>- Nhóm chứa $Q_1$ là nhóm $[42; 48)$.<br>  Suy ra $Q_1= 42 + \\dfrac{250- 235}{500} \\cdot 16=42{,} 48$.<br>  $\\dfrac{3N}{4}= 750$.<br>  Nhóm chứa $Q_3$ là nhóm $[48; 54)$.<br>  Khi đó $Q_3 =48 +\\dfrac{750- 735 }{250} \\cdot 16 = 48{,} 96$.<br>  Suy ra khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1= 6{,} 48$.<br>- Ta có bảng sau:  <br><img src=\"data/12/2D3/im2D3/2D32_tikz_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Khối lượng trung bình $\\overline{x}= \\dfrac{33 \\cdot 45 + 39 \\cdot 190 + 45 \\cdot 500 + 51 \\cdot 250 + 57 \\cdot 15}{1\\, 000}= 45\\text{ gam}.$<br>- Phương sai: $\\dfrac{33^2 \\cdot 45 + 39^2 \\cdot 190 + 45^2 \\cdot 500 + 51^2 \\cdot 250 + 57^2 \\cdot 15}{1\\, 000} - 45^2=24{,}48$  Độ lệch chuẩn $s= \\sqrt{\\dfrac{33^2 \\cdot 45 + 39^2 \\cdot 190 + 45^2 \\cdot 500 + 51^2 \\cdot 250 + 57^2 \\cdot 15}{1\\, 000} - 45^2} =\\dfrac{6\\sqrt{17}}{5} \\text{ gam}.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS2",
    "question": "Thời gian chạy tập luyện cự li $100$ m của hai vận động viên $A$ và $B$ được cho trong bảng sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS10_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "Tổng số lần chạy của $B$ là $25$",
        "answer": true
      },
      {
        "text": "Thời gian chạy trung bình của $A$ lớn hơn thời gian chạy trung bình của $B$",
        "answer": false
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu đã cho của vận động viên $A$ bé hơn $0{,}43$",
        "answer": true
      },
      {
        "text": "Dựa vào độ lệch chuẩn thì vận động viên $A$ có thành tích luyện tập ít ổn định hơn so với vận động viên $B$",
        "answer": false
      }
    ],
    "explain": "Ta lập lại bảng số liệu như sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS10_012.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>.<br>  Tổng số lần chạy của $B$ là $3+6+8+5+3=25$..<br>- <strong>Sai</strong>.<br>  Thời gian chạy trung bình của $A$ là  \\[  \\overline{x}_A=\\dfrac{10{,}1\\cdot 2+10{,}3\\cdot 10+10{,}5\\cdot 6+10{,}7\\cdot 4+10{,}9\\cdot 3}{25}  = \\dfrac{2617}{250}=10{,}468.  \\]  Thời gian chạy trung bình của $B$ là  \\[  \\overline{x}_B=\\dfrac{10{,}1\\cdot 2+10{,}3\\cdot 10+10{,}5\\cdot 6+10{,}7\\cdot 4+10{,}9\\cdot 3}{25}  = \\dfrac{2623}{250}=10{,}492.  \\]  Ta thấy $\\overrightarrow{x}_A&lt;\\overline{x}_B$ nên thời gian chạy trung bình của $B$ lớn hơn thời gian chạy trung bình của $A$.<br>- <strong>Đúng</strong>.<br>  Ta có $Q_1\\in [10{,}2;10{,}4]$ nên $Q_1=10{,}2+\\dfrac{\\tfrac{25}{4}-2}{10}\\cdot (10{,}4-10{,}2)=10{,}285$.<br>  Ta có $Q_3\\in [10{,}6;10{,}8]$ nên $Q_1=10{,}2+\\dfrac{\\tfrac{25\\cdot 3}{4}-(2+10+6)}{4}\\cdot (10{,}8-10{,}6)=10{,}6375$.<br>  Khoảng tứ phân vị $\\Delta Q=Q_3-Q_1=10{,}6375-10{,}285=0{,}3525&lt;0{,}43$.<br>- <strong>Sai</strong>.<br>  Phương sai của thành tích luyện tập của vận động viên $A$ là  \\[  s_A^2=\\dfrac{10{,}1^2\\cdot 2+10{,}3^2\\cdot 10+10{,}5^2\\cdot 6+10{,}7^2\\cdot 4+10{,}9^2\\cdot 3}{42} - 10{,}468^2  = \\dfrac{834}{15625}.  \\]  Độ lệch chuẩn của thành tích luyện tập của vận động viên $A$ là $s_A=\\sqrt{\\dfrac{834}{15625}}\\approx 0{,}231$.<br>  Phương sai của thành tích luyện tập của vận động viên $B$ là  \\[  s_B^2=\\dfrac{10{,}1^3\\cdot 2+10{,}3^2\\cdot 6+10{,}5^2\\cdot 8+10{,}7^2\\cdot 5+10{,}9^2\\cdot 3}{42} - 10{,}492^2  = \\dfrac{874}{15625}.  \\]  Độ lệch chuẩn của thành tích luyện tập của vận động viên $B$ là $s_B=\\sqrt{\\dfrac{874}{15625}}\\approx 0{,}237$.<br>  Vì $s_A&lt;s_B$ nên ựa vào độ lệch chuẩn thì vận động viên $A$ có thành tích luyện tập ổn định hơn so với vận động viên $B$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS3",
    "question": "Kết quả kiểm tra cân nặng của $25$ học sinh nam lớp 12A được cho bởi dưới đây  Các mệnh đề sau đúng hay sai? (Kết quả làm tròn đến hàng phần trăm)<br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS12_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu ghép nhóm đã cho là $80$",
        "answer": false
      },
      {
        "text": "Số trung bình của mẫu số liệu ghép nhóm đã cho là $\\bar{x}=66{,}16$",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu ghép nhóm đã cho là $s^2=20{,}64$",
        "answer": false
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu ghép nhóm đã cho là $S=4{,}45$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS12_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Khoảng biến thiên $R=80-60=20$.<br>- Số trung bình của mẫu số liệu ghép nhóm là  $\\bar{x}=\\dfrac{62\\cdot9+66\\cdot11+70\\cdot1+74\\cdot3+78\\cdot1}{25}=66{,}16.$<br>- Phương sai của mẫu số liệu ghép nhóm đã cho là   $s^2 =\\dfrac{9.(62 - 66{,}16)^2 + 11.(66 - 66{,}16)^2 + 1.(70 - 66{,}16)^2 + 3.(74 - 66{,}16)^2 + 1.(78 - 66{,}16)^2}{25}$<br>$=19{,}77.$<br>- Độ lệch chuẩn của mẫu số liệu ghép nhóm là $s=\\sqrt{s^2}=4{,}45$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS4",
    "question": "Bảng sau thống kê chiều cao của $32$ em học sinh lớp $12A$.  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS14_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu trên là $25$",
        "answer": true
      },
      {
        "text": "Tứ phân vị thứ ba của mẫu số liệu trên thuộc nhóm $[165;170)$",
        "answer": true
      },
      {
        "text": "Tứ phân vị thứ nhất của mẫu số liệu trên (làm tròn đến hàng đơn vị) là $157$",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu trên (làm tròn đến $2$ chữ số thập phân) là $5{,}19$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Khoảng biến thiên bằng $175-150=25$.<br>- <strong>Đúng</strong>. Gọi $x_1, \\ldots, x_{32}$ là chiều cao của $32$ em học sinh lớp $12A$ và giả sử dãy số liệu gốc này đã được sắp xếp theo thứ tự tăng dần. Tứ phân vị thứ ba $Q_3=\\dfrac{x_{24}+x_{25}}{2}$ nên thuộc nhóm $[165; 170)$.<br>- <strong>Đúng</strong>. Tứ phân vị thứ nhất $Q_1=\\dfrac{x_8+x_9}{2} \\in [155; 160)$. Khi đó  $Q_1=155+\\dfrac{8-5}{7}\\cdot5=\\dfrac{110}{17}\\approx 157.$<br>- <strong>Sai</strong>. Số trung bình của mẫu số liệu là  $\\overline{x}=\\dfrac{152{,}5\\cdot5+157{,}5\\cdot7+162{,}5\\cdot8+167{,}5\\cdot10+172{,}5\\cdot2}{32}=\\dfrac{5185}{32}.$  Khi đó độ lệch chuẩn là  $s=\\sqrt{\\dfrac{1}{32}\\left(152{,}5^2\\cdot5+157{,}5^2\\cdot7+162{,}5^2\\cdot8+167{,}5^2\\cdot10+172{,}5^2\\cdot2\\right)-\\left(\\dfrac{5185}{32}\\right)^2}\\approx5{,}91.$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS5",
    "question": "Số giờ sử dụng smartphone trong $1$ ngày nghỉ của học sinh lớp 12A7 được thống kê trong bảng sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS18_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu trên bằng $6$",
        "answer": true
      },
      {
        "text": "Giá trị trung bình của mẫu số liệu trên bằng $\\dfrac{226}{45}$",
        "answer": false
      },
      {
        "text": "Số trung vị của mẫu số liệu trên bằng $\\dfrac{19}{8}$",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu trên bằng $\\dfrac{2\\sqrt{730}}{45}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Khoảng biến thiên của mẫu số liệu trên bằng $6-0 = 6$.<br>- <strong>Sai</strong>. Số học sinh lớp 12A7 là $n=3+15+12+9+5+1=45$. <br>  Ta có bảng sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS18_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị trung bình của mẫu số liệu trên bằng   $\\overline{x} = \\dfrac{0{,}5\\cdot 3 + 1{,}5\\cdot 15 +2{,}5\\cdot 12 + 3{,}5\\cdot 9 +4{,}5\\cdot 5 + 5{,}5\\cdot 1}{45} = \\dfrac{227}{90}.$<br>- <strong>Đúng</strong>. Ta có bảng tần số tích luỹ như sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS18_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $\\dfrac{n}{2}=22{,}5$. Suy ra nhóm chứa trung vị là $[2;3)$. <br>  Do đó $Q_2 = 2 + \\dfrac{22{,}5-18}{12}\\cdot (3-2) = \\dfrac{19}{8}$.<br>- <strong>Sai</strong>. Phương sai của mẫu số liệu trên là  $s^2 = \\dfrac{1}{45}\\left(3\\cdot 0{,}5^2 + 15\\cdot 1{,}5^2 + 12\\cdot 2{,}5^2 + 9\\cdot 3{,}5^2 +5\\cdot 4{,}5^2 +1\\cdot 5{,}5^2\\right)-\\left(\\dfrac{227}{90}\\right)^2 = \\dfrac{2924}{2025}.$  Độ lệch chuẩn của mẫu số liệu là $s = \\sqrt{\\dfrac{2924}{2025}} = \\dfrac{2\\sqrt{731}}{45}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D322DS6",
    "question": "Thầy Tuấn thống kê lại điểm trung bình cuối năm của các học sinh lớp $11A$ và $11B$ ở bảng sau:   <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS19_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của điểm số học sinh lớp $11A$ là $5$",
        "answer": false
      },
      {
        "text": "Nếu so sánh theo khoảng biến thiên thì điểm trung bình của các học sinh lớp $11B$ ít phân tán hơn điểm trung bình của các học sinh lớp $11A$",
        "answer": true
      },
      {
        "text": "Xét mẫu số liệu của lớp $11A$ ta có độ lệch chuẩn của mẫu số liệu ghép nhóm là $\\sqrt{0{,}51}$",
        "answer": false
      },
      {
        "text": "Nếu so sánh theo độ lệch chuẩn thì học sinh lớp $11A$ có điểm trung bình ít phân tán hơn học sinh lớp $11B$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Điểm số học sinh lớp $11A$ có thể thấp hơn $5$ nên khoảng biến thiên của điểm số học sinh lớp $11A$ có thể lớn hơn $5$.<br>- <strong>Đúng</strong>.<br>  Khoảng biến thiên của điểm trung bình của các học sinh lớp $11A$ là $R_1=10-5=5$.<br>  Khoảng biến thiên của điểm trung bình của các học sinh lớp $11B$ là $R_2=10-6=4$.<br>  Vì $R_1&gt;R_2$ nên nếu so sánh theo khoảng biến thiên thì điểm trung bình của các học sinh lớp $11B$ ít phân tán hơn điểm trung bình của các học sinh lớp $11A$.<br>- <strong>Sai</strong>.<br>  Chọn giá trị đại diện cho các nhóm số liệu, ta có  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS19_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét mẫu số liệu của lớp $11A$ ta có số trung bình của mẫu số liệu ghép nhóm là  \\[\\overline{x}_1= \\dfrac{5{,}5 \\cdot 1 + 6{,}5 \\cdot 0 + 7{,}5 \\cdot 11 + 8{,}5 \\cdot 22 + 9{,}5 \\cdot 6}{1+0+11+22+6} = 8{,}3.\\]  Phương sai của mẫu số liệu ghép nhóm là  \\[\\dfrac{1\\cdot(5{,}5-8{,}3)^2+0\\cdot(6{,}5-8{,}3)^2+11\\cdot(7{,}5-8{,}3)^2+22\\cdot(8{,}5-8{,}3)^2+6\\cdot(9{,}5-8{,}3)^2}{1+0+11+22+6}=0{,}61.\\]  Độ lệnh chuẩn của mẫu số liệu ghép nhóm là $s_1=\\sqrt{0{,}61}$.<br>- <strong>Đúng</strong>.<br>  Xét mẫu số liệu của lớp $11B$ ta có số trung bình của mẫu số liệu ghép nhóm là  \\[  \\overline{x}_2 = \\dfrac{6{,}5 \\cdot 6 + 7{,}5 \\cdot 8 + 8{,}5 \\cdot 14 + 9{,}5 \\cdot 12}{6 + 8 + 14 + 12} = 8{,}3.  \\]   Phương sai của mẫu số liệu ghép nhóm là  \\[  \\dfrac{6\\cdot(6{,}5-8{,}3)^2 + 8\\cdot(7{,}5-8{,}3)^2 + 14\\cdot(8{,}5-8{,}3)^2 + 12\\cdot(9{,}5-8{,}3)^2}{6+8+14+12}= 1{,}06.  \\]   Độ lệch chuẩn của mẫu số liệu ghép nhóm là $s_2 = \\sqrt{1{,}06}$.<br>  Vì $s_1&lt;s_2$ nên nếu so sánh theo độ lệch chuẩn thì học sinh lớp $11A$ có điểm trung bình ít phân tán hơn học sinh lớp $11B$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS7",
    "question": "Thời gian hoàn thành bài kiểm tra môn Toán của các học sinh lớp $12$A và $12$B được ghi lại ở bảng sau:  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS21_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên cho thời gian hoàn thành bài kiểm tra môn Toán của học sinh mỗi lớp là $20$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm về thời gian hoàn thành bài kiểm tra môn Toán của học sinh lớp $12$A là $7{,}78$ (kết quả làm tròn đến hàng phần trăm)",
        "answer": false
      },
      {
        "text": "Phương sai của mẫu số liệu ghép nhóm về thời gian hoàn thành bài kiểm tra môn Toán của học sinh lớp $12$B là $19{,}22$ (kết quả làm tròn đến hàng phần trăm)",
        "answer": true
      },
      {
        "text": "Nếu so sánh theo độ lệch chuẩn của mẫu số liệu ghép nhóm thì học sinh lớp $12$A có tốc độ hoàn thành bài kiểm tra môn Toán đồng đều hơn lớp $12$B",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Khoảng biến thiên thời gian hoàn thành bài kiểm tra môn Toán của học sinh mỗi lớp là $45-25=20$.<br>- <strong>Sai</strong>.<br>  Xét mẫu số liệu ghép nhóm của lớp $12$A:  Cỡ mẫu là $n=7 + 16 + 15 + 4 = 42$.  <br>- Tứ phân vị thứ nhất $Q_1$: Ta có $\\dfrac{1}{4} \\cdot 42 = 10{,}5$ nên nhóm chứa $Q_1$ là $[30;35)$.<br>  Do đó $Q_{1}=30+\\dfrac{\\dfrac{42}{4}-7}{16}\\cdot (35-30)\\approx 31{,}09$.<br>- Tứ phân vị thứ ba $Q_3$: Ta có $\\dfrac{3}{4} \\cdot 42 = 31{,}5$ nên nhóm chứa $Q_3$ là $[35;40)$.<br>  Do đó $Q_{3}=35+\\dfrac{\\dfrac{3\\cdot 42}{4}-23}{15}\\cdot (40-35)\\approx 37{,}83$.  Vậy khoảng tứ phân vị là $Q_3-Q_1=37{,}83-31{,}09=6{,}74$.<br>- <strong>Đúng</strong><br>  Giá trị trung bình của mẫu số liệu ghép nhóm của lớp $12$B là<br>  $\\overline{x} = \\dfrac{5 \\cdot 27{,}5 + 14 \\cdot 32{,}5 + 17 \\cdot 37{,}5 + 6 \\cdot 42{,}5}{42} = 35{,}36$<br>  Phương sai của mẫu số liệu ghép nhóm của lớp $12$B là<br>  $\\sigma^2 = \\dfrac{5\\cdot (27{,}5 - 35{,}36)^2+14\\cdot (32{,}5 - 35{,}36)^2+17\\cdot (37{,}5 - 35{,}36)^2+6\\cdot (42{,}5 - 35{,}36)^2}{42} \\approx 19{,}22$<br>- <strong>Đúng</strong>.<br>  Giá trị trung bình của mẫu số liệu ghép nhóm của lớp $12$A là<br>  $\\overline{x} = \\dfrac{7 \\cdot 27{,}5 + 16 \\cdot 32{,}5 + 15 \\cdot 37{,}5 + 4 \\cdot 42{,}5}{42} \\approx 34{,}4$<br>  Phương sai của mẫu số liệu ghép nhóm của lớp $12$A là<br>  $\\sigma^2 = \\dfrac{7\\cdot (27{,}5- 34{,}4)^2+16\\cdot (32{,}5 - 34{,}4)^2+15\\cdot (37{,}5 - 34{,}4)^2+4\\cdot (42{,}5 - 34{,}4)^2}{42} \\approx 18{,}99$<br>  Độ lệch chuẩn của lớp $12$A là $\\sigma =\\sqrt{\\sigma^2}=\\sqrt{18{,}99}\\approx 4{,}36$ .<br>  Độ lệch chuẩn của lớp $12$B là $\\sigma =\\sqrt{\\sigma^2}=\\sqrt{19{,}22}\\approx 4{,}38$ .<br>  Độ lệch chuẩn của lớp $12$A nhỏ hơn lớp $12$B.  Vậy học sinh lớp $12$A có tốc độ hoàn thành bài kiểm tra môn Toán đồng đều hơn lớp $12$B.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D322DS1",
    "question": "Thành tích nhảy xa của lớp $12A$ được cho ở biểu đồ sau.  <br><img src=\"data/12/2D3/im2D32/loc2_2_TL_TN_THPT_Bin_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ biểu đồ trên ta có bảng số liệu ghép nhóm như sau:  <br><img src=\"data/12/2D3/im2D32/loc2_2_TL_TN_THPT_Bin_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tần số của nhóm $[240;270)$ là $14$",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu trên bằng $881$ (làm tròn đến hàng đơn vị)",
        "answer": true
      },
      {
        "text": "Khoảng biến thiên của bảng số liệu ghép nhóm trên là $R=150$ cm",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm cho bởi biểu đồ trên là $40$ cm",
        "answer": false
      }
    ],
    "explain": "<br>- Dựa vào bảng số liệu ghép nhóm ta thấy Tần số của nhóm $\\left[240; 270 \\right)$ là $14$.<br>- Cỡ mẫu $ n=58 $.<br>  Số trung bình của mẫu số liệu ghép nhóm là  $ \\overline{x}=\\dfrac{3\\cdot 165+5\\cdot 195+28\\cdot 225+14\\cdot 255+8\\cdot 285}{58}=\\dfrac{6810}{29}. $  Phương sai của mẫu số liệu ghép nhóm là  $ S^2=\\dfrac{1}{58}\\left(3\\cdot 165^2+5\\cdot 195^2+28\\cdot 225^2+14\\cdot 255^2+8\\cdot 285^2 \\right)-\\left( \\dfrac{6810}{29}\\right) ^2\\approx 881. $<br>- Khoảng biến thiên của bảng số liệu ghép nhóm trên là $R=300-150=150$ cm.<br>- Ta có cỡ mẫu $ n=58 $.<br>  Gọi $x_1$, $x_2$, $\\ldots$, $x_{58}$ là thành tích nhảy xa của lớp $12A$ theo thứ tự không giảm.<br>  Tứ phân vị thứ nhất của mẫu số liệu gốc bằng $x_{11} \\in \\left[ 210;240\\right)$.<br>  Tứ phân vị thứ ba của mẫu số liệu gốc bằng $x_{44} \\in \\left[ 240;270\\right)$.<br>  Tứ phân vị thứ nhất và thứ ba của mẫu số liệu ghép nhóm lần lượt là:  $Q_{1}=210+ \\dfrac{\\dfrac{58}{4}-\\left(3+5\\right)}{28}\\cdot \\left(240-210\\right)=\\dfrac{6075}{28};$  $Q_{3}=240+ \\dfrac{\\dfrac{3\\cdot58}{4}-\\left(3+5+28\\right)}{14}\\cdot \\left(270-240\\right)=\\dfrac{3585}{14}.$  Khoảng tứ phân vị $ \\Delta_{Q}=Q_{3}-Q_{1}=\\dfrac{1095}{28}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D322DS7",
    "question": "Thành tích môn nhảy cao của các vận động viên tại một giải điền kinh dành cho học sinh trung học phổ thông như sau  <br><img src=\"data/12/2D3/im2D32/loc3_2_TL_TN_DS_THPT__006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu ghép nhóm này là $8$",
        "answer": true
      },
      {
        "text": "Thành tích trung bình của môn nhảy cao là $\\bar{x}=173{,}5$",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu ghép nhóm (làm tròn đến hàng phần chục) là $2{,}3$",
        "answer": false
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu ghép nhóm (làm tròn đến hàng phần chục) là $1{,}5$",
        "answer": true
      }
    ],
    "explain": "$\\begin{array}{|c|c|c|} \\hline \\text { Nhóm } & \\text { Tần số } & \\begin{array}{c} \\text { Tần số } \\\\ \\text { tích luỹ } \\end{array} \\\\ \\hline {[170; 172)} 3 3 \\\\ {[172; 174)} 10 13 \\\\ {[174; 176)} 6 19 \\\\ {[176; 178)} 1 20 \\\\ \\hline n=20 \\\\ \\hline \\end{array}$ <br>- <strong>Đúng</strong>.<br> Khoảng biến thiên của mẫu số liệu ghép nhóm này là $178-170=8$.<br>- <strong>Đúng</strong>.<br> Thành tích trung bình của môn nhảy cao là $\\bar{x}=\\dfrac{171\\cdot 3+173\\cdot 10+175\\cdot 6+177}{20}=173{,}5.$<br>- <strong>Sai</strong>.<br> Phương sai của mẫu số liệu ghép nhóm là $s^2=\\dfrac{(171-173{,}5)^2\\cdot 3+(173-173{,}5)^2\\cdot 10+(175-173{,}5)^2\\cdot 6+(177-173{,}5)^2}{20}\\approx 2{,}4.$<br>- <strong>Sai</strong>.<br> Độ lệch chuẩn của mẫu số liệu ghép nhóm là $\\sqrt{2{,}4}\\approx 1{,}5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D324DS1",
    "question": "Một công ty giống cây trồng đã thử nghiệm hai phương pháp chăm sóc khác nhau cho cây hướng dương. Sau hai tuần, người ta thấy cây được chăm sóc theo cả hai phương pháp đều thấp hơn $50$ cm. Bảng tần số ghép nhóm về chiều cao (cm) của các cây theo phương pháp $A$ và phương pháp $B$ như sau (cỡ mẫu mỗi phương pháp là $N=40$):<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center\" border=\"1\"><tr><th style=\"padding:4px 8px\">Chiều cao (cm)</th><td style=\"padding:4px 8px\">$[0;10)$</td><td style=\"padding:4px 8px\">$[10;20)$</td><td style=\"padding:4px 8px\">$[20;30)$</td><td style=\"padding:4px 8px\">$[30;40)$</td><td style=\"padding:4px 8px\">$[40;50)$</td></tr><tr><th style=\"padding:4px 8px\">Tần số (A)</th><td style=\"padding:4px 8px\">$6$</td><td style=\"padding:4px 8px\">$8$</td><td style=\"padding:4px 8px\">$12$</td><td style=\"padding:4px 8px\">$8$</td><td style=\"padding:4px 8px\">$6$</td></tr><tr><th style=\"padding:4px 8px\">Tần số (B)</th><td style=\"padding:4px 8px\">$13$</td><td style=\"padding:4px 8px\">$6$</td><td style=\"padding:4px 8px\">$2$</td><td style=\"padding:4px 8px\">$6$</td><td style=\"padding:4px 8px\">$13$</td></tr></table>Xét tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của chiều cao các cây được chăm sóc theo mỗi phương pháp $A$ và $B$ bằng nhau",
        "answer": true
      },
      {
        "text": "Trung bình chiều cao các cây được chăm sóc theo mỗi phương pháp $A$ và $B$ bằng nhau",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của chiều cao các cây được chăm sóc theo phương án $A$ là $12{,}65$ (cm)",
        "answer": true
      },
      {
        "text": "Dựa vào độ lệch chuẩn thì chiều cao của các loại cây được chăm sóc theo phương án $B$ ít bị chênh lệch hơn so với phương án $A$",
        "answer": false
      }
    ],
    "explain": "<br>- Cả hai bảng số liệu đều có chung nhóm đầu $[0;10)$ và nhóm cuối $[40;50)$ nên khoảng biến thiên của cả hai đều là $R=50-0=50$. Suy ra mệnh đề đúng.<br>- Chiều cao trung bình phương án $A$: $\\overline{x}_A=\\dfrac{5\\cdot 6+15\\cdot 8+25\\cdot 12+35\\cdot 8+45\\cdot 6}{40}=25$ (cm). Chiều cao trung bình phương án $B$: $\\overline{x}_B=\\dfrac{5\\cdot 13+15\\cdot 6+25\\cdot 2+35\\cdot 6+45\\cdot 13}{40}=25$ (cm). Vậy hai trung bình bằng nhau. Suy ra mệnh đề đúng.<br>- Độ lệch chuẩn phương án $A$: $s_A=\\sqrt{\\dfrac{5^2\\cdot 6+15^2\\cdot 8+25^2\\cdot 12+35^2\\cdot 8+45^2\\cdot 6}{40}-25^2}=\\sqrt{160}\\approx 12{,}65$ (cm). Suy ra mệnh đề đúng.<br>- Độ lệch chuẩn phương án $B$: $s_B=\\sqrt{\\dfrac{5^2\\cdot 13+15^2\\cdot 6+25^2\\cdot 2+35^2\\cdot 6+45^2\\cdot 13}{40}-25^2}=\\sqrt{290}\\approx 17{,}03$ (cm). Vì $s_A<s_B$ nên chiều cao cây theo phương án $A$ ít bị chênh lệch hơn (đồng đều hơn) phương án $B$, không phải ngược lại. Suy ra mệnh đề sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D322DS8",
    "question": "Một bác tài xế thống kê lại độ dài quãng đường bác đã lái xe mỗi ngày trong một tháng ở bảng sau:<br>{ <table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Độ dài quãng đường (km)</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[ 50;100 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[ 100;150 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[ 150;200 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[ 200;250 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[ 250;300 \\right)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Số ngày</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$9$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$4$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$2$</td></tr></table>}",
    "subQuestions": [
      {
        "text": "Số trung bình của mẫu số liệu ghép nhóm là $145$",
        "answer": false
      },
      {
        "text": "Khoảng biến thiên của mẫu số liệu ghép nhóm là $250$ km",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm bằng $79{,}17$ <em>(kết quả làm tròn đến hàng phần trăm)</em>",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu ghép nhóm bằng $55{,}68$ <em>(kết quả làm tròn đến hàng phần trăm)</em>",
        "answer": true
      }
    ],
    "explain": "{ <table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Độ dài quãng đường (km)</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[50;100\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[100;150\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[150;200\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[200;250\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[250;300\\right)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Giá trị đại diện</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$75$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$125$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$175$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$225$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$275$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Số ngày</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$9$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$4$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$2$</td></tr></table>}<br>- <strong>Sai</strong>.<br>  Cỡ mẫu:\t$n=5+10+9+4+2=30$.<br> Số trung bình của mẫu số liệu ghép nhóm là<br>$\\overline{x}=\\dfrac{75\\cdot5+125\\cdot10+175\\cdot9+225\\cdot4+275\\cdot2}{30}=155$.<br>- <strong>Đúng</strong>.<br>  Khoảng biến thiên của mẫu số liệu ghép nhóm là $R=300-50=250$ km.<br>- <strong>Đúng</strong>.<br>  Bảng tần số tích lũy<br>{ <table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Độ dài quãng đường (km)</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[50;100 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[100;150 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[150;200 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[200;250 \\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[250;300 \\right)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Số ngày</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$9$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$4$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$2$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\"><strong>Tần số tích lũy</strong></td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$15$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$24$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$28$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$30$</td></tr></table>}<br>Ta có $\\dfrac{n}{4}=\\dfrac{30}{4}=7,5&lt;15$. Suy ra\t$Q_1=100+\\dfrac{7{,}5-5}{10}\\cdot 50=\\dfrac{225}{2}$.<br> $\\dfrac{3n}{4}=\\dfrac{3\\cdot 30}{4}=22{,}5&lt;24$. Suy ra $Q_3=150+\\dfrac{22{,}5-15}{9}\\cdot 50=\\dfrac{575}{3}$. <br> Khoảng tứ phân vị của mẫu là $\\Delta Q=Q_3-Q_1=\\dfrac{575}{3}-\\dfrac{225}{2}=\\dfrac{475}{6} \\approx 79{,}17$.<br>- <strong>Đúng</strong>.<br>  Phương sai của mẫu là $$\\begin{aligned} s^2\t= \\dfrac{1}{30}\\cdot\\left(5\\cdot75^2+10\\cdot125^2+9\\cdot175^2+4\\cdot225^2+2\\cdot275^2\\right)-155^2= 3\\,100. \\end{aligned}$$ Độ lệch chuẩn là $s=\\sqrt{3\\,100}\\approx 55{,}68$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS9",
    "question": "Giả sử kết quả khảo sát khu vực $A$ và $B$ về độ tuổi kết hôn của một số phụ nữ vừa lập gia đình được cho ở bảng sau<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Tuổi kết hôn</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[19; 22\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[22; 25\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[25; 28\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[28; 31\\right)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$\\left[31; 34\\right)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số phụ nữ ở khu vực $A$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$27$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$31$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$25$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$7$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số phụ nữ ở khu vực $B$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$47$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$40$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$11$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$2$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$0$</td></tr></table>",
    "subQuestions": [
      {
        "text": "Số phụ nữ tham gia khảo sát ở mỗi khu vực $A$ và $B$ là $100$ người",
        "answer": true
      },
      {
        "text": "Khoảng biến thiên của mẫu số liệu ghép nhóm ứng với khu vực $B$ là $15$ $\\left(\\text{tuổi}\\right)$",
        "answer": false
      },
      {
        "text": "Xét độ tuổi kết hôn trung bình thì phụ nữ ở khu vực $A$ kết hôn sớm hơn phụ nữ ở khu vực $B$",
        "answer": false
      },
      {
        "text": "Nếu so sánh theo độ lệch chuẩn thì phụ nữ ở khu vực $B$ có độ tuổi kết hôn đồng đều hơn",
        "answer": true
      }
    ],
    "explain": "Giá trị đại diện của các nhóm $\\left[19; 22\\right)$, $\\left[22; 25\\right)$, $\\left[25; 28\\right)$, $\\left[28; 31\\right)$, $\\left[31; 34\\right)$ lần lượt là $20{,}5$; $23{,}5$; $26{,}5$; $29{,}5$; $32{,}5$.<br>- <strong>Đúng</strong>.<br>  Ta có số phụ nữ khảo sát ở khu vực $A$ là $n_A = 10 + 27 + 31 + 25 + 7 = 100$ $\\left(\\text{người}\\right)$.<br> Số phụ nữ khảo sát ở khu vực $B$ là $n_B = 47 + 40 + 11 + 2 + 0 = 100$ $\\left(\\text{người}\\right)$.<br>- <strong>Sai</strong>.<br>  Mẫu số liệu của khu vực $B$ có các nhóm chứa số liệu $\\left(\\text{tần số lớn hơn } 0\\right)$ là $\\left[19; 22\\right)$, $\\left[22; 25\\right)$, $\\left[25; 28\\right)$, $\\left[28; 31\\right)$.<br> Khoảng biến thiên của mẫu số liệu ứng với khu vực $B$ là $R_B = 31 - 19 = 12$.<br>- <strong>Sai</strong>.<br>  Tuổi kết hôn trung bình của phụ nữ ở khu vực $A$ là \\[\\overline{x}_A = \\dfrac{10 \\cdot 20{,}5 + 27 \\cdot 23{,}5 + 31 \\cdot 26{,}5 + 25 \\cdot 29{,}5 + 7 \\cdot 32{,}5}{100} = 26{,}26 \\text{ }\\left(\\text{tuổi}\\right).\\] Tuổi kết hôn trung bình của phụ nữ ở khu vực $B$ là \\[\\overline{x}_B = \\dfrac{47 \\cdot 20{,}5 + 40 \\cdot 23{,}5 + 11 \\cdot 26{,}5 + 2 \\cdot 29{,}5 + 0 \\cdot 32{,}5}{100} = 22{,}54 \\text{ }\\left(\\text{tuổi}\\right).\\] Vì $\\overline{x}_A &gt; \\overline{x}_B$ nên xét theo độ tuổi kết hôn trung bình, phụ nữ ở khu vực $A$ kết hôn muộn hơn phụ nữ ở khu vực $B$.<br>- <strong>Đúng</strong>.<br>  $s_A^2=\\dfrac{10\\cdot 20{,}5^2+27\\cdot 23{,}5^2+31\\cdot 26{,}5^2+25\\cdot 29{,}5^2+7\\cdot 32{,}5^2}{100}-26{,}26^2=10{,}7424$, $s_A\\approx 3{,}28$.<br>$s_B^2=5{,}0184$, $s_B\\approx 2{,}24$.<br>Vì $s_B&lt;s_A$ nên độ tuổi kết hôn ở khu vực $B$ đồng đều hơn.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS10",
    "question": "Khảo sát thời gian tập thể dục mỗi ngày (tính theo phút) của $32$ người thuộc hai câu lạc bộ: CLB Yoga và CLB Gym. Kết quả được thu thập và tổng hợp trong bảng tần số ghép nhóm dưới đây:<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Thời gian (phút)</td><td style=\"border:1px solid #888;padding:3px 8px;\">[30; 50)</td><td style=\"border:1px solid #888;padding:3px 8px;\">[50; 70)</td><td style=\"border:1px solid #888;padding:3px 8px;\">[70; 90)</td><td style=\"border:1px solid #888;padding:3px 8px;\">[90; 110)</td><td style=\"border:1px solid #888;padding:3px 8px;\">[110; 130)</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">CLB Yoga</td><td style=\"border:1px solid #888;padding:3px 8px;\">2</td><td style=\"border:1px solid #888;padding:3px 8px;\">3</td><td style=\"border:1px solid #888;padding:3px 8px;\">6</td><td style=\"border:1px solid #888;padding:3px 8px;\">3</td><td style=\"border:1px solid #888;padding:3px 8px;\">2</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">CLB Gym</td><td style=\"border:1px solid #888;padding:3px 8px;\">4</td><td style=\"border:1px solid #888;padding:3px 8px;\">1</td><td style=\"border:1px solid #888;padding:3px 8px;\">6</td><td style=\"border:1px solid #888;padding:3px 8px;\">1</td><td style=\"border:1px solid #888;padding:3px 8px;\">4</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Tổng số</td><td style=\"border:1px solid #888;padding:3px 8px;\">6</td><td style=\"border:1px solid #888;padding:3px 8px;\">4</td><td style=\"border:1px solid #888;padding:3px 8px;\">12</td><td style=\"border:1px solid #888;padding:3px 8px;\">4</td><td style=\"border:1px solid #888;padding:3px 8px;\">6</td></tr></table><br>Xét tính đúng sai của các khẳng định sau.",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu ghép nhóm cho cả $32$ người là $R=100$ (phút)",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm cho cả $32$ người là $60$(phút)",
        "answer": false
      },
      {
        "text": "Mức độ tập luyện của những người ở CLB Yoga ổn định (đồng đều) hơn CLB Gym",
        "answer": true
      },
      {
        "text": "Chọn ngẫu nhiên $4$ người từ $32$ người trên. Xác suất để trong $4$ người được chọn có cả hai CLB Yoga, Gym và có đúng 2 người tập thể dục từ 110 phút trở lên là $\\dfrac{4388}{35960}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Khoảng biến thiên cho tổng $32$ người là $130-30=100$ (phút).<br>- <strong>Sai</strong>.<br>  Cỡ mẫu $32$. $Q_1$ thuộc nhóm $[50;70)$: $Q_1=50+\\dfrac{8-6}{4}\\cdot 20=60$.<br>$Q_3$ thuộc nhóm $[90;110)$: $Q_3=90+\\dfrac{24-22}{4}\\cdot 20=100$.<br>Khoảng tứ phân vị là $100-60=40$ (phút), không phải $60$.<br>- <strong>Đúng</strong>.<br>  Trung bình thời gian tập luyện của CLB Yoga là<br> $\\overline{x}_1=\\dfrac{1}{16}(2\\cdot 40+3\\cdot 60+6\\cdot 80+3\\cdot 100+2\\cdot 120)=80$.<br> Phương sai của mẫu dữ liệu của CLB Yoga:<br> $s_{1}^2=\\dfrac{1}{16}[2\\cdot 40^2+3\\cdot 60^2+6\\cdot 80^2+ 3\\cdot 100^2+2\\cdot 120^2 ]-{80}^2=550$.<br> Trung bình thời gian tập luyện của CLB Gym<br> $\\overline{x}_2=\\dfrac{1}{16}(4\\cdot 40+1\\cdot 60+6\\cdot 80+1\\cdot 100+4\\cdot 120)=80$.<br> Phương sai của mẫu dữ liệu của CLB Gym:<br> $s_{2}^2=\\dfrac{1}{16}(4\\cdot 40^2+1\\cdot 60^2+6\\cdot 80^2+1\\cdot 100^2+4\\cdot 120^2)-80^2=850$.<br> Vì $s_{2}^2&gt; s_{1}^2$ nên mức độ tập luyện của những người ở CLB Yoga ổn định (đồng đều) hơn CLB Gym.<br>- <strong>Đúng</strong>.<br>  Không gian mẫu $n(\\Omega)=\\mathrm{C}_{32}^4=35\\,960$.<br> Số người tập luyện $110$ phút trở lên có: 2 người ở CLB Yoga và 4 người ở CLB Gym.<br> TH1: Chọn 4 người sao cho có cả CLB Gym, CLB yoga và có đúng 2 người tập luyện $110$ phút trở lên có cả 2 người ở CLB Yoga có<br> $\\mathrm{C}_{2}^2\\cdot (\\mathrm{C}_{14}^{1} \\cdot \\mathrm{C}_{12}^{1}+\\mathrm{C}_{12}^2)=234$ (cách chọn).<br> TH2: Chọn 4 người sao cho có cả CLB Gym, CLB yoga và có đúng 2 người tập luyện $110$ phút trở lên có cả 2 người ở CLB Gym có<br> $\\mathrm{C}_{4}^2(\\mathrm{C}_{14}^{1}\\cdot \\mathrm{C}_{12}^{1}+\\mathrm{C}_{14}^2)=1554$ (cách chọn).<br> TH3: Chọn 4 người sao cho có cả CLB Gym, CLB yoga và có đúng 2 người tập luyện $110$ phút trở lên có 1 người ở CLB Gym và người còn lại ở CLB Yoga có<br> $\\mathrm{C}_{4}^{1}\\mathrm{C}_{2}^{1}(\\mathrm{C}_{12}^{1}\\cdot \\mathrm{C}_{14}^{1}+\\mathrm{C}_{12}^2+\\mathrm{C}_{14}^2)=2600$.<br> Vậy xác suất để trong 4 người được chọn có cả hai CLB Yoga, Gym và có đúng 2 người tập thể dục từ 110 phút trở lên là<br> $P=\\dfrac{234+1554+2600}{35960}=\\dfrac{4388}{35960}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS11",
    "question": "Thống kê thời gian trung bình sử dụng máy vi tính trong một ngày của nhân viên công ty X cho bởi bảng số liệu ghép nhóm sau<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Thời gian (phút)</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[30;60)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[60;90)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[90;120)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[120;150)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[150;180)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số nhân viên</td><td style=\"border:1px solid #888;padding:3px 8px;\">$3$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$25$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$2$</td></tr></table>",
    "subQuestions": [
      {
        "text": "Số phần tử (cỡ mẫu) của mẫu số liệu trên là $n=40$",
        "answer": true
      },
      {
        "text": "Số trung bình cộng của mẫu số liệu trên bằng $118{,}5$",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu trên bằng $945$",
        "answer": false
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu trên bằng $3\\sqrt{105}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $n=3+5+5+25+2=40$.<br>- <strong>Đúng</strong>.<br>  <table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Thời gian (phút)</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[30;60)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[60;90)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[90;120)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[120;150)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[150;180)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Giá trị đại diện</td><td style=\"border:1px solid #888;padding:3px 8px;\">$45$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$75$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$105$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$135$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$165$.</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số nhân viên</td><td style=\"border:1px solid #888;padding:3px 8px;\">$3$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$25$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$2$</td></tr></table><br>$\\overline{x}=\\dfrac{45\\cdot 3+75\\cdot 5+105\\cdot 5+135\\cdot 25+165\\cdot 2}{40}=118{,}5$.<br>- <strong>Sai</strong>.<br>  Phương sai $S^2=\\dfrac{1}{40}(3\\cdot45^2+5\\cdot75^2+5\\cdot105^2+25\\cdot135^2+2\\cdot165^2) - 118{,}5^2 = 942{,}75$.<br>- <strong>Sai</strong>.<br>  $S=\\sqrt{942{,}75}=\\dfrac{3\\sqrt{419}}{2}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS12",
    "question": "Một cơ sở sản xuất hàng thủ công thống kê về số lượng sản phẩm bán được trong ngày như sau:<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số lượng sản phẩm</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[100;140)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[140;180)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[180;220)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[220;260)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[260;300)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số ngày</td><td style=\"border:1px solid #888;padding:3px 8px;\">$3$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$6$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$12$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$6$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$3$</td></tr></table>",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu đã cho là $200$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu đã cho là $60$",
        "answer": true
      },
      {
        "text": "Trung bình số sản phẩm bán được trong một ngày là $220$",
        "answer": false
      },
      {
        "text": "Phương sai của mẫu số liệu đã cho là $1\\,920$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Ta có khoảng biến thiên $R=300-100=200$.<br>- <strong>Đúng</strong>.<br>  Ta có $n=30$.<br> Suy ra $Q_1=140+\\dfrac{\\dfrac{1\\cdot 30}{4}-3}{6}\\cdot (180-140)=170$.<br> Và $Q_3=220+\\dfrac{\\dfrac{3\\cdot 30}{4}-(3+6+12)}{6}\\cdot (260-220)=230$.<br> Vậy khoảng tứ phân vị là $\\Delta Q=Q_3-Q_1=230-170=60$.<br>- <strong>Sai</strong>.<br>  Giá trị trung bình của mẫu số liệu là \\[\\overline{x}=\\dfrac{3\\cdot 120+6\\cdot 160+12\\cdot 200+6\\cdot 240+3\\cdot 280}{30}=200.\\]<br>- <strong>Đúng</strong>.<br>  Phương sai của mẫu số liệu là \\[s^2=\\dfrac{3\\cdot 120^2+6\\cdot 160^2+12\\cdot 200^2+6\\cdot 240^2+3\\cdot 280^2}{30}-200^2=1\\,920.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS13",
    "question": "Thời gian hoàn thành một bài viết chính tả của một số học sinh lớp 4 hai trường X và Y được ghi lại ở bảng sau<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Thời gian (phút)</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[6;7)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[7;8)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[8;9)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[9;10)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[10;11)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số học sinh trường X</td><td style=\"border:1px solid #888;padding:3px 8px;\">$8$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$13$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$10$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$9$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số học sinh trường Y</td><td style=\"border:1px solid #888;padding:3px 8px;\">$4$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$12$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$17$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$14$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$3$</td></tr></table>",
    "subQuestions": [
      {
        "text": "Nếu so sánh theo độ lệch chuẩn thì học sinh trường Y có tốc độ viết đồng đều hơn",
        "answer": true
      },
      {
        "text": "Nếu so sánh theo khoảng tứ phân vị thì học sinh trường X có tốc độ viết đồng đều hơn",
        "answer": false
      },
      {
        "text": "Phương sai của mẫu số liệu ghép nhóm của trường X là $1{,}08$ và phương sai của mẫu số liệu ghép nhóm của trường Y là $1{,}7584$",
        "answer": false
      },
      {
        "text": "Nếu so sánh theo số trung bình thì học sinh trường Y viết nhanh hơn",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Để giải bài toán này, ta xác định giá trị đại diện $x_i$ (trung điểm các khoảng) và tần số $n_i$ của hai trường. Tổng số học sinh mỗi trường là $n=50$.<br> Xét trường X:<br> Số trung bình $\\overline{x}_X=\\dfrac{6{,}5\\cdot 8+7{,}5\\cdot 10+8{,}5\\cdot 13+9{,}5\\cdot 10+10{,}5\\cdot 9}{50}=8{,}54$.<br> Phương sai $s_X^2=\\dfrac{8\\cdot 6{,}5^2+10\\cdot 7{,}5^2+13\\cdot 8{,}5^2+10\\cdot 9{,}5^2+9\\cdot 10{,}5^2}{50}-(8{,}54)^2=1{,}7584$.<br> Độ lệch chuẩn $s_X=\\sqrt{1{,}7584}\\approx 1{,}326$.<br> Xét trường Y:<br> Số trung bình $\\overline{x}_Y=\\dfrac{6{,}5\\cdot 4+7{,}5\\cdot 12+8{,}5\\cdot 17+9{,}5\\cdot 14+10{,}5\\cdot 3}{50}=8{,}5$.<br> Phương sai $s_Y^2=\\dfrac{4\\cdot 6{,}5^2+12\\cdot 7{,}5^2+17\\cdot 8{,}5^2+14\\cdot 9{,}5^2+3\\cdot 10{,}5^2}{50}-(8{,}5)^2=1{,}08$.<br> Độ lệch chuẩn $s_Y=\\sqrt{1{,}08}\\approx 1{,}039$.<br> Vì $s_Y &lt; s_X$ nên tốc độ viết của học sinh trường Y đồng đều hơn.<br>- <strong>Sai</strong>.<br>  Xét trường X:<br> Tứ phân vị thứ nhất $Q_{1X}$ thuộc nhóm $[7;8)$, $Q_{1X}=7+\\dfrac{12{,}5-8}{10}\\cdot 1=7{,}45$.<br> Tứ phân vị thứ ba $Q_{3X}$ thuộc nhóm $[9;10)$, $Q_{3X}=9+\\dfrac{37{,}5-31}{10}\\cdot 1=9{,}65$.<br> Khoảng tứ phân vị $\\Delta_{Q_X}=9{,}65-7{,}45=2{,}2$.<br> Xét trường Y:<br> Tứ phân vị thứ nhất $Q_{1Y}$ thuộc nhóm $[7;8)$, $Q_{1Y}=7+\\dfrac{12{,}5-4}{12}\\cdot 1\\approx 7{,}71$.<br> Tứ phân vị thứ ba $Q_{3Y}$ thuộc nhóm $[9;10)$, $Q_{3Y}=9+\\dfrac{37{,}5-33}{14}\\cdot 1\\approx 9{,}32$.<br> Khoảng tứ phân vị $\\Delta_{Q_Y}=9{,}32-7{,}71=1{,}61$.<br> Vì $\\Delta_{Q_Y} &lt;\\Delta_{Q_X}$ nên theo tiêu chí này, trường Y vẫn đồng đều hơn trường X.<br>- <strong>Sai</strong>.<br>  Dựa vào kết quả tính toán trên ta có $s_X^2=1{,}7584$ và $s_Y^2=1{,}08$.<br> Do đó, số liệu trong nhận định bị đảo ngược giá trị giữa hai trường.<br>- <strong>Đúng</strong>.<br>  Vì thời gian trung bình để hoàn thành bài viết của trường Y ($\\overline{x}_Y=8{,}5$) nhỏ hơn trường X ($\\overline{x}_X=8{,}54$) nên tính trung bình học sinh trường Y viết nhanh hơn.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS14",
    "question": "Xét hàm số $f(x)=x+\\sin x$ trên $\\mathbb{R}$.",
    "subQuestions": [
      {
        "text": "Đạo hàm của hàm số $f(x)$ là $f'(x)=1-\\cos x$",
        "answer": false
      },
      {
        "text": "Hàm số $F(x)=\\dfrac{x^2}{2}-\\cos x-2$ là một nguyên hàm của hàm số $f(x)$",
        "answer": true
      },
      {
        "text": "$\\displaystyle\\int{f(x)\\mathrm{\\,d}x}=\\dfrac{x^2}{2}-\\cos x+C$",
        "answer": true
      },
      {
        "text": "Gọi $G(x)$ là một nguyên hàm của hàm số $f(x)$ và thỏa mãn $G(0)=1$. Khi đó $G(\\pi)=\\dfrac{\\pi^2}{2}+3$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có $f'(x)=(x+\\sin x)^{\\prime}=1+\\cos x$.<br>- <strong>Đúng</strong>.<br>  Ta có $F(x)=\\displaystyle\\int{f(x)\\mathrm{\\,d}x}=\\displaystyle\\int{(x+\\sin x)\\mathrm{\\,d}x}=\\dfrac{x^2}{2}-\\cos x+C$ với mọi $C\\in\\mathbb{R}$.<br> Do đó $F(x)=\\dfrac{x^2}{2}-\\cos x-2$ cũng là một nguyên hàm của $f(x)$.<br>- <strong>Đúng</strong>.<br>  Ta có $F(x)=\\displaystyle\\int{f(x)\\mathrm{\\,d}x}=\\displaystyle\\int{\\left(x+\\sin x\\right)\\mathrm{\\,d}x}=\\dfrac{x^2}{2}-\\cos x+C$ với mọi $C\\in\\mathbb{R}$.<br>- <strong>Đúng</strong>.<br>  Ta có $G(x)=\\displaystyle\\int{f(x)\\mathrm{\\,d}x}=\\displaystyle\\int{(x+\\sin x)\\mathrm{\\,d}x}=\\dfrac{x^2}{2}-\\cos x+C$ với mọi $C\\in\\mathbb{R}$.<br> Suy ra $G(0)=\\dfrac{0^2}{2}-\\cos 0+C=1\\Leftrightarrow C=2$.<br> Khi đó $G(x)=\\dfrac{x^2}{2}-\\cos x+2\\Rightarrow G\\left(\\pi\\right)=\\dfrac{\\pi^2}{2}-\\cos\\pi+2=\\dfrac{\\pi^2}{2}+3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "2D323DS15",
    "question": "Qua khảo sát, thời gian hoàn thành một bài thi thử tốt nghiệp của một số học sinh lớp $12$ của trường Y được ghi lại ở bảng sau<br><table style=\"border-collapse:collapse;margin:8px auto;text-align:center;\"><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Thời gian (phút)</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[65; 70)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[70; 75)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[75; 80)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[80; 85)$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$[85; 90)$</td></tr><tr><td style=\"border:1px solid #888;padding:3px 8px;\">Số học sinh</td><td style=\"border:1px solid #888;padding:3px 8px;\">$5$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$13$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$18$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$35$</td><td style=\"border:1px solid #888;padding:3px 8px;\">$31$</td></tr></table>",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu trên bằng $20$",
        "answer": false
      },
      {
        "text": "Tứ phân vị $Q_{3}$ của mẫu số liệu trên bằng $85{,}9$. <em>(Kết quả làm tròn đến một chữ số thập phân)</em>",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu trên bằng $34{,}2$. <em>(Kết quả làm tròn đến một chữ số thập phân)</em>",
        "answer": false
      },
      {
        "text": "Số học sinh có thời gian làm bài từ $65$ phút đến dưới $75$ phút chiếm tỉ lệ là $17{,}6\\%$. <em>(Kết quả làm tròn đến một chữ số thập phân)</em>",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ta có khoảng biến thiên $R = 90 - 65 = 25$.<br>- <strong>Đúng</strong>.<br>  Cỡ mẫu $n=102$, $\\dfrac{3n}{4}=76{,}5$; tần số tích lũy đến nhóm $[80;85)$ là $71$ nên $Q_3\\in[85;90)$.<br>$Q_3=85+\\dfrac{76{,}5-71}{31}\\cdot 5\\approx 85{,}9$. Vậy mệnh đề đúng.<br>- <strong>Sai</strong>.<br>  Số trung bình của mẫu số liệu là \\[\\overline{x} = \\dfrac{5 \\cdot 67{,}5 + 13 \\cdot 72{,}5 + 18 \\cdot 77{,}5 + 35 \\cdot 82{,}5 + 31 \\cdot 87{,}5}{102} \\approx 81{,}1.\\] Ta có phương sai của mẫu số liệu là \\[s^{2} = \\dfrac{5 \\cdot \\left(67{,}5 - 81{,}1\\right)^{2} + 13 \\cdot \\left(72{,}5 - 81{,}1\\right)^{2} + \\ldots + 31 \\cdot \\left(87{,}5 - 81{,}1\\right)^{2}}{102} \\approx 33{,}9.\\]<br>- <strong>Đúng</strong>.<br>  Số học sinh có thời gian làm bài từ $65$ phút đến dưới $75$ phút chiếm tỉ lệ là \\[\\dfrac{5 + 13}{102} \\cdot 100\\% \\approx 17{,}6\\%.\\]",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
