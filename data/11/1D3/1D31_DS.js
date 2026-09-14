window.dungSai1D31 = [
  {
    "id": "1D314DS1",
    "question": "Xét giới hạn $\\lim\\limits_{n\\to+\\infty}{\\dfrac{n^2+4n-3}{5-2n}}$",
    "subQuestions": [
      {
        "text": "$\\dfrac{n^2+4n-3}{5-2n}=\\dfrac{1+\\dfrac{4}{n}-\\dfrac{3}{n^2}}{\\dfrac{5}{n^2}- \\dfrac{2}{n}},\\forall n\\in\\mathbb{N^*}$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{n\\to+\\infty}{\\left(1+\\dfrac{4}{n}-\\dfrac{3}{n^2}\\right)}=1$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{n\\to+\\infty}\\left({\\dfrac{5}{n^2}- \\dfrac{2}{n}}\\right)=0$",
        "answer": true
      },
      {
        "text": "$\\lim\\limits_{n\\to+\\infty}{\\dfrac{n^2+4n-3}{5-2n}}=\\lim\\limits_{n\\to+\\infty}{\\dfrac{1+\\dfrac{4}{n}-\\dfrac{3}{n^2}}{\\dfrac{5}{n^2}- \\dfrac{2}{n}}}=+\\infty$",
        "answer": false
      }
    ],
    "explain": "<br>- Chia cả tử thức và mẫu thức cho $n^2$, ta được: $$\\dfrac{n^2+4n-3}{5-2n}=\\dfrac{1+\\dfrac{4}{n}-\\dfrac{3}{n^2}}{\\dfrac{5}{n^2}- \\dfrac{2}{n}},\\forall n\\in\\mathbb{N^*}.$$<br>- Áp dụng các quy tắc tính giới hạn, ta có: $$\\lim\\limits_{n\\to+\\infty}{\\left(1+\\dfrac{4}{n}-\\dfrac{3}{n^2}\\right)}=1.$$<br>- Áp dụng các quy tắc tính giới hạn, ta có: $\\lim\\limits_{n\\to+\\infty}\\left({\\dfrac{5}{n^2}- \\dfrac{2}{n}}\\right)=0.$<br>- Áp dụng các quy tắc tính giới hạn, ta có: $$\\lim\\limits_{n\\to+\\infty}{\\dfrac{n^2+4n-3}{5-2n}}=\\lim\\limits_{n\\to+\\infty}{\\dfrac{1+\\dfrac{4}{n}-\\dfrac{3}{n^2}}{\\dfrac{5}{n^2}- \\dfrac{2}{n}}}.$$ Vì $\\lim\\limits_{n\\to+\\infty}{\\left(1+\\dfrac{4}{n}-\\dfrac{3}{n^2}\\right)}=1$ và khi $n\\to+\\infty$ thì $5-2n&lt;0$ nên $$\\lim\\limits_{n\\to+\\infty}{\\dfrac{n^2+4n-3}{5-2n}}=\\lim\\limits_{n\\to+\\infty}{\\dfrac{1+\\dfrac{4}{n}-\\dfrac{3}{n^2}}{\\dfrac{5}{n^2}- \\dfrac{2}{n}}}=-\\infty$$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
