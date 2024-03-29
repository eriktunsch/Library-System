/*! nouislider - 14.7.0 - 4/6/2021 */
function ownKeys(t, e) { var i, n = Object.keys(t); return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, i)), n }

function _objectSpread(t) { for (var e = 1; e < arguments.length; e++) { var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(i), !0).forEach((function(e) { _defineProperty(t, e, i[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e)) })) } return t }

function _defineProperty(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _defineProperties(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

function _createClass(t, e, i) { return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t }

function _typeof(t) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }! function(t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t() }((function() { "use strict"; var t = "14.7.0";

    function e(t) { t.parentElement.removeChild(t) }

    function i(t) { return null != t }

    function n(t) { t.preventDefault() }

    function a(t) { return "number" == typeof t && !isNaN(t) && isFinite(t) }

    function s(t, e, i) { 0 < i && (h(t, e), setTimeout((function() { c(t, e) }), i)) }

    function o(t) { return Math.max(Math.min(t, 100), 0) }

    function r(t) { return Array.isArray(t) ? t : [t] }

    function l(t) { var e = (t = String(t)).split("."); return 1 < e.length ? e[1].length : 0 }

    function h(t, e) { t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e }

    function c(t, e) { t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ") }

    function d(t) { var e = void 0 !== window.pageXOffset,
            i = "CSS1Compat" === (t.compatMode || ""); return { x: e ? window.pageXOffset : i ? t.documentElement.scrollLeft : t.body.scrollLeft, y: e ? window.pageYOffset : i ? t.documentElement.scrollTop : t.body.scrollTop } }

    function u(t, e) { return 100 / (e - t) }

    function p(t, e, i) { return 100 * e / (t[i + 1] - t[i]) }

    function f(t, e) { for (var i = 1; t >= e[i];) i += 1; return i }

    function g(t, e, i) { var n; if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (14.7.0): 'range' contains invalid value."); if (!a(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !a(e[0])) throw new Error("noUiSlider (14.7.0): 'range' value isn't numeric.");
        i.xPct.push(n), i.xVal.push(e[0]), n ? i.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (i.xSteps[0] = e[1]), i.xHighestCompleteStep.push(0) }

    function m(t, e, i) { if (e)
            if (i.xVal[t] !== i.xVal[t + 1]) { i.xSteps[t] = p([i.xVal[t], i.xVal[t + 1]], e, 0) / u(i.xPct[t], i.xPct[t + 1]); var n = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
                    a = Math.ceil(Number(n.toFixed(3)) - 1),
                    s = i.xVal[t] + i.xNumSteps[t] * a;
                i.xHighestCompleteStep[t] = s } else i.xSteps[t] = i.xHighestCompleteStep[t] = i.xVal[t] }

    function x(t, e, i) { var n;
        this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e; var a = []; for (n in t) t.hasOwnProperty(n) && a.push([t[n], n]); for (a.length && "object" == typeof a[0][0] ? a.sort((function(t, e) { return t[0][0] - e[0][0] })) : a.sort((function(t, e) { return t[0] - e[0] })), n = 0; n < a.length; n++) g(a[n][1], a[n][0], this); for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) m(n, this.xNumSteps[n], this) }
    x.prototype.getDistance = function(t) { var e, i = []; for (e = 0; e < this.xNumSteps.length - 1; e++) { var n = this.xNumSteps[e]; if (n && t / n % 1 != 0) throw new Error("noUiSlider (14.7.0): 'limit', 'margin' and 'padding' of " + this.xPct[e] + "% range must be divisible by step.");
            i[e] = p(this.xVal, t, e) } return i }, x.prototype.getAbsoluteDistance = function(t, e, i) { var n, a = 0; if (t < this.xPct[this.xPct.length - 1])
            for (; t > this.xPct[a + 1];) a++;
        else t === this.xPct[this.xPct.length - 1] && (a = this.xPct.length - 2);
        i || t !== this.xPct[a + 1] || a++; var s = 1,
            o = e[a],
            r = 0,
            l = 0,
            h = 0,
            c = 0; for (n = i ? (t - this.xPct[a]) / (this.xPct[a + 1] - this.xPct[a]) : (this.xPct[a + 1] - t) / (this.xPct[a + 1] - this.xPct[a]); 0 < o;) r = this.xPct[a + 1 + c] - this.xPct[a + c], 100 < e[a + c] * s + 100 - 100 * n ? (l = r * n, s = (o - 100 * n) / e[a + c], n = 1) : (l = e[a + c] * r / 100 * s, s = 0), i ? (h -= l, 1 <= this.xPct.length + c && c--) : (h += l, 1 <= this.xPct.length - c && c++), o = e[a + c] * s; return t + h }, x.prototype.toStepping = function(t) { return function(t, e, i) { if (i >= t.slice(-1)[0]) return 100; var n, a, s = f(i, t),
                o = t[s - 1],
                r = t[s],
                l = e[s - 1],
                h = e[s]; return l + (a = i, p(n = [o, r], n[0] < 0 ? a + Math.abs(n[0]) : a - n[0], 0) / u(l, h)) }(this.xVal, this.xPct, t) }, x.prototype.fromStepping = function(t) { return function(t, e, i) { if (100 <= i) return t.slice(-1)[0]; var n, a = f(i, e),
                s = t[a - 1],
                o = t[a],
                r = e[a - 1]; return n = [s, o], (i - r) * u(r, e[a]) * (n[1] - n[0]) / 100 + n[0] }(this.xVal, this.xPct, t) }, x.prototype.getStep = function(t) { return function(t, e, i, n) { if (100 === n) return n; var a, s, o = f(n, t),
                r = t[o - 1],
                l = t[o]; return i ? (l - r) / 2 < n - r ? l : r : e[o - 1] ? t[o - 1] + (a = n - t[o - 1], s = e[o - 1], Math.round(a / s) * s) : n }(this.xPct, this.xSteps, this.snap, t) }, x.prototype.getDefaultStep = function(t, e, i) { var n = f(t, this.xPct); return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / i }, x.prototype.getNearbySteps = function(t) { var e = f(t, this.xPct); return { stepBefore: { startValue: this.xVal[e - 2], step: this.xNumSteps[e - 2], highestStep: this.xHighestCompleteStep[e - 2] }, thisStep: { startValue: this.xVal[e - 1], step: this.xNumSteps[e - 1], highestStep: this.xHighestCompleteStep[e - 1] }, stepAfter: { startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e] } } }, x.prototype.countStepDecimals = function() { var t = this.xNumSteps.map(l); return Math.max.apply(null, t) }, x.prototype.convert = function(t) { return this.getStep(this.toStepping(t)) }; var v = { to: function(t) { return void 0 !== t && t.toFixed(2) }, from: Number },
        b = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" },
        y = ".__tooltips",
        w = ".__aria";

    function _(t) { if ("object" == typeof(e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0; var e; throw new Error("noUiSlider (14.7.0): 'format' requires 'to' and 'from' methods.") }

    function k(t, e) { if (!a(e)) throw new Error("noUiSlider (14.7.0): 'step' is not numeric.");
        t.singleStep = e }

    function S(t, e) { if (!a(e)) throw new Error("noUiSlider (14.7.0): 'keyboardPageMultiplier' is not numeric.");
        t.keyboardPageMultiplier = e }

    function A(t, e) { if (!a(e)) throw new Error("noUiSlider (14.7.0): 'keyboardDefaultStep' is not numeric.");
        t.keyboardDefaultStep = e }

    function C(t, e) { if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (14.7.0): 'range' is not an object."); if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (14.7.0): Missing 'min' or 'max' in 'range'."); if (e.min === e.max) throw new Error("noUiSlider (14.7.0): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new x(e, t.snap, t.singleStep) }

    function P(t, e) { if (e = r(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (14.7.0): 'start' option is incorrect.");
        t.handles = e.length, t.start = e }

    function L(t, e) { if ("boolean" != typeof(t.snap = e)) throw new Error("noUiSlider (14.7.0): 'snap' option must be a boolean.") }

    function T(t, e) { if ("boolean" != typeof(t.animate = e)) throw new Error("noUiSlider (14.7.0): 'animate' option must be a boolean.") }

    function M(t, e) { if ("number" != typeof(t.animationDuration = e)) throw new Error("noUiSlider (14.7.0): 'animationDuration' option must be a number.") }

    function E(t, e) { var i, n = [!1]; if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) { for (i = 1; i < t.handles; i++) n.push(e);
            n.push(!1) } else { if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (14.7.0): 'connect' option doesn't match handle count.");
            n = e }
        t.connect = n }

    function z(t, e) { switch (e) {
            case "horizontal":
                t.ort = 0; break;
            case "vertical":
                t.ort = 1; break;
            default:
                throw new Error("noUiSlider (14.7.0): 'orientation' option is invalid.") } }

    function I(t, e) { if (!a(e)) throw new Error("noUiSlider (14.7.0): 'margin' option must be numeric.");
        0 !== e && (t.margin = t.spectrum.getDistance(e)) }

    function O(t, e) { if (!a(e)) throw new Error("noUiSlider (14.7.0): 'limit' option must be numeric."); if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (14.7.0): 'limit' option is only supported on linear sliders with 2 or more handles.") }

    function D(t, e) { var i; if (!a(e) && !Array.isArray(e)) throw new Error("noUiSlider (14.7.0): 'padding' option must be numeric or array of exactly 2 numbers."); if (Array.isArray(e) && 2 !== e.length && !a(e[0]) && !a(e[1])) throw new Error("noUiSlider (14.7.0): 'padding' option must be numeric or array of exactly 2 numbers."); if (0 !== e) { for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], i = 0; i < t.spectrum.xNumSteps.length - 1; i++)
                if (t.padding[0][i] < 0 || t.padding[1][i] < 0) throw new Error("noUiSlider (14.7.0): 'padding' option must be a positive number(s).");
            var n = e[0] + e[1],
                s = t.spectrum.xVal[0]; if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - s)) throw new Error("noUiSlider (14.7.0): 'padding' option must not exceed 100% of the range.") } }

    function R(t, e) { switch (e) {
            case "ltr":
                t.dir = 0; break;
            case "rtl":
                t.dir = 1; break;
            default:
                throw new Error("noUiSlider (14.7.0): 'direction' option was not recognized.") } }

    function N(t, e) { if ("string" != typeof e) throw new Error("noUiSlider (14.7.0): 'behaviour' must be a string containing options."); var i = 0 <= e.indexOf("tap"),
            n = 0 <= e.indexOf("drag"),
            a = 0 <= e.indexOf("fixed"),
            s = 0 <= e.indexOf("snap"),
            o = 0 <= e.indexOf("hover"),
            r = 0 <= e.indexOf("unconstrained"); if (a) { if (2 !== t.handles) throw new Error("noUiSlider (14.7.0): 'fixed' behaviour must be used with 2 handles");
            I(t, t.start[1] - t.start[0]) } if (r && (t.margin || t.limit)) throw new Error("noUiSlider (14.7.0): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = { tap: i || s, drag: n, fixed: a, snap: s, hover: o, unconstrained: r } }

    function F(t, e) { if (!1 !== e)
            if (!0 === e) { t.tooltips = []; for (var i = 0; i < t.handles; i++) t.tooltips.push(!0) } else { if (t.tooltips = r(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (14.7.0): must pass a formatter for all handles.");
                t.tooltips.forEach((function(t) { if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (14.7.0): 'tooltips' must be passed a formatter or 'false'.") })) } }

    function X(t, e) { _(t.ariaFormat = e) }

    function H(t, e) { _(t.format = e) }

    function B(t, e) { if ("boolean" != typeof(t.keyboardSupport = e)) throw new Error("noUiSlider (14.7.0): 'keyboardSupport' option must be a boolean.") }

    function Y(t, e) { t.documentElement = e }

    function W(t, e) { if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (14.7.0): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e }

    function j(t, e) { if ("object" != typeof e) throw new Error("noUiSlider (14.7.0): 'cssClasses' must be an object."); if ("string" == typeof t.cssPrefix)
            for (var i in t.cssClasses = {}, e) e.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + e[i]);
        else t.cssClasses = e }

    function V(t) { var e = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: v, format: v },
            n = { step: { r: !1, t: k }, keyboardPageMultiplier: { r: !1, t: S }, keyboardDefaultStep: { r: !1, t: A }, start: { r: !0, t: P }, connect: { r: !0, t: E }, direction: { r: !0, t: R }, snap: { r: !1, t: L }, animate: { r: !1, t: T }, animationDuration: { r: !1, t: M }, range: { r: !0, t: C }, orientation: { r: !1, t: z }, margin: { r: !1, t: I }, limit: { r: !1, t: O }, padding: { r: !1, t: D }, behaviour: { r: !0, t: N }, ariaFormat: { r: !1, t: X }, format: { r: !1, t: H }, tooltips: { r: !1, t: F }, keyboardSupport: { r: !0, t: B }, documentElement: { r: !1, t: Y }, cssPrefix: { r: !0, t: W }, cssClasses: { r: !0, t: j } },
            a = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: b, keyboardPageMultiplier: 5, keyboardDefaultStep: 10 };
        t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(n).forEach((function(s) { if (!i(t[s]) && void 0 === a[s]) { if (n[s].r) throw new Error("noUiSlider (14.7.0): '" + s + "' is required."); return !0 }
            n[s].t(e, i(t[s]) ? t[s] : a[s]) })), e.pips = t.pips; var s = document.createElement("div"),
            o = void 0 !== s.style.msTransform,
            r = void 0 !== s.style.transform; return e.transformRule = r ? "transform" : o ? "msTransform" : "webkitTransform", e.style = [
            ["left", "top"],
            ["right", "bottom"]
        ][e.dir][e.ort], e } return { __spectrum: x, version: t, cssClasses: b, create: function(t, a) { if (!t || !t.nodeName) throw new Error("noUiSlider (14.7.0): create requires a single element, got: " + t); if (t.noUiSlider) throw new Error("noUiSlider (14.7.0): Slider was already initialized."); var l = function(t, a, l) { var u, p, f, g, m, x, v, b, _ = window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
                    k = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                            window.addEventListener("test", null, e) } catch (t) {} return t }(),
                    S = t,
                    A = a.spectrum,
                    C = [],
                    P = [],
                    L = [],
                    T = 0,
                    M = {},
                    E = t.ownerDocument,
                    z = a.documentElement || E.documentElement,
                    I = E.body,
                    O = "rtl" === E.dir || 1 === a.ort ? 0 : 100;

                function D(t, e) { var i = E.createElement("div"); return e && h(i, e), t.appendChild(i), i }

                function R(t, e) { var i = D(t, a.cssClasses.origin),
                        n = D(i, a.cssClasses.handle); return D(n, a.cssClasses.touchArea), n.setAttribute("data-handle", e), a.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", (function(t) { return function(t, e) { if (X() || H(e)) return !1; var i = ["Left", "Right"],
                                n = ["Down", "Up"],
                                s = ["PageDown", "PageUp"],
                                o = ["Home", "End"];
                            a.dir && !a.ort ? i.reverse() : a.ort && !a.dir && (n.reverse(), s.reverse()); var r, l = t.key.replace("Arrow", ""),
                                h = l === s[0],
                                c = l === s[1],
                                d = l === n[0] || l === i[0] || h,
                                u = l === n[1] || l === i[1] || c,
                                p = l === o[1]; if (!(d || u || l === o[0] || p)) return !0; if (t.preventDefault(), u || d) { var f = a.keyboardPageMultiplier,
                                    g = d ? 0 : 1,
                                    m = pt(e)[g]; if (null === m) return !1;!1 === m && (m = A.getDefaultStep(P[e], d, a.keyboardDefaultStep)), (c || h) && (m *= f), m = Math.max(m, 1e-7), m *= d ? -1 : 1, r = C[e] + m } else r = p ? a.spectrum.xVal[a.spectrum.xVal.length - 1] : a.spectrum.xVal[0]; return lt(e, A.toStepping(r), !0, !0), it("slide", e), it("update", e), it("change", e), it("set", e), !1 }(t, e) }))), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", a.ort ? "vertical" : "horizontal"), 0 === e ? h(n, a.cssClasses.handleLower) : e === a.handles - 1 && h(n, a.cssClasses.handleUpper), i }

                function N(t, e) { return !!e && D(t, a.cssClasses.connect) }

                function F(t, e) { return !!a.tooltips[e] && D(t.firstChild, a.cssClasses.tooltip) }

                function X() { return S.hasAttribute("disabled") }

                function H(t) { return p[t].hasAttribute("disabled") }

                function B() { m && (et("update" + y), m.forEach((function(t) { t && e(t) })), m = null) }

                function Y() { B(), m = p.map(F), tt("update" + y, (function(t, e, i) { if (m[e]) { var n = t[e];!0 !== a.tooltips[e] && (n = a.tooltips[e].to(i[e])), m[e].innerHTML = n } })) }

                function W(t, e, i) { var n = E.createElement("div"),
                        s = [];
                    s[0] = a.cssClasses.valueNormal, s[1] = a.cssClasses.valueLarge, s[2] = a.cssClasses.valueSub; var o = [];
                    o[0] = a.cssClasses.markerNormal, o[1] = a.cssClasses.markerLarge, o[2] = a.cssClasses.markerSub; var r = [a.cssClasses.valueHorizontal, a.cssClasses.valueVertical],
                        l = [a.cssClasses.markerHorizontal, a.cssClasses.markerVertical];

                    function c(t, e) { var i = e === a.cssClasses.value,
                            n = i ? s : o; return e + " " + (i ? r : l)[a.ort] + " " + n[t] } return h(n, a.cssClasses.pips), h(n, 0 === a.ort ? a.cssClasses.pipsHorizontal : a.cssClasses.pipsVertical), Object.keys(t).forEach((function(s) {! function(t, s, o) { if (-1 !== (o = e ? e(s, o) : o)) { var r = D(n, !1);
                                r.className = c(o, a.cssClasses.marker), r.style[a.style] = t + "%", 0 < o && ((r = D(n, !1)).className = c(o, a.cssClasses.value), r.setAttribute("data-value", s), r.style[a.style] = t + "%", r.innerHTML = i.to(s)) } }(s, t[s][0], t[s][1]) })), n }

                function j() { g && (e(g), g = null) }

                function G(t) { j(); var e, i, n, a, s, o, r, l, h, c = t.mode,
                        d = t.density || 1,
                        u = t.filter || !1,
                        p = function(t, e, i) { if ("range" === t || "steps" === t) return A.xVal; if ("count" === t) { if (e < 2) throw new Error("noUiSlider (14.7.0): 'values' (>= 2) required for mode 'count'."); var n = e - 1,
                                    a = 100 / n; for (e = []; n--;) e[n] = n * a;
                                e.push(100), t = "positions" } return "positions" === t ? e.map((function(t) { return A.fromStepping(i ? A.getStep(t) : t) })) : "values" === t ? i ? e.map((function(t) { return A.fromStepping(A.getStep(A.toStepping(t))) })) : e : void 0 }(c, t.values || !1, t.stepped || !1),
                        f = (e = d, i = c, n = p, a = {}, s = A.xVal[0], o = A.xVal[A.xVal.length - 1], l = r = !1, h = 0, (n = n.slice().sort((function(t, e) { return t - e })).filter((function(t) { return !this[t] && (this[t] = !0) }), {}))[0] !== s && (n.unshift(s), r = !0), n[n.length - 1] !== o && (n.push(o), l = !0), n.forEach((function(t, s) { var o, c, d, u, p, f, g, m, x, v, b = t,
                                y = n[s + 1],
                                w = "steps" === i; if (w && (o = A.xNumSteps[s]), o || (o = y - b), !1 !== b)
                                for (void 0 === y && (y = b), o = Math.max(o, 1e-7), c = b; c <= y; c = (c + o).toFixed(7) / 1) { for (m = (p = (u = A.toStepping(c)) - h) / e, v = p / (x = Math.round(m)), d = 1; d <= x; d += 1) a[(f = h + d * v).toFixed(5)] = [A.fromStepping(f), 0];
                                    g = -1 < n.indexOf(c) ? 1 : w ? 2 : 0, !s && r && c !== y && (g = 0), c === y && l || (a[u.toFixed(5)] = [c, g]), h = u } })), a),
                        m = t.format || { to: Math.round }; return g = S.appendChild(W(f, u, m)) }

                function Z() { var t = u.getBoundingClientRect(),
                        e = "offset" + ["Width", "Height"][a.ort]; return 0 === a.ort ? t.width || u[e] : t.height || u[e] }

                function U(t, e, i, n) { var s = function(s) { return !!(s = function(t, e, i) { var n, a, s = 0 === t.type.indexOf("touch"),
                                    o = 0 === t.type.indexOf("mouse"),
                                    r = 0 === t.type.indexOf("pointer"); if (0 === t.type.indexOf("MSPointer") && (r = !0), "mousedown" === t.type && !t.buttons && !t.touches) return !1; if (s) { var l = function(t) { return t.target === i || i.contains(t.target) || t.target.shadowRoot && t.target.shadowRoot.contains(i) }; if ("touchstart" === t.type) { var h = Array.prototype.filter.call(t.touches, l); if (1 < h.length) return !1;
                                        n = h[0].pageX, a = h[0].pageY } else { var c = Array.prototype.find.call(t.changedTouches, l); if (!c) return !1;
                                        n = c.pageX, a = c.pageY } } return e = e || d(E), (o || r) && (n = t.clientX + e.x, a = t.clientY + e.y), t.pageOffset = e, t.points = [n, a], t.cursor = o || r, t }(s, n.pageOffset, n.target || e)) && !(X() && !n.doNotReject) && (o = S, r = a.cssClasses.tap, !((o.classList ? o.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(o.className)) && !n.doNotReject) && !(t === _.start && void 0 !== s.buttons && 1 < s.buttons) && (!n.hover || !s.buttons) && (k || s.preventDefault(), s.calcPoint = s.points[a.ort], void i(s, n))); var o, r },
                        o = []; return t.split(" ").forEach((function(t) { e.addEventListener(t, s, !!k && { passive: !0 }), o.push([t, s]) })), o }

                function q(t) { var e, i, n, s, r, l, h = 100 * (t - (e = u, i = a.ort, n = e.getBoundingClientRect(), r = (s = e.ownerDocument).documentElement, l = d(s), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0), i ? n.top + l.y - r.clientTop : n.left + l.x - r.clientLeft)) / Z(); return h = o(h), a.dir ? 100 - h : h }

                function $(t, e) { "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && J(t, e) }

                function K(t, e) { if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return J(t, e); var i = (a.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
                    st(0 < i, 100 * i / e.baseSize, e.locations, e.handleNumbers) }

                function J(t, e) { e.handle && (c(e.handle, a.cssClasses.active), T -= 1), e.listeners.forEach((function(t) { z.removeEventListener(t[0], t[1]) })), 0 === T && (c(S, a.cssClasses.drag), rt(), t.cursor && (I.style.cursor = "", I.removeEventListener("selectstart", n))), e.handleNumbers.forEach((function(t) { it("change", t), it("set", t), it("end", t) })) }

                function Q(t, e) { if (e.handleNumbers.some(H)) return !1; var i;
                    1 === e.handleNumbers.length && (i = p[e.handleNumbers[0]].children[0], T += 1, h(i, a.cssClasses.active)), t.stopPropagation(); var s = [],
                        o = U(_.move, z, K, { target: t.target, handle: i, listeners: s, startCalcPoint: t.calcPoint, baseSize: Z(), pageOffset: t.pageOffset, handleNumbers: e.handleNumbers, buttonsProperty: t.buttons, locations: P.slice() }),
                        r = U(_.end, z, J, { target: t.target, handle: i, listeners: s, doNotReject: !0, handleNumbers: e.handleNumbers }),
                        l = U("mouseout", z, $, { target: t.target, handle: i, listeners: s, doNotReject: !0, handleNumbers: e.handleNumbers });
                    s.push.apply(s, o.concat(r, l)), t.cursor && (I.style.cursor = getComputedStyle(t.target).cursor, 1 < p.length && h(S, a.cssClasses.drag), I.addEventListener("selectstart", n, !1)), e.handleNumbers.forEach((function(t) { it("start", t) })) }

                function tt(t, e) { M[t] = M[t] || [], M[t].push(e), "update" === t.split(".")[0] && p.forEach((function(t, e) { it("update", e) })) }

                function et(t) { var e = t && t.split(".")[0],
                        i = e ? t.substring(e.length) : t;
                    Object.keys(M).forEach((function(t) { var n, a = t.split(".")[0],
                            s = t.substring(a.length);
                        e && e !== a || i && i !== s || ((n = s) !== w && n !== y || i === s) && delete M[t] })) }

                function it(t, e, i) { Object.keys(M).forEach((function(n) { var s = n.split(".")[0];
                        t === s && M[n].forEach((function(t) { t.call(x, C.map(a.format.to), e, C.slice(), i || !1, P.slice(), x) })) })) }

                function nt(t, e, i, n, s, r) { var l; return 1 < p.length && !a.events.unconstrained && (n && 0 < e && (l = A.getAbsoluteDistance(t[e - 1], a.margin, 0), i = Math.max(i, l)), s && e < p.length - 1 && (l = A.getAbsoluteDistance(t[e + 1], a.margin, 1), i = Math.min(i, l))), 1 < p.length && a.limit && (n && 0 < e && (l = A.getAbsoluteDistance(t[e - 1], a.limit, 0), i = Math.min(i, l)), s && e < p.length - 1 && (l = A.getAbsoluteDistance(t[e + 1], a.limit, 1), i = Math.max(i, l))), a.padding && (0 === e && (l = A.getAbsoluteDistance(0, a.padding[0], 0), i = Math.max(i, l)), e === p.length - 1 && (l = A.getAbsoluteDistance(100, a.padding[1], 1), i = Math.min(i, l))), !((i = o(i = A.getStep(i))) === t[e] && !r) && i }

                function at(t, e) { var i = a.ort; return (i ? e : t) + ", " + (i ? t : e) }

                function st(t, e, i, n) { var a = i.slice(),
                        s = [!t, t],
                        o = [t, !t];
                    n = n.slice(), t && n.reverse(), 1 < n.length ? n.forEach((function(t, i) { var n = nt(a, t, a[t] + e, s[i], o[i], !1);!1 === n ? e = 0 : (e = n - a[t], a[t] = n) })) : s = o = [!0]; var r = !1;
                    n.forEach((function(t, n) { r = lt(t, i[t] + e, s[n], o[n]) || r })), r && n.forEach((function(t) { it("update", t), it("slide", t) })) }

                function ot(t, e) { return a.dir ? 100 - t - e : t }

                function rt() { L.forEach((function(t) { var e = 50 < P[t] ? -1 : 1,
                            i = 3 + (p.length + e * t);
                        p[t].style.zIndex = i })) }

                function lt(t, e, i, n, s) { return s || (e = nt(P, t, e, i, n, !1)), !1 !== e && (function(t, e) { P[t] = e, C[t] = A.fromStepping(e); var i = "translate(" + at(10 * (ot(e, 0) - O) + "%", "0") + ")";
                        p[t].style[a.transformRule] = i, ht(t), ht(t + 1) }(t, e), !0) }

                function ht(t) { if (f[t]) { var e = 0,
                            i = 100;
                        0 !== t && (e = P[t - 1]), t !== f.length - 1 && (i = P[t]); var n = i - e,
                            s = "translate(" + at(ot(e, n) + "%", "0") + ")",
                            o = "scale(" + at(n / 100, "1") + ")";
                        f[t].style[a.transformRule] = s + " " + o } }

                function ct(t, e) { return null === t || !1 === t || void 0 === t ? P[e] : ("number" == typeof t && (t = String(t)), t = a.format.from(t), !1 === (t = A.toStepping(t)) || isNaN(t) ? P[e] : t) }

                function dt(t, e, i) { var n = r(t),
                        o = void 0 === P[0];
                    e = void 0 === e || !!e, a.animate && !o && s(S, a.cssClasses.tap, a.animationDuration), L.forEach((function(t) { lt(t, ct(n[t], t), !0, !1, i) })); for (var l = 1 === L.length ? 0 : 1; l < L.length; ++l) L.forEach((function(t) { lt(t, P[t], !0, !0, i) }));
                    rt(), L.forEach((function(t) { it("update", t), null !== n[t] && e && it("set", t) })) }

                function ut() { var t = C.map(a.format.to); return 1 === t.length ? t[0] : t }

                function pt(t) { var e = P[t],
                        i = A.getNearbySteps(e),
                        n = C[t],
                        s = i.thisStep.step,
                        o = null; if (a.snap) return [n - i.stepBefore.startValue || null, i.stepAfter.startValue - n || null];!1 !== s && n + s > i.stepAfter.startValue && (s = i.stepAfter.startValue - n), o = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep, 100 === e ? s = null : 0 === e && (o = null); var r = A.countStepDecimals(); return null !== s && !1 !== s && (s = Number(s.toFixed(r))), null !== o && !1 !== o && (o = Number(o.toFixed(r))), [o, s] } return h(v = S, a.cssClasses.target), 0 === a.dir ? h(v, a.cssClasses.ltr) : h(v, a.cssClasses.rtl), 0 === a.ort ? h(v, a.cssClasses.horizontal) : h(v, a.cssClasses.vertical), h(v, "rtl" === getComputedStyle(v).direction ? a.cssClasses.textDirectionRtl : a.cssClasses.textDirectionLtr), u = D(v, a.cssClasses.base),
                    function(t, e) { var i = D(e, a.cssClasses.connects);
                        p = [], (f = []).push(N(i, t[0])); for (var n = 0; n < a.handles; n++) p.push(R(e, n)), L[n] = n, f.push(N(i, t[n + 1])) }(a.connect, u), (b = a.events).fixed || p.forEach((function(t, e) { U(_.start, t.children[0], Q, { handleNumbers: [e] }) })), b.tap && U(_.start, u, (function(t) { t.stopPropagation(); var e, i, n, o = q(t.calcPoint),
                            r = (e = o, n = !(i = 100), p.forEach((function(t, a) { if (!H(a)) { var s = P[a],
                                        o = Math.abs(s - e);
                                    (o < i || o <= i && s < e || 100 === o && 100 === i) && (n = a, i = o) } })), n); if (!1 === r) return !1;
                        a.events.snap || s(S, a.cssClasses.tap, a.animationDuration), lt(r, o, !0, !0), rt(), it("slide", r, !0), it("update", r, !0), it("change", r, !0), it("set", r, !0), a.events.snap && Q(t, { handleNumbers: [r] }) }), {}), b.hover && U(_.move, u, (function(t) { var e = q(t.calcPoint),
                            i = A.getStep(e),
                            n = A.fromStepping(i);
                        Object.keys(M).forEach((function(t) { "hover" === t.split(".")[0] && M[t].forEach((function(t) { t.call(x, n) })) })) }), { hover: !0 }), b.drag && f.forEach((function(t, e) { if (!1 !== t && 0 !== e && e !== f.length - 1) { var i = p[e - 1],
                                n = p[e],
                                s = [t];
                            h(t, a.cssClasses.draggable), b.fixed && (s.push(i.children[0]), s.push(n.children[0])), s.forEach((function(t) { U(_.start, t, Q, { handles: [i, n], handleNumbers: [e - 1, e] }) })) } })), dt(a.start), a.pips && G(a.pips), a.tooltips && Y(), et("update" + w), tt("update" + w, (function(t, e, i, n, s) { L.forEach((function(t) { var e = p[t],
                                n = nt(P, t, 0, !0, !0, !0),
                                o = nt(P, t, 100, !0, !0, !0),
                                r = s[t],
                                l = a.ariaFormat.to(i[t]);
                            n = A.fromStepping(n).toFixed(1), o = A.fromStepping(o).toFixed(1), r = A.fromStepping(r).toFixed(1), e.children[0].setAttribute("aria-valuemin", n), e.children[0].setAttribute("aria-valuemax", o), e.children[0].setAttribute("aria-valuenow", r), e.children[0].setAttribute("aria-valuetext", l) })) })), x = { destroy: function() { for (var t in et(w), et(y), a.cssClasses) a.cssClasses.hasOwnProperty(t) && c(S, a.cssClasses[t]); for (; S.firstChild;) S.removeChild(S.firstChild);
                            delete S.noUiSlider }, steps: function() { return L.map(pt) }, on: tt, off: et, get: ut, set: dt, setHandle: function(t, e, i, n) { if (!(0 <= (t = Number(t)) && t < L.length)) throw new Error("noUiSlider (14.7.0): invalid handle number, got: " + t);
                            lt(t, ct(e, t), !0, !0, n), it("update", t), i && it("set", t) }, reset: function(t) { dt(a.start, t) }, __moveHandles: function(t, e, i) { st(t, e, P, i) }, options: l, updateOptions: function(t, e) { var n = ut(),
                                s = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                            s.forEach((function(e) { void 0 !== t[e] && (l[e] = t[e]) })); var o = V(l);
                            s.forEach((function(e) { void 0 !== t[e] && (a[e] = o[e]) })), A = o.spectrum, a.margin = o.margin, a.limit = o.limit, a.padding = o.padding, a.pips ? G(a.pips) : j(), a.tooltips ? Y() : B(), P = [], dt(i(t.start) ? t.start : n, e) }, target: S, removePips: j, removeTooltips: B, getTooltips: function() { return m }, getOrigins: function() { return p }, pips: G } }(t, V(a), a); return t.noUiSlider = l } } })),
function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Scrollbar = e() : t.Scrollbar = e() }(this, (function() {
    return function(t) { var e = {};

        function i(n) { if (e[n]) return e[n].exports; var a = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports } return i.m = t, i.c = e, i.d = function(t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var a in t) i.d(n, a, function(e) { return t[e] }.bind(null, a)); return n }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 68) }([function(t, e) { var i = /^\s+|\s+$/g,
            n = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            o = parseInt,
            r = Object.prototype.toString;

        function l(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

        function h(t) { if ("number" == typeof t) return t; if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == r.call(t) }(t)) return NaN; if (l(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = l(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(i, ""); var h = a.test(t); return h || s.test(t) ? o(t.slice(2), h ? 2 : 8) : n.test(t) ? NaN : +t }
        t.exports = function(t, e, i) { return void 0 === i && (i = e, e = void 0), void 0 !== i && (i = (i = h(i)) == i ? i : 0), void 0 !== e && (e = (e = h(e)) == e ? e : 0),
                function(t, e, i) { return t == t && (void 0 !== i && (t = t <= i ? t : i), void 0 !== e && (t = t >= e ? t : e)), t }(h(t), e, i) } }, function(t, e, i) {
        (function(e) { var i = function(t) { return t && t.Math == Math && t };
            t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || Function("return this")() }).call(this, i(45)) }, function(t, e, i) { var n = i(1),
            a = i(53),
            s = i(4),
            o = i(31),
            r = i(58),
            l = i(77),
            h = a("wks"),
            c = n.Symbol,
            d = l ? c : c && c.withoutSetter || o;
        t.exports = function(t) { return s(h, t) || (r && s(c, t) ? h[t] = c[t] : h[t] = d("Symbol." + t)), h[t] } }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e) { var i = {}.hasOwnProperty;
        t.exports = function(t, e) { return i.call(t, e) } }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e, i) { var n = i(7),
            a = i(48),
            s = i(8),
            o = i(27),
            r = Object.defineProperty;
        e.f = n ? r : function(t, e, i) { if (s(t), e = o(e, !0), s(i), a) try { return r(t, e, i) } catch (t) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported"); return "value" in i && (t[e] = i.value), t } }, function(t, e, i) { var n = i(5);
        t.exports = !n((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })) }, function(t, e, i) { var n = i(3);
        t.exports = function(t) { if (!n(t)) throw TypeError(String(t) + " is not an object"); return t } }, function(t, e, i) { var n = i(7),
            a = i(6),
            s = i(15);
        t.exports = n ? function(t, e, i) { return a.f(t, e, s(1, i)) } : function(t, e, i) { return t[e] = i, t } }, function(t, e, i) { var n, a, s, o = i(52),
            r = i(1),
            l = i(3),
            h = i(9),
            c = i(4),
            d = i(29),
            u = i(17),
            p = r.WeakMap; if (o) { var f = new p,
                g = f.get,
                m = f.has,
                x = f.set;
            n = function(t, e) { return x.call(f, t, e), e }, a = function(t) { return g.call(f, t) || {} }, s = function(t) { return m.call(f, t) } } else { var v = d("state");
            u[v] = !0, n = function(t, e) { return h(t, v, e), e }, a = function(t) { return c(t, v) ? t[v] : {} }, s = function(t) { return c(t, v) } }
        t.exports = { set: n, get: a, has: s, enforce: function(t) { return s(t) ? a(t) : n(t, {}) }, getterFor: function(t) { return function(e) { var i; if (!l(e) || (i = a(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return i } } } }, function(t, e, i) { var n = i(1);
        t.exports = n }, function(t, e, i) { var n = i(1),
            a = i(9),
            s = i(4),
            o = i(28),
            r = i(50),
            l = i(10),
            h = l.get,
            c = l.enforce,
            d = String(String).split("String");
        (t.exports = function(t, e, i, r) { var l = !!r && !!r.unsafe,
                h = !!r && !!r.enumerable,
                u = !!r && !!r.noTargetGet; "function" == typeof i && ("string" != typeof e || s(i, "name") || a(i, "name", e), c(i).source = d.join("string" == typeof e ? e : "")), t !== n ? (l ? !u && t[e] && (h = !0) : delete t[e], h ? t[e] = i : a(t, e, i)) : h ? t[e] = i : o(e, i) })(Function.prototype, "toString", (function() { return "function" == typeof this && h(this).source || r(this) })) }, function(t, e) { t.exports = {} }, function(t, e, i) { var n = i(1),
            a = i(46).f,
            s = i(9),
            o = i(12),
            r = i(28),
            l = i(71),
            h = i(56);
        t.exports = function(t, e) { var i, c, d, u, p, f = t.target,
                g = t.global,
                m = t.stat; if (i = g ? n : m ? n[f] || r(f, {}) : (n[f] || {}).prototype)
                for (c in e) { if (u = e[c], d = t.noTargetGet ? (p = a(i, c)) && p.value : i[c], !h(g ? c : f + (m ? "." : "#") + c, t.forced) && void 0 !== d) { if (typeof u == typeof d) continue;
                        l(u, d) }(t.sham || d && d.sham) && s(u, "sham", !0), o(i, c, u, t) } } }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, i) { var n = i(24),
            a = i(26);
        t.exports = function(t) { return n(a(t)) } }, function(t, e) { t.exports = {} }, function(t, e, i) { var n = i(33),
            a = Math.min;
        t.exports = function(t) { return t > 0 ? a(n(t), 9007199254740991) : 0 } }, function(t, e, i) { var n = i(17),
            a = i(3),
            s = i(4),
            o = i(6).f,
            r = i(31),
            l = i(76),
            h = r("meta"),
            c = 0,
            d = Object.isExtensible || function() { return !0 },
            u = function(t) { o(t, h, { value: { objectID: "O" + ++c, weakData: {} } }) },
            p = t.exports = { REQUIRED: !1, fastKey: function(t, e) { if (!a(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!s(t, h)) { if (!d(t)) return "F"; if (!e) return "E";
                        u(t) } return t[h].objectID }, getWeakData: function(t, e) { if (!s(t, h)) { if (!d(t)) return !0; if (!e) return !1;
                        u(t) } return t[h].weakData }, onFreeze: function(t) { return l && p.REQUIRED && d(t) && !s(t, h) && u(t), t } };
        n[h] = !0 }, function(t, e, i) { var n = i(78);
        t.exports = function(t, e, i) { if (n(t), void 0 === e) return t; switch (i) {
                case 0:
                    return function() { return t.call(e) };
                case 1:
                    return function(i) { return t.call(e, i) };
                case 2:
                    return function(i, n) { return t.call(e, i, n) };
                case 3:
                    return function(i, n, a) { return t.call(e, i, n, a) } } return function() { return t.apply(e, arguments) } } }, function(t, e, i) { var n = i(26);
        t.exports = function(t) { return Object(n(t)) } }, function(t, e, i) {
        (function(e) { var i = /^\s+|\s+$/g,
                n = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                o = parseInt,
                r = "object" == typeof e && e && e.Object === Object && e,
                l = "object" == typeof self && self && self.Object === Object && self,
                h = r || l || Function("return this")(),
                c = Object.prototype.toString,
                d = Math.max,
                u = Math.min,
                p = function() { return h.Date.now() };

            function f(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

            function g(t) { if ("number" == typeof t) return t; if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == c.call(t) }(t)) return NaN; if (f(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = f(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(i, ""); var r = a.test(t); return r || s.test(t) ? o(t.slice(2), r ? 2 : 8) : n.test(t) ? NaN : +t }
            t.exports = function(t, e, i) { var n, a, s, o, r, l, h = 0,
                    c = !1,
                    m = !1,
                    x = !0; if ("function" != typeof t) throw new TypeError("Expected a function");

                function v(e) { var i = n,
                        s = a; return n = a = void 0, h = e, o = t.apply(s, i) }

                function b(t) { var i = t - l; return void 0 === l || i >= e || i < 0 || m && t - h >= s }

                function y() { var t = p(); if (b(t)) return w(t);
                    r = setTimeout(y, function(t) { var i = e - (t - l); return m ? u(i, s - (t - h)) : i }(t)) }

                function w(t) { return r = void 0, x && n ? v(t) : (n = a = void 0, o) }

                function _() { var t = p(),
                        i = b(t); if (n = arguments, a = this, l = t, i) { if (void 0 === r) return function(t) { return h = t, r = setTimeout(y, e), c ? v(t) : o }(l); if (m) return r = setTimeout(y, e), v(l) } return void 0 === r && (r = setTimeout(y, e)), o } return e = g(e) || 0, f(i) && (c = !!i.leading, s = (m = "maxWait" in i) ? d(g(i.maxWait) || 0, e) : s, x = "trailing" in i ? !!i.trailing : x), _.cancel = function() { void 0 !== r && clearTimeout(r), h = 0, n = l = a = r = void 0 }, _.flush = function() { return void 0 === r ? o : w(p()) }, _ } }).call(this, i(45)) }, function(t, e, i) { "use strict"; var n = i(14),
            a = i(1),
            s = i(56),
            o = i(12),
            r = i(19),
            l = i(35),
            h = i(37),
            c = i(3),
            d = i(5),
            u = i(62),
            p = i(38),
            f = i(79);
        t.exports = function(t, e, i) { var g = -1 !== t.indexOf("Map"),
                m = -1 !== t.indexOf("Weak"),
                x = g ? "set" : "add",
                v = a[t],
                b = v && v.prototype,
                y = v,
                w = {},
                _ = function(t) { var e = b[t];
                    o(b, t, "add" == t ? function(t) { return e.call(this, 0 === t ? 0 : t), this } : "delete" == t ? function(t) { return !(m && !c(t)) && e.call(this, 0 === t ? 0 : t) } : "get" == t ? function(t) { return m && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t) } : "has" == t ? function(t) { return !(m && !c(t)) && e.call(this, 0 === t ? 0 : t) } : function(t, i) { return e.call(this, 0 === t ? 0 : t, i), this }) }; if (s(t, "function" != typeof v || !(m || b.forEach && !d((function() {
                    (new v).entries().next() }))))) y = i.getConstructor(e, t, g, x), r.REQUIRED = !0;
            else if (s(t, !0)) { var k = new y,
                    S = k[x](m ? {} : -0, 1) != k,
                    A = d((function() { k.has(1) })),
                    C = u((function(t) { new v(t) })),
                    P = !m && d((function() { for (var t = new v, e = 5; e--;) t[x](e, e); return !t.has(-0) }));
                C || ((y = e((function(e, i) { h(e, y, t); var n = f(new v, e, y); return null != i && l(i, n[x], n, g), n }))).prototype = b, b.constructor = y), (A || P) && (_("delete"), _("has"), g && _("get")), (P || S) && _(x), m && b.clear && delete b.clear } return w[t] = y, n({ global: !0, forced: y != v }, w), p(y, t), m || i.setStrong(y, t, g), y } }, function(t, e, i) { var n = i(5),
            a = i(25),
            s = "".split;
        t.exports = n((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(t) { return "String" == a(t) ? s.call(t, "") : Object(t) } : Object }, function(t, e) { var i = {}.toString;
        t.exports = function(t) { return i.call(t).slice(8, -1) } }, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, e, i) { var n = i(3);
        t.exports = function(t, e) { if (!n(t)) return t; var i, a; if (e && "function" == typeof(i = t.toString) && !n(a = i.call(t))) return a; if ("function" == typeof(i = t.valueOf) && !n(a = i.call(t))) return a; if (!e && "function" == typeof(i = t.toString) && !n(a = i.call(t))) return a; throw TypeError("Can't convert object to primitive value") } }, function(t, e, i) { var n = i(1),
            a = i(9);
        t.exports = function(t, e) { try { a(n, t, e) } catch (i) { n[t] = e } return e } }, function(t, e, i) { var n = i(53),
            a = i(31),
            s = n("keys");
        t.exports = function(t) { return s[t] || (s[t] = a(t)) } }, function(t, e) { t.exports = !1 }, function(t, e) { var i = 0,
            n = Math.random();
        t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++i + n).toString(36) } }, function(t, e, i) { var n = i(11),
            a = i(1),
            s = function(t) { return "function" == typeof t ? t : void 0 };
        t.exports = function(t, e) { return arguments.length < 2 ? s(n[t]) || s(a[t]) : n[t] && n[t][e] || a[t] && a[t][e] } }, function(t, e) { var i = Math.ceil,
            n = Math.floor;
        t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t) } }, function(t, e) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, e, i) { var n = i(8),
            a = i(57),
            s = i(18),
            o = i(20),
            r = i(59),
            l = i(61),
            h = function(t, e) { this.stopped = t, this.result = e };
        (t.exports = function(t, e, i, c, d) { var u, p, f, g, m, x, v, b = o(e, i, c ? 2 : 1); if (d) u = t;
            else { if ("function" != typeof(p = r(t))) throw TypeError("Target is not iterable"); if (a(p)) { for (f = 0, g = s(t.length); g > f; f++)
                        if ((m = c ? b(n(v = t[f])[0], v[1]) : b(t[f])) && m instanceof h) return m;
                    return new h(!1) }
                u = p.call(t) } for (x = u.next; !(v = x.call(u)).done;)
                if ("object" == typeof(m = l(u, b, v.value, c)) && m && m instanceof h) return m;
            return new h(!1) }).stop = function(t) { return new h(!0, t) } }, function(t, e, i) { var n = {};
        n[i(2)("toStringTag")] = "z", t.exports = "[object z]" === String(n) }, function(t, e) { t.exports = function(t, e, i) { if (!(t instanceof e)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation"); return t } }, function(t, e, i) { var n = i(6).f,
            a = i(4),
            s = i(2)("toStringTag");
        t.exports = function(t, e, i) { t && !a(t = i ? t : t.prototype, s) && n(t, s, { configurable: !0, value: e }) } }, function(t, e, i) { var n, a = i(8),
            s = i(81),
            o = i(34),
            r = i(17),
            l = i(82),
            h = i(49),
            c = i(29)("IE_PROTO"),
            d = function() {},
            u = function(t) { return "<script>" + t + "<\/script>" },
            p = function() { try { n = document.domain && new ActiveXObject("htmlfile") } catch (t) {}
                p = n ? function(t) { t.write(u("")), t.close(); var e = t.parentWindow.Object; return t = null, e }(n) : function() { var t, e = h("iframe"); return e.style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(u("document.F=Object")), t.close(), t.F }(); for (var t = o.length; t--;) delete p.prototype[o[t]]; return p() };
        r[c] = !0, t.exports = Object.create || function(t, e) { var i; return null !== t ? (d.prototype = a(t), i = new d, d.prototype = null, i[c] = t) : i = p(), void 0 === e ? i : s(i, e) } }, function(t, e, i) { var n = i(12);
        t.exports = function(t, e, i) { for (var a in e) n(t, a, e[a], i); return t } }, function(t, e, i) { "use strict"; var n = i(14),
            a = i(83),
            s = i(67),
            o = i(63),
            r = i(38),
            l = i(9),
            h = i(12),
            c = i(2),
            d = i(30),
            u = i(13),
            p = i(66),
            f = p.IteratorPrototype,
            g = p.BUGGY_SAFARI_ITERATORS,
            m = c("iterator"),
            x = function() { return this };
        t.exports = function(t, e, i, c, p, v, b) { a(i, e, c); var y, w, _, k = function(t) { if (t === p && L) return L; if (!g && t in C) return C[t]; switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() { return new i(this, t) } } return function() { return new i(this) } },
                S = e + " Iterator",
                A = !1,
                C = t.prototype,
                P = C[m] || C["@@iterator"] || p && C[p],
                L = !g && P || k(p),
                T = "Array" == e && C.entries || P; if (T && (y = s(T.call(new t)), f !== Object.prototype && y.next && (d || s(y) === f || (o ? o(y, f) : "function" != typeof y[m] && l(y, m, x)), r(y, S, !0, !0), d && (u[S] = x))), "values" == p && P && "values" !== P.name && (A = !0, L = function() { return P.call(this) }), d && !b || C[m] === L || l(C, m, L), u[e] = L, p)
                if (w = { values: k("values"), keys: v ? L : k("keys"), entries: k("entries") }, b)
                    for (_ in w) !g && !A && _ in C || h(C, _, w[_]);
                else n({ target: e, proto: !0, forced: g || A }, w);
            return w } }, function(t, e, i) { var n = i(36),
            a = i(12),
            s = i(86);
        n || a(Object.prototype, "toString", s, { unsafe: !0 }) }, function(t, e, i) { "use strict"; var n = i(87).charAt,
            a = i(10),
            s = i(41),
            o = a.set,
            r = a.getterFor("String Iterator");
        s(String, "String", (function(t) { o(this, { type: "String Iterator", string: String(t), index: 0 }) }), (function() { var t, e = r(this),
                i = e.string,
                a = e.index; return a >= i.length ? { value: void 0, done: !0 } : (t = n(i, a), e.index += t.length, { value: t, done: !1 }) })) }, function(t, e, i) { var n = i(1),
            a = i(88),
            s = i(89),
            o = i(9),
            r = i(2),
            l = r("iterator"),
            h = r("toStringTag"),
            c = s.values; for (var d in a) { var u = n[d],
                p = u && u.prototype; if (p) { if (p[l] !== c) try { o(p, l, c) } catch (t) { p[l] = c }
                if (p[h] || o(p, h, d), a[d])
                    for (var f in s)
                        if (p[f] !== s[f]) try { o(p, f, s[f]) } catch (t) { p[f] = s[f] } } } }, function(t, e) { var i;
        i = function() { return this }(); try { i = i || new Function("return this")() } catch (t) { "object" == typeof window && (i = window) }
        t.exports = i }, function(t, e, i) { var n = i(7),
            a = i(47),
            s = i(15),
            o = i(16),
            r = i(27),
            l = i(4),
            h = i(48),
            c = Object.getOwnPropertyDescriptor;
        e.f = n ? c : function(t, e) { if (t = o(t), e = r(e, !0), h) try { return c(t, e) } catch (t) {}
            if (l(t, e)) return s(!a.f.call(t, e), t[e]) } }, function(t, e, i) { "use strict"; var n = {}.propertyIsEnumerable,
            a = Object.getOwnPropertyDescriptor,
            s = a && !n.call({ 1: 2 }, 1);
        e.f = s ? function(t) { var e = a(this, t); return !!e && e.enumerable } : n }, function(t, e, i) { var n = i(7),
            a = i(5),
            s = i(49);
        t.exports = !n && !a((function() { return 7 != Object.defineProperty(s("div"), "a", { get: function() { return 7 } }).a })) }, function(t, e, i) { var n = i(1),
            a = i(3),
            s = n.document,
            o = a(s) && a(s.createElement);
        t.exports = function(t) { return o ? s.createElement(t) : {} } }, function(t, e, i) { var n = i(51),
            a = Function.toString; "function" != typeof n.inspectSource && (n.inspectSource = function(t) { return a.call(t) }), t.exports = n.inspectSource }, function(t, e, i) { var n = i(1),
            a = i(28),
            s = n["__core-js_shared__"] || a("__core-js_shared__", {});
        t.exports = s }, function(t, e, i) { var n = i(1),
            a = i(50),
            s = n.WeakMap;
        t.exports = "function" == typeof s && /native code/.test(a(s)) }, function(t, e, i) { var n = i(30),
            a = i(51);
        (t.exports = function(t, e) { return a[t] || (a[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.6.4", mode: n ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" }) }, function(t, e, i) { var n = i(4),
            a = i(16),
            s = i(74).indexOf,
            o = i(17);
        t.exports = function(t, e) { var i, r = a(t),
                l = 0,
                h = []; for (i in r) !n(o, i) && n(r, i) && h.push(i); for (; e.length > l;) n(r, i = e[l++]) && (~s(h, i) || h.push(i)); return h } }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, i) { var n = i(5),
            a = /#|\.prototype\./,
            s = function(t, e) { var i = r[o(t)]; return i == h || i != l && ("function" == typeof e ? n(e) : !!e) },
            o = s.normalize = function(t) { return String(t).replace(a, ".").toLowerCase() },
            r = s.data = {},
            l = s.NATIVE = "N",
            h = s.POLYFILL = "P";
        t.exports = s }, function(t, e, i) { var n = i(2),
            a = i(13),
            s = n("iterator"),
            o = Array.prototype;
        t.exports = function(t) { return void 0 !== t && (a.Array === t || o[s] === t) } }, function(t, e, i) { var n = i(5);
        t.exports = !!Object.getOwnPropertySymbols && !n((function() { return !String(Symbol()) })) }, function(t, e, i) { var n = i(60),
            a = i(13),
            s = i(2)("iterator");
        t.exports = function(t) { if (null != t) return t[s] || t["@@iterator"] || a[n(t)] } }, function(t, e, i) { var n = i(36),
            a = i(25),
            s = i(2)("toStringTag"),
            o = "Arguments" == a(function() { return arguments }());
        t.exports = n ? a : function(t) { var e, i, n; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), s)) ? i : o ? a(e) : "Object" == (n = a(e)) && "function" == typeof e.callee ? "Arguments" : n } }, function(t, e, i) { var n = i(8);
        t.exports = function(t, e, i, a) { try { return a ? e(n(i)[0], i[1]) : e(i) } catch (e) { var s = t.return; throw void 0 !== s && n(s.call(t)), e } } }, function(t, e, i) { var n = i(2)("iterator"),
            a = !1; try { var s = 0,
                o = { next: function() { return { done: !!s++ } }, return: function() { a = !0 } };
            o[n] = function() { return this }, Array.from(o, (function() { throw 2 })) } catch (t) {}
        t.exports = function(t, e) { if (!e && !a) return !1; var i = !1; try { var s = {};
                s[n] = function() { return { next: function() { return { done: i = !0 } } } }, t(s) } catch (t) {} return i } }, function(t, e, i) { var n = i(8),
            a = i(80);
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var t, e = !1,
                i = {}; try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), e = i instanceof Array } catch (t) {} return function(i, s) { return n(i), a(s), e ? t.call(i, s) : i.__proto__ = s, i } }() : void 0) }, function(t, e, i) { "use strict"; var n = i(6).f,
            a = i(39),
            s = i(40),
            o = i(20),
            r = i(37),
            l = i(35),
            h = i(41),
            c = i(85),
            d = i(7),
            u = i(19).fastKey,
            p = i(10),
            f = p.set,
            g = p.getterFor;
        t.exports = { getConstructor: function(t, e, i, h) { var c = t((function(t, n) { r(t, c, e), f(t, { type: e, index: a(null), first: void 0, last: void 0, size: 0 }), d || (t.size = 0), null != n && l(n, t[h], t, i) })),
                    p = g(e),
                    m = function(t, e, i) { var n, a, s = p(t),
                            o = x(t, e); return o ? o.value = i : (s.last = o = { index: a = u(e, !0), key: e, value: i, previous: n = s.last, next: void 0, removed: !1 }, s.first || (s.first = o), n && (n.next = o), d ? s.size++ : t.size++, "F" !== a && (s.index[a] = o)), t },
                    x = function(t, e) { var i, n = p(t),
                            a = u(e); if ("F" !== a) return n.index[a]; for (i = n.first; i; i = i.next)
                            if (i.key == e) return i }; return s(c.prototype, { clear: function() { for (var t = p(this), e = t.index, i = t.first; i;) i.removed = !0, i.previous && (i.previous = i.previous.next = void 0), delete e[i.index], i = i.next;
                        t.first = t.last = void 0, d ? t.size = 0 : this.size = 0 }, delete: function(t) { var e = p(this),
                            i = x(this, t); if (i) { var n = i.next,
                                a = i.previous;
                            delete e.index[i.index], i.removed = !0, a && (a.next = n), n && (n.previous = a), e.first == i && (e.first = n), e.last == i && (e.last = a), d ? e.size-- : this.size-- } return !!i }, forEach: function(t) { for (var e, i = p(this), n = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : i.first;)
                            for (n(e.value, e.key, this); e && e.removed;) e = e.previous }, has: function(t) { return !!x(this, t) } }), s(c.prototype, i ? { get: function(t) { var e = x(this, t); return e && e.value }, set: function(t, e) { return m(this, 0 === t ? 0 : t, e) } } : { add: function(t) { return m(this, t = 0 === t ? 0 : t, t) } }), d && n(c.prototype, "size", { get: function() { return p(this).size } }), c }, setStrong: function(t, e, i) { var n = e + " Iterator",
                    a = g(e),
                    s = g(n);
                h(t, e, (function(t, e) { f(this, { type: n, target: t, state: a(t), kind: e, last: void 0 }) }), (function() { for (var t = s(this), e = t.kind, i = t.last; i && i.removed;) i = i.previous; return t.target && (t.last = i = i ? i.next : t.state.first) ? "keys" == e ? { value: i.key, done: !1 } : "values" == e ? { value: i.value, done: !1 } : { value: [i.key, i.value], done: !1 } : (t.target = void 0, { value: void 0, done: !0 }) }), i ? "entries" : "values", !i, !0), c(e) } } }, function(t, e, i) { var n = i(54),
            a = i(34);
        t.exports = Object.keys || function(t) { return n(t, a) } }, function(t, e, i) { "use strict"; var n, a, s, o = i(67),
            r = i(9),
            l = i(4),
            h = i(2),
            c = i(30),
            d = h("iterator"),
            u = !1;
        [].keys && ("next" in (s = [].keys()) ? (a = o(o(s))) !== Object.prototype && (n = a) : u = !0), null == n && (n = {}), c || l(n, d) || r(n, d, (function() { return this })), t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: u } }, function(t, e, i) { var n = i(4),
            a = i(21),
            s = i(29),
            o = i(84),
            r = s("IE_PROTO"),
            l = Object.prototype;
        t.exports = o ? Object.getPrototypeOf : function(t) { return t = a(t), n(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null } }, function(t, e, i) { t.exports = i(106) }, function(t, e, i) { i(70), i(42), i(43), i(44); var n = i(11);
        t.exports = n.Map }, function(t, e, i) { "use strict"; var n = i(23),
            a = i(64);
        t.exports = n("Map", (function(t) { return function() { return t(this, arguments.length ? arguments[0] : void 0) } }), a) }, function(t, e, i) { var n = i(4),
            a = i(72),
            s = i(46),
            o = i(6);
        t.exports = function(t, e) { for (var i = a(e), r = o.f, l = s.f, h = 0; h < i.length; h++) { var c = i[h];
                n(t, c) || r(t, c, l(e, c)) } } }, function(t, e, i) { var n = i(32),
            a = i(73),
            s = i(55),
            o = i(8);
        t.exports = n("Reflect", "ownKeys") || function(t) { var e = a.f(o(t)),
                i = s.f; return i ? e.concat(i(t)) : e } }, function(t, e, i) { var n = i(54),
            a = i(34).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) { return n(t, a) } }, function(t, e, i) { var n = i(16),
            a = i(18),
            s = i(75),
            o = function(t) { return function(e, i, o) { var r, l = n(e),
                        h = a(l.length),
                        c = s(o, h); if (t && i != i) { for (; h > c;)
                            if ((r = l[c++]) != r) return !0 } else
                        for (; h > c; c++)
                            if ((t || c in l) && l[c] === i) return t || c || 0; return !t && -1 } };
        t.exports = { includes: o(!0), indexOf: o(!1) } }, function(t, e, i) { var n = i(33),
            a = Math.max,
            s = Math.min;
        t.exports = function(t, e) { var i = n(t); return i < 0 ? a(i + e, 0) : s(i, e) } }, function(t, e, i) { var n = i(5);
        t.exports = !n((function() { return Object.isExtensible(Object.preventExtensions({})) })) }, function(t, e, i) { var n = i(58);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, e, i) { var n = i(3),
            a = i(63);
        t.exports = function(t, e, i) { var s, o; return a && "function" == typeof(s = e.constructor) && s !== i && n(o = s.prototype) && o !== i.prototype && a(t, o), t } }, function(t, e, i) { var n = i(3);
        t.exports = function(t) { if (!n(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype"); return t } }, function(t, e, i) { var n = i(7),
            a = i(6),
            s = i(8),
            o = i(65);
        t.exports = n ? Object.defineProperties : function(t, e) { s(t); for (var i, n = o(e), r = n.length, l = 0; r > l;) a.f(t, i = n[l++], e[i]); return t } }, function(t, e, i) { var n = i(32);
        t.exports = n("document", "documentElement") }, function(t, e, i) { "use strict"; var n = i(66).IteratorPrototype,
            a = i(39),
            s = i(15),
            o = i(38),
            r = i(13),
            l = function() { return this };
        t.exports = function(t, e, i) { var h = e + " Iterator"; return t.prototype = a(n, { next: s(1, i) }), o(t, h, !1, !0), r[h] = l, t } }, function(t, e, i) { var n = i(5);
        t.exports = !n((function() {
            function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })) }, function(t, e, i) { "use strict"; var n = i(32),
            a = i(6),
            s = i(2),
            o = i(7),
            r = s("species");
        t.exports = function(t) { var e = n(t),
                i = a.f;
            o && e && !e[r] && i(e, r, { configurable: !0, get: function() { return this } }) } }, function(t, e, i) { "use strict"; var n = i(36),
            a = i(60);
        t.exports = n ? {}.toString : function() { return "[object " + a(this) + "]" } }, function(t, e, i) { var n = i(33),
            a = i(26),
            s = function(t) { return function(e, i) { var s, o, r = String(a(e)),
                        l = n(i),
                        h = r.length; return l < 0 || l >= h ? t ? "" : void 0 : (s = r.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === h || (o = r.charCodeAt(l + 1)) < 56320 || o > 57343 ? t ? r.charAt(l) : s : t ? r.slice(l, l + 2) : o - 56320 + (s - 55296 << 10) + 65536 } };
        t.exports = { codeAt: s(!1), charAt: s(!0) } }, function(t, e) { t.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 } }, function(t, e, i) { "use strict"; var n = i(16),
            a = i(90),
            s = i(13),
            o = i(10),
            r = i(41),
            l = o.set,
            h = o.getterFor("Array Iterator");
        t.exports = r(Array, "Array", (function(t, e) { l(this, { type: "Array Iterator", target: n(t), index: 0, kind: e }) }), (function() { var t = h(this),
                e = t.target,
                i = t.kind,
                n = t.index++; return !e || n >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == i ? { value: n, done: !1 } : "values" == i ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 } }), "values"), s.Arguments = s.Array, a("keys"), a("values"), a("entries") }, function(t, e, i) { var n = i(2),
            a = i(39),
            s = i(6),
            o = n("unscopables"),
            r = Array.prototype;
        null == r[o] && s.f(r, o, { configurable: !0, value: a(null) }), t.exports = function(t) { r[o][t] = !0 } }, function(t, e, i) { i(92), i(42), i(43), i(44); var n = i(11);
        t.exports = n.Set }, function(t, e, i) { "use strict"; var n = i(23),
            a = i(64);
        t.exports = n("Set", (function(t) { return function() { return t(this, arguments.length ? arguments[0] : void 0) } }), a) }, function(t, e, i) { i(42), i(94), i(44); var n = i(11);
        t.exports = n.WeakMap }, function(t, e, i) { "use strict"; var n, a = i(1),
            s = i(40),
            o = i(19),
            r = i(23),
            l = i(95),
            h = i(3),
            c = i(10).enforce,
            d = i(52),
            u = !a.ActiveXObject && "ActiveXObject" in a,
            p = Object.isExtensible,
            f = function(t) { return function() { return t(this, arguments.length ? arguments[0] : void 0) } },
            g = t.exports = r("WeakMap", f, l); if (d && u) { n = l.getConstructor(f, "WeakMap", !0), o.REQUIRED = !0; var m = g.prototype,
                x = m.delete,
                v = m.has,
                b = m.get,
                y = m.set;
            s(m, { delete: function(t) { if (h(t) && !p(t)) { var e = c(this); return e.frozen || (e.frozen = new n), x.call(this, t) || e.frozen.delete(t) } return x.call(this, t) }, has: function(t) { if (h(t) && !p(t)) { var e = c(this); return e.frozen || (e.frozen = new n), v.call(this, t) || e.frozen.has(t) } return v.call(this, t) }, get: function(t) { if (h(t) && !p(t)) { var e = c(this); return e.frozen || (e.frozen = new n), v.call(this, t) ? b.call(this, t) : e.frozen.get(t) } return b.call(this, t) }, set: function(t, e) { if (h(t) && !p(t)) { var i = c(this);
                        i.frozen || (i.frozen = new n), v.call(this, t) ? y.call(this, t, e) : i.frozen.set(t, e) } else y.call(this, t, e); return this } }) } }, function(t, e, i) { "use strict"; var n = i(40),
            a = i(19).getWeakData,
            s = i(8),
            o = i(3),
            r = i(37),
            l = i(35),
            h = i(96),
            c = i(4),
            d = i(10),
            u = d.set,
            p = d.getterFor,
            f = h.find,
            g = h.findIndex,
            m = 0,
            x = function(t) { return t.frozen || (t.frozen = new v) },
            v = function() { this.entries = [] },
            b = function(t, e) { return f(t.entries, (function(t) { return t[0] === e })) };
        v.prototype = { get: function(t) { var e = b(this, t); if (e) return e[1] }, has: function(t) { return !!b(this, t) }, set: function(t, e) { var i = b(this, t);
                i ? i[1] = e : this.entries.push([t, e]) }, delete: function(t) { var e = g(this.entries, (function(e) { return e[0] === t })); return ~e && this.entries.splice(e, 1), !!~e } }, t.exports = { getConstructor: function(t, e, i, h) { var d = t((function(t, n) { r(t, d, e), u(t, { type: e, id: m++, frozen: void 0 }), null != n && l(n, t[h], t, i) })),
                    f = p(e),
                    g = function(t, e, i) { var n = f(t),
                            o = a(s(e), !0); return !0 === o ? x(n).set(e, i) : o[n.id] = i, t }; return n(d.prototype, { delete: function(t) { var e = f(this); if (!o(t)) return !1; var i = a(t); return !0 === i ? x(e).delete(t) : i && c(i, e.id) && delete i[e.id] }, has: function(t) { var e = f(this); if (!o(t)) return !1; var i = a(t); return !0 === i ? x(e).has(t) : i && c(i, e.id) } }), n(d.prototype, i ? { get: function(t) { var e = f(this); if (o(t)) { var i = a(t); return !0 === i ? x(e).get(t) : i ? i[e.id] : void 0 } }, set: function(t, e) { return g(this, t, e) } } : { add: function(t) { return g(this, t, !0) } }), d } } }, function(t, e, i) { var n = i(20),
            a = i(24),
            s = i(21),
            o = i(18),
            r = i(97),
            l = [].push,
            h = function(t) { var e = 1 == t,
                    i = 2 == t,
                    h = 3 == t,
                    c = 4 == t,
                    d = 6 == t,
                    u = 5 == t || d; return function(p, f, g, m) { for (var x, v, b = s(p), y = a(b), w = n(f, g, 3), _ = o(y.length), k = 0, S = m || r, A = e ? S(p, _) : i ? S(p, 0) : void 0; _ > k; k++)
                        if ((u || k in y) && (v = w(x = y[k], k, b), t))
                            if (e) A[k] = v;
                            else if (v) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return x;
                        case 6:
                            return k;
                        case 2:
                            l.call(A, x) } else if (c) return !1;
                    return d ? -1 : h || c ? c : A } };
        t.exports = { forEach: h(0), map: h(1), filter: h(2), some: h(3), every: h(4), find: h(5), findIndex: h(6) } }, function(t, e, i) { var n = i(3),
            a = i(98),
            s = i(2)("species");
        t.exports = function(t, e) { var i; return a(t) && ("function" != typeof(i = t.constructor) || i !== Array && !a(i.prototype) ? n(i) && null === (i = i[s]) && (i = void 0) : i = void 0), new(void 0 === i ? Array : i)(0 === e ? 0 : e) } }, function(t, e, i) { var n = i(25);
        t.exports = Array.isArray || function(t) { return "Array" == n(t) } }, function(t, e, i) { i(43), i(100); var n = i(11);
        t.exports = n.Array.from }, function(t, e, i) { var n = i(14),
            a = i(101);
        n({ target: "Array", stat: !0, forced: !i(62)((function(t) { Array.from(t) })) }, { from: a }) }, function(t, e, i) { "use strict"; var n = i(20),
            a = i(21),
            s = i(61),
            o = i(57),
            r = i(18),
            l = i(102),
            h = i(59);
        t.exports = function(t) { var e, i, c, d, u, p, f = a(t),
                g = "function" == typeof this ? this : Array,
                m = arguments.length,
                x = m > 1 ? arguments[1] : void 0,
                v = void 0 !== x,
                b = h(f),
                y = 0; if (v && (x = n(x, m > 2 ? arguments[2] : void 0, 2)), null == b || g == Array && o(b))
                for (i = new g(e = r(f.length)); e > y; y++) p = v ? x(f[y], y) : f[y], l(i, y, p);
            else
                for (u = (d = b.call(f)).next, i = new g; !(c = u.call(d)).done; y++) p = v ? s(d, x, [c.value, y], !0) : c.value, l(i, y, p); return i.length = y, i } }, function(t, e, i) { "use strict"; var n = i(27),
            a = i(6),
            s = i(15);
        t.exports = function(t, e, i) { var o = n(e);
            o in t ? a.f(t, o, s(0, i)) : t[o] = i } }, function(t, e, i) { i(104); var n = i(11);
        t.exports = n.Object.assign }, function(t, e, i) { var n = i(14),
            a = i(105);
        n({ target: "Object", stat: !0, forced: Object.assign !== a }, { assign: a }) }, function(t, e, i) { "use strict"; var n = i(7),
            a = i(5),
            s = i(65),
            o = i(55),
            r = i(47),
            l = i(21),
            h = i(24),
            c = Object.assign,
            d = Object.defineProperty;
        t.exports = !c || a((function() { if (n && 1 !== c({ b: 1 }, c(d({}, "a", { enumerable: !0, get: function() { d(this, "b", { value: 3, enumerable: !1 }) } }), { b: 2 })).b) return !0; var t = {},
                e = {},
                i = Symbol(); return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) { e[t] = t })), 7 != c({}, t)[i] || "abcdefghijklmnopqrst" != s(c({}, e)).join("") })) ? function(t, e) { for (var i = l(t), a = arguments.length, c = 1, d = o.f, u = r.f; a > c;)
                for (var p, f = h(arguments[c++]), g = d ? s(f).concat(d(f)) : s(f), m = g.length, x = 0; m > x;) p = g[x++], n && !u.call(f, p) || (i[p] = f[p]); return i } : c }, function(t, e, i) {
        "use strict";
        i.r(e);
        var n = {};
        i.r(n), i.d(n, "keyboardHandler", (function() { return N })), i.d(n, "mouseHandler", (function() { return F })), i.d(n, "resizeHandler", (function() { return X })), i.d(n, "selectHandler", (function() { return H })), i.d(n, "touchHandler", (function() { return B })), i.d(n, "wheelHandler", (function() { return Y }));
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var a = function(t, e) { return (a = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]) })(t, e) },
            s = function() { return (s = Object.assign || function(t) { for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var a in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]); return t }).apply(this, arguments) };

        function o(t, e, i, n) { var a, s = arguments.length,
                o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(a = t[r]) && (o = (s < 3 ? a(o) : s > 3 ? a(e, i, o) : a(e, i)) || o); return s > 3 && o && Object.defineProperty(e, i, o), o }
        i(69), i(91), i(93), i(99), i(103);
        var r = i(0),
            l = i.n(r);

        function h(t, e) { return void 0 === t && (t = -1 / 0), void 0 === e && (e = 1 / 0),
                function(i, n) { var a = "_" + n;
                    Object.defineProperty(i, n, { get: function() { return this[a] }, set: function(i) { Object.defineProperty(this, a, { value: l()(i, t, e), enumerable: !1, writable: !0, configurable: !0 }) }, enumerable: !0, configurable: !0 }) } }

        function c(t, e) { var i = "_" + e;
            Object.defineProperty(t, e, { get: function() { return this[i] }, set: function(t) { Object.defineProperty(this, i, { value: !!t, enumerable: !1, writable: !0, configurable: !0 }) }, enumerable: !0, configurable: !0 }) }
        var d = i(22),
            u = i.n(d);

        function p() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return function(e, i, n) { var a = n.value; return { get: function() { return this.hasOwnProperty(i) || Object.defineProperty(this, i, { value: u.a.apply(void 0, function() { for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length; var n = Array(t),
                                    a = 0; for (e = 0; e < i; e++)
                                    for (var s = arguments[e], o = 0, r = s.length; o < r; o++, a++) n[a] = s[o]; return n }([a], t)) }), this[i] } } } }
        var f, g = function() {
                function t(t) { var e = this;
                    void 0 === t && (t = {}), this.damping = .1, this.thumbMinSize = 20, this.renderByPixels = !0, this.alwaysShowTracks = !1, this.continuousScrolling = !0, this.delegateTo = null, this.plugins = {}, Object.keys(t).forEach((function(i) { e[i] = t[i] })) } return Object.defineProperty(t.prototype, "wheelEventTarget", { get: function() { return this.delegateTo }, set: function(t) { console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = t }, enumerable: !0, configurable: !0 }), o([h(0, 1)], t.prototype, "damping", void 0), o([h(0, 1 / 0)], t.prototype, "thumbMinSize", void 0), o([c], t.prototype, "renderByPixels", void 0), o([c], t.prototype, "alwaysShowTracks", void 0), o([c], t.prototype, "continuousScrolling", void 0), t }(),
            m = new WeakMap;

        function x() { if (void 0 !== f) return f; var t = !1; try { var e = function() {},
                    i = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                window.addEventListener("testPassive", e, i), window.removeEventListener("testPassive", e, i) } catch (t) {} return f = !!t && { passive: !1 } }

        function v(t) { var e = m.get(t) || []; return m.set(t, e),
                function(t, i, n) {
                    function a(t) { t.defaultPrevented || n(t) }
                    i.split(/\s+/g).forEach((function(i) { e.push({ elem: t, eventName: i, handler: a }), t.addEventListener(i, a, x()) })) } }

        function b(t) { var e = function(t) { return t.touches ? t.touches[t.touches.length - 1] : t }(t); return { x: e.clientX, y: e.clientY } }

        function y(t, e) { return void 0 === e && (e = []), e.some((function(e) { return t === e })) }
        var w = ["webkit", "moz", "ms", "o"],
            _ = new RegExp("^-(?!(?:" + w.join("|") + ")-)");

        function k(t, e) { e = function(t) { var e = {}; return Object.keys(t).forEach((function(i) { if (_.test(i)) { var n = t[i];
                        i = i.replace(/^-/, ""), e[i] = n, w.forEach((function(t) { e["-" + t + "-" + i] = n })) } else e[i] = t[i] })), e }(e), Object.keys(e).forEach((function(i) { var n = i.replace(/^-/, "").replace(/-([a-z])/g, (function(t, e) { return e.toUpperCase() }));
                t.style[n] = e[i] })) }
        var S, A = function() {
                function t(t) { this.velocityMultiplier = window.devicePixelRatio, this.updateTime = Date.now(), this.delta = { x: 0, y: 0 }, this.velocity = { x: 0, y: 0 }, this.lastPosition = { x: 0, y: 0 }, this.lastPosition = b(t) } return t.prototype.update = function(t) { var e = this.velocity,
                        i = this.updateTime,
                        n = this.lastPosition,
                        a = Date.now(),
                        s = b(t),
                        o = { x: -(s.x - n.x), y: -(s.y - n.y) },
                        r = a - i || 16.7,
                        l = o.x / r * 16.7,
                        h = o.y / r * 16.7;
                    e.x = l * this.velocityMultiplier, e.y = h * this.velocityMultiplier, this.delta = o, this.updateTime = a, this.lastPosition = s }, t }(),
            C = function() {
                function t() { this._touchList = {} } return Object.defineProperty(t.prototype, "_primitiveValue", { get: function() { return { x: 0, y: 0 } }, enumerable: !0, configurable: !0 }), t.prototype.isActive = function() { return void 0 !== this._activeTouchID }, t.prototype.getDelta = function() { var t = this._getActiveTracker(); return t ? s({}, t.delta) : this._primitiveValue }, t.prototype.getVelocity = function() { var t = this._getActiveTracker(); return t ? s({}, t.velocity) : this._primitiveValue }, t.prototype.getEasingDistance = function(t) { var e = 1 - t,
                        i = { x: 0, y: 0 },
                        n = this.getVelocity(); return Object.keys(n).forEach((function(t) { for (var a = Math.abs(n[t]) <= 10 ? 0 : n[t]; 0 !== a;) i[t] += a, a = a * e | 0 })), i }, t.prototype.track = function(t) { var e = this,
                        i = t.targetTouches; return Array.from(i).forEach((function(t) { e._add(t) })), this._touchList }, t.prototype.update = function(t) { var e = this,
                        i = t.touches,
                        n = t.changedTouches; return Array.from(i).forEach((function(t) { e._renew(t) })), this._setActiveID(n), this._touchList }, t.prototype.release = function(t) { var e = this;
                    delete this._activeTouchID, Array.from(t.changedTouches).forEach((function(t) { e._delete(t) })) }, t.prototype._add = function(t) { this._has(t) && this._delete(t); var e = new A(t);
                    this._touchList[t.identifier] = e }, t.prototype._renew = function(t) { this._has(t) && this._touchList[t.identifier].update(t) }, t.prototype._delete = function(t) { delete this._touchList[t.identifier] }, t.prototype._has = function(t) { return this._touchList.hasOwnProperty(t.identifier) }, t.prototype._setActiveID = function(t) { this._activeTouchID = t[t.length - 1].identifier }, t.prototype._getActiveTracker = function() { return this._touchList[this._activeTouchID] }, t }();
        ! function(t) { t.X = "x", t.Y = "y" }(S || (S = {}));
        var P = function() {
                function t(t, e) { void 0 === e && (e = 0), this._direction = t, this._minSize = e, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + t } return t.prototype.attachTo = function(t) { t.appendChild(this.element) }, t.prototype.update = function(t, e, i) { this.realSize = Math.min(e / i, 1) * e, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = t / i * (e + (this.realSize - this.displaySize)), k(this.element, this._getStyle()) }, t.prototype._getStyle = function() { switch (this._direction) {
                        case S.X:
                            return { width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)" };
                        case S.Y:
                            return { height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)" };
                        default:
                            return null } }, t }(),
            L = function() {
                function t(t, e) { void 0 === e && (e = 0), this.element = document.createElement("div"), this._isShown = !1, this.element.className = "scrollbar-track scrollbar-track-" + t, this.thumb = new P(t, e), this.thumb.attachTo(this.element) } return t.prototype.attachTo = function(t) { t.appendChild(this.element) }, t.prototype.show = function() { this._isShown || (this._isShown = !0, this.element.classList.add("show")) }, t.prototype.hide = function() { this._isShown && (this._isShown = !1, this.element.classList.remove("show")) }, t.prototype.update = function(t, e, i) { k(this.element, { display: i <= e ? "none" : "block" }), this.thumb.update(t, e, i) }, t }(),
            T = function() {
                function t(t) { this._scrollbar = t; var e = t.options.thumbMinSize;
                    this.xAxis = new L(S.X, e), this.yAxis = new L(S.Y, e), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show()) } return t.prototype.update = function() { var t = this._scrollbar,
                        e = t.size,
                        i = t.offset;
                    this.xAxis.update(i.x, e.container.width, e.content.width), this.yAxis.update(i.y, e.container.height, e.content.height) }, t.prototype.autoHideOnIdle = function() { this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide()) }, o([p(300)], t.prototype, "autoHideOnIdle", null), t }(),
            M = new WeakMap;

        function E(t) { return Math.pow(t - 1, 3) + 1 }
        var z, I, O, D = function() {
                function t(t, e) { var i = this.constructor;
                    this.scrollbar = t, this.name = i.pluginName, this.options = s(s({}, i.defaultOptions), e) } return t.prototype.onInit = function() {}, t.prototype.onDestroy = function() {}, t.prototype.onUpdate = function() {}, t.prototype.onRender = function(t) {}, t.prototype.transformDelta = function(t, e) { return s({}, t) }, t.pluginName = "", t.defaultOptions = {}, t }(),
            R = { order: new Set, constructors: {} };

        function N(t) { var e = v(t),
                i = t.containerEl;
            e(i, "keydown", (function(e) { var n = document.activeElement; if ((n === i || i.contains(n)) && ! function(t) { return !("INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable || t.disabled) }(n)) { var a = function(t, e) { var i = t.size,
                            n = t.limit,
                            a = t.offset; switch (e) {
                            case z.TAB:
                                return function(t) { requestAnimationFrame((function() { t.scrollIntoView(document.activeElement, { offsetTop: t.size.container.height / 2, offsetLeft: t.size.container.width / 2, onlyScrollIfNeeded: !0 }) })) }(t);
                            case z.SPACE:
                                return [0, 200];
                            case z.PAGE_UP:
                                return [0, 40 - i.container.height];
                            case z.PAGE_DOWN:
                                return [0, i.container.height - 40];
                            case z.END:
                                return [0, n.y - a.y];
                            case z.HOME:
                                return [0, -a.y];
                            case z.LEFT:
                                return [-40, 0];
                            case z.UP:
                                return [0, -40];
                            case z.RIGHT:
                                return [40, 0];
                            case z.DOWN:
                                return [0, 40];
                            default:
                                return null } }(t, e.keyCode || e.which); if (a) { var s = a[0],
                            o = a[1];
                        t.addTransformableMomentum(s, o, e, (function(i) { i ? e.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus()) })) } } })) }

        function F(t) { var e, i, n, a, s, o = v(t),
                r = t.containerEl,
                h = t.track,
                c = h.xAxis,
                d = h.yAxis;

            function u(e, i) { var n = t.size,
                    a = t.limit,
                    s = t.offset; if (e === I.X) { var o = n.container.width + (c.thumb.realSize - c.thumb.displaySize); return l()(i / o * n.content.width, 0, a.x) - s.x } if (e === I.Y) { var r = n.container.height + (d.thumb.realSize - d.thumb.displaySize); return l()(i / r * n.content.height, 0, a.y) - s.y } return 0 }

            function p(t) { return y(t, [c.element, c.thumb.element]) ? I.X : y(t, [d.element, d.thumb.element]) ? I.Y : void 0 }
            o(r, "click", (function(e) { if (!i && y(e.target, [c.element, d.element])) { var n = e.target,
                        a = p(n),
                        s = n.getBoundingClientRect(),
                        o = b(e); if (a === I.X) { var r = o.x - s.left - c.thumb.displaySize / 2;
                        t.setMomentum(u(a, r), 0) }
                    a === I.Y && (r = o.y - s.top - d.thumb.displaySize / 2, t.setMomentum(0, u(a, r))) } })), o(r, "mousedown", (function(i) { if (y(i.target, [c.thumb.element, d.thumb.element])) { e = !0; var o = i.target,
                        l = b(i),
                        h = o.getBoundingClientRect();
                    a = p(o), n = { x: l.x - h.left, y: l.y - h.top }, s = r.getBoundingClientRect(), k(t.containerEl, { "-user-select": "none" }) } })), o(window, "mousemove", (function(o) { if (e) { i = !0; var r = b(o); if (a === I.X) { var l = r.x - n.x - s.left;
                        t.setMomentum(u(a, l), 0) }
                    a === I.Y && (l = r.y - n.y - s.top, t.setMomentum(0, u(a, l))) } })), o(window, "mouseup blur", (function() { e = i = !1, k(t.containerEl, { "-user-select": "" }) })) }

        function X(t) { v(t)(window, "resize", u()(t.update.bind(t), 300)) }

        function H(t) { var e, i = v(t),
                n = t.containerEl,
                a = t.contentEl,
                s = !1,
                o = !1;
            i(window, "mousemove", (function(i) { s && (cancelAnimationFrame(e), function i(n) { var a = n.x,
                        s = n.y; if (a || s) { var o = t.offset,
                            r = t.limit;
                        t.setMomentum(l()(o.x + a, 0, r.x) - o.x, l()(o.y + s, 0, r.y) - o.y), e = requestAnimationFrame((function() { i({ x: a, y: s }) })) } }(function(t, e) { var i = t.bounding,
                        n = i.top,
                        a = i.right,
                        s = i.bottom,
                        o = i.left,
                        r = b(e),
                        l = r.x,
                        h = r.y,
                        c = { x: 0, y: 0 }; return 0 === l && 0 === h || (l > a - 20 ? c.x = l - a + 20 : l < o + 20 && (c.x = l - o - 20), h > s - 20 ? c.y = h - s + 20 : h < n + 20 && (c.y = h - n - 20), c.x *= 2, c.y *= 2), c }(t, i))) })), i(a, "contextmenu", (function() { o = !0, cancelAnimationFrame(e), s = !1 })), i(a, "mousedown", (function() { o = !1 })), i(a, "selectstart", (function() { o || (cancelAnimationFrame(e), s = !0) })), i(window, "mouseup blur", (function() { cancelAnimationFrame(e), s = !1, o = !1 })), i(n, "scroll", (function(t) { t.preventDefault(), n.scrollTop = n.scrollLeft = 0 })) }

        function B(t) { var e, i = t.options.delegateTo || t.containerEl,
                n = new C,
                a = v(t),
                s = 0;
            a(i, "touchstart", (function(i) { n.track(i), t.setMomentum(0, 0), 0 === s && (e = t.options.damping, t.options.damping = Math.max(e, .5)), s++ })), a(i, "touchmove", (function(e) { if (!O || O === t) { n.update(e); var i = n.getDelta(),
                        a = i.x,
                        s = i.y;
                    t.addTransformableMomentum(a, s, e, (function(i) { i && e.cancelable && (e.preventDefault(), O = t) })) } })), a(i, "touchcancel touchend", (function(i) { var a = n.getEasingDistance(e);
                t.addTransformableMomentum(a.x, a.y, i), 0 == --s && (t.options.damping = e), n.release(i), O = null })) }

        function Y(t) { v(t)(t.options.delegateTo || t.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", (function(e) { var i = function(t) { if ("deltaX" in t) { var e = V(t.deltaMode); return { x: t.deltaX / W.STANDARD * e, y: t.deltaY / W.STANDARD * e } } return "wheelDeltaX" in t ? { x: t.wheelDeltaX / W.OTHERS, y: t.wheelDeltaY / W.OTHERS } : { x: 0, y: t.wheelDelta / W.OTHERS } }(e),
                    n = i.x,
                    a = i.y;
                t.addTransformableMomentum(n, a, e, (function(t) { t && e.preventDefault() })) })) }! function(t) { t[t.TAB = 9] = "TAB", t[t.SPACE = 32] = "SPACE", t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN" }(z || (z = {})),
        function(t) { t[t.X = 0] = "X", t[t.Y = 1] = "Y" }(I || (I = {}));
        var W = { STANDARD: 1, OTHERS: -3 },
            j = [1, 28, 500],
            V = function(t) { return j[t] || j[0] },
            G = new Map,
            Z = function() {
                function t(t, e) { var i = this;
                    this.offset = { x: 0, y: 0 }, this.limit = { x: 1 / 0, y: 1 / 0 }, this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }, this._plugins = [], this._momentum = { x: 0, y: 0 }, this._listeners = new Set, this.containerEl = t; var n = this.contentEl = document.createElement("div");
                    this.options = new g(e), t.setAttribute("data-scrollbar", "true"), t.setAttribute("tabindex", "-1"), k(t, { overflow: "hidden", outline: "none" }), window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"), n.className = "scroll-content", Array.from(t.childNodes).forEach((function(t) { n.appendChild(t) })), t.appendChild(n), this.track = new T(this), this.size = this.getSize(), this._plugins = function(t, e) { return Array.from(R.order).filter((function(t) { return !1 !== e[t] })).map((function(i) { var n = new(0, R.constructors[i])(t, e[i]); return e[i] = n.options, n })) }(this, this.options.plugins); var a = t.scrollLeft,
                        s = t.scrollTop;
                    t.scrollLeft = t.scrollTop = 0, this.setPosition(a, s, { withoutCallbacks: !0 }); var o = window.ResizeObserver; "function" == typeof o && (this._observer = new o((function() { i.update() })), this._observer.observe(n)), G.set(t, this), requestAnimationFrame((function() { i._init() })) } return Object.defineProperty(t.prototype, "parent", { get: function() { for (var t = this.containerEl.parentElement; t;) { var e = G.get(t); if (e) return e;
                            t = t.parentElement } return null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "scrollTop", { get: function() { return this.offset.y }, set: function(t) { this.setPosition(this.scrollLeft, t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "scrollLeft", { get: function() { return this.offset.x }, set: function(t) { this.setPosition(t, this.scrollTop) }, enumerable: !0, configurable: !0 }), t.prototype.getSize = function() { return function(t) { var e = t.containerEl,
                            i = t.contentEl,
                            n = getComputedStyle(e),
                            a = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"].map((function(t) { return n[t] ? parseFloat(n[t]) : 0 })),
                            s = a[0] + a[1],
                            o = a[2] + a[3]; return { container: { width: e.clientWidth, height: e.clientHeight }, content: { width: i.offsetWidth - i.clientWidth + i.scrollWidth + o, height: i.offsetHeight - i.clientHeight + i.scrollHeight + s } } }(this) }, t.prototype.update = function() {! function(t) { var e = t.getSize(),
                            i = { x: Math.max(e.content.width - e.container.width, 0), y: Math.max(e.content.height - e.container.height, 0) },
                            n = t.containerEl.getBoundingClientRect(),
                            a = { top: Math.max(n.top, 0), right: Math.min(n.right, window.innerWidth), bottom: Math.min(n.bottom, window.innerHeight), left: Math.max(n.left, 0) };
                        t.size = e, t.limit = i, t.bounding = a, t.track.update(), t.setPosition() }(this), this._plugins.forEach((function(t) { t.onUpdate() })) }, t.prototype.isVisible = function(t) { return function(t, e) { var i = t.bounding,
                            n = e.getBoundingClientRect(),
                            a = Math.max(i.top, n.top),
                            s = Math.max(i.left, n.left),
                            o = Math.min(i.right, n.right); return a < Math.min(i.bottom, n.bottom) && s < o }(this, t) }, t.prototype.setPosition = function(t, e, i) { var n = this;
                    void 0 === t && (t = this.offset.x), void 0 === e && (e = this.offset.y), void 0 === i && (i = {}); var a = function(t, e, i) { var n = t.options,
                            a = t.offset,
                            o = t.limit,
                            r = t.track,
                            h = t.contentEl; return n.renderByPixels && (e = Math.round(e), i = Math.round(i)), e = l()(e, 0, o.x), i = l()(i, 0, o.y), e !== a.x && r.xAxis.show(), i !== a.y && r.yAxis.show(), n.alwaysShowTracks || r.autoHideOnIdle(), e === a.x && i === a.y ? null : (a.x = e, a.y = i, k(h, { "-transform": "translate3d(" + -e + "px, " + -i + "px, 0)" }), r.update(), { offset: s({}, a), limit: s({}, o) }) }(this, t, e);
                    a && !i.withoutCallbacks && this._listeners.forEach((function(t) { t.call(n, a) })) }, t.prototype.scrollTo = function(t, e, i, n) { void 0 === t && (t = this.offset.x), void 0 === e && (e = this.offset.y), void 0 === i && (i = 0), void 0 === n && (n = {}),
                        function(t, e, i, n, a) { void 0 === n && (n = 0); var s = void 0 === a ? {} : a,
                                o = s.easing,
                                r = void 0 === o ? E : o,
                                h = s.callback,
                                c = t.options,
                                d = t.offset,
                                u = t.limit;
                            c.renderByPixels && (e = Math.round(e), i = Math.round(i)); var p = d.x,
                                f = d.y,
                                g = l()(e, 0, u.x) - p,
                                m = l()(i, 0, u.y) - f,
                                x = Date.now();
                            cancelAnimationFrame(M.get(t)),
                                function e() { var i = Date.now() - x,
                                        a = n ? r(Math.min(i / n, 1)) : 1; if (t.setPosition(p + g * a, f + m * a), i >= n) "function" == typeof h && h.call(t);
                                    else { var s = requestAnimationFrame(e);
                                        M.set(t, s) } }() }(this, t, e, i, n) }, t.prototype.scrollIntoView = function(t, e) { void 0 === e && (e = {}),
                        function(t, e, i) { var n = void 0 === i ? {} : i,
                                a = n.alignToTop,
                                s = void 0 === a || a,
                                o = n.onlyScrollIfNeeded,
                                r = void 0 !== o && o,
                                h = n.offsetTop,
                                c = void 0 === h ? 0 : h,
                                d = n.offsetLeft,
                                u = void 0 === d ? 0 : d,
                                p = n.offsetBottom,
                                f = void 0 === p ? 0 : p,
                                g = t.containerEl,
                                m = t.bounding,
                                x = t.offset,
                                v = t.limit; if (e && g.contains(e)) { var b = e.getBoundingClientRect(); if (!r || !t.isVisible(e)) { var y = s ? b.top - m.top - c : b.bottom - m.bottom + f;
                                    t.setMomentum(b.left - m.left - u, l()(y, -x.y, v.y - x.y)) } } }(this, t, e) }, t.prototype.addListener = function(t) { if ("function" != typeof t) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                    this._listeners.add(t) }, t.prototype.removeListener = function(t) { this._listeners.delete(t) }, t.prototype.addTransformableMomentum = function(t, e, i, n) { this._updateDebounced(); var a = this._plugins.reduce((function(t, e) { return e.transformDelta(t, i) || t }), { x: t, y: e }),
                        s = !this._shouldPropagateMomentum(a.x, a.y);
                    s && this.addMomentum(a.x, a.y), n && n.call(this, s) }, t.prototype.addMomentum = function(t, e) { this.setMomentum(this._momentum.x + t, this._momentum.y + e) }, t.prototype.setMomentum = function(t, e) { 0 === this.limit.x && (t = 0), 0 === this.limit.y && (e = 0), this.options.renderByPixels && (t = Math.round(t), e = Math.round(e)), this._momentum.x = t, this._momentum.y = e }, t.prototype.updatePluginOptions = function(t, e) { this._plugins.forEach((function(i) { i.name === t && Object.assign(i.options, e) })) }, t.prototype.destroy = function() { var t = this.containerEl,
                        e = this.contentEl;! function(t) { var e = m.get(t);
                        e && (e.forEach((function(t) { var e = t.elem,
                                i = t.eventName,
                                n = t.handler;
                            e.removeEventListener(i, n, x()) })), m.delete(t)) }(this), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), G.delete(this.containerEl); for (var i = Array.from(e.childNodes); t.firstChild;) t.removeChild(t.firstChild);
                    i.forEach((function(e) { t.appendChild(e) })), k(t, { overflow: "" }), t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, this._plugins.forEach((function(t) { t.onDestroy() })), this._plugins.length = 0 }, t.prototype._init = function() { var t = this;
                    this.update(), Object.keys(n).forEach((function(e) { n[e](t) })), this._plugins.forEach((function(t) { t.onInit() })), this._render() }, t.prototype._updateDebounced = function() { this.update() }, t.prototype._shouldPropagateMomentum = function(t, e) { void 0 === t && (t = 0), void 0 === e && (e = 0); var i = this.options,
                        n = this.offset,
                        a = this.limit; if (!i.continuousScrolling) return !1;
                    0 === a.x && 0 === a.y && this._updateDebounced(); var s = l()(t + n.x, 0, a.x),
                        o = l()(e + n.y, 0, a.y),
                        r = !0; return (r = (r = r && s === n.x) && o === n.y) && (n.x === a.x || 0 === n.x || n.y === a.y || 0 === n.y) }, t.prototype._render = function() { var t = this._momentum; if (t.x || t.y) { var e = this._nextTick("x"),
                            i = this._nextTick("y");
                        t.x = e.momentum, t.y = i.momentum, this.setPosition(e.position, i.position) } var n = s({}, this._momentum);
                    this._plugins.forEach((function(t) { t.onRender(n) })), this._renderID = requestAnimationFrame(this._render.bind(this)) }, t.prototype._nextTick = function(t) { var e = this.options,
                        i = this.offset,
                        n = this._momentum,
                        a = i[t],
                        s = n[t]; if (Math.abs(s) <= .1) return { momentum: 0, position: a + s }; var o = s * (1 - e.damping); return e.renderByPixels && (o |= 0), { momentum: o, position: a + s - o } }, o([p(100, { leading: !0 })], t.prototype, "_updateDebounced", null), t }(),
            U = "smooth-scrollbar-style",
            q = !1;

        function $() { if (!q && "undefined" != typeof window) { var t = document.createElement("style");
                t.id = U, t.textContent = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n", document.head && document.head.appendChild(t), q = !0 } }
        i.d(e, "ScrollbarPlugin", (function() { return D }));
        var K = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return function(t, e) {
                function i() { this.constructor = t }
                a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i) }(e, t), e.init = function(t, e) { if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t); return $(), G.has(t) ? G.get(t) : new Z(t, e) }, e.initAll = function(t) { return Array.from(document.querySelectorAll("[data-scrollbar]"), (function(i) { return e.init(i, t) })) }, e.has = function(t) { return G.has(t) }, e.get = function(t) { return G.get(t) }, e.getAll = function() { return Array.from(G.values()) }, e.destroy = function(t) { var e = G.get(t);
                e && e.destroy() }, e.destroyAll = function() { G.forEach((function(t) { t.destroy() })) }, e.use = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    t.forEach((function(t) { var e = t.pluginName; if (!e) throw new TypeError("plugin name is required");
                        R.order.add(e), R.constructors[e] = t })) }.apply(void 0, t) }, e.attachStyle = function() { return $() }, e.detachStyle = function() { return function() { if (q && "undefined" != typeof window) { var t = document.getElementById(U);
                        t && t.parentNode && (t.parentNode.removeChild(t), q = !1) } }() }, e.version = "8.8.1", e.ScrollbarPlugin = D, e }(Z);
        e.default = K
    }]).default
})),
function(t, e) { "function" == typeof define && define.amd ? define([], e) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.CircleProgress = e() }("undefined" != typeof self ? self : void 0, (function() {
    function t(e, i, n, a, s) { var o, r = "string" == typeof e ? t.easings[e] : e;
        requestAnimationFrame((function t(e) { e -= o = o || e, e = Math.min(e, a); var l = r(e, i, n, a);
            s(l), e < a ? requestAnimationFrame(t) : s(i + n) })) }! function() { try { if ("undefined" == typeof SVGElement || Boolean(SVGElement.prototype.innerHTML)) return } catch (t) { return }

        function t(e) { switch (e.nodeType) {
                case 1:
                    return function(e) { var i = ""; return i += "<" + e.tagName, e.hasAttributes() && [].forEach.call(e.attributes, (function(t) { i += " " + t.name + '="' + t.value + '"' })), i += ">", e.hasChildNodes() && [].forEach.call(e.childNodes, (function(e) { i += t(e) })), i += "</" + e.tagName + ">" }(e);
                case 3:
                    return e.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                case 8:
                    return "\x3c!--" + e.nodeValue + "--\x3e" } }
        Object.defineProperty(SVGElement.prototype, "innerHTML", { get: function() { var e = ""; return [].forEach.call(this.childNodes, (function(i) { e += t(i) })), e }, set: function(t) { for (; this.firstChild;) this.removeChild(this.firstChild); try { var e = new DOMParser;
                    e.async = !1; var i = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" + t + "</svg>",
                        n = e.parseFromString(i, "text/xml").documentElement;
                    [].forEach.call(n.childNodes, function(t) { this.appendChild(this.ownerDocument.importNode(t, !0)) }.bind(this)) } catch (t) { throw new Error("Error parsing markup string") } } }), Object.defineProperty(SVGElement.prototype, "innerSVG", { get: function() { return this.innerHTML }, set: function(t) { this.innerHTML = t } }) }(); var e, i, n, a, s, o, r = (e = function(t, e, n, a) { var s, o; if (a = a || document, o = Object.create(i), "string" == typeof t && (t = a.querySelector(t)), t) return (s = a.createElementNS("http://www.w3.org/2000/svg", "svg")).setAttribute("version", "1.1"), e && s.setAttribute("width", e), n && s.setAttribute("height", n), e && n && s.setAttribute("viewBox", "0 0 " + e + " " + n), t.appendChild(s), o.svg = s, o }, i = { element: function(t, e, i, a) { var s = n(this, t, e, a); return i && (s.el.innerHTML = i), s } }, n = function(t, e, i, n, s) { var o; return s = s || document, (o = Object.create(a)).el = s.createElementNS("http://www.w3.org/2000/svg", e), o.attr(i), (n ? n.el || n : t.svg).appendChild(o.el), o }, a = { attr: function(t, e) { if (void 0 === t) return this; if ("object" !== _typeof(t)) return void 0 === e ? this.el.getAttributeNS(null, t) : (this.el.setAttribute(t, e), this); for (var i in t) this.attr(i, t[i]); return this }, content: function(t) { return this.el.innerHTML = t, this } }, e); return t.easings = { linear: function(t, e, i, n) { return i * t / n + e }, easeInQuad: function(t, e, i, n) { return i * (t /= n) * t + e }, easeOutQuad: function(t, e, i, n) { return -i * (t /= n) * (t - 2) + e }, easeInOutQuad: function(t, e, i, n) { return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e }, easeInCubic: function(t, e, i, n) { return i * (t /= n) * t * t + e }, easeOutCubic: function(t, e, i, n) { return t /= n, i * (--t * t * t + 1) + e }, easeInOutCubic: function(t, e, i, n) { return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e }, easeInQuart: function(t, e, i, n) { return i * (t /= n) * t * t * t + e }, easeOutQuart: function(t, e, i, n) { return t /= n, -i * (--t * t * t * t - 1) + e }, easeInOutQuart: function(t, e, i, n) { return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e }, easeInQuint: function(t, e, i, n) { return i * (t /= n) * t * t * t * t + e }, easeOutQuint: function(t, e, i, n) { return t /= n, i * (--t * t * t * t * t + 1) + e }, easeInOutQuint: function(t, e, i, n) { return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e }, easeInSine: function(t, e, i, n) { return -i * Math.cos(t / n * (Math.PI / 2)) + i + e }, easeOutSine: function(t, e, i, n) { return i * Math.sin(t / n * (Math.PI / 2)) + e }, easeInOutSine: function(t, e, i, n) { return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e }, easeInExpo: function(t, e, i, n) { return i * Math.pow(2, 10 * (t / n - 1)) + e }, easeOutExpo: function(t, e, i, n) { return i * (1 - Math.pow(2, -10 * t / n)) + e }, easeInOutExpo: function(t, e, i, n) { return (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e) }, easeInCirc: function(t, e, i, n) { return t /= n, -i * (Math.sqrt(1 - t * t) - 1) + e }, easeOutCirc: function(t, e, i, n) { return t /= n, t--, i * Math.sqrt(1 - t * t) + e }, easeInOutCirc: function(t, e, i, n) { return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : (t -= 2, i / 2 * (Math.sqrt(1 - t * t) + 1) + e) } }, s = { polarToCartesian: function(t, e) { return { x: t * Math.cos(e * Math.PI / 180), y: t * Math.sin(e * Math.PI / 180) } } }, (o = function() {
        function e(t) { var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document; if (_classCallCheck(this, e), "string" == typeof t && (t = a.querySelector(t)), !t) throw new Error("CircleProgress: you must pass the container element as the first argument"); if (t.circleProgress) return t.circleProgress;
            (t.circleProgress = this).doc = a, t.setAttribute("role", "progressbar"), this.el = t, n = _objectSpread(_objectSpread({}, e.defaults), n), Object.defineProperty(this, "_attrs", { value: {}, enumerable: !1 }), i = "valueOnCircle" === n.textFormat ? 16 : 8, this.graph = { paper: r(t, 100, 100), angle: 0 }, this.graph.paper.svg.setAttribute("class", "circle-progress"), this.graph.circle = this.graph.paper.element("circle").attr({ class: "circle-progress-circle", cx: 50, cy: 50, r: 50 - i / 2, fill: "none", stroke: "#ddd", "stroke-width": i }), this.graph.sector = this.graph.paper.element("path").attr({ d: e._makeSectorPath(50, 50, 50 - i / 2, 0, 0), class: "circle-progress-value", fill: "none", stroke: "#00E699", "stroke-width": i }), this.graph.text = this.graph.paper.element("text", { class: "circle-progress-text", x: 50, y: 50, font: "16px Arial, sans-serif", "text-anchor": "middle", fill: "#999" }), this._initText(), this.attr(["indeterminateText", "textFormat", "startAngle", "clockwise", "animation", "animationDuration", "constrain", "min", "max", "value"].filter((function(t) { return t in n })).map((function(t) { return [t, n[t]] }))) } return _createClass(e, [{ key: "value", get: function() { return this._attrs.value }, set: function(t) { this.attr("value", t) } }, { key: "min", get: function() { return this._attrs.min }, set: function(t) { this.attr("min", t) } }, { key: "max", get: function() { return this._attrs.max }, set: function(t) { this.attr("max", t) } }, { key: "startAngle", get: function() { return this._attrs.startAngle }, set: function(t) { this.attr("startAngle", t) } }, { key: "clockwise", get: function() { return this._attrs.clockwise }, set: function(t) { this.attr("clockwise", t) } }, { key: "constrain", get: function() { return this._attrs.constrain }, set: function(t) { this.attr("constrain", t) } }, { key: "indeterminateText", get: function() { return this._attrs.indeterminateText }, set: function(t) { this.attr("indeterminateText", t) } }, { key: "textFormat", get: function() { return this._attrs.textFormat }, set: function(t) { this.attr("textFormat", t) } }, { key: "animation", get: function() { return this._attrs.animation }, set: function(t) { this.attr("animation", t) } }, { key: "animationDuration", get: function() { return this._attrs.animationDuration }, set: function(t) { this.attr("animationDuration", t) } }]), _createClass(e, [{ key: "attr", value: function(t, e) { var i = this; if ("string" == typeof t) return 1 === arguments.length ? this._attrs[t] : (this._set(arguments[0], e), this._updateGraph(), this); if ("object" !== _typeof(t)) throw new TypeError('Wrong argument passed to attr. Expected object, got "'.concat(_typeof(t), '"')); return Array.isArray(t) || (t = Object.keys(t).map((function(e) { return [e, t[e]] }))), t.forEach((function(t) { return i._set(t[0], t[1]) })), this._updateGraph(), this } }, { key: "_set", value: function(t, e) { var i, n = { value: "aria-valuenow", min: "aria-valuemin", max: "aria-valuemax" }; if (void 0 === (e = this._formatValue(t, e))) throw new TypeError("Failed to set the ".concat(t, " property on CircleProgress: The provided value is non-finite."));
                this._attrs[t] !== e && ("min" === t && e >= this.max || "max" === t && e <= this.min || ("value" === t && void 0 !== e && this.constrain && (null != this.min && e < this.min && (e = this.min), null != this.max && e > this.max && (e = this.max)), this._attrs[t] = e, t in n && (void 0 !== e ? this.el.setAttribute(n[t], e) : this.el.removeAttribute(n[t])), -1 !== ["min", "max", "constrain"].indexOf(t) && (this.value > this.max || this.value < this.min) && (this.value = Math.min(this.max, Math.max(this.min, this.value))), "textFormat" === t && (this._initText(), i = "valueOnCircle" === e ? 16 : 8, this.graph.sector.attr("stroke-width", i), this.graph.circle.attr("stroke-width", i)))) } }, { key: "_formatValue", value: function(e, i) { switch (e) {
                    case "value":
                    case "min":
                    case "max":
                        i = parseFloat(i), isFinite(i) || (i = void 0); break;
                    case "startAngle":
                        i = parseFloat(i), i = isFinite(i) ? Math.max(0, Math.min(360, i)) : void 0; break;
                    case "clockwise":
                    case "constrain":
                        i = !!i; break;
                    case "indeterminateText":
                        i = "" + i; break;
                    case "textFormat":
                        if ("function" != typeof i && -1 === ["valueOnCircle", "horizontal", "vertical", "percent", "value", "none"].indexOf(i)) throw new Error('Failed to set the "textFormat" property on CircleProgress: the provided value "'.concat(i, '" is not a legal textFormat identifier.')); break;
                    case "animation":
                        if ("string" != typeof i && "function" != typeof i) throw new TypeError('Failed to set "animation" property on CircleProgress: the value must be either string or function, '.concat(_typeof(i), " passed.")); if ("string" == typeof i && "none" !== i && !t.easings[i]) throw new Error('Failed to set "animation" on CircleProgress: the provided value '.concat(i, " is not a legal easing function name.")) } return i } }, { key: "_valToAngle", value: function() { var t; return this._isIndeterminate() ? 0 : 0 === this.max ? this.value ? 360 : 0 : (t = (this.value - this.min) / this.max * 360, Math.min(360, Math.max(0, t))) } }, { key: "_isIndeterminate", value: function() { return !("number" == typeof this.value && "number" == typeof this.max && "number" == typeof this.min) } }, { key: "_positionValueText", value: function(t) { var e = s.polarToCartesian(this._getRadius(), t);
                this.graph.textVal.attr({ x: 50 + e.x, y: 50 + e.y }) } }, { key: "_initText", value: function() { switch (this.graph.text.content(""), this.textFormat) {
                    case "valueOnCircle":
                        this.graph.textVal = this.graph.paper.element("tspan", { x: 0, y: 0, class: "circle-progress-text-value", "font-size": "12", fill: "valueOnCircle" === this.textFormat ? "#fff" : "#888" }, "", this.graph.text), this.graph.textMax = this.graph.paper.element("tspan", { x: 50, y: 50, class: "circle-progress-text-max", "font-size": "22", "font-weight": "bold", fill: "#ddd" }, "", this.graph.text), this.graph.text.el.hasAttribute("dominant-baseline") || this.graph.textMax.attr("dy", "0.4em"); break;
                    case "horizontal":
                        this.graph.textVal = this.graph.paper.element("tspan", { class: "circle-progress-text-value" }, "", this.graph.text), this.graph.textSeparator = this.graph.paper.element("tspan", { class: "circle-progress-text-separator" }, "/", this.graph.text), this.graph.textMax = this.graph.paper.element("tspan", { class: "circle-progress-text-max" }, "", this.graph.text); break;
                    case "vertical":
                        this.graph.text.el.hasAttribute("dominant-baseline") && this.graph.text.attr("dominant-baseline", "text-after-edge"), this.graph.textVal = this.graph.paper.element("tspan", { class: "circle-progress-text-value", x: 50, dy: "-0.2em" }, "", this.graph.text), this.graph.textSeparator = this.graph.paper.element("tspan", { class: "circle-progress-text-separator", x: 50, dy: "0.1em", "font-family": "Arial, sans-serif" }, "___", this.graph.text), this.graph.textMax = this.graph.paper.element("tspan", { class: "circle-progress-text-max", x: 50, dy: "1.2em" }, "", this.graph.text) } "vertical" !== this.textFormat && (this.graph.text.el.hasAttribute("dominant-baseline") ? this.graph.text.attr("dominant-baseline", "central") : this.graph.text.attr("dy", "0.4em")) } }, { key: "_updateGraph", value: function() { var i, n, a, s = this,
                    o = this.startAngle - 90;
                this._isIndeterminate() ? "valueOnCircle" === this.textFormat && this._positionValueText(o) : (i = this._valToAngle(this.value), n = this._getRadius(), a = this.clockwise, this.graph.circle.attr("r", n), "none" !== this.animation && i !== this.graph.angle ? t(this.animation, this.graph.angle, i - this.graph.angle, this.animationDuration, (function(t) { s.graph.sector.attr("d", e._makeSectorPath(50, 50, n, o, t, a)) })) : this.graph.sector.attr("d", e._makeSectorPath(50, 50, n, o, i, a)), this.graph.angle = i, "valueOnCircle" === this.textFormat && this._positionValueText((2 * o + i) / 2)), "function" == typeof this.textFormat ? this.graph.text.content(this.textFormat(this.value, this.max)) : "value" === this.textFormat ? this.graph.text.el.textContent = void 0 !== this.value ? this.value : this.indeterminateText : "percent" === this.textFormat ? this.graph.text.el.textContent = (void 0 !== this.value && null != this.max ? Math.round(this.value / this.max * 100) : this.indeterminateText) + "%" : "none" === this.textFormat ? this.graph.text.el.textContent = "" : (this.graph.textVal.el.textContent = void 0 !== this.value ? this.value : this.indeterminateText, this.graph.textMax.el.textContent = void 0 !== this.max ? this.max : this.indeterminateText) } }, { key: "_getRadius", value: function() { return 50 - Math.max(parseFloat(this.doc.defaultView.getComputedStyle(this.graph.circle.el, null)["stroke-width"]), parseFloat(this.doc.defaultView.getComputedStyle(this.graph.sector.el, null)["stroke-width"])) / 2 } }], [{ key: "_makeSectorPath", value: function(t, e, i, n, a, o) { 0 < a && a < .3 ? a = 0 : 359.999 < a && (a = 359.999); var r = n + a * (2 * (o = !!o) - 1),
                    l = s.polarToCartesian(i, n),
                    h = s.polarToCartesian(i, r),
                    c = t + l.x,
                    d = t + h.x; return ["M", c, e + l.y, "A", i, i, 0, +(180 < a), +o, d, e + h.y].join(" ") } }]), e }()).defaults = { startAngle: 0, min: 0, max: 1, constrain: !0, indeterminateText: "?", clockwise: !0, textFormat: "horizontal", animation: "easeInOutCubic", animationDuration: 600 }, o })),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e() }(this, (function() {
    "use strict";

    function t(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, n) } return i }

    function e(e) { for (var i = 1; i < arguments.length; i++) { var n = null != arguments[i] ? arguments[i] : {};
            i % 2 ? t(Object(n), !0).forEach((function(t) { o(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

    function i(t) { return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i(t) }

    function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function a(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function s(t, e, i) { return e && a(t.prototype, e), i && a(t, i), t }

    function o(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t }

    function r(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && h(t, e) }

    function l(t) { return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, l(t) }

    function h(t, e) { return h = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, h(t, e) }

    function c(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) }

    function d(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var i, n = l(t); if (e) { var a = l(this).constructor;
                i = Reflect.construct(n, arguments, a) } else i = n.apply(this, arguments); return c(this, i) } }

    function u(t) { return function(t) { if (Array.isArray(t)) return f(t) }(t) || function(t) { if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t) }(t) || p(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function p(t, e) { if (t) { if ("string" == typeof t) return f(t, e); var i = Object.prototype.toString.call(t).slice(8, -1); return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? f(t, e) : void 0 } }

    function f(t, e) {
        (null == e || e > t.length) && (e = t.length); for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]; return n }
    var g = function() {
            function t() { n(this, t) } return s(t, [{ key: "shadeRGBColor", value: function(t, e) { var i = e.split(","),
                        n = t < 0 ? 0 : 255,
                        a = t < 0 ? -1 * t : t,
                        s = parseInt(i[0].slice(4), 10),
                        o = parseInt(i[1], 10),
                        r = parseInt(i[2], 10); return "rgb(" + (Math.round((n - s) * a) + s) + "," + (Math.round((n - o) * a) + o) + "," + (Math.round((n - r) * a) + r) + ")" } }, { key: "shadeHexColor", value: function(t, e) { var i = parseInt(e.slice(1), 16),
                        n = t < 0 ? 0 : 255,
                        a = t < 0 ? -1 * t : t,
                        s = i >> 16,
                        o = i >> 8 & 255,
                        r = 255 & i; return "#" + (16777216 + 65536 * (Math.round((n - s) * a) + s) + 256 * (Math.round((n - o) * a) + o) + (Math.round((n - r) * a) + r)).toString(16).slice(1) } }, { key: "shadeColor", value: function(e, i) { return t.isColorHex(i) ? this.shadeHexColor(e, i) : this.shadeRGBColor(e, i) } }], [{ key: "bind", value: function(t, e) { return function() { return t.apply(e, arguments) } } }, { key: "isObject", value: function(t) { return t && "object" === i(t) && !Array.isArray(t) && null != t } }, { key: "is", value: function(t, e) { return Object.prototype.toString.call(e) === "[object " + t + "]" } }, { key: "listToArray", value: function(t) { var e, i = []; for (e = 0; e < t.length; e++) i[e] = t[e]; return i } }, { key: "extend", value: function(t, e) { var i = this; "function" != typeof Object.assign && (Object.assign = function(t) { if (null == t) throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), i = 1; i < arguments.length; i++) { var n = arguments[i]; if (null != n)
                                for (var a in n) n.hasOwnProperty(a) && (e[a] = n[a]) } return e }); var n = Object.assign({}, t); return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach((function(a) { i.isObject(e[a]) && a in t ? n[a] = i.extend(t[a], e[a]) : Object.assign(n, o({}, a, e[a])) })), n } }, { key: "extendArray", value: function(e, i) { var n = []; return e.map((function(e) { n.push(t.extend(i, e)) })), n } }, { key: "monthMod", value: function(t) { return t % 12 } }, { key: "clone", value: function(e) { if (t.is("Array", e)) { for (var n = [], a = 0; a < e.length; a++) n[a] = this.clone(e[a]); return n } if (t.is("Null", e)) return null; if (t.is("Date", e)) return e; if ("object" === i(e)) { var s = {}; for (var o in e) e.hasOwnProperty(o) && (s[o] = this.clone(e[o])); return s } return e } }, { key: "log10", value: function(t) { return Math.log(t) / Math.LN10 } }, { key: "roundToBase10", value: function(t) { return Math.pow(10, Math.floor(Math.log10(t))) } }, { key: "roundToBase", value: function(t, e) { return Math.pow(e, Math.floor(Math.log(t) / Math.log(e))) } }, { key: "parseNumber", value: function(t) { return null === t ? t : parseFloat(t) } }, { key: "randomId", value: function() { return (Math.random() + 1).toString(36).substring(4) } }, { key: "noExponents", value: function(t) { var e = String(t).split(/[eE]/); if (1 === e.length) return e[0]; var i = "",
                        n = t < 0 ? "-" : "",
                        a = e[0].replace(".", ""),
                        s = Number(e[1]) + 1; if (s < 0) { for (i = n + "0."; s++;) i += "0"; return i + a.replace(/^-/, "") } for (s -= a.length; s--;) i += "0"; return a + i } }, { key: "getDimensions", value: function(t) { var e = getComputedStyle(t, null),
                        i = t.clientHeight,
                        n = t.clientWidth; return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [n -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i] } }, { key: "getBoundingClientRect", value: function(t) { var e = t.getBoundingClientRect(); return { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: t.clientWidth, height: t.clientHeight, x: e.left, y: e.top } } }, { key: "getLargestStringFromArr", value: function(t) { return t.reduce((function(t, e) { return Array.isArray(e) && (e = e.reduce((function(t, e) { return t.length > e.length ? t : e }))), t.length > e.length ? t : e }), 0) } }, { key: "hexToRgba", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .6; "#" !== t.substring(0, 1) && (t = "#999999"); var i = t.replace("#", "");
                    i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g")); for (var n = 0; n < i.length; n++) i[n] = parseInt(1 === i[n].length ? i[n] + i[n] : i[n], 16); return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")" } }, { key: "getOpacityFromRGBA", value: function(t) { return parseFloat(t.replace(/^.*,(.+)\)/, "$1")) } }, { key: "rgb2hex", value: function(t) { return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "" } }, { key: "isColorHex", value: function(t) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t) } }, { key: "getPolygonPos", value: function(t, e) { for (var i = [], n = 2 * Math.PI / e, a = 0; a < e; a++) { var s = {};
                        s.x = t * Math.sin(a * n), s.y = -t * Math.cos(a * n), i.push(s) } return i } }, { key: "polarToCartesian", value: function(t, e, i, n) { var a = (n - 90) * Math.PI / 180; return { x: t + i * Math.cos(a), y: e + i * Math.sin(a) } } }, { key: "escapeString", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        i = t.toString().slice(); return i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e) } }, { key: "negToZero", value: function(t) { return t < 0 ? 0 : t } }, { key: "moveIndexInArray", value: function(t, e, i) { if (i >= t.length)
                        for (var n = i - t.length + 1; n--;) t.push(void 0); return t.splice(i, 0, t.splice(e, 1)[0]), t } }, { key: "extractNumber", value: function(t) { return parseFloat(t.replace(/[^\d.]*/g, "")) } }, { key: "findAncestor", value: function(t, e) { for (;
                        (t = t.parentElement) && !t.classList.contains(e);); return t } }, { key: "setELstyles", value: function(t, e) { for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i]) } }, { key: "isNumber", value: function(t) { return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10)) } }, { key: "isFloat", value: function(t) { return Number(t) === t && t % 1 != 0 } }, { key: "isSafari", value: function() { return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) } }, { key: "isFirefox", value: function() { return navigator.userAgent.toLowerCase().indexOf("firefox") > -1 } }, { key: "isIE11", value: function() { if (-1 !== window.navigator.userAgent.indexOf("MSIE") || window.navigator.appVersion.indexOf("Trident/") > -1) return !0 } }, { key: "isIE", value: function() { var t = window.navigator.userAgent,
                        e = t.indexOf("MSIE "); if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10); if (t.indexOf("Trident/") > 0) { var i = t.indexOf("rv:"); return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10) } var n = t.indexOf("Edge/"); return n > 0 && parseInt(t.substring(n + 5, t.indexOf(".", n)), 10) } }]), t }(),
        m = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.setEasingFunctions() } return s(t, [{ key: "setEasingFunctions", value: function() { var t; if (!this.w.globals.easing) { switch (this.w.config.chart.animations.easing) {
                            case "linear":
                                t = "-"; break;
                            case "easein":
                                t = "<"; break;
                            case "easeout":
                                t = ">"; break;
                            case "easeinout":
                            default:
                                t = "<>"; break;
                            case "swing":
                                t = function(t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }; break;
                            case "bounce":
                                t = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }; break;
                            case "elastic":
                                t = function(t) { return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1 } }
                        this.w.globals.easing = t } } }, { key: "animateLine", value: function(t, e, i, n) { t.attr(e).animate(n).attr(i) } }, { key: "animateMarker", value: function(t, e, i, n, a, s) { e || (e = 0), t.attr({ r: e, width: e, height: e }).animate(n, a).attr({ r: i, width: i.width, height: i.height }).afterAll((function() { s() })) } }, { key: "animateCircle", value: function(t, e, i, n, a) { t.attr({ r: e.r, cx: e.cx, cy: e.cy }).animate(n, a).attr({ r: i.r, cx: i.cx, cy: i.cy }) } }, { key: "animateRect", value: function(t, e, i, n, a) { t.attr(e).animate(n).attr(i).afterAll((function() { return a() })) } }, { key: "animatePathsGradually", value: function(t) { var e = t.el,
                        i = t.realIndex,
                        n = t.j,
                        a = t.fill,
                        s = t.pathFrom,
                        o = t.pathTo,
                        r = t.speed,
                        l = t.delay,
                        h = this.w,
                        c = 0;
                    h.config.chart.animations.animateGradually.enabled && (c = h.config.chart.animations.animateGradually.delay), h.config.chart.animations.dynamicAnimation.enabled && h.globals.dataChanged && "bar" !== h.config.chart.type && (c = 0), this.morphSVG(e, i, n, "line" !== h.config.chart.type || h.globals.comboCharts ? a : "stroke", s, o, r, l * c) } }, { key: "showDelayedElements", value: function() { this.w.globals.delayedElements.forEach((function(t) { t.el.classList.remove("apexcharts-element-hidden") })) } }, { key: "animationCompleted", value: function(t) { var e = this.w;
                    e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, { el: t, w: e })) } }, { key: "morphSVG", value: function(t, e, i, n, a, s, o, r) { var l = this,
                        h = this.w;
                    a || (a = t.attr("pathFrom")), s || (s = t.attr("pathTo")); var c = function(t) { return "radar" === h.config.chart.type && (o = 1), "M 0 ".concat(h.globals.gridHeight) };
                    (!a || a.indexOf("undefined") > -1 || a.indexOf("NaN") > -1) && (a = c()), (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = c()), h.globals.shouldAnimate || (o = 1), t.plot(a).animate(1, h.globals.easing, r).plot(a).animate(o, h.globals.easing, r).plot(s).afterAll((function() { g.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && l.animationCompleted(t) : "none" !== n && h.globals.shouldAnimate && (!h.globals.comboCharts && e === h.globals.series.length - 1 || h.globals.comboCharts) && l.animationCompleted(t), l.showDelayedElements() })) } }]), t }(),
        x = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "getDefaultFilter", value: function(t, e) { var i = this.w;
                    t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e) } }, { key: "addNormalFilter", value: function(t, e) { var i = this.w;
                    i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e) } }, { key: "addLightenFilter", value: function(t, e, i) { var n = this,
                        a = this.w,
                        s = i.intensity;
                    t.unfilter(!0), new window.SVG.Filter, t.filter((function(t) { var i = a.config.chart.dropShadow;
                        (i.enabled ? n.addShadow(t, e, i) : t).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: s } }) })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node) } }, { key: "addDarkenFilter", value: function(t, e, i) { var n = this,
                        a = this.w,
                        s = i.intensity;
                    t.unfilter(!0), new window.SVG.Filter, t.filter((function(t) { var i = a.config.chart.dropShadow;
                        (i.enabled ? n.addShadow(t, e, i) : t).componentTransfer({ rgb: { type: "linear", slope: s } }) })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node) } }, { key: "applyFilter", value: function(t, e, i) { var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5; switch (i) {
                        case "none":
                            this.addNormalFilter(t, e); break;
                        case "lighten":
                            this.addLightenFilter(t, e, { intensity: n }); break;
                        case "darken":
                            this.addDarkenFilter(t, e, { intensity: n }) } } }, { key: "addShadow", value: function(t, e, i) { var n = i.blur,
                        a = i.top,
                        s = i.left,
                        o = i.color,
                        r = i.opacity,
                        l = t.flood(Array.isArray(o) ? o[e] : o, r).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(n).merge(t.source); return t.blend(t.source, l) } }, { key: "dropShadow", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = e.top,
                        a = e.left,
                        s = e.blur,
                        o = e.color,
                        r = e.opacity,
                        l = e.noUserSpaceOnUse,
                        h = this.w; return t.unfilter(!0), g.isIE() && "radialBar" === h.config.chart.type || (o = Array.isArray(o) ? o[i] : o, t.filter((function(t) { var e;
                        e = g.isSafari() || g.isFirefox() || g.isIE() ? t.flood(o, r).composite(t.sourceAlpha, "in").offset(a, n).gaussianBlur(s) : t.flood(o, r).composite(t.sourceAlpha, "in").offset(a, n).gaussianBlur(s).merge(t.source), t.blend(t.source, e) })), l || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t } }, { key: "setSelectionFilter", value: function(t, e, i) { var n = this.w; if (void 0 !== n.globals.selectedDataPoints[e] && n.globals.selectedDataPoints[e].indexOf(i) > -1) { t.node.setAttribute("selected", !0); var a = n.config.states.active.filter; "none" !== a && this.applyFilter(t, e, a.type, a.value) } } }, { key: "_scaleFilterSize", value: function(t) {! function(e) { for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i]) }({ width: "200%", height: "200%", x: "-50%", y: "-50%" }) } }]), t }(),
        v = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "roundPathCorners", value: function(t, e) {
                    function i(t, e, i) { var a = e.x - t.x,
                            s = e.y - t.y,
                            o = Math.sqrt(a * a + s * s); return n(t, e, Math.min(1, i / o)) }

                    function n(t, e, i) { return { x: t.x + (e.x - t.x) * i, y: t.y + (e.y - t.y) * i } }

                    function a(t, e) { t.length > 2 && (t[t.length - 2] = e.x, t[t.length - 1] = e.y) }

                    function s(t) { return { x: parseFloat(t[t.length - 2]), y: parseFloat(t[t.length - 1]) } } var o = t.split(/[,\s]/).reduce((function(t, e) { var i = e.match("([a-zA-Z])(.+)"); return i ? (t.push(i[1]), t.push(i[2])) : t.push(e), t }), []).reduce((function(t, e) { return parseFloat(e) == e && t.length ? t[t.length - 1].push(e) : t.push([e]), t }), []),
                        r = []; if (o.length > 1) { var l = s(o[0]),
                            h = null; "Z" == o[o.length - 1][0] && o[0].length > 2 && (h = ["L", l.x, l.y], o[o.length - 1] = h), r.push(o[0]); for (var c = 1; c < o.length; c++) { var d = r[r.length - 1],
                                u = o[c],
                                p = u == h ? o[1] : o[c + 1]; if (p && d && d.length > 2 && "L" == u[0] && p.length > 2 && "L" == p[0]) { var f, g, m = s(d),
                                    x = s(u),
                                    v = s(p);
                                f = i(x, m, e), g = i(x, v, e), a(u, f), u.origPoint = x, r.push(u); var b = n(f, x, .5),
                                    y = n(x, g, .5),
                                    w = ["C", b.x, b.y, y.x, y.y, g.x, g.y];
                                w.origPoint = x, r.push(w) } else r.push(u) } if (h) { var _ = s(r[r.length - 1]);
                            r.push(["Z"]), a(r[0], _) } } else r = o; return r.reduce((function(t, e) { return t + e.join(" ") + " " }), "") } }, { key: "drawLine", value: function(t, e, i, n) { var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "butt",
                        l = this.w,
                        h = l.globals.dom.Paper.line().attr({ x1: t, y1: e, x2: i, y2: n, stroke: a, "stroke-dasharray": s, "stroke-width": o, "stroke-linecap": r }); return h } }, { key: "drawRect", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                        r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                        h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                        c = this.w,
                        d = c.globals.dom.Paper.rect(); return d.attr({ x: t, y: e, width: i > 0 ? i : 0, height: n > 0 ? n : 0, rx: a, ry: a, opacity: o, "stroke-width": null !== r ? r : 0, stroke: null !== l ? l : "none", "stroke-dasharray": h }), d.node.setAttribute("fill", s), d } }, { key: "drawPolygon", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
                        a = this.w,
                        s = a.globals.dom.Paper.polygon(t).attr({ fill: n, stroke: e, "stroke-width": i }); return s } }, { key: "drawCircle", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.w;
                    t < 0 && (t = 0); var n = i.globals.dom.Paper.circle(2 * t); return null !== e && n.attr(e), n } }, { key: "drawPath", value: function(t) { var e = t.d,
                        i = void 0 === e ? "" : e,
                        n = t.stroke,
                        a = void 0 === n ? "#a8a8a8" : n,
                        s = t.strokeWidth,
                        o = void 0 === s ? 1 : s,
                        r = t.fill,
                        l = t.fillOpacity,
                        h = void 0 === l ? 1 : l,
                        c = t.strokeOpacity,
                        d = void 0 === c ? 1 : c,
                        u = t.classes,
                        p = t.strokeLinecap,
                        f = void 0 === p ? null : p,
                        g = t.strokeDashArray,
                        m = void 0 === g ? 0 : g,
                        x = this.w; return null === f && (f = x.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(x.globals.gridHeight)), x.globals.dom.Paper.path(i).attr({ fill: r, "fill-opacity": h, stroke: a, "stroke-opacity": d, "stroke-linecap": f, "stroke-width": o, "stroke-dasharray": m, class: u }) } }, { key: "group", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = this.w,
                        i = e.globals.dom.Paper.group(); return null !== t && i.attr(t), i } }, { key: "move", value: function(t, e) { return ["M", t, e].join(" ") } }, { key: "line", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = null; return null === i ? n = [" L", t, e].join(" ") : "H" === i ? n = [" H", t].join(" ") : "V" === i && (n = [" V", e].join(" ")), n } }, { key: "curve", value: function(t, e, i, n, a, s) { return ["C", t, e, i, n, a, s].join(" ") } }, { key: "quadraticCurve", value: function(t, e, i, n) { return ["Q", t, e, i, n].join(" ") } }, { key: "arc", value: function(t, e, i, n, a, s, o) { var r = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
                        l = "A";
                    r && (l = "a"); var h = [l, t, e, i, n, a, s, o].join(" "); return h } }, { key: "renderPaths", value: function(t) { var i, n = t.j,
                        a = t.realIndex,
                        s = t.pathFrom,
                        o = t.pathTo,
                        r = t.stroke,
                        l = t.strokeWidth,
                        h = t.strokeLinecap,
                        c = t.fill,
                        d = t.animationDelay,
                        u = t.initialSpeed,
                        p = t.dataChangeSpeed,
                        f = t.className,
                        g = t.shouldClipToGrid,
                        v = void 0 === g || g,
                        b = t.bindEventsOnPaths,
                        y = void 0 === b || b,
                        w = t.drawShadow,
                        _ = void 0 === w || w,
                        k = this.w,
                        S = new x(this.ctx),
                        A = new m(this.ctx),
                        C = this.w.config.chart.animations.enabled,
                        P = C && this.w.config.chart.animations.dynamicAnimation.enabled,
                        L = !!(C && !k.globals.resized || P && k.globals.dataChanged && k.globals.shouldAnimate);
                    L ? i = s : (i = o, k.globals.animationEnded = !0); var T, M = k.config.stroke.dashArray;
                    T = Array.isArray(M) ? M[a] : k.config.stroke.dashArray; var E = this.drawPath({ d: i, stroke: r, strokeWidth: l, fill: c, fillOpacity: 1, classes: f, strokeLinecap: h, strokeDashArray: T }); if (E.attr("index", a), v && E.attr({ "clip-path": "url(#gridRectMask".concat(k.globals.cuid, ")") }), "none" !== k.config.states.normal.filter.type) S.getDefaultFilter(E, a);
                    else if (k.config.chart.dropShadow.enabled && _ && (!k.config.chart.dropShadow.enabledOnSeries || k.config.chart.dropShadow.enabledOnSeries && -1 !== k.config.chart.dropShadow.enabledOnSeries.indexOf(a))) { var z = k.config.chart.dropShadow;
                        S.dropShadow(E, z, a) }
                    y && (E.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, E)), E.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, E)), E.node.addEventListener("mousedown", this.pathMouseDown.bind(this, E))), E.attr({ pathTo: o, pathFrom: s }); var I = { el: E, j: n, realIndex: a, pathFrom: s, pathTo: o, fill: c, strokeWidth: l, delay: d }; return !C || k.globals.resized || k.globals.dataChanged ? !k.globals.resized && k.globals.dataChanged || A.showDelayedElements() : A.animatePathsGradually(e(e({}, I), {}, { speed: u })), k.globals.dataChanged && P && L && A.animatePathsGradually(e(e({}, I), {}, { speed: p })), E } }, { key: "drawPattern", value: function(t, e, i) { var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        s = this.w,
                        o = s.globals.dom.Paper.pattern(e, i, (function(s) { "horizontalLines" === t ? s.line(0, 0, i, 0).stroke({ color: n, width: a + 1 }) : "verticalLines" === t ? s.line(0, 0, 0, e).stroke({ color: n, width: a + 1 }) : "slantedLines" === t ? s.line(0, 0, e, i).stroke({ color: n, width: a }) : "squares" === t ? s.rect(e, i).fill("none").stroke({ color: n, width: a }) : "circles" === t && s.circle(e).fill("none").stroke({ color: n, width: a }) })); return o } }, { key: "drawGradient", value: function(t, e, i, n, a) { var s, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
                        c = this.w;
                    e.length < 9 && 0 === e.indexOf("#") && (e = g.hexToRgba(e, n)), i.length < 9 && 0 === i.indexOf("#") && (i = g.hexToRgba(i, a)); var d = 0,
                        u = 1,
                        p = 1,
                        f = null;
                    null !== r && (d = void 0 !== r[0] ? r[0] / 100 : 0, u = void 0 !== r[1] ? r[1] / 100 : 1, p = void 0 !== r[2] ? r[2] / 100 : 1, f = void 0 !== r[3] ? r[3] / 100 : null); var m = !("donut" !== c.config.chart.type && "pie" !== c.config.chart.type && "polarArea" !== c.config.chart.type && "bubble" !== c.config.chart.type); if (s = null === l || 0 === l.length ? c.globals.dom.Paper.gradient(m ? "radial" : "linear", (function(t) { t.at(d, e, n), t.at(u, i, a), t.at(p, i, a), null !== f && t.at(f, e, n) })) : c.globals.dom.Paper.gradient(m ? "radial" : "linear", (function(t) {
                            (Array.isArray(l[h]) ? l[h] : l).forEach((function(e) { t.at(e.offset / 100, e.color, e.opacity) })) })), m) { var x = c.globals.gridWidth / 2,
                            v = c.globals.gridHeight / 2; "bubble" !== c.config.chart.type ? s.attr({ gradientUnits: "userSpaceOnUse", cx: x, cy: v, r: o }) : s.attr({ cx: .5, cy: .5, r: .8, fx: .2, fy: .2 }) } else "vertical" === t ? s.from(0, 0).to(0, 1) : "diagonal" === t ? s.from(0, 0).to(1, 1) : "horizontal" === t ? s.from(0, 1).to(1, 1) : "diagonal2" === t && s.from(1, 0).to(0, 1); return s } }, { key: "getTextBasedOnMaxWidth", value: function(t) { var e = t.text,
                        i = t.maxWidth,
                        n = t.fontSize,
                        a = t.fontFamily,
                        s = this.getTextRects(e, n, a),
                        o = s.width / e.length,
                        r = Math.floor(i / o); return i < s.width ? e.slice(0, r - 3) + "..." : e } }, { key: "drawText", value: function(t) { var i = this,
                        n = t.x,
                        a = t.y,
                        s = t.text,
                        o = t.textAnchor,
                        r = t.fontSize,
                        l = t.fontFamily,
                        h = t.fontWeight,
                        c = t.foreColor,
                        d = t.opacity,
                        u = t.maxWidth,
                        p = t.cssClass,
                        f = void 0 === p ? "" : p,
                        g = t.isPlainText,
                        m = void 0 === g || g,
                        x = this.w;
                    void 0 === s && (s = ""); var v = s;
                    o || (o = "start"), c && c.length || (c = x.config.chart.foreColor), l = l || x.config.chart.fontFamily, h = h || "regular"; var b, y = { maxWidth: u, fontSize: r = r || "11px", fontFamily: l }; return Array.isArray(s) ? b = x.globals.dom.Paper.text((function(t) { for (var n = 0; n < s.length; n++) v = s[n], u && (v = i.getTextBasedOnMaxWidth(e({ text: s[n] }, y))), 0 === n ? t.tspan(v) : t.tspan(v).newLine() })) : (u && (v = this.getTextBasedOnMaxWidth(e({ text: s }, y))), b = m ? x.globals.dom.Paper.plain(s) : x.globals.dom.Paper.text((function(t) { return t.tspan(v) }))), b.attr({ x: n, y: a, "text-anchor": o, "dominant-baseline": "auto", "font-size": r, "font-family": l, "font-weight": h, fill: c, class: "apexcharts-text " + f }), b.node.style.fontFamily = l, b.node.style.opacity = d, b } }, { key: "drawMarker", value: function(t, e, i) { t = t || 0; var n = i.pSize || 0,
                        a = null; if ("square" === i.shape || "rect" === i.shape) { var s = void 0 === i.pRadius ? n / 2 : i.pRadius;
                        null !== e && n || (n = 0, s = 0); var o = 1.2 * n + s,
                            r = this.drawRect(o, o, o, o, s);
                        r.attr({ x: t - o / 2, y: e - o / 2, cx: t, cy: e, class: i.class ? i.class : "", fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, stroke: i.pointStrokeColor, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }), a = r } else "circle" !== i.shape && i.shape || (g.isNumber(e) || (n = 0, e = 0), a = this.drawCircle(n, { cx: t, cy: e, class: i.class ? i.class : "", stroke: i.pointStrokeColor, fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 })); return a } }, { key: "pathMouseEnter", value: function(t, e) { var i = this.w,
                        n = new x(this.ctx),
                        a = parseInt(t.node.getAttribute("index"), 10),
                        s = parseInt(t.node.getAttribute("j"), 10); if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, { seriesIndex: a, dataPointIndex: s, w: i }), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, { seriesIndex: a, dataPointIndex: s, w: i }]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) && "none" !== i.config.states.hover.filter.type && !i.globals.isTouchDevice) { var o = i.config.states.hover.filter;
                        n.applyFilter(t, a, o.type, o.value) } } }, { key: "pathMouseLeave", value: function(t, e) { var i = this.w,
                        n = new x(this.ctx),
                        a = parseInt(t.node.getAttribute("index"), 10),
                        s = parseInt(t.node.getAttribute("j"), 10); "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, { seriesIndex: a, dataPointIndex: s, w: i }), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, { seriesIndex: a, dataPointIndex: s, w: i }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && n.getDefaultFilter(t, a) } }, { key: "pathMouseDown", value: function(t, e) { var i = this.w,
                        n = new x(this.ctx),
                        a = parseInt(t.node.getAttribute("index"), 10),
                        s = parseInt(t.node.getAttribute("j"), 10),
                        o = "false"; if ("true" === t.node.getAttribute("selected")) { if (t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[a].indexOf(s) > -1) { var r = i.globals.selectedDataPoints[a].indexOf(s);
                            i.globals.selectedDataPoints[a].splice(r, 1) } } else { if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) { i.globals.selectedDataPoints = []; var l = i.globals.dom.Paper.select(".apexcharts-series path").members,
                                h = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,
                                c = function(t) { Array.prototype.forEach.call(t, (function(t) { t.node.setAttribute("selected", "false"), n.getDefaultFilter(t, a) })) };
                            c(l), c(h) }
                        t.node.setAttribute("selected", "true"), o = "true", void 0 === i.globals.selectedDataPoints[a] && (i.globals.selectedDataPoints[a] = []), i.globals.selectedDataPoints[a].push(s) } if ("true" === o) { var d = i.config.states.active.filter; if ("none" !== d) n.applyFilter(t, a, d.type, d.value);
                        else if ("none" !== i.config.states.hover.filter && !i.globals.isTouchDevice) { var u = i.config.states.hover.filter;
                            n.applyFilter(t, a, u.type, u.value) } } else "none" !== i.config.states.active.filter.type && ("none" === i.config.states.hover.filter.type || i.globals.isTouchDevice ? n.getDefaultFilter(t, a) : (u = i.config.states.hover.filter, n.applyFilter(t, a, u.type, u.value))); "function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: a, dataPointIndex: s, w: i }), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: a, dataPointIndex: s, w: i }]) } }, { key: "rotateAroundCenter", value: function(t) { var e = {}; return t && "function" == typeof t.getBBox && (e = t.getBBox()), { x: e.x + e.width / 2, y: e.y + e.height / 2 } } }, { key: "getTextRects", value: function(t, e, i, n) { var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        s = this.w,
                        o = this.drawText({ x: -200, y: -200, text: t, textAnchor: "start", fontSize: e, fontFamily: i, foreColor: "#fff", opacity: 0 });
                    n && o.attr("transform", n), s.globals.dom.Paper.add(o); var r = o.bbox(); return a || (r = o.node.getBoundingClientRect()), o.remove(), { width: r.width, height: r.height } } }, { key: "placeTextWithEllipsis", value: function(t, e, i) { if ("function" == typeof t.getComputedTextLength && (t.textContent = e, e.length > 0 && t.getComputedTextLength() >= i / 1.1)) { for (var n = e.length - 3; n > 0; n -= 3)
                            if (t.getSubStringLength(0, n) <= i / 1.1) return void(t.textContent = e.substring(0, n) + "...");
                        t.textContent = "." } } }], [{ key: "setAttrs", value: function(t, e) { for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i]) } }]), t }(),
        b = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "getStackedSeriesTotals", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = this.w,
                        i = []; if (0 === e.globals.series.length) return i; for (var n = 0; n < e.globals.series[e.globals.maxValsInArrayIndex].length; n++) { for (var a = 0, s = 0; s < e.globals.series.length; s++) void 0 !== e.globals.series[s][n] && -1 === t.indexOf(s) && (a += e.globals.series[s][n]);
                        i.push(a) } return i } }, { key: "getSeriesTotalByIndex", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return null === t ? this.w.config.series.reduce((function(t, e) { return t + e }), 0) : this.w.globals.series[t].reduce((function(t, e) { return t + e }), 0) } }, { key: "isSeriesNull", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return 0 === (null === t ? this.w.config.series.filter((function(t) { return null !== t })) : this.w.config.series[t].data.filter((function(t) { return null !== t }))).length } }, { key: "seriesHaveSameValues", value: function(t) { return this.w.globals.series[t].every((function(t, e, i) { return t === i[0] })) } }, { key: "getCategoryLabels", value: function(t) { var e = this.w,
                        i = t.slice(); return e.config.xaxis.convertedCatToNumeric && (i = t.map((function(t, i) { return e.config.xaxis.labels.formatter(t - e.globals.minX + 1) }))), i } }, { key: "getLargestSeries", value: function() { var t = this.w;
                    t.globals.maxValsInArrayIndex = t.globals.series.map((function(t) { return t.length })).indexOf(Math.max.apply(Math, t.globals.series.map((function(t) { return t.length })))) } }, { key: "getLargestMarkerSize", value: function() { var t = this.w,
                        e = 0; return t.globals.markers.size.forEach((function(t) { e = Math.max(e, t) })), t.config.markers.discrete && t.config.markers.discrete.length && t.config.markers.discrete.forEach((function(t) { e = Math.max(e, t.size) })), e > 0 && (e += t.config.markers.hover.sizeOffset + 1), t.globals.markers.largestSize = e, e } }, { key: "getSeriesTotals", value: function() { var t = this.w;
                    t.globals.seriesTotals = t.globals.series.map((function(t, e) { var i = 0; if (Array.isArray(t))
                            for (var n = 0; n < t.length; n++) i += t[n];
                        else i += t; return i })) } }, { key: "getSeriesTotalsXRange", value: function(t, e) { var i = this.w; return i.globals.series.map((function(n, a) { for (var s = 0, o = 0; o < n.length; o++) i.globals.seriesX[a][o] > t && i.globals.seriesX[a][o] < e && (s += n[o]); return s })) } }, { key: "getPercentSeries", value: function() { var t = this.w;
                    t.globals.seriesPercent = t.globals.series.map((function(e, i) { var n = []; if (Array.isArray(e))
                            for (var a = 0; a < e.length; a++) { var s = t.globals.stackedSeriesTotals[a],
                                    o = 0;
                                s && (o = 100 * e[a] / s), n.push(o) } else { var r = 100 * e / t.globals.seriesTotals.reduce((function(t, e) { return t + e }), 0);
                                n.push(r) }
                        return n })) } }, { key: "getCalculatedRatios", value: function() { var t, e, i, n, a = this.w.globals,
                        s = [],
                        o = 0,
                        r = [],
                        l = .1,
                        h = 0; if (a.yRange = [], a.isMultipleYAxis)
                        for (var c = 0; c < a.minYArr.length; c++) a.yRange.push(Math.abs(a.minYArr[c] - a.maxYArr[c])), r.push(0);
                    else a.yRange.push(Math.abs(a.minY - a.maxY));
                    a.xRange = Math.abs(a.maxX - a.minX), a.zRange = Math.abs(a.maxZ - a.minZ); for (var d = 0; d < a.yRange.length; d++) s.push(a.yRange[d] / a.gridHeight); if (e = a.xRange / a.gridWidth, i = Math.abs(a.initialMaxX - a.initialMinX) / a.gridWidth, t = a.yRange / a.gridWidth, n = a.xRange / a.gridHeight, (o = a.zRange / a.gridHeight * 16) || (o = 1), a.minY !== Number.MIN_VALUE && 0 !== Math.abs(a.minY) && (a.hasNegs = !0), a.isMultipleYAxis) { r = []; for (var u = 0; u < s.length; u++) r.push(-a.minYArr[u] / s[u]) } else r.push(-a.minY / s[0]), a.minY !== Number.MIN_VALUE && 0 !== Math.abs(a.minY) && (l = -a.minY / t, h = a.minX / e); return { yRatio: s, invertedYRatio: t, zRatio: o, xRatio: e, initialXRatio: i, invertedXRatio: n, baseLineInvertedY: l, baseLineY: r, baseLineX: h } } }, { key: "getLogSeries", value: function(t) { var e = this,
                        i = this.w; return i.globals.seriesLog = t.map((function(t, n) { return i.config.yaxis[n] && i.config.yaxis[n].logarithmic ? t.map((function(t) { return null === t ? null : e.getLogVal(i.config.yaxis[n].logBase, t, n) })) : t })), i.globals.invalidLogScale ? t : i.globals.seriesLog } }, { key: "getBaseLog", value: function(t, e) { return Math.log(e) / Math.log(t) } }, { key: "getLogVal", value: function(t, e, i) { if (0 === e) return 0; var n = this.w,
                        a = 0 === n.globals.minYArr[i] ? -1 : this.getBaseLog(t, n.globals.minYArr[i]),
                        s = (0 === n.globals.maxYArr[i] ? 0 : this.getBaseLog(t, n.globals.maxYArr[i])) - a; return e < 1 ? e / s : (this.getBaseLog(t, e) - a) / s } }, { key: "getLogYRatios", value: function(t) { var e = this,
                        i = this.w,
                        n = this.w.globals; return n.yLogRatio = t.slice(), n.logYRange = n.yRange.map((function(t, a) { if (i.config.yaxis[a] && e.w.config.yaxis[a].logarithmic) { var s, o = -Number.MAX_VALUE,
                                r = Number.MIN_VALUE; return n.seriesLog.forEach((function(t, e) { t.forEach((function(t) { i.config.yaxis[e] && i.config.yaxis[e].logarithmic && (o = Math.max(t, o), r = Math.min(t, r)) })) })), s = Math.pow(n.yRange[a], Math.abs(r - o) / n.yRange[a]), n.yLogRatio[a] = s / n.gridHeight, s } })), n.invalidLogScale ? t.slice() : n.yLogRatio } }], [{ key: "checkComboSeries", value: function(t) { var e = !1,
                        i = 0,
                        n = 0; return t.length && void 0 !== t[0].type && t.forEach((function(t) { "bar" !== t.type && "column" !== t.type && "candlestick" !== t.type && "boxPlot" !== t.type || i++, void 0 !== t.type && n++ })), n > 0 && (e = !0), { comboBarCount: i, comboCharts: e } } }, { key: "extendArrayProps", value: function(t, e, i) { return e.yaxis && (e = t.extendYAxis(e, i)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e } }]), t }(),
        y = function() {
            function t(e) { n(this, t), this.w = e.w, this.annoCtx = e } return s(t, [{ key: "setOrientations", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.w; if ("vertical" === t.label.orientation) { var n = null !== e ? e : 0,
                            a = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(n, "']")); if (null !== a) { var s = a.getBoundingClientRect();
                            a.setAttribute("x", parseFloat(a.getAttribute("x")) - s.height + 4), "top" === t.label.position ? a.setAttribute("y", parseFloat(a.getAttribute("y")) + s.width) : a.setAttribute("y", parseFloat(a.getAttribute("y")) - s.width); var o = this.annoCtx.graphics.rotateAroundCenter(a),
                                r = o.x,
                                l = o.y;
                            a.setAttribute("transform", "rotate(-90 ".concat(r, " ").concat(l, ")")) } } } }, { key: "addBackgroundToAnno", value: function(t, e) { var i = this.w; if (!t || void 0 === e.label.text || void 0 !== e.label.text && !String(e.label.text).trim()) return null; var n = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                        a = t.getBoundingClientRect(),
                        s = e.label.style.padding.left,
                        o = e.label.style.padding.right,
                        r = e.label.style.padding.top,
                        l = e.label.style.padding.bottom; "vertical" === e.label.orientation && (r = e.label.style.padding.left, l = e.label.style.padding.right, s = e.label.style.padding.top, o = e.label.style.padding.bottom); var h = a.left - n.left - s,
                        c = a.top - n.top - r,
                        d = this.annoCtx.graphics.drawRect(h - i.globals.barPadForNumericAxis, c, a.width + s + o, a.height + r + l, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0); return e.id && d.node.classList.add(e.id), d } }, { key: "annotationsBackground", value: function() { var t = this,
                        e = this.w,
                        i = function(i, n, a) { var s = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations .apexcharts-").concat(a, "-annotation-label[rel='").concat(n, "']")); if (s) { var o = s.parentNode,
                                    r = t.addBackgroundToAnno(s, i);
                                r && (o.insertBefore(r.node, s), i.label.mouseEnter && r.node.addEventListener("mouseenter", i.label.mouseEnter.bind(t, i)), i.label.mouseLeave && r.node.addEventListener("mouseleave", i.label.mouseLeave.bind(t, i)), i.label.click && r.node.addEventListener("click", i.label.click.bind(t, i))) } };
                    e.config.annotations.xaxis.map((function(t, e) { i(t, e, "xaxis") })), e.config.annotations.yaxis.map((function(t, e) { i(t, e, "yaxis") })), e.config.annotations.points.map((function(t, e) { i(t, e, "point") })) } }, { key: "getY1Y2", value: function(t, e) { var i, n = "y1" === t ? e.y : e.y2,
                        a = this.w; if (this.annoCtx.invertAxis) { var s = a.globals.labels.indexOf(n);
                        a.config.xaxis.convertedCatToNumeric && (s = a.globals.categoryLabels.indexOf(n)); var o = a.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (s + 1) + ")");
                        o && (i = parseFloat(o.getAttribute("y"))) } else { var r;
                        r = a.config.yaxis[e.yAxisIndex].logarithmic ? (n = new b(this.annoCtx.ctx).getLogVal(n, e.yAxisIndex)) / a.globals.yLogRatio[e.yAxisIndex] : (n - a.globals.minYArr[e.yAxisIndex]) / (a.globals.yRange[e.yAxisIndex] / a.globals.gridHeight), i = a.globals.gridHeight - r, !e.marker || void 0 !== e.y && null !== e.y || (i = 0), a.config.yaxis[e.yAxisIndex] && a.config.yaxis[e.yAxisIndex].reversed && (i = r) } return "string" == typeof n && n.indexOf("px") > -1 && (i = parseFloat(n)), i } }, { key: "getX1X2", value: function(t, e) { var i = this.w,
                        n = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX,
                        a = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX,
                        s = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange,
                        o = (e.x - n) / (s / i.globals.gridWidth);
                    this.annoCtx.inversedReversedAxis && (o = (a - e.x) / (s / i.globals.gridWidth)), "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (o = this.getStringX(e.x)); var r = (e.x2 - n) / (s / i.globals.gridWidth); return this.annoCtx.inversedReversedAxis && (r = (a - e.x2) / (s / i.globals.gridWidth)), "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (r = this.getStringX(e.x2)), void 0 !== e.x && null !== e.x || !e.marker || (o = i.globals.gridWidth), "x1" === t && "string" == typeof e.x && e.x.indexOf("px") > -1 && (o = parseFloat(e.x)), "x2" === t && "string" == typeof e.x2 && e.x2.indexOf("px") > -1 && (r = parseFloat(e.x2)), "x1" === t ? o : r } }, { key: "getStringX", value: function(t) { var e = this.w,
                        i = t;
                    e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1); var n = e.globals.labels.indexOf(t),
                        a = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (n + 1) + ")"); return a && (i = parseFloat(a.getAttribute("x"))), i } }]), t }(),
        w = function() {
            function t(e) { n(this, t), this.w = e.w, this.annoCtx = e, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new y(this.annoCtx) } return s(t, [{ key: "addXaxisAnnotation", value: function(t, e, i) { var n, a = this.w,
                        s = this.helpers.getX1X2("x1", t),
                        o = t.label.text,
                        r = t.strokeDashArray; if (g.isNumber(s)) { if (null === t.x2 || void 0 === t.x2) { var l = this.annoCtx.graphics.drawLine(s + t.offsetX, 0 + t.offsetY, s + t.offsetX, a.globals.gridHeight + t.offsetY, t.borderColor, r, t.borderWidth);
                            e.appendChild(l.node), t.id && l.node.classList.add(t.id) } else { if ((n = this.helpers.getX1X2("x2", t)) < s) { var h = s;
                                s = n, n = h } var c = this.annoCtx.graphics.drawRect(s + t.offsetX, 0 + t.offsetY, n - s, a.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, r);
                            c.node.classList.add("apexcharts-annotation-rect"), c.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), e.appendChild(c.node), t.id && c.node.classList.add(t.id) } var d = this.annoCtx.graphics.getTextRects(o, parseFloat(t.label.style.fontSize)),
                            u = "top" === t.label.position ? 4 : "center" === t.label.position ? a.globals.gridHeight / 2 + ("vertical" === t.label.orientation ? d.width / 2 : 0) : a.globals.gridHeight,
                            p = this.annoCtx.graphics.drawText({ x: s + t.label.offsetX, y: u + t.label.offsetY - ("vertical" === t.label.orientation ? "top" === t.label.position ? d.width / 2 - 12 : -d.width / 2 : 0), text: o, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
                        p.attr({ rel: i }), e.appendChild(p.node), this.annoCtx.helpers.setOrientations(t, i) } } }, { key: "drawXAxisAnnotations", value: function() { var t = this,
                        e = this.w,
                        i = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" }); return e.config.annotations.xaxis.map((function(e, n) { t.addXaxisAnnotation(e, i.node, n) })), i } }]), t }(),
        _ = function() {
            function t(e) { n(this, t), this.w = e.w, this.annoCtx = e, this.helpers = new y(this.annoCtx) } return s(t, [{ key: "addYaxisAnnotation", value: function(t, e, i) { var n, a = this.w,
                        s = t.strokeDashArray,
                        o = this.helpers.getY1Y2("y1", t),
                        r = t.label.text; if (null === t.y2 || void 0 === t.y2) { var l = this.annoCtx.graphics.drawLine(0 + t.offsetX, o + t.offsetY, this._getYAxisAnnotationWidth(t), o + t.offsetY, t.borderColor, s, t.borderWidth);
                        e.appendChild(l.node), t.id && l.node.classList.add(t.id) } else { if ((n = this.helpers.getY1Y2("y2", t)) > o) { var h = o;
                            o = n, n = h } var c = this.annoCtx.graphics.drawRect(0 + t.offsetX, n + t.offsetY, this._getYAxisAnnotationWidth(t), o - n, 0, t.fillColor, t.opacity, 1, t.borderColor, s);
                        c.node.classList.add("apexcharts-annotation-rect"), c.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), e.appendChild(c.node), t.id && c.node.classList.add(t.id) } var d = "right" === t.label.position ? a.globals.gridWidth : "center" === t.label.position ? a.globals.gridWidth / 2 : 0,
                        u = this.annoCtx.graphics.drawText({ x: d + t.label.offsetX, y: (null != n ? n : o) + t.label.offsetY - 3, text: r, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
                    u.attr({ rel: i }), e.appendChild(u.node) } }, { key: "_getYAxisAnnotationWidth", value: function(t) { var e = this.w; return e.globals.gridWidth, (t.width.indexOf("%") > -1 ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX } }, { key: "drawYAxisAnnotations", value: function() { var t = this,
                        e = this.w,
                        i = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" }); return e.config.annotations.yaxis.map((function(e, n) { t.addYaxisAnnotation(e, i.node, n) })), i } }]), t }(),
        k = function() {
            function t(e) { n(this, t), this.w = e.w, this.annoCtx = e, this.helpers = new y(this.annoCtx) } return s(t, [{ key: "addPointAnnotation", value: function(t, e, i) { this.w; var n = this.helpers.getX1X2("x1", t),
                        a = this.helpers.getY1Y2("y1", t); if (g.isNumber(n)) { var s = { pSize: t.marker.size, pointStrokeWidth: t.marker.strokeWidth, pointFillColor: t.marker.fillColor, pointStrokeColor: t.marker.strokeColor, shape: t.marker.shape, pRadius: t.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id ? t.id : "") },
                            o = this.annoCtx.graphics.drawMarker(n + t.marker.offsetX, a + t.marker.offsetY, s);
                        e.appendChild(o.node); var r = t.label.text ? t.label.text : "",
                            l = this.annoCtx.graphics.drawText({ x: n + t.label.offsetX, y: a + t.label.offsetY - t.marker.size - parseFloat(t.label.style.fontSize) / 1.6, text: r, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") }); if (l.attr({ rel: i }), e.appendChild(l.node), t.customSVG.SVG) { var h = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass });
                            h.attr({ transform: "translate(".concat(n + t.customSVG.offsetX, ", ").concat(a + t.customSVG.offsetY, ")") }), h.node.innerHTML = t.customSVG.SVG, e.appendChild(h.node) } if (t.image.path) { var c = t.image.width ? t.image.width : 20,
                                d = t.image.height ? t.image.height : 20;
                            o = this.annoCtx.addImage({ x: n + t.image.offsetX - c / 2, y: a + t.image.offsetY - d / 2, width: c, height: d, path: t.image.path, appendTo: ".apexcharts-point-annotations" }) }
                        t.mouseEnter && o.node.addEventListener("mouseenter", t.mouseEnter.bind(this, t)), t.mouseLeave && o.node.addEventListener("mouseleave", t.mouseLeave.bind(this, t)), t.click && o.node.addEventListener("click", t.click.bind(this, t)) } } }, { key: "drawPointAnnotations", value: function() { var t = this,
                        e = this.w,
                        i = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" }); return e.config.annotations.points.map((function(e, n) { t.addPointAnnotation(e, i.node, n) })), i } }]), t }(),
        S = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } },
        A = function() {
            function t() { n(this, t), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, radius: 2, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: .3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: .3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 } } return s(t, [{ key: "init", value: function() { return { annotations: { position: "front", yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "transparent", locales: [S], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: .35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: .1 }, stroke: { width: 1, color: "#24292e", opacity: .4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0 }, stacked: !1, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", dateFormatter: function(t) { return new Date(t).toDateString() } }, png: { filename: void 0 }, svg: { filename: void 0 } }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, zoomedArea: { fill: { color: "#90CAF9", opacity: .4 }, stroke: { color: "#0D47A1", opacity: .4, width: 1 } } } }, plotOptions: { area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: !0, rangeBarGroupRows: !1, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal", total: { enabled: !1, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: .5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: .5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(t) { return t } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(t) { return t + "%" } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(t) { return t.globals.seriesTotals.reduce((function(t, e) { return t + e }), 0) / t.globals.series.length + "%" } } } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(t) { return t } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(t) { return t } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(t) { return t.globals.seriesTotals.reduce((function(t, e) { return t + e }), 0) } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function(t) { return null !== t ? t : "" }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: .9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45 } }, fill: { type: "solid", colors: void 0, opacity: .85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: .5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: .5, strokeWidth: void 0, dashArray: 4 }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: .5 }, column: { colors: void 0, opacity: .5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], labels: { colors: void 0, useSeriesColors: !1 }, markers: { width: 12, height: 12, strokeWidth: 0, fillColors: void 0, strokeColor: "#fff", radius: 12, customHTML: void 0, offsetX: 0, offsetY: 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 2 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: .9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", width: 8, height: 8, radius: 2, offsetX: 0, offsetY: 0, onClick: void 0, onDblClick: void 0, showNullDataPoints: !0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: .1 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken", value: .5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: .85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: .5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(t) { return t ? t + ": " : "" } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: .9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: .4, opacityTo: .5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: .4 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "light", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: .65 } } } } }]), t }(),
        C = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.graphics = new v(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new y(this), this.xAxisAnnotations = new w(this), this.yAxisAnnotations = new _(this), this.pointsAnnotations = new k(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints } return s(t, [{ key: "drawAxesAnnotations", value: function() { var t = this.w; if (t.globals.axisCharts) { for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), n = this.pointsAnnotations.drawPointAnnotations(), a = t.config.chart.animations.enabled, s = [e, i, n], o = [i.node, e.node, n.node], r = 0; r < 3; r++) t.globals.dom.elGraphical.add(s[r]), !a || t.globals.resized || t.globals.dataChanged || "scatter" !== t.config.chart.type && "bubble" !== t.config.chart.type && t.globals.dataPoints > 1 && o[r].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({ el: o[r], index: 0 });
                        this.helpers.annotationsBackground() } } }, { key: "drawImageAnnos", value: function() { var t = this;
                    this.w.config.annotations.images.map((function(e, i) { t.addImage(e, i) })) } }, { key: "drawTextAnnos", value: function() { var t = this;
                    this.w.config.annotations.texts.map((function(e, i) { t.addText(e, i) })) } }, { key: "addXaxisAnnotation", value: function(t, e, i) { this.xAxisAnnotations.addXaxisAnnotation(t, e, i) } }, { key: "addYaxisAnnotation", value: function(t, e, i) { this.yAxisAnnotations.addYaxisAnnotation(t, e, i) } }, { key: "addPointAnnotation", value: function(t, e, i) { this.pointsAnnotations.addPointAnnotation(t, e, i) } }, { key: "addText", value: function(t, e) { var i = t.x,
                        n = t.y,
                        a = t.text,
                        s = t.textAnchor,
                        o = t.foreColor,
                        r = t.fontSize,
                        l = t.fontFamily,
                        h = t.fontWeight,
                        c = t.cssClass,
                        d = t.backgroundColor,
                        u = t.borderWidth,
                        p = t.strokeDashArray,
                        f = t.borderRadius,
                        g = t.borderColor,
                        m = t.appendTo,
                        x = void 0 === m ? ".apexcharts-annotations" : m,
                        v = t.paddingLeft,
                        b = void 0 === v ? 4 : v,
                        y = t.paddingRight,
                        w = void 0 === y ? 4 : y,
                        _ = t.paddingBottom,
                        k = void 0 === _ ? 2 : _,
                        S = t.paddingTop,
                        A = void 0 === S ? 2 : S,
                        C = this.w,
                        P = this.graphics.drawText({ x: i, y: n, text: a, textAnchor: s || "start", fontSize: r || "12px", fontWeight: h || "regular", fontFamily: l || C.config.chart.fontFamily, foreColor: o || C.config.chart.foreColor, cssClass: c }),
                        L = C.globals.dom.baseEl.querySelector(x);
                    L && L.appendChild(P.node); var T = P.bbox(); if (a) { var M = this.graphics.drawRect(T.x - b, T.y - A, T.width + b + w, T.height + k + A, f, d || "transparent", 1, u, g, p);
                        L.insertBefore(M.node, P.node) } } }, { key: "addImage", value: function(t, e) { var i = this.w,
                        n = t.path,
                        a = t.x,
                        s = void 0 === a ? 0 : a,
                        o = t.y,
                        r = void 0 === o ? 0 : o,
                        l = t.width,
                        h = void 0 === l ? 20 : l,
                        c = t.height,
                        d = void 0 === c ? 20 : c,
                        u = t.appendTo,
                        p = void 0 === u ? ".apexcharts-annotations" : u,
                        f = i.globals.dom.Paper.image(n);
                    f.size(h, d).move(s, r); var g = i.globals.dom.baseEl.querySelector(p); return g && g.appendChild(f.node), f } }, { key: "addXaxisAnnotationExternal", value: function(t, e, i) { return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i } }, { key: "addYaxisAnnotationExternal", value: function(t, e, i) { return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i } }, { key: "addPointAnnotationExternal", value: function(t, e, i) { return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "point", contextMethod: i.addPointAnnotation }), i } }, { key: "addAnnotationExternal", value: function(t) { var e = t.params,
                        i = t.pushToMemory,
                        n = t.context,
                        a = t.type,
                        s = t.contextMethod,
                        o = n,
                        r = o.w,
                        l = r.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations")),
                        h = l.childNodes.length + 1,
                        c = new A,
                        d = Object.assign({}, "xaxis" === a ? c.xAxisAnnotation : "yaxis" === a ? c.yAxisAnnotation : c.pointAnnotation),
                        u = g.extend(d, e); switch (a) {
                        case "xaxis":
                            this.addXaxisAnnotation(u, l, h); break;
                        case "yaxis":
                            this.addYaxisAnnotation(u, l, h); break;
                        case "point":
                            this.addPointAnnotation(u, l, h) } var p = r.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations .apexcharts-").concat(a, "-annotation-label[rel='").concat(h, "']")),
                        f = this.helpers.addBackgroundToAnno(p, u); return f && l.insertBefore(f.node, p), i && r.globals.memory.methodsToExec.push({ context: o, id: u.id ? u.id : g.randomId(), method: s, label: "addAnnotation", params: e }), n } }, { key: "clearAnnotations", value: function(t) { var e = t.w,
                        i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
                    e.globals.memory.methodsToExec.map((function(t, i) { "addText" !== t.label && "addAnnotation" !== t.label || e.globals.memory.methodsToExec.splice(i, 1) })), i = g.listToArray(i), Array.prototype.forEach.call(i, (function(t) { for (; t.firstChild;) t.removeChild(t.firstChild) })) } }, { key: "removeAnnotation", value: function(t, e) { var i = t.w,
                        n = i.globals.dom.baseEl.querySelectorAll(".".concat(e));
                    n && (i.globals.memory.methodsToExec.map((function(t, n) { t.id === e && i.globals.memory.methodsToExec.splice(n, 1) })), Array.prototype.forEach.call(n, (function(t) { t.parentElement.removeChild(t) }))) } }]), t }(),
        P = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334] } return s(t, [{ key: "isValidDate", value: function(t) { return !isNaN(this.parseDate(t)) } }, { key: "getTimeStamp", value: function(t) { return Date.parse(t) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : new Date(t).getTime() : t } }, { key: "getDate", value: function(t) { return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toUTCString()) : new Date(t) } }, { key: "parseDate", value: function(t) { var e = Date.parse(t); if (!isNaN(e)) return this.getTimeStamp(t); var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " ")); return this.getTimeStamp(i) } }, { key: "parseDateWithTimezone", value: function(t) { return Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " ")) } }, { key: "formatDate", value: function(t, e) { var i = this.w.globals.locale,
                        n = this.w.config.xaxis.labels.datetimeUTC,
                        a = ["\0"].concat(u(i.months)),
                        s = [""].concat(u(i.shortMonths)),
                        o = [""].concat(u(i.days)),
                        r = [""].concat(u(i.shortDays));

                    function l(t, e) { var i = t + ""; for (e = e || 2; i.length < e;) i = "0" + i; return i } var h = n ? t.getUTCFullYear() : t.getFullYear();
                    e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + h)).replace(/(^|[^\\])yy/g, "$1" + h.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h); var c = (n ? t.getUTCMonth() : t.getMonth()) + 1;
                    e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + a[0])).replace(/(^|[^\\])MMM/g, "$1" + s[0])).replace(/(^|[^\\])MM/g, "$1" + l(c))).replace(/(^|[^\\])M/g, "$1" + c); var d = n ? t.getUTCDate() : t.getDate();
                    e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + r[0])).replace(/(^|[^\\])dd/g, "$1" + l(d))).replace(/(^|[^\\])d/g, "$1" + d); var p = n ? t.getUTCHours() : t.getHours(),
                        f = p > 12 ? p - 12 : 0 === p ? 12 : p;
                    e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + l(p))).replace(/(^|[^\\])H/g, "$1" + p)).replace(/(^|[^\\])hh+/g, "$1" + l(f))).replace(/(^|[^\\])h/g, "$1" + f); var g = n ? t.getUTCMinutes() : t.getMinutes();
                    e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + l(g))).replace(/(^|[^\\])m/g, "$1" + g); var m = n ? t.getUTCSeconds() : t.getSeconds();
                    e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + l(m))).replace(/(^|[^\\])s/g, "$1" + m); var x = n ? t.getUTCMilliseconds() : t.getMilliseconds();
                    e = e.replace(/(^|[^\\])fff+/g, "$1" + l(x, 3)), x = Math.round(x / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + l(x)), x = Math.round(x / 10); var v = p < 12 ? "AM" : "PM";
                    e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + x)).replace(/(^|[^\\])TT+/g, "$1" + v)).replace(/(^|[^\\])T/g, "$1" + v.charAt(0)); var b = v.toLowerCase();
                    e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + b)).replace(/(^|[^\\])t/g, "$1" + b.charAt(0)); var y = -t.getTimezoneOffset(),
                        w = n || !y ? "Z" : y > 0 ? "+" : "-"; if (!n) { var _ = (y = Math.abs(y)) % 60;
                        w += l(Math.floor(y / 60)) + ":" + l(_) }
                    e = e.replace(/(^|[^\\])K/g, "$1" + w); var k = (n ? t.getUTCDay() : t.getDay()) + 1; return (e = (e = (e = (e = e.replace(new RegExp(o[0], "g"), o[k])).replace(new RegExp(r[0], "g"), r[k])).replace(new RegExp(a[0], "g"), a[c])).replace(new RegExp(s[0], "g"), s[c])).replace(/\\(.)/g, "$1") } }, { key: "getTimeUnitsfromTimestamp", value: function(t, e, i) { var n = this.w;
                    void 0 !== n.config.xaxis.min && (t = n.config.xaxis.min), void 0 !== n.config.xaxis.max && (e = n.config.xaxis.max); var a = this.getDate(t),
                        s = this.getDate(e),
                        o = this.formatDate(a, "yyyy MM dd HH mm ss fff").split(" "),
                        r = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" "); return { minMillisecond: parseInt(o[6], 10), maxMillisecond: parseInt(r[6], 10), minSecond: parseInt(o[5], 10), maxSecond: parseInt(r[5], 10), minMinute: parseInt(o[4], 10), maxMinute: parseInt(r[4], 10), minHour: parseInt(o[3], 10), maxHour: parseInt(r[3], 10), minDate: parseInt(o[2], 10), maxDate: parseInt(r[2], 10), minMonth: parseInt(o[1], 10) - 1, maxMonth: parseInt(r[1], 10) - 1, minYear: parseInt(o[0], 10), maxYear: parseInt(r[0], 10) } } }, { key: "isLeapYear", value: function(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 } }, { key: "calculcateLastDaysOfMonth", value: function(t, e, i) { return this.determineDaysOfMonths(t, e) - i } }, { key: "determineDaysOfYear", value: function(t) { var e = 365; return this.isLeapYear(t) && (e = 366), e } }, { key: "determineRemainingDaysOfYear", value: function(t, e, i) { var n = this.daysCntOfYear[e] + i; return e > 1 && this.isLeapYear() && n++, n } }, { key: "determineDaysOfMonths", value: function(t, e) { var i = 30; switch (t = g.monthMod(t), !0) {
                        case this.months30.indexOf(t) > -1:
                            2 === t && (i = this.isLeapYear(e) ? 29 : 28); break;
                        case this.months31.indexOf(t) > -1:
                        default:
                            i = 31 } return i } }]), t }(),
        L = function(t) { var e, i = t.ctx,
                n = t.seriesIndex,
                a = t.dataPointIndex,
                s = t.y1,
                o = t.y2,
                r = t.w,
                l = r.globals.seriesRangeStart[n][a],
                h = r.globals.seriesRangeEnd[n][a],
                c = r.globals.labels[a],
                d = r.config.series[n].name ? r.config.series[n].name : "",
                u = r.config.tooltip.y.formatter,
                p = r.config.tooltip.y.title.formatter,
                f = { w: r, seriesIndex: n, dataPointIndex: a, start: l, end: h }; "function" == typeof p && (d = p(d, f)), null !== (e = r.config.series[n].data[a]) && void 0 !== e && e.x && (c = r.config.series[n].data[a].x + ":"), "function" == typeof u && (c = u(c, f)), Number.isFinite(s) && Number.isFinite(o) && (l = s, h = o); var g = "",
                m = "",
                x = r.globals.colors[n]; if (void 0 === r.config.tooltip.x.formatter)
                if ("datetime" === r.config.xaxis.type) { var v = new P(i);
                    g = v.formatDate(v.getDate(l), r.config.tooltip.x.format), m = v.formatDate(v.getDate(h), r.config.tooltip.x.format) } else g = l, m = h;
            else g = r.config.tooltip.x.formatter(l), m = r.config.tooltip.x.formatter(h); return { start: l, end: h, startVal: g, endVal: m, ylabel: c, color: x, seriesName: d } },
        T = function(t) { var e = t.color,
                i = t.seriesName,
                n = t.ylabel,
                a = t.start,
                s = t.end,
                o = t.seriesIndex,
                r = t.dataPointIndex,
                l = t.ctx.tooltip.tooltipLabels.getFormatters(o);
            a = l.yLbFormatter(a), s = l.yLbFormatter(s); var h = l.yLbFormatter(t.w.globals.series[o][r]),
                c = '<span class="value start-value">\n  '.concat(a, '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(s, "\n  </span>"); return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (i || "") + '</span></div><div> <span class="category">' + n + " </span> " + (t.w.globals.comboCharts ? "rangeArea" === t.w.config.series[o].type || "rangeBar" === t.w.config.series[o].type ? c : "<span>".concat(h, "</span>") : c) + " </div></div>" },
        M = function() {
            function t(e) { n(this, t), this.opts = e } return s(t, [{ key: "line", value: function() { return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } } } }, { key: "sparkline", value: function(t) { return this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0, g.extend(t, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } }) } }, { key: "bar", value: function() { return { chart: { stacked: !1, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: .85 }, legend: { markers: { shape: "square", radius: 2, size: 8 } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } } } }, { key: "candlestick", value: function() { var t = this; return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e) { var i = e.seriesIndex,
                                    n = e.dataPointIndex,
                                    a = e.w; return t._getBoxTooltip(a, i, n, ["Open", "High", "", "Low", "Close"], "candlestick") } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } } } }, { key: "boxPlot", value: function() { var t = this; return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e) { var i = e.seriesIndex,
                                    n = e.dataPointIndex,
                                    a = e.w; return t._getBoxTooltip(a, i, n, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot") } }, markers: { size: 5, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } } } }, { key: "rangeBar", value: function() { return { stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(t, e) { e.ctx; var i = e.seriesIndex,
                                    n = e.dataPointIndex,
                                    a = e.w,
                                    s = function() { var t = a.globals.seriesRangeStart[i][n]; return a.globals.seriesRangeEnd[i][n] - t }; return a.globals.comboCharts ? "rangeBar" === a.config.series[i].type || "rangeArea" === a.config.series[i].type ? s() : t : s() }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, tooltip: { shared: !1, followCursor: !0, custom: function(t) { return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? function(t) { var i = L(t),
                                        n = i.color,
                                        a = i.seriesName,
                                        s = i.ylabel,
                                        o = i.startVal,
                                        r = i.endVal; return T(e(e({}, t), {}, { color: n, seriesName: a, ylabel: s, start: o, end: r })) }(t) : function(t) { var i = L(t),
                                        n = i.color,
                                        a = i.seriesName,
                                        s = i.ylabel,
                                        o = i.start,
                                        r = i.end; return T(e(e({}, t), {}, { color: n, seriesName: a, ylabel: s, start: o, end: r })) }(t) } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } } } }, { key: "area", value: function() { return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: .65, opacityTo: .5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: .65, opacityTo: .5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } } } }, { key: "rangeArea", value: function() { return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: .6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: !1, shared: !0, followCursor: !0, custom: function(t) { return function(t) { var i = L(t),
                                        n = i.color,
                                        a = i.seriesName,
                                        s = i.ylabel,
                                        o = i.start,
                                        r = i.end; return T(e(e({}, t), {}, { color: n, seriesName: a, ylabel: s, start: o, end: r })) }(t) } } } } }, { key: "brush", value: function(t) { return g.extend(t, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } }) } }, { key: "stacked100", value: function(t) { t.dataLabels = t.dataLabels || {}, t.dataLabels.formatter = t.dataLabels.formatter || void 0; var e = t.dataLabels.formatter; return t.yaxis.forEach((function(e, i) { t.yaxis[i].min = 0, t.yaxis[i].max = 100 })), "bar" === t.chart.type && (t.dataLabels.formatter = e || function(t) { return "number" == typeof t && t ? t.toFixed(0) + "%" : t }), t } }, { key: "convertCatToNumeric", value: function(t) { return t.xaxis.convertedCatToNumeric = !0, t } }, { key: "convertCatToNumericXaxis", value: function(t, e, i) { t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function(t) { return g.isNumber(t) ? Math.floor(t) : t }; var n = t.xaxis.labels.formatter,
                        a = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels; return i && i.length && (a = i.map((function(t) { return Array.isArray(t) ? t : String(t) }))), a && a.length && (t.xaxis.labels.formatter = function(t) { return g.isNumber(t) ? n(a[Math.floor(t) - 1]) : n(t) }), t.xaxis.categories = [], t.labels = [], t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints", t } }, { key: "bubble", value: function() { return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: .55, opacityFrom: .4, opacityTo: .8 } } } } }, { key: "scatter", value: function() { return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } } } }, { key: "heatmap", value: function() { return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square", size: 10, offsetY: 2 } }, grid: { padding: { right: 20 } } } } }, { key: "treemap", value: function() { return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } } } }, { key: "pie", value: function() { return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function(t) { return t.toFixed(1) + "%" }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } } } }, { key: "donut", value: function() { return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(t) { return t.toFixed(1) + "%" }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: .35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } } } }, { key: "polarArea", value: function() { return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount ? this.opts.yaxis[0].tickAmount : 6, { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(t) { return t.toFixed(1) + "%" }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: .7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } } } }, { key: "radar", value: function() { return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 3, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: .2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1 }, xaxis: { labels: { formatter: function(t) { return t }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } } } }, { key: "radialBar", value: function() { return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: .4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 } } } }, { key: "_getBoxTooltip", value: function(t, e, i, n, a) { var s = t.globals.seriesCandleO[e][i],
                        o = t.globals.seriesCandleH[e][i],
                        r = t.globals.seriesCandleM[e][i],
                        l = t.globals.seriesCandleL[e][i],
                        h = t.globals.seriesCandleC[e][i]; return t.config.series[e].type && t.config.series[e].type !== a ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name ? t.config.series[e].name : "series-" + (e + 1), ": <strong>").concat(t.globals.series[e][i], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">') + "<div>".concat(n[0], ': <span class="value">') + s + "</span></div>" + "<div>".concat(n[1], ': <span class="value">') + o + "</span></div>" + (r ? "<div>".concat(n[2], ': <span class="value">') + r + "</span></div>" : "") + "<div>".concat(n[3], ': <span class="value">') + l + "</span></div>" + "<div>".concat(n[4], ': <span class="value">') + h + "</span></div></div>" } }]), t }(),
        E = function() {
            function t(e) { n(this, t), this.opts = e } return s(t, [{ key: "init", value: function(t) { var e = t.responsiveOverride,
                        n = this.opts,
                        a = new A,
                        s = new M(n);
                    this.chartType = n.chart.type, "histogram" === this.chartType && (n.chart.type = "bar", n = g.extend({ plotOptions: { bar: { columnWidth: "99.99%" } } }, n)), n = this.extendYAxis(n), n = this.extendAnnotations(n); var o = a.init(),
                        r = {}; if (n && "object" === i(n)) { var l = {};
                        l = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "histogram", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(n.chart.type) ? s[n.chart.type]() : s.line(), n.chart.brush && n.chart.brush.enabled && (l = s.brush(l)), n.chart.stacked && "100%" === n.chart.stackType && (n = s.stacked100(n)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(n), n.xaxis = n.xaxis || window.Apex.xaxis || {}, e || (n.xaxis.convertedCatToNumeric = !1), ((n = this.checkForCatToNumericXAxis(this.chartType, l, n)).chart.sparkline && n.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (l = s.sparkline(l)), r = g.extend(o, l) } var h = g.extend(r, window.Apex); return o = g.extend(h, n), this.handleUserInputErrors(o) } }, { key: "checkForCatToNumericXAxis", value: function(t, e, i) { var n = new M(i),
                        a = ("bar" === t || "boxPlot" === t) && i.plotOptions && i.plotOptions.bar && i.plotOptions.bar.horizontal,
                        s = "pie" === t || "polarArea" === t || "donut" === t || "radar" === t || "radialBar" === t || "heatmap" === t,
                        o = "datetime" !== i.xaxis.type && "numeric" !== i.xaxis.type,
                        r = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : e.xaxis && e.xaxis.tickPlacement; return a || s || !o || "between" === r || (i = n.convertCatToNumeric(i)), i } }, { key: "extendYAxis", value: function(t, e) { var i = new A;
                    (void 0 === t.yaxis || !t.yaxis || Array.isArray(t.yaxis) && 0 === t.yaxis.length) && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = g.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [g.extend(i.yAxis, t.yaxis)] : t.yaxis = g.extendArray(t.yaxis, i.yAxis); var n = !1;
                    t.yaxis.forEach((function(t) { t.logarithmic && (n = !0) })); var a = t.series; return e && !a && (a = e.config.series), n && a.length !== t.yaxis.length && a.length && (t.yaxis = a.map((function(e, n) { if (e.name || (a[n].name = "series-".concat(n + 1)), t.yaxis[n]) return t.yaxis[n].seriesName = a[n].name, t.yaxis[n]; var s = g.extend(i.yAxis, t.yaxis[0]); return s.show = !1, s }))), n && a.length > 1 && a.length !== t.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."), t } }, { key: "extendAnnotations", value: function(t) { return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), this.extendPointAnnotations(t) } }, { key: "extendYAxisAnnotations", value: function(t) { var e = new A; return t.annotations.yaxis = g.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t } }, { key: "extendXAxisAnnotations", value: function(t) { var e = new A; return t.annotations.xaxis = g.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t } }, { key: "extendPointAnnotations", value: function(t) { var e = new A; return t.annotations.points = g.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t } }, { key: "checkForDarkTheme", value: function(t) { t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.chart.background || (t.chart.background = "#424242"), t.theme.palette || (t.theme.palette = "palette4")) } }, { key: "handleUserInputErrors", value: function(t) { var e = t; if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false."); if ("bar" === e.chart.type && e.plotOptions.bar.horizontal) { if (e.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                        e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1 } return "bar" !== e.chart.type && "rangeBar" !== e.chart.type || e.tooltip.shared && "barWidth" === e.xaxis.crosshairs.width && e.series.length > 1 && (e.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e.chart.type && "boxPlot" !== e.chart.type || e.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e.chart.type, " chart is not supported.")), e.yaxis[0].reversed = !1), e } }]), t }(),
        z = function() {
            function t() { n(this, t) } return s(t, [{ key: "initGlobalVars", value: function(t) { t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleM = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRange = [], t.seriesPercent = [], t.seriesGoals = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.hasGroups = !1, t.groups = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.xaxisLabelsCount = 0, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0 } }, { key: "globalVars", value: function(t) { return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], goldenPadding: 35, invalidLogScale: !1, ignoreYAxisIndexes: [], yAxisSameScaleIndices: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled, panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan, selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, easing: null, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null } } }, { key: "init", value: function(t) { var e = this.globalVars(t); return this.initGlobalVars(e), e.initialConfig = g.extend({}, t), e.initialSeries = g.clone(t.series), e.lastXAxis = g.clone(e.initialConfig.xaxis), e.lastYAxis = g.clone(e.initialConfig.yaxis), e } }]), t }(),
        I = function() {
            function t(e) { n(this, t), this.opts = e } return s(t, [{ key: "init", value: function() { var t = new E(this.opts).init({ responsiveOverride: !1 }); return { config: t, globals: (new z).init(t) } } }]), t }(),
        O = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.opts = null, this.seriesIndex = 0 } return s(t, [{ key: "clippedImgArea", value: function(t) { var e = this.w,
                        i = e.config,
                        n = parseInt(e.globals.gridWidth, 10),
                        a = parseInt(e.globals.gridHeight, 10),
                        s = n > a ? n : a,
                        o = t.image,
                        r = 0,
                        l = 0;
                    void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (r = i.fill.image.width + 1, l = i.fill.image.height) : (r = s + 1, l = s) : (r = t.width, l = t.height); var h = document.createElementNS(e.globals.SVGNS, "pattern");
                    v.setAttrs(h, { id: t.patternID, patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse", width: r + "px", height: l + "px" }); var c = document.createElementNS(e.globals.SVGNS, "image");
                    h.appendChild(c), c.setAttributeNS(window.SVG.xlink, "href", o), v.setAttrs(c, { x: 0, y: 0, preserveAspectRatio: "none", width: r + "px", height: l + "px" }), c.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(h) } }, { key: "getSeriesIndex", value: function(t) { var e = this.w; return ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart.type || "treemap" === e.config.chart.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex } }, { key: "fillPath", value: function(t) { var e = this.w;
                    this.opts = t; var i, n, a, s = this.w.config;
                    this.seriesIndex = this.getSeriesIndex(t); var o = this.getFillColors()[this.seriesIndex];
                    void 0 !== e.globals.seriesColors[this.seriesIndex] && (o = e.globals.seriesColors[this.seriesIndex]), "function" == typeof o && (o = o({ seriesIndex: this.seriesIndex, dataPointIndex: t.dataPointIndex, value: t.value, w: e })); var r = t.fillType ? t.fillType : this.getFillType(this.seriesIndex),
                        l = Array.isArray(s.fill.opacity) ? s.fill.opacity[this.seriesIndex] : s.fill.opacity;
                    t.color && (o = t.color); var h = o; if (-1 === o.indexOf("rgb") ? o.length < 9 && (h = g.hexToRgba(o, l)) : o.indexOf("rgba") > -1 && (l = g.getOpacityFromRGBA(o)), t.opacity && (l = t.opacity), "pattern" === r && (n = this.handlePatternFill({ fillConfig: t.fillConfig, patternFill: n, fillColor: o, fillOpacity: l, defaultColor: h })), "gradient" === r && (a = this.handleGradientFill({ fillConfig: t.fillConfig, fillColor: o, fillOpacity: l, i: this.seriesIndex })), "image" === r) { var c = s.fill.image.src,
                            d = t.patternID ? t.patternID : "";
                        this.clippedImgArea({ opacity: l, image: Array.isArray(c) ? t.seriesNumber < c.length ? c[t.seriesNumber] : c[0] : c, width: t.width ? t.width : void 0, height: t.height ? t.height : void 0, patternUnits: t.patternUnits, patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(d) }), i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(d, ")") } else i = "gradient" === r ? a : "pattern" === r ? n : h; return t.solid && (i = h), i } }, { key: "getFillType", value: function(t) { var e = this.w; return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type } }, { key: "getFillColors", value: function() { var t = this.w,
                        e = t.config,
                        i = this.opts,
                        n = []; return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? Array.isArray(t.globals.stroke.colors) ? n = t.globals.stroke.colors : n.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? n = t.globals.fill.colors : n.push(t.globals.fill.colors) : "line" === e.chart.type ? Array.isArray(t.globals.stroke.colors) ? n = t.globals.stroke.colors : n.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? n = t.globals.fill.colors : n.push(t.globals.fill.colors), void 0 !== i.fillColors && (n = [], Array.isArray(i.fillColors) ? n = i.fillColors.slice() : n.push(i.fillColors)), n } }, { key: "handlePatternFill", value: function(t) { var e = t.fillConfig,
                        i = (t.patternFill, t.fillColor),
                        n = t.fillOpacity,
                        a = t.defaultColor,
                        s = this.w.config.fill;
                    e && (s = e); var o = this.opts,
                        r = new v(this.ctx),
                        l = Array.isArray(s.pattern.strokeWidth) ? s.pattern.strokeWidth[this.seriesIndex] : s.pattern.strokeWidth,
                        h = i; return Array.isArray(s.pattern.style) ? void 0 !== s.pattern.style[o.seriesNumber] ? r.drawPattern(s.pattern.style[o.seriesNumber], s.pattern.width, s.pattern.height, h, l, n) : a : r.drawPattern(s.pattern.style, s.pattern.width, s.pattern.height, h, l, n) } }, { key: "handleGradientFill", value: function(t) { var i = t.fillColor,
                        n = t.fillOpacity,
                        a = t.fillConfig,
                        s = t.i,
                        o = this.w.config.fill;
                    a && (o = e(e({}, o), a)); var r, l = this.opts,
                        h = new v(this.ctx),
                        c = new g,
                        d = o.gradient.type,
                        u = i,
                        p = void 0 === o.gradient.opacityFrom ? n : Array.isArray(o.gradient.opacityFrom) ? o.gradient.opacityFrom[s] : o.gradient.opacityFrom;
                    u.indexOf("rgba") > -1 && (p = g.getOpacityFromRGBA(u)); var f = void 0 === o.gradient.opacityTo ? n : Array.isArray(o.gradient.opacityTo) ? o.gradient.opacityTo[s] : o.gradient.opacityTo; if (void 0 === o.gradient.gradientToColors || 0 === o.gradient.gradientToColors.length) r = "dark" === o.gradient.shade ? c.shadeColor(-1 * parseFloat(o.gradient.shadeIntensity), i.indexOf("rgb") > -1 ? g.rgb2hex(i) : i) : c.shadeColor(parseFloat(o.gradient.shadeIntensity), i.indexOf("rgb") > -1 ? g.rgb2hex(i) : i);
                    else if (o.gradient.gradientToColors[l.seriesNumber]) { var m = o.gradient.gradientToColors[l.seriesNumber];
                        r = m, m.indexOf("rgba") > -1 && (f = g.getOpacityFromRGBA(m)) } else r = i; if (o.gradient.gradientFrom && (u = o.gradient.gradientFrom), o.gradient.gradientTo && (r = o.gradient.gradientTo), o.gradient.inverseColors) { var x = u;
                        u = r, r = x } return u.indexOf("rgb") > -1 && (u = g.rgb2hex(u)), r.indexOf("rgb") > -1 && (r = g.rgb2hex(r)), h.drawGradient(d, u, r, p, f, l.size, o.gradient.stops, o.gradient.colorStops, s) } }]), t }(),
        D = function() {
            function t(e, i) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "setGlobalMarkerSize", value: function() { var t = this.w; if (t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size], t.globals.markers.size.length > 0) { if (t.globals.markers.size.length < t.globals.series.length + 1)
                            for (var e = 0; e <= t.globals.series.length; e++) void 0 === t.globals.markers.size[e] && t.globals.markers.size.push(t.globals.markers.size[0]) } else t.globals.markers.size = t.config.series.map((function(e) { return t.config.markers.size })) } }, { key: "plotChartMarkers", value: function(t, e, i, n) { var a, s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = this.w,
                        r = e,
                        l = t,
                        h = null,
                        c = new v(this.ctx),
                        d = o.config.markers.discrete && o.config.markers.discrete.length; if ((o.globals.markers.size[e] > 0 || s || d) && (h = c.group({ class: s || d ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(o.globals.cuid, ")")), Array.isArray(l.x))
                        for (var u = 0; u < l.x.length; u++) { var p = i;
                            1 === i && 0 === u && (p = 0), 1 === i && 1 === u && (p = 1); var f = "apexcharts-marker"; "line" !== o.config.chart.type && "area" !== o.config.chart.type || o.globals.comboCharts || o.config.tooltip.intersect || (f += " no-pointer-events"); var m = Array.isArray(o.config.markers.size) ? o.globals.markers.size[e] > 0 : o.config.markers.size > 0; if (m || s || d) { g.isNumber(l.y[u]) ? f += " w".concat(g.randomId()) : f = "apexcharts-nullpoint"; var b = this.getMarkerConfig({ cssClass: f, seriesIndex: e, dataPointIndex: p });
                                o.config.series[r].data[p] && (o.config.series[r].data[p].fillColor && (b.pointFillColor = o.config.series[r].data[p].fillColor), o.config.series[r].data[p].strokeColor && (b.pointStrokeColor = o.config.series[r].data[p].strokeColor)), n && (b.pSize = n), (a = c.drawMarker(l.x[u], l.y[u], b)).attr("rel", p), a.attr("j", p), a.attr("index", e), a.node.setAttribute("default-marker-size", b.pSize); var y = new x(this.ctx);
                                y.setSelectionFilter(a, e, p), this.addEvents(a), h && h.add(a) } else void 0 === o.globals.pointsArray[e] && (o.globals.pointsArray[e] = []), o.globals.pointsArray[e].push([l.x[u], l.y[u]]) }
                    return h } }, { key: "getMarkerConfig", value: function(t) { var e = t.cssClass,
                        i = t.seriesIndex,
                        n = t.dataPointIndex,
                        a = void 0 === n ? null : n,
                        s = t.finishRadius,
                        o = void 0 === s ? null : s,
                        r = this.w,
                        l = this.getMarkerStyle(i),
                        h = r.globals.markers.size[i],
                        c = r.config.markers; return null !== a && c.discrete.length && c.discrete.map((function(t) { t.seriesIndex === i && t.dataPointIndex === a && (l.pointStrokeColor = t.strokeColor, l.pointFillColor = t.fillColor, h = t.size, l.pointShape = t.shape) })), { pSize: null === o ? h : o, pRadius: c.radius, width: Array.isArray(c.width) ? c.width[i] : c.width, height: Array.isArray(c.height) ? c.height[i] : c.height, pointStrokeWidth: Array.isArray(c.strokeWidth) ? c.strokeWidth[i] : c.strokeWidth, pointStrokeColor: l.pointStrokeColor, pointFillColor: l.pointFillColor, shape: l.pointShape || (Array.isArray(c.shape) ? c.shape[i] : c.shape), class: e, pointStrokeOpacity: Array.isArray(c.strokeOpacity) ? c.strokeOpacity[i] : c.strokeOpacity, pointStrokeDashArray: Array.isArray(c.strokeDashArray) ? c.strokeDashArray[i] : c.strokeDashArray, pointFillOpacity: Array.isArray(c.fillOpacity) ? c.fillOpacity[i] : c.fillOpacity, seriesIndex: i } } }, { key: "addEvents", value: function(t) { var e = this.w,
                        i = new v(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), { passive: !0 }) } }, { key: "getMarkerStyle", value: function(t) { var e = this.w,
                        i = e.globals.markers.colors,
                        n = e.config.markers.strokeColor || e.config.markers.strokeColors; return { pointStrokeColor: Array.isArray(n) ? n[t] : n, pointFillColor: Array.isArray(i) ? i[t] : i } } }]), t }(),
        R = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled } return s(t, [{ key: "draw", value: function(t, e, i) { var n = this.w,
                        a = new v(this.ctx),
                        s = i.realIndex,
                        o = i.pointsPos,
                        r = i.zRatio,
                        l = i.elParent,
                        h = a.group({ class: "apexcharts-series-markers apexcharts-series-".concat(n.config.chart.type) }); if (h.attr("clip-path", "url(#gridRectMarkerMask".concat(n.globals.cuid, ")")), Array.isArray(o.x))
                        for (var c = 0; c < o.x.length; c++) { var d = e + 1,
                                u = !0;
                            0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1); var p = 0,
                                f = n.globals.markers.size[s]; if (r !== 1 / 0) { var g = n.config.plotOptions.bubble;
                                f = n.globals.seriesZ[s][d], g.zScaling && (f /= r), g.minBubbleRadius && f < g.minBubbleRadius && (f = g.minBubbleRadius), g.maxBubbleRadius && f > g.maxBubbleRadius && (f = g.maxBubbleRadius) }
                            n.config.chart.animations.enabled || (p = f); var m = o.x[c],
                                x = o.y[c]; if (p = p || 0, null !== x && void 0 !== n.globals.series[s][d] || (u = !1), u) { var b = this.drawPoint(m, x, p, f, s, d, e);
                                h.add(b) }
                            l.add(h) } } }, { key: "drawPoint", value: function(t, e, i, n, a, s, o) { var r = this.w,
                        l = a,
                        h = new m(this.ctx),
                        c = new x(this.ctx),
                        d = new O(this.ctx),
                        u = new D(this.ctx),
                        p = new v(this.ctx),
                        f = u.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: l, dataPointIndex: s, finishRadius: "bubble" === r.config.chart.type || r.globals.comboCharts && r.config.series[a] && "bubble" === r.config.series[a].type ? n : null });
                    n = f.pSize; var g, b = d.fillPath({ seriesNumber: a, dataPointIndex: s, color: f.pointFillColor, patternUnits: "objectBoundingBox", value: r.globals.series[a][o] }); if ("circle" === f.shape ? g = p.drawCircle(i) : "square" !== f.shape && "rect" !== f.shape || (g = p.drawRect(0, 0, f.width - f.pointStrokeWidth / 2, f.height - f.pointStrokeWidth / 2, f.pRadius)), r.config.series[l].data[s] && r.config.series[l].data[s].fillColor && (b = r.config.series[l].data[s].fillColor), g.attr({ x: t - f.width / 2 - f.pointStrokeWidth / 2, y: e - f.height / 2 - f.pointStrokeWidth / 2, cx: t, cy: e, fill: b, "fill-opacity": f.pointFillOpacity, stroke: f.pointStrokeColor, r: n, "stroke-width": f.pointStrokeWidth, "stroke-dasharray": f.pointStrokeDashArray, "stroke-opacity": f.pointStrokeOpacity }), r.config.chart.dropShadow.enabled) { var y = r.config.chart.dropShadow;
                        c.dropShadow(g, y, a) } if (!this.initialAnim || r.globals.dataChanged || r.globals.resized) r.globals.animationEnded = !0;
                    else { var w = r.config.chart.animations.speed;
                        h.animateMarker(g, 0, "circle" === f.shape ? n : { width: f.width, height: f.height }, w, r.globals.easing, (function() { window.setTimeout((function() { h.animationCompleted(g) }), 100) })) } if (r.globals.dataChanged && "circle" === f.shape)
                        if (this.dynamicAnim) { var _, k, S, A, C = r.config.chart.animations.dynamicAnimation.speed;
                            null != (A = r.globals.previousPaths[a] && r.globals.previousPaths[a][o]) && (_ = A.x, k = A.y, S = void 0 !== A.r ? A.r : n); for (var P = 0; P < r.globals.collapsedSeries.length; P++) r.globals.collapsedSeries[P].index === a && (C = 1, n = 0);
                            0 === t && 0 === e && (n = 0), h.animateCircle(g, { cx: _, cy: k, r: S }, { cx: t, cy: e, r: n }, C, r.globals.easing) } else g.attr({ r: n });
                    return g.attr({ rel: s, j: s, index: a, "default-marker-size": n }), c.setSelectionFilter(g, a, s), u.addEvents(g), g.node.classList.add("apexcharts-marker"), g } }, { key: "centerTextInBubble", value: function(t) { var e = this.w; return { y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4 } } }]), t }(),
        N = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "dataLabelsCorrection", value: function(t, e, i, n, a, s, o) { var r = this.w,
                        l = !1,
                        h = new v(this.ctx).getTextRects(i, o),
                        c = h.width,
                        d = h.height;
                    e < 0 && (e = 0), e > r.globals.gridHeight + d && (e = r.globals.gridHeight + d / 2), void 0 === r.globals.dataLabelsRects[n] && (r.globals.dataLabelsRects[n] = []), r.globals.dataLabelsRects[n].push({ x: t, y: e, width: c, height: d }); var u = r.globals.dataLabelsRects[n].length - 2,
                        p = void 0 !== r.globals.lastDrawnDataLabelsIndexes[n] ? r.globals.lastDrawnDataLabelsIndexes[n][r.globals.lastDrawnDataLabelsIndexes[n].length - 1] : 0; if (void 0 !== r.globals.dataLabelsRects[n][u]) { var f = r.globals.dataLabelsRects[n][p];
                        (t > f.x + f.width + 2 || e > f.y + f.height + 2 || t + c < f.x) && (l = !0) } return (0 === a || s) && (l = !0), { x: t, y: e, textRects: h, drawnextLabel: l } } }, { key: "drawDataLabel", value: function(t) { var e = this,
                        i = t.type,
                        n = t.pos,
                        a = t.i,
                        s = t.j,
                        o = t.isRangeStart,
                        r = t.strokeWidth,
                        l = void 0 === r ? 2 : r,
                        h = this.w,
                        c = new v(this.ctx),
                        d = h.config.dataLabels,
                        u = 0,
                        p = 0,
                        f = s,
                        g = null; if (!d.enabled || !Array.isArray(n.x)) return g;
                    g = c.group({ class: "apexcharts-data-labels" }); for (var m = 0; m < n.x.length; m++)
                        if (u = n.x[m] + d.offsetX, p = n.y[m] + d.offsetY + l, !isNaN(u)) { 1 === s && 0 === m && (f = 0), 1 === s && 1 === m && (f = 1); var x = h.globals.series[a][f]; "rangeArea" === i && (x = o ? h.globals.seriesRangeStart[a][f] : h.globals.seriesRangeEnd[a][f]); var b = "",
                                y = function(t) { return h.config.dataLabels.formatter(t, { ctx: e.ctx, seriesIndex: a, dataPointIndex: f, w: h }) }; "bubble" === h.config.chart.type ? (b = y(x = h.globals.seriesZ[a][f]), p = n.y[m], p = new R(this.ctx).centerTextInBubble(p, a, f).y) : void 0 !== x && (b = y(x)), this.plotDataLabelsText({ x: u, y: p, text: b, i: a, j: f, parent: g, offsetCorrection: !0, dataLabelsConfig: h.config.dataLabels }) }
                    return g } }, { key: "plotDataLabelsText", value: function(t) { var e = this.w,
                        i = new v(this.ctx),
                        n = t.x,
                        a = t.y,
                        s = t.i,
                        o = t.j,
                        r = t.text,
                        l = t.textAnchor,
                        h = t.fontSize,
                        c = t.parent,
                        d = t.dataLabelsConfig,
                        u = t.color,
                        p = t.alwaysDrawDataLabel,
                        f = t.offsetCorrection; if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(s) < 0)) { var g = { x: n, y: a, drawnextLabel: !0, textRects: null };
                        f && (g = this.dataLabelsCorrection(n, a, r, s, o, p, parseInt(d.style.fontSize, 10))), e.globals.zoomed || (n = g.x, a = g.y), g.textRects && (n < -10 - g.textRects.width || n > e.globals.gridWidth + g.textRects.width + 10) && (r = ""); var m = e.globals.dataLabels.style.colors[s];
                        (("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || e.config.dataLabels.distributed) && (m = e.globals.dataLabels.style.colors[o]), "function" == typeof m && (m = m({ series: e.globals.series, seriesIndex: s, dataPointIndex: o, w: e })), u && (m = u); var b = d.offsetX,
                            y = d.offsetY; if ("bar" !== e.config.chart.type && "rangeBar" !== e.config.chart.type || (b = 0, y = 0), g.drawnextLabel) { var w = i.drawText({ width: 100, height: parseInt(d.style.fontSize, 10), x: n + b, y: a + y, foreColor: m, textAnchor: l || d.textAnchor, text: r, fontSize: h || d.style.fontSize, fontFamily: d.style.fontFamily, fontWeight: d.style.fontWeight || "normal" }); if (w.attr({ class: "apexcharts-datalabel", cx: n, cy: a }), d.dropShadow.enabled) { var _ = d.dropShadow;
                                new x(this.ctx).dropShadow(w, _) }
                            c.add(w), void 0 === e.globals.lastDrawnDataLabelsIndexes[s] && (e.globals.lastDrawnDataLabelsIndexes[s] = []), e.globals.lastDrawnDataLabelsIndexes[s].push(o) } } } }, { key: "addBackgroundToDataLabel", value: function(t, e) { var i = this.w,
                        n = i.config.dataLabels.background,
                        a = n.padding,
                        s = n.padding / 2,
                        o = e.width,
                        r = e.height,
                        l = new v(this.ctx).drawRect(e.x - a, e.y - s / 2, o + 2 * a, r + s, n.borderRadius, "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, n.opacity, n.borderWidth, n.borderColor); return n.dropShadow.enabled && new x(this.ctx).dropShadow(l, n.dropShadow), l } }, { key: "dataLabelsBackground", value: function() { var t = this.w; if ("bubble" !== t.config.chart.type)
                        for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) { var n = e[i],
                                a = n.getBBox(),
                                s = null; if (a.width && a.height && (s = this.addBackgroundToDataLabel(n, a)), s) { n.parentNode.insertBefore(s.node, n); var o = n.getAttribute("fill");!t.config.chart.animations.enabled || t.globals.resized || t.globals.dataChanged ? s.attr({ fill: o }) : s.animate().attr({ fill: o }), n.setAttribute("fill", t.config.dataLabels.background.foreColor) } } } }, { key: "bringForward", value: function() { for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), n = 0; n < e.length; n++) i && i.insertBefore(e[n], i.nextSibling) } }]), t }(),
        F = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.legendInactiveClass = "legend-mouseover-inactive" } return s(t, [{ key: "getAllSeriesEls", value: function() { return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series") } }, { key: "getSeriesByName", value: function(t) { return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(g.escapeString(t), "']")) } }, { key: "isSeriesHidden", value: function(t) { var e = this.getSeriesByName(t),
                        i = parseInt(e.getAttribute("data:realIndex"), 10); return { isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex: i } } }, { key: "addCollapsedClassToSeries", value: function(t, e) { var i = this.w;

                    function n(i) { for (var n = 0; n < i.length; n++) i[n].index === e && t.node.classList.add("apexcharts-series-collapsed") }
                    n(i.globals.collapsedSeries), n(i.globals.ancillaryCollapsedSeries) } }, { key: "toggleSeries", value: function(t) { var e = this.isSeriesHidden(t); return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, e.isHidden), e.isHidden } }, { key: "showSeries", value: function(t) { var e = this.isSeriesHidden(t);
                    e.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !0) } }, { key: "hideSeries", value: function(t) { var e = this.isSeriesHidden(t);
                    e.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !1) } }, { key: "resetSeries", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = this.w,
                        a = g.clone(n.globals.initialSeries);
                    n.globals.previousPaths = [], i ? (n.globals.collapsedSeries = [], n.globals.ancillaryCollapsedSeries = [], n.globals.collapsedSeriesIndices = [], n.globals.ancillaryCollapsedSeriesIndices = []) : a = this.emptyCollapsedSeries(a), n.config.series = a, t && (e && (n.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(a, n.config.chart.animations.dynamicAnimation.enabled)) } }, { key: "emptyCollapsedSeries", value: function(t) { for (var e = this.w, i = 0; i < t.length; i++) e.globals.collapsedSeriesIndices.indexOf(i) > -1 && (t[i].data = []); return t } }, { key: "toggleSeriesOnHover", value: function(t, e) { var i = this.w;
                    e || (e = t.target); var n = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels"); if ("mousemove" === t.type) { var a = parseInt(e.getAttribute("rel"), 10) - 1,
                            s = null,
                            o = null;
                        i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? (s = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a, "']")), o = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a, "']"))) : s = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "']")) : s = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "'] path")); for (var r = 0; r < n.length; r++) n[r].classList.add(this.legendInactiveClass);
                        null !== s && (i.globals.axisCharts || s.parentNode.classList.remove(this.legendInactiveClass), s.classList.remove(this.legendInactiveClass), null !== o && o.classList.remove(this.legendInactiveClass)) } else if ("mouseout" === t.type)
                        for (var l = 0; l < n.length; l++) n[l].classList.remove(this.legendInactiveClass) } }, { key: "highlightRangeInSeries", value: function(t, e) { var i = this,
                        n = this.w,
                        a = n.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),
                        s = function(t) { for (var e = 0; e < a.length; e++) a[e].classList[t](i.legendInactiveClass) }; if ("mousemove" === t.type) { var o = parseInt(e.getAttribute("rel"), 10) - 1;
                        s("add"),
                            function(t) { for (var e = 0; e < a.length; e++) { var n = parseInt(a[e].getAttribute("val"), 10);
                                    n >= t.from && n <= t.to && a[e].classList.remove(i.legendInactiveClass) } }(n.config.plotOptions.heatmap.colorScale.ranges[o]) } else "mouseout" === t.type && s("remove") } }, { key: "getActiveConfigSeriesIndex", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "asc",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        i = this.w,
                        n = 0; if (i.config.series.length > 1)
                        for (var a = i.config.series.map((function(t, n) { return t.data && t.data.length > 0 && -1 === i.globals.collapsedSeriesIndices.indexOf(n) && (!i.globals.comboCharts || 0 === e.length || e.length && e.indexOf(i.config.series[n].type) > -1) ? n : -1 })), s = "asc" === t ? 0 : a.length - 1;
                            "asc" === t ? s < a.length : s >= 0;
                            "asc" === t ? s++ : s--)
                            if (-1 !== a[s]) { n = a[s]; break }
                    return n } }, { key: "getBarSeriesIndices", value: function() { return this.w.globals.comboCharts ? this.w.config.series.map((function(t, e) { return "bar" === t.type || "column" === t.type ? e : -1 })).filter((function(t) { return -1 !== t })) : this.w.config.series.map((function(t, e) { return e })) } }, { key: "getPreviousPaths", value: function() { var t = this.w;

                    function e(e, i, n) { for (var a = e[i].childNodes, s = { type: n, paths: [], realIndex: e[i].getAttribute("data:realIndex") }, o = 0; o < a.length; o++)
                            if (a[o].hasAttribute("pathTo")) { var r = a[o].getAttribute("pathTo");
                                s.paths.push({ d: r }) }
                        t.globals.previousPaths.push(s) }
                    t.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach((function(i) { for (var n, a = (n = i, t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(n, "-series .apexcharts-series"))), s = 0; s < a.length; s++) e(a, s, i) })), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter"); var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series")); if (i.length > 0)
                        for (var n = function(e) { for (var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e, "'] rect")), n = [], a = function(t) { var e = function(e) { return i[t].getAttribute(e) },
                                            a = { x: parseFloat(e("x")), y: parseFloat(e("y")), width: parseFloat(e("width")), height: parseFloat(e("height")) };
                                        n.push({ rect: a, color: i[t].getAttribute("color") }) }, s = 0; s < i.length; s++) a(s);
                                t.globals.previousPaths.push(n) }, a = 0; a < i.length; a++) n(a);
                    t.globals.axisCharts || (t.globals.previousPaths = t.globals.series) } }, { key: "handlePrevBubbleScatterPaths", value: function(t) { var e = this.w,
                        i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series")); if (i.length > 0)
                        for (var n = 0; n < i.length; n++) { for (var a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(n, "'] circle")), s = [], o = 0; o < a.length; o++) s.push({ x: a[o].getAttribute("cx"), y: a[o].getAttribute("cy"), r: a[o].getAttribute("r") });
                            e.globals.previousPaths.push(s) } } }, { key: "clearPreviousPaths", value: function() { var t = this.w;
                    t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1 } }, { key: "handleNoData", value: function() { var t = this.w,
                        e = t.config.noData,
                        i = new v(this.ctx),
                        n = t.globals.svgWidth / 2,
                        a = t.globals.svgHeight / 2,
                        s = "middle"; if (t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (n = 10, s = "start") : "right" === e.align && (n = t.globals.svgWidth - 10, s = "end"), "top" === e.verticalAlign ? a = 50 : "bottom" === e.verticalAlign && (a = t.globals.svgHeight - 50), n += e.offsetX, a = a + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, void 0 !== e.text && "" !== e.text) { var o = i.drawText({ x: n, y: a, text: e.text, textAnchor: s, fontSize: e.style.fontSize, fontFamily: e.style.fontFamily, foreColor: e.style.color, opacity: 1, class: "apexcharts-text-nodata" });
                        t.globals.dom.Paper.add(o) } } }, { key: "setNullSeriesToZeroValues", value: function(t) { for (var e = this.w, i = 0; i < t.length; i++)
                        if (0 === t[i].length)
                            for (var n = 0; n < t[e.globals.maxValsInArrayIndex].length; n++) t[i].push(0);
                    return t } }, { key: "hasAllSeriesEqualX", value: function() { for (var t = !0, e = this.w, i = this.filteredSeriesX(), n = 0; n < i.length - 1; n++)
                        if (i[n][0] !== i[n + 1][0]) { t = !1; break }
                    return e.globals.allSeriesHasEqualX = t, t } }, { key: "filteredSeriesX", value: function() { return this.w.globals.seriesX.map((function(t) { return t.length > 0 ? t : [] })) } }]), t }(),
        X = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new b(this.ctx) } return s(t, [{ key: "isMultiFormat", value: function() { return this.isFormatXY() || this.isFormat2DArray() } }, { key: "isFormatXY", value: function() { var t = this.w.config.series.slice(),
                        e = new F(this.ctx); if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0 } }, { key: "isFormat2DArray", value: function() { var t = this.w.config.series.slice(),
                        e = new F(this.ctx); if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0 } }, { key: "handleFormat2DArray", value: function(t, e) { for (var i = this.w.config, n = this.w.globals, a = "boxPlot" === i.chart.type || "boxPlot" === i.series[e].type, s = 0; s < t[e].data.length; s++)
                        if (void 0 !== t[e].data[s][1] && (Array.isArray(t[e].data[s][1]) && 4 === t[e].data[s][1].length && !a ? this.twoDSeries.push(g.parseNumber(t[e].data[s][1][3])) : t[e].data[s].length >= 5 ? this.twoDSeries.push(g.parseNumber(t[e].data[s][4])) : this.twoDSeries.push(g.parseNumber(t[e].data[s][1])), n.dataFormatXNumeric = !0), "datetime" === i.xaxis.type) { var o = new Date(t[e].data[s][0]);
                            o = new Date(o).getTime(), this.twoDSeriesX.push(o) } else this.twoDSeriesX.push(t[e].data[s][0]);
                    for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][2] && (this.threeDSeries.push(t[e].data[r][2]), n.isDataXYZ = !0) } }, { key: "handleFormatXY", value: function(t, e) { var i = this.w.config,
                        n = this.w.globals,
                        a = new P(this.ctx),
                        s = e;
                    n.collapsedSeriesIndices.indexOf(e) > -1 && (s = this.activeSeriesIndex); for (var o = 0; o < t[e].data.length; o++) void 0 !== t[e].data[o].y && (Array.isArray(t[e].data[o].y) ? this.twoDSeries.push(g.parseNumber(t[e].data[o].y[t[e].data[o].y.length - 1])) : this.twoDSeries.push(g.parseNumber(t[e].data[o].y))), void 0 !== t[e].data[o].goals && Array.isArray(t[e].data[o].goals) ? (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(t[e].data[o].goals)) : (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(null)); for (var r = 0; r < t[s].data.length; r++) { var l = "string" == typeof t[s].data[r].x,
                            h = Array.isArray(t[s].data[r].x),
                            c = !h && !!a.isValidDate(t[s].data[r].x.toString()); if (l || c)
                            if (l || i.xaxis.convertedCatToNumeric) { var d = n.isBarHorizontal && n.isRangeData; "datetime" !== i.xaxis.type || d ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[s].data[r].x)) : this.twoDSeriesX.push(a.parseDate(t[s].data[r].x)) } else "datetime" === i.xaxis.type ? this.twoDSeriesX.push(a.parseDate(t[s].data[r].x.toString())) : (n.dataFormatXNumeric = !0, n.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[s].data[r].x)));
                        else h ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[s].data[r].x)) : (n.isXNumeric = !0, n.dataFormatXNumeric = !0, this.twoDSeriesX.push(t[s].data[r].x)) } if (t[e].data[0] && void 0 !== t[e].data[0].z) { for (var u = 0; u < t[e].data.length; u++) this.threeDSeries.push(t[e].data[u].z);
                        n.isDataXYZ = !0 } } }, { key: "handleRangeData", value: function(t, e) { var i = this.w.globals,
                        n = {}; return this.isFormat2DArray() ? n = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (n = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(n.start), i.seriesRangeEnd.push(n.end), i.seriesRange.push(n.rangeUniques), i.seriesRange.forEach((function(t, e) { t && t.forEach((function(t, e) { t.y.forEach((function(e, i) { for (var n = 0; n < t.y.length; n++)
                                    if (i !== n) { var a = e.y1,
                                            s = e.y2,
                                            o = t.y[n].y1;
                                        a <= t.y[n].y2 && o <= s && (t.overlaps.indexOf(e.rangeName) < 0 && t.overlaps.push(e.rangeName), t.overlaps.indexOf(t.y[n].rangeName) < 0 && t.overlaps.push(t.y[n].rangeName)) } })) })) })), n } }, { key: "handleCandleStickBoxData", value: function(t, e) { var i = this.w.globals,
                        n = {}; return this.isFormat2DArray() ? n = this.handleCandleStickBoxDataFormat("array", t, e) : this.isFormatXY() && (n = this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e] = n.o, i.seriesCandleH[e] = n.h, i.seriesCandleM[e] = n.m, i.seriesCandleL[e] = n.l, i.seriesCandleC[e] = n.c, n } }, { key: "handleRangeDataFormat", value: function(t, e, i) { var n = [],
                        a = [],
                        s = e[i].data.filter((function(t, e, i) { return e === i.findIndex((function(e) { return e.x === t.x })) })).map((function(t, e) { return { x: t.x, overlaps: [], y: [] } })); if ("array" === t)
                        for (var o = 0; o < e[i].data.length; o++) Array.isArray(e[i].data[o]) ? (n.push(e[i].data[o][1][0]), a.push(e[i].data[o][1][1])) : (n.push(e[i].data[o]), a.push(e[i].data[o]));
                    else if ("xy" === t)
                        for (var r = function(t) { var o = Array.isArray(e[i].data[t].y),
                                    r = g.randomId(),
                                    l = e[i].data[t].x,
                                    h = { y1: o ? e[i].data[t].y[0] : e[i].data[t].y, y2: o ? e[i].data[t].y[1] : e[i].data[t].y, rangeName: r };
                                e[i].data[t].rangeName = r; var c = s.findIndex((function(t) { return t.x === l }));
                                s[c].y.push(h), n.push(h.y1), a.push(h.y2) }, l = 0; l < e[i].data.length; l++) r(l); return { start: n, end: a, rangeUniques: s } } }, { key: "handleCandleStickBoxDataFormat", value: function(t, e, i) { var n = this.w,
                        a = "boxPlot" === n.config.chart.type || "boxPlot" === n.config.series[i].type,
                        s = [],
                        o = [],
                        r = [],
                        l = [],
                        h = []; if ("array" === t)
                        if (a && 6 === e[i].data[0].length || !a && 5 === e[i].data[0].length)
                            for (var c = 0; c < e[i].data.length; c++) s.push(e[i].data[c][1]), o.push(e[i].data[c][2]), a ? (r.push(e[i].data[c][3]), l.push(e[i].data[c][4]), h.push(e[i].data[c][5])) : (l.push(e[i].data[c][3]), h.push(e[i].data[c][4]));
                        else
                            for (var d = 0; d < e[i].data.length; d++) Array.isArray(e[i].data[d][1]) && (s.push(e[i].data[d][1][0]), o.push(e[i].data[d][1][1]), a ? (r.push(e[i].data[d][1][2]), l.push(e[i].data[d][1][3]), h.push(e[i].data[d][1][4])) : (l.push(e[i].data[d][1][2]), h.push(e[i].data[d][1][3])));
                    else if ("xy" === t)
                        for (var u = 0; u < e[i].data.length; u++) Array.isArray(e[i].data[u].y) && (s.push(e[i].data[u].y[0]), o.push(e[i].data[u].y[1]), a ? (r.push(e[i].data[u].y[2]), l.push(e[i].data[u].y[3]), h.push(e[i].data[u].y[4])) : (l.push(e[i].data[u].y[2]), h.push(e[i].data[u].y[3]))); return { o: s, h: o, m: r, l: l, c: h } } }, { key: "parseDataAxisCharts", value: function(t) { var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx,
                        n = this.w.config,
                        a = this.w.globals,
                        s = new P(i),
                        o = n.labels.length > 0 ? n.labels.slice() : n.xaxis.categories.slice();
                    a.isRangeBar = "rangeBar" === n.chart.type && a.isBarHorizontal, a.hasGroups = "category" === n.xaxis.type && n.xaxis.group.groups.length > 0, a.hasGroups && (a.groups = n.xaxis.group.groups); for (var r = function() { for (var t = 0; t < o.length; t++)
                                if ("string" == typeof o[t]) { if (!s.isValidDate(o[t])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                                    e.twoDSeriesX.push(s.parseDate(o[t])) } else e.twoDSeriesX.push(o[t]) }, l = 0; l < t.length; l++) { if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[l].data) return void console.error("It is a possibility that you may have not included 'data' property in series."); if ("rangeBar" !== n.chart.type && "rangeArea" !== n.chart.type && "rangeBar" !== t[l].type && "rangeArea" !== t[l].type || (a.isRangeData = !0, a.isComboCharts ? "rangeBar" !== t[l].type && "rangeArea" !== t[l].type || this.handleRangeData(t, l) : "rangeBar" !== n.chart.type && "rangeArea" !== n.chart.type || this.handleRangeData(t, l)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, l) : this.isFormatXY() && this.handleFormatXY(t, l), "candlestick" !== n.chart.type && "candlestick" !== t[l].type && "boxPlot" !== n.chart.type && "boxPlot" !== t[l].type || this.handleCandleStickBoxData(t, l), a.series.push(this.twoDSeries), a.labels.push(this.twoDSeriesX), a.seriesX.push(this.twoDSeriesX), a.seriesGoals = this.seriesGoals, l !== this.activeSeriesIndex || this.fallbackToCategory || (a.isXNumeric = !0);
                        else { "datetime" === n.xaxis.type ? (a.isXNumeric = !0, r(), a.seriesX.push(this.twoDSeriesX)) : "numeric" === n.xaxis.type && (a.isXNumeric = !0, o.length > 0 && (this.twoDSeriesX = o, a.seriesX.push(this.twoDSeriesX))), a.labels.push(this.twoDSeriesX); var h = t[l].data.map((function(t) { return g.parseNumber(t) }));
                            a.series.push(h) }
                        a.seriesZ.push(this.threeDSeries), void 0 !== t[l].name ? a.seriesNames.push(t[l].name) : a.seriesNames.push("series-" + parseInt(l + 1, 10)), void 0 !== t[l].color ? a.seriesColors.push(t[l].color) : a.seriesColors.push(void 0) } return this.w } }, { key: "parseDataNonAxisCharts", value: function(t) { var e = this.w.globals,
                        i = this.w.config;
                    e.series = t.slice(), e.seriesNames = i.labels.slice(); for (var n = 0; n < e.series.length; n++) void 0 === e.seriesNames[n] && e.seriesNames.push("series-" + (n + 1)); return this.w } }, { key: "handleExternalLabelsData", value: function(t) { var e = this.w.config,
                        i = this.w.globals;
                    e.xaxis.categories.length > 0 ? i.labels = e.xaxis.categories : e.labels.length > 0 ? i.labels = e.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map((function(t) { t.forEach((function(t) { i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x) })) })), i.labels = i.labels.filter((function(t, e, i) { return i.indexOf(t) === e }))), e.xaxis.convertedCatToNumeric && (new M(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))) : this._generateExternalLabels(t) } }, { key: "_generateExternalLabels", value: function(t) { var e = this.w.globals,
                        i = this.w.config,
                        n = []; if (e.axisCharts) { if (e.series.length > 0)
                            if (this.isFormatXY())
                                for (var a = i.series.map((function(t, e) { return t.data.filter((function(t, e, i) { return i.findIndex((function(e) { return e.x === t.x })) === e })) })), s = a.reduce((function(t, e, i, n) { return n[t].length > e.length ? t : i }), 0), o = 0; o < a[s].length; o++) n.push(o + 1);
                            else
                                for (var r = 0; r < e.series[e.maxValsInArrayIndex].length; r++) n.push(r + 1);
                        e.seriesX = []; for (var l = 0; l < t.length; l++) e.seriesX.push(n);
                        e.isXNumeric = !0 } if (0 === n.length) { n = e.axisCharts ? [] : e.series.map((function(t, e) { return e + 1 })); for (var h = 0; h < t.length; h++) e.seriesX.push(n) }
                    e.labels = n, i.xaxis.convertedCatToNumeric && (e.categoryLabels = n.map((function(t) { return i.xaxis.labels.formatter(t) }))), e.noLabelsProvided = !0 } }, { key: "parseData", value: function(t) { var e = this.w,
                        i = e.config,
                        n = e.globals; if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), n.axisCharts ? (this.parseDataAxisCharts(t), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t), "bar" === i.chart.type && i.chart.stacked) { var a = new F(this.ctx);
                        n.series = a.setNullSeriesToZeroValues(n.series) }
                    this.coreUtils.getSeriesTotals(), n.axisCharts && (n.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals()), this.coreUtils.getPercentSeries(), n.dataFormatXNumeric || n.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t); for (var s = this.coreUtils.getCategoryLabels(n.labels), o = 0; o < s.length; o++)
                        if (Array.isArray(s[o])) { n.isMultiLineX = !0; break } } }, { key: "excludeCollapsedSeriesInYAxis", value: function() { var t = this,
                        e = this.w;
                    e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map((function(i, n) { if (t.w.globals.isMultipleYAxis && !e.config.chart.stacked) return i.index })) } }]), t }(),
        H = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.tooltipKeyFormat = "dd MMM" } return s(t, [{ key: "xLabelFormat", value: function(t, e, i, n) { var a = this.w; if ("datetime" === a.config.xaxis.type && void 0 === a.config.xaxis.labels.formatter && void 0 === a.config.tooltip.x.formatter) { var s = new P(this.ctx); return s.formatDate(s.getDate(e), a.config.tooltip.x.format) } return t(e, i, n) } }, { key: "defaultGeneralFormatter", value: function(t) { return Array.isArray(t) ? t.map((function(t) { return t })) : t } }, { key: "defaultYFormatter", value: function(t, e, i) { var n = this.w; return g.isNumber(t) && (t = 0 !== n.globals.yValueDecimal ? t.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : n.globals.yValueDecimal) : n.globals.maxYArr[i] - n.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0)), t } }, { key: "setLabelFormatters", value: function() { var t = this,
                        e = this.w; return e.globals.xaxisTooltipFormatter = function(e) { return t.defaultGeneralFormatter(e) }, e.globals.ttKeyFormatter = function(e) { return t.defaultGeneralFormatter(e) }, e.globals.ttZFormatter = function(t) { return t }, e.globals.legendFormatter = function(e) { return t.defaultGeneralFormatter(e) }, void 0 !== e.config.xaxis.labels.formatter ? e.globals.xLabelFormatter = e.config.xaxis.labels.formatter : e.globals.xLabelFormatter = function(t) { if (g.isNumber(t)) { if (!e.config.xaxis.convertedCatToNumeric && "numeric" === e.config.xaxis.type) { if (g.isNumber(e.config.xaxis.decimalsInFloat)) return t.toFixed(e.config.xaxis.decimalsInFloat); var i = e.globals.maxX - e.globals.minX; return i > 0 && i < 100 ? t.toFixed(1) : t.toFixed(0) } return e.globals.isBarHorizontal && e.globals.maxY - e.globals.minYArr < 4 ? t.toFixed(1) : t.toFixed(0) } return t }, "function" == typeof e.config.tooltip.x.formatter ? e.globals.ttKeyFormatter = e.config.tooltip.x.formatter : e.globals.ttKeyFormatter = e.globals.xLabelFormatter, "function" == typeof e.config.xaxis.tooltip.formatter && (e.globals.xaxisTooltipFormatter = e.config.xaxis.tooltip.formatter), (Array.isArray(e.config.tooltip.y) || void 0 !== e.config.tooltip.y.formatter) && (e.globals.ttVal = e.config.tooltip.y), void 0 !== e.config.tooltip.z.formatter && (e.globals.ttZFormatter = e.config.tooltip.z.formatter), void 0 !== e.config.legend.formatter && (e.globals.legendFormatter = e.config.legend.formatter), e.config.yaxis.forEach((function(i, n) { void 0 !== i.labels.formatter ? e.globals.yLabelFormatters[n] = i.labels.formatter : e.globals.yLabelFormatters[n] = function(a) { return e.globals.xyCharts ? Array.isArray(a) ? a.map((function(e) { return t.defaultYFormatter(e, i, n) })) : t.defaultYFormatter(a, i, n) : a } })), e.globals } }, { key: "heatmapLabelFormatters", value: function() { var t = this.w; if ("heatmap" === t.config.chart.type) { t.globals.yAxisScale[0].result = t.globals.seriesNames.slice(); var e = t.globals.seriesNames.reduce((function(t, e) { return t.length > e.length ? t : e }), 0);
                        t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e } } }]), t }(),
        B = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "getLabel", value: function(t, e, i, n) { var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px",
                        o = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                        r = this.w,
                        l = void 0 === t[n] ? "" : t[n],
                        h = l,
                        c = r.globals.xLabelFormatter,
                        d = r.config.xaxis.labels.formatter,
                        u = !1,
                        p = new H(this.ctx),
                        f = l;
                    o && (h = p.xLabelFormat(c, l, f, { i: n, dateFormatter: new P(this.ctx).formatDate, w: r }), void 0 !== d && (h = d(l, t[n], { i: n, dateFormatter: new P(this.ctx).formatDate, w: r }))); var g = function(t) { var i = null; return e.forEach((function(t) { "month" === t.unit ? i = "year" : "day" === t.unit ? i = "month" : "hour" === t.unit ? i = "day" : "minute" === t.unit && (i = "hour") })), i === t };
                    e.length > 0 ? (u = g(e[n].unit), i = e[n].position, h = e[n].value) : "datetime" === r.config.xaxis.type && void 0 === d && (h = ""), void 0 === h && (h = ""), h = Array.isArray(h) ? h : h.toString(); var m = new v(this.ctx),
                        x = {};
                    x = r.globals.rotateXLabels && o ? m.getTextRects(h, parseInt(s, 10), null, "rotate(".concat(r.config.xaxis.labels.rotate, " 0 0)"), !1) : m.getTextRects(h, parseInt(s, 10)); var b = !r.config.xaxis.labels.showDuplicates && this.ctx.timeScale; return !Array.isArray(h) && (0 === h.indexOf("NaN") || 0 === h.toLowerCase().indexOf("invalid") || h.toLowerCase().indexOf("infinity") >= 0 || a.indexOf(h) >= 0 && b) && (h = ""), { x: i, text: h, textRect: x, isBold: u } } }, { key: "checkLabelBasedOnTickamount", value: function(t, e, i) { var n = this.w,
                        a = n.config.xaxis.tickAmount; return "dataPoints" === a && (a = Math.round(n.globals.gridWidth / 120)), a > i || t % Math.round(i / (a + 1)) == 0 || (e.text = ""), e } }, { key: "checkForOverflowingLabels", value: function(t, e, i, n, a) { var s = this.w; if (0 === t && s.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && s.globals.skipLastTimelinelabel && (e.text = ""), s.config.xaxis.labels.hideOverlappingLabels && n.length > 0) { var o = a[a.length - 1];
                        e.x < o.textRect.width / (s.globals.rotateXLabels ? Math.abs(s.config.xaxis.labels.rotate) / 12 : 1.01) + o.x && (e.text = "") } return e } }, { key: "checkForReversedLabels", value: function(t, e) { var i = this.w; return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e } }, { key: "isYAxisHidden", value: function(t) { var e = this.w,
                        i = new b(this.ctx); return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && -1 === e.globals.collapsedSeriesIndices.indexOf(t) } }, { key: "getYAxisForeColor", value: function(t, e) { var i = this.w; return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t } }, { key: "drawYAxisTicks", value: function(t, e, i, n, a, s, o) { var r = this.w,
                        l = new v(this.ctx),
                        h = r.globals.translateY; if (n.show && e > 0) {!0 === r.config.yaxis[a].opposite && (t += n.width); for (var c = e; c >= 0; c--) { var d = h + e / 10 + r.config.yaxis[a].labels.offsetY - 1;
                            r.globals.isBarHorizontal && (d = s * c), "heatmap" === r.config.chart.type && (d += s / 2); var u = l.drawLine(t + i.offsetX - n.width + n.offsetX, d + n.offsetY, t + i.offsetX + n.offsetX, d + n.offsetY, n.color);
                            o.add(u), h += s } } } }]), t }(),
        Y = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "scaleSvgNode", value: function(t, e) { var i = parseFloat(t.getAttributeNS(null, "width")),
                        n = parseFloat(t.getAttributeNS(null, "height"));
                    t.setAttributeNS(null, "width", i * e), t.setAttributeNS(null, "height", n * e), t.setAttributeNS(null, "viewBox", "0 0 " + i + " " + n) } }, { key: "fixSvgStringForIe11", value: function(t) { if (!g.isIE11()) return t.replace(/&nbsp;/g, "&#160;"); var e = 0,
                        i = t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, (function(t) { return 2 == ++e ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : t })); return (i = i.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1") } }, { key: "getSvgString", value: function(t) { null == t && (t = 1); var e = this.w.globals.dom.Paper.svg(); if (1 !== t) { var i = this.w.globals.dom.Paper.node.cloneNode(!0);
                        this.scaleSvgNode(i, t), e = (new XMLSerializer).serializeToString(i) } return this.fixSvgStringForIe11(e) } }, { key: "cleanup", value: function() { var t = this.w,
                        e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),
                        i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),
                        n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
                    Array.prototype.forEach.call(n, (function(t) { t.setAttribute("width", 0) })), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100)) } }, { key: "svgUrl", value: function() { this.cleanup(); var t = this.getSvgString(),
                        e = new Blob([t], { type: "image/svg+xml;charset=utf-8" }); return URL.createObjectURL(e) } }, { key: "dataURI", value: function(t) { var e = this; return new Promise((function(i) { var n = e.w,
                            a = t ? t.scale || t.width / n.globals.svgWidth : 1;
                        e.cleanup(); var s = document.createElement("canvas");
                        s.width = n.globals.svgWidth * a, s.height = parseInt(n.globals.dom.elWrap.style.height, 10) * a; var o = "transparent" === n.config.chart.background ? "#fff" : n.config.chart.background,
                            r = s.getContext("2d");
                        r.fillStyle = o, r.fillRect(0, 0, s.width * a, s.height * a); var l = e.getSvgString(a); if (window.canvg && g.isIE11()) { var h = window.canvg.Canvg.fromString(r, l, { ignoreClear: !0, ignoreDimensions: !0 });
                            h.start(); var c = s.msToBlob();
                            h.stop(), i({ blob: c }) } else { var d = "data:image/svg+xml," + encodeURIComponent(l),
                                u = new Image;
                            u.crossOrigin = "anonymous", u.onload = function() { if (r.drawImage(u, 0, 0), s.msToBlob) { var t = s.msToBlob();
                                    i({ blob: t }) } else { var e = s.toDataURL("image/png");
                                    i({ imgURI: e }) } }, u.src = d } })) } }, { key: "exportToSVG", value: function() { this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg") } }, { key: "exportToPng", value: function() { var t = this;
                    this.dataURI().then((function(e) { var i = e.imgURI,
                            n = e.blob;
                        n ? navigator.msSaveOrOpenBlob(n, t.w.globals.chartID + ".png") : t.triggerDownload(i, t.w.config.chart.toolbar.export.png.filename, ".png") })) } }, { key: "exportToCSV", value: function(t) { var e = this,
                        i = t.series,
                        n = t.fileName,
                        a = t.columnDelimiter,
                        s = void 0 === a ? "," : a,
                        o = t.lineDelimiter,
                        r = void 0 === o ? "\n" : o,
                        l = this.w;
                    i || (i = l.config.series); var h = [],
                        c = [],
                        d = "",
                        p = l.globals.series.map((function(t, e) { return -1 === l.globals.collapsedSeriesIndices.indexOf(e) ? t : [] })),
                        f = Math.max.apply(Math, u(i.map((function(t) { return t.data ? t.data.length : 0 })))),
                        m = new X(this.ctx),
                        x = new B(this.ctx),
                        v = function(t) { var i = ""; if (l.globals.axisCharts) { if ("category" === l.config.xaxis.type || l.config.xaxis.convertedCatToNumeric)
                                    if (l.globals.isBarHorizontal) { var n = l.globals.yLabelFormatters[0],
                                            a = new F(e.ctx).getActiveConfigSeriesIndex();
                                        i = n(l.globals.labels[t], { seriesIndex: a, dataPointIndex: t, w: l }) } else i = x.getLabel(l.globals.labels, l.globals.timescaleLabels, 0, t).text;
                                    "datetime" === l.config.xaxis.type && (l.config.xaxis.categories.length ? i = l.config.xaxis.categories[t] : l.config.labels.length && (i = l.config.labels[t])) } else i = l.config.labels[t]; return Array.isArray(i) && (i = i.join(" ")), g.isNumber(i) ? i : i.split(s).join("") };
                    h.push(l.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === l.config.chart.type ? (h.push("minimum"), h.push("q1"), h.push("median"), h.push("q3"), h.push("maximum")) : "candlestick" === l.config.chart.type ? (h.push("open"), h.push("high"), h.push("low"), h.push("close")) : "rangeBar" === l.config.chart.type ? (h.push("minimum"), h.push("maximum")) : i.map((function(t, e) { var i = t.name ? t.name : "series-".concat(e);
                        l.globals.axisCharts && h.push(i.split(s).join("") ? i.split(s).join("") : "series-".concat(e)) })), l.globals.axisCharts || (h.push(l.config.chart.toolbar.export.csv.headerValue), c.push(h.join(s))), i.map((function(t, e) { l.globals.axisCharts ? function(t, e) { if (h.length && 0 === e && c.push(h.join(s)), t.data) { t.data = t.data.length && t.data || u(Array(f)).map((function() { return "" })); for (var n = 0; n < t.data.length; n++) { h = []; var a = v(n); if (a || (m.isFormatXY() ? a = i[e].data[n].x : m.isFormat2DArray() && (a = i[e].data[n] ? i[e].data[n][0] : "")), 0 === e) { h.push((r = a, "datetime" === l.config.xaxis.type && String(r).length >= 10 ? l.config.chart.toolbar.export.csv.dateFormatter(a) : g.isNumber(a) ? a : a.split(s).join(""))); for (var o = 0; o < l.globals.series.length; o++) m.isFormatXY() ? h.push(i[o].data[n].y) : h.push(p[o][n]) }("candlestick" === l.config.chart.type || t.type && "candlestick" === t.type) && (h.pop(), h.push(l.globals.seriesCandleO[e][n]), h.push(l.globals.seriesCandleH[e][n]), h.push(l.globals.seriesCandleL[e][n]), h.push(l.globals.seriesCandleC[e][n])), ("boxPlot" === l.config.chart.type || t.type && "boxPlot" === t.type) && (h.pop(), h.push(l.globals.seriesCandleO[e][n]), h.push(l.globals.seriesCandleH[e][n]), h.push(l.globals.seriesCandleM[e][n]), h.push(l.globals.seriesCandleL[e][n]), h.push(l.globals.seriesCandleC[e][n])), "rangeBar" === l.config.chart.type && (h.pop(), h.push(l.globals.seriesRangeStart[e][n]), h.push(l.globals.seriesRangeEnd[e][n])), h.length && c.push(h.join(s)) } } var r }(t, e) : ((h = []).push(l.globals.labels[e].split(s).join("")), h.push(p[e]), c.push(h.join(s))) })), d += c.join(r), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\ufeff" + d), n || l.config.chart.toolbar.export.csv.filename, ".csv") } }, { key: "triggerDownload", value: function(t, e, i) { var n = document.createElement("a");
                    n.href = t, n.download = (e || this.w.globals.chartID) + i, document.body.appendChild(n), n.click(), document.body.removeChild(n) } }]), t }(),
        W = function() {
            function t(e, i) { n(this, t), this.ctx = e, this.elgrid = i, this.w = e.w; var a = this.w;
                this.axesUtils = new B(e), this.xaxisLabels = a.globals.labels.slice(), a.globals.timescaleLabels.length > 0 && !a.globals.isBarHorizontal && (this.xaxisLabels = a.globals.timescaleLabels.slice()), a.config.xaxis.overwriteCategories && (this.xaxisLabels = a.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === a.config.xaxis.position ? this.offY = 0 : this.offY = a.globals.gridHeight + 1, this.offY = this.offY + a.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === a.config.chart.type && a.config.plotOptions.bar.horizontal, this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.xaxisBorderWidth = a.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = a.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = a.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = a.config.xaxis.axisBorder.height, this.yaxis = a.config.yaxis[0] } return s(t, [{ key: "drawXaxis", value: function() { var t = this.w,
                        e = new v(this.ctx),
                        i = e.group({ class: "apexcharts-xaxis", transform: "translate(".concat(t.config.xaxis.offsetX, ", ").concat(t.config.xaxis.offsetY, ")") }),
                        n = e.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")") });
                    i.add(n); for (var a = [], s = 0; s < this.xaxisLabels.length; s++) a.push(this.xaxisLabels[s]); if (this.drawXAxisLabelAndGroup(!0, e, n, a, t.globals.isXNumeric, (function(t, e) { return e })), t.globals.hasGroups) { var o = t.globals.groups;
                        a = []; for (var r = 0; r < o.length; r++) a.push(o[r].title); var l = {};
                        t.config.xaxis.group.style && (l.xaxisFontSize = t.config.xaxis.group.style.fontSize, l.xaxisFontFamily = t.config.xaxis.group.style.fontFamily, l.xaxisForeColors = t.config.xaxis.group.style.colors, l.fontWeight = t.config.xaxis.group.style.fontWeight, l.cssClass = t.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, e, n, a, !1, (function(t, e) { return o[t].cols * e }), l) } if (void 0 !== t.config.xaxis.title.text) { var h = e.group({ class: "apexcharts-xaxis-title" }),
                            c = e.drawText({ x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t.config.xaxis.title.position ? t.globals.xAxisLabelsHeight : -t.globals.xAxisLabelsHeight - 10) + t.config.xaxis.title.offsetY, text: t.config.xaxis.title.text, textAnchor: "middle", fontSize: t.config.xaxis.title.style.fontSize, fontFamily: t.config.xaxis.title.style.fontFamily, fontWeight: t.config.xaxis.title.style.fontWeight, foreColor: t.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass });
                        h.add(c), i.add(h) } if (t.config.xaxis.axisBorder.show) { var d = t.globals.barPadForNumericAxis,
                            u = e.drawLine(t.globals.padHorizontal + t.config.xaxis.axisBorder.offsetX - d, this.offY, this.xaxisBorderWidth + d, this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        this.elgrid && this.elgrid.elGridBorders ? this.elgrid.elGridBorders.add(u) : i.add(u) } return i } }, { key: "drawXAxisLabelAndGroup", value: function(t, e, i, n, a, s) { var o, r = this,
                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
                        h = [],
                        c = [],
                        d = this.w,
                        u = l.xaxisFontSize || this.xaxisFontSize,
                        p = l.xaxisFontFamily || this.xaxisFontFamily,
                        f = l.xaxisForeColors || this.xaxisForeColors,
                        g = l.fontWeight || d.config.xaxis.labels.style.fontWeight,
                        m = l.cssClass || d.config.xaxis.labels.style.cssClass,
                        x = d.globals.padHorizontal,
                        v = n.length,
                        b = "category" === d.config.xaxis.type ? d.globals.dataPoints : v; if (0 === b && v > b && (b = v), a) { var y = b > 1 ? b - 1 : b;
                        o = d.globals.gridWidth / y, x = x + s(0, o) / 2 + d.config.xaxis.labels.offsetX } else o = d.globals.gridWidth / b, x = x + s(0, o) + d.config.xaxis.labels.offsetX; for (var w = function(a) { var l = x - s(a, o) / 2 + d.config.xaxis.labels.offsetX;
                            0 === a && 1 === v && o / 2 === x && 1 === b && (l = d.globals.gridWidth / 2); var y = r.axesUtils.getLabel(n, d.globals.timescaleLabels, l, a, h, u, t),
                                w = 28; if (d.globals.rotateXLabels && t && (w = 22), d.config.xaxis.title.text && "top" === d.config.xaxis.position && (w += parseFloat(d.config.xaxis.title.style.fontSize) + 2), t || (w = w + parseFloat(u) + (d.globals.xAxisLabelsHeight - d.globals.xAxisGroupLabelsHeight) + (d.globals.rotateXLabels ? 10 : 0)), y = void 0 !== d.config.xaxis.tickAmount && "dataPoints" !== d.config.xaxis.tickAmount && "datetime" !== d.config.xaxis.type ? r.axesUtils.checkLabelBasedOnTickamount(a, y, v) : r.axesUtils.checkForOverflowingLabels(a, y, v, h, c), t && y.text && d.globals.xaxisLabelsCount++, d.config.xaxis.labels.show) { var _ = e.drawText({ x: y.x, y: r.offY + d.config.xaxis.labels.offsetY + w - ("top" === d.config.xaxis.position ? d.globals.xAxisHeight + d.config.xaxis.axisTicks.height - 2 : 0), text: y.text, textAnchor: "middle", fontWeight: y.isBold ? 600 : g, fontSize: u, fontFamily: p, foreColor: Array.isArray(f) ? t && d.config.xaxis.convertedCatToNumeric ? f[d.globals.minX + a - 1] : f[a] : f, isPlainText: !1, cssClass: (t ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + m }); if (i.add(_), _.on("click", (function(t) { if ("function" == typeof d.config.chart.events.xAxisLabelClick) { var e = Object.assign({}, d, { labelIndex: a });
                                            d.config.chart.events.xAxisLabelClick(t, r.ctx, e) } })), t) { var k = document.createElementNS(d.globals.SVGNS, "title");
                                    k.textContent = Array.isArray(y.text) ? y.text.join(" ") : y.text, _.node.appendChild(k), "" !== y.text && (h.push(y.text), c.push(y)) } }
                            a < v - 1 && (x += s(a + 1, o)) }, _ = 0; _ <= v - 1; _++) w(_) } }, { key: "drawXaxisInversed", value: function(t) { var e, i, n = this,
                        a = this.w,
                        s = new v(this.ctx),
                        o = a.config.yaxis[0].opposite ? a.globals.translateYAxisX[t] : 0,
                        r = s.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t }),
                        l = s.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o + ", 0)" });
                    r.add(l); var h = []; if (a.config.yaxis[t].show)
                        for (var c = 0; c < this.xaxisLabels.length; c++) h.push(this.xaxisLabels[c]);
                    e = a.globals.gridHeight / h.length, i = -e / 2.2; var d = a.globals.yLabelFormatters[0],
                        u = a.config.yaxis[0].labels; if (u.show)
                        for (var p = function(o) { var r = void 0 === h[o] ? "" : h[o];
                                r = d(r, { seriesIndex: t, dataPointIndex: o, w: a }); var c = n.axesUtils.getYAxisForeColor(u.style.colors, t),
                                    p = 0;
                                Array.isArray(r) && (p = r.length / 2 * parseInt(u.style.fontSize, 10)); var f = s.drawText({ x: u.offsetX - 15, y: i + e + u.offsetY - p, text: r, textAnchor: n.yaxis.opposite ? "start" : "end", foreColor: Array.isArray(c) ? c[o] : c, fontSize: u.style.fontSize, fontFamily: u.style.fontFamily, fontWeight: u.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + u.style.cssClass, maxWidth: u.maxWidth });
                                l.add(f), f.on("click", (function(t) { if ("function" == typeof a.config.chart.events.xAxisLabelClick) { var e = Object.assign({}, a, { labelIndex: o });
                                        a.config.chart.events.xAxisLabelClick(t, n.ctx, e) } })); var g = document.createElementNS(a.globals.SVGNS, "title"); if (g.textContent = Array.isArray(r) ? r.join(" ") : r, f.node.appendChild(g), 0 !== a.config.yaxis[t].labels.rotate) { var m = s.rotateAroundCenter(f.node);
                                    f.node.setAttribute("transform", "rotate(".concat(a.config.yaxis[t].labels.rotate, " 0 ").concat(m.y, ")")) }
                                i += e }, f = 0; f <= h.length - 1; f++) p(f); if (void 0 !== a.config.yaxis[0].title.text) { var g = s.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o + ", 0)" }),
                            m = s.drawText({ x: a.config.yaxis[0].title.offsetX, y: a.globals.gridHeight / 2 + a.config.yaxis[0].title.offsetY, text: a.config.yaxis[0].title.text, textAnchor: "middle", foreColor: a.config.yaxis[0].title.style.color, fontSize: a.config.yaxis[0].title.style.fontSize, fontWeight: a.config.yaxis[0].title.style.fontWeight, fontFamily: a.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + a.config.yaxis[0].title.style.cssClass });
                        g.add(m), r.add(g) } var x = 0;
                    this.isCategoryBarHorizontal && a.config.yaxis[0].opposite && (x = a.globals.gridWidth); var b = a.config.xaxis.axisBorder; if (b.show) { var y = s.drawLine(a.globals.padHorizontal + b.offsetX + x, 1 + b.offsetY, a.globals.padHorizontal + b.offsetX + x, a.globals.gridHeight + b.offsetY, b.color, 0);
                        this.elgrid && this.elgrid.elGridBorders ? this.elgrid.elGridBorders.add(y) : r.add(y) } return a.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(x, h.length, a.config.yaxis[0].axisBorder, a.config.yaxis[0].axisTicks, 0, e, r), r } }, { key: "drawXaxisTicks", value: function(t, e, i) { var n = this.w,
                        a = t; if (!(t < 0 || t - 2 > n.globals.gridWidth)) { var s = this.offY + n.config.xaxis.axisTicks.offsetY; if (e = e + s + n.config.xaxis.axisTicks.height, "top" === n.config.xaxis.position && (e = s - n.config.xaxis.axisTicks.height), n.config.xaxis.axisTicks.show) { var o = new v(this.ctx).drawLine(t + n.config.xaxis.axisTicks.offsetX, s + n.config.xaxis.offsetY, a + n.config.xaxis.axisTicks.offsetX, e + n.config.xaxis.offsetY, n.config.xaxis.axisTicks.color);
                            i.add(o), o.node.classList.add("apexcharts-xaxis-tick") } } } }, { key: "getXAxisTicksPositions", value: function() { var t = this.w,
                        e = [],
                        i = this.xaxisLabels.length,
                        n = t.globals.padHorizontal; if (t.globals.timescaleLabels.length > 0)
                        for (var a = 0; a < i; a++) n = this.xaxisLabels[a].position, e.push(n);
                    else
                        for (var s = i, o = 0; o < s; o++) { var r = s;
                            t.globals.isXNumeric && "bar" !== t.config.chart.type && (r -= 1), n += t.globals.gridWidth / r, e.push(n) }
                    return e } }, { key: "xAxisLabelCorrections", value: function() { var t = this.w,
                        e = new v(this.ctx),
                        i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                        n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),
                        a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                        s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan"); if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
                        for (var o = 0; o < n.length; o++) { var r = e.rotateAroundCenter(n[o]);
                            r.y = r.y - 1, r.x = r.x + 1, n[o].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(r.x, " ").concat(r.y, ")")), n[o].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")")); var l = n[o].childNodes;
                            t.config.xaxis.labels.trim && Array.prototype.forEach.call(l, (function(i) { e.placeTextWithEllipsis(i, i.textContent, t.globals.xAxisLabelsHeight - ("bottom" === t.config.legend.position ? 20 : 10)) })) } else ! function() { for (var i = t.globals.gridWidth / (t.globals.labels.length + 1), a = 0; a < n.length; a++) { var s = n[a].childNodes;
                                t.config.xaxis.labels.trim && "datetime" !== t.config.xaxis.type && Array.prototype.forEach.call(s, (function(t) { e.placeTextWithEllipsis(t, t.textContent, i) })) } }(); if (a.length > 0) { var h = a[a.length - 1].getBBox(),
                            c = a[0].getBBox();
                        h.x < -20 && a[a.length - 1].parentNode.removeChild(a[a.length - 1]), c.x + c.width > t.globals.gridWidth && !t.globals.isBarHorizontal && a[0].parentNode.removeChild(a[0]); for (var d = 0; d < s.length; d++) e.placeTextWithEllipsis(s[d], s[d].textContent, t.config.yaxis[0].labels.maxWidth - (t.config.yaxis[0].title.text ? 2 * parseFloat(t.config.yaxis[0].title.style.fontSize) : 0) - 15) } } }]), t }(),
        j = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w; var i = this.w;
                this.xaxisLabels = i.globals.labels.slice(), this.axesUtils = new B(e), this.isRangeBar = i.globals.seriesRange.length, i.globals.timescaleLabels.length > 0 && (this.xaxisLabels = i.globals.timescaleLabels.slice()) } return s(t, [{ key: "drawGridArea", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = this.w,
                        i = new v(this.ctx);
                    null === t && (t = i.group({ class: "apexcharts-grid" })); var n = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"),
                        a = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent"); return t.add(a), t.add(n), t } }, { key: "drawGrid", value: function() { var t = null; return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t } }, { key: "createGridMask", value: function() { var t = this.w,
                        e = t.globals,
                        i = new v(this.ctx),
                        n = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width; if (Array.isArray(t.config.stroke.width)) { var a = 0;
                        t.config.stroke.width.forEach((function(t) { a = Math.max(a, t) })), n = a }
                    e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e.cuid)), e.dom.elNonForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e.cuid)); var s = t.config.chart.type,
                        o = 0,
                        r = 0;
                    ("bar" === s || "rangeBar" === s || "candlestick" === s || "boxPlot" === s || t.globals.comboBarCount > 0) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (o = t.config.grid.padding.left, r = t.config.grid.padding.right, e.barPadForNumericAxis > o && (o = e.barPadForNumericAxis, r = e.barPadForNumericAxis)), e.dom.elGridRect = i.drawRect(-n / 2 - o - 2, -n / 2, e.gridWidth + n + r + o + 4, e.gridHeight + n, 0, "#fff"); var l = t.globals.markers.largestSize + 1;
                    e.dom.elGridRectMarker = i.drawRect(2 * -l, 2 * -l, e.gridWidth + 4 * l, e.gridHeight + 4 * l, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node); var h = e.dom.baseEl.querySelector("defs");
                    h.appendChild(e.dom.elGridRectMask), h.appendChild(e.dom.elForecastMask), h.appendChild(e.dom.elNonForecastMask), h.appendChild(e.dom.elGridRectMarkerMask) } }, { key: "_drawGridLines", value: function(t) { var e = t.i,
                        i = t.x1,
                        n = t.y1,
                        a = t.x2,
                        s = t.y2,
                        o = t.xCount,
                        r = t.parent,
                        l = this.w; if (!(0 === e && l.globals.skipFirstTimelinelabel || e === o - 1 && l.globals.skipLastTimelinelabel && !l.config.xaxis.labels.formatter || "radar" === l.config.chart.type)) { l.config.grid.xaxis.lines.show && this._drawGridLine({ i: e, x1: i, y1: n, x2: a, y2: s, xCount: o, parent: r }); var h = 0; if (l.globals.hasGroups && "between" === l.config.xaxis.tickPlacement) { var c = l.globals.groups; if (c) { for (var d = 0, u = 0; d < e && u < c.length; u++) d += c[u].cols;
                                d === e && (h = .6 * l.globals.xAxisLabelsHeight) } }
                        new W(this.ctx).drawXaxisTicks(i, h, l.globals.dom.elGraphical) } } }, { key: "_drawGridLine", value: function(t) { var e = t.i,
                        i = t.x1,
                        n = t.y1,
                        a = t.x2,
                        s = t.y2,
                        o = t.xCount,
                        r = t.parent,
                        l = this.w,
                        h = !1,
                        c = r.node.classList.contains("apexcharts-gridlines-horizontal"),
                        d = l.config.grid.strokeDashArray,
                        u = l.globals.barPadForNumericAxis;
                    (0 === n && 0 === s || 0 === i && 0 === a) && (h = !0), n === l.globals.gridHeight && s === l.globals.gridHeight && (h = !0), !l.globals.isBarHorizontal || 0 !== e && e !== o - 1 || (h = !0); var p = new v(this).drawLine(i - (c ? u : 0), n, a + (c ? u : 0), s, l.config.grid.borderColor, d);
                    p.node.classList.add("apexcharts-gridline"), h ? this.elGridBorders.add(p) : r.add(p) } }, { key: "_drawGridBandRect", value: function(t) { var e = t.c,
                        i = t.x1,
                        n = t.y1,
                        a = t.x2,
                        s = t.y2,
                        o = t.type,
                        r = this.w,
                        l = new v(this.ctx),
                        h = r.globals.barPadForNumericAxis; if ("column" !== o || "datetime" !== r.config.xaxis.type) { var c = r.config.grid[o].colors[e],
                            d = l.drawRect(i - ("row" === o ? h : 0), n, a + ("row" === o ? 2 * h : 0), s, 0, c, r.config.grid[o].opacity);
                        this.elg.add(d), d.attr("clip-path", "url(#gridRectMask".concat(r.globals.cuid, ")")), d.node.classList.add("apexcharts-grid-".concat(o)) } } }, { key: "_drawXYLines", value: function(t) { var e = this,
                        i = t.xCount,
                        n = t.tickAmount,
                        a = this.w; if (a.config.grid.xaxis.lines.show || a.config.xaxis.axisTicks.show) { var s, o = a.globals.padHorizontal,
                            r = a.globals.gridHeight;
                        a.globals.timescaleLabels.length ? function(t) { for (var n = t.xC, a = t.x1, s = t.y1, o = t.x2, r = t.y2, l = 0; l < n; l++) a = e.xaxisLabels[l].position, o = e.xaxisLabels[l].position, e._drawGridLines({ i: l, x1: a, y1: s, x2: o, y2: r, xCount: i, parent: e.elgridLinesV }) }({ xC: i, x1: o, y1: 0, x2: s, y2: r }) : (a.globals.isXNumeric && (i = a.globals.xAxisScale.result.length), a.config.xaxis.convertedCatToNumeric && (i = a.globals.xaxisLabelsCount), function(t) { var n = t.xC,
                                s = t.x1,
                                o = t.y1,
                                r = t.x2,
                                l = t.y2; if (void 0 !== a.config.xaxis.tickAmount && "dataPoints" !== a.config.xaxis.tickAmount && "on" === a.config.xaxis.tickPlacement) a.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach((function(t, n) { var a = t.getBBox();
                                e._drawGridLines({ i: n, x1: a.x + a.width / 2, y1: o, x2: a.x + a.width / 2, y2: l, xCount: i, parent: e.elgridLinesV }) }));
                            else
                                for (var h = 0; h < n + (a.globals.isXNumeric ? 0 : 1); h++) 0 === h && 1 === n && 1 === a.globals.dataPoints && (r = s = a.globals.gridWidth / 2), e._drawGridLines({ i: h, x1: s, y1: o, x2: r, y2: l, xCount: i, parent: e.elgridLinesV }), r = s += a.globals.gridWidth / (a.globals.isXNumeric ? n - 1 : n) }({ xC: i, x1: o, y1: 0, x2: s, y2: r })) } if (a.config.grid.yaxis.lines.show) { var l = 0,
                            h = 0,
                            c = a.globals.gridWidth,
                            d = n + 1;
                        this.isRangeBar && (d = a.globals.labels.length); for (var u = 0; u < d + (this.isRangeBar ? 1 : 0); u++) this._drawGridLine({ i: u, xCount: d + (this.isRangeBar ? 1 : 0), x1: 0, y1: l, x2: c, y2: h, parent: this.elgridLinesH }), h = l += a.globals.gridHeight / (this.isRangeBar ? d : n) } } }, { key: "_drawInvertedXYLines", value: function(t) { var e = t.xCount,
                        i = this.w; if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show)
                        for (var n, a = i.globals.padHorizontal, s = i.globals.gridHeight, o = 0; o < e + 1; o++) i.config.grid.xaxis.lines.show && this._drawGridLine({ i: o, xCount: e + 1, x1: a, y1: 0, x2: n, y2: s, parent: this.elgridLinesV }), new W(this.ctx).drawXaxisTicks(a, 0, i.globals.dom.elGraphical), n = a = a + i.globals.gridWidth / e + .3; if (i.config.grid.yaxis.lines.show)
                        for (var r = 0, l = 0, h = i.globals.gridWidth, c = 0; c < i.globals.dataPoints + 1; c++) this._drawGridLine({ i: c, xCount: i.globals.dataPoints + 1, x1: 0, y1: r, x2: h, y2: l, parent: this.elgridLinesH }), l = r += i.globals.gridHeight / i.globals.dataPoints } }, { key: "renderGrid", value: function() { var t = this.w,
                        e = new v(this.ctx);
                    this.elg = e.group({ class: "apexcharts-grid" }), this.elgridLinesH = e.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = e.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = e.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide()); for (var i, n = t.globals.yAxisScale.length ? t.globals.yAxisScale[0].result.length - 1 : 5, a = 0; a < t.globals.series.length && (void 0 !== t.globals.yAxisScale[a] && (n = t.globals.yAxisScale[a].result.length - 1), !(n > 2)); a++); return !t.globals.isBarHorizontal || this.isRangeBar ? (i = this.xaxisLabels.length, this.isRangeBar && (n = t.globals.labels.length, t.config.xaxis.tickAmount && t.config.xaxis.labels.formatter && (i = t.config.xaxis.tickAmount)), this._drawXYLines({ xCount: i, tickAmount: n })) : (i = n, n = t.globals.xTickAmount, this._drawInvertedXYLines({ xCount: i, tickAmount: n })), this.drawGridBands(i, n), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: t.globals.gridWidth / i } } }, { key: "drawGridBands", value: function(t, e) { var i = this.w; if (void 0 !== i.config.grid.row.colors && i.config.grid.row.colors.length > 0)
                        for (var n = 0, a = i.globals.gridHeight / e, s = i.globals.gridWidth, o = 0, r = 0; o < e; o++, r++) r >= i.config.grid.row.colors.length && (r = 0), this._drawGridBandRect({ c: r, x1: 0, y1: n, x2: s, y2: a, type: "row" }), n += i.globals.gridHeight / e; if (void 0 !== i.config.grid.column.colors && i.config.grid.column.colors.length > 0)
                        for (var l = i.globals.isBarHorizontal || "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, h = i.globals.padHorizontal, c = i.globals.padHorizontal + i.globals.gridWidth / l, d = i.globals.gridHeight, u = 0, p = 0; u < t; u++, p++) p >= i.config.grid.column.colors.length && (p = 0), this._drawGridBandRect({ c: p, x1: h, y1: 0, x2: c, y2: d, type: "column" }), h += i.globals.gridWidth / l } }]), t }(),
        V = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "niceScale", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        s = this.w,
                        o = Math.abs(e - t); if ("dataPoints" === (i = this._adjustTicksForSmallRange(i, n, o)) && (i = s.globals.dataPoints - 1), t === Number.MIN_VALUE && 0 === e || !g.isNumber(t) && !g.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) { t = 0, e = i; var r = this.linearScale(t, e, i); return r }
                    t > e ? (console.warn("axis.min cannot be greater than axis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5); var l = [];
                    o < 1 && a && ("candlestick" === s.config.chart.type || "candlestick" === s.config.series[n].type || "boxPlot" === s.config.chart.type || "boxPlot" === s.config.series[n].type || s.globals.isRangeData) && (e *= 1.01); var h = i + 1;
                    h < 2 ? h = 2 : h > 2 && (h -= 2); var c = o / h,
                        d = Math.floor(g.log10(c)),
                        u = Math.pow(10, d),
                        p = Math.round(c / u);
                    p < 1 && (p = 1); var f = p * u,
                        m = f * Math.floor(t / f),
                        x = f * Math.ceil(e / f),
                        v = m; if (a && o > 2) { for (; l.push(v), !((v += f) > x);); return { result: l, niceMin: l[0], niceMax: l[l.length - 1] } } var b = t;
                    (l = []).push(b); for (var y = Math.abs(e - t) / i, w = 0; w <= i; w++) b += y, l.push(b); return l[l.length - 2] >= e && l.pop(), { result: l, niceMin: l[0], niceMax: l[l.length - 1] } } }, { key: "linearScale", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        a = Math.abs(e - t); "dataPoints" === (i = this._adjustTicksForSmallRange(i, n, a)) && (i = this.w.globals.dataPoints - 1); var s = a / i;
                    i === Number.MAX_VALUE && (i = 10, s = 1); for (var o = [], r = t; i >= 0;) o.push(r), r += s, i -= 1; return { result: o, niceMin: o[0], niceMax: o[o.length - 1] } } }, { key: "logarithmicScaleNice", value: function(t, e, i) { e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i)); for (var n = [], a = Math.ceil(Math.log(e) / Math.log(i) + 1), s = Math.floor(Math.log(t) / Math.log(i)); s < a; s++) n.push(Math.pow(i, s)); return { result: n, niceMin: n[0], niceMax: n[n.length - 1] } } }, { key: "logarithmicScale", value: function(t, e, i) { e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i)); for (var n = [], a = Math.log(e) / Math.log(i), s = Math.log(t) / Math.log(i), o = a - s, r = Math.round(o), l = o / r, h = 0, c = s; h < r; h++, c += l) n.push(Math.pow(i, c)); return n.push(Math.pow(i, a)), { result: n, niceMin: t, niceMax: e } } }, { key: "_adjustTicksForSmallRange", value: function(t, e, i) { var n = t; if (void 0 !== e && this.w.config.yaxis[e].labels.formatter && void 0 === this.w.config.yaxis[e].tickAmount) { var a = this.w.config.yaxis[e].labels.formatter(1);
                        g.isNumber(Number(a)) && !g.isFloat(a) && (n = Math.ceil(i)) } return n < t ? n : t } }, { key: "setYScaleForIndex", value: function(t, e, i) { var n = this.w.globals,
                        a = this.w.config,
                        s = n.isBarHorizontal ? a.xaxis : a.yaxis[t];
                    void 0 === n.yAxisScale[t] && (n.yAxisScale[t] = []); var o = Math.abs(i - e); if (s.logarithmic && o <= 5 && (n.invalidLogScale = !0), s.logarithmic && o > 5) n.allSeriesCollapsed = !1, n.yAxisScale[t] = this.logarithmicScale(e, i, s.logBase), n.yAxisScale[t] = s.forceNiceScale ? this.logarithmicScaleNice(e, i, s.logBase) : this.logarithmicScale(e, i, s.logBase);
                    else if (i !== -Number.MAX_VALUE && g.isNumber(i))
                        if (n.allSeriesCollapsed = !1, void 0 === s.min && void 0 === s.max || s.forceNiceScale) { var r = void 0 === a.yaxis[t].max && void 0 === a.yaxis[t].min || a.yaxis[t].forceNiceScale;
                            n.yAxisScale[t] = this.niceScale(e, i, s.tickAmount ? s.tickAmount : o < 5 && o > 1 ? o + 1 : 5, t, r) } else n.yAxisScale[t] = this.linearScale(e, i, s.tickAmount, t);
                    else n.yAxisScale[t] = this.linearScale(0, 5, 5) } }, { key: "setXScale", value: function(t, e) { var i = this.w,
                        n = i.globals,
                        a = i.config.xaxis,
                        s = Math.abs(e - t); return e !== -Number.MAX_VALUE && g.isNumber(e) ? n.xAxisScale = this.linearScale(t, e, a.tickAmount ? a.tickAmount : s < 5 && s > 1 ? s + 1 : 5, 0) : n.xAxisScale = this.linearScale(0, 5, 5), n.xAxisScale } }, { key: "setMultipleYScales", value: function() { var t = this,
                        e = this.w.globals,
                        i = this.w.config,
                        n = e.minYArr.concat([]),
                        a = e.maxYArr.concat([]),
                        s = [];
                    i.yaxis.forEach((function(e, o) { var r = o;
                        i.series.forEach((function(t, i) { t.name === e.seriesName && (r = i, o !== i ? s.push({ index: i, similarIndex: o, alreadyExists: !0 }) : s.push({ index: i })) })); var l = n[r],
                            h = a[r];
                        t.setYScaleForIndex(o, l, h) })), this.sameScaleInMultipleAxes(n, a, s) } }, { key: "sameScaleInMultipleAxes", value: function(t, e, i) { var n = this,
                        a = this.w.config,
                        s = this.w.globals,
                        o = [];
                    i.forEach((function(t) { t.alreadyExists && (void 0 === o[t.index] && (o[t.index] = []), o[t.index].push(t.index), o[t.index].push(t.similarIndex)) })), s.yAxisSameScaleIndices = o, o.forEach((function(t, e) { o.forEach((function(i, n) { var a, s;
                            e !== n && (a = t, s = i, a.filter((function(t) { return -1 !== s.indexOf(t) }))).length > 0 && (o[e] = o[e].concat(o[n])) })) })); var r = o.map((function(t) { return t.filter((function(e, i) { return t.indexOf(e) === i })) })).map((function(t) { return t.sort() }));
                    o = o.filter((function(t) { return !!t })); var l = r.slice(),
                        h = l.map((function(t) { return JSON.stringify(t) }));
                    l = l.filter((function(t, e) { return h.indexOf(JSON.stringify(t)) === e })); var c = [],
                        d = [];
                    t.forEach((function(t, i) { l.forEach((function(n, a) { n.indexOf(i) > -1 && (void 0 === c[a] && (c[a] = [], d[a] = []), c[a].push({ key: i, value: t }), d[a].push({ key: i, value: e[i] })) })) })); var u = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, Number.MIN_VALUE),
                        p = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
                    c.forEach((function(t, e) { t.forEach((function(t, i) { u[e] = Math.min(t.value, u[e]) })) })), d.forEach((function(t, e) { t.forEach((function(t, i) { p[e] = Math.max(t.value, p[e]) })) })), t.forEach((function(t, e) { d.forEach((function(t, i) { var o = u[i],
                                r = p[i];
                            a.chart.stacked && (r = 0, t.forEach((function(t, e) { t.value !== -Number.MAX_VALUE && (r += t.value), o !== Number.MIN_VALUE && (o += c[i][e].value) }))), t.forEach((function(i, l) { t[l].key === e && (void 0 !== a.yaxis[e].min && (o = "function" == typeof a.yaxis[e].min ? a.yaxis[e].min(s.minY) : a.yaxis[e].min), void 0 !== a.yaxis[e].max && (r = "function" == typeof a.yaxis[e].max ? a.yaxis[e].max(s.maxY) : a.yaxis[e].max), n.setYScaleForIndex(e, o, r)) })) })) })) } }, { key: "autoScaleY", value: function(t, e, i) { t || (t = this); var n = t.w; if (n.globals.isMultipleYAxis || n.globals.collapsedSeries.length) return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."), e; var a = n.globals.seriesX[0],
                        s = n.config.chart.stacked; return e.forEach((function(t, o) { for (var r = 0, l = 0; l < a.length; l++)
                            if (a[l] >= i.xaxis.min) { r = l; break }
                        var h, c, d = n.globals.minYArr[o],
                            u = n.globals.maxYArr[o],
                            p = n.globals.stackedSeriesTotals;
                        n.globals.series.forEach((function(o, l) { var f = o[r];
                            s ? (f = p[r], h = c = f, p.forEach((function(t, e) { a[e] <= i.xaxis.max && a[e] >= i.xaxis.min && (t > c && null !== t && (c = t), o[e] < h && null !== o[e] && (h = o[e])) }))) : (h = c = f, o.forEach((function(t, e) { if (a[e] <= i.xaxis.max && a[e] >= i.xaxis.min) { var s = t,
                                        o = t;
                                    n.globals.series.forEach((function(i, n) { null !== t && (s = Math.min(i[e], s), o = Math.max(i[e], o)) })), o > c && null !== o && (c = o), s < h && null !== s && (h = s) } }))), void 0 === h && void 0 === c && (h = d, c = u), c *= c < 0 ? .9 : 1.1, 0 == (h *= h < 0 ? 1.1 : .9) && 0 === c && (h = -1, c = 1), c < 0 && c < u && (c = u), h < 0 && h > d && (h = d), e.length > 1 ? (e[l].min = void 0 === t.min ? h : t.min, e[l].max = void 0 === t.max ? c : t.max) : (e[0].min = void 0 === t.min ? h : t.min, e[0].max = void 0 === t.max ? c : t.max) })) })), e } }]), t }(),
        G = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.scales = new V(e) } return s(t, [{ key: "init", value: function() { this.setYRange(), this.setXRange(), this.setZRange() } }, { key: "getMinYMaxY", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = this.w.config,
                        s = this.w.globals,
                        o = -Number.MAX_VALUE,
                        r = Number.MIN_VALUE;
                    null === n && (n = t + 1); var l = s.series,
                        h = l,
                        c = l; "candlestick" === a.chart.type ? (h = s.seriesCandleL, c = s.seriesCandleH) : "boxPlot" === a.chart.type ? (h = s.seriesCandleO, c = s.seriesCandleC) : s.isRangeData && (h = s.seriesRangeStart, c = s.seriesRangeEnd); for (var d = t; d < n; d++) { s.dataPoints = Math.max(s.dataPoints, l[d].length), s.categoryLabels.length && (s.dataPoints = s.categoryLabels.filter((function(t) { return void 0 !== t })).length); for (var u = 0; u < s.series[d].length; u++) { var p = l[d][u];
                            null !== p && g.isNumber(p) ? (void 0 !== c[d][u] && (o = Math.max(o, c[d][u]), e = Math.min(e, c[d][u])), void 0 !== h[d][u] && (e = Math.min(e, h[d][u]), i = Math.max(i, h[d][u])), "candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type && "rangeArea" === this.w.config.chart.type && "rangeBar" === this.w.config.chart.type || ("candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type || void 0 !== s.seriesCandleC[d][u] && (o = Math.max(o, s.seriesCandleO[d][u]), o = Math.max(o, s.seriesCandleH[d][u]), o = Math.max(o, s.seriesCandleL[d][u]), o = Math.max(o, s.seriesCandleC[d][u]), "boxPlot" === this.w.config.chart.type && (o = Math.max(o, s.seriesCandleM[d][u]))), !a.series[d].type || "candlestick" === a.series[d].type && "boxPlot" === a.series[d].type && "rangeArea" === a.series[d].type && "rangeBar" === a.series[d].type || (o = Math.max(o, s.series[d][u]), e = Math.min(e, s.series[d][u])), i = o), s.seriesGoals[d] && s.seriesGoals[d][u] && Array.isArray(s.seriesGoals[d][u]) && s.seriesGoals[d][u].forEach((function(t) { r !== Number.MIN_VALUE && (r = Math.min(r, t.value), e = r), o = Math.max(o, t.value), i = o })), g.isFloat(p) && (p = g.noExponents(p), s.yValueDecimal = Math.max(s.yValueDecimal, p.toString().split(".")[1].length)), r > h[d][u] && h[d][u] < 0 && (r = h[d][u])) : s.hasNullValues = !0 } } return "rangeBar" === a.chart.type && s.seriesRangeStart.length && s.isBarHorizontal && (r = e), "bar" === a.chart.type && (r < 0 && o < 0 && (o = 0), r === Number.MIN_VALUE && (r = 0)), { minY: r, maxY: o, lowestY: e, highestY: i } } }, { key: "setYRange", value: function() { var t = this.w.globals,
                        e = this.w.config;
                    t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE; var i = Number.MAX_VALUE; if (t.isMultipleYAxis)
                        for (var n = 0; n < t.series.length; n++) { var a = this.getMinYMaxY(n, i, null, n + 1);
                            t.minYArr.push(a.minY), t.maxYArr.push(a.maxY), i = a.lowestY }
                    var s = this.getMinYMaxY(0, i, null, t.series.length); if (t.minY = s.minY, t.maxY = s.maxY, i = s.lowestY, e.chart.stacked && this._setStackedMinMax(), ("line" === e.chart.type || "area" === e.chart.type || "candlestick" === e.chart.type || "boxPlot" === e.chart.type || "rangeBar" === e.chart.type && !t.isBarHorizontal) && t.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== t.maxY) { var o = t.maxY - i;
                        (i >= 0 && i <= 10 || void 0 !== e.yaxis[0].min || void 0 !== e.yaxis[0].max) && (o = 0), t.minY = i - 5 * o / 100, i > 0 && t.minY < 0 && (t.minY = 0), t.maxY = t.maxY + 5 * o / 100 } return e.yaxis.forEach((function(e, i) { void 0 !== e.max && ("number" == typeof e.max ? t.maxYArr[i] = e.max : "function" == typeof e.max && (t.maxYArr[i] = e.max(t.isMultipleYAxis ? t.maxYArr[i] : t.maxY)), t.maxY = t.maxYArr[i]), void 0 !== e.min && ("number" == typeof e.min ? t.minYArr[i] = e.min : "function" == typeof e.min && (t.minYArr[i] = e.min(t.isMultipleYAxis ? t.minYArr[i] === Number.MIN_VALUE ? 0 : t.minYArr[i] : t.minY)), t.minY = t.minYArr[i]) })), t.isBarHorizontal && ["min", "max"].forEach((function(i) { void 0 !== e.xaxis[i] && "number" == typeof e.xaxis[i] && ("min" === i ? t.minY = e.xaxis[i] : t.maxY = e.xaxis[i]) })), t.isMultipleYAxis ? (this.scales.setMultipleYScales(), t.minY = i, t.yAxisScale.forEach((function(e, i) { t.minYArr[i] = e.niceMin, t.maxYArr[i] = e.niceMax }))) : (this.scales.setYScaleForIndex(0, t.minY, t.maxY), t.minY = t.yAxisScale[0].niceMin, t.maxY = t.yAxisScale[0].niceMax, t.minYArr[0] = t.yAxisScale[0].niceMin, t.maxYArr[0] = t.yAxisScale[0].niceMax), { minY: t.minY, maxY: t.maxY, minYArr: t.minYArr, maxYArr: t.maxYArr, yAxisScale: t.yAxisScale } } }, { key: "setXRange", value: function() { var t = this.w.globals,
                        e = this.w.config,
                        i = "numeric" === e.xaxis.type || "datetime" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided || t.noLabelsProvided || t.isXNumeric; if (t.isXNumeric && function() { for (var e = 0; e < t.series.length; e++)
                                if (t.labels[e])
                                    for (var i = 0; i < t.labels[e].length; i++) null !== t.labels[e][i] && g.isNumber(t.labels[e][i]) && (t.maxX = Math.max(t.maxX, t.labels[e][i]), t.initialMaxX = Math.max(t.maxX, t.labels[e][i]), t.minX = Math.min(t.minX, t.labels[e][i]), t.initialMinX = Math.min(t.minX, t.labels[e][i])) }(), t.noLabelsProvided && 0 === e.xaxis.categories.length && (t.maxX = t.labels[t.labels.length - 1], t.initialMaxX = t.labels[t.labels.length - 1], t.minX = 1, t.initialMinX = 1), t.isXNumeric || t.noLabelsProvided || t.dataFormatXNumeric) { var n; if (void 0 === e.xaxis.tickAmount ? (n = Math.round(t.svgWidth / 150), "numeric" === e.xaxis.type && t.dataPoints < 30 && (n = t.dataPoints - 1), n > t.dataPoints && 0 !== t.dataPoints && (n = t.dataPoints - 1)) : "dataPoints" === e.xaxis.tickAmount ? (t.series.length > 1 && (n = t.series[t.maxValsInArrayIndex].length - 1), t.isXNumeric && (n = t.maxX - t.minX - 1)) : n = e.xaxis.tickAmount, t.xTickAmount = n, void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (t.maxX = e.xaxis.max), void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (t.minX = e.xaxis.min), void 0 !== e.xaxis.range && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !== -Number.MAX_VALUE)
                            if (e.xaxis.convertedCatToNumeric && !t.dataFormatXNumeric) { for (var a = [], s = t.minX - 1; s < t.maxX; s++) a.push(s + 1);
                                t.xAxisScale = { result: a, niceMin: a[0], niceMax: a[a.length - 1] } } else t.xAxisScale = this.scales.setXScale(t.minX, t.maxX);
                        else t.xAxisScale = this.scales.linearScale(1, n, n), t.noLabelsProvided && t.labels.length > 0 && (t.xAxisScale = this.scales.linearScale(1, t.labels.length, n - 1), t.seriesX = t.labels.slice());
                        i && (t.labels = t.xAxisScale.result.slice()) } return t.isBarHorizontal && t.labels.length && (t.xTickAmount = t.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t.minX, maxX: t.maxX } } }, { key: "setZRange", value: function() { var t = this.w.globals; if (t.isDataXYZ)
                        for (var e = 0; e < t.series.length; e++)
                            if (void 0 !== t.seriesZ[e])
                                for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && g.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i])) } }, { key: "_handleSingleDataPoint", value: function() { var t = this.w.globals,
                        e = this.w.config; if (t.minX === t.maxX) { var i = new P(this.ctx); if ("datetime" === e.xaxis.type) { var n = i.getDate(t.minX);
                            e.xaxis.labels.datetimeUTC ? n.setUTCDate(n.getUTCDate() - 2) : n.setDate(n.getDate() - 2), t.minX = new Date(n).getTime(); var a = i.getDate(t.maxX);
                            e.xaxis.labels.datetimeUTC ? a.setUTCDate(a.getUTCDate() + 2) : a.setDate(a.getDate() + 2), t.maxX = new Date(a).getTime() } else("numeric" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided) && (t.minX = t.minX - 2, t.initialMinX = t.minX, t.maxX = t.maxX + 2, t.initialMaxX = t.maxX) } } }, { key: "_getMinXDiff", value: function() { var t = this.w.globals;
                    t.isXNumeric && t.seriesX.forEach((function(e, i) { 1 === e.length && e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length - 1]); var n = e.slice();
                        n.sort((function(t, e) { return t - e })), n.forEach((function(e, i) { if (i > 0) { var a = e - n[i - 1];
                                a > 0 && (t.minXDiff = Math.min(a, t.minXDiff)) } })), 1 !== t.dataPoints && t.minXDiff !== Number.MAX_VALUE || (t.minXDiff = .5) })) } }, { key: "_setStackedMinMax", value: function() { var t = this.w.globals,
                        e = [],
                        i = []; if (t.series.length)
                        for (var n = 0; n < t.series[t.maxValsInArrayIndex].length; n++)
                            for (var a = 0, s = 0, o = 0; o < t.series.length; o++) null !== t.series[o][n] && g.isNumber(t.series[o][n]) && (t.series[o][n] > 0 ? a = a + parseFloat(t.series[o][n]) + 1e-4 : s += parseFloat(t.series[o][n])), o === t.series.length - 1 && (e.push(a), i.push(s)); for (var r = 0; r < e.length; r++) t.maxY = Math.max(t.maxY, e[r]), t.minY = Math.min(t.minY, i[r]) } }]), t }(),
        Z = function() {
            function t(e, i) { n(this, t), this.ctx = e, this.elgrid = i, this.w = e.w; var a = this.w;
                this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.axisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === a.config.chart.type && a.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === a.config.xaxis.position && (this.xAxisoffX = a.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new B(e) } return s(t, [{ key: "drawYaxis", value: function(t) { var e = this,
                        i = this.w,
                        n = new v(this.ctx),
                        a = i.config.yaxis[t].labels.style,
                        s = a.fontSize,
                        o = a.fontFamily,
                        r = a.fontWeight,
                        l = n.group({ class: "apexcharts-yaxis", rel: t, transform: "translate(" + i.globals.translateYAxisX[t] + ", 0)" }); if (this.axesUtils.isYAxisHidden(t)) return l; var h = n.group({ class: "apexcharts-yaxis-texts-g" });
                    l.add(h); var c = i.globals.yAxisScale[t].result.length - 1,
                        d = i.globals.gridHeight / c,
                        u = i.globals.translateY,
                        p = i.globals.yLabelFormatters[t],
                        f = i.globals.yAxisScale[t].result.slice();
                    f = this.axesUtils.checkForReversedLabels(t, f); var g = ""; if (i.config.yaxis[t].labels.show)
                        for (var m = function(l) { var m = f[l];
                                m = p(m, l, i); var x = i.config.yaxis[t].labels.padding;
                                i.config.yaxis[t].opposite && 0 !== i.config.yaxis.length && (x *= -1); var v = e.axesUtils.getYAxisForeColor(a.colors, t),
                                    b = n.drawText({ x: x, y: u + c / 10 + i.config.yaxis[t].labels.offsetY + 1, text: m, textAnchor: i.config.yaxis[t].opposite ? "start" : "end", fontSize: s, fontFamily: o, fontWeight: r, maxWidth: i.config.yaxis[t].labels.maxWidth, foreColor: Array.isArray(v) ? v[l] : v, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + a.cssClass });
                                l === c && (g = b), h.add(b); var y = document.createElementNS(i.globals.SVGNS, "title"); if (y.textContent = Array.isArray(m) ? m.join(" ") : m, b.node.appendChild(y), 0 !== i.config.yaxis[t].labels.rotate) { var w = n.rotateAroundCenter(g.node),
                                        _ = n.rotateAroundCenter(b.node);
                                    b.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].labels.rotate, " ").concat(w.x, " ").concat(_.y, ")")) }
                                u += d }, x = c; x >= 0; x--) m(x); if (void 0 !== i.config.yaxis[t].title.text) { var b = n.group({ class: "apexcharts-yaxis-title" }),
                            y = 0;
                        i.config.yaxis[t].opposite && (y = i.globals.translateYAxisX[t]); var w = n.drawText({ x: y, y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[t].title.offsetY, text: i.config.yaxis[t].title.text, textAnchor: "end", foreColor: i.config.yaxis[t].title.style.color, fontSize: i.config.yaxis[t].title.style.fontSize, fontWeight: i.config.yaxis[t].title.style.fontWeight, fontFamily: i.config.yaxis[t].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[t].title.style.cssClass });
                        b.add(w), l.add(b) } var _ = i.config.yaxis[t].axisBorder,
                        k = 31 + _.offsetX; if (i.config.yaxis[t].opposite && (k = -31 - _.offsetX), _.show) { var S = n.drawLine(k, i.globals.translateY + _.offsetY - 2, k, i.globals.gridHeight + i.globals.translateY + _.offsetY + 2, _.color, 0, _.width);
                        l.add(S) } return i.config.yaxis[t].axisTicks.show && this.axesUtils.drawYAxisTicks(k, c, _, i.config.yaxis[t].axisTicks, t, d, l), l } }, { key: "drawYaxisInversed", value: function(t) { var e = this.w,
                        i = new v(this.ctx),
                        n = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }),
                        a = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
                    n.add(a); var s = e.globals.yAxisScale[t].result.length - 1,
                        o = e.globals.gridWidth / s + .1,
                        r = o + e.config.xaxis.labels.offsetX,
                        l = e.globals.xLabelFormatter,
                        h = e.globals.yAxisScale[t].result.slice(),
                        c = e.globals.timescaleLabels;
                    c.length > 0 && (this.xaxisLabels = c.slice(), s = (h = c.slice()).length), h = this.axesUtils.checkForReversedLabels(t, h); var d = c.length; if (e.config.xaxis.labels.show)
                        for (var u = d ? 0 : s; d ? u < d : u >= 0; d ? u++ : u--) { var p = h[u];
                            p = l(p, u, e); var f = e.globals.gridWidth + e.globals.padHorizontal - (r - o + e.config.xaxis.labels.offsetX); if (c.length) { var g = this.axesUtils.getLabel(h, c, f, u, this.drawnLabels, this.xaxisFontSize);
                                f = g.x, p = g.text, this.drawnLabels.push(g.text), 0 === u && e.globals.skipFirstTimelinelabel && (p = ""), u === h.length - 1 && e.globals.skipLastTimelinelabel && (p = "") } var m = i.drawText({ x: f, y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - ("top" === e.config.xaxis.position ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0), text: p, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass });
                            a.add(m), m.tspan(p); var x = document.createElementNS(e.globals.SVGNS, "title");
                            x.textContent = p, m.node.appendChild(x), r += o }
                    return this.inversedYAxisTitleText(n), this.inversedYAxisBorder(n), n } }, { key: "inversedYAxisBorder", value: function(t) { var e = this.w,
                        i = new v(this.ctx),
                        n = e.config.xaxis.axisBorder; if (n.show) { var a = 0; "bar" === e.config.chart.type && e.globals.isXNumeric && (a -= 15); var s = i.drawLine(e.globals.padHorizontal + a + n.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, n.color, 0, n.height);
                        this.elgrid && this.elgrid.elGridBorders ? this.elgrid.elGridBorders.add(s) : t.add(s) } } }, { key: "inversedYAxisTitleText", value: function(t) { var e = this.w,
                        i = new v(this.ctx); if (void 0 !== e.config.xaxis.title.text) { var n = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }),
                            a = i.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e.config.xaxis.title.style.fontSize) + e.config.xaxis.title.offsetY + 20, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass });
                        n.add(a), t.add(n) } } }, { key: "yAxisTitleRotate", value: function(t, e) { var i = this.w,
                        n = new v(this.ctx),
                        a = { width: 0, height: 0 },
                        s = { width: 0, height: 0 },
                        o = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
                    null !== o && (a = o.getBoundingClientRect()); var r = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text")); if (null !== r && (s = r.getBoundingClientRect()), null !== r) { var l = this.xPaddingForYAxisTitle(t, a, s, e);
                        r.setAttribute("x", l.xPos - (e ? 10 : 0)) } if (null !== r) { var h = n.rotateAroundCenter(r);
                        r.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")")) } } }, { key: "xPaddingForYAxisTitle", value: function(t, e, i, n) { var a = this.w,
                        s = 0,
                        o = 0,
                        r = 10; return void 0 === a.config.yaxis[t].title.text || t < 0 ? { xPos: o, padd: 0 } : (n ? (o = e.width + a.config.yaxis[t].title.offsetX + i.width / 2 + r / 2, 0 === (s += 1) && (o -= r / 2)) : (o = -1 * e.width + a.config.yaxis[t].title.offsetX + r / 2 + i.width / 2, a.globals.isBarHorizontal && (r = 25, o = -1 * e.width - a.config.yaxis[t].title.offsetX - r)), { xPos: o, padd: r }) } }, { key: "setYAxisXPosition", value: function(t, e) { var i = this.w,
                        n = 0,
                        a = 0,
                        s = 18,
                        o = 1;
                    i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.map((function(r, l) { var h = i.globals.ignoreYAxisIndexes.indexOf(l) > -1 || !r.show || r.floating || 0 === t[l].width,
                            c = t[l].width + e[l].width;
                        r.opposite ? i.globals.isBarHorizontal ? (a = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[l] = a - r.labels.offsetX) : (a = i.globals.gridWidth + i.globals.translateX + o, h || (o = o + c + 20), i.globals.translateYAxisX[l] = a - r.labels.offsetX + 20) : (n = i.globals.translateX - s, h || (s = s + c + 20), i.globals.translateYAxisX[l] = n + r.labels.offsetX) })) } }, { key: "setYAxisTextAlignments", value: function() { var t = this.w,
                        e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
                    (e = g.listToArray(e)).forEach((function(e, i) { var n = t.config.yaxis[i]; if (n && void 0 !== n.labels.align) { var a = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")),
                                s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label"));
                            s = g.listToArray(s); var o = a.getBoundingClientRect(); "left" === n.labels.align ? (s.forEach((function(t, e) { t.setAttribute("text-anchor", "start") })), n.opposite || a.setAttribute("transform", "translate(-".concat(o.width, ", 0)"))) : "center" === n.labels.align ? (s.forEach((function(t, e) { t.setAttribute("text-anchor", "middle") })), a.setAttribute("transform", "translate(".concat(o.width / 2 * (n.opposite ? 1 : -1), ", 0)"))) : "right" === n.labels.align && (s.forEach((function(t, e) { t.setAttribute("text-anchor", "end") })), n.opposite && a.setAttribute("transform", "translate(".concat(o.width, ", 0)"))) } })) } }]), t }(),
        U = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.documentEvent = g.bind(this.documentEvent, this) } return s(t, [{ key: "addEventListener", value: function(t, e) { var i = this.w;
                    i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e] } }, { key: "removeEventListener", value: function(t, e) { var i = this.w; if (i.globals.events.hasOwnProperty(t)) { var n = i.globals.events[t].indexOf(e); - 1 !== n && i.globals.events[t].splice(n, 1) } } }, { key: "fireEvent", value: function(t, e) { var i = this.w; if (i.globals.events.hasOwnProperty(t)) { e && e.length || (e = []); for (var n = i.globals.events[t], a = n.length, s = 0; s < a; s++) n[s].apply(null, e) } } }, { key: "setupEventHandlers", value: function() { var t = this,
                        e = this.w,
                        i = this.ctx,
                        n = e.globals.dom.baseEl.querySelector(e.globals.chartClass);
                    this.ctx.eventList.forEach((function(t) { n.addEventListener(t, (function(t) { var n = Object.assign({}, e, { seriesIndex: e.globals.capturedSeriesIndex, dataPointIndex: e.globals.capturedDataPointIndex }); "mousemove" === t.type || "touchmove" === t.type ? "function" == typeof e.config.chart.events.mouseMove && e.config.chart.events.mouseMove(t, i, n) : "mouseleave" === t.type || "touchleave" === t.type ? "function" == typeof e.config.chart.events.mouseLeave && e.config.chart.events.mouseLeave(t, i, n) : ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof e.config.chart.events.click && e.config.chart.events.click(t, i, n), i.ctx.events.fireEvent("click", [t, i, n])) }), { capture: !1, passive: !0 }) })), this.ctx.eventList.forEach((function(i) { e.globals.dom.baseEl.addEventListener(i, t.documentEvent, { passive: !0 }) })), this.ctx.core.setupBrushHandler() } }, { key: "documentEvent", value: function(t) { var e = this.w,
                        i = t.target.className; if ("click" === t.type) { var n = e.globals.dom.baseEl.querySelector(".apexcharts-menu");
                        n && n.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i && n.classList.remove("apexcharts-menu-open") }
                    e.globals.clientX = "touchmove" === t.type ? t.touches[0].clientX : t.clientX, e.globals.clientY = "touchmove" === t.type ? t.touches[0].clientY : t.clientY } }]), t }(),
        q = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "setCurrentLocaleValues", value: function(t) { var e = this.w.config.chart.locales;
                    window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales)); var i = e.filter((function(e) { return e.name === t }))[0]; if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options"); var n = g.extend(S, i);
                    this.w.globals.locale = n.options } }]), t }(),
        $ = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "drawAxis", value: function(t, e) { var i, n, a = this.w.globals,
                        s = this.w.config,
                        o = new W(this.ctx, e),
                        r = new Z(this.ctx, e);
                    a.axisCharts && "radar" !== t && (a.isBarHorizontal ? (n = r.drawYaxisInversed(0), i = o.drawXaxisInversed(0), a.dom.elGraphical.add(i), a.dom.elGraphical.add(n)) : (i = o.drawXaxis(), a.dom.elGraphical.add(i), s.yaxis.map((function(t, e) {-1 === a.ignoreYAxisIndexes.indexOf(e) && (n = r.drawYaxis(e), a.dom.Paper.add(n)) })))) } }]), t }(),
        K = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "drawXCrosshairs", value: function() { var t = this.w,
                        e = new v(this.ctx),
                        i = new x(this.ctx),
                        n = t.config.xaxis.crosshairs.fill.gradient,
                        a = t.config.xaxis.crosshairs.dropShadow,
                        s = t.config.xaxis.crosshairs.fill.type,
                        o = n.colorFrom,
                        r = n.colorTo,
                        l = n.opacityFrom,
                        h = n.opacityTo,
                        c = n.stops,
                        d = a.enabled,
                        u = a.left,
                        p = a.top,
                        f = a.blur,
                        m = a.color,
                        b = a.opacity,
                        y = t.config.xaxis.crosshairs.fill.color; if (t.config.xaxis.crosshairs.show) { "gradient" === s && (y = e.drawGradient("vertical", o, r, l, h, null, c, null)); var w = e.drawRect();
                        1 === t.config.xaxis.crosshairs.width && (w = e.drawLine()); var _ = t.globals.gridHeight;
                        (!g.isNumber(_) || _ < 0) && (_ = 0); var k = t.config.xaxis.crosshairs.width;
                        (!g.isNumber(k) || k < 0) && (k = 0), w.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: _, width: k, height: _, fill: y, filter: "none", "fill-opacity": t.config.xaxis.crosshairs.opacity, stroke: t.config.xaxis.crosshairs.stroke.color, "stroke-width": t.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray }), d && (w = i.dropShadow(w, { left: u, top: p, blur: f, color: m, opacity: b })), t.globals.dom.elGraphical.add(w) } } }, { key: "drawYCrosshairs", value: function() { var t = this.w,
                        e = new v(this.ctx),
                        i = t.config.yaxis[0].crosshairs,
                        n = t.globals.barPadForNumericAxis; if (t.config.yaxis[0].crosshairs.show) { var a = e.drawLine(-n, 0, t.globals.gridWidth + n, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                        a.attr({ class: "apexcharts-ycrosshairs" }), t.globals.dom.elGraphical.add(a) } var s = e.drawLine(-n, 0, t.globals.gridWidth + n, 0, i.stroke.color, 0, 0);
                    s.attr({ class: "apexcharts-ycrosshairs-hidden" }), t.globals.dom.elGraphical.add(s) } }]), t }(),
        J = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "checkResponsiveConfig", value: function(t) { var e = this,
                        i = this.w,
                        n = i.config; if (0 !== n.responsive.length) { var a = n.responsive.slice();
                        a.sort((function(t, e) { return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0 })).reverse(); var s = new E({}),
                            o = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = a[0].breakpoint,
                                    o = window.innerWidth > 0 ? window.innerWidth : screen.width; if (o > n) { var r = b.extendArrayProps(s, i.globals.initialConfig, i);
                                    t = g.extend(r, t), t = g.extend(i.config, t), e.overrideResponsiveOptions(t) } else
                                    for (var l = 0; l < a.length; l++) o < a[l].breakpoint && (t = b.extendArrayProps(s, a[l].options, i), t = g.extend(i.config, t), e.overrideResponsiveOptions(t)) }; if (t) { var r = b.extendArrayProps(s, t, i);
                            r = g.extend(i.config, r), o(r = g.extend(r, t)) } else o({}) } } }, { key: "overrideResponsiveOptions", value: function(t) { var e = new E(t).init({ responsiveOverride: !0 });
                    this.w.config = e } }]), t }(),
        Q = function() {
            function t(e) { n(this, t), this.ctx = e, this.colors = [], this.w = e.w; var i = this.w;
                this.isColorFn = !1, this.isHeatmapDistributed = "treemap" === i.config.chart.type && i.config.plotOptions.treemap.distributed || "heatmap" === i.config.chart.type && i.config.plotOptions.heatmap.distributed, this.isBarDistributed = i.config.plotOptions.bar.distributed && ("bar" === i.config.chart.type || "rangeBar" === i.config.chart.type) } return s(t, [{ key: "init", value: function() { this.setDefaultColors() } }, { key: "setDefaultColors", value: function() { var t = this,
                        e = this.w,
                        i = new g; if (e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode)), void 0 === e.config.colors ? e.globals.colors = this.predefined() : (e.globals.colors = e.config.colors, Array.isArray(e.config.colors) && e.config.colors.length > 0 && "function" == typeof e.config.colors[0] && (e.globals.colors = e.config.series.map((function(i, n) { var a = e.config.colors[n]; return a || (a = e.config.colors[0]), "function" == typeof a ? (t.isColorFn = !0, a({ value: e.globals.axisCharts ? e.globals.series[n][0] ? e.globals.series[n][0] : 0 : e.globals.series[n], seriesIndex: n, dataPointIndex: n, w: e })) : a })))), e.globals.seriesColors.map((function(t, i) { t && (e.globals.colors[i] = t) })), e.config.theme.monochrome.enabled) { var n = [],
                            a = e.globals.series.length;
                        (this.isBarDistributed || this.isHeatmapDistributed) && (a = e.globals.series[0].length * e.globals.series.length); for (var s = e.config.theme.monochrome.color, o = 1 / (a / e.config.theme.monochrome.shadeIntensity), r = e.config.theme.monochrome.shadeTo, l = 0, h = 0; h < a; h++) { var c = void 0; "dark" === r ? (c = i.shadeColor(-1 * l, s), l += o) : (c = i.shadeColor(l, s), l += o), n.push(c) }
                        e.globals.colors = n.slice() } var d = e.globals.colors.slice();
                    this.pushExtraColors(e.globals.colors), ["fill", "stroke"].forEach((function(i) { void 0 === e.config[i].colors ? e.globals[i].colors = t.isColorFn ? e.config.colors : d : e.globals[i].colors = e.config[i].colors.slice(), t.pushExtraColors(e.globals[i].colors) })), void 0 === e.config.dataLabels.style.colors ? e.globals.dataLabels.style.colors = d : e.globals.dataLabels.style.colors = e.config.dataLabels.style.colors.slice(), this.pushExtraColors(e.globals.dataLabels.style.colors, 50), void 0 === e.config.plotOptions.radar.polygons.fill.colors ? e.globals.radarPolygons.fill.colors = ["dark" === e.config.theme.mode ? "#424242" : "none"] : e.globals.radarPolygons.fill.colors = e.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(e.globals.radarPolygons.fill.colors, 20), void 0 === e.config.markers.colors ? e.globals.markers.colors = d : e.globals.markers.colors = e.config.markers.colors.slice(), this.pushExtraColors(e.globals.markers.colors) } }, { key: "pushExtraColors", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = this.w,
                        a = e || n.globals.series.length; if (null === i && (i = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === n.config.chart.type && n.config.plotOptions.heatmap.colorScale.inverse), i && n.globals.series.length && (a = n.globals.series[n.globals.maxValsInArrayIndex].length * n.globals.series.length), t.length < a)
                        for (var s = a - t.length, o = 0; o < s; o++) t.push(t[o]) } }, { key: "updateThemeOptions", value: function(t) { t.chart = t.chart || {}, t.tooltip = t.tooltip || {}; var e = t.theme.mode || "light",
                        i = t.theme.palette ? t.theme.palette : "dark" === e ? "palette4" : "palette1",
                        n = t.chart.foreColor ? t.chart.foreColor : "dark" === e ? "#f6f7f8" : "#373d3f"; return t.tooltip.theme = e, t.chart.foreColor = n, t.theme.palette = i, t } }, { key: "predefined", value: function() { switch (this.w.config.theme.palette) {
                        case "palette1":
                        default:
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]; break;
                        case "palette2":
                            this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"]; break;
                        case "palette3":
                            this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"]; break;
                        case "palette4":
                            this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"]; break;
                        case "palette5":
                            this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"]; break;
                        case "palette6":
                            this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"]; break;
                        case "palette7":
                            this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"]; break;
                        case "palette8":
                            this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"]; break;
                        case "palette9":
                            this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"]; break;
                        case "palette10":
                            this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"] } return this.colors } }]), t }(),
        tt = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "draw", value: function() { this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle") } }, { key: "drawTitleSubtitle", value: function(t) { var e = this.w,
                        i = "title" === t ? e.config.title : e.config.subtitle,
                        n = e.globals.svgWidth / 2,
                        a = i.offsetY,
                        s = "middle"; if ("left" === i.align ? (n = 10, s = "start") : "right" === i.align && (n = e.globals.svgWidth - 10, s = "end"), n += i.offsetX, a = a + parseInt(i.style.fontSize, 10) + i.margin / 2, void 0 !== i.text) { var o = new v(this.ctx).drawText({ x: n, y: a, text: i.text, textAnchor: s, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, fontWeight: i.style.fontWeight, foreColor: i.style.color, opacity: 1 });
                        o.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(o) } } }]), t }(),
        et = function() {
            function t(e) { n(this, t), this.w = e.w, this.dCtx = e } return s(t, [{ key: "getTitleSubtitleCoords", value: function(t) { var e = this.w,
                        i = 0,
                        n = 0,
                        a = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
                        s = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text")); if (null !== s && !a) { var o = s.getBoundingClientRect();
                        i = o.width, n = e.globals.axisCharts ? o.height + 5 : o.height } return { width: i, height: n } } }, { key: "getLegendsRect", value: function() { var t = this.w,
                        e = t.globals.dom.baseEl.querySelector(".apexcharts-legend");
                    t.config.legend.height || "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || (e.style.maxHeight = t.globals.svgHeight / 2 + "px"); var i = Object.assign({}, g.getBoundingClientRect(e)); return null !== e && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = { x: i.x, y: i.y, height: i.height, width: 0 === i.height ? 0 : i.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, "left" !== t.config.legend.position && "right" !== t.config.legend.position || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect } }, { key: "getLargestStringFromMultiArr", value: function(t, e) { var i = t; if (this.w.globals.isMultiLineX) { var n = e.map((function(t, e) { return Array.isArray(t) ? t.length : 1 })),
                            a = Math.max.apply(Math, u(n));
                        i = e[n.indexOf(a)] } return i } }]), t }(),
        it = function() {
            function t(e) { n(this, t), this.w = e.w, this.dCtx = e } return s(t, [{ key: "getxAxisLabelsCoords", value: function() { var t, e = this.w,
                        i = e.globals.labels.slice(); if (e.config.xaxis.convertedCatToNumeric && 0 === i.length && (i = e.globals.categoryLabels), e.globals.timescaleLabels.length > 0) { var n = this.getxAxisTimeScaleLabelsCoords();
                        t = { width: n.width, height: n.height }, e.globals.rotateXLabels = !1 } else { this.dCtx.lgWidthForSideLegends = "left" !== e.config.legend.position && "right" !== e.config.legend.position || e.config.legend.floating ? 0 : this.dCtx.lgRect.width; var a = e.globals.xLabelFormatter,
                            s = g.getLargestStringFromArr(i),
                            o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(s, i);
                        e.globals.isBarHorizontal && (o = s = e.globals.yAxisScale[0].result.reduce((function(t, e) { return t.length > e.length ? t : e }), 0)); var r = new H(this.dCtx.ctx),
                            l = s;
                        s = r.xLabelFormat(a, s, l, { i: void 0, dateFormatter: new P(this.dCtx.ctx).formatDate, w: e }), o = r.xLabelFormat(a, o, l, { i: void 0, dateFormatter: new P(this.dCtx.ctx).formatDate, w: e }), (e.config.xaxis.convertedCatToNumeric && void 0 === s || "" === String(s).trim()) && (o = s = "1"); var h = new v(this.dCtx.ctx),
                            c = h.getTextRects(s, e.config.xaxis.labels.style.fontSize),
                            d = c; if (s !== o && (d = h.getTextRects(o, e.config.xaxis.labels.style.fontSize)), (t = { width: c.width >= d.width ? c.width : d.width, height: c.height >= d.height ? c.height : d.height }).width * i.length > e.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e.config.xaxis.labels.rotate || e.config.xaxis.labels.rotateAlways) { if (!e.globals.isBarHorizontal) { e.globals.rotateXLabels = !0; var u = function(t) { return h.getTextRects(t, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1) };
                                c = u(s), s !== o && (d = u(o)), t.height = (c.height > d.height ? c.height : d.height) / 1.5, t.width = c.width > d.width ? c.width : d.width } } else e.globals.rotateXLabels = !1 } return e.config.xaxis.labels.show || (t = { width: 0, height: 0 }), { width: t.width, height: t.height } } }, { key: "getxAxisGroupLabelsCoords", value: function() { var t, e = this.w; if (!e.globals.hasGroups) return { width: 0, height: 0 }; var i, n = (null === (t = e.config.xaxis.group.style) || void 0 === t ? void 0 : t.fontSize) || e.config.xaxis.labels.style.fontSize,
                        a = e.globals.groups.map((function(t) { return t.title })),
                        s = g.getLargestStringFromArr(a),
                        o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(s, a),
                        r = new v(this.dCtx.ctx),
                        l = r.getTextRects(s, n),
                        h = l; return s !== o && (h = r.getTextRects(o, n)), i = { width: l.width >= h.width ? l.width : h.width, height: l.height >= h.height ? l.height : h.height }, e.config.xaxis.labels.show || (i = { width: 0, height: 0 }), { width: i.width, height: i.height } } }, { key: "getxAxisTitleCoords", value: function() { var t = this.w,
                        e = 0,
                        i = 0; if (void 0 !== t.config.xaxis.title.text) { var n = new v(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                        e = n.width, i = n.height } return { width: e, height: i } } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() { var t, e = this.w;
                    this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice(); var i = this.dCtx.timescaleLabels.map((function(t) { return t.value })),
                        n = i.reduce((function(t, e) { return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e }), 0); return 1.05 * (t = new v(this.dCtx.ctx).getTextRects(n, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t } }, { key: "additionalPaddingXLabels", value: function(t) { var e = this,
                        i = this.w,
                        n = i.globals,
                        a = i.config,
                        s = a.xaxis.type,
                        o = t.width;
                    n.skipLastTimelinelabel = !1, n.skipFirstTimelinelabel = !1; var r = i.config.yaxis[0].opposite && i.globals.isBarHorizontal,
                        l = function(t, r) {
                            (function(t) { return -1 !== n.collapsedSeriesIndices.indexOf(t) })(r) || function(t) { if (e.dCtx.timescaleLabels && e.dCtx.timescaleLabels.length) { var r = e.dCtx.timescaleLabels[0],
                                        l = e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length - 1].position + o / 1.75 - e.dCtx.yAxisWidthRight,
                                        h = r.position - o / 1.75 + e.dCtx.yAxisWidthLeft,
                                        c = "right" === i.config.legend.position && e.dCtx.lgRect.width > 0 ? e.dCtx.lgRect.width : 0;
                                    l > n.svgWidth - n.translateX - c && (n.skipLastTimelinelabel = !0), h < -(t.show && !t.floating || "bar" !== a.chart.type && "candlestick" !== a.chart.type && "rangeBar" !== a.chart.type && "boxPlot" !== a.chart.type ? 10 : o / 1.75) && (n.skipFirstTimelinelabel = !0) } else "datetime" === s ? e.dCtx.gridPad.right < o && !n.rotateXLabels && (n.skipLastTimelinelabel = !0) : "datetime" !== s && e.dCtx.gridPad.right < o / 2 - e.dCtx.yAxisWidthRight && !n.rotateXLabels && !i.config.xaxis.labels.trim && ("between" !== i.config.xaxis.tickPlacement || i.globals.isBarHorizontal) && (e.dCtx.xPadRight = o / 2 + 1) }(t) };
                    a.yaxis.forEach((function(t, i) { r ? (e.dCtx.gridPad.left < o && (e.dCtx.xPadLeft = o / 2 + 1), e.dCtx.xPadRight = o / 2 + 1) : l(t, i) })) } }]), t }(),
        nt = function() {
            function t(e) { n(this, t), this.w = e.w, this.dCtx = e } return s(t, [{ key: "getyAxisLabelsCoords", value: function() { var t = this,
                        e = this.w,
                        i = [],
                        n = 10,
                        a = new B(this.dCtx.ctx); return e.config.yaxis.map((function(s, o) { var r = e.globals.yAxisScale[o],
                            l = 0; if (!a.isYAxisHidden(o) && s.labels.show && void 0 !== s.labels.minWidth && (l = s.labels.minWidth), !a.isYAxisHidden(o) && s.labels.show && r.result.length) { var h = e.globals.yLabelFormatters[o],
                                c = r.niceMin === Number.MIN_VALUE ? 0 : r.niceMin,
                                d = String(c).length > String(r.niceMax).length ? c : r.niceMax,
                                u = h(d, { seriesIndex: o, dataPointIndex: -1, w: e }),
                                p = u; if (void 0 !== u && 0 !== u.length || (u = d), e.globals.isBarHorizontal) { n = 0; var f = e.globals.labels.slice();
                                u = h(u = g.getLargestStringFromArr(f), { seriesIndex: o, dataPointIndex: -1, w: e }), p = t.dCtx.dimHelpers.getLargestStringFromMultiArr(u, f) } var m = new v(t.dCtx.ctx),
                                x = "rotate(".concat(s.labels.rotate, " 0 0)"),
                                b = m.getTextRects(u, s.labels.style.fontSize, s.labels.style.fontFamily, x, !1),
                                y = b;
                            u !== p && (y = m.getTextRects(p, s.labels.style.fontSize, s.labels.style.fontFamily, x, !1)), i.push({ width: (l > y.width || l > b.width ? l : y.width > b.width ? y.width : b.width) + n, height: y.height > b.height ? y.height : b.height }) } else i.push({ width: 0, height: 0 }) })), i } }, { key: "getyAxisTitleCoords", value: function() { var t = this,
                        e = this.w,
                        i = []; return e.config.yaxis.map((function(e, n) { if (e.show && void 0 !== e.title.text) { var a = new v(t.dCtx.ctx),
                                s = "rotate(".concat(e.title.rotate, " 0 0)"),
                                o = a.getTextRects(e.title.text, e.title.style.fontSize, e.title.style.fontFamily, s, !1);
                            i.push({ width: o.width, height: o.height }) } else i.push({ width: 0, height: 0 }) })), i } }, { key: "getTotalYAxisWidth", value: function() { var t = this.w,
                        e = 0,
                        i = 0,
                        n = 0,
                        a = t.globals.yAxisScale.length > 1 ? 10 : 0,
                        s = new B(this.dCtx.ctx),
                        o = function(o, r) { var l = t.config.yaxis[r].floating,
                                h = 0;
                            o.width > 0 && !l ? (h = o.width + a, function(e) { return t.globals.ignoreYAxisIndexes.indexOf(e) > -1 }(r) && (h = h - o.width - a)) : h = l || s.isYAxisHidden(r) ? 0 : 5, t.config.yaxis[r].opposite ? n += h : i += h, e += h }; return t.globals.yLabelsCoords.map((function(t, e) { o(t, e) })), t.globals.yTitleCoords.map((function(t, e) { o(t, e) })), t.globals.isBarHorizontal && !t.config.yaxis[0].floating && (e = t.globals.yLabelsCoords[0].width + t.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = n, e } }]), t }(),
        at = function() {
            function t(e) { n(this, t), this.w = e.w, this.dCtx = e } return s(t, [{ key: "gridPadForColumnsInNumericAxis", value: function(t) { var e = this.w; if (e.globals.noData || e.globals.allSeriesCollapsed) return 0; var i = function(t) { return "bar" === t || "rangeBar" === t || "candlestick" === t || "boxPlot" === t },
                        n = e.config.chart.type,
                        a = 0,
                        s = i(n) ? e.config.series.length : 1; if (e.globals.comboBarCount > 0 && (s = e.globals.comboBarCount), e.globals.collapsedSeries.forEach((function(t) { i(t.type) && (s -= 1) })), e.config.chart.stacked && (s = 1), (i(n) || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && s > 0) { var o, r, l = Math.abs(e.globals.initialMaxX - e.globals.initialMinX);
                        l <= 3 && (l = e.globals.dataPoints), o = l / t, e.globals.minXDiff && e.globals.minXDiff / o > 0 && (r = e.globals.minXDiff / o), r > t / 2 && (r /= 2), (a = r / s * parseInt(e.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (a = 1), a = a / (s > 1 ? 1 : 1.5) + 5, e.globals.barPadForNumericAxis = a } return a } }, { key: "gridPadFortitleSubtitle", value: function() { var t = this,
                        e = this.w,
                        i = e.globals,
                        n = this.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 10;
                    ["title", "subtitle"].forEach((function(i) { void 0 !== e.config[i].text ? n += e.config[i].margin : n += t.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 5 })), !e.config.legend.show || "bottom" !== e.config.legend.position || e.config.legend.floating || e.globals.axisCharts || (n += 10); var a = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),
                        s = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
                    i.gridHeight = i.gridHeight - a.height - s.height - n, i.translateY = i.translateY + a.height + s.height + n } }, { key: "setGridXPosForDualYAxis", value: function(t, e) { var i = this.w,
                        n = new B(this.dCtx.ctx);
                    i.config.yaxis.map((function(a, s) {-1 !== i.globals.ignoreYAxisIndexes.indexOf(s) || a.floating || n.isYAxisHidden(s) || (a.opposite && (i.globals.translateX = i.globals.translateX - (e[s].width + t[s].width) - parseInt(i.config.yaxis[s].labels.style.fontSize, 10) / 1.2 - 12), i.globals.translateX < 2 && (i.globals.translateX = 2)) })) } }]), t }(),
        st = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new et(this), this.dimYAxis = new nt(this), this.dimXAxis = new it(this), this.dimGrid = new at(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0 } return s(t, [{ key: "plotCoords", value: function() { var t = this,
                        e = this.w,
                        i = e.globals;
                    this.lgRect = this.dimHelpers.getLegendsRect(), this.isSparkline && (e.config.markers.discrete.length > 0 || e.config.markers.size > 0) && Object.entries(this.gridPad).forEach((function(e) { var i = function(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (null != i) { var n, a, s = [],
                                            o = !0,
                                            r = !1; try { for (i = i.call(t); !(o = (n = i.next()).done) && (s.push(n.value), !e || s.length !== e); o = !0); } catch (t) { r = !0, a = t } finally { try { o || null == i.return || i.return() } finally { if (r) throw a } } return s } }(t, e) || p(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }(e, 2),
                            n = i[0],
                            a = i[1];
                        t.gridPad[n] = Math.max(a, t.w.globals.markers.largestSize / 1.5) })), i.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i.gridHeight = i.gridHeight - this.gridPad.top - this.gridPad.bottom, i.gridWidth = i.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft; var n = this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);
                    i.gridWidth = i.gridWidth - 2 * n, i.translateX = i.translateX + this.gridPad.left + this.xPadLeft + (n > 0 ? n + 4 : 0), i.translateY = i.translateY + this.gridPad.top } }, { key: "setDimensionsForAxisCharts", value: function() { var t = this,
                        e = this.w,
                        i = e.globals,
                        n = this.dimYAxis.getyAxisLabelsCoords(),
                        a = this.dimYAxis.getyAxisTitleCoords();
                    e.globals.yLabelsCoords = [], e.globals.yTitleCoords = [], e.config.yaxis.map((function(t, i) { e.globals.yLabelsCoords.push({ width: n[i].width, index: i }), e.globals.yTitleCoords.push({ width: a[i].width, index: i }) })), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth(); var s = this.dimXAxis.getxAxisLabelsCoords(),
                        o = this.dimXAxis.getxAxisGroupLabelsCoords(),
                        r = this.dimXAxis.getxAxisTitleCoords();
                    this.conditionalChecksForAxisCoords(s, r, o), i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(e.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX; var l = this.yAxisWidth,
                        h = this.xAxisHeight;
                    i.xAxisLabelsHeight = this.xAxisHeight - r.height, i.xAxisGroupLabelsHeight = i.xAxisLabelsHeight - s.height, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight; var c = 10;
                    ("radar" === e.config.chart.type || this.isSparkline) && (l = 0, h = i.goldenPadding), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || "treemap" === e.config.chart.type) && (l = 0, h = 0, c = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(s); var d = function() { i.translateX = l, i.gridHeight = i.svgHeight - t.lgRect.height - h - (t.isSparkline || "treemap" === e.config.chart.type ? 0 : e.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - l }; switch ("top" === e.config.xaxis.position && (c = i.xAxisHeight - e.config.xaxis.axisTicks.height - 5), e.config.legend.position) {
                        case "bottom":
                            i.translateY = c, d(); break;
                        case "top":
                            i.translateY = this.lgRect.height + c, d(); break;
                        case "left":
                            i.translateY = c, i.translateX = this.lgRect.width + l, i.gridHeight = i.svgHeight - h - 12, i.gridWidth = i.svgWidth - this.lgRect.width - l; break;
                        case "right":
                            i.translateY = c, i.translateX = l, i.gridHeight = i.svgHeight - h - 12, i.gridWidth = i.svgWidth - this.lgRect.width - l - 5; break;
                        default:
                            throw new Error("Legend position not supported") }
                    this.dimGrid.setGridXPosForDualYAxis(a, n), new Z(this.ctx).setYAxisXPosition(n, a) } }, { key: "setDimensionsForNonAxisCharts", value: function() { var t = this.w,
                        e = t.globals,
                        i = t.config,
                        n = 0;
                    t.config.legend.show && !t.config.legend.floating && (n = 20); var a = "pie" === i.chart.type || "polarArea" === i.chart.type || "donut" === i.chart.type ? "pie" : "radialBar",
                        s = i.plotOptions[a].offsetY,
                        o = i.plotOptions[a].offsetX; if (!i.legend.show || i.legend.floating) return e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = s, void(e.translateX = o + (e.svgWidth - e.gridWidth) / 2); switch (i.legend.position) {
                        case "bottom":
                            e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = s - 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2; break;
                        case "top":
                            e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + s + 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2; break;
                        case "left":
                            e.gridWidth = e.svgWidth - this.lgRect.width - n, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = s, e.translateX = o + this.lgRect.width + n; break;
                        case "right":
                            e.gridWidth = e.svgWidth - this.lgRect.width - n - 5, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = s, e.translateX = o + 10; break;
                        default:
                            throw new Error("Legend position not supported") } } }, { key: "conditionalChecksForAxisCoords", value: function(t, e, i) { var n = this.w,
                        a = n.globals.hasGroups ? 2 : 1,
                        s = i.height + t.height + e.height,
                        o = n.globals.isMultiLineX ? 1.2 : n.globals.LINE_HEIGHT_RATIO,
                        r = n.globals.rotateXLabels ? 22 : 10,
                        l = n.globals.rotateXLabels && "bottom" === n.config.legend.position ? 10 : 0;
                    this.xAxisHeight = s * o + a * r + l, this.xAxisWidth = t.width, this.xAxisHeight - e.height > n.config.xaxis.labels.maxHeight && (this.xAxisHeight = n.config.xaxis.labels.maxHeight), n.config.xaxis.labels.minHeight && this.xAxisHeight < n.config.xaxis.labels.minHeight && (this.xAxisHeight = n.config.xaxis.labels.minHeight), n.config.xaxis.floating && (this.xAxisHeight = 0); var h = 0,
                        c = 0;
                    n.config.yaxis.forEach((function(t) { h += t.labels.minWidth, c += t.labels.maxWidth })), this.yAxisWidth < h && (this.yAxisWidth = h), this.yAxisWidth > c && (this.yAxisWidth = c) } }]), t }(),
        ot = function() {
            function t(e) { n(this, t), this.w = e.w, this.lgCtx = e } return s(t, [{ key: "getLegendStyles", value: function() { var t = document.createElement("style");
                    t.setAttribute("type", "text/css"); var e = document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"); return t.appendChild(e), t } }, { key: "getLegendBBox", value: function() { var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
                        e = t.width; return { clwh: t.height, clww: e } } }, { key: "appendToForeignObject", value: function() { var t = this.w.globals;
                    t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"); var e = t.dom.elLegendForeign;
                    e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node) } }, { key: "toggleDataSeries", value: function(t, e) { var i = this,
                        n = this.w; if (n.globals.axisCharts || "radialBar" === n.config.chart.type) { n.globals.resized = !0; var a = null,
                            s = null;
                        n.globals.risingSeries = [], n.globals.axisCharts ? (a = n.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), s = parseInt(a.getAttribute("data:realIndex"), 10)) : (a = n.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), s = parseInt(a.getAttribute("rel"), 10) - 1), e ? [{ cs: n.globals.collapsedSeries, csi: n.globals.collapsedSeriesIndices }, { cs: n.globals.ancillaryCollapsedSeries, csi: n.globals.ancillaryCollapsedSeriesIndices }].forEach((function(t) { i.riseCollapsedSeries(t.cs, t.csi, s) })) : this.hideSeries({ seriesEl: a, realIndex: s }) } else { var o = n.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")),
                            r = n.config.chart.type; if ("pie" === r || "polarArea" === r || "donut" === r) { var l = n.config.plotOptions.pie.donut.labels;
                            new v(this.lgCtx.ctx).pathMouseDown(o.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node, l) }
                        o.fire("click") } } }, { key: "hideSeries", value: function(t) { var e = t.seriesEl,
                        i = t.realIndex,
                        n = this.w,
                        a = g.clone(n.config.series); if (n.globals.axisCharts) { var s = !1; if (n.config.yaxis[i] && n.config.yaxis[i].show && n.config.yaxis[i].showAlways && (s = !0, n.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (n.globals.ancillaryCollapsedSeries.push({ index: i, data: a[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), n.globals.ancillaryCollapsedSeriesIndices.push(i))), !s) { n.globals.collapsedSeries.push({ index: i, data: a[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), n.globals.collapsedSeriesIndices.push(i); var o = n.globals.risingSeries.indexOf(i);
                            n.globals.risingSeries.splice(o, 1) } } else n.globals.collapsedSeries.push({ index: i, data: a[i] }), n.globals.collapsedSeriesIndices.push(i); for (var r = e.childNodes, l = 0; l < r.length; l++) r[l].classList.contains("apexcharts-series-markers-wrap") && (r[l].classList.contains("apexcharts-hide") ? r[l].classList.remove("apexcharts-hide") : r[l].classList.add("apexcharts-hide"));
                    n.globals.allSeriesCollapsed = n.globals.collapsedSeries.length === n.config.series.length, a = this._getSeriesBasedOnCollapsedState(a), this.lgCtx.ctx.updateHelpers._updateSeries(a, n.config.chart.animations.dynamicAnimation.enabled) } }, { key: "riseCollapsedSeries", value: function(t, e, i) { var n = this.w,
                        a = g.clone(n.config.series); if (t.length > 0) { for (var s = 0; s < t.length; s++) t[s].index === i && (n.globals.axisCharts ? (a[i].data = t[s].data.slice(), t.splice(s, 1), e.splice(s, 1), n.globals.risingSeries.push(i)) : (a[i] = t[s].data, t.splice(s, 1), e.splice(s, 1), n.globals.risingSeries.push(i)));
                        a = this._getSeriesBasedOnCollapsedState(a), this.lgCtx.ctx.updateHelpers._updateSeries(a, n.config.chart.animations.dynamicAnimation.enabled) } } }, { key: "_getSeriesBasedOnCollapsedState", value: function(t) { var e = this.w; return e.globals.axisCharts ? t.forEach((function(i, n) { e.globals.collapsedSeriesIndices.indexOf(n) > -1 && (t[n].data = []) })) : t.forEach((function(i, n) { e.globals.collapsedSeriesIndices.indexOf(n) > -1 && (t[n] = 0) })), t } }]), t }(),
        rt = function() {
            function t(e, i) { n(this, t), this.ctx = e, this.w = e.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new ot(this) } return s(t, [{ key: "init", value: function() { var t = this.w,
                        e = t.globals,
                        i = t.config; if ((i.legend.showForSingleSeries && 1 === e.series.length || this.isBarsDistributed || e.series.length > 1 || !e.axisCharts) && i.legend.show) { for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                        this.drawLegends(), g.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical() } } }, { key: "drawLegends", value: function() { var t = this,
                        e = this.w,
                        i = e.config.legend.fontFamily,
                        n = e.globals.seriesNames,
                        a = e.globals.colors.slice(); if ("heatmap" === e.config.chart.type) { var s = e.config.plotOptions.heatmap.colorScale.ranges;
                        n = s.map((function(t) { return t.name ? t.name : t.from + " - " + t.to })), a = s.map((function(t) { return t.color })) } else this.isBarsDistributed && (n = e.globals.labels.slice());
                    e.config.legend.customLegendItems.length && (n = e.config.legend.customLegendItems); for (var o = e.globals.legendFormatter, r = e.config.legend.inverseOrder, l = r ? n.length - 1 : 0; r ? l >= 0 : l <= n.length - 1; r ? l-- : l++) { var h = o(n[l], { seriesIndex: l, w: e }),
                            c = !1,
                            d = !1; if (e.globals.collapsedSeries.length > 0)
                            for (var u = 0; u < e.globals.collapsedSeries.length; u++) e.globals.collapsedSeries[u].index === l && (c = !0); if (e.globals.ancillaryCollapsedSeriesIndices.length > 0)
                            for (var p = 0; p < e.globals.ancillaryCollapsedSeriesIndices.length; p++) e.globals.ancillaryCollapsedSeriesIndices[p] === l && (d = !0); var f = document.createElement("span");
                        f.classList.add("apexcharts-legend-marker"); var m = e.config.legend.markers.offsetX,
                            x = e.config.legend.markers.offsetY,
                            y = e.config.legend.markers.height,
                            w = e.config.legend.markers.width,
                            _ = e.config.legend.markers.strokeWidth,
                            k = e.config.legend.markers.strokeColor,
                            S = e.config.legend.markers.radius,
                            A = f.style;
                        A.background = a[l], A.color = a[l], A.setProperty("background", a[l], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[l] && (A.background = e.config.legend.markers.fillColors[l]), void 0 !== e.globals.seriesColors[l] && (A.background = e.globals.seriesColors[l], A.color = e.globals.seriesColors[l]), A.height = Array.isArray(y) ? parseFloat(y[l]) + "px" : parseFloat(y) + "px", A.width = Array.isArray(w) ? parseFloat(w[l]) + "px" : parseFloat(w) + "px", A.left = (Array.isArray(m) ? parseFloat(m[l]) : parseFloat(m)) + "px", A.top = (Array.isArray(x) ? parseFloat(x[l]) : parseFloat(x)) + "px", A.borderWidth = Array.isArray(_) ? _[l] : _, A.borderColor = Array.isArray(k) ? k[l] : k, A.borderRadius = Array.isArray(S) ? parseFloat(S[l]) + "px" : parseFloat(S) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[l] && (f.innerHTML = e.config.legend.markers.customHTML[l]()) : f.innerHTML = e.config.legend.markers.customHTML()), v.setAttrs(f, { rel: l + 1, "data:collapsed": c || d }), (c || d) && f.classList.add("apexcharts-inactive-legend"); var C = document.createElement("div"),
                            P = document.createElement("span");
                        P.classList.add("apexcharts-legend-text"), P.innerHTML = Array.isArray(h) ? h.join(" ") : h; var L = e.config.legend.labels.useSeriesColors ? e.globals.colors[l] : e.config.legend.labels.colors;
                        L || (L = e.config.chart.foreColor), P.style.color = L, P.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", P.style.fontWeight = e.config.legend.fontWeight, P.style.fontFamily = i || e.config.chart.fontFamily, v.setAttrs(P, { rel: l + 1, i: l, "data:default-text": encodeURIComponent(h), "data:collapsed": c || d }), C.appendChild(f), C.appendChild(P); var T = new b(this.ctx);
                        e.config.legend.showForZeroSeries || 0 === T.getSeriesTotalByIndex(l) && T.seriesHaveSameValues(l) && !T.isSeriesNull(l) && -1 === e.globals.collapsedSeriesIndices.indexOf(l) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(l) && C.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries || T.isSeriesNull(l) && -1 === e.globals.collapsedSeriesIndices.indexOf(l) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(l) && C.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(C), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e.config.legend.position), C.classList.add("apexcharts-legend-series"), C.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", v.setAttrs(C, { rel: l + 1, seriesName: g.escapeString(n[l]), "data:collapsed": c || d }), (c || d) && C.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || C.classList.add("apexcharts-no-click") }
                    e.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && 0 === e.config.legend.customLegendItems.length && (e.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0)) } }, { key: "setLegendWrapXY", value: function(t, e) { var i = this.w,
                        n = i.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                        a = n.getBoundingClientRect(),
                        s = 0,
                        o = 0; if ("bottom" === i.config.legend.position) o += i.globals.svgHeight - a.height / 2;
                    else if ("top" === i.config.legend.position) { var r = new st(this.ctx),
                            l = r.dimHelpers.getTitleSubtitleCoords("title").height,
                            h = r.dimHelpers.getTitleSubtitleCoords("subtitle").height;
                        o = o + (l > 0 ? l - 10 : 0) + (h > 0 ? h - 10 : 0) }
                    n.style.position = "absolute", s = s + t + i.config.legend.offsetX, o = o + e + i.config.legend.offsetY, n.style.left = s + "px", n.style.top = o + "px", "bottom" === i.config.legend.position ? (n.style.top = "auto", n.style.bottom = 5 - i.config.legend.offsetY + "px") : "right" === i.config.legend.position && (n.style.left = "auto", n.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach((function(t) { n.style[t] && (n.style[t] = parseInt(i.config.legend[t], 10) + "px") })) } }, { key: "legendAlignHorizontal", value: function() { var t = this.w;
                    t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0; var e = this.legendHelpers.getLegendBBox(),
                        i = new st(this.ctx),
                        n = i.dimHelpers.getTitleSubtitleCoords("title"),
                        a = i.dimHelpers.getTitleSubtitleCoords("subtitle"),
                        s = 0; "bottom" === t.config.legend.position ? s = -e.clwh / 1.8 : "top" === t.config.legend.position && (s = n.height + a.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, s) } }, { key: "legendAlignVertical", value: function() { var t = this.w,
                        e = this.legendHelpers.getLegendBBox(),
                        i = 0; "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20) } }, { key: "onLegendHovered", value: function(t) { var e = this.w,
                        i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker"); if ("heatmap" === e.config.chart.type || this.isBarsDistributed) { if (i) { var n = parseInt(t.target.getAttribute("rel"), 10) - 1;
                            this.ctx.events.fireEvent("legendHover", [this.ctx, n, this.w]), new F(this.ctx).highlightRangeInSeries(t, t.target) } } else !t.target.classList.contains("apexcharts-inactive-legend") && i && new F(this.ctx).toggleSeriesOnHover(t, t.target) } }, { key: "onLegendClick", value: function(t) { var e = this.w; if (!e.config.legend.customLegendItems.length && (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker"))) { var i = parseInt(t.target.getAttribute("rel"), 10) - 1,
                            n = "true" === t.target.getAttribute("data:collapsed"),
                            a = this.w.config.chart.events.legendClick; "function" == typeof a && a(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]); var s = this.w.config.legend.markers.onClick; "function" == typeof s && t.target.classList.contains("apexcharts-legend-marker") && (s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), "treemap" !== e.config.chart.type && "heatmap" !== e.config.chart.type && !this.isBarsDistributed && e.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, n) } } }]), t }(),
        lt = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w; var i = this.w;
                this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = i.globals.minX, this.maxX = i.globals.maxX } return s(t, [{ key: "createToolbar", value: function() { var t = this,
                        e = this.w,
                        i = function() { return document.createElement("div") },
                        n = i(); if (n.setAttribute("class", "apexcharts-toolbar"), n.style.top = e.config.chart.toolbar.offsetY + "px", n.style.right = 3 - e.config.chart.toolbar.offsetX + "px", e.globals.dom.elWrap.appendChild(n), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = e.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))
                        for (var a = 0; a < this.t.customIcons.length; a++) this.elCustomIcons.push(i()); var s = [],
                        o = function(i, n, a) { var o = i.toLowerCase();
                            t.t[o] && e.config.chart.zoom.enabled && s.push({ el: n, icon: "string" == typeof t.t[o] ? t.t[o] : a, title: t.localeValues[i], class: "apexcharts-".concat(o, "-icon") }) };
                    o("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), o("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'); var r = function(i) { t.t[i] && e.config.chart[i].enabled && s.push({ el: "zoom" === i ? t.elZoom : t.elSelection, icon: "string" == typeof t.t[i] ? t.t[i] : "zoom" === i ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>', title: t.localeValues["zoom" === i ? "selectionZoom" : "selection"], class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i, "-icon") }) };
                    r("zoom"), r("selection"), this.t.pan && e.config.chart.zoom.enabled && s.push({ el: this.elPan, icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>', title: this.localeValues.pan, class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && s.push({ el: this.elMenuIcon, icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" }); for (var l = 0; l < this.elCustomIcons.length; l++) s.push({ el: this.elCustomIcons[l], icon: this.t.customIcons[l].icon, title: this.t.customIcons[l].title, index: this.t.customIcons[l].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l].class });
                    s.forEach((function(t, e) { t.index && g.moveIndexInArray(s, e, t.index) })); for (var h = 0; h < s.length; h++) v.setAttrs(s[h].el, { class: s[h].class, title: s[h].title }), s[h].el.innerHTML = s[h].icon, n.appendChild(s[h].el);
                    this._createHamburgerMenu(n), e.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners() } }, { key: "_createHamburgerMenu", value: function(t) { this.elMenuItems = [], t.appendChild(this.elMenu), v.setAttrs(this.elMenu, { class: "apexcharts-menu" }); var e = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }];
                    this.w.globals.allSeriesHasEqualX || e.splice(2, 1); for (var i = 0; i < e.length; i++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, v.setAttrs(this.elMenuItems[i], { class: "apexcharts-menu-item ".concat(e[i].name), title: e[i].title }), this.elMenu.appendChild(this.elMenuItems[i]) } }, { key: "addToolbarEventListeners", value: function() { var t = this;
                    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function(e) { e.classList.contains("exportSVG") ? e.addEventListener("click", t.handleDownload.bind(t, "svg")) : e.classList.contains("exportPNG") ? e.addEventListener("click", t.handleDownload.bind(t, "png")) : e.classList.contains("exportCSV") && e.addEventListener("click", t.handleDownload.bind(t, "csv")) })); for (var e = 0; e < this.t.customIcons.length; e++) this.elCustomIcons[e].addEventListener("click", this.t.customIcons[e].click.bind(this, this.ctx, this.ctx.w)) } }, { key: "toggleZoomSelection", value: function(t) { this.ctx.getSyncedCharts().forEach((function(e) { e.ctx.toolbar.toggleOtherControls(); var i = "selection" === t ? e.ctx.toolbar.elSelection : e.ctx.toolbar.elZoom,
                            n = "selection" === t ? "selectionEnabled" : "zoomEnabled";
                        e.w.globals[n] = !e.w.globals[n], i.classList.contains(e.ctx.toolbar.selectedClass) ? i.classList.remove(e.ctx.toolbar.selectedClass) : i.classList.add(e.ctx.toolbar.selectedClass) })) } }, { key: "getToolbarIconsReference", value: function() { var t = this.w;
                    this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon")) } }, { key: "enableZoomPanFromToolbar", value: function(t) { this.toggleOtherControls(), "pan" === t ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0; var e = "pan" === t ? this.elPan : this.elZoom,
                        i = "pan" === t ? this.elZoom : this.elPan;
                    e && e.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass) } }, { key: "togglePanning", value: function() { this.ctx.getSyncedCharts().forEach((function(t) { t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled = !t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass) ? t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass) : t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass) })) } }, { key: "toggleOtherControls", value: function() { var t = this,
                        e = this.w;
                    e.globals.panEnabled = !1, e.globals.zoomEnabled = !1, e.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach((function(e) { e && e.classList.remove(t.selectedClass) })) } }, { key: "handleZoomIn", value: function() { var t = this.w;
                    t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY); var e = (this.minX + this.maxX) / 2,
                        i = (this.minX + e) / 2,
                        n = (this.maxX + e) / 2,
                        a = this._getNewMinXMaxX(i, n);
                    t.globals.disableZoomIn || this.zoomUpdateOptions(a.minX, a.maxX) } }, { key: "handleZoomOut", value: function() { var t = this.w; if (t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY), !("datetime" === t.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) { var e = (this.minX + this.maxX) / 2,
                            i = this.minX - (e - this.minX),
                            n = this.maxX - (e - this.maxX),
                            a = this._getNewMinXMaxX(i, n);
                        t.globals.disableZoomOut || this.zoomUpdateOptions(a.minX, a.maxX) } } }, { key: "_getNewMinXMaxX", value: function(t, e) { var i = this.w.config.xaxis.convertedCatToNumeric; return { minX: i ? Math.floor(t) : t, maxX: i ? Math.floor(e) : e } } }, { key: "zoomUpdateOptions", value: function(t, e) { var i = this.w; if (void 0 !== t || void 0 !== e) { if (!(i.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = i.globals.dataPoints), e - t < 2))) { var n = { min: t, max: e },
                                a = this.getBeforeZoomRange(n);
                            a && (n = a.xaxis); var s = { xaxis: n },
                                o = g.clone(i.globals.initialConfig.yaxis);
                            i.config.chart.zoom.autoScaleYaxis && (o = new V(this.ctx).autoScaleY(this.ctx, o, { xaxis: n })), i.config.chart.group || (s.yaxis = o), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(s, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(n, o) } } else this.handleZoomReset() } }, { key: "zoomCallback", value: function(t, e) { "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, { xaxis: t, yaxis: e }) } }, { key: "getBeforeZoomRange", value: function(t, e) { var i = null; return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, { xaxis: t, yaxis: e })), i } }, { key: "toggleMenu", value: function() { var t = this;
                    window.setTimeout((function() { t.elMenu.classList.contains("apexcharts-menu-open") ? t.elMenu.classList.remove("apexcharts-menu-open") : t.elMenu.classList.add("apexcharts-menu-open") }), 0) } }, { key: "handleDownload", value: function(t) { var e = this.w,
                        i = new Y(this.ctx); switch (t) {
                        case "svg":
                            i.exportToSVG(this.ctx); break;
                        case "png":
                            i.exportToPng(this.ctx); break;
                        case "csv":
                            i.exportToCSV({ series: e.config.series, columnDelimiter: e.config.chart.toolbar.export.csv.columnDelimiter }) } } }, { key: "handleZoomReset", value: function(t) { this.ctx.getSyncedCharts().forEach((function(t) { var e = t.w; if (e.globals.lastXAxis.min = void 0, e.globals.lastXAxis.max = void 0, t.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.beforeResetZoom) { var i = e.config.chart.events.beforeResetZoom(t, e);
                            i && t.updateHelpers.revertDefaultAxisMinMax(i) } "function" == typeof e.config.chart.events.zoomed && t.ctx.toolbar.zoomCallback({ min: e.config.xaxis.min, max: e.config.xaxis.max }), e.globals.zoomed = !1; var n = t.ctx.series.emptyCollapsedSeries(g.clone(e.globals.initialSeries));
                        t.updateHelpers._updateSeries(n, e.config.chart.animations.dynamicAnimation.enabled) })) } }, { key: "destroy", value: function() { this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null } }]), t }(),
        ht = function(t) { r(i, t); var e = d(i);

            function i(t) { var a; return n(this, i), (a = e.call(this, t)).ctx = t, a.w = t.w, a.dragged = !1, a.graphics = new v(a.ctx), a.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], a.clientX = 0, a.clientY = 0, a.startX = 0, a.endX = 0, a.dragX = 0, a.startY = 0, a.endY = 0, a.dragY = 0, a.moveDirection = "none", a } return s(i, [{ key: "init", value: function(t) { var e = this,
                        i = t.xyRatios,
                        n = this.w,
                        a = this;
                    this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = n.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), n.globals.dom.elGraphical.add(this.zoomRect), n.globals.dom.elGraphical.add(this.selectionRect), "x" === n.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: n.globals.gridWidth, maxY: n.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === n.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: n.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = n.globals.dom.baseEl.querySelector("".concat(n.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((function(t) { e.hoverArea.addEventListener(t, a.svgMouseEvents.bind(a, i), { capture: !1, passive: !0 }) })) } }, { key: "destroy", value: function() { this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null } }, { key: "svgMouseEvents", value: function(t, e) { var i = this.w,
                        n = this,
                        a = this.ctx.toolbar,
                        s = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type,
                        o = i.config.chart.toolbar.autoSelected; if (e.shiftKey ? (this.shiftWasPressed = !0, a.enableZoomPanFromToolbar("pan" === o ? "zoom" : "pan")) : this.shiftWasPressed && (a.enableZoomPanFromToolbar(o), this.shiftWasPressed = !1), e.target) { var r, l = e.target.classList; if (e.target.parentNode && null !== e.target.parentNode && (r = e.target.parentNode.classList), !(l.contains("apexcharts-selection-rect") || l.contains("apexcharts-legend-marker") || l.contains("apexcharts-legend-text") || r && r.contains("apexcharts-toolbar"))) { if (n.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX, n.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY, "mousedown" === e.type && 1 === e.which) { var h = n.gridRect.getBoundingClientRect();
                                n.startX = n.clientX - h.left, n.startY = n.clientY - h.top, n.dragged = !1, n.w.globals.mousedown = !0 } if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (n.dragged = !0, i.globals.panEnabled ? (i.globals.selection = null, n.w.globals.mousedown && n.panDragging({ context: n, zoomtype: s, xyRatios: t })) : (n.w.globals.mousedown && i.globals.zoomEnabled || n.w.globals.mousedown && i.globals.selectionEnabled) && (n.selection = n.selectionDrawing({ context: n, zoomtype: s }))), "mouseup" === e.type || "touchend" === e.type || "mouseleave" === e.type) { var c = n.gridRect.getBoundingClientRect();
                                n.w.globals.mousedown && (n.endX = n.clientX - c.left, n.endY = n.clientY - c.top, n.dragX = Math.abs(n.endX - n.startX), n.dragY = Math.abs(n.endY - n.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) && n.selectionDrawn({ context: n, zoomtype: s }), i.globals.panEnabled && i.config.xaxis.convertedCatToNumeric && n.delayedPanScrolled()), i.globals.zoomEnabled && n.hideSelectionRect(this.selectionRect), n.dragged = !1, n.w.globals.mousedown = !1 }
                            this.makeSelectionRectDraggable() } } } }, { key: "makeSelectionRectDraggable", value: function() { var t = this.w; if (this.selectionRect) { var e = this.selectionRect.node.getBoundingClientRect();
                        e.width > 0 && e.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: t.globals.gridWidth, maxY: t.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing")) } } }, { key: "preselectedSelection", value: function() { var t = this.w,
                        e = this.xyRatios; if (!t.globals.zoomEnabled)
                        if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection);
                        else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) { var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
                            n = { x: i, y: 0, width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i, height: t.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 };
                        this.drawSelectionRect(n), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events.selection && t.config.chart.events.selection(this.ctx, { xaxis: { min: t.config.chart.selection.xaxis.min, max: t.config.chart.selection.xaxis.max }, yaxis: {} }) } } }, { key: "drawSelectionRect", value: function(t) { var e = t.x,
                        i = t.y,
                        n = t.width,
                        a = t.height,
                        s = t.translateX,
                        o = void 0 === s ? 0 : s,
                        r = t.translateY,
                        l = void 0 === r ? 0 : r,
                        h = this.w,
                        c = this.zoomRect,
                        d = this.selectionRect; if (this.dragged || null !== h.globals.selection) { var u = { transform: "translate(" + o + ", " + l + ")" };
                        h.globals.zoomEnabled && this.dragged && (n < 0 && (n = 1), c.attr({ x: e, y: i, width: n, height: a, fill: h.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": h.config.chart.zoom.zoomedArea.fill.opacity, stroke: h.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": h.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": h.config.chart.zoom.zoomedArea.stroke.opacity }), v.setAttrs(c.node, u)), h.globals.selectionEnabled && (d.attr({ x: e, y: i, width: n > 0 ? n : 0, height: a > 0 ? a : 0, fill: h.config.chart.selection.fill.color, "fill-opacity": h.config.chart.selection.fill.opacity, stroke: h.config.chart.selection.stroke.color, "stroke-width": h.config.chart.selection.stroke.width, "stroke-dasharray": h.config.chart.selection.stroke.dashArray, "stroke-opacity": h.config.chart.selection.stroke.opacity }), v.setAttrs(d.node, u)) } } }, { key: "hideSelectionRect", value: function(t) { t && t.attr({ x: 0, y: 0, width: 0, height: 0 }) } }, { key: "selectionDrawing", value: function(t) { var e, i = t.context,
                        n = t.zoomtype,
                        a = this.w,
                        s = i,
                        o = this.gridRect.getBoundingClientRect(),
                        r = s.startX - 1,
                        l = s.startY,
                        h = !1,
                        c = !1,
                        d = s.clientX - o.left - r,
                        u = s.clientY - o.top - l; return Math.abs(d + r) > a.globals.gridWidth ? d = a.globals.gridWidth - r : s.clientX - o.left < 0 && (d = r), r > s.clientX - o.left && (h = !0, d = Math.abs(d)), l > s.clientY - o.top && (c = !0, u = Math.abs(u)), e = "x" === n ? { x: h ? r - d : r, y: 0, width: d, height: a.globals.gridHeight } : "y" === n ? { x: 0, y: c ? l - u : l, width: a.globals.gridWidth, height: u } : { x: h ? r - d : r, y: c ? l - u : l, width: d, height: u }, s.drawSelectionRect(e), s.selectionDragging("resizing"), e } }, { key: "selectionDragging", value: function(t, e) { var i = this,
                        n = this.w,
                        a = this.xyRatios,
                        s = this.selectionRect,
                        o = 0; "resizing" === t && (o = 30); var r = function(t) { return parseFloat(s.node.getAttribute(t)) },
                        l = { x: r("x"), y: r("y"), width: r("width"), height: r("height") };
                    n.globals.selection = l, "function" == typeof n.config.chart.events.selection && n.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout((function() { var t = i.gridRect.getBoundingClientRect(),
                            e = s.node.getBoundingClientRect(),
                            o = { xaxis: { min: n.globals.xAxisScale.niceMin + (e.left - t.left) * a.xRatio, max: n.globals.xAxisScale.niceMin + (e.right - t.left) * a.xRatio }, yaxis: { min: n.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * a.yRatio[0], max: n.globals.yAxisScale[0].niceMax - (e.top - t.top) * a.yRatio[0] } };
                        n.config.chart.events.selection(i.ctx, o), n.config.chart.brush.enabled && void 0 !== n.config.chart.events.brushScrolled && n.config.chart.events.brushScrolled(i.ctx, o) }), o)) } }, { key: "selectionDrawn", value: function(t) { var e = t.context,
                        i = t.zoomtype,
                        n = this.w,
                        a = e,
                        s = this.xyRatios,
                        o = this.ctx.toolbar; if (a.startX > a.endX) { var r = a.startX;
                        a.startX = a.endX, a.endX = r } if (a.startY > a.endY) { var l = a.startY;
                        a.startY = a.endY, a.endY = l } var h = void 0,
                        c = void 0;
                    n.globals.isRangeBar ? (h = n.globals.yAxisScale[0].niceMin + a.startX * s.invertedYRatio, c = n.globals.yAxisScale[0].niceMin + a.endX * s.invertedYRatio) : (h = n.globals.xAxisScale.niceMin + a.startX * s.xRatio, c = n.globals.xAxisScale.niceMin + a.endX * s.xRatio); var d = [],
                        u = []; if (n.config.yaxis.forEach((function(t, e) { d.push(n.globals.yAxisScale[e].niceMax - s.yRatio[e] * a.startY), u.push(n.globals.yAxisScale[e].niceMax - s.yRatio[e] * a.endY) })), a.dragged && (a.dragX > 10 || a.dragY > 10) && h !== c)
                        if (n.globals.zoomEnabled) { var p = g.clone(n.globals.initialConfig.yaxis),
                                f = g.clone(n.globals.initialConfig.xaxis); if (n.globals.zoomed = !0, n.config.xaxis.convertedCatToNumeric && (h = Math.floor(h), c = Math.floor(c), h < 1 && (h = 1, c = n.globals.dataPoints), c - h < 2 && (c = h + 1)), "xy" !== i && "x" !== i || (f = { min: h, max: c }), "xy" !== i && "y" !== i || p.forEach((function(t, e) { p[e].min = u[e], p[e].max = d[e] })), n.config.chart.zoom.autoScaleYaxis) { var m = new V(a.ctx);
                                p = m.autoScaleY(a.ctx, p, { xaxis: f }) } if (o) { var x = o.getBeforeZoomRange(f, p);
                                x && (f = x.xaxis ? x.xaxis : f, p = x.yaxis ? x.yaxis : p) } var v = { xaxis: f };
                            n.config.chart.group || (v.yaxis = p), a.ctx.updateHelpers._updateOptions(v, !1, a.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof n.config.chart.events.zoomed && o.zoomCallback(f, p) } else if (n.globals.selectionEnabled) { var b, y = null;
                        b = { min: h, max: c }, "xy" !== i && "y" !== i || (y = g.clone(n.config.yaxis)).forEach((function(t, e) { y[e].min = u[e], y[e].max = d[e] })), n.globals.selection = a.selection, "function" == typeof n.config.chart.events.selection && n.config.chart.events.selection(a.ctx, { xaxis: b, yaxis: y }) } } }, { key: "panDragging", value: function(t) { var e = t.context,
                        i = this.w,
                        n = e; if (void 0 !== i.globals.lastClientPosition.x) { var a = i.globals.lastClientPosition.x - n.clientX,
                            s = i.globals.lastClientPosition.y - n.clientY;
                        Math.abs(a) > Math.abs(s) && a > 0 ? this.moveDirection = "left" : Math.abs(a) > Math.abs(s) && a < 0 ? this.moveDirection = "right" : Math.abs(s) > Math.abs(a) && s > 0 ? this.moveDirection = "up" : Math.abs(s) > Math.abs(a) && s < 0 && (this.moveDirection = "down") }
                    i.globals.lastClientPosition = { x: n.clientX, y: n.clientY }; var o = i.globals.isRangeBar ? i.globals.minY : i.globals.minX,
                        r = i.globals.isRangeBar ? i.globals.maxY : i.globals.maxX;
                    i.config.xaxis.convertedCatToNumeric || n.panScrolled(o, r) } }, { key: "delayedPanScrolled", value: function() { var t = this.w,
                        e = t.globals.minX,
                        i = t.globals.maxX,
                        n = (t.globals.maxX - t.globals.minX) / 2; "left" === this.moveDirection ? (e = t.globals.minX + n, i = t.globals.maxX + n) : "right" === this.moveDirection && (e = t.globals.minX - n, i = t.globals.maxX - n), e = Math.floor(e), i = Math.floor(i), this.updateScrolledChart({ xaxis: { min: e, max: i } }, e, i) } }, { key: "panScrolled", value: function(t, e) { var i = this.w,
                        n = this.xyRatios,
                        a = g.clone(i.globals.initialConfig.yaxis),
                        s = n.xRatio,
                        o = i.globals.minX,
                        r = i.globals.maxX;
                    i.globals.isRangeBar && (s = n.invertedYRatio, o = i.globals.minY, r = i.globals.maxY), "left" === this.moveDirection ? (t = o + i.globals.gridWidth / 15 * s, e = r + i.globals.gridWidth / 15 * s) : "right" === this.moveDirection && (t = o - i.globals.gridWidth / 15 * s, e = r - i.globals.gridWidth / 15 * s), i.globals.isRangeBar || (t < i.globals.initialMinX || e > i.globals.initialMaxX) && (t = o, e = r); var l = { min: t, max: e };
                    i.config.chart.zoom.autoScaleYaxis && (a = new V(this.ctx).autoScaleY(this.ctx, a, { xaxis: l })); var h = { xaxis: { min: t, max: e } };
                    i.config.chart.group || (h.yaxis = a), this.updateScrolledChart(h, t, e) } }, { key: "updateScrolledChart", value: function(t, e, i) { var n = this.w;
                    this.ctx.updateHelpers._updateOptions(t, !1, !1), "function" == typeof n.config.chart.events.scrolled && n.config.chart.events.scrolled(this.ctx, { xaxis: { min: e, max: i } }) } }]), i }(lt),
        ct = function() {
            function t(e) { n(this, t), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx } return s(t, [{ key: "getNearestValues", value: function(t) { var e = t.hoverArea,
                        i = t.elGrid,
                        n = t.clientX,
                        a = t.clientY,
                        s = this.w,
                        o = i.getBoundingClientRect(),
                        r = o.width,
                        l = o.height,
                        h = r / (s.globals.dataPoints - 1),
                        c = l / s.globals.dataPoints,
                        d = this.hasBars();!s.globals.comboCharts && !d || s.config.xaxis.convertedCatToNumeric || (h = r / s.globals.dataPoints); var u = n - o.left - s.globals.barPadForNumericAxis,
                        p = a - o.top;
                    u < 0 || p < 0 || u > r || p > l ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : s.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : s.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan")); var f = Math.round(u / h),
                        m = Math.floor(p / c);
                    d && !s.config.xaxis.convertedCatToNumeric && (f = Math.ceil(u / h), f -= 1); var x = null,
                        v = null,
                        b = [],
                        y = []; if (s.globals.seriesXvalues.forEach((function(t) { b.push([t[0] + 1e-6].concat(t)) })), s.globals.seriesYvalues.forEach((function(t) { y.push([t[0] + 1e-6].concat(t)) })), b = b.map((function(t) { return t.filter((function(t) { return g.isNumber(t) })) })), y = y.map((function(t) { return t.filter((function(t) { return g.isNumber(t) })) })), s.globals.isXNumeric) { var w = this.ttCtx.getElGrid().getBoundingClientRect(),
                            _ = u * (w.width / r),
                            k = p * (w.height / l);
                        x = (v = this.closestInMultiArray(_, k, b, y)).index, f = v.j, null !== x && (b = s.globals.seriesXvalues[x], f = (v = this.closestInArray(_, b)).index) } return s.globals.capturedSeriesIndex = null === x ? -1 : x, (!f || f < 1) && (f = 0), s.globals.isBarHorizontal ? s.globals.capturedDataPointIndex = m : s.globals.capturedDataPointIndex = f, { capturedSeries: x, j: s.globals.isBarHorizontal ? m : f, hoverX: u, hoverY: p } } }, { key: "closestInMultiArray", value: function(t, e, i, n) { var a = this.w,
                        s = 0,
                        o = null,
                        r = -1;
                    a.globals.series.length > 1 ? s = this.getFirstActiveXArray(i) : o = 0; var l = i[s][0],
                        h = Math.abs(t - l); if (i.forEach((function(e) { e.forEach((function(e, i) { var n = Math.abs(t - e);
                                n < h && (h = n, r = i) })) })), -1 !== r) { var c = n[s][r],
                            d = Math.abs(e - c);
                        o = s, n.forEach((function(t, i) { var n = Math.abs(e - t[r]);
                            n < d && (d = n, o = i) })) } return { index: o, j: r } } }, { key: "getFirstActiveXArray", value: function(t) { for (var e = this.w, i = 0, n = t.map((function(t, e) { return t.length > 0 ? e : -1 })), a = 0; a < n.length; a++)
                        if (-1 !== n[a] && -1 === e.globals.collapsedSeriesIndices.indexOf(a) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(a)) { i = n[a]; break }
                    return i } }, { key: "closestInArray", value: function(t, e) { for (var i = e[0], n = null, a = Math.abs(t - i), s = 0; s < e.length; s++) { var o = Math.abs(t - e[s]);
                        o < a && (a = o, n = s) } return { index: n } } }, { key: "isXoverlap", value: function(t) { var e = [],
                        i = this.w.globals.seriesX.filter((function(t) { return void 0 !== t[0] })); if (i.length > 0)
                        for (var n = 0; n < i.length - 1; n++) void 0 !== i[n][t] && void 0 !== i[n + 1][t] && i[n][t] !== i[n + 1][t] && e.push("unEqual"); return 0 === e.length } }, { key: "isInitialSeriesSameLen", value: function() { for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
                        if (e[i].data.length !== e[i + 1].data.length) { t = !1; break }
                    return t } }, { key: "getBarsHeight", value: function(t) { return u(t).reduce((function(t, e) { return t + e.getBBox().height }), 0) } }, { key: "getElMarkers", value: function() { return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers") } }, { key: "getAllMarkers", value: function() { var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
                    (t = u(t)).sort((function(t, e) { var i = Number(t.getAttribute("data:realIndex")),
                            n = Number(e.getAttribute("data:realIndex")); return n < i ? 1 : n > i ? -1 : 0 })); var e = []; return t.forEach((function(t) { e.push(t.querySelector(".apexcharts-marker")) })), e } }, { key: "hasMarkers", value: function() { return this.getElMarkers().length > 0 } }, { key: "getElBars", value: function() { return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series") } }, { key: "hasBars", value: function() { return this.getElBars().length > 0 } }, { key: "getHoverMarkerSize", value: function(t) { var e = this.w,
                        i = e.config.markers.hover.size; return void 0 === i && (i = e.globals.markers.size[t] + e.config.markers.hover.sizeOffset), i } }, { key: "toggleAllTooltipSeriesGroups", value: function(t) { var e = this.w,
                        i = this.ttCtx;
                    0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group")); for (var n = i.allTooltipSeriesGroups, a = 0; a < n.length; a++) "enable" === t ? (n[a].classList.add("apexcharts-active"), n[a].style.display = e.config.tooltip.items.display) : (n[a].classList.remove("apexcharts-active"), n[a].style.display = "none") } }]), t }(),
        dt = function() {
            function t(e) { n(this, t), this.w = e.w, this.ctx = e.ctx, this.ttCtx = e, this.tooltipUtil = new ct(e) } return s(t, [{ key: "drawSeriesTexts", value: function(t) { var e = t.shared,
                        i = void 0 === e || e,
                        n = t.ttItems,
                        a = t.i,
                        s = void 0 === a ? 0 : a,
                        o = t.j,
                        r = void 0 === o ? null : o,
                        l = t.y1,
                        h = t.y2,
                        c = t.e,
                        d = this.w;
                    void 0 !== d.config.tooltip.custom ? this.handleCustomTooltip({ i: s, j: r, y1: l, y2: h, w: d }) : this.toggleActiveInactiveSeries(i); var u = this.getValuesToPrint({ i: s, j: r });
                    this.printLabels({ i: s, j: r, values: u, ttItems: n, shared: i, e: c }); var p = this.ttCtx.getElTooltip();
                    this.ttCtx.tooltipRect.ttWidth = p.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = p.getBoundingClientRect().height } }, { key: "printLabels", value: function(t) { var i, n = this,
                        a = t.i,
                        s = t.j,
                        o = t.values,
                        r = t.ttItems,
                        l = t.shared,
                        h = t.e,
                        c = this.w,
                        d = [],
                        u = function(t) { return c.globals.seriesGoals[t] && c.globals.seriesGoals[t][s] && Array.isArray(c.globals.seriesGoals[t][s]) },
                        p = o.xVal,
                        f = o.zVal,
                        g = o.xAxisTTVal,
                        m = "",
                        x = c.globals.colors[a];
                    null !== s && c.config.plotOptions.bar.distributed && (x = c.globals.colors[s]); for (var v = function(t, o) { var v = n.getFormatters(a);
                            m = n.getSeriesName({ fn: v.yLbTitleFormatter, index: a, seriesIndex: a, j: s }), "treemap" === c.config.chart.type && (m = v.yLbTitleFormatter(String(c.config.series[a].data[s].x), { series: c.globals.series, seriesIndex: a, dataPointIndex: s, w: c })); var b = c.config.tooltip.inverseOrder ? o : t; if (c.globals.axisCharts) { var y = function(t) { return v.yLbFormatter(c.globals.series[t][s], { series: c.globals.series, seriesIndex: t, dataPointIndex: s, w: c }) }; if (l) v = n.getFormatters(b), m = n.getSeriesName({ fn: v.yLbTitleFormatter, index: b, seriesIndex: a, j: s }), x = c.globals.colors[b], i = y(b), u(b) && (d = c.globals.seriesGoals[b][s].map((function(t) { return { attrs: t, val: v.yLbFormatter(t.value, { seriesIndex: b, dataPointIndex: s, w: c }) } })));
                                else { var w, _ = null == h || null === (w = h.target) || void 0 === w ? void 0 : w.getAttribute("fill");
                                    _ && (x = -1 !== _.indexOf("url") ? document.querySelector(_.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : _), i = y(a), u(a) && Array.isArray(c.globals.seriesGoals[a][s]) && (d = c.globals.seriesGoals[a][s].map((function(t) { return { attrs: t, val: v.yLbFormatter(t.value, { seriesIndex: a, dataPointIndex: s, w: c }) } }))) } }
                            null === s && (i = v.yLbFormatter(c.globals.series[a], e(e({}, c), {}, { seriesIndex: a, dataPointIndex: a }))), n.DOMHandling({ i: a, t: b, j: s, ttItems: r, values: { val: i, goalVals: d, xVal: p, xAxisTTVal: g, zVal: f }, seriesName: m, shared: l, pColor: x }) }, b = 0, y = c.globals.series.length - 1; b < c.globals.series.length; b++, y--) v(b, y) } }, { key: "getFormatters", value: function(t) { var e, i = this.w,
                        n = i.globals.yLabelFormatters[t]; return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (n = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (n = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, "function" != typeof n && (n = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function(t) { return t }), "function" != typeof e && (e = function(t) { return t }), { yLbFormatter: n, yLbTitleFormatter: e } } }, { key: "getSeriesName", value: function(t) { var e = t.fn,
                        i = t.index,
                        n = t.seriesIndex,
                        a = t.j,
                        s = this.w; return e(String(s.globals.seriesNames[i]), { series: s.globals.series, seriesIndex: n, dataPointIndex: a, w: s }) } }, { key: "DOMHandling", value: function(t) { t.i; var e = t.t,
                        i = t.j,
                        n = t.ttItems,
                        a = t.values,
                        s = t.seriesName,
                        o = t.shared,
                        r = t.pColor,
                        l = this.w,
                        h = this.ttCtx,
                        c = a.val,
                        d = a.goalVals,
                        u = a.xVal,
                        p = a.xAxisTTVal,
                        f = a.zVal,
                        g = null;
                    g = n[e].children, l.config.tooltip.fillSeriesColor && (n[e].style.backgroundColor = r, g[0].style.display = "none"), h.showTooltipTitle && (null === h.tooltipTitle && (h.tooltipTitle = l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h.tooltipTitle.innerHTML = u), h.isXAxisTooltipEnabled && (h.xaxisTooltipText.innerHTML = "" !== p ? p : u); var m = n[e].querySelector(".apexcharts-tooltip-text-y-label");
                    m && (m.innerHTML = s || ""); var x = n[e].querySelector(".apexcharts-tooltip-text-y-value");
                    x && (x.innerHTML = void 0 !== c ? c : ""), g[0] && g[0].classList.contains("apexcharts-tooltip-marker") && (l.config.tooltip.marker.fillColors && Array.isArray(l.config.tooltip.marker.fillColors) && (r = l.config.tooltip.marker.fillColors[e]), g[0].style.backgroundColor = r), l.config.tooltip.marker.show || (g[0].style.display = "none"); var v = n[e].querySelector(".apexcharts-tooltip-text-goals-label"),
                        b = n[e].querySelector(".apexcharts-tooltip-text-goals-value"); if (d.length && l.globals.seriesGoals[e]) { var y = function() { var t = "<div >",
                                e = "<div>";
                            d.forEach((function(i, n) { t += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i.attrs.name, "</div>"), e += "<div>".concat(i.val, "</div>") })), v.innerHTML = t + "</div>", b.innerHTML = e + "</div>" };
                        o ? l.globals.seriesGoals[e][i] && Array.isArray(l.globals.seriesGoals[e][i]) ? y() : (v.innerHTML = "", b.innerHTML = "") : y() } else v.innerHTML = "", b.innerHTML = "";
                    null !== f && (n[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l.config.tooltip.z.title, n[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== f ? f : ""), o && g[0] && (null == c || l.globals.ancillaryCollapsedSeriesIndices.indexOf(e) > -1 || l.globals.collapsedSeriesIndices.indexOf(e) > -1 ? g[0].parentNode.style.display = "none" : g[0].parentNode.style.display = l.config.tooltip.items.display) } }, { key: "toggleActiveInactiveSeries", value: function(t) { var e = this.w; if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
                    else { this.tooltipUtil.toggleAllTooltipSeriesGroups("disable"); var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                        i && (i.classList.add("apexcharts-active"), i.style.display = e.config.tooltip.items.display) } } }, { key: "getValuesToPrint", value: function(t) { var e = t.i,
                        i = t.j,
                        n = this.w,
                        a = this.ctx.series.filteredSeriesX(),
                        s = "",
                        o = "",
                        r = null,
                        l = null,
                        h = { series: n.globals.series, seriesIndex: e, dataPointIndex: i, w: n },
                        c = n.globals.ttZFormatter;
                    null === i ? l = n.globals.series[e] : n.globals.isXNumeric && "treemap" !== n.config.chart.type ? (s = a[e][i], 0 === a[e].length && (s = a[this.tooltipUtil.getFirstActiveXArray(a)][i])) : s = void 0 !== n.globals.labels[i] ? n.globals.labels[i] : ""; var d = s; return s = n.globals.isXNumeric && "datetime" === n.config.xaxis.type ? new H(this.ctx).xLabelFormat(n.globals.ttKeyFormatter, d, d, { i: void 0, dateFormatter: new P(this.ctx).formatDate, w: this.w }) : n.globals.isBarHorizontal ? n.globals.yLabelFormatters[0](d, h) : n.globals.xLabelFormatter(d, h), void 0 !== n.config.tooltip.x.formatter && (s = n.globals.ttKeyFormatter(d, h)), n.globals.seriesZ.length > 0 && n.globals.seriesZ[e].length > 0 && (r = c(n.globals.seriesZ[e][i], n)), o = "function" == typeof n.config.xaxis.tooltip.formatter ? n.globals.xaxisTooltipFormatter(d, h) : s, { val: Array.isArray(l) ? l.join(" ") : l, xVal: Array.isArray(s) ? s.join(" ") : s, xAxisTTVal: Array.isArray(o) ? o.join(" ") : o, zVal: r } } }, { key: "handleCustomTooltip", value: function(t) { var e = t.i,
                        i = t.j,
                        n = t.y1,
                        a = t.y2,
                        s = t.w,
                        o = this.ttCtx.getElTooltip(),
                        r = s.config.tooltip.custom;
                    Array.isArray(r) && r[e] && (r = r[e]), o.innerHTML = r({ ctx: this.ctx, series: s.globals.series, seriesIndex: e, dataPointIndex: i, y1: n, y2: a, w: s }) } }]), t }(),
        ut = function() {
            function t(e) { n(this, t), this.ttCtx = e, this.ctx = e.ctx, this.w = e.w } return s(t, [{ key: "moveXCrosshairs", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.ttCtx,
                        n = this.w,
                        a = i.getElXCrosshairs(),
                        s = t - i.xcrosshairsWidth / 2,
                        o = n.globals.labels.slice().length; if (null !== e && (s = n.globals.gridWidth / o * e), null === a || n.globals.isBarHorizontal || (a.setAttribute("x", s), a.setAttribute("x1", s), a.setAttribute("x2", s), a.setAttribute("y2", n.globals.gridHeight), a.classList.add("apexcharts-active")), s < 0 && (s = 0), s > n.globals.gridWidth && (s = n.globals.gridWidth), i.isXAxisTooltipEnabled) { var r = s; "tickWidth" !== n.config.xaxis.crosshairs.width && "barWidth" !== n.config.xaxis.crosshairs.width || (r = s + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(r) } } }, { key: "moveYCrosshairs", value: function(t) { var e = this.ttCtx;
                    null !== e.ycrosshairs && v.setAttrs(e.ycrosshairs, { y1: t, y2: t }), null !== e.ycrosshairsHidden && v.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t }) } }, { key: "moveXAxisTooltip", value: function(t) { var e = this.w,
                        i = this.ttCtx; if (null !== i.xaxisTooltip && 0 !== i.xcrosshairsWidth) { i.xaxisTooltip.classList.add("apexcharts-active"); var n, a = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY; if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) t += e.globals.translateX, n = new v(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = n.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = a + "px" } } }, { key: "moveYAxisTooltip", value: function(t) { var e = this.w,
                        i = this.ttCtx;
                    null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip")); var n = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10),
                        a = e.globals.translateY + n,
                        s = i.yaxisTTEls[t].getBoundingClientRect().height,
                        o = e.globals.translateYAxisX[t] - 2;
                    e.config.yaxis[t].opposite && (o -= 26), a -= s / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = a + "px", i.yaxisTTEls[t].style.left = o + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active") } }, { key: "moveTooltip", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = this.w,
                        a = this.ttCtx,
                        s = a.getElTooltip(),
                        o = a.tooltipRect,
                        r = null !== i ? parseFloat(i) : 1,
                        l = parseFloat(t) + r + 5,
                        h = parseFloat(e) + r / 2; if (l > n.globals.gridWidth / 2 && (l = l - o.ttWidth - r - 10), l > n.globals.gridWidth - o.ttWidth - 10 && (l = n.globals.gridWidth - o.ttWidth), l < -20 && (l = -20), n.config.tooltip.followCursor) { var c = a.getElGrid(),
                            d = c.getBoundingClientRect();
                        h = a.e.clientY + n.globals.translateY - d.top - o.ttHeight / 2 } else n.globals.isBarHorizontal || (o.ttHeight / 2 + h > n.globals.gridHeight && (h = n.globals.gridHeight - o.ttHeight + n.globals.translateY), h < 0 && (h = 0));
                    isNaN(l) || (l += n.globals.translateX, s.style.left = l + "px", s.style.top = h + "px") } }, { key: "moveMarkers", value: function(t, e) { var i = this.w,
                        n = this.ttCtx; if (i.globals.markers.size[t] > 0)
                        for (var a = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), s = 0; s < a.length; s++) parseInt(a[s].getAttribute("rel"), 10) === e && (n.marker.resetPointsSize(), n.marker.enlargeCurrentPoint(e, a[s]));
                    else n.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t) } }, { key: "moveDynamicPointOnHover", value: function(t, e) { var i, n, a = this.w,
                        s = this.ttCtx,
                        o = a.globals.pointsArray,
                        r = s.tooltipUtil.getHoverMarkerSize(e),
                        l = a.config.series[e].type; if (!l || "column" !== l && "candlestick" !== l && "boxPlot" !== l) { i = o[e][t][0], n = o[e][t][1] ? o[e][t][1] : 0; var h = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
                        h && n < a.globals.gridHeight && n > 0 && (h.setAttribute("r", r), h.setAttribute("cx", i), h.setAttribute("cy", n)), this.moveXCrosshairs(i), s.fixedTooltip || this.moveTooltip(i, n, r) } } }, { key: "moveDynamicPointsOnHover", value: function(t) { var e, i = this.ttCtx,
                        n = i.w,
                        a = 0,
                        s = 0,
                        o = n.globals.pointsArray;
                    e = new F(this.ctx).getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]); var r = i.tooltipUtil.getHoverMarkerSize(e);
                    o[e] && (a = o[e][t][0], s = o[e][t][1]); var l = i.tooltipUtil.getAllMarkers(); if (null !== l)
                        for (var h = 0; h < n.globals.series.length; h++) { var c = o[h]; if (n.globals.comboCharts && void 0 === c && l.splice(h, 0, null), c && c.length) { var d = o[h][t][1],
                                    u = void 0; if (l[h].setAttribute("cx", a), "rangeArea" === n.config.chart.type && !n.globals.comboCharts) { var p = t + n.globals.series[h].length;
                                    u = o[h][p][1], d -= Math.abs(d - u) / 2 }
                                null !== d && !isNaN(d) && d < n.globals.gridHeight + r && d + r > 0 ? (l[h] && l[h].setAttribute("r", r), l[h] && l[h].setAttribute("cy", d)) : l[h] && l[h].setAttribute("r", 0) } }
                    if (this.moveXCrosshairs(a), !i.fixedTooltip) { var f = s || n.globals.gridHeight;
                        this.moveTooltip(a, f, r) } } }, { key: "moveStickyTooltipOverBars", value: function(t) { var e = this.w,
                        i = this.ttCtx,
                        n = e.globals.columnSeries ? e.globals.columnSeries.length : e.globals.series.length,
                        a = n >= 2 && n % 2 == 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1;
                    e.globals.isBarHorizontal && (a = new F(this.ctx).getActiveConfigSeriesIndex("desc") + 1); var s = e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(a, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(a, "'] path[j='").concat(t, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(a, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(a, "'] path[j='").concat(t, "']")),
                        o = s ? parseFloat(s.getAttribute("cx")) : 0,
                        r = s ? parseFloat(s.getAttribute("cy")) : 0,
                        l = s ? parseFloat(s.getAttribute("barWidth")) : 0,
                        h = s ? parseFloat(s.getAttribute("barHeight")) : 0,
                        c = i.getElGrid().getBoundingClientRect(),
                        d = s.classList.contains("apexcharts-candlestick-area") || s.classList.contains("apexcharts-boxPlot-area"); if (e.globals.isXNumeric ? (s && !d && (o -= n % 2 != 0 ? l / 2 : 0), s && d && e.globals.comboCharts && (o -= l / 2)) : e.globals.isBarHorizontal || (o = i.xAxisTicksPositions[t - 1] + i.dataPointsDividedWidth / 2, isNaN(o) && (o = i.xAxisTicksPositions[t] - i.dataPointsDividedWidth / 2)), e.globals.isBarHorizontal ? (r > e.globals.gridHeight / 2 && (r -= i.tooltipRect.ttHeight), (r = r + e.config.grid.padding.top + h / 3) + h > e.globals.gridHeight && (r = e.globals.gridHeight - h)) : e.config.tooltip.followCursor ? r = i.e.clientY - c.top - i.tooltipRect.ttHeight / 2 : r + i.tooltipRect.ttHeight + 15 > e.globals.gridHeight && (r = e.globals.gridHeight), r < -10 && (r = -10), e.globals.isBarHorizontal || this.moveXCrosshairs(o), !i.fixedTooltip) { var u = r || e.globals.gridHeight;
                        this.moveTooltip(o, u) } } }]), t }(),
        pt = function() {
            function t(e) { n(this, t), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx, this.tooltipPosition = new ut(e) } return s(t, [{ key: "drawDynamicPoints", value: function() { var t = this.w,
                        e = new v(this.ctx),
                        i = new D(this.ctx),
                        n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                    n = u(n), t.config.chart.stacked && n.sort((function(t, e) { return parseFloat(t.getAttribute("data:realIndex")) - parseFloat(e.getAttribute("data:realIndex")) })); for (var a = 0; a < n.length; a++) { var s = n[a].querySelector(".apexcharts-series-markers-wrap"); if (null !== s) { var o = void 0,
                                r = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4)); "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (r += " no-pointer-events"); var l = i.getMarkerConfig({ cssClass: r, seriesIndex: Number(s.getAttribute("data:realIndex")) });
                            (o = e.drawMarker(0, 0, l)).node.setAttribute("default-marker-size", 0); var h = document.createElementNS(t.globals.SVGNS, "g");
                            h.classList.add("apexcharts-series-markers"), h.appendChild(o.node), s.appendChild(h) } } } }, { key: "enlargeCurrentPoint", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = this.w; "bubble" !== a.config.chart.type && this.newPointSize(t, e); var s = e.getAttribute("cx"),
                        o = e.getAttribute("cy"); if (null !== i && null !== n && (s = i, o = n), this.tooltipPosition.moveXCrosshairs(s), !this.fixedTooltip) { if ("radar" === a.config.chart.type) { var r = this.ttCtx.getElGrid(),
                                l = r.getBoundingClientRect();
                            s = this.ttCtx.e.clientX - l.left }
                        this.tooltipPosition.moveTooltip(s, o, a.config.markers.hover.size) } } }, { key: "enlargePoints", value: function(t) { for (var e = this.w, i = this, n = this.ttCtx, a = t, s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o = e.config.markers.hover.size, r = 0; r < s.length; r++) { var l = s[r].getAttribute("rel"),
                            h = s[r].getAttribute("index"); if (void 0 === o && (o = e.globals.markers.size[h] + e.config.markers.hover.sizeOffset), a === parseInt(l, 10)) { i.newPointSize(a, s[r]); var c = s[r].getAttribute("cx"),
                                d = s[r].getAttribute("cy");
                            i.tooltipPosition.moveXCrosshairs(c), n.fixedTooltip || i.tooltipPosition.moveTooltip(c, d, o) } else i.oldPointSize(s[r]) } } }, { key: "newPointSize", value: function(t, e) { var i = this.w,
                        n = i.config.markers.hover.size,
                        a = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild; if ("0" !== a.getAttribute("default-marker-size")) { var s = parseInt(a.getAttribute("index"), 10);
                        void 0 === n && (n = i.globals.markers.size[s] + i.config.markers.hover.sizeOffset), n < 0 && (n = 0), a.setAttribute("r", n) } } }, { key: "oldPointSize", value: function(t) { var e = parseFloat(t.getAttribute("default-marker-size"));
                    t.setAttribute("r", e) } }, { key: "resetPointsSize", value: function() { for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) { var i = parseFloat(t[e].getAttribute("default-marker-size"));
                        g.isNumber(i) && i >= 0 ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0) } } }]), t }(),
        ft = function() {
            function t(e) { n(this, t), this.w = e.w, this.ttCtx = e } return s(t, [{ key: "getAttr", value: function(t, e) { return parseFloat(t.target.getAttribute(e)) } }, { key: "handleHeatTreeTooltip", value: function(t) { var e = t.e,
                        i = t.opt,
                        n = t.x,
                        a = t.y,
                        s = t.type,
                        o = this.ttCtx,
                        r = this.w; if (e.target.classList.contains("apexcharts-".concat(s, "-rect"))) { var l = this.getAttr(e, "i"),
                            h = this.getAttr(e, "j"),
                            c = this.getAttr(e, "cx"),
                            d = this.getAttr(e, "cy"),
                            u = this.getAttr(e, "width"),
                            p = this.getAttr(e, "height"); if (o.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: l, j: h, shared: !1, e: e }), r.globals.capturedSeriesIndex = l, r.globals.capturedDataPointIndex = h, n = c + o.tooltipRect.ttWidth / 2 + u, a = d + o.tooltipRect.ttHeight / 2 - p / 2, o.tooltipPosition.moveXCrosshairs(c + u / 2), n > r.globals.gridWidth / 2 && (n = c - o.tooltipRect.ttWidth / 2 + u), o.w.config.tooltip.followCursor) { var f = r.globals.dom.elWrap.getBoundingClientRect();
                            n = r.globals.clientX - f.left - (n > r.globals.gridWidth / 2 ? o.tooltipRect.ttWidth : 0), a = r.globals.clientY - f.top - (a > r.globals.gridHeight / 2 ? o.tooltipRect.ttHeight : 0) } } return { x: n, y: a } } }, { key: "handleMarkerTooltip", value: function(t) { var e, i, n = t.e,
                        a = t.opt,
                        s = t.x,
                        o = t.y,
                        r = this.w,
                        l = this.ttCtx; if (n.target.classList.contains("apexcharts-marker")) { var h = parseInt(a.paths.getAttribute("cx"), 10),
                            c = parseInt(a.paths.getAttribute("cy"), 10),
                            d = parseFloat(a.paths.getAttribute("val")); if (i = parseInt(a.paths.getAttribute("rel"), 10), e = parseInt(a.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l.intersect) { var u = g.findAncestor(a.paths, "apexcharts-series");
                            u && (e = parseInt(u.getAttribute("data:realIndex"), 10)) } if (l.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: e, j: i, shared: !l.showOnIntersect && r.config.tooltip.shared, e: n }), "mouseup" === n.type && l.markerClick(n, e, i), r.globals.capturedSeriesIndex = e, r.globals.capturedDataPointIndex = i, s = h, o = c + r.globals.translateY - 1.4 * l.tooltipRect.ttHeight, l.w.config.tooltip.followCursor) { var p = l.getElGrid().getBoundingClientRect();
                            o = l.e.clientY + r.globals.translateY - p.top }
                        d < 0 && (o = c), l.marker.enlargeCurrentPoint(i, a.paths, s, o) } return { x: s, y: o } } }, { key: "handleBarTooltip", value: function(t) { var e, i, n = t.e,
                        a = t.opt,
                        s = this.w,
                        o = this.ttCtx,
                        r = o.getElTooltip(),
                        l = 0,
                        h = 0,
                        c = 0,
                        d = this.getBarTooltipXY({ e: n, opt: a });
                    e = d.i; var u = d.barHeight,
                        p = d.j;
                    s.globals.capturedSeriesIndex = e, s.globals.capturedDataPointIndex = p, s.globals.isBarHorizontal && o.tooltipUtil.hasBars() || !s.config.tooltip.shared ? (h = d.x, c = d.y, i = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[e] : s.config.stroke.width, l = h) : s.globals.comboCharts || s.config.tooltip.shared || (l /= 2), isNaN(c) ? c = s.globals.svgHeight - o.tooltipRect.ttHeight : c < 0 && (c = 0); var f = parseInt(a.paths.parentNode.getAttribute("data:realIndex"), 10),
                        g = s.globals.isMultipleYAxis ? s.config.yaxis[f] && s.config.yaxis[f].reversed : s.config.yaxis[0].reversed; if (h + o.tooltipRect.ttWidth > s.globals.gridWidth && !g ? h -= o.tooltipRect.ttWidth : h < 0 && (h = 0), o.w.config.tooltip.followCursor) { var m = o.getElGrid().getBoundingClientRect();
                        c = o.e.clientY - m.top }
                    null === o.tooltip && (o.tooltip = s.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), s.config.tooltip.shared || (s.globals.comboBarCount > 0 ? o.tooltipPosition.moveXCrosshairs(l + i / 2) : o.tooltipPosition.moveXCrosshairs(l)), !o.fixedTooltip && (!s.config.tooltip.shared || s.globals.isBarHorizontal && o.tooltipUtil.hasBars()) && (g && (h -= o.tooltipRect.ttWidth) < 0 && (h = 0), !g || s.globals.isBarHorizontal && o.tooltipUtil.hasBars() || (c = c + u - 2 * (s.globals.series[e][p] < 0 ? u : 0)), o.tooltipRect.ttHeight + c > s.globals.gridHeight ? c = s.globals.gridHeight - o.tooltipRect.ttHeight + s.globals.translateY : (c = c + s.globals.translateY - o.tooltipRect.ttHeight / 2) < 0 && (c = 0), r.style.left = h + s.globals.translateX + "px", r.style.top = c + "px") } }, { key: "getBarTooltipXY", value: function(t) { var e = t.e,
                        i = t.opt,
                        n = this.w,
                        a = null,
                        s = this.ttCtx,
                        o = 0,
                        r = 0,
                        l = 0,
                        h = 0,
                        c = 0,
                        d = e.target.classList; if (d.contains("apexcharts-bar-area") || d.contains("apexcharts-candlestick-area") || d.contains("apexcharts-boxPlot-area") || d.contains("apexcharts-rangebar-area")) { var u = e.target,
                            p = u.getBoundingClientRect(),
                            f = i.elGrid.getBoundingClientRect(),
                            g = p.height;
                        c = p.height; var m = p.width,
                            x = parseInt(u.getAttribute("cx"), 10),
                            v = parseInt(u.getAttribute("cy"), 10);
                        h = parseFloat(u.getAttribute("barWidth")); var b = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
                        a = parseInt(u.getAttribute("j"), 10), o = parseInt(u.parentNode.getAttribute("rel"), 10) - 1; var y = u.getAttribute("data-range-y1"),
                            w = u.getAttribute("data-range-y2");
                        n.globals.comboCharts && (o = parseInt(u.parentNode.getAttribute("data:realIndex"), 10)), s.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: o, j: a, y1: y ? parseInt(y, 10) : null, y2: w ? parseInt(w, 10) : null, shared: !s.showOnIntersect && n.config.tooltip.shared, e: e }), n.config.tooltip.followCursor ? n.globals.isBarHorizontal ? (r = b - f.left + 15, l = v - s.dataPointsDividedHeight + g / 2 - s.tooltipRect.ttHeight / 2) : (r = n.globals.isXNumeric ? x - m / 2 : x - s.dataPointsDividedWidth + m / 2, l = e.clientY - f.top - s.tooltipRect.ttHeight / 2 - 15) : n.globals.isBarHorizontal ? ((r = x) < s.xyRatios.baseLineInvertedY && (r = x - s.tooltipRect.ttWidth), l = v - s.dataPointsDividedHeight + g / 2 - s.tooltipRect.ttHeight / 2) : (r = n.globals.isXNumeric ? x - m / 2 : x - s.dataPointsDividedWidth + m / 2, l = v) } return { x: r, y: l, barHeight: c, barWidth: h, i: o, j: a } } }]), t }(),
        gt = function() {
            function t(e) { n(this, t), this.w = e.w, this.ttCtx = e } return s(t, [{ key: "drawXaxisTooltip", value: function() { var t = this.w,
                        e = this.ttCtx,
                        i = "bottom" === t.config.xaxis.position;
                    e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3; var n = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                        a = t.globals.dom.elWrap;
                    e.isXAxisTooltipEnabled && null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", n + " apexcharts-theme-" + t.config.tooltip.theme), a.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText)) } }, { key: "drawYaxisTooltip", value: function() { for (var t = this.w, e = this.ttCtx, i = function(i) { var n = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
                            e.yaxisOffX = n ? t.globals.gridWidth + 1 : 1; var a = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, n ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
                            t.globals.yAxisSameScaleIndices.map((function(e, n) { e.map((function(e, n) { n === i && (a += t.config.yaxis[n].show ? " " : " apexcharts-yaxistooltip-hidden") })) })); var s = t.globals.dom.elWrap;
                            null === t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + t.config.tooltip.theme), s.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText[i] = document.createElement("div"), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i])) }, n = 0; n < t.config.yaxis.length; n++) i(n) } }, { key: "setXCrosshairWidth", value: function() { var t = this.w,
                        e = this.ttCtx,
                        i = e.getElXCrosshairs(); if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) { var n = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area"); if (null !== n && "barWidth" === t.config.xaxis.crosshairs.width) { var a = parseFloat(n.getAttribute("barWidth"));
                            e.xcrosshairsWidth = a } else if ("tickWidth" === t.config.xaxis.crosshairs.width) { var s = t.globals.labels.length;
                            e.xcrosshairsWidth = t.globals.gridWidth / s } } else if ("tickWidth" === t.config.xaxis.crosshairs.width) { var o = t.globals.labels.length;
                        e.xcrosshairsWidth = t.globals.gridWidth / o } else if ("barWidth" === t.config.xaxis.crosshairs.width) { var r = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area"); if (null !== r) { var l = parseFloat(r.getAttribute("barWidth"));
                            e.xcrosshairsWidth = l } else e.xcrosshairsWidth = 1 }
                    t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), null !== i && e.xcrosshairsWidth > 0 && i.setAttribute("width", e.xcrosshairsWidth) } }, { key: "handleYCrosshair", value: function() { var t = this.w,
                        e = this.ttCtx;
                    e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden") } }, { key: "drawYaxisTooltipText", value: function(t, e, i) { var n = this.ttCtx,
                        a = this.w,
                        s = a.globals.yLabelFormatters[t]; if (n.yaxisTooltips[t]) { var o = n.getElGrid().getBoundingClientRect(),
                            r = (e - o.top) * i.yRatio[t],
                            l = a.globals.maxYArr[t] - a.globals.minYArr[t],
                            h = a.globals.minYArr[t] + (l - r);
                        n.tooltipPosition.moveYCrosshairs(e - o.top), n.yaxisTooltipText[t].innerHTML = s(h), n.tooltipPosition.moveYAxisTooltip(t) } } }]), t }(),
        mt = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w; var i = this.w;
                this.tConfig = i.config.tooltip, this.tooltipUtil = new ct(this), this.tooltipLabels = new dt(this), this.tooltipPosition = new ut(this), this.marker = new pt(this), this.intersect = new ft(this), this.axesTooltip = new gt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !i.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now() } return s(t, [{ key: "getElTooltip", value: function(t) { return t || (t = this), t.w.globals.dom.baseEl ? t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null } }, { key: "getElXCrosshairs", value: function() { return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs") } }, { key: "getElGrid", value: function() { return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid") } }, { key: "drawTooltip", value: function(t) { var e = this.w;
                    this.xyRatios = t, this.isXAxisTooltipEnabled = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.yaxisTooltips = e.config.yaxis.map((function(t, i) { return !!(t.show && t.tooltip.enabled && e.globals.axisCharts) })), this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1); var i = document.createElement("div"); if (i.classList.add("apexcharts-tooltip"), e.config.tooltip.cssClass && i.classList.add(e.config.tooltip.cssClass), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) { this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair(); var n = new W(this.ctx);
                        this.xAxisTicksPositions = n.getXAxisTicksPositions() } if (!e.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e.config.chart.type || this.tConfig.shared || (this.showOnIntersect = !0), 0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) { this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle)); var a = e.globals.series.length;
                        (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (a = this.showOnIntersect ? 1 : e.globals.series.length), this.legendLabels = e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(a), this.addSVGEvents() } } }, { key: "createTTElements", value: function(t) { for (var e = this, i = this.w, n = [], a = this.getElTooltip(), s = function(s) { var o = document.createElement("div");
                            o.classList.add("apexcharts-tooltip-series-group"), o.style.order = i.config.tooltip.inverseOrder ? t - s : s + 1, e.tConfig.shared && e.tConfig.enabledOnSeries && Array.isArray(e.tConfig.enabledOnSeries) && e.tConfig.enabledOnSeries.indexOf(s) < 0 && o.classList.add("apexcharts-tooltip-series-group-hidden"); var r = document.createElement("span");
                            r.classList.add("apexcharts-tooltip-marker"), r.style.backgroundColor = i.globals.colors[s], o.appendChild(r); var l = document.createElement("div");
                            l.classList.add("apexcharts-tooltip-text"), l.style.fontFamily = e.tConfig.style.fontFamily || i.config.chart.fontFamily, l.style.fontSize = e.tConfig.style.fontSize, ["y", "goals", "z"].forEach((function(t) { var e = document.createElement("div");
                                e.classList.add("apexcharts-tooltip-".concat(t, "-group")); var i = document.createElement("span");
                                i.classList.add("apexcharts-tooltip-text-".concat(t, "-label")), e.appendChild(i); var n = document.createElement("span");
                                n.classList.add("apexcharts-tooltip-text-".concat(t, "-value")), e.appendChild(n), l.appendChild(e) })), o.appendChild(l), a.appendChild(o), n.push(o) }, o = 0; o < t; o++) s(o); return n } }, { key: "addSVGEvents", value: function() { var t = this.w,
                        e = t.config.chart.type,
                        i = this.getElTooltip(),
                        n = !("bar" !== e && "candlestick" !== e && "boxPlot" !== e && "rangeBar" !== e),
                        a = "area" === e || "line" === e || "scatter" === e || "bubble" === e || "radar" === e,
                        s = t.globals.dom.Paper.node,
                        o = this.getElGrid();
                    o && (this.seriesBound = o.getBoundingClientRect()); var r, l = [],
                        h = [],
                        c = { hoverArea: s, elGrid: o, tooltipEl: i, tooltipY: l, tooltipX: h, ttItems: this.ttItems }; if (t.globals.axisCharts && (a ? r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : n ? r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e && "treemap" !== e || (r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), r && r.length))
                        for (var d = 0; d < r.length; d++) l.push(r[d].getAttribute("cy")), h.push(r[d].getAttribute("cx")); if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || n && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([s], c);
                    else if (n && !t.globals.comboCharts || a && this.showOnIntersect) this.addDatapointEventsListeners(c);
                    else if (!t.globals.axisCharts || "heatmap" === e || "treemap" === e) { var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                        this.addPathsEventListeners(u, c) } if (this.showOnIntersect) { var p = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
                        p.length > 0 && this.addPathsEventListeners(p, c), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c) } } }, { key: "drawFixedTooltipRect", value: function() { var t = this.w,
                        e = this.getElTooltip(),
                        i = e.getBoundingClientRect(),
                        n = i.width + 10,
                        a = i.height + 10,
                        s = this.tConfig.fixed.offsetX,
                        o = this.tConfig.fixed.offsetY,
                        r = this.tConfig.fixed.position.toLowerCase(); return r.indexOf("right") > -1 && (s = s + t.globals.svgWidth - n + 10), r.indexOf("bottom") > -1 && (o = o + t.globals.svgHeight - a - 10), e.style.left = s + "px", e.style.top = o + "px", { x: s, y: o, ttWidth: n, ttHeight: a } } }, { key: "addDatapointEventsListeners", value: function(t) { var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
                    this.addPathsEventListeners(e, t) } }, { key: "addPathsEventListeners", value: function(t, e) { for (var i = this, n = function(n) { var a = { paths: t[n], tooltipEl: e.tooltipEl, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: e.ttItems };
                            ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((function(e) { return t[n].addEventListener(e, i.onSeriesHover.bind(i, a), { capture: !1, passive: !0 }) })) }, a = 0; a < t.length; a++) n(a) } }, { key: "onSeriesHover", value: function(t, e) { var i = this,
                        n = Date.now() - this.lastHoverTime;
                    n >= 100 ? this.seriesHover(t, e) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout((function() { i.seriesHover(t, e) }), 100 - n)) } }, { key: "seriesHover", value: function(t, e) { var i = this;
                    this.lastHoverTime = Date.now(); var n = [],
                        a = this.w;
                    a.config.chart.group && (n = this.ctx.getGroupedCharts()), a.globals.axisCharts && (a.globals.minX === -1 / 0 && a.globals.maxX === 1 / 0 || 0 === a.globals.dataPoints) || (n.length ? n.forEach((function(n) { var a = i.getElTooltip(n),
                            s = { paths: t.paths, tooltipEl: a, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: n.w.globals.tooltip.ttItems };
                        n.w.globals.minX === i.w.globals.minX && n.w.globals.maxX === i.w.globals.maxX && n.w.globals.tooltip.seriesHoverByContext({ chartCtx: n, ttCtx: n.w.globals.tooltip, opt: s, e: e }) })) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e: e })) } }, { key: "seriesHoverByContext", value: function(t) { var e = t.chartCtx,
                        i = t.ttCtx,
                        n = t.opt,
                        a = t.e,
                        s = e.w,
                        o = this.getElTooltip();
                    o && (i.tooltipRect = { x: 0, y: 0, ttWidth: o.getBoundingClientRect().width, ttHeight: o.getBoundingClientRect().height }, i.e = a, !i.tooltipUtil.hasBars() || s.globals.comboCharts || i.isBarShared || this.tConfig.onDatasetHover.highlightDataSeries && new F(e).toggleSeriesOnHover(a, a.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), s.globals.axisCharts ? i.axisChartsTooltips({ e: a, opt: n, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: a, opt: n, tooltipRect: i.tooltipRect })) } }, { key: "axisChartsTooltips", value: function(t) { var e, i, n = t.e,
                        a = t.opt,
                        s = this.w,
                        o = a.elGrid.getBoundingClientRect(),
                        r = "touchmove" === n.type ? n.touches[0].clientX : n.clientX,
                        l = "touchmove" === n.type ? n.touches[0].clientY : n.clientY; if (this.clientY = l, this.clientX = r, s.globals.capturedSeriesIndex = -1, s.globals.capturedDataPointIndex = -1, l < o.top || l > o.top + o.height) this.handleMouseOut(a);
                    else { if (Array.isArray(this.tConfig.enabledOnSeries) && !s.config.tooltip.shared) { var h = parseInt(a.paths.getAttribute("index"), 10); if (this.tConfig.enabledOnSeries.indexOf(h) < 0) return void this.handleMouseOut(a) } var c = this.getElTooltip(),
                            d = this.getElXCrosshairs(),
                            u = s.globals.xyCharts || "bar" === s.config.chart.type && !s.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || s.globals.comboCharts && this.tooltipUtil.hasBars(); if ("mousemove" === n.type || "touchmove" === n.type || "mouseup" === n.type) { if (s.globals.collapsedSeries.length + s.globals.ancillaryCollapsedSeries.length === s.globals.series.length) return;
                            null !== d && d.classList.add("apexcharts-active"); var p = this.yaxisTooltips.filter((function(t) { return !0 === t })); if (null !== this.ycrosshairs && p.length && this.ycrosshairs.classList.add("apexcharts-active"), u && !this.showOnIntersect) this.handleStickyTooltip(n, r, l, a);
                            else if ("heatmap" === s.config.chart.type || "treemap" === s.config.chart.type) { var f = this.intersect.handleHeatTreeTooltip({ e: n, opt: a, x: e, y: i, type: s.config.chart.type });
                                e = f.x, i = f.y, c.style.left = e + "px", c.style.top = i + "px" } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: n, opt: a }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: n, opt: a, x: e, y: i }); if (this.yaxisTooltips.length)
                                for (var g = 0; g < s.config.yaxis.length; g++) this.axesTooltip.drawYaxisTooltipText(g, l, this.xyRatios);
                            a.tooltipEl.classList.add("apexcharts-active") } else "mouseout" !== n.type && "touchend" !== n.type || this.handleMouseOut(a) } } }, { key: "nonAxisChartsTooltips", value: function(t) { var e = t.e,
                        i = t.opt,
                        n = t.tooltipRect,
                        a = this.w,
                        s = i.paths.getAttribute("rel"),
                        o = this.getElTooltip(),
                        r = a.globals.dom.elWrap.getBoundingClientRect(); if ("mousemove" === e.type || "touchmove" === e.type) { o.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(s, 10) - 1, shared: !1 }); var l = a.globals.clientX - r.left - n.ttWidth / 2,
                            h = a.globals.clientY - r.top - n.ttHeight - 10; if (o.style.left = l + "px", o.style.top = h + "px", a.config.legend.tooltipHoverFormatter) { var c = s - 1,
                                d = (0, a.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"), { seriesIndex: c, dataPointIndex: c, w: a });
                            this.legendLabels[c].innerHTML = d } } else "mouseout" !== e.type && "touchend" !== e.type || (o.classList.remove("apexcharts-active"), a.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(t) { var e = t.getAttribute("data:default-text");
                        t.innerHTML = decodeURIComponent(e) }))) } }, { key: "handleStickyTooltip", value: function(t, e, i, n) { var a = this.w,
                        s = this.tooltipUtil.getNearestValues({ context: this, hoverArea: n.hoverArea, elGrid: n.elGrid, clientX: e, clientY: i }),
                        o = s.j,
                        r = s.capturedSeries,
                        l = n.elGrid.getBoundingClientRect();
                    s.hoverX < 0 || s.hoverX > l.width ? this.handleMouseOut(n) : null !== r ? this.handleStickyCapturedSeries(t, r, n, o) : (this.tooltipUtil.isXoverlap(o) || a.globals.isBarHorizontal) && this.create(t, this, 0, o, n.ttItems) } }, { key: "handleStickyCapturedSeries", value: function(t, e, i, n) { var a = this.w;
                    this.tConfig.shared || null !== a.globals.series[e][n] ? void 0 !== a.globals.series[e][n] ? this.tConfig.shared && this.tooltipUtil.isXoverlap(n) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, n, i.ttItems) : this.create(t, this, e, n, i.ttItems, !1) : this.tooltipUtil.isXoverlap(n) && this.create(t, this, 0, n, i.ttItems) : this.handleMouseOut(i) } }, { key: "deactivateHoverFilter", value: function() { for (var t = this.w, e = new v(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), n = 0; n < i.length; n++) e.pathMouseLeave(i[n]) } }, { key: "handleMouseOut", value: function(t) { var e = this.w,
                        i = this.getElXCrosshairs(); if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) { null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip")); for (var n = 0; n < this.yaxisTTEls.length; n++) this.yaxisTTEls[n].classList.remove("apexcharts-active") }
                    e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(t) { var e = t.getAttribute("data:default-text");
                        t.innerHTML = decodeURIComponent(e) })) } }, { key: "markerClick", value: function(t, e, i) { var n = this.w; "function" == typeof n.config.chart.events.markerClick && n.config.chart.events.markerClick(t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: n }), this.ctx.events.fireEvent("markerClick", [t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: n }]) } }, { key: "create", value: function(t, e, i, n, a) { var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        o = this.w,
                        r = e; "mouseup" === t.type && this.markerClick(t, i, n), null === s && (s = this.tConfig.shared); var l = this.tooltipUtil.hasMarkers(),
                        h = this.tooltipUtil.getElBars(); if (o.config.legend.tooltipHoverFormatter) { var c = o.config.legend.tooltipHoverFormatter,
                            d = Array.from(this.legendLabels);
                        d.forEach((function(t) { var e = t.getAttribute("data:default-text");
                            t.innerHTML = decodeURIComponent(e) })); for (var u = 0; u < d.length; u++) { var p = d[u],
                                f = parseInt(p.getAttribute("i"), 10),
                                g = decodeURIComponent(p.getAttribute("data:default-text")),
                                m = c(g, { seriesIndex: s ? f : i, dataPointIndex: n, w: o }); if (s) p.innerHTML = o.globals.collapsedSeriesIndices.indexOf(f) < 0 ? m : g;
                            else if (p.innerHTML = f === i ? m : g, i === f) break } } if (s) { if (r.tooltipLabels.drawSeriesTexts({ ttItems: a, i: i, j: n, shared: !this.showOnIntersect && this.tConfig.shared }), l && (o.globals.markers.largestSize > 0 ? r.marker.enlargePoints(n) : r.tooltipPosition.moveDynamicPointsOnHover(n)), this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(h), this.barSeriesHeight > 0)) { var x = new v(this.ctx),
                                b = o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(n, "']"));
                            this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(n); for (var y = 0; y < b.length; y++) x.pathMouseEnter(b[y]) } } else r.tooltipLabels.drawSeriesTexts({ shared: !1, ttItems: a, i: i, j: n }), this.tooltipUtil.hasBars() && r.tooltipPosition.moveStickyTooltipOverBars(n), l && r.tooltipPosition.moveMarkers(i, n) } }]), t }(),
        xt = function() {
            function t(e) { n(this, t), this.w = e.w, this.barCtx = e, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter) } return s(t, [{ key: "handleBarDataLabels", value: function(t) { var e = t.x,
                        i = t.y,
                        n = t.y1,
                        a = t.y2,
                        s = t.i,
                        o = t.j,
                        r = t.realIndex,
                        l = t.series,
                        h = t.barHeight,
                        c = t.barWidth,
                        d = t.barYPosition,
                        u = t.visibleSeries,
                        p = t.renderedPath,
                        f = this.w,
                        g = new v(this.barCtx.ctx),
                        m = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[r] : this.barCtx.strokeWidth,
                        x = e + parseFloat(c * u),
                        b = i + parseFloat(h * u);
                    f.globals.isXNumeric && !f.globals.isBarHorizontal && (x = e + parseFloat(c * (u + 1)), b = i + parseFloat(h * (u + 1)) - m); var y, w, _ = null,
                        k = e,
                        S = i,
                        A = f.config.dataLabels,
                        C = this.barCtx.barOptions.dataLabels,
                        P = this.barCtx.barOptions.dataLabels.total;
                    void 0 !== d && this.barCtx.isRangeBar && (b = d, S = d); var L = A.offsetX,
                        T = A.offsetY,
                        M = { width: 0, height: 0 }; if (f.config.dataLabels.enabled) { var E = this.barCtx.series[s][o];
                        M = g.getTextRects(f.globals.yLabelFormatters[0](E), parseFloat(A.style.fontSize)) } var z = { x: e, y: i, i: s, j: o, realIndex: r, renderedPath: p, bcx: x, bcy: b, barHeight: h, barWidth: c, textRects: M, strokeWidth: m, dataLabelsX: k, dataLabelsY: S, dataLabelsConfig: A, barDataLabelsConfig: C, barTotalDataLabelsConfig: P, offX: L, offY: T }; return w = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(z) : this.calculateColumnsDataLabelsPosition(z), p.attr({ cy: w.bcy, cx: w.bcx, j: o, val: l[s][o], barHeight: h, barWidth: c }), y = this.drawCalculatedDataLabels({ x: w.dataLabelsX, y: w.dataLabelsY, val: this.barCtx.isRangeBar ? [n, a] : l[s][o], i: r, j: o, barWidth: c, barHeight: h, textRects: M, dataLabelsConfig: A }), f.config.chart.stacked && P.enabled && (_ = this.drawTotalDataLabels({ x: w.totalDataLabelsX, y: w.totalDataLabelsY, realIndex: r, textAnchor: w.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: r, j: o }), dataLabelsConfig: A, barTotalDataLabelsConfig: P })), { dataLabels: y, totalDataLabels: _ } } }, { key: "getStackedTotalDataLabel", value: function(t) { var i = t.realIndex,
                        n = t.j,
                        a = this.w,
                        s = this.barCtx.stackedSeriesTotals[n]; return this.totalFormatter && (s = this.totalFormatter(s, e(e({}, a), {}, { seriesIndex: i, dataPointIndex: n, w: a }))), s } }, { key: "calculateColumnsDataLabelsPosition", value: function(t) { var e, i, n, a = this.w,
                        s = t.i,
                        o = t.j,
                        r = t.realIndex,
                        l = t.y,
                        h = t.bcx,
                        c = t.barWidth,
                        d = t.barHeight,
                        u = t.textRects,
                        p = t.dataLabelsY,
                        f = t.dataLabelsConfig,
                        g = t.barDataLabelsConfig,
                        m = t.barTotalDataLabelsConfig,
                        x = t.strokeWidth,
                        b = t.offX,
                        y = t.offY;
                    d = Math.abs(d); var w = "vertical" === a.config.plotOptions.bar.dataLabels.orientation;
                    h -= x / 2; var _ = a.globals.gridWidth / a.globals.dataPoints;
                    e = a.globals.isXNumeric ? h - c / 2 + b : h - _ + c / 2 + b, w && (e = e + u.height / 2 - x / 2 - 2); var k = this.barCtx.series[s][o] < 0,
                        S = l; switch (this.barCtx.isReversed && (S = l - d + (k ? 2 * d : 0), l -= d), g.position) {
                        case "center":
                            p = w ? k ? S + d / 2 + y : S + d / 2 - y : k ? S - d / 2 + u.height / 2 + y : S + d / 2 + u.height / 2 - y; break;
                        case "bottom":
                            p = w ? k ? S + d + y : S + d - y : k ? S - d + u.height + x + y : S + d - u.height / 2 + x - y; break;
                        case "top":
                            p = w ? k ? S + y : S - y : k ? S - u.height / 2 - y : S + u.height + y } if (this.barCtx.lastActiveBarSerieIndex === r && m.enabled) { var A = new v(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r, j: o }), f.fontSize);
                        i = k ? S - A.height / 2 - y - m.offsetY + 18 : S + A.height + y + m.offsetY - 18, n = e + m.offsetX } return a.config.chart.stacked || (p < 0 ? p = 0 + x : p + u.height / 3 > a.globals.gridHeight && (p = a.globals.gridHeight - x)), { bcx: h, bcy: l, dataLabelsX: e, dataLabelsY: p, totalDataLabelsX: n, totalDataLabelsY: i, totalDataLabelsAnchor: "middle" } } }, { key: "calculateBarsDataLabelsPosition", value: function(t) { var e = this.w,
                        i = t.x,
                        n = t.i,
                        a = t.j,
                        s = t.realIndex,
                        o = t.bcy,
                        r = t.barHeight,
                        l = t.barWidth,
                        h = t.textRects,
                        c = t.dataLabelsX,
                        d = t.strokeWidth,
                        u = t.dataLabelsConfig,
                        p = t.barDataLabelsConfig,
                        f = t.barTotalDataLabelsConfig,
                        g = t.offX,
                        m = t.offY,
                        x = e.globals.gridHeight / e.globals.dataPoints;
                    l = Math.abs(l); var b, y, w = o - (this.barCtx.isRangeBar ? 0 : x) + r / 2 + h.height / 2 + m - 3,
                        _ = "start",
                        k = this.barCtx.series[n][a] < 0,
                        S = i; switch (this.barCtx.isReversed && (S = i + l - (k ? 2 * l : 0), i = e.globals.gridWidth - l), p.position) {
                        case "center":
                            c = k ? S + l / 2 - g : Math.max(h.width / 2, S - l / 2) + g; break;
                        case "bottom":
                            c = k ? S + l - d - Math.round(h.width / 2) - g : S - l + d + Math.round(h.width / 2) + g; break;
                        case "top":
                            c = k ? S - d + Math.round(h.width / 2) - g : S - d - Math.round(h.width / 2) + g } if (this.barCtx.lastActiveBarSerieIndex === s && f.enabled) { var A = new v(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: s, j: a }), u.fontSize);
                        k ? (b = S - d + Math.round(A.width / 2) - g - f.offsetX - 15, _ = "end") : b = S - d - Math.round(A.width / 2) + g + f.offsetX + 15, y = w + f.offsetY } return e.config.chart.stacked || (c < 0 ? c = c + h.width + d : c + h.width / 2 > e.globals.gridWidth && (c = e.globals.gridWidth - h.width - d)), { bcx: i, bcy: o, dataLabelsX: c, dataLabelsY: w, totalDataLabelsX: b, totalDataLabelsY: y, totalDataLabelsAnchor: _ } } }, { key: "drawCalculatedDataLabels", value: function(t) { var i = t.x,
                        n = t.y,
                        a = t.val,
                        s = t.i,
                        o = t.j,
                        r = t.textRects,
                        l = t.barHeight,
                        h = t.barWidth,
                        c = t.dataLabelsConfig,
                        d = this.w,
                        u = "rotate(0)"; "vertical" === d.config.plotOptions.bar.dataLabels.orientation && (u = "rotate(-90, ".concat(i, ", ").concat(n, ")")); var p = new N(this.barCtx.ctx),
                        f = new v(this.barCtx.ctx),
                        g = c.formatter,
                        m = null,
                        x = d.globals.collapsedSeriesIndices.indexOf(s) > -1; if (c.enabled && !x) { m = f.group({ class: "apexcharts-data-labels", transform: u }); var b = "";
                        void 0 !== a && (b = g(a, e(e({}, d), {}, { seriesIndex: s, dataPointIndex: o, w: d }))); var y = d.globals.series[s][o] < 0,
                            w = d.config.plotOptions.bar.dataLabels.position; "vertical" === d.config.plotOptions.bar.dataLabels.orientation && ("top" === w && (c.textAnchor = y ? "end" : "start"), "center" === w && (c.textAnchor = "middle"), "bottom" === w && (c.textAnchor = y ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && h < f.getTextRects(b, parseFloat(c.style.fontSize)).width && (b = ""), d.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? r.width / 1.6 > Math.abs(h) && (b = "") : r.height / 1.6 > Math.abs(l) && (b = "")); var _ = e({}, c);
                        this.barCtx.isHorizontal && a < 0 && ("start" === c.textAnchor ? _.textAnchor = "end" : "end" === c.textAnchor && (_.textAnchor = "start")), p.plotDataLabelsText({ x: i, y: n, text: b, i: s, j: o, parent: m, dataLabelsConfig: _, alwaysDrawDataLabel: !0, offsetCorrection: !0 }) } return m } }, { key: "drawTotalDataLabels", value: function(t) { var e, i = t.x,
                        n = t.y,
                        a = t.val,
                        s = t.realIndex,
                        o = t.textAnchor,
                        r = t.barTotalDataLabelsConfig,
                        l = new v(this.barCtx.ctx); return r.enabled && void 0 !== i && void 0 !== n && this.barCtx.lastActiveBarSerieIndex === s && (e = l.drawText({ x: i, y: n, foreColor: r.style.color, text: a, textAnchor: o, fontFamily: r.style.fontFamily, fontSize: r.style.fontSize, fontWeight: r.style.fontWeight })), e } }]), t }(),
        vt = function() {
            function t(e) { n(this, t), this.w = e.w, this.barCtx = e } return s(t, [{ key: "initVariables", value: function(t) { var e = this.w;
                    this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1; for (var i = 0; i < t.length; i++)
                        if (t[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric)
                            for (var n = 0; n < t[i].length; n++) e.globals.seriesX[i][n] > e.globals.minX && e.globals.seriesX[i][n] < e.globals.maxX && this.barCtx.visibleItems++;
                        else this.barCtx.visibleItems = e.globals.dataPoints;
                    0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], this.barCtx.radiusOnSeriesNumber = t.length - 1, e.globals.comboCharts || this.checkZeroSeries({ series: t }) } }, { key: "initialPositions", value: function() { var t, e, i, n, a, s, o, r, l = this.w,
                        h = l.globals.dataPoints;
                    this.barCtx.isRangeBar && (h = l.globals.labels.length); var c = this.barCtx.seriesLen; if (l.config.plotOptions.bar.rangeBarGroupRows && (c = 1), this.barCtx.isHorizontal) a = (i = l.globals.gridHeight / h) / c, l.globals.isXNumeric && (a = (i = l.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), a = a * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, r = this.barCtx.baseLineInvertedY + l.globals.padHorizontal + (this.barCtx.isReversed ? l.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), e = (i - a * this.barCtx.seriesLen) / 2;
                    else { if (n = l.globals.gridWidth / this.barCtx.visibleItems, l.config.xaxis.convertedCatToNumeric && (n = l.globals.gridWidth / l.globals.dataPoints), s = n / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l.globals.isXNumeric) { var d = this.barCtx.xRatio;
                            l.config.xaxis.convertedCatToNumeric && (d = this.barCtx.initialXRatio), l.globals.minXDiff && .5 !== l.globals.minXDiff && l.globals.minXDiff / d > 0 && (n = l.globals.minXDiff / d), (s = n / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (s = 1) }
                        o = l.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? l.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = l.globals.padHorizontal + (n - s * this.barCtx.seriesLen) / 2 } return { x: t, y: e, yDivision: i, xDivision: n, barHeight: a, barWidth: s, zeroH: o, zeroW: r } } }, { key: "getPathFillColor", value: function(t, e, i, n) { var a, s, o, r, l = this.w,
                        h = new O(this.barCtx.ctx),
                        c = null,
                        d = this.barCtx.barOptions.distributed ? i : e; return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map((function(n) { t[e][i] >= n.from && t[e][i] <= n.to && (c = n.color) })), l.config.series[e].data[i] && l.config.series[e].data[i].fillColor && (c = l.config.series[e].data[i].fillColor), h.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? d : n, dataPointIndex: i, color: c, value: t[e][i], fillConfig: null === (a = l.config.series[e].data[i]) || void 0 === a ? void 0 : a.fill, fillType: null !== (s = l.config.series[e].data[i]) && void 0 !== s && null !== (o = s.fill) && void 0 !== o && o.type ? null === (r = l.config.series[e].data[i]) || void 0 === r ? void 0 : r.fill.type : l.config.fill.type }) } }, { key: "getStrokeWidth", value: function(t, e, i) { var n = 0,
                        a = this.w; return void 0 === this.barCtx.series[t][e] || null === this.barCtx.series[t][e] ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, a.config.stroke.show && (this.barCtx.isNullValue || (n = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), n } }, { key: "shouldApplyRadius", value: function(t) { var e = this.w,
                        i = !1; return e.config.plotOptions.bar.borderRadius > 0 && (e.config.chart.stacked && "last" === e.config.plotOptions.bar.borderRadiusWhenStacked ? this.barCtx.lastActiveBarSerieIndex === t && (i = !0) : i = !0), i } }, { key: "barBackground", value: function(t) { var e = t.j,
                        i = t.i,
                        n = t.x1,
                        a = t.x2,
                        s = t.y1,
                        o = t.y2,
                        r = t.elSeries,
                        l = this.w,
                        h = new v(this.barCtx.ctx),
                        c = new F(this.barCtx.ctx).getActiveConfigSeriesIndex(); if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c === i) { e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e %= this.barCtx.barOptions.colors.backgroundBarColors.length); var d = this.barCtx.barOptions.colors.backgroundBarColors[e],
                            u = h.drawRect(void 0 !== n ? n : 0, void 0 !== s ? s : 0, void 0 !== a ? a : l.globals.gridWidth, void 0 !== o ? o : l.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d, this.barCtx.barOptions.colors.backgroundBarOpacity);
                        r.add(u), u.node.classList.add("apexcharts-backgroundBar") } } }, { key: "getColumnPaths", value: function(t) { var e, i = t.barWidth,
                        n = t.barXPosition,
                        a = t.y1,
                        s = t.y2,
                        o = t.strokeWidth,
                        r = t.realIndex,
                        l = t.i,
                        h = t.j,
                        c = t.w,
                        d = new v(this.barCtx.ctx);
                    (o = Array.isArray(o) ? o[r] : o) || (o = 0); var u = i,
                        p = n;
                    null !== (e = c.config.series[r].data[h]) && void 0 !== e && e.columnWidthOffset && (p = n - c.config.series[r].data[h].columnWidthOffset / 2, u = i + c.config.series[r].data[h].columnWidthOffset); var f = p,
                        g = p + u;
                    a += .001, s += .001; var m = d.move(f, a),
                        x = d.move(f, a),
                        b = d.line(g - o, a); return c.globals.previousPaths.length > 0 && (x = this.barCtx.getPreviousPath(r, h, !1)), m = m + d.line(f, s) + d.line(g - o, s) + d.line(g - o, a) + ("around" === c.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), x = x + d.line(f, a) + b + b + b + b + b + d.line(f, a) + ("around" === c.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), this.shouldApplyRadius(r) && (m = d.roundPathCorners(m, c.config.plotOptions.bar.borderRadius)), c.config.chart.stacked && (this.barCtx.yArrj.push(s), this.barCtx.yArrjF.push(Math.abs(a - s)), this.barCtx.yArrjVal.push(this.barCtx.series[l][h])), { pathTo: m, pathFrom: x } } }, { key: "getBarpaths", value: function(t) { var e, i = t.barYPosition,
                        n = t.barHeight,
                        a = t.x1,
                        s = t.x2,
                        o = t.strokeWidth,
                        r = t.realIndex,
                        l = t.i,
                        h = t.j,
                        c = t.w,
                        d = new v(this.barCtx.ctx);
                    (o = Array.isArray(o) ? o[r] : o) || (o = 0); var u = i,
                        p = n;
                    null !== (e = c.config.series[r].data[h]) && void 0 !== e && e.barHeightOffset && (u = i - c.config.series[r].data[h].barHeightOffset / 2, p = n + c.config.series[r].data[h].barHeightOffset); var f = u,
                        g = u + p;
                    a += .001, s += .001; var m = d.move(a, f),
                        x = d.move(a, f);
                    c.globals.previousPaths.length > 0 && (x = this.barCtx.getPreviousPath(r, h, !1)); var b = d.line(a, g - o); return m = m + d.line(s, f) + d.line(s, g - o) + b + ("around" === c.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), x = x + d.line(a, f) + b + b + b + b + b + d.line(a, f) + ("around" === c.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), this.shouldApplyRadius(r) && (m = d.roundPathCorners(m, c.config.plotOptions.bar.borderRadius)), c.config.chart.stacked && (this.barCtx.xArrj.push(s), this.barCtx.xArrjF.push(Math.abs(a - s)), this.barCtx.xArrjVal.push(this.barCtx.series[l][h])), { pathTo: m, pathFrom: x } } }, { key: "checkZeroSeries", value: function(t) { for (var e = t.series, i = this.w, n = 0; n < e.length; n++) { for (var a = 0, s = 0; s < e[i.globals.maxValsInArrayIndex].length; s++) a += e[n][s];
                        0 === a && this.barCtx.zeroSerieses.push(n) } for (var o = e.length - 1; o >= 0; o--) this.barCtx.zeroSerieses.indexOf(o) > -1 && o === this.radiusOnSeriesNumber && (this.barCtx.radiusOnSeriesNumber -= 1); for (var r = e.length - 1; r >= 0; r--) i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber) > -1 && (this.barCtx.radiusOnSeriesNumber -= 1) } }, { key: "getXForValue", value: function(t, e) { var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = i ? e : null; return null != t && (n = e + t / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t / this.barCtx.invertedYRatio : 0)), n } }, { key: "getYForValue", value: function(t, e) { var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = i ? e : null; return null != t && (n = e - t / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0)), n } }, { key: "getGoalValues", value: function(t, e, i, n, a) { var s = this,
                        r = this.w,
                        l = []; return r.globals.seriesGoals[n] && r.globals.seriesGoals[n][a] && Array.isArray(r.globals.seriesGoals[n][a]) && r.globals.seriesGoals[n][a].forEach((function(n) { var a;
                        l.push((o(a = {}, t, "x" === t ? s.getXForValue(n.value, e, !1) : s.getYForValue(n.value, i, !1)), o(a, "attrs", n), a)) })), l } }, { key: "drawGoalLine", value: function(t) { var e = t.barXPosition,
                        i = t.barYPosition,
                        n = t.goalX,
                        a = t.goalY,
                        s = t.barWidth,
                        o = t.barHeight,
                        r = new v(this.barCtx.ctx),
                        l = r.group({ className: "apexcharts-bar-goals-groups" }),
                        h = null; return this.barCtx.isHorizontal ? Array.isArray(n) && n.forEach((function(t) { var e = void 0 !== t.attrs.strokeHeight ? t.attrs.strokeHeight : o / 2,
                            n = i + e + o / 2;
                        h = r.drawLine(t.x, n - 2 * e, t.x, n, t.attrs.strokeColor ? t.attrs.strokeColor : void 0, t.attrs.strokeDashArray, t.attrs.strokeWidth ? t.attrs.strokeWidth : 2, t.attrs.strokeLineCap), l.add(h) })) : Array.isArray(a) && a.forEach((function(t) { var i = void 0 !== t.attrs.strokeWidth ? t.attrs.strokeWidth : s / 2,
                            n = e + i + s / 2;
                        h = r.drawLine(n - 2 * i, t.y, n, t.y, t.attrs.strokeColor ? t.attrs.strokeColor : void 0, t.attrs.strokeDashArray, t.attrs.strokeHeight ? t.attrs.strokeHeight : 2, t.attrs.strokeLineCap), l.add(h) })), l } }]), t }(),
        bt = function() {
            function t(e, i) { n(this, t), this.ctx = e, this.w = e.w; var a = this.w;
                this.barOptions = a.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = a.config.stroke.width, this.isNullValue = !1, this.isRangeBar = a.globals.seriesRange.length && this.isHorizontal, this.xyRatios = i, null !== this.xyRatios && (this.xRatio = i.xRatio, this.initialXRatio = i.initialXRatio, this.yRatio = i.yRatio, this.invertedXRatio = i.invertedXRatio, this.invertedYRatio = i.invertedYRatio, this.baseLineY = i.baseLineY, this.baseLineInvertedY = i.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0; var s = new F(this.ctx);
                this.lastActiveBarSerieIndex = s.getActiveConfigSeriesIndex("desc", ["bar", "column"]); var o = s.getBarSeriesIndices(),
                    r = new b(this.ctx);
                this.stackedSeriesTotals = r.getStackedSeriesTotals(this.w.config.series.map((function(t, e) { return -1 === o.indexOf(e) ? e : -1 })).filter((function(t) { return -1 !== t }))), this.barHelpers = new vt(this) } return s(t, [{ key: "draw", value: function(t, i) { var n = this.w,
                        a = new v(this.ctx),
                        s = new b(this.ctx, n);
                    t = s.getLogSeries(t), this.series = t, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t); var o = a.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
                    n.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering."); for (var r = 0, l = 0; r < t.length; r++, l++) { var h, c, d, u, p = void 0,
                            f = void 0,
                            m = [],
                            x = [],
                            y = n.globals.comboCharts ? i[r] : r,
                            w = a.group({ class: "apexcharts-series", rel: r + 1, seriesName: g.escapeString(n.globals.seriesNames[y]), "data:realIndex": y });
                        this.ctx.series.addCollapsedClassToSeries(w, y), t[r].length > 0 && (this.visibleI = this.visibleI + 1); var _ = 0,
                            k = 0;
                        this.yRatio.length > 1 && (this.yaxisIndex = y), this.isReversed = n.config.yaxis[this.yaxisIndex] && n.config.yaxis[this.yaxisIndex].reversed; var S = this.barHelpers.initialPositions();
                        f = S.y, _ = S.barHeight, c = S.yDivision, u = S.zeroW, p = S.x, k = S.barWidth, h = S.xDivision, d = S.zeroH, this.horizontal || x.push(p + k / 2); for (var A = a.group({ class: "apexcharts-datalabels", "data:realIndex": y }), C = a.group({ class: "apexcharts-bar-goals-markers", style: "pointer-events: none" }), P = 0; P < n.globals.dataPoints; P++) { var L = this.barHelpers.getStrokeWidth(r, P, y),
                                T = null,
                                M = { indexes: { i: r, j: P, realIndex: y, bc: l }, x: p, y: f, strokeWidth: L, elSeries: w };
                            this.isHorizontal ? (T = this.drawBarPaths(e(e({}, M), {}, { barHeight: _, zeroW: u, yDivision: c })), k = this.series[r][P] / this.invertedYRatio) : (T = this.drawColumnPaths(e(e({}, M), {}, { xDivision: h, barWidth: k, zeroH: d })), _ = this.series[r][P] / this.yRatio[this.yaxisIndex]); var E = this.barHelpers.drawGoalLine({ barXPosition: T.barXPosition, barYPosition: T.barYPosition, goalX: T.goalX, goalY: T.goalY, barHeight: _, barWidth: k });
                            E && C.add(E), f = T.y, p = T.x, P > 0 && x.push(p + k / 2), m.push(f); var z = this.barHelpers.getPathFillColor(t, r, P, y);
                            this.renderSeries({ realIndex: y, pathFill: z, j: P, i: r, pathFrom: T.pathFrom, pathTo: T.pathTo, strokeWidth: L, elSeries: w, x: p, y: f, series: t, barHeight: _, barWidth: k, elDataLabelsWrap: A, elGoalsMarkers: C, visibleSeries: this.visibleI, type: "bar" }) }
                        n.globals.seriesXvalues[y] = x, n.globals.seriesYvalues[y] = m, o.add(w) } return o } }, { key: "renderSeries", value: function(t) { var e = t.realIndex,
                        i = t.pathFill,
                        n = t.lineFill,
                        a = t.j,
                        s = t.i,
                        o = t.pathFrom,
                        r = t.pathTo,
                        l = t.strokeWidth,
                        h = t.elSeries,
                        c = t.x,
                        d = t.y,
                        u = t.y1,
                        p = t.y2,
                        f = t.series,
                        g = t.barHeight,
                        m = t.barWidth,
                        b = t.barYPosition,
                        y = t.elDataLabelsWrap,
                        w = t.elGoalsMarkers,
                        _ = t.visibleSeries,
                        k = t.type,
                        S = this.w,
                        A = new v(this.ctx);
                    n || (n = this.barOptions.distributed ? S.globals.stroke.colors[a] : S.globals.stroke.colors[e]), S.config.series[s].data[a] && S.config.series[s].data[a].strokeColor && (n = S.config.series[s].data[a].strokeColor), this.isNullValue && (i = "none"); var C = a / S.config.chart.animations.animateGradually.delay * (S.config.chart.animations.speed / S.globals.dataPoints) / 2.4,
                        P = A.renderPaths({ i: s, j: a, realIndex: e, pathFrom: o, pathTo: r, stroke: n, strokeWidth: l, strokeLineCap: S.config.stroke.lineCap, fill: i, animationDelay: C, initialSpeed: S.config.chart.animations.speed, dataChangeSpeed: S.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(k, "-area") });
                    P.attr("clip-path", "url(#gridRectMask".concat(S.globals.cuid, ")")); var L = S.config.forecastDataPoints;
                    L.count > 0 && a >= S.globals.dataPoints - L.count && (P.node.setAttribute("stroke-dasharray", L.dashArray), P.node.setAttribute("stroke-width", L.strokeWidth), P.node.setAttribute("fill-opacity", L.fillOpacity)), void 0 !== u && void 0 !== p && (P.attr("data-range-y1", u), P.attr("data-range-y2", p)), new x(this.ctx).setSelectionFilter(P, e, a), h.add(P); var T = new xt(this).handleBarDataLabels({ x: c, y: d, y1: u, y2: p, i: s, j: a, series: f, realIndex: e, barHeight: g, barWidth: m, barYPosition: b, renderedPath: P, visibleSeries: _ }); return null !== T.dataLabels && y.add(T.dataLabels), T.totalDataLabels && y.add(T.totalDataLabels), h.add(y), w && h.add(w), h } }, { key: "drawBarPaths", value: function(t) { var e = t.indexes,
                        i = t.barHeight,
                        n = t.strokeWidth,
                        a = t.zeroW,
                        s = t.x,
                        o = t.y,
                        r = t.yDivision,
                        l = t.elSeries,
                        h = this.w,
                        c = e.i,
                        d = e.j;
                    h.globals.isXNumeric && (o = (h.globals.seriesX[c][d] - h.globals.minX) / this.invertedXRatio - i); var u = o + i * this.visibleI;
                    s = this.barHelpers.getXForValue(this.series[c][d], a); var p = this.barHelpers.getBarpaths({ barYPosition: u, barHeight: i, x1: a, x2: s, strokeWidth: n, series: this.series, realIndex: e.realIndex, i: c, j: d, w: h }); return h.globals.isXNumeric || (o += r), this.barHelpers.barBackground({ j: d, i: c, y1: u - i * this.visibleI, y2: i * this.seriesLen, elSeries: l }), { pathTo: p.pathTo, pathFrom: p.pathFrom, x: s, y: o, goalX: this.barHelpers.getGoalValues("x", a, null, c, d), barYPosition: u } } }, { key: "drawColumnPaths", value: function(t) { var e = t.indexes,
                        i = t.x,
                        n = t.y,
                        a = t.xDivision,
                        s = t.barWidth,
                        o = t.zeroH,
                        r = t.strokeWidth,
                        l = t.elSeries,
                        h = this.w,
                        c = e.realIndex,
                        d = e.i,
                        u = e.j,
                        p = e.bc; if (h.globals.isXNumeric) { var f = c;
                        h.globals.seriesX[c].length || (f = h.globals.maxValsInArrayIndex), i = (h.globals.seriesX[f][u] - h.globals.minX) / this.xRatio - s * this.seriesLen / 2 } var g = i + s * this.visibleI;
                    n = this.barHelpers.getYForValue(this.series[d][u], o); var m = this.barHelpers.getColumnPaths({ barXPosition: g, barWidth: s, y1: o, y2: n, strokeWidth: r, series: this.series, realIndex: e.realIndex, i: d, j: u, w: h }); return h.globals.isXNumeric || (i += a), this.barHelpers.barBackground({ bc: p, j: u, i: d, x1: g - r / 2 - s * this.visibleI, x2: s * this.seriesLen + r / 2, elSeries: l }), { pathTo: m.pathTo, pathFrom: m.pathFrom, x: i, y: n, goalY: this.barHelpers.getGoalValues("y", null, o, d, u), barXPosition: g } } }, { key: "getPreviousPath", value: function(t, e) { for (var i, n = this.w, a = 0; a < n.globals.previousPaths.length; a++) { var s = n.globals.previousPaths[a];
                        s.paths && s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(t, 10) && void 0 !== n.globals.previousPaths[a].paths[e] && (i = n.globals.previousPaths[a].paths[e].d) } return i } }]), t }(),
        yt = function(t) { r(a, t); var i = d(a);

            function a() { return n(this, a), i.apply(this, arguments) } return s(a, [{ key: "draw", value: function(t, i) { var n = this,
                        a = this.w;
                    this.graphics = new v(this.ctx), this.bar = new bt(this.ctx, this.xyRatios); var s = new b(this.ctx, a);
                    t = s.getLogSeries(t), this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t), "100%" === a.config.chart.stackType && (t = a.globals.seriesPercent.slice()), this.series = t, this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = []; for (var o = 0; o < t.length; o++) t[o].length > 0 && (this.totalItems += t[o].length); for (var r = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), l = 0, h = 0, c = function(s, o) { var c = void 0,
                                d = void 0,
                                u = void 0,
                                p = void 0,
                                f = [],
                                m = [],
                                x = a.globals.comboCharts ? i[s] : s;
                            n.yRatio.length > 1 && (n.yaxisIndex = x), n.isReversed = a.config.yaxis[n.yaxisIndex] && a.config.yaxis[n.yaxisIndex].reversed; var v = n.graphics.group({ class: "apexcharts-series", seriesName: g.escapeString(a.globals.seriesNames[x]), rel: s + 1, "data:realIndex": x });
                            n.ctx.series.addCollapsedClassToSeries(v, x); var b = n.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": x }),
                                y = n.graphics.group({ class: "apexcharts-bar-goals-markers", style: "pointer-events: none" }),
                                w = 0,
                                _ = 0,
                                k = n.initialPositions(l, h, c, d, u, p);
                            h = k.y, w = k.barHeight, d = k.yDivision, p = k.zeroW, l = k.x, _ = k.barWidth, c = k.xDivision, u = k.zeroH, n.yArrj = [], n.yArrjF = [], n.yArrjVal = [], n.xArrj = [], n.xArrjF = [], n.xArrjVal = [], 1 === n.prevY.length && n.prevY[0].every((function(t) { return isNaN(t) })) && (n.prevY[0] = n.prevY[0].map((function(t) { return u })), n.prevYF[0] = n.prevYF[0].map((function(t) { return 0 }))); for (var S = 0; S < a.globals.dataPoints; S++) { var A = n.barHelpers.getStrokeWidth(s, S, x),
                                    C = { indexes: { i: s, j: S, realIndex: x, bc: o }, strokeWidth: A, x: l, y: h, elSeries: v },
                                    P = null;
                                n.isHorizontal ? (P = n.drawStackedBarPaths(e(e({}, C), {}, { zeroW: p, barHeight: w, yDivision: d })), _ = n.series[s][S] / n.invertedYRatio) : (P = n.drawStackedColumnPaths(e(e({}, C), {}, { xDivision: c, barWidth: _, zeroH: u })), w = n.series[s][S] / n.yRatio[n.yaxisIndex]); var L = n.barHelpers.drawGoalLine({ barXPosition: P.barXPosition, barYPosition: P.barYPosition, goalX: P.goalX, goalY: P.goalY, barHeight: w, barWidth: _ });
                                L && y.add(L), h = P.y, l = P.x, f.push(l), m.push(h); var T = n.barHelpers.getPathFillColor(t, s, S, x);
                                v = n.renderSeries({ realIndex: x, pathFill: T, j: S, i: s, pathFrom: P.pathFrom, pathTo: P.pathTo, strokeWidth: A, elSeries: v, x: l, y: h, series: t, barHeight: w, barWidth: _, elDataLabelsWrap: b, elGoalsMarkers: y, type: "bar", visibleSeries: 0 }) }
                            a.globals.seriesXvalues[x] = f, a.globals.seriesYvalues[x] = m, n.prevY.push(n.yArrj), n.prevYF.push(n.yArrjF), n.prevYVal.push(n.yArrjVal), n.prevX.push(n.xArrj), n.prevXF.push(n.xArrjF), n.prevXVal.push(n.xArrjVal), r.add(v) }, d = 0, u = 0; d < t.length; d++, u++) c(d, u); return r } }, { key: "initialPositions", value: function(t, e, i, n, a, s) { var o, r, l = this.w; return this.isHorizontal ? (o = (o = n = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight, 10) / 100, s = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (n - o) / 2) : (r = i = l.globals.gridWidth / l.globals.dataPoints, r = l.globals.isXNumeric && l.globals.dataPoints > 1 ? (i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : r * parseInt(l.config.plotOptions.bar.columnWidth, 10) / 100, a = l.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? l.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (i - r) / 2), { x: t, y: e, yDivision: n, xDivision: i, barHeight: o, barWidth: r, zeroH: a, zeroW: s } } }, { key: "drawStackedBarPaths", value: function(t) { for (var e, i = t.indexes, n = t.barHeight, a = t.strokeWidth, s = t.zeroW, o = t.x, r = t.y, l = t.yDivision, h = t.elSeries, c = this.w, d = r, u = i.i, p = i.j, f = 0, g = 0; g < this.prevXF.length; g++) f += this.prevXF[g][p]; if (u > 0) { var m = s;
                        this.prevXVal[u - 1][p] < 0 ? m = this.series[u][p] >= 0 ? this.prevX[u - 1][p] + f - 2 * (this.isReversed ? f : 0) : this.prevX[u - 1][p] : this.prevXVal[u - 1][p] >= 0 && (m = this.series[u][p] >= 0 ? this.prevX[u - 1][p] : this.prevX[u - 1][p] - f + 2 * (this.isReversed ? f : 0)), e = m } else e = s;
                    o = null === this.series[u][p] ? e : e + this.series[u][p] / this.invertedYRatio - 2 * (this.isReversed ? this.series[u][p] / this.invertedYRatio : 0); var x = this.barHelpers.getBarpaths({ barYPosition: d, barHeight: n, x1: e, x2: o, strokeWidth: a, series: this.series, realIndex: i.realIndex, i: u, j: p, w: c }); return this.barHelpers.barBackground({ j: p, i: u, y1: d, y2: n, elSeries: h }), r += l, { pathTo: x.pathTo, pathFrom: x.pathFrom, goalX: this.barHelpers.getGoalValues("x", s, null, u, p), barYPosition: d, x: o, y: r } } }, { key: "drawStackedColumnPaths", value: function(t) { var e = t.indexes,
                        i = t.x,
                        n = t.y,
                        a = t.xDivision,
                        s = t.barWidth,
                        o = t.zeroH;
                    t.strokeWidth; var r = t.elSeries,
                        l = this.w,
                        h = e.i,
                        c = e.j,
                        d = e.bc; if (l.globals.isXNumeric) { var u = l.globals.seriesX[h][c];
                        u || (u = 0), i = (u - l.globals.minX) / this.xRatio - s / 2 } for (var p, f = i, g = 0, m = 0; m < this.prevYF.length; m++) g += isNaN(this.prevYF[m][c]) ? 0 : this.prevYF[m][c]; if (h > 0 && !l.globals.isXNumeric || h > 0 && l.globals.isXNumeric && l.globals.seriesX[h - 1][c] === l.globals.seriesX[h][c]) { var x, v, b = Math.min(this.yRatio.length + 1, h + 1); if (void 0 !== this.prevY[h - 1])
                            for (var y = 1; y < b; y++)
                                if (!isNaN(this.prevY[h - y][c])) { v = this.prevY[h - y][c]; break }
                        for (var w = 1; w < b; w++) { if (this.prevYVal[h - w][c] < 0) { x = this.series[h][c] >= 0 ? v - g + 2 * (this.isReversed ? g : 0) : v; break } if (this.prevYVal[h - w][c] >= 0) { x = this.series[h][c] >= 0 ? v : v + g - 2 * (this.isReversed ? g : 0); break } }
                        void 0 === x && (x = l.globals.gridHeight), p = this.prevYF[0].every((function(t) { return 0 === t })) && this.prevYF.slice(1, h).every((function(t) { return t.every((function(t) { return isNaN(t) })) })) ? o : x } else p = o;
                    n = p - this.series[h][c] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[h][c] / this.yRatio[this.yaxisIndex] : 0); var _ = this.barHelpers.getColumnPaths({ barXPosition: f, barWidth: s, y1: p, y2: n, yRatio: this.yRatio[this.yaxisIndex], strokeWidth: this.strokeWidth, series: this.series, realIndex: e.realIndex, i: h, j: c, w: l }); return this.barHelpers.barBackground({ bc: d, j: c, i: h, x1: f, x2: s, elSeries: r }), i += a, { pathTo: _.pathTo, pathFrom: _.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, o, h, c), barXPosition: f, x: l.globals.isXNumeric ? i - a : i, y: n } } }]), a }(bt),
        wt = function(t) { r(a, t); var i = d(a);

            function a() { return n(this, a), i.apply(this, arguments) } return s(a, [{ key: "draw", value: function(t, i) { var n = this,
                        a = this.w,
                        s = new v(this.ctx),
                        o = new O(this.ctx);
                    this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = a.config.plotOptions.bar.horizontal; var r = new b(this.ctx, a);
                    t = r.getLogSeries(t), this.series = t, this.yRatio = r.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t); for (var l = s.group({ class: "apexcharts-".concat(a.config.chart.type, "-series apexcharts-plot-series") }), h = function(r) { n.isBoxPlot = "boxPlot" === a.config.chart.type || "boxPlot" === a.config.series[r].type; var h, c, d, u, p, f, m = void 0,
                                x = void 0,
                                v = [],
                                b = [],
                                y = a.globals.comboCharts ? i[r] : r,
                                w = s.group({ class: "apexcharts-series", seriesName: g.escapeString(a.globals.seriesNames[y]), rel: r + 1, "data:realIndex": y });
                            n.ctx.series.addCollapsedClassToSeries(w, y), t[r].length > 0 && (n.visibleI = n.visibleI + 1), n.yRatio.length > 1 && (n.yaxisIndex = y); var _ = n.barHelpers.initialPositions();
                            x = _.y, p = _.barHeight, c = _.yDivision, u = _.zeroW, m = _.x, f = _.barWidth, h = _.xDivision, d = _.zeroH, b.push(m + f / 2); for (var k = s.group({ class: "apexcharts-datalabels", "data:realIndex": y }), S = function(i) { var s = n.barHelpers.getStrokeWidth(r, i, y),
                                        l = null,
                                        g = { indexes: { i: r, j: i, realIndex: y }, x: m, y: x, strokeWidth: s, elSeries: w };
                                    l = n.isHorizontal ? n.drawHorizontalBoxPaths(e(e({}, g), {}, { yDivision: c, barHeight: p, zeroW: u })) : n.drawVerticalBoxPaths(e(e({}, g), {}, { xDivision: h, barWidth: f, zeroH: d })), x = l.y, m = l.x, i > 0 && b.push(m + f / 2), v.push(x), l.pathTo.forEach((function(e, h) { var c = !n.isBoxPlot && n.candlestickOptions.wick.useFillColor ? l.color[h] : a.globals.stroke.colors[r],
                                            d = o.fillPath({ seriesNumber: y, dataPointIndex: i, color: l.color[h], value: t[r][i] });
                                        n.renderSeries({ realIndex: y, pathFill: d, lineFill: c, j: i, i: r, pathFrom: l.pathFrom, pathTo: e, strokeWidth: s, elSeries: w, x: m, y: x, series: t, barHeight: p, barWidth: f, elDataLabelsWrap: k, visibleSeries: n.visibleI, type: a.config.chart.type }) })) }, A = 0; A < a.globals.dataPoints; A++) S(A);
                            a.globals.seriesXvalues[y] = b, a.globals.seriesYvalues[y] = v, l.add(w) }, c = 0; c < t.length; c++) h(c); return l } }, { key: "drawVerticalBoxPaths", value: function(t) { var e = t.indexes,
                        i = t.x;
                    t.y; var n = t.xDivision,
                        a = t.barWidth,
                        s = t.zeroH,
                        o = t.strokeWidth,
                        r = this.w,
                        l = new v(this.ctx),
                        h = e.i,
                        c = e.j,
                        d = !0,
                        u = r.config.plotOptions.candlestick.colors.upward,
                        p = r.config.plotOptions.candlestick.colors.downward,
                        f = "";
                    this.isBoxPlot && (f = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]); var g = this.yRatio[this.yaxisIndex],
                        m = e.realIndex,
                        x = this.getOHLCValue(m, c),
                        b = s,
                        y = s;
                    x.o > x.c && (d = !1); var w = Math.min(x.o, x.c),
                        _ = Math.max(x.o, x.c),
                        k = x.m;
                    r.globals.isXNumeric && (i = (r.globals.seriesX[m][c] - r.globals.minX) / this.xRatio - a / 2); var S = i + a * this.visibleI;
                    void 0 === this.series[h][c] || null === this.series[h][c] ? (w = s, _ = s) : (w = s - w / g, _ = s - _ / g, b = s - x.h / g, y = s - x.l / g, k = s - x.m / g); var A = l.move(S, s),
                        C = l.move(S + a / 2, w); return r.globals.previousPaths.length > 0 && (C = this.getPreviousPath(m, c, !0)), A = this.isBoxPlot ? [l.move(S, w) + l.line(S + a / 2, w) + l.line(S + a / 2, b) + l.line(S + a / 4, b) + l.line(S + a - a / 4, b) + l.line(S + a / 2, b) + l.line(S + a / 2, w) + l.line(S + a, w) + l.line(S + a, k) + l.line(S, k) + l.line(S, w + o / 2), l.move(S, k) + l.line(S + a, k) + l.line(S + a, _) + l.line(S + a / 2, _) + l.line(S + a / 2, y) + l.line(S + a - a / 4, y) + l.line(S + a / 4, y) + l.line(S + a / 2, y) + l.line(S + a / 2, _) + l.line(S, _) + l.line(S, k) + "z"] : [l.move(S, _) + l.line(S + a / 2, _) + l.line(S + a / 2, b) + l.line(S + a / 2, _) + l.line(S + a, _) + l.line(S + a, w) + l.line(S + a / 2, w) + l.line(S + a / 2, y) + l.line(S + a / 2, w) + l.line(S, w) + l.line(S, _ - o / 2)], C += l.move(S, w), r.globals.isXNumeric || (i += n), { pathTo: A, pathFrom: C, x: i, y: _, barXPosition: S, color: this.isBoxPlot ? f : d ? [u] : [p] } } }, { key: "drawHorizontalBoxPaths", value: function(t) { var e = t.indexes;
                    t.x; var i = t.y,
                        n = t.yDivision,
                        a = t.barHeight,
                        s = t.zeroW,
                        o = t.strokeWidth,
                        r = this.w,
                        l = new v(this.ctx),
                        h = e.i,
                        c = e.j,
                        d = this.boxOptions.colors.lower;
                    this.isBoxPlot && (d = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]); var u = this.invertedYRatio,
                        p = e.realIndex,
                        f = this.getOHLCValue(p, c),
                        g = s,
                        m = s,
                        x = Math.min(f.o, f.c),
                        b = Math.max(f.o, f.c),
                        y = f.m;
                    r.globals.isXNumeric && (i = (r.globals.seriesX[p][c] - r.globals.minX) / this.invertedXRatio - a / 2); var w = i + a * this.visibleI;
                    void 0 === this.series[h][c] || null === this.series[h][c] ? (x = s, b = s) : (x = s + x / u, b = s + b / u, g = s + f.h / u, m = s + f.l / u, y = s + f.m / u); var _ = l.move(s, w),
                        k = l.move(x, w + a / 2); return r.globals.previousPaths.length > 0 && (k = this.getPreviousPath(p, c, !0)), _ = [l.move(x, w) + l.line(x, w + a / 2) + l.line(g, w + a / 2) + l.line(g, w + a / 2 - a / 4) + l.line(g, w + a / 2 + a / 4) + l.line(g, w + a / 2) + l.line(x, w + a / 2) + l.line(x, w + a) + l.line(y, w + a) + l.line(y, w) + l.line(x + o / 2, w), l.move(y, w) + l.line(y, w + a) + l.line(b, w + a) + l.line(b, w + a / 2) + l.line(m, w + a / 2) + l.line(m, w + a - a / 4) + l.line(m, w + a / 4) + l.line(m, w + a / 2) + l.line(b, w + a / 2) + l.line(b, w) + l.line(y, w) + "z"], k += l.move(x, w), r.globals.isXNumeric || (i += n), { pathTo: _, pathFrom: k, x: b, y: i, barYPosition: w, color: d } } }, { key: "getOHLCValue", value: function(t, e) { var i = this.w; return { o: this.isBoxPlot ? i.globals.seriesCandleH[t][e] : i.globals.seriesCandleO[t][e], h: this.isBoxPlot ? i.globals.seriesCandleO[t][e] : i.globals.seriesCandleH[t][e], m: i.globals.seriesCandleM[t][e], l: this.isBoxPlot ? i.globals.seriesCandleC[t][e] : i.globals.seriesCandleL[t][e], c: this.isBoxPlot ? i.globals.seriesCandleL[t][e] : i.globals.seriesCandleC[t][e] } } }]), a }(bt),
        _t = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "checkColorRange", value: function() { var t = this.w,
                        e = !1,
                        i = t.config.plotOptions[t.config.chart.type]; return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map((function(t, i) { t.from <= 0 && (e = !0) })), e } }, { key: "getShadeColor", value: function(t, e, i, n) { var a = this.w,
                        s = 1,
                        o = a.config.plotOptions[t].shadeIntensity,
                        r = this.determineColor(t, e, i);
                    a.globals.hasNegs || n ? s = a.config.plotOptions[t].reverseNegativeShade ? r.percent < 0 ? r.percent / 100 * (1.25 * o) : (1 - r.percent / 100) * (1.25 * o) : r.percent <= 0 ? 1 - (1 + r.percent / 100) * o : (1 - r.percent / 100) * o : (s = 1 - r.percent / 100, "treemap" === t && (s = (1 - r.percent / 100) * (1.25 * o))); var l = r.color,
                        h = new g; return a.config.plotOptions[t].enableShades && (l = "dark" === this.w.config.theme.mode ? g.hexToRgba(h.shadeColor(-1 * s, r.color), a.config.fill.opacity) : g.hexToRgba(h.shadeColor(s, r.color), a.config.fill.opacity)), { color: l, colorProps: r } } }, { key: "determineColor", value: function(t, e, i) { var n = this.w,
                        a = n.globals.series[e][i],
                        s = n.config.plotOptions[t],
                        o = s.colorScale.inverse ? i : e;
                    s.distributed && "treemap" === n.config.chart.type && (o = i); var r = n.globals.colors[o],
                        l = null,
                        h = Math.min.apply(Math, u(n.globals.series[e])),
                        c = Math.max.apply(Math, u(n.globals.series[e]));
                    s.distributed || "heatmap" !== t || (h = n.globals.minY, c = n.globals.maxY), void 0 !== s.colorScale.min && (h = s.colorScale.min < n.globals.minY ? s.colorScale.min : n.globals.minY, c = s.colorScale.max > n.globals.maxY ? s.colorScale.max : n.globals.maxY); var d = Math.abs(c) + Math.abs(h),
                        p = 100 * a / (0 === d ? d - 1e-6 : d); return s.colorScale.ranges.length > 0 && s.colorScale.ranges.map((function(t, e) { if (a >= t.from && a <= t.to) { r = t.color, l = t.foreColor ? t.foreColor : null, h = t.from, c = t.to; var i = Math.abs(c) + Math.abs(h);
                            p = 100 * a / (0 === i ? i - 1e-6 : i) } })), { color: r, foreColor: l, percent: p } } }, { key: "calculateDataLabels", value: function(t) { var e = t.text,
                        i = t.x,
                        n = t.y,
                        a = t.i,
                        s = t.j,
                        o = t.colorProps,
                        r = t.fontSize,
                        l = this.w.config.dataLabels,
                        h = new v(this.ctx),
                        c = new N(this.ctx),
                        d = null; if (l.enabled) { d = h.group({ class: "apexcharts-data-labels" }); var u = l.offsetX,
                            p = l.offsetY,
                            f = i + u,
                            g = n + parseFloat(l.style.fontSize) / 3 + p;
                        c.plotDataLabelsText({ x: f, y: g, text: e, i: a, j: s, color: o.foreColor, parent: d, fontSize: r, dataLabelsConfig: l }) } return d } }, { key: "addListeners", value: function(t) { var e = new v(this.ctx);
                    t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t)) } }]), t }(),
        kt = function() {
            function t(e, i) { n(this, t), this.ctx = e, this.w = e.w, this.xRatio = i.xRatio, this.yRatio = i.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new _t(e), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0 } return s(t, [{ key: "draw", value: function(t) { var e = this.w,
                        i = new v(this.ctx),
                        n = i.group({ class: "apexcharts-heatmap" });
                    n.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")")); var a = e.globals.gridWidth / e.globals.dataPoints,
                        s = e.globals.gridHeight / e.globals.series.length,
                        o = 0,
                        r = !1;
                    this.negRange = this.helpers.checkColorRange(); var l = t.slice();
                    e.config.yaxis[0].reversed && (r = !0, l.reverse()); for (var h = r ? 0 : l.length - 1; r ? h < l.length : h >= 0; r ? h++ : h--) { var c = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: g.escapeString(e.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h }); if (this.ctx.series.addCollapsedClassToSeries(c, h), e.config.chart.dropShadow.enabled) { var d = e.config.chart.dropShadow;
                            new x(this.ctx).dropShadow(c, d, h) } for (var u = 0, p = e.config.plotOptions.heatmap.shadeIntensity, f = 0; f < l[h].length; f++) { var m = this.helpers.getShadeColor(e.config.chart.type, h, f, this.negRange),
                                b = m.color,
                                y = m.colorProps; "image" === e.config.fill.type && (b = new O(this.ctx).fillPath({ seriesNumber: h, dataPointIndex: f, opacity: e.globals.hasNegs ? y.percent < 0 ? 1 - (1 + y.percent / 100) : p + y.percent / 100 : y.percent / 100, patternID: g.randomId(), width: e.config.fill.image.width ? e.config.fill.image.width : a, height: e.config.fill.image.height ? e.config.fill.image.height : s })); var w = this.rectRadius,
                                _ = i.drawRect(u, o, a, s, w); if (_.attr({ cx: u, cy: o }), _.node.classList.add("apexcharts-heatmap-rect"), c.add(_), _.attr({ fill: b, i: h, index: h, j: f, val: l[h][f], "stroke-width": this.strokeWidth, stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? b : e.globals.stroke.colors[0], color: b }), this.helpers.addListeners(_), e.config.chart.animations.enabled && !e.globals.dataChanged) { var k = 1;
                                e.globals.resized || (k = e.config.chart.animations.speed), this.animateHeatMap(_, u, o, a, s, k) } if (e.globals.dataChanged) { var S = 1; if (this.dynamicAnim.enabled && e.globals.shouldAnimate) { S = this.dynamicAnim.speed; var A = e.globals.previousPaths[h] && e.globals.previousPaths[h][f] && e.globals.previousPaths[h][f].color;
                                    A || (A = "rgba(255, 255, 255, 0)"), this.animateHeatColor(_, g.isColorHex(A) ? A : g.rgb2hex(A), g.isColorHex(b) ? b : g.rgb2hex(b), S) } } var C = (0, e.config.dataLabels.formatter)(e.globals.series[h][f], { value: e.globals.series[h][f], seriesIndex: h, dataPointIndex: f, w: e }),
                                P = this.helpers.calculateDataLabels({ text: C, x: u + a / 2, y: o + s / 2, i: h, j: f, colorProps: y, series: l });
                            null !== P && c.add(P), u += a }
                        o += s, n.add(c) } var L = e.globals.yAxisScale[0].result.slice();
                    e.config.yaxis[0].reversed ? L.unshift("") : L.push(""), e.globals.yAxisScale[0].result = L; var T = e.globals.gridHeight / e.globals.series.length; return e.config.yaxis[0].labels.offsetY = -T / 2, n } }, { key: "animateHeatMap", value: function(t, e, i, n, a, s) { var o = new m(this.ctx);
                    o.animateRect(t, { x: e + n / 2, y: i + a / 2, width: 0, height: 0 }, { x: e, y: i, width: n, height: a }, s, (function() { o.animationCompleted(t) })) } }, { key: "animateHeatColor", value: function(t, e, i, n) { t.attr({ fill: e }).animate(n).attr({ fill: i }) } }]), t }(),
        St = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "drawYAxisTexts", value: function(t, e, i, n) { var a = this.w,
                        s = a.config.yaxis[0],
                        o = a.globals.yLabelFormatters[0]; return new v(this.ctx).drawText({ x: t + s.labels.offsetX, y: e + s.labels.offsetY, text: o(n, i), textAnchor: "middle", fontSize: s.labels.style.fontSize, fontFamily: s.labels.style.fontFamily, foreColor: Array.isArray(s.labels.style.colors) ? s.labels.style.colors[i] : s.labels.style.colors }) } }]), t }(),
        At = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w; var i = this.w;
                this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== i.globals.stroke.colors ? i.globals.stroke.colors : i.globals.colors, this.defaultSize = Math.min(i.globals.gridWidth, i.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = i.globals.gridWidth / 2, "radialBar" === i.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(i.config.plotOptions.pie.endAngle - i.config.plotOptions.pie.startAngle), this.initialAngle = i.config.plotOptions.pie.startAngle % this.fullAngle, i.globals.radialSize = this.defaultSize / 2.05 - i.config.stroke.width - (i.config.chart.sparkline.enabled ? 0 : i.config.chart.dropShadow.blur), this.donutSize = i.globals.radialSize * parseInt(i.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [] } return s(t, [{ key: "draw", value: function(t) { var e = this,
                        i = this.w,
                        n = new v(this.ctx); if (this.ret = n.group({ class: "apexcharts-pie" }), i.globals.noData) return this.ret; for (var a = 0, s = 0; s < t.length; s++) a += g.negToZero(t[s]); var o = [],
                        r = n.group();
                    0 === a && (a = 1e-5), t.forEach((function(t) { e.maxY = Math.max(e.maxY, t) })), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), "back" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret); for (var l = 0; l < t.length; l++) { var h = this.fullAngle * g.negToZero(t[l]) / a;
                        o.push(h), "polarArea" === this.chartType ? (o[l] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[l] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize) } if (i.globals.dataChanged) { for (var c, d = 0, u = 0; u < i.globals.previousPaths.length; u++) d += g.negToZero(i.globals.previousPaths[u]); for (var p = 0; p < i.globals.previousPaths.length; p++) c = this.fullAngle * g.negToZero(i.globals.previousPaths[p]) / d, this.prevSectorAngleArr.push(c) }
                    this.donutSize < 0 && (this.donutSize = 0); var f = i.config.plotOptions.pie.customScale,
                        m = i.globals.gridWidth / 2,
                        x = i.globals.gridHeight / 2,
                        b = m - i.globals.gridWidth / 2 * f,
                        y = x - i.globals.gridHeight / 2 * f; if ("donut" === this.chartType) { var w = n.drawCircle(this.donutSize);
                        w.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent" }), r.add(w) } var _ = this.drawArcs(o, t); if (this.sliceLabels.forEach((function(t) { _.add(t) })), r.attr({ transform: "translate(".concat(b, ", ").concat(y, ") scale(").concat(f, ")") }), r.add(_), this.ret.add(r), this.donutDataLabels.show) { var k = this.renderInnerDataLabels(this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show, translateX: b, translateY: y });
                        this.ret.add(k) } return "front" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret), this.ret } }, { key: "drawArcs", value: function(t, e) { var i = this.w,
                        n = new x(this.ctx),
                        a = new v(this.ctx),
                        s = new O(this.ctx),
                        o = a.group({ class: "apexcharts-slices" }),
                        r = this.initialAngle,
                        l = this.initialAngle,
                        h = this.initialAngle,
                        c = this.initialAngle;
                    this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0; for (var d = 0; d < t.length; d++) { var u = a.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: g.escapeString(i.globals.seriesNames[d]), rel: d + 1, "data:realIndex": d });
                        o.add(u), l = c, h = (r = h) + t[d], c = l + this.prevSectorAngleArr[d]; var p = h < r ? this.fullAngle + h - r : h - r,
                            f = s.fillPath({ seriesNumber: d, size: this.sliceSizes[d], value: e[d] }),
                            m = this.getChangedPath(l, c),
                            b = a.drawPath({ d: m, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d] : this.lineColorArr, strokeWidth: 0, fill: f, fillOpacity: i.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d) }); if (b.attr({ index: 0, j: d }), n.setSelectionFilter(b, 0, d), i.config.chart.dropShadow.enabled) { var y = i.config.chart.dropShadow;
                            n.dropShadow(b, y, d) }
                        this.addListeners(b, this.donutDataLabels), v.setAttrs(b.node, { "data:angle": p, "data:startAngle": r, "data:strokeWidth": this.strokeWidth, "data:value": e[d] }); var w = { x: 0, y: 0 }; "pie" === this.chartType || "polarArea" === this.chartType ? w = g.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (r + p / 2) % this.fullAngle) : "donut" === this.chartType && (w = g.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (r + p / 2) % this.fullAngle)), u.add(b); var _ = 0; if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (0 == (_ = p / this.fullAngle * i.config.chart.animations.speed) && (_ = 1), this.animDur = _ + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(b, { size: this.sliceSizes[d], endAngle: h, startAngle: r, prevStartAngle: l, prevEndAngle: c, animateStartingPos: !0, i: d, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(b, { size: this.sliceSizes[d], endAngle: h, startAngle: r, i: d, totalItems: t.length - 1, animBeginArr: this.animBeginArr, dur: _ }), i.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && b.click(this.pieClicked.bind(this, d)), void 0 !== i.globals.selectedDataPoints[0] && i.globals.selectedDataPoints[0].indexOf(d) > -1 && this.pieClicked(d), i.config.dataLabels.enabled) { var k = w.x,
                                S = w.y,
                                A = 100 * p / this.fullAngle + "%"; if (0 !== p && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[d]) { var C = i.config.dataLabels.formatter;
                                void 0 !== C && (A = C(i.globals.seriesPercent[d][0], { seriesIndex: d, w: i })); var P = i.globals.dataLabels.style.colors[d],
                                    L = a.group({ class: "apexcharts-datalabels" }),
                                    T = a.drawText({ x: k, y: S, text: A, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, fontWeight: i.config.dataLabels.style.fontWeight, foreColor: P }); if (L.add(T), i.config.dataLabels.dropShadow.enabled) { var M = i.config.dataLabels.dropShadow;
                                    n.dropShadow(T, M) }
                                T.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (T.node.classList.add("apexcharts-pie-label-delay"), T.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(L) } } } return o } }, { key: "addListeners", value: function(t, e) { var i = new v(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e))) } }, { key: "animatePaths", value: function(t, e) { var i = this.w,
                        n = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle,
                        a = n,
                        s = e.startAngle,
                        o = e.startAngle;
                    void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (s = e.prevEndAngle, a = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (n + o > this.fullAngle ? e.endAngle = e.endAngle - (n + o) : n + o < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (n + o)))), n === this.fullAngle && (n = this.fullAngle - .01), this.animateArc(t, s, o, n, a, e) } }, { key: "animateArc", value: function(t, e, i, n, a, s) { var o, r = this,
                        l = this.w,
                        h = new m(this.ctx),
                        c = s.size;
                    (isNaN(e) || isNaN(a)) && (e = i, a = n, s.dur = 0); var d = n,
                        u = i,
                        p = e < i ? this.fullAngle + e - i : e - i;
                    l.globals.dataChanged && s.shouldSetPrevPaths && s.prevEndAngle && (o = r.getPiePath({ me: r, startAngle: s.prevStartAngle, angle: s.prevEndAngle < s.prevStartAngle ? this.fullAngle + s.prevEndAngle - s.prevStartAngle : s.prevEndAngle - s.prevStartAngle, size: c }), t.attr({ d: o })), 0 !== s.dur ? t.animate(s.dur, l.globals.easing, s.animBeginArr[s.i]).afterAll((function() { "pie" !== r.chartType && "donut" !== r.chartType && "polarArea" !== r.chartType || this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": r.strokeWidth }), s.i === l.config.series.length - 1 && h.animationCompleted(t) })).during((function(l) { d = p + (n - p) * l, s.animateStartingPos && (d = a + (n - a) * l, u = e - a + (i - (e - a)) * l), o = r.getPiePath({ me: r, startAngle: u, angle: d, size: c }), t.node.setAttribute("data:pathOrig", o), t.attr({ d: o }) })) : (o = r.getPiePath({ me: r, startAngle: u, angle: n, size: c }), s.isTrack || (l.globals.animationEnded = !0), t.node.setAttribute("data:pathOrig", o), t.attr({ d: o, "stroke-width": r.strokeWidth })) } }, { key: "pieClicked", value: function(t) { var e, i = this.w,
                        n = this,
                        a = n.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0),
                        s = i.globals.dom.Paper.select(".apexcharts-".concat(n.chartType.toLowerCase(), "-slice-").concat(t)).members[0]; if ("true" !== s.attr("data:pieClicked")) { var o = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
                        Array.prototype.forEach.call(o, (function(t) { t.setAttribute("data:pieClicked", "false"); var e = t.getAttribute("data:pathOrig");
                            t.setAttribute("d", e) })), s.attr("data:pieClicked", "true"); var r = parseInt(s.attr("data:startAngle"), 10),
                            l = parseInt(s.attr("data:angle"), 10);
                        e = n.getPiePath({ me: n, startAngle: r, angle: l, size: a }), 360 !== l && s.plot(e) } else { s.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(s.node, this.donutDataLabels); var h = s.attr("data:pathOrig");
                        s.attr({ d: h }) } } }, { key: "getChangedPath", value: function(t, e) { var i = ""; return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: t, angle: e - t, size: this.size })), i } }, { key: "getPiePath", value: function(t) { var e = t.me,
                        i = t.startAngle,
                        n = t.angle,
                        a = t.size,
                        s = i,
                        o = Math.PI * (s - 90) / 180,
                        r = n + i;
                    Math.ceil(r) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (r = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - .01), Math.ceil(r) > this.fullAngle && (r -= this.fullAngle); var l = Math.PI * (r - 90) / 180,
                        h = e.centerX + a * Math.cos(o),
                        c = e.centerY + a * Math.sin(o),
                        d = e.centerX + a * Math.cos(l),
                        u = e.centerY + a * Math.sin(l),
                        p = g.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
                        f = g.polarToCartesian(e.centerX, e.centerY, e.donutSize, s),
                        m = n > 180 ? 1 : 0,
                        x = ["M", h, c, "A", a, a, 0, m, 1, d, u]; return "donut" === e.chartType ? [].concat(x, ["L", p.x, p.y, "A", e.donutSize, e.donutSize, 0, m, 0, f.x, f.y, "L", h, c, "z"]).join(" ") : "pie" === e.chartType || "polarArea" === e.chartType ? [].concat(x, ["L", e.centerX, e.centerY, "L", h, c]).join(" ") : [].concat(x).join(" ") } }, { key: "drawPolarElements", value: function(t) { var e = this.w,
                        i = new V(this.ctx),
                        n = new v(this.ctx),
                        a = new St(this.ctx),
                        s = n.group(),
                        o = n.group(),
                        r = i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0),
                        l = r.result.reverse(),
                        h = r.result.length;
                    this.maxY = r.niceMax; for (var c = e.globals.radialSize, d = c / (h - 1), u = 0; u < h - 1; u++) { var p = n.drawCircle(c); if (p.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e.config.plotOptions.polarArea.rings.strokeWidth, stroke: e.config.plotOptions.polarArea.rings.strokeColor }), e.config.yaxis[0].show) { var f = a.drawYAxisTexts(this.centerX, this.centerY - c + parseInt(e.config.yaxis[0].labels.style.fontSize, 10) / 2, u, l[u]);
                            o.add(f) }
                        s.add(p), c -= d }
                    this.drawSpokes(t), t.add(s), t.add(o) } }, { key: "renderInnerDataLabels", value: function(t, e) { var i = this.w,
                        n = new v(this.ctx),
                        a = n.group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")") }),
                        s = t.total.show;
                    a.node.style.opacity = e.opacity; var o, r, l = e.centerX,
                        h = e.centerY;
                    o = void 0 === t.name.color ? i.globals.colors[0] : t.name.color; var c = t.name.fontSize,
                        d = t.name.fontFamily,
                        u = t.name.fontWeight;
                    r = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color; var p = t.value.formatter,
                        f = "",
                        g = ""; if (s ? (o = t.total.color, c = t.total.fontSize, d = t.total.fontFamily, u = t.total.fontWeight, g = t.total.label, f = t.total.formatter(i)) : 1 === i.globals.series.length && (f = p(i.globals.series[0], i), g = i.globals.seriesNames[0]), g && (g = t.name.formatter(g, t.total.show, i)), t.name.show) { var m = n.drawText({ x: l, y: h + parseFloat(t.name.offsetY), text: g, textAnchor: "middle", foreColor: o, fontSize: c, fontWeight: u, fontFamily: d });
                        m.node.classList.add("apexcharts-datalabel-label"), a.add(m) } if (t.value.show) { var x = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY,
                            b = n.drawText({ x: l, y: h + x, text: f, textAnchor: "middle", foreColor: r, fontWeight: t.value.fontWeight, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily });
                        b.node.classList.add("apexcharts-datalabel-value"), a.add(b) } return a } }, { key: "printInnerLabels", value: function(t, e, i, n) { var a, s = this.w;
                    n ? a = void 0 === t.name.color ? s.globals.colors[parseInt(n.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : s.globals.series.length > 1 && t.total.show && (a = t.total.color); var o = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                        r = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                    i = (0, t.value.formatter)(i, s), n || "function" != typeof t.total.formatter || (i = t.total.formatter(s)); var l = e === t.total.label;
                    e = t.name.formatter(e, l, s), null !== o && (o.textContent = e), null !== r && (r.textContent = i), null !== o && (o.style.fill = a) } }, { key: "printDataLabelsInner", value: function(t, e) { var i = this.w,
                        n = t.getAttribute("data:value"),
                        a = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1];
                    i.globals.series.length > 1 && this.printInnerLabels(e, a, n, t); var s = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                    null !== s && (s.style.opacity = 1) } }, { key: "drawSpokes", value: function(t) { var e = this,
                        i = this.w,
                        n = new v(this.ctx),
                        a = i.config.plotOptions.polarArea.spokes; if (0 !== a.strokeWidth) { for (var s = [], o = 360 / i.globals.series.length, r = 0; r < i.globals.series.length; r++) s.push(g.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle + o * r));
                        s.forEach((function(i, s) { var o = n.drawLine(i.x, i.y, e.centerX, e.centerY, Array.isArray(a.connectorColors) ? a.connectorColors[s] : a.connectorColors);
                            t.add(o) })) } } }, { key: "revertDataLabelsInner", value: function(t, e, i) { var n = this,
                        a = this.w,
                        s = a.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),
                        o = !1,
                        r = a.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),
                        l = function(t) { var i = t.makeSliceOut,
                                a = t.printLabel;
                            Array.prototype.forEach.call(r, (function(t) { "true" === t.getAttribute("data:pieClicked") && (i && (o = !0), a && n.printDataLabelsInner(t, e)) })) }; if (l({ makeSliceOut: !0, printLabel: !1 }), e.total.show && a.globals.series.length > 1) o && !e.total.showAlways ? l({ makeSliceOut: !1, printLabel: !0 }) : this.printInnerLabels(e, e.total.label, e.total.formatter(a));
                    else if (l({ makeSliceOut: !1, printLabel: !0 }), !o)
                        if (a.globals.selectedDataPoints.length && a.globals.series.length > 1)
                            if (a.globals.selectedDataPoints[0].length > 0) { var h = a.globals.selectedDataPoints[0],
                                    c = a.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(h));
                                this.printDataLabelsInner(c, e) } else s && a.globals.selectedDataPoints.length && 0 === a.globals.selectedDataPoints[0].length && (s.style.opacity = 0);
                    else s && a.globals.series.length > 1 && (s.style.opacity = 0) } }]), t }(),
        Ct = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0; var i = this.w;
                this.graphics = new v(this.ctx), this.lineColorArr = void 0 !== i.globals.stroke.colors ? i.globals.stroke.colors : i.globals.colors, this.defaultSize = i.globals.svgHeight < i.globals.svgWidth ? i.globals.gridHeight + 1.5 * i.globals.goldenPadding : i.globals.gridWidth, this.isLog = i.config.yaxis[0].logarithmic, this.coreUtils = new b(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(i.globals.maxY, 0) : i.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : i.globals.minY, this.polygons = i.config.plotOptions.radar.polygons, this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - i.config.chart.dropShadow.blur, i.config.xaxis.labels.show && (this.size = this.size - i.globals.xAxisLabelsWidth / 1.75), void 0 !== i.config.plotOptions.radar.size && (this.size = i.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [] } return s(t, [{ key: "draw", value: function(t) { var i = this,
                        n = this.w,
                        a = new O(this.ctx),
                        s = [],
                        o = new N(this.ctx);
                    t.length && (this.dataPointsLen = t[n.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen; var r = n.globals.gridWidth / 2,
                        l = n.globals.gridHeight / 2,
                        h = r + n.config.plotOptions.radar.offsetX,
                        c = l + n.config.plotOptions.radar.offsetY,
                        d = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(h || 0, ", ").concat(c || 0, ")") }),
                        u = [],
                        p = null,
                        f = null; if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t.forEach((function(t, r) { var l = t.length === n.globals.dataPoints,
                                h = i.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": l, seriesName: g.escapeString(n.globals.seriesNames[r]), rel: r + 1, "data:realIndex": r });
                            i.dataRadiusOfPercent[r] = [], i.dataRadius[r] = [], i.angleArr[r] = [], t.forEach((function(t, e) { var n = Math.abs(i.maxValue - i.minValue);
                                t += Math.abs(i.minValue), i.isLog && (t = i.coreUtils.getLogVal(t, 0)), i.dataRadiusOfPercent[r][e] = t / n, i.dataRadius[r][e] = i.dataRadiusOfPercent[r][e] * i.size, i.angleArr[r][e] = e * i.disAngle })), u = i.getDataPointsPos(i.dataRadius[r], i.angleArr[r]); var c = i.createPaths(u, { x: 0, y: 0 });
                            p = i.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), f = i.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": r }), n.globals.delayedElements.push({ el: p.node, index: r }); var d = { i: r, realIndex: r, animationDelay: r, initialSpeed: n.config.chart.animations.speed, dataChangeSpeed: n.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: n.globals.stroke.colors[r], strokeLineCap: n.config.stroke.lineCap },
                                m = null;
                            n.globals.previousPaths.length > 0 && (m = i.getPreviousPath(r)); for (var v = 0; v < c.linePathsTo.length; v++) { var b = i.graphics.renderPaths(e(e({}, d), {}, { pathFrom: null === m ? c.linePathsFrom[v] : m, pathTo: c.linePathsTo[v], strokeWidth: Array.isArray(i.strokeWidth) ? i.strokeWidth[r] : i.strokeWidth, fill: "none", drawShadow: !1 }));
                                h.add(b); var y = a.fillPath({ seriesNumber: r }),
                                    w = i.graphics.renderPaths(e(e({}, d), {}, { pathFrom: null === m ? c.areaPathsFrom[v] : m, pathTo: c.areaPathsTo[v], strokeWidth: 0, fill: y, drawShadow: !1 })); if (n.config.chart.dropShadow.enabled) { var _ = new x(i.ctx),
                                        k = n.config.chart.dropShadow;
                                    _.dropShadow(w, Object.assign({}, k, { noUserSpaceOnUse: !0 }), r) }
                                h.add(w) }
                            t.forEach((function(t, a) { var s = new D(i.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: r, dataPointIndex: a }),
                                    l = i.graphics.drawMarker(u[a].x, u[a].y, s);
                                l.attr("rel", a), l.attr("j", a), l.attr("index", r), l.node.setAttribute("default-marker-size", s.pSize); var c = i.graphics.group({ class: "apexcharts-series-markers" });
                                c && c.add(l), p.add(c), h.add(p); var d = n.config.dataLabels; if (d.enabled) { var g = d.formatter(n.globals.series[r][a], { seriesIndex: r, dataPointIndex: a, w: n });
                                    o.plotDataLabelsText({ x: u[a].x, y: u[a].y, text: g, textAnchor: "middle", i: r, j: r, parent: f, offsetCorrection: !1, dataLabelsConfig: e({}, d) }) }
                                h.add(f) })), s.push(h) })), this.drawPolygons({ parent: d }), n.config.xaxis.labels.show) { var m = this.drawXAxisTexts();
                        d.add(m) } return s.forEach((function(t) { d.add(t) })), d.add(this.yaxisLabels), d } }, { key: "drawPolygons", value: function(t) { for (var e = this, i = this.w, n = t.parent, a = new St(this.ctx), s = i.globals.yAxisScale[0].result.reverse(), o = s.length, r = [], l = this.size / (o - 1), h = 0; h < o; h++) r[h] = l * h;
                    r.reverse(); var c = [],
                        d = [];
                    r.forEach((function(t, i) { var n = g.getPolygonPos(t, e.dataPointsLen),
                            a = "";
                        n.forEach((function(t, n) { if (0 === i) { var s = e.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(e.polygons.connectorColors) ? e.polygons.connectorColors[n] : e.polygons.connectorColors);
                                d.push(s) }
                            0 === n && e.yaxisLabelsTextsPos.push({ x: t.x, y: t.y }), a += t.x + "," + t.y + " " })), c.push(a) })), c.forEach((function(t, a) { var s = e.polygons.strokeColors,
                            o = e.polygons.strokeWidth,
                            r = e.graphics.drawPolygon(t, Array.isArray(s) ? s[a] : s, Array.isArray(o) ? o[a] : o, i.globals.radarPolygons.fill.colors[a]);
                        n.add(r) })), d.forEach((function(t) { n.add(t) })), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((function(t, i) { var n = a.drawYAxisTexts(t.x, t.y, i, s[i]);
                        e.yaxisLabels.add(n) })) } }, { key: "drawXAxisTexts", value: function() { var t = this,
                        i = this.w,
                        n = i.config.xaxis.labels,
                        a = this.graphics.group({ class: "apexcharts-xaxis" }),
                        s = g.getPolygonPos(this.size, this.dataPointsLen); return i.globals.labels.forEach((function(o, r) { var l = i.config.xaxis.labels.formatter,
                            h = new N(t.ctx); if (s[r]) { var c = t.getTextPos(s[r], t.size),
                                d = l(o, { seriesIndex: -1, dataPointIndex: r, w: i });
                            h.plotDataLabelsText({ x: c.newX, y: c.newY, text: d, textAnchor: c.textAnchor, i: r, j: r, parent: a, color: Array.isArray(n.style.colors) && n.style.colors[r] ? n.style.colors[r] : "#a8a8a8", dataLabelsConfig: e({ textAnchor: c.textAnchor, dropShadow: { enabled: !1 } }, n), offsetCorrection: !1 }) } })), a } }, { key: "createPaths", value: function(t, e) { var i = this,
                        n = [],
                        a = [],
                        s = [],
                        o = []; if (t.length) { a = [this.graphics.move(e.x, e.y)], o = [this.graphics.move(e.x, e.y)]; var r = this.graphics.move(t[0].x, t[0].y),
                            l = this.graphics.move(t[0].x, t[0].y);
                        t.forEach((function(e, n) { r += i.graphics.line(e.x, e.y), l += i.graphics.line(e.x, e.y), n === t.length - 1 && (r += "Z", l += "Z") })), n.push(r), s.push(l) } return { linePathsFrom: a, linePathsTo: n, areaPathsFrom: o, areaPathsTo: s } } }, { key: "getTextPos", value: function(t, e) { var i = "middle",
                        n = t.x,
                        a = t.y; return Math.abs(t.x) >= 10 ? t.x > 0 ? (i = "start", n += 10) : t.x < 0 && (i = "end", n -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? a -= 10 : t.y > 0 && (a += 10)), { textAnchor: i, newX: n, newY: a } } }, { key: "getPreviousPath", value: function(t) { for (var e = this.w, i = null, n = 0; n < e.globals.previousPaths.length; n++) { var a = e.globals.previousPaths[n];
                        a.paths.length > 0 && parseInt(a.realIndex, 10) === parseInt(t, 10) && void 0 !== e.globals.previousPaths[n].paths[0] && (i = e.globals.previousPaths[n].paths[0].d) } return i } }, { key: "getDataPointsPos", value: function(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
                    t = t || [], e = e || []; for (var n = [], a = 0; a < i; a++) { var s = {};
                        s.x = t[a] * Math.sin(e[a]), s.y = -t[a] * Math.cos(e[a]), n.push(s) } return n } }]), t }(),
        Pt = function(t) { r(i, t); var e = d(i);

            function i(t) { var a;
                n(this, i), (a = e.call(this, t)).ctx = t, a.w = t.w, a.animBeginArr = [0], a.animDur = 0; var s = a.w; return a.startAngle = s.config.plotOptions.radialBar.startAngle, a.endAngle = s.config.plotOptions.radialBar.endAngle, a.totalAngle = Math.abs(s.config.plotOptions.radialBar.endAngle - s.config.plotOptions.radialBar.startAngle), a.trackStartAngle = s.config.plotOptions.radialBar.track.startAngle, a.trackEndAngle = s.config.plotOptions.radialBar.track.endAngle, a.donutDataLabels = a.w.config.plotOptions.radialBar.dataLabels, a.radialDataLabels = a.donutDataLabels, a.trackStartAngle || (a.trackStartAngle = a.startAngle), a.trackEndAngle || (a.trackEndAngle = a.endAngle), 360 === a.endAngle && (a.endAngle = 359.99), a.margin = parseInt(s.config.plotOptions.radialBar.track.margin, 10), a } return s(i, [{ key: "draw", value: function(t) { var e = this.w,
                        i = new v(this.ctx),
                        n = i.group({ class: "apexcharts-radialbar" }); if (e.globals.noData) return n; var a = i.group(),
                        s = this.defaultSize / 2,
                        o = e.globals.gridWidth / 2,
                        r = this.defaultSize / 2.05;
                    e.config.chart.sparkline.enabled || (r = r - e.config.stroke.width - e.config.chart.dropShadow.blur); var l = e.globals.fill.colors; if (e.config.plotOptions.radialBar.track.show) { var h = this.drawTracks({ size: r, centerX: o, centerY: s, colorArr: l, series: t });
                        a.add(h) } var c = this.drawArcs({ size: r, centerX: o, centerY: s, colorArr: l, series: t }),
                        d = 360;
                    e.config.plotOptions.radialBar.startAngle < 0 && (d = this.totalAngle); var u = (360 - d) / 360; if (e.globals.radialSize = r - r * u, this.radialDataLabels.value.show) { var p = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
                        e.globals.radialSize += p * u } return a.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), n.add(a), n } }, { key: "drawTracks", value: function(t) { var e = this.w,
                        i = new v(this.ctx),
                        n = i.group({ class: "apexcharts-tracks" }),
                        a = new x(this.ctx),
                        s = new O(this.ctx),
                        o = this.getStrokeWidth(t);
                    t.size = t.size - o / 2; for (var r = 0; r < t.series.length; r++) { var l = i.group({ class: "apexcharts-radialbar-track apexcharts-track" });
                        n.add(l), l.attr({ rel: r + 1 }), t.size = t.size - o - this.margin; var h = e.config.plotOptions.radialBar.track,
                            c = s.fillPath({ seriesNumber: 0, size: t.size, fillColors: Array.isArray(h.background) ? h.background[r] : h.background, solid: !0 }),
                            d = this.trackStartAngle,
                            u = this.trackEndAngle;
                        Math.abs(u) + Math.abs(d) >= 360 && (u = 360 - Math.abs(this.startAngle) - .1); var p = i.drawPath({ d: "", stroke: c, strokeWidth: o * parseInt(h.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h.opacity, classes: "apexcharts-radialbar-area" }); if (h.dropShadow.enabled) { var f = h.dropShadow;
                            a.dropShadow(p, f) }
                        l.add(p), p.attr("id", "apexcharts-radialbarTrack-" + r), this.animatePaths(p, { centerX: t.centerX, centerY: t.centerY, endAngle: u, startAngle: d, size: t.size, i: r, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: e.globals.easing }) } return n } }, { key: "drawArcs", value: function(t) { var e = this.w,
                        i = new v(this.ctx),
                        n = new O(this.ctx),
                        a = new x(this.ctx),
                        s = i.group(),
                        o = this.getStrokeWidth(t);
                    t.size = t.size - o / 2; var r = e.config.plotOptions.radialBar.hollow.background,
                        l = t.size - o * t.series.length - this.margin * t.series.length - o * parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2,
                        h = l - e.config.plotOptions.radialBar.hollow.margin;
                    void 0 !== e.config.plotOptions.radialBar.hollow.image && (r = this.drawHollowImage(t, s, l, r)); var c = this.drawHollow({ size: h, centerX: t.centerX, centerY: t.centerY, fill: r || "transparent" }); if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) { var d = e.config.plotOptions.radialBar.hollow.dropShadow;
                        a.dropShadow(c, d) } var u = 1;!this.radialDataLabels.total.show && e.globals.series.length > 1 && (u = 0); var p = null;
                    this.radialDataLabels.show && (p = this.renderInnerDataLabels(this.radialDataLabels, { hollowSize: l, centerX: t.centerX, centerY: t.centerY, opacity: u })), "back" === e.config.plotOptions.radialBar.hollow.position && (s.add(c), p && s.add(p)); var f = !1;
                    e.config.plotOptions.radialBar.inverseOrder && (f = !0); for (var m = f ? t.series.length - 1 : 0; f ? m >= 0 : m < t.series.length; f ? m-- : m++) { var b = i.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: g.escapeString(e.globals.seriesNames[m]) });
                        s.add(b), b.attr({ rel: m + 1, "data:realIndex": m }), this.ctx.series.addCollapsedClassToSeries(b, m), t.size = t.size - o - this.margin; var y = n.fillPath({ seriesNumber: m, size: t.size, value: t.series[m] }),
                            w = this.startAngle,
                            _ = void 0,
                            k = g.negToZero(t.series[m] > 100 ? 100 : t.series[m]) / 100,
                            S = Math.round(this.totalAngle * k) + this.startAngle,
                            A = void 0;
                        e.globals.dataChanged && (_ = this.startAngle, A = Math.round(this.totalAngle * g.negToZero(e.globals.previousPaths[m]) / 100) + _), Math.abs(S) + Math.abs(w) >= 360 && (S -= .01), Math.abs(A) + Math.abs(_) >= 360 && (A -= .01); var C = S - w,
                            P = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[m] : e.config.stroke.dashArray,
                            L = i.drawPath({ d: "", stroke: y, strokeWidth: o, fill: "none", fillOpacity: e.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + m, strokeDashArray: P }); if (v.setAttrs(L.node, { "data:angle": C, "data:value": t.series[m] }), e.config.chart.dropShadow.enabled) { var T = e.config.chart.dropShadow;
                            a.dropShadow(L, T, m) }
                        a.setSelectionFilter(L, 0, m), this.addListeners(L, this.radialDataLabels), b.add(L), L.attr({ index: 0, j: m }); var M = 0;!this.initialAnim || e.globals.resized || e.globals.dataChanged || (M = e.config.chart.animations.speed), e.globals.dataChanged && (M = e.config.chart.animations.dynamicAnimation.speed), this.animDur = M / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(L, { centerX: t.centerX, centerY: t.centerY, endAngle: S, startAngle: w, prevEndAngle: A, prevStartAngle: _, size: t.size, i: m, totalItems: 2, animBeginArr: this.animBeginArr, dur: M, shouldSetPrevPaths: !0, easing: e.globals.easing }) } return { g: s, elHollow: c, dataLabels: p } } }, { key: "drawHollow", value: function(t) { var e = new v(this.ctx).drawCircle(2 * t.size); return e.attr({ class: "apexcharts-radialbar-hollow", cx: t.centerX, cy: t.centerY, r: t.size, fill: t.fill }), e } }, { key: "drawHollowImage", value: function(t, e, i, n) { var a = this.w,
                        s = new O(this.ctx),
                        o = g.randomId(),
                        r = a.config.plotOptions.radialBar.hollow.image; if (a.config.plotOptions.radialBar.hollow.imageClipped) s.clippedImgArea({ width: i, height: i, image: r, patternID: "pattern".concat(a.globals.cuid).concat(o) }), n = "url(#pattern".concat(a.globals.cuid).concat(o, ")");
                    else { var l = a.config.plotOptions.radialBar.hollow.imageWidth,
                            h = a.config.plotOptions.radialBar.hollow.imageHeight; if (void 0 === l && void 0 === h) { var c = a.globals.dom.Paper.image(r).loaded((function(e) { this.move(t.centerX - e.width / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - e.height / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetY) }));
                            e.add(c) } else { var d = a.globals.dom.Paper.image(r).loaded((function(e) { this.move(t.centerX - l / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - h / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h) }));
                            e.add(d) } } return n } }, { key: "getStrokeWidth", value: function(t) { var e = this.w; return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t.series.length + 1) - this.margin } }]), i }(At),
        Lt = function(t) { r(a, t); var i = d(a);

            function a() { return n(this, a), i.apply(this, arguments) } return s(a, [{ key: "draw", value: function(t, i) { var n = this.w,
                        a = new v(this.ctx);
                    this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = n.globals.seriesRangeStart, this.seriesRangeEnd = n.globals.seriesRangeEnd, this.barHelpers.initVariables(t); for (var s = a.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), o = 0; o < t.length; o++) { var r, l, h, c = void 0,
                            d = void 0,
                            u = void 0,
                            p = n.globals.comboCharts ? i[o] : o,
                            f = a.group({ class: "apexcharts-series", seriesName: g.escapeString(n.globals.seriesNames[p]), rel: o + 1, "data:realIndex": p });
                        this.ctx.series.addCollapsedClassToSeries(f, p), t[o].length > 0 && (this.visibleI = this.visibleI + 1); var m = 0,
                            x = 0;
                        this.yRatio.length > 1 && (this.yaxisIndex = p); var b = this.barHelpers.initialPositions();
                        d = b.y, h = b.zeroW, c = b.x, x = b.barWidth, r = b.xDivision, l = b.zeroH; for (var y = a.group({ class: "apexcharts-datalabels", "data:realIndex": p }), w = a.group({ class: "apexcharts-rangebar-goals-markers", style: "pointer-events: none" }), _ = 0; _ < n.globals.dataPoints; _++) { var k = this.barHelpers.getStrokeWidth(o, _, p),
                                S = this.seriesRangeStart[o][_],
                                A = this.seriesRangeEnd[o][_],
                                C = null,
                                P = null,
                                L = { x: c, y: d, strokeWidth: k, elSeries: f }; if (u = b.yDivision, m = b.barHeight, this.isHorizontal) { P = d + m * this.visibleI; var T = this.seriesLen;
                                n.config.plotOptions.bar.rangeBarGroupRows && (T = 1); var M = (u - m * T) / 2; if (void 0 === n.config.series[o].data[_]) break; if (n.config.series[o].data[_].x) { var E = this.detectOverlappingBars({ i: o, j: _, barYPosition: P, srty: M, barHeight: m, yDivision: u, initPositions: b });
                                    m = E.barHeight, P = E.barYPosition }
                                x = (C = this.drawRangeBarPaths(e({ indexes: { i: o, j: _, realIndex: p }, barHeight: m, barYPosition: P, zeroW: h, yDivision: u, y1: S, y2: A }, L))).barWidth } else m = (C = this.drawRangeColumnPaths(e({ indexes: { i: o, j: _, realIndex: p }, zeroH: l, barWidth: x, xDivision: r }, L))).barHeight; var z = this.barHelpers.drawGoalLine({ barXPosition: C.barXPosition, barYPosition: P, goalX: C.goalX, goalY: C.goalY, barHeight: m, barWidth: x });
                            z && w.add(z), d = C.y, c = C.x; var I = this.barHelpers.getPathFillColor(t, o, _, p),
                                O = n.globals.stroke.colors[p];
                            this.renderSeries({ realIndex: p, pathFill: I, lineFill: O, j: _, i: o, x: c, y: d, y1: S, y2: A, pathFrom: C.pathFrom, pathTo: C.pathTo, strokeWidth: k, elSeries: f, series: t, barHeight: m, barYPosition: P, barWidth: x, elDataLabelsWrap: y, elGoalsMarkers: w, visibleSeries: this.visibleI, type: "rangebar" }) }
                        s.add(f) } return s } }, { key: "detectOverlappingBars", value: function(t) { var e = t.i,
                        i = t.j,
                        n = t.barYPosition,
                        a = t.srty,
                        s = t.barHeight,
                        o = t.yDivision,
                        r = t.initPositions,
                        l = this.w,
                        h = [],
                        c = l.config.series[e].data[i].rangeName,
                        d = l.config.series[e].data[i].x,
                        u = l.globals.labels.indexOf(d),
                        p = l.globals.seriesRange[e].findIndex((function(t) { return t.x === d && t.overlaps.length > 0 })); return n = l.config.plotOptions.bar.rangeBarGroupRows ? a + o * u : a + s * this.visibleI + o * u, p > -1 && !l.config.plotOptions.bar.rangeBarOverlap && (h = l.globals.seriesRange[e][p].overlaps).indexOf(c) > -1 && (n = (s = r.barHeight / h.length) * this.visibleI + o * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + s * (this.visibleI + h.indexOf(c)) + o * u), { barYPosition: n, barHeight: s } } }, { key: "drawRangeColumnPaths", value: function(t) { var e = t.indexes,
                        i = t.x;
                    t.strokeWidth; var n = t.xDivision,
                        a = t.barWidth,
                        s = t.zeroH,
                        o = this.w,
                        r = e.i,
                        l = e.j,
                        h = this.yRatio[this.yaxisIndex],
                        c = e.realIndex,
                        d = this.getRangeValue(c, l),
                        u = Math.min(d.start, d.end),
                        p = Math.max(d.start, d.end);
                    o.globals.isXNumeric && (i = (o.globals.seriesX[r][l] - o.globals.minX) / this.xRatio - a / 2); var f = i + a * this.visibleI;
                    void 0 === this.series[r][l] || null === this.series[r][l] ? u = s : (u = s - u / h, p = s - p / h); var g = Math.abs(p - u),
                        m = this.barHelpers.getColumnPaths({ barXPosition: f, barWidth: a, y1: u, y2: p, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: e.realIndex, i: c, j: l, w: o }); return o.globals.isXNumeric || (i += n), { pathTo: m.pathTo, pathFrom: m.pathFrom, barHeight: g, x: i, y: p, goalY: this.barHelpers.getGoalValues("y", null, s, r, l), barXPosition: f } } }, { key: "drawRangeBarPaths", value: function(t) { var e = t.indexes,
                        i = t.y,
                        n = t.y1,
                        a = t.y2,
                        s = t.yDivision,
                        o = t.barHeight,
                        r = t.barYPosition,
                        l = t.zeroW,
                        h = this.w,
                        c = l + n / this.invertedYRatio,
                        d = l + a / this.invertedYRatio,
                        u = Math.abs(d - c),
                        p = this.barHelpers.getBarpaths({ barYPosition: r, barHeight: o, x1: c, x2: d, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: e.realIndex, realIndex: e.realIndex, j: e.j, w: h }); return h.globals.isXNumeric || (i += s), { pathTo: p.pathTo, pathFrom: p.pathFrom, barWidth: u, x: d, goalX: this.barHelpers.getGoalValues("x", l, null, e.realIndex, e.j), y: i } } }, { key: "getRangeValue", value: function(t, e) { var i = this.w; return { start: i.globals.seriesRangeStart[t][e], end: i.globals.seriesRangeEnd[t][e] } } }]), a }(bt),
        Tt = function() {
            function t(e) { n(this, t), this.w = e.w, this.lineCtx = e } return s(t, [{ key: "sameValueSeriesFix", value: function(t, e) { var i = this.w; if (("gradient" === i.config.fill.type || "gradient" === i.config.fill.type[t]) && new b(this.lineCtx.ctx, i).seriesHaveSameValues(t)) { var n = e[t].slice();
                        n[n.length - 1] = n[n.length - 1] + 1e-6, e[t] = n } return e } }, { key: "calculatePoints", value: function(t) { var e = t.series,
                        i = t.realIndex,
                        n = t.x,
                        a = t.y,
                        s = t.i,
                        o = t.j,
                        r = t.prevY,
                        l = this.w,
                        h = [],
                        c = []; if (0 === o) { var d = this.lineCtx.categoryAxisCorrection + l.config.markers.offsetX;
                        l.globals.isXNumeric && (d = (l.globals.seriesX[i][0] - l.globals.minX) / this.lineCtx.xRatio + l.config.markers.offsetX), h.push(d), c.push(g.isNumber(e[s][0]) ? r + l.config.markers.offsetY : null), h.push(n + l.config.markers.offsetX), c.push(g.isNumber(e[s][o + 1]) ? a + l.config.markers.offsetY : null) } else h.push(n + l.config.markers.offsetX), c.push(g.isNumber(e[s][o + 1]) ? a + l.config.markers.offsetY : null); return { x: h, y: c } } }, { key: "checkPreviousPaths", value: function(t) { for (var e = t.pathFromLine, i = t.pathFromArea, n = t.realIndex, a = this.w, s = 0; s < a.globals.previousPaths.length; s++) { var o = a.globals.previousPaths[s];
                        ("line" === o.type || "area" === o.type) && o.paths.length > 0 && parseInt(o.realIndex, 10) === parseInt(n, 10) && ("line" === o.type ? (this.lineCtx.appendPathFrom = !1, e = a.globals.previousPaths[s].paths[0].d) : "area" === o.type && (this.lineCtx.appendPathFrom = !1, i = a.globals.previousPaths[s].paths[0].d, a.config.stroke.show && a.globals.previousPaths[s].paths[1] && (e = a.globals.previousPaths[s].paths[1].d))) } return { pathFromLine: e, pathFromArea: i } } }, { key: "determineFirstPrevY", value: function(t) { var e, i = t.i,
                        n = t.series,
                        a = t.prevY,
                        s = t.lineYPosition,
                        o = this.w; if (void 0 !== (null === (e = n[i]) || void 0 === e ? void 0 : e[0])) a = (s = o.config.chart.stacked && i > 0 ? this.lineCtx.prevSeriesY[i - 1][0] : this.lineCtx.zeroY) - n[i][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? n[i][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0);
                    else if (o.config.chart.stacked && i > 0 && void 0 === n[i][0])
                        for (var r = i - 1; r >= 0; r--)
                            if (null !== n[r][0] && void 0 !== n[r][0]) { a = s = this.lineCtx.prevSeriesY[r][0]; break }
                    return { prevY: a, lineYPosition: s } } }]), t }(),
        Mt = function() {
            function t(e, i, a) { n(this, t), this.ctx = e, this.w = e.w, this.xyRatios = i, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || a, this.scatter = new R(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Tt(this), this.markers = new D(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0 } return s(t, [{ key: "draw", value: function(t, i, n, a) { var s = this.w,
                        o = new v(this.ctx),
                        r = s.globals.comboCharts ? i : s.config.chart.type,
                        l = o.group({ class: "apexcharts-".concat(r, "-series apexcharts-plot-series") }),
                        h = new b(this.ctx, s);
                    this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = h.getLogSeries(t), this.yRatio = h.getLogYRatios(this.yRatio); for (var c = [], d = 0; d < t.length; d++) { t = this.lineHelpers.sameValueSeriesFix(d, t); var u = s.globals.comboCharts ? n[d] : d;
                        this._initSerieVariables(t, d, u); var p = [],
                            f = [],
                            g = s.globals.padHorizontal + this.categoryAxisCorrection;
                        this.ctx.series.addCollapsedClassToSeries(this.elSeries, u), s.globals.isXNumeric && s.globals.seriesX.length > 0 && (g = (s.globals.seriesX[u][0] - s.globals.minX) / this.xRatio), f.push(g); var m, x = g,
                            y = void 0,
                            w = x,
                            _ = this.zeroY,
                            k = this.zeroY;
                        _ = this.lineHelpers.determineFirstPrevY({ i: d, series: t, prevY: _, lineYPosition: 0 }).prevY, p.push(_), m = _, "rangeArea" === r && (y = k = this.lineHelpers.determineFirstPrevY({ i: d, series: a, prevY: k, lineYPosition: 0 }).prevY); var S = { type: r, series: t, realIndex: u, i: d, x: g, y: 1, pX: x, pY: m, pathsFrom: this._calculatePathsFrom({ type: r, series: t, i: d, realIndex: u, prevX: w, prevY: _, prevY2: k }), linePaths: [], areaPaths: [], seriesIndex: n, lineYPosition: 0, xArrj: f, yArrj: p, seriesRangeEnd: a },
                            A = this._iterateOverDataPoints(e(e({}, S), {}, { iterations: "rangeArea" === r ? t[d].length - 1 : void 0, isRangeStart: !0 })); if ("rangeArea" === r) { var C = this._calculatePathsFrom({ series: a, i: d, realIndex: u, prevX: w, prevY: k }),
                                P = this._iterateOverDataPoints(e(e({}, S), {}, { series: a, pY: y, pathsFrom: C, iterations: a[d].length - 1, isRangeStart: !1 }));
                            A.linePaths[0] = P.linePath + A.linePath, A.pathFromLine = P.pathFromLine + A.pathFromLine }
                        this._handlePaths({ type: r, realIndex: u, i: d, paths: A }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), c.push(this.elSeries) } if (s.config.chart.stacked)
                        for (var L = c.length; L > 0; L--) l.add(c[L - 1]);
                    else
                        for (var T = 0; T < c.length; T++) l.add(c[T]); return l } }, { key: "_initSerieVariables", value: function(t, e, i) { var n = this.w,
                        a = new v(this.ctx);
                    this.xDivision = n.globals.gridWidth / (n.globals.dataPoints - ("on" === n.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(n.config.stroke.width) ? n.config.stroke.width[i] : n.config.stroke.width, this.yRatio.length > 1 && (this.yaxisIndex = i), this.isReversed = n.config.yaxis[this.yaxisIndex] && n.config.yaxis[this.yaxisIndex].reversed, this.zeroY = n.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? n.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > n.globals.gridHeight || "end" === n.config.plotOptions.area.fillTo) && (this.areaBottomY = n.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = a.group({ class: "apexcharts-series", seriesName: g.escapeString(n.globals.seriesNames[i]) }), this.elPointsMain = a.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i }), this.elDataLabelsWrap = a.group({ class: "apexcharts-datalabels", "data:realIndex": i }); var s = t[e].length === n.globals.dataPoints;
                    this.elSeries.attr({ "data:longestSeries": s, rel: e + 1, "data:realIndex": i }), this.appendPathFrom = !0 } }, { key: "_calculatePathsFrom", value: function(t) { var e, i, n, a, s = t.type,
                        o = t.series,
                        r = t.i,
                        l = t.realIndex,
                        h = t.prevX,
                        c = t.prevY,
                        d = t.prevY2,
                        u = this.w,
                        p = new v(this.ctx); if (null === o[r][0]) { for (var f = 0; f < o[r].length; f++)
                            if (null !== o[r][f]) { h = this.xDivision * f, c = this.zeroY - o[r][f] / this.yRatio[this.yaxisIndex], e = p.move(h, c), i = p.move(h, this.areaBottomY); break } } else e = p.move(h, c), "rangeArea" === s && (e = p.move(h, d) + p.line(h, c)), i = p.move(h, this.areaBottomY) + p.line(h, c); if (n = p.move(-1, this.zeroY) + p.line(-1, this.zeroY), a = p.move(-1, this.zeroY) + p.line(-1, this.zeroY), u.globals.previousPaths.length > 0) { var g = this.lineHelpers.checkPreviousPaths({ pathFromLine: n, pathFromArea: a, realIndex: l });
                        n = g.pathFromLine, a = g.pathFromArea } return { prevX: h, prevY: c, linePath: e, areaPath: i, pathFromLine: n, pathFromArea: a } } }, { key: "_handlePaths", value: function(t) { var i = t.type,
                        n = t.realIndex,
                        a = t.i,
                        s = t.paths,
                        o = this.w,
                        r = new v(this.ctx),
                        l = new O(this.ctx);
                    this.prevSeriesY.push(s.yArrj), o.globals.seriesXvalues[n] = s.xArrj, o.globals.seriesYvalues[n] = s.yArrj; var h = o.config.forecastDataPoints; if (h.count > 0 && "rangeArea" !== i) { var c = o.globals.seriesXvalues[n][o.globals.seriesXvalues[n].length - h.count - 1],
                            d = r.drawRect(c, 0, o.globals.gridWidth, o.globals.gridHeight, 0);
                        o.globals.dom.elForecastMask.appendChild(d.node); var u = r.drawRect(0, 0, c, o.globals.gridHeight, 0);
                        o.globals.dom.elNonForecastMask.appendChild(u.node) }
                    this.pointsChart || o.globals.delayedElements.push({ el: this.elPointsMain.node, index: n }); var p = { i: a, realIndex: n, animationDelay: a, initialSpeed: o.config.chart.animations.speed, dataChangeSpeed: o.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(i) }; if ("area" === i)
                        for (var f = l.fillPath({ seriesNumber: n }), g = 0; g < s.areaPaths.length; g++) { var m = r.renderPaths(e(e({}, p), {}, { pathFrom: s.pathFromArea, pathTo: s.areaPaths[g], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: f }));
                            this.elSeries.add(m) }
                    if (o.config.stroke.show && !this.pointsChart) { var x = null; if ("line" === i) x = l.fillPath({ seriesNumber: n, i: a });
                        else if ("solid" === o.config.stroke.fill.type) x = o.globals.stroke.colors[n];
                        else { var b = o.config.fill;
                            o.config.fill = o.config.stroke.fill, x = l.fillPath({ seriesNumber: n, i: a }), o.config.fill = b } for (var y = 0; y < s.linePaths.length; y++) { var w = x; "rangeArea" === i && (w = l.fillPath({ seriesNumber: n })); var _ = e(e({}, p), {}, { pathFrom: s.pathFromLine, pathTo: s.linePaths[y], stroke: x, strokeWidth: this.strokeWidth, strokeLineCap: o.config.stroke.lineCap, fill: "rangeArea" === i ? w : "none" }),
                                k = r.renderPaths(_); if (this.elSeries.add(k), k.attr("fill-rule", "evenodd"), h.count > 0 && "rangeArea" !== i) { var S = r.renderPaths(_);
                                S.node.setAttribute("stroke-dasharray", h.dashArray), h.strokeWidth && S.node.setAttribute("stroke-width", h.strokeWidth), this.elSeries.add(S), S.attr("clip-path", "url(#forecastMask".concat(o.globals.cuid, ")")), k.attr("clip-path", "url(#nonForecastMask".concat(o.globals.cuid, ")")) } } } } }, { key: "_iterateOverDataPoints", value: function(t) { var e = t.type,
                        i = t.series,
                        n = t.iterations,
                        a = t.realIndex,
                        s = t.i,
                        o = t.x,
                        r = t.y,
                        l = t.pX,
                        h = t.pY,
                        c = t.pathsFrom,
                        d = t.linePaths,
                        u = t.areaPaths,
                        p = t.seriesIndex,
                        f = t.lineYPosition,
                        m = t.xArrj,
                        x = t.yArrj,
                        b = t.isRangeStart,
                        y = t.seriesRangeEnd,
                        w = this.w,
                        _ = new v(this.ctx),
                        k = this.yRatio,
                        S = c.prevY,
                        A = c.linePath,
                        C = c.areaPath,
                        P = c.pathFromLine,
                        L = c.pathFromArea,
                        T = g.isNumber(w.globals.minYArr[a]) ? w.globals.minYArr[a] : w.globals.minY;
                    n || (n = w.globals.dataPoints > 1 ? w.globals.dataPoints - 1 : w.globals.dataPoints); for (var M = r, E = 0; E < n; E++) { var z = void 0 === i[s][E + 1] || null === i[s][E + 1]; if (w.globals.isXNumeric) { var I = w.globals.seriesX[a][E + 1];
                            void 0 === w.globals.seriesX[a][E + 1] && (I = w.globals.seriesX[a][n - 1]), o = (I - w.globals.minX) / this.xRatio } else o += this.xDivision;
                        f = w.config.chart.stacked && s > 0 && w.globals.collapsedSeries.length < w.config.series.length - 1 ? this.prevSeriesY[function(t) { for (var e = t, i = 0; i < w.globals.series.length; i++)
                                if (w.globals.collapsedSeriesIndices.indexOf(t) > -1) { e--; break }
                            return e >= 0 ? e : 0 }(s - 1)][E + 1] : this.zeroY, z ? r = f - T / k[this.yaxisIndex] + 2 * (this.isReversed ? T / k[this.yaxisIndex] : 0) : (r = f - i[s][E + 1] / k[this.yaxisIndex] + 2 * (this.isReversed ? i[s][E + 1] / k[this.yaxisIndex] : 0), "rangeArea" === e && (M = f - y[s][E + 1] / k[this.yaxisIndex] + 2 * (this.isReversed ? y[s][E + 1] / k[this.yaxisIndex] : 0))), m.push(o), x.push(r); var O = this.lineHelpers.calculatePoints({ series: i, x: o, y: r, realIndex: a, i: s, j: E, prevY: S }),
                            D = this._createPaths({ type: e, series: i, i: s, realIndex: a, j: E, x: o, y: r, y2: M, pX: l, pY: h, linePath: A, areaPath: C, linePaths: d, areaPaths: u, seriesIndex: p, isRangeStart: b });
                        u = D.areaPaths, d = D.linePaths, l = D.pX, h = D.pY, C = D.areaPath, A = D.linePath, this.appendPathFrom && (P += _.line(o, this.zeroY), L += _.line(o, this.zeroY)), this.handleNullDataPoints(i, O, s, E, a), this._handleMarkersAndLabels({ type: e, pointsPos: O, i: s, j: E, realIndex: a, isRangeStart: b }) } return { yArrj: x, xArrj: m, pathFromArea: L, areaPaths: u, pathFromLine: P, linePaths: d, linePath: A, areaPath: C } } }, { key: "_handleMarkersAndLabels", value: function(t) { var e = t.type,
                        i = t.pointsPos,
                        n = t.isRangeStart,
                        a = t.i,
                        s = t.j,
                        o = t.realIndex,
                        r = this.w,
                        l = new N(this.ctx); if (this.pointsChart) this.scatter.draw(this.elSeries, s, { realIndex: o, pointsPos: i, zRatio: this.zRatio, elParent: this.elPointsMain });
                    else { r.globals.series[a].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden"); var h = this.markers.plotChartMarkers(i, o, s + 1);
                        null !== h && this.elPointsMain.add(h) } var c = l.drawDataLabel({ type: e, isRangeStart: n, pos: i, i: o, j: s + 1 });
                    null !== c && this.elDataLabelsWrap.add(c) } }, { key: "_createPaths", value: function(t) { var e = t.type,
                        i = t.series,
                        n = t.i,
                        a = t.realIndex,
                        s = t.j,
                        o = t.x,
                        r = t.y,
                        l = t.y2,
                        h = t.pX,
                        c = t.pY,
                        d = t.linePath,
                        u = t.areaPath,
                        p = t.linePaths,
                        f = t.areaPaths,
                        g = t.seriesIndex,
                        m = t.isRangeStart,
                        x = this.w,
                        b = new v(this.ctx),
                        y = x.config.stroke.curve,
                        w = this.areaBottomY; if (Array.isArray(x.config.stroke.curve) && (y = Array.isArray(g) ? x.config.stroke.curve[g[n]] : x.config.stroke.curve[n]), "smooth" === y) { var _ = .35 * (o - h);
                        x.globals.hasNullValues ? (null !== i[n][s] && (null !== i[n][s + 1] ? (d = b.move(h, c) + b.curve(h + _, c, o - _, r, o + 1, r), u = b.move(h + 1, c) + b.curve(h + _, c, o - _, r, o + 1, r) + b.line(o, w) + b.line(h, w) + "z") : (d = b.move(h, c), u = b.move(h, c) + "z")), p.push(d), f.push(u)) : (d += b.curve(h + _, c, o - _, r, o, r), u += b.curve(h + _, c, o - _, r, o, r)), h = o, c = r, s === i[n].length - 2 && (u = u + b.curve(h, c, o, r, o, w) + b.move(o, r) + "z", "rangeArea" === e && m ? d = d + b.curve(h, c, o, r, o, l) + b.move(o, l) + "z" : x.globals.hasNullValues || (p.push(d), f.push(u))) } else { if (null === i[n][s + 1]) { d += b.move(o, r); var k = x.globals.isXNumeric ? (x.globals.seriesX[a][s] - x.globals.minX) / this.xRatio : o - this.xDivision;
                            u = u + b.line(k, w) + b.move(o, r) + "z" }
                        null === i[n][s] && (d += b.move(o, r), u += b.move(o, w)), "stepline" === y ? (d = d + b.line(o, null, "H") + b.line(null, r, "V"), u = u + b.line(o, null, "H") + b.line(null, r, "V")) : "straight" === y && (d += b.line(o, r), u += b.line(o, r)), s === i[n].length - 2 && (u = u + b.line(o, w) + b.move(o, r) + "z", "rangeArea" === e && m ? d = d + b.line(o, l) + b.move(o, l) + "z" : (p.push(d), f.push(u))) } return { linePaths: p, areaPaths: f, pX: h, pY: c, linePath: d, areaPath: u } } }, { key: "handleNullDataPoints", value: function(t, e, i, n, a) { var s = this.w; if (null === t[i][n] && s.config.markers.showNullDataPoints || 1 === t[i].length) { var o = this.markers.plotChartMarkers(e, a, n + 1, this.strokeWidth - s.config.markers.strokeWidth / 2, !0);
                        null !== o && this.elPointsMain.add(o) } } }]), t }();
    window.TreemapSquared = {}, window.TreemapSquared.generate = function() {
        function t(e, i, n, a) { this.xoffset = e, this.yoffset = i, this.height = a, this.width = n, this.shortestEdge = function() { return Math.min(this.height, this.width) }, this.getCoordinates = function(t) { var e, i = [],
                    n = this.xoffset,
                    a = this.yoffset,
                    o = s(t) / this.height,
                    r = s(t) / this.width; if (this.width >= this.height)
                    for (e = 0; e < t.length; e++) i.push([n, a, n + o, a + t[e] / o]), a += t[e] / o;
                else
                    for (e = 0; e < t.length; e++) i.push([n, a, n + t[e] / r, a + r]), n += t[e] / r; return i }, this.cutArea = function(e) { var i; if (this.width >= this.height) { var n = e / this.height,
                        a = this.width - n;
                    i = new t(this.xoffset + n, this.yoffset, a, this.height) } else { var s = e / this.width,
                        o = this.height - s;
                    i = new t(this.xoffset, this.yoffset + s, this.width, o) } return i } }

        function e(e, n, a, o, r) { o = void 0 === o ? 0 : o, r = void 0 === r ? 0 : r; var l = i(function(t, e) { var i, n = [],
                    a = e / s(t); for (i = 0; i < t.length; i++) n[i] = t[i] * a; return n }(e, n * a), [], new t(o, r, n, a), []); return function(t) { var e, i, n = []; for (e = 0; e < t.length; e++)
                    for (i = 0; i < t[e].length; i++) n.push(t[e][i]); return n }(l) }

        function i(t, e, a, o) { var r, l, h; if (0 !== t.length) return r = a.shortestEdge(),
                function(t, e, i) { var a; return 0 === t.length || ((a = t.slice()).push(e), n(t, i) >= n(a, i)) }(e, l = t[0], r) ? (e.push(l), i(t.slice(1), e, a, o)) : (h = a.cutArea(s(e), o), o.push(a.getCoordinates(e)), i(t, [], h, o)), o;
            o.push(a.getCoordinates(e)) }

        function n(t, e) { var i = Math.min.apply(Math, t),
                n = Math.max.apply(Math, t),
                a = s(t); return Math.max(Math.pow(e, 2) * n / Math.pow(a, 2), Math.pow(a, 2) / (Math.pow(e, 2) * i)) }

        function a(t) { return t && t.constructor === Array }

        function s(t) { var e, i = 0; for (e = 0; e < t.length; e++) i += t[e]; return i }

        function o(t) { var e, i = 0; if (a(t[0]))
                for (e = 0; e < t.length; e++) i += o(t[e]);
            else i = s(t); return i } return function t(i, n, s, r, l) { r = void 0 === r ? 0 : r, l = void 0 === l ? 0 : l; var h, c, d = [],
                u = []; if (a(i[0])) { for (c = 0; c < i.length; c++) d[c] = o(i[c]); for (h = e(d, n, s, r, l), c = 0; c < i.length; c++) u.push(t(i[c], h[c][2] - h[c][0], h[c][3] - h[c][1], h[c][0], h[c][1])) } else u = e(i, n, s, r, l); return u } }();
    var Et, zt, It = function() {
            function t(e, i) { n(this, t), this.ctx = e, this.w = e.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new _t(e), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [] } return s(t, [{ key: "draw", value: function(t) { var e = this,
                        i = this.w,
                        n = new v(this.ctx),
                        a = new O(this.ctx),
                        s = n.group({ class: "apexcharts-treemap" }); if (i.globals.noData) return s; var o = []; return t.forEach((function(t) { var e = t.map((function(t) { return Math.abs(t) }));
                        o.push(e) })), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach((function(t, i) { t.data.forEach((function(t) { Array.isArray(e.labels[i]) || (e.labels[i] = []), e.labels[i].push(t.x) })) })), window.TreemapSquared.generate(o, i.globals.gridWidth, i.globals.gridHeight).forEach((function(o, r) { var l = n.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: g.escapeString(i.globals.seriesNames[r]), rel: r + 1, "data:realIndex": r }); if (i.config.chart.dropShadow.enabled) { var h = i.config.chart.dropShadow;
                            new x(e.ctx).dropShadow(s, h, r) } var c = n.group({ class: "apexcharts-data-labels" });
                        o.forEach((function(s, o) { var h = s[0],
                                c = s[1],
                                d = s[2],
                                u = s[3],
                                p = n.drawRect(h, c, d - h, u - c, 0, "#fff", 1, e.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? g : i.globals.stroke.colors[r]);
                            p.attr({ cx: h, cy: c, index: r, i: r, j: o, width: d - h, height: u - c }); var f = e.helpers.getShadeColor(i.config.chart.type, r, o, e.negRange),
                                g = f.color;
                            void 0 !== i.config.series[r].data[o] && i.config.series[r].data[o].fillColor && (g = i.config.series[r].data[o].fillColor); var m = a.fillPath({ color: g, seriesNumber: r, dataPointIndex: o });
                            p.node.classList.add("apexcharts-treemap-rect"), p.attr({ fill: m }), e.helpers.addListeners(p); var x = { x: h + (d - h) / 2, y: c + (u - c) / 2, width: 0, height: 0 },
                                v = { x: h, y: c, width: d - h, height: u - c }; if (i.config.chart.animations.enabled && !i.globals.dataChanged) { var b = 1;
                                i.globals.resized || (b = i.config.chart.animations.speed), e.animateTreemap(p, x, v, b) } if (i.globals.dataChanged) { var y = 1;
                                e.dynamicAnim.enabled && i.globals.shouldAnimate && (y = e.dynamicAnim.speed, i.globals.previousPaths[r] && i.globals.previousPaths[r][o] && i.globals.previousPaths[r][o].rect && (x = i.globals.previousPaths[r][o].rect), e.animateTreemap(p, x, v, y)) } var w = e.getFontSize(s),
                                _ = i.config.dataLabels.formatter(e.labels[r][o], { value: i.globals.series[r][o], seriesIndex: r, dataPointIndex: o, w: i }),
                                k = e.helpers.calculateDataLabels({ text: _, x: (h + d) / 2, y: (c + u) / 2 + e.strokeWidth / 2 + w / 3, i: r, j: o, colorProps: f, fontSize: w, series: t });
                            i.config.dataLabels.enabled && k && e.rotateToFitLabel(k, w, _, h, c, d, u), l.add(p), null !== k && l.add(k) })), l.add(c), s.add(l) })), s } }, { key: "getFontSize", value: function(t) { var e, i, n = this.w,
                        a = function t(e) { var i, n = 0; if (Array.isArray(e[0]))
                                for (i = 0; i < e.length; i++) n += t(e[i]);
                            else
                                for (i = 0; i < e.length; i++) n += e[i].length; return n }(this.labels) / function t(e) { var i, n = 0; if (Array.isArray(e[0]))
                                for (i = 0; i < e.length; i++) n += t(e[i]);
                            else
                                for (i = 0; i < e.length; i++) n += 1; return n }(this.labels); return e = (t[2] - t[0]) * (t[3] - t[1]), i = Math.pow(e, .5), Math.min(i / a, parseInt(n.config.dataLabels.style.fontSize, 10)) } }, { key: "rotateToFitLabel", value: function(t, e, i, n, a, s, o) { var r = new v(this.ctx),
                        l = r.getTextRects(i, e); if (l.width + this.w.config.stroke.width + 5 > s - n && l.width <= o - a) { var h = r.rotateAroundCenter(t.node);
                        t.node.setAttribute("transform", "rotate(-90 ".concat(h.x, " ").concat(h.y, ")")) } } }, { key: "animateTreemap", value: function(t, e, i, n) { var a = new m(this.ctx);
                    a.animateRect(t, { x: e.x, y: e.y, width: e.width, height: e.height }, { x: i.x, y: i.y, width: i.width, height: i.height }, n, (function() { a.animationCompleted(t) })) } }]), t }(),
        Ot = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC } return s(t, [{ key: "calculateTimeScaleTicks", value: function(t, i) { var n = this,
                        a = this.w; if (a.globals.allSeriesCollapsed) return a.globals.labels = [], a.globals.timescaleLabels = [], []; var s = new P(this.ctx),
                        o = (i - t) / 864e5;
                    this.determineInterval(o), a.globals.disableZoomIn = !1, a.globals.disableZoomOut = !1, o < .00011574074074074075 ? a.globals.disableZoomIn = !0 : o > 5e4 && (a.globals.disableZoomOut = !0); var r = s.getTimeUnitsfromTimestamp(t, i, this.utc),
                        l = a.globals.gridWidth / o,
                        h = l / 24,
                        c = h / 60,
                        d = c / 60,
                        u = Math.floor(24 * o),
                        p = Math.floor(1440 * o),
                        f = Math.floor(86400 * o),
                        g = Math.floor(o),
                        m = Math.floor(o / 30),
                        x = Math.floor(o / 365),
                        v = { minMillisecond: r.minMillisecond, minSecond: r.minSecond, minMinute: r.minMinute, minHour: r.minHour, minDate: r.minDate, minMonth: r.minMonth, minYear: r.minYear },
                        b = { firstVal: v, currentMillisecond: v.minMillisecond, currentSecond: v.minSecond, currentMinute: v.minMinute, currentHour: v.minHour, currentMonthDate: v.minDate, currentDate: v.minDate, currentMonth: v.minMonth, currentYear: v.minYear, daysWidthOnXAxis: l, hoursWidthOnXAxis: h, minutesWidthOnXAxis: c, secondsWidthOnXAxis: d, numberOfSeconds: f, numberOfMinutes: p, numberOfHours: u, numberOfDays: g, numberOfMonths: m, numberOfYears: x }; switch (this.tickInterval) {
                        case "years":
                            this.generateYearScale(b); break;
                        case "months":
                        case "half_year":
                            this.generateMonthScale(b); break;
                        case "months_days":
                        case "months_fortnight":
                        case "days":
                        case "week_days":
                            this.generateDayScale(b); break;
                        case "hours":
                            this.generateHourScale(b); break;
                        case "minutes_fives":
                        case "minutes":
                            this.generateMinuteScale(b); break;
                        case "seconds_tens":
                        case "seconds_fives":
                        case "seconds":
                            this.generateSecondScale(b) } var y = this.timeScaleArray.map((function(t) { var i = { position: t.position, unit: t.unit, year: t.year, day: t.day ? t.day : 1, hour: t.hour ? t.hour : 0, month: t.month + 1 }; return "month" === t.unit ? e(e({}, i), {}, { day: 1, value: t.value + 1 }) : "day" === t.unit || "hour" === t.unit ? e(e({}, i), {}, { value: t.value }) : "minute" === t.unit ? e(e({}, i), {}, { value: t.value, minute: t.value }) : "second" === t.unit ? e(e({}, i), {}, { value: t.value, minute: t.minute, second: t.second }) : t })); return y.filter((function(t) { var e = 1,
                            i = Math.ceil(a.globals.gridWidth / 120),
                            s = t.value;
                        void 0 !== a.config.xaxis.tickAmount && (i = a.config.xaxis.tickAmount), y.length > i && (e = Math.floor(y.length / i)); var o = !1,
                            r = !1; switch (n.tickInterval) {
                            case "years":
                                "year" === t.unit && (o = !0); break;
                            case "half_year":
                                e = 7, "year" === t.unit && (o = !0); break;
                            case "months":
                                e = 1, "year" === t.unit && (o = !0); break;
                            case "months_fortnight":
                                e = 15, "year" !== t.unit && "month" !== t.unit || (o = !0), 30 === s && (r = !0); break;
                            case "months_days":
                                e = 10, "month" === t.unit && (o = !0), 30 === s && (r = !0); break;
                            case "week_days":
                                e = 8, "month" === t.unit && (o = !0); break;
                            case "days":
                                e = 1, "month" === t.unit && (o = !0); break;
                            case "hours":
                                "day" === t.unit && (o = !0); break;
                            case "minutes_fives":
                            case "seconds_fives":
                                s % 5 != 0 && (r = !0); break;
                            case "seconds_tens":
                                s % 10 != 0 && (r = !0) } if ("hours" === n.tickInterval || "minutes_fives" === n.tickInterval || "seconds_tens" === n.tickInterval || "seconds_fives" === n.tickInterval) { if (!r) return !0 } else if ((s % e == 0 || o) && !r) return !0 })) } }, { key: "recalcDimensionsBasedOnFormat", value: function(t, e) { var i = this.w,
                        n = this.formatDates(t),
                        a = this.removeOverlappingTS(n);
                    i.globals.timescaleLabels = a.slice(), new st(this.ctx).plotCoords() } }, { key: "determineInterval", value: function(t) { var e = 24 * t,
                        i = 60 * e; switch (!0) {
                        case t / 365 > 5:
                            this.tickInterval = "years"; break;
                        case t > 800:
                            this.tickInterval = "half_year"; break;
                        case t > 180:
                            this.tickInterval = "months"; break;
                        case t > 90:
                            this.tickInterval = "months_fortnight"; break;
                        case t > 60:
                            this.tickInterval = "months_days"; break;
                        case t > 30:
                            this.tickInterval = "week_days"; break;
                        case t > 2:
                            this.tickInterval = "days"; break;
                        case e > 2.4:
                            this.tickInterval = "hours"; break;
                        case i > 15:
                            this.tickInterval = "minutes_fives"; break;
                        case i > 5:
                            this.tickInterval = "minutes"; break;
                        case i > 1:
                            this.tickInterval = "seconds_tens"; break;
                        case 60 * i > 20:
                            this.tickInterval = "seconds_fives"; break;
                        default:
                            this.tickInterval = "seconds" } } }, { key: "generateYearScale", value: function(t) { var e = t.firstVal,
                        i = t.currentMonth,
                        n = t.currentYear,
                        a = t.daysWidthOnXAxis,
                        s = t.numberOfYears,
                        o = e.minYear,
                        r = 0,
                        l = new P(this.ctx),
                        h = "year"; if (e.minDate > 1 || e.minMonth > 0) { var c = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                        r = (l.determineDaysOfYear(e.minYear) - c + 1) * a, o = e.minYear + 1, this.timeScaleArray.push({ position: r, value: o, unit: h, year: o, month: g.monthMod(i + 1) }) } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({ position: r, value: o, unit: h, year: n, month: g.monthMod(i + 1) }); for (var d = o, u = r, p = 0; p < s; p++) d++, u = l.determineDaysOfYear(d - 1) * a + u, this.timeScaleArray.push({ position: u, value: d, unit: h, year: d, month: 1 }) } }, { key: "generateMonthScale", value: function(t) { var e = t.firstVal,
                        i = t.currentMonthDate,
                        n = t.currentMonth,
                        a = t.currentYear,
                        s = t.daysWidthOnXAxis,
                        o = t.numberOfMonths,
                        r = n,
                        l = 0,
                        h = new P(this.ctx),
                        c = "month",
                        d = 0; if (e.minDate > 1) { l = (h.determineDaysOfMonths(n + 1, e.minYear) - i + 1) * s, r = g.monthMod(n + 1); var u = a + d,
                            p = g.monthMod(r),
                            f = r;
                        0 === r && (c = "year", f = u, p = 1, u += d += 1), this.timeScaleArray.push({ position: l, value: f, unit: c, year: u, month: p }) } else this.timeScaleArray.push({ position: l, value: r, unit: c, year: a, month: g.monthMod(n) }); for (var m = r + 1, x = l, v = 0, b = 1; v < o; v++, b++) { 0 === (m = g.monthMod(m)) ? (c = "year", d += 1) : c = "month"; var y = this._getYear(a, m, d);
                        x = h.determineDaysOfMonths(m, y) * s + x; var w = 0 === m ? y : m;
                        this.timeScaleArray.push({ position: x, value: w, unit: c, year: y, month: 0 === m ? 1 : m }), m++ } } }, { key: "generateDayScale", value: function(t) { var e = t.firstVal,
                        i = t.currentMonth,
                        n = t.currentYear,
                        a = t.hoursWidthOnXAxis,
                        s = t.numberOfDays,
                        o = new P(this.ctx),
                        r = "day",
                        l = e.minDate + 1,
                        h = l,
                        c = function(t, e, i) { return t > o.determineDaysOfMonths(e + 1, i) ? (h = 1, r = "month", u = e += 1, e) : e },
                        d = (24 - e.minHour) * a,
                        u = l,
                        p = c(h, i, n);
                    0 === e.minHour && 1 === e.minDate ? (d = 0, u = g.monthMod(e.minMonth), r = "month", h = e.minDate, s++) : 1 !== e.minDate && 0 === e.minHour && 0 === e.minMinute && (d = 0, l = e.minDate, u = l, p = c(h = l, i, n)), this.timeScaleArray.push({ position: d, value: u, unit: r, year: this._getYear(n, p, 0), month: g.monthMod(p), day: h }); for (var f = d, m = 0; m < s; m++) { r = "day", p = c(h += 1, p, this._getYear(n, p, 0)); var x = this._getYear(n, p, 0);
                        f = 24 * a + f; var v = 1 === h ? g.monthMod(p) : h;
                        this.timeScaleArray.push({ position: f, value: v, unit: r, year: x, month: g.monthMod(p), day: v }) } } }, { key: "generateHourScale", value: function(t) { var e = t.firstVal,
                        i = t.currentDate,
                        n = t.currentMonth,
                        a = t.currentYear,
                        s = t.minutesWidthOnXAxis,
                        o = t.numberOfHours,
                        r = new P(this.ctx),
                        l = "hour",
                        h = function(t, e) { return t > r.determineDaysOfMonths(e + 1, a) && (m = 1, e += 1), { month: e, date: m } },
                        c = function(t, e) { return t > r.determineDaysOfMonths(e + 1, a) ? e += 1 : e },
                        d = 60 - (e.minMinute + e.minSecond / 60),
                        u = d * s,
                        p = e.minHour + 1,
                        f = p + 1;
                    60 === d && (u = 0, f = (p = e.minHour) + 1); var m = i,
                        x = c(m, n);
                    this.timeScaleArray.push({ position: u, value: p, unit: l, day: m, hour: f, year: a, month: g.monthMod(x) }); for (var v = u, b = 0; b < o; b++) { l = "hour", f >= 24 && (f = 0, l = "day", x = h(m += 1, x).month, x = c(m, x)); var y = this._getYear(a, x, 0);
                        v = 0 === f && 0 === b ? d * s : 60 * s + v; var w = 0 === f ? m : f;
                        this.timeScaleArray.push({ position: v, value: w, unit: l, hour: f, day: m, year: y, month: g.monthMod(x) }), f++ } } }, { key: "generateMinuteScale", value: function(t) { for (var e = t.currentMillisecond, i = t.currentSecond, n = t.currentMinute, a = t.currentHour, s = t.currentDate, o = t.currentMonth, r = t.currentYear, l = t.minutesWidthOnXAxis, h = t.secondsWidthOnXAxis, c = t.numberOfMinutes, d = n + 1, u = s, p = o, f = r, m = a, x = (60 - i - e / 1e3) * h, v = 0; v < c; v++) d >= 60 && (d = 0, 24 === (m += 1) && (m = 0)), this.timeScaleArray.push({ position: x, value: d, unit: "minute", hour: m, minute: d, day: u, year: this._getYear(f, p, 0), month: g.monthMod(p) }), x += l, d++ } }, { key: "generateSecondScale", value: function(t) { for (var e = t.currentMillisecond, i = t.currentSecond, n = t.currentMinute, a = t.currentHour, s = t.currentDate, o = t.currentMonth, r = t.currentYear, l = t.secondsWidthOnXAxis, h = t.numberOfSeconds, c = i + 1, d = n, u = s, p = o, f = r, m = a, x = (1e3 - e) / 1e3 * l, v = 0; v < h; v++) c >= 60 && (c = 0, ++d >= 60 && (d = 0, 24 == ++m && (m = 0))), this.timeScaleArray.push({ position: x, value: c, unit: "second", hour: m, minute: d, second: c, day: u, year: this._getYear(f, p, 0), month: g.monthMod(p) }), x += l, c++ } }, { key: "createRawDateString", value: function(t, e) { var i = t.year; return 0 === t.month && (t.month = 1), i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), "minute" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00"), "second" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i } }, { key: "formatDates", value: function(t) { var e = this,
                        i = this.w; return t.map((function(t) { var n = t.value.toString(),
                            a = new P(e.ctx),
                            s = e.createRawDateString(t, n),
                            o = a.getDate(a.parseDate(s)); if (e.utc || (o = a.getDate(a.parseDateWithTimezone(s))), void 0 === i.config.xaxis.labels.format) { var r = "dd MMM",
                                l = i.config.xaxis.labels.datetimeFormatter; "year" === t.unit && (r = l.year), "month" === t.unit && (r = l.month), "day" === t.unit && (r = l.day), "hour" === t.unit && (r = l.hour), "minute" === t.unit && (r = l.minute), "second" === t.unit && (r = l.second), n = a.formatDate(o, r) } else n = a.formatDate(o, i.config.xaxis.labels.format); return { dateString: s, position: t.position, value: n, unit: t.unit, year: t.year, month: t.month } })) } }, { key: "removeOverlappingTS", value: function(t) { var e, i = this,
                        n = new v(this.ctx),
                        a = !1;
                    t.length > 0 && t[0].value && t.every((function(e) { return e.value.length === t[0].value.length })) && (a = !0, e = n.getTextRects(t[0].value).width); var s = 0,
                        o = t.map((function(o, r) { if (r > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) { var l = a ? e : n.getTextRects(t[s].value).width,
                                    h = t[s].position; return o.position > h + l + 10 ? (s = r, o) : null } return o })); return o.filter((function(t) { return null !== t })) } }, { key: "_getYear", value: function(t, e, i) { return t + Math.floor(e / 12) + i } }]), t }(),
        Dt = function() {
            function t(e, i) { n(this, t), this.ctx = i, this.w = i.w, this.el = e } return s(t, [{ key: "setupElements", value: function() { var t = this.w.globals,
                        e = this.w.config,
                        i = e.chart.type;
                    t.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i) > -1, t.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i) > -1, t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type || "boxPlot" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), v.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas " + t.chartClass.substring(1) }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")") }), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t.dom.elAnnotations = t.dom.Paper.group().attr({ class: "apexcharts-annotations" }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs) } }, { key: "plotChartType", value: function(t, e) { var i = this.w,
                        n = i.config,
                        a = i.globals,
                        s = { series: [], i: [] },
                        o = { series: [], i: [] },
                        r = { series: [], i: [] },
                        l = { series: [], i: [] },
                        h = { series: [], i: [] },
                        c = { series: [], i: [] },
                        d = { series: [], i: [] },
                        u = { series: [], i: [] },
                        p = { series: [], seriesRangeEnd: [], i: [] };
                    a.series.map((function(e, f) { var g = 0;
                        void 0 !== t[f].type ? ("column" === t[f].type || "bar" === t[f].type ? (a.series.length > 1 && n.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), h.series.push(e), h.i.push(f), g++, i.globals.columnSeries = h.series) : "area" === t[f].type ? (o.series.push(e), o.i.push(f), g++) : "line" === t[f].type ? (s.series.push(e), s.i.push(f), g++) : "scatter" === t[f].type ? (r.series.push(e), r.i.push(f)) : "bubble" === t[f].type ? (l.series.push(e), l.i.push(f), g++) : "candlestick" === t[f].type ? (c.series.push(e), c.i.push(f), g++) : "boxPlot" === t[f].type ? (d.series.push(e), d.i.push(f), g++) : "rangeBar" === t[f].type ? (u.series.push(e), u.i.push(f), g++) : "rangeArea" === t[f].type ? (p.series.push(a.seriesRangeStart[f]), p.seriesRangeEnd.push(a.seriesRangeEnd[f]), p.i.push(f), g++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"), g > 1 && (a.comboCharts = !0)) : (s.series.push(e), s.i.push(f)) })); var f = new Mt(this.ctx, e),
                        g = new wt(this.ctx, e);
                    this.ctx.pie = new At(this.ctx); var m = new Pt(this.ctx);
                    this.ctx.rangeBar = new Lt(this.ctx, e); var x = new Ct(this.ctx),
                        v = []; if (a.comboCharts) { if (o.series.length > 0 && v.push(f.draw(o.series, "area", o.i)), h.series.length > 0)
                            if (i.config.chart.stacked) { var b = new yt(this.ctx, e);
                                v.push(b.draw(h.series, h.i)) } else this.ctx.bar = new bt(this.ctx, e), v.push(this.ctx.bar.draw(h.series, h.i));
                        if (p.series.length > 0 && v.push(f.draw(p.series, "rangeArea", p.i, p.seriesRangeEnd)), s.series.length > 0 && v.push(f.draw(s.series, "line", s.i)), c.series.length > 0 && v.push(g.draw(c.series, c.i)), d.series.length > 0 && v.push(g.draw(d.series, d.i)), u.series.length > 0 && v.push(this.ctx.rangeBar.draw(u.series, u.i)), r.series.length > 0) { var y = new Mt(this.ctx, e, !0);
                            v.push(y.draw(r.series, "scatter", r.i)) } if (l.series.length > 0) { var w = new Mt(this.ctx, e, !0);
                            v.push(w.draw(l.series, "bubble", l.i)) } } else switch (n.chart.type) {
                        case "line":
                            v = f.draw(a.series, "line"); break;
                        case "area":
                            v = f.draw(a.series, "area"); break;
                        case "bar":
                            n.chart.stacked ? v = new yt(this.ctx, e).draw(a.series) : (this.ctx.bar = new bt(this.ctx, e), v = this.ctx.bar.draw(a.series)); break;
                        case "candlestick":
                        case "boxPlot":
                            v = new wt(this.ctx, e).draw(a.series); break;
                        case "rangeBar":
                            v = this.ctx.rangeBar.draw(a.series); break;
                        case "rangeArea":
                            v = f.draw(a.seriesRangeStart, "rangeArea", void 0, a.seriesRangeEnd); break;
                        case "heatmap":
                            v = new kt(this.ctx, e).draw(a.series); break;
                        case "treemap":
                            v = new It(this.ctx, e).draw(a.series); break;
                        case "pie":
                        case "donut":
                        case "polarArea":
                            v = this.ctx.pie.draw(a.series); break;
                        case "radialBar":
                            v = m.draw(a.series); break;
                        case "radar":
                            v = x.draw(a.series); break;
                        default:
                            v = f.draw(a.series) }
                    return v } }, { key: "setSVGDimensions", value: function() { var t = this.w.globals,
                        e = this.w.config;
                    t.svgWidth = e.chart.width, t.svgHeight = e.chart.height; var i = g.getDimensions(this.el),
                        n = e.chart.width.toString().split(/[0-9]+/g).pop(); "%" === n ? g.isNumber(i[0]) && (0 === i[0].width && (i = g.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : "px" !== n && "" !== n || (t.svgWidth = parseInt(e.chart.width, 10)); var a = e.chart.height.toString().split(/[0-9]+/g).pop(); if ("auto" !== t.svgHeight && "" !== t.svgHeight)
                        if ("%" === a) { var s = g.getDimensions(this.el.parentNode);
                            t.svgHeight = s[1] * parseInt(e.chart.height, 10) / 100 } else t.svgHeight = parseInt(e.chart.height, 10);
                    else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2; if (t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), v.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight }), "%" !== a) { var o = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
                        t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + o + "px" }
                    t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px" } }, { key: "shiftGraphPosition", value: function() { var t = this.w.globals,
                        e = t.translateY,
                        i = { transform: "translate(" + t.translateX + ", " + e + ")" };
                    v.setAttrs(t.dom.elGraphical.node, i) } }, { key: "resizeNonAxisCharts", value: function() { var t = this.w,
                        e = t.globals,
                        i = 0,
                        n = t.config.chart.sparkline.enabled ? 1 : 15;
                    n += t.config.grid.padding.bottom, "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || !t.config.legend.show || t.config.legend.floating || (i = new rt(this.ctx).legendHelpers.getLegendBBox().clwh + 10); var a = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),
                        s = 2.05 * t.globals.radialSize; if (a && !t.config.chart.sparkline.enabled && 0 !== t.config.plotOptions.radialBar.startAngle) { var o = g.getBoundingClientRect(a);
                        s = o.bottom; var r = o.bottom - o.top;
                        s = Math.max(2.05 * t.globals.radialSize, r) } var l = s + e.translateY + i + n;
                    e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", l), t.config.chart.height && String(t.config.chart.height).indexOf("%") > 0 || (e.dom.elWrap.style.height = l + "px", v.setAttrs(e.dom.Paper.node, { height: l }), e.dom.Paper.node.parentNode.parentNode.style.minHeight = l + "px") } }, { key: "coreCalculations", value: function() { new G(this.ctx).init() } }, { key: "resetGlobals", value: function() { var t = this,
                        e = function() { return t.w.config.series.map((function(t) { return [] })) },
                        i = new z,
                        n = this.w.globals;
                    i.initGlobalVars(n), n.seriesXvalues = e(), n.seriesYvalues = e() } }, { key: "isMultipleY", value: function() { if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return this.w.globals.isMultipleYAxis = !0, !0 } }, { key: "xySettings", value: function() { var t = null,
                        e = this.w; if (e.globals.axisCharts) { if ("back" === e.config.xaxis.crosshairs.position && new K(this.ctx).drawXCrosshairs(), "back" === e.config.yaxis[0].crosshairs.position && new K(this.ctx).drawYCrosshairs(), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter) { this.ctx.timeScale = new Ot(this.ctx); var i = [];
                            isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i) }
                        t = new b(this.ctx).getCalculatedRatios() } return t } }, { key: "updateSourceChart", value: function(t) { this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t.w.globals.minX, max: t.w.globals.maxX } } } }, !1, !1) } }, { key: "setupBrushHandler", value: function() { var t = this,
                        i = this.w; if (i.config.chart.brush.enabled && "function" != typeof i.config.chart.events.selection) { var n = i.config.chart.brush.targets || [i.config.chart.brush.target];
                        n.forEach((function(e) { var i = ApexCharts.getChartByID(e);
                            i.w.globals.brushSource = t.ctx, "function" != typeof i.w.config.chart.events.zoomed && (i.w.config.chart.events.zoomed = function() { t.updateSourceChart(i) }), "function" != typeof i.w.config.chart.events.scrolled && (i.w.config.chart.events.scrolled = function() { t.updateSourceChart(i) }) })), i.config.chart.events.selection = function(t, a) { n.forEach((function(t) { var n = ApexCharts.getChartByID(t),
                                    s = g.clone(i.config.yaxis); if (i.config.chart.brush.autoScaleYaxis && 1 === n.w.globals.series.length) { var o = new V(n);
                                    s = o.autoScaleY(n, s, a) } var r = n.w.config.yaxis.reduce((function(t, i, a) { return [].concat(u(t), [e(e({}, n.w.config.yaxis[a]), {}, { min: s[0].min, max: s[0].max })]) }), []);
                                n.ctx.updateHelpers._updateOptions({ xaxis: { min: a.xaxis.min, max: a.xaxis.max }, yaxis: r }, !1, !1, !1, !1) })) } } } }]), t }(),
        Rt = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "_updateOptions", value: function(t) { var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; return new Promise((function(r) { var l = [e.ctx];
                        s && (l = e.ctx.getSyncedCharts()), e.ctx.w.globals.isExecCalled && (l = [e.ctx], e.ctx.w.globals.isExecCalled = !1), l.forEach((function(s, h) { var c = s.w; if (c.globals.shouldAnimate = a, n || (c.globals.resized = !0, c.globals.dataChanged = !0, a && s.series.getPreviousPaths()), t && "object" === i(t) && (s.config = new E(t), t = b.extendArrayProps(s.config, t, c), s.w.globals.chartID !== e.ctx.w.globals.chartID && delete t.series, c.config = g.extend(c.config, t), o && (c.globals.lastXAxis = t.xaxis ? g.clone(t.xaxis) : [], c.globals.lastYAxis = t.yaxis ? g.clone(t.yaxis) : [], c.globals.initialConfig = g.extend({}, c.config), c.globals.initialSeries = g.clone(c.config.series), t.series))) { for (var d = 0; d < c.globals.collapsedSeriesIndices.length; d++) { var u = c.config.series[c.globals.collapsedSeriesIndices[d]];
                                    c.globals.collapsedSeries[d].data = c.globals.axisCharts ? u.data.slice() : u } for (var p = 0; p < c.globals.ancillaryCollapsedSeriesIndices.length; p++) { var f = c.config.series[c.globals.ancillaryCollapsedSeriesIndices[p]];
                                    c.globals.ancillaryCollapsedSeries[p].data = c.globals.axisCharts ? f.data.slice() : f }
                                s.series.emptyCollapsedSeries(c.config.series) } return s.update(t).then((function() { h === l.length - 1 && r(s) })) })) })) } }, { key: "_updateSeries", value: function(t, e) { var i = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return new Promise((function(a) { var s, o = i.w; return o.globals.shouldAnimate = e, o.globals.dataChanged = !0, e && i.ctx.series.getPreviousPaths(), o.globals.axisCharts ? (0 === (s = t.map((function(t, e) { return i._extendSeries(t, e) }))).length && (s = [{ data: [] }]), o.config.series = s) : o.config.series = t.slice(), n && (o.globals.initialConfig.series = g.clone(o.config.series), o.globals.initialSeries = g.clone(o.config.series)), i.ctx.update().then((function() { a(i.ctx) })) })) } }, { key: "_extendSeries", value: function(t, i) { var n = this.w,
                        a = n.config.series[i]; return e(e({}, n.config.series[i]), {}, { name: t.name ? t.name : a && a.name, color: t.color ? t.color : a && a.color, type: t.type ? t.type : a && a.type, data: t.data ? t.data : a && a.data }) } }, { key: "toggleDataPointSelection", value: function(t, e) { var i = this.w,
                        n = null,
                        a = ".apexcharts-series[data\\:realIndex='".concat(t, "']"); return i.globals.axisCharts ? n = i.globals.dom.Paper.select("".concat(a, " path[j='").concat(e, "'], ").concat(a, " circle[j='").concat(e, "'], ").concat(a, " rect[j='").concat(e, "']")).members[0] : void 0 === e && (n = i.globals.dom.Paper.select("".concat(a, " path[j='").concat(t, "']")).members[0], "pie" !== i.config.chart.type && "polarArea" !== i.config.chart.type && "donut" !== i.config.chart.type || this.ctx.pie.pieClicked(t)), n ? (new v(this.ctx).pathMouseDown(n, null), n.node ? n.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null) } }, { key: "forceXAxisUpdate", value: function(t) { var e = this.w; if (["min", "max"].forEach((function(i) { void 0 !== t.xaxis[i] && (e.config.xaxis[i] = t.xaxis[i], e.globals.lastXAxis[i] = t.xaxis[i]) })), t.xaxis.categories && t.xaxis.categories.length && (e.config.xaxis.categories = t.xaxis.categories), e.config.xaxis.convertedCatToNumeric) { var i = new M(t);
                        t = i.convertCatToNumericXaxis(t, this.ctx) } return t } }, { key: "forceYAxisUpdate", value: function(t) { return t.chart && t.chart.stacked && "100%" === t.chart.stackType && (Array.isArray(t.yaxis) ? t.yaxis.forEach((function(e, i) { t.yaxis[i].min = 0, t.yaxis[i].max = 100 })) : (t.yaxis.min = 0, t.yaxis.max = 100)), t } }, { key: "revertDefaultAxisMinMax", value: function(t) { var e = this,
                        i = this.w,
                        n = i.globals.lastXAxis,
                        a = i.globals.lastYAxis;
                    t && t.xaxis && (n = t.xaxis), t && t.yaxis && (a = t.yaxis), i.config.xaxis.min = n.min, i.config.xaxis.max = n.max;
                    i.config.yaxis.map((function(t, n) { i.globals.zoomed || void 0 !== a[n] ? function(t) { void 0 !== a[t] && (i.config.yaxis[t].min = a[t].min, i.config.yaxis[t].max = a[t].max) }(n) : void 0 !== e.ctx.opts.yaxis[n] && (t.min = e.ctx.opts.yaxis[n].min, t.max = e.ctx.opts.yaxis[n].max) })) } }]), t }();
    Et = "undefined" != typeof window ? window : void 0, zt = function(t, e) { var n = (void 0 !== this ? this : t).SVG = function(t) { if (n.supported) return t = new n.Doc(t), n.parser.draw || n.prepare(), t }; if (n.ns = "http://www.w3.org/2000/svg", n.xmlns = "http://www.w3.org/2000/xmlns/", n.xlink = "http://www.w3.org/1999/xlink", n.svgjs = "http://svgjs.dev", n.supported = !0, !n.supported) return !1;
            n.did = 1e3, n.eid = function(t) { return "Svgjs" + d(t) + n.did++ }, n.create = function(t) { var i = e.createElementNS(this.ns, t); return i.setAttribute("id", this.eid(t)), i }, n.extend = function() { var t, e;
                e = (t = [].slice.call(arguments)).pop(); for (var i = t.length - 1; i >= 0; i--)
                    if (t[i])
                        for (var a in e) t[i].prototype[a] = e[a];
                n.Set && n.Set.inherit && n.Set.inherit() }, n.invent = function(t) { var e = "function" == typeof t.create ? t.create : function() { this.constructor.call(this, n.create(t.create)) }; return t.inherit && (e.prototype = new t.inherit), t.extend && n.extend(e, t.extend), t.construct && n.extend(t.parent || n.Container, t.construct), e }, n.adopt = function(e) { return e ? e.instance ? e.instance : ((i = "svg" == e.nodeName ? e.parentNode instanceof t.SVGElement ? new n.Nested : new n.Doc : "linearGradient" == e.nodeName ? new n.Gradient("linear") : "radialGradient" == e.nodeName ? new n.Gradient("radial") : n[d(e.nodeName)] ? new(n[d(e.nodeName)]) : new n.Element(e)).type = e.nodeName, i.node = e, e.instance = i, i instanceof n.Doc && i.namespace().defs(), i.setData(JSON.parse(e.getAttribute("svgjs:data")) || {}), i) : null; var i }, n.prepare = function() { var t = e.getElementsByTagName("body")[0],
                    i = (t ? new n.Doc(t) : n.adopt(e.documentElement).nested()).size(2, 0);
                n.parser = { body: t || e.documentElement, draw: i.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: i.polyline().node, path: i.path().node, native: n.create("svg") } }, n.parser = { native: n.create("svg") }, e.addEventListener("DOMContentLoaded", (function() { n.parser.draw || n.prepare() }), !1), n.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, n.utils = { map: function(t, e) { for (var i = t.length, n = [], a = 0; a < i; a++) n.push(e(t[a])); return n }, filter: function(t, e) { for (var i = t.length, n = [], a = 0; a < i; a++) e(t[a]) && n.push(t[a]); return n }, filterSVGElements: function(e) { return this.filter(e, (function(e) { return e instanceof t.SVGElement })) } }, n.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, n.Color = function(t) { var e, a;
                this.r = 0, this.g = 0, this.b = 0, t && ("string" == typeof t ? n.regex.isRgb.test(t) ? (e = n.regex.rgb.exec(t.replace(n.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : n.regex.isHex.test(t) && (e = n.regex.hex.exec(4 == (a = t).length ? ["#", a.substring(1, 2), a.substring(1, 2), a.substring(2, 3), a.substring(2, 3), a.substring(3, 4), a.substring(3, 4)].join("") : a), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === i(t) && (this.r = t.r, this.g = t.g, this.b = t.b)) }, n.extend(n.Color, { toString: function() { return this.toHex() }, toHex: function() { return "#" + u(this.r) + u(this.g) + u(this.b) }, toRgb: function() { return "rgb(" + [this.r, this.g, this.b].join() + ")" }, brightness: function() { return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11 }, morph: function(t) { return this.destination = new n.Color(t), this }, at: function(t) { return this.destination ? (t = t < 0 ? 0 : t > 1 ? 1 : t, new n.Color({ r: ~~(this.r + (this.destination.r - this.r) * t), g: ~~(this.g + (this.destination.g - this.g) * t), b: ~~(this.b + (this.destination.b - this.b) * t) })) : this } }), n.Color.test = function(t) { return t += "", n.regex.isHex.test(t) || n.regex.isRgb.test(t) }, n.Color.isRgb = function(t) { return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b }, n.Color.isColor = function(t) { return n.Color.isRgb(t) || n.Color.test(t) }, n.Array = function(t, e) { 0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t) }, n.extend(n.Array, { toString: function() { return this.value.join(" ") }, valueOf: function() { return this.value }, parse: function(t) { return t = t.valueOf(), Array.isArray(t) ? t : this.split(t) } }), n.PointArray = function(t, e) { n.Array.call(this, t, e || [
                    [0, 0]
                ]) }, n.PointArray.prototype = new n.Array, n.PointArray.prototype.constructor = n.PointArray; for (var a = { M: function(t, e, i) { return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y] }, L: function(t, e) { return e.x = t[0], e.y = t[1], ["L", t[0], t[1]] }, H: function(t, e) { return e.x = t[0], ["H", t[0]] }, V: function(t, e) { return e.y = t[0], ["V", t[0]] }, C: function(t, e) { return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]] }, Q: function(t, e) { return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]] }, Z: function(t, e, i) { return e.x = i.x, e.y = i.y, ["Z"] } }, s = "mlhvqtcsaz".split(""), o = 0, r = s.length; o < r; ++o) a[s[o]] = function(t) { return function(e, i, n) { if ("H" == t) e[0] = e[0] + i.x;
                    else if ("V" == t) e[0] = e[0] + i.y;
                    else if ("A" == t) e[5] = e[5] + i.x, e[6] = e[6] + i.y;
                    else
                        for (var s = 0, o = e.length; s < o; ++s) e[s] = e[s] + (s % 2 ? i.y : i.x); if (a && "function" == typeof a[t]) return a[t](e, i, n) } }(s[o].toUpperCase());
            n.PathArray = function(t, e) { n.Array.call(this, t, e || [
                    ["M", 0, 0]
                ]) }, n.PathArray.prototype = new n.Array, n.PathArray.prototype.constructor = n.PathArray, n.extend(n.PathArray, { toString: function() { return function(t) { for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e][0], null != t[e][1] && (n += t[e][1], null != t[e][2] && (n += " ", n += t[e][2], null != t[e][3] && (n += " ", n += t[e][3], n += " ", n += t[e][4], null != t[e][5] && (n += " ", n += t[e][5], n += " ", n += t[e][6], null != t[e][7] && (n += " ", n += t[e][7]))))); return n + " " }(this.value) }, move: function(t, e) { var i = this.bbox(); return i.x, i.y, this }, at: function(t) { if (!this.destination) return this; for (var e = this.value, i = this.destination.value, a = [], s = new n.PathArray, o = 0, r = e.length; o < r; o++) { a[o] = [e[o][0]]; for (var l = 1, h = e[o].length; l < h; l++) a[o][l] = e[o][l] + (i[o][l] - e[o][l]) * t; "A" === a[o][0] && (a[o][4] = +(0 != a[o][4]), a[o][5] = +(0 != a[o][5])) } return s.value = a, s }, parse: function(t) { if (t instanceof n.PathArray) return t.valueOf(); var e, i = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
                    t = "string" == typeof t ? t.replace(n.regex.numbersWithDots, h).replace(n.regex.pathLetters, " $& ").replace(n.regex.hyphen, "$1 -").trim().split(n.regex.delimiter) : t.reduce((function(t, e) { return [].concat.call(t, e) }), []); var s = [],
                        o = new n.Point,
                        r = new n.Point,
                        l = 0,
                        c = t.length;
                    do { n.regex.isPathLetter.test(t[l]) ? (e = t[l], ++l) : "M" == e ? e = "L" : "m" == e && (e = "l"), s.push(a[e].call(null, t.slice(l, l += i[e.toUpperCase()]).map(parseFloat), o, r)) } while (c > l); return s }, bbox: function() { return n.parser.draw || n.prepare(), n.parser.path.setAttribute("d", this.toString()), n.parser.path.getBBox() } }), n.Number = n.invent({ create: function(t, e) { this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(n.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof n.Number && (this.value = t.valueOf(), this.unit = t.unit) }, extend: { toString: function() { return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit }, toJSON: function() { return this.toString() }, valueOf: function() { return this.value }, plus: function(t) { return t = new n.Number(t), new n.Number(this + t, this.unit || t.unit) }, minus: function(t) { return t = new n.Number(t), new n.Number(this - t, this.unit || t.unit) }, times: function(t) { return t = new n.Number(t), new n.Number(this * t, this.unit || t.unit) }, divide: function(t) { return t = new n.Number(t), new n.Number(this / t, this.unit || t.unit) }, to: function(t) { var e = new n.Number(this); return "string" == typeof t && (e.unit = t), e }, morph: function(t) { return this.destination = new n.Number(t), t.relative && (this.destination.value += this.value), this }, at: function(t) { return this.destination ? new n.Number(this.destination).minus(this).times(t).plus(this) : this } } }), n.Element = n.invent({ create: function(t) { this._stroke = n.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, this.node.instance = this, this._stroke = t.getAttribute("stroke") || this._stroke) }, extend: { x: function(t) { return this.attr("x", t) }, y: function(t) { return this.attr("y", t) }, cx: function(t) { return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2) }, cy: function(t) { return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2) }, move: function(t, e) { return this.x(t).y(e) }, center: function(t, e) { return this.cx(t).cy(e) }, width: function(t) { return this.attr("width", t) }, height: function(t) { return this.attr("height", t) }, size: function(t, e) { var i = p(this, t, e); return this.width(new n.Number(i.width)).height(new n.Number(i.height)) }, clone: function(t) { this.writeDataToDom(); var e = m(this.node.cloneNode(!0)); return t ? t.add(e) : this.after(e), e }, remove: function() { return this.parent() && this.parent().removeElement(this), this }, replace: function(t) { return this.after(t).remove(), t }, addTo: function(t) { return t.put(this) }, putIn: function(t) { return t.add(this) }, id: function(t) { return this.attr("id", t) }, show: function() { return this.style("display", "") }, hide: function() { return this.style("display", "none") }, visible: function() { return "none" != this.style("display") }, toString: function() { return this.attr("id") }, classes: function() { var t = this.attr("class"); return null == t ? [] : t.trim().split(n.regex.delimiter) }, hasClass: function(t) { return -1 != this.classes().indexOf(t) }, addClass: function(t) { if (!this.hasClass(t)) { var e = this.classes();
                            e.push(t), this.attr("class", e.join(" ")) } return this }, removeClass: function(t) { return this.hasClass(t) && this.attr("class", this.classes().filter((function(e) { return e != t })).join(" ")), this }, toggleClass: function(t) { return this.hasClass(t) ? this.removeClass(t) : this.addClass(t) }, reference: function(t) { return n.get(this.attr(t)) }, parent: function(e) { var i = this; if (!i.node.parentNode) return null; if (i = n.adopt(i.node.parentNode), !e) return i; for (; i && i.node instanceof t.SVGElement;) { if ("string" == typeof e ? i.matches(e) : i instanceof e) return i; if (!i.node.parentNode || "#document" == i.node.parentNode.nodeName) return null;
                            i = n.adopt(i.node.parentNode) } }, doc: function() { return this instanceof n.Doc ? this : this.parent(n.Doc) }, parents: function(t) { var e = [],
                            i = this;
                        do { if (!(i = i.parent(t)) || !i.node) break;
                            e.push(i) } while (i.parent); return e }, matches: function(t) { return function(t, e) { return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e) }(this.node, t) }, native: function() { return this.node }, svg: function(t) { var i = e.createElement("svg"); if (!(t && this instanceof n.Parent)) return i.appendChild(t = e.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), i.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                        i.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>"; for (var a = 0, s = i.firstChild.childNodes.length; a < s; a++) this.node.appendChild(i.firstChild.firstChild); return this }, writeDataToDom: function() { return (this.each || this.lines) && (this.each ? this : this.lines()).each((function() { this.writeDataToDom() })), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this }, setData: function(t) { return this.dom = t, this }, is: function(t) { return function(t, e) { return t instanceof e }(this, t) } } }), n.easing = { "-": function(t) { return t }, "<>": function(t) { return -Math.cos(t * Math.PI) / 2 + .5 }, ">": function(t) { return Math.sin(t * Math.PI / 2) }, "<": function(t) { return 1 - Math.cos(t * Math.PI / 2) } }, n.morph = function(t) { return function(e, i) { return new n.MorphObj(e, i).at(t) } }, n.Situation = n.invent({ create: function(t) { this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new n.Number(t.duration).valueOf(), this.delay = new n.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {} } }), n.FX = n.invent({ create: function(t) { this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1 }, extend: { animate: function(t, e, a) { "object" === i(t) && (e = t.ease, a = t.delay, t = t.duration); var s = new n.Situation({ duration: t || 1e3, delay: a || 0, ease: n.easing[e || "-"] || e }); return this.queue(s), this }, target: function(t) { return t && t instanceof n.Element ? (this._target = t, this) : this._target }, timeToAbsPos: function(t) { return (t - this.situation.start) / (this.situation.duration / this._speed) }, absPosToTime: function(t) { return this.situation.duration / this._speed * t + this.situation.start }, startAnimFrame: function() { this.stopAnimFrame(), this.animationFrame = t.requestAnimationFrame(function() { this.step() }.bind(this)) }, stopAnimFrame: function() { t.cancelAnimationFrame(this.animationFrame) }, start: function() { return !this.active && this.situation && (this.active = !0, this.startCurrent()), this }, startCurrent: function() { return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step() }, queue: function(t) { return ("function" == typeof t || t instanceof n.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this }, dequeue: function() { return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof n.Situation ? this.start() : this.situation.call(this)), this }, initAnimations: function() { var t, e = this.situation; if (e.init) return this; for (var i in e.animations) { t = this.target()[i](), Array.isArray(t) || (t = [t]), Array.isArray(e.animations[i]) || (e.animations[i] = [e.animations[i]]); for (var a = t.length; a--;) e.animations[i][a] instanceof n.Number && (t[a] = new n.Number(t[a])), e.animations[i][a] = t[a].morph(e.animations[i][a]) } for (var i in e.attrs) e.attrs[i] = new n.MorphObj(this.target().attr(i), e.attrs[i]); for (var i in e.styles) e.styles[i] = new n.MorphObj(this.target().style(i), e.styles[i]); return e.initialTransformation = this.target().matrixify(), e.init = !0, this }, clearQueue: function() { return this.situations = [], this }, clearCurrent: function() { return this.situation = null, this }, stop: function(t, e) { var i = this.active; return this.active = !1, e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent() }, after: function(t) { var e = this.last(); return this.target().on("finished.fx", (function i(n) { n.detail.situation == e && (t.call(this, e), this.off("finished.fx", i)) })), this._callStart() }, during: function(t) { var e = this.last(),
                            i = function(i) { i.detail.situation == e && t.call(this, i.detail.pos, n.morph(i.detail.pos), i.detail.eased, e) }; return this.target().off("during.fx", i).on("during.fx", i), this.after((function() { this.off("during.fx", i) })), this._callStart() }, afterAll: function(t) { var e = function e(i) { t.call(this), this.off("allfinished.fx", e) }; return this.target().off("allfinished.fx", e).on("allfinished.fx", e), this._callStart() }, last: function() { return this.situations.length ? this.situations[this.situations.length - 1] : this.situation }, add: function(t, e, i) { return this.last()[i || "animations"][t] = e, this._callStart() }, step: function(t) { var e, i, n;
                        t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e = Math.max(this.absPos, 0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, n = this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, n = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - n) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos); var a = this.situation.ease(this.pos); for (var s in this.situation.once) s > this.lastPos && s <= a && (this.situation.once[s].call(this.target(), this.pos, a), delete this.situation.once[s]); return this.active && this.target().fire("during", { pos: this.pos, eased: a, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = a, this) : this }, eachAt: function() { var t, e = this,
                            i = this.target(),
                            a = this.situation; for (var s in a.animations) t = [].concat(a.animations[s]).map((function(t) { return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t })), i[s].apply(i, t); for (var s in a.attrs) t = [s].concat(a.attrs[s]).map((function(t) { return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t })), i.attr.apply(i, t); for (var s in a.styles) t = [s].concat(a.styles[s]).map((function(t) { return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t })), i.style.apply(i, t); if (a.transforms.length) { t = a.initialTransformation, s = 0; for (var o = a.transforms.length; s < o; s++) { var r = a.transforms[s];
                                r instanceof n.Matrix ? t = r.relative ? t.multiply((new n.Matrix).morph(r).at(a.ease(this.pos))) : t.morph(r).at(a.ease(this.pos)) : (r.relative || r.undo(t.extract()), t = t.multiply(r.at(a.ease(this.pos)))) }
                            i.matrix(t) } return this }, once: function(t, e, i) { var n = this.last(); return i || (t = n.ease(t)), n.once[t] = e, this }, _callStart: function() { return setTimeout(function() { this.start() }.bind(this), 0), this } }, parent: n.Element, construct: { animate: function(t, e, i) { return (this.fx || (this.fx = new n.FX(this))).animate(t, e, i) }, delay: function(t) { return (this.fx || (this.fx = new n.FX(this))).delay(t) }, stop: function(t, e) { return this.fx && this.fx.stop(t, e), this }, finish: function() { return this.fx && this.fx.finish(), this } } }), n.MorphObj = n.invent({ create: function(t, e) { return n.Color.isColor(e) ? new n.Color(t).morph(e) : n.regex.delimiter.test(t) ? n.regex.pathLetters.test(t) ? new n.PathArray(t).morph(e) : new n.Array(t).morph(e) : n.regex.numberAndUnit.test(e) ? new n.Number(t).morph(e) : (this.value = t, void(this.destination = e)) }, extend: { at: function(t, e) { return e < 1 ? this.value : this.destination }, valueOf: function() { return this.value } } }), n.extend(n.FX, { attr: function(t, e, n) { if ("object" === i(t))
                        for (var a in t) this.attr(a, t[a]);
                    else this.add(t, e, "attrs"); return this }, plot: function(t, e, i, n) { return 4 == arguments.length ? this.plot([t, e, i, n]) : this.add("plot", new(this.target().morphArray)(t)) } }), n.Box = n.invent({ create: function(t, e, a, s) { if (!("object" !== i(t) || t instanceof n.Element)) return n.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                    4 == arguments.length && (this.x = t, this.y = e, this.width = a, this.height = s), x(this) } }), n.BBox = n.invent({ create: function(t) { if (n.Box.apply(this, [].slice.call(arguments)), t instanceof n.Element) { var i; try { if (!e.documentElement.contains) { for (var a = t.node; a.parentNode;) a = a.parentNode; if (a != e) throw new Error("Element not in the dom") }
                            i = t.node.getBBox() } catch (e) { if (t instanceof n.Shape) { n.parser.draw || n.prepare(); var s = t.clone(n.parser.draw.instance).show();
                                s && s.node && "function" == typeof s.node.getBBox && (i = s.node.getBBox()), s && "function" == typeof s.remove && s.remove() } else i = { x: t.node.clientLeft, y: t.node.clientTop, width: t.node.clientWidth, height: t.node.clientHeight } }
                        n.Box.call(this, i) } }, inherit: n.Box, parent: n.Element, construct: { bbox: function() { return new n.BBox(this) } } }), n.BBox.prototype.constructor = n.BBox, n.Matrix = n.invent({ create: function(t) { var e = g([1, 0, 0, 1, 0, 0]);
                    t = null === t ? e : t instanceof n.Element ? t.matrixify() : "string" == typeof t ? g(t.split(n.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? g([].slice.call(arguments)) : Array.isArray(t) ? g(t) : t && "object" === i(t) ? t : e; for (var a = b.length - 1; a >= 0; --a) this[b[a]] = null != t[b[a]] ? t[b[a]] : e[b[a]] }, extend: { extract: function() { var t = f(this, 0, 1);
                        f(this, 1, 0); var e = 180 / Math.PI * Math.atan2(t.y, t.x) - 90; return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(e * Math.PI / 180) + this.f * Math.sin(e * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(e * Math.PI / 180) + this.e * Math.sin(-e * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: e, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new n.Matrix(this) } }, clone: function() { return new n.Matrix(this) }, morph: function(t) { return this.destination = new n.Matrix(t), this }, multiply: function(t) { return new n.Matrix(this.native().multiply(function(t) { return t instanceof n.Matrix || (t = new n.Matrix(t)), t }(t).native())) }, inverse: function() { return new n.Matrix(this.native().inverse()) }, translate: function(t, e) { return new n.Matrix(this.native().translate(t || 0, e || 0)) }, native: function() { for (var t = n.parser.native.createSVGMatrix(), e = b.length - 1; e >= 0; e--) t[b[e]] = this[b[e]]; return t }, toString: function() { return "matrix(" + v(this.a) + "," + v(this.b) + "," + v(this.c) + "," + v(this.d) + "," + v(this.e) + "," + v(this.f) + ")" } }, parent: n.Element, construct: { ctm: function() { return new n.Matrix(this.node.getCTM()) }, screenCTM: function() { if (this instanceof n.Nested) { var t = this.rect(1, 1),
                                e = t.node.getScreenCTM(); return t.remove(), new n.Matrix(e) } return new n.Matrix(this.node.getScreenCTM()) } } }), n.Point = n.invent({ create: function(t, e) { var n;
                    n = Array.isArray(t) ? { x: t[0], y: t[1] } : "object" === i(t) ? { x: t.x, y: t.y } : null != t ? { x: t, y: null != e ? e : t } : { x: 0, y: 0 }, this.x = n.x, this.y = n.y }, extend: { clone: function() { return new n.Point(this) }, morph: function(t, e) { return this.destination = new n.Point(t, e), this } } }), n.extend(n.Element, { point: function(t, e) { return new n.Point(t, e).transform(this.screenCTM().inverse()) } }), n.extend(n.Element, { attr: function(t, e, a) { if (null == t) { for (t = {}, a = (e = this.node.attributes).length - 1; a >= 0; a--) t[e[a].nodeName] = n.regex.isNumber.test(e[a].nodeValue) ? parseFloat(e[a].nodeValue) : e[a].nodeValue; return t } if ("object" === i(t))
                        for (var s in t) this.attr(s, t[s]);
                    else if (null === e) this.node.removeAttribute(t);
                    else { if (null == e) return null == (e = this.node.getAttribute(t)) ? n.defaults.attrs[t] : n.regex.isNumber.test(e) ? parseFloat(e) : e; "stroke-width" == t ? this.attr("stroke", parseFloat(e) > 0 ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (n.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof n.Image && (e = this.doc().defs().pattern(0, 0, (function() { this.add(e) })))), "number" == typeof e ? e = new n.Number(e) : n.Color.isColor(e) ? e = new n.Color(e) : Array.isArray(e) && (e = new n.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof a ? this.node.setAttributeNS(a, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e) } return this } }), n.extend(n.Element, { transform: function(t, e) { var a; return "object" !== i(t) ? (a = new n.Matrix(this).extract(), "string" == typeof t ? a[t] : a) : (a = new n.Matrix(this), e = !!e || !!t.relative, null != t.a && (a = e ? a.multiply(new n.Matrix(t)) : new n.Matrix(t)), this.attr("transform", a)) } }), n.extend(n.Element, { untransform: function() { return this.attr("transform", null) }, matrixify: function() { return (this.attr("transform") || "").split(n.regex.transforms).slice(0, -1).map((function(t) { var e = t.trim().split("("); return [e[0], e[1].split(n.regex.delimiter).map((function(t) { return parseFloat(t) }))] })).reduce((function(t, e) { return "matrix" == e[0] ? t.multiply(g(e[1])) : t[e[0]].apply(t, e[1]) }), new n.Matrix) }, toParent: function(t) { if (this == t) return this; var e = this.screenCTM(),
                        i = t.screenCTM().inverse(); return this.addTo(t).untransform().transform(i.multiply(e)), this }, toDoc: function() { return this.toParent(this.doc()) } }), n.Transformation = n.invent({ create: function(t, e) { if (arguments.length > 1 && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments)); if (Array.isArray(t))
                        for (var n = 0, a = this.arguments.length; n < a; ++n) this[this.arguments[n]] = t[n];
                    else if (t && "object" === i(t))
                        for (n = 0, a = this.arguments.length; n < a; ++n) this[this.arguments[n]] = t[this.arguments[n]];
                    this.inversed = !1, !0 === e && (this.inversed = !0) } }), n.Translate = n.invent({ parent: n.Matrix, inherit: n.Transformation, create: function(t, e) { this.constructor.apply(this, [].slice.call(arguments)) }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), n.extend(n.Element, { style: function(t, e) { if (0 == arguments.length) return this.node.style.cssText || ""; if (arguments.length < 2)
                        if ("object" === i(t))
                            for (var a in t) this.style(a, t[a]);
                        else { if (!n.regex.isCss.test(t)) return this.node.style[c(t)]; for (t = t.split(/\s*;\s*/).filter((function(t) { return !!t })).map((function(t) { return t.split(/\s*:\s*/) })); e = t.pop();) this.style(e[0], e[1]) }
                    else this.node.style[c(t)] = null === e || n.regex.isBlank.test(e) ? "" : e; return this } }), n.Parent = n.invent({ create: function(t) { this.constructor.call(this, t) }, inherit: n.Element, extend: { children: function() { return n.utils.map(n.utils.filterSVGElements(this.node.childNodes), (function(t) { return n.adopt(t) })) }, add: function(t, e) { return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this }, put: function(t, e) { return this.add(t, e), t }, has: function(t) { return this.index(t) >= 0 }, index: function(t) { return [].slice.call(this.node.childNodes).indexOf(t.node) }, get: function(t) { return n.adopt(this.node.childNodes[t]) }, first: function() { return this.get(0) }, last: function() { return this.get(this.node.childNodes.length - 1) }, each: function(t, e) { for (var i = this.children(), a = 0, s = i.length; a < s; a++) i[a] instanceof n.Element && t.apply(i[a], [a, i]), e && i[a] instanceof n.Container && i[a].each(t, e); return this }, removeElement: function(t) { return this.node.removeChild(t.node), this }, clear: function() { for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild); return delete this._defs, this }, defs: function() { return this.doc().defs() } } }), n.extend(n.Parent, { ungroup: function(t, e) { return 0 === e || this instanceof n.Defs || this.node == n.parser.draw || (t = t || (this instanceof n.Doc ? this : this.parent(n.Parent)), e = e || 1 / 0, this.each((function() { return this instanceof n.Defs ? this : this instanceof n.Parent ? this.ungroup(t, e - 1) : this.toParent(t) })), this.node.firstChild || this.remove()), this }, flatten: function(t, e) { return this.ungroup(t, e) } }), n.Container = n.invent({ create: function(t) { this.constructor.call(this, t) }, inherit: n.Parent }), n.ViewBox = n.invent({ parent: n.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach((function(t) { n.Element.prototype[t] = function(e) { return n.on(this.node, t, e), this } })), n.listeners = [], n.handlerMap = [], n.listenerId = 0, n.on = function(t, e, i, a, s) { var o = i.bind(a || t.instance || t),
                    r = (n.handlerMap.indexOf(t) + 1 || n.handlerMap.push(t)) - 1,
                    l = e.split(".")[0],
                    h = e.split(".")[1] || "*";
                n.listeners[r] = n.listeners[r] || {}, n.listeners[r][l] = n.listeners[r][l] || {}, n.listeners[r][l][h] = n.listeners[r][l][h] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++n.listenerId), n.listeners[r][l][h][i._svgjsListenerId] = o, t.addEventListener(l, o, s || { passive: !0 }) }, n.off = function(t, e, i) { var a = n.handlerMap.indexOf(t),
                    s = e && e.split(".")[0],
                    o = e && e.split(".")[1],
                    r = ""; if (-1 != a)
                    if (i) { if ("function" == typeof i && (i = i._svgjsListenerId), !i) return;
                        n.listeners[a][s] && n.listeners[a][s][o || "*"] && (t.removeEventListener(s, n.listeners[a][s][o || "*"][i], !1), delete n.listeners[a][s][o || "*"][i]) } else if (o && s) { if (n.listeners[a][s] && n.listeners[a][s][o]) { for (var l in n.listeners[a][s][o]) n.off(t, [s, o].join("."), l);
                        delete n.listeners[a][s][o] } } else if (o)
                    for (var h in n.listeners[a])
                        for (var r in n.listeners[a][h]) o === r && n.off(t, [h, o].join("."));
                else if (s) { if (n.listeners[a][s]) { for (var r in n.listeners[a][s]) n.off(t, [s, r].join("."));
                        delete n.listeners[a][s] } } else { for (var h in n.listeners[a]) n.off(t, h);
                    delete n.listeners[a], delete n.handlerMap[a] } }, n.extend(n.Element, { on: function(t, e, i, a) { return n.on(this.node, t, e, i, a), this }, off: function(t, e) { return n.off(this.node, t, e), this }, fire: function(e, i) { return e instanceof t.Event ? this.node.dispatchEvent(e) : this.node.dispatchEvent(e = new n.CustomEvent(e, { detail: i, cancelable: !0 })), this._event = e, this }, event: function() { return this._event } }), n.Defs = n.invent({ create: "defs", inherit: n.Container }), n.G = n.invent({ create: "g", inherit: n.Container, extend: { x: function(t) { return null == t ? this.transform("x") : this.transform({ x: t - this.x() }, !0) } }, construct: { group: function() { return this.put(new n.G) } } }), n.Doc = n.invent({ create: function(t) { t && ("svg" == (t = "string" == typeof t ? e.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, n.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs()) }, inherit: n.Container, extend: { namespace: function() { return this.attr({ xmlns: n.ns, version: "1.1" }).attr("xmlns:xlink", n.xlink, n.xmlns).attr("xmlns:svgjs", n.svgjs, n.xmlns) }, defs: function() { var t; return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = n.adopt(t) : this._defs = new n.Defs, this.node.appendChild(this._defs.node)), this._defs }, parent: function() { return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null }, remove: function() { return this.parent() && this.parent().removeChild(this.node), this }, clear: function() { for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild); return delete this._defs, n.parser.draw && !n.parser.draw.parentNode && this.node.appendChild(n.parser.draw), this }, clone: function(t) { this.writeDataToDom(); var e = this.node,
                            i = m(e.cloneNode(!0)); return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i } } }), n.extend(n.Element, {}), n.Gradient = n.invent({ create: function(t) { this.constructor.call(this, n.create(t + "Gradient")), this.type = t }, inherit: n.Container, extend: { at: function(t, e, i) { return this.put(new n.Stop).update(t, e, i) }, update: function(t) { return this.clear(), "function" == typeof t && t.call(this, this), this }, fill: function() { return "url(#" + this.id() + ")" }, toString: function() { return this.fill() }, attr: function(t, e, i) { return "transform" == t && (t = "gradientTransform"), n.Container.prototype.attr.call(this, t, e, i) } }, construct: { gradient: function(t, e) { return this.defs().gradient(t, e) } } }), n.extend(n.Gradient, n.FX, { from: function(t, e) { return "radial" == (this._target || this).type ? this.attr({ fx: new n.Number(t), fy: new n.Number(e) }) : this.attr({ x1: new n.Number(t), y1: new n.Number(e) }) }, to: function(t, e) { return "radial" == (this._target || this).type ? this.attr({ cx: new n.Number(t), cy: new n.Number(e) }) : this.attr({ x2: new n.Number(t), y2: new n.Number(e) }) } }), n.extend(n.Defs, { gradient: function(t, e) { return this.put(new n.Gradient(t)).update(e) } }), n.Stop = n.invent({ create: "stop", inherit: n.Element, extend: { update: function(t) { return ("number" == typeof t || t instanceof n.Number) && (t = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new n.Number(t.offset)), this } } }), n.Pattern = n.invent({ create: "pattern", inherit: n.Container, extend: { fill: function() { return "url(#" + this.id() + ")" }, update: function(t) { return this.clear(), "function" == typeof t && t.call(this, this), this }, toString: function() { return this.fill() }, attr: function(t, e, i) { return "transform" == t && (t = "patternTransform"), n.Container.prototype.attr.call(this, t, e, i) } }, construct: { pattern: function(t, e, i) { return this.defs().pattern(t, e, i) } } }), n.extend(n.Defs, { pattern: function(t, e, i) { return this.put(new n.Pattern).update(i).attr({ x: 0, y: 0, width: t, height: e, patternUnits: "userSpaceOnUse" }) } }), n.Shape = n.invent({ create: function(t) { this.constructor.call(this, t) }, inherit: n.Element }), n.Symbol = n.invent({ create: "symbol", inherit: n.Container, construct: { symbol: function() { return this.put(new n.Symbol) } } }), n.Use = n.invent({ create: "use", inherit: n.Shape, extend: { element: function(t, e) { return this.attr("href", (e || "") + "#" + t, n.xlink) } }, construct: { use: function(t, e) { return this.put(new n.Use).element(t, e) } } }), n.Rect = n.invent({ create: "rect", inherit: n.Shape, construct: { rect: function(t, e) { return this.put(new n.Rect).size(t, e) } } }), n.Circle = n.invent({ create: "circle", inherit: n.Shape, construct: { circle: function(t) { return this.put(new n.Circle).rx(new n.Number(t).divide(2)).move(0, 0) } } }), n.extend(n.Circle, n.FX, { rx: function(t) { return this.attr("r", t) }, ry: function(t) { return this.rx(t) } }), n.Ellipse = n.invent({ create: "ellipse", inherit: n.Shape, construct: { ellipse: function(t, e) { return this.put(new n.Ellipse).size(t, e).move(0, 0) } } }), n.extend(n.Ellipse, n.Rect, n.FX, { rx: function(t) { return this.attr("rx", t) }, ry: function(t) { return this.attr("ry", t) } }), n.extend(n.Circle, n.Ellipse, { x: function(t) { return null == t ? this.cx() - this.rx() : this.cx(t + this.rx()) }, y: function(t) { return null == t ? this.cy() - this.ry() : this.cy(t + this.ry()) }, cx: function(t) { return null == t ? this.attr("cx") : this.attr("cx", t) }, cy: function(t) { return null == t ? this.attr("cy") : this.attr("cy", t) }, width: function(t) { return null == t ? 2 * this.rx() : this.rx(new n.Number(t).divide(2)) }, height: function(t) { return null == t ? 2 * this.ry() : this.ry(new n.Number(t).divide(2)) }, size: function(t, e) { var i = p(this, t, e); return this.rx(new n.Number(i.width).divide(2)).ry(new n.Number(i.height).divide(2)) } }), n.Line = n.invent({ create: "line", inherit: n.Shape, extend: { array: function() { return new n.PointArray([
                            [this.attr("x1"), this.attr("y1")],
                            [this.attr("x2"), this.attr("y2")]
                        ]) }, plot: function(t, e, i, a) { return null == t ? this.array() : (t = void 0 !== e ? { x1: t, y1: e, x2: i, y2: a } : new n.PointArray(t).toLine(), this.attr(t)) }, move: function(t, e) { return this.attr(this.array().move(t, e).toLine()) }, size: function(t, e) { var i = p(this, t, e); return this.attr(this.array().size(i.width, i.height).toLine()) } }, construct: { line: function(t, e, i, a) { return n.Line.prototype.plot.apply(this.put(new n.Line), null != t ? [t, e, i, a] : [0, 0, 0, 0]) } } }), n.Polyline = n.invent({ create: "polyline", inherit: n.Shape, construct: { polyline: function(t) { return this.put(new n.Polyline).plot(t || new n.PointArray) } } }), n.Polygon = n.invent({ create: "polygon", inherit: n.Shape, construct: { polygon: function(t) { return this.put(new n.Polygon).plot(t || new n.PointArray) } } }), n.extend(n.Polyline, n.Polygon, { array: function() { return this._array || (this._array = new n.PointArray(this.attr("points"))) }, plot: function(t) { return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new n.PointArray(t)) }, clear: function() { return delete this._array, this }, move: function(t, e) { return this.attr("points", this.array().move(t, e)) }, size: function(t, e) { var i = p(this, t, e); return this.attr("points", this.array().size(i.width, i.height)) } }), n.extend(n.Line, n.Polyline, n.Polygon, { morphArray: n.PointArray, x: function(t) { return null == t ? this.bbox().x : this.move(t, this.bbox().y) }, y: function(t) { return null == t ? this.bbox().y : this.move(this.bbox().x, t) }, width: function(t) { var e = this.bbox(); return null == t ? e.width : this.size(t, e.height) }, height: function(t) { var e = this.bbox(); return null == t ? e.height : this.size(e.width, t) } }), n.Path = n.invent({ create: "path", inherit: n.Shape, extend: { morphArray: n.PathArray, array: function() { return this._array || (this._array = new n.PathArray(this.attr("d"))) }, plot: function(t) { return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new n.PathArray(t)) }, clear: function() { return delete this._array, this } }, construct: { path: function(t) { return this.put(new n.Path).plot(t || new n.PathArray) } } }), n.Image = n.invent({ create: "image", inherit: n.Shape, extend: { load: function(e) { if (!e) return this; var i = this,
                            a = new t.Image; return n.on(a, "load", (function() { n.off(a); var t = i.parent(n.Pattern);
                            null !== t && (0 == i.width() && 0 == i.height() && i.size(a.width, a.height), t && 0 == t.width() && 0 == t.height() && t.size(i.width(), i.height()), "function" == typeof i._loaded && i._loaded.call(i, { width: a.width, height: a.height, ratio: a.width / a.height, url: e })) })), n.on(a, "error", (function(t) { n.off(a), "function" == typeof i._error && i._error.call(i, t) })), this.attr("href", a.src = this.src = e, n.xlink) }, loaded: function(t) { return this._loaded = t, this }, error: function(t) { return this._error = t, this } }, construct: { image: function(t, e, i) { return this.put(new n.Image).load(t).size(e || 0, i || e || 0) } } }), n.Text = n.invent({ create: function() { this.constructor.call(this, n.create("text")), this.dom.leading = new n.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", n.defaults.attrs["font-family"]) }, inherit: n.Shape, extend: { x: function(t) { return null == t ? this.attr("x") : this.attr("x", t) }, text: function(t) { if (void 0 === t) { t = ""; for (var e = this.node.childNodes, i = 0, a = e.length; i < a; ++i) 0 != i && 3 != e[i].nodeType && 1 == n.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent; return t } if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
                        else { i = 0; for (var s = (t = t.split("\n")).length; i < s; i++) this.tspan(t[i]).newLine() } return this.build(!1).rebuild() }, size: function(t) { return this.attr("font-size", t).rebuild() }, leading: function(t) { return null == t ? this.dom.leading : (this.dom.leading = new n.Number(t), this.rebuild()) }, lines: function() { var t = (this.textPath && this.textPath() || this).node,
                            e = n.utils.map(n.utils.filterSVGElements(t.childNodes), (function(t) { return n.adopt(t) })); return new n.Set(e) }, rebuild: function(t) { if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) { var e = this,
                                i = 0,
                                a = this.dom.leading * new n.Number(this.attr("font-size"));
                            this.lines().each((function() { this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += a : (this.attr("dy", a + i), i = 0)) })), this.fire("rebuild") } return this }, build: function(t) { return this._build = !!t, this }, setData: function(t) { return this.dom = t, this.dom.leading = new n.Number(t.leading || 1.3), this } }, construct: { text: function(t) { return this.put(new n.Text).text(t) }, plain: function(t) { return this.put(new n.Text).plain(t) } } }), n.Tspan = n.invent({ create: "tspan", inherit: n.Shape, extend: { text: function(t) { return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this) }, dx: function(t) { return this.attr("dx", t) }, dy: function(t) { return this.attr("dy", t) }, newLine: function() { var t = this.parent(n.Text); return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x()) } } }), n.extend(n.Text, n.Tspan, { plain: function(t) { return !1 === this._build && this.clear(), this.node.appendChild(e.createTextNode(t)), this }, tspan: function(t) { var e = (this.textPath && this.textPath() || this).node,
                        i = new n.Tspan; return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t) }, clear: function() { for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild); return this }, length: function() { return this.node.getComputedTextLength() } }), n.TextPath = n.invent({ create: "textPath", inherit: n.Parent, parent: n.Text, construct: { morphArray: n.PathArray, array: function() { var t = this.track(); return t ? t.array() : null }, plot: function(t) { var e = this.track(),
                            i = null; return e && (i = e.plot(t)), null == t ? i : this }, track: function() { var t = this.textPath(); if (t) return t.reference("href") }, textPath: function() { if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return n.adopt(this.node.firstChild) } } }), n.Nested = n.invent({ create: function() { this.constructor.call(this, n.create("svg")), this.style("overflow", "visible") }, inherit: n.Container, construct: { nested: function() { return this.put(new n.Nested) } } }); var l = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(t, e) { return "color" == e ? t : t + "-" + e } };

            function h(t, e, i, a) { return i + a.replace(n.regex.dots, " .") }

            function c(t) { return t.toLowerCase().replace(/-(.)/g, (function(t, e) { return e.toUpperCase() })) }

            function d(t) { return t.charAt(0).toUpperCase() + t.slice(1) }

            function u(t) { var e = t.toString(16); return 1 == e.length ? "0" + e : e }

            function p(t, e, i) { if (null == e || null == i) { var n = t.bbox();
                    null == e ? e = n.width / n.height * i : null == i && (i = n.height / n.width * e) } return { width: e, height: i } }

            function f(t, e, i) { return { x: e * t.a + i * t.c + 0, y: e * t.b + i * t.d + 0 } }

            function g(t) { return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] } }

            function m(e) { for (var i = e.childNodes.length - 1; i >= 0; i--) e.childNodes[i] instanceof t.SVGElement && m(e.childNodes[i]); return n.adopt(e).id(n.eid(e.nodeName)) }

            function x(t) { return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t }

            function v(t) { return Math.abs(t) > 1e-37 ? t : 0 }["fill", "stroke"].forEach((function(t) { var e = {};
                e[t] = function(e) { if (void 0 === e) return this; if ("string" == typeof e || n.Color.isRgb(e) || e && "function" == typeof e.fill) this.attr(t, e);
                    else
                        for (var i = l[t].length - 1; i >= 0; i--) null != e[l[t][i]] && this.attr(l.prefix(t, l[t][i]), e[l[t][i]]); return this }, n.extend(n.Element, n.FX, e) })), n.extend(n.Element, n.FX, { translate: function(t, e) { return this.transform({ x: t, y: e }) }, matrix: function(t) { return this.attr("transform", new n.Matrix(6 == arguments.length ? [].slice.call(arguments) : t)) }, opacity: function(t) { return this.attr("opacity", t) }, dx: function(t) { return this.x(new n.Number(t).plus(this instanceof n.FX ? 0 : this.x()), !0) }, dy: function(t) { return this.y(new n.Number(t).plus(this instanceof n.FX ? 0 : this.y()), !0) } }), n.extend(n.Path, { length: function() { return this.node.getTotalLength() }, pointAt: function(t) { return this.node.getPointAtLength(t) } }), n.Set = n.invent({ create: function(t) { Array.isArray(t) ? this.members = t : this.clear() }, extend: { add: function() { for (var t = [].slice.call(arguments), e = 0, i = t.length; e < i; e++) this.members.push(t[e]); return this }, remove: function(t) { var e = this.index(t); return e > -1 && this.members.splice(e, 1), this }, each: function(t) { for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]); return this }, clear: function() { return this.members = [], this }, length: function() { return this.members.length }, has: function(t) { return this.index(t) >= 0 }, index: function(t) { return this.members.indexOf(t) }, get: function(t) { return this.members[t] }, first: function() { return this.get(0) }, last: function() { return this.get(this.members.length - 1) }, valueOf: function() { return this.members } }, construct: { set: function(t) { return new n.Set(t) } } }), n.FX.Set = n.invent({ create: function(t) { this.set = t } }), n.Set.inherit = function() { var t = []; for (var e in n.Shape.prototype) "function" == typeof n.Shape.prototype[e] && "function" != typeof n.Set.prototype[e] && t.push(e); for (var e in t.forEach((function(t) { n.Set.prototype[t] = function() { for (var e = 0, i = this.members.length; e < i; e++) this.members[e] && "function" == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments); return "animate" == t ? this.fx || (this.fx = new n.FX.Set(this)) : this } })), t = [], n.FX.prototype) "function" == typeof n.FX.prototype[e] && "function" != typeof n.FX.Set.prototype[e] && t.push(e);
                t.forEach((function(t) { n.FX.Set.prototype[t] = function() { for (var e = 0, i = this.set.members.length; e < i; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments); return this } })) }, n.extend(n.Element, {}), n.extend(n.Element, { remember: function(t, e) { if ("object" === i(arguments[0]))
                        for (var n in t) this.remember(n, t[n]);
                    else { if (1 == arguments.length) return this.memory()[t];
                        this.memory()[t] = e } return this }, forget: function() { if (0 == arguments.length) this._memory = {};
                    else
                        for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]]; return this }, memory: function() { return this._memory || (this._memory = {}) } }), n.get = function(t) { var i = e.getElementById(function(t) { var e = (t || "").toString().match(n.regex.reference); if (e) return e[1] }(t) || t); return n.adopt(i) }, n.select = function(t, i) { return new n.Set(n.utils.map((i || e).querySelectorAll(t), (function(t) { return n.adopt(t) }))) }, n.extend(n.Parent, { select: function(t) { return n.select(t, this.node) } }); var b = "abcdef".split(""); if ("function" != typeof t.CustomEvent) { var y = function(t, i) { i = i || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = e.createEvent("CustomEvent"); return n.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), n };
                y.prototype = t.Event.prototype, n.CustomEvent = y } else n.CustomEvent = t.CustomEvent; return n }, "function" == typeof define && define.amd ? define((function() { return zt(Et, Et.document) })) : "object" === ("undefined" == typeof exports ? "undefined" : i(exports)) && "undefined" != typeof module ? module.exports = Et.document ? zt(Et, Et.document) : function(t) { return zt(t, t.document) } : Et.SVG = zt(Et, Et.document),
        /*! svg.filter.js - v2.0.2 - 2016-02-24
         * https://github.com/wout/svg.filter.js
         * Copyright (c) 2016 Wout Fierens; Licensed MIT */
        function() { SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: !0, put: function(t, e) { return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t }, blend: function(t, e, i) { return this.put(new SVG.BlendEffect(t, e, i)) }, colorMatrix: function(t, e) { return this.put(new SVG.ColorMatrixEffect(t, e)) }, convolveMatrix: function(t) { return this.put(new SVG.ConvolveMatrixEffect(t)) }, componentTransfer: function(t) { return this.put(new SVG.ComponentTransferEffect(t)) }, composite: function(t, e, i) { return this.put(new SVG.CompositeEffect(t, e, i)) }, flood: function(t, e) { return this.put(new SVG.FloodEffect(t, e)) }, offset: function(t, e) { return this.put(new SVG.OffsetEffect(t, e)) }, image: function(t) { return this.put(new SVG.ImageEffect(t)) }, merge: function() { var t = [void 0]; for (var e in arguments) t.push(arguments[e]); return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect, t))) }, gaussianBlur: function(t, e) { return this.put(new SVG.GaussianBlurEffect(t, e)) }, morphology: function(t, e) { return this.put(new SVG.MorphologyEffect(t, e)) }, diffuseLighting: function(t, e, i) { return this.put(new SVG.DiffuseLightingEffect(t, e, i)) }, displacementMap: function(t, e, i, n, a) { return this.put(new SVG.DisplacementMapEffect(t, e, i, n, a)) }, specularLighting: function(t, e, i, n) { return this.put(new SVG.SpecularLightingEffect(t, e, i, n)) }, tile: function() { return this.put(new SVG.TileEffect) }, turbulence: function(t, e, i, n, a) { return this.put(new SVG.TurbulenceEffect(t, e, i, n, a)) }, toString: function() { return "url(#" + this.attr("id") + ")" } } }), SVG.extend(SVG.Defs, { filter: function(t) { var e = this.put(new SVG.Filter); return "function" == typeof t && t.call(e, e), e } }), SVG.extend(SVG.Container, { filter: function(t) { return this.defs().filter(t) } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(t) { return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer }, unfilter: function(t) { return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null) } }), SVG.Effect = SVG.invent({ create: function() { this.constructor.call(this) }, inherit: SVG.Element, extend: { in: function(t) { return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t) }, result: function(t) { return null == t ? this.attr("result") : this.attr("result", t) }, toString: function() { return this.result() } } }), SVG.ParentEffect = SVG.invent({ create: function() { this.constructor.call(this) }, inherit: SVG.Parent, extend: { in: function(t) { return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t) }, result: function(t) { return null == t ? this.attr("result") : this.attr("result", t) }, toString: function() { return this.result() } } }); var t = { blend: function(t, e) { return this.parent() && this.parent().blend(this, t, e) }, colorMatrix: function(t, e) { return this.parent() && this.parent().colorMatrix(t, e).in(this) }, convolveMatrix: function(t) { return this.parent() && this.parent().convolveMatrix(t).in(this) }, componentTransfer: function(t) { return this.parent() && this.parent().componentTransfer(t).in(this) }, composite: function(t, e) { return this.parent() && this.parent().composite(this, t, e) }, flood: function(t, e) { return this.parent() && this.parent().flood(t, e) }, offset: function(t, e) { return this.parent() && this.parent().offset(t, e).in(this) }, image: function(t) { return this.parent() && this.parent().image(t) }, merge: function() { return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments)) }, gaussianBlur: function(t, e) { return this.parent() && this.parent().gaussianBlur(t, e).in(this) }, morphology: function(t, e) { return this.parent() && this.parent().morphology(t, e).in(this) }, diffuseLighting: function(t, e, i) { return this.parent() && this.parent().diffuseLighting(t, e, i).in(this) }, displacementMap: function(t, e, i, n) { return this.parent() && this.parent().displacementMap(this, t, e, i, n) }, specularLighting: function(t, e, i, n) { return this.parent() && this.parent().specularLighting(t, e, i, n).in(this) }, tile: function() { return this.parent() && this.parent().tile().in(this) }, turbulence: function(t, e, i, n, a) { return this.parent() && this.parent().turbulence(t, e, i, n, a).in(this) } };
            SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({ create: function() { this.constructor.call(this) }, inherit: SVG.Element, extend: { in: function(t) { this.attr("in", t) } } }); var e = { blend: function(t, e, i) { this.attr({ in: t, in2: e, mode: i || "normal" }) }, colorMatrix: function(t, e) { "matrix" == t && (e = a(e)), this.attr({ type: t, values: void 0 === e ? null : e }) }, convolveMatrix: function(t) { t = a(t), this.attr({ order: Math.sqrt(t.split(" ").length), kernelMatrix: t }) }, composite: function(t, e, i) { this.attr({ in: t, in2: e, operator: i }) }, flood: function(t, e) { this.attr("flood-color", t), null != e && this.attr("flood-opacity", e) }, offset: function(t, e) { this.attr({ dx: t, dy: e }) }, image: function(t) { this.attr("href", t, SVG.xlink) }, displacementMap: function(t, e, i, n, a) { this.attr({ in: t, in2: e, scale: i, xChannelSelector: n, yChannelSelector: a }) }, gaussianBlur: function(t, e) { null != t || null != e ? this.attr("stdDeviation", s(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0") }, morphology: function(t, e) { this.attr({ operator: t, radius: e }) }, tile: function() {}, turbulence: function(t, e, i, n, a) { this.attr({ numOctaves: e, seed: i, stitchTiles: n, baseFrequency: t, type: a }) } },
                i = { merge: function() { var t; if (arguments[0] instanceof SVG.Set) { var e = this;
                            arguments[0].each((function(t) { this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this)) })) } else { t = Array.isArray(arguments[0]) ? arguments[0] : arguments; for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i])) } }, componentTransfer: function(t) { if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function(t) { this[t] = new(SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node) }.bind(this)), t)
                            for (var e in t.rgb && (["r", "g", "b"].forEach(function(e) { this[e].attr(t.rgb) }.bind(this)), delete t.rgb), t) this[e].attr(t[e]) }, diffuseLighting: function(t, e, i) { this.attr({ surfaceScale: t, diffuseConstant: e, kernelUnitLength: i }) }, specularLighting: function(t, e, i, n) { this.attr({ surfaceScale: t, diffuseConstant: e, specularExponent: i, kernelUnitLength: n }) } },
                n = { distantLight: function(t, e) { this.attr({ azimuth: t, elevation: e }) }, pointLight: function(t, e, i) { this.attr({ x: t, y: e, z: i }) }, spotLight: function(t, e, i, n, a, s) { this.attr({ x: t, y: e, z: i, pointsAtX: n, pointsAtY: a, pointsAtZ: s }) }, mergeNode: function(t) { this.attr("in", t) } };

            function a(t) { return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ") }

            function s(t) { if (!Array.isArray(t)) return t; for (var e = 0, i = t.length, n = []; e < i; e++) n.push(t[e]); return n.join(" ") }

            function o() { var t = function() {}; for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
                    for (var i in arguments[e]) t(arguments[e][i], i, arguments[e]) }["r", "g", "b", "a"].forEach((function(t) { n["Func" + t.toUpperCase()] = function(t) { switch (this.attr("type", t), t) {
                        case "table":
                            this.attr("tableValues", arguments[1]); break;
                        case "linear":
                            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]); break;
                        case "gamma":
                            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]) } } })), o(e, (function(t, e) { var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({ create: function() { this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out") }, inherit: SVG.Effect, extend: {} }) })), o(i, (function(t, e) { var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({ create: function() { this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out") }, inherit: SVG.ParentEffect, extend: {} }) })), o(n, (function(t, e) { var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i] = SVG.invent({ create: function() { this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments) }, inherit: SVG.ChildEffect, extend: {} }) })), SVG.extend(SVG.MergeEffect, { in: function(t) { return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(t) { return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t) } }), SVG.filter = { sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0] } }.call(void 0),
        function() {
            function t(t, a, s, o, r, l, h) { for (var c = t.slice(a, s || h), d = o.slice(r, l || h), u = 0, p = { pos: [0, 0], start: [0, 0] }, f = { pos: [0, 0], start: [0, 0] }; c[u] = e.call(p, c[u]), d[u] = e.call(f, d[u]), c[u][0] != d[u][0] || "M" == c[u][0] || "A" == c[u][0] && (c[u][4] != d[u][4] || c[u][5] != d[u][5]) ? (Array.prototype.splice.apply(c, [u, 1].concat(n.call(p, c[u]))), Array.prototype.splice.apply(d, [u, 1].concat(n.call(f, d[u])))) : (c[u] = i.call(p, c[u]), d[u] = i.call(f, d[u])), ++u != c.length || u != d.length;) u == c.length && c.push(["C", p.pos[0], p.pos[1], p.pos[0], p.pos[1], p.pos[0], p.pos[1]]), u == d.length && d.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]); return { start: c, dest: d } }

            function e(t) { switch (t[0]) {
                    case "z":
                    case "Z":
                        t[0] = "L", t[1] = this.start[0], t[2] = this.start[1]; break;
                    case "H":
                        t[0] = "L", t[2] = this.pos[1]; break;
                    case "V":
                        t[0] = "L", t[2] = t[1], t[1] = this.pos[0]; break;
                    case "T":
                        t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0]; break;
                    case "S":
                        t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0] } return t }

            function i(t) { var e = t.length; return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t }

            function n(t) { var e = [t]; switch (t[0]) {
                    case "M":
                        return this.pos = this.start = [t[1], t[2]], e;
                    case "L":
                        t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1]; break;
                    case "Q":
                        t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 * this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3; break;
                    case "A":
                        e = function(t, e) { var i, n, a, s, o, r, l, h, c, d, u, p, f, g, m, x, v, b, y, w, _, k, S, A, C, P, L = Math.abs(e[1]),
                                T = Math.abs(e[2]),
                                M = e[3] % 360,
                                E = e[4],
                                z = e[5],
                                I = e[6],
                                O = e[7],
                                D = new SVG.Point(t),
                                R = new SVG.Point(I, O),
                                N = []; if (0 === L || 0 === T || D.x === R.x && D.y === R.y) return [
                                ["C", D.x, D.y, R.x, R.y, R.x, R.y]
                            ]; for ((n = (i = new SVG.Point((D.x - R.x) / 2, (D.y - R.y) / 2).transform((new SVG.Matrix).rotate(M))).x * i.x / (L * L) + i.y * i.y / (T * T)) > 1 && (L *= n = Math.sqrt(n), T *= n), a = (new SVG.Matrix).rotate(M).scale(1 / L, 1 / T).rotate(-M), D = D.transform(a), r = (s = [(R = R.transform(a)).x - D.x, R.y - D.y])[0] * s[0] + s[1] * s[1], o = Math.sqrt(r), s[0] /= o, s[1] /= o, l = r < 4 ? Math.sqrt(1 - r / 4) : 0, E === z && (l *= -1), h = new SVG.Point((R.x + D.x) / 2 + l * -s[1], (R.y + D.y) / 2 + l * s[0]), c = new SVG.Point(D.x - h.x, D.y - h.y), d = new SVG.Point(R.x - h.x, R.y - h.y), u = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)), c.y < 0 && (u *= -1), p = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)), d.y < 0 && (p *= -1), z && u > p && (p += 2 * Math.PI), !z && u < p && (p -= 2 * Math.PI), x = [], v = u, f = (p - u) / (g = Math.ceil(2 * Math.abs(u - p) / Math.PI)), m = 4 * Math.tan(f / 4) / 3, _ = 0; _ <= g; _++) y = Math.cos(v), b = Math.sin(v), w = new SVG.Point(h.x + y, h.y + b), x[_] = [new SVG.Point(w.x + m * b, w.y - m * y), w, new SVG.Point(w.x - m * b, w.y + m * y)], v += f; for (x[0][0] = x[0][1].clone(), x[x.length - 1][2] = x[x.length - 1][1].clone(), a = (new SVG.Matrix).rotate(M).scale(L, T).rotate(-M), _ = 0, k = x.length; _ < k; _++) x[_][0] = x[_][0].transform(a), x[_][1] = x[_][1].transform(a), x[_][2] = x[_][2].transform(a); for (_ = 1, k = x.length; _ < k; _++) S = (w = x[_ - 1][2]).x, A = w.y, C = (w = x[_][0]).x, P = w.y, I = (w = x[_][1]).x, O = w.y, N.push(["C", S, A, C, P, I, O]); return N }(this.pos, t), t = e[0] } return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e }

            function a(t, e) { if (!1 === e) return !1; for (var i = e, n = t.length; i < n; ++i)
                    if ("M" == t[i][0]) return i;
                return !1 }
            SVG.extend(SVG.PathArray, { morph: function(e) { for (var i = this.value, n = this.parse(e), s = 0, o = 0, r = !1, l = !1; !1 !== s || !1 !== o;) { var h;
                        r = a(i, !1 !== s && s + 1), l = a(n, !1 !== o && o + 1), !1 === s && (s = 0 == (h = new SVG.PathArray(c.start).bbox()).height || 0 == h.width ? i.push(i[0]) - 1 : i.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1), !1 === o && (o = 0 == (h = new SVG.PathArray(c.dest).bbox()).height || 0 == h.width ? n.push(n[0]) - 1 : n.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1); var c = t(i, s, r, n, o, l);
                        i = i.slice(0, s).concat(c.start, !1 === r ? [] : i.slice(r)), n = n.slice(0, o).concat(c.dest, !1 === l ? [] : n.slice(l)), s = !1 !== r && s + c.start.length, o = !1 !== l && o + c.dest.length } return this.value = i, this.destination = new SVG.PathArray, this.destination.value = n, this } }) }(),
        /*! svg.draggable.js - v2.2.2 - 2019-01-08
         * https://github.com/svgdotjs/svg.draggable.js
         * Copyright (c) 2019 Wout Fierens; Licensed MIT */
        function() {
            function t(t) { t.remember("_draggable", this), this.el = t }
            t.prototype.init = function(t, e) { var i = this;
                this.constraint = t, this.value = e, this.el.on("mousedown.drag", (function(t) { i.start(t) })), this.el.on("touchstart.drag", (function(t) { i.start(t) })) }, t.prototype.transformPoint = function(t, e) { var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t; return this.p.x = i.clientX - (e || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m) }, t.prototype.getBBox = function() { var t = this.el.bbox(); return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t }, t.prototype.start = function(t) { if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) { var e = this; if (this.el.fire("beforedrag", { event: t, handler: this }), !this.el.event().defaultPrevented) { t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse(); var i, n = this.getBBox(); if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                            case "middle":
                                i /= 2; break;
                            case "start":
                                i = 0 }
                        this.startPoints = { point: this.transformPoint(t, i), box: n, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", (function(t) { e.drag(t) })), SVG.on(window, "touchmove.drag", (function(t) { e.drag(t) })), SVG.on(window, "mouseup.drag", (function(t) { e.end(t) })), SVG.on(window, "touchend.drag", (function(t) { e.end(t) })), this.el.fire("dragstart", { event: t, p: this.startPoints.point, m: this.m, handler: this }) } } }, t.prototype.drag = function(t) { var e = this.getBBox(),
                    i = this.transformPoint(t),
                    n = this.startPoints.box.x + i.x - this.startPoints.point.x,
                    a = this.startPoints.box.y + i.y - this.startPoints.point.y,
                    s = this.constraint,
                    o = i.x - this.startPoints.point.x,
                    r = i.y - this.startPoints.point.y; if (this.el.fire("dragmove", { event: t, p: i, m: this.m, handler: this }), this.el.event().defaultPrevented) return i; if ("function" == typeof s) { var l = s.call(this.el, n, a, this.m); "boolean" == typeof l && (l = { x: l, y: l }), !0 === l.x ? this.el.x(n) : !1 !== l.x && this.el.x(l.x), !0 === l.y ? this.el.y(a) : !1 !== l.y && this.el.y(l.y) } else "object" == typeof s && (null != s.minX && n < s.minX ? o = (n = s.minX) - this.startPoints.box.x : null != s.maxX && n > s.maxX - e.width && (o = (n = s.maxX - e.width) - this.startPoints.box.x), null != s.minY && a < s.minY ? r = (a = s.minY) - this.startPoints.box.y : null != s.maxY && a > s.maxY - e.height && (r = (a = s.maxY - e.height) - this.startPoints.box.y), null != s.snapToGrid && (n -= n % s.snapToGrid, a -= a % s.snapToGrid, o -= o % s.snapToGrid, r -= r % s.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: o, y: r }, !0) : this.el.move(n, a)); return i }, t.prototype.end = function(t) { var e = this.drag(t);
                this.el.fire("dragend", { event: t, p: e, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag") }, SVG.extend(SVG.Element, { draggable: function(e, i) { "function" != typeof e && "object" != typeof e || (i = e, e = !0); var n = this.remember("_draggable") || new t(this); return (e = void 0 === e || e) ? n.init(i || {}, e) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this } }) }.call(void 0),
        function() {
            function t(t) { this.el = t, t.remember("_selectHandler", this), this.pointSelection = { isSelected: !1 }, this.rectSelection = { isSelected: !1 }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(t, e, i) { var n = "string" != typeof t ? t : e[t]; return i ? n / 2 : n }, this.pointCoords = function(t, e) { var i = this.pointsList[t]; return { x: this.pointCoord(i[0], e, "t" === t || "b" === t), y: this.pointCoord(i[1], e, "r" === t || "l" === t) } } }
            t.prototype.init = function(t, e) { var i = this.el.bbox();
                this.options = {}; var n = this.el.selectize.defaults.points; for (var a in this.el.selectize.defaults) this.options[a] = this.el.selectize.defaults[a], void 0 !== e[a] && (this.options[a] = e[a]); var s = ["points", "pointsExclude"]; for (var a in s) { var o = this.options[s[a]]; "string" == typeof o ? o = o.length > 0 ? o.split(/\s*,\s*/i) : [] : "boolean" == typeof o && "points" === s[a] && (o = o ? n : []), this.options[s[a]] = o }
                this.options.points = [n, this.options.points].reduce((function(t, e) { return t.filter((function(t) { return e.indexOf(t) > -1 })) })), this.options.points = [this.options.points, this.options.pointsExclude].reduce((function(t, e) { return t.filter((function(t) { return e.indexOf(t) < 0 })) })), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup() }, t.prototype.selectPoints = function(t) { return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this }, t.prototype.getPointArray = function() { var t = this.el.bbox(); return this.el.array().valueOf().map((function(e) { return [e[0] - t.x, e[1] - t.y] })) }, t.prototype.drawPoints = function() { for (var t = this, e = this.getPointArray(), i = 0, n = e.length; i < n; ++i) { var a = function(e) { return function(i) {
                                (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation(); var n = i.pageX || i.touches[0].pageX,
                                    a = i.pageY || i.touches[0].pageY;
                                t.el.fire("point", { x: n, y: a, i: e, event: i }) } }(i),
                        s = this.drawPoint(e[i][0], e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", a).on("mousedown", a);
                    this.pointSelection.set.add(s) } }, t.prototype.drawPoint = function(t, e) { var i = this.options.pointType; switch (i) {
                    case "circle":
                        return this.drawCircle(t, e);
                    case "rect":
                        return this.drawRect(t, e);
                    default:
                        if ("function" == typeof i) return i.call(this, t, e); throw new Error("Unknown " + i + " point type!") } }, t.prototype.drawCircle = function(t, e) { return this.nested.circle(this.options.pointSize).center(t, e) }, t.prototype.drawRect = function(t, e) { return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e) }, t.prototype.updatePointSelection = function() { var t = this.getPointArray();
                this.pointSelection.set.each((function(e) { this.cx() === t[e][0] && this.cy() === t[e][1] || this.center(t[e][0], t[e][1]) })) }, t.prototype.updateRectSelection = function() { var t = this,
                    e = this.el.bbox(); if (this.rectSelection.set.get(0).attr({ width: e.width, height: e.height }), this.options.points.length && this.options.points.map((function(i, n) { var a = t.pointCoords(i, e);
                        t.rectSelection.set.get(n + 1).center(a.x, a.y) })), this.options.rotationPoint) { var i = this.rectSelection.set.length();
                    this.rectSelection.set.get(i - 1).center(e.width / 2, 20) } }, t.prototype.selectRect = function(t) { var e = this,
                    i = this.el.bbox();

                function n(t) { return function(i) {
                        (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation(); var n = i.pageX || i.touches[0].pageX,
                            a = i.pageY || i.touches[0].pageY;
                        e.el.fire(t, { x: n, y: a, event: i }) } } if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map((function(t, a) { var s = e.pointCoords(t, i),
                            o = e.drawPoint(s.x, s.y).attr("class", e.options.classPoints + "_" + t).on("mousedown", n(t)).on("touchstart", n(t));
                        e.rectSelection.set.add(o) })), this.rectSelection.set.each((function() { this.addClass(e.options.classPoints) }))), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) { var a = function(t) {
                            (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation(); var i = t.pageX || t.touches[0].pageX,
                                n = t.pageY || t.touches[0].pageY;
                            e.el.fire("rot", { x: i, y: n, event: t }) },
                        s = this.drawPoint(i.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", a).on("mousedown", a);
                    this.rectSelection.set.add(s) } }, t.prototype.handler = function() { var t = this.el.bbox();
                this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection() }, t.prototype.observe = function() { var t = this; if (MutationObserver)
                    if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver((function() { t.handler() })), this.observerInst.observe(this.el.node, { attributes: !0 });
                    else try { this.observerInst.disconnect(), delete this.observerInst } catch (t) {} else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", (function() { t.handler() })) }, t.prototype.cleanup = function() {!this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each((function() { this.remove() })), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each((function() { this.remove() })), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested) }, SVG.extend(SVG.Element, { selectize: function(e, i) { return "object" == typeof e && (i = e, e = !0), (this.remember("_selectHandler") || new t(this)).init(void 0 === e || e, i || {}), this } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: !0, deepSelect: !1, pointType: "circle" } }(),
        function() {
            (function() {
                function t(t) { t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint() }
                t.prototype.transformPoint = function(t, e, i) { return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m) }, t.prototype._extractPosition = function(t) { return { x: null != t.clientX ? t.clientX : t.touches[0].clientX, y: null != t.clientY ? t.clientY : t.touches[0].clientY } }, t.prototype.init = function(t) { var e = this; if (this.stop(), "stop" !== t) { for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
                        this.el.on("lt.resize", (function(t) { e.resize(t || window.event) })), this.el.on("rt.resize", (function(t) { e.resize(t || window.event) })), this.el.on("rb.resize", (function(t) { e.resize(t || window.event) })), this.el.on("lb.resize", (function(t) { e.resize(t || window.event) })), this.el.on("t.resize", (function(t) { e.resize(t || window.event) })), this.el.on("r.resize", (function(t) { e.resize(t || window.event) })), this.el.on("b.resize", (function(t) { e.resize(t || window.event) })), this.el.on("l.resize", (function(t) { e.resize(t || window.event) })), this.el.on("rot.resize", (function(t) { e.resize(t || window.event) })), this.el.on("point.resize", (function(t) { e.resize(t || window.event) })), this.update() } }, t.prototype.stop = function() { return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this }, t.prototype.resize = function(t) { var e = this;
                    this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset }; var i = this._extractPosition(t.detail.event); if (this.parameters = { type: this.el.type, p: this.transformPoint(i.x, i.y), x: t.detail.x, y: t.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i) { var n = this.el.array().valueOf();
                        this.parameters.i = t.detail.i, this.parameters.pointCoords = [n[t.detail.i][0], n[t.detail.i][1]] } switch (t.type) {
                        case "lt":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e); if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height - i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1]) } }; break;
                        case "rt":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, 2); if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height - i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1]) } }; break;
                        case "rb":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, 0); if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height + i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1]) } }; break;
                        case "lb":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, 1); if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height + i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1]) } }; break;
                        case "t":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, 2); if (this.parameters.box.height - i[1] > 0) { if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1]) } }; break;
                        case "r":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, 0); if (this.parameters.box.width + i[0] > 0) { if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0]) } }; break;
                        case "b":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, 0); if (this.parameters.box.height + i[1] > 0) { if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1]) } }; break;
                        case "l":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, 1); if (this.parameters.box.width - i[0] > 0) { if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0]) } }; break;
                        case "rot":
                            this.calc = function(t, e) { var i = t + this.parameters.p.x,
                                    n = e + this.parameters.p.y,
                                    a = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                    s = Math.atan2(n - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2),
                                    o = this.parameters.rotation + 180 * (s - a) / Math.PI + this.options.snapToAngle / 2;
                                this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(o - o % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy) }; break;
                        case "point":
                            this.calc = function(t, e) { var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                                    n = this.el.array().valueOf();
                                n[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], n[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1], this.el.plot(n) } }
                    this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t }), SVG.on(window, "touchmove.resize", (function(t) { e.update(t || window.event) })), SVG.on(window, "touchend.resize", (function() { e.done() })), SVG.on(window, "mousemove.resize", (function(t) { e.update(t || window.event) })), SVG.on(window, "mouseup.resize", (function() { e.done() })) }, t.prototype.update = function(t) { if (t) { var e = this._extractPosition(t),
                            i = this.transformPoint(e.x, e.y),
                            n = i.x - this.parameters.p.x,
                            a = i.y - this.parameters.p.y;
                        this.lastUpdateCall = [n, a], this.calc(n, a), this.el.fire("resizing", { dx: n, dy: a, event: t }) } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]) }, t.prototype.done = function() { this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone") }, t.prototype.snapToGrid = function(t, e, i, n) { var a; return void 0 !== n ? a = [(i + t) % this.options.snapToGrid, (n + e) % this.options.snapToGrid] : (i = null == i ? 3 : i, a = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t < 0 && (a[0] -= this.options.snapToGrid), e < 0 && (a[1] -= this.options.snapToGrid), t -= Math.abs(a[0]) < this.options.snapToGrid / 2 ? a[0] : a[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(a[1]) < this.options.snapToGrid / 2 ? a[1] : a[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, n) }, t.prototype.constraintToBox = function(t, e, i, n) { var a, s, o = this.options.constraint || {}; return void 0 !== n ? (a = i, s = n) : (a = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), s = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== o.minX && a + t < o.minX && (t = o.minX - a), void 0 !== o.maxX && a + t > o.maxX && (t = o.maxX - a), void 0 !== o.minY && s + e < o.minY && (e = o.minY - s), void 0 !== o.maxY && s + e > o.maxY && (e = o.maxY - s), [t, e] }, t.prototype.checkAspectRatio = function(t, e) { if (!this.options.saveAspectRatio) return t; var i = t.slice(),
                        n = this.parameters.box.width / this.parameters.box.height,
                        a = this.parameters.box.width + t[0],
                        s = this.parameters.box.height - t[1],
                        o = a / s; return o < n ? (i[1] = a / n - this.parameters.box.height, e && (i[1] = -i[1])) : o > n && (i[0] = this.parameters.box.width - s * n, e && (i[0] = -i[0])), i }, SVG.extend(SVG.Element, { resize: function(e) { return (this.remember("_resizeHandler") || new t(this)).init(e || {}), this } }), SVG.Element.prototype.resize.defaults = { snapToAngle: .1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 } }).call(this) }(), void 0 === window.Apex && (window.Apex = {});
    var Nt = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "initModules", value: function() { this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new m(this.ctx), this.ctx.axes = new $(this.ctx), this.ctx.core = new Dt(this.ctx.el, this.ctx), this.ctx.config = new E({}), this.ctx.data = new X(this.ctx), this.ctx.grid = new j(this.ctx), this.ctx.graphics = new v(this.ctx), this.ctx.coreUtils = new b(this.ctx), this.ctx.crosshairs = new K(this.ctx), this.ctx.events = new U(this.ctx), this.ctx.exports = new Y(this.ctx), this.ctx.localization = new q(this.ctx), this.ctx.options = new A, this.ctx.responsive = new J(this.ctx), this.ctx.series = new F(this.ctx), this.ctx.theme = new Q(this.ctx), this.ctx.formatters = new H(this.ctx), this.ctx.titleSubtitle = new tt(this.ctx), this.ctx.legend = new rt(this.ctx), this.ctx.toolbar = new lt(this.ctx), this.ctx.tooltip = new mt(this.ctx), this.ctx.dimensions = new st(this.ctx), this.ctx.updateHelpers = new Rt(this.ctx), this.ctx.zoomPanSelection = new ht(this.ctx), this.ctx.w.globals.tooltip = new mt(this.ctx) } }]), t }(),
        Ft = function() {
            function t(e) { n(this, t), this.ctx = e, this.w = e.w } return s(t, [{ key: "clear", value: function(t) { var e = t.isUpdating;
                    this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e }) } }, { key: "killSVG", value: function(t) { t.each((function(t, e) { this.removeClass("*"), this.off(), this.stop() }), !0), t.ungroup(), t.clear() } }, { key: "clearDomElements", value: function(t) { var e = this,
                        i = t.isUpdating,
                        n = this.w.globals.dom.Paper.node;
                    n.parentNode && n.parentNode.parentNode && !i && (n.parentNode.parentNode.style.minHeight = "unset"); var a = this.w.globals.dom.baseEl;
                    a && this.ctx.eventList.forEach((function(t) { a.removeEventListener(t, e.ctx.events.documentEvent) })); var s = this.w.globals.dom; if (null !== this.ctx.el)
                        for (; this.ctx.el.firstChild;) this.ctx.el.removeChild(this.ctx.el.firstChild);
                    this.killSVG(s.Paper), s.Paper.remove(), s.elWrap = null, s.elGraphical = null, s.elAnnotations = null, s.elLegendWrap = null, s.baseEl = null, s.elGridRect = null, s.elGridRectMask = null, s.elGridRectMarkerMask = null, s.elForecastMask = null, s.elNonForecastMask = null, s.elDefs = null } }]), t }(),
        Xt = new WeakMap,
        Ht = function() {
            function t(e, i) { n(this, t), this.opts = i, this.ctx = this, this.w = new I(i).init(), this.el = e, this.w.globals.cuid = g.randomId(), this.w.globals.chartID = this.w.config.chart.id ? g.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Nt(this).initModules(), this.create = g.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this) } return s(t, [{ key: "render", value: function() { var t = this; return new Promise((function(e, i) { if (null !== t.el) { void 0 === Apex._chartInstances && (Apex._chartInstances = []), t.w.config.chart.id && Apex._chartInstances.push({ id: t.w.globals.chartID, group: t.w.config.chart.group, chart: t }), t.setLocale(t.w.config.chart.defaultLocale); var n = t.w.config.chart.events.beforeMount; if ("function" == typeof n && n(t, t.w), t.events.fireEvent("beforeMount", [t, t.w]), window.addEventListener("resize", t.windowResizeHandler), function(t, e) { var i = !1; if (t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) { var n = t.getBoundingClientRect(); "none" !== t.style.display && 0 !== n.width || (i = !0) } var a = new ResizeObserver((function(n) { i && e.call(t, n), i = !0 }));
                                    t.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t.children).forEach((function(t) { return a.observe(t) })) : a.observe(t), Xt.set(e, a) }(t.el.parentNode, t.parentResizeHandler), !t.css) { var a = t.el.getRootNode && t.el.getRootNode(),
                                    s = g.is("ShadowRoot", a),
                                    o = t.el.ownerDocument,
                                    r = o.getElementById("apexcharts-css");!s && r || (t.css = document.createElement("style"), t.css.id = "apexcharts-css", t.css.textContent = '@keyframes opaque {\n  0% {\n      opacity: 0\n  }\n\n  to {\n      opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n  0%,to {\n      opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\n.legend-mouseover-inactive {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255,255,255,.96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30,30,30,.8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0,0,0,.7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0!important\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0,0,0,.7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n      opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {\n  opacity: 0\n}\n\n.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,.resize-triggers,.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n', s ? a.prepend(t.css) : o.head.appendChild(t.css)) } var l = t.create(t.w.config.series, {}); if (!l) return e(t);
                            t.mount(l).then((function() { "function" == typeof t.w.config.chart.events.mounted && t.w.config.chart.events.mounted(t, t.w), t.events.fireEvent("mounted", [t, t.w]), e(l) })).catch((function(t) { i(t) })) } else i(new Error("Element not found")) })) } }, { key: "create", value: function(t, e) { var i = this.w;
                    new Nt(this).initModules(); var n = this.w.globals; if (n.noData = !1, n.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric && new M(i.config).convertCatToNumericXaxis(i.config, this.ctx), null === this.el) return n.animationEnded = !0, null; if (this.core.setupElements(), "treemap" === i.config.chart.type && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), 0 === n.svgWidth) return n.animationEnded = !0, null; var a = b.checkComboSeries(t);
                    n.comboCharts = a.comboCharts, n.comboBarCount = a.comboBarCount; var s = t.every((function(t) { return t.data && 0 === t.data.length }));
                    (0 === t.length || s) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new D(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), n.noData && n.collapsedSeries.length !== n.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), n.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), new b(this).getLargestMarkerSize(), this.dimensions.plotCoords(); var o = this.core.xySettings();
                    this.grid.createGridMask(); var r = this.core.plotChartType(t, o),
                        l = new N(this);
                    l.bringForward(), i.config.dataLabels.background.enabled && l.dataLabelsBackground(), this.core.shiftGraphPosition(); var h = { plot: { left: i.globals.translateX, top: i.globals.translateY, width: i.globals.gridWidth, height: i.globals.gridHeight } }; return { elGraph: r, xyRatios: o, elInner: i.globals.dom.elGraphical, dimensions: h } } }, { key: "mount", value: function() { var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = this,
                        n = i.w; return new Promise((function(a, s) { if (null === i.el) return s(new Error("Not enough data to display or target element not found"));
                        (null === e || n.globals.allSeriesCollapsed) && i.series.handleNoData(), i.grid = new j(i); var o = i.grid.drawGrid(); "treemap" !== n.config.chart.type && i.axes.drawAxis(n.config.chart.type, o), i.annotations = new C(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), "back" === n.config.grid.position && o && n.globals.dom.elGraphical.add(o.el); var r = new W(t.ctx, o),
                            l = new Z(t.ctx, o); if (null !== o && (r.xAxisLabelCorrections(o.xAxisTickWidth), l.setYAxisTextAlignments(), n.config.yaxis.map((function(t, e) {-1 === n.globals.ignoreYAxisIndexes.indexOf(e) && l.yAxisTitleRotate(e, t.opposite) }))), "back" === n.config.annotations.position && (n.globals.dom.Paper.add(n.globals.dom.elAnnotations), i.annotations.drawAxesAnnotations()), Array.isArray(e.elGraph))
                            for (var h = 0; h < e.elGraph.length; h++) n.globals.dom.elGraphical.add(e.elGraph[h]);
                        else n.globals.dom.elGraphical.add(e.elGraph); if ("front" === n.config.grid.position && o && n.globals.dom.elGraphical.add(o.el), o && o.elGridBorders && o.elGridBorders.node && n.globals.dom.elGraphical.add(o.elGridBorders), "front" === n.config.xaxis.crosshairs.position && i.crosshairs.drawXCrosshairs(), "front" === n.config.yaxis[0].crosshairs.position && i.crosshairs.drawYCrosshairs(), "front" === n.config.annotations.position && (n.globals.dom.Paper.add(n.globals.dom.elAnnotations), i.annotations.drawAxesAnnotations()), !n.globals.noData) { if (n.config.tooltip.enabled && !n.globals.noData && i.w.globals.tooltip.drawTooltip(e.xyRatios), n.globals.axisCharts && (n.globals.isXNumeric || n.config.xaxis.convertedCatToNumeric || n.globals.isRangeBar))(n.config.chart.zoom.enabled || n.config.chart.selection && n.config.chart.selection.enabled || n.config.chart.pan && n.config.chart.pan.enabled) && i.zoomPanSelection.init({ xyRatios: e.xyRatios });
                            else { var c = n.config.chart.toolbar.tools;
                                ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((function(t) { c[t] = !1 })) }
                            n.config.chart.toolbar.show && !n.globals.allSeriesCollapsed && i.toolbar.createToolbar() }
                        n.globals.memory.methodsToExec.length > 0 && n.globals.memory.methodsToExec.forEach((function(t) { t.method(t.params, !1, t.context) })), n.globals.axisCharts || n.globals.noData || i.core.resizeNonAxisCharts(), a(i) })) } }, { key: "destroy", value: function() { var t, e;
                    window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t = this.parentResizeHandler, (e = Xt.get(t)) && (e.disconnect(), Xt.delete(t)); var i = this.w.config.chart.id;
                    i && Apex._chartInstances.forEach((function(t, e) { t.id === g.escapeString(i) && Apex._chartInstances.splice(e, 1) })), new Ft(this.ctx).clear({ isUpdating: !1 }) } }, { key: "updateOptions", value: function(t) { var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        o = this.w; return o.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map((function(t, i) { return e.updateHelpers._extendSeries(t, i) }))), this.updateHelpers.revertDefaultAxisMinMax()), t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)), t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), o.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, i, n, a, s) } }, { key: "updateSeries", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i) } }, { key: "appendSeries", value: function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = this.w.config.series.slice(); return n.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(n, e, i) } }, { key: "appendData", value: function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this;
                    i.w.globals.dataChanged = !0, i.series.getPreviousPaths(); for (var n = i.w.config.series.slice(), a = 0; a < n.length; a++)
                        if (null !== t[a] && void 0 !== t[a])
                            for (var s = 0; s < t[a].data.length; s++) n[a].data.push(t[a].data[s]);
                    return i.w.config.series = n, e && (i.w.globals.initialSeries = g.clone(i.w.config.series)), this.update() } }, { key: "update", value: function(t) { var e = this; return new Promise((function(i, n) { new Ft(e.ctx).clear({ isUpdating: !0 }); var a = e.create(e.w.config.series, t); if (!a) return i(e);
                        e.mount(a).then((function() { "function" == typeof e.w.config.chart.events.updated && e.w.config.chart.events.updated(e, e.w), e.events.fireEvent("updated", [e, e.w]), e.w.globals.isDirty = !0, i(e) })).catch((function(t) { n(t) })) })) } }, { key: "getSyncedCharts", value: function() { var t = this.getGroupedCharts(),
                        e = [this]; return t.length && (e = [], t.forEach((function(t) { e.push(t) }))), e } }, { key: "getGroupedCharts", value: function() { var t = this; return Apex._chartInstances.filter((function(t) { if (t.group) return !0 })).map((function(e) { return t.w.config.chart.group === e.group ? e.chart : t })) } }, { key: "toggleSeries", value: function(t) { return this.series.toggleSeries(t) } }, { key: "highlightSeriesOnLegendHover", value: function(t, e) { return this.series.toggleSeriesOnHover(t, e) } }, { key: "showSeries", value: function(t) { this.series.showSeries(t) } }, { key: "hideSeries", value: function(t) { this.series.hideSeries(t) } }, { key: "resetSeries", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.series.resetSeries(t, e) } }, { key: "addEventListener", value: function(t, e) { this.events.addEventListener(t, e) } }, { key: "removeEventListener", value: function(t, e) { this.events.removeEventListener(t, e) } }, { key: "addXaxisAnnotation", value: function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        n = this;
                    i && (n = i), n.annotations.addXaxisAnnotationExternal(t, e, n) } }, { key: "addYaxisAnnotation", value: function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        n = this;
                    i && (n = i), n.annotations.addYaxisAnnotationExternal(t, e, n) } }, { key: "addPointAnnotation", value: function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        n = this;
                    i && (n = i), n.annotations.addPointAnnotationExternal(t, e, n) } }, { key: "clearAnnotations", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        e = this;
                    t && (e = t), e.annotations.clearAnnotations(e) } }, { key: "removeAnnotation", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        i = this;
                    e && (i = e), i.annotations.removeAnnotation(i, t) } }, { key: "getChartArea", value: function() { return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner") } }, { key: "getSeriesTotalXRange", value: function(t, e) { return this.coreUtils.getSeriesTotalsXRange(t, e) } }, { key: "getHighestValueInSeries", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = new G(this.ctx); return e.getMinYMaxY(t).highestY } }, { key: "getLowestValueInSeries", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = new G(this.ctx); return e.getMinYMaxY(t).lowestY } }, { key: "getSeriesTotal", value: function() { return this.w.globals.seriesTotals } }, { key: "toggleDataPointSelection", value: function(t, e) { return this.updateHelpers.toggleDataPointSelection(t, e) } }, { key: "zoomX", value: function(t, e) { this.ctx.toolbar.zoomUpdateOptions(t, e) } }, { key: "setLocale", value: function(t) { this.localization.setCurrentLocaleValues(t) } }, { key: "dataURI", value: function(t) { return new Y(this.ctx).dataURI(t) } }, { key: "exportToCSV", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = new Y(this.ctx); return e.exportToCSV(t) } }, { key: "paper", value: function() { return this.w.globals.dom.Paper } }, { key: "_parentResizeCallback", value: function() { this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize() } }, { key: "_windowResize", value: function() { var t = this;
                    clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout((function() { t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.ctx.update() }), 150) } }, { key: "_windowResizeHandler", value: function() { var t = this.w.config.chart.redrawOnWindowResize; "function" == typeof t && (t = t()), t && this._windowResize() } }], [{ key: "getChartByID", value: function(t) { var e = g.escapeString(t),
                        i = Apex._chartInstances.filter((function(t) { return t.id === e }))[0]; return i && i.chart } }, { key: "initOnLoad", value: function() { for (var e = document.querySelectorAll("[data-apexcharts]"), i = 0; i < e.length; i++) new t(e[i], JSON.parse(e[i].getAttribute("data-options"))).render() } }, { key: "exec", value: function(t, e) { var i = this.getChartByID(t); if (i) { i.w.globals.isExecCalled = !0; var n = null; if (-1 !== i.publicMethods.indexOf(e)) { for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), o = 2; o < a; o++) s[o - 2] = arguments[o];
                            n = i[e].apply(i, s) } return n } } }, { key: "merge", value: function(t, e) { return g.extend(t, e) } }]), t }();
    return Ht
})),
function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.counterUp = e() : t.counterUp = e() }(window, (function() { return function(t) { var e = {};

        function i(n) { if (e[n]) return e[n].exports; var a = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports } return i.m = t, i.c = e, i.d = function(t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var a in t) i.d(n, a, function(e) { return t[e] }.bind(null, a)); return n }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 0) }([function(t, e, i) { "use strict";
        i.r(e), i.d(e, "divideNumbers", (function() { return a })), i.d(e, "hasComma", (function() { return s })), i.d(e, "isFloat", (function() { return o })), i.d(e, "decimalPlaces", (function() { return r })), e.default = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = e.action,
                s = void 0 === i ? "start" : i,
                o = e.duration,
                r = void 0 === o ? 1e3 : o,
                l = e.delay,
                h = void 0 === l ? 16 : l,
                c = e.lang,
                d = void 0 === c ? void 0 : c; if ("stop" !== s) { if (n(t), /[0-9]/.test(t.innerHTML)) { var u = a(t.innerHTML, { duration: r || t.getAttribute("data-duration"), lang: d || document.querySelector("html").getAttribute("lang") || void 0, delay: h || t.getAttribute("data-delay") });
                    t._countUpOrigInnerHTML = t.innerHTML, t.innerHTML = u[0], t.style.visibility = "visible", t.countUpTimeout = setTimeout((function e() { t.innerHTML = u.shift(), u.length ? (clearTimeout(t.countUpTimeout), t.countUpTimeout = setTimeout(e, h)) : t._countUpOrigInnerHTML = void 0 }), h) } } else n(t) }; var n = function(t) { clearTimeout(t.countUpTimeout), t._countUpOrigInnerHTML && (t.innerHTML = t._countUpOrigInnerHTML, t._countUpOrigInnerHTML = void 0), t.style.visibility = "" },
            a = function(t) { for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.duration, n = void 0 === i ? 1e3 : i, a = e.delay, s = void 0 === a ? 16 : a, o = e.lang, r = void 0 === o ? void 0 : o, l = n / s, h = t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), c = [], d = 0; d < l; d++) c.push(""); for (var u = 0; u < h.length; u++)
                    if (/([0-9.][,.0-9]*[0-9]*)/.test(h[u]) && !/<[^>]+>/.test(h[u])) { var p = h[u],
                            f = /[0-9]+,[0-9]+/.test(p);
                        p = p.replace(/,/g, ""); for (var g = /^[0-9]+\.[0-9]+$/.test(p), m = g ? (p.split(".")[1] || []).length : 0, x = c.length - 1, v = l; v >= 1; v--) { var b = parseInt(p / l * v, 10);
                            g && (b = parseFloat(p / l * v).toFixed(m), b = parseFloat(b).toLocaleString(r)), f && (b = b.toLocaleString(r)), c[x--] += b } } else
                        for (var y = 0; y < l; y++) c[y] += h[u];
                return c[c.length] = t.toString(), c },
            s = function(t) { return /[0-9]+,[0-9]+/.test(t) },
            o = function(t) { return /^[0-9]+\.[0-9]+$/.test(t) },
            r = function(t) { return o(t) ? (t.split(".")[1] || []).length : 0 } }]) })),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {}) }(this, (function(t) { "use strict";

    function e(t) { for (var e, i, n = 1, a = arguments.length; n < a; n++)
            for (e in i = arguments[n]) t[e] = i[e]; return t } var i = Object.create || function(t) { return n.prototype = t, new n };

    function n() {}

    function a(t, e) { var i = Array.prototype.slice; if (t.bind) return t.bind.apply(t, i.call(arguments, 1)); var n = i.call(arguments, 2); return function() { return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments) } } var s = 0;

    function o(t) { return t._leaflet_id = t._leaflet_id || ++s, t._leaflet_id }

    function r(t, e, i) { var n, a, s = function() { n = !1, a && (o.apply(i, a), a = !1) },
            o = function() { n ? a = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0) }; return o }

    function l(t, e, i) { var n = e[1],
            a = e[0],
            s = n - a; return t === n && i ? t : ((t - a) % s + s) % s + a }

    function h() { return !1 }

    function c(t, e) { var i = Math.pow(10, void 0 === e ? 6 : e); return Math.round(t * i) / i }

    function d(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

    function u(t) { return d(t).split(/\s+/) }

    function p(t, e) { for (var n in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? i(t.options) : {}), e) t.options[n] = e[n]; return t.options }

    function f(t, e, i) { var n = []; for (var a in t) n.push(encodeURIComponent(i ? a.toUpperCase() : a) + "=" + encodeURIComponent(t[a])); return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&") } var g = /\{ *([\w_-]+) *\}/g;

    function m(t, e) { return t.replace(g, (function(t, i) { var n = e[i]; if (void 0 === n) throw new Error("No value provided for variable " + t); return "function" == typeof n && (n = n(e)), n })) } var x = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) };

    function v(t, e) { for (var i = 0; i < t.length; i++)
            if (t[i] === e) return i;
        return -1 } var b = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

    function y(t) { return window["webkit" + t] || window["moz" + t] || window["ms" + t] } var w = 0;

    function _(t) { var e = +new Date,
            i = Math.max(0, 16 - (e - w)); return w = e + i, window.setTimeout(t, i) } var k = window.requestAnimationFrame || y("RequestAnimationFrame") || _,
        S = window.cancelAnimationFrame || y("CancelAnimationFrame") || y("CancelRequestAnimationFrame") || function(t) { window.clearTimeout(t) };

    function A(t, e, i) { if (!i || k !== _) return k.call(window, a(t, e));
        t.call(e) }

    function C(t) { t && S.call(window, t) } var P = { extend: e, create: i, bind: a, lastId: s, stamp: o, throttle: r, wrapNum: l, falseFn: h, formatNum: c, trim: d, splitWords: u, setOptions: p, getParamString: f, template: m, isArray: x, indexOf: v, emptyImageUrl: b, requestFn: k, cancelFn: S, requestAnimFrame: A, cancelAnimFrame: C };

    function T() {}
    T.extend = function(t) {
        function n() { this.initialize && this.initialize.apply(this, arguments), this.callInitHooks() } var a = n.__super__ = this.prototype,
            s = i(a); for (var o in (s.constructor = n).prototype = s, this) Object.prototype.hasOwnProperty.call(this, o) && "prototype" !== o && "__super__" !== o && (n[o] = this[o]); return t.statics && (e(n, t.statics), delete t.statics), t.includes && (function(t) { if ("undefined" != typeof L && L && L.Mixin) { t = x(t) ? t : [t]; for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack) } }(t.includes), e.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = e(i(s.options), t.options)), e(s, t), s._initHooks = [], s.callInitHooks = function() { if (!this._initHooksCalled) { a.callInitHooks && a.callInitHooks.call(this), this._initHooksCalled = !0; for (var t = 0, e = s._initHooks.length; t < e; t++) s._initHooks[t].call(this) } }, n }, T.include = function(t) { return e(this.prototype, t), this }, T.mergeOptions = function(t) { return e(this.prototype.options, t), this }, T.addInitHook = function(t) { var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function() { this[t].apply(this, e) }; return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this }; var M = { on: function(t, e, i) { if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], e);
            else
                for (var a = 0, s = (t = u(t)).length; a < s; a++) this._on(t[a], e, i); return this }, off: function(t, e, i) { if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], e);
                else
                    for (var a = 0, s = (t = u(t)).length; a < s; a++) this._off(t[a], e, i);
            else delete this._events; return this }, _on: function(t, e, i) { this._events = this._events || {}; var n = this._events[t];
            n || (n = [], this._events[t] = n), i === this && (i = void 0); for (var a = { fn: e, ctx: i }, s = n, o = 0, r = s.length; o < r; o++)
                if (s[o].fn === e && s[o].ctx === i) return;
            s.push(a) }, _off: function(t, e, i) { var n, a, s; if (this._events && (n = this._events[t]))
                if (e) { if (i === this && (i = void 0), n)
                        for (a = 0, s = n.length; a < s; a++) { var o = n[a]; if (o.ctx === i && o.fn === e) return o.fn = h, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(a, 1) } } else { for (a = 0, s = n.length; a < s; a++) n[a].fn = h;
                    delete this._events[t] } }, fire: function(t, i, n) { if (!this.listens(t, n)) return this; var a = e({}, i, { type: t, target: this, sourceTarget: i && i.sourceTarget || this }); if (this._events) { var s = this._events[t]; if (s) { this._firingCount = this._firingCount + 1 || 1; for (var o = 0, r = s.length; o < r; o++) { var l = s[o];
                        l.fn.call(l.ctx || this, a) }
                    this._firingCount-- } } return n && this._propagateEvent(a), this }, listens: function(t, e) { var i = this._events && this._events[t]; if (i && i.length) return !0; if (e)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, e)) return !0;
            return !1 }, once: function(t, e, i) { if ("object" == typeof t) { for (var n in t) this.once(n, t[n], e); return this } var s = a((function() { this.off(t, e, i).off(t, s, i) }), this); return this.on(t, e, i).on(t, s, i) }, addEventParent: function(t) { return this._eventParents = this._eventParents || {}, this._eventParents[o(t)] = t, this }, removeEventParent: function(t) { return this._eventParents && delete this._eventParents[o(t)], this }, _propagateEvent: function(t) { for (var i in this._eventParents) this._eventParents[i].fire(t.type, e({ layer: t.target, propagatedFrom: t.target }, t), !0) } };
    M.addEventListener = M.on, M.removeEventListener = M.clearAllEventListeners = M.off, M.addOneTimeEventListener = M.once, M.fireEvent = M.fire, M.hasEventListeners = M.listens; var E = T.extend(M);

    function z(t, e, i) { this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e } var I = Math.trunc || function(t) { return 0 < t ? Math.floor(t) : Math.ceil(t) };

    function O(t, e, i) { return t instanceof z ? t : x(t) ? new z(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new z(t.x, t.y) : new z(t, e, i) }

    function D(t, e) { if (t)
            for (var i = e ? [t, e] : t, n = 0, a = i.length; n < a; n++) this.extend(i[n]) }

    function R(t, e) { return !t || t instanceof D ? t : new D(t, e) }

    function N(t, e) { if (t)
            for (var i = e ? [t, e] : t, n = 0, a = i.length; n < a; n++) this.extend(i[n]) }

    function F(t, e) { return t instanceof N ? t : new N(t, e) }

    function X(t, e, i) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i) }

    function H(t, e, i) { return t instanceof X ? t : x(t) && "object" != typeof t[0] ? 3 === t.length ? new X(t[0], t[1], t[2]) : 2 === t.length ? new X(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new X(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new X(t, e, i) }
    z.prototype = { clone: function() { return new z(this.x, this.y) }, add: function(t) { return this.clone()._add(O(t)) }, _add: function(t) { return this.x += t.x, this.y += t.y, this }, subtract: function(t) { return this.clone()._subtract(O(t)) }, _subtract: function(t) { return this.x -= t.x, this.y -= t.y, this }, divideBy: function(t) { return this.clone()._divideBy(t) }, _divideBy: function(t) { return this.x /= t, this.y /= t, this }, multiplyBy: function(t) { return this.clone()._multiplyBy(t) }, _multiplyBy: function(t) { return this.x *= t, this.y *= t, this }, scaleBy: function(t) { return new z(this.x * t.x, this.y * t.y) }, unscaleBy: function(t) { return new z(this.x / t.x, this.y / t.y) }, round: function() { return this.clone()._round() }, _round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, floor: function() { return this.clone()._floor() }, _floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, ceil: function() { return this.clone()._ceil() }, _ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }, trunc: function() { return this.clone()._trunc() }, _trunc: function() { return this.x = I(this.x), this.y = I(this.y), this }, distanceTo: function(t) { var e = (t = O(t)).x - this.x,
                i = t.y - this.y; return Math.sqrt(e * e + i * i) }, equals: function(t) { return (t = O(t)).x === this.x && t.y === this.y }, contains: function(t) { return t = O(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y) }, toString: function() { return "Point(" + c(this.x) + ", " + c(this.y) + ")" } }, D.prototype = { extend: function(t) { return t = O(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this }, getCenter: function(t) { return new z((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t) }, getBottomLeft: function() { return new z(this.min.x, this.max.y) }, getTopRight: function() { return new z(this.max.x, this.min.y) }, getTopLeft: function() { return this.min }, getBottomRight: function() { return this.max }, getSize: function() { return this.max.subtract(this.min) }, contains: function(t) { var e, i; return (t = ("number" == typeof t[0] || t instanceof z ? O : R)(t)) instanceof D ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y }, intersects: function(t) { t = R(t); var e = this.min,
                i = this.max,
                n = t.min,
                a = t.max,
                s = a.x >= e.x && n.x <= i.x,
                o = a.y >= e.y && n.y <= i.y; return s && o }, overlaps: function(t) { t = R(t); var e = this.min,
                i = this.max,
                n = t.min,
                a = t.max,
                s = a.x > e.x && n.x < i.x,
                o = a.y > e.y && n.y < i.y; return s && o }, isValid: function() { return !(!this.min || !this.max) } }, N.prototype = { extend: function(t) { var e, i, n = this._southWest,
                a = this._northEast; if (t instanceof X) i = e = t;
            else { if (!(t instanceof N)) return t ? this.extend(H(t) || F(t)) : this; if (e = t._southWest, i = t._northEast, !e || !i) return this } return n || a ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), a.lat = Math.max(i.lat, a.lat), a.lng = Math.max(i.lng, a.lng)) : (this._southWest = new X(e.lat, e.lng), this._northEast = new X(i.lat, i.lng)), this }, pad: function(t) { var e = this._southWest,
                i = this._northEast,
                n = Math.abs(e.lat - i.lat) * t,
                a = Math.abs(e.lng - i.lng) * t; return new N(new X(e.lat - n, e.lng - a), new X(i.lat + n, i.lng + a)) }, getCenter: function() { return new X((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2) }, getSouthWest: function() { return this._southWest }, getNorthEast: function() { return this._northEast }, getNorthWest: function() { return new X(this.getNorth(), this.getWest()) }, getSouthEast: function() { return new X(this.getSouth(), this.getEast()) }, getWest: function() { return this._southWest.lng }, getSouth: function() { return this._southWest.lat }, getEast: function() { return this._northEast.lng }, getNorth: function() { return this._northEast.lat }, contains: function(t) { t = ("number" == typeof t[0] || t instanceof X || "lat" in t ? H : F)(t); var e, i, n = this._southWest,
                a = this._northEast; return t instanceof N ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= a.lat && e.lng >= n.lng && i.lng <= a.lng }, intersects: function(t) { t = F(t); var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                a = t.getNorthEast(),
                s = a.lat >= e.lat && n.lat <= i.lat,
                o = a.lng >= e.lng && n.lng <= i.lng; return s && o }, overlaps: function(t) { t = F(t); var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                a = t.getNorthEast(),
                s = a.lat > e.lat && n.lat < i.lat,
                o = a.lng > e.lng && n.lng < i.lng; return s && o }, toBBoxString: function() { return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",") }, equals: function(t, e) { return !!t && (t = F(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) }, isValid: function() { return !(!this._southWest || !this._northEast) } }; var B, Y = { latLngToPoint: function(t, e) { var i = this.projection.project(t),
                    n = this.scale(e); return this.transformation._transform(i, n) }, pointToLatLng: function(t, e) { var i = this.scale(e),
                    n = this.transformation.untransform(t, i); return this.projection.unproject(n) }, project: function(t) { return this.projection.project(t) }, unproject: function(t) { return this.projection.unproject(t) }, scale: function(t) { return 256 * Math.pow(2, t) }, zoom: function(t) { return Math.log(t / 256) / Math.LN2 }, getProjectedBounds: function(t) { if (this.infinite) return null; var e = this.projection.bounds,
                    i = this.scale(t); return new D(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i)) }, infinite: !(X.prototype = { equals: function(t, e) { return !!t && (t = H(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e)) }, toString: function(t) { return "LatLng(" + c(this.lat, t) + ", " + c(this.lng, t) + ")" }, distanceTo: function(t) { return W.distance(this, H(t)) }, wrap: function() { return W.wrapLatLng(this) }, toBounds: function(t) { var e = 180 * t / 40075017,
                        i = e / Math.cos(Math.PI / 180 * this.lat); return F([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]) }, clone: function() { return new X(this.lat, this.lng, this.alt) } }), wrapLatLng: function(t) { var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng; return new X(this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat, e, t.alt) }, wrapLatLngBounds: function(t) { var e = t.getCenter(),
                    i = this.wrapLatLng(e),
                    n = e.lat - i.lat,
                    a = e.lng - i.lng; if (0 == n && 0 == a) return t; var s = t.getSouthWest(),
                    o = t.getNorthEast(); return new N(new X(s.lat - n, s.lng - a), new X(o.lat - n, o.lng - a)) } },
        W = e({}, Y, { wrapLng: [-180, 180], R: 6371e3, distance: function(t, e) { var i = Math.PI / 180,
                    n = t.lat * i,
                    a = e.lat * i,
                    s = Math.sin((e.lat - t.lat) * i / 2),
                    o = Math.sin((e.lng - t.lng) * i / 2),
                    r = s * s + Math.cos(n) * Math.cos(a) * o * o,
                    l = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r)); return this.R * l } }),
        j = 6378137,
        V = { R: j, MAX_LATITUDE: 85.0511287798, project: function(t) { var e = Math.PI / 180,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    a = Math.sin(n * e); return new z(this.R * t.lng * e, this.R * Math.log((1 + a) / (1 - a)) / 2) }, unproject: function(t) { var e = 180 / Math.PI; return new X((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R) }, bounds: new D([-(B = j * Math.PI), -B], [B, B]) };

    function G(t, e, i, n) { if (x(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
        this._a = t, this._b = e, this._c = i, this._d = n }

    function Z(t, e, i, n) { return new G(t, e, i, n) }
    G.prototype = { transform: function(t, e) { return this._transform(t.clone(), e) }, _transform: function(t, e) { return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t }, untransform: function(t, e) { return e = e || 1, new z((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c) } }; var U, q = e({}, W, { code: "EPSG:3857", projection: V, transformation: Z(U = .5 / (Math.PI * V.R), .5, -U, .5) }),
        $ = e({}, q, { code: "EPSG:900913" });

    function K(t) { return document.createElementNS("http://www.w3.org/2000/svg", t) }

    function J(t, e) { for (var i, n, a, s, o = "", r = 0, l = t.length; r < l; r++) { for (i = 0, n = (a = t[r]).length; i < n; i++) o += (i ? "L" : "M") + (s = a[i]).x + " " + s.y;
            o += e ? Mt ? "z" : "x" : "" } return o || "M0 0" } var Q = document.documentElement.style,
        tt = "ActiveXObject" in window,
        et = tt && !document.addEventListener,
        it = "msLaunchUri" in navigator && !("documentMode" in document),
        nt = zt("webkit"),
        at = zt("android"),
        st = zt("android 2") || zt("android 3"),
        ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        rt = at && zt("Google") && ot < 537 && !("AudioNode" in window),
        lt = !!window.opera,
        ht = !it && zt("chrome"),
        ct = zt("gecko") && !nt && !lt && !tt,
        dt = !ht && zt("safari"),
        ut = zt("phantom"),
        pt = "OTransition" in Q,
        ft = 0 === navigator.platform.indexOf("Win"),
        gt = tt && "transition" in Q,
        mt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !st,
        xt = "MozPerspective" in Q,
        vt = !window.L_DISABLE_3D && (gt || mt || xt) && !pt && !ut,
        bt = "undefined" != typeof orientation || zt("mobile"),
        yt = bt && nt,
        wt = bt && mt,
        _t = !window.PointerEvent && window.MSPointerEvent,
        kt = !(!window.PointerEvent && !_t),
        St = !window.L_NO_TOUCH && (kt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        At = bt && lt,
        Ct = bt && ct,
        Pt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
        Lt = function() { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                window.addEventListener("testPassiveEventSupport", h, e), window.removeEventListener("testPassiveEventSupport", h, e) } catch (t) {} return t }(),
        Tt = !!document.createElement("canvas").getContext,
        Mt = !(!document.createElementNS || !K("svg").createSVGRect),
        Et = !Mt && function() { try { var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>'; var e = t.firstChild; return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj } catch (t) { return !1 } }();

    function zt(t) { return 0 <= navigator.userAgent.toLowerCase().indexOf(t) } var It = { ie: tt, ielt9: et, edge: it, webkit: nt, android: at, android23: st, androidStock: rt, opera: lt, chrome: ht, gecko: ct, safari: dt, phantom: ut, opera12: pt, win: ft, ie3d: gt, webkit3d: mt, gecko3d: xt, any3d: vt, mobile: bt, mobileWebkit: yt, mobileWebkit3d: wt, msPointer: _t, pointer: kt, touch: St, mobileOpera: At, mobileGecko: Ct, retina: Pt, passiveEvents: Lt, canvas: Tt, svg: Mt, vml: Et },
        Ot = _t ? "MSPointerDown" : "pointerdown",
        Dt = _t ? "MSPointerMove" : "pointermove",
        Rt = _t ? "MSPointerUp" : "pointerup",
        Nt = _t ? "MSPointerCancel" : "pointercancel",
        Ft = {},
        Xt = !1;

    function Ht(t, e, i, n) {
        function s(t) { jt(t, r) } var o, r, l, h, c, d, u, p;

        function f(t) { t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || jt(t, h) } return "touchstart" === e ? (c = t, d = i, u = n, p = a((function(t) { t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Ne(t), jt(t, d) })), c["_leaflet_touchstart" + u] = p, c.addEventListener(Ot, p, !1), Xt || (document.addEventListener(Ot, Bt, !0), document.addEventListener(Dt, Yt, !0), document.addEventListener(Rt, Wt, !0), document.addEventListener(Nt, Wt, !0), Xt = !0)) : "touchmove" === e ? (h = i, (l = t)["_leaflet_touchmove" + n] = f, l.addEventListener(Dt, f, !1)) : "touchend" === e && (r = i, (o = t)["_leaflet_touchend" + n] = s, o.addEventListener(Rt, s, !1), o.addEventListener(Nt, s, !1)), this }

    function Bt(t) { Ft[t.pointerId] = t }

    function Yt(t) { Ft[t.pointerId] && (Ft[t.pointerId] = t) }

    function Wt(t) { delete Ft[t.pointerId] }

    function jt(t, e) { for (var i in t.touches = [], Ft) t.touches.push(Ft[i]);
        t.changedTouches = [t], e(t) } var Vt, Gt, Zt, Ut, qt, $t, Kt = _t ? "MSPointerDown" : kt ? "pointerdown" : "touchstart",
        Jt = _t ? "MSPointerUp" : kt ? "pointerup" : "touchend",
        Qt = "_leaflet_",
        te = me(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ee = me(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        ie = "webkitTransition" === ee || "OTransition" === ee ? ee + "End" : "transitionend";

    function ne(t) { return "string" == typeof t ? document.getElementById(t) : t }

    function ae(t, e) { var i, n = t.style[e] || t.currentStyle && t.currentStyle[e]; return n && "auto" !== n || !document.defaultView || (n = (i = document.defaultView.getComputedStyle(t, null)) ? i[e] : null), "auto" === n ? null : n }

    function se(t, e, i) { var n = document.createElement(t); return n.className = e || "", i && i.appendChild(n), n }

    function oe(t) { var e = t.parentNode;
        e && e.removeChild(t) }

    function re(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }

    function le(t) { var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t) }

    function he(t) { var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild) }

    function ce(t, e) { if (void 0 !== t.classList) return t.classList.contains(e); var i = fe(t); return 0 < i.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i) }

    function de(t, e) { var i; if (void 0 !== t.classList)
            for (var n = u(e), a = 0, s = n.length; a < s; a++) t.classList.add(n[a]);
        else ce(t, e) || pe(t, ((i = fe(t)) ? i + " " : "") + e) }

    function ue(t, e) { void 0 !== t.classList ? t.classList.remove(e) : pe(t, d((" " + fe(t) + " ").replace(" " + e + " ", " "))) }

    function pe(t, e) { void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e }

    function fe(t) { return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal }

    function ge(t, e) { "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function(t, e) { var i = !1,
                n = "DXImageTransform.Microsoft.Alpha"; try { i = t.filters.item(n) } catch (t) { if (1 === e) return }
            e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")" }(t, e) }

    function me(t) { for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in e) return t[i];
        return !1 }

    function xe(t, e, i) { var n = e || new z(0, 0);
        t.style[te] = (gt ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "") }

    function ve(t, e) { t._leaflet_pos = e, vt ? xe(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px") }

    function be(t) { return t._leaflet_pos || new z(0, 0) }

    function ye() { Pe(window, "dragstart", Ne) }

    function we() { Te(window, "dragstart", Ne) }

    function _e(t) { for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (ke(), $t = (qt = t).style.outline, t.style.outline = "none", Pe(window, "keydown", ke)) }

    function ke() { qt && (qt.style.outline = $t, $t = qt = void 0, Te(window, "keydown", ke)) }

    function Se(t) { for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body);); return t }

    function Ae(t) { var e = t.getBoundingClientRect(); return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e } }
    Ut = "onselectstart" in document ? (Zt = function() { Pe(window, "selectstart", Ne) }, function() { Te(window, "selectstart", Ne) }) : (Gt = me(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), Zt = function() { var t;
        Gt && (t = document.documentElement.style, Vt = t[Gt], t[Gt] = "none") }, function() { Gt && (document.documentElement.style[Gt] = Vt, Vt = void 0) }); var Ce = { TRANSFORM: te, TRANSITION: ee, TRANSITION_END: ie, get: ne, getStyle: ae, create: se, remove: oe, empty: re, toFront: le, toBack: he, hasClass: ce, addClass: de, removeClass: ue, setClass: pe, getClass: fe, setOpacity: ge, testProp: me, setTransform: xe, setPosition: ve, getPosition: be, disableTextSelection: Zt, enableTextSelection: Ut, disableImageDrag: ye, enableImageDrag: we, preventOutline: _e, restoreOutline: ke, getSizedParentNode: Se, getScale: Ae };

    function Pe(t, e, i, n) { if ("object" == typeof e)
            for (var a in e) ze(t, a, e[a], i);
        else
            for (var s = 0, o = (e = u(e)).length; s < o; s++) ze(t, e[s], i, n); return this } var Le = "_leaflet_events";

    function Te(t, e, i, n) { if ("object" == typeof e)
            for (var a in e) Ie(t, a, e[a], i);
        else if (e)
            for (var s = 0, o = (e = u(e)).length; s < o; s++) Ie(t, e[s], i, n);
        else { for (var r in t[Le]) Ie(t, r, t[Le][r]);
            delete t[Le] } return this }

    function Me() { return kt && !it && !dt } var Ee = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };

    function ze(t, e, i, n) { var a = e + o(i) + (n ? "_" + o(n) : ""); if (t[Le] && t[Le][a]) return this; var s, r, l, h, c, d, u = function(e) { return i.call(n || t, e || window.event) },
            p = u;

        function f(t) { if (kt) { if (!t.isPrimary) return; if ("mouse" === t.pointerType) return } else if (1 < t.touches.length) return; var e = Date.now(),
                i = e - (h || e);
            c = t.touches ? t.touches[0] : t, d = 0 < i && i <= 250, h = e }

        function g(t) { if (d && !c.cancelBubble) { if (kt) { if ("mouse" === t.pointerType) return; var e, i, n = {}; for (i in c) e = c[i], n[i] = e && e.bind ? e.bind(c) : e;
                    c = n }
                c.type = "dblclick", c.button = 0, r(c), h = null } }
        kt && 0 === e.indexOf("touch") ? Ht(t, e, u, a) : St && "dblclick" === e && !Me() ? (r = u, d = !1, (s = t)[Qt + Kt + (l = a)] = f, s[Qt + Jt + l] = g, s[Qt + "dblclick" + l] = r, s.addEventListener(Kt, f, !!Lt && { passive: !1 }), s.addEventListener(Jt, g, !!Lt && { passive: !1 }), s.addEventListener("dblclick", r, !1)) : "addEventListener" in t ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e ? t.addEventListener(Ee[e] || e, u, !!Lt && { passive: !1 }) : "mouseenter" === e || "mouseleave" === e ? (u = function(e) { e = e || window.event, Ve(t, e) && p(e) }, t.addEventListener(Ee[e], u, !1)) : t.addEventListener(e, p, !1) : "attachEvent" in t && t.attachEvent("on" + e, u), t[Le] = t[Le] || {}, t[Le][a] = u }

    function Ie(t, e, i, n) { var a, s, r, l, h, c, d, u, p = e + o(i) + (n ? "_" + o(n) : ""),
            f = t[Le] && t[Le][p]; if (!f) return this;
        kt && 0 === e.indexOf("touch") ? (u = (c = t)["_leaflet_" + (d = e) + p], "touchstart" === d ? c.removeEventListener(Ot, u, !1) : "touchmove" === d ? c.removeEventListener(Dt, u, !1) : "touchend" === d && (c.removeEventListener(Rt, u, !1), c.removeEventListener(Nt, u, !1))) : St && "dblclick" === e && !Me() ? (r = (a = t)[Qt + Kt + (s = p)], l = a[Qt + Jt + s], h = a[Qt + "dblclick" + s], a.removeEventListener(Kt, r, !!Lt && { passive: !1 }), a.removeEventListener(Jt, l, !!Lt && { passive: !1 }), a.removeEventListener("dblclick", h, !1)) : "removeEventListener" in t ? t.removeEventListener(Ee[e] || e, f, !1) : "detachEvent" in t && t.detachEvent("on" + e, f), t[Le][p] = null }

    function Oe(t) { return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, je(t), this }

    function De(t) { return ze(t, "wheel", Oe), this }

    function Re(t) { return Pe(t, "mousedown touchstart dblclick", Oe), ze(t, "click", We), this }

    function Ne(t) { return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this }

    function Fe(t) { return Ne(t), Oe(t), this }

    function Xe(t, e) { if (!e) return new z(t.clientX, t.clientY); var i = Ae(e),
            n = i.boundingClientRect; return new z((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop) } var He = ft && ht ? 2 * window.devicePixelRatio : ct ? window.devicePixelRatio : 1;

    function Be(t) { return it ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / He : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0 } var Ye = {};

    function We(t) { Ye[t.type] = !0 }

    function je(t) { var e = Ye[t.type]; return Ye[t.type] = !1, e }

    function Ve(t, e) { var i = e.relatedTarget; if (!i) return !0; try { for (; i && i !== t;) i = i.parentNode } catch (t) { return !1 } return i !== t } var Ge = { on: Pe, off: Te, stopPropagation: Oe, disableScrollPropagation: De, disableClickPropagation: Re, preventDefault: Ne, stop: Fe, getMousePosition: Xe, getWheelDelta: Be, fakeStop: We, skipped: je, isExternalTarget: Ve, addListener: Pe, removeListener: Te },
        Ze = E.extend({ run: function(t, e, i, n) { this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = be(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate() }, stop: function() { this._inProgress && (this._step(!0), this._complete()) }, _animate: function() { this._animId = A(this._animate, this), this._step() }, _step: function(t) { var e = new Date - this._startTime,
                    i = 1e3 * this._duration;
                e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete()) }, _runFrame: function(t, e) { var i = this._startPos.add(this._offset.multiplyBy(t));
                e && i._round(), ve(this._el, i), this.fire("step") }, _complete: function() { C(this._animId), this._inProgress = !1, this.fire("end") }, _easeOut: function(t) { return 1 - Math.pow(1 - t, this._easeOutPower) } }),
        Ue = E.extend({ options: { crs: q, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: !0, zoomAnimationThreshold: 4, fadeAnimation: !0, markerZoomAnimation: !0, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: !0 }, initialize: function(t, e) { e = p(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(H(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = ee && vt && !At && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Pe(this._proxy, ie, this._catchTransitionEnd, this)), this._addLayers(this.options.layers) }, setView: function(t, i, n) { return i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(H(t), i, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = e({ animate: n.animate }, n.zoom), n.pan = e({ animate: n.animate, duration: n.duration }, n.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, i), this) }, setZoom: function(t, e) { return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this) }, zoomIn: function(t, e) { return t = t || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e) }, zoomOut: function(t, e) { return t = t || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e) }, setZoomAround: function(t, e, i) { var n = this.getZoomScale(e),
                    a = this.getSize().divideBy(2),
                    s = (t instanceof z ? t : this.latLngToContainerPoint(t)).subtract(a).multiplyBy(1 - 1 / n),
                    o = this.containerPointToLatLng(a.add(s)); return this.setView(o, e, { zoom: i }) }, _getBoundsCenterZoom: function(t, e) { e = e || {}, t = t.getBounds ? t.getBounds() : F(t); var i = O(e.paddingTopLeft || e.padding || [0, 0]),
                    n = O(e.paddingBottomRight || e.padding || [0, 0]),
                    a = this.getBoundsZoom(t, !1, i.add(n)); if ((a = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, a) : a) === 1 / 0) return { center: t.getCenter(), zoom: a }; var s = n.subtract(i).divideBy(2),
                    o = this.project(t.getSouthWest(), a),
                    r = this.project(t.getNorthEast(), a); return { center: this.unproject(o.add(r).divideBy(2).add(s), a), zoom: a } }, fitBounds: function(t, e) { if (!(t = F(t)).isValid()) throw new Error("Bounds are not valid."); var i = this._getBoundsCenterZoom(t, e); return this.setView(i.center, i.zoom, e) }, fitWorld: function(t) { return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t) }, panTo: function(t, e) { return this.setView(t, this._zoom, { pan: e }) }, panBy: function(t, e) { return e = e || {}, (t = O(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Ze, this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate ? (de(this._mapPane, "leaflet-pan-anim"), i = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend"); var i }, flyTo: function(t, e, i) { if (!1 === (i = i || {}).animate || !vt) return this.setView(t, e, i);
                this._stop(); var n = this.project(this.getCenter()),
                    a = this.project(t),
                    s = this.getSize(),
                    o = this._zoom;
                t = H(t), e = void 0 === e ? o : e; var r = Math.max(s.x, s.y),
                    l = r * this.getZoomScale(o, e),
                    h = a.distanceTo(n) || 1,
                    c = 1.42,
                    d = c * c;

                function u(t) { var e = (l * l - r * r + (t ? -1 : 1) * d * d * h * h) / (2 * (t ? l : r) * d * h),
                        i = Math.sqrt(e * e + 1) - e; return i < 1e-9 ? -18 : Math.log(i) }

                function p(t) { return (Math.exp(t) - Math.exp(-t)) / 2 }

                function f(t) { return (Math.exp(t) + Math.exp(-t)) / 2 } var g = u(0);

                function m(t) { return r * (f(g) * (p(e = g + c * t) / f(e)) - p(g)) / d; var e } var x = Date.now(),
                    v = (u(1) - g) / c,
                    b = i.duration ? 1e3 * i.duration : 1e3 * v * .8; return this._moveStart(!0, i.noMoveStart),
                    function i() { var s, l, d = (Date.now() - x) / b,
                            u = (s = d, (1 - Math.pow(1 - s, 1.5)) * v);
                        d <= 1 ? (this._flyToFrame = A(i, this), this._move(this.unproject(n.add(a.subtract(n).multiplyBy(m(u) / h)), o), this.getScaleZoom(r / (l = u, r * (f(g) / f(g + c * l))), o), { flyTo: !0 })) : this._move(t, e)._moveEnd(!0) }.call(this), this }, flyToBounds: function(t, e) { var i = this._getBoundsCenterZoom(t, e); return this.flyTo(i.center, i.zoom, e) }, setMaxBounds: function(t) { return (t = F(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds)) }, setMinZoom: function(t) { var e = this.options.minZoom; return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this }, setMaxZoom: function(t) { var e = this.options.maxZoom; return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this }, panInsideBounds: function(t, e) { this._enforcingBounds = !0; var i = this.getCenter(),
                    n = this._limitCenter(i, this._zoom, F(t)); return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this }, panInside: function(t, e) { var i, n, a = O((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                    s = O(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.getCenter(),
                    r = this.project(o),
                    l = this.project(t),
                    h = this.getPixelBounds(),
                    c = h.getSize().divideBy(2),
                    d = R([h.min.add(a), h.max.subtract(s)]); return d.contains(l) || (this._enforcingBounds = !0, i = r.subtract(l), n = O(l.x + i.x, l.y + i.y), (l.x < d.min.x || l.x > d.max.x) && (n.x = r.x - i.x, 0 < i.x ? n.x += c.x - a.x : n.x -= c.x - s.x), (l.y < d.min.y || l.y > d.max.y) && (n.y = r.y - i.y, 0 < i.y ? n.y += c.y - a.y : n.y -= c.y - s.y), this.panTo(this.unproject(n), e), this._enforcingBounds = !1), this }, invalidateSize: function(t) { if (!this._loaded) return this;
                t = e({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t); var i = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null; var n = this.getSize(),
                    s = i.divideBy(2).round(),
                    o = n.divideBy(2).round(),
                    r = s.subtract(o); return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: i, newSize: n })) : this }, stop: function() { return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop() }, locate: function(t) { if (t = this._locateOptions = e({ timeout: 1e4, watch: !1 }, t), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this; var i = a(this._handleGeolocationResponse, this),
                    n = a(this._handleGeolocationError, this); return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, n, t) : navigator.geolocation.getCurrentPosition(i, n, t), this }, stopLocate: function() { return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this }, _handleGeolocationError: function(t) { var e = t.code,
                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: e, message: "Geolocation error: " + i + "." }) }, _handleGeolocationResponse: function(t) { var e, i = new X(t.coords.latitude, t.coords.longitude),
                    n = i.toBounds(2 * t.coords.accuracy),
                    a = this._locateOptions;
                a.setView && (e = this.getBoundsZoom(n), this.setView(i, a.maxZoom ? Math.min(e, a.maxZoom) : e)); var s = { latlng: i, bounds: n, timestamp: t.timestamp }; for (var o in t.coords) "number" == typeof t.coords[o] && (s[o] = t.coords[o]);
                this.fire("locationfound", s) }, addHandler: function(t, e) { if (!e) return this; var i = this[t] = new e(this); return this._handlers.push(i), this.options[t] && i.enable(), this }, remove: function() { if (this._initEvents(!0), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance"); try { delete this._container._leaflet_id, delete this._containerId } catch (t) { this._container._leaflet_id = void 0, this._containerId = void 0 } var t; for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), oe(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (C(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove(); for (t in this._panes) oe(this._panes[t]); return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this }, createPane: function(t, e) { var i = se("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane); return t && (this._panes[t] = i), i }, getCenter: function() { return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint()) }, getZoom: function() { return this._zoom }, getBounds: function() { var t = this.getPixelBounds(); return new N(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight())) }, getMinZoom: function() { return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom }, getMaxZoom: function() { return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom }, getBoundsZoom: function(t, e, i) { t = F(t), i = O(i || [0, 0]); var n = this.getZoom() || 0,
                    a = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    o = t.getNorthWest(),
                    r = t.getSouthEast(),
                    l = this.getSize().subtract(i),
                    h = R(this.project(r, n), this.project(o, n)).getSize(),
                    c = vt ? this.options.zoomSnap : 1,
                    d = l.x / h.x,
                    u = l.y / h.y,
                    p = e ? Math.max(d, u) : Math.min(d, u);
                n = this.getScaleZoom(p, n); return c && (n = Math.round(n / (c / 100)) * (c / 100), n = e ? Math.ceil(n / c) * c : Math.floor(n / c) * c), Math.max(a, Math.min(s, n)) }, getSize: function() { return this._size && !this._sizeChanged || (this._size = new z(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone() }, getPixelBounds: function(t, e) { var i = this._getTopLeftPoint(t, e); return new D(i, i.add(this.getSize())) }, getPixelOrigin: function() { return this._checkIfLoaded(), this._pixelOrigin }, getPixelWorldBounds: function(t) { return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t) }, getPane: function(t) { return "string" == typeof t ? this._panes[t] : t }, getPanes: function() { return this._panes }, getContainer: function() { return this._container }, getZoomScale: function(t, e) { var i = this.options.crs; return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e) }, getScaleZoom: function(t, e) { var i = this.options.crs;
                e = void 0 === e ? this._zoom : e; var n = i.zoom(t * i.scale(e)); return isNaN(n) ? 1 / 0 : n }, project: function(t, e) { return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(H(t), e) }, unproject: function(t, e) { return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(O(t), e) }, layerPointToLatLng: function(t) { var e = O(t).add(this.getPixelOrigin()); return this.unproject(e) }, latLngToLayerPoint: function(t) { return this.project(H(t))._round()._subtract(this.getPixelOrigin()) }, wrapLatLng: function(t) { return this.options.crs.wrapLatLng(H(t)) }, wrapLatLngBounds: function(t) { return this.options.crs.wrapLatLngBounds(F(t)) }, distance: function(t, e) { return this.options.crs.distance(H(t), H(e)) }, containerPointToLayerPoint: function(t) { return O(t).subtract(this._getMapPanePos()) }, layerPointToContainerPoint: function(t) { return O(t).add(this._getMapPanePos()) }, containerPointToLatLng: function(t) { var e = this.containerPointToLayerPoint(O(t)); return this.layerPointToLatLng(e) }, latLngToContainerPoint: function(t) { return this.layerPointToContainerPoint(this.latLngToLayerPoint(H(t))) }, mouseEventToContainerPoint: function(t) { return Xe(t, this._container) }, mouseEventToLayerPoint: function(t) { return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t)) }, mouseEventToLatLng: function(t) { return this.layerPointToLatLng(this.mouseEventToLayerPoint(t)) }, _initContainer: function(t) { var e = this._container = ne(t); if (!e) throw new Error("Map container not found."); if (e._leaflet_id) throw new Error("Map container is already initialized.");
                Pe(e, "scroll", this._onScroll, this), this._containerId = o(e) }, _initLayout: function() { var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && vt, de(t, "leaflet-container" + (St ? " leaflet-touch" : "") + (Pt ? " leaflet-retina" : "") + (et ? " leaflet-oldie" : "") + (dt ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")); var e = ae(t, "position"); "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos() }, _initPanes: function() { var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ve(this._mapPane, new z(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (de(t.markerPane, "leaflet-zoom-hide"), de(t.shadowPane, "leaflet-zoom-hide")) }, _resetView: function(t, e) { ve(this._mapPane, new z(0, 0)); var i = !this._loaded;
                this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset"); var n = this._zoom !== e;
                this._moveStart(n, !1)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load") }, _moveStart: function(t, e) { return t && this.fire("zoomstart"), e || this.fire("movestart"), this }, _move: function(t, e, i) { void 0 === e && (e = this._zoom); var n = this._zoom !== e; return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i) }, _moveEnd: function(t) { return t && this.fire("zoomend"), this.fire("moveend") }, _stop: function() { return C(this._flyToFrame), this._panAnim && this._panAnim.stop(), this }, _rawPanBy: function(t) { ve(this._mapPane, this._getMapPanePos().subtract(t)) }, _getZoomSpan: function() { return this.getMaxZoom() - this.getMinZoom() }, _panInsideMaxBounds: function() { this._enforcingBounds || this.panInsideBounds(this.options.maxBounds) }, _checkIfLoaded: function() { if (!this._loaded) throw new Error("Set map center and zoom first.") }, _initEvents: function(t) { this._targets = {}; var e = t ? Te : Pe;
                e((this._targets[o(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), vt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd) }, _onResize: function() { C(this._resizeRequest), this._resizeRequest = A((function() { this.invalidateSize({ debounceMoveend: !0 }) }), this) }, _onScroll: function() { this._container.scrollTop = 0, this._container.scrollLeft = 0 }, _onMoveEnd: function() { var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom()) }, _findEventTargets: function(t, e) { for (var i, n = [], a = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s;) { if ((i = this._targets[o(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) { r = !0; break } if (i && i.listens(e, !0)) { if (a && !Ve(s, t)) break; if (n.push(i), a) break } if (s === this._container) break;
                    s = s.parentNode } return n.length || r || a || !Ve(s, t) || (n = [this]), n }, _handleDOMEvent: function(t) { var e;
                this._loaded && !je(t) && ("mousedown" !== (e = t.type) && "keypress" !== e && "keyup" !== e && "keydown" !== e || _e(t.target || t.srcElement), this._fireDOMEvent(t, e)) }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t, i, n) { var a; if ("click" === t.type && ((a = e({}, t)).type = "preclick", this._fireDOMEvent(a, a.type, n)), !t._stopped && (n = (n || []).concat(this._findEventTargets(t, i))).length) { var s = n[0]; "contextmenu" === i && s.listens(i, !0) && Ne(t); var o, r = { originalEvent: t }; "keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (o = s.getLatLng && (!s._radius || s._radius <= 10), r.containerPoint = o ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = o ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)); for (var l = 0; l < n.length; l++)
                        if (n[l].fire(i, r, !0), r.originalEvent._stopped || !1 === n[l].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i)) return } }, _draggableMoved: function(t) { return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved() }, _clearHandlers: function() { for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable() }, whenReady: function(t, e) { return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this }, _getMapPanePos: function() { return be(this._mapPane) || new z(0, 0) }, _moved: function() { var t = this._getMapPanePos(); return t && !t.equals([0, 0]) }, _getTopLeftPoint: function(t, e) { return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos()) }, _getNewPixelOrigin: function(t, e) { var i = this.getSize()._divideBy(2); return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round() }, _latLngToNewLayerPoint: function(t, e, i) { var n = this._getNewPixelOrigin(i, e); return this.project(t, e)._subtract(n) }, _latLngBoundsToNewLayerBounds: function(t, e, i) { var n = this._getNewPixelOrigin(i, e); return R([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)]) }, _getCenterLayerPoint: function() { return this.containerPointToLayerPoint(this.getSize()._divideBy(2)) }, _getCenterOffset: function(t) { return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint()) }, _limitCenter: function(t, e, i) { if (!i) return t; var n = this.project(t, e),
                    a = this.getSize().divideBy(2),
                    s = new D(n.subtract(a), n.add(a)),
                    o = this._getBoundsOffset(s, i, e); return o.round().equals([0, 0]) ? t : this.unproject(n.add(o), e) }, _limitOffset: function(t, e) { if (!e) return t; var i = this.getPixelBounds(),
                    n = new D(i.min.add(t), i.max.add(t)); return t.add(this._getBoundsOffset(n, e)) }, _getBoundsOffset: function(t, e, i) { var n = R(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                    a = n.min.subtract(t.min),
                    s = n.max.subtract(t.max); return new z(this._rebound(a.x, -s.x), this._rebound(a.y, -s.y)) }, _rebound: function(t, e) { return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e)) }, _limitZoom: function(t) { var e = this.getMinZoom(),
                    i = this.getMaxZoom(),
                    n = vt ? this.options.zoomSnap : 1; return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t)) }, _onPanTransitionStep: function() { this.fire("move") }, _onPanTransitionEnd: function() { ue(this._mapPane, "leaflet-pan-anim"), this.fire("moveend") }, _tryAnimatedPan: function(t, e) { var i = this._getCenterOffset(t)._trunc(); return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0)) }, _createAnimProxy: function() { var t = this._proxy = se("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", (function(t) { var e = te,
                        i = this._proxy.style[e];
                    xe(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd() }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this) }, _destroyAnimProxy: function() { oe(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy }, _animMoveEnd: function() { var t = this.getCenter(),
                    e = this.getZoom();
                xe(this._proxy, this.project(t, e), this.getZoomScale(e, 1)) }, _catchTransitionEnd: function(t) { this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd() }, _nothingToAnimate: function() { return !this._container.getElementsByClassName("leaflet-zoom-animated").length }, _tryAnimatedZoom: function(t, e, i) { if (this._animatingZoom) return !0; if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1; var n = this.getZoomScale(e),
                    a = this._getCenterOffset(t)._divideBy(1 - 1 / n); return !(!0 !== i.animate && !this.getSize().contains(a) || (A((function() { this._moveStart(!0, !1)._animateZoom(t, e, !0) }), this), 0)) }, _animateZoom: function(t, e, i, n) { this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, de(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }), setTimeout(a(this._onZoomTransitionEnd, this), 250)) }, _onZoomTransitionEnd: function() { this._animatingZoom && (this._mapPane && ue(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), A((function() { this._moveEnd(!0) }), this)) } });

    function qe(t) { return new $e(t) } var $e = T.extend({ options: { position: "topright" }, initialize: function(t) { p(this, t) }, getPosition: function() { return this.options.position }, setPosition: function(t) { var e = this._map; return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this }, getContainer: function() { return this._container }, addTo: function(t) { this.remove(), this._map = t; var e = this._container = this.onAdd(t),
                i = this.getPosition(),
                n = t._controlCorners[i]; return de(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this }, remove: function() { return this._map && (oe(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this }, _refocusOnMap: function(t) { this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus() } });
    Ue.include({ addControl: function(t) { return t.addTo(this), this }, removeControl: function(t) { return t.remove(), this }, _initControlPos: function() { var t = this._controlCorners = {},
                e = "leaflet-",
                i = this._controlContainer = se("div", e + "control-container", this._container);

            function n(n, a) { var s = e + n + " " + e + a;
                t[n + a] = se("div", s, i) }
            n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right") }, _clearControlPos: function() { for (var t in this._controlCorners) oe(this._controlCorners[t]);
            oe(this._controlContainer), delete this._controlCorners, delete this._controlContainer } }); var Ke = $e.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0, hideSingleBase: !1, sortLayers: !1, sortFunction: function(t, e, i, n) { return i < n ? -1 : n < i ? 1 : 0 } }, initialize: function(t, e, i) { for (var n in p(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n); for (n in e) this._addLayer(e[n], n, !0) }, onAdd: function(t) { this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this); for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this); return this._container }, addTo: function(t) { return $e.prototype.addTo.call(this, t), this._expandIfNotCollapsed() }, onRemove: function() { this._map.off("zoomend", this._checkDisabledLayers, this); for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this) }, addBaseLayer: function(t, e) { return this._addLayer(t, e), this._map ? this._update() : this }, addOverlay: function(t, e) { return this._addLayer(t, e, !0), this._map ? this._update() : this }, removeLayer: function(t) { t.off("add remove", this._onLayerChange, this); var e = this._getLayer(o(t)); return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this }, expand: function() { de(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null; var t = this._map.getSize().y - (this._container.offsetTop + 50); return t < this._section.clientHeight ? (de(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : ue(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this }, collapse: function() { return ue(this._container, "leaflet-control-layers-expanded"), this }, _initLayout: function() { var t = "leaflet-control-layers",
                    e = this._container = se("div", t),
                    i = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0), Re(e), De(e); var n = this._section = se("section", t + "-list");
                i && (this._map.on("click", this.collapse, this), at || Pe(e, { mouseenter: this.expand, mouseleave: this.collapse }, this)); var a = this._layersLink = se("a", t + "-toggle", e);
                a.href = "#", a.title = "Layers", St ? (Pe(a, "click", Fe), Pe(a, "click", this.expand, this)) : Pe(a, "focus", this.expand, this), i || this.expand(), this._baseLayersList = se("div", t + "-base", n), this._separator = se("div", t + "-separator", n), this._overlaysList = se("div", t + "-overlays", n), e.appendChild(n) }, _getLayer: function(t) { for (var e = 0; e < this._layers.length; e++)
                    if (this._layers[e] && o(this._layers[e].layer) === t) return this._layers[e] }, _addLayer: function(t, e, i) { this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t, name: e, overlay: i }), this.options.sortLayers && this._layers.sort(a((function(t, e) { return this.options.sortFunction(t.layer, e.layer, t.name, e.name) }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed() }, _update: function() { if (!this._container) return this;
                re(this._baseLayersList), re(this._overlaysList), this._layerControlInputs = []; for (var t, e, i, n = 0, a = 0; a < this._layers.length; a++) i = this._layers[a], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, n += i.overlay ? 0 : 1; return this.options.hideSingleBase && (t = t && 1 < n, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this }, _onLayerChange: function(t) { this._handlingClick || this._update(); var e = this._getLayer(o(t.target)),
                    i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                i && this._map.fire(i, e) }, _createRadioElement: function(t, e) { var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                    n = document.createElement("div"); return n.innerHTML = i, n.firstChild }, _addItem: function(t) { var e, i = document.createElement("label"),
                    n = this._map.hasLayer(t.layer);
                t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + o(this), n), this._layerControlInputs.push(e), e.layerId = o(t.layer), Pe(e, "click", this._onInputClick, this); var a = document.createElement("span");
                a.innerHTML = " " + t.name; var s = document.createElement("div"); return i.appendChild(s), s.appendChild(e), s.appendChild(a), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i }, _onInputClick: function() { var t, e, i = this._layerControlInputs,
                    n = [],
                    a = [];
                this._handlingClick = !0; for (var s = i.length - 1; 0 <= s; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || a.push(e); for (s = 0; s < a.length; s++) this._map.hasLayer(a[s]) && this._map.removeLayer(a[s]); for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1, this._refocusOnMap() }, _checkDisabledLayers: function() { for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), a = i.length - 1; 0 <= a; a--) t = i[a], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom }, _expandIfNotCollapsed: function() { return this._map && !this.options.collapsed && this.expand(), this }, _expand: function() { return this.expand() }, _collapse: function() { return this.collapse() } }),
        Je = $e.extend({ options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "&#x2212;", zoomOutTitle: "Zoom out" }, onAdd: function(t) { var e = "leaflet-control-zoom",
                    i = se("div", e + " leaflet-bar"),
                    n = this.options; return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i }, onRemove: function(t) { t.off("zoomend zoomlevelschange", this._updateDisabled, this) }, disable: function() { return this._disabled = !0, this._updateDisabled(), this }, enable: function() { return this._disabled = !1, this._updateDisabled(), this }, _zoomIn: function(t) {!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)) }, _zoomOut: function(t) {!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)) }, _createButton: function(t, e, i, n, a) { var s = se("a", i, n); return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), Re(s), Pe(s, "click", Fe), Pe(s, "click", a, this), Pe(s, "click", this._refocusOnMap, this), s }, _updateDisabled: function() { var t = this._map,
                    e = "leaflet-disabled";
                ue(this._zoomInButton, e), ue(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMinZoom() || de(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMaxZoom() || de(this._zoomInButton, e) } });
    Ue.mergeOptions({ zoomControl: !0 }), Ue.addInitHook((function() { this.options.zoomControl && (this.zoomControl = new Je, this.addControl(this.zoomControl)) })); var Qe = $e.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 }, onAdd: function(t) { var e = "leaflet-control-scale",
                    i = se("div", e),
                    n = this.options; return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i }, onRemove: function(t) { t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this) }, _addScales: function(t, e, i) { t.metric && (this._mScale = se("div", e, i)), t.imperial && (this._iScale = se("div", e, i)) }, _update: function() { var t = this._map,
                    e = t.getSize().y / 2,
                    i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                this._updateScales(i) }, _updateScales: function(t) { this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t) }, _updateMetric: function(t) { var e = this._getRoundNum(t),
                    i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                this._updateScale(this._mScale, i, e / t) }, _updateImperial: function(t) { var e, i, n, a = 3.2808399 * t;
                5280 < a ? (e = a / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(a), this._updateScale(this._iScale, n + " ft", n / a)) }, _updateScale: function(t, e, i) { t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e }, _getRoundNum: function(t) { var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    i = t / e; return e * (10 <= i ? 10 : 5 <= i ? 5 : 3 <= i ? 3 : 2 <= i ? 2 : 1) } }),
        ti = $e.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' }, initialize: function(t) { p(this, t), this._attributions = {} }, onAdd: function(t) { for (var e in (t.attributionControl = this)._container = se("div", "leaflet-control-attribution"), Re(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution()); return this._update(), this._container }, setPrefix: function(t) { return this.options.prefix = t, this._update(), this }, addAttribution: function(t) { return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this }, removeAttribution: function(t) { return t && this._attributions[t] && (this._attributions[t]--, this._update()), this }, _update: function() { if (this._map) { var t = []; for (var e in this._attributions) this._attributions[e] && t.push(e); var i = [];
                    this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ") } } });
    Ue.mergeOptions({ attributionControl: !0 }), Ue.addInitHook((function() { this.options.attributionControl && (new ti).addTo(this) })), $e.Layers = Ke, $e.Zoom = Je, $e.Scale = Qe, $e.Attribution = ti, qe.layers = function(t, e, i) { return new Ke(t, e, i) }, qe.zoom = function(t) { return new Je(t) }, qe.scale = function(t) { return new Qe(t) }, qe.attribution = function(t) { return new ti(t) }; var ei = T.extend({ initialize: function(t) { this._map = t }, enable: function() { return this._enabled || (this._enabled = !0, this.addHooks()), this }, disable: function() { return this._enabled && (this._enabled = !1, this.removeHooks()), this }, enabled: function() { return !!this._enabled } });
    ei.addTo = function(t, e) { return t.addHandler(e, this), this }; var ii, ni = { Events: M },
        ai = St ? "touchstart mousedown" : "mousedown",
        si = { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" },
        oi = { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" },
        ri = E.extend({ options: { clickTolerance: 3 }, initialize: function(t, e, i, n) { p(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i }, enable: function() { this._enabled || (Pe(this._dragStartTarget, ai, this._onDown, this), this._enabled = !0) }, disable: function() { this._enabled && (ri._dragging === this && this.finishDrag(), Te(this._dragStartTarget, ai, this._onDown, this), this._enabled = !1, this._moved = !1) }, _onDown: function(t) { var e, i;!t._simulated && this._enabled && (this._moved = !1, ce(this._element, "leaflet-zoom-anim") || ri._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((ri._dragging = this)._preventOutline && _e(this._element), ye(), Zt(), this._moving || (this.fire("down"), e = t.touches ? t.touches[0] : t, i = Se(this._element), this._startPoint = new z(e.clientX, e.clientY), this._parentScale = Ae(i), Pe(document, oi[t.type], this._onMove, this), Pe(document, si[t.type], this._onUp, this)))) }, _onMove: function(t) { var e, i;!t._simulated && this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : ((i = new z((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, e.clientY)._subtract(this._startPoint)).x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, Ne(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = be(this._element).subtract(i), de(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), de(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, C(this._animRequest), this._lastEvent = t, this._animRequest = A(this._updatePosition, this, !0)))) }, _updatePosition: function() { var t = { originalEvent: this._lastEvent };
                this.fire("predrag", t), ve(this._element, this._newPos), this.fire("drag", t) }, _onUp: function(t) {!t._simulated && this._enabled && this.finishDrag() }, finishDrag: function() { for (var t in ue(document.body, "leaflet-dragging"), this._lastTarget && (ue(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), oi) Te(document, oi[t], this._onMove, this), Te(document, si[t], this._onUp, this);
                we(), Ut(), this._moved && this._moving && (C(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), this._moving = !1, ri._dragging = !1 } });

    function li(t, e) { if (!e || !t.length) return t.slice(); var i = e * e; return function(t, e) { var i = t.length,
                n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
            n[0] = n[i - 1] = 1,
                function t(e, i, n, a, s) { var o, r, l, h = 0; for (r = a + 1; r <= s - 1; r++) h < (l = pi(e[r], e[a], e[s], !0)) && (o = r, h = l);
                    n < h && (i[o] = 1, t(e, i, n, a, o), t(e, i, n, o, s)) }(t, n, e, 0, i - 1); var a, s = []; for (a = 0; a < i; a++) n[a] && s.push(t[a]); return s }(t = function(t, e) { for (var i = [t[0]], n = 1, a = 0, s = t.length; n < s; n++)(function(t, e) { var i = e.x - t.x,
                    n = e.y - t.y; return i * i + n * n })(t[n], t[a]) > e && (i.push(t[n]), a = n); return a < s - 1 && i.push(t[s - 1]), i }(t, i), i) }

    function hi(t, e, i) { return Math.sqrt(pi(t, e, i, !0)) }

    function ci(t, e, i, n, a) { var s, o, r, l = n ? ii : ui(t, i),
            h = ui(e, i); for (ii = h;;) { if (!(l | h)) return [t, e]; if (l & h) return !1;
            r = ui(o = di(t, e, s = l || h, i, a), i), s === l ? (t = o, l = r) : (e = o, h = r) } }

    function di(t, e, i, n, a) { var s, o, r = e.x - t.x,
            l = e.y - t.y,
            h = n.min,
            c = n.max; return 8 & i ? (s = t.x + r * (c.y - t.y) / l, o = c.y) : 4 & i ? (s = t.x + r * (h.y - t.y) / l, o = h.y) : 2 & i ? (s = c.x, o = t.y + l * (c.x - t.x) / r) : 1 & i && (s = h.x, o = t.y + l * (h.x - t.x) / r), new z(s, o, a) }

    function ui(t, e) { var i = 0; return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i }

    function pi(t, e, i, n) { var a, s = e.x,
            o = e.y,
            r = i.x - s,
            l = i.y - o,
            h = r * r + l * l; return 0 < h && (1 < (a = ((t.x - s) * r + (t.y - o) * l) / h) ? (s = i.x, o = i.y) : 0 < a && (s += r * a, o += l * a)), r = t.x - s, l = t.y - o, n ? r * r + l * l : new z(s, o) }

    function fi(t) { return !x(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0] }

    function gi(t) { return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), fi(t) } var mi = { simplify: li, pointToSegmentDistance: hi, closestPointOnSegment: function(t, e, i) { return pi(t, e, i) }, clipSegment: ci, _getEdgeIntersection: di, _getBitCode: ui, _sqClosestPointOnSegment: pi, isFlat: fi, _flat: gi };

    function xi(t, e, i) { for (var n, a, s, o, r, l, h, c = [1, 4, 2, 8], d = 0, u = t.length; d < u; d++) t[d]._code = ui(t[d], e); for (s = 0; s < 4; s++) { for (l = c[s], n = [], d = 0, a = (u = t.length) - 1; d < u; a = d++) o = t[d], r = t[a], o._code & l ? r._code & l || ((h = di(r, o, l, e, i))._code = ui(h, e), n.push(h)) : (r._code & l && ((h = di(r, o, l, e, i))._code = ui(h, e), n.push(h)), n.push(o));
            t = n } return t } var vi, bi = { clipPolygon: xi },
        yi = { project: function(t) { return new z(t.lng, t.lat) }, unproject: function(t) { return new X(t.y, t.x) }, bounds: new D([-180, -90], [180, 90]) },
        wi = { R: 6378137, R_MINOR: 6356752.314245179, bounds: new D([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]), project: function(t) { var e = Math.PI / 180,
                    i = this.R,
                    n = t.lat * e,
                    a = this.R_MINOR / i,
                    s = Math.sqrt(1 - a * a),
                    o = s * Math.sin(n),
                    r = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - o) / (1 + o), s / 2);
                n = -i * Math.log(Math.max(r, 1e-10)); return new z(t.lng * e * i, n) }, unproject: function(t) { for (var e, i = 180 / Math.PI, n = this.R, a = this.R_MINOR / n, s = Math.sqrt(1 - a * a), o = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(o), l = 0, h = .1; l < 15 && 1e-7 < Math.abs(h); l++) e = s * Math.sin(r), e = Math.pow((1 - e) / (1 + e), s / 2), r += h = Math.PI / 2 - 2 * Math.atan(o * e) - r; return new X(r * i, t.x * i / n) } },
        _i = { LonLat: yi, Mercator: wi, SphericalMercator: V },
        ki = e({}, W, { code: "EPSG:3395", projection: wi, transformation: Z(vi = .5 / (Math.PI * wi.R), .5, -vi, .5) }),
        Si = e({}, W, { code: "EPSG:4326", projection: yi, transformation: Z(1 / 180, 1, -1 / 180, .5) }),
        Ai = e({}, Y, { projection: yi, transformation: Z(1, 0, -1, 0), scale: function(t) { return Math.pow(2, t) }, zoom: function(t) { return Math.log(t) / Math.LN2 }, distance: function(t, e) { var i = e.lng - t.lng,
                    n = e.lat - t.lat; return Math.sqrt(i * i + n * n) }, infinite: !0 });
    Y.Earth = W, Y.EPSG3395 = ki, Y.EPSG3857 = q, Y.EPSG900913 = $, Y.EPSG4326 = Si, Y.Simple = Ai; var Ci = E.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 }, addTo: function(t) { return t.addLayer(this), this }, remove: function() { return this.removeFrom(this._map || this._mapToAdd) }, removeFrom: function(t) { return t && t.removeLayer(this), this }, getPane: function(t) { return this._map.getPane(t ? this.options[t] || t : this.options.pane) }, addInteractiveTarget: function(t) { return this._map._targets[o(t)] = this }, removeInteractiveTarget: function(t) { return delete this._map._targets[o(t)], this }, getAttribution: function() { return this.options.attribution }, _layerAdd: function(t) { var e, i = t.target;
            i.hasLayer(this) && (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents && (e = this.getEvents(), i.on(e, this), this.once("remove", (function() { i.off(e, this) }), this)), this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", { layer: this })) } });
    Ue.include({ addLayer: function(t) { if (!t._layerAdd) throw new Error("The provided object is not a Layer."); var e = o(t); return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this }, removeLayer: function(t) { var e = o(t); return this._layers[e] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null), this }, hasLayer: function(t) { return !!t && o(t) in this._layers }, eachLayer: function(t, e) { for (var i in this._layers) t.call(e, this._layers[i]); return this }, _addLayers: function(t) { for (var e = 0, i = (t = t ? x(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e]) }, _addZoomLimit: function(t) {!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[o(t)] = t, this._updateZoomLevels()) }, _removeZoomLimit: function(t) { var e = o(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()) }, _updateZoomLevels: function() { var t = 1 / 0,
                e = -1 / 0,
                i = this._getZoomSpan(); for (var n in this._zoomBoundLayers) { var a = this._zoomBoundLayers[n].options;
                t = void 0 === a.minZoom ? t : Math.min(t, a.minZoom), e = void 0 === a.maxZoom ? e : Math.max(e, a.maxZoom) }
            this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom) } }); var Pi = Ci.extend({ initialize: function(t, e) { var i, n; if (p(this, e), this._layers = {}, t)
                    for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]) }, addLayer: function(t) { var e = this.getLayerId(t); return this._layers[e] = t, this._map && this._map.addLayer(t), this }, removeLayer: function(t) { var e = t in this._layers ? t : this.getLayerId(t); return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this }, hasLayer: function(t) { return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers }, clearLayers: function() { return this.eachLayer(this.removeLayer, this) }, invoke: function(t) { var e, i, n = Array.prototype.slice.call(arguments, 1); for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n); return this }, onAdd: function(t) { this.eachLayer(t.addLayer, t) }, onRemove: function(t) { this.eachLayer(t.removeLayer, t) }, eachLayer: function(t, e) { for (var i in this._layers) t.call(e, this._layers[i]); return this }, getLayer: function(t) { return this._layers[t] }, getLayers: function() { var t = []; return this.eachLayer(t.push, t), t }, setZIndex: function(t) { return this.invoke("setZIndex", t) }, getLayerId: o }),
        Li = Pi.extend({ addLayer: function(t) { return this.hasLayer(t) ? this : (t.addEventParent(this), Pi.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t })) }, removeLayer: function(t) { return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Pi.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this }, setStyle: function(t) { return this.invoke("setStyle", t) }, bringToFront: function() { return this.invoke("bringToFront") }, bringToBack: function() { return this.invoke("bringToBack") }, getBounds: function() { var t = new N; for (var e in this._layers) { var i = this._layers[e];
                    t.extend(i.getBounds ? i.getBounds() : i.getLatLng()) } return t } }),
        Ti = T.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] }, initialize: function(t) { p(this, t) }, createIcon: function(t) { return this._createIcon("icon", t) }, createShadow: function(t) { return this._createIcon("shadow", t) }, _createIcon: function(t, e) { var i = this._getIconUrl(t); if (!i) { if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs)."); return null } var n = this._createImg(i, e && "IMG" === e.tagName ? e : null); return this._setIconStyles(n, t), n }, _setIconStyles: function(t, e) { var i = this.options,
                    n = i[e + "Size"]; "number" == typeof n && (n = [n, n]); var a = O(n),
                    s = O("shadow" === e && i.shadowAnchor || i.iconAnchor || a && a.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), a && (t.style.width = a.x + "px", t.style.height = a.y + "px") }, _createImg: function(t, e) { return (e = e || document.createElement("img")).src = t, e }, _getIconUrl: function(t) { return Pt && this.options[t + "RetinaUrl"] || this.options[t + "Url"] } }),
        Mi = Ti.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(t) { return Mi.imagePath || (Mi.imagePath = this._detectIconPath()), (this.options.imagePath || Mi.imagePath) + Ti.prototype._getIconUrl.call(this, t) }, _detectIconPath: function() { var t = se("div", "leaflet-default-icon-path", document.body),
                    e = ae(t, "background-image") || ae(t, "backgroundImage"); return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "") } }),
        Ei = ei.extend({ initialize: function(t) { this._marker = t }, addHooks: function() { var t = this._marker._icon;
                this._draggable || (this._draggable = new ri(t, t, !0)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), de(t, "leaflet-marker-draggable") }, removeHooks: function() { this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && ue(this._marker._icon, "leaflet-marker-draggable") }, moved: function() { return this._draggable && this._draggable._moved }, _adjustPan: function(t) { var e, i = this._marker,
                    n = i._map,
                    a = this._marker.options.autoPanSpeed,
                    s = this._marker.options.autoPanPadding,
                    o = be(i._icon),
                    r = n.getPixelBounds(),
                    l = n.getPixelOrigin(),
                    h = R(r.min._subtract(l).add(s), r.max._subtract(l).subtract(s));
                h.contains(o) || (e = O((Math.max(h.max.x, o.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, o.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, o.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, o.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(a), n.panBy(e, { animate: !1 }), this._draggable._newPos._add(e), this._draggable._startPos._add(e), ve(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = A(this._adjustPan.bind(this, t))) }, _onDragStart: function() { this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart") }, _onPreDrag: function(t) { this._marker.options.autoPan && (C(this._panRequest), this._panRequest = A(this._adjustPan.bind(this, t))) }, _onDrag: function(t) { var e = this._marker,
                    i = e._shadow,
                    n = be(e._icon),
                    a = e._map.layerPointToLatLng(n);
                i && ve(i, n), e._latlng = a, t.latlng = a, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t) }, _onDragEnd: function(t) { C(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t) } }),
        zi = Ci.extend({ options: { icon: new Mi, interactive: !0, keyboard: !0, title: "", alt: "", zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: !1, draggable: !1, autoPan: !1, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(t, e) { p(this, e), this._latlng = H(t) }, onAdd: function(t) { this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update() }, onRemove: function(t) { this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow() }, getEvents: function() { return { zoom: this.update, viewreset: this.update } }, getLatLng: function() { return this._latlng }, setLatLng: function(t) { var e = this._latlng; return this._latlng = H(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng }) }, setZIndexOffset: function(t) { return this.options.zIndexOffset = t, this.update() }, getIcon: function() { return this.options.icon }, setIcon: function(t) { return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this }, getElement: function() { return this._icon }, update: function() { var t; return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this }, _initIcon: function() { var t = this.options,
                    e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    i = t.icon.createIcon(this._icon),
                    n = !1;
                i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), de(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }); var a = t.icon.createShadow(this._shadow),
                    s = !1;
                a !== this._shadow && (this._removeShadow(), s = !0), a && (de(a, e), a.alt = ""), this._shadow = a, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), a && s && this.getPane(t.shadowPane).appendChild(this._shadow) }, _removeIcon: function() { this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), oe(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null }, _removeShadow: function() { this._shadow && oe(this._shadow), this._shadow = null }, _setPos: function(t) { this._icon && ve(this._icon, t), this._shadow && ve(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex() }, _updateZIndex: function(t) { this._icon && (this._icon.style.zIndex = this._zIndex + t) }, _animateZoom: function(t) { var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e) }, _initInteraction: function() { var t;
                this.options.interactive && (de(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ei && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ei(this), t && this.dragging.enable())) }, setOpacity: function(t) { return this.options.opacity = t, this._map && this._updateOpacity(), this }, _updateOpacity: function() { var t = this.options.opacity;
                this._icon && ge(this._icon, t), this._shadow && ge(this._shadow, t) }, _bringToFront: function() { this._updateZIndex(this.options.riseOffset) }, _resetZIndex: function() { this._updateZIndex(0) }, _getPopupAnchor: function() { return this.options.icon.options.popupAnchor }, _getTooltipAnchor: function() { return this.options.icon.options.tooltipAnchor } }),
        Ii = Ci.extend({ options: { stroke: !0, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: !1, fillColor: null, fillOpacity: .2, fillRule: "evenodd", interactive: !0, bubblingMouseEvents: !0 }, beforeAdd: function(t) { this._renderer = t.getRenderer(this) }, onAdd: function() { this._renderer._initPath(this), this._reset(), this._renderer._addPath(this) }, onRemove: function() { this._renderer._removePath(this) }, redraw: function() { return this._map && this._renderer._updatePath(this), this }, setStyle: function(t) { return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this }, bringToFront: function() { return this._renderer && this._renderer._bringToFront(this), this }, bringToBack: function() { return this._renderer && this._renderer._bringToBack(this), this }, getElement: function() { return this._path }, _reset: function() { this._project(), this._update() }, _clickTolerance: function() { return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance } }),
        Oi = Ii.extend({ options: { fill: !0, radius: 10 }, initialize: function(t, e) { p(this, e), this._latlng = H(t), this._radius = this.options.radius }, setLatLng: function(t) { var e = this._latlng; return this._latlng = H(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng }) }, getLatLng: function() { return this._latlng }, setRadius: function(t) { return this.options.radius = this._radius = t, this.redraw() }, getRadius: function() { return this._radius }, setStyle: function(t) { var e = t && t.radius || this._radius; return Ii.prototype.setStyle.call(this, t), this.setRadius(e), this }, _project: function() { this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds() }, _updateBounds: function() { var t = this._radius,
                    e = this._radiusY || t,
                    i = this._clickTolerance(),
                    n = [t + i, e + i];
                this._pxBounds = new D(this._point.subtract(n), this._point.add(n)) }, _update: function() { this._map && this._updatePath() }, _updatePath: function() { this._renderer._updateCircle(this) }, _empty: function() { return this._radius && !this._renderer._bounds.intersects(this._pxBounds) }, _containsPoint: function(t) { return t.distanceTo(this._point) <= this._radius + this._clickTolerance() } }),
        Di = Oi.extend({ initialize: function(t, i, n) { if ("number" == typeof i && (i = e({}, n, { radius: i })), p(this, i), this._latlng = H(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius }, setRadius: function(t) { return this._mRadius = t, this.redraw() }, getRadius: function() { return this._mRadius }, getBounds: function() { var t = [this._radius, this._radiusY || this._radius]; return new N(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t))) }, setStyle: Ii.prototype.setStyle, _project: function() { var t, e, i, n, a, s, o, r, l = this._latlng.lng,
                    h = this._latlng.lat,
                    c = this._map,
                    d = c.options.crs;
                d.distance === W.distance ? (t = Math.PI / 180, e = this._mRadius / W.R / t, i = c.project([h + e, l]), n = c.project([h - e, l]), a = i.add(n).divideBy(2), s = c.unproject(a).lat, o = Math.acos((Math.cos(e * t) - Math.sin(h * t) * Math.sin(s * t)) / (Math.cos(h * t) * Math.cos(s * t))) / t, !isNaN(o) && 0 !== o || (o = e / Math.cos(Math.PI / 180 * h)), this._point = a.subtract(c.getPixelOrigin()), this._radius = isNaN(o) ? 0 : a.x - c.project([s, l - o]).x, this._radiusY = a.y - i.y) : (r = d.unproject(d.project(this._latlng).subtract([this._mRadius, 0])), this._point = c.latLngToLayerPoint(this._latlng), this._radius = this._point.x - c.latLngToLayerPoint(r).x), this._updateBounds() } }),
        Ri = Ii.extend({ options: { smoothFactor: 1, noClip: !1 }, initialize: function(t, e) { p(this, e), this._setLatLngs(t) }, getLatLngs: function() { return this._latlngs }, setLatLngs: function(t) { return this._setLatLngs(t), this.redraw() }, isEmpty: function() { return !this._latlngs.length }, closestLayerPoint: function(t) { for (var e, i, n = 1 / 0, a = null, s = pi, o = 0, r = this._parts.length; o < r; o++)
                    for (var l = this._parts[o], h = 1, c = l.length; h < c; h++) { var d = s(t, e = l[h - 1], i = l[h], !0);
                        d < n && (n = d, a = s(t, e, i)) }
                return a && (a.distance = Math.sqrt(n)), a }, getCenter: function() { if (!this._map) throw new Error("Must add layer to map before using getCenter()"); var t, e, i, n, a, s, o, r = this._rings[0],
                    l = r.length; if (!l) return null; for (e = t = 0; t < l - 1; t++) e += r[t].distanceTo(r[t + 1]) / 2; if (0 === e) return this._map.layerPointToLatLng(r[0]); for (n = t = 0; t < l - 1; t++)
                    if (a = r[t], s = r[t + 1], e < (n += i = a.distanceTo(s))) return o = (n - e) / i, this._map.layerPointToLatLng([s.x - o * (s.x - a.x), s.y - o * (s.y - a.y)]) }, getBounds: function() { return this._bounds }, addLatLng: function(t, e) { return e = e || this._defaultShape(), t = H(t), e.push(t), this._bounds.extend(t), this.redraw() }, _setLatLngs: function(t) { this._bounds = new N, this._latlngs = this._convertLatLngs(t) }, _defaultShape: function() { return fi(this._latlngs) ? this._latlngs : this._latlngs[0] }, _convertLatLngs: function(t) { for (var e = [], i = fi(t), n = 0, a = t.length; n < a; n++) i ? (e[n] = H(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]); return e }, _project: function() { var t = new D;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds()) }, _updateBounds: function() { var t = this._clickTolerance(),
                    e = new z(t, t);
                this._pxBounds = new D([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]) }, _projectLatlngs: function(t, e, i) { var n, a, s = t[0] instanceof X,
                    o = t.length; if (s) { for (a = [], n = 0; n < o; n++) a[n] = this._map.latLngToLayerPoint(t[n]), i.extend(a[n]);
                    e.push(a) } else
                    for (n = 0; n < o; n++) this._projectLatlngs(t[n], e, i) }, _clipPoints: function() { var t = this._renderer._bounds; if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var e, i, n, a, s = this._parts, o = 0, r = 0, l = this._rings.length; o < l; o++)
                            for (e = 0, i = (a = this._rings[o]).length; e < i - 1; e++)(n = ci(a[e], a[e + 1], t, e, !0)) && (s[r] = s[r] || [], s[r].push(n[0]), n[1] === a[e + 1] && e !== i - 2 || (s[r].push(n[1]), r++)) }, _simplifyPoints: function() { for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = li(t[i], e) }, _update: function() { this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath()) }, _updatePath: function() { this._renderer._updatePoly(this) }, _containsPoint: function(t, e) { var i, n, a, s, o, r, l = this._clickTolerance(); if (!this._pxBounds || !this._pxBounds.contains(t)) return !1; for (i = 0, s = this._parts.length; i < s; i++)
                    for (n = 0, a = (o = (r = this._parts[i]).length) - 1; n < o; a = n++)
                        if ((e || 0 !== n) && hi(t, r[a], r[n]) <= l) return !0;
                return !1 } });
    Ri._flat = gi; var Ni = Ri.extend({ options: { fill: !0 }, isEmpty: function() { return !this._latlngs.length || !this._latlngs[0].length }, getCenter: function() { if (!this._map) throw new Error("Must add layer to map before using getCenter()"); var t, e, i, n, a, s, o, r, l, h = this._rings[0],
                    c = h.length; if (!c) return null; for (t = s = o = r = 0, e = c - 1; t < c; e = t++) i = h[t], n = h[e], a = i.y * n.x - n.y * i.x, o += (i.x + n.x) * a, r += (i.y + n.y) * a, s += 3 * a; return l = 0 === s ? h[0] : [o / s, r / s], this._map.layerPointToLatLng(l) }, _convertLatLngs: function(t) { var e = Ri.prototype._convertLatLngs.call(this, t),
                    i = e.length; return 2 <= i && e[0] instanceof X && e[0].equals(e[i - 1]) && e.pop(), e }, _setLatLngs: function(t) { Ri.prototype._setLatLngs.call(this, t), fi(this._latlngs) && (this._latlngs = [this._latlngs]) }, _defaultShape: function() { return fi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0] }, _clipPoints: function() { var t = this._renderer._bounds,
                    e = this.options.weight,
                    i = new z(e, e);
                t = new D(t.min.subtract(i), t.max.add(i)); if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var n, a = 0, s = this._rings.length; a < s; a++)(n = xi(this._rings[a], t, !0)).length && this._parts.push(n) }, _updatePath: function() { this._renderer._updatePoly(this, !0) }, _containsPoint: function(t) { var e, i, n, a, s, o, r, l, h = !1; if (!this._pxBounds || !this._pxBounds.contains(t)) return !1; for (a = 0, r = this._parts.length; a < r; a++)
                    for (s = 0, o = (l = (e = this._parts[a]).length) - 1; s < l; o = s++) i = e[s], n = e[o], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (h = !h); return h || Ri.prototype._containsPoint.call(this, t, !0) } }),
        Fi = Li.extend({ initialize: function(t, e) { p(this, e), this._layers = {}, t && this.addData(t) }, addData: function(t) { var e, i, n, a = x(t) ? t : t.features; if (a) { for (e = 0, i = a.length; e < i; e++)((n = a[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n); return this } var s = this.options; if (s.filter && !s.filter(t)) return this; var o = Xi(t, s); return o ? (o.feature = Gi(t), o.defaultOptions = o.options, this.resetStyle(o), s.onEachFeature && s.onEachFeature(t, o), this.addLayer(o)) : this }, resetStyle: function(t) { return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = e({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this) }, setStyle: function(t) { return this.eachLayer((function(e) { this._setLayerStyle(e, t) }), this) }, _setLayerStyle: function(t, e) { t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e)) } });

    function Xi(t, e) { var i, n, a, s, o = "Feature" === t.type ? t.geometry : t,
            r = o ? o.coordinates : null,
            l = [],
            h = e && e.pointToLayer,
            c = e && e.coordsToLatLng || Bi; if (!r && !o) return null; switch (o.type) {
            case "Point":
                return Hi(h, t, i = c(r), e);
            case "MultiPoint":
                for (a = 0, s = r.length; a < s; a++) i = c(r[a]), l.push(Hi(h, t, i, e)); return new Li(l);
            case "LineString":
            case "MultiLineString":
                return n = Yi(r, "LineString" === o.type ? 0 : 1, c), new Ri(n, e);
            case "Polygon":
            case "MultiPolygon":
                return n = Yi(r, "Polygon" === o.type ? 1 : 2, c), new Ni(n, e);
            case "GeometryCollection":
                for (a = 0, s = o.geometries.length; a < s; a++) { var d = Xi({ geometry: o.geometries[a], type: "Feature", properties: t.properties }, e);
                    d && l.push(d) } return new Li(l);
            default:
                throw new Error("Invalid GeoJSON object.") } }

    function Hi(t, e, i, n) { return t ? t(e, i) : new zi(i, n && n.markersInheritOptions && n) }

    function Bi(t) { return new X(t[1], t[0], t[2]) }

    function Yi(t, e, i) { for (var n, a = [], s = 0, o = t.length; s < o; s++) n = e ? Yi(t[s], e - 1, i) : (i || Bi)(t[s]), a.push(n); return a }

    function Wi(t, e) { return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [c(t.lng, e), c(t.lat, e), c(t.alt, e)] : [c(t.lng, e), c(t.lat, e)] }

    function ji(t, e, i, n) { for (var a = [], s = 0, o = t.length; s < o; s++) a.push(e ? ji(t[s], e - 1, i, n) : Wi(t[s], n)); return !e && i && a.push(a[0]), a }

    function Vi(t, i) { return t.feature ? e({}, t.feature, { geometry: i }) : Gi(i) }

    function Gi(t) { return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t } } var Zi = { toGeoJSON: function(t) { return Vi(this, { type: "Point", coordinates: Wi(this.getLatLng(), t) }) } };

    function Ui(t, e) { return new Fi(t, e) }
    zi.include(Zi), Di.include(Zi), Oi.include(Zi), Ri.include({ toGeoJSON: function(t) { var e = !fi(this._latlngs); return Vi(this, { type: (e ? "Multi" : "") + "LineString", coordinates: ji(this._latlngs, e ? 1 : 0, !1, t) }) } }), Ni.include({ toGeoJSON: function(t) { var e = !fi(this._latlngs),
                i = e && !fi(this._latlngs[0]),
                n = ji(this._latlngs, i ? 2 : e ? 1 : 0, !0, t); return e || (n = [n]), Vi(this, { type: (i ? "Multi" : "") + "Polygon", coordinates: n }) } }), Pi.include({ toMultiPoint: function(t) { var e = []; return this.eachLayer((function(i) { e.push(i.toGeoJSON(t).geometry.coordinates) })), Vi(this, { type: "MultiPoint", coordinates: e }) }, toGeoJSON: function(t) { var e = this.feature && this.feature.geometry && this.feature.geometry.type; if ("MultiPoint" === e) return this.toMultiPoint(t); var i = "GeometryCollection" === e,
                n = []; return this.eachLayer((function(e) { var a, s;
                e.toGeoJSON && (a = e.toGeoJSON(t), i ? n.push(a.geometry) : "FeatureCollection" === (s = Gi(a)).type ? n.push.apply(n, s.features) : n.push(s)) })), i ? Vi(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n } } }); var qi = Ui,
        $i = Ci.extend({ options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(t, e, i) { this._url = t, this._bounds = F(e), p(this, i) }, onAdd: function() { this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (de(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset() }, onRemove: function() { oe(this._image), this.options.interactive && this.removeInteractiveTarget(this._image) }, setOpacity: function(t) { return this.options.opacity = t, this._image && this._updateOpacity(), this }, setStyle: function(t) { return t.opacity && this.setOpacity(t.opacity), this }, bringToFront: function() { return this._map && le(this._image), this }, bringToBack: function() { return this._map && he(this._image), this }, setUrl: function(t) { return this._url = t, this._image && (this._image.src = t), this }, setBounds: function(t) { return this._bounds = F(t), this._map && this._reset(), this }, getEvents: function() { var t = { zoom: this._reset, viewreset: this._reset }; return this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, setZIndex: function(t) { return this.options.zIndex = t, this._updateZIndex(), this }, getBounds: function() { return this._bounds }, getElement: function() { return this._image }, _initImage: function() { var t = "IMG" === this._url.tagName,
                    e = this._image = t ? this._url : se("img");
                de(e, "leaflet-image-layer"), this._zoomAnimated && de(e, "leaflet-zoom-animated"), this.options.className && de(e, this.options.className), e.onselectstart = h, e.onmousemove = h, e.onload = a(this.fire, this, "load"), e.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt) }, _animateZoom: function(t) { var e = this._map.getZoomScale(t.zoom),
                    i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                xe(this._image, i, e) }, _reset: function() { var t = this._image,
                    e = new D(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    i = e.getSize();
                ve(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px" }, _updateOpacity: function() { ge(this._image, this.options.opacity) }, _updateZIndex: function() { this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex) }, _overlayOnError: function() { this.fire("error"); var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t) } }),
        Ki = $i.extend({ options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1 }, _initImage: function() { var t = "VIDEO" === this._url.tagName,
                    e = this._image = t ? this._url : se("video"); if (de(e, "leaflet-image-layer"), this._zoomAnimated && de(e, "leaflet-zoom-animated"), this.options.className && de(e, this.options.className), e.onselectstart = h, e.onmousemove = h, e.onloadeddata = a(this.fire, this, "load"), t) { for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++) n.push(i[s].src);
                    this._url = 0 < i.length ? n : [e.src] } else { x(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted; for (var o = 0; o < this._url.length; o++) { var r = se("source");
                        r.src = this._url[o], e.appendChild(r) } } } }),
        Ji = $i.extend({ _initImage: function() { var t = this._image = this._url;
                de(t, "leaflet-image-layer"), this._zoomAnimated && de(t, "leaflet-zoom-animated"), this.options.className && de(t, this.options.className), t.onselectstart = h, t.onmousemove = h } }),
        Qi = Ci.extend({ options: { offset: [0, 7], className: "", pane: "popupPane" }, initialize: function(t, e) { p(this, t), this._source = e }, onAdd: function(t) { this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ge(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ge(this._container, 1), this.bringToFront() }, onRemove: function(t) { t._fadeAnimated ? (ge(this._container, 0), this._removeTimeout = setTimeout(a(oe, void 0, this._container), 200)) : oe(this._container) }, getLatLng: function() { return this._latlng }, setLatLng: function(t) { return this._latlng = H(t), this._map && (this._updatePosition(), this._adjustPan()), this }, getContent: function() { return this._content }, setContent: function(t) { return this._content = t, this.update(), this }, getElement: function() { return this._container }, update: function() { this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan()) }, getEvents: function() { var t = { zoom: this._updatePosition, viewreset: this._updatePosition }; return this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, isOpen: function() { return !!this._map && this._map.hasLayer(this) }, bringToFront: function() { return this._map && le(this._container), this }, bringToBack: function() { return this._map && he(this._container), this }, _prepareOpen: function(t, e, i) { if (e instanceof Ci || (i = e, e = t), e instanceof Li)
                    for (var n in t._layers) { e = t._layers[n]; break }
                if (!i)
                    if (e.getCenter) i = e.getCenter();
                    else { if (!e.getLatLng) throw new Error("Unable to get source layer LatLng.");
                        i = e.getLatLng() }
                return this._source = e, this.update(), i }, _updateContent: function() { if (this._content) { var t = this._contentNode,
                        e = "function" == typeof this._content ? this._content(this._source || this) : this._content; if ("string" == typeof e) t.innerHTML = e;
                    else { for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(e) }
                    this.fire("contentupdate") } }, _updatePosition: function() { var t, e, i, n, a;
                this._map && (t = this._map.latLngToLayerPoint(this._latlng), e = O(this.options.offset), i = this._getAnchor(), this._zoomAnimated ? ve(this._container, t.add(i)) : e = e.add(t).add(i), n = this._containerBottom = -e.y, a = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x, this._container.style.bottom = n + "px", this._container.style.left = a + "px") }, _getAnchor: function() { return [0, 0] } }),
        tn = Qi.extend({ options: { maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: !0, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: !1, closeButton: !0, autoClose: !0, closeOnEscapeKey: !0, className: "" }, openOn: function(t) { return t.openPopup(this), this }, onAdd: function(t) { Qi.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ii || this._source.on("preclick", Oe)) }, onRemove: function(t) { Qi.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ii || this._source.off("preclick", Oe)) }, getEvents: function() { var t = Qi.prototype.getEvents.call(this); return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t }, _close: function() { this._map && this._map.closePopup(this) }, _initLayout: function() { var t, e = "leaflet-popup",
                    i = this._container = se("div", e + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    n = this._wrapper = se("div", e + "-content-wrapper", i);
                this._contentNode = se("div", e + "-content", n), Re(i), De(this._contentNode), Pe(i, "contextmenu", Oe), this._tipContainer = se("div", e + "-tip-container", i), this._tip = se("div", e + "-tip", this._tipContainer), this.options.closeButton && ((t = this._closeButton = se("a", e + "-close-button", i)).href = "#close", t.innerHTML = "&#215;", Pe(t, "click", this._onCloseButtonClick, this)) }, _updateLayout: function() { var t = this._contentNode,
                    e = t.style;
                e.width = "", e.whiteSpace = "nowrap"; var i = t.offsetWidth;
                i = Math.min(i, this.options.maxWidth);
                i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = ""; var n = t.offsetHeight,
                    a = this.options.maxHeight,
                    s = "leaflet-popup-scrolled";
                a && a < n ? (e.height = a + "px", de(t, s)) : ue(t, s), this._containerWidth = this._container.offsetWidth }, _animateZoom: function(t) { var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    i = this._getAnchor();
                ve(this._container, e.add(i)) }, _adjustPan: function() { var t, e, i, n, a, s, o, r, l, h, c, d;
                this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), t = this._map, e = parseInt(ae(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, (a = new z(this._containerLeft, -i - this._containerBottom))._add(be(this._container)), s = t.layerPointToContainerPoint(a), o = O(this.options.autoPanPadding), r = O(this.options.autoPanPaddingTopLeft || o), l = O(this.options.autoPanPaddingBottomRight || o), h = t.getSize(), d = c = 0, s.x + n + l.x > h.x && (c = s.x + n - h.x + l.x), s.x - c - r.x < 0 && (c = s.x - r.x), s.y + i + l.y > h.y && (d = s.y + i - h.y + l.y), s.y - d - r.y < 0 && (d = s.y - r.y), (c || d) && t.fire("autopanstart").panBy([c, d])) }, _onCloseButtonClick: function(t) { this._close(), Fe(t) }, _getAnchor: function() { return O(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]) } });
    Ue.mergeOptions({ closePopupOnClick: !0 }), Ue.include({ openPopup: function(t, e, i) { return t instanceof tn || (t = new tn(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t)) }, closePopup: function(t) { return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this } }), Ci.include({ bindPopup: function(t, e) { return t instanceof tn ? (p(t, e), (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new tn(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !0), this }, unbindPopup: function() { return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !1, this._popup = null), this }, openPopup: function(t, e) { return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e), this._map.openPopup(this._popup, e)), this }, closePopup: function() { return this._popup && this._popup._close(), this }, togglePopup: function(t) { return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this }, isPopupOpen: function() { return !!this._popup && this._popup.isOpen() }, setPopupContent: function(t) { return this._popup && this._popup.setContent(t), this }, getPopup: function() { return this._popup }, _openPopup: function(t) { var e = t.layer || t.target;
            this._popup && this._map && (Fe(t), e instanceof Ii ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng)) }, _movePopup: function(t) { this._popup.setLatLng(t.latlng) }, _onKeyPress: function(t) { 13 === t.originalEvent.keyCode && this._openPopup(t) } }); var en = Qi.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, interactive: !1, opacity: .9 }, onAdd: function(t) { Qi.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && this._source.fire("tooltipopen", { tooltip: this }, !0) }, onRemove: function(t) { Qi.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && this._source.fire("tooltipclose", { tooltip: this }, !0) }, getEvents: function() { var t = Qi.prototype.getEvents.call(this); return St && !this.options.permanent && (t.preclick = this._close), t }, _close: function() { this._map && this._map.closeTooltip(this) }, _initLayout: function() { var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = se("div", t) }, _updateLayout: function() {}, _adjustPan: function() {}, _setPosition: function(t) { var e, i = this._map,
                n = this._container,
                a = i.latLngToContainerPoint(i.getCenter()),
                s = i.layerPointToContainerPoint(t),
                o = this.options.direction,
                r = n.offsetWidth,
                l = n.offsetHeight,
                h = O(this.options.offset),
                c = this._getAnchor(),
                d = "top" === o ? (e = r / 2, l) : "bottom" === o ? (e = r / 2, 0) : (e = "center" === o ? r / 2 : "right" === o ? 0 : "left" === o ? r : s.x < a.x ? (o = "right", 0) : (o = "left", r + 2 * (h.x + c.x)), l / 2);
            t = t.subtract(O(e, d, !0)).add(h).add(c), ue(n, "leaflet-tooltip-right"), ue(n, "leaflet-tooltip-left"), ue(n, "leaflet-tooltip-top"), ue(n, "leaflet-tooltip-bottom"), de(n, "leaflet-tooltip-" + o), ve(n, t) }, _updatePosition: function() { var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t) }, setOpacity: function(t) { this.options.opacity = t, this._container && ge(this._container, t) }, _animateZoom: function(t) { var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(e) }, _getAnchor: function() { return O(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]) } });
    Ue.include({ openTooltip: function(t, e, i) { return t instanceof en || (t = new en(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t) }, closeTooltip: function(t) { return t && this.removeLayer(t), this } }), Ci.include({ bindTooltip: function(t, e) { return t instanceof en ? (p(t, e), (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new en(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this }, unbindTooltip: function() { return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this }, _initTooltipInteractions: function(t) { var e, i;!t && this._tooltipHandlersAdded || (e = t ? "off" : "on", i = { remove: this.closeTooltip, move: this._moveTooltip }, this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), St && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t) }, openTooltip: function(t, e) { return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (de(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this }, closeTooltip: function() { return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (ue(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this }, toggleTooltip: function(t) { return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this }, isTooltipOpen: function() { return this._tooltip.isOpen() }, setTooltipContent: function(t) { return this._tooltip && this._tooltip.setContent(t), this }, getTooltip: function() { return this._tooltip }, _openTooltip: function(t) { var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0) }, _moveTooltip: function(t) { var e, i, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n) } }); var nn = Ti.extend({ options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(t) { var e, i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                n = this.options; return n.html instanceof Element ? (re(i), i.appendChild(n.html)) : i.innerHTML = !1 !== n.html ? n.html : "", n.bgPos && (e = O(n.bgPos), i.style.backgroundPosition = -e.x + "px " + -e.y + "px"), this._setIconStyles(i, "icon"), i }, createShadow: function() { return null } });
    Ti.Default = Mi; var an = Ci.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: bt, updateWhenZooming: !0, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: !1, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(t) { p(this, t) }, onAdd: function() { this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update() }, beforeAdd: function(t) { t._addZoomLimit(this) }, onRemove: function(t) { this._removeAllTiles(), oe(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0 }, bringToFront: function() { return this._map && (le(this._container), this._setAutoZIndex(Math.max)), this }, bringToBack: function() { return this._map && (he(this._container), this._setAutoZIndex(Math.min)), this }, getContainer: function() { return this._container }, setOpacity: function(t) { return this.options.opacity = t, this._updateOpacity(), this }, setZIndex: function(t) { return this.options.zIndex = t, this._updateZIndex(), this }, isLoading: function() { return this._loading }, redraw: function() { return this._map && (this._removeAllTiles(), this._update()), this }, getEvents: function() { var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd }; return this.options.updateWhenIdle || (this._onMove || (this._onMove = r(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, createTile: function() { return document.createElement("div") }, getTileSize: function() { var t = this.options.tileSize; return t instanceof z ? t : new z(t, t) }, _updateZIndex: function() { this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex) }, _setAutoZIndex: function(t) { for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), a = 0, s = i.length; a < s; a++) e = i[a].style.zIndex, i[a] !== this._container && e && (n = t(n, +e));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex()) }, _updateOpacity: function() { if (this._map && !et) { ge(this._container, this.options.opacity); var t = +new Date,
                        e = !1,
                        i = !1; for (var n in this._tiles) { var a, s = this._tiles[n];
                        s.current && s.loaded && (a = Math.min(1, (t - s.loaded) / 200), ge(s.el, a), a < 1 ? e = !0 : (s.active ? i = !0 : this._onOpaqueTile(s), s.active = !0)) }
                    i && !this._noPrune && this._pruneTiles(), e && (C(this._fadeFrame), this._fadeFrame = A(this._updateOpacity, this)) } }, _onOpaqueTile: h, _initContainer: function() { this._container || (this._container = se("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container)) }, _updateLevels: function() { var t = this._tileZoom,
                    e = this.options.maxZoom; if (void 0 !== t) { for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (oe(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]); var n = this._levels[t],
                        a = this._map; return n || ((n = this._levels[t] = {}).el = se("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = a.project(a.unproject(a.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, a.getCenter(), a.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n } }, _onUpdateLevel: h, _onRemoveLevel: h, _onCreateLevel: h, _pruneTiles: function() { if (this._map) { var t, e, i, n = this._map.getZoom(); if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                    else { for (t in this._tiles)(i = this._tiles[t]).retain = i.current; for (t in this._tiles)(i = this._tiles[t]).current && !i.active && (e = i.coords, this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2)); for (t in this._tiles) this._tiles[t].retain || this._removeTile(t) } } }, _removeTilesAtZoom: function(t) { for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e) }, _removeAllTiles: function() { for (var t in this._tiles) this._removeTile(t) }, _invalidateAll: function() { for (var t in this._levels) oe(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0 }, _retainParent: function(t, e, i, n) { var a = Math.floor(t / 2),
                    s = Math.floor(e / 2),
                    o = i - 1,
                    r = new z(+a, +s);
                r.z = +o; var l = this._tileCoordsToKey(r),
                    h = this._tiles[l]; return h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), n < o && this._retainParent(a, s, o, n)) }, _retainChildren: function(t, e, i, n) { for (var a = 2 * t; a < 2 * t + 2; a++)
                    for (var s = 2 * e; s < 2 * e + 2; s++) { var o = new z(a, s);
                        o.z = i + 1; var r = this._tileCoordsToKey(o),
                            l = this._tiles[r];
                        l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), i + 1 < n && this._retainChildren(a, s, i + 1, n)) } }, _resetView: function(t) { var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e) }, _animateZoom: function(t) { this._setView(t.center, t.zoom, !0, t.noUpdate) }, _clampZoom: function(t) { var e = this.options; return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t }, _setView: function(t, e, i, n) { var a = Math.round(e),
                    s = (a = void 0 !== this.options.maxZoom && a > this.options.maxZoom || void 0 !== this.options.minZoom && a < this.options.minZoom ? void 0 : this._clampZoom(a), this.options.updateWhenZooming && a !== this._tileZoom);
                n && !s || (this._tileZoom = a, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== a && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e) }, _setZoomTransforms: function(t, e) { for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e) }, _setZoomTransform: function(t, e, i) { var n = this._map.getZoomScale(i, t.zoom),
                    a = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                vt ? xe(t.el, a, n) : ve(t.el, a) }, _resetGrid: function() { var t = this._map,
                    e = t.options.crs,
                    i = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    a = this._map.getPixelWorldBounds(this._tileZoom);
                a && (this._globalTileRange = this._pxBoundsToTileRange(a)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)] }, _onMoveEnd: function() { this._map && !this._map._animatingZoom && this._update() }, _getTiledPixelBounds: function(t) { var e = this._map,
                    i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                    n = e.getZoomScale(i, this._tileZoom),
                    a = e.project(t, this._tileZoom).floor(),
                    s = e.getSize().divideBy(2 * n); return new D(a.subtract(s), a.add(s)) }, _update: function(t) { var e = this._map; if (e) { var i = this._clampZoom(e.getZoom()); if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) { var n = this._getTiledPixelBounds(t),
                            a = this._pxBoundsToTileRange(n),
                            s = a.getCenter(),
                            o = [],
                            r = this.options.keepBuffer,
                            l = new D(a.getBottomLeft().subtract([r, -r]), a.getTopRight().add([r, -r])); if (!(isFinite(a.min.x) && isFinite(a.min.y) && isFinite(a.max.x) && isFinite(a.max.y))) throw new Error("Attempted to load an infinite number of tiles"); for (var h in this._tiles) { var c = this._tiles[h].coords;
                            c.z === this._tileZoom && l.contains(new z(c.x, c.y)) || (this._tiles[h].current = !1) } if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);
                        else { for (var d = a.min.y; d <= a.max.y; d++)
                                for (var u = a.min.x; u <= a.max.x; u++) { var p, f = new z(u, d);
                                    f.z = this._tileZoom, this._isValidTile(f) && ((p = this._tiles[this._tileCoordsToKey(f)]) ? p.current = !0 : o.push(f)) }
                            if (o.sort((function(t, e) { return t.distanceTo(s) - e.distanceTo(s) })), 0 !== o.length) { this._loading || (this._loading = !0, this.fire("loading")); var g = document.createDocumentFragment(); for (u = 0; u < o.length; u++) this._addTile(o[u], g);
                                this._level.el.appendChild(g) } } } } }, _isValidTile: function(t) { var e = this._map.options.crs; if (!e.infinite) { var i = this._globalTileRange; if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1 } if (!this.options.bounds) return !0; var n = this._tileCoordsToBounds(t); return F(this.options.bounds).overlaps(n) }, _keyToBounds: function(t) { return this._tileCoordsToBounds(this._keyToTileCoords(t)) }, _tileCoordsToNwSe: function(t) { var e = this._map,
                    i = this.getTileSize(),
                    n = t.scaleBy(i),
                    a = n.add(i); return [e.unproject(n, t.z), e.unproject(a, t.z)] }, _tileCoordsToBounds: function(t) { var e = this._tileCoordsToNwSe(t),
                    i = new N(e[0], e[1]); return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i }, _tileCoordsToKey: function(t) { return t.x + ":" + t.y + ":" + t.z }, _keyToTileCoords: function(t) { var e = t.split(":"),
                    i = new z(+e[0], +e[1]); return i.z = +e[2], i }, _removeTile: function(t) { var e = this._tiles[t];
                e && (oe(e.el), delete this._tiles[t], this.fire("tileunload", { tile: e.el, coords: this._keyToTileCoords(t) })) }, _initTile: function(t) { de(t, "leaflet-tile"); var e = this.getTileSize();
                t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = h, t.onmousemove = h, et && this.options.opacity < 1 && ge(t, this.options.opacity), at && !st && (t.style.WebkitBackfaceVisibility = "hidden") }, _addTile: function(t, e) { var i = this._getTilePos(t),
                    n = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && A(a(this._tileReady, this, t, null, s)), ve(s, i), this._tiles[n] = { el: s, coords: t, current: !0 }, e.appendChild(s), this.fire("tileloadstart", { tile: s, coords: t }) }, _tileReady: function(t, e, i) { e && this.fire("tileerror", { error: e, tile: i, coords: t }); var n = this._tileCoordsToKey(t);
                (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (ge(i.el, 0), C(this._fadeFrame), this._fadeFrame = A(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (de(i.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: i.el, coords: t })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), et || !this._map._fadeAnimated ? A(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250))) }, _getTilePos: function(t) { return t.scaleBy(this.getTileSize()).subtract(this._level.origin) }, _wrapCoords: function(t) { var e = new z(this._wrapX ? l(t.x, this._wrapX) : t.x, this._wrapY ? l(t.y, this._wrapY) : t.y); return e.z = t.z, e }, _pxBoundsToTileRange: function(t) { var e = this.getTileSize(); return new D(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1])) }, _noTilesToLoad: function() { for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0 } }),
        sn = an.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1 }, initialize: function(t, e) { this._url = t, (e = p(this, e)).detectRetina && Pt && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), at || this.on("tileunload", this._onTileRemove) }, setUrl: function(t, e) { return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this }, createTile: function(t, e) { var i = document.createElement("img"); return Pe(i, "load", a(this._tileOnLoad, this, e, i)), Pe(i, "error", a(this._tileOnError, this, e, i)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), i.alt = "", i.setAttribute("role", "presentation"), i.src = this.getTileUrl(t), i }, getTileUrl: function(t) { var i, n = { r: Pt ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() }; return this._map && !this._map.options.crs.infinite && (i = this._globalTileRange.max.y - t.y, this.options.tms && (n.y = i), n["-y"] = i), m(this._url, e(n, this.options)) }, _tileOnLoad: function(t, e) { et ? setTimeout(a(t, this, null, e), 0) : t(null, e) }, _tileOnError: function(t, e, i) { var n = this.options.errorTileUrl;
                n && e.getAttribute("src") !== n && (e.src = n), t(i, e) }, _onTileRemove: function(t) { t.tile.onload = null }, _getZoomForUrl: function() { var t = this._tileZoom,
                    e = this.options.maxZoom; return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset }, _getSubdomain: function(t) { var e = Math.abs(t.x + t.y) % this.options.subdomains.length; return this.options.subdomains[e] }, _abortLoading: function() { var t, e; for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = h, e.onerror = h, e.complete || (e.src = b, oe(e), delete this._tiles[t])) }, _removeTile: function(t) { var e = this._tiles[t]; if (e) return rt || e.el.setAttribute("src", b), an.prototype._removeTile.call(this, t) }, _tileReady: function(t, e, i) { if (this._map && (!i || i.getAttribute("src") !== b)) return an.prototype._tileReady.call(this, t, e, i) } });

    function on(t, e) { return new sn(t, e) } var rn = sn.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" }, options: { crs: null, uppercase: !1 }, initialize: function(t, i) { this._url = t; var n = e({}, this.defaultWmsParams); for (var a in i) a in this.options || (n[a] = i[a]); var s = (i = p(this, i)).detectRetina && Pt ? 2 : 1,
                o = this.getTileSize();
            n.width = o.x * s, n.height = o.y * s, this.wmsParams = n }, onAdd: function(t) { this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version); var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code, sn.prototype.onAdd.call(this, t) }, getTileUrl: function(t) { var e = this._tileCoordsToNwSe(t),
                i = this._crs,
                n = R(i.project(e[0]), i.project(e[1])),
                a = n.min,
                s = n.max,
                o = (1.3 <= this._wmsVersion && this._crs === Si ? [a.y, a.x, s.y, s.x] : [a.x, a.y, s.x, s.y]).join(","),
                r = sn.prototype.getTileUrl.call(this, t); return r + f(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o }, setParams: function(t, i) { return e(this.wmsParams, t), i || this.redraw(), this } });
    sn.WMS = rn, on.wms = function(t, e) { return new rn(t, e) }; var ln = Ci.extend({ options: { padding: .1, tolerance: 0 }, initialize: function(t) { p(this, t), o(this), this._layers = this._layers || {} }, onAdd: function() { this._container || (this._initContainer(), this._zoomAnimated && de(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this) }, onRemove: function() { this.off("update", this._updatePaths, this), this._destroyContainer() }, getEvents: function() { var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd }; return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t }, _onAnimZoom: function(t) { this._updateTransform(t.center, t.zoom) }, _onZoom: function() { this._updateTransform(this._map.getCenter(), this._map.getZoom()) }, _updateTransform: function(t, e) { var i = this._map.getZoomScale(e, this._zoom),
                    n = be(this._container),
                    a = this._map.getSize().multiplyBy(.5 + this.options.padding),
                    s = this._map.project(this._center, e),
                    o = this._map.project(t, e).subtract(s),
                    r = a.multiplyBy(-i).add(n).add(a).subtract(o);
                vt ? xe(this._container, r, i) : ve(this._container, r) }, _reset: function() { for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset() }, _onZoomEnd: function() { for (var t in this._layers) this._layers[t]._project() }, _updatePaths: function() { for (var t in this._layers) this._layers[t]._update() }, _update: function() { var t = this.options.padding,
                    e = this._map.getSize(),
                    i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                this._bounds = new D(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom() } }),
        hn = ln.extend({ getEvents: function() { var t = ln.prototype.getEvents.call(this); return t.viewprereset = this._onViewPreReset, t }, _onViewPreReset: function() { this._postponeUpdatePaths = !0 }, onAdd: function() { ln.prototype.onAdd.call(this), this._draw() }, _initContainer: function() { var t = this._container = document.createElement("canvas");
                Pe(t, "mousemove", this._onMouseMove, this), Pe(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Pe(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d") }, _destroyContainer: function() { C(this._redrawRequest), delete this._ctx, oe(this._container), Te(this._container), delete this._container }, _updatePaths: function() { if (!this._postponeUpdatePaths) { for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                    this._redraw() } }, _update: function() { var t, e, i, n;
                this._map._animatingZoom && this._bounds || (ln.prototype._update.call(this), t = this._bounds, e = this._container, i = t.getSize(), n = Pt ? 2 : 1, ve(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", Pt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")) }, _reset: function() { ln.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths()) }, _initPath: function(t) { this._updateDashArray(t); var e = (this._layers[o(t)] = t)._order = { layer: t, prev: this._drawLast, next: null };
                this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast }, _addPath: function(t) { this._requestRedraw(t) }, _removePath: function(t) { var e = t._order,
                    i = e.next,
                    n = e.prev;
                i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[o(t)], this._requestRedraw(t) }, _updatePath: function(t) { this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t) }, _updateStyle: function(t) { this._updateDashArray(t), this._requestRedraw(t) }, _updateDashArray: function(t) { if ("string" == typeof t.options.dashArray) { for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], a = 0; a < i.length; a++) { if (e = Number(i[a]), isNaN(e)) return;
                        n.push(e) }
                    t.options._dashArray = n } else t.options._dashArray = t.options.dashArray }, _requestRedraw: function(t) { this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || A(this._redraw, this)) }, _extendRedrawBounds: function(t) { var e;
                t._pxBounds && (e = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new D, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))) }, _redraw: function() { this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null }, _clear: function() { var t, e = this._redrawBounds;
                e ? (t = e.getSize(), this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore()) }, _draw: function() { var t, e, i = this._redrawBounds;
                this._ctx.save(), i && (e = i.getSize(), this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()), this._drawing = !0; for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                this._drawing = !1, this._ctx.restore() }, _updatePoly: function(t, e) { if (this._drawing) { var i, n, a, s, o = t._parts,
                        r = o.length,
                        l = this._ctx; if (r) { for (l.beginPath(), i = 0; i < r; i++) { for (n = 0, a = o[i].length; n < a; n++) s = o[i][n], l[n ? "lineTo" : "moveTo"](s.x, s.y);
                            e && l.closePath() }
                        this._fillStroke(l, t) } } }, _updateCircle: function(t) { var e, i, n, a;
                this._drawing && !t._empty() && (e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), 1 != (a = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(), i.scale(1, a)), i.beginPath(), i.arc(e.x, e.y / a, n, 0, 2 * Math.PI, !1), 1 != a && i.restore(), this._fillStroke(i, t)) }, _fillStroke: function(t, e) { var i = e.options;
                i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke()) }, _onClick: function(t) { for (var e, i, n = this._map.mouseEventToLayerPoint(t), a = this._drawFirst; a; a = a.next)(e = a.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" !== t.type) && this._map._draggableMoved(e) || (i = e));
                i && (We(t), this._fireEvent([i], t)) }, _onMouseMove: function(t) { var e;!this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, e)) }, _handleMouseOut: function(t) { var e = this._hoveredLayer;
                e && (ue(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1) }, _handleMouseHover: function(t, e) { if (!this._mouseHoverThrottled) { for (var i, n, s = this._drawFirst; s; s = s.next)(i = s.layer).options.interactive && i._containsPoint(e) && (n = i);
                    n !== this._hoveredLayer && (this._handleMouseOut(t), n && (de(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(a((function() { this._mouseHoverThrottled = !1 }), this), 32) } }, _fireEvent: function(t, e, i) { this._map._fireDOMEvent(e, i || e.type, t) }, _bringToFront: function(t) { var e, i, n = t._order;
                n && (e = n.next, i = n.prev, e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t))) }, _bringToBack: function(t) { var e, i, n = t._order;
                n && (e = n.next, (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t))) } });

    function cn(t) { return Tt ? new hn(t) : null } var dn = function() { try { return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function(t) { return document.createElement("<lvml:" + t + ' class="lvml">') } } catch (t) { return function(t) { return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">') } } }(),
        un = { _initContainer: function() { this._container = se("div", "leaflet-vml-container") }, _update: function() { this._map._animatingZoom || (ln.prototype._update.call(this), this.fire("update")) }, _initPath: function(t) { var e = t._container = dn("shape");
                de(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = dn("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[o(t)] = t }, _addPath: function(t) { var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e) }, _removePath: function(t) { var e = t._container;
                oe(e), t.removeInteractiveTarget(e), delete this._layers[o(t)] }, _updateStyle: function(t) { var e = t._stroke,
                    i = t._fill,
                    n = t.options,
                    a = t._container;
                a.stroked = !!n.stroke, a.filled = !!n.fill, n.stroke ? (e = e || (t._stroke = dn("stroke")), a.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = x(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (a.removeChild(e), t._stroke = null), n.fill ? (i = i || (t._fill = dn("fill")), a.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (a.removeChild(i), t._fill = null) }, _updateCircle: function(t) { var e = t._point.round(),
                    i = Math.round(t._radius),
                    n = Math.round(t._radiusY || i);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600") }, _setPath: function(t, e) { t._path.v = e }, _bringToFront: function(t) { le(t._container) }, _bringToBack: function(t) { he(t._container) } },
        pn = Et ? dn : K,
        fn = ln.extend({ getEvents: function() { var t = ln.prototype.getEvents.call(this); return t.zoomstart = this._onZoomStart, t }, _initContainer: function() { this._container = pn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = pn("g"), this._container.appendChild(this._rootGroup) }, _destroyContainer: function() { oe(this._container), Te(this._container), delete this._container, delete this._rootGroup, delete this._svgSize }, _onZoomStart: function() { this._update() }, _update: function() { var t, e, i;
                this._map._animatingZoom && this._bounds || (ln.prototype._update.call(this), e = (t = this._bounds).getSize(), i = this._container, this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), ve(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")) }, _initPath: function(t) { var e = t._path = pn("path");
                t.options.className && de(e, t.options.className), t.options.interactive && de(e, "leaflet-interactive"), this._updateStyle(t), this._layers[o(t)] = t }, _addPath: function(t) { this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path) }, _removePath: function(t) { oe(t._path), t.removeInteractiveTarget(t._path), delete this._layers[o(t)] }, _updatePath: function(t) { t._project(), t._update() }, _updateStyle: function(t) { var e = t._path,
                    i = t.options;
                e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none")) }, _updatePoly: function(t, e) { this._setPath(t, J(t._parts, e)) }, _updateCircle: function(t) { var e = t._point,
                    i = Math.max(Math.round(t._radius), 1),
                    n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
                    a = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                this._setPath(t, a) }, _setPath: function(t, e) { t._path.setAttribute("d", e) }, _bringToFront: function(t) { le(t._path) }, _bringToBack: function(t) { he(t._path) } });

    function gn(t) { return Mt || Et ? new fn(t) : null }
    Et && fn.include(un), Ue.include({ getRenderer: function(t) { var e = (e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer()); return this.hasLayer(e) || this.addLayer(e), e }, _getPaneRenderer: function(t) { if ("overlayPane" === t || void 0 === t) return !1; var e = this._paneRenderers[t]; return void 0 === e && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e }, _createRenderer: function(t) { return this.options.preferCanvas && cn(t) || gn(t) } }); var mn = Ni.extend({ initialize: function(t, e) { Ni.prototype.initialize.call(this, this._boundsToLatLngs(t), e) }, setBounds: function(t) { return this.setLatLngs(this._boundsToLatLngs(t)) }, _boundsToLatLngs: function(t) { return [(t = F(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()] } });
    fn.create = pn, fn.pointsToPath = J, Fi.geometryToLayer = Xi, Fi.coordsToLatLng = Bi, Fi.coordsToLatLngs = Yi, Fi.latLngToCoords = Wi, Fi.latLngsToCoords = ji, Fi.getFeature = Vi, Fi.asFeature = Gi, Ue.mergeOptions({ boxZoom: !0 }); var xn = ei.extend({ initialize: function(t) { this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this) }, addHooks: function() { Pe(this._container, "mousedown", this._onMouseDown, this) }, removeHooks: function() { Te(this._container, "mousedown", this._onMouseDown, this) }, moved: function() { return this._moved }, _destroy: function() { oe(this._pane), delete this._pane }, _resetState: function() { this._resetStateTimeout = 0, this._moved = !1 }, _clearDeferredResetState: function() { 0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0) }, _onMouseDown: function(t) { if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), Zt(), ye(), this._startPoint = this._map.mouseEventToContainerPoint(t), Pe(document, { contextmenu: Fe, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this) }, _onMouseMove: function(t) { this._moved || (this._moved = !0, this._box = se("div", "leaflet-zoom-box", this._container), de(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t); var e = new D(this._point, this._startPoint),
                i = e.getSize();
            ve(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px" }, _finish: function() { this._moved && (oe(this._box), ue(this._container, "leaflet-crosshair")), Ut(), we(), Te(document, { contextmenu: Fe, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this) }, _onMouseUp: function(t) { var e;
            1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0), e = new N(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e }))) }, _onKeyDown: function(t) { 27 === t.keyCode && this._finish() } });
    Ue.addInitHook("addHandler", "boxZoom", xn), Ue.mergeOptions({ doubleClickZoom: !0 }); var vn = ei.extend({ addHooks: function() { this._map.on("dblclick", this._onDoubleClick, this) }, removeHooks: function() { this._map.off("dblclick", this._onDoubleClick, this) }, _onDoubleClick: function(t) { var e = this._map,
                i = e.getZoom(),
                n = e.options.zoomDelta,
                a = t.originalEvent.shiftKey ? i - n : i + n; "center" === e.options.doubleClickZoom ? e.setZoom(a) : e.setZoomAround(t.containerPoint, a) } });
    Ue.addInitHook("addHandler", "doubleClickZoom", vn), Ue.mergeOptions({ dragging: !0, inertia: !st, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: .2, worldCopyJump: !1, maxBoundsViscosity: 0 }); var bn = ei.extend({ addHooks: function() { var t;
            this._draggable || (t = this._map, this._draggable = new ri(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), de(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [] }, removeHooks: function() { ue(this._map._container, "leaflet-grab"), ue(this._map._container, "leaflet-touch-drag"), this._draggable.disable() }, moved: function() { return this._draggable && this._draggable._moved }, moving: function() { return this._draggable && this._draggable._moving }, _onDragStart: function() { var t, e = this._map;
            e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = F(this._map.options.maxBounds), this._offsetLimit = R(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []) }, _onDrag: function(t) { var e, i;
            this._map.options.inertia && (e = this._lastTime = +new Date, i = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(i), this._times.push(e), this._prunePositions(e)), this._map.fire("move", t).fire("drag", t) }, _prunePositions: function(t) { for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift() }, _onZoomEnd: function() { var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x }, _viscousLimit: function(t, e) { return t - (t - e) * this._viscosity }, _onPreDragLimit: function() { var t, e;
            this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit, t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)) }, _onPreDragWrap: function() { var t = this._worldWidth,
                e = Math.round(t / 2),
                i = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                a = (n - e + i) % t + e - i,
                s = (n + e + i) % t - e - i,
                o = Math.abs(a + i) < Math.abs(s + i) ? a : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = o }, _onDragEnd: function(t) { var e, i, n, a, s, o, r, l, h, c = this._map,
                d = c.options,
                u = !d.inertia || this._times.length < 2;
            c.fire("dragend", t), u ? c.fire("moveend") : (this._prunePositions(+new Date), e = this._lastPos.subtract(this._positions[0]), i = (this._lastTime - this._times[0]) / 1e3, n = d.easeLinearity, s = (a = e.multiplyBy(n / i)).distanceTo([0, 0]), o = Math.min(d.inertiaMaxSpeed, s), r = a.multiplyBy(o / s), l = o / (d.inertiaDeceleration * n), (h = r.multiplyBy(-l / 2).round()).x || h.y ? (h = c._limitOffset(h, c.options.maxBounds), A((function() { c.panBy(h, { duration: l, easeLinearity: n, noMoveStart: !0, animate: !0 }) }))) : c.fire("moveend")) } });
    Ue.addInitHook("addHandler", "dragging", bn), Ue.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }); var yn = ei.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(t) { this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta) }, addHooks: function() { var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), Pe(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this) }, removeHooks: function() { this._removeHooks(), Te(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this) }, _onMouseDown: function() { var t, e, i, n;
            this._focused || (t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft, this._map._container.focus(), window.scrollTo(n, i)) }, _onFocus: function() { this._focused = !0, this._map.fire("focus") }, _onBlur: function() { this._focused = !1, this._map.fire("blur") }, _setPanDelta: function(t) { for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, a = i.left.length; n < a; n++) e[i.left[n]] = [-1 * t, 0]; for (n = 0, a = i.right.length; n < a; n++) e[i.right[n]] = [t, 0]; for (n = 0, a = i.down.length; n < a; n++) e[i.down[n]] = [0, t]; for (n = 0, a = i.up.length; n < a; n++) e[i.up[n]] = [0, -1 * t] }, _setZoomDelta: function(t) { for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, a = i.zoomIn.length; n < a; n++) e[i.zoomIn[n]] = t; for (n = 0, a = i.zoomOut.length; n < a; n++) e[i.zoomOut[n]] = -t }, _addHooks: function() { Pe(document, "keydown", this._onKeyDown, this) }, _removeHooks: function() { Te(document, "keydown", this._onKeyDown, this) }, _onKeyDown: function(t) { if (!(t.altKey || t.ctrlKey || t.metaKey)) { var e, i = t.keyCode,
                    n = this._map; if (i in this._panKeys) n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i], t.shiftKey && (e = O(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else { if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup() }
                Fe(t) } } });
    Ue.addInitHook("addHandler", "keyboard", yn), Ue.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }); var wn = ei.extend({ addHooks: function() { Pe(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0 }, removeHooks: function() { Te(this._map._container, "wheel", this._onWheelScroll, this) }, _onWheelScroll: function(t) { var e = Be(t),
                i = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date); var n = Math.max(i - (new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), n), Fe(t) }, _performZoom: function() { var t = this._map,
                e = t.getZoom(),
                i = this._map.options.zoomSnap || 0;
            t._stop(); var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                a = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = i ? Math.ceil(a / i) * i : a,
                o = t._limitZoom(e + (0 < this._delta ? s : -s)) - e;
            this._delta = 0, this._startTime = null, o && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + o) : t.setZoomAround(this._lastMousePos, e + o)) } });
    Ue.addInitHook("addHandler", "scrollWheelZoom", wn), Ue.mergeOptions({ tap: !0, tapTolerance: 15 }); var _n = ei.extend({ addHooks: function() { Pe(this._map._container, "touchstart", this._onDown, this) }, removeHooks: function() { Te(this._map._container, "touchstart", this._onDown, this) }, _onDown: function(t) { if (t.touches) { if (Ne(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout); var e = t.touches[0],
                    i = e.target;
                this._startPos = this._newPos = new z(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && de(i, "leaflet-active"), this._holdTimeout = setTimeout(a((function() { this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e)) }), this), 1e3), this._simulateEvent("mousedown", e), Pe(document, { touchmove: this._onMove, touchend: this._onUp }, this) } }, _onUp: function(t) { var e, i;
            clearTimeout(this._holdTimeout), Te(document, { touchmove: this._onMove, touchend: this._onUp }, this), this._fireClick && t && t.changedTouches && ((i = (e = t.changedTouches[0]).target) && i.tagName && "a" === i.tagName.toLowerCase() && ue(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)) }, _isTapValid: function() { return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance }, _onMove: function(t) { var e = t.touches[0];
            this._newPos = new z(e.clientX, e.clientY), this._simulateEvent("mousemove", e) }, _simulateEvent: function(t, e) { var i = document.createEvent("MouseEvents");
            i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i) } });!St || kt && !dt || Ue.addInitHook("addHandler", "tap", _n), Ue.mergeOptions({ touchZoom: St && !st, bounceAtZoomLimits: !0 }); var kn = ei.extend({ addHooks: function() { de(this._map._container, "leaflet-touch-zoom"), Pe(this._map._container, "touchstart", this._onTouchStart, this) }, removeHooks: function() { ue(this._map._container, "leaflet-touch-zoom"), Te(this._map._container, "touchstart", this._onTouchStart, this) }, _onTouchStart: function(t) { var e, i, n = this._map;!t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]), i = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))), this._startDist = e.distanceTo(i), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), Pe(document, "touchmove", this._onTouchMove, this), Pe(document, "touchend", this._onTouchEnd, this), Ne(t)) }, _onTouchMove: function(t) { if (t.touches && 2 === t.touches.length && this._zooming) { var e = this._map,
                    i = e.mouseEventToContainerPoint(t.touches[0]),
                    n = e.mouseEventToContainerPoint(t.touches[1]),
                    s = i.distanceTo(n) / this._startDist; if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && 1 < s) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) { if (this._center = this._startLatLng, 1 == s) return } else { var o = i._add(n)._divideBy(2)._subtract(this._centerPoint); if (1 == s && 0 === o.x && 0 === o.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(o), this._zoom) }
                this._moved || (e._moveStart(!0, !1), this._moved = !0), C(this._animRequest); var r = a(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 });
                this._animRequest = A(r, this, !0), Ne(t) } }, _onTouchEnd: function() { this._moved && this._zooming ? (this._zooming = !1, C(this._animRequest), Te(document, "touchmove", this._onTouchMove, this), Te(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1 } });
    Ue.addInitHook("addHandler", "touchZoom", kn), Ue.BoxZoom = xn, Ue.DoubleClickZoom = vn, Ue.Drag = bn, Ue.Keyboard = yn, Ue.ScrollWheelZoom = wn, Ue.Tap = _n, Ue.TouchZoom = kn, t.version = "1.7.1", t.Control = $e, t.control = qe, t.Browser = It, t.Evented = E, t.Mixin = ni, t.Util = P, t.Class = T, t.Handler = ei, t.extend = e, t.bind = a, t.stamp = o, t.setOptions = p, t.DomEvent = Ge, t.DomUtil = Ce, t.PosAnimation = Ze, t.Draggable = ri, t.LineUtil = mi, t.PolyUtil = bi, t.Point = z, t.point = O, t.Bounds = D, t.bounds = R, t.Transformation = G, t.transformation = Z, t.Projection = _i, t.LatLng = X, t.latLng = H, t.LatLngBounds = N, t.latLngBounds = F, t.CRS = Y, t.GeoJSON = Fi, t.geoJSON = Ui, t.geoJson = qi, t.Layer = Ci, t.LayerGroup = Pi, t.layerGroup = function(t, e) { return new Pi(t, e) }, t.FeatureGroup = Li, t.featureGroup = function(t, e) { return new Li(t, e) }, t.ImageOverlay = $i, t.imageOverlay = function(t, e, i) { return new $i(t, e, i) }, t.VideoOverlay = Ki, t.videoOverlay = function(t, e, i) { return new Ki(t, e, i) }, t.SVGOverlay = Ji, t.svgOverlay = function(t, e, i) { return new Ji(t, e, i) }, t.DivOverlay = Qi, t.Popup = tn, t.popup = function(t, e) { return new tn(t, e) }, t.Tooltip = en, t.tooltip = function(t, e) { return new en(t, e) }, t.Icon = Ti, t.icon = function(t) { return new Ti(t) }, t.DivIcon = nn, t.divIcon = function(t) { return new nn(t) }, t.Marker = zi, t.marker = function(t, e) { return new zi(t, e) }, t.TileLayer = sn, t.tileLayer = on, t.GridLayer = an, t.gridLayer = function(t) { return new an(t) }, t.SVG = fn, t.svg = gn, t.Renderer = ln, t.Canvas = hn, t.canvas = cn, t.Path = Ii, t.CircleMarker = Oi, t.circleMarker = function(t, e) { return new Oi(t, e) }, t.Circle = Di, t.circle = function(t, e, i) { return new Di(t, e, i) }, t.Polyline = Ri, t.polyline = function(t, e) { return new Ri(t, e) }, t.Polygon = Ni, t.polygon = function(t, e) { return new Ni(t, e) }, t.Rectangle = mn, t.rectangle = function(t, e) { return new mn(t, e) }, t.Map = Ue, t.map = function(t, e) { return new Ue(t, e) }; var Sn = window.L;
    t.noConflict = function() { return window.L = Sn, this }, window.L = t }));