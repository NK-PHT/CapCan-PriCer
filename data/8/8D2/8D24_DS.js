window.dungSai8D24 = [
  {
    "id": "8D241DS1",
    "question": "Xét tính đúng sai của các phân tích đa thức thành nhân tử sau:",
    "subQuestions": [
      {
        "text": "$3x^2-6x=3x(x-2)$",
        "answer": true
      },
      {
        "text": "$x^2-xy+x-y=(x-y)(x+1)$",
        "answer": true
      },
      {
        "text": "$5x(x-1)-(1-x)=(x-1)(5x-1)$",
        "answer": false
      },
      {
        "text": "$x^3-8=(x-2)^3$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đặt nhân tử chung $3x$: $3x^2-6x=3x\\cdot x-3x\\cdot2=3x(x-2)$.<br>- <strong>Đúng</strong>.<br>  Nhóm hạng tử: $x^2-xy+x-y=x(x-y)+(x-y)=(x-y)(x+1)$.<br>- <strong>Sai</strong>.<br>  Vì $-(1-x)=x-1$ nên $5x(x-1)-(1-x)=5x(x-1)+(x-1)=(x-1)(5x+1)$, không phải $(x-1)(5x-1)$ (quên đổi dấu).<br>- <strong>Sai</strong>.<br>  $x^3-8=(x-2)(x^2+2x+4)$, còn $(x-2)^3=x^3-6x^2+12x-8$; hai đa thức khác nhau.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D241DS2",
    "question": "Cho đa thức $P=x^2-2xy+y^2-9$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$P=(x-y)^2-9$",
        "answer": true
      },
      {
        "text": "$P=(x-y-3)(x-y+3)$",
        "answer": true
      },
      {
        "text": "Tại $x=53$, $y=50$ thì $P=9$",
        "answer": false
      },
      {
        "text": "Tại $x=105$, $y=2$ thì $P=10600$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Nhóm ba hạng tử đầu: $x^2-2xy+y^2=(x-y)^2$ nên $P=(x-y)^2-9$.<br>- <strong>Đúng</strong>.<br>  Dùng hiệu hai bình phương: $P=(x-y)^2-3^2=(x-y-3)(x-y+3)$.<br>- <strong>Sai</strong>.<br>  Tại $x=53$, $y=50$: $x-y=3$ nên $P=(3-3)(3+3)=0\\neq9$.<br>- <strong>Đúng</strong>.<br>  Tại $x=105$, $y=2$: $x-y=103$ nên $P=(103-3)(103+3)=100\\cdot106=10600$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D241DS3",
    "question": "Xét bài toán: Tìm $x$, biết $x^3-4x=0$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$x^3-4x=x(x-2)(x+2)$",
        "answer": true
      },
      {
        "text": "$x=-2$ thỏa mãn đẳng thức đã cho",
        "answer": true
      },
      {
        "text": "Tổng tất cả các giá trị của $x$ thỏa mãn bằng $0$",
        "answer": true
      },
      {
        "text": "Chia cả hai vế cho $x$ được $x^2=4$, nên chỉ có hai giá trị $x=2$ và $x=-2$ thỏa mãn",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $x^3-4x=x(x^2-4)=x(x-2)(x+2)$.<br>- <strong>Đúng</strong>.<br>  Thay $x=-2$: $(-2)^3-4\\cdot(-2)=-8+8=0$.<br>- <strong>Đúng</strong>.<br>  $x(x-2)(x+2)=0$ khi $x=0$ hoặc $x-2=0$ hoặc $x+2=0$, tức là $x\\in\\{0;2;-2\\}$. Tổng: $0+2+(-2)=0$.<br>- <strong>Sai</strong>.<br>  Không được chia hai vế cho $x$ vì $x$ có thể bằng $0$; làm vậy sẽ bỏ sót giá trị $x=0$ (thật vậy $0^3-4\\cdot0=0$). Có ba giá trị: $0;2;-2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D241DS4",
    "question": "Cho đa thức $Q=x^3+2x^2-x-2$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$Q=(x+2)(x^2-1)$",
        "answer": true
      },
      {
        "text": "$Q=(x+2)(x-1)(x+1)$",
        "answer": true
      },
      {
        "text": "$Q=0$ tại $x=2$",
        "answer": false
      },
      {
        "text": "Tại $x=98$ thì $Q=960300$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Nhóm hạng tử: $Q=x^2(x+2)-(x+2)=(x+2)(x^2-1)$.<br>- <strong>Đúng</strong>.<br>  $x^2-1=(x-1)(x+1)$ nên $Q=(x+2)(x-1)(x+1)$.<br>- <strong>Sai</strong>.<br>  Tại $x=2$: $Q=(2+2)(2-1)(2+1)=12\\neq0$. ($Q=0$ khi $x=-2$, $x=1$ hoặc $x=-1$.)<br>- <strong>Đúng</strong>.<br>  Tại $x=98$: $Q=100\\cdot97\\cdot99=100\\cdot9603=960300$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
