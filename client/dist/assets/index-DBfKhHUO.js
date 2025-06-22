var yu = (e) => {
  throw TypeError(e);
};
var _s = (e, t, n) => t.has(e) || yu('Cannot ' + n);
var g = (e, t, n) => (_s(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
  L = (e, t, n) =>
    t.has(e)
      ? yu('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  R = (e, t, n, r) => (_s(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
  U = (e, t, n) => (_s(e, t, 'access private method'), n);
var Ji = (e, t, n, r) => ({
  set _(i) {
    R(e, t, i, n);
  },
  get _() {
    return g(e, t, r);
  },
});
function cp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l && Object.defineProperty(e, i, l.get ? l : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === 'childList')
        for (const s of l.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function dp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var md = { exports: {} },
  cs = {},
  gd = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bi = Symbol.for('react.element'),
  fp = Symbol.for('react.portal'),
  hp = Symbol.for('react.fragment'),
  pp = Symbol.for('react.strict_mode'),
  mp = Symbol.for('react.profiler'),
  gp = Symbol.for('react.provider'),
  vp = Symbol.for('react.context'),
  yp = Symbol.for('react.forward_ref'),
  xp = Symbol.for('react.suspense'),
  wp = Symbol.for('react.memo'),
  Sp = Symbol.for('react.lazy'),
  xu = Symbol.iterator;
function kp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xu && e[xu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var vd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yd = Object.assign,
  xd = {};
function Mr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = xd), (this.updater = n || vd);
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function wd() {}
wd.prototype = Mr.prototype;
function ga(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = xd), (this.updater = n || vd);
}
var va = (ga.prototype = new wd());
va.constructor = ga;
yd(va, Mr.prototype);
va.isPureReactComponent = !0;
var wu = Array.isArray,
  Sd = Object.prototype.hasOwnProperty,
  ya = { current: null },
  kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cd(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (l = '' + t.key), t))
      Sd.call(t, r) && !kd.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return { $$typeof: Bi, type: e, key: l, ref: s, props: i, _owner: ya.current };
}
function Cp(e, t) {
  return { $$typeof: Bi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xa(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Bi;
}
function Ep(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Su = /\/+/g;
function Rs(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Ep('' + e.key) : t.toString(36);
}
function yl(e, t, n, r, i) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Bi:
          case fp:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + Rs(s, 0) : r),
      wu(i)
        ? ((n = ''),
          e != null && (n = e.replace(Su, '$&/') + '/'),
          yl(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (xa(i) &&
            (i = Cp(
              i,
              n +
                (!i.key || (s && s.key === i.key) ? '' : ('' + i.key).replace(Su, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), wu(e)))
    for (var o = 0; o < e.length; o++) {
      l = e[o];
      var a = r + Rs(l, o);
      s += yl(l, t, n, a, i);
    }
  else if (((a = kp(e)), typeof a == 'function'))
    for (e = a.call(e), o = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Rs(l, o++)), (s += yl(l, t, n, a, i));
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function el(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    yl(e, r, '', '', function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function jp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  xl = { transition: null },
  Np = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: xl, ReactCurrentOwner: ya };
function Ed() {
  throw Error('act(...) is not supported in production builds of React.');
}
A.Children = {
  map: el,
  forEach: function (e, t, n) {
    el(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      el(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      el(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xa(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
A.Component = Mr;
A.Fragment = hp;
A.Profiler = mp;
A.PureComponent = ga;
A.StrictMode = pp;
A.Suspense = xp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
A.act = Ed;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    );
  var r = yd({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = ya.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      Sd.call(t, a) &&
        !kd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Bi, type: e.type, key: i, ref: l, props: r, _owner: s };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: vp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gp, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Cd;
A.createFactory = function (e) {
  var t = Cd.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: yp, render: e };
};
A.isValidElement = xa;
A.lazy = function (e) {
  return { $$typeof: Sp, _payload: { _status: -1, _result: e }, _init: jp };
};
A.memo = function (e, t) {
  return { $$typeof: wp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = xl.transition;
  xl.transition = {};
  try {
    e();
  } finally {
    xl.transition = t;
  }
};
A.unstable_act = Ed;
A.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
A.useContext = function (e) {
  return Pe.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
A.useId = function () {
  return Pe.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return Pe.current.useRef(e);
};
A.useState = function (e) {
  return Pe.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return Pe.current.useTransition();
};
A.version = '18.3.1';
gd.exports = A;
var E = gd.exports;
const jd = dp(E),
  Pp = cp({ __proto__: null, default: jd }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p = E,
  Rp = Symbol.for('react.element'),
  Op = Symbol.for('react.fragment'),
  Tp = Object.prototype.hasOwnProperty,
  zp = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nd(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Tp.call(t, r) && !Lp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Rp, type: e, key: l, ref: s, props: i, _owner: zp.current };
}
cs.Fragment = Op;
cs.jsx = Nd;
cs.jsxs = Nd;
md.exports = cs;
var f = md.exports,
  Ir = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Dn = typeof window > 'u' || 'Deno' in globalThis;
function je() {}
function Mp(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function io(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function Pd(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function en(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function nt(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function ku(e, t) {
  const { type: n = 'all', exact: r, fetchStatus: i, predicate: l, queryKey: s, stale: o } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== wa(s, t.options)) return !1;
    } else if (!yi(t.queryKey, s)) return !1;
  }
  if (n !== 'all') {
    const a = t.isActive();
    if ((n === 'active' && !a) || (n === 'inactive' && a)) return !1;
  }
  return !(
    (typeof o == 'boolean' && t.isStale() !== o) ||
    (i && i !== t.state.fetchStatus) ||
    (l && !l(t))
  );
}
function Cu(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: l } = e;
  if (l) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (bn(t.options.mutationKey) !== bn(l)) return !1;
    } else if (!yi(t.options.mutationKey, l)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function wa(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || bn)(e);
}
function bn(e) {
  return JSON.stringify(e, (t, n) =>
    lo(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function yi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
        ? Object.keys(t).every((n) => yi(e[n], t[n]))
        : !1;
}
function _d(e, t) {
  if (e === t) return e;
  const n = Eu(e) && Eu(t);
  if (n || (lo(e) && lo(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      l = n ? t : Object.keys(t),
      s = l.length,
      o = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let m = 0; m < s; m++) {
      const c = n ? m : l[m];
      ((!n && a.has(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((o[c] = void 0), u++)
        : ((o[c] = _d(e[c], t[c])), o[c] === e[c] && e[c] !== void 0 && u++);
    }
    return i === s && u === i ? e : o;
  }
  return t;
}
function Ml(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Eu(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function lo(e) {
  if (!ju(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !ju(n) ||
    !n.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function ju(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function Ip(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function so(e, t, n) {
  return typeof n.structuralSharing == 'function'
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? _d(e, t)
      : t;
}
function Fp(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Dp(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Sa = Symbol();
function Rd(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Sa
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Od(e, t) {
  return typeof e == 'function' ? e(...t) : !!e;
}
var Nn,
  $t,
  mr,
  ld,
  bp =
    ((ld = class extends Ir {
      constructor() {
        super();
        L(this, Nn);
        L(this, $t);
        L(this, mr);
        R(this, mr, (t) => {
          if (!Dn && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener('visibilitychange', n, !1),
              () => {
                window.removeEventListener('visibilitychange', n);
              }
            );
          }
        });
      }
      onSubscribe() {
        g(this, $t) || this.setEventListener(g(this, mr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = g(this, $t)) == null || t.call(this), R(this, $t, void 0));
      }
      setEventListener(t) {
        var n;
        R(this, mr, t),
          (n = g(this, $t)) == null || n.call(this),
          R(
            this,
            $t,
            t((r) => {
              typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        g(this, Nn) !== t && (R(this, Nn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof g(this, Nn) == 'boolean'
          ? g(this, Nn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (Nn = new WeakMap()),
    ($t = new WeakMap()),
    (mr = new WeakMap()),
    ld),
  ka = new bp(),
  gr,
  Qt,
  vr,
  sd,
  Up =
    ((sd = class extends Ir {
      constructor() {
        super();
        L(this, gr, !0);
        L(this, Qt);
        L(this, vr);
        R(this, vr, (t) => {
          if (!Dn && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener('online', n, !1),
              window.addEventListener('offline', r, !1),
              () => {
                window.removeEventListener('online', n), window.removeEventListener('offline', r);
              }
            );
          }
        });
      }
      onSubscribe() {
        g(this, Qt) || this.setEventListener(g(this, vr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = g(this, Qt)) == null || t.call(this), R(this, Qt, void 0));
      }
      setEventListener(t) {
        var n;
        R(this, vr, t),
          (n = g(this, Qt)) == null || n.call(this),
          R(this, Qt, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        g(this, gr) !== t &&
          (R(this, gr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return g(this, gr);
      }
    }),
    (gr = new WeakMap()),
    (Qt = new WeakMap()),
    (vr = new WeakMap()),
    sd),
  Il = new Up();
function oo() {
  let e, t;
  const n = new Promise((i, l) => {
    (e = i), (t = l);
  });
  (n.status = 'pending'), n.catch(() => {});
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (i) => {
      r({ status: 'fulfilled', value: i }), e(i);
    }),
    (n.reject = (i) => {
      r({ status: 'rejected', reason: i }), t(i);
    }),
    n
  );
}
function Ap(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Td(e) {
  return (e ?? 'online') === 'online' ? Il.isOnline() : !0;
}
var zd = class extends Error {
  constructor(e) {
    super('CancelledError'),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Os(e) {
  return e instanceof zd;
}
function Ld(e) {
  let t = !1,
    n = 0,
    r = !1,
    i;
  const l = oo(),
    s = (y) => {
      var S;
      r || (p(new zd(y)), (S = e.abort) == null || S.call(e));
    },
    o = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () => ka.isFocused() && (e.networkMode === 'always' || Il.isOnline()) && e.canRun(),
    m = () => Td(e.networkMode) && e.canRun(),
    c = (y) => {
      var S;
      r || ((r = !0), (S = e.onSuccess) == null || S.call(e, y), i == null || i(), l.resolve(y));
    },
    p = (y) => {
      var S;
      r || ((r = !0), (S = e.onError) == null || S.call(e, y), i == null || i(), l.reject(y));
    },
    x = () =>
      new Promise((y) => {
        var S;
        (i = (h) => {
          (r || u()) && y(h);
        }),
          (S = e.onPause) == null || S.call(e);
      }).then(() => {
        var y;
        (i = void 0), r || (y = e.onContinue) == null || y.call(e);
      }),
    w = () => {
      if (r) return;
      let y;
      const S = n === 0 ? e.initialPromise : void 0;
      try {
        y = S ?? e.fn();
      } catch (h) {
        y = Promise.reject(h);
      }
      Promise.resolve(y)
        .then(c)
        .catch((h) => {
          var C;
          if (r) return;
          const d = e.retry ?? (Dn ? 0 : 3),
            v = e.retryDelay ?? Ap,
            k = typeof v == 'function' ? v(n, h) : v,
            j = d === !0 || (typeof d == 'number' && n < d) || (typeof d == 'function' && d(n, h));
          if (t || !j) {
            p(h);
            return;
          }
          n++,
            (C = e.onFail) == null || C.call(e, n, h),
            Ip(k)
              .then(() => (u() ? void 0 : x()))
              .then(() => {
                t ? p(h) : w();
              });
        });
    };
  return {
    promise: l,
    cancel: s,
    continue: () => (i == null || i(), l),
    cancelRetry: o,
    continueRetry: a,
    canStart: m,
    start: () => (m() ? w() : x().then(w), l),
  };
}
var $p = (e) => setTimeout(e, 0);
function Qp() {
  let e = [],
    t = 0,
    n = (o) => {
      o();
    },
    r = (o) => {
      o();
    },
    i = $p;
  const l = (o) => {
      t
        ? e.push(o)
        : i(() => {
            n(o);
          });
    },
    s = () => {
      const o = e;
      (e = []),
        o.length &&
          i(() => {
            r(() => {
              o.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (o) => {
      let a;
      t++;
      try {
        a = o();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (o) =>
      (...a) => {
        l(() => {
          o(...a);
        });
      },
    schedule: l,
    setNotifyFunction: (o) => {
      n = o;
    },
    setBatchNotifyFunction: (o) => {
      r = o;
    },
    setScheduler: (o) => {
      i = o;
    },
  };
}
var ae = Qp(),
  Pn,
  od,
  Md =
    ((od = class {
      constructor() {
        L(this, Pn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          io(this.gcTime) &&
            R(
              this,
              Pn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Dn ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        g(this, Pn) && (clearTimeout(g(this, Pn)), R(this, Pn, void 0));
      }
    }),
    (Pn = new WeakMap()),
    od),
  yr,
  _n,
  Be,
  Rn,
  xe,
  Ui,
  On,
  Je,
  yt,
  ad,
  Bp =
    ((ad = class extends Md {
      constructor(t) {
        super();
        L(this, Je);
        L(this, yr);
        L(this, _n);
        L(this, Be);
        L(this, Rn);
        L(this, xe);
        L(this, Ui);
        L(this, On);
        R(this, On, !1),
          R(this, Ui, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          R(this, Rn, t.client),
          R(this, Be, g(this, Rn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          R(this, yr, Vp(this.options)),
          (this.state = t.state ?? g(this, yr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = g(this, xe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...g(this, Ui), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && g(this, Be).remove(this);
      }
      setData(t, n) {
        const r = so(this.state.data, t, this.options);
        return (
          U(this, Je, yt).call(this, {
            data: r,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        U(this, Je, yt).call(this, { type: 'setState', state: t, setStateOptions: n });
      }
      cancel(t) {
        var r, i;
        const n = (r = g(this, xe)) == null ? void 0 : r.promise;
        return (
          (i = g(this, xe)) == null || i.cancel(t), n ? n.then(je).catch(je) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(g(this, yr));
      }
      isActive() {
        return this.observers.some((t) => nt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Sa ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => en(t.options.staleTime, this) === 'static')
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === 'static'
            ? !1
            : this.state.isInvalidated
              ? !0
              : !Pd(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = g(this, xe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = g(this, xe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          g(this, Be).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (g(this, xe) &&
              (g(this, On) ? g(this, xe).cancel({ revert: !0 }) : g(this, xe).cancelRetry()),
            this.scheduleGc()),
          g(this, Be).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || U(this, Je, yt).call(this, { type: 'invalidate' });
      }
      fetch(t, n) {
        var u, m, c;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (g(this, xe)) return g(this, xe).continueRetry(), g(this, xe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const p = this.observers.find((x) => x.options.queryFn);
          p && this.setOptions(p.options);
        }
        const r = new AbortController(),
          i = (p) => {
            Object.defineProperty(p, 'signal', {
              enumerable: !0,
              get: () => (R(this, On, !0), r.signal),
            });
          },
          l = () => {
            const p = Rd(this.options, n),
              w = (() => {
                const y = { client: g(this, Rn), queryKey: this.queryKey, meta: this.meta };
                return i(y), y;
              })();
            return (
              R(this, On, !1), this.options.persister ? this.options.persister(p, w, this) : p(w)
            );
          },
          o = (() => {
            const p = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: g(this, Rn),
              state: this.state,
              fetchFn: l,
            };
            return i(p), p;
          })();
        (u = this.options.behavior) == null || u.onFetch(o, this),
          R(this, _n, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((m = o.fetchOptions) == null ? void 0 : m.meta)) &&
            U(this, Je, yt).call(this, {
              type: 'fetch',
              meta: (c = o.fetchOptions) == null ? void 0 : c.meta,
            });
        const a = (p) => {
          var x, w, y, S;
          (Os(p) && p.silent) || U(this, Je, yt).call(this, { type: 'error', error: p }),
            Os(p) ||
              ((w = (x = g(this, Be).config).onError) == null || w.call(x, p, this),
              (S = (y = g(this, Be).config).onSettled) == null ||
                S.call(y, this.state.data, p, this)),
            this.scheduleGc();
        };
        return (
          R(
            this,
            xe,
            Ld({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (p) => {
                var x, w, y, S;
                if (p === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (h) {
                  a(h);
                  return;
                }
                (w = (x = g(this, Be).config).onSuccess) == null || w.call(x, p, this),
                  (S = (y = g(this, Be).config).onSettled) == null ||
                    S.call(y, p, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (p, x) => {
                U(this, Je, yt).call(this, { type: 'failed', failureCount: p, error: x });
              },
              onPause: () => {
                U(this, Je, yt).call(this, { type: 'pause' });
              },
              onContinue: () => {
                U(this, Je, yt).call(this, { type: 'continue' });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          g(this, xe).start()
        );
      }
    }),
    (yr = new WeakMap()),
    (_n = new WeakMap()),
    (Be = new WeakMap()),
    (Rn = new WeakMap()),
    (xe = new WeakMap()),
    (Ui = new WeakMap()),
    (On = new WeakMap()),
    (Je = new WeakSet()),
    (yt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case 'pause':
            return { ...r, fetchStatus: 'paused' };
          case 'continue':
            return { ...r, fetchStatus: 'fetching' };
          case 'fetch':
            return { ...r, ...Id(r.data, this.options), fetchMeta: t.meta ?? null };
          case 'success':
            return (
              R(this, _n, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: 'success',
                ...(!t.manual && {
                  fetchStatus: 'idle',
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case 'error':
            const i = t.error;
            return Os(i) && i.revert && g(this, _n)
              ? { ...g(this, _n), fetchStatus: 'idle' }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...r, isInvalidated: !0 };
          case 'setState':
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        ae.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            g(this, Be).notify({ query: this, type: 'updated', action: t });
        });
    }),
    ad);
function Id(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Td(t.networkMode) ? 'fetching' : 'paused',
    ...(e === void 0 && { error: null, status: 'pending' }),
  };
}
function Vp(e) {
  const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var dt,
  ud,
  Wp =
    ((ud = class extends Ir {
      constructor(t = {}) {
        super();
        L(this, dt);
        (this.config = t), R(this, dt, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          l = n.queryHash ?? wa(i, n);
        let s = this.get(l);
        return (
          s ||
            ((s = new Bp({
              client: t,
              queryKey: i,
              queryHash: l,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        g(this, dt).has(t.queryHash) ||
          (g(this, dt).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const n = g(this, dt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && g(this, dt).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        ae.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return g(this, dt).get(t);
      }
      getAll() {
        return [...g(this, dt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => ku(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => ku(t, r)) : n;
      }
      notify(t) {
        ae.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        ae.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ae.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (dt = new WeakMap()),
    ud),
  ft,
  ke,
  Tn,
  ht,
  Ft,
  cd,
  Hp =
    ((cd = class extends Md {
      constructor(t) {
        super();
        L(this, ht);
        L(this, ft);
        L(this, ke);
        L(this, Tn);
        (this.mutationId = t.mutationId),
          R(this, ke, t.mutationCache),
          R(this, ft, []),
          (this.state = t.state || Fd()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        g(this, ft).includes(t) ||
          (g(this, ft).push(t),
          this.clearGcTimeout(),
          g(this, ke).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        R(
          this,
          ft,
          g(this, ft).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          g(this, ke).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        g(this, ft).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : g(this, ke).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = g(this, Tn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var l, s, o, a, u, m, c, p, x, w, y, S, h, d, v, k, j, C, P, _;
        const n = () => {
          U(this, ht, Ft).call(this, { type: 'continue' });
        };
        R(
          this,
          Tn,
          Ld({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (M, z) => {
              U(this, ht, Ft).call(this, { type: 'failed', failureCount: M, error: z });
            },
            onPause: () => {
              U(this, ht, Ft).call(this, { type: 'pause' });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => g(this, ke).canRun(this),
          })
        );
        const r = this.state.status === 'pending',
          i = !g(this, Tn).canStart();
        try {
          if (r) n();
          else {
            U(this, ht, Ft).call(this, { type: 'pending', variables: t, isPaused: i }),
              await ((s = (l = g(this, ke).config).onMutate) == null ? void 0 : s.call(l, t, this));
            const z = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
            z !== this.state.context &&
              U(this, ht, Ft).call(this, {
                type: 'pending',
                context: z,
                variables: t,
                isPaused: i,
              });
          }
          const M = await g(this, Tn).start();
          return (
            await ((m = (u = g(this, ke).config).onSuccess) == null
              ? void 0
              : m.call(u, M, t, this.state.context, this)),
            await ((p = (c = this.options).onSuccess) == null
              ? void 0
              : p.call(c, M, t, this.state.context)),
            await ((w = (x = g(this, ke).config).onSettled) == null
              ? void 0
              : w.call(x, M, null, this.state.variables, this.state.context, this)),
            await ((S = (y = this.options).onSettled) == null
              ? void 0
              : S.call(y, M, null, t, this.state.context)),
            U(this, ht, Ft).call(this, { type: 'success', data: M }),
            M
          );
        } catch (M) {
          try {
            throw (
              (await ((d = (h = g(this, ke).config).onError) == null
                ? void 0
                : d.call(h, M, t, this.state.context, this)),
              await ((k = (v = this.options).onError) == null
                ? void 0
                : k.call(v, M, t, this.state.context)),
              await ((C = (j = g(this, ke).config).onSettled) == null
                ? void 0
                : C.call(j, void 0, M, this.state.variables, this.state.context, this)),
              await ((_ = (P = this.options).onSettled) == null
                ? void 0
                : _.call(P, void 0, M, t, this.state.context)),
              M)
            );
          } finally {
            U(this, ht, Ft).call(this, { type: 'error', error: M });
          }
        } finally {
          g(this, ke).runNext(this);
        }
      }
    }),
    (ft = new WeakMap()),
    (ke = new WeakMap()),
    (Tn = new WeakMap()),
    (ht = new WeakSet()),
    (Ft = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return { ...r, failureCount: t.failureCount, failureReason: t.error };
          case 'pause':
            return { ...r, isPaused: !0 };
          case 'continue':
            return { ...r, isPaused: !1 };
          case 'pending':
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: 'pending',
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = n(this.state)),
        ae.batch(() => {
          g(this, ft).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            g(this, ke).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    cd);
function Fd() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var St,
  et,
  Ai,
  dd,
  Kp =
    ((dd = class extends Ir {
      constructor(t = {}) {
        super();
        L(this, St);
        L(this, et);
        L(this, Ai);
        (this.config = t), R(this, St, new Set()), R(this, et, new Map()), R(this, Ai, 0);
      }
      build(t, n, r) {
        const i = new Hp({
          mutationCache: this,
          mutationId: ++Ji(this, Ai)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        g(this, St).add(t);
        const n = tl(t);
        if (typeof n == 'string') {
          const r = g(this, et).get(n);
          r ? r.push(t) : g(this, et).set(n, [t]);
        }
        this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        if (g(this, St).delete(t)) {
          const n = tl(t);
          if (typeof n == 'string') {
            const r = g(this, et).get(n);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(t);
                i !== -1 && r.splice(i, 1);
              } else r[0] === t && g(this, et).delete(n);
          }
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        const n = tl(t);
        if (typeof n == 'string') {
          const r = g(this, et).get(n),
            i = r == null ? void 0 : r.find((l) => l.state.status === 'pending');
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = tl(t);
        if (typeof n == 'string') {
          const i =
            (r = g(this, et).get(n)) == null ? void 0 : r.find((l) => l !== t && l.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        ae.batch(() => {
          g(this, St).forEach((t) => {
            this.notify({ type: 'removed', mutation: t });
          }),
            g(this, St).clear(),
            g(this, et).clear();
        });
      }
      getAll() {
        return Array.from(g(this, St));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Cu(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Cu(t, n));
      }
      notify(t) {
        ae.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return ae.batch(() => Promise.all(t.map((n) => n.continue().catch(je))));
      }
    }),
    (St = new WeakMap()),
    (et = new WeakMap()),
    (Ai = new WeakMap()),
    dd);
function tl(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Nu(e) {
  return {
    onFetch: (t, n) => {
      var m, c, p, x, w;
      const r = t.options,
        i =
          (p =
            (c = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : c.fetchMore) ==
          null
            ? void 0
            : p.direction,
        l = ((x = t.state.data) == null ? void 0 : x.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let o = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let y = !1;
        const S = (v) => {
            Object.defineProperty(v, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener('abort', () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          h = Rd(t.options, t.fetchOptions),
          d = async (v, k, j) => {
            if (y) return Promise.reject();
            if (k == null && v.pages.length) return Promise.resolve(v);
            const P = (() => {
                const H = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: k,
                  direction: j ? 'backward' : 'forward',
                  meta: t.options.meta,
                };
                return S(H), H;
              })(),
              _ = await h(P),
              { maxPages: M } = t.options,
              z = j ? Dp : Fp;
            return { pages: z(v.pages, _, M), pageParams: z(v.pageParams, k, M) };
          };
        if (i && l.length) {
          const v = i === 'backward',
            k = v ? Gp : Pu,
            j = { pages: l, pageParams: s },
            C = k(r, j);
          o = await d(j, C, v);
        } else {
          const v = e ?? l.length;
          do {
            const k = a === 0 ? (s[0] ?? r.initialPageParam) : Pu(r, o);
            if (a > 0 && k == null) break;
            (o = await d(o, k)), a++;
          } while (a < v);
        }
        return o;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, S;
            return (S = (y = t.options).persister) == null
              ? void 0
              : S.call(
                  y,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Pu(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Gp(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var te,
  Bt,
  Vt,
  xr,
  wr,
  Wt,
  Sr,
  kr,
  fd,
  qp =
    ((fd = class {
      constructor(e = {}) {
        L(this, te);
        L(this, Bt);
        L(this, Vt);
        L(this, xr);
        L(this, wr);
        L(this, Wt);
        L(this, Sr);
        L(this, kr);
        R(this, te, e.queryCache || new Wp()),
          R(this, Bt, e.mutationCache || new Kp()),
          R(this, Vt, e.defaultOptions || {}),
          R(this, xr, new Map()),
          R(this, wr, new Map()),
          R(this, Wt, 0);
      }
      mount() {
        Ji(this, Wt)._++,
          g(this, Wt) === 1 &&
            (R(
              this,
              Sr,
              ka.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), g(this, te).onFocus());
              })
            ),
            R(
              this,
              kr,
              Il.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), g(this, te).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Ji(this, Wt)._--,
          g(this, Wt) === 0 &&
            ((e = g(this, Sr)) == null || e.call(this),
            R(this, Sr, void 0),
            (t = g(this, kr)) == null || t.call(this),
            R(this, kr, void 0));
      }
      isFetching(e) {
        return g(this, te).findAll({ ...e, fetchStatus: 'fetching' }).length;
      }
      isMutating(e) {
        return g(this, Bt).findAll({ ...e, status: 'pending' }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = g(this, te).get(t.queryHash)) == null ? void 0 : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = g(this, te).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale && n.isStaleByTime(en(t.staleTime, n)) && this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return g(this, te)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = g(this, te).get(r.queryHash),
          l = i == null ? void 0 : i.state.data,
          s = Mp(t, l);
        if (s !== void 0)
          return g(this, te)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return ae.batch(() =>
          g(this, te)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = g(this, te).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = g(this, te);
        ae.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = g(this, te);
        return ae.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: 'active', ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = ae.batch(() =>
            g(this, te)
              .findAll(e)
              .map((i) => i.cancel(n))
          );
        return Promise.all(r).then(je).catch(je);
      }
      invalidateQueries(e, t = {}) {
        return ae.batch(
          () => (
            g(this, te)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === 'none'
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      'active',
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = ae.batch(() =>
            g(this, te)
              .findAll(e)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let l = i.fetch(void 0, n);
                return (
                  n.throwOnError || (l = l.catch(je)),
                  i.state.fetchStatus === 'paused' ? Promise.resolve() : l
                );
              })
          );
        return Promise.all(r).then(je);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = g(this, te).build(this, t);
        return n.isStaleByTime(en(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(je).catch(je);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Nu(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(je).catch(je);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Nu(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Il.isOnline() ? g(this, Bt).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return g(this, te);
      }
      getMutationCache() {
        return g(this, Bt);
      }
      getDefaultOptions() {
        return g(this, Vt);
      }
      setDefaultOptions(e) {
        R(this, Vt, e);
      }
      setQueryDefaults(e, t) {
        g(this, xr).set(bn(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...g(this, xr).values()],
          n = {};
        return (
          t.forEach((r) => {
            yi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        g(this, wr).set(bn(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...g(this, wr).values()],
          n = {};
        return (
          t.forEach((r) => {
            yi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...g(this, Vt).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = wa(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.queryFn === Sa && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...g(this, Vt).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        g(this, te).clear(), g(this, Bt).clear();
      }
    }),
    (te = new WeakMap()),
    (Bt = new WeakMap()),
    (Vt = new WeakMap()),
    (xr = new WeakMap()),
    (wr = new WeakMap()),
    (Wt = new WeakMap()),
    (Sr = new WeakMap()),
    (kr = new WeakMap()),
    fd),
  Re,
  $,
  $i,
  Ce,
  zn,
  Cr,
  Ht,
  Kt,
  Qi,
  Er,
  jr,
  Ln,
  Mn,
  Gt,
  Nr,
  V,
  Zr,
  ao,
  uo,
  co,
  fo,
  ho,
  po,
  mo,
  Dd,
  hd,
  Yp =
    ((hd = class extends Ir {
      constructor(t, n) {
        super();
        L(this, V);
        L(this, Re);
        L(this, $);
        L(this, $i);
        L(this, Ce);
        L(this, zn);
        L(this, Cr);
        L(this, Ht);
        L(this, Kt);
        L(this, Qi);
        L(this, Er);
        L(this, jr);
        L(this, Ln);
        L(this, Mn);
        L(this, Gt);
        L(this, Nr, new Set());
        (this.options = n),
          R(this, Re, t),
          R(this, Kt, null),
          R(this, Ht, oo()),
          this.options.experimental_prefetchInRender ||
            g(this, Ht).reject(
              new Error('experimental_prefetchInRender feature flag is not enabled')
            ),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (g(this, $).addObserver(this),
          _u(g(this, $), this.options) ? U(this, V, Zr).call(this) : this.updateResult(),
          U(this, V, fo).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return go(g(this, $), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return go(g(this, $), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          U(this, V, ho).call(this),
          U(this, V, po).call(this),
          g(this, $).removeObserver(this);
      }
      setOptions(t) {
        const n = this.options,
          r = g(this, $);
        if (
          ((this.options = g(this, Re).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof nt(this.options.enabled, g(this, $)) != 'boolean')
        )
          throw new Error('Expected enabled to be a boolean or a callback that returns a boolean');
        U(this, V, mo).call(this),
          g(this, $).setOptions(this.options),
          n._defaulted &&
            !Ml(this.options, n) &&
            g(this, Re)
              .getQueryCache()
              .notify({ type: 'observerOptionsUpdated', query: g(this, $), observer: this });
        const i = this.hasListeners();
        i && Ru(g(this, $), r, this.options, n) && U(this, V, Zr).call(this),
          this.updateResult(),
          i &&
            (g(this, $) !== r ||
              nt(this.options.enabled, g(this, $)) !== nt(n.enabled, g(this, $)) ||
              en(this.options.staleTime, g(this, $)) !== en(n.staleTime, g(this, $))) &&
            U(this, V, ao).call(this);
        const l = U(this, V, uo).call(this);
        i &&
          (g(this, $) !== r ||
            nt(this.options.enabled, g(this, $)) !== nt(n.enabled, g(this, $)) ||
            l !== g(this, Gt)) &&
          U(this, V, co).call(this, l);
      }
      getOptimisticResult(t) {
        const n = g(this, Re).getQueryCache().build(g(this, Re), t),
          r = this.createResult(n, t);
        return (
          Zp(this, r) && (R(this, Ce, r), R(this, Cr, this.options), R(this, zn, g(this, $).state)),
          r
        );
      }
      getCurrentResult() {
        return g(this, Ce);
      }
      trackResult(t, n) {
        return new Proxy(t, {
          get: (r, i) => (this.trackProp(i), n == null || n(i), Reflect.get(r, i)),
        });
      }
      trackProp(t) {
        g(this, Nr).add(t);
      }
      getCurrentQuery() {
        return g(this, $);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = g(this, Re).defaultQueryOptions(t),
          r = g(this, Re).getQueryCache().build(g(this, Re), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return U(this, V, Zr)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), g(this, Ce)));
      }
      createResult(t, n) {
        var M;
        const r = g(this, $),
          i = this.options,
          l = g(this, Ce),
          s = g(this, zn),
          o = g(this, Cr),
          u = t !== r ? t.state : g(this, $i),
          { state: m } = t;
        let c = { ...m },
          p = !1,
          x;
        if (n._optimisticResults) {
          const z = this.hasListeners(),
            H = !z && _u(t, n),
            b = z && Ru(t, r, n, i);
          (H || b) && (c = { ...c, ...Id(m.data, t.options) }),
            n._optimisticResults === 'isRestoring' && (c.fetchStatus = 'idle');
        }
        let { error: w, errorUpdatedAt: y, status: S } = c;
        x = c.data;
        let h = !1;
        if (n.placeholderData !== void 0 && x === void 0 && S === 'pending') {
          let z;
          l != null &&
          l.isPlaceholderData &&
          n.placeholderData === (o == null ? void 0 : o.placeholderData)
            ? ((z = l.data), (h = !0))
            : (z =
                typeof n.placeholderData == 'function'
                  ? n.placeholderData(
                      (M = g(this, jr)) == null ? void 0 : M.state.data,
                      g(this, jr)
                    )
                  : n.placeholderData),
            z !== void 0 &&
              ((S = 'success'), (x = so(l == null ? void 0 : l.data, z, n)), (p = !0));
        }
        if (n.select && x !== void 0 && !h)
          if (l && x === (s == null ? void 0 : s.data) && n.select === g(this, Qi)) x = g(this, Er);
          else
            try {
              R(this, Qi, n.select),
                (x = n.select(x)),
                (x = so(l == null ? void 0 : l.data, x, n)),
                R(this, Er, x),
                R(this, Kt, null);
            } catch (z) {
              R(this, Kt, z);
            }
        g(this, Kt) && ((w = g(this, Kt)), (x = g(this, Er)), (y = Date.now()), (S = 'error'));
        const d = c.fetchStatus === 'fetching',
          v = S === 'pending',
          k = S === 'error',
          j = v && d,
          C = x !== void 0,
          _ = {
            status: S,
            fetchStatus: c.fetchStatus,
            isPending: v,
            isSuccess: S === 'success',
            isError: k,
            isInitialLoading: j,
            isLoading: j,
            data: x,
            dataUpdatedAt: c.dataUpdatedAt,
            error: w,
            errorUpdatedAt: y,
            failureCount: c.fetchFailureCount,
            failureReason: c.fetchFailureReason,
            errorUpdateCount: c.errorUpdateCount,
            isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
            isFetchedAfterMount:
              c.dataUpdateCount > u.dataUpdateCount || c.errorUpdateCount > u.errorUpdateCount,
            isFetching: d,
            isRefetching: d && !v,
            isLoadingError: k && !C,
            isPaused: c.fetchStatus === 'paused',
            isPlaceholderData: p,
            isRefetchError: k && C,
            isStale: Ca(t, n),
            refetch: this.refetch,
            promise: g(this, Ht),
          };
        if (this.options.experimental_prefetchInRender) {
          const z = (ge) => {
              _.status === 'error' ? ge.reject(_.error) : _.data !== void 0 && ge.resolve(_.data);
            },
            H = () => {
              const ge = R(this, Ht, (_.promise = oo()));
              z(ge);
            },
            b = g(this, Ht);
          switch (b.status) {
            case 'pending':
              t.queryHash === r.queryHash && z(b);
              break;
            case 'fulfilled':
              (_.status === 'error' || _.data !== b.value) && H();
              break;
            case 'rejected':
              (_.status !== 'error' || _.error !== b.reason) && H();
              break;
          }
        }
        return _;
      }
      updateResult() {
        const t = g(this, Ce),
          n = this.createResult(g(this, $), this.options);
        if (
          (R(this, zn, g(this, $).state),
          R(this, Cr, this.options),
          g(this, zn).data !== void 0 && R(this, jr, g(this, $)),
          Ml(n, t))
        )
          return;
        R(this, Ce, n);
        const r = () => {
          if (!t) return !0;
          const { notifyOnChangeProps: i } = this.options,
            l = typeof i == 'function' ? i() : i;
          if (l === 'all' || (!l && !g(this, Nr).size)) return !0;
          const s = new Set(l ?? g(this, Nr));
          return (
            this.options.throwOnError && s.add('error'),
            Object.keys(g(this, Ce)).some((o) => {
              const a = o;
              return g(this, Ce)[a] !== t[a] && s.has(a);
            })
          );
        };
        U(this, V, Dd).call(this, { listeners: r() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && U(this, V, fo).call(this);
      }
    }),
    (Re = new WeakMap()),
    ($ = new WeakMap()),
    ($i = new WeakMap()),
    (Ce = new WeakMap()),
    (zn = new WeakMap()),
    (Cr = new WeakMap()),
    (Ht = new WeakMap()),
    (Kt = new WeakMap()),
    (Qi = new WeakMap()),
    (Er = new WeakMap()),
    (jr = new WeakMap()),
    (Ln = new WeakMap()),
    (Mn = new WeakMap()),
    (Gt = new WeakMap()),
    (Nr = new WeakMap()),
    (V = new WeakSet()),
    (Zr = function (t) {
      U(this, V, mo).call(this);
      let n = g(this, $).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(je)), n;
    }),
    (ao = function () {
      U(this, V, ho).call(this);
      const t = en(this.options.staleTime, g(this, $));
      if (Dn || g(this, Ce).isStale || !io(t)) return;
      const r = Pd(g(this, Ce).dataUpdatedAt, t) + 1;
      R(
        this,
        Ln,
        setTimeout(() => {
          g(this, Ce).isStale || this.updateResult();
        }, r)
      );
    }),
    (uo = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(g(this, $))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (co = function (t) {
      U(this, V, po).call(this),
        R(this, Gt, t),
        !(
          Dn ||
          nt(this.options.enabled, g(this, $)) === !1 ||
          !io(g(this, Gt)) ||
          g(this, Gt) === 0
        ) &&
          R(
            this,
            Mn,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || ka.isFocused()) &&
                  U(this, V, Zr).call(this);
              },
              g(this, Gt)
            )
          );
    }),
    (fo = function () {
      U(this, V, ao).call(this), U(this, V, co).call(this, U(this, V, uo).call(this));
    }),
    (ho = function () {
      g(this, Ln) && (clearTimeout(g(this, Ln)), R(this, Ln, void 0));
    }),
    (po = function () {
      g(this, Mn) && (clearInterval(g(this, Mn)), R(this, Mn, void 0));
    }),
    (mo = function () {
      const t = g(this, Re).getQueryCache().build(g(this, Re), this.options);
      if (t === g(this, $)) return;
      const n = g(this, $);
      R(this, $, t),
        R(this, $i, t.state),
        this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (Dd = function (t) {
      ae.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(g(this, Ce));
          }),
          g(this, Re)
            .getQueryCache()
            .notify({ query: g(this, $), type: 'observerResultsUpdated' });
      });
    }),
    hd);
function Xp(e, t) {
  return (
    nt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  );
}
function _u(e, t) {
  return Xp(e, t) || (e.state.data !== void 0 && go(e, t, t.refetchOnMount));
}
function go(e, t, n) {
  if (nt(t.enabled, e) !== !1 && en(t.staleTime, e) !== 'static') {
    const r = typeof n == 'function' ? n(e) : n;
    return r === 'always' || (r !== !1 && Ca(e, t));
  }
  return !1;
}
function Ru(e, t, n, r) {
  return (
    (e !== t || nt(r.enabled, e) === !1) && (!n.suspense || e.state.status !== 'error') && Ca(e, n)
  );
}
function Ca(e, t) {
  return nt(t.enabled, e) !== !1 && e.isStaleByTime(en(t.staleTime, e));
}
function Zp(e, t) {
  return !Ml(e.getCurrentResult(), t);
}
var qt,
  Yt,
  Oe,
  kt,
  Nt,
  wl,
  vo,
  pd,
  Jp =
    ((pd = class extends Ir {
      constructor(n, r) {
        super();
        L(this, Nt);
        L(this, qt);
        L(this, Yt);
        L(this, Oe);
        L(this, kt);
        R(this, qt, n), this.setOptions(r), this.bindMethods(), U(this, Nt, wl).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
      }
      setOptions(n) {
        var i;
        const r = this.options;
        (this.options = g(this, qt).defaultMutationOptions(n)),
          Ml(this.options, r) ||
            g(this, qt)
              .getMutationCache()
              .notify({ type: 'observerOptionsUpdated', mutation: g(this, Oe), observer: this }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          bn(r.mutationKey) !== bn(this.options.mutationKey)
            ? this.reset()
            : ((i = g(this, Oe)) == null ? void 0 : i.state.status) === 'pending' &&
              g(this, Oe).setOptions(this.options);
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() || (n = g(this, Oe)) == null || n.removeObserver(this);
      }
      onMutationUpdate(n) {
        U(this, Nt, wl).call(this), U(this, Nt, vo).call(this, n);
      }
      getCurrentResult() {
        return g(this, Yt);
      }
      reset() {
        var n;
        (n = g(this, Oe)) == null || n.removeObserver(this),
          R(this, Oe, void 0),
          U(this, Nt, wl).call(this),
          U(this, Nt, vo).call(this);
      }
      mutate(n, r) {
        var i;
        return (
          R(this, kt, r),
          (i = g(this, Oe)) == null || i.removeObserver(this),
          R(this, Oe, g(this, qt).getMutationCache().build(g(this, qt), this.options)),
          g(this, Oe).addObserver(this),
          g(this, Oe).execute(n)
        );
      }
    }),
    (qt = new WeakMap()),
    (Yt = new WeakMap()),
    (Oe = new WeakMap()),
    (kt = new WeakMap()),
    (Nt = new WeakSet()),
    (wl = function () {
      var r;
      const n = ((r = g(this, Oe)) == null ? void 0 : r.state) ?? Fd();
      R(this, Yt, {
        ...n,
        isPending: n.status === 'pending',
        isSuccess: n.status === 'success',
        isError: n.status === 'error',
        isIdle: n.status === 'idle',
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (vo = function (n) {
      ae.batch(() => {
        var r, i, l, s, o, a, u, m;
        if (g(this, kt) && this.hasListeners()) {
          const c = g(this, Yt).variables,
            p = g(this, Yt).context;
          (n == null ? void 0 : n.type) === 'success'
            ? ((i = (r = g(this, kt)).onSuccess) == null || i.call(r, n.data, c, p),
              (s = (l = g(this, kt)).onSettled) == null || s.call(l, n.data, null, c, p))
            : (n == null ? void 0 : n.type) === 'error' &&
              ((a = (o = g(this, kt)).onError) == null || a.call(o, n.error, c, p),
              (m = (u = g(this, kt)).onSettled) == null || m.call(u, void 0, n.error, c, p));
        }
        this.listeners.forEach((c) => {
          c(g(this, Yt));
        });
      });
    }),
    pd),
  bd = E.createContext(void 0),
  Vi = (e) => {
    const t = E.useContext(bd);
    if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  em = ({ client: e, children: t }) => (
    E.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    f.jsx(bd.Provider, { value: e, children: t })
  ),
  Ud = E.createContext(!1),
  tm = () => E.useContext(Ud);
Ud.Provider;
function nm() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var rm = E.createContext(nm()),
  im = () => E.useContext(rm),
  lm = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  sm = (e) => {
    E.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  om = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || Od(n, [e.error, r])),
  am = (e) => {
    if (e.suspense) {
      const t = (r) => (r === 'static' ? r : Math.max(r ?? 1e3, 1e3)),
        n = e.staleTime;
      (e.staleTime = typeof n == 'function' ? (...r) => t(n(...r)) : t(n)),
        typeof e.gcTime == 'number' && (e.gcTime = Math.max(e.gcTime, 1e3));
    }
  },
  um = (e, t) => e.isLoading && e.isFetching && !t,
  cm = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Ou = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function dm(e, t, n) {
  var c, p, x, w, y;
  const r = tm(),
    i = im(),
    l = Vi(),
    s = l.defaultQueryOptions(e);
  (p = (c = l.getDefaultOptions().queries) == null ? void 0 : c._experimental_beforeQuery) ==
    null || p.call(c, s),
    (s._optimisticResults = r ? 'isRestoring' : 'optimistic'),
    am(s),
    lm(s, i),
    sm(i);
  const o = !l.getQueryCache().get(s.queryHash),
    [a] = E.useState(() => new t(l, s)),
    u = a.getOptimisticResult(s),
    m = !r && e.subscribed !== !1;
  if (
    (E.useSyncExternalStore(
      E.useCallback(
        (S) => {
          const h = m ? a.subscribe(ae.batchCalls(S)) : je;
          return a.updateResult(), h;
        },
        [a, m]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    E.useEffect(() => {
      a.setOptions(s);
    }, [s, a]),
    cm(s, u))
  )
    throw Ou(s, a, i);
  if (
    om({
      result: u,
      errorResetBoundary: i,
      throwOnError: s.throwOnError,
      query: l.getQueryCache().get(s.queryHash),
      suspense: s.suspense,
    })
  )
    throw u.error;
  if (
    ((w = (x = l.getDefaultOptions().queries) == null ? void 0 : x._experimental_afterQuery) ==
      null || w.call(x, s, u),
    s.experimental_prefetchInRender && !Dn && um(u, r))
  ) {
    const S = o
      ? Ou(s, a, i)
      : (y = l.getQueryCache().get(s.queryHash)) == null
        ? void 0
        : y.promise;
    S == null ||
      S.catch(je).finally(() => {
        a.updateResult();
      });
  }
  return s.notifyOnChangeProps ? u : a.trackResult(u);
}
function Ad(e, t) {
  return dm(e, Yp);
}
function Fl(e, t) {
  const n = Vi(),
    [r] = E.useState(() => new Jp(n, e));
  E.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const i = E.useSyncExternalStore(
      E.useCallback((s) => r.subscribe(ae.batchCalls(s)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult()
    ),
    l = E.useCallback(
      (s, o) => {
        r.mutate(s, o).catch(je);
      },
      [r]
    );
  if (i.error && Od(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: l, mutateAsync: i.mutate };
}
var fm = function () {
    return null;
  },
  yo = {},
  $d = { exports: {} },
  $e = {},
  Qd = { exports: {} },
  Bd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, I) {
    var F = O.length;
    O.push(I);
    e: for (; 0 < F; ) {
      var B = (F - 1) >>> 1,
        ce = O[B];
      if (0 < i(ce, I)) (O[B] = I), (O[F] = ce), (F = B);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var I = O[0],
      F = O.pop();
    if (F !== I) {
      O[0] = F;
      e: for (var B = 0, ce = O.length, Xi = ce >>> 1; B < Xi; ) {
        var yn = 2 * (B + 1) - 1,
          Ps = O[yn],
          xn = yn + 1,
          Zi = O[xn];
        if (0 > i(Ps, F))
          xn < ce && 0 > i(Zi, Ps)
            ? ((O[B] = Zi), (O[xn] = F), (B = xn))
            : ((O[B] = Ps), (O[yn] = F), (B = yn));
        else if (xn < ce && 0 > i(Zi, F)) (O[B] = Zi), (O[xn] = F), (B = xn);
        else break e;
      }
    }
    return I;
  }
  function i(O, I) {
    var F = O.sortIndex - I.sortIndex;
    return F !== 0 ? F : O.id - I.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      o = s.now();
    e.unstable_now = function () {
      return s.now() - o;
    };
  }
  var a = [],
    u = [],
    m = 1,
    c = null,
    p = 3,
    x = !1,
    w = !1,
    y = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(O) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= O) r(u), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(u);
    }
  }
  function k(O) {
    if (((y = !1), v(O), !w))
      if (n(a) !== null) (w = !0), zt(j);
      else {
        var I = n(u);
        I !== null && Kn(k, I.startTime - O);
      }
  }
  function j(O, I) {
    (w = !1), y && ((y = !1), h(_), (_ = -1)), (x = !0);
    var F = p;
    try {
      for (v(I), c = n(a); c !== null && (!(c.expirationTime > I) || (O && !H())); ) {
        var B = c.callback;
        if (typeof B == 'function') {
          (c.callback = null), (p = c.priorityLevel);
          var ce = B(c.expirationTime <= I);
          (I = e.unstable_now()),
            typeof ce == 'function' ? (c.callback = ce) : c === n(a) && r(a),
            v(I);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var Xi = !0;
      else {
        var yn = n(u);
        yn !== null && Kn(k, yn.startTime - I), (Xi = !1);
      }
      return Xi;
    } finally {
      (c = null), (p = F), (x = !1);
    }
  }
  var C = !1,
    P = null,
    _ = -1,
    M = 5,
    z = -1;
  function H() {
    return !(e.unstable_now() - z < M);
  }
  function b() {
    if (P !== null) {
      var O = e.unstable_now();
      z = O;
      var I = !0;
      try {
        I = P(!0, O);
      } finally {
        I ? ge() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var ge;
  if (typeof d == 'function')
    ge = function () {
      d(b);
    };
  else if (typeof MessageChannel < 'u') {
    var ot = new MessageChannel(),
      at = ot.port2;
    (ot.port1.onmessage = b),
      (ge = function () {
        at.postMessage(null);
      });
  } else
    ge = function () {
      S(b, 0);
    };
  function zt(O) {
    (P = O), C || ((C = !0), ge());
  }
  function Kn(O, I) {
    _ = S(function () {
      O(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), zt(j));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var F = p;
      p = I;
      try {
        return O();
      } finally {
        p = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, I) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var F = p;
      p = O;
      try {
        return I();
      } finally {
        p = F;
      }
    }),
    (e.unstable_scheduleCallback = function (O, I, F) {
      var B = e.unstable_now();
      switch (
        (typeof F == 'object' && F !== null
          ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? B + F : B))
          : (F = B),
        O)
      ) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return (
        (ce = F + ce),
        (O = {
          id: m++,
          callback: I,
          priorityLevel: O,
          startTime: F,
          expirationTime: ce,
          sortIndex: -1,
        }),
        F > B
          ? ((O.sortIndex = F),
            t(u, O),
            n(a) === null && O === n(u) && (y ? (h(_), (_ = -1)) : (y = !0), Kn(k, F - B)))
          : ((O.sortIndex = ce), t(a, O), w || x || ((w = !0), zt(j))),
        O
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (O) {
      var I = p;
      return function () {
        var F = p;
        p = I;
        try {
          return O.apply(this, arguments);
        } finally {
          p = F;
        }
      };
    });
})(Bd);
Qd.exports = Bd;
var hm = Qd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pm = E,
  Ae = hm;
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Vd = new Set(),
  xi = {};
function Vn(e, t) {
  Pr(e, t), Pr(e + 'Capture', t);
}
function Pr(e, t) {
  for (xi[e] = t, e = 0; e < t.length; e++) Vd.add(t[e]);
}
var Pt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  xo = Object.prototype.hasOwnProperty,
  mm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tu = {},
  zu = {};
function gm(e) {
  return xo.call(zu, e) ? !0 : xo.call(Tu, e) ? !1 : mm.test(e) ? (zu[e] = !0) : ((Tu[e] = !0), !1);
}
function vm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function ym(e, t, n, r) {
  if (t === null || typeof t > 'u' || vm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var me = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    me[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  me[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  me[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  me[e] = new _e(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    me[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  me[e] = new _e(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  me[e] = new _e(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  me[e] = new _e(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  me[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ea = /[\-:]([a-z])/g;
function ja(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ea, ja);
    me[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ea, ja);
    me[t] = new _e(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ea, ja);
  me[t] = new _e(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  me[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new _e('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  me[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Na(e, t, n, r) {
  var i = me.hasOwnProperty(t) ? me[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (ym(t, n, i, r) && (n = null),
    r || i === null
      ? gm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nl = Symbol.for('react.element'),
  qn = Symbol.for('react.portal'),
  Yn = Symbol.for('react.fragment'),
  Pa = Symbol.for('react.strict_mode'),
  wo = Symbol.for('react.profiler'),
  Wd = Symbol.for('react.provider'),
  Hd = Symbol.for('react.context'),
  _a = Symbol.for('react.forward_ref'),
  So = Symbol.for('react.suspense'),
  ko = Symbol.for('react.suspense_list'),
  Ra = Symbol.for('react.memo'),
  Dt = Symbol.for('react.lazy'),
  Kd = Symbol.for('react.offscreen'),
  Lu = Symbol.iterator;
function $r(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Lu && e[Lu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ee = Object.assign,
  Ts;
function Jr(e) {
  if (Ts === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ts = (t && t[1]) || '';
    }
  return (
    `
` +
    Ts +
    e
  );
}
var zs = !1;
function Ls(e, t) {
  if (!e || zs) return '';
  zs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          o = l.length - 1;
        1 <= s && 0 <= o && i[s] !== l[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (i[s] !== l[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || i[s] !== l[o])) {
                var a =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    (zs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Jr(e) : '';
}
function xm(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr('Lazy');
    case 13:
      return Jr('Suspense');
    case 19:
      return Jr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ls(e.type, !1)), e;
    case 11:
      return (e = Ls(e.type.render, !1)), e;
    case 1:
      return (e = Ls(e.type, !0)), e;
    default:
      return '';
  }
}
function Co(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Yn:
      return 'Fragment';
    case qn:
      return 'Portal';
    case wo:
      return 'Profiler';
    case Pa:
      return 'StrictMode';
    case So:
      return 'Suspense';
    case ko:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Hd:
        return (e.displayName || 'Context') + '.Consumer';
      case Wd:
        return (e._context.displayName || 'Context') + '.Provider';
      case _a:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ra:
        return (t = e.displayName || null), t !== null ? t : Co(e.type) || 'Memo';
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return Co(e(t));
        } catch {}
    }
  return null;
}
function wm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Co(t);
    case 8:
      return t === Pa ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Gd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Sm(e) {
  var t = Gd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = '' + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rl(e) {
  e._valueTracker || (e._valueTracker = Sm(e));
}
function qd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Gd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Dl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Eo(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Yd(e, t) {
  (t = t.checked), t != null && Na(e, 'checked', t, !1);
}
function jo(e, t) {
  Yd(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? No(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && No(e, t.type, dn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Iu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function No(e, t, n) {
  (t !== 'number' || Dl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ei = Array.isArray;
function or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (ei(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function Xd(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Zd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function _o(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Zd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var il,
  Jd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        il = il || document.createElement('div'),
          il.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = il.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function wi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ii = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  km = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ii).forEach(function (e) {
  km.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ii[t] = ii[e]);
  });
});
function ef(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ii.hasOwnProperty(e) && ii[e])
      ? ('' + t).trim()
      : t + 'px';
}
function tf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = ef(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Cm = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ro(e, t) {
  if (t) {
    if (Cm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function Oo(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var To = null;
function Oa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zo = null,
  ar = null,
  ur = null;
function bu(e) {
  if ((e = Ki(e))) {
    if (typeof zo != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = ms(t)), zo(e.stateNode, e.type, t));
  }
}
function nf(e) {
  ar ? (ur ? ur.push(e) : (ur = [e])) : (ar = e);
}
function rf() {
  if (ar) {
    var e = ar,
      t = ur;
    if (((ur = ar = null), bu(e), t)) for (e = 0; e < t.length; e++) bu(t[e]);
  }
}
function lf(e, t) {
  return e(t);
}
function sf() {}
var Ms = !1;
function of(e, t, n) {
  if (Ms) return e(t, n);
  Ms = !0;
  try {
    return lf(e, t, n);
  } finally {
    (Ms = !1), (ar !== null || ur !== null) && (sf(), rf());
  }
}
function Si(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ms(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var Lo = !1;
if (Pt)
  try {
    var Qr = {};
    Object.defineProperty(Qr, 'passive', {
      get: function () {
        Lo = !0;
      },
    }),
      window.addEventListener('test', Qr, Qr),
      window.removeEventListener('test', Qr, Qr);
  } catch {
    Lo = !1;
  }
function Em(e, t, n, r, i, l, s, o, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var li = !1,
  bl = null,
  Ul = !1,
  Mo = null,
  jm = {
    onError: function (e) {
      (li = !0), (bl = e);
    },
  };
function Nm(e, t, n, r, i, l, s, o, a) {
  (li = !1), (bl = null), Em.apply(jm, arguments);
}
function Pm(e, t, n, r, i, l, s, o, a) {
  if ((Nm.apply(this, arguments), li)) {
    if (li) {
      var u = bl;
      (li = !1), (bl = null);
    } else throw Error(N(198));
    Ul || ((Ul = !0), (Mo = u));
  }
}
function Wn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function af(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Uu(e) {
  if (Wn(e) !== e) throw Error(N(188));
}
function _m(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Uu(i), e;
        if (l === r) return Uu(i), t;
        l = l.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, o = i.child; o; ) {
        if (o === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (o === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = l.child; o; ) {
          if (o === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (o === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function uf(e) {
  return (e = _m(e)), e !== null ? cf(e) : null;
}
function cf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var df = Ae.unstable_scheduleCallback,
  Au = Ae.unstable_cancelCallback,
  Rm = Ae.unstable_shouldYield,
  Om = Ae.unstable_requestPaint,
  ie = Ae.unstable_now,
  Tm = Ae.unstable_getCurrentPriorityLevel,
  Ta = Ae.unstable_ImmediatePriority,
  ff = Ae.unstable_UserBlockingPriority,
  Al = Ae.unstable_NormalPriority,
  zm = Ae.unstable_LowPriority,
  hf = Ae.unstable_IdlePriority,
  ds = null,
  mt = null;
function Lm(e) {
  if (mt && typeof mt.onCommitFiberRoot == 'function')
    try {
      mt.onCommitFiberRoot(ds, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : Fm,
  Mm = Math.log,
  Im = Math.LN2;
function Fm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mm(e) / Im) | 0)) | 0;
}
var ll = 64,
  sl = 4194304;
function ti(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $l(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var o = s & ~i;
    o !== 0 ? (r = ti(o)) : ((l &= s), l !== 0 && (r = ti(l)));
  } else (s = n & ~i), s !== 0 ? (r = ti(s)) : l !== 0 && (r = ti(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Dm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bm(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - it(l),
      o = 1 << s,
      a = i[s];
    a === -1 ? (!(o & n) || o & r) && (i[s] = Dm(o, t)) : a <= t && (e.expiredLanes |= o),
      (l &= ~o);
  }
}
function Io(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function pf() {
  var e = ll;
  return (ll <<= 1), !(ll & 4194240) && (ll = 64), e;
}
function Is(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function Um(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - it(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function za(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var W = 0;
function mf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gf,
  La,
  vf,
  yf,
  xf,
  Fo = !1,
  ol = [],
  tn = null,
  nn = null,
  rn = null,
  ki = new Map(),
  Ci = new Map(),
  Ut = [],
  Am =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function $u(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      nn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      rn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ki.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ci.delete(t.pointerId);
  }
}
function Br(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Ki(t)), t !== null && La(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function $m(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (tn = Br(tn, e, t, n, r, i)), !0;
    case 'dragenter':
      return (nn = Br(nn, e, t, n, r, i)), !0;
    case 'mouseover':
      return (rn = Br(rn, e, t, n, r, i)), !0;
    case 'pointerover':
      var l = i.pointerId;
      return ki.set(l, Br(ki.get(l) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (l = i.pointerId), Ci.set(l, Br(Ci.get(l) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function wf(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = Wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = af(n)), t !== null)) {
          (e.blockedOn = t),
            xf(e.priority, function () {
              vf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (To = r), n.target.dispatchEvent(r), (To = null);
    } else return (t = Ki(n)), t !== null && La(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qu(e, t, n) {
  Sl(e) && n.delete(t);
}
function Qm() {
  (Fo = !1),
    tn !== null && Sl(tn) && (tn = null),
    nn !== null && Sl(nn) && (nn = null),
    rn !== null && Sl(rn) && (rn = null),
    ki.forEach(Qu),
    Ci.forEach(Qu);
}
function Vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fo || ((Fo = !0), Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Qm)));
}
function Ei(e) {
  function t(i) {
    return Vr(i, e);
  }
  if (0 < ol.length) {
    Vr(ol[0], e);
    for (var n = 1; n < ol.length; n++) {
      var r = ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Vr(tn, e),
      nn !== null && Vr(nn, e),
      rn !== null && Vr(rn, e),
      ki.forEach(t),
      Ci.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    wf(n), n.blockedOn === null && Ut.shift();
}
var cr = Tt.ReactCurrentBatchConfig,
  Ql = !0;
function Bm(e, t, n, r) {
  var i = W,
    l = cr.transition;
  cr.transition = null;
  try {
    (W = 1), Ma(e, t, n, r);
  } finally {
    (W = i), (cr.transition = l);
  }
}
function Vm(e, t, n, r) {
  var i = W,
    l = cr.transition;
  cr.transition = null;
  try {
    (W = 4), Ma(e, t, n, r);
  } finally {
    (W = i), (cr.transition = l);
  }
}
function Ma(e, t, n, r) {
  if (Ql) {
    var i = Do(e, t, n, r);
    if (i === null) Ws(e, t, r, Bl, n), $u(e, r);
    else if ($m(i, e, t, n, r)) r.stopPropagation();
    else if (($u(e, r), t & 4 && -1 < Am.indexOf(e))) {
      for (; i !== null; ) {
        var l = Ki(i);
        if ((l !== null && gf(l), (l = Do(e, t, n, r)), l === null && Ws(e, t, r, Bl, n), l === i))
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else Ws(e, t, r, null, n);
  }
}
var Bl = null;
function Do(e, t, n, r) {
  if (((Bl = null), (e = Oa(r)), (e = kn(e)), e !== null))
    if (((t = Wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = af(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bl = e), null;
}
function Sf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Tm()) {
        case Ta:
          return 1;
        case ff:
          return 4;
        case Al:
        case zm:
          return 16;
        case hf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Ia = null,
  kl = null;
function kf() {
  if (kl) return kl;
  var e,
    t = Ia,
    n = t.length,
    r,
    i = 'value' in Xt ? Xt.value : Xt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (kl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Cl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function al() {
  return !0;
}
function Bu() {
  return !1;
}
function Qe(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var o in e) e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? al
        : Bu),
      (this.isPropagationStopped = Bu),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = al));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = al));
      },
      persist: function () {},
      isPersistent: al,
    }),
    t
  );
}
var Fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fa = Qe(Fr),
  Hi = ee({}, Fr, { view: 0, detail: 0 }),
  Wm = Qe(Hi),
  Fs,
  Ds,
  Wr,
  fs = ee({}, Hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Da,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Wr &&
            (Wr && e.type === 'mousemove'
              ? ((Fs = e.screenX - Wr.screenX), (Ds = e.screenY - Wr.screenY))
              : (Ds = Fs = 0),
            (Wr = e)),
          Fs);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ds;
    },
  }),
  Vu = Qe(fs),
  Hm = ee({}, fs, { dataTransfer: 0 }),
  Km = Qe(Hm),
  Gm = ee({}, Hi, { relatedTarget: 0 }),
  bs = Qe(Gm),
  qm = ee({}, Fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ym = Qe(qm),
  Xm = ee({}, Fr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Zm = Qe(Xm),
  Jm = ee({}, Fr, { data: 0 }),
  Wu = Qe(Jm),
  eg = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  tg = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  ng = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function rg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ng[e]) ? !!t[e] : !1;
}
function Da() {
  return rg;
}
var ig = ee({}, Hi, {
    key: function (e) {
      if (e.key) {
        var t = eg[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Cl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? tg[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Da,
    charCode: function (e) {
      return e.type === 'keypress' ? Cl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Cl(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  lg = Qe(ig),
  sg = ee({}, fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Hu = Qe(sg),
  og = ee({}, Hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Da,
  }),
  ag = Qe(og),
  ug = ee({}, Fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cg = Qe(ug),
  dg = ee({}, fs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fg = Qe(dg),
  hg = [9, 13, 27, 32],
  ba = Pt && 'CompositionEvent' in window,
  si = null;
Pt && 'documentMode' in document && (si = document.documentMode);
var pg = Pt && 'TextEvent' in window && !si,
  Cf = Pt && (!ba || (si && 8 < si && 11 >= si)),
  Ku = ' ',
  Gu = !1;
function Ef(e, t) {
  switch (e) {
    case 'keyup':
      return hg.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function jf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Xn = !1;
function mg(e, t) {
  switch (e) {
    case 'compositionend':
      return jf(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Gu = !0), Ku);
    case 'textInput':
      return (e = t.data), e === Ku && Gu ? null : e;
    default:
      return null;
  }
}
function gg(e, t) {
  if (Xn)
    return e === 'compositionend' || (!ba && Ef(e, t))
      ? ((e = kf()), (kl = Ia = Xt = null), (Xn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Cf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var vg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!vg[e.type] : t === 'textarea';
}
function Nf(e, t, n, r) {
  nf(r),
    (t = Vl(t, 'onChange')),
    0 < t.length &&
      ((n = new Fa('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var oi = null,
  ji = null;
function yg(e) {
  Df(e, 0);
}
function hs(e) {
  var t = er(e);
  if (qd(t)) return e;
}
function xg(e, t) {
  if (e === 'change') return t;
}
var Pf = !1;
if (Pt) {
  var Us;
  if (Pt) {
    var As = 'oninput' in document;
    if (!As) {
      var Yu = document.createElement('div');
      Yu.setAttribute('oninput', 'return;'), (As = typeof Yu.oninput == 'function');
    }
    Us = As;
  } else Us = !1;
  Pf = Us && (!document.documentMode || 9 < document.documentMode);
}
function Xu() {
  oi && (oi.detachEvent('onpropertychange', _f), (ji = oi = null));
}
function _f(e) {
  if (e.propertyName === 'value' && hs(ji)) {
    var t = [];
    Nf(t, ji, e, Oa(e)), of(yg, t);
  }
}
function wg(e, t, n) {
  e === 'focusin'
    ? (Xu(), (oi = t), (ji = n), oi.attachEvent('onpropertychange', _f))
    : e === 'focusout' && Xu();
}
function Sg(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return hs(ji);
}
function kg(e, t) {
  if (e === 'click') return hs(t);
}
function Cg(e, t) {
  if (e === 'input' || e === 'change') return hs(t);
}
function Eg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == 'function' ? Object.is : Eg;
function Ni(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!xo.call(t, i) || !st(e[i], t[i])) return !1;
  }
  return !0;
}
function Zu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ju(e, t) {
  var n = Zu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Zu(n);
  }
}
function Rf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Rf(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Of() {
  for (var e = window, t = Dl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dl(e.document);
  }
  return t;
}
function Ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function jg(e) {
  var t = Of(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Rf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ua(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Ju(n, l));
        var s = Ju(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Ng = Pt && 'documentMode' in document && 11 >= document.documentMode,
  Zn = null,
  bo = null,
  ai = null,
  Uo = !1;
function ec(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Uo ||
    Zn == null ||
    Zn !== Dl(r) ||
    ((r = Zn),
    'selectionStart' in r && Ua(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ai && Ni(ai, r)) ||
      ((ai = r),
      (r = Vl(bo, 'onSelect')),
      0 < r.length &&
        ((t = new Fa('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zn))));
}
function ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Jn = {
    animationend: ul('Animation', 'AnimationEnd'),
    animationiteration: ul('Animation', 'AnimationIteration'),
    animationstart: ul('Animation', 'AnimationStart'),
    transitionend: ul('Transition', 'TransitionEnd'),
  },
  $s = {},
  Tf = {};
Pt &&
  ((Tf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Jn.animationend.animation,
    delete Jn.animationiteration.animation,
    delete Jn.animationstart.animation),
  'TransitionEvent' in window || delete Jn.transitionend.transition);
function ps(e) {
  if ($s[e]) return $s[e];
  if (!Jn[e]) return e;
  var t = Jn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tf) return ($s[e] = t[n]);
  return e;
}
var zf = ps('animationend'),
  Lf = ps('animationiteration'),
  Mf = ps('animationstart'),
  If = ps('transitionend'),
  Ff = new Map(),
  tc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function hn(e, t) {
  Ff.set(e, t), Vn(t, [e]);
}
for (var Qs = 0; Qs < tc.length; Qs++) {
  var Bs = tc[Qs],
    Pg = Bs.toLowerCase(),
    _g = Bs[0].toUpperCase() + Bs.slice(1);
  hn(Pg, 'on' + _g);
}
hn(zf, 'onAnimationEnd');
hn(Lf, 'onAnimationIteration');
hn(Mf, 'onAnimationStart');
hn('dblclick', 'onDoubleClick');
hn('focusin', 'onFocus');
hn('focusout', 'onBlur');
hn(If, 'onTransitionEnd');
Pr('onMouseEnter', ['mouseout', 'mouseover']);
Pr('onMouseLeave', ['mouseout', 'mouseover']);
Pr('onPointerEnter', ['pointerout', 'pointerover']);
Pr('onPointerLeave', ['pointerout', 'pointerover']);
Vn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Vn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
Vn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Vn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Vn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Vn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var ni =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Rg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ni));
function nc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Pm(r, t, void 0, e), (e.currentTarget = null);
}
function Df(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var o = r[s],
            a = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), a !== l && i.isPropagationStopped())) break e;
          nc(i, o, u), (l = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((o = r[s]),
            (a = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            a !== l && i.isPropagationStopped())
          )
            break e;
          nc(i, o, u), (l = a);
        }
    }
  }
  if (Ul) throw ((e = Mo), (Ul = !1), (Mo = null), e);
}
function q(e, t) {
  var n = t[Vo];
  n === void 0 && (n = t[Vo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (bf(t, e, 2, !1), n.add(r));
}
function Vs(e, t, n) {
  var r = 0;
  t && (r |= 4), bf(n, e, r, t);
}
var cl = '_reactListening' + Math.random().toString(36).slice(2);
function Pi(e) {
  if (!e[cl]) {
    (e[cl] = !0),
      Vd.forEach(function (n) {
        n !== 'selectionchange' && (Rg.has(n) || Vs(n, !1, e), Vs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cl] || ((t[cl] = !0), Vs('selectionchange', !1, t));
  }
}
function bf(e, t, n, r) {
  switch (Sf(t)) {
    case 1:
      var i = Bm;
      break;
    case 4:
      i = Vm;
      break;
    default:
      i = Ma;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Lo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Ws(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo), a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = kn(o)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = l = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  of(function () {
    var u = l,
      m = Oa(n),
      c = [];
    e: {
      var p = Ff.get(e);
      if (p !== void 0) {
        var x = Fa,
          w = e;
        switch (e) {
          case 'keypress':
            if (Cl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = lg;
            break;
          case 'focusin':
            (w = 'focus'), (x = bs);
            break;
          case 'focusout':
            (w = 'blur'), (x = bs);
            break;
          case 'beforeblur':
          case 'afterblur':
            x = bs;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = Vu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Km;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = ag;
            break;
          case zf:
          case Lf:
          case Mf:
            x = Ym;
            break;
          case If:
            x = cg;
            break;
          case 'scroll':
            x = Wm;
            break;
          case 'wheel':
            x = fg;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = Zm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Hu;
        }
        var y = (t & 4) !== 0,
          S = !y && e === 'scroll',
          h = y ? (p !== null ? p + 'Capture' : null) : p;
        y = [];
        for (var d = u, v; d !== null; ) {
          v = d;
          var k = v.stateNode;
          if (
            (v.tag === 5 &&
              k !== null &&
              ((v = k), h !== null && ((k = Si(d, h)), k != null && y.push(_i(d, k, v)))),
            S)
          )
            break;
          d = d.return;
        }
        0 < y.length && ((p = new x(p, w, null, n, m)), c.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          p && n !== To && (w = n.relatedTarget || n.fromElement) && (kn(w) || w[_t]))
        )
          break e;
        if (
          (x || p) &&
          ((p =
            m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = u),
              (w = w ? kn(w) : null),
              w !== null && ((S = Wn(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) && (w = null))
            : ((x = null), (w = u)),
          x !== w)
        ) {
          if (
            ((y = Vu),
            (k = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Hu), (k = 'onPointerLeave'), (h = 'onPointerEnter'), (d = 'pointer')),
            (S = x == null ? p : er(x)),
            (v = w == null ? p : er(w)),
            (p = new y(k, d + 'leave', x, n, m)),
            (p.target = S),
            (p.relatedTarget = v),
            (k = null),
            kn(m) === u &&
              ((y = new y(h, d + 'enter', w, n, m)),
              (y.target = v),
              (y.relatedTarget = S),
              (k = y)),
            (S = k),
            x && w)
          )
            t: {
              for (y = x, h = w, d = 0, v = y; v; v = Gn(v)) d++;
              for (v = 0, k = h; k; k = Gn(k)) v++;
              for (; 0 < d - v; ) (y = Gn(y)), d--;
              for (; 0 < v - d; ) (h = Gn(h)), v--;
              for (; d--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = Gn(y)), (h = Gn(h));
              }
              y = null;
            }
          else y = null;
          x !== null && rc(c, p, x, y, !1), w !== null && S !== null && rc(c, S, w, y, !0);
        }
      }
      e: {
        if (
          ((p = u ? er(u) : window),
          (x = p.nodeName && p.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && p.type === 'file'))
        )
          var j = xg;
        else if (qu(p))
          if (Pf) j = Cg;
          else {
            j = Sg;
            var C = wg;
          }
        else
          (x = p.nodeName) &&
            x.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (j = kg);
        if (j && (j = j(e, u))) {
          Nf(c, j, n, m);
          break e;
        }
        C && C(e, p, u),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            No(p, 'number', p.value);
      }
      switch (((C = u ? er(u) : window), e)) {
        case 'focusin':
          (qu(C) || C.contentEditable === 'true') && ((Zn = C), (bo = u), (ai = null));
          break;
        case 'focusout':
          ai = bo = Zn = null;
          break;
        case 'mousedown':
          Uo = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Uo = !1), ec(c, n, m);
          break;
        case 'selectionchange':
          if (Ng) break;
        case 'keydown':
        case 'keyup':
          ec(c, n, m);
      }
      var P;
      if (ba)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        Xn
          ? Ef(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (Cf &&
          n.locale !== 'ko' &&
          (Xn || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Xn && (P = kf())
            : ((Xt = m), (Ia = 'value' in Xt ? Xt.value : Xt.textContent), (Xn = !0))),
        (C = Vl(u, _)),
        0 < C.length &&
          ((_ = new Wu(_, e, null, n, m)),
          c.push({ event: _, listeners: C }),
          P ? (_.data = P) : ((P = jf(n)), P !== null && (_.data = P)))),
        (P = pg ? mg(e, n) : gg(e, n)) &&
          ((u = Vl(u, 'onBeforeInput')),
          0 < u.length &&
            ((m = new Wu('onBeforeInput', 'beforeinput', null, n, m)),
            c.push({ event: m, listeners: u }),
            (m.data = P)));
    }
    Df(c, t);
  });
}
function _i(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Si(e, n)),
      l != null && r.unshift(_i(e, l, i)),
      (l = Si(e, t)),
      l != null && r.push(_i(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rc(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      u = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((a = Si(n, l)), a != null && s.unshift(_i(n, a, o)))
        : i || ((a = Si(n, l)), a != null && s.push(_i(n, a, o)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Og = /\r\n?/g,
  Tg = /\u0000|\uFFFD/g;
function ic(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Og,
      `
`
    )
    .replace(Tg, '');
}
function dl(e, t, n) {
  if (((t = ic(t)), ic(e) !== t && n)) throw Error(N(425));
}
function Wl() {}
var Ao = null,
  $o = null;
function Qo(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bo = typeof setTimeout == 'function' ? setTimeout : void 0,
  zg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  lc = typeof Promise == 'function' ? Promise : void 0,
  Lg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof lc < 'u'
        ? function (e) {
            return lc.resolve(null).then(e).catch(Mg);
          }
        : Bo;
function Mg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ei(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Ei(t);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function sc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Dr = Math.random().toString(36).slice(2),
  pt = '__reactFiber$' + Dr,
  Ri = '__reactProps$' + Dr,
  _t = '__reactContainer$' + Dr,
  Vo = '__reactEvents$' + Dr,
  Ig = '__reactListeners$' + Dr,
  Fg = '__reactHandles$' + Dr;
function kn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[pt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = sc(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = sc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ki(e) {
  return (
    (e = e[pt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function ms(e) {
  return e[Ri] || null;
}
var Wo = [],
  tr = -1;
function pn(e) {
  return { current: e };
}
function Y(e) {
  0 > tr || ((e.current = Wo[tr]), (Wo[tr] = null), tr--);
}
function K(e, t) {
  tr++, (Wo[tr] = e.current), (e.current = t);
}
var fn = {},
  Se = pn(fn),
  Me = pn(!1),
  Un = fn;
function _r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function Hl() {
  Y(Me), Y(Se);
}
function oc(e, t, n) {
  if (Se.current !== fn) throw Error(N(168));
  K(Se, t), K(Me, n);
}
function Uf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, wm(e) || 'Unknown', i));
  return ee({}, n, r);
}
function Kl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (Un = Se.current),
    K(Se, e),
    K(Me, Me.current),
    !0
  );
}
function ac(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Uf(e, t, Un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Me),
      Y(Se),
      K(Se, e))
    : Y(Me),
    K(Me, n);
}
var wt = null,
  gs = !1,
  Ks = !1;
function Af(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function Dg(e) {
  (gs = !0), Af(e);
}
function mn() {
  if (!Ks && wt !== null) {
    Ks = !0;
    var e = 0,
      t = W;
    try {
      var n = wt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (gs = !1);
    } catch (i) {
      throw (wt !== null && (wt = wt.slice(e + 1)), df(Ta, mn), i);
    } finally {
      (W = t), (Ks = !1);
    }
  }
  return null;
}
var nr = [],
  rr = 0,
  Gl = null,
  ql = 0,
  Ve = [],
  We = 0,
  An = null,
  Ct = 1,
  Et = '';
function wn(e, t) {
  (nr[rr++] = ql), (nr[rr++] = Gl), (Gl = e), (ql = t);
}
function $f(e, t, n) {
  (Ve[We++] = Ct), (Ve[We++] = Et), (Ve[We++] = An), (An = e);
  var r = Ct;
  e = Et;
  var i = 32 - it(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - it(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Ct = (1 << (32 - it(t) + i)) | (n << i) | r),
      (Et = l + e);
  } else (Ct = (1 << l) | (n << i) | r), (Et = e);
}
function Aa(e) {
  e.return !== null && (wn(e, 1), $f(e, 1, 0));
}
function $a(e) {
  for (; e === Gl; ) (Gl = nr[--rr]), (nr[rr] = null), (ql = nr[--rr]), (nr[rr] = null);
  for (; e === An; )
    (An = Ve[--We]),
      (Ve[We] = null),
      (Et = Ve[--We]),
      (Ve[We] = null),
      (Ct = Ve[--We]),
      (Ve[We] = null);
}
var Ue = null,
  be = null,
  X = !1,
  rt = null;
function Qf(e, t) {
  var n = He(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function uc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (be = ln(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = An !== null ? { id: Ct, overflow: Et } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ko(e) {
  if (X) {
    var t = be;
    if (t) {
      var n = t;
      if (!uc(e, t)) {
        if (Ho(e)) throw Error(N(418));
        t = ln(n.nextSibling);
        var r = Ue;
        t && uc(e, t) ? Qf(r, n) : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ue = e));
      }
    } else {
      if (Ho(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Ue = e);
    }
  }
}
function cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function fl(e) {
  if (e !== Ue) return !1;
  if (!X) return cc(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Qo(e.type, e.memoizedProps))),
    t && (t = be))
  ) {
    if (Ho(e)) throw (Bf(), Error(N(418)));
    for (; t; ) Qf(e, t), (t = ln(t.nextSibling));
  }
  if ((cc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              be = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = Ue ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Bf() {
  for (var e = be; e; ) e = ln(e.nextSibling);
}
function Rr() {
  (be = Ue = null), (X = !1);
}
function Qa(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var bg = Tt.ReactCurrentBatchConfig;
function Hr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        l = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var o = i.refs;
            s === null ? delete o[l] : (o[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function hl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  );
}
function dc(e) {
  var t = e._init;
  return t(e._payload);
}
function Vf(e) {
  function t(h, d) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [d]), (h.flags |= 16)) : v.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function i(h, d) {
    return (h = un(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, d, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null ? ((v = v.index), v < d ? ((h.flags |= 2), d) : v) : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function o(h, d, v, k) {
    return d === null || d.tag !== 6
      ? ((d = eo(v, h.mode, k)), (d.return = h), d)
      : ((d = i(d, v)), (d.return = h), d);
  }
  function a(h, d, v, k) {
    var j = v.type;
    return j === Yn
      ? m(h, d, v.props.children, k, v.key)
      : d !== null &&
          (d.elementType === j ||
            (typeof j == 'object' && j !== null && j.$$typeof === Dt && dc(j) === d.type))
        ? ((k = i(d, v.props)), (k.ref = Hr(h, d, v)), (k.return = h), k)
        : ((k = Ol(v.type, v.key, v.props, null, h.mode, k)),
          (k.ref = Hr(h, d, v)),
          (k.return = h),
          k);
  }
  function u(h, d, v, k) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = to(v, h.mode, k)), (d.return = h), d)
      : ((d = i(d, v.children || [])), (d.return = h), d);
  }
  function m(h, d, v, k, j) {
    return d === null || d.tag !== 7
      ? ((d = Fn(v, h.mode, k, j)), (d.return = h), d)
      : ((d = i(d, v)), (d.return = h), d);
  }
  function c(h, d, v) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = eo('' + d, h.mode, v)), (d.return = h), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case nl:
          return (
            (v = Ol(d.type, d.key, d.props, null, h.mode, v)),
            (v.ref = Hr(h, null, d)),
            (v.return = h),
            v
          );
        case qn:
          return (d = to(d, h.mode, v)), (d.return = h), d;
        case Dt:
          var k = d._init;
          return c(h, k(d._payload), v);
      }
      if (ei(d) || $r(d)) return (d = Fn(d, h.mode, v, null)), (d.return = h), d;
      hl(h, d);
    }
    return null;
  }
  function p(h, d, v, k) {
    var j = d !== null ? d.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return j !== null ? null : o(h, d, '' + v, k);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case nl:
          return v.key === j ? a(h, d, v, k) : null;
        case qn:
          return v.key === j ? u(h, d, v, k) : null;
        case Dt:
          return (j = v._init), p(h, d, j(v._payload), k);
      }
      if (ei(v) || $r(v)) return j !== null ? null : m(h, d, v, k, null);
      hl(h, v);
    }
    return null;
  }
  function x(h, d, v, k, j) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (h = h.get(v) || null), o(d, h, '' + k, j);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case nl:
          return (h = h.get(k.key === null ? v : k.key) || null), a(d, h, k, j);
        case qn:
          return (h = h.get(k.key === null ? v : k.key) || null), u(d, h, k, j);
        case Dt:
          var C = k._init;
          return x(h, d, v, C(k._payload), j);
      }
      if (ei(k) || $r(k)) return (h = h.get(v) || null), m(d, h, k, j, null);
      hl(d, k);
    }
    return null;
  }
  function w(h, d, v, k) {
    for (var j = null, C = null, P = d, _ = (d = 0), M = null; P !== null && _ < v.length; _++) {
      P.index > _ ? ((M = P), (P = null)) : (M = P.sibling);
      var z = p(h, P, v[_], k);
      if (z === null) {
        P === null && (P = M);
        break;
      }
      e && P && z.alternate === null && t(h, P),
        (d = l(z, d, _)),
        C === null ? (j = z) : (C.sibling = z),
        (C = z),
        (P = M);
    }
    if (_ === v.length) return n(h, P), X && wn(h, _), j;
    if (P === null) {
      for (; _ < v.length; _++)
        (P = c(h, v[_], k)),
          P !== null && ((d = l(P, d, _)), C === null ? (j = P) : (C.sibling = P), (C = P));
      return X && wn(h, _), j;
    }
    for (P = r(h, P); _ < v.length; _++)
      (M = x(P, h, _, v[_], k)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? _ : M.key),
          (d = l(M, d, _)),
          C === null ? (j = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        P.forEach(function (H) {
          return t(h, H);
        }),
      X && wn(h, _),
      j
    );
  }
  function y(h, d, v, k) {
    var j = $r(v);
    if (typeof j != 'function') throw Error(N(150));
    if (((v = j.call(v)), v == null)) throw Error(N(151));
    for (
      var C = (j = null), P = d, _ = (d = 0), M = null, z = v.next();
      P !== null && !z.done;
      _++, z = v.next()
    ) {
      P.index > _ ? ((M = P), (P = null)) : (M = P.sibling);
      var H = p(h, P, z.value, k);
      if (H === null) {
        P === null && (P = M);
        break;
      }
      e && P && H.alternate === null && t(h, P),
        (d = l(H, d, _)),
        C === null ? (j = H) : (C.sibling = H),
        (C = H),
        (P = M);
    }
    if (z.done) return n(h, P), X && wn(h, _), j;
    if (P === null) {
      for (; !z.done; _++, z = v.next())
        (z = c(h, z.value, k)),
          z !== null && ((d = l(z, d, _)), C === null ? (j = z) : (C.sibling = z), (C = z));
      return X && wn(h, _), j;
    }
    for (P = r(h, P); !z.done; _++, z = v.next())
      (z = x(P, h, _, z.value, k)),
        z !== null &&
          (e && z.alternate !== null && P.delete(z.key === null ? _ : z.key),
          (d = l(z, d, _)),
          C === null ? (j = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        P.forEach(function (b) {
          return t(h, b);
        }),
      X && wn(h, _),
      j
    );
  }
  function S(h, d, v, k) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Yn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case nl:
          e: {
            for (var j = v.key, C = d; C !== null; ) {
              if (C.key === j) {
                if (((j = v.type), j === Yn)) {
                  if (C.tag === 7) {
                    n(h, C.sibling), (d = i(C, v.props.children)), (d.return = h), (h = d);
                    break e;
                  }
                } else if (
                  C.elementType === j ||
                  (typeof j == 'object' && j !== null && j.$$typeof === Dt && dc(j) === C.type)
                ) {
                  n(h, C.sibling),
                    (d = i(C, v.props)),
                    (d.ref = Hr(h, C, v)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            v.type === Yn
              ? ((d = Fn(v.props.children, h.mode, k, v.key)), (d.return = h), (h = d))
              : ((k = Ol(v.type, v.key, v.props, null, h.mode, k)),
                (k.ref = Hr(h, d, v)),
                (k.return = h),
                (h = k));
          }
          return s(h);
        case qn:
          e: {
            for (C = v.key; d !== null; ) {
              if (d.key === C)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(h, d.sibling), (d = i(d, v.children || [])), (d.return = h), (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = to(v, h.mode, k)), (d.return = h), (h = d);
          }
          return s(h);
        case Dt:
          return (C = v._init), S(h, d, C(v._payload), k);
      }
      if (ei(v)) return w(h, d, v, k);
      if ($r(v)) return y(h, d, v, k);
      hl(h, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = i(d, v)), (d.return = h), (h = d))
          : (n(h, d), (d = eo(v, h.mode, k)), (d.return = h), (h = d)),
        s(h))
      : n(h, d);
  }
  return S;
}
var Or = Vf(!0),
  Wf = Vf(!1),
  Yl = pn(null),
  Xl = null,
  ir = null,
  Ba = null;
function Va() {
  Ba = ir = Xl = null;
}
function Wa(e) {
  var t = Yl.current;
  Y(Yl), (e._currentValue = t);
}
function Go(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dr(e, t) {
  (Xl = e),
    (Ba = ir = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ir === null)) {
      if (Xl === null) throw Error(N(308));
      (ir = e), (Xl.dependencies = { lanes: 0, firstContext: e });
    } else ir = ir.next = e;
  return t;
}
var Cn = null;
function Ha(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function Hf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ha(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var bt = !1;
function Ka(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Rt(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ha(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function El(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), za(e, n);
  }
}
function fc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zl(e, t, n, r) {
  var i = e.updateQueue;
  bt = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var a = o,
      u = a.next;
    (a.next = null), s === null ? (l = u) : (s.next = u), (s = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (o = m.lastBaseUpdate),
      o !== s && (o === null ? (m.firstBaseUpdate = u) : (o.next = u), (m.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var c = i.baseState;
    (s = 0), (m = u = a = null), (o = l);
    do {
      var p = o.lane,
        x = o.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            y = o;
          switch (((p = t), (x = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == 'function')) {
                c = w.call(x, c, p);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = y.payload), (p = typeof w == 'function' ? w.call(x, c, p) : w), p == null))
                break e;
              c = ee({}, c, p);
              break e;
            case 2:
              bt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64), (p = i.effects), p === null ? (i.effects = [o]) : p.push(o));
      } else
        (x = {
          eventTime: x,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((u = m = x), (a = c)) : (m = m.next = x),
          (s |= p);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (p = o), (o = p.next), (p.next = null), (i.lastBaseUpdate = p), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = c),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Qn |= s), (e.lanes = s), (e.memoizedState = c);
  }
}
function hc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(N(191, i));
        i.call(r);
      }
    }
}
var Gi = {},
  gt = pn(Gi),
  Oi = pn(Gi),
  Ti = pn(Gi);
function En(e) {
  if (e === Gi) throw Error(N(174));
  return e;
}
function Ga(e, t) {
  switch ((K(Ti, t), K(Oi, e), K(gt, Gi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _o(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _o(t, e));
  }
  Y(gt), K(gt, t);
}
function Tr() {
  Y(gt), Y(Oi), Y(Ti);
}
function Gf(e) {
  En(Ti.current);
  var t = En(gt.current),
    n = _o(t, e.type);
  t !== n && (K(Oi, e), K(gt, n));
}
function qa(e) {
  Oi.current === e && (Y(gt), Y(Oi));
}
var Z = pn(0);
function Jl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gs = [];
function Ya() {
  for (var e = 0; e < Gs.length; e++) Gs[e]._workInProgressVersionPrimary = null;
  Gs.length = 0;
}
var jl = Tt.ReactCurrentDispatcher,
  qs = Tt.ReactCurrentBatchConfig,
  $n = 0,
  J = null,
  oe = null,
  de = null,
  es = !1,
  ui = !1,
  zi = 0,
  Ug = 0;
function ve() {
  throw Error(N(321));
}
function Xa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!st(e[n], t[n])) return !1;
  return !0;
}
function Za(e, t, n, r, i, l) {
  if (
    (($n = l),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jl.current = e === null || e.memoizedState === null ? Bg : Vg),
    (e = n(r, i)),
    ui)
  ) {
    l = 0;
    do {
      if (((ui = !1), (zi = 0), 25 <= l)) throw Error(N(301));
      (l += 1), (de = oe = null), (t.updateQueue = null), (jl.current = Wg), (e = n(r, i));
    } while (ui);
  }
  if (
    ((jl.current = ts),
    (t = oe !== null && oe.next !== null),
    ($n = 0),
    (de = oe = J = null),
    (es = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Ja() {
  var e = zi !== 0;
  return (zi = 0), e;
}
function ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? (J.memoizedState = de = e) : (de = de.next = e), de;
}
function qe() {
  if (oe === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = de === null ? J.memoizedState : de.next;
  if (t !== null) (de = t), (oe = e);
  else {
    if (e === null) throw Error(N(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      de === null ? (J.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function Li(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ys(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = oe,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var o = (s = null),
      a = null,
      u = l;
    do {
      var m = u.lane;
      if (($n & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((o = a = c), (s = r)) : (a = a.next = c), (J.lanes |= m), (Qn |= m);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (s = r) : (a.next = o),
      st(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (J.lanes |= l), (Qn |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xs(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    st(l, t.memoizedState) || (Le = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function qf() {}
function Yf(e, t) {
  var n = J,
    r = qe(),
    i = t(),
    l = !st(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (Le = !0)),
    (r = r.queue),
    eu(Jf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Mi(9, Zf.bind(null, n, r, i, t), void 0, null), fe === null))
      throw Error(N(349));
    $n & 30 || Xf(n, t, i);
  }
  return i;
}
function Xf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (J.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), eh(t) && th(e);
}
function Jf(e, t, n) {
  return n(function () {
    eh(t) && th(e);
  });
}
function eh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function th(e) {
  var t = Rt(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function pc(e) {
  var t = ct();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Li,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qg.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (J.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nh() {
  return qe().memoizedState;
}
function Nl(e, t, n, r) {
  var i = ct();
  (J.flags |= e), (i.memoizedState = Mi(1 | t, n, void 0, r === void 0 ? null : r));
}
function vs(e, t, n, r) {
  var i = qe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (oe !== null) {
    var s = oe.memoizedState;
    if (((l = s.destroy), r !== null && Xa(r, s.deps))) {
      i.memoizedState = Mi(t, n, l, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = Mi(1 | t, n, l, r));
}
function mc(e, t) {
  return Nl(8390656, 8, e, t);
}
function eu(e, t) {
  return vs(2048, 8, e, t);
}
function rh(e, t) {
  return vs(4, 2, e, t);
}
function ih(e, t) {
  return vs(4, 4, e, t);
}
function lh(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), vs(4, 4, lh.bind(null, t, e), n);
}
function tu() {}
function oh(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xa(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function ah(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uh(e, t, n) {
  return $n & 21
    ? (st(n, t) || ((n = pf()), (J.lanes |= n), (Qn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Ag(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = qs.transition;
  qs.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (qs.transition = r);
  }
}
function ch() {
  return qe().memoizedState;
}
function $g(e, t, n) {
  var r = an(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), dh(e)))
    fh(t, n);
  else if (((n = Hf(e, t, n, r)), n !== null)) {
    var i = Ne();
    lt(n, e, r, i), hh(n, t, r);
  }
}
function Qg(e, t, n) {
  var r = an(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dh(e)) fh(t, i);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
      try {
        var s = t.lastRenderedState,
          o = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), st(o, s))) {
          var a = t.interleaved;
          a === null ? ((i.next = i), Ha(t)) : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hf(e, t, i, r)), n !== null && ((i = Ne()), lt(n, e, r, i), hh(n, t, r));
  }
}
function dh(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function fh(e, t) {
  ui = es = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function hh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), za(e, n);
  }
}
var ts = {
    readContext: Ge,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Bg = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: mc,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Nl(4194308, 4, lh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = $g.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: pc,
    useDebugValue: tu,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = pc(!1),
        t = e[0];
      return (e = Ag.bind(null, e[1])), (ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = ct();
      if (X) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(N(349));
        $n & 30 || Xf(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        mc(Jf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Mi(9, Zf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = fe.identifierPrefix;
      if (X) {
        var n = Et,
          r = Ct;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = zi++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Ug++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vg = {
    readContext: Ge,
    useCallback: oh,
    useContext: Ge,
    useEffect: eu,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: ih,
    useMemo: ah,
    useReducer: Ys,
    useRef: nh,
    useState: function () {
      return Ys(Li);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = qe();
      return uh(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ys(Li)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: qf,
    useSyncExternalStore: Yf,
    useId: ch,
    unstable_isNewReconciler: !1,
  },
  Wg = {
    readContext: Ge,
    useCallback: oh,
    useContext: Ge,
    useEffect: eu,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: ih,
    useMemo: ah,
    useReducer: Xs,
    useRef: nh,
    useState: function () {
      return Xs(Li);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = qe();
      return oe === null ? (t.memoizedState = e) : uh(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Xs(Li)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: qf,
    useSyncExternalStore: Yf,
    useId: ch,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ys = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = an(e),
      l = jt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = sn(e, l, i)),
      t !== null && (lt(t, e, i, r), El(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = an(e),
      l = jt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = sn(e, l, i)),
      t !== null && (lt(t, e, i, r), El(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = an(e),
      i = jt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = sn(e, i, r)),
      t !== null && (lt(t, e, r, n), El(t, e, r));
  },
};
function gc(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ni(n, r) || !Ni(i, l)
        : !0
  );
}
function ph(e, t, n) {
  var r = !1,
    i = fn,
    l = t.contextType;
  return (
    typeof l == 'object' && l !== null
      ? (l = Ge(l))
      : ((i = Ie(t) ? Un : Se.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? _r(e, i) : fn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ys),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function vc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ys.enqueueReplaceState(t, t.state, null);
}
function Yo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ka(e);
  var l = t.contextType;
  typeof l == 'object' && l !== null
    ? (i.context = Ge(l))
    : ((l = Ie(t) ? Un : Se.current), (i.context = _r(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (qo(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && ys.enqueueReplaceState(i, i.state, null),
      Zl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function zr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += xm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Zs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Hg = typeof WeakMap == 'function' ? WeakMap : Map;
function mh(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      rs || ((rs = !0), (oa = r)), Xo(e, t);
    }),
    n
  );
}
function gh(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Xo(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        Xo(e, t), typeof r != 'function' && (on === null ? (on = new Set([this])) : on.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
      }),
    n
  );
}
function yc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = sv.bind(null, e, t, n)), t.then(e, e));
}
function xc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = jt(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Kg = Tt.ReactCurrentOwner,
  Le = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Wf(t, null, n, r) : Or(t, e.child, n, r);
}
function Sc(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    dr(t, i),
    (r = Za(e, t, n, r, l, i)),
    (n = Ja()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ot(e, t, i))
      : (X && n && Aa(t), (t.flags |= 1), Ee(e, t, r, i), t.child)
  );
}
function kc(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == 'function' &&
      !uu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), vh(e, t, l, r, i))
      : ((e = Ol(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ni), n(s, r) && e.ref === t.ref))
      return Ot(e, t, i);
  }
  return (t.flags |= 1), (e = un(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function vh(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Ni(l, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0)) e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Ot(e, t, i);
  }
  return Zo(e, t, n, r, i);
}
function yh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(sr, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          K(sr, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        K(sr, De),
        (De |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), K(sr, De), (De |= r);
  return Ee(e, t, i, n), t.child;
}
function xh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, i) {
  var l = Ie(n) ? Un : Se.current;
  return (
    (l = _r(t, l)),
    dr(t, i),
    (n = Za(e, t, n, r, l, i)),
    (r = Ja()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ot(e, t, i))
      : (X && r && Aa(t), (t.flags |= 1), Ee(e, t, n, i), t.child)
  );
}
function Cc(e, t, n, r, i) {
  if (Ie(n)) {
    var l = !0;
    Kl(t);
  } else l = !1;
  if ((dr(t, i), t.stateNode === null)) Pl(e, t), ph(t, n, r), Yo(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var a = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Ge(u))
      : ((u = Ie(n) ? Un : Se.current), (u = _r(t, u)));
    var m = n.getDerivedStateFromProps,
      c = typeof m == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((o !== r || a !== u) && vc(t, s, r, u)),
      (bt = !1);
    var p = t.memoizedState;
    (s.state = p),
      Zl(t, r, s, i),
      (a = t.memoizedState),
      o !== r || p !== a || Me.current || bt
        ? (typeof m == 'function' && (qo(t, n, m, r), (a = t.memoizedState)),
          (o = bt || gc(t, n, o, r, p, a, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = o))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      Kf(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Ze(t.type, o)),
      (s.props = u),
      (c = t.pendingProps),
      (p = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Ge(a))
        : ((a = Ie(n) ? Un : Se.current), (a = _r(t, a)));
    var x = n.getDerivedStateFromProps;
    (m = typeof x == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((o !== c || p !== a) && vc(t, s, r, a)),
      (bt = !1),
      (p = t.memoizedState),
      (s.state = p),
      Zl(t, r, s, i);
    var w = t.memoizedState;
    o !== c || p !== w || Me.current || bt
      ? (typeof x == 'function' && (qo(t, n, x, r), (w = t.memoizedState)),
        (u = bt || gc(t, n, u, r, p, w, a) || !1)
          ? (m ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jo(e, t, n, r, l, i);
}
function Jo(e, t, n, r, i, l) {
  xh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ac(t, n, !1), Ot(e, t, l);
  (r = t.stateNode), (Kg.current = t);
  var o = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Or(t, e.child, null, l)), (t.child = Or(t, null, o, l)))
      : Ee(e, t, o, l),
    (t.memoizedState = r.state),
    i && ac(t, n, !0),
    t.child
  );
}
function wh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    Ga(e, t.containerInfo);
}
function Ec(e, t, n, r, i) {
  return Rr(), Qa(i), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var ea = { dehydrated: null, treeContext: null, retryLane: 0 };
function ta(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    i = Z.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    K(Z, i & 1),
    e === null)
  )
    return (
      Ko(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Ss(s, r, 0, null)),
              (e = Fn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ta(n)),
              (t.memoizedState = ea),
              e)
            : nu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return Gg(e, t, s, r, o, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (o = i.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = un(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (l = un(o, l)) : ((l = Fn(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ta(n)
          : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ea),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = un(l, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nu(e, t) {
  return (t = Ss({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function pl(e, t, n, r) {
  return (
    r !== null && Qa(r),
    Or(t, e.child, null, n),
    (e = nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gg(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Zs(Error(N(422)))), pl(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (i = t.mode),
          (r = Ss({ mode: 'visible', children: r.children }, i, 0, null)),
          (l = Fn(l, i, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Or(t, e.child, null, s),
          (t.child.memoizedState = ta(s)),
          (t.memoizedState = ea),
          l);
  if (!(t.mode & 1)) return pl(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (l = Error(N(419))), (r = Zs(l, r, void 0)), pl(e, t, s, r);
  }
  if (((o = (s & e.childLanes) !== 0), Le || o)) {
    if (((r = fe), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 && i !== l.retryLane && ((l.retryLane = i), Rt(e, i), lt(r, e, i, -1));
    }
    return au(), (r = Zs(Error(N(421)))), pl(e, t, s, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = ov.bind(null, e)), (i._reactRetry = t), null)
    : ((e = l.treeContext),
      (be = ln(i.nextSibling)),
      (Ue = t),
      (X = !0),
      (rt = null),
      e !== null &&
        ((Ve[We++] = Ct),
        (Ve[We++] = Et),
        (Ve[We++] = An),
        (Ct = e.id),
        (Et = e.overflow),
        (An = t)),
      (t = nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function jc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Go(e.return, t, n);
}
function Js(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function kh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((Ee(e, t, r.children, n), (r = Z.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, n, t);
        else if (e.tag === 19) jc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Jl(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Js(t, !1, i, n, l);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Jl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Js(t, !0, n, null, l);
        break;
      case 'together':
        Js(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ot(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Qn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qg(e, t, n) {
  switch (t.tag) {
    case 3:
      wh(t), Rr();
      break;
    case 5:
      Gf(t);
      break;
    case 1:
      Ie(t.type) && Kl(t);
      break;
    case 4:
      Ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      K(Yl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Sh(e, t, n)
            : (K(Z, Z.current & 1), (e = Ot(e, t, n)), e !== null ? e.sibling : null);
      K(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        K(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yh(e, t, n);
  }
  return Ot(e, t, n);
}
var Ch, na, Eh, jh;
Ch = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
na = function () {};
Eh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), En(gt.current);
    var l = null;
    switch (n) {
      case 'input':
        (i = Eo(e, i)), (r = Eo(e, r)), (l = []);
        break;
      case 'select':
        (i = ee({}, i, { value: void 0 })), (r = ee({}, r, { value: void 0 })), (l = []);
        break;
      case 'textarea':
        (i = Po(e, i)), (r = Po(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Wl);
    }
    Ro(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var o = i[u];
          for (s in o) o.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (xi.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((o = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== o && (a != null || o != null))
      )
        if (u === 'style')
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
            for (s in a) a.hasOwnProperty(s) && o[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (l = l || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') || (l = l || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (xi.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && q('scroll', e), l || o === a || (l = []))
                  : (l = l || []).push(u, a));
    }
    n && (l = l || []).push('style', n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kr(e, t) {
  if (!X)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yg(e, t, n) {
  var r = t.pendingProps;
  switch (($a(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Ie(t.type) && Hl(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tr(),
        Y(Me),
        Y(Se),
        Ya(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (ca(rt), (rt = null)))),
        na(e, t),
        ye(t),
        null
      );
    case 5:
      qa(t);
      var i = En(Ti.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Eh(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ye(t), null;
        }
        if (((e = En(gt.current)), fl(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[pt] = t), (r[Ri] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              q('cancel', r), q('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              q('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < ni.length; i++) q(ni[i], r);
              break;
            case 'source':
              q('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              q('error', r), q('load', r);
              break;
            case 'details':
              q('toggle', r);
              break;
            case 'input':
              Mu(r, l), q('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!l.multiple }), q('invalid', r);
              break;
            case 'textarea':
              Fu(r, l), q('invalid', r);
          }
          Ro(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var o = l[s];
              s === 'children'
                ? typeof o == 'string'
                  ? r.textContent !== o &&
                    (l.suppressHydrationWarning !== !0 && dl(r.textContent, o, e),
                    (i = ['children', o]))
                  : typeof o == 'number' &&
                    r.textContent !== '' + o &&
                    (l.suppressHydrationWarning !== !0 && dl(r.textContent, o, e),
                    (i = ['children', '' + o]))
                : xi.hasOwnProperty(s) && o != null && s === 'onScroll' && q('scroll', r);
            }
          switch (n) {
            case 'input':
              rl(r), Iu(r, l, !0);
              break;
            case 'textarea':
              rl(r), Du(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof l.onClick == 'function' && (r.onclick = Wl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Zd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[pt] = t),
            (e[Ri] = r),
            Ch(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Oo(n, r)), n)) {
              case 'dialog':
                q('cancel', e), q('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                q('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < ni.length; i++) q(ni[i], e);
                i = r;
                break;
              case 'source':
                q('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                q('error', e), q('load', e), (i = r);
                break;
              case 'details':
                q('toggle', e), (i = r);
                break;
              case 'input':
                Mu(e, r), (i = Eo(e, r)), q('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ee({}, r, { value: void 0 })),
                  q('invalid', e);
                break;
              case 'textarea':
                Fu(e, r), (i = Po(e, r)), q('invalid', e);
                break;
              default:
                i = r;
            }
            Ro(n, i), (o = i);
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var a = o[l];
                l === 'style'
                  ? tf(e, a)
                  : l === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && Jd(e, a))
                    : l === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && wi(e, a)
                        : typeof a == 'number' && wi(e, '' + a)
                      : l !== 'suppressContentEditableWarning' &&
                        l !== 'suppressHydrationWarning' &&
                        l !== 'autoFocus' &&
                        (xi.hasOwnProperty(l)
                          ? a != null && l === 'onScroll' && q('scroll', e)
                          : a != null && Na(e, l, a, s));
              }
            switch (n) {
              case 'input':
                rl(e), Iu(e, r, !1);
                break;
              case 'textarea':
                rl(e), Du(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + dn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? or(e, !!r.multiple, l, !1)
                    : r.defaultValue != null && or(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Wl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) jh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = En(Ti.current)), En(gt.current), fl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (l = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                dl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (Y(Z),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && be !== null && t.mode & 1 && !(t.flags & 128))
          Bf(), Rr(), (t.flags |= 98560), (l = !1);
        else if (((l = fl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
              throw Error(N(317));
            l[pt] = t;
          } else Rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (l = !1);
        } else rt !== null && (ca(rt), (rt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || Z.current & 1 ? ue === 0 && (ue = 3) : au())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return Tr(), na(e, t), e === null && Pi(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return Wa(t.type._context), ye(t), null;
    case 17:
      return Ie(t.type) && Hl(), ye(t), null;
    case 19:
      if ((Y(Z), (l = t.memoizedState), l === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Kr(l, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Jl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Kr(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return K(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ie() > Lr &&
            ((t.flags |= 128), (r = !0), Kr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kr(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !s.alternate && !X)
            )
              return ye(t), null;
          } else
            2 * ie() - l.renderingStartTime > Lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Kr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last), n !== null ? (n.sibling = s) : (t.child = s), (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ie()),
          (t.sibling = null),
          (n = Z.current),
          K(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        ou(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Xg(e, t) {
  switch (($a(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && Hl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tr(),
        Y(Me),
        Y(Se),
        Ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qa(t), null;
    case 13:
      if ((Y(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Rr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return Y(Z), null;
    case 4:
      return Tr(), null;
    case 10:
      return Wa(t.type._context), null;
    case 22:
    case 23:
      return ou(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ml = !1,
  we = !1,
  Zg = typeof WeakSet == 'function' ? WeakSet : Set,
  T = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function ra(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Nc = !1;
function Jg(e, t) {
  if (((Ao = Ql), (e = Of()), Ua(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            o = -1,
            a = -1,
            u = 0,
            m = 0,
            c = e,
            p = null;
          t: for (;;) {
            for (
              var x;
              c !== n || (i !== 0 && c.nodeType !== 3) || (o = s + i),
                c !== l || (r !== 0 && c.nodeType !== 3) || (a = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (x = c.firstChild) !== null;

            )
              (p = c), (c = x);
            for (;;) {
              if (c === e) break t;
              if (
                (p === n && ++u === i && (o = s),
                p === l && ++m === r && (a = s),
                (x = c.nextSibling) !== null)
              )
                break;
              (c = p), (p = c.parentNode);
            }
            c = x;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($o = { focusedElem: e, selectionRange: n }, Ql = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    S = w.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ze(t.type, y), S);
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (k) {
          ne(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (w = Nc), (Nc = !1), w;
}
function ci(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && ra(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function xs(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ia(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Nh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Nh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[pt], delete t[Ri], delete t[Vo], delete t[Ig], delete t[Fg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ph(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ph(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function la(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (la(e, t, n), e = e.sibling; e !== null; ) la(e, t, n), (e = e.sibling);
}
function sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sa(e, t, n), e = e.sibling; e !== null; ) sa(e, t, n), (e = e.sibling);
}
var he = null,
  tt = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) _h(e, t, n), (n = n.sibling);
}
function _h(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == 'function')
    try {
      mt.onCommitFiberUnmount(ds, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || lr(n, t);
    case 6:
      var r = he,
        i = tt;
      (he = null),
        Lt(e, t, n),
        (he = r),
        (tt = i),
        he !== null &&
          (tt
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (tt
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8 ? Hs(e.parentNode, n) : e.nodeType === 1 && Hs(e, n),
            Ei(e))
          : Hs(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (i = tt),
        (he = n.stateNode.containerInfo),
        (tt = !0),
        Lt(e, t, n),
        (he = r),
        (tt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag), s !== void 0 && (l & 2 || l & 4) && ra(n, t, s), (i = i.next);
        } while (i !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (!we && (lr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (o) {
          ne(n, t, o);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Lt(e, t, n), (we = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function _c(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zg()),
      t.forEach(function (r) {
        var i = av.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (he = o.stateNode), (tt = !1);
              break e;
            case 3:
              (he = o.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (he = o.stateNode.containerInfo), (tt = !0);
              break e;
          }
          o = o.return;
        }
        if (he === null) throw Error(N(160));
        _h(l, s, i), (he = null), (tt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ne(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rh(t, e), (t = t.sibling);
}
function Rh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), ut(e), r & 4)) {
        try {
          ci(3, e, e.return), xs(3, e);
        } catch (y) {
          ne(e, e.return, y);
        }
        try {
          ci(5, e, e.return);
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 1:
      Xe(t, e), ut(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if ((Xe(t, e), ut(e), r & 512 && n !== null && lr(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          wi(i, '');
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === 'input' && l.type === 'radio' && l.name != null && Yd(i, l), Oo(o, s);
            var u = Oo(o, l);
            for (s = 0; s < a.length; s += 2) {
              var m = a[s],
                c = a[s + 1];
              m === 'style'
                ? tf(i, c)
                : m === 'dangerouslySetInnerHTML'
                  ? Jd(i, c)
                  : m === 'children'
                    ? wi(i, c)
                    : Na(i, m, c, u);
            }
            switch (o) {
              case 'input':
                jo(i, l);
                break;
              case 'textarea':
                Xd(i, l);
                break;
              case 'select':
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? or(i, !!l.multiple, x, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? or(i, !!l.multiple, l.defaultValue, !0)
                      : or(i, !!l.multiple, l.multiple ? [] : '', !1));
            }
            i[Ri] = l;
          } catch (y) {
            ne(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if ((Xe(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ei(t.containerInfo);
        } catch (y) {
          ne(e, e.return, y);
        }
      break;
    case 4:
      Xe(t, e), ut(e);
      break;
    case 13:
      Xe(t, e),
        ut(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l || (i.alternate !== null && i.alternate.memoizedState !== null) || (lu = ie())),
        r & 4 && _c(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || m), Xe(t, e), (we = u)) : Xe(t, e),
        ut(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !m && e.mode & 1))
          for (T = e, m = e.child; m !== null; ) {
            for (c = T = m; T !== null; ) {
              switch (((p = T), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ci(4, p, p.return);
                  break;
                case 1:
                  lr(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  lr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Oc(c);
                    continue;
                  }
              }
              x !== null ? ((x.return = p), (T = x)) : Oc(c);
            }
            m = m.sibling;
          }
        e: for (m = null, c = e; ; ) {
          if (c.tag === 5) {
            if (m === null) {
              m = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((o = c.stateNode),
                      (a = c.memoizedProps.style),
                      (s = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (o.style.display = ef('display', s)));
              } catch (y) {
                ne(e, e.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (m === null)
              try {
                c.stateNode.nodeValue = u ? '' : c.memoizedProps;
              } catch (y) {
                ne(e, e.return, y);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            m === c && (m = null), (c = c.return);
          }
          m === c && (m = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Xe(t, e), ut(e), r & 4 && _c(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ph(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (wi(i, ''), (r.flags &= -33));
          var l = Pc(e);
          sa(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = Pc(e);
          la(e, o, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ev(e, t, n) {
  (T = e), Oh(e);
}
function Oh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var i = T,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ml;
      if (!s) {
        var o = i.alternate,
          a = (o !== null && o.memoizedState !== null) || we;
        o = ml;
        var u = we;
        if (((ml = s), (we = a) && !u))
          for (T = i; T !== null; )
            (s = T),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Tc(i)
                : a !== null
                  ? ((a.return = s), (T = a))
                  : Tc(i);
        for (; l !== null; ) (T = l), Oh(l), (l = l.sibling);
        (T = i), (ml = o), (we = u);
      }
      Rc(e);
    } else i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (T = l)) : Rc(e);
  }
}
function Rc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || xs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && hc(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hc(t, s, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var m = u.memoizedState;
                  if (m !== null) {
                    var c = m.dehydrated;
                    c !== null && Ei(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        we || (t.flags & 512 && ia(t));
      } catch (p) {
        ne(t, t.return, p);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Oc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Tc(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xs(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, i, a);
            }
          }
          var l = t.return;
          try {
            ia(t);
          } catch (a) {
            ne(t, l, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ia(t);
          } catch (a) {
            ne(t, s, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (T = o);
      break;
    }
    T = t.return;
  }
}
var tv = Math.ceil,
  ns = Tt.ReactCurrentDispatcher,
  ru = Tt.ReactCurrentOwner,
  Ke = Tt.ReactCurrentBatchConfig,
  Q = 0,
  fe = null,
  le = null,
  pe = 0,
  De = 0,
  sr = pn(0),
  ue = 0,
  Ii = null,
  Qn = 0,
  ws = 0,
  iu = 0,
  di = null,
  Te = null,
  lu = 0,
  Lr = 1 / 0,
  xt = null,
  rs = !1,
  oa = null,
  on = null,
  gl = !1,
  Zt = null,
  is = 0,
  fi = 0,
  aa = null,
  _l = -1,
  Rl = 0;
function Ne() {
  return Q & 6 ? ie() : _l !== -1 ? _l : (_l = ie());
}
function an(e) {
  return e.mode & 1
    ? Q & 2 && pe !== 0
      ? pe & -pe
      : bg.transition !== null
        ? (Rl === 0 && (Rl = pf()), Rl)
        : ((e = W), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sf(e.type))), e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < fi) throw ((fi = 0), (aa = null), Error(N(185)));
  Wi(e, n, r),
    (!(Q & 2) || e !== fe) &&
      (e === fe && (!(Q & 2) && (ws |= n), ue === 4 && At(e, pe)),
      Fe(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Lr = ie() + 500), gs && mn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  bm(e, t);
  var r = $l(e, e === fe ? pe : 0);
  if (r === 0) n !== null && Au(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Au(n), t === 1))
      e.tag === 0 ? Dg(zc.bind(null, e)) : Af(zc.bind(null, e)),
        Lg(function () {
          !(Q & 6) && mn();
        }),
        (n = null);
    else {
      switch (mf(r)) {
        case 1:
          n = Ta;
          break;
        case 4:
          n = ff;
          break;
        case 16:
          n = Al;
          break;
        case 536870912:
          n = hf;
          break;
        default:
          n = Al;
      }
      n = bh(n, Th.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Th(e, t) {
  if (((_l = -1), (Rl = 0), Q & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (fr() && e.callbackNode !== n) return null;
  var r = $l(e, e === fe ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ls(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var l = Lh();
    (fe !== e || pe !== t) && ((xt = null), (Lr = ie() + 500), In(e, t));
    do
      try {
        iv();
        break;
      } catch (o) {
        zh(e, o);
      }
    while (!0);
    Va(), (ns.current = l), (Q = i), le !== null ? (t = 0) : ((fe = null), (pe = 0), (t = ue));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = Io(e)), i !== 0 && ((r = i), (t = ua(e, i)))), t === 1))
      throw ((n = Ii), In(e, 0), At(e, r), Fe(e, ie()), n);
    if (t === 6) At(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !nv(i) &&
          ((t = ls(e, r)), t === 2 && ((l = Io(e)), l !== 0 && ((r = l), (t = ua(e, l)))), t === 1))
      )
        throw ((n = Ii), In(e, 0), At(e, r), Fe(e, ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Sn(e, Te, xt);
          break;
        case 3:
          if ((At(e, r), (r & 130023424) === r && ((t = lu + 500 - ie()), 10 < t))) {
            if ($l(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bo(Sn.bind(null, e, Te, xt), t);
            break;
          }
          Sn(e, Te, xt);
          break;
        case 4:
          if ((At(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - it(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * tv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bo(Sn.bind(null, e, Te, xt), r);
            break;
          }
          Sn(e, Te, xt);
          break;
        case 5:
          Sn(e, Te, xt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Fe(e, ie()), e.callbackNode === n ? Th.bind(null, e) : null;
}
function ua(e, t) {
  var n = di;
  return (
    e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
    (e = ls(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && ca(t)),
    e
  );
}
function ca(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function nv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!st(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function At(e, t) {
  for (
    t &= ~iu, t &= ~ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function zc(e) {
  if (Q & 6) throw Error(N(327));
  fr();
  var t = $l(e, 0);
  if (!(t & 1)) return Fe(e, ie()), null;
  var n = ls(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Io(e);
    r !== 0 && ((t = r), (n = ua(e, r)));
  }
  if (n === 1) throw ((n = Ii), In(e, 0), At(e, t), Fe(e, ie()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Sn(e, Te, xt), Fe(e, ie()), null
  );
}
function su(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Lr = ie() + 500), gs && mn());
  }
}
function Bn(e) {
  Zt !== null && Zt.tag === 0 && !(Q & 6) && fr();
  var t = Q;
  Q |= 1;
  var n = Ke.transition,
    r = W;
  try {
    if (((Ke.transition = null), (W = 1), e)) return e();
  } finally {
    (W = r), (Ke.transition = n), (Q = t), !(Q & 6) && mn();
  }
}
function ou() {
  (De = sr.current), Y(sr);
}
function In(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zg(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch (($a(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hl();
          break;
        case 3:
          Tr(), Y(Me), Y(Se), Ya();
          break;
        case 5:
          qa(r);
          break;
        case 4:
          Tr();
          break;
        case 13:
          Y(Z);
          break;
        case 19:
          Y(Z);
          break;
        case 10:
          Wa(r.type._context);
          break;
        case 22:
        case 23:
          ou();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (le = e = un(e.current, null)),
    (pe = De = t),
    (ue = 0),
    (Ii = null),
    (iu = ws = Qn = 0),
    (Te = di = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Cn = null;
  }
  return e;
}
function zh(e, t) {
  do {
    var n = le;
    try {
      if ((Va(), (jl.current = ts), es)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        es = !1;
      }
      if (
        (($n = 0),
        (de = oe = J = null),
        (ui = !1),
        (zi = 0),
        (ru.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Ii = t), (le = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          o = n,
          a = t;
        if (
          ((t = pe),
          (o.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            m = o,
            c = m.tag;
          if (!(m.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var x = xc(s);
          if (x !== null) {
            (x.flags &= -257), wc(x, s, o, l, t), x.mode & 1 && yc(l, u, t), (t = x), (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              yc(l, u, t), au();
              break e;
            }
            a = Error(N(426));
          }
        } else if (X && o.mode & 1) {
          var S = xc(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), wc(S, s, o, l, t), Qa(zr(a, o));
            break e;
          }
        }
        (l = a = zr(a, o)), ue !== 4 && (ue = 2), di === null ? (di = [l]) : di.push(l), (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = mh(l, a, t);
              fc(l, h);
              break e;
            case 1:
              o = a;
              var d = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (on === null || !on.has(v))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var k = gh(l, o, t);
                fc(l, k);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Ih(n);
    } catch (j) {
      (t = j), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lh() {
  var e = ns.current;
  return (ns.current = ts), e === null ? ts : e;
}
function au() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    fe === null || (!(Qn & 268435455) && !(ws & 268435455)) || At(fe, pe);
}
function ls(e, t) {
  var n = Q;
  Q |= 2;
  var r = Lh();
  (fe !== e || pe !== t) && ((xt = null), In(e, t));
  do
    try {
      rv();
      break;
    } catch (i) {
      zh(e, i);
    }
  while (!0);
  if ((Va(), (Q = n), (ns.current = r), le !== null)) throw Error(N(261));
  return (fe = null), (pe = 0), ue;
}
function rv() {
  for (; le !== null; ) Mh(le);
}
function iv() {
  for (; le !== null && !Rm(); ) Mh(le);
}
function Mh(e) {
  var t = Dh(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps), t === null ? Ih(e) : (le = t), (ru.current = null);
}
function Ih(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Xg(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (le = null);
        return;
      }
    } else if (((n = Yg(n, t, De)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Sn(e, t, n) {
  var r = W,
    i = Ke.transition;
  try {
    (Ke.transition = null), (W = 1), lv(e, t, n, r);
  } finally {
    (Ke.transition = i), (W = r);
  }
  return null;
}
function lv(e, t, n, r) {
  do fr();
  while (Zt !== null);
  if (Q & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Um(e, l),
    e === fe && ((le = fe = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gl ||
      ((gl = !0),
      bh(Al, function () {
        return fr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ke.transition), (Ke.transition = null);
    var s = W;
    W = 1;
    var o = Q;
    (Q |= 4),
      (ru.current = null),
      Jg(e, n),
      Rh(n, e),
      jg($o),
      (Ql = !!Ao),
      ($o = Ao = null),
      (e.current = n),
      ev(n),
      Om(),
      (Q = o),
      (W = s),
      (Ke.transition = l);
  } else e.current = n;
  if (
    (gl && ((gl = !1), (Zt = e), (is = i)),
    (l = e.pendingLanes),
    l === 0 && (on = null),
    Lm(n.stateNode),
    Fe(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (rs) throw ((rs = !1), (e = oa), (oa = null), e);
  return (
    is & 1 && e.tag !== 0 && fr(),
    (l = e.pendingLanes),
    l & 1 ? (e === aa ? fi++ : ((fi = 0), (aa = e))) : (fi = 0),
    mn(),
    null
  );
}
function fr() {
  if (Zt !== null) {
    var e = mf(is),
      t = Ke.transition,
      n = W;
    try {
      if (((Ke.transition = null), (W = 16 > e ? 16 : e), Zt === null)) var r = !1;
      else {
        if (((e = Zt), (Zt = null), (is = 0), Q & 6)) throw Error(N(331));
        var i = Q;
        for (Q |= 4, T = e.current; T !== null; ) {
          var l = T,
            s = l.child;
          if (T.flags & 16) {
            var o = l.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                for (T = u; T !== null; ) {
                  var m = T;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ci(8, m, l);
                  }
                  var c = m.child;
                  if (c !== null) (c.return = m), (T = c);
                  else
                    for (; T !== null; ) {
                      m = T;
                      var p = m.sibling,
                        x = m.return;
                      if ((Nh(m), m === u)) {
                        T = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = x), (T = p);
                        break;
                      }
                      T = x;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              T = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (T = s);
          else
            e: for (; T !== null; ) {
              if (((l = T), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ci(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (T = h);
                break e;
              }
              T = l.return;
            }
        }
        var d = e.current;
        for (T = d; T !== null; ) {
          s = T;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (T = v);
          else
            e: for (s = d; T !== null; ) {
              if (((o = T), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(9, o);
                  }
                } catch (j) {
                  ne(o, o.return, j);
                }
              if (o === s) {
                T = null;
                break e;
              }
              var k = o.sibling;
              if (k !== null) {
                (k.return = o.return), (T = k);
                break e;
              }
              T = o.return;
            }
        }
        if (((Q = i), mn(), mt && typeof mt.onPostCommitFiberRoot == 'function'))
          try {
            mt.onPostCommitFiberRoot(ds, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = n), (Ke.transition = t);
    }
  }
  return !1;
}
function Lc(e, t, n) {
  (t = zr(n, t)),
    (t = mh(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Ne()),
    e !== null && (Wi(e, 1, t), Fe(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) Lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (on === null || !on.has(r)))
        ) {
          (e = zr(n, e)),
            (e = gh(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Ne()),
            t !== null && (Wi(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (pe & n) === n &&
      (ue === 4 || (ue === 3 && (pe & 130023424) === pe && 500 > ie() - lu) ? In(e, 0) : (iu |= n)),
    Fe(e, t);
}
function Fh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = sl), (sl <<= 1), !(sl & 130023424) && (sl = 4194304)) : (t = 1));
  var n = Ne();
  (e = Rt(e, t)), e !== null && (Wi(e, t, n), Fe(e, n));
}
function ov(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fh(e, n);
}
function av(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Fh(e, n);
}
var Dh;
Dh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), qg(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), X && t.flags & 1048576 && $f(t, ql, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pl(e, t), (e = t.pendingProps);
      var i = _r(t, Se.current);
      dr(t, n), (i = Za(null, t, r, e, i, n));
      var l = Ja();
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((l = !0), Kl(t)) : (l = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Ka(t),
            (i.updater = ys),
            (t.stateNode = i),
            (i._reactInternals = t),
            Yo(t, r, e, n),
            (t = Jo(null, t, r, !0, l, n)))
          : ((t.tag = 0), X && l && Aa(t), Ee(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = cv(r)),
          (e = Ze(r, e)),
          i)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = Cc(null, t, r, e, n);
            break e;
          case 11:
            t = Sc(null, t, r, e, n);
            break e;
          case 14:
            t = kc(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Zo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Cc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((wh(t), e === null)) throw Error(N(387));
        (r = t.pendingProps), (l = t.memoizedState), (i = l.element), Kf(e, t), Zl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = zr(Error(N(423)), t)), (t = Ec(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = zr(Error(N(424)), t)), (t = Ec(e, t, r, n, i));
            break e;
          } else
            for (
              be = ln(t.stateNode.containerInfo.firstChild),
                Ue = t,
                X = !0,
                rt = null,
                n = Wf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rr(), r === i)) {
            t = Ot(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gf(t),
        e === null && Ko(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Qo(r, i) ? (s = null) : l !== null && Qo(r, l) && (t.flags |= 32),
        xh(e, t),
        Ee(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ko(t), null;
    case 13:
      return Sh(e, t, n);
    case 4:
      return (
        Ga(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Or(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Sc(e, t, r, i, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          K(Yl, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (st(l.value, s)) {
            if (l.children === i.children && !Me.current) {
              t = Ot(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var o = l.dependencies;
              if (o !== null) {
                s = l.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = jt(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var m = u.pending;
                        m === null ? (a.next = a) : ((a.next = m.next), (m.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Go(l.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(N(341));
                (s.lanes |= n),
                  (o = s.alternate),
                  o !== null && (o.lanes |= n),
                  Go(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        Ee(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        dr(t, n),
        (i = Ge(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = Ze(r, t.pendingProps)), (i = Ze(r.type, i)), kc(e, t, r, i, n);
    case 15:
      return vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Pl(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), Kl(t)) : (e = !1),
        dr(t, n),
        ph(t, r, i),
        Yo(t, r, i, n),
        Jo(null, t, r, !0, e, n)
      );
    case 19:
      return kh(e, t, n);
    case 22:
      return yh(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function bh(e, t) {
  return df(e, t);
}
function uv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function He(e, t, n, r) {
  return new uv(e, t, n, r);
}
function uu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cv(e) {
  if (typeof e == 'function') return uu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _a)) return 11;
    if (e === Ra) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ol(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == 'function')) uu(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case Yn:
        return Fn(n.children, i, l, t);
      case Pa:
        (s = 8), (i |= 8);
        break;
      case wo:
        return (e = He(12, n, t, i | 2)), (e.elementType = wo), (e.lanes = l), e;
      case So:
        return (e = He(13, n, t, i)), (e.elementType = So), (e.lanes = l), e;
      case ko:
        return (e = He(19, n, t, i)), (e.elementType = ko), (e.lanes = l), e;
      case Kd:
        return Ss(n, i, l, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Wd:
              s = 10;
              break e;
            case Hd:
              s = 9;
              break e;
            case _a:
              s = 11;
              break e;
            case Ra:
              s = 14;
              break e;
            case Dt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (t = He(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
}
function Fn(e, t, n, r) {
  return (e = He(7, e, r, t)), (e.lanes = n), e;
}
function Ss(e, t, n, r) {
  return (
    (e = He(22, e, r, t)), (e.elementType = Kd), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function eo(e, t, n) {
  return (e = He(6, e, null, t)), (e.lanes = n), e;
}
function to(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Is(0)),
    (this.expirationTimes = Is(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Is(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function cu(e, t, n, r, i, l, s, o, a) {
  return (
    (e = new dv(e, t, n, o, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = He(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ka(l),
    e
  );
}
function fv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uh(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return Uf(e, n, t);
  }
  return t;
}
function Ah(e, t, n, r, i, l, s, o, a) {
  return (
    (e = cu(n, r, !0, e, i, l, s, o, a)),
    (e.context = Uh(null)),
    (n = e.current),
    (r = Ne()),
    (i = an(n)),
    (l = jt(r, i)),
    (l.callback = t ?? null),
    sn(n, l, i),
    (e.current.lanes = i),
    Wi(e, i, r),
    Fe(e, r),
    e
  );
}
function ks(e, t, n, r) {
  var i = t.current,
    l = Ne(),
    s = an(i);
  return (
    (n = Uh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(i, t, s)),
    e !== null && (lt(e, i, s, l), El(e, i, s)),
    s
  );
}
function ss(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function du(e, t) {
  Mc(e, t), (e = e.alternate) && Mc(e, t);
}
function hv() {
  return null;
}
var $h =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function fu(e) {
  this._internalRoot = e;
}
Cs.prototype.render = fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ks(e, t, null, null);
};
Cs.prototype.unmount = fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () {
      ks(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function Cs(e) {
  this._internalRoot = e;
}
Cs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && wf(e);
  }
};
function hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Es(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ic() {}
function pv(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var l = r;
      r = function () {
        var u = ss(s);
        l.call(u);
      };
    }
    var s = Ah(t, r, e, 0, null, !1, !1, '', Ic);
    return (
      (e._reactRootContainer = s),
      (e[_t] = s.current),
      Pi(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var o = r;
    r = function () {
      var u = ss(a);
      o.call(u);
    };
  }
  var a = cu(e, 0, !1, null, null, !1, !1, '', Ic);
  return (
    (e._reactRootContainer = a),
    (e[_t] = a.current),
    Pi(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      ks(t, a, n, r);
    }),
    a
  );
}
function js(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == 'function') {
      var o = i;
      i = function () {
        var a = ss(s);
        o.call(a);
      };
    }
    ks(t, s, e, i);
  } else s = pv(n, t, e, i, r);
  return ss(s);
}
gf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ti(t.pendingLanes);
        n !== 0 && (za(t, n | 1), Fe(t, ie()), !(Q & 6) && ((Lr = ie() + 500), mn()));
      }
      break;
    case 13:
      Bn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var i = Ne();
          lt(r, e, 1, i);
        }
      }),
        du(e, 1);
  }
};
La = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      lt(t, e, 134217728, n);
    }
    du(e, 134217728);
  }
};
vf = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = Ne();
      lt(n, e, t, r);
    }
    du(e, t);
  }
};
yf = function () {
  return W;
};
xf = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
zo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((jo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ms(r);
            if (!i) throw Error(N(90));
            qd(r), jo(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Xd(e, n);
      break;
    case 'select':
      (t = n.value), t != null && or(e, !!n.multiple, t, !1);
  }
};
lf = su;
sf = Bn;
var mv = { usingClientEntryPoint: !1, Events: [Ki, er, ms, nf, rf, su] },
  Gr = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  gv = {
    bundleType: Gr.bundleType,
    version: Gr.version,
    rendererPackageName: Gr.rendererPackageName,
    rendererConfig: Gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = uf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gr.findFiberByHostInstance || hv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber)
    try {
      (ds = vl.inject(gv)), (mt = vl);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mv;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hu(t)) throw Error(N(200));
  return fv(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!hu(e)) throw Error(N(299));
  var n = !1,
    r = '',
    i = $h;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cu(e, 1, !1, null, null, n, !1, r, i)),
    (e[_t] = t.current),
    Pi(e.nodeType === 8 ? e.parentNode : e),
    new fu(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = uf(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return Bn(e);
};
$e.hydrate = function (e, t, n) {
  if (!Es(t)) throw Error(N(200));
  return js(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!hu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = '',
    s = $h;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ah(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[_t] = t.current),
    Pi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Cs(t);
};
$e.render = function (e, t, n) {
  if (!Es(t)) throw Error(N(200));
  return js(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!Es(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Bn(function () {
        js(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = su;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Es(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return js(e, t, n, !1, r);
};
$e.version = '18.3.1-next-f1338f8080-20240426';
function Qh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qh);
    } catch (e) {
      console.error(e);
    }
}
Qh(), ($d.exports = $e);
var vv = $d.exports,
  Fc = vv;
(yo.createRoot = Fc.createRoot), (yo.hydrateRoot = Fc.hydrateRoot);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fi() {
  return (
    (Fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fi.apply(this, arguments)
  );
}
var Jt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Jt || (Jt = {}));
const Dc = 'popstate';
function yv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: l, search: s, hash: o } = r.location;
    return da(
      '',
      { pathname: l, search: s, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : os(i);
  }
  return wv(t, n, null, e);
}
function se(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Bh(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xv() {
  return Math.random().toString(36).substr(2, 8);
}
function bc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function da(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Fi(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? br(t) : t,
      { state: n, key: (t && t.key) || r || xv() }
    )
  );
}
function os(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function br(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function wv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    s = i.history,
    o = Jt.Pop,
    a = null,
    u = m();
  u == null && ((u = 0), s.replaceState(Fi({}, s.state, { idx: u }), ''));
  function m() {
    return (s.state || { idx: null }).idx;
  }
  function c() {
    o = Jt.Pop;
    let S = m(),
      h = S == null ? null : S - u;
    (u = S), a && a({ action: o, location: y.location, delta: h });
  }
  function p(S, h) {
    o = Jt.Push;
    let d = da(y.location, S, h);
    u = m() + 1;
    let v = bc(d, u),
      k = y.createHref(d);
    try {
      s.pushState(v, '', k);
    } catch (j) {
      if (j instanceof DOMException && j.name === 'DataCloneError') throw j;
      i.location.assign(k);
    }
    l && a && a({ action: o, location: y.location, delta: 1 });
  }
  function x(S, h) {
    o = Jt.Replace;
    let d = da(y.location, S, h);
    u = m();
    let v = bc(d, u),
      k = y.createHref(d);
    s.replaceState(v, '', k), l && a && a({ action: o, location: y.location, delta: 0 });
  }
  function w(S) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      d = typeof S == 'string' ? S : os(S);
    return (
      (d = d.replace(/ $/, '%20')),
      se(h, 'No window.location.(origin|href) available to create URL for href: ' + d),
      new URL(d, h)
    );
  }
  let y = {
    get action() {
      return o;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(Dc, c),
        (a = S),
        () => {
          i.removeEventListener(Dc, c), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: w,
    encodeLocation(S) {
      let h = w(S);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: x,
    go(S) {
      return s.go(S);
    },
  };
  return y;
}
var Uc;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Uc || (Uc = {}));
function Sv(e, t, n) {
  return n === void 0 && (n = '/'), kv(e, t, n);
}
function kv(e, t, n, r) {
  let i = typeof t == 'string' ? br(t) : t,
    l = pu(i.pathname || '/', n);
  if (l == null) return null;
  let s = Vh(e);
  Cv(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) {
    let u = Iv(l);
    o = zv(s[a], u);
  }
  return o;
}
function Vh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (l, s, o) => {
    let a = {
      relativePath: o === void 0 ? l.path || '' : o,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: s,
      route: l,
    };
    a.relativePath.startsWith('/') &&
      (se(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = cn([r, a.relativePath]),
      m = n.concat(a);
    l.children &&
      l.children.length > 0 &&
      (se(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      Vh(l.children, t, m, u)),
      !(l.path == null && !l.index) && t.push({ path: u, score: Ov(u, l.index), routesMeta: m });
  };
  return (
    e.forEach((l, s) => {
      var o;
      if (l.path === '' || !((o = l.path) != null && o.includes('?'))) i(l, s);
      else for (let a of Wh(l.path)) i(l, s, a);
    }),
    t
  );
}
function Wh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    l = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [l, ''] : [l];
  let s = Wh(r.join('/')),
    o = [];
  return (
    o.push(...s.map((a) => (a === '' ? l : [l, a].join('/')))),
    i && o.push(...s),
    o.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function Cv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Tv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ev = /^:[\w-]+$/,
  jv = 3,
  Nv = 2,
  Pv = 1,
  _v = 10,
  Rv = -2,
  Ac = (e) => e === '*';
function Ov(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Ac) && (r += Rv),
    t && (r += Nv),
    n.filter((i) => !Ac(i)).reduce((i, l) => i + (Ev.test(l) ? jv : l === '' ? Pv : _v), r)
  );
}
function Tv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function zv(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    l = '/',
    s = [];
  for (let o = 0; o < r.length; ++o) {
    let a = r[o],
      u = o === r.length - 1,
      m = l === '/' ? t : t.slice(l.length) || '/',
      c = Lv({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, m),
      p = a.route;
    if (!c) return null;
    Object.assign(i, c.params),
      s.push({
        params: i,
        pathname: cn([l, c.pathname]),
        pathnameBase: Uv(cn([l, c.pathnameBase])),
        route: p,
      }),
      c.pathnameBase !== '/' && (l = cn([l, c.pathnameBase]));
  }
  return s;
}
function Lv(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Mv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let l = i[0],
    s = l.replace(/(.)\/+$/, '$1'),
    o = i.slice(1);
  return {
    params: r.reduce((u, m, c) => {
      let { paramName: p, isOptional: x } = m;
      if (p === '*') {
        let y = o[c] || '';
        s = l.slice(0, l.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const w = o[c];
      return x && !w ? (u[p] = void 0) : (u[p] = (w || '').replace(/%2F/g, '/')), u;
    }, {}),
    pathname: l,
    pathnameBase: s,
    pattern: e,
  };
}
function Mv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bh(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, o, a) => (
            r.push({ paramName: o, isOptional: a != null }), a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function Iv(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Bh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function pu(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Fv(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? br(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : Dv(n, t)) : t, search: Av(r), hash: $v(i) };
}
function Dv(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function no(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bv(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Hh(e, t) {
  let n = bv(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kh(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = br(e))
    : ((i = Fi({}, e)),
      se(!i.pathname || !i.pathname.includes('?'), no('?', 'pathname', 'search', i)),
      se(!i.pathname || !i.pathname.includes('#'), no('#', 'pathname', 'hash', i)),
      se(!i.search || !i.search.includes('#'), no('#', 'search', 'hash', i)));
  let l = e === '' || i.pathname === '',
    s = l ? '/' : i.pathname,
    o;
  if (s == null) o = n;
  else {
    let c = t.length - 1;
    if (!r && s.startsWith('..')) {
      let p = s.split('/');
      for (; p[0] === '..'; ) p.shift(), (c -= 1);
      i.pathname = p.join('/');
    }
    o = c >= 0 ? t[c] : '/';
  }
  let a = Fv(i, o),
    u = s && s !== '/' && s.endsWith('/'),
    m = (l || s === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (u || m) && (a.pathname += '/'), a;
}
const cn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Uv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Av = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  $v = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Qv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Gh = ['post', 'put', 'patch', 'delete'];
new Set(Gh);
const Bv = ['get', ...Gh];
new Set(Bv);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Di() {
  return (
    (Di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Di.apply(this, arguments)
  );
}
const mu = E.createContext(null),
  Vv = E.createContext(null),
  Hn = E.createContext(null),
  Ns = E.createContext(null),
  gn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  qh = E.createContext(null);
function Wv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  qi() || se(!1);
  let { basename: r, navigator: i } = E.useContext(Hn),
    { hash: l, pathname: s, search: o } = Xh(e, { relative: n }),
    a = s;
  return (
    r !== '/' && (a = s === '/' ? r : cn([r, s])), i.createHref({ pathname: a, search: o, hash: l })
  );
}
function qi() {
  return E.useContext(Ns) != null;
}
function Yi() {
  return qi() || se(!1), E.useContext(Ns).location;
}
function Yh(e) {
  E.useContext(Hn).static || E.useLayoutEffect(e);
}
function gu() {
  let { isDataRoute: e } = E.useContext(gn);
  return e ? ly() : Hv();
}
function Hv() {
  qi() || se(!1);
  let e = E.useContext(mu),
    { basename: t, future: n, navigator: r } = E.useContext(Hn),
    { matches: i } = E.useContext(gn),
    { pathname: l } = Yi(),
    s = JSON.stringify(Hh(i, n.v7_relativeSplatPath)),
    o = E.useRef(!1);
  return (
    Yh(() => {
      o.current = !0;
    }),
    E.useCallback(
      function (u, m) {
        if ((m === void 0 && (m = {}), !o.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let c = Kh(u, JSON.parse(s), l, m.relative === 'path');
        e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : cn([t, c.pathname])),
          (m.replace ? r.replace : r.push)(c, m.state, m);
      },
      [t, r, s, l, e]
    )
  );
}
function Kv() {
  let { matches: e } = E.useContext(gn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Xh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(Hn),
    { matches: i } = E.useContext(gn),
    { pathname: l } = Yi(),
    s = JSON.stringify(Hh(i, r.v7_relativeSplatPath));
  return E.useMemo(() => Kh(e, JSON.parse(s), l, n === 'path'), [e, s, l, n]);
}
function Gv(e, t) {
  return qv(e, t);
}
function qv(e, t, n, r) {
  qi() || se(!1);
  let { navigator: i } = E.useContext(Hn),
    { matches: l } = E.useContext(gn),
    s = l[l.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : '/';
  s && s.route;
  let u = Yi(),
    m;
  if (t) {
    var c;
    let S = typeof t == 'string' ? br(t) : t;
    a === '/' || ((c = S.pathname) != null && c.startsWith(a)) || se(!1), (m = S);
  } else m = u;
  let p = m.pathname || '/',
    x = p;
  if (a !== '/') {
    let S = a.replace(/^\//, '').split('/');
    x = '/' + p.replace(/^\//, '').split('/').slice(S.length).join('/');
  }
  let w = Sv(e, { pathname: x }),
    y = ey(
      w &&
        w.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, o, S.params),
            pathname: cn([
              a,
              i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === '/'
                ? a
                : cn([
                    a,
                    i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase,
                  ]),
          })
        ),
      l,
      n,
      r
    );
  return t && y
    ? E.createElement(
        Ns.Provider,
        {
          value: {
            location: Di({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, m),
            navigationType: Jt.Pop,
          },
        },
        y
      )
    : y;
}
function Yv() {
  let e = iy(),
    t = Qv(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement('h2', null, 'Unexpected Application Error!'),
    E.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? E.createElement('pre', { style: i }, n) : null,
    null
  );
}
const Xv = E.createElement(Yv, null);
class Zv extends E.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          gn.Provider,
          { value: this.props.routeContext },
          E.createElement(qh.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Jv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(mu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(gn.Provider, { value: t }, r)
  );
}
function ey(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    o = (i = n) == null ? void 0 : i.errors;
  if (o != null) {
    let m = s.findIndex((c) => c.route.id && (o == null ? void 0 : o[c.route.id]) !== void 0);
    m >= 0 || se(!1), (s = s.slice(0, Math.min(s.length, m + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < s.length; m++) {
      let c = s[m];
      if (((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = m), c.route.id)) {
        let { loaderData: p, errors: x } = n,
          w = c.route.loader && p[c.route.id] === void 0 && (!x || x[c.route.id] === void 0);
        if (c.route.lazy || w) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((m, c, p) => {
    let x,
      w = !1,
      y = null,
      S = null;
    n &&
      ((x = o && c.route.id ? o[c.route.id] : void 0),
      (y = c.route.errorElement || Xv),
      a &&
        (u < 0 && p === 0
          ? (sy('route-fallback'), (w = !0), (S = null))
          : u === p && ((w = !0), (S = c.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, p + 1)),
      d = () => {
        let v;
        return (
          x
            ? (v = y)
            : w
              ? (v = S)
              : c.route.Component
                ? (v = E.createElement(c.route.Component, null))
                : c.route.element
                  ? (v = c.route.element)
                  : (v = m),
          E.createElement(Jv, {
            match: c,
            routeContext: { outlet: m, matches: h, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0)
      ? E.createElement(Zv, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: x,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Zh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Zh || {}),
  Jh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Jh || {});
function ty(e) {
  let t = E.useContext(mu);
  return t || se(!1), t;
}
function ny(e) {
  let t = E.useContext(Vv);
  return t || se(!1), t;
}
function ry(e) {
  let t = E.useContext(gn);
  return t || se(!1), t;
}
function ep(e) {
  let t = ry(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || se(!1), n.route.id;
}
function iy() {
  var e;
  let t = E.useContext(qh),
    n = ny(),
    r = ep();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ly() {
  let { router: e } = ty(Zh.UseNavigateStable),
    t = ep(Jh.UseNavigateStable),
    n = E.useRef(!1);
  return (
    Yh(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof i == 'number' ? e.navigate(i) : e.navigate(i, Di({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const $c = {};
function sy(e, t, n) {
  $c[e] || ($c[e] = !0);
}
function oy(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Tl(e) {
  se(!1);
}
function ay(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = Jt.Pop,
    navigator: l,
    static: s = !1,
    future: o,
  } = e;
  qi() && se(!1);
  let a = t.replace(/^\/*/, '/'),
    u = E.useMemo(
      () => ({ basename: a, navigator: l, static: s, future: Di({ v7_relativeSplatPath: !1 }, o) }),
      [a, o, l, s]
    );
  typeof r == 'string' && (r = br(r));
  let { pathname: m = '/', search: c = '', hash: p = '', state: x = null, key: w = 'default' } = r,
    y = E.useMemo(() => {
      let S = pu(m, a);
      return S == null
        ? null
        : { location: { pathname: S, search: c, hash: p, state: x, key: w }, navigationType: i };
    }, [a, m, c, p, x, w, i]);
  return y == null
    ? null
    : E.createElement(
        Hn.Provider,
        { value: u },
        E.createElement(Ns.Provider, { children: n, value: y })
      );
}
function uy(e) {
  let { children: t, location: n } = e;
  return Gv(fa(t), n);
}
new Promise(() => {});
function fa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, i) => {
      if (!E.isValidElement(r)) return;
      let l = [...t, i];
      if (r.type === E.Fragment) {
        n.push.apply(n, fa(r.props.children, l));
        return;
      }
      r.type !== Tl && se(!1), !r.props.index || !r.props.children || se(!1);
      let s = {
        id: r.props.id || l.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = fa(r.props.children, l)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ha() {
  return (
    (ha = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ha.apply(this, arguments)
  );
}
function cy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    l;
  for (l = 0; l < r.length; l++) (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function dy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function fy(e, t) {
  return e.button === 0 && (!t || t === '_self') && !dy(e);
}
const hy = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  py = '6';
try {
  window.__reactRouterVersion = py;
} catch {}
const my = 'startTransition',
  Qc = Pp[my];
function gy(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    l = E.useRef();
  l.current == null && (l.current = yv({ window: i, v5Compat: !0 }));
  let s = l.current,
    [o, a] = E.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    m = E.useCallback(
      (c) => {
        u && Qc ? Qc(() => a(c)) : a(c);
      },
      [a, u]
    );
  return (
    E.useLayoutEffect(() => s.listen(m), [s, m]),
    E.useEffect(() => oy(r), [r]),
    E.createElement(ay, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: s,
      future: r,
    })
  );
}
const vy =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  yy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  hr = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: l,
        replace: s,
        state: o,
        target: a,
        to: u,
        preventScrollReset: m,
        viewTransition: c,
      } = t,
      p = cy(t, hy),
      { basename: x } = E.useContext(Hn),
      w,
      y = !1;
    if (typeof u == 'string' && yy.test(u) && ((w = u), vy))
      try {
        let v = new URL(window.location.href),
          k = u.startsWith('//') ? new URL(v.protocol + u) : new URL(u),
          j = pu(k.pathname, x);
        k.origin === v.origin && j != null ? (u = j + k.search + k.hash) : (y = !0);
      } catch {}
    let S = Wv(u, { relative: i }),
      h = xy(u, {
        replace: s,
        state: o,
        target: a,
        preventScrollReset: m,
        relative: i,
        viewTransition: c,
      });
    function d(v) {
      r && r(v), v.defaultPrevented || h(v);
    }
    return E.createElement(
      'a',
      ha({}, p, { href: w || S, onClick: y || l ? r : d, ref: n, target: a })
    );
  });
var Bc;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Bc || (Bc = {}));
var Vc;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Vc || (Vc = {}));
function xy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: l,
      relative: s,
      viewTransition: o,
    } = t === void 0 ? {} : t,
    a = gu(),
    u = Yi(),
    m = Xh(e, { relative: s });
  return E.useCallback(
    (c) => {
      if (fy(c, n)) {
        c.preventDefault();
        let p = r !== void 0 ? r : os(u) === os(m);
        a(e, { replace: p, state: i, preventScrollReset: l, relative: s, viewTransition: o });
      }
    },
    [u, a, m, r, i, n, e, l, s, o]
  );
}
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wy = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sy = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  Ye = (e, t) => {
    const n = E.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: i = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: s,
          className: o = '',
          children: a,
          ...u
        },
        m
      ) =>
        E.createElement(
          'svg',
          {
            ref: m,
            ...wy,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: s ? (Number(l) * 24) / Number(i) : l,
            className: ['lucide', `lucide-${Sy(e)}`, o].join(' '),
            ...u,
          },
          [...t.map(([c, p]) => E.createElement(c, p)), ...(Array.isArray(a) ? a : [a])]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wc = Ye('AlertTriangle', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z',
      key: 'c3ski4',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zl = Ye('ArrowLeft', [
  ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
  ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hc = Ye('ArrowRight', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kc = Ye('CheckCircle', [
  ['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' }],
  ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ky = Ye('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gc = Ye('Circle', [['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }]]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cy = Ye('Clock', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qc = Ye('Home', [
  ['path', { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', key: 'y5dka4' }],
  ['polyline', { points: '9 22 9 12 15 12 15 22', key: 'e2us08' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ey = Ye('PenSquare', [
  ['path', { d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7', key: '1qinfi' }],
  ['path', { d: 'M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z', key: 'w2jsv5' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pa = Ye('Plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = Ye('Save', [
  ['path', { d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z', key: '1owoqh' }],
  ['polyline', { points: '17 21 17 13 7 13 7 21', key: '1md35c' }],
  ['polyline', { points: '7 3 7 8 15 8', key: '8nz8an' }],
]);
/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = Ye('Trash2', [
  ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
  ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
  ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
  ['line', { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' }],
  ['line', { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' }],
]);
function Yc(e, t) {
  if (typeof e == 'function') return e(t);
  e != null && (e.current = t);
}
function Ny(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const l = Yc(i, t);
      return !n && typeof l == 'function' && (n = !0), l;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const l = r[i];
          typeof l == 'function' ? l() : Yc(e[i], null);
        }
      };
  };
}
function Py(e) {
  const t = Ry(e),
    n = E.forwardRef((r, i) => {
      const { children: l, ...s } = r,
        o = E.Children.toArray(l),
        a = o.find(Ty);
      if (a) {
        const u = a.props.children,
          m = o.map((c) =>
            c === a
              ? E.Children.count(u) > 1
                ? E.Children.only(null)
                : E.isValidElement(u)
                  ? u.props.children
                  : null
              : c
          );
        return f.jsx(t, {
          ...s,
          ref: i,
          children: E.isValidElement(u) ? E.cloneElement(u, void 0, m) : null,
        });
      }
      return f.jsx(t, { ...s, ref: i, children: l });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var _y = Py('Slot');
function Ry(e) {
  const t = E.forwardRef((n, r) => {
    const { children: i, ...l } = n;
    if (E.isValidElement(i)) {
      const s = Ly(i),
        o = zy(l, i.props);
      return i.type !== E.Fragment && (o.ref = r ? Ny(r, s) : s), E.cloneElement(i, o);
    }
    return E.Children.count(i) > 1 ? E.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Oy = Symbol('radix.slottable');
function Ty(e) {
  return (
    E.isValidElement(e) &&
    typeof e.type == 'function' &&
    '__radixId' in e.type &&
    e.type.__radixId === Oy
  );
}
function zy(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? i && l
        ? (n[r] = (...o) => {
            const a = l(...o);
            return i(...o), a;
          })
        : i && (n[r] = i)
      : r === 'style'
        ? (n[r] = { ...i, ...l })
        : r === 'className' && (n[r] = [i, l].filter(Boolean).join(' '));
  }
  return { ...e, ...n };
}
function Ly(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (i = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : i.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function np(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = np(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function rp() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = np(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Xc = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  Zc = rp,
  ip = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Zc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: i, defaultVariants: l } = t,
      s = Object.keys(i).map((u) => {
        const m = n == null ? void 0 : n[u],
          c = l == null ? void 0 : l[u];
        if (m === null) return null;
        const p = Xc(m) || Xc(c);
        return i[u][p];
      }),
      o =
        n &&
        Object.entries(n).reduce((u, m) => {
          let [c, p] = m;
          return p === void 0 || (u[c] = p), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, m) => {
              let { class: c, className: p, ...x } = m;
              return Object.entries(x).every((w) => {
                let [y, S] = w;
                return Array.isArray(S) ? S.includes({ ...l, ...o }[y]) : { ...l, ...o }[y] === S;
              })
                ? [...u, c, p]
                : u;
            }, []);
    return Zc(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  },
  vu = '-',
  My = (e) => {
    const t = Fy(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const o = s.split(vu);
        return o[0] === '' && o.length !== 1 && o.shift(), lp(o, t) || Iy(s);
      },
      getConflictingClassGroupIds: (s, o) => {
        const a = n[s] || [];
        return o && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  lp = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? lp(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const l = e.join(vu);
    return (s = t.validators.find(({ validator: o }) => o(l))) == null ? void 0 : s.classGroupId;
  },
  Jc = /^\[(.+)\]$/,
  Iy = (e) => {
    if (Jc.test(e)) {
      const t = Jc.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
      if (n) return 'arbitrary..' + n;
    }
  },
  Fy = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      by(Object.entries(e.classGroups), n).forEach(([l, s]) => {
        ma(s, r, l, t);
      }),
      r
    );
  },
  ma = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == 'string') {
        const l = i === '' ? t : ed(t, i);
        l.classGroupId = n;
        return;
      }
      if (typeof i == 'function') {
        if (Dy(i)) {
          ma(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([l, s]) => {
        ma(s, ed(t, l), n, r);
      });
    });
  },
  ed = (e, t) => {
    let n = e;
    return (
      t.split(vu).forEach((r) => {
        n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Dy = (e) => e.isThemeGetter,
  by = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((l) =>
            typeof l == 'string'
              ? t + l
              : typeof l == 'object'
                ? Object.fromEntries(Object.entries(l).map(([s, o]) => [t + s, o]))
                : l
          );
          return [n, i];
        })
      : e,
  Uy = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (l, s) => {
      n.set(l, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(l) {
        let s = n.get(l);
        if (s !== void 0) return s;
        if ((s = r.get(l)) !== void 0) return i(l, s), s;
      },
      set(l, s) {
        n.has(l) ? n.set(l, s) : i(l, s);
      },
    };
  },
  sp = '!',
  Ay = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      l = t.length,
      s = (o) => {
        const a = [];
        let u = 0,
          m = 0,
          c;
        for (let S = 0; S < o.length; S++) {
          let h = o[S];
          if (u === 0) {
            if (h === i && (r || o.slice(S, S + l) === t)) {
              a.push(o.slice(m, S)), (m = S + l);
              continue;
            }
            if (h === '/') {
              c = S;
              continue;
            }
          }
          h === '[' ? u++ : h === ']' && u--;
        }
        const p = a.length === 0 ? o : o.substring(m),
          x = p.startsWith(sp),
          w = x ? p.substring(1) : p,
          y = c && c > m ? c - m : void 0;
        return {
          modifiers: a,
          hasImportantModifier: x,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (o) => n({ className: o, parseClassName: s }) : s;
  },
  $y = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Qy = (e) => ({ cache: Uy(e.cacheSize), parseClassName: Ay(e), ...My(e) }),
  By = /\s+/,
  Vy = (e, t) => {
    const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t,
      l = [],
      s = e.trim().split(By);
    let o = '';
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: m,
          hasImportantModifier: c,
          baseClassName: p,
          maybePostfixModifierPosition: x,
        } = n(u);
      let w = !!x,
        y = r(w ? p.substring(0, x) : p);
      if (!y) {
        if (!w) {
          o = u + (o.length > 0 ? ' ' + o : o);
          continue;
        }
        if (((y = r(p)), !y)) {
          o = u + (o.length > 0 ? ' ' + o : o);
          continue;
        }
        w = !1;
      }
      const S = $y(m).join(':'),
        h = c ? S + sp : S,
        d = h + y;
      if (l.includes(d)) continue;
      l.push(d);
      const v = i(y, w);
      for (let k = 0; k < v.length; ++k) {
        const j = v[k];
        l.push(h + j);
      }
      o = u + (o.length > 0 ? ' ' + o : o);
    }
    return o;
  };
function Wy() {
  let e = 0,
    t,
    n,
    r = '';
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = op(t)) && (r && (r += ' '), (r += n));
  return r;
}
const op = (e) => {
  if (typeof e == 'string') return e;
  let t,
    n = '';
  for (let r = 0; r < e.length; r++) e[r] && (t = op(e[r])) && (n && (n += ' '), (n += t));
  return n;
};
function Hy(e, ...t) {
  let n,
    r,
    i,
    l = s;
  function s(a) {
    const u = t.reduce((m, c) => c(m), e());
    return (n = Qy(u)), (r = n.cache.get), (i = n.cache.set), (l = o), o(a);
  }
  function o(a) {
    const u = r(a);
    if (u) return u;
    const m = Vy(a, n);
    return i(a, m), m;
  }
  return function () {
    return l(Wy.apply(null, arguments));
  };
}
const G = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  ap = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Ky = /^\d+\/\d+$/,
  Gy = new Set(['px', 'full', 'screen']),
  qy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Yy =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Xy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Zy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Jy =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  vt = (e) => pr(e) || Gy.has(e) || Ky.test(e),
  Mt = (e) => Ur(e, 'length', o0),
  pr = (e) => !!e && !Number.isNaN(Number(e)),
  ro = (e) => Ur(e, 'number', pr),
  qr = (e) => !!e && Number.isInteger(Number(e)),
  e0 = (e) => e.endsWith('%') && pr(e.slice(0, -1)),
  D = (e) => ap.test(e),
  It = (e) => qy.test(e),
  t0 = new Set(['length', 'size', 'percentage']),
  n0 = (e) => Ur(e, t0, up),
  r0 = (e) => Ur(e, 'position', up),
  i0 = new Set(['image', 'url']),
  l0 = (e) => Ur(e, i0, u0),
  s0 = (e) => Ur(e, '', a0),
  Yr = () => !0,
  Ur = (e, t, n) => {
    const r = ap.exec(e);
    return r ? (r[1] ? (typeof t == 'string' ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
  },
  o0 = (e) => Yy.test(e) && !Xy.test(e),
  up = () => !1,
  a0 = (e) => Zy.test(e),
  u0 = (e) => Jy.test(e),
  c0 = () => {
    const e = G('colors'),
      t = G('spacing'),
      n = G('blur'),
      r = G('brightness'),
      i = G('borderColor'),
      l = G('borderRadius'),
      s = G('borderSpacing'),
      o = G('borderWidth'),
      a = G('contrast'),
      u = G('grayscale'),
      m = G('hueRotate'),
      c = G('invert'),
      p = G('gap'),
      x = G('gradientColorStops'),
      w = G('gradientColorStopPositions'),
      y = G('inset'),
      S = G('margin'),
      h = G('opacity'),
      d = G('padding'),
      v = G('saturate'),
      k = G('scale'),
      j = G('sepia'),
      C = G('skew'),
      P = G('space'),
      _ = G('translate'),
      M = () => ['auto', 'contain', 'none'],
      z = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      H = () => ['auto', D, t],
      b = () => [D, t],
      ge = () => ['', vt, Mt],
      ot = () => ['auto', pr, D],
      at = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      zt = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      Kn = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      O = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
      I = () => ['', '0', D],
      F = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      B = () => [pr, D];
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [Yr],
        spacing: [vt, Mt],
        blur: ['none', '', It, D],
        brightness: B(),
        borderColor: [e],
        borderRadius: ['none', '', 'full', It, D],
        borderSpacing: b(),
        borderWidth: ge(),
        contrast: B(),
        grayscale: I(),
        hueRotate: B(),
        invert: I(),
        gap: b(),
        gradientColorStops: [e],
        gradientColorStopPositions: [e0, Mt],
        inset: H(),
        margin: H(),
        opacity: B(),
        padding: b(),
        saturate: B(),
        scale: B(),
        sepia: I(),
        skew: B(),
        space: b(),
        translate: b(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', D] }],
        container: ['container'],
        columns: [{ columns: [It] }],
        'break-after': [{ 'break-after': F() }],
        'break-before': [{ 'break-before': F() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: [...at(), D] }],
        overflow: [{ overflow: z() }],
        'overflow-x': [{ 'overflow-x': z() }],
        'overflow-y': [{ 'overflow-y': z() }],
        overscroll: [{ overscroll: M() }],
        'overscroll-x': [{ 'overscroll-x': M() }],
        'overscroll-y': [{ 'overscroll-y': M() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [y] }],
        'inset-x': [{ 'inset-x': [y] }],
        'inset-y': [{ 'inset-y': [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', qr, D] }],
        basis: [{ basis: H() }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', D] }],
        grow: [{ grow: I() }],
        shrink: [{ shrink: I() }],
        order: [{ order: ['first', 'last', 'none', qr, D] }],
        'grid-cols': [{ 'grid-cols': [Yr] }],
        'col-start-end': [{ col: ['auto', { span: ['full', qr, D] }, D] }],
        'col-start': [{ 'col-start': ot() }],
        'col-end': [{ 'col-end': ot() }],
        'grid-rows': [{ 'grid-rows': [Yr] }],
        'row-start-end': [{ row: ['auto', { span: [qr, D] }, D] }],
        'row-start': [{ 'row-start': ot() }],
        'row-end': [{ 'row-end': ot() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', D] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', D] }],
        gap: [{ gap: [p] }],
        'gap-x': [{ 'gap-x': [p] }],
        'gap-y': [{ 'gap-y': [p] }],
        'justify-content': [{ justify: ['normal', ...O()] }],
        'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
        'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        'align-content': [{ content: ['normal', ...O(), 'baseline'] }],
        'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
        'place-content': [{ 'place-content': [...O(), 'baseline'] }],
        'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        p: [{ p: [d] }],
        px: [{ px: [d] }],
        py: [{ py: [d] }],
        ps: [{ ps: [d] }],
        pe: [{ pe: [d] }],
        pt: [{ pt: [d] }],
        pr: [{ pr: [d] }],
        pb: [{ pb: [d] }],
        pl: [{ pl: [d] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        'space-x': [{ 'space-x': [P] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [P] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', D, t] }],
        'min-w': [{ 'min-w': [D, t, 'min', 'max', 'fit'] }],
        'max-w': [
          { 'max-w': [D, t, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [It] }, It] },
        ],
        h: [{ h: [D, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [{ 'min-h': [D, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'max-h': [{ 'max-h': [D, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        size: [{ size: [D, t, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', It, Mt] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          {
            font: [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
              ro,
            ],
          },
        ],
        'font-family': [{ font: [Yr] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', D] }],
        'line-clamp': [{ 'line-clamp': ['none', pr, ro] }],
        leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', vt, D] }],
        'list-image': [{ 'list-image': ['none', D] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', D] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [h] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [h] }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...zt(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: ['auto', 'from-font', vt, Mt] }],
        'underline-offset': [{ 'underline-offset': ['auto', vt, D] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: b() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              D,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', D] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [h] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...at(), r0] }],
        'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', n0] }],
        'bg-image': [
          { bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, l0] },
        ],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [w] }],
        'gradient-via-pos': [{ via: [w] }],
        'gradient-to-pos': [{ to: [w] }],
        'gradient-from': [{ from: [x] }],
        'gradient-via': [{ via: [x] }],
        'gradient-to': [{ to: [x] }],
        rounded: [{ rounded: [l] }],
        'rounded-s': [{ 'rounded-s': [l] }],
        'rounded-e': [{ 'rounded-e': [l] }],
        'rounded-t': [{ 'rounded-t': [l] }],
        'rounded-r': [{ 'rounded-r': [l] }],
        'rounded-b': [{ 'rounded-b': [l] }],
        'rounded-l': [{ 'rounded-l': [l] }],
        'rounded-ss': [{ 'rounded-ss': [l] }],
        'rounded-se': [{ 'rounded-se': [l] }],
        'rounded-ee': [{ 'rounded-ee': [l] }],
        'rounded-es': [{ 'rounded-es': [l] }],
        'rounded-tl': [{ 'rounded-tl': [l] }],
        'rounded-tr': [{ 'rounded-tr': [l] }],
        'rounded-br': [{ 'rounded-br': [l] }],
        'rounded-bl': [{ 'rounded-bl': [l] }],
        'border-w': [{ border: [o] }],
        'border-w-x': [{ 'border-x': [o] }],
        'border-w-y': [{ 'border-y': [o] }],
        'border-w-s': [{ 'border-s': [o] }],
        'border-w-e': [{ 'border-e': [o] }],
        'border-w-t': [{ 'border-t': [o] }],
        'border-w-r': [{ 'border-r': [o] }],
        'border-w-b': [{ 'border-b': [o] }],
        'border-w-l': [{ 'border-l': [o] }],
        'border-opacity': [{ 'border-opacity': [h] }],
        'border-style': [{ border: [...zt(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [o] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [o] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [h] }],
        'divide-style': [{ divide: zt() }],
        'border-color': [{ border: [i] }],
        'border-color-x': [{ 'border-x': [i] }],
        'border-color-y': [{ 'border-y': [i] }],
        'border-color-s': [{ 'border-s': [i] }],
        'border-color-e': [{ 'border-e': [i] }],
        'border-color-t': [{ 'border-t': [i] }],
        'border-color-r': [{ 'border-r': [i] }],
        'border-color-b': [{ 'border-b': [i] }],
        'border-color-l': [{ 'border-l': [i] }],
        'divide-color': [{ divide: [i] }],
        'outline-style': [{ outline: ['', ...zt()] }],
        'outline-offset': [{ 'outline-offset': [vt, D] }],
        'outline-w': [{ outline: [vt, Mt] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: ge() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [h] }],
        'ring-offset-w': [{ 'ring-offset': [vt, Mt] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: ['', 'inner', 'none', It, s0] }],
        'shadow-color': [{ shadow: [Yr] }],
        opacity: [{ opacity: [h] }],
        'mix-blend': [{ 'mix-blend': [...Kn(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': Kn() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', It, D] }],
        grayscale: [{ grayscale: [u] }],
        'hue-rotate': [{ 'hue-rotate': [m] }],
        invert: [{ invert: [c] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [j] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [n] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [a] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [m] }],
        'backdrop-invert': [{ 'backdrop-invert': [c] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [h] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [v] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [j] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [s] }],
        'border-spacing-x': [{ 'border-spacing-x': [s] }],
        'border-spacing-y': [{ 'border-spacing-y': [s] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', D] },
        ],
        duration: [{ duration: B() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', D] }],
        delay: [{ delay: B() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', D] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [k] }],
        'scale-x': [{ 'scale-x': [k] }],
        'scale-y': [{ 'scale-y': [k] }],
        rotate: [{ rotate: [qr, D] }],
        'translate-x': [{ 'translate-x': [_] }],
        'translate-y': [{ 'translate-y': [_] }],
        'skew-x': [{ 'skew-x': [C] }],
        'skew-y': [{ 'skew-y': [C] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              D,
            ],
          },
        ],
        accent: [{ accent: ['auto', e] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              D,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': b() }],
        'scroll-mx': [{ 'scroll-mx': b() }],
        'scroll-my': [{ 'scroll-my': b() }],
        'scroll-ms': [{ 'scroll-ms': b() }],
        'scroll-me': [{ 'scroll-me': b() }],
        'scroll-mt': [{ 'scroll-mt': b() }],
        'scroll-mr': [{ 'scroll-mr': b() }],
        'scroll-mb': [{ 'scroll-mb': b() }],
        'scroll-ml': [{ 'scroll-ml': b() }],
        'scroll-p': [{ 'scroll-p': b() }],
        'scroll-px': [{ 'scroll-px': b() }],
        'scroll-py': [{ 'scroll-py': b() }],
        'scroll-ps': [{ 'scroll-ps': b() }],
        'scroll-pe': [{ 'scroll-pe': b() }],
        'scroll-pt': [{ 'scroll-pt': b() }],
        'scroll-pr': [{ 'scroll-pr': b() }],
        'scroll-pb': [{ 'scroll-pb': b() }],
        'scroll-pl': [{ 'scroll-pl': b() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', D] }],
        fill: [{ fill: [e, 'none'] }],
        'stroke-w': [{ stroke: [vt, Mt, ro] }],
        stroke: [{ stroke: [e, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    };
  },
  d0 = Hy(c0);
function vn(...e) {
  return d0(rp(e));
}
const f0 = ip(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);
function re({ className: e, variant: t, size: n, asChild: r = !1, ref: i, ...l }) {
  const s = r ? _y : 'button';
  return f.jsx(s, { className: vn(f0({ variant: t, size: n, className: e })), ref: i, ...l });
}
function h0({ children: e }) {
  const t = Yi();
  return f.jsxs('div', {
    className: 'min-h-screen bg-background',
    children: [
      f.jsx('header', {
        className: 'border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60',
        children: f.jsx('div', {
          className: 'container mx-auto px-4',
          children: f.jsxs('div', {
            className: 'flex h-16 items-center justify-between',
            children: [
              f.jsx('div', {
                className: 'flex items-center space-x-4',
                children: f.jsxs(hr, {
                  to: '/',
                  className: 'flex items-center space-x-2',
                  children: [
                    f.jsx('div', {
                      className: 'h-8 w-8 rounded-lg bg-primary flex items-center justify-center',
                      children: f.jsx(qc, { className: 'h-4 w-4 text-primary-foreground' }),
                    }),
                    f.jsx('span', { className: 'text-xl font-bold', children: 'Tracker' }),
                  ],
                }),
              }),
              f.jsxs('nav', {
                className: 'flex items-center space-x-4',
                children: [
                  f.jsx(hr, {
                    to: '/',
                    children: f.jsxs(re, {
                      variant: t.pathname === '/' ? 'default' : 'ghost',
                      size: 'sm',
                      children: [f.jsx(qc, { className: 'h-4 w-4 mr-2' }), 'Home'],
                    }),
                  }),
                  f.jsx(hr, {
                    to: '/create',
                    children: f.jsxs(re, {
                      variant: t.pathname === '/create' ? 'default' : 'ghost',
                      size: 'sm',
                      children: [f.jsx(pa, { className: 'h-4 w-4 mr-2' }), 'Create'],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      f.jsx('main', { className: 'container mx-auto px-4 py-8', children: e }),
      f.jsx('footer', {
        className: 'border-t bg-muted/50 mt-auto',
        children: f.jsx('div', {
          className: 'container mx-auto px-4 py-6',
          children: f.jsx('div', {
            className: 'flex items-center justify-between text-sm text-muted-foreground',
            children: f.jsx('p', { children: '© 2025 Tracker Application' }),
          }),
        }),
      }),
    ],
  });
}
function hi({ className: e, ref: t, ...n }) {
  return f.jsx('div', {
    ref: t,
    className: vn('rounded-lg border bg-card text-card-foreground shadow-sm', e),
    ...n,
  });
}
function pi({ className: e, ref: t, ...n }) {
  return f.jsx('div', { ref: t, className: vn('flex flex-col space-y-1.5 p-6', e), ...n });
}
function mi({ className: e, ref: t, ...n }) {
  return f.jsx('h3', {
    ref: t,
    className: vn('text-2xl font-semibold leading-none tracking-tight', e),
    ...n,
  });
}
function as({ className: e, ref: t, ...n }) {
  return f.jsx('p', { ref: t, className: vn('text-sm text-muted-foreground', e), ...n });
}
function gi({ className: e, ref: t, ...n }) {
  return f.jsx('div', { ref: t, className: vn('p-6 pt-0', e), ...n });
}
function jn({ className: e, type: t, ref: n, ...r }) {
  return f.jsx('input', {
    type: t,
    className: vn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      e
    ),
    ref: n,
    ...r,
  });
}
const p0 = ip(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);
function bi({ className: e, variant: t, ...n }) {
  return f.jsx('div', { className: vn(p0({ variant: t }), e), ...n });
}
const Ar = '/api';
async function m0() {
  const e = await fetch(`${Ar}/items`);
  if (!e.ok) throw new Error('Failed to fetch items');
  return e.json();
}
async function g0(e) {
  const t = await fetch(`${Ar}/items/${e}`);
  if (!t.ok) throw new Error('Failed to fetch item');
  return t.json();
}
async function v0(e) {
  const t = await fetch(`${Ar}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(e),
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || 'Failed to create item');
  }
  return t.json();
}
async function y0(e, t) {
  const n = await fetch(`${Ar}/items/${e}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(t),
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || 'Failed to update item');
  }
  return n.json();
}
async function x0(e, t) {
  const n = await fetch(`${Ar}/items/${e}/stage`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(t),
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || 'Failed to update item stage');
  }
  return n.json();
}
async function w0(e) {
  const t = await fetch(`${Ar}/items/${e}`, { method: 'DELETE' });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || 'Failed to delete item');
  }
}
const ze = ['Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored'];
function ri(e) {
  const t = ze.indexOf(e);
  return t === -1 || t === ze.length - 1 ? null : ze[t + 1];
}
function Ll(e) {
  const t = ze.indexOf(e);
  return t === -1 || t === 0 ? null : ze[t - 1];
}
function td(e) {
  return ri(e) !== null;
}
function nd(e) {
  return Ll(e) !== null;
}
function rd(e) {
  const t = ze.indexOf(e);
  return t === -1 ? 0 : ((t + 1) / ze.length) * 100;
}
function us(e) {
  switch (e) {
    case 'Created':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'In Transit':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Arrived at Dock':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Inspected':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Stored':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}
function vi(e) {
  return new Date(e) < new Date();
}
function Xr(e) {
  const t = new Date(e),
    n = String(t.getDate()).padStart(2, '0'),
    r = String(t.getMonth() + 1).padStart(2, '0'),
    i = t.getFullYear(),
    l = String(t.getHours()).padStart(2, '0'),
    s = String(t.getMinutes()).padStart(2, '0');
  return `${n}/${r}/${i}, ${l}:${s}`;
}
function id(e) {
  const t = new Date(e),
    n = String(t.getDate()).padStart(2, '0'),
    r = String(t.getMonth() + 1).padStart(2, '0'),
    i = t.getFullYear();
  return `${n}/${r}/${i}`;
}
function S0() {
  const e = gu(),
    t = Vi(),
    [n, r] = E.useState({ name: '', supplier: '', expected_time: '' }),
    i = Fl({
      mutationFn: v0,
      onSuccess: () => {
        t.invalidateQueries({ queryKey: ['items'] }), e('/');
      },
    }),
    l = (u) => {
      u.preventDefault();
      const m = {
        name: n.name,
        supplier: n.supplier,
        stage: 'Created',
        expected_time: n.expected_time,
      };
      i.mutate(m);
    },
    s = (u, m) => {
      r((c) => ({ ...c, [u]: m }));
    },
    o = () => {
      const u = new Date();
      return (
        u.setDate(u.getDate() + 7),
        new Date(u.getTime() - u.getTimezoneOffset() * 6e4).toISOString().slice(0, 16)
      );
    },
    a = (u) => {
      if (!u) return '';
      const m = new Date(u);
      return new Date(m.getTime() + m.getTimezoneOffset() * 6e4).toISOString();
    };
  return f.jsxs('div', {
    className: 'max-w-2xl mx-auto space-y-6',
    children: [
      f.jsxs('div', {
        className: 'flex items-center space-x-4',
        children: [
          f.jsx(re, {
            variant: 'outline',
            size: 'icon',
            onClick: () => e('/'),
            children: f.jsx(zl, { className: 'h-4 w-4' }),
          }),
          f.jsxs('div', {
            children: [
              f.jsx('h1', {
                className: 'text-3xl font-bold tracking-tight',
                children: 'Create New Item',
              }),
              f.jsx('p', {
                className: 'text-muted-foreground',
                children: 'Add a new shipment to track',
              }),
            ],
          }),
        ],
      }),
      f.jsxs(hi, {
        children: [
          f.jsxs(pi, {
            children: [
              f.jsx(mi, { children: 'Item Details' }),
              f.jsx(as, { children: 'Fill in the information for your new shipment' }),
            ],
          }),
          f.jsx(gi, {
            children: f.jsxs('form', {
              onSubmit: l,
              className: 'space-y-6',
              children: [
                f.jsxs('div', {
                  className: 'space-y-2',
                  children: [
                    f.jsx('label', {
                      htmlFor: 'name',
                      className: 'text-sm font-medium',
                      children: 'Item Name *',
                    }),
                    f.jsx(jn, {
                      id: 'name',
                      type: 'text',
                      placeholder: 'Enter item name (e.g., Laptop Dell XPS 13)',
                      value: n.name,
                      onChange: (u) => s('name', u.target.value),
                      required: !0,
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: 'space-y-2',
                  children: [
                    f.jsx('label', {
                      htmlFor: 'supplier',
                      className: 'text-sm font-medium',
                      children: 'Supplier *',
                    }),
                    f.jsx(jn, {
                      id: 'supplier',
                      type: 'text',
                      placeholder: 'Enter supplier name (e.g., Dell Technologies)',
                      value: n.supplier,
                      onChange: (u) => s('supplier', u.target.value),
                      required: !0,
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: 'space-y-2',
                  children: [
                    f.jsx('label', { className: 'text-sm font-medium', children: 'Initial Stage' }),
                    f.jsxs('div', {
                      className: 'flex items-center space-x-2',
                      children: [
                        f.jsx(bi, { className: us('Created'), children: 'Created' }),
                        f.jsx('span', {
                          className: 'text-sm text-muted-foreground',
                          children: 'All new items start at the "Created" stage',
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: 'space-y-2',
                  children: [
                    f.jsx('label', {
                      htmlFor: 'expected_time',
                      className: 'text-sm font-medium',
                      children: 'Expected Completion Time *',
                    }),
                    f.jsx(jn, {
                      id: 'expected_time',
                      type: 'datetime-local',
                      value: n.expected_time || o(),
                      onChange: (u) => {
                        const m = u.target.value ? a(u.target.value) : '';
                        s('expected_time', m);
                      },
                      required: !0,
                    }),
                    f.jsx('p', {
                      className: 'text-xs text-muted-foreground',
                      children:
                        'When do you expect this item to complete its current stage or reach its final destination?',
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: 'flex space-x-2',
                  children: [
                    f.jsxs(re, {
                      type: 'submit',
                      disabled: i.isPending || !n.name || !n.supplier,
                      children: [
                        f.jsx(tp, { className: 'h-4 w-4 mr-2' }),
                        i.isPending ? 'Creating...' : 'Create Item',
                      ],
                    }),
                    f.jsx(re, {
                      type: 'button',
                      variant: 'outline',
                      onClick: () => e('/'),
                      children: 'Cancel',
                    }),
                  ],
                }),
                i.error &&
                  f.jsxs('div', {
                    className: 'text-sm text-destructive',
                    children: ['Error: ', i.error.message],
                  }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function k0() {
  const { id: e } = Kv(),
    t = gu(),
    n = Vi(),
    [r, i] = E.useState({ name: '', supplier: '', expected_time: '' }),
    [l, s] = E.useState(''),
    [o, a] = E.useState(!1),
    [u, m] = E.useState('advance'),
    {
      data: c,
      isLoading: p,
      error: x,
    } = Ad({ queryKey: ['item', e], queryFn: () => g0(e), enabled: !!e }),
    w = Fl({
      mutationFn: (C) => y0(e, C),
      onSuccess: () => {
        n.invalidateQueries({ queryKey: ['items'] }),
          n.invalidateQueries({ queryKey: ['item', e] }),
          t('/');
      },
    }),
    y = Fl({
      mutationFn: (C) => x0(e, C),
      onSuccess: () => {
        n.invalidateQueries({ queryKey: ['items'] }),
          n.invalidateQueries({ queryKey: ['item', e] });
      },
    });
  E.useEffect(() => {
    c &&
      (i({ name: c.name, supplier: c.supplier, expected_time: c.expected_time }),
      s(c.expected_time));
  }, [c]);
  const S = (C) => {
      C.preventDefault();
      const P = { name: r.name, supplier: r.supplier, expected_time: r.expected_time };
      w.mutate(P);
    },
    h = () => {
      if (!c) return;
      const C = u === 'advance' ? ri(c.stage) : Ll(c.stage);
      if (!C) return;
      const P = { stage: C, expected_time: l || void 0 };
      y.mutate(P), a(!1);
    },
    d = (C) => {
      m(C), a(!0);
    },
    v = (C, P) => {
      i((_) => ({ ..._, [C]: P }));
    },
    k = (C) => {
      if (!C) return '';
      const P = new Date(C);
      return new Date(P.getTime() - P.getTimezoneOffset() * 6e4).toISOString().slice(0, 16);
    },
    j = (C) => {
      if (!C) return '';
      const P = new Date(C);
      return new Date(P.getTime() + P.getTimezoneOffset() * 6e4).toISOString();
    };
  return p
    ? f.jsx('div', {
        className: 'flex items-center justify-center min-h-[50vh]',
        children: f.jsxs('div', {
          className: 'text-center',
          children: [
            f.jsx('div', {
              className: 'animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4',
            }),
            f.jsx('p', { className: 'text-muted-foreground', children: 'Loading item...' }),
          ],
        }),
      })
    : x || !c
      ? f.jsx('div', {
          className: 'flex items-center justify-center min-h-[50vh]',
          children: f.jsxs('div', {
            className: 'text-center',
            children: [
              f.jsx('p', { className: 'text-destructive mb-4', children: 'Failed to load item' }),
              f.jsx(re, { onClick: () => t('/'), children: 'Go Back' }),
            ],
          }),
        })
      : f.jsxs('div', {
          className: 'max-w-4xl mx-auto space-y-6',
          children: [
            f.jsxs('div', {
              className: 'flex items-center space-x-4',
              children: [
                f.jsx(re, {
                  variant: 'outline',
                  size: 'icon',
                  onClick: () => t('/'),
                  children: f.jsx(zl, { className: 'h-4 w-4' }),
                }),
                f.jsxs('div', {
                  children: [
                    f.jsx('h1', {
                      className: 'text-3xl font-bold tracking-tight',
                      children: 'Edit Item',
                    }),
                    f.jsx('p', {
                      className: 'text-muted-foreground',
                      children: 'Update the details of your shipment',
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs('div', {
              className: 'grid gap-6 md:grid-cols-2',
              children: [
                f.jsxs(hi, {
                  children: [
                    f.jsxs(pi, {
                      children: [
                        f.jsx(mi, { children: 'Item Details' }),
                        f.jsx(as, { children: 'Modify the basic information for your shipment' }),
                      ],
                    }),
                    f.jsx(gi, {
                      children: f.jsxs('form', {
                        onSubmit: S,
                        className: 'space-y-6',
                        children: [
                          f.jsxs('div', {
                            className: 'space-y-2',
                            children: [
                              f.jsx('label', {
                                htmlFor: 'name',
                                className: 'text-sm font-medium',
                                children: 'Item Name *',
                              }),
                              f.jsx(jn, {
                                id: 'name',
                                type: 'text',
                                placeholder: 'Enter item name',
                                value: r.name,
                                onChange: (C) => v('name', C.target.value),
                                required: !0,
                              }),
                            ],
                          }),
                          f.jsxs('div', {
                            className: 'space-y-2',
                            children: [
                              f.jsx('label', {
                                htmlFor: 'supplier',
                                className: 'text-sm font-medium',
                                children: 'Supplier *',
                              }),
                              f.jsx(jn, {
                                id: 'supplier',
                                type: 'text',
                                placeholder: 'Enter supplier name',
                                value: r.supplier,
                                onChange: (C) => v('supplier', C.target.value),
                                required: !0,
                              }),
                            ],
                          }),
                          f.jsxs('div', {
                            className: 'space-y-2',
                            children: [
                              f.jsx('label', {
                                htmlFor: 'expected_time',
                                className: 'text-sm font-medium',
                                children: 'Expected Completion Time *',
                              }),
                              f.jsx(jn, {
                                id: 'expected_time',
                                type: 'datetime-local',
                                value: k(r.expected_time),
                                onChange: (C) => v('expected_time', j(C.target.value)),
                                required: !0,
                              }),
                            ],
                          }),
                          f.jsxs('div', {
                            className: 'flex space-x-2',
                            children: [
                              f.jsxs(re, {
                                type: 'submit',
                                disabled: w.isPending || !r.name || !r.supplier,
                                children: [
                                  f.jsx(tp, { className: 'h-4 w-4 mr-2' }),
                                  w.isPending ? 'Updating...' : 'Update Item',
                                ],
                              }),
                              f.jsx(re, {
                                type: 'button',
                                variant: 'outline',
                                onClick: () => t('/'),
                                children: 'Cancel',
                              }),
                            ],
                          }),
                          w.error &&
                            f.jsxs('div', {
                              className: 'text-sm text-destructive',
                              children: ['Error: ', w.error.message],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                f.jsxs('div', {
                  className: 'space-y-6',
                  children: [
                    f.jsxs(hi, {
                      children: [
                        f.jsx(pi, { children: f.jsx(mi, { children: 'Stage Progress' }) }),
                        f.jsx(gi, {
                          children: f.jsxs('div', {
                            className: 'space-y-4',
                            children: [
                              f.jsxs('div', {
                                className: 'space-y-2',
                                children: [
                                  f.jsxs('div', {
                                    className: 'flex justify-between text-sm',
                                    children: [
                                      f.jsx('span', { children: 'Progress' }),
                                      f.jsxs('span', { children: [Math.round(rd(c.stage)), '%'] }),
                                    ],
                                  }),
                                  f.jsx('div', {
                                    className: 'w-full bg-gray-200 rounded-full h-2',
                                    children: f.jsx('div', {
                                      className:
                                        'bg-blue-600 h-2 rounded-full transition-all duration-300',
                                      style: { width: `${rd(c.stage)}%` },
                                    }),
                                  }),
                                ],
                              }),
                              f.jsxs('div', {
                                className: 'flex items-center gap-3',
                                children: [
                                  f.jsx(bi, { className: us(c.stage), children: c.stage }),
                                  f.jsxs('div', {
                                    className: 'text-sm text-muted-foreground',
                                    children: [
                                      'Expected: ',
                                      Xr(c.expected_time),
                                      vi(c.expected_time) &&
                                        f.jsx('span', {
                                          className: 'text-red-600 ml-2',
                                          children: '(Overdue)',
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              f.jsxs('div', {
                                className: 'space-y-3',
                                children: [
                                  td(c.stage) || nd(c.stage)
                                    ? f.jsxs(f.Fragment, {
                                        children: [
                                          f.jsxs('div', {
                                            className: 'text-sm text-muted-foreground',
                                            children: [
                                              'Current stage: ',
                                              f.jsx('strong', { children: c.stage }),
                                            ],
                                          }),
                                          f.jsxs('div', {
                                            className: 'flex gap-2',
                                            children: [
                                              nd(c.stage) &&
                                                f.jsxs(re, {
                                                  variant: 'outline',
                                                  onClick: () => d('stepback'),
                                                  disabled: y.isPending,
                                                  children: [
                                                    f.jsx(zl, { className: 'h-4 w-4 mr-1' }),
                                                    'Back',
                                                  ],
                                                }),
                                              td(c.stage) &&
                                                f.jsxs(re, {
                                                  onClick: () => d('advance'),
                                                  disabled: y.isPending,
                                                  className: 'flex-1',
                                                  children: [
                                                    f.jsx(Hc, { className: 'h-4 w-4 mr-2' }),
                                                    'Advance to ',
                                                    ri(c.stage),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          o &&
                                            f.jsxs('div', {
                                              className:
                                                'border rounded-lg p-4 bg-gray-50 space-y-4',
                                              children: [
                                                f.jsxs('div', {
                                                  className: 'flex items-center justify-between',
                                                  children: [
                                                    f.jsx('h4', {
                                                      className: 'font-medium',
                                                      children:
                                                        u === 'advance'
                                                          ? 'Advance Stage'
                                                          : 'Step Back Stage',
                                                    }),
                                                    f.jsx(re, {
                                                      variant: 'ghost',
                                                      size: 'sm',
                                                      onClick: () => a(!1),
                                                      children: f.jsx(ky, { className: 'h-4 w-4' }),
                                                    }),
                                                  ],
                                                }),
                                                f.jsx('p', {
                                                  className: 'text-sm text-muted-foreground',
                                                  children:
                                                    u === 'advance'
                                                      ? `Move item from "${c.stage}" to "${ri(c.stage)}"`
                                                      : `Move item from "${c.stage}" back to "${Ll(c.stage)}"`,
                                                }),
                                                f.jsxs('div', {
                                                  className: 'space-y-2',
                                                  children: [
                                                    f.jsxs('label', {
                                                      className: 'text-sm font-medium',
                                                      children: [
                                                        'Expected completion time for ',
                                                        u === 'advance' ? 'next' : 'previous',
                                                        ' stage (optional)',
                                                      ],
                                                    }),
                                                    f.jsx(jn, {
                                                      type: 'datetime-local',
                                                      value: k(l),
                                                      onChange: (C) => s(j(C.target.value)),
                                                      placeholder: 'Update expected time',
                                                    }),
                                                  ],
                                                }),
                                                f.jsxs('div', {
                                                  className: 'flex gap-2',
                                                  children: [
                                                    f.jsx(re, {
                                                      variant: 'outline',
                                                      onClick: () => a(!1),
                                                      className: 'flex-1',
                                                      children: 'Cancel',
                                                    }),
                                                    f.jsx(re, {
                                                      onClick: h,
                                                      disabled: y.isPending,
                                                      className: 'flex-1',
                                                      children:
                                                        u === 'advance'
                                                          ? f.jsxs(f.Fragment, {
                                                              children: [
                                                                f.jsx(Hc, {
                                                                  className: 'h-4 w-4 mr-2',
                                                                }),
                                                                y.isPending
                                                                  ? 'Advancing...'
                                                                  : `Advance to ${ri(c.stage)}`,
                                                              ],
                                                            })
                                                          : f.jsxs(f.Fragment, {
                                                              children: [
                                                                f.jsx(zl, {
                                                                  className: 'h-4 w-4 mr-2',
                                                                }),
                                                                y.isPending
                                                                  ? 'Going back...'
                                                                  : `Step back to ${Ll(c.stage)}`,
                                                              ],
                                                            }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                        ],
                                      })
                                    : f.jsxs('div', {
                                        className: 'text-center py-4',
                                        children: [
                                          f.jsx(Kc, {
                                            className: 'h-8 w-8 text-green-600 mx-auto mb-2',
                                          }),
                                          f.jsx('p', {
                                            className: 'text-sm font-medium text-green-600',
                                            children: 'Item Completed!',
                                          }),
                                          f.jsx('p', {
                                            className: 'text-xs text-muted-foreground',
                                            children: 'This item has reached the final stage',
                                          }),
                                        ],
                                      }),
                                  y.error &&
                                    f.jsxs('div', {
                                      className: 'text-sm text-destructive',
                                      children: ['Error: ', y.error.message],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    f.jsxs(hi, {
                      children: [
                        f.jsxs(pi, {
                          children: [
                            f.jsx(mi, { children: 'Timeline' }),
                            f.jsx(as, {
                              children: 'Complete stage progression (past, current, and future)',
                            }),
                          ],
                        }),
                        f.jsx(gi, {
                          children: f.jsx('div', {
                            className: 'space-y-4',
                            children: ze.map((C, P) => {
                              var ge, ot;
                              const _ =
                                  (ge = c.timeline) == null
                                    ? void 0
                                    : ge.find((at) => at.stage === C),
                                M =
                                  _ &&
                                  (c.timeline.some((at) => ze.indexOf(at.stage) > P) ||
                                    (C === 'Stored' && c.stage === 'Stored')),
                                z = c.stage === C && !M,
                                H = ze.indexOf(C) > ze.indexOf(c.stage),
                                b =
                                  (ot = c.timeline) == null
                                    ? void 0
                                    : ot.find((at) => ze.indexOf(at.stage) === P + 1);
                              return f.jsxs(
                                'div',
                                {
                                  className: 'flex gap-3',
                                  children: [
                                    f.jsxs('div', {
                                      className: 'flex flex-col items-center',
                                      children: [
                                        M
                                          ? f.jsx(Kc, { className: 'h-4 w-4 text-green-600' })
                                          : z
                                            ? f.jsx(Gc, {
                                                className: 'h-4 w-4 text-blue-600 fill-current',
                                              })
                                            : f.jsx(Gc, { className: 'h-4 w-4 text-gray-400' }),
                                        P < ze.length - 1 &&
                                          f.jsx('div', {
                                            className: `w-px h-8 mt-2 ${M ? 'bg-green-200' : 'bg-gray-200'}`,
                                          }),
                                      ],
                                    }),
                                    f.jsxs('div', {
                                      className: 'flex-1 min-w-0',
                                      children: [
                                        f.jsxs('div', {
                                          className: 'flex items-center gap-2 mb-1',
                                          children: [
                                            f.jsx(bi, {
                                              className: H
                                                ? 'bg-gray-100 text-gray-500 border-gray-200'
                                                : us(C),
                                              children: C,
                                            }),
                                            M &&
                                              f.jsx('span', {
                                                className: 'text-xs text-green-600 font-medium',
                                                children:
                                                  C === 'Stored'
                                                    ? 'Final Stage - Completed!'
                                                    : 'Completed',
                                              }),
                                            z &&
                                              f.jsx('span', {
                                                className: 'text-xs text-blue-600 font-medium',
                                                children: 'Current',
                                              }),
                                            H &&
                                              f.jsx('span', {
                                                className: 'text-xs text-gray-500',
                                                children: 'Upcoming',
                                              }),
                                          ],
                                        }),
                                        f.jsx('div', {
                                          className: 'text-xs',
                                          children: _
                                            ? f.jsxs('div', {
                                                className: H
                                                  ? 'text-gray-400'
                                                  : 'text-muted-foreground',
                                                children: [
                                                  f.jsxs('div', {
                                                    children: ['Entered: ', Xr(_.entered_time)],
                                                  }),
                                                  _.expected_exit_time &&
                                                    f.jsxs('div', {
                                                      children: [
                                                        'Expected exit: ',
                                                        Xr(_.expected_exit_time),
                                                      ],
                                                    }),
                                                  b &&
                                                    f.jsxs('div', {
                                                      children: ['Exited: ', Xr(b.entered_time)],
                                                    }),
                                                ],
                                              })
                                            : z
                                              ? f.jsxs('div', {
                                                  className: 'text-muted-foreground',
                                                  children: [
                                                    f.jsxs('div', {
                                                      children: [
                                                        'Expected completion: ',
                                                        Xr(c.expected_time),
                                                      ],
                                                    }),
                                                    vi(c.expected_time) &&
                                                      f.jsx('div', {
                                                        className: 'text-red-600',
                                                        children: 'Overdue',
                                                      }),
                                                  ],
                                                })
                                              : f.jsx('div', {
                                                  className: 'text-gray-400',
                                                  children: 'Not started',
                                                }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                C
                              );
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
}
function C0(e, t) {
  const n = t ? '' : 'border-2 bg-opacity-50 hover:bg-opacity-75';
  switch (e) {
    case 'Created':
      return t
        ? 'bg-gray-200 text-gray-900 border-gray-300 hover:bg-gray-300'
        : `bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 ${n}`;
    case 'In Transit':
      return t
        ? 'bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300'
        : `bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100 ${n}`;
    case 'Arrived at Dock':
      return t
        ? 'bg-yellow-200 text-yellow-900 border-yellow-300 hover:bg-yellow-300'
        : `bg-yellow-50 text-yellow-700 border-yellow-300 hover:bg-yellow-100 ${n}`;
    case 'Inspected':
      return t
        ? 'bg-orange-200 text-orange-900 border-orange-300 hover:bg-orange-300'
        : `bg-orange-50 text-orange-700 border-orange-300 hover:bg-orange-100 ${n}`;
    case 'Stored':
      return t
        ? 'bg-green-200 text-green-900 border-green-300 hover:bg-green-300'
        : `bg-green-50 text-green-700 border-green-300 hover:bg-green-100 ${n}`;
    default:
      return '';
  }
}
function E0() {
  const e = Vi(),
    [t, n] = E.useState('all'),
    { data: r = [], isLoading: i, error: l } = Ad({ queryKey: ['items'], queryFn: m0 }),
    s = Fl({
      mutationFn: w0,
      onSuccess: () => {
        e.invalidateQueries({ queryKey: ['items'] });
      },
    }),
    o = (u) => {
      window.confirm('Are you sure you want to delete this item?') && s.mutate(u.toString());
    },
    a = r.filter((u) => (t === 'all' ? !0 : t === 'overdue' ? vi(u.expected_time) : u.stage === t));
  return i
    ? f.jsx('div', {
        className: 'flex items-center justify-center min-h-[50vh]',
        children: f.jsxs('div', {
          className: 'text-center',
          children: [
            f.jsx('div', {
              className: 'animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4',
            }),
            f.jsx('p', { className: 'text-muted-foreground', children: 'Loading items...' }),
          ],
        }),
      })
    : l
      ? f.jsx('div', {
          className: 'flex items-center justify-center min-h-[50vh]',
          children: f.jsxs('div', {
            className: 'text-center',
            children: [
              f.jsx('p', { className: 'text-destructive mb-4', children: 'Failed to load items' }),
              f.jsx(re, { onClick: () => window.location.reload(), children: 'Retry' }),
            ],
          }),
        })
      : f.jsxs('div', {
          className: 'space-y-6',
          children: [
            f.jsxs('div', {
              className: 'flex items-center justify-between',
              children: [
                f.jsxs('div', {
                  children: [
                    f.jsx('h1', {
                      className: 'text-3xl font-bold tracking-tight',
                      children: 'Tracker Items',
                    }),
                    f.jsx('p', {
                      className: 'text-muted-foreground',
                      children: 'Track your shipments through different stages',
                    }),
                  ],
                }),
                f.jsx(hr, {
                  to: '/create',
                  children: f.jsxs(re, {
                    children: [f.jsx(pa, { className: 'h-4 w-4 mr-2' }), 'Add Item'],
                  }),
                }),
              ],
            }),
            f.jsxs('div', {
              className: 'flex items-center space-x-2 overflow-x-auto',
              children: [
                f.jsx('span', {
                  className: 'text-sm font-medium whitespace-nowrap',
                  children: 'Filter by stage:',
                }),
                f.jsx(re, {
                  variant: t === 'all' ? 'default' : 'outline',
                  size: 'sm',
                  onClick: () => n('all'),
                  children: 'All',
                }),
                f.jsxs(re, {
                  variant: t === 'overdue' ? 'default' : 'outline',
                  size: 'sm',
                  onClick: () => n('overdue'),
                  className: 'text-red-700 border-red-300 hover:bg-red-50',
                  children: [f.jsx(Wc, { className: 'h-3 w-3 mr-1' }), 'Overdue'],
                }),
                ze.map((u) =>
                  f.jsx(
                    re,
                    {
                      variant: 'outline',
                      size: 'sm',
                      onClick: () => n(u),
                      className: `whitespace-nowrap ${C0(u, t === u)}`,
                      children: u,
                    },
                    u
                  )
                ),
              ],
            }),
            a.length === 0
              ? f.jsxs('div', {
                  className: 'text-center py-12',
                  children: [
                    f.jsx('p', {
                      className: 'text-muted-foreground mb-4',
                      children:
                        t === 'all'
                          ? 'No items found'
                          : `No ${t === 'overdue' ? 'overdue' : t} items found`,
                    }),
                    f.jsx(hr, {
                      to: '/create',
                      children: f.jsxs(re, {
                        children: [f.jsx(pa, { className: 'h-4 w-4 mr-2' }), 'Create First Item'],
                      }),
                    }),
                  ],
                })
              : f.jsx('div', {
                  className: 'grid gap-4 md:grid-cols-2 lg:grid-cols-3',
                  children: a.map((u) =>
                    f.jsxs(
                      hi,
                      {
                        className: 'hover:shadow-md transition-shadow',
                        children: [
                          f.jsx(pi, {
                            className: 'pb-3',
                            children: f.jsxs('div', {
                              className: 'flex items-start justify-between',
                              children: [
                                f.jsxs('div', {
                                  className: 'flex-1 min-w-0',
                                  children: [
                                    f.jsx(mi, { className: 'text-lg truncate', children: u.name }),
                                    f.jsx(as, {
                                      className: 'flex items-center gap-1 mt-1',
                                      children: f.jsxs('span', {
                                        className: 'truncate',
                                        children: ['by ', u.supplier],
                                      }),
                                    }),
                                  ],
                                }),
                                f.jsxs('div', {
                                  className: 'flex space-x-1 ml-2',
                                  children: [
                                    f.jsx(hr, {
                                      to: `/edit/${u.id}`,
                                      children: f.jsx(re, {
                                        variant: 'ghost',
                                        size: 'icon',
                                        className: 'h-8 w-8',
                                        children: f.jsx(Ey, { className: 'h-4 w-4' }),
                                      }),
                                    }),
                                    f.jsx(re, {
                                      variant: 'ghost',
                                      size: 'icon',
                                      className: 'h-8 w-8 text-destructive hover:text-destructive',
                                      onClick: () => o(u.id),
                                      disabled: s.isPending,
                                      children: f.jsx(jy, { className: 'h-4 w-4' }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          f.jsxs(gi, {
                            className: 'pt-0',
                            children: [
                              f.jsxs('div', {
                                className: 'flex flex-wrap gap-2 mb-3',
                                children: [
                                  f.jsx(bi, { className: us(u.stage), children: u.stage }),
                                  vi(u.expected_time) &&
                                    f.jsxs(bi, {
                                      className: 'bg-red-100 text-red-800 border-red-200',
                                      children: [
                                        f.jsx(Wc, { className: 'h-3 w-3 mr-1' }),
                                        'Overdue',
                                      ],
                                    }),
                                ],
                              }),
                              f.jsxs('div', {
                                className: 'space-y-1 text-xs text-muted-foreground',
                                children: [
                                  f.jsxs('div', {
                                    className: 'flex items-center gap-1',
                                    children: [
                                      f.jsx('span', { children: 'Created:' }),
                                      f.jsx('span', { children: id(u.creation_time) }),
                                    ],
                                  }),
                                  f.jsxs('div', {
                                    className: 'flex items-center gap-1',
                                    children: [
                                      f.jsx(Cy, { className: 'h-3 w-3' }),
                                      f.jsx('span', { children: 'Expected:' }),
                                      f.jsx('span', {
                                        className: vi(u.expected_time)
                                          ? 'text-red-600 font-medium'
                                          : '',
                                        children: id(u.expected_time),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      u.id
                    )
                  ),
                }),
          ],
        });
}
function j0() {
  return f.jsx(h0, {
    children: f.jsxs(uy, {
      children: [
        f.jsx(Tl, { path: '/', element: f.jsx(E0, {}) }),
        f.jsx(Tl, { path: '/create', element: f.jsx(S0, {}) }),
        f.jsx(Tl, { path: '/edit/:id', element: f.jsx(k0, {}) }),
      ],
    }),
  });
}
const N0 = new qp({ defaultOptions: { queries: { staleTime: 5 * 60 * 1e3, retry: 1 } } });
yo.createRoot(document.getElementById('root')).render(
  f.jsx(jd.StrictMode, {
    children: f.jsx(gy, {
      children: f.jsxs(em, {
        client: N0,
        children: [f.jsx(j0, {}), f.jsx(fm, { initialIsOpen: !1 })],
      }),
    }),
  })
);
