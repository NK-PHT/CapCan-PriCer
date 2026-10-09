window.dungSai3D11 = [
  {
    "id": "3D111DS1",
    "question": "Cho hai số phức $z_1=3-2i$ và $z_2=1+4i$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$z_1+z_2=4+2i$",
        "answer": true
      },
      {
        "text": "$z_1z_2=-5+10i$",
        "answer": false
      },
      {
        "text": "Phần ảo của số phức $\\dfrac{z_1}{z_2}$ bằng $-\\dfrac{14}{17}$",
        "answer": true
      },
      {
        "text": "$|z_1-\\bar z_2|=2\\sqrt{10}$",
        "answer": false
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  $z_1+z_2=(3+1)+(-2+4)i=4+2i$.<br>- <strong>Sai</strong>.<br>  $z_1z_2=(3-2i)(1+4i)=3+12i-2i-8i^2=3+10i+8=11+10i\\neq -5+10i$ (kết quả $-5+10i$ là do nhầm $i^2=1$).<br>- <strong>Đúng</strong>.<br>  $\\dfrac{z_1}{z_2}=\\dfrac{(3-2i)(1-4i)}{(1+4i)(1-4i)}=\\dfrac{3-12i-2i+8i^2}{1+16}=\\dfrac{-5-14i}{17}$, phần ảo bằng $-\\dfrac{14}{17}$.<br>- <strong>Sai</strong>.<br>  $\\bar z_2=1-4i$ nên $z_1-\\bar z_2=2+2i$ và $|z_1-\\bar z_2|=\\sqrt{2^2+2^2}=2\\sqrt2\\neq2\\sqrt{10}$ (giá trị $2\\sqrt{10}$ là $|z_1-z_2|=|2-6i|$).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D111DS2",
    "question": "Xét tính đúng sai của các mệnh đề sau (với $i$ là đơn vị ảo, $i^2=-1$):",
    "subQuestions": [
      {
        "text": "$i^{2026}=1$",
        "answer": false
      },
      {
        "text": "$i+i^2+i^3+\\dots+i^{2026}=-1+i$",
        "answer": true
      },
      {
        "text": "$(1+i)^8=16$",
        "answer": true
      },
      {
        "text": "$\\dfrac{1+i}{1-i}=-i$",
        "answer": false
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  $2026=4\\cdot506+2$ nên $i^{2026}=(i^4)^{506}\\cdot i^2=-1\\neq1$.<br>- <strong>Đúng</strong>.<br>  Vì $i^k+i^{k+1}+i^{k+2}+i^{k+3}=i^k(1+i-1-i)=0$, tổng của $2024$ số hạng đầu bằng $0$. Còn lại $i^{2025}+i^{2026}=i+i^2=-1+i$.<br>- <strong>Đúng</strong>.<br>  $(1+i)^2=1+2i+i^2=2i$ nên $(1+i)^8=(2i)^4=16i^4=16$.<br>- <strong>Sai</strong>.<br>  $\\dfrac{1+i}{1-i}=\\dfrac{(1+i)^2}{(1-i)(1+i)}=\\dfrac{2i}{2}=i\\neq -i$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D111DS3",
    "question": "Cho số phức $z$ thỏa mãn $z+2\\bar z=6-3i$. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$\\mathrm{Re}\\,z=2$",
        "answer": true
      },
      {
        "text": "$z\\cdot\\bar z=-5$",
        "answer": false
      },
      {
        "text": "$|z|=13$",
        "answer": false
      },
      {
        "text": "$z^2=-5+12i$",
        "answer": true
      }
    ],
    "explain": "- <strong>Đúng</strong>.<br>  Đặt $z=a+bi$ ($a,b\\in\\mathbb{R}$), ta có $a+bi+2(a-bi)=3a-bi=6-3i$, suy ra $a=2$, $b=3$. Vậy $z=2+3i$ và $\\mathrm{Re}\\,z=2$.<br>- <strong>Sai</strong>.<br>  $z\\cdot\\bar z=|z|^2=4+9=13\\neq-5$ (giá trị $-5$ là $a^2-b^2$, phần thực của $z^2$).<br>- <strong>Sai</strong>.<br>  $|z|=\\sqrt{2^2+3^2}=\\sqrt{13}\\neq13$ (nhầm $|z|^2=13$ với $|z|$).<br>- <strong>Đúng</strong>.<br>  $z^2=(2+3i)^2=4+12i+9i^2=-5+12i$.",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  },
  {
    "id": "3D111DS4",
    "question": "Cho $z_1,z_2$ là hai số phức tùy ý. Xét tính đúng sai của các mệnh đề sau:",
    "subQuestions": [
      {
        "text": "$|z_1+z_2|=|z_1|+|z_2|$",
        "answer": false
      },
      {
        "text": "$\\overline{z_1z_2}=\\bar z_1\\cdot\\bar z_2$",
        "answer": true
      },
      {
        "text": "$z_1-\\bar z_1$ luôn là một số thực",
        "answer": false
      },
      {
        "text": "$|z_1+z_2|^2+|z_1-z_2|^2=2\\left(|z_1|^2+|z_2|^2\\right)$",
        "answer": true
      }
    ],
    "explain": "- <strong>Sai</strong>.<br>  Chỉ có bất đẳng thức tam giác $|z_1+z_2|\\le|z_1|+|z_2|$. Phản ví dụ: $z_1=1$, $z_2=i$ thì $|z_1+z_2|=\\sqrt2$ còn $|z_1|+|z_2|=2$.<br>- <strong>Đúng</strong>.<br>  Với $z_1=a+bi$, $z_2=c+di$: $z_1z_2=(ac-bd)+(ad+bc)i$ nên $\\overline{z_1z_2}=(ac-bd)-(ad+bc)i=(a-bi)(c-di)=\\bar z_1\\cdot\\bar z_2$.<br>- <strong>Sai</strong>.<br>  Với $z_1=a+bi$ thì $z_1-\\bar z_1=2bi$ là số thuần ảo, không phải số thực khi $b\\neq0$; chẳng hạn $z_1=i$ cho $z_1-\\bar z_1=2i$.<br>- <strong>Đúng</strong>.<br>  $|z_1\\pm z_2|^2=(z_1\\pm z_2)(\\bar z_1\\pm\\bar z_2)=|z_1|^2+|z_2|^2\\pm(z_1\\bar z_2+\\bar z_1z_2)$. Cộng hai đẳng thức ta được $2\\left(|z_1|^2+|z_2|^2\\right)$ (đẳng thức hình bình hành).",
    "_wm": "PkFu6GNaZLw9sAMliZIVsiBzJhHa"
  }
];
