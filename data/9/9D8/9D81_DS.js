window.dungSai9D81 = [
  {
    "id": "9D811DS1",
    "question": "Gieo một con xúc xắc cân đối rồi tung một đồng xu cân đối. Kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa; mỗi kết quả được viết dạng $(a;\\,X)$ với $a$ là số chấm xuất hiện trên xúc xắc, $X$ là mặt xuất hiện của đồng xu. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Không gian mẫu có $12$ phần tử",
        "answer": true
      },
      {
        "text": "Có $6$ kết quả mà đồng xu xuất hiện mặt sấp",
        "answer": true
      },
      {
        "text": "Có $3$ kết quả mà số chấm xuất hiện là số chẵn",
        "answer": false
      },
      {
        "text": "Có $2$ kết quả mà xúc xắc xuất hiện mặt $5$ chấm",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Xúc xắc có $6$ kết quả, mỗi kết quả đó đi với $2$ kết quả của đồng xu nên không gian mẫu có $6\\cdot 2=12$ phần tử.<br>- <strong>Đúng</strong>.<br>  Các kết quả đó là $(1;S), (2;S), \\ldots, (6;S)$: có $6$ kết quả.<br>- <strong>Sai</strong>.<br>  Số chấm chẵn là $2, 4, 6$; mỗi số đi với $S$ hoặc $N$ nên có $3\\cdot 2=6$ kết quả, không phải $3$.<br>- <strong>Đúng</strong>.<br>  Đó là $(5;S)$ và $(5;N)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "9D811DS2",
    "question": "Tung một đồng xu cân đối ba lần liên tiếp và ghi lại dãy mặt xuất hiện (kí hiệu $S$ là sấp, $N$ là ngửa; ví dụ $SNN$ là lần đầu sấp, hai lần sau ngửa). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Không gian mẫu có $6$ phần tử",
        "answer": false
      },
      {
        "text": "Có $3$ kết quả có đúng hai lần xuất hiện mặt sấp",
        "answer": true
      },
      {
        "text": "$SSN$ và $NSS$ là cùng một kết quả của phép thử",
        "answer": false
      },
      {
        "text": "Có đúng $1$ kết quả mà cả ba lần đều xuất hiện mặt ngửa",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  $\\Omega=\\{SSS;\\,SSN;\\,SNS;\\,SNN;\\,NSS;\\,NSN;\\,NNS;\\,NNN\\}$ có $8$ phần tử, không phải $6$.<br>- <strong>Đúng</strong>.<br>  Đó là $SSN$, $SNS$, $NSS$.<br>- <strong>Sai</strong>.<br>  Phép thử ghi lại thứ tự các lần tung: $SSN$ là lần ba ngửa, còn $NSS$ là lần đầu ngửa, hai kết quả khác nhau.<br>- <strong>Đúng</strong>.<br>  Chỉ có kết quả $NNN$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "9D811DS3",
    "question": "Một hộp có $4$ viên bi có màu xanh, đỏ, vàng, trắng (mỗi màu một viên). Lấy ngẫu nhiên đồng thời $2$ viên bi từ hộp. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Không gian mẫu có $6$ phần tử",
        "answer": true
      },
      {
        "text": "Không gian mẫu có $12$ phần tử",
        "answer": false
      },
      {
        "text": "Có $3$ kết quả trong đó có viên bi đỏ",
        "answer": true
      },
      {
        "text": "Nếu thay bằng cách lấy lần lượt $2$ viên, lấy xong viên thứ nhất thì trả lại hộp rồi mới lấy viên thứ hai, thì không gian mẫu có $16$ phần tử",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Kí hiệu $X, D, V, T$ lần lượt là bi xanh, đỏ, vàng, trắng. Các kết quả: $\\{X,D\\}, \\{X,V\\}, \\{X,T\\}, \\{D,V\\}, \\{D,T\\}, \\{V,T\\}$, gồm $6$ phần tử.<br>- <strong>Sai</strong>.<br>  Lấy đồng thời nên không phân biệt thứ tự; cặp (xanh, đỏ) và (đỏ, xanh) là một kết quả. Không gian mẫu có $6$ phần tử, không phải $12$.<br>- <strong>Đúng</strong>.<br>  Viên đỏ đi với một trong ba viên còn lại: có $3$ kết quả.<br>- <strong>Đúng</strong>.<br>  Lần thứ nhất có $4$ kết quả, lần thứ hai (đã trả bi lại) cũng có $4$ kết quả nên có $4\\cdot 4=16$ kết quả.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "9D811DS4",
    "question": "Gieo hai con xúc xắc cân đối (một xanh, một đỏ). Mỗi kết quả là cặp $(a;\\,b)$ với $a, b$ lần lượt là số chấm xuất hiện trên xúc xắc xanh và xúc xắc đỏ. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Không gian mẫu có $36$ phần tử",
        "answer": true
      },
      {
        "text": "Có $6$ kết quả mà tổng số chấm bằng $7$",
        "answer": true
      },
      {
        "text": "Có $2$ kết quả mà tổng số chấm bằng $12$",
        "answer": false
      },
      {
        "text": "Có $6$ kết quả mà tổng số chấm không nhỏ hơn $10$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Mỗi giá trị $a$ ($6$ khả năng) đi với $6$ giá trị của $b$ nên có $6\\cdot 6=36$ kết quả (có thể lập bảng $6$ dòng, $6$ cột).<br>- <strong>Đúng</strong>.<br>  Đó là $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$.<br>- <strong>Sai</strong>.<br>  Tổng bằng $12$ chỉ khi $a=b=6$, tức là chỉ có $1$ kết quả $(6;6)$.<br>- <strong>Đúng</strong>.<br>  Tổng $10$: $(4;6), (5;5), (6;4)$; tổng $11$: $(5;6), (6;5)$; tổng $12$: $(6;6)$. Có $3+2+1=6$ kết quả.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
