function xt(a) {
    if (a === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a
}
function er(a, t) {
    a.prototype = Object.create(t.prototype),
    a.prototype.constructor = a,
    a.__proto__ = t
}
var rt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, $t = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, pi, K, D, lt = 1e8, M = 1 / lt, ni = Math.PI * 2, hn = ni / 4, cn = 0, ir = Math.sqrt, _n = Math.cos, dn = Math.sin, Y = function(t) {
    return typeof t == "string"
}, z = function(t) {
    return typeof t == "function"
}, wt = function(t) {
    return typeof t == "number"
}, Ne = function(t) {
    return typeof t > "u"
}, dt = function(t) {
    return typeof t == "object"
}, it = function(t) {
    return t !== !1
}, mi = function() {
    return typeof window < "u"
}, Ae = function(t) {
    return z(t) || Y(t)
}, rr = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Q = Array.isArray, si = /(?:-?\.?\d|\.)+/gi, gi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Vt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, $e = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, yi = /[+-]=-?[.\d]+/, nr = /[^,'"\[\]\s]+/gi, pn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, R, ct, oi, vi, ot = {}, ze = {}, sr, or = function(t) {
    return (ze = Nt(t, ot)) && j
}, Ve = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, de = function(t, e) {
    return !e && console.warn(t)
}, ar = function(t, e) {
    return t && (ot[t] = e) && ze && (ze[t] = e) || ot
}, pe = function() {
    return 0
}, mn = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, De = {
    suppressEvents: !0,
    kill: !1
}, gn = {
    suppressEvents: !0
}, xi = {}, Et = [], ai = {}, lr, tt = {}, Ze = {}, Ki = 30, Re = [], Ti = "", wi = function(t) {
    var e = t[0], i, r;
    if (dt(e) || z(e) || (t = [t]),
    !(i = (e._gsap || {}).harness)) {
        for (r = Re.length; r-- && !Re[r].targetTest(e); )
            ;
        i = Re[r]
    }
    for (r = t.length; r--; )
        t[r] && (t[r]._gsap || (t[r]._gsap = new Pi(t[r],i))) || t.splice(r, 1);
    return t
}, Ct = function(t) {
    return t._gsap || wi(ut(t))[0]._gsap
}, bi = function(t, e, i) {
    return (i = t[e]) && z(i) ? t[e]() : Ne(i) && t.getAttribute && t.getAttribute(e) || i
}, $ = function(t, e) {
    return (t = t.split(",")).forEach(e) || t
}, I = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, X = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, Xt = function(t, e) {
    var i = e.charAt(0)
      , r = parseFloat(e.substr(2));
    return t = parseFloat(t),
    i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
}, yn = function(t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
        ;
    return r < i
}, Ie = function() {
    var t = Et.length, e = Et.slice(0), i, r;
    for (ai = {},
    Et.length = 0,
    i = 0; i < t; i++)
        r = e[i],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, ur = function(t, e, i, r) {
    Et.length && !K && Ie(),
    t.render(e, i, r || K && e < 0 && (t._initted || t._startAt)),
    Et.length && !K && Ie()
}, fr = function(t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(nr).length < 2 ? e : Y(t) ? t.trim() : t
}, hr = function(t) {
    return t
}, ft = function(t, e) {
    for (var i in e)
        i in t || (t[i] = e[i]);
    return t
}, vn = function(t) {
    return function(e, i) {
        for (var r in i)
            r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
    }
}, Nt = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Qi = function a(t, e) {
    for (var i in e)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = dt(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t
}, He = function(t, e) {
    var i = {}, r;
    for (r in t)
        r in e || (i[r] = t[r]);
    return i
}, he = function(t) {
    var e = t.parent || R
      , i = t.keyframes ? vn(Q(t.keyframes)) : ft;
    if (it(t.inherit))
        for (; e; )
            i(t, e.vars.defaults),
            e = e.parent || e._dp;
    return t
}, xn = function(t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
        ;
    return i < 0
}, cr = function(t, e, i, r, n) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var s = t[r], o;
    if (n)
        for (o = e[n]; s && s[n] > o; )
            s = s._prev;
    return s ? (e._next = s._next,
    s._next = e) : (e._next = t[i],
    t[i] = e),
    e._next ? e._next._prev = e : t[r] = e,
    e._prev = s,
    e.parent = e._dp = t,
    e
}, Xe = function(t, e, i, r) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var n = e._prev
      , s = e._next;
    n ? n._next = s : t[i] === e && (t[i] = s),
    s ? s._prev = n : t[r] === e && (t[r] = n),
    e._next = e._prev = e.parent = null
}, Lt = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
    t._act = 0
}, Ht = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; )
            i._dirty = 1,
            i = i.parent;
    return t
}, Tn = function(t) {
    for (var e = t.parent; e && e.parent; )
        e._dirty = 1,
        e.totalDuration(),
        e = e.parent;
    return t
}, li = function(t, e, i, r) {
    return t._startAt && (K ? t._startAt.revert(De) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
}, wn = function a(t) {
    return !t || t._ts && a(t.parent)
}, ji = function(t) {
    return t._repeat ? Zt(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Zt = function(t, e) {
    var i = Math.floor(t /= e);
    return t && i === t ? i - 1 : i
}, Be = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, Ue = function(t) {
    return t._end = X(t._start + (t._tDur / Math.abs(t._ts || t._rts || M) || 0))
}, We = function(t, e) {
    var i = t._dp;
    return i && i.smoothChildTiming && t._ts && (t._start = X(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
    Ue(t),
    i._dirty || Ht(i, t)),
    t
}, _r = function(t, e) {
    var i;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Be(t.rawTime(), e),
    (!e._dur || ye(0, e.totalDuration(), i) - e._tTime > M) && e.render(i, !0)),
    Ht(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (i = t; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        t._zTime = -M
    }
}, _t = function(t, e, i, r) {
    return e.parent && Lt(e),
    e._start = X((wt(i) ? i : i || t !== R ? at(t, i, e) : t._time) + e._delay),
    e._end = X(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
    cr(t, e, "_first", "_last", t._sort ? "_start" : 0),
    ui(e) || (t._recent = e),
    r || _r(t, e),
    t._ts < 0 && We(t, t._tTime),
    t
}, dr = function(t, e) {
    return (ot.ScrollTrigger || Ve("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
}, pr = function(t, e, i, r, n) {
    if (Ei(t, e, n),
    !t._initted)
        return 1;
    if (!i && t._pt && !K && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && lr !== et.frame)
        return Et.push(t),
        t._lazy = [n, r],
        1
}, bn = function a(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e))
}, ui = function(t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart"
}, Sn = function(t, e, i, r) {
    var n = t.ratio, s = e < 0 || !e && (!t._start && bn(t) && !(!t._initted && ui(t)) || (t._ts < 0 || t._dp._ts < 0) && !ui(t)) ? 0 : 1, o = t._rDelay, l = 0, u, f, c;
    if (o && t._repeat && (l = ye(0, t._tDur, e),
    f = Zt(l, o),
    t._yoyo && f & 1 && (s = 1 - s),
    f !== Zt(t._tTime, o) && (n = 1 - s,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    s !== n || K || r || t._zTime === M || !e && t._zTime) {
        if (!t._initted && pr(t, e, r, i, l))
            return;
        for (c = t._zTime,
        t._zTime = e || (i ? M : 0),
        i || (i = e && !c),
        t.ratio = s,
        t._from && (s = 1 - s),
        t._time = 0,
        t._tTime = l,
        u = t._pt; u; )
            u.r(s, u.d),
            u = u._next;
        e < 0 && li(t, e, i, !0),
        t._onUpdate && !i && st(t, "onUpdate"),
        l && t._repeat && !i && t.parent && st(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === s && (s && Lt(t, 1),
        !i && !K && (st(t, s ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = e)
}, Pn = function(t, e, i) {
    var r;
    if (i > e)
        for (r = t._first; r && r._start <= i; ) {
            if (r.data === "isPause" && r._start > e)
                return r;
            r = r._next
        }
    else
        for (r = t._last; r && r._start >= i; ) {
            if (r.data === "isPause" && r._start < e)
                return r;
            r = r._prev
        }
}, Jt = function(t, e, i, r) {
    var n = t._repeat
      , s = X(e) || 0
      , o = t._tTime / t._tDur;
    return o && !r && (t._time *= s / t._dur),
    t._dur = s,
    t._tDur = n ? n < 0 ? 1e10 : X(s * (n + 1) + t._rDelay * n) : s,
    o > 0 && !r && We(t, t._tTime = t._tDur * o),
    t.parent && Ue(t),
    i || Ht(t.parent, t),
    t
}, $i = function(t) {
    return t instanceof q ? Ht(t) : Jt(t, t._dur)
}, On = {
    _start: 0,
    endTime: pe,
    totalDuration: pe
}, at = function a(t, e, i) {
    var r = t.labels, n = t._recent || On, s = t.duration() >= lt ? n.endTime(!1) : t._dur, o, l, u;
    return Y(e) && (isNaN(e) || e in r) ? (l = e.charAt(0),
    u = e.substr(-1) === "%",
    o = e.indexOf("="),
    l === "<" || l === ">" ? (o >= 0 && (e = e.replace(/=/, "")),
    (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = s),
    r[e]) : (l = parseFloat(e.charAt(o - 1) + e.substr(o + 1)),
    u && i && (l = l / 100 * (Q(i) ? i[0] : i).totalDuration()),
    o > 1 ? a(t, e.substr(0, o - 1), i) + l : s + l)) : e == null ? s : +e
}, ce = function(t, e, i) {
    var r = wt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, l;
    if (r && (s.duration = e[1]),
    s.parent = i,
    t) {
        for (o = s,
        l = i; l && !("immediateRender"in o); )
            o = l.vars.defaults || {},
            l = it(l.vars.inherit) && l.parent;
        s.immediateRender = it(o.immediateRender),
        t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
    }
    return new H(e[0],s,e[n + 1])
}, Mt = function(t, e) {
    return t || t === 0 ? e(t) : e
}, ye = function(t, e, i) {
    return i < t ? t : i > e ? e : i
}, G = function(t, e) {
    return !Y(t) || !(e = pn.exec(t)) ? "" : e[1]
}, kn = function(t, e, i) {
    return Mt(i, function(r) {
        return ye(t, e, r)
    })
}, fi = [].slice, mr = function(t, e) {
    return t && dt(t) && "length"in t && (!e && !t.length || t.length - 1 in t && dt(t[0])) && !t.nodeType && t !== ct
}, En = function(t, e, i) {
    return i === void 0 && (i = []),
    t.forEach(function(r) {
        var n;
        return Y(r) && !e || mr(r, 1) ? (n = i).push.apply(n, ut(r)) : i.push(r)
    }) || i
}, ut = function(t, e, i) {
    return D && !e && D.selector ? D.selector(t) : Y(t) && !i && (oi || !te()) ? fi.call((e || vi).querySelectorAll(t), 0) : Q(t) ? En(t, i) : mr(t) ? fi.call(t, 0) : t ? [t] : []
}, hi = function(t) {
    return t = ut(t)[0] || de("Invalid scope") || {},
    function(e) {
        var i = t.current || t.nativeElement || t;
        return ut(e, i.querySelectorAll ? i : i === t ? de("Invalid scope") || vi.createElement("div") : t)
    }
}, gr = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, yr = function(t) {
    if (z(t))
        return t;
    var e = dt(t) ? t : {
        each: t
    }
      , i = Bt(e.ease)
      , r = e.from || 0
      , n = parseFloat(e.base) || 0
      , s = {}
      , o = r > 0 && r < 1
      , l = isNaN(r) || o
      , u = e.axis
      , f = r
      , c = r;
    return Y(r) ? f = c = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !o && l && (f = r[0],
    c = r[1]),
    function(_, d, p) {
        var h = (p || e).length, m = s[h], y, v, x, T, g, b, S, P, w;
        if (!m) {
            if (w = e.grid === "auto" ? 0 : (e.grid || [1, lt])[1],
            !w) {
                for (S = -lt; S < (S = p[w++].getBoundingClientRect().left) && w < h; )
                    ;
                w < h && w--
            }
            for (m = s[h] = [],
            y = l ? Math.min(w, h) * f - .5 : r % w,
            v = w === lt ? 0 : l ? h * c / w - .5 : r / w | 0,
            S = 0,
            P = lt,
            b = 0; b < h; b++)
                x = b % w - y,
                T = v - (b / w | 0),
                m[b] = g = u ? Math.abs(u === "y" ? T : x) : ir(x * x + T * T),
                g > S && (S = g),
                g < P && (P = g);
            r === "random" && gr(m),
            m.max = S - P,
            m.min = P,
            m.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (w > h ? h - 1 : u ? u === "y" ? h / w : w : Math.max(w, h / w)) || 0) * (r === "edges" ? -1 : 1),
            m.b = h < 0 ? n - h : n,
            m.u = G(e.amount || e.each) || 0,
            i = i && h < 0 ? kr(i) : i
        }
        return h = (m[_] - m.min) / m.max || 0,
        X(m.b + (i ? i(h) : h) * m.v) + m.u
    }
}, ci = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(i) {
        var r = X(Math.round(parseFloat(i) / t) * t * e);
        return (r - r % 1) / e + (wt(i) ? 0 : G(i))
    }
}, vr = function(t, e) {
    var i = Q(t), r, n;
    return !i && dt(t) && (r = i = t.radius || lt,
    t.values ? (t = ut(t.values),
    (n = !wt(t[0])) && (r *= r)) : t = ci(t.increment)),
    Mt(e, i ? z(t) ? function(s) {
        return n = t(s),
        Math.abs(n - s) <= r ? n : s
    }
    : function(s) {
        for (var o = parseFloat(n ? s.x : s), l = parseFloat(n ? s.y : 0), u = lt, f = 0, c = t.length, _, d; c--; )
            n ? (_ = t[c].x - o,
            d = t[c].y - l,
            _ = _ * _ + d * d) : _ = Math.abs(t[c] - o),
            _ < u && (u = _,
            f = c);
        return f = !r || u <= r ? t[f] : s,
        n || f === s || wt(s) ? f : f + G(s)
    }
    : ci(t))
}, xr = function(t, e, i, r) {
    return Mt(Q(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
        return Q(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
    })
}, Cn = function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
    return function(r) {
        return e.reduce(function(n, s) {
            return s(n)
        }, r)
    }
}, Ln = function(t, e) {
    return function(i) {
        return t(parseFloat(i)) + (e || G(i))
    }
}, Mn = function(t, e, i) {
    return wr(t, e, 0, 1, i)
}, Tr = function(t, e, i) {
    return Mt(i, function(r) {
        return t[~~e(r)]
    })
}, An = function a(t, e, i) {
    var r = e - t;
    return Q(t) ? Tr(t, a(0, t.length), e) : Mt(i, function(n) {
        return (r + (n - t) % r) % r + t
    })
}, Dn = function a(t, e, i) {
    var r = e - t
      , n = r * 2;
    return Q(t) ? Tr(t, a(0, t.length - 1), e) : Mt(i, function(s) {
        return s = (n + (s - t) % n) % n || 0,
        t + (s > r ? n - s : s)
    })
}, ee = function(t) {
    for (var e = 0, i = "", r, n, s, o; ~(r = t.indexOf("random(", e)); )
        s = t.indexOf(")", r),
        o = t.charAt(r + 7) === "[",
        n = t.substr(r + 7, s - r - 7).match(o ? nr : si),
        i += t.substr(e, r - e) + xr(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5),
        e = s + 1;
    return i + t.substr(e, t.length - e)
}, wr = function(t, e, i, r, n) {
    var s = e - t
      , o = r - i;
    return Mt(n, function(l) {
        return i + ((l - t) / s * o || 0)
    })
}, Rn = function a(t, e, i, r) {
    var n = isNaN(t + e) ? 0 : function(d) {
        return (1 - d) * t + d * e
    }
    ;
    if (!n) {
        var s = Y(t), o = {}, l, u, f, c, _;
        if (i === !0 && (r = 1) && (i = null),
        s)
            t = {
                p: t
            },
            e = {
                p: e
            };
        else if (Q(t) && !Q(e)) {
            for (f = [],
            c = t.length,
            _ = c - 2,
            u = 1; u < c; u++)
                f.push(a(t[u - 1], t[u]));
            c--,
            n = function(p) {
                p *= c;
                var h = Math.min(_, ~~p);
                return f[h](p - h)
            }
            ,
            i = e
        } else
            r || (t = Nt(Q(t) ? [] : {}, t));
        if (!f) {
            for (l in e)
                Oi.call(o, t, l, "get", e[l]);
            n = function(p) {
                return Mi(p, o) || (s ? t.p : t)
            }
        }
    }
    return Mt(i, n)
}, Zi = function(t, e, i) {
    var r = t.labels, n = lt, s, o, l;
    for (s in r)
        o = r[s] - e,
        o < 0 == !!i && o && n > (o = Math.abs(o)) && (l = s,
        n = o);
    return l
}, st = function(t, e, i) {
    var r = t.vars, n = r[e], s = D, o = t._ctx, l, u, f;
    if (n)
        return l = r[e + "Params"],
        u = r.callbackScope || t,
        i && Et.length && Ie(),
        o && (D = o),
        f = l ? n.apply(u, l) : n.call(u),
        D = s,
        f
}, ue = function(t) {
    return Lt(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!K),
    t.progress() < 1 && st(t, "onInterrupt"),
    t
}, jt, br = [], Sr = function(t) {
    if (t)
        if (t = !t.name && t.default || t,
        mi() || t.headless) {
            var e = t.name
              , i = z(t)
              , r = e && !i && t.init ? function() {
                this._props = []
            }
            : t
              , n = {
                init: pe,
                render: Mi,
                add: Oi,
                kill: jn,
                modifier: Qn,
                rawVars: 0
            }
              , s = {
                targetTest: 0,
                get: 0,
                getSetter: qe,
                aliases: {},
                register: 0
            };
            if (te(),
            t !== r) {
                if (tt[e])
                    return;
                ft(r, ft(He(t, n), s)),
                Nt(r.prototype, Nt(n, He(t, s))),
                tt[r.prop = e] = r,
                t.targetTest && (Re.push(r),
                xi[e] = 1),
                e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            ar(e, r),
            t.register && t.register(j, r, Z)
        } else
            br.push(t)
}, E = 255, fe = {
    aqua: [0, E, E],
    lime: [0, E, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, E],
    navy: [0, 0, 128],
    white: [E, E, E],
    olive: [128, 128, 0],
    yellow: [E, E, 0],
    orange: [E, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [E, 0, 0],
    pink: [E, 192, 203],
    cyan: [0, E, E],
    transparent: [E, E, E, 0]
}, Je = function(t, e, i) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * E + .5 | 0
}, Pr = function(t, e, i) {
    var r = t ? wt(t) ? [t >> 16, t >> 8 & E, t & E] : 0 : fe.black, n, s, o, l, u, f, c, _, d, p;
    if (!r) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
        fe[t])
            r = fe[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (n = t.charAt(1),
            s = t.charAt(2),
            o = t.charAt(3),
            t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return r = parseInt(t.substr(1, 6), 16),
                [r >> 16, r >> 8 & E, r & E, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
            r = [t >> 16, t >> 8 & E, t & E]
        } else if (t.substr(0, 3) === "hsl") {
            if (r = p = t.match(si),
            !e)
                l = +r[0] % 360 / 360,
                u = +r[1] / 100,
                f = +r[2] / 100,
                s = f <= .5 ? f * (u + 1) : f + u - f * u,
                n = f * 2 - s,
                r.length > 3 && (r[3] *= 1),
                r[0] = Je(l + 1 / 3, n, s),
                r[1] = Je(l, n, s),
                r[2] = Je(l - 1 / 3, n, s);
            else if (~t.indexOf("="))
                return r = t.match(gi),
                i && r.length < 4 && (r[3] = 1),
                r
        } else
            r = t.match(si) || fe.transparent;
        r = r.map(Number)
    }
    return e && !p && (n = r[0] / E,
    s = r[1] / E,
    o = r[2] / E,
    c = Math.max(n, s, o),
    _ = Math.min(n, s, o),
    f = (c + _) / 2,
    c === _ ? l = u = 0 : (d = c - _,
    u = f > .5 ? d / (2 - c - _) : d / (c + _),
    l = c === n ? (s - o) / d + (s < o ? 6 : 0) : c === s ? (o - n) / d + 2 : (n - s) / d + 4,
    l *= 60),
    r[0] = ~~(l + .5),
    r[1] = ~~(u * 100 + .5),
    r[2] = ~~(f * 100 + .5)),
    i && r.length < 4 && (r[3] = 1),
    r
}, Or = function(t) {
    var e = []
      , i = []
      , r = -1;
    return t.split(Tt).forEach(function(n) {
        var s = n.match(Vt) || [];
        e.push.apply(e, s),
        i.push(r += s.length + 1)
    }),
    e.c = i,
    e
}, Ji = function(t, e, i) {
    var r = "", n = (t + r).match(Tt), s = e ? "hsla(" : "rgba(", o = 0, l, u, f, c;
    if (!n)
        return t;
    if (n = n.map(function(_) {
        return (_ = Pr(_, e, 1)) && s + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")"
    }),
    i && (f = Or(t),
    l = i.c,
    l.join(r) !== f.c.join(r)))
        for (u = t.replace(Tt, "1").split(Vt),
        c = u.length - 1; o < c; o++)
            r += u[o] + (~l.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : i).shift());
    if (!u)
        for (u = t.split(Tt),
        c = u.length - 1; o < c; o++)
            r += u[o] + n[o];
    return r + u[c]
}, Tt = function() {
    var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in fe)
        a += "|" + t + "\\b";
    return new RegExp(a + ")","gi")
}(), Fn = /hsl[a]?\(/, Si = function(t) {
    var e = t.join(" "), i;
    if (Tt.lastIndex = 0,
    Tt.test(e))
        return i = Fn.test(e),
        t[1] = Ji(t[1], i),
        t[0] = Ji(t[0], i, Or(t[1])),
        !0
}, me, et = function() {
    var a = Date.now, t = 500, e = 33, i = a(), r = i, n = 1e3 / 240, s = n, o = [], l, u, f, c, _, d, p = function h(m) {
        var y = a() - r, v = m === !0, x, T, g, b;
        if ((y > t || y < 0) && (i += y - e),
        r += y,
        g = r - i,
        x = g - s,
        (x > 0 || v) && (b = ++c.frame,
        _ = g - c.time * 1e3,
        c.time = g = g / 1e3,
        s += x + (x >= n ? 4 : n - x),
        T = 1),
        v || (l = u(h)),
        T)
            for (d = 0; d < o.length; d++)
                o[d](g, _, b, m)
    };
    return c = {
        time: 0,
        frame: 0,
        tick: function() {
            p(!0)
        },
        deltaRatio: function(m) {
            return _ / (1e3 / (m || 60))
        },
        wake: function() {
            sr && (!oi && mi() && (ct = oi = window,
            vi = ct.document || {},
            ot.gsap = j,
            (ct.gsapVersions || (ct.gsapVersions = [])).push(j.version),
            or(ze || ct.GreenSockGlobals || !ct.gsap && ct || {}),
            br.forEach(Sr)),
            f = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            l && c.sleep(),
            u = f || function(m) {
                return setTimeout(m, s - c.time * 1e3 + 1 | 0)
            }
            ,
            me = 1,
            p(2))
        },
        sleep: function() {
            (f ? cancelAnimationFrame : clearTimeout)(l),
            me = 0,
            u = pe
        },
        lagSmoothing: function(m, y) {
            t = m || 1 / 0,
            e = Math.min(y || 33, t)
        },
        fps: function(m) {
            n = 1e3 / (m || 240),
            s = c.time * 1e3 + n
        },
        add: function(m, y, v) {
            var x = y ? function(T, g, b, S) {
                m(T, g, b, S),
                c.remove(x)
            }
            : m;
            return c.remove(m),
            o[v ? "unshift" : "push"](x),
            te(),
            x
        },
        remove: function(m, y) {
            ~(y = o.indexOf(m)) && o.splice(y, 1) && d >= y && d--
        },
        _listeners: o
    },
    c
}(), te = function() {
    return !me && et.wake()
}, O = {}, zn = /^[\d.\-M][\d.\-,\s]/, In = /["']/g, Hn = function(t) {
    for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, l, u; n < s; n++)
        l = i[n],
        o = n !== s - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, o),
        e[r] = isNaN(u) ? u.replace(In, "").trim() : +u,
        r = l.substr(o + 1).trim();
    return e
}, Bn = function(t) {
    var e = t.indexOf("(") + 1
      , i = t.indexOf(")")
      , r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
}, Yn = function(t) {
    var e = (t + "").split("(")
      , i = O[e[0]];
    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Hn(e[1])] : Bn(t).split(",").map(fr)) : O._CE && zn.test(t) ? O._CE("", t) : i
}, kr = function(t) {
    return function(e) {
        return 1 - t(1 - e)
    }
}, Er = function a(t, e) {
    for (var i = t._first, r; i; )
        i instanceof q ? a(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? a(i.timeline, e) : (r = i._ease,
        i._ease = i._yEase,
        i._yEase = r,
        i._yoyo = e)),
        i = i._next
}, Bt = function(t, e) {
    return t && (z(t) ? t : O[t] || Yn(t)) || e
}, Ut = function(t, e, i, r) {
    i === void 0 && (i = function(l) {
        return 1 - e(1 - l)
    }
    ),
    r === void 0 && (r = function(l) {
        return l < .5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2
    }
    );
    var n = {
        easeIn: e,
        easeOut: i,
        easeInOut: r
    }, s;
    return $(t, function(o) {
        O[o] = ot[o] = n,
        O[s = o.toLowerCase()] = i;
        for (var l in n)
            O[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = O[o + "." + l] = n[l]
    }),
    n
}, Cr = function(t) {
    return function(e) {
        return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
    }
}, ti = function a(t, e, i) {
    var r = e >= 1 ? e : 1
      , n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1)
      , s = n / ni * (Math.asin(1 / r) || 0)
      , o = function(f) {
        return f === 1 ? 1 : r * Math.pow(2, -10 * f) * dn((f - s) * n) + 1
    }
      , l = t === "out" ? o : t === "in" ? function(u) {
        return 1 - o(1 - u)
    }
    : Cr(o);
    return n = ni / n,
    l.config = function(u, f) {
        return a(t, u, f)
    }
    ,
    l
}, ei = function a(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function(s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0
    }
      , r = t === "out" ? i : t === "in" ? function(n) {
        return 1 - i(1 - n)
    }
    : Cr(i);
    return r.config = function(n) {
        return a(t, n)
    }
    ,
    r
};
$("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
    var e = t < 5 ? t + 1 : t;
    Ut(a + ",Power" + (e - 1), t ? function(i) {
        return Math.pow(i, e)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, e)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
    })
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Ut("Elastic", ti("in"), ti("out"), ti());
(function(a, t) {
    var e = 1 / t
      , i = 2 * e
      , r = 2.5 * e
      , n = function(o) {
        return o < e ? a * o * o : o < i ? a * Math.pow(o - 1.5 / t, 2) + .75 : o < r ? a * (o -= 2.25 / t) * o + .9375 : a * Math.pow(o - 2.625 / t, 2) + .984375
    };
    Ut("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
}
)(7.5625, 2.75);
Ut("Expo", function(a) {
    return a ? Math.pow(2, 10 * (a - 1)) : 0
});
Ut("Circ", function(a) {
    return -(ir(1 - a * a) - 1)
});
Ut("Sine", function(a) {
    return a === 1 ? 1 : -_n(a * hn) + 1
});
Ut("Back", ei("in"), ei("out"), ei());
O.SteppedEase = O.steps = ot.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t
          , r = t + (e ? 0 : 1)
          , n = e ? 1 : 0
          , s = 1 - M;
        return function(o) {
            return ((r * ye(0, s, o) | 0) + n) * i
        }
    }
};
$t.ease = O["quad.out"];
$("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
    return Ti += a + "," + a + "Params,"
});
var Pi = function(t, e) {
    this.id = cn++,
    t._gsap = this,
    this.target = t,
    this.harness = e,
    this.get = e ? e.get : bi,
    this.set = e ? e.getSetter : qe
}
  , ge = function() {
    function a(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        Jt(this, +e.duration, 1, 1),
        this.data = e.data,
        D && (this._ctx = D,
        D.data.push(this)),
        me || et.wake()
    }
    var t = a.prototype;
    return t.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    t.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        Jt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(i, r) {
        if (te(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (We(this, i),
            !n._dp || n.parent || _r(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === M || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        ur(this, i, r)),
        this
    }
    ,
    t.time = function(i, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ji(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
    }
    ,
    t.totalProgress = function(i, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    t.progress = function(i, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ji(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    t.iteration = function(i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Zt(this._tTime, n) + 1 : 1
    }
    ,
    t.timeScale = function(i, r) {
        if (!arguments.length)
            return this._rts === -M ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var n = this.parent && this._ts ? Be(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -M ? 0 : this._rts,
        this.totalTime(ye(-Math.abs(this._delay), this._tDur, n), r !== !1),
        Ue(this),
        Tn(this)
    }
    ,
    t.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (te(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== M && (this._tTime -= M)))),
        this) : this._ps
    }
    ,
    t.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && _t(r, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(i) {
        return this._start + (it(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(i) {
        var r = this.parent || this._dp;
        return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Be(r.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(i) {
        i === void 0 && (i = gn);
        var r = K;
        return K = i,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
        this.totalTime(-.01, i.suppressEvents)),
        this.data !== "nested" && i.kill !== !1 && this.kill(),
        K = r,
        this
    }
    ,
    t.globalTime = function(i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            n = r._start + n / (Math.abs(r._ts) || 1),
            r = r._dp;
        return !this.parent && this._sat ? this._sat.globalTime(i) : n
    }
    ,
    t.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        $i(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(i) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = i,
            $i(this),
            r ? this.time(r) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    t.seek = function(i, r) {
        return this.totalTime(at(this, i), it(r))
    }
    ,
    t.restart = function(i, r) {
        return this.play().totalTime(i ? -this._delay : 0, it(r))
    }
    ,
    t.play = function(i, r) {
        return i != null && this.seek(i, r),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(i, r) {
        return i != null && this.seek(i || this.totalDuration(), r),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(i, r) {
        return i != null && this.seek(i, r),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -M : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -M,
        this
    }
    ,
    t.isActive = function() {
        var i = this.parent || this._dp, r = this._start, n;
        return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - M)
    }
    ,
    t.eventCallback = function(i, r, n) {
        var s = this.vars;
        return arguments.length > 1 ? (r ? (s[i] = r,
        n && (s[i + "Params"] = n),
        i === "onUpdate" && (this._onUpdate = r)) : delete s[i],
        this) : s[i]
    }
    ,
    t.then = function(i) {
        var r = this;
        return new Promise(function(n) {
            var s = z(i) ? i : hr
              , o = function() {
                var u = r.then;
                r.then = null,
                z(s) && (s = s(r)) && (s.then || s === r) && (r.then = u),
                n(s),
                r.then = u
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o
        }
        )
    }
    ,
    t.kill = function() {
        ue(this)
    }
    ,
    a
}();
ft(ge.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -M,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var q = function(a) {
    er(t, a);
    function t(i, r) {
        var n;
        return i === void 0 && (i = {}),
        n = a.call(this, i) || this,
        n.labels = {},
        n.smoothChildTiming = !!i.smoothChildTiming,
        n.autoRemoveChildren = !!i.autoRemoveChildren,
        n._sort = it(i.sortChildren),
        R && _t(i.parent || R, xt(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && dr(xt(n), i.scrollTrigger),
        n
    }
    var e = t.prototype;
    return e.to = function(r, n, s) {
        return ce(0, arguments, this),
        this
    }
    ,
    e.from = function(r, n, s) {
        return ce(1, arguments, this),
        this
    }
    ,
    e.fromTo = function(r, n, s, o) {
        return ce(2, arguments, this),
        this
    }
    ,
    e.set = function(r, n, s) {
        return n.duration = 0,
        n.parent = this,
        he(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new H(r,n,at(this, s),1),
        this
    }
    ,
    e.call = function(r, n, s) {
        return _t(this, H.delayedCall(0, r, n), s)
    }
    ,
    e.staggerTo = function(r, n, s, o, l, u, f) {
        return s.duration = n,
        s.stagger = s.stagger || o,
        s.onComplete = u,
        s.onCompleteParams = f,
        s.parent = this,
        new H(r,s,at(this, l)),
        this
    }
    ,
    e.staggerFrom = function(r, n, s, o, l, u, f) {
        return s.runBackwards = 1,
        he(s).immediateRender = it(s.immediateRender),
        this.staggerTo(r, n, s, o, l, u, f)
    }
    ,
    e.staggerFromTo = function(r, n, s, o, l, u, f, c) {
        return o.startAt = s,
        he(o).immediateRender = it(o.immediateRender),
        this.staggerTo(r, n, o, l, u, f, c)
    }
    ,
    e.render = function(r, n, s) {
        var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = r <= 0 ? 0 : X(r), c = this._zTime < 0 != r < 0 && (this._initted || !u), _, d, p, h, m, y, v, x, T, g, b, S;
        if (this !== R && f > l && r >= 0 && (f = l),
        f !== this._tTime || s || c) {
            if (o !== this._time && u && (f += this._time - o,
            r += this._time - o),
            _ = f,
            T = this._start,
            x = this._ts,
            y = !x,
            c && (u || (o = this._zTime),
            (r || !n) && (this._zTime = r)),
            this._repeat) {
                if (b = this._yoyo,
                m = u + this._rDelay,
                this._repeat < -1 && r < 0)
                    return this.totalTime(m * 100 + r, n, s);
                if (_ = X(f % m),
                f === l ? (h = this._repeat,
                _ = u) : (h = ~~(f / m),
                h && h === f / m && (_ = u,
                h--),
                _ > u && (_ = u)),
                g = Zt(this._tTime, m),
                !o && this._tTime && g !== h && this._tTime - g * m - this._dur <= 0 && (g = h),
                b && h & 1 && (_ = u - _,
                S = 1),
                h !== g && !this._lock) {
                    var P = b && g & 1
                      , w = P === (b && h & 1);
                    if (h < g && (P = !P),
                    o = P ? 0 : f % u ? u : f,
                    this._lock = 1,
                    this.render(o || (S ? 0 : X(h * m)), n, !u)._lock = 0,
                    this._tTime = f,
                    !n && this.parent && st(this, "onRepeat"),
                    this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                    o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    w && (this._lock = 2,
                    o = P ? u : -1e-4,
                    this.render(o, !0),
                    this.vars.repeatRefresh && !S && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !y)
                        return this;
                    Er(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (v = Pn(this, X(o), X(_)),
            v && (f -= _ - (_ = v._start))),
            this._tTime = f,
            this._time = _,
            this._act = !x,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = r,
            o = 0),
            !o && _ && !n && !h && (st(this, "onStart"),
            this._tTime !== f))
                return this;
            if (_ >= o && r >= 0)
                for (d = this._first; d; ) {
                    if (p = d._next,
                    (d._act || _ >= d._start) && d._ts && v !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, n, s),
                        _ !== this._time || !this._ts && !y) {
                            v = 0,
                            p && (f += this._zTime = -M);
                            break
                        }
                    }
                    d = p
                }
            else {
                d = this._last;
                for (var k = r < 0 ? r : _; d; ) {
                    if (p = d._prev,
                    (d._act || k <= d._end) && d._ts && v !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, n, s || K && (d._initted || d._startAt)),
                        _ !== this._time || !this._ts && !y) {
                            v = 0,
                            p && (f += this._zTime = k ? -M : M);
                            break
                        }
                    }
                    d = p
                }
            }
            if (v && !n && (this.pause(),
            v.render(_ >= o ? 0 : -M)._zTime = _ >= o ? 1 : -1,
            this._ts))
                return this._start = T,
                Ue(this),
                this.render(r, n, s);
            this._onUpdate && !n && st(this, "onUpdate", !0),
            (f === l && this._tTime >= this.totalDuration() || !f && o) && (T === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Lt(this, 1),
            !n && !(r < 0 && !o) && (f || o || !l) && (st(this, f === l && r >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    e.add = function(r, n) {
        var s = this;
        if (wt(n) || (n = at(this, n, r)),
        !(r instanceof ge)) {
            if (Q(r))
                return r.forEach(function(o) {
                    return s.add(o, n)
                }),
                this;
            if (Y(r))
                return this.addLabel(r, n);
            if (z(r))
                r = H.delayedCall(0, r);
            else
                return this
        }
        return this !== r ? _t(this, r, n) : this
    }
    ,
    e.getChildren = function(r, n, s, o) {
        r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -lt);
        for (var l = [], u = this._first; u; )
            u._start >= o && (u instanceof H ? n && l.push(u) : (s && l.push(u),
            r && l.push.apply(l, u.getChildren(!0, n, s)))),
            u = u._next;
        return l
    }
    ,
    e.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
            if (n[s].vars.id === r)
                return n[s]
    }
    ,
    e.remove = function(r) {
        return Y(r) ? this.removeLabel(r) : z(r) ? this.killTweensOf(r) : (Xe(this, r),
        r === this._recent && (this._recent = this._last),
        Ht(this))
    }
    ,
    e.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = X(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
        a.prototype.totalTime.call(this, r, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    e.addLabel = function(r, n) {
        return this.labels[r] = at(this, n),
        this
    }
    ,
    e.removeLabel = function(r) {
        return delete this.labels[r],
        this
    }
    ,
    e.addPause = function(r, n, s) {
        var o = H.delayedCall(0, n || pe, s);
        return o.data = "isPause",
        this._hasPause = 1,
        _t(this, o, at(this, r))
    }
    ,
    e.removePause = function(r) {
        var n = this._first;
        for (r = at(this, r); n; )
            n._start === r && n.data === "isPause" && Lt(n),
            n = n._next
    }
    ,
    e.killTweensOf = function(r, n, s) {
        for (var o = this.getTweensOf(r, s), l = o.length; l--; )
            kt !== o[l] && o[l].kill(r, n);
        return this
    }
    ,
    e.getTweensOf = function(r, n) {
        for (var s = [], o = ut(r), l = this._first, u = wt(n), f; l; )
            l instanceof H ? yn(l._targets, o) && (u ? (!kt || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && s.push(l) : (f = l.getTweensOf(o, n)).length && s.push.apply(s, f),
            l = l._next;
        return s
    }
    ,
    e.tweenTo = function(r, n) {
        n = n || {};
        var s = this, o = at(s, r), l = n, u = l.startAt, f = l.onStart, c = l.onStartParams, _ = l.immediateRender, d, p = H.to(s, ft({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: o,
            overwrite: "auto",
            duration: n.duration || Math.abs((o - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || M,
            onStart: function() {
                if (s.pause(),
                !d) {
                    var m = n.duration || Math.abs((o - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                    p._dur !== m && Jt(p, m, 0, 1).render(p._time, !0, !0),
                    d = 1
                }
                f && f.apply(p, c || [])
            }
        }, n));
        return _ ? p.render(0) : p
    }
    ,
    e.tweenFromTo = function(r, n, s) {
        return this.tweenTo(n, ft({
            startAt: {
                time: at(this, r)
            }
        }, s))
    }
    ,
    e.recent = function() {
        return this._recent
    }
    ,
    e.nextLabel = function(r) {
        return r === void 0 && (r = this._time),
        Zi(this, at(this, r))
    }
    ,
    e.previousLabel = function(r) {
        return r === void 0 && (r = this._time),
        Zi(this, at(this, r), 1)
    }
    ,
    e.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + M)
    }
    ,
    e.shiftChildren = function(r, n, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, l = this.labels, u; o; )
            o._start >= s && (o._start += r,
            o._end += r),
            o = o._next;
        if (n)
            for (u in l)
                l[u] >= s && (l[u] += r);
        return Ht(this)
    }
    ,
    e.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(r),
            n = n._next;
        return a.prototype.invalidate.call(this, r)
    }
    ,
    e.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n; )
            s = n._next,
            this.remove(n),
            n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Ht(this)
    }
    ,
    e.totalDuration = function(r) {
        var n = 0, s = this, o = s._last, l = lt, u, f, c;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (c = s.parent; o; )
                u = o._prev,
                o._dirty && o.totalDuration(),
                f = o._start,
                f > l && s._sort && o._ts && !s._lock ? (s._lock = 1,
                _t(s, o, f - o._delay, 1)._lock = 0) : l = f,
                f < 0 && o._ts && (n -= f,
                (!c && !s._dp || c && c.smoothChildTiming) && (s._start += f / s._ts,
                s._time -= f,
                s._tTime -= f),
                s.shiftChildren(-f, !1, -1 / 0),
                l = 0),
                o._end > n && o._ts && (n = o._end),
                o = u;
            Jt(s, s === R && s._time > n ? s._time : n, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    t.updateRoot = function(r) {
        if (R._ts && (ur(R, Be(r, R)),
        lr = et.frame),
        et.frame >= Ki) {
            Ki += rt.autoSleep || 120;
            var n = R._first;
            if ((!n || !n._ts) && rt.autoSleep && et._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || et.sleep()
            }
        }
    }
    ,
    t
}(ge);
ft(q.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Nn = function(t, e, i, r, n, s, o) {
    var l = new Z(this._pt,t,e,0,1,Li,null,n), u = 0, f = 0, c, _, d, p, h, m, y, v;
    for (l.b = i,
    l.e = r,
    i += "",
    r += "",
    (y = ~r.indexOf("random(")) && (r = ee(r)),
    s && (v = [i, r],
    s(v, t, e),
    i = v[0],
    r = v[1]),
    _ = i.match($e) || []; c = $e.exec(r); )
        p = c[0],
        h = r.substring(u, c.index),
        d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1),
        p !== _[f++] && (m = parseFloat(_[f - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: h || f === 1 ? h : ",",
            s: m,
            c: p.charAt(1) === "=" ? Xt(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0
        },
        u = $e.lastIndex);
    return l.c = u < r.length ? r.substring(u, r.length) : "",
    l.fp = o,
    (yi.test(r) || y) && (l.e = 0),
    this._pt = l,
    l
}, Oi = function(t, e, i, r, n, s, o, l, u, f) {
    z(r) && (r = r(n || 0, t, s));
    var c = t[e], _ = i !== "get" ? i : z(c) ? u ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c, d = z(c) ? u ? qn : Ar : Ci, p;
    if (Y(r) && (~r.indexOf("random(") && (r = ee(r)),
    r.charAt(1) === "=" && (p = Xt(_, r) + (G(_) || 0),
    (p || p === 0) && (r = p))),
    !f || _ !== r || _i)
        return !isNaN(_ * r) && r !== "" ? (p = new Z(this._pt,t,e,+_ || 0,r - (_ || 0),typeof c == "boolean" ? Kn : Dr,0,d),
        u && (p.fp = u),
        o && p.modifier(o, this, t),
        this._pt = p) : (!c && !(e in t) && Ve(e, r),
        Nn.call(this, t, e, _, r, d, l || rt.stringFilter, u))
}, Vn = function(t, e, i, r, n) {
    if (z(t) && (t = _e(t, n, e, i, r)),
    !dt(t) || t.style && t.nodeType || Q(t) || rr(t))
        return Y(t) ? _e(t, n, e, i, r) : t;
    var s = {}, o;
    for (o in t)
        s[o] = _e(t[o], n, e, i, r);
    return s
}, ki = function(t, e, i, r, n, s) {
    var o, l, u, f;
    if (tt[t] && (o = new tt[t]).init(n, o.rawVars ? e[t] : Vn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = l = new Z(i._pt,n,t,0,1,o.render,o,0,o.priority),
    i !== jt))
        for (u = i._ptLookup[i._targets.indexOf(n)],
        f = o._props.length; f--; )
            u[o._props[f]] = l;
    return o
}, kt, _i, Ei = function a(t, e, i) {
    var r = t.vars, n = r.ease, s = r.startAt, o = r.immediateRender, l = r.lazy, u = r.onUpdate, f = r.runBackwards, c = r.yoyoEase, _ = r.keyframes, d = r.autoRevert, p = t._dur, h = t._startAt, m = t._targets, y = t.parent, v = y && y.data === "nested" ? y.vars.targets : m, x = t._overwrite === "auto" && !pi, T = t.timeline, g, b, S, P, w, k, A, C, L, W, N, B, V;
    if (T && (!_ || !n) && (n = "none"),
    t._ease = Bt(n, $t.ease),
    t._yEase = c ? kr(Bt(c === !0 ? n : c, $t.ease)) : 0,
    c && t._yoyo && !t._repeat && (c = t._yEase,
    t._yEase = t._ease,
    t._ease = c),
    t._from = !T && !!r.runBackwards,
    !T || _ && !r.stagger) {
        if (C = m[0] ? Ct(m[0]).harness : 0,
        B = C && r[C.prop],
        g = He(r, xi),
        h && (h._zTime < 0 && h.progress(1),
        e < 0 && f && o && !d ? h.render(-1, !0) : h.revert(f && p ? De : mn),
        h._lazy = 0),
        s) {
            if (Lt(t._startAt = H.set(m, ft({
                data: "isStart",
                overwrite: !1,
                parent: y,
                immediateRender: !0,
                lazy: !h && it(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return st(t, "onUpdate")
                }
                ,
                stagger: 0
            }, s))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (K || !o && !d) && t._startAt.revert(De),
            o && p && e <= 0 && i <= 0) {
                e && (t._zTime = e);
                return
            }
        } else if (f && p && !h) {
            if (e && (o = !1),
            S = ft({
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !h && it(l),
                immediateRender: o,
                stagger: 0,
                parent: y
            }, g),
            B && (S[C.prop] = B),
            Lt(t._startAt = H.set(m, S)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (K ? t._startAt.revert(De) : t._startAt.render(-1, !0)),
            t._zTime = e,
            !o)
                a(t._startAt, M, M);
            else if (!e)
                return
        }
        for (t._pt = t._ptCache = 0,
        l = p && it(l) || l && !p,
        b = 0; b < m.length; b++) {
            if (w = m[b],
            A = w._gsap || wi(m)[b]._gsap,
            t._ptLookup[b] = W = {},
            ai[A.id] && Et.length && Ie(),
            N = v === m ? b : v.indexOf(w),
            C && (L = new C).init(w, B || g, t, N, v) !== !1 && (t._pt = P = new Z(t._pt,w,L.name,0,1,L.render,L,0,L.priority),
            L._props.forEach(function(ht) {
                W[ht] = P
            }),
            L.priority && (k = 1)),
            !C || B)
                for (S in g)
                    tt[S] && (L = ki(S, g, t, N, w, v)) ? L.priority && (k = 1) : W[S] = P = Oi.call(t, w, S, "get", g[S], N, v, 0, r.stringFilter);
            t._op && t._op[b] && t.kill(w, t._op[b]),
            x && t._pt && (kt = t,
            R.killTweensOf(w, W, t.globalTime(e)),
            V = !t.parent,
            kt = 0),
            t._pt && l && (ai[A.id] = 1)
        }
        k && Ai(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = u,
    t._initted = (!t._op || t._pt) && !V,
    _ && e <= 0 && T.render(lt, !0, !0)
}, Xn = function(t, e, i, r, n, s, o, l) {
    var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], f, c, _, d;
    if (!u)
        for (u = t._ptCache[e] = [],
        _ = t._ptLookup,
        d = t._targets.length; d--; ) {
            if (f = _[d][e],
            f && f.d && f.d._pt)
                for (f = f.d._pt; f && f.p !== e && f.fp !== e; )
                    f = f._next;
            if (!f)
                return _i = 1,
                t.vars[e] = "+=0",
                Ei(t, o),
                _i = 0,
                l ? de(e + " not eligible for reset") : 1;
            u.push(f)
        }
    for (d = u.length; d--; )
        c = u[d],
        f = c._pt || c,
        f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c,
        f.c = i - f.s,
        c.e && (c.e = I(i) + G(c.e)),
        c.b && (c.b = f.s + G(c.b))
}, Un = function(t, e) {
    var i = t[0] ? Ct(t[0]).harness : 0, r = i && i.aliases, n, s, o, l;
    if (!r)
        return e;
    n = Nt({}, e);
    for (s in r)
        if (s in n)
            for (l = r[s].split(","),
            o = l.length; o--; )
                n[l[o]] = n[s];
    return n
}, Wn = function(t, e, i, r) {
    var n = e.ease || r || "power1.inOut", s, o;
    if (Q(e))
        o = i[t] || (i[t] = []),
        e.forEach(function(l, u) {
            return o.push({
                t: u / (e.length - 1) * 100,
                v: l,
                e: n
            })
        });
    else
        for (s in e)
            o = i[s] || (i[s] = []),
            s === "ease" || o.push({
                t: parseFloat(t),
                v: e[s],
                e: n
            })
}, _e = function(t, e, i, r, n) {
    return z(t) ? t.call(e, i, r, n) : Y(t) && ~t.indexOf("random(") ? ee(t) : t
}, Lr = Ti + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Mr = {};
$(Lr + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
    return Mr[a] = 1
});
var H = function(a) {
    er(t, a);
    function t(i, r, n, s) {
        var o;
        typeof r == "number" && (n.duration = r,
        r = n,
        n = null),
        o = a.call(this, s ? r : he(r)) || this;
        var l = o.vars, u = l.duration, f = l.delay, c = l.immediateRender, _ = l.stagger, d = l.overwrite, p = l.keyframes, h = l.defaults, m = l.scrollTrigger, y = l.yoyoEase, v = r.parent || R, x = (Q(i) || rr(i) ? wt(i[0]) : "length"in r) ? [i] : ut(i), T, g, b, S, P, w, k, A;
        if (o._targets = x.length ? wi(x) : de("GSAP target " + i + " not found. https://gsap.com", !rt.nullTargetWarn) || [],
        o._ptLookup = [],
        o._overwrite = d,
        p || _ || Ae(u) || Ae(f)) {
            if (r = o.vars,
            T = o.timeline = new q({
                data: "nested",
                defaults: h || {},
                targets: v && v.data === "nested" ? v.vars.targets : x
            }),
            T.kill(),
            T.parent = T._dp = xt(o),
            T._start = 0,
            _ || Ae(u) || Ae(f)) {
                if (S = x.length,
                k = _ && yr(_),
                dt(_))
                    for (P in _)
                        ~Lr.indexOf(P) && (A || (A = {}),
                        A[P] = _[P]);
                for (g = 0; g < S; g++)
                    b = He(r, Mr),
                    b.stagger = 0,
                    y && (b.yoyoEase = y),
                    A && Nt(b, A),
                    w = x[g],
                    b.duration = +_e(u, xt(o), g, w, x),
                    b.delay = (+_e(f, xt(o), g, w, x) || 0) - o._delay,
                    !_ && S === 1 && b.delay && (o._delay = f = b.delay,
                    o._start += f,
                    b.delay = 0),
                    T.to(w, b, k ? k(g, w, x) : 0),
                    T._ease = O.none;
                T.duration() ? u = f = 0 : o.timeline = 0
            } else if (p) {
                he(ft(T.vars.defaults, {
                    ease: "none"
                })),
                T._ease = Bt(p.ease || r.ease || "none");
                var C = 0, L, W, N;
                if (Q(p))
                    p.forEach(function(B) {
                        return T.to(x, B, ">")
                    }),
                    T.duration();
                else {
                    b = {};
                    for (P in p)
                        P === "ease" || P === "easeEach" || Wn(P, p[P], b, p.easeEach);
                    for (P in b)
                        for (L = b[P].sort(function(B, V) {
                            return B.t - V.t
                        }),
                        C = 0,
                        g = 0; g < L.length; g++)
                            W = L[g],
                            N = {
                                ease: W.e,
                                duration: (W.t - (g ? L[g - 1].t : 0)) / 100 * u
                            },
                            N[P] = W.v,
                            T.to(x, N, C),
                            C += N.duration;
                    T.duration() < u && T.to({}, {
                        duration: u - T.duration()
                    })
                }
            }
            u || o.duration(u = T.duration())
        } else
            o.timeline = 0;
        return d === !0 && !pi && (kt = xt(o),
        R.killTweensOf(x),
        kt = 0),
        _t(v, xt(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (c || !u && !p && o._start === X(v._time) && it(c) && wn(xt(o)) && v.data !== "nested") && (o._tTime = -M,
        o.render(Math.max(0, -f) || 0)),
        m && dr(xt(o), m),
        o
    }
    var e = t.prototype;
    return e.render = function(r, n, s) {
        var o = this._time, l = this._tDur, u = this._dur, f = r < 0, c = r > l - M && !f ? l : r < M ? 0 : r, _, d, p, h, m, y, v, x, T;
        if (!u)
            Sn(this, r, n, s);
        else if (c !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
            if (_ = c,
            x = this.timeline,
            this._repeat) {
                if (h = u + this._rDelay,
                this._repeat < -1 && f)
                    return this.totalTime(h * 100 + r, n, s);
                if (_ = X(c % h),
                c === l ? (p = this._repeat,
                _ = u) : (p = ~~(c / h),
                p && p === X(c / h) && (_ = u,
                p--),
                _ > u && (_ = u)),
                y = this._yoyo && p & 1,
                y && (T = this._yEase,
                _ = u - _),
                m = Zt(this._tTime, h),
                _ === o && !s && this._initted && p === m)
                    return this._tTime = c,
                    this;
                p !== m && (x && this._yEase && Er(x, y),
                this.vars.repeatRefresh && !y && !this._lock && this._time !== h && this._initted && (this._lock = s = 1,
                this.render(X(h * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (pr(this, f ? r : _, s, n, c))
                    return this._tTime = 0,
                    this;
                if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
                    return this;
                if (u !== this._dur)
                    return this.render(r, n, s)
            }
            if (this._tTime = c,
            this._time = _,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = v = (T || this._ease)(_ / u),
            this._from && (this.ratio = v = 1 - v),
            _ && !o && !n && !p && (st(this, "onStart"),
            this._tTime !== c))
                return this;
            for (d = this._pt; d; )
                d.r(v, d.d),
                d = d._next;
            x && x.render(r < 0 ? r : x._dur * x._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = r),
            this._onUpdate && !n && (f && li(this, r, n, s),
            st(this, "onUpdate")),
            this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && st(this, "onRepeat"),
            (c === this._tDur || !c) && this._tTime === c && (f && !this._onUpdate && li(this, r, !0, !0),
            (r || !u) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Lt(this, 1),
            !n && !(f && !o) && (c || o || y) && (st(this, c === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    e.targets = function() {
        return this._targets
    }
    ,
    e.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(r),
        a.prototype.invalidate.call(this, r)
    }
    ,
    e.resetTo = function(r, n, s, o, l) {
        me || et.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
        return this._initted || Ei(this, u),
        f = this._ease(u / this._dur),
        Xn(this, r, n, s, o, f, u, l) ? this.resetTo(r, n, s, o, 1) : (We(this, 0),
        this.parent || cr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    e.kill = function(r, n) {
        if (n === void 0 && (n = "all"),
        !r && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? ue(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, kt && kt.vars.overwrite !== !0)._first || ue(this),
            this.parent && s !== this.timeline.totalDuration() && Jt(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var o = this._targets, l = r ? ut(r) : o, u = this._ptLookup, f = this._pt, c, _, d, p, h, m, y;
        if ((!n || n === "all") && xn(o, l))
            return n === "all" && (this._pt = 0),
            ue(this);
        for (c = this._op = this._op || [],
        n !== "all" && (Y(n) && (h = {},
        $(n, function(v) {
            return h[v] = 1
        }),
        n = h),
        n = Un(o, n)),
        y = o.length; y--; )
            if (~l.indexOf(o[y])) {
                _ = u[y],
                n === "all" ? (c[y] = n,
                p = _,
                d = {}) : (d = c[y] = c[y] || {},
                p = n);
                for (h in p)
                    m = _ && _[h],
                    m && ((!("kill"in m.d) || m.d.kill(h) === !0) && Xe(this, m, "_pt"),
                    delete _[h]),
                    d !== "all" && (d[h] = 1)
            }
        return this._initted && !this._pt && f && ue(this),
        this
    }
    ,
    t.to = function(r, n) {
        return new t(r,n,arguments[2])
    }
    ,
    t.from = function(r, n) {
        return ce(1, arguments)
    }
    ,
    t.delayedCall = function(r, n, s, o) {
        return new t(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: o
        })
    }
    ,
    t.fromTo = function(r, n, s) {
        return ce(2, arguments)
    }
    ,
    t.set = function(r, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new t(r,n)
    }
    ,
    t.killTweensOf = function(r, n, s) {
        return R.killTweensOf(r, n, s)
    }
    ,
    t
}(ge);
ft(H.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
$("staggerTo,staggerFrom,staggerFromTo", function(a) {
    H[a] = function() {
        var t = new q
          , e = fi.call(arguments, 0);
        return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0),
        t[a].apply(t, e)
    }
});
var Ci = function(t, e, i) {
    return t[e] = i
}
  , Ar = function(t, e, i) {
    return t[e](i)
}
  , qn = function(t, e, i, r) {
    return t[e](r.fp, i)
}
  , Gn = function(t, e, i) {
    return t.setAttribute(e, i)
}
  , qe = function(t, e) {
    return z(t[e]) ? Ar : Ne(t[e]) && t.setAttribute ? Gn : Ci
}
  , Dr = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}
  , Kn = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
  , Li = function(t, e) {
    var i = e._pt
      , r = "";
    if (!t && e.b)
        r = e.b;
    else if (t === 1 && e.e)
        r = e.e;
    else {
        for (; i; )
            r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r,
            i = i._next;
        r += e.c
    }
    e.set(e.t, e.p, r, e)
}
  , Mi = function(t, e) {
    for (var i = e._pt; i; )
        i.r(t, i.d),
        i = i._next
}
  , Qn = function(t, e, i, r) {
    for (var n = this._pt, s; n; )
        s = n._next,
        n.p === r && n.modifier(t, e, i),
        n = s
}
  , jn = function(t) {
    for (var e = this._pt, i, r; e; )
        r = e._next,
        e.p === t && !e.op || e.op === t ? Xe(this, e, "_pt") : e.dep || (i = 1),
        e = r;
    return !i
}
  , $n = function(t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
}
  , Ai = function(t) {
    for (var e = t._pt, i, r, n, s; e; ) {
        for (i = e._next,
        r = n; r && r.pr > e.pr; )
            r = r._next;
        (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e,
        (e._next = r) ? r._prev = e : s = e,
        e = i
    }
    t._pt = n
}
  , Z = function() {
    function a(e, i, r, n, s, o, l, u, f) {
        this.t = i,
        this.s = n,
        this.c = s,
        this.p = r,
        this.r = o || Dr,
        this.d = l || this,
        this.set = u || Ci,
        this.pr = f || 0,
        this._next = e,
        e && (e._prev = this)
    }
    var t = a.prototype;
    return t.modifier = function(i, r, n) {
        this.mSet = this.mSet || this.set,
        this.set = $n,
        this.m = i,
        this.mt = n,
        this.tween = r
    }
    ,
    a
}();
$(Ti + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
    return xi[a] = 1
});
ot.TweenMax = ot.TweenLite = H;
ot.TimelineLite = ot.TimelineMax = q;
R = new q({
    sortChildren: !1,
    defaults: $t,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
rt.stringFilter = Si;
var Yt = []
  , Fe = {}
  , Zn = []
  , tr = 0
  , Jn = 0
  , ii = function(t) {
    return (Fe[t] || Zn).map(function(e) {
        return e()
    })
}
  , di = function() {
    var t = Date.now()
      , e = [];
    t - tr > 2 && (ii("matchMediaInit"),
    Yt.forEach(function(i) {
        var r = i.queries, n = i.conditions, s, o, l, u;
        for (o in r)
            s = ct.matchMedia(r[o]).matches,
            s && (l = 1),
            s !== n[o] && (n[o] = s,
            u = 1);
        u && (i.revert(),
        l && e.push(i))
    }),
    ii("matchMediaRevert"),
    e.forEach(function(i) {
        return i.onMatch(i, function(r) {
            return i.add(null, r)
        })
    }),
    tr = t,
    ii("matchMedia"))
}
  , Rr = function() {
    function a(e, i) {
        this.selector = i && hi(i),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Jn++,
        e && this.add(e)
    }
    var t = a.prototype;
    return t.add = function(i, r, n) {
        z(i) && (n = r,
        r = i,
        i = z);
        var s = this
          , o = function() {
            var u = D, f = s.selector, c;
            return u && u !== s && u.data.push(s),
            n && (s.selector = hi(n)),
            D = s,
            c = r.apply(s, arguments),
            z(c) && s._r.push(c),
            D = u,
            s.selector = f,
            s.isReverted = !1,
            c
        };
        return s.last = o,
        i === z ? o(s, function(l) {
            return s.add(null, l)
        }) : i ? s[i] = o : o
    }
    ,
    t.ignore = function(i) {
        var r = D;
        D = null,
        i(this),
        D = r
    }
    ,
    t.getTweens = function() {
        var i = [];
        return this.data.forEach(function(r) {
            return r instanceof a ? i.push.apply(i, r.getTweens()) : r instanceof H && !(r.parent && r.parent.data === "nested") && i.push(r)
        }),
        i
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(i, r) {
        var n = this;
        if (i ? function() {
            for (var o = n.getTweens(), l = n.data.length, u; l--; )
                u = n.data[l],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(f) {
                    return o.splice(o.indexOf(f), 1)
                }));
            for (o.map(function(f) {
                return {
                    g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
                    t: f
                }
            }).sort(function(f, c) {
                return c.g - f.g || -1 / 0
            }).forEach(function(f) {
                return f.t.revert(i)
            }),
            l = n.data.length; l--; )
                u = n.data[l],
                u instanceof q ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof H) && u.revert && u.revert(i);
            n._r.forEach(function(f) {
                return f(i, n)
            }),
            n.isReverted = !0
        }() : this.data.forEach(function(o) {
            return o.kill && o.kill()
        }),
        this.clear(),
        r)
            for (var s = Yt.length; s--; )
                Yt[s].id === this.id && Yt.splice(s, 1)
    }
    ,
    t.revert = function(i) {
        this.kill(i || {})
    }
    ,
    a
}()
  , ts = function() {
    function a(e) {
        this.contexts = [],
        this.scope = e,
        D && D.data.push(this)
    }
    var t = a.prototype;
    return t.add = function(i, r, n) {
        dt(i) || (i = {
            matches: i
        });
        var s = new Rr(0,n || this.scope), o = s.conditions = {}, l, u, f;
        D && !s.selector && (s.selector = D.selector),
        this.contexts.push(s),
        r = s.add("onMatch", r),
        s.queries = i;
        for (u in i)
            u === "all" ? f = 1 : (l = ct.matchMedia(i[u]),
            l && (Yt.indexOf(s) < 0 && Yt.push(s),
            (o[u] = l.matches) && (f = 1),
            l.addListener ? l.addListener(di) : l.addEventListener("change", di)));
        return f && r(s, function(c) {
            return s.add(null, c)
        }),
        this
    }
    ,
    t.revert = function(i) {
        this.kill(i || {})
    }
    ,
    t.kill = function(i) {
        this.contexts.forEach(function(r) {
            return r.kill(i, !0)
        })
    }
    ,
    a
}()
  , Ye = {
    registerPlugin: function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        e.forEach(function(r) {
            return Sr(r)
        })
    },
    timeline: function(t) {
        return new q(t)
    },
    getTweensOf: function(t, e) {
        return R.getTweensOf(t, e)
    },
    getProperty: function(t, e, i, r) {
        Y(t) && (t = ut(t)[0]);
        var n = Ct(t || {}).get
          , s = i ? hr : fr;
        return i === "native" && (i = ""),
        t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(o, l, u) {
            return s((tt[o] && tt[o].get || n)(t, o, l, u))
        }
        )
    },
    quickSetter: function(t, e, i) {
        if (t = ut(t),
        t.length > 1) {
            var r = t.map(function(f) {
                return j.quickSetter(f, e, i)
            })
              , n = r.length;
            return function(f) {
                for (var c = n; c--; )
                    r[c](f)
            }
        }
        t = t[0] || {};
        var s = tt[e]
          , o = Ct(t)
          , l = o.harness && (o.harness.aliases || {})[e] || e
          , u = s ? function(f) {
            var c = new s;
            jt._pt = 0,
            c.init(t, i ? f + i : f, jt, 0, [t]),
            c.render(1, c),
            jt._pt && Mi(1, jt)
        }
        : o.set(t, l);
        return s ? u : function(f) {
            return u(t, l, i ? f + i : f, o, 1)
        }
    },
    quickTo: function(t, e, i) {
        var r, n = j.to(t, Nt((r = {},
        r[e] = "+=0.1",
        r.paused = !0,
        r), i || {})), s = function(l, u, f) {
            return n.resetTo(e, l, u, f)
        };
        return s.tween = n,
        s
    },
    isTweening: function(t) {
        return R.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = Bt(t.ease, $t.ease)),
        Qi($t, t || {})
    },
    config: function(t) {
        return Qi(rt, t || {})
    },
    registerEffect: function(t) {
        var e = t.name
          , i = t.effect
          , r = t.plugins
          , n = t.defaults
          , s = t.extendTimeline;
        (r || "").split(",").forEach(function(o) {
            return o && !tt[o] && !ot[o] && de(e + " effect requires " + o + " plugin.")
        }),
        Ze[e] = function(o, l, u) {
            return i(ut(o), ft(l || {}, n), u)
        }
        ,
        s && (q.prototype[e] = function(o, l, u) {
            return this.add(Ze[e](o, dt(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(t, e) {
        O[t] = Bt(e)
    },
    parseEase: function(t, e) {
        return arguments.length ? Bt(t, e) : O
    },
    getById: function(t) {
        return R.getById(t)
    },
    exportRoot: function(t, e) {
        t === void 0 && (t = {});
        var i = new q(t), r, n;
        for (i.smoothChildTiming = it(t.smoothChildTiming),
        R.remove(i),
        i._dp = 0,
        i._time = i._tTime = R._time,
        r = R._first; r; )
            n = r._next,
            (e || !(!r._dur && r instanceof H && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay),
            r = n;
        return _t(R, i, 0),
        i
    },
    context: function(t, e) {
        return t ? new Rr(t,e) : D
    },
    matchMedia: function(t) {
        return new ts(t)
    },
    matchMediaRefresh: function() {
        return Yt.forEach(function(t) {
            var e = t.conditions, i, r;
            for (r in e)
                e[r] && (e[r] = !1,
                i = 1);
            i && t.revert()
        }) || di()
    },
    addEventListener: function(t, e) {
        var i = Fe[t] || (Fe[t] = []);
        ~i.indexOf(e) || i.push(e)
    },
    removeEventListener: function(t, e) {
        var i = Fe[t]
          , r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1)
    },
    utils: {
        wrap: An,
        wrapYoyo: Dn,
        distribute: yr,
        random: xr,
        snap: vr,
        normalize: Mn,
        getUnit: G,
        clamp: kn,
        splitColor: Pr,
        toArray: ut,
        selector: hi,
        mapRange: wr,
        pipe: Cn,
        unitize: Ln,
        interpolate: Rn,
        shuffle: gr
    },
    install: or,
    effects: Ze,
    ticker: et,
    updateRoot: q.updateRoot,
    plugins: tt,
    globalTimeline: R,
    core: {
        PropTween: Z,
        globals: ar,
        Tween: H,
        Timeline: q,
        Animation: ge,
        getCache: Ct,
        _removeLinkedListItem: Xe,
        reverting: function() {
            return K
        },
        context: function(t) {
            return t && D && (D.data.push(t),
            t._ctx = D),
            D
        },
        suppressOverwrites: function(t) {
            return pi = t
        }
    }
};
$("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
    return Ye[a] = H[a]
});
et.add(q.updateRoot);
jt = Ye.to({}, {
    duration: 0
});
var es = function(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
    return i
}
  , is = function(t, e) {
    var i = t._targets, r, n, s;
    for (r in e)
        for (n = i.length; n--; )
            s = t._ptLookup[n][r],
            s && (s = s.d) && (s._pt && (s = es(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r))
}
  , ri = function(t, e) {
    return {
        name: t,
        rawVars: 1,
        init: function(r, n, s) {
            s._onInit = function(o) {
                var l, u;
                if (Y(n) && (l = {},
                $(n, function(f) {
                    return l[f] = 1
                }),
                n = l),
                e) {
                    l = {};
                    for (u in n)
                        l[u] = e(n[u]);
                    n = l
                }
                is(o, n)
            }
        }
    }
}
  , j = Ye.registerPlugin({
    name: "attr",
    init: function(t, e, i, r, n) {
        var s, o, l;
        this.tween = i;
        for (s in e)
            l = t.getAttribute(s) || "",
            o = this.add(t, "setAttribute", (l || 0) + "", e[s], r, n, 0, 0, s),
            o.op = s,
            o.b = l,
            this._props.push(s)
    },
    render: function(t, e) {
        for (var i = e._pt; i; )
            K ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
            i = i._next
    }
}, {
    name: "endArray",
    init: function(t, e) {
        for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
    }
}, ri("roundProps", ci), ri("modifiers"), ri("snap", vr)) || Ye;
H.version = q.version = j.version = "3.12.5";
sr = 1;
mi() && te();
var rs = O.Power0
  , ns = O.Power1
  , ss = O.Power2
  , os = O.Power3
  , as = O.Power4
  , ls = O.Linear
  , us = O.Quad
  , fs = O.Cubic
  , hs = O.Quart
  , cs = O.Quint
  , _s = O.Strong
  , ds = O.Elastic
  , ps = O.Back
  , ms = O.SteppedEase
  , gs = O.Bounce
  , ys = O.Sine
  , vs = O.Expo
  , xs = O.Circ;
var Fr, At, re, Bi, Kt, Ts, zr, Yi, ws = function() {
    return typeof window < "u"
}, St = {}, Gt = 180 / Math.PI, ne = Math.PI / 180, ie = Math.atan2, Ir = 1e8, Ni = /([A-Z])/g, bs = /(left|right|width|margin|padding|x)/i, Ss = /[\s,\(]\S/, pt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Fi = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, Ps = function(t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, Os = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
}, ks = function(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
}, Ur = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
}, Wr = function(t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
}, Es = function(t, e, i) {
    return t.style[e] = i
}, Cs = function(t, e, i) {
    return t.style.setProperty(e, i)
}, Ls = function(t, e, i) {
    return t._gsap[e] = i
}, Ms = function(t, e, i) {
    return t._gsap.scaleX = t._gsap.scaleY = i
}, As = function(t, e, i, r, n) {
    var s = t._gsap;
    s.scaleX = s.scaleY = i,
    s.renderTransform(n, s)
}, Ds = function(t, e, i, r, n) {
    var s = t._gsap;
    s[e] = i,
    s.renderTransform(n, s)
}, F = "transform", nt = F + "Origin", Rs = function a(t, e) {
    var i = this
      , r = this.target
      , n = r.style
      , s = r._gsap;
    if (t in St && n) {
        if (this.tfm = this.tfm || {},
        t !== "transform")
            t = pt[t] || t,
            ~t.indexOf(",") ? t.split(",").forEach(function(o) {
                return i.tfm[o] = bt(r, o)
            }) : this.tfm[t] = s.x ? s[t] : bt(r, t),
            t === nt && (this.tfm.zOrigin = s.zOrigin);
        else
            return pt.transform.split(",").forEach(function(o) {
                return a.call(i, o, e)
            });
        if (this.props.indexOf(F) >= 0)
            return;
        s.svg && (this.svgo = r.getAttribute("data-svg-origin"),
        this.props.push(nt, e, "")),
        t = F
    }
    (n || e) && this.props.push(t, e, n[t])
}, qr = function(t) {
    t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, Fs = function() {
    var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
    for (n = 0; n < t.length; n += 3)
        t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Ni, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            r[s] = this.tfm[s];
        r.svg && (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        n = Yi(),
        (!n || !n.isStart) && !i[F] && (qr(i),
        r.zOrigin && i[nt] && (i[nt] += " " + r.zOrigin + "px",
        r.zOrigin = 0,
        r.renderTransform()),
        r.uncache = 1)
    }
}, Gr = function(t, e) {
    var i = {
        target: t,
        props: [],
        revert: Fs,
        save: Rs
    };
    return t._gsap || j.core.getCache(t),
    e && e.split(",").forEach(function(r) {
        return i.save(r)
    }),
    i
}, Kr, zi = function(t, e) {
    var i = At.createElementNS ? At.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : At.createElement(t);
    return i && i.style ? i : At.createElement(t)
}, mt = function a(t, e, i) {
    var r = getComputedStyle(t);
    return r[e] || r.getPropertyValue(e.replace(Ni, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && a(t, se(e) || e, 1) || ""
}, Hr = "O,Moz,ms,Ms,Webkit".split(","), se = function(t, e, i) {
    var r = e || Kt
      , n = r.style
      , s = 5;
    if (t in n && !i)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Hr[s] + t in n); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Hr[s] : "") + t
}, Ii = function() {
    ws() && window.document && (Fr = window,
    At = Fr.document,
    re = At.documentElement,
    Kt = zi("div") || {
        style: {}
    },
    Ts = zi("div"),
    F = se(F),
    nt = F + "Origin",
    Kt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Kr = !!se("perspective"),
    Yi = j.core.reverting,
    Bi = 1)
}, Di = function a(t) {
    var e = zi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
    if (re.appendChild(e),
    e.appendChild(this),
    this.style.display = "block",
    t)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = a
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
    re.removeChild(e),
    this.style.cssText = n,
    s
}, Br = function(t, e) {
    for (var i = e.length; i--; )
        if (t.hasAttribute(e[i]))
            return t.getAttribute(e[i])
}, Qr = function(t) {
    var e;
    try {
        e = t.getBBox()
    } catch {
        e = Di.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === Di || (e = Di.call(t, !0)),
    e && !e.width && !e.x && !e.y ? {
        x: +Br(t, ["x", "cx", "x1"]) || 0,
        y: +Br(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : e
}, jr = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Qr(t))
}, Qt = function(t, e) {
    if (e) {
        var i = t.style, r;
        e in St && e !== nt && (e = F),
        i.removeProperty ? (r = e.substr(0, 2),
        (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
        i.removeProperty(r === "--" ? e : e.replace(Ni, "-$1").toLowerCase())) : i.removeAttribute(e)
    }
}, Dt = function(t, e, i, r, n, s) {
    var o = new Z(t._pt,e,i,0,1,s ? Wr : Ur);
    return t._pt = o,
    o.b = r,
    o.e = n,
    t._props.push(i),
    o
}, Yr = {
    deg: 1,
    rad: 1,
    turn: 1
}, zs = {
    grid: 1,
    flex: 1
}, Rt = function a(t, e, i, r) {
    var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = Kt.style, l = bs.test(e), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), c = 100, _ = r === "px", d = r === "%", p, h, m, y;
    if (r === s || !n || Yr[r] || Yr[s])
        return n;
    if (s !== "px" && !_ && (n = a(t, e, i, "px")),
    y = t.getCTM && jr(t),
    (d || s === "%") && (St[e] || ~e.indexOf("adius")))
        return p = y ? t.getBBox()[l ? "width" : "height"] : t[f],
        I(d ? n / p * c : n / 100 * p);
    if (o[l ? "width" : "height"] = c + (_ ? s : r),
    h = ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode,
    y && (h = (t.ownerSVGElement || {}).parentNode),
    (!h || h === At || !h.appendChild) && (h = At.body),
    m = h._gsap,
    m && d && m.width && l && m.time === et.time && !m.uncache)
        return I(n / m.width * c);
    if (d && (e === "height" || e === "width")) {
        var v = t.style[e];
        t.style[e] = c + r,
        p = t[f],
        v ? t.style[e] = v : Qt(t, e)
    } else
        (d || s === "%") && !zs[mt(h, "display")] && (o.position = mt(t, "position")),
        h === t && (o.position = "static"),
        h.appendChild(Kt),
        p = Kt[f],
        h.removeChild(Kt),
        o.position = "absolute";
    return l && d && (m = Ct(h),
    m.time = et.time,
    m.width = h[f]),
    I(_ ? p * n / c : p && n ? c / p * n : 0)
}, bt = function(t, e, i, r) {
    var n;
    return Bi || Ii(),
    e in pt && e !== "transform" && (e = pt[e],
    ~e.indexOf(",") && (e = e.split(",")[0])),
    St[e] && e !== "transform" ? (n = Te(t, r),
    n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ke(mt(t, nt)) + " " + n.zOrigin + "px") : (n = t.style[e],
    (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Ge[e] && Ge[e](t, e, i) || mt(t, e) || bi(t, e) || (e === "opacity" ? 1 : 0))),
    i && !~(n + "").trim().indexOf(" ") ? Rt(t, e, n, i) + i : n
}, Is = function(t, e, i, r) {
    if (!i || i === "none") {
        var n = se(e, t, 1)
          , s = n && mt(t, n, 1);
        s && s !== i ? (e = n,
        i = s) : e === "borderColor" && (i = mt(t, "borderTopColor"))
    }
    var o = new Z(this._pt,t.style,e,0,1,Li), l = 0, u = 0, f, c, _, d, p, h, m, y, v, x, T, g;
    if (o.b = i,
    o.e = r,
    i += "",
    r += "",
    r === "auto" && (h = t.style[e],
    t.style[e] = r,
    r = mt(t, e) || r,
    h ? t.style[e] = h : Qt(t, e)),
    f = [i, r],
    Si(f),
    i = f[0],
    r = f[1],
    _ = i.match(Vt) || [],
    g = r.match(Vt) || [],
    g.length) {
        for (; c = Vt.exec(r); )
            m = c[0],
            v = r.substring(l, c.index),
            p ? p = (p + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1),
            m !== (h = _[u++] || "") && (d = parseFloat(h) || 0,
            T = h.substr((d + "").length),
            m.charAt(1) === "=" && (m = Xt(d, m) + T),
            y = parseFloat(m),
            x = m.substr((y + "").length),
            l = Vt.lastIndex - x.length,
            x || (x = x || rt.units[e] || T,
            l === r.length && (r += x,
            o.e += x)),
            T !== x && (d = Rt(t, e, h, x) || 0),
            o._pt = {
                _next: o._pt,
                p: v || u === 1 ? v : ",",
                s: d,
                c: y - d,
                m: p && p < 4 || e === "zIndex" ? Math.round : 0
            });
        o.c = l < r.length ? r.substring(l, r.length) : ""
    } else
        o.r = e === "display" && r === "none" ? Wr : Ur;
    return yi.test(r) && (o.e = 0),
    this._pt = o,
    o
}, Nr = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Hs = function(t) {
    var e = t.split(" ")
      , i = e[0]
      , r = e[1] || "50%";
    return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i,
    i = r,
    r = t),
    e[0] = Nr[i] || i,
    e[1] = Nr[r] || r,
    e.join(" ")
}, Bs = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t, r = i.style, n = e.u, s = i._gsap, o, l, u;
        if (n === "all" || n === !0)
            r.cssText = "",
            l = 1;
        else
            for (n = n.split(","),
            u = n.length; --u > -1; )
                o = n[u],
                St[o] && (l = 1,
                o = o === "transformOrigin" ? nt : F),
                Qt(i, o);
        l && (Qt(i, F),
        s && (s.svg && i.removeAttribute("transform"),
        Te(i, 1),
        s.uncache = 1,
        qr(r)))
    }
}, Ge = {
    clearProps: function(t, e, i, r, n) {
        if (n.data !== "isFromStart") {
            var s = t._pt = new Z(t._pt,e,i,0,0,Bs);
            return s.u = r,
            s.pr = -10,
            s.tween = n,
            t._props.push(i),
            1
        }
    }
}, xe = [1, 0, 0, 1, 0, 0], $r = {}, Zr = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, Vr = function(t) {
    var e = mt(t, F);
    return Zr(e) ? xe : e.substr(7).match(gi).map(I)
}, Vi = function(t, e) {
    var i = t._gsap || Ct(t), r = t.style, n = Vr(t), s, o, l, u;
    return i.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix,
    n = [l.a, l.b, l.c, l.d, l.e, l.f],
    n.join(",") === "1,0,0,1,0,0" ? xe : n) : (n === xe && !t.offsetParent && t !== re && !i.svg && (l = r.display,
    r.display = "block",
    s = t.parentNode,
    (!s || !t.offsetParent) && (u = 1,
    o = t.nextElementSibling,
    re.appendChild(t)),
    n = Vr(t),
    l ? r.display = l : Qt(t, "display"),
    u && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : re.removeChild(t))),
    e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, Hi = function(t, e, i, r, n, s) {
    var o = t._gsap, l = n || Vi(t, !0), u = o.xOrigin || 0, f = o.yOrigin || 0, c = o.xOffset || 0, _ = o.yOffset || 0, d = l[0], p = l[1], h = l[2], m = l[3], y = l[4], v = l[5], x = e.split(" "), T = parseFloat(x[0]) || 0, g = parseFloat(x[1]) || 0, b, S, P, w;
    i ? l !== xe && (S = d * m - p * h) && (P = T * (m / S) + g * (-h / S) + (h * v - m * y) / S,
    w = T * (-p / S) + g * (d / S) - (d * v - p * y) / S,
    T = P,
    g = w) : (b = Qr(t),
    T = b.x + (~x[0].indexOf("%") ? T / 100 * b.width : T),
    g = b.y + (~(x[1] || x[0]).indexOf("%") ? g / 100 * b.height : g)),
    r || r !== !1 && o.smooth ? (y = T - u,
    v = g - f,
    o.xOffset = c + (y * d + v * h) - y,
    o.yOffset = _ + (y * p + v * m) - v) : o.xOffset = o.yOffset = 0,
    o.xOrigin = T,
    o.yOrigin = g,
    o.smooth = !!r,
    o.origin = e,
    o.originIsAbsolute = !!i,
    t.style[nt] = "0px 0px",
    s && (Dt(s, o, "xOrigin", u, T),
    Dt(s, o, "yOrigin", f, g),
    Dt(s, o, "xOffset", c, o.xOffset),
    Dt(s, o, "yOffset", _, o.yOffset)),
    t.setAttribute("data-svg-origin", T + " " + g)
}, Te = function(t, e) {
    var i = t._gsap || new Pi(t);
    if ("x"in i && !e && !i.uncache)
        return i;
    var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", l = getComputedStyle(t), u = mt(t, nt) || "0", f, c, _, d, p, h, m, y, v, x, T, g, b, S, P, w, k, A, C, L, W, N, B, V, ht, Me, ae, le, zt, Gi, vt, It;
    return f = c = _ = h = m = y = v = x = T = 0,
    d = p = 1,
    i.svg = !!(t.getCTM && jr(t)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[F] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[F] !== "none" ? l[F] : "")),
    r.scale = r.rotate = r.translate = "none"),
    S = Vi(t, i.svg),
    i.svg && (i.uncache ? (ht = t.getBBox(),
    u = i.xOrigin - ht.x + "px " + (i.yOrigin - ht.y) + "px",
    V = "") : V = !e && t.getAttribute("data-svg-origin"),
    Hi(t, V || u, !!V || i.originIsAbsolute, i.smooth !== !1, S)),
    g = i.xOrigin || 0,
    b = i.yOrigin || 0,
    S !== xe && (A = S[0],
    C = S[1],
    L = S[2],
    W = S[3],
    f = N = S[4],
    c = B = S[5],
    S.length === 6 ? (d = Math.sqrt(A * A + C * C),
    p = Math.sqrt(W * W + L * L),
    h = A || C ? ie(C, A) * Gt : 0,
    v = L || W ? ie(L, W) * Gt + h : 0,
    v && (p *= Math.abs(Math.cos(v * ne))),
    i.svg && (f -= g - (g * A + b * L),
    c -= b - (g * C + b * W))) : (It = S[6],
    Gi = S[7],
    ae = S[8],
    le = S[9],
    zt = S[10],
    vt = S[11],
    f = S[12],
    c = S[13],
    _ = S[14],
    P = ie(It, zt),
    m = P * Gt,
    P && (w = Math.cos(-P),
    k = Math.sin(-P),
    V = N * w + ae * k,
    ht = B * w + le * k,
    Me = It * w + zt * k,
    ae = N * -k + ae * w,
    le = B * -k + le * w,
    zt = It * -k + zt * w,
    vt = Gi * -k + vt * w,
    N = V,
    B = ht,
    It = Me),
    P = ie(-L, zt),
    y = P * Gt,
    P && (w = Math.cos(-P),
    k = Math.sin(-P),
    V = A * w - ae * k,
    ht = C * w - le * k,
    Me = L * w - zt * k,
    vt = W * k + vt * w,
    A = V,
    C = ht,
    L = Me),
    P = ie(C, A),
    h = P * Gt,
    P && (w = Math.cos(P),
    k = Math.sin(P),
    V = A * w + C * k,
    ht = N * w + B * k,
    C = C * w - A * k,
    B = B * w - N * k,
    A = V,
    N = ht),
    m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0,
    y = 180 - y),
    d = I(Math.sqrt(A * A + C * C + L * L)),
    p = I(Math.sqrt(B * B + It * It)),
    P = ie(N, B),
    v = Math.abs(P) > 2e-4 ? P * Gt : 0,
    T = vt ? 1 / (vt < 0 ? -vt : vt) : 0),
    i.svg && (V = t.getAttribute("transform"),
    i.forceCSS = t.setAttribute("transform", "") || !Zr(mt(t, F)),
    V && t.setAttribute("transform", V))),
    Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (d *= -1,
    v += h <= 0 ? 180 : -180,
    h += h <= 0 ? 180 : -180) : (p *= -1,
    v += v <= 0 ? 180 : -180)),
    e = e || i.uncache,
    i.x = f - ((i.xPercent = f && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s,
    i.y = c - ((i.yPercent = c && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s,
    i.z = _ + s,
    i.scaleX = I(d),
    i.scaleY = I(p),
    i.rotation = I(h) + o,
    i.rotationX = I(m) + o,
    i.rotationY = I(y) + o,
    i.skewX = v + o,
    i.skewY = x + o,
    i.transformPerspective = T + s,
    (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[nt] = Ke(u)),
    i.xOffset = i.yOffset = 0,
    i.force3D = rt.force3D,
    i.renderTransform = i.svg ? Ns : Kr ? Jr : Ys,
    i.uncache = 0,
    i
}, Ke = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, Ri = function(t, e, i) {
    var r = G(e);
    return I(parseFloat(e) + parseFloat(Rt(t, "x", i + "px", r))) + r
}, Ys = function(t, e) {
    e.z = "0px",
    e.rotationY = e.rotationX = "0deg",
    e.force3D = 0,
    Jr(t, e)
}, Wt = "0deg", ve = "0px", qt = ") ", Jr = function(t, e) {
    var i = e || this
      , r = i.xPercent
      , n = i.yPercent
      , s = i.x
      , o = i.y
      , l = i.z
      , u = i.rotation
      , f = i.rotationY
      , c = i.rotationX
      , _ = i.skewX
      , d = i.skewY
      , p = i.scaleX
      , h = i.scaleY
      , m = i.transformPerspective
      , y = i.force3D
      , v = i.target
      , x = i.zOrigin
      , T = ""
      , g = y === "auto" && t && t !== 1 || y === !0;
    if (x && (c !== Wt || f !== Wt)) {
        var b = parseFloat(f) * ne, S = Math.sin(b), P = Math.cos(b), w;
        b = parseFloat(c) * ne,
        w = Math.cos(b),
        s = Ri(v, s, S * w * -x),
        o = Ri(v, o, -Math.sin(b) * -x),
        l = Ri(v, l, P * w * -x + x)
    }
    m !== ve && (T += "perspective(" + m + qt),
    (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
    (g || s !== ve || o !== ve || l !== ve) && (T += l !== ve || g ? "translate3d(" + s + ", " + o + ", " + l + ") " : "translate(" + s + ", " + o + qt),
    u !== Wt && (T += "rotate(" + u + qt),
    f !== Wt && (T += "rotateY(" + f + qt),
    c !== Wt && (T += "rotateX(" + c + qt),
    (_ !== Wt || d !== Wt) && (T += "skew(" + _ + ", " + d + qt),
    (p !== 1 || h !== 1) && (T += "scale(" + p + ", " + h + qt),
    v.style[F] = T || "translate(0, 0)"
}, Ns = function(t, e) {
    var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, l = i.rotation, u = i.skewX, f = i.skewY, c = i.scaleX, _ = i.scaleY, d = i.target, p = i.xOrigin, h = i.yOrigin, m = i.xOffset, y = i.yOffset, v = i.forceCSS, x = parseFloat(s), T = parseFloat(o), g, b, S, P, w;
    l = parseFloat(l),
    u = parseFloat(u),
    f = parseFloat(f),
    f && (f = parseFloat(f),
    u += f,
    l += f),
    l || u ? (l *= ne,
    u *= ne,
    g = Math.cos(l) * c,
    b = Math.sin(l) * c,
    S = Math.sin(l - u) * -_,
    P = Math.cos(l - u) * _,
    u && (f *= ne,
    w = Math.tan(u - f),
    w = Math.sqrt(1 + w * w),
    S *= w,
    P *= w,
    f && (w = Math.tan(f),
    w = Math.sqrt(1 + w * w),
    g *= w,
    b *= w)),
    g = I(g),
    b = I(b),
    S = I(S),
    P = I(P)) : (g = c,
    P = _,
    b = S = 0),
    (x && !~(s + "").indexOf("px") || T && !~(o + "").indexOf("px")) && (x = Rt(d, "x", s, "px"),
    T = Rt(d, "y", o, "px")),
    (p || h || m || y) && (x = I(x + p - (p * g + h * S) + m),
    T = I(T + h - (p * b + h * P) + y)),
    (r || n) && (w = d.getBBox(),
    x = I(x + r / 100 * w.width),
    T = I(T + n / 100 * w.height)),
    w = "matrix(" + g + "," + b + "," + S + "," + P + "," + x + "," + T + ")",
    d.setAttribute("transform", w),
    v && (d.style[F] = w)
}, Vs = function(t, e, i, r, n) {
    var s = 360, o = Y(n), l = parseFloat(n) * (o && ~n.indexOf("rad") ? Gt : 1), u = l - r, f = r + u + "deg", c, _;
    return o && (c = n.split("_")[1],
    c === "short" && (u %= s,
    u !== u % (s / 2) && (u += u < 0 ? s : -s)),
    c === "cw" && u < 0 ? u = (u + s * Ir) % s - ~~(u / s) * s : c === "ccw" && u > 0 && (u = (u - s * Ir) % s - ~~(u / s) * s)),
    t._pt = _ = new Z(t._pt,e,i,r,u,Ps),
    _.e = f,
    _.u = "deg",
    t._props.push(i),
    _
}, Xr = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Xs = function(t, e, i) {
    var r = Xr({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, l, u, f, c, _, d, p;
    r.svg ? (u = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    s[F] = e,
    o = Te(i, 1),
    Qt(i, F),
    i.setAttribute("transform", u)) : (u = getComputedStyle(i)[F],
    s[F] = e,
    o = Te(i, 1),
    s[F] = u);
    for (l in St)
        u = r[l],
        f = o[l],
        u !== f && n.indexOf(l) < 0 && (d = G(u),
        p = G(f),
        c = d !== p ? Rt(i, l, u, p) : parseFloat(u),
        _ = parseFloat(f),
        t._pt = new Z(t._pt,o,l,c,_ - c,Fi),
        t._pt.u = p || 0,
        t._props.push(l));
    Xr(o, r)
};
$("padding,margin,Width,Radius", function(a, t) {
    var e = "Top"
      , i = "Right"
      , r = "Bottom"
      , n = "Left"
      , s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
        return t < 2 ? a + o : "border" + o + a
    });
    Ge[t > 1 ? "border" + a : a] = function(o, l, u, f, c) {
        var _, d;
        if (arguments.length < 4)
            return _ = s.map(function(p) {
                return bt(o, p, u)
            }),
            d = _.join(" "),
            d.split(_[0]).length === 5 ? _[0] : d;
        _ = (f + "").split(" "),
        d = {},
        s.forEach(function(p, h) {
            return d[p] = _[h] = _[h] || _[(h - 1) / 2 | 0]
        }),
        o.init(l, d, c)
    }
});
var Xi = {
    name: "css",
    register: Ii,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, r, n) {
        var s = this._props, o = t.style, l = i.vars.startAt, u, f, c, _, d, p, h, m, y, v, x, T, g, b, S, P;
        Bi || Ii(),
        this.styles = this.styles || Gr(t),
        P = this.styles.props,
        this.tween = i;
        for (h in e)
            if (h !== "autoRound" && (f = e[h],
            !(tt[h] && ki(h, e, i, r, t, n)))) {
                if (d = typeof f,
                p = Ge[h],
                d === "function" && (f = f.call(i, r, t, n),
                d = typeof f),
                d === "string" && ~f.indexOf("random(") && (f = ee(f)),
                p)
                    p(this, t, h, f, i) && (S = 1);
                else if (h.substr(0, 2) === "--")
                    u = (getComputedStyle(t).getPropertyValue(h) + "").trim(),
                    f += "",
                    Tt.lastIndex = 0,
                    Tt.test(u) || (m = G(u),
                    y = G(f)),
                    y ? m !== y && (u = Rt(t, h, u, y) + y) : m && (f += m),
                    this.add(o, "setProperty", u, f, r, n, 0, 0, h),
                    s.push(h),
                    P.push(h, 0, o[h]);
                else if (d !== "undefined") {
                    if (l && h in l ? (u = typeof l[h] == "function" ? l[h].call(i, r, t, n) : l[h],
                    Y(u) && ~u.indexOf("random(") && (u = ee(u)),
                    G(u + "") || u === "auto" || (u += rt.units[h] || G(bt(t, h)) || ""),
                    (u + "").charAt(1) === "=" && (u = bt(t, h))) : u = bt(t, h),
                    _ = parseFloat(u),
                    v = d === "string" && f.charAt(1) === "=" && f.substr(0, 2),
                    v && (f = f.substr(2)),
                    c = parseFloat(f),
                    h in pt && (h === "autoAlpha" && (_ === 1 && bt(t, "visibility") === "hidden" && c && (_ = 0),
                    P.push("visibility", 0, o.visibility),
                    Dt(this, o, "visibility", _ ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)),
                    h !== "scale" && h !== "transform" && (h = pt[h],
                    ~h.indexOf(",") && (h = h.split(",")[0]))),
                    x = h in St,
                    x) {
                        if (this.styles.save(h),
                        T || (g = t._gsap,
                        g.renderTransform && !e.parseTransform || Te(t, e.parseTransform),
                        b = e.smoothOrigin !== !1 && g.smooth,
                        T = this._pt = new Z(this._pt,o,F,0,1,g.renderTransform,g,0,-1),
                        T.dep = 1),
                        h === "scale")
                            this._pt = new Z(this._pt,g,"scaleY",g.scaleY,(v ? Xt(g.scaleY, v + c) : c) - g.scaleY || 0,Fi),
                            this._pt.u = 0,
                            s.push("scaleY", h),
                            h += "X";
                        else if (h === "transformOrigin") {
                            P.push(nt, 0, o[nt]),
                            f = Hs(f),
                            g.svg ? Hi(t, f, 0, b, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0,
                            y !== g.zOrigin && Dt(this, g, "zOrigin", g.zOrigin, y),
                            Dt(this, o, h, Ke(u), Ke(f)));
                            continue
                        } else if (h === "svgOrigin") {
                            Hi(t, f, 1, b, 0, this);
                            continue
                        } else if (h in $r) {
                            Vs(this, g, h, _, v ? Xt(_, v + f) : f);
                            continue
                        } else if (h === "smoothOrigin") {
                            Dt(this, g, "smooth", g.smooth, f);
                            continue
                        } else if (h === "force3D") {
                            g[h] = f;
                            continue
                        } else if (h === "transform") {
                            Xs(this, f, t);
                            continue
                        }
                    } else
                        h in o || (h = se(h) || h);
                    if (x || (c || c === 0) && (_ || _ === 0) && !Ss.test(f) && h in o)
                        m = (u + "").substr((_ + "").length),
                        c || (c = 0),
                        y = G(f) || (h in rt.units ? rt.units[h] : m),
                        m !== y && (_ = Rt(t, h, u, y)),
                        this._pt = new Z(this._pt,x ? g : o,h,_,(v ? Xt(_, v + c) : c) - _,!x && (y === "px" || h === "zIndex") && e.autoRound !== !1 ? ks : Fi),
                        this._pt.u = y || 0,
                        m !== y && y !== "%" && (this._pt.b = u,
                        this._pt.r = Os);
                    else if (h in o)
                        Is.call(this, t, h, u, v ? v + f : f);
                    else if (h in t)
                        this.add(t, h, u || t[h], v ? v + f : f, r, n);
                    else if (h !== "parseTransform") {
                        Ve(h, f);
                        continue
                    }
                    x || (h in o ? P.push(h, 0, o[h]) : P.push(h, 1, u || t[h])),
                    s.push(h)
                }
            }
        S && Ai(this)
    },
    render: function(t, e) {
        if (e.tween._time || !Yi())
            for (var i = e._pt; i; )
                i.r(t, i.d),
                i = i._next;
        else
            e.styles.revert()
    },
    get: bt,
    aliases: pt,
    getSetter: function(t, e, i) {
        var r = pt[e];
        return r && r.indexOf(",") < 0 && (e = r),
        e in St && e !== nt && (t._gsap.x || bt(t, "x")) ? i && zr === i ? e === "scale" ? Ms : Ls : (zr = i || {}) && (e === "scale" ? As : Ds) : t.style && !Ne(t.style[e]) ? Es : ~e.indexOf("-") ? Cs : qe(t, e)
    },
    core: {
        _removeProperty: Qt,
        _getMatrix: Vi
    }
};
j.utils.checkPrefix = se;
j.core.getStyleSaver = Gr;
(function(a, t, e, i) {
    var r = $(a + "," + t + "," + e, function(n) {
        St[n] = 1
    });
    $(t, function(n) {
        rt.units[n] = "deg",
        $r[n] = 1
    }),
    pt[r[13]] = a + "," + t,
    $(i, function(n) {
        var s = n.split(":");
        pt[s[1]] = r[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
$("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
    rt.units[a] = "px"
});
j.registerPlugin(Xi);
var Pt = j.registerPlugin(Xi) || j
  , Zs = Pt.core.Tween;
var J, nn, Ot, gt, Ft, sn, on, Qe, an = function() {
    return typeof window < "u"
}, ln = function() {
    return J || an() && (J = window.gsap) && J.registerPlugin && J
}, un = function(t) {
    return typeof t == "string"
}, tn = function(t) {
    return typeof t == "function"
}, we = function(t, e) {
    var i = e === "x" ? "Width" : "Height"
      , r = "scroll" + i
      , n = "client" + i;
    return t === Ot || t === gt || t === Ft ? Math.max(gt[r], Ft[r]) - (Ot["inner" + i] || gt[n] || Ft[n]) : t[r] - t["offset" + i]
}, be = function(t, e) {
    var i = "scroll" + (e === "x" ? "Left" : "Top");
    return t === Ot && (t.pageXOffset != null ? i = "page" + e.toUpperCase() + "Offset" : t = gt[i] != null ? gt : Ft),
    function() {
        return t[i]
    }
}, Us = function(t, e, i, r) {
    if (tn(t) && (t = t(e, i, r)),
    typeof t != "object")
        return un(t) && t !== "max" && t.charAt(1) !== "=" ? {
            x: t,
            y: t
        } : {
            y: t
        };
    if (t.nodeType)
        return {
            y: t,
            x: t
        };
    var n = {}, s;
    for (s in t)
        n[s] = s !== "onAutoKill" && tn(t[s]) ? t[s](e, i, r) : t[s];
    return n
}, fn = function(t, e) {
    if (t = sn(t)[0],
    !t || !t.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var i = t.getBoundingClientRect()
      , r = !e || e === Ot || e === Ft
      , n = r ? {
        top: gt.clientTop - (Ot.pageYOffset || gt.scrollTop || Ft.scrollTop || 0),
        left: gt.clientLeft - (Ot.pageXOffset || gt.scrollLeft || Ft.scrollLeft || 0)
    } : e.getBoundingClientRect()
      , s = {
        x: i.left - n.left,
        y: i.top - n.top
    };
    return !r && e && (s.x += be(e, "x")(),
    s.y += be(e, "y")()),
    s
}, en = function(t, e, i, r, n) {
    return !isNaN(t) && typeof t != "object" ? parseFloat(t) - n : un(t) && t.charAt(1) === "=" ? parseFloat(t.substr(2)) * (t.charAt(0) === "-" ? -1 : 1) + r - n : t === "max" ? we(e, i) - n : Math.min(we(e, i), fn(t, e)[i] - n)
}, rn = function() {
    J = ln(),
    an() && J && typeof document < "u" && document.body && (Ot = window,
    Ft = document.body,
    gt = document.documentElement,
    sn = J.utils.toArray,
    J.config({
        autoKillThreshold: 7
    }),
    on = J.config(),
    nn = 1)
}, oe = {
    version: "3.12.5",
    name: "scrollTo",
    rawVars: 1,
    register: function(t) {
        J = t,
        rn()
    },
    init: function(t, e, i, r, n) {
        nn || rn();
        var s = this
          , o = J.getProperty(t, "scrollSnapType");
        s.isWin = t === Ot,
        s.target = t,
        s.tween = i,
        e = Us(e, r, t, n),
        s.vars = e,
        s.autoKill = !!e.autoKill,
        s.getX = be(t, "x"),
        s.getY = be(t, "y"),
        s.x = s.xPrev = s.getX(),
        s.y = s.yPrev = s.getY(),
        Qe || (Qe = J.core.globals().ScrollTrigger),
        J.getProperty(t, "scrollBehavior") === "smooth" && J.set(t, {
            scrollBehavior: "auto"
        }),
        o && o !== "none" && (s.snap = 1,
        s.snapInline = t.style.scrollSnapType,
        t.style.scrollSnapType = "none"),
        e.x != null ? (s.add(s, "x", s.x, en(e.x, t, "x", s.x, e.offsetX || 0), r, n),
        s._props.push("scrollTo_x")) : s.skipX = 1,
        e.y != null ? (s.add(s, "y", s.y, en(e.y, t, "y", s.y, e.offsetY || 0), r, n),
        s._props.push("scrollTo_y")) : s.skipY = 1
    },
    render: function(t, e) {
        for (var i = e._pt, r = e.target, n = e.tween, s = e.autoKill, o = e.xPrev, l = e.yPrev, u = e.isWin, f = e.snap, c = e.snapInline, _, d, p, h, m; i; )
            i.r(t, i.d),
            i = i._next;
        _ = u || !e.skipX ? e.getX() : o,
        d = u || !e.skipY ? e.getY() : l,
        p = d - l,
        h = _ - o,
        m = on.autoKillThreshold,
        e.x < 0 && (e.x = 0),
        e.y < 0 && (e.y = 0),
        s && (!e.skipX && (h > m || h < -m) && _ < we(r, "x") && (e.skipX = 1),
        !e.skipY && (p > m || p < -m) && d < we(r, "y") && (e.skipY = 1),
        e.skipX && e.skipY && (n.kill(),
        e.vars.onAutoKill && e.vars.onAutoKill.apply(n, e.vars.onAutoKillParams || []))),
        u ? Ot.scrollTo(e.skipX ? _ : e.x, e.skipY ? d : e.y) : (e.skipY || (r.scrollTop = e.y),
        e.skipX || (r.scrollLeft = e.x)),
        f && (t === 1 || t === 0) && (d = r.scrollTop,
        _ = r.scrollLeft,
        c ? r.style.scrollSnapType = c : r.style.removeProperty("scroll-snap-type"),
        r.scrollTop = d + 1,
        r.scrollLeft = _ + 1,
        r.scrollTop = d,
        r.scrollLeft = _),
        e.xPrev = e.x,
        e.yPrev = e.y,
        Qe && Qe.update()
    },
    kill: function(t) {
        var e = t === "scrollTo"
          , i = this._props.indexOf(t);
        return (e || t === "scrollTo_x") && (this.skipX = 1),
        (e || t === "scrollTo_y") && (this.skipY = 1),
        i > -1 && this._props.splice(i, 1),
        !this._props.length
    }
};
oe.max = we;
oe.getOffset = fn;
oe.buildGetter = be;
ln() && J.registerPlugin(oe);
Pt.registerPlugin(oe);
var Se = class {
    constructor(t, e=.6) {
        this.currentX = 0;
        this.currentY = 0;
        this.offsetY = 0;
        this.speed = 0;
        this.offsetTarget = null;
        this.init = () => {
            if (window.location.hash) {
                let e = document.querySelector(window.location.hash);
                e && ("scrollRestoration"in window.history && (window.history.scrollRestoration = "manual"),
                this.go2DefaultTarget(e))
            }
            let t = Array.prototype.slice.call(document.querySelectorAll('a[href*="#"]:not(.not-anchor)'));
            for (let e of t) {
                let r = `#${e.getAttribute("href")?.split("#")[1]}`;
                r && r.length > 1 && e.addEventListener("click", this.go2Anchor, !1)
            }
        }
        ;
        this.go2DefaultTarget = t => {
            let e = this.offsetY;
            this.offsetTarget && (e = this.offsetTarget.offsetHeight);
            try {
                Pt.killTweensOf(window),
                Pt.set(window, {
                    scrollTo: {
                        x: t,
                        y: t,
                        offsetY: e
                    }
                })
            } catch {
                let r = t.offsetLeft
                  , n = t.offsetTop - e;
                window.scrollTo(r, n)
            }
        }
        ;
        this.go2Anchor = t => {
            let e = this.offsetY;
            this.offsetTarget && (e = this.offsetTarget.offsetHeight);
            let r = `#${t.currentTarget.getAttribute("href")?.split("#")[1]}`
              , n = document.querySelector(r);
            if (n) {
                try {
                    Pt.killTweensOf(window),
                    Pt.to(window, this.speed, {
                        scrollTo: {
                            x: n,
                            y: n,
                            autoKill: !1,
                            offsetY: e
                        },
                        ease: "power1.inOut"
                    })
                } catch {
                    this.currentX = window.scrollX || window.pageXOffset,
                    this.currentY = window.scrollY || window.pageYOffset;
                    let o = n.offsetLeft
                      , l = n.offsetTop - e;
                    Pt.killTweensOf(this),
                    Pt.to(this, this.speed, {
                        currentX: o,
                        currentY: l,
                        ease: "power1.inOut",
                        onUpdate: () => {
                            window.scrollTo(this.currentX, this.currentY)
                        }
                    })
                }
                t.preventDefault()
            }
        }
        ;
        this.speed = e,
        typeof t == "number" && (this.offsetY = t),
        typeof t == "string" && (this.offsetTarget = document.querySelector(t)),
        window.addEventListener("load", this.init, !1)
    }
}
;
// var Pe = class {
//     constructor() {
//         this._formInstance = [];
//         this.init = () => {
//             this._formInstance = [];
//             let t = Array.prototype.slice.call(document.getElementsByTagName("form"));
//             for (let e of t)
//                 this._formInstance && this._formInstance.push(new Ui(e))
//         }
//         ;
//         window.addEventListener("pageshow", this.init, !1)
//     }
// }
//   , Ui = class {
//     constructor(t) {
//         this._isCanSubmit = !0;
//         t && (t.onsubmit = () => this._isCanSubmit ? (document.querySelector('.form-wrapper--confirm button[type="submit"]')?.classList.add("disabled"),
//         this._isCanSubmit = !1,
//         !0) : !1)
//     }
// }
// ;
var Wi = a => Array.prototype.slice.call(document.querySelectorAll(a));
var Oe = class {
    constructor() {
        this.addEventListener = (t, e) => {
            this.listeners[t] == null && (this.listeners[t] = []),
            this.listeners[t].push(e)
        }
        ;
        this.removeEventListener = (t, e) => {
            if (e) {
                let i = this.listeners[t]
                  , r = i.length;
                for (let n = 0; n < r; n += 1)
                    i[n] === e && i.splice(n, 1)
            } else
                this.listeners[t] && (this.listeners[t] = [])
        }
        ;
        this.dispatchEvent = (t, e) => {
            e === void 0 && (e = null);
            let i = this.listeners[t];
            if (i != null)
                for (let r = 0, n = i.length; r < n; r += 1) {
                    let s = i[r];
                    s && s({
                        target: this,
                        data: e
                    })
                }
        }
        ;
        this.listeners = {}
    }
}
;
var yt = class yt {
    static get isPassive() {
        return yt.HAS_PASSIVE ? {
            passive: !0
        } : !1
    }
}
;
yt.IS_SP = !1,
yt.Dispatcher = new Oe,
yt.HAS_PASSIVE = !1,
yt.log = t => {}
,
yt.dir = t => {}
,
yt.warn = t => {}
,
yt.getQueryAsObject = () => {
    let t = {}
      , i = location.search.split(/[?&]/);
    for (let r = 0, n = i.length; r < n; ++r) {
        let s = i[r].split("=")
          , o = decodeURI(s[0])
          , l = decodeURI(s[1]);
        o && (t[o] = l)
    }
    return t
}
;
var U = yt;
try {
    let a = () => {}
      , t = Object.defineProperty({}, "passive", {
        get() {
            return U.HAS_PASSIVE = !0,
            !0
        }
    });
    window.addEventListener("test", a, t),
    window.removeEventListener("test", a)
} catch {
    U.HAS_PASSIVE = !1
}
var ke = class {
    constructor() {
        this.init = () => {
            this.target && (this.activeMenu(),
            this.addClickEventsToLink(),
            this.target.addEventListener("click", this.handleToggle, !1),
            window.addEventListener("resize", () => {
                this.winWidth !== window.innerWidth && (this.winWidth = window.innerWidth,
                this.Sticky(),
                this.changeMenuDevice()),
                this.winHeight !== window.innerHeight && (this.setHeightResize(),
                this.winHeight = window.innerHeight)
            }
            , !1),
            window.addEventListener("load", this.Sticky, !1),
            window.addEventListener("scroll", this.Sticky, !1))
        }
        ;
        this.handleToggle = () => {
            window.innerWidth > 768 || (this.setHeightMenu(),
            this.isOpen = !this.isOpen,
            this.isOpen ? this.open() : this.close())
        }
        ;
        this.Sticky = () => {
            this.header && (window.pageYOffset > 0 ? this.header.classList.add("is-fixed") : this.header.classList.remove("is-fixed"))
        }
        ;
        this.setHeightMenu = () => {
            if (this.menuHolder) {
                let e = window.innerHeight || 0
                  , i = this.header?.clientHeight || 0
                  , r = e - i;
                this.menuHolder.style.transition = `height ${.4 * r}ms linear`,
                this.isOpen ? this.menuHolder.style.height = "" : (this.menuHolder.style.height = `${r}px`,
                this.menuHolder.style.visibility = "visible"),
                this.timeOutClean(.4 * r)
            }
        }
        ;
        this.timeOutClean = t => {
            setTimeout( () => {
                this.menuHolder && (this.menuHolder.style.transition = "",
                this.isOpen ? this.menuHolder.style.overflow = "auto" : (this.menuHolder.style.overflow = "",
                this.menuHolder.style.visibility = "",
                this.menuHolder.scrollTop = 0))
            }
            , t)
        }
        ;
        this.changeMenuDevice = () => {
            (window.innerWidth || 0) > 768 ? (this.removeStyle(),
            U.Dispatcher.dispatchEvent("SCROLL_RELEASE")) : this.setHeightResize()
        }
        ;
        this.removeStyle = () => {
            this.menuHolder && (this.menuHolder.style.height = "",
            this.menuHolder.style.overflow = "",
            this.menuHolder.style.visibility = "",
            this.menuHolder.scrollTop = 0)
        }
        ;
        this.setHeightResize = () => {
            if (this.menuHolder && this.winWidth <= 768) {
                let t = window.innerHeight || 0
                  , e = this.header?.clientHeight || 0
                  , i = t - e;
                this.isOpen && (document.body.style.overflow = "hidden",
                this.menuHolder.style.height = `${i}px`,
                this.menuHolder.style.visibility = "visible",
                this.menuHolder.style.overflow = "auto",
                U.Dispatcher.dispatchEvent("SCROLL_LOCK"))
            }
        }
        ;
        this.activeMenu = () => {
            let t = "is-active"
              , i = Wi(".header__nav > ul li")
              , r = document.location.pathname;
            for (let n of i) {
                let o = n.querySelector("a").getAttribute("data-name");
                r.includes(o) ? n.classList.add(t) : n.classList.remove(t)
            }
        }
        ;
        this.open = () => {
            !this.target || !this.header || (this.isOpen = !0,
            this.target.classList.add("is-active"),
            this.header.classList.add("is-active"),
            U.Dispatcher.dispatchEvent("SCROLL_LOCK"))
        }
        ;
        this.close = () => {
            !this.target || !this.header || (this.isOpen = !1,
            this.target.classList.remove("is-active"),
            this.header.classList.remove("is-active"),
            U.Dispatcher.dispatchEvent("SCROLL_RELEASE"))
        }
        ;
        this.target = document.getElementById("js-hamburger"),
        this.header = document.getElementById("header"),
        this.menuHolder = document.getElementById("js-menu"),
        this.isOpen = !1,
        this.winWidth = window.innerWidth,
        this.winHeight = window.innerHeight,
        this.init()
    }
    addClickEventsToLink() {
        let t = Wi(".header__menu ul a:not(.js-toggle)");
        for (let e of t)
            e.addEventListener("click", () => {
                this.handleToggle(),
                U.Dispatcher.dispatchEvent("SCROLL_RELEASE")
            }
            )
    }
}
;
var Ee = class {
    constructor() {
        this.onDeviceChange = t => {
            t.matches ? U.IS_SP = !1 : U.IS_SP = !0,
            U.Dispatcher.dispatchEvent("DeviceChange")
        }
        ;
        let t = window.matchMedia("(min-width: 769px)");
        t.addEventListener ? t.addEventListener("change", this.onDeviceChange) : t.addListener(this.onDeviceChange),
        this.onDeviceChange(t)
    }
}
;
var Ce = class {
    constructor() {
        let t = Array.prototype.slice.call(document.getElementsByClassName("intersect-elem"));
        for (let e of t)
            new qi(e)
    }
}
  , qi = class {
    constructor(t) {
        this.io = null;
        this.onIntersect = t => {
            if (t[0].isIntersecting) {
                let e = this.node.dataset.delay ? Number(this.node.dataset.delay) : 0;
                setTimeout( () => {
                    this.node.classList.add("active"),
                    this.io?.unobserve(this.node),
                    this.io = null
                }
                , e * 1e3)
            }
        }
        ;
        this.node = t,
        !this.node.classList.toString().includes("standby") && (this.node.classList.add("standby"),
        this.io = new IntersectionObserver(this.onIntersect,{
            rootMargin: "-20% 0% -20% 0%"
        }),
        this.io.observe(this.node))
    }
}
;
var Le = class {
    constructor() {
        this.prevTop = 0;
        this.isLock = !1;
        this.isToggle = !1;
        this.lock = () => {
            !this.isToggle && this.isLock || (this.isLock = !0,
            this.prevTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop,
            document.body.style.position = "fixed",
            document.body.style.left = "0",
            document.body.style.top = `${-this.prevTop}px`,
            document.body.style.width = "100%")
        }
        ;
        this.release = () => {
            !this.isToggle && !this.isLock || (this.isLock = !1,
            document.body.removeAttribute("style"),
            document.documentElement.style.scrollBehavior = "auto",
            window.scrollTo(0, this.prevTop),
            document.documentElement.style.scrollBehavior = "")
        }
        ;
        this.toggle = () => {
            this.isToggle = !0,
            this.isLock = !this.isLock,
            this.isLock ? this.lock() : this.release(),
            this.isToggle = !1
        }
        ;
        U.Dispatcher.addEventListener("SCROLL_LOCK", this.lock),
        U.Dispatcher.addEventListener("SCROLL_RELEASE", this.release)
    }
}
;
new Ee;
new Le;
var je = class {
    constructor() {
        new Ce,
        new ke,
        new Se("#header"),
        new pe
    }
}
;
window.addEventListener("DOMContentLoaded", () => {
    new je
}
);
export {je as default};
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollToPlugin.js:
  (*!
   * ScrollToPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
