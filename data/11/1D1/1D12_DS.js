// =========================================================================
// KHỐI DỮ LIỆU: 1D12 - Đúng sai
// Nguồn: DeLuyenTap/11/DLTS6.tex (đề luyện tập lớp 11, GV cung cấp)
// =========================================================================
window.dungSai1D12 = [
  {
    "id": "1D122DS1",
    "question": "Cho biết $\\sin \\alpha = \\dfrac{3}{5}$, $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$.",
    "subQuestions": [
      {
        "text": "$\\cos\\alpha &gt; 0$",
        "answer": false
      },
      {
        "text": "$\\cos\\alpha = -\\dfrac{4}{5}$",
        "answer": true
      },
      {
        "text": "$\\tan\\alpha = \\dfrac{3}{4}$",
        "answer": false
      },
      {
        "text": "$\\sin2\\alpha = -\\dfrac{24}{25}$",
        "answer": true
      }
    ],
    "explain": "<br>- Vì $\\alpha$ thuộc góc phần tư thứ II nên $\\cos\\alpha &lt; 0$.<br>- Ta có $\\cos\\alpha = -\\sqrt{1-\\sin^2\\alpha} = -\\sqrt{1-\\left(\\dfrac{3}{4}\\right)^2} = -\\dfrac{4}{5}$.<br>- Ta có $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = -\\dfrac{3}{4}$.<br>- Ta có $\\sin2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2\\cdot\\dfrac{3}{5}\\cdot\\left(-\\dfrac{4}{5}\\right) = -\\dfrac{24}{25}$."
  }
];
