window.dungSai8D62 = [
  {
    "id": "8D621DS1",
    "question": "Cho phân thức $P=\\dfrac{x^3-8}{x^2-4}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Rút gọn $P$ được $\\dfrac{x^2+2x+4}{x+2}$",
        "answer": true
      },
      {
        "text": "Giá trị của $P$ tại $x=0$ bằng $2$",
        "answer": true
      },
      {
        "text": "Giá trị của $P$ tại $x=2$ bằng $3$",
        "answer": false
      },
      {
        "text": "Điều kiện xác định của $P$ là $x\\neq 2$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $P=\\dfrac{(x-2)(x^2+2x+4)}{(x-2)(x+2)}=\\dfrac{x^2+2x+4}{x+2}$ (chia cả tử và mẫu cho nhân tử chung $x-2$).<br>- <strong>Đúng</strong>.<br>  $x=0$ thỏa mãn điều kiện xác định. $P=\\dfrac{0-8}{0-4}=\\dfrac{-8}{-4}=2$.<br>- <strong>Sai</strong>.<br>  Tại $x=2$ mẫu thức $x^2-4=0$ nên $P$ không xác định. Không được thay $x=2$ vào phân thức đã rút gọn (được $\\dfrac{12}{4}=3$) vì phân thức ban đầu không xác định tại đó.<br>- <strong>Sai</strong>.<br>  $P$ xác định khi $x^2-4=(x-2)(x+2)\\neq 0$, tức là $x\\neq 2$ và $x\\neq -2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D621DS2",
    "question": "Xét tính đúng sai của các đẳng thức sau (với điều kiện các phân thức đều xác định):",
    "subQuestions": [
      {
        "text": "$\\dfrac{x-y}{3-x}=\\dfrac{y-x}{x-3}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{1-x}{x-2}=\\dfrac{x-1}{x-2}$",
        "answer": false
      },
      {
        "text": "$\\dfrac{-x}{2-x}=\\dfrac{x}{x-2}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{(x-3)^2}{3-x}=x-3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đổi dấu cả tử và mẫu (nhân cả tử và mẫu với $-1$): $\\dfrac{x-y}{3-x}=\\dfrac{-(x-y)}{-(3-x)}=\\dfrac{y-x}{x-3}$.<br>- <strong>Sai</strong>.<br>  Chỉ đổi dấu tử mà giữ nguyên mẫu thì được phân thức đối: $\\dfrac{x-1}{x-2}=-\\dfrac{1-x}{x-2}$. Chẳng hạn tại $x=0$: vế trái bằng $\\dfrac{1}{-2}$, vế phải bằng $\\dfrac{-1}{-2}$, khác nhau.<br>- <strong>Đúng</strong>.<br>  Nhân cả tử và mẫu với $-1$: $\\dfrac{-x}{2-x}=\\dfrac{x}{-(2-x)}=\\dfrac{x}{x-2}$.<br>- <strong>Sai</strong>.<br>  $(x-3)^2=(3-x)^2$ nên $\\dfrac{(x-3)^2}{3-x}=\\dfrac{(3-x)^2}{3-x}=3-x$, không phải $x-3$. Chẳng hạn tại $x=4$: vế trái bằng $\\dfrac{1}{-1}=-1$, vế phải bằng $1$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D621DS3",
    "question": "Quy đồng mẫu thức hai phân thức $\\dfrac{1}{x^2-2x}$ và $\\dfrac{3}{x^2-4}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Mẫu thức chung đơn giản nhất là $x(x-2)(x+2)$",
        "answer": true
      },
      {
        "text": "Sau khi quy đồng, phân thức thứ hai trở thành $\\dfrac{3}{x(x-2)(x+2)}$",
        "answer": false
      },
      {
        "text": "Nhân tử phụ của mẫu thức $x^2-2x$ là $x+2$",
        "answer": true
      },
      {
        "text": "Mẫu thức chung đơn giản nhất là một đa thức bậc $4$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $x^2-2x=x(x-2)$ và $x^2-4=(x-2)(x+2)$. Mẫu thức chung đơn giản nhất là $x(x-2)(x+2)$.<br>- <strong>Sai</strong>.<br>  Nhân tử phụ của mẫu thứ hai là $x$, phải nhân cả tử và mẫu với $x$: $\\dfrac{3}{x^2-4}=\\dfrac{3x}{x(x-2)(x+2)}$. Mệnh đề quên nhân tử thức với nhân tử phụ.<br>- <strong>Đúng</strong>.<br>  $x(x-2)(x+2):x(x-2)=x+2$ nên nhân tử phụ của mẫu thứ nhất là $x+2$; ta được $\\dfrac{1}{x^2-2x}=\\dfrac{x+2}{x(x-2)(x+2)}$.<br>- <strong>Sai</strong>.<br>  $x(x-2)(x+2)=x^3-4x$ là đa thức bậc $3$. Bậc $4$ là khi lấy tích hai mẫu $(x^2-2x)(x^2-4)$, đây là một mẫu chung nhưng không đơn giản nhất.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D621DS4",
    "question": "Xét tính đúng sai của các đẳng thức sau (với điều kiện các phân thức đều xác định):",
    "subQuestions": [
      {
        "text": "$\\dfrac{x^2+3x}{x^2-9}=\\dfrac{x}{x-3}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{x+5}{x+10}=\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "$\\dfrac{2x}{3}=\\dfrac{2x(x^2+1)}{3(x^2+1)}$",
        "answer": true
      },
      {
        "text": "$\\dfrac{x^3-1}{x-1}=x^2+1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $\\dfrac{x^2+3x}{x^2-9}=\\dfrac{x(x+3)}{(x-3)(x+3)}=\\dfrac{x}{x-3}$ (chia cả tử và mẫu cho nhân tử chung $x+3$).<br>- <strong>Sai</strong>.<br>  Không được \"triệt tiêu\" từng hạng tử $x$ ở tử và mẫu; tử và mẫu không có nhân tử chung. Chẳng hạn tại $x=0$: $\\dfrac{5}{10}=\\dfrac12$, nhưng tại $x=10$: $\\dfrac{15}{20}=\\dfrac34\\neq\\dfrac12$.<br>- <strong>Đúng</strong>.<br>  Nhân cả tử và mẫu của $\\dfrac{2x}{3}$ với đa thức $x^2+1$ (luôn khác $0$) ta được phân thức bằng nó.<br>- <strong>Sai</strong>.<br>  $x^3-1=(x-1)(x^2+x+1)$ nên $\\dfrac{x^3-1}{x-1}=x^2+x+1\\neq x^2+1$ (nhầm hằng đẳng thức hiệu hai lập phương).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
