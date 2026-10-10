window.dungSai3D13 = [
  {
    "id": "3D131DS1",
    "question": "Gọi $z_1,z_2$ là hai nghiệm phức của phương trình $z^2-4z+13=0$, trong đó $z_1$ có phần ảo dương. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Biệt thức thu gọn $\\Delta'=-9$",
        "answer": true
      },
      {
        "text": "$z_1=-2+3i$",
        "answer": false
      },
      {
        "text": "$z_1^2+z_2^2=42$",
        "answer": false
      },
      {
        "text": "$|z_1|+|z_2|=2\\sqrt{13}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\Delta'=(-2)^2-13=-9=(3i)^2$.<br>- <strong>Sai</strong>.<br>  $z_{1,2}=2\\pm3i$ nên $z_1=2+3i\\neq-2+3i$ (nhầm dấu của $-\\dfrac{b}{2a}$).<br>- <strong>Sai</strong>.<br>  Theo Vi-ét: $z_1+z_2=4$, $z_1z_2=13$ nên $z_1^2+z_2^2=(z_1+z_2)^2-2z_1z_2=16-26=-10\\neq42$.<br>- <strong>Đúng</strong>.<br>  $|z_1|=|z_2|=\\sqrt{4+9}=\\sqrt{13}$ nên $|z_1|+|z_2|=2\\sqrt{13}$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D131DS2",
    "question": "Xét phương trình $z^2-(5-i)z+8-i=0$ trên tập $\\mathbb{C}$, có hai nghiệm $z_1,z_2$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Biệt thức $\\Delta=-8-6i$",
        "answer": true
      },
      {
        "text": "$1+3i$ là một căn bậc hai của $\\Delta$",
        "answer": false
      },
      {
        "text": "Phương trình có hai nghiệm là $2+i$ và $3-2i$",
        "answer": true
      },
      {
        "text": "$|z_1|^2+|z_2|^2=18$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\Delta=(5-i)^2-4(8-i)=24-10i-32+4i=-8-6i$.<br>- <strong>Sai</strong>.<br>  $(1+3i)^2=1+6i-9=-8+6i\\neq\\Delta$. Căn bậc hai của $\\Delta$ là $\\pm(1-3i)$ vì $(1-3i)^2=-8-6i$.<br>- <strong>Đúng</strong>.<br>  $z=\\dfrac{5-i\\pm(1-3i)}{2}$, cho $z_1=\\dfrac{6-4i}{2}=3-2i$ và $z_2=\\dfrac{4+2i}{2}=2+i$.<br>- <strong>Đúng</strong>.<br>  $|3-2i|^2+|2+i|^2=13+5=18$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D131DS3",
    "question": "Cho đa thức $P(z)=z^3+z^2+3z-5$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$z=1$ là một nghiệm của $P(z)$",
        "answer": true
      },
      {
        "text": "$P(z)=(z-1)\\left(z^2+2z+5\\right)$",
        "answer": true
      },
      {
        "text": "$1-2i$ là một nghiệm của $P(z)$",
        "answer": false
      },
      {
        "text": "Tích ba nghiệm phức của $P(z)$ bằng $-5$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $P(1)=1+1+3-5=0$.<br>- <strong>Đúng</strong>.<br>  Chia $P(z)$ cho $z-1$ (sơ đồ Horner với hệ số $1,1,3,-5$) được thương $z^2+2z+5$, dư $0$.<br>- <strong>Sai</strong>.<br>  $z^2+2z+5=0\\Leftrightarrow z=-1\\pm2i$. Ba nghiệm là $1,\\ -1+2i,\\ -1-2i$; số $1-2i$ không phải nghiệm (nhầm dấu phần thực). Kiểm tra: $P(1-2i)=-16-8i\\neq0$.<br>- <strong>Sai</strong>.<br>  Theo Vi-ét cho đa thức bậc ba $z^3+z^2+3z-5$: tích ba nghiệm bằng $-\\dfrac{-5}{1}=5$; kiểm tra: $1\\cdot(-1+2i)(-1-2i)=5\\neq-5$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D131DS4",
    "question": "Trong mặt phẳng tọa độ $Oxy$, gọi $M(x;y)$ là điểm biểu diễn số phức $z=x+yi$ ($x,y\\in\\mathbb{R}$). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Tập hợp các điểm $M$ thỏa mãn $|z+2-i|=4$ là đường tròn tâm $I(2;-1)$, bán kính $R=4$",
        "answer": false
      },
      {
        "text": "Tập hợp các điểm $M$ thỏa mãn $|z-2i|=|z+2|$ là đường thẳng $y=-x$",
        "answer": true
      },
      {
        "text": "Tập hợp các điểm $M$ thỏa mãn $|z-2|+|z+2|=6$ là elip $\\dfrac{x^2}{9}+\\dfrac{y^2}{5}=1$",
        "answer": true
      },
      {
        "text": "Tập hợp các điểm $M$ thỏa mãn $\\mathrm{Re}\\left(z^2\\right)=0$ là đường thẳng $y=x$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  $|z+2-i|=|(x+2)+(y-1)i|=4\\Leftrightarrow(x+2)^2+(y-1)^2=16$: đường tròn tâm $I(-2;1)$, bán kính $4$, không phải tâm $(2;-1)$.<br>- <strong>Đúng</strong>.<br>  $x^2+(y-2)^2=(x+2)^2+y^2\\Leftrightarrow-4y+4=4x+4\\Leftrightarrow y=-x$ (đường trung trực của đoạn nối $A(0;2)$ và $B(-2;0)$).<br>- <strong>Đúng</strong>.<br>  Tổng khoảng cách từ $M$ đến $F_1(2;0)$, $F_2(-2;0)$ bằng $6\\gt F_1F_2=4$ nên tập hợp là elip có $a=3$, $c=2$, $b^2=a^2-c^2=5$: $\\dfrac{x^2}{9}+\\dfrac{y^2}{5}=1$.<br>- <strong>Sai</strong>.<br>  $z^2=x^2-y^2+2xyi$ nên $\\mathrm{Re}\\left(z^2\\right)=0\\Leftrightarrow x^2=y^2\\Leftrightarrow y=x$ hoặc $y=-x$: hợp của hai đường thẳng (ví dụ $M(1;-1)$ thỏa mãn nhưng không thuộc $y=x$).<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
