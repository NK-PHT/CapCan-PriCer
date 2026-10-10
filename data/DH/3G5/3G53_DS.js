window.dungSai3G53 = [
  {
    "id": "3G531DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau về nghiệm tổng quát của các phương trình vi phân tuyến tính cấp hai hệ số hằng thuần nhất:",
    "subQuestions": [
      {
        "text": "Phương trình $y''-4y'+4y=0$ có nghiệm tổng quát $y=(C_1+C_2x)e^{2x}$",
        "answer": true
      },
      {
        "text": "Phương trình $y''+9y=0$ có nghiệm tổng quát $y=C_1e^{3x}+C_2e^{-3x}$",
        "answer": false
      },
      {
        "text": "Phương trình $y''-2y'+5y=0$ có nghiệm tổng quát $y=e^x(C_1\\cos2x+C_2\\sin2x)$",
        "answer": true
      },
      {
        "text": "Phương trình $y''-y'-6y=0$ có nghiệm tổng quát $y=C_1e^{-3x}+C_2e^{2x}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Phương trình đặc trưng $k^2-4k+4=0$ có nghiệm kép $k=2$ nên $y=C_1e^{2x}+C_2xe^{2x}$.<br>- <strong>Sai</strong>.<br>  Phương trình đặc trưng $k^2+9=0$ có hai nghiệm phức $k=\\pm3i$ ($\\alpha=0$, $\\beta=3$) nên $y=C_1\\cos3x+C_2\\sin3x$. Hàm $e^{3x}$ ứng với phương trình $k^2-9=0$.<br>- <strong>Đúng</strong>.<br>  Phương trình đặc trưng $k^2-2k+5=0$ có nghiệm $k=1\\pm2i$ nên $y=e^x(C_1\\cos2x+C_2\\sin2x)$.<br>- <strong>Sai</strong>.<br>  Phương trình đặc trưng $k^2-k-6=0$ có nghiệm $k_1=3$, $k_2=-2$ nên $y=C_1e^{3x}+C_2e^{-2x}$ (mệnh đề sai dấu các nghiệm).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G531DS2",
    "question": "Cho bài toán Cauchy $y''-5y'+6y=0$, $y(0)=1$, $y'(0)=4$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Phương trình đặc trưng $k^2-5k+6=0$ có hai nghiệm $k_1=2$, $k_2=3$",
        "answer": true
      },
      {
        "text": "Nghiệm của bài toán Cauchy là $y=2e^{2x}-e^{3x}$",
        "answer": false
      },
      {
        "text": "Nghiệm của bài toán Cauchy thỏa mãn $y(\\ln2)=12$",
        "answer": true
      },
      {
        "text": "Hàm $y=e^{2x}+e^{3x}$ là một nghiệm của phương trình $y''-5y'+6y=0$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $k^2-5k+6=(k-2)(k-3)=0\\Leftrightarrow k=2$ hoặc $k=3$.<br>- <strong>Sai</strong>.<br>  Nghiệm tổng quát $y=C_1e^{2x}+C_2e^{3x}$. Điều kiện đầu: $C_1+C_2=1$, $2C_1+3C_2=4\\Rightarrow C_2=2$, $C_1=-1$. Vậy $y=2e^{3x}-e^{2x}$. Hàm $2e^{2x}-e^{3x}$ có $y'(0)=4-3=1\\neq4$.<br>- <strong>Đúng</strong>.<br>  $y(\\ln2)=2e^{3\\ln2}-e^{2\\ln2}=2\\cdot8-4=12$.<br>- <strong>Đúng</strong>.<br>  Hàm này ứng với $C_1=C_2=1$ trong nghiệm tổng quát $C_1e^{2x}+C_2e^{3x}$ nên là nghiệm (thử lại: $y''-5y'+6y=(4-10+6)e^{2x}+(9-15+6)e^{3x}=0$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G531DS3",
    "question": "Xét phương trình vi phân $y''-3y'+2y=f(x)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Với $f(x)=e^{3x}$, phương trình có một nghiệm riêng dạng $y_r=Ae^{3x}$",
        "answer": true
      },
      {
        "text": "Với $f(x)=e^{x}$, phương trình có một nghiệm riêng dạng $y_r=Ae^{x}$",
        "answer": false
      },
      {
        "text": "Với $f(x)=x$, hàm $y=\\dfrac{x}{2}+\\dfrac34$ là một nghiệm riêng của phương trình",
        "answer": true
      },
      {
        "text": "Với $f(x)=4e^{2x}$, hàm $y=4xe^{2x}$ là một nghiệm riêng của phương trình",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Phương trình đặc trưng $k^2-3k+2=0$ có nghiệm $k=1$, $k=2$; $3$ không là nghiệm nên chọn $y_r=Ae^{3x}$: $(9A-9A+2A)e^{3x}=e^{3x}\\Rightarrow A=\\dfrac12$.<br>- <strong>Sai</strong>.<br>  $k=1$ là nghiệm của phương trình đặc trưng nên $Ae^x$ là nghiệm của phương trình thuần nhất: $(A-3A+2A)e^x=0\\neq e^x$. Phải chọn $y_r=Axe^x$.<br>- <strong>Đúng</strong>.<br>  $y=\\dfrac x2+\\dfrac34$: $y'=\\dfrac12$, $y''=0$; $0-\\dfrac32+x+\\dfrac32=x$.<br>- <strong>Đúng</strong>.<br>  $y=4xe^{2x}$: $y'=(4+8x)e^{2x}$, $y''=(16+16x)e^{2x}$; $y''-3y'+2y=(16+16x-12-24x+8x)e^{2x}=4e^{2x}$. (Vì $k=2$ là nghiệm đơn của phương trình đặc trưng nên chọn dạng $Axe^{2x}$, tìm được $A=4$.)<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G531DS4",
    "question": "Xét tính đúng sai của các mệnh đề sau về phương trình vi phân cấp hai có thể giảm cấp:",
    "subQuestions": [
      {
        "text": "Với phương trình $xy''=y'$ ($x\\gt 0$), đặt $p=y'$ ta được $p'=\\dfrac px$ và nghiệm tổng quát là $y=C_1x^2+C_2$",
        "answer": true
      },
      {
        "text": "Với phương trình dạng $y''=f(y,y')$ (không chứa $x$), đặt $y'=p(y)$ thì $y''=p\\dfrac{dp}{dx}$",
        "answer": false
      },
      {
        "text": "Phương trình $y''=\\dfrac{1}{x^2}$ ($x\\gt 0$) có nghiệm tổng quát $y=-\\ln x+C_1x+C_2$",
        "answer": true
      },
      {
        "text": "Phương trình $y''+\\dfrac{y'}{x}=0$ ($x\\gt 0$) có nghiệm tổng quát $y=\\dfrac{C_1}{x}+C_2$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $p=y'$: $xp'=p\\Rightarrow\\dfrac{dp}{p}=\\dfrac{dx}{x}\\Rightarrow p=2C_1x$ (viết hằng số dưới dạng $2C_1$) $\\Rightarrow y=C_1x^2+C_2$.<br>- <strong>Sai</strong>.<br>  Khi $p$ là hàm của $y$: $y''=\\dfrac{dp}{dx}=\\dfrac{dp}{dy}\\cdot\\dfrac{dy}{dx}=p\\dfrac{dp}{dy}$ (đạo hàm theo $y$, không phải theo $x$).<br>- <strong>Đúng</strong>.<br>  Tích phân hai lần: $y'=-\\dfrac1x+C_1$, $y=-\\ln x+C_1x+C_2$. Thử lại: $y''=\\dfrac1{x^2}$.<br>- <strong>Sai</strong>.<br>  Đặt $p=y'$: $p'+\\dfrac px=0\\Rightarrow p=\\dfrac{C_1}{x}\\Rightarrow y=C_1\\ln x+C_2$. Hàm $y=\\dfrac1x$ có $y''+\\dfrac{y'}x=\\dfrac2{x^3}-\\dfrac1{x^3}=\\dfrac1{x^3}\\neq0$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
