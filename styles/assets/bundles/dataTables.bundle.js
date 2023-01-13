var $jscomp = $jscomp || {},
  $jscomp$lookupPolyfilledValue =
    (($jscomp.scope = {}),
    ($jscomp.findInternal = function (t, e, n) {
      for (
        var a = (t = t instanceof String ? String(t) : t).length, r = 0;
        r < a;
        r++
      ) {
        var o = t[r];
        if (e.call(n, o, r, t)) return { i: r, v: o };
      }
      return { i: -1, v: void 0 };
    }),
    ($jscomp.ASSUME_ES5 = !1),
    ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
    ($jscomp.ASSUME_NO_NATIVE_SET = !1),
    ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
    ($jscomp.ISOLATE_POLYFILLS = !1),
    ($jscomp.defineProperty =
      $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (t, e, n) {
            return (
              t == Array.prototype || t == Object.prototype || (t[e] = n.value),
              t
            );
          }),
    ($jscomp.getGlobal = function (t) {
      t = [
        "object" == typeof globalThis && globalThis,
        t,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var e = 0; e < t.length; ++e) {
        var n = t[e];
        if (n && n.Math == Math) return n;
      }
      throw Error("Cannot find global object");
    }),
    ($jscomp.global = $jscomp.getGlobal(this)),
    ($jscomp.IS_SYMBOL_NATIVE =
      "function" == typeof Symbol && "symbol" == typeof Symbol("x")),
    ($jscomp.TRUST_ES6_POLYFILLS =
      !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE),
    ($jscomp.polyfills = {}),
    ($jscomp.propertyToPolyfillSymbol = {}),
    ($jscomp.POLYFILL_PREFIX = "$jscp$"),
    function (t, e) {
      var n = $jscomp.propertyToPolyfillSymbol[e];
      return null != n && void 0 !== (n = t[n]) ? n : t[e];
    });
($jscomp.polyfill = function (t, e, n, a) {
  e &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(t, e, n, a)
      : $jscomp.polyfillUnisolated(t, e, n, a));
}),
  ($jscomp.polyfillUnisolated = function (t, e, n, a) {
    for (n = $jscomp.global, t = t.split("."), a = 0; a < t.length - 1; a++) {
      var r = t[a];
      if (!(r in n)) return;
      n = n[r];
    }
    (e = e((a = n[(t = t[t.length - 1])]))) != a &&
      null != e &&
      $jscomp.defineProperty(n, t, {
        configurable: !0,
        writable: !0,
        value: e,
      });
  }),
  ($jscomp.polyfillIsolated = function (t, e, n, a) {
    var r = t.split(".");
    (t = 1 === r.length),
      (a = r[0]),
      (a = !t && a in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global);
    for (var o = 0; o < r.length - 1; o++) {
      var i = r[o];
      if (!(i in a)) return;
      a = a[i];
    }
    (r = r[r.length - 1]),
      null !=
        (e = e((n = $jscomp.IS_SYMBOL_NATIVE && "es6" === n ? a[r] : null))) &&
        (t
          ? $jscomp.defineProperty($jscomp.polyfills, r, {
              configurable: !0,
              writable: !0,
              value: e,
            })
          : e !== n &&
            (($jscomp.propertyToPolyfillSymbol[r] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(r)
              : $jscomp.POLYFILL_PREFIX + r),
            (r = $jscomp.propertyToPolyfillSymbol[r]),
            $jscomp.defineProperty(a, r, {
              configurable: !0,
              writable: !0,
              value: e,
            })));
  }),
  $jscomp.polyfill(
    "Array.prototype.find",
    function (t) {
      return (
        t ||
        function (t, e) {
          return $jscomp.findInternal(this, t, e).v;
        }
      );
    },
    "es6",
    "es3"
  ),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (t) {
          return n(t, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = function (t, e) {
          return (
            (t = t || window),
            (e =
              e ||
              ("undefined" != typeof window
                ? require("jquery")
                : require("jquery")(t))),
            n(e, t, t.document)
          );
        })
      : n(jQuery, window, document);
  })(function (P, m, v, R) {
    function i(n) {
      var a,
        r,
        o = {};
      P.each(n, function (t, e) {
        (a = t.match(/^([^A-Z]+?)([A-Z])/)) &&
          -1 !== "a aa ai ao as b fn i m o s ".indexOf(a[1] + " ") &&
          ((r = t.replace(a[0], a[2].toLowerCase())),
          (o[r] = t),
          "o" === a[1] && i(n[t]));
      }),
        (n._hungarianMap = o);
    }
    function D(n, a, r) {
      var o;
      n._hungarianMap || i(n),
        P.each(a, function (t, e) {
          (o = n._hungarianMap[t]) === R ||
            (!r && a[o] !== R) ||
            ("o" === o.charAt(0)
              ? (a[o] || (a[o] = {}),
                P.extend(!0, a[o], a[t]),
                D(n[o], a[o], r))
              : (a[o] = a[t]));
        });
    }
    function w(t) {
      var e,
        n = _.defaults.oLanguage,
        a = n.sDecimal;
      a && qt(a),
        t &&
          ((e = t.sZeroRecords),
          !t.sEmptyTable &&
            e &&
            "No data available in table" === n.sEmptyTable &&
            Et(t, t, "sZeroRecords", "sEmptyTable"),
          !t.sLoadingRecords &&
            e &&
            "Loading..." === n.sLoadingRecords &&
            Et(t, t, "sZeroRecords", "sLoadingRecords"),
          t.sInfoThousands && (t.sThousands = t.sInfoThousands),
          (t = t.sDecimal) && a !== t && qt(t));
    }
    function T(t) {
      if (
        (_e(t, "ordering", "bSort"),
        _e(t, "orderMulti", "bSortMulti"),
        _e(t, "orderClasses", "bSortClasses"),
        _e(t, "orderCellsTop", "bSortCellsTop"),
        _e(t, "order", "aaSorting"),
        _e(t, "orderFixed", "aaSortingFixed"),
        _e(t, "paging", "bPaginate"),
        _e(t, "pagingType", "sPaginationType"),
        _e(t, "pageLength", "iDisplayLength"),
        _e(t, "searching", "bFilter"),
        "boolean" == typeof t.sScrollX &&
          (t.sScrollX = t.sScrollX ? "100%" : ""),
        "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : ""),
        (t = t.aoSearchCols))
      )
        for (var e = 0, n = t.length; e < n; e++)
          t[e] && D(_.models.oSearch, t[e]);
    }
    function x(t) {
      _e(t, "orderable", "bSortable"),
        _e(t, "orderData", "aDataSort"),
        _e(t, "orderSequence", "asSorting"),
        _e(t, "orderDataType", "sortDataType");
      var e = t.aDataSort;
      "number" != typeof e || Array.isArray(e) || (t.aDataSort = [e]);
    }
    function C(t) {
      var e, n, a, r;
      _.__browser ||
        ((_.__browser = e = {}),
        (r = (a = (n = P("<div/>")
          .css({
            position: "fixed",
            top: 0,
            left: -1 * P(m).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden",
          })
          .append(
            P("<div/>")
              .css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll",
              })
              .append(P("<div/>").css({ width: "100%", height: 10 }))
          )
          .appendTo("body")).children()).children()),
        (e.barWidth = a[0].offsetWidth - a[0].clientWidth),
        (e.bScrollOversize =
          100 === r[0].offsetWidth && 100 !== a[0].clientWidth),
        (e.bScrollbarLeft = 1 !== Math.round(r.offset().left)),
        (e.bBounding = !!n[0].getBoundingClientRect().width),
        n.remove()),
        P.extend(t.oBrowser, _.__browser),
        (t.oScroll.iBarWidth = _.__browser.barWidth);
    }
    function n(t, e, n, a, r, o) {
      var i,
        s = !1;
      for (n !== R && ((i = n), (s = !0)); a !== r; )
        t.hasOwnProperty(a) &&
          ((i = s ? e(i, t[a], a, t) : t[a]), (s = !0), (a += o));
      return i;
    }
    function I(t, e) {
      var n = _.defaults.column,
        a = t.aoColumns.length,
        n = P.extend({}, _.models.oColumn, n, {
          nTh: e || v.createElement("th"),
          sTitle: n.sTitle || (e ? e.innerHTML : ""),
          aDataSort: n.aDataSort || [a],
          mData: n.mData || a,
          idx: a,
        });
      t.aoColumns.push(n),
        ((n = t.aoPreSearchCols)[a] = P.extend({}, _.models.oSearch, n[a])),
        A(t, a, P(e).data());
    }
    function A(t, e, n) {
      e = t.aoColumns[e];
      var a,
        r = t.oClasses,
        o = P(e.nTh),
        i =
          (e.sWidthOrig ||
            ((e.sWidthOrig = o.attr("width") || null),
            (a = (o.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/)) &&
              (e.sWidthOrig = a[1])),
          n !== R &&
            null !== n &&
            (x(n),
            D(_.defaults.column, n, !0),
            n.mDataProp === R || n.mData || (n.mData = n.mDataProp),
            n.sType && (e._sManualType = n.sType),
            n.className && !n.sClass && (n.sClass = n.className),
            n.sClass && o.addClass(n.sClass),
            P.extend(e, n),
            Et(e, n, "sWidth", "sWidthOrig"),
            n.iDataSort !== R && (e.aDataSort = [n.iDataSort]),
            Et(e, n, "aDataSort")),
          e.mData),
        s = H(i),
        l = e.mRender ? H(e.mRender) : null;
      (n = function (t) {
        return "string" == typeof t && -1 !== t.indexOf("@");
      }),
        (e._bAttrSrc =
          P.isPlainObject(i) && (n(i.sort) || n(i.type) || n(i.filter))),
        (e._setter = null),
        (e.fnGetData = function (t, e, n) {
          var a = s(t, e, R, n);
          return l && e ? l(a, e, t, n) : a;
        }),
        (e.fnSetData = function (t, e, n) {
          return p(i)(t, e, n);
        }),
        "number" != typeof i && (t._rowReadObject = !0),
        t.oFeatures.bSort || ((e.bSortable = !1), o.addClass(r.sSortableNone)),
        (t = -1 !== P.inArray("asc", e.asSorting)),
        (n = -1 !== P.inArray("desc", e.asSorting)),
        e.bSortable && (t || n)
          ? t && !n
            ? ((e.sSortingClass = r.sSortableAsc),
              (e.sSortingClassJUI = r.sSortJUIAscAllowed))
            : !t && n
            ? ((e.sSortingClass = r.sSortableDesc),
              (e.sSortingClassJUI = r.sSortJUIDescAllowed))
            : ((e.sSortingClass = r.sSortable),
              (e.sSortingClassJUI = r.sSortJUI))
          : ((e.sSortingClass = r.sSortableNone), (e.sSortingClassJUI = ""));
    }
    function N(t) {
      if (!1 !== t.oFeatures.bAutoWidth) {
        var e = t.aoColumns;
        wt(t);
        for (var n = 0, a = e.length; n < a; n++)
          e[n].nTh.style.width = e[n].sWidth;
      }
      ("" === (e = t.oScroll).sY && "" === e.sX) || _t(t),
        S(t, null, "column-sizing", [t]);
    }
    function $(t, e) {
      return "number" == typeof (t = j(t, "bVisible"))[e] ? t[e] : null;
    }
    function c(t, e) {
      return (t = j(t, "bVisible")), -1 !== (e = P.inArray(e, t)) ? e : null;
    }
    function y(t) {
      var n = 0;
      return (
        P.each(t.aoColumns, function (t, e) {
          e.bVisible && "none" !== P(e.nTh).css("display") && n++;
        }),
        n
      );
    }
    function j(t, n) {
      var a = [];
      return (
        P.map(t.aoColumns, function (t, e) {
          t[n] && a.push(e);
        }),
        a
      );
    }
    function s(t) {
      for (
        var e = t.aoColumns,
          n = t.aoData,
          a = _.ext.type.detect,
          r = 0,
          u = e.length;
        r < u;
        r++
      ) {
        var o = e[r],
          i = [];
        if (!o.sType && o._sManualType) o.sType = o._sManualType;
        else if (!o.sType) {
          for (var s = 0, d = a.length; s < d; s++) {
            for (var l = 0, f = n.length; l < f; l++) {
              i[l] === R && (i[l] = E(t, l, r, "type"));
              var c = a[s](i[l], t);
              if (!c && s !== a.length - 1) break;
              if ("html" === c) break;
            }
            if (c) {
              o.sType = c;
              break;
            }
          }
          o.sType || (o.sType = "string");
        }
      }
    }
    function L(t, e, n, a) {
      var r,
        o = t.aoColumns;
      if (e)
        for (r = e.length - 1; 0 <= r; r--)
          for (
            var i = e[r],
              s = i.targets !== R ? i.targets : i.aTargets,
              l = 0,
              u = (s = Array.isArray(s) ? s : [s]).length;
            l < u;
            l++
          )
            if ("number" == typeof s[l] && 0 <= s[l]) {
              for (; o.length <= s[l]; ) I(t);
              a(s[l], i);
            } else if ("number" == typeof s[l] && s[l] < 0)
              a(o.length + s[l], i);
            else if ("string" == typeof s[l])
              for (var c = 0, d = o.length; c < d; c++)
                ("_all" != s[l] && !P(o[c].nTh).hasClass(s[l])) || a(c, i);
      if (n) for (r = 0, t = n.length; r < t; r++) a(r, n[r]);
    }
    function F(t, e, n, a) {
      var r = t.aoData.length,
        o = P.extend(!0, {}, _.models.oRow, {
          src: n ? "dom" : "data",
          idx: r,
        });
      (o._aData = e), t.aoData.push(o);
      for (var i = t.aoColumns, s = 0, l = i.length; s < l; s++)
        i[s].sType = null;
      return (
        t.aiDisplayMaster.push(r),
        (e = t.rowIdFn(e)) !== R && (t.aIds[e] = o),
        (!n && t.oFeatures.bDeferRender) || M(t, r, n, a),
        r
      );
    }
    function k(n, t) {
      var a;
      return (t = t instanceof P ? t : P(t)).map(function (t, e) {
        return (a = h(n, e)), F(n, a.data, e, a.cells);
      });
    }
    function E(t, e, n, a) {
      var r = t.iDraw,
        o = t.aoColumns[n],
        i = t.aoData[e]._aData,
        s = o.sDefaultContent,
        l = o.fnGetData(i, a, { settings: t, row: e, col: n });
      if (l === R)
        return (
          t.iDrawError != r &&
            null === s &&
            (kt(
              t,
              0,
              "Requested unknown parameter " +
                ("function" == typeof o.mData
                  ? "{function}"
                  : "'" + o.mData + "'") +
                " for row " +
                e +
                ", column " +
                n,
              4
            ),
            (t.iDrawError = r)),
          s
        );
      if ((l !== i && null !== l) || null === s || a === R) {
        if ("function" == typeof l) return l.call(i);
      } else l = s;
      return null === l && "display" == a ? "" : l;
    }
    function a(t, e, n, a) {
      t.aoColumns[n].fnSetData(t.aoData[e]._aData, a, {
        settings: t,
        row: e,
        col: n,
      });
    }
    function u(t) {
      return P.map(t.match(/(\\.|[^\.])+/g) || [""], function (t) {
        return t.replace(/\\\./g, ".");
      });
    }
    function H(r) {
      var o;
      if (P.isPlainObject(r))
        return (
          (o = {}),
          P.each(r, function (t, e) {
            e && (o[t] = H(e));
          }),
          function (t, e, n, a) {
            var r = o[e] || o._;
            return r !== R ? r(t, e, n, a) : t;
          }
        );
      if (null === r)
        return function (t) {
          return t;
        };
      if ("function" == typeof r)
        return function (t, e, n, a) {
          return r(t, e, n, a);
        };
      if (
        "string" != typeof r ||
        (-1 === r.indexOf(".") &&
          -1 === r.indexOf("[") &&
          -1 === r.indexOf("("))
      )
        return function (t, e) {
          return t[r];
        };
      function s(t, e, n) {
        if ("" !== n)
          for (var a = u(n), r = 0, o = a.length; r < o; r++) {
            n = a[r].match(De);
            var i = a[r].match(we);
            if (n) {
              if (
                ((a[r] = a[r].replace(De, "")),
                "" !== a[r] && (t = t[a[r]]),
                (i = []),
                a.splice(0, r + 1),
                (a = a.join(".")),
                Array.isArray(t))
              )
                for (r = 0, o = t.length; r < o; r++) i.push(s(t[r], e, a));
              t =
                "" === (t = n[0].substring(1, n[0].length - 1)) ? i : i.join(t);
              break;
            }
            if (i) (a[r] = a[r].replace(we, "")), (t = t[a[r]]());
            else {
              if (null === t || t[a[r]] === R) return R;
              t = t[a[r]];
            }
          }
        return t;
      }
      return function (t, e) {
        return s(t, e, r);
      };
    }
    function p(a) {
      if (P.isPlainObject(a)) return p(a._);
      if (null === a) return function () {};
      if ("function" == typeof a)
        return function (t, e, n) {
          a(t, "set", e, n);
        };
      if (
        "string" != typeof a ||
        (-1 === a.indexOf(".") &&
          -1 === a.indexOf("[") &&
          -1 === a.indexOf("("))
      )
        return function (t, e) {
          t[a] = e;
        };
      function l(t, e, n) {
        for (
          var a, r, o = (n = u(n))[n.length - 1], i = 0, s = n.length - 1;
          i < s;
          i++
        ) {
          if ("__proto__" === n[i]) throw Error("Cannot set prototype values");
          if (((a = n[i].match(De)), (r = n[i].match(we)), a)) {
            if (
              ((n[i] = n[i].replace(De, "")),
              (t[n[i]] = []),
              (o = n.slice()).splice(0, i + 1),
              (a = o.join(".")),
              Array.isArray(e))
            )
              for (r = 0, s = e.length; r < s; r++)
                l((o = {}), e[r], a), t[n[i]].push(o);
            else t[n[i]] = e;
            return;
          }
          r && ((n[i] = n[i].replace(we, "")), (t = t[n[i]](e))),
            (null !== t[n[i]] && t[n[i]] !== R) || (t[n[i]] = {}),
            (t = t[n[i]]);
        }
        o.match(we) ? t[o.replace(we, "")](e) : (t[o.replace(De, "")] = e);
      }
      return function (t, e) {
        return l(t, e, a);
      };
    }
    function b(t) {
      return ye(t.aoData, "_aData");
    }
    function l(t) {
      (t.aoData.length = 0),
        (t.aiDisplayMaster.length = 0),
        (t.aiDisplay.length = 0),
        (t.aIds = {});
    }
    function d(t, e, n) {
      for (var a = -1, r = 0, o = t.length; r < o; r++)
        t[r] == e ? (a = r) : t[r] > e && t[r]--;
      -1 != a && n === R && t.splice(a, 1);
    }
    function o(n, a, t, e) {
      var r,
        o = n.aoData[a],
        i = function (t, e) {
          for (; t.childNodes.length; ) t.removeChild(t.firstChild);
          t.innerHTML = E(n, a, e, "display");
        };
      if ("dom" !== t && ((t && "auto" !== t) || "dom" !== o.src)) {
        var s = o.anCells;
        if (s)
          if (e !== R) i(s[e], e);
          else for (t = 0, r = s.length; t < r; t++) i(s[t], t);
      } else o._aData = h(n, o, e, e === R ? R : o._aData).data;
      if (
        ((o._aSortData = null),
        (o._aFilterData = null),
        (i = n.aoColumns),
        e !== R)
      )
        i[e].sType = null;
      else {
        for (t = 0, r = i.length; t < r; t++) i[t].sType = null;
        W(n, o);
      }
    }
    function h(t, e, u, a) {
      function n(t, e) {
        var n;
        "string" != typeof t ||
          (-1 !== (n = t.indexOf("@")) &&
            ((n = t.substring(n + 1)), p(t)(a, e.getAttribute(n))));
      }
      function d(t) {
        (u !== R && u !== l) ||
          ((r = f[l]),
          (o = t.innerHTML.trim()),
          r && r._bAttrSrc
            ? (p(r.mData._)(a, o),
              n(r.mData.sort, t),
              n(r.mData.type, t),
              n(r.mData.filter, t))
            : h
            ? (r._setter || (r._setter = p(r.mData)), r._setter(a, o))
            : (a[l] = o)),
          l++;
      }
      var r,
        o,
        i = [],
        s = e.firstChild,
        l = 0,
        f = t.aoColumns,
        h = t._rowReadObject;
      a = a !== R ? a : h ? {} : [];
      if (s)
        for (; s; ) {
          var c = s.nodeName.toUpperCase();
          ("TD" != c && "TH" != c) || (d(s), i.push(s)), (s = s.nextSibling);
        }
      else for (s = 0, c = (i = e.anCells).length; s < c; s++) d(i[s]);
      return (
        (e = e.firstChild ? e : e.nTr) &&
          (e = e.getAttribute("id")) &&
          p(t.rowId)(a, e),
        { data: a, cells: i }
      );
    }
    function M(t, e, n, u) {
      var a,
        r = t.aoData[e],
        d = r._aData,
        o = [];
      if (null === r.nTr) {
        for (
          var i = n || v.createElement("tr"),
            s =
              ((r.nTr = i), (r.anCells = o), (i._DT_RowIndex = e), W(t, r), 0),
            f = t.aoColumns.length;
          s < f;
          s++
        ) {
          var l = t.aoColumns[s],
            c = (a = !n) ? v.createElement(l.sCellType) : u[s];
          (c._DT_CellIndex = { row: e, column: s }),
            o.push(c),
            (!a &&
              ((n && !l.mRender && l.mData === s) ||
                (P.isPlainObject(l.mData) && l.mData._ === s + ".display"))) ||
              (c.innerHTML = E(t, e, s, "display")),
            l.sClass && (c.className += " " + l.sClass),
            l.bVisible && !n
              ? i.appendChild(c)
              : !l.bVisible && n && c.parentNode.removeChild(c),
            l.fnCreatedCell &&
              l.fnCreatedCell.call(t.oInstance, c, E(t, e, s), d, e, s);
        }
        S(t, "aoRowCreatedCallback", null, [i, d, e, o]);
      }
      r.nTr.setAttribute("role", "row");
    }
    function W(t, e) {
      var n = e.nTr,
        a = e._aData;
      n &&
        ((t = t.rowIdFn(a)) && (n.id = t),
        a.DT_RowClass &&
          ((t = a.DT_RowClass.split(" ")),
          (e.__rowc = e.__rowc ? ve(e.__rowc.concat(t)) : t),
          P(n).removeClass(e.__rowc.join(" ")).addClass(a.DT_RowClass)),
        a.DT_RowAttr && P(n).attr(a.DT_RowAttr),
        a.DT_RowData && P(n).data(a.DT_RowData));
    }
    function B(t) {
      for (
        var e,
          n = t.nTHead,
          u = t.nTFoot,
          a = 0 === P("th, td", n).length,
          r = t.oClasses,
          o = t.aoColumns,
          i = (a && (e = P("<tr/>").appendTo(n)), 0),
          s = o.length;
        i < s;
        i++
      ) {
        var l = o[i],
          c = P(l.nTh).addClass(l.sClass);
        a && c.appendTo(e),
          t.oFeatures.bSort &&
            (c.addClass(l.sSortingClass),
            !1 !== l.bSortable &&
              (c
                .attr("tabindex", t.iTabIndex)
                .attr("aria-controls", t.sTableId),
              Ft(t, l.nTh, i))),
          l.sTitle != c[0].innerHTML && c.html(l.sTitle),
          Ut(t, "header")(t, c, l, r);
      }
      if (
        (a && z(t.aoHeader, n),
        P(n).children("tr").attr("role", "row"),
        P(n).children("tr").children("th, td").addClass(r.sHeaderTH),
        P(u).children("tr").children("th, td").addClass(r.sFooterTH),
        null !== u)
      )
        for (s = (t = t.aoFooter[(i = 0)]).length; i < s; i++)
          ((l = o[i]).nTf = t[i].cell), l.sClass && P(l.nTf).addClass(l.sClass);
    }
    function U(t, e, n) {
      var a,
        r = [],
        o = [],
        i = t.aoColumns.length;
      if (e) {
        n === R && (n = !1);
        for (var s = 0, l = e.length; s < l; s++) {
          for (r[s] = e[s].slice(), r[s].nTr = e[s].nTr, a = i - 1; 0 <= a; a--)
            t.aoColumns[a].bVisible || n || r[s].splice(a, 1);
          o.push([]);
        }
        for (s = 0, l = r.length; s < l; s++) {
          if ((t = r[s].nTr)) for (; (a = t.firstChild); ) t.removeChild(a);
          for (a = 0, e = r[s].length; a < e; a++) {
            var c = (i = 1);
            if (o[s][a] === R) {
              for (
                t.appendChild(r[s][a].cell), o[s][a] = 1;
                r[s + i] !== R && r[s][a].cell == r[s + i][a].cell;

              )
                (o[s + i][a] = 1), i++;
              for (; r[s][a + c] !== R && r[s][a].cell == r[s][a + c].cell; ) {
                for (n = 0; n < i; n++) o[s + n][a + c] = 1;
                c++;
              }
              P(r[s][a].cell).attr("rowspan", i).attr("colspan", c);
            }
          }
        }
      }
    }
    function V(t) {
      var e = S(t, "aoPreDrawCallback", "preDraw", [t]);
      if (-1 !== P.inArray(!1, e)) vt(t, !1);
      else {
        var e = [],
          n = 0,
          a = t.asStripeClasses,
          u = a.length,
          r = t.oLanguage,
          o = t.iInitDisplayStart,
          i = "ssp" == Vt(t),
          s = t.aiDisplay,
          d =
            ((t.bDrawing = !0),
            o !== R &&
              -1 !== o &&
              ((t._iDisplayStart = !i && o >= t.fnRecordsDisplay() ? 0 : o),
              (t.iInitDisplayStart = -1)),
            (o = t._iDisplayStart),
            t.fnDisplayEnd());
        if (t.bDeferLoading) (t.bDeferLoading = !1), t.iDraw++, vt(t, !1);
        else if (i) {
          if (!t.bDestroying && !G(t)) return;
        } else t.iDraw++;
        if (0 !== s.length)
          for (r = i ? t.aoData.length : d, i = i ? 0 : o; i < r; i++) {
            var l,
              f = s[i],
              c = t.aoData[f],
              h = (null === c.nTr && M(t, f), c.nTr);
            0 !== u &&
              ((l = a[n % u]),
              c._sRowStripe != l &&
                (P(h).removeClass(c._sRowStripe).addClass(l),
                (c._sRowStripe = l))),
              S(t, "aoRowCallback", null, [h, c._aData, n, i, f]),
              e.push(h),
              n++;
          }
        else
          (n = r.sZeroRecords),
            1 == t.iDraw && "ajax" == Vt(t)
              ? (n = r.sLoadingRecords)
              : r.sEmptyTable &&
                0 === t.fnRecordsTotal() &&
                (n = r.sEmptyTable),
            (e[0] = P("<tr/>", { class: u ? a[0] : "" }).append(
              P("<td />", {
                valign: "top",
                colSpan: y(t),
                class: t.oClasses.sRowEmpty,
              }).html(n)
            )[0]);
        S(t, "aoHeaderCallback", "header", [
          P(t.nTHead).children("tr")[0],
          b(t),
          o,
          d,
          s,
        ]),
          S(t, "aoFooterCallback", "footer", [
            P(t.nTFoot).children("tr")[0],
            b(t),
            o,
            d,
            s,
          ]),
          (a = P(t.nTBody)).children().detach(),
          a.append(P(e)),
          S(t, "aoDrawCallback", "draw", [t]),
          (t.bSorted = !1),
          (t.bFiltered = !1),
          (t.bDrawing = !1);
      }
    }
    function X(t, e) {
      var n = t.oFeatures,
        a = n.bFilter;
      n.bSort && At(t),
        a
          ? et(t, t.oPreviousSearch)
          : (t.aiDisplay = t.aiDisplayMaster.slice()),
        !0 !== e && (t._iDisplayStart = 0),
        (t._drawHold = e),
        V(t),
        (t._drawHold = !1);
    }
    function q(t) {
      var u = t.oClasses,
        d = P(t.nTable),
        d = P("<div/>").insertBefore(d),
        e = t.oFeatures,
        n = P("<div/>", {
          id: t.sTableId + "_wrapper",
          class: u.sWrapper + (t.nTFoot ? "" : " " + u.sNoFooter),
        });
      (t.nHolding = d[0]),
        (t.nTableWrapper = n[0]),
        (t.nTableReinsertBefore = t.nTable.nextSibling);
      for (
        var a, r, o, i, s, l, f = t.sDom.split(""), c = 0;
        c < f.length;
        c++
      ) {
        if (((a = null), "<" == (r = f[c]))) {
          if (((o = P("<div/>")[0]), "'" == (i = f[c + 1]) || '"' == i)) {
            for (s = "", l = 2; f[c + l] != i; ) (s += f[c + l]), l++;
            "H" == s ? (s = u.sJUIHeader) : "F" == s && (s = u.sJUIFooter),
              -1 != s.indexOf(".")
                ? ((i = s.split(".")),
                  (o.id = i[0].substr(1, i[0].length - 1)),
                  (o.className = i[1]))
                : "#" == s.charAt(0)
                ? (o.id = s.substr(1, s.length - 1))
                : (o.className = s),
              (c += l);
          }
          n.append(o), (n = P(o));
        } else if (">" == r) n = n.parent();
        else if ("l" == r && e.bPaginate && e.bLengthChange) a = gt(t);
        else if ("f" == r && e.bFilter) a = tt(t);
        else if ("r" == r && e.bProcessing) a = yt(t);
        else if ("t" == r) a = St(t);
        else if ("i" == r && e.bInfo) a = ct(t);
        else if ("p" == r && e.bPaginate) a = bt(t);
        else if (0 !== _.ext.feature.length)
          for (l = 0, i = (o = _.ext.feature).length; l < i; l++)
            if (r == o[l].cFeature) {
              a = o[l].fnInit(t);
              break;
            }
        a && ((o = t.aanFeatures)[r] || (o[r] = []), o[r].push(a), n.append(a));
      }
      d.replaceWith(n), (t.nHolding = null);
    }
    function z(t, e) {
      (e = P(e).children("tr")), t.splice(0, t.length);
      for (var n = 0, a = e.length; n < a; n++) t.push([]);
      for (n = 0, a = e.length; n < a; n++)
        for (var r = e[n], o = r.firstChild; o; ) {
          if (
            "TD" == o.nodeName.toUpperCase() ||
            "TH" == o.nodeName.toUpperCase()
          ) {
            for (
              var i =
                  (i = +o.getAttribute("colspan")) && 0 !== i && 1 !== i
                    ? i
                    : 1,
                s =
                  (s = +o.getAttribute("rowspan")) && 0 !== s && 1 !== s
                    ? s
                    : 1,
                l = 0,
                c = t[n];
              c[l];

            )
              l++;
            var u = l,
              d = 1 === i;
            for (c = 0; c < i; c++)
              for (l = 0; l < s; l++)
                (t[n + l][u + c] = { cell: o, unique: d }), (t[n + l].nTr = r);
          }
          o = o.nextSibling;
        }
    }
    function Y(t, e, n) {
      var a = [];
      n || ((n = t.aoHeader), e && z((n = []), e)), (e = 0);
      for (var r = n.length; e < r; e++)
        for (var o = 0, i = n[e].length; o < i; o++)
          !n[e][o].unique || (a[o] && t.bSortCellsTop) || (a[o] = n[e][o].cell);
      return a;
    }
    function J(a, t, e) {
      function n(t) {
        S(a, null, "xhr", [a, t, a.jqXHR]), e(t);
      }
      S(a, "aoServerParams", "serverParams", [t]),
        t &&
          Array.isArray(t) &&
          ((r = {}),
          (o = /(.*?)\[\]$/),
          P.each(t, function (t, e) {
            (t = e.name.match(o))
              ? ((t = t[0]), r[t] || (r[t] = []), r[t].push(e.value))
              : (r[e.name] = e.value);
          }),
          (t = r));
      var r,
        o,
        i,
        s,
        l = a.ajax,
        c = a.oInstance;
      P.isPlainObject(l) &&
        l.data &&
        ((s = "function" == typeof (i = l.data) ? i(t, a) : i),
        (t = "function" == typeof i && s ? s : P.extend(!0, t, s)),
        delete l.data),
        (s = {
          data: t,
          success: function (t) {
            var e = t.error || t.sError;
            e && kt(a, 0, e), (a.json = t), n(t);
          },
          dataType: "json",
          cache: !1,
          type: a.sServerMethod,
          error: function (t, e, n) {
            (n = S(a, null, "xhr", [a, null, a.jqXHR])),
              -1 === P.inArray(!0, n) &&
                ("parsererror" == e
                  ? kt(a, 0, "Invalid JSON response", 1)
                  : 4 === t.readyState && kt(a, 0, "Ajax error", 7)),
              vt(a, !1);
          },
        }),
        (a.oAjaxData = t),
        S(a, null, "preXhr", [a, t]),
        a.fnServerData
          ? a.fnServerData.call(
              c,
              a.sAjaxSource,
              P.map(t, function (t, e) {
                return { name: e, value: t };
              }),
              n,
              a
            )
          : a.sAjaxSource || "string" == typeof l
          ? (a.jqXHR = P.ajax(P.extend(s, { url: l || a.sAjaxSource })))
          : "function" == typeof l
          ? (a.jqXHR = l.call(c, t, n, a))
          : ((a.jqXHR = P.ajax(P.extend(s, l))), (l.data = i));
    }
    function G(e) {
      return (
        !e.bAjaxDataGet ||
        (e.iDraw++,
        vt(e, !0),
        J(e, Z(e), function (t) {
          Q(e, t);
        }),
        !1)
      );
    }
    function Z(t) {
      function n(t, e) {
        f.push({ name: t, value: e });
      }
      for (
        var e = t.aoColumns,
          u = e.length,
          a = t.oFeatures,
          r = t.oPreviousSearch,
          d = t.aoPreSearchCols,
          f = [],
          h = It(t),
          o = t._iDisplayStart,
          i = !1 !== a.bPaginate ? t._iDisplayLength : -1,
          s =
            (n("sEcho", t.iDraw),
            n("iColumns", u),
            n("sColumns", ye(e, "sName").join(",")),
            n("iDisplayStart", o),
            n("iDisplayLength", i),
            {
              draw: t.iDraw,
              columns: [],
              order: [],
              start: o,
              length: i,
              search: { value: r.sSearch, regex: r.bRegex },
            }),
          o = 0;
        o < u;
        o++
      ) {
        var l = e[o],
          c = d[o],
          i = "function" == typeof l.mData ? "function" : l.mData;
        s.columns.push({
          data: i,
          name: l.sName,
          searchable: l.bSearchable,
          orderable: l.bSortable,
          search: { value: c.sSearch, regex: c.bRegex },
        }),
          n("mDataProp_" + o, i),
          a.bFilter &&
            (n("sSearch_" + o, c.sSearch),
            n("bRegex_" + o, c.bRegex),
            n("bSearchable_" + o, l.bSearchable)),
          a.bSort && n("bSortable_" + o, l.bSortable);
      }
      return (
        a.bFilter && (n("sSearch", r.sSearch), n("bRegex", r.bRegex)),
        a.bSort &&
          (P.each(h, function (t, e) {
            s.order.push({ column: e.col, dir: e.dir }),
              n("iSortCol_" + t, e.col),
              n("sSortDir_" + t, e.dir);
          }),
          n("iSortingCols", h.length)),
        null === (e = _.ext.legacy.ajax) ? (t.sAjaxSource ? f : s) : e ? f : s
      );
    }
    function Q(t, n) {
      var e = function (t, e) {
          return n[t] !== R ? n[t] : n[e];
        },
        a = K(t, n),
        r = e("sEcho", "draw"),
        o = e("iTotalRecords", "recordsTotal"),
        e = e("iTotalDisplayRecords", "recordsFiltered");
      if (r !== R) {
        if (+r < t.iDraw) return;
        t.iDraw = +r;
      }
      for (
        l(t),
          t._iRecordsTotal = parseInt(o, 10),
          t._iRecordsDisplay = parseInt(e, 10),
          r = 0,
          o = a.length;
        r < o;
        r++
      )
        F(t, a[r]);
      (t.aiDisplay = t.aiDisplayMaster.slice()),
        (t.bAjaxDataGet = !1),
        V(t),
        t._bInitComplete || ht(t, n),
        (t.bAjaxDataGet = !0),
        vt(t, !1);
    }
    function K(t, e) {
      return "data" ===
        (t =
          P.isPlainObject(t.ajax) && t.ajax.dataSrc !== R
            ? t.ajax.dataSrc
            : t.sAjaxDataProp)
        ? e.aaData || e[t]
        : "" !== t
        ? H(t)(e)
        : e;
    }
    function tt(n) {
      function e() {
        var t = this.value || "";
        t != o.sSearch &&
          (et(n, {
            sSearch: t,
            bRegex: o.bRegex,
            bSmart: o.bSmart,
            bCaseInsensitive: o.bCaseInsensitive,
          }),
          (n._iDisplayStart = 0),
          V(n));
      }
      var t = n.oClasses,
        a = n.sTableId,
        r = n.oLanguage,
        o = n.oPreviousSearch,
        i = n.aanFeatures,
        s = '<input type="search" class="' + t.sFilterInput + '"/>',
        l = (l = r.sSearch).match(/_INPUT_/) ? l.replace("_INPUT_", s) : l + s,
        t = P("<div/>", {
          id: i.f ? null : a + "_filter",
          class: t.sFilter,
        }).append(P("<label/>").append(l)),
        i = null !== n.searchDelay ? n.searchDelay : "ssp" === Vt(n) ? 400 : 0,
        c = P("input", t)
          .val(o.sSearch)
          .attr("placeholder", r.sSearchPlaceholder)
          .on("keyup.DT search.DT input.DT paste.DT cut.DT", i ? Ae(e, i) : e)
          .on("mouseup", function (t) {
            setTimeout(function () {
              e.call(c[0]);
            }, 10);
          })
          .on("keypress.DT", function (t) {
            if (13 == t.keyCode) return !1;
          })
          .attr("aria-controls", a);
      return (
        P(n.nTable).on("search.dt.DT", function (t, e) {
          if (n === e)
            try {
              c[0] !== v.activeElement && c.val(o.sSearch);
            } catch (t) {}
        }),
        t[0]
      );
    }
    function et(t, e, n) {
      function a(t) {
        (o.sSearch = t.sSearch),
          (o.bRegex = t.bRegex),
          (o.bSmart = t.bSmart),
          (o.bCaseInsensitive = t.bCaseInsensitive);
      }
      function r(t) {
        return t.bEscapeRegex !== R ? !t.bEscapeRegex : t.bRegex;
      }
      var o = t.oPreviousSearch,
        i = t.aoPreSearchCols;
      if ((s(t), "ssp" != Vt(t))) {
        for (
          rt(t, e.sSearch, n, r(e), e.bSmart, e.bCaseInsensitive), a(e), e = 0;
          e < i.length;
          e++
        )
          at(t, i[e].sSearch, e, r(i[e]), i[e].bSmart, i[e].bCaseInsensitive);
        nt(t);
      } else a(e);
      (t.bFiltered = !0), S(t, null, "search", [t]);
    }
    function nt(t) {
      for (
        var e, n, a = _.ext.search, r = t.aiDisplay, o = 0, i = a.length;
        o < i;
        o++
      ) {
        for (var s = [], l = 0, c = r.length; l < c; l++)
          (n = r[l]),
            (e = t.aoData[n]),
            a[o](t, e._aFilterData, n, e._aData, l) && s.push(n);
        (r.length = 0), P.merge(r, s);
      }
    }
    function at(t, e, n, a, r, o) {
      if ("" !== e) {
        var i = [],
          s = t.aiDisplay;
        for (a = ot(e, a, r, o), r = 0; r < s.length; r++)
          (e = t.aoData[s[r]]._aFilterData[n]), a.test(e) && i.push(s[r]);
        t.aiDisplay = i;
      }
    }
    function rt(t, e, n, a, r, o) {
      r = ot(e, a, r, o);
      var i = t.oPreviousSearch.sSearch,
        s = t.aiDisplayMaster,
        l = ((o = []), 0 !== _.ext.search.length && (n = !0), it(t));
      if (e.length <= 0) t.aiDisplay = s.slice();
      else {
        for (
          (l ||
            n ||
            a ||
            i.length > e.length ||
            0 !== e.indexOf(i) ||
            t.bSorted) &&
            (t.aiDisplay = s.slice()),
            e = t.aiDisplay,
            n = 0;
          n < e.length;
          n++
        )
          r.test(t.aoData[e[n]]._sFilterRow) && o.push(e[n]);
        t.aiDisplay = o;
      }
    }
    function ot(t, e, n, a) {
      return (
        (t = e ? t : Te(t)),
        n &&
          (t =
            "^(?=.*?" +
            P.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
              var e;
              return (t =
                '"' === t.charAt(0)
                  ? (e = t.match(/^"(.*)"$/))
                    ? e[1]
                    : t
                  : t).replace('"', "");
            }).join(")(?=.*?") +
            ").*$"),
        new RegExp(t, a ? "i" : "")
      );
    }
    function it(t) {
      for (
        var e = t.aoColumns,
          n = _.ext.type.search,
          a = !1,
          r = 0,
          o = t.aoData.length;
        r < o;
        r++
      ) {
        var i = t.aoData[r];
        if (!i._aFilterData) {
          for (var s, l = [], c = 0, u = e.length; c < u; c++)
            (a = e[c]).bSearchable
              ? ((s = E(t, r, c, "filter")),
                "string" !=
                  typeof (s =
                    null === (s = n[a.sType] ? n[a.sType](s) : s) ? "" : s) &&
                  s.toString &&
                  (s = s.toString()))
              : (s = ""),
              s.indexOf &&
                -1 !== s.indexOf("&") &&
                ((xe.innerHTML = s), (s = Ce ? xe.textContent : xe.innerText)),
              s.replace && (s = s.replace(/[\r\n\u2028]/g, "")),
              l.push(s);
          (i._aFilterData = l), (i._sFilterRow = l.join("  ")), (a = !0);
        }
      }
      return a;
    }
    function st(t) {
      return {
        search: t.sSearch,
        smart: t.bSmart,
        regex: t.bRegex,
        caseInsensitive: t.bCaseInsensitive,
      };
    }
    function lt(t) {
      return {
        sSearch: t.search,
        bSmart: t.smart,
        bRegex: t.regex,
        bCaseInsensitive: t.caseInsensitive,
      };
    }
    function ct(t) {
      var e = t.sTableId,
        n = t.aanFeatures.i,
        a = P("<div/>", {
          class: t.oClasses.sInfo,
          id: n ? null : e + "_info",
        });
      return (
        n ||
          (t.aoDrawCallback.push({ fn: ut, sName: "information" }),
          a.attr("role", "status").attr("aria-live", "polite"),
          P(t.nTable).attr("aria-describedby", e + "_info")),
        a[0]
      );
    }
    function ut(t) {
      var e,
        n,
        a,
        r,
        o,
        i,
        s = t.aanFeatures.i;
      0 !== s.length &&
        ((e = t.oLanguage),
        (n = t._iDisplayStart + 1),
        (a = t.fnDisplayEnd()),
        (r = t.fnRecordsTotal()),
        (i = (o = t.fnRecordsDisplay()) ? e.sInfo : e.sInfoEmpty),
        o !== r && (i += " " + e.sInfoFiltered),
        (i = dt(t, (i += e.sInfoPostFix))),
        null !== (e = e.fnInfoCallback) &&
          (i = e.call(t.oInstance, t, n, a, r, o, i)),
        P(s).html(i));
    }
    function dt(t, e) {
      var n = t.fnFormatNumber,
        a = t._iDisplayStart + 1,
        r = t._iDisplayLength,
        o = t.fnRecordsDisplay(),
        i = -1 === r;
      return e
        .replace(/_START_/g, n.call(t, a))
        .replace(/_END_/g, n.call(t, t.fnDisplayEnd()))
        .replace(/_MAX_/g, n.call(t, t.fnRecordsTotal()))
        .replace(/_TOTAL_/g, n.call(t, o))
        .replace(/_PAGE_/g, n.call(t, i ? 1 : Math.ceil(a / r)))
        .replace(/_PAGES_/g, n.call(t, i ? 1 : Math.ceil(o / r)));
    }
    function ft(n) {
      var a = n.iInitDisplayStart,
        t = n.aoColumns,
        e = n.oFeatures,
        r = n.bDeferLoading;
      if (n.bInitialised) {
        q(n),
          B(n),
          U(n, n.aoHeader),
          U(n, n.aoFooter),
          vt(n, !0),
          e.bAutoWidth && wt(n);
        for (var o = 0, e = t.length; o < e; o++) {
          var i = t[o];
          i.sWidth && (i.nTh.style.width = O(i.sWidth));
        }
        S(n, null, "preInit", [n]),
          X(n),
          ("ssp" == (t = Vt(n)) && !r) ||
            ("ajax" == t
              ? J(n, [], function (t) {
                  var e = K(n, t);
                  for (o = 0; o < e.length; o++) F(n, e[o]);
                  (n.iInitDisplayStart = a), X(n), vt(n, !1), ht(n, t);
                })
              : (vt(n, !1), ht(n)));
      } else
        setTimeout(function () {
          ft(n);
        }, 200);
    }
    function ht(t, e) {
      (t._bInitComplete = !0),
        (e || t.oInit.aaData) && N(t),
        S(t, null, "plugin-init", [t, e]),
        S(t, "aoInitComplete", "init", [t, e]);
    }
    function pt(t, e) {
      (e = parseInt(e, 10)),
        (t._iDisplayLength = e),
        Bt(t),
        S(t, null, "length", [t, e]);
    }
    function gt(a) {
      for (
        var t = a.oClasses,
          e = a.sTableId,
          n = a.aLengthMenu,
          r = (o = Array.isArray(n[0])) ? n[0] : n,
          n = o ? n[1] : n,
          o = P("<select/>", {
            name: e + "_length",
            "aria-controls": e,
            class: t.sLengthSelect,
          }),
          i = 0,
          s = r.length;
        i < s;
        i++
      )
        o[0][i] = new Option(
          "number" == typeof n[i] ? a.fnFormatNumber(n[i]) : n[i],
          r[i]
        );
      var l = P("<div><label/></div>").addClass(t.sLength);
      return (
        a.aanFeatures.l || (l[0].id = e + "_length"),
        l
          .children()
          .append(a.oLanguage.sLengthMenu.replace("_MENU_", o[0].outerHTML)),
        P("select", l)
          .val(a._iDisplayLength)
          .on("change.DT", function (t) {
            pt(a, P(this).val()), V(a);
          }),
        P(a.nTable).on("length.dt.DT", function (t, e, n) {
          a === e && P("select", l).val(n);
        }),
        l[0]
      );
    }
    function bt(t) {
      function i(t) {
        V(t);
      }
      var e = t.sPaginationType,
        s = _.ext.pager[e],
        l = "function" == typeof s,
        e = P("<div/>").addClass(t.oClasses.sPaging + e)[0],
        c = t.aanFeatures;
      return (
        l || s.fnInit(t, e, i),
        c.p ||
          ((e.id = t.sTableId + "_paginate"),
          t.aoDrawCallback.push({
            fn: function (t) {
              if (l)
                for (
                  var e = t._iDisplayStart,
                    n = t._iDisplayLength,
                    a = t.fnRecordsDisplay(),
                    e = (r = -1 === n) ? 0 : Math.ceil(e / n),
                    n = r ? 1 : Math.ceil(a / n),
                    a = s(e, n),
                    r = 0,
                    o = c.p.length;
                  r < o;
                  r++
                )
                  Ut(t, "pageButton")(t, c.p[r], r, a, e, n);
              else s.fnUpdate(t, i);
            },
            sName: "pagination",
          })),
        e
      );
    }
    function mt(t, e, n) {
      var a = t._iDisplayStart,
        r = t._iDisplayLength,
        o = t.fnRecordsDisplay();
      return (
        0 === o || -1 === r
          ? (a = 0)
          : "number" == typeof e
          ? o < (a = e * r) && (a = 0)
          : "first" == e
          ? (a = 0)
          : "previous" == e
          ? (a = 0 <= r ? a - r : 0) < 0 && (a = 0)
          : "next" == e
          ? a + r < o && (a += r)
          : "last" == e
          ? (a = Math.floor((o - 1) / r) * r)
          : kt(t, 0, "Unknown paging action: " + e, 5),
        (e = t._iDisplayStart !== a),
        (t._iDisplayStart = a),
        e && (S(t, null, "page", [t]), n && V(t)),
        e
      );
    }
    function yt(t) {
      return P("<div/>", {
        id: t.aanFeatures.r ? null : t.sTableId + "_processing",
        class: t.oClasses.sProcessing,
      })
        .html(t.oLanguage.sProcessing)
        .insertBefore(t.nTable)[0];
    }
    function vt(t, e) {
      t.oFeatures.bProcessing &&
        P(t.aanFeatures.r).css("display", e ? "block" : "none"),
        S(t, null, "processing", [t, e]);
    }
    function St(t) {
      var e = P(t.nTable),
        n = (e.attr("role", "grid"), t.oScroll);
      if ("" === n.sX && "" === n.sY) return t.nTable;
      var a = n.sX,
        r = n.sY,
        o = t.oClasses,
        i = e.children("caption"),
        s = i.length ? i[0]._captionSide : null,
        l = P(e[0].cloneNode(!1)),
        u = P(e[0].cloneNode(!1)),
        c = e.children("tfoot"),
        d =
          (c.length || (c = null),
          (l = P("<div/>", { class: o.sScrollWrapper })
            .append(
              P("<div/>", { class: o.sScrollHead })
                .css({
                  overflow: "hidden",
                  position: "relative",
                  border: 0,
                  width: a ? O(a) : "100%",
                })
                .append(
                  P("<div/>", { class: o.sScrollHeadInner })
                    .css({
                      "box-sizing": "content-box",
                      width: n.sXInner || "100%",
                    })
                    .append(
                      l
                        .removeAttr("id")
                        .css("margin-left", 0)
                        .append("top" === s ? i : null)
                        .append(e.children("thead"))
                    )
                )
            )
            .append(
              P("<div/>", { class: o.sScrollBody })
                .css({
                  position: "relative",
                  overflow: "auto",
                  width: a ? O(a) : null,
                })
                .append(e)
            )),
          c &&
            l.append(
              P("<div/>", { class: o.sScrollFoot })
                .css({
                  overflow: "hidden",
                  border: 0,
                  width: a ? O(a) : "100%",
                })
                .append(
                  P("<div/>", { class: o.sScrollFootInner }).append(
                    u
                      .removeAttr("id")
                      .css("margin-left", 0)
                      .append("bottom" === s ? i : null)
                      .append(e.children("tfoot"))
                  )
                )
            ),
          (e = l.children())[0]),
        o = e[1],
        f = c ? e[2] : null;
      return (
        a &&
          P(o).on("scroll.DT", function (t) {
            (t = this.scrollLeft), (d.scrollLeft = t), c && (f.scrollLeft = t);
          }),
        P(o).css("max-height", r),
        n.bCollapse || P(o).css("height", r),
        (t.nScrollHead = d),
        (t.nScrollBody = o),
        (t.nScrollFoot = f),
        t.aoDrawCallback.push({ fn: _t, sName: "scrolling" }),
        l[0]
      );
    }
    function _t(n) {
      function u(t) {
        ((t = t.style).paddingTop = "0"),
          (t.paddingBottom = "0"),
          (t.borderTopWidth = "0"),
          (t.borderBottomWidth = "0"),
          (t.height = 0);
      }
      var d,
        t,
        e,
        f,
        a = (r = n.oScroll).sX,
        h = r.sXInner,
        p = r.sY,
        r = r.iBarWidth,
        o = P(n.nScrollHead),
        g = o[0].style,
        b = (i = o.children("div"))[0].style,
        m = i.children("table"),
        i = n.nScrollBody,
        y = P(i),
        v = i.style,
        S = P(n.nScrollFoot).children("div"),
        _ = S.children("table"),
        D = P(n.nTHead),
        s = P(n.nTable),
        w = s[0],
        T = w.style,
        l = n.nTFoot ? P(n.nTFoot) : null,
        x = n.oBrowser,
        C = x.bScrollOversize,
        I = ye(n.aoColumns, "nTh"),
        A = [],
        j = [],
        L = [],
        F = [],
        c = i.scrollHeight > i.clientHeight;
      n.scrollBarVis !== c && n.scrollBarVis !== R
        ? ((n.scrollBarVis = c), N(n))
        : ((n.scrollBarVis = c),
          s.children("thead, tfoot").remove(),
          l &&
            ((e = l.clone().prependTo(s)),
            (t = l.find("tr")),
            (e = e.find("tr"))),
          (f = D.clone().prependTo(s)),
          (D = D.find("tr")),
          (c = f.find("tr")),
          f.find("th, td").removeAttr("tabindex"),
          a || ((v.width = "100%"), (o[0].style.width = "100%")),
          P.each(Y(n, f), function (t, e) {
            (d = $(n, t)), (e.style.width = n.aoColumns[d].sWidth);
          }),
          l &&
            Dt(function (t) {
              t.style.width = "";
            }, e),
          (o = s.outerWidth()),
          "" === a
            ? ((T.width = "100%"),
              C &&
                (s.find("tbody").height() > i.offsetHeight ||
                  "scroll" == y.css("overflow-y")) &&
                (T.width = O(s.outerWidth() - r)),
              (o = s.outerWidth()))
            : "" !== h && ((T.width = O(h)), (o = s.outerWidth())),
          Dt(u, c),
          Dt(function (t) {
            L.push(t.innerHTML), A.push(O(P(t).css("width")));
          }, c),
          Dt(function (t, e) {
            -1 !== P.inArray(t, I) && (t.style.width = A[e]);
          }, D),
          P(c).height(0),
          l &&
            (Dt(u, e),
            Dt(function (t) {
              F.push(t.innerHTML), j.push(O(P(t).css("width")));
            }, e),
            Dt(function (t, e) {
              t.style.width = j[e];
            }, t),
            P(e).height(0)),
          Dt(function (t, e) {
            (t.innerHTML = '<div class="dataTables_sizing">' + L[e] + "</div>"),
              (t.childNodes[0].style.height = "0"),
              (t.childNodes[0].style.overflow = "hidden"),
              (t.style.width = A[e]);
          }, c),
          l &&
            Dt(function (t, e) {
              (t.innerHTML =
                '<div class="dataTables_sizing">' + F[e] + "</div>"),
                (t.childNodes[0].style.height = "0"),
                (t.childNodes[0].style.overflow = "hidden"),
                (t.style.width = j[e]);
            }, e),
          s.outerWidth() < o
            ? ((t =
                i.scrollHeight > i.offsetHeight ||
                "scroll" == y.css("overflow-y")
                  ? o + r
                  : o),
              C &&
                (i.scrollHeight > i.offsetHeight ||
                  "scroll" == y.css("overflow-y")) &&
                (T.width = O(t - r)),
              ("" !== a && "" === h) ||
                kt(n, 1, "Possible column misalignment", 6))
            : (t = "100%"),
          (v.width = O(t)),
          (g.width = O(t)),
          l && (n.nScrollFoot.style.width = O(t)),
          !p && C && (v.height = O(w.offsetHeight + r)),
          (a = s.outerWidth()),
          (m[0].style.width = O(a)),
          (b.width = O(a)),
          (h = s.height() > i.clientHeight || "scroll" == y.css("overflow-y")),
          (b[(p = "padding" + (x.bScrollbarLeft ? "Left" : "Right"))] = h
            ? r + "px"
            : "0px"),
          l &&
            ((_[0].style.width = O(a)),
            (S[0].style.width = O(a)),
            (S[0].style[p] = h ? r + "px" : "0px")),
          s.children("colgroup").insertBefore(s.children("thead")),
          y.trigger("scroll"),
          (!n.bSorted && !n.bFiltered) || n._drawHold || (i.scrollTop = 0));
    }
    function Dt(t, e, n) {
      for (var a, r, o = 0, i = 0, s = e.length; i < s; ) {
        for (a = e[i].firstChild, r = n ? n[i].firstChild : null; a; )
          1 === a.nodeType && (n ? t(a, r, o) : t(a, o), o++),
            (a = a.nextSibling),
            (r = n ? r.nextSibling : null);
        i++;
      }
    }
    function wt(t) {
      var e,
        n = t.nTable,
        a = t.aoColumns,
        u = (g = t.oScroll).sY,
        d = g.sX,
        f = g.sXInner,
        r = a.length,
        o = j(t, "bVisible"),
        i = P("th", t.nTHead),
        s = n.getAttribute("width"),
        l = n.parentNode,
        h = !1,
        p = t.oBrowser,
        g = p.bScrollOversize;
      for (
        (e = n.style.width) && -1 !== e.indexOf("%") && (s = e), e = 0;
        e < o.length;
        e++
      ) {
        var c = a[o[e]];
        null !== c.sWidth && ((c.sWidth = Tt(c.sWidthOrig, l)), (h = !0));
      }
      if (g || (!h && !d && !u && r == y(t) && r == i.length))
        for (e = 0; e < r; e++)
          null !== (o = $(t, e)) && (a[o].sWidth = O(i.eq(e).width()));
      else {
        (r = P(n).clone().css("visibility", "hidden").removeAttr("id"))
          .find("tbody tr")
          .remove();
        var b = P("<tr/>").appendTo(r.find("tbody"));
        for (
          r.find("thead, tfoot").remove(),
            r.append(P(t.nTHead).clone()).append(P(t.nTFoot).clone()),
            r.find("tfoot th, tfoot td").css("width", ""),
            i = Y(t, r.find("thead")[0]),
            e = 0;
          e < o.length;
          e++
        )
          (c = a[o[e]]),
            (i[e].style.width =
              null !== c.sWidthOrig && "" !== c.sWidthOrig
                ? O(c.sWidthOrig)
                : ""),
            c.sWidthOrig &&
              d &&
              P(i[e]).append(
                P("<div/>").css({
                  width: c.sWidthOrig,
                  margin: 0,
                  padding: 0,
                  border: 0,
                  height: 1,
                })
              );
        if (t.aoData.length)
          for (e = 0; e < o.length; e++)
            (c = a[(h = o[e])]),
              P(xt(t, h)).clone(!1).append(c.sContentPadding).appendTo(b);
        for (
          P("[name]", r).removeAttr("name"),
            c = P("<div/>")
              .css(
                d || u
                  ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: 1,
                      right: 0,
                      overflow: "hidden",
                    }
                  : {}
              )
              .append(r)
              .appendTo(l),
            d && f
              ? r.width(f)
              : d
              ? (r.css("width", "auto"),
                r.removeAttr("width"),
                r.width() < l.clientWidth && s && r.width(l.clientWidth))
              : u
              ? r.width(l.clientWidth)
              : s && r.width(s),
            e = u = 0;
          e < o.length;
          e++
        )
          (f = (l = P(i[e])).outerWidth() - l.width()),
            (u += l =
              p.bBounding
                ? Math.ceil(i[e].getBoundingClientRect().width)
                : l.outerWidth()),
            (a[o[e]].sWidth = O(l - f));
        (n.style.width = O(u)), c.remove();
      }
      s && (n.style.width = O(s)),
        (!s && !d) ||
          t._reszEvt ||
          ((n = function () {
            P(m).on(
              "resize.DT-" + t.sInstance,
              Ae(function () {
                N(t);
              })
            );
          }),
          g ? setTimeout(n, 1e3) : n(),
          (t._reszEvt = !0));
    }
    function Tt(t, e) {
      return t
        ? ((e = (t = P("<div/>")
            .css("width", O(t))
            .appendTo(e || v.body))[0].offsetWidth),
          t.remove(),
          e)
        : 0;
    }
    function xt(t, e) {
      var n = Ct(t, e);
      if (n < 0) return null;
      var a = t.aoData[n];
      return a.nTr ? a.anCells[e] : P("<td/>").html(E(t, n, e, "display"))[0];
    }
    function Ct(t, e) {
      for (var n, a = -1, r = -1, o = 0, i = t.aoData.length; o < i; o++)
        (n = (n = (n = E(t, o, e, "display") + "").replace(Ie, "")).replace(
          /&nbsp;/g,
          " "
        )).length > a && ((a = n.length), (r = o));
      return r;
    }
    function O(t) {
      return null === t
        ? "0px"
        : "number" == typeof t
        ? t < 0
          ? "0px"
          : t + "px"
        : t.match(/\d$/)
        ? t + "px"
        : t;
    }
    function It(t) {
      var e = [],
        n = t.aoColumns,
        a = t.aaSortingFixed,
        r = P.isPlainObject(a),
        o = [],
        i = function (t) {
          t.length && !Array.isArray(t[0]) ? o.push(t) : P.merge(o, t);
        };
      for (
        Array.isArray(a) && i(a),
          r && a.pre && i(a.pre),
          i(t.aaSorting),
          r && a.post && i(a.post),
          t = 0;
        t < o.length;
        t++
      )
        for (
          var s = o[t][0], a = 0, r = (i = n[s].aDataSort).length;
          a < r;
          a++
        ) {
          var l = i[a],
            c = n[l].sType || "string";
          o[t]._idx === R && (o[t]._idx = P.inArray(o[t][1], n[l].asSorting)),
            e.push({
              src: s,
              col: l,
              dir: o[t][1],
              index: o[t]._idx,
              type: c,
              formatter: _.ext.type.order[c + "-pre"],
            });
        }
      return e;
    }
    function At(t) {
      for (
        var c = [],
          u = _.ext.type.order,
          d = t.aoData,
          e = 0,
          n = t.aiDisplayMaster,
          f = (s(t), It(t)),
          a = 0,
          r = f.length;
        a < r;
        a++
      ) {
        var o = f[a];
        o.formatter && e++, Rt(t, o.col);
      }
      if ("ssp" != Vt(t) && 0 !== f.length) {
        for (a = 0, r = n.length; a < r; a++) c[n[a]] = a;
        e === f.length
          ? n.sort(function (t, e) {
              for (
                var n = f.length,
                  a = d[t]._aSortData,
                  r = d[e]._aSortData,
                  o = 0;
                o < n;
                o++
              ) {
                var i = f[o],
                  s = a[i.col],
                  l = r[i.col];
                if (0 !== (s = s < l ? -1 : l < s ? 1 : 0))
                  return "asc" === i.dir ? s : -s;
              }
              return (s = c[t]) < (l = c[e]) ? -1 : l < s ? 1 : 0;
            })
          : n.sort(function (t, e) {
              for (
                var n = f.length,
                  a = d[t]._aSortData,
                  r = d[e]._aSortData,
                  o = 0;
                o < n;
                o++
              ) {
                var i = f[o],
                  s = a[i.col],
                  l = r[i.col];
                if (
                  0 !==
                  (s = (i = u[i.type + "-" + i.dir] || u["string-" + i.dir])(
                    s,
                    l
                  ))
                )
                  return s;
              }
              return (s = c[t]) < (l = c[e]) ? -1 : l < s ? 1 : 0;
            });
      }
      t.bSorted = !0;
    }
    function jt(t) {
      var e = t.aoColumns,
        n = It(t);
      t = t.oLanguage.oAria;
      for (var a = 0, r = e.length; a < r; a++) {
        var o = e[a],
          i = o.asSorting,
          s = o.sTitle.replace(/<.*?>/g, ""),
          l = o.nTh;
        l.removeAttribute("aria-sort"),
          o.bSortable &&
            (s +=
              "asc" ===
              (o =
                0 < n.length && n[0].col == a
                  ? (l.setAttribute(
                      "aria-sort",
                      "asc" == n[0].dir ? "ascending" : "descending"
                    ),
                    i[n[0].index + 1] || i[0])
                  : i[0])
                ? t.sSortAscending
                : t.sSortDescending),
          l.setAttribute("aria-label", s);
      }
    }
    function Lt(t, e, n, a) {
      function r(t, e) {
        var n = t._idx;
        return (n = n === R ? P.inArray(t[1], i) : n) + 1 < i.length
          ? n + 1
          : e
          ? null
          : 0;
      }
      var o = t.aaSorting,
        i = t.aoColumns[e].asSorting;
      "number" == typeof o[0] && (o = t.aaSorting = [o]),
        n && t.oFeatures.bSortMulti
          ? -1 !== (n = P.inArray(e, ye(o, "0")))
            ? null ===
              (e = null === (e = r(o[n], !0)) && 1 === o.length ? 0 : e)
              ? o.splice(n, 1)
              : ((o[n][1] = i[e]), (o[n]._idx = e))
            : (o.push([e, i[0], 0]), (o[o.length - 1]._idx = 0))
          : o.length && o[0][0] == e
          ? ((e = r(o[0])), (o.length = 1), (o[0][1] = i[e]), (o[0]._idx = e))
          : ((o.length = 0), o.push([e, i[0]]), (o[0]._idx = 0)),
        X(t),
        "function" == typeof a && a(t);
    }
    function Ft(e, t, n, a) {
      var r = e.aoColumns[n];
      Mt(t, {}, function (t) {
        !1 !== r.bSortable &&
          (e.oFeatures.bProcessing
            ? (vt(e, !0),
              setTimeout(function () {
                Lt(e, n, t.shiftKey, a), "ssp" !== Vt(e) && vt(e, !1);
              }, 0))
            : Lt(e, n, t.shiftKey, a));
      });
    }
    function Pt(t) {
      var e,
        n = t.aLastSort,
        a = t.oClasses.sSortColumn,
        r = It(t),
        o = t.oFeatures;
      if (o.bSort && o.bSortClasses) {
        for (o = 0, e = n.length; o < e; o++) {
          var i = n[o].src;
          P(ye(t.aoData, "anCells", i)).removeClass(a + (o < 2 ? o + 1 : 3));
        }
        for (o = 0, e = r.length; o < e; o++)
          (i = r[o].src),
            P(ye(t.aoData, "anCells", i)).addClass(a + (o < 2 ? o + 1 : 3));
      }
      t.aLastSort = r;
    }
    function Rt(t, e) {
      var n,
        a = t.aoColumns[e],
        r = _.ext.order[a.sSortDataType];
      r && (n = r.call(t.oInstance, t, e, c(t, e)));
      for (
        var o,
          i = _.ext.type.order[a.sType + "-pre"],
          s = 0,
          l = t.aoData.length;
        s < l;
        s++
      )
        (a = t.aoData[s])._aSortData || (a._aSortData = []),
          (a._aSortData[e] && !r) ||
            ((o = r ? n[s] : E(t, s, e, "sort")),
            (a._aSortData[e] = i ? i(o) : o));
    }
    function Ot(n) {
      var t;
      n.oFeatures.bStateSave &&
        !n.bDestroying &&
        ((t = {
          time: +new Date(),
          start: n._iDisplayStart,
          length: n._iDisplayLength,
          order: P.extend(!0, [], n.aaSorting),
          search: st(n.oPreviousSearch),
          columns: P.map(n.aoColumns, function (t, e) {
            return { visible: t.bVisible, search: st(n.aoPreSearchCols[e]) };
          }),
        }),
        S(n, "aoStateSaveParams", "stateSaveParams", [n, t]),
        (n.oSavedState = t),
        n.fnStateSaveCallback.call(n.oInstance, n, t));
    }
    function Nt(n, t, a) {
      var r,
        o,
        e,
        i = n.aoColumns;
      (t = function (t) {
        if (t && t.time) {
          var e = S(n, "aoStateLoadParams", "stateLoadParams", [n, t]);
          if (
            -1 === P.inArray(!1, e) &&
            !(
              (0 < (e = n.iStateDuration) && t.time < +new Date() - 1e3 * e) ||
              (t.columns && i.length !== t.columns.length)
            )
          ) {
            if (
              ((n.oLoadedState = P.extend(!0, {}, t)),
              t.start !== R &&
                ((n._iDisplayStart = t.start), (n.iInitDisplayStart = t.start)),
              t.length !== R && (n._iDisplayLength = t.length),
              t.order !== R &&
                ((n.aaSorting = []),
                P.each(t.order, function (t, e) {
                  n.aaSorting.push(e[0] >= i.length ? [0, e[1]] : e);
                })),
              t.search !== R && P.extend(n.oPreviousSearch, lt(t.search)),
              t.columns)
            )
              for (r = 0, o = t.columns.length; r < o; r++)
                (e = t.columns[r]).visible !== R && (i[r].bVisible = e.visible),
                  e.search !== R &&
                    P.extend(n.aoPreSearchCols[r], lt(e.search));
            S(n, "aoStateLoaded", "stateLoaded", [n, t]);
          }
        }
        a();
      }),
        n.oFeatures.bStateSave
          ? (e = n.fnStateLoadCallback.call(n.oInstance, n, t)) !== R && t(e)
          : a();
    }
    function $t(t) {
      var e = _.settings;
      return -1 !== (t = P.inArray(t, ye(e, "nTable"))) ? e[t] : null;
    }
    function kt(t, e, n, a) {
      if (
        ((n =
          "DataTables warning: " +
          (t ? "table id=" + t.sTableId + " - " : "") +
          n),
        a &&
          (n +=
            ". For more information about this error, please see http://datatables.net/tn/" +
            a),
        e)
      )
        m.console && console.log && console.log(n);
      else if (
        ((e = (e = _.ext).sErrMode || e.errMode),
        t && S(t, null, "error", [t, a, n]),
        "alert" == e)
      )
        alert(n);
      else {
        if ("throw" == e) throw Error(n);
        "function" == typeof e && e(t, a, n);
      }
    }
    function Et(n, a, t, e) {
      Array.isArray(t)
        ? P.each(t, function (t, e) {
            Array.isArray(e) ? Et(n, a, e[0], e[1]) : Et(n, a, e);
          })
        : (e === R && (e = t), a[t] !== R && (n[e] = a[t]));
    }
    function Ht(t, e, n) {
      var a, r;
      for (a in e)
        e.hasOwnProperty(a) &&
          ((r = e[a]),
          P.isPlainObject(r)
            ? (P.isPlainObject(t[a]) || (t[a] = {}), P.extend(!0, t[a], r))
            : n && "data" !== a && "aaData" !== a && Array.isArray(r)
            ? (t[a] = r.slice())
            : (t[a] = r));
      return t;
    }
    function Mt(e, t, n) {
      P(e)
        .on("click.DT", t, function (t) {
          P(e).trigger("blur"), n(t);
        })
        .on("keypress.DT", t, function (t) {
          13 === t.which && (t.preventDefault(), n(t));
        })
        .on("selectstart.DT", function () {
          return !1;
        });
    }
    function Wt(t, e, n, a) {
      n && t[e].push({ fn: n, sName: a });
    }
    function S(n, t, e, a) {
      var r = [];
      return (
        t &&
          (r = P.map(n[t].slice().reverse(), function (t, e) {
            return t.fn.apply(n.oInstance, a);
          })),
        null !== e &&
          ((t = P.Event(e + ".dt")),
          P(n.nTable).trigger(t, a),
          r.push(t.result)),
        r
      );
    }
    function Bt(t) {
      var e = t._iDisplayStart,
        n = t.fnDisplayEnd(),
        a = t._iDisplayLength;
      n <= e && (e = n - a),
        (e -= e % a),
        (t._iDisplayStart = e = -1 === a || e < 0 ? 0 : e);
    }
    function Ut(t, e) {
      t = t.renderer;
      var n = _.ext.renderer[e];
      return P.isPlainObject(t) && t[e]
        ? n[t[e]] || n._
        : ("string" == typeof t && n[t]) || n._;
    }
    function Vt(t) {
      return t.oFeatures.bServerSide
        ? "ssp"
        : t.ajax || t.sAjaxSource
        ? "ajax"
        : "dom";
    }
    function Xt(t, e) {
      var n = Re.numbers_length,
        a = Math.floor(n / 2);
      return (
        e <= n
          ? (t = Kt(0, e))
          : t <= a
          ? ((t = Kt(0, n - 2)).push("ellipsis"), t.push(e - 1))
          : (e - 1 - a <= t
              ? (t = Kt(e - (n - 2), e))
              : ((t = Kt(t - a + 2, t + a - 1)).push("ellipsis"),
                t.push(e - 1)),
            t.splice(0, 0, "ellipsis"),
            t.splice(0, 0, 0)),
        (t.DT_el = "span"),
        t
      );
    }
    function qt(n) {
      P.each(
        {
          num: function (t) {
            return ce(t, n);
          },
          "num-fmt": function (t) {
            return ce(t, n, be);
          },
          "html-num": function (t) {
            return ce(t, n, he);
          },
          "html-num-fmt": function (t) {
            return ce(t, n, he, be);
          },
        },
        function (t, e) {
          (f.type.order[t + n + "-pre"] = e),
            t.match(/^html\-/) && (f.type.search[t + n] = f.type.search.html);
        }
      );
    }
    function zt(e) {
      return function () {
        var t = [$t(this[_.ext.iApiIndex])].concat(
          Array.prototype.slice.call(arguments)
        );
        return _.ext.internal[e].apply(this, t);
      };
    }
    function Yt(t) {
      return !t || !0 === t || "-" === t;
    }
    function Jt(t) {
      var e = parseInt(t, 10);
      return !isNaN(e) && isFinite(t) ? e : null;
    }
    function Gt(t, e, n) {
      var a = "string" == typeof t;
      return (
        !!Yt(t) ||
        (e && a && (t = me(t, e)),
        n && a && (t = t.replace(be, "")),
        !isNaN(parseFloat(t)) && isFinite(t))
      );
    }
    function Zt(t, e, n) {
      return (
        !!Yt(t) ||
        ((Yt(t) || "string" == typeof t) && !!Gt(t.replace(he, ""), e, n)) ||
        null
      );
    }
    function Qt(t, e, n, a) {
      var r = [],
        o = 0,
        i = e.length;
      if (a !== R) for (; o < i; o++) t[e[o]][n] && r.push(t[e[o]][n][a]);
      else for (; o < i; o++) r.push(t[e[o]][n]);
      return r;
    }
    function Kt(t, e) {
      var n,
        a = [];
      for (e === R ? ((e = 0), (n = t)) : ((n = e), (e = t)), t = e; t < n; t++)
        a.push(t);
      return a;
    }
    function te(t) {
      for (var e = [], n = 0, a = t.length; n < a; n++) t[n] && e.push(t[n]);
      return e;
    }
    function ee(t, e) {
      if (Array.isArray(t))
        return P.map(t, function (t) {
          return ee(t, e);
        });
      if ("number" == typeof t) return [e[t]];
      var n = P.map(e, function (t, e) {
        return t.nTable;
      });
      return P(n)
        .filter(t)
        .map(function (t) {
          return (t = P.inArray(this, n)), e[t];
        })
        .toArray();
    }
    function ne(a, r, t) {
      var e, n;
      t &&
        (e = new g(a)).one("draw", function () {
          t(e.ajax.json());
        }),
        "ssp" == Vt(a)
          ? X(a, r)
          : (vt(a, !0),
            (n = a.jqXHR) && 4 !== n.readyState && n.abort(),
            J(a, [], function (t) {
              l(a);
              for (var e = 0, n = (t = K(a, t)).length; e < n; e++) F(a, t[e]);
              X(a, r), vt(a, !1);
            }));
    }
    function ae(t, e, n, a, u) {
      var r,
        o,
        i = [],
        s = typeof e;
      for (
        (e && "string" !== s && "function" !== s && e.length !== R) ||
          (e = [e]),
          s = 0,
          o = e.length;
        s < o;
        s++
      )
        for (
          var l =
              e[s] && e[s].split && !e[s].match(/[\[\(:]/)
                ? e[s].split(",")
                : [e[s]],
            c = 0,
            d = l.length;
          c < d;
          c++
        )
          (r = n("string" == typeof l[c] ? l[c].trim() : l[c])) &&
            r.length &&
            (i = i.concat(r));
      if ((t = f.selector[t]).length)
        for (s = 0, o = t.length; s < o; s++) i = t[s](a, u, i);
      return ve(i);
    }
    function re(t) {
      return (
        (t = t || {}).filter && t.search === R && (t.search = t.filter),
        P.extend({ search: "none", order: "current", page: "all" }, t)
      );
    }
    function oe(t) {
      for (var e = 0, n = t.length; e < n; e++)
        if (0 < t[e].length)
          return (
            (t[0] = t[e]),
            (t[0].length = 1),
            (t.length = 1),
            (t.context = [t.context[e]]),
            t
          );
      return (t.length = 0), t;
    }
    function ie(r, t, e, n) {
      function o(t, e) {
        if (Array.isArray(t) || t instanceof P)
          for (var n = 0, a = t.length; n < a; n++) o(t[n], e);
        else
          t.nodeName && "tr" === t.nodeName.toLowerCase()
            ? i.push(t)
            : ((n = P("<tr><td></td></tr>").addClass(e)),
              (P("td", n).addClass(e).html(t)[0].colSpan = y(r)),
              i.push(n[0]));
      }
      var i = [];
      o(e, n),
        t._details && t._details.detach(),
        (t._details = P(i)),
        t._detailsShow && t._details.insertAfter(t.nTr);
    }
    function se(t, e) {
      var r,
        n,
        o,
        a = t.context;
      a.length &&
        t.length &&
        (t = a[0].aoData[t[0]])._details &&
        ((t._detailsShow = e)
          ? t._details.insertAfter(t.nTr)
          : t._details.detach(),
        (r = a[0]),
        (n = new g(r)),
        (o = r.aoData),
        n.off(
          "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
        ),
        0 < ye(o, "_details").length &&
          (n.on("draw.dt.DT_details", function (t, e) {
            r === e &&
              n
                .rows({ page: "current" })
                .eq(0)
                .each(function (t) {
                  (t = o[t])._detailsShow && t._details.insertAfter(t.nTr);
                });
          }),
          n.on("column-visibility.dt.DT_details", function (t, e, n, a) {
            if (r === e)
              for (e = y(e), n = 0, a = o.length; n < a; n++)
                (t = o[n])._details &&
                  t._details.children("td[colspan]").attr("colspan", e);
          }),
          n.on("destroy.dt.DT_details", function (t, e) {
            if (r === e)
              for (t = 0, e = o.length; t < e; t++) o[t]._details && Fe(n, t);
          })));
    }
    function le(t, e, n, a, r) {
      (n = []), (a = 0);
      for (var o = r.length; a < o; a++) n.push(E(t, r[a], e));
      return n;
    }
    function ce(t, e, n, a) {
      return 0 === t || (t && "-" !== t)
        ? ((t = e ? me(t, e) : t).replace &&
            (n && (t = t.replace(n, "")), a && (t = t.replace(a, ""))),
          +t)
        : -1 / 0;
    }
    function ue(t) {
      return "string" == typeof t
        ? t
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
        : t;
    }
    var f,
      e,
      t,
      _ = function (b) {
        (this.$ = function (t, e) {
          return this.api(!0).$(t, e);
        }),
          (this._ = function (t, e) {
            return this.api(!0).rows(t, e).data();
          }),
          (this.api = function (t) {
            return new g(t ? $t(this[f.iApiIndex]) : this);
          }),
          (this.fnAddData = function (t, e) {
            var n = this.api(!0);
            return (
              (t = (
                Array.isArray(t) &&
                (Array.isArray(t[0]) || P.isPlainObject(t[0]))
                  ? n.rows
                  : n.row
              ).add(t)),
              (e !== R && !e) || n.draw(),
              t.flatten().toArray()
            );
          }),
          (this.fnAdjustColumnSizing = function (t) {
            var e = this.api(!0).columns.adjust(),
              n = e.settings()[0],
              a = n.oScroll;
            t === R || t ? e.draw(!1) : ("" === a.sX && "" === a.sY) || _t(n);
          }),
          (this.fnClearTable = function (t) {
            var e = this.api(!0).clear();
            (t !== R && !t) || e.draw();
          }),
          (this.fnClose = function (t) {
            this.api(!0).row(t).child.hide();
          }),
          (this.fnDeleteRow = function (t, e, n) {
            var a = this.api(!0),
              r = (t = a.rows(t)).settings()[0],
              o = r.aoData[t[0][0]];
            return (
              t.remove(),
              e && e.call(this, r, o),
              (n !== R && !n) || a.draw(),
              o
            );
          }),
          (this.fnDestroy = function (t) {
            this.api(!0).destroy(t);
          }),
          (this.fnDraw = function (t) {
            this.api(!0).draw(t);
          }),
          (this.fnFilter = function (t, e, n, a, r, o) {
            (r = this.api(!0)),
              (null === e || e === R ? r : r.column(e)).search(t, n, a, o),
              r.draw();
          }),
          (this.fnGetData = function (t, e) {
            var n,
              a = this.api(!0);
            return t !== R
              ? ((n = t.nodeName ? t.nodeName.toLowerCase() : ""),
                e !== R || "td" == n || "th" == n
                  ? a.cell(t, e).data()
                  : a.row(t).data() || null)
              : a.data().toArray();
          }),
          (this.fnGetNodes = function (t) {
            var e = this.api(!0);
            return t !== R
              ? e.row(t).node()
              : e.rows().nodes().flatten().toArray();
          }),
          (this.fnGetPosition = function (t) {
            var e = this.api(!0),
              n = t.nodeName.toUpperCase();
            return "TR" == n
              ? e.row(t).index()
              : "TD" == n || "TH" == n
              ? [(t = e.cell(t).index()).row, t.columnVisible, t.column]
              : null;
          }),
          (this.fnIsOpen = function (t) {
            return this.api(!0).row(t).child.isShown();
          }),
          (this.fnOpen = function (t, e, n) {
            return this.api(!0).row(t).child(e, n).show().child()[0];
          }),
          (this.fnPageChange = function (t, e) {
            (t = this.api(!0).page(t)), (e !== R && !e) || t.draw(!1);
          }),
          (this.fnSetColumnVis = function (t, e, n) {
            (t = this.api(!0).column(t).visible(e)),
              (n !== R && !n) || t.columns.adjust().draw();
          }),
          (this.fnSettings = function () {
            return $t(this[f.iApiIndex]);
          }),
          (this.fnSort = function (t) {
            this.api(!0).order(t).draw();
          }),
          (this.fnSortListener = function (t, e, n) {
            this.api(!0).order.listener(t, e, n);
          }),
          (this.fnUpdate = function (t, e, n, a, r) {
            var o = this.api(!0);
            return (
              (n === R || null === n ? o.row(e) : o.cell(e, n)).data(t),
              (r !== R && !r) || o.columns.adjust(),
              (a !== R && !a) || o.draw(),
              0
            );
          }),
          (this.fnVersionCheck = f.fnVersionCheck);
        var t,
          m = this,
          y = b === R,
          v = this.length;
        for (t in (y && (b = {}),
        (this.oApi = this.internal = f.internal),
        _.ext.internal))
          t && (this[t] = zt(t));
        return (
          this.each(function () {
            var t = {},
              n = 1 < v ? Ht(t, b, !0) : b,
              a = 0,
              u = ((t = this.getAttribute("id")), !1),
              e = _.defaults,
              r = P(this);
            if ("table" != this.nodeName.toLowerCase())
              kt(
                null,
                0,
                "Non-table node initialisation (" + this.nodeName + ")",
                2
              );
            else {
              T(e),
                x(e.column),
                D(e, e, !0),
                D(e.column, e.column, !0),
                D(e, P.extend(n, r.data()), !0);
              for (var o = _.settings, a = 0, i = o.length; a < i; a++) {
                var s = o[a];
                if (
                  s.nTable == this ||
                  (s.nTHead && s.nTHead.parentNode == this) ||
                  (s.nTFoot && s.nTFoot.parentNode == this)
                ) {
                  var d = (n.bRetrieve !== R ? n : e).bRetrieve;
                  if (y || d) return s.oInstance;
                  if ((n.bDestroy !== R ? n : e).bDestroy) {
                    s.oInstance.fnDestroy();
                    break;
                  }
                  return void kt(s, 0, "Cannot reinitialise DataTable", 3);
                }
                if (s.sTableId == this.id) {
                  o.splice(a, 1);
                  break;
                }
              }
              (null !== t && "" !== t) ||
                (this.id = t = "DataTables_Table_" + _.ext._unique++);
              var l,
                c = P.extend(!0, {}, _.models.oSettings, {
                  sDestroyWidth: r[0].style.width,
                  sInstance: t,
                  sTableId: t,
                }),
                f =
                  ((c.nTable = this),
                  (c.oApi = m.internal),
                  (c.oInit = n),
                  o.push(c),
                  (c.oInstance = 1 === m.length ? m : r.dataTable()),
                  T(n),
                  w(n.oLanguage),
                  n.aLengthMenu &&
                    !n.iDisplayLength &&
                    (n.iDisplayLength = (
                      Array.isArray(n.aLengthMenu[0])
                        ? n.aLengthMenu[0]
                        : n.aLengthMenu
                    )[0]),
                  (n = Ht(P.extend(!0, {}, e), n)),
                  Et(
                    c.oFeatures,
                    n,
                    "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
                      " "
                    )
                  ),
                  Et(c, n, [
                    "asStripeClasses",
                    "ajax",
                    "fnServerData",
                    "fnFormatNumber",
                    "sServerMethod",
                    "aaSorting",
                    "aaSortingFixed",
                    "aLengthMenu",
                    "sPaginationType",
                    "sAjaxSource",
                    "sAjaxDataProp",
                    "iStateDuration",
                    "sDom",
                    "bSortCellsTop",
                    "iTabIndex",
                    "fnStateLoadCallback",
                    "fnStateSaveCallback",
                    "renderer",
                    "searchDelay",
                    "rowId",
                    ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols", "aoPreSearchCols"],
                    ["iDisplayLength", "_iDisplayLength"],
                  ]),
                  Et(c.oScroll, n, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"],
                  ]),
                  Et(c.oLanguage, n, "fnInfoCallback"),
                  Wt(c, "aoDrawCallback", n.fnDrawCallback, "user"),
                  Wt(c, "aoServerParams", n.fnServerParams, "user"),
                  Wt(c, "aoStateSaveParams", n.fnStateSaveParams, "user"),
                  Wt(c, "aoStateLoadParams", n.fnStateLoadParams, "user"),
                  Wt(c, "aoStateLoaded", n.fnStateLoaded, "user"),
                  Wt(c, "aoRowCallback", n.fnRowCallback, "user"),
                  Wt(c, "aoRowCreatedCallback", n.fnCreatedRow, "user"),
                  Wt(c, "aoHeaderCallback", n.fnHeaderCallback, "user"),
                  Wt(c, "aoFooterCallback", n.fnFooterCallback, "user"),
                  Wt(c, "aoInitComplete", n.fnInitComplete, "user"),
                  Wt(c, "aoPreDrawCallback", n.fnPreDrawCallback, "user"),
                  (c.rowIdFn = H(n.rowId)),
                  C(c),
                  c.oClasses),
                h =
                  (P.extend(f, _.ext.classes, n.oClasses),
                  r.addClass(f.sTable),
                  c.iInitDisplayStart === R &&
                    ((c.iInitDisplayStart = n.iDisplayStart),
                    (c._iDisplayStart = n.iDisplayStart)),
                  null !== n.iDeferLoading &&
                    ((c.bDeferLoading = !0),
                    (t = Array.isArray(n.iDeferLoading)),
                    (c._iRecordsDisplay = t
                      ? n.iDeferLoading[0]
                      : n.iDeferLoading),
                    (c._iRecordsTotal = t
                      ? n.iDeferLoading[1]
                      : n.iDeferLoading)),
                  c.oLanguage),
                p =
                  (P.extend(!0, h, n.oLanguage),
                  h.sUrl &&
                    (P.ajax({
                      dataType: "json",
                      url: h.sUrl,
                      success: function (t) {
                        w(t), D(e.oLanguage, t), P.extend(!0, h, t), ft(c);
                      },
                      error: function () {
                        ft(c);
                      },
                    }),
                    (u = !0)),
                  null === n.asStripeClasses &&
                    (c.asStripeClasses = [f.sStripeOdd, f.sStripeEven]),
                  (t = c.asStripeClasses),
                  r.children("tbody").find("tr").eq(0));
              if (
                (-1 !==
                  P.inArray(
                    !0,
                    P.map(t, function (t, e) {
                      return p.hasClass(t);
                    })
                  ) &&
                  (P("tbody tr", this).removeClass(t.join(" ")),
                  (c.asDestroyStripes = t.slice())),
                (t = []),
                0 !== (o = this.getElementsByTagName("thead")).length &&
                  (z(c.aoHeader, o[0]), (t = Y(c))),
                null === n.aoColumns)
              )
                for (o = [], a = 0, i = t.length; a < i; a++) o.push(null);
              else o = n.aoColumns;
              for (a = 0, i = o.length; a < i; a++) I(c, t ? t[a] : null);
              L(c, n.aoColumnDefs, o, function (t, e) {
                A(c, t, e);
              }),
                p.length &&
                  ((l = function (t, e) {
                    return null !== t.getAttribute("data-" + e) ? e : null;
                  }),
                  P(p[0])
                    .children("th, td")
                    .each(function (t, e) {
                      var n,
                        a = c.aoColumns[t];
                      a.mData === t &&
                        ((n = l(e, "sort") || l(e, "order")),
                        (e = l(e, "filter") || l(e, "search")),
                        (null === n && null === e) ||
                          ((a.mData = {
                            _: t + ".display",
                            sort: null !== n ? t + ".@data-" + n : R,
                            type: null !== n ? t + ".@data-" + n : R,
                            filter: null !== e ? t + ".@data-" + e : R,
                          }),
                          A(c, t)));
                    }));
              var g = c.oFeatures,
                t = function () {
                  if (n.aaSorting === R) {
                    var t = c.aaSorting;
                    for (a = 0, i = t.length; a < i; a++)
                      t[a][1] = c.aoColumns[a].asSorting[0];
                  }
                  Pt(c),
                    g.bSort &&
                      Wt(c, "aoDrawCallback", function () {
                        var t, n;
                        c.bSorted &&
                          ((t = It(c)),
                          (n = {}),
                          P.each(t, function (t, e) {
                            n[e.src] = e.dir;
                          }),
                          S(c, null, "order", [c, t, n]),
                          jt(c));
                      }),
                    Wt(
                      c,
                      "aoDrawCallback",
                      function () {
                        (c.bSorted || "ssp" === Vt(c) || g.bDeferRender) &&
                          Pt(c);
                      },
                      "sc"
                    );
                  var t = r.children("caption").each(function () {
                      this._captionSide = P(this).css("caption-side");
                    }),
                    e = r.children("thead");
                  if (
                    (0 === e.length && (e = P("<thead/>").appendTo(r)),
                    (c.nTHead = e[0]),
                    0 === (e = r.children("tbody")).length &&
                      (e = P("<tbody/>").appendTo(r)),
                    (c.nTBody = e[0]),
                    0 ===
                      (e =
                        0 === (e = r.children("tfoot")).length &&
                        0 < t.length &&
                        ("" !== c.oScroll.sX || "" !== c.oScroll.sY)
                          ? P("<tfoot/>").appendTo(r)
                          : e).length || 0 === e.children().length
                      ? r.addClass(f.sNoFooter)
                      : 0 < e.length &&
                        ((c.nTFoot = e[0]), z(c.aoFooter, c.nTFoot)),
                    n.aaData)
                  )
                    for (a = 0; a < n.aaData.length; a++) F(c, n.aaData[a]);
                  else
                    (!c.bDeferLoading && "dom" != Vt(c)) ||
                      k(c, P(c.nTBody).children("tr"));
                  (c.aiDisplay = c.aiDisplayMaster.slice()),
                    !(c.bInitialised = !0) === u && ft(c);
                };
              n.bStateSave
                ? ((g.bStateSave = !0),
                  Wt(c, "aoDrawCallback", Ot, "state_save"),
                  Nt(c, 0, t))
                : t();
            }
          }),
          (m = null),
          this
        );
      },
      de = {},
      fe = /[\r\n\u2028]/g,
      he = /<.*?>/g,
      pe =
        /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      ge = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
      be = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
      me = function (t, e) {
        return (
          de[e] || (de[e] = new RegExp(Te(e), "g")),
          "string" == typeof t && "." !== e
            ? t.replace(/\./g, "").replace(de[e], ".")
            : t
        );
      },
      ye = function (t, e, n) {
        var a = [],
          r = 0,
          o = t.length;
        if (n !== R) for (; r < o; r++) t[r] && t[r][e] && a.push(t[r][e][n]);
        else for (; r < o; r++) t[r] && a.push(t[r][e]);
        return a;
      },
      ve = function (t) {
        t: {
          if (!(t.length < 2))
            for (
              var e = t.slice().sort(), n = e[0], a = 1, r = e.length;
              a < r;
              a++
            ) {
              if (e[a] === n) {
                e = !1;
                break t;
              }
              n = e[a];
            }
          e = !0;
        }
        if (e) return t.slice();
        var o,
          e = [],
          r = t.length,
          i = 0,
          a = 0;
        t: for (; a < r; a++) {
          for (n = t[a], o = 0; o < i; o++) if (e[o] === n) continue t;
          e.push(n), i++;
        }
        return e;
      },
      Se = function (t, e) {
        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) Se(t, e[n]);
        else t.push(e);
        return t;
      },
      _e =
        (Array.isArray ||
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
        String.prototype.trim ||
          (String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          }),
        (_.util = {
          throttle: function (a, t) {
            var r,
              o,
              i = t !== R ? t : 200;
            return function () {
              var t = this,
                e = +new Date(),
                n = arguments;
              r && e < r + i
                ? (clearTimeout(o),
                  (o = setTimeout(function () {
                    (r = R), a.apply(t, n);
                  }, i)))
                : ((r = e), a.apply(t, n));
            };
          },
          escapeRegex: function (t) {
            return t.replace(ge, "\\$1");
          },
        }),
        function (t, e, n) {
          t[e] !== R && (t[n] = t[e]);
        }),
      De = /\[.*?\]$/,
      we = /\(\)$/,
      Te = _.util.escapeRegex,
      xe = P("<div>")[0],
      Ce = xe.textContent !== R,
      Ie = /<.*?>/g,
      Ae = _.util.throttle,
      je = [],
      r = Array.prototype,
      g = function (t, e) {
        if (!(this instanceof g)) return new g(t, e);
        function n(t) {
          var e, n, a, r, o;
          (e = t),
            (r = _.settings),
            (o = P.map(r, function (t, e) {
              return t.nTable;
            })),
            (t = e
              ? e.nTable && e.oApi
                ? [e]
                : e.nodeName && "table" === e.nodeName.toLowerCase()
                ? -1 !== (a = P.inArray(e, o))
                  ? [r[a]]
                  : null
                : e && "function" == typeof e.settings
                ? e.settings().toArray()
                : ("string" == typeof e
                    ? (n = P(e))
                    : e instanceof P && (n = e),
                  n
                    ? n
                        .map(function (t) {
                          return -1 !== (a = P.inArray(this, o)) ? r[a] : null;
                        })
                        .toArray()
                    : void 0)
              : []) && i.push.apply(i, t);
        }
        var i = [];
        if (Array.isArray(t)) for (var a = 0, r = t.length; a < r; a++) n(t[a]);
        else n(t);
        (this.context = ve(i)),
          e && P.merge(this, e),
          (this.selector = { rows: null, cols: null, opts: null }),
          g.extend(this, this, je);
      },
      Le =
        ((_.Api = g),
        P.extend(g.prototype, {
          any: function () {
            return 0 !== this.count();
          },
          concat: r.concat,
          context: [],
          count: function () {
            return this.flatten().length;
          },
          each: function (t) {
            for (var e = 0, n = this.length; e < n; e++)
              t.call(this, this[e], e, this);
            return this;
          },
          eq: function (t) {
            var e = this.context;
            return e.length > t ? new g(e[t], this[t]) : null;
          },
          filter: function (t) {
            var e = [];
            if (r.filter) e = r.filter.call(this, t, this);
            else
              for (var n = 0, a = this.length; n < a; n++)
                t.call(this, this[n], n, this) && e.push(this[n]);
            return new g(this.context, e);
          },
          flatten: function () {
            var t = [];
            return new g(this.context, t.concat.apply(t, this.toArray()));
          },
          join: r.join,
          indexOf:
            r.indexOf ||
            function (t, e) {
              e = e || 0;
              for (var n = this.length; e < n; e++) if (this[e] === t) return e;
              return -1;
            },
          iterator: function (t, e, n, u) {
            for (
              var d,
                a = [],
                r = this.context,
                o = this.selector,
                i =
                  ("string" == typeof t &&
                    ((u = n), (n = e), (e = t), (t = !1)),
                  0),
                f = r.length;
              i < f;
              i++
            ) {
              var s = new g(r[i]);
              if ("table" === e) {
                var l = n.call(s, r[i], i);
                l !== R && a.push(l);
              } else if ("columns" === e || "rows" === e)
                (l = n.call(s, r[i], this[i], i)) !== R && a.push(l);
              else if (
                "column" === e ||
                "column-rows" === e ||
                "row" === e ||
                "cell" === e
              )
                for (
                  var h = this[i],
                    c = ("column-rows" === e && (d = Le(r[i], o.opts)), 0),
                    p = h.length;
                  c < p;
                  c++
                )
                  (l = h[c]),
                    (l =
                      "cell" === e
                        ? n.call(s, r[i], l.row, l.column, i, c)
                        : n.call(s, r[i], l, i, c, d)) !== R && a.push(l);
            }
            return a.length || u
              ? (((e = (t = new g(r, t ? a.concat.apply([], a) : a))
                  .selector).rows = o.rows),
                (e.cols = o.cols),
                (e.opts = o.opts),
                t)
              : this;
          },
          lastIndexOf:
            r.lastIndexOf ||
            function (t, e) {
              return this.indexOf.apply(this.toArray.reverse(), arguments);
            },
          length: 0,
          map: function (t) {
            var e = [];
            if (r.map) e = r.map.call(this, t, this);
            else
              for (var n = 0, a = this.length; n < a; n++)
                e.push(t.call(this, this[n], n));
            return new g(this.context, e);
          },
          pluck: function (e) {
            return this.map(function (t) {
              return t[e];
            });
          },
          pop: r.pop,
          push: r.push,
          reduce:
            r.reduce ||
            function (t, e) {
              return n(this, t, e, 0, this.length, 1);
            },
          reduceRight:
            r.reduceRight ||
            function (t, e) {
              return n(this, t, e, this.length - 1, -1, -1);
            },
          reverse: r.reverse,
          selector: null,
          shift: r.shift,
          slice: function () {
            return new g(this.context, this);
          },
          sort: r.sort,
          splice: r.splice,
          toArray: function () {
            return r.slice.call(this);
          },
          to$: function () {
            return P(this);
          },
          toJQuery: function () {
            return P(this);
          },
          unique: function () {
            return new g(this.context, ve(this));
          },
          unshift: r.unshift,
        }),
        (g.extend = function (t, e, n) {
          if (n.length && e && (e instanceof g || e.__dt_wrapper))
            for (var a = 0, r = n.length; a < r; a++) {
              var o = n[a];
              (e[o.name] =
                "function" === o.type
                  ? (function (e, n, a) {
                      return function () {
                        var t = n.apply(e, arguments);
                        return g.extend(t, t, a.methodExt), t;
                      };
                    })(t, o.val, o)
                  : "object" === o.type
                  ? {}
                  : o.val),
                (e[o.name].__dt_wrapper = !0),
                g.extend(t, e[o.name], o.propExt);
            }
        }),
        (g.register = e =
          function (t, e) {
            if (Array.isArray(t))
              for (var n = 0, a = t.length; n < a; n++) g.register(t[n], e);
            else {
              var r,
                a = t.split("."),
                o = je;
              for (t = 0, n = a.length; t < n; t++) {
                var i = (r = -1 !== a[t].indexOf("()"))
                  ? a[t].replace("()", "")
                  : a[t];
                t: {
                  for (var s = 0, l = o.length; s < l; s++)
                    if (o[s].name === i) {
                      s = o[s];
                      break t;
                    }
                  s = null;
                }
                s ||
                  o.push(
                    (s = {
                      name: i,
                      val: {},
                      methodExt: [],
                      propExt: [],
                      type: "object",
                    })
                  ),
                  t === n - 1
                    ? ((s.val = e),
                      (s.type =
                        "function" == typeof e
                          ? "function"
                          : P.isPlainObject(e)
                          ? "object"
                          : "other"))
                    : (o = r ? s.methodExt : s.propExt);
              }
            }
          }),
        (g.registerPlural = t =
          function (t, e, n) {
            g.register(t, n),
              g.register(e, function () {
                var t = n.apply(this, arguments);
                return t === this
                  ? this
                  : t instanceof g
                  ? t.length
                    ? Array.isArray(t[0])
                      ? new g(t.context, t[0])
                      : t[0]
                    : R
                  : t;
              });
          }),
        e("tables()", function (t) {
          return t !== R && null !== t ? new g(ee(t, this.context)) : this;
        }),
        e("table()", function (t) {
          var e = (t = this.tables(t)).context;
          return e.length ? new g(e[0]) : t;
        }),
        t("tables().nodes()", "table().node()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTable;
            },
            1
          );
        }),
        t("tables().body()", "table().body()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTBody;
            },
            1
          );
        }),
        t("tables().header()", "table().header()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTHead;
            },
            1
          );
        }),
        t("tables().footer()", "table().footer()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTFoot;
            },
            1
          );
        }),
        t("tables().containers()", "table().container()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTableWrapper;
            },
            1
          );
        }),
        e("draw()", function (e) {
          return this.iterator("table", function (t) {
            "page" === e
              ? V(t)
              : X(t, !1 === (e = "string" == typeof e ? "full-hold" !== e : e));
          });
        }),
        e("page()", function (e) {
          return e === R
            ? this.page.info().page
            : this.iterator("table", function (t) {
                mt(t, e);
              });
        }),
        e("page.info()", function (t) {
          if (0 === this.context.length) return R;
          var e = (t = this.context[0])._iDisplayStart,
            n = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
            a = t.fnRecordsDisplay(),
            r = -1 === n;
          return {
            page: r ? 0 : Math.floor(e / n),
            pages: r ? 1 : Math.ceil(a / n),
            start: e,
            end: t.fnDisplayEnd(),
            length: n,
            recordsTotal: t.fnRecordsTotal(),
            recordsDisplay: a,
            serverSide: "ssp" === Vt(t),
          };
        }),
        e("page.len()", function (e) {
          return e === R
            ? 0 !== this.context.length
              ? this.context[0]._iDisplayLength
              : R
            : this.iterator("table", function (t) {
                pt(t, e);
              });
        }),
        e("ajax.json()", function () {
          var t = this.context;
          if (0 < t.length) return t[0].json;
        }),
        e("ajax.params()", function () {
          var t = this.context;
          if (0 < t.length) return t[0].oAjaxData;
        }),
        e("ajax.reload()", function (e, n) {
          return this.iterator("table", function (t) {
            ne(t, !1 === n, e);
          });
        }),
        e("ajax.url()", function (e) {
          var t = this.context;
          return e === R
            ? 0 === t.length
              ? R
              : (t = t[0]).ajax
              ? P.isPlainObject(t.ajax)
                ? t.ajax.url
                : t.ajax
              : t.sAjaxSource
            : this.iterator("table", function (t) {
                P.isPlainObject(t.ajax) ? (t.ajax.url = e) : (t.ajax = e);
              });
        }),
        e("ajax.url().load()", function (e, n) {
          return this.iterator("table", function (t) {
            ne(t, !1 === n, e);
          });
        }),
        function (t, e) {
          var n = [],
            a = t.aiDisplay,
            r = t.aiDisplayMaster,
            o = e.search,
            i = e.order;
          if (((e = e.page), "ssp" == Vt(t)))
            return "removed" === o ? [] : Kt(0, r.length);
          if ("current" == e)
            for (i = t._iDisplayStart, t = t.fnDisplayEnd(); i < t; i++)
              n.push(a[i]);
          else if ("current" == i || "applied" == i) {
            if ("none" == o) n = r.slice();
            else if ("applied" == o) n = a.slice();
            else if ("removed" == o) {
              var s = {},
                i = 0;
              for (t = a.length; i < t; i++) s[a[i]] = null;
              n = P.map(r, function (t) {
                return s.hasOwnProperty(t) ? null : t;
              });
            }
          } else if ("index" == i || "original" == i)
            for (i = 0, t = t.aoData.length; i < t; i++)
              "none" == o
                ? n.push(i)
                : ((-1 === (r = P.inArray(i, a)) && "removed" == o) ||
                    (0 <= r && "applied" == o)) &&
                  n.push(i);
          return n;
        }),
      Fe =
        (e("rows()", function (e, n) {
          e === R ? (e = "") : P.isPlainObject(e) && ((n = e), (e = "")),
            (n = re(n));
          var t = this.iterator(
            "table",
            function (t) {
              return ae(
                "row",
                e,
                function (n) {
                  var t,
                    e = Jt(n),
                    a = r.aoData;
                  return null === e || o
                    ? ((i = i || Le(r, o)),
                      null !== e && -1 !== P.inArray(e, i)
                        ? [e]
                        : null === n || n === R || "" === n
                        ? i
                        : "function" == typeof n
                        ? P.map(i, function (t) {
                            var e = a[t];
                            return n(t, e._aData, e.nTr) ? t : null;
                          })
                        : n.nodeName
                        ? ((e = n._DT_RowIndex),
                          (t = n._DT_CellIndex),
                          e !== R
                            ? a[e] && a[e].nTr === n
                              ? [e]
                              : []
                            : t
                            ? a[t.row] && a[t.row].nTr === n.parentNode
                              ? [t.row]
                              : []
                            : (e = P(n).closest("*[data-dt-row]")).length
                            ? [e.data("dt-row")]
                            : [])
                        : "string" == typeof n &&
                          "#" === n.charAt(0) &&
                          (e = r.aIds[n.replace(/^#/, "")]) !== R
                        ? [e.idx]
                        : ((e = te(Qt(r.aoData, i, "nTr"))),
                          P(e)
                            .filter(n)
                            .map(function () {
                              return this._DT_RowIndex;
                            })
                            .toArray()))
                    : [e];
                },
                (r = t),
                (o = n)
              );
              var r, o, i;
            },
            1
          );
          return (t.selector.rows = e), (t.selector.opts = n), t;
        }),
        e("rows().nodes()", function () {
          return this.iterator(
            "row",
            function (t, e) {
              return t.aoData[e].nTr || R;
            },
            1
          );
        }),
        e("rows().data()", function () {
          return this.iterator(
            !0,
            "rows",
            function (t, e) {
              return Qt(t.aoData, e, "_aData");
            },
            1
          );
        }),
        t("rows().cache()", "row().cache()", function (n) {
          return this.iterator(
            "row",
            function (t, e) {
              return (
                (t = t.aoData[e]),
                "search" === n ? t._aFilterData : t._aSortData
              );
            },
            1
          );
        }),
        t("rows().invalidate()", "row().invalidate()", function (n) {
          return this.iterator("row", function (t, e) {
            o(t, e, n);
          });
        }),
        t("rows().indexes()", "row().index()", function () {
          return this.iterator(
            "row",
            function (t, e) {
              return e;
            },
            1
          );
        }),
        t("rows().ids()", "row().id()", function (t) {
          for (var e = [], n = this.context, a = 0, r = n.length; a < r; a++)
            for (var o = 0, i = this[a].length; o < i; o++) {
              var s = n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);
              e.push((!0 === t ? "#" : "") + s);
            }
          return new g(n, e);
        }),
        t("rows().remove()", "row().remove()", function () {
          var u = this;
          return (
            this.iterator("row", function (t, e, n) {
              for (
                var a,
                  r = t.aoData,
                  o = r[e],
                  i = (r.splice(e, 1), 0),
                  s = r.length;
                i < s;
                i++
              ) {
                var l = r[i],
                  c = l.anCells;
                if ((null !== l.nTr && (l.nTr._DT_RowIndex = i), null !== c))
                  for (l = 0, a = c.length; l < a; l++)
                    c[l]._DT_CellIndex.row = i;
              }
              d(t.aiDisplayMaster, e),
                d(t.aiDisplay, e),
                d(u[n], e, !1),
                0 < t._iRecordsDisplay && t._iRecordsDisplay--,
                Bt(t),
                (e = t.rowIdFn(o._aData)) !== R && delete t.aIds[e];
            }),
            this.iterator("table", function (t) {
              for (var e = 0, n = t.aoData.length; e < n; e++)
                t.aoData[e].idx = e;
            }),
            this
          );
        }),
        e("rows.add()", function (o) {
          var t = this.iterator(
              "table",
              function (t) {
                for (var e = [], n = 0, a = o.length; n < a; n++) {
                  var r = o[n];
                  r.nodeName && "TR" === r.nodeName.toUpperCase()
                    ? e.push(k(t, r)[0])
                    : e.push(F(t, r));
                }
                return e;
              },
              1
            ),
            e = this.rows(-1);
          return e.pop(), P.merge(e, t), e;
        }),
        e("row()", function (t, e) {
          return oe(this.rows(t, e));
        }),
        e("row().data()", function (t) {
          var e = this.context;
          if (t === R)
            return e.length && this.length ? e[0].aoData[this[0]]._aData : R;
          var n = e[0].aoData[this[0]];
          return (
            (n._aData = t),
            Array.isArray(t) && n.nTr && n.nTr.id && p(e[0].rowId)(t, n.nTr.id),
            o(e[0], this[0], "data"),
            this
          );
        }),
        e("row().node()", function () {
          var t = this.context;
          return (t.length && this.length && t[0].aoData[this[0]].nTr) || null;
        }),
        e("row.add()", function (e) {
          e instanceof P && e.length && (e = e[0]);
          var t = this.iterator("table", function (t) {
            return e.nodeName && "TR" === e.nodeName.toUpperCase()
              ? k(t, e)[0]
              : F(t, e);
          });
          return this.row(t[0]);
        }),
        function (t, e) {
          var n = t.context;
          n.length &&
            (t = n[0].aoData[e !== R ? e : t[0]]) &&
            t._details &&
            (t._details.remove(), (t._detailsShow = R), (t._details = R));
        }),
      Pe =
        (e("row().child()", function (t, e) {
          var n = this.context;
          return t === R
            ? n.length && this.length
              ? n[0].aoData[this[0]]._details
              : R
            : (!0 === t
                ? this.child.show()
                : !1 === t
                ? Fe(this)
                : n.length &&
                  this.length &&
                  ie(n[0], n[0].aoData[this[0]], t, e),
              this);
        }),
        e(["row().child.show()", "row().child().show()"], function (t) {
          return se(this, !0), this;
        }),
        e(["row().child.hide()", "row().child().hide()"], function () {
          return se(this, !1), this;
        }),
        e(["row().child.remove()", "row().child().remove()"], function () {
          return Fe(this), this;
        }),
        e("row().child.isShown()", function () {
          var t = this.context;
          return (
            (t.length && this.length && t[0].aoData[this[0]]._detailsShow) || !1
          );
        }),
        /^([^:]+):(name|visIdx|visible)$/),
      Re =
        (e("columns()", function (n, a) {
          n === R ? (n = "") : P.isPlainObject(n) && ((a = n), (n = "")),
            (a = re(a));
          var t = this.iterator(
            "table",
            function (t) {
              return (
                (e = n),
                (i = a),
                (s = (o = t).aoColumns),
                (l = ye(s, "sName")),
                (c = ye(s, "nTh")),
                ae(
                  "column",
                  e,
                  function (n) {
                    var a,
                      t = Jt(n);
                    if ("" === n) return Kt(s.length);
                    if (null !== t) return [0 <= t ? t : s.length + t];
                    if ("function" == typeof n)
                      return (
                        (a = Le(o, i)),
                        P.map(s, function (t, e) {
                          return n(e, le(o, e, 0, 0, a), c[e]) ? e : null;
                        })
                      );
                    var e,
                      r = "string" == typeof n ? n.match(Pe) : "";
                    if (r)
                      switch (r[2]) {
                        case "visIdx":
                        case "visible":
                          return (t = parseInt(r[1], 10)) < 0
                            ? [
                                (e = P.map(s, function (t, e) {
                                  return t.bVisible ? e : null;
                                }))[e.length + t],
                              ]
                            : [$(o, t)];
                        case "name":
                          return P.map(l, function (t, e) {
                            return t === r[1] ? e : null;
                          });
                        default:
                          return [];
                      }
                    return n.nodeName && n._DT_CellIndex
                      ? [n._DT_CellIndex.column]
                      : (t = P(c)
                          .filter(n)
                          .map(function () {
                            return P.inArray(this, c);
                          })
                          .toArray()).length || !n.nodeName
                      ? t
                      : (t = P(n).closest("*[data-dt-column]")).length
                      ? [t.data("dt-column")]
                      : [];
                  },
                  o,
                  i
                )
              );
              var o, e, i, s, l, c;
            },
            1
          );
          return (t.selector.cols = n), (t.selector.opts = a), t;
        }),
        t("columns().header()", "column().header()", function (t, e) {
          return this.iterator(
            "column",
            function (t, e) {
              return t.aoColumns[e].nTh;
            },
            1
          );
        }),
        t("columns().footer()", "column().footer()", function (t, e) {
          return this.iterator(
            "column",
            function (t, e) {
              return t.aoColumns[e].nTf;
            },
            1
          );
        }),
        t("columns().data()", "column().data()", function () {
          return this.iterator("column-rows", le, 1);
        }),
        t("columns().dataSrc()", "column().dataSrc()", function () {
          return this.iterator(
            "column",
            function (t, e) {
              return t.aoColumns[e].mData;
            },
            1
          );
        }),
        t("columns().cache()", "column().cache()", function (o) {
          return this.iterator(
            "column-rows",
            function (t, e, n, a, r) {
              return Qt(
                t.aoData,
                r,
                "search" === o ? "_aFilterData" : "_aSortData",
                e
              );
            },
            1
          );
        }),
        t("columns().nodes()", "column().nodes()", function () {
          return this.iterator(
            "column-rows",
            function (t, e, n, a, r) {
              return Qt(t.aoData, r, "anCells", e);
            },
            1
          );
        }),
        t("columns().visible()", "column().visible()", function (l, n) {
          var e = this,
            t = this.iterator("column", function (t, e) {
              if (l === R) return t.aoColumns[e].bVisible;
              var n = (o = t.aoColumns)[e],
                a = t.aoData;
              if (l !== R && n.bVisible !== l) {
                if (l)
                  for (
                    var r = P.inArray(!0, ye(o, "bVisible"), e + 1),
                      o = 0,
                      i = a.length;
                    o < i;
                    o++
                  ) {
                    var s = a[o].nTr;
                    (t = a[o].anCells), s && s.insertBefore(t[e], t[r] || null);
                  }
                else P(ye(t.aoData, "anCells", e)).detach();
                n.bVisible = l;
              }
            });
          return (
            l !== R &&
              this.iterator("table", function (t) {
                U(t, t.aoHeader),
                  U(t, t.aoFooter),
                  t.aiDisplay.length ||
                    P(t.nTBody).find("td[colspan]").attr("colspan", y(t)),
                  Ot(t),
                  e.iterator("column", function (t, e) {
                    S(t, null, "column-visibility", [t, e, l, n]);
                  }),
                  (n !== R && !n) || e.columns.adjust();
              }),
            t
          );
        }),
        t("columns().indexes()", "column().index()", function (n) {
          return this.iterator(
            "column",
            function (t, e) {
              return "visible" === n ? c(t, e) : e;
            },
            1
          );
        }),
        e("columns.adjust()", function () {
          return this.iterator(
            "table",
            function (t) {
              N(t);
            },
            1
          );
        }),
        e("column.index()", function (t, e) {
          var n;
          if (0 !== this.context.length)
            return (
              (n = this.context[0]),
              "fromVisible" === t || "toData" === t
                ? $(n, e)
                : "fromData" === t || "toVisible" === t
                ? c(n, e)
                : void 0
            );
        }),
        e("column()", function (t, e) {
          return oe(this.columns(t, e));
        }),
        e("cells()", function (g, t, b) {
          if (
            (P.isPlainObject(g) &&
              (g.row === R ? ((b = g), (g = null)) : ((b = t), (t = null))),
            P.isPlainObject(t) && ((b = t), (t = null)),
            null === t || t === R)
          )
            return this.iterator("table", function (t) {
              return (
                (n = t),
                (t = g),
                (e = re(b)),
                (d = n.aoData),
                (c = Le(n, e)),
                (f = te(Qt(d, c, "anCells"))),
                (h = P(Se([], f))),
                (p = n.aoColumns.length),
                ae(
                  "cell",
                  t,
                  function (t) {
                    var e = "function" == typeof t;
                    if (null === t || t === R || e) {
                      for (r = [], o = 0, u = c.length; o < u; o++)
                        for (a = c[o], i = 0; i < p; i++)
                          (s = { row: a, column: i }),
                            e
                              ? ((l = d[a]),
                                t(
                                  s,
                                  E(n, a, i),
                                  l.anCells ? l.anCells[i] : null
                                ) && r.push(s))
                              : r.push(s);
                      return r;
                    }
                    return P.isPlainObject(t)
                      ? t.column !== R &&
                        t.row !== R &&
                        -1 !== P.inArray(t.row, c)
                        ? [t]
                        : []
                      : (e = h
                          .filter(t)
                          .map(function (t, e) {
                            return {
                              row: e._DT_CellIndex.row,
                              column: e._DT_CellIndex.column,
                            };
                          })
                          .toArray()).length || !t.nodeName
                      ? e
                      : (l = P(t).closest("*[data-dt-row]")).length
                      ? [{ row: l.data("dt-row"), column: l.data("dt-column") }]
                      : [];
                  },
                  n,
                  e
                )
              );
              var n, e, a, r, o, u, i, s, l, d, c, f, h, p;
            });
          var n,
            a,
            r,
            o,
            e = b ? { page: b.page, order: b.order, search: b.search } : {},
            i = this.columns(t, e),
            s = this.rows(g, e),
            e = this.iterator(
              "table",
              function (t, e) {
                for (t = [], n = 0, a = s[e].length; n < a; n++)
                  for (r = 0, o = i[e].length; r < o; r++)
                    t.push({ row: s[e][n], column: i[e][r] });
                return t;
              },
              1
            );
          return (
            (e = b && b.selected ? this.cells(e, b) : e),
            P.extend(e.selector, { cols: t, rows: g, opts: b }),
            e
          );
        }),
        t("cells().nodes()", "cell().node()", function () {
          return this.iterator(
            "cell",
            function (t, e, n) {
              return (t = t.aoData[e]) && t.anCells ? t.anCells[n] : R;
            },
            1
          );
        }),
        e("cells().data()", function () {
          return this.iterator(
            "cell",
            function (t, e, n) {
              return E(t, e, n);
            },
            1
          );
        }),
        t("cells().cache()", "cell().cache()", function (a) {
          return (
            (a = "search" === a ? "_aFilterData" : "_aSortData"),
            this.iterator(
              "cell",
              function (t, e, n) {
                return t.aoData[e][a][n];
              },
              1
            )
          );
        }),
        t("cells().render()", "cell().render()", function (a) {
          return this.iterator(
            "cell",
            function (t, e, n) {
              return E(t, e, n, a);
            },
            1
          );
        }),
        t("cells().indexes()", "cell().index()", function () {
          return this.iterator(
            "cell",
            function (t, e, n) {
              return { row: e, column: n, columnVisible: c(t, n) };
            },
            1
          );
        }),
        t("cells().invalidate()", "cell().invalidate()", function (a) {
          return this.iterator("cell", function (t, e, n) {
            o(t, e, a, n);
          });
        }),
        e("cell()", function (t, e, n) {
          return oe(this.cells(t, e, n));
        }),
        e("cell().data()", function (t) {
          var e = this.context,
            n = this[0];
          return t === R
            ? e.length && n.length
              ? E(e[0], n[0].row, n[0].column)
              : R
            : (a(e[0], n[0].row, n[0].column, t),
              o(e[0], n[0].row, "data", n[0].column),
              this);
        }),
        e("order()", function (e, t) {
          var n = this.context;
          return e === R
            ? 0 !== n.length
              ? n[0].aaSorting
              : R
            : ("number" == typeof e
                ? (e = [[e, t]])
                : e.length &&
                  !Array.isArray(e[0]) &&
                  (e = Array.prototype.slice.call(arguments)),
              this.iterator("table", function (t) {
                t.aaSorting = e.slice();
              }));
        }),
        e("order.listener()", function (e, n, a) {
          return this.iterator("table", function (t) {
            Ft(t, e, n, a);
          });
        }),
        e("order.fixed()", function (e) {
          var t;
          return e
            ? this.iterator("table", function (t) {
                t.aaSortingFixed = P.extend(!0, {}, e);
              })
            : ((t = (t = this.context).length ? t[0].aaSortingFixed : R),
              Array.isArray(t) ? { pre: t } : t);
        }),
        e(["columns().order()", "column().order()"], function (a) {
          var r = this;
          return this.iterator("table", function (t, e) {
            var n = [];
            P.each(r[e], function (t, e) {
              n.push([e, a]);
            }),
              (t.aaSorting = n);
          });
        }),
        e("search()", function (e, n, a, r) {
          var t = this.context;
          return e === R
            ? 0 !== t.length
              ? t[0].oPreviousSearch.sSearch
              : R
            : this.iterator("table", function (t) {
                t.oFeatures.bFilter &&
                  et(
                    t,
                    P.extend({}, t.oPreviousSearch, {
                      sSearch: e + "",
                      bRegex: null !== n && n,
                      bSmart: null === a || a,
                      bCaseInsensitive: null === r || r,
                    }),
                    1
                  );
              });
        }),
        t("columns().search()", "column().search()", function (a, r, o, i) {
          return this.iterator("column", function (t, e) {
            var n = t.aoPreSearchCols;
            if (a === R) return n[e].sSearch;
            t.oFeatures.bFilter &&
              (P.extend(n[e], {
                sSearch: a + "",
                bRegex: null !== r && r,
                bSmart: null === o || o,
                bCaseInsensitive: null === i || i,
              }),
              et(t, t.oPreviousSearch, 1));
          });
        }),
        e("state()", function () {
          return this.context.length ? this.context[0].oSavedState : null;
        }),
        e("state.clear()", function () {
          return this.iterator("table", function (t) {
            t.fnStateSaveCallback.call(t.oInstance, t, {});
          });
        }),
        e("state.loaded()", function () {
          return this.context.length ? this.context[0].oLoadedState : null;
        }),
        e("state.save()", function () {
          return this.iterator("table", function (t) {
            Ot(t);
          });
        }),
        (_.versionCheck = _.fnVersionCheck =
          function (t) {
            for (
              var e,
                n,
                a = _.version.split("."),
                r = 0,
                o = (t = t.split(".")).length;
              r < o;
              r++
            )
              if (
                (e = parseInt(a[r], 10) || 0) !== (n = parseInt(t[r], 10) || 0)
              )
                return n < e;
            return !0;
          }),
        (_.isDataTable = _.fnIsDataTable =
          function (t) {
            var a = P(t).get(0),
              r = !1;
            return (
              t instanceof _.Api ||
              (P.each(_.settings, function (t, e) {
                t = e.nScrollHead ? P("table", e.nScrollHead)[0] : null;
                var n = e.nScrollFoot ? P("table", e.nScrollFoot)[0] : null;
                (e.nTable !== a && t !== a && n !== a) || (r = !0);
              }),
              r)
            );
          }),
        (_.tables = _.fnTables =
          function (e) {
            var t = !1,
              n =
                (P.isPlainObject(e) && ((t = e.api), (e = e.visible)),
                P.map(_.settings, function (t) {
                  if (!e || P(t.nTable).is(":visible")) return t.nTable;
                }));
            return t ? new g(n) : n;
          }),
        (_.camelToHungarian = D),
        e("$()", function (t, e) {
          return (
            (e = this.rows(e).nodes()),
            (e = P(e)),
            P([].concat(e.filter(t).toArray(), e.find(t).toArray()))
          );
        }),
        P.each(["on", "one", "off"], function (t, n) {
          e(n + "()", function () {
            var t = Array.prototype.slice.call(arguments),
              e =
                ((t[0] = P.map(t[0].split(/\s/), function (t) {
                  return t.match(/\.dt\b/) ? t : t + ".dt";
                }).join(" ")),
                P(this.tables().nodes()));
            return e[n].apply(e, t), this;
          });
        }),
        e("clear()", function () {
          return this.iterator("table", function (t) {
            l(t);
          });
        }),
        e("settings()", function () {
          return new g(this.context, this.context);
        }),
        e("init()", function () {
          var t = this.context;
          return t.length ? t[0].oInit : null;
        }),
        e("data()", function () {
          return this.iterator("table", function (t) {
            return ye(t.aoData, "_aData");
          }).flatten();
        }),
        e("destroy()", function (d) {
          return (
            (d = d || !1),
            this.iterator("table", function (e) {
              var n,
                t = e.nTableWrapper.parentNode,
                a = e.oClasses,
                r = e.nTable,
                o = e.nTBody,
                i = e.nTHead,
                s = e.nTFoot,
                l = P(r),
                o = P(o),
                c = P(e.nTableWrapper),
                u = P.map(e.aoData, function (t) {
                  return t.nTr;
                });
              (e.bDestroying = !0),
                S(e, "aoDestroyCallback", "destroy", [e]),
                d || new g(e).columns().visible(!0),
                c.off(".DT").find(":not(tbody *)").off(".DT"),
                P(m).off(".DT-" + e.sInstance),
                r != i.parentNode &&
                  (l.children("thead").detach(), l.append(i)),
                s &&
                  r != s.parentNode &&
                  (l.children("tfoot").detach(), l.append(s)),
                (e.aaSorting = []),
                (e.aaSortingFixed = []),
                Pt(e),
                P(u).removeClass(e.asStripeClasses.join(" ")),
                P("th, td", i).removeClass(
                  a.sSortable +
                    " " +
                    a.sSortableAsc +
                    " " +
                    a.sSortableDesc +
                    " " +
                    a.sSortableNone
                ),
                o.children().detach(),
                o.append(u),
                l[(i = d ? "remove" : "detach")](),
                c[i](),
                !d &&
                  t &&
                  (t.insertBefore(r, e.nTableReinsertBefore),
                  l.css("width", e.sDestroyWidth).removeClass(a.sTable),
                  (n = e.asDestroyStripes.length) &&
                    o.children().each(function (t) {
                      P(this).addClass(e.asDestroyStripes[t % n]);
                    })),
                -1 !== (t = P.inArray(e, _.settings)) &&
                  _.settings.splice(t, 1);
            })
          );
        }),
        P.each(["column", "row", "cell"], function (t, l) {
          e(l + "s().every()", function (o) {
            var i = this.selector.opts,
              s = this;
            return this.iterator(l, function (t, e, n, a, r) {
              o.call(
                s[l](e, "cell" === l ? n : i, "cell" === l ? i : R),
                e,
                n,
                a,
                r
              );
            });
          });
        }),
        e("i18n()", function (t, e, n) {
          var a = this.context[0];
          return (
            (t = H(t)(a.oLanguage)) === R && (t = e),
            (t =
              n !== R && P.isPlainObject(t)
                ? t[n] !== R
                  ? t[n]
                  : t._
                : t).replace("%d", n)
          );
        }),
        (_.version = "1.10.22"),
        (_.settings = []),
        (_.models = {}),
        (_.models.oSearch = {
          bCaseInsensitive: !0,
          sSearch: "",
          bRegex: !1,
          bSmart: !0,
        }),
        (_.models.oRow = {
          nTr: null,
          anCells: null,
          _aData: [],
          _aSortData: null,
          _aFilterData: null,
          _sFilterRow: null,
          _sRowStripe: "",
          src: null,
          idx: -1,
        }),
        (_.models.oColumn = {
          idx: null,
          aDataSort: null,
          asSorting: null,
          bSearchable: null,
          bSortable: null,
          bVisible: null,
          _sManualType: null,
          _bAttrSrc: !1,
          fnCreatedCell: null,
          fnGetData: null,
          fnSetData: null,
          mData: null,
          mRender: null,
          nTh: null,
          nTf: null,
          sClass: null,
          sContentPadding: null,
          sDefaultContent: null,
          sName: null,
          sSortDataType: "std",
          sSortingClass: null,
          sSortingClassJUI: null,
          sTitle: null,
          sType: null,
          sWidth: null,
          sWidthOrig: null,
        }),
        (_.defaults = {
          aaData: null,
          aaSorting: [[0, "asc"]],
          aaSortingFixed: [],
          ajax: null,
          aLengthMenu: [10, 25, 50, 100],
          aoColumns: null,
          aoColumnDefs: null,
          aoSearchCols: [],
          asStripeClasses: null,
          bAutoWidth: !0,
          bDeferRender: !1,
          bDestroy: !1,
          bFilter: !0,
          bInfo: !0,
          bLengthChange: !0,
          bPaginate: !0,
          bProcessing: !1,
          bRetrieve: !1,
          bScrollCollapse: !1,
          bServerSide: !1,
          bSort: !0,
          bSortMulti: !0,
          bSortCellsTop: !1,
          bSortClasses: !0,
          bStateSave: !1,
          fnCreatedRow: null,
          fnDrawCallback: null,
          fnFooterCallback: null,
          fnFormatNumber: function (t) {
            return t
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
          },
          fnHeaderCallback: null,
          fnInfoCallback: null,
          fnInitComplete: null,
          fnPreDrawCallback: null,
          fnRowCallback: null,
          fnServerData: null,
          fnServerParams: null,
          fnStateLoadCallback: function (t) {
            try {
              return JSON.parse(
                (-1 === t.iStateDuration
                  ? sessionStorage
                  : localStorage
                ).getItem("DataTables_" + t.sInstance + "_" + location.pathname)
              );
            } catch (t) {
              return {};
            }
          },
          fnStateLoadParams: null,
          fnStateLoaded: null,
          fnStateSaveCallback: function (t, e) {
            try {
              (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem(
                "DataTables_" + t.sInstance + "_" + location.pathname,
                JSON.stringify(e)
              );
            } catch (t) {}
          },
          fnStateSaveParams: null,
          iStateDuration: 7200,
          iDeferLoading: null,
          iDisplayLength: 10,
          iDisplayStart: 0,
          iTabIndex: 0,
          oClasses: {},
          oLanguage: {
            oAria: {
              sSortAscending: ": activate to sort column ascending",
              sSortDescending: ": activate to sort column descending",
            },
            oPaginate: {
              sFirst: "First",
              sLast: "Last",
              sNext: "Next",
              sPrevious: "Previous",
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found",
          },
          oSearch: P.extend({}, _.models.oSearch),
          sAjaxDataProp: "data",
          sAjaxSource: null,
          sDom: "lfrtip",
          searchDelay: null,
          sPaginationType: "simple_numbers",
          sScrollX: "",
          sScrollXInner: "",
          sScrollY: "",
          sServerMethod: "GET",
          renderer: null,
          rowId: "DT_RowId",
        }),
        i(_.defaults),
        (_.defaults.column = {
          aDataSort: null,
          iDataSort: -1,
          asSorting: ["asc", "desc"],
          bSearchable: !0,
          bSortable: !0,
          bVisible: !0,
          fnCreatedCell: null,
          mData: null,
          mRender: null,
          sCellType: "td",
          sClass: "",
          sContentPadding: "",
          sDefaultContent: null,
          sName: "",
          sSortDataType: "std",
          sTitle: null,
          sType: null,
          sWidth: null,
        }),
        i(_.defaults.column),
        (_.models.oSettings = {
          oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null,
          },
          oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null,
          },
          oLanguage: { fnInfoCallback: null },
          oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0,
          },
          ajax: null,
          aanFeatures: [],
          aoData: [],
          aiDisplay: [],
          aiDisplayMaster: [],
          aIds: {},
          aoColumns: [],
          aoHeader: [],
          aoFooter: [],
          oPreviousSearch: {},
          aoPreSearchCols: [],
          aaSorting: null,
          aaSortingFixed: [],
          asStripeClasses: null,
          asDestroyStripes: [],
          sDestroyWidth: 0,
          aoRowCallback: [],
          aoHeaderCallback: [],
          aoFooterCallback: [],
          aoDrawCallback: [],
          aoRowCreatedCallback: [],
          aoPreDrawCallback: [],
          aoInitComplete: [],
          aoStateSaveParams: [],
          aoStateLoadParams: [],
          aoStateLoaded: [],
          sTableId: "",
          nTable: null,
          nTHead: null,
          nTFoot: null,
          nTBody: null,
          nTableWrapper: null,
          bDeferLoading: !1,
          bInitialised: !1,
          aoOpenRows: [],
          sDom: null,
          searchDelay: null,
          sPaginationType: "two_button",
          iStateDuration: 0,
          aoStateSave: [],
          aoStateLoad: [],
          oSavedState: null,
          oLoadedState: null,
          sAjaxSource: null,
          sAjaxDataProp: null,
          bAjaxDataGet: !0,
          jqXHR: null,
          json: R,
          oAjaxData: R,
          fnServerData: null,
          aoServerParams: [],
          sServerMethod: null,
          fnFormatNumber: null,
          aLengthMenu: null,
          iDraw: 0,
          bDrawing: !1,
          iDrawError: -1,
          _iDisplayLength: 10,
          _iDisplayStart: 0,
          _iRecordsTotal: 0,
          _iRecordsDisplay: 0,
          oClasses: {},
          bFiltered: !1,
          bSorted: !1,
          bSortCellsTop: null,
          oInit: null,
          aoDestroyCallback: [],
          fnRecordsTotal: function () {
            return "ssp" == Vt(this)
              ? +this._iRecordsTotal
              : this.aiDisplayMaster.length;
          },
          fnRecordsDisplay: function () {
            return "ssp" == Vt(this)
              ? +this._iRecordsDisplay
              : this.aiDisplay.length;
          },
          fnDisplayEnd: function () {
            var t = this._iDisplayLength,
              e = this._iDisplayStart,
              n = e + t,
              a = this.aiDisplay.length,
              r = this.oFeatures,
              o = r.bPaginate;
            return r.bServerSide
              ? !1 === o || -1 === t
                ? e + a
                : Math.min(e + t, this._iRecordsDisplay)
              : !o || a < n || -1 === t
              ? a
              : n;
          },
          oInstance: null,
          sInstance: null,
          iTabIndex: 0,
          nScrollHead: null,
          nScrollFoot: null,
          aLastSort: [],
          oPlugins: {},
          rowIdFn: null,
          rowId: null,
        }),
        (_.ext = f =
          {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: { cell: [], column: [], row: [] },
            internal: {},
            legacy: { ajax: null },
            pager: {},
            renderer: { pageButton: {}, header: {} },
            order: {},
            type: { detect: [], search: {}, order: {} },
            _unique: 0,
            fnVersionCheck: _.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: _.version,
          }),
        P.extend(f, {
          afnFiltering: f.search,
          aTypes: f.type.detect,
          ofnSearch: f.type.search,
          oSort: f.type.order,
          afnSortData: f.order,
          aoFeatures: f.feature,
          oApi: f.internal,
          oStdClasses: f.classes,
          oPagination: f.pager,
        }),
        P.extend(_.ext.classes, {
          sTable: "dataTable",
          sNoFooter: "no-footer",
          sPageButton: "paginate_button",
          sPageButtonActive: "current",
          sPageButtonDisabled: "disabled",
          sStripeOdd: "odd",
          sStripeEven: "even",
          sRowEmpty: "dataTables_empty",
          sWrapper: "dataTables_wrapper",
          sFilter: "dataTables_filter",
          sInfo: "dataTables_info",
          sPaging: "dataTables_paginate paging_",
          sLength: "dataTables_length",
          sProcessing: "dataTables_processing",
          sSortAsc: "sorting_asc",
          sSortDesc: "sorting_desc",
          sSortable: "sorting",
          sSortableAsc: "sorting_asc_disabled",
          sSortableDesc: "sorting_desc_disabled",
          sSortableNone: "sorting_disabled",
          sSortColumn: "sorting_",
          sFilterInput: "",
          sLengthSelect: "",
          sScrollWrapper: "dataTables_scroll",
          sScrollHead: "dataTables_scrollHead",
          sScrollHeadInner: "dataTables_scrollHeadInner",
          sScrollBody: "dataTables_scrollBody",
          sScrollFoot: "dataTables_scrollFoot",
          sScrollFootInner: "dataTables_scrollFootInner",
          sHeaderTH: "",
          sFooterTH: "",
          sSortJUIAsc: "",
          sSortJUIDesc: "",
          sSortJUI: "",
          sSortJUIAscAllowed: "",
          sSortJUIDescAllowed: "",
          sSortJUIWrapper: "",
          sSortIcon: "",
          sJUIHeader: "",
          sJUIFooter: "",
        }),
        _.ext.pager);
    P.extend(Re, {
      simple: function (t, e) {
        return ["previous", "next"];
      },
      full: function (t, e) {
        return ["first", "previous", "next", "last"];
      },
      numbers: function (t, e) {
        return [Xt(t, e)];
      },
      simple_numbers: function (t, e) {
        return ["previous", Xt(t, e), "next"];
      },
      full_numbers: function (t, e) {
        return ["first", "previous", Xt(t, e), "next", "last"];
      },
      first_last_numbers: function (t, e) {
        return ["first", Xt(t, e), "last"];
      },
      _numbers: Xt,
      numbers_length: 7,
    }),
      P.extend(!0, _.ext.renderer, {
        pageButton: {
          _: function (l, t, m, e, c, u) {
            function d(t, e) {
              function n(t) {
                mt(l, t.data.action, !0);
              }
              for (
                var a = p.sPageButtonDisabled, r = 0, o = e.length;
                r < o;
                r++
              ) {
                var i = e[r];
                if (Array.isArray(i)) {
                  var s = P("<" + (i.DT_el || "div") + "/>").appendTo(t);
                  d(s, i);
                } else {
                  switch (((f = null), (h = i), (s = l.iTabIndex), i)) {
                    case "ellipsis":
                      t.append('<span class="ellipsis">&#x2026;</span>');
                      break;
                    case "first":
                      (f = g.sFirst), 0 === c && ((s = -1), (h += " " + a));
                      break;
                    case "previous":
                      (f = g.sPrevious), 0 === c && ((s = -1), (h += " " + a));
                      break;
                    case "next":
                      (f = g.sNext),
                        (0 !== u && c !== u - 1) || ((s = -1), (h += " " + a));
                      break;
                    case "last":
                      (f = g.sLast),
                        (0 !== u && c !== u - 1) || ((s = -1), (h += " " + a));
                      break;
                    default:
                      (f = l.fnFormatNumber(i + 1)),
                        (h = c === i ? p.sPageButtonActive : "");
                  }
                  null !== f &&
                    (Mt(
                      (s = P("<a>", {
                        class: p.sPageButton + " " + h,
                        "aria-controls": l.sTableId,
                        "aria-label": y[i],
                        "data-dt-idx": b,
                        tabindex: s,
                        id:
                          0 === m && "string" == typeof i
                            ? l.sTableId + "_" + i
                            : null,
                      })
                        .html(f)
                        .appendTo(t)),
                      { action: i },
                      n
                    ),
                    b++);
                }
              }
            }
            var f,
              h,
              p = l.oClasses,
              g = l.oLanguage.oPaginate,
              y = l.oLanguage.oAria.paginate || {},
              b = 0;
            try {
              var n = P(t).find(v.activeElement).data("dt-idx");
            } catch (t) {}
            d(P(t).empty(), e),
              n !== R &&
                P(t)
                  .find("[data-dt-idx=" + n + "]")
                  .trigger("focus");
          },
        },
      }),
      P.extend(_.ext.type.detect, [
        function (t, e) {
          return (e = e.oLanguage.sDecimal), Gt(t, e) ? "num" + e : null;
        },
        function (t, e) {
          return (!t || t instanceof Date || pe.test(t)) &&
            ((null !== (e = Date.parse(t)) && !isNaN(e)) || Yt(t))
            ? "date"
            : null;
        },
        function (t, e) {
          return (
            (e = e.oLanguage.sDecimal), Gt(t, e, !0) ? "num-fmt" + e : null
          );
        },
        function (t, e) {
          return (e = e.oLanguage.sDecimal), Zt(t, e) ? "html-num" + e : null;
        },
        function (t, e) {
          return (
            (e = e.oLanguage.sDecimal), Zt(t, e, !0) ? "html-num-fmt" + e : null
          );
        },
        function (t, e) {
          return Yt(t) || ("string" == typeof t && -1 !== t.indexOf("<"))
            ? "html"
            : null;
        },
      ]),
      P.extend(_.ext.type.search, {
        html: function (t) {
          return Yt(t)
            ? t
            : "string" == typeof t
            ? t.replace(fe, " ").replace(he, "")
            : "";
        },
        string: function (t) {
          return !Yt(t) && "string" == typeof t ? t.replace(fe, " ") : t;
        },
      }),
      P.extend(f.type.order, {
        "date-pre": function (t) {
          return (t = Date.parse(t)), isNaN(t) ? -1 / 0 : t;
        },
        "html-pre": function (t) {
          return Yt(t)
            ? ""
            : t.replace
            ? t.replace(/<.*?>/g, "").toLowerCase()
            : t + "";
        },
        "string-pre": function (t) {
          return Yt(t)
            ? ""
            : "string" == typeof t
            ? t.toLowerCase()
            : t.toString
            ? t.toString()
            : "";
        },
        "string-asc": function (t, e) {
          return t < e ? -1 : e < t ? 1 : 0;
        },
        "string-desc": function (t, e) {
          return t < e ? 1 : e < t ? -1 : 0;
        },
      }),
      qt(""),
      P.extend(!0, _.ext.renderer, {
        header: {
          _: function (r, o, i, s) {
            P(r.nTable).on("order.dt.DT", function (t, e, n, a) {
              r === e &&
                ((t = i.idx),
                o
                  .removeClass(
                    i.sSortingClass + " " + s.sSortAsc + " " + s.sSortDesc
                  )
                  .addClass(
                    "asc" == a[t]
                      ? s.sSortAsc
                      : "desc" == a[t]
                      ? s.sSortDesc
                      : i.sSortingClass
                  ));
            });
          },
          jqueryui: function (r, o, i, s) {
            P("<div/>")
              .addClass(s.sSortJUIWrapper)
              .append(o.contents())
              .append(
                P("<span/>").addClass(s.sSortIcon + " " + i.sSortingClassJUI)
              )
              .appendTo(o),
              P(r.nTable).on("order.dt.DT", function (t, e, n, a) {
                r === e &&
                  ((t = i.idx),
                  o
                    .removeClass(s.sSortAsc + " " + s.sSortDesc)
                    .addClass(
                      "asc" == a[t]
                        ? s.sSortAsc
                        : "desc" == a[t]
                        ? s.sSortDesc
                        : i.sSortingClass
                    ),
                  o
                    .find("span." + s.sSortIcon)
                    .removeClass(
                      s.sSortJUIAsc +
                        " " +
                        s.sSortJUIDesc +
                        " " +
                        s.sSortJUI +
                        " " +
                        s.sSortJUIAscAllowed +
                        " " +
                        s.sSortJUIDescAllowed
                    )
                    .addClass(
                      "asc" == a[t]
                        ? s.sSortJUIAsc
                        : "desc" == a[t]
                        ? s.sSortJUIDesc
                        : i.sSortingClassJUI
                    ));
              });
          },
        },
      });
    return (
      (_.render = {
        number: function (a, r, o, i, s) {
          return {
            display: function (t) {
              if ("number" != typeof t && "string" != typeof t) return t;
              var e = t < 0 ? "-" : "",
                n = parseFloat(t);
              return isNaN(n)
                ? ue(t)
                : ((n = n.toFixed(o)),
                  (t = Math.abs(n)),
                  (n = parseInt(t, 10)),
                  (t = o ? r + (t - n).toFixed(o).substring(2) : ""),
                  e +
                    (i || "") +
                    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
                    t +
                    (s || ""));
            },
          };
        },
        text: function () {
          return { display: ue, filter: ue };
        },
      }),
      P.extend(_.ext.internal, {
        _fnExternApiFunc: zt,
        _fnBuildAjax: J,
        _fnAjaxUpdate: G,
        _fnAjaxParameters: Z,
        _fnAjaxUpdateDraw: Q,
        _fnAjaxDataSrc: K,
        _fnAddColumn: I,
        _fnColumnOptions: A,
        _fnAdjustColumnSizing: N,
        _fnVisibleToColumnIndex: $,
        _fnColumnIndexToVisible: c,
        _fnVisbleColumns: y,
        _fnGetColumns: j,
        _fnColumnTypes: s,
        _fnApplyColumnDefs: L,
        _fnHungarianMap: i,
        _fnCamelToHungarian: D,
        _fnLanguageCompat: w,
        _fnBrowserDetect: C,
        _fnAddData: F,
        _fnAddTr: k,
        _fnNodeToDataIndex: function (t, e) {
          return e._DT_RowIndex !== R ? e._DT_RowIndex : null;
        },
        _fnNodeToColumnIndex: function (t, e, n) {
          return P.inArray(n, t.aoData[e].anCells);
        },
        _fnGetCellData: E,
        _fnSetCellData: a,
        _fnSplitObjNotation: u,
        _fnGetObjectDataFn: H,
        _fnSetObjectDataFn: p,
        _fnGetDataMaster: b,
        _fnClearTable: l,
        _fnDeleteIndex: d,
        _fnInvalidate: o,
        _fnGetRowElements: h,
        _fnCreateTr: M,
        _fnBuildHead: B,
        _fnDrawHead: U,
        _fnDraw: V,
        _fnReDraw: X,
        _fnAddOptionsHtml: q,
        _fnDetectHeader: z,
        _fnGetUniqueThs: Y,
        _fnFeatureHtmlFilter: tt,
        _fnFilterComplete: et,
        _fnFilterCustom: nt,
        _fnFilterColumn: at,
        _fnFilter: rt,
        _fnFilterCreateSearch: ot,
        _fnEscapeRegex: Te,
        _fnFilterData: it,
        _fnFeatureHtmlInfo: ct,
        _fnUpdateInfo: ut,
        _fnInfoMacros: dt,
        _fnInitialise: ft,
        _fnInitComplete: ht,
        _fnLengthChange: pt,
        _fnFeatureHtmlLength: gt,
        _fnFeatureHtmlPaginate: bt,
        _fnPageChange: mt,
        _fnFeatureHtmlProcessing: yt,
        _fnProcessingDisplay: vt,
        _fnFeatureHtmlTable: St,
        _fnScrollDraw: _t,
        _fnApplyToChildren: Dt,
        _fnCalculateColumnWidths: wt,
        _fnThrottle: Ae,
        _fnConvertToWidth: Tt,
        _fnGetWidestNode: xt,
        _fnGetMaxLenString: Ct,
        _fnStringToCss: O,
        _fnSortFlatten: It,
        _fnSort: At,
        _fnSortAria: jt,
        _fnSortListener: Lt,
        _fnSortAttachListener: Ft,
        _fnSortingClasses: Pt,
        _fnSortData: Rt,
        _fnSaveState: Ot,
        _fnLoadState: Nt,
        _fnSettingsFromNode: $t,
        _fnLog: kt,
        _fnMap: Et,
        _fnBindAction: Mt,
        _fnCallbackReg: Wt,
        _fnCallbackFire: S,
        _fnLengthOverflow: Bt,
        _fnRenderer: Ut,
        _fnDataSource: Vt,
        _fnRowAttributes: W,
        _fnExtend: Ht,
        _fnCalculateEnd: function () {},
      }),
      (((P.fn.dataTable = _).$ = P).fn.dataTableSettings = _.settings),
      (P.fn.dataTableExt = _.ext),
      (P.fn.DataTable = function (t) {
        return P(this).dataTable(t).api();
      }),
      P.each(_, function (t, e) {
        P.fn.DataTable[t] = e;
      }),
      P.fn.dataTable
    );
  });
(($jscomp = $jscomp || {}).scope = {}),
  ($jscomp.findInternal = function (t, e, n) {
    for (
      var a = (t = t instanceof String ? String(t) : t).length, r = 0;
      r < a;
      r++
    ) {
      var o = t[r];
      if (e.call(n, o, r, t)) return { i: r, v: o };
    }
    return { i: -1, v: void 0 };
  }),
  ($jscomp.ASSUME_ES5 = !1),
  ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
  ($jscomp.ASSUME_NO_NATIVE_SET = !1),
  ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
  ($jscomp.ISOLATE_POLYFILLS = !1),
  ($jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (t, e, n) {
          return (
            t == Array.prototype || t == Object.prototype || (t[e] = n.value), t
          );
        }),
  ($jscomp.getGlobal = function (t) {
    t = [
      "object" == typeof globalThis && globalThis,
      t,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var e = 0; e < t.length; ++e) {
      var n = t[e];
      if (n && n.Math == Math) return n;
    }
    throw Error("Cannot find global object");
  }),
  ($jscomp.global = $jscomp.getGlobal(this)),
  ($jscomp.IS_SYMBOL_NATIVE =
    "function" == typeof Symbol && "symbol" == typeof Symbol("x")),
  ($jscomp.TRUST_ES6_POLYFILLS =
    !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE),
  ($jscomp.polyfills = {}),
  ($jscomp.propertyToPolyfillSymbol = {}),
  ($jscomp.POLYFILL_PREFIX = "$jscp$"),
  ($jscomp$lookupPolyfilledValue = function (t, e) {
    var n = $jscomp.propertyToPolyfillSymbol[e];
    return null != n && void 0 !== (n = t[n]) ? n : t[e];
  });
($jscomp.polyfill = function (t, e, n, a) {
  e &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(t, e, n, a)
      : $jscomp.polyfillUnisolated(t, e, n, a));
}),
  ($jscomp.polyfillUnisolated = function (t, e, n, a) {
    for (n = $jscomp.global, t = t.split("."), a = 0; a < t.length - 1; a++) {
      var r = t[a];
      if (!(r in n)) return;
      n = n[r];
    }
    (e = e((a = n[(t = t[t.length - 1])]))) != a &&
      null != e &&
      $jscomp.defineProperty(n, t, {
        configurable: !0,
        writable: !0,
        value: e,
      });
  }),
  ($jscomp.polyfillIsolated = function (t, e, n, a) {
    var r = t.split(".");
    (t = 1 === r.length),
      (a = r[0]),
      (a = !t && a in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global);
    for (var o = 0; o < r.length - 1; o++) {
      var i = r[o];
      if (!(i in a)) return;
      a = a[i];
    }
    (r = r[r.length - 1]),
      null !=
        (e = e((n = $jscomp.IS_SYMBOL_NATIVE && "es6" === n ? a[r] : null))) &&
        (t
          ? $jscomp.defineProperty($jscomp.polyfills, r, {
              configurable: !0,
              writable: !0,
              value: e,
            })
          : e !== n &&
            (($jscomp.propertyToPolyfillSymbol[r] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(r)
              : $jscomp.POLYFILL_PREFIX + r),
            (r = $jscomp.propertyToPolyfillSymbol[r]),
            $jscomp.defineProperty(a, r, {
              configurable: !0,
              writable: !0,
              value: e,
            })));
  }),
  $jscomp.polyfill(
    "Array.prototype.find",
    function (t) {
      return (
        t ||
        function (t, e) {
          return $jscomp.findInternal(this, t, e).v;
        }
      );
    },
    "es6",
    "es3"
  ),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (t) {
          return n(t, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = function (t, e) {
          return (
            (t = t || window),
            (e && e.fn.dataTable) || (e = require("datatables.net")(t, e).$),
            n(e, 0, t.document)
          );
        })
      : n(jQuery, window, document);
  })(function (v, t, a, r) {
    var o = v.fn.dataTable;
    return (
      v.extend(!0, o.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap",
      }),
      v.extend(o.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap5",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "form-select form-select-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item",
      }),
      (o.ext.renderer.pageButton.bootstrap = function (s, t, b, e, l, c) {
        function u(t, e) {
          function n(t) {
            t.preventDefault(),
              v(t.currentTarget).hasClass("disabled") ||
                h.page() == t.data.action ||
                h.page(t.data.action).draw("page");
          }
          for (var a = 0, r = e.length; a < r; a++) {
            var o,
              i = e[a];
            if (Array.isArray(i)) u(t, i);
            else {
              switch (((f = d = ""), i)) {
                case "ellipsis":
                  (d = "&#x2026;"), (f = "disabled");
                  break;
                case "first":
                  (d = p.sFirst), (f = i + (0 < l ? "" : " disabled"));
                  break;
                case "previous":
                  (d = p.sPrevious), (f = i + (0 < l ? "" : " disabled"));
                  break;
                case "next":
                  (d = p.sNext), (f = i + (l < c - 1 ? "" : " disabled"));
                  break;
                case "last":
                  (d = p.sLast), (f = i + (l < c - 1 ? "" : " disabled"));
                  break;
                default:
                  (d = i + 1), (f = l === i ? "active" : "");
              }
              d &&
                ((o = v("<li>", {
                  class: m.sPageButton + " " + f,
                  id:
                    0 === b && "string" == typeof i
                      ? s.sTableId + "_" + i
                      : null,
                })
                  .append(
                    v("<a>", {
                      href: "#",
                      "aria-controls": s.sTableId,
                      "aria-label": y[i],
                      "data-dt-idx": g,
                      tabindex: s.iTabIndex,
                      class: "page-link",
                    }).html(d)
                  )
                  .appendTo(t)),
                s.oApi._fnBindAction(o, { action: i }, n),
                g++);
            }
          }
        }
        var d,
          f,
          h = new o.Api(s),
          m = s.oClasses,
          p = s.oLanguage.oPaginate,
          y = s.oLanguage.oAria.paginate || {},
          g = 0;
        try {
          var n = v(t).find(a.activeElement).data("dt-idx");
        } catch (t) {}
        u(v(t).empty().html('<ul class="pagination"/>').children("ul"), e),
          n !== r &&
            v(t)
              .find("[data-dt-idx=" + n + "]")
              .trigger("focus");
      }),
      o
    );
  }),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (t) {
          return n(t, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = function (t, e) {
          return (
            (t = t || window),
            (e && e.fn.dataTable) || (e = require("datatables.net")(t, e).$),
            n(e, t, t.document)
          );
        })
      : n(jQuery, window, document);
  })(function (d, f, i, c) {
    function s(t, e, n) {
      var a = e + "-" + n;
      if (l[a]) {
        for (
          var t = t.cell(e, n).node(),
            e = [],
            r = 0,
            o = (n = l[a][0].parentNode.childNodes).length;
          r < o;
          r++
        )
          e.push(n[r]);
        for (n = 0, r = e.length; n < r; n++) t.appendChild(e[n]);
        l[a] = c;
      }
    }
    function n(t, e) {
      if (!a.versionCheck || !a.versionCheck("1.10.10"))
        throw "DataTables Responsive requires DataTables 1.10.10 or newer";
      (this.s = { dt: new a.Api(t), columns: [], current: [] }),
        this.s.dt.settings()[0].responsive ||
          (e && "string" == typeof e.details
            ? (e.details = { type: e.details })
            : e && !1 === e.details
            ? (e.details = { type: !1 })
            : e && !0 === e.details && (e.details = { type: "inline" }),
          (this.c = d.extend(!0, {}, n.defaults, a.defaults.responsive, e)),
          (t.responsive = this)._constructor());
    }
    var a = d.fn.dataTable,
      l =
        (d.extend(n.prototype, {
          _constructor: function () {
            var o = this,
              e = this.s.dt,
              t = e.settings()[0],
              n = d(f).width();
            (e.settings()[0]._responsive = this),
              d(f).on(
                "resize.dtr orientationchange.dtr",
                a.util.throttle(function () {
                  var t = d(f).width();
                  t !== n && (o._resize(), (n = t));
                })
              ),
              t.oApi._fnCallbackReg(t, "aoRowCreatedCallback", function (t) {
                -1 !== d.inArray(!1, o.s.current) &&
                  d(">td, >th", t).each(function (t) {
                    (t = e.column.index("toData", t)),
                      !1 === o.s.current[t] && d(this).css("display", "none");
                  });
              }),
              e.on("destroy.dtr", function () {
                e.off(".dtr"),
                  d(e.table().body()).off(".dtr"),
                  d(f).off("resize.dtr orientationchange.dtr"),
                  d.each(o.s.current, function (t, e) {
                    !1 === e && o._setColumnVis(t, !0);
                  });
              }),
              this.c.breakpoints.sort(function (t, e) {
                return t.width < e.width ? 1 : t.width > e.width ? -1 : 0;
              }),
              this._classLogic(),
              this._resizeAuto(),
              !1 !== (t = this.c.details).type &&
                (o._detailsInit(),
                e.on("column-visibility.dtr", function (t, e, n, a, r) {
                  r && (o._classLogic(), o._resizeAuto(), o._resize());
                }),
                e.on("draw.dtr", function () {
                  o._redrawChildren();
                }),
                d(e.table().node()).addClass("dtr-" + t.type)),
              e.on("column-reorder.dtr", function () {
                o._classLogic(), o._resizeAuto(), o._resize();
              }),
              e.on("column-sizing.dtr", function () {
                o._resizeAuto(), o._resize();
              }),
              e.on("preXhr.dtr", function () {
                var t = [];
                e.rows().every(function () {
                  this.child.isShown() && t.push(this.id(!0));
                }),
                  e.one("draw.dtr", function () {
                    o._resizeAuto(),
                      o._resize(),
                      e.rows(t).every(function () {
                        o._detailsDisplay(this, !1);
                      });
                  });
              }),
              e.on("init.dtr", function () {
                o._resizeAuto(),
                  o._resize(),
                  d.inArray(!1, o.s.current) && e.columns.adjust();
              }),
              this._resize();
          },
          _columnsVisiblity: function (e) {
            for (
              var t = this.s.dt,
                n = this.s.columns,
                a = n
                  .map(function (t, e) {
                    return { columnIdx: e, priority: t.priority };
                  })
                  .sort(function (t, e) {
                    return t.priority !== e.priority
                      ? t.priority - e.priority
                      : t.columnIdx - e.columnIdx;
                  }),
                r = d.map(n, function (t) {
                  return (
                    (!t.auto || null !== t.minWidth) &&
                    (!0 === t.auto ? "-" : -1 !== d.inArray(e, t.includeIn))
                  );
                }),
                o = 0,
                i = 0,
                s = r.length;
              i < s;
              i++
            )
              !0 === r[i] && (o += n[i].minWidth);
            for (
              i = (i = t.settings()[0].oScroll).sY || i.sX ? i.iBarWidth : 0,
                t = t.table().container().offsetWidth - i - o,
                i = 0,
                s = r.length;
              i < s;
              i++
            )
              n[i].control && (t -= n[i].minWidth);
            for (o = !1, i = 0, s = a.length; i < s; i++) {
              var l = a[i].columnIdx;
              "-" === r[l] &&
                !n[l].control &&
                n[l].minWidth &&
                (o || t - n[l].minWidth < 0 ? (r[l] = !(o = !0)) : (r[l] = !0),
                (t -= n[l].minWidth));
            }
            for (a = !1, i = 0, s = n.length; i < s; i++)
              if (!n[i].control && !n[i].never && !r[i]) {
                a = !0;
                break;
              }
            for (i = 0, s = n.length; i < s; i++) n[i].control && (r[i] = a);
            return -1 === d.inArray(!0, r) && (r[0] = !0), r;
          },
          _classLogic: function () {
            function s(t, e, n, a) {
              if (n) {
                if ("max-" === n)
                  for (a = r._find(e).width, e = 0, n = l.length; e < n; e++)
                    l[e].width <= a && i(t, l[e].name);
                else if ("min-" === n)
                  for (a = r._find(e).width, e = 0, n = l.length; e < n; e++)
                    l[e].width >= a && i(t, l[e].name);
                else if ("not-" === n)
                  for (e = 0, n = l.length; e < n; e++)
                    -1 === l[e].name.indexOf(a) && i(t, l[e].name);
              } else o[t].includeIn.push(e);
            }
            var r = this,
              l = this.c.breakpoints,
              a = this.s.dt,
              o = a
                .columns()
                .eq(0)
                .map(function (t) {
                  var e = this.column(t),
                    n = e.header().className;
                  return (
                    (t = a.settings()[0].aoColumns[t].responsivePriority) ===
                      c &&
                      (t =
                        (e = d(e.header()).data("priority")) !== c ? +e : 1e4),
                    {
                      className: n,
                      includeIn: [],
                      auto: !1,
                      control: !1,
                      never: !!n.match(/\bnever\b/),
                      priority: t,
                    }
                  );
                }),
              i = function (t, e) {
                t = o[t].includeIn;
                -1 === d.inArray(e, t) && t.push(e);
              };
            o.each(function (t, r) {
              for (
                var e = t.className.split(" "), o = !1, n = 0, a = e.length;
                n < a;
                n++
              ) {
                var i = d.trim(e[n]);
                if ("all" === i)
                  return (
                    (o = !0),
                    void (t.includeIn = d.map(l, function (t) {
                      return t.name;
                    }))
                  );
                if ("none" === i || t.never) return void (o = !0);
                if ("control" === i) return (o = !0), void (t.control = !0);
                d.each(l, function (t, e) {
                  var n = e.name.split("-"),
                    a = i.match(
                      RegExp(
                        "(min\\-|max\\-|not\\-)?(" +
                          n[0] +
                          ")(\\-[_a-zA-Z0-9])?"
                      )
                    );
                  a &&
                    ((o = !0),
                    a[2] === n[0] && a[3] === "-" + n[1]
                      ? s(r, e.name, a[1], a[2] + a[3])
                      : a[2] !== n[0] || a[3] || s(r, e.name, a[1], a[2]));
                });
              }
              o || (t.auto = !0);
            }),
              (this.s.columns = o);
          },
          _detailsDisplay: function (t, e) {
            var n,
              a = this,
              r = this.s.dt,
              o = this.c.details;
            o &&
              !1 !== o.type &&
              ((!0 !==
                (n = o.display(t, e, function () {
                  return o.renderer(r, t[0], a._detailsObj(t[0]));
                })) &&
                !1 !== n) ||
                d(r.table().node()).triggerHandler("responsive-display.dt", [
                  r,
                  t,
                  n,
                  e,
                ]));
          },
          _detailsInit: function () {
            var n = this,
              a = this.s.dt,
              t = this.c.details,
              r =
                ("inline" === t.type &&
                  (t.target = "td:first-child, th:first-child"),
                a.on("draw.dtr", function () {
                  n._tabIndexes();
                }),
                n._tabIndexes(),
                d(a.table().body()).on("keyup.dtr", "td, th", function (t) {
                  13 === t.keyCode &&
                    d(this).data("dtr-keyboard") &&
                    d(this).click();
                }),
                t.target);
            d(a.table().body()).on(
              "click.dtr mousedown.dtr mouseup.dtr",
              "string" == typeof r ? r : "td, th",
              function (t) {
                if (
                  d(a.table().node()).hasClass("collapsed") &&
                  -1 !==
                    d.inArray(
                      d(this).closest("tr").get(0),
                      a.rows().nodes().toArray()
                    )
                ) {
                  if ("number" == typeof r) {
                    var e = r < 0 ? a.columns().eq(0).length + r : r;
                    if (a.cell(this).index().column !== e) return;
                  }
                  (e = a.row(d(this).closest("tr"))),
                    "click" === t.type
                      ? n._detailsDisplay(e, !1)
                      : "mousedown" === t.type
                      ? d(this).css("outline", "none")
                      : "mouseup" === t.type &&
                        d(this).blur().css("outline", "");
                }
              }
            );
          },
          _detailsObj: function (n) {
            var a = this,
              r = this.s.dt;
            return d.map(this.s.columns, function (t, e) {
              if (!t.never && !t.control)
                return {
                  title: r.settings()[0].aoColumns[e].sTitle,
                  data: r.cell(n, e).render(a.c.orthogonal),
                  hidden: r.column(e).visible() && !a.s.current[e],
                  columnIndex: e,
                  rowIndex: n,
                };
            });
          },
          _find: function (t) {
            for (var e = this.c.breakpoints, n = 0, a = e.length; n < a; n++)
              if (e[n].name === t) return e[n];
          },
          _redrawChildren: function () {
            var n = this,
              a = this.s.dt;
            a.rows({ page: "current" }).iterator("row", function (t, e) {
              a.row(e), n._detailsDisplay(a.row(e), !0);
            });
          },
          _resize: function () {
            for (
              var n = this,
                t = this.s.dt,
                e = d(f).width(),
                a = this.c.breakpoints,
                r = a[0].name,
                o = this.s.columns,
                u = this.s.current.slice(),
                i = a.length - 1;
              0 <= i;
              i--
            )
              if (e <= a[i].width) {
                r = a[i].name;
                break;
              }
            var s = this._columnsVisiblity(r);
            for (this.s.current = s, a = !1, i = 0, e = o.length; i < e; i++)
              if (!1 === s[i] && !o[i].never && !o[i].control) {
                a = !0;
                break;
              }
            d(t.table().node()).toggleClass("collapsed", a);
            var l = !1,
              c = 0;
            t
              .columns()
              .eq(0)
              .each(function (t, e) {
                !0 === s[e] && c++,
                  s[e] !== u[e] && ((l = !0), n._setColumnVis(t, s[e]));
              }),
              l &&
                (this._redrawChildren(),
                d(t.table().node()).trigger("responsive-resize.dt", [
                  t,
                  this.s.current,
                ]),
                0 === t.page.info().recordsDisplay &&
                  d("td", t.table().body()).eq(0).attr("colspan", c));
          },
          _resizeAuto: function () {
            var t,
              e,
              n,
              a,
              r,
              o = this.s.dt,
              i = this.s.columns;
            this.c.auto &&
              -1 !==
                d.inArray(
                  !0,
                  d.map(i, function (t) {
                    return t.auto;
                  })
                ) &&
              (d.isEmptyObject(l) ||
                d.each(l, function (t) {
                  (t = t.split("-")), s(o, +t[0], +t[1]);
                }),
              o.table().node(),
              (t = o.table().node().cloneNode(!1)),
              (e = d(o.table().header().cloneNode(!1)).appendTo(t)),
              (a = d(o.table().body()).clone(!1, !1).empty().appendTo(t)),
              (n = o
                .columns()
                .header()
                .filter(function (t) {
                  return o.column(t).visible();
                })
                .to$()
                .clone(!1)
                .css("display", "table-cell")
                .css("min-width", 0)),
              d(a)
                .append(d(o.rows({ page: "current" }).nodes()).clone(!1))
                .find("th, td")
                .css("display", ""),
              (a = o.table().footer()) &&
                ((a = d(a.cloneNode(!1)).appendTo(t)),
                (r = o
                  .columns()
                  .footer()
                  .filter(function (t) {
                    return o.column(t).visible();
                  })
                  .to$()
                  .clone(!1)
                  .css("display", "table-cell")),
                d("<tr/>").append(r).appendTo(a)),
              d("<tr/>").append(n).appendTo(e),
              "inline" === this.c.details.type &&
                d(t).addClass("dtr-inline collapsed"),
              d(t).find("[name]").removeAttr("name"),
              (t = d("<div/>")
                .css({ width: 1, height: 1, overflow: "hidden", clear: "both" })
                .append(t)).insertBefore(o.table().node()),
              n.each(function (t) {
                (t = o.column.index("fromVisible", t)),
                  (i[t].minWidth = this.offsetWidth || 0);
              }),
              t.remove());
          },
          _setColumnVis: function (t, e) {
            var n = this.s.dt,
              e = e ? "" : "none";
            d(n.column(t).header()).css("display", e),
              d(n.column(t).footer()).css("display", e),
              n.column(t).nodes().to$().css("display", e),
              d.isEmptyObject(l) ||
                n
                  .cells(null, t)
                  .indexes()
                  .each(function (t) {
                    s(n, t.row, t.column);
                  });
          },
          _tabIndexes: function () {
            var t = this.s.dt,
              e = t.cells({ page: "current" }).nodes().to$(),
              n = t.settings()[0],
              a = this.c.details.target;
            e.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"),
              d(
                (e =
                  "td:first-child, th:first-child" ===
                  (e = "number" == typeof a ? ":eq(" + a + ")" : a)
                    ? ">td:first-child, >th:first-child"
                    : e),
                t.rows({ page: "current" }).nodes()
              )
                .attr("tabIndex", n.iTabIndex)
                .data("dtr-keyboard", 1);
          },
        }),
        {}),
      t =
        ((n.defaults = {
          breakpoints: (n.breakpoints = [
            { name: "desktop", width: 1 / 0 },
            { name: "tablet-l", width: 1024 },
            { name: "tablet-p", width: 768 },
            { name: "mobile-l", width: 480 },
            { name: "mobile-p", width: 320 },
          ]),
          auto: !0,
          details: {
            display: (n.display = {
              childRow: function (t, e, n) {
                return e
                  ? d(t.node()).hasClass("parent")
                    ? (t.child(n(), "child").show(), !0)
                    : void 0
                  : t.child.isShown()
                  ? (t.child(!1), d(t.node()).removeClass("parent"), !1)
                  : (t.child(n(), "child").show(),
                    d(t.node()).addClass("parent"),
                    !0);
              },
              childRowImmediate: function (t, e, n) {
                return (!e && t.child.isShown()) || !t.responsive.hasHidden()
                  ? (t.child(!1), d(t.node()).removeClass("parent"), !1)
                  : (t.child(n(), "child").show(),
                    d(t.node()).addClass("parent"),
                    !0);
              },
              modal: function (o) {
                return function (t, e, n) {
                  var a, r;
                  e
                    ? d("div.dtr-modal-content").empty().append(n())
                    : ((a = function () {
                        r.remove(), d(i).off("keypress.dtr");
                      }),
                      (r = d('<div class="dtr-modal"/>')
                        .append(
                          d('<div class="dtr-modal-display"/>')
                            .append(
                              d('<div class="dtr-modal-content"/>').append(n())
                            )
                            .append(
                              d(
                                '<div class="dtr-modal-close">&times;</div>'
                              ).click(function () {
                                a();
                              })
                            )
                        )
                        .append(
                          d('<div class="dtr-modal-background"/>').click(
                            function () {
                              a();
                            }
                          )
                        )
                        .appendTo("body")),
                      d(i).on("keyup.dtr", function (t) {
                        27 === t.keyCode && (t.stopPropagation(), a());
                      })),
                    o &&
                      o.header &&
                      d("div.dtr-modal-content").prepend(
                        "<h2>" + o.header(t) + "</h2>"
                      );
                };
              },
            }).childRow,
            renderer: (n.renderer = {
              listHiddenNodes: function () {
                return function (n, t, e) {
                  var a = d(
                      '<ul data-dtr-index="' + t + '" class="dtr-details"/>'
                    ),
                    r = !1;
                  return (
                    d.each(e, function (t, e) {
                      e.hidden &&
                        (d(
                          '<li data-dtr-index="' +
                            e.columnIndex +
                            '" data-dt-row="' +
                            e.rowIndex +
                            '" data-dt-column="' +
                            e.columnIndex +
                            '"><span class="dtr-title">' +
                            e.title +
                            "</span> </li>"
                        )
                          .append(
                            d('<span class="dtr-data"/>').append(
                              (function (t, e, n) {
                                var a = e + "-" + n;
                                if (l[a]) return l[a];
                                for (
                                  var r = [],
                                    t = t.cell(e, n).node().childNodes,
                                    e = 0,
                                    n = t.length;
                                  e < n;
                                  e++
                                )
                                  r.push(t[e]);
                                return (l[a] = r);
                              })(n, e.rowIndex, e.columnIndex)
                            )
                          )
                          .appendTo(a),
                        (r = !0));
                    }),
                    !!r && a
                  );
                };
              },
              listHidden: function () {
                return function (t, e, n) {
                  return (
                    !!(t = d
                      .map(n, function (t) {
                        return t.hidden
                          ? '<li data-dtr-index="' +
                              t.columnIndex +
                              '" data-dt-row="' +
                              t.rowIndex +
                              '" data-dt-column="' +
                              t.columnIndex +
                              '"><span class="dtr-title">' +
                              t.title +
                              '</span> <span class="dtr-data">' +
                              t.data +
                              "</span></li>"
                          : "";
                      })
                      .join("")) &&
                    d(
                      '<ul data-dtr-index="' + e + '" class="dtr-details"/>'
                    ).append(t)
                  );
                };
              },
              tableAll: function (a) {
                return (
                  (a = d.extend({ tableClass: "" }, a)),
                  function (t, e, n) {
                    return (
                      (t = d
                        .map(n, function (t) {
                          return (
                            '<tr data-dt-row="' +
                            t.rowIndex +
                            '" data-dt-column="' +
                            t.columnIndex +
                            '"><td>' +
                            t.title +
                            ":</td> <td>" +
                            t.data +
                            "</td></tr>"
                          );
                        })
                        .join("")),
                      d(
                        '<table class="' +
                          a.tableClass +
                          ' dtr-details" width="100%"/>'
                      ).append(t)
                    );
                  }
                );
              },
            }).listHidden(),
            target: 0,
            type: "inline",
          },
          orthogonal: "display",
        }),
        d.fn.dataTable.Api);
    return (
      t.register("responsive()", function () {
        return this;
      }),
      t.register("responsive.index()", function (t) {
        return {
          column: (t = d(t)).data("dtr-index"),
          row: t.parent().data("dtr-index"),
        };
      }),
      t.register("responsive.rebuild()", function () {
        return this.iterator("table", function (t) {
          t._responsive && t._responsive._classLogic();
        });
      }),
      t.register("responsive.recalc()", function () {
        return this.iterator("table", function (t) {
          t._responsive &&
            (t._responsive._resizeAuto(), t._responsive._resize());
        });
      }),
      t.register("responsive.hasHidden()", function () {
        var t = this.context[0];
        return !!t._responsive && -1 !== d.inArray(!1, t._responsive.s.current);
      }),
      t.registerPlural(
        "columns().responsiveHidden()",
        "column().responsiveHidden()",
        function () {
          return this.iterator(
            "column",
            function (t, e) {
              return !!t._responsive && t._responsive.s.current[e];
            },
            1
          );
        }
      ),
      (n.version = "2.2.1"),
      (d.fn.dataTable.Responsive = n),
      (d.fn.DataTable.Responsive = n),
      d(i).on("preInit.dt.dtr", function (t, e) {
        "dt" !== t.namespace ||
          !(
            d(e.nTable).hasClass("responsive") ||
            d(e.nTable).hasClass("dt-responsive") ||
            e.oInit.responsive ||
            a.defaults.responsive
          ) ||
          (!1 !== (t = e.oInit.responsive) &&
            new n(e, d.isPlainObject(t) ? t : {}));
      }),
      n
    );
  });
