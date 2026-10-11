window.dungSai8D64 = [
  {
    "id": "8D641DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau (với điều kiện các phân thức đều xác định và khác $0$ khi cần):",
    "subQuestions": [
      {
        "text": "$\\dfrac{x^2-4}{3x}\\cdot\\dfrac{6x}{x+2}=2(x-2)$",
        "answer": true
      },
      {
        "text": "Phân thức nghịch đảo của $\\dfrac{x-1}{x+3}$ là $\\dfrac{x+3}{x-1}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{x+1}{x}:\\dfrac{x+1}{x^2}=\\dfrac{1}{x}$",
        "answer": false
      },
      {
        "text": "Phân thức nghịch đảo của $x-2$ là $2-x$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\dfrac{x^2-4}{3x}\\cdot\\dfrac{6x}{x+2}=\\dfrac{(x-2)(x+2)\\cdot 6x}{3x(x+2)}=2(x-2)$.<br>- <strong>Đúng</strong>.<br>  $\\dfrac{x-1}{x+3}\\cdot\\dfrac{x+3}{x-1}=1$ nên hai phân thức nghịch đảo của nhau (với $x\\neq 1$, $x\\neq -3$).<br>- <strong>Sai</strong>.<br>  Chia là nhân với phân thức nghịch đảo: $\\dfrac{x+1}{x}\\cdot\\dfrac{x^2}{x+1}=x$, không phải $\\dfrac1x$.<br>- <strong>Sai</strong>.<br>  Phân thức nghịch đảo của $x-2$ là $\\dfrac{1}{x-2}$ (vì tích của chúng bằng $1$). $2-x$ là phân thức đối của $x-2$ (tổng bằng $0$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D641DS2",
    "question": "Cho biểu thức $P=\\left(\\dfrac{x+1}{x-1}-\\dfrac{x-1}{x+1}\\right):\\dfrac{2x}{x-1}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Điều kiện xác định của $P$ là $x\\neq 1$ và $x\\neq -1$",
        "answer": false
      },
      {
        "text": "Với điều kiện xác định, $P=\\dfrac{2}{x+1}$",
        "answer": true
      },
      {
        "text": "Tại $x=0$, giá trị của $P$ bằng $2$",
        "answer": false
      },
      {
        "text": "Tại $x=3$, giá trị của $P$ bằng $0{,}5$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Ngoài $x\\neq 1$, $x\\neq -1$, số chia $\\dfrac{2x}{x-1}$ phải khác $0$ nên còn cần $x\\neq 0$. Điều kiện xác định: $x\\neq 0$, $x\\neq 1$, $x\\neq -1$.<br>- <strong>Đúng</strong>.<br>  $\\dfrac{x+1}{x-1}-\\dfrac{x-1}{x+1}=\\dfrac{(x+1)^2-(x-1)^2}{(x-1)(x+1)}=\\dfrac{4x}{(x-1)(x+1)}$.<br>  $P=\\dfrac{4x}{(x-1)(x+1)}\\cdot\\dfrac{x-1}{2x}=\\dfrac{2}{x+1}$.<br>- <strong>Sai</strong>.<br>  $x=0$ làm số chia $\\dfrac{2x}{x-1}$ bằng $0$ nên $P$ không xác định tại $x=0$ (dù biểu thức rút gọn $\\dfrac{2}{x+1}$ cho giá trị $2$).<br>- <strong>Đúng</strong>.<br>  $x=3$ thỏa mãn điều kiện xác định. $P=\\dfrac{2}{3+1}=\\dfrac12=0{,}5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D641DS3",
    "question": "Một hình chữ nhật có chiều dài $\\dfrac{x^2-4}{x}$ (cm) và chiều rộng $\\dfrac{3x}{x+2}$ (cm), với $x\\gt 2$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Diện tích hình chữ nhật là $3(x-2)$ $\\mathrm{cm}^2$",
        "answer": true
      },
      {
        "text": "Khi $x=4$, diện tích hình chữ nhật bằng $6$ $\\mathrm{cm}^2$",
        "answer": true
      },
      {
        "text": "Khi $x=4$, chiều dài gấp đôi chiều rộng",
        "answer": false
      },
      {
        "text": "Nếu giữ nguyên chiều dài và giảm chiều rộng đi một nửa thì diện tích mới là $\\dfrac{3(x-2)}{2}$ $\\mathrm{cm}^2$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $S=\\dfrac{x^2-4}{x}\\cdot\\dfrac{3x}{x+2}=\\dfrac{(x-2)(x+2)\\cdot 3x}{x(x+2)}=3(x-2)$ ($\\mathrm{cm}^2$).<br>- <strong>Đúng</strong>.<br>  Tại $x=4$: $S=3\\cdot(4-2)=6$ ($\\mathrm{cm}^2$).<br>- <strong>Sai</strong>.<br>  Tại $x=4$: chiều dài $\\dfrac{16-4}{4}=3$ cm, chiều rộng $\\dfrac{12}{6}=2$ cm. Chiều dài gấp $\\dfrac32=1{,}5$ lần chiều rộng, không phải gấp đôi.<br>- <strong>Đúng</strong>.<br>  Chiều rộng mới là $\\dfrac{3x}{x+2}\\cdot\\dfrac12=\\dfrac{3x}{2(x+2)}$, diện tích mới $\\dfrac{x^2-4}{x}\\cdot\\dfrac{3x}{2(x+2)}=\\dfrac{3(x-2)}{2}$ ($\\mathrm{cm}^2$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D641DS4",
    "question": "Xét tính đúng sai của các đẳng thức sau (với điều kiện các phân thức đều xác định và các số chia khác $0$):",
    "subQuestions": [
      {
        "text": "$\\dfrac{6}{x}:\\dfrac{3}{x}:\\dfrac{2}{x}=\\dfrac{4}{x}$",
        "answer": false
      },
      {
        "text": "$\\dfrac{4x}{x+3}:\\dfrac{2x}{x+3}=2$",
        "answer": true
      },
      {
        "text": "$\\dfrac{x-1}{x}\\cdot\\dfrac{x}{1-x}=1$",
        "answer": false
      },
      {
        "text": "$\\dfrac{x^2-9}{x}:(x-3)=\\dfrac{x+3}{x}$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Thực hiện từ trái sang phải: $\\dfrac6x:\\dfrac3x=\\dfrac6x\\cdot\\dfrac x3=2$, rồi $2:\\dfrac2x=2\\cdot\\dfrac x2=x$. Kết quả $\\dfrac4x$ là do làm phép chia sau trước (sai thứ tự thực hiện).<br>- <strong>Đúng</strong>.<br>  $\\dfrac{4x}{x+3}\\cdot\\dfrac{x+3}{2x}=\\dfrac{4x}{2x}=2$.<br>- <strong>Sai</strong>.<br>  $\\dfrac{x-1}{x}\\cdot\\dfrac{x}{1-x}=\\dfrac{x-1}{1-x}=\\dfrac{x-1}{-(x-1)}=-1\\neq 1$.<br>- <strong>Đúng</strong>.<br>  $\\dfrac{x^2-9}{x}\\cdot\\dfrac{1}{x-3}=\\dfrac{(x-3)(x+3)}{x(x-3)}=\\dfrac{x+3}{x}$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
