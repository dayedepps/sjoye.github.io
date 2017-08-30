!function(e) {
    function i(n) {
        if (a[n])
            return a[n].exports;
        var t = a[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(t.exports, t, t.exports, i),
        t.loaded = !0,
        t.exports
    }
    var a = {};
    return i.m = e,
    i.c = a,
    i.p = "",
    i(0)
}([function(e, i, a) {
    "use strict";
    function n(e, i) {
        t(e),
        d(e),
        s(e),
        l(e),
        r(e)
    }
    function t(e) {
        function i() {
            u && requestAnimFrame(i),
            n(),
            t()
        }
        function a() {
            for (d = o.width / 2,
            l = o.height / 2,
            v = [],
            r = 0; r < h; r++)
                s = {
                    x: Math.random() * o.width,
                    y: Math.random() * o.height,
                    z: Math.random() * o.width,
                    o: "0." + Math.floor(99 * Math.random()) + 1
                },
                v.push(s)
        }
        function n() {
            for (r = 0; r < h; r++)
                s = v[r],
                s.z--,
                s.z <= 0 && (s.z = o.width)
        }
        function t() {
            var e, i, n;
            for (o.width == window.innerWidth && o.width == window.innerWidth || (o.width = window.innerWidth,
            o.height = window.innerHeight,
            a()),
            0 == w && (f.fillStyle = "rgba(5,4,15,1)",
            f.fillRect(0, 0, o.width, o.height)),
            f.fillStyle = "rgba(209, 255, 255, " + c + ")",
            r = 0; r < h; r++)
                s = v[r],
                e = (s.x - d) * (m / s.z),
                e += d,
                i = (s.y - l) * (m / s.z),
                i += l,
                n = 1 * (m / s.z),
                f.fillRect(e, i, n, n),
                f.fillStyle = "rgba(209, 255, 255, " + s.o + ")"
        }
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame
        }();
        var d, l, s, r, o = document.getElementById("space"), f = o.getContext("2d"), h = 1900, c = "0." + Math.floor(9 * Math.random()) + 1, m = 2 * o.width, w = 0, v = [], u = !0;
        a(),
        i()
    }
    function d(e) {
        e.find(".title .t0").addClass("pulse").addClass("animated");
        for (var i = e.find(".text").attr("data-text"), a = i.length - 1, n = 0; n <= a; n++)
            e.find(".text").append('<span style="transition: ' + 3 * Math.random() + "s; transition-delay: " + Math.random() + 's;">' + i.charAt(n) + "</span>");
        setTimeout(function() {
            e.find(".text").addClass("active")
        }, 1e3),
        setTimeout(function() {
            e.find(".title .meeting").addClass("slideInUp").addClass("animated")
        }, 1500)
    }
    function l(e) {
        var i = e.find(".timeline-li.line").length;
        setTimeout(function() {
            e.find(".timeline-li.name").each(function(a, n) {
                $(this).on("click", function(n) {
                    n.preventDefault(),
                    clearInterval(o),
                    e.find(".title").fadeOut("100"),
                    h = a,
                    $(this).addClass("active"),
                    $(this).nextAll(".timeline-li").removeClass("active"),
                    $(this).prevAll(".timeline-li").addClass("active"),
                    $(".timeline-li.line").find(".whiteline").stop().animate({
                        width: "0"
                    }, 1),
                    $(".timeline-li.line.active").find(".whiteline").stop().animate({
                        width: "100%"
                    }, 1),
                    e.find(".showarea .area").removeClass("active").hide(),
                    e.find(".showarea .area").eq(h).show(),
                    e.find(".showarea .area").eq(h).addClass("active"),
                    o = setInterval(function() {
                        e.find(".timeline-li.line").eq(h) && h <= i ? (e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").animate({
                            width: "100%"
                        }, 4e3),
                        e.find(".timeline-li.name").eq(h).addClass("active"),
                        e.find(".showarea .area").hide(),
                        e.find(".showarea .area").removeClass("active"),
                        e.find(".showarea .area").eq(h).show(),
                        e.find(".showarea .area").eq(h).addClass("active"),
                        h++) : clearInterval(o)
                    }, 4e3)
                })
            })
        }, 7e3)
    }
    function s(e, i) {
        var a = e.find(".timeline-li.line").length;
        h = i || h,
        setTimeout(function() {
            e.find(".title").fadeOut("100"),
            e.find(".timeline-li.name").eq(0).addClass("active"),
            e.find(".timeline-li.line").eq(0).addClass("active").find(".whiteline").stop().animate({
                width: "100%"
            }, 4e3),
            e.find(".showarea .area").hide(),
            e.find(".showarea .area").eq(0).show(),
            e.find(".showarea .area").eq(0).addClass("active"),
            o = setInterval(function() {
                e.find(".timeline-li.line").eq(h) && h < a ? (h++,
                e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").stop().animate({
                    width: "100%"
                }, 4e3),
                e.find(".timeline-li.name").eq(h).addClass("active"),
                e.find(".showarea .area").hide(),
                e.find(".showarea .area").removeClass("active"),
                e.find(".showarea .area").eq(h).show(),
                e.find(".showarea .area").eq(h).addClass("active")) : clearInterval(o)
            }, 4e3),
            e.find(".showarea .area").on("mouseout mouseover", function(i) {
                i.preventDefault(),
                "mouseover" == i.type ? (e.find(".timeline-li.line").find(".whiteline").stop(),
                clearInterval(o)) : h < a && (e.find(".timeline-li.name").eq(h).addClass("active"),
                e.find(".timeline-li.line").eq(h).prevAll(".timeline-li.line").find(".whiteline").width("100%"),
                e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").stop().animate({
                    width: "100%"
                }, 4e3),
                e.find(".showarea .area").hide(),
                e.find(".showarea .area").removeClass("active"),
                e.find(".showarea .area").eq(h).show(),
                e.find(".showarea .area").eq(h).addClass("active"),
                o = setInterval(function() {
                    e.find(".timeline-li.line").eq(h) && h < a ? (h++,
                    e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").stop().animate({
                        width: "100%"
                    }, 4e3),
                    e.find(".timeline-li.name").eq(h).addClass("active"),
                    e.find(".showarea .area").hide(),
                    e.find(".showarea .area").removeClass("active"),
                    e.find(".showarea .area").eq(h).show(),
                    e.find(".showarea .area").eq(h).addClass("active")) : clearInterval(o)
                }, 4e3))
            }),
            h >= a && clearInterval(o)
        }, 7e3)
    }
    function r(e) {
        e.find(".video").on("click", function(i) {
            i.preventDefault(),
            e.find(".mask").show();
            var a = e.find(".video").attr("data-link");
            e.find(".vs").html('<video autoplay="true" controls="controls" src="' + a + '" style="width:100%;"></video>')
        }),
        e.find(".close").on("click", function(i) {
            i.preventDefault(),
            e.find(".mask").hide(),
            e.find(".vs").html("")
        })
    }
    a(2);
    var o, f = $(".wb-zc-tymod-yunqi-2015mod"), h = 0;
    f.each(function() {
        var e = $(this).find("textarea.schemaData")
          , i = e.val()
          , a = JSON.parse(i);
        a && n($(this), a)
    }),
    e.exports = n
}
, , function(e, i) {}
]);
