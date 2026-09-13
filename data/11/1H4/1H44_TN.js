// =========================================================================
// KHỐI DỮ LIỆU: 1H44 - Trắc nghiệm
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1H44 = [
  {
    "id": "1H442TN1",
    "question": "Cho hình hộp $ABCD.A_1B_1C_1D_1$. Mặt phẳng $\\left(AB_1D_1\\right)$ song song với mặt phẳng nào sau đây?<br><img src=\"data/11/1H4/im1H44/1H44_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\left(BCA_1\\right)$",
      "$\\left(BDA_1\\right)$",
      "$\\left(BC_1D\\right)$",
      "$\\left(A_1C_1C\\right)$"
    ],
    "answer": 2,
    "explain": "<img src=\"data/11/1H4/im1H44/1H44_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"><br>Ta có<br>Vì $\\left\\{\\begin{array}{l}AD_1 \\parallel BC_1\\\\D_1B_1 \\parallel DB\\end{array}\\right.$ nên $(AB_1D_1) \\parallel (BC_1D)$."
  },
  {
    "id": "1H442TN2",
    "question": "Cho hình chóp $S. ABCD$, có đáy $ABCD$ là hình bình hành. Gọi $M$, $N$, $P$ lần lượt là trung điểm của các cạnh $SA$, $SB$, $SC$. Khẳng định nào dưới đây <strong>sai</strong>?",
    "options": [
      "$PN \\parallel AD$",
      "$MP \\parallel (ABCD)$",
      "$(MNP) \\parallel (ABCD)$",
      "$MN \\parallel BC$"
    ],
    "answer": 3,
    "explain": "<img src=\"data/11/1H4/im1H44/1H44_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\"> <br>• Xét khẳng định: $MP \\parallel (ABCD)$<br>Do $M$ và $P$ lần lượt là trung điểm của $SA$ và $SC$.<br>$\\Rightarrow MP$ là đường trung bình của tam giác $SAC$ và $MP \\parallel AC$.<br>Mà $AC \\subset (ABCD)$ nên $MP \\parallel (ABCD)$. (1)<br>• Xét khẳng định: $(MNP) \\parallel (ABCD)$<br>Do $M$ và $N$ lần lượt là trung điểm của $SA$ và $SB$.<br>$\\Rightarrow MN$ là đường trung bình của tam giác $SAB$ và $MN \\parallel AB$.<br>Mà $AB \\subset (ABCD)$ nên $MN \\parallel (ABCD)$. (2)<br>Từ (1) và (2) suy ra $(MNP) \\parallel (ABCD)$.<br>• Xét khẳng định: $PN \\parallel BC$<br>Do $P$ và $N$ lần lượt là trung điểm của $SC$ và $SB$.<br>$\\Rightarrow PN \\parallel BC$ mà $BC \\parallel AD$ (do $ABCD$ là hình bình hành) nên $PN \\parallel AD$. <br>Từ các chứng minh trên nên $MN \\parallel BC$ là sai."
  },
  {
    "id": "1H447TN1",
    "question": "Một kệ để đồ bằng gỗ có mâm tầng dưới $(ABCD)$ và mâm tầng trên $(EFGH)$ song song với nhau. Bác thợ mộc đo được $AE=117$ cm, $CG=135$ cm và muốn đóng thêm mâm tầng giữa $(IJKL)$ song song với hai mâm tầng trên, tầng dưới và $EI=39$ cm. Tính độ dài đoạn thẳng $KG$.<br><img src=\"data/11/1H4/im1H44/1H44_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$90$ cm",
      "$48$ cm",
      "$50$ cm",
      "$45$ cm"
    ],
    "answer": 3,
    "explain": "Áp dụng định lí Thalès trong không gian cho ba mặt phẳng song song $(ABCD)$, $(EFGH)$, $(IJKL)$ ta được<br>\\[ \\dfrac{EI}{EA}=\\dfrac{GK}{GC}~\\text{hay}~ GK=\\dfrac{EI}{EA}\\cdot GC=\\dfrac{39\\cdot 135}{117}=45.\\]"
  },
  {
    "id": "1H441TN1",
    "question": "Trong các mệnh đề sau, mệnh đề <strong>sai</strong> là",
    "options": [
      "Cho đường thẳng $a$, <strong>nếu</strong> $a \\subset mp(P)$ và $mp(P) \\parallel mp(Q)$ <strong>thì</strong> $a \\parallel mp(Q)$",
      "Hai mặt phẳng song song thì không có điểm chung",
      "Một mặt phẳng cắt hai mặt phẳng song song cho trước theo hai giao tuyến thì hai giao tuyến ấy song song với nhau",
      "Hai mặt phẳng song song với một mặt phẳng thứ $3$ thì song song với nhau"
    ],
    "answer": 3,
    "explain": "Hai mặt phẳng song song với một mặt phẳng thứ $3$ thì song song hoặc trùng nhau."
  },
  {
    "id": "1H441TN2",
    "question": "Hai mặt phẳng được gọi là song song với nhau nếu",
    "options": [
      "chúng có một đường thẳng chung",
      "chúng có đúng một điểm chung",
      "chúng có ít nhất một điểm chung",
      "chúng không có điểm chung"
    ],
    "answer": 3,
    "explain": "Hai mặt phẳng được gọi là song song với nhau nếu chúng không có điểm chung."
  },
  {
    "id": "1H441TN3",
    "question": "Trong không gian, khẳng định nào sau đây đúng?",
    "options": [
      "Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng phân biệt $a$, $ b$ cùng song song với mặt phẳng $(\\beta)$ thì mặt phẳng $(\\alpha)$ song song với mặt phẳng $(\\beta)$",
      "Nếu hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì hai mặt phẳng đó song song với nhau",
      "Nếu mặt phẳng $(\\alpha)$ song song với mặt phẳng $(\\beta)$ thì mỗi đường thẳng nằm trong $(\\alpha)$ đều song song với một đường thẳng bất kì nằm trong $(\\beta)$",
      "Qua một điểm ở ngoài mặt phẳng $(\\alpha)$ có duy nhất một đường thẳng song song với $(\\alpha)$"
    ],
    "answer": 1,
    "explain": "Theo lý thuyết ta có \" Nếu hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì hai mặt phẳng đó song song với nhau\"."
  }
];
