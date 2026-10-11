window.dungSai8D22 = [
  {
    "id": "8D221DS1",
    "question": "Xét tính đúng sai của các mệnh đề sau (với $x,a,b$ là các số tùy ý):",
    "subQuestions": [
      {
        "text": "$(x+1)^3=x^3+3x^2+3x+1$",
        "answer": true
      },
      {
        "text": "$(x-2)^3=x^3-6x^2+12x-8$",
        "answer": true
      },
      {
        "text": "$(a+b)^3=a^3+b^3$",
        "answer": false
      },
      {
        "text": "$(2x-1)^3=2x^3-6x^2+6x-1$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Theo hằng đẳng thức lập phương của một tổng: $(x+1)^3=x^3+3\\cdot x^2\\cdot1+3\\cdot x\\cdot1^2+1^3=x^3+3x^2+3x+1$.<br>- <strong>Đúng</strong>.<br>  Theo hằng đẳng thức lập phương của một hiệu: $(x-2)^3=x^3-3\\cdot x^2\\cdot2+3\\cdot x\\cdot2^2-2^3=x^3-6x^2+12x-8$.<br>- <strong>Sai</strong>.<br>  $(a+b)^3=a^3+3a^2b+3ab^2+b^3$, nói chung khác $a^3+b^3$. Ví dụ $a=b=1$: $(1+1)^3=8$ còn $1^3+1^3=2$.<br>- <strong>Sai</strong>.<br>  $(2x-1)^3=(2x)^3-3\\cdot(2x)^2\\cdot1+3\\cdot2x\\cdot1^2-1=8x^3-12x^2+6x-1$. Mệnh đề đã quên lập phương và bình phương của $2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D221DS2",
    "question": "Cho biểu thức $A=x^3+9x^2+27x+27$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$A=(x+3)^3$",
        "answer": true
      },
      {
        "text": "Tại $x=97$ thì $A=1000000$",
        "answer": true
      },
      {
        "text": "Tại $x=-5$ thì $A=8$",
        "answer": false
      },
      {
        "text": "$A-9x(x+3)=x^3+27$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $A=x^3+3\\cdot x^2\\cdot3+3\\cdot x\\cdot3^2+3^3=(x+3)^3$.<br>- <strong>Đúng</strong>.<br>  Tại $x=97$: $A=(97+3)^3=100^3=1000000$.<br>- <strong>Sai</strong>.<br>  Tại $x=-5$: $A=(-5+3)^3=(-2)^3=-8\\neq8$.<br>- <strong>Đúng</strong>.<br>  $9x(x+3)=9x^2+27x$ nên $A-9x(x+3)=x^3+9x^2+27x+27-9x^2-27x=x^3+27$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D221DS3",
    "question": "Sử dụng hằng đẳng thức để tính. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$101^3=1030301$",
        "answer": true
      },
      {
        "text": "$99^3=970299$",
        "answer": true
      },
      {
        "text": "$21^3=8001$",
        "answer": false
      },
      {
        "text": "$9^3-3\\cdot9^2+3\\cdot9-1=1000$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $101^3=(100+1)^3=100^3+3\\cdot100^2+3\\cdot100+1=1000000+30000+300+1=1030301$.<br>- <strong>Đúng</strong>.<br>  $99^3=(100-1)^3=1000000-30000+300-1=970299$.<br>- <strong>Sai</strong>.<br>  $21^3=(20+1)^3=8000+3\\cdot400+3\\cdot20+1=8000+1200+60+1=9261\\neq8001$. (Sai lầm: viết $(20+1)^3=20^3+1^3$.)<br>- <strong>Sai</strong>.<br>  $9^3-3\\cdot9^2\\cdot1+3\\cdot9\\cdot1^2-1^3=(9-1)^3=8^3=512\\neq1000$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "8D221DS4",
    "question": "Cho hai số $x,y$ thỏa mãn $x+y=3$ và $xy=2$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$(x+y)^3=27$",
        "answer": true
      },
      {
        "text": "$x^3+y^3=9$",
        "answer": true
      },
      {
        "text": "$x^3+y^3=27$",
        "answer": false
      },
      {
        "text": "$(x+y)^3-x^3-y^3=6$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $(x+y)^3=3^3=27$.<br>- <strong>Đúng</strong>.<br>  Từ $(x+y)^3=x^3+y^3+3xy(x+y)$ suy ra $x^3+y^3=(x+y)^3-3xy(x+y)=27-3\\cdot2\\cdot3=9$.<br>- <strong>Sai</strong>.<br>  $x^3+y^3=9\\neq27$ (nhầm $(x+y)^3=x^3+y^3$).<br>- <strong>Sai</strong>.<br>  $(x+y)^3-x^3-y^3=3x^2y+3xy^2=3xy(x+y)=3\\cdot2\\cdot3=18\\neq6$ (quên hệ số $3$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
