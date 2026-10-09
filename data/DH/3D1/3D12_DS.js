window.dungSai3D12 = [
  {
    "id": "3D121DS1",
    "question": "Cho số phức $z=-1+i\\sqrt3$. Quy ước $\\arg z\\in(-\\pi;\\pi]$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\arg z=-\\dfrac{\\pi}{3}$",
        "answer": false
      },
      {
        "text": "$|z|=2$",
        "answer": true
      },
      {
        "text": "$z=2e^{i\\frac{2\\pi}{3}}$",
        "answer": true
      },
      {
        "text": "$z^3=-8$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Với $|z|=2$: $\\cos\\varphi=-\\dfrac12$, $\\sin\\varphi=\\dfrac{\\sqrt3}{2}$ nên điểm biểu diễn nằm ở góc phần tư thứ hai và $\\arg z=\\dfrac{2\\pi}{3}$. Giá trị $-\\dfrac{\\pi}{3}$ có được do lấy nhầm $\\arctan\\dfrac ba$ mà không xét dấu của $a$.<br>- <strong>Đúng</strong>.<br>  $|z|=\\sqrt{(-1)^2+(\\sqrt3)^2}=2$.<br>- <strong>Đúng</strong>.<br>  $z=2\\left(\\cos\\dfrac{2\\pi}{3}+i\\sin\\dfrac{2\\pi}{3}\\right)=2e^{i\\frac{2\\pi}{3}}$.<br>- <strong>Sai</strong>.<br>  Theo De Moivre: $z^3=2^3\\left(\\cos2\\pi+i\\sin2\\pi\\right)=8\\neq-8$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121DS2",
    "question": "Cho hai số phức $z_1=1+i$ và $z_2=\\sqrt3-i$. Quy ước argument lấy trong $(-\\pi;\\pi]$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$|z_1z_2|=2\\sqrt2$",
        "answer": true
      },
      {
        "text": "$\\arg(z_1z_2)=\\dfrac{5\\pi}{12}$",
        "answer": false
      },
      {
        "text": "$\\arg\\dfrac{z_1}{z_2}=\\dfrac{5\\pi}{12}$",
        "answer": true
      },
      {
        "text": "$(z_1z_2)^6=512i$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $z_1=\\sqrt2e^{i\\frac{\\pi}{4}}$, $z_2=2e^{-i\\frac{\\pi}{6}}$ nên $|z_1z_2|=\\sqrt2\\cdot2=2\\sqrt2$.<br>- <strong>Sai</strong>.<br>  $\\arg(z_1z_2)=\\dfrac{\\pi}{4}+\\left(-\\dfrac{\\pi}{6}\\right)=\\dfrac{\\pi}{12}\\neq\\dfrac{5\\pi}{12}$ (nhầm $\\arg z_2=\\dfrac{\\pi}{6}$).<br>- <strong>Đúng</strong>.<br>  $\\arg\\dfrac{z_1}{z_2}=\\dfrac{\\pi}{4}-\\left(-\\dfrac{\\pi}{6}\\right)=\\dfrac{5\\pi}{12}\\in(-\\pi;\\pi]$.<br>- <strong>Đúng</strong>.<br>  $z_1z_2=2\\sqrt2e^{i\\frac{\\pi}{12}}$ nên $(z_1z_2)^6=(2\\sqrt2)^6e^{i\\frac{\\pi}{2}}=512i$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121DS3",
    "question": "Xét phương trình $w^4=-16$ trên tập $\\mathbb{C}$ (tìm các căn bậc bốn của $-16$). Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "Phương trình có đúng $4$ nghiệm phân biệt",
        "answer": true
      },
      {
        "text": "Mọi nghiệm của phương trình đều có môđun bằng $2$",
        "answer": true
      },
      {
        "text": "$w=1+i$ là một nghiệm của phương trình",
        "answer": false
      },
      {
        "text": "Các điểm biểu diễn nghiệm là bốn đỉnh của một hình vuông có cạnh bằng $2$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $-16=16(\\cos\\pi+i\\sin\\pi)$ nên $w_k=2\\left(\\cos\\dfrac{\\pi+2k\\pi}{4}+i\\sin\\dfrac{\\pi+2k\\pi}{4}\\right)$, $k=0,1,2,3$: bốn nghiệm phân biệt $\\pm\\sqrt2\\pm i\\sqrt2$.<br>- <strong>Đúng</strong>.<br>  $|w|^4=|-16|=16$ nên $|w|=2$ với mọi nghiệm.<br>- <strong>Sai</strong>.<br>  $(1+i)^4=(2i)^2=-4\\neq-16$. Số $1+i$ là căn bậc bốn của $-4$, không phải của $-16$.<br>- <strong>Sai</strong>.<br>  Bốn điểm nằm trên đường tròn tâm $O$ bán kính $2$, cách đều nhau góc $\\dfrac{\\pi}{2}$, tạo thành hình vuông có cạnh $|\\sqrt2+i\\sqrt2-(-\\sqrt2+i\\sqrt2)|=2\\sqrt2\\neq2$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D121DS4",
    "question": "Cho $\\varphi\\in\\mathbb{R}$ và $z=\\cos\\varphi+i\\sin\\varphi=e^{i\\varphi}$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\bar z=\\dfrac1z$",
        "answer": true
      },
      {
        "text": "$z^n-\\bar z^{\\,n}=2\\sin n\\varphi$ với mọi số nguyên dương $n$",
        "answer": false
      },
      {
        "text": "$\\cos3\\varphi=4\\cos^3\\varphi-3\\cos\\varphi$",
        "answer": true
      },
      {
        "text": "$\\sin3\\varphi=4\\sin^3\\varphi-3\\sin\\varphi$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $z\\bar z=|z|^2=\\cos^2\\varphi+\\sin^2\\varphi=1$ nên $\\bar z=\\dfrac1z$.<br>- <strong>Sai</strong>.<br>  $z^n=\\cos n\\varphi+i\\sin n\\varphi$, $\\bar z^{\\,n}=\\cos n\\varphi-i\\sin n\\varphi$ nên $z^n-\\bar z^{\\,n}=2i\\sin n\\varphi$ (thiếu thừa số $i$). Chẳng hạn $n=1$, $\\varphi=\\dfrac{\\pi}{2}$: $z-\\bar z=2i\\neq2$.<br>- <strong>Đúng</strong>.<br>  Theo De Moivre: $\\cos3\\varphi+i\\sin3\\varphi=(\\cos\\varphi+i\\sin\\varphi)^3=\\cos^3\\varphi-3\\cos\\varphi\\sin^2\\varphi+i\\left(3\\cos^2\\varphi\\sin\\varphi-\\sin^3\\varphi\\right)$. So sánh phần thực: $\\cos3\\varphi=\\cos^3\\varphi-3\\cos\\varphi(1-\\cos^2\\varphi)=4\\cos^3\\varphi-3\\cos\\varphi$.<br>- <strong>Sai</strong>.<br>  So sánh phần ảo ở khai triển trên: $\\sin3\\varphi=3(1-\\sin^2\\varphi)\\sin\\varphi-\\sin^3\\varphi=3\\sin\\varphi-4\\sin^3\\varphi$, ngược dấu với mệnh đề (ví dụ $\\varphi=\\dfrac{\\pi}{2}$: vế trái bằng $-1$, vế phải bằng $1$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
