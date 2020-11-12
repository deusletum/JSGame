/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m,
  aa = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  },
  n = function (a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: aa(a) };
  },
  ba =
    "function" == typeof Object.create
      ? Object.create
      : function (a) {
          var b = function () {};
          b.prototype = a;
          return new b();
        },
  ca =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        },
  da = function (a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  },
  q = da(this),
  t = function (a, b) {
    if (b)
      a: {
        var c = q;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          ca(c, a, { configurable: !0, writable: !0, value: b });
      }
  },
  ea;
if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
else {
  var fa;
  a: {
    var ha = { a: !0 },
      ia = {};
    try {
      ia.__proto__ = ha;
      fa = ia.a;
      break a;
    } catch (a) {}
    fa = !1;
  }
  ea = fa
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
}
var ja = ea,
  ka = function (a, b) {
    a.prototype = ba(b.prototype);
    a.prototype.constructor = a;
    if (ja) ja(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.kb = b.prototype;
  };
t("Symbol", function (a) {
  if (a) return a;
  var b = function (e, g) {
    this.Tb = e;
    ca(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.Tb;
  };
  var c = 0,
    d = function (e) {
      if (this instanceof d) throw new TypeError("Symbol is not a constructor");
      return new b("jscomp_symbol_" + (e || "") + "_" + c++, e);
    };
  return d;
});
t("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");
  for (
    var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
        " "
      ),
      c = 0;
    c < b.length;
    c++
  ) {
    var d = q[b[c]];
    "function" === typeof d &&
      "function" != typeof d.prototype[a] &&
      ca(d.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return la(aa(this));
        },
      });
  }
  return a;
});
var la = function (a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  },
  ma = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var g = c++;
            return { value: b(g, a[g]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
t("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return ma(this, function (b, c) {
          return c;
        });
      };
});
var u = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
t("WeakMap", function (a) {
  function b() {}
  function c(k) {
    var l = typeof k;
    return ("object" === l && null !== k) || "function" === l;
  }
  function d(k) {
    if (!u(k, g)) {
      var l = new b();
      ca(k, g, { value: l });
    }
  }
  function e(k) {
    var l = Object[k];
    l &&
      (Object[k] = function (p) {
        if (p instanceof b) return p;
        Object.isExtensible(p) && d(p);
        return l(p);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          l = Object.seal({}),
          p = new a([
            [k, 2],
            [l, 3],
          ]);
        if (2 != p.get(k) || 3 != p.get(l)) return !1;
        p.delete(k);
        p.set(l, 4);
        return !p.has(k) && 4 == p.get(l);
      } catch (r) {
        return !1;
      }
    })()
  )
    return a;
  var g = "$jscomp_hidden_" + Math.random();
  e("freeze");
  e("preventExtensions");
  e("seal");
  var f = 0,
    h = function (k) {
      this.ma = (f += Math.random() + 1).toString();
      if (k) {
        k = n(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    };
  h.prototype.set = function (k, l) {
    if (!c(k)) throw Error("Invalid WeakMap key");
    d(k);
    if (!u(k, g)) throw Error("WeakMap key fail: " + k);
    k[g][this.ma] = l;
    return this;
  };
  h.prototype.get = function (k) {
    return c(k) && u(k, g) ? k[g][this.ma] : void 0;
  };
  h.prototype.has = function (k) {
    return c(k) && u(k, g) && u(k[g], this.ma);
  };
  h.prototype.delete = function (k) {
    return c(k) && u(k, g) && u(k[g], this.ma) ? delete k[g][this.ma] : !1;
  };
  return h;
});
t("Map", function (a) {
  if (
    (function () {
      if (
        !a ||
        "function" != typeof a ||
        !a.prototype.entries ||
        "function" != typeof Object.seal
      )
        return !1;
      try {
        var h = Object.seal({ x: 4 }),
          k = new a(n([[h, "s"]]));
        if (
          "s" != k.get(h) ||
          1 != k.size ||
          k.get({ x: 4 }) ||
          k.set({ x: 4 }, "t") != k ||
          2 != k.size
        )
          return !1;
        var l = k.entries(),
          p = l.next();
        if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
        p = l.next();
        return p.done ||
          4 != p.value[0].x ||
          "t" != p.value[1] ||
          !l.next().done
          ? !1
          : !0;
      } catch (r) {
        return !1;
      }
    })()
  )
    return a;
  var b = new WeakMap(),
    c = function (h) {
      this.ja = {};
      this.S = g();
      this.size = 0;
      if (h) {
        h = n(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    };
  c.prototype.set = function (h, k) {
    h = 0 === h ? 0 : h;
    var l = d(this, h);
    l.list || (l.list = this.ja[l.id] = []);
    l.v
      ? (l.v.value = k)
      : ((l.v = { next: this.S, T: this.S.T, head: this.S, key: h, value: k }),
        l.list.push(l.v),
        (this.S.T.next = l.v),
        (this.S.T = l.v),
        this.size++);
    return this;
  };
  c.prototype.delete = function (h) {
    h = d(this, h);
    return h.v && h.list
      ? (h.list.splice(h.index, 1),
        h.list.length || delete this.ja[h.id],
        (h.v.T.next = h.v.next),
        (h.v.next.T = h.v.T),
        (h.v.head = null),
        this.size--,
        !0)
      : !1;
  };
  c.prototype.clear = function () {
    this.ja = {};
    this.S = this.S.T = g();
    this.size = 0;
  };
  c.prototype.has = function (h) {
    return !!d(this, h).v;
  };
  c.prototype.get = function (h) {
    return (h = d(this, h).v) && h.value;
  };
  c.prototype.entries = function () {
    return e(this, function (h) {
      return [h.key, h.value];
    });
  };
  c.prototype.keys = function () {
    return e(this, function (h) {
      return h.key;
    });
  };
  c.prototype.values = function () {
    return e(this, function (h) {
      return h.value;
    });
  };
  c.prototype.forEach = function (h, k) {
    for (var l = this.entries(), p; !(p = l.next()).done; )
      (p = p.value), h.call(k, p[1], p[0], this);
  };
  c.prototype[Symbol.iterator] = c.prototype.entries;
  var d = function (h, k) {
      var l = k && typeof k;
      "object" == l || "function" == l
        ? b.has(k)
          ? (l = b.get(k))
          : ((l = "" + ++f), b.set(k, l))
        : (l = "p_" + k);
      var p = h.ja[l];
      if (p && u(h.ja, l))
        for (h = 0; h < p.length; h++) {
          var r = p[h];
          if ((k !== k && r.key !== r.key) || k === r.key)
            return { id: l, list: p, index: h, v: r };
        }
      return { id: l, list: p, index: -1, v: void 0 };
    },
    e = function (h, k) {
      var l = h.S;
      return la(function () {
        if (l) {
          for (; l.head != h.S; ) l = l.T;
          for (; l.next != l.head; )
            return (l = l.next), { done: !1, value: k(l) };
          l = null;
        }
        return { done: !0, value: void 0 };
      });
    },
    g = function () {
      var h = {};
      return (h.T = h.next = h.head = h);
    },
    f = 0;
  return c;
});
t("Set", function (a) {
  if (
    (function () {
      if (
        !a ||
        "function" != typeof a ||
        !a.prototype.entries ||
        "function" != typeof Object.seal
      )
        return !1;
      try {
        var c = Object.seal({ x: 4 }),
          d = new a(n([c]));
        if (
          !d.has(c) ||
          1 != d.size ||
          d.add(c) != d ||
          1 != d.size ||
          d.add({ x: 4 }) != d ||
          2 != d.size
        )
          return !1;
        var e = d.entries(),
          g = e.next();
        if (g.done || g.value[0] != c || g.value[1] != c) return !1;
        g = e.next();
        return g.done ||
          g.value[0] == c ||
          4 != g.value[0].x ||
          g.value[1] != g.value[0]
          ? !1
          : e.next().done;
      } catch (f) {
        return !1;
      }
    })()
  )
    return a;
  var b = function (c) {
    this.O = new Map();
    if (c) {
      c = n(c);
      for (var d; !(d = c.next()).done; ) this.add(d.value);
    }
    this.size = this.O.size;
  };
  b.prototype.add = function (c) {
    c = 0 === c ? 0 : c;
    this.O.set(c, c);
    this.size = this.O.size;
    return this;
  };
  b.prototype.delete = function (c) {
    c = this.O.delete(c);
    this.size = this.O.size;
    return c;
  };
  b.prototype.clear = function () {
    this.O.clear();
    this.size = 0;
  };
  b.prototype.has = function (c) {
    return this.O.has(c);
  };
  b.prototype.entries = function () {
    return this.O.entries();
  };
  b.prototype.values = function () {
    return this.O.values();
  };
  b.prototype.keys = b.prototype.values;
  b.prototype[Symbol.iterator] = b.prototype.values;
  b.prototype.forEach = function (c, d) {
    var e = this;
    this.O.forEach(function (g) {
      return c.call(d, g, g, e);
    });
  };
  return b;
});
t("Promise", function (a) {
  function b() {
    this.U = null;
  }
  function c(f) {
    return f instanceof e
      ? f
      : new e(function (h) {
          h(f);
        });
  }
  if (a) return a;
  b.prototype.vb = function (f) {
    if (null == this.U) {
      this.U = [];
      var h = this;
      this.wb(function () {
        h.pc();
      });
    }
    this.U.push(f);
  };
  var d = q.setTimeout;
  b.prototype.wb = function (f) {
    d(f, 0);
  };
  b.prototype.pc = function () {
    for (; this.U && this.U.length; ) {
      var f = this.U;
      this.U = [];
      for (var h = 0; h < f.length; ++h) {
        var k = f[h];
        f[h] = null;
        try {
          k();
        } catch (l) {
          this.cc(l);
        }
      }
    }
    this.U = null;
  };
  b.prototype.cc = function (f) {
    this.wb(function () {
      throw f;
    });
  };
  var e = function (f) {
    this.ea = 0;
    this.sa = void 0;
    this.ca = [];
    this.Hb = !1;
    var h = this.Qa();
    try {
      f(h.resolve, h.reject);
    } catch (k) {
      h.reject(k);
    }
  };
  e.prototype.Qa = function () {
    function f(l) {
      return function (p) {
        k || ((k = !0), l.call(h, p));
      };
    }
    var h = this,
      k = !1;
    return { resolve: f(this.Vc), reject: f(this.fb) };
  };
  e.prototype.Vc = function (f) {
    if (f === this)
      this.fb(new TypeError("A Promise cannot resolve to itself"));
    else if (f instanceof e) this.dd(f);
    else {
      a: switch (typeof f) {
        case "object":
          var h = null != f;
          break a;
        case "function":
          h = !0;
          break a;
        default:
          h = !1;
      }
      h ? this.Uc(f) : this.Ab(f);
    }
  };
  e.prototype.Uc = function (f) {
    var h = void 0;
    try {
      h = f.then;
    } catch (k) {
      this.fb(k);
      return;
    }
    "function" == typeof h ? this.ed(h, f) : this.Ab(f);
  };
  e.prototype.fb = function (f) {
    this.Rb(2, f);
  };
  e.prototype.Ab = function (f) {
    this.Rb(1, f);
  };
  e.prototype.Rb = function (f, h) {
    if (0 != this.ea)
      throw Error(
        "Cannot settle(" +
          f +
          ", " +
          h +
          "): Promise already settled in state" +
          this.ea
      );
    this.ea = f;
    this.sa = h;
    2 === this.ea && this.Yc();
    this.qc();
  };
  e.prototype.Yc = function () {
    var f = this;
    d(function () {
      if (f.Nc()) {
        var h = q.console;
        "undefined" !== typeof h && h.error(f.sa);
      }
    }, 1);
  };
  e.prototype.Nc = function () {
    if (this.Hb) return !1;
    var f = q.CustomEvent,
      h = q.Event,
      k = q.dispatchEvent;
    if ("undefined" === typeof k) return !0;
    "function" === typeof f
      ? (f = new f("unhandledrejection", { cancelable: !0 }))
      : "function" === typeof h
      ? (f = new h("unhandledrejection", { cancelable: !0 }))
      : ((f = q.document.createEvent("CustomEvent")),
        f.initCustomEvent("unhandledrejection", !1, !0, f));
    f.promise = this;
    f.reason = this.sa;
    return k(f);
  };
  e.prototype.qc = function () {
    if (null != this.ca) {
      for (var f = 0; f < this.ca.length; ++f) g.vb(this.ca[f]);
      this.ca = null;
    }
  };
  var g = new b();
  e.prototype.dd = function (f) {
    var h = this.Qa();
    f.wa(h.resolve, h.reject);
  };
  e.prototype.ed = function (f, h) {
    var k = this.Qa();
    try {
      f.call(h, k.resolve, k.reject);
    } catch (l) {
      k.reject(l);
    }
  };
  e.prototype.then = function (f, h) {
    function k(I, W) {
      return "function" == typeof I
        ? function (eb) {
            try {
              l(I(eb));
            } catch (fb) {
              p(fb);
            }
          }
        : W;
    }
    var l,
      p,
      r = new e(function (I, W) {
        l = I;
        p = W;
      });
    this.wa(k(f, l), k(h, p));
    return r;
  };
  e.prototype.catch = function (f) {
    return this.then(void 0, f);
  };
  e.prototype.wa = function (f, h) {
    function k() {
      switch (l.ea) {
        case 1:
          f(l.sa);
          break;
        case 2:
          h(l.sa);
          break;
        default:
          throw Error("Unexpected state: " + l.ea);
      }
    }
    var l = this;
    null == this.ca ? g.vb(k) : this.ca.push(k);
    this.Hb = !0;
  };
  e.resolve = c;
  e.reject = function (f) {
    return new e(function (h, k) {
      k(f);
    });
  };
  e.race = function (f) {
    return new e(function (h, k) {
      for (var l = n(f), p = l.next(); !p.done; p = l.next())
        c(p.value).wa(h, k);
    });
  };
  e.all = function (f) {
    var h = n(f),
      k = h.next();
    return k.done
      ? c([])
      : new e(function (l, p) {
          function r(eb) {
            return function (fb) {
              I[eb] = fb;
              W--;
              0 == W && l(I);
            };
          }
          var I = [],
            W = 0;
          do
            I.push(void 0),
              W++,
              c(k.value).wa(r(I.length - 1), p),
              (k = h.next());
          while (!k.done);
        });
  };
  return e;
});
var v = this || self,
  na = function () {},
  oa = function (a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  },
  pa = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  },
  qa = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.kb = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.md = function (d, e, g) {
      for (
        var f = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        f[h - 2] = arguments[h];
      return b.prototype[e].apply(d, f);
    };
  },
  ra = function (a) {
    return a;
  };
function sa(a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, sa);
  else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
qa(sa, Error);
sa.prototype.name = "CustomError";
var ta = function (a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++)
    c += a[e] + (e < b.length ? b[e] : "%s");
  sa.call(this, c + a[d]);
};
qa(ta, sa);
ta.prototype.name = "AssertionError";
var ua = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
      e += ": " + c;
      var g = d;
    } else a && ((e += ": " + a), (g = b));
    throw new ta("" + e, g || []);
  },
  w = function (a, b, c) {
    a || ua("", null, b, Array.prototype.slice.call(arguments, 2));
    return a;
  },
  va = function (a, b) {
    throw new ta(
      "Failure" + (a ? ": " + a : ""),
      Array.prototype.slice.call(arguments, 1)
    );
  },
  wa = function (a, b, c) {
    "string" !== typeof a &&
      ua(
        "Expected string but got %s: %s.",
        [oa(a), a],
        b,
        Array.prototype.slice.call(arguments, 2)
      );
  };
var xa = Array.prototype.indexOf
  ? function (a, b) {
      w(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0);
    }
  : function (a, b) {
      if ("string" === typeof a)
        return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    };
var ya = function (a) {
  for (var b = [], c = 0, d = 0; d < a.length; d++) {
    var e = a.charCodeAt(d);
    255 < e && ((b[c++] = e & 255), (e >>= 8));
    b[c++] = e;
  }
  return b;
};
var za = function (a, b) {
  for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
  return !1;
};
var Aa;
var Da = function (a, b) {
  this.jb = (a === Ba && b) || "";
  this.ac = Ca;
};
Da.prototype.za = !0;
Da.prototype.ya = function () {
  return this.jb;
};
Da.prototype.toString = function () {
  return "Const{" + this.jb + "}";
};
var Ea = function (a) {
    if (a instanceof Da && a.constructor === Da && a.ac === Ca) return a.jb;
    va("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  },
  Ca = {},
  Ba = {};
var Fa = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      },
  Na = function (a, b) {
    if (b)
      a = a
        .replace(Ga, "&amp;")
        .replace(Ha, "&lt;")
        .replace(Ia, "&gt;")
        .replace(Ja, "&quot;")
        .replace(Ka, "&#39;")
        .replace(La, "&#0;");
    else {
      if (!Ma.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(Ga, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(Ha, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(Ia, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(Ja, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(Ka, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(La, "&#0;"));
    }
    return a;
  },
  Ga = /&/g,
  Ha = /</g,
  Ia = />/g,
  Ja = /"/g,
  Ka = /'/g,
  La = /\x00/g,
  Ma = /[\x00&<>"']/,
  Oa = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
var Qa = function (a, b) {
  this.cb = b === Pa ? a : "";
};
m = Qa.prototype;
m.za = !0;
m.ya = function () {
  return this.cb.toString();
};
m.Fb = !0;
m.Va = function () {
  return 1;
};
m.toString = function () {
  return "SafeUrl{" + this.cb + "}";
};
var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
  Pa = {};
var x;
a: {
  var Sa = v.navigator;
  if (Sa) {
    var Ta = Sa.userAgent;
    if (Ta) {
      x = Ta;
      break a;
    }
  }
  x = "";
}
var y = function (a, b, c) {
  this.bb = c === Ua ? a : "";
  this.lc = b;
};
m = y.prototype;
m.Fb = !0;
m.Va = function () {
  return this.lc;
};
m.za = !0;
m.ya = function () {
  return this.bb.toString();
};
m.toString = function () {
  return "SafeHtml{" + this.bb + "}";
};
var Va = function (a) {
    if (a instanceof y && a.constructor === y) return a.bb;
    va("expected object of type SafeHtml, got '" + a + "' of type " + oa(a));
    return "type_error:SafeHtml";
  },
  Xa = function (a) {
    if (a instanceof y) return a;
    var b = "object" == typeof a,
      c = null;
    b && a.Fb && (c = a.Va());
    return Wa(Na(b && a.za ? a.ya() : String(a)), c);
  },
  Ua = {},
  Wa = function (a, b) {
    if (void 0 === Aa) {
      var c = null;
      var d = v.trustedTypes;
      if (d && d.createPolicy)
        try {
          c = d.createPolicy("goog#html", {
            createHTML: ra,
            createScript: ra,
            createScriptURL: ra,
          });
        } catch (e) {
          v.console && v.console.error(e.message);
        }
      Aa = c;
    }
    a = (c = Aa) ? c.createHTML(a) : a;
    return new y(a, b, Ua);
  },
  Ya = new y((v.trustedTypes && v.trustedTypes.emptyHTML) || "", 0, Ua);
var Za = (function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function () {
    if ("undefined" === typeof document) return !1;
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    if (!a.firstChild) return !1;
    b = a.firstChild.firstChild;
    a.innerHTML = Va(Ya);
    return !b.parentElement;
  }),
  $a = function (a) {
    var b = document.location;
    a: {
      try {
        var c = b && b.ownerDocument,
          d = c && (c.defaultView || c.parentWindow);
        d = d || v;
        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (f) {}
      e = null;
    }
    if (e && (!b || (!(b instanceof e.Location) && b instanceof e.Element))) {
      if (pa(b))
        try {
          var g =
            b.constructor.displayName ||
            b.constructor.name ||
            Object.prototype.toString.call(b);
        } catch (f) {
          g = "<object could not be stringified>";
        }
      else g = void 0 === b ? "undefined" : null === b ? "null" : typeof b;
      va("Argument is not a Location (or a non-Element mock); got: %s", g);
    }
    a instanceof Qa ||
      a instanceof Qa ||
      ((a = "object" == typeof a && a.za ? a.ya() : String(a)),
      w(Ra.test(a), "%s does not match the safe URL pattern", a) ||
        (a = "about:invalid#zClosurez"),
      (a = new Qa(a, Pa)));
    a instanceof Qa && a.constructor === Qa
      ? (a = a.cb)
      : (va(
          "expected object of type SafeUrl, got '" + a + "' of type " + oa(a)
        ),
        (a = "type_error:SafeUrl"));
    b.href = a;
  };
var ab = function (a) {
  ab[" "](a);
  return a;
};
ab[" "] = na;
var bb = -1 != x.indexOf("Opera"),
  cb = -1 != x.indexOf("Trident") || -1 != x.indexOf("MSIE"),
  db = -1 != x.indexOf("Edge"),
  gb =
    -1 != x.indexOf("Gecko") &&
    !(-1 != x.toLowerCase().indexOf("webkit") && -1 == x.indexOf("Edge")) &&
    !(-1 != x.indexOf("Trident") || -1 != x.indexOf("MSIE")) &&
    -1 == x.indexOf("Edge"),
  hb = -1 != x.toLowerCase().indexOf("webkit") && -1 == x.indexOf("Edge"),
  ib = function () {
    var a = v.document;
    return a ? a.documentMode : void 0;
  },
  jb;
a: {
  var kb = "",
    lb = (function () {
      var a = x;
      if (gb) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (db) return /Edge\/([\d\.]+)/.exec(a);
      if (cb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (hb) return /WebKit\/(\S+)/.exec(a);
      if (bb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    })();
  lb && (kb = lb ? lb[1] : "");
  if (cb) {
    var mb = ib();
    if (null != mb && mb > parseFloat(kb)) {
      jb = String(mb);
      break a;
    }
  }
  jb = kb;
}
var nb = jb,
  ob = {},
  pb;
if (v.document && cb) {
  var qb = ib();
  pb = qb ? qb : parseInt(nb, 10) || void 0;
} else pb = void 0;
var rb = pb;
var sb = {},
  tb = null;
var ub = function () {
  this.u = -1;
};
var vb = function (a, b, c) {
  this.u = -1;
  this.G = a;
  this.u = c || a.u || 16;
  this.Ib = Array(this.u);
  this.ab = Array(this.u);
  a = b;
  a.length > this.u &&
    (this.G.update(a), (a = this.G.digest()), this.G.reset());
  for (c = 0; c < this.u; c++)
    (b = c < a.length ? a[c] : 0), (this.Ib[c] = b ^ 92), (this.ab[c] = b ^ 54);
  this.G.update(this.ab);
};
qa(vb, ub);
vb.prototype.reset = function () {
  this.G.reset();
  this.G.update(this.ab);
};
vb.prototype.update = function (a, b) {
  this.G.update(a, b);
};
vb.prototype.digest = function () {
  var a = this.G.digest();
  this.G.reset();
  this.G.update(this.Ib);
  this.G.update(a);
  return this.G.digest();
};
var wb = function () {
  this.u = 64;
  this.o = Array(4);
  this.ec = Array(this.u);
  this.Fa = this.ia = 0;
  this.reset();
};
qa(wb, ub);
wb.prototype.reset = function () {
  this.o[0] = 1732584193;
  this.o[1] = 4023233417;
  this.o[2] = 2562383102;
  this.o[3] = 271733878;
  this.Fa = this.ia = 0;
};
var xb = function (a, b, c) {
  c || (c = 0);
  var d = Array(16);
  if ("string" === typeof b)
    for (var e = 0; 16 > e; ++e)
      d[e] =
        b.charCodeAt(c++) |
        (b.charCodeAt(c++) << 8) |
        (b.charCodeAt(c++) << 16) |
        (b.charCodeAt(c++) << 24);
  else
    for (e = 0; 16 > e; ++e)
      d[e] = b[c++] | (b[c++] << 8) | (b[c++] << 16) | (b[c++] << 24);
  b = a.o[0];
  c = a.o[1];
  e = a.o[2];
  var g = a.o[3];
  var f = (b + (g ^ (c & (e ^ g))) + d[0] + 3614090360) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[1] + 3905402710) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[2] + 606105819) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[3] + 3250441966) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (g ^ (c & (e ^ g))) + d[4] + 4118548399) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[5] + 1200080426) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[6] + 2821735955) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[7] + 4249261313) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (g ^ (c & (e ^ g))) + d[8] + 1770035416) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[9] + 2336552879) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[10] + 4294925233) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[11] + 2304563134) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (g ^ (c & (e ^ g))) + d[12] + 1804603682) & 4294967295;
  b = c + (((f << 7) & 4294967295) | (f >>> 25));
  f = (g + (e ^ (b & (c ^ e))) + d[13] + 4254626195) & 4294967295;
  g = b + (((f << 12) & 4294967295) | (f >>> 20));
  f = (e + (c ^ (g & (b ^ c))) + d[14] + 2792965006) & 4294967295;
  e = g + (((f << 17) & 4294967295) | (f >>> 15));
  f = (c + (b ^ (e & (g ^ b))) + d[15] + 1236535329) & 4294967295;
  c = e + (((f << 22) & 4294967295) | (f >>> 10));
  f = (b + (e ^ (g & (c ^ e))) + d[1] + 4129170786) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[6] + 3225465664) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[11] + 643717713) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[0] + 3921069994) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (e ^ (g & (c ^ e))) + d[5] + 3593408605) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[10] + 38016083) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[15] + 3634488961) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[4] + 3889429448) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (e ^ (g & (c ^ e))) + d[9] + 568446438) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[14] + 3275163606) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[3] + 4107603335) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[8] + 1163531501) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (e ^ (g & (c ^ e))) + d[13] + 2850285829) & 4294967295;
  b = c + (((f << 5) & 4294967295) | (f >>> 27));
  f = (g + (c ^ (e & (b ^ c))) + d[2] + 4243563512) & 4294967295;
  g = b + (((f << 9) & 4294967295) | (f >>> 23));
  f = (e + (b ^ (c & (g ^ b))) + d[7] + 1735328473) & 4294967295;
  e = g + (((f << 14) & 4294967295) | (f >>> 18));
  f = (c + (g ^ (b & (e ^ g))) + d[12] + 2368359562) & 4294967295;
  c = e + (((f << 20) & 4294967295) | (f >>> 12));
  f = (b + (c ^ e ^ g) + d[5] + 4294588738) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[8] + 2272392833) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[11] + 1839030562) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[14] + 4259657740) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (c ^ e ^ g) + d[1] + 2763975236) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[4] + 1272893353) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[7] + 4139469664) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[10] + 3200236656) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (c ^ e ^ g) + d[13] + 681279174) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[0] + 3936430074) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[3] + 3572445317) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[6] + 76029189) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (c ^ e ^ g) + d[9] + 3654602809) & 4294967295;
  b = c + (((f << 4) & 4294967295) | (f >>> 28));
  f = (g + (b ^ c ^ e) + d[12] + 3873151461) & 4294967295;
  g = b + (((f << 11) & 4294967295) | (f >>> 21));
  f = (e + (g ^ b ^ c) + d[15] + 530742520) & 4294967295;
  e = g + (((f << 16) & 4294967295) | (f >>> 16));
  f = (c + (e ^ g ^ b) + d[2] + 3299628645) & 4294967295;
  c = e + (((f << 23) & 4294967295) | (f >>> 9));
  f = (b + (e ^ (c | ~g)) + d[0] + 4096336452) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[7] + 1126891415) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[14] + 2878612391) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[5] + 4237533241) & 4294967295;
  c = e + (((f << 21) & 4294967295) | (f >>> 11));
  f = (b + (e ^ (c | ~g)) + d[12] + 1700485571) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[3] + 2399980690) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[10] + 4293915773) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[1] + 2240044497) & 4294967295;
  c = e + (((f << 21) & 4294967295) | (f >>> 11));
  f = (b + (e ^ (c | ~g)) + d[8] + 1873313359) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[15] + 4264355552) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[6] + 2734768916) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[13] + 1309151649) & 4294967295;
  c = e + (((f << 21) & 4294967295) | (f >>> 11));
  f = (b + (e ^ (c | ~g)) + d[4] + 4149444226) & 4294967295;
  b = c + (((f << 6) & 4294967295) | (f >>> 26));
  f = (g + (c ^ (b | ~e)) + d[11] + 3174756917) & 4294967295;
  g = b + (((f << 10) & 4294967295) | (f >>> 22));
  f = (e + (b ^ (g | ~c)) + d[2] + 718787259) & 4294967295;
  e = g + (((f << 15) & 4294967295) | (f >>> 17));
  f = (c + (g ^ (e | ~b)) + d[9] + 3951481745) & 4294967295;
  a.o[0] = (a.o[0] + b) & 4294967295;
  a.o[1] =
    (a.o[1] + (e + (((f << 21) & 4294967295) | (f >>> 11)))) & 4294967295;
  a.o[2] = (a.o[2] + e) & 4294967295;
  a.o[3] = (a.o[3] + g) & 4294967295;
};
wb.prototype.update = function (a, b) {
  void 0 === b && (b = a.length);
  for (var c = b - this.u, d = this.ec, e = this.ia, g = 0; g < b; ) {
    if (0 == e) for (; g <= c; ) xb(this, a, g), (g += this.u);
    if ("string" === typeof a)
      for (; g < b; ) {
        if (((d[e++] = a.charCodeAt(g++)), e == this.u)) {
          xb(this, d);
          e = 0;
          break;
        }
      }
    else
      for (; g < b; )
        if (((d[e++] = a[g++]), e == this.u)) {
          xb(this, d);
          e = 0;
          break;
        }
  }
  this.ia = e;
  this.Fa += b;
};
wb.prototype.digest = function () {
  var a = Array((56 > this.ia ? this.u : 2 * this.u) - this.ia);
  a[0] = 128;
  for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
  var c = 8 * this.Fa;
  for (b = a.length - 8; b < a.length; ++b) (a[b] = c & 255), (c /= 256);
  this.update(a);
  a = Array(16);
  for (b = c = 0; 4 > b; ++b)
    for (var d = 0; 32 > d; d += 8) a[c++] = (this.o[b] >>> d) & 255;
  return a;
};
var yb = function (a, b, c) {
    for (; 0 <= (b = a.indexOf("hl", b)) && b < c; ) {
      var d = a.charCodeAt(b - 1);
      if (38 == d || 63 == d)
        if (((d = a.charCodeAt(b + 2)), !d || 61 == d || 38 == d || 35 == d))
          return b;
      b += 3;
    }
    return -1;
  },
  zb = /#|$/,
  Ab = /[?&]($|#)/,
  Bb = function (a) {
    var b = document.location.href;
    for (var c = b.search(zb), d = 0, e, g = []; 0 <= (e = yb(b, d, c)); )
      g.push(b.substring(d, e)), (d = Math.min(b.indexOf("&", e) + 1 || c, c));
    g.push(b.substr(d));
    b = g.join("").replace(Ab, "$1");
    (a = "hl" + (null != a ? "=" + encodeURIComponent(String(a)) : ""))
      ? ((c = b.indexOf("#")),
        0 > c && (c = b.length),
        (d = b.indexOf("?")),
        0 > d || d > c ? ((d = c), (e = "")) : (e = b.substring(d + 1, c)),
        (b = [b.substr(0, d), e, b.substr(c)]),
        (c = b[1]),
        (b[1] = a ? (c ? c + "&" + a : a) : c),
        (a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]))
      : (a = b);
    return a;
  };
var Cb = { pd: !0 },
  z = function () {
    throw Error("Do not instantiate directly");
  };
z.prototype.Pa = null;
z.prototype.toString = function () {
  return this.content;
};
var Db = function () {
  z.call(this);
};
qa(Db, z);
Db.prototype.Z = Cb;
var Eb = function (a) {
  var b = null != a && a.Z === Cb;
  b && w(a.constructor === Db);
  return b;
};
var Fb =
  Object.freeze ||
  function (a) {
    return a;
  };
var Gb = function (a) {
    if (null != a)
      switch (a.Pa) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  },
  Ib = function (a) {
    return Eb(a)
      ? a
      : a instanceof y
      ? A(Va(a).toString(), a.Va())
      : A(Hb(String(a)), Gb(a));
  },
  A = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.Pa = d);
      return c;
    };
  })(Db),
  B = function (a) {
    return Eb(a)
      ? String(String(a.content).replace(Jb, "").replace(Kb, "&lt;")).replace(
          Lb,
          Mb
        )
      : Hb(a);
  },
  Nb = function (a, b) {
    a ||
      ((a =
        b instanceof Function
          ? b.displayName || b.name || "unknown type name"
          : b instanceof Object
          ? b.constructor.displayName ||
            b.constructor.name ||
            Object.prototype.toString.call(b)
          : null === b
          ? "null"
          : typeof b),
      va("expected param origin of type string, but got " + a + "."));
    return b;
  },
  Hb = function (a) {
    a = String(a);
    return (a = Na(a, void 0));
  },
  Ob = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  },
  Mb = function (a) {
    return Ob[a];
  },
  Lb = /[\x00\x22\x27\x3c\x3e]/g,
  Jb = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
  Kb = /</g;
var Pb = function (a) {
  var b = document;
  return "string" === typeof a ? b.getElementById(a) : a;
};
var Rb = function (a, b, c, d) {
    c = b(c || Qb, d);
    if (pa(c))
      if (c instanceof z) {
        if (c.Z !== Cb) throw Error("Sanitized content was not of kind HTML.");
        b = c.toString();
        c = c.Pa;
        d = new Da(
          Ba,
          "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."
        );
        wa(Ea(d), "must provide justification");
        w(!/^[\s\xa0]*$/.test(Ea(d)), "must provide non-empty justification");
        b = Wa(b, c || null);
      } else
        va("Soy template output is unsafe for use as HTML: " + c),
          (b = Xa("zSoyz"));
    else b = Xa(String(c));
    a = w(a);
    if (Za()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = Va(b);
  },
  Qb = {};
var Sb = function () {
    var a =
      '<div class="' +
      B("dialog-header") +
      '"><div class="' +
      B("google-icon") +
      '">';
    var b = A(
      '<svg class="' +
        B("icon") +
        '" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/><path fill="none" d="M2 2h44v44H2z"/></svg>'
    );
    return A(a + b + "</div><p>Continue with Google</p></div>");
  },
  Tb = function (a) {
    var b = A,
      c = '<div class="' + B("dialog-footer") + '">',
      d = a.Ra;
    a = a.languages;
    var e =
      '<div id="language_selector" class="' +
      B("language-selector") +
      '"><div class="' +
      B("language-selected") +
      '">';
    if ((d instanceof z ? d.content : d) && (a instanceof z ? a.content : a)) {
      for (var g = "", f = a.length, h = 0; h < f; h++) {
        var k = a[h],
          l = k.code;
        g += (
          l && d && l.Fc && d.Fc
            ? l.Z !== d.Z
              ? 0
              : l.toString() === d.toString()
            : l instanceof z && d instanceof z
            ? l.Z != d.Z
              ? 0
              : l.toString() == d.toString()
            : l == d
        )
          ? "" + k.displayName
          : "";
      }
      e += "<div>" + Ib(g) + "</div>";
    }
    e +=
      '<div class="' +
      B("chevron") +
      '"></div></div><div id="language_list" class="' +
      B("language-list") +
      '">';
    if (a)
      for (d = a.length, g = 0; g < d; g++)
        (f = a[g]),
          (e +=
            '<div class="' +
            B("language-option") +
            '" data-languagecode="' +
            B(f.code) +
            '">' +
            Ib(f.displayName) +
            "</div>");
    a = A(e + "</div></div>");
    c += a;
    a =
      '<ul class="' +
      B("footer-menu") +
      '"><li class="' +
      B("menu-item") +
      '"><a class="' +
      B("menu-content") +
      '" href="#">';
    a =
      a +
      'Help</a></li><li class="' +
      (B("menu-item") + '"><a class="' + B("menu-content") + '" href="#">');
    a =
      a +
      'Privacy</a></li><li class="' +
      (B("menu-item") + '"><a class="' + B("menu-content") + '" href="#">');
    a = A(a + "Terms</a></li></ul>");
    return b(c + a + "</div>");
  };
var Ub = function (a, b) {
  var c = Nb("string" === typeof a.origin, a.origin);
  a = A;
  var d =
    '<div class="' +
    B("dialog-container dialog-modal") +
    '"><div class="' +
    B("dialog inflated-dialog") +
    '"><div class="' +
    B("dialog-body") +
    '">' +
    Sb() +
    '<div class="' +
    B("dialog-content") +
    '">';
  var e = '<h1 class="' + B("title") + '">';
  e = A(e + "You'll need to give Safari permission to continue</h1>");
  d += e;
  e = Nb("string" === typeof c, c);
  c =
    '<div class="' +
    B("consent-form") +
    '"><p class="' +
    B("consent-text") +
    '">';
  e =
    "In order to continue with your Google Account, Safari will ask if it's ok for Google to use cookies on " +
    (Ib(e) + ".");
  c = A(c + e + "</p></div>");
  d += c;
  c =
    '<div class="' +
    B("button-group") +
    '"><div class="' +
    B("button button-cancel") +
    '" id="confirm_no">';
  c =
    c +
    'Cancel</div><div class="' +
    (B("button button-confirm") + '" id="confirm_yes">');
  c = A(c + "Continue</div></div>");
  return a(d + c + "</div></div>" + Tb(b) + "</div></div>");
};
var Vb = function (a, b) {
  var c = Nb("string" === typeof a.origin, a.origin);
  a = A;
  var d =
      '<div class="' +
      B("dialog-container dialog-modal") +
      '"><div class="' +
      B("dialog") +
      '"><div class="' +
      B("dialog-body") +
      '">' +
      Sb() +
      '<div class="' +
      B("dialog-content") +
      '">',
    e = Nb("string" === typeof c, c);
  c = '<h1 class="' + B("title") + '">';
  e = "Do you still want Safari to let Google use cookies on " + (Ib(e) + "?");
  c = A(c + e + "</h1>");
  d += c;
  c =
    '<div class="' +
    B("button-group button-group-high") +
    '"><div class="' +
    B("button button-cancel") +
    '" id="confirm_no">';
  c =
    c +
    'No thanks</div><div class="' +
    (B("button button-confirm") + '" id="confirm_yes">');
  c = A(c + "Yes</div></div>");
  return a(d + c + "</div></div>" + Tb(b) + "</div></div>");
};
var Wb;
(Wb = !cb) || (Wb = 9 <= Number(rb));
var Xb = Wb,
  Yb;
if ((Yb = cb)) {
  var Zb;
  if (Object.prototype.hasOwnProperty.call(ob, "9")) Zb = ob["9"];
  else {
    for (
      var $b = 0,
        ac = Fa(String(nb)).split("."),
        bc = Fa("9").split("."),
        cc = Math.max(ac.length, bc.length),
        dc = 0;
      0 == $b && dc < cc;
      dc++
    ) {
      var ec = ac[dc] || "",
        fc = bc[dc] || "";
      do {
        var gc = /(\d*)(\D*)(.*)/.exec(ec) || ["", "", "", ""],
          hc = /(\d*)(\D*)(.*)/.exec(fc) || ["", "", "", ""];
        if (0 == gc[0].length && 0 == hc[0].length) break;
        $b =
          Oa(
            0 == gc[1].length ? 0 : parseInt(gc[1], 10),
            0 == hc[1].length ? 0 : parseInt(hc[1], 10)
          ) ||
          Oa(0 == gc[2].length, 0 == hc[2].length) ||
          Oa(gc[2], hc[2]);
        ec = gc[3];
        fc = hc[3];
      } while (0 == $b);
    }
    Zb = ob["9"] = 0 <= $b;
  }
  Yb = !Zb;
}
var ic = Yb,
  jc = (function () {
    if (!v.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      v.addEventListener("test", na, b), v.removeEventListener("test", na, b);
    } catch (c) {}
    return a;
  })();
var kc = function (a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.eb = !1;
};
kc.prototype.stopPropagation = function () {
  this.eb = !0;
};
kc.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var lc;
lc = hb ? "webkitTransitionEnd" : bb ? "otransitionend" : "transitionend";
var C = function (a, b) {
  kc.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.la = null;
  a && this.I(a, b);
};
qa(C, kc);
var mc = Fb({ 2: "touch", 3: "pen", 4: "mouse" });
C.prototype.I = function (a, b) {
  var c = (this.type = a.type),
    d =
      a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  if ((b = a.relatedTarget)) {
    if (gb) {
      a: {
        try {
          ab(b.nodeName);
          var e = !0;
          break a;
        } catch (g) {}
        e = !1;
      }
      e || (b = null);
    }
  } else
    "mouseover" == c
      ? (b = a.fromElement)
      : "mouseout" == c && (b = a.toElement);
  this.relatedTarget = b;
  d
    ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
      (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
      (this.screenX = d.screenX || 0),
      (this.screenY = d.screenY || 0))
    : ((this.offsetX = hb || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = hb || void 0 !== a.offsetY ? a.offsetY : a.layerY),
      (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
      (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
      (this.screenX = a.screenX || 0),
      (this.screenY = a.screenY || 0));
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.key = a.key || "";
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType =
    "string" === typeof a.pointerType ? a.pointerType : mc[a.pointerType] || "";
  this.state = a.state;
  this.la = a;
  a.defaultPrevented && this.preventDefault();
};
C.prototype.stopPropagation = function () {
  C.kb.stopPropagation.call(this);
  this.la.stopPropagation
    ? this.la.stopPropagation()
    : (this.la.cancelBubble = !0);
};
C.prototype.preventDefault = function () {
  C.kb.preventDefault.call(this);
  var a = this.la;
  if (a.preventDefault) a.preventDefault();
  else if (((a.returnValue = !1), ic))
    try {
      if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
    } catch (b) {}
};
var nc = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  oc = 0;
var pc = function (a, b, c, d, e) {
    this.listener = a;
    this.Ca = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.i = e;
    this.key = ++oc;
    this.ra = this.Oa = !1;
  },
  qc = function (a) {
    a.ra = !0;
    a.listener = null;
    a.Ca = null;
    a.src = null;
    a.i = null;
  };
var rc = function (a) {
  this.src = a;
  this.J = {};
  this.Ga = 0;
};
rc.prototype.add = function (a, b, c, d, e) {
  var g = a.toString();
  a = this.J[g];
  a || ((a = this.J[g] = []), this.Ga++);
  var f = sc(a, b, d, e);
  -1 < f
    ? ((b = a[f]), c || (b.Oa = !1))
    : ((b = new pc(b, this.src, g, !!d, e)), (b.Oa = c), a.push(b));
  return b;
};
rc.prototype.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.J)) return !1;
  var e = this.J[a];
  b = sc(e, b, c, d);
  return -1 < b
    ? (qc(e[b]),
      w(null != e.length),
      Array.prototype.splice.call(e, b, 1),
      0 == e.length && (delete this.J[a], this.Ga--),
      !0)
    : !1;
};
rc.prototype.hasListener = function (a, b) {
  var c = void 0 !== a,
    d = c ? a.toString() : "",
    e = void 0 !== b;
  return za(this.J, function (g) {
    for (var f = 0; f < g.length; ++f)
      if (!((c && g[f].type != d) || (e && g[f].capture != b))) return !0;
    return !1;
  });
};
var sc = function (a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var g = a[e];
    if (!g.ra && g.listener == b && g.capture == !!c && g.i == d) return e;
  }
  return -1;
};
var tc = "closure_lm_" + ((1e6 * Math.random()) | 0),
  uc = {},
  vc = 0,
  xc = function (a, b, c, d, e) {
    if (d && d.once) return wc(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var g = 0; g < b.length; g++) xc(a, b[g], c, d, e);
      return null;
    }
    c = yc(c);
    return a && a[nc]
      ? D(a, b, c, pa(d) ? !!d.capture : !!d)
      : zc(a, b, c, !1, d, e);
  },
  zc = function (a, b, c, d, e, g) {
    if (!b) throw Error("Invalid event type");
    var f = pa(e) ? !!e.capture : !!e,
      h = Ac(a);
    h || (a[tc] = h = new rc(a));
    c = h.add(b, c, d, f, g);
    if (c.Ca) return c;
    d = Bc();
    c.Ca = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      jc || (e = f),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Cc(b.toString()), d);
    else if (a.addListener && a.removeListener)
      w("change" === b, "MediaQueryList only has a change event"),
        a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    vc++;
    return c;
  },
  Bc = function () {
    var a = Dc,
      b = Xb
        ? function (c) {
            return a.call(b.src, b.listener, c);
          }
        : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
    return b;
  },
  wc = function (a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var g = 0; g < b.length; g++) wc(a, b[g], c, d, e);
      return null;
    }
    c = yc(c);
    return a && a[nc]
      ? a.od(b, c, pa(d) ? !!d.capture : !!d, e)
      : zc(a, b, c, !0, d, e);
  },
  Ec = function (a) {
    if ("number" !== typeof a && a && !a.ra) {
      var b = a.src;
      if (b && b[nc]) b.qd(a);
      else {
        var c = a.type,
          d = a.Ca;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent(Cc(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        vc--;
        if ((c = Ac(b))) {
          d = a.type;
          if (d in c.J) {
            var e = c.J[d],
              g = xa(e, a),
              f;
            if ((f = 0 <= g))
              w(null != e.length), Array.prototype.splice.call(e, g, 1);
            f && (qc(a), 0 == c.J[d].length && (delete c.J[d], c.Ga--));
          }
          0 == c.Ga && ((c.src = null), (b[tc] = null));
        } else qc(a);
      }
    }
  },
  Cc = function (a) {
    return a in uc ? uc[a] : (uc[a] = "on" + a);
  },
  Gc = function (a, b, c, d) {
    var e = !0;
    if ((a = Ac(a)))
      if ((b = a.J[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var g = b[a];
          g && g.capture == c && !g.ra && ((g = Fc(g, d)), (e = e && !1 !== g));
        }
    return e;
  },
  Fc = function (a, b) {
    var c = a.listener,
      d = a.i || a.src;
    a.Oa && Ec(a);
    return c.call(d, b);
  },
  Dc = function (a, b) {
    if (a.ra) return !0;
    if (!Xb) {
      if (!b)
        a: {
          b = ["window", "event"];
          for (var c = v, d = 0; d < b.length; d++)
            if (((c = c[b[d]]), null == c)) {
              b = null;
              break a;
            }
          b = c;
        }
      d = b;
      b = new C(d, this);
      c = !0;
      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (0 == d.keyCode)
            try {
              d.keyCode = -1;
              break a;
            } catch (f) {
              e = !0;
            }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }
        d = [];
        for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
        a = a.type;
        for (e = d.length - 1; !b.eb && 0 <= e; e--) {
          b.currentTarget = d[e];
          var g = Gc(d[e], a, !0, b);
          c = c && g;
        }
        for (e = 0; !b.eb && e < d.length; e++)
          (b.currentTarget = d[e]), (g = Gc(d[e], a, !1, b)), (c = c && g);
      }
      return c;
    }
    return Fc(a, new C(b, this));
  },
  Ac = function (a) {
    a = a[tc];
    return a instanceof rc ? a : null;
  },
  Hc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
  yc = function (a) {
    w(a, "Listener can not be null.");
    if ("function" === typeof a) return a;
    w(a.handleEvent, "An object listener must have handleEvent method.");
    a[Hc] ||
      (a[Hc] = function (b) {
        return a.handleEvent(b);
      });
    return a[Hc];
  };
var Ic = function () {
    this.Aa = new Set();
  },
  D = function (a, b, c, d) {
    b = xc(b, c, d);
    a.Aa.add(b);
    return b;
  },
  Jc = function (a, b) {
    Ec(b);
    a.Aa.delete(b);
  };
var Kc = function () {
  this.Aa = new Set();
  this.yb = null;
};
ka(Kc, Ic);
var Lc = function (a, b) {
  if (a.yb) throw Error("Component already rendered.");
  a.yb = b;
};
var Mc = function () {
  this.Aa = new Set();
  this.W = this.hb = this.Da = null;
  this.Ob = !1;
};
ka(Mc, Ic);
Mc.prototype.register = function (a, b) {
  var c = this;
  if (this.Ob) throw Error("LanguageSelectorModel is already registered.");
  this.Ob = !0;
  this.hb = a;
  this.W = b;
  this.Lb = D(this, this.hb, "click", function () {
    return Nc(c);
  });
};
var Nc = function (a) {
    a.W.style.visibility = "visible";
    a.W.style.opacity = 1;
    Jc(a, a.Lb);
    a.Hc = D(a, document, "mouseup", function (b) {
      return Oc(a, b);
    });
  },
  Oc = function (a, b) {
    a.Da = b.target.getAttribute("data-languagecode");
    if (null != a.Da || b.target != a.W)
      Jc(a, a.Hc),
        (a.Gc = D(a, a.W, lc, function () {
          return Pc(a);
        })),
        (a.W.style.opacity = 0);
  },
  Pc = function (a) {
    Jc(a, a.Gc);
    a.W.style.visibility = "hidden";
    a.Lb = D(a, a.hb, "click", function () {
      return Nc(a);
    });
    if (null != a.Da) {
      var b = Bb(a.Da);
      $a(b);
    }
  };
var Qc = function (a) {
  var b = a.origin,
    c = a.Ra;
  a = a.languages;
  Kc.call(this);
  this.h = b;
  this.zb = c;
  this.Mb = a;
};
ka(Qc, Kc);
Qc.prototype.Sc = function (a, b, c) {
  Lc(this, a);
  Rb(a, Ub, { origin: this.h }, { Ra: this.zb, languages: this.Mb });
  a = Pb("confirm_yes");
  D(this, a, "click", function () {
    (void 0 == document.hasStorageAccess
      ? Promise.resolve()
      : document.requestStorageAccess()
    ).then(
      function () {
        return b();
      },
      function () {
        return c();
      }
    );
  });
  a = Pb("confirm_no");
  D(this, a, "click", function () {
    return c();
  });
  Rc(this);
};
Qc.prototype.Tc = function (a, b, c) {
  Lc(this, a);
  Rb(a, Vb, { origin: this.h }, { Ra: this.zb, languages: this.Mb });
  a = Pb("confirm_yes");
  D(this, a, "click", function () {
    return b();
  });
  a = Pb("confirm_no");
  D(this, a, "click", function () {
    return c();
  });
  Rc(this);
};
var Rc = function (a) {
  void 0 == a.Kb && (a.Kb = new Mc());
  var b = Pb("language_selector"),
    c = Pb("language_list");
  a.Kb.register(b, c);
};
var Sc,
  Tc,
  Uc = void 0,
  E = function (a) {
    try {
      return v.JSON.parse.call(v.JSON, a);
    } catch (b) {
      return !1;
    }
  },
  F = function (a) {
    return Object.prototype.toString.call(a);
  },
  Vc = F(0),
  Wc = F(new Date(0)),
  Xc = F(!0),
  Yc = F(""),
  Zc = F({}),
  $c = F([]),
  ad = function (a, b) {
    if (b)
      for (var c = 0, d = b.length; c < d; ++c)
        if (a === b[c])
          throw new TypeError("Converting circular structure to JSON");
    d = typeof a;
    if ("undefined" !== d) {
      c = Array.prototype.slice.call(b || [], 0);
      c[c.length] = a;
      b = [];
      var e = F(a);
      if (
        null != a &&
        "function" === typeof a.toJSON &&
        (Object.prototype.hasOwnProperty.call(a, "toJSON") ||
          ((e !== $c ||
            (a.constructor !== Array && a.constructor !== Object)) &&
            (e !== Zc ||
              (a.constructor !== Array && a.constructor !== Object)) &&
            e !== Yc &&
            e !== Vc &&
            e !== Xc &&
            e !== Wc))
      )
        return ad(a.toJSON.call(a), c);
      if (null == a) b[b.length] = "null";
      else if (e === Vc)
        (a = Number(a)),
          isNaN(a) || isNaN(a - a)
            ? (a = "null")
            : -0 === a && 0 > 1 / a && (a = "-0"),
          (b[b.length] = String(a));
      else if (e === Xc) b[b.length] = String(!!Number(a));
      else {
        if (e === Wc) return ad(a.toISOString.call(a), c);
        if (e === $c && F(a.length) === Vc) {
          b[b.length] = "[";
          var g = 0;
          for (d = Number(a.length) >> 0; g < d; ++g)
            g && (b[b.length] = ","), (b[b.length] = ad(a[g], c) || "null");
          b[b.length] = "]";
        } else if (e == Yc && F(a.length) === Vc) {
          b[b.length] = '"';
          g = 0;
          for (c = Number(a.length) >> 0; g < c; ++g)
            (d = String.prototype.charAt.call(a, g)),
              (e = String.prototype.charCodeAt.call(a, g)),
              (b[b.length] =
                "\b" === d
                  ? "\\b"
                  : "\f" === d
                  ? "\\f"
                  : "\n" === d
                  ? "\\n"
                  : "\r" === d
                  ? "\\r"
                  : "\t" === d
                  ? "\\t"
                  : "\\" === d || '"' === d
                  ? "\\" + d
                  : 31 >= e
                  ? "\\u" + (e + 65536).toString(16).substr(1)
                  : 32 <= e && 65535 >= e
                  ? d
                  : "\ufffd");
          b[b.length] = '"';
        } else if ("object" === d) {
          b[b.length] = "{";
          d = 0;
          for (g in a)
            Object.prototype.hasOwnProperty.call(a, g) &&
              ((e = ad(a[g], c)),
              void 0 !== e &&
                (d++ && (b[b.length] = ","),
                (b[b.length] = ad(g)),
                (b[b.length] = ":"),
                (b[b.length] = e)));
          b[b.length] = "}";
        } else return;
      }
      return b.join("");
    }
  },
  bd = /[\0-\x07\x0b\x0e-\x1f]/,
  cd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
  dd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
  ed = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
  fd = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
  gd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
  hd = /[ \t\n\r]+/g,
  id = /[^"]:/,
  jd = /""/g,
  kd = /true|false|null/g,
  ld = /00/,
  md = /[\{]([^0\}]|0[^:])/,
  nd = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
  od = /[^\[,:][\[\{]/,
  pd = /^(\{|\}|\[|\]|,|:|0)+/,
  qd = /\u2028/g,
  rd = /\u2029/g,
  sd = function (a) {
    a = String(a);
    if (bd.test(a) || cd.test(a) || dd.test(a) || ed.test(a)) return !1;
    var b = a.replace(fd, '""');
    b = b.replace(gd, "0");
    b = b.replace(hd, "");
    if (id.test(b)) return !1;
    b = b.replace(jd, "0");
    b = b.replace(kd, "0");
    if (
      ld.test(b) ||
      md.test(b) ||
      nd.test(b) ||
      od.test(b) ||
      !b ||
      (b = b.replace(pd, ""))
    )
      return !1;
    a = a.replace(qd, "\\u2028").replace(rd, "\\u2029");
    b = void 0;
    try {
      b = Uc
        ? [E(a)]
        : eval(
            "(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" +
              a +
              "\n)"
          );
    } catch (c) {
      return !1;
    }
    return b && 1 === b.length ? b[0] : !1;
  },
  td = function () {
    var a = ((v.document || {}).scripts || []).length;
    if ((void 0 === Sc || void 0 === Uc || Tc !== a) && -1 !== Tc) {
      Sc = Uc = !1;
      Tc = -1;
      try {
        try {
          Uc =
            !!v.JSON &&
            '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' ===
              v.JSON.stringify.call(v.JSON, {
                a: [3, !0, new Date(0)],
                c: function () {},
              }) &&
            !0 === E("true") &&
            3 === E('[{"a":3}]')[0].a;
        } catch (b) {}
        Sc = Uc && !E("[00]") && !E('"\u0007"') && !E('"\\0"') && !E('"\\v"');
      } finally {
        Tc = a;
      }
    }
  },
  ud =
    !Date.prototype.toISOString ||
    "function" !== typeof Date.prototype.toISOString ||
    "1970-01-01T00:00:00.000Z" !== new Date(0).toISOString(),
  vd = function () {
    var a = Date.prototype.getUTCFullYear.call(this);
    return [
      0 > a
        ? "-" + String(1e6 - a).substr(1)
        : 9999 >= a
        ? String(1e4 + a).substr(1)
        : "+" + String(1e6 + a).substr(1),
      "-",
      String(101 + Date.prototype.getUTCMonth.call(this)).substr(1),
      "-",
      String(100 + Date.prototype.getUTCDate.call(this)).substr(1),
      "T",
      String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
      ":",
      String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1),
      ":",
      String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1),
      ".",
      String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
      "Z",
    ].join("");
  };
Date.prototype.toISOString = ud ? vd : Date.prototype.toISOString;
var wd,
  xd = !1,
  G = function (a) {
    try {
      xd && window.console && window.console.log && window.console.log(a);
    } catch (b) {}
  },
  H = function (a, b) {
    if (!a) return -1;
    if (a.indexOf) return a.indexOf(b, void 0);
    for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
    return -1;
  },
  J = function (a, b) {
    function c() {}
    if (!a) throw "Child class cannot be empty.";
    if (!b) throw "Parent class cannot be empty.";
    c.prototype = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  },
  yd = function (a) {
    return "[object Function]" === Object.prototype.toString.call(a);
  },
  zd = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (null === d || void 0 === d) d = "";
        b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      }
    return b.join("&");
  },
  Ad = function (a) {
    var b = window.location.hash;
    a = new RegExp("[&#]" + a + "=([^&]*)");
    b = decodeURIComponent(b);
    b = a.exec(b);
    return null == b ? "" : b[1].replace(/\+/g, " ");
  },
  Bd = function (a, b, c) {
    if (a.addEventListener) a.addEventListener(b, c, !1);
    else if (a.attachEvent) a.attachEvent("on" + b, c);
    else throw "Add event handler for " + b + " failed.";
  },
  Cd = function (a, b) {
    a = (a || "").split(" ");
    b = (b || "").split(" ");
    for (var c = 0; c < b.length; c++) if (b[c] && 0 > H(a, b[c])) return !1;
    return !0;
  },
  Dd = function () {
    if ("undefined" != typeof wd) return wd;
    a: {
      try {
        if (window.localStorage) {
          var a = window.localStorage;
          break a;
        }
      } catch (b) {}
      a = void 0;
    }
    if (!a) return (wd = !1);
    try {
      a.setItem("test", "test"), a.removeItem("test"), (wd = !0);
    } catch (b) {
      wd = !1;
    }
    return wd;
  },
  Ed = function () {
    var a = navigator.userAgent.toLowerCase();
    return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10);
  },
  Fd = function () {
    return (
      Object.hasOwnProperty.call(window, "ActiveXObject") &&
      !window.ActiveXObject
    );
  },
  Gd = function () {
    var a = navigator.userAgent.toLowerCase();
    return (
      0 > a.indexOf("edge/") &&
      (-1 < a.indexOf("chrome/") || -1 < a.indexOf("crios/"))
    );
  },
  Hd = function () {
    var a = navigator.userAgent,
      b;
    if ((b = !!a && -1 != a.indexOf("CriOS")))
      (b = -1),
        (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1),
        (b = 48 > b);
    return b;
  },
  Id = function () {
    var a = navigator.userAgent.toLowerCase();
    return (
      -1 < a.indexOf("safari/") &&
      0 > a.indexOf("chrome/") &&
      0 > a.indexOf("crios/") &&
      0 > a.indexOf("android")
    );
  },
  K = window.JSON,
  L = function (a) {
    this.nb = a || [];
    this.H = {};
  };
L.prototype.addEventListener = function (a, b) {
  if (!(0 <= H(this.nb, a))) throw "Unrecognized event type: " + a;
  if (!yd(b)) throw "The listener for event '" + a + "' is not a function.";
  this.H[a] || (this.H[a] = []);
  0 > H(this.H[a], b) && this.H[a].push(b);
};
L.prototype.removeEventListener = function (a, b) {
  if (!(0 <= H(this.nb, a))) throw "Unrecognized event type: " + a;
  yd(b) &&
    this.H[a] &&
    this.H[a].length &&
    ((b = H(this.H[a], b)), 0 <= b && this.H[a].splice(b, 1));
};
L.prototype.dispatchEvent = function (a) {
  var b = a.type;
  if (!(b && 0 <= H(this.nb, b)))
    throw "Failed to dispatch unrecognized event type: " + b;
  if (this.H[b] && this.H[b].length)
    for (var c = 0, d = this.H[b].length; c < d; c++) this.H[b][c](a);
};
K = {
  parse: function (a) {
    a = "[" + String(a) + "]";
    -1 === Tc ? (a = !1) : (td(), (a = (Sc ? E : sd)(a)));
    if (!1 === a || 1 !== a.length)
      throw new SyntaxError("JSON parsing failed.");
    return a[0];
  },
  stringify: function (a) {
    -1 !== Tc
      ? (td(), (a = Uc ? v.JSON.stringify.call(v.JSON, a) : ad(a)))
      : (a = void 0);
    return a;
  },
};
var M = { ld: {} },
  N = N || {};
N.Na = "APISID";
N.Ma = "SAPISID";
N.Ka = "__Secure-3PAPISID";
N.N = function (a) {
  a = encodeURIComponent(a);
  var b = N.Bb();
  if (
    b &&
    (a = b.match("(^|;) ?" + a + "=([^;]*)(;|$)")) &&
    2 < a.length &&
    (a = a[2])
  )
    return decodeURIComponent(a);
};
N.Ta = function (a) {
  var b;
  (a = N.N(a)) && (b = String(Jd(a)));
  return b;
};
N.Bb = function () {
  return document.cookie;
};
N.ad = function (a) {
  document.cookie = a;
};
M = M || {};
M.Dc = function (a, b, c) {
  if (!0 === M.Ya) a();
  else {
    var d = 2,
      e = function () {
        d--;
        0 == d && ((M.Ya = !0), a());
      },
      g = function (f) {
        b(f);
      };
    switch (Kd()) {
      case "sessionStorage":
        M.ua = new Ld();
        M.ua.I(e, g);
        if (c)
          try {
            M.ua.clear();
          } catch (f) {}
        break;
      case "inMemoryStorage":
        M.ua = new Md();
        M.ua.I(e, g);
        break;
      default:
        c = Error("Unsupported storage type: " + Kd());
        b(c);
        return;
    }
    switch (Nd()) {
      case "localStorage":
        M.da = new Od();
        M.da.I(e, g);
        break;
      case "indexedDb":
        M.da = new Pd();
        M.da.I(e, g);
        break;
      case "cookieStorage":
        M.da = new Qd();
        M.da.I(e, g);
        break;
      default:
        (c = Error("Unsupported storage type: " + Nd())), b(c);
    }
  }
};
M.Db = function () {
  if (!M.Ya) throw Error("Storages are not initialized yet!");
  return M.da;
};
M.Ac = function () {
  if (!M.Ya) throw Error("Storages are not initialized yet!");
  return M.ua;
};
var Od = function () {};
m = Od.prototype;
m.I = function (a, b) {
  Dd()
    ? ((this.ka = window.localStorage), a())
    : b &&
      b(Error("localStorage is not available in the current environment."));
};
m.getItem = function (a, b) {
  b(this.ka.getItem(a));
};
m.setItem = function (a, b, c) {
  void 0 === b || null === b ? this.ka.removeItem(a) : this.ka.setItem(a, b);
  c && c();
};
m.removeItem = function (a, b) {
  this.ka.removeItem(a);
  b && b();
};
m.clear = function (a) {
  this.ka.clear();
  a && a();
};
var Pd = function () {};
m = Pd.prototype;
m.I = function (a, b) {
  var c = this,
    d = window.indexedDB.open("oauth");
  d.onsuccess = function (e) {
    c.xa = e.target.result;
    a();
  };
  d.onupgradeneeded = function (e) {
    e.target.result.createObjectStore("oauth");
  };
  d.onerror = function (e) {
    e = e.target.errorCode;
    b && b(Error("IndexedDb initialization failed: " + e));
  };
};
m.getItem = function (a, b) {
  var c = this.xa.transaction("oauth", "readwrite").objectStore("oauth").get(a);
  c.onsuccess = function () {
    b(c.result);
  };
};
m.setItem = function (a, b, c) {
  var d = this.xa.transaction("oauth", "readwrite").objectStore("oauth");
  if (void 0 === b || null === b) d["delete"](a);
  else d.put(b, a);
  d.transaction.oncomplete = function () {
    c && c();
  };
};
m.removeItem = function (a, b) {
  var c = this.xa.transaction("oauth", "readwrite").objectStore("oauth");
  c["delete"](a);
  c.transaction.oncomplete = function () {
    b && b();
  };
};
m.clear = function (a) {
  var b = this.xa.transaction("oauth", "readwrite").objectStore("oauth");
  b.clear();
  b.transaction.oncomplete = function () {
    a && a();
  };
};
var Md = function () {};
m = Md.prototype;
m.I = function (a) {
  this.Ea = {};
  a();
};
m.getItem = function (a, b) {
  b(this.Ea[a] || null);
};
m.setItem = function (a, b, c) {
  this.Ea[a] = b;
  c && c();
};
m.removeItem = function (a, b) {
  delete this.Ea[a];
  b && b();
};
m.clear = function (a) {
  this.Ea = {};
  a && a();
};
var Ld = function () {};
m = Ld.prototype;
m.I = function (a, b) {
  Dd()
    ? ((this.ta = window.sessionStorage), a())
    : b &&
      b(Error("sessionStorage is not available in the current environment."));
};
m.getItem = function (a, b) {
  b(this.ta.getItem(a));
};
m.setItem = function (a, b, c) {
  void 0 === b || null === b ? this.ta.removeItem(a) : this.ta.setItem(a, b);
  c && c();
};
m.removeItem = function (a, b) {
  this.ta.removeItem(a);
  b && b();
};
m.clear = function (a) {
  this.ta.clear();
  a && a();
};
var Qd = function () {
  this.Kc = O.Vb;
};
m = Qd.prototype;
m.I = function (a, b) {
  navigator.cookieEnabled
    ? a()
    : b && b(Error("Cookies are not enabled in current environment."));
};
m.getItem = function (a, b) {
  for (var c = null, d = Rd(a), e = 0; e < d.length; e++)
    if (d[e].key == a) {
      c = d[e].value;
      break;
    }
  b(c);
};
m.setItem = function (a, b, c) {
  var d = O.Ua(a.split(O.m)[0]);
  if (d) {
    var e = Sd(d);
    b = { key: a, value: b };
    for (var g = 0; g < e.length; g++)
      if (e[g].key == a) {
        e.splice(g, 1);
        break;
      }
    e.push(b);
    Td(this, d, e);
  }
  c && c();
};
m.removeItem = function (a, b) {
  for (var c = Rd(a), d = 0; d < c.length; d++)
    if (c[d].key == a) {
      c.splice(d, 1);
      break;
    }
  (a = O.Ua(a.split(O.m)[0])) && Td(this, a, c);
  b && b();
};
m.clear = function (a) {
  M.ic();
  a && a();
};
var Rd = function (a) {
    return (a = O.Ua(a.split(O.m)[0])) ? Sd(a) : [];
  },
  Sd = function (a) {
    a = N.N(a);
    return M.kc(a || null);
  },
  Td = function (a, b, c) {
    var d = M.oc(c);
    d.length > a.Kc
      ? (c.splice(0, 1),
        0 < c.length
          ? Td(a, b, c)
          : G("Failed to write Cookie based cache due to the big size."))
      : M.Qb(b, d);
  };
M.jc = function (a) {
  try {
    return atob(a);
  } catch (b) {
    return a;
  }
};
M.nc = function (a) {
  try {
    return btoa(a);
  } catch (b) {
    return a;
  }
};
M.kc = function (a) {
  if (!a) return [];
  a = M.jc(a);
  try {
    return K.parse(a).items || [];
  } catch (b) {
    return G("Error while parsing items from cookie:" + b.message), [];
  }
};
M.oc = function (a) {
  return M.nc(K.stringify({ items: a }));
};
M.Qb = function (a, b) {
  var c = window.location.hostname,
    d = window.location.pathname;
  a =
    encodeURIComponent(a) + "=" + encodeURIComponent(b) + "; domain=" + c + ";";
  -1 != navigator.userAgent.toLowerCase().indexOf("msie") ||
    Fd() ||
    (a += " path=" + d + ";");
  "https:" == window.location.protocol && (a += " secure;");
  N.ad(a);
};
M.ic = function () {
  var a = O.Ia,
    b = N.Bb();
  if (b) {
    b = b
      .replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "")
      .split(/\s*(?:=[^;]*)?;\s*/);
    for (var c = 0; c < b.length; c++) {
      var d = decodeURIComponent(b[c]);
      0 == d.indexOf(a) && M.Qb(d, "");
    }
  }
};
var Ud = function (a) {
  this.Jb = a;
  L.call(this, ["storageValueChanged"]);
};
J(Ud, L);
var Vd = function (a, b) {
  M.Db().getItem(a.Jb, b);
};
Ud.prototype.addListener = function (a) {
  this.addEventListener("storageValueChanged", a);
};
Ud.prototype.start = function () {
  var a = this;
  Vd(this, function (b) {
    a.Pc = b;
    a.Nb = 0;
    a.Za = window.setInterval(Wd(a), 200);
  });
};
Ud.prototype.stop = function () {
  void 0 !== this.Za && (clearInterval(this.Za), (this.Za = void 0));
};
var Wd = function (a) {
    return function () {
      a.Nb++;
      Vd(a, function (b) {
        b != a.Pc
          ? (a.dispatchEvent({
              type: "storageValueChanged",
              key: a.Jb,
              newValue: b,
            }),
            a.stop())
          : 1500 <= a.Nb && a.stop();
      });
    };
  },
  Jd = function (a) {
    var b = 0,
      c;
    if (a) {
      var d = 0;
      for (c = a.length; d < c; d++) {
        var e = a.charCodeAt(d);
        b = (b << 5) - b + e;
        b |= 0;
      }
    }
    return b;
  },
  P = function (a) {
    return !!a && 0 <= a.indexOf(O.m);
  },
  Xd = function (a, b) {
    if (!a && !b) return !0;
    if (!a || !b) return !1;
    a = a.extraQueryParams;
    b = b.extraQueryParams;
    if (!a && !b) return !0;
    if (
      !a ||
      !b ||
      (Object.keys && Object.keys(a).length != Object.keys(b).length)
    )
      return !1;
    for (var c in a) if (a[c] !== b[c]) return !1;
    if (!Object.keys) for (c in b) if (a[c] !== b[c]) return !1;
    return !0;
  },
  O = O || {};
O.Ub = 100;
O.ub = "/oauth2/sessionstate/action/updateState";
O.ob = "/oauth2/sessionstate/action/checkOrigin";
O.sb = "/oauth2/permission/action/refresh";
O.rb = "/oauth2/permission/action/code";
O.La = "/oauth2/permission/action/listSessions";
O.$b = "/o/oauth2/revoke";
O.va = "response_type login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes nonce".split(
  " "
);
O.Xb = "login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes".split(
  " "
);
O.Yb = "client_id origin scope ss_domain authuser hd enable_serial_consent".split(
  " "
);
O.m = "::";
O.Ja = "_ss_";
O.qb = "_tr_";
O.ha = "oauth2_ss";
O.pb = "oauth2_cs";
O.tb = "oauth2_tr";
O.Wb = "oauth2_is";
O.ga = "oauth2_ar";
O.Ia = "oauth2c_";
O.Vb = 1500;
O.kd = function () {
  var a = { Ja: 1, qb: 2, ha: 3, pb: 4, tb: 5, ga: 6 },
    b;
  for (b in a)
    if (((a = O[b]), !a || 0 <= a.indexOf(O.m)))
      throw "Invalid value for 'oauth2.spi." + b + "'.";
};
O.kd();
O.Zb = 512;
O.bc = function (a) {
  var b;
  (b = void 0 === a.hint) ||
    ((b = a.hint),
    (b =
      ("" === b
        ? !0
        : b
        ? "string" == typeof b ||
          ("object" == typeof b && b.constructor === String)
        : !1) && a.hint.length <= O.Zb));
  return !a.id && b;
};
O.yc = function () {
  var a = N.N("https:" == window.location.protocol ? N.Ma : N.Na);
  a || (a = N.N(N.Ka));
  return a;
};
O.Ua = function (a) {
  switch (a) {
    case O.ga:
      return O.Ia + O.ga;
    case O.ha:
      return O.Ia + O.ha;
    default:
      return null;
  }
};
var Nd = function () {
    return ((Id() || Gd()) && !Dd()) || (Fd() && !window.indexedDB)
      ? "cookieStorage"
      : Fd()
      ? "indexedDb"
      : "localStorage";
  },
  Kd = function () {
    return (!Id() && !Gd()) || Dd() ? "sessionStorage" : "inMemoryStorage";
  };
N = N || {};
N.Ha = "cookieValueChanged";
var Yd = function (a) {
  this.Ec = a;
  L.call(this, [N.Ha]);
};
J(Yd, L);
Yd.prototype.N = function () {
  return N.N(N.Na) || N.N(N.Ma) || N.N(N.Ka);
};
var Q = function () {
  return N.Ta(N.Na) || N.Ta(N.Ma) || N.Ta(N.Ka);
};
Yd.prototype.addListener = function (a) {
  this.addEventListener(N.Ha, a);
};
var ae = function (a) {
    Zd(a);
    a.Ba = a.N();
    a.lb = window.setInterval($d(a), a.Ec);
    G("IDP Session Cookie monitor is started.");
  },
  Zd = function (a) {
    void 0 !== a.lb &&
      (window.clearInterval(a.lb),
      (a.lb = void 0),
      G("IDP Session Cookie monitor is stoped."));
  },
  $d = function (a) {
    return function () {
      var b = a.N();
      if (a.Ba != b) {
        var c = { type: N.Ha, newHash: b && Jd(b), oldHash: a.Ba && Jd(a.Ba) };
        a.Ba = b;
        a.dispatchEvent(c);
      }
    };
  },
  be = function (a) {
    this.h = a;
    this.Sb = void 0;
  },
  ce = function (a, b, c) {
    var d = O.$b,
      e = new XMLHttpRequest();
    e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        var h;
        e.responseText && (h = K.parse(e.responseText));
        c(h);
      } else
        4 == e.readyState && 0 == e.status
          ? c({ error: "network_error" })
          : 4 == e.readyState &&
            c({ error: "server_error", error_subtype: e.responseText });
    };
    e.open("POST", d, !0);
    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var g = "xsrfToken=";
    a.Sb && (g += a.Sb);
    if (b)
      for (var f in b)
        f && b[f] && (g += "&" + f + "=" + encodeURIComponent(b[f]));
    G("Call " + d + " with postData: " + g);
    e.send(g);
  },
  de = function (a, b, c, d) {
    var e = new XMLHttpRequest();
    e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        var f;
        if (e.responseText && (f = K.parse(e.responseText))) {
          var h = f;
          if (h.error) {
            h.thrown_by = "server";
            try {
              h.error = h.error.toLowerCase();
            } catch (k) {}
          }
        }
        d(f);
      } else
        4 == e.readyState && 0 == e.status
          ? d({ error: "network_error" })
          : 4 == e.readyState &&
            d({ error: "server_error", error_subtype: e.responseText });
    };
    if ((b = zd(b))) (a += 0 > a.indexOf("?") ? "?" : "&"), (a += b);
    e.open("GET", a, !0);
    e.setRequestHeader("X-Requested-With", "XmlHttpRequest");
    if (c)
      for (var g in c)
        if (c.hasOwnProperty(g)) {
          b = c[g];
          if (null === b || void 0 === b) b = "";
          e.setRequestHeader(g, b);
        }
    G("Call " + a + " with Get method.");
    e.send();
  },
  ee = function (a, b, c) {
    de(O.ob, { origin: a.h, client_id: b }, null, c);
  },
  fe = function (a, b, c) {
    b && b.length
      ? de(O.ub, { login_hint: b.join(" "), origin: a.h }, null, c)
      : c({ activeHints: {} });
  },
  he = function (a, b, c) {
    b.origin = a.h;
    0 > O.va.indexOf("enable_serial_consent") &&
      O.va.push("enable_serial_consent");
    b = ge(b, O.va);
    de(O.sb, b, null, c);
  },
  ie = function (a, b, c) {
    b.origin = a.h;
    b = ge(b, O.Xb);
    de(O.rb, b, null, c);
  },
  je = function (a, b, c) {
    b.origin = a.h;
    b = ge(b, O.Yb);
    de(O.La, b, null, c);
  },
  ke = function (a, b, c) {
    ce(a, { token: b }, c);
  },
  ge = function (a, b) {
    for (var c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      void 0 !== a[e] && null !== a[e] && (c[e] = a[e]);
    }
    return c;
  };
M = M || {};
var le = function () {};
le.prototype.F = function () {
  return !1;
};
var me = {};
M.Rc = function () {
  var a = new ne();
  if (!a) throw "policy cannot be empty.";
  if (M.Gb("DEFAULT")) throw "Duplicate policyName [DEFAULT].";
  me.DEFAULT = a;
};
M.Gb = function (a) {
  for (var b in me) if (a == b) return !0;
  return !1;
};
M.Cb = function (a) {
  return a && M.Gb(a) ? a : "DEFAULT";
};
M.vc = function (a) {
  return me[M.Cb(a)];
};
M.F = function (a, b, c, d) {
  return M.vc(d).F(a, b, c);
};
M.nd = function (a, b, c, d) {
  if (!M.F(a, b, c, d)) throw "permission_error";
};
var oe = function () {};
J(oe, le);
oe.prototype.F = function (a, b, c) {
  a = c ? this.Wa(a) : this.Xa(a);
  return 0 <= H(a, b);
};
oe.prototype.Xa = function (a) {
  var b = [];
  if (
    a &&
    (b.push(a),
    "http://" == a.substring(0, 7) || "https://" == a.substring(0, 8))
  ) {
    var c = document.createElement("a");
    c.href = a;
    a != c.protocol + "//" + c.hostname &&
      b.push(c.protocol + "//" + c.hostname);
    "https:" == c.protocol && b.push("http://" + c.hostname);
  }
  return b;
};
oe.prototype.Wa = function (a) {
  var b = [];
  if (a) {
    b.push(a);
    var c = document.createElement("a");
    c.href = a;
    if ("http:" == c.protocol || "https:" == c.protocol)
      for (a = c.hostname.split("."); 1 < a.length; )
        b.push(c.protocol + "//" + a.join(".")),
          "https:" == c.protocol && b.push("http://" + a.join(".")),
          a.shift();
  }
  return b;
};
var ne = function () {};
J(ne, le);
ne.prototype.F = function (a, b, c) {
  a = c ? this.Wa(a) : this.Xa(a);
  return 0 <= H(a, b);
};
ne.prototype.Xa = function (a) {
  var b = [];
  if (a && (b.push(a), "https://" == a.substring(0, 8))) {
    var c = document.createElement("a");
    c.href = a;
    ("" != c.port && 0 != c.port && 443 != c.port) ||
      b.push("http://" + c.hostname);
  }
  return b;
};
ne.prototype.Wa = function (a) {
  var b = [];
  if (a) {
    var c = document.createElement("a");
    c.href = a;
    if (
      ("https:" == c.protocol &&
        ("" == c.port || 0 == c.port || 443 == c.port)) ||
      ("http:" == c.protocol && ("" == c.port || 0 == c.port || 80 == c.port))
    )
      for (a = c.hostname.split("."); 1 < a.length; )
        b.push(c.protocol + "//" + a.join(".")),
          "https:" == c.protocol && b.push("http://" + a.join(".")),
          a.shift();
    else b.push(a);
  }
  return b;
};
M.Rc();
var R = function () {};
R.prototype.$a = function () {
  return !0;
};
var S = function (a) {
  return a.$a() ? M.Ac() : M.Db();
};
R.prototype.l = function () {
  throw Error("unimplemented abstract method");
};
R.prototype.ba = function () {
  throw Error("unimplemented abstract method");
};
R.prototype.B = function () {
  throw Error("unimplemented abstract method");
};
R.prototype.C = function () {
  throw Error("unimplemented abstract method");
};
var T = function () {};
J(T, R);
T.prototype.B = function (a, b, c) {
  var d = this,
    e = this.l(a);
  S(this).getItem(e, function (g) {
    if (g)
      try {
        var f = K.parse(g);
        if (f.cookieHash != b) {
          S(d).removeItem(e, function () {
            c(void 0);
          });
          return;
        }
        var h = f && f.cachedValue;
      } catch (k) {}
    c(h);
  });
};
T.prototype.C = function (a, b, c, d) {
  a = this.l(a);
  void 0 === b || null === b
    ? S(this).removeItem(a, d)
    : ((b = K.stringify({ cookieHash: c, cachedValue: b })),
      S(this).setItem(a, b, d));
};
var pe = function () {};
J(pe, R);
pe.prototype.B = function (a, b, c) {
  S(this).getItem(this.l(a), function (d) {
    if (d)
      try {
        var e = K.parse(d);
        var g = e && e.cachedValue;
      } catch (f) {}
    c(g);
  });
};
pe.prototype.C = function (a, b, c, d) {
  a = this.l(a);
  void 0 === b || null === b
    ? S(this).removeItem(a, d)
    : ((b = K.stringify({ cachedValue: b })), S(this).setItem(a, b, d));
};
var qe = function () {};
J(qe, pe);
qe.prototype.$a = function () {
  return !1;
};
qe.prototype.l = function (a) {
  return [O.ga, a.origin, a.clientId, a.id].join(O.m);
};
qe.prototype.ba = function (a) {
  var b = {};
  a &&
    ((a = a.split(O.m)),
    4 == a.length && ((b.origin = a[1]), (b.clientId = a[2]), (b.id = a[3])));
  return b;
};
var re = function () {};
J(re, T);
re.prototype.l = function (a) {
  return [O.pb, a.origin, a.clientId].join(O.m);
};
re.prototype.ba = function (a) {
  a = a.split(O.m);
  var b = {};
  3 == a.length && ((b.origin = a[1]), (b.clientId = a[2]));
  return b;
};
var se = function () {};
J(se, T);
se.prototype.l = function (a) {
  return [O.Wb, a.origin, a.clientId].join(O.m);
};
se.prototype.B = function (a, b, c) {
  var d = this;
  T.prototype.B.call(this, a, b, function (e) {
    e && e.expires_at
      ? 6e4 > e.expires_at - new Date().getTime()
        ? S(d).removeItem(d.l(a), c)
        : Cd(e.scope, a.scope) && Cd(a.scope, e.scope)
        ? ((e.expires_in = Math.floor(
            (e.expires_at - new Date().getTime()) / 1e3
          )),
          c && c(e))
        : S(d).removeItem(d.l(a), c)
      : c && c(void 0);
  });
};
se.prototype.C = function (a, b, c, d) {
  var e;
  b && b.expires_at && 18e4 < b.expires_at - new Date().getTime() && (e = b);
  T.prototype.C.call(this, a, e, c, d);
};
var te = function () {};
J(te, pe);
te.prototype.$a = function () {
  return !1;
};
te.prototype.l = function (a) {
  return [
    O.ha,
    a.domain,
    a.crossSubDomains ? "1" : "0",
    M.Cb(a.policy),
    a.id || O.Ja,
  ].join(O.m);
};
te.prototype.ba = function (a) {
  a = a.split(O.m);
  var b = {};
  5 == a.length &&
    ((b.domain = a[1]),
    (b.crossSubDomains = "1" == a[2]),
    (b.policy = a[3]),
    (b.id = a[4]));
  "DEFAULT" == b.policy && delete b.policy;
  b.id == O.Ja && delete b.id;
  return b;
};
var ue = function (a) {
  this.Oc = a || O.tb;
};
J(ue, T);
ue.prototype.l = function (a) {
  return [this.Oc, a.origin, a.clientId, a.id || O.qb].join(O.m);
};
ue.prototype.B = function (a, b, c) {
  var d = this;
  T.prototype.B.call(this, a, b, function (e) {
    e && e.fa && e.fa.expires_at
      ? a.loginHint != e.fa.login_hint
        ? S(d).removeItem(d.l(a), c)
        : 6e4 > e.fa.expires_at - new Date().getTime()
        ? S(d).removeItem(d.l(a), c)
        : Cd(e.fa.scope, a.scope)
        ? Cd(e.responseType, a.responseType)
          ? ((e = e.fa),
            (e.expires_in = Math.floor(
              (e.expires_at - new Date().getTime()) / 1e3
            )),
            c && c(e))
          : S(d).removeItem(d.l(a), c)
        : S(d).removeItem(d.l(a), c)
      : c && c(void 0);
  });
};
ue.prototype.C = function (a, b, c, d) {
  var e;
  b &&
    b.expires_at &&
    18e4 < b.expires_at - new Date().getTime() &&
    (e = { fa: b, responseType: a.responseType });
  T.prototype.C.call(this, a, e, c, d);
};
var ve = function (a, b) {
    this.h = a;
    this.gb = b;
    this.Sa = !1;
    this.qa = {};
    this.pa = {};
    this.oa = {};
  },
  we = function (a, b) {
    if (!b) throw "message object cannot be null.";
    b.rpcToken = a.gb;
    b = K.stringify(b);
    G("IDP IFrame sends message: " + b);
    window.parent.postMessage(b, a.h);
  },
  U = function (a, b, c) {
    b && we(a, { id: b, result: c });
  };
ve.prototype.Qc = function (a) {
  if (a.source == window.parent && a.origin == this.h) {
    G("IDP Session State IFrame receive message:" + a.data);
    try {
      var b = K.parse(a.data);
    } catch (d) {
      return;
    }
    if ((b.rpcToken || this.gb) && b.rpcToken != this.gb)
      G("RPC token mismatch.");
    else if (b && b.method && ("showDialog" == b.method || this.qa[b.method]))
      if ("showDialog" == b.method)
        if (this.Sa) we(this, { id: b.id, error: "dialog_already_displayed" });
        else if (
          ((a = b.params), b.id && a && a.dialogType && this.oa[a.dialogType])
        ) {
          var c = this.oa[a.dialogType];
          c.s && !c.s(a)
            ? (G("Bad request."), we(this, { id: b.id, error: "bad_request" }))
            : c.i(b);
        } else G("Bad dialog request.");
      else
        (a = this.qa[b.method]),
          a.P && !b.id
            ? G("Bad request.")
            : a.s && !a.s(b)
            ? (G("Bad request."), we(this, { id: b.id, error: "bad_request" }))
            : a.i(b);
    else G("Bad request.");
  }
};
var V = function (a, b) {
    if (b && b.type && a.pa[b.type]) {
      var c = a.pa[b.type].filter;
      (c && !c(b)) || we(a, { method: "fireIdpEvent", params: b });
    } else G("Invalid event type.");
  },
  xe = function (a) {
    V(a, { type: "displayIFrame", Cc: !1, options: { fullScreen: !0 } });
    a.Sa = !0;
  },
  ye = function (a) {
    V(a, { type: "displayIFrame", Cc: !0 });
    a.Sa = !1;
  },
  ze = function (a, b) {
    a.qa = {};
    a.pa = {};
    a.oa = {};
    if (b) {
      if (b.A)
        for (var c = 0; c < b.A.length; c++) {
          var d = b.A[c];
          if (!d.method || !d.i)
            throw "Error in RPC policy: method or handler is empty.";
          if (a.qa[d.method])
            throw (
              "Error in RPC policy: duplicate entry for RPC '" + d.method + "'."
            );
          var e = d.method;
          a.qa[e] = { i: d.i, P: d.P, s: d.s, method: e };
        }
      if (b.M)
        for (c = 0; c < b.M.length; c++) {
          d = b.M[c];
          if (!d.type) throw "Error in Event policy: type is empty.";
          if (a.pa[d.type])
            throw (
              "Error in Event policy: duplicate entry for type '" +
              d.type +
              "'."
            );
          e = d.type;
          a.pa[e] = { filter: d.filter, type: e };
        }
      if (b.$)
        for (c = 0; c < b.$.length; c++) {
          d = b.$[c];
          if (!d.aa) throw "Error in Dialog policy: dialogType is empty.";
          if (a.oa[d.aa])
            throw (
              "Error in Dialog policy: duplicate entry for dialogType '" +
              d.aa +
              "'."
            );
          e = d.aa;
          a.oa[e] = { aa: e, i: d.i, s: d.s };
        }
    }
  },
  Ae = function (a, b, c, d) {
    V(a, {
      type: "sessionStateChanged",
      clientId: b,
      user: c,
      sessionState: d,
    });
  },
  Be = function (a) {
    var b = new te(),
      c = O.ha + O.m;
    return function (d) {
      if (d.key && 0 === d.key.indexOf(c)) {
        var e = b.ba(d.key);
        if (M.F(a.h, e.domain, e.crossSubDomains, e.policy)) {
          var g;
          if (d.newValue)
            try {
              var f = K.parse(d.newValue);
              f && (g = f.cachedValue);
            } catch (h) {
              return;
            }
          V(a, {
            type: "sessionSelectorChanged",
            newValue: g,
            crossSubDomains: e.crossSubDomains,
            domain: e.domain,
            policy: e.policy,
            id: e.id,
          });
        }
      }
    };
  },
  Ce = function (a) {
    var b = new qe(),
      c = [O.ga, a.h].join(O.m) + O.m;
    return function (d) {
      if (!d.key && Ed()) {
        var e = null,
          g = [];
        for (d = 0; d < window.localStorage.length; d++) {
          var f = window.localStorage.key(d);
          if (0 === f.indexOf(c))
            if (e) g.push(f);
            else {
              var h = window.localStorage.getItem(f);
              g.push(f);
              if (h) {
                try {
                  var k = K.parse(h);
                } catch (l) {
                  continue;
                }
                k &&
                  k.cachedValue &&
                  ((e = b.ba(f)),
                  (e = {
                    type: "authResult",
                    clientId: e.clientId,
                    id: e.id,
                    authResult: k.cachedValue,
                  }));
              }
            }
        }
        for (d = 0; d < g.length; d++) window.localStorage.removeItem(g[d]);
        (k = e) && V(a, k);
      } else if (d.key && 0 === d.key.indexOf(c) && d.newValue) {
        try {
          g = K.parse(d.newValue);
        } catch (l) {
          return;
        }
        g &&
          g.cachedValue &&
          ((k = b.ba(d.key)),
          (k = {
            type: "authResult",
            clientId: k.clientId,
            id: k.id,
            authResult: g.cachedValue,
          }),
          V(a, k));
      }
    };
  },
  De = function (a, b) {
    this.h = a;
    this.V = b;
    this.xb = new re();
    this.Pb = new te();
    this.mb = new ue();
    this.Eb = new se();
  },
  Ee = function (a, b, c, d, e) {
    a.xb.C(
      { origin: a.h, clientId: b },
      { user: c.L, session: c.L ? c.X : void 0 },
      d,
      e
    );
  },
  Fe = function (a, b, c) {
    a.xb.B({ origin: a.h, clientId: b }, Q(), c);
  },
  Ge = function (a, b, c, d, e, g, f) {
    a.mb.B(
      {
        loginHint: b,
        origin: a.h,
        clientId: c,
        responseType: d,
        scope: e,
        id: g,
      },
      Q(),
      f
    );
  },
  He = function (a, b, c, d, e, g, f) {
    a.mb.C({ origin: a.h, clientId: c, responseType: d, id: g }, e, b, f);
  },
  Ie = function (a, b, c) {
    var d = a.mb;
    a = { origin: a.h, clientId: b };
    S(d).removeItem(d.l(a), c);
  },
  Je = function (a, b, c, d, e, g) {
    if (!a.F(b, c, e))
      throw (
        "Permission denied for '" +
        a.h +
        "' to read session selector for domain '" +
        b +
        "'."
      );
    a.Pb.B(
      { domain: b, crossSubDomains: c, policy: e, id: d },
      void 0,
      function (f) {
        g && g(f);
      }
    );
  },
  Ke = function (a, b, c, d, e, g, f) {
    if (!a.F(b, c, g))
      throw (
        "Permission denied for '" +
        a.h +
        "' to write session selector for domain '" +
        b +
        "'."
      );
    a.Pb.C({ domain: b, crossSubDomains: c, policy: g, id: e }, d, void 0, f);
  };
De.prototype.F = function (a, b, c) {
  return M.F(this.h, a, b, c);
};
var Le = function (a, b, c, d) {
    a.Eb.B({ origin: a.h, clientId: b, scope: c }, Q(), d);
  },
  Me = function (a, b, c, d, e) {
    a.Eb.C({ origin: a.h, clientId: c }, d, b, e);
  },
  Ne = function (a, b, c) {
    this.Y = a;
    this.g = b;
    this.j = c;
  },
  Oe = function (a, b, c) {
    a.L
      ? c && void 0 !== c[a.L]
        ? ((c = c[a.L]),
          Xd(a.X, c) ||
            ((a.X = c),
            Ee(a.j, a.Y, a, b, function () {
              Ae(a.g, a.Y, a.L, a.X);
            })))
        : a.X &&
          ((a.X = void 0),
          Ee(a.j, a.Y, a, b, function () {
            Ae(a.g, a.Y, a.L, void 0);
          }))
      : b && Ae(a.g, a.Y, a.L, void 0);
  },
  Qe = function (a, b, c, d) {
    this.V = a;
    this.g = b;
    this.K = c;
    this.j = d;
    this.na = void 0;
    this.D = {};
    this.ib = [];
    var e = this;
    this.V.addListener(function (g) {
      Pe(e, g);
    });
  },
  Re = function (a) {
    var b = [],
      c;
    for (c in a.D) {
      var d = a.D[c].L;
      d && b.push(d);
    }
    return b;
  },
  Pe = function (a, b) {
    if (b.newHash)
      fe(a.K, Re(a), function (d) {
        for (var e in a.D) Oe(a.D[e], b.newHash, d && d.activeHints);
      });
    else for (var c in a.D) Oe(a.D[c], b.newHash, void 0);
  },
  Se = function (a, b, c, d, e) {
    var g = a.D[b];
    g || ((g = new Ne(b, a.g, a.j)), (a.D[b] = g));
    a = g;
    b = c.login_hint;
    c = c.session_state;
    a.L != b
      ? ((a.L = b), (a.X = b ? c : void 0), Ee(a.j, a.Y, a, d, e))
      : e && e();
  },
  Te = function (a, b, c) {
    var d = a.D[b];
    d
      ? c(!0)
      : Fe(a.j, b, function (e) {
          e
            ? ((d = new Ne(b, a.g, a.j)),
              (a.D[b] = d),
              (d.L = e.user),
              (d.X = e.session),
              c(!0))
            : ee(a.K, b, function (g) {
                g && g.valid
                  ? ((g = new Ne(b, a.g, a.j)),
                    (a.D[b] = g),
                    Ee(a.j, b, g, Q(), function () {
                      c(!0);
                    }))
                  : c(!1);
              });
        });
  },
  Ue = function (a, b) {
    Fd() || Hd() ? a.ib.push(b) : Bd(Ed() ? document : window, "storage", b);
  },
  X = function (a, b, c) {
    this.h = a;
    this.hc = c;
    this.g = new ve(a, b);
    this.V = new Yd(O.Ub);
    this.K = new be(a);
    this.j = new De(a, this.V);
    this.R = new Qe(this.V, this.g, this.K, this.j);
  };
m = X.prototype;
m.start = function () {
  var a = this,
    b = function () {
      a.g.Qc.apply(a.g, arguments);
    },
    c = function () {
      V(a.g, { type: "idpReady" });
      G("Initialize IDP IFrame successfully.");
    },
    d = function (e) {
      var g = window;
      if (g.removeEventListener) g.removeEventListener("message", b, !1);
      else if (g.detachEvent) g.detachEvent("onmessage", b);
      else throw "Remove event handler for message failed.";
      Zd(a.V);
      V(a.g, { type: "idpError", error: e.message });
    };
  try {
    ze(this.g, this.createPolicy()),
      Bd(window, "message", b),
      Ue(this.R, Be(this.g)),
      Ue(this.R, Ce(this.g)),
      ae(this.V),
      M.Dc(c, d, this.hc);
  } catch (e) {
    d(e);
  }
};
m.Lc = function (a) {
  var b = this;
  Te(this.R, (a.params || {}).clientId, function (c) {
    U(b.g, a.id, c);
  });
};
m.uc = function (a) {
  var b = a.params || {},
    c = this,
    d = function (r) {
      U(c.g, a.id, r);
    },
    e = b.clientId,
    g = b.loginHint,
    f = b.request,
    h = b.sessionSelector;
  f.client_id = e;
  f.login_hint = g;
  f.ss_domain = h.domain;
  var k = Q();
  if (k) {
    var l = !!f.enable_serial_consent,
      p = function (r) {
        r && !r.error && r.login_hint
          ? ((r.first_issued_at = new Date().getTime()),
            (r.expires_at = r.first_issued_at + 1e3 * r.expires_in),
            r.session_state || (r.session_state = {}),
            l || r.scope || (r.scope = f.scope),
            b.skipCache
              ? Se(c.R, e, r, k, function () {
                  d(r);
                })
              : He(c.j, k, e, f.response_type, r, b.id, function () {
                  Se(c.R, e, r, k, function () {
                    d(r);
                  });
                }))
          : ((r = r || {}), d(r));
      };
    b.forceRefresh
      ? he(this.K, f, p)
      : Ge(this.j, g, e, f.response_type, f.scope, b.id, function (r) {
          r && 18e4 < r.expires_at - new Date().getTime()
            ? Se(c.R, e, r, k, function () {
                d(r);
              })
            : he(c.K, f, p);
        });
  } else U(c.g, a.id, { error: "user_logged_out" });
};
m.wc = function (a) {
  var b = this,
    c = function (f) {
      U(b.g, a.id, f);
    };
  if (Q()) {
    var d = a.params || {},
      e = d.request,
      g = d.sessionSelector;
    e.client_id = d.clientId;
    e.login_hint = d.loginHint;
    e.ss_domain = g.domain;
    ie(this.K, e, c);
  } else c({ error: "user_logged_out" });
};
m.Wc = function (a) {
  var b = a.params || {},
    c = b.clientId,
    d = this;
  ke(this.K, b.token, function (e) {
    Ie(d.j, c, function () {
      U(d.g, a.id, e);
    });
  });
};
m.hd = function (a) {
  if (Fd() || Hd()) {
    var b = a.params || {},
      c = new qe().l({ clientId: b.clientId, id: b.id, origin: b.origin });
    b = this.R;
    if (Fd() || Hd()) {
      b.na && b.na.stop();
      b.na = new Ud(c);
      for (c = 0; c < b.ib.length; c++) b.na.addListener(b.ib[c]);
      b.na.start();
    }
  }
  U(this.g, a.id, !0);
};
m.tc = function (a) {
  var b = this,
    c = a.params || {};
  Je(this.j, c.domain, c.crossSubDomains, c.id, c.policy, function (d) {
    U(b.g, a.id, d);
  });
};
m.bd = function (a) {
  var b = a.params || {},
    c = b.hint,
    d = !!b.disabled,
    e = b.domain,
    g = b.crossSubDomains,
    f = b.id,
    h = b.policy,
    k = this;
  if (c || d) var l = { hint: c, disabled: d };
  Ke(this.j, e, g, l, f, h, function () {
    V(k.g, {
      type: "sessionSelectorChanged",
      newValue: l,
      domain: e,
      crossSubDomains: g,
      id: f,
      policy: h,
    });
    U(k.g, a.id, !0);
  });
};
m.Ic = function (a) {
  var b = a.params || {},
    c = this,
    d = function (l) {
      U(c.g, a.id, l);
    },
    e = b.clientId,
    g = b.request,
    f = b.sessionSelector;
  g.client_id = e;
  g.response_type = "id_token";
  g.ss_domain = f.domain;
  var h = Q();
  if (h) {
    var k = function (l) {
      l && !l.error
        ? ((l.first_issued_at = new Date().getTime()),
          (l.expires_at = l.first_issued_at + 1e3 * l.expires_in),
          (l.scope = g.scope),
          Me(c.j, h, e, l, function () {
            d(l);
          }))
        : ((l = l || { error: "No response returned from Server." }), d(l));
    };
    b.forceRefresh
      ? je(this.K, g, k)
      : Le(this.j, e, g.scope, function (l) {
          l ? d(l) : je(c.K, g, k);
        });
  } else d({ scope: g.scope, sessions: [] });
};
m.fc = function (a) {
  if (document.hasStorageAccess && yd(document.hasStorageAccess)) {
    var b = this;
    document.hasStorageAccess().then(
      function (c) {
        U(b.g, a.id, { hasAccess: c });
      },
      function (c) {
        G("CheckStorageAccess failed: " + c);
        U(b.g, a.id, { hasAccess: !1 });
      }
    );
  } else U(this.g, a.id, { hasAccess: !0 });
};
m.Mc = function (a) {
  a = (a && a.params) || {};
  return a.clientId && !P(a.clientId);
};
m.Bc = function (a) {
  var b = (a && a.params) || {};
  a = b.loginHint;
  var c = !P(b.id),
    d = b.clientId && !P(b.clientId),
    e = !!b.request,
    g = e && b.request.scope;
  (b =
    (e = e && b.request.response_type) &&
    0 <= b.request.response_type.indexOf("code")) &&
    G("Bad request: 'code' response_type is not supported.");
  return a && c && d && g && e && !b;
};
m.xc = function (a) {
  a = (a && a.params) || {};
  var b = !P(a.id),
    c = a.clientId && !P(a.clientId),
    d = !!a.request && a.request.scope;
  return a.loginHint && b && c && d;
};
m.zc = function (a) {
  a = (a && a.params) || {};
  var b = a.domain && !P(a.domain),
    c = !P(a.policy);
  return (
    !P(a.id) && b && c && this.j.F(a.domain, !!a.crossSubDomains, a.policy)
  );
};
m.cd = function (a) {
  a = (a && a.params) || {};
  var b = a.domain && !P(a.domain),
    c = !P(a.policy);
  return (
    !P(a.id) &&
    b &&
    c &&
    this.j.F(a.domain, !!a.crossSubDomains, a.policy) &&
    O.bc(a)
  );
};
m.Jc = function (a) {
  a = (a && a.params) || {};
  var b = a.clientId && !P(a.clientId),
    c = !!a.request && a.request.scope;
  return !P(a.id) && b && c;
};
m.Xc = function (a) {
  a = (a && a.params) || {};
  var b = !!a.token,
    c = a.clientId && !P(a.clientId);
  return !P(a.id) && b && c;
};
m.jd = function (a) {
  a = (a && a.params) || {};
  var b = a.origin && !P(a.origin),
    c = a.id && !P(a.id);
  return a.clientId && !P(a.clientId) && b && c;
};
m.$c = function (a) {
  var b;
  if ((b = a.clientId)) (a = a.clientId), (b = !(!a || !this.R.D[a]));
  return b;
};
m.dc = function (a) {
  var b;
  if ((b = a.clientId)) (b = a.clientId), (b = !(!b || !this.R.D[b]));
  return b && a.id && a.authResult;
};
m.mc = function (a) {
  return !!a.hide || !!a.options;
};
m.Zc = function (a) {
  return a.domain && this.j.F(a.domain, a.crossSubDomains, a.policy);
};
var Y = function (a, b) {
  return function () {
    return b.apply(a, arguments);
  };
};
X.prototype.createPolicy = function () {
  var a = { A: [], M: [], $: [] };
  Ve(this, a);
  return a;
};
var Ve = function (a, b) {
  b.A.push({ method: "monitorClient", i: Y(a, a.Lc), P: !1, s: Y(a, a.Mc) });
  b.A.push({ method: "getTokenResponse", i: Y(a, a.uc), P: !0, s: Y(a, a.Bc) });
  b.A.push({ method: "getOnlineCode", i: Y(a, a.wc), P: !0, s: Y(a, a.xc) });
  b.A.push({
    method: "getSessionSelector",
    i: Y(a, a.tc),
    P: !0,
    s: Y(a, a.zc),
  });
  b.A.push({
    method: "setSessionSelector",
    i: Y(a, a.bd),
    P: !1,
    s: Y(a, a.cd),
  });
  b.A.push({ method: "listIdpSessions", i: Y(a, a.Ic), P: !0, s: Y(a, a.Jc) });
  b.A.push({ method: "revoke", i: Y(a, a.Wc), s: Y(a, a.Xc) });
  b.A.push({ method: "startPolling", i: Y(a, a.hd), s: Y(a, a.jd) });
  b.M.push({ type: "idpReady" });
  b.M.push({ type: "idpError" });
  b.M.push({ type: "sessionStateChanged", filter: Y(a, a.$c) });
  b.M.push({ type: "sessionSelectorChanged", filter: Y(a, a.Zc) });
  b.M.push({ type: "authResult", filter: Y(a, a.dc) });
  b.M.push({ type: "displayIFrame", filter: Y(a, a.mc) });
  b.A.push({ method: "checkStorageAccess", i: Y(a, a.fc), P: !0 });
};
var We = "client_id origin ss_domain scope privileged authuser".split(" ");
O.va = "response_type login_hint client_id origin scope ss_domain authuser hd include_granted_scopes nonce spec_compliant".split(
  " "
);
var Ye = function (a, b, c) {
  b.origin = a.h;
  b.privileged = !0;
  b = ge(b, We);
  de(O.La, b, Xe(a.h), function (d) {
    c(d);
  });
};
function Xe(a) {
  var b = {},
    c = O.yc();
  if (c) {
    if (!c) throw Error("Session cookie value cannot be empty.");
    c = new vb(new wb(), ya(c));
    a = ya(a);
    c.reset();
    c.update(a);
    a = c.digest();
    var d;
    c = oa(a);
    w(
      "array" == c || ("object" == c && "number" == typeof a.length),
      "encodeByteArray takes an array as a parameter"
    );
    void 0 === d && (d = 0);
    if (!tb) {
      tb = {};
      c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
        ""
      );
      for (var e = ["+/=", "+/", "-_=", "-_.", "-_"], g = 0; 5 > g; g++) {
        var f = c.concat(e[g].split(""));
        sb[g] = f;
        for (var h = 0; h < f.length; h++) {
          var k = f[h],
            l = tb[k];
          void 0 === l ? (tb[k] = h) : w(l === h);
        }
      }
    }
    d = sb[d];
    c = [];
    for (e = 0; e < a.length; e += 3) {
      l = a[e];
      var p = (g = e + 1 < a.length) ? a[e + 1] : 0;
      k = (f = e + 2 < a.length) ? a[e + 2] : 0;
      h = l >> 2;
      l = ((l & 3) << 4) | (p >> 4);
      p = ((p & 15) << 2) | (k >> 6);
      k &= 63;
      f || ((k = 64), g || (p = 64));
      c.push(d[h], d[l], d[p] || "", d[k] || "");
    }
    b["X-Csrf-Token"] = c.join("");
  }
  return b;
}
var Ze = function () {};
J(Ze, T);
Ze.prototype.l = function (a) {
  a = void 0 === a ? {} : a;
  return [
    "gsi_gs",
    void 0 === a.origin ? null : a.origin,
    void 0 === a.clientId ? null : a.clientId,
  ].join(O.m);
};
Ze.prototype.B = function (a, b, c) {
  var d = this;
  c = void 0 === c ? function () {} : c;
  T.prototype.B.call(this, a, b, function (e) {
    e
      ? !e.expires_at || e.expires_at <= new Date().getTime()
        ? S(d).removeItem(d.l(a), function () {
            return c(null);
          })
        : ((e.expires_at = void 0), c(e))
      : c(null);
  });
};
Ze.prototype.C = function (a, b, c, d) {
  b && (b.expires_at = new Date().getTime() + 864e5);
  T.prototype.C.call(this, a, b, c, d);
};
X.prototype.rc = function (a) {
  var b = this;
  a = void 0 === a ? {} : a;
  var c = a.id,
    d = void 0 === a.params ? {} : a.params,
    e = function (p) {
      p && p.sessions
        ? ((p = $e(g, p.sessions)), U(b.g, c, p))
        : U(b.g, c, null);
    },
    g = d.loginHint;
  delete d.loginHint;
  var f = Q();
  if (f) {
    a = d.clientId;
    var h = d.request;
    d = d.sessionSelector;
    h.client_id = a;
    h.ss_domain = d.domain;
    var k = new Ze(),
      l = { clientId: a, origin: this.h };
    k.B(l, f, function (p) {
      p
        ? e(p)
        : Ye(b.K, h, function (r) {
            !r || r.error
              ? e(null)
              : k.C(l, r, f, function () {
                  e(r);
                });
          });
    });
  } else e(null);
};
function $e(a, b) {
  if (!b.length) return null;
  var c = a.toLowerCase();
  b = n(b);
  for (var d = b.next(); !d.done; d = b.next())
    if (((d = d.value), d.login_hint)) {
      if (a === d.obfuscatedGaiaId) return d.login_hint;
      if (d.emails && d.emails.length)
        for (var e = n(d.emails), g = e.next(); !g.done; g = e.next())
          if (c === g.value.toLowerCase()) return d.login_hint;
    }
  return null;
}
X.prototype.fd = function (a) {
  af(this, a, !1);
};
X.prototype.gd = function (a) {
  af(this, a, !0);
};
var af = function (a, b, c) {
  document.requestStorageAccess && yd(document.requestStorageAccess)
    ? document.hasStorageAccess().then(
        function (d) {
          if (d) U(a.g, b.id, { hasAccess: !0 });
          else {
            d = new Qc({ origin: a.h });
            var e = document.getElementById("container");
            (c ? d.Tc : d.Sc).call(
              d,
              e,
              function () {
                ye(a.g);
                U(a.g, b.id, { hasAccess: !0 });
              },
              function () {
                ye(a.g);
                U(a.g, b.id, { hasAccess: !1 });
              }
            );
            xe(a.g);
          }
        },
        function (d) {
          G("StorageAccess check failed: " + d);
          U(a.g, b.id, { hasAccess: !1 });
        }
      )
    : U(a.g, b.id, { hasAccess: !0 });
};
X.prototype.sc = function (a) {
  a = void 0 === a ? {} : a;
  a = void 0 === a.params ? {} : a.params;
  var b = !!a.clientId && !P(a.clientId),
    c = !!a.request,
    d = !!a.sessionSelector;
  return !!a.loginHint && b && c && d;
};
X.prototype.createPolicy = function () {
  var a = { A: [], $: [], M: [] };
  Ve(this, a);
  a.A.push({
    method: "gsi:fetchLoginHint",
    i: Y(this, this.rc),
    P: !0,
    s: Y(this, this.sc),
  });
  a.$.push({ aa: "itpNewGrant", i: Y(this, this.fd) });
  a.$.push({ aa: "itpRegrant", i: Y(this, this.gd) });
  return a;
};
O.ub = "/o/oauth2/iframerpc?action=sessionState";
O.ob = "/o/oauth2/iframerpc?action=checkOrigin";
O.sb = "/o/oauth2/iframerpc?action=issueToken";
O.rb = "/o/oauth2/iframerpc?action=issueOnlineCode";
O.La = "/o/oauth2/iframerpc?action=listSessions";
var bf = function () {
    var a = Ad("origin");
    if (!a) throw "Failed to get parent origin from URL hash!";
    var b = Ad("rpcToken");
    if (!b) throw "Failed to get rpcToken from URL hash!";
    var c = !!Ad("clearCache"),
      d = Ad("debug");
    xd = "0" != d && !!d;
    new X(a, b, c).start();
  },
  cf = ["lso", "startIdpIFrame"],
  Z = v;
cf[0] in Z ||
  "undefined" == typeof Z.execScript ||
  Z.execScript("var " + cf[0]);
for (var df; cf.length && (df = cf.shift()); )
  cf.length || void 0 === bf
    ? (Z = Z[df] && Z[df] !== Object.prototype[df] ? Z[df] : (Z[df] = {}))
    : (Z[df] = bf);
