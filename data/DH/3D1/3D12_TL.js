window.traLoiNgan3D12 = [
  {
    "id": "3D121TL1",
    "question": "Tìm phần ảo của số phức $z=\\left(\\sqrt3-i\\right)^9$.",
    "answer": "512",
    "explain": "$\\sqrt3-i=2\\left(\\cos\\left(-\\dfrac{\\pi}{6}\\right)+i\\sin\\left(-\\dfrac{\\pi}{6}\\right)\\right)$.<br>Theo De Moivre: $z=2^9\\left(\\cos\\left(-\\dfrac{3\\pi}{2}\\right)+i\\sin\\left(-\\dfrac{3\\pi}{2}\\right)\\right)=512(0+i)=512i$.<br>Phần ảo bằng $512$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121TL2",
    "question": "Tìm phần ảo của số phức $z=\\dfrac{(1+i)^{10}}{\\left(1-i\\sqrt3\\right)^6}$.",
    "answer": "0,5",
    "explain": "$(1+i)^2=2i$ nên $(1+i)^{10}=(2i)^5=32i$.<br>$1-i\\sqrt3=2e^{-i\\frac{\\pi}{3}}$ nên $\\left(1-i\\sqrt3\\right)^6=64e^{-2\\pi i}=64$.<br>$z=\\dfrac{32i}{64}=\\dfrac12i$, phần ảo bằng $\\dfrac12=0,5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121TL3",
    "question": "Cho số phức $z=\\dfrac{-1+i}{\\sqrt3+i}$. Tìm số đo argument $\\arg z\\in(-180^\\circ;180^\\circ]$ của $z$, tính theo độ.",
    "answer": "105",
    "explain": "$-1+i=\\sqrt2\\left(\\cos135^\\circ+i\\sin135^\\circ\\right)$, $\\sqrt3+i=2\\left(\\cos30^\\circ+i\\sin30^\\circ\\right)$.<br>$z=\\dfrac{\\sqrt2}{2}\\left(\\cos(135^\\circ-30^\\circ)+i\\sin(135^\\circ-30^\\circ)\\right)=\\dfrac{\\sqrt2}{2}\\left(\\cos105^\\circ+i\\sin105^\\circ\\right)$.<br>Vì $105^\\circ\\in(-180^\\circ;180^\\circ]$ nên $\\arg z=105^\\circ$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121TL4",
    "question": "Tìm số nguyên dương $n$ nhỏ nhất sao cho số phức $\\left(\\dfrac{1+i}{\\sqrt3-i}\\right)^n$ là số thuần ảo (phần thực bằng $0$, phần ảo khác $0$).",
    "answer": "6",
    "explain": "$\\dfrac{1+i}{\\sqrt3-i}=\\dfrac{\\sqrt2e^{i\\frac{\\pi}{4}}}{2e^{-i\\frac{\\pi}{6}}}=\\dfrac{\\sqrt2}{2}e^{i\\frac{5\\pi}{12}}$, nên lũy thừa bậc $n$ có argument $\\dfrac{5n\\pi}{12}$.<br>Số thuần ảo $\\Leftrightarrow \\dfrac{5n\\pi}{12}=\\dfrac{\\pi}{2}+k\\pi \\Leftrightarrow 5n=6+12k$ ($k\\in\\mathbb{Z}$).<br>$k=0,1$ cho $n=\\dfrac65,\\dfrac{18}{5}$ (loại); $k=2$ cho $n=6$. Vậy $n=6$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121TL5",
    "question": "Gọi $w$ là căn bậc bốn của số phức $-8+8i\\sqrt3$ có phần thực và phần ảo đều dương. Tính $\\left(\\mathrm{Re}\\,w\\right)^2$.",
    "answer": "3",
    "explain": "$-8+8i\\sqrt3=16\\left(\\cos\\dfrac{2\\pi}{3}+i\\sin\\dfrac{2\\pi}{3}\\right)$.<br>Các căn bậc bốn: $w_k=2\\left(\\cos\\left(\\dfrac{\\pi}{6}+\\dfrac{k\\pi}{2}\\right)+i\\sin\\left(\\dfrac{\\pi}{6}+\\dfrac{k\\pi}{2}\\right)\\right)$, $k=0,1,2,3$, tức là $\\sqrt3+i$, $-1+i\\sqrt3$, $-\\sqrt3-i$, $1-i\\sqrt3$.<br>Chỉ $w=\\sqrt3+i$ có phần thực và phần ảo đều dương, nên $\\left(\\mathrm{Re}\\,w\\right)^2=3$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121TL6",
    "question": "Sử dụng tổng các căn bậc năm của đơn vị, tính giá trị của $S=\\cos\\dfrac{2\\pi}{5}+\\cos\\dfrac{4\\pi}{5}$.",
    "answer": "-0,5",
    "explain": "Đặt $\\varepsilon=e^{i\\frac{2\\pi}{5}}$. Vì $\\varepsilon^5=1$, $\\varepsilon\\neq1$ nên $1+\\varepsilon+\\varepsilon^2+\\varepsilon^3+\\varepsilon^4=\\dfrac{\\varepsilon^5-1}{\\varepsilon-1}=0$.<br>Lấy phần thực: $1+\\cos\\dfrac{2\\pi}{5}+\\cos\\dfrac{4\\pi}{5}+\\cos\\dfrac{6\\pi}{5}+\\cos\\dfrac{8\\pi}{5}=0$.<br>Do $\\cos\\dfrac{6\\pi}{5}=\\cos\\dfrac{4\\pi}{5}$, $\\cos\\dfrac{8\\pi}{5}=\\cos\\dfrac{2\\pi}{5}$ nên $1+2S=0$, suy ra $S=-0,5$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
