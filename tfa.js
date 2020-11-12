/*! 20201108-15-RELEASE 2020-11-08 */

!(function (e) {
  var t = "TFASC";
  t.indexOf("{jsScope}") > -1 && (t = "TRC"), e[t] || (e[t] = {});
})(window),
  (function (e, t) {
    e.TRC = e.TRC || {};
    var i = function () {
        return !0;
      },
      n = function (i, n, r, a) {
        var o =
          i +
          "/" +
          encodeURIComponent(r || e.TRC.publisherId) +
          "/log/3" +
          "/" +
          n;
        return a && (o += "?" + t.TRCLogger.formatParams(a)), o;
      },
      r = function (t, n) {
        var r,
          a = new (e.XDomainRequest || e.XMLHttpRequest)();
        return (
          a.open(t, n),
          (a.onload = i),
          (a.onerror = i),
          (a.ontimeout = i),
          (a.onprogress = i),
          (a.withCredentials = !0),
          a
        );
      };
    e.TRC.TRCLogger = t.TRCLogger = {
      post: function (e, i, a, o, s) {
        var c = n(e, i, o, s),
          u = r("POST", c);
        u.setRequestHeader &&
          u.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
          u.send(t.TRCLogger.formatParams(a));
      },
      get: function (e, t, i, a) {
        var o = n(e, t, a, i),
          s;
        r("GET", o).send();
      },
      formatParams: function (e) {
        var t = [];
        for (var i in e)
          e.hasOwnProperty(i) &&
            t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
        return t.join("&");
      },
    };
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t) {
    if (t && !t.MessageDelayer) {
      var i = function (i) {
          return function (n) {
            var r = n.detail,
              a = n.type,
              o = "" + r[this.groupingKeyName],
              s = this.delayedEventsMap[o],
              c = t.eventUtils.getDateNow();
            if (s) {
              this.timeoutHandles[o] &&
                (clearTimeout(this.timeoutHandles[o]),
                (this.timeoutHandles[o] = null));
              var u = [].concat(s);
              this.delayedEventsMap[o] = [];
              for (var l = 0; l < u.length; l++) {
                var f = u[l],
                  d;
                i(f.config).apply(e, [
                  f.groupingKey,
                  f.message,
                  r,
                  a,
                  c - f.queueTime,
                ]);
              }
            }
          };
        },
        n = i(function (e) {
          return e.successCallback;
        }),
        r = i(function (e) {
          return e.failCallback;
        }),
        a = function (e, t) {
          var i = "" + e;
          this.timeoutHandles[i] ||
            (this.timeoutHandles[i] = setTimeout(
              function () {
                this.timeoutHandles[i] = null;
                var t = {};
                (t[this.groupingKeyName] = e),
                  r.call(this, { detail: t, type: "dt" });
              }.bind(this),
              t
            ));
        };
      (t.MessageDelayer = function (e, i, a) {
        if (
          ((this.groupingKeyName = e),
          (this.delayedEventsMap = {}),
          (this.timeoutHandles = {}),
          t.eventUtils.safeAddEventListener(i, n.bind(this)),
          a)
        )
          for (var o = 0; o < a.length; o++)
            t.eventUtils.safeAddEventListener(a[o], r.bind(this));
      }),
        (t.MessageDelayer.prototype = {
          constructor: t.MessageDelayer,
          delayMessage: function (e, i, n) {
            var r = "" + e;
            (n.failCallback = n.failCallback || function () {}),
              this.delayedEventsMap[r] || (this.delayedEventsMap[r] = []),
              this.delayedEventsMap[r].push({
                groupingKey: e,
                message: i,
                config: n,
                queueTime: t.eventUtils.getDateNow(),
              }),
              n.timeoutInMillis && a.call(this, e, n.timeoutInMillis);
          },
        });
    }
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t, i) {
    !(function () {
      if ("function" == typeof e.CustomEvent) return !1;
      function i(e, i) {
        i = i || { bubbles: !1, cancelable: !1, detail: void 0 };
        var n = t.createEvent("CustomEvent");
        return n.initCustomEvent(e, i.bubbles, i.cancelable, i.detail), n;
      }
      (i.prototype = e.Event.prototype), (e.CustomEvent = i);
    })(),
      (i.eventUtils = i.eventUtils || {}),
      (i.eventUtils.dispatchEvent =
        i.eventUtils.dispatchEvent ||
        function (e, t) {
          "function" == typeof CustomEvent &&
            document.dispatchEvent(new CustomEvent(e, { detail: t || {} }));
        }),
      (i.eventUtils.safeAddEventListener =
        i.eventUtils.safeAddEventListener ||
        function (e, t) {
          document.addEventListener(e, function (e) {
            try {
              t.call(this, e);
            } catch (e) {}
          });
        }),
      (i.eventUtils.getDateNow =
        i.eventUtils.getDateNow ||
        function () {
          var e, t;
          if (Date.now) {
            if ("number" == typeof (e = Date.now())) return e;
            if ("number" == typeof (t = Number(e))) return t;
          }
          return new Date().getTime();
        }),
      (i.sharedEvents = i.sharedEvents || {
        PAGE_VIEW: "TRK_TFA_PAGE_VIEW",
        REQUEST_ID_CREATED: "TRK_TFA_REQUEST_ID_CREATED",
        REQUEST_ID_CREATION_TIMEOUT: "TRK_TFA_REQUEST_ID_CREATION_TIMEOUT",
        REQUEST_ID_CREATION_ERROR: "TRK_TFA_REQUEST_ID_CREATION_ERROR",
        REQUEST_ID_CREATION_JS_ERROR: "TRK_TFA_REQUEST_ID_CREATION_JS_ERROR",
        INVALID_TRK_RESPONSE: "TRK_TFA_INVALID_TRK_RESPONSE",
      }),
      (i.publisherIdType = i.publisherIdType || { NAME: "n", ID: "i" }),
      (i.pageViewInitiator = i.pageViewInitiator || { TRK: "trk", TFA: "tfa" });
  })(
    window,
    document,
    window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]
  ),
  (function (e, t) {
    (e._tfa = e._tfa || []),
      e._tfa.config ||
        ((e._tfa.TfaConfig = function () {
          this.configMap = {};
        }),
        (e._tfa.TfaConfig.prototype = {
          safeGet: function (e, t, i) {
            var n, r, a;
            if (i && this.configMap[i]) n = "" + i;
            else {
              if (!this.firstPublisherId) return t;
              n = this.firstPublisherId;
            }
            try {
              return void 0 === (a = (r = this.configMap[n])[e]) ? t : a;
            } catch (e) {
              return t;
            }
          },
          hasValidConfig: function () {
            return !!this.firstPublisherId;
          },
          addConfig: function (e, t) {
            "string" == typeof t ||
              t instanceof String ||
              (this.firstPublisherId || (this.firstPublisherId = e),
              (this.configMap["" + e] = t));
          },
        }),
        (e._tfa.config = new e._tfa.TfaConfig()),
        (e._taboola = e._taboola || [])),
      e._tfa.config.addConfig(1171685, {
        "tfa-eid:send-eid-to-trc": true,
        "tfa-uid:send-uid-to-gamma": true,
        "tfa:event-host-map": { pre_d_eng_tb: "trc-events.taboola.com" },
        "tfa:trk:is-unified-page-view": true,
        "tfa:add-item-url:event-list": ["page_view"],
        "tfa:trk:should-send-media-data": false,
        "tfa:trk:tracking-request-timeout": 2000,
      });
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t, i) {
    "use strict";
    var n = i.jsScope,
      r = {
        map: function (e, t) {
          if ("function" == typeof Array.prototype.map) return t.map(e);
          for (var i = [], n = 0; n < t.length; n++) i.push(e(t[n], n, t));
          return i;
        },
        forEach: function (e, t) {
          if ("function" == typeof Array.prototype.forEach) return t.forEach(e);
          for (var i = 0; i < t.length; i++) e(t[i], i, t);
        },
        filter: function (e, t) {
          if ("function" == typeof Array.prototype.filter) return t.filter(e);
          for (var i = [], n = 0; n < t.length; n++)
            e(t[n], n, t) && i.push(t[n]);
          return i;
        },
        objKeys:
          Object.keys ||
          ((a = Object.prototype.hasOwnProperty),
          (o = !{ toString: null }.propertyIsEnumerable("toString")),
          (s = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ]),
          (c = s.length),
          function (e) {
            if ("function" != typeof e && ("object" != typeof e || null === e))
              throw new TypeError("Object.keys called on non-object");
            var t = [],
              i,
              n;
            for (i in e) a.call(e, i) && t.push(i);
            if (o) for (n = 0; n < c; n++) a.call(e, s[n]) && t.push(s[n]);
            return t;
          }),
      },
      a,
      o,
      s,
      c;
    (i.networkMap && "string" != typeof i.networkMap) || (i.networkMap = {});
    var u = null,
      l = null,
      f = null,
      d = null,
      h = {},
      g = 0,
      p = !1,
      m = "requestTimeoutHandle",
      v = "requestId",
      S = "requestStatus",
      I = "trkRequestDone",
      E = 5e3,
      T = "init",
      w = "pr",
      b = "pud",
      y = "tto",
      R = "s",
      _ = "f",
      C = "u",
      D = [y, _],
      U = [T, w, b],
      O =
        (((q = {})[n.publisherIdType.NAME] = "name"),
        (q[n.publisherIdType.ID] = "id"),
        q),
      k = (function () {
        for (
          var e = {}, t = r.objKeys(i.networkMap), a = 0;
          a < t.length;
          ++a
        ) {
          var o;
          e["" + i.networkMap[t[a]][O[n.publisherIdType.ID]]] = !0;
        }
        return e;
      })(),
      P = "gk",
      N = "dk",
      M = "TRK_RELEASE_DELAYED_REQUESTS_EVENT",
      A = (function () {
        var e = {};
        return (e[P] = N), e;
      })(),
      V = new n.MessageDelayer(P, M),
      x = function (e, t) {
        j = j.loadTrc(
          t.publisherId,
          t.publisherIdType,
          t.config,
          t.requestData
        );
      },
      L = {
        UNINITIALIZED: {
          loadTrc: function (e, t, i, n) {
            var r = _e();
            return te(e, t, i, n), r ? L.USER_ID_SET : L.PENDING_USER_ID_SET;
          },
        },
        PENDING_USER_ID_SET: {
          loadTrc: function (e, t, i, n) {
            return (
              (n[S] = b),
              V.delayMessage(
                N,
                {
                  publisherId: e,
                  publisherIdType: t,
                  config: i,
                  requestData: n,
                },
                { successCallback: x }
              ),
              L.PENDING_USER_ID_SET
            );
          },
        },
        USER_ID_SET: {
          loadTrc: function (e, t, i, n) {
            return te(e, t, i, n), L.USER_ID_SET;
          },
        },
      },
      j = L.UNINITIALIZED,
      $ =
        (e.taboola_view_id || (e.taboola_view_id = new Date().getTime()),
        e.taboola_view_id),
      K,
      q,
      F = function () {
        return !0 === i.tfaContext;
      },
      G = function () {
        try {
          localStorage.setItem("taboolaStorageDetection", "detect"),
            localStorage.removeItem("taboolaStorageDetection");
        } catch (e) {
          return !1;
        }
        return !0;
      },
      H = function (e, t, i) {
        var n = e.split(t);
        return n
          .slice(0, i - 1)
          .concat(n.length >= i ? n.slice(i - 1).join(t) : []);
      },
      B = function (e) {
        if (!e) throw new Error("Invalid URL!");
        this.href = e;
        var t = H(e, "#", 2);
        return (
          (this.hash = t.length > 1 ? "#" + t.pop() : ""),
          (e = t[0]),
          (t = H(e, "?", 2)),
          (this.search = t.length > 1 ? "?" + t.pop() : ""),
          (e = t[0]),
          (t = H(e, "://", 2)),
          (this.protocol = t.length > 1 ? t.shift() + ":" : ""),
          (e = t[0]),
          (t = H(e, "/", 2)),
          (this.pathname = t.length > 1 ? "/" + t.pop() : "/"),
          (e = t[0]),
          (t = H(e, "@", 2)),
          (this.auth = t.length > 1 ? t.shift() : ""),
          (e = t[0]),
          (t = H(e, ":", 2)),
          (this.port = t.length > 1 ? parseInt(t.pop()) : 0),
          (this.host = t[0]),
          this
        );
      },
      z = { "http:": 1, "https:": 1 };
    (B.prototype.toString = function (e) {
      return (
        (this.host
          ? this.protocol +
            "//" +
            (this.auth ? this.auth + "@" : "") +
            this.host +
            (this.port ? ":" + this.port : "")
          : "") +
        this.pathname +
        this.search +
        (e ? "" : this.hash || "")
      );
    }),
      (B.prototype.switchProtocol = function (e, t) {
        var i = this instanceof B ? this : new B(this),
          n;
        return (
          z[e] && ((t && "https:" === i.protocol) || (i.protocol = e)),
          (n = i.toString(!1)).length > 1 ? n : ""
        );
      }),
      (B.prototype.getParameter = function (e) {
        for (
          var t,
            i = (this instanceof B ? this : new B(this)).search
              .substr(1)
              .split(/&/),
            n = 0;
          n < i.length;
          n++
        ) {
          var r = i[n].split(new RegExp("="), 2);
          if (unescape(r[0]) === e) return unescape(r[1]);
        }
        return null;
      });
    var W = {
        states: {
          ABP_DETECTION_DISABLED: -2,
          ABP_NOT_DETECTED: 0,
          ABP_DETECTED: 1,
        },
        createBlockDetectionDiv: function (e) {
          var i = t.createElement("div");
          return (
            (i.className = e),
            (i.style.fontSize = "initial"),
            i.appendChild(t.createTextNode(".")),
            t.documentElement.appendChild(i),
            i
          );
        },
        isBlockDetectedOnDiv: function (e) {
          return !e.offsetHeight;
        },
        isBlockDetectedOnClassNames: function (e) {
          var i,
            n = e.length,
            r;
          for (i = 0; i < n; i++)
            if (e[i]) {
              r = this.createBlockDetectionDiv(e[i]);
              try {
                if (this.isBlockDetectedOnDiv(r)) return !0;
              } catch (e) {
              } finally {
                t.documentElement.removeChild(r);
              }
            }
          return !1;
        },
        getBlockedState: function (e) {
          return me() || ve()
            ? this.states.ABP_NOT_DETECTED
            : e && this.isBlockDetectedOnClassNames(e)
            ? this.states.ABP_DETECTED
            : this.states.ABP_NOT_DETECTED;
        },
      },
      Q = function (e, t) {
        for (var i = r.objKeys(e), n = 0; n < i.length; n++) {
          var a = i[n];
          t.push([a, e[a]]);
        }
      },
      J = function (e) {
        (n[e.callbackName] = function () {}),
          e.newScriptElement.parentNode.removeChild(e.newScriptElement),
          (e.newScriptElement = null),
          delete e.newScriptElement;
      },
      Y = function (t) {
        J(t),
          (t[S] = y),
          t.isMediaRequest || (e.TRC.trkRequestStatus = !1),
          j === L.PENDING_USER_ID_SET && (j = L.UNINITIALIZED),
          t[I]
            ? n.eventUtils.dispatchEvent(n.sharedEvents.INVALID_TRK_RESPONSE, {
                publisherId: t.publisherId,
              })
            : n.eventUtils.dispatchEvent(
                n.sharedEvents.REQUEST_ID_CREATION_TIMEOUT,
                { publisherId: t.publisherId }
              ),
          ae();
      },
      Z = function (e, i, n, r) {
        var a = t.getElementsByTagName("script")[0],
          o = t.createElement("script");
        return (
          (o.type = "text/javascript"),
          (o.src = e),
          (o.charset = "UTF-8"),
          n
            ? o.setAttribute("defer", "defer")
            : r && o.setAttribute("async", "async"),
          "function" == typeof i &&
            (o.addEventListener
              ? (o.addEventListener("load", i, !1),
                o.addEventListener("error", i, !1))
              : (o.onreadystatechange = function () {
                  ("loaded" !== o.readyState && "complete" !== o.readyState) ||
                    i.apply(o);
                })),
          a.parentNode.insertBefore(o, a),
          o
        );
      },
      X = function (e, t, i) {
        var n = {
          publisherId: e,
          isMediaRequest: i.isMediaRequest,
          isUnifiedPageView: i.isUnifiedPageView,
          publisherIdType: t,
          callbackName: "trkCallback" + (0 === g ? "" : g),
        };
        return (n[S] = T), h[e] || (h[e] = []), h[e].push(n), ++g, n;
      },
      ee = function (e) {
        return function () {
          Y(e);
        };
      },
      te = function (t, n, r, a) {
        var o =
            i.rboxTrcProtocol +
            "//trc.taboola.com/" +
            t +
            "/trc/3/json?" +
            "tim=" +
            new Date().getTime() +
            "&" +
            "data=" +
            encodeURIComponent(JSON.stringify(ne(a))) +
            "&" +
            "pubit=" +
            n,
          s = r.isMediaRequest
            ? e._tfa.config.safeGet("tfa:trk:tracking-request-timeout", E, t)
            : E;
        (a[S] = w),
          (a[m] = e.setTimeout(ee(a), s)),
          (a.newScriptElement = Z(o, function () {
            a[I] = !0;
          }));
      },
      ie = function (e) {
        return function (t) {
          oe(e, t);
        };
      },
      ne = function (e) {
        var t = "TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC";
        return (n[e.callbackName] = ie(e)), fe(e, t + "." + e.callbackName);
      },
      re = function (e) {
        var t = h[(e = "" + e)];
        return t && t.length > 0 ? t[t.length - 1] : null;
      },
      ae = function () {
        n.eventUtils.dispatchEvent(M, A);
      },
      oe = function (t, r) {
        if (
          (e.clearTimeout(t[m]),
          r &&
            r.trc &&
            (r.trc.ui
              ? (r.trc["DNT"] && "TRUE" === r.trc["DNT"].toUpperCase()
                  ? localStorage.removeItem("taboola global:user-id")
                  : localStorage.setItem("taboola global:user-id", r.trc["ui"]),
                (j = L.USER_ID_SET))
              : (j = L.UNINITIALIZED),
            r.trc.sd &&
              localStorage.setItem(
                t.publisherId + ":session-data",
                r.trc["sd"]
              ),
            r.trc["vl"] && r.trc["vl"].length))
        ) {
          var a = r.trc["vl"][0].ri;
          t.isMediaRequest || (e.TRC.events_ri = a),
            (t[v] = a),
            (t[S] = R),
            n.eventUtils.dispatchEvent(n.sharedEvents.REQUEST_ID_CREATED, {
              publisherId: t.publisherId,
              requestId: a,
            });
        }
        t[S] !== R &&
          ((t[S] = _),
          n.eventUtils.dispatchEvent(n.sharedEvents.REQUEST_ID_CREATION_ERROR, {
            publisherId: t.publisherId,
          })),
          t.isMediaRequest ||
            (e.TRC.trkRequestStatus = !(D.indexOf(t[S]) >= 0)),
          e.TRC.alertVVResponseLoaded &&
            e.TRC.alertVVResponseLoaded(i.tblVersion),
          J(t),
          ae();
      },
      se = (function () {
        var e,
          t = function () {
            try {
              return decodeURI(top.window.document.referrer);
            } catch (e) {}
            return null;
          },
          i = /https?:\/\/\w+\.taboola(?:syndication)?\.com/,
          n = function (e) {
            return i.test(e) ? e.split("?")[0] : e.substr(0, 400);
          },
          r,
          a = [
            function () {
              for (
                var e = document.head.getElementsByTagName("link"), t = 0;
                t < e.length;
                t++
              )
                if ("referrer" === e[t].rel) return e[t].href;
              return null;
            },
            function () {
              var e = t();
              return e ? n(e) : null;
            },
          ],
          o = function () {
            for (var e, t = 0; !e && t < a.length; t++) e = a[t].call(this);
            return e;
          };
        return (o.innerExtractReferrerFromTopMostReferrer = n), o;
      })(),
      ce = function () {
        var e = d;
        return e || (e = se()), e;
      },
      ue = function () {
        if (K) return K;
        var t = 400,
          i;
        return (
          (K = e.location.search).length > t &&
            ((i = K.substring(0, t - 1)),
            (K = i.substring(0, i.lastIndexOf("&")))),
          K
        );
      },
      le = function (t, i) {
        var n;
        return (
          t.isUnifiedPageView &&
            (i[
              (n = e._tfa.config.safeGet(
                "tfa:trk:unified-page-view-param-name",
                "supv",
                t.publisherId
              ))
            ] = !0),
          (i.mpv = !0),
          i
        );
      },
      fe = function (t, n) {
        var r = W.getBlockedState(["banner_ad", "sponsored_ad"]),
          a = {
            id: ~~(1e3 * Math.random()),
            ii: ge(t),
            it: ye(e._taboola),
            sd: Re(t.publisherId),
            ui: _e(),
            vi: $,
            cv: i.tblVersion,
            uiv: "default",
            u: Ce(),
            e: ce(),
            cb: n,
            qs: ue(),
            r: [
              {
                li: "rbox-tracking",
                s: 0,
                uim: "rbox-tracking:pub=" + i.bakedPublisherName + ":abp=" + r,
                uip: "rbox-tracking",
                orig_uip: "rbox-tracking",
              },
            ],
          };
        return t.isMediaRequest && (a = le(t, a)), a;
      },
      de = function (e) {
        for (var t = 0; t < e.length; ++t)
          for (var i = e[t], n = r.objKeys(i), a = 0; a < n.length; ++a) {
            var o = n[a],
              s = i[o];
            if ("unknown" !== s)
              switch (("auto" === s && (s = ""), o)) {
                case "video":
                  u = s;
                  break;
                case "url":
                  f = s;
                  break;
                case "article":
                case "category":
                case "home":
                case "search":
                case "photo":
                case "other":
                case "content_hub":
                  l = s;
                  break;
                case "ref_url":
                  d = s;
              }
          }
      },
      he = function (t) {
        if (t) {
          var i = n.trk.getPublisherRequestId(t);
          if (i) return i;
        }
        return e.TRC.events_ri;
      },
      ge = function (e) {
        var t = null;
        return (
          u || "" === u ? (t = u) : (l || "" === l) && (t = l),
          ("" === t || e.isMediaRequest) &&
            (t = Ie("item-id", i.normalizeItemId, i.prenormalizeIdRules)),
          t
        );
      },
      pe = function (e, t, i) {
        var n;
        if (!i) return t;
        r.forEach(function (e) {
          var i = t.search(e);
          i >= 0 && (t = t.substr(0, i));
        }, i["truncate-at"] || []);
        for (var a = new B(t), o = r.objKeys(i), s = 0; s < o.length; ++s) {
          var c = o[s];
          if (i[c])
            switch (c) {
              case "host":
                delete a.host;
                break;
              case "trailing-dirsep":
                for (; "/" === a.pathname.substr(a.pathname.length - 1); )
                  a.pathname = a.pathname.substr(0, a.pathname.length - 1);
                break;
              case "query":
                var u = [],
                  l = a.search.replace(/^\?/, "").split("&");
                "string" == typeof (n = i[c]) && (n = new RegExp(n));
                var f =
                  n instanceof Array
                    ? function (e) {
                        for (var t = 0; t < n.length; t++)
                          if (e === n[t]) return !0;
                        return !1;
                      }
                    : n instanceof RegExp
                    ? n.test.trcBind(n)
                    : function () {
                        return !1;
                      };
                l.forEach(function (e) {
                  f(decodeURIComponent(e.split("=")[0])) && u.push(e);
                }),
                  (a.search = (u.length ? "?" : "") + u.join("&"));
                break;
              case "fragment":
                var d = a.hash.replace(/^#/, "");
                "string" == typeof (n = i[c]) && (n = new RegExp(n)),
                  (a.hash = ""),
                  n instanceof RegExp && n.test(d)
                    ? (a.hash = "#" + d)
                    : n instanceof Array &&
                      n.forEach(function (e) {
                        d.search(e) >= 0 && (a.hash = "#" + d);
                      });
            }
        }
        return (
          a.pathname || (a.pathname = "/"),
          "item-id" === e ? a.toString().toLowerCase() : a.toString()
        );
      },
      me = function () {
        return Se(ce(), "ampproject.net");
      },
      ve = function () {
        return Se(ce(), "instantarticles.fb.com");
      },
      Se = function (e, t) {
        try {
          return void 0 !== e && void 0 !== t && e.indexOf(t) > 0;
        } catch (e) {
          return !1;
        }
      },
      Ie = function (e, t, n) {
        var r = ["paramUrl", "meta", "canonical", "og", "location"],
          a = { paramUrl: Ee, canonical: Te, og: we, location: be },
          o = i.urlExtractOrder || r,
          s = 0,
          c,
          l,
          f,
          d = "",
          h = function (e, t) {
            return pe.call(this, e, t, n);
          };
        for (o.push("location"); s < o.length && (!d || /^\s*$/.test(d)); )
          (l = o[s]), (d = (c = a[o[s]]) ? c.call(null, e, h) : null), s++;
        return "item-url" === e && l === Ee
          ? d
          : ((f = l !== be),
            (d = t ? t.call(this, d, u ? "video" : "text", f) : d));
      },
      Ee = function (e, t) {
        return !f || ("item-id" !== e && "item-url" !== e)
          ? null
          : t.call(this, e, f);
      },
      Te = function (e, i) {
        for (
          var n = t.head.getElementsByTagName("link"), r = 0;
          r < n.length;
          r++
        )
          if ("canonical" === n[r].rel) return i.call(this, e, n[r].href);
        return null;
      },
      we = function (e, i) {
        for (
          var n = t.head.getElementsByTagName("meta"), r = 0;
          r < n.length;
          r++
        )
          if (
            "og:url" === n[r].getAttribute("property") &&
            n[r].content.length > 5
          )
            return i.call(this, e, n[r].content);
        return null;
      },
      be = function (t, i) {
        var n = function () {
          var t = e.location,
            i = r
              .filter(function (e) {
                return 0 !== e.search("trc_") && "taboola-debug" !== e;
              }, t.search.replace(/^\?/, "").split("&"))
              .join("&");
          return t.origin + t.pathname + "?" + i;
        };
        return i.call(this, t, n());
      },
      ye = function (e) {
        try {
          var t = r.objKeys(e[0]);
          for (var i in t)
            switch (t[i]) {
              case "home":
                return "home";
              case "category":
                return "category";
              case "text":
              case "article":
                return "text";
              case "search":
                return "search";
              case "photo":
                return "photo";
              case "other":
                return "other";
              case "content_hub":
                return "content_hub";
              case "video":
              default:
                return "video";
            }
        } catch (e) {
          return "video";
        }
      },
      Re = function (e) {
        return localStorage.getItem(e + ":session-data");
      },
      _e = function () {
        return localStorage.getItem("taboola global:user-id");
      },
      Ce = function () {
        return Ie("item-url", i.normalizeItemUrl, i.prenormalizeUrlRules);
      },
      De = function (e) {
        for (
          var t,
            i = /^(.*\/libtrc\/.+\/)(?:(?:trk)|(?:tfa))\.js(?:\?(.*))?$/,
            n = 0;
          n < e.length;
          n++
        )
          if ((t = e[n].src.match(i))) return t[1];
      },
      Ue = function () {
        for (
          var e = De(t.getElementsByTagName("script")),
            i = [
              { key: "?", index: 0 },
              { key: "://", index: 1 },
              { key: "//", index: 1 },
              { key: "/", index: 0 },
            ],
            n = 0,
            r = i.length,
            a = e,
            o;
          n < r;
          n++
        )
          a = (o = H(a, i[n].key, 2)).length > 1 ? o[i[n].index] : o[0];
        return a;
      },
      Oe = function () {
        if (!e.TRC.AdServerManager) {
          var t = Ue();
          (e.TRC.VVReady = ke),
            Z("//" + t + "/libtrc/vv." + i.tblVersion + ".js");
        }
      },
      ke = function () {
        (e.TRC.adManager = new e.TRC.AdServerManager(i.vvConfig, i.tblVersion)),
          e.TRC.adManager.startVV().then(function () {
            e.TRC.adManager.run();
          });
      },
      Pe = function (e, t) {
        return e ? e[t] : e;
      },
      Ne = function (e, t, i) {
        if (0 === r.objKeys(i).length || k["" + e]) return e;
        var n = document.createElement("a");
        n.href = f;
        var a = (n.host || location.host).toLowerCase(),
          o = (n.href || location.href).toLowerCase(),
          s = O[t],
          c = Pe(i[a], s),
          u = "/",
          l = ["m", "mobile", "www2", "www3"],
          d = [],
          h,
          g,
          p,
          m,
          v;
        if (!c) {
          for (
            Q(i, d),
              d.sort(function (e, t) {
                return e[0].length > t[0].length
                  ? -1
                  : e[0].length < t[0].length
                  ? 1
                  : 0;
              }),
              h = 0,
              g = d.length;
            h < g;
            h++
          )
            if ((p = d[h][0].toLowerCase()).indexOf(u) > 0) {
              if (o.match(p)) {
                c = Pe(d[h][1], s);
                break;
              }
              if (p.indexOf("www.") > -1 && o.match(p.replace("www.", ""))) {
                c = Pe(d[h][1], s);
                break;
              }
            } else if (a.match(p)) {
              c = Pe(d[h][1], s);
              break;
            }
          if (!c && a.indexOf("www.") < 0) {
            for (
              h = 0, g = l.length;
              h < g &&
              ((m = new RegExp("(https://|http://|^)" + l[h] + ".")),
              (v = a.replace(m, "www.")),
              !(c = Pe(i[v], s)));
              h++
            );
            c || (c = Pe(i[(v = "www." + a)], s));
          }
        }
        return c || "unknown-site-on-" + e;
      },
      Me = function (e, t, i) {
        var n = re(e);
        return n ? t.call(this, n[S]) : i;
      };
    (e.TRC = e.TRC || {}),
      (e.TRC.trk = n.trk = e.TRC.trk || {
        init: function () {
          (e.TRC.utm && !F()) ||
            (F() ||
              p ||
              ((e.TRC._getGlobalRequestId = he),
              (e.TRC._getItemId = ge),
              (e.TRC._getItemType = ye),
              (p = !0)),
            e.TRC.hasTrk
              ? F() || n.trk.execute()
              : (e._tfa && !e._tfa.config.hasValidConfig()) ||
                ((n.hasTrk = !0),
                G() &&
                  (n.eventUtils.safeAddEventListener(
                    n.sharedEvents.PAGE_VIEW,
                    function (t) {
                      try {
                        var r = t.detail,
                          a = r.publisherIdType,
                          o = r.accountId,
                          s = r.pageViewInitiator,
                          c = r.isUnifiedPageView,
                          u = s === n.pageViewInitiator.TFA,
                          l,
                          f;
                        if ((de(e._taboola), u)) {
                          if (
                            e._tfa.config.safeGet(
                              "tfa:trk:prevent-concurrent-requests",
                              !0,
                              o
                            ) &&
                            n.trk.isRequestProcessing(o)
                          )
                            return;
                          e._tfa.config.safeGet(
                            "tfa:trk:network-solution-enabled",
                            !1,
                            o
                          ) && (o = Ne(o, a, i.networkMap));
                        }
                        (f = X(
                          o,
                          a,
                          (l = {
                            pageViewInitiator: s,
                            isMediaRequest: u,
                            isUnifiedPageView: c,
                          })
                        )),
                          (j = j.loadTrc(o, a, l, f));
                      } catch (t) {
                        n.eventUtils.dispatchEvent(
                          n.sharedEvents.REQUEST_ID_CREATION_JS_ERROR,
                          { publisherId: o }
                        );
                      }
                    }
                  ),
                  F() || n.trk.execute(),
                  i.enableVV && Oe())));
        },
        execute: function () {
          var t = n.publisherIdType.NAME,
            r = Ne(i.bakedPublisherName, t, i.networkMap);
          n.eventUtils.dispatchEvent(n.sharedEvents.PAGE_VIEW, {
            accountId: r,
            publisherIdType: t,
            pageViewInitiator: n.pageViewInitiator.TRK,
          }),
            (e.TRC.publisherId = e.TRC.publisherId || r);
        },
        getRequestStatus: function (e) {
          var t = re(e);
          return t ? t[S] : C;
        },
        isRequestProcessing: function (e) {
          return Me(
            e,
            function (e) {
              return U.indexOf(e) > -1;
            },
            !1
          );
        },
        hasRequestEnded: function (e) {
          return Me(
            e,
            function (e) {
              return D.indexOf(e) > -1 || !(U.indexOf(e) > -1);
            },
            !1
          );
        },
        getPublisherRequestId: function (e) {
          var t = re(e);
          return t && t[S] === R ? t[v] : null;
        },
        getPublisherSessionData: function (e) {
          var t = Re(e);
          return t || null;
        },
        getViewId: function () {
          return $;
        },
        getReferrer: se,
      }),
      (F() &&
        !e._tfa.config.safeGet("tfa:trk:enabled", !0, i.bakedPublisherId)) ||
        n.trk.init();
  })(window, document, {
    bakedPublisherId: 1171685,
    bakedPublisherName: "nextersglobal-herowarsweb-sc",
    tblVersion: "20201108-15-RELEASE",
    normalizeItemId: function (itemid, type, canon) {
      if (
        !canon &&
        type == "text" &&
        typeof itemid == "string" &&
        itemid.search(new RegExp("^https?://")) == 0
      )
        itemid = itemid.replace(/\?.*/, "", false);
      return itemid.toLowerCase();
    },
    prenormalizeIdRules: {
      host: true,
      fragment: "^(/video/|!)",
      query: ["p", "id"],
      "truncate-at": [
        "search.searchcompletion.com",
        "org.mozilla.javascript.undefined",
      ],
      "trailing-dirsep": true,
    },
    prenormalizeUrlRules: false,
    normalizeItemUrl: function (itemurl, type, canon) {
      return itemurl;
    },
    urlExtractOrder: null,
    networkMap: {},
    vvConfig: null,
    enableVV: false,
    rboxTrcProtocol: "https:",
    tfaContext: true,
    jsScope: window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"],
  }),
  (function (e, t) {
    (e._tfa = e._tfa || []),
      (t.useStorageDetection = e.TRC.useStorageDetection =
        e.TRC.useStorageDetection || !0),
      (t.text = t.text || {}),
      (t.text.lsplit =
        t.text.lsplit ||
        function (e, t, i) {
          var n = e.split(t);
          return n
            .slice(0, i - 1)
            .concat(n.length >= i ? n.slice(i - 1).join(t) : []);
        }),
      (t.tfaUtil = t.tfaUtil || {}),
      (t.tfaUtil.safeAddParam =
        t.tfaUtil.safeAddParam ||
        function (e, t, i) {
          var n, r;
          i &&
            t &&
            e &&
            ((n = encodeURIComponent(e)),
            (r = encodeURIComponent(t)),
            i.push(n + "=" + r));
        }),
      (t.tfaUtil.getParameterByName =
        t.tfaUtil.getParameterByName ||
        function (e, t) {
          if (!t || !e) return null;
          e = e.replace(/[\[\]]/g, "\\$&");
          var i,
            n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
          return n
            ? n[2]
              ? decodeURIComponent(n[2].replace(/\+/g, " "))
              : ""
            : null;
        });
    var i = (e.TRCImpl = e.TRCImpl || {});
    (i.global = i.global || {}),
      (e.__trcError = e.__trcError || function e() {});
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t) {
    var i = "taboola global",
      n = "trctestcookie";
    function r() {
      for (
        var e = "trc_cookie_storage",
          i = new Object(),
          n = document.cookie.split(/;\s+/),
          r = 0;
        r < n.length;
        r++
      ) {
        var a = t.text.lsplit(n[r], "=", 2),
          o = unescape(a[0]),
          s = unescape(a[1]);
        if (o == e) {
          for (var c = s.split("|"), u = 0; u < c.length; u++) {
            var a = c[u].split("=");
            i[unescape(a[0])] = unescape(a[1]);
          }
          break;
        }
      }
      function l() {
        var t = new Array(),
          n,
          r;
        for (var a in i)
          i.hasOwnProperty(a) &&
            null != i[a] &&
            (t[t.length] = escape(a) + "=" + escape(i[a]));
        (n = t.length > 0 ? 1 : -1),
          (r = new Date(new Date().getTime() + 365 * n * 864e5)),
          (document.cookie =
            e +
            "=" +
            escape(t.join("|")) +
            ";path=/;expires=" +
            r.toUTCString());
      }
      return (
        (this.getValue = function (e) {
          return i.hasOwnProperty(e) ? i[e] : null;
        }),
        (this.setValue = function (e, t) {
          (i[e] = t), l();
        }),
        (this.removeKey = function (e) {
          delete i[e], l();
        }),
        this
      );
    }
    function a(e) {
      var t = e || {};
      return (
        (this.getValue = function (e) {
          return t[e] ? t[e] : null;
        }),
        (this.setValue = function (e, i) {
          t[e] = i;
        }),
        (this.removeKey = function (e) {
          delete t[e];
        }),
        (this.getData = function () {
          return t;
        }),
        this
      );
    }
    function o(t) {
      return (
        (this.getValue = function (i) {
          return e[t + "Storage"].getItem(i);
        }),
        (this.setValue = function (i, n) {
          try {
            e[t + "Storage"].setItem(i, n);
          } catch (e) {}
        }),
        (this.removeKey = function (i) {
          try {
            e[t + "Storage"].removeItem(i);
          } catch (e) {}
        }),
        this
      );
    }
    function s(t) {
      var i = e[t + "Storage"],
        n = new Date().getTime() + "",
        r = "_taboolaStorageDetection";
      try {
        if ((i.setItem(r, n), i.getItem(r) == n)) return i.removeItem(r), i;
      } catch (e) {}
      return null;
    }
    function c(i) {
      try {
        if (e.localStorage instanceof Storage && t.useStorageDetection && s(i))
          return new o(i);
      } catch (e) {
        return null;
      }
    }
    var u = function o() {
      return (
        (this.state = {}),
        (this.getLocalStorageImplementation = function (t, i) {
          if (
            null != this.state.privateStorageImpl &&
            "strict-w3c-storage" != t
          )
            return this.state.privateStorageImpl;
          var n = e.TRCImpl ? e.TRCImpl.global : {};
          switch (
            (t =
              t ||
              (n["local-storage-usage"]
                ? n["local-storage-usage"]
                : "prefer-w3c-storage"))
          ) {
            case "strict-w3c-storage":
              return c("session" === i ? "session" : "local");
            case "prefer-w3c-storage":
              var o = c("local");
              if (o) return (this.state.privateStorageImpl = o);
            case "prefer-cookies":
              try {
                if (this.canWriteCookies())
                  return (this.state.privateStorageImpl = new r());
              } catch (e) {}
            default:
              return (this.state.privateStorageImpl = new a());
          }
        }),
        (this.getFirstPartyCookie = function () {
          if (this.state.firstPartyCookie) return this.state.firstPartyCookie;
          var e = this.getLocalStorageImplementation();
          if (e instanceof r || e instanceof a)
            return (this.state.firstPartyCookie = e);
          try {
            if (this.canWriteCookies())
              return (this.state.firstPartyCookie = new r());
          } catch (e) {}
          return (this.state.firstPartyCookie = new a());
        }),
        (this.canWriteCookies = function () {
          var e;
          return (
            (document.cookie = n + "=ok"),
            (e = -1 !== document.cookie.indexOf(n)),
            (document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
            e
          );
        }),
        (this.getDummyStorage = function (e) {
          return new a(e);
        }),
        (this.getValue = function (e) {
          return this.getPublisherValue(i, e);
        }),
        (this.storePublisherValue = function (e, t, i) {
          var n;
          this.isNotAllowedToWriteValue(t, i) ||
            ((n = this.buildKeyWithPublisher(e, t)),
            this.getLocalStorageImplementation().setValue(n, i),
            this.addKeyToStoredKeysList(n));
        }),
        (this.isNotAllowedToWriteValue = function (e, i) {
          return (
            null == i ||
            void 0 == i ||
            (t.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(e))
          );
        }),
        (this.buildKeyWithPublisher = function (e, t) {
          return e + ":" + t;
        }),
        (this.getPublisherValue = function (e, i) {
          return t.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(i)
            ? null
            : this.getLocalStorageImplementation().getValue(
                this.buildKeyWithPublisher(e, i)
              );
        }),
        (this.addKeyToStoredKeysList = function (e) {
          var t = this.getStoredKeysList();
          -1 === t.indexOf(e) && (t.push(e), this.setStoredKeysList(t));
        }),
        (this.getStoredKeysList = function () {
          var e = this.buildKeyWithPublisher(i, "local-storage-keys"),
            t = this.getLocalStorageImplementation().getValue(e),
            n = [];
          try {
            n = JSON.parse(t) || [];
          } catch (e) {
            __trcError("Could not parse local storage keys", e);
          }
          return n;
        }),
        (this.setStoredKeysList = function (e) {
          var t, n;
          try {
            (t = JSON.stringify(e)),
              (n = this.buildKeyWithPublisher(i, "local-storage-keys")),
              this.getLocalStorageImplementation().setValue(n, t);
          } catch (e) {
            __trcError("Could not stringify local storage keys", e);
          }
        }),
        (this.isAllowedKeyWhenDoNotTrack = function (t) {
          var i,
            n = ((e.TRCImpl && e.TRCImpl.global) || {})["dnt-allowed-keys"] || [
              "session-id",
              "trc_css-isolation",
            ],
            r;
          return (
            null !== t &&
            void 0 !== t &&
            ((r = t.split(":")[1] || t), -1 !== n.indexOf(r))
          );
        }),
        (this.storeUserId = function (e) {
          this.isNotAllowedToWriteValue("user-id", e) ||
            this.storePublisherValue(i, "user-id", e);
        }),
        (this.getUserIdFirstPartyCookie = function () {
          return this.getFirstPartyCookie().getValue(
            this.buildKeyWithPublisher(i, "user-id")
          );
        }),
        (this.getSessionDataFirstPartyCookie = function () {
          return this.getFirstPartyCookie().getValue(
            this.buildKeyWithPublisher(i, "session-data")
          );
        }),
        (this.initState = function () {
          void 0 === this.state && (this.state = {}),
            (this.state.privateStorageImpl = null);
        }),
        this.initState(),
        this
      );
    };
    (t.tfaPageManager = t.tfaPageManager || new u()),
      (t.tfaPageManager.TABOOLA_GLOBAL_KEY = i);
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t, i) {
    var n = i.tfaPageManager,
      r = "https://",
      a = "tblci",
      o = "#" + a;
    function s(e, t) {
      e && t && (t[e] = !0);
    }
    function c(e, t, i) {
      for (var n = {}, r = 0; r < arguments.length; r++) s(arguments[r], n);
      return Object.keys(n).length > 1;
    }
    (i.tfaUserId = {
      initialized: !1,
      userId: null,
      clickId: null,
      getUserId: function () {
        return this.userId;
      },
      getClickId: function () {
        return this.clickId;
      },
      getHttpsPrefix: function () {
        return r;
      },
      sendUserIdsToTrc: function (t, n, r, a) {
        var o,
          s = "https:",
          u = [];
        if (c(t, n, r))
          return (
            i.tfaUtil.safeAddParam("uiref", t, u),
            i.tfaUtil.safeAddParam("uils", n, u),
            i.tfaUtil.safeAddParam("uifpc", r, u),
            i.tfaUtil.safeAddParam("tblci", a, u),
            (o = new Image()),
            e._tfa.config.safeGet(
              "tfa:add-referrer-policy-when-firing-pixel",
              !0
            ) && (o.referrerPolicy = "no-referrer-when-downgrade"),
            (o.src =
              s + "//trc.taboola.com/sg/taboola-tfa/1/um/?" + u.join("&")),
            o
          );
      },
      sendUserIdToGamma: function () {
        if (
          e._tfa.config.safeGet("tfa-uid:send-uid-to-gamma", !1) &&
          (!e.TRCImpl || !e.TRCImpl.referrer)
        ) {
          var t,
            n = [],
            r = this.getUserId();
          if (r)
            return (
              i.tfaUtil.safeAddParam("uid", r, n),
              i.tfaUtil.safeAddParam("src", "tfa", n),
              (t = new Image()),
              e._tfa.config.safeGet(
                "tfa:add-referrer-policy-when-firing-pixel",
                !0
              ) && (t.referrerPolicy = "no-referrer-when-downgrade"),
              (t.src =
                this.getHttpsPrefix() + "cds.taboola.com/?" + n.join("&")),
              t
            );
        }
      },
      readAndStoreUserId: function () {
        var e = this.extractUserIdFromReferrer(),
          t = n.getValue("user-id"),
          i = n.getUserIdFirstPartyCookie();
        this.sendUserIdsToTrc(e, t, i, this.getClickId()),
          e &&
            (n.storeUserId(e),
            i &&
              n
                .getFirstPartyCookie()
                .setValue(n.TABOOLA_GLOBAL_KEY + ":" + "user-id", e)),
          (this.userId = e || t || i);
      },
      readAndStoreClickIdParam: function () {
        var e =
            this.extractClickIdFromUrl(this.getWindowLocation().toString()) ||
            this.extractClickIdFromUrl(this.getReferrer()),
          t = n.getValue(a);
        e && n.storePublisherValue(n.TABOOLA_GLOBAL_KEY, a, e),
          (this.clickId = e || t);
      },
      extractUserIdFromReferrer: function () {
        var e = this.getReferrer();
        if (e && e.indexOf("taboola") > -1)
          return i.tfaUtil.getParameterByName("ui", e);
      },
      extractClickIdFromUrl: function (e) {
        if (e) {
          var t =
              e.length > 1 && -1 !== e.indexOf("#")
                ? e.substring(e.indexOf("#"))
                : "",
            n;
          if ((n = i.tfaUtil.getParameterByName(a, e))) return n;
          if (t && t.length > o.length && 0 === t.indexOf(o))
            return t.substr(o.length);
        }
      },
      getWindowLocation: function () {
        return e.location;
      },
      getReferrer: function () {
        return t.referrer;
      },
      init: function () {
        this.initialized ||
          (this.readAndStoreUserId(),
          this.readAndStoreClickIdParam(),
          this.sendUserIdToGamma(),
          (this.initialized = !0));
      },
    }),
      i.tfaUserId.init(),
      (i.tfaUserId.CLICK_ID_KEY = a);
  })(
    window,
    document,
    window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]
  ),
  (function (e, t) {
    var i = "_tfa",
      n,
      r,
      a,
      o = 6 * 60 * 60 * 1e3,
      s = "eng_mt",
      c = 27;
    function u(e, t, i) {
      var n =
        e && e.sessionStartTime
          ? e.sessionStartTime + this.getSessionDuration() - t
          : this.getSessionDuration();
      n < 0 && (n = 0),
        setTimeout(function () {
          i(n);
        }, n);
    }
    function l(e) {
      return e.ver && e.ver === this.getDataVersion();
    }
    var f = function e() {
      this.state = {};
    };
    (f.prototype = {
      constructor: f,
      init: function e(i) {
        var n = t.eventUtils.getDateNow(),
          r = this.getSessionDataFromStorage();
        if (this.getIsLocalStorageAvailable())
          return (
            u.call(this, r, n, i),
            r && r.sessionStartTime
              ? (this.state = r)
              : ((this.state = {
                  ver: c,
                  sessionStartTime: n,
                  scrollDepth: 0,
                  sessionDepth: [],
                  timeOnSite: 0,
                  numOfTimesMetricsSent: 0,
                }),
                this.persistMetricsData()),
            this
          );
      },
      resetStorageMetricData: function e() {
        var i = t.tfaPageManager.getLocalStorageImplementation(
          "strict-w3c-storage"
        );
        (this.state = {}), i.setValue(s, "");
      },
      getSessionDataFromState: function e() {
        return this.state;
      },
      getSessionDataFromStorage: function e() {
        var i, n, r;
        if (
          ((i = t.tfaPageManager.getLocalStorageImplementation(
            "strict-w3c-storage"
          )),
          (a = !!i),
          (r = (n = i && i.getValue(s)) && JSON.parse(n)))
        ) {
          if (l.call(this, r) && !this.hasSessionEnded(r)) return r;
          this.resetStorageMetricData();
        }
      },
      hasSessionEnded: function e(i) {
        var n = i ? i.sessionStartTime : this.getSessionStartTime();
        return !n || t.eventUtils.getDateNow() - n > this.getSessionDuration();
      },
      persistMetricsData: function e() {
        var i = t.tfaPageManager.getLocalStorageImplementation(
            "strict-w3c-storage"
          ),
          n = this.state;
        i && i.setValue(s, JSON.stringify(n));
      },
      persistSpecificMetricsData: function e(i, n) {
        var r = t.tfaPageManager.getLocalStorageImplementation(
            "strict-w3c-storage"
          ),
          a;
        r &&
          i &&
          (a = this.getSessionDataFromStorage()) &&
          ((a[i] = n), r.setValue(s, JSON.stringify(a)));
      },
      updateMetricState: function e(t, i) {
        var n = this.state;
        t && (n[t] = i);
      },
      getSessionDuration: function e() {
        return o;
      },
      getSessionStartTime: function e() {
        return this.state.sessionStartTime;
      },
      getScrollDepth: function e() {
        return this.state.scrollDepth;
      },
      getTimeOnSite: function e() {
        return this.state.timeOnSite;
      },
      getNumOfTimesMetricsSent: function e() {
        return this.state.numOfTimesMetricsSent;
      },
      getDataVersion: function () {
        return c;
      },
      getIsLocalStorageAvailable: function () {
        return a;
      },
    }),
      ((r = (n = e[i] = e[i] || []).TEM = n.TEM || {}).ESU = r.ESU || new f());
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t) {
    var i = "_tfa",
      n;
    function r(e, t) {
      this.storageUtils.updateMetricState(e, t),
        this.storageUtils.persistSpecificMetricsData(e, t);
    }
    var a = function e() {};
    (a.prototype = {
      constructor: a,
      init: function e(t) {
        (this.storageUtils = t || {}),
          this.setVisibilityProperties(),
          this.initMetricData(this.storageUtils),
          this.initVisibilityListener();
      },
      initMetricData: function e(i) {
        (this.isPageHidden = document[this.hiddenProp]),
          (this.timeOnSite = i.getTimeOnSite() || 0),
          (this.lastVisibleStartTime = this.isPageHidden
            ? 0
            : t.eventUtils.getDateNow());
      },
      initVisibilityListener: function e() {
        document.addEventListener(
          this.visibilityChangeEventName,
          this.handleVisibilityChange.bind(this),
          !1
        );
      },
      setVisibilityProperties: function e() {
        void 0 !== document.hidden
          ? ((this.hiddenProp = "hidden"),
            (this.visibilityChangeEventName = "visibilitychange"))
          : void 0 !== document.msHidden
          ? ((this.hiddenProp = "msHidden"),
            (this.visibilityChangeEventName = "msvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((this.hiddenProp = "webkitHidden"),
            (this.visibilityChangeEventName = "webkitvisibilitychange"));
      },
      calcTimeOnSite: function e() {
        return this.lastVisibleStartTime
          ? this.timeOnSite +
              (t.eventUtils.getDateNow() - this.lastVisibleStartTime)
          : this.timeOnSite;
      },
      handleVisibilityChange: function e() {
        (this.isPageHidden = document[this.hiddenProp]),
          this.isPageHidden
            ? ((this.timeOnSite = this.calcTimeOnSite()),
              r.call(this, "timeOnSite", this.timeOnSite))
            : (this.lastVisibleStartTime = t.eventUtils.getDateNow());
      },
      getTimeOnSite: function e() {
        return this.isPageHidden ? this.timeOnSite : this.calcTimeOnSite();
      },
    }),
      ((n = e[i] = e[i] || []).TEM = n.TEM || {}),
      (n.TEM.TOS = n.TEM.TOS || new a());
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function () {
    var e = "_tfa",
      t,
      i = !1,
      n;
    function r() {
      return void 0 == document.body || void 0 == document.documentElement
        ? 0
        : ((i = !0),
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
          ));
    }
    function a(e, t) {
      this.storageUtils.updateMetricState(e, t),
        this.storageUtils.persistSpecificMetricsData(e, t);
    }
    function o(e, t) {
      var i;
      return function () {
        var n = this,
          r = arguments;
        clearTimeout(i),
          (i = setTimeout(function () {
            e.apply(n, r);
          }, t));
      };
    }
    var s = function e() {};
    (s.prototype = {
      constructor: s,
      init: function e(t) {
        (this.storageUtils = t || {}),
          (this.maxScrollPercentage = this.storageUtils.getScrollDepth() || 0),
          this.initEventListeners(),
          this.updateMeasurements(),
          this.calcMaxScrollPercentage();
      },
      getScrollDepth: function e() {
        return i || this.calcMaxScrollPercentage(), this.maxScrollPercentage;
      },
      initEventListeners: function e() {
        window.addEventListener("resize", o(this.onResize.bind(this), 100)),
          window.addEventListener("scroll", o(this.onScroll.bind(this), 50));
      },
      onResize: function e() {
        this.updateMeasurements();
      },
      onScroll: function e() {
        this.calcMaxScrollPercentage();
      },
      updateMeasurements: function e() {
        (this.winHeight = window.innerHeight), (this.docHeight = r());
      },
      calcMaxScrollPercentage: function e() {
        var t =
            window.pageYOffset ||
            (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop,
          n;
        i || this.updateMeasurements(),
          (n =
            0 == this.docHeight
              ? 0
              : Math.floor(((t + this.winHeight) / this.docHeight) * 100)) >
            this.maxScrollPercentage &&
            ((this.maxScrollPercentage = n),
            a.call(this, "scrollDepth", this.maxScrollPercentage));
      },
    }),
      ((n = (t = window[e] = window[e] || []).TEM = t.TEM || {}).SCD =
        n.SCD || new s());
  })(),
  (function (e, t) {
    var i,
      n,
      r = e["_tfa"].TEM,
      a = function () {};
    (a.prototype = {
      constructor: a,
      init: function (e, i) {
        (this.storageUtils = e),
          this.refreshFromStorage(),
          t.eventUtils.safeAddEventListener(
            i,
            this.handleUnipPageView.bind(this)
          );
      },
      getKey: function () {
        return "ssd";
      },
      setState: function (e) {
        this.visitedUrls = {};
        for (var t = 0; t < e.length; t++) this.visitedUrls[e[t]] = !0;
      },
      getState: function () {
        return this.visitedUrls ? Object.keys(this.visitedUrls) : [];
      },
      getMetric: function () {
        return this.getState().length;
      },
      persistState: function () {
        var e = "sessionDepth",
          t = this.getState();
        this.storageUtils.updateMetricState(e, t),
          this.storageUtils.persistSpecificMetricsData(e, t);
      },
      refreshFromStorage: function () {
        var e = this.storageUtils.getSessionDataFromStorage(),
          t;
        e || (e = this.storageUtils.getSessionDataFromState()),
          (t = e["sessionDepth"]) || (t = []),
          this.setState(t);
      },
      handleUnipPageView: function () {
        try {
          var t = e.location.href;
          this.visitedUrls[t] ||
            ((this.visitedUrls[t] = !0), this.persistState());
        } catch (e) {}
      },
    }),
      (r.SSD = r.SSD || new a());
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t) {
    var i = "_tfa",
      n = (e[i] = e[i] || []),
      r,
      a = (n.TEM = n.TEM || {}),
      o = a.ESU || {},
      s = a.SCD || {},
      c = a.SSD || {},
      u = a.TOS || {},
      l = 1500,
      f = "numOfTimesMetricsSent",
      d = "pre_d_eng_tb",
      h = { SESSION_END: "SESSION_END" },
      g,
      p;
    function m(e, t) {
      var i = u.getTimeOnSite(),
        n = s.getScrollDepth(),
        r = c.getMetric();
      return {
        notify: "event",
        name: d,
        tos: i,
        scd: n,
        ssd: r,
        est: o.getSessionStartTime(),
        ver: o.getDataVersion(),
        isls: o.getIsLocalStorageAvailable(),
        src: e,
        invt: t,
      };
    }
    function v(e, t) {
      var i = m(e, t);
      i.est && (r.pageViewAccountIds ? S(r.pageViewAccountIds, i) : I(i));
    }
    function S(e, t) {
      var i = Object.keys(e);
      i.length > 0
        ? i.forEach(function (i) {
            (t.id = e[i]), I(t);
          })
        : I(t);
    }
    function I(e) {
      r.push(e);
    }
    function E(e) {
      clearTimeout(p), a.sendMetrics("se", e), o.resetStorageMetricData();
    }
    function T(e) {
      var t = o.getSessionDataFromStorage(),
        i,
        n;
      (isNaN(g) || g < 0) && (g = 0),
        o.hasSessionEnded() ||
          ((n = t && t.numOfTimesMetricsSent !== g)
            ? ((g = t.numOfTimesMetricsSent), o.updateMetricState(f, g))
            : ((i = ++g),
              o.updateMetricState(f, i),
              o.persistSpecificMetricsData(f, i),
              a.sendMetrics("i", e)),
          w());
    }
    function w() {
      var e = l * Math.pow(2, g);
      p = setTimeout(function () {
        T(e);
      }, e);
    }
    function b() {
      (g = o.getNumOfTimesMetricsSent() || 0), w();
    }
    function y() {
      a.initialized ||
        ((r = n.TUP || {}),
        (a.initialized = !0),
        a.ESU.init(E),
        a.ESU.getIsLocalStorageAvailable() &&
          (u.init(o),
          s.init(o),
          c.init(o, t.sharedEvents.PAGE_VIEW),
          a.initIntervalTrigger()));
    }
    (a.init = a.init || y),
      (a.onSessionEndTrigger = a.onSessionEndTrigger || E),
      (a.sendMetrics = a.sendMetrics || v),
      (a.initIntervalTrigger = a.initIntervalTrigger || b),
      (a.EVENTS = a.EVENTS || h);
  })(window, window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]),
  (function (e, t, i) {
    var n = t.tfaPageManager || {},
      r = "_tfa",
      a = (window[r] = window[r] || []),
      o = { event: j, subscription: q },
      s = /(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/,
      c = "script[src$='tfa.js']",
      u = "//",
      l = "page_view",
      f = ["notify", "id"],
      d = { name: "en", url: "item-url", referrer: "ref", timestamp: "tim" },
      h = -1,
      g = {
        protocol: "https:",
        host: "trc.taboola.com",
        httpMethod: "get",
        loggerEventName: "unip",
        logToConsole: !0,
      },
      p = {
        EMPTY_COMMAND: "EMPTY_COMMAND",
        MISSING_NOTIFY: "MISSING_NOTIFY",
        INVALID_NOTIFY: "INVALID_NOTIFY",
        MISSING_NAME: "MISSING_NAME",
        INVALID_ID: "INVALID_ID",
      },
      m = { TFA_VALIDATION_ERROR: "TFA_VALIDATION_ERROR" },
      v = (((I = {})[l] = G), I),
      S = (function () {
        var e = {};
        return (
          (e[t.sharedEvents.REQUEST_ID_CREATION_TIMEOUT] = "to"),
          (e[t.sharedEvents.REQUEST_ID_CREATION_ERROR] = "err"),
          (e[t.sharedEvents.REQUEST_ID_CREATION_JS_ERROR] = "jserr"),
          (e[t.sharedEvents.INVALID_TRK_RESPONSE] = "itrkr"),
          e
        );
      })(),
      I;
    function E() {
      var e = B();
      e.initialized &&
        e.domAccountId &&
        setTimeout(function () {
          for (var e = B().asyncQueue; e.length; ) z(e.shift());
        }, 0);
    }
    function T() {
      var e = w(),
        t;
      if (e && e.src && (t = e.src.replace(s, "$3")))
        return /^\d+$/.test(t)
          ? parseInt(t, 10)
          : (Q(
              "Value '" +
                t +
                "' is invalid for 'id' param in script source url '" +
                e.src +
                "'. Only numeric values are allowed."
            ),
            h);
    }
    function w() {
      for (var e = document.querySelectorAll(c), t, i = 0; i < e.length; i++)
        if ((t = e[i]).src && t.src.indexOf("/unip/") > 0) return t;
    }
    function b() {
      return t.eventUtils.getDateNow();
    }
    function y(e) {
      e["ce"] = "subscr";
    }
    function R(e) {
      var t = n.getSessionDataFirstPartyCookie();
      void 0 !== t && t && (e["sd"] = t);
    }
    function _(e) {
      try {
        var i = t.tfaUserId.getUserId(),
          r = n.getValue("user-id");
        (i || r) && (e["ui"] = i || r);
      } catch (t) {
        Q(
          "Error while trying to add user-id param, params=" +
            JSON.stringify(e),
          t
        );
      }
    }
    function C(e) {
      try {
        var i = t.tfaUserId.getClickId();
        i && (e[t.tfaUserId.CLICK_ID_KEY] = i);
      } catch (t) {
        Q(
          "Error while trying to addClickIdParam, params=" + JSON.stringify(e),
          t
        );
      }
    }
    function D(e) {
      var i = B();
      i.referrer || (i.referrer = t.trk.getReferrer()),
        (e[d.referrer] = i.referrer);
    }
    function U(e, t) {
      var i = d.url,
        n;
      ne($(e), t) && (e[i] = e[i] || document.location.href);
    }
    function O(e) {
      var t = {},
        i = !1,
        n;
      for (var r in ((e[d.timestamp] = b()), e))
        !e.hasOwnProperty(r) ||
          f.indexOf(r) >= 0 ||
          ((t[(n = d.hasOwnProperty(r) ? d[r] : r)] = e[r]), (i = !0));
      return i && t;
    }
    function k(e, i) {
      var n = Z(e) + u + X(e, i);
      P(i), N(i, e), M(i, e), _(i), C(i), D(i), V(i), U(i, e);
      try {
        t.TRCLogger[g.httpMethod](n, g.loggerEventName, i, e);
      } catch (t) {
        Q(
          "Error while trying to send to server event with id '" +
            e +
            "' and params '" +
            JSON.stringify(i) +
            "'.",
          t
        );
      }
    }
    function P(e) {
      e["vi"] = t.trk.getViewId();
    }
    function N(e, i) {
      var n = t.trk.getPublisherRequestId(i);
      n && (e["ri"] = n);
    }
    function M(e, i) {
      var n = t.trk.getPublisherSessionData(i);
      n && (e["sd"] = n);
    }
    function A(e, t) {
      e["mrir"] = t;
    }
    function V(e) {
      e["cv"] = i;
    }
    function x(e, t) {
      if (e === l)
        for (var i in t)
          if (!([d.name, d.timestamp].indexOf(i) >= 0)) return !0;
      return !1;
    }
    function L(e, i) {
      var n = B(),
        r;
      if (!t.trk.getPublisherRequestId(e)) {
        if (t.trk.isRequestProcessing(e))
          return void n.messageDelayer.delayMessage(e, i, {
            successCallback: k,
            failCallback: function (e, t, i, n) {
              var r = S[n];
              r || (r = n), A(t, r), k(e, t);
            },
            timeoutInMillis: Y(e),
          });
        A(i, t.trk.getRequestStatus(e));
      }
      k(e, i);
    }
    function j(e, i) {
      var n = O(e),
        r = $(n),
        a = v[r];
      if (((i = parseInt(i, 10)), !a || !a(n, i))) {
        if (te(i)) {
          if (ie(i)) return void L(i, n);
          t.trk.getPublisherRequestId(i) || A(n, "wffo");
        } else A(n, "ttd");
        k(i, n);
      }
    }
    function $(e) {
      return e[d.name];
    }
    function K(e, t) {
      void 0 !== e["sourceurl"] &&
        e["sourceurl"] &&
        (t["surl"] = e["sourceurl"]);
    }
    function q(e, t) {
      var i = O(e);
      y(i), R(i), K(e, i), k(parseInt(t, 10), i);
    }
    function F(e, i) {
      var n = !1;
      try {
        n = !!t.tfaUserId.getClickId();
      } catch (e) {}
      return ee(i) && !x(l, e) && !n;
    }
    function G(e, i) {
      var n = B(),
        r = !1;
      return (
        i &&
          ((r = F(e, i)),
          (n.pageViewAccountIds[i] = parseInt(i, 10)),
          t.eventUtils.dispatchEvent(t.sharedEvents.PAGE_VIEW, {
            accountId: i,
            publisherIdType: t.publisherIdType.ID,
            pageViewInitiator: t.pageViewInitiator.TFA,
            isUnifiedPageView: r,
          })),
        r
      );
    }
    function H(e) {
      return e
        ? e.notify
          ? o.hasOwnProperty(e.notify)
            ? e.name
              ? !(e.hasOwnProperty("id") && !/^\d+$/.test(e.id)) ||
                (W(
                  p.INVALID_ID,
                  e,
                  "Value '" +
                    e.id +
                    "' is invalid for 'id' field in command '" +
                    JSON.stringify(e) +
                    "'. Only numeric values are allowed."
                ),
                !1)
              : (W(
                  p.MISSING_NAME,
                  e,
                  "Mandatory 'name' field is missing in command '" +
                    JSON.stringify(e) +
                    "'."
                ),
                !1)
            : (W(
                p.INVALID_NOTIFY,
                e,
                "Value '" +
                  e.notify +
                  "' is invalid for 'notify' field in command '" +
                  JSON.stringify(e) +
                  "'."
              ),
              !1)
          : (W(
              p.MISSING_NOTIFY,
              e,
              "Mandatory 'notify' field is missing in command '" +
                JSON.stringify(e) +
                "'."
            ),
            !1)
        : (W(p.EMPTY_COMMAND, e, "Command is '" + e + "'."), !1);
    }
    function B() {
      return (window && window[r] && window[r].TUP) || {};
    }
    function z(e) {
      var t, i;
      if (H(e))
        if (((t = B()), (i = e.id || t.domAccountId))) {
          if (i !== h)
            try {
              o[e.notify](e, i);
            } catch (t) {
              Q(
                "An error occurred while handling command '" +
                  JSON.stringify(e) +
                  "'.",
                t
              );
            }
        } else t.asyncQueue.push(e);
    }
    function W(e, i, n) {
      var r = B();
      t.eventUtils.dispatchEvent(m.TFA_VALIDATION_ERROR, {
        accountId: r.domAccountId,
        errorCode: e,
        command: i,
      }),
        Q(n);
    }
    function Q(e, t) {
      g.logToConsole && J(e, t);
    }
    function J(e, t) {
      t
        ? console.log("Taboola Pixel: " + e, t)
        : console.log("Taboola Pixel: " + e);
    }
    function Y(e) {
      return 500 + a.config.safeGet("tfa:trk:tracking-request-timeout", 5e3, e);
    }
    function Z(e) {
      return a.config.safeGet("tfa:default-protocol", g.protocol, e);
    }
    function X(e, t) {
      var i = $(t),
        n;
      return a.config.safeGet("tfa:event-host-map", {}, e)[i] || g.host;
    }
    function ee(e) {
      return te(e) && a.config.safeGet("tfa:trk:is-unified-page-view", !1, e);
    }
    function te(e) {
      return a.config.safeGet("tfa:trk:enabled", !0, e);
    }
    function ie(e) {
      return a.config.safeGet("tfa:trk:wait-for-request-id", !0, e);
    }
    function ne(e, t) {
      var i = a.config.safeGet("tfa:add-item-url:event-list", [], t);
      return "*" === i || i.indexOf(e) >= 0;
    }
    function re() {
      var e = (a.TUP = a.TUP || {}),
        i = a.TEM || {};
      (e.domAccountId = e.domAccountId || T()),
        e.initialized ||
          ((e.push = a.TUP.push || z),
          (e.initialized = !0),
          (e.asyncQueue = []),
          (e.EVENTS = m),
          (e.pageViewAccountIds = {}),
          (e.messageDelayer = new t.MessageDelayer(
            "publisherId",
            t.sharedEvents.REQUEST_ID_CREATED,
            [
              t.sharedEvents.REQUEST_ID_CREATION_JS_ERROR,
              t.sharedEvents.REQUEST_ID_CREATION_ERROR,
              t.sharedEvents.REQUEST_ID_CREATION_TIMEOUT,
              t.sharedEvents.INVALID_TRK_RESPONSE,
            ]
          )),
          i && i.init && i.init()),
        E();
    }
    re();
  })(
    window,
    window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"],
    "20201108-15-RELEASE"
  ),
  (function (e, t, i) {
    var n = "_tfa",
      r,
      a = {
        orderid: "orderid",
        currency: "currency",
        revenue: "revenue",
        quantity: "quantity",
        name: "name",
        attributionGroup: "attributionGroup",
      },
      o = { type: "marking-type" },
      s = "https:" + "//trc.taboola.com/{$publishreId}log/3/{$logType}?",
      c = /(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,
      u = "unip/",
      l = [],
      f = [],
      d = "_tecq";
    function h(e) {
      var t;
      switch (e.notify) {
        case "action":
          t = l;
          break;
        case "mark":
          t = f;
          break;
        case "event":
        case "subscription":
          t = r.TUP;
          break;
        case "ecevent":
          r.config &&
            r.config.safeGet("tfa:ecomm:enabled", !1, e.id) &&
            (t = window[d] = window[d] || []);
          break;
        default:
          return;
      }
      t && t.push(e);
    }
    function g() {
      return i.tfaUserId && i.tfaUserId.getUserId()
        ? "&ui=" + encodeURIComponent(i.tfaUserId.getUserId())
        : "";
    }
    function p() {
      return i.tfaUserId && i.tfaUserId.getClickId()
        ? "&" +
            i.tfaUserId.CLICK_ID_KEY +
            "=" +
            encodeURIComponent(i.tfaUserId.getClickId())
        : "";
    }
    function m() {
      var e,
        t,
        i = y();
      if (i)
        for (e = 0, t = l.length; e < t; e++)
          I(
            S(s, { $publishreId: i ? i + "/" : "", $logType: "action" }) +
              "tim=" +
              escape(T()) +
              "&item-url=" +
              escape(E()) +
              R(a, l.shift()) +
              w() +
              g() +
              p()
          );
    }
    function v() {
      var e,
        t,
        i = y();
      if (i)
        for (e = 0, t = f.length; e < t; e++)
          I(
            S(s, { $publishreId: i ? i + "/" : "", $logType: "mark" }) +
              "tim=" +
              escape(T()) +
              "&item-url=" +
              escape(E()) +
              R(o, f.shift()) +
              w() +
              g() +
              p()
          );
    }
    function S(e, t) {
      return e.replace(/\{([^{}]*)\}/g, function (e, i) {
        var n = t[i];
        return "string" == typeof n || "number" == typeof n ? n : e;
      });
    }
    function I(t) {
      var i = new Image();
      e._tfa.config.safeGet("tfa:add-referrer-policy-when-firing-pixel", !0) &&
        (i.referrerPolicy = "no-referrer-when-downgrade"),
        (i.src = t);
    }
    function E() {
      return e.location.href;
    }
    function T() {
      var e = new Date(),
        t = e.getHours(),
        i = e.getMinutes(),
        n = e.getSeconds() + e.getMilliseconds() / 1e3;
      return (
        (t < 10 ? "0" : "") +
        t +
        ":" +
        (i < 10 ? "0" : "") +
        i +
        ":" +
        (n < 10 ? "0" : "") +
        n.toFixed(3)
      );
    }
    function w() {
      var i = e.location.search,
        n = t.referrer.match(/(\?\S+)$/g),
        r = "";
      return (r =
        b(i.replace(/^\?/, "").split(/&/)) +
        (n ? b(n[0].replace(/^\?/, "").split(/&/)) : ""));
    }
    function b(e) {
      var t = "",
        i,
        n,
        r = "trc_";
      for (i = 0, n = e.length; i < n; i++)
        0 == e[i].indexOf(r) && (t = t + "&" + e[i]);
      return t;
    }
    function y() {
      var e = document.getElementsByTagName("script"),
        t,
        i,
        n = "",
        r;
      for (t = 0, i = e.length; t < i; t++)
        if (
          (r = e[t].src) &&
          (n = r.replace(c, "$3")) !== e[t].src &&
          n.indexOf(u) < 0
        )
          return n;
      return n;
    }
    function R(e, t) {
      var i,
        n = "";
      for (i in e) void 0 !== t[i] && (n += "&" + e[i] + "=" + t[i]);
      return n;
    }
    function _(e) {
      for (var t = 0; t < arguments.length; t++)
        (e = arguments[t]) instanceof Object && h(e);
      return C(), arguments.length;
    }
    function C() {
      m(), v();
    }
    function D() {
      for (; r.length; ) _(r.shift());
    }
    function U() {
      (r = e[n] = e[n] || []).registered ||
        ((r.push = _), (r.registered = !0), D());
    }
    U();
  })(
    window,
    document,
    window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]
  ); /*! 20201108-15-RELEASE 2020-11-08 */

!(function (t) {
  try {
    var h = "input is invalid type",
      i = "undefined" != typeof ArrayBuffer,
      s = "0123456789abcdef".split(""),
      r = [-2147483648, 8388608, 32768, 128],
      e = [24, 16, 8, 0],
      n = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298,
      ],
      a = ["hex", "array", "digest", "arrayBuffer"],
      o = [];
    Array.isArray ||
      (Array.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      }),
      i &&
        !ArrayBuffer.isView &&
        (ArrayBuffer.isView = function (t) {
          return (
            "object" == typeof t &&
            t.buffer &&
            t.buffer.constructor === ArrayBuffer
          );
        });
    var f = function (t) {
        return function (h) {
          return new u(!0).update(h)[t]();
        };
      },
      y = function () {
        var t = f("hex");
        (t.create = function () {
          return new u();
        }),
          (t.update = function (h) {
            return t.create().update(h);
          });
        for (var h = 0; h < a.length; ++h) {
          var i = a[h];
          t[i] = f(i);
        }
        return t;
      };
    function u(t) {
      t
        ? ((o[0] = o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0),
          (this.blocks = o))
        : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        (this.h0 = 1779033703),
        (this.h1 = 3144134277),
        (this.h2 = 1013904242),
        (this.h3 = 2773480762),
        (this.h4 = 1359893119),
        (this.h5 = 2600822924),
        (this.h6 = 528734635),
        (this.h7 = 1541459225),
        (this.block = this.start = this.bytes = this.hBytes = 0),
        (this.finalized = this.hashed = !1),
        (this.first = !0);
    }
    (u.prototype.update = function (t) {
      if (!this.finalized) {
        var s,
          r = typeof t;
        if ("string" !== r) {
          if ("object" !== r) throw new Error(h);
          if (null === t) throw new Error(h);
          if (i && t.constructor === ArrayBuffer) t = new Uint8Array(t);
          else if (!(Array.isArray(t) || (i && ArrayBuffer.isView(t))))
            throw new Error(h);
          s = !0;
        }
        for (var n, a = 0, o, f = t.length, y = this.blocks; a < f; ) {
          if (
            (this.hashed &&
              ((this.hashed = !1),
              (y[0] = this.block),
              (y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0)),
            s)
          )
            for (o = this.start; a < f && o < 64; ++a)
              y[o >> 2] |= t[a] << e[3 & o++];
          else
            for (o = this.start; a < f && o < 64; ++a)
              (n = t.charCodeAt(a)) < 128
                ? (y[o >> 2] |= n << e[3 & o++])
                : n < 2048
                ? ((y[o >> 2] |= (192 | (n >> 6)) << e[3 & o++]),
                  (y[o >> 2] |= (128 | (63 & n)) << e[3 & o++]))
                : n < 55296 || n >= 57344
                ? ((y[o >> 2] |= (224 | (n >> 12)) << e[3 & o++]),
                  (y[o >> 2] |= (128 | ((n >> 6) & 63)) << e[3 & o++]),
                  (y[o >> 2] |= (128 | (63 & n)) << e[3 & o++]))
                : ((n =
                    65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(++a)))),
                  (y[o >> 2] |= (240 | (n >> 18)) << e[3 & o++]),
                  (y[o >> 2] |= (128 | ((n >> 12) & 63)) << e[3 & o++]),
                  (y[o >> 2] |= (128 | ((n >> 6) & 63)) << e[3 & o++]),
                  (y[o >> 2] |= (128 | (63 & n)) << e[3 & o++]));
          (this.lastByteIndex = o),
            (this.bytes += o - this.start),
            o >= 64
              ? ((this.block = y[16]),
                (this.start = o - 64),
                this.hash(),
                (this.hashed = !0))
              : (this.start = o);
        }
        return (
          this.bytes > 4294967295 &&
            ((this.hBytes += (this.bytes / 4294967296) << 0),
            (this.bytes = this.bytes % 4294967296)),
          this
        );
      }
    }),
      (u.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var t = this.blocks,
            h = this.lastByteIndex;
          (t[16] = this.block),
            (t[h >> 2] |= r[3 & h]),
            (this.block = t[16]),
            h >= 56 &&
              (this.hashed || this.hash(),
              (t[0] = this.block),
              (t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0)),
            (t[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
            (t[15] = this.bytes << 3),
            this.hash();
        }
      }),
      (u.prototype.hash = function () {
        var t = this.h0,
          h = this.h1,
          i = this.h2,
          s = this.h3,
          r = this.h4,
          e = this.h5,
          a = this.h6,
          o = this.h7,
          f = this.blocks,
          y,
          u,
          c,
          p,
          l,
          b,
          d,
          w,
          A,
          B,
          v;
        for (y = 16; y < 64; ++y)
          (u =
            (((l = f[y - 15]) >>> 7) | (l << 25)) ^
            ((l >>> 18) | (l << 14)) ^
            (l >>> 3)),
            (c =
              (((l = f[y - 2]) >>> 17) | (l << 15)) ^
              ((l >>> 19) | (l << 13)) ^
              (l >>> 10)),
            (f[y] = (f[y - 16] + u + f[y - 7] + c) << 0);
        for (v = h & i, y = 0; y < 64; y += 4)
          this.first
            ? ((w = 704751109),
              (o = ((l = f[0] - 210244248) - 1521486534) << 0),
              (s = (l + 143694565) << 0),
              (this.first = !1))
            : ((u =
                ((t >>> 2) | (t << 30)) ^
                ((t >>> 13) | (t << 19)) ^
                ((t >>> 22) | (t << 10))),
              (p = (w = t & h) ^ (t & i) ^ v),
              (o =
                (s +
                  (l =
                    o +
                    (c =
                      ((r >>> 6) | (r << 26)) ^
                      ((r >>> 11) | (r << 21)) ^
                      ((r >>> 25) | (r << 7))) +
                    (d = (r & e) ^ (~r & a)) +
                    n[y] +
                    f[y])) <<
                0),
              (s = (l + (b = u + p)) << 0)),
            (u =
              ((s >>> 2) | (s << 30)) ^
              ((s >>> 13) | (s << 19)) ^
              ((s >>> 22) | (s << 10))),
            (p = (A = s & t) ^ (s & h) ^ w),
            (a =
              (i +
                (l =
                  a +
                  (c =
                    ((o >>> 6) | (o << 26)) ^
                    ((o >>> 11) | (o << 21)) ^
                    ((o >>> 25) | (o << 7))) +
                  (d = (o & r) ^ (~o & e)) +
                  n[y + 1] +
                  f[y + 1])) <<
              0),
            (u =
              (((i = (l + (b = u + p)) << 0) >>> 2) | (i << 30)) ^
              ((i >>> 13) | (i << 19)) ^
              ((i >>> 22) | (i << 10))),
            (p = (B = i & s) ^ (i & t) ^ A),
            (e =
              (h +
                (l =
                  e +
                  (c =
                    ((a >>> 6) | (a << 26)) ^
                    ((a >>> 11) | (a << 21)) ^
                    ((a >>> 25) | (a << 7))) +
                  (d = (a & o) ^ (~a & r)) +
                  n[y + 2] +
                  f[y + 2])) <<
              0),
            (u =
              (((h = (l + (b = u + p)) << 0) >>> 2) | (h << 30)) ^
              ((h >>> 13) | (h << 19)) ^
              ((h >>> 22) | (h << 10))),
            (p = (v = h & i) ^ (h & s) ^ B),
            (r =
              (t +
                (l =
                  r +
                  (c =
                    ((e >>> 6) | (e << 26)) ^
                    ((e >>> 11) | (e << 21)) ^
                    ((e >>> 25) | (e << 7))) +
                  (d = (e & a) ^ (~e & o)) +
                  n[y + 3] +
                  f[y + 3])) <<
              0),
            (t = (l + (b = u + p)) << 0);
        (this.h0 = (this.h0 + t) << 0),
          (this.h1 = (this.h1 + h) << 0),
          (this.h2 = (this.h2 + i) << 0),
          (this.h3 = (this.h3 + s) << 0),
          (this.h4 = (this.h4 + r) << 0),
          (this.h5 = (this.h5 + e) << 0),
          (this.h6 = (this.h6 + a) << 0),
          (this.h7 = (this.h7 + o) << 0);
      }),
      (u.prototype.hex = function () {
        this.finalize();
        var t = this.h0,
          h = this.h1,
          i = this.h2,
          r = this.h3,
          e = this.h4,
          n = this.h5,
          a = this.h6,
          o = this.h7,
          f =
            s[(t >> 28) & 15] +
            s[(t >> 24) & 15] +
            s[(t >> 20) & 15] +
            s[(t >> 16) & 15] +
            s[(t >> 12) & 15] +
            s[(t >> 8) & 15] +
            s[(t >> 4) & 15] +
            s[15 & t] +
            s[(h >> 28) & 15] +
            s[(h >> 24) & 15] +
            s[(h >> 20) & 15] +
            s[(h >> 16) & 15] +
            s[(h >> 12) & 15] +
            s[(h >> 8) & 15] +
            s[(h >> 4) & 15] +
            s[15 & h] +
            s[(i >> 28) & 15] +
            s[(i >> 24) & 15] +
            s[(i >> 20) & 15] +
            s[(i >> 16) & 15] +
            s[(i >> 12) & 15] +
            s[(i >> 8) & 15] +
            s[(i >> 4) & 15] +
            s[15 & i] +
            s[(r >> 28) & 15] +
            s[(r >> 24) & 15] +
            s[(r >> 20) & 15] +
            s[(r >> 16) & 15] +
            s[(r >> 12) & 15] +
            s[(r >> 8) & 15] +
            s[(r >> 4) & 15] +
            s[15 & r] +
            s[(e >> 28) & 15] +
            s[(e >> 24) & 15] +
            s[(e >> 20) & 15] +
            s[(e >> 16) & 15] +
            s[(e >> 12) & 15] +
            s[(e >> 8) & 15] +
            s[(e >> 4) & 15] +
            s[15 & e] +
            s[(n >> 28) & 15] +
            s[(n >> 24) & 15] +
            s[(n >> 20) & 15] +
            s[(n >> 16) & 15] +
            s[(n >> 12) & 15] +
            s[(n >> 8) & 15] +
            s[(n >> 4) & 15] +
            s[15 & n] +
            s[(a >> 28) & 15] +
            s[(a >> 24) & 15] +
            s[(a >> 20) & 15] +
            s[(a >> 16) & 15] +
            s[(a >> 12) & 15] +
            s[(a >> 8) & 15] +
            s[(a >> 4) & 15] +
            s[15 & a];
        return (f +=
          s[(o >> 28) & 15] +
          s[(o >> 24) & 15] +
          s[(o >> 20) & 15] +
          s[(o >> 16) & 15] +
          s[(o >> 12) & 15] +
          s[(o >> 8) & 15] +
          s[(o >> 4) & 15] +
          s[15 & o]);
      }),
      (u.prototype.toString = u.prototype.hex),
      (u.prototype.digest = function () {
        this.finalize();
        var t = this.h0,
          h = this.h1,
          i = this.h2,
          s = this.h3,
          r = this.h4,
          e = this.h5,
          n = this.h6,
          a = this.h7,
          o = [
            (t >> 24) & 255,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            (h >> 24) & 255,
            (h >> 16) & 255,
            (h >> 8) & 255,
            255 & h,
            (i >> 24) & 255,
            (i >> 16) & 255,
            (i >> 8) & 255,
            255 & i,
            (s >> 24) & 255,
            (s >> 16) & 255,
            (s >> 8) & 255,
            255 & s,
            (r >> 24) & 255,
            (r >> 16) & 255,
            (r >> 8) & 255,
            255 & r,
            (e >> 24) & 255,
            (e >> 16) & 255,
            (e >> 8) & 255,
            255 & e,
            (n >> 24) & 255,
            (n >> 16) & 255,
            (n >> 8) & 255,
            255 & n,
          ];
        return (
          o.push((a >> 24) & 255, (a >> 16) & 255, (a >> 8) & 255, 255 & a), o
        );
      }),
      (u.prototype.array = u.prototype.digest),
      (u.prototype.arrayBuffer = function () {
        this.finalize();
        var t = new ArrayBuffer(32),
          h = new DataView(t);
        return (
          h.setUint32(0, this.h0),
          h.setUint32(4, this.h1),
          h.setUint32(8, this.h2),
          h.setUint32(12, this.h3),
          h.setUint32(16, this.h4),
          h.setUint32(20, this.h5),
          h.setUint32(24, this.h6),
          h.setUint32(28, this.h7),
          t
        );
      }),
      (t._tfa.sha256 = t._tfa.sha256 || y());
  } catch (t) {}
})(window); /*! 20201108-15-RELEASE 2020-11-08 */

!(function (b, W, m) {
  try {
    var Z = "eflp",
      c = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      t = "ZW1haWw=",
      Y = [
        "MC1tYWlsLmNvbQ==",
        "MDgxNS5ydQ==",
        "MGNsaWNrZW1haWwuY29t",
        "MHduZC5uZXQ=",
        "MHduZC5vcmc=",
        "MTBtaW51dGVtYWlsLmNvbQ==",
        "MjBtaW51dGVtYWlsLmNvbQ==",
        "MnByb25nLmNvbQ==",
        "MzBtaW51dGVtYWlsLmNvbQ==",
        "M2QtcGFpbnRpbmcuY29t",
        "NHdhcmRpbmcuY29t",
        "NHdhcmRpbmcubmV0",
        "NHdhcmRpbmcub3Jn",
        "NjBtaW51dGVtYWlsLmNvbQ==",
        "Njc1aG9zdGluZy5jb20=",
        "Njc1aG9zdGluZy5uZXQ=",
        "Njc1aG9zdGluZy5vcmc=",
        "NnVybC5jb20=",
        "NzVob3N0aW5nLmNvbQ==",
        "NzVob3N0aW5nLm5ldA==",
        "NzVob3N0aW5nLm9yZw==",
        "N3RhZ3MuY29t",
        "OW94Lm5ldA==",
        "YS1iYy5uZXQ=",
        "YWZyb2JhY29uLmNvbQ==",
        "YWpheGFwcC5uZXQ=",
        "YW1pbGVnaXQuY29t",
        "YW1pcmkubmV0",
        "YW1pcmlpbmR1c3RyaWVzLmNvbQ==",
        "YW5vbmJveC5uZXQ=",
        "YW5vbnltYm94LmNvbQ==",
        "YW50aWNoZWYuY29t",
        "YW50aWNoZWYubmV0",
        "YW50aXNwYW0uZGU=",
        "YmF4b21hbGUuaHQuY3g=",
        "YmVlZm1pbGsuY29t",
        "Ymlua21haWwuY29t",
        "YmlvLW11ZXNsaS5uZXQ=",
        "Ym9ibWFpbC5pbmZv",
        "Ym9kaGkubGF3bGl0YS5jb20=",
        "Ym9mdGhldy5jb20=",
        "YnJlZm1haWwuY29t",
        "YnJvYWRiYW5kbmluamEuY29t",
        "YnNub3cubmV0",
        "YnVnbWVub3QuY29t",
        "YnVtcHltYWlsLmNvbQ==",
        "Y2FzdWFsZHguY29t",
        "Y2VudGVybWFpbC5jb20=",
        "Y2VudGVybWFpbC5uZXQ=",
        "Y2hvZ21haWwuY29t",
        "Y2hvaWNlbWFpbDEuY29t",
        "Y29vbC5mci5uZg==",
        "Y29ycmVvLmJsb2dvcy5uZXQ=",
        "Y29zbW9ycGguY29t",
        "Y291cnJpZWwuZnIubmY=",
        "Y291cnJpZWx0ZW1wb3JhaXJlLmNvbQ==",
        "Y3ViaWNsaW5rLmNvbQ==",
        "Y3Vycnl3b3JsZC5kZQ==",
        "Y3VzdC5pbg==",
        "ZGFjb29sZXN0LmNvbQ==",
        "ZGFuZGlrbWFpbC5jb20=",
        "ZGF5cmVwLmNvbQ==",
        "ZGVhZGFkZHJlc3MuY29t",
        "ZGVhZHNwYW0uY29t",
        "ZGVzcGFtLml0",
        "ZGVzcGFtbWVkLmNvbQ==",
        "ZGV2bnVsbG1haWwuY29t",
        "ZGZnaC5uZXQ=",
        "ZGlnaXRhbHNhbmN0dWFyeS5jb20=",
        "ZGlzY2FyZG1haWwuY29t",
        "ZGlzY2FyZG1haWwuZGU=",
        "RGlzcG9zYWJsZWVtYWlsYWRkcmVzc2VzOmVtYWlsbWlzZXIuY29t",
        "ZGlzcG9zYWJsZWFkZHJlc3MuY29t",
        "ZGlzcG9zZWFtYWlsLmNvbQ==",
        "ZGlzcG9zZW1haWwuY29t",
        "ZGlzcG9zdGFibGUuY29t",
        "ZG0udzNpbnRlcm5ldC5jby51a2V4YW1wbGUuY29t",
        "ZG9kZ2VpdC5jb20=",
        "ZG9kZ2l0LmNvbQ==",
        "ZG9kZ2l0Lm9yZw==",
        "ZG9uZW1haWwucnU=",
        "ZG9udHJlZy5jb20=",
        "ZG9udHNlbmRtZXNwYW0uZGU=",
        "ZHVtcC1lbWFpbC5pbmZv",
        "ZHVtcGFuZGp1bmsuY29t",
        "ZHVtcG1haWwuZGU=",
        "ZHVtcHllbWFpbC5jb20=",
        "ZTR3YXJkLmNvbQ==",
        "ZW1haWw2MC5jb20=",
        "ZW1haWxkaWVuc3QuZGU=",
        "ZW1haWxpYXMuY29t",
        "ZW1haWxpZ28uZGU=",
        "ZW1haWxpbmZpdmUuY29t",
        "ZW1haWxtaXNlci5jb20=",
        "ZW1haWxzZW5zZWkuY29t",
        "ZW1haWx0ZW1wb3JhcmlvLmNvbS5icg==",
        "ZW1haWx0by5kZQ==",
        "ZW1haWx3YXJkZW4uY29t",
        "ZW1haWx4LmF0Lmht",
        "ZW1haWx4ZmVyLmNvbQ==",
        "ZW16Lm5ldA==",
        "ZW50ZXJ0by5jb20=",
        "ZXBoZW1haWwubmV0",
        "ZXRyYW5xdWlsLmNvbQ==",
        "ZXRyYW5xdWlsLm5ldA==",
        "ZXRyYW5xdWlsLm9yZw==",
        "ZXhwbG9kZW1haWwuY29t",
        "ZmFrZWluYm94LmNvbQ==",
        "ZmFrZWluZm9ybWF0aW9uLmNvbQ==",
        "ZmFzdGFjdXJhLmNvbQ==",
        "ZmFzdGNoZXZ5LmNvbQ==",
        "ZmFzdGNocnlzbGVyLmNvbQ==",
        "ZmFzdGthd2FzYWtpLmNvbQ==",
        "ZmFzdG1hemRhLmNvbQ==",
        "ZmFzdG1pdHN1YmlzaGkuY29t",
        "ZmFzdG5pc3Nhbi5jb20=",
        "ZmFzdHN1YmFydS5jb20=",
        "ZmFzdHN1enVraS5jb20=",
        "ZmFzdHRveW90YS5jb20=",
        "ZmFzdHlhbWFoYS5jb20=",
        "Zmlsem1haWwuY29t",
        "Zml6bWFpbC5jb20=",
        "ZnIzM21haWwuaW5mbw==",
        "ZnJhcG1haWwuY29t",
        "ZnJvbnQxNC5vcmc=",
        "ZnV4MHJpbmdkdWguY29t",
        "Z2FybGljbGlmZS5jb20=",
        "Z2V0MW1haWwuY29t",
        "Z2V0Mm1haWwuZnI=",
        "Z2V0b25lbWFpbC5jb20=",
        "Z2V0b25lbWFpbC5uZXQ=",
        "Z2hvc3R0ZXh0ZXIuZGU=",
        "Z2lybHN1bmRlcnRoZWluZmx1ZW5jZS5jb20=",
        "Z2lzaHB1cHB5LmNvbQ==",
        "Z293aWtpYm9va3MuY29t",
        "Z293aWtpY2FtcHVzLmNvbQ==",
        "Z293aWtpY2Fycy5jb20=",
        "Z293aWtpZmlsbXMuY29t",
        "Z293aWtpZ2FtZXMuY29t",
        "Z293aWtpbXVzaWMuY29t",
        "Z293aWtpbmV0d29yay5jb20=",
        "Z293aWtpdHJhdmVsLmNvbQ==",
        "Z293aWtpdHYuY29t",
        "Z3JlYXQtaG9zdC5pbg==",
        "Z3JlZW5zbG90aC5jb20=",
        "Z3Nydi5jby51aw==",
        "Z3VlcmlsbGFtYWlsLmJpeg==",
        "Z3VlcmlsbGFtYWlsLmNvbQ==",
        "Z3VlcmlsbGFtYWlsLm5ldA==",
        "Z3VlcmlsbGFtYWlsLm9yZw==",
        "Z3VlcnJpbGxhbWFpbC5iaXo=",
        "Z3VlcnJpbGxhbWFpbC5jb20=",
        "Z3VlcnJpbGxhbWFpbC5kZQ==",
        "Z3VlcnJpbGxhbWFpbC5uZXQ=",
        "Z3VlcnJpbGxhbWFpbC5vcmc=",
        "Z3VlcnJpbGxhbWFpbGJsb2NrLmNvbQ==",
        "aC5taW50ZW1haWwuY29t",
        "aDhzLm9yZw==",
        "aGFsdG9zcGFtLmNvbQ==",
        "aGF0ZXNwYW0ub3Jn",
        "aGlkZW1haWwuZGU=",
        "aG9jaHNpdHplLmNvbQ==",
        "aG90cG9wLmNvbQ==",
        "aHVsYXBsYS5kZQ==",
        "aWVhdHNwYW0uZXU=",
        "aWVhdHNwYW0uaW5mbw==",
        "aWhhdGV5b3VhbG90LmluZm8=",
        "aWhlYXJ0c3BhbS5vcmc=",
        "aW1haWxzLmluZm8=",
        "aW5ib3hjbGVhbi5jb20=",
        "aW5ib3hjbGVhbi5vcmc=",
        "aW5jb2duaXRvbWFpbC5jb20=",
        "aW5jb2duaXRvbWFpbC5uZXQ=",
        "aW5jb2duaXRvbWFpbC5vcmc=",
        "aW5zb3JnLW1haWwuaW5mbw==",
        "aXBvby5vcmc=",
        "aXJpc2gybWUuY29t",
        "aXdpLm5ldA==",
        "amV0YWJsZS5jb20=",
        "amV0YWJsZS5mci5uZg==",
        "amV0YWJsZS5uZXQ=",
        "amV0YWJsZS5vcmc=",
        "am54am4uY29t",
        "anVuazFlLmNvbQ==",
        "a2FzbWFpbC5jb20=",
        "a2FzcG9wLmNvbQ==",
        "a2VlcG15bWFpbC5jb20=",
        "a2lsbG1haWwuY29t",
        "a2lsbG1haWwubmV0",
        "a2lyLmNoLnRj",
        "a2xhc3NtYXN0ZXIuY29t",
        "a2xhc3NtYXN0ZXIubmV0",
        "a2x6bGsuY29t",
        "a3VsdHVyYmV0cmllYi5pbmZv",
        "a3VyemVwb3N0LmRl",
        "bGV0dGhlbWVhdHNwYW0uY29t",
        "bGhzZHYuY29t",
        "bGlmZWJ5Zm9vZC5jb20=",
        "bGluazJtYWlsLm5ldA==",
        "bGl0ZWRyb3AuY29t",
        "bG9sLm92cG4udG8=",
        "bG9va3VnbHkuY29t",
        "bG9wbC5jby5jYw==",
        "bG9ydGVtYWlsLmRr",
        "bHI3OC5jb20=",
        "bTRpbHdlYi5pbmZv",
        "bWFib2FyZC5jb20=",
        "bWFpbC10ZW1wb3JhaXJlLmZy",
        "bWFpbC5ieQ==",
        "bWFpbC5tZXppbWFnZXMubmV0",
        "bWFpbDJyc3Mub3Jn",
        "bWFpbDMzMy5jb20=",
        "bWFpbDR0cmFzaC5jb20=",
        "bWFpbGJpZG9uLmNvbQ==",
        "bWFpbGJsb2Nrcy5jb20=",
        "bWFpbGNhdGNoLmNvbQ==",
        "bWFpbGVhdGVyLmNvbQ==",
        "bWFpbGV4cGlyZS5jb20=",
        "bWFpbGZyZWVvbmxpbmUuY29t",
        "bWFpbGluOHIuY29t",
        "bWFpbGluYXRlci5jb20=",
        "bWFpbGluYXRvci5jb20=",
        "bWFpbGluYXRvci5uZXQ=",
        "bWFpbGluYXRvcjIuY29t",
        "bWFpbGluY3ViYXRvci5jb20=",
        "bWFpbG1lLmly",
        "bWFpbG1lLmx2",
        "bWFpbG1ldHJhc2guY29t",
        "bWFpbG1vYXQuY29t",
        "bWFpbG5hdG9yLmNvbQ==",
        "bWFpbG5lc2lhLmNvbQ==",
        "bWFpbG51bGwuY29t",
        "bWFpbHNoZWxsLmNvbQ==",
        "bWFpbHNpcGhvbi5jb20=",
        "bWFpbHNsaXRlLmNvbQ==",
        "bWFpbHppbGxhLmNvbQ==",
        "bWFpbHppbGxhLm9yZw==",
        "bWJ4LmNj",
        "bWVnYS56aWsuZGo=",
        "bWVpbnNwYW1zY2h1dHouZGU=",
        "bWVsdG1haWwuY29t",
        "bWVzc2FnZWJlYW1lci5kZQ==",
        "bWllcmRhbWFpbC5jb20=",
        "bWludGVtYWlsLmNvbQ==",
        "bW9idXJsLmNvbQ==",
        "bW9uY291cnJpZXIuZnIubmY=",
        "bW9uZW1haWwuZnIubmY=",
        "bW9ubWFpbC5mci5uZg==",
        "bXNhLm1pbnNtYWlsLmNvbQ==",
        "bXQyMDA5LmNvbQ==",
        "bXgwLnd3d25ldy5ldQ==",
        "bXljbGVhbmluYm94Lm5ldA==",
        "bXlwYXJ0eWNsaXAuZGU=",
        "bXlwaGFudG9tZW1haWwuY29t",
        "bXlzcGFjZWluYy5jb20=",
        "bXlzcGFjZWluYy5uZXQ=",
        "bXlzcGFjZWluYy5vcmc=",
        "bXlzcGFjZXBpbXBlZHVwLmNvbQ==",
        "bXlzcGFtbGVzcy5jb20=",
        "bXl0cmFzaG1haWwuY29t",
        "bmVvbWFpbGJveC5jb20=",
        "bmVwd2suY29t",
        "bmVydm1pY2gubmV0",
        "bmVydnRtaWNoLm5ldA==",
        "bmV0bWFpbHMuY29t",
        "bmV0bWFpbHMubmV0",
        "bmV0emlkaW90LmRl",
        "bmV2ZXJib3guY29t",
        "bm8tc3BhbS53cw==",
        "bm9idWxrLmNvbQ==",
        "bm9jbGlja2VtYWlsLmNvbQ==",
        "bm9nbWFpbHNwYW0uaW5mbw==",
        "bm9tYWlsLnhsLmN4",
        "bm9tYWlsMm1lLmNvbQ==",
        "bm9tb3Jlc3BhbWVtYWlscy5jb20=",
        "bm9zcGFtLnplLnRj",
        "bm9zcGFtNC51cw==",
        "bm9zcGFtZm9yLnVz",
        "bm9zcGFtdGhhbmtzLmluZm8=",
        "bm90bWFpbGluYXRvci5jb20=",
        "bm93bXltYWlsLmNvbQ==",
        "bnVyZnVlcnNwYW0uZGU=",
        "bnVzLmVkdS5zZw==",
        "bndsZHguY29t",
        "b2JqZWN0bWFpbC5jb20=",
        "b2JvYmJvLmNvbQ==",
        "b25lb2ZmZW1haWwuY29t",
        "b25ld2F5bWFpbC5jb20=",
        "b25saW5lLm1z",
        "b29waS5vcmc=",
        "b3JkaW5hcnlhbWVyaWNhbi5uZXQ=",
        "b3RoZXJpbmJveC5jb20=",
        "b3Vya2xpcHMuY29t",
        "b3V0bGF3c3BhbS5jb20=",
        "b3Zwbi50bw==",
        "b3dscGljLmNvbQ==",
        "cGFuY2FrZW1haWwuY29t",
        "cGltcGVkdXBteXNwYWNlLmNvbQ==",
        "cGpqa3AuY29t",
        "cG9saXRpa2VyY2x1Yi5kZQ==",
        "cG9vZnkub3Jn",
        "cG9va21haWwuY29t",
        "cHJpdmFjeS5uZXQ=",
        "cHJveHltYWlsLmV1",
        "cHJ0bnguY29t",
        "cHVua2Fzcy5jb20=",
        "UHV0VGhpc0luWW91clNwYW1EYXRhYmFzZS5jb20=",
        "cXEuY29t",
        "cXVpY2tpbmJveC5jb20=",
        "cmNwdC5hdA==",
        "cmVjb2RlLm1l",
        "cmVjdXJzb3IubmV0",
        "cmVnYnlwYXNzLmNvbQ==",
        "cmVnYnlwYXNzLmNvbXNhZmUtbWFpbC5uZXQ=",
        "cmVqZWN0bWFpbC5jb20=",
        "cmtsaXBzLmNvbQ==",
        "cm1xa3IubmV0",
        "cnBwa24uY29t",
        "cnRydHIuY29t",
        "czBueS5uZXQ=",
        "c2FmZS1tYWlsLm5ldA==",
        "c2FmZXJzaWdudXAuZGU=",
        "c2FmZXR5bWFpbC5pbmZv",
        "c2FmZXR5cG9zdC5kZQ==",
        "c2FuZGVsZi5kZQ==",
        "c2F5bm90b3NwYW1zLmNvbQ==",
        "c2VsZmRlc3RydWN0aW5nbWFpbC5jb20=",
        "U2VuZFNwYW1IZXJlLmNvbQ==",
        "c2hhcmtsYXNlcnMuY29t",
        "c2hpZnRtYWlsLmNvbQ==",
        "c2hpdG1haWwubWU=",
        "c2hvcnRtYWlsLm5ldA==",
        "c2libWFpbC5jb20=",
        "c2tlZWZtYWlsLmNvbQ==",
        "c2xhc2twb3N0LnNl",
        "c2xvcHNib3guY29t",
        "c21lbGxmZWFyLmNvbQ==",
        "c25ha2VtYWlsLmNvbQ==",
        "c25lYWtlbWFpbC5jb20=",
        "c29maW1haWwuY29t",
        "c29mb3J0LW1haWwuZGU=",
        "c29nZXR0aGlzLmNvbQ==",
        "c29vZG9uaW1zLmNvbQ==",
        "c3BhbS5sYQ==",
        "c3BhbS5zdQ==",
        "c3BhbWF2ZXJ0LmNvbQ==",
        "c3BhbWJvYi5jb20=",
        "c3BhbWJvYi5uZXQ=",
        "c3BhbWJvYi5vcmc=",
        "c3BhbWJvZy5jb20=",
        "c3BhbWJvZy5kZQ==",
        "c3BhbWJvZy5ydQ==",
        "c3BhbWJveC5pbmZv",
        "c3BhbWJveC5pcmlzaHNwcmluZ3JlYWx0eS5jb20=",
        "c3BhbWJveC51cw==",
        "c3BhbWNhbm5vbi5jb20=",
        "c3BhbWNhbm5vbi5uZXQ=",
        "c3BhbWNlcm8uY29t",
        "c3BhbWNvbi5vcmc=",
        "c3BhbWNvcnB0YXN0aWMuY29t",
        "c3BhbWNvd2JveS5jb20=",
        "c3BhbWNvd2JveS5uZXQ=",
        "c3BhbWNvd2JveS5vcmc=",
        "c3BhbWRheS5jb20=",
        "c3BhbWV4LmNvbQ==",
        "c3BhbWZyZWUyNC5jb20=",
        "c3BhbWZyZWUyNC5kZQ==",
        "c3BhbWZyZWUyNC5ldQ==",
        "c3BhbWZyZWUyNC5pbmZv",
        "c3BhbWZyZWUyNC5uZXQ=",
        "c3BhbWZyZWUyNC5vcmc=",
        "c3BhbWdvdXJtZXQuY29t",
        "c3BhbWdvdXJtZXQubmV0",
        "c3BhbWdvdXJtZXQub3Jn",
        "U3BhbUhlcmVMb3RzLmNvbQ==",
        "U3BhbUhlcmVQbGVhc2UuY29t",
        "c3BhbWhvbGUuY29t",
        "c3BhbWlmeS5jb20=",
        "c3BhbWluYXRvci5kZQ==",
        "c3BhbWtpbGwuaW5mbw==",
        "c3BhbWwuY29t",
        "c3BhbWwuZGU=",
        "c3BhbW1vdGVsLmNvbQ==",
        "c3BhbW9ib3guY29t",
        "c3BhbW9mZi5kZQ==",
        "c3BhbXNsaWNlci5jb20=",
        "c3BhbXNwb3QuY29t",
        "c3BhbXRoaXMuY28udWs=",
        "c3BhbXRoaXNwbGVhc2UuY29t",
        "c3BhbXRyYWlsLmNvbQ==",
        "c3BlZWQuMXMuZnI=",
        "c3VwZXJncmVhdG1haWwuY29t",
        "c3VwZXJtYWlsZXIuanA=",
        "c3VyZW1haWwuaW5mbw==",
        "dGVld2Fycy5vcmc=",
        "dGVsZXdvcm0uY29t",
        "dGVtcGFsaWFzLmNvbQ==",
        "dGVtcGUtbWFpbC5jb20=",
        "dGVtcGVtYWlsLmJpeg==",
        "dGVtcGVtYWlsLmNvbQ==",
        "VGVtcEVNYWlsLm5ldA==",
        "dGVtcGluYm94LmNvLnVr",
        "dGVtcGluYm94LmNvbQ==",
        "dGVtcG1haWwuaXQ=",
        "dGVtcG1haWwyLmNvbQ==",
        "dGVtcG9tYWlsLmZy",
        "dGVtcG9yYXJpbHkuZGU=",
        "dGVtcG9yYXJpb2VtYWlsLmNvbS5icg==",
        "dGVtcG9yYXJ5ZW1haWwubmV0",
        "dGVtcG9yYXJ5Zm9yd2FyZGluZy5jb20=",
        "dGVtcG9yYXJ5aW5ib3guY29t",
        "dGhhbmtzbm9zcGFtLmluZm8=",
        "dGhhbmt5b3UyMDEwLmNvbQ==",
        "dGhpc2lzbm90bXlyZWFsZW1haWwuY29t",
        "dGhyb3dhd2F5ZW1haWxhZGRyZXNzLmNvbQ==",
        "dGlsaWVuLmNvbQ==",
        "dG1haWxpbmF0b3IuY29t",
        "dHJhZGVybWFpbC5pbmZv",
        "dHJhc2gtYW1pbC5jb20=",
        "dHJhc2gtbWFpbC5hdA==",
        "dHJhc2gtbWFpbC5jb20=",
        "dHJhc2gtbWFpbC5kZQ==",
        "dHJhc2gyMDA5LmNvbQ==",
        "dHJhc2hlbWFpbC5kZQ==",
        "dHJhc2htYWlsLmF0",
        "dHJhc2htYWlsLmNvbQ==",
        "dHJhc2htYWlsLmRl",
        "dHJhc2htYWlsLm1l",
        "dHJhc2htYWlsLm5ldA==",
        "dHJhc2htYWlsLm9yZw==",
        "dHJhc2htYWlsLndz",
        "dHJhc2htYWlsZXIuY29t",
        "dHJhc2h5bWFpbC5jb20=",
        "dHJhc2h5bWFpbC5uZXQ=",
        "dHJpbGxpYW5wcm8uY29t",
        "dHVydWFsLmNvbQ==",
        "dHdpbm1haWwuZGU=",
        "dHlsZGQuY29t",
        "dWdnc3JvY2suY29t",
        "dXBsaWZ0bm93LmNvbQ==",
        "dXBsaXBodC5jb20=",
        "dmVub21wZW4uY29t",
        "dmVyeXJlYWxlbWFpbC5jb20=",
        "dmlkaXRhZy5jb20=",
        "dmlld2Nhc3RtZWRpYS5jb20=",
        "dmlld2Nhc3RtZWRpYS5uZXQ=",
        "dmlld2Nhc3RtZWRpYS5vcmc=",
        "d2VibTRpbC5pbmZv",
        "d2Vnd2VyZmFkcmVzc2UuZGU=",
        "d2Vnd2VyZmVtYWlsLmRl",
        "d2Vnd2VyZm1haWwuZGU=",
        "d2Vnd2VyZm1haWwubmV0",
        "d2Vnd2VyZm1haWwub3Jn",
        "d2V0cmFpbmJheWFyZWEuY29t",
        "d2V0cmFpbmJheWFyZWEub3Jn",
        "d2g0Zi5vcmc=",
        "d2h5c3BhbS5tZQ==",
        "d2lsbHNlbGZkZXN0cnVjdC5jb20=",
        "d2luZW1hdmVuLmluZm8=",
        "d3JvbmdoZWFkLmNvbQ==",
        "d3V6dXAubmV0",
        "d3V6dXBtYWlsLm5ldA==",
        "d3d3LmU0d2FyZC5jb20=",
        "d3d3Lmdpc2hwdXBweS5jb20=",
        "d3d3Lm1haWxpbmF0b3IuY29t",
        "d3d3bmV3LmV1",
        "eGFnbG9vLmNvbQ==",
        "eGVtYXBzLmNvbQ==",
        "eGVudHMuY29t",
        "eG1haWx5LmNvbQ==",
        "eG94eS5uZXQ=",
        "eWVwLml0",
        "eW9nYW1hdmVuLmNvbQ==",
        "eW9wbWFpbC5jb20=",
        "eW9wbWFpbC5mcg==",
        "eW9wbWFpbC5uZXQ=",
        "eXBtYWlsLndlYmFybmFrLmZyLmV1Lm9yZw==",
        "eXV1cm9rLmNvbQ==",
        "emVobm1pbnV0ZW5tYWlsLmRl",
        "emlwcHltYWlsLmluZm8=",
        "em9heGUuY29t",
        "em9lbWFpbC5vcmc=",
      ];
    function l(b) {
      var W = window.atob(t);
      return (
        (b && b.type && -1 != b.type.toLowerCase().indexOf(W)) ||
        (b.id && -1 != b.id.toLowerCase().indexOf(W)) ||
        (b.name && -1 != b.name.toLowerCase().indexOf(W))
      );
    }
    function u(b) {
      return (
        !!c.test(String(b).toLowerCase()) && -1 === Y.indexOf(window.btoa(d(b)))
      );
    }
    function d(b) {
      var W = b.indexOf("@");
      return b.slice(W + 1, b.length);
    }
    (m.tfaEid = {
      initialized: !1,
      eids: [],
      getEids: function () {
        return this.eids;
      },
      crawlEids: function () {
        if (b._tfa.sha256)
          for (
            var Z = W.getElementsByTagName("input"), c = 0;
            c < Z.length;
            c++
          ) {
            var t = Z[c];
            l(t) &&
              t.addEventListener("blur", function (b) {
                m.tfaEid.logEid(this.value);
              });
          }
      },
      logEid: function (W) {
        var m;
        u((W = W.toLowerCase())) &&
          b._tfa.sha256 &&
          ((m = b._tfa.sha256.create().update(W).toString()),
          this.eids.push(m),
          this.sendEidToTrc(m));
      },
      sendEidToTrc: function (W) {
        if (b._tfa.config.safeGet("tfa-eid:send-eid-to-trc", !1)) {
          var c,
            t = "https:",
            Y = [],
            l = m.tfaUserId ? m.tfaUserId.getUserId() : null;
          if (W && l)
            return (
              m.tfaUtil.safeAddParam("uils", l, Y),
              m.tfaUtil.safeAddParam(Z, W, Y),
              (c = new Image()),
              b._tfa.config.safeGet(
                "tfa:add-referrer-policy-when-firing-pixel",
                !0
              ) && (c.referrerPolicy = "no-referrer-when-downgrade"),
              (c.src = t + "//trc.taboola.com/sg/tfa-eid/1/um/?" + Y.join("&")),
              c
            );
        }
      },
      init: function () {
        this.initialized ||
          (b.addEventListener("load", this.crawlEids), (this.initialized = !0));
      },
    }),
      m.tfaEid.init();
  } catch (b) {}
})(
  window,
  document,
  window["TFASC".indexOf("{jsScope}") >= 0 ? "TRC" : "TFASC"]
);
