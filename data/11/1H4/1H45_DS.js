window.dungSai1H45 = [
  {
    "id": "1H451DS1",
    "question": "Cho lăng trụ tam giác $ABC.A'B'C'$ có $I$, $K$, $G$ lần lượt là trọng tâm các tam giác $ABC$, $A'B'C'$, $ACC'$. Gọi $M$, $M'$, $N$ lần lượt là trung điểm của $BC$, $B'C'$, $CC'$. Khi đó",
    "subQuestions": [
      {
        "text": "$AMM'A'$ là hình bình hành",
        "answer": true
      },
      {
        "text": "$\\dfrac{AI}{AM}=\\dfrac{AG}{AN}=\\dfrac{1}{3}$",
        "answer": false
      },
      {
        "text": "$(IKG)$ cắt $(BCC'B')$",
        "answer": false
      },
      {
        "text": "$(A'KG)\\parallel(AIB')$",
        "answer": true
      }
    ],
    "explain": "- Vì $M$, $M'$ là trung điểm của $BC$, $B'C'$ nên $MM'$ là đường trung bình của hình bình hành $BCC'B'$, suy ra $MM'\\parallel BB'$ và $MM'=BB'$; mà $AA'\\parallel BB'$ và $AA'=BB'$ (tính chất lăng trụ) nên $MM'\\parallel AA'$ và $MM'=AA'$. Suy ra $AMM'A'$ là hình bình hành. Vậy khẳng định này đúng.<br>- Vì $I$ là trọng tâm tam giác $ABC$ và $AM$ là trung tuyến nên $\\dfrac{AI}{AM}=\\dfrac{2}{3}$. Vì $G$ là trọng tâm tam giác $ACC'$ và $AN$ là trung tuyến (với $N$ là trung điểm $CC'$) nên $\\dfrac{AG}{AN}=\\dfrac{2}{3}$. Vậy $\\dfrac{AI}{AM}=\\dfrac{AG}{AN}=\\dfrac{2}{3}$ (không phải $\\dfrac{1}{3}$), nên khẳng định trên là sai. Từ đây cũng suy ra $IG\\parallel MN$, mà $MN\\subset (BCC'B')$ nên $IG\\parallel (BCC'B')$.<br>- Vì $I$, $K$ lần lượt là trọng tâm các tam giác $ABC$, $A'B'C'$ nên $IM=KM'=\\dfrac{1}{3}AM$ và $IM\\parallel KM'$, suy ra $IKM'M$ là hình bình hành, do đó $IK\\parallel MM'$; mà $MM'\\subset (BCC'B')$ nên $IK\\parallel (BCC'B')$. Kết hợp với $IG\\parallel (BCC'B')$ ở trên, ta có $(IKG)\\parallel (BCC'B')$. Vậy khẳng định \"$(IKG)$ cắt $(BCC'B')$\" là sai.<br>- Mặt phẳng $(A'KG)$ chính là mặt phẳng $(A'M'C)$ và $(AIB')$ chính là mặt phẳng $(AMB')$. Vì $AMM'A'$ là hình bình hành (câu 1) nên $AM\\parallel A'M'$, suy ra $AM\\parallel (A'M'C)$. Mặt khác $CM\\parallel B'M'$ và $CM=B'M'$ nên $CMB'M'$ là hình bình hành, suy ra $B'M\\parallel CM'$, do đó $B'M\\parallel (A'M'C)$. Vì $AM$ và $B'M$ cùng song song với $(A'M'C)$ và cắt nhau tại $M$ nên $(AMB')\\parallel (A'M'C)$, tức là $(A'KG)\\parallel (AIB')$. Vậy khẳng định này đúng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H451DS2",
    "question": "Cho lăng trụ tam giác $ABC.A'B'C'$. Gọi $I$ và $I'$ lần lượt là trung điểm của $BC$ và $B'C'$. Khi đó",
    "subQuestions": [
      {
        "text": "$II'\\parallel BB'$",
        "answer": true
      },
      {
        "text": "$AA'I'I$ là hình bình hành",
        "answer": true
      },
      {
        "text": "$IA'$ song song $(AB'C')$",
        "answer": false
      },
      {
        "text": "Giao tuyến của $(AB'C')$ và $(A'BC')$ là đường thẳng đi qua giao điểm của hai đường thẳng $AI'$, $A'I$",
        "answer": true
      }
    ],
    "explain": "- Vì $I$, $I'$ lần lượt là trung điểm của $BC$, $B'C'$ nên $BI\\parallel B'I'$ và $BI=B'I'$, suy ra $BB'I'I$ là hình bình hành, do đó $II'\\parallel BB'$. Vậy khẳng định này đúng.<br>- Từ $II'\\parallel BB'$ mà $BB'\\parallel AA'$ (tính chất lăng trụ) nên $II'\\parallel AA'$; lại có $II'=BB'=AA'$ nên $AA'I'I$ là hình bình hành. Vậy khẳng định này đúng.<br>- Gọi $E=IA'\\cap AI'$ (hai đường chéo của hình bình hành $AA'I'I$ cắt nhau tại $E$). Vì $E\\in AI'\\subset (AB'C')$ nên $IA'$ cắt mặt phẳng $(AB'C')$ tại $E$, chứ không song song với mặt phẳng này. Vậy khẳng định \"$IA'$ song song $(AB'C')$\" là sai.<br>- Gọi $F=AB'\\cap A'B$. Vì $F\\in AB'\\subset (AB'C')$ và $F\\in A'B\\subset (A'BC')$ nên $F\\in (AB'C')\\cap (A'BC')$. Theo câu trên, $E=IA'\\cap AI'$ với $E\\in AI'\\subset (AB'C')$ và $E\\in A'I\\subset (A'BC')$ nên $E\\in (AB'C')\\cap (A'BC')$. Vậy giao tuyến của $(AB'C')$ và $(A'BC')$ chính là đường thẳng $EF$, đi qua giao điểm $E$ của hai đường thẳng $AI'$ và $A'I$. Vậy khẳng định này đúng.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H452DS1",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$. Gọi $G_1$, $G_2$ lần lượt là trọng tâm của các tam giác $A'BD$, $B'D'C$. Khi đó",
    "subQuestions": [
      {
        "text": "$A'D'CB$ là hình bình hành",
        "answer": true
      },
      {
        "text": "$(A'BD)\\parallel(B'D'C)$",
        "answer": true
      },
      {
        "text": "$G_1$, $G_2$ cùng thuộc $AC'$",
        "answer": true
      },
      {
        "text": "$G_1G_2=\\dfrac{2}{3}AC'$",
        "answer": false
      }
    ],
    "explain": "- Vì $ABCD.A'B'C'D'$ là hình hộp nên $A'D'\\parallel BC$ và $A'D'=BC$, suy ra $A'D'CB$ là hình bình hành. Vậy khẳng định này đúng.<br>- Ta có $BD\\parallel B'D'$ và $CD'\\parallel A'B$ (tính chất các mặt của hình hộp), suy ra $(A'BD)\\parallel(B'D'C)$. Vậy khẳng định này đúng.<br>- Gọi $O$ là tâm của hình bình hành đáy $ABCD$ (cũng là trung điểm $BD$ và $AC$), $O'$ là tâm của $A'B'C'D'$, và $I$ là trung điểm của $AC'$. Vì $ACC'A'$ là hình bình hành ($AC\\parallel A'C'$, $AC=A'C'$) nên hai đường chéo $AC'$ và $A'C$ của nó cắt nhau tại trung điểm mỗi đường, tức $I$ cũng là trung điểm của $A'C$.<br>  Vì $G_1$ là trọng tâm tam giác $A'BD$ và $O$ là trung điểm $BD$ nên $A'O$ là trung tuyến của tam giác đó, suy ra $\\dfrac{A'G_1}{A'O}=\\dfrac{2}{3}$. Mặt khác $O$ cũng là trung điểm $AC$ nên $A'O$ đồng thời là trung tuyến của tam giác $AA'C$ kẻ từ $A'$; do đó $G_1$ cũng là trọng tâm của tam giác $AA'C$, suy ra $G_1$ thuộc trung tuyến $AI$ (từ $A$ đến trung điểm $I$ của $A'C$), mà $AI\\equiv AC'$ (vì $I\\in AC'$) nên $G_1\\in AC'$.<br>  Lập luận tương tự, $G_2$ là trọng tâm tam giác $CB'D'$ nên cũng là trọng tâm tam giác $CC'A'$, do đó $G_2$ thuộc trung tuyến $C'I\\equiv AC'$, suy ra $G_2\\in AC'$. Vậy $G_1$, $G_2$ cùng thuộc $AC'$: khẳng định này đúng.<br>- Từ chứng minh trên, $AG_1=\\dfrac{2}{3}AI=\\dfrac{2}{3}\\cdot\\dfrac{1}{2}AC'=\\dfrac{1}{3}AC'$, và tương tự $CG_2=\\dfrac{1}{3}AC'$, suy ra $G_1G_2=AC'-AG_1-CG_2=\\dfrac{1}{3}AC'$ (không phải $\\dfrac{2}{3}AC'$). Vậy khẳng định này sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H452DS2",
    "question": "Cho hình hộp $ABCD.A'B'C'D'$ có các cạnh $AA'$, $BB'$, $CC'$, $DD'$ song song với nhau. Khi đó<br><img src=\"data/11/1H4/im1H45/1H45_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$(BDA')\\parallel(B'D'C)$",
        "answer": true
      },
      {
        "text": "Đường chéo $AC'$ đi qua trọng tâm $G_1$, $G_2$ của tam giác $BDA'$ và $B'D'C$",
        "answer": true
      },
      {
        "text": "$AG_1=2G_1G_2$",
        "answer": false
      },
      {
        "text": "Mặt phẳng $(A'B'G_2)$ cắt hình hộp $ABCD.A'B'C'D'$ tạo thành một tứ giác là hình bình hành",
        "answer": true
      }
    ],
    "explain": "<br>- <b>a) Đúng.</b> $BDD'B'$ và $A'BCD'$ là hình bình hành nên $BD\\parallel B'D'$, $A'B\\parallel D'C$. Hai đường cắt nhau $BD,A'B$ của $(BDA')$ lần lượt song song với hai đường cắt nhau $B'D',D'C$ của $(B'D'C)$ nên $(BDA')\\parallel(B'D'C)$.<br>- <b>b) Đúng.</b> Gọi $O=AC\\cap BD$, $O'=A'C'\\cap B'D'$, $I$ là trung điểm $AC'$. Vì $ACC'A'$ là hình bình hành nên $I$ cũng là trung điểm $A'C$.<br>&nbsp;&nbsp;+ $A'O$ vừa là trung tuyến của $\\triangle A'BD$, vừa là trung tuyến của $\\triangle AA'C$; $G_1$ là trọng tâm $\\triangle A'BD$ nên $A'G_1=\\dfrac23A'O$, do đó $G_1$ cũng là trọng tâm $\\triangle AA'C$, suy ra $G_1\\in AI\\equiv AC'$.<br>&nbsp;&nbsp;+ Tương tự $CO'$ là trung tuyến chung của $\\triangle CB'D'$ và $\\triangle CC'A'$ nên $G_2$ là trọng tâm $\\triangle CC'A'$, suy ra $G_2\\in C'I\\equiv AC'$.<br>- <b>c) Sai.</b> $G_1$ là trọng tâm $\\triangle AA'C$ nên $AG_1=\\dfrac23AI=\\dfrac13AC'$; $G_2$ là trọng tâm $\\triangle CC'A'$ nên $C'G_2=\\dfrac23C'I=\\dfrac13AC'$.<br>&nbsp;&nbsp;Suy ra $G_1G_2=AC'-AG_1-C'G_2=\\dfrac13AC'$, tức $AG_1=G_1G_2$ (chứ không phải $AG_1=2G_1G_2$).<br>- <b>d) Đúng.</b> Gọi $P$ là trung điểm $CD'$. $B'P$ là trung tuyến của $\\triangle CB'D'$ nên đi qua $G_2$, do đó $(A'B'G_2)\\equiv(A'B'P)$.<br>&nbsp;&nbsp;+ Vì $A'B'\\parallel CD$ nên $(A'B'P)$ cắt $(CDD'C')$ theo đường thẳng qua $P$ song song $CD$, cắt $CC'$, $DD'$ lần lượt tại $M$, $N$ (là trung điểm các cạnh) và $MN=CD=A'B'$.<br>&nbsp;&nbsp;+ Do $MN\\parallel A'B'$, $MN=A'B'$ nên thiết diện $A'B'MN$ là hình bình hành.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H452DS3",
    "question": "Cho lăng trụ tam giác $ABC.A'B'C'$ có $I$, $K$, $G$ lần lượt là trọng tâm các tam giác $ABC$, $A'B'C'$, $A C C'$. Gọi $M, M', N$ lần lượt là trung điểm của $BC,$ $B'C'$, $C C'$. Khi đó: Các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Đường thẳng $AN$ không cắt $A'C$",
        "answer": false
      },
      {
        "text": "$AM \\parallel A'M'$",
        "answer": true
      },
      {
        "text": "$IK \\parallel (BCC'B')$; $IG \\parallel (BCC'B')$",
        "answer": true
      },
      {
        "text": "$(A'KG) \\parallel (AIB')$",
        "answer": true
      }
    ],
    "explain": "<img src=\"data/11/1H4/im1H45/1H45_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br><br>- Ta có $AN\\subset (ACC'A')$, $A'C\\subset (ACC'A')$ và $ AN$ không song song với $A'C$ nên $AN$ cắt $A'C$ nhau.<br>- Ta có $M$ và $M'$ lần lượt là trung điểm của $BC$ và $B'C'$ nên $MM'$ là đường trung bình trong hình bình hành $BCC'B'$ do đó $MM'\\parallel BB'$ và $MM'=BB'$.<br>Mặt khác $BB'\\parallel AA'$ và $BB'=AA'$, do đó $MM'=AA'$ và $MM'\\parallel AA'$. Suy ra $AMM'A'$ là hình bình hành, suy ra $AM\\parallel A'M'$.<br>- Ta có $MI=\\dfrac{1}{3}AM$, $M'K=\\dfrac{1}{3}A'M'$ và $AM=A'M'$ nên $MI=M'K$ mà $MI\\parallel M'K$ nên $IMM'K$ là hình bình hành.<br>Do đó $IK\\parallel MM'$ mà $MM'\\subset (BCC'B')$ nên $IK\\parallel (BCC'B')$.<br>Ta có $\\dfrac{AI}{AM}=\\dfrac{2}{3}$ và $\\dfrac{AG}{AN}=\\dfrac{2}{3}$ nên $\\dfrac{AI}{AM}=\\dfrac{AG}{AN}$.<br>Do đó $IG\\parallel MC$ mà $MC\\subset (BCC'B')$ nên $IG\\parallel (BCC'B')$.<br>- Ta có $MC=\\dfrac{1}{2}BC$, $B'M'=\\dfrac{1}{2}B'C'$ và $BC=B'C'$ nên $MC=B'M'$, suy ra $MCM'B'$ là bình bình hành, do đó $CM'\\parallel MB'$.<br>Mặt khác $MB'\\subset (AIB')$ và $CM'\\not \\subset (AIB')$ nên $CM'\\parallel (AIB')$.<br>Ta lại có $CM'\\subset (A'KG)$ nên $(A'KG) \\parallel (AIB')$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
