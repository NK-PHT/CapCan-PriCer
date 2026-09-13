// =========================================================================
// KHỐI DỮ LIỆU: 1D32 - Đúng sai
// Nguồn: Đề luyện tập tổng hợp (thư mục DeLuyenTap/11, DLTS5.tex), giữ nguyên
// nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D32 = [
  {
    "id": "1D328DS1",
    "question": "Chi phí (đơn vị: nghìn đồng) để sản xuất $x$ sản phẩm của một công ty được xác định bởi hàm số ${C(x)=600+500x}$.",
    "subQuestions": [
      {
        "text": "Chi phí để sản xuất $1$ sản phẩm là $1\\,100$ đồng",
        "answer": false
      },
      {
        "text": "Chi phí để sản xuất $10$ sản phẩm là $560\\,000$ đồng",
        "answer": false
      },
      {
        "text": "Công ty sản xuất $20$ sản phẩm thì chi phí trung bình của mỗi sản phẩm là $530\\,000$ đồng",
        "answer": true
      },
      {
        "text": "Nếu công ty sản xuất được số sản phẩm tăng lên rất nhiều thì chi phí trung bình của mỗi sản phẩm giảm dần về mức $500\\,000$ đồng",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>Chi phí để sản xuất $1$ sản phẩm là $C(1)=600+500\\cdot 1=1\\,100$ nghìn đồng.<br>- <strong>Sai</strong>.<br>Chi phí để sản xuất $10$ sản phẩm là $C(10)=600+500\\cdot 10=5\\,600$ nghìn đồng.<br>- <strong>Đúng</strong>.<br>Công ty sản xuất $20$ sản phẩm thì chi phí trung bình của mỗi sản phẩm là $$C(20)=\\dfrac{600+500\\cdot 20}{20}=530 \\text{ nghìn đồng}.$$<br>- <strong>Đúng</strong>.<br>Ta có $$\\lim\\limits_{x\\to +\\infty}\\dfrac{600+500x}{x}=500.$$ Vậy nếu công ty sản xuất được số sản phẩm tăng lên rất nhiều thì chi phí trung bình của mỗi sản phẩm giảm dần về mức $500\\,000$ đồng"
  }
];
