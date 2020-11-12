!(function (e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, n) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (i.r = function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 39));
})([
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    });
    Object.setPrototypeOf || Array;
    Object.assign;
    function n(e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            c(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function c(e) {
          e.done
            ? o(e.value)
            : new i(function (t) {
                t(e.value);
              }).then(r, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    });
    class n {
      static shouldLog() {
        try {
          if ("undefined" == typeof window || void 0 === window.localStorage)
            return !1;
          const e = window.localStorage.getItem("loglevel");
          return !(!e || "trace" !== e.toLowerCase());
        } catch (e) {
          return !1;
        }
      }
      static setLevel(e) {
        if ("undefined" != typeof window && void 0 !== window.localStorage)
          try {
            window.localStorage.setItem("loglevel", e),
              (n.proxyMethodsCreated = void 0),
              n.createProxyMethods();
          } catch (e) {
            return;
          }
      }
      static createProxyMethods() {
        if (void 0 !== n.proxyMethodsCreated) return;
        n.proxyMethodsCreated = !0;
        const e = {
          log: "debug",
          trace: "trace",
          info: "info",
          warn: "warn",
          error: "error",
        };
        for (const t of Object.keys(e)) {
          const i = void 0 !== console[t],
            o = e[t],
            s = i && (n.shouldLog() || "error" === o);
          n[o] = s ? console[t].bind(console) : function () {};
        }
      }
    }
    n.createProxyMethods();
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "g", function () {
      return p;
    }),
      i.d(t, "w", function () {
        return h;
      }),
      i.d(t, "c", function () {
        return f;
      }),
      i.d(t, "q", function () {
        return m;
      }),
      i.d(t, "y", function () {
        return b;
      }),
      i.d(t, "j", function () {
        return S;
      }),
      i.d(t, "s", function () {
        return v;
      }),
      i.d(t, "r", function () {
        return O;
      }),
      i.d(t, "b", function () {
        return y;
      }),
      i.d(t, "e", function () {
        return w;
      }),
      i.d(t, "a", function () {
        return E;
      }),
      i.d(t, "v", function () {
        return P;
      }),
      i.d(t, "o", function () {
        return I;
      }),
      i.d(t, "k", function () {
        return C;
      }),
      i.d(t, "i", function () {
        return T;
      }),
      i.d(t, "t", function () {
        return A;
      }),
      i.d(t, "x", function () {
        return N;
      }),
      i.d(t, "f", function () {
        return M;
      }),
      i.d(t, "z", function () {
        return k;
      }),
      i.d(t, "u", function () {
        return x;
      }),
      i.d(t, "n", function () {
        return _;
      }),
      i.d(t, "d", function () {
        return R;
      }),
      i.d(t, "p", function () {
        return D;
      }),
      i.d(t, "m", function () {
        return U;
      }),
      i.d(t, "l", function () {
        return W;
      }),
      i.d(t, "h", function () {
        return B;
      });
    var n = i(0),
      o = i(4),
      s = i(6),
      r = (i(3), i(1)),
      a = i(9),
      c = i(24),
      l = i(31),
      d = i(5),
      u = i(8),
      g = i.n(u);
    function p(e) {
      return l.a.decodeHtmlEntities(e);
    }
    function h(e) {
      var t = document.querySelectorAll(e);
      if (t.length > 0)
        for (let e = 0; e < t.length; e++) {
          const i = t[e].parentNode;
          i && i.removeChild(t[e]);
        }
    }
    function f() {
      return n.a(this, void 0, void 0, function* () {
        return new Promise((e) => {
          OneSignal.initialized
            ? e()
            : OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, e);
        });
      });
    }
    function m() {
      return a.a.isUsingSubscriptionWorkaround();
    }
    function b(e = !1) {
      return n.a(this, void 0, void 0, function* () {
        return c.a.triggerNotificationPermissionChanged(e);
      });
    }
    function S(e, ...t) {
      if (e) return e.apply(null, t);
    }
    function v(e, ...t) {
      return a.a.logMethodCall(e, ...t);
    }
    function O(e) {
      return (
        !!e &&
        !!e.match(
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        )
      );
    }
    function y(e, t, i) {
      let n;
      if (!(n = "string" == typeof e ? document.querySelector(e) : e))
        throw new Error(
          `${e} must be a CSS selector string or DOM Element object.`
        );
      n.insertAdjacentHTML(t, i);
    }
    function w(e) {
      if ("string" == typeof e) {
        const t = document.querySelector(e);
        if (null === t)
          throw new Error(`Cannot find element with selector "${e}"`);
        for (; t.firstChild; ) t.removeChild(t.firstChild);
      } else {
        if ("object" != typeof e)
          throw new Error(
            `${e} must be a CSS selector string or DOM Element object.`
          );
        for (; e.firstChild; ) e.removeChild(e.firstChild);
      }
    }
    function E(e, t) {
      if ("string" == typeof e) {
        const i = document.querySelector(e);
        if (null === i)
          throw new Error(`Cannot find element with selector "${e}"`);
        i.classList.add(t);
      } else {
        if ("object" != typeof e)
          throw new Error(
            `${e} must be a CSS selector string or DOM Element object.`
          );
        e.classList.add(t);
      }
    }
    function P(e, t) {
      if ("string" == typeof e) {
        const i = document.querySelector(e);
        if (null === i)
          throw new Error(`Cannot find element with selector "${e}"`);
        i.classList.remove(t);
      } else {
        if ("object" != typeof e)
          throw new Error(
            `${e} must be a CSS selector string or DOM Element object.`
          );
        e.classList.remove(t);
      }
    }
    function I(e, t) {
      if ("string" == typeof e) {
        const i = document.querySelector(e);
        if (null === i)
          throw new Error(`Cannot find element with selector "${e}"`);
        return i.classList.contains(t);
      }
      if ("object" == typeof e) return e.classList.contains(t);
      throw new Error(
        `${e} must be a CSS selector string or DOM Element object.`
      );
    }
    function C(e) {
      return d.a.getConsoleStyle(e);
    }
    function T(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    }
    function A() {
      return Promise.resolve();
    }
    function N(e, t) {
      return d.a.timeoutPromise(e, t);
    }
    function M(e, t) {
      return d.a.contains(e, t);
    }
    function k() {
      return (
        r.a.warn("OneSignal: Unsubscribing from push."),
        o.a.getWindowEnv() !== s.a.ServiceWorker
          ? self.registration.pushManager.getSubscription().then((e) => {
              if (e) return e.unsubscribe();
              throw new Error("Cannot unsubscribe because not subscribed.");
            })
          : m()
          ? new Promise((e, t) => {
              r.a.debug(
                "Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame."
              ),
                OneSignal.proxyFrameHost.message(
                  OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH,
                  null,
                  (i) => {
                    r.a.debug(
                      "Unsubscribe from push succesfully remotely executed."
                    ),
                      i.data ===
                      OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE
                        ? e()
                        : t("Failed to remotely unsubscribe from push.");
                  }
                );
            })
          : navigator.serviceWorker && navigator.serviceWorker.controller
          ? navigator.serviceWorker.ready
              .then((e) => e.pushManager)
              .then((e) => e.getSubscription())
              .then((e) => (e ? e.unsubscribe() : Promise.resolve()))
          : Promise.resolve()
      );
    }
    function x(e, t, i, n = !1) {
      if (
        (t || r.a.error("Cannot call on() with no event: ", t),
        i || r.a.error("Cannot call on() with no task: ", i),
        "string" == typeof e)
      ) {
        let n = document.querySelectorAll(e);
        if (n.length > 0) for (let e = 0; e < n.length; e++) x(n[e], t, i);
      } else if (
        ((s = e), "[object Array]" === Object.prototype.toString.call(s))
      )
        for (let n = 0; n < e.length; n++) x(e[n], t, i);
      else {
        if ("object" != typeof e)
          throw new Error(
            `${e} must be a CSS selector string or DOM Element object.`
          );
        var o = function (t) {
          var s = function () {
            e.removeEventListener(t.type, o);
          };
          n || s(), i(t, s);
        };
        e.addEventListener(t, o);
      }
      var s;
    }
    function _() {
      return window.__oneSignalSdkLoadCount || 0;
    }
    function R(e, t) {
      return n.a(this, void 0, void 0, function* () {
        return yield new Promise((i) => {
          OneSignal.emitter.once(e, (e) => {
            if (t) {
              t(e) && i(e);
            } else i(e);
          });
        });
      });
    }
    function D() {
      window.__oneSignalSdkLoadCount = _() + 1;
    }
    function U(e) {
      return e
        ? g.a.safari && e.safari
          ? e.safari
          : g.a.firefox && e.firefox
          ? e.firefox
          : e.chrome || e.firefox || e.safari || "default-icon"
        : "default-icon";
    }
    function W(e) {
      const t = document.querySelector(e);
      return (
        t ||
        (r.a.debug(`No instance of ${e} found. Returning stub.`),
        document.createElement("div"))
      );
    }
    function B(e) {
      return JSON.parse(JSON.stringify(e));
    }
  },
  function (e, t, i) {
    "use strict";
    var n = i(0),
      o = i(25),
      s = i(36);
    class r {}
    class a {}
    var c,
      l,
      d = i(35),
      u = i(30),
      g = i(6),
      p = i(29),
      h = i(15),
      f = i(4),
      m = i(9),
      b = i(5),
      S = i(1);
    i.d(t, "a", function () {
      return v;
    }),
      ((l = c || (c = {}))[(l.SET = 0)] = "SET");
    class v {
      constructor(e) {
        (this.databaseName = e),
          (this.emitter = new o.a()),
          (this.database = new s.a(this.databaseName));
      }
      static resetInstance() {
        v.databaseInstance = null;
      }
      static get singletonInstance() {
        return (
          v.databaseInstanceName ||
            (v.databaseInstanceName = "ONE_SIGNAL_SDK_DB"),
          v.databaseInstance ||
            (v.databaseInstance = new v(v.databaseInstanceName)),
          v.databaseInstance
        );
      }
      static applyDbResultFilter(e, t, i) {
        switch (e) {
          case "Options":
            return i && t ? i.value : i && !t ? i : null;
          case "Ids":
            return i && t ? i.id : i && !t ? i : null;
          case "NotificationOpened":
            return i && t
              ? { data: i.data, timestamp: i.timestamp }
              : i && !t
              ? i
              : null;
          default:
            return i || null;
        }
      }
      shouldUsePostmam() {
        return (
          f.a.getWindowEnv() !== g.a.ServiceWorker &&
          m.b.isUsingSubscriptionWorkaround() &&
          f.a.getTestEnv() === u.a.None
        );
      }
      get(e, t) {
        return n.a(this, void 0, void 0, function* () {
          if (this.shouldUsePostmam())
            return yield new Promise((i) =>
              n.a(this, void 0, void 0, function* () {
                OneSignal.proxyFrameHost.message(
                  OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET,
                  [{ table: e, key: t }],
                  (e) => {
                    const t = e.data[0];
                    i(t);
                  }
                );
              })
            );
          {
            const i = yield this.database.get(e, t);
            return v.applyDbResultFilter(e, t, i);
          }
        });
      }
      getAll(e) {
        return n.a(this, void 0, void 0, function* () {
          if (this.shouldUsePostmam())
            return yield new Promise((t) =>
              n.a(this, void 0, void 0, function* () {
                OneSignal.proxyFrameHost.message(
                  OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL,
                  { table: e },
                  (e) => {
                    const i = e.data;
                    t(i);
                  }
                );
              })
            );
          return yield this.database.getAll(e);
        });
      }
      put(e, t) {
        return n.a(this, void 0, void 0, function* () {
          yield new Promise((i, o) =>
            n.a(this, void 0, void 0, function* () {
              f.a.getWindowEnv() !== g.a.ServiceWorker &&
              m.b.isUsingSubscriptionWorkaround() &&
              f.a.getTestEnv() === u.a.None
                ? OneSignal.proxyFrameHost.message(
                    OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT,
                    [{ table: e, keypath: t }],
                    (n) => {
                      n.data ===
                      OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE
                        ? i()
                        : o(
                            `(Database) Attempted remote IndexedDB put(${e}, ${t}), but did not get success response.`
                          );
                    }
                  )
                : (yield this.database.put(e, t), i());
            })
          ),
            this.emitter.emit(v.EVENTS.SET, t);
        });
      }
      remove(e, t) {
        return f.a.getWindowEnv() !== g.a.ServiceWorker &&
          m.b.isUsingSubscriptionWorkaround() &&
          f.a.getTestEnv() === u.a.None
          ? new Promise((i, n) => {
              OneSignal.proxyFrameHost.message(
                OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE,
                [{ table: e, keypath: t }],
                (o) => {
                  o.data ===
                  OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE
                    ? i()
                    : n(
                        `(Database) Attempted remote IndexedDB remove(${e}, ${t}), but did not get success response.`
                      );
                }
              );
            })
          : this.database.remove(e, t);
      }
      getAppConfig() {
        return n.a(this, void 0, void 0, function* () {
          const e = {},
            t = yield this.get("Ids", "appId");
          return (
            (e.appId = t),
            (e.subdomain = yield this.get("Options", "subdomain")),
            (e.vapidPublicKey = yield this.get("Options", "vapidPublicKey")),
            (e.emailAuthRequired = yield this.get(
              "Options",
              "emailAuthRequired"
            )),
            e
          );
        });
      }
      getExternalUserId() {
        return n.a(this, void 0, void 0, function* () {
          return yield this.get("Ids", "externalUserId");
        });
      }
      setExternalUserId(e) {
        return n.a(this, void 0, void 0, function* () {
          const t = b.b.getValueOrDefault(e, "");
          "" === t
            ? yield this.remove("Ids", "externalUserId")
            : yield this.put("Ids", { type: "externalUserId", id: t });
        });
      }
      setAppConfig(e) {
        return n.a(this, void 0, void 0, function* () {
          e.appId && (yield this.put("Ids", { type: "appId", id: e.appId })),
            e.subdomain &&
              (yield this.put("Options", {
                key: "subdomain",
                value: e.subdomain,
              })),
            !0 === e.httpUseOneSignalCom
              ? yield this.put("Options", {
                  key: "httpUseOneSignalCom",
                  value: !0,
                })
              : !1 === e.httpUseOneSignalCom &&
                (yield this.put("Options", {
                  key: "httpUseOneSignalCom",
                  value: !1,
                })),
            !0 === e.emailAuthRequired
              ? yield this.put("Options", {
                  key: "emailAuthRequired",
                  value: !0,
                })
              : !1 === e.emailAuthRequired &&
                (yield this.put("Options", {
                  key: "emailAuthRequired",
                  value: !1,
                })),
            e.vapidPublicKey &&
              (yield this.put("Options", {
                key: "vapidPublicKey",
                value: e.vapidPublicKey,
              }));
        });
      }
      getAppState() {
        return n.a(this, void 0, void 0, function* () {
          const e = new r();
          return (
            (e.defaultNotificationUrl = yield this.get(
              "Options",
              "defaultUrl"
            )),
            (e.defaultNotificationTitle = yield this.get(
              "Options",
              "defaultTitle"
            )),
            (e.lastKnownPushEnabled = yield this.get(
              "Options",
              "isPushEnabled"
            )),
            (e.clickedNotifications = yield this.get("NotificationOpened")),
            e
          );
        });
      }
      setAppState(e) {
        return n.a(this, void 0, void 0, function* () {
          if (
            (e.defaultNotificationUrl &&
              (yield this.put("Options", {
                key: "defaultUrl",
                value: e.defaultNotificationUrl,
              })),
            (e.defaultNotificationTitle || "" === e.defaultNotificationTitle) &&
              (yield this.put("Options", {
                key: "defaultTitle",
                value: e.defaultNotificationTitle,
              })),
            null != e.lastKnownPushEnabled &&
              (yield this.put("Options", {
                key: "isPushEnabled",
                value: e.lastKnownPushEnabled,
              })),
            e.clickedNotifications)
          ) {
            const t = Object.keys(e.clickedNotifications);
            for (let i of t) {
              const t = e.clickedNotifications[i];
              t
                ? yield this.put("NotificationOpened", {
                    url: i,
                    data: t.data,
                    timestamp: t.timestamp,
                  })
                : null === t && (yield this.remove("NotificationOpened", i));
            }
          }
        });
      }
      getServiceWorkerState() {
        return n.a(this, void 0, void 0, function* () {
          const e = new a();
          return (
            (e.workerVersion = yield this.get(
              "Ids",
              "WORKER1_ONE_SIGNAL_SW_VERSION"
            )),
            (e.updaterWorkerVersion = yield this.get(
              "Ids",
              "WORKER2_ONE_SIGNAL_SW_VERSION"
            )),
            e
          );
        });
      }
      setServiceWorkerState(e) {
        return n.a(this, void 0, void 0, function* () {
          e.workerVersion &&
            (yield this.put("Ids", {
              type: "WORKER1_ONE_SIGNAL_SW_VERSION",
              id: e.workerVersion,
            })),
            e.updaterWorkerVersion &&
              (yield this.put("Ids", {
                type: "WORKER2_ONE_SIGNAL_SW_VERSION",
                id: e.updaterWorkerVersion,
              }));
        });
      }
      getSubscription() {
        return n.a(this, void 0, void 0, function* () {
          const e = new d.a();
          (e.deviceId = yield this.get("Ids", "userId")),
            (e.subscriptionToken = yield this.get("Ids", "registrationId"));
          const t = yield this.get("Options", "optedOut"),
            i = yield this.get("Options", "subscription"),
            n = yield this.get("Options", "subscriptionCreatedAt"),
            o = yield this.get("Options", "subscriptionExpirationTime");
          return (
            (e.optedOut = null != t ? t : null != i && !i),
            (e.createdAt = n),
            (e.expirationTime = o),
            e
          );
        });
      }
      setDeviceId(e) {
        return n.a(this, void 0, void 0, function* () {
          yield this.put("Ids", { type: "userId", id: e });
        });
      }
      setSubscription(e) {
        return n.a(this, void 0, void 0, function* () {
          e.deviceId && (yield this.setDeviceId(e.deviceId)),
            void 0 !== e.subscriptionToken &&
              (yield this.put("Ids", {
                type: "registrationId",
                id: e.subscriptionToken,
              })),
            null != e.optedOut &&
              (yield this.put("Options", {
                key: "optedOut",
                value: e.optedOut,
              })),
            null != e.createdAt &&
              (yield this.put("Options", {
                key: "subscriptionCreatedAt",
                value: e.createdAt,
              })),
            null != e.expirationTime
              ? yield this.put("Options", {
                  key: "subscriptionExpirationTime",
                  value: e.expirationTime,
                })
              : yield this.remove("Options", "subscriptionExpirationTime");
        });
      }
      getEmailProfile() {
        return n.a(this, void 0, void 0, function* () {
          const e = yield this.get("Ids", "emailProfile");
          return e ? p.a.deserialize(e) : new p.a();
        });
      }
      setEmailProfile(e) {
        return n.a(this, void 0, void 0, function* () {
          e &&
            (yield this.put("Ids", {
              type: "emailProfile",
              id: e.serialize(),
            }));
        });
      }
      setProvideUserConsent(e) {
        return n.a(this, void 0, void 0, function* () {
          yield this.put("Options", { key: "userConsent", value: e });
        });
      }
      getProvideUserConsent() {
        return n.a(this, void 0, void 0, function* () {
          return yield this.get("Options", "userConsent");
        });
      }
      getSession(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield this.get("Sessions", e);
        });
      }
      setSession(e) {
        return n.a(this, void 0, void 0, function* () {
          yield this.put("Sessions", e);
        });
      }
      removeSession(e) {
        return n.a(this, void 0, void 0, function* () {
          yield this.remove("Sessions", e);
        });
      }
      getLastNotificationClicked(e) {
        return n.a(this, void 0, void 0, function* () {
          let t = [];
          try {
            t = yield this.getAll("NotificationClicked");
          } catch (e) {
            S.a.error("Database.getNotificationClickedByUrl", e);
          }
          return t.find((t) => t.appId === e) || null;
        });
      }
      getNotificationClickedByUrl(e, t) {
        return n.a(this, void 0, void 0, function* () {
          let i = [];
          try {
            i = yield this.getAll("NotificationClicked");
          } catch (e) {
            S.a.error("Database.getNotificationClickedByUrl", e);
          }
          return (
            i.find(
              (i) =>
                i.appId === t && new URL(e).origin === new URL(i.url).origin
            ) || null
          );
        });
      }
      getNotificationClickedById(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield this.get("NotificationClicked", e);
        });
      }
      getNotificationReceivedById(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield this.get("NotificationReceived", e);
        });
      }
      removeNotificationClickedById(e) {
        return n.a(this, void 0, void 0, function* () {
          yield this.remove("NotificationClicked", e);
        });
      }
      removeAllNotificationClicked() {
        return n.a(this, void 0, void 0, function* () {
          yield this.remove("NotificationClicked");
        });
      }
      resetSentUniqueOutcomes() {
        return n.a(this, void 0, void 0, function* () {
          const e = (yield this.getAll("SentUniqueOutcome")).map(
            (e) => ((e.sentDuringSession = null), v.put("SentUniqueOutcome", e))
          );
          yield Promise.all(e);
        });
      }
      static rebuild() {
        return n.a(this, void 0, void 0, function* () {
          return Promise.all([
            v.singletonInstance.remove("Ids"),
            v.singletonInstance.remove("NotificationOpened"),
            v.singletonInstance.remove("Options"),
            v.singletonInstance.remove("NotificationReceived"),
            v.singletonInstance.remove("NotificationClicked"),
            v.singletonInstance.remove("SentUniqueOutcome"),
          ]);
        });
      }
      static on(...e) {
        return n.a(this, void 0, void 0, function* () {
          return v.singletonInstance.emitter.on.apply(
            v.singletonInstance.emitter,
            e
          );
        });
      }
      static getCurrentSession() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getSession(h.a);
        });
      }
      static upsertSession(e) {
        return n.a(this, void 0, void 0, function* () {
          yield v.singletonInstance.setSession(e);
        });
      }
      static cleanupCurrentSession() {
        return n.a(this, void 0, void 0, function* () {
          yield v.singletonInstance.removeSession(h.a);
        });
      }
      static setEmailProfile(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.setEmailProfile(e);
        });
      }
      static getEmailProfile() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getEmailProfile();
        });
      }
      static setSubscription(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.setSubscription(e);
        });
      }
      static getSubscription() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getSubscription();
        });
      }
      static setProvideUserConsent(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.setProvideUserConsent(e);
        });
      }
      static getProvideUserConsent() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getProvideUserConsent();
        });
      }
      static setServiceWorkerState(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.setServiceWorkerState(e);
        });
      }
      static getServiceWorkerState() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getServiceWorkerState();
        });
      }
      static setAppState(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.setAppState(e);
        });
      }
      static getAppState() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getAppState();
        });
      }
      static setAppConfig(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.setAppConfig(e);
        });
      }
      static getAppConfig() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getAppConfig();
        });
      }
      static getExternalUserId() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getExternalUserId();
        });
      }
      static getLastNotificationClicked(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getLastNotificationClicked(e);
        });
      }
      static removeNotificationClickedById(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.removeNotificationClickedById(e);
        });
      }
      static removeAllNotificationClicked() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.removeAllNotificationClicked();
        });
      }
      static resetSentUniqueOutcomes() {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.resetSentUniqueOutcomes();
        });
      }
      static getNotificationClickedByUrl(e, t) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getNotificationClickedByUrl(e, t);
        });
      }
      static getNotificationClickedById(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getNotificationClickedById(e);
        });
      }
      static getNotificationReceivedById(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getNotificationReceivedById(e);
        });
      }
      static setExternalUserId(e) {
        return n.a(this, void 0, void 0, function* () {
          yield v.singletonInstance.setExternalUserId(e);
        });
      }
      static setDeviceId(e) {
        return n.a(this, void 0, void 0, function* () {
          yield v.singletonInstance.setDeviceId(e);
        });
      }
      static remove(e, t) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.remove(e, t);
        });
      }
      static put(e, t) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.put(e, t);
        });
      }
      static get(e, t) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.get(e, t);
        });
      }
      static getAll(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield v.singletonInstance.getAll(e);
        });
      }
    }
    v.EVENTS = c;
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return m;
    });
    var n = i(0),
      o = i(16),
      s = i(30),
      r = i(6),
      a = i(10),
      c = i(17),
      l = i(14),
      d = i(11),
      u = i(9);
    const g = 4e3,
      p = 3001,
      h = 18080,
      f = ["outcomes", "on_focus"];
    class m {
      static getBuildEnv() {
        return o.a.Production;
      }
      static getApiEnv() {
        return o.a.Production;
      }
      static getIntegration(e) {
        return n.a(this, void 0, void 0, function* () {
          if (d.a.isSafari()) return c.a.Secure;
          const t = window === window.top,
            i = "https:" === window.location.protocol;
          if (void 0 === e) {
            if (
              "undefined" == typeof OneSignal ||
              !OneSignal.context ||
              !OneSignal.context.appConfig
            )
              throw new a.a("usingProxyOrigin", a.b.Empty);
            e = !!OneSignal.context.appConfig.subdomain;
          }
          if (t)
            return i
              ? e
                ? c.a.SecureProxy
                : c.a.Secure
              : !u.b.isLocalhostAllowedAsSecureOrigin() ||
                ("localhost" !== location.hostname &&
                  "127.0.0.1" !== location.hostname)
              ? c.a.InsecureProxy
              : c.a.Secure;
          if (i) {
            return (yield m.isFrameContextInsecure())
              ? c.a.InsecureProxy
              : e
              ? c.a.SecureProxy
              : c.a.Secure;
          }
          return c.a.InsecureProxy;
        });
      }
      static isFrameContextInsecure() {
        return n.a(this, void 0, void 0, function* () {
          if (
            window === window.top ||
            !("serviceWorker" in navigator) ||
            void 0 === navigator.serviceWorker.getRegistration
          )
            return !1;
          return !(yield l.b.getRegistration());
        });
      }
      static isInsecureOrigin() {
        return "http:" === window.location.protocol;
      }
      static getOrigin() {
        return d.a.isBrowser()
          ? window.location.origin
          : "undefined" != typeof self &&
            "undefined" != typeof ServiceWorkerGlobalScope
          ? self.registration.scope
          : "Unknown";
      }
      static getWindowEnv() {
        return "undefined" == typeof window
          ? "undefined" != typeof self &&
            "undefined" != typeof ServiceWorkerGlobalScope
            ? r.a.ServiceWorker
            : r.a.Unknown
          : window === window.top
          ? -1 !== location.href.indexOf("initOneSignal") ||
            ("/subscribe" === location.pathname &&
              "" === location.search &&
              (location.hostname.endsWith(".onesignal.com") ||
                location.hostname.endsWith(".os.tc") ||
                (-1 !== location.hostname.indexOf(".localhost") &&
                  m.getBuildEnv() === o.a.Development)))
            ? r.a.OneSignalSubscriptionPopup
            : r.a.Host
          : "/webPushIframe" === location.pathname
          ? r.a.OneSignalProxyFrame
          : "/webPushModal" === location.pathname
          ? r.a.OneSignalSubscriptionModal
          : r.a.CustomIframe;
      }
      static getTestEnv() {
        return s.a.None;
      }
      static getBuildEnvPrefix(e = m.getBuildEnv()) {
        switch (e) {
          case o.a.Development:
            return "Dev-";
          case o.a.Staging:
            return "Staging-";
          case o.a.Production:
            return "";
          default:
            throw new a.a("buildEnv", a.b.EnumOutOfRange);
        }
      }
      static getOneSignalApiUrl(e = m.getApiEnv(), t) {
        switch (e) {
          case o.a.Development:
            return m.isTurbineEndpoint(t)
              ? new URL(`https://onesignal.com:${h}/api/v1`)
              : new URL(`https://onesignal.com:${p}/api/v1`);
          case o.a.Staging:
          case o.a.Production:
            return new URL("https://onesignal.com/api/v1");
          default:
            throw new a.a("buildEnv", a.b.EnumOutOfRange);
        }
      }
      static getOneSignalResourceUrlPath(e = m.getBuildEnv()) {
        let t;
        const i = g;
        switch (e) {
          case o.a.Development:
            t = `http://localhost:${i}`;
            break;
          case o.a.Staging:
            t = "https://localhost";
            break;
          case o.a.Production:
            t = "https://onesignal.com";
            break;
          default:
            throw new a.a("buildEnv", a.b.EnumOutOfRange);
        }
        return new URL(`${t}/sdks`);
      }
      static getOneSignalCssFileName(e = m.getBuildEnv()) {
        switch (e) {
          case o.a.Development:
            return "Dev-OneSignalSDKStyles.css";
          case o.a.Staging:
            return "Staging-OneSignalSDKStyles.css";
          case o.a.Production:
            return "OneSignalSDKStyles.css";
          default:
            throw new a.a("buildEnv", a.b.EnumOutOfRange);
        }
      }
      static isTurbineEndpoint(e) {
        return !!e && f.some((t) => e.indexOf(t) > -1);
      }
    }
  },
  function (e, t, i) {
    "use strict";
    var n = i(0),
      o = i(12);
    class s extends o.a {
      constructor(e = "The asynchronous operation has timed out.") {
        super(e), (this.message = e), Object.setPrototypeOf(this, s.prototype);
      }
    }
    var r = i(23);
    i.d(t, "a", function () {
      return a;
    });
    class a {
      static contains(e, t) {
        return !!e && -1 !== e.indexOf(t);
      }
      static getConsoleStyle(e) {
        return "code" == e
          ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;'
          : "bold" == e
          ? "font-weight: 600;color: rgb(51, 51, 51);"
          : "alert" == e
          ? "font-weight: 600;color: red;"
          : "event" == e
          ? "color: green;"
          : "postmessage" == e
          ? "color: orange;"
          : "serviceworkermessage" == e
          ? "color: purple;"
          : "";
      }
      static trimUndefined(e) {
        for (var t in e) e.hasOwnProperty(t) && void 0 === e[t] && delete e[t];
        return e;
      }
      static capitalize(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      static isNullOrUndefined(e) {
        return void 0 === e || null === e;
      }
      static valueOrDefault(e, t) {
        return void 0 === e || null === e ? t : e;
      }
      static stringify(e) {
        return JSON.stringify(
          e,
          (e, t) => ("function" == typeof t ? "[Function]" : t),
          4
        );
      }
      static encodeHashAsUriComponent(e) {
        let t = "";
        const i = Object.keys(e);
        for (var n of i) {
          const i = e[n];
          t += `${encodeURIComponent(n)}=${encodeURIComponent(i)}`;
        }
        return t;
      }
      static timeoutPromise(e, t) {
        const i = new Promise((e, i) => {
          setTimeout(() => {
            i(new s());
          }, t);
        });
        return Promise.race([e, i]);
      }
      static getValueOrDefault(e, t) {
        return void 0 !== e && null !== e ? e : t;
      }
      static padStart(e, t, i) {
        let n = e;
        for (; n.length < t; ) n = i + n;
        return n;
      }
      static parseVersionString(e) {
        const t = e.toString().split("."),
          i = a.padStart(t[0], 2, "0");
        let n;
        return (
          (n = t[1] ? a.padStart(t[1], 2, "0") : "00"), Number(`${i}.${n}`)
        );
      }
      static lastParts(e, t, i) {
        const n = e.split(t),
          o = Math.max(n.length - i, 0);
        return n.slice(o).join(t);
      }
      static isVersionAtLeast(e, t) {
        return this.parseVersionString(e) >= t;
      }
      static enforceAppId(e) {
        if (!e) throw new Error("App id cannot be empty");
      }
      static enforcePlayerId(e) {
        if (!e) throw new Error("Player id cannot be empty");
      }
      static enforceAppIdAndPlayerId(e, t, i) {
        return n.a(this, void 0, void 0, function* () {
          a.enforceAppId(e), a.enforcePlayerId(t);
          try {
            return yield i();
          } catch (e) {
            throw e &&
              Array.isArray(e.errors) &&
              e.errors.length > 0 &&
              a.contains(e.errors[0], "app_id not found")
              ? new r.a(r.b.MissingAppId)
              : e;
          }
        });
      }
      static sortArrayOfObjects(e, t, i = !1, n = !0) {
        const o = n ? e : e.slice();
        return (
          o.sort((e, n) => {
            const o = t(e),
              s = t(n);
            return o > s ? (i ? -1 : 1) : o < s ? (i ? 1 : -1) : 0;
          }),
          o
        );
      }
    }
    t.b = a;
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e.ServiceWorker = "ServiceWorker"),
          (e.Host = "Host"),
          (e.OneSignalSubscriptionPopup = "Popup"),
          (e.OneSignalSubscriptionModal = "Modal"),
          (e.OneSignalProxyFrame = "ProxyFrame"),
          (e.CustomIframe = "CustomFrame"),
          (e.Unknown = "Unknown");
      })(n || (n = {}));
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return g;
    });
    var n = i(0),
      o = i(11),
      s = i(4),
      r = i(6),
      a = i(1),
      c = i(5);
    const l = [
        "notifyButtonHovering",
        "notifyButtonHover",
        "notifyButtonButtonClick",
        "notifyButtonLauncherClick",
        "animatedElementHiding",
        "animatedElementHidden",
        "animatedElementShowing",
        "animatedElementShown",
        "activeAnimatedElementActivating",
        "activeAnimatedElementActive",
        "activeAnimatedElementInactivating",
        "activeAnimatedElementInactive",
        "dbRetrieved",
        "dbSet",
        "testEvent",
      ],
      d = [
        "onesignal.prompt.custom.clicked",
        "onesignal.prompt.native.permissionchanged",
        "onesignal.subscription.changed",
        "onesignal.internal.subscriptionset",
        "dbRebuilt",
        "initialize",
        "subscriptionSet",
        "sendWelcomeNotification",
        "subscriptionChange",
        "notificationPermissionChange",
        "dbSet",
        "register",
        "notificationDisplay",
        "notificationDismiss",
        "notificationClick",
        "permissionPromptDisplay",
        "testWouldDisplay",
        "testInitOptionDisabled",
        "popupWindowTimeout",
      ],
      u = {
        notificationPermissionChange:
          "onesignal.prompt.native.permissionchanged",
        subscriptionChange: "onesignal.subscription.changed",
        customPromptClick: "onesignal.prompt.custom.clicked",
      };
    class g {
      static trigger(e, t, i = null) {
        return n.a(this, void 0, void 0, function* () {
          if (!c.b.contains(l, e)) {
            let n = t,
              o = c.b.capitalize(s.a.getWindowEnv().toString());
            i && (o = `${o} ⬸ ${c.b.capitalize(i)}`),
              n || !1 === n
                ? a.a.debug(`(${o}) » %c${e}:`, c.b.getConsoleStyle("event"), n)
                : a.a.debug(`(${o}) » %c${e}`, c.b.getConsoleStyle("event"));
          }
          if (o.a.isBrowser()) {
            if (e === OneSignal.EVENTS.SDK_INITIALIZED) {
              if (OneSignal.initialized) return;
              OneSignal.initialized = !0;
            }
            yield OneSignal.emitter.emit(e, t);
          }
          if (u.hasOwnProperty(e)) {
            let i = u[e];
            g._triggerLegacy(i, t);
          }
          if (
            o.a.isBrowser() &&
            (s.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup ||
              s.a.getWindowEnv() === r.a.OneSignalProxyFrame)
          ) {
            opener || parent
              ? c.b.contains(d, e) &&
                (s.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup
                  ? OneSignal.subscriptionPopup.message(
                      OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT,
                      { eventName: e, eventData: t }
                    )
                  : OneSignal.proxyFrame.retriggerRemoteEvent(e, t))
              : a.a.error(
                  `Could not send event '${e}' back to host page because no creator (opener or parent) found!`
                );
          }
        });
      }
      static _triggerLegacy(e, t) {
        const i = new CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: t,
        });
        window.dispatchEvent(i);
      }
    }
  },
  function (e, t, i) {
    var n;
    (n = function () {
      var e = !0;
      function t(t) {
        function i(e) {
          var i = t.match(e);
          return (i && i.length > 1 && i[1]) || "";
        }
        var n,
          o,
          s,
          r = i(/(ipod|iphone|ipad)/i).toLowerCase(),
          a = !/like android/i.test(t) && /android/i.test(t),
          c = /nexus\s*[0-6]\s*/i.test(t),
          l = !c && /nexus\s*[0-9]+/i.test(t),
          d = /CrOS/.test(t),
          u = /silk/i.test(t),
          g = /sailfish/i.test(t),
          p = /tizen/i.test(t),
          h = /(web|hpw)os/i.test(t),
          f = /windows phone/i.test(t),
          m = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
          b = !r && !u && /macintosh/i.test(t),
          S = !a && !g && !p && !h && /linux/i.test(t),
          v = i(/edge\/(\d+(\.\d+)?)/i),
          O = i(/version\/(\d+(\.\d+)?)/i),
          y = /tablet/i.test(t) && !/tablet pc/i.test(t),
          w = !y && /[^-]mobi/i.test(t),
          E = /xbox/i.test(t);
        /opera/i.test(t)
          ? (n = {
              name: "Opera",
              opera: e,
              version: O || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i),
            })
          : /opr\/|opios/i.test(t)
          ? (n = {
              name: "Opera",
              opera: e,
              version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O,
            })
          : /SamsungBrowser/i.test(t)
          ? (n = {
              name: "Samsung Internet for Android",
              samsungBrowser: e,
              version: O || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i),
            })
          : /coast/i.test(t)
          ? (n = {
              name: "Opera Coast",
              coast: e,
              version: O || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i),
            })
          : /yabrowser/i.test(t)
          ? (n = {
              name: "Yandex Browser",
              yandexbrowser: e,
              version: O || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i),
            })
          : /ucbrowser/i.test(t)
          ? (n = {
              name: "UC Browser",
              ucbrowser: e,
              version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /mxios/i.test(t)
          ? (n = {
              name: "Maxthon",
              maxthon: e,
              version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /epiphany/i.test(t)
          ? (n = {
              name: "Epiphany",
              epiphany: e,
              version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /puffin/i.test(t)
          ? (n = {
              name: "Puffin",
              puffin: e,
              version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i),
            })
          : /sleipnir/i.test(t)
          ? (n = {
              name: "Sleipnir",
              sleipnir: e,
              version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /k-meleon/i.test(t)
          ? (n = {
              name: "K-Meleon",
              kMeleon: e,
              version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : f
          ? ((n = { name: "Windows Phone", windowsphone: e }),
            v
              ? ((n.msedge = e), (n.version = v))
              : ((n.msie = e), (n.version = i(/iemobile\/(\d+(\.\d+)?)/i))))
          : /msie|trident/i.test(t)
          ? (n = {
              name: "Internet Explorer",
              msie: e,
              version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i),
            })
          : d
          ? (n = {
              name: "Chrome",
              chromeos: e,
              chromeBook: e,
              chrome: e,
              version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
            })
          : /chrome.+? edge/i.test(t)
          ? (n = { name: "Microsoft Edge", msedge: e, version: v })
          : /vivaldi/i.test(t)
          ? (n = {
              name: "Vivaldi",
              vivaldi: e,
              version: i(/vivaldi\/(\d+(\.\d+)?)/i) || O,
            })
          : g
          ? (n = {
              name: "Sailfish",
              sailfish: e,
              version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i),
            })
          : /seamonkey\//i.test(t)
          ? (n = {
              name: "SeaMonkey",
              seamonkey: e,
              version: i(/seamonkey\/(\d+(\.\d+)?)/i),
            })
          : /firefox|iceweasel|fxios/i.test(t)
          ? ((n = {
              name: "Firefox",
              firefox: e,
              version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i),
            }),
            /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) &&
              (n.firefoxos = e))
          : u
          ? (n = {
              name: "Amazon Silk",
              silk: e,
              version: i(/silk\/(\d+(\.\d+)?)/i),
            })
          : /phantom/i.test(t)
          ? (n = {
              name: "PhantomJS",
              phantom: e,
              version: i(/phantomjs\/(\d+(\.\d+)?)/i),
            })
          : /slimerjs/i.test(t)
          ? (n = {
              name: "SlimerJS",
              slimer: e,
              version: i(/slimerjs\/(\d+(\.\d+)?)/i),
            })
          : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)
          ? (n = {
              name: "BlackBerry",
              blackberry: e,
              version: O || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i),
            })
          : h
          ? ((n = {
              name: "WebOS",
              webos: e,
              version: O || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i),
            }),
            /touchpad\//i.test(t) && (n.touchpad = e))
          : /bada/i.test(t)
          ? (n = {
              name: "Bada",
              bada: e,
              version: i(/dolfin\/(\d+(\.\d+)?)/i),
            })
          : p
          ? (n = {
              name: "Tizen",
              tizen: e,
              version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O,
            })
          : /qupzilla/i.test(t)
          ? (n = {
              name: "QupZilla",
              qupzilla: e,
              version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O,
            })
          : /chromium/i.test(t)
          ? (n = {
              name: "Chromium",
              chromium: e,
              version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O,
            })
          : /chrome|crios|crmo/i.test(t)
          ? (n = {
              name: "Chrome",
              chrome: e,
              version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
            })
          : a
          ? (n = { name: "Android", version: O })
          : /safari|applewebkit/i.test(t)
          ? ((n = { name: "Safari", safari: e }), O && (n.version = O))
          : r
          ? ((n = {
              name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod",
            }),
            O && (n.version = O))
          : (n = /googlebot/i.test(t)
              ? {
                  name: "Googlebot",
                  googlebot: e,
                  version: i(/googlebot\/(\d+(\.\d+))/i) || O,
                }
              : {
                  name: i(/^(.*)\/(.*) /),
                  version:
                    ((o = /^(.*)\/(.*) /),
                    (s = t.match(o)),
                    (s && s.length > 1 && s[2]) || ""),
                }),
          !n.msedge && /(apple)?webkit/i.test(t)
            ? (/(apple)?webkit\/537\.36/i.test(t)
                ? ((n.name = n.name || "Blink"), (n.blink = e))
                : ((n.name = n.name || "Webkit"), (n.webkit = e)),
              !n.version && O && (n.version = O))
            : !n.opera &&
              /gecko\//i.test(t) &&
              ((n.name = n.name || "Gecko"),
              (n.gecko = e),
              (n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i))),
          n.windowsphone || n.msedge || (!a && !n.silk)
            ? n.windowsphone || n.msedge || !r
              ? b
                ? (n.mac = e)
                : E
                ? (n.xbox = e)
                : m
                ? (n.windows = e)
                : S && (n.linux = e)
              : ((n[r] = e), (n.ios = e))
            : (n.android = e);
        var P = "";
        n.windows
          ? (P = (function (e) {
              switch (e) {
                case "NT":
                  return "NT";
                case "XP":
                  return "XP";
                case "NT 5.0":
                  return "2000";
                case "NT 5.1":
                  return "XP";
                case "NT 5.2":
                  return "2003";
                case "NT 6.0":
                  return "Vista";
                case "NT 6.1":
                  return "7";
                case "NT 6.2":
                  return "8";
                case "NT 6.3":
                  return "8.1";
                case "NT 10.0":
                  return "10";
                default:
                  return;
              }
            })(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)))
          : n.windowsphone
          ? (P = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i))
          : n.mac
          ? (P = (P = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, "."))
          : r
          ? (P = (P = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(
              /[_\s]/g,
              "."
            ))
          : a
          ? (P = i(/android[ \/-](\d+(\.\d+)*)/i))
          : n.webos
          ? (P = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i))
          : n.blackberry
          ? (P = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i))
          : n.bada
          ? (P = i(/bada\/(\d+(\.\d+)*)/i))
          : n.tizen && (P = i(/tizen[\/\s](\d+(\.\d+)*)/i)),
          P && (n.osversion = P);
        var I = !n.windows && P.split(".")[0];
        return (
          y || l || "ipad" == r || (a && (3 == I || (I >= 4 && !w))) || n.silk
            ? (n.tablet = e)
            : (w ||
                "iphone" == r ||
                "ipod" == r ||
                a ||
                c ||
                n.blackberry ||
                n.webos ||
                n.bada) &&
              (n.mobile = e),
          n.msedge ||
          (n.msie && n.version >= 10) ||
          (n.yandexbrowser && n.version >= 15) ||
          (n.vivaldi && n.version >= 1) ||
          (n.chrome && n.version >= 20) ||
          (n.samsungBrowser && n.version >= 4) ||
          (n.firefox && n.version >= 20) ||
          (n.safari && n.version >= 6) ||
          (n.opera && n.version >= 10) ||
          (n.ios && n.osversion && n.osversion.split(".")[0] >= 6) ||
          (n.blackberry && n.version >= 10.1) ||
          (n.chromium && n.version >= 20)
            ? (n.a = e)
            : (n.msie && n.version < 10) ||
              (n.chrome && n.version < 20) ||
              (n.firefox && n.version < 20) ||
              (n.safari && n.version < 6) ||
              (n.opera && n.version < 10) ||
              (n.ios && n.osversion && n.osversion.split(".")[0] < 6) ||
              (n.chromium && n.version < 20)
            ? (n.c = e)
            : (n.x = e),
          n
        );
      }
      var i = t(("undefined" != typeof navigator && navigator.userAgent) || "");
      function n(e) {
        return e.split(".").length;
      }
      function o(e, t) {
        var i,
          n = [];
        if (Array.prototype.map) return Array.prototype.map.call(e, t);
        for (i = 0; i < e.length; i++) n.push(t(e[i]));
        return n;
      }
      function s(e) {
        for (
          var t = Math.max(n(e[0]), n(e[1])),
            i = o(e, function (e) {
              var i = t - n(e);
              return o((e += new Array(i + 1).join(".0")).split("."), function (
                e
              ) {
                return new Array(20 - e.length).join("0") + e;
              }).reverse();
            });
          --t >= 0;

        ) {
          if (i[0][t] > i[1][t]) return 1;
          if (i[0][t] !== i[1][t]) return -1;
          if (0 === t) return 0;
        }
      }
      function r(e, n, o) {
        var r = i;
        "string" == typeof n && ((o = n), (n = void 0)),
          void 0 === n && (n = !1),
          o && (r = t(o));
        var a = "" + r.version;
        for (var c in e)
          if (e.hasOwnProperty(c) && r[c]) {
            if ("string" != typeof e[c])
              throw new Error(
                "Browser version in the minVersion map should be a string: " +
                  c +
                  ": " +
                  String(e)
              );
            return s([a, e[c]]) < 0;
          }
        return n;
      }
      return (
        (i.test = function (e) {
          for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            if ("string" == typeof n && n in i) return !0;
          }
          return !1;
        }),
        (i.isUnsupportedBrowser = r),
        (i.compareVersions = s),
        (i.check = function (e, t, i) {
          return !r(e, t, i);
        }),
        (i._detect = t),
        i
      );
    }),
      void 0 !== e && e.exports ? (e.exports = n()) : i(42)("bowser", n);
  },
  function (e, t, i) {
    "use strict";
    (function (e) {
      i.d(t, "a", function () {
        return d;
      });
      var n = i(8),
        o = i.n(n),
        s = i(4),
        r = i(11),
        a = i(6),
        c = i(1),
        l = i(5);
      class d {
        static getBaseUrl() {
          return location.origin;
        }
        static isLocalhostAllowedAsSecureOrigin() {
          return (
            OneSignal.config &&
            OneSignal.config.userConfig &&
            !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
          );
        }
        static isUsingSubscriptionWorkaround() {
          const e = s.a.getWindowEnv();
          if (!OneSignal.config)
            throw new Error(
              `(${e.toString()}) isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.`
            );
          if (o.a.safari) return !1;
          const t = this.isLocalhostAllowedAsSecureOrigin();
          return d.internalIsUsingSubscriptionWorkaround(
            OneSignal.config.subdomain,
            t
          );
        }
        static internalIsUsingSubscriptionWorkaround(e, t) {
          if (o.a.safari) return !1;
          if (
            !0 === t &&
            ("localhost" === location.hostname ||
              "127.0.0.1" === location.hostname)
          )
            return !1;
          const i = s.a.getWindowEnv();
          return !(
            (i !== a.a.Host && i !== a.a.CustomIframe) ||
            (!e && "http:" !== location.protocol)
          );
        }
        static redetectBrowserUserAgent() {
          return "" === o.a.name && "" === o.a.version
            ? o.a._detect(navigator.userAgent)
            : o.a;
        }
        static isValidUuid(e) {
          return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
            e
          );
        }
        static getRandomUuid() {
          let t = "";
          const i =
            "undefined" == typeof window
              ? e.crypto
              : window.crypto || window.msCrypto;
          return (t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            i
              ? function (e) {
                  var t = i.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                  return ("x" == e ? t : (3 & t) | 8).toString(16);
                }
              : function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" == e ? t : (3 & t) | 8).toString(16);
                }
          ));
        }
        static logMethodCall(e, ...t) {
          return c.a.debug(
            `Called %c${e}(${t.map(l.a.stringify).join(", ")})`,
            l.a.getConsoleStyle("code"),
            "."
          );
        }
        static isHttps() {
          return d.isSafari()
            ? "https:" === window.location.protocol
            : !d.isUsingSubscriptionWorkaround();
        }
        static isSafari() {
          return r.a.isBrowser() && void 0 !== window.safari;
        }
      }
      t.b = d;
    }.call(this, i(41)));
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
      return n;
    }),
      i.d(t, "a", function () {
        return InvalidArgumentError;
      });
    var n,
      o = i(12);
    !(function (e) {
      (e[(e.Empty = 0)] = "Empty"),
        (e[(e.Malformed = 1)] = "Malformed"),
        (e[(e.EnumOutOfRange = 2)] = "EnumOutOfRange");
    })(n || (n = {}));
    class InvalidArgumentError extends o.a {
      constructor(e, t) {
        switch (t) {
          case n.Empty:
            super(`Supply a non-empty value to '${e}'.`);
            break;
          case n.Malformed:
            super(`The value for '${e}' was malformed.`);
            break;
          case n.EnumOutOfRange:
            super(
              `The value for '${e}' was out of range of the expected input enum.`
            );
        }
        (this.argument = e),
          (this.reason = n[t]),
          Object.setPrototypeOf(this, InvalidArgumentError.prototype);
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return a;
    });
    var n = i(4),
      o = i(6),
      s = i(8),
      r = i.n(s);
    class a {
      static isBrowser() {
        return "undefined" != typeof window;
      }
      static isSafari() {
        return a.isBrowser() && r.a.safari;
      }
      static version() {
        return Number(151104);
      }
      static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
        return ["tw", "hant"];
      }
      static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
        return ["cn", "hans"];
      }
      static getLanguage() {
        let e = navigator.language;
        if (e) {
          let t = (e = e.toLowerCase()).split("-");
          if ("zh" == t[0]) {
            for (let e of a.TRADITIONAL_CHINESE_LANGUAGE_TAG)
              if (-1 !== t.indexOf(e)) return "zh-Hant";
            for (let e of a.SIMPLIFIED_CHINESE_LANGUAGE_TAG)
              if (-1 !== t.indexOf(e)) return "zh-Hans";
            return "zh-Hant";
          }
          return t[0].substring(0, 2);
        }
        return "en";
      }
      static supportsServiceWorkers() {
        switch (n.a.getWindowEnv()) {
          case o.a.ServiceWorker:
            return !0;
          default:
            return (
              "undefined" != typeof navigator && "serviceWorker" in navigator
            );
        }
      }
      static getSdkStylesVersionHash() {
        return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__
          ? "2"
          : __SRC_STYLESHEETS_MD5_HASH__;
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    });
    class n extends Error {
      constructor(e = "") {
        super(e),
          Object.defineProperty(this, "message", {
            configurable: !0,
            enumerable: !1,
            value: e,
            writable: !0,
          }),
          Object.defineProperty(this, "name", {
            configurable: !0,
            enumerable: !1,
            value: this.constructor.name,
            writable: !0,
          }),
          Error.hasOwnProperty("captureStackTrace")
            ? Error.captureStackTrace(this, this.constructor)
            : (Object.defineProperty(this, "stack", {
                configurable: !0,
                enumerable: !1,
                value: new Error(e).stack,
                writable: !0,
              }),
              Object.setPrototypeOf(this, n.prototype));
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
      return n;
    }),
      i.d(t, "a", function () {
        return InvalidStateError;
      });
    var n,
      o = i(12),
      s = i(37);
    !(function (e) {
      (e[(e.MissingAppId = 0)] = "MissingAppId"),
        (e[(e.RedundantPermissionMessage = 1)] = "RedundantPermissionMessage"),
        (e[(e.PushPermissionAlreadyGranted = 2)] =
          "PushPermissionAlreadyGranted"),
        (e[(e.UnsupportedEnvironment = 3)] = "UnsupportedEnvironment"),
        (e[(e.MissingDomElement = 4)] = "MissingDomElement"),
        (e[(e.ServiceWorkerNotActivated = 5)] = "ServiceWorkerNotActivated"),
        (e[(e.NoProxyFrame = 6)] = "NoProxyFrame");
    })(n || (n = {}));
    class InvalidStateError extends o.a {
      constructor(e, t) {
        switch (e) {
          case n.MissingAppId:
            super("Missing required app ID.");
            break;
          case n.RedundantPermissionMessage:
            let i = "";
            t &&
              t.permissionPromptType &&
              (i = `(${s.a[t.permissionPromptType]})`),
              super(`Another permission message ${i} is being displayed.`);
            break;
          case n.PushPermissionAlreadyGranted:
            super("Push permission has already been granted.");
            break;
          case n.UnsupportedEnvironment:
            super("The current environment does not support this operation.");
            break;
          case n.ServiceWorkerNotActivated:
            super("The service worker must be activated first.");
            break;
          case n.NoProxyFrame:
            super("No proxy frame.");
        }
        (this.description = n[e]),
          (this.reason = e),
          Object.setPrototypeOf(this, InvalidStateError.prototype);
      }
    }
  },
  function (e, t, i) {
    "use strict";
    var n = i(0),
      o = i(33);
    class s {
      static debug(...e) {
        self.shouldLog && console.debug(...e);
      }
      static trace(...e) {
        self.shouldLog && console.trace(...e);
      }
      static info(...e) {
        self.shouldLog && console.info(...e);
      }
      static warn(...e) {
        self.shouldLog && console.warn(...e);
      }
      static error(...e) {
        self.shouldLog && console.error(...e);
      }
    }
    var r = i(15),
      InvalidStateError = i(13),
      a = i(9),
      c = i(3),
      l = i(28),
      d = i(22),
      u = i(34),
      g = i(32);
    const p = () => {
      s.debug("Do nothing");
    };
    function h(e, t) {
      const i = 1e3 * t;
      let o,
        r = void 0;
      const a = new Promise((t, a) => {
        let c = !1;
        (o = self.setTimeout(
          () =>
            n.a(this, void 0, void 0, function* () {
              c = !0;
              try {
                yield e(), t();
              } catch (e) {
                s.error("Failed to execute callback", e), a();
              }
            }),
          i
        )),
          (r = () => {
            s.debug("Cancel called"), self.clearTimeout(o), c || t();
          });
      });
      return r
        ? { promise: a, cancel: r }
        : (s.warn("clearTimeoutHandle was not assigned."),
          { promise: a, cancel: p });
    }
    i.d(t, "b", function () {
      return f;
    }),
      i.d(t, "a", function () {
        return m;
      });
    class f {
      static getRegistration() {
        return n.a(this, void 0, void 0, function* () {
          return yield u.a.getRegistration();
        });
      }
      static getServiceWorkerHref(e, t) {
        let i = "";
        if (e === m.WorkerA) i = t.workerBPath.getFullPath();
        else if (e === m.WorkerB || e === m.ThirdParty || e === m.None)
          i = t.workerAPath.getFullPath();
        else if (e === m.Bypassed)
          throw new InvalidStateError.a(
            InvalidStateError.b.UnsupportedEnvironment
          );
        return new URL(i, a.a.getBaseUrl()).href;
      }
      static upsertSession(e, t, i, o, a, l) {
        return n.a(this, void 0, void 0, function* () {
          if (!o) return void s.error("No deviceId provided for new session.");
          if (!i.app_id)
            return void s.error("No appId provided for new session.");
          const n = yield c.a.getCurrentSession();
          if (!n) {
            const e = i.app_id,
              t = Object(r.d)({
                deviceId: o,
                appId: e,
                deviceType: i.device_type,
              }),
              n = yield c.a.getLastNotificationClicked(e);
            return (
              n && (t.notificationId = n.notificationId),
              yield c.a.upsertSession(t),
              void (yield f.sendOnSessionCallIfNecessary(a, i, o, t))
            );
          }
          if (n.status === r.c.Active)
            return void s.debug("Session already active", n);
          if (!n.lastDeactivatedTimestamp)
            return void s.debug("Session is in invalid state", n);
          const d = new Date().getTime();
          if (
            f.timeInSecondsBetweenTimestamps(d, n.lastDeactivatedTimestamp) <= e
          )
            return (
              (n.status = r.c.Active),
              (n.lastActivatedTimestamp = d),
              (n.lastDeactivatedTimestamp = null),
              void (yield c.a.upsertSession(n))
            );
          yield f.finalizeSession(n, t, l);
          const u = Object(r.d)({
            deviceId: o,
            appId: i.app_id,
            deviceType: i.device_type,
          });
          yield c.a.upsertSession(u),
            yield f.sendOnSessionCallIfNecessary(a, i, o, u);
        });
      }
      static deactivateSession(e, t, i) {
        return n.a(this, void 0, void 0, function* () {
          const n = yield c.a.getCurrentSession();
          if (!n)
            return void s.debug("No active session found. Cannot deactivate.");
          if (n.status === r.c.Inactive)
            return h(() => f.finalizeSession(n, t, i), e);
          if (n.status !== r.c.Active)
            return void s.warn(
              `Session in invalid state ${n.status}. Cannot deactivate.`
            );
          const o = new Date().getTime(),
            a = f.timeInSecondsBetweenTimestamps(o, n.lastActivatedTimestamp);
          (n.lastDeactivatedTimestamp = o),
            (n.accumulatedDuration += a),
            (n.status = r.c.Inactive);
          const l = h(() => f.finalizeSession(n, t, i), e);
          return yield c.a.upsertSession(n), l;
        });
      }
      static sendOnSessionCallIfNecessary(e, t, i, s) {
        return n.a(this, void 0, void 0, function* () {
          if (e === r.b.PlayerCreate) return;
          if (!t.identifier) {
            const e = yield self.registration.pushManager.getSubscription();
            if (e) {
              const i = d.a.setFromW3cSubscription(e),
                n = new l.a(i).serialize();
              t.identifier = n.identifier;
            }
          }
          const n = yield o.a.updateUserSession(i, t);
          n !== i &&
            ((s.deviceId = n),
            yield Promise.all([
              c.a.setDeviceId(n),
              c.a.upsertSession(s),
              c.a.resetSentUniqueOutcomes(),
            ]));
        });
      }
      static finalizeSession(e, t, i) {
        return n.a(this, void 0, void 0, function* () {
          if (
            (s.debug(
              "Finalize session",
              `started: ${new Date(e.startTimestamp)}`,
              `duration: ${e.accumulatedDuration}s`
            ),
            t)
          ) {
            s.debug(
              `send on_focus reporting session duration -> ${e.accumulatedDuration}s`
            );
            const t = yield g.a.getAttribution(i);
            s.debug("send on_focus with attribution", t),
              yield o.a.sendSessionDuration(
                e.appId,
                e.deviceId,
                e.accumulatedDuration,
                e.deviceType,
                t
              );
          }
          yield Promise.all([
            c.a.cleanupCurrentSession(),
            c.a.removeAllNotificationClicked(),
          ]),
            s.debug(
              "Finalize session finished",
              `started: ${new Date(e.startTimestamp)}`
            );
        });
      }
      static timeInSecondsBetweenTimestamps(e, t) {
        return e <= t ? 0 : Math.floor((e - t) / 1e3);
      }
    }
    var m, b;
    ((b = m || (m = {})).WorkerA = "Worker A (Main)"),
      (b.WorkerB = "Worker B (Updater)"),
      (b.ThirdParty = "3rd Party"),
      (b.Installing = "Installing"),
      (b.None = "None"),
      (b.Bypassed = "Bypassed"),
      (b.Indeterminate = "Indeterminate");
  },
  function (e, t, i) {
    "use strict";
    var n, o;
    i.d(t, "c", function () {
      return n;
    }),
      i.d(t, "b", function () {
        return o;
      }),
      i.d(t, "a", function () {
        return s;
      }),
      i.d(t, "d", function () {
        return r;
      }),
      (function (e) {
        (e.Active = "active"),
          (e.Inactive = "inactive"),
          (e.Expired = "expired");
      })(n || (n = {})),
      (function (e) {
        (e[(e.PlayerCreate = 1)] = "PlayerCreate"),
          (e[(e.PlayerOnSession = 2)] = "PlayerOnSession"),
          (e[(e.VisibilityVisible = 3)] = "VisibilityVisible"),
          (e[(e.VisibilityHidden = 4)] = "VisibilityHidden"),
          (e[(e.BeforeUnload = 5)] = "BeforeUnload"),
          (e[(e.PageRefresh = 6)] = "PageRefresh"),
          (e[(e.Focus = 7)] = "Focus"),
          (e[(e.Blur = 8)] = "Blur");
      })(o || (o = {}));
    const s = "oneSignalSession";
    function r(e) {
      const t = new Date().getTime(),
        i = (e && e.sessionKey) || s,
        o = (e && e.notificationId) || null;
      return {
        sessionKey: i,
        appId: e.appId,
        deviceId: e.deviceId,
        deviceType: e.deviceType,
        startTimestamp: t,
        accumulatedDuration: 0,
        notificationId: o,
        status: n.Active,
        lastDeactivatedTimestamp: null,
        lastActivatedTimestamp: t,
      };
    }
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e.Development = "Development"),
          (e.Staging = "Staging"),
          (e.Production = "Production");
      })(n || (n = {}));
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e.Secure = "Secure"),
          (e.SecureProxy = "Secure Proxy"),
          (e.InsecureProxy = "Insecure Proxy");
      })(n || (n = {}));
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e[(e.Default = 0)] = "Default"),
          (e[(e.Subscribed = 1)] = "Subscribed"),
          (e[(e.MutedByApi = -2)] = "MutedByApi"),
          (e[(e.NotSubscribed = -10)] = "NotSubscribed"),
          (e[(e.TemporaryWebRecord = -20)] = "TemporaryWebRecord"),
          (e[(e.PermissionRevoked = -21)] = "PermissionRevoked"),
          (e[(e.PushSubscriptionRevoked = -22)] = "PushSubscriptionRevoked"),
          (e[(e.ServiceWorkerStatus403 = -23)] = "ServiceWorkerStatus403"),
          (e[(e.ServiceWorkerStatus404 = -24)] = "ServiceWorkerStatus404");
      })(n || (n = {}));
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return c;
    });
    var n = i(11),
      o = i(4),
      s = i(5),
      r = i(23),
      a = i(1);
    class c {
      static get(e, t, i) {
        return c.call("GET", e, t, i);
      }
      static post(e, t, i) {
        return c.call("POST", e, t, i);
      }
      static put(e, t, i) {
        return c.call("PUT", e, t, i);
      }
      static delete(e, t, i) {
        return c.call("DELETE", e, t, i);
      }
      static call(e, t, i, s) {
        if ("GET" === e) {
          if (t.indexOf("players") > -1 && -1 === t.indexOf("app_id="))
            return (
              console.error(
                "Calls to player api are not permitted without app_id"
              ),
              Promise.reject(new r.a(r.b.MissingAppId))
            );
        } else if (t.indexOf("players") > -1 && (!i || !i.app_id))
          return (
            console.error(
              "Calls to player api are not permitted without app_id"
            ),
            Promise.reject(new r.a(r.b.MissingAppId))
          );
        let l = new Headers();
        if (
          (l.append("Origin", o.a.getOrigin()),
          l.append("SDK-Version", `onesignal/web/${n.a.version()}`),
          l.append("Content-Type", "application/json;charset=UTF-8"),
          s)
        )
          for (let e of Object.keys(s)) l.append(e, s[e]);
        const d = {
          method: e || "NO_METHOD_SPECIFIED",
          headers: l,
          cache: "no-cache",
        };
        let u;
        return (
          i && (d.body = JSON.stringify(i)),
          fetch(o.a.getOneSignalApiUrl(void 0, t).toString() + "/" + t, d)
            .then((e) => ((u = e.status), e.json()))
            .then((e) => {
              if (u >= 200 && u < 300) return e;
              if ("no-user-id-error" !== c.identifyError(e))
                return Promise.reject(e);
            })
            .catch(
              (e) => (
                a.a.warn(`Could not complete request to /${t}`, e),
                Promise.reject(e)
              )
            )
        );
      }
      static identifyError(e) {
        if (!e || !e.errors) return "no-error";
        let t = e.errors;
        return s.a.contains(t, "No user with this id found") ||
          s.a.contains(t, "Could not find app_id for given player id.")
          ? "no-user-id-error"
          : "unknown-error";
      }
    }
    t.b = c;
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e[(e.Direct = 1)] = "Direct"),
          (e[(e.Indirect = 2)] = "Indirect"),
          (e[(e.Unattributed = 3)] = "Unattributed"),
          (e[(e.NotSupported = 4)] = "NotSupported");
      })(n || (n = {}));
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return o;
    });
    var n = i(12);
    class o extends n.a {
      constructor() {
        super("This code is not implemented yet."),
          Object.setPrototypeOf(this, o.prototype);
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    });
    class n {
      isNewSubscription() {
        return this.existingW3cPushSubscription
          ? !!this.existingW3cPushSubscription.w3cEndpoint !=
              !!this.w3cEndpoint ||
              !(
                !this.existingW3cPushSubscription.w3cEndpoint ||
                !this.w3cEndpoint ||
                this.existingW3cPushSubscription.w3cEndpoint.toString() ===
                  this.w3cEndpoint.toString()
              ) ||
              this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh ||
              this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth
          : !this.existingSafariDeviceToken ||
              this.existingSafariDeviceToken !== this.safariDeviceToken;
      }
      static setFromW3cSubscription(e) {
        const t = new n();
        if (e && ((t.w3cEndpoint = new URL(e.endpoint)), e.getKey)) {
          let i = null;
          try {
            i = e.getKey("p256dh");
          } catch (e) {}
          let n = null;
          try {
            n = e.getKey("auth");
          } catch (e) {}
          if (i) {
            let e = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
            t.w3cP256dh = e;
          }
          if (n) {
            let e = btoa(String.fromCharCode.apply(null, new Uint8Array(n)));
            t.w3cAuth = e;
          }
        }
        return t;
      }
      setFromSafariSubscription(e) {
        this.safariDeviceToken = e;
      }
      serialize() {
        return {
          w3cEndpoint: this.w3cEndpoint ? this.w3cEndpoint.toString() : null,
          w3cP256dh: this.w3cP256dh,
          w3cAuth: this.w3cAuth,
          safariDeviceToken: this.safariDeviceToken,
          existingPushSubscription: this.existingW3cPushSubscription
            ? this.existingW3cPushSubscription.serialize()
            : null,
          existingSafariDeviceToken: this.existingSafariDeviceToken,
        };
      }
      static deserialize(e) {
        const t = new n();
        if (!e) return t;
        try {
          t.w3cEndpoint = new URL(e.w3cEndpoint);
        } catch (e) {}
        return (
          (t.w3cP256dh = e.w3cP256dh),
          (t.w3cAuth = e.w3cAuth),
          (t.existingW3cPushSubscription = void 0),
          e.existingW3cPushSubscription
            ? (t.existingW3cPushSubscription = n.deserialize(
                e.existingW3cPushSubscription
              ))
            : e.existingPushSubscription &&
              (t.existingW3cPushSubscription = n.deserialize(
                e.existingPushSubscription
              )),
          (t.safariDeviceToken = e.safariDeviceToken),
          (t.existingSafariDeviceToken = e.existingSafariDeviceToken),
          t
        );
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
      return n;
    }),
      i.d(t, "a", function () {
        return s;
      });
    var n,
      o = i(12);
    !(function (e) {
      e[(e.MissingAppId = 0)] = "MissingAppId";
    })(n || (n = {}));
    class s extends o.a {
      constructor(e) {
        switch (e) {
          case n.MissingAppId:
            super("The API call is missing an app ID.");
        }
        Object.setPrototypeOf(this, s.prototype);
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return r;
    });
    var n = i(0),
      o = i(3),
      s = i(7);
    class r {
      static triggerNotificationPermissionChanged(e = !1) {
        return n.a(this, void 0, void 0, function* () {
          const t = yield OneSignal.privateGetNotificationPermission();
          (t !== (yield o.a.get("Options", "notificationPermission")) || e) &&
            (yield o.a.put("Options", {
              key: "notificationPermission",
              value: t,
            }),
            s.a.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
              to: t,
            }));
        });
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return o;
    });
    var n = i(0);
    class o {
      constructor() {
        this._events = {};
      }
      on(e, t) {
        return (
          (this._events[e] = this._events[e] || []),
          this._events[e].push(t),
          this
        );
      }
      once(e, t) {
        const i = this;
        function n() {
          i.off(e, n), t.apply(this, arguments);
        }
        return (n.listener = t), this.on(e, n), this;
      }
      off(e, t) {
        const i = this._events[e];
        if (void 0 !== i) {
          for (let e = 0; e < i.length; e += 1)
            if (i[e] === t || i[e].listener === t) {
              i.splice(e, 1);
              break;
            }
          0 === i.length && this.removeAllListeners(e);
        }
        return this;
      }
      removeAllListeners(e) {
        try {
          e ? delete this._events[e] : (this._events = {});
        } catch (e) {}
        return this;
      }
      listeners(e) {
        try {
          return this._events[e];
        } catch (e) {
          return;
        }
      }
      numberOfListeners(e) {
        const t = this.listeners(e);
        return t ? t.length : 0;
      }
      emit(...e) {
        return n.a(this, void 0, void 0, function* () {
          const t = e.shift();
          let i = this._events[t];
          if (void 0 !== i) {
            const t = (i = i.slice(0)).length;
            for (let n = 0; n < t; n += 1) yield i[n].apply(this, e);
          }
          return this;
        });
      }
    }
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e[(e.ChromeLike = 5)] = "ChromeLike"),
          (e[(e.Safari = 7)] = "Safari"),
          (e[(e.Firefox = 8)] = "Firefox"),
          (e[(e.Edge = 12)] = "Edge"),
          (e[(e.Email = 11)] = "Email");
      })(n || (n = {}));
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return l;
    });
    var n = i(8),
      o = i.n(n),
      s = i(11),
      r = i(21),
      a = i(26),
      c = i(9);
    class l {
      constructor() {
        (this.language = s.a.getLanguage()),
          (this.timezone = -60 * new Date().getTimezoneOffset());
        const e = parseInt(String(o.a.version), 10);
        (this.browserVersion = isNaN(e) ? -1 : e),
          (this.deviceModel = navigator.platform),
          (this.sdkVersion = s.a.version().toString()),
          (this.deliveryPlatform = this.getDeliveryPlatform());
      }
      isSafari() {
        return (
          o.a.safari &&
          void 0 !== window.safari &&
          void 0 !== window.safari.pushNotification
        );
      }
      getDeliveryPlatform() {
        const e = c.a.redetectBrowserUserAgent();
        return this.isSafari()
          ? a.a.Safari
          : e.firefox
          ? a.a.Firefox
          : e.msedge
          ? a.a.Edge
          : a.a.ChromeLike;
      }
      serialize() {
        const e = {
          device_type: this.deliveryPlatform,
          language: this.language,
          timezone: this.timezone,
          device_os: this.browserVersion,
          device_model: this.deviceModel,
          sdk: this.sdkVersion,
          notification_types: this.subscriptionState,
        };
        return this.appId && (e.app_id = this.appId), e;
      }
      deserialize(e) {
        throw new r.a();
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return c;
    });
    var n = i(8),
      o = i.n(n),
      s = i(21),
      r = i(18),
      a = i(27);
    class c extends a.a {
      constructor(e) {
        super(), (this.subscription = e);
      }
      serialize() {
        const e = super.serialize();
        return (
          this.subscription &&
            ((e.identifier = o.a.safari
              ? this.subscription.safariDeviceToken
              : this.subscription.w3cEndpoint
              ? this.subscription.w3cEndpoint.toString()
              : null),
            (e.web_auth = this.subscription.w3cAuth),
            (e.web_p256 = this.subscription.w3cP256dh)),
          e
        );
      }
      static createFromPushSubscription(e, t, i) {
        const n = new c(t);
        return (
          (n.appId = e),
          (n.subscriptionState = t ? r.a.Subscribed : r.a.NotSubscribed),
          i && (n.subscriptionState = i),
          n
        );
      }
      deserialize(e) {
        throw new s.a();
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    });
    class n {
      constructor(e, t, i) {
        (this.emailId = e), (this.emailAddress = t), (this.emailAuthHash = i);
      }
      serialize() {
        return {
          emailAddress: this.emailAddress,
          emailAuthHash: this.emailAuthHash,
          emailId: this.emailId,
        };
      }
      static deserialize(e) {
        return new n(e.emailId, e.emailAddress, e.emailAuthHash);
      }
    }
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e.None = "None"), (e.UnitTesting = "Unit Testing");
      })(n || (n = {}));
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return o;
    });
    var n = i(11);
    class o {
      static decodeHtmlEntities(e) {
        return (
          n.a.isBrowser() &&
            (o.decodeTextArea ||
              (o.decodeTextArea = document.createElement("textarea"))),
          o.decodeTextArea
            ? ((o.decodeTextArea.innerHTML = e), o.decodeTextArea.value)
            : e
        );
      }
    }
    o.decodeTextArea = null;
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return u;
    });
    var n = i(0),
      o = i(20),
      s = i(3),
      r = i(1),
      a = i(5),
      c = i(2);
    const l = "sendOutcome",
      d = "sendUniqueOutcome";
    class u {
      constructor(e, t, i, n) {
        (this.outcomeName = i),
          (this.config = t),
          (this.appId = e),
          (this.isUnique = n);
      }
      getAttribution() {
        return n.a(this, void 0, void 0, function* () {
          return yield u.getAttribution(this.config);
        });
      }
      beforeOutcomeSend() {
        return n.a(this, void 0, void 0, function* () {
          const e = this.isUnique ? d : l;
          return (
            Object(c.s)(e, this.outcomeName),
            this.config
              ? this.outcomeName
                ? (yield Object(c.c)(),
                  !!(yield OneSignal.privateIsPushNotificationsEnabled()) ||
                    (r.a.warn(
                      "Reporting outcomes is supported only for subscribed users."
                    ),
                    !1))
                : (r.a.error("Outcome name is required"), !1)
              : (r.a.debug(
                  "Outcomes feature not supported by main application yet."
                ),
                !1)
          );
        });
      }
      getAttributedNotifsByUniqueOutcomeName() {
        return n.a(this, void 0, void 0, function* () {
          return (yield s.a.getAll("SentUniqueOutcome"))
            .filter((e) => e.outcomeName === this.outcomeName)
            .reduce((e, t) => {
              const i = t.notificationIds || [];
              return [...e, ...i];
            }, []);
        });
      }
      getNotifsToAttributeWithUniqueOutcome(e) {
        return n.a(this, void 0, void 0, function* () {
          const t = yield this.getAttributedNotifsByUniqueOutcomeName();
          return e.filter((e) => -1 === t.indexOf(e));
        });
      }
      shouldSendUnique(e, t) {
        return e.type === o.a.Unattributed || t.length > 0;
      }
      saveSentUniqueOutcome(e) {
        return n.a(this, void 0, void 0, function* () {
          const t = this.outcomeName,
            i = yield s.a.get("SentUniqueOutcome", t),
            n = yield s.a.getCurrentSession(),
            o = [...(i ? i.notificationIds : []), ...e],
            r = n ? n.startTimestamp : null;
          yield s.a.put("SentUniqueOutcome", {
            outcomeName: t,
            notificationIds: o,
            sentDuringSession: r,
          });
        });
      }
      wasSentDuringSession() {
        return n.a(this, void 0, void 0, function* () {
          const e = yield s.a.get("SentUniqueOutcome", this.outcomeName);
          if (!e) return !1;
          const t = yield s.a.getCurrentSession(),
            i = t && e.sentDuringSession === t.startTimestamp,
            n = !t && !!e.sentDuringSession;
          return i || n;
        });
      }
      send(e) {
        return n.a(this, void 0, void 0, function* () {
          const { type: t, notificationIds: i, weight: n } = e;
          switch (t) {
            case o.a.Direct:
              return (
                this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                void (yield OneSignal.context.updateManager.sendOutcomeDirect(
                  this.appId,
                  i,
                  this.outcomeName,
                  n
                ))
              );
            case o.a.Indirect:
              return (
                this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                void (yield OneSignal.context.updateManager.sendOutcomeInfluenced(
                  this.appId,
                  i,
                  this.outcomeName,
                  n
                ))
              );
            case o.a.Unattributed:
              if (this.isUnique) {
                if (yield this.wasSentDuringSession())
                  return void r.a.warn(
                    "(Unattributed) unique outcome was already sent during this session"
                  );
                yield this.saveSentUniqueOutcome([]);
              }
              return void (yield OneSignal.context.updateManager.sendOutcomeUnattributed(
                this.appId,
                this.outcomeName,
                n
              ));
            default:
              return void r.a.warn(
                "You are on a free plan. Please upgrade to use this functionality."
              );
          }
        });
      }
      static getAttribution(e) {
        return n.a(this, void 0, void 0, function* () {
          if (e.direct && e.direct.enabled) {
            const e = yield s.a.getAll("NotificationClicked");
            if (e.length > 0)
              return {
                type: o.a.Direct,
                notificationIds: [e[0].notificationId],
              };
          }
          if (e.indirect && e.indirect.enabled) {
            const t = 60 * e.indirect.influencedTimePeriodMin * 1e3,
              i = new Date(new Date().getTime() - t).getTime(),
              n = yield s.a.getAll("NotificationReceived");
            if (
              (r.a.debug(`\tFound total of ${n.length} received notifications`),
              n.length > 0)
            ) {
              const t = e.indirect.influencedNotificationsLimit,
                c = a.a.sortArrayOfObjects(n, (e) => e.timestamp, !0, !1),
                l = c
                  .filter((e) => e.timestamp >= i)
                  .slice(0, t)
                  .map((e) => e.notificationId);
              r.a.debug(
                `\tTotal of ${l.length} received notifications are within reporting window.`
              );
              const d = c
                .filter((e) => -1 === l.indexOf(e.notificationId))
                .map((e) => e.notificationId);
              if (
                (d.forEach((e) => s.a.remove("NotificationReceived", e)),
                r.a.debug(
                  `\t${d.length} received notifications will be deleted.`
                ),
                l.length > 0)
              )
                return { type: o.a.Indirect, notificationIds: l };
            }
          }
          return e.unattributed && e.unattributed.enabled
            ? { type: o.a.Unattributed, notificationIds: [] }
            : { type: o.a.NotSupported, notificationIds: [] };
        });
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return l;
    });
    var n = i(0),
      o = i(19),
      s = i(18),
      r = i(1),
      a = i(5),
      c = i(20);
    class l {
      static downloadServerAppConfig(e) {
        return n.a(this, void 0, void 0, function* () {
          return (
            a.a.enforceAppId(e),
            yield new Promise((t, i) => {
              t(o.a.get(`sync/${e}/web`, null));
            })
          );
        });
      }
      static getUserIdFromSubscriptionIdentifier(e, t, i) {
        return (
          a.a.enforceAppId(e),
          o.a
            .post("players", {
              app_id: e,
              device_type: t,
              identifier: i,
              notification_types: s.a.TemporaryWebRecord,
            })
            .then((e) => (e && e.id ? e.id : null))
            .catch(
              (e) => (
                r.a.debug(
                  "Error getting user ID from subscription identifier:",
                  e
                ),
                null
              )
            )
        );
      }
      static updatePlayer(e, t, i) {
        return n.a(this, void 0, void 0, function* () {
          return yield a.a.enforceAppIdAndPlayerId(e, t, () =>
            n.a(this, void 0, void 0, function* () {
              yield o.a.put(`players/${t}`, Object.assign({ app_id: e }, i));
            })
          );
        });
      }
      static updateUserSession(e, t) {
        return n.a(this, void 0, void 0, function* () {
          return yield a.a.enforceAppIdAndPlayerId(t.app_id, e, () =>
            n.a(this, void 0, void 0, function* () {
              const i = yield o.a.post(`players/${e}/on_session`, t);
              return i.id ? i.id : e;
            })
          );
        });
      }
      static sendSessionDuration(e, t, i, s, r) {
        return n.a(this, void 0, void 0, function* () {
          a.a.enforceAppIdAndPlayerId(e, t, () =>
            n.a(this, void 0, void 0, function* () {
              const n = {
                app_id: e,
                type: 1,
                state: "ping",
                active_time: i,
                device_type: s,
              };
              switch (r.type) {
                case c.a.Direct:
                  (n.direct = !0), (n.notification_ids = r.notificationIds);
                  break;
                case c.a.Indirect:
                  (n.direct = !1), (n.notification_ids = r.notificationIds);
              }
              yield o.a.post(`players/${t}/on_focus`, n);
            })
          );
        });
      }
    }
    t.b = l;
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return s;
    });
    var n = i(0),
      o = i(1);
    class s {
      static getRegistration() {
        return n.a(this, void 0, void 0, function* () {
          try {
            return yield navigator.serviceWorker.getRegistration(location.href);
          } catch (e) {
            return (
              o.a.warn(
                "[Service Worker Status] Error Checking service worker registration",
                location.href,
                e
              ),
              null
            );
          }
        });
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    });
    class n {
      serialize() {
        return {
          deviceId: this.deviceId,
          subscriptionToken: this.subscriptionToken,
          optedOut: this.optedOut,
          createdAt: this.createdAt,
          expirationTime: this.expirationTime,
        };
      }
      static deserialize(e) {
        const t = new n();
        return (
          (t.deviceId = e.deviceId),
          (t.subscriptionToken = e.subscriptionToken),
          (t.optedOut = e.optedOut),
          (t.createdAt = e.createdAt),
          (t.expirationTime = e.expirationTime),
          t
        );
      }
    }
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return c;
    });
    var n = i(0),
      o = i(25),
      s = i(1),
      r = i(5);
    const a = 3;
    class c {
      constructor(e) {
        (this.databaseName = e), (this.emitter = new o.a());
      }
      open(e) {
        return new Promise((t) => {
          let i = void 0;
          try {
            i = indexedDB.open(e, a);
          } catch (e) {}
          if (!i) return null;
          (i.onerror = this.onDatabaseOpenError),
            (i.onblocked = this.onDatabaseOpenBlocked),
            (i.onupgradeneeded = this.onDatabaseUpgradeNeeded),
            (i.onsuccess = () => {
              (this.database = i.result),
                (this.database.onerror = this.onDatabaseError),
                (this.database.onversionchange = this.onDatabaseVersionChange),
                t(this.database);
            });
        });
      }
      ensureDatabaseOpen() {
        return n.a(this, void 0, void 0, function* () {
          return (
            this.openLock || (this.openLock = this.open(this.databaseName)),
            yield this.openLock
          );
        });
      }
      onDatabaseOpenError(e) {
        e.preventDefault();
        const t = e.target.error;
        r.b.contains(
          t.message,
          "The operation failed for reasons unrelated to the database itself and not covered by any other error code"
        ) ||
        r.b.contains(
          t.message,
          "A mutation operation was attempted on a database that did not allow mutations"
        )
          ? s.a.warn(
              "OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6"
            )
          : s.a.warn("OneSignal: Fatal error opening IndexedDb database:", t);
      }
      onDatabaseError(e) {
        s.a.debug("IndexedDb: Generic database error", e.target.errorCode);
      }
      onDatabaseOpenBlocked() {
        s.a.debug("IndexedDb: Blocked event");
      }
      onDatabaseVersionChange(e) {
        s.a.debug("IndexedDb: versionchange event");
      }
      onDatabaseUpgradeNeeded(e) {
        s.a.debug(
          "IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event)."
        );
        const t = e.target.result;
        e.oldVersion < 1 &&
          (t.createObjectStore("Ids", { keyPath: "type" }),
          t.createObjectStore("NotificationOpened", { keyPath: "url" }),
          t.createObjectStore("Options", { keyPath: "key" })),
          e.oldVersion < 2 &&
            (t.createObjectStore("Sessions", { keyPath: "sessionKey" }),
            t.createObjectStore("NotificationReceived", {
              keyPath: "notificationId",
            }),
            t.createObjectStore("NotificationClicked", {
              keyPath: "notificationId",
            })),
          e.oldVersion < 3 &&
            t.createObjectStore("SentUniqueOutcome", {
              keyPath: "outcomeName",
            }),
          "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0);
      }
      get(e, t) {
        return n.a(this, void 0, void 0, function* () {
          const i = yield this.ensureDatabaseOpen();
          return t
            ? yield new Promise((n, o) => {
                const s = i.transaction(e).objectStore(e).get(t);
                (s.onsuccess = () => {
                  n(s.result);
                }),
                  (s.onerror = () => {
                    o(s.error);
                  });
              })
            : yield new Promise((t, n) => {
                let o = {},
                  s = i.transaction(e).objectStore(e).openCursor();
                (s.onsuccess = (e) => {
                  const i = e.target.result;
                  if (i) {
                    let e = i.key;
                    (o[e] = i.value), i.continue();
                  } else t(o);
                }),
                  (s.onerror = () => {
                    n(s.error);
                  });
              });
        });
      }
      getAll(e) {
        return n.a(this, void 0, void 0, function* () {
          return yield new Promise((t, i) =>
            n.a(this, void 0, void 0, function* () {
              let n = (yield this.ensureDatabaseOpen())
                .transaction(e)
                .objectStore(e)
                .openCursor();
              const o = [];
              (n.onsuccess = (e) => {
                const i = e.target.result;
                i ? (o.push(i.value), i.continue()) : t(o);
              }),
                (n.onerror = () => {
                  i(n.error);
                });
            })
          );
        });
      }
      put(e, t) {
        return n.a(this, void 0, void 0, function* () {
          return (
            yield this.ensureDatabaseOpen(),
            yield new Promise((i, n) => {
              try {
                let o = this.database
                  .transaction([e], "readwrite")
                  .objectStore(e)
                  .put(t);
                (o.onsuccess = () => {
                  i(t);
                }),
                  (o.onerror = (e) => {
                    s.a.error("Database PUT Transaction Error:", e), n(e);
                  });
              } catch (e) {
                s.a.error("Database PUT Error:", e), n(e);
              }
            })
          );
        });
      }
      remove(e, t) {
        return n.a(this, void 0, void 0, function* () {
          const i = yield this.ensureDatabaseOpen();
          return new Promise((n, o) => {
            try {
              const r = i.transaction([e], "readwrite").objectStore(e),
                a = t ? r.delete(t) : r.clear();
              (a.onsuccess = () => {
                n(t);
              }),
                (a.onerror = (e) => {
                  s.a.error("Database REMOVE Transaction Error:", e), o(e);
                });
            } catch (e) {
              s.a.error("Database REMOVE Error:", e), o(e);
            }
          });
        });
      }
    }
  },
  function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
      return n;
    }),
      (function (e) {
        (e[(e.HttpsPermissionRequest = "HTTPS permission request")] =
          "HttpsPermissionRequest"),
          (e[
            (e.FullscreenHttpPermissionMessage =
              "fullscreen HTTP permission message")
          ] = "FullscreenHttpPermissionMessage"),
          (e[
            (e.FullscreenHttpsPermissionMessage =
              "fullscreen HTTPS permission message")
          ] = "FullscreenHttpsPermissionMessage"),
          (e[(e.SlidedownPermissionMessage = "slidedown permission message")] =
            "SlidedownPermissionMessage"),
          (e[(e.SubscriptionBell = "subscription bell")] = "SubscriptionBell");
      })(n || (n = {}));
  },
  function (e, t) {
    e.exports = function (e, t, o) {
      "function" == typeof t && ((o = t), (t = {}));
      t || (t = {});
      var s,
        r,
        a = t.prefix || "__jp",
        c = t.name || a + i++,
        l = t.param || "callback",
        d = null != t.timeout ? t.timeout : 6e4,
        u = encodeURIComponent,
        g = document.getElementsByTagName("script")[0] || document.head;
      d &&
        (r = setTimeout(function () {
          p(), o && o(new Error("Timeout"));
        }, d));
      function p() {
        s.parentNode && s.parentNode.removeChild(s),
          (window[c] = n),
          r && clearTimeout(r);
      }
      return (
        (window[c] = function (e) {
          p(), o && o(null, e);
        }),
        (e = (e += (~e.indexOf("?") ? "&" : "?") + l + "=" + u(c)).replace(
          "?&",
          "?"
        )),
        ((s = document.createElement("script")).src = e),
        g.parentNode.insertBefore(s, g),
        function () {
          window[c] && p();
        }
      );
    };
    var i = 0;
    function n() {}
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1),
      o = i(2);
    class s {
      static doReplay(e) {
        e &&
          (Array.isArray(e)
            ? s.processAsArray(e)
            : e.constructor && "OneSignalStubES6" === e.constructor.name
            ? s.processAsES6Stub(e)
            : n.a.error(
                "window.OneSignal is an unexpected type! Should be an Array, OneSignalStubES6, or undefined."
              ));
      }
      static processAsArray(e) {
        for (const t of e)
          try {
            OneSignal.push(t);
          } catch (e) {
            n.a.error(e);
          }
      }
      static processAsES6Stub(e) {
        e.SERVICE_WORKER_PATH &&
          (OneSignal.SERVICE_WORKER_PATH = e.SERVICE_WORKER_PATH),
          e.SERVICE_WORKER_UPDATER_PATH &&
            (OneSignal.SERVICE_WORKER_UPDATER_PATH =
              e.SERVICE_WORKER_UPDATER_PATH),
          e.currentLogLevel && OneSignal.log.setLevel(e.currentLogLevel),
          e.SERVICE_WORKER_PARAM &&
            (OneSignal.SERVICE_WORKER_PARAM = e.SERVICE_WORKER_PARAM),
          e.preExistingArray && s.processAsArray(e.preExistingArray);
        for (const t of e.directFunctionCallsArray) {
          const e = OneSignal[t.functionName].apply(OneSignal, t.args);
          t.delayedPromise &&
            e instanceof Promise &&
            e
              .then(function (...e) {
                t.delayedPromise &&
                  t.delayedPromise.resolve &&
                  t.delayedPromise.resolve.apply(null, e);
              })
              .catch(function (...e) {
                t.delayedPromise &&
                  t.delayedPromise.reject &&
                  t.delayedPromise.reject.apply(null, e);
              });
        }
      }
    }
    "undefined" != typeof window &&
      (function () {
        if ((Object(o.p)(), Object(o.n)() > 1))
          return (
            n.a.warn(
              "OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."
            ),
            void n.a.debug(
              "OneSignal: Exiting from SDK initialization to prevent double-initialization errors. " +
                `Occurred ${Object(o.n)()} times.`
            )
          );
        const e = window.OneSignal;
        (window.OneSignal = i(40).default), s.doReplay(e);
      })();
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var n,
      o,
      s,
      r,
      a = i(0),
      c = i(8),
      l = i.n(c),
      d = i(11),
      InvalidArgumentError = i(10),
      InvalidStateError = i(13),
      u = i(12);
    ((o = n || (n = {}))[(o.Unknown = 0)] = "Unknown"),
      (o[(o.NoDeviceId = 1)] = "NoDeviceId"),
      (o[(o.NoEmailSet = 2)] = "NoEmailSet"),
      (o[(o.OptedOut = 3)] = "OptedOut");
    class g extends u.a {
      constructor(e) {
        switch (e) {
          case n.Unknown || n.NoDeviceId:
            super(
              "This operation can only be performed after the user is subscribed."
            );
            break;
          case n.NoEmailSet:
            super("No email is currently set.");
            break;
          case n.OptedOut:
            super(
              "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed."
            );
        }
        (this.reason = n[e]), Object.setPrototypeOf(this, g.prototype);
      }
    }
    ((r = s || (s = {}))[(r.InvalidAppId = 0)] = "InvalidAppId"),
      (r[(r.AppNotConfiguredForWebPush = 1)] = "AppNotConfiguredForWebPush"),
      (r[(r.MissingSubdomain = 2)] = "MissingSubdomain"),
      (r[(r.WrongSiteUrl = 3)] = "WrongSiteUrl"),
      (r[(r.MultipleInitialization = 4)] = "MultipleInitialization"),
      (r[(r.MissingSafariWebId = 5)] = "MissingSafariWebId"),
      (r[(r.Unknown = 6)] = "Unknown");
    class p extends u.a {
      constructor(e, t) {
        switch (e) {
          case s.InvalidAppId:
            super(
              "OneSignal: This app ID does not match any existing app. Double check your app ID."
            );
            break;
          case s.AppNotConfiguredForWebPush:
            super(
              "OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ)."
            );
            break;
          case s.MissingSubdomain:
            super(
              "OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB)."
            );
            break;
          case s.WrongSiteUrl:
            t && t.siteUrl
              ? super(
                  `OneSignal: This web push config can only be used on ${
                    new URL(t.siteUrl).origin
                  }. Your current origin is ${location.origin}.`
                )
              : super(
                  "OneSignal: This web push config can not be used on the current site."
                );
            break;
          case s.MultipleInitialization:
            super(
              "OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once."
            );
            break;
          case s.MissingSafariWebId:
            super(
              "OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide."
            );
            break;
          case s.Unknown:
            super("OneSignal: An unknown initialization error occurred.");
        }
        (this.reason = s[e]), Object.setPrototypeOf(this, p.prototype);
      }
    }
    var h = i(7);
    class f {
      static put(e, t) {
        return (
          void 0 === f.store[e] && (f.store[e] = [null, null]),
          f.store[e].push(t),
          f.store[e].length == f.LIMIT + 1 && f.store[e].shift(),
          f.store[e]
        );
      }
      static get(e) {
        return void 0 === f.store[e] && (f.store[e] = [null, null]), f.store[e];
      }
      static getFirst(e) {
        return f.get(e)[0];
      }
      static getLast(e) {
        return f.get(e)[1];
      }
      static remove(e) {
        delete f.store[e];
      }
      static isEmpty(e) {
        let t = f.get(e);
        return null === t[0] && null === t[1];
      }
    }
    (f.store = {}), (f.LIMIT = 2);
    var m = i(23),
      b = i(21),
      S = i(26),
      v = i(27);
    class O extends v.a {
      constructor(e, t, i) {
        super(),
          (this.email = e),
          (this.emailAuthHash = t),
          (this.pushDeviceRecordId = i),
          (this.deliveryPlatform = S.a.Email);
      }
      serialize() {
        const e = super.serialize();
        return (
          this.email && (e.identifier = this.email),
          this.emailAuthHash && (e.email_auth_hash = this.emailAuthHash),
          this.pushDeviceRecordId &&
            (e.device_player_id = this.pushDeviceRecordId),
          e
        );
      }
      deserialize(e) {
        throw new b.a();
      }
    }
    var y = i(19),
      w = i(5),
      E = i(1);
    class P {
      static getPlayer(e, t) {
        return (
          w.b.enforceAppId(e),
          w.b.enforcePlayerId(t),
          y.b.get(`players/${t}?app_id=${e}`)
        );
      }
      static updatePlayer(e, t, i) {
        return (
          w.b.enforceAppId(e),
          w.b.enforcePlayerId(t),
          y.b.put(`players/${t}`, Object.assign({ app_id: e }, i))
        );
      }
      static sendNotification(e, t, i, n, o, s, r, a) {
        var c = {
          app_id: e,
          contents: n,
          include_player_ids: t,
          isAnyWeb: !0,
          data: r,
          web_buttons: a,
        };
        return (
          i && (c.headings = i),
          o && (c.url = o),
          s && ((c.chrome_web_icon = s), (c.firefox_icon = s)),
          w.b.trimUndefined(c),
          y.b.post("notifications", c)
        );
      }
      static createUser(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = e.serialize();
          w.b.enforceAppId(t.app_id);
          const i = yield y.b.post("players", t);
          return i && i.success ? i.id : null;
        });
      }
      static createEmailRecord(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          w.b.enforceAppId(e.appId);
          const n = new O(t.emailAddress, t.emailAuthHash, i);
          n.appId = e.appId;
          const o = yield y.b.post("players", n.serialize());
          return o && o.success ? o.id : null;
        });
      }
      static updateEmailRecord(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          w.b.enforceAppId(e.appId), w.b.enforcePlayerId(t.emailId);
          const n = new O(t.emailAddress, t.emailAuthHash, i);
          n.appId = e.appId;
          const o = yield y.b.put(`players/${t.emailId}`, n.serialize());
          return o && o.success ? o.id : null;
        });
      }
      static logoutEmail(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          w.b.enforceAppId(e.appId), w.b.enforcePlayerId(i);
          const n = yield y.b.post(`players/${i}/email_logout`, {
            app_id: e.appId,
            parent_player_id: t.emailId,
            email_auth_hash: t.emailAuthHash ? t.emailAuthHash : void 0,
          });
          return !(!n || !n.success);
        });
      }
      static updateUserSession(e, t) {
        return a.a(this, void 0, void 0, function* () {
          try {
            const i = t.serialize();
            w.b.enforceAppId(i.app_id), w.b.enforcePlayerId(e);
            const n = yield y.b.post(`players/${e}/on_session`, i);
            return n.id ? n.id : e;
          } catch (e) {
            throw e &&
              Array.isArray(e.errors) &&
              e.errors.length > 0 &&
              w.b.contains(e.errors[0], "app_id not found")
              ? new m.a(m.b.MissingAppId)
              : e;
          }
        });
      }
      static sendOutcome(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.info("Outcome payload:", e);
          try {
            yield y.b.post("outcomes/measure", e);
          } catch (e) {
            E.a.error("sendOutcome", e);
          }
        });
      }
    }
    var I = i(3),
      C = i(2);
    class T {
      static initialize(e) {
        return a.a(this, void 0, void 0, function* () {
          if (!e || !e.enabled) return;
          if (
            (E.a.info("Inititalize CustomLink"),
            0 !==
              (yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet()))
          )
            return void E.a.debug(
              "Not initializing custom link button because styles failed to load."
            );
          document.querySelectorAll(T.containerSelector).forEach((t) => {
            T.isInitialized(t) || T.injectMarkup(t, e);
          });
          const t = yield OneSignal.privateIsPushNotificationsEnabled(),
            i = yield OneSignal.internalIsOptedOut();
          document
            .querySelectorAll(T.subscribeSelector)
            .forEach((n) => T.initSubscribeElement(n, e, t, i)),
            document
              .querySelectorAll(T.explanationSelector)
              .forEach((i) => T.initExplanationElement(i, e, t));
        });
      }
      static injectMarkup(e, t) {
        if (t.text) {
          if (((e.innerHTML = ""), t.text.explanation)) {
            const t = document.createElement("p");
            Object(C.a)(t, T.explanationClass), e.appendChild(t);
          }
          if (t.text.subscribe) {
            const t = document.createElement("button");
            Object(C.a)(t, T.subscribeClass), e.appendChild(t);
          }
          T.markAsInitialized(e);
        } else
          E.a.error(
            "CustomLink: required property 'text' is missing in the config"
          );
      }
      static initSubscribeElement(e, t, i, n) {
        t.text && t.text.subscribe && (i || (e.textContent = t.text.subscribe)),
          t.text &&
            t.text.unsubscribe &&
            i &&
            (e.textContent = t.text.unsubscribe),
          T.setResetClass(e),
          T.setStateClass(e, i),
          T.setStyleClass(e, t),
          T.setSizeClass(e, t),
          T.setCustomColors(e, t),
          !0 !== t.unsubscribeEnabled && Object(C.a)(e, "hide"),
          e.setAttribute(T.subscriptionStateAttribute, i.toString()),
          e.setAttribute(T.optedOutAttribute, n.toString()),
          T.isInitialized(e) ||
            (e.addEventListener("click", () => {
              E.a.info("CustomLink: subscribe clicked"), T.handleClick(e);
            }),
            T.markAsInitialized(e));
      }
      static handleClick(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = "true" === e.getAttribute(T.subscriptionStateAttribute),
            i = "true" === e.getAttribute(T.optedOutAttribute);
          if (t) {
            (yield OneSignal.privateIsPushNotificationsEnabled()) &&
              (yield OneSignal.setSubscription(!1));
          } else if (i) yield OneSignal.setSubscription(!0);
          else {
            const e = {
              autoAccept: !OneSignal.environmentInfo.requiresUserInteraction,
            };
            yield OneSignal.registerForPushNotifications(e);
          }
        });
      }
      static initExplanationElement(e, t, i) {
        t.text && t.text.explanation && (e.textContent = t.text.explanation),
          T.setResetClass(e),
          T.setStateClass(e, i),
          T.setSizeClass(e, t),
          !0 !== t.unsubscribeEnabled && Object(C.a)(e, "hide");
      }
      static setCustomColors(e, t) {
        "button" === t.style && t.color && t.color.button && t.color.text
          ? ((e.style.backgroundColor = t.color.button),
            (e.style.color = t.color.text))
          : "link" === t.style &&
            t.color &&
            t.color.text &&
            (e.style.color = t.color.text);
      }
      static setStateClass(e, t) {
        const i = t ? "state-unsubscribed" : "state-subscribed",
          n = t ? "state-subscribed" : "state-unsubscribed";
        Object(C.o)(e, i) && Object(C.v)(e, i),
          Object(C.o)(e, n) || Object(C.a)(e, n);
      }
      static setStyleClass(e, t) {
        if (!t || !t.style) return;
        const i = t.style;
        Object(C.o)(e, i) || Object(C.a)(e, i);
      }
      static setSizeClass(e, t) {
        if (!t || !t.size) return;
        const i = t.size;
        Object(C.o)(e, i) || Object(C.a)(e, i);
      }
      static setResetClass(e) {
        const t = T.resetClass;
        Object(C.o)(e, t) || Object(C.a)(e, t);
      }
      static markAsInitialized(e) {
        e.setAttribute(T.initializedAttribute, "true");
      }
      static isInitialized(e) {
        return "true" === e.getAttribute(T.initializedAttribute);
      }
    }
    (T.initializedAttribute = "data-cl-initialized"),
      (T.subscriptionStateAttribute = "data-cl-state"),
      (T.optedOutAttribute = "data-cl-optedout"),
      (T.containerClass = "onesignal-customlink-container"),
      (T.containerSelector = `.${T.containerClass}`),
      (T.subscribeClass = "onesignal-customlink-subscribe"),
      (T.subscribeSelector = `.${T.subscribeClass}`),
      (T.explanationClass = "onesignal-customlink-explanation"),
      (T.explanationSelector = `.${T.explanationClass}`),
      (T.resetClass = "onesignal-reset");
    var A,
      N = i(9),
      M = i(31);
    class k {
      static isCategorySlidedownConfigured(e) {
        const { promptOptions: t } = e.appConfig.userConfig;
        return (
          !!(t && t.slidedown && t.slidedown.categories) &&
          !!t.slidedown.categories.tags &&
          t.slidedown.categories.tags.length > 0
        );
      }
    }
    !(function (e) {
      (e.Default = "default"), (e.Granted = "granted"), (e.Denied = "denied");
    })(A || (A = {}));
    var x = i(4);
    class _ {
      static get STORED_PERMISSION_KEY() {
        return "storedNotificationPermission";
      }
      getNotificationPermission(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield this.getReportedNotificationPermission(e);
          return (yield this.isPermissionEnvironmentAmbiguous(t))
            ? yield this.getInterpretedAmbiguousPermission(t)
            : t;
        });
      }
      getReportedNotificationPermission(e) {
        return a.a(this, void 0, void 0, function* () {
          if (l.a.safari) return _.getSafariNotificationPermission(e);
          if (N.b.isUsingSubscriptionWorkaround())
            return yield this.getOneSignalSubdomainNotificationPermission(e);
          {
            const e = this.getW3cNotificationPermission();
            return (yield this.isPermissionEnvironmentAmbiguous(e))
              ? yield this.getInterpretedAmbiguousPermission(e)
              : this.getW3cNotificationPermission();
          }
        });
      }
      static getSafariNotificationPermission(e) {
        if (e) return window.safari.pushNotification.permission(e).permission;
        throw new InvalidArgumentError.a(
          "safariWebId",
          InvalidArgumentError.b.Empty
        );
      }
      getW3cNotificationPermission() {
        return window.Notification.permission;
      }
      getOneSignalSubdomainNotificationPermission(e) {
        return a.a(this, void 0, void 0, function* () {
          return new Promise((t) => {
            OneSignal.proxyFrameHost.message(
              OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION,
              { safariWebId: e },
              (e) => {
                const i = e.data;
                t(i);
              }
            );
          });
        });
      }
      isPermissionEnvironmentAmbiguous(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = N.b.redetectBrowserUserAgent();
          return (
            !t.safari &&
            !t.firefox &&
            e === A.Denied &&
            (this.isCurrentFrameContextCrossOrigin() ||
              (yield x.a.isFrameContextInsecure()) ||
              N.b.isUsingSubscriptionWorkaround() ||
              x.a.isInsecureOrigin())
          );
        });
      }
      isCurrentFrameContextCrossOrigin() {
        let e;
        try {
          e = window.top.location.origin;
        } catch (e) {
          return !0;
        }
        return window.top !== window && e !== window.location.origin;
      }
      getInterpretedAmbiguousPermission(e) {
        return a.a(this, void 0, void 0, function* () {
          switch (e) {
            case A.Denied:
              const t = this.getStoredPermission();
              return t || A.Default;
            default:
              return e;
          }
        });
      }
      getStoredPermission() {
        return W.getStoredPermission();
      }
      setStoredPermission(e) {
        W.setStoredPermission(e);
      }
      updateStoredPermission() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield this.getNotificationPermission();
          return this.setStoredPermission(e);
        });
      }
    }
    const R = "isOptedOut",
      D = "isPushNotificationsEnabled",
      U = "os_pageViews";
    class W {
      static getIsOptedOut() {
        return "true" === localStorage.getItem(R);
      }
      static getIsPushNotificationsEnabled() {
        return "true" === localStorage.getItem(D);
      }
      static setIsOptedOut(e) {
        localStorage.setItem(R, e.toString());
      }
      static setIsPushNotificationsEnabled(e) {
        localStorage.setItem(D, e.toString());
      }
      static setStoredPermission(e) {
        localStorage.setItem(_.STORED_PERMISSION_KEY, e);
      }
      static getStoredPermission() {
        switch (localStorage.getItem(_.STORED_PERMISSION_KEY) || "default") {
          case "granted":
            return A.Granted;
          case "denied":
            return A.Denied;
          default:
            return A.Default;
        }
      }
      static setLocalPageViewCount(e) {
        localStorage.setItem(U, e.toString());
      }
      static getLocalPageViewCount() {
        return Number(localStorage.getItem(U));
      }
    }
    class B {
      static onNotificationPermissionChange() {
        B.checkAndTriggerSubscriptionChanged();
      }
      static onInternalSubscriptionSet(e) {
        return a.a(this, void 0, void 0, function* () {
          f.put("subscription.optedOut", e);
        });
      }
      static checkAndTriggerSubscriptionChanged() {
        return a.a(this, void 0, void 0, function* () {
          N.a.logMethodCall("checkAndTriggerSubscriptionChanged");
          const e = yield OneSignal.context.subscriptionManager.getSubscriptionState(),
            t = yield OneSignal.privateIsPushNotificationsEnabled(),
            i = yield I.a.getAppState(),
            { lastKnownPushEnabled: n } = i;
          (null === n || t !== n) &&
            (E.a.info(
              "The user's subscription state changed from " +
                `${null === n ? "(not stored)" : n} ⟶ ${e.subscribed}`
            ),
            W.setIsPushNotificationsEnabled(t),
            (i.lastKnownPushEnabled = t),
            yield I.a.setAppState(i),
            B.triggerSubscriptionChanged(t));
        });
      }
      static _onSubscriptionChanged(e) {
        return a.a(this, void 0, void 0, function* () {
          B.onSubscriptionChanged_showWelcomeNotification(e),
            B.onSubscriptionChanged_sendCategorySlidedownTags(e),
            B.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(),
            B.onSubscriptionChanged_updateCustomLink();
        });
      }
      static onSubscriptionChanged_sendCategorySlidedownTags(e) {
        return a.a(this, void 0, void 0, function* () {
          if (!0 !== e) return;
          const { context: t } = OneSignal;
          k.isCategorySlidedownConfigured(t) &&
            (yield OneSignal.context.tagManager.sendTags(!1));
        });
      }
      static onSubscriptionChanged_showWelcomeNotification(e) {
        return a.a(this, void 0, void 0, function* () {
          if (OneSignal.__doNotShowWelcomeNotification)
            E.a.debug(
              "Not showing welcome notification because user has previously subscribed."
            );
          else if (!0 === e) {
            const { deviceId: e } = yield I.a.getSubscription(),
              { appId: t } = yield I.a.getAppConfig();
            let i = OneSignal.config.userConfig.welcomeNotification,
              n = void 0 !== i && !0 === i.disable,
              o =
                void 0 !== i && void 0 !== i.title && null !== i.title
                  ? i.title
                  : "",
              s =
                void 0 !== i &&
                void 0 !== i.message &&
                null !== i.message &&
                i.message.length > 0
                  ? i.message
                  : "Thanks for subscribing!",
              r = new URL(location.href).origin + "?_osp=do_not_open",
              a = i && i.url && i.url.length > 0 ? i.url : r;
            (o = M.a.decodeHtmlEntities(o)),
              (s = M.a.decodeHtmlEntities(s)),
              n ||
                (E.a.debug("Sending welcome notification."),
                P.sendNotification(
                  t,
                  [e],
                  { en: o },
                  { en: s },
                  a,
                  null,
                  { __isOneSignalWelcomeNotification: !0 },
                  void 0
                ),
                h.a.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                  title: o,
                  message: s,
                  url: a,
                }));
          }
        });
      }
      static onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate() {
        return a.a(this, void 0, void 0, function* () {
          if (!OneSignal.config.userConfig.notifyButton) return;
          const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
          if (e && "function" == typeof e && OneSignal.notifyButton) {
            !1 !== (yield e())
              ? (E.a.debug(
                  "Showing notify button because display predicate returned true."
                ),
                OneSignal.notifyButton.launcher.show())
              : (E.a.debug(
                  "Hiding notify button because display predicate returned false."
                ),
                OneSignal.notifyButton.launcher.hide());
          }
        });
      }
      static onSubscriptionChanged_updateCustomLink() {
        return a.a(this, void 0, void 0, function* () {
          OneSignal.config.userConfig.promptOptions &&
            (yield T.initialize(
              OneSignal.config.userConfig.promptOptions.customlink
            ));
        });
      }
      static triggerSubscriptionChanged(e) {
        h.a.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e);
      }
      static fireStoredNotificationClicks(e = document.URL) {
        return a.a(this, void 0, void 0, function* () {
          function t(e) {
            return a.a(this, void 0, void 0, function* () {
              const t = yield I.a.getAppState();
              (t.clickedNotifications[e.url] = null), yield I.a.setAppState(t);
              const { data: i, timestamp: n } = e;
              if (n) {
                if ((Date.now() - n) / 1e3 / 60 > 5) return;
              }
              h.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, i);
            });
          }
          const i = yield I.a.getAppState();
          if (
            "origin" ===
            (yield I.a.get("Options", "notificationClickHandlerMatch"))
          ) {
            for (const e of Object.keys(i.clickedNotifications))
              if (new URL(e).origin === location.origin) {
                yield t(i.clickedNotifications[e]);
              }
          } else {
            var n = i.clickedNotifications[e];
            if (n) yield t(n);
            else if (!n && e.endsWith("/")) {
              var o = e.substring(0, e.length - 1);
              (n = i.clickedNotifications[o]) && (yield t(n));
            }
          }
        });
      }
    }
    var L = i(6);
    class j {
      static promiseStub() {
        return { then: j.promiseStub, catch: j.promiseStub };
      }
      static ensureBackwardsCompatibility(e) {
        j.environmentPolyfill(e),
          j.postmams(e),
          (e.syncHashedEmail = j.promiseStub);
      }
      static environmentPolyfill(e) {
        (e.environment = {}),
          (e.environment.getEnv = function () {
            return "";
          }),
          (e.environment.isPopup = function () {
            return x.a.getWindowEnv() === L.a.OneSignalSubscriptionPopup;
          }),
          (e.environment.isIframe = function () {
            return x.a.getWindowEnv() === L.a.OneSignalProxyFrame;
          });
      }
      static postmams(e) {
        const t = function () {
            this.messenger.message.apply(this.messenger, arguments);
          },
          i = function () {
            this.messenger.postMessage.apply(this.messenger, arguments);
          };
        function n(e) {
          (e.message = t), (e.postMessage = i);
        }
        e.proxyFrame && ((e.iframePostmam = e.proxyFrame), n(e.iframePostmam)),
          e.subscriptionPopup &&
            ((e.popupPostmam = e.subscriptionPopup), n(e.popupPostmam)),
          e.subscriptionModal &&
            ((e.modalPostmam = e.subscriptionModal), n(e.modalPostmam));
      }
    }
    class V {
      static isLocalStorageSupported() {
        try {
          return (
            "undefined" != typeof localStorage &&
            (localStorage.getItem("test"), !0)
          );
        } catch (e) {
          return !1;
        }
      }
      static setItem(e, t, i) {
        if (!V.isLocalStorageSupported()) return;
        const n = void 0 !== i ? 60 * i * 1e3 : 0,
          o = {
            value: JSON.stringify(t),
            timestamp: void 0 !== i ? new Date().getTime() + n : void 0,
          };
        localStorage.setItem(e, JSON.stringify(o));
      }
      static getItem(e) {
        if (!V.isLocalStorageSupported()) return null;
        const t = localStorage.getItem(e);
        let i;
        try {
          i = JSON.parse(t);
        } catch (e) {
          return null;
        }
        if (null === i) return null;
        if (i.timestamp && new Date().getTime() >= i.timestamp)
          return localStorage.removeItem(e), null;
        let n = i.value;
        try {
          n = JSON.parse(i.value);
        } catch (e) {
          return n;
        }
        return n;
      }
      static removeItem(e) {
        if (!V.isLocalStorageSupported()) return null;
        localStorage.removeItem(e);
      }
    }
    var F,
      H,
      $ = i(18),
      z = i(28),
      G = i(24);
    ((H = F || (F = {}))[(H.Blocked = 0)] = "Blocked"),
      (H[(H.Dismissed = 1)] = "Dismissed"),
      (H[(H.Default = 2)] = "Default");
    class q extends u.a {
      constructor(e) {
        switch (e) {
          case F.Dismissed:
            super("The user dismissed the permission prompt.");
            break;
          case F.Blocked:
            super("Notification permissions are blocked.");
            break;
          case F.Default:
            super("Notification permissions have not been granted yet.");
        }
        (this.reason = e), Object.setPrototypeOf(this, q.prototype);
      }
    }
    var K,
      Y = i(22),
      J = i(15),
      Z = i(34);
    !(function (e) {
      (e.Safari = "safari"),
        (e.Firefox = "firefox"),
        (e.Chrome = "chrome"),
        (e.Opera = "opera"),
        (e.Edge = "edge"),
        (e.Other = "other");
    })(K || (K = {}));
    class X {
      static registerForPush() {
        return a.a(this, void 0, void 0, function* () {
          const e = W.getIsPushNotificationsEnabled();
          return yield X.internalRegisterForPush(e);
        });
      }
      static internalRegisterForPush(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = OneSignal.context;
          let i = null;
          if (e && !t.pageViewManager.isFirstPageView()) {
            E.a.debug(
              "Not registering for push because the user is subscribed and this is not the first page view."
            ),
              E.a.debug("But we want to rekindle their session.");
            const e = yield ie.getDeviceId();
            if (e) {
              const t = yield ie.createDeviceRecord(OneSignal.config.appId, !0);
              yield OneSignal.context.sessionManager.upsertSession(
                e,
                t,
                J.b.PageRefresh
              );
            } else
              E.a.error(
                "Should have been impossible to have push as enabled but no device id."
              );
            return null;
          }
          if ("undefined" != typeof OneSignal) {
            if (OneSignal._isRegisteringForPush) return null;
            OneSignal._isRegisteringForPush = !0;
          }
          switch (x.a.getWindowEnv()) {
            case L.a.Host:
            case L.a.OneSignalSubscriptionModal:
              try {
                const e = yield t.subscriptionManager.subscribe(0);
                (i = yield t.subscriptionManager.registerSubscription(e)),
                  t.pageViewManager.incrementPageViewCount(),
                  yield G.a.triggerNotificationPermissionChanged(),
                  yield B.checkAndTriggerSubscriptionChanged();
              } catch (e) {
                E.a.info(e);
              }
              break;
            case L.a.OneSignalSubscriptionPopup:
              const e = opener || parent;
              let n;
              yield t.permissionManager.updateStoredPermission();
              try {
                (n = yield t.subscriptionManager.subscribe(1)),
                  yield t.permissionManager.updateStoredPermission();
              } catch (i) {
                if (
                  (yield t.permissionManager.updateStoredPermission(),
                  i instanceof q)
                )
                  switch (i.reason) {
                    case F.Blocked:
                      yield t.permissionManager.updateStoredPermission(),
                        OneSignal.subscriptionPopup.message(
                          OneSignal.POSTMAM_COMMANDS
                            .REMOTE_NOTIFICATION_PERMISSION_CHANGED,
                          { permission: A.Denied, forceUpdatePermission: !1 }
                        );
                      break;
                    case F.Dismissed:
                      OneSignal.subscriptionPopup.message(
                        OneSignal.POSTMAM_COMMANDS
                          .REMOTE_NOTIFICATION_PERMISSION_CHANGED,
                        { permission: A.Default, forceUpdatePermission: !0 }
                      );
                  }
                if (e) return window.close(), null;
              }
              OneSignal.subscriptionPopup.message(
                OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION,
                { rawPushSubscription: n.serialize() },
                (t) => {
                  !0 === t.data.progress
                    ? (E.a.debug(
                        "Got message from host page that remote reg. is in progress, closing popup."
                      ),
                      e && window.close())
                    : E.a.debug(
                        "Got message from host page that remote reg. could not be finished."
                      );
                }
              );
              break;
            default:
              throw (
                ("undefined" != typeof OneSignal &&
                  (OneSignal._isRegisteringForPush = !1),
                new InvalidStateError.a(
                  InvalidStateError.b.UnsupportedEnvironment
                ))
              );
          }
          return (
            "undefined" != typeof OneSignal &&
              (OneSignal._isRegisteringForPush = !1),
            i
          );
        });
      }
      static getRawPushSubscriptionForSafari(e) {
        const t = new Y.a(),
          { deviceToken: i } = window.safari.pushNotification.permission(e);
        return (t.existingSafariDeviceToken = i), t;
      }
      static getRawPushSubscriptionFromServiceWorkerRegistration() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield Z.a.getRegistration();
          if (!e) return null;
          const t = yield e.pushManager.getSubscription();
          return t ? Y.a.setFromW3cSubscription(t) : null;
        });
      }
      static getRawPushSubscriptionWhenUsingSubscriptionWorkaround() {
        return a.a(this, void 0, void 0, function* () {
          return null;
        });
      }
      static getRawPushSubscription(e, t) {
        return a.a(this, void 0, void 0, function* () {
          return e.browserType === K.Safari
            ? X.getRawPushSubscriptionForSafari(t)
            : e.isUsingSubscriptionWorkaround
            ? X.getRawPushSubscriptionWhenUsingSubscriptionWorkaround()
            : e.isBrowserAndSupportsServiceWorkers
            ? yield X.getRawPushSubscriptionFromServiceWorkerRegistration()
            : null;
        });
      }
    }
    const Q = {
        reportingThreshold: 30,
        enableOnSessionForUnsubcribed: !1,
        enableOnFocus: !0,
      },
      ee = { pageViews: 1, timeDelay: 0 },
      te = {
        actionMessage:
          "We'd like to show you notifications for the latest news and updates.",
        acceptButton: "Allow",
        cancelButton: "Cancel",
        categoryDefaults: {
          updateMessage:
            "Update your push notification subscription preferences.",
          positiveUpdateButton: "Save Preferences",
          negativeUpdateButton: "Cancel",
        },
        savingText: "Saving...",
      };
    class ie {
      static getCurrentNotificationType() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield OneSignal.context.permissionManager.getNotificationPermission(
            OneSignal.context.appConfig.safariWebId
          );
          if (e === A.Default) return $.a.Default;
          if (e === A.Denied)
            return N.a.isUsingSubscriptionWorkaround()
              ? $.a.Default
              : $.a.NotSubscribed;
          const t = yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
          if (e === A.Granted && t) {
            return (yield OneSignal.privateIsPushNotificationsEnabled())
              ? $.a.Subscribed
              : $.a.MutedByApi;
          }
          return $.a.Default;
        });
      }
      static getNotificationTypeFromOptIn(e) {
        return 1 == e || null == e ? $.a.Subscribed : $.a.MutedByApi;
      }
      static wasHttpsNativePromptDismissed() {
        return "dismissed" === V.getItem("onesignal-notification-prompt");
      }
      static markHttpSlidedownShown() {
        sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true");
      }
      static isHttpPromptAlreadyShown() {
        return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN");
      }
      static checkAndTriggerNotificationPermissionChanged() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield I.a.get("Options", "notificationPermission"),
            t = yield OneSignal.getNotificationPermission();
          e !== t &&
            (yield G.a.triggerNotificationPermissionChanged(),
            yield I.a.put("Options", {
              key: "notificationPermission",
              value: t,
            }));
        });
      }
      static getNotificationIcons() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield ie.getAppId();
          if (!e)
            throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
          const t = `${x.a.getOneSignalApiUrl().toString()}/apps/${e}/icon`,
            i = yield (yield fetch(t)).json();
          if (i.errors)
            throw (
              (E.a.error(
                `API call %c${t}`,
                w.a.getConsoleStyle("code"),
                "failed with:",
                i.errors
              ),
              new Error("Failed to get notification icons."))
            );
          return i;
        });
      }
      static getSlidedownPermissionMessageOptions(e) {
        if (!e || !e.slidedown) {
          return {
            enabled: !1,
            autoPrompt: !1,
            actionMessage: e ? e.actionMessage : te.actionMessage,
            acceptButtonText: e ? e.acceptButtonText : te.acceptButton,
            cancelButtonText: e ? e.cancelButtonText : te.cancelButton,
          };
        }
        const { categories: t } = e.slidedown;
        return (
          t &&
            ((t.positiveUpdateButton = w.a.getValueOrDefault(
              t.positiveUpdateButton,
              te.categoryDefaults.positiveUpdateButton
            )),
            (t.negativeUpdateButton = w.a.getValueOrDefault(
              t.negativeUpdateButton,
              te.categoryDefaults.negativeUpdateButton
            )),
            (t.updateMessage = w.a.getValueOrDefault(
              t.updateMessage,
              te.categoryDefaults.updateMessage
            ))),
          {
            enabled: e.slidedown.enabled,
            autoPrompt: e.slidedown.autoPrompt,
            actionMessage: e.slidedown.actionMessage || te.actionMessage,
            acceptButtonText: e.slidedown.acceptButtonText || te.acceptButton,
            cancelButtonText: e.slidedown.cancelButtonText || te.cancelButton,
            categories: t,
          }
        );
      }
      static getFullscreenPermissionMessageOptions(e) {
        return e
          ? e.fullscreen
            ? {
                autoAcceptTitle: e.fullscreen.autoAcceptTitle,
                actionMessage: e.fullscreen.actionMessage,
                exampleNotificationTitleDesktop: e.fullscreen.title,
                exampleNotificationTitleMobile: e.fullscreen.title,
                exampleNotificationMessageDesktop: e.fullscreen.message,
                exampleNotificationMessageMobile: e.fullscreen.message,
                exampleNotificationCaption: e.fullscreen.caption,
                acceptButtonText: e.fullscreen.acceptButton,
                cancelButtonText: e.fullscreen.cancelButton,
              }
            : e
          : null;
      }
      static getPromptOptionsQueryString() {
        let e = "";
        if (
          ie.getFullscreenPermissionMessageOptions(
            OneSignal.config.userConfig.promptOptions
          )
        ) {
          let t = ie.getPromptOptionsPostHash();
          for (let i of Object.keys(t)) {
            e += "&" + i + "=" + t[i];
          }
        }
        return e;
      }
      static getPromptOptionsPostHash() {
        let e = ie.getFullscreenPermissionMessageOptions(
          OneSignal.config.userConfig.promptOptions
        );
        if (e) {
          var t = {
            exampleNotificationTitleDesktop: "exampleNotificationTitle",
            exampleNotificationMessageDesktop: "exampleNotificationMessage",
            exampleNotificationTitleMobile: "exampleNotificationTitle",
            exampleNotificationMessageMobile: "exampleNotificationMessage",
          };
          for (let i of Object.keys(t)) {
            let n = t[i];
            e[i] && (e[n] = e[i]);
          }
          for (
            var i = [
                "autoAcceptTitle",
                "siteName",
                "autoAcceptTitle",
                "subscribeText",
                "showGraphic",
                "actionMessage",
                "exampleNotificationTitle",
                "exampleNotificationMessage",
                "exampleNotificationCaption",
                "acceptButtonText",
                "cancelButtonText",
                "timeout",
              ],
              n = {},
              o = 0;
            o < i.length;
            o++
          ) {
            var s = i[o],
              r = e[s],
              a = encodeURIComponent(r);
            (r || !1 === r || "" === r) && (n[s] = a);
          }
        }
        return n;
      }
      static triggerCustomPromptClicked(e) {
        h.a.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, { result: e });
      }
      static getAppId() {
        return a.a(this, void 0, void 0, function* () {
          if (OneSignal.config.appId)
            return Promise.resolve(OneSignal.config.appId);
          return yield I.a.get("Ids", "appId");
        });
      }
      static createDeviceRecord(e, t = !1) {
        return a.a(this, void 0, void 0, function* () {
          let i;
          if (t) {
            const e = yield X.getRawPushSubscription(
              OneSignal.environmentInfo,
              OneSignal.config.safariWebId
            );
            e && (i = e);
          }
          const n = new z.a(i);
          return (
            (n.appId = e),
            (n.subscriptionState = yield ie.getCurrentNotificationType()),
            n
          );
        });
      }
      static getDeviceId() {
        return a.a(this, void 0, void 0, function* () {
          return (
            (yield OneSignal.database.getSubscription()).deviceId || void 0
          );
        });
      }
    }
    var ne = i(25);
    class oe {
      constructor(e, t, i) {
        if (
          ((this.windowReference = e),
          (this.sendToOrigin = t),
          (this.receiveFromOrigin = i),
          !window || !window.postMessage)
        )
          throw new Error(
            "Must pass in a valid window reference supporting postMessage():" +
              e
          );
        if (!t || !i) throw new Error("Invalid origin. Must be set.");
        (this.emitter = new ne.a()),
          (this.channel = new MessageChannel()),
          (this.messagePort = null),
          (this.isListening = !1),
          (this.isConnected = !1),
          (this.replies = {});
      }
      static get HANDSHAKE_MESSAGE() {
        return "onesignal.postmam.handshake";
      }
      static get CONNECTED_MESSAGE() {
        return "onesignal.postmam.connected";
      }
      listen() {
        E.a.debug("(Postmam) Called listen()."),
          this.isListening
            ? E.a.debug("(Postmam) Already listening for Postmam connections.")
            : d.a.isBrowser() &&
              ((this.isListening = !0),
              E.a.debug("(Postmam) Listening for Postmam connections.", this),
              window.addEventListener(
                "message",
                this.onWindowMessagePostmanConnectReceived.bind(this)
              ));
      }
      startPostMessageReceive() {
        window.addEventListener(
          "message",
          this.onWindowPostMessageReceived.bind(this)
        );
      }
      stopPostMessageReceive() {
        window.removeEventListener("message", this.onWindowPostMessageReceived);
      }
      destroy() {
        this.stopPostMessageReceive(), this.emitter.removeAllListeners();
      }
      onWindowPostMessageReceived(e) {
        if (!this.isSafeOrigin(e.origin)) return;
        let { id: t, command: i, data: n, source: o } = e.data;
        if (i === oe.CONNECTED_MESSAGE)
          return this.emitter.emit("connect"), void (this.isConnected = !0);
        let s = { id: t, command: i, data: n, source: o },
          r = Object.assign({ reply: this.reply.bind(this, s) }, s);
        if (this.replies.hasOwnProperty(t)) {
          E.a.info("(Postmam) This message is a reply."),
            !1 === this.replies[t].bind(window)(r) && delete this.replies[t];
        } else this.emitter.emit(i, r);
      }
      onWindowMessagePostmanConnectReceived(e) {
        const t = x.a.getWindowEnv().toString();
        if (
          (E.a.debug(
            `(Postmam) (${t}) Window postmessage for Postman connect received:`,
            e
          ),
          this.isSafeOrigin(e.origin))
        ) {
          var { handshake: i } = e.data;
          i === oe.HANDSHAKE_MESSAGE
            ? (E.a.info(
                "(Postmam) Got our expected Postmam handshake message (and connecting...):",
                e.data
              ),
              window.removeEventListener(
                "message",
                this.onWindowMessagePostmanConnectReceived
              ),
              (this.messagePort = e.ports[0]),
              this.messagePort.addEventListener(
                "message",
                this.onMessageReceived.bind(this),
                !1
              ),
              E.a.info(
                "(Postmam) Removed previous message event listener for handshakes, replaced with main message listener."
              ),
              this.messagePort.start(),
              (this.isConnected = !0),
              E.a.info(`(Postmam) (${t}) Connected.`),
              this.message(oe.CONNECTED_MESSAGE),
              this.emitter.emit("connect"))
            : E.a.info(
                "(Postmam) Got a postmam message, but not our expected handshake:",
                e.data
              );
        }
      }
      connect() {
        E.a.info(
          `(Postmam) (${x.a
            .getWindowEnv()
            .toString()}) Establishing a connection to ${this.sendToOrigin}.`
        ),
          (this.messagePort = this.channel.port1),
          this.messagePort.addEventListener(
            "message",
            this.onMessageReceived.bind(this),
            !1
          ),
          this.messagePort.start(),
          this.windowReference.postMessage(
            { handshake: oe.HANDSHAKE_MESSAGE },
            this.sendToOrigin,
            [this.channel.port2]
          );
      }
      onMessageReceived(e) {
        if (!e.data)
          return void E.a.debug(
            `(${x.a
              .getWindowEnv()
              .toString()}) Received an empty Postmam message:`,
            e
          );
        let { id: t, command: i, data: n, source: o } = e.data;
        if (i === oe.CONNECTED_MESSAGE)
          return this.emitter.emit("connect"), void (this.isConnected = !0);
        let s = { id: t, command: i, data: n, source: o },
          r = Object.assign({ reply: this.reply.bind(this, s) }, s);
        if (this.replies.hasOwnProperty(t)) {
          !1 === this.replies[t].bind(window)(r) && delete this.replies[t];
        } else this.emitter.emit(i, r);
      }
      reply(e, t, i) {
        const n = {
          id: e.id,
          command: e.command,
          data: t,
          source: x.a.getWindowEnv().toString(),
          isReply: !0,
        };
        "function" == typeof i && (this.replies[n.id] = i),
          this.messagePort.postMessage(n);
      }
      postMessage(e, t, i) {
        if (!e || "" == e)
          throw new Error("(Postmam) Postmam command must not be empty.");
        if ("function" == typeof t)
          return void E.a.debug(
            "You passed a function to data, did you mean to pass null?"
          );
        const n = {
          id: N.a.getRandomUuid(),
          command: e,
          data: t,
          source: x.a.getWindowEnv().toString(),
        };
        "function" == typeof i && (this.replies[n.id] = i),
          this.windowReference.postMessage(n, "*");
      }
      message(e, t, i) {
        if (!e || "" == e)
          throw new Error("(Postmam) Postmam command must not be empty.");
        if ("function" == typeof t)
          return void E.a.debug(
            "You passed a function to data, did you mean to pass null?"
          );
        const n = {
          id: N.a.getRandomUuid(),
          command: e,
          data: t,
          source: x.a.getWindowEnv().toString(),
        };
        "function" == typeof i && (this.replies[n.id] = i),
          this.messagePort.postMessage(n);
      }
      generateSafeOrigins(e) {
        const t = [];
        try {
          const i = new URL(e);
          let n = i.host;
          0 === i.host.indexOf("www.") && (n = i.host.replace("www.", "")),
            "https:" === i.protocol
              ? (t.push(`https://${n}`), t.push(`https://www.${n}`))
              : "http:" === i.protocol &&
                (t.push(`http://${n}`),
                t.push(`http://www.${n}`),
                t.push(`https://${n}`),
                t.push(`https://www.${n}`));
        } catch (e) {}
        return t;
      }
      isSafeOrigin(e) {
        if (OneSignal.config) t = OneSignal.config.subdomain;
        else var t = "x";
        const i = this.generateSafeOrigins(this.receiveFromOrigin);
        return (
          "https://onesignal.com" === e ||
          e === `https://${t || ""}.onesignal.com` ||
          e === `https://${t || ""}.os.tc` ||
          e === `https://${t || ""}.os.tc:3001` ||
          e === x.a.getOneSignalApiUrl().origin ||
          "*" === this.receiveFromOrigin ||
          w.a.contains(i, e)
        );
      }
      on(...e) {
        return a.a(this, void 0, void 0, function* () {
          return this.emitter.on.apply(this.emitter, e);
        });
      }
      off(...e) {
        return a.a(this, void 0, void 0, function* () {
          return this.emitter.off.apply(this.emitter, e);
        });
      }
      once(...e) {
        return a.a(this, void 0, void 0, function* () {
          return this.emitter.once.apply(this.emitter, e);
        });
      }
    }
    class se {
      constructor(e, t) {
        (this.appId = e), (this.registrationOptions = t);
      }
      load() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield OneSignal.isPushNotificationsEnabled(),
            t = yield OneSignal.getNotificationPermission();
          (this.url = x.a.getOneSignalApiUrl()),
            (this.url.pathname = "webPushModal"),
            (this.url.search = `${ie.getPromptOptionsQueryString()}&id=${
              this.appId
            }&httpsPrompt=true&pushEnabled=${e}&permissionBlocked=${
              "denied" === t
            }&promptType=modal`),
            E.a.info(
              `Loading iFrame for HTTPS subscription modal at ${this.url.toString()}`
            ),
            (this.modal = this.createHiddenSubscriptionDomModal(
              this.url.toString()
            )),
            this.establishCrossOriginMessaging();
        });
      }
      createHiddenSubscriptionDomModal(e) {
        let t = document.createElement("div");
        t.setAttribute("id", "OneSignal-iframe-modal"),
          t.setAttribute("style", "display:none !important"),
          (t.innerHTML =
            '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex; align-items: center; justify-content: center;"></div>'),
          document.body.appendChild(t);
        let i = document.createElement("style");
        (i.innerHTML =
          "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }"),
          document.getElementsByTagName("head")[0].appendChild(i);
        let n = document.createElement("iframe");
        return (
          (n.className = "OneSignal-permission-iframe"),
          n.setAttribute("frameborder", "0"),
          (n.width = OneSignal._windowWidth.toString()),
          (n.height = OneSignal._windowHeight.toString()),
          (n.src = e),
          document.getElementById("notif-permission").appendChild(n),
          n
        );
      }
      removeFrame() {
        const e = document.querySelector("#OneSignal-iframe-modal");
        e && e.remove();
      }
      showSubscriptionDomModal() {
        document
          .getElementById("OneSignal-iframe-modal")
          .setAttribute("style", "");
      }
      establishCrossOriginMessaging() {
        (this.messenger = new oe(this.modal, this.url.origin, this.url.origin)),
          this.messenger.startPostMessageReceive(),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.MODAL_LOADED,
            this.onModalLoaded.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED,
            this.onModalAccepted.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED,
            this.onModalRejected.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING,
            this.onModalClosing.bind(this)
          );
      }
      onModalLoaded(e) {
        this.showSubscriptionDomModal(), h.a.trigger("modalLoaded");
      }
      onModalAccepted(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug("User accepted the HTTPS modal prompt.", location.origin),
            (OneSignal._sessionInitAlreadyRunning = !1),
            this.dispose(),
            ie.triggerCustomPromptClicked("granted"),
            E.a.debug("Calling setSubscription(true)"),
            yield X.registerForPush(),
            yield OneSignal.setSubscription(!0);
        });
      }
      onModalRejected(e) {
        E.a.debug("User rejected the HTTPS modal prompt."),
          (OneSignal._sessionInitAlreadyRunning = !1),
          this.dispose(),
          ie.triggerCustomPromptClicked("denied");
      }
      onModalClosing(e) {
        E.a.info("Detected modal is closing."), this.dispose();
      }
      dispose() {
        this.messenger && this.messenger.destroy(), this.removeFrame();
      }
      message() {
        this.messenger.message.apply(this.messenger, arguments);
      }
    }
    var re,
      ae,
      ce = i(14);
    ((ae = re || (re = {})).WorkerVersion = "GetWorkerVersion"),
      (ae.Subscribe = "Subscribe"),
      (ae.SubscribeNew = "SubscribeNew"),
      (ae.AmpSubscriptionState = "amp-web-push-subscription-state"),
      (ae.AmpSubscribe = "amp-web-push-subscribe"),
      (ae.AmpUnsubscribe = "amp-web-push-unsubscribe"),
      (ae.NotificationDisplayed = "notification.displayed"),
      (ae.NotificationClicked = "notification.clicked"),
      (ae.NotificationDismissed = "notification.dismissed"),
      (ae.RedirectPage = "command.redirect"),
      (ae.SessionUpsert = "os.session.upsert"),
      (ae.SessionDeactivate = "os.session.deactivate"),
      (ae.AreYouVisible = "os.page_focused_request"),
      (ae.AreYouVisibleResponse = "os.page_focused_response"),
      (ae.SetLogging = "os.set_sw_logging");
    class le {
      constructor() {
        this.replies = {};
      }
      addListener(e, t, i) {
        const n = { callback: t, onceListenerOnly: i },
          o = this.replies[e.toString()];
        o ? o.push(n) : (this.replies[e.toString()] = [n]);
      }
      findListenersForMessage(e) {
        return this.replies[e.toString()] || [];
      }
      deleteListenerRecords(e) {
        this.replies[e.toString()] = null;
      }
      deleteAllListenerRecords() {
        this.replies = {};
      }
      deleteListenerRecord(e, t) {
        const i = this.replies[e.toString()];
        if (null != i)
          for (let e = i.length - 1; e >= 0; e--) {
            i[e] === t && i.splice(e, 1);
          }
      }
    }
    class de {
      constructor(e, t = new le()) {
        (this.context = e), (this.replies = t);
      }
      broadcast(e, t) {
        return a.a(this, void 0, void 0, function* () {
          if (x.a.getWindowEnv() !== L.a.ServiceWorker) return;
          const i = yield self.clients.matchAll({
            type: "window",
            includeUncontrolled: !0,
          });
          for (const n of i)
            E.a.debug(
              `[Worker Messenger] [SW -> Page] Broadcasting '${e.toString()}' to window client ${
                n.url
              }.`
            ),
              n.postMessage({ command: e, payload: t });
        });
      }
      unicast(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          if (x.a.getWindowEnv() === L.a.ServiceWorker) {
            if (!i)
              throw new InvalidArgumentError.a(
                "windowClient",
                InvalidArgumentError.b.Empty
              );
            E.a.debug(
              `[Worker Messenger] [SW -> Page] Unicasting '${e.toString()}' to window client ${
                i.url
              }.`
            ),
              i.postMessage({ command: e, payload: t });
          } else (yield this.isWorkerControllingPage()) || E.a.debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), yield this.waitUntilWorkerControlsPage(), E.a.debug(`[Worker Messenger] [Page -> SW] Unicasting '${e.toString()}' to service worker.`), this.directPostMessageToSW(e, t);
        });
      }
      directPostMessageToSW(e, t) {
        E.a.debug(
          `[Worker Messenger] [Page -> SW] Direct command '${e.toString()}' to service worker.`
        ),
          navigator.serviceWorker.controller.postMessage({
            command: e,
            payload: t,
          });
      }
      listen(e) {
        return a.a(this, void 0, void 0, function* () {
          if (!d.a.supportsServiceWorkers()) return;
          x.a.getWindowEnv() === L.a.ServiceWorker
            ? (self.addEventListener(
                "message",
                this.onWorkerMessageReceivedFromPage.bind(this)
              ),
              E.a.debug(
                "[Worker Messenger] Service worker is now listening for messages."
              ))
            : yield this.listenForPage(e);
        });
      }
      listenForPage(e) {
        return a.a(this, void 0, void 0, function* () {
          e ||
            ((yield this.isWorkerControllingPage()) ||
              E.a.debug(
                `(${location.origin}) [Worker Messenger] The page is not controlled by the service worker yet. Waiting...`,
                self.registration
              ),
            yield this.waitUntilWorkerControlsPage(),
            E.a.debug(
              `(${location.origin}) [Worker Messenger] The page is now controlled by the service worker.`
            )),
            navigator.serviceWorker.addEventListener(
              "message",
              this.onPageMessageReceivedFromServiceWorker.bind(this)
            ),
            E.a.debug(
              `(${location.origin}) [Worker Messenger] Page is now listening for messages.`
            );
        });
      }
      onWorkerMessageReceivedFromPage(e) {
        const t = e.data;
        if (!t || !t.command) return;
        const i = this.replies.findListenersForMessage(t.command),
          n = [],
          o = [];
        E.a.debug(
          "[Worker Messenger] Service worker received message:",
          e.data
        );
        for (let e of i) e.onceListenerOnly && n.push(e), o.push(e);
        for (let e = n.length - 1; e >= 0; e--) {
          const i = n[e];
          this.replies.deleteListenerRecord(t.command, i);
        }
        for (let e of o) e.callback.apply(null, [t.payload]);
      }
      onPageMessageReceivedFromServiceWorker(e) {
        const t = e.data;
        if (!t || !t.command) return;
        const i = this.replies.findListenersForMessage(t.command),
          n = [],
          o = [];
        E.a.debug("[Worker Messenger] Page received message:", e.data);
        for (let e of i) e.onceListenerOnly && n.push(e), o.push(e);
        for (let e = n.length - 1; e >= 0; e--) {
          const i = n[e];
          this.replies.deleteListenerRecord(t.command, i);
        }
        for (let e of o) e.callback.apply(null, [t.payload]);
      }
      on(e, t) {
        this.replies.addListener(e, t, !1);
      }
      once(e, t) {
        this.replies.addListener(e, t, !0);
      }
      off(e) {
        e
          ? this.replies.deleteListenerRecords(e)
          : this.replies.deleteAllListenerRecords();
      }
      isWorkerControllingPage() {
        return a.a(this, void 0, void 0, function* () {
          if (x.a.getWindowEnv() === L.a.ServiceWorker)
            return !!self.registration.active;
          {
            const e = yield this.context.serviceWorkerManager.getActiveState();
            return e === ce.a.WorkerA || e === ce.a.WorkerB;
          }
        });
      }
      waitUntilWorkerControlsPage() {
        return a.a(this, void 0, void 0, function* () {
          return new Promise((e) =>
            a.a(this, void 0, void 0, function* () {
              if (yield this.isWorkerControllingPage()) e();
              else {
                x.a.getWindowEnv() === L.a.ServiceWorker
                  ? self.addEventListener("activate", (t) =>
                      a.a(this, void 0, void 0, function* () {
                        (yield this.isWorkerControllingPage()) && e();
                      })
                    )
                  : navigator.serviceWorker.addEventListener(
                      "controllerchange",
                      (t) =>
                        a.a(this, void 0, void 0, function* () {
                          (yield this.isWorkerControllingPage()) && e();
                        })
                    );
              }
            })
          );
        });
      }
    }
    class ue {
      constructor() {
        this.cache = {};
      }
      getCache() {
        return Object.assign({}, this.cache);
      }
      loadSdkStylesheet() {
        return a.a(this, void 0, void 0, function* () {
          const e = x.a.getOneSignalResourceUrlPath(),
            t = x.a.getOneSignalCssFileName();
          return yield this.loadIfNew(
            0,
            new URL(`${e}/${t}?v=${d.a.getSdkStylesVersionHash()}`)
          );
        });
      }
      loadFetchPolyfill() {
        return a.a(this, void 0, void 0, function* () {
          return yield this.loadIfNew(
            1,
            new URL(
              "https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"
            )
          );
        });
      }
      loadIfNew(e, t) {
        return a.a(this, void 0, void 0, function* () {
          return (
            this.cache[t.toString()] ||
              (this.cache[t.toString()] = ue.load(e, t)),
            yield this.cache[t.toString()]
          );
        });
      }
      static load(e, t) {
        return a.a(this, void 0, void 0, function* () {
          try {
            return (
              yield new Promise((i, n) => {
                switch (e) {
                  case 1:
                    (o = document.createElement("script")).setAttribute(
                      "type",
                      "text/javascript"
                    ),
                      o.setAttribute("async", "async"),
                      o.setAttribute("src", t.toString());
                    break;
                  case 0:
                    var o;
                    (o = document.createElement("link")).setAttribute(
                      "rel",
                      "stylesheet"
                    ),
                      o.setAttribute("href", t.toString());
                }
                (o.onerror = n),
                  (o.onload = i),
                  document.querySelector("head").appendChild(o);
              }),
              0
            );
          } catch (e) {
            return 1;
          }
        });
      }
    }
    var ge = i(17),
      pe = i(35);
    class he {
      constructor(
        e,
        t,
        i,
        n = "shown",
        o = ["opacity", "transform"],
        s,
        r = 500
      ) {
        (this.selector = e),
          (this.showClass = t),
          (this.hideClass = i),
          (this.state = n),
          (this.targetTransitionEvents = o),
          (this.nestedContentSelector = s),
          (this.transitionCheckTimeout = r);
      }
      show() {
        return this.hidden
          ? new Promise((e) => {
              (this.state = "showing"), h.a.trigger(he.EVENTS.SHOWING, this);
              const t = this.element;
              if (
                (t
                  ? (this.hideClass && Object(C.v)(t, this.hideClass),
                    this.showClass && Object(C.a)(t, this.showClass))
                  : E.a.error(
                      `(show) could not find animated element with selector ${this.selector}`
                    ),
                0 == this.targetTransitionEvents.length)
              )
                return e(this);
              var i = setTimeout(() => {
                E.a.debug(
                  `Element did not completely show (state: ${this.state}).`
                );
              }, this.transitionCheckTimeout);
              Object(C.u)(
                this.element,
                "transitionend",
                (t, n) => {
                  if (
                    t.target === this.element &&
                    Object(C.f)(this.targetTransitionEvents, t.propertyName)
                  )
                    return (
                      clearTimeout(i),
                      n(),
                      (this.state = "shown"),
                      h.a.trigger(he.EVENTS.SHOWN, this),
                      e(this)
                    );
                },
                !0
              );
            })
          : Promise.resolve(this);
      }
      hide() {
        return this.shown
          ? new Promise((e) => {
              (this.state = "hiding"), h.a.trigger(he.EVENTS.HIDING, this);
              const t = this.element;
              if (
                (t
                  ? (this.showClass && Object(C.v)(t, this.showClass),
                    this.hideClass && Object(C.a)(t, this.hideClass))
                  : E.a.error(
                      `(hide) could not find animated element with selector ${this.selector}`
                    ),
                0 == this.targetTransitionEvents.length)
              )
                return e(this);
              Object(C.u)(
                this.element,
                "transitionend",
                (t, i) => {
                  var n = setTimeout(() => {
                    E.a.debug(
                      `Element did not completely hide (state: ${this.state}).`
                    );
                  }, this.transitionCheckTimeout);
                  if (
                    t.target === this.element &&
                    Object(C.f)(this.targetTransitionEvents, t.propertyName)
                  )
                    return (
                      clearTimeout(n),
                      i(),
                      (this.state = "hidden"),
                      h.a.trigger(he.EVENTS.HIDDEN, this),
                      e(this)
                    );
                },
                !0
              );
            })
          : Promise.resolve(this);
      }
      waitUntilShown() {
        return "shown" === this.state
          ? Promise.resolve(this)
          : new Promise((e) => {
              Ft.emitter.once(he.EVENTS.SHOWN, (t) => {
                if (t === this) return e(this);
              });
            });
      }
      waitUntilHidden() {
        return "hidden" === this.state
          ? Promise.resolve(this)
          : new Promise((e) => {
              Ft.emitter.once(he.EVENTS.HIDDEN, (t) => {
                if (t === this) return e(this);
              });
            });
      }
      static get EVENTS() {
        return {
          SHOWING: "animatedElementShowing",
          SHOWN: "animatedElementShown",
          HIDING: "animatedElementHiding",
          HIDDEN: "animatedElementHidden",
        };
      }
      get content() {
        if (!this.element) return "";
        if (this.nestedContentSelector) {
          const e = this.element.querySelector(this.nestedContentSelector);
          return e ? e.innerHTML : "";
        }
        return this.element.innerHTML;
      }
      set content(e) {
        if (this.element)
          if (this.nestedContentSelector) {
            const t = this.element.querySelector(this.nestedContentSelector);
            t && (t.innerHTML = e);
          } else this.element.innerHTML = e;
      }
      get element() {
        return document.querySelector(this.selector);
      }
      get showing() {
        return "showing" === this.state;
      }
      get shown() {
        return "shown" === this.state;
      }
      get hiding() {
        return "hiding" === this.state;
      }
      get hidden() {
        return "hidden" === this.state;
      }
    }
    class fe extends he {
      constructor(
        e,
        t,
        i,
        n,
        o,
        s = "shown",
        r = "active",
        a = ["opacity", "transform"],
        c
      ) {
        super(e, t, i, s, a),
          (this.selector = e),
          (this.showClass = t),
          (this.hideClass = i),
          (this.activeClass = n),
          (this.inactiveClass = o),
          (this.state = s),
          (this.activeState = r),
          (this.targetTransitionEvents = a),
          (this.nestedContentSelector = c);
      }
      activate() {
        return this.inactive && this.shown
          ? new Promise((e) => {
              (this.activeState = "activating"),
                h.a.trigger(fe.EVENTS.ACTIVATING, this);
              const t = this.element;
              if (
                (t
                  ? (this.inactiveClass && Object(C.v)(t, this.inactiveClass),
                    this.activeClass && Object(C.a)(t, this.activeClass))
                  : E.a.error("Could not find active animated element"),
                !this.shown)
              )
                return (
                  E.a.debug("Ending activate() transition (alternative)."),
                  (this.activeState = "active"),
                  h.a.trigger(fe.EVENTS.ACTIVE, this),
                  e(this)
                );
              if (0 == this.targetTransitionEvents.length) return e(this);
              var i = setTimeout(() => {
                E.a.debug(
                  `Element did not completely activate (state: ${this.state}, activeState: ${this.activeState}).`
                );
              }, this.transitionCheckTimeout);
              Object(C.u)(
                this.element,
                "transitionend",
                (t, n) => {
                  if (
                    t.target === this.element &&
                    Object(C.f)(this.targetTransitionEvents, t.propertyName)
                  )
                    return (
                      clearTimeout(i),
                      n(),
                      (this.activeState = "active"),
                      h.a.trigger(fe.EVENTS.ACTIVE, this),
                      e(this)
                    );
                },
                !0
              );
            })
          : Promise.resolve(this);
      }
      inactivate() {
        return this.active
          ? new Promise((e) => {
              (this.activeState = "inactivating"),
                h.a.trigger(fe.EVENTS.INACTIVATING, this);
              const t = this.element;
              if (
                (t
                  ? (this.activeClass && Object(C.v)(t, this.activeClass),
                    this.inactiveClass && Object(C.a)(t, this.inactiveClass))
                  : E.a.error("Could not find active animated element"),
                !this.shown)
              )
                return (
                  (this.activeState = "inactive"),
                  h.a.trigger(fe.EVENTS.INACTIVE, this),
                  e(this)
                );
              if (0 == this.targetTransitionEvents.length) return e(this);
              var i = setTimeout(() => {
                E.a.debug(
                  `Element did not completely inactivate (state: ${this.state}, activeState: ${this.activeState}).`
                );
              }, this.transitionCheckTimeout);
              Object(C.u)(
                this.element,
                "transitionend",
                (t, n) => {
                  if (
                    t.target === this.element &&
                    Object(C.f)(this.targetTransitionEvents, t.propertyName)
                  )
                    return (
                      clearTimeout(i),
                      n(),
                      (this.activeState = "inactive"),
                      h.a.trigger(fe.EVENTS.INACTIVE, this),
                      e(this)
                    );
                },
                !0
              );
            })
          : Promise.resolve(this);
      }
      waitUntilActive() {
        return this.active
          ? Promise.resolve(this)
          : new Promise((e) => {
              Ft.emitter.once(fe.EVENTS.ACTIVE, (t) => {
                if (t === this) return e(this);
              });
            });
      }
      waitUntilInactive() {
        return this.inactive
          ? Promise.resolve(this)
          : new Promise((e) => {
              Ft.emitter.once(fe.EVENTS.INACTIVE, (t) => {
                if (t === this) return e(this);
              });
            });
      }
      static get EVENTS() {
        return Object.assign({}, he.EVENTS, {
          ACTIVATING: "activeAnimatedElementActivating",
          ACTIVE: "activeAnimatedElementActive",
          INACTIVATING: "activeAnimatedElementInactivating",
          INACTIVE: "activeAnimatedElementInactive",
        });
      }
      get activating() {
        return "activating" === this.activeState;
      }
      get active() {
        return "active" === this.activeState;
      }
      get inactivating() {
        return "inactivating" === this.activeState;
      }
      get inactive() {
        return "inactive" === this.activeState;
      }
    }
    class me extends fe {
      constructor() {
        super(
          ".onesignal-bell-launcher-badge",
          "onesignal-bell-launcher-badge-opened",
          null,
          "onesignal-bell-launcher-badge-active",
          null,
          "hidden"
        );
      }
      increment() {
        if (!isNaN(this.content)) {
          let e = +this.content;
          (e += 1), (this.content = e.toString());
        }
      }
      show() {
        const e = super.show();
        return OneSignal.notifyButton.setCustomColorsIfSpecified(), e;
      }
      decrement() {
        if (!isNaN(this.content)) {
          let e = +this.content;
          (e -= 1), (this.content = e > 0 ? e.toString() : "");
        }
      }
    }
    class be extends he {
      constructor(e) {
        super(
          ".onesignal-bell-launcher-message",
          "onesignal-bell-launcher-message-opened",
          void 0,
          "hidden",
          ["opacity", "transform"],
          ".onesignal-bell-launcher-message-body"
        ),
          (this.bell = e),
          (this.contentType = ""),
          (this.queued = []);
      }
      static get TIMEOUT() {
        return 2500;
      }
      static get TYPES() {
        return { TIP: "tip", MESSAGE: "message", QUEUED: "queued" };
      }
      display(e, t, i = 0) {
        return (
          E.a.debug(
            `Calling %cdisplay(${e}, ${t}, ${i}).`,
            Object(C.k)("code")
          ),
          (this.shown ? this.hide() : Object(C.t)())
            .then(() => {
              (this.content = Object(C.g)(t)), (this.contentType = e);
            })
            .then(() => this.show())
            .then(() => Object(C.i)(i))
            .then(() => this.hide())
            .then(() => {
              (this.content = this.getTipForState()),
                (this.contentType = "tip");
            })
        );
      }
      getTipForState() {
        return this.bell.state === we.STATES.UNSUBSCRIBED
          ? this.bell.options.text["tip.state.unsubscribed"]
          : this.bell.state === we.STATES.SUBSCRIBED
          ? this.bell.options.text["tip.state.subscribed"]
          : this.bell.state === we.STATES.BLOCKED
          ? this.bell.options.text["tip.state.blocked"]
          : "";
      }
      enqueue(e) {
        return (
          this.queued.push(Object(C.g)(e)),
          new Promise((e) => {
            this.bell.badge.shown
              ? this.bell.badge
                  .hide()
                  .then(() => this.bell.badge.increment())
                  .then(() => this.bell.badge.show())
                  .then(e)
              : (this.bell.badge.increment(),
                this.bell.initialized ? this.bell.badge.show().then(e) : e());
          })
        );
      }
      dequeue(e) {
        let t = this.queued.pop(e);
        return new Promise((e) => {
          this.bell.badge.shown
            ? this.bell.badge
                .hide()
                .then(() => this.bell.badge.decrement())
                .then((e) =>
                  e > 0 ? this.bell.badge.show() : Promise.resolve(this)
                )
                .then(e(t))
            : (this.bell.badge.decrement(), e(t));
        });
      }
    }
    class Se extends fe {
      constructor(e) {
        super(
          ".onesignal-bell-launcher-button",
          void 0,
          void 0,
          "onesignal-bell-launcher-button-active",
          void 0,
          "shown",
          ""
        ),
          (this.bell = e),
          (this.events = { mouse: "bell.launcher.button.mouse" });
        const t = this.element;
        t &&
          (t.addEventListener(
            "touchstart",
            () => {
              this.onHovering(), this.onTap();
            },
            { passive: !0 }
          ),
          t.addEventListener("mouseenter", () => {
            this.onHovering();
          }),
          t.addEventListener("mouseleave", () => {
            this.onHovered();
          }),
          t.addEventListener(
            "touchmove",
            () => {
              this.onHovered();
            },
            { passive: !0 }
          ),
          t.addEventListener("mousedown", () => {
            this.onTap();
          }),
          t.addEventListener("mouseup", () => {
            this.onEndTap();
          }),
          t.addEventListener("click", () => {
            this.onHovered(), this.onClick();
          }));
      }
      onHovering() {
        (f.isEmpty(this.events.mouse) ||
          "out" === f.getLast(this.events.mouse)) &&
          h.a.trigger(we.EVENTS.HOVERING),
          f.put(this.events.mouse, "over");
      }
      onHovered() {
        f.put(this.events.mouse, "out"), h.a.trigger(we.EVENTS.HOVERED);
      }
      onTap() {
        this.pulse(), this.activate(), this.bell.badge.activate();
      }
      onEndTap() {
        this.inactivate(), this.bell.badge.inactivate();
      }
      onClick() {
        if (
          (h.a.trigger(we.EVENTS.BELL_CLICK),
          h.a.trigger(we.EVENTS.LAUNCHER_CLICK),
          !this.bell.message.shown ||
            this.bell.message.contentType != be.TYPES.MESSAGE)
        ) {
          var e = f.getLast("subscription.optedOut");
          return (
            this.bell.unsubscribed
              ? e
                ? this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure();
                  })
                : (Ft.registerForPushNotifications(),
                  (this.bell._ignoreSubscriptionState = !0),
                  Ft.emitter.once(Ft.EVENTS.SUBSCRIPTION_CHANGED, () => {
                    this.bell.message
                      .display(
                        be.TYPES.MESSAGE,
                        this.bell.options.text["message.action.subscribed"],
                        be.TIMEOUT
                      )
                      .then(() => {
                        (this.bell._ignoreSubscriptionState = !1),
                          this.bell.launcher.inactivate();
                      });
                  }))
              : this.bell.subscribed
              ? this.bell.launcher.activateIfInactive().then(() => {
                  this.bell.showDialogProcedure();
                })
              : this.bell.blocked &&
                (Object(C.q)()
                  ? Ft.registerForPushNotifications()
                  : this.bell.launcher.activateIfInactive().then(() => {
                      this.bell.showDialogProcedure();
                    })),
            this.bell.message.hide()
          );
        }
      }
      pulse() {
        Object(C.w)(".pulse-ring"),
          this.element &&
            Object(C.b)(
              this.element,
              "beforeend",
              '<div class="pulse-ring"></div>'
            ),
          this.bell.setCustomColorsIfSpecified();
      }
    }
    class ve extends he {
      constructor(e) {
        super(
          ".onesignal-bell-launcher-dialog",
          "onesignal-bell-launcher-dialog-opened",
          void 0,
          "hidden",
          ["opacity", "transform"],
          ".onesignal-bell-launcher-dialog-body"
        ),
          (this.bell = e),
          (this.subscribeButtonId =
            "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button"),
          (this.unsubscribeButtonId =
            "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button"),
          (this.notificationIcons = null);
      }
      show() {
        return this.updateBellLauncherDialogBody().then(() => super.show());
      }
      get subscribeButtonSelectorId() {
        return "subscribe-button";
      }
      get unsubscribeButtonSelectorId() {
        return "unsubscribe-button";
      }
      get subscribeButton() {
        return this.element
          ? this.element.querySelector("#" + this.subscribeButtonSelectorId)
          : null;
      }
      get unsubscribeButton() {
        return this.element
          ? this.element.querySelector("#" + this.unsubscribeButtonSelectorId)
          : null;
      }
      updateBellLauncherDialogBody() {
        return OneSignal.getSubscription().then((e) => {
          this.nestedContentSelector && Object(C.e)(this.nestedContentSelector);
          let t = "Nothing to show.";
          var i = "";
          if (
            (this.bell.options.showCredit &&
              (i =
                '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'),
            (this.bell.state === we.STATES.SUBSCRIBED && !0 === e) ||
              (this.bell.state === we.STATES.UNSUBSCRIBED && !1 === e))
          ) {
            let e = "",
              n = Object(C.m)(this.notificationIcons);
            e =
              "default-icon" != n
                ? `<div class="push-notification-icon"><img src="${n}"></div>`
                : '<div class="push-notification-icon push-notification-icon-default"></div>';
            let o = "";
            (o =
              this.bell.state !== we.STATES.SUBSCRIBED
                ? `<button type="button" class="action" id="${this.subscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.subscribe"]}</button>`
                : `<button type="button" class="action" id="${this.unsubscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.unsubscribe"]}</button>`),
              (t = `<h1>${this.bell.options.text["dialog.main.title"]}</h1><div class="divider"></div><div class="push-notification">${e}<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">${o}</div>${i}`);
          } else if (this.bell.state === we.STATES.BLOCKED) {
            let e = null;
            l.a.chrome
              ? l.a.mobile || l.a.tablet || (e = "/bell/chrome-unblock.jpg")
              : l.a.firefox
              ? (e = "/bell/firefox-unblock.jpg")
              : l.a.safari
              ? (e = "/bell/safari-unblock.jpg")
              : l.a.msedge && (e = "/bell/edge-unblock.png");
            let n = "";
            e &&
              (n = `<a href="${(e =
                x.a.getOneSignalApiUrl().origin +
                e)}" target="_blank"><img src="${e}"></a></div>`),
              (l.a.mobile || l.a.tablet) &&
                l.a.chrome &&
                (n =
                  "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>⋮</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"),
              (t = `<h1>${this.bell.options.text["dialog.blocked.title"]}</h1><div class="divider"></div><div class="instructions"><p>${this.bell.options.text["dialog.blocked.message"]}</p>${n}</div>${i}`);
          }
          this.nestedContentSelector &&
            Object(C.b)(this.nestedContentSelector, "beforeend", t),
            this.subscribeButton &&
              this.subscribeButton.addEventListener("click", () => {
                (OneSignal.__doNotShowWelcomeNotification = !1),
                  h.a.trigger(we.EVENTS.SUBSCRIBE_CLICK);
              }),
            this.unsubscribeButton &&
              this.unsubscribeButton.addEventListener("click", () =>
                h.a.trigger(we.EVENTS.UNSUBSCRIBE_CLICK)
              ),
            this.bell.setCustomColorsIfSpecified();
        });
      }
    }
    class Oe extends fe {
      constructor(e) {
        super(
          ".onesignal-bell-launcher",
          "onesignal-bell-launcher-active",
          void 0,
          void 0,
          "onesignal-bell-launcher-inactive",
          "hidden",
          "active"
        ),
          (this.bell = e),
          (this.wasInactive = !1);
      }
      resize(e) {
        return a.a(this, void 0, void 0, function* () {
          if (!this.element)
            throw new InvalidStateError.a(
              InvalidStateError.b.MissingDomElement
            );
          if (
            ("small" === e &&
              Object(C.o)(this.element, "onesignal-bell-launcher-sm")) ||
            ("medium" === e &&
              Object(C.o)(this.element, "onesignal-bell-launcher-md")) ||
            ("large" === e &&
              Object(C.o)(this.element, "onesignal-bell-launcher-lg"))
          )
            return Promise.resolve(this);
          if (
            (Object(C.v)(this.element, "onesignal-bell-launcher-sm"),
            Object(C.v)(this.element, "onesignal-bell-launcher-md"),
            Object(C.v)(this.element, "onesignal-bell-launcher-lg"),
            "small" === e)
          )
            Object(C.a)(this.element, "onesignal-bell-launcher-sm");
          else if ("medium" === e)
            Object(C.a)(this.element, "onesignal-bell-launcher-md");
          else {
            if ("large" !== e)
              throw new Error("Invalid OneSignal bell size " + e);
            Object(C.a)(this.element, "onesignal-bell-launcher-lg");
          }
          return this.shown
            ? yield new Promise((e) => {
                if (0 == this.targetTransitionEvents.length) return e(this);
                var t = setTimeout(() => {
                  E.a.debug(
                    `Launcher did not completely resize (state: ${this.state}, activeState: ${this.activeState}).`
                  );
                }, this.transitionCheckTimeout);
                Object(C.u)(
                  this.element,
                  "transitionend",
                  (i, n) => {
                    if (
                      i.target === this.element &&
                      Object(C.f)(this.targetTransitionEvents, i.propertyName)
                    )
                      return clearTimeout(t), n(), e(this);
                  },
                  !0
                );
              })
            : this;
        });
      }
      activateIfInactive() {
        return this.inactive
          ? ((this.wasInactive = !0), this.activate())
          : Object(C.t)();
      }
      inactivateIfWasInactive() {
        return this.wasInactive
          ? ((this.wasInactive = !1), this.inactivate())
          : Object(C.t)();
      }
      clearIfWasInactive() {
        this.wasInactive = !1;
      }
      inactivate() {
        return this.bell.message.hide().then(() =>
          this.bell.badge.content.length > 0
            ? this.bell.badge
                .hide()
                .then(() =>
                  Promise.all([super.inactivate(), this.resize("small")])
                )
                .then(() => this.bell.badge.show())
            : Promise.all([super.inactivate(), this.resize("small")])
        );
      }
      activate() {
        return this.bell.badge.content.length > 0
          ? this.bell.badge
              .hide()
              .then(() =>
                Promise.all([
                  super.activate(),
                  this.resize(this.bell.options.size),
                ])
              )
          : Promise.all([
              super.activate(),
              this.resize(this.bell.options.size),
            ]);
      }
    }
    var ye =
      '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>';
    class we {
      constructor(e, t) {
        (this.state = we.STATES.UNINITIALIZED),
          (this._ignoreSubscriptionState = !1),
          (this.hovering = !1),
          (this.initialized = !1),
          (this.DEFAULT_SIZE = "medium"),
          (this.DEFAULT_POSITION = "bottom-right"),
          (this.DEFAULT_THEME = "default"),
          (this.options = {
            enable: e.enable || !1,
            size: e.size || this.DEFAULT_SIZE,
            position: e.position || this.DEFAULT_POSITION,
            theme: e.theme || this.DEFAULT_THEME,
            showLauncherAfter: e.showLauncherAfter || 10,
            showBadgeAfter: e.showBadgeAfter || 300,
            text: this.setDefaultTextOptions(e.text || {}),
            prenotify: e.prenotify,
            showCredit: e.showCredit,
            colors: e.colors,
            offset: e.offset,
          }),
          t && (this._launcher = t),
          this.options.enable &&
            (this.validateOptions(this.options),
            (this.state = we.STATES.UNINITIALIZED),
            (this._ignoreSubscriptionState = !1),
            this.installEventHooks(),
            this.updateState());
      }
      static get EVENTS() {
        return {
          STATE_CHANGED: "notifyButtonStateChange",
          LAUNCHER_CLICK: "notifyButtonLauncherClick",
          BELL_CLICK: "notifyButtonButtonClick",
          SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
          UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
          HOVERING: "notifyButtonHovering",
          HOVERED: "notifyButtonHover",
        };
      }
      static get STATES() {
        return {
          UNINITIALIZED: "uninitialized",
          SUBSCRIBED: "subscribed",
          UNSUBSCRIBED: "unsubscribed",
          BLOCKED: "blocked",
        };
      }
      static get TEXT_SUBS() {
        return {
          "prompt.native.grant": {
            default: "Allow",
            chrome: "Allow",
            firefox: "Always Receive Notifications",
            safari: "Allow",
          },
        };
      }
      showDialogProcedure() {
        this.dialog.shown ||
          this.dialog.show().then(() => {
            Object(C.u)(
              document,
              "click",
              (e, t) => {
                this.dialog.element.contains(e.target) ||
                  (t(),
                  this.dialog.shown &&
                    this.dialog.hide().then(() => {
                      this.launcher.inactivateIfWasInactive();
                    }));
              },
              !0
            );
          });
      }
      validateOptions(e) {
        if (!e.size || !Object(C.f)(["small", "medium", "large"], e.size))
          throw new Error(
            `Invalid size ${e.size} for notify button. Choose among 'small', 'medium', or 'large'.`
          );
        if (
          !e.position ||
          !Object(C.f)(["bottom-left", "bottom-right"], e.position)
        )
          throw new Error(
            `Invalid position ${e.position} for notify button. Choose either 'bottom-left', or 'bottom-right'.`
          );
        if (!e.theme || !Object(C.f)(["default", "inverse"], e.theme))
          throw new Error(
            `Invalid theme ${e.theme} for notify button. Choose either 'default', or 'inverse'.`
          );
        if (!e.showLauncherAfter || e.showLauncherAfter < 0)
          throw new Error(
            `Invalid delay duration of ${this.options.showLauncherAfter} for showing the notify button. Choose a value above 0.`
          );
        if (!e.showBadgeAfter || e.showBadgeAfter < 0)
          throw new Error(
            `Invalid delay duration of ${this.options.showBadgeAfter} for showing the notify button's badge. Choose a value above 0.`
          );
      }
      setDefaultTextOptions(e) {
        return {
          "tip.state.unsubscribed":
            e["tip.state.unsubscribed"] || "Subscribe to notifications",
          "tip.state.subscribed":
            e["tip.state.subscribed"] || "You're subscribed to notifications",
          "tip.state.blocked":
            e["tip.state.blocked"] || "You've blocked notifications",
          "message.prenotify":
            e["message.prenotify"] || "Click to subscribe to notifications",
          "message.action.subscribed":
            e["message.action.subscribed"] || "Thanks for subscribing!",
          "message.action.resubscribed":
            e["message.action.resubscribed"] ||
            "You're subscribed to notifications",
          "message.action.subscribing":
            e["message.action.subscribing"] ||
            "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
          "message.action.unsubscribed":
            e["message.action.unsubscribed"] ||
            "You won't receive notifications again",
          "dialog.main.title":
            e["dialog.main.title"] || "Manage Site Notifications",
          "dialog.main.button.subscribe":
            e["dialog.main.button.subscribe"] || "SUBSCRIBE",
          "dialog.main.button.unsubscribe":
            e["dialog.main.button.unsubscribe"] || "UNSUBSCRIBE",
          "dialog.blocked.title":
            e["dialog.blocked.title"] || "Unblock Notifications",
          "dialog.blocked.message":
            e["dialog.blocked.message"] ||
            "Follow these instructions to allow notifications:",
        };
      }
      installEventHooks() {
        Ft.emitter.on(we.EVENTS.SUBSCRIBE_CLICK, () => {
          (this.dialog.subscribeButton.disabled = !0),
            (this._ignoreSubscriptionState = !0),
            Ft.setSubscription(!0)
              .then(
                () => (
                  (this.dialog.subscribeButton.disabled = !1),
                  this.dialog.hide()
                )
              )
              .then(() =>
                this.message.display(
                  be.TYPES.MESSAGE,
                  this.options.text["message.action.resubscribed"],
                  be.TIMEOUT
                )
              )
              .then(
                () => (
                  (this._ignoreSubscriptionState = !1),
                  this.launcher.clearIfWasInactive(),
                  this.launcher.inactivate()
                )
              )
              .then(() => this.updateState());
        }),
          Ft.emitter.on(we.EVENTS.UNSUBSCRIBE_CLICK, () => {
            (this.dialog.unsubscribeButton.disabled = !0),
              Ft.setSubscription(!1)
                .then(
                  () => (
                    (this.dialog.unsubscribeButton.disabled = !1),
                    this.dialog.hide()
                  )
                )
                .then(
                  () => (
                    this.launcher.clearIfWasInactive(), this.launcher.activate()
                  )
                )
                .then(() =>
                  this.message.display(
                    be.TYPES.MESSAGE,
                    this.options.text["message.action.unsubscribed"],
                    be.TIMEOUT
                  )
                )
                .then(() => this.updateState());
          }),
          Ft.emitter.on(we.EVENTS.HOVERING, () => {
            (this.hovering = !0),
              this.launcher.activateIfInactive(),
              this.message.shown || this.dialog.shown
                ? (this.hovering = !1)
                : this.message.contentType !== be.TYPES.MESSAGE
                ? new Promise((e) => {
                    if (this.message.queued.length > 0)
                      return this.message.dequeue().then((t) => {
                        (this.message.content = t),
                          (this.message.contentType = be.TYPES.QUEUED),
                          e();
                      });
                    (this.message.content = Object(C.g)(
                      this.message.getTipForState()
                    )),
                      (this.message.contentType = be.TYPES.TIP),
                      e();
                  })
                    .then(() => this.message.show())
                    .then(() => {
                      this.hovering = !1;
                    })
                : (this.hovering = !1);
          }),
          Ft.emitter.on(we.EVENTS.HOVERED, () => {
            this.message.contentType !== be.TYPES.MESSAGE &&
              this.dialog.hidden &&
              (this.hovering &&
                ((this.hovering = !1),
                this.message
                  .waitUntilShown()
                  .then(() => Object(C.i)(be.TIMEOUT))
                  .then(() => this.message.hide())
                  .then(() => {
                    this.launcher.wasInactive &&
                      this.dialog.hidden &&
                      (this.launcher.inactivate(),
                      (this.launcher.wasInactive = !1));
                  })),
              this.message.shown &&
                this.message.hide().then(() => {
                  this.launcher.wasInactive &&
                    this.dialog.hidden &&
                    (this.launcher.inactivate(),
                    (this.launcher.wasInactive = !1));
                }));
          }),
          Ft.emitter.on(Ft.EVENTS.SUBSCRIPTION_CHANGED, (e) =>
            a.a(this, void 0, void 0, function* () {
              if (
                1 == e &&
                (this.badge.shown &&
                  this.options.prenotify &&
                  this.badge.hide(),
                null === this.dialog.notificationIcons)
              ) {
                const e = yield ie.getNotificationIcons();
                this.dialog.notificationIcons = e;
              }
              Ft.getNotificationPermission((t) => {
                let i;
                (i = e
                  ? we.STATES.SUBSCRIBED
                  : t === A.Denied
                  ? we.STATES.BLOCKED
                  : we.STATES.UNSUBSCRIBED),
                  this.setState(i, this._ignoreSubscriptionState);
              });
            })
          ),
          Ft.emitter.on(we.EVENTS.STATE_CHANGED, (e) => {
            this.launcher.element &&
              (e.to === we.STATES.SUBSCRIBED
                ? this.launcher.inactivate()
                : (e.to === we.STATES.UNSUBSCRIBED || we.STATES.BLOCKED) &&
                  this.launcher.activate());
          }),
          Ft.emitter.on(Ft.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, () => {
            this.updateState();
          });
      }
      addDefaultClasses() {
        const e = this.container;
        if ("bottom-left" === this.options.position)
          e && Object(C.a)(e, "onesignal-bell-container-bottom-left"),
            Object(C.a)(
              this.launcher.selector,
              "onesignal-bell-launcher-bottom-left"
            );
        else {
          if ("bottom-right" !== this.options.position)
            throw new Error(
              "Invalid OneSignal notify button position " +
                this.options.position
            );
          e && Object(C.a)(e, "onesignal-bell-container-bottom-right"),
            Object(C.a)(
              this.launcher.selector,
              "onesignal-bell-launcher-bottom-right"
            );
        }
        if ("default" === this.options.theme)
          Object(C.a)(
            this.launcher.selector,
            "onesignal-bell-launcher-theme-default"
          );
        else {
          if ("inverse" !== this.options.theme)
            throw new Error(
              "Invalid OneSignal notify button theme " + this.options.theme
            );
          Object(C.a)(
            this.launcher.selector,
            "onesignal-bell-launcher-theme-inverse"
          );
        }
      }
      create() {
        return a.a(this, void 0, void 0, function* () {
          if (!this.options.enable) return;
          if (
            0 !== (yield Ft.context.dynamicResourceLoader.loadSdkStylesheet())
          )
            return void E.a.debug(
              "Not showing notify button because styles failed to load."
            );
          this.container && Object(C.w)("#onesignal-bell-container"),
            Object(C.b)(
              "body",
              "beforeend",
              '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'
            ),
            this.container &&
              Object(C.b)(
                this.container,
                "beforeend",
                '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'
              ),
            Object(C.b)(
              this.launcher.selector,
              "beforeend",
              '<div class="onesignal-bell-launcher-button"></div>'
            ),
            Object(C.b)(
              this.launcher.selector,
              "beforeend",
              '<div class="onesignal-bell-launcher-badge"></div>'
            ),
            Object(C.b)(
              this.launcher.selector,
              "beforeend",
              '<div class="onesignal-bell-launcher-message"></div>'
            ),
            Object(C.b)(
              this.message.selector,
              "beforeend",
              '<div class="onesignal-bell-launcher-message-body"></div>'
            ),
            Object(C.b)(
              this.launcher.selector,
              "beforeend",
              '<div class="onesignal-bell-launcher-dialog"></div>'
            ),
            Object(C.b)(
              this.dialog.selector,
              "beforeend",
              '<div class="onesignal-bell-launcher-dialog-body"></div>'
            ),
            Object(C.b)(this.button.selector, "beforeend", ye);
          const e = yield Ft.isPushNotificationsEnabled(),
            t = yield Ft.getSubscription(),
            i = yield ie.wasHttpsNativePromptDismissed();
          let n = e ? "small" : this.options.size || this.DEFAULT_SIZE;
          yield this.launcher.resize(n),
            this.addDefaultClasses(),
            this.applyOffsetIfSpecified(),
            this.setCustomColorsIfSpecified(),
            this.patchSafariSvgFilterBug(),
            E.a.info("Showing the notify button."),
            yield (e ? this.launcher.inactivate() : Object(C.t)())
              .then(() => Ft.getSubscription())
              .then((t) =>
                (!e && t) || null !== this.dialog.notificationIcons
                  ? Object(C.t)()
                  : ie.getNotificationIcons().then((e) => {
                      this.dialog.notificationIcons = e;
                    })
              )
              .then(() => Object(C.i)(this.options.showLauncherAfter || 0))
              .then(() =>
                Object(C.q)() &&
                t &&
                !0 !== i &&
                !e &&
                !0 === Ft.config.userConfig.promptOptions.autoPrompt &&
                !ie.isHttpPromptAlreadyShown()
                  ? (E.a.debug(
                      "Not showing notify button because slidedown will be shown."
                    ),
                    Object(C.t)())
                  : this.launcher.show()
              )
              .then(() => Object(C.i)(this.options.showBadgeAfter || 0))
              .then(() =>
                this.options.prenotify && !e && Ft._isNewVisitor
                  ? this.message
                      .enqueue(this.options.text["message.prenotify"])
                      .then(() => this.badge.show())
                  : Object(C.t)()
              )
              .then(() => (this.initialized = !0));
        });
      }
      patchSafariSvgFilterBug() {
        if (!(l.a.safari && Number(l.a.version) >= 9.1)) {
          let e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));",
            t = "drop-shadow(0 2px 4px rgba(34,36,38,0));",
            i = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
          this.graphic.setAttribute(
            "style",
            `filter: ${e}; -webkit-filter: ${e};`
          ),
            this.badge.element.setAttribute(
              "style",
              `filter: ${t}; -webkit-filter: ${t};`
            ),
            this.dialog.element.setAttribute(
              "style",
              `filter: ${i}; -webkit-filter: ${i};`
            );
        }
        l.a.safari &&
          this.badge.element.setAttribute("style", "display: none;");
      }
      applyOffsetIfSpecified() {
        let e = this.options.offset;
        if (e) {
          const t = this.launcher.element;
          if (!t) return void E.a.error("Could not find bell dom element");
          (t.style.cssText = ""),
            e.bottom && (t.style.cssText += `bottom: ${e.bottom};`),
            "bottom-right" === this.options.position
              ? e.right && (t.style.cssText += `right: ${e.right};`)
              : "bottom-left" === this.options.position &&
                e.left &&
                (t.style.cssText += `left: ${e.left};`);
        }
      }
      setCustomColorsIfSpecified() {
        let e = this.dialog.element.querySelector("button.action"),
          t = this.button.element.querySelector(".pulse-ring");
        this.graphic.querySelector(".background").style.cssText = "";
        let i = this.graphic.querySelectorAll(".foreground");
        for (let e = 0; e < i.length; e++) {
          i[e].style.cssText = "";
        }
        if (
          ((this.graphic.querySelector(".stroke").style.cssText = ""),
          (this.badge.element.style.cssText = ""),
          e && ((e.style.cssText = ""), (e.style.cssText = "")),
          t && (t.style.cssText = ""),
          this.options.colors)
        ) {
          let i = this.options.colors;
          if (
            (i["circle.background"] &&
              (this.graphic.querySelector(
                ".background"
              ).style.cssText += `fill: ${i["circle.background"]}`),
            i["circle.foreground"])
          ) {
            let e = this.graphic.querySelectorAll(".foreground");
            for (let t = 0; t < e.length; t++) {
              e[t].style.cssText += `fill: ${i["circle.foreground"]}`;
            }
            this.graphic.querySelector(
              ".stroke"
            ).style.cssText += `stroke: ${i["circle.foreground"]}`;
          }
          i["badge.background"] &&
            (this.badge.element.style.cssText += `background: ${i["badge.background"]}`),
            i["badge.bordercolor"] &&
              (this.badge.element.style.cssText += `border-color: ${i["badge.bordercolor"]}`),
            i["badge.foreground"] &&
              (this.badge.element.style.cssText += `color: ${i["badge.foreground"]}`),
            e &&
              (i["dialog.button.background"] &&
                (this.dialog.element.querySelector(
                  "button.action"
                ).style.cssText += `background: ${i["dialog.button.background"]}`),
              i["dialog.button.foreground"] &&
                (this.dialog.element.querySelector(
                  "button.action"
                ).style.cssText += `color: ${i["dialog.button.foreground"]}`),
              i["dialog.button.background.hovering"] &&
                this.addCssToHead(
                  "onesignal-background-hover-style",
                  `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: ${i["dialog.button.background.hovering"]} !important; }`
                ),
              i["dialog.button.background.active"] &&
                this.addCssToHead(
                  "onesignal-background-active-style",
                  `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: ${i["dialog.button.background.active"]} !important; }`
                )),
            t &&
              i["pulse.color"] &&
              (this.button.element.querySelector(
                ".pulse-ring"
              ).style.cssText = `border-color: ${i["pulse.color"]}`);
        }
      }
      addCssToHead(e, t) {
        if (document.getElementById(e)) return;
        let i = document.createElement("style");
        (i.id = e),
          (i.type = "text/css"),
          i.appendChild(document.createTextNode(t)),
          document.head.appendChild(i);
      }
      updateState() {
        Promise.all([
          Ft.privateIsPushNotificationsEnabled(),
          Ft.privateGetNotificationPermission(),
        ]).then(([e, t]) => {
          this.setState(e ? we.STATES.SUBSCRIBED : we.STATES.UNSUBSCRIBED),
            t === A.Denied && this.setState(we.STATES.BLOCKED);
        });
      }
      setState(e, t = !1) {
        let i = this.state;
        (this.state = e),
          i === e ||
            t ||
            h.a.trigger(we.EVENTS.STATE_CHANGED, { from: i, to: e });
      }
      get container() {
        return document.querySelector("#onesignal-bell-container");
      }
      get graphic() {
        return this.button.element.querySelector("svg");
      }
      get launcher() {
        return (
          this._launcher || (this._launcher = new Oe(this)), this._launcher
        );
      }
      get button() {
        return this._button || (this._button = new Se(this)), this._button;
      }
      get badge() {
        return this._badge || (this._badge = new me()), this._badge;
      }
      get message() {
        return this._message || (this._message = new be(this)), this._message;
      }
      get dialog() {
        return this._dialog || (this._dialog = new ve(this)), this._dialog;
      }
      get subscribed() {
        return this.state === we.STATES.SUBSCRIBED;
      }
      get unsubscribed() {
        return this.state === we.STATES.UNSUBSCRIBED;
      }
      get blocked() {
        return this.state === we.STATES.BLOCKED;
      }
    }
    class Ee {
      constructor(e) {
        if (!e)
          throw new InvalidArgumentError.a(
            "path",
            InvalidArgumentError.b.Empty
          );
        this.path = e.trim();
      }
      getQueryString() {
        const e = this.path.indexOf("?");
        return -1 === e
          ? null
          : this.path.length > e
          ? this.path.substring(e + 1)
          : null;
      }
      getWithoutQueryString() {
        return this.path.split(Ee.QUERY_STRING)[0];
      }
      getFileName() {
        return this.getWithoutQueryString().split("\\").pop().split("/").pop();
      }
      getFileNameWithQuery() {
        return this.path.split("\\").pop().split("/").pop();
      }
      getFullPath() {
        return this.path;
      }
      getPathWithoutFileName() {
        const e = this.getWithoutQueryString(),
          t = e.lastIndexOf(this.getFileName());
        let i = e.substring(0, t);
        return (i = i.replace(/[\\\/]$/, ""));
      }
    }
    Ee.QUERY_STRING = "?";
    class Pe extends u.a {
      constructor(e, t) {
        super("Registration of a Service Worker failed."),
          (this.status = e),
          (this.statusText = t),
          Object.setPrototypeOf(this, Pe.prototype);
      }
    }
    var Ie,
      Ce,
      Te,
      Ae,
      Ne,
      Me,
      ke = Pe;
    class xe {
      constructor(e, t) {
        (this.context = e), (this.config = t);
      }
      static getRegistration() {
        return a.a(this, void 0, void 0, function* () {
          return yield ce.b.getRegistration();
        });
      }
      getActiveState() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield x.a.getIntegration();
          if (e === ge.a.InsecureProxy) return ce.a.Indeterminate;
          if (e === ge.a.SecureProxy) {
            switch (x.a.getWindowEnv()) {
              case L.a.Host:
              case L.a.CustomIframe:
                const e = OneSignal.proxyFrameHost;
                return e
                  ? yield e.runCommand(
                      OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE
                    )
                  : ce.a.Indeterminate;
              case L.a.OneSignalSubscriptionPopup:
                break;
              case L.a.OneSignalSubscriptionModal:
                throw new b.a();
            }
          }
          const t = yield xe.getRegistration();
          if (!t) return ce.a.None;
          if (t.installing) return ce.a.Installing;
          if (!t.active) return ce.a.ThirdParty;
          const i = xe.activeSwFileName(t),
            n = this.swActiveStateByFileName(i);
          return navigator.serviceWorker.controller ||
            (n !== ce.a.WorkerA && n !== ce.a.WorkerB)
            ? n
            : ce.a.Bypassed;
        });
      }
      static activeSwFileName(e) {
        if (!e.active) return null;
        const t = new URL(e.active.scriptURL).pathname,
          i = new Ee(t).getFileName();
        if ("akam-sw.js" == i) {
          const t = new URLSearchParams(new URL(e.active.scriptURL).search).get(
            "othersw"
          );
          if (t)
            return (
              E.a.debug(
                "Found a ServiceWorker under Akamai's akam-sw.js?othersw=",
                t
              ),
              new Ee(new URL(t).pathname).getFileName()
            );
        }
        return i;
      }
      swActiveStateByFileName(e) {
        return e
          ? e == this.config.workerAPath.getFileName()
            ? ce.a.WorkerA
            : e == this.config.workerBPath.getFileName()
            ? ce.a.WorkerB
            : ce.a.ThirdParty
          : ce.a.None;
      }
      getWorkerVersion() {
        return a.a(this, void 0, void 0, function* () {
          return new Promise((e) =>
            a.a(this, void 0, void 0, function* () {
              if (N.b.isUsingSubscriptionWorkaround()) {
                const t = OneSignal.proxyFrameHost;
                if (t) {
                  const i = yield t.runCommand(
                    OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION
                  );
                  e(i);
                } else e(NaN);
              } else
                this.context.workerMessenger.once(re.WorkerVersion, (t) => {
                  e(t);
                }),
                  this.context.workerMessenger.unicast(re.WorkerVersion);
            })
          );
        });
      }
      shouldInstallWorker() {
        return a.a(this, void 0, void 0, function* () {
          if (!d.a.supportsServiceWorkers()) return !1;
          if (!OneSignal.config) return !1;
          if (
            OneSignal.config.subdomain &&
            "safari" !== OneSignal.environmentInfo.browserType &&
            x.a.getWindowEnv() === L.a.Host
          )
            return !1;
          const e = yield this.getActiveState();
          if (e === ce.a.None || e === ce.a.ThirdParty) {
            return (
              "granted" ===
              (yield OneSignal.context.permissionManager.getNotificationPermission(
                OneSignal.config.safariWebId
              ))
            );
          }
          return this.workerNeedsUpdate();
        });
      }
      workerNeedsUpdate() {
        return a.a(this, void 0, void 0, function* () {
          let e;
          E.a.info(
            "[Service Worker Update] Checking service worker version..."
          );
          try {
            e = yield w.a.timeoutPromise(this.getWorkerVersion(), 2e3);
          } catch (e) {
            return (
              E.a.info(
                "[Service Worker Update] Worker did not reply to version query; assuming older version and updating."
              ),
              !0
            );
          }
          return e !== d.a.version()
            ? (E.a.info(
                `[Service Worker Update] Updating service worker from ${e} --\x3e ${d.a.version()}.`
              ),
              !0)
            : (E.a.info(
                `[Service Worker Update] Service worker version is current at ${e} (no update required).`
              ),
              !1);
        });
      }
      installWorker() {
        return a.a(this, void 0, void 0, function* () {
          if (!(yield this.shouldInstallWorker())) return;
          const e = yield this.getActiveState();
          yield this.installAlternatingWorker(),
            yield new Promise((t) =>
              a.a(this, void 0, void 0, function* () {
                const i = yield this.getActiveState();
                E.a.debug(
                  "installWorker - Comparing pre and post states",
                  e,
                  i
                ),
                  e !== i && i !== ce.a.Installing
                    ? t()
                    : (E.a.debug(
                        "installWorker - Awaiting on navigator.serviceWorker's 'controllerchange' event"
                      ),
                      navigator.serviceWorker.addEventListener(
                        "controllerchange",
                        (i) =>
                          a.a(this, void 0, void 0, function* () {
                            const i = yield this.getActiveState();
                            i !== e && i !== ce.a.Installing
                              ? t()
                              : E.a.error(
                                  "installWorker - SW's 'controllerchange' fired but no state change!"
                                );
                          })
                      ));
              })
            ),
            (yield this.getActiveState()) === ce.a.WorkerB &&
              (yield this.installAlternatingWorker()),
            yield this.establishServiceWorkerChannel();
        });
      }
      establishServiceWorkerChannel() {
        return a.a(this, void 0, void 0, function* () {
          const e = this.context.workerMessenger;
          e.off(),
            e.on(re.NotificationDisplayed, (e) => {
              E.a.debug(
                location.origin,
                "Received notification display event from service worker."
              ),
                h.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e);
            }),
            e.on(re.NotificationClicked, (e) =>
              a.a(this, void 0, void 0, function* () {
                let t;
                if (
                  0 ===
                  (t =
                    x.a.getWindowEnv() === L.a.OneSignalProxyFrame
                      ? yield new Promise((e) => {
                          const t = OneSignal.proxyFrame;
                          t &&
                            t.messenger.message(
                              OneSignal.POSTMAM_COMMANDS
                                .GET_EVENT_LISTENER_COUNT,
                              OneSignal.EVENTS.NOTIFICATION_CLICKED,
                              (t) => {
                                let i = t.data;
                                e(i);
                              }
                            );
                        })
                      : OneSignal.emitter.numberOfListeners(
                          OneSignal.EVENTS.NOTIFICATION_CLICKED
                        ))
                ) {
                  E.a.debug(
                    "notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval."
                  );
                  let t = e.url;
                  e.url || (t = location.href),
                    yield I.a.put("NotificationOpened", {
                      url: t,
                      data: e,
                      timestamp: Date.now(),
                    });
                } else h.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, e);
              })
            ),
            e.on(re.RedirectPage, (e) => {
              E.a.debug(
                `${x.a
                  .getWindowEnv()
                  .toString()} Picked up command.redirect to ${e}, forwarding to host page.`
              );
              const t = OneSignal.proxyFrame;
              t &&
                t.messenger.message(
                  OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT,
                  e
                );
            }),
            e.on(re.NotificationDismissed, (e) => {
              h.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e);
            });
          const t = N.b.isHttps(),
            i = N.b.isSafari();
          e.on(re.AreYouVisible, (n) => {
            if (t && i) {
              const t = {
                timestamp: n.timestamp,
                focused: document.hasFocus(),
              };
              e.directPostMessageToSW(re.AreYouVisibleResponse, t);
            } else {
              const e = { timestamp: n.timestamp },
                t = OneSignal.proxyFrame;
              t &&
                t.messenger.message(
                  OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST,
                  e
                );
            }
          });
        });
      }
      installAlternatingWorker() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield this.getActiveState();
          e === ce.a.ThirdParty &&
            E.a.info(
              "[Service Worker Installation] 3rd party service worker detected."
            );
          const t = `${ce.b.getServiceWorkerHref(
              e,
              this.config
            )}?${w.a.encodeHashAsUriComponent({
              appId: this.context.appConfig.appId,
            })}`,
            i = `${N.b.getBaseUrl()}${this.config.registrationOptions.scope}`;
          E.a.info(
            `[Service Worker Installation] Installing service worker ${t} ${i}.`
          );
          try {
            yield navigator.serviceWorker.register(t, { scope: i });
          } catch (e) {
            if (
              (E.a.error(
                `[Service Worker Installation] Installing service worker failed ${e}`
              ),
              x.a.getWindowEnv() === L.a.OneSignalSubscriptionPopup)
            )
              throw e;
            const i = yield fetch(t);
            if (403 === i.status || 404 === i.status)
              throw new ke(i.status, i.statusText);
            throw e;
          }
          E.a.debug("[Service Worker Installation] Service worker installed.");
        });
      }
    }
    class _e {
      constructor(e, t) {
        (this.url = e),
          (this.url.pathname = "subscribe"),
          (this.options = t || {});
      }
      load() {
        const e = Object.assign({}, ie.getPromptOptionsPostHash(), {
          promptType: "popup",
          parentHostname: encodeURIComponent(location.hostname),
        });
        return (
          this.options.autoAccept && (e.autoAccept = !0),
          E.a.info(
            `Opening a popup to ${this.url.toString()} with POST data:`,
            e
          ),
          (this.popupWindow = this.openWindowViaPost(
            this.url.toString(),
            e,
            null
          )),
          this.establishCrossOriginMessaging(),
          (this.loadPromise = {}),
          (this.loadPromise.promise = new Promise((e, t) => {
            (this.loadPromise.resolver = e), (this.loadPromise.rejector = t);
          })),
          this.loadPromise.promise
        );
      }
      openWindowViaPost(e, t, i) {
        var n = document.createElement("form");
        (n.action = e),
          (n.method = "POST"),
          (n.target = "onesignal-http-popup");
        var o = void 0 != window.screenLeft ? window.screenLeft : screen.left,
          s = void 0 != window.screenTop ? window.screenTop : screen.top,
          r = window.innerWidth
            ? window.innerWidth
            : document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : screen.width,
          a = window.innerHeight
            ? window.innerHeight
            : document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : screen.height,
          c = OneSignal._windowWidth,
          l = OneSignal._windowHeight,
          d = r / 2 - c / 2 + o,
          u = a / 2 - l / 2 + s;
        i &&
          (i.childWidth && (c = i.childWidth),
          i.childHeight && (l = i.childHeight),
          i.left && (d = i.left),
          i.top && (u = i.top));
        const g = window.open(
          "about:blank",
          "onesignal-http-popup",
          `'scrollbars=yes, width=${c}, height=${l}, top=${u}, left=${d}`
        );
        if (t)
          for (var p in t) {
            var h = document.createElement("textarea");
            (h.name = p),
              (h.value = "object" == typeof t[p] ? JSON.stringify(t[p]) : t[p]),
              n.appendChild(h);
          }
        return (
          (n.style.display = "none"),
          document.body.appendChild(n),
          n.submit(),
          document.body.removeChild(n),
          g
        );
      }
      establishCrossOriginMessaging() {
        (this.messenger = new oe(
          this.popupWindow,
          this.url.toString(),
          this.url.toString()
        )),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS,
            this.onBeginMessagePortCommunications.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.POPUP_LOADED,
            this.onPopupLoaded.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED,
            this.onPopupAccepted.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED,
            this.onPopupRejected.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING,
            this.onPopupClosing.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT,
            this.onSetSessionCount.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT,
            this.onWindowTimeout.bind(this)
          ),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION,
            this.onFinishingRegistrationRemotely.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT,
            this.onRemoteRetriggerEvent.bind(this)
          ),
          this.messenger.startPostMessageReceive();
      }
      dispose() {
        this.messenger.destroy();
      }
      onBeginMessagePortCommunications(e) {
        return a.a(this, void 0, void 0, function* () {
          return (
            E.a.debug(
              `(${x.a
                .getWindowEnv()
                .toString()}) Successfully established cross-origin messaging with the popup window.`
            ),
            this.messenger.connect(),
            !1
          );
        });
      }
      onPopupLoaded(e) {
        return a.a(this, void 0, void 0, function* () {
          this.loadPromise.resolver(), h.a.trigger("popupLoad");
        });
      }
      onPopupAccepted(e) {
        return a.a(this, void 0, void 0, function* () {
          ie.triggerCustomPromptClicked("granted");
        });
      }
      onPopupRejected(e) {
        return a.a(this, void 0, void 0, function* () {
          ie.triggerCustomPromptClicked("denied");
        });
      }
      onPopupClosing(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.info("Popup window is closing, running cleanup events."),
            h.a.trigger(OneSignal.EVENTS.POPUP_CLOSING),
            this.dispose();
        });
      }
      onSetSessionCount(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug(
            x.a.getWindowEnv().toString() +
              " Marking current session as a continuing browsing session."
          );
          const { sessionCount: t } = e.data;
          OneSignal.context.pageViewManager.setPageViewCount(t);
        });
      }
      onWindowTimeout(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug(
            x.a.getWindowEnv().toString() +
              " Popup window timed out and was closed."
          ),
            h.a.trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT);
        });
      }
      onFinishingRegistrationRemotely(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug(
            location.origin,
            x.a.getWindowEnv().toString() +
              " Finishing HTTP popup registration inside the iFrame, sent from popup."
          ),
            e.reply({ progress: !0 });
          const { rawPushSubscription: t } = e.data;
          this.messenger && this.messenger.stopPostMessageReceive(),
            yield OneSignal.context.subscriptionManager.registerSubscription(t),
            yield B.checkAndTriggerSubscriptionChanged(),
            yield ie.checkAndTriggerNotificationPermissionChanged();
        });
      }
      onRemoteRetriggerEvent(e) {
        let { eventName: t, eventData: i } = e.data;
        return h.a.trigger(t, i, e.source), !1;
      }
      message() {
        this.messenger &&
          this.messenger.message.apply(this.messenger, arguments);
      }
    }
    function Re(e) {
      return btoa(
        encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
          return String.fromCharCode("0x" + t);
        })
      );
    }
    class De {
      getPropertiesAsJson() {
        return {
          origin: location.origin,
          url: location.href,
          sdkVersion: d.a.version(),
        };
      }
    }
    class Ue {}
    ((Ce = Ie || (Ie = {})).HttpPermissionRequest = "HttpPermissionRequest"),
      (Ce.SyncHashedEmail = "SyncHashedEmail");
    class We extends De {
      constructor(e) {
        super(), (this.apiName = e);
      }
      getEventName() {
        return "api-usage";
      }
      getPropertiesAsJson() {
        return Object.assign(
          { api: this.apiName.toString() },
          super.getPropertiesAsJson()
        );
      }
    }
    class Be extends Ue {
      constructor() {
        super();
      }
      getProfileName() {
        return "all_websites";
      }
      getDateUtc() {
        const e = new Date();
        return `${e.getUTCMonth() + 1}_${e.getUTCDate()}_${e.getUTCFullYear()}`;
      }
      getOperationData() {
        const e = { $add: {}, $ignore_time: !0 };
        return (e.$add[`pageview_${this.getDateUtc()}`] = 1), e;
      }
    }
    class Le {
      constructor(e, t) {
        (this.isFeatureEnabled = e), (this.mixpanelReportingToken = t);
      }
      static get MIXPANEL_REPORTING_URL() {
        return "https://api.mixpanel.com";
      }
      isEnabled() {
        return this.isFeatureEnabled && !!this.mixpanelReportingToken;
      }
      reportEvent(e) {
        if (!this.isEnabled()) return Promise.resolve(null);
        const t = {
            event: e.getEventName(),
            properties: Object.assign(
              { token: this.mixpanelReportingToken },
              e.getPropertiesAsJson()
            ),
          },
          i = Re(JSON.stringify(t)),
          n = { method: "GET", headers: new Headers(), cache: "no-cache" };
        return fetch(`${Le.MIXPANEL_REPORTING_URL}/track/?data=${i}`, n);
      }
      reportEngagement(e) {
        if (!this.isEnabled()) return Promise.resolve(null);
        let t = {
          $token: this.mixpanelReportingToken,
          $distinct_id: e.getProfileName(),
        };
        t = Object.assign({}, t, e.getOperationData());
        const i = Re(JSON.stringify(t)),
          n = { method: "GET", headers: new Headers(), cache: "no-cache" };
        return fetch(`${Le.MIXPANEL_REPORTING_URL}/engage/?data=${i}`, n);
      }
      shouldCollectPageView() {
        const e = new Date();
        return (
          e.getUTCMonth() + 1 <= 2 &&
          e.getUTCDate() <= 10 &&
          e.getUTCFullYear() <= 2018 &&
          e.getUTCMonth() + 1 >= 2 &&
          e.getUTCDate() >= 8 &&
          e.getUTCFullYear() >= 2018
        );
      }
      reportPageView() {
        this.shouldCollectPageView() && this.reportEngagement(new Be());
      }
    }
    ((Ae = Te || (Te = {}))[(Ae.HttpPermissionRequest = 0)] =
      "HttpPermissionRequest"),
      (Ae[(Ae.SyncHashedEmail = 1)] = "SyncHashedEmail");
    class je extends u.a {
      constructor(e) {
        switch (e) {
          case Te.HttpPermissionRequest:
            super(
              "The HTTP permission request has been deprecated. Please remove any custom popups from your code."
            ),
              this.reportUsage(Ie.HttpPermissionRequest);
            break;
          case Te.SyncHashedEmail:
            super(
              "API syncHashedEmail() has been deprecated and will be removed in a future SDK release. Please remove any usages from your code."
            ),
              this.reportUsage(Ie.SyncHashedEmail);
        }
        Object.setPrototypeOf(this, je.prototype);
      }
      reportUsage(e) {
        "undefined" != typeof OneSignal &&
          OneSignal.context &&
          OneSignal.context.metricsManager &&
          OneSignal.context.metricsManager.reportEvent(new We(e));
      }
    }
    class Ve {
      static internalInit() {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug("Called %cinternalInit()", Object(C.k)("code")),
            yield OneSignal.context.serviceWorkerManager.installWorker();
          const e = OneSignal.context.sessionManager;
          OneSignal.emitter.on(
            OneSignal.EVENTS.SESSION_STARTED,
            e.sendOnSessionUpdateFromPage.bind(e)
          ),
            OneSignal.context.pageViewManager.incrementPageViewCount(),
            "visible" === document.visibilityState
              ? yield Ve.sessionInit()
              : Ve.postponeSessionInitUntilPageIsInFocus();
        });
      }
      static postponeSessionInitUntilPageIsInFocus() {
        Object(C.u)(
          document,
          "visibilitychange",
          (e, t) => {
            "visible" === document.visibilityState && (t(), Ve.sessionInit());
          },
          !0
        );
      }
      static sessionInit() {
        return a.a(this, void 0, void 0, function* () {
          if (
            (E.a.debug("Called %csessionInit()", Object(C.k)("code")),
            OneSignal._sessionInitAlreadyRunning)
          )
            return void E.a.debug(
              "Returning from sessionInit because it has already been called."
            );
          OneSignal._sessionInitAlreadyRunning = !0;
          try {
            yield Ve.doInitialize();
          } catch (e) {
            if (e instanceof p) return;
            throw e;
          }
          const e = yield OneSignal.internalIsOptedOut();
          W.setIsOptedOut(!!e),
            N.a.isUsingSubscriptionWorkaround() ||
              (yield Ve.handleAutoResubscribe(e));
          const t = yield OneSignal.privateIsPushNotificationsEnabled();
          if (
            (W.setIsPushNotificationsEnabled(!!t),
            OneSignal.config.userConfig.promptOptions.autoPrompt && !e && !t)
          ) {
            const { environmentInfo: e } = OneSignal,
              {
                browserType: t,
                browserVersion: i,
                requiresUserInteraction: n,
              } = e,
              o =
                ("chrome" === t &&
                  Number(i) >= 63 &&
                  (l.a.tablet || l.a.mobile)) ||
                n,
              s =
                OneSignal.context.appConfig.userConfig.promptOptions.slidedown
                  .categories;
            yield OneSignal.context.promptsManager.internalShowAutoPrompt({
              forceSlidedownOverNative: o,
              categoryOptions: s,
            });
          }
          (OneSignal._sessionInitAlreadyRunning = !1),
            yield h.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED);
        });
      }
      static registerForPushNotifications(e = {}) {
        return a.a(this, void 0, void 0, function* () {
          if (e && e.modalPrompt)
            return (
              (OneSignal.subscriptionModalHost = new se(
                OneSignal.config.appId,
                e
              )),
              void (yield OneSignal.subscriptionModalHost.load())
            );
          if (N.a.isUsingSubscriptionWorkaround())
            return e.httpPermissionRequest
              ? void E.a.error(new je(Te.HttpPermissionRequest))
              : void (yield Ve.loadSubscriptionPopup(e));
          W.getIsOptedOut() || (yield X.registerForPush());
        });
      }
      static onSdkInitialized() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield Ve.processExpiringSubscriptions();
          (yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
            ? (OneSignal.context.sessionManager.setupSessionEventListeners(),
              e ||
                (yield OneSignal.context.updateManager.sendOnSessionUpdate()))
            : OneSignal.config.userConfig.promptOptions.autoPrompt ||
              OneSignal.config.userConfig.autoResubscribe ||
              (yield OneSignal.context.updateManager.sendOnSessionUpdate()),
            yield h.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC);
        });
      }
      static loadSubscriptionPopup(e) {
        return a.a(this, void 0, void 0, function* () {
          (OneSignal.subscriptionPopupHost = new _e(
            OneSignal.proxyFrameHost.url,
            e
          )),
            yield OneSignal.subscriptionPopupHost.load();
        });
      }
      static storeInitialValues() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield OneSignal.privateIsPushNotificationsEnabled(),
            t = yield OneSignal.privateGetNotificationPermission(),
            i = yield OneSignal.internalIsOptedOut();
          f.put("subscription.optedOut", i),
            yield I.a.put("Options", { key: "isPushEnabled", value: e }),
            yield I.a.put("Options", {
              key: "notificationPermission",
              value: t,
            });
        });
      }
      static setWelcomeNotificationFlag() {
        return a.a(this, void 0, void 0, function* () {
          (yield OneSignal.context.permissionManager.getNotificationPermission(
            OneSignal.context.appConfig.safariWebId
          )) === A.Granted && (OneSignal.__doNotShowWelcomeNotification = !0);
        });
      }
      static establishServiceWorkerChannel() {
        return a.a(this, void 0, void 0, function* () {
          if (
            navigator.serviceWorker &&
            "https:" === window.location.protocol &&
            !(yield x.a.isFrameContextInsecure())
          )
            try {
              const e = yield xe.getRegistration();
              e &&
                e.active &&
                (yield OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel());
            } catch (e) {
              E.a.error(e);
            }
        });
      }
      static processExpiringSubscriptions() {
        return a.a(this, void 0, void 0, function* () {
          const e = OneSignal.context;
          if (
            (E.a.debug("Checking subscription expiration..."),
            !(yield e.subscriptionManager.isSubscriptionExpiring()))
          )
            return E.a.debug("Subscription is not considered expired."), !1;
          const t = yield x.a.getIntegration(),
            i = x.a.getWindowEnv();
          switch (
            (E.a.debug(
              "Subscription is considered expiring. Current Integration:",
              t
            ),
            t)
          ) {
            case ge.a.Secure:
              const n = yield e.subscriptionManager.subscribe(1);
              yield e.subscriptionManager.registerSubscription(n);
              break;
            case ge.a.SecureProxy:
              if (i === L.a.OneSignalProxyFrame)
                yield this.registerSubscriptionInProxyFrame(e);
              else {
                yield OneSignal.proxyFrameHost.runCommand(
                  OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS
                );
              }
              break;
            case ge.a.InsecureProxy:
              yield I.a.remove("Ids", "registrationId"),
                E.a.debug(
                  "Unsubscribed expiring HTTP subscription by removing registration ID."
                );
          }
          return !0;
        });
      }
      static registerSubscriptionInProxyFrame(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield new Promise((t) => {
            e.workerMessenger.once(re.SubscribeNew, (e) => {
              t(pe.a.deserialize(e));
            }),
              e.workerMessenger.unicast(re.SubscribeNew, e.appConfig);
          });
          return (
            E.a.debug("Finished registering brand new subscription:", t), t
          );
        });
      }
      static doInitialize() {
        return a.a(this, void 0, void 0, function* () {
          const e = [];
          e.push(Ve.storeInitialValues()),
            e.push(Ve.installNativePromptPermissionChangedHook()),
            e.push(Ve.setWelcomeNotificationFlag()),
            e.push(Ve.establishServiceWorkerChannel()),
            e.push(Ve.showNotifyButton()),
            e.push(Ve.showPromptsFromWebConfigEditor());
          try {
            yield Promise.all(e);
          } catch (e) {
            throw (E.a.error(e), new p(s.Unknown));
          }
        });
      }
      static showNotifyButton() {
        return a.a(this, void 0, void 0, function* () {
          if (d.a.isBrowser() && !OneSignal.notifyButton) {
            (OneSignal.config.userConfig.notifyButton =
              OneSignal.config.userConfig.notifyButton || {}),
              OneSignal.config.userConfig.bell &&
                ((OneSignal.config.userConfig.bell = Object.assign(
                  {},
                  OneSignal.config.userConfig.bell,
                  OneSignal.config.userConfig.notifyButton
                )),
                (OneSignal.config.userConfig.notifyButton = Object.assign(
                  {},
                  OneSignal.config.userConfig.notifyButton,
                  OneSignal.config.userConfig.bell
                )));
            const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
            e && "function" == typeof e
              ? OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, () =>
                  a.a(this, void 0, void 0, function* () {
                    !1 !==
                    (yield Promise.resolve(
                      OneSignal.config.userConfig.notifyButton.displayPredicate()
                    ))
                      ? ((OneSignal.notifyButton = new we(
                          OneSignal.config.userConfig.notifyButton
                        )),
                        OneSignal.notifyButton.create())
                      : E.a.debug(
                          "Notify button display predicate returned false so not showing the notify button."
                        );
                  })
                )
              : ((OneSignal.notifyButton = new we(
                  OneSignal.config.userConfig.notifyButton
                )),
                OneSignal.notifyButton.create());
          }
        });
      }
      static updateEmailSessionCount() {
        return a.a(this, void 0, void 0, function* () {
          const e = OneSignal.context;
          if (e.pageViewManager.isFirstPageView()) {
            const t = yield I.a.getEmailProfile();
            if (t.emailId) {
              const i = new O(t.emailAddress, t.emailAuthHash);
              (i.appId = e.appConfig.appId),
                yield P.updateUserSession(t.emailId, i);
            }
          }
        });
      }
      static showPromptsFromWebConfigEditor() {
        return a.a(this, void 0, void 0, function* () {
          const e = OneSignal.config;
          e.userConfig.promptOptions &&
            (yield T.initialize(e.userConfig.promptOptions.customlink));
        });
      }
      static installNativePromptPermissionChangedHook() {
        return a.a(this, void 0, void 0, function* () {
          if (
            navigator.permissions &&
            !(l.a.firefox && Number(l.a.version) <= 45)
          ) {
            (OneSignal._usingNativePermissionHook = !0),
              ((yield navigator.permissions.query({
                name: "notifications",
              })).onchange = function () {
                Object(C.y)();
              });
          }
        });
      }
      static saveInitOptions() {
        return a.a(this, void 0, void 0, function* () {
          let e = [];
          const t = OneSignal.config.userConfig.persistNotification;
          e.push(
            I.a.put("Options", {
              key: "persistNotification",
              value: null == t || t,
            })
          );
          let i = OneSignal.config.userConfig.webhooks;
          return (
            [
              "notification.displayed",
              "notification.clicked",
              "notification.dismissed",
            ].forEach((t) => {
              i && i[t]
                ? e.push(
                    I.a.put("Options", { key: `webhooks.${t}`, value: i[t] })
                  )
                : e.push(
                    I.a.put("Options", { key: `webhooks.${t}`, value: !1 })
                  );
            }),
            i && i.cors
              ? e.push(I.a.put("Options", { key: "webhooks.cors", value: !0 }))
              : e.push(I.a.put("Options", { key: "webhooks.cors", value: !1 })),
            OneSignal.config.userConfig.notificationClickHandlerMatch
              ? e.push(
                  I.a.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value:
                      OneSignal.config.userConfig.notificationClickHandlerMatch,
                  })
                )
              : e.push(
                  I.a.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: "exact",
                  })
                ),
            OneSignal.config.userConfig.notificationClickHandlerAction
              ? e.push(
                  I.a.put("Options", {
                    key: "notificationClickHandlerAction",
                    value:
                      OneSignal.config.userConfig
                        .notificationClickHandlerAction,
                  })
                )
              : e.push(
                  I.a.put("Options", {
                    key: "notificationClickHandlerAction",
                    value: "navigate",
                  })
                ),
            Promise.all(e)
          );
        });
      }
      static initSaveState(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield ie.getAppId(),
            i = OneSignal.config;
          yield I.a.put("Ids", { type: "appId", id: t });
          const n = e || i.siteName || document.title || "Notification";
          yield I.a.put("Options", { key: "pageTitle", value: n }),
            E.a.info(`OneSignal: Set pageTitle to be '${n}'.`),
            yield I.a.put("Options", {
              key: "emailAuthRequired",
              value: !!i.emailAuthRequired,
            });
        });
      }
      static handleAutoResubscribe(e) {
        return a.a(this, void 0, void 0, function* () {
          if (
            (E.a.info("handleAutoResubscribe", {
              autoResubscribe: OneSignal.config.userConfig.autoResubscribe,
              isOptedOut: e,
            }),
            OneSignal.config.userConfig.autoResubscribe && !e)
          ) {
            (yield OneSignal.context.permissionManager.getNotificationPermission(
              OneSignal.context.appConfig.safariWebId
            )) == A.Granted && (yield X.registerForPush());
          }
        });
      }
      static polyfillSafariFetch() {
        return a.a(this, void 0, void 0, function* () {
          if (l.a.safari && void 0 === window.fetch) {
            E.a.debug("Loading fetch polyfill for Safari..");
            try {
              yield new ue().loadFetchPolyfill(),
                E.a.debug("Done loading fetch polyfill.");
            } catch (e) {
              E.a.debug("Error loading fetch polyfill:", e);
            }
          }
        });
      }
      static errorIfInitAlreadyCalled() {
        if (OneSignal._initCalled) throw new p(s.MultipleInitialization);
        OneSignal._initCalled = !0;
      }
    }
    class Fe {
      static markHttpsNativePromptDismissed() {
        return a.a(this, void 0, void 0, function* () {
          if (Object(C.q)())
            try {
              yield new Promise((e, t) => {
                OneSignal.proxyFrameHost.message(
                  OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED,
                  {},
                  (i) => {
                    i.data ===
                    OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE
                      ? e()
                      : t();
                  }
                );
              });
            } catch (e) {
              E.a.debug(
                "Proxy Frame possibly didn't not receive MARK_PROMPT_DISMISSED message",
                e || ""
              );
            }
          let e = yield I.a.get("Options", "promptDismissCount");
          e || (e = 0), Object(C.q)() || (e += 1);
          let t = 3;
          2 == e ? (t = 7) : e > 2 && (t = 30),
            E.a.debug(
              `(${x.a
                .getWindowEnv()
                .toString()}) OneSignal: User dismissed the native notification prompt; reprompt after ${t} days.`
            ),
            yield I.a.put("Options", { key: "promptDismissCount", value: e });
          const i = 24 * t * 60;
          return V.setItem("onesignal-notification-prompt", "dismissed", i);
        });
      }
    }
    class He {
      constructor() {
        this.incrementedPageViewCount = !1;
      }
      getPageViewCount() {
        try {
          const e = sessionStorage.getItem(He.SESSION_STORAGE_KEY_NAME),
            t = e ? parseInt(e) : 0;
          return isNaN(t) ? 0 : t;
        } catch (e) {
          return 0;
        }
      }
      setPageViewCount(e) {
        try {
          sessionStorage.setItem(He.SESSION_STORAGE_KEY_NAME, e.toString()),
            x.a.getWindowEnv() === L.a.OneSignalSubscriptionPopup &&
              OneSignal.subscriptionPopup &&
              OneSignal.subscriptionPopup.message(
                OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT
              );
        } catch (e) {}
      }
      incrementPageViewCount() {
        if (this.incrementedPageViewCount) return;
        const e = this.getPageViewCount() + 1,
          t = this.getLocalPageViewCount() + 1;
        this.setPageViewCount(e),
          this.setLocalPageViewCount(t),
          (this.incrementedPageViewCount = !0),
          E.a.debug(
            `Incremented page view count: newCountSingleTab: ${e},\n      newCountAccrossTabs: ${t}.`
          );
      }
      simulatePageNavigationOrRefresh() {
        this.incrementedPageViewCount = !1;
      }
      isFirstPageView() {
        return 1 === this.getPageViewCount();
      }
      getLocalPageViewCount() {
        return W.getLocalPageViewCount();
      }
      setLocalPageViewCount(e) {
        W.setLocalPageViewCount(e);
      }
    }
    (He.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count"),
      ((Me = Ne || (Ne = {}))[(Me.InvalidSafariSetup = 0)] =
        "InvalidSafariSetup"),
      (Me[(Me.Blocked = 1)] = "Blocked"),
      (Me[(Me.Dismissed = 2)] = "Dismissed");
    class $e extends u.a {
      constructor(e) {
        switch (e) {
          case Ne.InvalidSafariSetup:
            super(
              "The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session."
            );
            break;
          case Ne.Blocked:
            super("Notification permissions are blocked.");
            break;
          case Ne.Dismissed:
            super("The notification permission prompt was dismissed.");
        }
        Object.setPrototypeOf(this, $e.prototype);
      }
    }
    class ze {
      constructor(e, t) {
        (this.context = e), (this.config = t);
      }
      static isSafari() {
        return d.a.isSafari();
      }
      subscribe(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = x.a.getWindowEnv();
          switch (t) {
            case L.a.CustomIframe:
            case L.a.Unknown:
            case L.a.OneSignalProxyFrame:
              throw new InvalidStateError.a(
                InvalidStateError.b.UnsupportedEnvironment
              );
          }
          let i;
          switch (t) {
            case L.a.ServiceWorker:
              i = yield this.subscribeFcmFromWorker(e);
              break;
            case L.a.Host:
            case L.a.OneSignalSubscriptionModal:
            case L.a.OneSignalSubscriptionPopup:
              if (
                (yield OneSignal.privateGetNotificationPermission()) ===
                A.Denied
              )
                throw new q(F.Blocked);
              if (ze.isSafari()) {
                (i = yield this.subscribeSafari()),
                  E.a.info("Installing SW on Safari");
                try {
                  yield this.context.serviceWorkerManager.installWorker(),
                    E.a.info("SW on Safari successfully installed");
                } catch (e) {
                  E.a.error("SW on Safari failed to install.");
                }
              } else i = yield this.subscribeFcmFromPage(e);
              break;
            default:
              throw new InvalidStateError.a(
                InvalidStateError.b.UnsupportedEnvironment
              );
          }
          return i;
        });
      }
      registerSubscription(e, t) {
        return a.a(this, void 0, void 0, function* () {
          e && (e = Y.a.deserialize(e));
          const i = z.a.createFromPushSubscription(this.config.appId, e, t);
          let n = void 0;
          (yield this.isAlreadyRegisteredWithOneSignal())
            ? yield this.context.updateManager.sendPlayerUpdate(i)
            : (n = yield this.context.updateManager.sendPlayerCreate(i)) &&
              (yield this.associateSubscriptionWithEmail(n));
          const o = yield I.a.getSubscription();
          return (
            (o.deviceId = n),
            (o.optedOut = !1),
            e
              ? ze.isSafari()
                ? (o.subscriptionToken = e.safariDeviceToken)
                : (o.subscriptionToken = e.w3cEndpoint
                    ? e.w3cEndpoint.toString()
                    : null)
              : (o.subscriptionToken = null),
            yield I.a.setSubscription(o),
            x.a.getWindowEnv() !== L.a.ServiceWorker &&
              h.a.trigger(OneSignal.EVENTS.REGISTERED),
            "undefined" != typeof OneSignal &&
              (OneSignal._sessionInitAlreadyRunning = !1),
            o
          );
        });
      }
      static requestPresubscribeNotificationPermission() {
        return a.a(this, void 0, void 0, function* () {
          return yield ze.requestNotificationPermission();
        });
      }
      unsubscribe(e) {
        return a.a(this, void 0, void 0, function* () {
          if (0 === e) throw new b.a();
          if (1 !== e) throw new b.a();
          if (x.a.getWindowEnv() !== L.a.ServiceWorker) throw new b.a();
          {
            const { deviceId: e } = yield I.a.getSubscription();
            yield P.updatePlayer(this.context.appConfig.appId, e, {
              notification_types: $.a.MutedByApi,
            }),
              yield I.a.put("Options", { key: "optedOut", value: !0 });
          }
        });
      }
      static requestNotificationPermission() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield window.Notification.requestPermission();
          return A[e];
        });
      }
      associateSubscriptionWithEmail(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield I.a.getEmailProfile();
          t.emailId &&
            (yield P.updatePlayer(this.config.appId, e, {
              parent_player_id: t.emailId,
              email: t.emailAddress,
            }));
        });
      }
      isAlreadyRegisteredWithOneSignal() {
        return a.a(this, void 0, void 0, function* () {
          const { deviceId: e } = yield I.a.getSubscription();
          return !!e;
        });
      }
      subscribeSafariPromptPermission() {
        return new Promise((e) => {
          window.safari.pushNotification.requestPermission(
            `${x.a.getOneSignalApiUrl().toString()}/safari`,
            this.config.safariWebId,
            { app_id: this.config.appId },
            (t) => {
              t.deviceToken ? e(t.deviceToken.toLowerCase()) : e(null);
            }
          );
        });
      }
      subscribeSafari() {
        return a.a(this, void 0, void 0, function* () {
          const e = new Y.a();
          if (!this.config.safariWebId) throw new p(s.MissingSafariWebId);
          const { deviceToken: t } = window.safari.pushNotification.permission(
            this.config.safariWebId
          );
          (e.existingSafariDeviceToken = t),
            t || h.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
          const i = yield this.subscribeSafariPromptPermission();
          if ((G.a.triggerNotificationPermissionChanged(), !i))
            throw new $e(Ne.InvalidSafariSetup);
          return e.setFromSafariSubscription(i), e;
        });
      }
      subscribeFcmFromPage(e) {
        return a.a(this, void 0, void 0, function* () {
          if (
            x.a.getWindowEnv() !== L.a.ServiceWorker &&
            window.Notification.permission === A.Default
          ) {
            yield h.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
            const e = yield ze.requestPresubscribeNotificationPermission();
            switch (
              (e === A.Default &&
                (yield G.a.triggerNotificationPermissionChanged(!0)),
              e)
            ) {
              case A.Default:
                throw (
                  (E.a.debug(
                    "Exiting subscription and not registering worker because the permission was dismissed."
                  ),
                  (OneSignal._sessionInitAlreadyRunning = !1),
                  (OneSignal._isRegisteringForPush = !1),
                  new q(F.Dismissed))
                );
              case A.Denied:
                throw (
                  (E.a.debug(
                    "Exiting subscription and not registering worker because the permission was blocked."
                  ),
                  (OneSignal._sessionInitAlreadyRunning = !1),
                  (OneSignal._isRegisteringForPush = !1),
                  new q(F.Blocked))
                );
            }
          }
          try {
            yield this.context.serviceWorkerManager.installWorker();
          } catch (e) {
            throw (
              (e instanceof ke &&
                (403 === e.status
                  ? yield this.context.subscriptionManager.registerFailedSubscription(
                      $.a.ServiceWorkerStatus403,
                      this.context
                    )
                  : 404 === e.status &&
                    (yield this.context.subscriptionManager.registerFailedSubscription(
                      $.a.ServiceWorkerStatus404,
                      this.context
                    ))),
              e)
            );
          }
          E.a.debug("Waiting for the service worker to activate...");
          const t = yield navigator.serviceWorker.ready;
          return (
            E.a.debug("Service worker is ready to continue subscribing."),
            yield this.subscribeWithVapidKey(t.pushManager, e)
          );
        });
      }
      subscribeFcmFromWorker(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = self.registration;
          if (!t.active && !l.a.firefox)
            throw new InvalidStateError.a(
              InvalidStateError.b.ServiceWorkerNotActivated
            );
          const i = yield t.pushManager.permissionState({
            userVisibleOnly: !0,
          });
          if ("denied" === i) throw new q(F.Blocked);
          if ("prompt" === i) throw new q(F.Default);
          return yield this.subscribeWithVapidKey(t.pushManager, e);
        });
      }
      getVapidKeyForBrowser() {
        let e = void 0;
        return (e = l.a.firefox
          ? this.config.onesignalVapidPublicKey
          : this.config.vapidPublicKey)
          ? (function (e) {
              const t = (e + "=".repeat((4 - (e.length % 4)) % 4))
                  .replace(/\-/g, "+")
                  .replace(/_/g, "/"),
                i = atob(t),
                n = new Uint8Array(i.length);
              for (let e = 0; e < i.length; ++e) n[e] = i.charCodeAt(e);
              return n;
            })(e).buffer
          : void 0;
      }
      subscribeWithVapidKey(e, t) {
        return a.a(this, void 0, void 0, function* () {
          const i = yield e.getSubscription();
          switch (t) {
            case 0:
              if (!i) break;
              i.options
                ? E.a.debug(
                    "[Subscription Manager] An existing push subscription exists and it's options is not null."
                  )
                : (E.a.debug(
                    "[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."
                  ),
                  yield ze.doPushUnsubscribe(i));
              break;
            case 1:
              i && (yield ze.doPushUnsubscribe(i));
          }
          const [n, o] = yield ze.doPushSubscribe(
            e,
            this.getVapidKeyForBrowser()
          );
          yield ze.updateSubscriptionTime(o, n.expirationTime);
          const s = Y.a.setFromW3cSubscription(n);
          return (
            i &&
              (s.existingW3cPushSubscription = Y.a.setFromW3cSubscription(i)),
            s
          );
        });
      }
      static updateSubscriptionTime(e, t) {
        return a.a(this, void 0, void 0, function* () {
          const i = yield I.a.getSubscription();
          e && (i.createdAt = new Date().getTime()),
            (i.expirationTime = t),
            yield I.a.setSubscription(i);
        });
      }
      static doPushUnsubscribe(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug(
            "[Subscription Manager] Unsubscribing existing push subscription."
          );
          const t = yield e.unsubscribe();
          return (
            E.a.debug(
              `[Subscription Manager] Unsubscribing existing push subscription result: ${t}`
            ),
            t
          );
        });
      }
      static doPushSubscribe(e, t) {
        return a.a(this, void 0, void 0, function* () {
          if (!t)
            throw new Error(
              "Missing required 'applicationServerKey' to subscribe for push notifications!"
            );
          const i = { userVisibleOnly: !0, applicationServerKey: t };
          E.a.debug(
            "[Subscription Manager] Subscribing to web push with these options:",
            i
          );
          try {
            const t = yield e.getSubscription();
            return [yield e.subscribe(i), !t];
          } catch (t) {
            if ("InvalidStateError" == t.name) {
              E.a.warn(
                "[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.",
                t
              );
              const n = yield e.getSubscription();
              return (
                n && (yield ze.doPushUnsubscribe(n)), [yield e.subscribe(i), !0]
              );
            }
            throw t;
          }
        });
      }
      isSubscriptionExpiring() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield x.a.getIntegration(),
            t = x.a.getWindowEnv();
          switch (e) {
            case ge.a.Secure:
              return yield this.isSubscriptionExpiringForSecureIntegration();
            case ge.a.SecureProxy:
              if (t === L.a.Host) {
                const e = OneSignal.proxyFrameHost;
                if (e)
                  return yield e.runCommand(
                    OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE
                  );
                throw new InvalidStateError.a(InvalidStateError.b.NoProxyFrame);
              }
              return yield this.isSubscriptionExpiringForSecureIntegration();
            case ge.a.InsecureProxy:
              const { expirationTime: i } = yield I.a.getSubscription();
              return !!i && new Date().getTime() >= i;
          }
        });
      }
      isSubscriptionExpiringForSecureIntegration() {
        return a.a(this, void 0, void 0, function* () {
          const e = yield this.context.serviceWorkerManager.getActiveState();
          if (e !== ce.a.WorkerA && e !== ce.a.WorkerB) return !1;
          const t = yield xe.getRegistration();
          if (!t) return !1;
          if (!t.pushManager) return !1;
          const i = yield t.pushManager.getSubscription();
          if (!i) return !1;
          if (!i.expirationTime) return !1;
          let { createdAt: n } = yield I.a.getSubscription();
          if (!n) {
            const e = 31536e6;
            n = new Date().getTime() + e;
          }
          const o = n + (i.expirationTime - n) / 2;
          return (
            !!i.expirationTime &&
            (new Date().getTime() >= i.expirationTime ||
              new Date().getTime() >= o)
          );
        });
      }
      getSubscriptionState() {
        return a.a(this, void 0, void 0, function* () {
          if (ze.isSafari()) return this.getSubscriptionStateForSecure();
          const e = x.a.getWindowEnv();
          switch (e) {
            case L.a.ServiceWorker:
              const t = yield self.registration.pushManager.getSubscription(),
                { optedOut: i } = yield I.a.getSubscription();
              return { subscribed: !!t, optedOut: !!i };
            default:
              switch (yield x.a.getIntegration()) {
                case ge.a.Secure:
                  return this.getSubscriptionStateForSecure();
                case ge.a.SecureProxy:
                  switch (e) {
                    case L.a.OneSignalProxyFrame:
                    case L.a.OneSignalSubscriptionPopup:
                    case L.a.OneSignalSubscriptionModal:
                      return this.getSubscriptionStateForSecure();
                    default:
                      return yield OneSignal.proxyFrameHost.runCommand(
                        OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE
                      );
                  }
                case ge.a.InsecureProxy:
                  return yield this.getSubscriptionStateForInsecure();
                default:
                  throw new InvalidStateError.a(
                    InvalidStateError.b.UnsupportedEnvironment
                  );
              }
          }
        });
      }
      getSubscriptionStateForSecure() {
        return a.a(this, void 0, void 0, function* () {
          const { deviceId: e, optedOut: t } = yield I.a.getSubscription();
          if (ze.isSafari()) {
            const i = window.safari.pushNotification.permission(
              this.config.safariWebId
            );
            return {
              subscribed: !("granted" !== i.permission || !i.deviceToken || !e),
              optedOut: !!t,
            };
          }
          const i = yield this.context.serviceWorkerManager.getActiveState(),
            n = yield xe.getRegistration(),
            o = yield this.context.permissionManager.getNotificationPermission(
              this.context.appConfig.safariWebId
            ),
            s = i === ce.a.WorkerA || i === ce.a.WorkerB;
          return n
            ? { subscribed: !(!e || o !== A.Granted || !s), optedOut: !!t }
            : { subscribed: !1, optedOut: !!t };
        });
      }
      getSubscriptionStateForInsecure() {
        return a.a(this, void 0, void 0, function* () {
          const {
              deviceId: e,
              subscriptionToken: t,
              optedOut: i,
            } = yield I.a.getSubscription(),
            n = yield this.context.permissionManager.getNotificationPermission(
              this.context.appConfig.safariWebId
            );
          return { subscribed: !(!e || !t || n !== A.Granted), optedOut: !!i };
        });
      }
      registerFailedSubscription(e, t) {
        return a.a(this, void 0, void 0, function* () {
          t.pageViewManager.isFirstPageView() &&
            (t.subscriptionManager.registerSubscription(new Y.a(), e),
            t.pageViewManager.incrementPageViewCount());
        });
      }
    }
    var Ge = class {
      static getServiceWorkerManager(e) {
        const t = e.appConfig,
          i = x.a.getBuildEnvPrefix(),
          n = {
            workerAPath: new Ee(`/${i}OneSignalSDKWorker.js`),
            workerBPath: new Ee(`/${i}OneSignalSDKUpdaterWorker.js`),
            registrationOptions: { scope: "/" },
          };
        return (
          t.userConfig &&
            (t.userConfig.path &&
              ((n.workerAPath = new Ee(
                `${t.userConfig.path}${i}${t.userConfig.serviceWorkerPath}`
              )),
              (n.workerBPath = new Ee(
                `${t.userConfig.path}${i}${t.userConfig.serviceWorkerUpdaterPath}`
              ))),
            t.userConfig.serviceWorkerParam &&
              (n.registrationOptions = t.userConfig.serviceWorkerParam)),
          new xe(e, n)
        );
      }
      static getSubscriptionManager(e) {
        const t = e.appConfig,
          i = {
            safariWebId: t.safariWebId,
            appId: t.appId,
            vapidPublicKey: t.vapidPublicKey,
            onesignalVapidPublicKey: t.onesignalVapidPublicKey,
          };
        return new ze(e, i);
      }
    };
    class qe {
      constructor(e) {
        (this.context = e),
          (this.onSessionSent = e.pageViewManager.getPageViewCount() > 1);
      }
      getDeviceId() {
        return a.a(this, void 0, void 0, function* () {
          const { deviceId: e } = yield I.a.getSubscription();
          if (!e) throw new g(n.NoDeviceId);
          return e;
        });
      }
      createDeviceRecord() {
        return a.a(this, void 0, void 0, function* () {
          return ie.createDeviceRecord(this.context.appConfig.appId);
        });
      }
      sendPlayerUpdate(e) {
        return a.a(this, void 0, void 0, function* () {
          if (
            !(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
          )
            return void E.a.debug(
              "Not sending the update because user is not registered with OneSignal (no device id)"
            );
          const t = yield this.getDeviceId();
          e || (e = yield this.createDeviceRecord()),
            this.onSessionSent
              ? yield P.updatePlayer(
                  this.context.appConfig.appId,
                  t,
                  Object.assign(
                    { notification_types: $.a.Subscribed },
                    e.serialize()
                  )
                )
              : yield this.sendOnSessionUpdate(e);
        });
      }
      sendOnSessionUpdate(e) {
        return a.a(this, void 0, void 0, function* () {
          if (this.onSessionSent) return;
          if (!this.context.pageViewManager.isFirstPageView()) return;
          if (
            !(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
          )
            return void E.a.debug(
              "Not sending the on session because user is not registered with OneSignal (no device id)"
            );
          const t = yield this.getDeviceId();
          if (
            (e || (e = yield this.createDeviceRecord()),
            e.subscriptionState === $.a.Subscribed ||
              !0 === OneSignal.config.enableOnSession)
          )
            try {
              this.context.sessionManager.upsertSession(
                t,
                e,
                J.b.PlayerOnSession
              ),
                (this.onSessionSent = !0);
            } catch (e) {
              E.a.error(
                `Failed to update user session. Error "${e.message}" ${e.stack}`
              );
            }
        });
      }
      sendPlayerCreate(e) {
        return a.a(this, void 0, void 0, function* () {
          try {
            const t = yield P.createUser(e);
            return t
              ? (E.a.info(
                  "Subscribed to web push and registered with OneSignal",
                  e,
                  t
                ),
                (this.onSessionSent = !0),
                this.context.sessionManager.upsertSession(
                  t,
                  e,
                  J.b.PlayerCreate
                ),
                t)
              : void E.a.error("Failed to create user.");
          } catch (e) {
            return void E.a.error(
              `Failed to create user. Error "${e.message}" ${e.stack}`
            );
          }
        });
      }
      onSessionAlreadyCalled() {
        return this.onSessionSent;
      }
      sendExternalUserIdUpdate(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield this.getDeviceId();
          yield P.updatePlayer(this.context.appConfig.appId, t, {
            external_user_id: w.b.getValueOrDefault(e, ""),
          });
        });
      }
      sendOutcomeDirect(e, t, i, n) {
        return a.a(this, void 0, void 0, function* () {
          Object(C.s)("sendOutcomeDirect");
          const o = yield this.createDeviceRecord(),
            s = {
              app_id: e,
              id: i,
              device_type: o.deliveryPlatform,
              notification_ids: t,
              direct: !0,
            };
          void 0 !== n && (s.weight = n), yield P.sendOutcome(s);
        });
      }
      sendOutcomeInfluenced(e, t, i, n) {
        return a.a(this, void 0, void 0, function* () {
          Object(C.s)("sendOutcomeInfluenced");
          const o = yield this.createDeviceRecord(),
            s = {
              app_id: e,
              id: i,
              device_type: o.deliveryPlatform,
              notification_ids: t,
              direct: !1,
            };
          void 0 !== n && (s.weight = n), yield P.sendOutcome(s);
        });
      }
      sendOutcomeUnattributed(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          Object(C.s)("sendOutcomeUnattributed");
          const n = yield this.createDeviceRecord(),
            o = { app_id: e, id: t, device_type: n.deliveryPlatform };
          void 0 !== i && (o.weight = i), yield P.sendOutcome(o);
        });
      }
    }
    class Ke extends u.a {
      constructor() {
        super(
          "This operation can only be performed when the user is not subscribed."
        ),
          Object.setPrototypeOf(this, Ke.prototype);
      }
    }
    class Ye extends u.a {
      constructor() {
        super("The permission message was previously dismissed."),
          Object.setPrototypeOf(this, Ye.prototype);
      }
    }
    var Je = i(37);
    function Ze(e) {
      return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="24px" height="24px" fill="${e}"> <g transform="rotate(0 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.916s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.833s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.666s"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.583s"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.5s"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.416s"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.333s"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.25s"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.166s"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.083s"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="0s"/> </rect> </g> </svg>`;
    }
    const Xe = {
        allowButton: "onesignal-slidedown-allow-button",
        body: "slidedown-body",
        buttonIndicatorHolder: "onesignal-button-indicator-holder",
        cancelButton: "onesignal-slidedown-cancel-button",
        container: "onesignal-slidedown-container",
        dialog: "onesignal-slidedown-dialog",
        footer: "slidedown-footer",
        reset: "onesignal-reset",
        savingStateButton: "onesignal-saving-state-button",
        slideUp: "slide-up",
        slideDown: "slide-down",
        closeSlidedown: "close-slidedown",
        icon: "slidedown-body-icon",
        message: "slidedown-body-message",
        defaultIcon: "default-icon",
        loadingContainer: "onesignal-loading-container",
        clearfix: "clearfix",
      },
      Qe = {
        allowButton: "onesignal-slidedown-allow-button",
        body: "slidedown-body",
        buttonIndicatorHolder: "onesignal-button-indicator-holder",
        cancelButton: "onesignal-slidedown-cancel-button",
        container: "onesignal-slidedown-container",
        dialog: "onesignal-slidedown-dialog",
        footer: "slidedown-footer",
        normalSlidedown: "normal-slidedown",
        loadingContainer: "onesignal-loading-container",
      },
      et = {
        alignRight: "align-right",
        primary: "primary",
        secondary: "secondary",
        slidedownButton: "slidedown-button",
      },
      tt = {
        categoryLabelInput: "onesignal-category-label-input",
        categoryLabelText: "onesignal-category-label-text",
        categoryLabel: "onesignal-category-label",
        checkmark: "onesignal-checkmark",
        taggingContainer: "tagging-container",
        taggingContainerCol: "tagging-container-col",
        loadingMessage: "onesignal-loading-message",
      },
      it = { taggingContainer: "tagging-container" },
      nt =
        "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M33.232 28.434a2.5 2.5 0 001.768.733 1.667 1.667 0 010 3.333H5a1.667 1.667 0 110-3.333 2.5 2.5 0 002.5-2.5v-8.104A13.262 13.262 0 0118.333 5.122V1.667a1.666 1.666 0 113.334 0v3.455A13.262 13.262 0 0132.5 18.563v8.104a2.5 2.5 0 00.732 1.767zM16.273 35h7.454a.413.413 0 01.413.37 4.167 4.167 0 11-8.28 0 .417.417 0 01.413-.37z' fill='%23BDC4CB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h40v40H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
      ot = {
        greyLoadingIndicator: "#95A1AC",
        whiteLoadingIndicator: "#FFFFFF",
      },
      st = { fetchingPreferences: "Fetching your preferences" };
    class rt {
      static get EVENTS() {
        return {
          ALLOW_CLICK: "popoverAllowClick",
          CANCEL_CLICK: "popoverCancelClick",
          SHOWN: "popoverShown",
          CLOSED: "popoverClosed",
        };
      }
      constructor(e) {
        e ||
          (e = ie.getSlidedownPermissionMessageOptions(
            OneSignal.config.userConfig.promptOptions
          )),
          (this.options = e),
          (this.categoryOptions = e.categories),
          (this.options.actionMessage = e.actionMessage.substring(0, 90)),
          (this.options.acceptButtonText = e.acceptButtonText.substring(0, 16)),
          (this.options.cancelButtonText = e.cancelButtonText.substring(0, 16)),
          (this.notificationIcons = null),
          (this.isShowingFailureState = !1),
          this.categoryOptions &&
            ((this.categoryOptions.positiveUpdateButton = this.categoryOptions.positiveUpdateButton.substring(
              0,
              16
            )),
            (this.categoryOptions.negativeUpdateButton = this.categoryOptions.negativeUpdateButton.substring(
              0,
              16
            )),
            (this.categoryOptions.updateMessage = this.categoryOptions.updateMessage.substring(
              0,
              90
            )),
            (this.categoryOptions.savingButtonText = te.savingText),
            (this.categoryOptions.errorButtonText = this.categoryOptions.positiveUpdateButton));
      }
      create(e) {
        return a.a(this, void 0, void 0, function* () {
          if (null === this.notificationIcons) {
            const t = yield ie.getNotificationIcons();
            (this.notificationIcons = t),
              this.container.className.includes(Xe.container) &&
                Object(C.w)(`#${Qe.container}`);
            const i =
                e && this.categoryOptions
                  ? this.categoryOptions.positiveUpdateButton
                  : this.options.acceptButtonText,
              n =
                e && this.categoryOptions
                  ? this.categoryOptions.negativeUpdateButton
                  : this.options.cancelButtonText,
              o = (function (e) {
                const {
                    icon: t,
                    messageText: i,
                    positiveButtonText: n,
                    negativeButtonText: o,
                  } = e,
                  s = t === Xe.defaultIcon ? nt : t,
                  r = t === Xe.defaultIcon ? Xe.defaultIcon : "",
                  a = document.createElement("div"),
                  c = document.createElement("div"),
                  l = document.createElement("div"),
                  d = document.createElement("div"),
                  u = document.createElement("div"),
                  g = document.createElement("div"),
                  p = document.createElement("button"),
                  h = document.createElement("button"),
                  f = document.createElement("div"),
                  m = document.createElement("div"),
                  b = document.createElement("img");
                return (
                  Object(C.a)(c, Xe.body),
                  Object(C.a)(d, Xe.icon),
                  Object(C.a)(l, Xe.message),
                  Object(C.a)(g, Xe.footer),
                  Object(C.a)(f, Xe.clearfix),
                  Object(C.a)(m, Xe.clearfix),
                  Object(C.a)(p, et.alignRight),
                  Object(C.a)(p, et.primary),
                  Object(C.a)(p, et.slidedownButton),
                  Object(C.a)(h, et.alignRight),
                  Object(C.a)(h, et.secondary),
                  Object(C.a)(h, et.slidedownButton),
                  (a.id = Qe.normalSlidedown),
                  (c.id = Qe.body),
                  (u.id = Qe.loadingContainer),
                  (p.id = Qe.allowButton),
                  (h.id = Qe.cancelButton),
                  (g.id = Qe.footer),
                  r && Object(C.a)(b, r),
                  b.setAttribute("alt", "notification icon"),
                  b.setAttribute("src", s || ""),
                  (l.innerText = i || ""),
                  (p.innerText = n || ""),
                  (h.innerText = o || ""),
                  d.appendChild(b),
                  c.appendChild(d),
                  c.appendChild(l),
                  c.appendChild(f),
                  c.appendChild(u),
                  g.appendChild(p),
                  g.appendChild(h),
                  g.appendChild(m),
                  a.appendChild(c),
                  a.appendChild(g),
                  a
                );
              })({
                messageText:
                  e && this.categoryOptions
                    ? this.categoryOptions.updateMessage
                    : this.options.actionMessage,
                icon: this.getPlatformNotificationIcon(),
                positiveButtonText: i,
                negativeButtonText: n,
              }),
              s = document.createElement("div"),
              r = document.createElement("div");
            (s.id = Qe.container),
              Object(C.a)(s, Xe.container),
              Object(C.a)(s, Xe.reset),
              Object(C.l)("body").appendChild(s),
              (r.id = Qe.dialog),
              Object(C.a)(r, Xe.dialog),
              r.appendChild(o),
              this.container.appendChild(r),
              Object(C.a)(
                this.container,
                l.a.mobile ? Xe.slideUp : Xe.slideDown
              ),
              this.allowButton.addEventListener(
                "click",
                this.onSlidedownAllowed.bind(this)
              ),
              this.cancelButton.addEventListener(
                "click",
                this.onSlidedownCanceled.bind(this)
              ),
              h.a.trigger(rt.EVENTS.SHOWN);
          }
        });
      }
      onSlidedownAllowed(e) {
        return a.a(this, void 0, void 0, function* () {
          yield h.a.trigger(rt.EVENTS.ALLOW_CLICK);
        });
      }
      onSlidedownCanceled(e) {
        h.a.trigger(rt.EVENTS.CANCEL_CLICK), this.close();
      }
      close() {
        Object(C.a)(this.container, Xe.closeSlidedown),
          Object(C.u)(
            this.dialog,
            "animationend",
            (e, t) => {
              e.target !== this.dialog ||
                ("slideDownExit" !== e.animationName &&
                  "slideUpExit" !== e.animationName) ||
                (Object(C.w)(`#${Qe.container}`),
                t(),
                h.a.trigger(rt.EVENTS.CLOSED));
            },
            !0
          );
      }
      setSaveState(e) {
        this.categoryOptions
          ? e
            ? ((this.allowButton.disabled = !0),
              (this.allowButton.textContent = null),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getTextSpan(this.categoryOptions.savingButtonText)
              ),
              this.allowButton.insertAdjacentElement(
                "beforeend",
                this.getIndicatorHolder()
              ),
              Object(C.b)(
                this.buttonIndicatorHolder,
                "beforeend",
                Ze(ot.whiteLoadingIndicator)
              ),
              Object(C.a)(this.allowButton, "disabled"),
              Object(C.a)(this.allowButton, Xe.savingStateButton))
            : ((this.allowButton.textContent = this.categoryOptions.positiveUpdateButton),
              Object(C.w)(`#${Xe.buttonIndicatorHolder}`),
              (this.allowButton.disabled = !1),
              Object(C.v)(this.allowButton, "disabled"),
              Object(C.v)(this.allowButton, Xe.savingStateButton))
          : E.a.debug("Slidedown private category options are not defined");
      }
      setFailureState(e) {
        this.categoryOptions
          ? (e
              ? ((this.allowButton.textContent = null),
                this.allowButton.insertAdjacentElement(
                  "beforeend",
                  this.getTextSpan(this.categoryOptions.errorButtonText)
                ),
                this.allowButton.insertAdjacentElement(
                  "beforeend",
                  this.getIndicatorHolder()
                ),
                Object(C.b)(
                  this.buttonIndicatorHolder,
                  "beforeend",
                  (function (e = "#FFFFFF") {
                    return `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.711 2.652a5.489 5.489 0 00-4.044 4.05 5.513 5.513 0 00.104 2.968.167.167 0 00.25.089l.893-.588a.667.667 0 011.02.692l-.61 2.937a.667.667 0 01-.786.52L.6 12.713a.667.667 0 01-.232-1.21l.933-.615a.166.166 0 00.063-.2 7.167 7.167 0 018.828-9.516.833.833 0 01-.507 1.587 5.489 5.489 0 00-2.974-.108zM15.75 3.542c.09.096.15.216.172.346a.667.667 0 01-.301.681l-.898.564a.166.166 0 00-.066.2 7.167 7.167 0 01-8.77 9.514.835.835 0 01-.154-1.544.831.831 0 01.646-.048 5.5 5.5 0 006.856-6.949.167.167 0 00-.176-.114.164.164 0 00-.071.026l-.962.604a.667.667 0 01-1.005-.713l.667-2.924a.667.667 0 01.8-.502l2.925.667c.129.03.246.096.336.192z" fill="${e}"/></svg>`;
                  })()
                ),
                Object(C.a)(this.allowButton, "onesignal-error-state-button"))
              : (Object(C.w)("#onesignal-button-indicator-holder"),
                Object(C.v)(this.allowButton, "onesignal-error-state-button")),
            (this.isShowingFailureState = e))
          : E.a.debug("Slidedown private category options are not defined");
      }
      getPlatformNotificationIcon() {
        return Object(C.m)(this.notificationIcons);
      }
      getIndicatorHolder() {
        const e = document.createElement("div");
        return (
          (e.id = Qe.buttonIndicatorHolder),
          Object(C.a)(e, Xe.buttonIndicatorHolder),
          e
        );
      }
      getTextSpan(e) {
        const t = document.createElement("span");
        return (t.textContent = e), t;
      }
      get container() {
        return Object(C.l)(`#${Qe.container}`);
      }
      get dialog() {
        return Object(C.l)(`#${Qe.dialog}`);
      }
      get allowButton() {
        return Object(C.l)(`#${Qe.allowButton}`);
      }
      get cancelButton() {
        return Object(C.l)(`#${Qe.cancelButton}`);
      }
      get buttonIndicatorHolder() {
        return Object(C.l)(`#${Qe.buttonIndicatorHolder}`);
      }
      get slidedownFooter() {
        return Object(C.l)(`#${Qe.footer}`);
      }
    }
    var at;
    function ct() {
      return (
        window.top !== window &&
        "Apple Computer, Inc." === navigator.vendor &&
        "MacIntel" === navigator.platform
      );
    }
    !(function (e) {
      (e.Native = "native"), (e.Slidedown = "slidedown");
    })(at || (at = {}));
    class lt {
      static getEnvironmentInfo() {
        return {
          browserType: this.getBrowser(),
          browserVersion: this.getBrowserVersion(),
          isHttps: this.isHttps(),
          isUsingSubscriptionWorkaround: this.isUsingSubscriptionWorkaround(),
          isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers(),
          requiresUserInteraction: this.requiresUserInteraction(),
          osVersion: this.getOsVersion(),
          canTalkToServiceWorker: this.canTalkToServiceWorker(),
        };
      }
      static getBrowser() {
        return l.a.chrome
          ? K.Chrome
          : l.a.msedge
          ? K.Edge
          : l.a.opera
          ? K.Opera
          : l.a.firefox
          ? K.Firefox
          : this.isMacOSSafari()
          ? K.Safari
          : K.Other;
      }
      static isMacOSSafari() {
        return void 0 !== window.safari || ct();
      }
      static getBrowserVersion() {
        return w.b.parseVersionString(l.a.version);
      }
      static isHttps() {
        return (
          !!window && window.location && "https:" === window.location.protocol
        );
      }
      static isUsingSubscriptionWorkaround() {
        return N.a.isUsingSubscriptionWorkaround();
      }
      static supportsServiceWorkers() {
        return window.navigator && "serviceWorker" in window.navigator;
      }
      static requiresUserInteraction() {
        return (
          ("firefox" === this.getBrowser() && this.getBrowserVersion() >= 72) ||
          ("safari" === this.getBrowser() && this.getBrowserVersion() >= 12.1)
        );
      }
      static getOsVersion() {
        return l.a.osversion;
      }
      static canTalkToServiceWorker() {
        return !!window.isSecureContext;
      }
    }
    class dt {
      static convertTagsApiToBooleans(e) {
        const t = {};
        return (
          Object.keys(e).forEach((i) => {
            t[i] = "1" === e[i];
          }),
          t
        );
      }
      static convertTagsBooleansToApi(e) {
        const t = {};
        return (
          Object.keys(e).forEach((i) => {
            t[i] = !0 === e[i] ? "1" : "0";
          }),
          t
        );
      }
      static getObjectDifference(e, t) {
        const i = {};
        return (
          Object.keys(e).forEach((n) => {
            t[n] !== e[n] && (i[n] = e[n]);
          }),
          i
        );
      }
      static markAllTagsAsSpecified(e, t) {
        e.forEach((e) => {
          e.checked = t;
        });
      }
      static isTagObjectEmpty(e) {
        return 0 === Object.keys(e).length;
      }
      static getCheckedTagCategories(e, t) {
        if (!t) return e;
        if (dt.isTagObjectEmpty(t)) {
          const t = Object(C.h)(e);
          return dt.markAllTagsAsSpecified(t, !0), t;
        }
        return Object(C.h)(e).map((e) => {
          const i = t[e.tag];
          return (e.checked = dt.getCheckedStatusForTagValue(i)), e;
        });
      }
      static getCheckedStatusForTagValue(e) {
        return void 0 === e || e;
      }
      static limitCategoriesToMaxCount(e, t) {
        const i = Object(C.h)(e);
        return (i.tags = e.tags.slice(0, t)), i;
      }
    }
    class ut {
      mount(e, t) {
        const i = this.generateHtml(e, t);
        Object(C.l)(`#${Qe.body}`).appendChild(i),
          this.taggingContainer &&
            this.taggingContainer.addEventListener(
              "change",
              this.toggleCheckedTag
            );
        const n = Object(C.l)(`#${Qe.allowButton}`);
        (n.disabled = !1),
          Object(C.v)(n, "disabled"),
          Object(C.w)(`#${Qe.loadingContainer}`);
      }
      load() {
        const e = Object(C.l)(`#${Qe.loadingContainer}`),
          t = Object(C.l)(`#${Qe.allowButton}`),
          i = document.createElement("div");
        Object(C.a)(e, `${Xe.loadingContainer}`),
          Object(C.a)(i, tt.loadingMessage),
          Object(C.a)(t, "disabled"),
          Object(C.b)(e, "beforeend", Ze(ot.greyLoadingIndicator)),
          (i.innerText = st.fetchingPreferences),
          e.appendChild(i),
          (t.disabled = !0);
      }
      generateHtml(e, t) {
        const i = dt.getCheckedTagCategories(e, t),
          n = i.filter((e) => i.indexOf(e) % 2 == 0),
          o = i.filter((e) => i.indexOf(e) % 2),
          s = document.createElement("div"),
          r = document.createElement("div"),
          a = document.createElement("div");
        return (
          Object(C.a)(s, tt.taggingContainerCol),
          Object(C.a)(r, tt.taggingContainerCol),
          Object(C.a)(a, tt.taggingContainer),
          (a.id = it.taggingContainer),
          n.forEach((e) => {
            s.appendChild(this.getCategoryLabelElement(e));
          }),
          o.forEach((e) => {
            r.appendChild(this.getCategoryLabelElement(e));
          }),
          a.appendChild(s),
          a.appendChild(r),
          a
        );
      }
      getCategoryLabelElement(e) {
        const { label: t } = e,
          i = document.createElement("label"),
          n = document.createElement("span"),
          o = document.createElement("input"),
          s = document.createElement("span"),
          r = document.createElement("div"),
          a = document.createElement("div");
        return (
          Object(C.a)(i, tt.categoryLabel),
          Object(C.a)(n, tt.categoryLabelText),
          Object(C.a)(o, tt.categoryLabelInput),
          Object(C.a)(s, tt.checkmark),
          (i.title = t),
          (n.innerText = t),
          (o.type = "checkbox"),
          (o.value = e.tag),
          (o.checked = !!e.checked),
          i.appendChild(n),
          i.appendChild(o),
          i.appendChild(s),
          r.setAttribute("style", "clear:both"),
          a.appendChild(i),
          a.appendChild(r),
          a
        );
      }
      get taggingContainer() {
        const e = `#${Qe.body} > div.${tt.taggingContainer}`;
        return Object(C.l)(e);
      }
      toggleCheckedTag(e) {
        const t = e.target;
        if (t && "checkbox" === t.getAttribute("type")) {
          const e = t.checked;
          t.setAttribute("checked", e.toString());
        }
      }
      static getValuesFromTaggingContainer() {
        const e =
            `#${Qe.body} > div.${tt.taggingContainer}` +
            "> div > div > label > input[type=checkbox]",
          t = {};
        return (
          document.querySelectorAll(e).forEach((e) => {
            t[e.value] = e.checked;
          }),
          t
        );
      }
    }
    class gt {
      constructor(e) {
        (this.isAutoPromptShowing = !1),
          (this.context = e),
          (this.eventHooksInstalled = !1);
      }
      checkIfAutoPromptShouldBeShown(e = { force: !1 }) {
        return a.a(this, void 0, void 0, function* () {
          if (this.isAutoPromptShowing)
            throw new InvalidStateError.a(
              InvalidStateError.b.RedundantPermissionMessage,
              { permissionPromptType: Je.a.SlidedownPermissionMessage }
            );
          if (
            ie.wasHttpsNativePromptDismissed() &&
            !e.force &&
            !e.isInUpdateMode
          )
            return E.a.info(new Ye()), !1;
          if ((yield OneSignal.privateGetNotificationPermission()) === A.Denied)
            return E.a.info(new q(F.Blocked)), !1;
          if (
            (yield OneSignal.privateIsPushNotificationsEnabled()) &&
            !e.isInUpdateMode
          )
            throw new Ke();
          if (!(yield OneSignal.privateGetSubscription()))
            throw new g(n.OptedOut);
          return !0;
        });
      }
      internalShowAutoPrompt(e = { force: !1, forceSlidedownOverNative: !1 }) {
        return a.a(this, void 0, void 0, function* () {
          if (
            (N.b.logMethodCall("internalShowAutoPrompt", e),
            !OneSignal.config ||
              !OneSignal.config.userConfig ||
              !OneSignal.config.userConfig.promptOptions)
          )
            return void E.a.error(
              "OneSignal config was not initialized correctly. Aborting."
            );
          const { forceSlidedownOverNative: t } = e,
            i = OneSignal.config.userConfig.promptOptions;
          if (!i.native.enabled && !i.slidedown.enabled)
            return void E.a.error("No suitable prompt type enabled.");
          const n = this.getDelayedPromptOptions(i, at.Native),
            o = this.isPageViewConditionMet(n),
            s = this.getDelayedPromptOptions(i, at.Slidedown),
            r = this.isPageViewConditionMet(s),
            a = n.enabled && o,
            c = s.enabled && r,
            l = t && a;
          if (!a || l) {
            if (c || l) {
              const { timeDelay: t } = c ? s : n;
              this.internalShowDelayedPrompt(at.Slidedown, t || 0, e);
            }
          } else this.internalShowDelayedPrompt(at.Native, n.timeDelay || 0);
        });
      }
      internalShowDelayedPrompt(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          if (
            (N.b.logMethodCall("internalShowDelayedPrompt"),
            "number" != typeof t)
          )
            return void E.a.error(
              "internalShowDelayedPrompt: timeDelay not a number"
            );
          const { requiresUserInteraction: n } = lt.getEnvironmentInfo();
          var o;
          switch (
            (n && e === at.Native && (e = at.Slidedown),
            t > 0 &&
              (yield ((o = 1e3 * t), new Promise((e) => setTimeout(e, o)))),
            e)
          ) {
            case at.Native:
              this.internalShowNativePrompt();
              break;
            case at.Slidedown:
              this.internalShowSlidedownPrompt(i);
              break;
            default:
              E.a.error("Invalid Delayed Prompt type");
          }
        });
      }
      internalShowNativePrompt() {
        return a.a(this, void 0, void 0, function* () {
          N.b.logMethodCall("internalShowNativePrompt"),
            this.isAutoPromptShowing
              ? E.a.debug(
                  "Already showing autoprompt. Abort showing a native prompt."
                )
              : ((this.isAutoPromptShowing = !0),
                ie.markHttpSlidedownShown(),
                yield Ve.registerForPushNotifications(),
                (this.isAutoPromptShowing = !1),
                Fe.markHttpsNativePromptDismissed());
        });
      }
      internalShowSlidedownPrompt(e = { force: !1 }) {
        return a.a(this, void 0, void 0, function* () {
          N.b.logMethodCall("internalShowSlidedownPrompt");
          const { categoryOptions: t, isInUpdateMode: i } = e;
          if (this.isAutoPromptShowing)
            return void E.a.debug("Already showing slidedown. Abort.");
          try {
            if (!(yield this.checkIfAutoPromptShouldBeShown(e))) return;
          } catch (e) {
            return void E.a.warn(
              "checkIfAutoPromptShouldBeShown returned an error",
              e
            );
          }
          if (
            (ie.markHttpSlidedownShown(),
            0 !==
              (yield this.context.dynamicResourceLoader.loadSdkStylesheet()))
          )
            return void E.a.debug(
              "Not showing slidedown permission message because styles failed to load."
            );
          const n = ie.getSlidedownPermissionMessageOptions(
            OneSignal.config.userConfig.promptOptions
          );
          this.eventHooksInstalled || this.installEventHooksForSlidedown(),
            (OneSignal.slidedown = new rt(n));
          try {
            if (k.isCategorySlidedownConfigured(this.context)) {
              yield OneSignal.slidedown.create(i);
              let e = {};
              const n = new ut(),
                o = t.tags;
              if (i) {
                n.load();
                const t = yield OneSignal.getTags();
                this.context.tagManager.storeRemotePlayerTags(t),
                  (e = dt.convertTagsApiToBooleans(t));
              } else dt.markAllTagsAsSpecified(o, !0);
              n.mount(o, e);
            }
          } catch (e) {
            E.a.error(
              "OneSignal: Attempted to create tagging container with error",
              e
            );
          }
          yield OneSignal.slidedown.create(), E.a.debug("Showing Slidedown.");
        });
      }
      internalShowCategorySlidedown(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = (yield this.context.appConfig.userConfig.promptOptions)
            .slidedown.categories;
          k.isCategorySlidedownConfigured(this.context)
            ? yield this.internalShowSlidedownPrompt(
                Object.assign({}, e, { categoryOptions: t })
              )
            : E.a.error(
                "OneSignal: no categories to display. Check your configuration on the OneSignal dashboard or your custom code initialization."
              );
        });
      }
      installEventHooksForSlidedown() {
        (this.eventHooksInstalled = !0),
          (function () {
            const e = OneSignal.notifyButton;
            e &&
              e.options.enable &&
              "hidden" !== OneSignal.notifyButton.launcher.state &&
              OneSignal.notifyButton.launcher.waitUntilShown().then(() => {
                OneSignal.notifyButton.launcher.hide();
              }),
              OneSignal.emitter.once(rt.EVENTS.CLOSED, () => {
                OneSignal.notifyButton &&
                  OneSignal.notifyButton.options.enable &&
                  OneSignal.notifyButton.launcher.show();
              });
          })(),
          OneSignal.emitter.on(rt.EVENTS.SHOWN, () => {
            this.isAutoPromptShowing = !0;
          }),
          OneSignal.emitter.on(rt.EVENTS.CLOSED, () => {
            this.isAutoPromptShowing = !1;
          }),
          OneSignal.emitter.on(rt.EVENTS.ALLOW_CLICK, () =>
            a.a(this, void 0, void 0, function* () {
              const { slidedown: e } = OneSignal;
              e.isShowingFailureState && e.setFailureState(!1);
              const t = ut.getValuesFromTaggingContainer();
              if (
                (this.context.tagManager.storeTagValuesToUpdate(t),
                W.getIsPushNotificationsEnabled())
              ) {
                OneSignal.slidedown.setSaveState(!0);
                try {
                  yield this.context.tagManager.sendTags(!0);
                } catch (e) {
                  return (
                    E.a.error("Failed to update tags", e),
                    OneSignal.slidedown.setSaveState(!1),
                    void OneSignal.slidedown.setFailureState(!0)
                  );
                }
              } else {
                const e = {
                  autoAccept: !OneSignal.environmentInfo
                    .requiresUserInteraction,
                  slidedown: !0,
                };
                Ve.registerForPushNotifications(e);
              }
              OneSignal.slidedown && OneSignal.slidedown.close(),
                E.a.debug(
                  "Setting flag to not show the slidedown to the user again."
                ),
                Fe.markHttpsNativePromptDismissed();
            })
          ),
          OneSignal.emitter.once(rt.EVENTS.CANCEL_CLICK, () => {
            E.a.debug(
              "Setting flag to not show the slidedown to the user again."
            ),
              Fe.markHttpsNativePromptDismissed();
          });
      }
      isPageViewConditionMet(e) {
        if (!e || void 0 === e.pageViews) return !1;
        if (!e.autoPrompt || !e.enabled) return !1;
        return (
          this.context.pageViewManager.getLocalPageViewCount() >= e.pageViews
        );
      }
      getDelayedPromptOptions(e, t) {
        const i = e[t];
        return e && i
          ? {
              enabled: i.enabled,
              autoPrompt: i.autoPrompt,
              timeDelay: i.timeDelay,
              pageViews: i.pageViews,
            }
          : {
              enabled: !1,
              autoPrompt: !1,
              timeDelay: ee.timeDelay,
              pageViews: ee.pageViews,
            };
      }
    }
    class pt {
      constructor(e) {
        (this.onSessionSent = !1), (this.context = e);
      }
      notifySWToUpsertSession(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          const n = N.a.isHttps(),
            o = {
              deviceId: e,
              deviceRecord: t.serialize(),
              sessionThreshold: this.context.appConfig.sessionThreshold || 0,
              enableSessionDuration: !!this.context.appConfig
                .enableSessionDuration,
              sessionOrigin: i,
              isHttps: n,
              isSafari: N.a.isSafari(),
              outcomesConfig: this.context.appConfig.userConfig.outcomes,
            };
          this.context.environmentInfo.isBrowserAndSupportsServiceWorkers &&
          !this.context.environmentInfo.isUsingSubscriptionWorkaround
            ? (E.a.debug("Notify SW to upsert session"),
              yield this.context.workerMessenger.unicast(re.SessionUpsert, o))
            : this.context.environmentInfo.canTalkToServiceWorker &&
              this.context.environmentInfo.isUsingSubscriptionWorkaround
            ? (E.a.debug("Notify iframe to notify SW to upsert session"),
              yield OneSignal.proxyFrameHost.runCommand(
                OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT,
                o
              ))
            : E.a.debug("Notify upsert: do nothing");
        });
      }
      notifySWToDeactivateSession(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          const n = N.a.isHttps(),
            o = {
              deviceId: e,
              deviceRecord: t ? t.serialize() : void 0,
              sessionThreshold: this.context.appConfig.sessionThreshold,
              enableSessionDuration: this.context.appConfig
                .enableSessionDuration,
              sessionOrigin: i,
              isHttps: n,
              isSafari: N.a.isSafari(),
              outcomesConfig: this.context.appConfig.userConfig.outcomes,
            };
          this.context.environmentInfo.isBrowserAndSupportsServiceWorkers &&
          !this.context.environmentInfo.isUsingSubscriptionWorkaround
            ? (E.a.debug("Notify SW to deactivate session"),
              yield this.context.workerMessenger.unicast(
                re.SessionDeactivate,
                o
              ))
            : this.context.environmentInfo.canTalkToServiceWorker &&
              this.context.environmentInfo.isUsingSubscriptionWorkaround
            ? (E.a.debug("Notify SW to deactivate session"),
              yield OneSignal.proxyFrameHost.runCommand(
                OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE,
                o
              ))
            : E.a.debug("Notify deactivate: do nothing");
        });
      }
      handleVisibilityChange() {
        return a.a(this, void 0, void 0, function* () {
          const e = document.visibilityState,
            [t, i] = yield Promise.all([
              ie.getDeviceId(),
              ie.createDeviceRecord(this.context.appConfig.appId, !0),
            ]);
          if ("visible" === e)
            return (
              this.setupOnFocusAndOnBlurForSession(),
              E.a.debug(
                "handleVisibilityChange",
                "visible",
                `hasFocus: ${document.hasFocus()}`
              ),
              void (
                document.hasFocus() &&
                (yield this.notifySWToUpsertSession(
                  t,
                  i,
                  J.b.VisibilityVisible
                ))
              )
            );
          if ("hidden" !== e)
            E.a.warn("Unhandled visibility state happened", e);
          else {
            E.a.debug("handleVisibilityChange", "hidden"),
              OneSignal.cache.focusHandler &&
                OneSignal.cache.isFocusEventSetup &&
                (window.removeEventListener(
                  "focus",
                  OneSignal.cache.focusHandler,
                  !0
                ),
                (OneSignal.cache.isFocusEventSetup = !1)),
              OneSignal.cache.blurHandler &&
                OneSignal.cache.isBlurEventSetup &&
                (window.removeEventListener(
                  "blur",
                  OneSignal.cache.blurHandler,
                  !0
                ),
                (OneSignal.cache.isBlurEventSetup = !1));
            const [e, t] = yield Promise.all([
              ie.getDeviceId(),
              ie.createDeviceRecord(this.context.appConfig.appId),
            ]);
            yield this.notifySWToDeactivateSession(e, t, J.b.VisibilityHidden);
          }
        });
      }
      handleOnBeforeUnload() {
        return a.a(this, void 0, void 0, function* () {
          const e = N.a.isHttps(),
            t = {
              sessionThreshold: this.context.appConfig.sessionThreshold,
              enableSessionDuration: this.context.appConfig
                .enableSessionDuration,
              sessionOrigin: J.b.BeforeUnload,
              isHttps: e,
              isSafari: N.a.isSafari(),
              outcomesConfig: this.context.appConfig.userConfig.outcomes,
            };
          e
            ? (E.a.debug("Notify SW to deactivate session (beforeunload)"),
              this.context.workerMessenger.directPostMessageToSW(
                re.SessionDeactivate,
                t
              ))
            : (E.a.debug(
                "Notify iframe to notify SW to deactivate session (beforeunload)"
              ),
              yield OneSignal.proxyFrameHost.runCommand(
                OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE,
                t
              ));
        });
      }
      handleOnFocus(e) {
        return a.a(this, void 0, void 0, function* () {
          if ((E.a.debug("handleOnFocus", e), e.target !== window)) return;
          const [t, i] = yield Promise.all([
            ie.getDeviceId(),
            ie.createDeviceRecord(this.context.appConfig.appId, !0),
          ]);
          yield this.notifySWToUpsertSession(t, i, J.b.Focus);
        });
      }
      handleOnBlur(e) {
        return a.a(this, void 0, void 0, function* () {
          if ((E.a.debug("handleOnBlur", e), e.target !== window)) return;
          const [t, i] = yield Promise.all([
            ie.getDeviceId(),
            ie.createDeviceRecord(this.context.appConfig.appId),
          ]);
          yield this.notifySWToDeactivateSession(t, i, J.b.Blur);
        });
      }
      upsertSession(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          const n = this.notifySWToUpsertSession(e, t, i);
          this.context.environmentInfo.isBrowserAndSupportsServiceWorkers ||
          this.context.environmentInfo.isUsingSubscriptionWorkaround
            ? this.context.environmentInfo.canTalkToServiceWorker
              ? this.setupSessionEventListeners()
              : ((this.onSessionSent = i === J.b.PlayerCreate),
                OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED))
            : this.context.environmentInfo.isBrowserAndSupportsServiceWorkers ||
              this.context.environmentInfo.isUsingSubscriptionWorkaround ||
              ((this.onSessionSent = i === J.b.PlayerCreate),
              OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED)),
            yield n;
        });
      }
      setupSessionEventListeners() {
        this.context.environmentInfo.isBrowserAndSupportsServiceWorkers ||
        this.context.environmentInfo.isUsingSubscriptionWorkaround
          ? this.context.environmentInfo.canTalkToServiceWorker
            ? (this.setupOnFocusAndOnBlurForSession(),
              OneSignal.cache.isVisibilityChangeEventSetup ||
                (document.addEventListener(
                  "visibilitychange",
                  this.handleVisibilityChange.bind(this),
                  !0
                ),
                (OneSignal.cache.isVisibilityChangeEventSetup = !0)),
              OneSignal.cache.isBeforeUnloadEventSetup ||
                (window.addEventListener(
                  "beforeunload",
                  (e) => {
                    this.handleOnBeforeUnload(), delete e.returnValue;
                  },
                  !0
                ),
                (OneSignal.cache.isBeforeUnloadEventSetup = !0)))
            : E.a.debug(
                "Not setting session event listeners. Can't talk to ServiceWorker due being hosted on an HTTP page."
              )
          : E.a.debug(
              "Not setting session event listeners. No service worker possible."
            );
      }
      setupOnFocusAndOnBlurForSession() {
        E.a.debug("setupOnFocusAndOnBlurForSession"),
          OneSignal.cache.focusHandler ||
            (OneSignal.cache.focusHandler = this.handleOnFocus.bind(this)),
          OneSignal.cache.isFocusEventSetup ||
            (window.addEventListener("focus", OneSignal.cache.focusHandler, !0),
            (OneSignal.cache.isFocusEventSetup = !0)),
          OneSignal.cache.blurHandler ||
            (OneSignal.cache.blurHandler = this.handleOnBlur.bind(this)),
          OneSignal.cache.isBlurEventSetup ||
            (window.addEventListener("blur", OneSignal.cache.blurHandler, !0),
            (OneSignal.cache.isBlurEventSetup = !0));
      }
      static setupSessionEventListenersForHttp() {
        OneSignal.context && OneSignal.context.sessionManager
          ? OneSignal.context.sessionManager.setupSessionEventListeners()
          : E.a.error(
              "OneSignal.context not available for http to setup session event listeners."
            );
      }
      sendOnSessionUpdateFromPage(e) {
        return a.a(this, void 0, void 0, function* () {
          if (this.onSessionSent) return;
          if (!this.context.pageViewManager.isFirstPageView()) return;
          if (
            !(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
          )
            return void E.a.debug(
              "Not sending the on session because user is not registered with OneSignal (no device id)"
            );
          const t = yield ie.getDeviceId();
          if (
            (e ||
              (e = yield ie.createDeviceRecord(this.context.appConfig.appId)),
            e.subscriptionState === $.a.Subscribed ||
              !0 === OneSignal.config.enableOnSession)
          )
            try {
              const i = yield P.updateUserSession(t, e);
              if (((this.onSessionSent = !0), i !== t)) {
                const e = yield I.a.getSubscription();
                (e.deviceId = i), yield I.a.setSubscription(e);
              }
            } catch (e) {
              E.a.error(
                `Failed to update user session. Error "${e.message}" ${e.stack}`
              );
            }
        });
      }
    }
    class ht {
      constructor(e) {
        (this.tagsFromTaggingContainer = {}),
          (this.remoteTags = {}),
          (this.context = e);
      }
      sendTags() {
        return a.a(this, void 0, void 0, function* () {
          E.a.info(
            "Category Slidedown Local Tags:",
            this.tagsFromTaggingContainer
          );
          const e = dt.convertTagsBooleansToApi(this.tagsFromTaggingContainer),
            t = dt.getObjectDifference(e, this.remoteTags);
          return dt.isTagObjectEmpty(t)
            ? (E.a.warn(
                "OneSignal: no change detected in Category preferences. Skipping tag update."
              ),
              t)
            : yield OneSignal.sendTags(t);
        });
      }
      storeTagValuesToUpdate(e) {
        this.tagsFromTaggingContainer = e;
      }
      storeRemotePlayerTags(e) {
        this.context.tagManager.remoteTags = e;
      }
    }
    class ft {
      constructor(e) {
        (this.appConfig = e),
          "undefined" != typeof OneSignal &&
            OneSignal.environmentInfo &&
            (this.environmentInfo = OneSignal.environmentInfo),
          (this.subscriptionManager = Ge.getSubscriptionManager(this)),
          (this.serviceWorkerManager = Ge.getServiceWorkerManager(this)),
          (this.pageViewManager = new He()),
          (this.permissionManager = new _()),
          (this.workerMessenger = new de(this)),
          (this.updateManager = new qe(this)),
          (this.sessionManager = new pt(this)),
          (this.tagManager = new ht(this)),
          (this.promptsManager = new gt(this)),
          (this.dynamicResourceLoader = new ue()),
          (this.metricsManager = new Le(
            e.metrics.enable,
            e.metrics.mixpanelReportingToken
          ));
      }
    }
    var mt,
      bt,
      St,
      vt,
      Ot,
      yt = i(38),
      wt = i.n(yt),
      Et = i(33);
    class Pt {
      static getPlayer(e, t) {
        return P.getPlayer(e, t);
      }
      static updatePlayer(e, t, i) {
        return P.updatePlayer(e, t, i);
      }
      static sendNotification(e, t, i, n, o, s, r, a) {
        return P.sendNotification(e, t, i, n, o, s, r, a);
      }
      static jsonpLib(e, t) {
        wt()(e, null, t);
      }
      static downloadServerAppConfig(e) {
        return a.a(this, void 0, void 0, function* () {
          return x.a.getWindowEnv() !== L.a.ServiceWorker
            ? yield new Promise((t, i) => {
                Pt.jsonpLib(
                  `${x.a.getOneSignalApiUrl().toString()}/sync/${e}/web`,
                  (e, n) => {
                    e ? i(e) : n.success ? t(n) : i(n);
                  }
                );
              })
            : yield Et.b.downloadServerAppConfig(e);
        });
      }
      static createUser(e) {
        return a.a(this, void 0, void 0, function* () {
          return yield P.createUser(e);
        });
      }
      static createEmailRecord(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          return yield P.createEmailRecord(e, t, i);
        });
      }
      static updateEmailRecord(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          return yield P.updateEmailRecord(e, t, i);
        });
      }
      static logoutEmail(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          return yield P.logoutEmail(e, t, i);
        });
      }
      static updateUserSession(e, t) {
        return a.a(this, void 0, void 0, function* () {
          return yield P.updateUserSession(e, t);
        });
      }
    }
    !(function (e) {
      (e.TypicalSite = "typical"),
        (e.WordPress = "wordpress"),
        (e.Shopify = "shopify"),
        (e.Blogger = "blogger"),
        (e.Magento = "magento"),
        (e.Drupal = "drupal"),
        (e.SquareSpace = "squarespace"),
        (e.Joomla = "joomla"),
        (e.Weebly = "weebly"),
        (e.Wix = "wix"),
        (e.Custom = "custom");
    })(mt || (mt = {})),
      (function (e) {
        (e.Exact = "exact"), (e.Origin = "origin");
      })(bt || (bt = {})),
      (function (e) {
        (e.Navigate = "navigate"), (e.Focus = "focus");
      })(St || (St = {})),
      ((Ot = vt || (vt = {}))[(Ot.Dashboard = 0)] = "Dashboard"),
      (Ot[(Ot.JavaScript = 1)] = "JavaScript");
    const It = 10;
    class Ct {
      static getAppConfig(e, t) {
        return a.a(this, void 0, void 0, function* () {
          try {
            if (!e || !e.appId || !N.b.isValidUuid(e.appId))
              throw new p(s.InvalidAppId);
            const i = yield t(e.appId),
              n = this.getMergedConfig(e, i);
            return this.checkRestrictedOrigin(n), n;
          } catch (e) {
            if (e) {
              if (1 === e.code) throw new p(s.InvalidAppId);
              if (2 === e.code) throw new p(s.AppNotConfiguredForWebPush);
            }
            throw e;
          }
        });
      }
      static checkRestrictedOrigin(e) {
        if (
          e.restrictedOriginEnabled &&
          x.a.getWindowEnv() !== L.a.ServiceWorker &&
          window.top === window &&
          !w.b.contains(window.location.hostname, ".os.tc") &&
          !w.b.contains(window.location.hostname, ".onesignal.com") &&
          !this.doesCurrentOriginMatchConfigOrigin(e.origin)
        )
          throw new p(s.WrongSiteUrl, { siteUrl: e.origin });
      }
      static doesCurrentOriginMatchConfigOrigin(e) {
        try {
          return location.origin === new URL(e).origin;
        } catch (e) {
          return !1;
        }
      }
      static getIntegrationCapabilities(e) {
        switch (e) {
          case mt.Custom:
          case mt.WordPress:
            return { configuration: vt.JavaScript };
          default:
            return { configuration: vt.Dashboard };
        }
      }
      static getMergedConfig(e, t) {
        const i = this.getConfigIntegrationKind(t),
          n = this.getSubdomainForConfigIntegrationKind(i, e, t),
          o = t.config.setupBehavior
            ? t.config.setupBehavior.allowLocalhostAsSecureOrigin
            : e.allowLocalhostAsSecureOrigin,
          s = N.b.internalIsUsingSubscriptionWorkaround(n, o),
          r = this.getUserConfigForConfigIntegrationKind(i, e, t, s);
        return {
          appId: t.app_id,
          subdomain: n,
          siteName: t.config.siteInfo.name,
          origin: t.config.origin,
          httpUseOneSignalCom: t.config.http_use_onesignal_com,
          restrictedOriginEnabled:
            t.features.restrict_origin && t.features.restrict_origin.enable,
          metrics: {
            enable: t.features.metrics.enable,
            mixpanelReportingToken: t.features.metrics.mixpanel_reporting_token,
          },
          safariWebId: t.config.safari_web_id,
          vapidPublicKey: t.config.vapid_public_key,
          onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
          emailAuthRequired: t.features.email && t.features.email.require_auth,
          userConfig: r,
          receiveReceiptsEnable: t.features.receive_receipts_enable || !1,
          enableOnSession: w.b.valueOrDefault(
            t.features.enable_on_session,
            Q.enableOnSessionForUnsubcribed
          ),
          sessionThreshold: w.b.valueOrDefault(
            t.features.session_threshold,
            Q.reportingThreshold
          ),
          enableSessionDuration: w.b.valueOrDefault(
            t.features.web_on_focus_enabled,
            Q.enableOnFocus
          ),
        };
      }
      static getConfigIntegrationKind(e) {
        return e.config.integration ? e.config.integration.kind : mt.Custom;
      }
      static getCustomLinkConfig(e) {
        const t = {
          enabled: !1,
          style: "button",
          size: "medium",
          unsubscribeEnabled: !1,
          text: { explanation: "", subscribe: "", unsubscribe: "" },
          color: { button: "", text: "" },
        };
        if (
          !(
            e &&
            e.config &&
            e.config.staticPrompts &&
            e.config.staticPrompts.customlink &&
            e.config.staticPrompts.customlink.enabled
          )
        )
          return t;
        const i = e.config.staticPrompts.customlink;
        return {
          enabled: i.enabled,
          style: i.style,
          size: i.size,
          unsubscribeEnabled: i.unsubscribeEnabled,
          text: i.text
            ? {
                subscribe: i.text.subscribe,
                unsubscribe: i.text.unsubscribe,
                explanation: i.text.explanation,
              }
            : t.text,
          color: i.color
            ? { button: i.color.button, text: i.color.text }
            : t.color,
        };
      }
      static injectDefaultsIntoPromptOptions(e, t, i, n = !1) {
        let o = { enabled: !1 };
        e && e.customlink && (o = e.customlink);
        const s = t.customlink,
          r = Object.assign({}, e, {
            customlink: {
              enabled: w.b.getValueOrDefault(o.enabled, s.enabled),
              style: w.b.getValueOrDefault(o.style, s.style),
              size: w.b.getValueOrDefault(o.size, s.size),
              unsubscribeEnabled: w.b.getValueOrDefault(
                o.unsubscribeEnabled,
                s.unsubscribeEnabled
              ),
              text: {
                subscribe: w.b.getValueOrDefault(
                  o.text ? o.text.subscribe : void 0,
                  s.text.subscribe
                ),
                unsubscribe: w.b.getValueOrDefault(
                  o.text ? o.text.unsubscribe : void 0,
                  s.text.unsubscribe
                ),
                explanation: w.b.getValueOrDefault(
                  o.text ? o.text.explanation : void 0,
                  s.text.explanation
                ),
              },
              color: {
                button: w.b.getValueOrDefault(
                  o.color ? o.color.button : void 0,
                  s.color.button
                ),
                text: w.b.getValueOrDefault(
                  o.color ? o.color.text : void 0,
                  s.color.text
                ),
              },
            },
          });
        if (r.slidedown) {
          if (
            ((r.slidedown.enabled = !!r.slidedown.enabled),
            (r.slidedown.autoPrompt = r.slidedown.hasOwnProperty("autoPrompt")
              ? !!r.slidedown.enabled && !!r.slidedown.autoPrompt
              : !!r.slidedown.enabled),
            (r.slidedown.pageViews = w.b.getValueOrDefault(
              r.slidedown.pageViews,
              ee.pageViews
            )),
            (r.slidedown.timeDelay = w.b.getValueOrDefault(
              r.slidedown.timeDelay,
              ee.timeDelay
            )),
            r.slidedown.categories)
          ) {
            const { categories: e } = r.slidedown;
            r.slidedown.categories = dt.limitCategoriesToMaxCount(e, It);
          }
        } else
          (r.slidedown = ie.getSlidedownPermissionMessageOptions(r)),
            (r.slidedown.enabled = !1),
            (r.slidedown.autoPrompt = !1),
            (r.slidedown.pageViews = ee.pageViews),
            (r.slidedown.timeDelay = ee.timeDelay);
        return (
          r.native
            ? ((r.native.enabled = !!r.native.enabled),
              (r.native.autoPrompt = r.native.hasOwnProperty("autoPrompt")
                ? !!r.native.enabled && !!r.native.autoPrompt
                : !!r.native.enabled),
              (r.native.pageViews = w.b.getValueOrDefault(
                r.native.pageViews,
                ee.pageViews
              )),
              (r.native.timeDelay = w.b.getValueOrDefault(
                r.native.timeDelay,
                ee.timeDelay
              )))
            : (r.native = {
                enabled: !1,
                autoPrompt: !1,
                pageViews: ee.pageViews,
                timeDelay: ee.timeDelay,
              }),
          !0 === i.autoRegister &&
            (n
              ? ((r.native.enabled = !1),
                (r.native.autoPrompt = !1),
                (r.slidedown.enabled = !0),
                (r.slidedown.autoPrompt = !0))
              : ((r.native.enabled = !0), (r.native.autoPrompt = !0))),
          (r.autoPrompt = r.native.autoPrompt || r.slidedown.autoPrompt),
          r
        );
      }
      static getPromptOptionsForDashboardConfiguration(e) {
        const t = e.config.staticPrompts,
          i = t.native
            ? {
                enabled: t.native.enabled,
                autoPrompt: t.native.enabled && !1 !== t.native.autoPrompt,
                pageViews: w.b.getValueOrDefault(
                  t.native.pageViews,
                  ee.pageViews
                ),
                timeDelay: w.b.getValueOrDefault(
                  t.native.timeDelay,
                  ee.timeDelay
                ),
              }
            : {
                enabled: !1,
                autoPrompt: !1,
                pageViews: ee.pageViews,
                timeDelay: ee.timeDelay,
              };
        let n = void 0;
        t.slidedown.categories &&
          (n = dt.limitCategoriesToMaxCount(t.slidedown.categories, It));
        const o = {
          enabled: t.slidedown.enabled,
          autoPrompt: t.slidedown.enabled && !1 !== t.slidedown.autoPrompt,
          pageViews: w.b.getValueOrDefault(t.slidedown.pageViews, ee.pageViews),
          timeDelay: w.b.getValueOrDefault(t.slidedown.timeDelay, ee.timeDelay),
          actionMessage: t.slidedown.actionMessage,
          acceptButtonText: t.slidedown.acceptButton,
          cancelButtonText: t.slidedown.cancelButton,
          categories: n,
        };
        return {
          autoPrompt: i.autoPrompt || o.autoPrompt,
          native: i,
          slidedown: o,
          fullscreen: {
            enabled: t.fullscreen.enabled,
            actionMessage: t.fullscreen.actionMessage,
            acceptButton: t.fullscreen.acceptButton,
            cancelButton: t.fullscreen.cancelButton,
            title: t.fullscreen.title,
            message: t.fullscreen.message,
            caption: t.fullscreen.caption,
            autoAcceptTitle: t.fullscreen.autoAcceptTitle,
          },
          customlink: this.getCustomLinkConfig(e),
        };
      }
      static getUserConfigForConfigIntegrationKind(e, t, i, n = !1) {
        switch (this.getIntegrationCapabilities(e).configuration) {
          case vt.Dashboard:
            return {
              appId: i.app_id,
              autoRegister: !1,
              autoResubscribe: i.config.autoResubscribe,
              path: i.config.serviceWorker.path,
              serviceWorkerPath: i.config.serviceWorker.workerName,
              serviceWorkerUpdaterPath:
                i.config.serviceWorker.updaterWorkerName,
              serviceWorkerParam: {
                scope: i.config.serviceWorker.registrationScope,
              },
              subdomainName: i.config.siteInfo.proxyOrigin,
              promptOptions: this.getPromptOptionsForDashboardConfiguration(i),
              welcomeNotification: {
                disable: !i.config.welcomeNotification.enable,
                title: i.config.welcomeNotification.title,
                message: i.config.welcomeNotification.message,
                url: i.config.welcomeNotification.url,
              },
              notifyButton: {
                enable: i.config.staticPrompts.bell.enabled,
                displayPredicate: i.config.staticPrompts.bell.hideWhenSubscribed
                  ? () => OneSignal.isPushNotificationsEnabled().then((e) => !e)
                  : null,
                size: i.config.staticPrompts.bell.size,
                position: i.config.staticPrompts.bell.location,
                showCredit: !1,
                offset: {
                  bottom: `${i.config.staticPrompts.bell.offset.bottom}px`,
                  left: `${i.config.staticPrompts.bell.offset.left}px`,
                  right: `${i.config.staticPrompts.bell.offset.right}px`,
                },
                colors: {
                  "circle.background": i.config.staticPrompts.bell.color.main,
                  "circle.foreground": i.config.staticPrompts.bell.color.accent,
                  "badge.background": "black",
                  "badge.foreground": "white",
                  "badge.bordercolor": "black",
                  "pulse.color": i.config.staticPrompts.bell.color.accent,
                  "dialog.button.background.hovering":
                    i.config.staticPrompts.bell.color.main,
                  "dialog.button.background.active":
                    i.config.staticPrompts.bell.color.main,
                  "dialog.button.background":
                    i.config.staticPrompts.bell.color.main,
                  "dialog.button.foreground": "white",
                },
                text: {
                  "tip.state.unsubscribed":
                    i.config.staticPrompts.bell.tooltip.unsubscribed,
                  "tip.state.subscribed":
                    i.config.staticPrompts.bell.tooltip.subscribed,
                  "tip.state.blocked":
                    i.config.staticPrompts.bell.tooltip.blocked,
                  "message.prenotify":
                    i.config.staticPrompts.bell.tooltip.unsubscribed,
                  "message.action.subscribing":
                    i.config.staticPrompts.bell.message.subscribing,
                  "message.action.subscribed":
                    i.config.staticPrompts.bell.message.subscribing,
                  "message.action.resubscribed":
                    i.config.staticPrompts.bell.message.subscribing,
                  "message.action.unsubscribed":
                    i.config.staticPrompts.bell.message.unsubscribing,
                  "dialog.main.title":
                    i.config.staticPrompts.bell.dialog.main.title,
                  "dialog.main.button.subscribe":
                    i.config.staticPrompts.bell.dialog.main.subscribeButton,
                  "dialog.main.button.unsubscribe":
                    i.config.staticPrompts.bell.dialog.main.unsubscribeButton,
                  "dialog.blocked.title":
                    i.config.staticPrompts.bell.dialog.blocked.title,
                  "dialog.blocked.message":
                    i.config.staticPrompts.bell.dialog.blocked.message,
                },
              },
              persistNotification: i.config.notificationBehavior
                ? i.config.notificationBehavior.display.persist
                : void 0,
              webhooks: {
                cors: i.config.webhooks.corsEnable,
                "notification.displayed":
                  i.config.webhooks.notificationDisplayedHook,
                "notification.clicked":
                  i.config.webhooks.notificationClickedHook,
                "notification.dismissed":
                  i.config.webhooks.notificationDismissedHook,
              },
              notificationClickHandlerMatch: i.config.notificationBehavior
                ? i.config.notificationBehavior.click.match
                : void 0,
              notificationClickHandlerAction: i.config.notificationBehavior
                ? i.config.notificationBehavior.click.action
                : void 0,
              allowLocalhostAsSecureOrigin: i.config.setupBehavior
                ? i.config.setupBehavior.allowLocalhostAsSecureOrigin
                : void 0,
              requiresUserPrivacyConsent: t.requiresUserPrivacyConsent,
              outcomes: {
                direct: i.config.outcomes.direct,
                indirect: {
                  enabled: i.config.outcomes.indirect.enabled,
                  influencedTimePeriodMin:
                    i.config.outcomes.indirect.notification_attribution
                      .minutes_since_displayed,
                  influencedNotificationsLimit:
                    i.config.outcomes.indirect.notification_attribution.limit,
                },
                unattributed: i.config.outcomes.unattributed,
              },
            };
          case vt.JavaScript:
            const o = Object.assign(
              {},
              t,
              {
                promptOptions: this.injectDefaultsIntoPromptOptions(
                  t.promptOptions,
                  i.config.staticPrompts,
                  t,
                  n
                ),
              },
              {
                serviceWorkerParam:
                  "undefined" != typeof OneSignal &&
                  OneSignal.SERVICE_WORKER_PARAM
                    ? OneSignal.SERVICE_WORKER_PARAM
                    : { scope: "/" },
                serviceWorkerPath:
                  "undefined" != typeof OneSignal &&
                  OneSignal.SERVICE_WORKER_PATH
                    ? OneSignal.SERVICE_WORKER_PATH
                    : "OneSignalSDKWorker.js",
                serviceWorkerUpdaterPath:
                  "undefined" != typeof OneSignal &&
                  OneSignal.SERVICE_WORKER_UPDATER_PATH
                    ? OneSignal.SERVICE_WORKER_UPDATER_PATH
                    : "OneSignalSDKUpdaterWorker.js",
                path: t.path ? t.path : "/",
              },
              {
                outcomes: {
                  direct: i.config.outcomes.direct,
                  indirect: {
                    enabled: i.config.outcomes.indirect.enabled,
                    influencedTimePeriodMin:
                      i.config.outcomes.indirect.notification_attribution
                        .minutes_since_displayed,
                    influencedNotificationsLimit:
                      i.config.outcomes.indirect.notification_attribution.limit,
                  },
                  unattributed: i.config.outcomes.unattributed,
                },
              }
            );
            return (
              t.hasOwnProperty("autoResubscribe")
                ? (o.autoResubscribe = !!t.autoResubscribe)
                : t.hasOwnProperty("autoRegister")
                ? (o.autoResubscribe = !!t.autoRegister)
                : (o.autoResubscribe = !!i.config.autoResubscribe),
              o
            );
        }
      }
      static getSubdomainForConfigIntegrationKind(e, t, i) {
        const n = this.getIntegrationCapabilities(e),
          o = t.subdomainName;
        let s = "";
        switch (n.configuration) {
          case vt.Dashboard:
            s = i.config.siteInfo.proxyOriginEnabled
              ? i.config.siteInfo.proxyOrigin
              : void 0;
            break;
          case vt.JavaScript:
            s = i.config.subdomain;
        }
        return s && !this.shouldUseServerConfigSubdomain(o, n) ? void 0 : s;
      }
      static shouldUseServerConfigSubdomain(e, t) {
        switch (t.configuration) {
          case vt.Dashboard:
            return !0;
          case vt.JavaScript:
            switch (location.protocol) {
              case "https:":
                return !!e;
              case "http:":
                return !0;
              default:
                return !1;
            }
        }
      }
    }
    class Tt {
      getAppConfig(e) {
        return a.a(this, void 0, void 0, function* () {
          return yield Ct.getAppConfig(e, Pt.downloadServerAppConfig);
        });
      }
      getMergedConfig(e, t) {
        return Ct.getMergedConfig(e, t);
      }
    }
    class At {
      constructor(e) {
        this.options = {
          appId: e.appId,
          subdomain: e.subdomainName,
          origin: e.origin,
          siteName: e.siteName,
          metrics: { enable: !1, mixpanelReportingToken: null },
          userConfig: {},
        };
      }
      initialize() {
        return a.a(this, void 0, void 0, function* () {
          if ((window.opener || window.parent) == window)
            return (
              document.write(
                "<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and must be opened as a result of a subscription call.</span>"
              ),
              Promise.resolve()
            );
          const e = Object.assign({}, this.options);
          (e.appId = e.appId),
            (e.subdomainName = e.subdomain),
            (e.origin = e.origin),
            (OneSignal.config = e || {});
          const t = yield new Tt().getAppConfig(e);
          return (
            (OneSignal.environmentInfo = lt.getEnvironmentInfo()),
            (OneSignal.context = new ft(t)),
            OneSignal.context.workerMessenger.listen(!0),
            (OneSignal.initialized = !0),
            (this.loadPromise = {}),
            (this.loadPromise.promise = new Promise((e, t) => {
              (this.loadPromise.resolver = e), (this.loadPromise.rejector = t);
            })),
            this.establishCrossOriginMessaging(),
            this.loadPromise.promise
          );
        });
      }
      establishCrossOriginMessaging() {}
      dispose() {
        this.messenger.destroy();
      }
      finishInitialization() {
        this.loadPromise.resolver();
      }
      subscribe() {
        return a.a(this, void 0, void 0, function* () {
          const e = W.getIsPushNotificationsEnabled(),
            t = opener || parent;
          e ? t && window.close() : X.registerForPush();
        });
      }
    }
    class Nt extends At {
      initialize() {
        const e = super.initialize();
        return h.a.trigger("httpInitialize"), e;
      }
      establishCrossOriginMessaging() {
        this.messenger && this.messenger.destroy(),
          (this.messenger = new oe(
            window,
            this.options.origin,
            this.options.origin
          )),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.CONNECTED,
            this.onMessengerConnect.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE,
            this.onProxyFrameInitializing.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION,
            this.onRemoteNotificationPermission.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET,
            this.onRemoteDatabaseGet.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL,
            this.onRemoteDatabaseGetAll.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT,
            this.onRemoteDatabasePut.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE,
            this.onRemoteDatabaseRemove.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH,
            this.onUnsubscribeFromPush.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED,
            this.onMarkPromptDismissed.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED,
            this.onIsSubscribed.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME,
            this.onUnsubscribeProxyFrame.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE,
            this.onServiceWorkerState.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION,
            this.onWorkerVersion.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE,
            this.onSubscriptionExpirationState.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS,
            this.onProcessExpiringSubscriptions.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE,
            this.onGetSubscriptionState.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT,
            this.onSessionUpsert.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE,
            this.onSessionDeactivate.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST,
            this.onAreYouVisibleRequest.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE,
            this.onAreYouVisibleResponse.bind(this)
          ),
          this.messenger.listen();
      }
      retriggerRemoteEvent(e, t) {
        this.messenger.message(
          OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT,
          { eventName: e, eventData: t }
        );
      }
      onMessengerConnect(e) {
        return a.a(this, void 0, void 0, function* () {
          return (
            E.a.debug(
              `(${x.a
                .getWindowEnv()
                .toString()}) Successfully established cross-origin communication.`
            ),
            this.finishInitialization(),
            !1
          );
        });
      }
      onProxyFrameInitializing(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.info(
            `(${x.a
              .getWindowEnv()
              .toString()}) The iFrame has just received initOptions from the host page!`
          );
          const t = Object.assign(
            {},
            e.data.hostInitOptions,
            OneSignal.config,
            { pageUrl: e.data.pageUrl }
          );
          if (
            ((OneSignal.config = t),
            Ve.installNativePromptPermissionChangedHook(),
            (yield I.a.get("Options", "defaultUrl")) ||
              (yield I.a.put("Options", {
                key: "defaultUrl",
                value: new URL(OneSignal.config.pageUrl).origin,
              })),
            yield I.a.put("Options", {
              key: "lastKnownHostUrl",
              value: OneSignal.config.pageUrl,
            }),
            yield Ve.initSaveState(),
            yield Ve.storeInitialValues(),
            yield Ve.saveInitOptions(),
            navigator.serviceWorker && "https:" === window.location.protocol)
          )
            try {
              OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel();
            } catch (e) {
              E.a.error(
                "Error interacting with Service Worker inside an HTTP-hosted iFrame:",
                e
              );
            }
          e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
        });
      }
      onRemoteNotificationPermission(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = OneSignal.context,
            i = yield t.permissionManager.getReportedNotificationPermission(
              t.appConfig.safariWebId
            );
          return e.reply(i), !1;
        });
      }
      onRemoteDatabaseGet(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = e.data,
            i = [];
          for (let e of t) {
            const { table: t, key: n } = e;
            i.push(I.a.get(t, n));
          }
          const n = yield Promise.all(i);
          return e.reply(n), !1;
        });
      }
      onRemoteDatabaseGetAll(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = e.data.table,
            i = yield I.a.getAll(t);
          return e.reply(i), !1;
        });
      }
      onRemoteDatabasePut(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = e.data;
          let i = [];
          for (let e of t) {
            let { table: t, keypath: n } = e;
            i.push(I.a.put(t, n));
          }
          return (
            yield Promise.all(i),
            e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
            !1
          );
        });
      }
      onRemoteDatabaseRemove(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = e.data;
          let i = [];
          for (let e of t) {
            let { table: t, keypath: n } = e;
            i.push(I.a.remove(t, n));
          }
          return (
            yield Promise.all(i),
            e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
            !1
          );
        });
      }
      onUnsubscribeFromPush(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug(
            "(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push."
          );
          try {
            yield Object(C.z)(),
              e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
          } catch (e) {
            E.a.debug("Failed to unsubscribe from push remotely:", e);
          }
        });
      }
      onMarkPromptDismissed(e) {
        return a.a(this, void 0, void 0, function* () {
          return (
            E.a.debug(
              "(Reposted from iFrame -> Host) Marking prompt as dismissed."
            ),
            yield Fe.markHttpsNativePromptDismissed(),
            e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
            !1
          );
        });
      }
      onIsSubscribed(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield OneSignal.isPushNotificationsEnabled();
          return e.reply(t), !1;
        });
      }
      onUnsubscribeProxyFrame(e) {
        return a.a(this, void 0, void 0, function* () {
          return (
            (yield OneSignal.isPushNotificationsEnabled()) &&
              (yield OneSignal.setSubscription(!1),
              yield OneSignal.database.rebuild()),
            e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
            !1
          );
        });
      }
      onServiceWorkerState(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield OneSignal.context.serviceWorkerManager.getActiveState();
          return e.reply(t), !1;
        });
      }
      onWorkerVersion(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield OneSignal.context.serviceWorkerManager.getWorkerVersion();
          return e.reply(t), !1;
        });
      }
      onSubscriptionExpirationState(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield OneSignal.context.subscriptionManager.isSubscriptionExpiring();
          return e.reply(t), !1;
        });
      }
      onProcessExpiringSubscriptions(e) {
        return a.a(this, void 0, void 0, function* () {
          OneSignal.context, yield Ve.processExpiringSubscriptions();
          return (
            e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
          );
        });
      }
      onGetSubscriptionState(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield OneSignal.context.subscriptionManager.getSubscriptionState();
          return e.reply(t), !1;
        });
      }
      onSessionUpsert(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = OneSignal.context,
            i = e.data;
          t.workerMessenger.directPostMessageToSW(re.SessionUpsert, i),
            e.reply(!0);
        });
      }
      onSessionDeactivate(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = OneSignal.context,
            i = e.data;
          t.workerMessenger.directPostMessageToSW(re.SessionDeactivate, i),
            e.reply(!0);
        });
      }
      onAreYouVisibleRequest(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug("onAreYouVisibleRequest iframe", e);
        });
      }
      onAreYouVisibleResponse(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug("onAreYouVisibleResponse iframe", e);
          const t = OneSignal.context,
            i = e.data;
          t.workerMessenger.directPostMessageToSW(re.AreYouVisibleResponse, i),
            e.reply(!0);
        });
      }
    }
    class Mt extends At {
      constructor(e) {
        super(e);
      }
      establishCrossOriginMessaging() {
        this.messenger && this.messenger.destroy(),
          (this.messenger = new oe(
            window.parent,
            this.options.origin,
            this.options.origin
          ));
      }
    }
    class kt extends At {
      constructor(e) {
        super(e);
      }
      establishCrossOriginMessaging() {
        (this.messenger = new oe(
          window.opener,
          this.options.origin,
          this.options.origin
        )),
          this.messenger.once(
            OneSignal.POSTMAM_COMMANDS.CONNECTED,
            this.onMessengerConnected.bind(this)
          ),
          this.messenger.postMessage(
            OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS,
            null
          ),
          this.messenger.listen();
      }
      onMessengerConnected(e) {
        E.a.debug(
          `(${x.a
            .getWindowEnv()
            .toString()}) The host page is now ready to receive commands from the HTTP popup.`
        ),
          this.finishInitialization();
      }
    }
    class xt {
      static initHttp(e) {
        return a.a(this, void 0, void 0, function* () {
          switch (
            (E.a.debug(
              `Called %cinitHttp(${JSON.stringify(e, null, 4)})`,
              Object(C.k)("code")
            ),
            x.a.getWindowEnv())
          ) {
            case L.a.OneSignalProxyFrame:
              (OneSignal.proxyFrame = new Nt(e)),
                yield OneSignal.proxyFrame.initialize(),
                j.ensureBackwardsCompatibility(OneSignal);
              break;
            case L.a.OneSignalSubscriptionPopup:
              (OneSignal.subscriptionPopup = new kt(e)),
                yield OneSignal.subscriptionPopup.initialize(),
                j.ensureBackwardsCompatibility(OneSignal),
                h.a.trigger("httpInitialize");
              break;
            case L.a.OneSignalSubscriptionModal:
              (OneSignal.subscriptionModal = new Mt(e)),
                OneSignal.subscriptionModal.establishCrossOriginMessaging(),
                OneSignal.subscriptionModal.initialize(),
                j.ensureBackwardsCompatibility(OneSignal),
                h.a.trigger("httpInitialize");
              break;
            default:
              E.a.error("Unsupported HTTP initialization branch.");
          }
        });
      }
    }
    var _t = i(16);
    class Rt {
      static get LOAD_TIMEOUT_MS() {
        return 15e3;
      }
      constructor(e) {
        (this.url = e), (this.url.pathname = "webPushIframe");
      }
      load() {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug("Opening an iFrame to", this.url.toString()),
            this.removeFrame();
          const e = document.createElement("iframe");
          return (
            (e.style.display = "none"),
            (e.src = this.url.toString()),
            (e.sandbox =
              "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation"),
            (this.loadPromise = {}),
            (this.loadPromise.promise = new Promise((e, t) => {
              (this.loadPromise.resolver = e), (this.loadPromise.rejector = t);
            })),
            document.body.appendChild(e),
            (e.onload = this.onFrameLoad.bind(this)),
            (this.element = e),
            Object(C.x)(this.loadPromise.promise, Rt.LOAD_TIMEOUT_MS).catch(
              () => {
                window === window.top &&
                  E.a.warn(
                    `OneSignal: Loading the required iFrame ${this.url.toString()} timed out. Check that the Site URL onesignal.com dashboard web config is ${
                      location.origin
                    }. Only the Site URL specified there is allowed to use load the iFrame.`
                  );
              }
            ),
            this.loadPromise.promise
          );
        });
      }
      removeFrame() {
        if (!d.a.isBrowser()) return;
        const e = document.querySelector(
          `iframe[src='${this.url.toString()}']`
        );
        e && e.remove();
      }
      onFrameLoad(e) {
        this.establishCrossOriginMessaging();
      }
      establishCrossOriginMessaging() {
        this.messenger && this.messenger.destroy(),
          (this.messenger = new oe(
            this.element.contentWindow,
            this.url.toString(),
            this.url.toString()
          )),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.CONNECTED,
            this.onMessengerConnect.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT,
            this.onRemoteRetriggerEvent.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED,
            this.onRemoteNotificationPermissionChanged.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL,
            this.onRequestHostUrl.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT,
            this.onServiceWorkerCommandRedirect.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT,
            this.onGetEventListenerCount.bind(this)
          ),
          this.messenger.on(
            OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST,
            this.onAreYouVisibleRequest.bind(this)
          ),
          this.messenger.connect();
      }
      dispose() {
        this.messenger && this.messenger.destroy(), this.removeFrame();
      }
      onMessengerConnect(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug(
            `Successfully established cross-origin communication for iFrame at ${this.url.toString()}`
          ),
            this.messenger.message(
              OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE,
              {
                hostInitOptions: Object(C.h)(OneSignal.config),
                pageUrl: window.location.href,
              },
              (e) => (
                e.data ===
                  OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE &&
                  this.loadPromise.resolver(),
                !1
              )
            );
        });
      }
      onRemoteRetriggerEvent(e) {
        let { eventName: t, eventData: i } = e.data;
        return h.a.trigger(t, i, e.source), !1;
      }
      onRemoteNotificationPermissionChanged(e) {
        let { forceUpdatePermission: t } = e.data;
        return Object(C.y)(t), !1;
      }
      onRequestHostUrl(e) {
        return e.reply(location.href), !1;
      }
      onServiceWorkerCommandRedirect(e) {
        const t = e.data;
        return t && t.startsWith("http") && (window.location.href = t), !1;
      }
      onGetEventListenerCount(e) {
        const t = e.data;
        return (
          E.a.debug(
            "(Reposted from iFrame -> Host) Getting event listener count for ",
            t
          ),
          e.reply(OneSignal.emitter.numberOfListeners(t)),
          !1
        );
      }
      isSubscribed() {
        return new Promise((e) => {
          this.messenger.message(
            OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED,
            null,
            (t) => {
              e(t.data);
            }
          );
        });
      }
      unsubscribeFromPush() {
        return new Promise((e) => {
          this.messenger.message(
            OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME,
            null,
            (t) => {
              e();
            }
          );
        });
      }
      getProxyServiceWorkerActiveState() {
        return new Promise((e, t) => {
          this.message(
            OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE,
            null,
            (t) => {
              e(t.data);
            }
          );
        });
      }
      runCommand(e, t = null) {
        return a.a(this, void 0, void 0, function* () {
          return yield new Promise((i, n) => {
            this.message(e, t, (e) => {
              i(e.data);
            });
          });
        });
      }
      onAreYouVisibleRequest(e) {
        E.a.debug("onAreYouVisibleRequest page", e);
        const t = { timestamp: e.data.timestamp, focused: document.hasFocus() };
        this.message(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE, t);
      }
      message(...e) {
        this.messenger.message.apply(this.messenger, arguments);
      }
    }
    class Dt {
      constructor() {}
      static discoverAltOrigin(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = Dt.getOneSignalProxyIframeUrls(e),
            i = [];
          for (const e of t) {
            const t = new Rt(e);
            yield t.load(), i.push(t);
          }
          const n = yield Dt.subscribedProxyFrameHosts(i);
          let o;
          yield Dt.removeDuplicatedAltOriginSubscription(n),
            (o = 0 === n.length ? i[0] : n[0]);
          for (const e of i) o !== e && e.dispose();
          return o;
        });
      }
      static subscribedProxyFrameHosts(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = [];
          for (const i of e) (yield i.isSubscribed()) && t.push(i);
          return t;
        });
      }
      static removeDuplicatedAltOriginSubscription(e) {
        return a.a(this, void 0, void 0, function* () {
          if (e.length < 2) return;
          const t = e.slice(1);
          for (const e of t) yield e.unsubscribeFromPush();
        });
      }
      static getCanonicalSubscriptionUrls(e, t = x.a.getApiEnv()) {
        const i = Dt.getWildcardLegacySubscriptionDomain(t),
          n = new URL(`https://${e.subdomain}.${i}`);
        if (t !== _t.a.Production) return [n];
        const o = [new URL(`https://${e.subdomain}.os.tc`)];
        return e.httpUseOneSignalCom && o.push(n), o;
      }
      static getWildcardLegacySubscriptionDomain(e) {
        const t = x.a.getOneSignalApiUrl(e);
        let i = 2;
        return e === _t.a.Staging && (i = 3), w.a.lastParts(t.host, ".", i);
      }
      static getOneSignalProxyIframeUrls(e) {
        const t = Dt.getCanonicalSubscriptionUrls(e);
        for (const e of t) e.pathname = "webPushIframe";
        return t;
      }
    }
    var Ut = i(36);
    class Wt {
      static isValidUrl(e, t) {
        if (t && t.allowNull && null === e) return !0;
        if (t && t.allowEmpty && (null === e || void 0 === e)) return !0;
        try {
          const i = new URL(e);
          return !t || !t.requireHttps || "https:" === i.protocol;
        } catch (e) {
          return !1;
        }
      }
      static isValidBoolean(e, t) {
        return !(!t || !t.allowNull || null !== e) || !0 === e || !1 === e;
      }
      static isValidArray(e, t) {
        return (
          !(!t || !t.allowNull || null !== e) ||
          !(!t || !t.allowEmpty || (null !== e && void 0 !== e)) ||
          e instanceof Array
        );
      }
    }
    var Bt = i(29);
    class Lt {
      static processItem(e, t) {
        if ("function" == typeof t) t();
        else {
          if (!Array.isArray(t))
            throw new u.a("Only accepts function and Array types!");
          {
            if (0 == t.length) throw new u.a("Empty array is not valid!");
            const i = t.shift();
            if (null == i || void 0 === i)
              throw new u.a(
                "First element in array must be the OneSignal function name"
              );
            const n = e[i.toString()];
            if ("function" != typeof n)
              throw new u.a(`No OneSignal function with the name '${i}'`);
            n.apply(e, t);
          }
        }
      }
    }
    var jt = i(32),
      Vt = i(20);
    i.d(t, "default", function () {
      return Ft;
    });
    class Ft {
      static setDefaultNotificationUrl(e) {
        return a.a(this, void 0, void 0, function* () {
          if (!Wt.isValidUrl(e, { allowNull: !0 }))
            throw new InvalidArgumentError.a(
              "url",
              InvalidArgumentError.b.Malformed
            );
          yield Object(C.c)(), Object(C.s)("setDefaultNotificationUrl", e);
          const t = yield I.a.getAppState();
          (t.defaultNotificationUrl = e), yield I.a.setAppState(t);
        });
      }
      static setDefaultTitle(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(), Object(C.s)("setDefaultTitle", e);
          const t = yield I.a.getAppState();
          (t.defaultNotificationTitle = e), yield I.a.setAppState(t);
        });
      }
      static setEmail(e, t) {
        return a.a(this, void 0, void 0, function* () {
          if (!e)
            throw new InvalidArgumentError.a(
              "email",
              InvalidArgumentError.b.Empty
            );
          if (!Object(C.r)(e))
            throw new InvalidArgumentError.a(
              "email",
              InvalidArgumentError.b.Malformed
            );
          if (t && t.emailAuthHash && 64 !== t.emailAuthHash.length)
            throw new InvalidArgumentError.a(
              "options.emailAuthHash",
              InvalidArgumentError.b.Malformed
            );
          yield Object(C.c)(), Object(C.s)("setEmail", e, t);
          const i = yield I.a.getAppConfig(),
            { deviceId: n } = yield I.a.getSubscription(),
            o = yield I.a.getEmailProfile();
          if (i.emailAuthRequired && (!t || !t.emailAuthHash))
            throw new InvalidArgumentError.a(
              "options.emailAuthHash",
              InvalidArgumentError.b.Empty
            );
          const s = new Bt.a(o.emailId, e);
          t && t.emailAuthHash && (s.emailAuthHash = t.emailAuthHash);
          const r = !!o.emailId;
          return (
            r && i.emailAuthRequired
              ? (s.emailId = yield Pt.updateEmailRecord(i, s, n))
              : (s.emailId = yield Pt.createEmailRecord(i, s, n)),
            !n ||
              (r &&
                o.emailId === s.emailId &&
                o.emailAddress &&
                s.emailAddress === o.emailAddress) ||
              (yield Pt.updatePlayer(i.appId, n, {
                parent_player_id: s.emailId,
                email: s.emailAddress,
              })),
            yield I.a.setEmailProfile(s),
            s.emailId
          );
        });
      }
      static logoutEmail() {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)();
          const e = yield I.a.getAppConfig(),
            t = yield I.a.getEmailProfile(),
            { deviceId: i } = yield I.a.getSubscription();
          t.emailId
            ? i
              ? (yield Pt.logoutEmail(e, t, i))
                ? yield I.a.setEmailProfile(new Bt.a())
                : E.a.warn("Failed to logout email.")
              : E.a.warn(new g(n.NoDeviceId))
            : E.a.warn(new g(n.NoEmailSet));
        });
      }
      static isPushNotificationsSupported() {
        return Object(C.s)("isPushNotificationsSupported"), !0;
      }
      static initializeConfig(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield new Tt().getAppConfig(e);
          E.a.debug(
            `OneSignal: Final web app config: %c${JSON.stringify(t, null, 4)}`,
            Object(C.k)("code")
          ),
            (Ft.config = t),
            (Ft.environmentInfo = lt.getEnvironmentInfo()),
            (Ft.context = new ft(t)),
            (Ft.config = Ft.context.appConfig);
        });
      }
      static init(e) {
        return a.a(this, void 0, void 0, function* () {
          if (
            (Object(C.s)("init"),
            yield Ve.polyfillSafariFetch(),
            Ve.errorIfInitAlreadyCalled(),
            yield Ft.initializeConfig(e),
            !Ft.config)
          )
            throw new Error("OneSignal config not initialized!");
          if (!l.a.safari || Ft.config.safariWebId) {
            if (Ft.config.userConfig.requiresUserPrivacyConsent) {
              if (!(yield I.a.getProvideUserConsent()))
                return void (Ft.pendingInit = !0);
            }
            yield Ft.delayedInit();
          } else E.a.warn(new p(s.MissingSafariWebId));
        });
      }
      static delayedInit() {
        return a.a(this, void 0, void 0, function* () {
          function e() {
            return a.a(this, void 0, void 0, function* () {
              if (!Ft.__initAlreadyCalled) {
                if (
                  ((Ft.__initAlreadyCalled = !0),
                  Ft.emitter.on(
                    Ft.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED,
                    B.onNotificationPermissionChange
                  ),
                  Ft.emitter.on(
                    Ft.EVENTS.SUBSCRIPTION_CHANGED,
                    B._onSubscriptionChanged
                  ),
                  Ft.emitter.on(Ft.EVENTS.SDK_INITIALIZED, Ve.onSdkInitialized),
                  N.b.isUsingSubscriptionWorkaround())
                ) {
                  if (!Ft.config || !Ft.config.subdomain)
                    throw new p(s.MissingSubdomain);
                  Ft.emitter.on(
                    Ft.EVENTS.SESSION_STARTED,
                    pt.setupSessionEventListenersForHttp
                  ),
                    (Ft.proxyFrameHost = yield Dt.discoverAltOrigin(Ft.config));
                }
                window.addEventListener("focus", () => {
                  ie.checkAndTriggerNotificationPermissionChanged();
                }),
                  yield Ve.initSaveState(),
                  yield Ve.saveInitOptions(),
                  x.a.getWindowEnv() === L.a.CustomIframe
                    ? yield h.a.trigger(Ft.EVENTS.SDK_INITIALIZED)
                    : yield Ve.internalInit();
              }
            });
          }
          (Ft.pendingInit = !1),
            Ft.context.workerMessenger.listen(),
            "complete" === document.readyState ||
            "interactive" === document.readyState
              ? yield e()
              : (E.a.debug(
                  "OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."
                ),
                window.addEventListener("DOMContentLoaded", () => {
                  e();
                }),
                (document.onreadystatechange = () => {
                  ("complete" !== document.readyState &&
                    "interactive" !== document.readyState) ||
                    e();
                }));
        });
      }
      static provideUserConsent(e) {
        return a.a(this, void 0, void 0, function* () {
          yield I.a.setProvideUserConsent(e),
            e && Ft.pendingInit && (yield Ft.delayedInit());
        });
      }
      static showHttpPermissionRequest(e) {
        return a.a(this, void 0, void 0, function* () {
          E.a.debug(
            "Called showHttpPermissionRequest(), redirecting to HTTP prompt."
          ),
            Ft.showHttpPrompt(e).catch((e) => E.a.info(e));
        });
      }
      static showHttpPrompt(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(),
            yield Ft.context.promptsManager.internalShowSlidedownPrompt(e);
        });
      }
      static showNativePrompt() {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(),
            yield Ft.context.promptsManager.internalShowNativePrompt();
        });
      }
      static showSlidedownPrompt(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(),
            yield Ft.context.promptsManager.internalShowSlidedownPrompt(e);
        });
      }
      static showCategorySlidedown(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)();
          const t = W.getIsPushNotificationsEnabled();
          yield Ft.context.promptsManager.internalShowCategorySlidedown(
            Object.assign({}, e, { isInUpdateMode: t })
          );
        });
      }
      static registerForPushNotifications(e) {
        return a.a(this, void 0, void 0, function* () {
          if (Ft.initialized) return yield Ve.registerForPushNotifications(e);
          yield new Promise((t, i) => {
            Ft.emitter.once(Ft.EVENTS.SDK_INITIALIZED, () =>
              a.a(this, void 0, void 0, function* () {
                return yield Ve.registerForPushNotifications(e), t();
              })
            );
          });
        });
      }
      static getNotificationPermission(e) {
        return a.a(this, void 0, void 0, function* () {
          return yield Object(C.c)(), Ft.privateGetNotificationPermission(e);
        });
      }
      static privateGetNotificationPermission(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = yield Ft.context.permissionManager.getNotificationPermission(
            Ft.config.safariWebId
          );
          return e && e(t), t;
        });
      }
      static getTags(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(), Object(C.s)("getTags", e);
          const { appId: t } = yield I.a.getAppConfig(),
            { deviceId: i } = yield I.a.getSubscription();
          if (!i) return E.a.info(new g(n.NoDeviceId)), null;
          const { tags: o } = yield Pt.getPlayer(t, i);
          return Object(C.j)(e, o), o;
        });
      }
      static sendTag(e, t, i) {
        return a.a(this, void 0, void 0, function* () {
          const n = {};
          return (n[e] = t), yield Ft.sendTags(n, i);
        });
      }
      static sendTags(e, t) {
        return a.a(this, void 0, void 0, function* () {
          if (
            (yield Object(C.c)(),
            Object(C.s)("sendTags", e, t),
            !e || 0 === Object.keys(e).length)
          )
            return (
              E.a.info(
                new InvalidArgumentError.a("tags", InvalidArgumentError.b.Empty)
              ),
              null
            );
          Object.keys(e).forEach((t) => {
            !1 === e[t] && (e[t] = "false");
          });
          const { appId: i } = yield I.a.getAppConfig(),
            n = yield I.a.getEmailProfile();
          n.emailId &&
            (yield Pt.updatePlayer(i, n.emailId, {
              tags: e,
              email_auth_hash: n.emailAuthHash,
            }));
          var { deviceId: o } = yield I.a.getSubscription();
          o || (yield Object(C.d)(Ft.EVENTS.REGISTERED));
          var { deviceId: s } = yield I.a.getSubscription();
          return yield Pt.updatePlayer(i, s, { tags: e }), Object(C.j)(t, e), e;
        });
      }
      static deleteTag(e) {
        return a.a(this, void 0, void 0, function* () {
          return yield Ft.deleteTags([e]);
        });
      }
      static deleteTags(e, t) {
        return a.a(this, void 0, void 0, function* () {
          if (
            (yield Object(C.c)(),
            Object(C.s)("deleteTags", e, t),
            !Wt.isValidArray(e))
          )
            throw new InvalidArgumentError.a(
              "tags",
              InvalidArgumentError.b.Malformed
            );
          0 === e.length &&
            E.a.info(
              new InvalidArgumentError.a("tags", InvalidArgumentError.b.Empty)
            );
          const i = {};
          for (let t of e) i[t] = "";
          const n = yield Ft.sendTags(i);
          if (n) {
            const e = Object.keys(n);
            return Object(C.j)(t, e), e;
          }
          return [];
        });
      }
      static setExternalUserId(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(),
            Object(C.s)("setExternalUserId"),
            (yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) ||
              (yield Object(C.d)(Ft.EVENTS.REGISTERED)),
            yield Promise.all([
              Ft.database.setExternalUserId(e),
              Ft.context.updateManager.sendExternalUserIdUpdate(e),
            ]);
        });
      }
      static getExternalUserId() {
        return a.a(this, void 0, void 0, function* () {
          return (
            yield Object(C.c)(),
            Object(C.s)("getExternalUserId"),
            yield Ft.database.getExternalUserId()
          );
        });
      }
      static removeExternalUserId() {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(),
            Object(C.s)("removeExternalUserId"),
            (yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())
              ? yield Promise.all([
                  Ft.database.setExternalUserId(void 0),
                  Ft.context.updateManager.sendExternalUserIdUpdate(void 0),
                ])
              : E.a.warn(
                  "User is not subscribed, cannot remove external user id."
                );
        });
      }
      static addListenerForNotificationOpened(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(),
            Object(C.s)("addListenerForNotificationOpened", e),
            Ft.emitter.once(Ft.EVENTS.NOTIFICATION_CLICKED, (t) => {
              Object(C.j)(e, t);
            }),
            Ft.config &&
              B.fireStoredNotificationClicks(
                Ft.config.pageUrl || Ft.config.userConfig.pageUrl
              );
        });
      }
      static getIdsAvailable(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(), Object(C.s)("getIdsAvailable", e);
          const {
              deviceId: t,
              subscriptionToken: i,
            } = yield I.a.getSubscription(),
            n = { userId: t, registrationId: i };
          return Object(C.j)(e, n), n;
        });
      }
      static isPushNotificationsEnabled(e) {
        return a.a(this, void 0, void 0, function* () {
          return yield Object(C.c)(), Ft.privateIsPushNotificationsEnabled(e);
        });
      }
      static privateIsPushNotificationsEnabled(e) {
        return a.a(this, void 0, void 0, function* () {
          Object(C.s)("isPushNotificationsEnabled", e);
          const t = yield Ft.context.subscriptionManager.getSubscriptionState();
          return (
            Object(C.j)(e, t.subscribed && !t.optedOut),
            t.subscribed && !t.optedOut
          );
        });
      }
      static setSubscription(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(), Object(C.s)("setSubscription", e);
          const t = yield I.a.getAppConfig(),
            { appId: i } = t,
            o = yield I.a.getSubscription(),
            { deviceId: s } = o;
          if (!t.appId)
            throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
          if (!Wt.isValidBoolean(e))
            throw new InvalidArgumentError.a(
              "newSubscription",
              InvalidArgumentError.b.Malformed
            );
          s
            ? ((o.optedOut = !e),
              yield Pt.updatePlayer(i, s, {
                notification_types: ie.getNotificationTypeFromOptIn(e),
              }),
              yield I.a.setSubscription(o),
              B.onInternalSubscriptionSet(o.optedOut),
              B.checkAndTriggerSubscriptionChanged())
            : E.a.info(new g(n.NoDeviceId));
        });
      }
      static isOptedOut(e) {
        return a.a(this, void 0, void 0, function* () {
          return yield Object(C.c)(), Ft.internalIsOptedOut(e);
        });
      }
      static internalIsOptedOut(e) {
        return a.a(this, void 0, void 0, function* () {
          Object(C.s)("isOptedOut", e);
          const { optedOut: t } = yield I.a.getSubscription();
          return Object(C.j)(e, t), t;
        });
      }
      static optOut(e, t) {
        return a.a(this, void 0, void 0, function* () {
          if (
            (yield Object(C.c)(),
            Object(C.s)("optOut", e, t),
            !Wt.isValidBoolean(e))
          )
            throw new InvalidArgumentError.a(
              "doOptOut",
              InvalidArgumentError.b.Malformed
            );
          yield Ft.setSubscription(!e), Object(C.j)(t);
        });
      }
      static getEmailId(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(), Object(C.s)("getEmailId", e);
          const t = (yield I.a.getEmailProfile()).emailId;
          return Object(C.j)(e, t), t;
        });
      }
      static getUserId(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(), Object(C.s)("getUserId", e);
          const t = (yield I.a.getSubscription()).deviceId;
          return Object(C.j)(e, t), t;
        });
      }
      static getRegistrationId(e) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(), Object(C.s)("getRegistrationId", e);
          const t = (yield I.a.getSubscription()).subscriptionToken;
          return Object(C.j)(e, t), t;
        });
      }
      static getSubscription(e) {
        return a.a(this, void 0, void 0, function* () {
          return yield Object(C.c)(), yield Ft.privateGetSubscription(e);
        });
      }
      static privateGetSubscription(e) {
        return a.a(this, void 0, void 0, function* () {
          Object(C.s)("getSubscription", e);
          const t = !(yield I.a.getSubscription()).optedOut;
          return Object(C.j)(e, t), t;
        });
      }
      static sendSelfNotification(
        e = "OneSignal Test Message",
        t = "This is an example notification.",
        i = new URL(location.href).origin + "?_osp=do_not_open",
        o,
        s,
        r
      ) {
        return a.a(this, void 0, void 0, function* () {
          yield Object(C.c)(),
            Object(C.s)("sendSelfNotification", e, t, i, o, s, r);
          const a = yield I.a.getAppConfig(),
            c = yield I.a.getSubscription();
          if (!a.appId)
            throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
          if (!(yield Ft.isPushNotificationsEnabled()))
            throw new g(n.NoDeviceId);
          if (!Wt.isValidUrl(i))
            throw new InvalidArgumentError.a(
              "url",
              InvalidArgumentError.b.Malformed
            );
          if (!Wt.isValidUrl(o, { allowEmpty: !0, requireHttps: !0 }))
            throw new InvalidArgumentError.a(
              "icon",
              InvalidArgumentError.b.Malformed
            );
          c.deviceId &&
            (yield Pt.sendNotification(
              a.appId,
              [c.deviceId],
              { en: e },
              { en: t },
              i,
              o,
              s,
              r
            ));
        });
      }
      static push(e) {
        Lt.processItem(Ft, e);
      }
      static on(e, t) {
        return this.emitter.on(e, t);
      }
      static off(e, t) {
        return this.emitter.off(e, t);
      }
      static once(e, t) {
        return this.emitter.once(e, t);
      }
      static sendOutcome(e, t) {
        return a.a(this, void 0, void 0, function* () {
          const i = Ft.config.userConfig.outcomes;
          if (!i)
            return void E.a.error(
              `Could not send ${e}. No outcomes config found.`
            );
          const n = new jt.a(Ft.config.appId, i, e, !1);
          if (void 0 !== t && "number" != typeof t)
            return void E.a.error(
              "Outcome weight can only be a number if present."
            );
          if (!(yield n.beforeOutcomeSend())) return;
          const o = yield n.getAttribution();
          yield n.send({
            type: o.type,
            notificationIds: o.notificationIds,
            weight: t,
          });
        });
      }
      static sendUniqueOutcome(e) {
        return a.a(this, void 0, void 0, function* () {
          const t = Ft.config.userConfig.outcomes;
          if (!t)
            return void E.a.error(
              `Could not send ${e}. No outcomes config found.`
            );
          const i = new jt.a(Ft.config.appId, t, e, !0);
          if (!(yield i.beforeOutcomeSend())) return;
          const n = yield i.getAttribution();
          if (n.type === Vt.a.NotSupported)
            return void E.a.warn(
              "You are on a free plan. Please upgrade to use this functionality."
            );
          const { notificationIds: o } = n,
            s = yield i.getNotifsToAttributeWithUniqueOutcome(o);
          i.shouldSendUnique(n, s)
            ? yield i.send({ type: n.type, notificationIds: s })
            : E.a.warn(`'${e}' was already reported for all notifications.`);
        });
      }
    }
    (Ft.VERSION = d.a.version()),
      (Ft._VERSION = d.a.version()),
      (Ft.sdkEnvironment = x.a),
      (Ft._notificationOpenedCallbacks = []),
      (Ft._idsAvailable_callback = []),
      (Ft._defaultLaunchURL = null),
      (Ft.config = null),
      (Ft._sessionInitAlreadyRunning = !1),
      (Ft._isNotificationEnabledCallback = []),
      (Ft._subscriptionSet = !0),
      (Ft.modalUrl = null),
      (Ft._windowWidth = 650),
      (Ft._windowHeight = 568),
      (Ft._isNewVisitor = !1),
      (Ft._channel = null),
      (Ft.timedLocalStorage = V),
      (Ft.initialized = !1),
      (Ft.notifyButton = null),
      (Ft.store = f),
      (Ft.environment = d.a),
      (Ft.database = I.a),
      (Ft.event = h.a),
      (Ft.browser = l.a),
      (Ft.slidedown = null),
      (Ft.log = E.a),
      (Ft.api = Pt),
      (Ft.indexedDb = Ut.a),
      (Ft.mainHelper = ie),
      (Ft.subscriptionHelper = X),
      (Ft.httpHelper = xt),
      (Ft.eventHelper = B),
      (Ft.initHelper = Ve),
      (Ft.testHelper = Fe),
      (Ft.pendingInit = !0),
      (Ft.emitter = new ne.a()),
      (Ft.cache = {}),
      (Ft.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js"),
      (Ft.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js"),
      (Ft.SERVICE_WORKER_PARAM = { scope: "/" }),
      (Ft._LOGGING = !1),
      (Ft.LOGGING = !1),
      (Ft._usingNativePermissionHook = !1),
      (Ft._initCalled = !1),
      (Ft.__initAlreadyCalled = !1),
      (Ft.checkAndWipeUserSubscription = function () {}),
      (Ft.DeviceRecord = v.a),
      (Ft.EmailDeviceRecord = O),
      (Ft.notificationPermission = A),
      (Ft._initHttp = xt.initHttp),
      (Ft._initPopup = () => Ft.subscriptionPopup.subscribe()),
      (Ft.POSTMAM_COMMANDS = {
        CONNECTED: "connect",
        REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission",
        REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet",
        REMOTE_DATABASE_GET_ALL: "postmam.remoteDatabaseGetAll",
        REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut",
        REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove",
        REMOTE_OPERATION_COMPLETE: "postman.operationComplete",
        REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent",
        MODAL_LOADED: "postmam.modalPrompt.loaded",
        MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted",
        MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled",
        POPUP_LOADED: "postmam.popup.loaded",
        POPUP_ACCEPTED: "postmam.popup.accepted",
        POPUP_REJECTED: "postmam.popup.canceled",
        POPUP_CLOSING: "postman.popup.closing",
        REMOTE_NOTIFICATION_PERMISSION_CHANGED:
          "postmam.remoteNotificationPermissionChanged",
        IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize",
        UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush",
        SET_SESSION_COUNT: "postmam.setSessionCount",
        REQUEST_HOST_URL: "postmam.requestHostUrl",
        WINDOW_TIMEOUT: "postmam.windowTimeout",
        FINISH_REMOTE_REGISTRATION: "postmam.finishRemoteRegistration",
        FINISH_REMOTE_REGISTRATION_IN_PROGRESS:
          "postmam.finishRemoteRegistrationInProgress",
        POPUP_BEGIN_MESSAGEPORT_COMMS: "postmam.beginMessagePortComms",
        SERVICEWORKER_COMMAND_REDIRECT: "postmam.command.redirect",
        MARK_PROMPT_DISMISSED: "postmam.markPromptDismissed",
        IS_SUBSCRIBED: "postmam.isSubscribed",
        UNSUBSCRIBE_PROXY_FRAME: "postman.unsubscribeProxyFrame",
        GET_EVENT_LISTENER_COUNT: "postmam.getEventListenerCount",
        SERVICE_WORKER_STATE: "postmam.serviceWorkerState",
        GET_WORKER_VERSION: "postmam.getWorkerVersion",
        SUBSCRIPTION_EXPIRATION_STATE: "postmam.subscriptionExpirationState",
        PROCESS_EXPIRING_SUBSCRIPTIONS: "postmam.processExpiringSubscriptions",
        GET_SUBSCRIPTION_STATE: "postmam.getSubscriptionState",
        SESSION_UPSERT: "postmam.sessionUpsert",
        SESSION_DEACTIVATE: "postmam.sessionDeactivate",
        ARE_YOU_VISIBLE_REQUEST: "postmam.areYouVisibleRequest",
        ARE_YOU_VISIBLE_RESPONSE: "postmam.areYouVisibleResponse",
      }),
      (Ft.EVENTS = {
        CUSTOM_PROMPT_CLICKED: "customPromptClick",
        NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange",
        SUBSCRIPTION_CHANGED: "subscriptionChange",
        WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
        NOTIFICATION_DISPLAYED: "notificationDisplay",
        NOTIFICATION_DISMISSED: "notificationDismiss",
        NOTIFICATION_CLICKED: "notificationClick",
        SDK_INITIALIZED: "initializeInternal",
        SDK_INITIALIZED_PUBLIC: "initialize",
        REGISTERED: "register",
        POPUP_CLOSING: "popupClose",
        PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay",
        TEST_INIT_OPTION_DISABLED: "testInitOptionDisabled",
        TEST_WOULD_DISPLAY: "testWouldDisplay",
        POPUP_WINDOW_TIMEOUT: "popupWindowTimeout",
        SESSION_STARTED: "os.sessionStarted",
      }),
      j.ensureBackwardsCompatibility(Ft),
      E.a.info(
        `%cOneSignal Web SDK loaded (version ${
          Ft._VERSION
        }, ${x.a.getWindowEnv().toString()} environment).`,
        Object(C.k)("bold")
      ),
      E.a.debug(
        `Current Page URL: ${
          "undefined" == typeof location ? "NodeJS" : location.href
        }`
      ),
      E.a.debug(`Browser Environment: ${l.a.name} ${l.a.version}`);
  },
  function (e, t) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (i = window);
    }
    e.exports = i;
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
]);
//# sourceMappingURL=OneSignalPageSDKES6.js.map
