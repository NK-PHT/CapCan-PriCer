window.dungSai3G42 = [
  {
    "id": "3G421DS1",
    "question": "Cho hàm số $f(x,y)=x^3+y^3-6xy$. Với mỗi điểm dừng $M$, đặt $A=f_{xx}(M)$, $B=f_{xy}(M)$, $C=f_{yy}(M)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f$ có đúng hai điểm dừng là $O(0,0)$ và $M(2,2)$",
        "answer": true
      },
      {
        "text": "$f$ đạt cực đại tại $O(0,0)$",
        "answer": false
      },
      {
        "text": "Tại $M(2,2)$ ta có $AC-B^2=144$",
        "answer": false
      },
      {
        "text": "$f$ đạt cực tiểu tại $M(2,2)$ và giá trị cực tiểu bằng $-8$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f'_x=3x^2-6y=0$, $f'_y=3y^2-6x=0$ $\\Rightarrow y=\\dfrac{x^2}{2}$, thay vào phương trình sau: $\\dfrac{3x^4}{4}=6x\\Leftrightarrow x(x^3-8)=0$, nên $x=0$ hoặc $x=2$. Hai điểm dừng: $(0,0)$ và $(2,2)$.<br>- <strong>Sai</strong>.<br>  $f''_{xx}=6x$, $f''_{xy}=-6$, $f''_{yy}=6y$. Tại $O$: $A=0$, $B=-6$, $C=0$, $AC-B^2=-36\\lt 0$ nên $O$ không phải điểm cực trị (ma trận Hessian $\\begin{pmatrix} 0 & -6 \\\\ -6 & 0 \\end{pmatrix}$ có trị riêng $\\pm6$ trái dấu).<br>- <strong>Sai</strong>.<br>  Tại $M(2,2)$: $A=12$, $B=-6$, $C=12$ nên $AC-B^2=144-36=108\\neq144$ (giá trị $144$ do quên trừ $B^2$).<br>- <strong>Đúng</strong>.<br>  $AC-B^2=108\\gt 0$ và $A=12\\gt 0$ nên $M(2,2)$ là điểm cực tiểu, $f_{CT}=f(2,2)=8+8-24=-8$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421DS2",
    "question": "Cho hàm số $f(x,y)=x^3+3xy^2-39x-36y$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$f$ có đúng bốn điểm dừng",
        "answer": true
      },
      {
        "text": "$f$ đạt cực tiểu tại điểm $(2,3)$",
        "answer": false
      },
      {
        "text": "$f$ đạt cực tiểu tại điểm $(3,2)$ và giá trị cực tiểu bằng $-126$",
        "answer": true
      },
      {
        "text": "$f$ đạt cực đại tại điểm $(-3,-2)$ và giá trị cực đại bằng $126$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f'_x=3x^2+3y^2-39=0\\Leftrightarrow x^2+y^2=13$; $f'_y=6xy-36=0\\Leftrightarrow xy=6$. Suy ra $(x+y)^2=25$, $(x-y)^2=1$, được bốn điểm dừng $(3,2)$, $(2,3)$, $(-3,-2)$, $(-2,-3)$.<br>- <strong>Sai</strong>.<br>  $f''_{xx}=6x$, $f''_{xy}=6y$, $f''_{yy}=6x$ nên $AC-B^2=36(x^2-y^2)$. Tại $(2,3)$: $AC-B^2=36(4-9)\\lt 0$, không phải điểm cực trị.<br>- <strong>Đúng</strong>.<br>  Tại $(3,2)$: $A=18$, $B=12$, $C=18$, $AC-B^2=324-144=180\\gt 0$, $A\\gt 0$ nên là điểm cực tiểu; $f(3,2)=27+36-117-72=-126$.<br>- <strong>Đúng</strong>.<br>  Tại $(-3,-2)$: $A=-18$, $B=-12$, $C=-18$, $AC-B^2=180\\gt 0$, $A\\lt 0$ nên là điểm cực đại; $f(-3,-2)=-27-36+117+72=126$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421DS3",
    "question": "Xét bài toán tìm cực trị của hàm số $f(x,y)=3x-4y$ với điều kiện $x^2+y^2=25$, dùng hàm Lagrange $L(x,y,\\lambda)=3x-4y+\\lambda(x^2+y^2-25)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Hàm $L$ có đúng hai điểm dừng, ứng với $(x,y)=(3,-4)$ và $(x,y)=(-3,4)$",
        "answer": true
      },
      {
        "text": "Tại điểm dừng ứng với $(x,y)=(3,-4)$ ta có $\\lambda=\\dfrac12$",
        "answer": false
      },
      {
        "text": "$f$ đạt cực đại có điều kiện tại $(3,-4)$ với giá trị cực đại bằng $25$",
        "answer": true
      },
      {
        "text": "Tại điểm dừng ứng với $(x,y)=(-3,4)$ ta có $d^2L=-(dx^2+dy^2)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $L'_x=3+2\\lambda x=0$, $L'_y=-4+2\\lambda y=0$ $\\Rightarrow x=-\\dfrac{3}{2\\lambda}$, $y=\\dfrac{2}{\\lambda}$. Thay vào $x^2+y^2=25$: $\\dfrac{25}{4\\lambda^2}=25\\Rightarrow\\lambda=\\pm\\dfrac12$. Được hai điểm $(3,-4)$ (ứng với $\\lambda=-\\dfrac12$) và $(-3,4)$ (ứng với $\\lambda=\\dfrac12$).<br>- <strong>Sai</strong>.<br>  Từ $L'_x=3+2\\lambda x=0$ với $x=3$ suy ra $\\lambda=-\\dfrac12$, không phải $\\dfrac12$.<br>- <strong>Đúng</strong>.<br>  $L''_{xx}=L''_{yy}=2\\lambda$, $L''_{xy}=0$ nên $d^2L=2\\lambda(dx^2+dy^2)$. Tại $(3,-4)$, $\\lambda=-\\dfrac12$: $d^2L=-(dx^2+dy^2)\\lt 0$ nên đây là điểm cực đại có điều kiện, $f(3,-4)=9+16=25$.<br>- <strong>Sai</strong>.<br>  Tại $(-3,4)$, $\\lambda=\\dfrac12$: $d^2L=dx^2+dy^2\\gt 0$ (với $dx^2+dy^2\\gt 0$), nên đây là điểm cực tiểu có điều kiện, $f(-3,4)=-25$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3G421DS4",
    "question": "Xét hàm số $f(x,y)=x^2+y^2-2x-4y$ trên miền đóng $D:\\ x^2+y^2\\le20$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Trong miền mở $x^2+y^2\\lt 20$, hàm $f$ có duy nhất một điểm dừng là $(1,2)$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của $f$ trên $D$ bằng $-5$",
        "answer": true
      },
      {
        "text": "Với bài toán trên biên $x^2+y^2=20$, hàm Lagrange $L=f+\\lambda(x^2+y^2-20)$ có đúng hai điểm dừng, ứng với $(x,y)=(2,4)$ và $(x,y)=(-2,-4)$",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của $f$ trên $D$ bằng $40$ và đạt tại điểm $(2,4)$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $f'_x=2x-2=0$, $f'_y=2y-4=0$ cho $(1,2)$; điểm này thỏa $1+4=5\\lt 20$ nên nằm trong miền.<br>- <strong>Đúng</strong>.<br>  $f(1,2)=1+4-2-8=-5$. Mặt khác $f=(x-1)^2+(y-2)^2-5\\ge-5$ nên GTNN bằng $-5$ (so sánh với các giá trị trên biên ở các ý sau).<br>- <strong>Đúng</strong>.<br>  $L'_x=2x-2+2\\lambda x=0$, $L'_y=2y-4+2\\lambda y=0$ $\\Rightarrow x=\\dfrac{1}{1+\\lambda}$, $y=\\dfrac{2}{1+\\lambda}$, tức $y=2x$. Thay vào $x^2+y^2=20$: $5x^2=20$, $x=\\pm2$. Được $(2,4)$ và $(-2,-4)$.<br>- <strong>Sai</strong>.<br>  $f(2,4)=4+16-4-16=0$, $f(-2,-4)=4+16+4+16=40$. So sánh $f(1,2)=-5$, $f(2,4)=0$, $f(-2,-4)=40$: GTLN bằng $40$ nhưng đạt tại $(-2,-4)$, không phải tại $(2,4)$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Giải tích: hàm số một biến và nhiều biến (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
