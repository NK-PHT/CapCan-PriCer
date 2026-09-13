// =========================================================================
// KHỐI DỮ LIỆU: 1H43 - Trắc nghiệm
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1H43 = [
  {
    "id": "1H432TN1",
    "question": "Cho tứ diện $ABCD$ có các điểm $M$, $N$ lần lượt là trung điểm của các cạnh $AB$, $AC$. Đường thẳng $MN$ song song với mặt phẳng nào sau đây?<br><img src=\"data/11/1H4/im1H43/1H43_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$(BCD)$",
      "$(ACD)$",
      "$(ABC)$",
      "$(ABD)$"
    ],
    "answer": 0,
    "explain": "Vì $M$, $N$ lần lượt là trung điểm của các cạnh $AB$, $AC$ nên $MN$ là đường trung bình của tam giác $ABC$.<br>Do đó $MN \\parallel BC$. Mà $MN \\not\\subset (BCD)$ và $BC \\subset (BCD)$.<br>Vậy $MN \\parallel (BCD)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H433TN1",
    "question": "Cho hình chóp $S.ABCD$ có $AB$ song song với $CD$, $AB = 2CD$. Giao tuyến của hai mặt phẳng $(SAD)$, $(SBC)$ là đường thẳng nào sau đây?",
    "options": [
      "Đường thẳng $d$ đi qua $S$ và song song $AD$, $BC$",
      "Đường thẳng $SM$, với $M$ là giao điểm của $AC$ và $BD$",
      "Đường thẳng $d$ đi qua $S$ và song song $AD$",
      "Đường thẳng $d$ đi qua $S$ và song song $AB$, $CD$"
    ],
    "answer": 0,
    "explain": "<img src=\"data/11/1H4/im1H43/1H43_tikz_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Ta có $S\\in (SAD)\\cap(SBC)$.<br>Trong $ABCD$ gọi $M=AD\\cap BC$. <br>Suy ra $\\left\\{\\begin{array}{l}M\\in AD\\subset(SAD)\\\\M\\in BC\\subset(SBC)\\end{array}\\right.\\Rightarrow M\\in (SAD)\\cap(SBC)$.<br>Vậy $(SAD)\\cap(SBC)=SM$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H433TN2",
    "question": "Cho hình chóp $S.ABCD$, có đáy $ABCD$ là hình thang, $AD \\parallel BC$. Giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$ là đường thẳng qua $S$ và<br><img src=\"data/11/1H4/im1H43/1H43_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "qua giao điểm của hai đường thẳng $AC$, $BD$",
      "song song với $AB$",
      "song song với $AD$",
      "song song với $AC$"
    ],
    "answer": 2,
    "explain": "Do $ABCD$ là hình thang có $AD \\parallel BC$ nên giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng qua $S$ và song song với cạnh $AD$ và $BC$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H433TN3",
    "question": "Cho tứ diện $ABCD$. Gọi $I$ là trung điểm của $AD$, $J$ là trung điểm của $BC$. Giao tuyến của hai mặt phẳng $(IBC)$ và $(JAD)$ là<br><img src=\"data/11/1H4/im1H43/1H43_tikz_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$IJ$",
      "$AJ$",
      "$BC$",
      "$CI$"
    ],
    "answer": 0,
    "explain": "<img src=\"data/11/1H4/im1H43/1H43_tikz_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Ta có $\\left\\{\\begin{array}{l}I \\in (IBC)\\\\I \\in AD \\subset (JAD)\\end{array}\\right. \\Rightarrow I \\in (IBC) \\cap (JAD)$. (1)<br>và $\\left\\{\\begin{array}{l}J \\in (JAD)\\\\J \\in BC \\subset (IBC)\\end{array}\\right. \\Rightarrow J \\in (IBC) \\cap (JAD)$. (2)<br>Từ (1) và (2) suy ra giao tuyến của hai mặt phẳng $(IBC)$ và $(JAD)$ là đường thẳng $IJ$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H433TN4",
    "question": "Cho tứ diện $ABCD$, $I$ và $J$ theo thứ tự là trung điểm của $AD$ và $AC$, $G$ là trọng tâm tam giác $BCD$. Giao tuyến của hai mặt phẳng $(GIJ)$ và $(BCD)$ là đường thẳng",
    "options": [
      "qua $G$ và song song với $CD$",
      "qua $J$ và song song với $BD$",
      "qua $I$ và song song với $AB$",
      "qua $G$ và song song với $BC$"
    ],
    "answer": 0,
    "explain": "<img src=\"data/11/1H4/im1H43/1H43_tikz_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Ta có $\\left\\{\\begin{array}{l}G\\in (IJG)\\cap (BCD)\\\\IJ\\parallel CD\\end{array}\\right.$<br>nên $(IJG)\\cap (BCD)=Gx\\parallel CD$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H432TN2",
    "question": "Cho hình chóp tứ giác $S . A B C D$. Gọi $M$ và $N$ lần lượt là trung điểm của $S B$ và $S D$. Khẳng định nào sau đây đúng?",
    "options": [
      "$MN // \\left(SCD\\right)$",
      "$MN // \\left(SBC\\right)$",
      "$MN // \\left(ABCD\\right)$",
      "$MN // \\left(SAB\\right)$"
    ],
    "answer": 2,
    "explain": "<img src=\"data/11/1H4/im1H43/1H43_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> Vì $MN$ là đường trung bình của tam giác $SBD$ nên $MN//BD\\subset \\left(ABCD\\right)$.<br>Vậy $MN//\\left(ABCD\\right)$",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H432TN3",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$, $M$ là trung điểm của $SA$. Khẳng định nào sau đây đúng?",
    "options": [
      "$OM \\parallel (SAB) $",
      "$OM \\parallel (SBC) $",
      "$OM \\parallel (SAD) $",
      "$OM \\parallel (SAC) $"
    ],
    "answer": 1,
    "explain": "Xét tam giác $SAC$ có $OM$ là đường trung bình nên $OM \\parallel SC$.<br>Mà $SC \\subset (SBC)$ nên $OM \\parallel (SBC)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H432TN4",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật. Khẳng định nào sau đây đúng?",
    "options": [
      "$CD \\parallel \\left(SAB\\right)$",
      "$AB \\parallel \\left(SBC\\right)$",
      "$BD \\parallel \\left(SAC\\right)$",
      "$AC \\parallel \\left(SBD\\right)$"
    ],
    "answer": 0,
    "explain": "<img src=\"data/11/1H4/im1H43/1H43_tikz_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Ta có $\\left\\{\\begin{array}{l}CD\\parallel AB\\\\AB\\subset (SAB)\\\\CD\\not\\subset (SAB)\\end{array}\\right.\\Rightarrow CD\\parallel (SAB)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H431TN1",
    "question": "Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Mệnh đề nào sau đây <strong>đúng</strong>?",
    "options": [
      "Đường thẳng $a$ có đúng hai điểm chung với mặt phẳng $(P)$",
      "Đường thẳng $a$ không có điểm chung với mặt phẳng $(P)$",
      "Đường thẳng $a$ có vô số điểm chung với mặt phẳng $(P)$",
      "Đường thẳng $a$ có đúng một điểm chung với mặt phẳng $(P)$"
    ],
    "answer": 1,
    "explain": "Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì đường thẳng $a$ không có điểm chung với mặt phẳng $(P)$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H431TN2",
    "question": "Cho đường thẳng $d$ song song với mặt phẳng $(\\alpha)$. Chọn mệnh đề <strong>đúng</strong> trong các mệnh đề dưới đây.",
    "options": [
      "$d$ và $(\\alpha)$ có một điểm chung duy nhất",
      "$d$ và $(\\alpha)$ có hai điểm chung phân biệt",
      "$d$ và $(\\alpha)$ có vô số điểm chung",
      "$d$ và $(\\alpha)$ không có điểm chung"
    ],
    "answer": 3,
    "explain": "Theo định nghĩa đường thẳng song song với mặt phẳng.<br>Nếu đường thẳng $d$ song song với mặt phẳng $(\\alpha)$ thì chúng không có điểm chung nào.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "1H431TN3",
    "question": "Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Khẳng định nào sau đây sai?",
    "options": [
      "$a$ song song với mọi đường thẳng trong $(P)$",
      "$a$ và $(P)$ không có điểm chung",
      "$a$ song song với một đường thẳng nào đó nằm trong $(P)$",
      "Nếu $(Q)$ là mặt phẳng chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b$ song song với $a$"
    ],
    "answer": 0,
    "explain": "Nếu $(Q)$ là mặt phẳng chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b$ song song với $a$. Do đó $a$ song song với mọi đường thẳng trong $(P)$ là khẳng định sai.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
