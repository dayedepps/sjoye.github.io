+ function(a, b, c) {
        function d(b) {
            return this.each(function() {
                var c = a(this);
                new e(c, b)
            })
        }
        var e = function(b, c) {
            this.options = a.extend({}, e.DEFAULTS, c),
                this.$element = b,
                this.$canvas = this._createCanvas(),
                this.startPoint = this._getCanvasHeight() * this.options.startPoint,
                this.xWidth = this._getRandomXwidth(this.options.minXwidth, this.options.maxXwidth),
                this.init()
        };
        e.DEFAULTS = {
            customWidth: 0,
            customHeight: 0,
            posTop: 0,
            posLeft: 0,
            minXwidth: 500,
            maxXwidth: 1e3,
            startPoint: .3,
            minMoveSpeed: 150,
            maxMoveSpeed: 50,
            curveNum: 1,
            minCurveWidth: 1,
            maxCurveWidth: 5,
            minTransparent: .5,
            maxTransparent: .5
        },
            e.prototype = {
                _getWrapWidth: function() {
                    return this.$element.outerWidth()
                },
                _getWrapHeight: function() {
                    return this.$element.outerHeight()
                },
                _getCanvasWidth: function() {
                    return 0 == this.options.customWidth ? this._getWrapWidth() : this.options.customWidth
                },
                _getCanvasHeight: function() {
                    return 0 == this.options.customHeight ? this._getWrapHeight() : this.options.customHeight
                },
                _createCanvas: function() {
                    var b = a("<canvas></canvas>");
                    return b.css({
                        position: "absolute",
                        top: this.options.posTop,
                        left: this.options.posLeft
                    }).attr({
                        width: this._getCanvasWidth(),
                        height: this._getCanvasHeight()
                    }),
                        b
                },
                _getRandomNum: function(a, b) {
                    return (a + Math.random() * (b - a)).toFixed(1)
                },
                _getRandomXwidth: function(a, b) {
                    var c = b - a,
                        d = Math.random();
                    return a + Math.round(c * d)
                },
                _getRandomXOffset: function() {
                    var a = Math.random();
                    return Math.round(this.xWidth * a)
                },
                _getRandomSPOffset: function() {
                    var a = this.startPoint / 2,
                        b = Math.random();
                    return Math.round(a * b)
                },
                _getRandomSpeed: function(a, b) {
                    var c = this.options.minMoveSpeed,
                        d = this.options.maxMoveSpeed;
                    a && (c = a),
                    b && (d = b);
                    var e = Math.random(),
                        f = d - c;
                    return c + Math.round(f * e)
                },
                _runDrawCurve: function(a, b, c, d, e, f) {
                    for (var g, h, i, j, k, l, m, n, o = a.getContext("2d"), p = Math.ceil(this._getCanvasWidth() / this.xWidth), q = b > this.startPoint ? 2 * this.startPoint - b : 2 * (this.startPoint - b) + b, r = 0; r < this.options.curveNum; r++) {
                        g = c[r],
                            h = d[r],
                            m = e[r],
                            n = f[r];
                        for (var s = 0; s < p + 1; s++)
                            i = {
                                x: this.xWidth * s - g,
                                y: this.startPoint
                            },
                                j = {
                                    x: this.xWidth * (s + 1) - g,
                                    y: this.startPoint
                                },
                                k = {
                                    x: this.xWidth * (s + .5) - g,
                                    y: b
                                },
                                l = {
                                    x: this.xWidth * (s + .5) - g,
                                    y: q
                                },
                                o.save(),
                                o.translate(0, h),
                                o.strokeStyle = "rgba(255, 255, 255, " + m + ")",
                                o.lineWidth = n,
                                o.beginPath(),
                                o.moveTo(i.x, i.y),
                                o.bezierCurveTo(k.x, k.y, l.x, l.y, j.x, j.y),
                                o.stroke(),
                                o.restore()
                    }
                },
                _clearCurve: function(a) {
                    var b = a.getContext("2d");
                    return b.clearRect(0, 0, this._getCanvasWidth(), this._getCanvasHeight()),
                        this
                },
                _moveCurve: function(a, b, c) {
                    function d() {
                        h._clearCurve(a)._runDrawCurve(a, e, m, n, o, p),
                        g && (e += 1,
                        e >= f && (g = !1)),
                        g || (e -= 1,
                        e <= 0 && (g = !0)),
                            setTimeout(d, b)
                    }
                    var e = 0,
                        f = 2 * this.startPoint,
                        g = !0,
                        h = this;
                    c && (e = c);
                    for (var i, j, k, l, m = [], n = [], o = [], p = [], q = 0; q < this.options.curveNum; q++)
                        i = this._getRandomXOffset(),
                            m.push(i);
                    for (var r = 0; r < this.options.curveNum; r++)
                        j = this._getRandomSPOffset(),
                            n.push(j);
                    for (var s = 0; s < this.options.curveNum; s++)
                        k = this._getRandomNum(this.options.minTransparent, this.options.maxTransparent),
                            o.push(k);
                    for (var t = 0; t < this.options.curveNum; t++)
                        l = this._getRandomNum(this.options.minCurveWidth, this.options.maxCurveWidth),
                            p.push(l);
                    h._runDrawCurve(a, e, m, n, o, p),
                        d()
                },
                _drawCurve: function() {
                    var a, b = this.$canvas,
                        c = b[0];
                    return c.getContext ? (a = this._getRandomSpeed(),
                        this._moveCurve(c, a)) : this._insertImg(),
                        this
                },
                _insertCanvas: function() {
                    var a = this.$element,
                        b = this.$canvas;
                    return a.css({
                        position: "relative",
                        overflow: "hidden"
                    }),
                        a.children(".main").css({
                            position: "relative",
                            "z-index": 5
                        }),
                        b.appendTo(a),
                        this
                },
                _insertImg: function() {
                    var b = this.$element,
                        c = a('<div class="index-line"></div>');
                    return b.append(c),
                        this
                },
                init: function() {
                    this._insertCanvas(),
                        this._drawCurve()
                }
            },
            a.fn.drawBezierCurve = d,
            a.fn.drawBezierCurve.Constructor = e
    }(jQuery, window, document), + function(a, b, c) {
    function d(b) {
        return this.each(function() {
            var c = a(this);
            new e(c, b)
        })
    }
    var e = function(b, c) {
        this.options = a.extend({}, e.DEFAULTS, c),
            this.$element = b,
            this.$canvas = this._createCanvas(),
            this.amplitude = this._getRandomA(this.options.minAmplitude, this.options.maxAmplitude),
            this.omega = this._getRandomOmega(this.options.minOmega, this.options.maxOmega),
            this.init()
    };
    e.DEFAULTS = {
        minAmplitude: 50,
        maxAmplitude: 100,
        minOmega: 500,
        maxOmega: 1e3,
        speed: 5,
        startPoint: 0
    },
        e.prototype = {
            _getWrapWidth: function() {
                return this.$element.outerWidth()
            },
            _getWrapHeight: function() {
                return this.$element.outerHeight()
            },
            _createCanvas: function() {
                var b = a("<canvas></canvas>");
                return b.css({
                    position: "absolute",
                    top: "0px",
                    left: "0px"
                }).attr({
                    width: this._getWrapWidth(),
                    height: this._getWrapHeight()
                }),
                    b
            },
            _drawCurve: function() {
                var a = this.$canvas,
                    b = a[0];
                return b.getContext && this._runDrawCurve(b),
                    this
            },
            _getRandomA: function(a, b) {
                var c = b - a,
                    d = Math.random();
                return a + Math.round(d * c)
            },
            _getRandomOmega: function(a, b) {
                var c = b - a,
                    d = Math.random(),
                    e = (a + Math.round(d * c)) / 2;
                return (Math.asin(1) / e).toFixed(3)
            },
            _sinFun: function(a) {
                var b = this.amplitude,
                    c = this.omega;
                return b / 2 * Math.sin(c * a) + b / 2 + this.options.startPoint
            },
            _runDrawCurve: function(a) {
                var b = a.getContext("2d");
                b.lineWidth = 3,
                    b.strokeStyle = "rgba(255, 255, 255,.5)";
                var c = 0,
                    d = this._sinFun(c),
                    e = this,
                    f = setInterval(function() {
                        c <= e._getWrapWidth() ? (b.beginPath(),
                            b.moveTo(c, d),
                            c += 1,
                            d = e._sinFun(c),
                            b.lineTo(c, d),
                            b.stroke()) : clearInterval(f)
                    }, this.options.speed);
                return this
            },
            _insertCanvas: function() {
                var a = this.$element,
                    b = this.$canvas;
                return a.css({
                    position: "relative",
                    overflow: "hidden"
                }),
                    b.appendTo(a),
                    this
            },
            init: function() {
                this._insertCanvas(),
                    this._drawCurve()
            }
        },
        a.fn.drawCurve = d,
        a.fn.drawCurve.Constructor = e
}(jQuery, window, document);

$("#show").drawBezierCurve({
    customHeight: 500,
    posTop: -200,
    minXwidth: 850,
    maxXwidth: 1e3,
    startPoint: .5,
    minMoveSpeed: 88,
    maxMoveSpeed: 36,
    curveNum: 1,
    minCurveWidth: 1,
    maxCurveWidth: 2,
    minTransparent: .2,
    maxTransparent: .6
}).drawBezierCurve({
    customHeight: 500,
    posTop: -200,
    minXwidth: 850,
    maxXwidth: 1e3,
    startPoint: .5,
    minMoveSpeed: 66,
    maxMoveSpeed: 16,
    curveNum: 1,
    minCurveWidth: 1,
    maxCurveWidth: 2,
    minTransparent: .2,
    maxTransparent: .6
});