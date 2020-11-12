var _tmr = _tmr || [];
(function () {
  function v(a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function A(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function Q(a, b) {
    var c, d;
    if (!a) return "";
    var e = typeof a;
    if (
      "number" === e ||
      "boolean" === e ||
      "string" === e ||
      a.nodeType ||
      a === a.window
    )
      return "";
    e = [];
    if ("[object Array]" === Object.prototype.toString.call(a)) {
      c = 0;
      for (d = a.length; c < d; c++) qa(e, null, a[c], b);
      c = "[";
      d = "]";
    } else {
      for (c in a) a.hasOwnProperty(c) && qa(e, c, a[c], b);
      c = "{";
      d = "}";
    }
    return !e.length ? "" : c + e.join(",") + d;
  }
  function qa(a, b, c, d) {
    var e = typeof c;
    if ("string" === e) c = '"' + c.replace(/[\"\']/g, "\\$&") + '"';
    else if (!("number" === e || "boolean" === e))
      if (((c = d ? "" : Q(c)), !c.length)) return;
    a.push((null === b ? "" : '"' + b + '":') + c);
  }
  function ra(a) {
    var b = "";
    try {
      var c = new Uint8Array(a);
      window.crypto.getRandomValues(c);
      for (var d = 0; d < a; d++) b += (c[d] % 16).toString(16);
    } catch (e) {
      b = "";
      for (d = 0; d < a; d++)
        (c = Math.floor(16 * Math.random())), (b += c.toString(16));
    }
    return b;
  }
  function t() {
    return new Date().getTime();
  }
  function m(a, b) {
    var c = { data: b, raw: a, url: "https://top-fwz1.mail.ru" + a },
      d;
    "function" !== typeof w.sendBeacon
      ? (d = !1)
      : ((c.dataSplitter = ";"),
        (d = R(c.data, c.dataSplitter)),
        (d = !0 === w.sendBeacon(c.url, d)));
    d ||
      (void 0 === b
        ? ((c.dataSplitter = ";"),
          (c.open = Sa),
          (c.connect = Ta),
          (c.startListen = Ua),
          (c.stopListen = Va),
          c.open(c),
          c.connect(c))
        : ("function" === typeof f.XMLHttpRequest
            ? ((c.dataSplitter = ";"),
              (c.open = Wa),
              (c.connect = Xa),
              (c.startListen = Ya),
              (c.stopListen = Za),
              c.open(c),
              c.connect(c),
              (d = !0))
            : (d = !1),
          d || $a(c)));
  }
  function $a(a) {
    var b = g.createElement("iframe"),
      c = g.createElement("div");
    c.setAttribute(
      "style",
      "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;"
    );
    c.appendChild(b);
    g.body.appendChild(c);
    try {
      var d = b.contentWindow.document,
        e = d.createElement("div"),
        n;
      for (n in a.data)
        if (a.data.hasOwnProperty(n)) {
          var x = a.data[n],
            I = typeof x;
          if ("string" === I || "number" === I) {
            var q = d.createElement("input");
            q.setAttribute("type", "hidden");
            q.setAttribute("name", n);
            q.value = x;
            e.appendChild(q);
          }
        }
      var f = d.createElement("form");
      f.setAttribute("action", a.url);
      f.setAttribute("method", sa);
      f.setAttribute("enctype", ta);
      f.appendChild(e);
      var h = d.createElement("div");
      h.appendChild(f);
      d.body.appendChild(h);
      var E = function () {
        try {
          A(b, "load", E), g.body.removeChild(c);
        } catch (a) {
          k && console.warn("[TopMailRu] Error#1.2", a);
        }
      };
      v(b, "load", E);
      f.submit();
    } catch (p) {
      k && console.warn("[TopMailRu] Error#1.3", p);
    }
  }
  function Wa(a) {
    a._connection = new f.XMLHttpRequest();
  }
  function Xa(a) {
    a._connection.open(sa, a.url);
    a._connection.setRequestHeader("Content-Type", ta);
    a._connection.send(R(a.data, a.dataSplitter));
  }
  function Ya(a) {
    v(a._connection, "load", a._onload);
    v(a._connection, "error", a._onerror);
  }
  function Za(a) {
    A(a._connection, "load", a._onload);
    A(a._connection, "error", a._onerror);
  }
  function Sa(a) {
    a._connection = new Image();
  }
  function Ta(a) {
    a._connection.src = a.url + R(a.data, a.dataSplitter);
  }
  function Ua(a) {
    a._connection.onload = a._onload;
    a._connection.onerror = a._onerror;
  }
  function Va(a) {
    a._connection.onload = null;
    a._connection.onerror = null;
  }
  function R(a, b) {
    var c = b || ";",
      d = "",
      e;
    for (e in a)
      if (a.hasOwnProperty(e)) {
        var n = a[e],
          x = typeof n;
        if ("string" === x || "number" === x)
          d += c + escape(e) + "=" + escape(n);
      }
    return d;
  }
  function da(a) {
    return (a = g.cookie.match(
      RegExp(
        "(?:^|; )" +
          a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    ))
      ? decodeURIComponent(a[1])
      : null;
  }
  function J(a, b, c) {
    c = c || {};
    var d = c.expires;
    "number" === typeof c.expires &&
      ((d = new Date()), d.setTime(d.getTime() + c.expires));
    d && d.toUTCString && (d = d.toUTCString());
    c.expires = d;
    a = a + "=" + encodeURIComponent(b);
    for (var e in c)
      if ((b = c[e]) || 0 === b) (a += "; " + e), !0 !== b && (a += "=" + b);
    g.cookie = a;
  }
  function ab() {
    var a = "tmr" + ("" + Math.random()).slice(2);
    try {
      return (F = f.localStorage || null), F.setItem(a, a), F.removeItem(a), !0;
    } catch (b) {
      return (F = null), k && console.warn("[TopMailRu] Error#1.4", b), !1;
    }
  }
  function bb() {
    if (!S) return null;
    for (
      var a = u.hostname.split(".").reverse(), b, c = 1, d = a.length;
      c < d;
      c++
    ) {
      b = a[0];
      for (var e = 1; e <= c; e++) b = a[e] + "." + b;
      var e = "" + t(),
        n = { domain: b, path: "/", expires: 3e5 };
      try {
        J("tmr_tcdhn", e, n);
        var x = da("tmr_tcdhn"),
          n = n || {};
        n.expires = -1;
        J("tmr_tcdhn", "", n);
        if (x === e) return b;
      } catch (f) {
        k && console.warn("[TopMailRu] Error#1.8", f);
      }
    }
    return null;
  }
  function T(a, b) {
    S && J(a, b, va);
    if (ea)
      try {
        F.setItem(a, b);
      } catch (c) {
        k && console.warn("[TopMailRu] Error#1.6", c);
      }
  }
  function fa(a) {
    var b;
    if (!(b = S ? da(a) : null)) {
      var c;
      if (ea)
        a: {
          try {
            c = F.getItem(a);
            break a;
          } catch (d) {
            k && console.warn("[TopMailRu] Error#1.5", d);
          }
          c = null;
        }
      else c = null;
      b = c;
    }
    return b;
  }
  function wa(a) {
    var b = ";e=" + escape("detect");
    m(y(a, "/tracker", !1, !1) + b);
  }
  function xa(a, b) {
    if (a.length) {
      var c = Q(b);
      4096 < c.length ||
        m("/datalayer", {
          js: "13",
          id: a[0],
          e: c,
          sid: ga,
          ids: a.join(),
          ver: ha,
          _: Math.random(),
        });
    }
  }
  function h() {}
  function U(a) {
    a && "object" === typeof a && !B && "id" in a && (B = a.id);
  }
  function cb(a) {
    return (a = !C ? void 0 : C[a]) && ia ? a - ia : void 0;
  }
  function ya() {
    if (C) {
      for (
        var a = 0,
          b = "domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(
            " "
          ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = !C ? void 0 : C[b[c]];
        if (0 < d && (d < a || 0 == a)) a = d;
      }
      return a ? a : void 0;
    }
  }
  function V(a) {
    return a && "object" === typeof a && (("id" in a && a.id) || B);
  }
  function y(a, b, c, d) {
    T(ja, ++G);
    var e = "id" in a ? a.id : B,
      n = "url" in a ? a.url : u.href,
      x = "referrer" in a ? a.referrer : g.referrer,
      I = "title" in a ? a.title : g.title,
      q;
    q = ka;
    null === q && (q = db());
    q = null !== q ? (q ? 1 : 0) : null;
    var h = "userid" in a ? a.userid : z || 0 === z ? z : void 0,
      l;
    l = [];
    B && e !== B && l.push("sec");
    "dataLayer" in f && l.push("dl");
    D && l.push(["ecom"].concat(D).join("-"));
    l = l.join(",");
    var E = f.screen,
      p;
    p = new Date().getTimezoneOffset();
    var ua = "";
    if (f.Intl)
      try {
        ua = f.Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      } catch (m) {
        k && console.warn("[TopMailRu] Error#1.1", m);
      }
    p = p + "/" + ua;
    a.start = ya();
    b =
      b +
      "?js=13" +
      (e ? ";id=" + escape(e) : "") +
      (n ? ";u=" + escape(n) : "") +
      (x ? ";r=" + escape(x) : "") +
      (a.start ? ";st=" + escape(a.start) : "") +
      ("gender" in a ? ";gender=" + escape(a.gender) : "") +
      ("age" in a ? ";age=" + escape(a.age) : "") +
      ("pid" in a ? ";pid=" + escape(a.pid) : "") +
      (void 0 !== h ? ";userid=" + escape(h) : "") +
      (d && I ? ";title=" + encodeURIComponent(I) : "") +
      (E ? ";s=" + E.width + "*" + E.height : "") +
      ";vp=";
    e = d = 0;
    g.documentElement &&
    (g.documentElement.clientWidth || g.documentElement.clientHeight)
      ? ((d = g.documentElement.clientWidth),
        (e = g.documentElement.clientHeight))
      : "number" == typeof f.innerWidth &&
        ((d = f.innerWidth), (e = f.innerHeight));
    b = b + ("" + d + "*" + e) + ";touch=" + eb + ";hds=" + fb + ";flash=";
    if (null === K)
      if (((K = ""), w.plugins && w.plugins["Shockwave Flash"]))
        K = w.plugins["Shockwave Flash"].description.split(" ")[2];
      else if (f.ActiveXObject)
        try {
          var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
            r = r.GetVariable("$version"),
            r = r.split(" ")[1].split(",");
          K = r[0] + "." + r[1];
        } catch (s) {
          k && console.warn("[TopMailRu] Error#1.12", s);
        }
    r = b + K + ";sid=" + ga + ";ver=" + ha + ";tz=" + encodeURIComponent(p);
    if (c) {
      if (!C || !la) c = "";
      else {
        c = [];
        c.push(la.type);
        c.push(la.redirectCount);
        c.push(ia);
        for (b = 0; b < za.length; b++) c.push(cb(za[b]));
        c = c.join("/");
      }
      c = ";nt=" + c;
    } else c = "";
    c = r + c + ("device" in a ? ";device=" + escape(a.device) : "") + ";ni=";
    if (!w || !w.connection) r = "";
    else {
      r = w.connection;
      b = [];
      for (e = 0; e < Aa.length; e++) {
        d = r[Aa[e]];
        if (void 0 !== d)
          switch (d) {
            case !0:
              d = 1;
              break;
            case !1:
              d = 0;
              break;
            default:
              d = ("" + d).replace(/\//g, "_");
          }
        b.push(d);
      }
      r = b.join("/");
    }
    return (
      c +
      r +
      ("params" in a ? ";params=" + escape(Q(a.params, !1)) : "") +
      (null !== q ? ";detect=" + q : "") +
      (S || ea ? ";lvid=" + escape([L, t(), G, H].join(":")) : "") +
      (l ? ";opts=" + escape(l) : "") +
      ("version" in a ? ";appver=" + escape(a.version) : "") +
      ";_=" +
      Math.random()
    );
  }
  function Ba(a) {
    a = ";e=" + escape("PVT/" + a);
    for (var b = 0; b < l.length; b++) m(y(l[b], "/tracker", !1, !0) + a);
  }
  function gb() {
    ka = !0;
    Ca(1);
    if (!Da && !M) {
      M = !0;
      for (var a = 0; a < l.length; a++) wa(l[a]);
    }
  }
  function hb() {
    Ca(0);
    ka = !1;
  }
  function db() {
    var a = da(Ea);
    if (null === a) return null;
    a = a.split("|");
    if (2 !== a.length) return null;
    var b = a[1],
      b = t() - b;
    if (0 > b || b > Fa) return null;
    a = parseInt(a[0], 10);
    return isNaN(a) ? null : a;
  }
  function Ca(a) {
    var b = t();
    a = [a, b].join("|");
    J(Ea, a, { path: "/", expires: Fa });
  }
  function W() {
    g.addEventListener
      ? (A(g, "DOMContentLoaded", W), _tmr.onready())
      : g.attachEvent &&
        "complete" === g.readyState &&
        (A(g, "readystatechange", W), _tmr.onready());
  }
  function Ga() {
    A(f, "load", Ga);
    _tmr.onready();
    _tmr.onload();
  }
  function X() {
    A(f, "unload", X);
    A(f, "beforeunload", X);
    _tmr.unload();
  }
  if ("[object Array]" === Object.prototype.toString.call(_tmr)) {
    var f = window,
      w = navigator,
      g = document,
      u = location,
      N = "string" === typeof u.hostname ? u.hostname : "",
      Y =
        -1 != N.search(/(^|\.)odnoklassniki\.ru$/) ||
        -1 != N.search(/(^|\.)ok\.ru$/),
      Z = -1 != N.search(/(^|\.)vk\.com$/),
      ib = -1 != N.search(/(^|\.)lamoda\.ru$/),
      jb = -1 != N.search(/(^|\.)kommersant\.ru$/),
      kb =
        "string" === typeof u.search &&
        -1 != u.search.search(/[?&]rb_clickid=/),
      k =
        "string" === typeof u.search &&
        -1 != u.search.search(/[?&]tmr_debug=1(?:&|$)/),
      Ha = Y || Z || ib || jb,
      lb = !kb,
      mb = Y || Z,
      nb = Y || Z,
      Ia = Y || Z,
      Da = !1,
      sa = "POST",
      ta = "application/x-www-form-urlencoded",
      S = !(
        0 === u.hostname.search(/^(\d+.)+\d+$/g) ||
        -1 !== u.hostname.search(/:/g)
      ),
      F = null,
      ea = ab(),
      va = { domain: bb(), path: "/", expires: 287712e5 };
    (function () {
      var a;
      if (
        (a = g.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)", "g")))
      ) {
        for (var b = [], c, d = 0, e = a.length; d < e; d++)
          (c = a[d]),
            (c = c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/)) &&
              b.push(c.slice(1));
        a = b;
      } else a = null;
      if (a) {
        b = 0;
        for (d = a.length; b < d; b++)
          (e = a[b][0]), (c = va || {}), (c.expires = -1), J(e, "", c);
      }
    })();
    var M = !1,
      ka = null,
      Fa = 864e5,
      Ea = "tmr_detect",
      ob = (function () {
        function a(a, c) {
          var d = g.createElement("div");
          d.setAttribute(
            "class",
            String.fromCharCode(
              97,
              100,
              118,
              98,
              108,
              111,
              99,
              107,
              32,
              97,
              100,
              118,
              101,
              114,
              116,
              98,
              108,
              111,
              99,
              107,
              32,
              97,
              109,
              109,
              98,
              108,
              111,
              99,
              107,
              32,
              98,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              98,
              45,
              109,
              101,
              100,
              105,
              97,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              112,
              117,
              98,
              95,
              51,
              48,
              48,
              120,
              50,
              53,
              48,
              32,
              112,
              117,
              98,
              95,
              51,
              48,
              48,
              120,
              50,
              53,
              48,
              109,
              32,
              109,
              101,
              100,
              105,
              117,
              109,
              95,
              114,
              101,
              99,
              116,
              97,
              110,
              103,
              108,
              101,
              95,
              51,
              48,
              48,
              95,
              50,
              53,
              48,
              32,
              112,
              117,
              98,
              95,
              55,
              50,
              56,
              120,
              57,
              48,
              32,
              108,
              101,
              97,
              100,
              101,
              114,
              98,
              111,
              97,
              114,
              100,
              95,
              55,
              50,
              56,
              95,
              57,
              48,
              32,
              119,
              105,
              100,
              101,
              95,
              115,
              107,
              121,
              115,
              99,
              114,
              97,
              112,
              101,
              114,
              95,
              49,
              54,
              48,
              95,
              54,
              48,
              48,
              32,
              119,
              105,
              100,
              101,
              95,
              115,
              107,
              121,
              115,
              99,
              114,
              97,
              112,
              101,
              114,
              95,
              49,
              54,
              48,
              120,
              54,
              48,
              48,
              32,
              116,
              101,
              120,
              116,
              45,
              97,
              100,
              32,
              116,
              101,
              120,
              116,
              65,
              100,
              32,
              116,
              101,
              120,
              116,
              95,
              97,
              100,
              32,
              116,
              101,
              120,
              116,
              95,
              97,
              100,
              115,
              32,
              116,
              101,
              120,
              116,
              45,
              97,
              100,
              115,
              32,
              116,
              101,
              120,
              116,
              45,
              97,
              100,
              45,
              108,
              105,
              110,
              107,
              115,
              32,
              97,
              100,
              95,
              116,
              101,
              120,
              116,
              32,
              97,
              100,
              95,
              116,
              101,
              120,
              116,
              32,
              98,
              97,
              110,
              110,
              101,
              114,
              95,
              116,
              101,
              120,
              116,
              32,
              116,
              101,
              120,
              116,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              98,
              45,
              114,
              98,
              32,
              114,
              98,
              45,
              115,
              108,
              111,
              116,
              32,
              98,
              45,
              112,
              114,
              111,
              109,
              111,
              45,
              97,
              100,
              32,
              105,
              45,
              98,
              114,
              97,
              110,
              100,
              105,
              110,
              103,
              32,
              98,
              114,
              97,
              110,
              100,
              105,
              110,
              103,
              45,
              112,
              32,
              114,
              98,
              45,
              118,
              105,
              100,
              101,
              111,
              45,
              119,
              105,
              100,
              103,
              101,
              116,
              32,
              98,
              45,
              109,
              105,
              109,
              105,
              99,
              45,
              97,
              100,
              118,
              32,
              112,
              109,
              45,
              116,
              111,
              111,
              108,
              98,
              97,
              114,
              95,
              95,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              114,
              98,
              95,
              98,
              111,
              100,
              121,
              32,
              115,
              116,
              105,
              99,
              107,
              121,
              45,
              115,
              112,
              114,
              105,
              110,
              103,
              115,
              32,
              97,
              100,
              118,
              95,
              115,
              108,
              111,
              116,
              95,
              49,
              32,
              98,
              97,
              110,
              110,
              101,
              114,
              95,
              50,
              52,
              48,
              32,
              98,
              108,
              111,
              99,
              107,
              95,
              115,
              104,
              97,
              114,
              101,
              32,
              97,
              99,
              116,
              105,
              111,
              110,
              45,
              45,
              115,
              104,
              97,
              114,
              101,
              32,
              115,
              104,
              97,
              114,
              101,
              108,
              105,
              115,
              116,
              32,
              106,
              115,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              100,
              105,
              114,
              101,
              99,
              116,
              32,
              112,
              99,
              45,
              109,
              105,
              109,
              105,
              99,
              32,
              116,
              103,
              98,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              121,
              97,
              100,
              105,
              114,
              101,
              99,
              116,
              32,
              106,
              115,
              45,
              112,
              114,
              111,
              109,
              111,
              45,
              112,
              111,
              112,
              117,
              112,
              32,
              109,
              45,
              115,
              117,
              98,
              115,
              99,
              114,
              105,
              112,
              116,
              105,
              111,
              110,
              32,
              112,
              45,
              116,
              97,
              114,
              103,
              101,
              116,
              32,
              112,
              45,
              100,
              105,
              114,
              101,
              99,
              116,
              104,
              97,
              99,
              107,
              32,
              114,
              98,
              45,
              102,
              108,
              111,
              97,
              116,
              105,
              110,
              103,
              32,
              116,
              114,
              103,
              45,
              98,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              45,
              98,
              108,
              111,
              99,
              107
            )
          );
          d.setAttribute(
            "style",
            "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;"
          );
          d.setAttribute("id", "trg-b-banners-1");
          d.setAttribute("data-view", "SlotView.mimic");
          this.bait = g.body.appendChild(d);
          this.bait.offsetParent;
          this.bait.offsetHeight;
          this.bait.offsetLeft;
          this.bait.offsetTop;
          this.bait.offsetWidth;
          this.bait.clientHeight;
          this.bait.clientWidth;
          this.loopNumber = 0;
          this.fnPositive = a || null;
          this.fnNegative = c || null;
          var e = this;
          setTimeout(function () {
            e._checkBait.call(e);
          }, 1);
        }
        a.prototype._checkBait = function () {
          if (M) this._stop();
          else {
            var a = !1;
            null !== g.body.getAttribute("abp") ||
            null === this.bait.offsetParent ||
            0 == this.bait.offsetHeight ||
            0 == this.bait.offsetLeft ||
            0 == this.bait.offsetTop ||
            0 == this.bait.offsetWidth ||
            0 == this.bait.clientHeight ||
            0 == this.bait.clientWidth
              ? (a = !0)
              : void 0 !== f.getComputedStyle &&
                ((a = f.getComputedStyle(this.bait, null)),
                (a =
                  "none" == a.getPropertyValue("display") ||
                  "hidden" == a.getPropertyValue("visibility")));
            (!0 === a || 10 <= ++this.loopNumber) && this._stop();
            var c;
            if (a && this.fnPositive)
              try {
                (c = this.fnPositive), c();
              } catch (d) {
                k && console.warn("[TopMailRu] Error#1.9", d);
              }
            else if (!a && 10 > this.loopNumber) {
              var e = this;
              setTimeout(function () {
                e._checkBait.call(e);
              }, 50 * this.loopNumber);
            } else
              try {
                (c = this.fnNegative), c();
              } catch (n) {
                k && console.warn("[TopMailRu] Error#1.10", n);
              }
          }
        };
        a.prototype._stop = function () {
          try {
            g.body.removeChild(this.bait);
          } catch (a) {
            k && console.warn("[TopMailRu] Error#1.11", a);
          }
        };
        return function (b, c) {
          new a(b, c);
        };
      })(),
      D = null,
      Ja = !1,
      ma = [],
      Ka;
    (function () {
      function a(a) {
        for (var b = [], f, g, h = 0, l = a.length; h < l; h++)
          if ((g = a[h])) {
            f = null;
            if (g.ecommerce) {
              g = g.ecommerce;
              f = !1;
              var k = {},
                p = void 0;
              for (p in g)
                g.hasOwnProperty(p) && c[p] && ((f = !0), (k[p] = g[p]));
              f = f ? k : null;
            } else if ("event" === g[0])
              if (((k = d[g[1]]), (g = g[2]), !k || !g.items)) f = null;
              else {
                f = {};
                f[k] = { products: g.items };
                var k = !1,
                  p = {},
                  m = void 0;
                for (m in g)
                  "items" !== m &&
                    ("currency" === m
                      ? (f.currencyCode = g[m])
                      : e[m]
                      ? ((k = !0), (p[e[m]] = g[m]))
                      : g[m] && ((k = !0), (p[m] = g[m])));
                k && (f.actionField = p);
              }
            f && (b.push(f), ma.push(f));
          }
        if (b.length) {
          a = 0;
          for (h = b.length; a < h; a++) xa(La, b[a]);
          D || (D = [0, 0]);
          D[0] += b.length;
          h = a = 0;
          for (l = b.length; h < l; h++) a += Q(b[h]).length;
          D[1] += a;
        }
      }
      function b(b) {
        if ((b = f[b]) && "function" === typeof b.push) {
          a(b);
          var c = b.push;
          b.push = function () {
            var b = c.apply(this, arguments);
            a([].slice.call(arguments, 0));
            return b;
          };
        }
      }
      var c = {
          currencyCode: "currencyCode",
          detail: "detail",
          add: "add",
          remove: "remove",
          checkout: "checkout",
          purchase: "purchase",
          refund: "refund",
        },
        d = {
          view_item: c.detail,
          add_to_cart: c.add,
          remove_from_cart: c.remove,
          begin_checkout: c.checkout,
          purchase: c.purchase,
          refund: c.refund,
        },
        e = { transaction_id: "id", value: "revenue" };
      Ka = function () {
        b("dataLayer");
        Ja = !0;
      };
    })();
    var ha = "60.3.0",
      na = 0,
      $ = 0,
      ga = ra(16),
      z = null,
      aa = 0,
      ja = "tmr_reqNum",
      G = fa(ja),
      G = null === G ? 0 : parseInt(G, 10);
    T(ja, G);
    var H = fa("tmr_lvid"),
      L = fa("tmr_lvidTS");
    if (null === H || -1 === H.search(/^[0-9a-fA-F]+$/)) H = ra(32);
    T("tmr_lvid", H);
    if (null === L || -1 === L.search(/^\d+$/)) L = "" + t();
    T("tmr_lvidTS", L);
    var B = 0,
      l = [],
      ba = [],
      ca = [],
      La = [],
      eb =
        "ontouchstart" in f || 1 < (w.maxTouchPoints || w.msMaxTouchPoints)
          ? "1"
          : "0",
      fb = f.devicePixelRatio || 0,
      K = null,
      Ma =
        f.performance ||
        f.mozPerformance ||
        f.msPerformance ||
        f.webkitPerformance ||
        {},
      C = Ma.timing || {},
      la = Ma.navigation || {},
      za = "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(
        " "
      ),
      ia = !C ? void 0 : C.navigationStart,
      Aa = "downlink downlinkMax effectiveType rtt saveData type".split(" "),
      O,
      oa;
    O = function (a, b, c) {
      if (b && "object" === typeof b) {
        var d = ("id" in b && b.id) || B,
          e = c.title || null,
          g,
          f = oa(b, { params: c.required, fn: c.fn });
        if (f.missed.length)
          console.warn(
            "[TopMailRu]" + (d ? "[" + d + "]" : "") + " Error#1.14",
            "Unspecified " +
              ((1 < f.missed.length &&
                f.missed.slice(0, -1).join(", ") + " and ") ||
                "") +
              f.missed.slice(-1) +
              " in " +
              a
          );
        else {
          var h = oa(b, { params: c.optional, fn: c.fn });
          g = [].concat(f.values).concat(h.values);
          f = [].concat(f.missed).concat(h.missed);
          c.value &&
            ((b = "value" in b && b.value),
            !0 !== c.value && (b = b || c.value),
            b ? g.push("value: " + b) : f.push("value"));
          c = g.length ? "{ " + g.join(", ") + " }" : "";
          g = f.length
            ? "(" +
              (1 < f.length
                ? f.slice(0, -1).join(", ") + " and " + f.slice(-1) + " are"
                : f.slice(-1) + " is") +
              " empty)"
            : "";
          d
            ? console.info(
                "[TopMailRu][" + d + "]: " + (e || a) + " " + c + " " + g
              )
            : console.warn(
                "[TopMailRu] Error#1.15",
                "Undefined counter ID of " + a + " " + c
              );
        }
      } else console.warn("[TopMailRu][][" + a + "] Error#1.13");
    };
    oa = function (a, b) {
      var c = [],
        d = [],
        e,
        f,
        g;
      if (b.params)
        for (e in b.params)
          if (b.params.hasOwnProperty(e) && !1 !== b.params[e])
            if (
              ((f = e in a && a[e]),
              !0 !== b.params[e] && (f = f || b.params[e]),
              f)
            )
              try {
                (g = b.fn ? b.fn : null),
                  c.push(e + ': "' + (g ? g(e, f) : f) + '"');
              } catch (h) {
                console.warn("[TopMailRu] Error#1.16", h);
              }
            else d && d.push(e);
      return { values: c, missed: d };
    };
    h.prototype.pageView = function (a) {
      U(a);
      var b;
      if ((b = a && "object" === typeof a && "id" in a))
        if ((b = a.id))
          if ((b = 5 > ba.length)) {
            b: {
              for (b = 0; b < ba.length; b++)
                if (ba[b] === a.id) {
                  b = !0;
                  break b;
                }
              b = !1;
            }
            b = !b;
          }
      if (b) {
        ba.push(a.id);
        !1 !== a.beat && ca.push(a.id);
        if (!0 === a.ecom && (La.push(a.id), (b = [a.id]), Ja))
          for (var c = 0, d = ma.length; c < d; c++) xa(b, ma[c]);
        l.push(a);
        M && wa(a);
      }
      k && O("pageView", a, { title: "Page view", optional: { url: u.href } });
      V(a) && (m(y(a, "/counter", !1, !0)), ($ = t()));
    };
    h.prototype.reachGoal = function (a) {
      U(a);
      k &&
        O("reachGoal", a, {
          title: "Reach goal",
          value: !0,
          required: { goal: !0 },
        });
      if (V(a) && "goal" in a && a.goal) {
        var b = "";
        "value" in a && a.value && (b = parseInt(a.value) || "");
        m(
          y(a, "/tracker", !1, !0) + (";e=" + escape("RG:" + b + "/" + a.goal))
        );
      }
    };
    h.prototype.itemView = function (a) {
      k &&
        O("itemView", a, {
          title: "Item view",
          optional: { list: !0, productid: !0, pagetype: !0, totalvalue: !0 },
          fn: function (a, b) {
            return ("" + b).replace(/;/g, " ");
          },
        });
      if (V(a)) {
        var b = a.list || "",
          c = a.productid || "",
          d = a.pagetype || "",
          e = a.totalvalue || 0;
        new Image().src =
          "https://ad.mail.ru/retarget/?counter=" +
          (a.id || B) +
          "&list=" +
          b +
          "&productid=" +
          c +
          "&pagetype=" +
          d +
          "&totalvalue=" +
          e +
          "&_=" +
          Math.random();
        b =
          "IV:" +
          e +
          "/" +
          ("" + b).replace(/;/g, " ") +
          ";" +
          ("" + c).replace(/;/g, " ") +
          ";" +
          ("" + d).replace(/;/g, " ");
        m(y(a, "/tracker", !1, !1) + (";e=" + escape(b)));
      }
    };
    h.prototype.sendEvent = function (a) {
      U(a);
      k &&
        O("sendEvent", a, {
          title: "Send event",
          value: !0,
          required: { category: !0, action: !0 },
          optional: { label: !0 },
          fn: function (a, b) {
            return ("" + b).substr(0, 300).replace(/;/g, " ");
          },
        });
      if (V(a) && "category" in a && a.category && "action" in a && a.action) {
        var b = ("" + a.category).substr(0, 300),
          c = ("" + a.action).substr(0, 300),
          d = "";
        "label" in a && a.label && (d = ("" + a.label).substr(0, 300));
        var e = "";
        "value" in a && a.value && (e = parseInt(a.value) || "");
        b =
          "CE:" +
          e +
          "/" +
          ("" + b).replace(/;/g, " ") +
          ";" +
          ("" + c).replace(/;/g, " ") +
          ";" +
          ("" + d).replace(/;/g, " ");
        m(y(a, "/tracker", !1, !1) + (";e=" + escape(b)));
      }
    };
    h.prototype.setUserID = function (a) {
      if (null === a || !1 === a || void 0 === a) this.deleteUserID();
      else {
        var b = typeof a;
        "number" !== b && "string" !== b
          ? k &&
            console.warn(
              "[TopMailRu] Error#1.17",
              "Invalid user ID in setUserID"
            )
          : ((z = a), k && console.info("[TopMailRu]: Global user ID = " + z));
      }
    };
    h.prototype.getUserID = function () {
      return z || 0 === z ? z : void 0;
    };
    h.prototype.deleteUserID = function () {
      z = null;
      k && console.info("[TopMailRu]: Reset global user ID to null");
    };
    h.prototype.getClientID = function () {
      var a = H;
      return a || 0 === a ? a : void 0;
    };
    h.prototype.processEvent = function (a) {
      if (a && "object" === typeof a)
        if ("type" in a)
          switch (a.type) {
            case "pageView":
              this.pageView(a);
              break;
            case "reachGoal":
              this.reachGoal(a);
              break;
            case "itemView":
              this.itemView(a);
              break;
            case "sendEvent":
              this.sendEvent(a);
              break;
            case "setUserID":
              "userid" in a && this.setUserID(a.userid);
              break;
            case "deleteUserID":
              this.deleteUserID();
          }
        else
          k &&
            console.warn(
              "[TopMailRu] Error#1.19",
              "Unspecified type of push event"
            );
      else k && console.warn("[TopMailRu] Error#1.18", "Invalid push event");
    };
    h.prototype.push = function (a) {
      for (var b = 0, c = arguments.length; b < c; b++)
        this.processEvent(arguments[b]);
    };
    var Na = !1;
    h.prototype.onready = function () {
      Na || ((Na = !0), !Da && !M && ob(gb, hb), Ka());
    };
    var Oa = !1;
    h.prototype.onload = function () {
      if (!Oa) {
        Oa = !0;
        aa = t();
        if (!nb && 0 < l.length) {
          for (
            var a = ";e=" + escape("RT/load") + ";et=" + aa, b = 0;
            b < l.length;
            b++
          )
            m(y(l[b], "/tracker", !0, !1) + a);
          $ = aa;
        }
        lb ||
          setTimeout(function () {
            Ba(2);
          }, 2e3);
        mb ||
          setTimeout(function () {
            Ba(15);
          }, 15e3);
      }
    };
    h.prototype.beat = function () {
      if (!Ha && na) {
        var a = t();
        if (!(12e4 < a - na)) {
          if (12e4 < a - $)
            for (
              var b = ";e=" + escape("RT/resend") + ";et=" + aa, c = 0;
              c < l.length;
              c++
            )
              !1 !== l[c].beat && m(y(l[c], "/tracker", !1, !0) + b);
          else
            0 < ca.length &&
              m(
                "/tracker?" +
                  R(
                    {
                      js: "13",
                      id: ca[0],
                      e: "RT/beat",
                      sid: ga,
                      ids: ca.join(),
                      ver: ha,
                      _: Math.random(),
                    },
                    ";"
                  )
              );
          $ = a;
        }
      }
    };
    var Pa = !1;
    h.prototype.unload = function () {
      if (!Pa && ((Pa = !0), !Ia)) {
        var a;
        a = (a = ya()) ? t() - a : void 0;
        a =
          ";e=" +
          escape("RT/unload") +
          ";et=" +
          t() +
          (a ? ";pvt=" + escape(a) : "");
        for (var b = 0; b < l.length; b++) m(y(l[b], "/tracker", !1, !1) + a);
      }
    };
    h.prototype.activity = function (a) {
      na = t();
    };
    for (var Qa = new h(), s = 0, pa = _tmr.length, P; s < pa; s++)
      (P = _tmr[s]) && "object" === typeof P && U(P);
    s = 0;
    for (pa = _tmr.length; s < pa; s++) (P = _tmr[s]), Qa.processEvent(P);
    _tmr = Qa;
    if (
      "complete" === g.readyState ||
      ("loading" !== g.readyState && !g.documentElement.doScroll)
    )
      _tmr.onready();
    else
      g.addEventListener
        ? v(g, "DOMContentLoaded", W)
        : g.attachEvent && v(g, "readystatechange", W);
    if ("complete" === g.readyState) _tmr.onload();
    else v(f, "load", Ga);
    Ia || (v(f, "unload", X), v(f, "beforeunload", X));
    if (!Ha) {
      setInterval(function () {
        _tmr.beat();
      }, 6e4);
      try {
        for (
          var Ra = "scroll gesturechange touchmove mousedown mousemove mouseup touch".split(
              " "
            ),
            pb = function (a) {
              v(g, a, function () {
                _tmr.activity(a);
              });
            },
            s = 0;
          s < Ra.length;
          s++
        )
          pb(Ra[s]);
        v(f, "scroll", function () {
          _tmr.activity("scallback");
        });
      } catch (qb) {
        k && console.warn("[TopMailRu] Error#1.20", qb);
      }
    }
  }
})();
