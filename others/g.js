var l = void 0,
	q = !0,
	r = null,
	s = !1,
	t, w = this;

function aa() {}

function ba(a) {
	var b = typeof a;
	if ("object" == b) if (a) {
		if (a instanceof Array) return "array";
		if (a instanceof Object) return b;
		var c = Object.prototype.toString.call(a);
		if ("[object Window]" == c) return "object";
		if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
		if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
	} else return "null";
	else if ("function" == b && "undefined" == typeof a.call) return "object";
	return b
}
function A(a) {
	return a !== l
}
function D(a) {
	return "string" == typeof a
}
function E(a) {
	return "function" == ba(a)
}
function ca(a) {
	return a[da] || (a[da] = ++ea)
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0),
	ea = 0;

function fa(a, b, c) {
	return a.call.apply(a.bind, arguments)
}

function ga(a, b, c) {
	if (!a) throw Error();
	if (2 < arguments.length) {
		var e = Array.prototype.slice.call(arguments, 2);
		return function() {
			var c = Array.prototype.slice.call(arguments);
			Array.prototype.unshift.apply(c, e);
			return a.apply(b, c)
		}
	}
	return function() {
		return a.apply(b, arguments)
	}
}
function ia(a, b, c) {
	ia = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
	return ia.apply(r, arguments)
}

function F(a, b) {
	var c = a.split("."),
		e = w;
	!(c[0] in e) && e.execScript && e.execScript("var " + c[0]);
	for (var d; c.length && (d = c.shift());)!c.length && A(b) ? e[d] = b : e = e[d] ? e[d] : e[d] = {}
}
function ja(a, b) {
	function c() {}
	c.prototype = b.prototype;
	a.Cb = b.prototype;
	a.prototype = new c;
	a.prototype.constructor = a
}
Function.prototype.bind = Function.prototype.bind || function(a, b) {
	if (1 < arguments.length) {
		var c = Array.prototype.slice.call(arguments, 1);
		c.unshift(this, a);
		return ia.apply(r, c)
	}
	return ia(this, a)
};

function ma(a) {
	return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
var I = Array.prototype,
	na = I.indexOf ? function(a, b, c) {
		return I.indexOf.call(a, b, c)
	} : function(a, b, c) {
		c = c == r ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
		if (D(a)) return !D(b) || 1 != b.length ? -1 : a.indexOf(b, c);
		for (; c < a.length; c++) if (c in a && a[c] === b) return c;
		return -1
	}, oa = I.forEach ? function(a, b, c) {
		I.forEach.call(a, b, c)
	} : function(a, b, c) {
		for (var e = a.length, d = D(a) ? a.split("") : a, f = 0; f < e; f++) f in d && b.call(c, d[f], f, a)
	}, pa = I.filter ? function(a, b, c) {
		return I.filter.call(a, b, c)
	} : function(a, b, c) {
		for (var e = a.length, d = [], f = 0, h = D(a) ? a.split("") : a, g = 0; g < e; g++) if (g in h) {
			var k = h[g];
			b.call(c, k, g, a) && (d[f++] = k)
		}
		return d
	};

function qa(a, b) {
	return 0 <= na(a, b)
}
function ra(a, b, c) {
	return 2 >= arguments.length ? I.slice.call(a, b) : I.slice.call(a, b, c)
};
var sa, ta, va, wa;

function xa() {
	return w.navigator ? w.navigator.userAgent : r
}
wa = va = ta = sa = s;
var ya;
if (ya = xa()) {
	var za = w.navigator;
	sa = 0 == ya.indexOf("Opera");
	ta = !sa && -1 != ya.indexOf("MSIE");
	va = !sa && -1 != ya.indexOf("WebKit");
	wa = !sa && !va && "Gecko" == za.product
}
var Aa = sa,
	J = ta,
	Ba = wa,
	L = va,
	Ca = w.navigator,
	Da = -1 != (Ca && Ca.platform || "").indexOf("Mac");

function Ea() {
	var a = w.document;
	return a ? a.documentMode : l
}
var Fa;
a: {
	var Ga = "",
		Ha;
	if (Aa && w.opera) var Ia = w.opera.version,
		Ga = "function" == typeof Ia ? Ia() : Ia;
	else if (Ba ? Ha = /rv\:([^\);]+)(\)|;)/ : J ? Ha = /MSIE\s+([^\);]+)(\)|;)/ : L && (Ha = /WebKit\/(\S+)/), Ha) var Ja = Ha.exec(xa()),
		Ga = Ja ? Ja[1] : "";
	if (J) {
		var Ka = Ea();
		if (Ka > parseFloat(Ga)) {
			Fa = String(Ka);
			break a
		}
	}
	Fa = Ga
}
var La = {};

function M(a) {
	var b;
	if (!(b = La[a])) {
		b = 0;
		for (var c = ma(String(Fa)).split("."), e = ma(String(a)).split("."), d = Math.max(c.length, e.length), f = 0; 0 == b && f < d; f++) {
			var h = c[f] || "",
				g = e[f] || "",
				k = RegExp("(\\d*)(\\D*)", "g"),
				m = RegExp("(\\d*)(\\D*)", "g");
			do {
				var n = k.exec(h) || ["", "", ""],
					p = m.exec(g) || ["", "", ""];
				if (0 == n[0].length && 0 == p[0].length) break;
				b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == p[2].length) ? -1 : (0 == n[2].length) > (0 == p[2].length) ? 1 : 0) || (n[2] < p[2] ? -1 : n[2] > p[2] ? 1 : 0)
			} while (0 == b)
		}
		b = La[a] = 0 <= b
	}
	return b
}
var Ma = w.document,
	Na = !Ma || !J ? l : Ea() || ("CSS1Compat" == Ma.compatMode ? parseInt(Fa, 10) : 5);
var Oa;
!Ba && !J || J && J && 9 <= Na || Ba && M("1.9.1");
J && M("9");

function Pa(a) {
	a = a.className;
	return D(a) && a.match(/\S+/g) || []
}
function N(a, b) {
	for (var c = Pa(a), e = ra(arguments, 1), d = c, f = 0; f < e.length; f++) qa(d, e[f]) || d.push(e[f]);
	a.className = c.join(" ")
}
function O(a, b) {
	var c = Pa(a),
		e = ra(arguments, 1),
		c = Qa(c, e);
	a.className = c.join(" ")
}
function Qa(a, b) {
	return pa(a, function(a) {
		return !qa(b, a)
	})
};

function Ra(a, b) {
	this.x = A(a) ? a : 0;
	this.y = A(b) ? b : 0
}
t = Ra.prototype;
t.$ = function() {
	return new Ra(this.x, this.y)
};
t.toString = function() {
	return "(" + this.x + ", " + this.y + ")"
};
t.ceil = function() {
	this.x = Math.ceil(this.x);
	this.y = Math.ceil(this.y);
	return this
};
t.floor = function() {
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	return this
};
t.round = function() {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this
};
t.translate = function(a, b) {
	a instanceof Ra ? (this.x += a.x, this.y += a.y) : (this.x += a, "number" == typeof b && (this.y += b));
	return this
};

function Sa(a, b) {
	this.width = a;
	this.height = b
}
t = Sa.prototype;
t.$ = function() {
	return new Sa(this.width, this.height)
};
t.toString = function() {
	return "(" + this.width + " x " + this.height + ")"
};
t.ceil = function() {
	this.width = Math.ceil(this.width);
	this.height = Math.ceil(this.height);
	return this
};
t.floor = function() {
	this.width = Math.floor(this.width);
	this.height = Math.floor(this.height);
	return this
};
t.round = function() {
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	return this
};

function Ta(a, b) {
	for (var c in a) b.call(l, a[c], c, a)
}
var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Va(a, b) {
	for (var c, e, d = 1; d < arguments.length; d++) {
		e = arguments[d];
		for (c in e) a[c] = e[c];
		for (var f = 0; f < Ua.length; f++) c = Ua[f], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
	}
};

function Wa(a) {
	return a ? new Xa(Ya(a)) : Oa || (Oa = new Xa)
}
function Q(a) {
	return D(a) ? document.getElementById(a) : a
}
function Za(a, b) {
	var c = b || document;
	return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : $a(a, b)
}
function ab(a) {
	var b = a || document,
		c = r;
	return (c = b.querySelectorAll && b.querySelector ? b.querySelector(".close-popup") : Za("close-popup", a)[0]) || r
}

function $a(a, b) {
	var c, e, d, f;
	c = document;
	c = b || c;
	if (c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
	if (a && c.getElementsByClassName) {
		var h = c.getElementsByClassName(a);
		return h
	}
	h = c.getElementsByTagName("*");
	if (a) {
		f = {};
		for (e = d = 0; c = h[e]; e++) {
			var g = c.className;
			"function" == typeof g.split && qa(g.split(/\s+/), a) && (f[d++] = c)
		}
		f.length = d;
		return f
	}
	return h
}

function bb(a, b) {
	Ta(b, function(b, e) {
		"style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in cb ? a.setAttribute(cb[e], b) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, b) : a[e] = b
	})
}
var cb = {
	cellpadding: "cellPadding",
	cellspacing: "cellSpacing",
	colspan: "colSpan",
	frameborder: "frameBorder",
	height: "height",
	maxlength: "maxLength",
	role: "role",
	rowspan: "rowSpan",
	type: "type",
	usemap: "useMap",
	valign: "vAlign",
	width: "width"
};

function db(a) {
	a = a.document;
	a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
	return new Sa(a.clientWidth, a.clientHeight)
}
function eb(a) {
	a && a.parentNode && a.parentNode.removeChild(a)
}
function Ya(a) {
	return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function fb(a, b) {
	return !b ? r : gb(a, function(a) {
		return !b || qa(Pa(a), b)
	})
}
function gb(a, b) {
	for (var c = 0; a;) {
		if (b(a)) return a;
		a = a.parentNode;
		c++
	}
	return r
}
function Xa(a) {
	this.la = a || w.document || document
}
Xa.prototype.createElement = function(a) {
	return this.la.createElement(a)
};
Xa.prototype.contains = function(a, b) {
	if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
	if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
	for (; b && a != b;) b = b.parentNode;
	return b == a
};

function hb(a, b) {
	a.dataset ? a.dataset.target = b : a.setAttribute("data-" + "target".replace(/([A-Z])/g, "-$1").toLowerCase(), b)
}
function ib(a, b) {
	return a.dataset ? a.dataset[b] : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
};

function jb() {
	return q
};
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var kb = function() {
	function a(a, c) {
		if (!a) return [];
		if (a.constructor == Array) return a;
		if (!D(a)) return [a];
		if (D(c) && (c = Q(c), !c)) return [];
		c = c || document;
		var d = c.ownerDocument || c.documentElement;
		R = c.contentType && "application/xml" == c.contentType || Aa && (c.doctype || "[object XMLDocument]" == d.toString()) || !! d && (J ? d.xml : c.xmlVersion || d.xmlVersion);
		return (d = e(a)(c)) && d.pa ? d : b(d)
	}
	function b(a) {
		if (a && a.pa) return a;
		var b = [];
		if (!a || !a.length) return b;
		a[0] && b.push(a[0]);
		if (2 > a.length) return b;
		ha++;
		if (J && R) {
			var c = ha + "";
			a[0].setAttribute("_zipIdx", c);
			for (var e = 1, d; d = a[e]; e++) a[e].getAttribute("_zipIdx") != c && b.push(d), d.setAttribute("_zipIdx", c)
		} else if (J && a.hb) try {
			for (e = 1; d = a[e]; e++) G(d) && b.push(d)
		} catch (f) {} else {
			a[0] && (a[0]._zipIdx = ha);
			for (e = 1; d = a[e]; e++) a[e]._zipIdx != ha && b.push(d), d._zipIdx = ha
		}
		return b
	}
	function c(a, b) {
		if (!b) return 1;
		var c = Rc(a);
		return !b[c] ? b[c] = 1 : 0
	}
	function e(a, b) {
		if (bc) {
			var c = cc[a];
			if (c && !b) return c
		}
		if (c = dc[a]) return c;
		var c = a.charAt(0),
			f = -1 == a.indexOf(" ");
		0 <= a.indexOf("#") && f && (b = q);
		if (bc && !b && -1 == ">~+".indexOf(c) && (!J || -1 == a.indexOf(":")) && !(u && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
			var h = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
			return cc[a] = function(b) {
				try {
					if (!(9 == b.nodeType || f)) throw "";
					var c = b.querySelectorAll(h);
					J ? c.hb = q : c.pa = q;
					return c
				} catch (d) {
					return e(a, q)(b)
				}
			}
		}
		var g = a.split(/\s*,\s*/);
		return dc[a] = 2 > g.length ? d(a) : function(a) {
			for (var b = 0, c = [], e; e = g[b++];) c = c.concat(d(e)(a));
			return c
		}
	}
	function d(a) {
		var b = z(ma(a));
		if (1 == b.length) {
			var c = f(b[0]);
			return function(a) {
				if (a = c(a, [])) a.pa = q;
				return a
			}
		}
		return function(a) {
			a = H(a);
			for (var c, e, d = b.length, h, g, m = 0; m < d; m++) {
				g = [];
				c = b[m];
				e = a.length - 1;
				0 < e && (h = {}, g.pa = q);
				e = f(c);
				for (var C = 0; c = a[C]; C++) e(c, g, h);
				if (!g.length) break;
				a = g
			}
			return g
		}
	}
	function f(a) {
		var b = ec[a.V];
		if (b) return b;
		var c = a.Sa,
			c = c ? c.qa : "",
			e = m(a, {
				T: 1
			}),
			d = "*" == a.q,
			f = document.getElementsByClassName;
		if (c) f = {
			T: 1
		}, d && (f.q = 1), e = m(a, f), "+" == c ? b = k(e) : "~" == c ? b = g(e) : ">" == c && (b = h(e));
		else if (a.id) e = !a.Va && d ? jb : m(a, {
			T: 1,
			id: 1
		}), b = function(b, c) {
			var d;
			d = Wa(b);
			var f = a.id;
			if (f = (d = D(f) ? d.la.getElementById(f) : f) && e(d)) if (!(f = 9 == b.nodeType)) {
				for (f = d.parentNode; f && f != b;) f = f.parentNode;
				f = !! f
			}
			if (f) return H(d, c)
		};
		else if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.J.length && !u) var e = m(a, {
			T: 1,
			J: 1,
			id: 1
		}),
			C = a.J.join(" "),
			b = function(a, b) {
				for (var c = H(0, b), d, f = 0, g = a.getElementsByClassName(C); d = g[f++];) e(d, a) && c.push(d);
				return c
			};
		else !d && !a.Va ? b = function(b, c) {
			for (var e = H(0, c), d, f = 0, g = b.getElementsByTagName(a.Ba()); d = g[f++];) e.push(d);
			return e
		} : (e = m(a, {
			T: 1,
			q: 1,
			id: 1
		}),
		b = function(b, c) {
			for (var d = H(0, c), f, g = 0, h = b.getElementsByTagName(a.Ba()); f = h[g++];) e(f, b) && d.push(f);
			return d
		});
		return ec[a.V] = b
	}
	function h(a) {
		a = a || jb;
		return function(b, e, d) {
			for (var f = 0, g = b[P]; b = g[f++];) K(b) && ((!d || c(b, d)) && a(b, f)) && e.push(b);
			return e
		}
	}
	function g(a) {
		return function(b, e, d) {
			for (b = b[ka]; b;) {
				if (K(b)) {
					if (d && !c(b, d)) break;
					a(b) && e.push(b)
				}
				b = b[ka]
			}
			return e
		}
	}
	function k(a) {
		return function(b, e, d) {
			for (; b = b[ka];) if (!ua || G(b)) {
				(!d || c(b, d)) && a(b) && e.push(b);
				break
			}
			return e
		}
	}
	function m(a, b) {
		if (!a) return jb;
		b = b || {};
		var c = r;
		b.T || (c = v(c, G));
		b.q || "*" != a.q && (c = v(c, function(b) {
			return b && b.tagName == a.Ba()
		}));
		b.J || oa(a.J, function(a, b) {
			var e = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
			c = v(c, function(a) {
				return e.test(a.className)
			});
			c.count = b
		});
		b.P || oa(a.P, function(a) {
			var b = a.name;
			wb[b] && (c = v(c, wb[b](b, a.value)))
		});
		b.ia || oa(a.ia, function(a) {
			var b, e = a.xa;
			a.type && la[a.type] ? b = la[a.type](e, a.Da) : e.length && (b = Sc(e));
			b && (c = v(c, b))
		});
		b.id || a.id && (c = v(c, function(b) {
			return !!b && b.id == a.id
		}));
		c || "default" in b || (c = jb);
		return c
	}
	function n(a) {
		return x(a) % 2
	}
	function p(a) {
		return !(x(a) % 2)
	}
	function x(a) {
		var b = a.parentNode,
			c = 0,
			e = b[P],
			d = a._i || -1,
			f = b._l || -1;
		if (!e) return -1;
		e = e.length;
		if (f == e && 0 <= d && 0 <= f) return d;
		b._l = e;
		d = -1;
		for (b = b.firstElementChild || b.firstChild; b; b = b[ka]) K(b) && (b._i = ++c, a === b && (d = c));
		return d
	}
	function y(a) {
		for (; a = a[ka];) if (K(a)) return s;
		return q
	}
	function B(a) {
		for (; a = a[xb];) if (K(a)) return s;
		return q
	}
	function C(a, b) {
		return !a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (R ? a.getAttribute(b) : a.getAttribute(b,
		2)) || ""
	}
	function G(a) {
		return 1 == a.nodeType
	}
	function v(a, b) {
		return !a ? b : !b ? a : function() {
			return a.apply(window, arguments) && b.apply(window, arguments)
		}
	}
	function z(a) {
		function b() {
			0 <= C && (u.id = c(C, v).replace(/\\/g, ""), C = -1);
			if (0 <= x) {
				var a = x == v ? r : c(x, v);
				0 > ">~+".indexOf(a) ? u.q = a : u.qa = a;
				x = -1
			}
			0 <= m && (u.J.push(c(m + 1, v).replace(/\\/g, "")), m = -1)
		}
		function c(b, e) {
			return ma(a.slice(b, e))
		}
		a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
		for (var e = [], d = -1, f = -1, g = -1, h = -1, m = -1, C = -1, x = -1, y = "", n = "", B, v = 0, k = a.length, u = r, p = r; y = n, n = a.charAt(v), v < k; v++) if ("\\" != y) if (u || (B = v, u = {
			V: r,
			P: [],
			ia: [],
			J: [],
			q: r,
			qa: r,
			id: r,
			Ba: function() {
				return R ? this.yb : this.q
			}
		}, x = v), 0 <= d) if ("]" == n) {
			p.xa ? p.Da = c(g || d + 1, v) : p.xa = c(d + 1, v);
			if ((d = p.Da) && ('"' == d.charAt(0) || "'" == d.charAt(0))) p.Da = d.slice(1, -1);
			u.ia.push(p);
			p = r;
			d = g = -1
		} else "=" == n && (g = 0 <= "|~^$*".indexOf(y) ? y : "", p.type = g + n, p.xa = c(d + 1, v - g.length), g = v + 1);
		else 0 <= f ? ")" == n && (0 <= h && (p.value = c(f + 1, v)), h = f = -1) : "#" == n ? (b(), C = v + 1) : "." == n ? (b(), m = v) : ":" == n ? (b(), h = v) : "[" == n ? (b(), d = v, p = {}) : "(" == n ? (0 <= h && (p = {
			name: c(h + 1, v),
			value: r
		}, u.P.push(p)), f = v) : " " == n && y != n && (b(), 0 <= h && u.P.push({
			name: c(h + 1, v)
		}), u.Va = u.P.length || u.ia.length || u.J.length, u.Zb = u.V = c(B, v), u.yb = u.q = u.qa ? r : u.q || "*", u.q && (u.q = u.q.toUpperCase()), e.length && e[e.length - 1].qa && (u.Sa = e.pop(), u.V = u.Sa.V + " " + u.V), e.push(u), u = r);
		return e
	}
	function H(a, b) {
		var c = b || [];
		a && c.push(a);
		return c
	}
	var u = L && "BackCompat" == document.compatMode,
		P = document.firstChild.children ? "children" : "childNodes",
		R = s,
		la = {
			"*=": function(a, b) {
				return function(c) {
					return 0 <= C(c, a).indexOf(b)
				}
			},
			"^=": function(a, b) {
				return function(c) {
					return 0 == C(c, a).indexOf(b)
				}
			},
			"$=": function(a, b) {
				return function(c) {
					c = " " + C(c, a);
					return c.lastIndexOf(b) == c.length - b.length
				}
			},
			"~=": function(a, b) {
				var c = " " + b + " ";
				return function(b) {
					return 0 <= (" " + C(b, a) + " ").indexOf(c)
				}
			},
			"|=": function(a, b) {
				b = " " + b;
				return function(c) {
					c = " " + C(c, a);
					return c == b || 0 == c.indexOf(b + "-")
				}
			},
			"=": function(a, b) {
				return function(c) {
					return C(c, a) == b
				}
			}
		}, ua = "undefined" == typeof document.firstChild.nextElementSibling,
		ka = !ua ? "nextElementSibling" : "nextSibling",
		xb = !ua ? "previousElementSibling" : "previousSibling",
		K = ua ? G : jb,
		wb = {
			checked: function() {
				return function(a) {
					return a.checked || a.attributes.checked
				}
			},
			"first-child": function() {
				return B
			},
			"last-child": function() {
				return y
			},
			"only-child": function() {
				return function(a) {
					return !B(a) || !y(a) ? s : q
				}
			},
			empty: function() {
				return function(a) {
					var b = a.childNodes;
					for (a = a.childNodes.length - 1; 0 <= a; a--) {
						var c = b[a].nodeType;
						if (1 === c || 3 == c) return s
					}
					return q
				}
			},
			contains: function(a, b) {
				var c = b.charAt(0);
				if ('"' == c || "'" == c) b = b.slice(1, -1);
				return function(a) {
					return 0 <= a.innerHTML.indexOf(b)
				}
			},
			not: function(a, b) {
				var c = z(b)[0],
					e = {
						T: 1
					};
				"*" != c.q && (e.q = 1);
				c.J.length || (e.J = 1);
				var d = m(c, e);
				return function(a) {
					return !d(a)
				}
			},
			"nth-child": function(a, b) {
				if ("odd" == b) return n;
				if ("even" == b) return p;
				if (-1 != b.indexOf("n")) {
					var c = b.split("n", 2),
						e = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1,
						d = c[1] ? parseInt(c[1], 10) : 0,
						f = 0,
						g = -1;
					0 < e ? 0 > d ? d = d % e && e + d % e : 0 < d && (d >= e && (f = d - d % e), d %= e) : 0 > e && (e *= -1, 0 < d && (g = d, d %= e));
					if (0 < e) return function(a) {
						a = x(a);
						return a >= f && (0 > g || a <= g) && a % e == d
					};
					b = d
				}
				var h = parseInt(b, 10);
				return function(a) {
					return x(a) == h
				}
			}
		}, Sc = J ? function(a) {
			var b = a.toLowerCase();
			"class" == b && (a = "className");
			return function(c) {
				return R ? c.getAttribute(a) : c[a] || c[b]
			}
		} : function(a) {
			return function(b) {
				return b && b.getAttribute && b.hasAttribute(a)
			}
		}, ec = {}, dc = {}, cc = {}, bc = !! document.querySelectorAll && (!L || M("526")),
		ha = 0,
		Rc = J ? function(a) {
			return R ? a.getAttribute("_uid") || a.setAttribute("_uid", ++ha) || ha : a.uniqueID
		} : function(a) {
			return a._uid || (a._uid = ++ha)
		};
	a.P = wb;
	return a
}();
F("goog.dom.query", kb);
F("goog.dom.query.pseudos", kb.P);
var lb = !J || J && 9 <= Na,
	mb = J && !M("9");
!L || M("528");
Ba && M("1.9b") || J && M("8") || Aa && M("9.5") || L && M("528");
Ba && !M("8") || J && M("9");

function nb() {
	0 != ob && (this.Ib = Error().stack, ca(this))
}
var ob = 0;

function pb(a, b) {
	this.type = a;
	this.currentTarget = this.target = b
}
pb.prototype.U = s;
pb.prototype.defaultPrevented = s;
pb.prototype.ra = q;
pb.prototype.preventDefault = function() {
	this.defaultPrevented = q;
	this.ra = s
};
var qb = "keydown";

function rb(a) {
	rb[" "](a);
	return a
}
rb[" "] = aa;

function sb(a, b) {
	a && this.K(a, b)
}
ja(sb, pb);
t = sb.prototype;
t.target = r;
t.relatedTarget = r;
t.offsetX = 0;
t.offsetY = 0;
t.clientX = 0;
t.clientY = 0;
t.screenX = 0;
t.screenY = 0;
t.button = 0;
t.keyCode = 0;
t.charCode = 0;
t.ctrlKey = s;
t.altKey = s;
t.shiftKey = s;
t.metaKey = s;
t.zb = s;
t.Ra = r;
t.K = function(a, b) {
	var c = this.type = a.type;
	pb.call(this, c);
	this.target = a.target || a.srcElement;
	this.currentTarget = b;
	var e = a.relatedTarget;
	if (e) {
		if (Ba) {
			var d;
			a: {
				try {
					rb(e.nodeName);
					d = q;
					break a
				} catch (f) {}
				d = s
			}
			d || (e = r)
		}
	} else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
	this.relatedTarget = e;
	this.offsetX = L || a.offsetX !== l ? a.offsetX : a.layerX;
	this.offsetY = L || a.offsetY !== l ? a.offsetY : a.layerY;
	this.clientX = a.clientX !== l ? a.clientX : a.pageX;
	this.clientY = a.clientY !== l ? a.clientY : a.pageY;
	this.screenX = a.screenX || 0;
	this.screenY = a.screenY || 0;
	this.button = a.button;
	this.keyCode = a.keyCode || 0;
	this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
	this.ctrlKey = a.ctrlKey;
	this.altKey = a.altKey;
	this.shiftKey = a.shiftKey;
	this.metaKey = a.metaKey;
	this.zb = Da ? a.metaKey : a.ctrlKey;
	this.state = a.state;
	this.Ra = a;
	a.defaultPrevented && this.preventDefault();
	delete this.U
};
t.preventDefault = function() {
	sb.Cb.preventDefault.call(this);
	var a = this.Ra;
	if (a.preventDefault) a.preventDefault();
	else if (a.returnValue = s, mb) try {
		if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
	} catch (b) {}
};
var tb = 0;

function ub() {}
t = ub.prototype;
t.key = 0;
t.Q = s;
t.ka = s;
t.K = function(a, b, c, e, d, f) {
	if (E(a)) this.Ta = q;
	else if (a && a.handleEvent && E(a.handleEvent)) this.Ta = s;
	else throw Error("Invalid listener argument");
	this.M = a;
	this.$a = b;
	this.src = c;
	this.type = e;
	this.capture = !! d;
	this.Ca = f;
	this.ka = s;
	this.key = ++tb;
	this.Q = s
};
t.handleEvent = function(a) {
	return this.Ta ? this.M.call(this.Ca || this.src, a) : this.M.handleEvent.call(this.M, a)
};
var vb = {}, S = {}, yb = {}, zb = {};

function T(a, b, c, e, d) {
	if ("array" == ba(b)) {
		for (var f = 0; f < b.length; f++) T(a, b[f], c, e, d);
		return r
	}
	a = Ab(a, b, c, s, e, d);
	b = a.key;
	vb[b] = a;
	return b
}

function Ab(a, b, c, e, d, f) {
	if (!b) throw Error("Invalid event type");
	d = !! d;
	var h = S;
	b in h || (h[b] = {
		z: 0,
		p: 0
	});
	h = h[b];
	d in h || (h[d] = {
		z: 0,
		p: 0
	}, h.z++);
	var h = h[d],
		g = ca(a),
		k;
	h.p++;
	if (h[g]) {
		k = h[g];
		for (var m = 0; m < k.length; m++) if (h = k[m], h.M == c && h.Ca == f) {
			if (h.Q) break;
			e || (k[m].ka = s);
			return k[m]
		}
	} else k = h[g] = [], h.z++;
	m = Bb();
	h = new ub;
	h.K(c, m, a, b, d, f);
	h.ka = e;
	m.src = a;
	m.M = h;
	k.push(h);
	yb[g] || (yb[g] = []);
	yb[g].push(h);
	a.addEventListener ? (a == w || !a.Qa) && a.addEventListener(b, m, d) : a.attachEvent(b in zb ? zb[b] : zb[b] = "on" + b, m);
	return h
}
function Bb() {
	var a = Cb,
		b = lb ? function(c) {
			return a.call(b.src, b.M, c)
		} : function(c) {
			c = a.call(b.src, b.M, c);
			if (!c) return c
		};
	return b
}
function Db(a, b, c, e, d) {
	if ("array" == ba(b)) for (var f = 0; f < b.length; f++) Db(a, b[f], c, e, d);
	else a = Ab(a, b, c, q, e, d), vb[a.key] = a
}

function Eb(a, b, c, e, d) {
	if ("array" == ba(b)) for (var f = 0; f < b.length; f++) Eb(a, b[f], c, e, d);
	else {
		e = !! e;
		a: {
			f = S;
			if (b in f && (f = f[b], e in f && (f = f[e], a = ca(a), f[a]))) {
				a = f[a];
				break a
			}
			a = r
		}
		if (a) for (f = 0; f < a.length; f++) if (a[f].M == c && a[f].capture == e && a[f].Ca == d) {
			Fb(a[f].key);
			break
		}
	}
}

function Fb(a) {
	var b = vb[a];
	if (b && !b.Q) {
		var c = b.src,
			e = b.type,
			d = b.$a,
			f = b.capture;
		c.removeEventListener ? (c == w || !c.Qa) && c.removeEventListener(e, d, f) : c.detachEvent && c.detachEvent(e in zb ? zb[e] : zb[e] = "on" + e, d);
		c = ca(c);
		if (yb[c]) {
			var d = yb[c],
				h = na(d, b);
			0 <= h && I.splice.call(d, h, 1);
			0 == d.length && delete yb[c]
		}
		b.Q = q;
		if (b = S[e][f][c]) b.Wa = q, Gb(e, f, c, b);
		delete vb[a]
	}
}

function Gb(a, b, c, e) {
	if (!e.oa && e.Wa) {
		for (var d = 0, f = 0; d < e.length; d++) e[d].Q ? e[d].$a.src = r : (d != f && (e[f] = e[d]), f++);
		e.length = f;
		e.Wa = s;
		0 == f && (delete S[a][b][c], S[a][b].z--, 0 == S[a][b].z && (delete S[a][b], S[a].z--), 0 == S[a].z && delete S[a])
	}
}
function Hb(a, b, c, e, d) {
	var f = 1;
	b = ca(b);
	if (a[b]) {
		var h = --a.p,
			g = a[b];
		g.oa ? g.oa++ : g.oa = 1;
		try {
			for (var k = g.length, m = 0; m < k; m++) {
				var n = g[m];
				n && !n.Q && (f &= Ib(n, d) !== s)
			}
		} finally {
			a.p = Math.max(h, a.p), g.oa--, Gb(c, e, b, g)
		}
	}
	return Boolean(f)
}

function Ib(a, b) {
	a.ka && Fb(a.key);
	return a.handleEvent(b)
}

function Cb(a, b) {
	if (a.Q) return q;
	var c = a.type,
		e = S;
	if (!(c in e)) return q;
	var e = e[c],
		d, f;
	if (!lb) {
		var h;
		if (!(h = b)) a: {
			h = ["window", "event"];
			for (var g = w; d = h.shift();) if (g[d] != r) g = g[d];
			else {
				h = r;
				break a
			}
			h = g
		}
		d = h;
		h = q in e;
		g = s in e;
		if (h) {
			if (0 > d.keyCode || d.returnValue != l) return q;
			a: {
				var k = s;
				if (0 == d.keyCode) try {
					d.keyCode = -1;
					break a
				} catch (m) {
					k = q
				}
				if (k || d.returnValue == l) d.returnValue = q
			}
		}
		k = new sb;
		k.K(d, this);
		d = q;
		try {
			if (h) {
				for (var n = [], p = k.currentTarget; p; p = p.parentNode) n.push(p);
				f = e[q];
				f.p = f.z;
				for (var x = n.length - 1; !k.U && 0 <= x && f.p; x--) k.currentTarget = n[x], d &= Hb(f, n[x], c, q, k);
				if (g) {
					f = e[s];
					f.p = f.z;
					for (x = 0; !k.U && x < n.length && f.p; x++) k.currentTarget = n[x], d &= Hb(f, n[x], c, s, k)
				}
			} else d = Ib(a, k)
		} finally {
			n && (n.length = 0)
		}
		return d
	}
	c = new sb(b, this);
	return d = Ib(a, c)
};

function Jb() {
	nb.call(this)
}
ja(Jb, nb);
t = Jb.prototype;
t.Qa = q;
t.Za = r;
t.addEventListener = function(a, b, c, e) {
	T(this, a, b, c, e)
};
t.removeEventListener = function(a, b, c, e) {
	Eb(this, a, b, c, e)
};
t.dispatchEvent = function(a) {
	var b = a.type || a,
		c = S;
	if (b in c) {
		if (D(a)) a = new pb(a, this);
		else if (a instanceof pb) a.target = a.target || this;
		else {
			var e = a;
			a = new pb(b, this);
			Va(a, e)
		}
		var e = 1,
			d, c = c[b],
			b = q in c,
			f;
		if (b) {
			d = [];
			for (f = this; f; f = f.Za) d.push(f);
			f = c[q];
			f.p = f.z;
			for (var h = d.length - 1; !a.U && 0 <= h && f.p; h--) a.currentTarget = d[h], e &= Hb(f, d[h], a.type, q, a) && a.ra != s
		}
		if (s in c) if (f = c[s], f.p = f.z, b) for (h = 0; !a.U && h < d.length && f.p; h++) a.currentTarget = d[h], e &= Hb(f, d[h], a.type, s, a) && a.ra != s;
		else for (d = this; !a.U && d && f.p; d = d.Za) a.currentTarget = d, e &= Hb(f, d, a.type, s, a) && a.ra != s;
		a = Boolean(e)
	} else a = q;
	return a
};

function Kb(a, b, c) {
	nb.call(this);
	this.ub = a;
	this.pb = b;
	this.ob = c;
	this.fb = ia(this.xb, this)
}
ja(Kb, nb);
t = Kb.prototype;
t.ta = s;
t.Fa = 0;
t.Y = r;

function Lb(a) {
	!a.Y && !a.Fa ? Mb(a) : a.ta = q
}
t.stop = function() {
	this.Y && (w.clearTimeout(this.Y), this.Y = r, this.ta = s)
};
t.pause = function() {
	this.Fa++
};
t.xb = function() {
	this.Y = r;
	this.ta && !this.Fa && (this.ta = s, Mb(this))
};

function Mb(a) {
	var b;
	b = a.fb;
	var c = a.pb;
	if (!E(b)) if (b && "function" == typeof b.handleEvent) b = ia(b.handleEvent, b);
	else throw Error("Invalid listener argument");
	b = 2147483647 < c ? -1 : w.setTimeout(b, c || 0);
	a.Y = b;
	a.ub.call(a.ob)
};
var Nb = 27;

function Ob(a) {
	var b;
	a: {
		b = Ya(a);
		if (b.defaultView && b.defaultView.getComputedStyle && (b = b.defaultView.getComputedStyle(a, r))) {
			b = b.position || b.getPropertyValue("position") || "";
			break a
		}
		b = ""
	}
	return b || (a.currentStyle ? a.currentStyle.position : r) || a.style && a.style.position
}

function Pb(a) {
	if (J && !(J && 8 <= Na)) return a.offsetParent;
	var b = Ya(a),
		c = Ob(a),
		e = "fixed" == c || "absolute" == c;
	for (a = a.parentNode; a && a != b; a = a.parentNode) if (c = Ob(a), e = e && "static" == c && a != b.documentElement && a != b.body, !e && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
	return r
}

function Qb() {
	var a = Q("uth_app"),
		b, c = Ya(a),
		e = Ob(a),
		d = Ba && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
		f = new Ra(0, 0),
		h;
	b = c ? Ya(c) : document;
	if (h = J) if (h = !(J && 9 <= Na)) h = "CSS1Compat" != Wa(b).la.compatMode;
	h = h ? b.body : b.documentElement;
	if (a != h) if (a.getBoundingClientRect) b = a.getBoundingClientRect(), J && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), a = Wa(c).la, c = !L &&
		"CSS1Compat" == a.compatMode ? a.documentElement : a.body, a = a.parentWindow || a.defaultView, c = new Ra(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop), f.x = b.left + c.x, f.y = b.top + c.y;
	else if (c.getBoxObjectFor && !d) b = c.getBoxObjectFor(a), c = c.getBoxObjectFor(h), f.x = b.screenX - c.screenX, f.y = b.screenY - c.screenY;
	else {
		b = a;
		do {
			f.x += b.offsetLeft;
			f.y += b.offsetTop;
			b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
			if (L && "fixed" == Ob(b)) {
				f.x += c.body.scrollLeft;
				f.y += c.body.scrollTop;
				break
			}
			b = b.offsetParent
		} while (b && b != a);
		if (Aa || L && "absolute" == e) f.y -= c.body.offsetTop;
		for (b = a;
		(b = Pb(b)) && b != c.body && b != h;) if (f.x -= b.scrollLeft, !Aa || "TR" != b.tagName) f.y -= b.scrollTop
	}
	return f.y
};

function Rb(a) {
	nb.call(this);
	this.ua = a || window;
	this.tb = T(this.ua, "resize", this.nb, s, this);
	this.W = db(this.ua || window)
}
ja(Rb, Jb);
Rb.prototype.tb = r;
Rb.prototype.ua = r;
Rb.prototype.W = r;
Rb.prototype.nb = function() {
	var a = db(this.ua || window);
	if (!(a == this.W || (!a || !this.W ? 0 : a.width == this.W.width && a.height == this.W.height))) this.W = a, this.dispatchEvent("resize")
};
var U, Sb, Tb = "midp;240x320;blackberry;netfront;nokia;panasonic;portalmmm;sharp;sie-;sonyericsson;symbian;windows ce;benq;mda;mot-;opera mini;philips;pocket pc;sagem;samsung;sda;sgh-;vodafone;xda;iphone;ipad;android;mobile;tablet".split(";"),
	Ub = ["ipad", "tablet"],
	Vb = s,
	Wb = s,
	Xb = s,
	Yb = !Modernizr.svg,
	Zb = s;
navigatorString = navigator.userAgent.toLowerCase();
for (var $b = 0; $b < Tb.length; $b++) if (-1 != navigatorString.indexOf(Tb[$b])) {
	Vb = q;
	break
}
for ($b = 0; $b < Ub.length; $b++) if (-1 != navigatorString.indexOf(Ub[$b])) {
	Wb = q;
	break
}
var ac = !Vb && !Wb;
navigator.userAgent.match(/(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/) && (Xb = q, ac = s);
var fc;
if (fc = navigator.userAgent.match(/(MSIE) (\d+)\.(\d+)/)) {
	var gc = parseInt(fc[2], 10),
		Zb = q;
	9 == gc ? (Xb = q, ac = s) : 9 > gc && (Yb = q)
}
var hc;
if (hc = navigator.userAgent.match(/(Firefox)\/(\d+)\.(\d+)\.(\d+)/)) {
	var ic = parseInt(hc[2], 10);
	14 > ic && 4 <= ic ? Xb = q : 4 > ic && (Yb = q)
}
var jc;
if ((jc = navigator.userAgent.match(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari/)) && 6 > parseInt(jc[2], 10)) Xb = q, ac = s;
F("ww.detect.isMobile", Vb);
F("ww.detect.isTablet", Wb);
F("ww.detect.isStatic", Xb);
F("ww.detect.isFallback", Yb);
F("ww.detect.isIE", Zb);
F("ww.detect.canSVGAnimate", ac);
(function() {
	for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.CancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
		var c = (new Date).getTime(),
			f = Math.max(0, 16 - (c - a)),
			h = window.setTimeout(function() {
				b(c + f)
			}, f);
		a = c + f;
		return h
	});
	window.CancelAnimationFrame || (window.CancelAnimationFrame = function(a) {
		clearTimeout(a)
	})
})();
var V = function() {
	function a() {}
	a.prototype = {
		c: function(a, b) {
			return 1 > a || a > this.elements.length || 1 > b || b > this.elements[0].length ? r : this.elements[a - 1][b - 1]
		},
		map: function(b) {
			var c = [],
				e = this.elements.length,
				d = e,
				f, g, h = this.elements[0].length,
				m;
			do {
				f = d - e;
				g = h;
				c[f] = [];
				do m = h - g, c[f][m] = b(this.elements[f][m], f + 1, m + 1);
				while (--g)
			} while (--e);
			return a.create(c)
		},
		multiply: function(b) {
			if (!b.elements) return this.map(function(a) {
				return a * b
			});
			var c = b.Vb ? q : s,
				e = b.elements || b;
			"undefined" == typeof e[0][0] && (e = a.create(e).elements);
			if (!this.gb(e)) return r;
			var d = this.elements.length,
				f = d,
				g, h, m = e[0].length,
				x, n = this.elements[0].length,
				y = [],
				B, k, p;
			do {
				g = f - d;
				y[g] = [];
				h = m;
				do {
					x = m - h;
					B = 0;
					k = n;
					do p = n - k, B += this.elements[g][p] * e[p][x];
					while (--k);
					y[g][x] = B
				} while (--h)
			} while (--d);
			e = a.create(y);
			return c ? e.Hb(1) : e
		},
		x: function(a) {
			return this.multiply(a)
		},
		gb: function(b) {
			b = b.elements || b;
			"undefined" == typeof b[0][0] && (b = a.create(b).elements);
			return this.elements[0].length == b.length
		},
		Bb: function(a) {
			var b = a.elements || a;
			if ("undefined" != typeof b[0][0]) {
				var c = b.length,
					e = c,
					d, f, g;
				this.elements = [];
				do {
					a = e - c;
					f = d = b[a].length;
					this.elements[a] = [];
					do g = f - d, this.elements[a][g] = b[a][g];
					while (--d)
				} while (--c);
				return this
			}
			e = c = b.length;
			this.elements = [];
			do a = e - c, this.elements.push([b[a]]);
			while (--c);
			return this
		}
	};
	a.create = function(b) {
		return (new a).Bb(b)
	};
	var b = a.create,
		c = "",
		e, d, f, h, g, k = "T" + "transform".slice(1),
		m = ["Moz", "Webkit", "O", "ms"],
		n = document.createElement("div");
	"MozTransform" in n.style && (c = "px");
	if ("transform" in n.style) d = "transform", f = n.style.perspective !== l,
	h = !f;
	else for (var p = 0; p < m.length; p++) if (e = m[p] + k, e in n.style) {
		d = e;
		m[p] + "Perspective" in n.style ? f = q : h = q;
		break
	}
	d || (g = "filter" in n.style, d = "filter");
	var n = r,
		x = d,
		y = {
			rotateX: {
				defaultValue: 0,
				N: function(a) {
					return f ? b([
						[1, 0, 0, 0],
						[0, Math.cos(a), Math.sin(-a), 0],
						[0, Math.sin(a), Math.cos(a), 0],
						[0, 0, 0, 1]
					]) : b([
						[1, 0, 0],
						[0, 1, 0],
						[0, 0, 1]
					])
				}
			},
			rotateY: {
				defaultValue: 0,
				N: function(a) {
					return f ? b([
						[Math.cos(a), 0, Math.sin(a), 0],
						[0, 1, 0, 0],
						[Math.sin(-a), 0, Math.cos(a), 0],
						[0, 0, 0, 1]
					]) : b([
						[1, 0, 0],
						[0, 1, 0],
						[0, 0, 1]
					])
				}
			},
			rotateZ: {
				defaultValue: 0,
				N: function(a) {
					return f ? b([
						[Math.cos(a), Math.sin(-a), 0, 0],
						[Math.sin(a), Math.cos(a), 0, 0],
						[0, 0, 1, 0],
						[0, 0, 0, 1]
					]) : b([
						[Math.cos(a), Math.sin(-a), 0],
						[Math.sin(a), Math.cos(a), 0],
						[0, 0, 1]
					])
				}
			},
			perspective: {
				defaultValue: 0,
				N: function(a) {
					return f ? b([
						[1, 0, 0, 0],
						[0, 1, 0, 0],
						[0, 0, 1, 0 === a ? 0 : -1 / a],
						[0, 0, 0, 1]
					]) : b([
						[1, 0, 0],
						[0, 1, 0],
						[0, 0, 1]
					])
				}
			},
			scale: {
				defaultValue: 1,
				N: function(a) {
					return f ? b([
						[a, 0, 0, 0],
						[0, a, 0, 0],
						[0, 0, a, 0],
						[0, 0, 0, 1]
					]) : b([
						[a, 0, 0],
						[0, a, 0],
						[0, 0, 1]
					])
				}
			},
			translateX: {
				defaultValue: 0,
				N: function(a) {
					return f ? b([
						[1, 0, 0, 0],
						[0, 1, 0, 0],
						[0, 0, 1, 0],
						[a, 0, 0, 1]
					]) : b([
						[1, 0, 0],
						[0, 1, 0],
						[a, 0, 1]
					])
				}
			},
			translateY: {
				defaultValue: 0,
				N: function(a) {
					return f ? b([
						[1, 0, 0, 0],
						[0, 1, 0, 0],
						[0, 0, 1, 0],
						[0, a, 0, 1]
					]) : b([
						[1, 0, 0],
						[0, 1, 0],
						[0, a, 1]
					])
				}
			},
			translateZ: {
				defaultValue: 0,
				N: function(a) {
					return f ? b([
						[1, 0, 0, 0],
						[0, 1, 0, 0],
						[0, 0, 1, 0],
						[0, 0, a, 1]
					]) : b([
						[1, 0, 0],
						[0, 1, 0],
						[0, 0, 1]
					])
				}
			}
		}, B = {};
	return {
		Qb: function(a, b) {
			var c = B[a.id];
			c === l && (c = {});
			return c[b] || y[b].defaultValue
		},
		k: function(a, e, d) {
			var m = "transform_cache_" + (new Date).getTime() + Math.random();
			a.id = a.id || m;
			m = B[a.id];
			m === l && (m = {});
			var n = y[e];
			m[e] = "function" === typeof n.apply ? n.apply(m[e] || n.defaultValue, d) : d;
			if (!a.id || !a.id.length) throw "Cannot set current transforms for element without id";
			B[a.id] = m;
			e = B[a.id];
			var k;
			d = f ? b([
				[1, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 0, 1, -1],
				[0, 0, 0, 1]
			]) : b([
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1]
			]);
			for (var p in y) y.hasOwnProperty(p) && (d = d.x(y[p].N(e[p] || y[p].defaultValue)));
			f ? (k = "matrix3d(" + (d.c(1, 1).toFixed(10) + "," + d.c(1, 2).toFixed(10) + ","), k += d.c(1, 3).toFixed(10) + "," + d.c(1, 4).toFixed(10) + ",", k += d.c(2, 1).toFixed(10) +
				"," + d.c(2, 2).toFixed(10) + ",", k += d.c(2, 3).toFixed(10) + "," + d.c(2, 4).toFixed(10) + ",", k += d.c(3, 1).toFixed(10) + "," + d.c(3, 2).toFixed(10) + ",", k += d.c(3, 3).toFixed(10) + "," + d.c(3, 4).toFixed(10) + ",", k += d.c(4, 1).toFixed(10) + "," + d.c(4, 2).toFixed(10) + ",", k += d.c(4, 3).toFixed(10) + "," + d.c(4, 4).toFixed(10), k += ")") : h ? (k = "matrix(" + (d.c(1, 1).toFixed(10) + "," + d.c(1, 2).toFixed(10) + ","), k += d.c(2, 1).toFixed(10) + "," + d.c(2, 2).toFixed(10) + ",", k += d.c(3, 1).toFixed(10) + c + ",", k += d.c(3, 2).toFixed(10) + c, k += ")") : g && (k = "progid:DXImageTransform.Microsoft.Matrix(" + ("M11=" + d.c(1, 1).toFixed(10) + ","), k += "M12=" + d.c(1, 2).toFixed(10) + ",", k += "M21=" + d.c(2, 1).toFixed(10) + ",", k += "M22=" + d.c(2, 2).toFixed(10) + ",", k += 'SizingMethod="auto expand"', k += ")", a.style.top = d.c(3, 1), a.style.left = d.c(3, 2));
			a.style[x] = k
		}
	}
}.call(this),
	kc = function() {
		var a = [];
		return {
			Kb: function() {
				return a
			},
			ac: function() {
				a = []
			},
			add: function(b) {
				a.push(b)
			},
			remove: function(b) {
				b = a.indexOf(b); - 1 !== b && a.splice(b, 1)
			},
			update: function(b, c) {
				if (c) for (var e = 0, d = a.length; e < d; e++) a[e].update(b, c);
				else {
					e = 0;
					for (d = a.length; e < d;) a[e].update(b, c) ? e++ : (a.splice(e, 1), d--)
				}
			}
		}
	}();

function lc(a) {
	return a
}
function mc(a) {
	return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
}
function nc(a) {
	return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? 0.5 * Math.pow(1024, a - 1) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)
}
function oc(a) {
	return --a * a * (2.70158 * a + 1.70158) + 1
}
function pc(a) {
	return 1 - qc(1 - a)
}
function qc(a) {
	return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
}
F("EASING.LIN", lc);
F("EASING.QUADRATIC.IN", function(a) {
	return a * a
});
F("EASING.QUADRATIC.OUT", function(a) {
	return a * (2 - a)
});
F("EASING.QUADRATIC.INOUT", function(a) {
	return 1 > (a *= 2) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
});
F("EASING.CUBIC.IN", function(a) {
	return a * a * a
});
F("EASING.CUBIC.OUT", function(a) {
	return --a * a * a + 1
});
F("EASING.CUBIC.INOUT", function(a) {
	return 1 > (a *= 2) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
});
F("EASING.QUARTIC.IN", function(a) {
	return a * a * a * a
});
F("EASING.QUARTIC.OUT", function(a) {
	--a;
	return 1 - a * a * a * a
});
F("EASING.QUARTIC.INOUT", function(a) {
	return 1 > (a *= 2) ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
});
F("EASING.QUINTIC.IN", function(a) {
	return a * a * a * a * a
});
F("EASING.QUINTIC.OUT", function(a) {
	return --a * a * a * a * a + 1
});
F("EASING.QUINTIC.INOUT", function(a) {
	return 1 > (a *= 2) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
});
F("EASING.SINUSOIDAL.IN", function(a) {
	return 1 - Math.cos(a * Math.PI / 2)
});
F("EASING.SINUSOIDAL.OUT", function(a) {
	return Math.sin(a * Math.PI / 2)
});
F("EASING.SINUSOIDAL.INOUT", function(a) {
	return 0.5 * (1 - Math.cos(Math.PI * a))
});
F("EASING.EXPONENTIAL.IN", function(a) {
	return 0 === a ? 0 : Math.pow(1024, a - 1)
});
F("EASING.EXPONENTIAL.OUT", mc);
F("EASING.EXPONENTIAL.INOUT", nc);
F("EASING.CIRCULAR.IN", function(a) {
	return 1 - Math.sqrt(1 - a * a)
});
F("EASING.CIRCULAR.OUT", function(a) {
	--a;
	return Math.sqrt(1 - a * a)
});
F("EASING.CIRCULAR.INOUT", function(a) {
	return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
});
F("EASING.BACK.IN", function(a) {
	return a * a * (2.70158 * a - 1.70158)
});
F("EASING.BACK.OUT", oc);
F("EASING.BACK.INOUT", function(a) {
	return 1 > (a *= 2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
});
F("EASING.DOUBLEBACK.IN", function(a) {
	return a * a * (4.40316 * a - 3.40316)
});
F("EASING.DOUBLEBACK.OUT", function(a) {
	return --a * a * (4.40316 * a + 3.40316) + 1
});
F("EASING.DOUBLEBACK.INOUT", function(a) {
	return 1 > (a *= 2) ? 0.5 * a * a * (6.189819 * a - 5.189819) : 0.5 * ((a -= 2) * a * (6.189819 * a + 5.189819) + 2)
});
F("EASING.ELASTIC.IN", function(a) {
	var b, c = 0.1;
	if (0 === a) return 0;
	if (1 === a) return 1;
	!c || 1 > c ? (c = 1, b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI);
	return -(c * Math.pow(2, 10 * (a - 1)) * Math.sin((a - b) * 2 * Math.PI / 0.4))
});
F("EASING.ELASTIC.OUT", function(a) {
	var b, c = 0.1;
	if (0 === a) return 0;
	if (1 === a) return 1;
	!c || 1 > c ? (c = 1, b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI);
	return c * Math.pow(2, -10 * a) * Math.sin((a - b) * 2 * Math.PI / 0.4) + 1
});
F("EASING.ELASTIC.INOUT", function(a) {
	var b, c = 0.1;
	if (0 === a) return 0;
	if (1 === a) return 1;
	!c || 1 > c ? (c = 1, b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI);
	b = Math.sin((a - b) * 2 * Math.PI / 0.4);
	return 1 > (a *= 2) ? -0.5 * c * Math.pow(2, 10 * (a - 1)) * b : 0.5 * c * Math.pow(2, -10 * (a - 1)) * b + 1
});
F("EASING.BOUNCE.IN", pc);
F("EASING.BOUNCE.OUT", qc);
F("EASING.BOUNCE.INOUT", function(a) {
	return 0.5 > a ? 0.5 * pc(2 * a) : 0.5 * qc(2 * a - 1) + 0.5
});

function W(a) {
	var b = a,
		c = {}, e = {}, d = 1E3,
		f = 0,
		h = r,
		g = lc,
		k = "EASING.LIN",
		m = r,
		n = r;
	this.S = q;
	this.Wb = function() {
		this.S = s;
		return this
	};
	var p;
	this.Db = function(a) {
		p = {};
		p.kb = b;
		p.Eb = e;
		p.duration = d;
		p.D = f;
		p.s = k;
		a || (p.S = this.S);
		return p
	};
	this.Jb = function(a) {
		e = a.Eb;
		d = a.duration;
		f = a.D;
		k = a.s;
		this.S = A(a.S) ? a.S : q;
		this.reset(a.kb)
	};
	this.C = function(a, b) {
		b !== r && (d = b);
		e = a;
		return this
	};
	this.reset = function(a) {
		if (a) {
			b = a;
			c = {};
			for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d])
		} else for (var f in e) e.hasOwnProperty(f) && (b[f] = c[f] || b[f]);
		this.update(0, q)
	};
	this.start = function(a, d) {
		d || kc.add(this);
		h = a !== l ? a : X();
		h += f;
		for (var g in e) if (e.hasOwnProperty(g) && b[g] !== r && b[g] !== r) {
			if (e[g] instanceof Array) {
				if (0 === e[g].length) continue;
				e[g] = [b[g]].concat(e[g])
			}
			c[g] = b[g]
		}
		return this
	};
	this.mb = function() {
		return {
			start: f,
			duration: d,
			end: f + d
		}
	};
	this.stop = function() {
		kc.remove(this);
		return this
	};
	this.D = function(a) {
		f = a;
		return this
	};
	this.s = function(a) {
		D(a) ? (k = a, g = rc(k)) : (k = "unknown", g = a);
		return this
	};
	this.B = function(a) {
		m = a;
		return this
	};
	this.L = function(a) {
		n = a;
		return this
	};
	this.update = function(a, f) {
		if (!f && a < h) return q;
		var k = (a - h) / d,
			k = 1 < k ? 1 : k,
			p = g(k);
		f && a < h && (p = 0);
		for (var G in c) if (c.hasOwnProperty(G)) {
			var v = c[G],
				z = e[G];
			if (z instanceof Array) var v = z.length - 1,
				H = v * p,
				u = Math.floor(H),
				z = 0 > p ? (z[1] - z[0]) * H + z[0] : 1 < p ? (z[v - 1] - z[v]) * (v - H) + z[v] : (z[u + 1 > v ? v : u + 1] - z[u]) * (H - u) + z[u];
			else z = v + (z - v) * p;
			b[G] = z
		}
		m !== r && m.call(b, k);
		return 1 == k ? (n !== r && n.call(b), s) : q
	}
}
function sc(a, b, c) {
	this.x = a || 0;
	this.y = b || 0;
	this.f = c || 0
}
sc.prototype = {
	constructor: sc,
	copy: function(a) {
		this.x = a.x;
		this.y = a.y;
		this.f = a.f;
		return this
	},
	add: function(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.f = a.f + b.f;
		return this
	},
	sub: function(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.f = a.f - b.f;
		return this
	},
	multiply: function(a, b) {
		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.f = a.f * b.f;
		return this
	},
	length: function() {
		return Math.sqrt(tc(this))
	},
	$: function() {
		return new sc(this.x, this.y, this.f)
	}
};

function tc(a) {
	return a.x * a.x + a.y * a.y + a.f * a.f
}

function uc(a) {
	function b(a, b, c, d, e, f, g) {
		a = 0.5 * (c - a);
		d = 0.5 * (d - b);
		return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
	}
	this.d = a;
	var c = [],
		e = {
			x: 0,
			y: 0,
			f: 0
		}, d, f, h, g, k, m, n, p, x;
	this.Rb = function(a) {
		this.d = [];
		for (var b = 0; b < a.length; b++) this.d[b] = {
			x: a[b][0],
			y: a[b][1],
			f: a[b][2]
		}
	};
	this.Aa = function(a) {
		d = (this.d.length - 1) * a;
		f = Math.floor(d);
		h = d - f;
		c[0] = 0 === f ? f : f - 1;
		c[1] = f;
		c[2] = f > this.d.length - 2 ? this.d.length - 1 : f + 1;
		c[3] = f > this.d.length - 3 ? this.d.length - 1 : f + 2;
		m = this.d[c[0]];
		n = this.d[c[1]];
		p = this.d[c[2]];
		x = this.d[c[3]];
		g = h * h;
		k = h * g;
		e.x = b(m.x, n.x, p.x, x.x, h, g, k);
		e.y = b(m.y, n.y, p.y, x.y, h, g, k);
		e.f = b(m.f, n.f, p.f, x.f, h, g, k);
		return e
	};
	this.Mb = function() {
		var a, b, c = this.d.length,
			d = [];
		for (a = 0; a < c; a++) b = this.d[a], d[a] = [b.x, b.y, b.f];
		return d
	};
	this.lb = function() {
		var a, b, c, d, e = b = b = 0,
			f = new sc,
			g = new sc,
			h = [],
			m = 0;
		h[0] = 0;
		a || (a = 100);
		c = this.d.length * a;
		f.copy(this.d[0]);
		for (a = 1; a < c; a++) b = a / c, d = this.Aa(b), g.copy(d), m += Math.sqrt(tc((new sc).sub(g, f))), f.copy(d), b *= this.d.length - 1, b = Math.floor(b), b != e && (h[b] = m, e = b);
		h[h.length] = m;
		return {
			Na: h,
			total: m
		}
	};
	this.bc = function(a) {
		var b, c, d, e, f, g, h = [],
			m = new sc,
			k = this.lb();
		h.push(m.copy(this.d[0]).$());
		for (b = 1; b < this.d.length; b++) {
			c = k.Na[b] - k.Na[b - 1];
			g = Math.ceil(a * c / k.total);
			e = (b - 1) / (this.d.length - 1);
			f = b / (this.d.length - 1);
			for (c = 1; c < g - 1; c++) d = e + c * (1 / g) * (f - e), d = this.Aa(d), h.push(m.copy(d).$());
			h.push(m.copy(this.d[b]).$())
		}
		this.d = h
	}
}

function vc(a) {
	var b = ["char", ""],
		c = b[1],
		e = "",
		d = 0,
		f, h, g;
	f = a.childNodes;
	for (var k = 0, m = f.length; k < m; k++) if (3 === f[k].nodeType && "line" === b[0]) d++, g = d % 2, e += ['<span class="', b[0] + d, 0 !== g ? " even" : " odd", '">', f[k].nodeValue, "</span>", c].join("");
	else if (3 === f[k].nodeType && "line" !== b[0]) {
		h = f[k].data.split(c);
		for (var n = 0, p = h.length; n < p; n++) d++, g = d % 2, e += ['<span class="', b[0] + d, 0 !== g ? " even" : " odd", '">', h[n], "</span>", c].join("")
	}
	a.innerHTML = e
}
var wc = Math.PI / 180;

function rc(a, b) {
	b = b || window;
	var c;
	if (c = "array" != ba(a)) c = typeof a, c = "object" == c && a != r || "function" == c;
	if (c) return a;
	D(a) && (a = a.split("."));
	if (1 === a.length) return b[a];
	c = a.shift();
	return rc(a, b[c])
}
function Y(a, b, c) {
	var e, d;
	Modernizr.touch ? (e = "touchstart", d = "touchend") : (e = "mousedown", d = "mouseup");
	c && T(a, "click", function(a) {
		a.preventDefault()
	});
	return T(a, e, function(c) {
		if (Modernizr.touch || 0 === c.button) {
			var e = T(a, d, function(c) {
				Fb(e);
				b(c, a)
			}, q);
			Db(document, d, function() {
				Fb(e)
			}, s)
		}
	}, q)
}

function X() {
	return window.performance && window.performance.now ? window.performance.now() : +new Date
}
function Z(a, b) {
	var c = ca(this);
	Z.guids = Z.guids || [];
	Z.guids.push(c);
	Z[c] = this;
	hb(a, "ww.PausedSVG." + c);
	this.za = s;
	this.ca = new swiffy.Stage(a, b);
	this.play();
	ac || this.ca.setFlashVars("disable_hover=true")
}
Z.prototype.play = function() {
	this.ca.start()
};
Z.prototype.pause = function() {
	this.ca.bg.ye = s
};
Z.prototype.loop = function() {
	ac && this.ca.setFlashVars("loop=true")
};
Z.prototype.setPosition = function(a) {
	!this.za && 0 < a && 1 > a ? (ac && this.ca.setFlashVars("playonce=true"), this.za = q) : this.za = s
};
F("ww.PausedSVG", Z);

function xc(a, b) {
	Z.call(this, a, b);
	var c = this,
		e = setInterval(function() {
			0 < kb("svg", a).length && (clearInterval(e), setTimeout(function() {
				c.play();
				setTimeout(function() {
					c.pause()
				}, 16)
			}, 400))
		}, 200);
	T(a, "mouseover", function() {
		c.play()
	});
	T(a, "mouseout", function() {
		c.pause()
	})
}
ja(xc, Z);
F("ww.HoverableSVG", xc);

function yc(a) {
	function b() {
		for (var a = 0, b = U.length; a < b; a++) if (U[a].r && U[a].r.qb()) return q;
		return s
	}
	function c(a) {
		function b(a) {
			a || (a = X());
			c.update(a);
			c.i || requestAnimationFrame(b)
		}
		var c = (new W({
			scrollTop: document.documentElement.scrollTop || document.body.scrollTop
		})).C({
			scrollTop: a
		}, 600).s(nc).B(function() {
			document.documentElement.scrollTop = this.scrollTop;
			document.body.scrollTop = this.scrollTop
		}).L(function() {
			c.i = q
		});
		c.start();
		requestAnimationFrame(b)
	}
	function e() {
		var a;
		a = m;
		for (var b, c = a.H.length - 1; 0 <= c; c--) {
			var d = a.H[c];
			b ? d.o(d) : a.ma >= d.e && (b = d, a.vb = c + 1, a.A = a.H[a.vb])
		}
		if ((a = b) && m.Pa !== a) m.Pa = a, a.n(a)
	}
	this.H = [];
	for (var d = 0; d < a.length; d++) for (var f = a[d], h = 0; h < f.length; h++) {
		var g = f[h];
		g.h = (g.h || g.e) + Sb;
		g.e += Sb;
		g.g += Sb;
		g.$b = g.g - g.e;
		this.H.push(g)
	}
	this.ma = -1;
	this.Pa = r;
	this.A = this.H[0];
	var k = Q("down_arrow"),
		m = this,
		n = q;
	setInterval(function() {
		if (!m.A || !n && b()) O(k, "visible"), n = q;
		else if (!b()) {
			var a = document.documentElement.scrollTop,
				a = a || document.body.scrollTop,
				c = a + db(window || window).height;
			m.A && m.A.e >= a && m.A.g <= c ? (m.ma = m.A.e, e()) : n && (m.A !== m.H[0] && m.A !== m.H[m.H.length - 1]) && (N(k, "visible"), n = s)
		}
	}, 250);
	T(k, "click", function() {
		O(k, "visible");
		m.A && c(m.A.h || m.A.e)
	});
	T(Q("spinner"), "click", function() {
		c(m.H[0].h || m.H[0].e)
	});
	var p = new Kb(function() {
		var a = document.documentElement.scrollTop || document.body.scrollTop;
		a > this.ma && (this.ma = a, e())
	}, 200, this);
	T(window, "scroll", function() {
		Lb(p)
	});
	Lb(p)
}

function zc() {
	function a(b) {
		if (b) {
			v || (v = u);
			var c = b - v;
			R || 500 < c && (c = 16);
			H += c;
			for (var d = y.length - 1; 0 <= d; d--) y[d][1].update(H, R);
			for (var d = 0, e = C.length; d < e; d++) C[d](c)
		} else b = X();
		v = b;
		P && (!la || H <= la) ? requestAnimationFrame(a) : (P = s, la = r)
	}
	function b(a) {
		B.push(a)
	}
	function c(a) {
		C.push(a)
	}
	function e(a, b, c) {
		A(c) || (c = "#" + a);
		y.push([a, b, c]);
		z = p();
		return y.length - 1
	}
	function d(a) {
		g();
		for (var b = [], c = 0, d = y.length; c < d; c++) {
			var e = y[c];
			if (!a || e[1].S) {
				var f = e[1].Db(a);
				b.push([e[0], f, e[2]])
			}
		}
		return b
	}
	function f(a) {
		function c(a,
		b) {
			if (n === K.fa && 0 < a) n = K.ea;
			else if (n !== K.fa && 0 >= a) n = K.fa, d();
			else if (n === K.Ja && 0 < a && 1 > a) n = K.ea;
			else if (n === K.ea && 1 <= a) n = K.Ja;
			else if (!(n === K.ea && 0 < a && 1 > a) && !b) return;
			var f = e,
				g;
			for (g in f) if (f.hasOwnProperty(g)) if (0 <= ua.indexOf(g)) m[g] = f[g];
			else if (0 <= ka.indexOf(g)) {
				var h = f[g];
				"opacity" !== g && "string" !== typeof h && (h += "px");
				m.style[g] = h
			} else if (0 <= xb.indexOf(g)) V.k(m, g, f[g]);
			else if (h = ib(m, "target")) if (h = rc(h)) {
				var k = "set" + g.charAt(0).toUpperCase() + g.slice(1);
				if (E(h[k])) h[k](f[g])
			}
		}
		function d() {
			e = {};
			for (var a in f) f.hasOwnProperty(a) && f[a] !== r && (e[a] = f[a]);
			k.reset(e)
		}
		var e, f = {}, g = a[2],
			h;
		for (h in a[1].fromValues) a[1].fromValues.hasOwnProperty(h) && (f[h] = a[1].fromValues[h]);
		var m = kb(g)[0],
			k = new W(e);
		k.C(a[1].toValues, a[1].duration);
		k.D(a[1].delay);
		k.s(a[1].easing);
		var n = K.fa;
		k.B(c);
		b(function() {
			d();
			c(0, q);
			O(m, "hidden-for-animation")
		});
		return [a[0], k, g]
	}
	function h(a) {
		a.sort(function(a, b) {
			return a[1].delay - b[1].delay
		}).reverse();
		for (var b = 0, c = a.length; b < c; b++) e.apply(this, f(a[b]));
		k()
	}
	function g() {
		for (var a = 0, b = B.length; a < b; a++) B[a]();
		G = 0
	}
	function k() {
		P = s;
		g();
		H = X();
		u = X();
		for (var a = 0, b = y.length; a < b; a++) y[a][1].start(l, q)
	}
	function m(b, c) {
		if (!P) {
			g();
			G = b;
			n();
			u = 0;
			P = q;
			for (var d = 0, e = y.length; d < e; d++) y[d][1].start(u, q)
		}
		H = b;
		la = c;
		a(u)
	}
	function n() {
		R = s;
		v = r
	}
	function p() {
		for (var a = 0, b = 0, c = y.length; b < c; b++) {
			var d = y[b][1].mb();
			d.end > a && (a = d.end)
		}
		return a
	}
	function x(a) {
		var b = new XMLHttpRequest;
		b.open("GET", a, s);
		b.onreadystatechange = function() {
			if (4 === b.readyState) {
				var a = JSON.parse(b.responseText);
				h(a)
			}
		};
		b.send(r)
	}
	var y = [],
		B = [],
		C = [],
		G = 0,
		v, z, H = X(),
		u = X(),
		P = s,
		R = s,
		la, ua = [],
		ka = ["opacity", "width", "height", "marginLeft", "marginTop"],
		xb = "scale translateX translateY translateZ rotateX rotateY rotateZ".split(" "),
		K = {
			fa: 1,
			ea: 2,
			Ja: 3
		};
	this.replay = function() {
		k();
		P = q;
		a()
	};
	this.Ga = m;
	this.Gb = e;
	this.Pb = function() {
		return y
	};
	this.qb = function() {
		return P
	};
	this.Yb = b;
	this.Xb = c;
	this.gc = 1;
	this.Nb = function() {
		return G
	};
	this.dc = function(b) {
		a(u + b)
	};
	this.Ob = function() {
		return z
	};
	this.ec = function() {
		k();
		R = q
	};
	this.fc = n;
	this.Lb = d;
	this.Ub = function(a) {
		y = [];
		B = [];
		z = p();
		h(a)
	};
	this.cc = k;
	this.Ka = h;
	this.va = function() {
		m(z - 200, z)
	};
	this.save = function(a) {
		var b = new XMLHttpRequest;
		b.open("POST", a, s);
		b.send(JSON.stringify(d(q), r, "  "))
	};
	this.load = function(a) {
		x(a)
	};
	c(function(a) {
		if (P || R) G > z ? P = s : G += a
	});
	k()
}
var $ = function Ac(b, c, e, d, f) {
	var h = Q(b),
		g;
	h && (c = c || ib(h, "fill"), d = d || parseInt(ib(h, "length"), 10), e = e || parseInt(ib(h, "height"), 10), f = f || parseInt(ib(h, "rotate"), 10), b = ca(this), Ac[b] = this, hb(h, "ww.LineCanvas." + b), 2 === window.devicePixelRatio && (h.style.height = e + "px", h.style.width = d + "px", d *= window.devicePixelRatio, e *= window.devicePixelRatio), h.height = e, h.width = d, g = h.getContext("2d"), g.lineWidth = e, g.lineCap = "round", g.strokeStyle = c);
	this.setPosition = function(b) {
		g && (g.clearRect(-1, -1, h.width + 2, h.height + 2),
		0 >= b || (g.beginPath(), g.moveTo(e / 2, e / 2), g.lineTo((d - e) * b, e / 2), g.stroke()))
	};
	this.setPosition(0)
};
F("ww.LineCanvas", $);
var Cc = function Bc(b, c) {
	Bc[b] = this;
	var e = Q(b);
	hb(e, "ww.ArcMove." + b);
	var d = new uc(c);
	this.setPosition = function(b) {
		b = d.Aa(b);
		V.k(e, "translateX", b.x);
		V.k(e, "translateY", b.y)
	};
	this.setPosition(0)
};
F("ww.ArcMove", Cc);

function Dc(a) {
	this.I = a || "";
	this.bb = Q("uth_app")
}
Dc.prototype.K = function() {
	this.da = Q(this.I + "_wrapper");
	if (this.da !== r) {
		this.Ya = "open-" + this.I + "-modal";
		this.ib = Q(this.I);
		this.X = Q(this.I + "_slides");
		this.G = this.X.getElementsByTagName("li");
		this.open = Za(this.Ya);
		this.close = Q("close_" + this.I);
		this.Ab = Q(this.I + "_nav_prev");
		this.next = Q(this.I + "_nav_next");
		this.F = Q(this.I + "_indicator");
		this.F = this.F.getElementsByTagName("span");
		this.size = this.G.length;
		this.visible = s;
		this.index = 0;
		this.ga = 980;
		this.X.style.width = this.size * this.ga + "px";
		V.k(this.X, "translateX", -80);
		var a = this;
		Y(a.close, function(b) {
			Ec(b, a)
		});
		for (var b = 0; b < a.open.length; b++) {
			var c = a.open[b];
			Y(c, function(a, b) {
				return function() {
					Fc(a.id, b)
				}
			}(c, a))
		}
		Y(a.next, function() {
			Gc(a)
		});
		Y(a.Ab, function() {
			Hc(a)
		});
		for (b = 0; b < a.F.length; b++) c = a.F[b], Y(c, function(a, b) {
			return function() {
				Ic(a, b)
			}
		}(c, a))
	}
};

function Ec(a, b, c) {
	c = (c || 0) === Nb;
	var e = fb(a.target, b.Ya),
		d = a.target.parentNode || a.target.parentElement;
	if (b.visible && !e || c) if (e = !c ? Jc(a, b.ib.id, b) : s, c || e || !c && b.close.id === a.target.id || d.id === b.close.id) O(b.da, "active"), setTimeout(function() {
		b.da.style.display = "none"
	}, 500), b.visible = s, Fb(b.jb), Fb(b.sb)
}
function Jc(a, b, c) {
	if ((a = a.target ? a.target : a.srcElement) && 3 === a.nodeType) a = a.parentNode;
	for (; a !== r;) {
		if (a.id && (a.id === b || 0 < a.id.indexOf(c.I))) return s;
		a = a.offsetParent
	}
	return q
}

function Fc(a, b) {
	b.visible || (b.da.style.display = "block", setTimeout(function() {
		N(b.da, "active")
	}, 20), b.visible = q, 0 < a.indexOf("index") && Ic(parseInt(a.split("index")[1], 10), b), setTimeout(function() {
		b.jb = Y(b.bb, function(a) {
			Ec(a, b)
		})
	}, 200), b.sb = T(document, qb, function(a) {
		var e = a.keyCode || a.which;
		e === Nb ? Ec(a, b, e) : 37 === e ? Hc(b) : 39 === e && Gc(b)
	}))
}

function Gc(a) {
	O(a.G[a.index], "active");
	a.F[a.index].className = "";
	a.index + 1 < a.size ? a.index++ : a.index = 0;
	N(a.G[a.index], "active");
	a.F[a.index].className = "active";
	V.k(a.X, "translateX", -1 * (a.ga * a.index + 80));
	Kc(a.G[a.index])
}
function Hc(a) {
	O(a.G[a.index], "active");
	a.F[a.index].className = "";
	0 <= a.index - 1 ? a.index-- : a.index = a.size - 1;
	N(a.G[a.index], "active");
	a.F[a.index].className = "active";
	V.k(a.X, "translateX", -1 * (a.ga * a.index + 80));
	Kc(a.G[a.index])
}

function Ic(a, b) {
	O(b.G[b.index], "active");
	b.F[b.index].className = "";
	b.index = "number" === typeof a ? a : parseInt(a.id.split("_")[1], 10);
	N(b.G[b.index], "active");
	V.k(b.X, "translateX", -1 * (b.ga * b.index + 80));
	b.F[b.index].className = "active";
	Kc(b.G[b.index])
}
function Kc(a) {
	if (a = kb(".illustration", a)[0]) if (a = ib(a, "target"))(a = rc(a)) && a.loop()
}

function Lc(a) {
	function b(a, b) {
		for (var c = r, e = 0, h = d.length; e < h; e++) if (d[e].t === a) {
			c = d[e];
			break
		}
		if (!(c == r || 1 !== c.status)) {
			c.status = b;
			g = +new Date;
			h = f.length;
			for (e = 0; e < h; e++) {
				var k = f[e];
				if (0 === k.l.length || a.l.contains(k.l)) {
					for (var C = c, G = 0, v = 0, z = 0, H = d.length; z < H; z++) {
						var u = d[z],
							P = s;
						if (P = 0 === k.l.length ? q : u.t.l.contains(k.l)) v++, (2 === u.status || 3 === u.status || 4 === u.status) && G++
					}
					k.Ma({
						t: C.t,
						loaded: 2 === C.status,
						error: 3 === C.status,
						timeout: 4 === C.status,
						Oa: G,
						Fb: v
					})
				}
			}
		}
	}
	function c() {
		for (var b = s, e = +new Date - g, f = e >= a.Xa, e = e >= a.Ua, h = 0, y = d.length; h < y; h++) {
			var B = d[h];
			1 === B.status && (B.t.ya && B.t.ya(), 1 === B.status && (f ? B.t.ba() : b = q))
		}
		e && b && k();
		b && setTimeout(c, a.ab)
	}
	function e(a) {
		function b(c) {
			c = c.t;
			for (var d = Infinity, e = 0; e < c.l.length; e++) for (var f = 0; f < Math.min(a.length, d) && (!(c.l[e] == a[f] && f < d) || !(d = f, 0 === d)) && 0 !== d; f++);
			return d
		}
		a = a == r ? [] : Array.isArray(a) ? a : [a];
		return function(a, c) {
			var d = b(a),
				e = b(c);
			return d < e ? -1 : d > e ? 1 : a.O < c.O ? -1 : a.O > c.O ? 1 : 0
		}
	}
	a = a || {};
	a.ab == r && (a.ab = 5E3);
	a.Ua == r && (a.Ua = 2E4);
	a.Xa == r && (a.Xa = Infinity);
	var d = [],
		f = [],
		h, g = +new Date;
	this.add = function(a) {
		a.l = new Mc(a.l);
		a.O == r && (a.O = Infinity);
		d.push({
			t: a,
			status: 0
		})
	};
	this.eb = function(a) {
		f.push({
			Ma: a,
			l: new Mc(l)
		})
	};
	this.cb = function(a) {
		f.push({
			l: new Mc(l),
			Ma: function(b) {
				b.Oa === b.Fb && a()
			}
		})
	};
	this.start = function(a) {
		h = +new Date;
		a = e(a);
		d.sort(a);
		a = 0;
		for (var b = d.length; a < b; a++) {
			var f = d[a];
			f.status = 1;
			f.t.start(this)
		}
		setTimeout(c, 100)
	};
	this.Sb = function() {
		for (var a = 0, b = d.length; a < b; a++) if (0 === d[a].status || 1 === d[a].status) return q;
		return s
	};
	this.getEntries = function() {
		return d
	};
	this.w = function(a) {
		b(a, 2)
	};
	this.Ea = function(a) {
		b(a, 3)
	};
	this.ba = function(a) {
		b(a, 4)
	};
	var k = this.log = function(a) {
		if (window.console) {
			var b = Math.round((+new Date - h) / 1E3);
			window.console.log("ww.Loader elapsed: " + b + " sec");
			for (var b = 0, c = d.length; b < c; b++) {
				var e = d[b];
				if (a || 1 === e.status) {
					var f = "ww.Loader: #" + b + " " + e.t.getName();
					switch (e.status) {
						case 0:
							f += " (Not Started)";
							break;
						case 1:
							f += " (Waiting)";
							break;
						case 2:
							f += " (Loaded)";
							break;
						case 3:
							f += " (Error)";
							break;
						case 4:
							f += " (Timeout)"
					}
					0 < e.t.l.length && (f += " Tags: [" + e.t.l.join(",") + "]");
					window.console.log(f)
				}
			}
		}
	}
}
F("ww.Loader", Lc);

function Mc(a) {
	this.Z = [];
	this.object = {};
	this.value = r;
	this.length = 0;
	if (a !== r && a !== l) {
		if (Array.isArray(a)) this.Z = a;
		else if ("object" === typeof a) for (var b in a) this.Z.push(b);
		else this.Z.push(a), this.value = a;
		this.length = this.Z.length;
		for (a = 0; a < this.length; a++) this.object[this.Z[a]] = q
	}
	this.contains = function(a) {
		if (0 === this.length || 0 === a.length) return s;
		if (1 === this.length && this.value !== r) return 1 === a.length ? this.value === a.value : a.object.hasOwnProperty(this.value);
		if (a.length < this.length) return a.contains(this);
		for (var b in this.object) if (a.object[b]) return q;
		return s
	}
}
Array.isArray || (Array.isArray = function(a) {
	return "[object Array]" == Object.prototype.toString.call(a)
});
F("ww.LoaderTags", Mc);

function Nc(a, b, c) {
	function e() {
		g.Ia("load", f);
		g.Ia("readystatechange", h);
		g.Ia("error", d)
	}
	function d() {
		e();
		k.Ea(g)
	}
	function f() {
		e();
		k.w(g)
	}
	function h() {
		"complete" == g.m.readyState && (e(), k.w(g))
	}
	var g = this,
		k = r;
	this.m = new Image;
	this.l = b;
	this.O = c;
	this.start = function(b) {
		k = b;
		g.bind("load", f);
		g.bind("readystatechange", h);
		g.bind("error", d);
		g.m.src = a
	};
	this.ya = function() {
		g.m.complete && (e(), k.w(g))
	};
	this.ba = function() {
		e();
		g.m.complete ? k.w(g) : k.ba(g)
	};
	this.getName = function() {
		return a
	};
	this.bind = function(a, b) {
		g.m.addEventListener ? g.m.addEventListener(a, b, s) : g.m.attachEvent && g.m.attachEvent("on" + a, b)
	};
	this.Ia = function(a, b) {
		g.m.removeEventListener ? g.m.removeEventListener(a, b, s) : g.m.detachEvent && g.m.detachEvent("on" + a, b)
	}
}
F("ww.LoaderImage", Nc);

function Oc(a, b, c) {
	var e = this,
		d = r,
		f = s;
	this.l = b;
	this.O = c;
	var h = r;
	this.start = function(b) {
		d = b;
		var c = new XMLHttpRequest;
		c.open("GET", a, s);
		c.onreadystatechange = function() {
			if (4 === c.readyState) if (200 !== c.status) d.Ea(e);
			else {
				var a = c.responseText;
				try {
					h = JSON.parse(a), f = q, d.w(e)
				} catch (b) {
					d.Ea(e)
				}
			}
		};
		c.send(r)
	};
	this.ya = function() {
		f && d.w(e)
	};
	this.ba = function() {
		f ? d.w(e) : d.ba(e)
	};
	this.getName = function() {
		return a
	};
	this.getData = function() {
		return h
	}
}
F("ww.LoaderSwiffy", Oc);
var Pc = {}, Qc = {};
F("ww.preloadedTweenData", Qc);

function Tc(a, b) {
	this.path = a;
	if (A(b)) {
		this.La = b.length;
		this.wa = 0;
		Pc[a] = new Lc;
		for (var c = 0, e = b.length; c < e; c++) {
			var d = "img/" + b[c].src;
			if (2 === window.devicePixelRatio) {
				if (~d.indexOf("_1x")) continue
			} else if (~d.indexOf("_2x")) continue;
			A(b[c].na) || A(b[c].b) || A(b[c].wb) ? (d = new Oc(d, ["swiffys"]), d.na = b[c].na, d.b = b[c].b, d.aa = b[c].wb) : (d = new Nc(d, ["images"]), d.ja = b[c].ja, d.a = b[c].a, d.aa = b[c].w);
			Pc[a].add(d)
		}
		this.ha = Pc[a]
	}
}

function Uc(a, b) {
	if (a.path) if (A(Qc[a.path])) A(Qc[a.path]) && (a.r.Ka(Qc[a.path]), b(a));
	else {
		var c = new XMLHttpRequest;
		c.open("GET", "/json/" + a.path, s);
		c.onreadystatechange = function() {
			if (4 === c.readyState && a && a.r) {
				var e = JSON.parse(c.responseText);
				a.r.Ka(e);
				b(a)
			}
		};
		c.send(r)
	}
}
Tc.prototype.load = function(a, b) {
	E(a) && this.ha.eb(a);
	E(b) && this.ha.cb(b);
	this.ha.start()
};
Tc.prototype.sa = aa;
Tc.prototype.Ha = aa;
var Vc;

function Wc(a) {
	if ("undefined" === typeof a) {
		for (var b = a = 0, c = 0; c < U.length; c++) a += U[c].La, b += U[c].wa;
		a = ~~ (100 * (b / a))
	}
	if (b = Q("percentage")) b.innerText = a + "%"
}

function Xc(a) {
	function b(c) {
		c || (c = X());
		d.update(c);
		g.update(c);
		m.update(c);
		d.i && g.i ? E(a) && a() : requestAnimationFrame(b)
	}
	var c = {
		u: -400
	}, e = Q("how_search_works");
	V.k(e, "translateY", -400);
	O(e, "hidden-for-animation");
	var d = (new W(c)).C({
		u: 0
	}, 300).D(800).s(oc).B(function() {
		V.k(e, "translateY", c.u)
	}).L(function() {
		d.i = q
	}),
		f = {
			u: 200
		}, h = Q("behind_the_science");
	V.k(h, "translateY", 200);
	O(h, "hidden-for-animation");
	var g = (new W(f)).C({
		u: 0
	}, 800).D(1250).s(mc).B(function() {
		V.k(h, "translateY", f.u)
	}).L(function() {
		g.i = q
	}),
		k = {
			opacity: 0
		};
	h.style.opacity = k.opacity;
	var m = (new W(k)).C({
		opacity: 1
	}, 64).D(1270).s(lc).B(function() {
		h.style.opacity = k.opacity
	}),
		n = Q("spinner");
	Vc = new swiffy.Stage(n, {
		tags: [{
			type: 9,
			actions: [{
				constants: ["onEnterFrame", "loaded"],
				type: 136
			}, {
				type: 7
			}, {
				index: 0,
				type: 304
			}, {
				body: [{
					index: 1,
					type: 304
				}, {
					type: 28
				}, {
					type: 18
				}, {
					target: 9,
					type: 157
				}, {
					label: "loop arrow",
					type: 140
				}, {
					type: 6
				}, {
					index: 0,
					type: 304
				}, {
					type: 59
				}, {
					type: 23
				}],
				args: [],
				type: 155
			}, {
				type: 29
			}]
		}, {
			type: 2
		}, {
			label: "loop arrow",
			type: 15
		}, {
			bounds: [{
				ymin: -117,
				ymax: 133,
				xmin: -2119,
				xmax: 2132
			}],
			id: 1,
			fillstyles: [{
				color: [-11295263],
				type: 1
			}],
			paths: [{
				fill: 0,
				data: [":38P8Hb2c:6dkbnjn4cb:xN6cbNl4Dla8C:a:3Ic:504c:b2c:6dkbnjn4cb:xN6cbNl4Dla8C:a:3Ic:186CCb0d:1fybtyt4gb:0eT5gbUz1Fzb0D:1FZbUYU5Gb:8Du4GbuY1fYc:95h:b0d:1fybtyt4gb:0eT5gbUz1Fzb0D:1FZbUYU5Gb:8Du4GbuY1fYc:97t:b0d:1fybtyt4gb:0eT5gbUz1Fzb0D:1FZbUYU5Gb:8Du4GbuY1fYc:303CVa:3xa9b:a:1Ja0e:a9e1ja3c:a6F9Jb9dQ9d5Fb:5CU2EbUQ6FQc:09d:a:3xa6m:a:Za7J:a:7Uc:7n:a:3xa6m:a:Za7J:a:7Uc:7t:a:ya7g:a:8ua8b:a:8Ua7g:a:Yc:76e:a:3xa6m:a:Ya7J:a:0Ia0j:a:Xa0J:a:9Ga7j:a:Yc:3e:a:3xa6m:a:Ya7J:a:0Ia0j:a:Xa0J:a:9Ga7j:a:Yc:1k:a:ya7g:a:8ua8b:a:8Ua7g:a:Yc:6c:a:3xa9b:a:4Ka7l:a:4ka9b:a:3Xa9B:a:4ja7L:a:4Jc:2v:a:3xa6m:a:Ya7J:a:0Ia0j:a:Xa0J:a:9Ga7j:a:Yc:98b:a:ya7g:a:8ua8b:a:8Ua7g:a:Yc:01c:a:3xa9b:a:1Ja0e:a9e1ja3c:a6F9Jb9dQ9d5Fb:5CU2EbUQ6FQc:0k:a1h0oa:3ia8b:a:4Ia1h9Na0C:a5F2la4F2Lc:012DCb5C:6EpbUqU5db:7bn3dboq9d9ba6cpblfqnbeheub:sN0cbOk3Dka5CDa2CJa:7bbwk6fkb0d:3fRbwRw0Eb:XN0DbNP3E9Ba3COaPOaEUb:QmZa5cJa8emaiYb0CM6FMc:7v:b6C:3FobZo0D4dbN8bN5fb:0f9b3ib9b2c3h2ca2fIa:Ya8Eib1D:4FZbVZV3Gb:7Dw3Gbw7B3f7Bb8b:5emalXb8BN6FNc:20dAb4E:3H3cb9B3c9B2ib:0f9b3ib9b2c3h2cb2e:2h3Cb9b3C9b2Ib:8E9B1Ib0C4C2H4Cc:95h:b4E:3H3cb9B3c9B2ib:0f9b3ib9b2c3h2cb2e:2h3Cb9b3C9b2Ib:8E9B1Ib0C4C2H4Cc:18cab5C:6EpbUqU5db:7bn3dboq9d9bbxi6cpaqnbeheub:sN0cbOk3Dka5CDa2CJa:7bbwk6fkb0d:3fRbwRw0Eb:XN0DbNP3E9Ba3COaPOaEUb:QmZbmJ5cJb8b:8emaiYa6FMc:69m:b5C:6EpbUqU5db:7bn3dboq9d9ba6cpaqnaeub:sN0cbOk3Dka5CDa2CJa:7bbwk6fkb0d:3fRbwRw0Eb:XN0DbNP3E9BbVH3COaPObEHEUb:QmZbmJ5cJb8b:8emaiYb0CM6FMc:10dAb4E:3H3cb9B3c9B2ib:0f9b3ib9b2c3h2cb2e:2h3Cb9b3C9b2Ib:8E9B1Ib0C4C2H4Cc"]
			}],
			flat: q,
			type: 1
		}, {
			id: 1,
			matrix: "::::957b0o",
			type: 3,
			depth: 2
		}, {
			bounds: [{
				ymin: -117,
				ymax: 133,
				xmin: -721,
				xmax: 725
			}],
			id: 2,
			fillstyles: [{
				color: [-9408400],
				type: 1
			}],
			paths: [{
				fill: 0,
				data: [":5T3Ha0d0ka9G:a9b5Gaj5Cc:1uEb7d:0gxbxxx1gb:9dY4gbZy6Gya4C:a:4Sc:09DCb0d:1fybtyt4gb:0eT5gbUz1Fzb0D:1FZbUYU5Gb:8Du4GbuY1fYc:77BVa:3xa6m:a:Za7J:a:7Uc:76dAa6I4xa9b:a9b7Ga8i:a0c7ga9b:a5I4Xc:8laa:3xa8f:b1f:4i2Cb2c2C2c2Ib:6E1C7Hb2C2C8H2Cc:3q:a:3xa9b:a:3Xc:6f:a:3xaz:a:8MaB6Faa:a3m4ta2c:a:3XaZ:ab3taA:a3M3Tc:55GDb4E:3H3cb9B3c9B2ib:0f9b3ib9b2c3h2cb2e:2h3Cb9b3C9b2Ib:8E9B1Ib0C4C2H4Cc:93jab9C:7Fob9Bo4D3dbO9bO7fb:9e0c2ib1c2c6h2ca6dCa0dIa:8Ka3H:a:ya4e:a:5ga9Dfb6D:0GZbXYX4Gb:7Dy4GbxZ9fZa3fnakYb4CN2GNc"]
			}],
			flat: q,
			type: 1
		}, {
			id: 2,
			matrix: "::::000c0o",
			colortransform: "::::::6Y:",
			type: 3,
			depth: 3
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			bounds: [{
				ymin: -206,
				ymax: 206,
				xmin: -1542,
				xmax: 30
			}],
			id: 3,
			paths: [{
				data: ["::5Qa52G51c:60G52Ca52g51c"],
				line: 0
			}],
			flat: q,
			linestyles: [{
				color: [-11295263],
				width: [60]
			}],
			type: 1
		}, {
			id: 3,
			matrix: "::::773c47k",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c63k",
			colortransform: "::::::R:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c78k",
			colortransform: "::::::5C:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c93k",
			colortransform: "::::::2E:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c07l",
			colortransform: "::::::8F:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c20l",
			colortransform: "::::::3H:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c33l",
			colortransform: "::::::8I:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c45l",
			colortransform: "::::::2K:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c57l",
			colortransform: "::::::5L:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c68l",
			colortransform: "::::::8M:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c79l",
			colortransform: "::::::0O:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c89l",
			colortransform: "::::::2P:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c99l",
			colortransform: "::::::2Q:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c07m",
			colortransform: "::::::3R:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c16m",
			colortransform: "::::::2S:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c24m",
			colortransform: "::::::1T:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c31m",
			colortransform: "::::::9T:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c37m",
			colortransform: "::::::6U:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c43m",
			colortransform: "::::::3V:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c49m",
			colortransform: "::::::0W:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c54m",
			colortransform: "::::::5W:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c58m",
			colortransform: "::::::0X:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c62m",
			colortransform: "::::::4X:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c65m",
			colortransform: "::::::8X:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c67m",
			colortransform: "::::::1Y:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c69m",
			colortransform: "::::::3Y:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c71m",
			colortransform: "::::::5Y:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			replace: q,
			matrix: "::::773c72m",
			colortransform: "::::::6Y:",
			type: 3,
			depth: 1
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 9,
			actions: [{
				frame: 1,
				type: 129
			}, {
				type: 6
			}]
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 4,
			depth: 3
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 4,
			depth: 1
		}, {
			type: 4,
			depth: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}, {
			type: 2
		}],
		fileSize: 2146,
		v: "4.9.0",
		frameSize: {
			ymin: 0,
			ymax: 2E3,
			xmin: 0,
			xmax: 6E3
		},
		frameCount: 150,
		frameRate: 24,
		code: "",
		version: 11
	});
	n.style.opacity = 0;
	var p = Q("percentage"),
		x = db(window || window).height - Sb;
	650 < x ? (x = ~~ (x / 2), n.style.top = x + "px", p.style.top = x + "px") : (n.style.top = "350px", p.style.top =
		"350px");
	O(n, "hidden-for-animation");
	Vc.start();
	this.start = function() {
		d.start();
		g.start();
		m.start();
		requestAnimationFrame(b)
	}
}

function Yc(a) {
	function b(c) {
		c || (c = X());
		x.update(c);
		m.update(c);
		h.update(c);
		x.i && m.i ? E(a) && a() : requestAnimationFrame(b)
	}
	var c = Q("percentage"),
		e = Q("spinner"),
		d = Q("intro_bg_shadow"),
		f = {
			bottom: 0
		}, h = (new W(f)).C({
			bottom: -150
		}, 1E3).s(nc).B(function() {
			d.style.bottom = f.bottom + "px"
		}).L(function() {
			h.i = q
		}),
		g = {
			height: db(window || window).height - Sb
		}, k = Q("intro_bg");
	k.style.height = g.height + "px";
	var m = (new W(g)).C({
		height: 397
	}, 1E3).s(nc).B(function() {
		k.style.height = g.height + "px"
	}).L(function() {
		m.i = q
	}),
		n = {
			u: -176
		},
		p = Q("one_intro");
	V.k(p, "translateY", n.u);
	var x = (new W(n)).C({
		u: 0
	}, 600).D(900).s(mc).B(function() {
		V.k(p, "translateY", n.u)
	}).L(function() {
		x.i = q
	});
	this.start = function() {
		O(p, "hidden-for-animation");
		x.start();
		m.start();
		h.start();
		requestAnimationFrame(b)
	};
	this.watch = function(a) {
		function b(c) {
			c || (c = X());
			f.update(c);
			h.update(c);
			h.i && f.i ? E(a) && a() : requestAnimationFrame(b)
		}
		N(e, "clickable");
		Vc.setFlashVars("loaded=true");
		var d = {
			opacity: 1
		}, f = (new W(d)).C({
			opacity: 0
		}, 300).D(600).s(lc).B(function() {
			c.style.opacity = d.opacity
		}).L(function() {
			Wc(0);
			setTimeout(function() {
				f.i = q
			}, 50)
		}),
			g = {
				opacity: 0
			}, h = (new W(g)).C({
				opacity: 1
			}, 600).s(lc).D(1400).B(function() {
				e.style.opacity = g.opacity
			}).L(function() {
				setTimeout(function() {
					c.style.display = "none";
					h.i = q
				}, 50)
			});
		f.start();
		h.start();
		requestAnimationFrame(b);
		var k = this;
		Db(window, "scroll", function() {
			k.start()
		})
	}
}
F("ww.bootstrap.init", function(a, b) {
	function c(a) {
		for (var b = U.length, c = new Kb(Wc, 50), d = 0; d < U.length; d++)(function(d) {
			U[d].load(function(a) {
				U[d].wa = a.Oa;
				Lb(c)
			}, function() {
				U[d].wa = U[d].La;
				Wc();
				b--;
				if (0 >= b) {
					for (var c = 0; c < U.length; c++) for (var e = U[c].ha.getEntries(), f = 0; f < e.length; f++) {
						var g = e[f].t;
						if (g.ja) for (var h = kb(g.ja), k = 0, p = h.length; k < p; k++) h[k].style.backgroundImage = "url(" + g.getName() + ")";
						if (g.a) {
							h = kb(g.a);
							k = 0;
							for (p = h.length; k < p; k++) h[k].src = g.getName()
						}
						if (g.na) {
							h = kb(g.na);
							k = 0;
							for (p = h.length; k < p; k++) new xc(h[k], g.getData())
						}
						if (g.b) {
							h = kb(g.b);
							k = 0;
							for (p = h.length; k < p; k++) new Z(h[k], g.getData())
						}
						g.aa && (E(g.aa) ? g.aa(g) : (h = rc(g.aa), A(h) && h(g)))
					}
					E(a) && a()
				}
			})
		})(d)
	}
	function e() {
		for (var a = 0; a < U.length; a++) U[a].Ha()
	}
	function d() {
		for (var a = [], b = 0; b < U.length; b++) a.push(U[b].R || []);
		new yc(a)
	}
	function f() {
		var a = Za("hoverable"),
			b;
		oa(a, function(a) {
			ib(a, "tooltip") && Y(a, function() {
				N(a, "hover");
				b = Y(document.body, function() {
					O(a, "hover");
					Fb(b)
				})
			})
		})
	}
	function h() {
		N(document.body, "loading");
		var a = Q("intro_bg");
		if (a && !window.location.href.match(/debug/)) {
			var b = db(window || window).height - Sb;
			Q("intro_bg").style.height = b + "px";
			var e = Q("uth_app");
			e.style.height = b + "px";
			e.style.overflowY = "hidden";
			document.body.scrollTop = document.documentElement.scrollTop = 0
		} else a && O(a, "hidden-for-animation"), (b = Q("how_search_works")) && O(b, "hidden-for-animation"), (b = Q("behind_the_science")) && O(b, "hidden-for-animation"), (b = Q("one_intro")) && O(b, "hidden-for-animation"), c();
		for (b = 0; b < U.length; b++) U[b].sa(), Uc(U[b], function(a) {
			if (window.location.href.match(/debug/) && 1 === U.length) {
				document.write('<link rel="stylesheet" href="css/timeline.css">');
				document.write('<script src="js/timeline.js">\x3c/script>');
				var b = setInterval(function() {
					"undefined" !== typeof Timeline && (clearInterval(b), Timeline.Tb(a.r, a.path))
				}, 100)
			}
		});
		if (a && !window.location.href.match(/debug/)) {
			var f = new Yc(function() {
				window.location.href.match(/disableScroll/) || setTimeout(d, 100)
			}),
				g = new Xc(function() {
					Wc(0);
					setTimeout(function() {
						c(function() {
							var a = Q("uth_app");
							a.style.height = "auto";
							a.style.overflowY =
								"visible";
							O(document.body, "loading");
							f.watch()
						})
					}, 50)
				});
			setTimeout(function() {
				g.start()
			}, 1E3)
		} else window.location.href.match(/disableScroll/) || d()
	}
	if (Yb || window.location.href.match(/fallback/) || "fallback" === a) window.location.href = "http://www.google.com/insidesearch/howsearchworks/";
	else {
		Sb = Qb();
		U = [];
		if ("one" === b) A(Zc) && U.push(new Zc);
		else if ("two" === b) A($c) && U.push(new $c);
		else if ("three" === b) A(ad) && U.push(new ad);
		else if (A(Zc) && U.push(new Zc), Vb || window.location.href.match(/mobile/) || "mobile" === a) {
			eb(Q("line_container2"));
			eb(Q("algorithms"));
			eb(Q("spam"));
			eb(Q("conclusion"));
			var g = Q("nav-part2"),
				k = Q("nav-part3");
			g && bb(g, {
				href: "part-2.html"
			});
			k && bb(k, {
				href: "part-3.html"
			});
			N(document.body, "mobile-page-1")
		} else A($c) && U.push(new $c), A(ad) && U.push(new ad);
		Zb && N(document.body, "ie");
		g = Q("uth_app");
		Vb || window.location.href.match(/mobile/) || "mobile" === a ? (O(g, "animated"), N(document.body, "mobile"), Wb && N(document.body, "tablet"), c(), e()) : Xb || window.location.href.match(/static/) || "static" === a ? (O(g, "animated"),
		N(document.body, "static"), c(), e(), d()) : h();
		f()
	}
});

function bd(a) {
	cd(a.m)
}
F("ww.fileTile.loaded", bd);

function cd(a, b, c, e) {
	b = b || 7.5;
	var d = b * wc,
		f = db(window || window);
	c = c || 466;
	e = A(e) ? e : q;
	var h = Q("file_tile"),
		g = h.getContext("2d");
	2 === window.devicePixelRatio ? (h.style.height = c + "px", h.style.width = f.width + "px", c *= window.devicePixelRatio, h.width = f.width * window.devicePixelRatio) : h.width = f.width;
	h.height = c;
	var f = a.width - ~~ (h.width / 2) % a.width,
		k = g.createPattern(a, "repeat");
	g.fillStyle = k;
	g.save();
	g.translate(-f, 0);
	g.fillRect(0, 0, h.width + f, h.height);
	g.restore();
	g.save();
	g.globalCompositeOperation = "destination-out";
	f = ~~ (h.width / 2);
	d = c - Math.tan(d) * f;
	g.beginPath();
	g.moveTo(0, c);
	g.lineTo(0, d);
	g.lineTo(f, c);
	g.lineTo(h.width, d);
	g.lineTo(h.width, c);
	g.closePath();
	g.fillStyle = "black";
	g.fill();
	g.restore();
	e && (e = new Rb, T(e, "resize", function() {
		cd(a, b, c, s)
	}))
}

function Zc() {
	Tc.call(this, "one", [{
		src: "swiffys/down_arrow.js",
		b: "#down_arrow"
	}, {
		src: "swiffys/car.js",
		b: "#car_circle"
	}, {
		src: "swiffys/graph.js",
		b: "#graph_circle"
	}, {
		src: "swiffys/book.js",
		b: "#book_circle"
	}, {
		src: "swiffys/web.js",
		b: "#file_1_web, #file_4_web, #file_6_web"
	}, {
		src: "file-tile_1x.png",
		w: bd
	}, {
		src: "file-tile_2x.png",
		w: bd
	}, {
		src: "svg/blocks-on-line.svg",
		a: "#file_1 img"
	}, {
		src: "svg/image-on-line.svg",
		a: "#file_2 img"
	}, {
		src: "svg/grid-on-line.svg",
		a: "#file_3 img"
	}, {
		src: "svg/text-on-line.svg",
		a: "#file_4 img"
	}, {
		src: "svg/video-on-line.svg",
		a: "#file_5 img"
	}, {
		src: "svg/mixed-media-on-line.svg",
		a: "#file_6 img"
	}, {
		src: "svg/small-page-on-line.svg",
		a: "#file_7 img"
	}, {
		src: "svg/big-page.svg",
		a: "#big_file"
	}, {
		src: "svg/open-file-string-theory.svg",
		a: "#drawer_1_open"
	}, {
		src: "svg/open-file-p-brane.svg",
		a: "#drawer_2_open"
	}, {
		src: "svg/open-file-physics.svg",
		a: "#drawer_3_open"
	}, {
		src: "svg/big-page-on-file.svg",
		a: "#drawer_1_file img, #drawer_2_file img, #drawer_3_file img"
	}, {
		src: "svg/sketchy-arrow.svg",
		a: "#one_aside_2 img"
	}]);
	var a = [new $("firstLine"), new $("secondLine"), new $("thirdLine"), new $("fourthLine"), new $("fifthLine")];
	this.Ha = function() {
		for (var b = 0; b < a.length; b++) a[b].setPosition(1)
	};
	this.sa = function() {
		function a(b) {
			"index" === b.name && e.r.va()
		}
		function c(a) {
			e.r.Ga(a.startTime, a.j)
		}
		this.r = new zc;
		var e = this;
		this.R = [{
			name: "30 trillion",
			e: 397,
			h: 397,
			g: 1097,
			startTime: 0,
			j: 4E3,
			n: c,
			o: a
		}, {
			name: "crawling",
			e: 1E3,
			h: 1131,
			g: 1647,
			startTime: 5E3,
			j: 11E3,
			n: c,
			o: a
		}, {
			name: "index",
			e: 1559,
			g: 2555,
			startTime: 14200,
			j: 21E3,
			h: 1931,
			n: c,
			o: a
		}];
		new Cc("drawer_1_file", [{
			x: 433,
			y: -125
		}, {
			x: 201,
			y: -115
		}, {
			x: -10,
			y: -260
		}]);
		new Cc("drawer_2_file", [{
			x: 453,
			y: -120
		}, {
			x: 351,
			y: -70
		}, {
			x: 210,
			y: -50
		}]);
		new Cc("drawer_3_file", [{
			x: 473,
			y: -115
		}, {
			x: 576,
			y: -105
		}, {
			x: 680,
			y: -170
		}])
	}
}
ja(Zc, Tc);
Qc.one = [
	["100 million gigabytes fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 20210,
		easing: "EASING.LIN"
	}, "#one_aside_2"],
	["100 million gigabytes", {
		fromValues: {
			translateY: -40
		},
		toValues: {
			translateY: 0
		},
		duration: 400,
		delay: 20200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#one_aside_2"],
	["the_index_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 18930,
		easing: "EASING.LIN"
	}, "#the_index"],
	["the_index", {
		fromValues: {
			translateY: 100
		},
		toValues: {
			translateY: 0
		},
		duration: 800,
		delay: 18920,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#the_index"],
	["keep_it_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 18910,
		easing: "EASING.LIN"
	}, "#keep_it"],
	["keep_it", {
		fromValues: {
			translateY: -40
		},
		toValues: {
			translateY: 0
		},
		duration: 400,
		delay: 18900,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#keep_it"],
	["drawer_2_into_cab", {
		fromValues: {
			scale: 1,
			translateX: 210,
			translateY: -50,
			height: 328
		},
		toValues: {
			scale: 0.6,
			translateX: 230,
			translateY: 135,
			height: 210
		},
		duration: 700,
		delay: 17700,
		easing: "EASING.EXPONENTIAL.INOUT"
	},
		"#drawer_2_file"],
	["drawer_3_into_cab", {
		fromValues: {
			scale: 1,
			translateX: 680,
			translateY: -170,
			height: 328
		},
		toValues: {
			scale: 0.6,
			translateX: 708,
			translateY: 7,
			height: 210
		},
		duration: 700,
		delay: 17700,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_3_file"],
	["drawer_1_into_cab", {
		fromValues: {
			scale: 1,
			translateX: -10,
			translateY: -260,
			height: 328
		},
		toValues: {
			scale: 0.6,
			translateX: -13,
			translateY: -80,
			height: 210
		},
		duration: 700,
		delay: 17700,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_1_file"],
	["drawer_2_arc", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 700,
		delay: 16650,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_2_file"],
	["drawer_3_arc", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 700,
		delay: 16650,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_3_file"],
	["drawer_1_arc", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 700,
		delay: 16650,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_1_file"],
	["drawer_3_from_pile", {
		fromValues: {
			translateX: 413,
			translateY: -130,
			opacity: 0
		},
		toValues: {
			translateX: 473,
			translateY: -115,
			opacity: 1
		},
		duration: 200,
		delay: 16300,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_3_file"],
	["drawer_2_from_pile", {
		fromValues: {
			translateX: 413,
			translateY: -130,
			opacity: 0
		},
		toValues: {
			translateX: 453,
			translateY: -120,
			opacity: 1
		},
		duration: 200,
		delay: 16250,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_2_file"],
	["drawer_1_from_pile", {
		fromValues: {
			translateX: 413,
			translateY: -130,
			opacity: 0
		},
		toValues: {
			translateX: 433,
			translateY: -125,
			opacity: 1
		},
		duration: 200,
		delay: 16200,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_1_file"],
	["drawer_3_open", {
		fromValues: {
			opacity: 0,
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			opacity: 1,
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 400,
		delay: 15647,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_3_open"],
	["drawer_1_open", {
		fromValues: {
			opacity: 0,
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			opacity: 1,
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 400,
		delay: 15572,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_1_open"],
	["drawer_2_open", {
		fromValues: {
			opacity: 0,
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			opacity: 1,
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 400,
		delay: 15351,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#drawer_2_open"],
	["one_part_3", {
		fromValues: {
			opacity: 0,
			translateY: 20
		},
		toValues: {
			opacity: 1,
			translateY: 0
		},
		duration: 300,
		delay: 14300,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#one_part_3"],
	["file_tile_container", {
		fromValues: {
			height: 0
		},
		toValues: {
			height: 466
		},
		duration: 1600,
		delay: 14300,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#file_tile_container"],
	["big_file fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 10480,
		easing: "EASING.LIN"
	}, "#big_file "],
	["big_file", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 10480,
		easing: "EASING.BACK.OUT"
	}, "#big_file"],
	["file_7_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9800,
		easing: "EASING.LIN"
	}, "#file_7"],
	["fifthLine", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 680,
		delay: 9800,
		easing: "EASING.LIN"
	}, "#fifthLine"],
	["file_7_past", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 9800,
		easing: "EASING.DOUBLEBACK.OUT"
	}, "#file_7"],
	["file_6_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9020,
		easing: "EASING.LIN"
	}, "#file_6"],
	["file_6_past", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 9020,
		easing: "EASING.DOUBLEBACK.OUT"
	}, "#file_6"],
	["file_6 web", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 400,
		delay: 9020,
		easing: "EASING.LIN"
	}, "#file_6_web"],
	["fourthLine", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 780,
		delay: 9020,
		easing: "EASING.LIN"
	}, "#fourthLine"],
	["circle_3_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9710,
		easing: "EASING.LIN"
	}, "#circle_3"],
	["file_5_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 8600,
		easing: "EASING.LIN"
	}, "#file_5"],
	["circle_3", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 900,
		delay: 9710,
		easing: "EASING.BACK.OUT"
	}, "#circle_3"],
	["file_5_past", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 8600,
		easing: "EASING.DOUBLEBACK.OUT"
	}, "#file_5"],
	["one_aside_1 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9710,
		easing: "EASING.LIN"
	}, "#one_aside_1"],
	["one_aside_1", {
		fromValues: {
			translateX: 200
		},
		toValues: {
			translateX: 0
		},
		duration: 1200,
		delay: 9710,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#one_aside_1"],
	["one_part_2 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9710,
		easing: "EASING.LIN"
	}, "#one_part_2"],
	["one_part_2", {
		fromValues: {
			translateX: 200
		},
		toValues: {
			translateX: 0
		},
		duration: 1200,
		delay: 9710,
		easing: "EASING.EXPONENTIAL.OUT"
	},
		"#one_part_2"],
	["circle_2_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9610,
		easing: "EASING.LIN"
	}, "#circle_2"],
	["circle_2", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 900,
		delay: 9610,
		easing: "EASING.BACK.OUT"
	}, "#circle_2"],
	["file_4_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 7600,
		easing: "EASING.LIN"
	}, "#file_4"],
	["thirdLine", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1420,
		delay: 7600,
		easing: "EASING.LIN"
	}, "#thirdLine"],
	["file_4_past", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 7600,
		easing: "EASING.DOUBLEBACK.OUT"
	}, "#file_4"],
	["file_4 web", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 400,
		delay: 7600,
		easing: "EASING.LIN"
	}, "#file_4_web"],
	["file_3_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 7200,
		easing: "EASING.LIN"
	}, "#file_3"],
	["file_3_past", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 7200,
		easing: "EASING.DOUBLEBACK.OUT"
	}, "#file_3"],
	["circle_1_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9510,
		easing: "EASING.LIN"
	}, "#circle_1"],
	["circle_1", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 900,
		delay: 9500,
		easing: "EASING.BACK.OUT"
	}, "#circle_1"],
	["file_2_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 6700,
		easing: "EASING.LIN"
	}, "#file_2"],
	["file_2_past", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 6700,
		easing: "EASING.DOUBLEBACK.OUT"
	}, "#file_2"],
	["secondLine", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1400,
		delay: 6200,
		easing: "EASING.LIN"
	},
		"#secondLine"],
	["file_1_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 6200,
		easing: "EASING.LIN"
	}, "#file_1"],
	["file_1_past", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 400,
		delay: 6200,
		easing: "EASING.DOUBLEBACK.OUT"
	}, "#file_1"],
	["file_1 web", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 400,
		delay: 6200,
		easing: "EASING.LIN"
	}, "#file_1_web"],
	["firstLine", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1200,
		delay: 5E3,
		easing: "EASING.LIN"
	}, "#firstLine"],
	["one_part_1", {
		fromValues: {
			opacity: 0,
			translateX: -100
		},
		toValues: {
			opacity: 1,
			translateX: 0
		},
		duration: 800,
		delay: 5200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#one_part_1"],
	["growing_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 3800,
		easing: "EASING.LIN"
	}, "#growing"],
	["thirty", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 1500,
		easing: "EASING.LIN"
	}, "#thirty"],
	["trillion", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 2250,
		easing: "EASING.LIN"
	}, "#trillion"],
	["individual_pages_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 3E3,
		easing: "EASING.LIN"
	}, "#individual_pages"],
	["search_starts_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 10,
		delay: 460,
		easing: "EASING.LIN"
	}, "#search_starts"],
	["search_starts", {
		fromValues: {
			translateY: -60
		},
		toValues: {
			translateY: 0
		},
		duration: 1E3,
		delay: 400,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#search_starts"]
];

function dd(a) {
	ed(a.m)
}
F("ww.algorithmsFileTile.loaded", dd);

function ed(a, b, c) {
	b = b || 6.5;
	var e = b * wc,
		d = db(window || window);
	c = A(c) ? c : q;
	var f = 410,
		h = Q("algorithms_file_tile"),
		g = h.getContext("2d");
	2 === window.devicePixelRatio ? (h.style.height = f + "px", h.style.width = d.width + "px", f *= window.devicePixelRatio, h.width = d.width * window.devicePixelRatio) : h.width = d.width;
	h.height = f;
	var d = a.width - ~~ (h.width / 2) % a.width,
		k = g.createPattern(a, "repeat");
	g.fillStyle = k;
	g.save();
	g.translate(-d, 0);
	g.fillRect(0, 0, h.width + d, h.height);
	g.restore();
	g.save();
	g.globalCompositeOperation = "destination-out";
	d = ~~ (h.width / 2);
	e = Math.tan(e) * d;
	k = f - e;
	g.beginPath();
	g.moveTo(0, f);
	g.lineTo(0, k);
	g.lineTo(d, f);
	g.lineTo(h.width, k);
	g.lineTo(h.width, f);
	g.moveTo(0, 0);
	g.lineTo(h.width, 0);
	g.lineTo(d, e);
	g.lineTo(0, 0);
	g.closePath();
	g.fillStyle = "black";
	g.fill();
	g.restore();
	c && (c = new Rb, T(c, "resize", function() {
		ed(a, b, s)
	}))
}

function $c() {
	Tc.call(this, "two", [{
		src: "svg/mixed-media-on-file.svg",
		a: "#cabinet_1_file, #cabinet_1_file_clone"
	}, {
		src: "swiffys/page_quality.js",
		b: "#page_quality_circle, .ranking_0 .illustration"
	}, {
		src: "swiffys/freshness.js",
		b: "#freshness_circle, .ranking_1 .illustration"
	}, {
		src: "swiffys/safe_search.js",
		b: "#safe_search_circle, .ranking_2 .illustration"
	}, {
		src: "swiffys/personalization.js",
		b: "#personalization_circle, .ranking_3 .illustration"
	}, {
		src: "swiffys/translation.js",
		b: "#translation_circle, .ranking_4 .illustration"
	}, {
		src: "swiffys/universal_search.js",
		b: "#universal_search_circle, .ranking_5 .illustration"
	}, {
		src: "swiffys/spelling.js",
		b: "#spelling_circle, .rewrite_0 .illustration"
	}, {
		src: "swiffys/auto_complete.js",
		b: "#autocomplete_circle, .rewrite_1 .illustration"
	}, {
		src: "swiffys/synonyms.js",
		b: "#synonyms_circle, .rewrite_2 .illustration"
	}, {
		src: "swiffys/understanding.js",
		b: "#understanding_circle, .rewrite_3 .illustration"
	}, {
		src: "swiffys/methods.js",
		b: "#methods_circle, .rewrite_4 .illustration"
	}, {
		src: "swiffys/instant.js",
		b: "#instant_circle, .rewrite_5 .illustration"
	}, {
		src: "swiffys/paper_stacking_1.js",
		b: "#file_stack_1"
	}, {
		src: "swiffys/paper_stacking_2.js",
		b: "#file_stack_2"
	}, {
		src: "swiffys/paper_stacking_3.js",
		b: "#file_stack_3, #file_stack_8"
	}, {
		src: "swiffys/paper_stacking_4.js",
		b: "#file_stack_4"
	}, {
		src: "swiffys/paper_stacking_6.js",
		b: "#file_stack_6"
	}, {
		src: "swiffys/paper_stacking_7.js",
		b: "#file_stack_7"
	}, {
		src: "swiffys/cat.js",
		b: "#schrodingers_cat, #schrodingers_cat_clone"
	}, {
		src: "file-tile_1x.png",
		w: dd
	}, {
		src: "file-tile_2x.png",
		w: dd
	}, {
		src: "svg/open-file-string-theory.svg",
		a: "#cabinet_1_drawer"
	}, {
		src: "svg/open-file-p-brane.svg",
		a: "#cabinet_2_drawer"
	}, {
		src: "svg/open-file-string.svg",
		a: "#cabinet_3_drawer"
	}, {
		src: "svg/open-file-theory.svg",
		a: "#cabinet_4_drawer"
	}, {
		src: "svg/open-file-physics.svg",
		a: "#cabinet_5_drawer"
	}, {
		src: "svg/open-file-cats.svg",
		a: "#cabinet_6_drawer"
	}, {
		src: "svg/grid-on-file.svg",
		a: "#cabinet_2_file, #cabinet_2_file_clone"
	}, {
		src: "svg/image-on-file.svg",
		a: "#cabinet_3_file, #cabinet_3_file_clone"
	}, {
		src: "svg/text-on-file.svg",
		a: "#cabinet_4_file, #cabinet_4_file_clone"
	}, {
		src: "svg/blocks-on-file.svg",
		a: "#cabinet_5_file, #cabinet_5_file_clone"
	}, {
		src: "svg/results/browser.svg",
		a: "#browser_example img.main"
	}, {
		src: "svg/results/mobile.svg",
		a: "#mobile_example img.main"
	}, {
		src: "svg/results/tablet.svg",
		a: "#tablet_example img.main"
	}, {
		src: "svg/asterix.svg",
		a: "#rank_asterix img"
	}, {
		src: "svg/sketchy-arrow-down.svg",
		a: "#algorithms_note_2 img"
	}, {
		src: "svg/microphone.svg",
		a: "#search_bar_icon"
	}, {
		src: "svg/search-icon.svg",
		a: "#search_button_icon img"
	}, {
		src: "svg/conveyor-belt.svg",
		ja: "#algorithms_content .uth-content.bottom"
	}, {
		src: "svg/search-lab-1.svg",
		a: ".lab_0 .illustration img"
	}, {
		src: "svg/search-lab-2.svg",
		a: ".lab_1 .illustration img"
	}, {
		src: "svg/search-lab-3.svg",
		a: ".lab_2 .illustration img"
	}, {
		src: "svg/search-lab-4.svg",
		a: ".lab_3 .illustration img"
	}, {
		src: "svg/search-lab-5.svg",
		a: ".lab_4 .illustration img"
	}, {
		src: "svg/search-lab-cta.svg",
		a: "#explore_lab_icon"
	}, {
		src: "svg/search-lab-cta-hover.svg",
		a: "#explore_lab_icon_hover"
	}, {
		src: "svg/results/knowledgepanel-hover-a.svg",
		a: "#knowledgepanel_panel_a"
	}, {
		src: "svg/results/knowledgepanel-hover-b.svg",
		a: "#knowledgepanel_panel_b"
	}, {
		src: "svg/results/snippet-hover.svg",
		a: "#snippet_hover"
	}, {
		src: "svg/results/news-hover.svg",
		a: "#news_hover"
	}, {
		src: "svg/results/mobile-hover.svg",
		a: "#mobile_hover"
	}, {
		src: "svg/results/mobile-knowledgepanel.svg",
		a: "#mobile_knowledgepanel"
	}, {
		src: "svg/results/mobile-voice.svg",
		a: "#mobile_voice"
	}, {
		src: "svg/results/weather-hover.svg",
		a: "#weather_hover"
	}, {
		src: "svg/results/video-hover.svg",
		a: "#video_hover"
	}, {
		src: "svg/results/images-hover.svg",
		a: "#images_hover"
	}, {
		src: "svg/results/related-hover.svg",
		a: "#related_hover"
	}, {
		src: "svg/modal-close-button.svg",
		a: ".modal-close img"
	}, {
		src: "svg/modal-arrow-prev.svg",
		a: ".modal-prev img"
	}, {
		src: "svg/modal-arrow-next.svg",
		a: ".modal-next img"
	}]);
	(new Dc("types_of_ranking")).K();
	(new Dc("types_of_rewrites")).K();
	(new Dc("the_search_lab")).K();
	var a = [new $("twoLeftOne"), new $("twoRightOne"), new $("twoLeftTwo"), new $("twoRightTwo"), new $("twoLeftThree"), new $("twoRightThree"),
	new $("twoLeftFour"), new $("twoRightFour"), new $("twoLeftFive"), new $("twoRightFive"), new $("twoLeftSix"), new $("twoRightSix")];
	this.Ha = function() {
		for (var b = 0; b < a.length; b++) a[b].setPosition(1)
	};
	this.sa = function() {
		function a(b) {
			"results examples" === b.name && (e(), d.r.va())
		}
		function c(a) {
			d.r.Ga(a.startTime, a.j)
		}
		function e() {
			for (var a = 0; 7 >= a; a++) {
				var b = Q("file_stack_" + a);
				b && (b.style.display = "none")
			}
		}
		this.r = new zc;
		var d = this;
		this.R = [{
			name: "programs and formulas",
			e: 2609,
			h: 2909,
			g: 3431,
			startTime: 0,
			j: 2500,
			n: c,
			o: a
		}, {
			name: "as you search",
			e: 3431,
			h: 3431,
			g: 3891,
			startTime: 3E3,
			j: 6800,
			n: c,
			o: a
		}, {
			name: "algorithms get to work",
			e: 3891,
			h: 3891,
			g: 4594,
			startTime: 6900,
			j: 10400,
			n: c,
			o: a
		}, {
			name: "clues and based on the index",
			e: 4594,
			h: 4594,
			g: 5284,
			startTime: 10500,
			j: 13500,
			n: c,
			o: a
		}, {
			name: "conveyor",
			e: 5284,
			h: 5284,
			g: 5900,
			startTime: 13500,
			j: 26900,
			n: c,
			o: function(c) {
				e();
				a(c)
			}
		}, {
			name: "results examples",
			e: 6500,
			h: 6592,
			g: 7200,
			startTime: 36E3,
			j: 39E3,
			n: c,
			o: a
		}];
		new Cc("string_theory", [{
			x: 0,
			y: 0
		}, {
			x: 150,
			y: -10
		}, {
			x: 285,
			y: 200
		}]);
		var f = Q("string_theory");
		vc(f);
		for (var f = f.getElementsByTagName("span"), h = 0; h < f.length; h++) {
			var g = f[h];
			g.id = "string_theory_letter_" + (h + 1);
			N(g, "hidden-for-animation")
		}
	}
}
ja($c, Tc);
Qc.two = [
	["algorithms_note_2 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 38200,
		easing: "EASING.LIN"
	}, "#algorithms_note_2"],
	["algorithms_note_2", {
		fromValues: {
			translateY: -40
		},
		toValues: {
			translateY: 0
		},
		duration: 400,
		delay: 38200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#algorithms_note_2"],
	["algorithms_part_5 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 36500,
		easing: "EASING.LIN"
	}, "#algorithms_part_5"],
	["algorithms_part_5", {
		fromValues: {
			translateX: 100
		},
		toValues: {
			translateX: 0
		},
		duration: 1E3,
		delay: 36500,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#algorithms_part_5"],
	["tablet_example", {
		fromValues: {
			opacity: 1,
			translateX: 120
		},
		toValues: {
			opacity: 1,
			translateX: 0
		},
		duration: 1700,
		delay: 36200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#tablet_example"],
	["browser_example", {
		fromValues: {
			opacity: 1,
			translateY: -120
		},
		toValues: {
			opacity: 1,
			translateY: 0
		},
		duration: 1700,
		delay: 36200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#browser_example"],
	["mobile_example", {
		fromValues: {
			opacity: 1,
			translateY: 120
		},
		toValues: {
			opacity: 1,
			translateY: 0
		},
		duration: 1700,
		delay: 36200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#mobile_example"],
	["file_stack_8", {
		fromValues: {
			translateY: 0
		},
		toValues: {
			translateY: 300
		},
		duration: 400,
		delay: 26420,
		easing: "EASING.LIN"
	}, "#file_stack_8"],
	["file_stack_8_derp", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 25250,
		easing: "EASING.LIN"
	}, "#file_stack_8"],
	["universal_search_circle", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 25250,
		easing: "EASING.LIN"
	}, "#universal_search_circle"],
	["file_stack_7", {
		fromValues: {
			translateX: 0
		},
		toValues: {
			translateX: -560
		},
		duration: 800,
		delay: 24450,
		easing: "EASING.LIN"
	}, "#file_stack_7"],
	["file_stack_7_derp", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 23270,
		easing: "EASING.LIN"
	}, "#file_stack_7"],
	["translation_circle", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 23270,
		easing: "EASING.LIN"
	}, "#translation_circle"],
	["file_stack_6", {
		fromValues: {
			translateY: 0
		},
		toValues: {
			translateY: 305
		},
		duration: 700,
		delay: 22570,
		easing: "EASING.LIN"
	},
		"#file_stack_6"],
	["file_stack_6_derp", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 21400,
		easing: "EASING.LIN"
	}, "#file_stack_6"],
	["personalization_circle", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 21400,
		easing: "EASING.LIN"
	}, "#personalization_circle"],
	["file_stack_4", {
		fromValues: {
			translateX: 0
		},
		toValues: {
			translateX: 695
		},
		duration: 800,
		delay: 20600,
		easing: "EASING.LIN"
	}, "#file_stack_4"],
	["safe_search_circle", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 19380,
		easing: "EASING.LIN"
	}, "#safe_search_circle"],
	["file_stack_4_derp", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 19380,
		easing: "EASING.LIN"
	}, "#file_stack_4"],
	["file_stack_3", {
		fromValues: {
			translateY: 0
		},
		toValues: {
			translateY: 245
		},
		duration: 400,
		delay: 18980,
		easing: "EASING.LIN"
	}, "#file_stack_3"],
	["freshness_circle", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 17760,
		easing: "EASING.LIN"
	}, "#freshness_circle"],
	["file_stack_3_derp", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 17760,
		easing: "EASING.LIN"
	}, "#file_stack_3"],
	["file_stack_2", {
		fromValues: {
			translateX: 0
		},
		toValues: {
			translateX: -560
		},
		duration: 800,
		delay: 16970,
		easing: "EASING.LIN"
	}, "#file_stack_2"],
	["cabinet_3_file_clone2 fade", {
		fromValues: {
			opacity: 1
		},
		toValues: {
			opacity: 0
		},
		duration: 32,
		delay: 15950,
		easing: "EASING.LIN"
	}, "#cabinet_3_file_clone"],
	["cabinet_6_file_clone2 fade", {
		fromValues: {
			opacity: 1
		},
		toValues: {
			opacity: 0
		},
		duration: 32,
		delay: 15950,
		easing: "EASING.LIN"
	}, "#cabinet_6_file_clone"],
	["cabinet_4_file_clone2 fade", {
		fromValues: {
			opacity: 1
		},
		toValues: {
			opacity: 0
		},
		duration: 32,
		delay: 15950,
		easing: "EASING.LIN"
	}, "#cabinet_4_file_clone"],
	["cabinet_1_file_clone2 fade", {
		fromValues: {
			opacity: 1
		},
		toValues: {
			opacity: 0
		},
		duration: 32,
		delay: 15950,
		easing: "EASING.LIN"
	}, "#cabinet_1_file_clone"],
	["cabinet_2_file_clone2 fade", {
		fromValues: {
			opacity: 1
		},
		toValues: {
			opacity: 0
		},
		duration: 32,
		delay: 15950,
		easing: "EASING.LIN"
	}, "#cabinet_2_file_clone"],
	["cabinet_5_file_clone2 fade", {
		fromValues: {
			opacity: 1
		},
		toValues: {
			opacity: 0
		},
		duration: 32,
		delay: 15950,
		easing: "EASING.LIN"
	}, "#cabinet_5_file_clone"],
	["page_quality_circle", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 15800,
		easing: "EASING.LIN"
	}, "#page_quality_circle"],
	["file_stack_2_derp", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 15800,
		easing: "EASING.LIN"
	}, "#file_stack_2"],
	["cabinet_1_file_clone2", {
		fromValues: {
			translateY: 285,
			translateX: 660
		},
		toValues: {
			translateY: 570,
			translateX: 660
		},
		duration: 450,
		delay: 15500,
		easing: "EASING.LIN"
	}, "#cabinet_1_file_clone"],
	["cabinet_2_file_clone2", {
		fromValues: {
			translateY: 118,
			translateX: 520
		},
		toValues: {
			translateY: 403,
			translateX: 520
		},
		duration: 450,
		delay: 15500,
		easing: "EASING.LIN"
	}, "#cabinet_2_file_clone"],
	["cabinet_4_file_clone2", {
		fromValues: {
			translateY: 130,
			translateX: 145
		},
		toValues: {
			translateY: 415,
			translateX: 145
		},
		duration: 450,
		delay: 15500,
		easing: "EASING.LIN"
	}, "#cabinet_4_file_clone"],
	["cabinet_5_file_clone2", {
		fromValues: {
			translateY: 349,
			translateX: 5
		},
		toValues: {
			translateY: 634,
			translateX: 5
		},
		duration: 450,
		delay: 15500,
		easing: "EASING.LIN"
	}, "#cabinet_5_file_clone"],
	["cabinet_6_file_clone2", {
		fromValues: {
			translateY: 183,
			translateX: -122
		},
		toValues: {
			translateY: 468,
			translateX: -122
		},
		duration: 450,
		delay: 15500,
		easing: "EASING.LIN"
	}, "#cabinet_6_file_clone"],
	["cabinet_3_file_clone2", {
		fromValues: {
			translateY: 254,
			translateX: 333
		},
		toValues: {
			translateY: 539,
			translateX: 333
		},
		duration: 450,
		delay: 15500,
		easing: "EASING.LIN"
	}, "#cabinet_3_file_clone"],
	["cabinet_2_file_clone fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14400,
		easing: "EASING.LIN"
	}, "#cabinet_2_file_clone"],
	["cabinet_6_file_clone fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14400,
		easing: "EASING.LIN"
	}, "#cabinet_6_file_clone"],
	["cabinet_6_file_clone", {
		fromValues: {
			translateY: 0,
			translateX: 0
		},
		toValues: {
			translateY: 183,
			translateX: -122
		},
		duration: 1100,
		delay: 14400,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_6_file_clone"],
	["cabinet_5_file_clone fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14400,
		easing: "EASING.LIN"
	}, "#cabinet_5_file_clone"],
	["cabinet_4_file_clone", {
		fromValues: {
			translateY: 0,
			translateX: 0
		},
		toValues: {
			translateY: 130,
			translateX: 145
		},
		duration: 1100,
		delay: 14400,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_4_file_clone"],
	["cabinet_1_file_clone fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14400,
		easing: "EASING.LIN"
	}, "#cabinet_1_file_clone"],
	["cabinet_4_file_clone fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14400,
		easing: "EASING.LIN"
	}, "#cabinet_4_file_clone"],
	["cabinet_3_file_clone", {
		fromValues: {
			translateY: 0,
			translateX: 0
		},
		toValues: {
			translateY: 254,
			translateX: 333
		},
		duration: 1100,
		delay: 14400,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_3_file_clone"],
	["cabinet_3_file_clone fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14400,
		easing: "EASING.LIN"
	}, "#cabinet_3_file_clone"],
	["cabinet_2_file_clone", {
		fromValues: {
			translateY: 0,
			translateX: 0
		},
		toValues: {
			translateY: 118,
			translateX: 520
		},
		duration: 1100,
		delay: 14400,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_2_file_clone"],
	["cabinet_1_file_clone", {
		fromValues: {
			translateY: 0,
			translateX: 0
		},
		toValues: {
			translateY: 285,
			translateX: 660
		},
		duration: 1100,
		delay: 14400,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_1_file_clone"],
	["cabinet_5_file_clone", {
		fromValues: {
			translateY: 0,
			translateX: 0
		},
		toValues: {
			translateY: 349,
			translateX: 5
		},
		duration: 1100,
		delay: 14400,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_5_file_clone"],
	["algorithms_part_4", {
		fromValues: {
			translateX: 100
		},
		toValues: {
			translateX: 0
		},
		duration: 1E3,
		delay: 14E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#algorithms_part_4"],
	["algorithms_part_3 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14E3,
		easing: "EASING.LIN"
	}, "#algorithms_part_3"],
	["algorithms_part_4 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 14E3,
		easing: "EASING.LIN"
	}, "#algorithms_part_4"],
	["algorithms_part_3", {
		fromValues: {
			translateX: -100
		},
		toValues: {
			translateX: 0
		},
		duration: 1E3,
		delay: 14E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#algorithms_part_3"],
	["cabinet_1_file fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12780,
		easing: "EASING.LIN"
	},
		"#cabinet_1_file"],
	["cabinet_4_file fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12780,
		easing: "EASING.LIN"
	}, "#cabinet_4_file"],
	["cabinet_3_file fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12780,
		easing: "EASING.LIN"
	}, "#cabinet_3_file"],
	["cabinet_2_file fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12780,
		easing: "EASING.LIN"
	}, "#cabinet_2_file"],
	["cabinet_6_file fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12780,
		easing: "EASING.LIN"
	}, "#cabinet_6_file"],
	["cabinet_5_file fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12780,
		easing: "EASING.LIN"
	}, "#cabinet_5_file"],
	["cabinet_3_file", {
		fromValues: {
			translateY: 43
		},
		toValues: {
			translateY: 0
		},
		duration: 600,
		delay: 12750,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#cabinet_3_file"],
	["cabinet_2_file", {
		fromValues: {
			translateY: 43
		},
		toValues: {
			translateY: 0
		},
		duration: 600,
		delay: 12750,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#cabinet_2_file"],
	["cabinet_6_file", {
		fromValues: {
			translateY: 43
		},
		toValues: {
			translateY: 0
		},
		duration: 600,
		delay: 12750,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#cabinet_6_file"],
	["cabinet_1_file", {
		fromValues: {
			translateY: 43
		},
		toValues: {
			translateY: 0
		},
		duration: 600,
		delay: 12750,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#cabinet_1_file"],
	["cabinet_4_file", {
		fromValues: {
			translateY: 43
		},
		toValues: {
			translateY: 0
		},
		duration: 600,
		delay: 12750,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#cabinet_4_file"],
	["cabinet_5_file", {
		fromValues: {
			translateY: 43
		},
		toValues: {
			translateY: 0
		},
		duration: 600,
		delay: 12750,
		easing: "EASING.EXPONENTIAL.OUT"
	},
		"#cabinet_5_file"],
	["cabinet_5_drawer", {
		fromValues: {
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 300,
		delay: 12300,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_5_drawer"],
	["cabinet_5_drawer fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12300,
		easing: "EASING.LIN"
	}, "#cabinet_5_drawer"],
	["cabinet_6_drawer", {
		fromValues: {
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 300,
		delay: 12200,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_6_drawer"],
	["cabinet_6_drawer fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12200,
		easing: "EASING.LIN"
	}, "#cabinet_6_drawer"],
	["cabinet_3_drawer fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12100,
		easing: "EASING.LIN"
	}, "#cabinet_3_drawer"],
	["cabinet_3_drawer", {
		fromValues: {
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 300,
		delay: 12100,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_3_drawer"],
	["cabinet_2_drawer", {
		fromValues: {
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 300,
		delay: 12E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#cabinet_2_drawer"],
	["cabinet_2_drawer fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 12E3,
		easing: "EASING.LIN"
	}, "#cabinet_2_drawer"],
	["cabinet_4_drawer", {
		fromValues: {
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 300,
		delay: 11900,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#cabinet_4_drawer"],
	["cabinet_4_drawer fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 11900,
		easing: "EASING.LIN"
	}, "#cabinet_4_drawer"],
	["cabinet_1_drawer fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 11800,
		easing: "EASING.LIN"
	}, "#cabinet_1_drawer"],
	["cabinet_1_drawer", {
		fromValues: {
			width: 128,
			height: 128,
			marginLeft: 16,
			marginTop: 16
		},
		toValues: {
			width: 160,
			height: 160,
			marginLeft: 0,
			marginTop: 0
		},
		duration: 300,
		delay: 11800,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#cabinet_1_drawer"],
	["algorithms_part_2b fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 10500,
		easing: "EASING.LIN"
	}, "#algorithms_part_2b"],
	["algorithms_part_2b", {
		fromValues: {
			translateX: 100
		},
		toValues: {
			translateX: 0
		},
		duration: 1E3,
		delay: 10500,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#algorithms_part_2b"],
	["twoRightSix", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1100,
		delay: 9200,
		easing: "EASING.LIN"
	}, "#twoRightSix"],
	["twoLeftSix", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1100,
		delay: 9200,
		easing: "EASING.LIN"
	}, "#twoLeftSix"],
	["twoRightFive", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 8400,
		easing: "EASING.LIN"
	}, "#twoRightFive"],
	["twoLeftFive", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 8400,
		easing: "EASING.LIN"
	}, "#twoLeftFive"],
	["clue_4 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 8350,
		easing: "EASING.LIN"
	}, "#clue_4"],
	["clue_4", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 1E3,
		delay: 8350,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#clue_4"],
	["clue_3 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 8150,
		easing: "EASING.LIN"
	}, "#clue_3"],
	["clue_3", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 1E3,
		delay: 8150,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#clue_3"],
	["clue_6 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 7950,
		easing: "EASING.LIN"
	}, "#clue_6"],
	["clue_6", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 1E3,
		delay: 7950,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#clue_6"],
	["clue_1", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 1E3,
		delay: 7750,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#clue_1"],
	["clue_1 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 7750,
		easing: "EASING.LIN"
	}, "#clue_1"],
	["twoLeftFour", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 7600,
		easing: "EASING.LIN"
	}, "#twoLeftFour"],
	["twoRightFour", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 7600,
		easing: "EASING.LIN"
	}, "#twoRightFour"],
	["clue_5 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 7550,
		easing: "EASING.LIN"
	}, "#clue_5"],
	["clue_5", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 1E3,
		delay: 7550,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#clue_5"],
	["clue_2 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 7350,
		easing: "EASING.LIN"
	}, "#clue_2"],
	["clue_2", {
		fromValues: {
			scale: 0
		},
		toValues: {
			scale: 1
		},
		duration: 1E3,
		delay: 7350,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#clue_2"],
	["algorithms_part_2", {
		fromValues: {
			translateX: -100
		},
		toValues: {
			translateX: 0
		},
		duration: 1E3,
		delay: 6900,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#algorithms_part_2"],
	["algorithms_part_2 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 6900,
		easing: "EASING.LIN"
	}, "#algorithms_part_2"],
	["twoRightThree", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 6800,
		easing: "EASING.LIN"
	}, "#twoRightThree"],
	["twoLeftThree", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 800,
		delay: 6800,
		easing: "EASING.LIN"
	}, "#twoLeftThree"],
	["string_theory_ghost fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 0.5
		},
		duration: 32,
		delay: 5600,
		easing: "EASING.LIN"
	}, "#string_theory_ghost"],
	["string_theory arc", {
		fromValues: {
			position: 0,
			scale: 1
		},
		toValues: {
			position: 1,
			scale: 0.8
		},
		duration: 800,
		delay: 5800,
		easing: "EASING.EXPONENTIAL.IN"
	}, "#string_theory"],
	["string_theory fade2", {
		fromValues: {
			opacity: 1
		},
		toValues: {
			opacity: 0
		},
		duration: 125,
		delay: 6550,
		easing: "EASING.LIN"
	}, "#string_theory"],
	["twoRightTwo", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1300,
		delay: 5500,
		easing: "EASING.LIN"
	}, "#twoRightTwo"],
	["twoLeftTwo", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1300,
		delay: 5500,
		easing: "EASING.LIN"
	}, "#twoLeftTwo"],
	["string_theory_letter_13", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4600,
		easing: "EASING.LIN"
	}, "#string_theory_letter_13"],
	["string_theory_letter_12", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4550,
		easing: "EASING.LIN"
	},
		"#string_theory_letter_12"],
	["string_theory_letter_11", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4500,
		easing: "EASING.LIN"
	}, "#string_theory_letter_11"],
	["string_theory_letter_10", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4450,
		easing: "EASING.LIN"
	}, "#string_theory_letter_10"],
	["string_theory_letter_9", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4400,
		easing: "EASING.LIN"
	}, "#string_theory_letter_9"],
	["string_theory_letter_8", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4350,
		easing: "EASING.LIN"
	}, "#string_theory_letter_8"],
	["string_theory_letter_7", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4300,
		easing: "EASING.LIN"
	}, "#string_theory_letter_7"],
	["string_theory_letter_6", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4250,
		easing: "EASING.LIN"
	}, "#string_theory_letter_6"],
	["string_theory_letter_5", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4200,
		easing: "EASING.LIN"
	}, "#string_theory_letter_5"],
	["string_theory_letter_4", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4150,
		easing: "EASING.LIN"
	}, "#string_theory_letter_4"],
	["string_theory_letter_3", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4100,
		easing: "EASING.LIN"
	}, "#string_theory_letter_3"],
	["string_theory_letter_2", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4050,
		easing: "EASING.LIN"
	}, "#string_theory_letter_2"],
	["string_theory_letter_1", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 15,
		delay: 4E3,
		easing: "EASING.LIN"
	}, "#string_theory_letter_1"],
	["twoRightOne", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 2E3,
		delay: 3500,
		easing: "EASING.LIN"
	}, "#twoRightOne"],
	["twoLeftOne", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 2E3,
		delay: 3500,
		easing: "EASING.LIN"
	}, "#twoLeftOne"],
	["algorithms_part_1 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 3010,
		easing: "EASING.LIN"
	}, "#algorithms_part_1"],
	["search_bar fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 3010,
		easing: "EASING.LIN"
	}, "#search_bar"],
	["search_button fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 3010,
		easing: "EASING.LIN"
	}, "#search_button"],
	["algorithms_part_1", {
		fromValues: {
			translateY: -30
		},
		toValues: {
			translateY: 0
		},
		duration: 500,
		delay: 3E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#algorithms_part_1"],
	["search_bar", {
		fromValues: {
			translateX: -50
		},
		toValues: {
			translateX: 0
		},
		duration: 800,
		delay: 3E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#search_bar"],
	["search_button", {
		fromValues: {
			translateX: 50
		},
		toValues: {
			translateX: 0
		},
		duration: 800,
		delay: 3E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#search_button"],
	["to_deliver", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 2200,
		easing: "EASING.LIN"
	}, "#to_deliver"],
	["formulas", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 1500,
		easing: "EASING.LIN"
	}, "#formulas"],
	["amper", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 1100,
		easing: "EASING.LIN"
	}, "#amper"],
	["programs", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 700,
		easing: "EASING.LIN"
	}, "#programs"],
	["we_write fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 10,
		easing: "EASING.LIN"
	}, "#we_write"],
	["we_write", {
		fromValues: {
			translateY: -30
		},
		toValues: {
			translateY: 0
		},
		duration: 400,
		delay: 0,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#we_write"]
];
var fd = {}, gd = "//docs.google.com/a/google.com/spreadsheet/",
	gd = gd + "tq?key=0Au8RnHFj1g_IdEpET1NMNHRPRHk1QWpaZUVUWnVfbEE&",
	gd = gd + "transpose=0&headers=1&range=A1%3AB342&gid=12&pub=1";
fd.appeals = {
	containerId: "number_of_appeals_popup_graph",
	dataSourceUrl: gd,
	options: {
		vAxes: [{
			titleTextStyle: {
				color: "#222",
				italic: q,
				fontSize: "9"
			},
			useFormatFromData: q,
			viewWindowMode: "pretty",
			textStyle: {
				color: "#b7b7b7",
				fontSize: "10"
			},
			viewWindow: {}
		}, {
			useFormatFromData: q,
			viewWindowMode: "pretty",
			viewWindow: {}
		}],
		series: {
			"0": {
				pointSize: 2
			}
		},
		booleanRole: "certainty",
		legendTextStyle: {
			color: "#b7b7b7",
			fontSize: 12
		},
		animation: {
			duration: 0
		},
		legend: "none",
		hAxis: {
			titleTextStyle: {
				color: "#222",
				italic: q,
				fontSize: "12"
			},
			useFormatFromData: q,
			slantedTextAngle: 30,
			slantedText: q,
			viewWindowMode: "pretty",
			textStyle: {
				color: "none",
				fontSize: "9"
			},
			viewWindow: {}
		},
		tooltip: {},
		isStacked: s,
		width: 920,
		height: 403
	},
	state: {},
	chartType: "AreaChart",
	chartName: "Chart 2"
};
var hd = "//docs.google.com/a/google.com/spreadsheet/",
	hd = hd + "tq?key=0Au8RnHFj1g_IdEpET1NMNHRPRHk1QWpaZUVUWnVfbEE&",
	hd = hd + "transpose=0&headers=1&range=A1%3AM99&gid=0&pub=1";
fd.manual = {
	containerId: "manual_action_graph_popup_graph",
	dataSourceUrl: hd,
	options: {
		series: {
			"0": {
				pointSize: 2
			},
			1: {
				pointSize: 2
			},
			2: {
				pointSize: 2
			},
			3: {
				pointSize: 2
			},
			4: {
				pointSize: 2
			},
			5: {
				pointSize: 2
			},
			6: {
				pointSize: 2
			},
			7: {
				pointSize: 2
			},
			8: {
				pointSize: 2
			},
			9: {
				pointSize: 2
			},
			10: {
				pointSize: 2
			},
			11: {
				pointSize: 2
			}
		},
		legendTextStyle: {
			bold: s,
			color: "#b7b7b7",
			fontSize: "10"
		},
		animation: {
			duration: 0
		},
		backgroundColor: "#ffffff",
		width: 1032,
		hAxis: {
			useFormatFromData: q,
			slantedTextAngle: 30,
			slantedText: q,
			viewWindowMode: "pretty",
			textStyle: {
				color: "none",
				fontSize: "9"
			},
			viewWindow: {}
		},
		vAxes: [{
			titleTextStyle: {
				color: "#222",
				italic: q,
				fontSize: "9"
			},
			useFormatFromData: q,
			title: r,
			minValue: r,
			viewWindowMode: "pretty",
			textStyle: {
				color: "#b7b7b7",
				fontSize: "9"
			},
			viewWindow: {
				min: r,
				max: r
			},
			maxValue: r
		}, {
			useFormatFromData: q,
			viewWindowMode: "pretty",
			viewWindow: {}
		}],
		booleanRole: "certainty",
		height: 452,
		domainAxis: {
			direction: 1
		},
		legend: "right",
		useFirstColumnAsDomain: q,
		isStacked: s
	},
	state: {},
	chartType: "AreaChart",
	chartName: "Chart 1"
};
var id = "//docs.google.com/a/google.com/spreadsheet/",
	id = id + "tq?key=0Au8RnHFj1g_IdEpET1NMNHRPRHk1QWpaZUVUWnVfbEE&",
	id = id + "transpose=0&headers=1&range=A1%3AD72&gid=2&pub=1";
fd.notifications = {
	containerId: "number_of_notifications_popup_graph",
	dataSourceUrl: id,
	options: {
		vAxes: [{
			titleTextStyle: {
				color: "#ff0000",
				italic: q,
				fontSize: "7"
			},
			useFormatFromData: q,
			minValue: r,
			viewWindowMode: "pretty",
			textStyle: {
				color: "#b7b7b7",
				fontSize: "10"
			},
			viewWindow: {
				min: r,
				max: r
			},
			maxValue: r
		}, {
			useFormatFromData: q,
			viewWindowMode: "pretty",
			viewWindow: {}
		}],
		series: {
			"0": {
				pointSize: 2,
				targetAxisIndex: 0,
				hasAnnotations: q,
				lineWidth: 2,
				annotations: {
					textStyle: {
						bold: s,
						color: "#999999",
						fontSize: "8"
					}
				},
				areaOpacity: "0.3"
			},
			5: {
				hasAnnotations: q
			},
			6: {
				hasAnnotations: q
			},
			37: {
				hasAnnotations: q
			},
			40: {
				hasAnnotations: q
			},
			43: {
				hasAnnotations: q
			},
			45: {
				hasAnnotations: q
			},
			46: {},
			47: {
				hasAnnotations: q
			},
			48: {},
			49: {
				hasAnnotations: q
			},
			50: {
				hasAnnotations: q
			},
			51: {
				hasAnnotations: q
			},
			52: {},
			53: {},
			54: {}
		},
		booleanRole: "certainty",
		legendTextStyle: {
			color: "#000000",
			fontSize: "12"
		},
		animation: {
			duration: 0
		},
		backgroundColor: "#ffffff",
		legend: "none",
		hAxis: {
			titleTextStyle: {
				color: "#000000",
				italic: q,
				fontSize: "7"
			},
			useFormatFromData: q,
			viewWindowMode: "pretty",
			textStyle: {
				color: "none",
				fontSize: "9"
			},
			viewWindow: {}
		},
		isStacked: s,
		width: 920,
		height: 403
	},
	state: {},
	chartType: "AreaChart",
	chartName: "Chart 2"
};

function jd() {
	function a(a, b, d) {
		var e = fb(a.target, "uth-popup");
		a = fb(a.target, "open-popup");
		d = (d || 0) === Nb;
		if (!(a && a.id + "_popup" === f.id) && (d || qa(Pa(b), "close-popup") || e === r && b.id === c.id)) {
			var k = f;
			O(k, "active");
			setTimeout(function() {
				k.style.display = "none";
				Fb(h);
				Fb(g)
			}, 250)
		}
	}
	function b(b, d) {
		b && b.preventDefault();
		f = Q(d.id + "_popup");
		f.style.display = "block";
		setTimeout(function() {
			N(f, "active");
			setTimeout(function() {
				h = Y(c, a);
				g = T(document, qb, function(b) {
					var c = b.keyCode || b.which;
					c === Nb && a(b, d, c)
				})
			}, 250);
			var b = ib(f, "chart");
			b && fd[b] && ((new google.visualization.ChartWrapper(fd[b])).draw(), delete fd[b])
		}, 20)
	}
	for (var c = Q("uth_app") || document.body, e = Za("uth-popup"), d = Za("open-popup"), f, h, g, k = 0; k < e.length; k++) Y(ab(e[k]), a);
	for (e = 0; e < d.length; e++) Y(d[e], b, q)
}
var kd = function() {
	function a() {
		e = e || Q("number_of_seconds");
		d = d || Q("searches_count_num");
		f = f || Q("searches_count_unit");
		var a = ~~ (((new Date).getTime() - h) / 1E3 % 86400),
			k = a * b + "";
		f.innerHTML = " " + c[Math.ceil(k.length / 3)] || "";
		e.innerHTML = a;
		d.innerHTML = k.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
	}
	var b = ~~ (1E11 / 2592E3),
		c = " hundred thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion decillion undecillion duodecillion tredecillion quattuordecillion quindecillion sexdecillion septendecillion octodecillion novemdecillion vigintillion".split(" "),
		e, d, f, h = (new Date).getTime();
	return {
		hc: a,
		rb: function() {
			a();
			setInterval(a, 100)
		}
	}
}();

function ad() {
	Tc.call(this, "three", [{
		src: "swiffys/spam_notification.js",
		b: "#spam_notifications_icon"
	}, {
		src: "swiffys/fixing.js",
		b: "#spam_appeals_icon"
	}, {
		src: "svg/spam/caution-tape-1.svg",
		a: "#caution_tape_1 img"
	}, {
		src: "svg/spam/caution-tape-2.svg",
		a: "#caution_tape_2 img"
	}, {
		src: "svg/spam/caution-tape-3.svg",
		a: "#caution_tape_3 img"
	}, {
		src: "svg/spam/caution-tape-4.svg",
		a: "#caution_tape_4 img"
	}, {
		src: "svg/spam/number-of-notifications-icon.svg",
		a: "#number_of_notifications img"
	}, {
		src: "svg/spam/spam-appeal.svg",
		a: "#spam_appeals_icon img"
	}, {
		src: "svg/spam/number-of-appeal-icon.svg",
		a: "#number_of_appeals img"
	}, {
		src: "svg/sketchy-arrow-right.svg",
		a: "#know_your_spam img"
	}, {
		src: "svg/spam/pure-spam-hover.svg",
		a: ".type_0 .illustration img, #types_of_spam_index0 img"
	}, {
		src: "svg/spam/stuffing.svg",
		a: "#types_of_spam_index1 .default"
	}, {
		src: "svg/spam/stuffing-hover.svg",
		a: ".type_1 .illustration img, #types_of_spam_index1 .hover"
	}, {
		src: "svg/spam/user-generated.svg",
		a: "#types_of_spam_index2 .default"
	}, {
		src: "svg/spam/user-generated-hover.svg",
		a: ".type_2 .illustration img, #types_of_spam_index2 .hover"
	}, {
		src: "svg/spam/parking.svg",
		a: "#types_of_spam_index3 .default"
	}, {
		src: "svg/spam/parking-hover.svg",
		a: ".type_3 .illustration img, #types_of_spam_index3 .hover"
	}, {
		src: "svg/spam/thin.svg",
		a: "#types_of_spam_index4 .default"
	}, {
		src: "svg/spam/thin-hover.svg",
		a: ".type_4 .illustration img, #types_of_spam_index4 .hover"
	}, {
		src: "svg/spam/unnatural-links-to.svg",
		a: "#types_of_spam_index5 .default"
	}, {
		src: "svg/spam/unnatural-links-to-hover.svg",
		a: ".type_5 .illustration img, #types_of_spam_index5 .hover"
	}, {
		src: "svg/spam/spammy-host.svg",
		a: "#types_of_spam_index6 .default"
	}, {
		src: "svg/spam/spammy-host-hover.svg",
		a: ".type_6 .illustration img, #types_of_spam_index6 .hover"
	}, {
		src: "svg/spam/cloaking.svg",
		a: "#types_of_spam_index7 .default"
	}, {
		src: "svg/spam/cloaking-hover.svg",
		a: ".type_7 .illustration img, #types_of_spam_index7 .hover"
	}, {
		src: "svg/spam/hacked.svg",
		a: "#types_of_spam_index8 .default"
	}, {
		src: "svg/spam/hacked-hover.svg",
		a: ".type_8 .illustration img, #types_of_spam_index8 .hover"
	}, {
		src: "svg/spam/unnatural-links-from.svg",
		a: "#types_of_spam_index9 .default"
	}, {
		src: "svg/spam/unnatural-links-from-hover.svg",
		a: ".type_9 .illustration img, #types_of_spam_index9 .hover"
	}, {
		src: "svg/sketchy-arrow-up.svg",
		a: "#searches_performed_over_time img"
	}, {
		src: "svg/modal-arrow-next.svg",
		a: "#types_of_spam_nav_next img"
	}, {
		src: "svg/modal-arrow-prev.svg",
		a: "#types_of_spam_nav_prev img"
	}, {
		src: "svg/modal-close-button.svg",
		a: ".close-popup img, #close_types_of_spam img"
	}]);
	(new Dc("types_of_spam")).K();
	new jd;
	this.R = [{
		name: "counter",
		e: 9576,
		h: 9576,
		g: 1E4,
		startTime: 11E3,
		j: 11E3,
		n: function() {
			function a(b) {
				b || (b = X());
				e.update(b);
				e.i || requestAnimationFrame(a)
			}
			kd.rb();
			var b = {
				u: 40,
				opacity: 0
			}, c = Q("searches_performed_over_time");
			c.style.opacity = 0;
			V.k(c, "translateY", b.u);
			O(c, "hidden-for-animation");
			var e = (new W(b)).C({
				u: 0,
				opacity: 1
			}, 600).D(200).s(mc).B(function() {
				c.style.opacity = b.opacity;
				V.k(c, "translateY", b.u)
			}).L(function() {
				e.i = q
			});
			e.start();
			requestAnimationFrame(a)
		},
		o: function() {}
	}];
	this.sa = function() {
		function a(a) {
			"fix section" === a.name && c.r.va()
		}

		function b(a) {
			c.r.Ga(a.startTime, a.j)
		}
		this.r = new zc;
		var c = this;
		this.R.unshift({
			name: "fix section",
			e: 9E3,
			h: 9E3,
			g: 9576,
			startTime: 8500,
			j: 11E3,
			n: b,
			o: a
		});
		this.R.unshift({
			name: "notify section",
			e: 8610,
			h: 8610,
			g: 8972,
			startTime: 6200,
			j: 8400,
			n: b,
			o: a
		});
		this.R.unshift({
			name: "manual section",
			e: 8169,
			h: 8169,
			g: 8595,
			startTime: 3E3,
			j: 6100,
			n: b,
			o: a
		});
		this.R.unshift({
			name: "we fight spam",
			e: 7636,
			h: 7636,
			g: 8071,
			startTime: 0,
			j: 2E3,
			n: b,
			o: a
		})
	}
}
ja(ad, Tc);
Qc.three = [
	["caution_tape_4", {
		fromValues: {
			width: 1945,
			height: 0
		},
		toValues: {
			width: 1945,
			height: 2E3
		},
		duration: 800,
		delay: 9900,
		easing: "EASING.LIN"
	}, "#caution_tape_4"],
	["spam_appeals_icon fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 9410,
		easing: "EASING.LIN"
	}, "#spam_appeals_icon"],
	["spam_appeals_icon", {
		fromValues: {
			translateY: -40
		},
		toValues: {
			translateY: 0
		},
		duration: 800,
		delay: 9400,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_appeals_icon"],
	["caution_tape_3", {
		fromValues: {
			width: 1945,
			height: 0
		},
		toValues: {
			width: 1945,
			height: 2E3
		},
		duration: 700,
		delay: 8500,
		easing: "EASING.LIN"
	}, "#caution_tape_3"],
	["notifications_text", {
		fromValues: {
			opacity: 0,
			translateX: -20
		},
		toValues: {
			opacity: 1,
			translateX: 0
		},
		duration: 300,
		delay: 6675,
		easing: "EASING.EXPONENTIAL.INOUT"
	}, "#notifications_text"],
	["spam_notifications_icon fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 7510,
		easing: "EASING.LIN"
	}, "#spam_notifications_icon"],
	["spam_notifications_icon", {
		fromValues: {
			translateY: -40
		},
		toValues: {
			translateY: 0
		},
		duration: 800,
		delay: 7500,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_notifications_icon"],
	["caution_tape_2", {
		fromValues: {
			width: 1945,
			height: 0
		},
		toValues: {
			width: 1945,
			height: 1600
		},
		duration: 800,
		delay: 6200,
		easing: "EASING.LIN"
	}, "#caution_tape_2"],
	["know_your_spam fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 5640,
		easing: "EASING.LIN"
	}, "#know_your_spam"],
	["know_your_spam", {
		fromValues: {
			translateY: -40
		},
		toValues: {
			translateY: 0
		},
		duration: 400,
		delay: 5630,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#know_your_spam"],
	["spam_icon_6 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4210,
		easing: "EASING.LIN"
	}, "#spam_icon_6"],
	["spam_icon_6", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 211,
			translateY: 190
		},
		duration: 1E3,
		delay: 4200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_6"],
	["spam_icon_9 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4210,
		easing: "EASING.LIN"
	}, "#spam_icon_9"],
	["spam_icon_9", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: -18,
			translateY: 28
		},
		duration: 1E3,
		delay: 4200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_9"],
	["spam_icon_3 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4210,
		easing: "EASING.LIN"
	}, "#spam_icon_3"],
	["spam_icon_3", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 233,
			translateY: -98
		},
		duration: 1E3,
		delay: 4200,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_3"],
	["spam_icon_8 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4110,
		easing: "EASING.LIN"
	}, "#spam_icon_8"],
	["spam_icon_8", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 36,
			translateY: 106
		},
		duration: 1E3,
		delay: 4100,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_8"],
	["spam_icon_2 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4110,
		easing: "EASING.LIN"
	}, "#spam_icon_2"],
	["spam_icon_2", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 165,
			translateY: -94
		},
		duration: 1E3,
		delay: 4100,
		easing: "EASING.EXPONENTIAL.OUT"
	},
		"#spam_icon_2"],
	["spam_icon_5 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4110,
		easing: "EASING.LIN"
	}, "#spam_icon_5"],
	["spam_icon_5", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 285,
			translateY: 155
		},
		duration: 1E3,
		delay: 4100,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_5"],
	["spam_icon_1 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4010,
		easing: "EASING.LIN"
	}, "#spam_icon_1"],
	["spam_icon_1", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 55,
			translateY: -45
		},
		duration: 1E3,
		delay: 4E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_1"],
	["spam_icon_4 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4010,
		easing: "EASING.LIN"
	}, "#spam_icon_4"],
	["spam_icon_4", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 299,
			translateY: -8
		},
		duration: 1E3,
		delay: 4E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_4"],
	["spam_icon_7 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4010,
		easing: "EASING.LIN"
	}, "#spam_icon_7"],
	["spam_icon_7", {
		fromValues: {
			scale: 0,
			translateX: 180,
			translateY: 50
		},
		toValues: {
			scale: 1,
			translateX: 131,
			translateY: 209
		},
		duration: 1E3,
		delay: 4E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_icon_7"],
	["spam_main fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 32,
		delay: 4030,
		easing: "EASING.LIN"
	}, "#spam_main"],
	["spam_main", {
		fromValues: {
			scale: 0.25,
			translateX: 121,
			translateY: -23
		},
		toValues: {
			scale: 1,
			translateX: 121,
			translateY: -23
		},
		duration: 1E3,
		delay: 4020,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_main"],
	["spam_part_1_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 10,
		delay: 4010,
		easing: "EASING.LIN"
	}, "#spam_part_1"],
	["spam_part_1", {
		fromValues: {
			translateX: -200
		},
		toValues: {
			translateX: 0
		},
		duration: 1200,
		delay: 4E3,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_part_1"],
	["spam_part_3 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 10,
		delay: 9410,
		easing: "EASING.LIN"
	}, "#spam_part_3"],
	["spam_part_3", {
		fromValues: {
			translateX: -200
		},
		toValues: {
			translateX: 0
		},
		duration: 800,
		delay: 9400,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_part_3"],
	["spam_part_2 fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 10,
		delay: 7510,
		easing: "EASING.LIN"
	}, "#spam_part_2"],
	["spam_part_2", {
		fromValues: {
			translateX: 200
		},
		toValues: {
			translateX: 0
		},
		duration: 800,
		delay: 7500,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_part_2"],
	["spam_note_1_fade", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 10,
		delay: 5640,
		easing: "EASING.LIN"
	}, "#spam_note_1"],
	["spam_note_1", {
		fromValues: {
			translateX: -200
		},
		toValues: {
			translateX: 0
		},
		duration: 400,
		delay: 5630,
		easing: "EASING.EXPONENTIAL.OUT"
	}, "#spam_note_1"],
	["caution_tape_1", {
		fromValues: {
			width: 1945,
			height: 10
		},
		toValues: {
			width: 1945,
			height: 1300
		},
		duration: 700,
		delay: 3E3,
		easing: "EASING.LIN"
	}, "#caution_tape_1"],
	["keep_relevant", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 1800,
		easing: "EASING.LIN"
	}, "#keep_relevant"],
	["we_fight", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 200,
		easing: "EASING.LIN"
	}, "#we_fight"],
	["twenty_four_seven", {
		fromValues: {
			opacity: 0
		},
		toValues: {
			opacity: 1
		},
		duration: 1,
		delay: 1E3,
		easing: "EASING.LIN"
	}, "#twenty_four_seven"],
	["spam_notifications_icon", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 8500,
		easing: "EASING.LIN"
	}, "#spam_notifications_icon"],
	["spam_appeals_icon", {
		fromValues: {
			position: 0
		},
		toValues: {
			position: 1
		},
		duration: 1E3,
		delay: 1E4,
		easing: "EASING.LIN"
	}, "#spam_appeals_icon"]
];