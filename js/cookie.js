! function() {
    if (!window.hasCookieHinweis) {
        window.hasCookieHinweis = !0;
        var e = "CookieHinweis_agree";
        if (!(-1 < document.cookie.indexOf(e))) {
            "function" != typeof String.prototype.trim && (String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, "") });
            var t, c = {
                    isArray: function(e) { return "[object Array]" == Object.prototype.toString.call(e) },
                    isObject: function(e) { return "[object Object]" == Object.prototype.toString.call(e) },
                    each: function(e, t, n, i) {
                        if (c.isObject(e) && !i)
                            for (var o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e);
                        else
                            for (var r = 0, s = e.length; r < s; r++) t.call(n, e[r], r, e)
                    },
                    merge: function(n, e) { n && c.each(e, function(e, t) { c.isObject(e) && c.isObject(n[t]) ? c.merge(n[t], e) : n[t] = e }) },
                    bind: function(e, t) { return function() { return e.apply(t, arguments) } },
                    queryObject: function(e, t) {
                        var n, i = 0,
                            o = e;
                        for (t = t.split(".");
                            (n = t[i++]) && o.hasOwnProperty(n) && (o = o[n]);)
                            if (i === t.length) return o;
                        return null
                    },
                    setCookie: function(e, t, n) {
                        var i = new Date;
                        n = n || 30, i.setDate(i.getDate() + n), document.cookie = e + "=" + t + "; expires=" + i.toUTCString() + "; path=/"
                    },
                    addEventListener: function(e, t, n) { e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, n) }
                },
                n = {
                    build: function(e, t) {
                        var o;
                        c.isArray(e) && (e = e.join("")), o = t, e = e.replace(/\{\{(.*?)\}\}/g, function(e, t) { for (var n, i = t.split("||"); token = i.shift();) { if (token = token.trim(), '"' === token[0]) return token.slice(1, token.length - 1); if (n = c.queryObject(o, token)) return n } return "" });
                        var n, i, r, s, a = (n = e, (i = document.createElement("div")).innerHTML = n, i.children[0]);
                        return s = t, l(a, "data-cc-event", function(e, t) {
                            var n = t.split(":"),
                                i = c.queryObject(s, n[1]);
                            u(e, n[0], c.bind(i, s))
                        }), r = t, l(a, "data-cc-if", function(e, t) { c.queryObject(r, t) || e.parentNode.removeChild(e) }), a
                    }
                },
                i = {
                    options: { message: "Diese Website nutzt Cookies, um bestm&ouml;gliche Funktionalit&auml;t bieten zu k&ouml;nnen. ", agree: "Ok, verstanden", learnMore: "Mehr Informationen", link: null, container: null, theme: "dunkel-unten", markup: ['<div class="cc_banner-wrapper {{containerClasses}}">', '<div class="cc_banner cc_container cc_container--open">', '<a href="#null" data-cc-event="click:agree" class="cc_btn cc_btn_accept_all">{{options.agree}}</a>', '<p class="cc_message">{{options.message}} <a rel="nofollow" data-cc-if="options.link" class="cc_more_info" href="{{options.link || "#null"}}">{{options.learnMore}}</a></p>', "</div>", "</div>"] },
                    init: function() {
                        var e = window.CookieHinweis_options;
                        e && this.setOptions(e), this.setContainer(), this.options.theme ? this.loadTheme(this.render) : this.render()
                    },
                    setOptionsOnTheFly: function(e) { this.setOptions(e), this.render() },
                    setOptions: function(e) { c.merge(this.options, e) },
                    setContainer: function() { this.container = this.options.container ? document.querySelector(this.options.container) : document.body, this.containerClasses = "", -1 < navigator.appVersion.indexOf("MSIE 8") && (this.containerClasses += " cc_ie8") },
                    loadTheme: function(e) {
                        var t = this.options.theme; - 1 === t.indexOf(".css") && (t = "//s3.eu-central-1.amazonaws.com/website-tutor/cookiehinweis/" + t + ".css");
                        var n = document.createElement("link");
                        n.rel = "stylesheet", n.type = "text/css", n.href = t;
                        var i = !1;
                        n.onload = c.bind(function() {!i && e && (e.call(this), i = !0) }, this), document.getElementsByTagName("head")[0].appendChild(n)
                    },
                    render: function() { this.element && this.element.parentNode && (this.element.parentNode.removeChild(this.element), delete this.element), this.element = n.build(this.options.markup, this), this.container.firstChild ? this.container.insertBefore(this.element, this.container.firstChild) : this.container.appendChild(this.element) },
                    agree: function(e) { e.preventDefault && e.preventDefault(), e.returnValue = !1, this.setAgreedCookie(), this.container.removeChild(this.element) },
                    setAgreedCookie: function() { c.setCookie(e, "yes") }
                },
                o = !(u = function(t, e, n) { return c.isArray(e) ? c.each(e, function(e) { u(t, e, n) }) : void(t.addEventListener ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)) });
            (t = function() { o || "complete" != document.readyState || (i.init(), o = !0, window.update_CookieHinweis_options = c.bind(i.setOptionsOnTheFly, i)) })(), c.addEventListener(document, "readystatechange", t)
        }
    }

    function l(e, n, i) {
        var t = e.parentNode.querySelectorAll("[" + n + "]");
        c.each(t, function(e) {
            var t = e.getAttribute(n);
            i(e, t)
        }, window, !0)
    }
    var u
}();