// =========================================================================
// TAB "LÝ THUYẾT" - tóm tắt kiến thức theo từng mục (§) của danh mục chương.
// Dữ liệu: data/LT/LT_lop10|11|12.js  ->  window.LY_THUYET["2D11"] = { ten, html }
// Dùng lại các hàm của app.js: DanhMucChuong, phanNhomDanhMuc(lop), chonCapDo(lv).
// =========================================================================
(function () {
    'use strict';
    const LOP_LT = [['lop10', 'Lớp 10'], ['lop11', 'Lớp 11'], ['lop12', 'Lớp 12']];
    const $ = id => document.getElementById(id);
    if (!$('lt-panel') || typeof phanNhomDanhMuc !== 'function') return; // bank.html cũ không có tab này

    const LOAI_BO = ['1C31']; // mục chưa có lý thuyết (vẽ kỹ thuật) - ẩn khỏi danh sách
    const st = { lop: 'lop12', nhom: 0, ma: null };
    const daNap = {};   // lop -> Promise
    window.LY_THUYET = window.LY_THUYET || {};

    function nhomCuaLop(lop) {
        return phanNhomDanhMuc(lop)
            .filter(n => n.loai === 'chuong' || n.loai === 'cd')
            .map(n => Object.assign({}, n, { muc: n.muc.filter(m => !m.tongOn && !LOAI_BO.includes(m.value)).map(m => Object.assign({}, m, { nhan: m.nhan.replace(/^C\d+ ➔ /, '') })) }))
            .filter(n => n.muc.length);
    }
    function tatCaMuc(lop) { return nhomCuaLop(lop).flatMap(n => n.muc); }

    function napLop(lop) {
        if (daNap[lop]) return daNap[lop];
        const ten = { lop10: 'LT_lop10.js', lop11: 'LT_lop11.js', lop12: 'LT_lop12.js' }[lop];
        daNap[lop] = new Promise(resolve => {
            const s = document.createElement('script');
            s.src = 'data/LT/' + ten + '?v=20261011-1';
            s.onload = () => resolve(true);
            s.onerror = () => { delete daNap[lop]; resolve(false); };
            document.body.appendChild(s);
        });
        return daNap[lop];
    }

    function veChip() {
        $('lt-chips-lop').innerHTML = LOP_LT.map(([v, t]) =>
            `<button type="button" class="chip${st.lop === v ? ' active' : ''}" data-v="${v}" aria-pressed="${st.lop === v}">${t}</button>`).join('') +
            '<button type="button" class="chip soon" disabled title="Lý thuyết Toán Đại học đang được cập nhật">Đại học</button>';
        const ns = nhomCuaLop(st.lop);
        $('lt-chips-nhom').innerHTML = ns.map((n, i) =>
            `<button type="button" class="chip${i === st.nhom ? ' active' : ''}" data-v="${i}" aria-pressed="${i === st.nhom}" title="${n.ten}">${n.ngan || n.ten}</button>`).join('');
        const n = ns[st.nhom];
        $('lt-list').innerHTML = n ? n.muc.map(m => {
            const on = m.value === st.ma;
            return `<label class="bai-item${on ? ' is-checked' : ''}"><input type="radio" name="lt-chon" value="${m.value}"${on ? ' checked' : ''}><span>${m.nhan}</span></label>`;
        }).join('') : '';
    }

    function typeset(el, lan) {
        lan = lan || 0;
        if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
            MathJax.typesetPromise([el]).catch(() => {});
        } else if (lan < 40) {
            setTimeout(() => typeset(el, lan + 1), 250);
        }
    }

    async function veNoiDung() {
        const box = $('lt-content');
        const ds = tatCaMuc(st.lop);
        const idx = ds.findIndex(m => m.value === st.ma);
        if (idx < 0) { box.innerHTML = ''; return; }
        const nhomN = nhomCuaLop(st.lop)[st.nhom];
        box.innerHTML = '<div class="lt-empty"><i class="fa-solid fa-spinner fa-spin"></i>Đang tải lý thuyết...</div>';
        const ok = await napLop(st.lop);
        if (ds[idx].value !== st.ma) return; // người dùng đã chọn mục khác trong lúc chờ
        const bai = (window.LY_THUYET || {})[st.ma];
        const lopTen = (LOP_LT.find(x => x[0] === st.lop) || [0, ''])[1];
        const dau = `<div class="lt-eyebrow">${lopTen} · ${nhomN ? nhomN.ten : ''}</div>`;
        if (!bai) {
            box.innerHTML = dau + `<h2 class="lt-title">${ds[idx].nhan}</h2>` +
                `<div class="lt-empty"><i class="fa-solid fa-book-open"></i>${ok ? 'Phần lý thuyết này đang được cập nhật, bạn quay lại sau nhé.' : 'Không tải được nội dung. Bạn kiểm tra kết nối mạng rồi thử lại nhé.'}</div>`;
            return;
        }
        const truoc = idx > 0 ? ds[idx - 1] : null;
        const sau = idx < ds.length - 1 ? ds[idx + 1] : null;
        box.innerHTML = dau + `<h2 class="lt-title">${bai.ten}</h2><div class="lt-body" id="lt-body">${bai.html}</div>` +
            `<div class="lt-actions"><div class="lt-nav">` +
            `<button type="button" id="lt-prev"${truoc ? ` data-ma="${truoc.value}" title="${truoc.nhan}"` : ' disabled'}><i class="fa-solid fa-arrow-left me-1"></i>Mục trước</button>` +
            `<button type="button" id="lt-next"${sau ? ` data-ma="${sau.value}" title="${sau.nhan}"` : ' disabled'}>Mục sau<i class="fa-solid fa-arrow-right ms-1"></i></button></div>` +
            `<button type="button" class="lt-practice" id="lt-practice"><i class="fa-solid fa-pen-to-square me-1"></i>Luyện tập mục này</button></div>`;
        typeset($('lt-body'));
    }

    function chonMuc(ma, cuon) {
        st.ma = ma;
        const ns = nhomCuaLop(st.lop);
        const i = ns.findIndex(n => n.muc.some(m => m.value === ma));
        if (i >= 0) st.nhom = i;
        veChip();
        veNoiDung();
        try { history.replaceState(null, '', '#ly-thuyet/' + ma); } catch (e) { /* bỏ qua */ }
        if (cuon) {
            const r = $('lt-panel').getBoundingClientRect();
            if (r.top > 160) $('lt-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
            else if (r.top < 0) window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function chonLop(lop) {
        st.lop = lop;
        st.nhom = 0;
        const ns = nhomCuaLop(lop);
        st.ma = ns.length ? ns[0].muc[0].value : null;
        veChip();
        veNoiDung();
    }

    // ---- Sự kiện ----
    $('lt-chips-lop').addEventListener('click', e => {
        const b = e.target.closest('.chip');
        if (b && !b.disabled && b.dataset.v !== st.lop) chonLop(b.dataset.v);
    });
    $('lt-chips-nhom').addEventListener('click', e => {
        const b = e.target.closest('.chip');
        if (!b) return;
        const n = nhomCuaLop(st.lop)[parseInt(b.dataset.v, 10)];
        if (n) chonMuc(n.muc[0].value, false);
    });
    $('lt-list').addEventListener('change', e => {
        if (e.target && e.target.name === 'lt-chon') chonMuc(e.target.value, true);
    });
    $('lt-content').addEventListener('click', e => {
        const nav = e.target.closest('#lt-prev, #lt-next');
        if (nav && nav.dataset.ma) { chonMuc(nav.dataset.ma, true); return; }
        if (e.target.closest('#lt-practice')) luyenTapMucNay();
    });

    /** Chuyển sang tab Toán THPT với đúng lớp/mục đang đọc (không tự phát đề). */
    function luyenTapMucNay() {
        const ma = st.ma, lop = st.lop;
        chonCapDo('thpt');
        selectLop.value = lop;
        selectLop.dispatchEvent(new Event('change'));
        const i = nhomHienTai.findIndex(n => n.muc.some(m => m.value === ma));
        if (i >= 0) {
            selectNhom.value = String(i);
            veDanhSachBai(i, ma);
            veChipLuaChon();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /** Được gọi từ hienThiTheoCapDo() mỗi khi mở tab Lý thuyết. */
    window.hienThiLyThuyet = function () {
        if (!st.ma) {
            // Ưu tiên liên kết #ly-thuyet/<mã>, rồi tới lớp đang chọn ở tab THPT
            const m = (location.hash || '').match(/^#ly-thuyet\/([0-2][A-Z]\d{2})$/);
            let lopMo = (typeof lopThptCuoi === 'string' && lopThptCuoi) ? lopThptCuoi : 'lop12';
            if (m) lopMo = ['lop10', 'lop11', 'lop12'][parseInt(m[1][0], 10)] || lopMo;
            chonLop(lopMo);
            if (m && tatCaMuc(st.lop).some(x => x.value === m[1])) chonMuc(m[1], false);
        } else {
            veChip();
            veNoiDung();
        }
    };

    // Mở thẳng tab nếu địa chỉ có #ly-thuyet/<mã>
    if (/^#ly-thuyet\/[0-2][A-Z]\d{2}$/.test(location.hash || '')) chonCapDo('lt');
})();
