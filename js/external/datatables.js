/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs5/dt-2.0.0/r-3.0.0/sp-2.3.0/sl-2.0.0
 *
 * Included libraries:
 *  DataTables 2.0.0, Responsive 3.0.0, SearchPanes 2.3.0, Select 2.0.0
 */

/*! DataTables 2.0.0
 * © SpryMedia Ltd - datatables.net/license
 */
! function(n) { "use strict"; var a; "function" == typeof define && define.amd ? define(["jquery"], function(e) { return n(e, window, document) }) : "object" == typeof exports ? (a = require("jquery"), "undefined" == typeof window ? module.exports = function(e, t) { return e = e || window, t = t || a(e), n(t, e, e.document) } : module.exports = n(a, window, window.document)) : window.DataTable = n(jQuery, window, document) }(function(B, q, _) { "use strict";

    function g(e) { var t = parseInt(e, 10); return !isNaN(t) && isFinite(e) ? t : null }

    function o(e, t, n) { var a = typeof e,
            r = "string" == a; return "number" == a || "bigint" == a || !!y(e) || (t && r && (e = P(e, t)), n && r && (e = e.replace(j, "")), !isNaN(parseFloat(e)) && isFinite(e)) }

    function l(e, t, n) { var a; return !!y(e) || ("string" != typeof e || !e.match(/<(input|select)/i)) && (y(a = e) || "string" == typeof a) && !!o(I(e), t, n) || null }

    function v(e, t, n, a) { var r = [],
            o = 0,
            i = t.length; if (void 0 !== a)
            for (; o < i; o++) e[t[o]][n] && r.push(e[t[o]][n][a]);
        else
            for (; o < i; o++) e[t[o]] && r.push(e[t[o]][n]); return r }

    function f(e, t) { var n, a = [];
        void 0 === t ? (t = 0, n = e) : (n = t, t = e); for (var r = t; r < n; r++) a.push(r); return a }

    function b(e) { for (var t = [], n = 0, a = e.length; n < a; n++) e[n] && t.push(e[n]); return t } var C, U, t, e, $ = function(e, H) { var W, X, V; return $.factory(e, H) ? $ : this instanceof $ ? B(e).DataTable(H) : (X = void 0 === (H = e), V = (W = this).length, X && (H = {}), this.api = function() { return new U(this) }, this.each(function() { var n = 1 < V ? Ge({}, H, !0) : H,
                    a = 0,
                    e = this.getAttribute("id"),
                    r = !1,
                    t = $.defaults,
                    o = B(this); if ("table" != this.nodeName.toLowerCase()) Z(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else { B(this).trigger("options.dt", n), ne(t), ae(t.column), z(t, t, !0), z(t.column, t.column, !0), z(t, B.extend(n, o.data()), !0); for (var i = $.settings, a = 0, l = i.length; a < l; a++) { var s = i[a]; if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) { var k = (void 0 !== n.bRetrieve ? n : t).bRetrieve,
                                E = (void 0 !== n.bDestroy ? n : t).bDestroy; if (X || k) return s.oInstance; if (E) { new $.Api(s).destroy(); break } return void Z(s, 0, "Cannot reinitialise DataTable", 3) } if (s.sTableId == this.id) { i.splice(a, 1); break } }
                    null !== e && "" !== e || (e = "DataTables_Table_" + $.ext._unique++, this.id = e); var u = B.extend(!0, {}, $.models.oSettings, { sDestroyWidth: o[0].style.width, sInstance: e, sTableId: e, colgroup: B("<colgroup>").prependTo(this), fastData: function(e, t, n) { return G(u, e, t, n) } }),
                        e = (u.nTable = this, u.oInit = n, i.push(u), u.api = new U(u), u.oInstance = 1 === W.length ? W : o.dataTable(), ne(n), n.aLengthMenu && !n.iDisplayLength && (n.iDisplayLength = Array.isArray(n.aLengthMenu[0]) ? n.aLengthMenu[0][0] : B.isPlainObject(n.aLengthMenu[0]) ? n.aLengthMenu[0].value : n.aLengthMenu[0]), n = Ge(B.extend(!0, {}, t), n), Q(u.oFeatures, n, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), Q(u, n, ["ajax", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "iStateDuration", "bSortCellsTop", "iTabIndex", "sDom", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", "caption", "layout", ["iCookieDuration", "iStateDuration"],
                            ["oSearch", "oPreviousSearch"],
                            ["aoSearchCols", "aoPreSearchCols"],
                            ["iDisplayLength", "_iDisplayLength"]
                        ]), Q(u.oScroll, n, [
                            ["sScrollX", "sX"],
                            ["sScrollXInner", "sXInner"],
                            ["sScrollY", "sY"],
                            ["bScrollCollapse", "bCollapse"]
                        ]), Q(u.oLanguage, n, "fnInfoCallback"), K(u, "aoDrawCallback", n.fnDrawCallback), K(u, "aoStateSaveParams", n.fnStateSaveParams), K(u, "aoStateLoadParams", n.fnStateLoadParams), K(u, "aoStateLoaded", n.fnStateLoaded), K(u, "aoRowCallback", n.fnRowCallback), K(u, "aoRowCreatedCallback", n.fnCreatedRow), K(u, "aoHeaderCallback", n.fnHeaderCallback), K(u, "aoFooterCallback", n.fnFooterCallback), K(u, "aoInitComplete", n.fnInitComplete), K(u, "aoPreDrawCallback", n.fnPreDrawCallback), u.rowIdFn = J(n.rowId), u),
                        c = ($.__browser || (P = {}, $.__browser = P, j = B("<div/>").css({ position: "fixed", top: 0, left: -1 * q.pageXOffset, height: 1, width: 1, overflow: "hidden" }).append(B("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(B("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"), p = j.children(), O = p.children(), P.barWidth = p[0].offsetWidth - p[0].clientWidth, P.bScrollbarLeft = 1 !== Math.round(O.offset().left), j.remove()), B.extend(e.oBrowser, $.__browser), e.oScroll.iBarWidth = $.__browser.barWidth, u.oClasses),
                        d = (B.extend(c, $.ext.classes, n.oClasses), o.addClass(c.table), u.oFeatures.bPaginate || (n.iDisplayStart = 0), void 0 === u.iInitDisplayStart && (u.iInitDisplayStart = n.iDisplayStart, u._iDisplayStart = n.iDisplayStart), u.oLanguage),
                        f = (B.extend(!0, d, n.oLanguage), d.sUrl ? (B.ajax({ dataType: "json", url: d.sUrl, success: function(e) { z(t.oLanguage, e), B.extend(!0, d, e, u.oInit.oLanguage), ee(u, null, "i18n", [u]), Oe(u) }, error: function() { Z(u, 0, "i18n file loading error", 21), Oe(u) } }), r = !0) : ee(u, null, "i18n", [u]), []),
                        h = this.getElementsByTagName("thead"),
                        p = Ce(u, h[0]); if (n.aoColumns) f = n.aoColumns;
                    else if (p.length)
                        for (l = p[a = 0].length; a < l; a++) f.push(null); for (a = 0, l = f.length; a < l; a++) re(u); var g, m, v, b, y, D, x, S = u,
                        T = n.aoColumnDefs,
                        w = f,
                        M = p,
                        _ = function(e, t) { oe(u, e, t) },
                        C = S.aoColumns; if (w)
                        for (g = 0, m = w.length; g < m; g++) w[g] && w[g].name && (C[g].sName = w[g].name); if (T)
                        for (g = T.length - 1; 0 <= g; g--) { var I = void 0 !== (x = T[g]).target ? x.target : void 0 !== x.targets ? x.targets : x.aTargets; for (Array.isArray(I) || (I = [I]), v = 0, b = I.length; v < b; v++) { var A = I[v]; if ("number" == typeof A && 0 <= A) { for (; C.length <= A;) re(S);
                                    _(A, x) } else if ("number" == typeof A && A < 0) _(C.length + A, x);
                                else if ("string" == typeof A)
                                    for (y = 0, D = C.length; y < D; y++) - 1 !== A.indexOf(":name") ? C[y].sName === A.replace(":name", "") && _(y, x) : M.forEach(function(e) { e = B(e[y].cell); "_all" !== (A = A.match(/^[a-z][\w-]*$/i) ? "." + A : A) && !e.is(A) || _(y, x) }) } }
                    if (w)
                        for (g = 0, m = w.length; g < m; g++) _(g, w[g]); var F, L, N, j, P = o.children("tbody").find("tr").eq(0),
                        R = (P.length && (F = function(e, t) { return null !== e.getAttribute("data-" + t) ? t : null }, B(P[0]).children("th, td").each(function(e, t) { var n, a = u.aoColumns[e];
                            a || Z(u, 0, "Incorrect column count", 18), a.mData === e && (n = F(t, "sort") || F(t, "order"), t = F(t, "filter") || F(t, "search"), null === n && null === t || (a.mData = { _: e + ".display", sort: null !== n ? e + ".@data-" + n : void 0, type: null !== n ? e + ".@data-" + n : void 0, filter: null !== t ? e + ".@data-" + t : void 0 }, a._isArrayHost = !0, oe(u, e))) })), u.oFeatures),
                        O = function() { if (void 0 === n.aaSorting) { var e = u.aaSorting; for (a = 0, l = e.length; a < l; a++) e[a][1] = u.aoColumns[a].asSorting[0] }
                            $e(u), K(u, "aoDrawCallback", function() {
                                (u.bSorted || "ssp" === te(u) || R.bDeferRender) && $e(u) }); var t = o.children("caption"),
                                t = (u.caption && (t = 0 === t.length ? B("<caption/>").appendTo(o) : t).html(u.caption), t.length && (t[0]._captionSide = t.css("caption-side"), u.captionNode = t[0]), 0 === h.length && (h = B("<thead/>").appendTo(o)), u.nTHead = h[0], B("tr", h).addClass(c.thead.row), o.children("tbody")),
                                t = (0 === t.length && (t = B("<tbody/>").insertAfter(h)), u.nTBody = t[0], o.children("tfoot")); if (0 === t.length && (t = B("<tfoot/>").appendTo(o)), u.nTFoot = t[0], B("tr", t).addClass(c.tfoot.row), n.aaData)
                                for (a = 0; a < n.aaData.length; a++) Y(u, n.aaData[a]);
                            else "dom" == te(u) && se(u, B(u.nTBody).children("tr"));
                            u.aiDisplay = u.aiDisplayMaster.slice(), !(u.bInitialised = !0) === r && Oe(u) };
                    K(u, "aoDrawCallback", ze), n.bStateSave ? (R.bStateSave = !0, N = O, (L = u).oFeatures.bStateSave ? void 0 !== (j = L.fnStateLoadCallback.call(L.oInstance, L, function(e) { Ye(L, e, N) })) && Ye(L, j, N) : N()) : O() } }), W = null, this) },
        s = ($.ext = C = { buttons: {}, classes: {}, builder: "bs5/dt-2.0.0/r-3.0.0/sp-2.3.0/sl-2.0.0", errMode: "alert", feature: [], features: {}, search: [], selector: { cell: [], column: [], row: [] }, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { className: {}, detect: [], render: {}, search: {}, order: {} }, _unique: 0, fnVersionCheck: $.fnVersionCheck, iApiIndex: 0, sVersion: $.version }, B.extend(C, { afnFiltering: C.search, aTypes: C.type.detect, ofnSearch: C.type.search, oSort: C.type.order, afnSortData: C.order, aoFeatures: C.feature, oStdClasses: C.classes, oPagination: C.pager }), B.extend($.ext.classes, { container: "dt-container", empty: { row: "dt-empty" }, info: { container: "dt-info" }, length: { container: "dt-length", select: "dt-input" }, order: { canAsc: "dt-orderable-asc", canDesc: "dt-orderable-desc", isAsc: "dt-ordering-asc", isDesc: "dt-ordering-desc", none: "dt-orderable-none", position: "sorting_" }, processing: { container: "dt-processing" }, scrolling: { body: "dt-scroll-body", container: "dt-scroll", footer: { self: "dt-scroll-foot", inner: "dt-scroll-footInner" }, header: { self: "dt-scroll-head", inner: "dt-scroll-headInner" } }, search: { container: "dt-search", input: "dt-input" }, table: "dataTable", tbody: { cell: "", row: "" }, thead: { cell: "", row: "" }, tfoot: { cell: "", row: "" }, paging: { active: "current", button: "dt-paging-button", container: "dt-paging", disabled: "disabled" } }), {}),
        d = /[\r\n\u2028]/g,
        F = /<.*?>/g,
        L = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/,
        N = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
        j = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        y = function(e) { return !e || !0 === e || "-" === e },
        P = function(e, t) { return s[t] || (s[t] = new RegExp(je(t), "g")), "string" == typeof e && "." !== t ? e.replace(/\./g, "").replace(s[t], ".") : e },
        h = function(e, t, n) { var a = [],
                r = 0,
                o = e.length; if (void 0 !== n)
                for (; r < o; r++) e[r] && e[r][t] && a.push(e[r][t][n]);
            else
                for (; r < o; r++) e[r] && a.push(e[r][t]); return a },
        I = function(e) { return e.replace(F, "").replace(/<script/i, "") },
        u = function(e) { return "string" == typeof(e = Array.isArray(e) ? e.join(",") : e) ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e },
        R = function(e, t) { var n; return "string" != typeof e ? e : (n = e.normalize("NFD")).length !== e.length ? (!0 === t ? e + " " : "") + n.replace(/[\u0300-\u036f]/g, "") : n },
        x = function(e) { if (Array.from && Set) return Array.from(new Set(e)); if (function(e) { if (!(e.length < 2))
                        for (var t = e.slice().sort(), n = t[0], a = 1, r = t.length; a < r; a++) { if (t[a] === n) return !1;
                            n = t[a] }
                    return !0 }(e)) return e.slice(); var t, n, a, r = [],
                o = e.length,
                i = 0;
            e: for (n = 0; n < o; n++) { for (t = e[n], a = 0; a < i; a++)
                    if (r[a] === t) continue e;
                r.push(t), i++ }
            return r },
        O = function(e, t) { if (Array.isArray(t))
                for (var n = 0; n < t.length; n++) O(e, t[n]);
            else e.push(t); return e };

    function D(t, e) { e && e.split(" ").forEach(function(e) { e && t.classList.add(e) }) }

    function k(t) { var n, a, r = {};
        B.each(t, function(e) {
            (n = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (a = e.replace(n[0], n[2].toLowerCase()), r[a] = e, "o" === n[1]) && k(t[e]) }), t._hungarianMap = r }

    function z(t, n, a) { var r;
        t._hungarianMap || k(t), B.each(n, function(e) { void 0 === (r = t._hungarianMap[e]) || !a && void 0 !== n[r] || ("o" === r.charAt(0) ? (n[r] || (n[r] = {}), B.extend(!0, n[r], n[e]), z(t[r], n[r], a)) : n[r] = n[e]) }) }
    $.util = { diacritics: function(e, t) { if ("function" != typeof e) return R(e, t);
            R = e }, debounce: function(n, a) { var r; return function() { var e = this,
                    t = arguments;
                clearTimeout(r), r = setTimeout(function() { n.apply(e, t) }, a || 250) } }, throttle: function(a, e) { var r, o, i = void 0 !== e ? e : 200; return function() { var e = this,
                    t = +new Date,
                    n = arguments;
                r && t < r + i ? (clearTimeout(o), o = setTimeout(function() { r = void 0, a.apply(e, n) }, i)) : (r = t, a.apply(e, n)) } }, escapeRegex: function(e) { return e.replace(N, "\\$1") }, set: function(a) { var f; return B.isPlainObject(a) ? $.util.set(a._) : null === a ? function() {} : "function" == typeof a ? function(e, t, n) { a(e, "set", t, n) } : "string" != typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(") ? function(e, t) { e[a] = t } : (f = function(e, t, n) { for (var a, r, o, i, l = de(n), n = l[l.length - 1], s = 0, u = l.length - 1; s < u; s++) { if ("__proto__" === l[s] || "constructor" === l[s]) throw new Error("Cannot set prototype values"); if (a = l[s].match(ce), r = l[s].match(p), a) { if (l[s] = l[s].replace(ce, ""), e[l[s]] = [], (a = l.slice()).splice(0, s + 1), i = a.join("."), Array.isArray(t))
                            for (var c = 0, d = t.length; c < d; c++) f(o = {}, t[c], i), e[l[s]].push(o);
                        else e[l[s]] = t; return }
                    r && (l[s] = l[s].replace(p, ""), e = e[l[s]](t)), null !== e[l[s]] && void 0 !== e[l[s]] || (e[l[s]] = {}), e = e[l[s]] }
                n.match(p) ? e[n.replace(p, "")](t) : e[n.replace(ce, "")] = t }, function(e, t) { return f(e, t, a) }) }, get: function(r) { var o, f; return B.isPlainObject(r) ? (o = {}, B.each(r, function(e, t) { t && (o[e] = $.util.get(t)) }), function(e, t, n, a) { var r = o[t] || o._; return void 0 !== r ? r(e, t, n, a) : e }) : null === r ? function(e) { return e } : "function" == typeof r ? function(e, t, n, a) { return r(e, t, n, a) } : "string" != typeof r || -1 === r.indexOf(".") && -1 === r.indexOf("[") && -1 === r.indexOf("(") ? function(e) { return e[r] } : (f = function(e, t, n) { var a, r, o; if ("" !== n)
                    for (var i = de(n), l = 0, s = i.length; l < s; l++) { if (d = i[l].match(ce), a = i[l].match(p), d) { if (i[l] = i[l].replace(ce, ""), "" !== i[l] && (e = e[i[l]]), r = [], i.splice(0, l + 1), o = i.join("."), Array.isArray(e))
                                for (var u = 0, c = e.length; u < c; u++) r.push(f(e[u], t, o)); var d = d[0].substring(1, d[0].length - 1);
                            e = "" === d ? r : r.join(d); break } if (a) i[l] = i[l].replace(p, ""), e = e[i[l]]();
                        else { if (null === e || null === e[i[l]]) return null; if (void 0 === e || void 0 === e[i[l]]) return;
                            e = e[i[l]] } }
                return e }, function(e, t) { return f(e, t, r) }) }, stripHtml: function(e) { var t = typeof e; if ("function" != t) return "string" == t ? I(e) : e;
            I = e }, escapeHtml: function(e) { var t = typeof e; if ("function" != t) return "string" == t || Array.isArray(e) ? u(e) : e;
            u = e }, unique: x }; var r = function(e, t, n) { void 0 !== e[t] && (e[n] = e[t]) };

    function ne(e) { r(e, "ordering", "bSort"), r(e, "orderMulti", "bSortMulti"), r(e, "orderClasses", "bSortClasses"), r(e, "orderCellsTop", "bSortCellsTop"), r(e, "order", "aaSorting"), r(e, "orderFixed", "aaSortingFixed"), r(e, "paging", "bPaginate"), r(e, "pagingType", "sPaginationType"), r(e, "pageLength", "iDisplayLength"), r(e, "searching", "bFilter"), "boolean" == typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : ""), "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : ""); var t = e.aoSearchCols; if (t)
            for (var n = 0, a = t.length; n < a; n++) t[n] && z($.models.oSearch, t[n]);
        e.serverSide && !e.searchDelay && (e.searchDelay = 400) }

    function ae(e) { r(e, "orderable", "bSortable"), r(e, "orderData", "aDataSort"), r(e, "orderSequence", "asSorting"), r(e, "orderDataType", "sortDataType"); var t = e.aDataSort; "number" != typeof t || Array.isArray(t) || (e.aDataSort = [t]) }

    function re(e) { var t = $.defaults.column,
            n = e.aoColumns.length,
            t = B.extend({}, $.models.oColumn, t, { aDataSort: t.aDataSort || [n], mData: t.mData || n, idx: n, searchFixed: {}, colEl: B("<col>") }),
            t = (e.aoColumns.push(t), e.aoPreSearchCols);
        t[n] = B.extend({}, $.models.oSearch, t[n]) }

    function oe(e, t, n) {
        function a(e) { return "string" == typeof e && -1 !== e.indexOf("@") } var r = e.aoColumns[t],
            o = (null != n && (ae(n), z($.defaults.column, n, !0), void 0 === n.mDataProp || n.mData || (n.mData = n.mDataProp), n.sType && (r._sManualType = n.sType), n.className && !n.sClass && (n.sClass = n.className), t = r.sClass, B.extend(r, n), Q(r, n, "sWidth", "sWidthOrig"), t !== r.sClass && (r.sClass = t + " " + r.sClass), void 0 !== n.iDataSort && (r.aDataSort = [n.iDataSort]), Q(r, n, "aDataSort")), r.mData),
            i = J(o);
        r.mRender && Array.isArray(r.mRender) && (n = (t = r.mRender.slice()).shift(), r.mRender = $.render[n].apply(q, t)), r._render = r.mRender ? J(r.mRender) : null;
        r._bAttrSrc = B.isPlainObject(o) && (a(o.sort) || a(o.type) || a(o.filter)), r._setter = null, r.fnGetData = function(e, t, n) { var a = i(e, t, void 0, n); return r._render && t ? r._render(a, t, e, n) : a }, r.fnSetData = function(e, t, n) { return m(o)(e, t, n) }, "number" == typeof o || r._isArrayHost || (e._rowReadObject = !0), e.oFeatures.bSort || (r.bSortable = !1) }

    function E(e) { var t = e; if (t.oFeatures.bAutoWidth) { var n, a, r = t.nTable,
                o = t.aoColumns,
                i = t.oScroll,
                l = i.sY,
                s = i.sX,
                i = i.sXInner,
                u = W(t, "bVisible"),
                c = r.getAttribute("width"),
                d = r.parentNode,
                f = r.style.width,
                f = (f && -1 !== f.indexOf("%") && (c = f), ee(t, null, "column-calc", { visible: u }, !1), B(r.cloneNode()).css("visibility", "hidden").removeAttr("id")),
                h = (f.append("<tbody>"), B("<tr/>").appendTo(f.find("tbody"))); for (f.append(B(t.nTHead).clone()).append(B(t.nTFoot).clone()), f.find("tfoot th, tfoot td").css("width", ""), f.find("thead th, thead td").each(function() { var e = ie(t, this, !0, !1);
                    e ? (this.style.width = e, s && B(this).append(B("<div/>").css({ width: e, margin: 0, padding: 0, border: 0, height: 1 }))) : this.style.width = "" }), n = 0; n < u.length; n++) { p = u[n], a = o[p]; var p = function(e, t) { var n = e.aoColumns[t]; if (!n.maxLenString) { for (var a, r = "", o = -1, i = 0, l = e.aiDisplayMaster.length; i < l; i++) { var s = e.aiDisplayMaster[i],
                                    s = me(e, s)[t],
                                    s = s && "object" == typeof s && s.nodeType ? s.innerHTML : s + "";
                                s = s.replace(/id=".*?"/g, "").replace(/name=".*?"/g, ""), (a = I(s).replace(/&nbsp;/g, " ")).length > o && (r = s, o = a.length) }
                            n.maxLenString = r } return n.maxLenString }(t, p),
                    g = C.type.className[a.sType],
                    m = p + a.sContentPadding,
                    p = -1 === p.indexOf("<") ? _.createTextNode(m) : m;
                B("<td/>").addClass(g).addClass(a.sClass).append(p).appendTo(h) }
            B("[name]", f).removeAttr("name"); var v = B("<div/>").css(s || l ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(f).appendTo(d),
                b = (s && i ? f.width(i) : s ? (f.css("width", "auto"), f.removeAttr("width"), f.width() < d.clientWidth && c && f.width(d.clientWidth)) : l ? f.width(d.clientWidth) : c && f.width(c), 0),
                y = f.find("tbody tr").eq(0).children(); for (n = 0; n < u.length; n++) { var D = y[n].getBoundingClientRect().width;
                b += D, o[u[n]].sWidth = A(D) }
            r.style.width = A(b), v.remove(), c && (r.style.width = A(c)), !c && !s || t._reszEvt || (B(q).on("resize.DT-" + t.sInstance, $.util.throttle(function() { t.bDestroying || E(t) })), t._reszEvt = !0) } for (var x = e, S = x.aoColumns, T = 0; T < S.length; T++) { var w = ie(x, [T], !1, !1);
            S[T].colEl.css("width", w) }
        i = e.oScroll; "" === i.sY && "" === i.sX || We(e), ee(e, null, "column-sizing", [e]) }

    function M(e, t) { e = W(e, "bVisible"); return "number" == typeof e[t] ? e[t] : null }

    function T(e, t) { e = W(e, "bVisible").indexOf(t); return -1 !== e ? e : null }

    function H(e) { var t = e.aoHeader,
            n = e.aoColumns,
            a = 0; if (t.length)
            for (var r = 0, o = t[0].length; r < o; r++) n[r].bVisible && "none" !== B(t[0][r].cell).css("display") && a++; return a }

    function W(e, n) { var a = []; return e.aoColumns.map(function(e, t) { e[n] && a.push(t) }), a }

    function X(e) { for (var t, n, a, r, o, i, l, s = e.aoColumns, u = e.aoData, c = $.ext.type.detect, d = 0, f = s.length; d < f; d++) { if (l = [], !(o = s[d]).sType && o._sManualType) o.sType = o._sManualType;
            else if (!o.sType) { for (t = 0, n = c.length; t < n; t++) { for (a = 0, r = u.length; a < r; a++)
                        if (u[a]) { if (void 0 === l[a] && (l[a] = G(e, a, d, "type")), !(i = c[t](l[a], e)) && t !== c.length - 2) break; if ("html" === i && !y(l[a])) break }
                    if (i) { o.sType = i; break } }
                o.sType || (o.sType = "string") } var h = C.type.className[o.sType],
                h = (h && (V(e.aoHeader, d, h), V(e.aoFooter, d, h)), C.type.render[o.sType]); if (h && !o._render) { o._render = $.util.get(h), p = b = v = m = g = void 0; for (var p, g = e, m = d, v = g.aoData, b = 0; b < v.length; b++) v[b].nTr && (p = G(g, b, m, "display"), v[b].displayData[m] = p, ue(v[b].anCells[m], p)) } } }

    function V(e, t, n) { e.forEach(function(e) { e[t].unique && D(e[t].cell, n) }) }

    function ie(e, t, n, a) { Array.isArray(t) || (t = le(t)); for (var r, o = 0, i = e.aoColumns, l = 0, s = t.length; l < s; l++) { var u = i[t[l]],
                c = n ? u.sWidthOrig : u.sWidth; if (a || !1 !== u.bVisible) { if (null == c) return null; "number" == typeof c ? (r = "px", o += c) : (u = c.match(/([\d\.]+)([^\d]*)/)) && (o += +u[1], r = 3 === u.length ? u[2] : "px") } } return o + r }

    function le(e) { e = B(e).closest("[data-dt-column]").attr("data-dt-column"); return e ? e.split(",").map(function(e) { return +e }) : [] }

    function Y(e, t, n, a) { for (var r = e.aoData.length, o = B.extend(!0, {}, $.models.oRow, { src: n ? "dom" : "data", idx: r }), i = (o._aData = t, e.aoData.push(o), e.aoColumns), l = 0, s = i.length; l < s; l++) i[l].sType = null;
        e.aiDisplayMaster.push(r);
        t = e.rowIdFn(t); return void 0 !== t && (e.aIds[t] = o), !n && e.oFeatures.bDeferRender || ve(e, r, n, a), r }

    function se(n, e) { var a; return (e = e instanceof B ? e : B(e)).map(function(e, t) { return a = ge(n, t), Y(n, a.data, t, a.cells) }) }

    function G(e, t, n, a) { "search" === a ? a = "filter" : "order" === a && (a = "sort"); var r = e.iDraw,
            o = e.aoColumns[n],
            i = e.aoData[t]._aData,
            l = o.sDefaultContent,
            s = o.fnGetData(i, a, { settings: e, row: t, col: n }); if (void 0 === (s = "display" !== a && s && "object" == typeof s && s.nodeName ? s.innerHTML : s)) return e.iDrawError != r && null === l && (Z(e, 0, "Requested unknown parameter " + ("function" == typeof o.mData ? "{function}" : "'" + o.mData + "'") + " for row " + t + ", column " + n, 4), e.iDrawError = r), l; if (s !== i && null !== s || null === l || void 0 === a) { if ("function" == typeof s) return s.call(i) } else s = l; return null === s && "display" === a ? "" : "filter" === a && (t = $.ext.type.search)[o.sType] ? t[o.sType](s) : s }

    function ue(e, t) { t && "object" == typeof t && t.nodeName ? B(e).empty().append(t) : e.innerHTML = t } var ce = /\[.*?\]$/,
        p = /\(\)$/;

    function de(e) { return (e.match(/(\\.|[^.])+/g) || [""]).map(function(e) { return e.replace(/\\\./g, ".") }) } var J = $.util.get,
        m = $.util.set;

    function fe(e) { return h(e.aoData, "_aData") }

    function he(e) { e.aoData.length = 0, e.aiDisplayMaster.length = 0, e.aiDisplay.length = 0, e.aIds = {} }

    function pe(e, t, n, a) { var r, o, i = e.aoData[t]; if (i._aSortData = null, i._aFilterData = null, i.displayData = null, "dom" !== n && (n && "auto" !== n || "dom" !== i.src)) { var l = i.anCells,
                s = me(e, t); if (l)
                if (void 0 !== a) ue(l[a], s[a]);
                else
                    for (r = 0, o = l.length; r < o; r++) ue(l[r], s[r]) } else i._aData = ge(e, i, a, void 0 === a ? void 0 : i._aData).data; var u = e.aoColumns; if (void 0 !== a) u[a].sType = null, u[a].maxLenString = null;
        else { for (r = 0, o = u.length; r < o; r++) u[r].sType = null, u[r].maxLenString = null;
            be(e, i) } }

    function ge(e, t, n, a) {
        function r(e, t) { var n; "string" == typeof e && -1 !== (n = e.indexOf("@")) && (n = e.substring(n + 1), m(e)(a, t.getAttribute(n))) }

        function o(e) { void 0 !== n && n !== d || (l = f[d], s = e.innerHTML.trim(), l && l._bAttrSrc ? (m(l.mData._)(a, s), r(l.mData.sort, e), r(l.mData.type, e), r(l.mData.filter, e)) : h ? (l._setter || (l._setter = m(l.mData)), l._setter(a, s)) : a[d] = s), d++ } var i, l, s, u = [],
            c = t.firstChild,
            d = 0,
            f = e.aoColumns,
            h = e._rowReadObject;
        a = void 0 !== a ? a : h ? {} : []; if (c)
            for (; c;) "TD" != (i = c.nodeName.toUpperCase()) && "TH" != i || (o(c), u.push(c)), c = c.nextSibling;
        else
            for (var p = 0, g = (u = t.anCells).length; p < g; p++) o(u[p]); var t = t.firstChild ? t : t.nTr; return t && (t = t.getAttribute("id")) && m(e.rowId)(a, t), { data: a, cells: u } }

    function me(e, t) { var n = e.aoData[t],
            a = e.aoColumns; if (!n.displayData) { n.displayData = []; for (var r = 0, o = a.length; r < o; r++) n.displayData.push(G(e, t, r, "display")) } return n.displayData }

    function ve(e, t, n, a) { var r, o, i, l, s, u, c = e.aoData[t],
            d = c._aData,
            f = [],
            h = e.oClasses.tbody.row; if (null === c.nTr) { for (r = n || _.createElement("tr"), c.nTr = r, c.anCells = f, D(r, h), r._DT_RowIndex = t, be(e, c), l = 0, s = e.aoColumns.length; l < s; l++) { i = e.aoColumns[l], (o = (u = !n) ? _.createElement(i.sCellType) : a[l]) || Z(e, 0, "Incorrect column count", 18), o._DT_CellIndex = { row: t, column: l }, f.push(o); var p = me(e, t);!u && (!i.mRender && i.mData === l || B.isPlainObject(i.mData) && i.mData._ === l + ".display") || ue(o, p[l]), i.bVisible && !n ? r.appendChild(o) : !i.bVisible && n && o.parentNode.removeChild(o), i.fnCreatedCell && i.fnCreatedCell.call(e.oInstance, o, G(e, t, l), d, t, l) }
            ee(e, "aoRowCreatedCallback", "row-created", [r, d, t, f]) } else D(c.nTr, h) }

    function be(e, t) { var n = t.nTr,
            a = t._aData;
        n && ((e = e.rowIdFn(a)) && (n.id = e), a.DT_RowClass && (e = a.DT_RowClass.split(" "), t.__rowc = t.__rowc ? x(t.__rowc.concat(e)) : e, B(n).removeClass(t.__rowc.join(" ")).addClass(a.DT_RowClass)), a.DT_RowAttr && B(n).attr(a.DT_RowAttr), a.DT_RowData) && B(n).data(a.DT_RowData) }

    function ye(e, t) { var n, a, r, o = e.oClasses,
            i = e.aoColumns,
            l = "header" === t ? e.nTHead : e.nTFoot,
            s = "header" === t ? "sTitle" : t; if (l) { if (0 === B("th, td", l).length && ("header" === t || h(e.aoColumns, s).join("")))
                for (r = B("<tr/>").appendTo(l), n = 0, a = i.length; n < a; n++) B("<th/>").html(i[n][s] || "").appendTo(r); var u = Ce(e, l, !0); "header" === t ? e.aoHeader = u : e.aoFooter = u, B(l).children("tr").attr("role", "row"), B(l).children("tr").children("th, td").each(function() { Qe(e, t)(e, B(this), o) }) } }

    function De(e, t, n) { var a, r, o, i, l, s = [],
            u = [],
            c = e.aoColumns,
            e = c.length; if (t) { for (n = n || f(e).filter(function(e) { return c[e].bVisible }), a = 0; a < t.length; a++) s[a] = t[a].slice().filter(function(e, t) { return n.includes(t) }), u.push([]); for (a = 0; a < s.length; a++)
                for (r = 0; r < s[a].length; r++)
                    if (l = i = 1, void 0 === u[a][r]) { for (o = s[a][r].cell; void 0 !== s[a + i] && s[a][r].cell == s[a + i][r].cell;) u[a + i][r] = null, i++; for (; void 0 !== s[a][r + l] && s[a][r].cell == s[a][r + l].cell;) { for (var d = 0; d < i; d++) u[a + d][r + l] = null;
                            l++ }
                        u[a][r] = { cell: o, colspan: l, rowspan: i, title: B("span.dt-column-title", o).html() } }
            return u } }

    function xe(e, t) { for (var n, a, r = De(e, t), o = 0; o < t.length; o++) { if (n = t[o].row)
                for (; a = n.firstChild;) n.removeChild(a); for (var i = 0; i < r[o].length; i++) { var l = r[o][i];
                l && B(l.cell).appendTo(n).attr("rowspan", l.rowspan).attr("colspan", l.colspan) } } }

    function S(e, t) { if (r = "ssp" == te(s = e), void 0 !== (i = s.iInitDisplayStart) && -1 !== i && (s._iDisplayStart = !r && i >= s.fnRecordsDisplay() ? 0 : i, s.iInitDisplayStart = -1), -1 !== ee(e, "aoPreDrawCallback", "preDraw", [e]).indexOf(!1)) w(e, !1);
        else { var l, n = [],
                a = 0,
                r = "ssp" == te(e),
                o = e.aiDisplay,
                i = e._iDisplayStart,
                s = e.fnDisplayEnd(),
                u = e.aoColumns,
                c = B(e.nTBody); if (e.bDrawing = !0, r) { if (!e.bDestroying && !t) return 0 === e.iDraw && c.empty().append(Se(e)), (l = e).iDraw++, w(l, !0), void Ie(l, function(t) {
                    function n(e, t) { return "function" == typeof a[e][t] ? "function" : a[e][t] } var a = t.aoColumns,
                        e = t.oFeatures,
                        r = t.oPreviousSearch,
                        o = t.aoPreSearchCols; return { draw: t.iDraw, columns: a.map(function(t, e) { return { data: n(e, "mData"), name: t.sName, searchable: t.bSearchable, orderable: t.bSortable, search: { value: o[e].search, regex: o[e].regex, fixed: Object.keys(t.searchFixed).map(function(e) { return { name: e, term: t.searchFixed[e].toString() } }) } } }), order: qe(t).map(function(e) { return { column: e.col, dir: e.dir, name: n(e.col, "sName") } }), start: t._iDisplayStart, length: e.bPaginate ? t._iDisplayLength : -1, search: { value: r.search, regex: r.regex, fixed: Object.keys(t.searchFixed).map(function(e) { return { name: e, term: t.searchFixed[e].toString() } }) } } }(l), function(e) { var t = l,
                        n = Ae(t, e = e),
                        a = Fe(t, "draw", e),
                        r = Fe(t, "recordsTotal", e),
                        e = Fe(t, "recordsFiltered", e); if (void 0 !== a) { if (+a < t.iDraw) return;
                        t.iDraw = +a }
                    n = n || [], he(t), t._iRecordsTotal = parseInt(r, 10), t._iRecordsDisplay = parseInt(e, 10); for (var o = 0, i = n.length; o < i; o++) Y(t, n[o]);
                    t.aiDisplay = t.aiDisplayMaster.slice(), S(t, !0), ke(t), w(t, !1) }) } else e.iDraw++; if (0 !== o.length)
                for (var d = r ? e.aoData.length : s, f = r ? 0 : i; f < d; f++) { for (var h = o[f], p = e.aoData[h], g = (null === p.nTr && ve(e, h), p.nTr), m = 0; m < u.length; m++) { var v = u[m],
                            b = p.anCells[m];
                        D(b, C.type.className[v.sType]), D(b, v.sClass), D(b, e.oClasses.tbody.cell) }
                    ee(e, "aoRowCallback", null, [g, p._aData, a, f, h]), n.push(g), a++ } else n[0] = Se(e);
            ee(e, "aoHeaderCallback", "header", [B(e.nTHead).children("tr")[0], fe(e), i, s, o]), ee(e, "aoFooterCallback", "footer", [B(e.nTFoot).children("tr")[0], fe(e), i, s, o]), c.children().detach(), c.append(B(n)), B(e.nTableWrapper).toggleClass("dt-empty-footer", 0 === B("tr", e.nTFoot).length), ee(e, "aoDrawCallback", "draw", [e], !0), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1 } }

    function c(e, t, n) { var a = e.oFeatures,
            r = a.bSort,
            a = a.bFilter;
        void 0 !== n && !0 !== n || (r && Ue(e), a ? Le(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice()), !0 !== t && (e._iDisplayStart = 0), e._drawHold = t, S(e), e._drawHold = !1 }

    function Se(e) { var t = e.oLanguage,
            n = t.sZeroRecords,
            a = te(e); return e.iDraw <= 1 && ("ajax" === a || "ssp" === a) ? n = t.sLoadingRecords : t.sEmptyTable && 0 === e.fnRecordsTotal() && (n = t.sEmptyTable), B("<tr/>").append(B("<td />", { colSpan: H(e), class: e.oClasses.empty.row }).html(n))[0] }

    function Te(e, t, n) { for (var a = {}, r = (B.each(t, function(e, t) { var n;
                null === t || (e = e.replace(/([A-Z])/g, " $1").split(" "), a[e[0]] || (a[e[0]] = {}), n = 1 === e.length ? "full" : e[1].toLowerCase(), e = a[e[0]], B.isPlainObject(t) ? t.contents ? e[n] = t : e[n] = { contents: Object.keys(t).map(function(e) { return { feature: e, opts: t[e] } }) } : e[n] = { contents: t }, Array.isArray(e[n].contents)) || (e[n].contents = [e[n].contents]) }), Object.keys(a).map(function(e) { return 0 !== e.indexOf(n) ? null : { name: e, val: a[e] } }).filter(function(e) { return null !== e })), o = (r.sort(function(e, t) { e = +e.name.replace(/[^0-9]/g, ""); return +t.name.replace(/[^0-9]/g, "") - e }), "bottom" === n && r.reverse(), []), i = 0, l = r.length; i < l; i++) r[i].val.full && (o.push({ full: r[i].val.full }), we(e, o[o.length - 1]), delete r[i].val.full), Object.keys(r[i].val).length && (o.push(r[i].val), we(e, o[o.length - 1])); return o }

    function we(o, i) {
        function l(e, t) { return C.features[e] || Z(o, 0, "Unknown feature: " + e), C.features[e].apply(this, [o, t]) }
        B.each(i, function(e) { for (var t, n = i[e].contents, a = 0, r = n.length; a < r; a++) n[a] && ("string" == typeof n[a] ? n[a] = l(n[a], null) : B.isPlainObject(n[a]) ? n[a] = l(n[a].feature, n[a].opts) : "function" == typeof n[a].node ? n[a] = n[a].node(o) : "function" == typeof n[a] && (t = n[a](o), n[a] = "function" == typeof t.node ? t.node() : t)) }) }

    function _e(t) { var a, e = t.oClasses,
            n = B(t.nTable),
            r = B("<div/>").attr({ id: t.sTableId + "_wrapper", class: e.container }).insertBefore(n),
            e = (t.nTableWrapper = r[0], Te(t, t.layout, "top")),
            n = Te(t, t.layout, "bottom"),
            o = Qe(t, "layout"); if (t.sDom)
            for (var i, l, s, u, c, d, f = t, h = t.sDom, p = r, g = h.match(/(".*?")|('.*?')|./g), m = 0; m < g.length; m++) i = null, "<" == (l = g[m]) ? (s = B("<div/>"), "'" != (u = g[m + 1])[0] && '"' != u[0] || (u = u.replace(/['"]/g, ""), c = "", -1 != u.indexOf(".") ? (d = u.split("."), c = d[0], d = d[1]) : "#" == u[0] ? c = u : d = u, s.attr("id", c.substring(1)).addClass(d), m++), p.append(s), p = s) : ">" == l ? p = p.parent() : "t" == l ? i = He(f) : $.ext.feature.forEach(function(e) { l == e.cFeature && (i = e.fnInit(f)) }), i && p.append(i);
        else e.forEach(function(e) { o(t, r, e) }), o(t, r, { full: { table: !0, contents: [He(t)] } }), n.forEach(function(e) { o(t, r, e) });
        h = t, e = h.nTable;
        h.oFeatures.bProcessing && (a = B("<div/>", { id: h.sTableId + "_processing", class: h.oClasses.processing.container, role: "status" }).html(h.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(e), B(e).on("processing.dt.DT", function(e, t, n) { a.css("display", n ? "block" : "none") })) }

    function Ce(e, t, n) { for (var a, r, o, i, l, s, u = e.aoColumns, c = B(t).children("tr"), d = t && "thead" === t.nodeName.toLowerCase(), f = [], h = 0, p = c.length; h < p; h++) f.push([]); for (h = 0, p = c.length; h < p; h++)
            for (r = (a = c[h]).firstChild; r;) { if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase()) { var g, m, v, b, y, D = []; for (b = (b = +r.getAttribute("colspan")) && 0 != b && 1 != b ? b : 1, y = (y = +r.getAttribute("rowspan")) && 0 != y && 1 != y ? y : 1, l = function(e, t, n) { for (var a = e[t]; a[n];) n++; return n }(f, h, 0), s = 1 == b, n && (s && (oe(e, l, B(r).data()), g = u[l], m = r.getAttribute("width") || null, (v = r.style.width.match(/width:\s*(\d+[pxem%]+)/)) && (m = v[1]), g.sWidthOrig = g.sWidth || m, d ? (null === g.sTitle || g.autoTitle || (r.innerHTML = g.sTitle), !g.sTitle && s && (g.sTitle = r.innerHTML.replace(/<.*?>/g, ""), g.autoTitle = !0)) : g.footer && (r.innerHTML = g.footer), g.ariaTitle || (g.ariaTitle = B(r).attr("aria-label") || g.sTitle), g.className) && B(r).addClass(g.className), 0 === B("span.dt-column-title", r).length && B("<span>").addClass("dt-column-title").append(r.childNodes).appendTo(r), d) && 0 === B("span.dt-column-order", r).length && B("<span>").addClass("dt-column-order").appendTo(r), i = 0; i < b; i++) { for (o = 0; o < y; o++) f[h + o][l + i] = { cell: r, unique: s }, f[h + o].row = a;
                        D.push(l + i) }
                    r.setAttribute("data-dt-column", x(D).join(",")) }
                r = r.nextSibling }
        return f }

    function Ie(n, e, a) {
        function t(e) { var t = n.jqXHR ? n.jqXHR.status : null;
            (null === e || "number" == typeof t && 204 == t) && Ae(n, e = {}, []), (t = e.error || e.sError) && Z(n, 0, t), n.json = e, ee(n, null, "xhr", [n, e, n.jqXHR], !0), a(e) } var r, o = n.ajax,
            i = n.oInstance,
            l = (B.isPlainObject(o) && o.data && (l = "function" == typeof(r = o.data) ? r(e, n) : r, e = "function" == typeof r && l ? l : B.extend(!0, e, l), delete o.data), { url: "string" == typeof o ? o : "", data: e, success: t, dataType: "json", cache: !1, type: n.sServerMethod, error: function(e, t) {-1 === ee(n, null, "xhr", [n, null, n.jqXHR], !0).indexOf(!0) && ("parsererror" == t ? Z(n, 0, "Invalid JSON response", 1) : 4 === e.readyState && Z(n, 0, "Ajax error", 7)), w(n, !1) } });
        B.isPlainObject(o) && B.extend(l, o), n.oAjaxData = e, ee(n, null, "preXhr", [n, e, l], !0), "function" == typeof o ? n.jqXHR = o.call(i, e, t, n) : "" === o.url ? t({}) : (n.jqXHR = B.ajax(l), r && (o.data = r)) }

    function Ae(e, t, n) { var a = "data"; if (B.isPlainObject(e.ajax) && void 0 !== e.ajax.dataSrc && ("string" == typeof(e = e.ajax.dataSrc) || "function" == typeof e ? a = e : void 0 !== e.data && (a = e.data)), !n) return "data" === a ? t.aaData || t[a] : "" !== a ? J(a)(t) : t;
        m(a)(t, n) }

    function Fe(e, t, n) { var e = B.isPlainObject(e.ajax) ? e.ajax.dataSrc : null; return e && e[t] ? J(e[t])(n) : (e = "", "draw" === t ? e = "sEcho" : "recordsTotal" === t ? e = "iTotalRecords" : "recordsFiltered" === t && (e = "iTotalDisplayRecords"), void 0 !== n[e] ? n[e] : n[t]) }

    function Le(n, e) { var t = n.aoPreSearchCols; if (X(n), "ssp" != te(n)) { for (var a, r, o, i, l, s = n, u = s.aoColumns, c = s.aoData, d = 0; d < c.length; d++)
                if (c[d] && !(l = c[d])._aFilterData) { for (o = [], a = 0, r = u.length; a < r; a++) u[a].bSearchable ? "string" != typeof(i = null === (i = G(s, d, a, "filter")) ? "" : i) && i.toString && (i = i.toString()) : i = "", i.indexOf && -1 !== i.indexOf("&") && (Pe.innerHTML = i, i = Re ? Pe.textContent : Pe.innerText), i.replace && (i = i.replace(/[\r\n\u2028]/g, "")), o.push(i);
                    l._aFilterData = o, l._sFilterRow = o.join("  "), 0 }
            n.aiDisplay = n.aiDisplayMaster.slice(), Ne(n.aiDisplay, n, e.search, e), B.each(n.searchFixed, function(e, t) { Ne(n.aiDisplay, n, t, {}) }); for (var f = 0; f < t.length; f++) { var h = t[f];
                Ne(n.aiDisplay, n, h.search, h, f), B.each(n.aoColumns[f].searchFixed, function(e, t) { Ne(n.aiDisplay, n, t, {}, f) }) } for (var p, g, m = n, v = $.ext.search, b = m.aiDisplay, y = 0, D = v.length; y < D; y++) { for (var x = [], S = 0, T = b.length; S < T; S++) g = b[S], p = m.aoData[g], v[y](m, p._aFilterData, g, p._aData, S) && x.push(g);
                b.length = 0, b.push.apply(b, x) } }
        n.bFiltered = !0, ee(n, null, "search", [n]) }

    function Ne(e, t, n, a, r) { if ("" !== n)
            for (var o = 0, i = "function" == typeof n ? n : null, l = n instanceof RegExp ? n : i ? null : function(e, t) { var a = [],
                        t = B.extend({}, { boundary: !1, caseInsensitive: !0, exact: !1, regex: !1, smart: !0 }, t); "string" != typeof e && (e = e.toString()); if (t.exact) return new RegExp("^" + je(e) + "$", t.caseInsensitive ? "i" : ""); { var n, r, o;
                        e = t.regex ? e : je(e), t.smart && (n = (e.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""]).map(function(e) { var t, n = !1; return "!" === e.charAt(0) && (n = !0, e = e.substring(1)), '"' === e.charAt(0) ? e = (t = e.match(/^"(.*)"$/)) ? t[1] : e : "“" === e.charAt(0) && (e = (t = e.match(/^\u201C(.*)\u201D$/)) ? t[1] : e), n && (1 < e.length && a.push("(?!" + e + ")"), e = ""), e.replace('"', "") }), r = a.length ? a.join("") : "", o = t.boundary ? "\\b" : "", e = "^(?=.*?" + o + n.join(")(?=.*?" + o) + ")(" + r + ".)*$") } return new RegExp(e, t.caseInsensitive ? "i" : "") }(n, a); o < e.length;) { var s = t.aoData[e[o]],
                    u = void 0 === r ? s._sFilterRow : s._aFilterData[r];
                (i && !i(u, s._aData, e[o], r) || l && !l.test(u)) && (e.splice(o, 1), o--), o++ } } var je = $.util.escapeRegex,
        Pe = B("<div>")[0],
        Re = void 0 !== Pe.textContent;

    function Oe(n) { var a, e, t, r, o, i, l = n.iInitDisplayStart;
        n.bInitialised ? (ye(n, "header"), ye(n, "footer"), xe(n, n.aoHeader), xe(n, n.aoFooter), _e(n), t = (e = n).nTHead, i = t.querySelectorAll("tr"), r = e.bSortCellsTop, o = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])', !0 === r ? t = i[0] : !1 === r && (t = i[i.length - 1]), Ve(e, t, t === e.nTHead ? "tr" + o + " th" + o + ", tr" + o + " td" + o : "th" + o + ", td" + o), Be(e, r = [], e.aaSorting), e.aaSorting = r, Xe(n), w(n, !0), ee(n, null, "preInit", [n], !0), c(n), "ssp" != (i = te(n)) && ("ajax" == i ? Ie(n, {}, function(e) { var t = Ae(n, e); for (a = 0; a < t.length; a++) Y(n, t[a]);
            n.iInitDisplayStart = l, c(n), w(n, !1), ke(n) }) : (ke(n), w(n, !1)))) : setTimeout(function() { Oe(n) }, 200) }

    function ke(e) { var t;
        e._bInitComplete || (t = [e, e.json], e._bInitComplete = !0, E(e), ee(e, null, "plugin-init", t, !0), ee(e, "aoInitComplete", "init", t, !0)) }

    function Ee(e, t) { t = parseInt(t, 10);
        e._iDisplayLength = t, Ze(e), ee(e, null, "length", [e, t]) }

    function Me(e, t, n) { var a = e._iDisplayStart,
            r = e._iDisplayLength,
            o = e.fnRecordsDisplay(); if (0 === o || -1 === r) a = 0;
        else if ("number" == typeof t) o < (a = t * r) && (a = 0);
        else if ("first" == t) a = 0;
        else if ("previous" == t)(a = 0 <= r ? a - r : 0) < 0 && (a = 0);
        else if ("next" == t) a + r < o && (a += r);
        else if ("last" == t) a = Math.floor((o - 1) / r) * r;
        else { if ("ellipsis" === t) return;
            Z(e, 0, "Unknown paging action: " + t, 5) }
        o = e._iDisplayStart !== a;
        e._iDisplayStart = a, ee(e, null, o ? "page" : "page-nc", [e]), o && n && S(e) }

    function w(e, t) { ee(e, null, "processing", [e, t]) }

    function He(e) { var t, n, a, r, o, i, l, s, u, c, d, f, h, p = B(e.nTable),
            g = e.oScroll; return "" === g.sX && "" === g.sY ? e.nTable : (t = g.sX, n = g.sY, a = e.oClasses.scrolling, o = (r = e.captionNode) ? r._captionSide : null, u = B(p[0].cloneNode(!1)), i = B(p[0].cloneNode(!1)), c = function(e) { return e ? A(e) : null }, (l = p.children("tfoot")).length || (l = null), u = B(s = "<div/>", { class: a.container }).append(B(s, { class: a.header.self }).css({ overflow: "hidden", position: "relative", border: 0, width: t ? c(t) : "100%" }).append(B(s, { class: a.header.inner }).css({ "box-sizing": "content-box", width: g.sXInner || "100%" }).append(u.removeAttr("id").css("margin-left", 0).append("top" === o ? r : null).append(p.children("thead"))))).append(B(s, { class: a.body }).css({ position: "relative", overflow: "auto", width: c(t) }).append(p)), l && u.append(B(s, { class: a.footer.self }).css({ overflow: "hidden", border: 0, width: t ? c(t) : "100%" }).append(B(s, { class: a.footer.inner }).append(i.removeAttr("id").css("margin-left", 0).append("bottom" === o ? r : null).append(p.children("tfoot"))))), c = u.children(), d = c[0], f = c[1], h = l ? c[2] : null, B(f).on("scroll.DT", function() { var e = this.scrollLeft;
            d.scrollLeft = e, l && (h.scrollLeft = e) }), B("th, td", d).on("focus", function() { var e = d.scrollLeft;
            f.scrollLeft = e, l && (f.scrollLeft = e) }), B(f).css("max-height", n), g.bCollapse || B(f).css("height", n), e.nScrollHead = d, e.nScrollBody = f, e.nScrollFoot = h, e.aoDrawCallback.push(We), u[0]) }

    function We(e) { var t, n, a = e.oScroll.iBarWidth,
            r = B(e.nScrollHead).children("div"),
            o = r.children("table"),
            i = e.nScrollBody,
            l = B(i),
            s = B(e.nScrollFoot).children("div"),
            u = s.children("table"),
            c = B(e.nTHead),
            d = B(e.nTable),
            f = e.nTFoot && B("th, td", e.nTFoot).length ? B(e.nTFoot) : null,
            h = e.oBrowser,
            p = i.scrollHeight > i.clientHeight;
        e.scrollBarVis !== p && void 0 !== e.scrollBarVis ? (e.scrollBarVis = p, E(e)) : (e.scrollBarVis = p, d.children("thead, tfoot").remove(), (p = c.clone().prependTo(d)).find("th, td").removeAttr("tabindex"), p.find("[id]").removeAttr("id"), f && (n = f.clone().prependTo(d)).find("[id]").removeAttr("id"), e.aiDisplay.length && (t = d.find("tbody tr").eq(0).find("th, td").map(function() { return B(this).outerWidth() }), B("col", e.colgroup).each(function(e) { this.style.width.replace("px", "") !== t[e] && (this.style.width = t[e] + "px") })), o.find("colgroup").remove(), o.append(e.colgroup.clone()), f && (u.find("colgroup").remove(), u.append(e.colgroup.clone())), B("th, td", p).each(function() { B(this).children().wrapAll('<div class="dt-scroll-sizing">') }), f && B("th, td", n).each(function() { B(this).children().wrapAll('<div class="dt-scroll-sizing">') }), c = Math.floor(d.height()) > i.clientHeight || "scroll" == l.css("overflow-y"), p = "padding" + (h.bScrollbarLeft ? "Left" : "Right"), n = d.outerWidth(), o.css("width", A(n)), r.css("width", A(n)).css(p, c ? a + "px" : "0px"), f && (u.css("width", A(n)), s.css("width", A(n)).css(p, c ? a + "px" : "0px")), d.children("colgroup").prependTo(d), l.trigger("scroll"), !e.bSorted && !e.bFiltered || e._drawHold || (i.scrollTop = 0)) }

    function A(e) { return null === e ? "0px" : "number" == typeof e ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e }

    function Xe(e) { var t = e.aoColumns; for (e.colgroup.empty(), a = 0; a < t.length; a++) t[a].bVisible && e.colgroup.append(t[a].colEl) }

    function Ve(l, e, t, n, s) { Je(e, t, function(o) { var i = void 0 === n ? le(o.target) : [n];
            i.length && (w(l, !0), setTimeout(function() { for (var e, n, t = 0, a = i.length; t < a; t++) { var r = o.shiftKey || 0 < t;! function(e, t, n) {
                        function a(e, t) { var n = e._idx; return (n = void 0 === n ? l.indexOf(e[1]) : n) + 1 < l.length ? n + 1 : t ? null : 0 } var r, o = e.aoColumns[t],
                            i = e.aaSorting,
                            l = o.asSorting;
                        o.bSortable && ("number" == typeof i[0] && (i = e.aaSorting = [i]), n && e.oFeatures.bSortMulti ? -1 !== (o = h(i, "0").indexOf(t)) ? null === (r = null === (r = a(i[o], !0)) && 1 === i.length ? 0 : r) ? i.splice(o, 1) : (i[o][1] = l[r], i[o]._idx = r) : (i.push([t, l[0], 0]), i[i.length - 1]._idx = 0) : i.length && i[0][0] == t ? (r = a(i[0]), i.length = 1, i[0][1] = l[r], i[0]._idx = r) : (i.length = 0, i.push([t, l[0]]), i[0]._idx = 0)) }(l, i[t], r) }
                Ue(l), e = l.aiDisplay, n = l.aiDisplayMaster, e.sort(function(e, t) { return n.indexOf(e) - n.indexOf(t) }), c(l, !1, !1), w(l, !1), s && s() }, 0)) }) }

    function Be(n, a, e) {
        function t(e) { var t;
            B.isPlainObject(e) ? void 0 !== e.idx ? a.push([e.idx, e.dir]) : e.name && -1 !== (t = h(n.aoColumns, "sName").indexOf(e.name)) && a.push([t, e.dir]) : a.push(e) } if (B.isPlainObject(e)) t(e);
        else if (e.length && "number" == typeof e[0]) t(e);
        else if (e.length)
            for (var r = 0; r < e.length; r++) t(e[r]) }

    function qe(e) { var t, n, a, r, o, i, l, s = [],
            u = $.ext.type.order,
            c = e.aoColumns,
            d = e.aaSortingFixed,
            f = B.isPlainObject(d),
            h = []; if (e.oFeatures.bSort)
            for (Array.isArray(d) && Be(e, h, d), f && d.pre && Be(e, h, d.pre), Be(e, h, e.aaSorting), f && d.post && Be(e, h, d.post), t = 0; t < h.length; t++)
                if (c[l = h[t][0]])
                    for (n = 0, a = (r = c[l].aDataSort).length; n < a; n++) i = c[o = r[n]].sType || "string", void 0 === h[t]._idx && (h[t]._idx = c[o].asSorting.indexOf(h[t][1])), h[t][1] && s.push({ src: l, col: o, dir: h[t][1], index: h[t]._idx, type: i, formatter: u[i + "-pre"], sorter: u[i + "-" + h[t][1]] });
        return s }

    function Ue(e, t, n) { var a, r, o, i, l, c, d = [],
            s = $.ext.type.order,
            f = e.aoData,
            u = e.aiDisplayMaster; for (X(e), void 0 !== t ? (l = e.aoColumns[t], c = [{ src: t, col: t, dir: n, index: 0, type: l.sType, formatter: s[l.sType + "-pre"], sorter: s[l.sType + "-" + n] }], u = u.slice()) : c = qe(e), a = 0, r = c.length; a < r; a++) { i = c[a], S = x = D = g = p = h = y = b = v = m = void 0; var h, p, g, m = e,
                v = i.col,
                b = m.aoColumns[v],
                y = $.ext.order[b.sSortDataType];
            y && (h = y.call(m.oInstance, m, v, T(m, v))); for (var D = $.ext.type.order[b.sType + "-pre"], x = m.aoData, S = 0; S < x.length; S++) x[S] && ((p = x[S])._aSortData || (p._aSortData = []), p._aSortData[v] && !y || (g = y ? h[S] : G(m, S, v, "sort"), p._aSortData[v] = D ? D(g, m) : g)) } if ("ssp" != te(e) && 0 !== c.length) { for (a = 0, o = u.length; a < o; a++) d[a] = a;
            c.length && "desc" === c[0].dir && d.reverse(), u.sort(function(e, t) { for (var n, a, r, o, i = c.length, l = f[e]._aSortData, s = f[t]._aSortData, u = 0; u < i; u++)
                    if (n = l[(o = c[u]).col], a = s[o.col], o.sorter) { if (0 !== (r = o.sorter(n, a))) return r } else if (0 !== (r = n < a ? -1 : a < n ? 1 : 0)) return "asc" === o.dir ? r : -r; return (n = d[e]) < (a = d[t]) ? -1 : a < n ? 1 : 0 }) } else 0 === c.length && u.sort(function(e, t) { return e < t ? -1 : t < e ? 1 : 0 }); return void 0 === t && (e.bSorted = !0, ee(e, null, "order", [e, c])), u }

    function $e(e) { var t, n, a, r = e.aLastSort,
            o = e.oClasses.order.position,
            i = qe(e),
            l = e.oFeatures; if (l.bSort && l.bSortClasses) { for (t = 0, n = r.length; t < n; t++) a = r[t].src, B(h(e.aoData, "anCells", a)).removeClass(o + (t < 2 ? t + 1 : 3)); for (t = 0, n = i.length; t < n; t++) a = i[t].src, B(h(e.aoData, "anCells", a)).addClass(o + (t < 2 ? t + 1 : 3)) }
        e.aLastSort = i }

    function ze(n) { var e;
        n._bLoadingState || (e = { time: +new Date, start: n._iDisplayStart, length: n._iDisplayLength, order: B.extend(!0, [], n.aaSorting), search: B.extend({}, n.oPreviousSearch), columns: n.aoColumns.map(function(e, t) { return { visible: e.bVisible, search: B.extend({}, n.aoPreSearchCols[t]) } }) }, n.oSavedState = e, ee(n, "aoStateSaveParams", "stateSaveParams", [n, e]), n.oFeatures.bStateSave && !n.bDestroying && n.fnStateSaveCallback.call(n.oInstance, n, e)) }

    function Ye(n, e, t) { var a, r, o = n.aoColumns,
            i = (n._bLoadingState = !0, n._bInitComplete ? new $.Api(n) : null); if (e && e.time) { var l = n.iStateDuration; if (0 < l && e.time < +new Date - 1e3 * l) n._bLoadingState = !1;
            else if (-1 !== ee(n, "aoStateLoadParams", "stateLoadParams", [n, e]).indexOf(!1)) n._bLoadingState = !1;
            else if (e.columns && o.length !== e.columns.length) n._bLoadingState = !1;
            else { if (n.oLoadedState = B.extend(!0, {}, e), ee(n, null, "stateLoadInit", [n, e], !0), void 0 !== e.length && (i ? i.page.len(e.length) : n._iDisplayLength = e.length), void 0 !== e.start && (null === i ? (n._iDisplayStart = e.start, n.iInitDisplayStart = e.start) : Me(n, e.start / n._iDisplayLength)), void 0 !== e.order && (n.aaSorting = [], B.each(e.order, function(e, t) { n.aaSorting.push(t[0] >= o.length ? [0, t[1]] : t) })), void 0 !== e.search && B.extend(n.oPreviousSearch, e.search), e.columns) { for (a = 0, r = e.columns.length; a < r; a++) { var s = e.columns[a];
                        void 0 !== s.visible && (i ? i.column(a).visible(s.visible, !1) : o[a].bVisible = s.visible), void 0 !== s.search && B.extend(n.aoPreSearchCols[a], s.search) }
                    i && i.columns.adjust() }
                n._bLoadingState = !1, ee(n, "aoStateLoaded", "stateLoaded", [n, e]) } } else n._bLoadingState = !1;
        t() }

    function Z(e, t, n, a) { if (n = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + n, a && (n += ". For more information about this error, please see https://datatables.net/tn/" + a), t) q.console && console.log && console.log(n);
        else { t = $.ext, t = t.sErrMode || t.errMode; if (e && ee(e, null, "dt-error", [e, a, n], !0), "alert" == t) alert(n);
            else { if ("throw" == t) throw new Error(n); "function" == typeof t && t(e, a, n) } } }

    function Q(n, a, e, t) { Array.isArray(e) ? B.each(e, function(e, t) { Array.isArray(t) ? Q(n, a, t[0], t[1]) : Q(n, a, t) }) : (void 0 === t && (t = e), void 0 !== a[e] && (n[t] = a[e])) }

    function Ge(e, t, n) { var a, r; for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (a = t[r], B.isPlainObject(a) ? (B.isPlainObject(e[r]) || (e[r] = {}), B.extend(!0, e[r], a)) : n && "data" !== r && "aaData" !== r && Array.isArray(a) ? e[r] = a.slice() : e[r] = a); return e }

    function Je(e, t, n) { B(e).on("click.DT", t, function(e) { n(e) }).on("keypress.DT", t, function(e) { 13 === e.which && (e.preventDefault(), n(e)) }).on("selectstart.DT", t, function() { return !1 }) }

    function K(e, t, n) { n && e[t].push(n) }

    function ee(t, e, n, a, r) { var o = []; return e && (o = t[e].slice().reverse().map(function(e) { return e.apply(t.oInstance, a) })), null !== n && (e = B.Event(n + ".dt"), n = B(t.nTable), e.dt = t.api, n[r ? "trigger" : "triggerHandler"](e, a), r && 0 === n.parents("body").length && B("body").trigger(e, a), o.push(e.result)), o }

    function Ze(e) { var t = e._iDisplayStart,
            n = e.fnDisplayEnd(),
            a = e._iDisplayLength;
        n <= t && (t = n - a), t -= t % a, e._iDisplayStart = t = -1 === a || t < 0 ? 0 : t }

    function Qe(e, t) { var e = e.renderer,
            n = $.ext.renderer[t]; return B.isPlainObject(e) && e[t] ? n[e[t]] || n._ : "string" == typeof e && n[e] || n._ }

    function te(e) { return e.oFeatures.bServerSide ? "ssp" : e.ajax ? "ajax" : "dom" }

    function Ke(e, t, n) { var a = e.fnFormatNumber,
            r = e._iDisplayStart + 1,
            o = e._iDisplayLength,
            i = e.fnRecordsDisplay(),
            l = e.fnRecordsTotal(),
            s = -1 === o; return t.replace(/_START_/g, a.call(e, r)).replace(/_END_/g, a.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, a.call(e, l)).replace(/_TOTAL_/g, a.call(e, i)).replace(/_PAGE_/g, a.call(e, s ? 1 : Math.ceil(r / o))).replace(/_PAGES_/g, a.call(e, s ? 1 : Math.ceil(i / o))).replace(/_ENTRIES_/g, e.api.i18n("entries", "", n)).replace(/_ENTRIES-MAX_/g, e.api.i18n("entries", "", l)).replace(/_ENTRIES-TOTAL_/g, e.api.i18n("entries", "", i)) } var et = [],
        n = Array.prototype;
    U = function(e, t) { if (!(this instanceof U)) return new U(e, t);

        function n(e) { e = e, t = $.settings, a = h(t, "nTable"); var n, t, a, r = e ? e.nTable && e.oFeatures ? [e] : e.nodeName && "table" === e.nodeName.toLowerCase() ? -1 !== (r = a.indexOf(e)) ? [t[r]] : null : e && "function" == typeof e.settings ? e.settings().toArray() : ("string" == typeof e ? n = B(e).get() : e instanceof B && (n = e.get()), n ? t.filter(function(e, t) { return n.includes(a[t]) }) : void 0) : [];
            r && o.push.apply(o, r) } var o = []; if (Array.isArray(e))
            for (var a = 0, r = e.length; a < r; a++) n(e[a]);
        else n(e);
        this.context = 1 < o.length ? x(o) : o, t && this.push.apply(this, t), this.selector = { rows: null, cols: null, opts: null }, U.extend(this, this, et) }, $.Api = U, B.extend(U.prototype, { any: function() { return 0 !== this.count() }, context: [], count: function() { return this.flatten().length }, each: function(e) { for (var t = 0, n = this.length; t < n; t++) e.call(this, this[t], t, this); return this }, eq: function(e) { var t = this.context; return t.length > e ? new U(t[e], this[e]) : null }, filter: function(e) { e = n.filter.call(this, e, this); return new U(this.context, e) }, flatten: function() { var e = []; return new U(this.context, e.concat.apply(e, this.toArray())) }, get: function(e) { return this[e] }, join: n.join, includes: function(e) { return -1 !== this.indexOf(e) }, indexOf: n.indexOf, iterator: function(e, t, n, a) { var r, o, i, l, s, u, c, d, f = [],
                h = this.context,
                p = this.selector; for ("string" == typeof e && (a = n, n = t, t = e, e = !1), o = 0, i = h.length; o < i; o++) { var g = new U(h[o]); if ("table" === t) void 0 !== (r = n.call(g, h[o], o)) && f.push(r);
                else if ("columns" === t || "rows" === t) void 0 !== (r = n.call(g, h[o], this[o], o)) && f.push(r);
                else if ("every" === t || "column" === t || "column-rows" === t || "row" === t || "cell" === t)
                    for (c = this[o], "column-rows" === t && (u = ct(h[o], p.opts)), l = 0, s = c.length; l < s; l++) d = c[l], void 0 !== (r = "cell" === t ? n.call(g, h[o], d.row, d.column, o, l) : n.call(g, h[o], d, o, l, u)) && f.push(r) } return f.length || a ? ((e = (a = new U(h, e ? f.concat.apply([], f) : f)).selector).rows = p.rows, e.cols = p.cols, e.opts = p.opts, a) : this }, lastIndexOf: n.lastIndexOf, length: 0, map: function(e) { e = n.map.call(this, e, this); return new U(this.context, e) }, pluck: function(e) { var t = $.util.get(e); return this.map(function(e) { return t(e) }) }, pop: n.pop, push: n.push, reduce: n.reduce, reduceRight: n.reduceRight, reverse: n.reverse, selector: null, shift: n.shift, slice: function() { return new U(this.context, this) }, sort: n.sort, splice: n.splice, toArray: function() { return n.slice.call(this) }, to$: function() { return B(this) }, toJQuery: function() { return B(this) }, unique: function() { return new U(this.context, x(this.toArray())) }, unshift: n.unshift }), q.__apiStruct = et, U.extend = function(e, t, n) { if (n.length && t && (t instanceof U || t.__dt_wrapper))
            for (var a, r = 0, o = n.length; r < o; r++) t[(a = n[r]).name] = "function" === a.type ? function(t, n, a) { return function() { var e = n.apply(t || this, arguments); return U.extend(e, e, a.methodExt), e } }(e, a.val, a) : "object" === a.type ? {} : a.val, t[a.name].__dt_wrapper = !0, U.extend(e, t[a.name], a.propExt) }, U.register = t = function(e, t) { if (Array.isArray(e))
            for (var n = 0, a = e.length; n < a; n++) U.register(e[n], t);
        else
            for (var r = e.split("."), o = et, i = 0, l = r.length; i < l; i++) { var s, u, c = function(e, t) { for (var n = 0, a = e.length; n < a; n++)
                        if (e[n].name === t) return e[n];
                    return null }(o, u = (s = -1 !== r[i].indexOf("()")) ? r[i].replace("()", "") : r[i]);
                c || o.push(c = { name: u, val: {}, methodExt: [], propExt: [], type: "object" }), i === l - 1 ? (c.val = t, c.type = "function" == typeof t ? "function" : B.isPlainObject(t) ? "object" : "other") : o = s ? c.methodExt : c.propExt } }, U.registerPlural = e = function(e, t, n) { U.register(e, n), U.register(t, function() { var e = n.apply(this, arguments); return e === this ? this : e instanceof U ? e.length ? Array.isArray(e[0]) ? new U(e.context, e[0]) : e[0] : void 0 : e }) };

    function tt(e, t) { var n, a; return Array.isArray(e) ? (n = [], e.forEach(function(e) { e = tt(e, t);
            n.push.apply(n, e) }), n.filter(function(e) { return e })) : "number" == typeof e ? [t[e]] : (a = t.map(function(e) { return e.nTable }), B(a).filter(e).map(function() { var e = a.indexOf(this); return t[e] }).toArray()) }

    function nt(r, o, e) { var t, n;
        e && (t = new U(r)).one("draw", function() { e(t.ajax.json()) }), "ssp" == te(r) ? c(r, o) : (w(r, !0), (n = r.jqXHR) && 4 !== n.readyState && n.abort(), Ie(r, {}, function(e) { he(r); for (var t = Ae(r, e), n = 0, a = t.length; n < a; n++) Y(r, t[n]);
            c(r, o), ke(r), w(r, !1) })) }

    function at(e, t, n, a, r) { for (var o, i, l, s, u = [], c = typeof t, d = 0, f = (t = t && "string" != c && "function" != c && void 0 !== t.length ? t : [t]).length; d < f; d++)
            for (l = 0, s = (i = t[d] && t[d].split && !t[d].match(/[[(:]/) ? t[d].split(",") : [t[d]]).length; l < s; l++)(o = (o = n("string" == typeof i[l] ? i[l].trim() : i[l])).filter(function(e) { return null != e })) && o.length && (u = u.concat(o)); var h = C.selector[e]; if (h.length)
            for (d = 0, f = h.length; d < f; d++) u = h[d](a, r, u); return x(u) }

    function rt(e) { return (e = e || {}).filter && void 0 === e.search && (e.search = e.filter), B.extend({ search: "none", order: "current", page: "all" }, e) }

    function ot(e) { var t = new U(e.context[0]); return e.length && t.push(e[0]), t.selector = e.selector, t.length && 1 < t[0].length && t[0].splice(1), t }
    t("tables()", function(e) { return null != e ? new U(tt(e, this.context)) : this }), t("table()", function(e) { var e = this.tables(e),
            t = e.context; return t.length ? new U(t[0]) : e }), [
        ["nodes", "node", "nTable"],
        ["body", "body", "nTBody"],
        ["header", "header", "nTHead"],
        ["footer", "footer", "nTFoot"]
    ].forEach(function(t) { e("tables()." + t[0] + "()", "table()." + t[1] + "()", function() { return this.iterator("table", function(e) { return e[t[2]] }, 1) }) }), [
        ["header", "aoHeader"],
        ["footer", "aoFooter"]
    ].forEach(function(n) { t("table()." + n[0] + ".structure()", function(e) { var e = this.columns(e).indexes().flatten(),
                t = this.context[0]; return De(t, t[n[1]], e) }) }), e("tables().containers()", "table().container()", function() { return this.iterator("table", function(e) { return e.nTableWrapper }, 1) }), t("tables().every()", function(n) { var a = this; return this.iterator("table", function(e, t) { n.call(a.table(t), t) }) }), t("caption()", function(r, o) { var e, t = this.context; return void 0 === r ? (e = t[0].captionNode) && t.length ? e.innerHTML : null : this.iterator("table", function(e) { var t = B(e.nTable),
                n = B(e.captionNode),
                a = B(e.nTableWrapper);
            n.length || (n = B("<caption/>").html(r), e.captionNode = n[0], o) || (t.prepend(n), o = n.css("caption-side")), n.html(r), o && (n.css("caption-side", o), n[0]._captionSide = o), (a.find("div.dataTables_scroll").length ? (e = "top" === o ? "Head" : "Foot", a.find("div.dataTables_scroll" + e + " table")) : t).prepend(n) }, 1) }), t("caption.node()", function() { var e = this.context; return e.length ? e[0].captionNode : null }), t("draw()", function(t) { return this.iterator("table", function(e) { "page" === t ? S(e) : c(e, !1 === (t = "string" == typeof t ? "full-hold" !== t : t)) }) }), t("page()", function(t) { return void 0 === t ? this.page.info().page : this.iterator("table", function(e) { Me(e, t) }) }), t("page.info()", function() { var e, t, n, a, r; if (0 !== this.context.length) return t = (e = this.context[0])._iDisplayStart, n = e.oFeatures.bPaginate ? e._iDisplayLength : -1, a = e.fnRecordsDisplay(), { page: (r = -1 === n) ? 0 : Math.floor(t / n), pages: r ? 1 : Math.ceil(a / n), start: t, end: e.fnDisplayEnd(), length: n, recordsTotal: e.fnRecordsTotal(), recordsDisplay: a, serverSide: "ssp" === te(e) } }), t("page.len()", function(t) { return void 0 === t ? 0 !== this.context.length ? this.context[0]._iDisplayLength : void 0 : this.iterator("table", function(e) { Ee(e, t) }) }), t("ajax.json()", function() { var e = this.context; if (0 < e.length) return e[0].json }), t("ajax.params()", function() { var e = this.context; if (0 < e.length) return e[0].oAjaxData }), t("ajax.reload()", function(t, n) { return this.iterator("table", function(e) { nt(e, !1 === n, t) }) }), t("ajax.url()", function(t) { var e = this.context; return void 0 === t ? 0 === e.length ? void 0 : (e = e[0], B.isPlainObject(e.ajax) ? e.ajax.url : e.ajax) : this.iterator("table", function(e) { B.isPlainObject(e.ajax) ? e.ajax.url = t : e.ajax = t }) }), t("ajax.url().load()", function(t, n) { return this.iterator("table", function(e) { nt(e, !1 === n, t) }) });

    function it(o, i, e, t) {
        function l(e, t) { var n; if (Array.isArray(e) || e instanceof B)
                for (var a = 0, r = e.length; a < r; a++) l(e[a], t);
            else e.nodeName && "tr" === e.nodeName.toLowerCase() ? (e.setAttribute("data-dt-row", i.idx), s.push(e)) : (n = B("<tr><td></td></tr>").attr("data-dt-row", i.idx).addClass(t), B("td", n).addClass(t).html(e)[0].colSpan = H(o), s.push(n[0])) } var s = [];
        l(e, t), i._details && i._details.detach(), i._details = B(s), i._detailsShow && i._details.insertAfter(i.nTr) }

    function lt(e, t) { var n = e.context; if (n.length && e.length) { var a = n[0].aoData[e[0]]; if (a._details) {
                (a._detailsShow = t) ? (a._details.insertAfter(a.nTr), B(a.nTr).addClass("dt-hasChild")) : (a._details.detach(), B(a.nTr).removeClass("dt-hasChild")), ee(n[0], null, "childRow", [t, e.row(e[0])]); var i = n[0],
                    r = new U(i),
                    a = ".dt.DT_details",
                    t = "draw" + a,
                    e = "column-sizing" + a,
                    a = "destroy" + a,
                    l = i.aoData; if (r.off(t + " " + e + " " + a), h(l, "_details").length > 0) { r.on(t, function(e, t) { if (i !== t) return;
                        r.rows({ page: "current" }).eq(0).each(function(e) { var t = l[e]; if (t._detailsShow) t._details.insertAfter(t.nTr) }) });
                    r.on(e, function(e, t) { if (i !== t) return; var n, a = H(t); for (var r = 0, o = l.length; r < o; r++) { n = l[r]; if (n._details) n._details.each(function() { var e = B(this).children("td"); if (e.length == 1) e.attr("colspan", a) }) } });
                    r.on(a, function(e, t) { if (i !== t) return; for (var n = 0, a = l.length; n < a; n++)
                            if (l[n]._details) ht(r, n) }) }
                ft(n) } } }

    function st(e, t, n, a, r, o) { for (var i = [], l = 0, s = r.length; l < s; l++) i.push(G(e, r[l], t, o)); return i }

    function ut(t, n) { return function(e) { return y(e) || "string" != typeof e || (e = e.replace(d, " "), t && (e = I(e)), n && (e = R(e, !0))), e } } var ct = function(e, t) { var n, a = [],
                r = e.aiDisplay,
                o = e.aiDisplayMaster,
                i = t.search,
                l = t.order,
                t = t.page; if ("ssp" == te(e)) return "removed" === i ? [] : f(0, o.length); if ("current" == t)
                for (u = e._iDisplayStart, c = e.fnDisplayEnd(); u < c; u++) a.push(r[u]);
            else if ("current" == l || "applied" == l) { if ("none" == i) a = o.slice();
                else if ("applied" == i) a = r.slice();
                else if ("removed" == i) { for (var s = {}, u = 0, c = r.length; u < c; u++) s[r[u]] = null;
                    o.forEach(function(e) { Object.prototype.hasOwnProperty.call(s, e) || a.push(e) }) } } else if ("index" == l || "original" == l)
                for (u = 0, c = e.aoData.length; u < c; u++) e.aoData[u] && ("none" == i || -1 === (n = r.indexOf(u)) && "removed" == i || 0 <= n && "applied" == i) && a.push(u);
            else if ("number" == typeof l) { var d = Ue(e, l, "asc"); if ("none" === i) a = d;
                else
                    for (u = 0; u < d.length; u++)(-1 === (n = r.indexOf(d[u])) && "removed" == i || 0 <= n && "applied" == i) && a.push(d[u]) } return a },
        dt = (t("rows()", function(a, l) { void 0 === a ? a = "" : B.isPlainObject(a) && (l = a, a = ""), l = rt(l); var e = this.iterator("table", function(e) { return t = at("row", t = a, function(n) { var e = g(n),
                        a = r.aoData; if (null !== e && !o) return [e]; if (i = i || ct(r, o), null !== e && -1 !== i.indexOf(e)) return [e]; if (null == n || "" === n) return i; if ("function" == typeof n) return i.map(function(e) { var t = a[e]; return n(e, t._aData, t.nTr) ? e : null }); if (n.nodeName) return e = n._DT_RowIndex, t = n._DT_CellIndex, void 0 !== e ? a[e] && a[e].nTr === n ? [e] : [] : t ? a[t.row] && a[t.row].nTr === n.parentNode ? [t.row] : [] : (e = B(n).closest("*[data-dt-row]")).length ? [e.data("dt-row")] : []; if ("string" == typeof n && "#" === n.charAt(0)) { var t = r.aIds[n.replace(/^#/, "")]; if (void 0 !== t) return [t.idx] }
                    e = b(v(r.aoData, i, "nTr")); return B(e).filter(n).map(function() { return this._DT_RowIndex }).toArray() }, r = e, o = l), "current" !== o.order && "applied" !== o.order || (n = r.aiDisplayMaster, t.sort(function(e, t) { return n.indexOf(e) - n.indexOf(t) })), t; var r, t, o, i, n }, 1); return e.selector.rows = a, e.selector.opts = l, e }), t("rows().nodes()", function() { return this.iterator("row", function(e, t) { return e.aoData[t].nTr || void 0 }, 1) }), t("rows().data()", function() { return this.iterator(!0, "rows", function(e, t) { return v(e.aoData, t, "_aData") }, 1) }), e("rows().cache()", "row().cache()", function(n) { return this.iterator("row", function(e, t) { e = e.aoData[t]; return "search" === n ? e._aFilterData : e._aSortData }, 1) }), e("rows().invalidate()", "row().invalidate()", function(n) { return this.iterator("row", function(e, t) { pe(e, t, n) }) }), e("rows().indexes()", "row().index()", function() { return this.iterator("row", function(e, t) { return t }, 1) }), e("rows().ids()", "row().id()", function(e) { for (var t = [], n = this.context, a = 0, r = n.length; a < r; a++)
                for (var o = 0, i = this[a].length; o < i; o++) { var l = n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);
                    t.push((!0 === e ? "#" : "") + l) }
            return new U(n, t) }), e("rows().remove()", "row().remove()", function() { return this.iterator("row", function(e, t) { var n = e.aoData,
                    a = n[t],
                    r = e.aiDisplayMaster.indexOf(t),
                    r = (-1 !== r && e.aiDisplayMaster.splice(r, 1), -1 !== (r = e.aiDisplay.indexOf(t)) && e.aiDisplay.splice(r, 1), 0 < e._iRecordsDisplay && e._iRecordsDisplay--, Ze(e), e.rowIdFn(a._aData));
                void 0 !== r && delete e.aIds[r], n[t] = null }), this }), t("rows.add()", function(o) { var e = this.iterator("table", function(e) { for (var t, n = [], a = 0, r = o.length; a < r; a++)(t = o[a]).nodeName && "TR" === t.nodeName.toUpperCase() ? n.push(se(e, t)[0]) : n.push(Y(e, t)); return n }, 1),
                t = this.rows(-1); return t.pop(), t.push.apply(t, e), t }), t("row()", function(e, t) { return ot(this.rows(e, t)) }), t("row().data()", function(e) { var t, n = this.context; return void 0 === e ? n.length && this.length && this[0].length ? n[0].aoData[this[0]]._aData : void 0 : ((t = n[0].aoData[this[0]])._aData = e, Array.isArray(e) && t.nTr && t.nTr.id && m(n[0].rowId)(e, t.nTr.id), pe(n[0], this[0], "data"), this) }), t("row().node()", function() { var e = this.context; return e.length && this.length && this[0].length && e[0].aoData[this[0]].nTr || null }), t("row.add()", function(t) { t instanceof B && t.length && (t = t[0]); var e = this.iterator("table", function(e) { return t.nodeName && "TR" === t.nodeName.toUpperCase() ? se(e, t)[0] : Y(e, t) }); return this.row(e[0]) }), B(_).on("plugin-init.dt", function(e, t) { var a = new U(t);
            a.on("stateSaveParams.DT", function(e, t, n) { for (var a = t.rowIdFn, r = t.aiDisplayMaster, o = [], i = 0; i < r.length; i++) { var l = r[i],
                        l = t.aoData[l];
                    l._detailsShow && o.push("#" + a(l._aData)) }
                n.childRows = o }), a.on("stateLoaded.DT", function(e, t, n) { dt(a, n) }), dt(a, a.state.loaded()) }), function(e, t) { t && t.childRows && e.rows(t.childRows.map(function(e) { return e.replace(/:/g, "\\:") })).every(function() { ee(e.settings()[0], null, "requestChild", [this]) }) }),
        ft = $.util.throttle(function(e) { ze(e[0]) }, 500),
        ht = function(e, t) { var n = e.context;
            n.length && (t = n[0].aoData[void 0 !== t ? t : e[0]]) && t._details && (t._details.remove(), t._detailsShow = void 0, t._details = void 0, B(t.nTr).removeClass("dt-hasChild"), ft(n)) },
        pt = "row().child",
        gt = pt + "()",
        mt = (t(gt, function(e, t) { var n = this.context; return void 0 === e ? n.length && this.length ? n[0].aoData[this[0]]._details : void 0 : (!0 === e ? this.child.show() : !1 === e ? ht(this) : n.length && this.length && it(n[0], n[0].aoData[this[0]], e, t), this) }), t([pt + ".show()", gt + ".show()"], function() { return lt(this, !0), this }), t([pt + ".hide()", gt + ".hide()"], function() { return lt(this, !1), this }), t([pt + ".remove()", gt + ".remove()"], function() { return ht(this), this }), t(pt + ".isShown()", function() { var e = this.context; return e.length && this.length && e[0].aoData[this[0]]._detailsShow || !1 }), /^([^:]+):(name|title|visIdx|visible)$/),
        gt = (t("columns()", function(n, a) { void 0 === n ? n = "" : B.isPlainObject(n) && (a = n, n = ""), a = rt(a); var e = this.iterator("table", function(e) { return t = n, l = a, s = (i = e).aoColumns, u = h(s, "sName"), c = h(s, "sTitle"), e = $.util.get("[].[].cell")(i.aoHeader), d = x(O([], e)), at("column", t, function(n) { var a, e = g(n); if ("" === n) return f(s.length); if (null !== e) return [0 <= e ? e : s.length + e]; if ("function" == typeof n) return a = ct(i, l), s.map(function(e, t) { return n(t, st(i, t, 0, 0, a)) ? t : null }); var r = "string" == typeof n ? n.match(mt) : ""; if (r) switch (r[2]) {
                        case "visIdx":
                        case "visible":
                            var t, o = parseInt(r[1], 10); return o < 0 ? [(t = s.map(function(e, t) { return e.bVisible ? t : null }))[t.length + o]] : [M(i, o)];
                        case "name":
                            return u.map(function(e, t) { return e === r[1] ? t : null });
                        case "title":
                            return c.map(function(e, t) { return e === r[1] ? t : null });
                        default:
                            return [] }
                    return n.nodeName && n._DT_CellIndex ? [n._DT_CellIndex.column] : (e = B(d).filter(n).map(function() { return le(this) }).toArray()).length || !n.nodeName ? e : (e = B(n).closest("*[data-dt-column]")).length ? [e.data("dt-column")] : [] }, i, l); var i, t, l, s, u, c, d }, 1); return e.selector.cols = n, e.selector.opts = a, e }), e("columns().header()", "column().header()", function(a) { return this.iterator("column", function(e, t) { var n = e.aoHeader; return n[void 0 !== a ? a : e.bSortCellsTop ? 0 : n.length - 1][t].cell }, 1) }), e("columns().footer()", "column().footer()", function(n) { return this.iterator("column", function(e, t) { return e.aoFooter.length ? e.aoFooter[void 0 !== n ? n : 0][t].cell : null }, 1) }), e("columns().data()", "column().data()", function() { return this.iterator("column-rows", st, 1) }), e("columns().render()", "column().render()", function(o) { return this.iterator("column-rows", function(e, t, n, a, r) { return st(e, t, 0, 0, r, o) }, 1) }), e("columns().dataSrc()", "column().dataSrc()", function() { return this.iterator("column", function(e, t) { return e.aoColumns[t].mData }, 1) }), e("columns().cache()", "column().cache()", function(o) { return this.iterator("column-rows", function(e, t, n, a, r) { return v(e.aoData, r, "search" === o ? "_aFilterData" : "_aSortData", t) }, 1) }), e("columns().init()", "column().init()", function() { return this.iterator("column", function(e, t) { return e.aoColumns[t] }, 1) }), e("columns().nodes()", "column().nodes()", function() { return this.iterator("column-rows", function(e, t, n, a, r) { return v(e.aoData, r, "anCells", t) }, 1) }), e("columns().titles()", "column().title()", function(n, a) { return this.iterator("column", function(e, t) { "number" == typeof n && (a = n, n = void 0);
                t = B("span.dt-column-title", this.column(t).header(a)); return void 0 !== n ? (t.html(n), this) : t.html() }, 1) }), e("columns().types()", "column().type()", function() { return this.iterator("column", function(e, t) { t = e.aoColumns[t].sType; return t || X(e), t }, 1) }), e("columns().visible()", "column().visible()", function(n, a) { var t = this,
                r = [],
                e = this.iterator("column", function(e, t) { if (void 0 === n) return e.aoColumns[t].bVisible;! function(e, t, n) { var a, r, o = e.aoColumns,
                            i = o[t],
                            l = e.aoData; if (void 0 === n) return i.bVisible; if (i.bVisible === n) return !1; if (n)
                            for (var s = h(o, "bVisible").indexOf(!0, t + 1), u = 0, c = l.length; u < c; u++) l[u] && (r = l[u].nTr, a = l[u].anCells, r) && r.insertBefore(a[t], a[s] || null);
                        else B(h(e.aoData, "anCells", t)).detach(); return i.bVisible = n, Xe(e), !0 }(e, t, n) || r.push(t) }); return void 0 !== n && this.iterator("table", function(e) { xe(e, e.aoHeader), xe(e, e.aoFooter), e.aiDisplay.length || B(e.nTBody).find("td[colspan]").attr("colspan", H(e)), ze(e), t.iterator("column", function(e, t) { r.includes(t) && ee(e, null, "column-visibility", [e, t, n, a]) }), r.length && (void 0 === a || a) && t.columns.adjust() }), e }), e("columns().widths()", "column().width()", function() { var e = this.columns(":visible").count(),
                e = B("<tr>").html("<td>" + Array(e).join("</td><td>") + "</td>"),
                n = (B(this.table().body()).append(e), e.children().map(function() { return B(this).outerWidth() })); return e.remove(), this.iterator("column", function(e, t) { e = T(e, t); return null !== e ? n[e] : 0 }, 1) }), e("columns().indexes()", "column().index()", function(n) { return this.iterator("column", function(e, t) { return "visible" === n ? T(e, t) : t }, 1) }), t("columns.adjust()", function() { return this.iterator("table", function(e) { E(e) }, 1) }), t("column.index()", function(e, t) { var n; if (0 !== this.context.length) return n = this.context[0], "fromVisible" === e || "toData" === e ? M(n, t) : "fromData" === e || "toVisible" === e ? T(n, t) : void 0 }), t("column()", function(e, t) { return ot(this.columns(e, t)) }), t("cells()", function(g, e, m) { var a, r, o, i, l, s, t; return B.isPlainObject(g) && (void 0 === g.row ? (m = g, g = null) : (m = e, e = null)), B.isPlainObject(e) && (m = e, e = null), null == e ? this.iterator("table", function(e) { return a = e, e = g, t = rt(m), d = a.aoData, f = ct(a, t), n = b(v(d, f, "anCells")), h = B(O([], n)), p = a.aoColumns.length, at("cell", e, function(e) { var t, n = "function" == typeof e; if (null == e || n) { for (o = [], i = 0, l = f.length; i < l; i++)
                            for (r = f[i], s = 0; s < p; s++) u = { row: r, column: s }, (!n || (c = d[r], e(u, G(a, r, s), c.anCells ? c.anCells[s] : null))) && o.push(u); return o } return B.isPlainObject(e) ? void 0 !== e.column && void 0 !== e.row && -1 !== f.indexOf(e.row) ? [e] : [] : (t = h.filter(e).map(function(e, t) { return { row: t._DT_CellIndex.row, column: t._DT_CellIndex.column } }).toArray()).length || !e.nodeName ? t : (c = B(e).closest("*[data-dt-row]")).length ? [{ row: c.data("dt-row"), column: c.data("dt-column") }] : [] }, a, t); var a, t, r, o, i, l, s, u, c, d, f, n, h, p }) : (t = m ? { page: m.page, order: m.order, search: m.search } : {}, a = this.columns(e, t), r = this.rows(g, t), t = this.iterator("table", function(e, t) { var n = []; for (o = 0, i = r[t].length; o < i; o++)
                    for (l = 0, s = a[t].length; l < s; l++) n.push({ row: r[t][o], column: a[t][l] }); return n }, 1), t = m && m.selected ? this.cells(t, m) : t, B.extend(t.selector, { cols: e, rows: g, opts: m }), t) }), e("cells().nodes()", "cell().node()", function() { return this.iterator("cell", function(e, t, n) { e = e.aoData[t]; return e && e.anCells ? e.anCells[n] : void 0 }, 1) }), t("cells().data()", function() { return this.iterator("cell", function(e, t, n) { return G(e, t, n) }, 1) }), e("cells().cache()", "cell().cache()", function(a) { return a = "search" === a ? "_aFilterData" : "_aSortData", this.iterator("cell", function(e, t, n) { return e.aoData[t][a][n] }, 1) }), e("cells().render()", "cell().render()", function(a) { return this.iterator("cell", function(e, t, n) { return G(e, t, n, a) }, 1) }), e("cells().indexes()", "cell().index()", function() { return this.iterator("cell", function(e, t, n) { return { row: t, column: n, columnVisible: T(e, n) } }, 1) }), e("cells().invalidate()", "cell().invalidate()", function(a) { return this.iterator("cell", function(e, t, n) { pe(e, t, a, n) }) }), t("cell()", function(e, t, n) { return ot(this.cells(e, t, n)) }), t("cell().data()", function(e) { var t, n, a, r, o, i = this.context,
                l = this[0]; return void 0 === e ? i.length && l.length ? G(i[0], l[0].row, l[0].column) : void 0 : (t = i[0], n = l[0].row, a = l[0].column, r = t.aoColumns[a], o = t.aoData[n]._aData, r.fnSetData(o, e, { settings: t, row: n, col: a }), pe(i[0], l[0].row, "data", l[0].column), this) }), t("order()", function(t, e) { var n = this.context,
                a = Array.prototype.slice.call(arguments); return void 0 === t ? 0 !== n.length ? n[0].aaSorting : void 0 : ("number" == typeof t ? t = [
                [t, e]
            ] : 1 < a.length && (t = a), this.iterator("table", function(e) { e.aaSorting = Array.isArray(t) ? t.slice() : t })) }), t("order.listener()", function(t, n, a) { return this.iterator("table", function(e) { Ve(e, t, {}, n, a) }) }), t("order.fixed()", function(t) { var e; return t ? this.iterator("table", function(e) { e.aaSortingFixed = B.extend(!0, {}, t) }) : (e = (e = this.context).length ? e[0].aaSortingFixed : void 0, Array.isArray(e) ? { pre: e } : e) }), t(["columns().order()", "column().order()"], function(n) { var a = this; return n ? this.iterator("table", function(e, t) { e.aaSorting = a[t].map(function(e) { return [e, n] }) }) : this.iterator("column", function(e, t) { for (var n = qe(e), a = 0, r = n.length; a < r; a++)
                    if (n[a].col === t) return n[a].dir;
                return null }, 1) }), e("columns().orderable()", "column().orderable()", function(n) { return this.iterator("column", function(e, t) { e = e.aoColumns[t]; return n ? e.asSorting : e.bSortable }, 1) }), t("processing()", function(t) { return this.iterator("table", function(e) { w(e, t) }) }), t("search()", function(t, n, a, r) { var e = this.context; return void 0 === t ? 0 !== e.length ? e[0].oPreviousSearch.search : void 0 : this.iterator("table", function(e) { e.oFeatures.bFilter && Le(e, "object" == typeof n ? B.extend(e.oPreviousSearch, n, { search: t }) : B.extend(e.oPreviousSearch, { search: t, regex: null !== n && n, smart: null === a || a, caseInsensitive: null === r || r })) }) }), t("search.fixed()", function(t, n) { var e = this.iterator(!0, "table", function(e) { e = e.searchFixed; return t ? void 0 === n ? e[t] : (null === n ? delete e[t] : e[t] = n, this) : Object.keys(e) }); return void 0 !== t && void 0 === n ? e[0] : e }), e("columns().search()", "column().search()", function(a, r, o, i) { return this.iterator("column", function(e, t) { var n = e.aoPreSearchCols; if (void 0 === a) return n[t].search;
                e.oFeatures.bFilter && ("object" == typeof r ? B.extend(n[t], r, { search: a }) : B.extend(n[t], { search: a, regex: null !== r && r, smart: null === o || o, caseInsensitive: null === i || i }), Le(e, e.oPreviousSearch)) }) }), t(["columns().search.fixed()", "column().search.fixed()"], function(n, a) { var e = this.iterator(!0, "column", function(e, t) { e = e.aoColumns[t].searchFixed; return n ? void 0 === a ? e[n] : (null === a ? delete e[n] : e[n] = a, this) : Object.keys(e) }); return void 0 !== n && void 0 === a ? e[0] : e }), t("state()", function(e, t) { var n; return e ? (n = B.extend(!0, {}, e), this.iterator("table", function(e) {!1 !== t && (n.time = +new Date + 100), Ye(e, n, function() {}) })) : this.context.length ? this.context[0].oSavedState : null }), t("state.clear()", function() { return this.iterator("table", function(e) { e.fnStateSaveCallback.call(e.oInstance, e, {}) }) }), t("state.loaded()", function() { return this.context.length ? this.context[0].oLoadedState : null }), t("state.save()", function() { return this.iterator("table", function(e) { ze(e) }) }), $.use = function(e, t) { "lib" === t || e.fn ? B = e : "win" == t || e.document ? _ = (q = e).document : "datetime" !== t && "DateTime" !== e.type || ($.DateTime = e) }, $.factory = function(e, t) { var n = !1; return e && e.document && (_ = (q = e).document), t && t.fn && t.fn.jquery && (B = t, n = !0), n }, $.versionCheck = function(e, t) { for (var n, a, r = (t || $.version).split("."), o = e.split("."), i = 0, l = o.length; i < l; i++)
                if ((n = parseInt(r[i], 10) || 0) !== (a = parseInt(o[i], 10) || 0)) return a < n;
            return !0 }, $.isDataTable = function(e) { var r = B(e).get(0),
                o = !1; return e instanceof $.Api || (B.each($.settings, function(e, t) { var n = t.nScrollHead ? B("table", t.nScrollHead)[0] : null,
                    a = t.nScrollFoot ? B("table", t.nScrollFoot)[0] : null;
                t.nTable !== r && n !== r && a !== r || (o = !0) }), o) }, $.tables = function(t) { var e = !1,
                n = (B.isPlainObject(t) && (e = t.api, t = t.visible), $.settings.filter(function(e) { return !(t && !B(e.nTable).is(":visible")) }).map(function(e) { return e.nTable })); return e ? new U(n) : n }, $.camelToHungarian = z, t("$()", function(e, t) { t = this.rows(t).nodes(), t = B(t); return B([].concat(t.filter(e).toArray(), t.find(e).toArray())) }), B.each(["on", "one", "off"], function(e, n) { t(n + "()", function() { var e = Array.prototype.slice.call(arguments),
                    t = (e[0] = e[0].split(/\s/).map(function(e) { return e.match(/\.dt\b/) ? e : e + ".dt" }).join(" "), B(this.tables().nodes())); return t[n].apply(t, e), this }) }), t("clear()", function() { return this.iterator("table", function(e) { he(e) }) }), t("error()", function(t) { return this.iterator("table", function(e) { Z(e, 0, t) }) }), t("settings()", function() { return new U(this.context, this.context) }), t("init()", function() { var e = this.context; return e.length ? e[0].oInit : null }), t("data()", function() { return this.iterator("table", function(e) { return h(e.aoData, "_aData") }).flatten() }), t("trigger()", function(t, n, a) { return this.iterator("table", function(e) { return ee(e, null, t, n, a) }).flatten() }), t("ready()", function(e) { var t = this.context; return e ? this.tables().every(function() { this.context[0]._bInitComplete ? e.call(this) : this.on("init", function() { e.call(this) }) }) : t.length ? t[0]._bInitComplete || !1 : null }), t("destroy()", function(c) { return c = c || !1, this.iterator("table", function(e) { var t = e.oClasses,
                    n = e.nTable,
                    a = e.nTBody,
                    r = e.nTHead,
                    o = e.nTFoot,
                    i = B(n),
                    a = B(a),
                    l = B(e.nTableWrapper),
                    s = e.aoData.map(function(e) { return e ? e.nTr : null }),
                    u = t.order,
                    o = (e.bDestroying = !0, ee(e, "aoDestroyCallback", "destroy", [e], !0), c || new U(e).columns().visible(!0), l.off(".DT").find(":not(tbody *)").off(".DT"), B(q).off(".DT-" + e.sInstance), n != r.parentNode && (i.children("thead").detach(), i.append(r)), o && n != o.parentNode && (i.children("tfoot").detach(), i.append(o)), e.aaSorting = [], e.aaSortingFixed = [], $e(e), B("th, td", r).removeClass(u.canAsc + " " + u.canDesc + " " + u.isAsc + " " + u.isDesc).css("width", ""), a.children().detach(), a.append(s), e.nTableWrapper.parentNode),
                    r = e.nTableWrapper.nextSibling,
                    u = c ? "remove" : "detach",
                    a = (i[u](), l[u](), !c && o && (o.insertBefore(n, r), i.css("width", e.sDestroyWidth).removeClass(t.table)), $.settings.indexOf(e)); - 1 !== a && $.settings.splice(a, 1) }) }), B.each(["column", "row", "cell"], function(e, s) { t(s + "s().every()", function(a) { var r, o = this.selector.opts,
                    i = this,
                    l = 0; return this.iterator("every", function(e, t, n) { r = i[s](t, o), "cell" === s ? a.call(r, r[0][0].row, r[0][0].column, n, l) : a.call(r, t, n, l), l++ }) }) }), t("i18n()", function(e, t, n) { var a = this.context[0],
                e = J(e)(a.oLanguage); return "string" == typeof(e = B.isPlainObject(e = void 0 === e ? t : e) ? void 0 !== n && void 0 !== e[n] ? e[n] : e._ : e) ? e.replace("%d", n) : e }), $.version = "2.0.0", $.settings = [], $.models = {}, $.models.oSearch = { caseInsensitive: !0, search: "", regex: !1, smart: !0, return: !1 }, $.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, src: null, idx: -1, displayData: null }, $.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null, maxLenString: null, searchFixed: null }, $.defaults = { aaData: null, aaSorting: [
                [0, "asc"]
            ], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], bAutoWidth: !0, bDeferRender: !0, bDestroy: !1, bFilter: !0, bInfo: !0, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: null, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function(e) { return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnStateLoadCallback: function(e) { try { return JSON.parse((-1 === e.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + e.sInstance + "_" + location.pathname)) } catch (e) { return {} } }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function(e, t) { try {
                    (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + e.sInstance + "_" + location.pathname, JSON.stringify(t)) } catch (e) {} }, fnStateSaveParams: null, iStateDuration: 7200, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: { oAria: { orderable: ": Activate to sort", orderableReverse: ": Activate to invert sorting", orderableRemove: ": Activate to remove sorting", paginate: { first: "First", last: "Last", next: "Next", previous: "Previous" } }, oPaginate: { sFirst: "«", sLast: "»", sNext: "›", sPrevious: "‹" }, entries: { _: "entries", 1: "entry" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_", sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_", sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "_MENU_ _ENTRIES_ per page", sLoadingRecords: "Loading...", sProcessing: "", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" }, oSearch: B.extend({}, $.models.oSearch), layout: { topStart: "pageLength", topEnd: "search", bottomStart: "info", bottomEnd: "paging" }, sDom: null, searchDelay: null, sPaginationType: "full_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId", caption: null }, k($.defaults), $.defaults.column = { aDataSort: null, iDataSort: -1, ariaTitle: "", asSorting: ["asc", "desc", ""], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }, k($.defaults.column), $.models.oSettings = { oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: !0, bLengthChange: !0, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollbarLeft: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, searchFixed: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", pagingControls: 0, iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, bAjaxDataGet: !0, jqXHR: null, json: void 0, oAjaxData: void 0, sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function() { return "ssp" == te(this) ? +this._iRecordsTotal : this.aiDisplayMaster.length }, fnRecordsDisplay: function() { return "ssp" == te(this) ? +this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function() { var e = this._iDisplayLength,
                    t = this._iDisplayStart,
                    n = t + e,
                    a = this.aiDisplay.length,
                    r = this.oFeatures,
                    o = r.bPaginate; return r.bServerSide ? !1 === o || -1 === e ? t + a : Math.min(t + e, this._iRecordsDisplay) : !o || a < n || -1 === e ? a : n }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null, caption: "", captionNode: null, colgroup: null }, $.ext = C = { buttons: {}, classes: {}, builder: "bs5/dt-2.0.0/r-3.0.0/sp-2.3.0/sl-2.0.0", errMode: "alert", feature: [], features: {}, search: [], selector: { cell: [], column: [], row: [] }, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { className: {}, detect: [], render: {}, search: {}, order: {} }, _unique: 0, fnVersionCheck: $.fnVersionCheck, iApiIndex: 0, sVersion: $.version }, B.extend(C, { afnFiltering: C.search, aTypes: C.type.detect, ofnSearch: C.type.search, oSort: C.type.order, afnSortData: C.order, aoFeatures: C.feature, oStdClasses: C.classes, oPagination: C.pager }), B.extend($.ext.classes, { container: "dt-container", empty: { row: "dt-empty" }, info: { container: "dt-info" }, length: { container: "dt-length", select: "dt-input" }, order: { canAsc: "dt-orderable-asc", canDesc: "dt-orderable-desc", isAsc: "dt-ordering-asc", isDesc: "dt-ordering-desc", none: "dt-orderable-none", position: "sorting_" }, processing: { container: "dt-processing" }, scrolling: { body: "dt-scroll-body", container: "dt-scroll", footer: { self: "dt-scroll-foot", inner: "dt-scroll-footInner" }, header: { self: "dt-scroll-head", inner: "dt-scroll-headInner" } }, search: { container: "dt-search", input: "dt-input" }, table: "dataTable", tbody: { cell: "", row: "" }, thead: { cell: "", row: "" }, tfoot: { cell: "", row: "" }, paging: { active: "current", button: "dt-paging-button", container: "dt-paging", disabled: "disabled" } }), $.ext.pager);
    B.extend(gt, { simple: function() { return ["previous", "next"] }, full: function() { return ["first", "previous", "next", "last"] }, numbers: function() { return ["numbers"] }, simple_numbers: function() { return ["previous", "numbers", "next"] }, full_numbers: function() { return ["first", "previous", "numbers", "next", "last"] }, first_last: function() { return ["first", "last"] }, first_last_numbers: function() { return ["first", "numbers", "last"] }, _numbers: At, numbers_length: 7 }), B.extend(!0, $.ext.renderer, { pagingButton: { _: function(e, t, n, a, r) { var e = e.oClasses.paging,
                    o = [e.button]; return a && o.push(e.active), r && o.push(e.disabled), { display: a = "ellipsis" === t ? B('<span class="ellipsis"></span>').html(n)[0] : B("<button>", { class: o.join(" "), role: "link", type: "button" }).html(n), clicker: a } } }, pagingContainer: { _: function(e, t) { return t } } });

    function vt(e) { return e.replace(/[\W]/g, "_") }

    function bt(e, t, n, a, r) { return q.moment ? e[t](r) : q.luxon ? e[n](r) : a ? e[a](r) : e } var yt = !1;

    function Dt(e, t, n) { var a; if (q.moment) { if (!(a = q.moment.utc(e, t, n, !0)).isValid()) return null } else if (q.luxon) { if (!(a = t && "string" == typeof e ? q.luxon.DateTime.fromFormat(e, t) : q.luxon.DateTime.fromISO(e)).isValid) return null;
            a.setLocale(n) } else t ? (yt || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), yt = !0) : a = new Date(e); return a }

    function xt(s) { return function(a, r, o, i) { 0 === arguments.length ? (o = "en", a = r = null) : 1 === arguments.length ? (o = "en", r = a, a = null) : 2 === arguments.length && (o = r, r = a, a = null); var l = "datetime" + (r ? "-" + vt(r) : ""); return $.ext.type.order[l] || $.type(l, { detect: function(e) { return e === l && l }, order: { pre: function(e) { return e.valueOf() } }, className: "dt-right" }),
                function(e, t) { var n; return null == e && (e = "--now" === i ? (n = new Date, new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()))) : ""), "type" === t ? l : "" === e ? "sort" !== t ? "" : Dt("0000-01-01 00:00:00", null, o) : !(null === r || a !== r || "sort" === t || "type" === t || e instanceof Date) || null === (n = Dt(e, a, o)) ? e : "sort" === t ? n : (e = null === r ? bt(n, "toDate", "toJSDate", "")[s]() : bt(n, "format", "toFormat", "toISOString", r), "display" === t ? u(e) : e) } } } var St = ",",
        Tt = "."; if (void 0 !== q.Intl) try { for (var wt = (new Intl.NumberFormat).formatToParts(100000.1), a = 0; a < wt.length; a++) "group" === wt[a].type ? St = wt[a].value : "decimal" === wt[a].type && (Tt = wt[a].value) } catch (e) {}
    $.datetime = function(n, a) { var r = "datetime-detect-" + vt(n);
        a = a || "en", $.ext.type.order[r] || $.type(r, { detect: function(e) { var t = Dt(e, n, a); return !("" !== e && !t) && r }, order: { pre: function(e) { return Dt(e, n, a) || 0 } }, className: "dt-right" }) }, $.render = { date: xt("toLocaleDateString"), datetime: xt("toLocaleString"), time: xt("toLocaleTimeString"), number: function(r, o, i, l, s) { return null == r && (r = St), null == o && (o = Tt), { display: function(e) { if ("number" != typeof e && "string" != typeof e) return e; if ("" === e || null === e) return e; var t = e < 0 ? "-" : "",
                        n = parseFloat(e),
                        a = Math.abs(n); if (1e11 <= a || a < 1e-4 && 0 !== a) return (a = n.toExponential(i).split(/e\+?/))[0] + " x 10<sup>" + a[1] + "</sup>"; if (isNaN(n)) return u(e);
                    n = n.toFixed(i), e = Math.abs(n);
                    a = parseInt(e, 10), n = i ? o + (e - a).toFixed(i).substring(2) : ""; return (t = 0 === a && 0 === parseFloat(n) ? "" : t) + (l || "") + a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r) + n + (s || "") } } }, text: function() { return { display: u, filter: u } } }; var i = $.ext.type,
        _t = ($.type = function(a, e, t) { if (!e) return { className: i.className[a], detect: i.detect.find(function(e) { return e.name === a }), order: { pre: i.order[a + "-pre"], asc: i.order[a + "-asc"], desc: i.order[a + "-desc"] }, render: i.render[a], search: i.search[a] };

            function n(e, t) { i[e][a] = t }

            function r(n) {
                function e(e, t) { return !0 === (e = n(e, t)) ? a : e }
                Object.defineProperty(e, "name", { value: a }); var t = i.detect.findIndex(function(e) { return e.name === a }); - 1 === t ? i.detect.unshift(e) : i.detect.splice(t, 1, e) }

            function o(e) { i.order[a + "-pre"] = e.pre, i.order[a + "-asc"] = e.asc, i.order[a + "-desc"] = e.desc }
            t || (t = e, e = null), "className" === e ? n("className", t) : "detect" === e ? r(t) : "order" === e ? o(t) : "render" === e ? n("render", t) : "search" === e ? n("search", t) : e || (t.className && n("className", t.className), void 0 !== t.detect && r(t.detect), t.order && o(t.order), void 0 !== t.render && n("render", t.render), void 0 !== t.search && n("search", t.search)) }, $.types = function() { return i.detect.map(function(e) { return e.name }) }, $.type("string", { detect: function() { return "string" }, order: { pre: function(e) { return y(e) ? "" : "string" == typeof e ? e.toLowerCase() : e.toString ? e.toString() : "" } }, search: ut(!1, !0) }), $.type("html", { detect: function(e) { return y(e) || "string" == typeof e && -1 !== e.indexOf("<") ? "html" : null }, order: { pre: function(e) { return y(e) ? "" : e.replace ? I(e).trim().toLowerCase() : e + "" } }, search: ut(!0, !0) }), $.type("date", { className: "dt-type-date", detect: function(e) { var t; return (!e || e instanceof Date || L.test(e)) && (null !== (t = Date.parse(e)) && !isNaN(t) || y(e)) ? "date" : null }, order: { pre: function(e) { e = Date.parse(e); return isNaN(e) ? -1 / 0 : e } } }), $.type("html-num-fmt", { className: "dt-type-numeric", detect: function(e, t) { t = t.oLanguage.sDecimal; return l(e, t, !0) ? "html-num-fmt" : null }, order: { pre: function(e, t) { t = t.oLanguage.sDecimal; return _t(e, t, F, j) } }, search: ut(!0, !0) }), $.type("html-num", { className: "dt-type-numeric", detect: function(e, t) { t = t.oLanguage.sDecimal; return l(e, t) ? "html-num" : null }, order: { pre: function(e, t) { t = t.oLanguage.sDecimal; return _t(e, t, F) } }, search: ut(!0, !0) }), $.type("num-fmt", { className: "dt-type-numeric", detect: function(e, t) { t = t.oLanguage.sDecimal; return o(e, t, !0) ? "num-fmt" : null }, order: { pre: function(e, t) { t = t.oLanguage.sDecimal; return _t(e, t, j) } } }), $.type("num", { className: "dt-type-numeric", detect: function(e, t) { t = t.oLanguage.sDecimal; return o(e, t) ? "num" : null }, order: { pre: function(e, t) { t = t.oLanguage.sDecimal; return _t(e, t) } } }), function(e, t, n, a) { var r; return 0 === e || e && "-" !== e ? "number" == (r = typeof e) || "bigint" == r ? e : +(e = (e = t ? P(e, t) : e).replace && (n && (e = e.replace(n, "")), a) ? e.replace(a, "") : e) : -1 / 0 });
    B.extend(!0, $.ext.renderer, { footer: { _: function(e, t, n) { t.addClass(n.tfoot.cell) } }, header: { _: function(d, f, h) { f.addClass(h.thead.cell), d.oFeatures.bSort || f.addClass(h.order.none); var e = d.bSortCellsTop,
                    t = f.closest("thead").find("tr"),
                    n = f.parent().index(); "disable" === f.attr("data-dt-order") || "disable" === f.parent().attr("data-dt-order") || !0 === e && 0 !== n || !1 === e && n !== t.length - 1 || B(d.nTable).on("order.dt.DT", function(e, t, n) { var a, r, o, i, l, s, u, c;
                    d === t && (c = h.order, u = t.api.columns(f), a = d.aoColumns[u.flatten()[0]], r = u.orderable().includes(!0), o = "", i = u.indexes(), s = u.orderable(!0).flatten(), l = n.map(function(e) { return e.col }).join(","), f.removeClass(c.isAsc + " " + c.isDesc).toggleClass(c.none, !r).toggleClass(c.canAsc, r && s.includes("asc")).toggleClass(c.canDesc, r && s.includes("desc")), -1 !== (s = l.indexOf(i.toArray().join(","))) && (u = u.order(), f.addClass(u.includes("asc") ? c.isAsc : "" + u.includes("desc") ? c.isDesc : "")), 0 === s && l.length === i.count() ? (u = n[0], c = a.asSorting, f.attr("aria-sort", "asc" === u.dir ? "ascending" : "descending"), o = c[u.index + 1] ? "Reverse" : "Remove") : f.removeAttr("aria-sort"), f.attr("aria-label", r ? a.ariaTitle + t.api.i18n("oAria.orderable" + o) : a.ariaTitle), r) && (f.find(".dt-column-title").attr("role", "button"), f.attr("tabindex", 0)) }) } }, layout: { _: function(e, t, n) { var a = B("<div/>").addClass("dt-layout-row").appendTo(t);
                B.each(n, function(e, t) { e = t.table ? "" : "dt-" + e + " ";
                    t.table && a.addClass("dt-layout-table"), B("<div/>").attr({ id: t.id || null, class: "dt-layout-cell " + e + (t.className || "") }).append(t.contents).appendTo(a) }) } } }), $.feature = {}, $.feature.register = function(e, t, n) { $.ext.features[e] = t, n && C.feature.push({ cFeature: n, fnInit: t }) }, $.feature.register("info", function(e, s) { var t, n, u; return e.oFeatures.bInfo ? (t = e.oLanguage, n = e.sTableId, u = B("<div/>", { class: e.oClasses.info.container }), s = B.extend({ callback: t.fnInfoCallback, empty: t.sInfoEmpty, postfix: t.sInfoPostFix, search: t.sInfoFiltered, text: t.sInfo }, s), e.aoDrawCallback.push(function(e) { var t = s,
                n = u,
                a = e._iDisplayStart + 1,
                r = e.fnDisplayEnd(),
                o = e.fnRecordsTotal(),
                i = e.fnRecordsDisplay(),
                l = i ? t.text : t.empty;
            i !== o && (l += " " + t.search), l += t.postfix, l = Ke(e, l), t.callback && (l = t.callback.call(e.oInstance, e, a, r, o, i, l)), n.html(l), ee(e, null, "info", [e, n[0], l]) }), B("#" + n + "_info", e.nWrapper).length || (u.attr({ "aria-live": "polite", id: n + "_info", role: "status" }), B(e.nTable).attr("aria-describedby", n + "_info")), u) : null }, "i"); var Ct = 0;

    function It(e, t, n, a) { var r = e.oLanguage.oPaginate,
            o = { display: "", active: !1, disabled: !1 }; switch (t) {
            case "ellipsis":
                o.display = "&#x2026;", o.disabled = !0; break;
            case "first":
                o.display = r.sFirst, 0 === n && (o.disabled = !0); break;
            case "previous":
                o.display = r.sPrevious, 0 === n && (o.disabled = !0); break;
            case "next":
                o.display = r.sNext, 0 !== a && n !== a - 1 || (o.disabled = !0); break;
            case "last":
                o.display = r.sLast, 0 !== a && n !== a - 1 || (o.disabled = !0); break;
            default:
                "number" == typeof t && (o.display = e.fnFormatNumber(t + 1), n === t) && (o.active = !0) } return o }

    function At(e, t, n) { var a = [],
            r = Math.floor(n / 2); return t <= n ? a = f(0, t) : 1 === n ? a = [e] : 3 === n ? e <= 1 ? a = [0, 1, "ellipsis"] : t - 2 <= e ? (a = f(t - 2, t)).unshift("ellipsis") : a = ["ellipsis", e, "ellipsis"] : e <= r ? (a = f(0, n - 2)).push("ellipsis", t - 1) : (t - 1 - r <= e ? a = f(t - (n - 2), t) : ((a = f(e - r + 2, e + r - 1)).push("ellipsis", t - 1), a)).unshift(0, "ellipsis"), a }
    $.feature.register("search", function(n, e) { var t, a, r, o, i, l, s, u, c, d; return n.oFeatures.bFilter ? (t = n.oClasses.search, a = n.sTableId, c = n.oLanguage, r = n.oPreviousSearch, o = '<input type="search" class="' + t.input + '"/>', -1 === (e = B.extend({ placeholder: c.sSearchPlaceholder, text: c.sSearch }, e)).text.indexOf("_INPUT_") && (e.text += "_INPUT_"), e.text = Ke(n, e.text), c = e.text.match(/_INPUT_$/), s = e.text.match(/^_INPUT_/), i = e.text.replace(/_INPUT_/, ""), l = "<label>" + e.text + "</label>", s ? l = "_INPUT_<label>" + i + "</label>" : c && (l = "<label>" + i + "</label>_INPUT_"), (s = B("<div>").addClass(t.container).append(l.replace(/_INPUT_/, o))).find("label").attr("for", "dt-search-" + Ct), s.find("input").attr("id", "dt-search-" + Ct), Ct++, u = function(e) { var t = this.value;
            r.return && "Enter" !== e.key || t != r.search && (r.search = t, Le(n, r), n._iDisplayStart = 0, S(n)) }, c = null !== n.searchDelay ? n.searchDelay : 0, d = B("input", s).val(r.search).attr("placeholder", e.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", c ? $.util.debounce(u, c) : u).on("mouseup.DT", function(e) { setTimeout(function() { u.call(d[0], e) }, 10) }).on("keypress.DT", function(e) { if (13 == e.keyCode) return !1 }).attr("aria-controls", a), B(n.nTable).on("search.dt.DT", function(e, t) { n === t && d[0] !== _.activeElement && d.val("function" != typeof r.search ? r.search : "") }), s) : null }, "f"), $.feature.register("paging", function(e, t) { if (!e.oFeatures.bPaginate) return null;
        t = B.extend({ numbers: $.ext.pager.numbers_length, type: e.sPaginationType }, t);

        function n() {! function e(t, n, a) { if (!t._bInitComplete) return; var r = $.ext.pager[a.type],
                    o = t.oLanguage.oAria.paginate || {},
                    i = t._iDisplayStart,
                    l = t._iDisplayLength,
                    s = t.fnRecordsDisplay(),
                    u = -1 === l,
                    c = u ? 0 : Math.ceil(i / l),
                    d = u ? 1 : Math.ceil(s / l),
                    f = r().map(function(e) { return "numbers" === e ? At(c, d, a.numbers) : e }).flat(); var h = []; for (var p = 0; p < f.length; p++) { var g = f[p],
                        m = It(t, g, c, d),
                        v = Qe(t, "pagingButton")(t, g, m.display, m.active, m.disabled);
                    B(v.clicker).attr({ "aria-controls": t.sTableId, "aria-disabled": m.disabled ? "true" : null, "aria-current": m.active ? "page" : null, "aria-label": o[g], "data-dt-idx": g, tabIndex: m.disabled ? -1 : t.iTabIndex }), "number" != typeof g && B(v.clicker).addClass(g), Je(v.clicker, { action: g }, function(e) { e.preventDefault(), Me(t, e.data.action, !0) }), h.push(v.display) }
                i = Qe(t, "pagingContainer")(t, h);
                u = n.find(_.activeElement).data("dt-idx");
                n.empty().append(i);
                void 0 !== u && n.find("[data-dt-idx=" + u + "]").trigger("focus");
                h.length && 1 < a.numbers && B(n).outerHeight() >= 2 * B(h[0]).outerHeight() - 10 && e(t, n, B.extend({}, a, { numbers: a.numbers - 2 })) }(e, a, t) } var a = B("<div/>").addClass(e.oClasses.paging.container + " paging_" + t.type); return e.aoDrawCallback.push(n), B(e.nTable).on("column-sizing.dt.DT", n), a }, "p"); var Ft = 0; return $.feature.register("pageLength", function(a, e) { var t = a.oFeatures; if (!t.bPaginate || !t.bLengthChange) return null;
        e = B.extend({ menu: a.aLengthMenu, text: a.oLanguage.sLengthMenu }, e); var t = a.oClasses.length,
            n = a.sTableId,
            r = e.menu,
            o = [],
            i = []; if (Array.isArray(r[0])) o = r[0], i = r[1];
        else
            for (p = 0; p < r.length; p++) B.isPlainObject(r[p]) ? (o.push(r[p].value), i.push(r[p].label)) : (o.push(r[p]), i.push(r[p])); for (var l = e.text.match(/_MENU_$/), s = e.text.match(/^_MENU_/), u = e.text.replace(/_MENU_/, ""), e = "<label>" + e.text + "</label>", c = (s ? e = "_MENU_<label>" + u + "</label>" : l && (e = "<label>" + u + "</label>_MENU_"), B("<div/>").addClass(t.container).append(e.replace("_MENU_", "<span></span>"))), d = [], f = (c.find("label")[0].childNodes.forEach(function(e) { e.nodeType === Node.TEXT_NODE && d.push({ el: e, text: e.textContent }) }), function(t) { d.forEach(function(e) { e.el.textContent = Ke(a, e.text, t) }) }), h = B("<select/>", { name: n + "_length", "aria-controls": n, class: t.select }), p = 0; p < o.length; p++) h[0][p] = new Option("number" == typeof i[p] ? a.fnFormatNumber(i[p]) : i[p], o[p]); return c.find("label").attr("for", "dt-length-" + Ft), h.attr("id", "dt-length-" + Ft), Ft++, c.find("span").replaceWith(h), B("select", c).val(a._iDisplayLength).on("change.DT", function() { Ee(a, B(this).val()), S(a) }), B(a.nTable).on("length.dt.DT", function(e, t, n) { a === t && (B("select", c).val(n), f(n)) }), f(a._iDisplayLength), c }, "l"), ((B.fn.dataTable = $).$ = B).fn.dataTableSettings = $.settings, B.fn.dataTableExt = $.ext, B.fn.DataTable = function(e) { return B(this).dataTable(e).api() }, B.each($, function(e, t) { B.fn.DataTable[e] = t }), $ });

/*! DataTables Bootstrap 5 integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */
! function(n) { var o, a; "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(e) { return n(e, window, document) }) : "object" == typeof exports ? (o = require("jquery"), a = function(e, t) { t.fn.dataTable || require("datatables.net")(e, t) }, "undefined" == typeof window ? module.exports = function(e, t) { return e = e || window, t = t || o(e), a(e, t), n(t, 0, e.document) } : (a(window, o), module.exports = n(o, window, window.document))) : n(jQuery, window, document) }(function(d, e, t) { "use strict"; var n = d.fn.dataTable; return d.extend(!0, n.defaults, { renderer: "bootstrap" }), d.extend(!0, n.ext.classes, { container: "dt-container dt-bootstrap5", search: { input: "form-control form-control-sm" }, length: { select: "form-select form-select-sm" }, processing: { container: "dt-processing card" } }), n.ext.renderer.pagingButton.bootstrap = function(e, t, n, o, a) { var r = ["dt-paging-button", "page-item"],
            o = (o && r.push("active"), a && r.push("disabled"), d("<li>").addClass(r.join(" "))); return { display: o, clicker: d("<a>", { href: a ? null : "#", class: "page-link" }).html(n).appendTo(o) } }, n.ext.renderer.pagingContainer.bootstrap = function(e, t) { return d("<ul/>").addClass("pagination").append(t) }, n.ext.renderer.layout.bootstrap = function(e, t, n) { var o = d("<div/>", { class: n.full ? "row mt-2 justify-content-md-center" : "row mt-2 justify-content-between" }).appendTo(t);
        d.each(n, function(e, t) { e = t.table ? "col-12" : "start" === e ? "col-md-auto me-auto" : "end" === e ? "col-md-auto ms-auto" : "col-md";
            d("<div/>", { id: t.id || null, class: e + " " + (t.className || "") }).append(t.contents).appendTo(o) }) }, n });

/*! Responsive 3.0.0
 * © SpryMedia Ltd - datatables.net/license
 */
! function(n) { var i, r; "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(e) { return n(e, window, document) }) : "object" == typeof exports ? (i = require("jquery"), r = function(e, t) { t.fn.dataTable || require("datatables.net")(e, t) }, "undefined" == typeof window ? module.exports = function(e, t) { return e = e || window, t = t || i(e), r(e, t), n(t, e, e.document) } : (r(window, i), module.exports = n(i, window, window.document))) : n(jQuery, window, document) }(function(m, v, d) { "use strict";

    function a(e, t) { if (!i.versionCheck || !i.versionCheck("2")) throw "DataTables Responsive requires DataTables 2 or newer";
        this.s = { childNodeStore: {}, columns: [], current: [], dt: new i.Api(e) }, this.s.dt.settings()[0].responsive || (t && "string" == typeof t.details ? t.details = { type: t.details } : t && !1 === t.details ? t.details = { type: !1 } : t && !0 === t.details && (t.details = { type: "inline" }), this.c = m.extend(!0, {}, a.defaults, i.defaults.responsive, t), (e.responsive = this)._constructor()) } var i = m.fn.dataTable,
        e = (m.extend(a.prototype, { _constructor: function() { var s = this,
                    r = this.s.dt,
                    t = m(v).innerWidth(),
                    e = (r.settings()[0]._responsive = this, m(v).on("orientationchange.dtr", i.util.throttle(function() { var e = m(v).innerWidth();
                        e !== t && (s._resize(), t = e) })), r.on("row-created.dtr", function(e, t, n, i) {-1 !== m.inArray(!1, s.s.current) && m(">td, >th", t).each(function(e) { e = r.column.index("toData", e);!1 === s.s.current[e] && m(this).css("display", "none") }) }), r.on("destroy.dtr", function() { r.off(".dtr"), m(r.table().body()).off(".dtr"), m(v).off("resize.dtr orientationchange.dtr"), r.cells(".dtr-control").nodes().to$().removeClass("dtr-control"), m(r.table().node()).removeClass("dtr-inline collapsed"), m.each(s.s.current, function(e, t) {!1 === t && s._setColumnVis(e, !0) }) }), this.c.breakpoints.sort(function(e, t) { return e.width < t.width ? 1 : e.width > t.width ? -1 : 0 }), this._classLogic(), this._resizeAuto(), this.c.details);!1 !== e.type && (s._detailsInit(), r.on("column-visibility.dtr", function() { s._timer && clearTimeout(s._timer), s._timer = setTimeout(function() { s._timer = null, s._classLogic(), s._resizeAuto(), s._resize(!0), s._redrawChildren() }, 100) }), r.on("draw.dtr", function() { s._redrawChildren() }), m(r.table().node()).addClass("dtr-" + e.type)), r.on("column-reorder.dtr", function(e, t, n) { s._classLogic(), s._resizeAuto(), s._resize(!0) }), r.on("column-sizing.dtr", function() { s._resizeAuto(), s._resize() }), r.on("column-calc.dt", function(e, t) { for (var n = s.s.current, i = 0; i < n.length; i++) { var r = t.visible.indexOf(i);!1 === n[i] && 0 <= r && t.visible.splice(r, 1) } }), r.on("preXhr.dtr", function() { var e = [];
                    r.rows().every(function() { this.child.isShown() && e.push(this.id(!0)) }), r.one("draw.dtr", function() { s._resizeAuto(), s._resize(), r.rows(e).every(function() { s._detailsDisplay(this, !1) }) }) }), r.on("draw.dtr", function() { s._controlClass() }).on("init.dtr", function(e, t, n) { "dt" === e.namespace && (s._resizeAuto(), s._resize(), m.inArray(!1, s.s.current)) && r.columns.adjust() }), this._resize() }, _childNodes: function(e, t, n) { var i = t + "-" + n; if (this.s.childNodeStore[i]) return this.s.childNodeStore[i]; for (var r = [], s = e.cell(t, n).node().childNodes, o = 0, d = s.length; o < d; o++) r.push(s[o]); return this.s.childNodeStore[i] = r }, _childNodesRestore: function(e, t, n) { var i = t + "-" + n; if (this.s.childNodeStore[i]) { var r = e.cell(t, n).node(),
                        e = this.s.childNodeStore[i]; if (0 < e.length) { for (var s = e[0].parentNode.childNodes, o = [], d = 0, a = s.length; d < a; d++) o.push(s[d]); for (var l = 0, c = o.length; l < c; l++) r.appendChild(o[l]) }
                    this.s.childNodeStore[i] = void 0 } }, _columnsVisiblity: function(n) { for (var i = this.s.dt, e = this.s.columns, t = e.map(function(e, t) { return { columnIdx: t, priority: e.priority } }).sort(function(e, t) { return e.priority !== t.priority ? e.priority - t.priority : e.columnIdx - t.columnIdx }), r = m.map(e, function(e, t) { return !1 === i.column(t).visible() ? "not-visible" : (!e.auto || null !== e.minWidth) && (!0 === e.auto ? "-" : -1 !== m.inArray(n, e.includeIn)) }), s = 0, o = 0, d = r.length; o < d; o++) !0 === r[o] && (s += e[o].minWidth); var a = i.settings()[0].oScroll,
                    a = a.sY || a.sX ? a.iBarWidth : 0,
                    l = i.table().container().offsetWidth - a - s; for (o = 0, d = r.length; o < d; o++) e[o].control && (l -= e[o].minWidth); var c = !1; for (o = 0, d = t.length; o < d; o++) { var u = t[o].columnIdx; "-" === r[u] && !e[u].control && e[u].minWidth && (c || l - e[u].minWidth < 0 ? r[u] = !(c = !0) : r[u] = !0, l -= e[u].minWidth) } var h = !1; for (o = 0, d = e.length; o < d; o++)
                    if (!e[o].control && !e[o].never && !1 === r[o]) { h = !0; break }
                for (o = 0, d = e.length; o < d; o++) e[o].control && (r[o] = h), "not-visible" === r[o] && (r[o] = !1); return -1 === m.inArray(!0, r) && (r[0] = !0), r }, _classLogic: function() {
                function d(e, t, n, i) { var r, s, o; if (n) { if ("max-" === n)
                            for (r = a._find(t).width, s = 0, o = l.length; s < o; s++) l[s].width <= r && u(e, l[s].name);
                        else if ("min-" === n)
                            for (r = a._find(t).width, s = 0, o = l.length; s < o; s++) l[s].width >= r && u(e, l[s].name);
                        else if ("not-" === n)
                            for (s = 0, o = l.length; s < o; s++) - 1 === l[s].name.indexOf(i) && u(e, l[s].name) } else c[e].includeIn.push(t) } var a = this,
                    l = this.c.breakpoints,
                    c = this.s.dt.columns().eq(0).map(function(e) { var e = this.column(e),
                            t = e.header().className,
                            n = e.init().responsivePriority,
                            e = e.header().getAttribute("data-priority"); return void 0 === n && (n = null == e ? 1e4 : +e), { className: t, includeIn: [], auto: !1, control: !1, never: !!t.match(/\b(dtr\-)?never\b/), priority: n } }),
                    u = function(e, t) { e = c[e].includeIn; - 1 === m.inArray(t, e) && e.push(t) };
                c.each(function(e, r) { for (var t = e.className.split(" "), s = !1, n = 0, i = t.length; n < i; n++) { var o = t[n].trim(); if ("all" === o || "dtr-all" === o) return s = !0, void(e.includeIn = m.map(l, function(e) { return e.name })); if ("none" === o || "dtr-none" === o || e.never) return void(s = !0); if ("control" === o || "dtr-control" === o) return s = !0, void(e.control = !0);
                        m.each(l, function(e, t) { var n = t.name.split("-"),
                                i = new RegExp("(min\\-|max\\-|not\\-)?(" + n[0] + ")(\\-[_a-zA-Z0-9])?"),
                                i = o.match(i);
                            i && (s = !0, i[2] === n[0] && i[3] === "-" + n[1] ? d(r, t.name, i[1], i[2] + i[3]) : i[2] !== n[0] || i[3] || d(r, t.name, i[1], i[2])) }) }
                    s || (e.auto = !0) }), this.s.columns = c }, _controlClass: function() { var e, t, n; "inline" === this.c.details.type && (e = this.s.dt, t = this.s.current, n = m.inArray(!0, t), e.cells(null, function(e) { return e !== n }, { page: "current" }).nodes().to$().filter(".dtr-control").removeClass("dtr-control"), e.cells(null, n, { page: "current" }).nodes().to$().addClass("dtr-control")) }, _detailsDisplay: function(t, n) {
                function e(e) { m(t.node()).toggleClass("dtr-expanded", !1 !== e), m(s.table().node()).triggerHandler("responsive-display.dt", [s, t, e, n]) } var i, r = this,
                    s = this.s.dt,
                    o = this.c.details;
                o && !1 !== o.type && (i = "string" == typeof o.renderer ? a.renderer[o.renderer]() : o.renderer, "boolean" == typeof(o = o.display(t, n, function() { return i.call(r, s, t[0][0], r._detailsObj(t[0])) }, function() { e(!1) }))) && e(o) }, _detailsInit: function() { var n = this,
                    i = this.s.dt,
                    e = this.c.details,
                    r = ("inline" === e.type && (e.target = "td.dtr-control, th.dtr-control"), i.on("draw.dtr", function() { n._tabIndexes() }), n._tabIndexes(), m(i.table().body()).on("keyup.dtr", "td, th", function(e) { 13 === e.keyCode && m(this).data("dtr-keyboard") && m(this).click() }), e.target),
                    e = "string" == typeof r ? r : "td, th";
                void 0 === r && null === r || m(i.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", e, function(e) { if (m(i.table().node()).hasClass("collapsed") && -1 !== m.inArray(m(this).closest("tr").get(0), i.rows().nodes().toArray())) { if ("number" == typeof r) { var t = r < 0 ? i.columns().eq(0).length + r : r; if (i.cell(this).index().column !== t) return }
                        t = i.row(m(this).closest("tr")); "click" === e.type ? n._detailsDisplay(t, !1) : "mousedown" === e.type ? m(this).css("outline", "none") : "mouseup" === e.type && m(this).trigger("blur").css("outline", "") } }) }, _detailsObj: function(n) { var i = this,
                    r = this.s.dt; return m.map(this.s.columns, function(e, t) { if (!e.never && !e.control) return { className: r.settings()[0].aoColumns[t].sClass, columnIndex: t, data: r.cell(n, t).render(i.c.orthogonal), hidden: r.column(t).visible() && !i.s.current[t], rowIndex: n, title: r.column(t).title() } }) }, _find: function(e) { for (var t = this.c.breakpoints, n = 0, i = t.length; n < i; n++)
                    if (t[n].name === e) return t[n] }, _redrawChildren: function() { var n = this,
                    i = this.s.dt;
                i.rows({ page: "current" }).iterator("row", function(e, t) { n._detailsDisplay(i.row(t), !0) }) }, _resize: function(n) { for (var e, i = this, r = this.s.dt, t = m(v).innerWidth(), s = this.c.breakpoints, o = s[0].name, d = this.s.columns, a = this.s.current.slice(), l = s.length - 1; 0 <= l; l--)
                    if (t <= s[l].width) { o = s[l].name; break }
                var c = this._columnsVisiblity(o),
                    u = (this.s.current = c, !1); for (l = 0, e = d.length; l < e; l++)
                    if (!1 === c[l] && !d[l].never && !d[l].control && !1 == !r.column(l).visible()) { u = !0; break }
                m(r.table().node()).toggleClass("collapsed", u); var h = !1,
                    p = 0,
                    f = r.settings()[0];
                r.columns().eq(0).each(function(e, t) { r.column(e).visible() && (!0 === c[t] && p++, !n && c[t] === a[t] || (h = !0, i._setColumnVis(e, c[t])), c[t] || m(f.aoColumns[e].colEl).detach()) }), h && (this._redrawChildren(), m(r.table().node()).trigger("responsive-resize.dt", [r, this._responsiveOnlyHidden()]), 0 === r.page.info().recordsDisplay) && m("td", r.table().body()).eq(0).attr("colspan", p), i._controlClass() }, _resizeAuto: function() { var t = this.s.dt,
                    n = this.s.columns,
                    r = this,
                    e = t.columns().indexes().filter(function(e) { return t.column(e).visible() }); if (this.c.auto && -1 !== m.inArray(!0, m.map(n, function(e) { return e.auto }))) { for (var i = t.table().node().cloneNode(!1), s = m(t.table().header().cloneNode(!1)).appendTo(i), o = m(t.table().footer().cloneNode(!1)).appendTo(i), d = m(t.table().body()).clone(!1, !1).empty().appendTo(i), a = (i.style.width = "auto", t.table().header.structure(e).forEach(e => { e = e.filter(function(e) { return !!e }).map(function(e) { return m(e.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0) });
                            m("<tr/>").append(e).appendTo(s) }), m("<tr/>").appendTo(d)), l = 0; l < e.count(); l++) a.append("<td/>");
                    t.rows({ page: "current" }).every(function(n) { var i, e = this.node();
                        e && (i = e.cloneNode(!1), t.cells(n, "*").every(function(e, t) { t = r.s.childNodeStore[n + "-" + t];
                            (t ? m(this.node().cloneNode(!1)).append(m(t).clone()) : m(this.node()).clone(!1)).appendTo(i) }), d.append(i)) }), d.find("th, td").css("display", ""), t.table().footer.structure(e).forEach(e => { e = e.filter(function(e) { return !!e }).map(function(e) { return m(e.cell).clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0) });
                        m("<tr/>").append(e).appendTo(o) }), "inline" === this.c.details.type && m(i).addClass("dtr-inline collapsed"), m(i).find("[name]").removeAttr("name"), m(i).css("position", "relative");
                    i = m("<div/>").css({ width: 1, height: 1, overflow: "hidden", clear: "both" }).append(i);
                    i.insertBefore(t.table().node()), a.children().each(function(e) { e = t.column.index("fromVisible", e);
                        n[e].minWidth = this.offsetWidth || 0 }), i.remove() } }, _responsiveOnlyHidden: function() { var n = this.s.dt; return m.map(this.s.current, function(e, t) { return !1 === n.column(t).visible() || e }) }, _setColumnVis: function(e, t) { var n = this,
                    i = this.s.dt,
                    r = t ? "" : "none";
                this._setHeaderVis(e, t, i.table().header.structure()), this._setHeaderVis(e, t, i.table().footer.structure()), i.column(e).nodes().to$().css("display", r).toggleClass("dtr-hidden", !t), m.isEmptyObject(this.s.childNodeStore) || i.cells(null, e).indexes().each(function(e) { n._childNodesRestore(i, e.row, e.column) }) }, _setHeaderVis: function(n, i, e) { var r = this,
                    s = i ? "" : "none";
                e.forEach(function(e) { if (e[n]) m(e[n].cell).css("display", s).toggleClass("dtr-hidden", !i);
                    else
                        for (var t = n; 0 <= t;) { if (e[t]) { e[t].cell.colSpan = r._colspan(e, t); break }
                            t-- } }) }, _colspan: function(e, t) { for (var n = 1, i = t + 1; i < e.length; i++)
                    if (null === e[i] && this.s.current[i]) n++;
                    else if (e[i]) break; return n }, _tabIndexes: function() { var e = this.s.dt,
                    t = e.cells({ page: "current" }).nodes().to$(),
                    n = e.settings()[0],
                    i = this.c.details.target;
                t.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"), ("number" == typeof i ? e.cells(null, i, { page: "current" }).nodes().to$() : m(i = "td:first-child, th:first-child" === i ? ">td:first-child, >th:first-child" : i, e.rows({ page: "current" }).nodes())).attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1) } }), a.defaults = { breakpoints: a.breakpoints = [{ name: "desktop", width: 1 / 0 }, { name: "tablet-l", width: 1024 }, { name: "tablet-p", width: 768 }, { name: "mobile-l", width: 480 }, { name: "mobile-p", width: 320 }], auto: !0, details: { display: (a.display = { childRow: function(e, t, n) { var i = m(e.node()); return t ? i.hasClass("dtr-expanded") ? (e.child(n(), "child").show(), !0) : void 0 : i.hasClass("dtr-expanded") ? (e.child(!1), !1) : !1 !== (t = n()) && (e.child(t, "child").show(), !0) }, childRowImmediate: function(e, t, n) { var i = m(e.node()); return !t && i.hasClass("dtr-expanded") || !e.responsive.hasHidden() ? (e.child(!1), !1) : !1 !== (t = n()) && (e.child(t, "child").show(), !0) }, modal: function(o) { return function(e, t, n, i) { n = n(); if (!1 === n) return !1; if (t) { if (!(s = m("div.dtr-modal-content")).length || e.index() !== s.data("dtr-row-idx")) return null;
                                s.empty().append(n) } else { var r = function() { s.remove(), m(d).off("keypress.dtr"), m(e.node()).removeClass("dtr-expanded"), i() },
                                    s = m('<div class="dtr-modal"/>').append(m('<div class="dtr-modal-display"/>').append(m('<div class="dtr-modal-content"/>').data("dtr-row-idx", e.index()).append(n)).append(m('<div class="dtr-modal-close">&times;</div>').click(function() { r() }))).append(m('<div class="dtr-modal-background"/>').click(function() { r() })).appendTo("body");
                                m(e.node()).addClass("dtr-expanded"), m(d).on("keyup.dtr", function(e) { 27 === e.keyCode && (e.stopPropagation(), r()) }) } return o && o.header && m("div.dtr-modal-content").prepend("<h2>" + o.header(e) + "</h2>"), !0 } } }).childRow, renderer: (a.renderer = { listHiddenNodes: function() { return function(i, e, t) { var r = this,
                                s = m('<ul data-dtr-index="' + e + '" class="dtr-details"/>'),
                                o = !1; return m.each(t, function(e, t) { var n;
                                t.hidden && (n = t.className ? 'class="' + t.className + '"' : "", m("<li " + n + ' data-dtr-index="' + t.columnIndex + '" data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><span class="dtr-title">' + t.title + "</span> </li>").append(m('<span class="dtr-data"/>').append(r._childNodes(i, t.rowIndex, t.columnIndex))).appendTo(s), o = !0) }), !!o && s } }, listHidden: function() { return function(e, t, n) { n = m.map(n, function(e) { var t = e.className ? 'class="' + e.className + '"' : ""; return e.hidden ? "<li " + t + ' data-dtr-index="' + e.columnIndex + '" data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><span class="dtr-title">' + e.title + '</span> <span class="dtr-data">' + e.data + "</span></li>" : "" }).join(""); return !!n && m('<ul data-dtr-index="' + t + '" class="dtr-details"/>').append(n) } }, tableAll: function(i) { return i = m.extend({ tableClass: "" }, i),
                            function(e, t, n) { n = m.map(n, function(e) { return "<tr " + (e.className ? 'class="' + e.className + '"' : "") + ' data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" }).join(""); return m('<table class="' + i.tableClass + ' dtr-details" width="100%"/>').append(n) } } }).listHidden(), target: 0, type: "inline" }, orthogonal: "display" }, m.fn.dataTable.Api); return e.register("responsive()", function() { return this }), e.register("responsive.index()", function(e) { return { column: (e = m(e)).data("dtr-index"), row: e.parent().data("dtr-index") } }), e.register("responsive.rebuild()", function() { return this.iterator("table", function(e) { e._responsive && e._responsive._classLogic() }) }), e.register("responsive.recalc()", function() { return this.iterator("table", function(e) { e._responsive && (e._responsive._resizeAuto(), e._responsive._resize()) }) }), e.register("responsive.hasHidden()", function() { var e = this.context[0]; return !!e._responsive && -1 !== m.inArray(!1, e._responsive._responsiveOnlyHidden()) }), e.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function() { return this.iterator("column", function(e, t) { return !!e._responsive && e._responsive._responsiveOnlyHidden()[t] }, 1) }), a.version = "3.0.0", m.fn.dataTable.Responsive = a, m.fn.DataTable.Responsive = a, m(d).on("preInit.dt.dtr", function(e, t, n) { "dt" === e.namespace && (m(t.nTable).hasClass("responsive") || m(t.nTable).hasClass("dt-responsive") || t.oInit.responsive || i.defaults.responsive) && !1 !== (e = t.oInit.responsive) && new a(t, m.isPlainObject(e) ? e : {}) }), i });

/*! Bootstrap 5 integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */
! function(n) { var o, a; "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs5", "datatables.net-responsive"], function(e) { return n(e, window, document) }) : "object" == typeof exports ? (o = require("jquery"), a = function(e, d) { d.fn.dataTable || require("datatables.net-bs5")(e, d), d.fn.dataTable.Responsive || require("datatables.net-responsive")(e, d) }, "undefined" == typeof window ? module.exports = function(e, d) { return e = e || window, d = d || o(e), a(e, d), n(d, e, e.document) } : (a(window, o), module.exports = n(o, window, window.document))) : n(jQuery, window, document) }(function(r, e, l) { "use strict"; var u, d = r.fn.dataTable,
        n = d.Responsive.display,
        f = n.modal,
        m = r('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"/></div></div></div>'),
        o = e.bootstrap; return d.Responsive.bootstrap = function(e) { o = e }, n.modal = function(s) { return u = u || new o.Modal(m[0]),
            function(e, d, n, o) { if (r.fn.modal) { var a, t, i = n(); if (!1 === i) return !1; if (d) { if (!r.contains(l, m[0]) || e.index() !== m.data("dtr-row-idx")) return null;
                        m.find("div.modal-body").empty().append(i) } else s && s.header && (t = (a = m.find("div.modal-header")).find("button").detach(), a.empty().append('<h4 class="modal-title">' + s.header(e) + "</h4>").append(t)), m.find("div.modal-body").empty().append(i), m.data("dtr-row-idx", e.index()).one("hidden.bs.modal", o).appendTo("body").modal(), u.show(); return !0 } return f(e, d, n, o) } }, d });

/*! SearchPanes 2.3.0
 * © SpryMedia Ltd - datatables.net/license
 */
! function(e) { var a, i; "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(t) { return e(t, window, document) }) : "object" == typeof exports ? (a = require("jquery"), i = function(t, s) { s.fn.dataTable || require("datatables.net")(t, s) }, "undefined" == typeof window ? module.exports = function(t, s) { return t = t || window, s = s || a(t), i(t, s), e(s, t, t.document) } : (i(window, a), module.exports = e(a, window, window.document))) : e(jQuery, window, document) }(function(n, r, o) { "use strict"; var _, l, h, a, d, i, c, t, p, u, f, g, v, m, w, P, y, b, S, C, O, x, j, A, D, T = n.fn.dataTable;

    function B(t, s, e, a, i) { var o, n = this; if (void 0 === i && (i = null), !l || !l.versionCheck || !l.versionCheck("1.10.0")) throw new Error("SearchPane requires DataTables 1.10 or newer"); if (l.select) return t = new l.Api(t), this.classes = _.extend(!0, {}, B.classes), this.c = _.extend(!0, {}, B.defaults, s, i), s && s.hideCount && void 0 === s.viewCount && (this.c.viewCount = !this.c.hideCount), s = t.columns().eq(0).toArray().length, this.s = { colExists: e < s, colOpts: void 0, customPaneSettings: i, displayed: !1, dt: t, dtPane: void 0, firstSet: !0, index: e, indexes: [], listSet: !1, name: void 0, rowData: { arrayFilter: [], arrayOriginal: [], bins: {}, binsOriginal: {}, filterMap: new Map, totalOptions: 0 }, scrollTop: 0, searchFunction: void 0, selections: [], serverSelect: [], serverSelecting: !1, tableLength: null, updating: !1 }, this.s.colOpts = this.s.colExists ? this._getOptions() : this._getBonusOptions(), this.dom = { buttonGroup: _("<div/>").addClass(this.classes.buttonGroup), clear: _('<button type="button">&#215;</button>').attr("disabled", "true").addClass(this.classes.disabledButton).addClass(this.classes.paneButton).addClass(this.classes.clearButton).html(this.s.dt.i18n("searchPanes.clearPane", this.c.i18n.clearPane)), collapseButton: _('<button type="button"><span class="' + this.classes.caret + '">&#x5e;</span></button>').addClass(this.classes.paneButton).addClass(this.classes.collapseButton), container: _("<div/>").addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(this.c.layout.split("-")[1], 10) < 10 ? this.c.layout : this.c.layout.split("-")[0] + "-9")).addClass(this.s.customPaneSettings && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""), countButton: _('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton), dtP: _('<table width="100%"><thead><tr><th>' + (this.s.colExists ? _(this.s.dt.column(this.s.index).header()).text() : this.s.customPaneSettings.header || "Custom Pane") + "</th><th/></tr></thead></table>"), lower: _("<div/>").addClass(this.classes.subRow2).addClass(this.classes.narrowButton), nameButton: _('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton), panesContainer: _(a), searchBox: _("<input/>").addClass(this.classes.paneInputButton).addClass(this.classes.search), searchButton: _('<button type="button"><span></span></button>').addClass(this.classes.searchIcon).addClass(this.classes.paneButton), searchCont: _("<div/>").addClass(this.classes.searchCont), searchLabelCont: _("<div/>").addClass(this.classes.searchLabelCont), topRow: _("<div/>").addClass(this.classes.topRow), upper: _("<div/>").addClass(this.classes.subRow1).addClass(this.classes.narrowSearch) }, this.s.colOpts.name ? this.s.name = this.s.colOpts.name : this.s.customPaneSettings && this.s.customPaneSettings.name ? this.s.name = this.s.customPaneSettings.name : this.s.name = this.s.colExists ? _(this.s.dt.column(this.s.index).header()).text() : this.s.customPaneSettings.header || "Custom Pane", o = this.s.dt.table(0).node(), this.s.searchFunction = function(t, s, e) { return 0 === n.s.selections.length || t.nTable !== o || (t = null, n.s.colExists && (t = s[n.s.index], "filter" !== n.s.colOpts.orthogonal.filter) && (t = n.s.rowData.filterMap.get(e)) instanceof _.fn.dataTable.Api && (t = t.toArray()), n._search(t, e)) }, _.fn.dataTable.ext.search.push(this.s.searchFunction), this.c.clear && this.dom.clear.on("click.dtsp", function() { n.dom.container.find("." + n.classes.search.replace(/\s+/g, ".")).each(function() { _(this).val("").trigger("input") }), n.clearPane() }), this.s.dt.on("draw.dtsp", function() { return n.adjustTopRow() }), this.s.dt.on("buttons-action.dtsp", function() { return n.adjustTopRow() }), this.s.dt.on("column-reorder.dtsp", function(t, s, e) { n.s.index = e.mapping[n.s.index] }), this; throw new Error("SearchPane requires Select") }

    function s(t, s, e, a, i) { return d.call(this, t, s, e, a, i) || this }

    function e(t, s, e, a, i) { return p.call(this, t, c.extend({ i18n: { countFiltered: "{shown} ({total})" } }, s), e, a, i) || this }

    function L(t, s, e, a, i) { return v.call(this, t, f.extend({ i18n: { count: "{shown}" } }, s), e, a, i) || this }

    function R(t, s, e, a, i) { return y.call(this, t, w.extend({ i18n: { count: "{total}", countFiltered: "{shown} ({total})" } }, s), e, a, i) || this }

    function M(t, s, e, a) { var l = this; if (void 0 === e && (e = !1), void 0 === a && (a = h), !S || !S.versionCheck || !S.versionCheck("1.10.0")) throw new Error("SearchPane requires DataTables 1.10 or newer"); if (!S.select) throw new Error("SearchPane requires Select"); var d, i = new S.Api(t); if (this.classes = b.extend(!0, {}, M.classes), this.c = b.extend(!0, {}, M.defaults, s), this.dom = { clearAll: b('<button type="button"/>').addClass(this.classes.clearAll).html(i.i18n("searchPanes.clearMessage", this.c.i18n.clearMessage)), collapseAll: b('<button type="button"/>').addClass(this.classes.collapseAll).html(i.i18n("searchPanes.collapseMessage", this.c.i18n.collapseMessage)), container: b("<div/>").addClass(this.classes.panes).html(i.i18n("searchPanes.loadMessage", this.c.i18n.loadMessage)), emptyMessage: b("<div/>").addClass(this.classes.emptyMessage), panes: b("<div/>").addClass(this.classes.container), showAll: b('<button type="button"/>').addClass(this.classes.showAll).addClass(this.classes.disabledButton).attr("disabled", "true").html(i.i18n("searchPanes.showMessage", this.c.i18n.showMessage)), title: b("<div/>").addClass(this.classes.title), titleRow: b("<div/>").addClass(this.classes.titleRow) }, this.s = { colOpts: [], dt: i, filterCount: 0, minPaneWidth: 260, page: 0, paging: !1, pagingST: !1, paneClass: a, panes: [], selectionList: [], serverData: {}, stateRead: !1, updating: !1 }, !i.settings()[0]._searchPanes) return b(o).on("draw.dt", function(t) { l.dom.container.find(t.target).length && l._updateFilterCount() }), this._getState(), this.s.dt.page.info().serverSide && (d = this.s.dt.settings()[0], this.s.dt.on("preXhr.dtsps", function(t, s, e) { if (d === s) { void 0 === e.searchPanes && (e.searchPanes = {}), void 0 === e.searchPanes_null && (e.searchPanes_null = {}); for (var a = 0, i = l.s.selectionList; a < i.length; a++) { var o = i[a],
                        n = l.s.dt.column(o.column).dataSrc();
                    void 0 === e.searchPanes[n] && (e.searchPanes[n] = {}), void 0 === e.searchPanes_null[n] && (e.searchPanes_null[n] = {}); for (var r = 0; r < o.rows.length; r++) e.searchPanes[n][r] = o.rows[r], null === e.searchPanes[n][r] ? e.searchPanes_null[n][r] = !0 : e.searchPanes_null[n][r] = !1 }
                0 < l.s.selectionList.length && (e.searchPanesLast = n), e.searchPanes_options = { cascade: l.c.cascadePanes, viewCount: l.c.viewCount, viewTotal: l.c.viewTotal } } })), this._setXHR(), (i.settings()[0]._searchPanes = this).s.dt.settings()[0]._bInitComplete || e ? this._paneDeclare(i, t, s) : i.one("preInit.dtsps", function() { l._paneDeclare(i, t, s) }), this }

    function k(t, s, e) {
        function a() { return o._initSelectionListeners(!0, n && n.searchPanes && n.searchPanes.selectionList ? n.searchPanes.selectionList : o.c.preSelect) } var i, o = this,
            t = (s.cascadePanes && s.viewTotal ? i = C : s.cascadePanes ? i = P : s.viewTotal && (i = g), (o = j.call(this, t, s, e = void 0 === e ? !1 : e, i) || this).s.dt),
            n = t.state.loaded(); return t.settings()[0]._bInitComplete ? a() : t.off("init.dtsps").on("init.dtsps", a), o }

    function N(s, e, t) { var a = n.extend({ filterChanged: function(t) { s.button(e).text(s.i18n("searchPanes.collapse", (void 0 !== s.context[0].oLanguage.searchPanes ? s.context[0].oLanguage.searchPanes : s.context[0]._searchPanes.c.i18n).collapse, t)) } }, t.config),
            a = new(a && (a.cascadePanes || a.viewTotal) ? T.SearchPanesST : T.SearchPanes)(s, a);
        s.button(e).text(t.text || s.i18n("searchPanes.collapse", a.c.i18n.collapse, 0)), t._panes = a }

    function F(t, s, e) { void 0 === s && (s = null), void 0 === e && (e = !1);
        t = new D.Api(t), s = s || t.init().searchPanes || D.defaults.searchPanes; return new(s && (s.cascadePanes || s.viewTotal) ? A : O)(t, s, e).getNode() } return B.prototype.addRow = function(t, s, e, a, i, o, n) { var r;
        o = o || this.s.rowData.bins[s] || 0, n = n || this._getShown(s); for (var l = 0, d = this.s.indexes; l < d.length; l++) { var h = d[l];
            h.filter === s && (r = h.index) } return void 0 === r && (r = this.s.indexes.length, this.s.indexes.push({ filter: s, index: r })), this.s.dtPane.row.add({ className: i, display: "" !== t ? t : this.emptyMessage(), filter: s, index: r, shown: n, sort: e, total: o, type: a }) }, B.prototype.adjustTopRow = function() { var t = this.dom.container.find("." + this.classes.subRowsContainer.replace(/\s+/g, ".")),
            s = this.dom.container.find("." + this.classes.subRow1.replace(/\s+/g, ".")),
            e = this.dom.container.find("." + this.classes.subRow2.replace(/\s+/g, ".")),
            a = this.dom.container.find("." + this.classes.topRow.replace(/\s+/g, "."));
        (_(t[0]).width() < 252 || _(a[0]).width() < 252) && 0 !== _(t[0]).width() ? (_(t[0]).addClass(this.classes.narrow), _(s[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch), _(e[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton)) : (_(t[0]).removeClass(this.classes.narrow), _(s[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch), _(e[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton)) }, B.prototype.clearData = function() { this.s.rowData = { arrayFilter: [], arrayOriginal: [], bins: {}, binsOriginal: {}, filterMap: new Map, totalOptions: 0 } }, B.prototype.clearPane = function() { return this.s.dtPane.rows({ selected: !0 }).deselect(), this.updateTable(), this }, B.prototype.collapse = function() { var t = this;
        this.s.displayed && (this.c.collapse || !0 === this.s.colOpts.collapse) && !1 !== this.s.colOpts.collapse && (_(this.s.dtPane.table().container()).addClass(this.classes.hidden), this.dom.topRow.addClass(this.classes.bordered), this.dom.nameButton.addClass(this.classes.disabledButton), this.dom.countButton.addClass(this.classes.disabledButton), this.dom.searchButton.addClass(this.classes.disabledButton), this.dom.collapseButton.addClass(this.classes.rotated), this.dom.topRow.one("click.dtsp", function() { return t.show() }), this.dom.topRow.trigger("collapse.dtsps")) }, B.prototype.destroy = function() { this.s.dtPane && this.s.dtPane.off(".dtsp"), this.s.dt.off(".dtsp"), this.dom.clear.off(".dtsp"), this.dom.nameButton.off(".dtsp"), this.dom.countButton.off(".dtsp"), this.dom.searchButton.off(".dtsp"), this.dom.collapseButton.off(".dtsp"), _(this.s.dt.table().node()).off(".dtsp"), this.dom.container.detach(); for (var t = _.fn.dataTable.ext.search.indexOf(this.s.searchFunction); - 1 !== t;) _.fn.dataTable.ext.search.splice(t, 1), t = _.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
        this.s.dtPane && this.s.dtPane.destroy(), this.s.listSet = !1 }, B.prototype.emptyMessage = function() { var t = this.c.i18n.emptyMessage; return this.c.emptyMessage && (t = this.c.emptyMessage), !1 !== this.s.colOpts.emptyMessage && null !== this.s.colOpts.emptyMessage && (t = this.s.colOpts.emptyMessage), this.s.dt.i18n("searchPanes.emptyMessage", t) }, B.prototype.getPaneCount = function() { return this.s.dtPane ? this.s.dtPane.rows({ selected: !0 }).data().toArray().length : 0 }, B.prototype.rebuildPane = function(t, s) { void 0 === t && (t = null), void 0 === s && (s = !1), this.clearData(); var e = [],
            a = (this.s.serverSelect = [], null); return this.s.dtPane && (s && (this.s.dt.page.info().serverSide ? this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray() : e = this.s.dtPane.rows({ selected: !0 }).data().toArray()), this.s.dtPane.clear().destroy(), a = this.dom.container.prev(), this.destroy(), this.s.dtPane = void 0, _.fn.dataTable.ext.search.push(this.s.searchFunction)), this.dom.container.removeClass(this.classes.hidden), this.s.displayed = !1, this._buildPane(this.s.dt.page.info().serverSide ? this.s.serverSelect : e, t, a), this }, B.prototype.resize = function(t) { this.c.layout = t, this.dom.container.removeClass().addClass(this.classes.show).addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(t.split("-")[1], 10) < 10 ? t : t.split("-")[0] + "-9")).addClass(null !== this.s.customPaneSettings && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""), this.adjustTopRow() }, B.prototype.setListeners = function() { var h = this;
        this.s.dtPane && (this.s.dtPane.off("select.dtsp").on("select.dtsp", function() { clearTimeout(h.s.deselectTimeout), h._updateSelection(!h.s.updating), h.dom.clear.removeClass(h.classes.disabledButton).removeAttr("disabled") }), this.s.dtPane.off("deselect.dtsp").on("deselect.dtsp", function() { h.s.deselectTimeout = setTimeout(function() { h._updateSelection(!0), 0 === h.s.dtPane.rows({ selected: !0 }).data().toArray().length && h.dom.clear.addClass(h.classes.disabledButton).attr("disabled", "true") }, 50) }), this.s.firstSet && (this.s.firstSet = !1, this.s.dt.on("stateSaveParams.dtsp", function(t, s, e) { if (_.isEmptyObject(e)) h.s.dtPane.state.clear();
            else { var a, i, o, n, r, l = [];
                h.s.dtPane && (l = h.s.dtPane.rows({ selected: !0 }).data().map(function(t) { return null !== t.filter ? t.filter.toString() : null }).toArray(), n = h.dom.searchBox.val(), i = h.s.dtPane.order(), a = h.s.rowData.binsOriginal, r = h.s.rowData.arrayOriginal, o = h.dom.collapseButton.hasClass(h.classes.rotated)), void 0 === e.searchPanes && (e.searchPanes = {}), void 0 === e.searchPanes.panes && (e.searchPanes.panes = []); for (var d = 0; d < e.searchPanes.panes.length; d++) e.searchPanes.panes[d].id === h.s.index && (e.searchPanes.panes.splice(d, 1), d--);
                e.searchPanes.panes.push({ arrayFilter: r, bins: a, collapsed: o, id: h.s.index, order: i, searchTerm: n, selected: l }) } })), this.s.dtPane.off("user-select.dtsp").on("user-select.dtsp", function(t, s, e, a, i) { i.stopPropagation() }), this.s.dtPane.off("draw.dtsp").on("draw.dtsp", function() { return h.adjustTopRow() }), this.dom.nameButton.off("click.dtsp").on("click.dtsp", function() { var t = h.s.dtPane.order()[0][1];
            h.s.dtPane.order([0, "asc" === t ? "desc" : "asc"]).draw(), h.s.dt.state.save() }), this.dom.countButton.off("click.dtsp").on("click.dtsp", function() { var t = h.s.dtPane.order()[0][1];
            h.s.dtPane.order([1, "asc" === t ? "desc" : "asc"]).draw(), h.s.dt.state.save() }), this.dom.collapseButton.off("click.dtsp").on("click.dtsp", function(t) { t.stopPropagation();
            t = _(h.s.dtPane.table().container());
            t.toggleClass(h.classes.hidden), h.dom.topRow.toggleClass(h.classes.bordered), h.dom.nameButton.toggleClass(h.classes.disabledButton), h.dom.countButton.toggleClass(h.classes.disabledButton), h.dom.searchButton.toggleClass(h.classes.disabledButton), h.dom.collapseButton.toggleClass(h.classes.rotated), t.hasClass(h.classes.hidden) ? h.dom.topRow.on("click.dtsp", function() { return h.dom.collapseButton.click() }) : h.dom.topRow.off("click.dtsp"), h.s.dt.state.save(), h.dom.topRow.trigger("collapse.dtsps") }), this.dom.clear.off("click.dtsp").on("click.dtsp", function() { h.dom.container.find("." + h.classes.search.replace(/ /g, ".")).each(function() { _(this).val("").trigger("input") }), h.clearPane() }), this.dom.searchButton.off("click.dtsp").on("click.dtsp", function() { return h.dom.searchBox.focus() }), this.dom.searchBox.off("click.dtsp").on("input.dtsp", function() { var t = h.dom.searchBox.val();
            h.s.dtPane.search(t).draw(), "string" == typeof t && (0 < t.length || 0 === t.length && 0 < h.s.dtPane.rows({ selected: !0 }).data().toArray().length) ? h.dom.clear.removeClass(h.classes.disabledButton).removeAttr("disabled") : h.dom.clear.addClass(h.classes.disabledButton).attr("disabled", "true"), h.s.dt.state.save() }), this.s.dtPane.select.style(this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.select && this.s.colOpts.dtOpts.select.style ? this.s.colOpts.dtOpts.select.style : this.c.dtOpts && this.c.dtOpts.select && this.c.dtOpts.select.style ? this.c.dtOpts.select.style : "os")) }, B.prototype._serverPopulate = function(t) { t.tableLength ? (this.s.tableLength = t.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (null === this.s.tableLength || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength); var s = this.s.dt.column(this.s.index).dataSrc(); if (t.searchPanes.options[s])
            for (var e = 0, a = t.searchPanes.options[s]; e < a.length; e++) { var i = a[e];
                this.s.rowData.arrayFilter.push({ display: i.label, filter: i.value, sort: i.label, type: i.label }), this.s.rowData.bins[i.value] = i.total }
        t = Object.keys(this.s.rowData.bins).length, s = this._uniqueRatio(t, this.s.tableLength);!1 === this.s.displayed && ((void 0 === this.s.colOpts.show && null === this.s.colOpts.threshold ? s > this.c.threshold : s > this.s.colOpts.threshold) || !0 !== this.s.colOpts.show && t <= 1) ? (this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1) : (this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0) }, B.prototype.show = function() { this.s.displayed && (this.dom.topRow.removeClass(this.classes.bordered), this.dom.nameButton.removeClass(this.classes.disabledButton), this.dom.countButton.removeClass(this.classes.disabledButton), this.dom.searchButton.removeClass(this.classes.disabledButton), this.dom.collapseButton.removeClass(this.classes.rotated), _(this.s.dtPane.table().container()).removeClass(this.classes.hidden), this.dom.topRow.trigger("collapse.dtsps")) }, B.prototype._uniqueRatio = function(t, s) { return 0 < s && (0 < this.s.rowData.totalOptions && !this.s.dt.page.info().serverSide || this.s.dt.page.info().serverSide && 0 < this.s.tableLength) ? t / this.s.rowData.totalOptions : 1 }, B.prototype.updateTable = function() { var t = this.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(t) { return t.filter });
        this.s.selections = t, this._searchExtras() }, B.prototype._getComparisonRows = function() { var t = this.s.colOpts.options || (this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0); if (void 0 !== t) { var s = this.s.dt.rows(),
                e = s.data().toArray(),
                a = [];
            this.s.dtPane.clear(), this.s.indexes = []; for (var i = 0, o = t; i < o.length; i++) { var n = o[i],
                    r = "" !== n.label ? n.label : this.emptyMessage(),
                    l = { className: n.className, display: r, filter: "function" == typeof n.value ? n.value : [], sort: void 0 !== n.order ? n.order : r, total: 0, type: r }; if ("function" == typeof n.value) { for (var d = 0; d < e.length; d++) n.value.call(this.s.dt, e[d], s[0][d]) && l.total++; "function" != typeof l.filter && l.filter.push(n.filter) }
                a.push(this.addRow(l.display, l.filter, l.sort, l.type, l.className, l.total)) } return a } }, B.prototype._getMessage = function(t) { return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, t.total) }, B.prototype._getShown = function(t) {}, B.prototype._getPaneConfig = function() { var a = this,
            t = l.Scroller,
            s = this.s.dt.settings()[0].oLanguage; return s.url = void 0, s.sUrl = void 0, { columnDefs: [{ className: "dtsp-nameColumn", data: "display", render: function(t, s, e) { return "sort" === s ? e.sort : "type" === s ? e.type : (e = a._getMessage(e), e = '<span class="' + a.classes.pill + '">' + e + "</span>", a.c.viewCount && a.s.colOpts.viewCount || (e = ""), "filter" === s ? "string" == typeof t && null !== t.match(/<[^>]*>/) ? t.replace(/<[^>]*>/g, "") : t : '<div class="' + a.classes.nameCont + '"><span title="' + ("string" == typeof t && null !== t.match(/<[^>]*>/) ? t.replace(/<[^>]*>/g, "") : t) + '" class="' + a.classes.name + '">' + t + "</span>" + e + "</div>") }, targets: 0, type: this.s.dt.settings()[0].aoColumns[this.s.index] ? this.s.dt.settings()[0].aoColumns[this.s.index]._sManualType : null }, { className: "dtsp-countColumn " + this.classes.badgePill, data: "total", searchable: !1, targets: 1, visible: !1 }], deferRender: !0, info: !1, language: s, paging: !!t, scrollX: !1, scrollY: "200px", scroller: !!t, select: !0, stateSave: !!this.s.dt.settings()[0].oFeatures.bStateSave } }, B.prototype._makeSelection = function() { this.updateTable(), this.s.updating = !0, this.s.dt.draw(), this.s.updating = !1 }, B.prototype._populatePaneArray = function(t, s, e, a) { void 0 === a && (a = this.s.rowData.bins); var i, e = e.fastData; "string" == typeof this.s.colOpts.orthogonal ? (i = e(t, this.s.index, this.s.colOpts.orthogonal), this.s.rowData.filterMap.set(t, i), this._addOption(i, i, i, i, s, a)) : ("string" == typeof(i = null === (i = e(t, this.s.index, this.s.colOpts.orthogonal.search)) ? "" : i) && (i = i.replace(/<[^>]*>/g, "")), this.s.rowData.filterMap.set(t, i), a[i] ? a[i]++ : (a[i] = 1, this._addOption(i, e(t, this.s.index, this.s.colOpts.orthogonal.display), e(t, this.s.index, this.s.colOpts.orthogonal.sort), e(t, this.s.index, this.s.colOpts.orthogonal.type), s, a))), this.s.rowData.totalOptions++ }, B.prototype._reloadSelect = function(t) { if (void 0 !== t) { for (var s, e = 0; e < t.searchPanes.panes.length; e++)
                if (t.searchPanes.panes[e].id === this.s.index) { s = e; break }
            if (s)
                for (var a = this.s.dtPane, i = a.rows({ order: "index" }).data().map(function(t) { return null !== t.filter ? t.filter.toString() : null }).toArray(), o = 0, n = t.searchPanes.panes[s].selected; o < n.length; o++) { var r = n[o],
                        l = -1; - 1 < (l = null !== r ? i.indexOf(r.toString()) : l) && (this.s.serverSelecting = !0, a.row(l).select(), this.s.serverSelecting = !1) } } }, B.prototype._updateSelection = function(t) {
        function s(t) { T.versionCheck("2") ? e.s.dt.processing(t) : (t = e.s.dt.settings()[0]).oApi._fnProcessingDisplay(t, !1) } var e = this;
        s(!0), setTimeout(function() { e.s.scrollTop = _(e.s.dtPane.table().node()).parent()[0].scrollTop, e.s.dt.page.info().serverSide && !e.s.updating ? e.s.serverSelecting || (e.s.serverSelect = e.s.dtPane.rows({ selected: !0 }).data().toArray(), e.s.dt.draw(!1)) : t && e._makeSelection(), s(!1) }, 1) }, B.prototype._addOption = function(t, s, e, a, i, o) { if (Array.isArray(t) || t instanceof l.Api) { if (t instanceof l.Api && (t = t.toArray(), s = s.toArray()), t.length !== s.length) throw new Error("display and filter not the same length"); for (var n = 0; n < t.length; n++) o[t[n]] ? o[t[n]]++ : (o[t[n]] = 1, i.push({ display: s[n], filter: t[n], sort: e[n], type: a[n] })), this.s.rowData.totalOptions++ } else "string" == typeof this.s.colOpts.orthogonal ? (o[t] ? o[t]++ : (o[t] = 1, i.push({ display: s, filter: t, sort: e, type: a })), this.s.rowData.totalOptions++) : i.push({ display: s, filter: t, sort: e, type: a }) }, B.prototype._buildPane = function(t, s, e) { var i = this,
            a = (void 0 === t && (t = []), void 0 === s && (s = null), void 0 === e && (e = null), this.s.selections = [], this.s.dt.state.loaded()); if (this.s.listSet && (a = this.s.dt.state()), this.s.colExists) { var o = -1; if (a && a.searchPanes && a.searchPanes.panes)
                for (var n = 0; n < a.searchPanes.panes.length; n++)
                    if (a.searchPanes.panes[n].id === this.s.index) { o = n; break }
            if ((!1 === this.s.colOpts.show || void 0 !== this.s.colOpts.show && !0 !== this.s.colOpts.show) && -1 === o) return this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1; if (!0 !== this.s.colOpts.show && -1 === o || (this.s.displayed = !0), this.s.dt.page.info().serverSide || s && s.searchPanes && s.searchPanes.options) s && s.searchPanes && s.searchPanes.options && this._serverPopulate(s);
            else { 0 === this.s.rowData.arrayFilter.length && (this.s.rowData.totalOptions = 0, this._populatePane(), this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins); var r = Object.keys(this.s.rowData.binsOriginal).length,
                    l = this._uniqueRatio(r, this.s.dt.rows()[0].length); if (!1 === this.s.displayed && ((void 0 === this.s.colOpts.show && null === this.s.colOpts.threshold ? l > this.c.threshold : l > this.s.colOpts.threshold) || !0 !== this.s.colOpts.show && r <= 1)) return this.dom.container.addClass(this.classes.hidden), void(this.s.displayed = !1);
                this.dom.container.addClass(this.classes.show), this.s.displayed = !0 } } else this.s.displayed = !0;
        this._displayPane(), this.s.listSet || this.dom.dtP.on("stateLoadParams.dtsp", function(t, s, e) { _.isEmptyObject(i.s.dt.state.loaded()) && _.each(e, function(t) { delete e[t] }) }), null !== e && 0 < this.dom.panesContainer.has(e).length ? this.dom.container.insertAfter(e) : this.dom.panesContainer.prepend(this.dom.container);
        l = _.fn.dataTable.ext.errMode, _.fn.dataTable.ext.errMode = "none", this.dom.dtP.on("init.dt", function(t, s) { var e = i.dom.dtP.DataTable(),
                a = e.select.style();
            e.select.style(a) }), this.s.dtPane = this.dom.dtP.DataTable(_.extend(!0, this._getPaneConfig(), this.c.dtOpts, this.s.colOpts ? this.s.colOpts.dtOpts : {}, this.s.colOpts.options || !this.s.colExists ? { createdRow: function(t, s) { _(t).addClass(s.className) } } : void 0, null !== this.s.customPaneSettings && this.s.customPaneSettings.dtOpts ? this.s.customPaneSettings.dtOpts : {}, _.fn.dataTable.versionCheck("2") ? { layout: { bottomStart: null, bottomEnd: null, topStart: null, topEnd: null } } : { dom: "t" })), this.dom.dtP.addClass(this.classes.table), r = "Custom Pane"; if (this.s.customPaneSettings && this.s.customPaneSettings.header ? r = this.s.customPaneSettings.header : this.s.colOpts.header ? r = this.s.colOpts.header : this.s.colExists && (r = _.fn.dataTable.versionCheck("2") ? this.s.dt.column(this.s.index).title() : this.s.dt.settings()[0].aoColumns[this.s.index].sTitle), r = this._escapeHTML(r), this.dom.searchBox.attr("placeholder", r), _.fn.dataTable.ext.errMode = l, this.s.colExists)
            for (var d = 0, h = this.s.rowData.arrayFilter.length; d < h; d++)
                if (this.s.dt.page.info().serverSide)
                    for (var c = this.addRow(this.s.rowData.arrayFilter[d].display, this.s.rowData.arrayFilter[d].filter, this.s.rowData.arrayFilter[d].sort, this.s.rowData.arrayFilter[d].type), p = 0, u = this.s.serverSelect; p < u.length; p++) u[p].filter === this.s.rowData.arrayFilter[d].filter && (this.s.serverSelecting = !0, c.select(), this.s.serverSelecting = !1);
                else !this.s.dt.page.info().serverSide && this.s.rowData.arrayFilter[d] ? this.addRow(this.s.rowData.arrayFilter[d].display, this.s.rowData.arrayFilter[d].filter, this.s.rowData.arrayFilter[d].sort, this.s.rowData.arrayFilter[d].type) : this.s.dt.page.info().serverSide || this.addRow("", "", "", "");
                (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) && this._getComparisonRows(), this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.adjustTopRow(), this.setListeners(), this.s.listSet = !0; for (var f = 0, g = t; f < g.length; f++) { var v = g[f]; if (v)
                for (var m = 0, w = this.s.dtPane.rows().indexes().toArray(); m < w.length; m++) c = w[m], this.s.dtPane.row(c).data() && v.filter === this.s.dtPane.row(c).data().filter && (this.s.dt.page.info().serverSide ? (this.s.serverSelecting = !0, this.s.dtPane.row(c).select(), this.s.serverSelecting = !1) : this.s.dtPane.row(c).select()) } if (this.s.dt.page.info().serverSide && this.s.dtPane.search(this.dom.searchBox.val()).draw(), (this.c.initCollapsed && !1 !== this.s.colOpts.initCollapsed || this.s.colOpts.initCollapsed) && (this.c.collapse && !1 !== this.s.colOpts.collapse || this.s.colOpts.collapse) && (this.s.dtPane.settings()[0]._bInitComplete ? this.collapse() : this.s.dtPane.one("init", function() { return i.collapse() })), a && a.searchPanes && a.searchPanes.panes && (!s || 1 === s.draw)) { this._reloadSelect(a); for (var P = 0, y = a.searchPanes.panes; P < y.length; P++) { var b = y[P];
                b.id === this.s.index && (b.searchTerm && 0 < b.searchTerm.length && this.dom.searchBox.val(b.searchTerm).trigger("input"), b.order && this.s.dtPane.order(b.order).draw(), b.collapsed ? this.collapse() : this.show()) } } return !0 }, B.prototype._displayPane = function() { this.dom.dtP.empty(), this.dom.topRow.empty().addClass(this.classes.topRow), 3 < parseInt(this.c.layout.split("-")[1], 10) && this.dom.container.addClass(this.classes.smallGap), this.dom.topRow.addClass(this.classes.subRowsContainer).append(this.dom.upper.append(this.dom.searchCont)).append(this.dom.lower.append(this.dom.buttonGroup)), (!1 === this.c.dtOpts.searching || this.s.colOpts.dtOpts && !1 === this.s.colOpts.dtOpts.searching || !this.c.controls || !this.s.colOpts.controls || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && void 0 !== this.s.customPaneSettings.dtOpts.searching && !this.s.customPaneSettings.dtOpts.searching) && this.dom.searchBox.removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton).attr("disabled", "true"), this.dom.searchBox.appendTo(this.dom.searchCont), this._searchContSetup(), this.c.clear && this.c.controls && this.s.colOpts.controls && this.dom.clear.appendTo(this.dom.buttonGroup), this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.nameButton.appendTo(this.dom.buttonGroup), this.c.viewCount && this.s.colOpts.viewCount && this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls && this.dom.countButton.appendTo(this.dom.buttonGroup), (this.c.collapse && !1 !== this.s.colOpts.collapse || this.s.colOpts.collapse) && this.c.controls && this.s.colOpts.controls && this.dom.collapseButton.appendTo(this.dom.buttonGroup), this.dom.container.prepend(this.dom.topRow).append(this.dom.dtP).show() }, B.prototype._escapeHTML = function(t) { return t.toString().replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"') }, B.prototype._getBonusOptions = function() { return _.extend(!0, {}, B.defaults, { threshold: null }, this.c || {}) }, B.prototype._getOptions = function() { var t = this.s.dt.settings()[0].aoColumns[this.s.index].searchPanes,
            s = _.extend(!0, {}, B.defaults, { collapse: null, emptyMessage: !1, initCollapsed: null, threshold: null }, t); return t && t.hideCount && void 0 === t.viewCount && (s.viewCount = !t.hideCount), s }, B.prototype._populatePane = function() { this.s.rowData.arrayFilter = [], this.s.rowData.bins = {}; var t = this.s.dt.context[0]; if (!this.s.dt.page.info().serverSide)
            for (var s = 0, e = this.s.dt.rows().indexes().toArray(); s < e.length; s++) { var a = e[s];
                this._populatePaneArray(a, this.s.rowData.arrayFilter, t) } }, B.prototype._search = function(t, s) { for (var e = this.s.colOpts, a = this.s.dt, i = 0, o = this.s.selections; i < o.length; i++) { var n = o[i]; if ("string" == typeof n && "string" == typeof t && (n = this._escapeHTML(n)), Array.isArray(t)) { if ("and" === e.combiner) { if (!t.includes(n)) return !1 } else if (t.includes(n)) return !0 } else if ("function" == typeof n) { if (n.call(a, a.row(s).data(), s)) { if ("or" === e.combiner) return !0 } else if ("and" === e.combiner) return !1 } else if (t === n || ("string" != typeof t || 0 !== t.length) && t == n || null === n && "string" == typeof t && "" === t) return !0 } return "and" === e.combiner }, B.prototype._searchContSetup = function() { this.c.controls && this.s.colOpts.controls && this.dom.searchButton.appendTo(this.dom.searchLabelCont), !1 === this.c.dtOpts.searching || !1 === this.s.colOpts.dtOpts.searching || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && void 0 !== this.s.customPaneSettings.dtOpts.searching && !this.s.customPaneSettings.dtOpts.searching || this.dom.searchLabelCont.appendTo(this.dom.searchCont) }, B.prototype._searchExtras = function() { var t = this.s.updating,
            s = (this.s.updating = !0, this.s.dtPane.rows({ selected: !0 }).data().pluck("filter").toArray()),
            e = s.indexOf(this.emptyMessage()),
            a = _(this.s.dtPane.table().container()); - 1 < e && (s[e] = ""), 0 < s.length ? a.addClass(this.classes.selected) : 0 === s.length && a.removeClass(this.classes.selected), this.s.updating = t }, B.version = "2.1.2", B.classes = { bordered: "dtsp-bordered", buttonGroup: "dtsp-buttonGroup", buttonSub: "dtsp-buttonSub", caret: "dtsp-caret", clear: "dtsp-clear", clearAll: "dtsp-clearAll", clearButton: "clearButton", collapseAll: "dtsp-collapseAll", collapseButton: "dtsp-collapseButton", container: "dtsp-searchPane", countButton: "dtsp-countButton", disabledButton: "dtsp-disabledButton", hidden: "dtsp-hidden", hide: "dtsp-hide", layout: "dtsp-", name: "dtsp-name", nameButton: "dtsp-nameButton", nameCont: "dtsp-nameCont", narrow: "dtsp-narrow", paneButton: "dtsp-paneButton", paneInputButton: "dtsp-paneInputButton", pill: "dtsp-pill", rotated: "dtsp-rotated", search: "dtsp-search", searchCont: "dtsp-searchCont", searchIcon: "dtsp-searchIcon", searchLabelCont: "dtsp-searchButtonCont", selected: "dtsp-selected", smallGap: "dtsp-smallGap", subRow1: "dtsp-subRow1", subRow2: "dtsp-subRow2", subRowsContainer: "dtsp-subRowsContainer", title: "dtsp-title", topRow: "dtsp-topRow" }, B.defaults = { clear: !0, collapse: !0, combiner: "or", container: function(t) { return t.table().container() }, controls: !0, dtOpts: {}, emptyMessage: null, hideCount: !1, i18n: { clearPane: "&times;", count: "{total}", emptyMessage: "<em>No data</em>" }, initCollapsed: !1, layout: "auto", name: void 0, orderable: !0, orthogonal: { display: "display", filter: "filter", hideCount: !1, search: "filter", show: void 0, sort: "sort", threshold: .6, type: "type", viewCount: !0 }, preSelect: [], threshold: .6, viewCount: !0 }, h = B, (r && r.__extends || (a = function(t, s) { return (a = Object.setPrototypeOf || ({ __proto__: [] }
            instanceof Array ? function(t, s) { t.__proto__ = s } : function(t, s) { for (var e in s) s.hasOwnProperty(e) && (t[e] = s[e]) }))(t, s) }, function(t, s) {
        function e() { this.constructor = t }
        a(t, s), t.prototype = null === s ? Object.create(s) : (e.prototype = s.prototype, new e) }))(s, d = h), s.prototype._emptyPane = function() { var t, e, s = this.s.dtPane; return T.versionCheck("2") ? ((t = s.select.last()) && s.row(t.row).any() && (e = s.row(t.row).data().index), s.rows().remove(), function() { var t;
            void 0 !== e && (t = s.row(function(t, s) { return s.index === e }).index(), s.select.last({ row: t, column: 0 })) }) : (s.rows().remove(), function() {}) }, s.prototype._serverPopulate = function(t) { this.s.rowData.binsShown = {}, this.s.rowData.arrayFilter = [], void 0 !== t.tableLength ? (this.s.tableLength = t.tableLength, this.s.rowData.totalOptions = this.s.tableLength) : (null === this.s.tableLength || this.s.dt.rows()[0].length > this.s.tableLength) && (this.s.tableLength = this.s.dt.rows()[0].length, this.s.rowData.totalOptions = this.s.tableLength); var s, e = this.s.dt.column(this.s.index).dataSrc(); if (void 0 !== t.searchPanes.options[e])
            for (var a = 0, i = t.searchPanes.options[e]; a < i.length; a++) { var o = i[a];
                this.s.rowData.arrayFilter.push({ display: o.label, filter: o.value, shown: +o.count, sort: o.label, total: +o.total, type: o.label }), this.s.rowData.binsShown[o.value] = +o.count, this.s.rowData.bins[o.value] = +o.total }
        t = Object.keys(this.s.rowData.bins).length, e = this._uniqueRatio(t, this.s.tableLength); if (!this.s.colOpts.show && !1 === this.s.displayed && ((void 0 === this.s.colOpts.show && null === this.s.colOpts.threshold ? e > this.c.threshold : e > this.s.colOpts.threshold) || !0 !== this.s.colOpts.show && t <= 1)) this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
        else if (this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter, this.s.rowData.binsOriginal = this.s.rowData.bins, this.s.displayed = !0, this.s.dtPane) { for (var n = this.s.serverSelect, e = this._emptyPane(), r = 0, l = this.s.rowData.arrayFilter; r < l.length; r++)
                if (s = l[r], this._shouldAddRow(s))
                    for (var d = this.addRow(s.display, s.filter, s.sort, s.type), h = 0; h < n.length; h++)
                        if ((u = n[h]).filter === s.filter) { this.s.serverSelecting = !0, d.select(), this.s.serverSelecting = !1, n.splice(h, 1), this.s.selections.push(s.filter); break }
            for (var c = 0, p = n; c < p.length; c++)
                for (var u = p[c], f = 0, g = this.s.rowData.arrayOriginal; f < g.length; f++)(s = g[f]).filter === u.filter && (d = this.addRow(s.display, s.filter, s.sort, s.type), this.s.serverSelecting = !0, d.select(), this.s.serverSelecting = !1, this.s.selections.push(s.filter));
            this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray(), this.s.dtPane.draw(), e() } }, s.prototype.updateRows = function() { if (!this.s.dt.page.info().serverSide) { this.s.rowData.binsShown = {}; for (var t = 0, s = this.s.dt.rows({ search: "applied" }).indexes().toArray(); t < s.length; t++) { var e = s[t];
                this._updateShown(e, this.s.dt.settings()[0], this.s.rowData.binsShown) } } for (var a = this, i = 0, o = this.s.dtPane.rows().data().toArray(); i < o.length; i++) ! function(e) { e.shown = "number" == typeof a.s.rowData.binsShown[e.filter] ? a.s.rowData.binsShown[e.filter] : 0, a.s.dtPane.row(function(t, s) { return s && s.index === e.index }).data(e) }(o[i]);
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop }, s.prototype._makeSelection = function() {}, s.prototype._reloadSelect = function() {}, s.prototype._shouldAddRow = function(t) { return !0 }, s.prototype._updateSelection = function() {!this.s.dt.page.info().serverSide || this.s.updating || this.s.serverSelecting || (this.s.serverSelect = this.s.dtPane.rows({ selected: !0 }).data().toArray()) }, s.prototype._updateShown = function(t, s, e) { void 0 === e && (e = this.s.rowData.binsShown);

        function a(t) { e[t] ? e[t]++ : e[t] = 1 } var i = "string" == typeof this.s.colOpts.orthogonal ? this.s.colOpts.orthogonal : this.s.colOpts.orthogonal.search,
            t = (0, this.s.dt.settings()[0].fastData)(t, this.s.index, i); if (Array.isArray(t))
            for (var o = 0, n = t; o < n.length; o++) a(n[o]);
        else a(t) }, t = s, (r && r.__extends || (i = function(t, s) { return (i = Object.setPrototypeOf || ({ __proto__: [] }
            instanceof Array ? function(t, s) { t.__proto__ = s } : function(t, s) { for (var e in s) s.hasOwnProperty(e) && (t[e] = s[e]) }))(t, s) }, function(t, s) {
        function e() { this.constructor = t }
        i(t, s), t.prototype = null === s ? Object.create(s) : (e.prototype = s.prototype, new e) }))(e, p = t), e.prototype._getMessage = function(t) { var s = this.s.dt.i18n("searchPanes.count", this.c.i18n.count),
            e = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered); return (this.s.filteringActive ? e : s).replace(/{total}/g, t.total).replace(/{shown}/g, t.shown) }, e.prototype._getShown = function(t) { return this.s.rowData.binsShown && this.s.rowData.binsShown[t] ? this.s.rowData.binsShown[t] : 0 }, g = e, (r && r.__extends || (u = function(t, s) { return (u = Object.setPrototypeOf || ({ __proto__: [] }
            instanceof Array ? function(t, s) { t.__proto__ = s } : function(t, s) { for (var e in s) s.hasOwnProperty(e) && (t[e] = s[e]) }))(t, s) }, function(t, s) {
        function e() { this.constructor = t }
        u(t, s), t.prototype = null === s ? Object.create(s) : (e.prototype = s.prototype, new e) }))(L, v = t), L.prototype.updateRows = function() { var t = this.s.dtPane.rows({ selected: !0 }).data().toArray(); if (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) { this._getComparisonRows(); for (var s = this.s.dtPane.rows().toArray()[0], e = 0; e < s.length; e++) { var a = this.s.dtPane.row(s[e]),
                    i = a.data(); if (void 0 !== i)
                    if (0 === i.shown) a.remove(), s = this.s.dtPane.rows().toArray()[0], e--;
                    else
                        for (var o = 0, n = t; o < n.length; o++)
                            if (m = n[o], i.filter === m.filter) { a.select(), t.splice(e, 1), this.s.selections.push(i.filter); break } } } else { if (!this.s.dt.page.info().serverSide) { this._activePopulatePane(), this.s.rowData.binsShown = {}; for (var r = 0, l = this.s.dt.rows({ search: "applied" }).indexes().toArray(); r < l.length; r++) { var d = l[r];
                    this._updateShown(d, this.s.dt.settings()[0], this.s.rowData.binsShown) } }
            this.s.dtPane.rows().remove(); for (var h = 0, c = this.s.rowData.arrayFilter; h < c.length; h++) { var p = c[h]; if (0 !== p.shown)
                    for (var u = this.addRow(p.display, p.filter, p.sort, p.type, void 0), f = 0; f < t.length; f++)
                        if (t[f].filter === p.filter) { u.select(), t.splice(f, 1), this.s.selections.push(p.filter); break } } for (var g = 0, v = t; g < v.length; g++)
                for (var m = v[g], w = 0, P = this.s.rowData.arrayOriginal; w < P.length; w++) { var y = P[w];
                    y.filter === m.filter && (this.addRow(y.display, y.filter, y.sort, y.type, void 0).select(), this.s.selections.push(y.filter)) } }
        this.s.dtPane.draw(), this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop, this.s.dt.page.info().serverSide || this.s.dt.draw(!1) }, L.prototype._activePopulatePane = function() { this.s.rowData.arrayFilter = [], this.s.rowData.bins = {}; var t = this.s.dt.settings()[0]; if (!this.s.dt.page.info().serverSide)
            for (var s = 0, e = this.s.dt.rows({ search: "applied" }).indexes().toArray(); s < e.length; s++) { var a = e[s];
                this._populatePaneArray(a, this.s.rowData.arrayFilter, t) } }, L.prototype._getComparisonRows = function() { var t = this.s.colOpts.options || (this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0); if (void 0 !== t) { var s = this.s.dt.rows(),
                e = this.s.dt.rows({ search: "applied" }),
                a = s.data().toArray(),
                i = e.data().toArray(),
                o = [];
            this.s.dtPane.clear(), this.s.indexes = []; for (var n = 0, r = t; n < r.length; n++) { var l = r[n],
                    d = "" !== l.label ? l.label : this.emptyMessage(),
                    h = { className: l.className, display: d, filter: "function" == typeof l.value ? l.value : [], shown: 0, sort: d, total: 0, type: d }; if ("function" == typeof l.value) { for (var c = 0; c < a.length; c++) l.value.call(this.s.dt, a[c], s[0][c]) && h.total++; for (var p = 0; p < i.length; p++) l.value.call(this.s.dt, i[p], e[0][p]) && h.shown++; "function" != typeof h.filter && h.filter.push(l.filter) }
                o.push(this.addRow(h.display, h.filter, h.sort, h.type, h.className, h.total, h.shown)) } return o } }, L.prototype._getMessage = function(t) { return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, t.total).replace(/{shown}/g, t.shown) }, L.prototype._getShown = function(t) { return this.s.rowData.binsShown && this.s.rowData.binsShown[t] ? this.s.rowData.binsShown[t] : 0 }, L.prototype._shouldAddRow = function(t) { return 0 < t.shown }, P = L, (r && r.__extends || (m = function(t, s) { return (m = Object.setPrototypeOf || ({ __proto__: [] }
            instanceof Array ? function(t, s) { t.__proto__ = s } : function(t, s) { for (var e in s) s.hasOwnProperty(e) && (t[e] = s[e]) }))(t, s) }, function(t, s) {
        function e() { this.constructor = t }
        m(t, s), t.prototype = null === s ? Object.create(s) : (e.prototype = s.prototype, new e) }))(R, y = P), R.prototype._activePopulatePane = function() { this.s.rowData.arrayFilter = [], this.s.rowData.binsShown = {}; var t = this.s.dt.settings()[0]; if (!this.s.dt.page.info().serverSide)
            for (var s = 0, e = this.s.dt.rows({ search: "applied" }).indexes().toArray(); s < e.length; s++) { var a = e[s];
                this._populatePaneArray(a, this.s.rowData.arrayFilter, t, this.s.rowData.binsShown) } }, R.prototype._getMessage = function(t) { var s = this.s.dt.i18n("searchPanes.count", this.c.i18n.count),
            e = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered); return (this.s.filteringActive ? e : s).replace(/{total}/g, t.total).replace(/{shown}/g, t.shown) }, C = R, M.prototype.clearSelections = function() { for (var t, s = 0, e = this.s.panes; s < e.length; s++)(t = e[s]).s.dtPane && (t.s.scrollTop = t.s.dtPane.table().node().parentNode.scrollTop);
        this.dom.container.find("." + this.classes.search.replace(/\s+/g, ".")).each(function() { b(this).val("").trigger("input") }), this.s.selectionList = []; for (var a = [], i = 0, o = this.s.panes; i < o.length; i++)(t = o[i]).s.dtPane && a.push(t.clearPane()); return a }, M.prototype.getNode = function() { return this.dom.container }, M.prototype.rebuild = function(t, s) { void 0 === t && (t = !1), void 0 === s && (s = !1), this.dom.emptyMessage.detach(), !1 === t && this.dom.panes.empty(); for (var e = [], a = 0, i = this.s.panes; a < i.length; a++) { var o = i[a];!1 !== t && o.s.index !== t || (o.clearData(), o.rebuildPane(this.s.dt.page.info().serverSide ? this.s.serverData : void 0, s), this.dom.panes.append(o.dom.container), e.push(o)) } return this._updateSelection(), this._updateFilterCount(), this._attachPaneContainer(), this._initSelectionListeners(!1), this.s.dt.draw(!s), this.resizePanes(), 1 === e.length ? e[0] : e }, M.prototype.resizePanes = function() { var t; if ("auto" === this.c.layout) { for (var s = b(this.s.dt.searchPanes.container()).width(), s = Math.floor(s / this.s.minPaneWidth), e = 1, a = 0, i = [], o = 0, n = this.s.panes; o < n.length; o++)(t = n[o]).s.displayed && i.push(t.s.index); var r = i.length; if (s === r) e = s;
            else
                for (var l = s; 1 < l; l--) { var d = r % l; if (0 == d) { e = l, a = 0; break }
                    a < d && (e = l, a = d) }
            var h = 0 !== a ? i.slice(i.length - a, i.length) : [];
            this.s.panes.forEach(function(t) { t.s.displayed && t.resize("columns-" + (h.includes(t.s.index) ? a : e)) }) } else
            for (var c = 0, p = this.s.panes; c < p.length; c++)(t = p[c]).adjustTopRow(); return this }, M.prototype._initSelectionListeners = function(t) {}, M.prototype._serverTotals = function() {}, M.prototype._setXHR = function() {
        function a(t) { t && t.searchPanes && t.searchPanes.options && (s.s.serverData = t, s.s.serverData.tableLength = t.recordsTotal, s._serverTotals()) } var s = this,
            i = this.s.dt.settings()[0];
        this.s.dt.on("xhr.dtsps", function(t, s, e) { i === s && a(e) }), a(this.s.dt.ajax.json()) }, M.prototype._stateLoadListener = function() { var d = this,
            h = this.s.dt.settings()[0];
        this.s.dt.on("stateLoadParams.dtsps", function(t, s, e) { if (void 0 !== e.searchPanes && s === h) { if (d.clearSelections(), d.s.selectionList = e.searchPanes.selectionList || [], e.searchPanes.panes)
                    for (var a = 0, i = e.searchPanes.panes; a < i.length; a++)
                        for (var o = i[a], n = 0, r = d.s.panes; n < r.length; n++) { var l = r[n];
                            o.id === l.s.index && l.s.dtPane && (l.dom.searchBox.val(o.searchTerm), l.s.dtPane.order(o.order)) }
                d._makeSelections(d.s.selectionList) } }) }, M.prototype._updateSelection = function() { this.s.selectionList = []; for (var t = 0, s = this.s.panes; t < s.length; t++) { var e, a = s[t];
            a.s.dtPane && (e = a.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(t) { return t.filter })).length && this.s.selectionList.push({ column: a.s.index, rows: e }) } }, M.prototype._attach = function() { var t = this;
        this.dom.titleRow.removeClass(this.classes.hide).detach().append(this.dom.title), this.c.clear && this.dom.clearAll.appendTo(this.dom.titleRow).off("click.dtsps").on("click.dtsps", function() { return t.clearSelections() }), this.c.collapse && (this.dom.showAll.appendTo(this.dom.titleRow), this.dom.collapseAll.appendTo(this.dom.titleRow), this._setCollapseListener()); for (var s = 0, e = this.s.panes; s < e.length; s++) { var a = e[s];
            this.dom.panes.append(a.dom.container) }
        this.dom.container.text("").removeClass(this.classes.hide).append(this.dom.titleRow).append(this.dom.panes), this.s.panes.forEach(function(t) { return t.setListeners() }), 0 === b("div." + this.classes.container).length && this.dom.container.prependTo(this.s.dt) }, M.prototype._attachMessage = function() { var s; try { s = this.s.dt.i18n("searchPanes.emptyPanes", this.c.i18n.emptyPanes) } catch (t) { s = null }
        null === s ? (this.dom.container.addClass(this.classes.hide), this.dom.titleRow.removeClass(this.classes.hide)) : (this.dom.container.removeClass(this.classes.hide), this.dom.titleRow.addClass(this.classes.hide), this.dom.emptyMessage.html(s).appendTo(this.dom.container)) }, M.prototype._attachPaneContainer = function() { for (var t = 0, s = this.s.panes; t < s.length; t++)
            if (!0 === s[t].s.displayed) return void this._attach();
        this._attachMessage() }, M.prototype._checkCollapse = function() { for (var t = !0, s = !0, e = 0, a = this.s.panes; e < a.length; e++) { var i = a[e];
            i.s.displayed && (i.dom.collapseButton.hasClass(i.classes.rotated) ? (this.dom.showAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), s = !1) : (this.dom.collapseAll.removeClass(this.classes.disabledButton).removeAttr("disabled"), t = !1)) }
        t && this.dom.collapseAll.addClass(this.classes.disabledButton).attr("disabled", "true"), s && this.dom.showAll.addClass(this.classes.disabledButton).attr("disabled", "true") }, M.prototype._checkMessage = function() { for (var t = 0, s = this.s.panes; t < s.length; t++)
            if (!0 === s[t].s.displayed) return this.dom.emptyMessage.detach(), void this.dom.titleRow.removeClass(this.classes.hide);
        this._attachMessage() }, M.prototype._collapseAll = function() { for (var t = 0, s = this.s.panes; t < s.length; t++) s[t].collapse() }, M.prototype._findPane = function(t) { for (var s = 0, e = this.s.panes; s < e.length; s++) { var a = e[s]; if (t === a.s.name) return a } }, M.prototype._getState = function() { var t = this.s.dt.state.loaded();
        t && t.searchPanes && t.searchPanes.selectionList && (this.s.selectionList = t.searchPanes.selectionList) }, M.prototype._makeSelections = function(t) { for (var s = 0, e = t; s < e.length; s++) { for (var a = e[s], i = void 0, o = 0, n = this.s.panes; o < n.length; o++) { var r = n[o]; if (r.s.index === a.column) { i = r; break } } if (i && i.s.dtPane) { for (var l = 0; l < i.s.dtPane.rows().data().toArray().length; l++) a.rows.includes("function" == typeof i.s.dtPane.row(l).data().filter ? i.s.dtPane.cell(l, 0).data() : i.s.dtPane.row(l).data().filter) && i.s.dtPane.row(l).select();
                i.updateTable() } } }, M.prototype._paneDeclare = function(t, s, e) { for (var a = this, i = (t.columns(0 < this.c.columns.length ? this.c.columns : void 0).eq(0).each(function(t) { a.s.panes.push(new a.s.paneClass(s, e, t, a.dom.panes)) }), t.columns().eq(0).toArray().length), o = 0; o < this.c.panes.length; o++) this.s.panes.push(new this.s.paneClass(s, e, i + o, this.dom.panes, this.c.panes[o]));
        0 < this.c.order.length && (this.s.panes = this.c.order.map(function(t) { return a._findPane(t) })), this.s.dt.settings()[0]._bInitComplete ? this._startup(t) : this.s.dt.settings()[0].aoInitComplete.push(function() { return a._startup(t) }) }, M.prototype._setCollapseListener = function() { var t = this;
        this.dom.collapseAll.off("click.dtsps").on("click.dtsps", function() { t._collapseAll(), t.dom.collapseAll.addClass(t.classes.disabledButton).attr("disabled", "true"), t.dom.showAll.removeClass(t.classes.disabledButton).removeAttr("disabled"), t.s.dt.state.save() }), this.dom.showAll.off("click.dtsps").on("click.dtsps", function() { t._showAll(), t.dom.showAll.addClass(t.classes.disabledButton).attr("disabled", "true"), t.dom.collapseAll.removeClass(t.classes.disabledButton).removeAttr("disabled"), t.s.dt.state.save() }); for (var s = 0, e = this.s.panes; s < e.length; s++) e[s].dom.topRow.off("collapse.dtsps").on("collapse.dtsps", function() { return t._checkCollapse() });
        this._checkCollapse() }, M.prototype._showAll = function() { for (var t = 0, s = this.s.panes; t < s.length; t++) s[t].show() }, M.prototype._startup = function(i) { for (var h = this, c = (this._attach(), this.dom.panes.empty(), this.s.dt.settings()[0]), t = 0, s = this.s.panes; t < s.length; t++) { var e = s[t];
            e.rebuildPane(0 < Object.keys(this.s.serverData).length ? this.s.serverData : void 0), this.dom.panes.append(e.dom.container) } "auto" === this.c.layout && this.resizePanes(); var a = this.s.dt.state.loaded(),
            o = (!this.s.stateRead && a && this.s.dt.page(a.start / this.s.dt.page.len()).draw("page"), this.s.stateRead = !0, this._checkMessage(), i.on("preDraw.dtsps", function() { h.s.updating || h.s.paging || (h._updateFilterCount(), h._updateSelection()), h.s.paging = !1 }), b(r).on("resize.dtsps", S.util.throttle(function() { return h.resizePanes() })), this.s.dt.on("stateSaveParams.dtsps", function(t, s, e) { s === c && (void 0 === e.searchPanes && (e.searchPanes = {}), e.searchPanes.selectionList = h.s.selectionList) }), this._stateLoadListener(), i.off("page.dtsps page-nc.dtsps").on("page.dtsps page-nc.dtsps", function(t, s) { h.s.paging = !0, h.s.pagingST = !0, h.s.page = h.s.dt.page() }), this.s.dt.page.info().serverSide ? i.off("preXhr.dtsps").on("preXhr.dtsps", function(t, s, e) { if (s === c) { e.searchPanes || (e.searchPanes = {}), e.searchPanes_null || (e.searchPanes_null = {}); for (var a = 0, i = 0, o = h.s.panes; i < o.length; i++) { var n = o[i],
                            r = h.s.dt.column(n.s.index).dataSrc(); if (e.searchPanes[r] || (e.searchPanes[r] = {}), e.searchPanes_null[r] || (e.searchPanes_null[r] = {}), n.s.dtPane)
                            for (var l = n.s.dtPane.rows({ selected: !0 }).data().toArray(), d = 0; d < l.length; d++) e.searchPanes[r][d] = l[d].filter, e.searchPanes[r][d] ? e.searchPanes_null[r][d] = !1 : e.searchPanes_null[r][d] = !0, a++ }
                    0 < a && (a !== h.s.filterCount ? (e.start = 0, h.s.page = 0) : e.start = h.s.page * h.s.dt.page.len(), h.s.dt.page(h.s.page), h.s.filterCount = a), 0 < h.s.selectionList.length && (e.searchPanesLast = h.s.dt.column(h.s.selectionList[h.s.selectionList.length - 1].column).dataSrc()), e.searchPanes_options = { cascade: h.c.cascadePanes, viewCount: h.c.viewCount, viewTotal: h.c.viewTotal } } }) : i.on("preXhr.dtsps", function() { return h.s.panes.forEach(function(t) { return t.clearData() }) }), this.s.dt.on("xhr.dtsps", function(t, s) { var i;
                s.nTable !== h.s.dt.table().node() || h.s.dt.page.info().serverSide || (i = !1, h.s.dt.one("preDraw.dtsps", function() { if (!i) { var t = h.s.dt.page();
                        i = !0, h.s.updating = !0, h.dom.panes.empty(); for (var s = 0, e = h.s.panes; s < e.length; s++) { var a = e[s];
                            a.clearData(), a.rebuildPane(void 0, !0), h.dom.panes.append(a.dom.container) }
                        h.s.dt.page.info().serverSide || h.s.dt.draw(), h.s.updating = !1, h._updateSelection(), h._checkMessage(), h.s.dt.one("draw.dtsps", function() { h.s.updating = !0, h.s.dt.page(t).draw(!1), h.s.updating = !1 }) } })) }), this.c.preSelect);
        a && a.searchPanes && a.searchPanes.selectionList && (o = a.searchPanes.selectionList), this._makeSelections(o), this._updateFilterCount(), i.on("destroy.dtsps", function(t, s) { if (s === c) { for (var e = 0, a = h.s.panes; e < a.length; e++) a[e].destroy();
                i.off(".dtsps"), h.dom.showAll.off(".dtsps"), h.dom.clearAll.off(".dtsps"), h.dom.collapseAll.off(".dtsps"), b(i.table().node()).off(".dtsps"), h.dom.container.detach(), h.clearSelections() } }), this.c.collapse && this._setCollapseListener(), this.c.clear && this.dom.clearAll.off("click.dtsps").on("click.dtsps", function() { return h.clearSelections() }), (c._searchPanes = this).s.dt.state.save() }, M.prototype._updateFilterCount = function() { for (var t = 0, s = 0, e = 0, a = this.s.panes; e < a.length; e++) { var i = a[e];
            i.s.dtPane && (t += i.getPaneCount(), i.s.dtPane.search()) && s++ }
        this.dom.title.html(this.s.dt.i18n("searchPanes.title", this.c.i18n.title, t)), this.c.filterChanged && "function" == typeof this.c.filterChanged && this.c.filterChanged.call(this.s.dt, t), 0 === t && 0 === s ? this.dom.clearAll.addClass(this.classes.disabledButton).attr("disabled", "true") : this.dom.clearAll.removeClass(this.classes.disabledButton).removeAttr("disabled") }, M.version = "2.3.0", M.classes = { clear: "dtsp-clear", clearAll: "dtsp-clearAll", collapseAll: "dtsp-collapseAll", container: "dtsp-searchPanes", disabledButton: "dtsp-disabledButton", emptyMessage: "dtsp-emptyMessage", hide: "dtsp-hidden", panes: "dtsp-panesContainer", search: "dtsp-search", showAll: "dtsp-showAll", title: "dtsp-title", titleRow: "dtsp-titleRow" }, M.defaults = { cascadePanes: !1, clear: !0, collapse: !0, columns: [], container: function(t) { return t.table().container() }, filterChanged: void 0, i18n: { clearMessage: "Clear All", clearPane: "&times;", collapse: { 0: "SearchPanes", _: "SearchPanes (%d)" }, collapseMessage: "Collapse All", count: "{total}", emptyMessage: "<em>No data</em>", emptyPanes: "No SearchPanes", loadMessage: "Loading Search Panes...", showMessage: "Show All", title: "Filters Active - %d" }, layout: "auto", order: [], panes: [], preSelect: [], viewCount: !0, viewTotal: !1 }, O = M, (r && r.__extends || (x = function(t, s) { return (x = Object.setPrototypeOf || ({ __proto__: [] }
            instanceof Array ? function(t, s) { t.__proto__ = s } : function(t, s) { for (var e in s) s.hasOwnProperty(e) && (t[e] = s[e]) }))(t, s) }, function(t, s) {
        function e() { this.constructor = t }
        x(t, s), t.prototype = null === s ? Object.create(s) : (e.prototype = s.prototype, new e) }))(k, j = O), k.prototype._initSelectionListeners = function(t, s) { void 0 === s && (s = []), (t = void 0 === t ? !0 : t) && (this.s.selectionList = s); for (var e = 0, a = this.s.panes; e < a.length; e++) { var i = a[e];
            i.s.displayed && i.s.dtPane.off("select.dtsp").on("select.dtsp", this._update(i)).off("deselect.dtsp").on("deselect.dtsp", this._updateTimeout(i)) }
        this.s.dt.off("draw.dtsps").on("draw.dtsps", this._update()), this._updateSelectionList() }, k.prototype._serverTotals = function() { for (var t = 0, s = this.s.panes; t < s.length; t++) { var e = s[t]; if (e.s.colOpts.show) { var a = this.s.dt.column(e.s.index).dataSrc(),
                    i = !0; if (this.s.serverData.searchPanes.options[a])
                    for (var o = 0, n = this.s.serverData.searchPanes.options[a]; o < n.length; o++) { var r = n[o]; if (r.total !== r.count) { i = !1; break } }
                e.s.filteringActive = !i, e._serverPopulate(this.s.serverData) } } }, k.prototype._stateLoadListener = function() {
        function t(t, s, e) { if (void 0 !== e.searchPanes) { if (d.s.selectionList = e.searchPanes.selectionList || [], e.searchPanes.panes)
                    for (var a = 0, i = e.searchPanes.panes; a < i.length; a++)
                        for (var o = i[a], n = 0, r = d.s.panes; n < r.length; n++) { var l = r[n];
                            o.id === l.s.index && l.s.dtPane && (l.dom.searchBox.val(o.searchTerm), l.s.dtPane.order(o.order)) }
                d._updateSelectionList() } } var d = this;
        this.s.dt.off("stateLoadParams.dtsps", t).on("stateLoadParams.dtsps", t) }, k.prototype._updateSelection = function() {}, k.prototype._update = function(t) { var s = this; return void 0 === t && (t = void 0),
            function() { t && clearTimeout(t.s.deselectTimeout), s._updateSelectionList(t) } }, k.prototype._updateTimeout = function(t) { var s = this; return void 0 === t && (t = void 0),
            function() { return t ? t.s.deselectTimeout = setTimeout(function() { return s._updateSelectionList(t) }, 50) : s._updateSelectionList() } }, k.prototype._updateSelectionList = function(s) { var t;
        void 0 === s && (s = void 0), this.s.pagingST ? this.s.pagingST = !1 : this.s.updating || s && s.s.serverSelecting || (void 0 !== s && (this.s.dt.page.info().serverSide && s._updateSelection(), t = s.s.dtPane.rows({ selected: !0 }).data().toArray().map(function(t) { return t.filter }), this.s.selectionList = this.s.selectionList.filter(function(t) { return t.column !== s.s.index }), 0 < t.length ? (this.s.selectionList.push({ column: s.s.index, rows: t }), s.dom.clear.removeClass(this.classes.disabledButton).removeAttr("disabled")) : s.dom.clear.addClass(this.classes.disabledButton).attr("disabled", "true"), this.s.dt.page.info().serverSide) && this.s.dt.draw(!1), this._remakeSelections(), this._updateFilterCount()) }, k.prototype._remakeSelections = function() { var t; if (this.s.updating = !0, this.s.dt.page.info().serverSide) { 0 < this.s.selectionList.length && (h = this.s.panes[this.s.selectionList[this.s.selectionList.length - 1].column]); for (var s = 0, e = this.s.panes; s < e.length; s++) !(t = e[s]).s.displayed || h && t.s.index === h.s.index || t.updateRows() } else { var a = this.s.selectionList,
                i = !1;
            this.clearSelections(), this.s.dt.draw(!1), this.s.dt.rows().toArray()[0].length > this.s.dt.rows({ search: "applied" }).toArray()[0].length && (i = !0), this.s.selectionList = a; for (var o = 0, n = this.s.panes; o < n.length; o++)(h = n[o]).s.displayed && (h.s.filteringActive = i, h.updateRows()); for (var r = 0, l = this.s.selectionList; r < l.length; r++) { for (var d = l[r], h = null, c = 0, p = this.s.panes; c < p.length; c++) { var u = p[c]; if (u.s.index === d.column) { h = u; break } } if (h.s.dtPane) { for (var f = h.s.dtPane.rows().indexes().toArray(), g = 0; g < d.rows.length; g++) { for (var v = !1, m = 0, w = f; m < w.length; m++) { var P = w[m],
                                P = h.s.dtPane.row(P),
                                y = P.data();
                            d.rows[g] === y.filter && (P.select(), v = !0) }
                        v || (d.rows.splice(g, 1), g--) } if (h.s.selections = d.rows, 0 !== d.rows.length) { this.s.dt.draw(); for (var b = 0, _ = 0, S = 0, C = 0, O = this.s.panes; C < O.length; C++)(t = O[C]).s.dtPane && _ < (b += t.getPaneCount()) && (S++, _ = b); for (var x = 0 < b, A = 0, D = this.s.panes; A < D.length; A++)(t = D[A]).s.displayed && (i || h.s.index !== t.s.index || !x ? t.s.filteringActive = x || i : 1 === S && (t.s.filteringActive = !1), t.s.index !== h.s.index) && t.updateRows() } } }
            this.s.dt.draw(!1) }
        this.s.updating = !1 }, A = k, l = (_ = n).fn.dataTable, S = (b = n).fn.dataTable, (D = (w = f = c = n).fn.dataTable).SearchPanes = O, T.SearchPanes = O, D.SearchPanesST = A, T.SearchPanesST = A, D.SearchPane = h, T.SearchPane = h, D.SearchPaneViewTotal = g, T.SearchPaneViewTotal = g, D.SearchPaneCascade = P, T.SearchPaneCascade = P, D.SearchPaneCascadeViewTotal = C, T.SearchPaneCascadeViewTotal = C, (t = n.fn.dataTable.Api.register)("searchPanes()", function() { return this }), t("searchPanes.clearSelections()", function() { return this.iterator("table", function(t) { t._searchPanes && t._searchPanes.clearSelections() }) }), t("searchPanes.rebuildPane()", function(s, e) { return this.iterator("table", function(t) { t._searchPanes && t._searchPanes.rebuild(s, e) }) }), t("searchPanes.resizePanes()", function() { var t = this.context[0]; return t._searchPanes ? t._searchPanes.resizePanes() : null }), t("searchPanes.container()", function() { var t = this.context[0]; return t._searchPanes ? t._searchPanes.getNode() : null }), T.ext.buttons.searchPanesClear = { action: function(t, s) { s.searchPanes.clearSelections() }, text: "Clear Panes" }, T.ext.buttons.searchPanes = { action: function(t, s, e, a) { var i = this,
                o = this;
            a._panes ? (this.popover(a._panes.getNode(), { align: "container", span: "container" }), a._panes.rebuild(void 0, !0)) : (this.processing(!0), setTimeout(function() { N(s, e, a), i.popover(a._panes.getNode(), { align: "container", span: "container" }), a._panes.rebuild(void 0, !0), n("table.dataTable", a._panes.getNode()).DataTable().columns.adjust(), o.processing(!1) }, 10)) }, init: function(t, s, e) { t.button(s).text(e.text || t.i18n("searchPanes.collapse", "SearchPanes", 0)), !t.init().stateSave && !1 !== e.delayInit || N(t, s, e) }, config: {}, text: "", delayInit: !0 }, n(o).on("preInit.dt.dtsp", function(t, s) { "dt" !== t.namespace || !s.oInit.searchPanes && !T.defaults.searchPanes || s._searchPanes || F(s, null, !0) }), T.ext.feature.push({ cFeature: "P", fnInit: F }), T.feature && T.feature.register("searchPanes", F), T });

/*! Bootstrap 5 integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */
! function(n) { var a, s; "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs5", "datatables.net-searchpanes"], function(e) { return n(e, window, document) }) : "object" == typeof exports ? (a = require("jquery"), s = function(e, t) { t.fn.dataTable || require("datatables.net-bs5")(e, t), t.fn.dataTable.SearchPanes || require("datatables.net-searchpanes")(e, t) }, "undefined" == typeof window ? module.exports = function(e, t) { return e = e || window, t = t || a(e), s(e, t), n(t, 0, e.document) } : (s(window, a), module.exports = n(a, window, window.document))) : n(jQuery, window, document) }(function(e, t, n) { "use strict"; var a = e.fn.dataTable; return e.extend(!0, a.SearchPane.classes, { buttonGroup: "btn-group", disabledButton: "disabled", narrow: "col", pane: { container: "table" }, paneButton: "btn btn-subtle", pill: "badge rounded-pill bg-secondary", search: "form-control search", table: "table table-sm table-borderless", topRow: "dtsp-topRow" }), e.extend(!0, a.SearchPanes.classes, { clearAll: "dtsp-clearAll btn btn-subtle", collapseAll: "dtsp-collapseAll btn btn-subtle", container: "dtsp-searchPanes", disabledButton: "disabled", panes: "dtsp-panes dtsp-panesContainer", search: a.SearchPane.classes.search, showAll: "dtsp-showAll btn btn-subtle", title: "dtsp-title", titleRow: "dtsp-titleRow" }), a });

/*! Select for DataTables 2.0.0
 * © SpryMedia Ltd - datatables.net/license/mit
 */
! function(l) { var s, c; "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(e) { return l(e, window, document) }) : "object" == typeof exports ? (s = require("jquery"), c = function(e, t) { t.fn.dataTable || require("datatables.net")(e, t) }, "undefined" == typeof window ? module.exports = function(e, t) { return e = e || window, t = t || s(e), c(e, t), l(t, e, e.document) } : (c(window, s), module.exports = l(s, window, window.document))) : l(jQuery, window, document) }(function(m, i, e) { "use strict"; var _ = m.fn.dataTable;

    function r(n, e, t) {
        function l(t, l) { l < t && (e = l, l = t, t = e); var e, s = !1; return n.columns(":visible").indexes().filter(function(e) { return e === t && (s = !0), e === l ? !(s = !1) : s }) }

        function s(t, l) { var e, s = n.rows({ search: "applied" }).indexes(),
                c = (s.indexOf(t) > s.indexOf(l) && (e = l, l = t, t = e), !1); return s.filter(function(e) { return e === t && (c = !0), e === l ? !(c = !1) : c }) } var c, t = n.cells({ selected: !0 }).any() || t ? (c = l(t.column, e.column), s(t.row, e.row)) : (c = l(0, e.column), s(0, e.row)),
            t = n.cells(t, c).flatten();
        n.cells(e, { selected: !0 }).any() ? n.cells(t).deselect() : n.cells(t).select() }

    function s(e) { var t = e.settings()[0]._select.selector;
        m(e.table().container()).off("mousedown.dtSelect", t).off("mouseup.dtSelect", t).off("click.dtSelect", t), m("body").off("click.dtSelect" + v(e.table().node())) }

    function n(o) { var a, t = m(o.table().container()),
            l = o.settings()[0],
            s = l._select.selector;
        t.on("mousedown.dtSelect", s, function(e) {
            (e.shiftKey || e.metaKey || e.ctrlKey) && t.css("-moz-user-select", "none").one("selectstart.dtSelect", s, function() { return !1 }), i.getSelection && (a = i.getSelection()) }).on("mouseup.dtSelect", s, function() { t.css("-moz-user-select", "") }).on("click.dtSelect", s, function(e) { var t, l = o.select.items(); if (a) { var s = i.getSelection(); if ((!s.anchorNode || m(s.anchorNode).closest("table")[0] === o.table().node()) && s !== a) return } var c, s = o.settings()[0],
                n = o.table().container();
            m(e.target).closest("div.dt-container")[0] == n && (n = o.cell(m(e.target).closest("td, th"))).any() && (c = m.Event("user-select.dt"), d(o, c, [l, n, e]), c.isDefaultPrevented() || (c = n.index(), "row" === l ? (t = c.row, h(e, o, s, "row", t)) : "column" === l ? (t = n.index().column, h(e, o, s, "column", t)) : "cell" === l && (t = n.index(), h(e, o, s, "cell", t)), s._select_lastCell = c)) }), m("body").on("click.dtSelect" + v(o.table().node()), function(e) { var t;!l._select.blurable || m(e.target).parents().filter(o.table().container()).length || 0 === m(e.target).parents("html").length || m(e.target).parents("div.DTE").length || (t = m.Event("select-blur.dt"), d(o, t, [e.target, e]), t.isDefaultPrevented()) || f(l, !0) }) }

    function d(e, t, l, s) { s && !e.flatten().length || ("string" == typeof t && (t += ".dt"), l.unshift(e), m(e.table().node()).trigger(t, l)) }

    function a(s, e) { var t, l, c, n, o; "api" !== s.select.style() && !1 !== s.select.info() && (o = s.rows({ selected: !0 }).flatten().length, t = s.columns({ selected: !0 }).flatten().length, l = s.cells({ selected: !0 }).flatten().length, c = function(e, t, l) { e.append(m('<span class="select-item"/>').append(s.i18n("select." + t + "s", { _: "%d " + t + "s selected", 0: "", 1: "1 " + t + " selected" }, l))) }, e = m(e), c(n = m('<span class="select-info"/>'), "row", o), c(n, "column", t), c(n, "cell", l), (o = e.children("span.select-info")).length && o.remove(), "" !== n.text()) && e.append(n) }

    function p(o) { o.columns(".dt-select").every(function() { var n, e = this.header();
            m("input", e).length || (n = m("<input>").attr({ class: "dt-select-checkbox", type: "checkbox", "aria-label": o.i18n("select.aria.headerCheckbox") || "Select all rows" }).appendTo(e).on("change", function() { this.checked ? o.rows({ search: "applied" }).select() : o.rows({ selected: !0 }).deselect() }).on("click", function(e) { e.stopPropagation() }), o.on("draw select deselect", function(e, t, l) { var s, c; "row" !== l && l || (l = o.rows({ selected: !0 }).count(), s = o.rows({ search: "applied", selected: !0 }).count(), c = o.rows({ search: "applied" }).count(), s && s <= l && s === c ? n.prop("checked", !0).prop("indeterminate", !1) : 0 === s && 0 === l ? n.prop("checked", !1).prop("indeterminate", !1) : n.prop("checked", !1).prop("indeterminate", !0)) })) }) }

    function u(e, t, l, s) { var c, n = e[t + "s"]({ search: "applied" }).indexes(),
            s = n.indexOf(s),
            o = n.indexOf(l);
        e[t + "s"]({ selected: !0 }).any() || -1 !== s ? (o < s && (c = o, o = s, s = c), n.splice(o + 1, n.length), n.splice(0, s)) : n.splice(n.indexOf(l) + 1, n.length), e[t](l, { selected: !0 }).any() ? (n.splice(n.indexOf(l), 1), e[t + "s"](n).deselect()) : e[t + "s"](n).select() }

    function f(e, t) {!t && "single" !== e._select.style || ((t = new _.Api(e)).rows({ selected: !0 }).deselect(), t.columns({ selected: !0 }).deselect(), t.cells({ selected: !0 }).deselect()) }

    function h(e, t, l, s, c) { var n = t.select.style(),
            o = t.select.toggleable(),
            a = t[s](c, { selected: !0 }).any();
        a && !o || ("os" === n ? e.ctrlKey || e.metaKey ? t[s](c).select(!a) : e.shiftKey ? "cell" === s ? r(t, c, l._select_lastCell || null) : u(t, s, c, l._select_lastCell ? l._select_lastCell[s] : null) : (o = t[s + "s"]({ selected: !0 }), a && 1 === o.flatten().length ? t[s](c).deselect() : (o.deselect(), t[s](c).select())) : "multi+shift" == n && e.shiftKey ? "cell" === s ? r(t, c, l._select_lastCell || null) : u(t, s, c, l._select_lastCell ? l._select_lastCell[s] : null) : t[s](c).select(!a)) }

    function v(e) { return e.id.replace(/[^a-zA-Z0-9\-\_]/g, "-") }
    _.select = {}, _.select.version = "2.0.0", _.select.init = function(c) { var e, t, l, s, n, o, a, i, r, d, u, f, h = c.settings()[0]; if (!_.versionCheck("2")) throw "Warning: Select requires DataTables 2 or newer";
        h._select || (e = c.state.loaded(), t = function(e, t, l) { if (null !== l && void 0 !== l.select) { if (c.rows({ selected: !0 }).any() && c.rows().deselect(), void 0 !== l.select.rows && c.rows(l.select.rows).select(), c.columns({ selected: !0 }).any() && c.columns().deselect(), void 0 !== l.select.columns && c.columns(l.select.columns).select(), c.cells({ selected: !0 }).any() && c.cells().deselect(), void 0 !== l.select.cells)
                    for (var s = 0; s < l.select.cells.length; s++) c.cell(l.select.cells[s].row, l.select.cells[s].column).select();
                c.state.save() } }, c.on("stateSaveParams", function(e, t, l) { l.select = {}, l.select.rows = c.rows({ selected: !0 }).ids(!0).toArray(), l.select.columns = c.columns({ selected: !0 })[0], l.select.cells = c.cells({ selected: !0 })[0].map(function(e) { return { row: c.row(e.row).id(!0), column: e.column } }) }).on("stateLoadParams", t).one("init", function() { t(0, 0, e) }), s = h.oInit.select, l = _.defaults.select, l = void 0 === s ? l : s, s = "row", r = "td, th", d = "selected", f = !(u = i = a = !(o = !(n = "api"))), h._select = { infoEls: [] }, !0 === l ? (n = "os", f = !0) : "string" == typeof l ? (n = l, f = !0) : m.isPlainObject(l) && (void 0 !== l.blurable && (o = l.blurable), void 0 !== l.toggleable && (a = l.toggleable), void 0 !== l.info && (i = l.info), void 0 !== l.items && (s = l.items), f = (n = void 0 !== l.style ? l.style : "os", !0), void 0 !== l.selector && (r = l.selector), void 0 !== l.className && (d = l.className), void 0 !== l.headerCheckbox) && (u = l.headerCheckbox), c.select.selector(r), c.select.items(s), c.select.style(n), c.select.blurable(o), c.select.toggleable(a), c.select.info(i), h._select.className = d, !f && m(c.table().node()).hasClass("selectable") && c.select.style("os"), u && (p(c), c.on("init", function() { p(c) }))) }, m.each([{ type: "row", prop: "aoData" }, { type: "column", prop: "aoColumns" }], function(e, i) { _.ext.selector[i.type].push(function(e, t, l) { var s, c = t.selected,
                n = []; if (!0 !== c && !1 !== c) return l; for (var o = 0, a = l.length; o < a; o++)(s = e[i.prop][l[o]]) && (!0 === c && !0 === s._select_selected || !1 === c && !s._select_selected) && n.push(l[o]); return n }) }), _.ext.selector.cell.push(function(e, t, l) { var s, c = t.selected,
            n = []; if (void 0 === c) return l; for (var o = 0, a = l.length; o < a; o++)(s = e.aoData[l[o].row]) && (!0 === c && s._selected_cells && !0 === s._selected_cells[l[o].column] || !1 === c && (!s._selected_cells || !s._selected_cells[l[o].column])) && n.push(l[o]); return n }); var t = _.Api.register,
        l = _.Api.registerPlural;

    function o(t, l) { return function(e) { return e.i18n("buttons." + t, l) } }

    function w(e) { e = e._eventNamespace; return "draw.dt.DT" + e + " select.dt.DT" + e + " deselect.dt.DT" + e }
    t("select()", function() { return this.iterator("table", function(e) { _.select.init(new _.Api(e)) }) }), t("select.blurable()", function(t) { return void 0 === t ? this.context[0]._select.blurable : this.iterator("table", function(e) { e._select.blurable = t }) }), t("select.toggleable()", function(t) { return void 0 === t ? this.context[0]._select.toggleable : this.iterator("table", function(e) { e._select.toggleable = t }) }), t("select.info()", function(t) { return void 0 === t ? this.context[0]._select.info : this.iterator("table", function(e) { e._select.info = t }) }), t("select.items()", function(t) { return void 0 === t ? this.context[0]._select.items : this.iterator("table", function(e) { e._select.items = t, d(new _.Api(e), "selectItems", [t]) }) }), t("select.style()", function(l) { return void 0 === l ? this.context[0]._select.style : this.iterator("table", function(e) { e._select || _.select.init(new _.Api(e)), e._select_init || (o = e, c = new _.Api(o), o._select_init = !0, o.aoRowCreatedCallback.push(function(e, t, l) { var s, c, n = o.aoData[l]; for (n._select_selected && m(e).addClass(o._select.className), s = 0, c = o.aoColumns.length; s < c; s++)(o.aoColumns[s]._select_selected || n._selected_cells && n._selected_cells[s]) && m(n.anCells[s]).addClass(o._select.className) }), c.on("preXhr.dt.dtSelect", function(e, t) { var l, s;
                t === c.settings()[0] && (l = c.rows({ selected: !0 }).ids(!0).filter(function(e) { return void 0 !== e }), s = c.cells({ selected: !0 }).eq(0).map(function(e) { var t = c.row(e.row).id(!0); return t ? { row: t, column: e.column } : void 0 }).filter(function(e) { return void 0 !== e }), c.one("draw.dt.dtSelect", function() { c.rows(l).select(), s.any() && s.each(function(e) { c.cells(e.row, e.column).select() }) })) }), c.on("info.dt", function(e, t, l) { t._select.infoEls.includes(l) || t._select.infoEls.push(l), a(c, l) }), c.on("select.dtSelect.dt deselect.dtSelect.dt", function() { o._select.infoEls.forEach(function(e) { a(c, e) }), c.state.save() }), c.on("destroy.dtSelect", function() { m(c.rows({ selected: !0 }).nodes()).removeClass(c.settings()[0]._select.className), s(c), c.off(".dtSelect"), m("body").off(".dtSelect" + v(c.table().node())) })), e._select.style = l; var o, c, t = new _.Api(e);
            s(t), "api" !== l && n(t), d(new _.Api(e), "selectStyle", [l]) }) }), t("select.selector()", function(t) { return void 0 === t ? this.context[0]._select.selector : this.iterator("table", function(e) { s(new _.Api(e)), e._select.selector = t, "api" !== e._select.style && n(new _.Api(e)) }) }), t("select.last()", function(e) { var t = this.context[0]; return e ? (t._select_lastCell = e, this) : t._select_lastCell }), l("rows().select()", "row().select()", function(e) { var l = this; return !1 === e ? this.deselect() : (this.iterator("row", function(e, t) { f(e); var l = e.aoData[t],
                s = e.aoColumns;
            m(l.nTr).addClass(e._select.className), l._select_selected = !0; for (var c = 0; c < s.length; c++) "select-checkbox" === s[c].sType && (m("input.dt-select-checkbox", l.anCells[c]).prop("checked", !0), l._aSortData[c] = null) }), this.iterator("table", function(e, t) { d(l, "select", ["row", l[t]], !0) }), this) }), t("row().selected()", function() { var e = this.context[0]; return !!(e && this.length && e.aoData[this[0]] && e.aoData[this[0]]._select_selected) }), l("columns().select()", "column().select()", function(e) { var l = this; return !1 === e ? this.deselect() : (this.iterator("column", function(e, t) { f(e), e.aoColumns[t]._select_selected = !0;
            t = new _.Api(e).column(t);
            m(t.header()).addClass(e._select.className), m(t.footer()).addClass(e._select.className), t.nodes().to$().addClass(e._select.className) }), this.iterator("table", function(e, t) { d(l, "select", ["column", l[t]], !0) }), this) }), t("column().selected()", function() { var e = this.context[0]; return !!(e && this.length && e.aoColumns[this[0]] && e.aoColumns[this[0]]._select_selected) }), l("cells().select()", "cell().select()", function(e) { var l = this; return !1 === e ? this.deselect() : (this.iterator("cell", function(e, t, l) { f(e);
            t = e.aoData[t];
            void 0 === t._selected_cells && (t._selected_cells = []), t._selected_cells[l] = !0, t.anCells && m(t.anCells[l]).addClass(e._select.className) }), this.iterator("table", function(e, t) { d(l, "select", ["cell", l.cells(l[t]).indexes().toArray()], !0) }), this) }), t("cell().selected()", function() { var e = this.context[0]; if (e && this.length) { e = e.aoData[this[0][0].row]; if (e && e._selected_cells && e._selected_cells[this[0][0].column]) return !0 } return !1 }), l("rows().deselect()", "row().deselect()", function() { var l = this; return this.iterator("row", function(e, t) { var l = e.aoData[t],
                s = e.aoColumns;
            m(l.nTr).removeClass(e._select.className), l._select_selected = !1, e._select_lastCell = null; for (var c = 0; c < s.length; c++) "select-checkbox" === s[c].sType && (m("input.dt-select-checkbox", l.anCells[c]).prop("checked", !1), l._aSortData[c] = null) }), this.iterator("table", function(e, t) { d(l, "deselect", ["row", l[t]], !0) }), this }), l("columns().deselect()", "column().deselect()", function() { var l = this; return this.iterator("column", function(s, e) { s.aoColumns[e]._select_selected = !1; var t = new _.Api(s),
                l = t.column(e);
            m(l.header()).removeClass(s._select.className), m(l.footer()).removeClass(s._select.className), t.cells(null, e).indexes().each(function(e) { var t = s.aoData[e.row],
                    l = t._selected_cells;!t.anCells || l && l[e.column] || m(t.anCells[e.column]).removeClass(s._select.className) }) }), this.iterator("table", function(e, t) { d(l, "deselect", ["column", l[t]], !0) }), this }), l("cells().deselect()", "cell().deselect()", function() { var l = this; return this.iterator("cell", function(e, t, l) { t = e.aoData[t];
            void 0 !== t._selected_cells && (t._selected_cells[l] = !1), t.anCells && !e.aoColumns[l]._select_selected && m(t.anCells[l]).removeClass(e._select.className) }), this.iterator("table", function(e, t) { d(l, "deselect", ["cell", l[t]], !0) }), this }); var b = 0; return m.extend(_.ext.buttons, { selected: { text: o("selected", "Selected"), className: "buttons-selected", limitTo: ["rows", "columns", "cells"], init: function(l, e, s) { var c = this;
                s._eventNamespace = ".select" + b++, l.on(w(s), function() { var e, t;
                    c.enable((e = l, !(-1 === (t = s).limitTo.indexOf("rows") || !e.rows({ selected: !0 }).any()) || !(-1 === t.limitTo.indexOf("columns") || !e.columns({ selected: !0 }).any()) || !(-1 === t.limitTo.indexOf("cells") || !e.cells({ selected: !0 }).any()))) }), this.disable() }, destroy: function(e, t, l) { e.off(l._eventNamespace) } }, selectedSingle: { text: o("selectedSingle", "Selected single"), className: "buttons-selected-single", init: function(t, e, l) { var s = this;
                l._eventNamespace = ".select" + b++, t.on(w(l), function() { var e = t.rows({ selected: !0 }).flatten().length + t.columns({ selected: !0 }).flatten().length + t.cells({ selected: !0 }).flatten().length;
                    s.enable(1 === e) }), this.disable() }, destroy: function(e, t, l) { e.off(l._eventNamespace) } }, selectAll: { text: o("selectAll", "Select all"), className: "buttons-select-all", action: function(e, t, l, s) { var c = this.select.items(),
                    n = s.selectorModifier;
                (n ? ("function" == typeof n && (n = n.call(t, e, t, l, s)), this[c + "s"](n)) : this[c + "s"]()).select() } }, selectNone: { text: o("selectNone", "Deselect all"), className: "buttons-select-none", action: function() { f(this.settings()[0], !0) }, init: function(t, e, l) { var s = this;
                l._eventNamespace = ".select" + b++, t.on(w(l), function() { var e = t.rows({ selected: !0 }).flatten().length + t.columns({ selected: !0 }).flatten().length + t.cells({ selected: !0 }).flatten().length;
                    s.enable(0 < e) }), this.disable() }, destroy: function(e, t, l) { e.off(l._eventNamespace) } }, showSelected: { text: o("showSelected", "Show only selected"), className: "buttons-show-selected", action: function(e, t) { var s;
                t.search.fixed("dt-select") ? (t.search.fixed("dt-select", null), this.active(!1)) : (s = t.settings()[0].aoData, t.search.fixed("dt-select", function(e, t, l) { return s[l]._select_selected }), this.active(!0)), t.draw() } } }), m.each(["Row", "Column", "Cell"], function(e, t) { var c = t.toLowerCase();
        _.ext.buttons["select" + t + "s"] = { text: o("select" + t + "s", "Select " + c + "s"), className: "buttons-select-" + c + "s", action: function() { this.select.items(c) }, init: function(e) { var s = this;
                e.on("selectItems.dt.DT", function(e, t, l) { s.active(l === c) }) } } }), _.type("select-checkbox", { className: "dt-select", detect: function(e) { return "select-checkbox" === e && e }, order: { pre: function(e) { return "X" === e ? -1 : 0 } } }), m.extend(!0, _.defaults.oLanguage, { select: { aria: { rowCheckbox: "Select row" } } }), _.render.select = function(e, t) { var n = e ? _.util.get(e) : null,
            o = t ? _.util.get(t) : null; return function(e, t, l, s) { var c = s.settings.aoData[s.row]._select_selected,
                s = s.settings.oLanguage.select.aria.rowCheckbox; return "display" === t ? m("<input>").attr({ "aria-label": s, class: "dt-select-checkbox", name: o ? o(l) : null, type: "checkbox", value: n ? n(l) : null, checked: c })[0] : "type" === t ? "select-checkbox" : "filter" !== t && c ? "X" : "" } }, _.ext.order["select-checkbox"] = function(t, e) { return this.api().column(e, { order: "index" }).nodes().map(function(e) { return "row" === t._select.items ? m(e).parent().hasClass(t._select.className) : "cell" === t._select.items && m(e).hasClass(t._select.className) }) }, m.fn.DataTable.select = _.select, m(e).on("preInit.dt.dtSelect", function(e, t) { "dt" === e.namespace && _.select.init(new _.Api(t)) }), _ });

/*! Bootstrap 5 styling wrapper for Select
 * © SpryMedia Ltd - datatables.net/license
 */
! function(n) { var d, o; "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs5", "datatables.net-select"], function(e) { return n(e, window, document) }) : "object" == typeof exports ? (d = require("jquery"), o = function(e, t) { t.fn.dataTable || require("datatables.net-bs5")(e, t), t.fn.dataTable.select || require("datatables.net-select")(e, t) }, "undefined" == typeof window ? module.exports = function(e, t) { return e = e || window, t = t || d(e), o(e, t), n(t, 0, e.document) } : (o(window, d), module.exports = n(d, window, window.document))) : n(jQuery, window, document) }(function(e, t, n) { "use strict"; return e.fn.dataTable });