window.dungSai3D31 = [
  {
    "id": "3D311DS1",
    "question": "Trong không gian vector $\\mathbb{R}^3$, xét các tập con sau: $W_1=\\{(x,y,z)\\mid x-2y+3z=0\\}$, $W_2=\\{(x,y,z)\\mid x+y+z=1\\}$, $W_3=\\{(x,y,z)\\mid xy=0\\}$, $W_4=\\{(x,y,z)\\mid x=2y,\\ z=-y\\}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$W_1$ là không gian con của $\\mathbb{R}^3$",
        "answer": true
      },
      {
        "text": "$W_2$ là không gian con của $\\mathbb{R}^3$",
        "answer": false
      },
      {
        "text": "$W_3$ là không gian con của $\\mathbb{R}^3$",
        "answer": false
      },
      {
        "text": "$W_4$ là không gian con của $\\mathbb{R}^3$ và $\\dim W_4=1$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $(0,0,0)\\in W_1$. Nếu $u=(x_1,y_1,z_1)$, $v=(x_2,y_2,z_2)\\in W_1$ và $\\alpha,\\beta\\in\\mathbb{R}$ thì $(\\alpha x_1+\\beta x_2)-2(\\alpha y_1+\\beta y_2)+3(\\alpha z_1+\\beta z_2)=\\alpha\\cdot0+\\beta\\cdot0=0$, nên $\\alpha u+\\beta v\\in W_1$. Vậy $W_1$ là không gian con (là tập nghiệm của một phương trình tuyến tính thuần nhất).<br>- <strong>Sai</strong>.<br>  Vector không $(0,0,0)$ có $0+0+0=0\\neq1$ nên $(0,0,0)\\notin W_2$. Do đó $W_2$ không là không gian con.<br>- <strong>Sai</strong>.<br>  $(1,0,0)\\in W_3$ và $(0,1,0)\\in W_3$ nhưng tổng $(1,1,0)$ có $1\\cdot1=1\\neq0$ nên $(1,1,0)\\notin W_3$; $W_3$ không đóng kín với phép cộng nên không là không gian con.<br>- <strong>Đúng</strong>.<br>  Đặt $y=t$ thì $x=2t$, $z=-t$, nên $W_4=\\{t(2,1,-1)\\mid t\\in\\mathbb{R}\\}=\\mathrm{span}\\{(2,1,-1)\\}$. Đây là không gian con có cơ sở $\\{(2,1,-1)\\}$, do đó $\\dim W_4=1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311DS2",
    "question": "Trong $\\mathbb{R}^3$, cho hai vector $u_1=(1, 2, -1)$ và $u_2=(2, 1, 3)$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Vector $x=(4, 5, 1)$ là tổ hợp tuyến tính của $u_1,u_2$, cụ thể $x=2u_1+u_2$",
        "answer": true
      },
      {
        "text": "Vector $y=(1, 1, 1)$ thuộc $\\mathrm{span}\\{u_1,u_2\\}$",
        "answer": false
      },
      {
        "text": "$\\mathrm{span}\\{u_1,u_2\\}=\\{(x,y,z)\\in\\mathbb{R}^3\\mid 7x-5y-3z=0\\}$",
        "answer": true
      },
      {
        "text": "Vector $w=(1, -1, 4)$ không thuộc $\\mathrm{span}\\{u_1,u_2\\}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $2u_1+u_2=(2,4,-2)+(2,1,3)=(4,5,1)=x$.<br>- <strong>Sai</strong>.<br>  Giả sử $y=\\alpha u_1+\\beta u_2$: $\\begin{cases} \\alpha+2\\beta=1 \\\\ 2\\alpha+\\beta=1 \\\\ -\\alpha+3\\beta=1 \\end{cases}$. Từ hai phương trình đầu $\\alpha=\\beta=\\dfrac13$, thay vào phương trình thứ ba: $-\\dfrac13+1=\\dfrac23\\neq1$. Hệ vô nghiệm nên $y\\notin\\mathrm{span}\\{u_1,u_2\\}$.<br>- <strong>Đúng</strong>.<br>  $u_1,u_2$ không tỉ lệ nên $\\mathrm{span}\\{u_1,u_2\\}$ là mặt phẳng qua gốc có vector pháp tuyến $u_1\\times u_2=(7,-5,-3)$. Kiểm tra: $7\\cdot1-5\\cdot2-3\\cdot(-1)=0$ và $7\\cdot2-5\\cdot1-3\\cdot3=0$. Vậy span là tập nghiệm của $7x-5y-3z=0$.<br>- <strong>Sai</strong>.<br>  Ta có $w=u_2-u_1=(2-1,\\,1-2,\\,3+1)=(1,-1,4)$ nên $w\\in\\mathrm{span}\\{u_1,u_2\\}$ (cũng thấy $7\\cdot1-5\\cdot(-1)-3\\cdot4=0$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311DS3",
    "question": "Trong không gian vector $M_2(\\mathbb{R})$ các ma trận vuông cấp $2$, xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Tập các ma trận đối xứng cấp $2$ là một không gian con của $M_2(\\mathbb{R})$ có số chiều bằng $3$",
        "answer": true
      },
      {
        "text": "Tập các ma trận khả nghịch cấp $2$ là một không gian con của $M_2(\\mathbb{R})$",
        "answer": false
      },
      {
        "text": "Tập các ma trận cấp $2$ có vết bằng $0$ là một không gian con của $M_2(\\mathbb{R})$ có số chiều bằng $3$",
        "answer": true
      },
      {
        "text": "Tập các ma trận $A$ cấp $2$ thỏa mãn $\\det A=0$ là một không gian con của $M_2(\\mathbb{R})$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $A^T=A,\\ B^T=B\\Rightarrow(\\alpha A+\\beta B)^T=\\alpha A+\\beta B$ nên đây là không gian con. Mỗi ma trận đối xứng có dạng $\\begin{pmatrix} a & b \\\\ b & d \\end{pmatrix}=a\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}+b\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}+d\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$, ba ma trận này độc lập tuyến tính nên số chiều bằng $3$.<br>- <strong>Sai</strong>.<br>  Ma trận không $O$ không khả nghịch nên không thuộc tập này; do đó tập các ma trận khả nghịch không là không gian con.<br>- <strong>Đúng</strong>.<br>  $\\mathrm{tr}(\\alpha A+\\beta B)=\\alpha\\,\\mathrm{tr}A+\\beta\\,\\mathrm{tr}B=0$ nên đây là không gian con. Ma trận có vết bằng $0$ có dạng $\\begin{pmatrix} a & b \\\\ c & -a \\end{pmatrix}$ phụ thuộc $3$ tham số tự do $a,b,c$ nên số chiều bằng $3$.<br>- <strong>Sai</strong>.<br>  $A=\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$ và $B=\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$ đều có định thức bằng $0$, nhưng $A+B=I_2$ có $\\det I_2=1\\neq0$. Tập này không đóng kín với phép cộng nên không là không gian con.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D311DS4",
    "question": "Trong không gian $P_2[x]$ các đa thức hệ số thực có bậc không quá $2$, cho $W=\\{p(x)\\in P_2[x]\\mid p(1)=0\\}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$W$ là không gian con của $P_2[x]$",
        "answer": true
      },
      {
        "text": "$\\dim W=3$",
        "answer": false
      },
      {
        "text": "Tập $\\{p(x)\\in P_2[x]\\mid p(1)=1\\}$ cũng là một không gian con của $P_2[x]$",
        "answer": false
      },
      {
        "text": "$W=\\mathrm{span}\\{x-1,\\ x^2-1\\}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đa thức $0$ thuộc $W$; nếu $p(1)=q(1)=0$ thì $(\\alpha p+\\beta q)(1)=\\alpha p(1)+\\beta q(1)=0$. Vậy $W$ là không gian con.<br>- <strong>Sai</strong>.<br>  Với $p(x)=a_0+a_1x+a_2x^2$, điều kiện $p(1)=0\\Leftrightarrow a_0+a_1+a_2=0$ là một phương trình tuyến tính thuần nhất với $3$ ẩn, có $2$ ẩn tự do. Do đó $\\dim W=3-1=2\\neq3$.<br>- <strong>Sai</strong>.<br>  Đa thức không $0$ có giá trị tại $1$ bằng $0\\neq1$ nên không thuộc tập này. Vậy tập đó không là không gian con.<br>- <strong>Đúng</strong>.<br>  $x-1$ và $x^2-1$ đều triệt tiêu tại $x=1$ nên thuộc $W$; chúng không tỉ lệ nên độc lập tuyến tính. Vì $\\dim W=2$ nên $\\{x-1,x^2-1\\}$ là cơ sở của $W$, tức $W=\\mathrm{span}\\{x-1,\\,x^2-1\\}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
