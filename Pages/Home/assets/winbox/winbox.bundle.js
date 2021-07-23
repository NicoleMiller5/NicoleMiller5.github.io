/**
 * WinBox.js v0.2.01 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function () {
    "use strict";
    var g,
        k = document.createElement("style");
    k.innerHTML =
        "@keyframes fade-in{0%{opacity:0}to{opacity:.85}}.winbox.modal:after,.winbox.modal:before{content:''}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.max,.no-shadow{box-shadow:none}.wb-header{top:0;width:100%;height:35px;color:#fff;overflow:hidden}.wb-body{right:0;top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict}.wb-title{font-family:Arial,sans-serif;font-size:14px;padding-left:10px;cursor:move;height:35px;line-height:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-n,.wb-s{height:10px;position:absolute;left:0}.wb-n{top:-5px;right:0;cursor:n-resize}.wb-e{position:absolute;top:0;right:-5px;bottom:0;width:10px;cursor:w-resize}.wb-s,.wb-se,.wb-sw{bottom:-5px}.wb-s{right:0;cursor:n-resize}.wb-w{position:absolute;top:0;left:-5px;bottom:0;width:10px;cursor:w-resize}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;position:absolute}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-sw{left:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize}.wb-icon{float:right;height:35px;max-width:100%;text-align:center}.wb-icon *{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer;max-width:100%}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-title,.winbox.min .wb-title{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center bottom 11px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-title,body.wb-drag iframe{pointer-events:none}.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}.no-animation,body.wb-drag .winbox{transition:none}.winbox.modal:before{position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:fade-in .2s ease-out forwards;z-index:-1}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}";
    var l = document.getElementsByTagName("head")[0];
    l.firstChild ? l.insertBefore(k, l.firstChild) : l.appendChild(k);
    var m = document.createElement("div");
    m.innerHTML =
        "<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-title> </div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
    function n(a, b, c, e) {
        a.addEventListener(b, c, e || !1 === e ? e : !0);
    }
    function r(a) {
        a.stopPropagation();
        a.cancelable && a.preventDefault();
    }
    function v(a, b, c) {
        c = "" + c;
        a["_s_" + b] !== c && (a.style.setProperty(b, c), (a["_s_" + b] = c));
    }
    var x = [],
        y,
        B = 0,
        C = 0,
        D,
        E,
        F,
        I,
        N,
        P,
        Q;
    function S(a, b) {
        if (!(this instanceof S)) return new S(a);
        D || T();
        this.g = m.cloneNode(!0);
        this.body = this.g.getElementsByClassName("wb-body")[0];
        var c, e;
        if (a) {
            if (b) {
                var d = a;
                a = b;
            }
            if ("string" === typeof a) d = a;
            else {
                if ((e = a.modal)) var h = (c = "center");
                var p = a.id;
                var J = a.root;
                d = d || a.title;
                var G = a.mount;
                var f = a.html;
                var z = a.url;
                var q = a.width;
                var t = a.height;
                var w = a.minwidth;
                var A = a.minheight;
                h = a.x || h;
                c = a.y || c;
                var K = a.max;
                var u = a.top;
                var H = a.left;
                var L = a.bottom;
                var M = a.right;
                D = a.index || D;
                var Z = a.onclose;
                var aa = a.onfocus;
                var ba = a.onblur;
                var ca = a.onmove;
                var da = a.onresize;
                b = a.background;
                var R = a.border;
                var O = a["class"];
                var ea = a.splitscreen;
                b && this.setBackground(b);
                R && v(this.body, "margin", R + (isNaN(R) ? "" : "px"));
            }
        }
        this.setTitle(d || "");
        a = P;
        d = Q;
        u = u ? U(u, d) : 0;
        L = L ? U(L, d) : 0;
        H = H ? U(H, a) : 0;
        M = M ? U(M, a) : 0;
        a -= H + M;
        d -= u + L;
        q = q ? U(q, a) : (a / 2) | 0;
        t = t ? U(t, d) : (d / 2) | 0;
        w = w ? U(w, a) : 0;
        A = A ? U(A, d) : 0;
        h = h ? U(h, a, q) : H;
        c = c ? U(c, d, t) : u;
        D = D || 10;
        this.g.id = this.id = p || "winbox-" + ++B;
        this.g.className =
            "winbox" +
            (O ? " " + ("string" === typeof O ? O : O.join(" ")) : "") +
            (e ? " modal" : "");
        this.x = h;
        this.y = c;
        this.width = q;
        this.height = t;
        this.u = w;
        this.s = A;
        this.top = u;
        this.right = M;
        this.bottom = L;
        this.left = H;
        this.max = this.min = !1;
        this.j = Z;
        this.l = aa;
        this.i = ba;
        this.o = ca;
        this.m = da;
        this.v = ea;
        K ? this.maximize() : this.move().resize();
        this.focus();
        G ? this.mount(G) : f ? (this.body.innerHTML = f) : z && this.setUrl(z);
        fa(this);
        (J || y).appendChild(this.g);
    }
    S["new"] = function (a) {
        return new S(a);
    };
    function U(a, b, c) {
        "string" === typeof a &&
            ("center" === a
                ? (a = ((b - c) / 2) | 0)
                : "right" === a || "bottom" === a
                ? (a = b - c)
                : ((c = parseFloat(a)),
                  (a =
                      "%" === ("" + c !== a && a.substring(("" + c).length))
                          ? ((b / 100) * c) | 0
                          : c)));
        return a;
    }
    function T() {
        y = document.body;
        y[(I = "requestFullscreen")] ||
            y[(I = "msRequestFullscreen")] ||
            y[(I = "webkitRequestFullscreen")] ||
            y[(I = "mozRequestFullscreen")] ||
            (I = "");
        N =
            I &&
            I.replace("request", "exit")
                .replace("mozRequest", "mozCancel")
                .replace("Request", "Exit");
        n(window, "resize", function () {
            P = y.clientWidth;
            Q = y.clientHeight;
            V();
        });
        P = y.clientWidth;
        Q = y.clientHeight;
    }
    function fa(a) {
        W(a, "title");
        W(a, "n");
        W(a, "s");
        W(a, "w");
        W(a, "e");
        W(a, "nw");
        W(a, "ne");
        W(a, "se");
        W(a, "sw");
        n(a.g.getElementsByClassName("wb-min")[0], "click", function (b) {
            r(b);
            a.minimize();
        });
        n(a.g.getElementsByClassName("wb-max")[0], "click", function (b) {
            r(b);
            a.focus().maximize();
        });
        I
            ? n(
                  a.g.getElementsByClassName("wb-full")[0],
                  "click",
                  function (b) {
                      r(b);
                      a.focus().fullscreen();
                  }
              )
            : a.addClass("no-full");
        n(a.g.getElementsByClassName("wb-close")[0], "click", function (b) {
            r(b);
            a.close() || (a = null);
        });
        n(
            a.g,
            "click",
            function () {
                a.focus();
            },
            !1
        );
    }
    function X(a) {
        x.splice(x.indexOf(a), 1);
        V();
        a.removeClass("min");
        a.min = !1;
        a.g.title = "";
    }
    function V() {
        for (var a = x.length, b = {}, c = {}, e = 0, d; e < a; e++)
            (d = x[e]), (d = d.left + ":" + d.top), c[d] ? c[d]++ : (c[d] = 1);
        e = 0;
        for (var h, p; e < a; e++)
            (d = x[e]),
                (h = d.left + ":" + d.top),
                (p = Math.min((P - d.left - d.right) / c[h], 250)),
                b[h] || (b[h] = 0),
                d
                    .resize((p + 1) | 0, 35, !0)
                    .move((d.left + b[h] * p) | 0, Q - d.bottom - 35, !0),
                b[h]++;
    }
    function W(a, b) {
        function c(f) {
            r(f);
            if (a.min) a.minimize();
            else {
                if ("title" === b) {
                    var z = Date.now(),
                        q = z - C;
                    C = z;
                    if (250 > q) {
                        a.maximize();
                        return;
                    }
                }
                a.max ||
                    (y.classList.add("wb-drag"),
                    (p = f.touches) && (p = p[0])
                        ? ((f = p),
                          n(window, "touchmove", e),
                          n(window, "touchend", d))
                        : (n(window, "mousemove", e), n(window, "mouseup", d)),
                    (J = f.pageX),
                    (G = f.pageY),
                    a.focus());
            }
        }
        function e(f) {
            r(f);
            p && (f = f.touches[0]);
            var z = f.pageX;
            f = f.pageY;
            var q = z - J,
                t = f - G,
                w;
            if ("title" === b) {
                a.x += q;
                a.y += t;
                var A = (w = 1);
            } else {
                if ("e" === b || "se" === b || "ne" === b) {
                    a.width += q;
                    var K = 1;
                } else if ("w" === b || "sw" === b || "nw" === b)
                    (a.x += q), (a.width -= q), (A = K = 1);
                if ("s" === b || "se" === b || "sw" === b) {
                    a.height += t;
                    var u = 1;
                } else if ("n" === b || "ne" === b || "nw" === b)
                    (a.y += t), (a.height -= t), (w = u = 1);
            }
            if (K || u)
                K &&
                    (a.width = Math.max(
                        Math.min(a.width, P - a.x - a.right),
                        150
                    )),
                    u &&
                        (a.height = Math.max(
                            Math.min(a.height, Q - a.y - a.bottom),
                            35
                        )),
                    a.resize();
            if (A || w)
                A &&
                    (a.x = Math.max(
                        Math.min(a.x, P - a.width - a.right),
                        a.left
                    )),
                    w &&
                        (a.y = Math.max(
                            Math.min(a.y, Q - a.height - a.bottom),
                            a.top
                        )),
                    a.move();
            J = z;
            G = f;
        }
        function d(f) {
            r(f);
            y.classList.remove("wb-drag");
            p
                ? (window.removeEventListener("touchmove", e, !0),
                  window.removeEventListener("touchend", d, !0))
                : (window.removeEventListener("mousemove", e, !0),
                  window.removeEventListener("mouseup", d, !0));
        }
        var h = a.g.getElementsByClassName("wb-" + b)[0],
            p,
            J,
            G;
        n(h, "mousedown", c);
        n(h, "touchstart", c, { passive: !1 });
    }
    g = S.prototype;
    g.mount = function (a) {
        this.unmount();
        a.h || (a.h = a.parentNode);
        this.body.textContent = "";
        this.body.appendChild(a);
        return this;
    };
    g.unmount = function (a) {
        var b = this.body.firstChild;
        if (b) {
            var c = a || b.h;
            c && c.appendChild(b);
            b.h = a;
        }
        return this;
    };
    g.setTitle = function (a) {
        a = this.title = a;
        this.g.getElementsByClassName("wb-title")[0].firstChild.nodeValue = a;
        return this;
    };
    g.setBackground = function (a) {
        v(this.g, "background", a);
        return this;
    };
    g.setUrl = function (a) {
        this.body.innerHTML = '<iframe src="' + a + '"></iframe>';
        return this;
    };
    g.focus = function () {
        F !== this &&
            (v(this.g, "z-index", D++),
            this.addClass("focus"),
            F && (F.removeClass("focus"), F.i && F.i()),
            (F = this),
            this.l && this.l());
        return this;
    };
    g.hide = function () {
        return this.addClass("hide");
    };
    g.show = function () {
        return this.removeClass("hide");
    };
    g.minimize = function (a) {
        E && Y();
        !a && this.min
            ? (X(this), this.resize().move().focus())
            : !1 === a ||
              this.min ||
              (x.push(this),
              V(),
              (this.g.title = this.title),
              this.addClass("min"),
              (this.min = !0));
        this.max && (this.removeClass("max"), (this.max = !1));
        return this;
    };
    g.maximize = function (a) {
        if ("undefined" === typeof a || a !== this.max)
            this.min && X(this),
                (this.max = !this.max)
                    ? this.addClass("max")
                          .resize(
                              P - this.left - this.right,
                              Q - this.top - this.bottom,
                              !0
                          )
                          .move(this.left, this.top, !0)
                    : this.resize().move().removeClass("max");
        return this;
    };
    g.fullscreen = function (a) {
        if ("undefined" === typeof a || a !== E)
            this.min && (this.resize().move(), X(this)),
                (E && Y()) || (this.body[I](), (E = !0));
        return this;
    };
    function Y() {
        E = !1;
        if (
            document.fullscreen ||
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement
        )
            return document[N](), !0;
    }
    g.close = function (a) {
        if (this.j && this.j(a)) return !0;
        this.min && X(this);
        this.unmount();
        this.g.parentNode.removeChild(this.g);
        F === this && (F = null);
    };
    g.move = function (a, b, c) {
        a || 0 === a
            ? c ||
              ((this.x = a
                  ? (a = U(a, P - this.left - this.right, this.width))
                  : 0),
              (this.y = b
                  ? (b = U(b, Q - this.top - this.bottom, this.height))
                  : 0))
            : ((a = this.x),
              (b = this.y),
              this.v &&
                  (0 === a
                      ? this.resize(P / 2, Q)
                      : a === P - this.width && this.resize(P / 2, Q)));
        v(this.g, "transform", "translate(" + a + "px," + b + "px)");
        this.o && this.o(a, b);
        return this;
    };
    g.resize = function (a, b, c) {
        a || 0 === a
            ? c ||
              ((this.width = a ? (a = U(a, P - this.left - this.right)) : 0),
              (this.height = b ? (b = U(b, Q - this.top - this.bottom)) : 0))
            : ((a = this.width), (b = this.height));
        a = Math.max(a, this.u);
        b = Math.max(b, this.s);
        v(this.g, "width", a + "px");
        v(this.g, "height", b + "px");
        this.m && this.m(a, b);
        return this;
    };
    g.addClass = function (a) {
        this.g.classList.add(a);
        return this;
    };
    g.removeClass = function (a) {
        this.g.classList.remove(a);
        return this;
    };
    window.WinBox = S;
}.call(this));
