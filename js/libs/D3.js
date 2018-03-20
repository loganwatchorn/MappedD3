// https://d3js.org Version 4.5.0. Copyright 2017 Mike Bostock.
(function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.d3 = t.d3 || {})
})(this, function(t) {
    "use strict";

    function n(t) {
        return function(n, e) {
            return Ns(t(n), e)
        }
    }

    function e(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            o = r / i;
        return o >= Ys ? i *= 10 : o >= Bs ? i *= 5 : o >= js && (i *= 2), n < t ? -i : i
    }

    function r(t) {
        return t.length
    }

    function i(t, n, e) {
        var r = t(e);
        return "translate(" + (isFinite(r) ? r : n(e)) + ",0)"
    }

    function o(t, n, e) {
        var r = t(e);
        return "translate(0," + (isFinite(r) ? r : n(e)) + ")"
    }

    function u(t) {
        var n = t.bandwidth() / 2;
        return t.round() && (n = Math.round(n)),
            function(e) {
                return t(e) + n
            }
    }

    function a() {
        return !this.__axis
    }

    function c(t, n) {
        function e(e) {
            var p, d = null == c ? n.ticks ? n.ticks.apply(n, r) : n.domain() : c,
                v = null == s ? n.tickFormat ? n.tickFormat.apply(n, r) : ff : s,
                _ = Math.max(f, 0) + h,
                y = t === lf || t === pf ? i : o,
                g = n.range(),
                m = g[0] + .5,
                x = g[g.length - 1] + .5,
                b = (n.bandwidth ? u : ff)(n.copy()),
                w = e.selection ? e.selection() : e,
                M = w.selectAll(".domain").data([null]),
                T = w.selectAll(".tick").data(d, n).order(),
                N = T.exit(),
                k = T.enter().append("g").attr("class", "tick"),
                S = T.select("line"),
                E = T.select("text"),
                A = t === lf || t === df ? -1 : 1,
                C = t === df || t === hf ? (p = "x", "y") : (p = "y", "x");
            M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), T = T.merge(k), S = S.merge(k.append("line").attr("stroke", "#000").attr(p + "2", A * f).attr(C + "1", .5).attr(C + "2", .5)), E = E.merge(k.append("text").attr("fill", "#000").attr(p, A * _).attr(C, .5).attr("dy", t === lf ? "0em" : t === pf ? "0.71em" : "0.32em")), e !== w && (M = M.transition(e), T = T.transition(e), S = S.transition(e), E = E.transition(e), N = N.transition(e).attr("opacity", vf).attr("transform", function(t) {
                return y(b, this.parentNode.__axis || b, t)
            }), k.attr("opacity", vf).attr("transform", function(t) {
                return y(this.parentNode.__axis || b, b, t)
            })), N.remove(), M.attr("d", t === df || t == hf ? "M" + A * l + "," + m + "H0.5V" + x + "H" + A * l : "M" + m + "," + A * l + "V0.5H" + x + "V" + A * l), T.attr("opacity", 1).attr("transform", function(t) {
                return y(b, b, t)
            }), S.attr(p + "2", A * f), E.attr(p, A * _).text(v), w.filter(a).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === hf ? "start" : t === df ? "end" : "middle"), w.each(function() {
                this.__axis = b
            })
        }
        var r = [],
            c = null,
            s = null,
            f = 6,
            l = 6,
            h = 3;
        return e.scale = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.ticks = function() {
            return r = sf.call(arguments), e
        }, e.tickArguments = function(t) {
            return arguments.length ? (r = null == t ? [] : sf.call(t), e) : r.slice()
        }, e.tickValues = function(t) {
            return arguments.length ? (c = null == t ? null : sf.call(t), e) : c && c.slice()
        }, e.tickFormat = function(t) {
            return arguments.length ? (s = t, e) : s
        }, e.tickSize = function(t) {
            return arguments.length ? (f = l = +t, e) : f
        }, e.tickSizeInner = function(t) {
            return arguments.length ? (f = +t, e) : f
        }, e.tickSizeOuter = function(t) {
            return arguments.length ? (l = +t, e) : l
        }, e.tickPadding = function(t) {
            return arguments.length ? (h = +t, e) : h
        }, e
    }

    function s(t) {
        return c(lf, t)
    }

    function f(t) {
        return c(hf, t)
    }

    function l(t) {
        return c(pf, t)
    }

    function h(t) {
        return c(df, t)
    }

    function p() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new d(r)
    }

    function d(t) {
        this._ = t
    }

    function v(t, n) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var e = "",
                r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
                type: t,
                name: e
            }
        })
    }

    function _(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)
            if ((e = t[r]).name === n) return e.value
    }

    function y(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) {
                t[r] = _f, t = t.slice(0, r).concat(t.slice(r + 1));
                break
            }
        return null != e && t.push({
            name: n,
            value: e
        }), t
    }

    function g(t) {
        return function() {
            var n = this.ownerDocument,
                e = this.namespaceURI;
            return e === yf && n.documentElement.namespaceURI === yf ? n.createElement(t) : n.createElementNS(e, t)
        }
    }

    function m(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }

    function x() {
        return new b
    }

    function b() {
        this._ = "@" + (++bf).toString(36)
    }

    function w(t, n, e) {
        return t = M(t, n, e),
            function(n) {
                var e = n.relatedTarget;
                e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
            }
    }

    function M(n, e, r) {
        return function(i) {
            var o = t.event;
            t.event = i;
            try {
                n.call(this, this.__data__, e, r)
            } finally {
                t.event = o
            }
        }
    }

    function T(t) {
        return t.trim().split(/^|\s+/).map(function(t) {
            var n = "",
                e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                type: t,
                name: n
            }
        })
    }

    function N(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                ++i ? n.length = i : delete this.__on
            }
        }
    }

    function k(t, n, e) {
        var r = kf.hasOwnProperty(t.type) ? w : M;
        return function(i, o, u) {
            var a, c = this.__on,
                s = r(n, o, u);
            if (c)
                for (var f = 0, l = c.length; f < l; ++f)
                    if ((a = c[f]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void(a.value = n);
            this.addEventListener(t.type, s, e), a = {
                type: t.type,
                name: t.name,
                value: n,
                listener: s,
                capture: e
            }, c ? c.push(a) : this.__on = [a]
        }
    }

    function S(n, e, r, i) {
        var o = t.event;
        n.sourceEvent = t.event, t.event = n;
        try {
            return e.apply(r, i)
        } finally {
            t.event = o
        }
    }

    function E() {}

    function A() {
        return []
    }

    function C(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }

    function z(t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length, s = o.length; a < s; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new C(t, o[a]);
        for (; a < c; ++a)(u = n[a]) && (i[a] = u)
    }

    function P(t, n, e, r, i, o, u) {
        var a, c, s, f = {},
            l = n.length,
            h = o.length,
            p = new Array(l);
        for (a = 0; a < l; ++a)(c = n[a]) && (p[a] = s = If + u.call(c, c.__data__, a, n), s in f ? i[a] = c : f[s] = c);
        for (a = 0; a < h; ++a) s = If + u.call(t, o[a], a, o), (c = f[s]) ? (r[a] = c, c.__data__ = o[a], f[s] = null) : e[a] = new C(t, o[a]);
        for (a = 0; a < l; ++a)(c = n[a]) && f[p[a]] === c && (i[a] = c)
    }

    function R(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function q(t) {
        return function() {
            this.removeAttribute(t)
        }
    }

    function L(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function U(t, n) {
        return function() {
            this.setAttribute(t, n)
        }
    }

    function D(t, n) {
        return function() {
            this.setAttributeNS(t.space, t.local, n)
        }
    }

    function O(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }

    function F(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }

    function I(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }

    function Y(t, n, e) {
        return function() {
            this.style.setProperty(t, n, e)
        }
    }

    function B(t, n, e) {
        return function() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }

    function j(t) {
        return function() {
            delete this[t]
        }
    }

    function H(t, n) {
        return function() {
            this[t] = n
        }
    }

    function X(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }

    function V(t) {
        return t.trim().split(/^|\s+/)
    }

    function W(t) {
        return t.classList || new $(t)
    }

    function $(t) {
        this._node = t, this._names = V(t.getAttribute("class") || "")
    }

    function Z(t, n) {
        for (var e = W(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }

    function G(t, n) {
        for (var e = W(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }

    function J(t) {
        return function() {
            Z(this, t)
        }
    }

    function Q(t) {
        return function() {
            G(this, t)
        }
    }

    function K(t, n) {
        return function() {
            (n.apply(this, arguments) ? Z : G)(this, t)
        }
    }

    function tt() {
        this.textContent = ""
    }

    function nt(t) {
        return function() {
            this.textContent = t
        }
    }

    function et(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        }
    }

    function rt() {
        this.innerHTML = ""
    }

    function it(t) {
        return function() {
            this.innerHTML = t
        }
    }

    function ot(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        }
    }

    function ut() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function at() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function ct() {
        return null
    }

    function st() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function ft(t, n, e) {
        var r = Kf(t),
            i = r.CustomEvent;
        i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function lt(t, n) {
        return function() {
            return ft(this, t, n)
        }
    }

    function ht(t, n) {
        return function() {
            return ft(this, t, n.apply(this, arguments))
        }
    }

    function pt(t, n) {
        this._groups = t, this._parents = n
    }

    function dt() {
        return new pt([
            [document.documentElement]
        ], hl)
    }

    function vt() {
        t.event.stopImmediatePropagation()
    }

    function _t(t, n) {
        var e = t.document.documentElement,
            r = pl(t).on("dragstart.drag", null);
        n && (r.on("click.drag", yl, !0), setTimeout(function() {
            r.on("click.drag", null)
        }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }

    function yt(t, n, e, r, i, o, u, a, c, s) {
        this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s
    }

    function gt() {
        return !t.event.button
    }

    function mt() {
        return this.parentNode
    }

    function xt(n) {
        return null == n ? {
            x: t.event.x,
            y: t.event.y
        } : n
    }

    function bt(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }

    function wt() {}

    function Mt(t) {
        var n;
        return t = (t + "").trim().toLowerCase(), (n = Sl.exec(t)) ? (n = parseInt(n[1], 16), new Et(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = El.exec(t)) ? Tt(parseInt(n[1], 16)) : (n = Al.exec(t)) ? new Et(n[1], n[2], n[3], 1) : (n = Cl.exec(t)) ? new Et(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = zl.exec(t)) ? Nt(n[1], n[2], n[3], n[4]) : (n = Pl.exec(t)) ? Nt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Rl.exec(t)) ? At(n[1], n[2] / 100, n[3] / 100, 1) : (n = ql.exec(t)) ? At(n[1], n[2] / 100, n[3] / 100, n[4]) : Ll.hasOwnProperty(t) ? Tt(Ll[t]) : "transparent" === t ? new Et(NaN, NaN, NaN, 0) : null
    }

    function Tt(t) {
        return new Et(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function Nt(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new Et(t, n, e, r)
    }

    function kt(t) {
        return t instanceof wt || (t = Mt(t)), t ? (t = t.rgb(), new Et(t.r, t.g, t.b, t.opacity)) : new Et
    }

    function St(t, n, e, r) {
        return 1 === arguments.length ? kt(t) : new Et(t, n, e, null == r ? 1 : r)
    }

    function Et(t, n, e, r) {
        this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
    }

    function At(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Pt(t, n, e, r)
    }

    function Ct(t) {
        if (t instanceof Pt) return new Pt(t.h, t.s, t.l, t.opacity);
        if (t instanceof wt || (t = Mt(t)), !t) return new Pt;
        if (t instanceof Pt) return t;
        t = t.rgb();
        var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            o = Math.max(n, e, r),
            u = NaN,
            a = o - i,
            c = (o + i) / 2;
        return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new Pt(u, a, c, t.opacity)
    }

    function zt(t, n, e, r) {
        return 1 === arguments.length ? Ct(t) : new Pt(t, n, e, null == r ? 1 : r)
    }

    function Pt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Rt(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }

    function qt(t) {
        if (t instanceof Ut) return new Ut(t.l, t.a, t.b, t.opacity);
        if (t instanceof jt) {
            var n = t.h * Ul;
            return new Ut(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Et || (t = kt(t));
        var e = It(t.r),
            r = It(t.g),
            i = It(t.b),
            o = Dt((.4124564 * e + .3575761 * r + .1804375 * i) / Fl),
            u = Dt((.2126729 * e + .7151522 * r + .072175 * i) / Il),
            a = Dt((.0193339 * e + .119192 * r + .9503041 * i) / Yl);
        return new Ut(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity)
    }

    function Lt(t, n, e, r) {
        return 1 === arguments.length ? qt(t) : new Ut(t, n, e, null == r ? 1 : r)
    }

    function Ut(t, n, e, r) {
        this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
    }

    function Dt(t) {
        return t > Xl ? Math.pow(t, 1 / 3) : t / Hl + Bl
    }

    function Ot(t) {
        return t > jl ? t * t * t : Hl * (t - Bl)
    }

    function Ft(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function It(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function Yt(t) {
        if (t instanceof jt) return new jt(t.h, t.c, t.l, t.opacity);
        t instanceof Ut || (t = qt(t));
        var n = Math.atan2(t.b, t.a) * Dl;
        return new jt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }

    function Bt(t, n, e, r) {
        return 1 === arguments.length ? Yt(t) : new jt(t, n, e, null == r ? 1 : r)
    }

    function jt(t, n, e, r) {
        this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
    }

    function Ht(t) {
        if (t instanceof Vt) return new Vt(t.h, t.s, t.l, t.opacity);
        t instanceof Et || (t = kt(t));
        var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = (Kl * r + Jl * n - Ql * e) / (Kl + Jl - Ql),
            o = r - i,
            u = (Gl * (e - i) - $l * o) / Zl,
            a = Math.sqrt(u * u + o * o) / (Gl * i * (1 - i)),
            c = a ? Math.atan2(u, o) * Dl - 120 : NaN;
        return new Vt(c < 0 ? c + 360 : c, a, i, t.opacity)
    }

    function Xt(t, n, e, r) {
        return 1 === arguments.length ? Ht(t) : new Vt(t, n, e, null == r ? 1 : r)
    }

    function Vt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Wt(t, n, e, r, i) {
        var o = t * t,
            u = o * t;
        return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
    }

    function $t(t, n) {
        return function(e) {
            return t + e * n
        }
    }

    function Zt(t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
            function(r) {
                return Math.pow(t + r * n, e)
            }
    }

    function Gt(t, n) {
        var e = n - t;
        return e ? $t(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : ch(isNaN(t) ? n : t)
    }

    function Jt(t) {
        return 1 === (t = +t) ? Qt : function(n, e) {
            return e - n ? Zt(n, e, t) : ch(isNaN(n) ? e : n)
        }
    }

    function Qt(t, n) {
        var e = n - t;
        return e ? $t(t, e) : ch(isNaN(t) ? n : t)
    }

    function Kt(t) {
        return function(n) {
            var e, r, i = n.length,
                o = new Array(i),
                u = new Array(i),
                a = new Array(i);
            for (e = 0; e < i; ++e) r = St(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
            return o = t(o), u = t(u), a = t(a), r.opacity = 1,
                function(t) {
                    return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
                }
        }
    }

    function tn(t) {
        return function() {
            return t
        }
    }

    function nn(t) {
        return function(n) {
            return t(n) + ""
        }
    }

    function en(t) {
        return "none" === t ? wh : (th || (th = document.createElement("DIV"), nh = document.documentElement, eh = document.defaultView), th.style.transform = t, t = eh.getComputedStyle(nh.appendChild(th), null).getPropertyValue("transform"), nh.removeChild(th), t = t.slice(7, -1).split(","), Mh(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }

    function rn(t) {
        return null == t ? wh : (rh || (rh = document.createElementNS("http://www.w3.org/2000/svg", "g")), rh.setAttribute("transform", t), (t = rh.transform.baseVal.consolidate()) ? (t = t.matrix, Mh(t.a, t.b, t.c, t.d, t.e, t.f)) : wh)
    }

    function on(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " " : ""
        }

        function o(t, r, i, o, u, a) {
            if (t !== i || r !== o) {
                var c = u.push("translate(", null, n, null, e);
                a.push({
                    i: c - 4,
                    x: dh(t, i)
                }, {
                    i: c - 2,
                    x: dh(r, o)
                })
            } else(i || o) && u.push("translate(" + i + n + o + e)
        }

        function u(t, n, e, o) {
            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                i: e.push(i(e) + "rotate(", null, r) - 2,
                x: dh(t, n)
            })) : n && e.push(i(e) + "rotate(" + n + r)
        }

        function a(t, n, e, o) {
            t !== n ? o.push({
                i: e.push(i(e) + "skewX(", null, r) - 2,
                x: dh(t, n)
            }) : n && e.push(i(e) + "skewX(" + n + r)
        }

        function c(t, n, e, r, o, u) {
            if (t !== e || n !== r) {
                var a = o.push(i(o) + "scale(", null, ",", null, ")");
                u.push({
                    i: a - 4,
                    x: dh(t, e)
                }, {
                    i: a - 2,
                    x: dh(n, r)
                })
            } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
        }
        return function(n, e) {
            var r = [],
                i = [];
            return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null,
                function(t) {
                    for (var n, e = -1, o = i.length; ++e < o;) r[(n = i[e]).i] = n.x(t);
                    return r.join("")
                }
        }
    }

    function un(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }

    function an(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2
    }

    function cn(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }

    function sn(t) {
        return function(n, e) {
            var r = t((n = zt(n)).h, (e = zt(e)).h),
                i = Qt(n.s, e.s),
                o = Qt(n.l, e.l),
                u = Qt(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + ""
            }
        }
    }

    function fn(t, n) {
        var e = Qt((t = Lt(t)).l, (n = Lt(n)).l),
            r = Qt(t.a, n.a),
            i = Qt(t.b, n.b),
            o = Qt(t.opacity, n.opacity);
        return function(n) {
            return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
        }
    }

    function ln(t) {
        return function(n, e) {
            var r = t((n = Bt(n)).h, (e = Bt(e)).h),
                i = Qt(n.c, e.c),
                o = Qt(n.l, e.l),
                u = Qt(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + ""
            }
        }
    }

    function hn(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Xt(n)).h, (r = Xt(r)).h),
                    o = Qt(n.s, r.s),
                    u = Qt(n.l, r.l),
                    a = Qt(n.opacity, r.opacity);
                return function(t) {
                    return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + ""
                }
            }
            return e = +e, r.gamma = n, r
        }(1)
    }

    function pn() {
        return jh || (Vh(dn), jh = Xh.now() + Hh)
    }

    function dn() {
        jh = 0
    }

    function vn() {
        this._call = this._time = this._next = null
    }

    function _n(t, n, e) {
        var r = new vn;
        return r.restart(t, n, e), r
    }

    function yn() {
        pn(), ++Oh;
        for (var t, n = ih; n;)(t = jh - n._time) >= 0 && n._call.call(null, t), n = n._next;
        --Oh
    }

    function gn() {
        jh = (Bh = Xh.now()) + Hh, Oh = Fh = 0;
        try {
            yn()
        } finally {
            Oh = 0, xn(), jh = 0
        }
    }

    function mn() {
        var t = Xh.now(),
            n = t - Bh;
        n > Yh && (Hh -= n, Bh = t)
    }

    function xn() {
        for (var t, n, e = ih, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ih = n);
        oh = t, bn(r)
    }

    function bn(t) {
        if (!Oh) {
            Fh && (Fh = clearTimeout(Fh));
            var n = t - jh;
            n > 24 ? (t < 1 / 0 && (Fh = setTimeout(gn, n)), Ih && (Ih = clearInterval(Ih))) : (Ih || (Bh = jh, Ih = setInterval(mn, Yh)), Oh = 1, Vh(gn))
        }
    }

    function wn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > Jh) throw new Error("too late");
        return e
    }

    function Mn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > Kh) throw new Error("too late");
        return e
    }

    function Tn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("too late");
        return e
    }

    function Nn(t, n, e) {
        function r(t) {
            e.state = Qh, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay)
        }

        function i(r) {
            var s, f, l, h;
            if (e.state !== Qh) return u();
            for (s in c)
                if (h = c[s], h.name === e.name) {
                    if (h.state === tp) return Wh(i);
                    h.state === np ? (h.state = rp, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete c[s]) : +s < n && (h.state = rp, h.timer.stop(), delete c[s])
                }
            if (Wh(function() {
                    e.state === tp && (e.state = np, e.timer.restart(o, e.delay, e.time), o(r))
                }), e.state = Kh, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Kh) {
                for (e.state = tp, a = new Array(l = e.tween.length), s = 0, f = -1; s < l; ++s)(h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (a[++f] = h);
                a.length = f + 1
            }
        }

        function o(n) {
            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = ep, 1), i = -1, o = a.length; ++i < o;) a[i].call(null, r);
            e.state === ep && (e.on.call("end", t, t.__data__, e.index, e.group), u())
        }

        function u() {
            e.state = rp, e.timer.stop(), delete c[n];
            for (var r in c) return;
            delete t.__transition
        }
        var a, c = t.__transition;
        c[n] = e, e.timer = _n(r, 0, e.time)
    }

    function kn(t, n) {
        var e, r;
        return function() {
            var i = Mn(this, t),
                o = i.tween;
            if (o !== e) {
                r = e = o;
                for (var u = 0, a = r.length; u < a; ++u)
                    if (r[u].name === n) {
                        r = r.slice(), r.splice(u, 1);
                        break
                    }
            }
            i.tween = r
        }
    }

    function Sn(t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error;
        return function() {
            var o = Mn(this, t),
                u = o.tween;
            if (u !== r) {
                i = (r = u).slice();
                for (var a = {
                        name: n,
                        value: e
                    }, c = 0, s = i.length; c < s; ++c)
                    if (i[c].name === n) {
                        i[c] = a;
                        break
                    }
                c === s && i.push(a)
            }
            o.tween = i
        }
    }

    function En(t, n, e) {
        var r = t._id;
        return t.each(function() {
                var t = Mn(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments)
            }),
            function(t) {
                return Tn(t, r).value[n]
            }
    }

    function An(t) {
        return function() {
            this.removeAttribute(t)
        }
    }

    function Cn(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function zn(t, n, e) {
        var r, i;
        return function() {
            var o = this.getAttribute(t);
            return o === e ? null : o === r ? i : i = n(r = o, e)
        }
    }

    function Pn(t, n, e) {
        var r, i;
        return function() {
            var o = this.getAttributeNS(t.space, t.local);
            return o === e ? null : o === r ? i : i = n(r = o, e)
        }
    }

    function Rn(t, n, e) {
        var r, i, o;
        return function() {
            var u, a = e(this);
            return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
        }
    }

    function qn(t, n, e) {
        var r, i, o;
        return function() {
            var u, a = e(this);
            return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
        }
    }

    function Ln(t, n) {
        function e() {
            var e = this,
                r = n.apply(e, arguments);
            return r && function(n) {
                e.setAttributeNS(t.space, t.local, r(n))
            }
        }
        return e._value = n, e
    }

    function Un(t, n) {
        function e() {
            var e = this,
                r = n.apply(e, arguments);
            return r && function(n) {
                e.setAttribute(t, r(n))
            }
        }
        return e._value = n, e
    }

    function Dn(t, n) {
        return function() {
            wn(this, t).delay = +n.apply(this, arguments)
        }
    }

    function On(t, n) {
        return n = +n,
            function() {
                wn(this, t).delay = n
            }
    }

    function Fn(t, n) {
        return function() {
            Mn(this, t).duration = +n.apply(this, arguments)
        }
    }

    function In(t, n) {
        return n = +n,
            function() {
                Mn(this, t).duration = n
            }
    }

    function Yn(t, n) {
        if ("function" != typeof n) throw new Error;
        return function() {
            Mn(this, t).ease = n
        }
    }

    function Bn(t) {
        return (t + "").trim().split(/^|\s+/).every(function(t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
        })
    }

    function jn(t, n, e) {
        var r, i, o = Bn(n) ? wn : Mn;
        return function() {
            var u = o(this, t),
                a = u.on;
            a !== r && (i = (r = a).copy()).on(n, e), u.on = i
        }
    }

    function Hn(t) {
        return function() {
            var n = this.parentNode;
            for (var e in this.__transition)
                if (+e !== t) return;
            n && n.removeChild(this)
        }
    }

    function Xn(t, n) {
        var e, r, i;
        return function() {
            var o = Kf(this).getComputedStyle(this, null),
                u = o.getPropertyValue(t),
                a = (this.style.removeProperty(t), o.getPropertyValue(t));
            return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a)
        }
    }

    function Vn(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }

    function Wn(t, n, e) {
        var r, i;
        return function() {
            var o = Kf(this).getComputedStyle(this, null).getPropertyValue(t);
            return o === e ? null : o === r ? i : i = n(r = o, e)
        }
    }

    function $n(t, n, e) {
        var r, i, o;
        return function() {
            var u = Kf(this).getComputedStyle(this, null),
                a = u.getPropertyValue(t),
                c = e(this);
            return null == c && (this.style.removeProperty(t), c = u.getPropertyValue(t)), a === c ? null : a === r && c === i ? o : o = n(r = a, i = c)
        }
    }

    function Zn(t, n, e) {
        function r() {
            var r = this,
                i = n.apply(r, arguments);
            return i && function(n) {
                r.style.setProperty(t, i(n), e)
            }
        }
        return r._value = n, r
    }

    function Gn(t) {
        return function() {
            this.textContent = t
        }
    }

    function Jn(t) {
        return function() {
            var n = t(this);
            this.textContent = null == n ? "" : n
        }
    }

    function Qn(t, n, e, r) {
        this._groups = t, this._parents = n, this._name = e, this._id = r
    }

    function Kn(t) {
        return dt().transition(t)
    }

    function te() {
        return ++kp
    }

    function ne(t) {
        return +t
    }

    function ee(t) {
        return t * t
    }

    function re(t) {
        return t * (2 - t)
    }

    function ie(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
    }

    function oe(t) {
        return t * t * t
    }

    function ue(t) {
        return --t * t * t + 1
    }

    function ae(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }

    function ce(t) {
        return 1 - Math.cos(t * Rp)
    }

    function se(t) {
        return Math.sin(t * Rp)
    }

    function fe(t) {
        return (1 - Math.cos(Pp * t)) / 2
    }

    function le(t) {
        return Math.pow(2, 10 * t - 10)
    }

    function he(t) {
        return 1 - Math.pow(2, -10 * t)
    }

    function pe(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
    }

    function de(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function ve(t) {
        return Math.sqrt(1 - --t * t)
    }

    function _e(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }

    function ye(t) {
        return 1 - ge(1 - t)
    }

    function ge(t) {
        return (t = +t) < qp ? jp * t * t : t < Up ? jp * (t -= Lp) * t + Dp : t < Fp ? jp * (t -= Op) * t + Ip : jp * (t -= Yp) * t + Bp
    }

    function me(t) {
        return ((t *= 2) <= 1 ? 1 - ge(1 - t) : ge(t - 1) + 1) / 2
    }

    function xe(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);)
            if (!(t = t.parentNode)) return td.time = pn(), td;
        return e
    }

    function be() {
        t.event.stopImmediatePropagation()
    }

    function we(t) {
        return {
            type: t
        }
    }

    function Me() {
        return !t.event.button
    }

    function Te() {
        var t = this.ownerSVGElement || this;
        return [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ]
    }

    function Ne(t) {
        for (; !t.__brush;)
            if (!(t = t.parentNode)) return;
        return t.__brush
    }

    function ke(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1]
    }

    function Se(t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null
    }

    function Ee() {
        return Ce(ld)
    }

    function Ae() {
        return Ce(hd)
    }

    function Ce(n) {
        function e(t) {
            var e = t.property("__brush", a).selectAll(".overlay").data([we("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", dd.overlay).merge(e).each(function() {
                var t = Ne(this).extent;
                pl(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
            }), t.selectAll(".selection").data([we("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", dd.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var i = t.selectAll(".handle").data(n.handles, function(t) {
                return t.type
            });
            i.exit().remove(), i.enter().append("rect").attr("class", function(t) {
                return "handle handle--" + t.type
            }).attr("cursor", function(t) {
                return dd[t.type]
            }), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", u)
        }

        function r() {
            var t = pl(this),
                n = Ne(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function(t) {
                return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2
            }).attr("y", function(t) {
                return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2
            }).attr("width", function(t) {
                return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h
            }).attr("height", function(t) {
                return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h
            })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }

        function i(t, n) {
            return t.__brush.emitter || new o(t, n)
        }

        function o(t, n) {
            this.that = t, this.args = n, this.state = t.__brush, this.active = 0
        }

        function u() {
            function e() {
                var t = zf(T);
                !U || w || M || (Math.abs(t[0] - O[0]) > Math.abs(t[1] - O[1]) ? M = !0 : w = !0), O = t, b = !0, ud(), o()
            }

            function o() {
                var t;
                switch (m = O[0] - D[0], x = O[1] - D[1], k) {
                    case cd:
                    case ad:
                        S && (m = Math.max(P - l, Math.min(q - v, m)), h = l + m, _ = v + m), E && (x = Math.max(R - p, Math.min(L - y, x)), d = p + x, g = y + x);
                        break;
                    case sd:
                        S < 0 ? (m = Math.max(P - l, Math.min(q - l, m)), h = l + m, _ = v) : S > 0 && (m = Math.max(P - v, Math.min(q - v, m)), h = l, _ = v + m), E < 0 ? (x = Math.max(R - p, Math.min(L - p, x)), d = p + x, g = y) : E > 0 && (x = Math.max(R - y, Math.min(L - y, x)), d = p, g = y + x);
                        break;
                    case fd:
                        S && (h = Math.max(P, Math.min(q, l - m * S)), _ = Math.max(P, Math.min(q, v + m * S))), E && (d = Math.max(R, Math.min(L, p - x * E)), g = Math.max(R, Math.min(L, y + x * E)))
                }
                _ < h && (S *= -1, t = l, l = v, v = t, t = h, h = _, _ = t, N in vd && Y.attr("cursor", dd[N = vd[N]])), g < d && (E *= -1, t = p, p = y, y = t, t = d, d = g, g = t, N in _d && Y.attr("cursor", dd[N = _d[N]])), A.selection && (z = A.selection), w && (h = z[0][0], _ = z[1][0]), M && (d = z[0][1], g = z[1][1]), z[0][0] === h && z[0][1] === d && z[1][0] === _ && z[1][1] === g || (A.selection = [
                    [h, d],
                    [_, g]
                ], r.call(T), F.brush())
            }

            function u() {
                if (be(), t.event.touches) {
                    if (t.event.touches.length) return;
                    c && clearTimeout(c), c = setTimeout(function() {
                        c = null
                    }, 500), I.on("touchmove.brush touchend.brush touchcancel.brush", null)
                } else _t(t.event.view, b), B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                I.attr("pointer-events", "all"), Y.attr("cursor", dd.overlay), A.selection && (z = A.selection), ke(z) && (A.selection = null, r.call(T)), F.end()
            }

            function a() {
                switch (t.event.keyCode) {
                    case 16:
                        U = S && E;
                        break;
                    case 18:
                        k === sd && (S && (v = _ - m * S, l = h + m * S), E && (y = g - x * E, p = d + x * E), k = fd, o());
                        break;
                    case 32:
                        k !== sd && k !== fd || (S < 0 ? v = _ - m : S > 0 && (l = h - m), E < 0 ? y = g - x : E > 0 && (p = d - x), k = cd, Y.attr("cursor", dd.selection), o());
                        break;
                    default:
                        return
                }
                ud()
            }

            function s() {
                switch (t.event.keyCode) {
                    case 16:
                        U && (w = M = U = !1, o());
                        break;
                    case 18:
                        k === fd && (S < 0 ? v = _ : S > 0 && (l = h), E < 0 ? y = g : E > 0 && (p = d), k = sd, o());
                        break;
                    case 32:
                        k === cd && (t.event.altKey ? (S && (v = _ - m * S, l = h + m * S), E && (y = g - x * E, p = d + x * E), k = fd) : (S < 0 ? v = _ : S > 0 && (l = h), E < 0 ? y = g : E > 0 && (p = d), k = sd), Y.attr("cursor", dd[N]), o());
                        break;
                    default:
                        return
                }
                ud()
            }
            if (t.event.touches) {
                if (t.event.changedTouches.length < t.event.touches.length) return ud()
            } else if (c) return;
            if (f.apply(this, arguments)) {
                var l, h, p, d, v, _, y, g, m, x, b, w, M, T = this,
                    N = t.event.target.__data__.type,
                    k = "selection" === (t.event.metaKey ? N = "overlay" : N) ? ad : t.event.altKey ? fd : sd,
                    S = n === hd ? null : yd[N],
                    E = n === ld ? null : gd[N],
                    A = Ne(T),
                    C = A.extent,
                    z = A.selection,
                    P = C[0][0],
                    R = C[0][1],
                    q = C[1][0],
                    L = C[1][1],
                    U = S && E && t.event.shiftKey,
                    D = zf(T),
                    O = D,
                    F = i(T, arguments).beforestart();
                "overlay" === N ? A.selection = z = [
                    [l = n === hd ? P : D[0], p = n === ld ? R : D[1]],
                    [v = n === hd ? q : l, y = n === ld ? L : p]
                ] : (l = z[0][0], p = z[0][1], v = z[1][0], y = z[1][1]), h = l, d = p, _ = v, g = y;
                var I = pl(T).attr("pointer-events", "none"),
                    Y = I.selectAll(".overlay").attr("cursor", dd[N]);
                if (t.event.touches) I.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", u, !0);
                else {
                    var B = pl(t.event.view).on("keydown.brush", a, !0).on("keyup.brush", s, !0).on("mousemove.brush", e, !0).on("mouseup.brush", u, !0);
                    gl(t.event.view)
                }
                be(), op(T), r.call(T), F.start()
            }
        }

        function a() {
            var t = this.__brush || {
                selection: null
            };
            return t.extent = s.apply(this, arguments), t.dim = n, t
        }
        var c, s = Te,
            f = Me,
            l = p(e, "start", "brush", "end"),
            h = 6;
        return e.move = function(t, e) {
            t.selection ? t.on("start.brush", function() {
                i(this, arguments).beforestart().start()
            }).on("interrupt.brush end.brush", function() {
                i(this, arguments).end()
            }).tween("brush", function() {
                function t(t) {
                    u.selection = 1 === t && ke(s) ? null : f(t), r.call(o), a.brush()
                }
                var o = this,
                    u = o.__brush,
                    a = i(o, arguments),
                    c = u.selection,
                    s = n.input("function" == typeof e ? e.apply(this, arguments) : e, u.extent),
                    f = mh(c, s);
                return c && s ? t : t(1)
            }) : t.each(function() {
                var t = this,
                    o = arguments,
                    u = t.__brush,
                    a = n.input("function" == typeof e ? e.apply(t, o) : e, u.extent),
                    c = i(t, o).beforestart();
                op(t), u.selection = null == a || ke(a) ? null : a, r.call(t), c.start().brush().end()
            })
        }, o.prototype = {
            beforestart: function() {
                return 1 === ++this.active && (this.state.emitter = this, this.starting = !0), this
            },
            start: function() {
                return this.starting && (this.starting = !1, this.emit("start")), this
            },
            brush: function() {
                return this.emit("brush"), this
            },
            end: function() {
                return 0 === --this.active && (delete this.state.emitter, this.emit("end")), this
            },
            emit: function(t) {
                S(new od(e, t, n.output(this.state.selection)), l.apply, l, [t, this.that, this.args])
            }
        }, e.extent = function(t) {
            return arguments.length ? (s = "function" == typeof t ? t : id([
                [+t[0][0], +t[0][1]],
                [+t[1][0], +t[1][1]]
            ]), e) : s
        }, e.filter = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : id(!!t), e) : f
        }, e.handleSize = function(t) {
            return arguments.length ? (h = +t, e) : h
        }, e.on = function() {
            var t = l.on.apply(l, arguments);
            return t === l ? e : t
        }, e
    }

    function ze(t) {
        return function(n, e) {
            return t(n.source.value + n.target.value, e.source.value + e.target.value)
        }
    }

    function Pe() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function Re() {
        return new Pe
    }

    function qe(t) {
        return t.source
    }

    function Le(t) {
        return t.target
    }

    function Ue(t) {
        return t.radius
    }

    function De(t) {
        return t.startAngle
    }

    function Oe(t) {
        return t.endAngle
    }

    function Fe() {}

    function Ie(t, n) {
        var e = new Fe;
        if (t instanceof Fe) t.each(function(t, n) {
            e.set(n, t)
        });
        else if (Array.isArray(t)) {
            var r, i = -1,
                o = t.length;
            if (null == n)
                for (; ++i < o;) e.set(i, t[i]);
            else
                for (; ++i < o;) e.set(n(r = t[i], i, t), r)
        } else if (t)
            for (var u in t) e.set(u, t[u]);
        return e
    }

    function Ye() {
        return {}
    }

    function Be(t, n, e) {
        t[n] = e
    }

    function je() {
        return Ie()
    }

    function He(t, n, e) {
        t.set(n, e)
    }

    function Xe() {}

    function Ve(t, n) {
        var e = new Xe;
        if (t instanceof Xe) t.each(function(t) {
            e.add(t)
        });
        else if (t) {
            var r = -1,
                i = t.length;
            if (null == n)
                for (; ++r < i;) e.add(t[r]);
            else
                for (; ++r < i;) e.add(n(t[r], r, t))
        }
        return e
    }

    function We(t) {
        return new Function("d", "return {" + t.map(function(t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }

    function $e(t, n) {
        var e = We(t);
        return function(r, i) {
            return n(e(r), i, t)
        }
    }

    function Ze(t) {
        var n = Object.create(null),
            e = [];
        return t.forEach(function(t) {
            for (var r in t) r in n || e.push(n[r] = r)
        }), e
    }

    function Ge(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, o, u, a, c, s, f, l, h, p = t._root,
            d = {
                data: r
            },
            v = t._x0,
            _ = t._y0,
            y = t._x1,
            g = t._y1;
        if (!p) return t._root = d, t;
        for (; p.length;)
            if ((s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (_ + g) / 2)) ? _ = u : g = u, i = p, !(p = p[l = f << 1 | s])) return i[l] = d, t;
        if (a = +t._x.call(null, p.data), c = +t._y.call(null, p.data), n === a && e === c) return d.next = p, i ? i[l] = d : t._root = d, t;
        do i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (_ + g) / 2)) ? _ = u : g = u; while ((l = f << 1 | s) === (h = (c >= u) << 1 | a >= o));
        return i[h] = p, i[l] = d, t
    }

    function Je(t) {
        var n, e, r, i, o = t.length,
            u = new Array(o),
            a = new Array(o),
            c = 1 / 0,
            s = 1 / 0,
            f = -(1 / 0),
            l = -(1 / 0);
        for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < c && (c = r), r > f && (f = r), i < s && (s = i), i > l && (l = i));
        for (f < c && (c = this._x0, f = this._x1), l < s && (s = this._y0, l = this._y1), this.cover(c, s).cover(f, l), e = 0; e < o; ++e) Ge(this, u[e], a[e], t[e]);
        return this
    }

    function Qe(t) {
        for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
        return this
    }

    function Ke(t) {
        return t[0]
    }

    function tr(t) {
        return t[1]
    }

    function nr(t, n, e) {
        var r = new er(null == n ? Ke : n, null == e ? tr : e, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t)
    }

    function er(t, n, e, r, i, o) {
        this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
    }

    function rr(t) {
        for (var n = {
                data: t.data
            }, e = n; t = t.next;) e = e.next = {
            data: t.data
        };
        return n
    }

    function ir(t) {
        return t.x + t.vx
    }

    function or(t) {
        return t.y + t.vy
    }

    function ur(t) {
        return t.index
    }

    function ar(t, n) {
        var e = t.get(n);
        if (!e) throw new Error("missing: " + n);
        return e
    }

    function cr(t) {
        return t.x
    }

    function sr(t) {
        return t.y
    }

    function fr(t) {
        if (!(n = Cv.exec(t))) throw new Error("invalid format: " + t);
        var n, e = n[1] || " ",
            r = n[2] || ">",
            i = n[3] || "-",
            o = n[4] || "",
            u = !!n[5],
            a = n[6] && +n[6],
            c = !!n[7],
            s = n[8] && +n[8].slice(1),
            f = n[9] || "";
        "n" === f ? (c = !0, f = "g") : Av[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = s, this.type = f
    }

    function lr(t) {
        return t
    }

    function hr(n) {
        return Pv = qv(n),
            t.format = Pv.format, t.formatPrefix = Pv.formatPrefix, Pv
    }

    function pr() {
        this.reset()
    }

    function dr(t, n, e) {
        var r = t.s = n + e,
            i = r - n,
            o = r - i;
        t.t = n - o + (e - i)
    }

    function vr(t) {
        return t > 1 ? 0 : t < -1 ? m_ : Math.acos(t)
    }

    function _r(t) {
        return t > 1 ? x_ : t < -1 ? -x_ : Math.asin(t)
    }

    function yr(t) {
        return (t = R_(t / 2)) * t
    }

    function gr() {}

    function mr(t, n) {
        t && O_.hasOwnProperty(t.type) && O_[t.type](t, n)
    }

    function xr(t, n, e) {
        var r, i = -1,
            o = t.length - e;
        for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }

    function br(t, n) {
        var e = -1,
            r = t.length;
        for (n.polygonStart(); ++e < r;) xr(t[e], n, 1);
        n.polygonEnd()
    }

    function wr() {
        B_.point = Tr
    }

    function Mr() {
        Nr(Fv, Iv)
    }

    function Tr(t, n) {
        B_.point = Nr, Fv = t, Iv = n, t *= T_, n *= T_, Yv = t, Bv = E_(n = n / 2 + b_), jv = R_(n)
    }

    function Nr(t, n) {
        t *= T_, n *= T_, n = n / 2 + b_;
        var e = t - Yv,
            r = e >= 0 ? 1 : -1,
            i = r * e,
            o = E_(n),
            u = R_(n),
            a = jv * u,
            c = Bv * o + a * E_(i),
            s = a * r * R_(i);
        I_.add(S_(s, c)), Yv = t, Bv = o, jv = u
    }

    function kr(t) {
        return [S_(t[1], t[0]), _r(t[2])]
    }

    function Sr(t) {
        var n = t[0],
            e = t[1],
            r = E_(e);
        return [r * E_(n), r * R_(n), R_(e)]
    }

    function Er(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function Ar(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function Cr(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function zr(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }

    function Pr(t) {
        var n = L_(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function Rr(t, n) {
        Qv.push(Kv = [Hv = t, Vv = t]), n < Xv && (Xv = n), n > Wv && (Wv = n)
    }

    function qr(t, n) {
        var e = Sr([t * T_, n * T_]);
        if (Jv) {
            var r = Ar(Jv, e),
                i = [r[1], -r[0], 0],
                o = Ar(i, r);
            Pr(o), o = kr(o);
            var u, a = t - $v,
                c = a > 0 ? 1 : -1,
                s = o[0] * M_ * c,
                f = N_(a) > 180;
            f ^ (c * $v < s && s < c * t) ? (u = o[1] * M_, u > Wv && (Wv = u)) : (s = (s + 360) % 360 - 180, f ^ (c * $v < s && s < c * t) ? (u = -o[1] * M_, u < Xv && (Xv = u)) : (n < Xv && (Xv = n), n > Wv && (Wv = n))), f ? t < $v ? Ir(Hv, t) > Ir(Hv, Vv) && (Vv = t) : Ir(t, Vv) > Ir(Hv, Vv) && (Hv = t) : Vv >= Hv ? (t < Hv && (Hv = t), t > Vv && (Vv = t)) : t > $v ? Ir(Hv, t) > Ir(Hv, Vv) && (Vv = t) : Ir(t, Vv) > Ir(Hv, Vv) && (Hv = t)
        } else Rr(t, n);
        Jv = e, $v = t
    }

    function Lr() {
        X_.point = qr
    }

    function Ur() {
        Kv[0] = Hv, Kv[1] = Vv, X_.point = Rr, Jv = null
    }

    function Dr(t, n) {
        if (Jv) {
            var e = t - $v;
            H_.add(N_(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else Zv = t, Gv = n;
        B_.point(t, n), qr(t, n)
    }

    function Or() {
        B_.lineStart()
    }

    function Fr() {
        Dr(Zv, Gv), B_.lineEnd(), N_(H_) > y_ && (Hv = -(Vv = 180)), Kv[0] = Hv, Kv[1] = Vv, Jv = null
    }

    function Ir(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }

    function Yr(t, n) {
        return t[0] - n[0]
    }

    function Br(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }

    function jr(t, n) {
        t *= T_, n *= T_;
        var e = E_(n);
        Hr(e * E_(t), e * R_(t), R_(n))
    }

    function Hr(t, n, e) {
        ++t_, e_ += (t - e_) / t_, r_ += (n - r_) / t_, i_ += (e - i_) / t_
    }

    function Xr() {
        W_.point = Vr
    }

    function Vr(t, n) {
        t *= T_, n *= T_;
        var e = E_(n);
        p_ = e * E_(t), d_ = e * R_(t), v_ = R_(n), W_.point = Wr, Hr(p_, d_, v_)
    }

    function Wr(t, n) {
        t *= T_, n *= T_;
        var e = E_(n),
            r = e * E_(t),
            i = e * R_(t),
            o = R_(n),
            u = S_(L_((u = d_ * o - v_ * i) * u + (u = v_ * r - p_ * o) * u + (u = p_ * i - d_ * r) * u), p_ * r + d_ * i + v_ * o);
        n_ += u, o_ += u * (p_ + (p_ = r)), u_ += u * (d_ + (d_ = i)), a_ += u * (v_ + (v_ = o)), Hr(p_, d_, v_)
    }

    function $r() {
        W_.point = jr
    }

    function Zr() {
        W_.point = Jr
    }

    function Gr() {
        Qr(l_, h_), W_.point = jr
    }

    function Jr(t, n) {
        l_ = t, h_ = n, t *= T_, n *= T_, W_.point = Qr;
        var e = E_(n);
        p_ = e * E_(t), d_ = e * R_(t), v_ = R_(n), Hr(p_, d_, v_)
    }

    function Qr(t, n) {
        t *= T_, n *= T_;
        var e = E_(n),
            r = e * E_(t),
            i = e * R_(t),
            o = R_(n),
            u = d_ * o - v_ * i,
            a = v_ * r - p_ * o,
            c = p_ * i - d_ * r,
            s = L_(u * u + a * a + c * c),
            f = p_ * r + d_ * i + v_ * o,
            l = s && -vr(f) / s,
            h = S_(s, f);
        c_ += l * u, s_ += l * a, f_ += l * c, n_ += h, o_ += h * (p_ + (p_ = r)), u_ += h * (d_ + (d_ = i)), a_ += h * (v_ + (v_ = o)), Hr(p_, d_, v_)
    }

    function Kr(t, n) {
        return [t > m_ ? t - w_ : t < -m_ ? t + w_ : t, n]
    }

    function ti(t, n, e) {
        return (t %= w_) ? n || e ? G_(ei(t), ri(n, e)) : ei(t) : n || e ? ri(n, e) : Kr
    }

    function ni(t) {
        return function(n, e) {
            return n += t, [n > m_ ? n - w_ : n < -m_ ? n + w_ : n, e]
        }
    }

    function ei(t) {
        var n = ni(t);
        return n.invert = ni(-t), n
    }

    function ri(t, n) {
        function e(t, n) {
            var e = E_(n),
                a = E_(t) * e,
                c = R_(t) * e,
                s = R_(n),
                f = s * r + a * i;
            return [S_(c * o - f * u, a * r - s * i), _r(f * o + c * u)]
        }
        var r = E_(t),
            i = R_(t),
            o = E_(n),
            u = R_(n);
        return e.invert = function(t, n) {
            var e = E_(n),
                a = E_(t) * e,
                c = R_(t) * e,
                s = R_(n),
                f = s * o - c * u;
            return [S_(c * o + s * u, a * r + f * i), _r(f * r - a * i)]
        }, e
    }

    function ii(t, n, e, r, i, o) {
        if (e) {
            var u = E_(n),
                a = R_(n),
                c = r * e;
            null == i ? (i = n + r * w_, o = n - c / 2) : (i = oi(u, i), o = oi(u, o), (r > 0 ? i < o : i > o) && (i += r * w_));
            for (var s, f = i; r > 0 ? f > o : f < o; f -= c) s = kr([u, -a * E_(f), -a * R_(f)]), t.point(s[0], s[1])
        }
    }

    function oi(t, n) {
        n = Sr(n), n[0] -= t, Pr(n);
        var e = vr(-n[1]);
        return ((-n[2] < 0 ? -e : e) + w_ - y_) % w_
    }

    function ui(t, n, e, r) {
        this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }

    function ai(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
            i.n = e = t[0], e.p = i
        }
    }

    function ci(t, n, e, r) {
        function i(i, o) {
            return t <= i && i <= e && n <= o && o <= r
        }

        function o(i, o, a, s) {
            var f = 0,
                l = 0;
            if (null == i || (f = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0) {
                do s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n); while ((f = (f + a + 4) % 4) !== l)
            } else s.point(o[0], o[1])
        }

        function u(r, i) {
            return N_(r[0] - t) < y_ ? i > 0 ? 0 : 3 : N_(r[0] - e) < y_ ? i > 0 ? 2 : 1 : N_(r[1] - n) < y_ ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function a(t, n) {
            return c(t.x, n.x)
        }

        function c(t, n) {
            var e = u(t, 1),
                r = u(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }
        return function(u) {
            function c(t, n) {
                i(t, n) && k.point(t, n)
            }

            function s() {
                for (var n = 0, e = 0, i = _.length; e < i; ++e)
                    for (var o, u, a = _[e], c = 1, s = a.length, f = a[0], l = f[0], h = f[1]; c < s; ++c) o = l, u = h, f = a[c], l = f[0], h = f[1], u <= r ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n : h <= r && (l - o) * (r - u) < (h - u) * (t - o) && --n;
                return n
            }

            function f() {
                k = S, v = [], _ = [], N = !0
            }

            function l() {
                var t = s(),
                    n = N && t,
                    e = (v = Ks(v)).length;
                (n || e) && (u.polygonStart(), n && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), e && py(v, a, t, o, u), u.polygonEnd()), k = u, v = _ = y = null
            }

            function h() {
                E.point = d, _ && _.push(y = []), T = !0, M = !1, b = w = NaN
            }

            function p() {
                v && (d(g, m), x && M && S.rejoin(), v.push(S.result())), E.point = c, M && k.lineEnd()
            }

            function d(o, u) {
                var a = i(o, u);
                if (_ && y.push([o, u]), T) g = o, m = u, x = a, T = !1, a && (k.lineStart(), k.point(o, u));
                else if (a && M) k.point(o, u);
                else {
                    var c = [b = Math.max(vy, Math.min(dy, b)), w = Math.max(vy, Math.min(dy, w))],
                        s = [o = Math.max(vy, Math.min(dy, o)), u = Math.max(vy, Math.min(dy, u))];
                    ly(c, s, t, n, e, r) ? (M || (k.lineStart(), k.point(c[0], c[1])), k.point(s[0], s[1]), a || k.lineEnd(), N = !1) : a && (k.lineStart(), k.point(o, u), N = !1)
                }
                b = o, w = u, M = a
            }
            var v, _, y, g, m, x, b, w, M, T, N, k = u,
                S = fy(),
                E = {
                    point: c,
                    lineStart: h,
                    lineEnd: p,
                    polygonStart: f,
                    polygonEnd: l
                };
            return E
        }
    }

    function si() {
        gy.point = li, gy.lineEnd = fi
    }

    function fi() {
        gy.point = gy.lineEnd = gr
    }

    function li(t, n) {
        t *= T_, n *= T_, J_ = t, Q_ = R_(n), K_ = E_(n), gy.point = hi
    }

    function hi(t, n) {
        t *= T_, n *= T_;
        var e = R_(n),
            r = E_(n),
            i = N_(t - J_),
            o = E_(i),
            u = R_(i),
            a = r * u,
            c = K_ * e - Q_ * r * o,
            s = Q_ * e + K_ * r * o;
        yy.add(S_(L_(a * a + c * c), s)), J_ = t, Q_ = e, K_ = r
    }

    function pi(t, n, e) {
        var r = Is(t, n - y_, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [t, n]
            })
        }
    }

    function di(t, n, e) {
        var r = Is(t, n - y_, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [n, t]
            })
        }
    }

    function vi() {
        function t() {
            return {
                type: "MultiLineString",
                coordinates: n()
            }
        }

        function n() {
            return Is(A_(o / _) * _, i, _).map(h).concat(Is(A_(s / y) * y, c, y).map(p)).concat(Is(A_(r / d) * d, e, d).filter(function(t) {
                return N_(t % _) > y_
            }).map(f)).concat(Is(A_(a / v) * v, u, v).filter(function(t) {
                return N_(t % y) > y_
            }).map(l))
        }
        var e, r, i, o, u, a, c, s, f, l, h, p, d = 10,
            v = d,
            _ = 90,
            y = 360,
            g = 2.5;
        return t.lines = function() {
            return n().map(function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            })
        }, t.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(o).concat(p(c).slice(1), h(i).reverse().slice(1), p(s).reverse().slice(1))]
            }
        }, t.extent = function(n) {
            return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
        }, t.extentMajor = function(n) {
            return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], c = +n[1][1], o > i && (n = o, o = i, i = n), s > c && (n = s, s = c, c = n), t.precision(g)) : [
                [o, s],
                [i, c]
            ]
        }, t.extentMinor = function(n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], a = +n[0][1], u = +n[1][1], r > e && (n = r, r = e, e = n), a > u && (n = a, a = u, u = n), t.precision(g)) : [
                [r, a],
                [e, u]
            ]
        }, t.step = function(n) {
            return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
        }, t.stepMajor = function(n) {
            return arguments.length ? (_ = +n[0], y = +n[1], t) : [_, y]
        }, t.stepMinor = function(n) {
            return arguments.length ? (d = +n[0], v = +n[1], t) : [d, v]
        }, t.precision = function(n) {
            return arguments.length ? (g = +n, f = pi(a, u, 90), l = di(r, e, g), h = pi(s, c, 90), p = di(o, i, g), t) : g
        }, t.extentMajor([
            [-180, -90 + y_],
            [180, 90 - y_]
        ]).extentMinor([
            [-180, -80 - y_],
            [180, 80 + y_]
        ])
    }

    function _i() {
        return vi()()
    }

    function yi() {
        Sy.point = gi
    }

    function gi(t, n) {
        Sy.point = mi, ty = ey = t, ny = ry = n
    }

    function mi(t, n) {
        ky.add(ry * t - ey * n), ey = t, ry = n
    }

    function xi() {
        mi(ty, ny)
    }

    function bi(t, n) {
        t < Ey && (Ey = t), t > Cy && (Cy = t), n < Ay && (Ay = n), n > zy && (zy = n)
    }

    function wi(t, n) {
        Ry += t, qy += n, ++Ly
    }

    function Mi() {
        By.point = Ti
    }

    function Ti(t, n) {
        By.point = Ni, wi(uy = t, ay = n)
    }

    function Ni(t, n) {
        var e = t - uy,
            r = n - ay,
            i = L_(e * e + r * r);
        Uy += i * (uy + t) / 2, Dy += i * (ay + n) / 2, Oy += i, wi(uy = t, ay = n)
    }

    function ki() {
        By.point = wi
    }

    function Si() {
        By.point = Ai
    }

    function Ei() {
        Ci(iy, oy)
    }

    function Ai(t, n) {
        By.point = Ci, wi(iy = uy = t, oy = ay = n)
    }

    function Ci(t, n) {
        var e = t - uy,
            r = n - ay,
            i = L_(e * e + r * r);
        Uy += i * (uy + t) / 2, Dy += i * (ay + n) / 2, Oy += i, i = ay * t - uy * n, Fy += i * (uy + t), Iy += i * (ay + n), Yy += 3 * i, wi(uy = t, ay = n)
    }

    function zi(t) {
        this._context = t
    }

    function Pi() {
        this._string = []
    }

    function Ri(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function qi(t) {
        return t.length > 1
    }

    function Li(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - x_ - y_ : x_ - t[1]) - ((n = n.x)[0] < 0 ? n[1] - x_ - y_ : x_ - n[1])
    }

    function Ui(t) {
        var n, e = NaN,
            r = NaN,
            i = NaN;
        return {
            lineStart: function() {
                t.lineStart(), n = 1
            },
            point: function(o, u) {
                var a = o > 0 ? m_ : -m_,
                    c = N_(o - e);
                N_(c - m_) < y_ ? (t.point(e, r = (r + u) / 2 > 0 ? x_ : -x_), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= m_ && (N_(e - i) < y_ && (e -= i * y_), N_(o - a) < y_ && (o -= a * y_), r = Di(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
            },
            lineEnd: function() {
                t.lineEnd(), e = r = NaN
            },
            clean: function() {
                return 2 - n
            }
        }
    }

    function Di(t, n, e, r) {
        var i, o, u = R_(t - e);
        return N_(u) > y_ ? k_((R_(n) * (o = E_(r)) * R_(e) - R_(r) * (i = E_(n)) * R_(t)) / (i * o * u)) : (n + r) / 2
    }

    function Oi(t, n, e, r) {
        var i;
        if (null == t) i = e * x_, r.point(-m_, i), r.point(0, i), r.point(m_, i), r.point(m_, 0), r.point(m_, -i), r.point(0, -i), r.point(-m_, -i), r.point(-m_, 0), r.point(-m_, i);
        else if (N_(t[0] - n[0]) > y_) {
            var o = t[0] < n[0] ? m_ : -m_;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
        } else r.point(n[0], n[1])
    }

    function Fi(t) {
        return function(n) {
            var e = new Ii;
            for (var r in t) e[r] = t[r];
            return e.stream = n, e
        }
    }

    function Ii() {}

    function Yi(t, n, e) {
        var r = n[1][0] - n[0][0],
            i = n[1][1] - n[0][1],
            o = t.clipExtent && t.clipExtent();
        t.scale(150).translate([0, 0]), null != o && t.clipExtent(null), F_(e, t.stream(Py));
        var u = Py.result(),
            a = Math.min(r / (u[1][0] - u[0][0]), i / (u[1][1] - u[0][1])),
            c = +n[0][0] + (r - a * (u[1][0] + u[0][0])) / 2,
            s = +n[0][1] + (i - a * (u[1][1] + u[0][1])) / 2;
        return null != o && t.clipExtent(o), t.scale(150 * a).translate([c, s])
    }

    function Bi(t, n, e) {
        return Yi(t, [
            [0, 0], n
        ], e)
    }

    function ji(t) {
        return Fi({
            point: function(n, e) {
                n = t(n, e), this.stream.point(n[0], n[1])
            }
        })
    }

    function Hi(t, n) {
        function e(r, i, o, u, a, c, s, f, l, h, p, d, v, _) {
            var y = s - r,
                g = f - i,
                m = y * y + g * g;
            if (m > 4 * n && v--) {
                var x = u + h,
                    b = a + p,
                    w = c + d,
                    M = L_(x * x + b * b + w * w),
                    T = _r(w /= M),
                    N = N_(N_(w) - 1) < y_ || N_(o - l) < y_ ? (o + l) / 2 : S_(b, x),
                    k = t(N, T),
                    S = k[0],
                    E = k[1],
                    A = S - r,
                    C = E - i,
                    z = g * A - y * C;
                (z * z / m > n || N_((y * A + g * C) / m - .5) > .3 || u * h + a * p + c * d < Jy) && (e(r, i, o, u, a, c, S, E, N, x /= M, b /= M, w, v, _), _.point(S, E), e(S, E, N, x, b, w, s, f, l, h, p, d, v, _))
            }
        }
        return function(n) {
            function r(e, r) {
                e = t(e, r), n.point(e[0], e[1])
            }

            function i() {
                y = NaN, w.point = o, n.lineStart()
            }

            function o(r, i) {
                var o = Sr([r, i]),
                    u = t(r, i);
                e(y, g, _, m, x, b, y = u[0], g = u[1], _ = r, m = o[0], x = o[1], b = o[2], Gy, n), n.point(y, g)
            }

            function u() {
                w.point = r, n.lineEnd()
            }

            function a() {
                i(), w.point = c, w.lineEnd = s
            }

            function c(t, n) {
                o(f = t, n), l = y, h = g, p = m, d = x, v = b, w.point = o
            }

            function s() {
                e(y, g, _, m, x, b, l, h, f, p, d, v, Gy, n), w.lineEnd = u, u()
            }
            var f, l, h, p, d, v, _, y, g, m, x, b, w = {
                point: r,
                lineStart: i,
                lineEnd: u,
                polygonStart: function() {
                    n.polygonStart(), w.lineStart = a
                },
                polygonEnd: function() {
                    n.polygonEnd(), w.lineStart = i
                }
            };
            return w
        }
    }

    function Xi(t) {
        return Vi(function() {
            return t
        })()
    }

    function Vi(t) {
        function n(t) {
            return t = f(t[0] * T_, t[1] * T_), [t[0] * _ + a, c - t[1] * _]
        }

        function e(t) {
            return t = f.invert((t[0] - a) / _, (c - t[1]) / _), t && [t[0] * M_, t[1] * M_]
        }

        function r(t, n) {
            return t = u(t, n), [t[0] * _ + a, c - t[1] * _]
        }

        function i() {
            f = G_(s = ti(b, w, M), u);
            var t = u(m, x);
            return a = y - t[0] * _, c = g + t[1] * _, o()
        }

        function o() {
            return d = v = null, n
        }
        var u, a, c, s, f, l, h, p, d, v, _ = 150,
            y = 480,
            g = 250,
            m = 0,
            x = 0,
            b = 0,
            w = 0,
            M = 0,
            T = null,
            N = Wy,
            k = null,
            S = Ty,
            E = .5,
            A = Qy(r, E);
        return n.stream = function(t) {
                return d && v === t ? d : d = Ky(N(s, A(S(v = t))))
            }, n.clipAngle = function(t) {
                return arguments.length ? (N = +t ? $y(T = t * T_, 6 * T_) : (T = null, Wy), o()) : T * M_
            }, n.clipExtent = function(t) {
                return arguments.length ? (S = null == t ? (k = l = h = p = null, Ty) : ci(k = +t[0][0], l = +t[0][1], h = +t[1][0], p = +t[1][1]), o()) : null == k ? null : [
                    [k, l],
                    [h, p]
                ]
            }, n.scale = function(t) {
                return arguments.length ? (_ = +t, i()) : _
            }, n.translate = function(t) {
                return arguments.length ? (y = +t[0], g = +t[1], i()) : [y, g]
            }, n.center = function(t) {
                return arguments.length ? (m = t[0] % 360 * T_, x = t[1] % 360 * T_, i()) : [m * M_, x * M_]
            }, n.rotate = function(t) {
                return arguments.length ? (b = t[0] % 360 * T_, w = t[1] % 360 * T_, M = t.length > 2 ? t[2] % 360 * T_ : 0, i()) : [b * M_, w * M_, M * M_]
            }, n.precision = function(t) {
                return arguments.length ? (A = Qy(r, E = t * t), o()) : L_(E)
            }, n.fitExtent = function(t, e) {
                return Yi(n, t, e)
            }, n.fitSize = function(t, e) {
                return Bi(n, t, e)
            },
            function() {
                return u = t.apply(this, arguments), n.invert = u.invert && e, i()
            }
    }

    function Wi(t) {
        var n = 0,
            e = m_ / 3,
            r = Vi(t),
            i = r(n, e);
        return i.parallels = function(t) {
            return arguments.length ? r(n = t[0] * T_, e = t[1] * T_) : [n * M_, e * M_]
        }, i
    }

    function $i(t) {
        function n(t, n) {
            return [t * e, R_(n) / e]
        }
        var e = E_(t);
        return n.invert = function(t, n) {
            return [t / e, _r(n * e)]
        }, n
    }

    function Zi(t, n) {
        function e(t, n) {
            var e = L_(o - 2 * i * R_(n)) / i;
            return [e * R_(t *= i), u - e * E_(t)]
        }
        var r = R_(t),
            i = (r + R_(n)) / 2;
        if (N_(i) < y_) return $i(t);
        var o = 1 + r * (2 * i - r),
            u = L_(o) / i;
        return e.invert = function(t, n) {
            var e = u - n;
            return [S_(t, N_(e)) / i * q_(e), _r((o - (t * t + e * e) * i * i) / (2 * i))]
        }, e
    }

    function Gi(t) {
        var n = t.length;
        return {
            point: function(e, r) {
                for (var i = -1; ++i < n;) t[i].point(e, r)
            },
            sphere: function() {
                for (var e = -1; ++e < n;) t[e].sphere()
            },
            lineStart: function() {
                for (var e = -1; ++e < n;) t[e].lineStart()
            },
            lineEnd: function() {
                for (var e = -1; ++e < n;) t[e].lineEnd()
            },
            polygonStart: function() {
                for (var e = -1; ++e < n;) t[e].polygonStart()
            },
            polygonEnd: function() {
                for (var e = -1; ++e < n;) t[e].polygonEnd()
            }
        }
    }

    function Ji(t) {
        return function(n, e) {
            var r = E_(n),
                i = E_(e),
                o = t(r * i);
            return [o * i * R_(n), o * R_(e)]
        }
    }

    function Qi(t) {
        return function(n, e) {
            var r = L_(n * n + e * e),
                i = t(r),
                o = R_(i),
                u = E_(i);
            return [S_(n * o, r * u), _r(r && e * o / r)]
        }
    }

    function Ki(t, n) {
        return [t, z_(U_((x_ + n) / 2))]
    }

    function to(t) {
        var n, e = Xi(t),
            r = e.scale,
            i = e.translate,
            o = e.clipExtent;
        return e.scale = function(t) {
            return arguments.length ? (r(t), n && e.clipExtent(null), e) : r()
        }, e.translate = function(t) {
            return arguments.length ? (i(t), n && e.clipExtent(null), e) : i()
        }, e.clipExtent = function(t) {
            if (!arguments.length) return n ? null : o();
            if (n = null == t) {
                var u = m_ * r(),
                    a = i();
                t = [
                    [a[0] - u, a[1] - u],
                    [a[0] + u, a[1] + u]
                ]
            }
            return o(t), e
        }, e.clipExtent(null)
    }

    function no(t) {
        return U_((x_ + t) / 2)
    }

    function eo(t, n) {
        function e(t, n) {
            o > 0 ? n < -x_ + y_ && (n = -x_ + y_) : n > x_ - y_ && (n = x_ - y_);
            var e = o / P_(no(n), i);
            return [e * R_(i * t), o - e * E_(i * t)]
        }
        var r = E_(t),
            i = t === n ? R_(t) : z_(r / E_(n)) / z_(no(n) / no(t)),
            o = r * P_(no(t), i) / i;
        return i ? (e.invert = function(t, n) {
            var e = o - n,
                r = q_(i) * L_(t * t + e * e);
            return [S_(t, N_(e)) / i * q_(e), 2 * k_(P_(o / r, 1 / i)) - x_]
        }, e) : Ki
    }

    function ro(t, n) {
        return [t, n]
    }

    function io(t, n) {
        function e(t, n) {
            var e = o - n,
                r = i * t;
            return [e * R_(r), o - e * E_(r)]
        }
        var r = E_(t),
            i = t === n ? R_(t) : (r - E_(n)) / (n - t),
            o = r / i + t;
        return N_(i) < y_ ? ro : (e.invert = function(t, n) {
            var e = o - n;
            return [S_(t, N_(e)) / i * q_(e), o - q_(i) * L_(t * t + e * e)]
        }, e)
    }

    function oo(t, n) {
        var e = E_(n),
            r = E_(t) * e;
        return [e * R_(t) / r, R_(n) / r]
    }

    function uo(t, n, e, r) {
        return 1 === t && 1 === n && 0 === e && 0 === r ? Ty : Fi({
            point: function(i, o) {
                this.stream.point(i * t + e, o * n + r)
            }
        })
    }

    function ao(t, n) {
        return [E_(n) * R_(t), R_(n)]
    }

    function co(t, n) {
        var e = E_(n),
            r = 1 + E_(t) * e;
        return [e * R_(t) / r, R_(n) / r]
    }

    function so(t, n) {
        return [z_(U_((x_ + n) / 2)), -t]
    }

    function fo(t, n) {
        return t.parent === n.parent ? 1 : 2
    }

    function lo(t) {
        return t.reduce(ho, 0) / t.length
    }

    function ho(t, n) {
        return t + n.x
    }

    function po(t) {
        return 1 + t.reduce(vo, 0)
    }

    function vo(t, n) {
        return Math.max(t, n.y)
    }

    function _o(t) {
        for (var n; n = t.children;) t = n[0];
        return t
    }

    function yo(t) {
        for (var n; n = t.children;) t = n[n.length - 1];
        return t
    }

    function go(t) {
        var n = 0,
            e = t.children,
            r = e && e.length;
        if (r)
            for (; --r >= 0;) n += e[r].value;
        else n = 1;
        t.value = n
    }

    function mo(t, n) {
        if (t === n) return t;
        var e = t.ancestors(),
            r = n.ancestors(),
            i = null;
        for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
        return i
    }

    function xo(t, n) {
        var e, r, i, o, u, a = new No(t),
            c = +t.value && (a.value = t.value),
            s = [a];
        for (null == n && (n = wo); e = s.pop();)
            if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
                for (e.children = new Array(u), o = u - 1; o >= 0; --o) s.push(r = e.children[o] = new No(i[o])), r.parent = e, r.depth = e.depth + 1;
        return a.eachBefore(To)
    }

    function bo() {
        return xo(this).eachBefore(Mo)
    }

    function wo(t) {
        return t.children
    }

    function Mo(t) {
        t.data = t.data.data
    }

    function To(t) {
        var n = 0;
        do t.height = n; while ((t = t.parent) && t.height < ++n)
    }

    function No(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null
    }

    function ko(t) {
        this._ = t, this.next = null
    }

    function So(t, n) {
        var e = n.x - t.x,
            r = n.y - t.y,
            i = t.r - n.r;
        return i * i + 1e-6 > e * e + r * r
    }

    function Eo(t, n) {
        var e, r, i, o = null,
            u = t.head;
        switch (n.length) {
            case 1:
                e = Ao(n[0]);
                break;
            case 2:
                e = Co(n[0], n[1]);
                break;
            case 3:
                e = zo(n[0], n[1], n[2])
        }
        for (; u;) i = u._, r = u.next, e && So(e, i) ? o = u : (o ? (t.tail = o, o.next = null) : t.head = t.tail = null, n.push(i), e = Eo(t, n), n.pop(), t.head ? (u.next = t.head, t.head = u) : (u.next = null, t.head = t.tail = u), o = t.tail, o.next = r), u = r;
        return t.tail = o, e
    }

    function Ao(t) {
        return {
            x: t.x,
            y: t.y,
            r: t.r
        }
    }

    function Co(t, n) {
        var e = t.x,
            r = t.y,
            i = t.r,
            o = n.x,
            u = n.y,
            a = n.r,
            c = o - e,
            s = u - r,
            f = a - i,
            l = Math.sqrt(c * c + s * s);
        return {
            x: (e + o + c / l * f) / 2,
            y: (r + u + s / l * f) / 2,
            r: (l + i + a) / 2
        }
    }

    function zo(t, n, e) {
        var r = t.x,
            i = t.y,
            o = t.r,
            u = n.x,
            a = n.y,
            c = n.r,
            s = e.x,
            f = e.y,
            l = e.r,
            h = 2 * (r - u),
            p = 2 * (i - a),
            d = 2 * (c - o),
            v = r * r + i * i - o * o - u * u - a * a + c * c,
            _ = 2 * (r - s),
            y = 2 * (i - f),
            g = 2 * (l - o),
            m = r * r + i * i - o * o - s * s - f * f + l * l,
            x = _ * p - h * y,
            b = (p * m - y * v) / x - r,
            w = (y * d - p * g) / x,
            M = (_ * v - h * m) / x - i,
            T = (h * g - _ * d) / x,
            N = w * w + T * T - 1,
            k = 2 * (b * w + M * T + o),
            S = b * b + M * M - o * o,
            E = (-k - Math.sqrt(k * k - 4 * N * S)) / (2 * N);
        return {
            x: b + w * E + r,
            y: M + T * E + i,
            r: E
        }
    }

    function Po(t, n, e) {
        var r = t.x,
            i = t.y,
            o = n.r + e.r,
            u = t.r + e.r,
            a = n.x - r,
            c = n.y - i,
            s = a * a + c * c;
        if (s) {
            var f = .5 + ((u *= u) - (o *= o)) / (2 * s),
                l = Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) / (2 * s);
            e.x = r + f * a + l * c, e.y = i + f * c - l * a
        } else e.x = r + u, e.y = i
    }

    function Ro(t, n) {
        var e = n.x - t.x,
            r = n.y - t.y,
            i = t.r + n.r;
        return i * i - 1e-6 > e * e + r * r
    }

    function qo(t, n) {
        for (var e = t._.r; t !== n;) e += 2 * (t = t.next)._.r;
        return e - n._.r
    }

    function Lo(t, n, e) {
        var r = t.x - n,
            i = t.y - e;
        return r * r + i * i
    }

    function Uo(t) {
        this._ = t, this.next = null, this.previous = null
    }

    function Do(t) {
        if (!(i = t.length)) return 0;
        var n, e, r, i;
        if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;
        if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
        Po(e, n, r = t[2]);
        var o, u, a, c, s, f, l, h = n.r * n.r,
            p = e.r * e.r,
            d = r.r * r.r,
            v = h + p + d,
            _ = h * n.x + p * e.x + d * r.x,
            y = h * n.y + p * e.y + d * r.y;
        n = new Uo(n), e = new Uo(e), r = new Uo(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
        t: for (a = 3; a < i; ++a) {
            Po(n._, e._, r = t[a]), r = new Uo(r), c = e.next, s = n.previous, f = e._.r, l = n._.r;
            do
                if (f <= l) {
                    if (Ro(c._, r._)) {
                        f + n._.r + e._.r > qo(c, e) ? n = c : e = c, n.next = e, e.previous = n, --a;
                        continue t
                    }
                    f += c._.r, c = c.next
                } else {
                    if (Ro(s._, r._)) {
                        qo(n, s) > l + n._.r + e._.r ? n = s : e = s, n.next = e, e.previous = n, --a;
                        continue t
                    }
                    l += s._.r, s = s.previous
                }
            while (c !== s.next);
            for (r.previous = n, r.next = e, n.next = e.previous = e = r, v += d = r._.r * r._.r, _ += d * r._.x, y += d * r._.y, h = Lo(n._, o = _ / v, u = y / v);
                (r = r.next) !== e;)(d = Lo(r._, o, u)) < h && (n = r, h = d);
            e = n.next
        }
        for (n = [e._], r = e;
            (r = r.next) !== e;) n.push(r._);
        for (r = Ag(n), a = 0; a < i; ++a) n = t[a], n.x -= r.x, n.y -= r.y;
        return r.r
    }

    function Oo(t) {
        return null == t ? null : Fo(t)
    }

    function Fo(t) {
        if ("function" != typeof t) throw new Error;
        return t
    }

    function Io() {
        return 0
    }

    function Yo(t) {
        return Math.sqrt(t.value)
    }

    function Bo(t) {
        return function(n) {
            n.children || (n.r = Math.max(0, +t(n) || 0))
        }
    }

    function jo(t, n) {
        return function(e) {
            if (r = e.children) {
                var r, i, o, u = r.length,
                    a = t(e) * n || 0;
                if (a)
                    for (i = 0; i < u; ++i) r[i].r += a;
                if (o = Do(r), a)
                    for (i = 0; i < u; ++i) r[i].r -= a;
                e.r = o + a
            }
        }
    }

    function Ho(t) {
        return function(n) {
            var e = n.parent;
            n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
        }
    }

    function Xo(t) {
        return t.id
    }

    function Vo(t) {
        return t.parentId
    }

    function Wo(t, n) {
        return t.parent === n.parent ? 1 : 2
    }

    function $o(t) {
        var n = t.children;
        return n ? n[0] : t.t
    }

    function Zo(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t
    }

    function Go(t, n, e) {
        var r = e / (n.i - t.i);
        n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
    }

    function Jo(t) {
        for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c)
    }

    function Qo(t, n, e) {
        return t.a.parent === n.parent ? t.a : e
    }

    function Ko(t, n) {
        this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
    }

    function tu(t) {
        for (var n, e, r, i, o, u = new Ko(t, 0), a = [u]; n = a.pop();)
            if (r = n._.children)
                for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new Ko(r[i], i)), e.parent = n;
        return (u.parent = new Ko(null, 0)).children = [u], u
    }

    function nu(t, n, e, r, i, o) {
        for (var u, a, c, s, f, l, h, p, d, v, _, y = [], g = n.children, m = 0, x = 0, b = g.length, w = n.value; m < b;) {
            c = i - e, s = o - r;
            do f = g[x++].value; while (!f && x < b);
            for (l = h = f, v = Math.max(s / c, c / s) / (w * t), _ = f * f * v, d = Math.max(h / _, _ / l); x < b; ++x) {
                if (f += a = g[x].value, a < l && (l = a), a > h && (h = a), _ = f * f * v, p = Math.max(h / _, _ / l), p > d) {
                    f -= a;
                    break
                }
                d = p
            }
            y.push(u = {
                value: f,
                dice: c < s,
                children: g.slice(m, x)
            }), u.dice ? qg(u, e, r, i, w ? r += s * f / w : o) : Yg(u, e, r, w ? e += c * f / w : i, o), w -= f, m = x
        }
        return y
    }

    function eu(t, n) {
        return t[0] - n[0] || t[1] - n[1]
    }

    function ru(t) {
        for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
            for (; r > 1 && Gg(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
            e[r++] = i
        }
        return e.slice(0, r)
    }

    function iu(t) {
        if (!(t >= 1)) throw new Error;
        this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
    }

    function ou(t) {
        if (!t._start) try {
            uu(t)
        } catch (n) {
            if (t._tasks[t._ended + t._active - 1]) cu(t, n);
            else if (!t._data) throw n
        }
    }

    function uu(t) {
        for (; t._start = t._waiting && t._active < t._size;) {
            var n = t._ended + t._active,
                e = t._tasks[n],
                r = e.length - 1,
                i = e[r];
            e[r] = au(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || nm)
        }
    }

    function au(t, n) {
        return function(e, r) {
            t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? cu(t, e) : (t._data[n] = r, t._waiting ? ou(t) : su(t))))
        }
    }

    function cu(t, n) {
        var e, r = t._tasks.length;
        for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)
            if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
                e.abort()
            } catch (t) {}
        t._active = NaN, su(t)
    }

    function su(t) {
        if (!t._active && t._call) {
            var n = t._data;
            t._data = void 0, t._call(t._error, n)
        }
    }

    function fu(t) {
        return new iu(arguments.length ? +t : 1 / 0)
    }

    function lu(t) {
        return function(n, e) {
            t(null == n ? e : null)
        }
    }

    function hu(t) {
        var n = t.responseType;
        return n && "text" !== n ? t.response : t.responseText
    }

    function pu(t, n) {
        return function(e) {
            return t(e.responseText, n)
        }
    }

    function du(t) {
        function n(n) {
            var o = n + "",
                u = e.get(o);
            if (!u) {
                if (i !== xm) return i;
                e.set(o, u = r.push(n))
            }
            return t[(u - 1) % t.length]
        }
        var e = Ie(),
            r = [],
            i = xm;
        return t = null == t ? [] : mm.call(t), n.domain = function(t) {
            if (!arguments.length) return r.slice();
            r = [], e = Ie();
            for (var i, o, u = -1, a = t.length; ++u < a;) e.has(o = (i = t[u]) + "") || e.set(o, r.push(i));
            return n
        }, n.range = function(e) {
            return arguments.length ? (t = mm.call(e), n) : t.slice()
        }, n.unknown = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.copy = function() {
            return du().domain(r).range(t).unknown(i)
        }, n
    }

    function vu() {
        function t() {
            var t = i().length,
                r = u[1] < u[0],
                l = u[r - 0],
                h = u[1 - r];
            n = (h - l) / Math.max(1, t - c + 2 * s), a && (n = Math.floor(n)), l += (h - l - n * (t - c)) * f, e = n * (1 - c), a && (l = Math.round(l), e = Math.round(e));
            var p = Is(t).map(function(t) {
                return l + n * t
            });
            return o(r ? p.reverse() : p)
        }
        var n, e, r = du().unknown(void 0),
            i = r.domain,
            o = r.range,
            u = [0, 1],
            a = !1,
            c = 0,
            s = 0,
            f = .5;
        return delete r.unknown, r.domain = function(n) {
            return arguments.length ? (i(n), t()) : i()
        }, r.range = function(n) {
            return arguments.length ? (u = [+n[0], +n[1]], t()) : u.slice()
        }, r.rangeRound = function(n) {
            return u = [+n[0], +n[1]], a = !0, t()
        }, r.bandwidth = function() {
            return e
        }, r.step = function() {
            return n
        }, r.round = function(n) {
            return arguments.length ? (a = !!n, t()) : a
        }, r.padding = function(n) {
            return arguments.length ? (c = s = Math.max(0, Math.min(1, n)), t()) : c
        }, r.paddingInner = function(n) {
            return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
        }, r.paddingOuter = function(n) {
            return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s
        }, r.align = function(n) {
            return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
        }, r.copy = function() {
            return vu().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)
        }, t()
    }

    function _u(t) {
        var n = t.copy;
        return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
            return _u(n())
        }, t
    }

    function yu() {
        return _u(vu().paddingInner(1))
    }

    function gu(t, n) {
        return (n -= t = +t) ? function(e) {
            return (e - t) / n
        } : bm(n)
    }

    function mu(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= n ? 0 : t >= e ? 1 : r(t)
            }
        }
    }

    function xu(t) {
        return function(n, e) {
            var r = t(n = +n, e = +e);
            return function(t) {
                return t <= 0 ? n : t >= 1 ? e : r(t)
            }
        }
    }

    function bu(t, n, e, r) {
        var i = t[0],
            o = t[1],
            u = n[0],
            a = n[1];
        return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)),
            function(t) {
                return u(i(t))
            }
    }

    function wu(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
            o = new Array(i),
            u = new Array(i),
            a = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
        return function(n) {
            var e = Es(t, n, 1, i) - 1;
            return u[e](o[e](n))
        }
    }

    function Mu(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }

    function Tu(t, n) {
        function e() {
            return i = Math.min(a.length, c.length) > 2 ? wu : bu, o = u = null, r
        }

        function r(n) {
            return (o || (o = i(a, c, f ? mu(t) : t, s)))(+n)
        }
        var i, o, u, a = Mm,
            c = Mm,
            s = mh,
            f = !1;
        return r.invert = function(t) {
            return (u || (u = i(c, a, gu, f ? xu(n) : n)))(+t)
        }, r.domain = function(t) {
            return arguments.length ? (a = gm.call(t, wm), e()) : a.slice()
        }, r.range = function(t) {
            return arguments.length ? (c = mm.call(t), e()) : c.slice()
        }, r.rangeRound = function(t) {
            return c = mm.call(t), s = xh, e()
        }, r.clamp = function(t) {
            return arguments.length ? (f = !!t, e()) : f
        }, r.interpolate = function(t) {
            return arguments.length ? (s = t, e()) : s
        }, e()
    }

    function Nu(t) {
        var n = t.domain;
        return t.ticks = function(t) {
            var e = n();
            return Hs(e[0], e[e.length - 1], null == t ? 10 : t)
        }, t.tickFormat = function(t, e) {
            return Tm(n(), t, e)
        }, t.nice = function(r) {
            var i = n(),
                o = i.length - 1,
                u = null == r ? 10 : r,
                a = i[0],
                c = i[o],
                s = e(a, c, u);
            return s && (s = e(Math.floor(a / s) * s, Math.ceil(c / s) * s, u), i[0] = Math.floor(a / s) * s, i[o] = Math.ceil(c / s) * s, n(i)), t
        }, t
    }

    function ku() {
        var t = Tu(gu, dh);
        return t.copy = function() {
            return Mu(t, ku())
        }, Nu(t)
    }

    function Su() {
        function t(t) {
            return +t
        }
        var n = [0, 1];
        return t.invert = t, t.domain = t.range = function(e) {
            return arguments.length ? (n = gm.call(e, wm), t) : n.slice()
        }, t.copy = function() {
            return Su().domain(n)
        }, Nu(t)
    }

    function Eu(t, n) {
        return (n = Math.log(n / t)) ? function(e) {
            return Math.log(e / t) / n
        } : bm(n)
    }

    function Au(t, n) {
        return t < 0 ? function(e) {
            return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
        } : function(e) {
            return Math.pow(n, e) * Math.pow(t, 1 - e)
        }
    }

    function Cu(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }

    function zu(t) {
        return 10 === t ? Cu : t === Math.E ? Math.exp : function(n) {
            return Math.pow(t, n)
        }
    }

    function Pu(t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) {
            return Math.log(n) / t
        })
    }

    function Ru(t) {
        return function(n) {
            return -t(-n)
        }
    }

    function qu() {
        function n() {
            return o = Pu(i), u = zu(i), r()[0] < 0 && (o = Ru(o), u = Ru(u)), e
        }
        var e = Tu(Eu, Au).domain([1, 10]),
            r = e.domain,
            i = 10,
            o = Pu(10),
            u = zu(10);
        return e.base = function(t) {
            return arguments.length ? (i = +t, n()) : i
        }, e.domain = function(t) {
            return arguments.length ? (r(t), n()) : r()
        }, e.ticks = function(t) {
            var n, e = r(),
                a = e[0],
                c = e[e.length - 1];
            (n = c < a) && (h = a, a = c, c = h);
            var s, f, l, h = o(a),
                p = o(c),
                d = null == t ? 10 : +t,
                v = [];
            if (!(i % 1) && p - h < d) {
                if (h = Math.round(h) - 1, p = Math.round(p) + 1, a > 0) {
                    for (; h < p; ++h)
                        for (f = 1, s = u(h); f < i; ++f)
                            if (l = s * f, !(l < a)) {
                                if (l > c) break;
                                v.push(l)
                            }
                } else
                    for (; h < p; ++h)
                        for (f = i - 1, s = u(h); f >= 1; --f)
                            if (l = s * f, !(l < a)) {
                                if (l > c) break;
                                v.push(l)
                            }
            } else v = Hs(h, p, Math.min(p - h, d)).map(u);
            return n ? v.reverse() : v
        }, e.tickFormat = function(n, r) {
            if (null == r && (r = 10 === i ? ".0e" : ","), "function" != typeof r && (r = t.format(r)), n === 1 / 0) return r;
            null == n && (n = 10);
            var a = Math.max(1, i * n / e.ticks().length);
            return function(t) {
                var n = t / u(Math.round(o(t)));
                return n * i < i - .5 && (n *= i), n <= a ? r(t) : ""
            }
        }, e.nice = function() {
            return r(Nm(r(), {
                floor: function(t) {
                    return u(Math.floor(o(t)))
                },
                ceil: function(t) {
                    return u(Math.ceil(o(t)))
                }
            }))
        }, e.copy = function() {
            return Mu(e, qu().base(i))
        }, e
    }

    function Lu(t, n) {
        return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
    }

    function Uu() {
        function t(t, n) {
            return (n = Lu(n, e) - (t = Lu(t, e))) ? function(r) {
                return (Lu(r, e) - t) / n
            } : bm(n)
        }

        function n(t, n) {
            return n = Lu(n, e) - (t = Lu(t, e)),
                function(r) {
                    return Lu(t + n * r, 1 / e)
                }
        }
        var e = 1,
            r = Tu(t, n),
            i = r.domain;
        return r.exponent = function(t) {
            return arguments.length ? (e = +t, i(i())) : e
        }, r.copy = function() {
            return Mu(r, Uu().exponent(e))
        }, Nu(r)
    }

    function Du() {
        return Uu().exponent(.5)
    }

    function Ou() {
        function t() {
            var t = 0,
                o = Math.max(1, r.length);
            for (i = new Array(o - 1); ++t < o;) i[t - 1] = Ws(e, t / o);
            return n
        }

        function n(t) {
            if (!isNaN(t = +t)) return r[Es(i, t)]
        }
        var e = [],
            r = [],
            i = [];
        return n.invertExtent = function(t) {
            var n = r.indexOf(t);
            return n < 0 ? [NaN, NaN] : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]]
        }, n.domain = function(n) {
            if (!arguments.length) return e.slice();
            e = [];
            for (var r, i = 0, o = n.length; i < o; ++i) r = n[i], null == r || isNaN(r = +r) || e.push(r);
            return e.sort(Ns), t()
        }, n.range = function(n) {
            return arguments.length ? (r = mm.call(n), t()) : r.slice()
        }, n.quantiles = function() {
            return i.slice()
        }, n.copy = function() {
            return Ou().domain(e).range(r)
        }, n
    }

    function Fu() {
        function t(t) {
            if (t <= t) return u[Es(o, t, 0, i)]
        }

        function n() {
            var n = -1;
            for (o = new Array(i); ++n < i;) o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
            return t
        }
        var e = 0,
            r = 1,
            i = 1,
            o = [.5],
            u = [0, 1];
        return t.domain = function(t) {
            return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
        }, t.range = function(t) {
            return arguments.length ? (i = (u = mm.call(t)).length - 1, n()) : u.slice()
        }, t.invertExtent = function(t) {
            var n = u.indexOf(t);
            return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
        }, t.copy = function() {
            return Fu().domain([e, r]).range(u)
        }, Nu(t)
    }

    function Iu() {
        function t(t) {
            if (t <= t) return e[Es(n, t, 0, r)]
        }
        var n = [.5],
            e = [0, 1],
            r = 1;
        return t.domain = function(i) {
            return arguments.length ? (n = mm.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
        }, t.range = function(i) {
            return arguments.length ? (e = mm.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
        }, t.invertExtent = function(t) {
            var r = e.indexOf(t);
            return [n[r - 1], n[r]]
        }, t.copy = function() {
            return Iu().domain(n).range(e)
        }, t
    }

    function Yu(t, n, e, r) {
        function i(n) {
            return t(n = new Date(+n)), n
        }
        return i.floor = i, i.ceil = function(e) {
            return t(e = new Date(e - 1)), n(e, 1), t(e), e
        }, i.round = function(t) {
            var n = i(t),
                e = i.ceil(t);
            return t - n < e - t ? n : e
        }, i.offset = function(t, e) {
            return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
        }, i.range = function(e, r, o) {
            var u = [];
            if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;
            do u.push(new Date(+e)); while (n(e, o), t(e), e < r);
            return u
        }, i.filter = function(e) {
            return Yu(function(n) {
                if (n >= n)
                    for (; t(n), !e(n);) n.setTime(n - 1)
            }, function(t, r) {
                if (t >= t)
                    for (; --r >= 0;)
                        for (; n(t, 1), !e(t););
            })
        }, e && (i.count = function(n, r) {
            return km.setTime(+n), Sm.setTime(+r), t(km), t(Sm), Math.floor(e(km, Sm))
        }, i.every = function(t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) {
                return r(n) % t === 0
            } : function(n) {
                return i.count(0, n) % t === 0
            }) : i : null
        }), i
    }

    function Bu(t) {
        return Yu(function(n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setDate(t.getDate() + 7 * n)
        }, function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * zm) / qm
        })
    }

    function ju(t) {
        return Yu(function(n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        }, function(t, n) {
            return (n - t) / qm
        })
    }

    function Hu(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y), n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function Xu(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y), n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function Vu(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }

    function Wu(t) {
        function n(t, n) {
            return function(e) {
                var r, i, o, u = [],
                    a = -1,
                    c = 0,
                    s = t.length;
                for (e instanceof Date || (e = new Date(+e)); ++a < s;) 37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = Px[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
                return u.push(t.slice(c, a)), u.join("")
            }
        }

        function e(t, n) {
            return function(e) {
                var i = Vu(1900),
                    o = r(i, t, e += "", 0);
                if (o != e.length) return null;
                if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                    "w" in i || (i.w = "W" in i ? 1 : 0);
                    var u = "Z" in i ? Xu(Vu(i.y)).getUTCDay() : n(Vu(i.y)).getDay();
                    i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (u + 5) % 7 : i.w + 7 * i.U - (u + 6) % 7
                }
                return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, Xu(i)) : n(i)
            }
        }

        function r(t, n, e, r) {
            for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
                if (r >= c) return -1;
                if (i = n.charCodeAt(u++), 37 === i) {
                    if (i = n.charAt(u++), o = B[i in Px ? n.charAt(u++) : i], !o || (r = o(t, e, r)) < 0) return -1
                } else if (i != e.charCodeAt(r++)) return -1
            }
            return r
        }

        function i(t, n, e) {
            var r = C.exec(n.slice(e));
            return r ? (t.p = z[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function o(t, n, e) {
            var r = q.exec(n.slice(e));
            return r ? (t.w = L[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function u(t, n, e) {
            var r = P.exec(n.slice(e));
            return r ? (t.w = R[r[0].toLowerCase()], e + r[0].length) : -1;
        }

        function a(t, n, e) {
            var r = O.exec(n.slice(e));
            return r ? (t.m = F[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function c(t, n, e) {
            var r = U.exec(n.slice(e));
            return r ? (t.m = D[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function s(t, n, e) {
            return r(t, w, n, e)
        }

        function f(t, n, e) {
            return r(t, M, n, e)
        }

        function l(t, n, e) {
            return r(t, T, n, e)
        }

        function h(t) {
            return S[t.getDay()]
        }

        function p(t) {
            return k[t.getDay()]
        }

        function d(t) {
            return A[t.getMonth()]
        }

        function v(t) {
            return E[t.getMonth()]
        }

        function _(t) {
            return N[+(t.getHours() >= 12)]
        }

        function y(t) {
            return S[t.getUTCDay()]
        }

        function g(t) {
            return k[t.getUTCDay()]
        }

        function m(t) {
            return A[t.getUTCMonth()]
        }

        function x(t) {
            return E[t.getUTCMonth()]
        }

        function b(t) {
            return N[+(t.getUTCHours() >= 12)]
        }
        var w = t.dateTime,
            M = t.date,
            T = t.time,
            N = t.periods,
            k = t.days,
            S = t.shortDays,
            E = t.months,
            A = t.shortMonths,
            C = Gu(N),
            z = Ju(N),
            P = Gu(k),
            R = Ju(k),
            q = Gu(S),
            L = Ju(S),
            U = Gu(E),
            D = Ju(E),
            O = Gu(A),
            F = Ju(A),
            I = {
                a: h,
                A: p,
                b: d,
                B: v,
                c: null,
                d: ha,
                e: ha,
                H: pa,
                I: da,
                j: va,
                L: _a,
                m: ya,
                M: ga,
                p: _,
                S: ma,
                U: xa,
                w: ba,
                W: wa,
                x: null,
                X: null,
                y: Ma,
                Y: Ta,
                Z: Na,
                "%": Ia
            },
            Y = {
                a: y,
                A: g,
                b: m,
                B: x,
                c: null,
                d: ka,
                e: ka,
                H: Sa,
                I: Ea,
                j: Aa,
                L: Ca,
                m: za,
                M: Pa,
                p: b,
                S: Ra,
                U: qa,
                w: La,
                W: Ua,
                x: null,
                X: null,
                y: Da,
                Y: Oa,
                Z: Fa,
                "%": Ia
            },
            B = {
                a: o,
                A: u,
                b: a,
                B: c,
                c: s,
                d: oa,
                e: oa,
                H: aa,
                I: aa,
                j: ua,
                L: fa,
                m: ia,
                M: ca,
                p: i,
                S: sa,
                U: Ku,
                w: Qu,
                W: ta,
                x: f,
                X: l,
                y: ea,
                Y: na,
                Z: ra,
                "%": la
            };
        return I.x = n(M, I), I.X = n(T, I), I.c = n(w, I), Y.x = n(M, Y), Y.X = n(T, Y), Y.c = n(w, Y), {
            format: function(t) {
                var e = n(t += "", I);
                return e.toString = function() {
                    return t
                }, e
            },
            parse: function(t) {
                var n = e(t += "", Hu);
                return n.toString = function() {
                    return t
                }, n
            },
            utcFormat: function(t) {
                var e = n(t += "", Y);
                return e.toString = function() {
                    return t
                }, e
            },
            utcParse: function(t) {
                var n = e(t, Xu);
                return n.toString = function() {
                    return t
                }, n
            }
        }
    }

    function $u(t, n, e) {
        var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
    }

    function Zu(t) {
        return t.replace(Lx, "\\$&")
    }

    function Gu(t) {
        return new RegExp("^(?:" + t.map(Zu).join("|") + ")", "i")
    }

    function Ju(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }

    function Qu(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }

    function Ku(t, n, e) {
        var r = Rx.exec(n.slice(e));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }

    function ta(t, n, e) {
        var r = Rx.exec(n.slice(e));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }

    function na(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }

    function ea(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }

    function ra(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }

    function ia(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }

    function oa(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }

    function ua(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }

    function aa(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }

    function ca(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }

    function sa(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }

    function fa(t, n, e) {
        var r = Rx.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }

    function la(t, n, e) {
        var r = qx.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function ha(t, n) {
        return $u(t.getDate(), n, 2)
    }

    function pa(t, n) {
        return $u(t.getHours(), n, 2)
    }

    function da(t, n) {
        return $u(t.getHours() % 12 || 12, n, 2)
    }

    function va(t, n) {
        return $u(1 + Ym.count(ox(t), t), n, 3)
    }

    function _a(t, n) {
        return $u(t.getMilliseconds(), n, 3)
    }

    function ya(t, n) {
        return $u(t.getMonth() + 1, n, 2)
    }

    function ga(t, n) {
        return $u(t.getMinutes(), n, 2)
    }

    function ma(t, n) {
        return $u(t.getSeconds(), n, 2)
    }

    function xa(t, n) {
        return $u(jm.count(ox(t), t), n, 2)
    }

    function ba(t) {
        return t.getDay()
    }

    function wa(t, n) {
        return $u(Hm.count(ox(t), t), n, 2)
    }

    function Ma(t, n) {
        return $u(t.getFullYear() % 100, n, 2)
    }

    function Ta(t, n) {
        return $u(t.getFullYear() % 1e4, n, 4)
    }

    function Na(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : (n *= -1, "+")) + $u(n / 60 | 0, "0", 2) + $u(n % 60, "0", 2)
    }

    function ka(t, n) {
        return $u(t.getUTCDate(), n, 2)
    }

    function Sa(t, n) {
        return $u(t.getUTCHours(), n, 2)
    }

    function Ea(t, n) {
        return $u(t.getUTCHours() % 12 || 12, n, 2)
    }

    function Aa(t, n) {
        return $u(1 + lx.count(Ax(t), t), n, 3)
    }

    function Ca(t, n) {
        return $u(t.getUTCMilliseconds(), n, 3)
    }

    function za(t, n) {
        return $u(t.getUTCMonth() + 1, n, 2)
    }

    function Pa(t, n) {
        return $u(t.getUTCMinutes(), n, 2)
    }

    function Ra(t, n) {
        return $u(t.getUTCSeconds(), n, 2)
    }

    function qa(t, n) {
        return $u(px.count(Ax(t), t), n, 2)
    }

    function La(t) {
        return t.getUTCDay()
    }

    function Ua(t, n) {
        return $u(dx.count(Ax(t), t), n, 2)
    }

    function Da(t, n) {
        return $u(t.getUTCFullYear() % 100, n, 2)
    }

    function Oa(t, n) {
        return $u(t.getUTCFullYear() % 1e4, n, 4)
    }

    function Fa() {
        return "+0000"
    }

    function Ia() {
        return "%"
    }

    function Ya(n) {
        return Cx = Wu(n), t.timeFormat = Cx.format, t.timeParse = Cx.parse, t.utcFormat = Cx.utcFormat, t.utcParse = Cx.utcParse, Cx
    }

    function Ba(t) {
        return t.toISOString()
    }

    function ja(t) {
        var n = new Date(t);
        return isNaN(n) ? null : n
    }

    function Ha(t) {
        return new Date(t)
    }

    function Xa(t) {
        return t instanceof Date ? +t : +new Date(+t)
    }

    function Va(t, n, r, i, o, u, a, c, s) {
        function f(e) {
            return (a(e) < e ? v : u(e) < e ? _ : o(e) < e ? y : i(e) < e ? g : n(e) < e ? r(e) < e ? m : x : t(e) < e ? b : w)(e)
        }

        function l(n, r, i, o) {
            if (null == n && (n = 10), "number" == typeof n) {
                var u = Math.abs(i - r) / n,
                    a = ks(function(t) {
                        return t[2]
                    }).right(M, u);
                a === M.length ? (o = e(r / Xx, i / Xx, n), n = t) : a ? (a = M[u / M[a - 1][2] < M[a][2] / u ? a - 1 : a], o = a[1], n = a[0]) : (o = e(r, i, n), n = c)
            }
            return null == o ? n : n.every(o)
        }
        var h = Tu(gu, dh),
            p = h.invert,
            d = h.domain,
            v = s(".%L"),
            _ = s(":%S"),
            y = s("%I:%M"),
            g = s("%I %p"),
            m = s("%a %d"),
            x = s("%b %d"),
            b = s("%B"),
            w = s("%Y"),
            M = [
                [a, 1, Fx],
                [a, 5, 5 * Fx],
                [a, 15, 15 * Fx],
                [a, 30, 30 * Fx],
                [u, 1, Ix],
                [u, 5, 5 * Ix],
                [u, 15, 15 * Ix],
                [u, 30, 30 * Ix],
                [o, 1, Yx],
                [o, 3, 3 * Yx],
                [o, 6, 6 * Yx],
                [o, 12, 12 * Yx],
                [i, 1, Bx],
                [i, 2, 2 * Bx],
                [r, 1, jx],
                [n, 1, Hx],
                [n, 3, 3 * Hx],
                [t, 1, Xx]
            ];
        return h.invert = function(t) {
            return new Date(p(t))
        }, h.domain = function(t) {
            return arguments.length ? d(gm.call(t, Xa)) : d().map(Ha)
        }, h.ticks = function(t, n) {
            var e, r = d(),
                i = r[0],
                o = r[r.length - 1],
                u = o < i;
            return u && (e = i, i = o, o = e), e = l(t, i, o, n), e = e ? e.range(i, o + 1) : [], u ? e.reverse() : e
        }, h.tickFormat = function(t, n) {
            return null == n ? f : s(n)
        }, h.nice = function(t, n) {
            var e = d();
            return (t = l(t, e[0], e[e.length - 1], n)) ? d(Nm(e, t)) : h
        }, h.copy = function() {
            return Mu(h, Va(t, n, r, i, o, u, a, c, s))
        }, h
    }

    function Wa(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }

    function $a(t) {
        function n(n) {
            var o = (n - e) / (r - e);
            return t(i ? Math.max(0, Math.min(1, o)) : o)
        }
        var e = 0,
            r = 1,
            i = !1;
        return n.domain = function(t) {
            return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
        }, n.clamp = function(t) {
            return arguments.length ? (i = !!t, n) : i
        }, n.interpolator = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.copy = function() {
            return $a(t).domain([e, r]).clamp(i)
        }, Nu(n)
    }

    function Za(t) {
        return t.innerRadius
    }

    function Ga(t) {
        return t.outerRadius
    }

    function Ja(t) {
        return t.startAngle
    }

    function Qa(t) {
        return t.endAngle
    }

    function Ka(t) {
        return t && t.padAngle
    }

    function tc(t) {
        return t >= 1 ? lb : t <= -1 ? -lb : Math.asin(t)
    }

    function nc(t, n, e, r, i, o, u, a) {
        var c = e - t,
            s = r - n,
            f = u - i,
            l = a - o,
            h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
        return [t + h * c, n + h * s]
    }

    function ec(t, n, e, r, i, o, u) {
        var a = t - e,
            c = n - r,
            s = (u ? o : -o) / Math.sqrt(a * a + c * c),
            f = s * c,
            l = -s * a,
            h = t + f,
            p = n + l,
            d = e + f,
            v = r + l,
            _ = (h + d) / 2,
            y = (p + v) / 2,
            g = d - h,
            m = v - p,
            x = g * g + m * m,
            b = i - o,
            w = h * v - d * p,
            M = (m < 0 ? -1 : 1) * Math.sqrt(Math.max(0, b * b * x - w * w)),
            T = (w * m - g * M) / x,
            N = (-w * g - m * M) / x,
            k = (w * m + g * M) / x,
            S = (-w * g + m * M) / x,
            E = T - _,
            A = N - y,
            C = k - _,
            z = S - y;
        return E * E + A * A > C * C + z * z && (T = k, N = S), {
            cx: T,
            cy: N,
            x01: -f,
            y01: -l,
            x11: T * (i / b - 1),
            y11: N * (i / b - 1)
        }
    }

    function rc(t) {
        this._context = t
    }

    function ic(t) {
        return t[0]
    }

    function oc(t) {
        return t[1]
    }

    function uc(t) {
        this._curve = t
    }

    function ac(t) {
        function n(n) {
            return new uc(t(n))
        }
        return n._curve = t, n
    }

    function cc(t) {
        var n = t.curve;
        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
            return arguments.length ? n(ac(t)) : n()._curve
        }, t
    }

    function sc(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }

    function fc(t) {
        this._context = t
    }

    function lc(t) {
        this._context = t
    }

    function hc(t) {
        this._context = t
    }

    function pc(t, n) {
        this._basis = new fc(t), this._beta = n
    }

    function dc(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }

    function vc(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function _c(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function yc(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function gc(t, n, e) {
        var r = t._x1,
            i = t._y1,
            o = t._x2,
            u = t._y2;
        if (t._l01_a > sb) {
            var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > sb) {
            var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                f = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f
        }
        t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
    }

    function mc(t, n) {
        this._context = t, this._alpha = n
    }

    function xc(t, n) {
        this._context = t, this._alpha = n
    }

    function bc(t, n) {
        this._context = t, this._alpha = n
    }

    function wc(t) {
        this._context = t
    }

    function Mc(t) {
        return t < 0 ? -1 : 1
    }

    function Tc(t, n, e) {
        var r = t._x1 - t._x0,
            i = n - t._x1,
            o = (t._y1 - t._y0) / (r || i < 0 && -0),
            u = (e - t._y1) / (i || r < 0 && -0),
            a = (o * i + u * r) / (r + i);
        return (Mc(o) + Mc(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
    }

    function Nc(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }

    function kc(t, n, e) {
        var r = t._x0,
            i = t._y0,
            o = t._x1,
            u = t._y1,
            a = (o - r) / 3;
        t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
    }

    function Sc(t) {
        this._context = t
    }

    function Ec(t) {
        this._context = new Ac(t)
    }

    function Ac(t) {
        this._context = t
    }

    function Cc(t) {
        return new Sc(t)
    }

    function zc(t) {
        return new Ec(t)
    }

    function Pc(t) {
        this._context = t
    }

    function Rc(t) {
        var n, e, r = t.length - 1,
            i = new Array(r),
            o = new Array(r),
            u = new Array(r);
        for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
        for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o]
    }

    function qc(t, n) {
        this._context = t, this._t = n
    }

    function Lc(t) {
        return new qc(t, 0)
    }

    function Uc(t) {
        return new qc(t, 1)
    }

    function Dc(t, n) {
        return t[n]
    }

    function Oc(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
        return e
    }

    function Fc(t) {
        return t[0]
    }

    function Ic(t) {
        return t[1]
    }

    function Yc() {
        this._ = null
    }

    function Bc(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function jc(t, n) {
        var e = n,
            r = n.R,
            i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function Hc(t, n) {
        var e = n,
            r = n.L,
            i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function Xc(t) {
        for (; t.L;) t = t.L;
        return t
    }

    function Vc(t, n, e, r) {
        var i = [null, null],
            o = mw.push(i) - 1;
        return i.left = t, i.right = n, e && $c(i, t, n, e), r && $c(i, n, t, r), yw[t.index].halfedges.push(o), yw[n.index].halfedges.push(o), i
    }

    function Wc(t, n, e) {
        var r = [n, e];
        return r.left = t, r
    }

    function $c(t, n, e, r) {
        t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
    }

    function Zc(t, n, e, r, i) {
        var o, u = t[0],
            a = t[1],
            c = u[0],
            s = u[1],
            f = a[0],
            l = a[1],
            h = 0,
            p = 1,
            d = f - c,
            v = l - s;
        if (o = n - c, d || !(o > 0)) {
            if (o /= d, d < 0) {
                if (o < h) return;
                o < p && (p = o)
            } else if (d > 0) {
                if (o > p) return;
                o > h && (h = o)
            }
            if (o = r - c, d || !(o < 0)) {
                if (o /= d, d < 0) {
                    if (o > p) return;
                    o > h && (h = o)
                } else if (d > 0) {
                    if (o < h) return;
                    o < p && (p = o)
                }
                if (o = e - s, v || !(o > 0)) {
                    if (o /= v, v < 0) {
                        if (o < h) return;
                        o < p && (p = o)
                    } else if (v > 0) {
                        if (o > p) return;
                        o > h && (h = o)
                    }
                    if (o = i - s, v || !(o < 0)) {
                        if (o /= v, v < 0) {
                            if (o > p) return;
                            o > h && (h = o)
                        } else if (v > 0) {
                            if (o < h) return;
                            o < p && (p = o)
                        }
                        return !(h > 0 || p < 1) || (h > 0 && (t[0] = [c + h * d, s + h * v]), p < 1 && (t[1] = [c + p * d, s + p * v]), !0)
                    }
                }
            }
        }
    }

    function Gc(t, n, e, r, i) {
        var o = t[1];
        if (o) return !0;
        var u, a, c = t[0],
            s = t.left,
            f = t.right,
            l = s[0],
            h = s[1],
            p = f[0],
            d = f[1],
            v = (l + p) / 2,
            _ = (h + d) / 2;
        if (d === h) {
            if (v < n || v >= r) return;
            if (l > p) {
                if (c) {
                    if (c[1] >= i) return
                } else c = [v, e];
                o = [v, i]
            } else {
                if (c) {
                    if (c[1] < e) return
                } else c = [v, i];
                o = [v, e]
            }
        } else if (u = (l - p) / (d - h), a = _ - u * v, u < -1 || u > 1)
            if (l > p) {
                if (c) {
                    if (c[1] >= i) return
                } else c = [(e - a) / u, e];
                o = [(i - a) / u, i]
            } else {
                if (c) {
                    if (c[1] < e) return
                } else c = [(i - a) / u, i];
                o = [(e - a) / u, e]
            }
        else if (h < d) {
            if (c) {
                if (c[0] >= r) return
            } else c = [n, u * n + a];
            o = [r, u * r + a]
        } else {
            if (c) {
                if (c[0] < n) return
            } else c = [r, u * r + a];
            o = [n, u * n + a]
        }
        return t[0] = c, t[1] = o, !0
    }

    function Jc(t, n, e, r) {
        for (var i, o = mw.length; o--;) Gc(i = mw[o], t, n, e, r) && Zc(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > ww || Math.abs(i[0][1] - i[1][1]) > ww) || delete mw[o]
    }

    function Qc(t) {
        return yw[t.index] = {
            site: t,
            halfedges: []
        }
    }

    function Kc(t, n) {
        var e = t.site,
            r = n.left,
            i = n.right;
        return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }

    function ts(t, n) {
        return n[+(n.left !== t.site)]
    }

    function ns(t, n) {
        return n[+(n.left === t.site)]
    }

    function es() {
        for (var t, n, e, r, i = 0, o = yw.length; i < o; ++i)
            if ((t = yw[i]) && (r = (n = t.halfedges).length)) {
                var u = new Array(r),
                    a = new Array(r);
                for (e = 0; e < r; ++e) u[e] = e, a[e] = Kc(t, mw[n[e]]);
                for (u.sort(function(t, n) {
                        return a[n] - a[t]
                    }), e = 0; e < r; ++e) a[e] = n[u[e]];
                for (e = 0; e < r; ++e) n[e] = a[e]
            }
    }

    function rs(t, n, e, r) {
        var i, o, u, a, c, s, f, l, h, p, d, v, _ = yw.length,
            y = !0;
        for (i = 0; i < _; ++i)
            if (o = yw[i]) {
                for (u = o.site, c = o.halfedges, a = c.length; a--;) mw[c[a]] || c.splice(a, 1);
                for (a = 0, s = c.length; a < s;) p = ns(o, mw[c[a]]), d = p[0], v = p[1], f = ts(o, mw[c[++a % s]]), l = f[0], h = f[1], (Math.abs(d - l) > ww || Math.abs(v - h) > ww) && (c.splice(a, 0, mw.push(Wc(u, p, Math.abs(d - t) < ww && r - v > ww ? [t, Math.abs(l - t) < ww ? h : r] : Math.abs(v - r) < ww && e - d > ww ? [Math.abs(h - r) < ww ? l : e, r] : Math.abs(d - e) < ww && v - n > ww ? [e, Math.abs(l - e) < ww ? h : n] : Math.abs(v - n) < ww && d - t > ww ? [Math.abs(h - n) < ww ? l : t, n] : null)) - 1), ++s);
                s && (y = !1)
            }
        if (y) {
            var g, m, x, b = 1 / 0;
            for (i = 0, y = null; i < _; ++i)(o = yw[i]) && (u = o.site, g = u[0] - t, m = u[1] - n, x = g * g + m * m, x < b && (b = x, y = o));
            if (y) {
                var w = [t, n],
                    M = [t, r],
                    T = [e, r],
                    N = [e, n];
                y.halfedges.push(mw.push(Wc(u = y.site, w, M)) - 1, mw.push(Wc(u, M, T)) - 1, mw.push(Wc(u, T, N)) - 1, mw.push(Wc(u, N, w)) - 1)
            }
        }
        for (i = 0; i < _; ++i)(o = yw[i]) && (o.halfedges.length || delete yw[i])
    }

    function is() {
        Bc(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function os(t) {
        var n = t.P,
            e = t.N;
        if (n && e) {
            var r = n.site,
                i = t.site,
                o = e.site;
            if (r !== o) {
                var u = i[0],
                    a = i[1],
                    c = r[0] - u,
                    s = r[1] - a,
                    f = o[0] - u,
                    l = o[1] - a,
                    h = 2 * (c * l - s * f);
                if (!(h >= -Mw)) {
                    var p = c * c + s * s,
                        d = f * f + l * l,
                        v = (l * p - s * d) / h,
                        _ = (c * d - f * p) / h,
                        y = xw.pop() || new is;
                    y.arc = t, y.site = i, y.x = v + u, y.y = (y.cy = _ + a) + Math.sqrt(v * v + _ * _), t.circle = y;
                    for (var g = null, m = gw._; m;)
                        if (y.y < m.y || y.y === m.y && y.x <= m.x) {
                            if (!m.L) {
                                g = m.P;
                                break
                            }
                            m = m.L
                        } else {
                            if (!m.R) {
                                g = m;
                                break
                            }
                            m = m.R
                        }
                    gw.insert(g, y), g || (vw = y)
                }
            }
        }
    }

    function us(t) {
        var n = t.circle;
        n && (n.P || (vw = n.N), gw.remove(n), xw.push(n), Bc(n), t.circle = null)
    }

    function as() {
        Bc(this), this.edge = this.site = this.circle = null
    }

    function cs(t) {
        var n = bw.pop() || new as;
        return n.site = t, n
    }

    function ss(t) {
        us(t), _w.remove(t), bw.push(t), Bc(t)
    }

    function fs(t) {
        var n = t.circle,
            e = n.x,
            r = n.cy,
            i = [e, r],
            o = t.P,
            u = t.N,
            a = [t];
        ss(t);
        for (var c = o; c.circle && Math.abs(e - c.circle.x) < ww && Math.abs(r - c.circle.cy) < ww;) o = c.P, a.unshift(c), ss(c), c = o;
        a.unshift(c), us(c);
        for (var s = u; s.circle && Math.abs(e - s.circle.x) < ww && Math.abs(r - s.circle.cy) < ww;) u = s.N, a.push(s), ss(s), s = u;
        a.push(s), us(s);
        var f, l = a.length;
        for (f = 1; f < l; ++f) s = a[f], c = a[f - 1], $c(s.edge, c.site, s.site, i);
        c = a[0], s = a[l - 1], s.edge = Vc(c.site, s.site, null, i), os(c), os(s)
    }

    function ls(t) {
        for (var n, e, r, i, o = t[0], u = t[1], a = _w._; a;)
            if (r = hs(a, u) - o, r > ww) a = a.L;
            else {
                if (i = o - ps(a, u), !(i > ww)) {
                    r > -ww ? (n = a.P, e = a) : i > -ww ? (n = a, e = a.N) : n = e = a;
                    break
                }
                if (!a.R) {
                    n = a;
                    break
                }
                a = a.R
            }
        Qc(t);
        var c = cs(t);
        if (_w.insert(n, c), n || e) {
            if (n === e) return us(n), e = cs(n.site), _w.insert(c, e), c.edge = e.edge = Vc(n.site, c.site), os(n), void os(e);
            if (!e) return void(c.edge = Vc(n.site, c.site));
            us(n), us(e);
            var s = n.site,
                f = s[0],
                l = s[1],
                h = t[0] - f,
                p = t[1] - l,
                d = e.site,
                v = d[0] - f,
                _ = d[1] - l,
                y = 2 * (h * _ - p * v),
                g = h * h + p * p,
                m = v * v + _ * _,
                x = [(_ * g - p * m) / y + f, (h * m - v * g) / y + l];
            $c(e.edge, s, d, x), c.edge = Vc(s, t, null, x), e.edge = Vc(t, d, null, x), os(n), os(e)
        }
    }

    function hs(t, n) {
        var e = t.site,
            r = e[0],
            i = e[1],
            o = i - n;
        if (!o) return r;
        var u = t.P;
        if (!u) return -(1 / 0);
        e = u.site;
        var a = e[0],
            c = e[1],
            s = c - n;
        if (!s) return a;
        var f = a - r,
            l = 1 / o - 1 / s,
            h = f / s;
        return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2
    }

    function ps(t, n) {
        var e = t.N;
        if (e) return hs(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0
    }

    function ds(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
    }

    function vs(t, n) {
        return n[1] - t[1] || n[0] - t[0]
    }

    function _s(t, n) {
        var e, r, i, o = t.sort(vs).pop();
        for (mw = [], yw = new Array(t.length), _w = new Yc, gw = new Yc;;)
            if (i = vw, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (ls(o), e = o[0], r = o[1]), o = t.pop();
            else {
                if (!i) break;
                fs(i.arc)
            }
        if (es(), n) {
            var u = +n[0][0],
                a = +n[0][1],
                c = +n[1][0],
                s = +n[1][1];
            Jc(u, a, c, s), rs(u, a, c, s)
        }
        this.edges = mw, this.cells = yw, _w = gw = mw = yw = null
    }

    function ys(t, n, e) {
        this.target = t, this.type = n, this.transform = e
    }

    function gs(t, n, e) {
        this.k = t, this.x = n, this.y = e
    }

    function ms(t) {
        return t.__zoom || kw
    }

    function xs() {
        t.event.stopImmediatePropagation()
    }

    function bs() {
        return !t.event.button
    }

    function ws() {
        var t, n, e = this;
        return e instanceof SVGElement ? (e = e.ownerSVGElement || e, t = e.width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
            [0, 0],
            [t, n]
        ]
    }

    function Ms() {
        return this.__zoom || kw
    }
    var Ts = "4.5.0",
        Ns = function(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        },
        ks = function(t) {
            return 1 === t.length && (t = n(t)), {
                left: function(n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var o = r + i >>> 1;
                        t(n[o], e) < 0 ? r = o + 1 : i = o
                    }
                    return r
                },
                right: function(n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var o = r + i >>> 1;
                        t(n[o], e) > 0 ? i = o : r = o + 1
                    }
                    return r
                }
            }
        },
        Ss = ks(Ns),
        Es = Ss.right,
        As = Ss.left,
        Cs = function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        },
        zs = function(t) {
            return null === t ? NaN : +t
        },
        Ps = function(t, n) {
            var e, r, i = t.length,
                o = 0,
                u = 0,
                a = -1,
                c = 0;
            if (null == n)
                for (; ++a < i;) isNaN(e = zs(t[a])) || (r = e - o, o += r / ++c, u += r * (e - o));
            else
                for (; ++a < i;) isNaN(e = zs(n(t[a], a, t))) || (r = e - o, o += r / ++c, u += r * (e - o));
            if (c > 1) return u / (c - 1)
        },
        Rs = function(t, n) {
            var e = Ps(t, n);
            return e ? Math.sqrt(e) : e
        },
        qs = function(t, n) {
            var e, r, i, o = -1,
                u = t.length;
            if (null == n) {
                for (; ++o < u;)
                    if (null != (r = t[o]) && r >= r) {
                        e = i = r;
                        break
                    }
                for (; ++o < u;) null != (r = t[o]) && (e > r && (e = r), i < r && (i = r))
            } else {
                for (; ++o < u;)
                    if (null != (r = n(t[o], o, t)) && r >= r) {
                        e = i = r;
                        break
                    }
                for (; ++o < u;) null != (r = n(t[o], o, t)) && (e > r && (e = r), i < r && (i = r))
            }
            return [e, i]
        },
        Ls = Array.prototype,
        Us = Ls.slice,
        Ds = Ls.map,
        Os = function(t) {
            return function() {
                return t
            }
        },
        Fs = function(t) {
            return t
        },
        Is = function(t, n, e) {
            t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
            for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
            return o
        },
        Ys = Math.sqrt(50),
        Bs = Math.sqrt(10),
        js = Math.sqrt(2),
        Hs = function(t, n, r) {
            var i = e(t, n, r);
            return Is(Math.ceil(t / i) * i, Math.floor(n / i) * i + i / 2, i)
        },
        Xs = function(t) {
            return Math.ceil(Math.log(t.length) / Math.LN2) + 1
        },
        Vs = function() {
            function t(t) {
                var i, o, u = t.length,
                    a = new Array(u);
                for (i = 0; i < u; ++i) a[i] = n(t[i], i, t);
                var c = e(a),
                    s = c[0],
                    f = c[1],
                    l = r(a, s, f);
                Array.isArray(l) || (l = Hs(s, f, l));
                for (var h = l.length; l[0] <= s;) l.shift(), --h;
                for (; l[h - 1] >= f;) l.pop(), --h;
                var p, d = new Array(h + 1);
                for (i = 0; i <= h; ++i) p = d[i] = [], p.x0 = i > 0 ? l[i - 1] : s, p.x1 = i < h ? l[i] : f;
                for (i = 0; i < u; ++i) o = a[i], s <= o && o <= f && d[Es(l, o, 0, h)].push(t[i]);
                return d
            }
            var n = Fs,
                e = qs,
                r = Xs;
            return t.value = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Os(e), t) : n
            }, t.domain = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Os([n[0], n[1]]), t) : e
            }, t.thresholds = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : Os(Array.isArray(n) ? Us.call(n) : n), t) : r
            }, t
        },
        Ws = function(t, n, e) {
            if (null == e && (e = zs), r = t.length) {
                if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
                if (n >= 1) return +e(t[r - 1], r - 1, t);
                var r, i = (r - 1) * n,
                    o = Math.floor(i),
                    u = +e(t[o], o, t),
                    a = +e(t[o + 1], o + 1, t);
                return u + (a - u) * (i - o)
            }
        },
        $s = function(t, n, e) {
            return t = Ds.call(t, zs).sort(Ns), Math.ceil((e - n) / (2 * (Ws(t, .75) - Ws(t, .25)) * Math.pow(t.length, -1 / 3)))
        },
        Zs = function(t, n, e) {
            return Math.ceil((e - n) / (3.5 * Rs(t) * Math.pow(t.length, -1 / 3)))
        },
        Gs = function(t, n) {
            var e, r, i = -1,
                o = t.length;
            if (null == n) {
                for (; ++i < o;)
                    if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = t[i]) && r > e && (e = r)
            } else {
                for (; ++i < o;)
                    if (null != (r = n(t[i], i, t)) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = n(t[i], i, t)) && r > e && (e = r)
            }
            return e
        },
        Js = function(t, n) {
            var e, r = 0,
                i = t.length,
                o = -1,
                u = i;
            if (null == n)
                for (; ++o < i;) isNaN(e = zs(t[o])) ? --u : r += e;
            else
                for (; ++o < i;) isNaN(e = zs(n(t[o], o, t))) ? --u : r += e;
            if (u) return r / u
        },
        Qs = function(t, n) {
            var e, r = [],
                i = t.length,
                o = -1;
            if (null == n)
                for (; ++o < i;) isNaN(e = zs(t[o])) || r.push(e);
            else
                for (; ++o < i;) isNaN(e = zs(n(t[o], o, t))) || r.push(e);
            return Ws(r.sort(Ns), .5)
        },
        Ks = function(t) {
            for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
            for (e = new Array(u); --i >= 0;)
                for (r = t[i], n = r.length; --n >= 0;) e[--u] = r[n];
            return e
        },
        tf = function(t, n) {
            var e, r, i = -1,
                o = t.length;
            if (null == n) {
                for (; ++i < o;)
                    if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = t[i]) && e > r && (e = r)
            } else {
                for (; ++i < o;)
                    if (null != (r = n(t[i], i, t)) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = n(t[i], i, t)) && e > r && (e = r)
            }
            return e
        },
        nf = function(t) {
            for (var n = 0, e = t.length - 1, r = t[0], i = new Array(e < 0 ? 0 : e); n < e;) i[n] = [r, r = t[++n]];
            return i
        },
        ef = function(t, n) {
            for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
            return r
        },
        rf = function(t, n) {
            if (e = t.length) {
                var e, r, i = 0,
                    o = 0,
                    u = t[o];
                for (n || (n = Ns); ++i < e;)(n(r = t[i], u) < 0 || 0 !== n(u, u)) && (u = r, o = i);
                return 0 === n(u, u) ? o : void 0
            }
        },
        of = function(t, n, e) {
            for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
            return t
        },
        uf = function(t, n) {
            var e, r = 0,
                i = t.length,
                o = -1;
            if (null == n)
                for (; ++o < i;)(e = +t[o]) && (r += e);
            else
                for (; ++o < i;)(e = +n(t[o], o, t)) && (r += e);
            return r
        },
        af = function(t) {
            if (!(o = t.length)) return [];
            for (var n = -1, e = tf(t, r), i = new Array(e); ++n < e;)
                for (var o, u = -1, a = i[n] = new Array(o); ++u < o;) a[u] = t[u][n];
            return i
        },
        cf = function() {
            return af(arguments)
        },
        sf = Array.prototype.slice,
        ff = function(t) {
            return t
        },
        lf = 1,
        hf = 2,
        pf = 3,
        df = 4,
        vf = 1e-6,
        _f = {
            value: function() {}
        };
    d.prototype = p.prototype = {
        constructor: d,
        on: function(t, n) {
            var e, r = this._,
                i = v(t + "", r),
                o = -1,
                u = i.length; {
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++o < u;)
                        if (e = (t = i[o]).type) r[e] = y(r[e], t.name, n);
                        else if (null == n)
                        for (e in r) r[e] = y(r[e], t.name, null);
                    return this
                }
                for (; ++o < u;)
                    if ((e = (t = i[o]).type) && (e = _(r[e], t.name))) return e
            }
        },
        copy: function() {
            var t = {},
                n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new d(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0)
                for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (r = this._[t], o = 0, e = r.length; o < e; ++o) r[o].value.apply(n, i)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
        }
    };
    var yf = "http://www.w3.org/1999/xhtml",
        gf = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: yf,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        },
        mf = function(t) {
            var n = t += "",
                e = n.indexOf(":");
            return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), gf.hasOwnProperty(n) ? {
                space: gf[n],
                local: t
            } : t
        },
        xf = function(t) {
            var n = mf(t);
            return (n.local ? m : g)(n)
        },
        bf = 0;
    b.prototype = x.prototype = {
        constructor: b,
        get: function(t) {
            for (var n = this._; !(n in t);)
                if (!(t = t.parentNode)) return;
            return t[n]
        },
        set: function(t, n) {
            return t[this._] = n
        },
        remove: function(t) {
            return this._ in t && delete t[this._]
        },
        toString: function() {
            return this._
        }
    };
    var wf = function(t) {
        return function() {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var Mf = document.documentElement;
        if (!Mf.matches) {
            var Tf = Mf.webkitMatchesSelector || Mf.msMatchesSelector || Mf.mozMatchesSelector || Mf.oMatchesSelector;
            wf = function(t) {
                return function() {
                    return Tf.call(this, t)
                }
            }
        }
    }
    var Nf = wf,
        kf = {};
    if (t.event = null, "undefined" != typeof document) {
        var Sf = document.documentElement;
        "onmouseenter" in Sf || (kf = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        })
    }
    var Ef = function(t, n, e) {
            var r, i, o = T(t + ""),
                u = o.length; {
                if (!(arguments.length < 2)) {
                    for (a = n ? k : N, null == e && (e = !1), r = 0; r < u; ++r) this.each(a(o[r], n, e));
                    return this
                }
                var a = this.node().__on;
                if (a)
                    for (var c, s = 0, f = a.length; s < f; ++s)
                        for (r = 0, c = a[s]; r < u; ++r)
                            if ((i = o[r]).type === c.type && i.name === c.name) return c.value
            }
        },
        Af = function() {
            for (var n, e = t.event; n = e.sourceEvent;) e = n;
            return e
        },
        Cf = function(t, n) {
            var e = t.ownerSVGElement || t;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
        },
        zf = function(t) {
            var n = Af();
            return n.changedTouches && (n = n.changedTouches[0]), Cf(t, n)
        },
        Pf = function(t) {
            return null == t ? E : function() {
                return this.querySelector(t)
            }
        },
        Rf = function(t) {
            "function" != typeof t && (t = Pf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, u, a = n[i], c = a.length, s = r[i] = new Array(c), f = 0; f < c; ++f)(o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[f] = u);
            return new pt(r, this._parents)
        },
        qf = function(t) {
            return null == t ? A : function() {
                return this.querySelectorAll(t)
            }
        },
        Lf = function(t) {
            "function" != typeof t && (t = qf(t));
            for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                for (var u, a = n[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
            return new pt(r, i)
        },
        Uf = function(t) {
            "function" != typeof t && (t = Nf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
            return new pt(r, this._parents)
        },
        Df = function(t) {
            return new Array(t.length)
        },
        Of = function() {
            return new pt(this._enter || this._groups.map(Df), this._parents)
        };
    C.prototype = {
        constructor: C,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var Ff = function(t) {
            return function() {
                return t
            }
        },
        If = "$",
        Yf = function(t, n) {
            if (!t) return p = new Array(this.size()), s = -1, this.each(function(t) {
                p[++s] = t
            }), p;
            var e = n ? P : z,
                r = this._parents,
                i = this._groups;
            "function" != typeof t && (t = Ff(t));
            for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
                var f = r[s],
                    l = i[s],
                    h = l.length,
                    p = t.call(f, f && f.__data__, s, r),
                    d = p.length,
                    v = a[s] = new Array(d),
                    _ = u[s] = new Array(d),
                    y = c[s] = new Array(h);
                e(f, l, v, _, y, p, n);
                for (var g, m, x = 0, b = 0; x < d; ++x)
                    if (g = v[x]) {
                        for (x >= b && (b = x + 1); !(m = _[b]) && ++b < d;);
                        g._next = m || null
                    }
            }
            return u = new pt(u, r), u._enter = a, u._exit = c, u
        },
        Bf = function() {
            return new pt(this._exit || this._groups.map(Df), this._parents)
        },
        jf = function(t) {
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
            for (; a < r; ++a) u[a] = n[a];
            return new pt(u, this._parents)
        },
        Hf = function() {
            for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
            return this
        },
        Xf = function(t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = R);
            for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; f < c; ++f)(u = a[f]) && (s[f] = u);
                s.sort(n)
            }
            return new pt(i, this._parents).order()
        },
        Vf = function() {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        },
        Wf = function() {
            var t = new Array(this.size()),
                n = -1;
            return this.each(function() {
                t[++n] = this
            }), t
        },
        $f = function() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                    var u = r[i];
                    if (u) return u
                }
            return null
        },
        Zf = function() {
            var t = 0;
            return this.each(function() {
                ++t
            }), t
        },
        Gf = function() {
            return !this.node()
        },
        Jf = function(t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
            return this
        },
        Qf = function(t, n) {
            var e = mf(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? L : q : "function" == typeof n ? e.local ? F : O : e.local ? D : U)(e, n))
        },
        Kf = function(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        },
        tl = function(t, n, e) {
            var r;
            return arguments.length > 1 ? this.each((null == n ? I : "function" == typeof n ? B : Y)(t, n, null == e ? "" : e)) : Kf(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
        },
        nl = function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? j : "function" == typeof n ? X : H)(t, n)) : this.node()[t]
        };
    $.prototype = {
        add: function(t) {
            var n = this._names.indexOf(t);
            n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var el = function(t, n) {
            var e = V(t + "");
            if (arguments.length < 2) {
                for (var r = W(this.node()), i = -1, o = e.length; ++i < o;)
                    if (!r.contains(e[i])) return !1;
                return !0
            }
            return this.each(("function" == typeof n ? K : n ? J : Q)(e, n))
        },
        rl = function(t) {
            return arguments.length ? this.each(null == t ? tt : ("function" == typeof t ? et : nt)(t)) : this.node().textContent
        },
        il = function(t) {
            return arguments.length ? this.each(null == t ? rt : ("function" == typeof t ? ot : it)(t)) : this.node().innerHTML
        },
        ol = function() {
            return this.each(ut)
        },
        ul = function() {
            return this.each(at)
        },
        al = function(t) {
            var n = "function" == typeof t ? t : xf(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        },
        cl = function(t, n) {
            var e = "function" == typeof t ? t : xf(t),
                r = null == n ? ct : "function" == typeof n ? n : Pf(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        sl = function() {
            return this.each(st)
        },
        fl = function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        ll = function(t, n) {
            return this.each(("function" == typeof n ? ht : lt)(t, n))
        },
        hl = [null];
    pt.prototype = dt.prototype = {
        constructor: pt,
        select: Rf,
        selectAll: Lf,
        filter: Uf,
        data: Yf,
        enter: Of,
        exit: Bf,
        merge: jf,
        order: Hf,
        sort: Xf,
        call: Vf,
        nodes: Wf,
        node: $f,
        size: Zf,
        empty: Gf,
        each: Jf,
        attr: Qf,
        style: tl,
        property: nl,
        classed: el,
        text: rl,
        html: il,
        raise: ol,
        lower: ul,
        append: al,
        insert: cl,
        remove: sl,
        datum: fl,
        on: Ef,
        dispatch: ll
    };
    var pl = function(t) {
            return "string" == typeof t ? new pt([
                [document.querySelector(t)]
            ], [document.documentElement]) : new pt([
                [t]
            ], hl)
        },
        dl = function(t) {
            return "string" == typeof t ? new pt([document.querySelectorAll(t)], [document.documentElement]) : new pt([null == t ? [] : t], hl)
        },
        vl = function(t, n, e) {
            arguments.length < 3 && (e = n, n = Af().changedTouches);
            for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
                if ((r = n[i]).identifier === e) return Cf(t, r);
            return null
        },
        _l = function(t, n) {
            null == n && (n = Af().touches);
            for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Cf(t, n[e]);
            return i
        },
        yl = function() {
            t.event.preventDefault(), t.event.stopImmediatePropagation()
        },
        gl = function(t) {
            var n = t.document.documentElement,
                e = pl(t).on("dragstart.drag", yl, !0);
            "onselectstart" in n ? e.on("selectstart.drag", yl, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
        },
        ml = function(t) {
            return function() {
                return t
            }
        };
    yt.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    };
    var xl = function() {
            function n(t) {
                t.on("mousedown.drag", e).on("touchstart.drag", o).on("touchmove.drag", u).on("touchend.drag touchcancel.drag", a).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function e() {
                if (!f && l.apply(this, arguments)) {
                    var n = c("mouse", h.apply(this, arguments), zf, this, arguments);
                    n && (pl(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), gl(t.event.view), vt(), s = !1, n("start"))
                }
            }

            function r() {
                yl(), s = !0, v.mouse("drag")
            }

            function i() {
                pl(t.event.view).on("mousemove.drag mouseup.drag", null), _t(t.event.view, s), yl(), v.mouse("end")
            }

            function o() {
                if (l.apply(this, arguments)) {
                    var n, e, r = t.event.changedTouches,
                        i = h.apply(this, arguments),
                        o = r.length;
                    for (n = 0; n < o; ++n)(e = c(r[n].identifier, i, vl, this, arguments)) && (vt(), e("start"))
                }
            }

            function u() {
                var n, e, r = t.event.changedTouches,
                    i = r.length;
                for (n = 0; n < i; ++n)(e = v[r[n].identifier]) && (yl(), e("drag"))
            }

            function a() {
                var n, e, r = t.event.changedTouches,
                    i = r.length;
                for (f && clearTimeout(f), f = setTimeout(function() {
                        f = null
                    }, 500), n = 0; n < i; ++n)(e = v[r[n].identifier]) && (vt(), e("end"))
            }

            function c(e, r, i, o, u) {
                var a, c, s, f = i(r, e),
                    l = _.copy();
                if (S(new yt(n, "beforestart", a, e, y, f[0], f[1], 0, 0, l), function() {
                        return null != (t.event.subject = a = d.apply(o, u)) && (c = a.x - f[0] || 0, s = a.y - f[1] || 0, !0)
                    })) return function t(h) {
                    var p, d = f;
                    switch (h) {
                        case "start":
                            v[e] = t, p = y++;
                            break;
                        case "end":
                            delete v[e], --y;
                        case "drag":
                            f = i(r, e), p = y
                    }
                    S(new yt(n, h, a, e, p, f[0] + c, f[1] + s, f[0] - d[0], f[1] - d[1], l), l.apply, l, [h, o, u])
                }
            }
            var s, f, l = gt,
                h = mt,
                d = xt,
                v = {},
                _ = p("start", "drag", "end"),
                y = 0;
            return n.filter = function(t) {
                return arguments.length ? (l = "function" == typeof t ? t : ml(!!t), n) : l
            }, n.container = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : ml(t), n) : h
            }, n.subject = function(t) {
                return arguments.length ? (d = "function" == typeof t ? t : ml(t),
                    n) : d
            }, n.on = function() {
                var t = _.on.apply(_, arguments);
                return t === _ ? n : t
            }, n
        },
        bl = function(t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        },
        wl = .7,
        Ml = 1 / wl,
        Tl = "\\s*([+-]?\\d+)\\s*",
        Nl = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        kl = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Sl = /^#([0-9a-f]{3})$/,
        El = /^#([0-9a-f]{6})$/,
        Al = new RegExp("^rgb\\(" + [Tl, Tl, Tl] + "\\)$"),
        Cl = new RegExp("^rgb\\(" + [kl, kl, kl] + "\\)$"),
        zl = new RegExp("^rgba\\(" + [Tl, Tl, Tl, Nl] + "\\)$"),
        Pl = new RegExp("^rgba\\(" + [kl, kl, kl, Nl] + "\\)$"),
        Rl = new RegExp("^hsl\\(" + [Nl, kl, kl] + "\\)$"),
        ql = new RegExp("^hsla\\(" + [Nl, kl, kl, Nl] + "\\)$"),
        Ll = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
    bl(wt, Mt, {
        displayable: function() {
            return this.rgb().displayable()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }), bl(Et, St, bt(wt, {
        brighter: function(t) {
            return t = null == t ? Ml : Math.pow(Ml, t), new Et(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? wl : Math.pow(wl, t), new Et(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        toString: function() {
            var t = this.opacity;
            return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    })), bl(Pt, zt, bt(wt, {
        brighter: function(t) {
            return t = null == t ? Ml : Math.pow(Ml, t), new Pt(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? wl : Math.pow(wl, t), new Pt(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n,
                i = 2 * e - r;
            return new Et(Rt(t >= 240 ? t - 240 : t + 120, i, r), Rt(t, i, r), Rt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var Ul = Math.PI / 180,
        Dl = 180 / Math.PI,
        Ol = 18,
        Fl = .95047,
        Il = 1,
        Yl = 1.08883,
        Bl = 4 / 29,
        jl = 6 / 29,
        Hl = 3 * jl * jl,
        Xl = jl * jl * jl;
    bl(Ut, Lt, bt(wt, {
        brighter: function(t) {
            return new Ut(this.l + Ol * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function(t) {
            return new Ut(this.l - Ol * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
            return t = Il * Ot(t), n = Fl * Ot(n), e = Yl * Ot(e), new Et(Ft(3.2404542 * n - 1.5371385 * t - .4985314 * e), Ft(-.969266 * n + 1.8760108 * t + .041556 * e), Ft(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
        }
    })), bl(jt, Bt, bt(wt, {
        brighter: function(t) {
            return new jt(this.h, this.c, this.l + Ol * (null == t ? 1 : t), this.opacity)
        },
        darker: function(t) {
            return new jt(this.h, this.c, this.l - Ol * (null == t ? 1 : t), this.opacity)
        },
        rgb: function() {
            return qt(this).rgb()
        }
    }));
    var Vl = -.14861,
        Wl = 1.78277,
        $l = -.29227,
        Zl = -.90649,
        Gl = 1.97294,
        Jl = Gl * Zl,
        Ql = Gl * Wl,
        Kl = Wl * $l - Zl * Vl;
    bl(Vt, Xt, bt(wt, {
        brighter: function(t) {
            return t = null == t ? Ml : Math.pow(Ml, t), new Vt(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? wl : Math.pow(wl, t), new Vt(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Ul,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t),
                i = Math.sin(t);
            return new Et(255 * (n + e * (Vl * r + Wl * i)), 255 * (n + e * ($l * r + Zl * i)), 255 * (n + e * (Gl * r)), this.opacity)
        }
    }));
    var th, nh, eh, rh, ih, oh, uh = function(t) {
            var n = t.length - 1;
            return function(e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                    i = t[r],
                    o = t[r + 1],
                    u = r > 0 ? t[r - 1] : 2 * i - o,
                    a = r < n - 1 ? t[r + 2] : 2 * o - i;
                return Wt((e - r / n) * n, u, i, o, a)
            }
        },
        ah = function(t) {
            var n = t.length;
            return function(e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                    i = t[(r + n - 1) % n],
                    o = t[r % n],
                    u = t[(r + 1) % n],
                    a = t[(r + 2) % n];
                return Wt((e - r / n) * n, i, o, u, a)
            }
        },
        ch = function(t) {
            return function() {
                return t
            }
        },
        sh = function t(n) {
            function e(t, n) {
                var e = r((t = St(t)).r, (n = St(n)).r),
                    i = r(t.g, n.g),
                    o = r(t.b, n.b),
                    u = Qt(t.opacity, n.opacity);
                return function(n) {
                    return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
                }
            }
            var r = Jt(n);
            return e.gamma = t, e
        }(1),
        fh = Kt(uh),
        lh = Kt(ah),
        hh = function(t, n) {
            var e, r = n ? n.length : 0,
                i = t ? Math.min(r, t.length) : 0,
                o = new Array(r),
                u = new Array(r);
            for (e = 0; e < i; ++e) o[e] = mh(t[e], n[e]);
            for (; e < r; ++e) u[e] = n[e];
            return function(t) {
                for (e = 0; e < i; ++e) u[e] = o[e](t);
                return u
            }
        },
        ph = function(t, n) {
            var e = new Date;
            return t = +t, n -= t,
                function(r) {
                    return e.setTime(t + n * r), e
                }
        },
        dh = function(t, n) {
            return t = +t, n -= t,
                function(e) {
                    return t + n * e
                }
        },
        vh = function(t, n) {
            var e, r = {},
                i = {};
            null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
            for (e in n) e in t ? r[e] = mh(t[e], n[e]) : i[e] = n[e];
            return function(t) {
                for (e in r) i[e] = r[e](t);
                return i
            }
        },
        _h = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        yh = new RegExp(_h.source, "g"),
        gh = function(t, n) {
            var e, r, i, o = _h.lastIndex = yh.lastIndex = 0,
                u = -1,
                a = [],
                c = [];
            for (t += "", n += "";
                (e = _h.exec(t)) && (r = yh.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
                i: u,
                x: dh(e, r)
            })), o = yh.lastIndex;
            return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? nn(c[0].x) : tn(n) : (n = c.length, function(t) {
                for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                return a.join("")
            })
        },
        mh = function(t, n) {
            var e, r = typeof n;
            return null == n || "boolean" === r ? ch(n) : ("number" === r ? dh : "string" === r ? (e = Mt(n)) ? (n = e, sh) : gh : n instanceof Mt ? sh : n instanceof Date ? ph : Array.isArray(n) ? hh : isNaN(n) ? vh : dh)(t, n)
        },
        xh = function(t, n) {
            return t = +t, n -= t,
                function(e) {
                    return Math.round(t + n * e)
                }
        },
        bh = 180 / Math.PI,
        wh = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        },
        Mh = function(t, n, e, r, i, o) {
            var u, a, c;
            return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
                translateX: i,
                translateY: o,
                rotate: Math.atan2(n, t) * bh,
                skewX: Math.atan(c) * bh,
                scaleX: u,
                scaleY: a
            }
        },
        Th = on(en, "px, ", "px)", "deg)"),
        Nh = on(rn, ", ", ")", ")"),
        kh = Math.SQRT2,
        Sh = 2,
        Eh = 4,
        Ah = 1e-12,
        Ch = function(t, n) {
            var e, r, i = t[0],
                o = t[1],
                u = t[2],
                a = n[0],
                c = n[1],
                s = n[2],
                f = a - i,
                l = c - o,
                h = f * f + l * l;
            if (h < Ah) r = Math.log(s / u) / kh, e = function(t) {
                return [i + t * f, o + t * l, u * Math.exp(kh * t * r)]
            };
            else {
                var p = Math.sqrt(h),
                    d = (s * s - u * u + Eh * h) / (2 * u * Sh * p),
                    v = (s * s - u * u - Eh * h) / (2 * s * Sh * p),
                    _ = Math.log(Math.sqrt(d * d + 1) - d),
                    y = Math.log(Math.sqrt(v * v + 1) - v);
                r = (y - _) / kh, e = function(t) {
                    var n = t * r,
                        e = un(_),
                        a = u / (Sh * p) * (e * cn(kh * n + _) - an(_));
                    return [i + a * f, o + a * l, u * e / un(kh * n + _)]
                }
            }
            return e.duration = 1e3 * r, e
        },
        zh = sn(Gt),
        Ph = sn(Qt),
        Rh = ln(Gt),
        qh = ln(Qt),
        Lh = hn(Gt),
        Uh = hn(Qt),
        Dh = function(t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
            return e
        },
        Oh = 0,
        Fh = 0,
        Ih = 0,
        Yh = 1e3,
        Bh = 0,
        jh = 0,
        Hh = 0,
        Xh = "object" == typeof performance && performance.now ? performance : Date,
        Vh = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function(t) {
            setTimeout(t, 17)
        };
    vn.prototype = _n.prototype = {
        constructor: vn,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? pn() : +e) + (null == n ? 0 : +n), this._next || oh === this || (oh ? oh._next = this : ih = this, oh = this), this._call = t, this._time = e, bn()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, bn())
        }
    };
    var Wh = function(t, n, e) {
            var r = new vn;
            return n = null == n ? 0 : +n, r.restart(function(e) {
                r.stop(), t(e + n)
            }, n, e), r
        },
        $h = function(t, n, e) {
            var r = new vn,
                i = n;
            return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? pn() : +e, r.restart(function o(u) {
                u += i, r.restart(o, i += n, e), t(u)
            }, n, e), r)
        },
        Zh = p("start", "end", "interrupt"),
        Gh = [],
        Jh = 0,
        Qh = 1,
        Kh = 2,
        tp = 3,
        np = 4,
        ep = 5,
        rp = 6,
        ip = function(t, n, e, r, i, o) {
            var u = t.__transition;
            if (u) {
                if (e in u) return
            } else t.__transition = {};
            Nn(t, e, {
                name: n,
                index: r,
                group: i,
                on: Zh,
                tween: Gh,
                time: o.time,
                delay: o.delay,
                duration: o.duration,
                ease: o.ease,
                timer: null,
                state: Jh
            })
        },
        op = function(t, n) {
            var e, r, i, o = t.__transition,
                u = !0;
            if (o) {
                n = null == n ? null : n + "";
                for (i in o)(e = o[i]).name === n ? (r = e.state > Kh && e.state < ep, e.state = rp, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                u && delete t.__transition
            }
        },
        up = function(t) {
            return this.each(function() {
                op(this, t)
            })
        },
        ap = function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = Tn(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                    if ((r = i[o]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? kn : Sn)(e, t, n))
        },
        cp = function(t, n) {
            var e;
            return ("number" == typeof n ? dh : n instanceof Mt ? sh : (e = Mt(n)) ? (n = e, sh) : gh)(t, n)
        },
        sp = function(t, n) {
            var e = mf(t),
                r = "transform" === e ? Nh : cp;
            return this.attrTween(t, "function" == typeof n ? (e.local ? qn : Rn)(e, r, En(this, "attr." + t, n)) : null == n ? (e.local ? Cn : An)(e) : (e.local ? Pn : zn)(e, r, n))
        },
        fp = function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = mf(t);
            return this.tween(e, (r.local ? Ln : Un)(r, n))
        },
        lp = function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Dn : On)(n, t)) : Tn(this.node(), n).delay
        },
        hp = function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Fn : In)(n, t)) : Tn(this.node(), n).duration
        },
        pp = function(t) {
            var n = this._id;
            return arguments.length ? this.each(Yn(n, t)) : Tn(this.node(), n).ease
        },
        dp = function(t) {
            "function" != typeof t && (t = Nf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
            return new Qn(r, this._parents, this._name, this._id)
        },
        vp = function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
            for (; a < r; ++a) u[a] = n[a];
            return new Qn(u, this._parents, this._name, this._id)
        },
        _p = function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? Tn(this.node(), e).on.on(t) : this.each(jn(e, t, n))
        },
        yp = function() {
            return this.on("end.remove", Hn(this._id))
        },
        gp = function(t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = Pf(t));
            for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
                for (var a, c, s = r[u], f = s.length, l = o[u] = new Array(f), h = 0; h < f; ++h)(a = s[h]) && (c = t.call(a, a.__data__, h, s)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, ip(l[h], n, e, h, l, Tn(a, e)));
            return new Qn(o, this._parents, n, e)
        },
        mp = function(t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = qf(t));
            for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
                for (var c, s = r[a], f = s.length, l = 0; l < f; ++l)
                    if (c = s[l]) {
                        for (var h, p = t.call(c, c.__data__, l, s), d = Tn(c, e), v = 0, _ = p.length; v < _; ++v)(h = p[v]) && ip(h, n, e, v, p, d);
                        o.push(p), u.push(c)
                    }
            return new Qn(o, u, n, e)
        },
        xp = dt.prototype.constructor,
        bp = function() {
            return new xp(this._groups, this._parents)
        },
        wp = function(t, n, e) {
            var r = "transform" == (t += "") ? Th : cp;
            return null == n ? this.styleTween(t, Xn(t, r)).on("end.style." + t, Vn(t)) : this.styleTween(t, "function" == typeof n ? $n(t, r, En(this, "style." + t, n)) : Wn(t, r, n), e)
        },
        Mp = function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, Zn(t, n, null == e ? "" : e))
        },
        Tp = function(t) {
            return this.tween("text", "function" == typeof t ? Jn(En(this, "text", t)) : Gn(null == t ? "" : t + ""))
        },
        Np = function() {
            for (var t = this._name, n = this._id, e = te(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)
                    if (u = a[s]) {
                        var f = Tn(u, n);
                        ip(u, t, e, s, a, {
                            time: f.time + f.delay + f.duration,
                            delay: 0,
                            duration: f.duration,
                            ease: f.ease
                        })
                    }
            return new Qn(r, this._parents, t, e)
        },
        kp = 0,
        Sp = dt.prototype;
    Qn.prototype = Kn.prototype = {
        constructor: Qn,
        select: gp,
        selectAll: mp,
        filter: dp,
        merge: vp,
        selection: bp,
        transition: Np,
        call: Sp.call,
        nodes: Sp.nodes,
        node: Sp.node,
        size: Sp.size,
        empty: Sp.empty,
        each: Sp.each,
        on: _p,
        attr: sp,
        attrTween: fp,
        style: wp,
        styleTween: Mp,
        text: Tp,
        remove: yp,
        tween: ap,
        delay: lp,
        duration: hp,
        ease: pp
    };
    var Ep = 3,
        Ap = function t(n) {
            function e(t) {
                return Math.pow(t, n)
            }
            return n = +n, e.exponent = t, e
        }(Ep),
        Cp = function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n)
            }
            return n = +n, e.exponent = t, e
        }(Ep),
        zp = function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            }
            return n = +n, e.exponent = t, e
        }(Ep),
        Pp = Math.PI,
        Rp = Pp / 2,
        qp = 4 / 11,
        Lp = 6 / 11,
        Up = 8 / 11,
        Dp = .75,
        Op = 9 / 11,
        Fp = 10 / 11,
        Ip = .9375,
        Yp = 21 / 22,
        Bp = 63 / 64,
        jp = 1 / qp / qp,
        Hp = 1.70158,
        Xp = function t(n) {
            function e(t) {
                return t * t * ((n + 1) * t - n)
            }
            return n = +n, e.overshoot = t, e
        }(Hp),
        Vp = function t(n) {
            function e(t) {
                return --t * t * ((n + 1) * t + n) + 1
            }
            return n = +n, e.overshoot = t, e
        }(Hp),
        Wp = function t(n) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            }
            return n = +n, e.overshoot = t, e
        }(Hp),
        $p = 2 * Math.PI,
        Zp = 1,
        Gp = .3,
        Jp = function t(n, e) {
            function r(t) {
                return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= $p);
            return r.amplitude = function(n) {
                return t(n, e * $p)
            }, r.period = function(e) {
                return t(n, e)
            }, r
        }(Zp, Gp),
        Qp = function t(n, e) {
            function r(t) {
                return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= $p);
            return r.amplitude = function(n) {
                return t(n, e * $p)
            }, r.period = function(e) {
                return t(n, e)
            }, r
        }(Zp, Gp),
        Kp = function t(n, e) {
            function r(t) {
                return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= $p);
            return r.amplitude = function(n) {
                return t(n, e * $p)
            }, r.period = function(e) {
                return t(n, e)
            }, r
        }(Zp, Gp),
        td = {
            time: null,
            delay: 0,
            duration: 250,
            ease: ae
        },
        nd = function(t) {
            var n, e;
            t instanceof Qn ? (n = t._id, t = t._name) : (n = te(), (e = td).time = pn(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && ip(u, t, n, s, a, e || xe(u, n));
            return new Qn(r, this._parents, t, n)
        };
    dt.prototype.interrupt = up, dt.prototype.transition = nd;
    var ed = [null],
        rd = function(t, n) {
            var e, r, i = t.__transition;
            if (i) {
                n = null == n ? null : n + "";
                for (r in i)
                    if ((e = i[r]).state > Qh && e.name === n) return new Qn([
                        [t]
                    ], ed, n, +r)
            }
            return null
        },
        id = function(t) {
            return function() {
                return t
            }
        },
        od = function(t, n, e) {
            this.target = t, this.type = n, this.selection = e
        },
        ud = function() {
            t.event.preventDefault(), t.event.stopImmediatePropagation()
        },
        ad = {
            name: "drag"
        },
        cd = {
            name: "space"
        },
        sd = {
            name: "handle"
        },
        fd = {
            name: "center"
        },
        ld = {
            name: "x",
            handles: ["e", "w"].map(we),
            input: function(t, n) {
                return t && [
                    [t[0], n[0][1]],
                    [t[1], n[1][1]]
                ]
            },
            output: function(t) {
                return t && [t[0][0], t[1][0]]
            }
        },
        hd = {
            name: "y",
            handles: ["n", "s"].map(we),
            input: function(t, n) {
                return t && [
                    [n[0][0], t[0]],
                    [n[1][0], t[1]]
                ]
            },
            output: function(t) {
                return t && [t[0][1], t[1][1]]
            }
        },
        pd = {
            name: "xy",
            handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(we),
            input: function(t) {
                return t
            },
            output: function(t) {
                return t
            }
        },
        dd = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        vd = {
            e: "w",
            w: "e",
            nw: "ne",
            ne: "nw",
            se: "sw",
            sw: "se"
        },
        _d = {
            n: "s",
            s: "n",
            nw: "sw",
            ne: "se",
            se: "ne",
            sw: "nw"
        },
        yd = {
            overlay: 1,
            selection: 1,
            n: null,
            e: 1,
            s: null,
            w: -1,
            nw: -1,
            ne: 1,
            se: 1,
            sw: -1
        },
        gd = {
            overlay: 1,
            selection: 1,
            n: -1,
            e: null,
            s: 1,
            w: null,
            nw: -1,
            ne: -1,
            se: 1,
            sw: 1
        },
        md = function() {
            return Ce(pd)
        },
        xd = Math.cos,
        bd = Math.sin,
        wd = Math.PI,
        Md = wd / 2,
        Td = 2 * wd,
        Nd = Math.max,
        kd = function() {
            function t(t) {
                var o, u, a, c, s, f, l = t.length,
                    h = [],
                    p = Is(l),
                    d = [],
                    v = [],
                    _ = v.groups = new Array(l),
                    y = new Array(l * l);
                for (o = 0, s = -1; ++s < l;) {
                    for (u = 0, f = -1; ++f < l;) u += t[s][f];
                    h.push(u), d.push(Is(l)), o += u
                }
                for (e && p.sort(function(t, n) {
                        return e(h[t], h[n])
                    }), r && d.forEach(function(n, e) {
                        n.sort(function(n, i) {
                            return r(t[e][n], t[e][i])
                        })
                    }), o = Nd(0, Td - n * l) / o, c = o ? n : Td / l, u = 0, s = -1; ++s < l;) {
                    for (a = u, f = -1; ++f < l;) {
                        var g = p[s],
                            m = d[g][f],
                            x = t[g][m],
                            b = u,
                            w = u += x * o;
                        y[m * l + g] = {
                            index: g,
                            subindex: m,
                            startAngle: b,
                            endAngle: w,
                            value: x
                        }
                    }
                    _[g] = {
                        index: g,
                        startAngle: a,
                        endAngle: u,
                        value: h[g]
                    }, u += c
                }
                for (s = -1; ++s < l;)
                    for (f = s - 1; ++f < l;) {
                        var M = y[f * l + s],
                            T = y[s * l + f];
                        (M.value || T.value) && v.push(M.value < T.value ? {
                            source: T,
                            target: M
                        } : {
                            source: M,
                            target: T
                        })
                    }
                return i ? v.sort(i) : v
            }
            var n = 0,
                e = null,
                r = null,
                i = null;
            return t.padAngle = function(e) {
                return arguments.length ? (n = Nd(0, e), t) : n
            }, t.sortGroups = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.sortSubgroups = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t.sortChords = function(n) {
                return arguments.length ? (null == n ? i = null : (i = ze(n))._ = n, t) : i && i._
            }, t
        },
        Sd = Array.prototype.slice,
        Ed = function(t) {
            return function() {
                return t
            }
        },
        Ad = Math.PI,
        Cd = 2 * Ad,
        zd = 1e-6,
        Pd = Cd - zd;
    Pe.prototype = Re.prototype = {
        constructor: Pe,
        moveTo: function(t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        },
        lineTo: function(t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        },
        quadraticCurveTo: function(t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        },
        bezierCurveTo: function(t, n, e, r, i, o) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
        },
        arcTo: function(t, n, e, r, i) {
            t = +t, n = +n, e = +e, r = +r, i = +i;
            var o = this._x1,
                u = this._y1,
                a = e - t,
                c = r - n,
                s = o - t,
                f = u - n,
                l = s * s + f * f;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (l > zd)
                if (Math.abs(f * a - c * s) > zd && i) {
                    var h = e - o,
                        p = r - u,
                        d = a * a + c * c,
                        v = h * h + p * p,
                        _ = Math.sqrt(d),
                        y = Math.sqrt(l),
                        g = i * Math.tan((Ad - Math.acos((d + l - v) / (2 * _ * y))) / 2),
                        m = g / y,
                        x = g / _;
                    Math.abs(m - 1) > zd && (this._ += "L" + (t + m * s) + "," + (n + m * f)), this._ += "A" + i + "," + i + ",0,0," + +(f * h > s * p) + "," + (this._x1 = t + x * a) + "," + (this._y1 = n + x * c)
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else;
        },
        arc: function(t, n, e, r, i, o) {
            t = +t, n = +n, e = +e;
            var u = e * Math.cos(r),
                a = e * Math.sin(r),
                c = t + u,
                s = n + a,
                f = 1 ^ o,
                l = o ? r - i : i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + s : (Math.abs(this._x1 - c) > zd || Math.abs(this._y1 - s) > zd) && (this._ += "L" + c + "," + s), e && (l > Pd ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = s) : (l < 0 && (l = l % Cd + Cd), this._ += "A" + e + "," + e + ",0," + +(l >= Ad) + "," + f + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        },
        rect: function(t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
        },
        toString: function() {
            return this._
        }
    };
    var Rd = function() {
            function t() {
                var t, a = Sd.call(arguments),
                    c = n.apply(this, a),
                    s = e.apply(this, a),
                    f = +r.apply(this, (a[0] = c, a)),
                    l = i.apply(this, a) - Md,
                    h = o.apply(this, a) - Md,
                    p = f * xd(l),
                    d = f * bd(l),
                    v = +r.apply(this, (a[0] = s, a)),
                    _ = i.apply(this, a) - Md,
                    y = o.apply(this, a) - Md;
                if (u || (u = t = Re()), u.moveTo(p, d), u.arc(0, 0, f, l, h), l === _ && h === y || (u.quadraticCurveTo(0, 0, v * xd(_), v * bd(_)), u.arc(0, 0, v, _, y)), u.quadraticCurveTo(0, 0, p, d), u.closePath(), t) return u = null, t + "" || null
            }
            var n = qe,
                e = Le,
                r = Ue,
                i = De,
                o = Oe,
                u = null;
            return t.radius = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : Ed(+n), t) : r
            }, t.startAngle = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : Ed(+n), t) : i
            }, t.endAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : Ed(+n), t) : o
            }, t.source = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.target = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.context = function(n) {
                return arguments.length ? (u = null == n ? null : n, t) : u
            }, t
        },
        qd = "$";
    Fe.prototype = Ie.prototype = {
        constructor: Fe,
        has: function(t) {
            return qd + t in this
        },
        get: function(t) {
            return this[qd + t]
        },
        set: function(t, n) {
            return this[qd + t] = n, this
        },
        remove: function(t) {
            var n = qd + t;
            return n in this && delete this[n]
        },
        clear: function() {
            for (var t in this) t[0] === qd && delete this[t]
        },
        keys: function() {
            var t = [];
            for (var n in this) n[0] === qd && t.push(n.slice(1));
            return t
        },
        values: function() {
            var t = [];
            for (var n in this) n[0] === qd && t.push(this[n]);
            return t
        },
        entries: function() {
            var t = [];
            for (var n in this) n[0] === qd && t.push({
                key: n.slice(1),
                value: this[n]
            });
            return t
        },
        size: function() {
            var t = 0;
            for (var n in this) n[0] === qd && ++t;
            return t
        },
        empty: function() {
            for (var t in this)
                if (t[0] === qd) return !1;
            return !0
        },
        each: function(t) {
            for (var n in this) n[0] === qd && t(this[n], n.slice(1), this)
        }
    };
    var Ld = function() {
            function t(n, i, u, a) {
                if (i >= o.length) return null != r ? r(n) : null != e ? n.sort(e) : n;
                for (var c, s, f, l = -1, h = n.length, p = o[i++], d = Ie(), v = u(); ++l < h;)(f = d.get(c = p(s = n[l]) + "")) ? f.push(s) : d.set(c, [s]);
                return d.each(function(n, e) {
                    a(v, e, t(n, i, u, a))
                }), v
            }

            function n(t, e) {
                if (++e > o.length) return t;
                var i, a = u[e - 1];
                return null != r && e >= o.length ? i = t.entries() : (i = [], t.each(function(t, r) {
                    i.push({
                        key: r,
                        values: n(t, e)
                    })
                })), null != a ? i.sort(function(t, n) {
                    return a(t.key, n.key)
                }) : i
            }
            var e, r, i, o = [],
                u = [];
            return i = {
                object: function(n) {
                    return t(n, 0, Ye, Be)
                },
                map: function(n) {
                    return t(n, 0, je, He)
                },
                entries: function(e) {
                    return n(t(e, 0, je, He), 0)
                },
                key: function(t) {
                    return o.push(t), i
                },
                sortKeys: function(t) {
                    return u[o.length - 1] = t, i
                },
                sortValues: function(t) {
                    return e = t, i
                },
                rollup: function(t) {
                    return r = t, i
                }
            }
        },
        Ud = Ie.prototype;
    Xe.prototype = Ve.prototype = {
        constructor: Xe,
        has: Ud.has,
        add: function(t) {
            return t += "", this[qd + t] = t, this
        },
        remove: Ud.remove,
        clear: Ud.clear,
        values: Ud.keys,
        size: Ud.size,
        empty: Ud.empty,
        each: Ud.each
    };
    var Dd = function(t) {
            var n = [];
            for (var e in t) n.push(e);
            return n
        },
        Od = function(t) {
            var n = [];
            for (var e in t) n.push(t[e]);
            return n
        },
        Fd = function(t) {
            var n = [];
            for (var e in t) n.push({
                key: e,
                value: t[e]
            });
            return n
        },
        Id = function(t) {
            function n(t, n) {
                var r, i, o = e(t, function(t, e) {
                    return r ? r(t, e - 1) : (i = t, void(r = n ? $e(t, n) : We(t)))
                });
                return o.columns = i, o
            }

            function e(t, n) {
                function e() {
                    if (f >= s) return u;
                    if (i) return i = !1, o;
                    var n, e = f;
                    if (34 === t.charCodeAt(e)) {
                        for (var r = e; r++ < s;)
                            if (34 === t.charCodeAt(r)) {
                                if (34 !== t.charCodeAt(r + 1)) break;
                                ++r
                            }
                        return f = r + 2, n = t.charCodeAt(r + 1), 13 === n ? (i = !0, 10 === t.charCodeAt(r + 2) && ++f) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"')
                    }
                    for (; f < s;) {
                        var a = 1;
                        if (n = t.charCodeAt(f++), 10 === n) i = !0;
                        else if (13 === n) i = !0, 10 === t.charCodeAt(f) && (++f, ++a);
                        else if (n !== c) continue;
                        return t.slice(e, f - a)
                    }
                    return t.slice(e)
                }
                for (var r, i, o = {}, u = {}, a = [], s = t.length, f = 0, l = 0;
                    (r = e()) !== u;) {
                    for (var h = []; r !== o && r !== u;) h.push(r), r = e();
                    n && null == (h = n(h, l++)) || a.push(h)
                }
                return a
            }

            function r(n, e) {
                return null == e && (e = Ze(n)), [e.map(u).join(t)].concat(n.map(function(n) {
                    return e.map(function(t) {
                        return u(n[t])
                    }).join(t)
                })).join("\n")
            }

            function i(t) {
                return t.map(o).join("\n")
            }

            function o(n) {
                return n.map(u).join(t)
            }

            function u(t) {
                return null == t ? "" : a.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t
            }
            var a = new RegExp('["' + t + "\n]"),
                c = t.charCodeAt(0);
            return {
                parse: n,
                parseRows: e,
                format: r,
                formatRows: i
            }
        },
        Yd = Id(","),
        Bd = Yd.parse,
        jd = Yd.parseRows,
        Hd = Yd.format,
        Xd = Yd.formatRows,
        Vd = Id("\t"),
        Wd = Vd.parse,
        $d = Vd.parseRows,
        Zd = Vd.format,
        Gd = Vd.formatRows,
        Jd = function(t, n) {
            function e() {
                var e, i, o = r.length,
                    u = 0,
                    a = 0;
                for (e = 0; e < o; ++e) i = r[e], u += i.x, a += i.y;
                for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e) i = r[e], i.x -= u, i.y -= a
            }
            var r;
            return null == t && (t = 0), null == n && (n = 0), e.initialize = function(t) {
                r = t
            }, e.x = function(n) {
                return arguments.length ? (t = +n, e) : t
            }, e.y = function(t) {
                return arguments.length ? (n = +t, e) : n
            }, e
        },
        Qd = function(t) {
            return function() {
                return t
            }
        },
        Kd = function() {
            return 1e-6 * (Math.random() - .5)
        },
        tv = function(t) {
            var n = +this._x.call(null, t),
                e = +this._y.call(null, t);
            return Ge(this.cover(n, e), n, e, t)
        },
        nv = function(t, n) {
            if (isNaN(t = +t) || isNaN(n = +n)) return this;
            var e = this._x0,
                r = this._y0,
                i = this._x1,
                o = this._y1;
            if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
            else {
                if (!(e > t || t > i || r > n || n > o)) return this;
                var u, a, c = i - e,
                    s = this._root;
                switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                    case 0:
                        do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, o = r + c, t > i || n > o);
                        break;
                    case 1:
                        do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, o = r + c, e > t || n > o);
                        break;
                    case 2:
                        do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, r = o - c, t > i || r > n);
                        break;
                    case 3:
                        do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, r = o - c, e > t || r > n)
                }
                this._root && this._root.length && (this._root = s)
            }
            return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
        },
        ev = function() {
            var t = [];
            return this.visit(function(n) {
                if (!n.length)
                    do t.push(n.data); while (n = n.next)
            }), t
        },
        rv = function(t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                [this._x0, this._y0],
                [this._x1, this._y1]
            ]
        },
        iv = function(t, n, e, r, i) {
            this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
        },
        ov = function(t, n, e) {
            var r, i, o, u, a, c, s, f = this._x0,
                l = this._y0,
                h = this._x1,
                p = this._y1,
                d = [],
                v = this._root;
            for (v && d.push(new iv(v, f, l, h, p)), null == e ? e = 1 / 0 : (f = t - e, l = n - e, h = t + e, p = n + e, e *= e); c = d.pop();)
                if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > p || (u = c.x1) < f || (a = c.y1) < l))
                    if (v.length) {
                        var _ = (i + u) / 2,
                            y = (o + a) / 2;
                        d.push(new iv(v[3], _, y, u, a), new iv(v[2], i, y, _, a), new iv(v[1], _, o, u, y), new iv(v[0], i, o, _, y)), (s = (n >= y) << 1 | t >= _) && (c = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - s], d[d.length - 1 - s] = c)
                    } else {
                        var g = t - +this._x.call(null, v.data),
                            m = n - +this._y.call(null, v.data),
                            x = g * g + m * m;
                        if (x < e) {
                            var b = Math.sqrt(e = x);
                            f = t - b, l = n - b, h = t + b, p = n + b, r = v.data
                        }
                    }
            return r
        },
        uv = function(t) {
            if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;
            var n, e, r, i, o, u, a, c, s, f, l, h, p = this._root,
                d = this._x0,
                v = this._y0,
                _ = this._x1,
                y = this._y1;
            if (!p) return this;
            if (p.length)
                for (;;) {
                    if ((s = o >= (a = (d + _) / 2)) ? d = a : _ = a, (f = u >= (c = (v + y) / 2)) ? v = c : y = c, n = p, !(p = p[l = f << 1 | s])) return this;
                    if (!p.length) break;
                    (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
                }
            for (; p.data !== t;)
                if (r = p, !(p = p.next)) return this;
            return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this)
        },
        av = function() {
            return this._root
        },
        cv = function() {
            var t = 0;
            return this.visit(function(n) {
                if (!n.length)
                    do ++t; while (n = n.next)
            }), t
        },
        sv = function(t) {
            var n, e, r, i, o, u, a = [],
                c = this._root;
            for (c && a.push(new iv(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
                if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
                    var s = (r + o) / 2,
                        f = (i + u) / 2;
                    (e = c[3]) && a.push(new iv(e, s, f, o, u)), (e = c[2]) && a.push(new iv(e, r, f, s, u)), (e = c[1]) && a.push(new iv(e, s, i, o, f)), (e = c[0]) && a.push(new iv(e, r, i, s, f))
                }
            return this
        },
        fv = function(t) {
            var n, e = [],
                r = [];
            for (this._root && e.push(new iv(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                var i = n.node;
                if (i.length) {
                    var o, u = n.x0,
                        a = n.y0,
                        c = n.x1,
                        s = n.y1,
                        f = (u + c) / 2,
                        l = (a + s) / 2;
                    (o = i[0]) && e.push(new iv(o, u, a, f, l)), (o = i[1]) && e.push(new iv(o, f, a, c, l)), (o = i[2]) && e.push(new iv(o, u, l, f, s)), (o = i[3]) && e.push(new iv(o, f, l, c, s))
                }
                r.push(n)
            }
            for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
            return this
        },
        lv = function(t) {
            return arguments.length ? (this._x = t, this) : this._x
        },
        hv = function(t) {
            return arguments.length ? (this._y = t, this) : this._y
        },
        pv = nr.prototype = er.prototype;
    pv.copy = function() {
        var t, n, e = new er(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = rr(r), e;
        for (t = [{
                source: r,
                target: e._root = new Array(4)
            }]; r = t.pop();)
            for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
                source: n,
                target: r.target[i] = new Array(4)
            }) : r.target[i] = rr(n));
        return e
    }, pv.add = tv, pv.addAll = Je, pv.cover = nv, pv.data = ev, pv.extent = rv, pv.find = ov, pv.remove = uv, pv.removeAll = Qe, pv.root = av, pv.size = cv, pv.visit = sv, pv.visitAfter = fv, pv.x = lv, pv.y = hv;
    var dv, vv = function(t) {
            function n() {
                function t(t, n, e, r, i) {
                    var o = t.data,
                        a = t.r,
                        p = l + a; {
                        if (!o) return n > s + p || r < s - p || e > f + p || i < f - p;
                        if (o.index > c.index) {
                            var d = s - o.x - o.vx,
                                v = f - o.y - o.vy,
                                _ = d * d + v * v;
                            _ < p * p && (0 === d && (d = Kd(), _ += d * d), 0 === v && (v = Kd(), _ += v * v), _ = (p - (_ = Math.sqrt(_))) / _ * u, c.vx += (d *= _) * (p = (a *= a) / (h + a)), c.vy += (v *= _) * p, o.vx -= d * (p = 1 - p), o.vy -= v * p)
                        }
                    }
                }
                for (var n, r, c, s, f, l, h, p = i.length, d = 0; d < a; ++d)
                    for (r = nr(i, ir, or).visitAfter(e), n = 0; n < p; ++n) c = i[n], l = o[c.index], h = l * l, s = c.x + c.vx, f = c.y + c.vy, r.visit(t)
            }

            function e(t) {
                if (t.data) return t.r = o[t.data.index];
                for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
            }

            function r() {
                if (i) {
                    var n, e, r = i.length;
                    for (o = new Array(r), n = 0; n < r; ++n) e = i[n], o[e.index] = +t(e, n, i)
                }
            }
            var i, o, u = 1,
                a = 1;
            return "function" != typeof t && (t = Qd(null == t ? 1 : +t)), n.initialize = function(t) {
                i = t, r()
            }, n.iterations = function(t) {
                return arguments.length ? (a = +t, n) : a
            }, n.strength = function(t) {
                return arguments.length ? (u = +t, n) : u
            }, n.radius = function(e) {
                return arguments.length ? (t = "function" == typeof e ? e : Qd(+e), r(), n) : t
            }, n
        },
        _v = function(t) {
            function n(t) {
                return 1 / Math.min(s[t.source.index], s[t.target.index])
            }

            function e(n) {
                for (var e = 0, r = t.length; e < d; ++e)
                    for (var i, o, c, s, l, h, p, v = 0; v < r; ++v) i = t[v], o = i.source, c = i.target, s = c.x + c.vx - o.x - o.vx || Kd(), l = c.y + c.vy - o.y - o.vy || Kd(), h = Math.sqrt(s * s + l * l), h = (h - a[v]) / h * n * u[v], s *= h, l *= h, c.vx -= s * (p = f[v]), c.vy -= l * p, o.vx += s * (p = 1 - p), o.vy += l * p
            }

            function r() {
                if (c) {
                    var n, e, r = c.length,
                        h = t.length,
                        p = Ie(c, l);
                    for (n = 0, s = new Array(r); n < h; ++n) e = t[n], e.index = n, "object" != typeof e.source && (e.source = ar(p, e.source)), "object" != typeof e.target && (e.target = ar(p, e.target)), s[e.source.index] = (s[e.source.index] || 0) + 1, s[e.target.index] = (s[e.target.index] || 0) + 1;
                    for (n = 0, f = new Array(h); n < h; ++n) e = t[n], f[n] = s[e.source.index] / (s[e.source.index] + s[e.target.index]);
                    u = new Array(h), i(), a = new Array(h), o()
                }
            }

            function i() {
                if (c)
                    for (var n = 0, e = t.length; n < e; ++n) u[n] = +h(t[n], n, t)
            }

            function o() {
                if (c)
                    for (var n = 0, e = t.length; n < e; ++n) a[n] = +p(t[n], n, t)
            }
            var u, a, c, s, f, l = ur,
                h = n,
                p = Qd(30),
                d = 1;
            return null == t && (t = []), e.initialize = function(t) {
                c = t, r()
            }, e.links = function(n) {
                return arguments.length ? (t = n, r(), e) : t
            }, e.id = function(t) {
                return arguments.length ? (l = t, e) : l
            }, e.iterations = function(t) {
                return arguments.length ? (d = +t, e) : d
            }, e.strength = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : Qd(+t), i(), e) : h
            }, e.distance = function(t) {
                return arguments.length ? (p = "function" == typeof t ? t : Qd(+t), o(), e) : p
            }, e
        },
        yv = 10,
        gv = Math.PI * (3 - Math.sqrt(5)),
        mv = function(t) {
            function n() {
                e(), d.call("tick", o), u < a && (h.stop(), d.call("end", o))
            }

            function e() {
                var n, e, r = t.length;
                for (u += (s - u) * c, l.each(function(t) {
                        t(u)
                    }), n = 0; n < r; ++n) e = t[n], null == e.fx ? e.x += e.vx *= f : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= f : (e.y = e.fy, e.vy = 0)
            }

            function r() {
                for (var n, e = 0, r = t.length; e < r; ++e) {
                    if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
                        var i = yv * Math.sqrt(e),
                            o = e * gv;
                        n.x = i * Math.cos(o), n.y = i * Math.sin(o)
                    }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                }
            }

            function i(n) {
                return n.initialize && n.initialize(t), n
            }
            var o, u = 1,
                a = .001,
                c = 1 - Math.pow(a, 1 / 300),
                s = 0,
                f = .6,
                l = Ie(),
                h = _n(n),
                d = p("tick", "end");
            return null == t && (t = []), r(), o = {
                tick: e,
                restart: function() {
                    return h.restart(n), o
                },
                stop: function() {
                    return h.stop(), o
                },
                nodes: function(n) {
                    return arguments.length ? (t = n, r(), l.each(i), o) : t
                },
                alpha: function(t) {
                    return arguments.length ? (u = +t, o) : u
                },
                alphaMin: function(t) {
                    return arguments.length ? (a = +t, o) : a
                },
                alphaDecay: function(t) {
                    return arguments.length ? (c = +t, o) : +c
                },
                alphaTarget: function(t) {
                    return arguments.length ? (s = +t, o) : s
                },
                velocityDecay: function(t) {
                    return arguments.length ? (f = 1 - t, o) : 1 - f
                },
                force: function(t, n) {
                    return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)), o) : l.get(t)
                },
                find: function(n, e, r) {
                    var i, o, u, a, c, s = 0,
                        f = t.length;
                    for (null == r ? r = 1 / 0 : r *= r, s = 0; s < f; ++s) a = t[s], i = n - a.x, o = e - a.y, u = i * i + o * o, u < r && (c = a, r = u);
                    return c
                },
                on: function(t, n) {
                    return arguments.length > 1 ? (d.on(t, n), o) : d.on(t)
                }
            }
        },
        xv = function() {
            function t(t) {
                var n, a = i.length,
                    c = nr(i, cr, sr).visitAfter(e);
                for (u = t, n = 0; n < a; ++n) o = i[n], c.visit(r)
            }

            function n() {
                if (i) {
                    var t, n, e = i.length;
                    for (a = new Array(e), t = 0; t < e; ++t) n = i[t], a[n.index] = +c(n, t, i)
                }
            }

            function e(t) {
                var n, e, r, i, o, u = 0;
                if (t.length) {
                    for (r = i = o = 0; o < 4; ++o)(n = t[o]) && (e = n.value) && (u += e, r += e * n.x, i += e * n.y);
                    t.x = r / u, t.y = i / u
                } else {
                    n = t, n.x = n.data.x, n.y = n.data.y;
                    do u += a[n.data.index]; while (n = n.next)
                }
                t.value = u
            }

            function r(t, n, e, r) {
                if (!t.value) return !0;
                var i = t.x - o.x,
                    c = t.y - o.y,
                    h = r - n,
                    p = i * i + c * c;
                if (h * h / l < p) return p < f && (0 === i && (i = Kd(), p += i * i), 0 === c && (c = Kd(), p += c * c), p < s && (p = Math.sqrt(s * p)), o.vx += i * t.value * u / p, o.vy += c * t.value * u / p), !0;
                if (!(t.length || p >= f)) {
                    (t.data !== o || t.next) && (0 === i && (i = Kd(), p += i * i), 0 === c && (c = Kd(), p += c * c), p < s && (p = Math.sqrt(s * p)));
                    do t.data !== o && (h = a[t.data.index] * u / p, o.vx += i * h, o.vy += c * h); while (t = t.next)
                }
            }
            var i, o, u, a, c = Qd(-30),
                s = 1,
                f = 1 / 0,
                l = .81;
            return t.initialize = function(t) {
                i = t, n()
            }, t.strength = function(e) {
                return arguments.length ? (c = "function" == typeof e ? e : Qd(+e), n(), t) : c
            }, t.distanceMin = function(n) {
                return arguments.length ? (s = n * n, t) : Math.sqrt(s)
            }, t.distanceMax = function(n) {
                return arguments.length ? (f = n * n, t) : Math.sqrt(f)
            }, t.theta = function(n) {
                return arguments.length ? (l = n * n, t) : Math.sqrt(l)
            }, t
        },
        bv = function(t) {
            function n(t) {
                for (var n, e = 0, u = r.length; e < u; ++e) n = r[e], n.vx += (o[e] - n.x) * i[e] * t
            }

            function e() {
                if (r) {
                    var n, e = r.length;
                    for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
                }
            }
            var r, i, o, u = Qd(.1);
            return "function" != typeof t && (t = Qd(null == t ? 0 : +t)), n.initialize = function(t) {
                r = t, e()
            }, n.strength = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : Qd(+t), e(), n) : u
            }, n.x = function(r) {
                return arguments.length ? (t = "function" == typeof r ? r : Qd(+r), e(), n) : t
            }, n
        },
        wv = function(t) {
            function n(t) {
                for (var n, e = 0, u = r.length; e < u; ++e) n = r[e], n.vy += (o[e] - n.y) * i[e] * t
            }

            function e() {
                if (r) {
                    var n, e = r.length;
                    for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
                }
            }
            var r, i, o, u = Qd(.1);
            return "function" != typeof t && (t = Qd(null == t ? 0 : +t)), n.initialize = function(t) {
                r = t, e()
            }, n.strength = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : Qd(+t), e(), n) : u
            }, n.y = function(r) {
                return arguments.length ? (t = "function" == typeof r ? r : Qd(+r), e(), n) : t
            }, n
        },
        Mv = function(t, n) {
            if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
            var e, r = t.slice(0, e);
            return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
        },
        Tv = function(t) {
            return t = Mv(Math.abs(t)), t ? t[1] : NaN
        },
        Nv = function(t, n) {
            return function(e, r) {
                for (var i = e.length, o = [], u = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));) a = t[u = (u + 1) % t.length];
                return o.reverse().join(n)
            }
        },
        kv = function(t, n) {
            t = t.toPrecision(n);
            t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i) switch (t[i]) {
                case ".":
                    o = e = i;
                    break;
                case "0":
                    0 === o && (o = i), e = i;
                    break;
                case "e":
                    break t;
                default:
                    o > 0 && (o = 0)
            }
            return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
        },
        Sv = function(t, n) {
            var e = Mv(t, n);
            if (!e) return t + "";
            var r = e[0],
                i = e[1],
                o = i - (dv = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                u = r.length;
            return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Mv(t, Math.max(0, n + o - 1))[0]
        },
        Ev = function(t, n) {
            var e = Mv(t, n);
            if (!e) return t + "";
            var r = e[0],
                i = e[1];
            return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
        },
        Av = {
            "": kv,
            "%": function(t, n) {
                return (100 * t).toFixed(n)
            },
            b: function(t) {
                return Math.round(t).toString(2)
            },
            c: function(t) {
                return t + ""
            },
            d: function(t) {
                return Math.round(t).toString(10)
            },
            e: function(t, n) {
                return t.toExponential(n)
            },
            f: function(t, n) {
                return t.toFixed(n)
            },
            g: function(t, n) {
                return t.toPrecision(n)
            },
            o: function(t) {
                return Math.round(t).toString(8)
            },
            p: function(t, n) {
                return Ev(100 * t, n)
            },
            r: Ev,
            s: Sv,
            X: function(t) {
                return Math.round(t).toString(16).toUpperCase()
            },
            x: function(t) {
                return Math.round(t).toString(16)
            }
        },
        Cv = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i,
        zv = function(t) {
            return new fr(t)
        };
    fr.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var Pv, Rv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
        qv = function(t) {
            function n(t) {
                function n(t) {
                    var n, i, c, g = d,
                        m = v;
                    if ("c" === p) m = _(t) + m, t = "";
                    else {
                        t = +t;
                        var x = (t < 0 || 1 / t < 0) && (t *= -1, !0);
                        if (t = _(t, h), x)
                            for (n = -1, i = t.length, x = !1; ++n < i;)
                                if (c = t.charCodeAt(n), 48 < c && c < 58 || "x" === p && 96 < c && c < 103 || "X" === p && 64 < c && c < 71) {
                                    x = !0;
                                    break
                                }
                        if (g = (x ? "(" === a ? a : "-" : "-" === a || "(" === a ? "" : a) + g, m = m + ("s" === p ? Rv[8 + dv / 3] : "") + (x && "(" === a ? ")" : ""), y)
                            for (n = -1, i = t.length; ++n < i;)
                                if (c = t.charCodeAt(n), 48 > c || c > 57) {
                                    m = (46 === c ? o + t.slice(n + 1) : t.slice(n)) + m, t = t.slice(0, n);
                                    break
                                }
                    }
                    l && !s && (t = r(t, 1 / 0));
                    var b = g.length + t.length + m.length,
                        w = b < f ? new Array(f - b + 1).join(e) : "";
                    switch (l && s && (t = r(w + t, w.length ? f - m.length : 1 / 0), w = ""), u) {
                        case "<":
                            return g + t + m + w;
                        case "=":
                            return g + w + t + m;
                        case "^":
                            return w.slice(0, b = w.length >> 1) + g + t + m + w.slice(b)
                    }
                    return w + g + t + m
                }
                t = zv(t);
                var e = t.fill,
                    u = t.align,
                    a = t.sign,
                    c = t.symbol,
                    s = t.zero,
                    f = t.width,
                    l = t.comma,
                    h = t.precision,
                    p = t.type,
                    d = "$" === c ? i[0] : "#" === c && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
                    v = "$" === c ? i[1] : /[%p]/.test(p) ? "%" : "",
                    _ = Av[p],
                    y = !p || /[defgprs%]/.test(p);
                return h = null == h ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h)), n.toString = function() {
                    return t + ""
                }, n
            }

            function e(t, e) {
                var r = n((t = zv(t), t.type = "f", t)),
                    i = 3 * Math.max(-8, Math.min(8, Math.floor(Tv(e) / 3))),
                    o = Math.pow(10, -i),
                    u = Rv[8 + i / 3];
                return function(t) {
                    return r(o * t) + u
                }
            }
            var r = t.grouping && t.thousands ? Nv(t.grouping, t.thousands) : lr,
                i = t.currency,
                o = t.decimal;
            return {
                format: n,
                formatPrefix: e
            }
        };
    hr({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var Lv = function(t) {
            return Math.max(0, -Tv(Math.abs(t)))
        },
        Uv = function(t, n) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Tv(n) / 3))) - Tv(Math.abs(t)))
        },
        Dv = function(t, n) {
            return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Tv(n) - Tv(t)) + 1
        },
        Ov = function() {
            return new pr
        };
    pr.prototype = {
        constructor: pr,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(t) {
            dr(__, t, this.t), dr(this, __.s, this.s), this.s ? this.t += __.t : this.s = __.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var Fv, Iv, Yv, Bv, jv, Hv, Xv, Vv, Wv, $v, Zv, Gv, Jv, Qv, Kv, t_, n_, e_, r_, i_, o_, u_, a_, c_, s_, f_, l_, h_, p_, d_, v_, __ = new pr,
        y_ = 1e-6,
        g_ = 1e-12,
        m_ = Math.PI,
        x_ = m_ / 2,
        b_ = m_ / 4,
        w_ = 2 * m_,
        M_ = 180 / m_,
        T_ = m_ / 180,
        N_ = Math.abs,
        k_ = Math.atan,
        S_ = Math.atan2,
        E_ = Math.cos,
        A_ = Math.ceil,
        C_ = Math.exp,
        z_ = Math.log,
        P_ = Math.pow,
        R_ = Math.sin,
        q_ = Math.sign || function(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        },
        L_ = Math.sqrt,
        U_ = Math.tan,
        D_ = {
            Feature: function(t, n) {
                mr(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;) mr(e[r].geometry, n)
            }
        },
        O_ = {
            Sphere: function(t, n) {
                n.sphere()
            },
            Point: function(t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
            },
            LineString: function(t, n) {
                xr(t.coordinates, n, 0)
            },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) xr(e[r], n, 0)
            },
            Polygon: function(t, n) {
                br(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) br(e[r], n)
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;) mr(e[r], n)
            }
        },
        F_ = function(t, n) {
            t && D_.hasOwnProperty(t.type) ? D_[t.type](t, n) : mr(t, n)
        },
        I_ = Ov(),
        Y_ = Ov(),
        B_ = {
            point: gr,
            lineStart: gr,
            lineEnd: gr,
            polygonStart: function() {
                I_.reset(), B_.lineStart = wr, B_.lineEnd = Mr
            },
            polygonEnd: function() {
                var t = +I_;
                Y_.add(t < 0 ? w_ + t : t), this.lineStart = this.lineEnd = this.point = gr
            },
            sphere: function() {
                Y_.add(w_)
            }
        },
        j_ = function(t) {
            return Y_.reset(), F_(t, B_), 2 * Y_
        },
        H_ = Ov(),
        X_ = {
            point: Rr,
            lineStart: Lr,
            lineEnd: Ur,
            polygonStart: function() {
                X_.point = Dr, X_.lineStart = Or, X_.lineEnd = Fr, H_.reset(), B_.polygonStart()
            },
            polygonEnd: function() {
                B_.polygonEnd(), X_.point = Rr, X_.lineStart = Lr, X_.lineEnd = Ur, I_ < 0 ? (Hv = -(Vv = 180), Xv = -(Wv = 90)) : H_ > y_ ? Wv = 90 : H_ < -y_ && (Xv = -90), Kv[0] = Hv, Kv[1] = Vv
            }
        },
        V_ = function(t) {
            var n, e, r, i, o, u, a;
            if (Wv = Vv = -(Hv = Xv = 1 / 0), Qv = [], F_(t, X_), e = Qv.length) {
                for (Qv.sort(Yr), n = 1, r = Qv[0], o = [r]; n < e; ++n) i = Qv[n], Br(r, i[0]) || Br(r, i[1]) ? (Ir(r[0], i[1]) > Ir(r[0], r[1]) && (r[1] = i[1]), Ir(i[0], r[1]) > Ir(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                for (u = -(1 / 0), e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n) i = o[n], (a = Ir(r[1], i[0])) > u && (u = a, Hv = i[0], Vv = r[1])
            }
            return Qv = Kv = null, Hv === 1 / 0 || Xv === 1 / 0 ? [
                [NaN, NaN],
                [NaN, NaN]
            ] : [
                [Hv, Xv],
                [Vv, Wv]
            ]
        },
        W_ = {
            sphere: gr,
            point: jr,
            lineStart: Xr,
            lineEnd: $r,
            polygonStart: function() {
                W_.lineStart = Zr, W_.lineEnd = Gr
            },
            polygonEnd: function() {
                W_.lineStart = Xr, W_.lineEnd = $r
            }
        },
        $_ = function(t) {
            t_ = n_ = e_ = r_ = i_ = o_ = u_ = a_ = c_ = s_ = f_ = 0, F_(t, W_);
            var n = c_,
                e = s_,
                r = f_,
                i = n * n + e * e + r * r;
            return i < g_ && (n = o_, e = u_, r = a_, n_ < y_ && (n = e_, e = r_, r = i_), i = n * n + e * e + r * r, i < g_) ? [NaN, NaN] : [S_(e, n) * M_, _r(r / L_(i)) * M_]
        },
        Z_ = function(t) {
            return function() {
                return t
            }
        },
        G_ = function(t, n) {
            function e(e, r) {
                return e = t(e, r), n(e[0], e[1])
            }
            return t.invert && n.invert && (e.invert = function(e, r) {
                return e = n.invert(e, r), e && t.invert(e[0], e[1])
            }), e
        };
    Kr.invert = Kr;
    var J_, Q_, K_, ty, ny, ey, ry, iy, oy, uy, ay, cy = function(t) {
            function n(n) {
                return n = t(n[0] * T_, n[1] * T_), n[0] *= M_, n[1] *= M_, n
            }
            return t = ti(t[0] * T_, t[1] * T_, t.length > 2 ? t[2] * T_ : 0), n.invert = function(n) {
                return n = t.invert(n[0] * T_, n[1] * T_), n[0] *= M_, n[1] *= M_, n
            }, n
        },
        sy = function() {
            function t(t, n) {
                e.push(t = r(t, n)), t[0] *= M_, t[1] *= M_
            }

            function n() {
                var t = i.apply(this, arguments),
                    n = o.apply(this, arguments) * T_,
                    c = u.apply(this, arguments) * T_;
                return e = [], r = ti(-t[0] * T_, -t[1] * T_, 0).invert, ii(a, n, c, 1), t = {
                    type: "Polygon",
                    coordinates: [e]
                }, e = r = null, t
            }
            var e, r, i = Z_([0, 0]),
                o = Z_(90),
                u = Z_(6),
                a = {
                    point: t
                };
            return n.center = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : Z_([+t[0], +t[1]]), n) : i
            }, n.radius = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : Z_(+t), n) : o
            }, n.precision = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : Z_(+t), n) : u
            }, n
        },
        fy = function() {
            var t, n = [];
            return {
                point: function(n, e) {
                    t.push([n, e])
                },
                lineStart: function() {
                    n.push(t = [])
                },
                lineEnd: gr,
                rejoin: function() {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                },
                result: function() {
                    var e = n;
                    return n = [], t = null, e
                }
            }
        },
        ly = function(t, n, e, r, i, o) {
            var u, a = t[0],
                c = t[1],
                s = n[0],
                f = n[1],
                l = 0,
                h = 1,
                p = s - a,
                d = f - c;
            if (u = e - a, p || !(u > 0)) {
                if (u /= p, p < 0) {
                    if (u < l) return;
                    u < h && (h = u)
                } else if (p > 0) {
                    if (u > h) return;
                    u > l && (l = u)
                }
                if (u = i - a, p || !(u < 0)) {
                    if (u /= p, p < 0) {
                        if (u > h) return;
                        u > l && (l = u)
                    } else if (p > 0) {
                        if (u < l) return;
                        u < h && (h = u)
                    }
                    if (u = r - c, d || !(u > 0)) {
                        if (u /= d, d < 0) {
                            if (u < l) return;
                            u < h && (h = u)
                        } else if (d > 0) {
                            if (u > h) return;
                            u > l && (l = u)
                        }
                        if (u = o - c, d || !(u < 0)) {
                            if (u /= d, d < 0) {
                                if (u > h) return;
                                u > l && (l = u)
                            } else if (d > 0) {
                                if (u < l) return;
                                u < h && (h = u)
                            }
                            return l > 0 && (t[0] = a + l * p, t[1] = c + l * d), h < 1 && (n[0] = a + h * p, n[1] = c + h * d), !0
                        }
                    }
                }
            }
        },
        hy = function(t, n) {
            return N_(t[0] - n[0]) < y_ && N_(t[1] - n[1]) < y_
        },
        py = function(t, n, e, r, i) {
            var o, u, a = [],
                c = [];
            if (t.forEach(function(t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e, r = t[0],
                            u = t[n];
                        if (hy(r, u)) {
                            for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                            return void i.lineEnd()
                        }
                        a.push(e = new ui(r, t, null, !0)), c.push(e.o = new ui(r, null, e, !1)), a.push(e = new ui(u, t, null, !1)), c.push(e.o = new ui(u, null, e, !0))
                    }
                }), a.length) {
                for (c.sort(n), ai(a), ai(c), o = 0, u = c.length; o < u; ++o) c[o].e = e = !e;
                for (var s, f, l = a[0];;) {
                    for (var h = l, p = !0; h.v;)
                        if ((h = h.n) === l) return;
                    s = h.z, i.lineStart();
                    do {
                        if (h.v = h.o.v = !0, h.e) {
                            if (p)
                                for (o = 0, u = s.length; o < u; ++o) i.point((f = s[o])[0], f[1]);
                            else r(h.x, h.n.x, 1, i);
                            h = h.n
                        } else {
                            if (p)
                                for (s = h.p.z, o = s.length - 1; o >= 0; --o) i.point((f = s[o])[0], f[1]);
                            else r(h.x, h.p.x, -1, i);
                            h = h.p
                        }
                        h = h.o, s = h.z, p = !p
                    } while (!h.v);
                    i.lineEnd()
                }
            }
        },
        dy = 1e9,
        vy = -dy,
        _y = function() {
            var t, n, e, r = 0,
                i = 0,
                o = 960,
                u = 500;
            return e = {
                stream: function(e) {
                    return t && n === e ? t : t = ci(r, i, o, u)(n = e)
                },
                extent: function(a) {
                    return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [
                        [r, i],
                        [o, u]
                    ]
                }
            }
        },
        yy = Ov(),
        gy = {
            sphere: gr,
            point: gr,
            lineStart: si,
            lineEnd: gr,
            polygonStart: gr,
            polygonEnd: gr
        },
        my = function(t) {
            return yy.reset(), F_(t, gy), +yy
        },
        xy = [null, null],
        by = {
            type: "LineString",
            coordinates: xy
        },
        wy = function(t, n) {
            return xy[0] = t, xy[1] = n, my(by)
        },
        My = function(t, n) {
            var e = t[0] * T_,
                r = t[1] * T_,
                i = n[0] * T_,
                o = n[1] * T_,
                u = E_(r),
                a = R_(r),
                c = E_(o),
                s = R_(o),
                f = u * E_(e),
                l = u * R_(e),
                h = c * E_(i),
                p = c * R_(i),
                d = 2 * _r(L_(yr(o - r) + u * c * yr(i - e))),
                v = R_(d),
                _ = d ? function(t) {
                    var n = R_(t *= d) / v,
                        e = R_(d - t) / v,
                        r = e * f + n * h,
                        i = e * l + n * p,
                        o = e * a + n * s;
                    return [S_(i, r) * M_, S_(o, L_(r * r + i * i)) * M_]
                } : function() {
                    return [e * M_, r * M_]
                };
            return _.distance = d, _
        },
        Ty = function(t) {
            return t
        },
        Ny = Ov(),
        ky = Ov(),
        Sy = {
            point: gr,
            lineStart: gr,
            lineEnd: gr,
            polygonStart: function() {
                Sy.lineStart = yi, Sy.lineEnd = xi
            },
            polygonEnd: function() {
                Sy.lineStart = Sy.lineEnd = Sy.point = gr, Ny.add(N_(ky)), ky.reset()
            },
            result: function() {
                var t = Ny / 2;
                return Ny.reset(), t
            }
        },
        Ey = 1 / 0,
        Ay = Ey,
        Cy = -Ey,
        zy = Cy,
        Py = {
            point: bi,
            lineStart: gr,
            lineEnd: gr,
            polygonStart: gr,
            polygonEnd: gr,
            result: function() {
                var t = [
                    [Ey, Ay],
                    [Cy, zy]
                ];
                return Cy = zy = -(Ay = Ey = 1 / 0), t
            }
        },
        Ry = 0,
        qy = 0,
        Ly = 0,
        Uy = 0,
        Dy = 0,
        Oy = 0,
        Fy = 0,
        Iy = 0,
        Yy = 0,
        By = {
            point: wi,
            lineStart: Mi,
            lineEnd: ki,
            polygonStart: function() {
                By.lineStart = Si, By.lineEnd = Ei
            },
            polygonEnd: function() {
                By.point = wi, By.lineStart = Mi, By.lineEnd = ki
            },
            result: function() {
                var t = Yy ? [Fy / Yy, Iy / Yy] : Oy ? [Uy / Oy, Dy / Oy] : Ly ? [Ry / Ly, qy / Ly] : [NaN, NaN];
                return Ry = qy = Ly = Uy = Dy = Oy = Fy = Iy = Yy = 0, t
            }
        };
    zi.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
            return this._radius = t, this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(), this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, w_)
            }
        },
        result: gr
    }, Pi.prototype = {
        _circle: Ri(4.5),
        pointRadius: function(t) {
            return this._circle = Ri(t), this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._string.push("Z"), this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    this._string.push("M", t, ",", n, this._circle)
            }
        },
        result: function() {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [], t
            }
        }
    };
    var jy = function(t, n) {
            function e(t) {
                return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), F_(t, r(i))), i.result()
            }
            var r, i, o = 4.5;
            return e.area = function(t) {
                return F_(t, r(Sy)), Sy.result()
            }, e.bounds = function(t) {
                return F_(t, r(Py)), Py.result()
            }, e.centroid = function(t) {
                return F_(t, r(By)), By.result()
            }, e.projection = function(n) {
                return arguments.length ? (r = null == n ? (t = null, Ty) : (t = n).stream, e) : t
            }, e.context = function(t) {
                return arguments.length ? (i = null == t ? (n = null, new Pi) : new zi(n = t), "function" != typeof o && i.pointRadius(o), e) : n
            }, e.pointRadius = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), e) : o
            }, e.projection(t).context(n)
        },
        Hy = Ov(),
        Xy = function(t, n) {
            var e = n[0],
                r = n[1],
                i = [R_(e), -E_(e), 0],
                o = 0,
                u = 0;
            Hy.reset();
            for (var a = 0, c = t.length; a < c; ++a)
                if (f = (s = t[a]).length)
                    for (var s, f, l = s[f - 1], h = l[0], p = l[1] / 2 + b_, d = R_(p), v = E_(p), _ = 0; _ < f; ++_, h = g, d = x, v = b, l = y) {
                        var y = s[_],
                            g = y[0],
                            m = y[1] / 2 + b_,
                            x = R_(m),
                            b = E_(m),
                            w = g - h,
                            M = w >= 0 ? 1 : -1,
                            T = M * w,
                            N = T > m_,
                            k = d * x;
                        if (Hy.add(S_(k * M * R_(T), v * b + k * E_(T))), o += N ? w + M * w_ : w, N ^ h >= e ^ g >= e) {
                            var S = Ar(Sr(l), Sr(y));
                            Pr(S);
                            var E = Ar(i, S);
                            Pr(E);
                            var A = (N ^ w >= 0 ? -1 : 1) * _r(E[2]);
                            (r > A || r === A && (S[0] || S[1])) && (u += N ^ w >= 0 ? 1 : -1)
                        }
                    }
            return (o < -y_ || o < y_ && Hy < -y_) ^ 1 & u
        },
        Vy = function(t, n, e, r) {
            return function(i, o) {
                function u(n, e) {
                    var r = i(n, e);
                    t(n = r[0], e = r[1]) && o.point(n, e)
                }

                function a(t, n) {
                    var e = i(t, n);
                    _.point(e[0], e[1])
                }

                function c() {
                    b.point = a, _.lineStart()
                }

                function s() {
                    b.point = u, _.lineEnd()
                }

                function f(t, n) {
                    v.push([t, n]);
                    var e = i(t, n);
                    m.point(e[0], e[1])
                }

                function l() {
                    m.lineStart(), v = []
                }

                function h() {
                    f(v[0][0], v[0][1]), m.lineEnd();
                    var t, n, e, r, i = m.clean(),
                        u = g.result(),
                        a = u.length;
                    if (v.pop(), p.push(v), v = null, a)
                        if (1 & i) {
                            if (e = u[0], (n = e.length - 1) > 0) {
                                for (x || (o.polygonStart(), x = !0), o.lineStart(), t = 0; t < n; ++t) o.point((r = e[t])[0], r[1]);
                                o.lineEnd()
                            }
                        } else a > 1 && 2 & i && u.push(u.pop().concat(u.shift())), d.push(u.filter(qi))
                }
                var p, d, v, _ = n(o),
                    y = i.invert(r[0], r[1]),
                    g = fy(),
                    m = n(g),
                    x = !1,
                    b = {
                        point: u,
                        lineStart: c,
                        lineEnd: s,
                        polygonStart: function() {
                            b.point = f, b.lineStart = l, b.lineEnd = h, d = [], p = []
                        },
                        polygonEnd: function() {
                            b.point = u, b.lineStart = c, b.lineEnd = s, d = Ks(d);
                            var t = Xy(p, y);
                            d.length ? (x || (o.polygonStart(), x = !0), py(d, Li, t, e, o)) : t && (x || (o.polygonStart(), x = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), x && (o.polygonEnd(), x = !1), d = p = null
                        },
                        sphere: function() {
                            o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                        }
                    };
                return b
            }
        },
        Wy = Vy(function() {
            return !0
        }, Ui, Oi, [-m_, -x_]),
        $y = function(t, n) {
            function e(e, r, i, o) {
                ii(o, t, n, i, e, r)
            }

            function r(t, n) {
                return E_(t) * E_(n) > a
            }

            function i(t) {
                var n, e, i, a, f;
                return {
                    lineStart: function() {
                        a = i = !1, f = 1
                    },
                    point: function(l, h) {
                        var p, d = [l, h],
                            v = r(l, h),
                            _ = c ? v ? 0 : u(l, h) : v ? u(l + (l < 0 ? m_ : -m_), h) : 0;
                        if (!n && (a = i = v) && t.lineStart(), v !== i && (p = o(n, d), (hy(n, p) || hy(d, p)) && (d[0] += y_, d[1] += y_, v = r(d[0], d[1]))), v !== i) f = 0, v ? (t.lineStart(), p = o(d, n), t.point(p[0], p[1])) : (p = o(n, d), t.point(p[0], p[1]), t.lineEnd()), n = p;
                        else if (s && n && c ^ v) {
                            var y;
                            _ & e || !(y = o(d, n, !0)) || (f = 0, c ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                        }!v || n && hy(n, d) || t.point(d[0], d[1]), n = d, i = v, e = _
                    },
                    lineEnd: function() {
                        i && t.lineEnd(), n = null
                    },
                    clean: function() {
                        return f | (a && i) << 1
                    }
                }
            }

            function o(t, n, e) {
                var r = Sr(t),
                    i = Sr(n),
                    o = [1, 0, 0],
                    u = Ar(r, i),
                    c = Er(u, u),
                    s = u[0],
                    f = c - s * s;
                if (!f) return !e && t;
                var l = a * c / f,
                    h = -a * s / f,
                    p = Ar(o, u),
                    d = zr(o, l),
                    v = zr(u, h);
                Cr(d, v);
                var _ = p,
                    y = Er(d, _),
                    g = Er(_, _),
                    m = y * y - g * (Er(d, d) - 1);
                if (!(m < 0)) {
                    var x = L_(m),
                        b = zr(_, (-y - x) / g);
                    if (Cr(b, d), b = kr(b), !e) return b;
                    var w, M = t[0],
                        T = n[0],
                        N = t[1],
                        k = n[1];
                    T < M && (w = M, M = T, T = w);
                    var S = T - M,
                        E = N_(S - m_) < y_,
                        A = E || S < y_;
                    if (!E && k < N && (w = N, N = k, k = w), A ? E ? N + k > 0 ^ b[1] < (N_(b[0] - M) < y_ ? N : k) : N <= b[1] && b[1] <= k : S > m_ ^ (M <= b[0] && b[0] <= T)) {
                        var C = zr(_, (-y + x) / g);
                        return Cr(C, d), [b, kr(C)]
                    }
                }
            }

            function u(n, e) {
                var r = c ? t : m_ - t,
                    i = 0;
                return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
            }
            var a = E_(t),
                c = a > 0,
                s = N_(a) > y_;
            return Vy(r, i, e, c ? [0, -t] : [-m_, t - m_])
        },
        Zy = function(t) {
            return {
                stream: Fi(t)
            }
        };
    Ii.prototype = {
        constructor: Ii,
        point: function(t, n) {
            this.stream.point(t, n)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    var Gy = 16,
        Jy = E_(30 * T_),
        Qy = function(t, n) {
            return +n ? Hi(t, n) : ji(t)
        },
        Ky = Fi({
            point: function(t, n) {
                this.stream.point(t * T_, n * T_)
            }
        }),
        tg = function() {
            return Wi(Zi).scale(155.424).center([0, 33.6442])
        },
        ng = function() {
            return tg().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
        },
        eg = function() {
            function t(t) {
                var n = t[0],
                    e = t[1];
                return a = null, i.point(n, e), a || (o.point(n, e), a) || (u.point(n, e), a)
            }

            function n() {
                return e = r = null, t
            }
            var e, r, i, o, u, a, c = ng(),
                s = tg().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                f = tg().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                l = {
                    point: function(t, n) {
                        a = [t, n]
                    }
                };
            return t.invert = function(t) {
                var n = c.scale(),
                    e = c.translate(),
                    r = (t[0] - e[0]) / n,
                    i = (t[1] - e[1]) / n;
                return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? s : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? f : c).invert(t)
            }, t.stream = function(t) {
                return e && r === t ? e : e = Gi([c.stream(r = t), s.stream(t), f.stream(t)])
            }, t.precision = function(t) {
                return arguments.length ? (c.precision(t), s.precision(t), f.precision(t), n()) : c.precision()
            }, t.scale = function(n) {
                return arguments.length ? (c.scale(n), s.scale(.35 * n), f.scale(n), t.translate(c.translate())) : c.scale()
            }, t.translate = function(t) {
                if (!arguments.length) return c.translate();
                var e = c.scale(),
                    r = +t[0],
                    a = +t[1];
                return i = c.translate(t).clipExtent([
                    [r - .455 * e, a - .238 * e],
                    [r + .455 * e, a + .238 * e]
                ]).stream(l), o = s.translate([r - .307 * e, a + .201 * e]).clipExtent([
                    [r - .425 * e + y_, a + .12 * e + y_],
                    [r - .214 * e - y_, a + .234 * e - y_]
                ]).stream(l), u = f.translate([r - .205 * e, a + .212 * e]).clipExtent([
                    [r - .214 * e + y_, a + .166 * e + y_],
                    [r - .115 * e - y_, a + .234 * e - y_]
                ]).stream(l), n()
            }, t.fitExtent = function(n, e) {
                return Yi(t, n, e)
            }, t.fitSize = function(n, e) {
                return Bi(t, n, e)
            }, t.scale(1070)
        },
        rg = Ji(function(t) {
            return L_(2 / (1 + t))
        });
    rg.invert = Qi(function(t) {
        return 2 * _r(t / 2)
    });
    var ig = function() {
            return Xi(rg).scale(124.75).clipAngle(179.999)
        },
        og = Ji(function(t) {
            return (t = vr(t)) && t / R_(t)
        });
    og.invert = Qi(function(t) {
        return t
    });
    var ug = function() {
        return Xi(og).scale(79.4188).clipAngle(179.999)
    };
    Ki.invert = function(t, n) {
        return [t, 2 * k_(C_(n)) - x_]
    };
    var ag = function() {
            return to(Ki).scale(961 / w_)
        },
        cg = function() {
            return Wi(eo).scale(109.5).parallels([30, 30])
        };
    ro.invert = ro;
    var sg = function() {
            return Xi(ro).scale(152.63)
        },
        fg = function() {
            return Wi(io).scale(131.154).center([0, 13.9389])
        };
    oo.invert = Qi(k_);
    var lg = function() {
            return Xi(oo).scale(144.049).clipAngle(60)
        },
        hg = function() {
            function t() {
                return i = o = null, u
            }
            var n, e, r, i, o, u, a = 1,
                c = 0,
                s = 0,
                f = 1,
                l = 1,
                h = Ty,
                p = null,
                d = Ty;
            return u = {
                stream: function(t) {
                    return i && o === t ? i : i = h(d(o = t))
                },
                clipExtent: function(i) {
                    return arguments.length ? (d = null == i ? (p = n = e = r = null, Ty) : ci(p = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == p ? null : [
                        [p, n],
                        [e, r]
                    ]
                },
                scale: function(n) {
                    return arguments.length ? (h = uo((a = +n) * f, a * l, c, s), t()) : a
                },
                translate: function(n) {
                    return arguments.length ? (h = uo(a * f, a * l, c = +n[0], s = +n[1]), t()) : [c, s]
                },
                reflectX: function(n) {
                    return arguments.length ? (h = uo(a * (f = n ? -1 : 1), a * l, c, s), t()) : f < 0
                },
                reflectY: function(n) {
                    return arguments.length ? (h = uo(a * f, a * (l = n ? -1 : 1), c, s), t()) : l < 0
                },
                fitExtent: function(t, n) {
                    return Yi(u, t, n)
                },
                fitSize: function(t, n) {
                    return Bi(u, t, n)
                }
            }
        };
    ao.invert = Qi(_r);
    var pg = function() {
        return Xi(ao).scale(249.5).clipAngle(90 + y_)
    };
    co.invert = Qi(function(t) {
        return 2 * k_(t)
    });
    var dg = function() {
        return Xi(co).scale(250).clipAngle(142)
    };
    so.invert = function(t, n) {
        return [-n, 2 * k_(C_(t)) - x_]
    };
    var vg = function() {
            var t = to(so),
                n = t.center,
                e = t.rotate;
            return t.center = function(t) {
                return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
            }, t.rotate = function(t) {
                return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
            }, e([0, 0, 90]).scale(159.155)
        },
        _g = function() {
            function t(t) {
                var o, u = 0;
                t.eachAfter(function(t) {
                    var e = t.children;
                    e ? (t.x = lo(e), t.y = po(e)) : (t.x = o ? u += n(t, o) : 0, t.y = 0, o = t)
                });
                var a = _o(t),
                    c = yo(t),
                    s = a.x - n(a, c) / 2,
                    f = c.x + n(c, a) / 2;
                return t.eachAfter(i ? function(n) {
                    n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r
                } : function(n) {
                    n.x = (n.x - s) / (f - s) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r
                })
            }
            var n = fo,
                e = 1,
                r = 1,
                i = !1;
            return t.separation = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.size = function(n) {
                return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r]
            }, t.nodeSize = function(n) {
                return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null
            }, t
        },
        yg = function() {
            return this.eachAfter(go)
        },
        gg = function(t) {
            var n, e, r, i, o = this,
                u = [o];
            do
                for (n = u.reverse(), u = []; o = n.pop();)
                    if (t(o), e = o.children)
                        for (r = 0, i = e.length; r < i; ++r) u.push(e[r]); while (u.length);
            return this
        },
        mg = function(t) {
            for (var n, e, r = this, i = [r]; r = i.pop();)
                if (t(r), n = r.children)
                    for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        },
        xg = function(t) {
            for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
                if (u.push(i), n = i.children)
                    for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
            for (; i = u.pop();) t(i);
            return this
        },
        bg = function(t) {
            return this.eachAfter(function(n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        },
        wg = function(t) {
            return this.eachBefore(function(n) {
                n.children && n.children.sort(t)
            })
        },
        Mg = function(t) {
            for (var n = this, e = mo(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
            return r
        },
        Tg = function() {
            for (var t = this, n = [t]; t = t.parent;) n.push(t);
            return n
        },
        Ng = function() {
            var t = [];
            return this.each(function(n) {
                t.push(n)
            }), t
        },
        kg = function() {
            var t = [];
            return this.eachBefore(function(n) {
                n.children || t.push(n)
            }), t
        },
        Sg = function() {
            var t = this,
                n = [];
            return t.each(function(e) {
                e !== t && n.push({
                    source: e.parent,
                    target: e
                })
            }), n
        };
    No.prototype = xo.prototype = {
        constructor: No,
        count: yg,
        each: gg,
        eachAfter: xg,
        eachBefore: mg,
        sum: bg,
        sort: wg,
        path: Mg,
        ancestors: Tg,
        descendants: Ng,
        leaves: kg,
        links: Sg,
        copy: bo
    };
    var Eg = function(t) {
            for (var n, e = (t = t.slice()).length, r = null, i = r; e;) {
                var o = new ko(t[e - 1]);
                i = i ? i.next = o : r = o, t[n] = t[--e]
            }
            return {
                head: r,
                tail: i
            }
        },
        Ag = function(t) {
            return Eo(Eg(t), [])
        },
        Cg = function(t) {
            return Do(t), t
        },
        zg = function(t) {
            return function() {
                return t
            }
        },
        Pg = function() {
            function t(t) {
                return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Bo(n)).eachAfter(jo(i, .5)).eachBefore(Ho(1)) : t.eachBefore(Bo(Yo)).eachAfter(jo(Io, 1)).eachAfter(jo(i, t.r / Math.min(e, r))).eachBefore(Ho(Math.min(e, r) / (2 * t.r))), t
            }
            var n = null,
                e = 1,
                r = 1,
                i = Io;
            return t.radius = function(e) {
                return arguments.length ? (n = Oo(e), t) : n
            }, t.size = function(n) {
                return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
            }, t.padding = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : zg(+n), t) : i
            }, t
        },
        Rg = function(t) {
            t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
        },
        qg = function(t, n, e, r, i) {
            for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;) o = u[a], o.y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
        },
        Lg = function() {
            function t(t) {
                var u = t.height + 1;
                return t.x0 = t.y0 = i, t.x1 = e, t.y1 = r / u, t.eachBefore(n(r, u)), o && t.eachBefore(Rg), t
            }

            function n(t, n) {
                return function(e) {
                    e.children && qg(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                    var r = e.x0,
                        o = e.y0,
                        u = e.x1 - i,
                        a = e.y1 - i;
                    u < r && (r = u = (r + u) / 2), a < o && (o = a = (o + a) / 2), e.x0 = r, e.y0 = o, e.x1 = u, e.y1 = a
                }
            }
            var e = 1,
                r = 1,
                i = 0,
                o = !1;
            return t.round = function(n) {
                return arguments.length ? (o = !!n, t) : o
            }, t.size = function(n) {
                return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
            }, t.padding = function(n) {
                return arguments.length ? (i = +n, t) : i
            }, t
        },
        Ug = "$",
        Dg = {
            depth: -1
        },
        Og = {},
        Fg = function() {
            function t(t) {
                var r, i, o, u, a, c, s, f = t.length,
                    l = new Array(f),
                    h = {};
                for (i = 0; i < f; ++i) r = t[i], a = l[i] = new No(r), null != (c = n(r, i, t)) && (c += "") && (s = Ug + (a.id = c), h[s] = s in h ? Og : a);
                for (i = 0; i < f; ++i)
                    if (a = l[i], c = e(t[i], i, t), null != c && (c += "")) {
                        if (u = h[Ug + c], !u) throw new Error("missing: " + c);
                        if (u === Og) throw new Error("ambiguous: " + c);
                        u.children ? u.children.push(a) : u.children = [a], a.parent = u
                    } else {
                        if (o) throw new Error("multiple roots");
                        o = a
                    }
                if (!o) throw new Error("no root");
                if (o.parent = Dg, o.eachBefore(function(t) {
                        t.depth = t.parent.depth + 1, --f
                    }).eachBefore(To), o.parent = null, f > 0) throw new Error("cycle");
                return o
            }
            var n = Xo,
                e = Vo;
            return t.id = function(e) {
                return arguments.length ? (n = Fo(e), t) : n
            }, t.parentId = function(n) {
                return arguments.length ? (e = Fo(n), t) : e
            }, t
        };
    Ko.prototype = Object.create(No.prototype);
    var Ig = function() {
            function t(t) {
                var r = tu(t);
                if (r.eachAfter(n), r.parent.m = -r.z, r.eachBefore(e), c) t.eachBefore(i);
                else {
                    var s = t,
                        f = t,
                        l = t;
                    t.eachBefore(function(t) {
                        t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t)
                    });
                    var h = s === f ? 1 : o(s, f) / 2,
                        p = h - s.x,
                        d = u / (f.x + h + p),
                        v = a / (l.depth || 1);
                    t.eachBefore(function(t) {
                        t.x = (t.x + p) * d, t.y = t.depth * v
                    })
                }
                return t
            }

            function n(t) {
                var n = t.children,
                    e = t.parent.children,
                    i = t.i ? e[t.i - 1] : null;
                if (n) {
                    Jo(t);
                    var u = (n[0].z + n[n.length - 1].z) / 2;
                    i ? (t.z = i.z + o(t._, i._), t.m = t.z - u) : t.z = u
                } else i && (t.z = i.z + o(t._, i._));
                t.parent.A = r(t, i, t.parent.A || e[0])
            }

            function e(t) {
                t._.x = t.z + t.parent.m, t.m += t.parent.m
            }

            function r(t, n, e) {
                if (n) {
                    for (var r, i = t, u = t, a = n, c = i.parent.children[0], s = i.m, f = u.m, l = a.m, h = c.m; a = Zo(a), i = $o(i), a && i;) c = $o(c), u = Zo(u), u.a = t, r = a.z + l - i.z - s + o(a._, i._), r > 0 && (Go(Qo(a, t, e), t, r), s += r, f += r), l += a.m, s += i.m, h += c.m, f += u.m;
                    a && !Zo(u) && (u.t = a, u.m += l - f), i && !$o(c) && (c.t = i, c.m += s - h, e = t)
                }
                return e
            }

            function i(t) {
                t.x *= u, t.y = t.depth * a
            }
            var o = Wo,
                u = 1,
                a = 1,
                c = null;
            return t.separation = function(n) {
                return arguments.length ? (o = n, t) : o
            }, t.size = function(n) {
                return arguments.length ? (c = !1, u = +n[0], a = +n[1], t) : c ? null : [u, a]
            }, t.nodeSize = function(n) {
                return arguments.length ? (c = !0, u = +n[0], a = +n[1], t) : c ? [u, a] : null
            }, t
        },
        Yg = function(t, n, e, r, i) {
            for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;) o = u[a], o.x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s
        },
        Bg = (1 + Math.sqrt(5)) / 2,
        jg = function t(n) {
            function e(t, e, r, i, o) {
                nu(n, t, e, r, i, o)
            }
            return e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        }(Bg),
        Hg = function() {
            function t(t) {
                return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), u = [0], r && t.eachBefore(Rg), t
            }

            function n(t) {
                var n = u[t.depth],
                    r = t.x0 + n,
                    i = t.y0 + n,
                    o = t.x1 - n,
                    h = t.y1 - n;
                o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = u[t.depth + 1] = a(t) / 2, r += l(t) - n, i += c(t) - n, o -= s(t) - n, h -= f(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h))
            }
            var e = jg,
                r = !1,
                i = 1,
                o = 1,
                u = [0],
                a = Io,
                c = Io,
                s = Io,
                f = Io,
                l = Io;
            return t.round = function(n) {
                return arguments.length ? (r = !!n, t) : r
            }, t.size = function(n) {
                return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o]
            }, t.tile = function(n) {
                return arguments.length ? (e = Fo(n), t) : e
            }, t.padding = function(n) {
                return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
            }, t.paddingInner = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n : zg(+n), t) : a
            }, t.paddingOuter = function(n) {
                return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
            }, t.paddingTop = function(n) {
                return arguments.length ? (c = "function" == typeof n ? n : zg(+n), t) : c
            }, t.paddingRight = function(n) {
                return arguments.length ? (s = "function" == typeof n ? n : zg(+n), t) : s
            }, t.paddingBottom = function(n) {
                return arguments.length ? (f = "function" == typeof n ? n : zg(+n), t) : f
            }, t.paddingLeft = function(n) {
                return arguments.length ? (l = "function" == typeof n ? n : zg(+n), t) : l
            }, t
        },
        Xg = function(t, n, e, r, i) {
            function o(t, n, e, r, i, u, a) {
                if (t >= n - 1) {
                    var s = c[t];
                    return s.x0 = r, s.y0 = i, s.x1 = u, s.y1 = a, void 0
                }
                for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d;) {
                    var v = p + d >>> 1;
                    f[v] < h ? p = v + 1 : d = v
                }
                var _ = f[p] - l,
                    y = e - _;
                if (a - i > u - r) {
                    var g = (i * y + a * _) / e;
                    o(t, p, _, r, i, u, g), o(p, n, y, r, g, u, a)
                } else {
                    var m = (r * y + u * _) / e;
                    o(t, p, _, r, i, m, a), o(p, n, y, m, i, u, a)
                }
            }
            var u, a, c = t.children,
                s = c.length,
                f = new Array(s + 1);
            for (f[0] = a = u = 0; u < s; ++u) f[u + 1] = a += c[u].value;
            o(0, s, t.value, n, e, r, i)
        },
        Vg = function(t, n, e, r, i) {
            (1 & t.depth ? Yg : qg)(t, n, e, r, i)
        },
        Wg = function t(n) {
            function e(t, e, r, i, o) {
                if ((u = t._squarify) && u.ratio === n)
                    for (var u, a, c, s, f, l = -1, h = u.length, p = t.value; ++l < h;) {
                        for (a = u[l], c = a.children, s = a.value = 0, f = c.length; s < f; ++s) a.value += c[s].value;
                        a.dice ? qg(a, e, r, i, r += (o - r) * a.value / p) : Yg(a, e, r, e += (i - e) * a.value / p, o), p -= a.value
                    } else t._squarify = u = nu(n, t, e, r, i, o), u.ratio = n
            }
            return e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        }(Bg),
        $g = function(t) {
            for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
            return o / 2
        },
        Zg = function(t) {
            for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
            return c *= 3, [o / c, u / c]
        },
        Gg = function(t, n, e) {
            return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
        },
        Jg = function(t) {
            if ((e = t.length) < 3) return null;
            var n, e, r = new Array(e),
                i = new Array(e);
            for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
            for (r.sort(eu), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
            var o = ru(r),
                u = ru(i),
                a = u[0] === o[0],
                c = u[u.length - 1] === o[o.length - 1],
                s = [];
            for (n = o.length - 1; n >= 0; --n) s.push(t[r[o[n]][2]]);
            for (n = +a; n < u.length - c; ++n) s.push(t[r[u[n]][2]]);
            return s
        },
        Qg = function(t, n) {
            for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], s = o[1], f = !1, l = 0; l < i; ++l) o = t[l], e = o[0], r = o[1], r > a != s > a && u < (c - e) * (a - r) / (s - r) + e && (f = !f), c = e, s = r;
            return f
        },
        Kg = function(t) {
            for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) n = u, e = a, o = t[r], u = o[0], a = o[1], n -= u, e -= a, c += Math.sqrt(n * n + e * e);
            return c
        },
        tm = [].slice,
        nm = {};
    iu.prototype = fu.prototype = {
        constructor: iu,
        defer: function(t) {
            if ("function" != typeof t || this._call) throw new Error;
            if (null != this._error) return this;
            var n = tm.call(arguments, 1);
            return n.push(t), ++this._waiting, this._tasks.push(n), ou(this), this
        },
        abort: function() {
            return null == this._error && cu(this, new Error("abort")), this
        },
        await: function(t) {
            if ("function" != typeof t || this._call) throw new Error;
            return this._call = function(n, e) {
                t.apply(null, [n].concat(e))
            }, su(this), this
        },
        awaitAll: function(t) {
            if ("function" != typeof t || this._call) throw new Error;
            return this._call = t, su(this), this
        }
    };
    var em = function(t, n) {
            return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t,
                function() {
                    return Math.random() * n + t
                }
        },
        rm = function(t, n) {
            var e, r;
            return t = null == t ? 0 : +t, n = null == n ? 1 : +n,
                function() {
                    var i;
                    if (null != e) i = e, e = null;
                    else
                        do e = 2 * Math.random() - 1, i = 2 * Math.random() - 1, r = e * e + i * i; while (!r || r > 1);
                    return t + n * i * Math.sqrt(-2 * Math.log(r) / r)
                }
        },
        im = function() {
            var t = rm.apply(this, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        om = function(t) {
            return function() {
                for (var n = 0, e = 0; e < t; ++e) n += Math.random();
                return n
            }
        },
        um = function(t) {
            var n = om(t);
            return function() {
                return n() / t
            }
        },
        am = function(t) {
            return function() {
                return -Math.log(1 - Math.random()) / t
            }
        },
        cm = function(t, n) {
            function e(t) {
                var n, e = s.status;
                if (!e && hu(s) || e >= 200 && e < 300 || 304 === e) {
                    if (o) try {
                        n = o.call(r, s)
                    } catch (t) {
                        return void a.call("error", r, t)
                    } else n = s;
                    a.call("load", r, n)
                } else a.call("error", r, t)
            }
            var r, i, o, u, a = p("beforesend", "progress", "load", "error"),
                c = Ie(),
                s = new XMLHttpRequest,
                f = null,
                l = null,
                h = 0;
            if ("undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = s.ontimeout = e : s.onreadystatechange = function(t) {
                    s.readyState > 3 && e(t)
                }, s.onprogress = function(t) {
                    a.call("progress", r, t)
                }, r = {
                    header: function(t, n) {
                        return t = (t + "").toLowerCase(), arguments.length < 2 ? c.get(t) : (null == n ? c.remove(t) : c.set(t, n + ""), r)
                    },
                    mimeType: function(t) {
                        return arguments.length ? (i = null == t ? null : t + "", r) : i
                    },
                    responseType: function(t) {
                        return arguments.length ? (u = t, r) : u
                    },
                    timeout: function(t) {
                        return arguments.length ? (h = +t, r) : h
                    },
                    user: function(t) {
                        return arguments.length < 1 ? f : (f = null == t ? null : t + "", r)
                    },
                    password: function(t) {
                        return arguments.length < 1 ? l : (l = null == t ? null : t + "", r)
                    },
                    response: function(t) {
                        return o = t, r
                    },
                    get: function(t, n) {
                        return r.send("GET", t, n)
                    },
                    post: function(t, n) {
                        return r.send("POST", t, n)
                    },
                    send: function(n, e, o) {
                        return s.open(n, t, !0, f, l), null == i || c.has("accept") || c.set("accept", i + ",*/*"), s.setRequestHeader && c.each(function(t, n) {
                            s.setRequestHeader(n, t)
                        }), null != i && s.overrideMimeType && s.overrideMimeType(i), null != u && (s.responseType = u), h > 0 && (s.timeout = h), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = lu(o)), null != o && r.on("error", o).on("load", function(t) {
                            o(null, t)
                        }), a.call("beforesend", r, s), s.send(null == e ? null : e), r
                    },
                    abort: function() {
                        return s.abort(), r
                    },
                    on: function() {
                        var t = a.on.apply(a, arguments);
                        return t === a ? r : t
                    }
                }, null != n) {
                if ("function" != typeof n) throw new Error("invalid callback: " + n);
                return r.get(n)
            }
            return r
        },
        sm = function(t, n) {
            return function(e, r) {
                var i = cm(e).mimeType(t).response(n);
                if (null != r) {
                    if ("function" != typeof r) throw new Error("invalid callback: " + r);
                    return i.get(r)
                }
                return i
            }
        },
        fm = sm("text/html", function(t) {
            return document.createRange().createContextualFragment(t.responseText)
        }),
        lm = sm("application/json", function(t) {
            return JSON.parse(t.responseText)
        }),
        hm = sm("text/plain", function(t) {
            return t.responseText
        }),
        pm = sm("application/xml", function(t) {
            var n = t.responseXML;
            if (!n) throw new Error("parse error");
            return n
        }),
        dm = function(t, n) {
            return function(e, r, i) {
                arguments.length < 3 && (i = r, r = null);
                var o = cm(e).mimeType(t);
                return o.row = function(t) {
                    return arguments.length ? o.response(pu(n, r = t)) : r
                }, o.row(r), i ? o.get(i) : o
            }
        },
        vm = dm("text/csv", Bd),
        _m = dm("text/tab-separated-values", Wd),
        ym = Array.prototype,
        gm = ym.map,
        mm = ym.slice,
        xm = {
            name: "implicit"
        },
        bm = function(t) {
            return function() {
                return t
            }
        },
        wm = function(t) {
            return +t
        },
        Mm = [0, 1],
        Tm = function(n, r, i) {
            var o, u = n[0],
                a = n[n.length - 1],
                c = e(u, a, null == r ? 10 : r);
            switch (i = zv(null == i ? ",f" : i), i.type) {
                case "s":
                    var s = Math.max(Math.abs(u), Math.abs(a));
                    return null != i.precision || isNaN(o = Uv(c, s)) || (i.precision = o), t.formatPrefix(i, s);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != i.precision || isNaN(o = Dv(c, Math.max(Math.abs(u), Math.abs(a)))) || (i.precision = o - ("e" === i.type));
                    break;
                case "f":
                case "%":
                    null != i.precision || isNaN(o = Lv(c)) || (i.precision = o - 2 * ("%" === i.type))
            }
            return t.format(i)
        },
        Nm = function(t, n) {
            t = t.slice();
            var e, r = 0,
                i = t.length - 1,
                o = t[r],
                u = t[i];
            return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
        },
        km = new Date,
        Sm = new Date,
        Em = Yu(function() {}, function(t, n) {
            t.setTime(+t + n)
        }, function(t, n) {
            return n - t
        });
    Em.every = function(t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Yu(function(n) {
            n.setTime(Math.floor(n / t) * t)
        }, function(n, e) {
            n.setTime(+n + e * t)
        }, function(n, e) {
            return (e - n) / t
        }) : Em : null
    };
    var Am = Em.range,
        Cm = 1e3,
        zm = 6e4,
        Pm = 36e5,
        Rm = 864e5,
        qm = 6048e5,
        Lm = Yu(function(t) {
            t.setTime(Math.floor(t / Cm) * Cm)
        }, function(t, n) {
            t.setTime(+t + n * Cm)
        }, function(t, n) {
            return (n - t) / Cm
        }, function(t) {
            return t.getUTCSeconds()
        }),
        Um = Lm.range,
        Dm = Yu(function(t) {
            t.setTime(Math.floor(t / zm) * zm)
        }, function(t, n) {
            t.setTime(+t + n * zm)
        }, function(t, n) {
            return (n - t) / zm
        }, function(t) {
            return t.getMinutes()
        }),
        Om = Dm.range,
        Fm = Yu(function(t) {
            var n = t.getTimezoneOffset() * zm % Pm;
            n < 0 && (n += Pm), t.setTime(Math.floor((+t - n) / Pm) * Pm + n)
        }, function(t, n) {
            t.setTime(+t + n * Pm)
        }, function(t, n) {
            return (n - t) / Pm
        }, function(t) {
            return t.getHours()
        }),
        Im = Fm.range,
        Ym = Yu(function(t) {
            t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setDate(t.getDate() + n)
        }, function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * zm) / Rm
        }, function(t) {
            return t.getDate() - 1
        }),
        Bm = Ym.range,
        jm = Bu(0),
        Hm = Bu(1),
        Xm = Bu(2),
        Vm = Bu(3),
        Wm = Bu(4),
        $m = Bu(5),
        Zm = Bu(6),
        Gm = jm.range,
        Jm = Hm.range,
        Qm = Xm.range,
        Km = Vm.range,
        tx = Wm.range,
        nx = $m.range,
        ex = Zm.range,
        rx = Yu(function(t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setMonth(t.getMonth() + n)
        }, function(t, n) {
            return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
        }, function(t) {
            return t.getMonth()
        }),
        ix = rx.range,
        ox = Yu(function(t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setFullYear(t.getFullYear() + n)
        }, function(t, n) {
            return n.getFullYear() - t.getFullYear()
        }, function(t) {
            return t.getFullYear()
        });
    ox.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Yu(function(n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
        }, function(n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    var ux = ox.range,
        ax = Yu(function(t) {
            t.setUTCSeconds(0, 0)
        }, function(t, n) {
            t.setTime(+t + n * zm)
        }, function(t, n) {
            return (n - t) / zm
        }, function(t) {
            return t.getUTCMinutes()
        }),
        cx = ax.range,
        sx = Yu(function(t) {
            t.setUTCMinutes(0, 0, 0)
        }, function(t, n) {
            t.setTime(+t + n * Pm)
        }, function(t, n) {
            return (n - t) / Pm
        }, function(t) {
            return t.getUTCHours()
        }),
        fx = sx.range,
        lx = Yu(function(t) {
            t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCDate(t.getUTCDate() + n)
        }, function(t, n) {
            return (n - t) / Rm
        }, function(t) {
            return t.getUTCDate() - 1
        }),
        hx = lx.range,
        px = ju(0),
        dx = ju(1),
        vx = ju(2),
        _x = ju(3),
        yx = ju(4),
        gx = ju(5),
        mx = ju(6),
        xx = px.range,
        bx = dx.range,
        wx = vx.range,
        Mx = _x.range,
        Tx = yx.range,
        Nx = gx.range,
        kx = mx.range,
        Sx = Yu(function(t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCMonth(t.getUTCMonth() + n)
        }, function(t, n) {
            return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
        }, function(t) {
            return t.getUTCMonth()
        }),
        Ex = Sx.range,
        Ax = Yu(function(t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n)
        }, function(t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear()
        }, function(t) {
            return t.getUTCFullYear()
        });
    Ax.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Yu(function(n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
        }, function(n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var Cx, zx = Ax.range,
        Px = {
            "-": "",
            _: " ",
            0: "0"
        },
        Rx = /^\s*\d+/,
        qx = /^%/,
        Lx = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    Ya({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var Ux = "%Y-%m-%dT%H:%M:%S.%LZ",
        Dx = Date.prototype.toISOString ? Ba : t.utcFormat(Ux),
        Ox = +new Date("2000-01-01T00:00:00.000Z") ? ja : t.utcParse(Ux),
        Fx = 1e3,
        Ix = 60 * Fx,
        Yx = 60 * Ix,
        Bx = 24 * Yx,
        jx = 7 * Bx,
        Hx = 30 * Bx,
        Xx = 365 * Bx,
        Vx = function() {
            return Va(ox, rx, jm, Ym, Fm, Dm, Lm, Em, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        },
        Wx = function() {
            return Va(Ax, Sx, px, lx, sx, ax, Lm, Em, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        },
        $x = function(t) {
            return t.match(/.{6}/g).map(function(t) {
                return "#" + t
            })
        },
        Zx = $x("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        Gx = $x("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
        Jx = $x("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
        Qx = $x("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
        Kx = Uh(Xt(300, .5, 0), Xt(-240, .5, 1)),
        tb = Uh(Xt(-100, .75, .35), Xt(80, 1.5, .8)),
        nb = Uh(Xt(260, .75, .35), Xt(80, 1.5, .8)),
        eb = Xt(),
        rb = function(t) {
            (t < 0 || t > 1) && (t -= Math.floor(t));
            var n = Math.abs(t - .5);
            return eb.h = 360 * t - 100, eb.s = 1.5 - 1.5 * n, eb.l = .8 - .9 * n, eb + ""
        },
        ib = Wa($x("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
        ob = Wa($x("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
        ub = Wa($x("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
        ab = Wa($x("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
        cb = function(t) {
            return function() {
                return t
            }
        },
        sb = 1e-12,
        fb = Math.PI,
        lb = fb / 2,
        hb = 2 * fb,
        pb = function() {
            function t() {
                var t, s, f = +n.apply(this, arguments),
                    l = +e.apply(this, arguments),
                    h = o.apply(this, arguments) - lb,
                    p = u.apply(this, arguments) - lb,
                    d = Math.abs(p - h),
                    v = p > h;
                if (c || (c = t = Re()), l < f && (s = l, l = f, f = s), l > sb)
                    if (d > hb - sb) c.moveTo(l * Math.cos(h), l * Math.sin(h)), c.arc(0, 0, l, h, p, !v), f > sb && (c.moveTo(f * Math.cos(p), f * Math.sin(p)), c.arc(0, 0, f, p, h, v));
                    else {
                        var _, y, g = h,
                            m = p,
                            x = h,
                            b = p,
                            w = d,
                            M = d,
                            T = a.apply(this, arguments) / 2,
                            N = T > sb && (i ? +i.apply(this, arguments) : Math.sqrt(f * f + l * l)),
                            k = Math.min(Math.abs(l - f) / 2, +r.apply(this, arguments)),
                            S = k,
                            E = k;
                        if (N > sb) {
                            var A = tc(N / f * Math.sin(T)),
                                C = tc(N / l * Math.sin(T));
                            (w -= 2 * A) > sb ? (A *= v ? 1 : -1, x += A, b -= A) : (w = 0, x = b = (h + p) / 2), (M -= 2 * C) > sb ? (C *= v ? 1 : -1, g += C, m -= C) : (M = 0, g = m = (h + p) / 2)
                        }
                        var z = l * Math.cos(g),
                            P = l * Math.sin(g),
                            R = f * Math.cos(b),
                            q = f * Math.sin(b);
                        if (k > sb) {
                            var L = l * Math.cos(m),
                                U = l * Math.sin(m),
                                D = f * Math.cos(x),
                                O = f * Math.sin(x);
                            if (d < fb) {
                                var F = w > sb ? nc(z, P, D, O, L, U, R, q) : [R, q],
                                    I = z - F[0],
                                    Y = P - F[1],
                                    B = L - F[0],
                                    j = U - F[1],
                                    H = 1 / Math.sin(Math.acos((I * B + Y * j) / (Math.sqrt(I * I + Y * Y) * Math.sqrt(B * B + j * j))) / 2),
                                    X = Math.sqrt(F[0] * F[0] + F[1] * F[1]);
                                S = Math.min(k, (f - X) / (H - 1)), E = Math.min(k, (l - X) / (H + 1))
                            }
                        }
                        M > sb ? E > sb ? (_ = ec(D, O, z, P, l, E, v), y = ec(L, U, R, q, l, E, v), c.moveTo(_.cx + _.x01, _.cy + _.y01), E < k ? c.arc(_.cx, _.cy, E, Math.atan2(_.y01, _.x01), Math.atan2(y.y01, y.x01), !v) : (c.arc(_.cx, _.cy, E, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !v), c.arc(0, 0, l, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(y.cy + y.y11, y.cx + y.x11), !v), c.arc(y.cx, y.cy, E, Math.atan2(y.y11, y.x11), Math.atan2(y.y01, y.x01), !v))) : (c.moveTo(z, P), c.arc(0, 0, l, g, m, !v)) : c.moveTo(z, P), f > sb && w > sb ? S > sb ? (_ = ec(R, q, L, U, f, -S, v), y = ec(z, P, D, O, f, -S, v), c.lineTo(_.cx + _.x01, _.cy + _.y01), S < k ? c.arc(_.cx, _.cy, S, Math.atan2(_.y01, _.x01), Math.atan2(y.y01, y.x01), !v) : (c.arc(_.cx, _.cy, S, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !v), c.arc(0, 0, f, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(y.cy + y.y11, y.cx + y.x11), v), c.arc(y.cx, y.cy, S, Math.atan2(y.y11, y.x11), Math.atan2(y.y01, y.x01), !v))) : c.arc(0, 0, f, b, x, v) : c.lineTo(R, q)
                    }
                else c.moveTo(0, 0);
                if (c.closePath(), t) return c = null, t + "" || null
            }
            var n = Za,
                e = Ga,
                r = cb(0),
                i = null,
                o = Ja,
                u = Qa,
                a = Ka,
                c = null;
            return t.centroid = function() {
                var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                    r = (+o.apply(this, arguments) + +u.apply(this, arguments)) / 2 - fb / 2;
                return [Math.cos(r) * t, Math.sin(r) * t]
            }, t.innerRadius = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : cb(+e), t) : n
            }, t.outerRadius = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : cb(+n), t) : e
            }, t.cornerRadius = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : cb(+n), t) : r
            }, t.padRadius = function(n) {
                return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : cb(+n), t) : i
            }, t.startAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : cb(+n), t) : o
            }, t.endAngle = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n : cb(+n), t) : u
            }, t.padAngle = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n : cb(+n), t) : a
            }, t.context = function(n) {
                return arguments.length ? (c = null == n ? null : n, t) : c
            }, t
        };
    rc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n)
            }
        }
    };
    var db = function(t) {
            return new rc(t)
        },
        vb = function() {
            function t(t) {
                var a, c, s, f = t.length,
                    l = !1;
                for (null == i && (u = o(s = Re())), a = 0; a <= f; ++a) !(a < f && r(c = t[a], a, t)) === l && ((l = !l) ? u.lineStart() : u.lineEnd()), l && u.point(+n(c, a, t), +e(c, a, t));
                if (s) return u = null, s + "" || null
            }
            var n = ic,
                e = oc,
                r = cb(!0),
                i = null,
                o = db,
                u = null;
            return t.x = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : cb(+e), t) : n
            }, t.y = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : cb(+n), t) : e
            }, t.defined = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : cb(!!n), t) : r
            }, t.curve = function(n) {
                return arguments.length ? (o = n, null != i && (u = o(i)), t) : o
            }, t.context = function(n) {
                return arguments.length ? (null == n ? i = u = null : u = o(i = n), t) : i
            }, t
        },
        _b = function() {
            function t(t) {
                var n, f, l, h, p, d = t.length,
                    v = !1,
                    _ = new Array(d),
                    y = new Array(d);
                for (null == a && (s = c(p = Re())), n = 0; n <= d; ++n) {
                    if (!(n < d && u(h = t[n], n, t)) === v)
                        if (v = !v) f = n, s.areaStart(), s.lineStart();
                        else {
                            for (s.lineEnd(), s.lineStart(), l = n - 1; l >= f; --l) s.point(_[l], y[l]);
                            s.lineEnd(), s.areaEnd()
                        }
                    v && (_[n] = +e(h, n, t), y[n] = +i(h, n, t), s.point(r ? +r(h, n, t) : _[n], o ? +o(h, n, t) : y[n]))
                }
                if (p) return s = null, p + "" || null
            }

            function n() {
                return vb().defined(u).curve(c).context(a)
            }
            var e = ic,
                r = null,
                i = cb(0),
                o = oc,
                u = cb(!0),
                a = null,
                c = db,
                s = null;
            return t.x = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : cb(+n), r = null, t) : e
            }, t.x0 = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : cb(+n), t) : e
            }, t.x1 = function(n) {
                return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : cb(+n), t) : r
            }, t.y = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : cb(+n), o = null, t) : i
            }, t.y0 = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : cb(+n), t) : i
            }, t.y1 = function(n) {
                return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : cb(+n), t) : o
            }, t.lineX0 = t.lineY0 = function() {
                return n().x(e).y(i)
            }, t.lineY1 = function() {
                return n().x(e).y(o)
            }, t.lineX1 = function() {
                return n().x(r).y(i)
            }, t.defined = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n : cb(!!n), t) : u
            }, t.curve = function(n) {
                return arguments.length ? (c = n, null != a && (s = c(a)), t) : c
            }, t.context = function(n) {
                return arguments.length ? (null == n ? a = s = null : s = c(a = n), t) : a
            }, t
        },
        yb = function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        },
        gb = function(t) {
            return t
        },
        mb = function() {
            function t(t) {
                var a, c, s, f, l, h = t.length,
                    p = 0,
                    d = new Array(h),
                    v = new Array(h),
                    _ = +i.apply(this, arguments),
                    y = Math.min(hb, Math.max(-hb, o.apply(this, arguments) - _)),
                    g = Math.min(Math.abs(y) / h, u.apply(this, arguments)),
                    m = g * (y < 0 ? -1 : 1);
                for (a = 0; a < h; ++a)(l = v[d[a] = a] = +n(t[a], a, t)) > 0 && (p += l);
                for (null != e ? d.sort(function(t, n) {
                        return e(v[t], v[n])
                    }) : null != r && d.sort(function(n, e) {
                        return r(t[n], t[e])
                    }), a = 0, s = p ? (y - h * m) / p : 0; a < h; ++a, _ = f) c = d[a], l = v[c], f = _ + (l > 0 ? l * s : 0) + m, v[c] = {
                    data: t[c],
                    index: a,
                    value: l,
                    startAngle: _,
                    endAngle: f,
                    padAngle: g
                };
                return v
            }
            var n = gb,
                e = yb,
                r = null,
                i = cb(0),
                o = cb(hb),
                u = cb(0);
            return t.value = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : cb(+e), t) : n
            }, t.sortValues = function(n) {
                return arguments.length ? (e = n, r = null, t) : e
            }, t.sort = function(n) {
                return arguments.length ? (r = n, e = null, t) : r
            }, t.startAngle = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : cb(+n), t) : i
            }, t.endAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : cb(+n), t) : o
            }, t.padAngle = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n : cb(+n), t) : u
            }, t
        },
        xb = ac(db);
    uc.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        }
    };
    var bb = function() {
            return cc(vb().curve(xb))
        },
        wb = function() {
            var t = _b().curve(xb),
                n = t.curve,
                e = t.lineX0,
                r = t.lineX1,
                i = t.lineY0,
                o = t.lineY1;
            return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
                return cc(e())
            }, delete t.lineX0, t.lineEndAngle = function() {
                return cc(r())
            }, delete t.lineX1, t.lineInnerRadius = function() {
                return cc(i())
            }, delete t.lineY0, t.lineOuterRadius = function() {
                return cc(o())
            }, delete t.lineY1, t.curve = function(t) {
                return arguments.length ? n(ac(t)) : n()._curve
            }, t
        },
        Mb = {
            draw: function(t, n) {
                var e = Math.sqrt(n / fb);
                t.moveTo(e, 0), t.arc(0, 0, e, 0, hb)
            }
        },
        Tb = {
            draw: function(t, n) {
                var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
            }
        },
        Nb = Math.sqrt(1 / 3),
        kb = 2 * Nb,
        Sb = {
            draw: function(t, n) {
                var e = Math.sqrt(n / kb),
                    r = e * Nb;
                t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
            }
        },
        Eb = .8908130915292852,
        Ab = Math.sin(fb / 10) / Math.sin(7 * fb / 10),
        Cb = Math.sin(hb / 10) * Ab,
        zb = -Math.cos(hb / 10) * Ab,
        Pb = {
            draw: function(t, n) {
                var e = Math.sqrt(n * Eb),
                    r = Cb * e,
                    i = zb * e;
                t.moveTo(0, -e), t.lineTo(r, i);
                for (var o = 1; o < 5; ++o) {
                    var u = hb * o / 5,
                        a = Math.cos(u),
                        c = Math.sin(u);
                    t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
                }
                t.closePath()
            }
        },
        Rb = {
            draw: function(t, n) {
                var e = Math.sqrt(n),
                    r = -e / 2;
                t.rect(r, r, e, e)
            }
        },
        qb = Math.sqrt(3),
        Lb = {
            draw: function(t, n) {
                var e = -Math.sqrt(n / (3 * qb));
                t.moveTo(0, 2 * e), t.lineTo(-qb * e, -e), t.lineTo(qb * e, -e), t.closePath()
            }
        },
        Ub = -.5,
        Db = Math.sqrt(3) / 2,
        Ob = 1 / Math.sqrt(12),
        Fb = 3 * (Ob / 2 + 1),
        Ib = {
            draw: function(t, n) {
                var e = Math.sqrt(n / Fb),
                    r = e / 2,
                    i = e * Ob,
                    o = r,
                    u = e * Ob + e,
                    a = -o,
                    c = u;
                t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(Ub * r - Db * i, Db * r + Ub * i), t.lineTo(Ub * o - Db * u, Db * o + Ub * u), t.lineTo(Ub * a - Db * c, Db * a + Ub * c), t.lineTo(Ub * r + Db * i, Ub * i - Db * r), t.lineTo(Ub * o + Db * u, Ub * u - Db * o), t.lineTo(Ub * a + Db * c, Ub * c - Db * a), t.closePath()
            }
        },
        Yb = [Mb, Tb, Sb, Rb, Pb, Lb, Ib],
        Bb = function() {
            function t() {
                var t;
                if (r || (r = t = Re()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t) return r = null, t + "" || null
            }
            var n = cb(Mb),
                e = cb(64),
                r = null;
            return t.type = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : cb(e), t) : n
            }, t.size = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : cb(+n), t) : e
            }, t.context = function(n) {
                return arguments.length ? (r = null == n ? null : n, t) : r
            }, t
        },
        jb = function() {};
    fc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 3:
                    sc(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    sc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    };
    var Hb = function(t) {
        return new fc(t)
    };
    lc.prototype = {
        areaStart: jb,
        areaEnd: jb,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = n;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = n;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                    break;
                default:
                    sc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    };
    var Xb = function(t) {
        return new lc(t)
    };
    hc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var e = (this._x0 + 4 * this._x1 + t) / 6,
                        r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    sc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    };
    var Vb = function(t) {
        return new hc(t)
    };
    pc.prototype = {
        lineStart: function() {
            this._x = [], this._y = [], this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x,
                n = this._y,
                e = t.length - 1;
            if (e > 0)
                for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
            this._x = this._y = null, this._basis.lineEnd()
        },
        point: function(t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    };
    var Wb = function t(n) {
        function e(t) {
            return 1 === n ? new fc(t) : new pc(t, n)
        }
        return e.beta = function(n) {
            return t(+n)
        }, e
    }(.85);
    vc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    dc(this, this._x1, this._y1)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = n;
                    break;
                case 2:
                    this._point = 3;
                default:
                    dc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var $b = function t(n) {
        function e(t) {
            return new vc(t, n)
        }
        return e.tension = function(n) {
            return t(+n)
        }, e
    }(0);
    _c.prototype = {
        areaStart: jb,
        areaEnd: jb,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    dc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var Zb = function t(n) {
        function e(t) {
            return new _c(t, n)
        }
        return e.tension = function(n) {
            return t(+n)
        }, e
    }(0);
    yc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    dc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var Gb = function t(n) {
        function e(t) {
            return new yc(t, n)
        }
        return e.tension = function(n) {
            return t(+n)
        }, e
    }(0);
    mc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    gc(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var Jb = function t(n) {
        function e(t) {
            return n ? new mc(t, n) : new vc(t, 0)
        }
        return e.alpha = function(n) {
            return t(+n)
        }, e
    }(.5);
    xc.prototype = {
        areaStart: jb,
        areaEnd: jb,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    gc(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var Qb = function t(n) {
        function e(t) {
            return n ? new xc(t, n) : new _c(t, 0)
        }
        return e.alpha = function(n) {
            return t(+n)
        }, e
    }(.5);
    bc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    gc(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var Kb = function t(n) {
        function e(t) {
            return n ? new bc(t, n) : new yc(t, 0)
        }
        return e.alpha = function(n) {
            return t(+n)
        }, e
    }(.5);
    wc.prototype = {
        areaStart: jb,
        areaEnd: jb,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, n) {
            t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
        }
    };
    var tw = function(t) {
        return new wc(t)
    };
    Sc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    kc(this, this._t0, Nc(this, this._t0))
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, kc(this, Nc(this, e = Tc(this, t, n)), e);
                        break;
                    default:
                        kc(this, this._t0, e = Tc(this, t, n))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
            }
        }
    }, (Ec.prototype = Object.create(Sc.prototype)).point = function(t, n) {
        Sc.prototype.point.call(this, n, t)
    }, Ac.prototype = {
        moveTo: function(t, n) {
            this._context.moveTo(n, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, n) {
            this._context.lineTo(n, t)
        },
        bezierCurveTo: function(t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i)
        }
    }, Pc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [], this._y = []
        },
        lineEnd: function() {
            var t = this._x,
                n = this._y,
                e = t.length;
            if (e)
                if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                else
                    for (var r = Rc(t), i = Rc(n), o = 0, u = 1; u < e; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
            (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        },
        point: function(t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    };
    var nw = function(t) {
        return new Pc(t)
    };
    qc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN, this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                    else {
                        var e = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                    }
            }
            this._x = t, this._y = n
        }
    };
    var ew = function(t) {
            return new qc(t, .5)
        },
        rw = Array.prototype.slice,
        iw = function(t, n) {
            if ((r = t.length) > 1)
                for (var e, r, i = 1, o = t[n[0]], u = o.length; i < r; ++i) {
                    e = o, o = t[n[i]];
                    for (var a = 0; a < u; ++a) o[a][1] += o[a][0] = isNaN(e[a][1]) ? e[a][0] : e[a][1]
                }
        },
        ow = function(t) {
            for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
            return e
        },
        uw = function() {
            function t(t) {
                var o, u, a = n.apply(this, arguments),
                    c = t.length,
                    s = a.length,
                    f = new Array(s);
                for (o = 0; o < s; ++o) {
                    for (var l, h = a[o], p = f[o] = new Array(c), d = 0; d < c; ++d) p[d] = l = [0, +i(t[d], h, d, t)], l.data = t[d];
                    p.key = h
                }
                for (o = 0, u = e(f); o < s; ++o) f[u[o]].index = o;
                return r(f, u), f
            }
            var n = cb([]),
                e = ow,
                r = iw,
                i = Dc;
            return t.keys = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : cb(rw.call(e)), t) : n
            }, t.value = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : cb(+n), t) : i
            }, t.order = function(n) {
                return arguments.length ? (e = null == n ? ow : "function" == typeof n ? n : cb(rw.call(n)), t) : e
            }, t.offset = function(n) {
                return arguments.length ? (r = null == n ? iw : n, t) : r
            }, t
        },
        aw = function(t, n) {
            if ((r = t.length) > 0) {
                for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                    for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                    if (i)
                        for (e = 0; e < r; ++e) t[e][o][1] /= i
                }
                iw(t, n)
            }
        },
        cw = function(t, n) {
            if ((e = t.length) > 0) {
                for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                    for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
                    i[r][1] += i[r][0] = -a / 2
                }
                iw(t, n)
            }
        },
        sw = function(t, n) {
            if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                    for (var a = 0, c = 0, s = 0; a < i; ++a) {
                        for (var f = t[n[a]], l = f[u][1] || 0, h = f[u - 1][1] || 0, p = (l - h) / 2, d = 0; d < a; ++d) {
                            var v = t[n[d]],
                                _ = v[u][1] || 0,
                                y = v[u - 1][1] || 0;
                            p += _ - y
                        }
                        c += l, s += p * l
                    }
                    e[u - 1][1] += e[u - 1][0] = o, c && (o -= s / c)
                }
                e[u - 1][1] += e[u - 1][0] = o, iw(t, n)
            }
        },
        fw = function(t) {
            var n = t.map(Oc);
            return ow(t).sort(function(t, e) {
                return n[t] - n[e]
            })
        },
        lw = function(t) {
            return fw(t).reverse()
        },
        hw = function(t) {
            var n, e, r = t.length,
                i = t.map(Oc),
                o = ow(t).sort(function(t, n) {
                    return i[n] - i[t]
                }),
                u = 0,
                a = 0,
                c = [],
                s = [];
            for (n = 0; n < r; ++n) e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], s.push(e));
            return s.reverse().concat(c)
        },
        pw = function(t) {
            return ow(t).reverse()
        },
        dw = function(t) {
            return function() {
                return t
            }
        };
    Yc.prototype = {
        constructor: Yc,
        insert: function(t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = Xc(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (jc(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Hc(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Hc(this, e), t = e, e = t.U), e.C = !1, r.C = !0, jc(this, r))), e = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var n, e, r, i = t.U,
                o = t.L,
                u = t.R;
            if (e = o ? u ? Xc(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                if (t && t.C) return void(t.C = !1);
                do {
                    if (t === this._) break;
                    if (t === i.L) {
                        if (n = i.R, n.C && (n.C = !1, i.C = !0, jc(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                            n.R && n.R.C || (n.L.C = !1, n.C = !0, Hc(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, jc(this, i), t = this._;
                            break
                        }
                    } else if (n = i.L, n.C && (n.C = !1, i.C = !0, Hc(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                        n.L && n.L.C || (n.R.C = !1, n.C = !0, jc(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Hc(this, i), t = this._;
                        break
                    }
                    n.C = !0, t = i, i = i.U
                } while (!t.C);
                t && (t.C = !1)
            }
        }
    };
    var vw, _w, yw, gw, mw, xw = [],
        bw = [],
        ww = 1e-6,
        Mw = 1e-12;
    _s.prototype = {
        constructor: _s,
        polygons: function() {
            var t = this.edges;
            return this.cells.map(function(n) {
                var e = n.halfedges.map(function(e) {
                    return ts(n, t[e])
                });
                return e.data = n.site.data, e
            })
        },
        triangles: function() {
            var t = [],
                n = this.edges;
            return this.cells.forEach(function(e, r) {
                if (o = (i = e.halfedges).length)
                    for (var i, o, u, a = e.site, c = -1, s = n[i[o - 1]], f = s.left === a ? s.right : s.left; ++c < o;) u = f, s = n[i[c]], f = s.left === a ? s.right : s.left, u && f && r < u.index && r < f.index && ds(a, u, f) < 0 && t.push([a.data, u.data, f.data])
            }), t
        },
        links: function() {
            return this.edges.filter(function(t) {
                return t.right
            }).map(function(t) {
                return {
                    source: t.left.data,
                    target: t.right.data
                }
            })
        },
        find: function(t, n, e) {
            for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);)
                if (++u >= a) return null;
            var c = t - i.site[0],
                s = n - i.site[1],
                f = c * c + s * s;
            do i = o.cells[r = u], u = null, i.halfedges.forEach(function(e) {
                var r = o.edges[e],
                    a = r.left;
                if (a !== i.site && a || (a = r.right)) {
                    var c = t - a[0],
                        s = n - a[1],
                        l = c * c + s * s;
                    l < f && (f = l, u = a.index)
                }
            }); while (null !== u);
            return o._found = r, null == e || f <= e * e ? i.site : null
        }
    };
    var Tw = function() {
            function t(t) {
                return new _s(t.map(function(r, i) {
                    var o = [Math.round(n(r, i, t) / ww) * ww, Math.round(e(r, i, t) / ww) * ww];
                    return o.index = i, o.data = r, o
                }), r)
            }
            var n = Fc,
                e = Ic,
                r = null;
            return t.polygons = function(n) {
                return t(n).polygons()
            }, t.links = function(n) {
                return t(n).links()
            }, t.triangles = function(n) {
                return t(n).triangles()
            }, t.x = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : dw(+e), t) : n
            }, t.y = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : dw(+n), t) : e
            }, t.extent = function(n) {
                return arguments.length ? (r = null == n ? null : [
                    [+n[0][0], +n[0][1]],
                    [+n[1][0], +n[1][1]]
                ], t) : r && [
                    [r[0][0], r[0][1]],
                    [r[1][0], r[1][1]]
                ]
            }, t.size = function(n) {
                return arguments.length ? (r = null == n ? null : [
                    [0, 0],
                    [+n[0], +n[1]]
                ], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
            }, t
        },
        Nw = function(t) {
            return function() {
                return t
            }
        };
    gs.prototype = {
        constructor: gs,
        scale: function(t) {
            return 1 === t ? this : new gs(this.k * t, this.x, this.y)
        },
        translate: function(t, n) {
            return 0 === t & 0 === n ? this : new gs(this.k, this.x + this.k * t, this.y + this.k * n)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var kw = new gs(1, 0, 0);
    ms.prototype = gs.prototype;
    var Sw = function() {
            t.event.preventDefault(), t.event.stopImmediatePropagation()
        },
        Ew = function() {
            function n(t) {
                t.on("wheel.zoom", s).on("mousedown.zoom", f).on("dblclick.zoom", l).on("touchstart.zoom", h).on("touchmove.zoom", d).on("touchend.zoom touchcancel.zoom", v).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", Ms)
            }

            function e(t, n) {
                return n = Math.max(x, Math.min(b, n)), n === t.k ? t : new gs(n, t.x, t.y)
            }

            function r(t, n, e) {
                var r = n[0] - e[0] * t.k,
                    i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t : new gs(t.k, r, i)
            }

            function i(t, n) {
                var e = t.invertX(n[0][0]) - w,
                    r = t.invertX(n[1][0]) - M,
                    i = t.invertY(n[0][1]) - T,
                    o = t.invertY(n[1][1]) - N;
                return t.translate(r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r), o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o))
            }

            function o(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }

            function u(t, n, e) {
                t.on("start.zoom", function() {
                    a(this, arguments).start()
                }).on("interrupt.zoom end.zoom", function() {
                    a(this, arguments).end()
                }).tween("zoom", function() {
                    var t = this,
                        r = arguments,
                        i = a(t, r),
                        u = m.apply(t, r),
                        c = e || o(u),
                        s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                        f = t.__zoom,
                        l = "function" == typeof n ? n.apply(t, r) : n,
                        h = E(f.invert(c).concat(s / f.k), l.invert(c).concat(s / l.k));
                    return function(t) {
                        if (1 === t) t = l;
                        else {
                            var n = h(t),
                                e = s / n[2];
                            t = new gs(e, c[0] - n[0] * e, c[1] - n[1] * e)
                        }
                        i.zoom(null, t)
                    }
                })
            }

            function a(t, n) {
                for (var e, r = 0, i = A.length; r < i; ++r)
                    if ((e = A[r]).that === t) return e;
                return new c(t, n)
            }

            function c(t, n) {
                this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = m.apply(t, n)
            }

            function s() {
                function n() {
                    o.wheel = null, o.end()
                }
                if (g.apply(this, arguments)) {
                    var o = a(this, arguments),
                        u = this.__zoom,
                        c = Math.max(x, Math.min(b, u.k * Math.pow(2, -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500))),
                        s = zf(this);
                    if (o.wheel) o.mouse[0][0] === s[0] && o.mouse[0][1] === s[1] || (o.mouse[1] = u.invert(o.mouse[0] = s)), clearTimeout(o.wheel);
                    else {
                        if (u.k === c) return;
                        o.mouse = [s, u.invert(s)], op(this), o.start()
                    }
                    Sw(), o.wheel = setTimeout(n, P), o.zoom("mouse", i(r(e(u, c), o.mouse[0], o.mouse[1]), o.extent))
                }
            }

            function f() {
                function n() {
                    Sw(), o.moved = !0, o.zoom("mouse", i(r(o.that.__zoom, o.mouse[0] = zf(o.that), o.mouse[1]), o.extent))
                }

                function e() {
                    u.on("mousemove.zoom mouseup.zoom", null), _t(t.event.view, o.moved), Sw(), o.end()
                }
                if (!y && g.apply(this, arguments)) {
                    var o = a(this, arguments),
                        u = pl(t.event.view).on("mousemove.zoom", n, !0).on("mouseup.zoom", e, !0),
                        c = zf(this);
                    gl(t.event.view), xs(), o.mouse = [c, this.__zoom.invert(c)], op(this), o.start()
                }
            }

            function l() {
                if (g.apply(this, arguments)) {
                    var o = this.__zoom,
                        a = zf(this),
                        c = o.invert(a),
                        s = o.k * (t.event.shiftKey ? .5 : 2),
                        f = i(r(e(o, s), a, c), m.apply(this, arguments));
                    Sw(), k > 0 ? pl(this).transition().duration(k).call(u, f, a) : pl(this).call(n.transform, f)
                }
            }

            function h() {
                if (g.apply(this, arguments)) {
                    var n, e, r, i, o = a(this, arguments),
                        u = t.event.changedTouches,
                        c = u.length;
                    for (xs(), e = 0; e < c; ++e) r = u[e], i = vl(this, u, r.identifier), i = [i, this.__zoom.invert(i), r.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, n = !0);
                    return _ && (_ = clearTimeout(_), !o.touch1) ? (o.end(), i = pl(this).on("dblclick.zoom"), void(i && i.apply(this, arguments))) : void(n && (_ = setTimeout(function() {
                        _ = null
                    }, z), op(this), o.start()))
                }
            }

            function d() {
                var n, o, u, c, s = a(this, arguments),
                    f = t.event.changedTouches,
                    l = f.length;
                for (Sw(), _ && (_ = clearTimeout(_)), n = 0; n < l; ++n) o = f[n], u = vl(this, f, o.identifier), s.touch0 && s.touch0[2] === o.identifier ? s.touch0[0] = u : s.touch1 && s.touch1[2] === o.identifier && (s.touch1[0] = u);
                if (o = s.that.__zoom, s.touch1) {
                    var h = s.touch0[0],
                        p = s.touch0[1],
                        d = s.touch1[0],
                        v = s.touch1[1],
                        y = (y = d[0] - h[0]) * y + (y = d[1] - h[1]) * y,
                        g = (g = v[0] - p[0]) * g + (g = v[1] - p[1]) * g;
                    o = e(o, Math.sqrt(y / g)), u = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2], c = [(p[0] + v[0]) / 2, (p[1] + v[1]) / 2]
                } else {
                    if (!s.touch0) return;
                    u = s.touch0[0], c = s.touch0[1]
                }
                s.zoom("touch", i(r(o, u, c), s.extent))
            }

            function v() {
                var n, e, r = a(this, arguments),
                    i = t.event.changedTouches,
                    o = i.length;
                for (xs(), y && clearTimeout(y), y = setTimeout(function() {
                        y = null
                    }, z), n = 0; n < o; ++n) e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 || r.end()
            }
            var _, y, g = bs,
                m = ws,
                x = 0,
                b = 1 / 0,
                w = -b,
                M = b,
                T = w,
                N = M,
                k = 250,
                E = Ch,
                A = [],
                C = p("start", "zoom", "end"),
                z = 500,
                P = 150;
            return n.transform = function(t, n) {
                var e = t.selection ? t.selection() : t;
                e.property("__zoom", Ms), t !== e ? u(t, n) : e.interrupt().each(function() {
                    a(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                })
            }, n.scaleBy = function(t, e) {
                n.scaleTo(t, function() {
                    var t = this.__zoom.k,
                        n = "function" == typeof e ? e.apply(this, arguments) : e;
                    return t * n
                })
            }, n.scaleTo = function(t, u) {
                n.transform(t, function() {
                    var t = m.apply(this, arguments),
                        n = this.__zoom,
                        a = o(t),
                        c = n.invert(a),
                        s = "function" == typeof u ? u.apply(this, arguments) : u;
                    return i(r(e(n, s), a, c), t)
                })
            }, n.translateBy = function(t, e, r) {
                n.transform(t, function() {
                    return i(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), m.apply(this, arguments))
                })
            }, c.prototype = {
                start: function() {
                    return 1 === ++this.active && (this.index = A.push(this) - 1, this.emit("start")), this
                },
                zoom: function(t, n) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                },
                end: function() {
                    return 0 === --this.active && (A.splice(this.index, 1), this.index = -1, this.emit("end")), this
                },
                emit: function(t) {
                    S(new ys(n, t, this.that.__zoom), C.apply, C, [t, this.that, this.args])
                }
            }, n.filter = function(t) {
                return arguments.length ? (g = "function" == typeof t ? t : Nw(!!t), n) : g
            }, n.extent = function(t) {
                return arguments.length ? (m = "function" == typeof t ? t : Nw([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), n) : m
            }, n.scaleExtent = function(t) {
                return arguments.length ? (x = +t[0], b = +t[1], n) : [x, b]
            }, n.translateExtent = function(t) {
                return arguments.length ? (w = +t[0][0], M = +t[1][0], T = +t[0][1], N = +t[1][1], n) : [
                    [w, T],
                    [M, N]
                ]
            }, n.duration = function(t) {
                return arguments.length ? (k = +t, n) : k
            }, n.interpolate = function(t) {
                return arguments.length ? (E = t, n) : E
            }, n.on = function() {
                var t = C.on.apply(C, arguments);
                return t === C ? n : t
            }, n
        };
    t.version = Ts, t.bisect = Es, t.bisectRight = Es, t.bisectLeft = As, t.ascending = Ns, t.bisector = ks, t.descending = Cs, t.deviation = Rs, t.extent = qs, t.histogram = Vs, t.thresholdFreedmanDiaconis = $s, t.thresholdScott = Zs, t.thresholdSturges = Xs, t.max = Gs, t.mean = Js, t.median = Qs, t.merge = Ks, t.min = tf, t.pairs = nf, t.permute = ef, t.quantile = Ws, t.range = Is, t.scan = rf, t.shuffle = of , t.sum = uf, t.ticks = Hs, t.tickStep = e, t.transpose = af, t.variance = Ps, t.zip = cf, t.axisTop = s, t.axisRight = f, t.axisBottom = l, t.axisLeft = h, t.brush = md, t.brushX = Ee, t.brushY = Ae, t.brushSelection = Se, t.chord = kd, t.ribbon = Rd, t.nest = Ld, t.set = Ve, t.map = Ie, t.keys = Dd, t.values = Od, t.entries = Fd, t.color = Mt, t.rgb = St, t.hsl = zt, t.lab = Lt, t.hcl = Bt, t.cubehelix = Xt, t.dispatch = p, t.drag = xl, t.dragDisable = gl, t.dragEnable = _t, t.dsvFormat = Id, t.csvParse = Bd, t.csvParseRows = jd, t.csvFormat = Hd, t.csvFormatRows = Xd, t.tsvParse = Wd, t.tsvParseRows = $d, t.tsvFormat = Zd, t.tsvFormatRows = Gd, t.easeLinear = ne, t.easeQuad = ie, t.easeQuadIn = ee, t.easeQuadOut = re, t.easeQuadInOut = ie, t.easeCubic = ae, t.easeCubicIn = oe, t.easeCubicOut = ue, t.easeCubicInOut = ae, t.easePoly = zp, t.easePolyIn = Ap, t.easePolyOut = Cp, t.easePolyInOut = zp, t.easeSin = fe, t.easeSinIn = ce, t.easeSinOut = se, t.easeSinInOut = fe, t.easeExp = pe, t.easeExpIn = le, t.easeExpOut = he, t.easeExpInOut = pe, t.easeCircle = _e, t.easeCircleIn = de, t.easeCircleOut = ve, t.easeCircleInOut = _e, t.easeBounce = ge, t.easeBounceIn = ye, t.easeBounceOut = ge, t.easeBounceInOut = me, t.easeBack = Wp, t.easeBackIn = Xp, t.easeBackOut = Vp, t.easeBackInOut = Wp, t.easeElastic = Qp, t.easeElasticIn = Jp, t.easeElasticOut = Qp, t.easeElasticInOut = Kp, t.forceCenter = Jd, t.forceCollide = vv, t.forceLink = _v, t.forceManyBody = xv, t.forceSimulation = mv, t.forceX = bv, t.forceY = wv, t.formatDefaultLocale = hr, t.formatLocale = qv, t.formatSpecifier = zv, t.precisionFixed = Lv, t.precisionPrefix = Uv, t.precisionRound = Dv, t.geoArea = j_, t.geoBounds = V_, t.geoCentroid = $_, t.geoCircle = sy, t.geoClipExtent = _y, t.geoDistance = wy, t.geoGraticule = vi, t.geoGraticule10 = _i, t.geoInterpolate = My, t.geoLength = my, t.geoPath = jy, t.geoAlbers = ng, t.geoAlbersUsa = eg, t.geoAzimuthalEqualArea = ig, t.geoAzimuthalEqualAreaRaw = rg, t.geoAzimuthalEquidistant = ug, t.geoAzimuthalEquidistantRaw = og, t.geoConicConformal = cg, t.geoConicConformalRaw = eo, t.geoConicEqualArea = tg, t.geoConicEqualAreaRaw = Zi, t.geoConicEquidistant = fg, t.geoConicEquidistantRaw = io, t.geoEquirectangular = sg, t.geoEquirectangularRaw = ro, t.geoGnomonic = lg, t.geoGnomonicRaw = oo, t.geoIdentity = hg, t.geoProjection = Xi, t.geoProjectionMutator = Vi, t.geoMercator = ag, t.geoMercatorRaw = Ki, t.geoOrthographic = pg, t.geoOrthographicRaw = ao, t.geoStereographic = dg, t.geoStereographicRaw = co, t.geoTransverseMercator = vg, t.geoTransverseMercatorRaw = so, t.geoRotation = cy, t.geoStream = F_, t.geoTransform = Zy, t.cluster = _g, t.hierarchy = xo, t.pack = Pg, t.packSiblings = Cg, t.packEnclose = Ag, t.partition = Lg, t.stratify = Fg, t.tree = Ig, t.treemap = Hg, t.treemapBinary = Xg, t.treemapDice = qg, t.treemapSlice = Yg, t.treemapSliceDice = Vg, t.treemapSquarify = jg, t.treemapResquarify = Wg, t.interpolate = mh, t.interpolateArray = hh, t.interpolateBasis = uh, t.interpolateBasisClosed = ah, t.interpolateDate = ph, t.interpolateNumber = dh, t.interpolateObject = vh, t.interpolateRound = xh, t.interpolateString = gh, t.interpolateTransformCss = Th, t.interpolateTransformSvg = Nh, t.interpolateZoom = Ch, t.interpolateRgb = sh, t.interpolateRgbBasis = fh, t.interpolateRgbBasisClosed = lh, t.interpolateHsl = zh, t.interpolateHslLong = Ph, t.interpolateLab = fn, t.interpolateHcl = Rh, t.interpolateHclLong = qh, t.interpolateCubehelix = Lh, t.interpolateCubehelixLong = Uh, t.quantize = Dh, t.path = Re, t.polygonArea = $g, t.polygonCentroid = Zg, t.polygonHull = Jg, t.polygonContains = Qg, t.polygonLength = Kg;
    t.quadtree = nr;
    t.queue = fu, t.randomUniform = em, t.randomNormal = rm, t.randomLogNormal = im, t.randomBates = um, t.randomIrwinHall = om, t.randomExponential = am, t.request = cm, t.html = fm, t.json = lm, t.text = hm, t.xml = pm, t.csv = vm, t.tsv = _m, t.scaleBand = vu, t.scalePoint = yu, t.scaleIdentity = Su, t.scaleLinear = ku, t.scaleLog = qu, t.scaleOrdinal = du, t.scaleImplicit = xm, t.scalePow = Uu, t.scaleSqrt = Du, t.scaleQuantile = Ou, t.scaleQuantize = Fu, t.scaleThreshold = Iu, t.scaleTime = Vx, t.scaleUtc = Wx, t.schemeCategory10 = Zx, t.schemeCategory20b = Gx, t.schemeCategory20c = Jx, t.schemeCategory20 = Qx, t.interpolateCubehelixDefault = Kx, t.interpolateRainbow = rb, t.interpolateWarm = tb, t.interpolateCool = nb, t.interpolateViridis = ib, t.interpolateMagma = ob, t.interpolateInferno = ub, t.interpolatePlasma = ab, t.scaleSequential = $a, t.creator = xf, t.local = x, t.matcher = Nf, t.mouse = zf, t.namespace = mf, t.namespaces = gf, t.select = pl, t.selectAll = dl, t.selection = dt, t.selector = Pf, t.selectorAll = qf, t.touch = vl, t.touches = _l, t.window = Kf, t.customEvent = S, t.arc = pb, t.area = _b, t.line = vb, t.pie = mb, t.radialArea = wb, t.radialLine = bb, t.symbol = Bb, t.symbols = Yb, t.symbolCircle = Mb, t.symbolCross = Tb, t.symbolDiamond = Sb, t.symbolSquare = Rb, t.symbolStar = Pb, t.symbolTriangle = Lb, t.symbolWye = Ib, t.curveBasisClosed = Xb, t.curveBasisOpen = Vb, t.curveBasis = Hb, t.curveBundle = Wb, t.curveCardinalClosed = Zb, t.curveCardinalOpen = Gb, t.curveCardinal = $b, t.curveCatmullRomClosed = Qb, t.curveCatmullRomOpen = Kb, t.curveCatmullRom = Jb, t.curveLinearClosed = tw, t.curveLinear = db, t.curveMonotoneX = Cc, t.curveMonotoneY = zc, t.curveNatural = nw, t.curveStep = ew, t.curveStepAfter = Uc, t.curveStepBefore = Lc, t.stack = uw, t.stackOffsetExpand = aw, t.stackOffsetNone = iw, t.stackOffsetSilhouette = cw, t.stackOffsetWiggle = sw, t.stackOrderAscending = fw, t.stackOrderDescending = lw, t.stackOrderInsideOut = hw, t.stackOrderNone = ow, t.stackOrderReverse = pw, t.timeInterval = Yu, t.timeMillisecond = Em, t.timeMilliseconds = Am, t.utcMillisecond = Em, t.utcMilliseconds = Am, t.timeSecond = Lm, t.timeSeconds = Um, t.utcSecond = Lm, t.utcSeconds = Um, t.timeMinute = Dm, t.timeMinutes = Om, t.timeHour = Fm, t.timeHours = Im, t.timeDay = Ym, t.timeDays = Bm, t.timeWeek = jm, t.timeWeeks = Gm, t.timeSunday = jm, t.timeSundays = Gm, t.timeMonday = Hm, t.timeMondays = Jm, t.timeTuesday = Xm, t.timeTuesdays = Qm, t.timeWednesday = Vm, t.timeWednesdays = Km, t.timeThursday = Wm, t.timeThursdays = tx, t.timeFriday = $m, t.timeFridays = nx, t.timeSaturday = Zm, t.timeSaturdays = ex, t.timeMonth = rx, t.timeMonths = ix, t.timeYear = ox, t.timeYears = ux, t.utcMinute = ax, t.utcMinutes = cx, t.utcHour = sx, t.utcHours = fx, t.utcDay = lx, t.utcDays = hx, t.utcWeek = px, t.utcWeeks = xx, t.utcSunday = px, t.utcSundays = xx, t.utcMonday = dx, t.utcMondays = bx, t.utcTuesday = vx, t.utcTuesdays = wx, t.utcWednesday = _x, t.utcWednesdays = Mx, t.utcThursday = yx, t.utcThursdays = Tx, t.utcFriday = gx, t.utcFridays = Nx, t.utcSaturday = mx, t.utcSaturdays = kx, t.utcMonth = Sx, t.utcMonths = Ex, t.utcYear = Ax, t.utcYears = zx, t.timeFormatDefaultLocale = Ya, t.timeFormatLocale = Wu, t.isoFormat = Dx, t.isoParse = Ox, t.now = pn, t.timer = _n, t.timerFlush = yn, t.timeout = Wh, t.interval = $h, t.transition = Kn, t.active = rd, t.interrupt = op, t.voronoi = Tw, t.zoom = Ew, t.zoomTransform = ms, t.zoomIdentity = kw, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});