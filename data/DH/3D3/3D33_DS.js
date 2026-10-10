window.dungSai3D33 = [
  {
    "id": "3D331DS1",
    "question": "Trong $\\mathbb{R}^3$, cho cơ sở $B=\\{u_1,u_2,u_3\\}$ với $u_1=(1, 1, 0)$, $u_2=(0, 1, 1)$, $u_3=(1, 1, 1)$ và vector $x=(2, 3, 4)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$[x]_B=(-1, 1, 3)^T$",
        "answer": true
      },
      {
        "text": "$[x]_B=(1, 1, 2)^T$",
        "answer": false
      },
      {
        "text": "Nếu vector $y$ có $[y]_B=(2,-1,1)^T$ thì $y=(3, 2, 0)$",
        "answer": true
      },
      {
        "text": "Tổng các tọa độ của $x$ theo cơ sở $B$ bằng tổng các thành phần của $x$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Giải $c_1u_1+c_2u_2+c_3u_3=x$: $\\begin{cases} c_1+c_3=2 \\\\ c_1+c_2+c_3=3 \\\\ c_2+c_3=4 \\end{cases}$. Trừ phương trình $1$ khỏi phương trình $2$: $c_2=1$; suy ra $c_3=3$, $c_1=-1$. Vậy $[x]_B=(-1,1,3)^T$.<br>- <strong>Sai</strong>.<br>  Theo trên $[x]_B=(-1,1,3)^T$. Bộ $(1, 1, 2)^T$ là nghiệm khi xếp nhầm các vector cơ sở thành các dòng (giải hệ với ma trận $B^T$); thử lại: $u_1+u_2+2u_3=(3, 4, 3)\\neq x$.<br>- <strong>Đúng</strong>.<br>  $y=2u_1-u_2+u_3=(2,2,0)-(0,1,1)+(1,1,1)=(3,2,0)$.<br>- <strong>Sai</strong>.<br>  Tổng các tọa độ theo $B$: $-1+1+3=3$; tổng các thành phần của $x$: $2+3+4=9$. Hai số khác nhau.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331DS2",
    "question": "Trong $\\mathbb{R}^2$, cho hai cơ sở $B=\\{u_1=(1, 1),\\ u_2=(1, 2)\\}$ và $B'=\\{v_1=(3, 4),\\ v_2=(1, 0)\\}$. Gọi $P$ là ma trận chuyển từ cơ sở $B$ sang cơ sở $B'$ (cột thứ $j$ của $P$ là tọa độ của $v_j$ theo cơ sở $B$). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$P=\\begin{pmatrix} 2 & 2 \\\\ 1 & -1 \\end{pmatrix}$",
        "answer": true
      },
      {
        "text": "$P=\\begin{pmatrix} 2 & 1 \\\\ 2 & -1 \\end{pmatrix}$",
        "answer": false
      },
      {
        "text": "Định thức của ma trận chuyển từ cơ sở $B'$ sang cơ sở $B$ bằng $-4$",
        "answer": false
      },
      {
        "text": "Nếu $[w]_{B'}=(1,1)^T$ thì $[w]_B=(4,0)^T$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $v_1=2u_1+u_2$ (vì $2(1,1)+(1,2)=(3,4)$) và $v_2=2u_1-u_2$ (vì $2(1,1)-(1,2)=(1,0)$). Xếp các tọa độ thành cột: $P=\\begin{pmatrix} 2 & 2 \\\\ 1 & -1 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  Ma trận $\\begin{pmatrix} 2 & 1 \\\\ 2 & -1 \\end{pmatrix}$ là do xếp tọa độ của $v_1,v_2$ thành dòng (nhầm quy ước); theo định nghĩa các tọa độ phải xếp thành cột nên $P=\\begin{pmatrix} 2 & 2 \\\\ 1 & -1 \\end{pmatrix}$.<br>- <strong>Sai</strong>.<br>  Ma trận chuyển từ $B'$ sang $B$ là $P^{-1}$, nên định thức bằng $\\dfrac{1}{\\det P}=\\dfrac{1}{2\\cdot(-1)-2\\cdot1}=-\\dfrac14\\neq-4$.<br>- <strong>Đúng</strong>.<br>  $[w]_B=P[w]_{B'}=\\begin{pmatrix} 2 & 2 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$. Kiểm tra: $w=v_1+v_2=(4,4)=4u_1+0u_2$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331DS3",
    "question": "Cho ma trận $A=\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 1 & 3 & -1 \\\\ 3 & 3 & 3 & 0 \\end{pmatrix}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\mathrm{rank}(A)=2$",
        "answer": true
      },
      {
        "text": "Không gian cột của $A$ là một không gian con của $\\mathbb{R}^4$",
        "answer": false
      },
      {
        "text": "Vector $\\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$ thuộc không gian cột của $A$",
        "answer": true
      },
      {
        "text": "Không gian nghiệm của hệ $AX=0$ có số chiều bằng $1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Dòng $3$ bằng dòng $1$ cộng dòng $2$, hai dòng đầu không tỉ lệ nên $\\mathrm{rank}(A)=2$.<br>- <strong>Sai</strong>.<br>  $A$ có cấp $3\\times4$, mỗi cột có $3$ thành phần nên không gian cột là không gian con của $\\mathbb{R}^3$ (không gian dòng mới là không gian con của $\\mathbb{R}^4$).<br>- <strong>Đúng</strong>.<br>  Vì dòng $3=$ dòng $1+$ dòng $2$, mọi cột $(c_1,c_2,c_3)^T$ của $A$ thỏa $c_3=c_1+c_2$, nên không gian cột (có số chiều $2$) là $\\{(y_1,y_2,y_3)^T\\mid y_3=y_1+y_2\\}$. Vector $(1,1,2)^T$ thỏa $2=1+1$ nên thuộc không gian cột (cụ thể bằng $\\dfrac13$(cột $1+$ cột $2$)).<br>- <strong>Sai</strong>.<br>  Số chiều không gian nghiệm $=n-\\mathrm{rank}(A)=4-2=2\\neq1$.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D331DS4",
    "question": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases} x_1+2x_2-x_3+x_4=0 \\\\ 2x_1+4x_2-x_3+3x_4=0 \\\\ x_1+2x_2+x_3+3x_4=0 \\end{cases}$ và gọi $N$ là không gian nghiệm của hệ (không gian con của $\\mathbb{R}^4$). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\dim N=2$",
        "answer": true
      },
      {
        "text": "Hệ $\\{(-2,1,0,0),\\ (-2,0,-1,1)\\}$ là một cơ sở của $N$",
        "answer": true
      },
      {
        "text": "Vector $(1,0,1,-1)$ thuộc $N$",
        "answer": false
      },
      {
        "text": "Tập nghiệm của hệ nhận được khi thay vế phải $(0,0,0)$ bởi $(1,2,1)$ cũng là một không gian con của $\\mathbb{R}^4$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Biến đổi ma trận hệ số: $\\begin{pmatrix} 1 & 2 & -1 & 1 \\\\ 2 & 4 & -1 & 3 \\\\ 1 & 2 & 1 & 3 \\end{pmatrix}\\xrightarrow[h_3-h_1]{h_2-2h_1}\\begin{pmatrix} 1 & 2 & -1 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 2 & 2 \\end{pmatrix}\\xrightarrow{h_3-2h_2}\\begin{pmatrix} 1 & 2 & -1 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$. Hạng bằng $2$ nên $\\dim N=4-2=2$.<br>- <strong>Đúng</strong>.<br>  Từ dạng bậc thang: $x_3=-x_4$, $x_1=-2x_2+x_3-x_4=-2x_2-2x_4$. Đặt $x_2=s$, $x_4=t$: nghiệm $(-2s-2t,\\ s,\\ -t,\\ t)=s(-2,1,0,0)+t(-2,0,-1,1)$. Hai vector này độc lập tuyến tính và sinh ra $N$ nên là cơ sở của $N$.<br>- <strong>Sai</strong>.<br>  Thay $(1,0,1,-1)$ vào phương trình thứ nhất: $1+0-1-1=-1\\neq0$. Vậy vector này không thuộc $N$.<br>- <strong>Sai</strong>.<br>  Hệ không thuần nhất không nhận $(0,0,0,0)$ làm nghiệm (vế trái bằng $0\\neq1$), nên tập nghiệm của nó không là không gian con.<br><br><em>Dựa theo các dạng bài tập trong: Vũ Đỗ Huy Cường, Đại số tuyến tính (bài giảng và bài tập), Khoa Toán-Tin học, Trường Đại học Khoa học Tự nhiên.</em>",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
