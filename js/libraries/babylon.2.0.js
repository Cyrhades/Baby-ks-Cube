/*! Babylon 2015-02-09 */
var __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    BABYLON;
! function(a) {
    var b = function() {
        function a(a, b, c) {
            void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = 0), this.r = a, this.g = b, this.b = c
        }
        return a.prototype.toString = function() {
            return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
        }, a.prototype.toArray = function(a, b) {
            return void 0 === b && (b = 0), a[b] = this.r, a[b + 1] = this.g, a[b + 2] = this.b, this
        }, a.prototype.toColor4 = function(a) {
            return void 0 === a && (a = 1), new c(this.r, this.g, this.b, a)
        }, a.prototype.asArray = function() {
            var a = [];
            return this.toArray(a, 0), a
        }, a.prototype.toLuminance = function() {
            return .3 * this.r + .59 * this.g + .11 * this.b
        }, a.prototype.multiply = function(b) {
            return new a(this.r * b.r, this.g * b.g, this.b * b.b)
        }, a.prototype.multiplyToRef = function(a, b) {
            return b.r = this.r * a.r, b.g = this.g * a.g, b.b = this.b * a.b, this
        }, a.prototype.equals = function(a) {
            return a && this.r === a.r && this.g === a.g && this.b === a.b
        }, a.prototype.scale = function(b) {
            return new a(this.r * b, this.g * b, this.b * b)
        }, a.prototype.scaleToRef = function(a, b) {
            return b.r = this.r * a, b.g = this.g * a, b.b = this.b * a, this
        }, a.prototype.add = function(b) {
            return new a(this.r + b.r, this.g + b.g, this.b + b.b)
        }, a.prototype.addToRef = function(a, b) {
            return b.r = this.r + a.r, b.g = this.g + a.g, b.b = this.b + a.b, this
        }, a.prototype.subtract = function(b) {
            return new a(this.r - b.r, this.g - b.g, this.b - b.b)
        }, a.prototype.subtractToRef = function(a, b) {
            return b.r = this.r - a.r, b.g = this.g - a.g, b.b = this.b - a.b, this
        }, a.prototype.clone = function() {
            return new a(this.r, this.g, this.b)
        }, a.prototype.copyFrom = function(a) {
            return this.r = a.r, this.g = a.g, this.b = a.b, this
        }, a.prototype.copyFromFloats = function(a, b, c) {
            return this.r = a, this.g = b, this.b = c, this
        }, a.FromArray = function(b, c) {
            return void 0 === c && (c = 0), new a(b[c], b[c + 1], b[c + 2])
        }, a.FromInts = function(b, c, d) {
            return new a(b / 255, c / 255, d / 255)
        }, a.Lerp = function(b, c, d) {
            var e = b.r + (c.r - b.r) * d,
                f = b.g + (c.g - b.g) * d,
                g = b.b + (c.b - b.b) * d;
            return new a(e, f, g)
        }, a.Red = function() {
            return new a(1, 0, 0)
        }, a.Green = function() {
            return new a(0, 1, 0)
        }, a.Blue = function() {
            return new a(0, 0, 1)
        }, a.Black = function() {
            return new a(0, 0, 0)
        }, a.White = function() {
            return new a(1, 1, 1)
        }, a.Purple = function() {
            return new a(.5, 0, .5)
        }, a.Magenta = function() {
            return new a(1, 0, 1)
        }, a.Yellow = function() {
            return new a(1, 1, 0)
        }, a.Gray = function() {
            return new a(.5, .5, .5)
        }, a
    }();
    a.Color3 = b;
    var c = function() {
        function a(a, b, c, d) {
            this.r = a, this.g = b, this.b = c, this.a = d
        }
        return a.prototype.addInPlace = function(a) {
            return this.r += a.r, this.g += a.g, this.b += a.b, this.a += a.a, this
        }, a.prototype.asArray = function() {
            var a = [];
            return this.toArray(a, 0), a
        }, a.prototype.toArray = function(a, b) {
            return void 0 === b && (b = 0), a[b] = this.r, a[b + 1] = this.g, a[b + 2] = this.b, a[b + 3] = this.a, this
        }, a.prototype.add = function(b) {
            return new a(this.r + b.r, this.g + b.g, this.b + b.b, this.a + b.a)
        }, a.prototype.subtract = function(b) {
            return new a(this.r - b.r, this.g - b.g, this.b - b.b, this.a - b.a)
        }, a.prototype.subtractToRef = function(a, b) {
            return b.r = this.r - a.r, b.g = this.g - a.g, b.b = this.b - a.b, b.a = this.a - a.a, this
        }, a.prototype.scale = function(b) {
            return new a(this.r * b, this.g * b, this.b * b, this.a * b)
        }, a.prototype.scaleToRef = function(a, b) {
            return b.r = this.r * a, b.g = this.g * a, b.b = this.b * a, b.a = this.a * a, this
        }, a.prototype.toString = function() {
            return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
        }, a.prototype.clone = function() {
            return new a(this.r, this.g, this.b, this.a)
        }, a.prototype.copyFrom = function(a) {
            return this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this
        }, a.Lerp = function(b, c, d) {
            var e = new a(0, 0, 0, 0);
            return a.LerpToRef(b, c, d, e), e
        }, a.LerpToRef = function(a, b, c, d) {
            d.r = a.r + (b.r - a.r) * c, d.g = a.g + (b.g - a.g) * c, d.b = a.b + (b.b - a.b) * c, d.a = a.a + (b.a - a.a) * c
        }, a.FromArray = function(b, c) {
            return void 0 === c && (c = 0), new a(b[c], b[c + 1], b[c + 2], b[c + 3])
        }, a.FromInts = function(b, c, d, e) {
            return new a(b / 255, c / 255, d / 255, e / 255)
        }, a
    }();
    a.Color4 = c;
    var d = function() {
        function a(a, b) {
            this.x = a, this.y = b
        }
        return a.prototype.toString = function() {
            return "{X: " + this.x + " Y:" + this.y + "}"
        }, a.prototype.toArray = function(a, b) {
            return void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, this
        }, a.prototype.asArray = function() {
            var a = [];
            return this.toArray(a, 0), a
        }, a.prototype.copyFrom = function(a) {
            return this.x = a.x, this.y = a.y, this
        }, a.prototype.copyFromFloats = function(a, b) {
            return this.x = a, this.y = b, this
        }, a.prototype.add = function(b) {
            return new a(this.x + b.x, this.y + b.y)
        }, a.prototype.addVector3 = function(b) {
            return new a(this.x + b.x, this.y + b.y)
        }, a.prototype.subtract = function(b) {
            return new a(this.x - b.x, this.y - b.y)
        }, a.prototype.subtractInPlace = function(a) {
            return this.x -= a.x, this.y -= a.y, this
        }, a.prototype.multiplyInPlace = function(a) {
            return this.x *= a.x, this.y *= a.y, this
        }, a.prototype.multiply = function(b) {
            return new a(this.x * b.x, this.y * b.y)
        }, a.prototype.multiplyToRef = function(a, b) {
            return b.x = this.x * a.x, b.y = this.y * a.y, this
        }, a.prototype.multiplyByFloats = function(b, c) {
            return new a(this.x * b, this.y * c)
        }, a.prototype.divide = function(b) {
            return new a(this.x / b.x, this.y / b.y)
        }, a.prototype.divideToRef = function(a, b) {
            return b.x = this.x / a.x, b.y = this.y / a.y, this
        }, a.prototype.negate = function() {
            return new a(-this.x, -this.y)
        }, a.prototype.scaleInPlace = function(a) {
            return this.x *= a, this.y *= a, this
        }, a.prototype.scale = function(b) {
            return new a(this.x * b, this.y * b)
        }, a.prototype.equals = function(a) {
            return a && this.x === a.x && this.y === a.y
        }, a.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, a.prototype.lengthSquared = function() {
            return this.x * this.x + this.y * this.y
        }, a.prototype.normalize = function() {
            var a = this.length();
            if (0 === a) return this;
            var b = 1 / a;
            return this.x *= b, this.y *= b, this
        }, a.prototype.clone = function() {
            return new a(this.x, this.y)
        }, a.Zero = function() {
            return new a(0, 0)
        }, a.FromArray = function(b, c) {
            return void 0 === c && (c = 0), new a(b[c], b[c + 1])
        }, a.FromArrayToRef = function(a, b, c) {
            c.x = a[b], c.y = a[b + 1]
        }, a.CatmullRom = function(b, c, d, e, f) {
            var g = f * f,
                h = f * g,
                i = .5 * (2 * c.x + (-b.x + d.x) * f + (2 * b.x - 5 * c.x + 4 * d.x - e.x) * g + (-b.x + 3 * c.x - 3 * d.x + e.x) * h),
                j = .5 * (2 * c.y + (-b.y + d.y) * f + (2 * b.y - 5 * c.y + 4 * d.y - e.y) * g + (-b.y + 3 * c.y - 3 * d.y + e.y) * h);
            return new a(i, j)
        }, a.Clamp = function(b, c, d) {
            var e = b.x;
            e = e > d.x ? d.x : e, e = e < c.x ? c.x : e;
            var f = b.y;
            return f = f > d.y ? d.y : f, f = f < c.y ? c.y : f, new a(e, f)
        }, a.Hermite = function(b, c, d, e, f) {
            var g = f * f,
                h = f * g,
                i = 2 * h - 3 * g + 1,
                j = -2 * h + 3 * g,
                k = h - 2 * g + f,
                l = h - g,
                m = b.x * i + d.x * j + c.x * k + e.x * l,
                n = b.y * i + d.y * j + c.y * k + e.y * l;
            return new a(m, n)
        }, a.Lerp = function(b, c, d) {
            var e = b.x + (c.x - b.x) * d,
                f = b.y + (c.y - b.y) * d;
            return new a(e, f)
        }, a.Dot = function(a, b) {
            return a.x * b.x + a.y * b.y
        }, a.Normalize = function(a) {
            var b = a.clone();
            return b.normalize(), b
        }, a.Minimize = function(b, c) {
            var d = b.x < c.x ? b.x : c.x,
                e = b.y < c.y ? b.y : c.y;
            return new a(d, e)
        }, a.Maximize = function(b, c) {
            var d = b.x > c.x ? b.x : c.x,
                e = b.y > c.y ? b.y : c.y;
            return new a(d, e)
        }, a.Transform = function(b, c) {
            var d = b.x * c.m[0] + b.y * c.m[4],
                e = b.x * c.m[1] + b.y * c.m[5];
            return new a(d, e)
        }, a.Distance = function(b, c) {
            return Math.sqrt(a.DistanceSquared(b, c))
        }, a.DistanceSquared = function(a, b) {
            var c = a.x - b.x,
                d = a.y - b.y;
            return c * c + d * d
        }, a
    }();
    a.Vector2 = d;
    var e = function() {
        function b(a, b, c) {
            this.x = a, this.y = b, this.z = c
        }
        return b.prototype.toString = function() {
            return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + "}"
        }, b.prototype.asArray = function() {
            var a = [];
            return this.toArray(a, 0), a
        }, b.prototype.toArray = function(a, b) {
            return void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a[b + 2] = this.z, this
        }, b.prototype.toQuaternion = function() {
            var a = new g(0, 0, 0, 1),
                b = Math.cos(.5 * (this.x + this.z)),
                c = Math.sin(.5 * (this.x + this.z)),
                d = Math.cos(.5 * (this.z - this.x)),
                e = Math.sin(.5 * (this.z - this.x)),
                f = Math.cos(.5 * this.y),
                h = Math.sin(.5 * this.y);
            return a.x = d * h, a.y = -e * h, a.z = c * f, a.w = b * f, a
        }, b.prototype.addInPlace = function(a) {
            return this.x += a.x, this.y += a.y, this.z += a.z, this
        }, b.prototype.add = function(a) {
            return new b(this.x + a.x, this.y + a.y, this.z + a.z)
        }, b.prototype.addToRef = function(a, b) {
            return b.x = this.x + a.x, b.y = this.y + a.y, b.z = this.z + a.z, this
        }, b.prototype.subtractInPlace = function(a) {
            return this.x -= a.x, this.y -= a.y, this.z -= a.z, this
        }, b.prototype.subtract = function(a) {
            return new b(this.x - a.x, this.y - a.y, this.z - a.z)
        }, b.prototype.subtractToRef = function(a, b) {
            return b.x = this.x - a.x, b.y = this.y - a.y, b.z = this.z - a.z, this
        }, b.prototype.subtractFromFloats = function(a, c, d) {
            return new b(this.x - a, this.y - c, this.z - d)
        }, b.prototype.subtractFromFloatsToRef = function(a, b, c, d) {
            return d.x = this.x - a, d.y = this.y - b, d.z = this.z - c, this
        }, b.prototype.negate = function() {
            return new b(-this.x, -this.y, -this.z)
        }, b.prototype.scaleInPlace = function(a) {
            return this.x *= a, this.y *= a, this.z *= a, this
        }, b.prototype.scale = function(a) {
            return new b(this.x * a, this.y * a, this.z * a)
        }, b.prototype.scaleToRef = function(a, b) {
            b.x = this.x * a, b.y = this.y * a, b.z = this.z * a
        }, b.prototype.equals = function(a) {
            return a && this.x === a.x && this.y === a.y && this.z === a.z
        }, b.prototype.equalsWithEpsilon = function(b) {
            return Math.abs(this.x - b.x) < a.Engine.Epsilon && Math.abs(this.y - b.y) < a.Engine.Epsilon && Math.abs(this.z - b.z) < a.Engine.Epsilon
        }, b.prototype.equalsToFloats = function(a, b, c) {
            return this.x === a && this.y === b && this.z === c
        }, b.prototype.multiplyInPlace = function(a) {
            return this.x *= a.x, this.y *= a.y, this.z *= a.z, this
        }, b.prototype.multiply = function(a) {
            return new b(this.x * a.x, this.y * a.y, this.z * a.z)
        }, b.prototype.multiplyToRef = function(a, b) {
            return b.x = this.x * a.x, b.y = this.y * a.y, b.z = this.z * a.z, this
        }, b.prototype.multiplyByFloats = function(a, c, d) {
            return new b(this.x * a, this.y * c, this.z * d)
        }, b.prototype.divide = function(a) {
            return new b(this.x / a.x, this.y / a.y, this.z / a.z)
        }, b.prototype.divideToRef = function(a, b) {
            return b.x = this.x / a.x, b.y = this.y / a.y, b.z = this.z / a.z, this
        }, b.prototype.MinimizeInPlace = function(a) {
            return a.x < this.x && (this.x = a.x), a.y < this.y && (this.y = a.y), a.z < this.z && (this.z = a.z), this
        }, b.prototype.MaximizeInPlace = function(a) {
            return a.x > this.x && (this.x = a.x), a.y > this.y && (this.y = a.y), a.z > this.z && (this.z = a.z), this
        }, b.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }, b.prototype.lengthSquared = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, b.prototype.normalize = function() {
            var a = this.length();
            if (0 === a) return this;
            var b = 1 / a;
            return this.x *= b, this.y *= b, this.z *= b, this
        }, b.prototype.clone = function() {
            return new b(this.x, this.y, this.z)
        }, b.prototype.copyFrom = function(a) {
            return this.x = a.x, this.y = a.y, this.z = a.z, this
        }, b.prototype.copyFromFloats = function(a, b, c) {
            return this.x = a, this.y = b, this.z = c, this
        }, b.FromArray = function(a, c) {
            return c || (c = 0), new b(a[c], a[c + 1], a[c + 2])
        }, b.FromArrayToRef = function(a, b, c) {
            c.x = a[b], c.y = a[b + 1], c.z = a[b + 2]
        }, b.FromFloatArrayToRef = function(a, b, c) {
            c.x = a[b], c.y = a[b + 1], c.z = a[b + 2]
        }, b.FromFloatsToRef = function(a, b, c, d) {
            d.x = a, d.y = b, d.z = c
        }, b.Zero = function() {
            return new b(0, 0, 0)
        }, b.Up = function() {
            return new b(0, 1, 0)
        }, b.TransformCoordinates = function(a, c) {
            var d = b.Zero();
            return b.TransformCoordinatesToRef(a, c, d), d
        }, b.TransformCoordinatesToRef = function(a, b, c) {
            var d = a.x * b.m[0] + a.y * b.m[4] + a.z * b.m[8] + b.m[12],
                e = a.x * b.m[1] + a.y * b.m[5] + a.z * b.m[9] + b.m[13],
                f = a.x * b.m[2] + a.y * b.m[6] + a.z * b.m[10] + b.m[14],
                g = a.x * b.m[3] + a.y * b.m[7] + a.z * b.m[11] + b.m[15];
            c.x = d / g, c.y = e / g, c.z = f / g
        }, b.TransformCoordinatesFromFloatsToRef = function(a, b, c, d, e) {
            var f = a * d.m[0] + b * d.m[4] + c * d.m[8] + d.m[12],
                g = a * d.m[1] + b * d.m[5] + c * d.m[9] + d.m[13],
                h = a * d.m[2] + b * d.m[6] + c * d.m[10] + d.m[14],
                i = a * d.m[3] + b * d.m[7] + c * d.m[11] + d.m[15];
            e.x = f / i, e.y = g / i, e.z = h / i
        }, b.TransformNormal = function(a, c) {
            var d = b.Zero();
            return b.TransformNormalToRef(a, c, d), d
        }, b.TransformNormalToRef = function(a, b, c) {
            c.x = a.x * b.m[0] + a.y * b.m[4] + a.z * b.m[8], c.y = a.x * b.m[1] + a.y * b.m[5] + a.z * b.m[9], c.z = a.x * b.m[2] + a.y * b.m[6] + a.z * b.m[10]
        }, b.TransformNormalFromFloatsToRef = function(a, b, c, d, e) {
            e.x = a * d.m[0] + b * d.m[4] + c * d.m[8], e.y = a * d.m[1] + b * d.m[5] + c * d.m[9], e.z = a * d.m[2] + b * d.m[6] + c * d.m[10]
        }, b.CatmullRom = function(a, c, d, e, f) {
            var g = f * f,
                h = f * g,
                i = .5 * (2 * c.x + (-a.x + d.x) * f + (2 * a.x - 5 * c.x + 4 * d.x - e.x) * g + (-a.x + 3 * c.x - 3 * d.x + e.x) * h),
                j = .5 * (2 * c.y + (-a.y + d.y) * f + (2 * a.y - 5 * c.y + 4 * d.y - e.y) * g + (-a.y + 3 * c.y - 3 * d.y + e.y) * h),
                k = .5 * (2 * c.z + (-a.z + d.z) * f + (2 * a.z - 5 * c.z + 4 * d.z - e.z) * g + (-a.z + 3 * c.z - 3 * d.z + e.z) * h);
            return new b(i, j, k)
        }, b.Clamp = function(a, c, d) {
            var e = a.x;
            e = e > d.x ? d.x : e, e = e < c.x ? c.x : e;
            var f = a.y;
            f = f > d.y ? d.y : f, f = f < c.y ? c.y : f;
            var g = a.z;
            return g = g > d.z ? d.z : g, g = g < c.z ? c.z : g, new b(e, f, g)
        }, b.Hermite = function(a, c, d, e, f) {
            var g = f * f,
                h = f * g,
                i = 2 * h - 3 * g + 1,
                j = -2 * h + 3 * g,
                k = h - 2 * g + f,
                l = h - g,
                m = a.x * i + d.x * j + c.x * k + e.x * l,
                n = a.y * i + d.y * j + c.y * k + e.y * l,
                o = a.z * i + d.z * j + c.z * k + e.z * l;
            return new b(m, n, o)
        }, b.Lerp = function(a, c, d) {
            var e = a.x + (c.x - a.x) * d,
                f = a.y + (c.y - a.y) * d,
                g = a.z + (c.z - a.z) * d;
            return new b(e, f, g)
        }, b.Dot = function(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z
        }, b.Cross = function(a, c) {
            var d = b.Zero();
            return b.CrossToRef(a, c, d), d
        }, b.CrossToRef = function(a, b, c) {
            c.x = a.y * b.z - a.z * b.y, c.y = a.z * b.x - a.x * b.z, c.z = a.x * b.y - a.y * b.x
        }, b.Normalize = function(a) {
            var c = b.Zero();
            return b.NormalizeToRef(a, c), c
        }, b.NormalizeToRef = function(a, b) {
            b.copyFrom(a), b.normalize()
        }, b.Project = function(a, c, d, e) {
            var f = e.width,
                g = e.height,
                i = e.x,
                j = e.y,
                k = h.FromValues(f / 2, 0, 0, 0, 0, -g / 2, 0, 0, 0, 0, 1, 0, i + f / 2, g / 2 + j, 0, 1),
                l = c.multiply(d).multiply(k);
            return b.TransformCoordinates(a, l)
        }, b.UnprojectFromTransform = function(c, d, e, f, g) {
            var h = f.multiply(g);
            h.invert(), c.x = c.x / d * 2 - 1, c.y = -(c.y / e * 2 - 1);
            var i = b.TransformCoordinates(c, h),
                j = c.x * h.m[3] + c.y * h.m[7] + c.z * h.m[11] + h.m[15];
            return a.Tools.WithinEpsilon(j, 1) && (i = i.scale(1 / j)), i
        }, b.Unproject = function(c, d, e, f, g, h) {
            var i = f.multiply(g).multiply(h);
            i.invert(), c.x = c.x / d * 2 - 1, c.y = -(c.y / e * 2 - 1);
            var j = b.TransformCoordinates(c, i),
                k = c.x * i.m[3] + c.y * i.m[7] + c.z * i.m[11] + i.m[15];
            return a.Tools.WithinEpsilon(k, 1) && (j = j.scale(1 / k)), j
        }, b.Minimize = function(a, b) {
            var c = a.clone();
            return c.MinimizeInPlace(b), c
        }, b.Maximize = function(a, b) {
            var c = a.clone();
            return c.MaximizeInPlace(b), c
        }, b.Distance = function(a, c) {
            return Math.sqrt(b.DistanceSquared(a, c))
        }, b.DistanceSquared = function(a, b) {
            var c = a.x - b.x,
                d = a.y - b.y,
                e = a.z - b.z;
            return c * c + d * d + e * e
        }, b.Center = function(a, b) {
            var c = a.add(b);
            return c.scaleInPlace(.5), c
        }, b
    }();
    a.Vector3 = e;
    var f = function() {
        function b(a, b, c, d) {
            this.x = a, this.y = b, this.z = c, this.w = d
        }
        return b.prototype.toString = function() {
            return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + "W:" + this.w + "}"
        }, b.prototype.asArray = function() {
            var a = [];
            return this.toArray(a, 0), a
        }, b.prototype.toArray = function(a, b) {
            return void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a[b + 2] = this.z, a[b + 3] = this.w, this
        }, b.prototype.addInPlace = function(a) {
            return this.x += a.x, this.y += a.y, this.z += a.z, this.w += a.w, this
        }, b.prototype.add = function(a) {
            return new b(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w)
        }, b.prototype.addToRef = function(a, b) {
            return b.x = this.x + a.x, b.y = this.y + a.y, b.z = this.z + a.z, b.w = this.w + a.w, this
        }, b.prototype.subtractInPlace = function(a) {
            return this.x -= a.x, this.y -= a.y, this.z -= a.z, this.w -= a.w, this
        }, b.prototype.subtract = function(a) {
            return new b(this.x - a.x, this.y - a.y, this.z - a.z, this.w - a.w)
        }, b.prototype.subtractToRef = function(a, b) {
            return b.x = this.x - a.x, b.y = this.y - a.y, b.z = this.z - a.z, b.w = this.w - a.w, this
        }, b.prototype.subtractFromFloats = function(a, c, d, e) {
            return new b(this.x - a, this.y - c, this.z - d, this.w - e)
        }, b.prototype.subtractFromFloatsToRef = function(a, b, c, d, e) {
            return e.x = this.x - a, e.y = this.y - b, e.z = this.z - c, e.w = this.w - d, this
        }, b.prototype.negate = function() {
            return new b(-this.x, -this.y, -this.z, -this.w)
        }, b.prototype.scaleInPlace = function(a) {
            return this.x *= a, this.y *= a, this.z *= a, this.w *= a, this
        }, b.prototype.scale = function(a) {
            return new b(this.x * a, this.y * a, this.z * a, this.w * a)
        }, b.prototype.scaleToRef = function(a, b) {
            b.x = this.x * a, b.y = this.y * a, b.z = this.z * a, b.w = this.w * a
        }, b.prototype.equals = function(a) {
            return a && this.x === a.x && this.y === a.y && this.z === a.z && this.w === a.w
        }, b.prototype.equalsWithEpsilon = function(b) {
            return Math.abs(this.x - b.x) < a.Engine.Epsilon && Math.abs(this.y - b.y) < a.Engine.Epsilon && Math.abs(this.z - b.z) < a.Engine.Epsilon && Math.abs(this.w - b.w) < a.Engine.Epsilon
        }, b.prototype.equalsToFloats = function(a, b, c, d) {
            return this.x === a && this.y === b && this.z === c && this.w === d
        }, b.prototype.multiplyInPlace = function(a) {
            return this.x *= a.x, this.y *= a.y, this.z *= a.z, this.w *= a.w, this
        }, b.prototype.multiply = function(a) {
            return new b(this.x * a.x, this.y * a.y, this.z * a.z, this.w * a.w)
        }, b.prototype.multiplyToRef = function(a, b) {
            return b.x = this.x * a.x, b.y = this.y * a.y, b.z = this.z * a.z, b.w = this.w * a.w, this
        }, b.prototype.multiplyByFloats = function(a, c, d, e) {
            return new b(this.x * a, this.y * c, this.z * d, this.w * e)
        }, b.prototype.divide = function(a) {
            return new b(this.x / a.x, this.y / a.y, this.z / a.z, this.w / a.w)
        }, b.prototype.divideToRef = function(a, b) {
            return b.x = this.x / a.x, b.y = this.y / a.y, b.z = this.z / a.z, b.w = this.w / a.w, this
        }, b.prototype.MinimizeInPlace = function(a) {
            return a.x < this.x && (this.x = a.x), a.y < this.y && (this.y = a.y), a.z < this.z && (this.z = a.z), a.w < this.w && (this.w = a.w), this
        }, b.prototype.MaximizeInPlace = function(a) {
            return a.x > this.x && (this.x = a.x), a.y > this.y && (this.y = a.y), a.z > this.z && (this.z = a.z), a.w > this.w && (this.w = a.w), this
        }, b.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }, b.prototype.lengthSquared = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, b.prototype.normalize = function() {
            var a = this.length();
            if (0 === a) return this;
            var b = 1 / a;
            return this.x *= b, this.y *= b, this.z *= b, this.w *= b, this
        }, b.prototype.clone = function() {
            return new b(this.x, this.y, this.z, this.w)
        }, b.prototype.copyFrom = function(a) {
            return this.x = a.x, this.y = a.y, this.z = a.z, this.w = a.w, this
        }, b.prototype.copyFromFloats = function(a, b, c, d) {
            return this.x = a, this.y = b, this.z = c, this.w = d, this
        }, b.FromArray = function(a, c) {
            return c || (c = 0), new b(a[c], a[c + 1], a[c + 2], a[c + 3])
        }, b.FromArrayToRef = function(a, b, c) {
            c.x = a[b], c.y = a[b + 1], c.z = a[b + 2], c.w = a[b + 3]
        }, b.FromFloatArrayToRef = function(a, b, c) {
            c.x = a[b], c.y = a[b + 1], c.z = a[b + 2], c.w = a[b + 3]
        }, b.FromFloatsToRef = function(a, b, c, d, e) {
            e.x = a, e.y = b, e.z = c, e.w = d
        }, b.Zero = function() {
            return new b(0, 0, 0, 0)
        }, b.Normalize = function(a) {
            var c = b.Zero();
            return b.NormalizeToRef(a, c), c
        }, b.NormalizeToRef = function(a, b) {
            b.copyFrom(a), b.normalize()
        }, b.Minimize = function(a, b) {
            var c = a.clone();
            return c.MinimizeInPlace(b), c
        }, b.Maximize = function(a, b) {
            var c = a.clone();
            return c.MaximizeInPlace(b), c
        }, b.Distance = function(a, c) {
            return Math.sqrt(b.DistanceSquared(a, c))
        }, b.DistanceSquared = function(a, b) {
            var c = a.x - b.x,
                d = a.y - b.y,
                e = a.z - b.z,
                f = a.w - b.w;
            return c * c + d * d + e * e + f * f
        }, b.Center = function(a, b) {
            var c = a.add(b);
            return c.scaleInPlace(.5), c
        }, b
    }();
    a.Vector4 = f;
    var g = function() {
        function a(a, b, c, d) {
            void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 1), this.x = a, this.y = b, this.z = c, this.w = d
        }
        return a.prototype.toString = function() {
            return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}"
        }, a.prototype.asArray = function() {
            return [this.x, this.y, this.z, this.w]
        }, a.prototype.equals = function(a) {
            return a && this.x === a.x && this.y === a.y && this.z === a.z && this.w === a.w
        }, a.prototype.clone = function() {
            return new a(this.x, this.y, this.z, this.w)
        }, a.prototype.copyFrom = function(a) {
            return this.x = a.x, this.y = a.y, this.z = a.z, this.w = a.w, this
        }, a.prototype.copyFromFloats = function(a, b, c, d) {
            return this.x = a, this.y = b, this.z = c, this.w = d, this
        }, a.prototype.add = function(b) {
            return new a(this.x + b.x, this.y + b.y, this.z + b.z, this.w + b.w)
        }, a.prototype.subtract = function(b) {
            return new a(this.x - b.x, this.y - b.y, this.z - b.z, this.w - b.w)
        }, a.prototype.scale = function(b) {
            return new a(this.x * b, this.y * b, this.z * b, this.w * b)
        }, a.prototype.multiply = function(b) {
            var c = new a(0, 0, 0, 1);
            return this.multiplyToRef(b, c), c
        }, a.prototype.multiplyToRef = function(a, b) {
            return b.x = this.x * a.w + this.y * a.z - this.z * a.y + this.w * a.x, b.y = -this.x * a.z + this.y * a.w + this.z * a.x + this.w * a.y, b.z = this.x * a.y - this.y * a.x + this.z * a.w + this.w * a.z, b.w = -this.x * a.x - this.y * a.y - this.z * a.z + this.w * a.w, this
        }, a.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }, a.prototype.normalize = function() {
            var a = 1 / this.length();
            return this.x *= a, this.y *= a, this.z *= a, this.w *= a, this
        }, a.prototype.toEulerAngles = function() {
            var a = e.Zero();
            return this.toEulerAnglesToRef(a), a
        }, a.prototype.toEulerAnglesToRef = function(a) {
            var b = this.x,
                c = this.y,
                d = this.z,
                e = this.w,
                f = b * c,
                g = b * d,
                h = e * c,
                i = e * d,
                j = e * b,
                k = c * d,
                l = b * b,
                m = c * c,
                n = l + m;
            return 0 !== n && 1 !== n ? (a.x = Math.atan2(g + h, j - k), a.y = Math.acos(1 - 2 * n), a.z = Math.atan2(g - h, j + k)) : 0 === n ? (a.x = 0, a.y = 0, a.z = Math.atan2(f - i, .5 - m - d * d)) : (a.x = Math.atan2(f - i, .5 - m - d * d), a.y = Math.PI, a.z = 0), this
        }, a.prototype.toRotationMatrix = function(a) {
            var b = this.x * this.x,
                c = this.y * this.y,
                d = this.z * this.z,
                e = this.x * this.y,
                f = this.z * this.w,
                g = this.z * this.x,
                h = this.y * this.w,
                i = this.y * this.z,
                j = this.x * this.w;
            return a.m[0] = 1 - 2 * (c + d), a.m[1] = 2 * (e + f), a.m[2] = 2 * (g - h), a.m[3] = 0, a.m[4] = 2 * (e - f), a.m[5] = 1 - 2 * (d + b), a.m[6] = 2 * (i + j), a.m[7] = 0, a.m[8] = 2 * (g + h), a.m[9] = 2 * (i - j), a.m[10] = 1 - 2 * (c + b), a.m[11] = 0, a.m[12] = 0, a.m[13] = 0, a.m[14] = 0, a.m[15] = 1, this
        }, a.prototype.fromRotationMatrix = function(b) {
            return a.FromRotationMatrixToRef(b, this), this
        }, a.FromRotationMatrix = function(b) {
            var c = new a;
            return a.FromRotationMatrixToRef(b, c), c
        }, a.FromRotationMatrixToRef = function(a, b) {
            var c, d = a.m,
                e = d[0],
                f = d[4],
                g = d[8],
                h = d[1],
                i = d[5],
                j = d[9],
                k = d[2],
                l = d[6],
                m = d[10],
                n = e + i + m;
            n > 0 ? (c = .5 / Math.sqrt(n + 1), b.w = .25 / c, b.x = (l - j) * c, b.y = (g - k) * c, b.z = (h - f) * c) : e > i && e > m ? (c = 2 * Math.sqrt(1 + e - i - m), b.w = (l - j) / c, b.x = .25 * c, b.y = (f + h) / c, b.z = (g + k) / c) : i > m ? (c = 2 * Math.sqrt(1 + i - e - m), b.w = (g - k) / c, b.x = (f + h) / c, b.y = .25 * c, b.z = (j + l) / c) : (c = 2 * Math.sqrt(1 + m - e - i), b.w = (h - f) / c, b.x = (g + k) / c, b.y = (j + l) / c, b.z = .25 * c)
        }, a.Inverse = function(b) {
            return new a(-b.x, -b.y, -b.z, b.w)
        }, a.Identity = function() {
            return new a(0, 0, 0, 1)
        }, a.RotationAxis = function(b, c) {
            var d = new a,
                e = Math.sin(c / 2);
            return d.w = Math.cos(c / 2), d.x = b.x * e, d.y = b.y * e, d.z = b.z * e, d
        }, a.FromArray = function(b, c) {
            return c || (c = 0), new a(b[c], b[c + 1], b[c + 2], b[c + 3])
        }, a.RotationYawPitchRoll = function(b, c, d) {
            var e = new a;
            return a.RotationYawPitchRollToRef(b, c, d, e), e
        }, a.RotationYawPitchRollToRef = function(a, b, c, d) {
            var e = .5 * c,
                f = .5 * b,
                g = .5 * a,
                h = Math.sin(e),
                i = Math.cos(e),
                j = Math.sin(f),
                k = Math.cos(f),
                l = Math.sin(g),
                m = Math.cos(g);
            d.x = m * j * i + l * k * h, d.y = l * k * i - m * j * h, d.z = m * k * h - l * j * i, d.w = m * k * i + l * j * h
        }, a.Slerp = function(b, c, d) {
            var e, f, g = d,
                h = b.x * c.x + b.y * c.y + b.z * c.z + b.w * c.w,
                i = !1;
            if (0 > h && (i = !0, h = -h), h > .999999) f = 1 - g, e = i ? -g : g;
            else {
                var j = Math.acos(h),
                    k = 1 / Math.sin(j);
                f = Math.sin((1 - g) * j) * k, e = i ? -Math.sin(g * j) * k : Math.sin(g * j) * k
            }
            return new a(f * b.x + e * c.x, f * b.y + e * c.y, f * b.z + e * c.z, f * b.w + e * c.w)
        }, a
    }();
    a.Quaternion = g;
    var h = function() {
        function b() {
            this.m = new Float32Array(16)
        }
        return b.prototype.isIdentity = function() {
            return 1 !== this.m[0] || 1 !== this.m[5] || 1 !== this.m[10] || 1 !== this.m[15] ? !1 : 0 !== this.m[1] || 0 !== this.m[2] || 0 !== this.m[3] || 0 !== this.m[4] || 0 !== this.m[6] || 0 !== this.m[7] || 0 !== this.m[8] || 0 !== this.m[9] || 0 !== this.m[11] || 0 !== this.m[12] || 0 !== this.m[13] || 0 !== this.m[14] ? !1 : !0
        }, b.prototype.determinant = function() {
            var a = this.m[10] * this.m[15] - this.m[11] * this.m[14],
                b = this.m[9] * this.m[15] - this.m[11] * this.m[13],
                c = this.m[9] * this.m[14] - this.m[10] * this.m[13],
                d = this.m[8] * this.m[15] - this.m[11] * this.m[12],
                e = this.m[8] * this.m[14] - this.m[10] * this.m[12],
                f = this.m[8] * this.m[13] - this.m[9] * this.m[12];
            return this.m[0] * (this.m[5] * a - this.m[6] * b + this.m[7] * c) - this.m[1] * (this.m[4] * a - this.m[6] * d + this.m[7] * e) + this.m[2] * (this.m[4] * b - this.m[5] * d + this.m[7] * f) - this.m[3] * (this.m[4] * c - this.m[5] * e + this.m[6] * f)
        }, b.prototype.toArray = function() {
            return this.m
        }, b.prototype.asArray = function() {
            return this.toArray()
        }, b.prototype.invert = function() {
            return this.invertToRef(this), this
        }, b.prototype.invertToRef = function(a) {
            var b = this.m[0],
                c = this.m[1],
                d = this.m[2],
                e = this.m[3],
                f = this.m[4],
                g = this.m[5],
                h = this.m[6],
                i = this.m[7],
                j = this.m[8],
                k = this.m[9],
                l = this.m[10],
                m = this.m[11],
                n = this.m[12],
                o = this.m[13],
                p = this.m[14],
                q = this.m[15],
                r = l * q - m * p,
                s = k * q - m * o,
                t = k * p - l * o,
                u = j * q - m * n,
                v = j * p - l * n,
                w = j * o - k * n,
                x = g * r - h * s + i * t,
                y = -(f * r - h * u + i * v),
                z = f * s - g * u + i * w,
                A = -(f * t - g * v + h * w),
                B = 1 / (b * x + c * y + d * z + e * A),
                C = h * q - i * p,
                D = g * q - i * o,
                E = g * p - h * o,
                F = f * q - i * n,
                G = f * p - h * n,
                H = f * o - g * n,
                I = h * m - i * l,
                J = g * m - i * k,
                K = g * l - h * k,
                L = f * m - i * j,
                M = f * l - h * j,
                N = f * k - g * j;
            return a.m[0] = x * B, a.m[4] = y * B, a.m[8] = z * B, a.m[12] = A * B, a.m[1] = -(c * r - d * s + e * t) * B, a.m[5] = (b * r - d * u + e * v) * B, a.m[9] = -(b * s - c * u + e * w) * B, a.m[13] = (b * t - c * v + d * w) * B, a.m[2] = (c * C - d * D + e * E) * B, a.m[6] = -(b * C - d * F + e * G) * B, a.m[10] = (b * D - c * F + e * H) * B, a.m[14] = -(b * E - c * G + d * H) * B, a.m[3] = -(c * I - d * J + e * K) * B, a.m[7] = (b * I - d * L + e * M) * B, a.m[11] = -(b * J - c * L + e * N) * B, a.m[15] = (b * K - c * M + d * N) * B, this
        }, b.prototype.setTranslation = function(a) {
            return this.m[12] = a.x, this.m[13] = a.y, this.m[14] = a.z, this
        }, b.prototype.multiply = function(a) {
            var c = new b;
            return this.multiplyToRef(a, c), c
        }, b.prototype.copyFrom = function(a) {
            for (var b = 0; 16 > b; b++) this.m[b] = a.m[b];
            return this
        }, b.prototype.copyToArray = function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0; 16 > c; c++) a[b + c] = this.m[c];
            return this
        }, b.prototype.multiplyToRef = function(a, b) {
            return this.multiplyToArray(a, b.m, 0), this
        }, b.prototype.multiplyToArray = function(a, b, c) {
            var d = this.m[0],
                e = this.m[1],
                f = this.m[2],
                g = this.m[3],
                h = this.m[4],
                i = this.m[5],
                j = this.m[6],
                k = this.m[7],
                l = this.m[8],
                m = this.m[9],
                n = this.m[10],
                o = this.m[11],
                p = this.m[12],
                q = this.m[13],
                r = this.m[14],
                s = this.m[15],
                t = a.m[0],
                u = a.m[1],
                v = a.m[2],
                w = a.m[3],
                x = a.m[4],
                y = a.m[5],
                z = a.m[6],
                A = a.m[7],
                B = a.m[8],
                C = a.m[9],
                D = a.m[10],
                E = a.m[11],
                F = a.m[12],
                G = a.m[13],
                H = a.m[14],
                I = a.m[15];
            return b[c] = d * t + e * x + f * B + g * F, b[c + 1] = d * u + e * y + f * C + g * G, b[c + 2] = d * v + e * z + f * D + g * H, b[c + 3] = d * w + e * A + f * E + g * I, b[c + 4] = h * t + i * x + j * B + k * F, b[c + 5] = h * u + i * y + j * C + k * G, b[c + 6] = h * v + i * z + j * D + k * H, b[c + 7] = h * w + i * A + j * E + k * I, b[c + 8] = l * t + m * x + n * B + o * F, b[c + 9] = l * u + m * y + n * C + o * G, b[c + 10] = l * v + m * z + n * D + o * H, b[c + 11] = l * w + m * A + n * E + o * I, b[c + 12] = p * t + q * x + r * B + s * F, b[c + 13] = p * u + q * y + r * C + s * G, b[c + 14] = p * v + q * z + r * D + s * H, b[c + 15] = p * w + q * A + r * E + s * I, this
        }, b.prototype.equals = function(a) {
            return a && this.m[0] === a.m[0] && this.m[1] === a.m[1] && this.m[2] === a.m[2] && this.m[3] === a.m[3] && this.m[4] === a.m[4] && this.m[5] === a.m[5] && this.m[6] === a.m[6] && this.m[7] === a.m[7] && this.m[8] === a.m[8] && this.m[9] === a.m[9] && this.m[10] === a.m[10] && this.m[11] === a.m[11] && this.m[12] === a.m[12] && this.m[13] === a.m[13] && this.m[14] === a.m[14] && this.m[15] === a.m[15]
        }, b.prototype.clone = function() {
            return b.FromValues(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8], this.m[9], this.m[10], this.m[11], this.m[12], this.m[13], this.m[14], this.m[15])
        }, b.prototype.decompose = function(c, d, e) {
            e.x = this.m[12], e.y = this.m[13], e.z = this.m[14];
            var f = a.Tools.Sign(this.m[0] * this.m[1] * this.m[2] * this.m[3]) < 0 ? -1 : 1,
                h = a.Tools.Sign(this.m[4] * this.m[5] * this.m[6] * this.m[7]) < 0 ? -1 : 1,
                i = a.Tools.Sign(this.m[8] * this.m[9] * this.m[10] * this.m[11]) < 0 ? -1 : 1;
            if (c.x = f * Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1] + this.m[2] * this.m[2]), c.y = h * Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5] + this.m[6] * this.m[6]), c.z = i * Math.sqrt(this.m[8] * this.m[8] + this.m[9] * this.m[9] + this.m[10] * this.m[10]), 0 === c.x || 0 === c.y || 0 === c.z) return d.x = 0, d.y = 0, d.z = 0, d.w = 1, !1;
            var j = b.FromValues(this.m[0] / c.x, this.m[1] / c.x, this.m[2] / c.x, 0, this.m[4] / c.y, this.m[5] / c.y, this.m[6] / c.y, 0, this.m[8] / c.z, this.m[9] / c.z, this.m[10] / c.z, 0, 0, 0, 0, 1);
            return g.FromRotationMatrixToRef(j, d), !0
        }, b.FromArray = function(a, c) {
            var d = new b;
            return c || (c = 0), b.FromArrayToRef(a, c, d), d
        }, b.FromArrayToRef = function(a, b, c) {
            for (var d = 0; 16 > d; d++) c.m[d] = a[d + b]
        }, b.FromValuesToRef = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
            q.m[0] = a, q.m[1] = b, q.m[2] = c, q.m[3] = d, q.m[4] = e, q.m[5] = f, q.m[6] = g, q.m[7] = h, q.m[8] = i, q.m[9] = j, q.m[10] = k, q.m[11] = l, q.m[12] = m, q.m[13] = n, q.m[14] = o, q.m[15] = p
        }, b.FromValues = function(a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
            var r = new b;
            return r.m[0] = a, r.m[1] = c, r.m[2] = d, r.m[3] = e, r.m[4] = f, r.m[5] = g, r.m[6] = h, r.m[7] = i, r.m[8] = j, r.m[9] = k, r.m[10] = l, r.m[11] = m, r.m[12] = n, r.m[13] = o, r.m[14] = p, r.m[15] = q, r
        }, b.Compose = function(a, c, d) {
            var e = b.FromValues(a.x, 0, 0, 0, 0, a.y, 0, 0, 0, 0, a.z, 0, 0, 0, 0, 1),
                f = b.Identity();
            return c.toRotationMatrix(f), e = e.multiply(f), e.setTranslation(d), e
        }, b.Identity = function() {
            return b.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }, b.IdentityToRef = function(a) {
            b.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, a)
        }, b.Zero = function() {
            return b.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }, b.RotationX = function(a) {
            var c = new b;
            return b.RotationXToRef(a, c), c
        }, b.Invert = function(a) {
            var c = new b;
            return a.invertToRef(c), c
        }, b.RotationXToRef = function(a, b) {
            var c = Math.sin(a),
                d = Math.cos(a);
            b.m[0] = 1, b.m[15] = 1, b.m[5] = d, b.m[10] = d, b.m[9] = -c, b.m[6] = c, b.m[1] = 0, b.m[2] = 0, b.m[3] = 0, b.m[4] = 0, b.m[7] = 0, b.m[8] = 0, b.m[11] = 0, b.m[12] = 0, b.m[13] = 0, b.m[14] = 0
        }, b.RotationY = function(a) {
            var c = new b;
            return b.RotationYToRef(a, c), c
        }, b.RotationYToRef = function(a, b) {
            var c = Math.sin(a),
                d = Math.cos(a);
            b.m[5] = 1, b.m[15] = 1, b.m[0] = d, b.m[2] = -c, b.m[8] = c, b.m[10] = d, b.m[1] = 0, b.m[3] = 0, b.m[4] = 0, b.m[6] = 0, b.m[7] = 0, b.m[9] = 0, b.m[11] = 0, b.m[12] = 0, b.m[13] = 0, b.m[14] = 0
        }, b.RotationZ = function(a) {
            var c = new b;
            return b.RotationZToRef(a, c), c
        }, b.RotationZToRef = function(a, b) {
            var c = Math.sin(a),
                d = Math.cos(a);
            b.m[10] = 1, b.m[15] = 1, b.m[0] = d, b.m[1] = c, b.m[4] = -c, b.m[5] = d, b.m[2] = 0, b.m[3] = 0, b.m[6] = 0, b.m[7] = 0, b.m[8] = 0, b.m[9] = 0, b.m[11] = 0, b.m[12] = 0, b.m[13] = 0, b.m[14] = 0
        }, b.RotationAxis = function(a, c) {
            var d = Math.sin(-c),
                e = Math.cos(-c),
                f = 1 - e;
            a.normalize();
            var g = b.Zero();
            return g.m[0] = a.x * a.x * f + e, g.m[1] = a.x * a.y * f - a.z * d, g.m[2] = a.x * a.z * f + a.y * d, g.m[3] = 0, g.m[4] = a.y * a.x * f + a.z * d, g.m[5] = a.y * a.y * f + e, g.m[6] = a.y * a.z * f - a.x * d, g.m[7] = 0, g.m[8] = a.z * a.x * f - a.y * d, g.m[9] = a.z * a.y * f + a.x * d, g.m[10] = a.z * a.z * f + e, g.m[11] = 0, g.m[15] = 1, g
        }, b.RotationYawPitchRoll = function(a, c, d) {
            var e = new b;
            return b.RotationYawPitchRollToRef(a, c, d, e), e
        }, b.RotationYawPitchRollToRef = function(a, b, c, d) {
            g.RotationYawPitchRollToRef(a, b, c, this._tempQuaternion), this._tempQuaternion.toRotationMatrix(d)
        }, b.Scaling = function(a, c, d) {
            var e = b.Zero();
            return b.ScalingToRef(a, c, d, e), e
        }, b.ScalingToRef = function(a, b, c, d) {
            d.m[0] = a, d.m[1] = 0, d.m[2] = 0, d.m[3] = 0, d.m[4] = 0, d.m[5] = b, d.m[6] = 0, d.m[7] = 0, d.m[8] = 0, d.m[9] = 0, d.m[10] = c, d.m[11] = 0, d.m[12] = 0, d.m[13] = 0, d.m[14] = 0, d.m[15] = 1
        }, b.Translation = function(a, c, d) {
            var e = b.Identity();
            return b.TranslationToRef(a, c, d, e), e
        }, b.TranslationToRef = function(a, c, d, e) {
            b.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a, c, d, 1, e)
        }, b.LookAtLH = function(a, c, d) {
            var e = b.Zero();
            return b.LookAtLHToRef(a, c, d, e), e
        }, b.LookAtLHToRef = function(a, c, d, f) {
            c.subtractToRef(a, this._zAxis), this._zAxis.normalize(), e.CrossToRef(d, this._zAxis, this._xAxis), this._xAxis.normalize(), e.CrossToRef(this._zAxis, this._xAxis, this._yAxis), this._yAxis.normalize();
            var g = -e.Dot(this._xAxis, a),
                h = -e.Dot(this._yAxis, a),
                i = -e.Dot(this._zAxis, a);
            return b.FromValuesToRef(this._xAxis.x, this._yAxis.x, this._zAxis.x, 0, this._xAxis.y, this._yAxis.y, this._zAxis.y, 0, this._xAxis.z, this._yAxis.z, this._zAxis.z, 0, g, h, i, 1, f)
        }, b.OrthoLH = function(a, c, d, e) {
            var f = 2 / a,
                g = 2 / c,
                h = 1 / (e - d),
                i = d / (d - e);
            return b.FromValues(f, 0, 0, 0, 0, g, 0, 0, 0, 0, h, 0, 0, 0, i, 1)
        }, b.OrthoOffCenterLH = function(a, c, d, e, f, g) {
            var h = b.Zero();
            return b.OrthoOffCenterLHToRef(a, c, d, e, f, g, h), h
        }, b.OrthoOffCenterLHToRef = function(a, b, c, d, e, f, g) {
            g.m[0] = 2 / (b - a), g.m[1] = g.m[2] = g.m[3] = 0, g.m[5] = 2 / (d - c), g.m[4] = g.m[6] = g.m[7] = 0, g.m[10] = -1 / (e - f), g.m[8] = g.m[9] = g.m[11] = 0, g.m[12] = (a + b) / (a - b), g.m[13] = (d + c) / (c - d), g.m[14] = e / (e - f), g.m[15] = 1
        }, b.PerspectiveLH = function(a, c, d, e) {
            var f = b.Zero();
            return f.m[0] = 2 * d / a, f.m[1] = f.m[2] = f.m[3] = 0, f.m[5] = 2 * d / c, f.m[4] = f.m[6] = f.m[7] = 0, f.m[10] = -e / (d - e), f.m[8] = f.m[9] = 0, f.m[11] = 1, f.m[12] = f.m[13] = f.m[15] = 0, f.m[14] = d * e / (d - e), f
        }, b.PerspectiveFovLH = function(a, c, d, e) {
            var f = b.Zero();
            return b.PerspectiveFovLHToRef(a, c, d, e, f), f
        }, b.PerspectiveFovLHToRef = function(b, c, d, e, f, g) {
            void 0 === g && (g = a.Camera.FOVMODE_VERTICAL_FIXED);
            var h = 1 / Math.tan(.5 * b),
                i = g === a.Camera.FOVMODE_VERTICAL_FIXED;
            f.m[0] = i ? h / c : h, f.m[1] = f.m[2] = f.m[3] = 0, f.m[5] = i ? h : h * c, f.m[4] = f.m[6] = f.m[7] = 0, f.m[8] = f.m[9] = 0, f.m[10] = -e / (d - e), f.m[11] = 1, f.m[12] = f.m[13] = f.m[15] = 0, f.m[14] = d * e / (d - e)
        }, b.GetFinalMatrix = function(a, c, d, e, f, g) {
            var h = a.width,
                i = a.height,
                j = a.x,
                k = a.y,
                l = b.FromValues(h / 2, 0, 0, 0, 0, -i / 2, 0, 0, 0, 0, g - f, 0, j + h / 2, i / 2 + k, f, 1);
            return c.multiply(d).multiply(e).multiply(l)
        }, b.Transpose = function(a) {
            var c = new b;
            return c.m[0] = a.m[0], c.m[1] = a.m[4], c.m[2] = a.m[8], c.m[3] = a.m[12], c.m[4] = a.m[1], c.m[5] = a.m[5], c.m[6] = a.m[9], c.m[7] = a.m[13], c.m[8] = a.m[2], c.m[9] = a.m[6], c.m[10] = a.m[10], c.m[11] = a.m[14], c.m[12] = a.m[3], c.m[13] = a.m[7], c.m[14] = a.m[11], c.m[15] = a.m[15], c
        }, b.Reflection = function(a) {
            var c = new b;
            return b.ReflectionToRef(a, c), c
        }, b.ReflectionToRef = function(a, b) {
            a.normalize();
            var c = a.normal.x,
                d = a.normal.y,
                e = a.normal.z,
                f = -2 * c,
                g = -2 * d,
                h = -2 * e;
            b.m[0] = f * c + 1, b.m[1] = g * c, b.m[2] = h * c, b.m[3] = 0, b.m[4] = f * d, b.m[5] = g * d + 1, b.m[6] = h * d, b.m[7] = 0, b.m[8] = f * e, b.m[9] = g * e, b.m[10] = h * e + 1, b.m[11] = 0, b.m[12] = f * a.d, b.m[13] = g * a.d, b.m[14] = h * a.d, b.m[15] = 1
        }, b._tempQuaternion = new g, b._xAxis = e.Zero(), b._yAxis = e.Zero(), b._zAxis = e.Zero(), b
    }();
    a.Matrix = h;
    var i = function() {
        function a(a, b, c, d) {
            this.normal = new e(a, b, c), this.d = d
        }
        return a.prototype.asArray = function() {
            return [this.normal.x, this.normal.y, this.normal.z, this.d]
        }, a.prototype.clone = function() {
            return new a(this.normal.x, this.normal.y, this.normal.z, this.d)
        }, a.prototype.normalize = function() {
            var a = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z),
                b = 0;
            return 0 !== a && (b = 1 / a), this.normal.x *= b, this.normal.y *= b, this.normal.z *= b, this.d *= b, this
        }, a.prototype.transform = function(b) {
            var c = h.Transpose(b),
                d = this.normal.x,
                e = this.normal.y,
                f = this.normal.z,
                g = this.d,
                i = d * c.m[0] + e * c.m[1] + f * c.m[2] + g * c.m[3],
                j = d * c.m[4] + e * c.m[5] + f * c.m[6] + g * c.m[7],
                k = d * c.m[8] + e * c.m[9] + f * c.m[10] + g * c.m[11],
                l = d * c.m[12] + e * c.m[13] + f * c.m[14] + g * c.m[15];
            return new a(i, j, k, l)
        }, a.prototype.dotCoordinate = function(a) {
            return this.normal.x * a.x + this.normal.y * a.y + this.normal.z * a.z + this.d
        }, a.prototype.copyFromPoints = function(a, b, c) {
            var d, e = b.x - a.x,
                f = b.y - a.y,
                g = b.z - a.z,
                h = c.x - a.x,
                i = c.y - a.y,
                j = c.z - a.z,
                k = f * j - g * i,
                l = g * h - e * j,
                m = e * i - f * h,
                n = Math.sqrt(k * k + l * l + m * m);
            return d = 0 !== n ? 1 / n : 0, this.normal.x = k * d, this.normal.y = l * d, this.normal.z = m * d, this.d = -(this.normal.x * a.x + this.normal.y * a.y + this.normal.z * a.z), this
        }, a.prototype.isFrontFacingTo = function(a, b) {
            var c = e.Dot(this.normal, a);
            return b >= c
        }, a.prototype.signedDistanceTo = function(a) {
            return e.Dot(a, this.normal) + this.d
        }, a.FromArray = function(b) {
            return new a(b[0], b[1], b[2], b[3])
        }, a.FromPoints = function(b, c, d) {
            var e = new a(0, 0, 0, 0);
            return e.copyFromPoints(b, c, d), e
        }, a.FromPositionAndNormal = function(b, c) {
            var d = new a(0, 0, 0, 0);
            return c.normalize(), d.normal = c, d.d = -(c.x * b.x + c.y * b.y + c.z * b.z), d
        }, a.SignedDistanceToPlaneFromPositionAndNormal = function(a, b, c) {
            var d = -(b.x * a.x + b.y * a.y + b.z * a.z);
            return e.Dot(c, b) + d
        }, a
    }();
    a.Plane = i;
    var j = function() {
        function a(a, b, c, d) {
            this.x = a, this.y = b, this.width = c, this.height = d
        }
        return a.prototype.toGlobal = function(b) {
            var c = b.getRenderWidth(),
                d = b.getRenderHeight();
            return new a(this.x * c, this.y * d, this.width * c, this.height * d)
        }, a
    }();
    a.Viewport = j;
    var k = function() {
        function a() {}
        return a.GetPlanes = function(b) {
            for (var c = [], d = 0; 6 > d; d++) c.push(new i(0, 0, 0, 0));
            return a.GetPlanesToRef(b, c), c
        }, a.GetPlanesToRef = function(a, b) {
            b[0].normal.x = a.m[3] + a.m[2], b[0].normal.y = a.m[7] + a.m[6], b[0].normal.z = a.m[10] + a.m[10], b[0].d = a.m[15] + a.m[14], b[0].normalize(), b[1].normal.x = a.m[3] - a.m[2], b[1].normal.y = a.m[7] - a.m[6], b[1].normal.z = a.m[11] - a.m[10], b[1].d = a.m[15] - a.m[14], b[1].normalize(), b[2].normal.x = a.m[3] + a.m[0], b[2].normal.y = a.m[7] + a.m[4], b[2].normal.z = a.m[11] + a.m[8], b[2].d = a.m[15] + a.m[12], b[2].normalize(), b[3].normal.x = a.m[3] - a.m[0], b[3].normal.y = a.m[7] - a.m[4], b[3].normal.z = a.m[11] - a.m[8], b[3].d = a.m[15] - a.m[12], b[3].normalize(), b[4].normal.x = a.m[3] - a.m[1], b[4].normal.y = a.m[7] - a.m[5], b[4].normal.z = a.m[11] - a.m[9], b[4].d = a.m[15] - a.m[13], b[4].normalize(), b[5].normal.x = a.m[3] + a.m[1], b[5].normal.y = a.m[7] + a.m[5], b[5].normal.z = a.m[11] + a.m[9], b[5].d = a.m[15] + a.m[13], b[5].normalize()
        }, a
    }();
    a.Frustum = k;
    var l = function() {
        function b(a, b, c) {
            void 0 === c && (c = Number.MAX_VALUE), this.origin = a, this.direction = b, this.length = c
        }
        return b.prototype.intersectsBoxMinMax = function(a, b) {
            var c = 0,
                d = Number.MAX_VALUE;
            if (Math.abs(this.direction.x) < 1e-7) {
                if (this.origin.x < a.x || this.origin.x > b.x) return !1
            } else {
                var e = 1 / this.direction.x,
                    f = (a.x - this.origin.x) * e,
                    g = (b.x - this.origin.x) * e;
                if (g === -1 / 0 && (g = 1 / 0), f > g) {
                    var h = f;
                    f = g, g = h
                }
                if (c = Math.max(f, c), d = Math.min(g, d), c > d) return !1
            }
            if (Math.abs(this.direction.y) < 1e-7) {
                if (this.origin.y < a.y || this.origin.y > b.y) return !1
            } else if (e = 1 / this.direction.y, f = (a.y - this.origin.y) * e, g = (b.y - this.origin.y) * e, g === -1 / 0 && (g = 1 / 0), f > g && (h = f, f = g, g = h), c = Math.max(f, c), d = Math.min(g, d), c > d) return !1;
            if (Math.abs(this.direction.z) < 1e-7) {
                if (this.origin.z < a.z || this.origin.z > b.z) return !1
            } else if (e = 1 / this.direction.z, f = (a.z - this.origin.z) * e, g = (b.z - this.origin.z) * e, g === -1 / 0 && (g = 1 / 0), f > g && (h = f, f = g, g = h), c = Math.max(f, c), d = Math.min(g, d), c > d) return !1;
            return !0
        }, b.prototype.intersectsBox = function(a) {
            return this.intersectsBoxMinMax(a.minimum, a.maximum)
        }, b.prototype.intersectsSphere = function(a) {
            var b = a.center.x - this.origin.x,
                c = a.center.y - this.origin.y,
                d = a.center.z - this.origin.z,
                e = b * b + c * c + d * d,
                f = a.radius * a.radius;
            if (f >= e) return !0;
            var g = b * this.direction.x + c * this.direction.y + d * this.direction.z;
            if (0 > g) return !1;
            var h = e - g * g;
            return f >= h
        }, b.prototype.intersectsTriangle = function(b, c, d) {
            this._edge1 || (this._edge1 = e.Zero(), this._edge2 = e.Zero(), this._pvec = e.Zero(), this._tvec = e.Zero(), this._qvec = e.Zero()), c.subtractToRef(b, this._edge1), d.subtractToRef(b, this._edge2), e.CrossToRef(this.direction, this._edge2, this._pvec);
            var f = e.Dot(this._edge1, this._pvec);
            if (0 === f) return null;
            var g = 1 / f;
            this.origin.subtractToRef(b, this._tvec);
            var h = e.Dot(this._tvec, this._pvec) * g;
            if (0 > h || h > 1) return null;
            e.CrossToRef(this._tvec, this._edge1, this._qvec);
            var i = e.Dot(this.direction, this._qvec) * g;
            if (0 > i || h + i > 1) return null;
            var j = e.Dot(this._edge2, this._qvec) * g;
            return j > this.length ? null : new a.IntersectionInfo(h, i, j)
        }, b.CreateNew = function(a, c, d, f, g, h, i) {
            var j = e.Unproject(new e(a, c, 0), d, f, g, h, i),
                k = e.Unproject(new e(a, c, 1), d, f, g, h, i),
                l = k.subtract(j);
            return l.normalize(), new b(j, l)
        }, b.CreateNewFromTo = function(a, c, d) {
            void 0 === d && (d = h.Identity());
            var e = c.subtract(a),
                f = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
            return e.normalize(), b.Transform(new b(a, e, f), d)
        }, b.Transform = function(a, c) {
            var d = e.TransformCoordinates(a.origin, c),
                f = e.TransformNormal(a.direction, c);
            return new b(d, f, a.length)
        }, b
    }();
    a.Ray = l,
        function(a) {
            a[a.LOCAL = 0] = "LOCAL", a[a.WORLD = 1] = "WORLD"
        }(a.Space || (a.Space = {}));
    var m = (a.Space, function() {
        function a() {}
        return a.X = new e(1, 0, 0), a.Y = new e(0, 1, 0), a.Z = new e(0, 0, 1), a
    }());
    a.Axis = m;
    var n = function() {
        function a() {}
        return a.interpolate = function(a, b, c, d, e) {
            for (var f = 1 - 3 * d + 3 * b, g = 3 * d - 6 * b, h = 3 * b, i = a, j = 0; 5 > j; j++) {
                var k = i * i,
                    l = k * i,
                    m = f * l + g * k + h * i,
                    n = 1 / (3 * f * k + 2 * g * i + h);
                i -= (m - a) * n, i = Math.min(1, Math.max(0, i))
            }
            return 3 * Math.pow(1 - i, 2) * i * c + 3 * (1 - i) * Math.pow(i, 2) * e + Math.pow(i, 3)
        }, a
    }();
    a.BezierCurve = n,
        function(a) {
            a[a.CW = 0] = "CW", a[a.CCW = 1] = "CCW"
        }(a.Orientation || (a.Orientation = {}));
    var o = (a.Orientation, function() {
        function a(a) {
            var b = this;
            this.degrees = function() {
                return 180 * b._radians / Math.PI
            }, this.radians = function() {
                return b._radians
            }, this._radians = a, this._radians < 0 && (this._radians += 2 * Math.PI)
        }
        return a.BetweenTwoPoints = function(b, c) {
            var d = c.subtract(b),
                e = Math.atan2(d.y, d.x);
            return new a(e)
        }, a.FromRadians = function(b) {
            return new a(b)
        }, a.FromDegrees = function(b) {
            return new a(b * Math.PI / 180)
        }, a
    }());
    a.Angle = o;
    var p = function() {
        function a(a, b, c) {
            this.startPoint = a, this.midPoint = b, this.endPoint = c;
            var e = Math.pow(b.x, 2) + Math.pow(b.y, 2),
                f = (Math.pow(a.x, 2) + Math.pow(a.y, 2) - e) / 2,
                g = (e - Math.pow(c.x, 2) - Math.pow(c.y, 2)) / 2,
                h = (a.x - b.x) * (b.y - c.y) - (b.x - c.x) * (a.y - b.y);
            this.centerPoint = new d((f * (b.y - c.y) - g * (a.y - b.y)) / h, ((a.x - b.x) * g - (b.x - c.x) * f) / h), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = o.BetweenTwoPoints(this.centerPoint, this.startPoint);
            var i = this.startAngle.degrees(),
                j = o.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
                k = o.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
            j - i > 180 && (j -= 360), -180 > j - i && (j += 360), k - j > 180 && (k -= 360), -180 > k - j && (k += 360), this.orientation = 0 > j - i ? 0 : 1, this.angle = o.FromDegrees(0 === this.orientation ? i - k : k - i)
        }
        return a
    }();
    a.Arc2 = p;
    var q = function() {
        function a(a) {
            this.path = a, this._onchange = new Array, this.value = 0, this.animations = new Array
        }
        return a.prototype.getPoint = function() {
            var a = this.path.getPointAtLengthPosition(this.value);
            return new e(a.x, 0, a.y)
        }, a.prototype.moveAhead = function(a) {
            return void 0 === a && (a = .002), this.move(a), this
        }, a.prototype.moveBack = function(a) {
            return void 0 === a && (a = .002), this.move(-a), this
        }, a.prototype.move = function(a) {
            if (Math.abs(a) > 1) throw "step size should be less than 1.";
            return this.value += a, this.ensureLimits(), this.raiseOnChange(), this
        }, a.prototype.ensureLimits = function() {
            for (; this.value > 1;) this.value -= 1;
            for (; this.value < 0;) this.value += 1;
            return this
        }, a.prototype.markAsDirty = function() {
            return this.ensureLimits(), this.raiseOnChange(), this
        }, a.prototype.raiseOnChange = function() {
            var a = this;
            return this._onchange.forEach(function(b) {
                return b(a)
            }), this
        }, a.prototype.onchange = function(a) {
            return this._onchange.push(a), this
        }, a
    }();
    a.PathCursor = q;
    var r = function() {
        function b(a, b) {
            this._points = [], this._length = 0, this.closed = !1, this._points.push(new d(a, b))
        }
        return b.prototype.addLineTo = function(b, c) {
            if (closed) return a.Tools.Error("cannot add lines to closed paths"), this;
            var e = new d(b, c),
                f = this._points[this._points.length - 1];
            return this._points.push(e), this._length += e.subtract(f).length(), this
        }, b.prototype.addArcTo = function(b, c, e, f, g) {
            if (void 0 === g && (g = 36), closed) return a.Tools.Error("cannot add arcs to closed paths"), this;
            var h = this._points[this._points.length - 1],
                i = new d(b, c),
                j = new d(e, f),
                k = new p(h, i, j),
                l = k.angle.radians() / g;
            0 === k.orientation && (l *= -1);
            for (var m = k.startAngle.radians() + l, n = 0; g > n; n++) {
                var o = Math.cos(m) * k.radius + k.centerPoint.x,
                    q = Math.sin(m) * k.radius + k.centerPoint.y;
                this.addLineTo(o, q), m += l
            }
            return this
        }, b.prototype.close = function() {
            return this.closed = !0, this
        }, b.prototype.length = function() {
            var a = this._length;
            if (!this.closed) {
                var b = this._points[this._points.length - 1],
                    c = this._points[0];
                a += c.subtract(b).length()
            }
            return a
        }, b.prototype.getPoints = function() {
            return this._points
        }, b.prototype.getPointAtLengthPosition = function(b) {
            if (0 > b || b > 1) return a.Tools.Error("normalized length position should be between 0 and 1."), d.Zero();
            for (var c = b * this.length(), e = 0, f = 0; f < this._points.length; f++) {
                var g = (f + 1) % this._points.length,
                    h = this._points[f],
                    i = this._points[g],
                    j = i.subtract(h),
                    k = j.length() + e;
                if (c >= e && k >= c) {
                    var l = j.normalize(),
                        m = c - e;
                    return new d(h.x + l.x * m, h.y + l.y * m)
                }
                e = k
            }
            return a.Tools.Error("internal error"), d.Zero()
        }, b.StartingAt = function(a, c) {
            return new b(a, c)
        }, b
    }();
    a.Path2 = r
}(BABYLON || (BABYLON = {})),
function(a) {
    var b, c = function(b, c) {
            return b ? b instanceof a.Mesh ? null : b instanceof a.SubMesh ? b.clone(c) : b.clone ? b.clone() : null : null
        },
        d = function() {
            function d() {}
            return d.GetFilename = function(a) {
                var b = a.lastIndexOf("/");
                return 0 > b ? a : a.substring(b + 1)
            }, d.GetDOMTextContent = function(a) {
                for (var b = "", c = a.firstChild; c;) 3 === c.nodeType && (b += c.textContent), c = c.nextSibling;
                return b
            }, d.ToDegrees = function(a) {
                return 180 * a / Math.PI
            }, d.ToRadians = function(a) {
                return a * Math.PI / 180
            }, d.ExtractMinAndMaxIndexed = function(b, c, d, e) {
                for (var f = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), g = new a.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), h = d; d + e > h; h++) {
                    var i = new a.Vector3(b[3 * c[h]], b[3 * c[h] + 1], b[3 * c[h] + 2]);
                    f = a.Vector3.Minimize(i, f), g = a.Vector3.Maximize(i, g)
                }
                return {
                    minimum: f,
                    maximum: g
                }
            }, d.ExtractMinAndMax = function(b, c, d) {
                for (var e = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), f = new a.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), g = c; c + d > g; g++) {
                    var h = new a.Vector3(b[3 * g], b[3 * g + 1], b[3 * g + 2]);
                    e = a.Vector3.Minimize(h, e), f = a.Vector3.Maximize(h, f)
                }
                return {
                    minimum: e,
                    maximum: f
                }
            }, d.MakeArray = function(a, b) {
                return b === !0 || void 0 !== a && null != a ? Array.isArray(a) ? a : [a] : void 0
            }, d.GetPointerPrefix = function() {
                var a = "pointer";
                return navigator.pointerEnabled || (a = "mouse"), a
            }, d.QueueNewFrame = function(a) {
                window.requestAnimationFrame ? window.requestAnimationFrame(a) : window.msRequestAnimationFrame ? window.msRequestAnimationFrame(a) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(a) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(a) : window.oRequestAnimationFrame ? window.oRequestAnimationFrame(a) : window.setTimeout(a, 16)
            }, d.RequestFullscreen = function(a) {
                a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen && a.mozRequestFullScreen()
            }, d.ExitFullscreen = function() {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msCancelFullScreen && document.msCancelFullScreen()
            }, d.CleanUrl = function(a) {
                return a = a.replace(/#/gm, "%23")
            }, d.LoadImage = function(b, c, e, f) {
                b = d.CleanUrl(b);
                var g = new Image;
                "data:" !== b.substr(0, 5) && (g.crossOrigin = "anonymous"), g.onload = function() {
                    c(g)
                }, g.onerror = function(a) {
                    e(g, a)
                };
                var h = function() {
                        g.src = b
                    },
                    i = function() {
                        f.loadImageFromDB(b, g)
                    };
                if (f && f.enableTexturesOffline && a.Database.isUASupportingBlobStorage) f.openAsync(i, h);
                else if (-1 === b.indexOf("file:")) h();
                else try {
                    var j, k = b.substring(5);
                    try {
                        j = URL.createObjectURL(a.FilesInput.FilesTextures[k], {
                            oneTimeOnly: !0
                        })
                    } catch (l) {
                        j = URL.createObjectURL(a.FilesInput.FilesTextures[k])
                    }
                    g.src = j
                } catch (m) {
                    d.Log("Error while trying to load texture: " + k), g.src = null
                }
                return g
            }, d.LoadFile = function(b, c, e, f, g, h) {
                b = d.CleanUrl(b);
                var i = function() {
                        var a = new XMLHttpRequest,
                            f = d.BaseUrl + b;
                        a.open("GET", f, !0), g && (a.responseType = "arraybuffer"), a.onprogress = e, a.onreadystatechange = function() {
                            if (4 === a.readyState)
                                if (200 === a.status || d.ValidateXHRData(a, g ? 6 : 1)) c(g ? a.response : a.responseText);
                                else {
                                    if (!h) throw new Error("Error status: " + a.status + " - Unable to load " + f);
                                    h()
                                }
                        }, a.send(null)
                    },
                    j = function() {
                        f.loadFileFromDB(b, c, e, i, g)
                    };
                if (-1 !== b.indexOf("file:")) {
                    var k = b.substring(5);
                    d.ReadFile(a.FilesInput.FilesToLoad[k], c, e, !0)
                } else f && f.enableSceneOffline ? f.openAsync(j, i) : i()
            }, d.ReadFileAsDataURL = function(a, b, c) {
                var d = new FileReader;
                d.onload = function(a) {
                    b(a.target.result)
                }, d.onprogress = c, d.readAsDataURL(a)
            }, d.ReadFile = function(a, b, c, d) {
                var e = new FileReader;
                e.onload = function(a) {
                    b(a.target.result)
                }, e.onprogress = c, d ? e.readAsArrayBuffer(a) : e.readAsText(a)
            }, d.Clamp = function(a, b, c) {
                return void 0 === b && (b = 0), void 0 === c && (c = 1), Math.min(c, Math.max(b, a))
            }, d.Sign = function(a) {
                return a = +a, 0 === a || isNaN(a) ? a : a > 0 ? 1 : -1
            }, d.Format = function(a, b) {
                return void 0 === b && (b = 2), a.toFixed(b)
            }, d.CheckExtends = function(a, b, c) {
                a.x < b.x && (b.x = a.x), a.y < b.y && (b.y = a.y), a.z < b.z && (b.z = a.z), a.x > c.x && (c.x = a.x), a.y > c.y && (c.y = a.y), a.z > c.z && (c.z = a.z)
            }, d.WithinEpsilon = function(a, b, c) {
                void 0 === c && (c = 1.401298e-45);
                var d = a - b;
                return d >= -c && c >= d
            }, d.DeepCopy = function(a, b, d, e) {
                for (var f in a)
                    if (("_" !== f[0] || e && -1 !== e.indexOf(f)) && (!d || -1 === d.indexOf(f))) {
                        var g = a[f],
                            h = typeof g;
                        if ("function" !== h)
                            if ("object" === h)
                                if (g instanceof Array) {
                                    if (b[f] = [], g.length > 0)
                                        if ("object" == typeof g[0])
                                            for (var i = 0; i < g.length; i++) {
                                                var j = c(g[i], b); - 1 === b[f].indexOf(j) && b[f].push(j)
                                            } else b[f] = g.slice(0)
                                } else b[f] = c(g, b);
                        else b[f] = g
                    }
            }, d.IsEmpty = function(a) {
                for (var b in a) return !1;
                return !0
            }, d.RegisterTopRootEvents = function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    window.addEventListener(c.name, c.handler, !1);
                    try {
                        window.parent && window.parent.addEventListener(c.name, c.handler, !1)
                    } catch (d) {}
                }
            }, d.UnregisterTopRootEvents = function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    window.removeEventListener(c.name, c.handler);
                    try {
                        window.parent && window.parent.removeEventListener(c.name, c.handler)
                    } catch (d) {}
                }
            }, d.CreateScreenshot = function(c, e, f) {
                var g, h, i = e.getScene(),
                    j = null;
                if (i.activeCamera !== e && (j = i.activeCamera, i.activeCamera = e), f.precision) g = Math.round(c.getRenderWidth() * f.precision), h = Math.round(g / c.getAspectRatio(e)), f = {
                    width: g,
                    height: h
                };
                else if (f.width && f.height) g = f.width, h = f.height;
                else if (f.width && !f.height) g = f.width, h = Math.round(g / c.getAspectRatio(e)), f = {
                    width: g,
                    height: h
                };
                else if (f.height && !f.width) h = f.height, g = Math.round(h * c.getAspectRatio(e)), f = {
                    width: g,
                    height: h
                };
                else {
                    if (isNaN(f)) return void d.Error("Invalid 'size' parameter !");
                    h = f, g = f
                }
                var k = new a.RenderTargetTexture("screenShot", f, i, !1, !1);
                k.renderList = i.meshes, k.onAfterRender = function() {
                    for (var a = 4 * g, d = h / 2, e = c.readPixels(0, 0, g, h), f = 0; d > f; f++)
                        for (var i = 0; a > i; i++) {
                            var j = i + f * a,
                                k = h - f - 1,
                                l = i + k * a,
                                m = e[j];
                            e[j] = e[l], e[l] = m
                        }
                    b || (b = document.createElement("canvas")), b.width = g, b.height = h;
                    var n = b.getContext("2d"),
                        o = n.createImageData(g, h);
                    o.data.set(e), n.putImageData(o, 0, 0);
                    var p = b.toDataURL();
                    if ("download" in document.createElement("a")) {
                        var q = window.document.createElement("a");
                        q.href = p;
                        var r = new Date,
                            s = r.getFullYear() + "/" + r.getMonth() + "/" + r.getDate() + "-" + r.getHours() + ":" + r.getMinutes();
                        q.setAttribute("download", "screenshot-" + s + ".png"), window.document.body.appendChild(q), q.addEventListener("click", function() {
                            q.parentElement.removeChild(q)
                        }), q.click()
                    } else {
                        var t = window.open(""),
                            u = t.document.createElement("img");
                        u.src = p, t.document.body.appendChild(u)
                    }
                }, i.incrementRenderId(), k.render(!0), k.dispose(), j && (i.activeCamera = j)
            }, d.ValidateXHRData = function(b, c) {
                void 0 === c && (c = 7);
                try {
                    if (1 & c) {
                        if (b.responseText && b.responseText.length > 0) return !0;
                        if (1 === c) return !1
                    }
                    if (2 & c) {
                        var d = a.Internals.TGATools.GetTGAHeader(b.response);
                        if (d.width && d.height && d.width > 0 && d.height > 0) return !0;
                        if (2 === c) return !1
                    }
                    if (4 & c) {
                        var e = new Uint8Array(b.response, 0, 3);
                        return 68 === e[0] && 68 === e[1] && 83 === e[2] ? !0 : !1
                    }
                } catch (f) {}
                return !1
            }, Object.defineProperty(d, "NoneLogLevel", {
                get: function() {
                    return d._NoneLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "MessageLogLevel", {
                get: function() {
                    return d._MessageLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "WarningLogLevel", {
                get: function() {
                    return d._WarningLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "ErrorLogLevel", {
                get: function() {
                    return d._ErrorLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "AllLogLevel", {
                get: function() {
                    return d._MessageLogLevel | d._WarningLogLevel | d._ErrorLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), d._AddLogEntry = function(a) {
                d._LogCache = a + d._LogCache, d.OnNewCacheEntry && d.OnNewCacheEntry(a)
            }, d._FormatMessage = function(a) {
                var b = function(a) {
                        return 10 > a ? "0" + a : "" + a
                    },
                    c = new Date;
                return "[" + b(c.getHours()) + ":" + b(c.getMinutes()) + ":" + b(c.getSeconds()) + "]: " + a
            }, d._LogDisabled = function() {}, d._LogEnabled = function(a) {
                var b = d._FormatMessage(a);
                console.log("BJS - " + b);
                var c = "<div style='color:white'>" + b + "</div><br>";
                d._AddLogEntry(c)
            }, d._WarnDisabled = function() {}, d._WarnEnabled = function(a) {
                var b = d._FormatMessage(a);
                console.warn("BJS - " + b);
                var c = "<div style='color:orange'>" + b + "</div><br>";
                d._AddLogEntry(c)
            }, d._ErrorDisabled = function() {}, d._ErrorEnabled = function(a) {
                var b = d._FormatMessage(a);
                console.error("BJS - " + b);
                var c = "<div style='color:red'>" + b + "</div><br>";
                d._AddLogEntry(c)
            }, Object.defineProperty(d, "LogCache", {
                get: function() {
                    return d._LogCache
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "LogLevels", {
                set: function(a) {
                    d.Log = (a & d.MessageLogLevel) === d.MessageLogLevel ? d._LogEnabled : d._LogDisabled, d.Warn = (a & d.WarningLogLevel) === d.WarningLogLevel ? d._WarnEnabled : d._WarnDisabled, d.Error = (a & d.ErrorLogLevel) === d.ErrorLogLevel ? d._ErrorEnabled : d._ErrorDisabled
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "PerformanceNoneLogLevel", {
                get: function() {
                    return d._PerformanceNoneLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "PerformanceUserMarkLogLevel", {
                get: function() {
                    return d._PerformanceUserMarkLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "PerformanceConsoleLogLevel", {
                get: function() {
                    return d._PerformanceConsoleLogLevel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "PerformanceLogLevel", {
                set: function(a) {
                    return (a & d.PerformanceUserMarkLogLevel) === d.PerformanceUserMarkLogLevel ? (d.StartPerformanceCounter = d._StartUserMark, void(d.EndPerformanceCounter = d._EndUserMark)) : (a & d.PerformanceConsoleLogLevel) === d.PerformanceConsoleLogLevel ? (d.StartPerformanceCounter = d._StartPerformanceConsole, void(d.EndPerformanceCounter = d._EndPerformanceConsole)) : (d.StartPerformanceCounter = d._StartPerformanceCounterDisabled, void(d.EndPerformanceCounter = d._EndPerformanceCounterDisabled))
                },
                enumerable: !0,
                configurable: !0
            }), d._StartPerformanceCounterDisabled = function() {}, d._EndPerformanceCounterDisabled = function() {}, d._StartUserMark = function(a, b) {
                void 0 === b && (b = !0), b && d._performance.mark && d._performance.mark(a + "-Begin")
            }, d._EndUserMark = function(a, b) {
                void 0 === b && (b = !0), b && d._performance.mark && (d._performance.mark(a + "-End"), d._performance.measure(a, a + "-Begin", a + "-End"))
            }, d._StartPerformanceConsole = function(a, b) {
                void 0 === b && (b = !0), b && (d._StartUserMark(a, b), console.time && console.time(a))
            }, d._EndPerformanceConsole = function(a, b) {
                void 0 === b && (b = !0), b && (d._EndUserMark(a, b), console.time && console.timeEnd(a))
            }, Object.defineProperty(d, "Now", {
                get: function() {
                    return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                },
                enumerable: !0,
                configurable: !0
            }), d.GetFps = function() {
                return d.Warn("Tools.GetFps() is deprecated. Please use engine.getFps() instead"), 0
            }, d.BaseUrl = "", d.GetExponantOfTwo = function(a, b) {
                var c = 1;
                do c *= 2; while (a > c);
                return c > b && (c = b), c
            }, d._NoneLogLevel = 0, d._MessageLogLevel = 1, d._WarningLogLevel = 2, d._ErrorLogLevel = 4, d._LogCache = "", d.Log = d._LogEnabled, d.Warn = d._WarnEnabled, d.Error = d._ErrorEnabled, d._PerformanceNoneLogLevel = 0, d._PerformanceUserMarkLogLevel = 1, d._PerformanceConsoleLogLevel = 2, d._performance = window.performance, d.StartPerformanceCounter = d._StartPerformanceCounterDisabled, d.EndPerformanceCounter = d._EndPerformanceCounterDisabled, d
        }();
    a.Tools = d;
    var e = function() {
        function a(a, b, c, d) {
            void 0 === d && (d = 0), this.iterations = a, this._fn = b, this._successCallback = c, this.index = d - 1, this._done = !1
        }
        return a.prototype.executeNext = function() {
            this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
        }, a.prototype.breakLoop = function() {
            this._done = !0, this._successCallback()
        }, a.Run = function(b, c, d, e) {
            void 0 === e && (e = 0);
            var f = new a(b, c, d, e);
            return f.executeNext(), f
        }, a.SyncAsyncForLoop = function(b, c, d, e, f, g) {
            void 0 === g && (g = 0), a.Run(Math.ceil(b / c), function(a) {
                f && f() ? a.breakLoop() : setTimeout(function() {
                    for (var e = 0; c > e; ++e) {
                        var g = a.index * c + e;
                        if (g >= b) break;
                        if (d(g), f && f()) {
                            a.breakLoop();
                            break
                        }
                    }
                    a.executeNext()
                }, g)
            }, e)
        }, a
    }();
    a.AsyncLoop = e
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a() {
            this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1
        }
        return Object.defineProperty(a.prototype, "isDirty", {
            get: function() {
                return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "cullFace", {
            get: function() {
                return this._cullFace
            },
            set: function(a) {
                this._cullFace !== a && (this._cullFace = a, this._isCullFaceDirty = !0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "cull", {
            get: function() {
                return this._cull
            },
            set: function(a) {
                this._cull !== a && (this._cull = a, this._isCullDirty = !0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "depthFunc", {
            get: function() {
                return this._depthFunc
            },
            set: function(a) {
                this._depthFunc !== a && (this._depthFunc = a, this._isDepthFuncDirty = !0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "depthMask", {
            get: function() {
                return this._depthMask
            },
            set: function(a) {
                this._depthMask !== a && (this._depthMask = a, this._isDepthMaskDirty = !0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "depthTest", {
            get: function() {
                return this._depthTest
            },
            set: function(a) {
                this._depthTest !== a && (this._depthTest = a, this._isDepthTestDirty = !0)
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.reset = function() {
            this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cull = null, this._cullFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1
        }, a.prototype.apply = function(a) {
            this.isDirty && (this._isCullDirty && (this.cull ? a.enable(a.CULL_FACE) : a.disable(a.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (a.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (a.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (a.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1))
        }, a
    }();
    a._DepthCullingState = b;
    var c = function() {
        function a() {
            this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._alphaBlend = !1, this._blendFunctionParameters = new Array(4)
        }
        return Object.defineProperty(a.prototype, "isDirty", {
            get: function() {
                return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "alphaBlend", {
            get: function() {
                return this._alphaBlend
            },
            set: function(a) {
                this._alphaBlend !== a && (this._alphaBlend = a, this._isAlphaBlendDirty = !0)
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.setAlphaBlendFunctionParameters = function(a, b, c, d) {
            (this._blendFunctionParameters[0] !== a || this._blendFunctionParameters[1] !== b || this._blendFunctionParameters[2] !== c || this._blendFunctionParameters[3] !== d) && (this._blendFunctionParameters[0] = a, this._blendFunctionParameters[1] = b, this._blendFunctionParameters[2] = c, this._blendFunctionParameters[3] = d, this._isBlendFunctionParametersDirty = !0)
        }, a.prototype.reset = function() {
            this._alphaBlend = !1, this._blendFunctionParameters[0] = null, this._blendFunctionParameters[1] = null, this._blendFunctionParameters[2] = null, this._blendFunctionParameters[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1
        }, a.prototype.apply = function(a) {
            this.isDirty && (this._isAlphaBlendDirty && (this._alphaBlend ? a.enable(a.BLEND) : a.disable(a.BLEND), this._isAlphaBlendDirty = !1), this._isBlendFunctionParametersDirty && (a.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1))
        }, a
    }();
    a._AlphaState = c;
    var d = function(a, b, c, d) {
            var e = a.createShader("vertex" === c ? a.VERTEX_SHADER : a.FRAGMENT_SHADER);
            if (a.shaderSource(e, (d ? d + "\n" : "") + b), a.compileShader(e), !a.getShaderParameter(e, a.COMPILE_STATUS)) throw new Error(a.getShaderInfoLog(e));
            return e
        },
        e = function(a, b) {
            var c = a.UNSIGNED_BYTE;
            return b === k.TEXTURETYPE_FLOAT && (c = a.FLOAT), c
        },
        f = function(b, c, d) {
            var e = d.NEAREST,
                f = d.NEAREST;
            return b === a.Texture.BILINEAR_SAMPLINGMODE ? (e = d.LINEAR, f = c ? d.LINEAR_MIPMAP_NEAREST : d.LINEAR) : b === a.Texture.TRILINEAR_SAMPLINGMODE ? (e = d.LINEAR, f = c ? d.LINEAR_MIPMAP_LINEAR : d.LINEAR) : b === a.Texture.NEAREST_SAMPLINGMODE && (e = d.NEAREST, f = c ? d.NEAREST_MIPMAP_LINEAR : d.NEAREST), {
                min: f,
                mag: e
            }
        },
        g = function(b, c, d, e, g, h, i, j, k, l) {
            void 0 === l && (l = a.Texture.TRILINEAR_SAMPLINGMODE);
            var m = d.getEngine(),
                n = a.Tools.GetExponantOfTwo(e, m.getCaps().maxTextureSize),
                o = a.Tools.GetExponantOfTwo(g, m.getCaps().maxTextureSize);
            c.bindTexture(c.TEXTURE_2D, b), c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, void 0 === h ? 1 : h ? 1 : 0), k(n, o);
            var p = f(l, !i, c);
            c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, p.mag), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, p.min), i || j || c.generateMipmap(c.TEXTURE_2D), c.bindTexture(c.TEXTURE_2D, null), m._activeTexturesCache = [], b._baseWidth = e, b._baseHeight = g, b._width = n, b._height = o, b.isReady = !0, b.samplingMode = l, d._removePendingData(b)
        },
        h = function(b, c, d, e, f) {
            var g = function() {
                    d[c] = i, d._internalCount++, e._removePendingData(i), 6 === d._internalCount && f(d)
                },
                h = function() {
                    e._removePendingData(i)
                },
                i = a.Tools.LoadImage(b, g, h, e.database);
            e._addPendingData(i)
        },
        i = function(a, b, c, d) {
            var e = [];
            e._internalCount = 0;
            for (var f = 0; 6 > f; f++) h(a + d[f], f, e, b, c)
        },
        j = function() {
            function a() {}
            return a
        }();
    a.EngineCapabilities = j;
    var k = function() {
        function h(d, e, f) {
            var g = this;
            this.isFullscreen = !1, this.isPointerLock = !1, this.cullBackFaces = !0, this.renderEvenInBackground = !0, this.scenes = new Array, this._windowIsBackground = !1, this._loadingDivBackgroundColor = "black", this._drawCalls = 0, this._renderingQueueLaunched = !1, this._activeRenderLoops = [], this.fpsRange = 60, this.previousFramesDuration = [], this.fps = 60, this.deltaTime = 0, this._depthCullingState = new b, this._alphaState = new c, this._alphaMode = h.ALPHA_DISABLE, this._loadedTexturesCache = new Array, this._activeTexturesCache = new Array, this._compiledEffects = {}, this._uintIndicesCurrentlySet = !1, this._renderingCanvas = d, this._canvasClientRect = this._renderingCanvas.getBoundingClientRect(), f = f || {}, f.antialias = e;
            try {
                this._gl = d.getContext("webgl", f) || d.getContext("experimental-webgl", f)
            } catch (i) {
                throw new Error("WebGL not supported")
            }
            if (!this._gl) throw new Error("WebGL not supported");
            this._onBlur = function() {
                g._windowIsBackground = !0
            }, this._onFocus = function() {
                g._windowIsBackground = !1
            }, window.addEventListener("blur", this._onBlur), window.addEventListener("focus", this._onFocus), this._workingCanvas = document.createElement("canvas"), this._workingContext = this._workingCanvas.getContext("2d"), this._hardwareScalingLevel = 1 / (window.devicePixelRatio || 1), this.resize(), this._caps = new j, this._caps.maxTexturesImageUnits = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), this._caps.maxTextureSize = this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE), this._caps.maxCubemapTextureSize = this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE), this._caps.maxRenderTextureSize = this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE), this._glVersion = this._gl.getParameter(this._gl.VERSION);
            var k = this._gl.getExtension("WEBGL_debug_renderer_info");
            null != k && (this._glRenderer = this._gl.getParameter(k.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(k.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = "Unknown vendor"), this._glRenderer || (this._glRenderer = "Unknown renderer"), this._caps.standardDerivatives = null !== this._gl.getExtension("OES_standard_derivatives"), this._caps.s3tc = this._gl.getExtension("WEBGL_compressed_texture_s3tc"), this._caps.textureFloat = null !== this._gl.getExtension("OES_texture_float"), this._caps.textureAnisotropicFilterExtension = this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.instancedArrays = this._gl.getExtension("ANGLE_instanced_arrays"), this._caps.uintIndices = null !== this._gl.getExtension("OES_element_index_uint"), this.setDepthBuffer(!0), this.setDepthFunctionToLessOrEqual(), this.setDepthWrite(!0), this._onFullscreenChange = function() {
                void 0 !== document.fullscreen ? g.isFullscreen = document.fullscreen : void 0 !== document.mozFullScreen ? g.isFullscreen = document.mozFullScreen : void 0 !== document.webkitIsFullScreen ? g.isFullscreen = document.webkitIsFullScreen : void 0 !== document.msIsFullScreen && (g.isFullscreen = document.msIsFullScreen), g.isFullscreen && g._pointerLockRequested && (d.requestPointerLock = d.requestPointerLock || d.msRequestPointerLock || d.mozRequestPointerLock || d.webkitRequestPointerLock, d.requestPointerLock && d.requestPointerLock())
            }, document.addEventListener("fullscreenchange", this._onFullscreenChange, !1), document.addEventListener("mozfullscreenchange", this._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", this._onFullscreenChange, !1), document.addEventListener("msfullscreenchange", this._onFullscreenChange, !1), this._onPointerLockChange = function() {
                g.isPointerLock = document.mozPointerLockElement === d || document.webkitPointerLockElement === d || document.msPointerLockElement === d || document.pointerLockElement === d
            }, document.addEventListener("pointerlockchange", this._onPointerLockChange, !1), document.addEventListener("mspointerlockchange", this._onPointerLockChange, !1), document.addEventListener("mozpointerlockchange", this._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", this._onPointerLockChange, !1), h.audioEngine || (h.audioEngine = new a.AudioEngine), a.Tools.Log("Babylon.js engine (v" + h.Version + ") launched")
        }
        return Object.defineProperty(h, "ALPHA_DISABLE", {
            get: function() {
                return h._ALPHA_DISABLE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "ALPHA_ADD", {
            get: function() {
                return h._ALPHA_ADD
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "ALPHA_COMBINE", {
            get: function() {
                return h._ALPHA_COMBINE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "DELAYLOADSTATE_NONE", {
            get: function() {
                return h._DELAYLOADSTATE_NONE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "DELAYLOADSTATE_LOADED", {
            get: function() {
                return h._DELAYLOADSTATE_LOADED
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "DELAYLOADSTATE_LOADING", {
            get: function() {
                return h._DELAYLOADSTATE_LOADING
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "DELAYLOADSTATE_NOTLOADED", {
            get: function() {
                return h._DELAYLOADSTATE_NOTLOADED
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "TEXTUREFORMAT_ALPHA", {
            get: function() {
                return h._TEXTUREFORMAT_ALPHA
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "TEXTUREFORMAT_LUMINANCE", {
            get: function() {
                return h._TEXTUREFORMAT_LUMINANCE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "TEXTUREFORMAT_LUMINANCE_ALPHA", {
            get: function() {
                return h._TEXTUREFORMAT_LUMINANCE_ALPHA
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "TEXTUREFORMAT_RGB", {
            get: function() {
                return h._TEXTUREFORMAT_RGB
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "TEXTUREFORMAT_RGBA", {
            get: function() {
                return h._TEXTUREFORMAT_RGBA
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "TEXTURETYPE_UNSIGNED_INT", {
            get: function() {
                return h._TEXTURETYPE_UNSIGNED_INT
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "TEXTURETYPE_FLOAT", {
            get: function() {
                return h._TEXTURETYPE_FLOAT
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h, "Version", {
            get: function() {
                return "2.0.0"
            },
            enumerable: !0,
            configurable: !0
        }), h.prototype.getGlInfo = function() {
            return {
                vendor: this._glVendor,
                renderer: this._glRenderer,
                version: this._glVersion
            }
        }, h.prototype.getAspectRatio = function(a) {
            var b = a.viewport;
            return this.getRenderWidth() * b.width / (this.getRenderHeight() * b.height)
        }, h.prototype.getRenderWidth = function() {
            return this._currentRenderTarget ? this._currentRenderTarget._width : this._renderingCanvas.width
        }, h.prototype.getRenderHeight = function() {
            return this._currentRenderTarget ? this._currentRenderTarget._height : this._renderingCanvas.height
        }, h.prototype.getRenderingCanvas = function() {
            return this._renderingCanvas
        }, h.prototype.getRenderingCanvasClientRect = function() {
            return this._renderingCanvas.getBoundingClientRect()
        }, h.prototype.setHardwareScalingLevel = function(a) {
            this._hardwareScalingLevel = a, this.resize()
        }, h.prototype.getHardwareScalingLevel = function() {
            return this._hardwareScalingLevel
        }, h.prototype.getLoadedTexturesCache = function() {
            return this._loadedTexturesCache
        }, h.prototype.getCaps = function() {
            return this._caps
        }, Object.defineProperty(h.prototype, "drawCalls", {
            get: function() {
                return this._drawCalls
            },
            enumerable: !0,
            configurable: !0
        }), h.prototype.resetDrawCalls = function() {
            this._drawCalls = 0
        }, h.prototype.setDepthFunctionToGreater = function() {
            this._depthCullingState.depthFunc = this._gl.GREATER
        }, h.prototype.setDepthFunctionToGreaterOrEqual = function() {
            this._depthCullingState.depthFunc = this._gl.GEQUAL
        }, h.prototype.setDepthFunctionToLess = function() {
            this._depthCullingState.depthFunc = this._gl.LESS
        }, h.prototype.setDepthFunctionToLessOrEqual = function() {
            this._depthCullingState.depthFunc = this._gl.LEQUAL
        }, h.prototype.stopRenderLoop = function(a) {
            if (!a) return void(this._activeRenderLoops = []);
            var b = this._activeRenderLoops.indexOf(a);
            b >= 0 && this._activeRenderLoops.splice(b, 1)
        }, h.prototype._renderLoop = function() {
            var b = this,
                c = !0;
            if (!this.renderEvenInBackground && this._windowIsBackground && (c = !1), c) {
                this.beginFrame();
                for (var d = 0; d < this._activeRenderLoops.length; d++) {
                    var e = this._activeRenderLoops[d];
                    e()
                }
                this.endFrame()
            }
            this._activeRenderLoops.length > 0 ? a.Tools.QueueNewFrame(function() {
                b._renderLoop()
            }) : this._renderingQueueLaunched = !1
        }, h.prototype.runRenderLoop = function(b) {
            var c = this; - 1 === this._activeRenderLoops.indexOf(b) && (this._activeRenderLoops.push(b), this._renderingQueueLaunched || (this._renderingQueueLaunched = !0, a.Tools.QueueNewFrame(function() {
                c._renderLoop()
            })))
        }, h.prototype.switchFullscreen = function(b) {
            this.isFullscreen ? a.Tools.ExitFullscreen() : (this._pointerLockRequested = b, a.Tools.RequestFullscreen(this._renderingCanvas))
        }, h.prototype.clear = function(a, b, c) {
            this.applyStates(), this._gl.clearColor(a.r, a.g, a.b, void 0 !== a.a ? a.a : 1), this._depthCullingState.depthMask && this._gl.clearDepth(1);
            var d = 0;
            b && (d |= this._gl.COLOR_BUFFER_BIT), c && this._depthCullingState.depthMask && (d |= this._gl.DEPTH_BUFFER_BIT), this._gl.clear(d)
        }, h.prototype.setViewport = function(a, b, c) {
            var d = b || this._renderingCanvas.width,
                e = c || this._renderingCanvas.height,
                f = a.x || 0,
                g = a.y || 0;
            this._cachedViewport = a, this._gl.viewport(f * d, g * e, d * a.width, e * a.height)
        }, h.prototype.setDirectViewport = function(a, b, c, d) {
            this._cachedViewport = null, this._gl.viewport(a, b, c, d)
        }, h.prototype.beginFrame = function() {
            this._measureFps()
        }, h.prototype.endFrame = function() {}, h.prototype.resize = function() {
            this.setSize(this._renderingCanvas.clientWidth / this._hardwareScalingLevel, this._renderingCanvas.clientHeight / this._hardwareScalingLevel)
        }, h.prototype.setSize = function(a, b) {
            this._renderingCanvas.width = a, this._renderingCanvas.height = b, this._canvasClientRect = this._renderingCanvas.getBoundingClientRect()
        }, h.prototype.bindFramebuffer = function(a) {
            this._currentRenderTarget = a;
            var b = this._gl;
            b.bindFramebuffer(b.FRAMEBUFFER, a._framebuffer), this._gl.viewport(0, 0, a._width, a._height), this.wipeCaches()
        }, h.prototype.unBindFramebuffer = function(a) {
            if (this._currentRenderTarget = null, a.generateMipMaps) {
                var b = this._gl;
                b.bindTexture(b.TEXTURE_2D, a), b.generateMipmap(b.TEXTURE_2D), b.bindTexture(b.TEXTURE_2D, null)
            }
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null)
        }, h.prototype.flushFramebuffer = function() {
            this._gl.flush()
        }, h.prototype.restoreDefaultFramebuffer = function() {
            this._currentRenderTarget = null, this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null), this.setViewport(this._cachedViewport), this.wipeCaches()
        }, h.prototype._resetVertexBufferBinding = function() {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null), this._cachedVertexBuffers = null
        }, h.prototype.createVertexBuffer = function(a) {
            var b = this._gl.createBuffer();
            return this._gl.bindBuffer(this._gl.ARRAY_BUFFER, b), this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(a), this._gl.STATIC_DRAW), this._resetVertexBufferBinding(), b.references = 1, b
        }, h.prototype.createDynamicVertexBuffer = function(a) {
            var b = this._gl.createBuffer();
            return this._gl.bindBuffer(this._gl.ARRAY_BUFFER, b), this._gl.bufferData(this._gl.ARRAY_BUFFER, a, this._gl.DYNAMIC_DRAW), this._resetVertexBufferBinding(), b.references = 1, b
        }, h.prototype.updateDynamicVertexBuffer = function(a, b, c) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, a), void 0 === c && (c = 0), b instanceof Float32Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, c, b) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, c, new Float32Array(b)), this._resetVertexBufferBinding()
        }, h.prototype._resetIndexBufferBinding = function() {
            this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null), this._cachedIndexBuffer = null
        }, h.prototype.createIndexBuffer = function(a) {
            var b = this._gl.createBuffer();
            this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, b);
            var c, d = !1;
            if (this._caps.uintIndices) {
                for (var e = 0; e < a.length; e++)
                    if (a[e] > 65535) {
                        d = !0;
                        break
                    }
                c = d ? new Uint32Array(a) : new Uint16Array(a)
            } else c = new Uint16Array(a);
            return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, c, this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), b.references = 1, b.is32Bits = d, b
        }, h.prototype.bindBuffers = function(a, b, c, d, e) {
            if (this._cachedVertexBuffers !== a || this._cachedEffectForVertexBuffers !== e) {
                this._cachedVertexBuffers = a, this._cachedEffectForVertexBuffers = e, this._gl.bindBuffer(this._gl.ARRAY_BUFFER, a);
                for (var f = 0, g = 0; g < c.length; g++) {
                    var h = e.getAttributeLocation(g);
                    h >= 0 && this._gl.vertexAttribPointer(h, c[g], this._gl.FLOAT, !1, d, f), f += 4 * c[g]
                }
            }
            this._cachedIndexBuffer !== b && (this._cachedIndexBuffer = b, this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, b), this._uintIndicesCurrentlySet = b.is32Bits)
        }, h.prototype.bindMultiBuffers = function(a, b, c) {
            if (this._cachedVertexBuffers !== a || this._cachedEffectForVertexBuffers !== c) {
                this._cachedVertexBuffers = a, this._cachedEffectForVertexBuffers = c;
                for (var d = c.getAttributesNames(), e = 0; e < d.length; e++) {
                    var f = c.getAttributeLocation(e);
                    if (f >= 0) {
                        var g = a[d[e]];
                        if (!g) continue;
                        var h = g.getStrideSize();
                        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, g.getBuffer()), this._gl.vertexAttribPointer(f, h, this._gl.FLOAT, !1, 4 * h, 0)
                    }
                }
            }
            null != b && this._cachedIndexBuffer !== b && (this._cachedIndexBuffer = b, this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, b), this._uintIndicesCurrentlySet = b.is32Bits)
        }, h.prototype._releaseBuffer = function(a) {
            return a.references--, 0 === a.references ? (this._gl.deleteBuffer(a), !0) : !1
        }, h.prototype.createInstancesBuffer = function(a) {
            var b = this._gl.createBuffer();
            return b.capacity = a, this._gl.bindBuffer(this._gl.ARRAY_BUFFER, b), this._gl.bufferData(this._gl.ARRAY_BUFFER, a, this._gl.DYNAMIC_DRAW), b
        }, h.prototype.deleteInstancesBuffer = function(a) {
            this._gl.deleteBuffer(a)
        }, h.prototype.updateAndBindInstancesBuffer = function(a, b, c) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, a), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, b);
            for (var d = 0; 4 > d; d++) {
                var e = c[d];
                this._gl.enableVertexAttribArray(e), this._gl.vertexAttribPointer(e, 4, this._gl.FLOAT, !1, 64, 16 * d), this._caps.instancedArrays.vertexAttribDivisorANGLE(e, 1)
            }
        }, h.prototype.unBindInstancesBuffer = function(a, b) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, a);
            for (var c = 0; 4 > c; c++) {
                var d = b[c];
                this._gl.disableVertexAttribArray(d), this._caps.instancedArrays.vertexAttribDivisorANGLE(d, 0)
            }
        }, h.prototype.applyStates = function() {
            this._depthCullingState.apply(this._gl), this._alphaState.apply(this._gl)
        }, h.prototype.draw = function(a, b, c, d) {
            this.applyStates(), this._drawCalls++;
            var e = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT;
            return d ? void this._caps.instancedArrays.drawElementsInstancedANGLE(a ? this._gl.TRIANGLES : this._gl.LINES, c, e, 2 * b, d) : void this._gl.drawElements(a ? this._gl.TRIANGLES : this._gl.LINES, c, e, 2 * b)
        }, h.prototype.drawPointClouds = function(a, b, c) {
            return this.applyStates(), this._drawCalls++, c ? void this._caps.instancedArrays.drawArraysInstancedANGLE(this._gl.POINTS, a, b, c) : void this._gl.drawArrays(this._gl.POINTS, a, b)
        }, h.prototype._releaseEffect = function(a) {
            this._compiledEffects[a._key] && (delete this._compiledEffects[a._key], a.getProgram() && this._gl.deleteProgram(a.getProgram()))
        }, h.prototype.createEffect = function(b, c, d, e, f, g, h, i) {
            var j = b.vertexElement || b.vertex || b,
                k = b.fragmentElement || b.fragment || b,
                l = j + "+" + k + "@" + f;
            if (this._compiledEffects[l]) return this._compiledEffects[l];
            var m = new a.Effect(b, c, d, e, this, f, g, h, i);
            return m._key = l, this._compiledEffects[l] = m, m
        }, h.prototype.createEffectForParticles = function(a, b, c, d, e, f, g) {
            return void 0 === b && (b = []), void 0 === c && (c = []), void 0 === d && (d = ""), this.createEffect({
                vertex: "particles",
                fragmentElement: a
            }, ["position", "color", "options"], ["view", "projection"].concat(b), ["diffuseSampler"].concat(c), d, e, f, g)
        }, h.prototype.createShaderProgram = function(a, b, c) {
            var e = d(this._gl, a, "vertex", c),
                f = d(this._gl, b, "fragment", c),
                g = this._gl.createProgram();
            this._gl.attachShader(g, e), this._gl.attachShader(g, f), this._gl.linkProgram(g);
            var h = this._gl.getProgramParameter(g, this._gl.LINK_STATUS);
            if (!h) {
                var i = this._gl.getProgramInfoLog(g);
                if (i) throw new Error(i)
            }
            return this._gl.deleteShader(e), this._gl.deleteShader(f), g
        }, h.prototype.getUniforms = function(a, b) {
            for (var c = [], d = 0; d < b.length; d++) c.push(this._gl.getUniformLocation(a, b[d]));
            return c
        }, h.prototype.getAttributes = function(a, b) {
            for (var c = [], d = 0; d < b.length; d++) try {
                c.push(this._gl.getAttribLocation(a, b[d]))
            } catch (e) {
                c.push(-1)
            }
            return c
        }, h.prototype.enableEffect = function(a) {
            if (!a || !a.getAttributesCount() || this._currentEffect === a) return void(a && a.onBind && a.onBind(a));
            this._vertexAttribArrays = this._vertexAttribArrays || [], this._gl.useProgram(a.getProgram());
            for (var b in this._vertexAttribArrays) b > this._gl.VERTEX_ATTRIB_ARRAY_ENABLED || !this._vertexAttribArrays[b] || (this._vertexAttribArrays[b] = !1, this._gl.disableVertexAttribArray(b));
            for (var c = a.getAttributesCount(), d = 0; c > d; d++) {
                var e = a.getAttributeLocation(d);
                e >= 0 && (this._vertexAttribArrays[e] = !0, this._gl.enableVertexAttribArray(e))
            }
            this._currentEffect = a, a.onBind && a.onBind(a)
        }, h.prototype.setArray = function(a, b) {
            a && this._gl.uniform1fv(a, b)
        }, h.prototype.setArray2 = function(a, b) {
            a && b.length % 2 === 0 && this._gl.uniform2fv(a, b)
        }, h.prototype.setArray3 = function(a, b) {
            a && b.length % 3 === 0 && this._gl.uniform3fv(a, b)
        }, h.prototype.setArray4 = function(a, b) {
            a && b.length % 4 === 0 && this._gl.uniform4fv(a, b)
        }, h.prototype.setMatrices = function(a, b) {
            a && this._gl.uniformMatrix4fv(a, !1, b)
        }, h.prototype.setMatrix = function(a, b) {
            a && this._gl.uniformMatrix4fv(a, !1, b.toArray())
        }, h.prototype.setFloat = function(a, b) {
            a && this._gl.uniform1f(a, b)
        }, h.prototype.setFloat2 = function(a, b, c) {
            a && this._gl.uniform2f(a, b, c)
        }, h.prototype.setFloat3 = function(a, b, c, d) {
            a && this._gl.uniform3f(a, b, c, d)
        }, h.prototype.setBool = function(a, b) {
            a && this._gl.uniform1i(a, b)
        }, h.prototype.setFloat4 = function(a, b, c, d, e) {
            a && this._gl.uniform4f(a, b, c, d, e)
        }, h.prototype.setColor3 = function(a, b) {
            a && this._gl.uniform3f(a, b.r, b.g, b.b)
        }, h.prototype.setColor4 = function(a, b, c) {
            a && this._gl.uniform4f(a, b.r, b.g, b.b, c)
        }, h.prototype.setState = function(a, b) {
            (this._depthCullingState.cull !== a || b) && (a ? (this._depthCullingState.cullFace = this.cullBackFaces ? this._gl.BACK : this._gl.FRONT, this._depthCullingState.cull = !0) : this._depthCullingState.cull = !1)
        }, h.prototype.setDepthBuffer = function(a) {
            this._depthCullingState.depthTest = a
        }, h.prototype.getDepthWrite = function() {
            return this._depthCullingState.depthMask
        }, h.prototype.setDepthWrite = function(a) {
            this._depthCullingState.depthMask = a
        }, h.prototype.setColorWrite = function(a) {
            this._gl.colorMask(a, a, a, a)
        }, h.prototype.setAlphaMode = function(a) {
            switch (a) {
                case h.ALPHA_DISABLE:
                    this.setDepthWrite(!0), this._alphaState.alphaBlend = !1;
                    break;
                case h.ALPHA_COMBINE:
                    this.setDepthWrite(!1), this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE), this._alphaState.alphaBlend = !0;
                    break;
                case h.ALPHA_ADD:
                    this.setDepthWrite(!1), this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ZERO, this._gl.ONE), this._alphaState.alphaBlend = !0
            }
            this._alphaMode = a
        }, h.prototype.getAlphaMode = function() {
            return this._alphaMode
        }, h.prototype.setAlphaTesting = function(a) {
            this._alphaTest = a
        }, h.prototype.getAlphaTesting = function() {
            return this._alphaTest
        }, h.prototype.wipeCaches = function() {
            this._activeTexturesCache = [], this._currentEffect = null, this._depthCullingState.reset(), this._alphaState.reset(), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null
        }, h.prototype.setSamplingMode = function(b, c) {
            var d = this._gl;
            d.bindTexture(d.TEXTURE_2D, b);
            var e = d.NEAREST,
                f = d.NEAREST;
            c === a.Texture.BILINEAR_SAMPLINGMODE ? (e = d.LINEAR, f = d.LINEAR) : c === a.Texture.TRILINEAR_SAMPLINGMODE && (e = d.LINEAR, f = d.LINEAR_MIPMAP_LINEAR), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, e), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, f), d.bindTexture(d.TEXTURE_2D, null), b.samplingMode = c
        }, h.prototype.createTexture = function(b, c, d, e, f, h, i, j) {
            var k = this;
            void 0 === f && (f = a.Texture.TRILINEAR_SAMPLINGMODE), void 0 === h && (h = null), void 0 === i && (i = null), void 0 === j && (j = null);
            var l, m = this._gl.createTexture(),
                n = !1;
            if ("data:" === b.substr(0, 5) && (n = !0), n) {
                var o = b;
                n = o.split(":"), b = o, l = n[1].substr(n[1].length - 4, 4).toLowerCase()
            } else l = b.substr(b.length - 4, 4).toLowerCase();
            var p = this.getCaps().s3tc && ".dds" === l,
                q = ".tga" === l;
            e._addPendingData(m), m.url = b, m.noMipmap = c, m.references = 1, this._loadedTexturesCache.push(m);
            var r = function() {
                e._removePendingData(m), i && i()
            };
            if (q) {
                var s = function(b) {
                    var i = new Uint8Array(b),
                        j = a.Internals.TGATools.GetTGAHeader(i);
                    g(m, k._gl, e, j.width, j.height, d, c, !1, function() {
                        a.Internals.TGATools.UploadContent(k._gl, i), h && h()
                    }, f)
                };
                n instanceof Array ? s(j) : a.Tools.LoadFile(b, function(a) {
                    s(a)
                }, r, e.database, !0)
            } else if (p) s = function(b) {
                var i = a.Internals.DDSTools.GetDDSInfo(b),
                    j = (i.isRGB || i.isLuminance || i.mipmapCount > 1) && !c && i.width >> i.mipmapCount - 1 === 1;
                g(m, k._gl, e, i.width, i.height, d, !j, i.isFourCC, function() {
                    a.Internals.DDSTools.UploadDDSLevels(k._gl, k.getCaps().s3tc, b, i, j, 1), h && h()
                }, f)
            }, n instanceof Array ? s(j) : a.Tools.LoadFile(b, function(a) {
                s(a)
            }, r, e.database, !0);
            else {
                var t = function(b) {
                    g(m, k._gl, e, b.width, b.height, d, c, !1, function(c, d) {
                        var e = b.width === c && b.height === d;
                        e || (k._workingCanvas.width = c, k._workingCanvas.height = d, f === a.Texture.NEAREST_SAMPLINGMODE && (k._workingContext.imageSmoothingEnabled = !1, k._workingContext.mozImageSmoothingEnabled = !1, k._workingContext.oImageSmoothingEnabled = !1, k._workingContext.webkitImageSmoothingEnabled = !1, k._workingContext.msImageSmoothingEnabled = !1), k._workingContext.drawImage(b, 0, 0, b.width, b.height, 0, 0, c, d), f === a.Texture.NEAREST_SAMPLINGMODE && (k._workingContext.imageSmoothingEnabled = !0, k._workingContext.mozImageSmoothingEnabled = !0, k._workingContext.oImageSmoothingEnabled = !0, k._workingContext.webkitImageSmoothingEnabled = !0, k._workingContext.msImageSmoothingEnabled = !0)), k._gl.texImage2D(k._gl.TEXTURE_2D, 0, k._gl.RGBA, k._gl.RGBA, k._gl.UNSIGNED_BYTE, e ? b : k._workingCanvas), h && h()
                    }, f)
                };
                n instanceof Array ? a.Tools.LoadImage(j, t, r, e.database) : a.Tools.LoadImage(b, t, r, e.database)
            }
            return m
        }, h.prototype.createRawTexture = function(a, b, c, d, e, g, i) {
            var j = this._gl.createTexture();
            this._gl.bindTexture(this._gl.TEXTURE_2D, j), this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, void 0 === g ? 1 : g ? 1 : 0);
            var k = this._gl.RGBA;
            switch (d) {
                case h.TEXTUREFORMAT_ALPHA:
                    k = this._gl.ALPHA;
                    break;
                case h.TEXTUREFORMAT_LUMINANCE:
                    k = this._gl.LUMINANCE;
                    break;
                case h.TEXTUREFORMAT_LUMINANCE_ALPHA:
                    k = this._gl.LUMINANCE_ALPHA;
                    break;
                case h.TEXTUREFORMAT_RGB:
                    k = this._gl.RGB;
                    break;
                case h.TEXTUREFORMAT_RGBA:
                    k = this._gl.RGBA
            }
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, k, b, c, 0, k, this._gl.UNSIGNED_BYTE, a), e && this._gl.generateMipmap(this._gl.TEXTURE_2D);
            var l = f(i, e, this._gl);
            return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, l.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, l.min), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._activeTexturesCache = [], j._baseWidth = b, j._baseHeight = c, j._width = b, j._height = c, j.isReady = !0, j.references = 1, j.samplingMode = i, this._loadedTexturesCache.push(j), j
        }, h.prototype.createDynamicTexture = function(b, c, d, e) {
            var g = this._gl.createTexture();
            b = a.Tools.GetExponantOfTwo(b, this._caps.maxTextureSize), c = a.Tools.GetExponantOfTwo(c, this._caps.maxTextureSize), this._gl.bindTexture(this._gl.TEXTURE_2D, g);
            var h = f(e, d, this._gl);
            return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, h.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, h.min), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._activeTexturesCache = [], g._baseWidth = b, g._baseHeight = c, g._width = b, g._height = c, g.isReady = !1, g.generateMipMaps = d, g.references = 1, g.samplingMode = e, this._loadedTexturesCache.push(g), g
        }, h.prototype.updateDynamicTexture = function(a, b, c) {
            this._gl.bindTexture(this._gl.TEXTURE_2D, a), this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, c ? 1 : 0), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, b), a.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._activeTexturesCache = [], a.isReady = !0
        }, h.prototype.updateVideoTexture = function(a, b, c) {
            this._gl.bindTexture(this._gl.TEXTURE_2D, a), this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, c ? 0 : 1), b.videoWidth !== a._width || b.videoHeight !== a._height ? (a._workingCanvas || (a._workingCanvas = document.createElement("canvas"), a._workingContext = a._workingCanvas.getContext("2d"), a._workingCanvas.width = a._width, a._workingCanvas.height = a._height), a._workingContext.drawImage(b, 0, 0, b.videoWidth, b.videoHeight, 0, 0, a._width, a._height), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, a._workingCanvas)) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, b), a.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._activeTexturesCache = [], a.isReady = !0
        }, h.prototype.createRenderTargetTexture = function(b, c) {
            var d = !1,
                g = !0,
                i = h.TEXTURETYPE_UNSIGNED_INT,
                j = a.Texture.TRILINEAR_SAMPLINGMODE;
            void 0 !== c && (d = void 0 === c.generateMipMaps ? c : c.generateMipmaps, g = void 0 === c.generateDepthBuffer ? !0 : c.generateDepthBuffer, i = void 0 === c.type ? i : c.type, void 0 !== c.samplingMode && (j = c.samplingMode), i === h.TEXTURETYPE_FLOAT && (j = a.Texture.NEAREST_SAMPLINGMODE));
            var k = this._gl,
                l = k.createTexture();
            k.bindTexture(k.TEXTURE_2D, l);
            var m = b.width || b,
                n = b.height || b,
                o = f(j, d, k);
            i !== h.TEXTURETYPE_FLOAT || this._caps.textureFloat || (i = h.TEXTURETYPE_UNSIGNED_INT, a.Tools.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, o.mag), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, o.min), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE), k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, m, n, 0, k.RGBA, e(k, i), null);
            var p;
            g && (p = k.createRenderbuffer(), k.bindRenderbuffer(k.RENDERBUFFER, p), k.renderbufferStorage(k.RENDERBUFFER, k.DEPTH_COMPONENT16, m, n));
            var q = k.createFramebuffer();
            return k.bindFramebuffer(k.FRAMEBUFFER, q), k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, k.TEXTURE_2D, l, 0), g && k.framebufferRenderbuffer(k.FRAMEBUFFER, k.DEPTH_ATTACHMENT, k.RENDERBUFFER, p), k.bindTexture(k.TEXTURE_2D, null), k.bindRenderbuffer(k.RENDERBUFFER, null), k.bindFramebuffer(k.FRAMEBUFFER, null), l._framebuffer = q, g && (l._depthBuffer = p), l._width = m, l._height = n, l.isReady = !0, l.generateMipMaps = d, l.references = 1, l.samplingMode = j, this._activeTexturesCache = [], this._loadedTexturesCache.push(l), l
        }, h.prototype.createCubeTexture = function(b, c, d, e) {
            var f = this,
                g = this._gl,
                h = g.createTexture();
            h.isCube = !0, h.url = b, h.references = 1, this._loadedTexturesCache.push(h);
            var j = b.substr(b.length - 4, 4).toLowerCase(),
                k = this.getCaps().s3tc && ".dds" === j;
            return k ? a.Tools.LoadFile(b, function(b) {
                var c = a.Internals.DDSTools.GetDDSInfo(b),
                    d = (c.isRGB || c.isLuminance || c.mipmapCount > 1) && !e;
                g.bindTexture(g.TEXTURE_CUBE_MAP, h), g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, 1), a.Internals.DDSTools.UploadDDSLevels(f._gl, f.getCaps().s3tc, b, c, d, 6), e || c.isFourCC || 1 !== c.mipmapCount || g.generateMipmap(g.TEXTURE_CUBE_MAP), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_MAG_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_MIN_FILTER, d ? g.LINEAR_MIPMAP_LINEAR : g.LINEAR), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), g.bindTexture(g.TEXTURE_CUBE_MAP, null), f._activeTexturesCache = [], h._width = c.width, h._height = c.height, h.isReady = !0
            }, null, null, !0) : i(b, c, function(b) {
                var c = a.Tools.GetExponantOfTwo(b[0].width, f._caps.maxCubemapTextureSize),
                    d = c;
                f._workingCanvas.width = c, f._workingCanvas.height = d;
                var i = [g.TEXTURE_CUBE_MAP_POSITIVE_X, g.TEXTURE_CUBE_MAP_POSITIVE_Y, g.TEXTURE_CUBE_MAP_POSITIVE_Z, g.TEXTURE_CUBE_MAP_NEGATIVE_X, g.TEXTURE_CUBE_MAP_NEGATIVE_Y, g.TEXTURE_CUBE_MAP_NEGATIVE_Z];
                g.bindTexture(g.TEXTURE_CUBE_MAP, h), g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, 0);
                for (var j = 0; j < i.length; j++) f._workingContext.drawImage(b[j], 0, 0, b[j].width, b[j].height, 0, 0, c, d), g.texImage2D(i[j], 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, f._workingCanvas);
                e || g.generateMipmap(g.TEXTURE_CUBE_MAP), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_MAG_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_MIN_FILTER, e ? g.LINEAR : g.LINEAR_MIPMAP_LINEAR), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_CUBE_MAP, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), g.bindTexture(g.TEXTURE_CUBE_MAP, null), f._activeTexturesCache = [], h._width = c, h._height = d, h.isReady = !0
            }, d), h
        }, h.prototype._releaseTexture = function(a) {
            var b = this._gl;
            a._framebuffer && b.deleteFramebuffer(a._framebuffer), a._depthBuffer && b.deleteRenderbuffer(a._depthBuffer), b.deleteTexture(a);
            for (var c = 0; c < this._caps.maxTexturesImageUnits; c++) this._gl.activeTexture(this._gl["TEXTURE" + c]), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, null), this._activeTexturesCache[c] = null;
            var d = this._loadedTexturesCache.indexOf(a); - 1 !== d && this._loadedTexturesCache.splice(d, 1)
        }, h.prototype.bindSamplers = function(a) {
            this._gl.useProgram(a.getProgram());
            for (var b = a.getSamplers(), c = 0; c < b.length; c++) {
                var d = a.getUniform(b[c]);
                this._gl.uniform1i(d, c)
            }
            this._currentEffect = null
        }, h.prototype._bindTexture = function(a, b) {
            this._gl.activeTexture(this._gl["TEXTURE" + a]), this._gl.bindTexture(this._gl.TEXTURE_2D, b), this._activeTexturesCache[a] = null
        }, h.prototype.setTextureFromPostProcess = function(a, b) {
            this._bindTexture(a, b._textures.data[b._currentRenderTextureInd])
        }, h.prototype.setTexture = function(b, c) {
            if (!(0 > b)) {
                if (!c || !c.isReady()) return void(null != this._activeTexturesCache[b] && (this._gl.activeTexture(this._gl["TEXTURE" + b]), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, null), this._activeTexturesCache[b] = null));
                if (c instanceof a.VideoTexture) c.update() && (this._activeTexturesCache[b] = null);
                else if (c.delayLoadState === h.DELAYLOADSTATE_NOTLOADED) return void c.delayLoad();
                if (this._activeTexturesCache[b] !== c) {
                    this._activeTexturesCache[b] = c;
                    var d = c.getInternalTexture();
                    if (this._gl.activeTexture(this._gl["TEXTURE" + b]), d.isCube) {
                        if (this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, d), d._cachedCoordinatesMode !== c.coordinatesMode) {
                            d._cachedCoordinatesMode = c.coordinatesMode;
                            var e = c.coordinatesMode !== a.Texture.CUBIC_MODE && c.coordinatesMode !== a.Texture.SKYBOX_MODE ? this._gl.REPEAT : this._gl.CLAMP_TO_EDGE;
                            this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_S, e), this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_T, e)
                        }
                        this._setAnisotropicLevel(this._gl.TEXTURE_CUBE_MAP, c)
                    } else {
                        if (this._gl.bindTexture(this._gl.TEXTURE_2D, d), d._cachedWrapU !== c.wrapU) switch (d._cachedWrapU = c.wrapU, c.wrapU) {
                            case a.Texture.WRAP_ADDRESSMODE:
                                this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.REPEAT);
                                break;
                            case a.Texture.CLAMP_ADDRESSMODE:
                                this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
                                break;
                            case a.Texture.MIRROR_ADDRESSMODE:
                                this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.MIRRORED_REPEAT)
                        }
                        if (d._cachedWrapV !== c.wrapV) switch (d._cachedWrapV = c.wrapV, c.wrapV) {
                            case a.Texture.WRAP_ADDRESSMODE:
                                this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.REPEAT);
                                break;
                            case a.Texture.CLAMP_ADDRESSMODE:
                                this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
                                break;
                            case a.Texture.MIRROR_ADDRESSMODE:
                                this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.MIRRORED_REPEAT)
                        }
                        this._setAnisotropicLevel(this._gl.TEXTURE_2D, c)
                    }
                }
            }
        }, h.prototype._setAnisotropicLevel = function(a, b) {
            var c = this._caps.textureAnisotropicFilterExtension;
            c && b._cachedAnisotropicFilteringLevel !== b.anisotropicFilteringLevel && (this._gl.texParameterf(a, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropicFilteringLevel, this._caps.maxAnisotropy)), b._cachedAnisotropicFilteringLevel = b.anisotropicFilteringLevel)
        }, h.prototype.readPixels = function(a, b, c, d) {
            var e = new Uint8Array(d * c * 4);
            return this._gl.readPixels(0, 0, c, d, this._gl.RGBA, this._gl.UNSIGNED_BYTE, e), e
        }, h.prototype.dispose = function() {
            for (this.hideLoadingUI(), this.stopRenderLoop(); this.scenes.length;) this.scenes[0].dispose();
            h.audioEngine.dispose();
            for (var a in this._compiledEffects) this._gl.deleteProgram(this._compiledEffects[a]._program);
            for (var b in this._vertexAttribArrays) b > this._gl.VERTEX_ATTRIB_ARRAY_ENABLED || !this._vertexAttribArrays[b] || this._gl.disableVertexAttribArray(b);
            window.removeEventListener("blur", this._onBlur), window.removeEventListener("focus", this._onFocus), document.removeEventListener("fullscreenchange", this._onFullscreenChange), document.removeEventListener("mozfullscreenchange", this._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", this._onFullscreenChange), document.removeEventListener("msfullscreenchange", this._onFullscreenChange), document.removeEventListener("pointerlockchange", this._onPointerLockChange), document.removeEventListener("mspointerlockchange", this._onPointerLockChange), document.removeEventListener("mozpointerlockchange", this._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", this._onPointerLockChange)
        }, h.prototype.displayLoadingUI = function() {
            var a = this;
            this._loadingDiv = document.createElement("div"), this._loadingDiv.style.opacity = "0", this._loadingDiv.style.transition = "opacity 1.5s ease", this._loadingTextDiv = document.createElement("div"), this._loadingTextDiv.style.position = "absolute", this._loadingTextDiv.style.left = "0", this._loadingTextDiv.style.top = "50%", this._loadingTextDiv.style.marginTop = "80px", this._loadingTextDiv.style.width = "100%", this._loadingTextDiv.style.height = "20px", this._loadingTextDiv.style.fontFamily = "Arial", this._loadingTextDiv.style.fontSize = "14px", this._loadingTextDiv.style.color = "white", this._loadingTextDiv.style.textAlign = "center", this._loadingTextDiv.innerHTML = "Loading", this._loadingDiv.appendChild(this._loadingTextDiv);
            var b = new Image;
            b.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuM4zml1AAAARbSURBVHhe7Z09aFNRFMc716kuLrq4FdyLq4Wi4CAoRQcR0UJBUBdRiuLSIYMo6CA4FF2sgw6CFAdFUOpSQYcWO4hD26UQCfXrIQrx/JJzw1OSWq3NPeL/B4Fy+0jg/HO+7j3vpUcI8b/Q39+/49ihfWdPHT94Yf/e3Se3bd263f8lus218TPn6vV6Ya8Wi/MzNRNmj18iusX9W1evmP1/EKNEIVG6CMbG6E3bt+fT++pHha8NoHdT72bLE8NDg7tGU64gLLndV4Wc4m8j/pS+vr4tGB/DT16v3Fyr8dvBe/jbit8BL0AES9LX1iPAz+BR/hFiLVCynj95dPzNy6fv3IZ/k4L3948Sq7FzYGBg4vLFGxitabuOFCbWNKGrMnbiUuo18KaV6tIHv6YtvL9/nOgE31jCktmrY7k6+/zhE4yP4Vf7hiNqh/BWWEl8mzDol4p22Lf7cIdvdUMEvv0Y2S9fE5S1hLzpqTsPkiep//gFGPnR3Yl7GL5p/xYFBrTwM+iXio3GqpwDGL5p/xYNIX7XG8Q6IJRgdIzf1KBBgafII7oMidhyQtVFaMA2Bt7il4huQRhaXphbcR2g4RXqBzKAGHiCCwGFVUAj/m/RTRDj29cvn10I0PZ3LghH5f4CL1EFlQmqqXK3jDDKFxmhQ3Yt6oQseUZGKmMnTpsOqc8o1F9kBOMjQlOLeqEeIyOc6JV6jYLJD/+XyIFvnzdgl9aXRQ5I2qZDK1SpospMqaoqON/wZZGDciLnMMiXRS7IF4hhqMTNTdk7CFu+LHLhR7BQqBvPDJUUQqCGvCMATHUgBmhWNgApmdOda9YpM+VwRYfuyyIXDK8hBlilNerLIheMZCKGwlUAyru6GlwOgPUbRxADdJ9FAChxXY864viyyEXqPxhc0M2TAfAbatSdRyHtXymhByEdRnE3ky+JnHAIhSA0h74kckETmHoQbSgGwJrCIRMEPSRIBCRIMAhZaYhaggQhJXUJEoRU9mofKwh+F22dLRRfEjlJM7w6KQwCoQpBOKTyJZETjmwRxKqtGV8SOSkNOGjKPQppBEgDDkFgpxdBVGkFgaYQQXRIFQSObk0P5ZFIpAZRHXsQ0r0hCluBWKkuvVbYCkQaCdL5ehBScudJP4yY+rLISdps1NBDEJKXMMmoSfggWC4ZQRR17oFYXph7hSiquIKQ+hJGTX1J5MYSPD/GVdNzsgLBwZVCVyAQAkF0ohiI/c1fS6tNXq9UfEnkhudmIQolsS+J3Hh/UtNDzQLhj42VKJFInqLwFYiUU5ToA+HdfI0JevUpQUAIn+vSz2lHIuUV/dJOIHhOY/IWVWGBIHQtzs88s9zyWBuTgcBLzGOmeNnfF/QslSDgMeQW85i3DOQxuipxAkCyZ8SIm4Omp+7MMlCB59j6sKZcMoM4iIEoeI2J9AKxrFobZx0v4vYInuHFS4J1GQRCAGaLEYQXfyMML5XSQgghhBBCCCH+cXp6vgNhKpSKX/XdOAAAAABJRU5ErkJggg==", b.style.position = "absolute", b.style.left = "50%", b.style.top = "50%", b.style.marginLeft = "-50px", b.style.marginTop = "-50px", b.style.transition = "transform 1.0s ease", b.style.webkitTransition = "-webkit-transform 1.0s ease";
            var c = 360,
                d = function() {
                    c += 360, b.style.transform = "rotateZ(" + c + "deg)", b.style.webkitTransform = "rotateZ(" + c + "deg)"
                };
            b.addEventListener("transitionend", d), b.addEventListener("webkitTransitionEnd", d), this._loadingDiv.appendChild(b);
            var e = new Image;
            e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuM4zml1AAAAYJSURBVHhe7Zy/qx1FFMff/2Av2Nvbi4WFiiAEY/OQ2IgQsbCJQoqkCAgpFLXyoZURLfwBIiIpgqZJoYQYlWelNsIrNOxDJcrzfHe+G97dnTl75u7euzv7zgcWHrlnZmfOmXPmzI/NjuM4juM4juM4juM4juM4juM4juM4juM45fPic08/uHf5/CvffH7lnT8PfrtxdHS0n3p+/fHGl5+89/prr5599iEWd8bg0rkXHoFyqehKnlxQpjYSDHTm9JMPsGrHylOPPXofvICKXMcIGtXdf/76AYbm6xyNW9e/eAtKC7rbKLXnvHHx5Sf4auc4Ek7OQkFU1Dap/vv37k/wSjblZANFiFIGzw98hhizwqBgs04mCBdQRNCHidoAEtY+lLIvtSdoGFeyql2ZH57HBH4sE7O+o/r9l+8/ZXUni68+2jsHBQQ9qNRGeP/tSxdSYQX/roUcpL4/f3vtM9TD+jTq92n1LQ7jxF1hhGPtwWL3gGccy8JuS1r8sVWBGXNVdSKMYjBGPUJjCzooiGuSpnwlnnOGP2dhHRSLNgpHp2oMKIriK8TmG4Qh/rwW8D6pps9b9im+LDDipXOqMVJrAngBfg9i98gevWKA+/nnCod3Dr5GfaHaDgidVym6HKRjGIkpqthcAVKGxNqBImbEo66kjCih8AOpNmkUmbMuUrR8kEqiU6FvHZLGAPJ71JCYSyhiBqmwFE2GoD6jLGIfDHtG6EzoU4dK21PCqIRMEF0FGRjFzGDtIkXVAdATvsqfT9CJ0JcOFdYiFIsiMlqYy1YOFpQo2OddqBtyEaq9y+efoVh5oPHoROjLKn0j3JIE5Ka8UqZRtGrMnneX6yVofOhDh94MSbznTcpqmDOt1vyQzOgaJAF4F3JBfIXesrNEGWWmjIX7UBZ6jRJbBMLg/DmJiKUGVHleIpnVNTa+jakzkAviJqLhi4MC9XQGBrZeKJZESSrKy7ik0VGFWhQBRDTHIACKQ5l9nAjy75gya4a2w+Jhs0FJdc0xX/GwUbAqFBkZi7QpJ2w16WUbjFyK9MJF3KaoEM74KhVtLrQOrsmRxkbdHEqmSC/c+EuGnIFkjW7Ih2Kr4CCMIvNG2hrrgLpCjiFloooYCjyYrzCRyvhyBthkIPuQtsZGdnbMTezyDiU71KTC5zr7aVsHbsz2tllrEkS5UHwU1tq1HbtPW4UbeB0O7xx8R5EsMJql+BheUmHjkNVmIRP7LutoM3+D4O4tG7vCkNO9ESZ4lL3J6rKRMPx4qKbD/A0icf8CG7tC7kTahnMTwleuYSrsS7GatRAvfZh1tTm5BmmQCdZ8a0Sefe28xUrRBkmFLKy8KTIKUDRX0Y1xagPgwbaIdeFnQULmKak3xvwNMkVGgok/N5XNoehJvejRlCDl9escI28dJU0tZ++nBTJE9mEF647x5Ehbo4s5hDOKFIU0PdofeA5F5k1q63zIWmQqNI/P3ZubjFTqKxQ3jyjHAOX0RdlgVO9hzRFpczRcjZ3Gbxxpc7Qj6+5pTYF2OFXawNI+yDGf1k2NcvOlzBQeDQ/t7zD7DsEDpJ2xATXaNtDWUS4IzP4DS2ljajAVu57SUkYw245ptxZxA5JiZaJ0DswudGn3kYUy54426EjoT4dZfYbccxC2nI92cDkZHQr96jD4AGkMDKeSy/COBsRe6VTSKFN6irLeaCh3IteQjt1E5+oudsG/b/2DfZ5AqsYo8vMDK9LB1HzSsLWvlGThdxXvC6+NsqyPPWP0pMINtbdsajfVeC6f/GZ+cdAofQoB1d+Hf9waY98I7+RXWab3Lt4zYkjHtTnlOLXHYMsCh1zWeQYehu1zfNPOOiys/d91LAKEBSgh6MJMbSA82AaHofDgAIwbgvVvlLNS11nModMm4UZergLHZBZrodmBuA3lBB1thdorSjkOmATMDwg/UBQVtglqQyx6fbEJ+H3IWIapjYAjAfeIgeCMHldueJvFaqDaAHhwf8qNsEEQ1iQbOoUUGIbCLRc8+Bvfp4jyd2FEijuO4ziO4ziO4ziO4ziO4ziO4ziO4ziOUzw7O/8D0P7rcZ/GEboAAAAASUVORK5CYII=", e.style.position = "absolute", e.style.left = "50%", e.style.top = "50%", e.style.marginLeft = "-50px", e.style.marginTop = "-50px", this._loadingDiv.appendChild(e), this._resizeLoadingUI = function() {
                var b = a.getRenderingCanvasClientRect();
                a._loadingDiv.style.position = "absolute", a._loadingDiv.style.left = b.left + "px", a._loadingDiv.style.top = b.top + "px", a._loadingDiv.style.width = b.width + "px", a._loadingDiv.style.height = b.height + "px"
            }, this._resizeLoadingUI(), window.addEventListener("resize", this._resizeLoadingUI), this._loadingDiv.style.backgroundColor = this._loadingDivBackgroundColor, document.body.appendChild(this._loadingDiv), setTimeout(function() {
                a._loadingDiv.style.opacity = "1", b.style.transform = "rotateZ(360deg)", b.style.webkitTransform = "rotateZ(360deg)"
            }, 0)
        }, Object.defineProperty(h.prototype, "loadingUIText", {
            set: function(a) {
                this._loadingDiv && (this._loadingTextDiv.innerHTML = a)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h.prototype, "loadingUIBackgroundColor", {
            get: function() {
                return this._loadingDivBackgroundColor
            },
            set: function(a) {
                this._loadingDivBackgroundColor = a, this._loadingDiv && (this._loadingDiv.style.backgroundColor = this._loadingDivBackgroundColor)
            },
            enumerable: !0,
            configurable: !0
        }), h.prototype.hideLoadingUI = function() {
            var a = this;
            if (this._loadingDiv) {
                var b = function() {
                    a._loadingDiv && (document.body.removeChild(a._loadingDiv), window.removeEventListener("resize", a._resizeLoadingUI), a._loadingDiv = null)
                };
                this._loadingDiv.style.opacity = "0", this._loadingDiv.addEventListener("transitionend", b)
            }
        }, h.prototype.getFps = function() {
            return this.fps
        }, h.prototype.getDeltaTime = function() {
            return this.deltaTime
        }, h.prototype._measureFps = function() {
            this.previousFramesDuration.push(a.Tools.Now);
            var b = this.previousFramesDuration.length;
            if (b >= 2 && (this.deltaTime = this.previousFramesDuration[b - 1] - this.previousFramesDuration[b - 2]), b >= this.fpsRange) {
                b > this.fpsRange && (this.previousFramesDuration.splice(0, 1), b = this.previousFramesDuration.length);
                for (var c = 0, d = 0; b - 1 > d; d++) c += this.previousFramesDuration[d + 1] - this.previousFramesDuration[d];
                this.fps = 1e3 / (c / (b - 1))
            }
        }, h.isSupported = function() {
            try {
                if (navigator.isCocoonJS) return !0;
                var a = document.createElement("canvas"),
                    b = a.getContext("webgl") || a.getContext("experimental-webgl");
                return null != b && !!window.WebGLRenderingContext
            } catch (c) {
                return !1
            }
        }, h._ALPHA_DISABLE = 0, h._ALPHA_ADD = 1, h._ALPHA_COMBINE = 2, h._DELAYLOADSTATE_NONE = 0, h._DELAYLOADSTATE_LOADED = 1, h._DELAYLOADSTATE_LOADING = 2, h._DELAYLOADSTATE_NOTLOADED = 4, h._TEXTUREFORMAT_ALPHA = 0, h._TEXTUREFORMAT_LUMINANCE = 1, h._TEXTUREFORMAT_LUMINANCE_ALPHA = 2, h._TEXTUREFORMAT_RGB = 4, h._TEXTUREFORMAT_RGBA = 4, h._TEXTURETYPE_UNSIGNED_INT = 0, h._TEXTURETYPE_FLOAT = 1, h.Epsilon = .001, h.CollisionsEpsilon = .001, h.ShadersRepository = "Babylon/Shaders/", h
    }();
    a.Engine = k
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b) {
            this.state = "", this.animations = new Array, this._childrenFlag = -1, this._isEnabled = !0, this._isReady = !0, this._currentRenderId = -1, this.name = a, this.id = a, this._scene = b, this._initCache()
        }
        return b.prototype.getScene = function() {
            return this._scene
        }, b.prototype.getEngine = function() {
            return this._scene.getEngine()
        }, b.prototype.getWorldMatrix = function() {
            return a.Matrix.Identity()
        }, b.prototype._initCache = function() {
            this._cache = {}, this._cache.parent = void 0
        }, b.prototype.updateCache = function(a) {
            (a || !this.isSynchronized()) && (this._cache.parent = this.parent, this._updateCache())
        }, b.prototype._updateCache = function() {}, b.prototype._isSynchronized = function() {
            return !0
        }, b.prototype.isSynchronizedWithParent = function() {
            return this.parent ? this.parent._currentRenderId <= this._currentRenderId : !0
        }, b.prototype.isSynchronized = function(a) {
            var b = this.hasNewParent();
            return b = b || !this.isSynchronizedWithParent(), b = b || !this._isSynchronized(), a && this.updateCache(!0), !b
        }, b.prototype.hasNewParent = function(a) {
            return this._cache.parent === this.parent ? !1 : (a && (this._cache.parent = this.parent), !0)
        }, b.prototype.isReady = function() {
            return this._isReady
        }, b.prototype.isEnabled = function() {
            return this._isEnabled ? this.parent ? this.parent.isEnabled() : !0 : !1
        }, b.prototype.setEnabled = function(a) {
            this._isEnabled = a
        }, b.prototype.isDescendantOf = function(a) {
            return this.parent ? this.parent === a ? !0 : this.parent.isDescendantOf(a) : !1
        }, b.prototype._getDescendants = function(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                d.isDescendantOf(this) && b.push(d)
            }
        }, b.prototype.getDescendants = function() {
            var a = [];
            return this._getDescendants(this._scene.meshes, a), this._getDescendants(this._scene.lights, a), this._getDescendants(this._scene.cameras, a), a
        }, b.prototype._setReady = function(a) {
            if (a != this._isReady) {
                if (!a) return void(this._isReady = !1);
                this._isReady = !0, this.onReady && this.onReady(this)
            }
        }, b
    }();
    a.Node = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c) {
            this.minimum = b, this.maximum = c, this._tempRadiusVector = a.Vector3.Zero();
            var d = a.Vector3.Distance(b, c);
            this.center = a.Vector3.Lerp(b, c, .5), this.radius = .5 * d, this.centerWorld = a.Vector3.Zero(), this._update(a.Matrix.Identity())
        }
        return b.prototype._update = function(b) {
            a.Vector3.TransformCoordinatesToRef(this.center, b, this.centerWorld), a.Vector3.TransformNormalFromFloatsToRef(1, 1, 1, b, this._tempRadiusVector), this.radiusWorld = Math.max(Math.abs(this._tempRadiusVector.x), Math.abs(this._tempRadiusVector.y), Math.abs(this._tempRadiusVector.z)) * this.radius
        }, b.prototype.isInFrustum = function(a) {
            for (var b = 0; 6 > b; b++)
                if (a[b].dotCoordinate(this.centerWorld) <= -this.radiusWorld) return !1;
            return !0
        }, b.prototype.intersectsPoint = function(b) {
            var c = this.centerWorld.x - b.x,
                d = this.centerWorld.y - b.y,
                e = this.centerWorld.z - b.z,
                f = Math.sqrt(c * c + d * d + e * e);
            return Math.abs(this.radiusWorld - f) < a.Engine.Epsilon ? !1 : !0
        }, b.Intersects = function(a, b) {
            var c = a.centerWorld.x - b.centerWorld.x,
                d = a.centerWorld.y - b.centerWorld.y,
                e = a.centerWorld.z - b.centerWorld.z,
                f = Math.sqrt(c * c + d * d + e * e);
            return a.radiusWorld + b.radiusWorld < f ? !1 : !0
        }, b
    }();
    a.BoundingSphere = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c) {
            this.minimum = b, this.maximum = c, this.vectors = new Array, this.vectorsWorld = new Array, this.vectors.push(this.minimum.clone()), this.vectors.push(this.maximum.clone()), this.vectors.push(this.minimum.clone()), this.vectors[2].x = this.maximum.x, this.vectors.push(this.minimum.clone()), this.vectors[3].y = this.maximum.y, this.vectors.push(this.minimum.clone()), this.vectors[4].z = this.maximum.z, this.vectors.push(this.maximum.clone()), this.vectors[5].z = this.minimum.z, this.vectors.push(this.maximum.clone()), this.vectors[6].x = this.minimum.x, this.vectors.push(this.maximum.clone()), this.vectors[7].y = this.minimum.y, this.center = this.maximum.add(this.minimum).scale(.5), this.extendSize = this.maximum.subtract(this.minimum).scale(.5), this.directions = [a.Vector3.Zero(), a.Vector3.Zero(), a.Vector3.Zero()];
            for (var d = 0; d < this.vectors.length; d++) this.vectorsWorld[d] = a.Vector3.Zero();
            this.minimumWorld = a.Vector3.Zero(), this.maximumWorld = a.Vector3.Zero(), this._update(a.Matrix.Identity())
        }
        return b.prototype.getWorldMatrix = function() {
            return this._worldMatrix
        }, b.prototype._update = function(b) {
            a.Vector3.FromFloatsToRef(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, this.minimumWorld), a.Vector3.FromFloatsToRef(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE, this.maximumWorld);
            for (var c = 0; c < this.vectors.length; c++) {
                var d = this.vectorsWorld[c];
                a.Vector3.TransformCoordinatesToRef(this.vectors[c], b, d), d.x < this.minimumWorld.x && (this.minimumWorld.x = d.x), d.y < this.minimumWorld.y && (this.minimumWorld.y = d.y), d.z < this.minimumWorld.z && (this.minimumWorld.z = d.z), d.x > this.maximumWorld.x && (this.maximumWorld.x = d.x), d.y > this.maximumWorld.y && (this.maximumWorld.y = d.y), d.z > this.maximumWorld.z && (this.maximumWorld.z = d.z)
            }
            this.maximumWorld.addToRef(this.minimumWorld, this.center), this.center.scaleInPlace(.5), a.Vector3.FromFloatArrayToRef(b.m, 0, this.directions[0]), a.Vector3.FromFloatArrayToRef(b.m, 4, this.directions[1]), a.Vector3.FromFloatArrayToRef(b.m, 8, this.directions[2]), this._worldMatrix = b
        }, b.prototype.isInFrustum = function(a) {
            return b.IsInFrustum(this.vectorsWorld, a)
        }, b.prototype.isCompletelyInFrustum = function(a) {
            return b.IsCompletelyInFrustum(this.vectorsWorld, a)
        }, b.prototype.intersectsPoint = function(b) {
            var c = a.Engine.Epsilon;
            return this.maximumWorld.x - b.x < c || c > b.x - this.minimumWorld.x ? !1 : this.maximumWorld.y - b.y < c || c > b.y - this.minimumWorld.y ? !1 : this.maximumWorld.z - b.z < c || c > b.z - this.minimumWorld.z ? !1 : !0
        }, b.prototype.intersectsSphere = function(a) {
            return b.IntersectsSphere(this.minimumWorld, this.maximumWorld, a.centerWorld, a.radiusWorld)
        }, b.prototype.intersectsMinMax = function(a, b) {
            return this.maximumWorld.x < a.x || this.minimumWorld.x > b.x ? !1 : this.maximumWorld.y < a.y || this.minimumWorld.y > b.y ? !1 : this.maximumWorld.z < a.z || this.minimumWorld.z > b.z ? !1 : !0
        }, b.Intersects = function(a, b) {
            return a.maximumWorld.x < b.minimumWorld.x || a.minimumWorld.x > b.maximumWorld.x ? !1 : a.maximumWorld.y < b.minimumWorld.y || a.minimumWorld.y > b.maximumWorld.y ? !1 : a.maximumWorld.z < b.minimumWorld.z || a.minimumWorld.z > b.maximumWorld.z ? !1 : !0
        }, b.IntersectsSphere = function(b, c, d, e) {
            var f = a.Vector3.Clamp(d, b, c),
                g = a.Vector3.DistanceSquared(d, f);
            return e * e >= g
        }, b.IsCompletelyInFrustum = function(a, b) {
            for (var c = 0; 6 > c; c++)
                for (var d = 0; 8 > d; d++)
                    if (b[c].dotCoordinate(a[d]) < 0) return !1;
            return !0
        }, b.IsInFrustum = function(a, b) {
            for (var c = 0; 6 > c; c++) {
                for (var d = 8, e = 0; 8 > e && b[c].dotCoordinate(a[e]) < 0; e++) --d;
                if (0 === d) return !1
            }
            return !0
        }, b
    }();
    a.BoundingBox = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function(b, c) {
            var d = a.Vector3.Dot(c.center, b),
                e = Math.abs(a.Vector3.Dot(c.directions[0], b)) * c.extendSize.x,
                f = Math.abs(a.Vector3.Dot(c.directions[1], b)) * c.extendSize.y,
                g = Math.abs(a.Vector3.Dot(c.directions[2], b)) * c.extendSize.z,
                h = e + f + g;
            return {
                min: d - h,
                max: d + h
            }
        },
        c = function(a, b, c, d) {
            return !(a > d || c > b)
        },
        d = function(a, d, e) {
            var f = b(a, d),
                g = b(a, e);
            return c(f.min, f.max, g.min, g.max)
        },
        e = function() {
            function b(b, c) {
                this.minimum = b, this.maximum = c, this.boundingBox = new a.BoundingBox(b, c), this.boundingSphere = new a.BoundingSphere(b, c)
            }
            return b.prototype._update = function(a) {
                this.boundingBox._update(a), this.boundingSphere._update(a)
            }, b.prototype.isInFrustum = function(a) {
                return this.boundingSphere.isInFrustum(a) ? this.boundingBox.isInFrustum(a) : !1
            }, b.prototype.isCompletelyInFrustum = function(a) {
                return this.boundingBox.isCompletelyInFrustum(a)
            }, b.prototype._checkCollision = function(a) {
                return a._canDoCollision(this.boundingSphere.centerWorld, this.boundingSphere.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
            }, b.prototype.intersectsPoint = function(a) {
                return this.boundingSphere.centerWorld && this.boundingSphere.intersectsPoint(a) && this.boundingBox.intersectsPoint(a) ? !0 : !1
            }, b.prototype.intersects = function(b, c) {
                if (!this.boundingSphere.centerWorld || !b.boundingSphere.centerWorld) return !1;
                if (!a.BoundingSphere.Intersects(this.boundingSphere, b.boundingSphere)) return !1;
                if (!a.BoundingBox.Intersects(this.boundingBox, b.boundingBox)) return !1;
                if (!c) return !0;
                var e = this.boundingBox,
                    f = b.boundingBox;
                return d(e.directions[0], e, f) && d(e.directions[1], e, f) && d(e.directions[2], e, f) && d(f.directions[0], e, f) && d(f.directions[1], e, f) && d(f.directions[2], e, f) && d(a.Vector3.Cross(e.directions[0], f.directions[0]), e, f) && d(a.Vector3.Cross(e.directions[0], f.directions[1]), e, f) && d(a.Vector3.Cross(e.directions[0], f.directions[2]), e, f) && d(a.Vector3.Cross(e.directions[1], f.directions[0]), e, f) && d(a.Vector3.Cross(e.directions[1], f.directions[1]), e, f) && d(a.Vector3.Cross(e.directions[1], f.directions[2]), e, f) && d(a.Vector3.Cross(e.directions[2], f.directions[0]), e, f) && d(a.Vector3.Cross(e.directions[2], f.directions[1]), e, f) && d(a.Vector3.Cross(e.directions[2], f.directions[2]), e, f) ? !0 : !1
            }, b
        }();
    a.BoundingInfo = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d) {
            b.call(this, c, d), this.diffuse = new a.Color3(1, 1, 1), this.specular = new a.Color3(1, 1, 1), this.intensity = 1, this.range = Number.MAX_VALUE, this.includedOnlyMeshes = new Array, this.excludedMeshes = new Array, this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, d.lights.push(this)
        }
        return __extends(c, b), c.prototype.getShadowGenerator = function() {
            return this._shadowGenerator
        }, c.prototype.getAbsolutePosition = function() {
            return a.Vector3.Zero()
        }, c.prototype.transferToEffect = function() {}, c.prototype._getWorldMatrix = function() {
            return a.Matrix.Identity()
        }, c.prototype.canAffectMesh = function(a) {
            return a ? this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(a) ? !1 : this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(a) ? !1 : !0 : !0
        }, c.prototype.getWorldMatrix = function() {
            this._currentRenderId = this.getScene().getRenderId();
            var b = this._getWorldMatrix();
            return this.parent && this.parent.getWorldMatrix ? (this._parentedWorldMatrix || (this._parentedWorldMatrix = a.Matrix.Identity()), b.multiplyToRef(this.parent.getWorldMatrix(), this._parentedWorldMatrix), this._parentedWorldMatrix) : b
        }, c.prototype.dispose = function() {
            this._shadowGenerator && (this._shadowGenerator.dispose(), this._shadowGenerator = null);
            var a = this.getScene().lights.indexOf(this);
            this.getScene().lights.splice(a, 1)
        }, c
    }(a.Node);
    a.Light = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d) {
            b.call(this, a, d), this.position = c
        }
        return __extends(c, b), c.prototype.getAbsolutePosition = function() {
            return this._transformedPosition ? this._transformedPosition : this.position
        }, c.prototype.transferToEffect = function(b, c) {
            return this.parent && this.parent.getWorldMatrix ? (this._transformedPosition || (this._transformedPosition = a.Vector3.Zero()), a.Vector3.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this._transformedPosition), void b.setFloat4(c, this._transformedPosition.x, this._transformedPosition.y, this._transformedPosition.z, 0)) : void b.setFloat4(c, this.position.x, this.position.y, this.position.z, 0)
        }, c.prototype.getShadowGenerator = function() {
            return null
        }, c.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = a.Matrix.Identity()), a.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this._worldMatrix
        }, c
    }(a.Light);
    a.PointLight = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d, e, f, g) {
            b.call(this, a, g), this.position = c, this.direction = d, this.angle = e, this.exponent = f
        }
        return __extends(c, b), c.prototype.getAbsolutePosition = function() {
            return this.transformedPosition ? this.transformedPosition : this.position
        }, c.prototype.setDirectionToTarget = function(b) {
            return this.direction = a.Vector3.Normalize(b.subtract(this.position)), this.direction
        }, c.prototype.computeTransformedPosition = function() {
            return this.parent && this.parent.getWorldMatrix ? (this.transformedPosition || (this.transformedPosition = a.Vector3.Zero()), a.Vector3.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), !0) : !1
        }, c.prototype.transferToEffect = function(b, c, d) {
            var e;
            this.parent && this.parent.getWorldMatrix ? (this._transformedDirection || (this._transformedDirection = a.Vector3.Zero()), this.computeTransformedPosition(), a.Vector3.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this._transformedDirection), b.setFloat4(c, this.transformedPosition.x, this.transformedPosition.y, this.transformedPosition.z, this.exponent), e = a.Vector3.Normalize(this._transformedDirection)) : (b.setFloat4(c, this.position.x, this.position.y, this.position.z, this.exponent), e = a.Vector3.Normalize(this.direction)), b.setFloat4(d, e.x, e.y, e.z, Math.cos(.5 * this.angle))
        }, c.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = a.Matrix.Identity()), a.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this._worldMatrix
        }, c
    }(a.Light);
    a.SpotLight = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d) {
            b.call(this, a, d), this.direction = c, this.position = c.scale(-1)
        }
        return __extends(c, b), c.prototype.getAbsolutePosition = function() {
            return this.transformedPosition ? this.transformedPosition : this.position
        }, c.prototype.setDirectionToTarget = function(b) {
            return this.direction = a.Vector3.Normalize(b.subtract(this.position)), this.direction
        }, c.prototype.computeTransformedPosition = function() {
            return this.parent && this.parent.getWorldMatrix ? (this.transformedPosition || (this.transformedPosition = a.Vector3.Zero()), a.Vector3.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), !0) : !1
        }, c.prototype.transferToEffect = function(b, c) {
            return this.parent && this.parent.getWorldMatrix ? (this._transformedDirection || (this._transformedDirection = a.Vector3.Zero()), a.Vector3.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this._transformedDirection), void b.setFloat4(c, this._transformedDirection.x, this._transformedDirection.y, this._transformedDirection.z, 1)) : void b.setFloat4(c, this.direction.x, this.direction.y, this.direction.z, 1)
        }, c.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = a.Matrix.Identity()), a.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this._worldMatrix
        }, c
    }(a.Light);
    a.DirectionalLight = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(c, d) {
            var e = this;
            this.filter = b.FILTER_NONE, this._darkness = 0, this._transparencyShadow = !1, this._viewMatrix = a.Matrix.Zero(), this._projectionMatrix = a.Matrix.Zero(), this._transformMatrix = a.Matrix.Zero(), this._worldViewProjection = a.Matrix.Zero(), this._light = d, this._scene = d.getScene(), d._shadowGenerator = this, this._shadowMap = new a.RenderTargetTexture(d.name + "_shadowMap", c, this._scene, !1), this._shadowMap.wrapU = a.Texture.CLAMP_ADDRESSMODE, this._shadowMap.wrapV = a.Texture.CLAMP_ADDRESSMODE, this._shadowMap.renderParticles = !1;
            var f = function(b) {
                var c = b.getRenderingMesh(),
                    d = e._scene,
                    f = d.getEngine();
                f.setState(b.getMaterial().backFaceCulling);
                var g = c._getInstancesRenderList(b._id);
                if (!g.mustReturn) {
                    var h = null !== f.getCaps().instancedArrays && null !== g.visibleInstances[b._id];
                    if (e.isReady(b, h)) {
                        f.enableEffect(e._effect), c._bind(b, e._effect, a.Material.TriangleFillMode);
                        var i = b.getMaterial();
                        if (e._effect.setMatrix("viewProjection", e.getTransformMatrix()), i && i.needAlphaTesting()) {
                            var j = i.getAlphaTestTexture();
                            e._effect.setTexture("diffuseSampler", j), e._effect.setMatrix("diffuseMatrix", j.getTextureMatrix())
                        }
                        c.useBones && e._effect.setMatrices("mBones", c.skeleton.getTransformMatrices()), c._processRendering(b, e._effect, a.Material.TriangleFillMode, g, h, function(a, b) {
                            return e._effect.setMatrix("world", b)
                        })
                    } else e._shadowMap.resetRefreshCounter()
                }
            };
            this._shadowMap.customRenderFunction = function(a, b, c) {
                var d;
                for (d = 0; d < a.length; d++) f(a.data[d]);
                for (d = 0; d < b.length; d++) f(b.data[d]);
                if (e._transparencyShadow)
                    for (d = 0; d < c.length; d++) f(c.data[d])
            }
        }
        return Object.defineProperty(b, "FILTER_NONE", {
            get: function() {
                return b._FILTER_NONE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "FILTER_VARIANCESHADOWMAP", {
            get: function() {
                return b._FILTER_VARIANCESHADOWMAP
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "FILTER_POISSONSAMPLING", {
            get: function() {
                return b._FILTER_POISSONSAMPLING
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "useVarianceShadowMap", {
            get: function() {
                return this.filter === b.FILTER_VARIANCESHADOWMAP
            },
            set: function(a) {
                this.filter = a ? b.FILTER_VARIANCESHADOWMAP : b.FILTER_NONE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "usePoissonSampling", {
            get: function() {
                return this.filter === b.FILTER_POISSONSAMPLING
            },
            set: function(a) {
                this.filter = a ? b.FILTER_POISSONSAMPLING : b.FILTER_NONE
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.isReady = function(b, c) {
            var d = [];
            this.useVarianceShadowMap && d.push("#define VSM");
            var e = [a.VertexBuffer.PositionKind],
                f = b.getMesh(),
                g = b.getMaterial();
            g && g.needAlphaTesting() && (d.push("#define ALPHATEST"), f.isVerticesDataPresent(a.VertexBuffer.UVKind) && (e.push(a.VertexBuffer.UVKind), d.push("#define UV1")), f.isVerticesDataPresent(a.VertexBuffer.UV2Kind) && (e.push(a.VertexBuffer.UV2Kind), d.push("#define UV2"))), f.useBones && (e.push(a.VertexBuffer.MatricesIndicesKind), e.push(a.VertexBuffer.MatricesWeightsKind), d.push("#define BONES"), d.push("#define BonesPerMesh " + (f.skeleton.bones.length + 1))), c && (d.push("#define INSTANCES"), e.push("world0"), e.push("world1"), e.push("world2"), e.push("world3"));
            var h = d.join("\n");
            return this._cachedDefines !== h && (this._cachedDefines = h, this._effect = this._scene.getEngine().createEffect("shadowMap", e, ["world", "mBones", "viewProjection", "diffuseMatrix"], ["diffuseSampler"], h)), this._effect.isReady()
        }, b.prototype.getShadowMap = function() {
            return this._shadowMap
        }, b.prototype.getLight = function() {
            return this._light
        }, b.prototype.getTransformMatrix = function() {
            var b = this._light.position,
                c = this._light.direction;
            if (this._light.computeTransformedPosition() && (b = this._light.transformedPosition), !(this._cachedPosition && this._cachedDirection && b.equals(this._cachedPosition) && c.equals(this._cachedDirection))) {
                this._cachedPosition = b.clone(), this._cachedDirection = c.clone();
                var d = this._scene.activeCamera;
                a.Matrix.LookAtLHToRef(b, this._light.position.add(c), a.Vector3.Up(), this._viewMatrix), a.Matrix.PerspectiveFovLHToRef(Math.PI / 2, 1, d.minZ, d.maxZ, this._projectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix)
            }
            return this._transformMatrix
        }, b.prototype.getDarkness = function() {
            return this._darkness
        }, b.prototype.setDarkness = function(a) {
            this._darkness = a >= 1 ? 1 : 0 >= a ? 0 : a
        }, b.prototype.setTransparencyShadow = function(a) {
            this._transparencyShadow = a
        }, b.prototype.dispose = function() {
            this._shadowMap.dispose()
        }, b._FILTER_NONE = 0, b._FILTER_VARIANCESHADOWMAP = 1, b._FILTER_POISSONSAMPLING = 2, b
    }();
    a.ShadowGenerator = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            b.call(this, c, e), this.direction = d, this.groundColor = new a.Color3(0, 0, 0)
        }
        return __extends(c, b), c.prototype.setDirectionToTarget = function(b) {
            return this.direction = a.Vector3.Normalize(b.subtract(a.Vector3.Zero())), this.direction
        }, c.prototype.getShadowGenerator = function() {
            return null
        }, c.prototype.transferToEffect = function(b, c, d) {
            var e = a.Vector3.Normalize(this.direction);
            b.setFloat4(c, e.x, e.y, e.z, 0), b.setColor3(d, this.groundColor.scale(this.intensity))
        }, c.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = a.Matrix.Identity()), this._worldMatrix
        }, c
    }(a.Light);
    a.HemisphericLight = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function(a, b, c, d) {
            return a.x > c.x + d ? !1 : c.x - d > b.x ? !1 : a.y > c.y + d ? !1 : c.y - d > b.y ? !1 : a.z > c.z + d ? !1 : c.z - d > b.z ? !1 : !0
        },
        c = function(a, b, c, d) {
            var e = b * b - 4 * a * c,
                f = {
                    root: 0,
                    found: !1
                };
            if (0 > e) return f;
            var g = Math.sqrt(e),
                h = (-b - g) / (2 * a),
                i = (-b + g) / (2 * a);
            if (h > i) {
                var j = i;
                i = h, h = j
            }
            return h > 0 && d > h ? (f.root = h, f.found = !0, f) : i > 0 && d > i ? (f.root = i, f.found = !0, f) : f
        },
        d = function() {
            function d() {
                this.radius = new a.Vector3(1, 1, 1), this.retry = 0, this.basePointWorld = a.Vector3.Zero(), this.velocityWorld = a.Vector3.Zero(), this.normalizedVelocity = a.Vector3.Zero(), this._collisionPoint = a.Vector3.Zero(), this._planeIntersectionPoint = a.Vector3.Zero(), this._tempVector = a.Vector3.Zero(), this._tempVector2 = a.Vector3.Zero(), this._tempVector3 = a.Vector3.Zero(), this._tempVector4 = a.Vector3.Zero(), this._edge = a.Vector3.Zero(), this._baseToVertex = a.Vector3.Zero(), this._destinationPoint = a.Vector3.Zero(), this._slidePlaneNormal = a.Vector3.Zero(), this._displacementVector = a.Vector3.Zero()
            }
            return d.prototype._initialize = function(b, c, d) {
                this.velocity = c, a.Vector3.NormalizeToRef(c, this.normalizedVelocity), this.basePoint = b, b.multiplyToRef(this.radius, this.basePointWorld), c.multiplyToRef(this.radius, this.velocityWorld), this.velocityWorldLength = this.velocityWorld.length(), this.epsilon = d, this.collisionFound = !1
            }, d.prototype._checkPointInTriangle = function(b, c, d, e, f) {
                c.subtractToRef(b, this._tempVector), d.subtractToRef(b, this._tempVector2), a.Vector3.CrossToRef(this._tempVector, this._tempVector2, this._tempVector4);
                var g = a.Vector3.Dot(this._tempVector4, f);
                return 0 > g ? !1 : (e.subtractToRef(b, this._tempVector3), a.Vector3.CrossToRef(this._tempVector2, this._tempVector3, this._tempVector4), g = a.Vector3.Dot(this._tempVector4, f), 0 > g ? !1 : (a.Vector3.CrossToRef(this._tempVector3, this._tempVector, this._tempVector4), g = a.Vector3.Dot(this._tempVector4, f), g >= 0))
            }, d.prototype._canDoCollision = function(c, d, e, f) {
                var g = a.Vector3.Distance(this.basePointWorld, c),
                    h = Math.max(this.radius.x, this.radius.y, this.radius.z);
                return g > this.velocityWorldLength + h + d ? !1 : b(e, f, this.basePointWorld, this.velocityWorldLength + h) ? !0 : !1
            }, d.prototype._testTriangle = function(b, d, e, f, g) {
                var h, i = !1;
                d._trianglePlanes || (d._trianglePlanes = []), d._trianglePlanes[b] || (d._trianglePlanes[b] = new a.Plane(0, 0, 0, 0), d._trianglePlanes[b].copyFromPoints(e, f, g));
                var j = d._trianglePlanes[b];
                if (d.getMaterial() || j.isFrontFacingTo(this.normalizedVelocity, 0)) {
                    var k = j.signedDistanceTo(this.basePoint),
                        l = a.Vector3.Dot(j.normal, this.velocity);
                    if (0 == l) {
                        if (Math.abs(k) >= 1) return;
                        i = !0, h = 0
                    } else {
                        h = (-1 - k) / l;
                        var m = (1 - k) / l;
                        if (h > m) {
                            var n = m;
                            m = h, h = n
                        }
                        if (h > 1 || 0 > m) return;
                        0 > h && (h = 0), h > 1 && (h = 1)
                    }
                    this._collisionPoint.copyFromFloats(0, 0, 0);
                    var o = !1,
                        p = 1;
                    if (i || (this.basePoint.subtractToRef(j.normal, this._planeIntersectionPoint), this.velocity.scaleToRef(h, this._tempVector), this._planeIntersectionPoint.addInPlace(this._tempVector), this._checkPointInTriangle(this._planeIntersectionPoint, e, f, g, j.normal) && (o = !0, p = h, this._collisionPoint.copyFrom(this._planeIntersectionPoint))), !o) {
                        var q = this.velocity.lengthSquared(),
                            r = q;
                        this.basePoint.subtractToRef(e, this._tempVector);
                        var s = 2 * a.Vector3.Dot(this.velocity, this._tempVector),
                            t = this._tempVector.lengthSquared() - 1,
                            u = c(r, s, t, p);
                        u.found && (p = u.root, o = !0, this._collisionPoint.copyFrom(e)), this.basePoint.subtractToRef(f, this._tempVector), s = 2 * a.Vector3.Dot(this.velocity, this._tempVector), t = this._tempVector.lengthSquared() - 1, u = c(r, s, t, p), u.found && (p = u.root, o = !0, this._collisionPoint.copyFrom(f)), this.basePoint.subtractToRef(g, this._tempVector), s = 2 * a.Vector3.Dot(this.velocity, this._tempVector), t = this._tempVector.lengthSquared() - 1, u = c(r, s, t, p), u.found && (p = u.root, o = !0, this._collisionPoint.copyFrom(g)), f.subtractToRef(e, this._edge), e.subtractToRef(this.basePoint, this._baseToVertex);
                        var v = this._edge.lengthSquared(),
                            w = a.Vector3.Dot(this._edge, this.velocity),
                            x = a.Vector3.Dot(this._edge, this._baseToVertex);
                        if (r = v * -q + w * w, s = 2 * v * a.Vector3.Dot(this.velocity, this._baseToVertex) - 2 * w * x, t = v * (1 - this._baseToVertex.lengthSquared()) + x * x, u = c(r, s, t, p), u.found) {
                            var y = (w * u.root - x) / v;
                            y >= 0 && 1 >= y && (p = u.root, o = !0, this._edge.scaleInPlace(y), e.addToRef(this._edge, this._collisionPoint))
                        }
                        g.subtractToRef(f, this._edge), f.subtractToRef(this.basePoint, this._baseToVertex), v = this._edge.lengthSquared(), w = a.Vector3.Dot(this._edge, this.velocity), x = a.Vector3.Dot(this._edge, this._baseToVertex), r = v * -q + w * w, s = 2 * v * a.Vector3.Dot(this.velocity, this._baseToVertex) - 2 * w * x, t = v * (1 - this._baseToVertex.lengthSquared()) + x * x, u = c(r, s, t, p), u.found && (y = (w * u.root - x) / v, y >= 0 && 1 >= y && (p = u.root, o = !0, this._edge.scaleInPlace(y), f.addToRef(this._edge, this._collisionPoint))), e.subtractToRef(g, this._edge), g.subtractToRef(this.basePoint, this._baseToVertex), v = this._edge.lengthSquared(), w = a.Vector3.Dot(this._edge, this.velocity), x = a.Vector3.Dot(this._edge, this._baseToVertex), r = v * -q + w * w, s = 2 * v * a.Vector3.Dot(this.velocity, this._baseToVertex) - 2 * w * x, t = v * (1 - this._baseToVertex.lengthSquared()) + x * x, u = c(r, s, t, p), u.found && (y = (w * u.root - x) / v, y >= 0 && 1 >= y && (p = u.root, o = !0, this._edge.scaleInPlace(y), g.addToRef(this._edge, this._collisionPoint)))
                    }
                    if (o) {
                        var z = p * this.velocity.length();
                        (!this.collisionFound || z < this.nearestDistance) && (this.intersectionPoint ? this.intersectionPoint.copyFrom(this._collisionPoint) : this.intersectionPoint = this._collisionPoint.clone(), this.nearestDistance = z, this.collisionFound = !0, this.collidedMesh = d.getMesh())
                    }
                }
            }, d.prototype._collide = function(a, b, c, d, e, f) {
                for (var g = d; e > g; g += 3) {
                    var h = b[c[g] - f],
                        i = b[c[g + 1] - f],
                        j = b[c[g + 2] - f];
                    this._testTriangle(g, a, j, i, h)
                }
            }, d.prototype._getResponse = function(b, c) {
                b.addToRef(c, this._destinationPoint), c.scaleInPlace(this.nearestDistance / c.length()), this.basePoint.addToRef(c, b), b.subtractToRef(this.intersectionPoint, this._slidePlaneNormal), this._slidePlaneNormal.normalize(), this._slidePlaneNormal.scaleToRef(this.epsilon, this._displacementVector), b.addInPlace(this._displacementVector), this.intersectionPoint.addInPlace(this._displacementVector), this._slidePlaneNormal.scaleInPlace(a.Plane.SignedDistanceToPlaneFromPositionAndNormal(this.intersectionPoint, this._slidePlaneNormal, this._destinationPoint)), this._destinationPoint.subtractInPlace(this._slidePlaneNormal), this._destinationPoint.subtractToRef(this.intersectionPoint, c)
            }, d
        }();
    a.Collider = d
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(d, e, f) {
            b.call(this, d, f), this.position = e, this.upVector = a.Vector3.Up(), this.orthoLeft = null, this.orthoRight = null, this.orthoBottom = null, this.orthoTop = null, this.fov = .8, this.minZ = 1, this.maxZ = 1e4, this.inertia = .9, this.mode = c.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new a.Viewport(0, 0, 1, 1), this.subCameras = [], this.layerMask = 4294967295, this.fovMode = c.FOVMODE_VERTICAL_FIXED, this._computedViewMatrix = a.Matrix.Identity(), this._projectionMatrix = new a.Matrix, this._postProcesses = new Array, this._postProcessesTakenIndices = [], f.cameras.push(this), f.activeCamera || (f.activeCamera = this)
        }
        return __extends(c, b), Object.defineProperty(c, "PERSPECTIVE_CAMERA", {
            get: function() {
                return c._PERSPECTIVE_CAMERA
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "ORTHOGRAPHIC_CAMERA", {
            get: function() {
                return c._ORTHOGRAPHIC_CAMERA
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "FOVMODE_VERTICAL_FIXED", {
            get: function() {
                return c._FOVMODE_VERTICAL_FIXED
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "FOVMODE_HORIZONTAL_FIXED", {
            get: function() {
                return c._FOVMODE_HORIZONTAL_FIXED
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype._initCache = function() {
            b.prototype._initCache.call(this), this._cache.position = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }, c.prototype._updateCache = function(a) {
            a || b.prototype._updateCache.call(this);
            var c = this.getEngine();
            this._cache.position.copyFrom(this.position), this._cache.upVector.copyFrom(this.upVector), this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = this.maxZ, this._cache.fov = this.fov, this._cache.aspectRatio = c.getAspectRatio(this), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.renderWidth = c.getRenderWidth(), this._cache.renderHeight = c.getRenderHeight()
        }, c.prototype._updateFromScene = function() {
            this.updateCache(), this._update()
        }, c.prototype._isSynchronized = function() {
            return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }, c.prototype._isSynchronizedViewMatrix = function() {
            return b.prototype._isSynchronized.call(this) ? this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent() : !1
        }, c.prototype._isSynchronizedProjectionMatrix = function() {
            var a = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === this.maxZ;
            if (!a) return !1;
            var b = this.getEngine();
            return a = this.mode === c.PERSPECTIVE_CAMERA ? this._cache.fov === this.fov && this._cache.aspectRatio === b.getAspectRatio(this) : this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === b.getRenderWidth() && this._cache.renderHeight === b.getRenderHeight()
        }, c.prototype.attachControl = function() {}, c.prototype.detachControl = function() {}, c.prototype._update = function() {}, c.prototype.attachPostProcess = function(b, c) {
            if (void 0 === c && (c = null), !b.isReusable() && this._postProcesses.indexOf(b) > -1) return a.Tools.Error("You're trying to reuse a post process not defined as reusable."), 0;
            if (null == c || 0 > c) return this._postProcesses.push(b), this._postProcessesTakenIndices.push(this._postProcesses.length - 1), this._postProcesses.length - 1;
            var d = 0;
            if (this._postProcesses[c]) {
                for (var e = this._postProcesses.length - 1, f = e; f >= c + 1; --f) this._postProcesses[f + 1] = this._postProcesses[f];
                d = 1
            }
            for (f = 0; f < this._postProcessesTakenIndices.length; ++f)
                if (!(this._postProcessesTakenIndices[f] < c)) {
                    e = this._postProcessesTakenIndices.length - 1;
                    for (var g = e; g >= f; --g) this._postProcessesTakenIndices[g + 1] = this._postProcessesTakenIndices[g] + d;
                    this._postProcessesTakenIndices[f] = c;
                    break
                }
            d || -1 != this._postProcessesTakenIndices.indexOf(c) || this._postProcessesTakenIndices.push(c);
            var h = c + d;
            return this._postProcesses[h] = b, h
        }, c.prototype.detachPostProcess = function(a, b) {
            void 0 === b && (b = null);
            var c = [];
            if (b)
                for (b = b instanceof Array ? b : [b], f = 0; f < b.length; f++) {
                    var d = this._postProcesses[b[f]];
                    d === a ? (delete this._postProcesses[b[f]], g = this._postProcessesTakenIndices.indexOf(b[f]), this._postProcessesTakenIndices.splice(g, 1)) : c.push(f)
                } else
                    for (var e = this._postProcesses.length, f = 0; e > f; f++)
                        if (this._postProcesses[f] === a) {
                            delete this._postProcesses[f];
                            var g = this._postProcessesTakenIndices.indexOf(f);
                            this._postProcessesTakenIndices.splice(g, 1)
                        }
            return c
        }, c.prototype.getWorldMatrix = function() {
            this._worldMatrix || (this._worldMatrix = a.Matrix.Identity());
            var b = this.getViewMatrix();
            return b.invertToRef(this._worldMatrix), this._worldMatrix
        }, c.prototype._getViewMatrix = function() {
            return a.Matrix.Identity()
        }, c.prototype.getViewMatrix = function() {
            return this._computedViewMatrix = this._computeViewMatrix(), this.parent && this.parent.getWorldMatrix && !this.isSynchronized() ? (this._worldMatrix || (this._worldMatrix = a.Matrix.Identity()), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._computedViewMatrix), this._computedViewMatrix.invert(), this._currentRenderId = this.getScene().getRenderId(), this._computedViewMatrix) : this._computedViewMatrix
        }, c.prototype._computeViewMatrix = function(a) {
            return !a && this._isSynchronizedViewMatrix() ? this._computedViewMatrix : (this._computedViewMatrix = this._getViewMatrix(), this.parent && this.parent.getWorldMatrix || (this._currentRenderId = this.getScene().getRenderId()), this._computedViewMatrix)
        }, c.prototype.getProjectionMatrix = function(b) {
            if (!b && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
            var d = this.getEngine();
            if (this.mode === c.PERSPECTIVE_CAMERA) return this.minZ <= 0 && (this.minZ = .1), a.Matrix.PerspectiveFovLHToRef(this.fov, d.getAspectRatio(this), this.minZ, this.maxZ, this._projectionMatrix, this.fovMode), this._projectionMatrix;
            var e = d.getRenderWidth() / 2,
                f = d.getRenderHeight() / 2;
            return a.Matrix.OrthoOffCenterLHToRef(this.orthoLeft || -e, this.orthoRight || e, this.orthoBottom || -f, this.orthoTop || f, this.minZ, this.maxZ, this._projectionMatrix), this._projectionMatrix
        }, c.prototype.dispose = function() {
            var a = this.getScene().cameras.indexOf(this);
            this.getScene().cameras.splice(a, 1);
            for (var b = 0; b < this._postProcessesTakenIndices.length; ++b) this._postProcesses[this._postProcessesTakenIndices[b]].dispose(this)
        }, c._PERSPECTIVE_CAMERA = 0, c._ORTHOGRAPHIC_CAMERA = 1, c._FOVMODE_VERTICAL_FIXED = 0, c._FOVMODE_HORIZONTAL_FIXED = 1, c
    }(a.Node);
    a.Camera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            b.call(this, c, d, e), this.cameraDirection = new a.Vector3(0, 0, 0), this.cameraRotation = new a.Vector2(0, 0), this.rotation = new a.Vector3(0, 0, 0), this.speed = 2, this.noRotationConstraint = !1, this.lockedTarget = null, this._currentTarget = a.Vector3.Zero(), this._viewMatrix = a.Matrix.Zero(), this._camMatrix = a.Matrix.Zero(), this._cameraTransformMatrix = a.Matrix.Zero(), this._cameraRotationMatrix = a.Matrix.Zero(), this._referencePoint = new a.Vector3(0, 0, 1), this._transformedReferencePoint = a.Vector3.Zero(), this._lookAtTemp = a.Matrix.Zero(), this._tempMatrix = a.Matrix.Zero()
        }
        return __extends(c, b), c.prototype._getLockedTargetPosition = function() {
            return this.lockedTarget ? this.lockedTarget.position || this.lockedTarget : null
        }, c.prototype._initCache = function() {
            b.prototype._initCache.call(this), this._cache.lockedTarget = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, c.prototype._updateCache = function(a) {
            a || b.prototype._updateCache.call(this);
            var c = this._getLockedTargetPosition();
            c ? this._cache.lockedTarget ? this._cache.lockedTarget.copyFrom(c) : this._cache.lockedTarget = c.clone() : this._cache.lockedTarget = null, this._cache.rotation.copyFrom(this.rotation)
        }, c.prototype._isSynchronizedViewMatrix = function() {
            if (!b.prototype._isSynchronizedViewMatrix.call(this)) return !1;
            var a = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(a) : !a) && this._cache.rotation.equals(this.rotation)
        }, c.prototype._computeLocalCameraSpeed = function() {
            var a = this.getEngine();
            return this.speed * (a.getDeltaTime() / (10 * a.getFps()))
        }, c.prototype.setTarget = function(b) {
            this.upVector.normalize(), a.Matrix.LookAtLHToRef(this.position, b, this.upVector, this._camMatrix), this._camMatrix.invert(), this.rotation.x = Math.atan(this._camMatrix.m[6] / this._camMatrix.m[10]);
            var c = b.subtract(this.position);
            this.rotation.y = c.x >= 0 ? -Math.atan(c.z / c.x) + Math.PI / 2 : -Math.atan(c.z / c.x) - Math.PI / 2, this.rotation.z = -Math.acos(a.Vector3.Dot(new a.Vector3(0, 1, 0), this.upVector)), isNaN(this.rotation.x) && (this.rotation.x = 0), isNaN(this.rotation.y) && (this.rotation.y = 0), isNaN(this.rotation.z) && (this.rotation.z = 0)
        }, c.prototype.getTarget = function() {
            return this._currentTarget
        }, c.prototype._decideIfNeedsToMove = function() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
        }, c.prototype._updatePosition = function() {
            this.position.addInPlace(this.cameraDirection)
        }, c.prototype._update = function() {
            var b = this._decideIfNeedsToMove(),
                c = Math.abs(this.cameraRotation.x) > 0 || Math.abs(this.cameraRotation.y) > 0;
            if (b && this._updatePosition(), c && (this.rotation.x += this.cameraRotation.x, this.rotation.y += this.cameraRotation.y, !this.noRotationConstraint)) {
                var d = Math.PI / 2 * .95;
                this.rotation.x > d && (this.rotation.x = d), this.rotation.x < -d && (this.rotation.x = -d)
            }
            b && (Math.abs(this.cameraDirection.x) < a.Engine.Epsilon && (this.cameraDirection.x = 0), Math.abs(this.cameraDirection.y) < a.Engine.Epsilon && (this.cameraDirection.y = 0), Math.abs(this.cameraDirection.z) < a.Engine.Epsilon && (this.cameraDirection.z = 0), this.cameraDirection.scaleInPlace(this.inertia)), c && (Math.abs(this.cameraRotation.x) < a.Engine.Epsilon && (this.cameraRotation.x = 0), Math.abs(this.cameraRotation.y) < a.Engine.Epsilon && (this.cameraRotation.y = 0), this.cameraRotation.scaleInPlace(this.inertia))
        }, c.prototype._getViewMatrix = function() {
            return this.lockedTarget ? this._currentTarget.copyFrom(this._getLockedTargetPosition()) : (0 != this.upVector.x || 1 != this.upVector.y || 0 != this.upVector.z ? (a.Matrix.LookAtLHToRef(a.Vector3.Zero(), this._referencePoint, this.upVector, this._lookAtTemp), a.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), this._lookAtTemp.multiplyToRef(this._cameraRotationMatrix, this._tempMatrix), this._lookAtTemp.invert(), this._tempMatrix.multiplyToRef(this._lookAtTemp, this._cameraRotationMatrix)) : a.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), a.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget)), a.Matrix.LookAtLHToRef(this.position, this._currentTarget, this.upVector, this._viewMatrix), this._viewMatrix
        }, c
    }(a.Camera);
    a.TargetCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d) {
            b.call(this, a, c, d), this.radius = 12, this.rotationOffset = 0, this.heightOffset = 4, this.cameraAcceleration = .05, this.maxCameraSpeed = 20
        }
        return __extends(c, b), c.prototype.getRadians = function(a) {
            return a * Math.PI / 180
        }, c.prototype.follow = function(b) {
            if (b) {
                var c = this.getRadians(this.rotationOffset) + b.rotation.y,
                    d = b.position.x + Math.sin(c) * this.radius,
                    e = b.position.z + Math.cos(c) * this.radius,
                    f = d - this.position.x,
                    g = b.position.y + this.heightOffset - this.position.y,
                    h = e - this.position.z,
                    i = f * this.cameraAcceleration * 2,
                    j = g * this.cameraAcceleration,
                    k = h * this.cameraAcceleration * 2;
                (i > this.maxCameraSpeed || i < -this.maxCameraSpeed) && (i = 1 > i ? -this.maxCameraSpeed : this.maxCameraSpeed), (j > this.maxCameraSpeed || j < -this.maxCameraSpeed) && (j = 1 > j ? -this.maxCameraSpeed : this.maxCameraSpeed), (k > this.maxCameraSpeed || k < -this.maxCameraSpeed) && (k = 1 > k ? -this.maxCameraSpeed : this.maxCameraSpeed), this.position = new a.Vector3(this.position.x + i, this.position.y + j, this.position.z + k), this.setTarget(b.position)
            }
        }, c.prototype._update = function() {
            b.prototype._update.call(this), this.follow(this.target)
        }, c
    }(a.TargetCamera);
    a.FollowCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            b.call(this, c, d, e), this.ellipsoid = new a.Vector3(.5, 1, .5), this.keysUp = [38], this.keysDown = [40], this.keysLeft = [37], this.keysRight = [39], this.checkCollisions = !1, this.applyGravity = !1, this.angularSensibility = 2e3, this._keys = [], this._collider = new a.Collider, this._needMoveForGravity = !0, this._oldPosition = a.Vector3.Zero(), this._diffPosition = a.Vector3.Zero(), this._newPosition = a.Vector3.Zero()
        }
        return __extends(c, b), c.prototype.attachControl = function(b, c) {
            var d, e = this,
                f = this.getEngine();
            this._attachedElement || (this._attachedElement = b, void 0 === this._onMouseDown && (this._onMouseDown = function(a) {
                d = {
                    x: a.clientX,
                    y: a.clientY
                }, c || a.preventDefault()
            }, this._onMouseUp = function(a) {
                d = null, c || a.preventDefault()
            }, this._onMouseOut = function(a) {
                d = null, e._keys = [], c || a.preventDefault()
            }, this._onMouseMove = function(a) {
                if (d || f.isPointerLock) {
                    var b, g;
                    f.isPointerLock ? (b = a.movementX || a.mozMovementX || a.webkitMovementX || a.msMovementX || 0, g = a.movementY || a.mozMovementY || a.webkitMovementY || a.msMovementY || 0) : (b = a.clientX - d.x, g = a.clientY - d.y), e.cameraRotation.y += b / e.angularSensibility, e.cameraRotation.x += g / e.angularSensibility, d = {
                        x: a.clientX,
                        y: a.clientY
                    }, c || a.preventDefault()
                }
            }, this._onKeyDown = function(a) {
                if (-1 !== e.keysUp.indexOf(a.keyCode) || -1 !== e.keysDown.indexOf(a.keyCode) || -1 !== e.keysLeft.indexOf(a.keyCode) || -1 !== e.keysRight.indexOf(a.keyCode)) {
                    var b = e._keys.indexOf(a.keyCode); - 1 === b && e._keys.push(a.keyCode), c || a.preventDefault()
                }
            }, this._onKeyUp = function(a) {
                if (-1 !== e.keysUp.indexOf(a.keyCode) || -1 !== e.keysDown.indexOf(a.keyCode) || -1 !== e.keysLeft.indexOf(a.keyCode) || -1 !== e.keysRight.indexOf(a.keyCode)) {
                    var b = e._keys.indexOf(a.keyCode);
                    b >= 0 && e._keys.splice(b, 1), c || a.preventDefault()
                }
            }, this._onLostFocus = function() {
                e._keys = []
            }, this._reset = function() {
                e._keys = [], d = null, e.cameraDirection = new a.Vector3(0, 0, 0), e.cameraRotation = new a.Vector2(0, 0)
            }), b.addEventListener("mousedown", this._onMouseDown, !1), b.addEventListener("mouseup", this._onMouseUp, !1), b.addEventListener("mouseout", this._onMouseOut, !1), b.addEventListener("mousemove", this._onMouseMove, !1), a.Tools.RegisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }, {
                name: "blur",
                handler: this._onLostFocus
            }]))
        }, c.prototype.detachControl = function(b) {
            this._attachedElement == b && (b.removeEventListener("mousedown", this._onMouseDown), b.removeEventListener("mouseup", this._onMouseUp), b.removeEventListener("mouseout", this._onMouseOut), b.removeEventListener("mousemove", this._onMouseMove), a.Tools.UnregisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }, {
                name: "blur",
                handler: this._onLostFocus
            }]), this._attachedElement = null, this._reset && this._reset())
        }, c.prototype._collideWithWorld = function(b) {
            var c;
            c = this.parent ? a.Vector3.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, c.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._collider.radius = this.ellipsoid, this.getScene()._getNewPosition(this._oldPosition, b, this._collider, 3, this._newPosition), this._newPosition.subtractToRef(this._oldPosition, this._diffPosition), this._diffPosition.length() > a.Engine.CollisionsEpsilon && (this.position.addInPlace(this._diffPosition), this.onCollide && this.onCollide(this._collider.collidedMesh))
        }, c.prototype._checkInputs = function() {
            this._localDirection || (this._localDirection = a.Vector3.Zero(), this._transformedDirection = a.Vector3.Zero());
            for (var b = 0; b < this._keys.length; b++) {
                var c = this._keys[b],
                    d = this._computeLocalCameraSpeed(); - 1 !== this.keysLeft.indexOf(c) ? this._localDirection.copyFromFloats(-d, 0, 0) : -1 !== this.keysUp.indexOf(c) ? this._localDirection.copyFromFloats(0, 0, d) : -1 !== this.keysRight.indexOf(c) ? this._localDirection.copyFromFloats(d, 0, 0) : -1 !== this.keysDown.indexOf(c) && this._localDirection.copyFromFloats(0, 0, -d), this.getViewMatrix().invertToRef(this._cameraTransformMatrix), a.Vector3.TransformNormalToRef(this._localDirection, this._cameraTransformMatrix, this._transformedDirection), this.cameraDirection.addInPlace(this._transformedDirection)
            }
        }, c.prototype._decideIfNeedsToMove = function() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
        }, c.prototype._updatePosition = function() {
            if (this.checkCollisions && this.getScene().collisionsEnabled) {
                if (this._collideWithWorld(this.cameraDirection), this.applyGravity) {
                    var b = this.position;
                    this._collideWithWorld(this.getScene().gravity), this._needMoveForGravity = 0 != a.Vector3.DistanceSquared(b, this.position)
                }
            } else this.position.addInPlace(this.cameraDirection)
        }, c.prototype._update = function() {
            this._checkInputs(), b.prototype._update.call(this)
        }, c
    }(a.TargetCamera);
    a.FreeCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d) {
            b.call(this, a, c, d), this._offsetX = null, this._offsetY = null, this._pointerCount = 0, this._pointerPressed = [], this.angularSensibility = 2e5, this.moveSensibility = 500
        }
        return __extends(c, b), c.prototype.attachControl = function(b, c) {
            var d, e = this;
            this._attachedCanvas || (this._attachedCanvas = b, void 0 === this._onPointerDown && (this._onPointerDown = function(a) {
                c || a.preventDefault(), e._pointerPressed.push(a.pointerId), 1 === e._pointerPressed.length && (d = {
                    x: a.clientX,
                    y: a.clientY
                })
            }, this._onPointerUp = function(a) {
                c || a.preventDefault();
                var b = e._pointerPressed.indexOf(a.pointerId); - 1 !== b && (e._pointerPressed.splice(b, 1), 0 == b && (d = null, e._offsetX = null, e._offsetY = null))
            }, this._onPointerMove = function(a) {
                if (c || a.preventDefault(), d) {
                    var b = e._pointerPressed.indexOf(a.pointerId);
                    0 == b && (e._offsetX = a.clientX - d.x, e._offsetY = -(a.clientY - d.y))
                }
            }, this._onLostFocus = function() {
                e._offsetX = null, e._offsetY = null
            }), b.addEventListener("pointerdown", this._onPointerDown), b.addEventListener("pointerup", this._onPointerUp), b.addEventListener("pointerout", this._onPointerUp), b.addEventListener("pointermove", this._onPointerMove), a.Tools.RegisterTopRootEvents([{
                name: "blur",
                handler: this._onLostFocus
            }]))
        }, c.prototype.detachControl = function(b) {
            this._attachedCanvas == b && (b.removeEventListener("pointerdown", this._onPointerDown), b.removeEventListener("pointerup", this._onPointerUp), b.removeEventListener("pointerout", this._onPointerUp), b.removeEventListener("pointermove", this._onPointerMove), a.Tools.UnregisterTopRootEvents([{
                name: "blur",
                handler: this._onLostFocus
            }]), this._attachedCanvas = null)
        }, c.prototype._checkInputs = function() {
            if (this._offsetX)
                if (this.cameraRotation.y += this._offsetX / this.angularSensibility, this._pointerPressed.length > 1) this.cameraRotation.x += -this._offsetY / this.angularSensibility;
                else {
                    var b = this._computeLocalCameraSpeed(),
                        c = new a.Vector3(0, 0, b * this._offsetY / this.moveSensibility);
                    a.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, 0, this._cameraRotationMatrix), this.cameraDirection.addInPlace(a.Vector3.TransformCoordinates(c, this._cameraRotationMatrix))
                }
        }, c
    }(a.FreeCamera);
    a.TouchCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d) {
            var e = this;
            b.call(this, a, c, d), this._offsetX = null, this._offsetY = null, this._orientationGamma = 0, this._orientationBeta = 0, this._initialOrientationGamma = 0, this._initialOrientationBeta = 0, this.angularSensibility = 1e4, this.moveSensibility = 50, window.addEventListener("resize", function() {
                e._initialOrientationGamma = null
            }, !1)
        }
        return __extends(c, b), c.prototype.attachControl = function(a) {
            var b = this;
            this._attachedCanvas || (this._attachedCanvas = a, this._orientationChanged || (this._orientationChanged = function(a) {
                b._initialOrientationGamma || (b._initialOrientationGamma = a.gamma, b._initialOrientationBeta = a.beta), b._orientationGamma = a.gamma, b._orientationBeta = a.beta, b._offsetY = b._initialOrientationBeta - b._orientationBeta, b._offsetX = b._initialOrientationGamma - b._orientationGamma
            }), window.addEventListener("deviceorientation", this._orientationChanged))
        }, c.prototype.detachControl = function(a) {
            this._attachedCanvas == a && (window.removeEventListener("deviceorientation", this._orientationChanged), this._attachedCanvas = null, this._orientationGamma = 0, this._orientationBeta = 0, this._initialOrientationGamma = 0, this._initialOrientationBeta = 0)
        }, c.prototype._checkInputs = function() {
            if (this._offsetX) {
                this.cameraRotation.y -= this._offsetX / this.angularSensibility;
                var b = this._computeLocalCameraSpeed(),
                    c = new a.Vector3(0, 0, b * this._offsetY / this.moveSensibility);
                a.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, 0, this._cameraRotationMatrix), this.cameraDirection.addInPlace(a.Vector3.TransformCoordinates(c, this._cameraRotationMatrix))
            }
        }, c
    }(a.FreeCamera);
    a.DeviceOrientationCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = a.Tools.GetPointerPrefix(),
        c = function(c) {
            function d(b, d, e, f, g, h) {
                c.call(this, b, a.Vector3.Zero(), h), this.alpha = d, this.beta = e, this.radius = f, this.target = g, this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.lowerAlphaLimit = null, this.upperAlphaLimit = null, this.lowerBetaLimit = .01, this.upperBetaLimit = Math.PI, this.lowerRadiusLimit = null, this.upperRadiusLimit = null, this.angularSensibility = 1e3, this.wheelPrecision = 3, this.keysUp = [38], this.keysDown = [40], this.keysLeft = [37], this.keysRight = [39], this.zoomOnFactor = 1, this.targetScreenOffset = a.Vector2.Zero(), this._keys = [], this._viewMatrix = new a.Matrix, this.checkCollisions = !1, this.collisionRadius = new a.Vector3(.5, .5, .5), this._collider = new a.Collider, this._previousPosition = a.Vector3.Zero(), this._collisionVelocity = a.Vector3.Zero(), this._newPosition = a.Vector3.Zero(), this.pinchPrecision = 20, this.getViewMatrix()
            }
            return __extends(d, c), d.prototype._getTargetPosition = function() {
                return this.target.position || this.target
            }, d.prototype._initCache = function() {
                c.prototype._initCache.call(this), this._cache.target = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = void 0
            }, d.prototype._updateCache = function(a) {
                a || c.prototype._updateCache.call(this), this._cache.target.copyFrom(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset = this.targetScreenOffset.clone()
            }, d.prototype._isSynchronizedViewMatrix = function() {
                return c.prototype._isSynchronizedViewMatrix.call(this) ? this._cache.target.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset) : !1
            }, d.prototype.attachControl = function(c, d) {
                var e, f, g, h, i = this,
                    j = !1;
                if (!this._attachedElement) {
                    this._attachedElement = c;
                    var k = this.getEngine();
                    void 0 === this._onPointerDown && (this._onPointerDown = function(a) {
                        f || (f = a.pointerId, e = {
                            x: a.clientX,
                            y: a.clientY
                        }, d || a.preventDefault())
                    }, this._onPointerUp = function(a) {
                        e = null, f = null, d || a.preventDefault()
                    }, this._onPointerMove = function(a) {
                        if (e && f === a.pointerId && !j) {
                            var b = a.clientX - e.x,
                                c = a.clientY - e.y;
                            i.inertialAlphaOffset -= b / i.angularSensibility, i.inertialBetaOffset -= c / i.angularSensibility, e = {
                                x: a.clientX,
                                y: a.clientY
                            }, d || a.preventDefault()
                        }
                    }, this._onMouseMove = function(a) {
                        if (k.isPointerLock && !j) {
                            var b = a.movementX || a.mozMovementX || a.webkitMovementX || a.msMovementX || 0,
                                c = a.movementY || a.mozMovementY || a.webkitMovementY || a.msMovementY || 0;
                            i.inertialAlphaOffset -= b / i.angularSensibility, i.inertialBetaOffset -= c / i.angularSensibility, d || a.preventDefault()
                        }
                    }, this._wheel = function(a) {
                        var b = 0;
                        a.wheelDelta ? b = a.wheelDelta / (40 * i.wheelPrecision) : a.detail && (b = -a.detail / i.wheelPrecision), b && (i.inertialRadiusOffset += b), a.preventDefault && (d || a.preventDefault())
                    }, this._onKeyDown = function(a) {
                        if (-1 !== i.keysUp.indexOf(a.keyCode) || -1 !== i.keysDown.indexOf(a.keyCode) || -1 !== i.keysLeft.indexOf(a.keyCode) || -1 !== i.keysRight.indexOf(a.keyCode)) {
                            var b = i._keys.indexOf(a.keyCode); - 1 === b && i._keys.push(a.keyCode), a.preventDefault && (d || a.preventDefault())
                        }
                    }, this._onKeyUp = function(a) {
                        if (-1 !== i.keysUp.indexOf(a.keyCode) || -1 !== i.keysDown.indexOf(a.keyCode) || -1 !== i.keysLeft.indexOf(a.keyCode) || -1 !== i.keysRight.indexOf(a.keyCode)) {
                            var b = i._keys.indexOf(a.keyCode);
                            b >= 0 && i._keys.splice(b, 1), a.preventDefault && (d || a.preventDefault())
                        }
                    }, this._onLostFocus = function() {
                        i._keys = [], f = null
                    }, this._onGestureStart = function(a) {
                        void 0 !== window.MSGesture && (i._MSGestureHandler || (i._MSGestureHandler = new MSGesture, i._MSGestureHandler.target = c), i._MSGestureHandler.addPointer(a.pointerId))
                    }, this._onGesture = function(a) {
                        i.radius *= a.scale, a.preventDefault && (d || (a.stopPropagation(), a.preventDefault()))
                    }, this._reset = function() {
                        i._keys = [], i.inertialAlphaOffset = 0, i.inertialBetaOffset = 0, i.inertialRadiusOffset = 0, e = null, f = null
                    }, this._touchStart = function(a) {
                        2 === a.touches.length && (j = !0, i._pinchStart(a))
                    }, this._touchMove = function(a) {
                        j && i._pinchMove(a)
                    }, this._touchEnd = function(a) {
                        j && i._pinchEnd(a)
                    }, this._pinchStart = function(a) {
                        g = a.touches[0].clientX, h = a.touches[1].clientX, j = !0
                    }, this._pinchMove = function(a) {
                        var b, c, d = 0,
                            e = 1;
                        2 === a.touches.length && (b = Math.abs(g - h), c = Math.abs(a.touches[0].clientX - a.touches[1].clientX), b > c && (e = -1), d = i.pinchPrecision / (40 * i.wheelPrecision) * e, i.inertialRadiusOffset -= d, g = a.touches[0].clientX, h = a.touches[1].clientX)
                    }, this._pinchEnd = function() {
                        j = !1
                    }), c.addEventListener(b + "down", this._onPointerDown, !1), c.addEventListener(b + "up", this._onPointerUp, !1), c.addEventListener(b + "out", this._onPointerUp, !1), c.addEventListener(b + "move", this._onPointerMove, !1), c.addEventListener("mousemove", this._onMouseMove, !1), c.addEventListener("MSPointerDown", this._onGestureStart, !1), c.addEventListener("MSGestureChange", this._onGesture, !1), c.addEventListener("mousewheel", this._wheel, !1), c.addEventListener("DOMMouseScroll", this._wheel, !1), c.addEventListener("touchstart", this._touchStart, !1), c.addEventListener("touchmove", this._touchMove, !1), c.addEventListener("touchend", this._touchEnd, !1), a.Tools.RegisterTopRootEvents([{
                        name: "keydown",
                        handler: this._onKeyDown
                    }, {
                        name: "keyup",
                        handler: this._onKeyUp
                    }, {
                        name: "blur",
                        handler: this._onLostFocus
                    }])
                }
            }, d.prototype.detachControl = function(c) {
                this._attachedElement == c && (c.removeEventListener(b + "down", this._onPointerDown), c.removeEventListener(b + "up", this._onPointerUp), c.removeEventListener(b + "out", this._onPointerUp), c.removeEventListener(b + "move", this._onPointerMove), c.removeEventListener("mousemove", this._onMouseMove), c.removeEventListener("MSPointerDown", this._onGestureStart), c.removeEventListener("MSGestureChange", this._onGesture), c.removeEventListener("mousewheel", this._wheel), c.removeEventListener("DOMMouseScroll", this._wheel), c.removeEventListener("touchstart", this._touchStart), c.removeEventListener("touchmove", this._touchMove), c.removeEventListener("touchend", this._touchEnd), a.Tools.UnregisterTopRootEvents([{
                    name: "keydown",
                    handler: this._onKeyDown
                }, {
                    name: "keyup",
                    handler: this._onKeyUp
                }, {
                    name: "blur",
                    handler: this._onLostFocus
                }]), this._MSGestureHandler = null, this._attachedElement = null, this._reset && this._reset())
            }, d.prototype._update = function() {
                for (var b = 0; b < this._keys.length; b++) {
                    var c = this._keys[b]; - 1 !== this.keysLeft.indexOf(c) ? this.inertialAlphaOffset -= .01 : -1 !== this.keysUp.indexOf(c) ? this.inertialBetaOffset -= .01 : -1 !== this.keysRight.indexOf(c) ? this.inertialAlphaOffset += .01 : -1 !== this.keysDown.indexOf(c) && (this.inertialBetaOffset += .01)
                }(0 != this.inertialAlphaOffset || 0 != this.inertialBetaOffset || 0 != this.inertialRadiusOffset) && (this.alpha += this.inertialAlphaOffset, this.beta += this.inertialBetaOffset, this.radius -= this.inertialRadiusOffset, this.inertialAlphaOffset *= this.inertia, this.inertialBetaOffset *= this.inertia, this.inertialRadiusOffset *= this.inertia, Math.abs(this.inertialAlphaOffset) < a.Engine.Epsilon && (this.inertialAlphaOffset = 0), Math.abs(this.inertialBetaOffset) < a.Engine.Epsilon && (this.inertialBetaOffset = 0), Math.abs(this.inertialRadiusOffset) < a.Engine.Epsilon && (this.inertialRadiusOffset = 0)), this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), this.lowerBetaLimit && this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), this.upperBetaLimit && this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit), this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit)
            }, d.prototype.setPosition = function(a) {
                var b = a.subtract(this._getTargetPosition());
                this.radius = b.length(), this.alpha = Math.acos(b.x / Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.z, 2))), b.z < 0 && (this.alpha = 2 * Math.PI - this.alpha), this.beta = Math.acos(b.y / this.radius)
            }, d.prototype._getViewMatrix = function() {
                var b = Math.cos(this.alpha),
                    c = Math.sin(this.alpha),
                    d = Math.cos(this.beta),
                    e = Math.sin(this.beta),
                    f = this._getTargetPosition();
                return f.addToRef(new a.Vector3(this.radius * b * e, this.radius * d, this.radius * c * e), this.position), this.checkCollisions && (this._collider.radius = this.collisionRadius, this.position.subtractToRef(this._previousPosition, this._collisionVelocity), this.getScene()._getNewPosition(this._previousPosition, this._collisionVelocity, this._collider, 3, this._newPosition), this._newPosition.equalsWithEpsilon(this.position) || (this.position.copyFrom(this._previousPosition), this.alpha = this._previousAlpha, this.beta = this._previousBeta, this.radius = this._previousRadius, this.onCollide && this.onCollide(this._collider.collidedMesh))), a.Matrix.LookAtLHToRef(this.position, f, this.upVector, this._viewMatrix), this._previousAlpha = this.alpha, this._previousBeta = this.beta, this._previousRadius = this.radius, this._previousPosition.copyFrom(this.position), this._viewMatrix.m[12] += this.targetScreenOffset.x, this._viewMatrix.m[13] += this.targetScreenOffset.y, this._viewMatrix
            }, d.prototype.zoomOn = function(b) {
                b = b || this.getScene().meshes;
                var c = a.Mesh.MinMax(b),
                    d = a.Vector3.Distance(c.min, c.max);
                this.radius = d * this.zoomOnFactor, this.focusOn({
                    min: c.min,
                    max: c.max,
                    distance: d
                })
            }, d.prototype.focusOn = function(b) {
                var c, d;
                void 0 === b.min ? (c = b || this.getScene().meshes, c = a.Mesh.MinMax(c), d = a.Vector3.Distance(c.min, c.max)) : (c = b, d = b.distance), this.target = a.Mesh.Center(c), this.maxZ = 2 * d
            }, d
        }(a.Camera);
    a.ArcRotateCamera = c
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(c) {
            this.autoClear = !0, this.clearColor = new a.Color3(.2, .2, .3), this.ambientColor = new a.Color3(0, 0, 0), this.forceWireframe = !1, this.forcePointsCloud = !1, this.forceShowBoundingBoxes = !1, this.animationsEnabled = !0, this.cameraToUseForPointers = null, this.fogEnabled = !0, this.fogMode = b.FOGMODE_NONE, this.fogColor = new a.Color3(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.shadowsEnabled = !0, this.lightsEnabled = !0, this.lights = new Array, this.cameras = new Array, this.activeCameras = new Array, this.meshes = new Array, this._geometries = new Array, this.materials = new Array, this.multiMaterials = new Array, this.defaultMaterial = new a.StandardMaterial("default material", this), this.texturesEnabled = !0, this.textures = new Array, this.particlesEnabled = !0, this.particleSystems = new Array, this.spriteManagers = new Array, this.layers = new Array, this.skeletonsEnabled = !0, this.skeletons = new Array, this.lensFlaresEnabled = !0, this.lensFlareSystems = new Array, this.collisionsEnabled = !0, this.gravity = new a.Vector3(0, -9, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.customRenderTargets = new Array, this.importedMeshesFiles = new Array, this._actionManagers = new Array, this._meshesForIntersections = new a.SmartArray(256), this.proceduralTexturesEnabled = !0, this._proceduralTextures = new Array, this.soundTracks = new Array, this._totalVertices = 0, this._activeVertices = 0, this._activeParticles = 0, this._lastFrameDuration = 0, this._evaluateActiveMeshesDuration = 0, this._renderTargetsDuration = 0, this._particlesDuration = 0, this._renderDuration = 0, this._spritesDuration = 0, this._animationRatio = 0, this._renderId = 0, this._executeWhenReadyTimeoutId = -1, this._toBeDisposed = new a.SmartArray(256), this._onReadyCallbacks = new Array, this._pendingData = [], this._onBeforeRenderCallbacks = new Array, this._onAfterRenderCallbacks = new Array, this._activeMeshes = new a.SmartArray(256), this._processedMaterials = new a.SmartArray(256), this._renderTargets = new a.SmartArray(256), this._activeParticleSystems = new a.SmartArray(256), this._activeSkeletons = new a.SmartArray(32), this._activeBones = 0, this._activeAnimatables = new Array, this._transformMatrix = a.Matrix.Zero(), this._scaledPosition = a.Vector3.Zero(), this._scaledVelocity = a.Vector3.Zero(), this._engine = c, c.scenes.push(this), this._renderingManager = new a.RenderingManager(this), this.postProcessManager = new a.PostProcessManager(this), this.postProcessRenderPipelineManager = new a.PostProcessRenderPipelineManager, this._boundingBoxRenderer = new a.BoundingBoxRenderer(this), this._outlineRenderer = new a.OutlineRenderer(this), this.attachControl(), this._debugLayer = new a.DebugLayer(this), this.mainSoundTrack = new a.SoundTrack(this, {
                mainTrack: !0
            })
        }
        return Object.defineProperty(b, "FOGMODE_NONE", {
            get: function() {
                return b._FOGMODE_NONE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "FOGMODE_EXP", {
            get: function() {
                return b._FOGMODE_EXP
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "FOGMODE_EXP2", {
            get: function() {
                return b._FOGMODE_EXP2
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "FOGMODE_LINEAR", {
            get: function() {
                return b._FOGMODE_LINEAR
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "debugLayer", {
            get: function() {
                return this._debugLayer
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "meshUnderPointer", {
            get: function() {
                return this._meshUnderPointer
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "pointerX", {
            get: function() {
                return this._pointerX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "pointerY", {
            get: function() {
                return this._pointerY
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.getCachedMaterial = function() {
            return this._cachedMaterial
        }, b.prototype.getBoundingBoxRenderer = function() {
            return this._boundingBoxRenderer
        }, b.prototype.getOutlineRenderer = function() {
            return this._outlineRenderer
        }, b.prototype.getEngine = function() {
            return this._engine
        }, b.prototype.getTotalVertices = function() {
            return this._totalVertices
        }, b.prototype.getActiveVertices = function() {
            return this._activeVertices
        }, b.prototype.getActiveParticles = function() {
            return this._activeParticles
        }, b.prototype.getActiveBones = function() {
            return this._activeBones
        }, b.prototype.getLastFrameDuration = function() {
            return this._lastFrameDuration
        }, b.prototype.getEvaluateActiveMeshesDuration = function() {
            return this._evaluateActiveMeshesDuration
        }, b.prototype.getActiveMeshes = function() {
            return this._activeMeshes
        }, b.prototype.getRenderTargetsDuration = function() {
            return this._renderTargetsDuration
        }, b.prototype.getRenderDuration = function() {
            return this._renderDuration
        }, b.prototype.getParticlesDuration = function() {
            return this._particlesDuration
        }, b.prototype.getSpritesDuration = function() {
            return this._spritesDuration
        }, b.prototype.getAnimationRatio = function() {
            return this._animationRatio
        }, b.prototype.getRenderId = function() {
            return this._renderId
        }, b.prototype.incrementRenderId = function() {
            this._renderId++
        }, b.prototype._updatePointerPosition = function(a) {
            var b = this._engine.getRenderingCanvasClientRect();
            this._pointerX = a.clientX - b.left, this._pointerY = a.clientY - b.top, this.cameraToUseForPointers && (this._pointerX = this._pointerX - this.cameraToUseForPointers.viewport.x * this._engine.getRenderWidth(), this._pointerY = this._pointerY - this.cameraToUseForPointers.viewport.y * this._engine.getRenderHeight())
        }, b.prototype.attachControl = function() {
            var b = this;
            this._onPointerMove = function(a) {
                var c = b._engine.getRenderingCanvas();
                b._updatePointerPosition(a);
                var d = b.pick(b._pointerX, b._pointerY, function(a) {
                    return a.isPickable && a.isVisible && a.isReady() && a.actionManager && a.actionManager.hasPointerTriggers
                }, !1, b.cameraToUseForPointers);
                d.hit ? (b._meshUnderPointer = d.pickedMesh, b.setPointerOverMesh(d.pickedMesh), c.style.cursor = "pointer") : (b.setPointerOverMesh(null), c.style.cursor = "", b._meshUnderPointer = null)
            }, this._onPointerDown = function(c) {
                var d = null;
                b.onPointerDown || (d = function(a) {
                    return a.isPickable && a.isVisible && a.isReady() && a.actionManager && a.actionManager.hasPickTriggers
                }), b._updatePointerPosition(c);
                var e = b.pick(b._pointerX, b._pointerY, d, !1, b.cameraToUseForPointers);
                if (e.hit && e.pickedMesh.actionManager) {
                    switch (c.button) {
                        case 0:
                            e.pickedMesh.actionManager.processTrigger(a.ActionManager.OnLeftPickTrigger, a.ActionEvent.CreateNew(e.pickedMesh, c));
                            break;
                        case 1:
                            e.pickedMesh.actionManager.processTrigger(a.ActionManager.OnCenterPickTrigger, a.ActionEvent.CreateNew(e.pickedMesh, c));
                            break;
                        case 2:
                            e.pickedMesh.actionManager.processTrigger(a.ActionManager.OnRightPickTrigger, a.ActionEvent.CreateNew(e.pickedMesh, c))
                    }
                    e.pickedMesh.actionManager.processTrigger(a.ActionManager.OnPickTrigger, a.ActionEvent.CreateNew(e.pickedMesh, c))
                }
                b.onPointerDown && b.onPointerDown(c, e)
            }, this._onKeyDown = function(c) {
                b.actionManager && b.actionManager.processTrigger(a.ActionManager.OnKeyDownTrigger, a.ActionEvent.CreateNewFromScene(b, c))
            }, this._onKeyUp = function(c) {
                b.actionManager && b.actionManager.processTrigger(a.ActionManager.OnKeyUpTrigger, a.ActionEvent.CreateNewFromScene(b, c))
            };
            var c = a.Tools.GetPointerPrefix();
            this._engine.getRenderingCanvas().addEventListener(c + "move", this._onPointerMove, !1), this._engine.getRenderingCanvas().addEventListener(c + "down", this._onPointerDown, !1), a.Tools.RegisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }])
        }, b.prototype.detachControl = function() {
            var b = a.Tools.GetPointerPrefix();
            this._engine.getRenderingCanvas().removeEventListener(b + "move", this._onPointerMove), this._engine.getRenderingCanvas().removeEventListener(b + "down", this._onPointerDown), a.Tools.UnregisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }])
        }, b.prototype.isReady = function() {
            if (this._pendingData.length > 0) return !1;
            for (var b = 0; b < this._geometries.length; b++) {
                var c = this._geometries[b];
                if (c.delayLoadState === a.Engine.DELAYLOADSTATE_LOADING) return !1
            }
            for (b = 0; b < this.meshes.length; b++) {
                var d = this.meshes[b];
                if (!d.isReady()) return !1;
                var e = d.material;
                if (e && !e.isReady(d)) return !1
            }
            return !0
        }, b.prototype.resetCachedMaterial = function() {
            this._cachedMaterial = null
        }, b.prototype.registerBeforeRender = function(a) {
            this._onBeforeRenderCallbacks.push(a)
        }, b.prototype.unregisterBeforeRender = function(a) {
            var b = this._onBeforeRenderCallbacks.indexOf(a);
            b > -1 && this._onBeforeRenderCallbacks.splice(b, 1)
        }, b.prototype.registerAfterRender = function(a) {
            this._onAfterRenderCallbacks.push(a)
        }, b.prototype.unregisterAfterRender = function(a) {
            var b = this._onAfterRenderCallbacks.indexOf(a);
            b > -1 && this._onAfterRenderCallbacks.splice(b, 1)
        }, b.prototype._addPendingData = function(a) {
            this._pendingData.push(a)
        }, b.prototype._removePendingData = function(a) {
            var b = this._pendingData.indexOf(a); - 1 !== b && this._pendingData.splice(b, 1)
        }, b.prototype.getWaitingItemsCount = function() {
            return this._pendingData.length
        }, b.prototype.executeWhenReady = function(a) {
            var b = this;
            this._onReadyCallbacks.push(a), -1 === this._executeWhenReadyTimeoutId && (this._executeWhenReadyTimeoutId = setTimeout(function() {
                b._checkIsReady()
            }, 150))
        }, b.prototype._checkIsReady = function() {
            var a = this;
            return this.isReady() ? (this._onReadyCallbacks.forEach(function(a) {
                a()
            }), this._onReadyCallbacks = [], void(this._executeWhenReadyTimeoutId = -1)) : void(this._executeWhenReadyTimeoutId = setTimeout(function() {
                a._checkIsReady()
            }, 150))
        }, b.prototype.beginAnimation = function(b, c, d, e, f, g, h) {
            if (void 0 === f && (f = 1), this.stopAnimation(b), h || (h = new a.Animatable(this, b, c, d, e, f, g)), b.animations && h.appendAnimations(b, b.animations), b.getAnimatables)
                for (var i = b.getAnimatables(), j = 0; j < i.length; j++) this.beginAnimation(i[j], c, d, e, f, g, h);
            return h
        }, b.prototype.beginDirectAnimation = function(b, c, d, e, f, g, h) {
            void 0 === g && (g = 1);
            var i = new a.Animatable(this, b, d, e, f, g, h, c);
            return i
        }, b.prototype.getAnimatableByTarget = function(a) {
            for (var b = 0; b < this._activeAnimatables.length; b++)
                if (this._activeAnimatables[b].target === a) return this._activeAnimatables[b];
            return null
        }, b.prototype.stopAnimation = function(a) {
            var b = this.getAnimatableByTarget(a);
            b && b.stop()
        }, b.prototype._animate = function() {
            if (this.animationsEnabled) {
                this._animationStartDate || (this._animationStartDate = a.Tools.Now);
                for (var b = a.Tools.Now, c = b - this._animationStartDate, d = 0; d < this._activeAnimatables.length; d++) this._activeAnimatables[d]._animate(c) || (this._activeAnimatables.splice(d, 1), d--)
            }
        }, b.prototype.getViewMatrix = function() {
            return this._viewMatrix
        }, b.prototype.getProjectionMatrix = function() {
            return this._projectionMatrix
        }, b.prototype.getTransformMatrix = function() {
            return this._transformMatrix
        }, b.prototype.setTransformMatrix = function(a, b) {
            this._viewMatrix = a, this._projectionMatrix = b, this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix)
        }, b.prototype.setActiveCameraByID = function(a) {
            var b = this.getCameraByID(a);
            return b ? (this.activeCamera = b, b) : null
        }, b.prototype.setActiveCameraByName = function(a) {
            var b = this.getCameraByName(a);
            return b ? (this.activeCamera = b, b) : null
        }, b.prototype.getMaterialByID = function(a) {
            for (var b = 0; b < this.materials.length; b++)
                if (this.materials[b].id === a) return this.materials[b];
            return null
        }, b.prototype.getMaterialByName = function(a) {
            for (var b = 0; b < this.materials.length; b++)
                if (this.materials[b].name === a) return this.materials[b];
            return null
        }, b.prototype.getCameraByID = function(a) {
            for (var b = 0; b < this.cameras.length; b++)
                if (this.cameras[b].id === a) return this.cameras[b];
            return null
        }, b.prototype.getCameraByName = function(a) {
            for (var b = 0; b < this.cameras.length; b++)
                if (this.cameras[b].name === a) return this.cameras[b];
            return null
        }, b.prototype.getLightByName = function(a) {
            for (var b = 0; b < this.lights.length; b++)
                if (this.lights[b].name === a) return this.lights[b];
            return null
        }, b.prototype.getLightByID = function(a) {
            for (var b = 0; b < this.lights.length; b++)
                if (this.lights[b].id === a) return this.lights[b];
            return null
        }, b.prototype.getGeometryByID = function(a) {
            for (var b = 0; b < this._geometries.length; b++)
                if (this._geometries[b].id === a) return this._geometries[b];
            return null
        }, b.prototype.pushGeometry = function(a, b) {
            return !b && this.getGeometryByID(a.id) ? !1 : (this._geometries.push(a), !0)
        }, b.prototype.getGeometries = function() {
            return this._geometries
        }, b.prototype.getMeshByID = function(a) {
            for (var b = 0; b < this.meshes.length; b++)
                if (this.meshes[b].id === a) return this.meshes[b];
            return null
        }, b.prototype.getLastMeshByID = function(a) {
            for (var b = this.meshes.length - 1; b >= 0; b--)
                if (this.meshes[b].id === a) return this.meshes[b];
            return null
        }, b.prototype.getLastEntryByID = function(a) {
            for (var b = this.meshes.length - 1; b >= 0; b--)
                if (this.meshes[b].id === a) return this.meshes[b];
            for (b = this.cameras.length - 1; b >= 0; b--)
                if (this.cameras[b].id === a) return this.cameras[b];
            for (b = this.lights.length - 1; b >= 0; b--)
                if (this.lights[b].id === a) return this.lights[b];
            return null
        }, b.prototype.getNodeByName = function(a) {
            var b = this.getMeshByName(a);
            if (b) return b;
            var c = this.getLightByName(a);
            return c ? c : this.getCameraByName(a)
        }, b.prototype.getMeshByName = function(a) {
            for (var b = 0; b < this.meshes.length; b++)
                if (this.meshes[b].name === a) return this.meshes[b];
            return null
        }, b.prototype.getSoundByName = function(a) {
            for (var b = 0; b < this.mainSoundTrack.soundCollection.length; b++)
                if (this.mainSoundTrack.soundCollection[b].name === a) return this.mainSoundTrack.soundCollection[b];
            for (var c = 0; c < this.soundTracks.length; c++)
                for (b = 0; b < this.soundTracks[c].soundCollection.length; b++)
                    if (this.soundTracks[c].soundCollection[b].name === a) return this.soundTracks[c].soundCollection[b];
            return null
        }, b.prototype.getLastSkeletonByID = function(a) {
            for (var b = this.skeletons.length - 1; b >= 0; b--)
                if (this.skeletons[b].id === a) return this.skeletons[b];
            return null
        }, b.prototype.getSkeletonById = function(a) {
            for (var b = 0; b < this.skeletons.length; b++)
                if (this.skeletons[b].id === a) return this.skeletons[b];
            return null
        }, b.prototype.getSkeletonByName = function(a) {
            for (var b = 0; b < this.skeletons.length; b++)
                if (this.skeletons[b].name === a) return this.skeletons[b];
            return null
        }, b.prototype.isActiveMesh = function(a) {
            return -1 !== this._activeMeshes.indexOf(a)
        }, b.prototype._evaluateSubMesh = function(a, b) {
            if (1 === b.subMeshes.length || a.isInFrustum(this._frustumPlanes)) {
                var c = a.getMaterial();
                b.showSubMeshesBoundingBox && this._boundingBoxRenderer.renderList.push(a.getBoundingInfo().boundingBox), c && (c.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(c) && (this._processedMaterials.push(c), this._renderTargets.concat(c.getRenderTargetTextures())), this._activeVertices += a.indexCount, this._renderingManager.dispatch(a))
            }
        }, b.prototype._evaluateActiveMeshes = function() {
            this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._boundingBoxRenderer.reset(), this._frustumPlanes ? a.Frustum.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = a.Frustum.GetPlanes(this._transformMatrix);
            var b, c;
            if (this._selectionOctree) {
                var d = this._selectionOctree.select(this._frustumPlanes);
                b = d.data, c = d.length
            } else c = this.meshes.length, b = this.meshes;
            for (var e = 0; c > e; e++) {
                var f = b[e];
                if (!f.isBlocked && (this._totalVertices += f.getTotalVertices(), f.isReady())) {
                    f.computeWorldMatrix(), f.actionManager && f.actionManager.hasSpecificTriggers([a.ActionManager.OnIntersectionEnterTrigger, a.ActionManager.OnIntersectionExitTrigger]) && this._meshesForIntersections.pushNoDuplicate(f);
                    var g = f.getLOD(this.activeCamera);
                    g && (f._preActivate(), f.isEnabled() && f.isVisible && f.visibility > 0 && 0 !== (f.layerMask & this.activeCamera.layerMask) && f.isInFrustum(this._frustumPlanes) && (this._activeMeshes.push(f), f._activate(this._renderId), this._activeMesh(g)))
                }
            }
            var h = a.Tools.Now;
            if (this.particlesEnabled) {
                a.Tools.StartPerformanceCounter("Particles", this.particleSystems.length > 0);
                for (var i = 0; i < this.particleSystems.length; i++) {
                    var j = this.particleSystems[i];
                    j.isStarted() && (!j.emitter.position || j.emitter && j.emitter.isEnabled()) && (this._activeParticleSystems.push(j), j.animate())
                }
                a.Tools.EndPerformanceCounter("Particles", this.particleSystems.length > 0)
            }
            this._particlesDuration += a.Tools.Now - h
        }, b.prototype._activeMesh = function(a) {
            if (a.skeleton && this.skeletonsEnabled && this._activeSkeletons.pushNoDuplicate(a.skeleton), (a.showBoundingBox || this.forceShowBoundingBoxes) && this._boundingBoxRenderer.renderList.push(a.getBoundingInfo().boundingBox), a && a.subMeshes) {
                var b, c;
                if (a._submeshesOctree && a.useOctreeForRenderingSelection) {
                    var d = a._submeshesOctree.select(this._frustumPlanes);
                    b = d.length, c = d.data
                } else c = a.subMeshes, b = c.length;
                for (var e = 0; b > e; e++) {
                    var f = c[e];
                    this._evaluateSubMesh(f, a)
                }
            }
        }, b.prototype.updateTransformMatrix = function(a) {
            this.setTransformMatrix(this.activeCamera.getViewMatrix(), this.activeCamera.getProjectionMatrix(a))
        }, b.prototype._renderForCamera = function(b) {
            var c = this._engine;
            if (this.activeCamera = b, !this.activeCamera) throw new Error("Active camera not set");
            a.Tools.StartPerformanceCounter("Rendering camera " + this.activeCamera.name), c.setViewport(this.activeCamera.viewport), this._renderId++, this.updateTransformMatrix(), this.beforeCameraRender && this.beforeCameraRender(this.activeCamera);
            var d = a.Tools.Now;
            a.Tools.StartPerformanceCounter("Active meshes evaluation"), this._evaluateActiveMeshes(), this._evaluateActiveMeshesDuration += a.Tools.Now - d, a.Tools.EndPerformanceCounter("Active meshes evaluation");
            for (var e = 0; e < this._activeSkeletons.length; e++) {
                var f = this._activeSkeletons.data[e];
                f.prepare(), this._activeBones += f.bones.length
            }
            var g = a.Tools.Now;
            if (this.renderTargetsEnabled) {
                a.Tools.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
                for (var h = 0; h < this._renderTargets.length; h++) {
                    var i = this._renderTargets.data[h];
                    i._shouldRender() && (this._renderId++, i.render())
                }
                a.Tools.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
            }
            this._renderTargets.length > 0 && c.restoreDefaultFramebuffer(), this._renderTargetsDuration += a.Tools.Now - g, this.postProcessManager._prepareFrame();
            var j = a.Tools.Now;
            if (this.layers.length) {
                c.setDepthBuffer(!1);
                var k, l;
                for (k = 0; k < this.layers.length; k++) l = this.layers[k], l.isBackground && l.render();
                c.setDepthBuffer(!0)
            }
            if (a.Tools.StartPerformanceCounter("Main render"), this._renderingManager.render(null, null, !0, !0), a.Tools.EndPerformanceCounter("Main render"), this._boundingBoxRenderer.render(), this.lensFlaresEnabled) {
                a.Tools.StartPerformanceCounter("Lens flares", this.lensFlareSystems.length > 0);
                for (var m = 0; m < this.lensFlareSystems.length; m++) this.lensFlareSystems[m].render();
                a.Tools.EndPerformanceCounter("Lens flares", this.lensFlareSystems.length > 0)
            }
            if (this.layers.length) {
                for (c.setDepthBuffer(!1), k = 0; k < this.layers.length; k++) l = this.layers[k], l.isBackground || l.render();
                c.setDepthBuffer(!0)
            }
            this._renderDuration += a.Tools.Now - j, this.postProcessManager._finalizeFrame(b.isIntermediate), this.activeCamera._updateFromScene(), this._renderTargets.reset(), this.afterCameraRender && this.afterCameraRender(this.activeCamera), a.Tools.EndPerformanceCounter("Rendering camera " + this.activeCamera.name)
        }, b.prototype._processSubCameras = function(a) {
            if (0 === a.subCameras.length) return void this._renderForCamera(a);
            for (var b = 0; b < a.subCameras.length; b++) this._renderForCamera(a.subCameras[b]);
            this.activeCamera = a, this.setTransformMatrix(this.activeCamera.getViewMatrix(), this.activeCamera.getProjectionMatrix()), this.activeCamera._updateFromScene()
        }, b.prototype._checkIntersections = function() {
            for (var b = 0; b < this._meshesForIntersections.length; b++)
                for (var c = this._meshesForIntersections.data[b], d = 0; d < c.actionManager.actions.length; d++) {
                    var e = c.actionManager.actions[d];
                    if (e.trigger === a.ActionManager.OnIntersectionEnterTrigger || e.trigger === a.ActionManager.OnIntersectionExitTrigger) {
                        var f = e.getTriggerParameter(),
                            g = f instanceof a.AbstractMesh ? f : f.mesh,
                            h = g.intersectsMesh(c, f.usePreciseIntersection),
                            i = c._intersectionsInProgress.indexOf(g);
                        if (h && -1 === i) e.trigger === a.ActionManager.OnIntersectionEnterTrigger ? (e._executeCurrent(a.ActionEvent.CreateNew(c)), c._intersectionsInProgress.push(g)) : e.trigger === a.ActionManager.OnIntersectionExitTrigger && c._intersectionsInProgress.push(g);
                        else if (!h && i > -1 && e.trigger === a.ActionManager.OnIntersectionExitTrigger) {
                            e._executeCurrent(a.ActionEvent.CreateNew(c));
                            var j = c._intersectionsInProgress.indexOf(g);
                            j > -1 && c._intersectionsInProgress.splice(j, 1)
                        }
                    }
                }
        }, b.prototype.render = function() {
            var c = a.Tools.Now;
            this._particlesDuration = 0, this._spritesDuration = 0, this._activeParticles = 0, this._renderDuration = 0, this._renderTargetsDuration = 0, this._evaluateActiveMeshesDuration = 0, this._totalVertices = 0, this._activeVertices = 0, this._activeBones = 0, this.getEngine().resetDrawCalls(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), a.Tools.StartPerformanceCounter("Scene rendering"), this.actionManager && this.actionManager.processTrigger(a.ActionManager.OnEveryFrameTrigger, null), this.beforeRender && this.beforeRender();
            for (var d = 0; d < this._onBeforeRenderCallbacks.length; d++) this._onBeforeRenderCallbacks[d]();
            var e = Math.max(b.MinDeltaTime, Math.min(this._engine.getDeltaTime(), b.MaxDeltaTime));
            this._animationRatio = .06 * e, this._animate(), this._physicsEngine && (a.Tools.StartPerformanceCounter("Physics"), this._physicsEngine._runOneStep(e / 1e3), a.Tools.EndPerformanceCounter("Physics"));
            var f = a.Tools.Now,
                g = this.getEngine(),
                h = this.activeCamera;
            if (this.renderTargetsEnabled) {
                a.Tools.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
                for (var i = 0; i < this.customRenderTargets.length; i++) {
                    var j = this.customRenderTargets[i];
                    if (j._shouldRender()) {
                        if (this._renderId++, this.activeCamera = j.activeCamera || this.activeCamera, !this.activeCamera) throw new Error("Active camera not set");
                        g.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), j.render()
                    }
                }
                a.Tools.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
            }
            if (this.customRenderTargets.length > 0 && g.restoreDefaultFramebuffer(), this._renderTargetsDuration += a.Tools.Now - f, this.activeCamera = h, this.proceduralTexturesEnabled) {
                a.Tools.StartPerformanceCounter("Procedural textures", this._proceduralTextures.length > 0);
                for (var k = 0; k < this._proceduralTextures.length; k++) {
                    var l = this._proceduralTextures[k];
                    l._shouldRender() && l.render()
                }
                a.Tools.EndPerformanceCounter("Procedural textures", this._proceduralTextures.length > 0)
            }
            if (this._engine.clear(this.clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, !0), this.shadowsEnabled)
                for (var m = 0; m < this.lights.length; m++) {
                    var n = this.lights[m],
                        o = n.getShadowGenerator();
                    n.isEnabled() && o && -1 !== o.getShadowMap().getScene().textures.indexOf(o.getShadowMap()) && this._renderTargets.push(o.getShadowMap())
                }
            if (this._depthRenderer && this._renderTargets.push(this._depthRenderer.getDepthMap()), this.postProcessRenderPipelineManager.update(), this.activeCameras.length > 0)
                for (var p = this._renderId, q = 0; q < this.activeCameras.length; q++) this._renderId = p, this._processSubCameras(this.activeCameras[q]);
            else {
                if (!this.activeCamera) throw new Error("No camera defined");
                this._processSubCameras(this.activeCamera)
            }
            for (this._checkIntersections(), this._updateAudioParameters(), this.afterRender && this.afterRender(), d = 0; d < this._onAfterRenderCallbacks.length; d++) this._onAfterRenderCallbacks[d]();
            for (var r = 0; r < this._toBeDisposed.length; r++) this._toBeDisposed.data[r].dispose(), this._toBeDisposed[r] = null;
            this._toBeDisposed.reset(), a.Tools.EndPerformanceCounter("Scene rendering"), this._lastFrameDuration = a.Tools.Now - c
        }, b.prototype._updateAudioParameters = function() {
            var b, c = a.Engine.audioEngine;
            if (b = this.activeCameras.length > 0 ? this.activeCameras[0] : this.activeCamera, b && c.canUseWebAudio) {
                c.audioContext.listener.setPosition(b.position.x, b.position.y, b.position.z);
                var d = a.Matrix.Invert(b.getViewMatrix()),
                    e = a.Vector3.TransformNormal(new a.Vector3(0, 0, -1), d);
                e.normalize(), c.audioContext.listener.setOrientation(e.x, e.y, e.z, 0, 1, 0);
                for (var f = 0; f < this.mainSoundTrack.soundCollection.length; f++) {
                    var g = this.mainSoundTrack.soundCollection[f];
                    g.useCustomAttenuation && g.updateDistanceFromListener()
                }
                for (f = 0; f < this.soundTracks.length; f++)
                    for (var h = 0; h < this.soundTracks[f].soundCollection.length; h++) g = this.soundTracks[f].soundCollection[h], g.useCustomAttenuation && g.updateDistanceFromListener()
            }
        }, b.prototype.enableDepthRenderer = function() {
            return this._depthRenderer ? this._depthRenderer : (this._depthRenderer = new a.DepthRenderer(this), this._depthRenderer)
        }, b.prototype.disableDepthRenderer = function() {
            this._depthRenderer && (this._depthRenderer.dispose(), this._depthRenderer = null)
        }, b.prototype.dispose = function() {
            this.beforeRender = null, this.afterRender = null, this.skeletons = [], this._boundingBoxRenderer.dispose(), this._depthRenderer && this._depthRenderer.dispose(), this.debugLayer.hide(), this.onDispose && this.onDispose(), this._onBeforeRenderCallbacks = [], this._onAfterRenderCallbacks = [], this.detachControl(), this.mainSoundTrack.dispose();
            for (var a = 0; a < this.soundTracks.length; a++) this.soundTracks[a].dispose();
            var b, c = this._engine.getRenderingCanvas();
            for (b = 0; b < this.cameras.length; b++) this.cameras[b].detachControl(c);
            for (; this.lights.length;) this.lights[0].dispose();
            for (; this.meshes.length;) this.meshes[0].dispose(!0);
            for (; this.cameras.length;) this.cameras[0].dispose();
            for (; this.materials.length;) this.materials[0].dispose();
            for (; this.particleSystems.length;) this.particleSystems[0].dispose();
            for (; this.spriteManagers.length;) this.spriteManagers[0].dispose();
            for (; this.layers.length;) this.layers[0].dispose();
            for (; this.textures.length;) this.textures[0].dispose();
            this.postProcessManager.dispose(), this._physicsEngine && this.disablePhysicsEngine(), b = this._engine.scenes.indexOf(this), b > -1 && this._engine.scenes.splice(b, 1), this._engine.wipeCaches()
        }, b.prototype._getNewPosition = function(a, b, c, d, e, f) {
            void 0 === f && (f = null), a.divideToRef(c.radius, this._scaledPosition), b.divideToRef(c.radius, this._scaledVelocity), c.retry = 0, c.initialVelocity = this._scaledVelocity, c.initialPosition = this._scaledPosition, this._collideWithWorld(this._scaledPosition, this._scaledVelocity, c, d, e, f), e.multiplyInPlace(c.radius)
        }, b.prototype._collideWithWorld = function(b, c, d, e, f, g) {
            void 0 === g && (g = null);
            var h = 10 * a.Engine.CollisionsEpsilon;
            if (d.retry >= e) return void f.copyFrom(b);
            d._initialize(b, c, h);
            for (var i = 0; i < this.meshes.length; i++) {
                var j = this.meshes[i];
                j.isEnabled() && j.checkCollisions && j.subMeshes && j !== g && j._checkCollision(d)
            }
            return d.collisionFound ? ((0 !== c.x || 0 !== c.y || 0 !== c.z) && d._getResponse(b, c), c.length() <= h ? void f.copyFrom(b) : (d.retry++, void this._collideWithWorld(b, c, d, e, f, g))) : void b.addToRef(c, f)
        }, b.prototype.getWorldExtends = function() {
            for (var b = new a.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), c = new a.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), d = 0; d < this.meshes.length; d++) {
                var e = this.meshes[d];
                e.computeWorldMatrix(!0);
                var f = e.getBoundingInfo().boundingBox.minimumWorld,
                    g = e.getBoundingInfo().boundingBox.maximumWorld;
                a.Tools.CheckExtends(f, b, c), a.Tools.CheckExtends(g, b, c)
            }
            return {
                min: b,
                max: c
            }
        }, b.prototype.createOrUpdateSelectionOctree = function(b, c) {
            void 0 === b && (b = 64), void 0 === c && (c = 2), this._selectionOctree || (this._selectionOctree = new a.Octree(a.Octree.CreationFuncForMeshes, b, c));
            var d = this.getWorldExtends();
            return this._selectionOctree.update(d.min, d.max, this.meshes), this._selectionOctree
        }, b.prototype.createPickingRay = function(b, c, d, e) {
            var f = this._engine;
            if (!e) {
                if (!this.activeCamera) throw new Error("Active camera not set");
                e = this.activeCamera
            }
            var g = e.viewport,
                h = g.toGlobal(f);
            return b = b / this._engine.getHardwareScalingLevel() - h.x, c = c / this._engine.getHardwareScalingLevel() - (this._engine.getRenderHeight() - h.y - h.height), a.Ray.CreateNew(b, c, h.width, h.height, d ? d : a.Matrix.Identity(), e.getViewMatrix(), e.getProjectionMatrix())
        }, b.prototype._internalPick = function(b, c, d) {
            for (var e = null, f = 0; f < this.meshes.length; f++) {
                var g = this.meshes[f];
                if (c) {
                    if (!c(g)) continue
                } else if (!g.isEnabled() || !g.isVisible || !g.isPickable) continue;
                var h = g.getWorldMatrix(),
                    i = b(h),
                    j = g.intersects(i, d);
                if (j && j.hit && (d || null == e || !(j.distance >= e.distance)) && (e = j, d)) break
            }
            return e || new a.PickingInfo
        }, b.prototype.pick = function(a, b, c, d, e) {
            var f = this;
            return this._internalPick(function(c) {
                return f.createPickingRay(a, b, c, e)
            }, c, d)
        }, b.prototype.pickWithRay = function(b, c, d) {
            var e = this;
            return this._internalPick(function(c) {
                return e._pickWithRayInverseMatrix || (e._pickWithRayInverseMatrix = a.Matrix.Identity()), c.invertToRef(e._pickWithRayInverseMatrix), a.Ray.Transform(b, e._pickWithRayInverseMatrix)
            }, c, d)
        }, b.prototype.setPointerOverMesh = function(b) {
            this._pointerOverMesh !== b && (this._pointerOverMesh && this._pointerOverMesh.actionManager && this._pointerOverMesh.actionManager.processTrigger(a.ActionManager.OnPointerOutTrigger, a.ActionEvent.CreateNew(this._pointerOverMesh)), this._pointerOverMesh = b, this._pointerOverMesh && this._pointerOverMesh.actionManager && this._pointerOverMesh.actionManager.processTrigger(a.ActionManager.OnPointerOverTrigger, a.ActionEvent.CreateNew(this._pointerOverMesh)))
        }, b.prototype.getPointerOverMesh = function() {
            return this._pointerOverMesh
        }, b.prototype.getPhysicsEngine = function() {
            return this._physicsEngine
        }, b.prototype.enablePhysics = function(b, c) {
            return this._physicsEngine ? !0 : (this._physicsEngine = new a.PhysicsEngine(c), this._physicsEngine.isSupported() ? (this._physicsEngine._initialize(b), !0) : (this._physicsEngine = null, !1))
        }, b.prototype.disablePhysicsEngine = function() {
            this._physicsEngine && (this._physicsEngine.dispose(), this._physicsEngine = void 0)
        }, b.prototype.isPhysicsEnabled = function() {
            return void 0 !== this._physicsEngine
        }, b.prototype.setGravity = function(a) {
            this._physicsEngine && this._physicsEngine._setGravity(a)
        }, b.prototype.createCompoundImpostor = function(a, b) {
            if (a.parts && (b = a, a = a.parts), !this._physicsEngine) return null;
            for (var c = 0; c < a.length; c++) {
                var d = a[c].mesh;
                d._physicImpostor = a[c].impostor, d._physicsMass = b.mass / a.length, d._physicsFriction = b.friction, d._physicRestitution = b.restitution
            }
            return this._physicsEngine._registerMeshesAsCompound(a, b)
        }, b.prototype.deleteCompoundImpostor = function(b) {
            for (var c = 0; c < b.parts.length; c++) {
                var d = b.parts[c].mesh;
                d._physicImpostor = a.PhysicsEngine.NoImpostor, this._physicsEngine._unregisterMesh(d)
            }
        }, b.prototype.createDefaultCameraOrLight = function() {
            if (0 === this.lights.length && new a.HemisphericLight("default light", a.Vector3.Up(), this), !this.activeCamera) {
                var b = new a.FreeCamera("default camera", a.Vector3.Zero(), this),
                    c = this.getWorldExtends(),
                    d = c.min.add(c.max.subtract(c.min).scale(.5));
                b.position = new a.Vector3(d.x, d.y, c.min.z - (c.max.z - c.min.z)), b.setTarget(d), this.activeCamera = b
            }
        }, b.prototype._getByTags = function(b, c, d) {
            if (void 0 === c) return b;
            var e = [];
            d = d || function() {};
            for (var f in b) {
                var g = b[f];
                a.Tags.MatchesQuery(g, c) && (e.push(g), d(g))
            }
            return e
        }, b.prototype.getMeshesByTags = function(a, b) {
            return this._getByTags(this.meshes, a, b)
        }, b.prototype.getCamerasByTags = function(a, b) {
            return this._getByTags(this.cameras, a, b)
        }, b.prototype.getLightsByTags = function(a, b) {
            return this._getByTags(this.lights, a, b)
        }, b.prototype.getMaterialByTags = function(a, b) {
            return this._getByTags(this.materials, a, b).concat(this._getByTags(this.multiMaterials, a, b))
        }, b._FOGMODE_NONE = 0, b._FOGMODE_EXP = 1, b._FOGMODE_EXP2 = 2, b._FOGMODE_LINEAR = 3, b.MinDeltaTime = 1, b.MaxDeltaTime = 1e3, b
    }();
    a.Scene = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(c, d, e, f, g, h) {
            if (this._engine = c instanceof a.Mesh ? c.getScene().getEngine() : c, this._updatable = f, this._data = d, g || this.create(), this._kind = e, h) return void(this._strideSize = h);
            switch (e) {
                case b.PositionKind:
                    this._strideSize = 3;
                    break;
                case b.NormalKind:
                    this._strideSize = 3;
                    break;
                case b.UVKind:
                    this._strideSize = 2;
                    break;
                case b.UV2Kind:
                    this._strideSize = 2;
                    break;
                case b.ColorKind:
                    this._strideSize = 4;
                    break;
                case b.MatricesIndicesKind:
                    this._strideSize = 4;
                    break;
                case b.MatricesWeightsKind:
                    this._strideSize = 4
            }
        }
        return b.prototype.isUpdatable = function() {
            return this._updatable
        }, b.prototype.getData = function() {
            return this._data
        }, b.prototype.getBuffer = function() {
            return this._buffer
        }, b.prototype.getStrideSize = function() {
            return this._strideSize
        }, b.prototype.create = function(a) {
            (a || !this._buffer) && (a = a || this._data, this._buffer || (this._buffer = this._updatable ? this._engine.createDynamicVertexBuffer(4 * a.length) : this._engine.createVertexBuffer(a)), this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, a), this._data = a))
        }, b.prototype.update = function(a) {
            this.create(a)
        }, b.prototype.updateDirectly = function(a, b) {
            this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, a, b), this._data = null)
        }, b.prototype.dispose = function() {
            this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
        }, Object.defineProperty(b, "PositionKind", {
            get: function() {
                return b._PositionKind
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "NormalKind", {
            get: function() {
                return b._NormalKind
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "UVKind", {
            get: function() {
                return b._UVKind
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "UV2Kind", {
            get: function() {
                return b._UV2Kind
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ColorKind", {
            get: function() {
                return b._ColorKind
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "MatricesIndicesKind", {
            get: function() {
                return b._MatricesIndicesKind
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "MatricesWeightsKind", {
            get: function() {
                return b._MatricesWeightsKind
            },
            enumerable: !0,
            configurable: !0
        }), b._PositionKind = "position", b._NormalKind = "normal", b._UVKind = "uv", b._UV2Kind = "uv2", b._ColorKind = "color", b._MatricesIndicesKind = "matricesIndices", b._MatricesWeightsKind = "matricesWeights", b
    }();
    a.VertexBuffer = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(d, e) {
            b.call(this, d, e), this.definedFacingForward = !0, this.position = new a.Vector3(0, 0, 0), this.rotation = new a.Vector3(0, 0, 0), this.scaling = new a.Vector3(1, 1, 1), this.billboardMode = c.BILLBOARDMODE_NONE, this.visibility = 1, this.alphaIndex = Number.MAX_VALUE, this.infiniteDistance = !1, this.isVisible = !0, this.isPickable = !0, this.showBoundingBox = !1, this.showSubMeshesBoundingBox = !1, this.onDispose = null, this.checkCollisions = !1, this.isBlocker = !1, this.renderingGroupId = 0, this.receiveShadows = !1, this.renderOutline = !1, this.outlineColor = a.Color3.Red(), this.outlineWidth = .02, this.renderOverlay = !1, this.overlayColor = a.Color3.Red(), this.overlayAlpha = .5, this.hasVertexAlpha = !1, this.useVertexColors = !0, this.applyFog = !0, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.layerMask = 4294967295, this._physicImpostor = a.PhysicsEngine.NoImpostor, this.ellipsoid = new a.Vector3(.5, 1, .5), this.ellipsoidOffset = new a.Vector3(0, 0, 0), this._collider = new a.Collider, this._oldPositionForCollisions = new a.Vector3(0, 0, 0), this._diffPositionForCollisions = new a.Vector3(0, 0, 0), this._newPositionForCollisions = new a.Vector3(0, 0, 0), this._localScaling = a.Matrix.Zero(), this._localRotation = a.Matrix.Zero(), this._localTranslation = a.Matrix.Zero(), this._localBillboard = a.Matrix.Zero(), this._localPivotScaling = a.Matrix.Zero(), this._localPivotScalingRotation = a.Matrix.Zero(), this._localWorld = a.Matrix.Zero(), this._worldMatrix = a.Matrix.Zero(), this._rotateYByPI = a.Matrix.RotationY(Math.PI), this._absolutePosition = a.Vector3.Zero(), this._collisionsTransformMatrix = a.Matrix.Zero(), this._collisionsScalingMatrix = a.Matrix.Zero(), this._isDirty = !1, this._pivotMatrix = a.Matrix.Identity(), this._isDisposed = !1, this._renderId = 0, this._intersectionsInProgress = new Array, this._onAfterWorldMatrixUpdate = new Array, e.meshes.push(this)
        }
        return __extends(c, b), Object.defineProperty(c, "BILLBOARDMODE_NONE", {
            get: function() {
                return c._BILLBOARDMODE_NONE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "BILLBOARDMODE_X", {
            get: function() {
                return c._BILLBOARDMODE_X
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "BILLBOARDMODE_Y", {
            get: function() {
                return c._BILLBOARDMODE_Y
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "BILLBOARDMODE_Z", {
            get: function() {
                return c._BILLBOARDMODE_Z
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "BILLBOARDMODE_ALL", {
            get: function() {
                return c._BILLBOARDMODE_ALL
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "isBlocked", {
            get: function() {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.getLOD = function() {
            return this
        }, c.prototype.getTotalVertices = function() {
            return 0
        }, c.prototype.getIndices = function() {
            return null
        }, c.prototype.getVerticesData = function() {
            return null
        }, c.prototype.isVerticesDataPresent = function() {
            return !1
        }, c.prototype.getBoundingInfo = function() {
            return this._masterMesh ? this._masterMesh.getBoundingInfo() : (this._boundingInfo || this._updateBoundingInfo(), this._boundingInfo)
        }, Object.defineProperty(c.prototype, "useBones", {
            get: function() {
                return this.skeleton && this.getScene().skeletonsEnabled && this.isVerticesDataPresent(a.VertexBuffer.MatricesIndicesKind) && this.isVerticesDataPresent(a.VertexBuffer.MatricesWeightsKind)
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype._preActivate = function() {}, c.prototype._activate = function(a) {
            this._renderId = a
        }, c.prototype.getWorldMatrix = function() {
            return this._masterMesh ? this._masterMesh.getWorldMatrix() : (this._currentRenderId !== this.getScene().getRenderId() && this.computeWorldMatrix(), this._worldMatrix)
        }, Object.defineProperty(c.prototype, "worldMatrixFromCache", {
            get: function() {
                return this._worldMatrix
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "absolutePosition", {
            get: function() {
                return this._absolutePosition
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.rotate = function(b, c, d) {
            if (this.rotationQuaternion || (this.rotationQuaternion = a.Quaternion.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation = a.Vector3.Zero()), d && 0 != d) {
                if (this.parent) {
                    var e = this.parent.getWorldMatrix().clone();
                    e.invert(), b = a.Vector3.TransformNormal(b, e)
                }
                f = a.Quaternion.RotationAxis(b, c), this.rotationQuaternion = f.multiply(this.rotationQuaternion)
            } else {
                var f = a.Quaternion.RotationAxis(b, c);
                this.rotationQuaternion = this.rotationQuaternion.multiply(f)
            }
        }, c.prototype.translate = function(a, b, c) {
            var d = a.scale(b);
            if (c && 0 != c) this.setAbsolutePosition(this.getAbsolutePosition().add(d));
            else {
                var e = this.getPositionExpressedInLocalSpace().add(d);
                this.setPositionWithLocalVector(e)
            }
        }, c.prototype.getAbsolutePosition = function() {
            return this.computeWorldMatrix(), this._absolutePosition
        }, c.prototype.setAbsolutePosition = function(b) {
            if (b) {
                var c, d, e;
                if (void 0 === b.x) {
                    if (arguments.length < 3) return;
                    c = arguments[0], d = arguments[1], e = arguments[2]
                } else c = b.x, d = b.y, e = b.z;
                if (this.parent) {
                    var f = this.parent.getWorldMatrix().clone();
                    f.invert();
                    var g = new a.Vector3(c, d, e);
                    this.position = a.Vector3.TransformCoordinates(g, f)
                } else this.position.x = c, this.position.y = d, this.position.z = e
            }
        }, c.prototype.movePOV = function(a, b, c) {
            this.position.addInPlace(this.calcMovePOV(a, b, c))
        }, c.prototype.calcMovePOV = function(b, c, d) {
            var e = new a.Matrix,
                f = this.rotationQuaternion ? this.rotationQuaternion : a.Quaternion.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z);
            f.toRotationMatrix(e);
            var g = a.Vector3.Zero(),
                h = this.definedFacingForward ? -1 : 1;
            return a.Vector3.TransformCoordinatesFromFloatsToRef(b * h, c, d * h, e, g), g
        }, c.prototype.rotatePOV = function(a, b, c) {
            this.rotation.addInPlace(this.calcRotatePOV(a, b, c))
        }, c.prototype.calcRotatePOV = function(b, c, d) {
            var e = this.definedFacingForward ? 1 : -1;
            return new a.Vector3(b * e, c, d * e)
        }, c.prototype.setPivotMatrix = function(a) {
            this._pivotMatrix = a, this._cache.pivotMatrixUpdated = !0
        }, c.prototype.getPivotMatrix = function() {
            return this._pivotMatrix
        }, c.prototype._isSynchronized = function() {
            if (this._isDirty) return !1;
            if (this.billboardMode !== c.BILLBOARDMODE_NONE) return !1;
            if (this._cache.pivotMatrixUpdated) return !1;
            if (this.infiniteDistance) return !1;
            if (!this._cache.position.equals(this.position)) return !1;
            if (this.rotationQuaternion) {
                if (!this._cache.rotationQuaternion.equals(this.rotationQuaternion)) return !1
            } else if (!this._cache.rotation.equals(this.rotation)) return !1;
            return this._cache.scaling.equals(this.scaling) ? !0 : !1
        }, c.prototype._initCache = function() {
            b.prototype._initCache.call(this), this._cache.localMatrixUpdated = !1, this._cache.position = a.Vector3.Zero(), this._cache.scaling = a.Vector3.Zero(), this._cache.rotation = a.Vector3.Zero(), this._cache.rotationQuaternion = new a.Quaternion(0, 0, 0, 0)
        }, c.prototype.markAsDirty = function(a) {
            "rotation" === a && (this.rotationQuaternion = null), this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0
        }, c.prototype._updateBoundingInfo = function() {
            this._boundingInfo = this._boundingInfo || new a.BoundingInfo(this.absolutePosition, this.absolutePosition), this._boundingInfo._update(this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
        }, c.prototype._updateSubMeshesBoundingInfo = function(a) {
            if (this.subMeshes)
                for (var b = 0; b < this.subMeshes.length; b++) {
                    var c = this.subMeshes[b];
                    c.updateBoundingInfo(a)
                }
        }, c.prototype.computeWorldMatrix = function(b) {
            if (!b && (this._currentRenderId == this.getScene().getRenderId() || this.isSynchronized(!0))) return this._worldMatrix;
            if (this._cache.position.copyFrom(this.position), this._cache.scaling.copyFrom(this.scaling), this._cache.pivotMatrixUpdated = !1, this._currentRenderId = this.getScene().getRenderId(), this._isDirty = !1, a.Matrix.ScalingToRef(this.scaling.x, this.scaling.y, this.scaling.z, this._localScaling), this.rotationQuaternion ? (this.rotationQuaternion.toRotationMatrix(this._localRotation), this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion)) : (a.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._localRotation), this._cache.rotation.copyFrom(this.rotation)), this.infiniteDistance && !this.parent) {
                var d = this.getScene().activeCamera,
                    e = d.getWorldMatrix(),
                    f = new a.Vector3(e.m[12], e.m[13], e.m[14]);
                a.Matrix.TranslationToRef(this.position.x + f.x, this.position.y + f.y, this.position.z + f.z, this._localTranslation)
            } else a.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._localTranslation);
            if (this._pivotMatrix.multiplyToRef(this._localScaling, this._localPivotScaling), this._localPivotScaling.multiplyToRef(this._localRotation, this._localPivotScalingRotation), this.billboardMode !== c.BILLBOARDMODE_NONE && this.getScene().activeCamera) {
                var g = this.position.clone(),
                    h = this.getScene().activeCamera.position.clone();
                this.parent && this.parent.position && (g.addInPlace(this.parent.position), a.Matrix.TranslationToRef(g.x, g.y, g.z, this._localTranslation)), (this.billboardMode & c.BILLBOARDMODE_ALL) === c.BILLBOARDMODE_ALL ? h = this.getScene().activeCamera.position : (this.billboardMode & a.AbstractMesh.BILLBOARDMODE_X && (h.x = g.x + a.Engine.Epsilon), this.billboardMode & a.AbstractMesh.BILLBOARDMODE_Y && (h.y = g.y + .001), this.billboardMode & a.AbstractMesh.BILLBOARDMODE_Z && (h.z = g.z + .001)), a.Matrix.LookAtLHToRef(g, h, a.Vector3.Up(), this._localBillboard), this._localBillboard.m[12] = this._localBillboard.m[13] = this._localBillboard.m[14] = 0, this._localBillboard.invert(), this._localPivotScalingRotation.multiplyToRef(this._localBillboard, this._localWorld), this._rotateYByPI.multiplyToRef(this._localWorld, this._localPivotScalingRotation)
            }
            this._localPivotScalingRotation.multiplyToRef(this._localTranslation, this._localWorld), this.parent && this.parent.getWorldMatrix && this.billboardMode === a.AbstractMesh.BILLBOARDMODE_NONE ? this._localWorld.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix) : this._worldMatrix.copyFrom(this._localWorld), this._updateBoundingInfo(), this._absolutePosition.copyFromFloats(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]);
            for (var i = 0; i < this._onAfterWorldMatrixUpdate.length; i++) this._onAfterWorldMatrixUpdate[i](this);
            return this._worldMatrix
        }, c.prototype.registerAfterWorldMatrixUpdate = function(a) {
            this._onAfterWorldMatrixUpdate.push(a)
        }, c.prototype.unregisterAfterWorldMatrixUpdate = function(a) {
            var b = this._onAfterWorldMatrixUpdate.indexOf(a);
            b > -1 && this._onAfterWorldMatrixUpdate.splice(b, 1)
        }, c.prototype.setPositionWithLocalVector = function(b) {
            this.computeWorldMatrix(), this.position = a.Vector3.TransformNormal(b, this._localWorld)
        }, c.prototype.getPositionExpressedInLocalSpace = function() {
            this.computeWorldMatrix();
            var b = this._localWorld.clone();
            return b.invert(), a.Vector3.TransformNormal(this.position, b)
        }, c.prototype.locallyTranslate = function(b) {
            this.computeWorldMatrix(), this.position = a.Vector3.TransformCoordinates(b, this._localWorld)
        }, c.prototype.lookAt = function(b, c, d, e) {
            c = c || 0, d = d || 0, e = e || 0;
            var f = b.subtract(this.position),
                g = -Math.atan2(f.z, f.x) - Math.PI / 2,
                h = Math.sqrt(f.x * f.x + f.z * f.z),
                i = Math.atan2(f.y, h);
            this.rotationQuaternion = a.Quaternion.RotationYawPitchRoll(g + c, i + d, e)
        }, c.prototype.isInFrustum = function(a) {
            return this._boundingInfo.isInFrustum(a) ? !0 : !1
        }, c.prototype.isCompletelyInFrustum = function(b) {
            b || (b = this.getScene().activeCamera);
            var c = b.getViewMatrix().multiply(b.getProjectionMatrix());
            return this._boundingInfo.isCompletelyInFrustum(a.Frustum.GetPlanes(c)) ? !0 : !1
        }, c.prototype.intersectsMesh = function(a, b) {
            return this._boundingInfo && a._boundingInfo ? this._boundingInfo.intersects(a._boundingInfo, b) : !1
        }, c.prototype.intersectsPoint = function(a) {
            return this._boundingInfo ? this._boundingInfo.intersectsPoint(a) : !1
        }, c.prototype.setPhysicsState = function(b, c) {
            var d = this.getScene().getPhysicsEngine();
            if (d) return b = b || a.PhysicsEngine.NoImpostor, b.impostor && (c = b, b = b.impostor), b === a.PhysicsEngine.NoImpostor ? void d._unregisterMesh(this) : (c ? (c.mass = c.mass || 0, c.friction = c.friction || .2, c.restitution = c.restitution || .2) : c = {
                mass: 0,
                friction: .2,
                restitution: .2
            }, this._physicImpostor = b, this._physicsMass = c.mass, this._physicsFriction = c.friction, this._physicRestitution = c.restitution, d._registerMesh(this, b, c))
        }, c.prototype.getPhysicsImpostor = function() {
            return this._physicImpostor ? this._physicImpostor : a.PhysicsEngine.NoImpostor
        }, c.prototype.getPhysicsMass = function() {
            return this._physicsMass ? this._physicsMass : 0
        }, c.prototype.getPhysicsFriction = function() {
            return this._physicsFriction ? this._physicsFriction : 0
        }, c.prototype.getPhysicsRestitution = function() {
            return this._physicRestitution ? this._physicRestitution : 0
        }, c.prototype.getPositionInCameraSpace = function(b) {
            return b || (b = this.getScene().activeCamera), a.Vector3.TransformCoordinates(this.absolutePosition, b.getViewMatrix())
        }, c.prototype.getDistanceToCamera = function(a) {
            return a || (a = this.getScene().activeCamera), this.absolutePosition.subtract(a.position).length()
        }, c.prototype.applyImpulse = function(a, b) {
            this._physicImpostor && this.getScene().getPhysicsEngine()._applyImpulse(this, a, b)
        }, c.prototype.setPhysicsLinkWith = function(a, b, c, d) {
            this._physicImpostor && this.getScene().getPhysicsEngine()._createLink(this, a, b, c, d)
        }, c.prototype.updatePhysicsBodyPosition = function() {
            this._physicImpostor && this.getScene().getPhysicsEngine()._updateBodyPosition(this)
        }, c.prototype.moveWithCollisions = function(b) {
            var c = this.getAbsolutePosition();
            c.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPositionForCollisions), this._oldPositionForCollisions.addInPlace(this.ellipsoidOffset), this._collider.radius = this.ellipsoid, this.getScene()._getNewPosition(this._oldPositionForCollisions, b, this._collider, 3, this._newPositionForCollisions, this), this._newPositionForCollisions.subtractToRef(this._oldPositionForCollisions, this._diffPositionForCollisions), this._diffPositionForCollisions.length() > a.Engine.CollisionsEpsilon && this.position.addInPlace(this._diffPositionForCollisions)
        }, c.prototype.createOrUpdateSubmeshesOctree = function(b, c) {
            void 0 === b && (b = 64), void 0 === c && (c = 2), this._submeshesOctree || (this._submeshesOctree = new a.Octree(a.Octree.CreationFuncForSubMeshes, b, c)), this.computeWorldMatrix(!0);
            var d = this.getBoundingInfo().boundingBox;
            return this._submeshesOctree.update(d.minimumWorld, d.maximumWorld, this.subMeshes), this._submeshesOctree
        }, c.prototype._collideForSubMesh = function(b, c, d) {
            if (this._generatePointsArray(), !b._lastColliderWorldVertices || !b._lastColliderTransformMatrix.equals(c)) {
                b._lastColliderTransformMatrix = c.clone(), b._lastColliderWorldVertices = [], b._trianglePlanes = [];
                for (var e = b.verticesStart, f = b.verticesStart + b.verticesCount, g = e; f > g; g++) b._lastColliderWorldVertices.push(a.Vector3.TransformCoordinates(this._positions[g], c))
            }
            d._collide(b, b._lastColliderWorldVertices, this.getIndices(), b.indexStart, b.indexStart + b.indexCount, b.verticesStart)
        }, c.prototype._processCollisionsForSubMeshes = function(a, b) {
            var c, d;
            if (this._submeshesOctree && this.useOctreeForCollisions) {
                var e = a.velocityWorldLength + Math.max(a.radius.x, a.radius.y, a.radius.z),
                    f = this._submeshesOctree.intersects(a.basePointWorld, e);
                d = f.length, c = f.data
            } else c = this.subMeshes, d = c.length;
            for (var g = 0; d > g; g++) {
                var h = c[g];
                d > 1 && !h._checkCollision(a) || this._collideForSubMesh(h, b, a)
            }
        }, c.prototype._checkCollision = function(b) {
            this._boundingInfo._checkCollision(b) && (a.Matrix.ScalingToRef(1 / b.radius.x, 1 / b.radius.y, 1 / b.radius.z, this._collisionsScalingMatrix), this.worldMatrixFromCache.multiplyToRef(this._collisionsScalingMatrix, this._collisionsTransformMatrix), this._processCollisionsForSubMeshes(b, this._collisionsTransformMatrix))
        }, c.prototype._generatePointsArray = function() {
            return !1
        }, c.prototype.intersects = function(b, c) {
            var d = new a.PickingInfo;
            if (!(this.subMeshes && this._boundingInfo && b.intersectsSphere(this._boundingInfo.boundingSphere) && b.intersectsBox(this._boundingInfo.boundingBox))) return d;
            if (!this._generatePointsArray()) return d;
            var e, f, g = null;
            if (this._submeshesOctree && this.useOctreeForPicking) {
                var h = a.Ray.Transform(b, this.getWorldMatrix()),
                    i = this._submeshesOctree.intersectsRay(h);
                f = i.length, e = i.data
            } else e = this.subMeshes, f = e.length;
            for (var j = 0; f > j; j++) {
                var k = e[j];
                if (!(f > 1) || k.canIntersects(b)) {
                    var l = k.intersects(b, this._positions, this.getIndices(), c);
                    if (l && (c || !g || l.distance < g.distance) && (g = l, c)) break
                }
            }
            if (g) {
                var m = this.getWorldMatrix(),
                    n = a.Vector3.TransformCoordinates(b.origin, m),
                    o = b.direction.clone();
                o = o.scale(g.distance);
                var p = a.Vector3.TransformNormal(o, m),
                    q = n.add(p);
                return d.hit = !0, d.distance = a.Vector3.Distance(n, q), d.pickedPoint = q, d.pickedMesh = this, d.bu = g.bu, d.bv = g.bv, d.faceId = g.faceId, d
            }
            return d
        }, c.prototype.clone = function() {
            return null
        }, c.prototype.releaseSubMeshes = function() {
            if (this.subMeshes)
                for (; this.subMeshes.length;) this.subMeshes[0].dispose();
            else this.subMeshes = new Array
        }, c.prototype.dispose = function(b) {
            for (this.getPhysicsImpostor() != a.PhysicsEngine.NoImpostor && this.setPhysicsState(a.PhysicsEngine.NoImpostor), e = 0; e < this._intersectionsInProgress.length; e++) {
                var c = this._intersectionsInProgress[e],
                    d = c._intersectionsInProgress.indexOf(this);
                c._intersectionsInProgress.splice(d, 1)
            }
            this._intersectionsInProgress = [], this.releaseSubMeshes();
            var e = this.getScene().meshes.indexOf(this);
            if (-1 != e && this.getScene().meshes.splice(e, 1), b)
                for (e = 0; e < this.getScene().meshes.length; e++) {
                    var f = this.getScene().meshes[e];
                    f.parent === this && (f.parent = null, f.computeWorldMatrix(!0))
                } else {
                    for (e = 0; e < this.getScene().particleSystems.length; e++) this.getScene().particleSystems[e].emitter == this && (this.getScene().particleSystems[e].dispose(), e--);
                    var g = this.getScene().meshes.slice(0);
                    for (e = 0; e < g.length; e++) g[e].parent == this && g[e].dispose()
                }
            this._onAfterWorldMatrixUpdate = [], this._isDisposed = !0, this.onDispose && this.onDispose()
        }, c._BILLBOARDMODE_NONE = 0, c._BILLBOARDMODE_X = 1, c._BILLBOARDMODE_Y = 2, c._BILLBOARDMODE_Z = 4, c._BILLBOARDMODE_ALL = 7, c
    }(a.Node);
    a.AbstractMesh = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function() {
        function a() {
            this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = new Array
        }
        return a
    }();
    a._InstancesBatch = b;
    var c = function(c) {
        function d(d, e, f, g, h) {
            if (void 0 === f && (f = null), c.call(this, d, e), this.delayLoadState = a.Engine.DELAYLOADSTATE_NONE, this.instances = new Array, this._LODLevels = new Array, this._onBeforeRenderCallbacks = new Array, this._onAfterRenderCallbacks = new Array, this._visibleInstances = {}, this._renderIdForInstances = new Array, this._batchCache = new b, this._instancesBufferSize = 2048, g) {
                if (g._geometry && g._geometry.applyToMesh(this), a.Tools.DeepCopy(g, this, ["name", "material", "skeleton"], []), this.material = g.material, !h)
                    for (var i = 0; i < e.meshes.length; i++) {
                        var j = e.meshes[i];
                        if (j.parent === g) {
                            j.clone(d + "." + j.name, this, h)
                        }
                    }
                for (i = 0; i < e.particleSystems.length; i++) {
                    var k = e.particleSystems[i];
                    k.emitter === g && k.clone(k.name, this)
                }
                this.computeWorldMatrix(!0)
            }
            null !== f && (this.parent = f)
        }
        return __extends(d, c), Object.defineProperty(d.prototype, "hasLODLevels", {
            get: function() {
                return this._LODLevels.length > 0
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype._sortLODLevels = function() {
            this._LODLevels.sort(function(a, b) {
                return a.distance < b.distance ? 1 : a.distance > b.distance ? -1 : 0
            })
        }, d.prototype.addLODLevel = function(b, c) {
            if (c && c._masterMesh) return a.Tools.Warn("You cannot use a mesh as LOD level twice"), this;
            var d = new a.Internals.MeshLODLevel(b, c);
            return this._LODLevels.push(d), c && (c._masterMesh = this), this._sortLODLevels(), this
        }, d.prototype.removeLODLevel = function(a) {
            for (var b = 0; b < this._LODLevels.length; b++) this._LODLevels[b].mesh === a && (this._LODLevels.splice(b, 1), a && (a._masterMesh = null));
            return this._sortLODLevels(), this
        }, d.prototype.getLOD = function(a, b) {
            if (!this._LODLevels || 0 === this._LODLevels.length) return this;
            var c = (b ? b : this.getBoundingInfo().boundingSphere).centerWorld.subtract(a.position).length();
            if (this._LODLevels[this._LODLevels.length - 1].distance > c) return this;
            for (var d = 0; d < this._LODLevels.length; d++) {
                var e = this._LODLevels[d];
                if (e.distance < c) return e.mesh && (e.mesh._preActivate(), e.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)), e.mesh
            }
            return this
        }, Object.defineProperty(d.prototype, "geometry", {
            get: function() {
                return this._geometry
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype.getTotalVertices = function() {
            return this._geometry ? this._geometry.getTotalVertices() : 0
        }, d.prototype.getVerticesData = function(a) {
            return this._geometry ? this._geometry.getVerticesData(a) : null
        }, d.prototype.getVertexBuffer = function(a) {
            return this._geometry ? this._geometry.getVertexBuffer(a) : void 0
        }, d.prototype.isVerticesDataPresent = function(a) {
            return this._geometry ? this._geometry.isVerticesDataPresent(a) : this._delayInfo ? -1 !== this._delayInfo.indexOf(a) : !1
        }, d.prototype.getVerticesDataKinds = function() {
            if (!this._geometry) {
                var a = [];
                if (this._delayInfo)
                    for (var b in this._delayInfo) a.push(b);
                return a
            }
            return this._geometry.getVerticesDataKinds()
        }, d.prototype.getTotalIndices = function() {
            return this._geometry ? this._geometry.getTotalIndices() : 0
        }, d.prototype.getIndices = function() {
            return this._geometry ? this._geometry.getIndices() : []
        }, Object.defineProperty(d.prototype, "isBlocked", {
            get: function() {
                return null !== this._masterMesh && void 0 !== this._masterMesh
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype.isReady = function() {
            return this.delayLoadState === a.Engine.DELAYLOADSTATE_LOADING ? !1 : c.prototype.isReady.call(this)
        }, d.prototype.isDisposed = function() {
            return this._isDisposed
        }, d.prototype._preActivate = function() {
            var a = this.getScene().getRenderId();
            this._preActivateId != a && (this._preActivateId = a, this._visibleInstances = null)
        }, d.prototype._registerInstanceForRenderId = function(a, b) {
            this._visibleInstances || (this._visibleInstances = {}, this._visibleInstances.defaultRenderId = b, this._visibleInstances.selfDefaultRenderId = this._renderId), this._visibleInstances[b] || (this._visibleInstances[b] = new Array), this._visibleInstances[b].push(a)
        }, d.prototype.refreshBoundingInfo = function() {
            var b = this.getVerticesData(a.VertexBuffer.PositionKind);
            if (b) {
                var c = a.Tools.ExtractMinAndMax(b, 0, this.getTotalVertices());
                this._boundingInfo = new a.BoundingInfo(c.minimum, c.maximum)
            }
            if (this.subMeshes)
                for (var d = 0; d < this.subMeshes.length; d++) this.subMeshes[d].refreshBoundingInfo();
            this._updateBoundingInfo()
        }, d.prototype._createGlobalSubMesh = function() {
            var b = this.getTotalVertices();
            return b && this.getIndices() ? (this.releaseSubMeshes(), new a.SubMesh(0, 0, b, 0, this.getTotalIndices(), this)) : null
        }, d.prototype.subdivide = function(b) {
            if (!(1 > b)) {
                for (var c = this.getTotalIndices(), d = c / b | 0, e = 0; d % 3 != 0;) d++;
                this.releaseSubMeshes();
                for (var f = 0; b > f && !(e >= c); f++) a.SubMesh.CreateFromIndices(0, e, Math.min(d, c - e), this), e += d;
                this.synchronizeInstances()
            }
        }, d.prototype.setVerticesData = function(b, c, d, e) {
            if (b instanceof Array) {
                var f = c;
                c = b, b = f, a.Tools.Warn("Deprecated usage of setVerticesData detected (since v1.12). Current signature is setVerticesData(kind, data, updatable).")
            }
            if (this._geometry) this._geometry.setVerticesData(b, c, d, e);
            else {
                var g = new a.VertexData;
                g.set(c, b);
                var h = this.getScene();
                new a.Geometry(a.Geometry.RandomId(), h, g, d, this)
            }
        }, d.prototype.updateVerticesData = function(a, b, c, d) {
            this._geometry && (d ? (this.makeGeometryUnique(), this.updateVerticesData(a, b, c, !1)) : this._geometry.updateVerticesData(a, b, c))
        }, d.prototype.updateVerticesDataDirectly = function(a, b, c, d) {
            this._geometry && (d ? (this.makeGeometryUnique(), this.updateVerticesDataDirectly(a, b, c, !1)) : this._geometry.updateVerticesDataDirectly(a, b, c))
        }, d.prototype.makeGeometryUnique = function() {
            if (this._geometry) {
                var b = this._geometry.copy(a.Geometry.RandomId());
                b.applyToMesh(this)
            }
        }, d.prototype.setIndices = function(b, c) {
            if (this._geometry) this._geometry.setIndices(b, c);
            else {
                var d = new a.VertexData;
                d.indices = b;
                var e = this.getScene();
                new a.Geometry(a.Geometry.RandomId(), e, d, !1, this)
            }
        }, d.prototype._bind = function(b, c, d) {
            var e, f = this.getScene().getEngine();
            switch (d) {
                case a.Material.PointFillMode:
                    e = null;
                    break;
                case a.Material.WireFrameFillMode:
                    e = b.getLinesIndexBuffer(this.getIndices(), f);
                    break;
                default:
                case a.Material.TriangleFillMode:
                    e = this._geometry.getIndexBuffer()
            }
            f.bindMultiBuffers(this._geometry.getVertexBuffers(), e, c)
        }, d.prototype._draw = function(b, c, d) {
            if (this._geometry && this._geometry.getVertexBuffers() && this._geometry.getIndexBuffer()) {
                var e = this.getScene().getEngine();
                switch (c) {
                    case a.Material.PointFillMode:
                        e.drawPointClouds(b.verticesStart, b.verticesCount, d);
                        break;
                    case a.Material.WireFrameFillMode:
                        e.draw(!1, 0, b.linesIndexCount, d);
                        break;
                    default:
                        e.draw(!0, b.indexStart, b.indexCount, d)
                }
            }
        }, d.prototype.registerBeforeRender = function(a) {
            this._onBeforeRenderCallbacks.push(a)
        }, d.prototype.unregisterBeforeRender = function(a) {
            var b = this._onBeforeRenderCallbacks.indexOf(a);
            b > -1 && this._onBeforeRenderCallbacks.splice(b, 1)
        }, d.prototype.registerAfterRender = function(a) {
            this._onAfterRenderCallbacks.push(a)
        }, d.prototype.unregisterAfterRender = function(a) {
            var b = this._onAfterRenderCallbacks.indexOf(a);
            b > -1 && this._onAfterRenderCallbacks.splice(b, 1)
        }, d.prototype._getInstancesRenderList = function(a) {
            var b = this.getScene();
            if (this._batchCache.mustReturn = !1, this._batchCache.renderSelf[a] = this.isEnabled() && this.isVisible, this._batchCache.visibleInstances[a] = null, this._visibleInstances) {
                var c = b.getRenderId();
                this._batchCache.visibleInstances[a] = this._visibleInstances[c];
                var d = this._renderId;
                if (!this._batchCache.visibleInstances[a] && this._visibleInstances.defaultRenderId && (this._batchCache.visibleInstances[a] = this._visibleInstances[this._visibleInstances.defaultRenderId], c = Math.max(this._visibleInstances.defaultRenderId, c), d = Math.max(this._visibleInstances.selfDefaultRenderId, c)), this._batchCache.visibleInstances[a] && this._batchCache.visibleInstances[a].length) {
                    if (this._renderIdForInstances[a] === c) return this._batchCache.mustReturn = !0, this._batchCache;
                    c !== d && (this._batchCache.renderSelf[a] = !1)
                }
                this._renderIdForInstances[a] = c
            }
            return this._batchCache
        }, d.prototype._renderWithInstances = function(a, b, c, d, e) {
            for (var f = c.visibleInstances[a._id], g = f.length + 1, h = 16 * g * 4; this._instancesBufferSize < h;) this._instancesBufferSize *= 2;
            (!this._worldMatricesInstancesBuffer || this._worldMatricesInstancesBuffer.capacity < this._instancesBufferSize) && (this._worldMatricesInstancesBuffer && e.deleteInstancesBuffer(this._worldMatricesInstancesBuffer), this._worldMatricesInstancesBuffer = e.createInstancesBuffer(this._instancesBufferSize), this._worldMatricesInstancesArray = new Float32Array(this._instancesBufferSize / 4));
            var i = 0,
                j = 0,
                k = this.getWorldMatrix();
            if (c.renderSelf[a._id] && (k.copyToArray(this._worldMatricesInstancesArray, i), i += 16, j++), f)
                for (var l = 0; l < f.length; l++) {
                    var m = f[l];
                    m.getWorldMatrix().copyToArray(this._worldMatricesInstancesArray, i), i += 16, j++
                }
            var n = d.getAttributeLocationByName("world0"),
                o = d.getAttributeLocationByName("world1"),
                p = d.getAttributeLocationByName("world2"),
                q = d.getAttributeLocationByName("world3"),
                r = [n, o, p, q];
            e.updateAndBindInstancesBuffer(this._worldMatricesInstancesBuffer, this._worldMatricesInstancesArray, r), this._draw(a, b, j), e.unBindInstancesBuffer(this._worldMatricesInstancesBuffer, r)
        }, d.prototype._processRendering = function(a, b, c, d, e, f) {
            var g = this.getScene(),
                h = g.getEngine();
            if (e) this._renderWithInstances(a, c, d, b, h);
            else if (d.renderSelf[a._id] && (f && f(!1, this.getWorldMatrix()), this._draw(a, c)), d.visibleInstances[a._id])
                for (var i = 0; i < d.visibleInstances[a._id].length; i++) {
                    var j = d.visibleInstances[a._id][i],
                        k = j.getWorldMatrix();
                    f && f(!0, k), this._draw(a, c)
                }
        }, d.prototype.render = function(b) {
            var c = this.getScene(),
                d = this._getInstancesRenderList(b._id);
            if (!d.mustReturn && this._geometry && this._geometry.getVertexBuffers() && this._geometry.getIndexBuffer()) {
                for (var e = 0; e < this._onBeforeRenderCallbacks.length; e++) this._onBeforeRenderCallbacks[e]();
                var f = c.getEngine(),
                    g = null !== f.getCaps().instancedArrays && null !== d.visibleInstances[b._id] && void 0 !== d.visibleInstances[b._id],
                    h = b.getMaterial();
                if (h && h.isReady(this, g)) {
                    var i = f.getDepthWrite();
                    this.renderOutline && (f.setDepthWrite(!1), c.getOutlineRenderer().render(b, d), f.setDepthWrite(i)), h._preBind();
                    var j = h.getEffect(),
                        k = c.forcePointsCloud ? a.Material.PointFillMode : c.forceWireframe ? a.Material.WireFrameFillMode : h.fillMode;
                    this._bind(b, j, k);
                    var l = this.getWorldMatrix();
                    if (h.bind(l, this), this._processRendering(b, j, k, d, g, function(a, b) {
                            a && h.bindOnlyWorldMatrix(b)
                        }), h.unbind(), this.renderOutline && i && (f.setDepthWrite(!0), f.setColorWrite(!1), c.getOutlineRenderer().render(b, d), f.setColorWrite(!0)), this.renderOverlay) {
                        var m = f.getAlphaMode();
                        f.setAlphaMode(a.Engine.ALPHA_COMBINE), c.getOutlineRenderer().render(b, d, !0), f.setAlphaMode(m)
                    }
                    for (e = 0; e < this._onAfterRenderCallbacks.length; e++) this._onAfterRenderCallbacks[e]()
                }
            }
        }, d.prototype.getEmittedParticleSystems = function() {
            for (var a = new Array, b = 0; b < this.getScene().particleSystems.length; b++) {
                var c = this.getScene().particleSystems[b];
                c.emitter === this && a.push(c)
            }
            return a
        }, d.prototype.getHierarchyEmittedParticleSystems = function() {
            var a = new Array,
                b = this.getDescendants();
            b.push(this);
            for (var c = 0; c < this.getScene().particleSystems.length; c++) {
                var d = this.getScene().particleSystems[c]; - 1 !== b.indexOf(d.emitter) && a.push(d)
            }
            return a
        }, d.prototype.getChildren = function() {
            for (var a = [], b = 0; b < this.getScene().meshes.length; b++) {
                var c = this.getScene().meshes[b];
                c.parent === this && a.push(c)
            }
            return a
        }, d.prototype._checkDelayState = function() {
            var b = this,
                c = this,
                d = this.getScene();
            if (this._geometry) this._geometry.load(d);
            else if (c.delayLoadState === a.Engine.DELAYLOADSTATE_NOTLOADED) {
                c.delayLoadState = a.Engine.DELAYLOADSTATE_LOADING, d._addPendingData(c);
                var e = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata") ? !0 : !1;
                a.Tools.LoadFile(this.delayLoadingFile, function(c) {
                    c instanceof ArrayBuffer ? b._delayLoadingFunction(c, b) : b._delayLoadingFunction(JSON.parse(c), b), b.delayLoadState = a.Engine.DELAYLOADSTATE_LOADED, d._removePendingData(b)
                }, function() {}, d.database, e)
            }
        }, d.prototype.isInFrustum = function(b) {
            return this.delayLoadState === a.Engine.DELAYLOADSTATE_LOADING ? !1 : c.prototype.isInFrustum.call(this, b) ? (this._checkDelayState(), !0) : !1
        }, d.prototype.setMaterialByID = function(a) {
            for (var b = this.getScene().materials, c = 0; c < b.length; c++)
                if (b[c].id === a) return void(this.material = b[c]);
            var d = this.getScene().multiMaterials;
            for (c = 0; c < d.length; c++)
                if (d[c].id === a) return void(this.material = d[c])
        }, d.prototype.getAnimatables = function() {
            var a = [];
            return this.material && a.push(this.material), this.skeleton && a.push(this.skeleton), a
        }, d.prototype.bakeTransformIntoVertices = function(b) {
            if (this.isVerticesDataPresent(a.VertexBuffer.PositionKind)) {
                this._resetPointsArrayCache();
                for (var c = this.getVerticesData(a.VertexBuffer.PositionKind), d = [], e = 0; e < c.length; e += 3) a.Vector3.TransformCoordinates(a.Vector3.FromArray(c, e), b).toArray(d, e);
                if (this.setVerticesData(a.VertexBuffer.PositionKind, d, this.getVertexBuffer(a.VertexBuffer.PositionKind).isUpdatable()), this.isVerticesDataPresent(a.VertexBuffer.NormalKind)) {
                    for (c = this.getVerticesData(a.VertexBuffer.NormalKind), e = 0; e < c.length; e += 3) a.Vector3.TransformNormal(a.Vector3.FromArray(c, e), b).toArray(d, e);
                    this.setVerticesData(a.VertexBuffer.NormalKind, d, this.getVertexBuffer(a.VertexBuffer.NormalKind).isUpdatable())
                }
            }
        }, d.prototype._resetPointsArrayCache = function() {
            this._positions = null
        }, d.prototype._generatePointsArray = function() {
            if (this._positions) return !0;
            this._positions = [];
            var b = this.getVerticesData(a.VertexBuffer.PositionKind);
            if (!b) return !1;
            for (var c = 0; c < b.length; c += 3) this._positions.push(a.Vector3.FromArray(b, c));
            return !0
        }, d.prototype.clone = function(a, b, c) {
            return new d(a, this.getScene(), b, this, c)
        }, d.prototype.dispose = function(a) {
            for (this._geometry && this._geometry.releaseForMesh(this, !0), this._worldMatricesInstancesBuffer && (this.getEngine().deleteInstancesBuffer(this._worldMatricesInstancesBuffer), this._worldMatricesInstancesBuffer = null); this.instances.length;) this.instances[0].dispose();
            c.prototype.dispose.call(this, a)
        }, d.prototype.applyDisplacementMap = function(b, c, d, e) {
            var f = this,
                g = this.getScene(),
                h = function(a) {
                    var b = document.createElement("canvas"),
                        g = b.getContext("2d"),
                        h = a.width,
                        i = a.height;
                    b.width = h, b.height = i, g.drawImage(a, 0, 0);
                    var j = g.getImageData(0, 0, h, i).data;
                    f.applyDisplacementMapFromBuffer(j, h, i, c, d), e && e(f)
                };
            a.Tools.LoadImage(b, h, function() {}, g.database)
        }, d.prototype.applyDisplacementMapFromBuffer = function(b, c, d, e, f) {
            if (!this.isVerticesDataPresent(a.VertexBuffer.PositionKind) || !this.isVerticesDataPresent(a.VertexBuffer.NormalKind) || !this.isVerticesDataPresent(a.VertexBuffer.UVKind)) return void a.Tools.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing");
            for (var g = this.getVerticesData(a.VertexBuffer.PositionKind), h = this.getVerticesData(a.VertexBuffer.NormalKind), i = this.getVerticesData(a.VertexBuffer.UVKind), j = a.Vector3.Zero(), k = a.Vector3.Zero(), l = a.Vector2.Zero(), m = 0; m < g.length; m += 3) {
                a.Vector3.FromArrayToRef(g, m, j), a.Vector3.FromArrayToRef(h, m, k), a.Vector2.FromArrayToRef(i, m / 3 * 2, l);
                var n = Math.abs(l.x) * c % c | 0,
                    o = Math.abs(l.y) * d % d | 0,
                    p = 4 * (n + o * c),
                    q = b[p] / 255,
                    r = b[p + 1] / 255,
                    s = b[p + 2] / 255,
                    t = .3 * q + .59 * r + .11 * s;
                k.normalize(), k.scaleInPlace(e + (f - e) * t), j = j.add(k), j.toArray(g, m)
            }
            a.VertexData.ComputeNormals(g, this.getIndices(), h), this.updateVerticesData(a.VertexBuffer.PositionKind, g), this.updateVerticesData(a.VertexBuffer.NormalKind, h)
        }, d.prototype.convertToFlatShadedMesh = function() {
            for (var b = this.getVerticesDataKinds(), c = [], d = [], e = [], f = !1, g = 0; g < b.length; g++) {
                var h = b[g],
                    i = this.getVertexBuffer(h);
                h !== a.VertexBuffer.NormalKind ? (c[h] = i, d[h] = c[h].getData(), e[h] = []) : (f = i.isUpdatable(), b.splice(g, 1), g--)
            }
            for (var j = this.subMeshes.slice(0), k = this.getIndices(), l = this.getTotalIndices(), m = 0; l > m; m++) {
                var n = k[m];
                for (g = 0; g < b.length; g++) {
                    h = b[g];
                    for (var o = c[h].getStrideSize(), p = 0; o > p; p++) e[h].push(d[h][n * o + p])
                }
            }
            var q = [],
                r = e[a.VertexBuffer.PositionKind];
            for (m = 0; l > m; m += 3) {
                k[m] = m, k[m + 1] = m + 1, k[m + 2] = m + 2;
                for (var s = a.Vector3.FromArray(r, 3 * m), t = a.Vector3.FromArray(r, 3 * (m + 1)), u = a.Vector3.FromArray(r, 3 * (m + 2)), v = s.subtract(t), w = u.subtract(t), x = a.Vector3.Normalize(a.Vector3.Cross(v, w)), y = 0; 3 > y; y++) q.push(x.x), q.push(x.y), q.push(x.z)
            }
            for (this.setIndices(k), this.setVerticesData(a.VertexBuffer.NormalKind, q, f), g = 0; g < b.length; g++) h = b[g], this.setVerticesData(h, e[h], c[h].isUpdatable());
            this.releaseSubMeshes();
            for (var z = 0; z < j.length; z++) {
                var A = j[z];
                new a.SubMesh(A.materialIndex, A.indexStart, A.indexCount, A.indexStart, A.indexCount, this)
            }
            this.synchronizeInstances()
        }, d.prototype.createInstance = function(b) {
            return new a.InstancedMesh(b, this)
        }, d.prototype.synchronizeInstances = function() {
            for (var a = 0; a < this.instances.length; a++) {
                var b = this.instances[a];
                b._syncSubMeshes()
            }
        }, d.prototype.simplify = function(b, c, d, e) {
            var f = this;
            void 0 === c && (c = !0), void 0 === d && (d = 0);
            var g = function() {
                switch (d) {
                    case 0:
                    default:
                        return new a.QuadraticErrorSimplification(f)
                }
            };
            if (c) b.forEach(function(a) {
                var c = g();
                c.simplify(a, function(c) {
                    f.addLODLevel(a.distance, c), a.quality === b[b.length - 1].quality && e && e()
                })
            });
            else {
                var h = g(),
                    i = function(a, b) {
                        h.simplify(a, function(c) {
                            f.addLODLevel(a.distance, c), b()
                        })
                    };
                a.AsyncLoop.Run(b.length, function(a) {
                    i(b[a.index], function() {
                        a.executeNext()
                    })
                }, function() {
                    e && e()
                })
            }
        }, d.CreateBox = function(b, c, e, f) {
            var g = new d(b, e),
                h = a.VertexData.CreateBox(c);
            return h.applyToMesh(g, f), g
        }, d.CreateSphere = function(b, c, e, f, g) {
            var h = new d(b, f),
                i = a.VertexData.CreateSphere(c, e);
            return i.applyToMesh(h, g), h
        }, d.CreateCylinder = function(b, c, e, f, g, h, i, j) {
            void 0 !== i && i instanceof a.Scene || (void 0 !== i && (j = i), i = h, h = 1);
            var k = new d(b, i),
                l = a.VertexData.CreateCylinder(c, e, f, g, h);
            return l.applyToMesh(k, j), k
        }, d.CreateTorus = function(b, c, e, f, g, h) {
            var i = new d(b, g),
                j = a.VertexData.CreateTorus(c, e, f);
            return j.applyToMesh(i, h), i
        }, d.CreateTorusKnot = function(b, c, e, f, g, h, i, j, k) {
            var l = new d(b, j),
                m = a.VertexData.CreateTorusKnot(c, e, f, g, h, i);
            return m.applyToMesh(l, k), l
        }, d.CreateLines = function(b, c, d, e) {
            var f = new a.LinesMesh(b, d, e),
                g = a.VertexData.CreateLines(c);
            return g.applyToMesh(f, e), f
        }, d.CreatePlane = function(b, c, e, f) {
            var g = new d(b, e),
                h = a.VertexData.CreatePlane(c);
            return h.applyToMesh(g, f), g
        }, d.CreateGround = function(b, c, d, e, f, g) {
            var h = new a.GroundMesh(b, f);
            h._setReady(!1), h._subdivisions = e;
            var i = a.VertexData.CreateGround(c, d, e);
            return i.applyToMesh(h, g), h._setReady(!0), h
        }, d.CreateTiledGround = function(b, c, e, f, g, h, i, j, k) {
            var l = new d(b, j),
                m = a.VertexData.CreateTiledGround(c, e, f, g, h, i);
            return m.applyToMesh(l, k), l
        }, d.CreateGroundFromHeightMap = function(b, c, d, e, f, g, h, i, j, k) {
            var l = new a.GroundMesh(b, i);
            l._subdivisions = f, l._setReady(!1);
            var m = function(b) {
                var c = document.createElement("canvas"),
                    i = c.getContext("2d"),
                    m = b.width,
                    n = b.height;
                c.width = m, c.height = n, i.drawImage(b, 0, 0);
                var o = i.getImageData(0, 0, m, n).data,
                    p = a.VertexData.CreateGroundFromHeightMap(d, e, f, g, h, o, m, n);
                p.applyToMesh(l, j), l._setReady(!0), k && k(l)
            };
            return a.Tools.LoadImage(c, m, function() {}, i.database), l
        }, d.MinMax = function(a) {
            var b = null,
                c = null;
            for (var d in a) {
                var e = a[d],
                    f = e.getBoundingInfo().boundingBox;
                b ? (b.MinimizeInPlace(f.minimumWorld), c.MaximizeInPlace(f.maximumWorld)) : (b = f.minimumWorld, c = f.maximumWorld)
            }
            return {
                min: b,
                max: c
            }
        }, d.Center = function(b) {
            var c = void 0 !== b.min ? b : d.MinMax(b);
            return a.Vector3.Center(c.min, c.max)
        }, d.MergeMeshes = function(b, c, e) {
            void 0 === c && (c = !0);
            var f = b[0],
                g = f.material,
                h = f.getScene();
            if (!e)
                for (var i = 0, j = 0; j < b.length; j++)
                    if (i += b[j].getTotalVertices(), i > 65536) return a.Tools.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null;
            var k = a.VertexData.ExtractFromMesh(f);
            for (k.transform(f.getWorldMatrix()), j = 1; j < b.length; j++) {
                var l = a.VertexData.ExtractFromMesh(b[j]);
                l.transform(b[j].getWorldMatrix()), k.merge(l)
            }
            var m = new d(f.name + "_merged", h);
            if (k.applyToMesh(m), m.material = g, m.checkCollisions = f.checkCollisions, c)
                for (j = 0; j < b.length; j++) b[j].dispose();
            return m
        }, d
    }(a.AbstractMesh);
    a.Mesh = c
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d) {
            b.call(this, c, d), this.generateOctree = !1, this._worldInverse = new a.Matrix
        }
        return __extends(c, b), Object.defineProperty(c.prototype, "subdivisions", {
            get: function() {
                return this._subdivisions
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.optimize = function() {
            this.subdivide(this._subdivisions), this.createOrUpdateSubmeshesOctree(32)
        }, c.prototype.getHeightAtCoordinates = function(b, c) {
            var d = new a.Ray(new a.Vector3(b, this.getBoundingInfo().boundingBox.maximumWorld.y + 1, c), new a.Vector3(0, -1, 0));
            this.getWorldMatrix().invertToRef(this._worldInverse), d = a.Ray.Transform(d, this._worldInverse);
            var e = this.intersects(d);
            return e.hit ? e.pickedPoint.y : 0
        }, c
    }(a.Mesh);
    a.GroundMesh = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c) {
            b.call(this, a, c.getScene()), c.instances.push(this), this._sourceMesh = c, this.position.copyFrom(c.position), this.rotation.copyFrom(c.rotation), this.scaling.copyFrom(c.scaling), c.rotationQuaternion && (this.rotationQuaternion = c.rotationQuaternion.clone()), this.infiniteDistance = c.infiniteDistance, this.setPivotMatrix(c.getPivotMatrix()), this.refreshBoundingInfo(), this._syncSubMeshes()
        }
        return __extends(c, b), Object.defineProperty(c.prototype, "receiveShadows", {
            get: function() {
                return this._sourceMesh.receiveShadows
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "material", {
            get: function() {
                return this._sourceMesh.material
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "visibility", {
            get: function() {
                return this._sourceMesh.visibility
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "skeleton", {
            get: function() {
                return this._sourceMesh.skeleton
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.getTotalVertices = function() {
            return this._sourceMesh.getTotalVertices()
        }, Object.defineProperty(c.prototype, "sourceMesh", {
            get: function() {
                return this._sourceMesh
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.getVerticesData = function(a) {
            return this._sourceMesh.getVerticesData(a)
        }, c.prototype.isVerticesDataPresent = function(a) {
            return this._sourceMesh.isVerticesDataPresent(a)
        }, c.prototype.getIndices = function() {
            return this._sourceMesh.getIndices()
        }, Object.defineProperty(c.prototype, "_positions", {
            get: function() {
                return this._sourceMesh._positions
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.refreshBoundingInfo = function() {
            var b = this._sourceMesh.getVerticesData(a.VertexBuffer.PositionKind);
            if (b) {
                var c = a.Tools.ExtractMinAndMax(b, 0, this._sourceMesh.getTotalVertices());
                this._boundingInfo = new a.BoundingInfo(c.minimum, c.maximum)
            }
            this._updateBoundingInfo()
        }, c.prototype._preActivate = function() {
            this._currentLOD && this._currentLOD._preActivate()
        }, c.prototype._activate = function(a) {
            this._currentLOD && this._currentLOD._registerInstanceForRenderId(this, a)
        }, c.prototype.getLOD = function() {
            return this._currentLOD = this.sourceMesh.getLOD(this.getScene().activeCamera, this.getBoundingInfo().boundingSphere), this._currentLOD === this.sourceMesh ? this : this._currentLOD
        }, c.prototype._syncSubMeshes = function() {
            if (this.releaseSubMeshes(), this._sourceMesh.subMeshes)
                for (var a = 0; a < this._sourceMesh.subMeshes.length; a++) this._sourceMesh.subMeshes[a].clone(this, this._sourceMesh)
        }, c.prototype._generatePointsArray = function() {
            return this._sourceMesh._generatePointsArray()
        }, c.prototype.clone = function(b, c, d) {
            var e = this._sourceMesh.createInstance(b);
            if (a.Tools.DeepCopy(this, e, ["name"], []), this.refreshBoundingInfo(), c && (e.parent = c), !d)
                for (var f = 0; f < this.getScene().meshes.length; f++) {
                    var g = this.getScene().meshes[f];
                    g.parent === this && g.clone(g.name, e)
                }
            return e.computeWorldMatrix(!0), e
        }, c.prototype.dispose = function(a) {
            var c = this._sourceMesh.instances.indexOf(this);
            this._sourceMesh.instances.splice(c, 1), b.prototype.dispose.call(this, a)
        }, c
    }(a.AbstractMesh);
    a.InstancedMesh = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b, c, d, e, f, g, h) {
            void 0 === h && (h = !0), this.materialIndex = a, this.verticesStart = b, this.verticesCount = c, this.indexStart = d, this.indexCount = e, this._renderId = 0, this._mesh = f, this._renderingMesh = g || f, f.subMeshes.push(this), this._id = f.subMeshes.length - 1, h && this.refreshBoundingInfo()
        }
        return b.prototype.getBoundingInfo = function() {
            return this._boundingInfo
        }, b.prototype.getMesh = function() {
            return this._mesh
        }, b.prototype.getRenderingMesh = function() {
            return this._renderingMesh
        }, b.prototype.getMaterial = function() {
            var b = this._renderingMesh.material;
            if (b && b instanceof a.MultiMaterial) {
                var c = b;
                return c.getSubMaterial(this.materialIndex)
            }
            return b ? b : this._mesh.getScene().defaultMaterial
        }, b.prototype.refreshBoundingInfo = function() {
            var b = this._renderingMesh.getVerticesData(a.VertexBuffer.PositionKind);
            if (!b) return void(this._boundingInfo = this._mesh._boundingInfo);
            var c, d = this._renderingMesh.getIndices();
            c = 0 === this.indexStart && this.indexCount === d.length ? a.Tools.ExtractMinAndMax(b, this.verticesStart, this.verticesCount) : a.Tools.ExtractMinAndMaxIndexed(b, d, this.indexStart, this.indexCount), this._boundingInfo = new a.BoundingInfo(c.minimum, c.maximum)
        }, b.prototype._checkCollision = function(a) {
            return this._boundingInfo._checkCollision(a)
        }, b.prototype.updateBoundingInfo = function(a) {
            this._boundingInfo || this.refreshBoundingInfo(), this._boundingInfo._update(a)
        }, b.prototype.isInFrustum = function(a) {
            return this._boundingInfo.isInFrustum(a)
        }, b.prototype.render = function() {
            this._renderingMesh.render(this)
        }, b.prototype.getLinesIndexBuffer = function(a, b) {
            if (!this._linesIndexBuffer) {
                for (var c = [], d = this.indexStart; d < this.indexStart + this.indexCount; d += 3) c.push(a[d], a[d + 1], a[d + 1], a[d + 2], a[d + 2], a[d]);
                this._linesIndexBuffer = b.createIndexBuffer(c), this.linesIndexCount = c.length
            }
            return this._linesIndexBuffer
        }, b.prototype.canIntersects = function(a) {
            return a.intersectsBox(this._boundingInfo.boundingBox)
        }, b.prototype.intersects = function(a, b, c, d) {
            for (var e = null, f = this.indexStart; f < this.indexStart + this.indexCount; f += 3) {
                var g = b[c[f]],
                    h = b[c[f + 1]],
                    i = b[c[f + 2]],
                    j = a.intersectsTriangle(g, h, i);
                if (j) {
                    if (j.distance < 0) continue;
                    if ((d || !e || j.distance < e.distance) && (e = j, e.faceId = f / 3, d)) break
                }
            }
            return e
        }, b.prototype.clone = function(c, d) {
            var e = new b(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, c, d, !1);
            return e._boundingInfo = new a.BoundingInfo(this._boundingInfo.minimum, this._boundingInfo.maximum), e
        }, b.prototype.dispose = function() {
            this._linesIndexBuffer && (this._mesh.getScene().getEngine()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
            var a = this._mesh.subMeshes.indexOf(this);
            this._mesh.subMeshes.splice(a, 1)
        }, b.CreateFromIndices = function(b, c, d, e, f) {
            var g = Number.MAX_VALUE,
                h = -Number.MAX_VALUE;
            f = f || e;
            for (var i = f.getIndices(), j = c; c + d > j; j++) {
                var k = i[j];
                g > k && (g = k), k > h && (h = k)
            }
            return new a.SubMesh(b, g, h - g + 1, c, d, e, f)
        }, b
    }();
    a.SubMesh = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b) {
            this.delayLoadState = a.Engine.DELAYLOADSTATE_NONE, this.hasAlpha = !1, this.getAlphaFromRGB = !1, this.level = 1, this.isCube = !1, this.isRenderTarget = !1, this.animations = new Array, this.coordinatesIndex = 0, this.coordinatesMode = a.Texture.EXPLICIT_MODE, this.wrapU = a.Texture.WRAP_ADDRESSMODE, this.wrapV = a.Texture.WRAP_ADDRESSMODE, this.anisotropicFilteringLevel = 4, this._scene = b, this._scene.textures.push(this)
        }
        return b.prototype.getScene = function() {
            return this._scene
        }, b.prototype.getTextureMatrix = function() {
            return null
        }, b.prototype.getReflectionTextureMatrix = function() {
            return null
        }, b.prototype.getInternalTexture = function() {
            return this._texture
        }, b.prototype.isReady = function() {
            return this.delayLoadState === a.Engine.DELAYLOADSTATE_NOTLOADED ? !0 : this._texture ? this._texture.isReady : !1
        }, b.prototype.getSize = function() {
            return this._texture._width ? {
                width: this._texture._width,
                height: this._texture._height
            } : this._texture._size ? {
                width: this._texture._size,
                height: this._texture._size
            } : {
                width: 0,
                height: 0
            }
        }, b.prototype.getBaseSize = function() {
            return this.isReady() ? this._texture._size ? {
                width: this._texture._size,
                height: this._texture._size
            } : {
                width: this._texture._baseWidth,
                height: this._texture._baseHeight
            } : {
                width: 0,
                height: 0
            }
        }, b.prototype.scale = function() {}, Object.defineProperty(b.prototype, "canRescale", {
            get: function() {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype._removeFromCache = function(a, b) {
            for (var c = this._scene.getEngine().getLoadedTexturesCache(), d = 0; d < c.length; d++) {
                var e = c[d];
                if (e.url === a && e.noMipmap === b) return void c.splice(d, 1)
            }
        }, b.prototype._getFromCache = function(a, b, c) {
            for (var d = this._scene.getEngine().getLoadedTexturesCache(), e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.url === a && f.noMipmap === b && (!c || c === f.samplingMode)) return f.references++, f
            }
            return null
        }, b.prototype.delayLoad = function() {}, b.prototype.releaseInternalTexture = function() {
            if (this._texture) {
                var a = this._scene.getEngine().getLoadedTexturesCache();
                if (this._texture.references--, 0 === this._texture.references) {
                    var b = a.indexOf(this._texture);
                    a.splice(b, 1), this._scene.getEngine()._releaseTexture(this._texture), delete this._texture
                }
            }
        }, b.prototype.clone = function() {
            return null
        }, b.prototype.dispose = function() {
            var a = this._scene.textures.indexOf(this);
            a >= 0 && this._scene.textures.splice(a, 1), void 0 !== this._texture && (this.releaseInternalTexture(), this.onDispose && this.onDispose())
        }, b
    }();
    a.BaseTexture = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c) {
            this.index = b, this._opaqueSubMeshes = new a.SmartArray(256), this._transparentSubMeshes = new a.SmartArray(256), this._alphaTestSubMeshes = new a.SmartArray(256), this._scene = c
        }
        return b.prototype.render = function(b) {
            if (b) return b(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes), !0;
            if (0 === this._opaqueSubMeshes.length && 0 === this._alphaTestSubMeshes.length && 0 === this._transparentSubMeshes.length) return !1;
            var c, d, e = this._scene.getEngine();
            for (c = 0; c < this._opaqueSubMeshes.length; c++) d = this._opaqueSubMeshes.data[c], d.render();
            for (e.setAlphaTesting(!0), c = 0; c < this._alphaTestSubMeshes.length; c++) d = this._alphaTestSubMeshes.data[c], d.render();
            if (e.setAlphaTesting(!1), this._transparentSubMeshes.length) {
                for (c = 0; c < this._transparentSubMeshes.length; c++) d = this._transparentSubMeshes.data[c], d._alphaIndex = d.getMesh().alphaIndex, d._distanceToCamera = d.getBoundingInfo().boundingSphere.centerWorld.subtract(this._scene.activeCamera.position).length();
                var f = this._transparentSubMeshes.data.slice(0, this._transparentSubMeshes.length);
                for (f.sort(function(a, b) {
                        return a._alphaIndex > b._alphaIndex ? 1 : a._alphaIndex < b._alphaIndex ? -1 : a._distanceToCamera < b._distanceToCamera ? 1 : a._distanceToCamera > b._distanceToCamera ? -1 : 0
                    }), e.setAlphaMode(a.Engine.ALPHA_COMBINE), c = 0; c < f.length; c++) d = f[c], d.render();
                e.setAlphaMode(a.Engine.ALPHA_DISABLE)
            }
            return !0
        }, b.prototype.prepare = function() {
            this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset()
        }, b.prototype.dispatch = function(a) {
            var b = a.getMaterial(),
                c = a.getMesh();
            b.needAlphaBlending() || c.visibility < 1 || c.hasVertexAlpha ? this._transparentSubMeshes.push(a) : b.needAlphaTesting() ? this._alphaTestSubMeshes.push(a) : this._opaqueSubMeshes.push(a)
        }, b
    }();
    a.RenderingGroup = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a) {
            this._renderingGroups = new Array, this._scene = a
        }
        return b.prototype._renderParticles = function(b, c) {
            if (0 !== this._scene._activeParticleSystems.length) {
                for (var d = a.Tools.Now, e = 0; e < this._scene._activeParticleSystems.length; e++) {
                    var f = this._scene._activeParticleSystems.data[e];
                    f.renderingGroupId === b && (this._clearDepthBuffer(), f.emitter.position && c && -1 === c.indexOf(f.emitter) || (this._scene._activeParticles += f.render()))
                }
                this._scene._particlesDuration += a.Tools.Now - d
            }
        }, b.prototype._renderSprites = function(b) {
            if (0 !== this._scene.spriteManagers.length) {
                for (var c = a.Tools.Now, d = 0; d < this._scene.spriteManagers.length; d++) {
                    var e = this._scene.spriteManagers[d];
                    e.renderingGroupId === b && (this._clearDepthBuffer(), e.render())
                }
                this._scene._spritesDuration += a.Tools.Now - c
            }
        }, b.prototype._clearDepthBuffer = function() {
            this._depthBufferAlreadyCleaned || (this._scene.getEngine().clear(0, !1, !0), this._depthBufferAlreadyCleaned = !0)
        }, b.prototype.render = function(a, c, d, e) {
            for (var f = 0; f < b.MAX_RENDERINGGROUPS; f++) {
                this._depthBufferAlreadyCleaned = !1;
                var g = this._renderingGroups[f];
                g && (this._clearDepthBuffer(), g.render(a) || this._renderingGroups.splice(f, 1)), e && this._renderSprites(f), d && this._renderParticles(f, c)
            }
        }, b.prototype.reset = function() {
            for (var a in this._renderingGroups) {
                var b = this._renderingGroups[a];
                b.prepare()
            }
        }, b.prototype.dispatch = function(b) {
            var c = b.getMesh(),
                d = c.renderingGroupId || 0;
            this._renderingGroups[d] || (this._renderingGroups[d] = new a.RenderingGroup(d, this._scene)), this._renderingGroups[d].dispatch(b)
        }, b.MAX_RENDERINGGROUPS = 4, b
    }();
    a.RenderingManager = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(d, e, f, g, h, i, j, k, l) {
            void 0 === h && (h = c.TRILINEAR_SAMPLINGMODE), void 0 === i && (i = null), void 0 === j && (j = null), void 0 === k && (k = null), void 0 === l && (l = !1), b.call(this, e), this.uOffset = 0, this.vOffset = 0, this.uScale = 1, this.vScale = 1, this.uAng = 0, this.vAng = 0, this.wAng = 0, this.name = d, this.url = d, this._noMipmap = f, this._invertY = g, this._samplingMode = h, this._buffer = k, this._deleteBuffer = l, d && (this._texture = this._getFromCache(d, f, h), this._texture || (e.useDelayedTextureLoading ? this.delayLoadState = a.Engine.DELAYLOADSTATE_NOTLOADED : (this._texture = e.getEngine().createTexture(d, f, g, e, this._samplingMode, i, j, this._buffer), l && delete this._buffer)))
        }
        return __extends(c, b), c.prototype.delayLoad = function() {
            this.delayLoadState == a.Engine.DELAYLOADSTATE_NOTLOADED && (this.delayLoadState = a.Engine.DELAYLOADSTATE_LOADED, this._texture = this._getFromCache(this.url, this._noMipmap, this._samplingMode), this._texture || (this._texture = this.getScene().getEngine().createTexture(this.url, this._noMipmap, this._invertY, this.getScene(), this._samplingMode, null, null, this._buffer), this._deleteBuffer && delete this._buffer))
        }, c.prototype._prepareRowForTextureGeneration = function(b, c, d, e) {
            b -= this.uOffset + .5, c -= this.vOffset + .5, d -= .5, a.Vector3.TransformCoordinatesFromFloatsToRef(b, c, d, this._rowGenerationMatrix, e), e.x *= this.uScale, e.y *= this.vScale, e.x += .5, e.y += .5, e.z += .5
        }, c.prototype.getTextureMatrix = function() {
            return this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng ? this._cachedTextureMatrix : (this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedTextureMatrix || (this._cachedTextureMatrix = a.Matrix.Zero(), this._rowGenerationMatrix = new a.Matrix, this._t0 = a.Vector3.Zero(), this._t1 = a.Vector3.Zero(), this._t2 = a.Vector3.Zero()), a.Matrix.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.subtractInPlace(this._t0), this._t2.subtractInPlace(this._t0), a.Matrix.IdentityToRef(this._cachedTextureMatrix), this._cachedTextureMatrix.m[0] = this._t1.x, this._cachedTextureMatrix.m[1] = this._t1.y, this._cachedTextureMatrix.m[2] = this._t1.z, this._cachedTextureMatrix.m[4] = this._t2.x, this._cachedTextureMatrix.m[5] = this._t2.y, this._cachedTextureMatrix.m[6] = this._t2.z, this._cachedTextureMatrix.m[8] = this._t0.x, this._cachedTextureMatrix.m[9] = this._t0.y, this._cachedTextureMatrix.m[10] = this._t0.z, this._cachedTextureMatrix)
        }, c.prototype.getReflectionTextureMatrix = function() {
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.coordinatesMode === this._cachedCoordinatesMode) return this._cachedTextureMatrix;
            switch (this._cachedTextureMatrix || (this._cachedTextureMatrix = a.Matrix.Zero(), this._projectionModeMatrix = a.Matrix.Zero()), this._cachedCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
                case a.Texture.SPHERICAL_MODE:
                    a.Matrix.IdentityToRef(this._cachedTextureMatrix), this._cachedTextureMatrix[0] = -.5 * this.uScale, this._cachedTextureMatrix[5] = -.5 * this.vScale, this._cachedTextureMatrix[12] = .5 + this.uOffset, this._cachedTextureMatrix[13] = .5 + this.vOffset;
                    break;
                case a.Texture.PLANAR_MODE:
                    a.Matrix.IdentityToRef(this._cachedTextureMatrix), this._cachedTextureMatrix[0] = this.uScale, this._cachedTextureMatrix[5] = this.vScale, this._cachedTextureMatrix[12] = this.uOffset, this._cachedTextureMatrix[13] = this.vOffset;
                    break;
                case a.Texture.PROJECTION_MODE:
                    a.Matrix.IdentityToRef(this._projectionModeMatrix), this._projectionModeMatrix.m[0] = .5, this._projectionModeMatrix.m[5] = -.5, this._projectionModeMatrix.m[10] = 0, this._projectionModeMatrix.m[12] = .5, this._projectionModeMatrix.m[13] = .5, this._projectionModeMatrix.m[14] = 1, this._projectionModeMatrix.m[15] = 1, this.getScene().getProjectionMatrix().multiplyToRef(this._projectionModeMatrix, this._cachedTextureMatrix);
                    break;
                default:
                    a.Matrix.IdentityToRef(this._cachedTextureMatrix)
            }
            return this._cachedTextureMatrix
        }, c.prototype.clone = function() {
            var b = new a.Texture(this._texture.url, this.getScene(), this._noMipmap, this._invertY, this._samplingMode);
            return b.hasAlpha = this.hasAlpha, b.level = this.level, b.wrapU = this.wrapU, b.wrapV = this.wrapV, b.coordinatesIndex = this.coordinatesIndex, b.coordinatesMode = this.coordinatesMode, b.uOffset = this.uOffset, b.vOffset = this.vOffset, b.uScale = this.uScale, b.vScale = this.vScale, b.uAng = this.uAng, b.vAng = this.vAng, b.wAng = this.wAng, b
        }, c.CreateFromBase64String = function(a, b, d, e, f, g, h, i) {
            return void 0 === g && (g = c.TRILINEAR_SAMPLINGMODE), void 0 === h && (h = null), void 0 === i && (i = null), new c("data:" + b, d, e, f, g, h, i, a)
        }, c.NEAREST_SAMPLINGMODE = 1, c.BILINEAR_SAMPLINGMODE = 2, c.TRILINEAR_SAMPLINGMODE = 3, c.EXPLICIT_MODE = 0, c.SPHERICAL_MODE = 1, c.PLANAR_MODE = 2, c.CUBIC_MODE = 3, c.PROJECTION_MODE = 4, c.SKYBOX_MODE = 5, c.CLAMP_ADDRESSMODE = 0, c.WRAP_ADDRESSMODE = 1, c.MIRROR_ADDRESSMODE = 2, c
    }(a.BaseTexture);
    a.Texture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f) {
            b.call(this, d), this.coordinatesMode = a.Texture.CUBIC_MODE, this.name = c, this.url = c, this._noMipmap = f, this.hasAlpha = !1, this._texture = this._getFromCache(c, f), e || (e = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._extensions = e, this._texture || (d.useDelayedTextureLoading ? this.delayLoadState = a.Engine.DELAYLOADSTATE_NOTLOADED : this._texture = d.getEngine().createCubeTexture(c, d, e, f)), this.isCube = !0, this._textureMatrix = a.Matrix.Identity()
        }
        return __extends(c, b), c.prototype.clone = function() {
            var b = new a.CubeTexture(this.url, this.getScene(), this._extensions, this._noMipmap);
            return b.level = this.level, b.wrapU = this.wrapU, b.wrapV = this.wrapV, b.coordinatesIndex = this.coordinatesIndex, b.coordinatesMode = this.coordinatesMode, b
        }, c.prototype.delayLoad = function() {
            this.delayLoadState == a.Engine.DELAYLOADSTATE_NOTLOADED && (this.delayLoadState = a.Engine.DELAYLOADSTATE_LOADED, this._texture = this._getFromCache(this.url, this._noMipmap), this._texture || (this._texture = this.getScene().getEngine().createCubeTexture(this.url, this.getScene(), this._extensions)))
        }, c.prototype.getReflectionTextureMatrix = function() {
            return this._textureMatrix
        }, c
    }(a.BaseTexture);
    a.CubeTexture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f, g, h) {
            void 0 === g && (g = !0), void 0 === h && (h = a.Engine.TEXTURETYPE_UNSIGNED_INT), b.call(this, null, e, !f), this.renderList = new Array, this.renderParticles = !0, this.renderSprites = !1, this.coordinatesMode = a.Texture.PROJECTION_MODE, this._currentRefreshId = -1, this._refreshRate = 1, this.name = c, this.isRenderTarget = !0, this._size = d, this._generateMipMaps = f, this._doNotChangeAspectRatio = g, this._texture = e.getEngine().createRenderTargetTexture(d, {
                generateMipMaps: f,
                type: h
            }), this._renderingManager = new a.RenderingManager(e)
        }
        return __extends(c, b), c.prototype.resetRefreshCounter = function() {
            this._currentRefreshId = -1
        }, Object.defineProperty(c.prototype, "refreshRate", {
            get: function() {
                return this._refreshRate
            },
            set: function(a) {
                this._refreshRate = a, this.resetRefreshCounter()
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype._shouldRender = function() {
            return -1 === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1)
        }, c.prototype.isReady = function() {
            return this.getScene().renderTargetsEnabled ? b.prototype.isReady.call(this) : !1
        }, c.prototype.getRenderSize = function() {
            return this._size
        }, Object.defineProperty(c.prototype, "canRescale", {
            get: function() {
                return !0
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.scale = function(a) {
            var b = this._size * a;
            this.resize(b, this._generateMipMaps)
        }, c.prototype.resize = function(a, b) {
            this.releaseInternalTexture(), this._texture = this.getScene().getEngine().createRenderTargetTexture(a, b)
        }, c.prototype.render = function(a) {
            var b = this.getScene(),
                c = b.getEngine();
            if (this._waitingRenderList) {
                this.renderList = [];
                for (var d = 0; d < this._waitingRenderList.length; d++) {
                    var e = this._waitingRenderList[d];
                    this.renderList.push(b.getMeshByID(e))
                }
                delete this._waitingRenderList
            }
            if (!this.renderList || 0 !== this.renderList.length) {
                a && b.postProcessManager._prepareFrame(this._texture) || c.bindFramebuffer(this._texture), this._renderingManager.reset();
                for (var f = this.renderList ? this.renderList : b.getActiveMeshes().data, g = 0; g < f.length; g++) {
                    var h = f[g];
                    if (h) {
                        if (!h.isReady()) {
                            this.resetRefreshCounter();
                            continue
                        }
                        if (h.isEnabled() && h.isVisible && h.subMeshes && 0 !== (h.layerMask & b.activeCamera.layerMask)) {
                            h._activate(b.getRenderId());
                            for (var i = 0; i < h.subMeshes.length; i++) {
                                var j = h.subMeshes[i];
                                b._activeVertices += j.indexCount, this._renderingManager.dispatch(j)
                            }
                        }
                    }
                }
                this.onBeforeRender && this.onBeforeRender(), c.clear(b.clearColor, !0, !0), this._doNotChangeAspectRatio || b.updateTransformMatrix(!0), this._renderingManager.render(this.customRenderFunction, f, this.renderParticles, this.renderSprites), a && b.postProcessManager._finalizeFrame(!1, this._texture), this._doNotChangeAspectRatio || b.updateTransformMatrix(!0), this.onAfterRender && this.onAfterRender(), c.unBindFramebuffer(this._texture)
            }
        }, c.prototype.clone = function() {
            var a = this.getSize(),
                b = new c(this.name, a.width, this.getScene(), this._generateMipMaps);
            return b.hasAlpha = this.hasAlpha, b.level = this.level, b.coordinatesMode = this.coordinatesMode, b.renderList = this.renderList.slice(0), b
        }, c
    }(a.Texture);
    a.RenderTargetTexture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g) {
            void 0 === g && (g = !0), a.call(this, null, e, !g), this._currentRefreshId = -1, this._refreshRate = 1, this._vertexDeclaration = [2], this._vertexStrideSize = 8, this._uniforms = new Array, this._samplers = new Array, this._textures = new Array, this._floats = new Array, this._floatsArrays = {}, this._colors3 = new Array, this._colors4 = new Array, this._vectors2 = new Array, this._vectors3 = new Array, this._matrices = new Array, this._fallbackTextureUsed = !1, e._proceduralTextures.push(this), this.name = b, this.isRenderTarget = !0, this._size = c, this._generateMipMaps = g, this.setFragment(d), this._fallbackTexture = f, this._texture = e.getEngine().createRenderTargetTexture(c, g);
            var h = [];
            h.push(1, 1), h.push(-1, 1), h.push(-1, -1), h.push(1, -1), this._vertexBuffer = e.getEngine().createVertexBuffer(h);
            var i = [];
            i.push(0), i.push(1), i.push(2), i.push(0), i.push(2), i.push(3), this._indexBuffer = e.getEngine().createIndexBuffer(i)
        }
        return __extends(b, a), b.prototype.reset = function() {
            if (void 0 !== this._effect) {
                var a = this.getScene().getEngine();
                a._releaseEffect(this._effect)
            }
        }, b.prototype.isReady = function() {
            var a, b = this,
                c = this.getScene().getEngine();
            return this._fragment ? this._fallbackTextureUsed ? !0 : (a = void 0 !== this._fragment.fragmentElement ? {
                vertex: "procedural",
                fragmentElement: this._fragment.fragmentElement
            } : {
                vertex: "procedural",
                fragment: this._fragment
            }, this._effect = c.createEffect(a, ["position"], this._uniforms, this._samplers, "", null, null, function() {
                b.releaseInternalTexture(), b._fallbackTexture && (b._texture = b._fallbackTexture._texture, b._texture.references++), b._fallbackTextureUsed = !0
            }), this._effect.isReady()) : !1
        }, b.prototype.resetRefreshCounter = function() {
            this._currentRefreshId = -1
        }, b.prototype.setFragment = function(a) {
            this._fragment = a
        }, Object.defineProperty(b.prototype, "refreshRate", {
            get: function() {
                return this._refreshRate
            },
            set: function(a) {
                this._refreshRate = a, this.resetRefreshCounter()
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype._shouldRender = function() {
            return this.isReady() && this._texture ? this._fallbackTextureUsed ? !1 : -1 === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1) : !1
        }, b.prototype.getRenderSize = function() {
            return this._size
        }, b.prototype.resize = function(a, b) {
            this._fallbackTextureUsed || (this.releaseInternalTexture(), this._texture = this.getScene().getEngine().createRenderTargetTexture(a, b))
        }, b.prototype._checkUniform = function(a) {
            -1 === this._uniforms.indexOf(a) && this._uniforms.push(a)
        }, b.prototype.setTexture = function(a, b) {
            return -1 === this._samplers.indexOf(a) && this._samplers.push(a), this._textures[a] = b, this
        }, b.prototype.setFloat = function(a, b) {
            return this._checkUniform(a), this._floats[a] = b, this
        }, b.prototype.setFloats = function(a, b) {
            return this._checkUniform(a), this._floatsArrays[a] = b, this
        }, b.prototype.setColor3 = function(a, b) {
            return this._checkUniform(a), this._colors3[a] = b, this
        }, b.prototype.setColor4 = function(a, b) {
            return this._checkUniform(a), this._colors4[a] = b, this
        }, b.prototype.setVector2 = function(a, b) {
            return this._checkUniform(a), this._vectors2[a] = b, this
        }, b.prototype.setVector3 = function(a, b) {
            return this._checkUniform(a), this._vectors3[a] = b, this
        }, b.prototype.setMatrix = function(a, b) {
            return this._checkUniform(a), this._matrices[a] = b, this
        }, b.prototype.render = function() {
            var a = this.getScene(),
                b = a.getEngine();
            b.bindFramebuffer(this._texture), b.clear(a.clearColor, !0, !0), b.enableEffect(this._effect), b.setState(!1);
            for (var c in this._textures) this._effect.setTexture(c, this._textures[c]);
            for (c in this._floats) this._effect.setFloat(c, this._floats[c]);
            for (c in this._floatsArrays) this._effect.setArray(c, this._floatsArrays[c]);
            for (c in this._colors3) this._effect.setColor3(c, this._colors3[c]);
            for (c in this._colors4) {
                var d = this._colors4[c];
                this._effect.setFloat4(c, d.r, d.g, d.b, d.a)
            }
            for (c in this._vectors2) this._effect.setVector2(c, this._vectors2[c]);
            for (c in this._vectors3) this._effect.setVector3(c, this._vectors3[c]);
            for (c in this._matrices) this._effect.setMatrix(c, this._matrices[c]);
            b.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, this._effect), b.draw(!0, 0, 6), b.unBindFramebuffer(this._texture)
        }, b.prototype.clone = function() {
            var a = this.getSize(),
                c = new b(this.name, a.width, this._fragment, this.getScene(), this._fallbackTexture, this._generateMipMaps);
            return c.hasAlpha = this.hasAlpha, c.level = this.level, c.coordinatesMode = this.coordinatesMode, c
        }, b.prototype.dispose = function() {
            var b = this.getScene()._proceduralTextures.indexOf(this);
            b >= 0 && this.getScene()._proceduralTextures.splice(b, 1), a.prototype.dispose.call(this)
        }, b
    }(a.Texture);
    a.ProceduralTexture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f, g) {
            b.call(this, c, d, "wood", e, f, g), this._ampScale = 100, this._woodColor = new a.Color3(.32, .17, .09), this.updateShaderUniforms(), this.refreshRate = 0
        }
        return __extends(c, b), c.prototype.updateShaderUniforms = function() {
            this.setFloat("ampScale", this._ampScale), this.setColor3("woodColor", this._woodColor)
        }, Object.defineProperty(c.prototype, "ampScale", {
            get: function() {
                return this._ampScale
            },
            set: function(a) {
                this._ampScale = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "woodColor", {
            get: function() {
                return this._woodColor
            },
            set: function(a) {
                this._woodColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.WoodProceduralTexture = b;
    var c = function(b) {
        function c(d, e, f, g, h) {
            b.call(this, d, e, "fire", f, g, h), this._time = 0, this._speed = new a.Vector2(.5, .3), this._shift = 1.6, this._autoGenerateTime = !0, this._alphaThreshold = .5, this._fireColors = c.RedFireColors, this.updateShaderUniforms(), this.refreshRate = 1
        }
        return __extends(c, b), c.prototype.updateShaderUniforms = function() {
            this.setFloat("time", this._time), this.setVector2("speed", this._speed), this.setFloat("shift", this._shift), this.setColor3("c1", this._fireColors[0]), this.setColor3("c2", this._fireColors[1]), this.setColor3("c3", this._fireColors[2]), this.setColor3("c4", this._fireColors[3]), this.setColor3("c5", this._fireColors[4]), this.setColor3("c6", this._fireColors[5]), this.setFloat("alphaThreshold", this._alphaThreshold)
        }, c.prototype.render = function(a) {
            this._autoGenerateTime && (this._time += .03 * this.getScene().getAnimationRatio(), this.updateShaderUniforms()), b.prototype.render.call(this, a)
        }, Object.defineProperty(c, "PurpleFireColors", {
            get: function() {
                return [new a.Color3(.5, 0, 1), new a.Color3(.9, 0, 1), new a.Color3(.2, 0, 1), new a.Color3(1, .9, 1), new a.Color3(.1, .1, 1), new a.Color3(.9, .9, 1)]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "GreenFireColors", {
            get: function() {
                return [new a.Color3(.5, 1, 0), new a.Color3(.5, 1, 0), new a.Color3(.3, .4, 0), new a.Color3(.5, 1, 0), new a.Color3(.2, 0, 0), new a.Color3(.5, 1, 0)]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "RedFireColors", {
            get: function() {
                return [new a.Color3(.5, 0, .1), new a.Color3(.9, 0, 0), new a.Color3(.2, 0, 0), new a.Color3(1, .9, 0), new a.Color3(.1, .1, .1), new a.Color3(.9, .9, .9)]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c, "BlueFireColors", {
            get: function() {
                return [new a.Color3(.1, 0, .5), new a.Color3(0, 0, .5), new a.Color3(.1, 0, .2), new a.Color3(0, 0, 1), new a.Color3(.1, .2, .3), new a.Color3(0, .2, .9)]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "fireColors", {
            get: function() {
                return this._fireColors
            },
            set: function(a) {
                this._fireColors = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "time", {
            get: function() {
                return this._time
            },
            set: function(a) {
                this._time = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "speed", {
            get: function() {
                return this._speed
            },
            set: function(a) {
                this._speed = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "shift", {
            get: function() {
                return this._shift
            },
            set: function(a) {
                this._shift = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "alphaThreshold", {
            get: function() {
                return this._alphaThreshold
            },
            set: function(a) {
                this._alphaThreshold = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.FireProceduralTexture = c;
    var d = function(b) {
        function c(c, d, e, f, g) {
            b.call(this, c, d, "cloud", e, f, g), this._skyColor = new a.Color3(.15, .68, 1), this._cloudColor = new a.Color3(1, 1, 1), this.updateShaderUniforms(), this.refreshRate = 0
        }
        return __extends(c, b), c.prototype.updateShaderUniforms = function() {
            this.setColor3("skyColor", this._skyColor), this.setColor3("cloudColor", this._cloudColor)
        }, Object.defineProperty(c.prototype, "skyColor", {
            get: function() {
                return this._skyColor
            },
            set: function(a) {
                this._skyColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "cloudColor", {
            get: function() {
                return this._cloudColor
            },
            set: function(a) {
                this._cloudColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.CloudProceduralTexture = d;
    var e = function(b) {
        function c(c, d, e, f, g) {
            b.call(this, c, d, "grass", e, f, g), this._herb1 = new a.Color3(.29, .38, .02), this._herb2 = new a.Color3(.36, .49, .09), this._herb3 = new a.Color3(.51, .6, .28), this._groundColor = new a.Color3(1, 1, 1), this._grassColors = [new a.Color3(.29, .38, .02), new a.Color3(.36, .49, .09), new a.Color3(.51, .6, .28)], this.updateShaderUniforms(), this.refreshRate = 0
        }
        return __extends(c, b), c.prototype.updateShaderUniforms = function() {
            this.setColor3("herb1Color", this._grassColors[0]), this.setColor3("herb2Color", this._grassColors[1]), this.setColor3("herb3Color", this._grassColors[2]), this.setColor3("groundColor", this._groundColor)
        }, Object.defineProperty(c.prototype, "grassColors", {
            get: function() {
                return this._grassColors
            },
            set: function(a) {
                this._grassColors = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "groundColor", {
            get: function() {
                return this._groundColor
            },
            set: function(a) {
                this.groundColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.GrassProceduralTexture = e;
    var f = function(b) {
        function c(c, d, e, f, g) {
            b.call(this, c, d, "road", e, f, g), this._roadColor = new a.Color3(.53, .53, .53), this.updateShaderUniforms(), this.refreshRate = 0
        }
        return __extends(c, b), c.prototype.updateShaderUniforms = function() {
            this.setColor3("roadColor", this._roadColor)
        }, Object.defineProperty(c.prototype, "roadColor", {
            get: function() {
                return this._roadColor
            },
            set: function(a) {
                this._roadColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.RoadProceduralTexture = f;
    var g = function(b) {
        function c(c, d, e, f, g) {
            b.call(this, c, d, "brick", e, f, g), this._numberOfBricksHeight = 15, this._numberOfBricksWidth = 5, this._jointColor = new a.Color3(.72, .72, .72), this._brickColor = new a.Color3(.77, .47, .4), this.updateShaderUniforms(), this.refreshRate = 0
        }
        return __extends(c, b), c.prototype.updateShaderUniforms = function() {
            this.setFloat("numberOfBricksHeight", this._numberOfBricksHeight), this.setFloat("numberOfBricksWidth", this._numberOfBricksWidth), this.setColor3("brickColor", this._brickColor), this.setColor3("jointColor", this._jointColor)
        }, Object.defineProperty(c.prototype, "numberOfBricksHeight", {
            get: function() {
                return this._numberOfBricksHeight
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "cloudColor", {
            set: function(a) {
                this._numberOfBricksHeight = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "numberOfBricksWidth", {
            get: function() {
                return this._numberOfBricksWidth
            },
            set: function(a) {
                this._numberOfBricksHeight = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "jointColor", {
            get: function() {
                return this._jointColor
            },
            set: function(a) {
                this._jointColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "brickColor", {
            get: function() {
                return this._brickColor
            },
            set: function(a) {
                this._brickColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.BrickProceduralTexture = g;
    var h = function(b) {
        function c(c, d, e, f, g) {
            b.call(this, c, d, "marble", e, f, g), this._numberOfTilesHeight = 3, this._numberOfTilesWidth = 3, this._amplitude = 9, this._marbleColor = new a.Color3(.77, .47, .4), this._jointColor = new a.Color3(.72, .72, .72), this.updateShaderUniforms(), this.refreshRate = 0
        }
        return __extends(c, b), c.prototype.updateShaderUniforms = function() {
            this.setFloat("numberOfTilesHeight", this._numberOfTilesHeight), this.setFloat("numberOfTilesWidth", this._numberOfTilesWidth), this.setFloat("amplitude", this._amplitude), this.setColor3("marbleColor", this._marbleColor), this.setColor3("jointColor", this._jointColor)
        }, Object.defineProperty(c.prototype, "numberOfTilesHeight", {
            get: function() {
                return this._numberOfTilesHeight
            },
            set: function(a) {
                this._numberOfTilesHeight = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "numberOfTilesWidth", {
            get: function() {
                return this._numberOfTilesWidth
            },
            set: function(a) {
                this._numberOfTilesWidth = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "jointColor", {
            get: function() {
                return this._jointColor
            },
            set: function(a) {
                this._jointColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "marbleColor", {
            get: function() {
                return this._marbleColor
            },
            set: function(a) {
                this._marbleColor = a, this.updateShaderUniforms()
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.MarbleProceduralTexture = h
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d, e, f, g) {
            b.call(this, a, d, null, e, f, g), this._animate = !0, this._time = 0, this._texturePath = c, this.loadJson(c), this.refreshRate = 1
        }
        return __extends(c, b), c.prototype.loadJson = function(b) {
            function c() {
                a.Tools.Log("No config file found in " + b + " trying to use ShadersStore or DOM element");
                try {
                    e.setFragment(e._texturePath)
                } catch (c) {
                    a.Tools.Error("No json or ShaderStore or DOM element found for CustomProceduralTexture")
                }
            }
            var d = this,
                e = this,
                f = b + "/config.json",
                g = new XMLHttpRequest;
            g.open("GET", f, !0), g.addEventListener("load", function() {
                if (200 === g.status || a.Tools.ValidateXHRData(g, 1)) try {
                    d._config = JSON.parse(g.response), d.updateShaderUniforms(), d.updateTextures(), d.setFragment(d._texturePath + "/custom"), d._animate = d._config.animate, d.refreshRate = d._config.refreshrate
                } catch (b) {
                    c()
                } else c()
            }, !1), g.addEventListener("error", function() {
                c()
            }, !1);
            try {
                g.send()
            } catch (h) {
                a.Tools.Error("CustomProceduralTexture: Error on XHR send request.")
            }
        }, c.prototype.isReady = function() {
            if (!b.prototype.isReady.call(this)) return !1;
            for (var a in this._textures) {
                var c = this._textures[a];
                if (!c.isReady()) return !1
            }
            return !0
        }, c.prototype.render = function(a) {
            this._animate && (this._time += .03 * this.getScene().getAnimationRatio(), this.updateShaderUniforms()), b.prototype.render.call(this, a)
        }, c.prototype.updateTextures = function() {
            for (var b = 0; b < this._config.sampler2Ds.length; b++) this.setTexture(this._config.sampler2Ds[b].sample2Dname, new a.Texture(this._texturePath + "/" + this._config.sampler2Ds[b].textureRelativeUrl, this.getScene()))
        }, c.prototype.updateShaderUniforms = function() {
            if (this._config)
                for (var b = 0; b < this._config.uniforms.length; b++) {
                    var c = this._config.uniforms[b];
                    switch (c.type) {
                        case "float":
                            this.setFloat(c.name, c.value);
                            break;
                        case "color3":
                            this.setColor3(c.name, new a.Color3(c.r, c.g, c.b));
                            break;
                        case "color4":
                            this.setColor4(c.name, new a.Color4(c.r, c.g, c.b, c.a));
                            break;
                        case "vector2":
                            this.setVector2(c.name, new a.Vector2(c.x, c.y));
                            break;
                        case "vector3":
                            this.setVector3(c.name, new a.Vector3(c.x, c.y, c.z))
                    }
                }
            this.setFloat("time", this._time)
        }, Object.defineProperty(c.prototype, "animate", {
            get: function() {
                return this._animate
            },
            set: function(a) {
                this._animate = a
            },
            enumerable: !0,
            configurable: !0
        }), c
    }(a.ProceduralTexture);
    a.CustomProceduralTexture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f) {
            var g = this;
            b.call(this, c, d, e, f, !0), this.mirrorPlane = new a.Plane(0, 1, 0, 1), this._transformMatrix = a.Matrix.Zero(), this._mirrorMatrix = a.Matrix.Zero(), this.onBeforeRender = function() {
                a.Matrix.ReflectionToRef(g.mirrorPlane, g._mirrorMatrix), g._savedViewMatrix = e.getViewMatrix(), g._mirrorMatrix.multiplyToRef(g._savedViewMatrix, g._transformMatrix), e.setTransformMatrix(g._transformMatrix, e.getProjectionMatrix()), e.clipPlane = g.mirrorPlane, e.getEngine().cullBackFaces = !1
            }, this.onAfterRender = function() {
                e.setTransformMatrix(g._savedViewMatrix, e.getProjectionMatrix()), e.getEngine().cullBackFaces = !0, delete e.clipPlane
            }
        }
        return __extends(c, b), c.prototype.clone = function() {
            var b = this.getSize(),
                c = new a.MirrorTexture(this.name, b.width, this.getScene(), this._generateMipMaps);
            return c.hasAlpha = this.hasAlpha, c.level = this.level, c.mirrorPlane = this.mirrorPlane.clone(), c.renderList = this.renderList.slice(0), c
        }, c
    }(a.RenderTargetTexture);
    a.MirrorTexture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f, g) {
            void 0 === g && (g = a.Texture.TRILINEAR_SAMPLINGMODE), b.call(this, null, e, !f), this.name = c, this.wrapU = a.Texture.CLAMP_ADDRESSMODE, this.wrapV = a.Texture.CLAMP_ADDRESSMODE, this._generateMipMaps = f, d.getContext ? (this._canvas = d, this._texture = e.getEngine().createDynamicTexture(d.width, d.height, f, g)) : (this._canvas = document.createElement("canvas"), this._texture = d.width ? e.getEngine().createDynamicTexture(d.width, d.height, f, g) : e.getEngine().createDynamicTexture(d, d, f, g));
            var h = this.getSize();
            this._canvas.width = h.width, this._canvas.height = h.height, this._context = this._canvas.getContext("2d")
        }
        return __extends(c, b), Object.defineProperty(c.prototype, "canRescale", {
            get: function() {
                return !0
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.scale = function(a) {
            var b = this.getSize();
            b.width *= a, b.height *= a, this._canvas.width = b.width, this._canvas.height = b.height, this.releaseInternalTexture(), this._texture = this.getScene().getEngine().createDynamicTexture(b.width, b.height, this._generateMipMaps, this._samplingMode)
        }, c.prototype.getContext = function() {
            return this._context
        }, c.prototype.clear = function() {
            var a = this.getSize();
            this._context.fillRect(0, 0, a.width, a.height)
        }, c.prototype.update = function(a) {
            this.getScene().getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === a ? !0 : a)
        }, c.prototype.drawText = function(a, b, c, d, e, f, g, h) {
            void 0 === h && (h = !0);
            var i = this.getSize();
            if (f && (this._context.fillStyle = f, this._context.fillRect(0, 0, i.width, i.height)), this._context.font = d, null === b) {
                var j = this._context.measureText(a);
                b = (i.width - j.width) / 2
            }
            this._context.fillStyle = e, this._context.fillText(a, b, c), h && this.update(g)
        }, c.prototype.clone = function() {
            var a = this.getSize(),
                b = new c(this.name, a.width, this.getScene(), this._generateMipMaps);
            return b.hasAlpha = this.hasAlpha, b.level = this.level, b.wrapU = this.wrapU, b.wrapV = this.wrapV, b
        }, c
    }(a.Texture);
    a.DynamicTexture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f, g, h, i) {
            var j = this;
            void 0 === i && (i = a.Texture.TRILINEAR_SAMPLINGMODE), b.call(this, null, f, !g, h), this._autoLaunch = !0, this.name = c, this.wrapU = a.Texture.WRAP_ADDRESSMODE, this.wrapV = a.Texture.WRAP_ADDRESSMODE;
            var k = e.width || e,
                l = e.height || e;
            this._texture = f.getEngine().createDynamicTexture(k, l, g, i);
            var m = this.getSize();
            this.video = document.createElement("video"), this.video.width = m.width, this.video.height = m.height, this.video.autoplay = !1, this.video.loop = !0, this.video.addEventListener("canplaythrough", function() {
                j._texture && (j._texture.isReady = !0)
            }), d.forEach(function(a) {
                var b = document.createElement("source");
                b.src = a, j.video.appendChild(b)
            }), this._lastUpdate = a.Tools.Now
        }
        return __extends(c, b), c.prototype.update = function() {
            this._autoLaunch && (this._autoLaunch = !1, this.video.play());
            var b = a.Tools.Now;
            return b - this._lastUpdate < 15 ? !1 : (this._lastUpdate = b, this.getScene().getEngine().updateVideoTexture(this._texture, this.video, this._invertY), !0)
        }, c
    }(a.Texture);
    a.VideoTexture = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a() {
            this._defines = {}, this._currentRank = 32, this._maxRank = -1
        }
        return a.prototype.addFallback = function(a, b) {
            this._defines[a] || (a < this._currentRank && (this._currentRank = a), a > this._maxRank && (this._maxRank = a), this._defines[a] = new Array), this._defines[a].push(b)
        }, Object.defineProperty(a.prototype, "isMoreFallbacks", {
            get: function() {
                return this._currentRank <= this._maxRank
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.reduce = function(a) {
            for (var b = this._defines[this._currentRank], c = 0; c < b.length; c++) a = a.replace("#define " + b[c], "");
            return this._currentRank++, a
        }, a
    }();
    a.EffectFallbacks = b;
    var c = function() {
        function b(a, b, c, d, e, f, g, h, i) {
            var j = this;
            this._isReady = !1, this._compilationError = "", this._valueCache = [], this._engine = e, this.name = a, this.defines = f, this._uniformsNames = c.concat(d), this._samplers = d, this._attributesNames = b, this.onError = i, this.onCompiled = h;
            var k, l;
            a.vertexElement ? (k = document.getElementById(a.vertexElement), k || (k = a.vertexElement)) : k = a.vertex || a, a.fragmentElement ? (l = document.getElementById(a.fragmentElement), l || (l = a.fragmentElement)) : l = a.fragment || a, this._loadVertexShader(k, function(a) {
                j._loadFragmentShader(l, function(c) {
                    j._prepareEffect(a, c, b, f, g)
                })
            })
        }
        return b.prototype.isReady = function() {
            return this._isReady
        }, b.prototype.getProgram = function() {
            return this._program
        }, b.prototype.getAttributesNames = function() {
            return this._attributesNames
        }, b.prototype.getAttributeLocation = function(a) {
            return this._attributes[a]
        }, b.prototype.getAttributeLocationByName = function(a) {
            var b = this._attributesNames.indexOf(a);
            return this._attributes[b]
        }, b.prototype.getAttributesCount = function() {
            return this._attributes.length
        }, b.prototype.getUniformIndex = function(a) {
            return this._uniformsNames.indexOf(a)
        }, b.prototype.getUniform = function(a) {
            return this._uniforms[this._uniformsNames.indexOf(a)]
        }, b.prototype.getSamplers = function() {
            return this._samplers
        }, b.prototype.getCompilationError = function() {
            return this._compilationError
        }, b.prototype._loadVertexShader = function(c, d) {
            if (c instanceof HTMLElement) {
                var e = a.Tools.GetDOMTextContent(c);
                return void d(e)
            }
            if (b.ShadersStore[c + "VertexShader"]) return void d(b.ShadersStore[c + "VertexShader"]);
            var f;
            f = "." === c[0] ? c : a.Engine.ShadersRepository + c, a.Tools.LoadFile(f + ".vertex.fx", d)
        }, b.prototype._loadFragmentShader = function(c, d) {
            if (c instanceof HTMLElement) {
                var e = a.Tools.GetDOMTextContent(c);
                return void d(e)
            }
            if (b.ShadersStore[c + "PixelShader"]) return void d(b.ShadersStore[c + "PixelShader"]);
            if (b.ShadersStore[c + "FragmentShader"]) return void d(b.ShadersStore[c + "FragmentShader"]);
            var f;
            f = "." === c[0] ? c : a.Engine.ShadersRepository + c, a.Tools.LoadFile(f + ".fragment.fx", d)
        }, b.prototype._prepareEffect = function(b, c, d, e, f) {
            try {
                var g = this._engine;
                this._program = g.createShaderProgram(b, c, e), this._uniforms = g.getUniforms(this._program, this._uniformsNames), this._attributes = g.getAttributes(this._program, d);
                for (var h = 0; h < this._samplers.length; h++) {
                    var i = this.getUniform(this._samplers[h]);
                    null == i && (this._samplers.splice(h, 1), h--)
                }
                g.bindSamplers(this), this._isReady = !0, this.onCompiled && this.onCompiled(this)
            } catch (j) {
                if (-1 !== j.message.indexOf("highp")) return b = b.replace("precision highp float", "precision mediump float"), c = c.replace("precision highp float", "precision mediump float"), void this._prepareEffect(b, c, d, e, f);
                f && f.isMoreFallbacks ? (e = f.reduce(e), this._prepareEffect(b, c, d, e, f)) : (a.Tools.Error("Unable to compile effect: " + this.name), a.Tools.Error("Defines: " + e), a.Tools.Error("Error: " + j.message), this._compilationError = j.message, this.onError && this.onError(this, this._compilationError))
            }
        }, b.prototype._bindTexture = function(a, b) {
            this._engine._bindTexture(this._samplers.indexOf(a), b)
        }, b.prototype.setTexture = function(a, b) {
            this._engine.setTexture(this._samplers.indexOf(a), b)
        }, b.prototype.setTextureFromPostProcess = function(a, b) {
            this._engine.setTextureFromPostProcess(this._samplers.indexOf(a), b)
        }, b.prototype._cacheFloat2 = function(a, b, c) {
            return this._valueCache[a] ? (this._valueCache[a][0] = b, void(this._valueCache[a][1] = c)) : void(this._valueCache[a] = [b, c])
        }, b.prototype._cacheFloat3 = function(a, b, c, d) {
            return this._valueCache[a] ? (this._valueCache[a][0] = b, this._valueCache[a][1] = c, void(this._valueCache[a][2] = d)) : void(this._valueCache[a] = [b, c, d])
        }, b.prototype._cacheFloat4 = function(a, b, c, d, e) {
            return this._valueCache[a] ? (this._valueCache[a][0] = b, this._valueCache[a][1] = c, this._valueCache[a][2] = d, void(this._valueCache[a][3] = e)) : void(this._valueCache[a] = [b, c, d, e])
        }, b.prototype.setArray = function(a, b) {
            return this._engine.setArray(this.getUniform(a), b), this
        }, b.prototype.setArray2 = function(a, b) {
            return this._engine.setArray2(this.getUniform(a), b), this
        }, b.prototype.setArray3 = function(a, b) {
            return this._engine.setArray3(this.getUniform(a), b), this
        }, b.prototype.setArray4 = function(a, b) {
            return this._engine.setArray4(this.getUniform(a), b), this
        }, b.prototype.setMatrices = function(a, b) {
            return this._engine.setMatrices(this.getUniform(a), b), this
        }, b.prototype.setMatrix = function(a, b) {
            return this._engine.setMatrix(this.getUniform(a), b), this
        }, b.prototype.setFloat = function(a, b) {
            return this._valueCache[a] && this._valueCache[a] === b ? this : (this._valueCache[a] = b, this._engine.setFloat(this.getUniform(a), b), this)
        }, b.prototype.setBool = function(a, b) {
            return this._valueCache[a] && this._valueCache[a] === b ? this : (this._valueCache[a] = b, this._engine.setBool(this.getUniform(a), b ? 1 : 0), this)
        }, b.prototype.setVector2 = function(a, b) {
            return this._valueCache[a] && this._valueCache[a][0] === b.x && this._valueCache[a][1] === b.y ? this : (this._cacheFloat2(a, b.x, b.y), this._engine.setFloat2(this.getUniform(a), b.x, b.y), this)
        }, b.prototype.setFloat2 = function(a, b, c) {
            return this._valueCache[a] && this._valueCache[a][0] === b && this._valueCache[a][1] === c ? this : (this._cacheFloat2(a, b, c), this._engine.setFloat2(this.getUniform(a), b, c), this)
        }, b.prototype.setVector3 = function(a, b) {
            return this._valueCache[a] && this._valueCache[a][0] === b.x && this._valueCache[a][1] === b.y && this._valueCache[a][2] === b.z ? this : (this._cacheFloat3(a, b.x, b.y, b.z), this._engine.setFloat3(this.getUniform(a), b.x, b.y, b.z), this)
        }, b.prototype.setFloat3 = function(a, b, c, d) {
            return this._valueCache[a] && this._valueCache[a][0] === b && this._valueCache[a][1] === c && this._valueCache[a][2] === d ? this : (this._cacheFloat3(a, b, c, d), this._engine.setFloat3(this.getUniform(a), b, c, d), this)
        }, b.prototype.setFloat4 = function(a, b, c, d, e) {
            return this._valueCache[a] && this._valueCache[a][0] === b && this._valueCache[a][1] === c && this._valueCache[a][2] === d && this._valueCache[a][3] === e ? this : (this._cacheFloat4(a, b, c, d, e), this._engine.setFloat4(this.getUniform(a), b, c, d, e), this)
        }, b.prototype.setColor3 = function(a, b) {
            return this._valueCache[a] && this._valueCache[a][0] === b.r && this._valueCache[a][1] === b.g && this._valueCache[a][2] === b.b ? this : (this._cacheFloat3(a, b.r, b.g, b.b), this._engine.setColor3(this.getUniform(a), b), this)
        }, b.prototype.setColor4 = function(a, b, c) {
            return this._valueCache[a] && this._valueCache[a][0] === b.r && this._valueCache[a][1] === b.g && this._valueCache[a][2] === b.b && this._valueCache[a][3] === c ? this : (this._cacheFloat4(a, b.r, b.g, b.b, c), this._engine.setColor4(this.getUniform(a), b, c), this)
        }, b.ShadersStore = {
            anaglyphPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform sampler2D leftSampler;\n\nvoid main(void)\n{\n    vec4 leftFrag = texture2D(leftSampler, vUV);\n    leftFrag = vec4(1.0, leftFrag.g, leftFrag.b, 1.0);\n\n	vec4 rightFrag = texture2D(textureSampler, vUV);\n    rightFrag = vec4(rightFrag.r, 1.0, 1.0, 1.0);\n\n    gl_FragColor = vec4(rightFrag.rgb * leftFrag.rgb, 1.0);\n}",
            blackAndWhitePixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nvoid main(void) \n{\n	float luminance = dot(texture2D(textureSampler, vUV).rgb, vec3(0.3, 0.59, 0.11));\n	gl_FragColor = vec4(luminance, luminance, luminance, 1.0);\n}",
            blurPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\n// Parameters\nuniform vec2 screenSize;\nuniform vec2 direction;\nuniform float blurWidth;\n\nvoid main(void)\n{\n	float weights[7];\n	weights[0] = 0.05;\n	weights[1] = 0.1;\n	weights[2] = 0.2;\n	weights[3] = 0.3;\n	weights[4] = 0.2;\n	weights[5] = 0.1;\n	weights[6] = 0.05;\n\n	vec2 texelSize = vec2(1.0 / screenSize.x, 1.0 / screenSize.y);\n	vec2 texelStep = texelSize * direction * blurWidth;\n	vec2 start = vUV - 3.0 * texelStep;\n\n	vec4 baseColor = vec4(0., 0., 0., 0.);\n	vec2 texelOffset = vec2(0., 0.);\n\n	for (int i = 0; i < 7; i++)\n	{\n		baseColor += texture2D(textureSampler, start + texelOffset) * weights[i];\n		texelOffset += texelStep;\n	}\n\n	gl_FragColor = baseColor;\n}",
            brickPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vPosition;\nvarying vec2 vUV;\n\nuniform float numberOfBricksHeight;\nuniform float numberOfBricksWidth;\nuniform vec3 brickColor;\nuniform vec3 jointColor;\n\nfloat rand(vec2 n) {\n	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 n) {\n	const vec2 d = vec2(0.0, 1.0);\n	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\n\nfloat fbm(vec2 n) {\n	float total = 0.0, amplitude = 1.0;\n	for (int i = 0; i < 4; i++) {\n		total += noise(n) * amplitude;\n		n += n;\n		amplitude *= 0.5;\n	}\n	return total;\n}\n\nfloat round(float number){\n	return sign(number)*floor(abs(number) + 0.5);\n}\n\nvoid main(void)\n{\n	float brickW = 1.0 / numberOfBricksWidth;\n	float brickH = 1.0 / numberOfBricksHeight;\n	float jointWPercentage = 0.01;\n	float jointHPercentage = 0.05;\n	vec3 color = brickColor;\n	float yi = vUV.y / brickH;\n	float nyi = round(yi);\n	float xi = vUV.x / brickW;\n\n	if (mod(floor(yi), 2.0) == 0.0){\n		xi = xi - 0.5;\n	}\n\n	float nxi = round(xi);\n	vec2 brickvUV = vec2((xi - floor(xi)) / brickH, (yi - floor(yi)) /  brickW);\n\n	if (yi < nyi + jointHPercentage && yi > nyi - jointHPercentage){\n		color = mix(jointColor, vec3(0.37, 0.25, 0.25), (yi - nyi) / jointHPercentage + 0.2);\n	}\n	else if (xi < nxi + jointWPercentage && xi > nxi - jointWPercentage){\n		color = mix(jointColor, vec3(0.44, 0.44, 0.44), (xi - nxi) / jointWPercentage + 0.2);\n	}\n	else {\n		float brickColorSwitch = mod(floor(yi) + floor(xi), 3.0);\n\n		if (brickColorSwitch == 0.0)\n			color = mix(color, vec3(0.33, 0.33, 0.33), 0.3);\n		else if (brickColorSwitch == 2.0)\n			color = mix(color, vec3(0.11, 0.11, 0.11), 0.3);\n	}\n\n	gl_FragColor = vec4(color, 1.0);\n}",
            cloudPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vUV;\n\nuniform vec3 skyColor;\nuniform vec3 cloudColor;\n\nfloat rand(vec2 n) {\n	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 n) {\n	const vec2 d = vec2(0.0, 1.0);\n	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\n\nfloat fbm(vec2 n) {\n	float total = 0.0, amplitude = 1.0;\n	for (int i = 0; i < 4; i++) {\n		total += noise(n) * amplitude;\n		n += n;\n		amplitude *= 0.5;\n	}\n	return total;\n}\n\nvoid main() {\n\n	vec2 p = vUV * 12.0;\n	vec3 c = mix(skyColor, cloudColor, fbm(p));\n	gl_FragColor = vec4(c, 1);\n\n}",
            colorPixelShader: "precision highp float;\n\nuniform vec4 color;\n\nvoid main(void) {\n	gl_FragColor = color;\n}",
            colorVertexShader: "precision highp float;\n\n// Attributes\nattribute vec3 position;\n\n// Uniforms\nuniform mat4 worldViewProjection;\n\nvoid main(void) {\n	gl_Position = worldViewProjection * vec4(position, 1.0);\n}",
            convolutionPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nuniform vec2 screenSize;\nuniform float kernel[9];\n\nvoid main(void)\n{\n	vec2 onePixel = vec2(1.0, 1.0) / screenSize;\n	vec4 colorSum =\n		texture2D(textureSampler, vUV + onePixel * vec2(-1, -1)) * kernel[0] +\n		texture2D(textureSampler, vUV + onePixel * vec2(0, -1)) * kernel[1] +\n		texture2D(textureSampler, vUV + onePixel * vec2(1, -1)) * kernel[2] +\n		texture2D(textureSampler, vUV + onePixel * vec2(-1, 0)) * kernel[3] +\n		texture2D(textureSampler, vUV + onePixel * vec2(0, 0)) * kernel[4] +\n		texture2D(textureSampler, vUV + onePixel * vec2(1, 0)) * kernel[5] +\n		texture2D(textureSampler, vUV + onePixel * vec2(-1, 1)) * kernel[6] +\n		texture2D(textureSampler, vUV + onePixel * vec2(0, 1)) * kernel[7] +\n		texture2D(textureSampler, vUV + onePixel * vec2(1, 1)) * kernel[8];\n\n	float kernelWeight =\n		kernel[0] +\n		kernel[1] +\n		kernel[2] +\n		kernel[3] +\n		kernel[4] +\n		kernel[5] +\n		kernel[6] +\n		kernel[7] +\n		kernel[8];\n\n	if (kernelWeight <= 0.0) {\n		kernelWeight = 1.0;\n	}\n\n	gl_FragColor = vec4((colorSum / kernelWeight).rgb, 1);\n}",
            defaultPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define MAP_EXPLICIT	0.\n#define MAP_SPHERICAL	1.\n#define MAP_PLANAR		2.\n#define MAP_CUBIC		3.\n#define MAP_PROJECTION	4.\n#define MAP_SKYBOX		5.\n\n// Constants\nuniform vec3 vEyePosition;\nuniform vec3 vAmbientColor;\nuniform vec4 vDiffuseColor;\nuniform vec4 vSpecularColor;\nuniform vec3 vEmissiveColor;\n\n// Input\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n// Lights\n#ifdef LIGHT0\nuniform vec4 vLightData0;\nuniform vec4 vLightDiffuse0;\nuniform vec3 vLightSpecular0;\n#ifdef SHADOW0\nvarying vec4 vPositionFromLight0;\nuniform sampler2D shadowSampler0;\nuniform float darkness0;\n#endif\n#ifdef SPOTLIGHT0\nuniform vec4 vLightDirection0;\n#endif\n#ifdef HEMILIGHT0\nuniform vec3 vLightGround0;\n#endif\n#endif\n\n#ifdef LIGHT1\nuniform vec4 vLightData1;\nuniform vec4 vLightDiffuse1;\nuniform vec3 vLightSpecular1;\n#ifdef SHADOW1\nvarying vec4 vPositionFromLight1;\nuniform sampler2D shadowSampler1;\nuniform float darkness1;\n#endif\n#ifdef SPOTLIGHT1\nuniform vec4 vLightDirection1;\n#endif\n#ifdef HEMILIGHT1\nuniform vec3 vLightGround1;\n#endif\n#endif\n\n#ifdef LIGHT2\nuniform vec4 vLightData2;\nuniform vec4 vLightDiffuse2;\nuniform vec3 vLightSpecular2;\n#ifdef SHADOW2\nvarying vec4 vPositionFromLight2;\nuniform sampler2D shadowSampler2;\nuniform float darkness2;\n#endif\n#ifdef SPOTLIGHT2\nuniform vec4 vLightDirection2;\n#endif\n#ifdef HEMILIGHT2\nuniform vec3 vLightGround2;\n#endif\n#endif\n\n#ifdef LIGHT3\nuniform vec4 vLightData3;\nuniform vec4 vLightDiffuse3;\nuniform vec3 vLightSpecular3;\n#ifdef SHADOW3\nvarying vec4 vPositionFromLight3;\nuniform sampler2D shadowSampler3;\nuniform float darkness3;\n#endif\n#ifdef SPOTLIGHT3\nuniform vec4 vLightDirection3;\n#endif\n#ifdef HEMILIGHT3\nuniform vec3 vLightGround3;\n#endif\n#endif\n\n// Samplers\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform sampler2D ambientSampler;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY	\nvarying vec2 vOpacityUV;\nuniform sampler2D opacitySampler;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform sampler2D emissiveSampler;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform sampler2D specularSampler;\n#endif\n\n// Fresnel\n#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection, vec3 worldNormal, float bias, float power)\n{\n	float fresnelTerm = pow(bias + abs(dot(viewDirection, worldNormal)), power);\n	return clamp(fresnelTerm, 0., 1.);\n}\n#endif\n\n#ifdef DIFFUSEFRESNEL\nuniform vec4 diffuseLeftColor;\nuniform vec4 diffuseRightColor;\n#endif\n\n#ifdef OPACITYFRESNEL\nuniform vec4 opacityParts;\n#endif\n\n#ifdef REFLECTIONFRESNEL\nuniform vec4 reflectionLeftColor;\nuniform vec4 reflectionRightColor;\n#endif\n\n#ifdef EMISSIVEFRESNEL\nuniform vec4 emissiveLeftColor;\nuniform vec4 emissiveRightColor;\n#endif\n\n// Reflection\n#ifdef REFLECTION\nvarying vec3 vPositionUVW;\nuniform samplerCube reflectionCubeSampler;\nuniform sampler2D reflection2DSampler;\nuniform vec3 vReflectionInfos;\nuniform mat4 reflectionMatrix;\nuniform mat4 view;\n\nvec3 computeReflectionCoords(float mode, vec4 worldPos, vec3 worldNormal)\n{\n	if (mode == MAP_SPHERICAL)\n	{\n		vec3 coords = vec3(view * vec4(worldNormal, 0.0));\n\n		return vec3(reflectionMatrix * vec4(coords, 1.0));\n	}\n	else if (mode == MAP_PLANAR)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = normalize(reflect(viewDir, worldNormal));\n\n		return vec3(reflectionMatrix * vec4(coords, 1));\n	}\n	else if (mode == MAP_CUBIC)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = reflect(viewDir, worldNormal);\n\n		return vec3(reflectionMatrix * vec4(coords, 0));\n	}\n	else if (mode == MAP_PROJECTION)\n	{\n		return vec3(reflectionMatrix * (view * worldPos));\n	}\n	else if (mode == MAP_SKYBOX)\n	{\n		return vPositionUVW;\n	}\n\n	return vec3(0, 0, 0);\n}\n#endif\n\n// Shadows\n#ifdef SHADOWS\n\nfloat unpack(vec4 color)\n{\n	const vec4 bitShift = vec4(1. / (255. * 255. * 255.), 1. / (255. * 255.), 1. / 255., 1.);\n	return dot(color, bitShift);\n}\n\nfloat unpackHalf(vec2 color)\n{\n	return color.x + (color.y / 255.0);\n}\n\nfloat computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler, float darkness)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	float shadow = unpack(texture2D(shadowSampler, uv));\n\n	if (depth.z > shadow)\n	{\n		return darkness;\n	}\n	return 1.;\n}\n\nfloat computeShadowWithPCF(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	float visibility = 1.;\n\n	vec2 poissonDisk[4];\n	poissonDisk[0] = vec2(-0.94201624, -0.39906216);\n	poissonDisk[1] = vec2(0.94558609, -0.76890725);\n	poissonDisk[2] = vec2(-0.094184101, -0.92938870);\n	poissonDisk[3] = vec2(0.34495938, 0.29387760);\n\n	// Poisson Sampling\n	if (unpack(texture2D(shadowSampler, uv + poissonDisk[0] / 1500.0))  <  depth.z) visibility -= 0.2;\n	if (unpack(texture2D(shadowSampler, uv + poissonDisk[1] / 1500.0))  <  depth.z) visibility -= 0.2;\n	if (unpack(texture2D(shadowSampler, uv + poissonDisk[2] / 1500.0))  <  depth.z) visibility -= 0.2;\n	if (unpack(texture2D(shadowSampler, uv + poissonDisk[3] / 1500.0))  <  depth.z) visibility -= 0.2;\n\n	return visibility;\n}\n\n// Thanks to http://devmaster.net/\nfloat ChebychevInequality(vec2 moments, float t)\n{\n	if (t <= moments.x)\n	{\n		return 1.0;\n	}\n\n	float variance = moments.y - (moments.x * moments.x);\n	variance = max(variance, 0.);\n\n	float d = t - moments.x;\n	return variance / (variance + d * d);\n}\n\nfloat computeShadowWithVSM(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	vec4 texel = texture2D(shadowSampler, uv);\n\n	vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));\n	return clamp(1.0 - ChebychevInequality(moments, depth.z), 0., 1.0);\n}\n#endif\n\n// Bump\n#ifdef BUMP\n#extension GL_OES_standard_derivatives : enable\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform sampler2D bumpSampler;\n\n// Thanks to http://www.thetenthplanet.de/archives/1180\nmat3 cotangent_frame(vec3 normal, vec3 p, vec2 uv)\n{\n	// get edge vectors of the pixel triangle\n	vec3 dp1 = dFdx(p);\n	vec3 dp2 = dFdy(p);\n	vec2 duv1 = dFdx(uv);\n	vec2 duv2 = dFdy(uv);\n\n	// solve the linear system\n	vec3 dp2perp = cross(dp2, normal);\n	vec3 dp1perp = cross(normal, dp1);\n	vec3 tangent = dp2perp * duv1.x + dp1perp * duv2.x;\n	vec3 binormal = dp2perp * duv1.y + dp1perp * duv2.y;\n\n	// construct a scale-invariant frame \n	float invmax = inversesqrt(max(dot(tangent, tangent), dot(binormal, binormal)));\n	return mat3(tangent * invmax, binormal * invmax, normal);\n}\n\nvec3 perturbNormal(vec3 viewDir)\n{\n	vec3 map = texture2D(bumpSampler, vBumpUV).xyz;\n	map = map * 255. / 127. - 128. / 127.;\n	mat3 TBN = cotangent_frame(vNormalW * vBumpInfos.y, -viewDir, vBumpUV);\n	return normalize(TBN * map);\n}\n#endif\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return clamp(fogCoeff, 0.0, 1.0);\n}\n#endif\n\n// Light Computing\nstruct lightingInfo\n{\n	vec3 diffuse;\n	vec3 specular;\n};\n\nlightingInfo computeLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor, float range) {\n	lightingInfo result;\n\n	vec3 lightVectorW;\n	float attenuation = 1.0;\n	if (lightData.w == 0.)\n	{\n		vec3 direction = lightData.xyz - vPositionW;\n\n		attenuation = max(0., 1.0 - length(direction) / range);\n		lightVectorW = normalize(direction);\n	}\n	else\n	{\n		lightVectorW = normalize(-lightData.xyz);\n	}\n\n	// diffuse\n	float ndl = max(0., dot(vNormal, lightVectorW));\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightVectorW);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, max(1., vSpecularColor.a));\n\n	result.diffuse = ndl * diffuseColor * attenuation;\n	result.specular = specComp * specularColor * attenuation;\n\n	return result;\n}\n\nlightingInfo computeSpotLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 lightDirection, vec3 diffuseColor, vec3 specularColor, float range) {\n	lightingInfo result;\n\n	vec3 direction = lightData.xyz - vPositionW;\n	vec3 lightVectorW = normalize(direction);\n	float attenuation = max(0., 1.0 - length(direction) / range);\n\n	// diffuse\n	float cosAngle = max(0., dot(-lightDirection.xyz, lightVectorW));\n	float spotAtten = 0.0;\n\n	if (cosAngle >= lightDirection.w)\n	{\n		cosAngle = max(0., pow(cosAngle, lightData.w));\n		spotAtten = max(0., (cosAngle - lightDirection.w) / (1. - cosAngle));\n\n		// Diffuse\n		float ndl = max(0., dot(vNormal, -lightDirection.xyz));\n\n		// Specular\n		vec3 angleW = normalize(viewDirectionW - lightDirection.xyz);\n		float specComp = max(0., dot(vNormal, angleW));\n		specComp = pow(specComp, vSpecularColor.a);\n\n		result.diffuse = ndl * spotAtten * diffuseColor * attenuation;\n		result.specular = specComp * specularColor * spotAtten * attenuation;\n\n		return result;\n	}\n\n	result.diffuse = vec3(0.);\n	result.specular = vec3(0.);\n\n	return result;\n}\n\nlightingInfo computeHemisphericLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor, vec3 groundColor) {\n	lightingInfo result;\n\n	// Diffuse\n	float ndl = dot(vNormal, lightData.xyz) * 0.5 + 0.5;\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightData.xyz);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, vSpecularColor.a);\n\n	result.diffuse = mix(groundColor, diffuseColor, ndl);\n	result.specular = specComp * specularColor;\n\n	return result;\n}\n\nvoid main(void) {\n	// Clip plane\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n\n	vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\n\n	// Base color\n	vec4 baseColor = vec4(1., 1., 1., 1.);\n	vec3 diffuseColor = vDiffuseColor.rgb;\n\n	// Alpha\n	float alpha = vDiffuseColor.a;\n\n#ifdef VERTEXCOLOR\n	baseColor.rgb *= vColor.rgb;\n#endif\n\n#ifdef DIFFUSE\n	baseColor = texture2D(diffuseSampler, vDiffuseUV);\n\n#ifdef ALPHATEST\n	if (baseColor.a < 0.4)\n		discard;\n#endif\n\n#ifdef ALPHAFROMDIFFUSE\n	alpha *= baseColor.a;\n#endif\n\n	baseColor.rgb *= vDiffuseInfos.y;\n#endif\n\n	// Bump\n	vec3 normalW = normalize(vNormalW);\n\n#ifdef BUMP\n	normalW = perturbNormal(viewDirectionW);\n#endif\n\n	// Ambient color\n	vec3 baseAmbientColor = vec3(1., 1., 1.);\n\n#ifdef AMBIENT\n	baseAmbientColor = texture2D(ambientSampler, vAmbientUV).rgb * vAmbientInfos.y;\n#endif\n\n	// Lighting\n	vec3 diffuseBase = vec3(0., 0., 0.);\n	vec3 specularBase = vec3(0., 0., 0.);\n	float shadow = 1.;\n\n#ifdef LIGHT0\n#ifdef SPOTLIGHT0\n	lightingInfo info = computeSpotLighting(viewDirectionW, normalW, vLightData0, vLightDirection0, vLightDiffuse0.rgb, vLightSpecular0, vLightDiffuse0.a);\n#endif\n#ifdef HEMILIGHT0\n	lightingInfo info = computeHemisphericLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0.rgb, vLightSpecular0, vLightGround0);\n#endif\n#ifdef POINTDIRLIGHT0\n	lightingInfo info = computeLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0.rgb, vLightSpecular0, vLightDiffuse0.a);\n#endif\n#ifdef SHADOW0\n#ifdef SHADOWVSM0\n	shadow = computeShadowWithVSM(vPositionFromLight0, shadowSampler0);\n#else\n	#ifdef SHADOWPCF0\n		shadow = computeShadowWithPCF(vPositionFromLight0, shadowSampler0);\n	#else\n		shadow = computeShadow(vPositionFromLight0, shadowSampler0, darkness0);\n	#endif\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT1\n#ifdef SPOTLIGHT1\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData1, vLightDirection1, vLightDiffuse1.rgb, vLightSpecular1, vLightDiffuse1.a);\n#endif\n#ifdef HEMILIGHT1\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1.rgb, vLightSpecular1, vLightGround1);\n#endif\n#ifdef POINTDIRLIGHT1\n	info = computeLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1.rgb, vLightSpecular1, vLightDiffuse1.a);\n#endif\n#ifdef SHADOW1\n#ifdef SHADOWVSM1\n	shadow = computeShadowWithVSM(vPositionFromLight1, shadowSampler1);\n#else\n	#ifdef SHADOWPCF1\n		shadow = computeShadowWithPCF(vPositionFromLight1, shadowSampler1);\n	#else\n		shadow = computeShadow(vPositionFromLight1, shadowSampler1, darkness1);\n	#endif\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT2\n#ifdef SPOTLIGHT2\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData2, vLightDirection2, vLightDiffuse2.rgb, vLightSpecular2, vLightDiffuse2.a);\n#endif\n#ifdef HEMILIGHT2\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2.rgb, vLightSpecular2, vLightGround2);\n#endif\n#ifdef POINTDIRLIGHT2\n	info = computeLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2.rgb, vLightSpecular2, vLightDiffuse2.a);\n#endif\n#ifdef SHADOW2\n#ifdef SHADOWVSM2\n	shadow = computeShadowWithVSM(vPositionFromLight2, shadowSampler2);\n#else\n	#ifdef SHADOWPCF2\n		shadow = computeShadowWithPCF(vPositionFromLight2, shadowSampler2);\n	#else\n		shadow = computeShadow(vPositionFromLight2, shadowSampler2, darkness2);\n	#endif	\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT3\n#ifdef SPOTLIGHT3\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData3, vLightDirection3, vLightDiffuse3.rgb, vLightSpecular3, vLightDiffuse3.a);\n#endif\n#ifdef HEMILIGHT3\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3.rgb, vLightSpecular3, vLightGround3);\n#endif\n#ifdef POINTDIRLIGHT3\n	info = computeLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3.rgb, vLightSpecular3, vLightDiffuse3.a);\n#endif\n#ifdef SHADOW3\n#ifdef SHADOWVSM3\n	shadow = computeShadowWithVSM(vPositionFromLight3, shadowSampler3);\n#else\n	#ifdef SHADOWPCF3\n		shadow = computeShadowWithPCF(vPositionFromLight3, shadowSampler3);\n	#else\n		shadow = computeShadow(vPositionFromLight3, shadowSampler3, darkness3);\n	#endif	\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n	// Reflection\n	vec3 reflectionColor = vec3(0., 0., 0.);\n\n#ifdef REFLECTION\n	vec3 vReflectionUVW = computeReflectionCoords(vReflectionInfos.x, vec4(vPositionW, 1.0), normalW);\n\n	if (vReflectionInfos.z != 0.0)\n	{\n		reflectionColor = textureCube(reflectionCubeSampler, vReflectionUVW).rgb * vReflectionInfos.y * shadow;\n	}\n	else\n	{\n		vec2 coords = vReflectionUVW.xy;\n\n		if (vReflectionInfos.x == MAP_PROJECTION)\n		{\n			coords /= vReflectionUVW.z;\n		}\n\n		coords.y = 1.0 - coords.y;\n\n		reflectionColor = texture2D(reflection2DSampler, coords).rgb * vReflectionInfos.y * shadow;\n	}\n\n#ifdef REFLECTIONFRESNEL\n	float reflectionFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, reflectionRightColor.a, reflectionLeftColor.a);\n\n	reflectionColor *= reflectionLeftColor.rgb * (1.0 - reflectionFresnelTerm) + reflectionFresnelTerm * reflectionRightColor.rgb;\n#endif\n#endif\n\n#ifdef OPACITY\n	vec4 opacityMap = texture2D(opacitySampler, vOpacityUV);\n\n#ifdef OPACITYRGB\n	opacityMap.rgb = opacityMap.rgb * vec3(0.3, 0.59, 0.11);\n	alpha *= (opacityMap.x + opacityMap.y + opacityMap.z)* vOpacityInfos.y;\n#else\n	alpha *= opacityMap.a * vOpacityInfos.y;\n#endif\n\n#endif\n\n#ifdef VERTEXALPHA\n	alpha *= vColor.a;\n#endif\n\n#ifdef OPACITYFRESNEL\n	float opacityFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, opacityParts.z, opacityParts.w);\n\n	alpha += opacityParts.x * (1.0 - opacityFresnelTerm) + opacityFresnelTerm * opacityParts.y;\n#endif\n\n	// Emissive\n	vec3 emissiveColor = vEmissiveColor;\n#ifdef EMISSIVE\n	emissiveColor += texture2D(emissiveSampler, vEmissiveUV).rgb * vEmissiveInfos.y;\n#endif\n\n#ifdef EMISSIVEFRESNEL\n	float emissiveFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, emissiveRightColor.a, emissiveLeftColor.a);\n\n	emissiveColor *= emissiveLeftColor.rgb * (1.0 - emissiveFresnelTerm) + emissiveFresnelTerm * emissiveRightColor.rgb;\n#endif\n\n	// Specular map\n	vec3 specularColor = vSpecularColor.rgb;\n#ifdef SPECULAR\n	specularColor = texture2D(specularSampler, vSpecularUV).rgb * vSpecularInfos.y;\n#endif\n\n	// Fresnel\n#ifdef DIFFUSEFRESNEL\n	float diffuseFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, diffuseRightColor.a, diffuseLeftColor.a);\n\n	diffuseBase *= diffuseLeftColor.rgb * (1.0 - diffuseFresnelTerm) + diffuseFresnelTerm * diffuseRightColor.rgb;\n#endif\n\n	// Composition\n	vec3 finalDiffuse = clamp(diffuseBase * diffuseColor + emissiveColor + vAmbientColor, 0.0, 1.0) * baseColor.rgb;\n	vec3 finalSpecular = specularBase * specularColor;\n\n#ifdef SPECULAROVERALPHA\n	alpha = clamp(alpha + dot(finalSpecular, vec3(0.3, 0.59, 0.11)), 0., 1.);\n#endif\n\n	vec4 color = vec4(finalDiffuse * baseAmbientColor + finalSpecular + reflectionColor, alpha);\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	color.rgb = fog * color.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = color;\n}",
            defaultVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniforms\n\n#ifdef INSTANCES\nattribute vec4 world0;\nattribute vec4 world1;\nattribute vec4 world2;\nattribute vec4 world3;\n#else\nuniform mat4 world;\n#endif\n\nuniform mat4 view;\nuniform mat4 viewProjection;\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform mat4 ambientMatrix;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform mat4 opacityMatrix;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform mat4 specularMatrix;\n#endif\n\n#ifdef BUMP\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform mat4 bumpMatrix;\n#endif\n\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\n// Output\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nvarying float fClipDistance;\n#endif\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\n#ifdef SHADOWS\n#ifdef LIGHT0\nuniform mat4 lightMatrix0;\nvarying vec4 vPositionFromLight0;\n#endif\n#ifdef LIGHT1\nuniform mat4 lightMatrix1;\nvarying vec4 vPositionFromLight1;\n#endif\n#ifdef LIGHT2\nuniform mat4 lightMatrix2;\nvarying vec4 vPositionFromLight2;\n#endif\n#ifdef LIGHT3\nuniform mat4 lightMatrix3;\nvarying vec4 vPositionFromLight3;\n#endif\n#endif\n\n#ifdef REFLECTION\nvarying vec3 vPositionUVW;\n#endif\n\nvoid main(void) {\n	mat4 finalWorld;\n\n#ifdef REFLECTION\n	vPositionUVW = position;\n#endif \n\n#ifdef INSTANCES\n	finalWorld = mat4(world0, world1, world2, world3);\n#else\n	finalWorld = world;\n#endif\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n\n#ifdef BONES4\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = finalWorld * (m0 + m1 + m2 + m3);\n#else\n	finalWorld = finalWorld * (m0 + m1 + m2);\n#endif \n\n#endif\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n\n	vec4 worldPos = finalWorld * vec4(position, 1.0);\n	vPositionW = vec3(worldPos);\n	vNormalW = normalize(vec3(finalWorld * vec4(normal, 0.0)));\n\n	// Texture coordinates\n#ifndef UV1\n	vec2 uv = vec2(0., 0.);\n#endif\n#ifndef UV2\n	vec2 uv2 = vec2(0., 0.);\n#endif\n\n#ifdef DIFFUSE\n	if (vDiffuseInfos.x == 0.)\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef AMBIENT\n	if (vAmbientInfos.x == 0.)\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef OPACITY\n	if (vOpacityInfos.x == 0.)\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef EMISSIVE\n	if (vEmissiveInfos.x == 0.)\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef SPECULAR\n	if (vSpecularInfos.x == 0.)\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef BUMP\n	if (vBumpInfos.x == 0.)\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n	// Clip plane\n#ifdef CLIPPLANE\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n\n	// Fog\n#ifdef FOG\n	fFogDistance = (view * worldPos).z;\n#endif\n\n	// Shadows\n#ifdef SHADOWS\n#ifdef LIGHT0\n	vPositionFromLight0 = lightMatrix0 * worldPos;\n#endif\n#ifdef LIGHT1\n	vPositionFromLight1 = lightMatrix1 * worldPos;\n#endif\n#ifdef LIGHT2\n	vPositionFromLight2 = lightMatrix2 * worldPos;\n#endif\n#ifdef LIGHT3\n	vPositionFromLight3 = lightMatrix3 * worldPos;\n#endif\n#endif\n\n	// Vertex color\n#ifdef VERTEXCOLOR\n	vColor = color;\n#endif\n\n	// Point size\n#ifdef POINTSIZE\n	gl_PointSize = pointSize;\n#endif\n}",
            depthPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n#endif\n\nuniform float far;\n\nvoid main(void)\n{\n#ifdef ALPHATEST\n	if (texture2D(diffuseSampler, vUV).a < 0.4)\n		discard;\n#endif\n\n	float depth = (gl_FragCoord.z / gl_FragCoord.w) / far;\n	gl_FragColor = vec4(depth, depth * depth, 0.0, 1.0);\n}",
            depthVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attribute\nattribute vec3 position;\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniform\n#ifdef INSTANCES\nattribute vec4 world0;\nattribute vec4 world1;\nattribute vec4 world2;\nattribute vec4 world3;\n#else\nuniform mat4 world;\n#endif\n\nuniform mat4 viewProjection;\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform mat4 diffuseMatrix;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#endif\n\nvoid main(void)\n{\n#ifdef INSTANCES\n	mat4 finalWorld = mat4(world0, world1, world2, world3);\n#else\n	mat4 finalWorld = world;\n#endif\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = finalWorld * (m0 + m1 + m2 + m3);\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#else\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#endif\n\n#ifdef ALPHATEST\n#ifdef UV1\n	vUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n#endif\n#ifdef UV2\n	vUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n#endif\n#endif\n}",
            displayPassPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform sampler2D passSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(passSampler, vUV);\n}",
            filterPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nuniform mat4 kernelMatrix;\n\nvoid main(void)\n{\n	vec3 baseColor = texture2D(textureSampler, vUV).rgb;\n	vec3 updatedColor = (kernelMatrix * vec4(baseColor, 1.0)).rgb;\n\n	gl_FragColor = vec4(updatedColor, 1.0);\n}",
            firePixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform float time;\nuniform vec3 c1;\nuniform vec3 c2;\nuniform vec3 c3;\nuniform vec3 c4;\nuniform vec3 c5;\nuniform vec3 c6;\nuniform vec2 speed;\nuniform float shift;\nuniform float alphaThreshold;\n\nvarying vec2 vUV;\n\nfloat rand(vec2 n) {\n	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 n) {\n	const vec2 d = vec2(0.0, 1.0);\n	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\n\nfloat fbm(vec2 n) {\n	float total = 0.0, amplitude = 1.0;\n	for (int i = 0; i < 4; i++) {\n		total += noise(n) * amplitude;\n		n += n;\n		amplitude *= 0.5;\n	}\n	return total;\n}\n\nvoid main() {\n	vec2 p = vUV * 8.0;\n	float q = fbm(p - time * 0.1);\n	vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));\n	vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);\n	vec3 color = c * cos(shift * vUV.y);\n	float luminance = dot(color.rgb, vec3(0.3, 0.59, 0.11));\n\n	gl_FragColor = vec4(color, luminance * alphaThreshold + (1.0 - alphaThreshold));\n}",
            fxaaPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define FXAA_REDUCE_MIN   (1.0/128.0)\n#define FXAA_REDUCE_MUL   (1.0/8.0)\n#define FXAA_SPAN_MAX     8.0\n\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform vec2 texelSize;\n\nvoid main(){\n	vec2 localTexelSize = texelSize;\n	vec4 rgbNW = texture2D(textureSampler, (vUV + vec2(-1.0, -1.0) * localTexelSize));\n	vec4 rgbNE = texture2D(textureSampler, (vUV + vec2(1.0, -1.0) * localTexelSize));\n	vec4 rgbSW = texture2D(textureSampler, (vUV + vec2(-1.0, 1.0) * localTexelSize));\n	vec4 rgbSE = texture2D(textureSampler, (vUV + vec2(1.0, 1.0) * localTexelSize));\n	vec4 rgbM = texture2D(textureSampler, vUV);\n	vec4 luma = vec4(0.299, 0.587, 0.114, 1.0);\n	float lumaNW = dot(rgbNW, luma);\n	float lumaNE = dot(rgbNE, luma);\n	float lumaSW = dot(rgbSW, luma);\n	float lumaSE = dot(rgbSE, luma);\n	float lumaM = dot(rgbM, luma);\n	float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n	float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n	vec2 dir = vec2(-((lumaNW + lumaNE) - (lumaSW + lumaSE)), ((lumaNW + lumaSW) - (lumaNE + lumaSE)));\n\n	float dirReduce = max(\n		(lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL),\n		FXAA_REDUCE_MIN);\n\n	float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n	dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n		max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n		dir * rcpDirMin)) * localTexelSize;\n\n	vec4 rgbA = 0.5 * (\n		texture2D(textureSampler, vUV + dir * (1.0 / 3.0 - 0.5)) +\n		texture2D(textureSampler, vUV + dir * (2.0 / 3.0 - 0.5)));\n\n	vec4 rgbB = rgbA * 0.5 + 0.25 * (\n		texture2D(textureSampler, vUV + dir *  -0.5) +\n		texture2D(textureSampler, vUV + dir * 0.5));\n	float lumaB = dot(rgbB, luma);\n	if ((lumaB < lumaMin) || (lumaB > lumaMax)) {\n		gl_FragColor = rgbA;\n	}\n	else {\n		gl_FragColor = rgbB;\n	}\n}",
            grassPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vPosition;\nvarying vec2 vUV;\n\nuniform vec3 herb1Color;\nuniform vec3 herb2Color;\nuniform vec3 herb3Color;\nuniform vec3 groundColor;\n\nfloat rand(vec2 n) {\n	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 n) {\n	const vec2 d = vec2(0.0, 1.0);\n	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\n\nfloat fbm(vec2 n) {\n	float total = 0.0, amplitude = 1.0;\n	for (int i = 0; i < 4; i++) {\n		total += noise(n) * amplitude;\n		n += n;\n		amplitude *= 0.5;\n	}\n	return total;\n}\n\nvoid main(void) {\n	vec3 color = mix(groundColor, herb1Color, rand(gl_FragCoord.xy * 4.0));\n	color = mix(color, herb2Color, rand(gl_FragCoord.xy * 8.0));\n	color = mix(color, herb3Color, rand(gl_FragCoord.xy));\n	color = mix(color, herb1Color, fbm(gl_FragCoord.xy * 16.0));\n	gl_FragColor = vec4(color, 1.0);\n}",
            layerPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\n// Color\nuniform vec4 color;\n\nvoid main(void) {\n	vec4 baseColor = texture2D(textureSampler, vUV);\n\n	gl_FragColor = baseColor * color;\n}",
            layerVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Uniforms\nuniform mat4 textureMatrix;\n\n// Output\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n\n	vUV = vec2(textureMatrix * vec4(position * madd + madd, 1.0, 0.0));\n	gl_Position = vec4(position, 0.0, 1.0);\n}",
            legacydefaultPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define MAP_PROJECTION	4.\n\n// Constants\nuniform vec3 vEyePosition;\nuniform vec3 vAmbientColor;\nuniform vec4 vDiffuseColor;\nuniform vec4 vSpecularColor;\nuniform vec3 vEmissiveColor;\n\n// Input\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n// Lights\n#ifdef LIGHT0\nuniform vec4 vLightData0;\nuniform vec4 vLightDiffuse0;\nuniform vec3 vLightSpecular0;\n#ifdef SHADOW0\nvarying vec4 vPositionFromLight0;\nuniform sampler2D shadowSampler0;\n#endif\n#ifdef SPOTLIGHT0\nuniform vec4 vLightDirection0;\n#endif\n#ifdef HEMILIGHT0\nuniform vec3 vLightGround0;\n#endif\n#endif\n\n#ifdef LIGHT1\nuniform vec4 vLightData1;\nuniform vec4 vLightDiffuse1;\nuniform vec3 vLightSpecular1;\n#ifdef SHADOW1\nvarying vec4 vPositionFromLight1;\nuniform sampler2D shadowSampler1;\n#endif\n#ifdef SPOTLIGHT1\nuniform vec4 vLightDirection1;\n#endif\n#ifdef HEMILIGHT1\nuniform vec3 vLightGround1;\n#endif\n#endif\n\n#ifdef LIGHT2\nuniform vec4 vLightData2;\nuniform vec4 vLightDiffuse2;\nuniform vec3 vLightSpecular2;\n#ifdef SHADOW2\nvarying vec4 vPositionFromLight2;\nuniform sampler2D shadowSampler2;\n#endif\n#ifdef SPOTLIGHT2\nuniform vec4 vLightDirection2;\n#endif\n#ifdef HEMILIGHT2\nuniform vec3 vLightGround2;\n#endif\n#endif\n\n#ifdef LIGHT3\nuniform vec4 vLightData3;\nuniform vec4 vLightDiffuse3;\nuniform vec3 vLightSpecular3;\n#ifdef SHADOW3\nvarying vec4 vPositionFromLight3;\nuniform sampler2D shadowSampler3;\n#endif\n#ifdef SPOTLIGHT3\nuniform vec4 vLightDirection3;\n#endif\n#ifdef HEMILIGHT3\nuniform vec3 vLightGround3;\n#endif\n#endif\n\n// Samplers\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform sampler2D ambientSampler;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY	\nvarying vec2 vOpacityUV;\nuniform sampler2D opacitySampler;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nvarying vec3 vReflectionUVW;\nuniform samplerCube reflectionCubeSampler;\nuniform sampler2D reflection2DSampler;\nuniform vec3 vReflectionInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform sampler2D emissiveSampler;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform sampler2D specularSampler;\n#endif\n\n// Fresnel\n#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection, vec3 worldNormal, float bias, float power)\n{\n	float fresnelTerm = pow(bias + abs(dot(viewDirection, worldNormal)), power);\n	return clamp(fresnelTerm, 0., 1.);\n}\n#endif\n\n#ifdef DIFFUSEFRESNEL\nuniform vec4 diffuseLeftColor;\nuniform vec4 diffuseRightColor;\n#endif\n\n#ifdef OPACITYFRESNEL\nuniform vec4 opacityParts;\n#endif\n\n#ifdef REFLECTIONFRESNEL\nuniform vec4 reflectionLeftColor;\nuniform vec4 reflectionRightColor;\n#endif\n\n#ifdef EMISSIVEFRESNEL\nuniform vec4 emissiveLeftColor;\nuniform vec4 emissiveRightColor;\n#endif\n\n// Shadows\n#ifdef SHADOWS\n\nfloat unpack(vec4 color)\n{\n	const vec4 bitShift = vec4(1. / (255. * 255. * 255.), 1. / (255. * 255.), 1. / 255., 1.);\n	return dot(color, bitShift);\n}\n\nfloat unpackHalf(vec2 color)\n{\n	return color.x + (color.y / 255.0);\n}\n\nfloat computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	float shadow = unpack(texture2D(shadowSampler, uv));\n\n	if (depth.z > shadow)\n	{\n		return 0.;\n	}\n	return 1.;\n}\n\n// Thanks to http://devmaster.net/\nfloat ChebychevInequality(vec2 moments, float t)\n{\n	if (t <= moments.x)\n	{\n		return 1.0;\n	}\n\n	float variance = moments.y - (moments.x * moments.x);\n	variance = max(variance, 0.);\n\n	float d = t - moments.x;\n	return variance / (variance + d * d);\n}\n\nfloat computeShadowWithVSM(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	vec4 texel = texture2D(shadowSampler, uv);\n\n	vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));\n	return clamp(1.3 - ChebychevInequality(moments, depth.z), 0., 1.0);\n}\n#endif\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return clamp(fogCoeff, 0.0, 1.0);\n}\n#endif\n\n// Light Computing\nmat3 computeLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 diffuseColor, vec3 specularColor) {\n	mat3 result;\n\n	vec3 lightVectorW;\n	if (lightData.w == 0.)\n	{\n		lightVectorW = normalize(lightData.xyz - vPositionW);\n	}\n	else\n	{\n		lightVectorW = normalize(-lightData.xyz);\n	}\n\n	// diffuse\n	float ndl = max(0., dot(vNormal, lightVectorW));\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightVectorW);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = max(0., pow(specComp, max(1.0, vSpecularColor.a)));\n\n	result[0] = ndl * diffuseColor.rgb;\n	result[1] = specComp * specularColor;\n	result[2] = vec3(0.);\n\n	return result;\n}\n\nmat3 computeSpotLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 lightDirection, vec4 diffuseColor, vec3 specularColor) {\n	mat3 result;\n\n	vec3 lightVectorW = normalize(lightData.xyz - vPositionW);\n\n	// diffuse\n	float cosAngle = max(0., dot(-lightDirection.xyz, lightVectorW));\n	float spotAtten = 0.0;\n\n	if (cosAngle >= lightDirection.w)\n	{\n		cosAngle = max(0., pow(cosAngle, lightData.w));\n		spotAtten = max(0., (cosAngle - lightDirection.w) / (1. - cosAngle));\n\n		// Diffuse\n		float ndl = max(0., dot(vNormal, -lightDirection.xyz));\n\n		// Specular\n		vec3 angleW = normalize(viewDirectionW - lightDirection.xyz);\n		float specComp = max(0., dot(vNormal, angleW));\n		specComp = pow(specComp, vSpecularColor.a);\n\n		result[0] = ndl * spotAtten * diffuseColor.rgb;\n		result[1] = specComp * specularColor * spotAtten;\n		result[2] = vec3(0.);\n\n		return result;\n	}\n\n	result[0] = vec3(0.);\n	result[1] = vec3(0.);\n	result[2] = vec3(0.);\n\n	return result;\n}\n\nmat3 computeHemisphericLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 diffuseColor, vec3 specularColor, vec3 groundColor) {\n	mat3 result;\n\n	// Diffuse\n	float ndl = dot(vNormal, lightData.xyz) * 0.5 + 0.5;\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightData.xyz);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, vSpecularColor.a);\n\n	result[0] = mix(groundColor, diffuseColor.rgb, ndl);\n	result[1] = specComp * specularColor;\n	result[2] = vec3(0.);\n\n	return result;\n}\n\nvoid main(void) {\n	// Clip plane\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n\n	vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\n\n	// Base color\n	vec4 baseColor = vec4(1., 1., 1., 1.);\n	vec3 diffuseColor = vDiffuseColor.rgb;\n\n#ifdef VERTEXCOLOR\n	baseColor.rgb *= vColor.rgb;\n#endif\n\n#ifdef DIFFUSE\n	baseColor = texture2D(diffuseSampler, vDiffuseUV);\n\n#ifdef ALPHATEST\n	if (baseColor.a < 0.4)\n		discard;\n#endif\n\n	baseColor.rgb *= vDiffuseInfos.y;\n#endif\n\n	// Bump\n	vec3 normalW = normalize(vNormalW);\n\n	// Ambient color\n	vec3 baseAmbientColor = vec3(1., 1., 1.);\n\n#ifdef AMBIENT\n	baseAmbientColor = texture2D(ambientSampler, vAmbientUV).rgb * vAmbientInfos.y;\n#endif\n\n	// Lighting\n	vec3 diffuseBase = vec3(0., 0., 0.);\n	vec3 specularBase = vec3(0., 0., 0.);\n	float shadow = 1.;\n\n#ifdef LIGHT0\n#ifdef SPOTLIGHT0\n	mat3 info = computeSpotLighting(viewDirectionW, normalW, vLightData0, vLightDirection0, vLightDiffuse0, vLightSpecular0);\n#endif\n#ifdef HEMILIGHT0\n	mat3 info = computeHemisphericLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0, vLightSpecular0, vLightGround0);\n#endif\n#ifdef POINTDIRLIGHT0\n	mat3 info = computeLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0, vLightSpecular0);\n#endif\n#ifdef SHADOW0\n#ifdef SHADOWVSM0\n	shadow = computeShadowWithVSM(vPositionFromLight0, shadowSampler0);\n#else\n	shadow = computeShadow(vPositionFromLight0, shadowSampler0);\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n#ifdef LIGHT1\n#ifdef SPOTLIGHT1\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData1, vLightDirection1, vLightDiffuse1, vLightSpecular1);\n#endif\n#ifdef HEMILIGHT1\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1, vLightSpecular1, vLightGround1);\n#endif\n#ifdef POINTDIRLIGHT1\n	info = computeLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1, vLightSpecular1);\n#endif\n#ifdef SHADOW1\n#ifdef SHADOWVSM1\n	shadow = computeShadowWithVSM(vPositionFromLight1, shadowSampler1);\n#else\n	shadow = computeShadow(vPositionFromLight1, shadowSampler1);\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n#ifdef LIGHT2\n#ifdef SPOTLIGHT2\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData2, vLightDirection2, vLightDiffuse2, vLightSpecular2);\n#endif\n#ifdef HEMILIGHT2\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2, vLightSpecular2, vLightGround2);\n#endif\n#ifdef POINTDIRLIGHT2\n	info = computeLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2, vLightSpecular2);\n#endif\n#ifdef SHADOW2\n#ifdef SHADOWVSM2\n	shadow = computeShadowWithVSM(vPositionFromLight2, shadowSampler2);\n#else\n	shadow = computeShadow(vPositionFromLight2, shadowSampler2);\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n#ifdef LIGHT3\n#ifdef SPOTLIGHT3\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData3, vLightDirection3, vLightDiffuse3, vLightSpecular3);\n#endif\n#ifdef HEMILIGHT3\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3, vLightSpecular3, vLightGround3);\n#endif\n#ifdef POINTDIRLIGHT3\n	info = computeLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3, vLightSpecular3);\n#endif\n#ifdef SHADOW3\n#ifdef SHADOWVSM3\n	shadow = computeShadowWithVSM(vPositionFromLight3, shadowSampler3);\n#else\n	shadow = computeShadow(vPositionFromLight3, shadowSampler3);\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n	// Reflection\n	vec3 reflectionColor = vec3(0., 0., 0.);\n\n#ifdef REFLECTION\n	if (vReflectionInfos.z != 0.0)\n	{\n		reflectionColor = textureCube(reflectionCubeSampler, vReflectionUVW).rgb * vReflectionInfos.y;\n	}\n	else\n	{\n		vec2 coords = vReflectionUVW.xy;\n\n		if (vReflectionInfos.x == MAP_PROJECTION)\n		{\n			coords /= vReflectionUVW.z;\n		}\n\n		coords.y = 1.0 - coords.y;\n\n		reflectionColor = texture2D(reflection2DSampler, coords).rgb * vReflectionInfos.y;\n	}\n\n#ifdef REFLECTIONFRESNEL\n	float reflectionFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, reflectionRightColor.a, reflectionLeftColor.a);\n\n	reflectionColor *= reflectionLeftColor.rgb * (1.0 - reflectionFresnelTerm) + reflectionFresnelTerm * reflectionRightColor.rgb;\n#endif\n#endif\n\n	// Alpha\n	float alpha = vDiffuseColor.a;\n\n#ifdef OPACITY\n	vec4 opacityMap = texture2D(opacitySampler, vOpacityUV);\n#ifdef OPACITYRGB\n	opacityMap.rgb = opacityMap.rgb * vec3(0.3, 0.59, 0.11);\n	alpha *= (opacityMap.x + opacityMap.y + opacityMap.z)* vOpacityInfos.y;\n#else\n	alpha *= opacityMap.a * vOpacityInfos.y;\n#endif\n#endif\n\n#ifdef VERTEXALPHA\n	alpha *= vColor.a;\n#endif\n\n#ifdef OPACITYFRESNEL\n	float opacityFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, opacityParts.z, opacityParts.w);\n\n	alpha += opacityParts.x * (1.0 - opacityFresnelTerm) + opacityFresnelTerm * opacityParts.y;\n#endif\n\n	// Emissive\n	vec3 emissiveColor = vEmissiveColor;\n#ifdef EMISSIVE\n	emissiveColor += texture2D(emissiveSampler, vEmissiveUV).rgb * vEmissiveInfos.y;\n#endif\n\n#ifdef EMISSIVEFRESNEL\n	float emissiveFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, emissiveRightColor.a, emissiveLeftColor.a);\n\n	emissiveColor *= emissiveLeftColor.rgb * (1.0 - emissiveFresnelTerm) + emissiveFresnelTerm * emissiveRightColor.rgb;\n#endif\n\n	// Specular map\n	vec3 specularColor = vSpecularColor.rgb;\n#ifdef SPECULAR\n	specularColor = texture2D(specularSampler, vSpecularUV).rgb * vSpecularInfos.y;\n#endif\n\n	// Fresnel\n#ifdef DIFFUSEFRESNEL\n	float diffuseFresnelTerm = computeFresnelTerm(viewDirectionW, normalW, diffuseRightColor.a, diffuseLeftColor.a);\n\n	diffuseBase *= diffuseLeftColor.rgb * (1.0 - diffuseFresnelTerm) + diffuseFresnelTerm * diffuseRightColor.rgb;\n#endif\n\n	// Composition\n	vec3 finalDiffuse = clamp(diffuseBase * diffuseColor + emissiveColor + vAmbientColor, 0.0, 1.0) * baseColor.rgb;\n	vec3 finalSpecular = specularBase * specularColor;\n\n	vec4 color = vec4(finalDiffuse * baseAmbientColor + finalSpecular + reflectionColor, alpha);\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	color.rgb = fog * color.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = color;\n}",
            legacydefaultVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define MAP_EXPLICIT	0.\n#define MAP_SPHERICAL	1.\n#define MAP_PLANAR		2.\n#define MAP_CUBIC		3.\n#define MAP_PROJECTION	4.\n#define MAP_SKYBOX		5.\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniforms\nuniform mat4 world;\nuniform mat4 view;\nuniform mat4 viewProjection;\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform mat4 ambientMatrix;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform mat4 opacityMatrix;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nuniform vec3 vEyePosition;\nvarying vec3 vReflectionUVW;\nuniform vec3 vReflectionInfos;\nuniform mat4 reflectionMatrix;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform mat4 specularMatrix;\n#endif\n\n#ifdef BUMP\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform mat4 bumpMatrix;\n#endif\n\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n// Output\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nvarying float fClipDistance;\n#endif\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\n#ifdef SHADOWS\n#ifdef LIGHT0\nuniform mat4 lightMatrix0;\nvarying vec4 vPositionFromLight0;\n#endif\n#ifdef LIGHT1\nuniform mat4 lightMatrix1;\nvarying vec4 vPositionFromLight1;\n#endif\n#ifdef LIGHT2\nuniform mat4 lightMatrix2;\nvarying vec4 vPositionFromLight2;\n#endif\n#ifdef LIGHT3\nuniform mat4 lightMatrix3;\nvarying vec4 vPositionFromLight3;\n#endif\n#endif\n\n#ifdef REFLECTION\nvec3 computeReflectionCoords(float mode, vec4 worldPos, vec3 worldNormal)\n{\n	if (mode == MAP_SPHERICAL)\n	{\n		vec3 coords = vec3(view * vec4(worldNormal, 0.0));\n\n		return vec3(reflectionMatrix * vec4(coords, 1.0));\n	}\n	else if (mode == MAP_PLANAR)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = normalize(reflect(viewDir, worldNormal));\n\n		return vec3(reflectionMatrix * vec4(coords, 1));\n	}\n	else if (mode == MAP_CUBIC)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = reflect(viewDir, worldNormal);\n\n		return vec3(reflectionMatrix * vec4(coords, 0));\n	}\n	else if (mode == MAP_PROJECTION)\n	{\n		return vec3(reflectionMatrix * (view * worldPos));\n	}\n	else if (mode == MAP_SKYBOX)\n	{\n		return position;\n	}\n\n	return vec3(0, 0, 0);\n}\n#endif\n\nvoid main(void) {\n	mat4 finalWorld;\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n\n#ifdef BONES4\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = world * (m0 + m1 + m2 + m3);\n#else\n	finalWorld = world * (m0 + m1 + m2);\n#endif \n\n#else\n	finalWorld = world;\n#endif\n\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n\n	vec4 worldPos = finalWorld * vec4(position, 1.0);\n	vPositionW = vec3(worldPos);\n	vNormalW = normalize(vec3(finalWorld * vec4(normal, 0.0)));\n\n	// Texture coordinates\n#ifndef UV1\n	vec2 uv = vec2(0., 0.);\n#endif\n#ifndef UV2\n	vec2 uv2 = vec2(0., 0.);\n#endif\n\n#ifdef DIFFUSE\n	if (vDiffuseInfos.x == 0.)\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef AMBIENT\n	if (vAmbientInfos.x == 0.)\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef OPACITY\n	if (vOpacityInfos.x == 0.)\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef REFLECTION\n	vReflectionUVW = computeReflectionCoords(vReflectionInfos.x, vec4(vPositionW, 1.0), vNormalW);\n#endif\n\n#ifdef EMISSIVE\n	if (vEmissiveInfos.x == 0.)\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef SPECULAR\n	if (vSpecularInfos.x == 0.)\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef BUMP\n	if (vBumpInfos.x == 0.)\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n	// Clip plane\n#ifdef CLIPPLANE\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n\n	// Fog\n#ifdef FOG\n	fFogDistance = (view * worldPos).z;\n#endif\n\n	// Shadows\n#ifdef SHADOWS\n#ifdef LIGHT0\n	vPositionFromLight0 = lightMatrix0 * worldPos;\n#endif\n#ifdef LIGHT1\n	vPositionFromLight1 = lightMatrix1 * worldPos;\n#endif\n#ifdef LIGHT2\n	vPositionFromLight2 = lightMatrix2 * worldPos;\n#endif\n#ifdef LIGHT3\n	vPositionFromLight3 = lightMatrix3 * worldPos;\n#endif\n#endif\n\n	// Vertex color\n#ifdef VERTEXCOLOR\n	vColor = color;\n#endif\n}",
            lensFlarePixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\n// Color\nuniform vec4 color;\n\nvoid main(void) {\n	vec4 baseColor = texture2D(textureSampler, vUV);\n\n	gl_FragColor = baseColor * color;\n}",
            lensFlareVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Uniforms\nuniform mat4 viewportMatrix;\n\n// Output\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n\n	vUV = position * madd + madd;\n	gl_Position = viewportMatrix * vec4(position, 0.0, 1.0);\n}",
            marblePixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vPosition;\nvarying vec2 vUV;\n\nuniform float numberOfTilesHeight;\nuniform float numberOfTilesWidth;\nuniform float amplitude;\nuniform vec3 brickColor;\nuniform vec3 jointColor;\n\nconst vec3 tileSize = vec3(1.1, 1.0, 1.1);\nconst vec3 tilePct = vec3(0.98, 1.0, 0.98);\n\nfloat rand(vec2 n) {\n	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 n) {\n	const vec2 d = vec2(0.0, 1.0);\n	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\n\nfloat turbulence(vec2 P)\n{\n	float val = 0.0;\n	float freq = 1.0;\n	for (int i = 0; i < 4; i++)\n	{\n		val += abs(noise(P*freq) / freq);\n		freq *= 2.07;\n	}\n	return val;\n}\n\nfloat round(float number){\n	return sign(number)*floor(abs(number) + 0.5);\n}\n\nvec3 marble_color(float x)\n{\n	vec3 col;\n	x = 0.5*(x + 1.);\n	x = sqrt(x);             \n	x = sqrt(x);\n	x = sqrt(x);\n	col = vec3(.2 + .75*x);  \n	col.b *= 0.95;           \n	return col;\n}\n\nvoid main()\n{\n	float brickW = 1.0 / numberOfTilesWidth;\n	float brickH = 1.0 / numberOfTilesHeight;\n	float jointWPercentage = 0.01;\n	float jointHPercentage = 0.01;\n	vec3 color = brickColor;\n	float yi = vUV.y / brickH;\n	float nyi = round(yi);\n	float xi = vUV.x / brickW;\n\n	if (mod(floor(yi), 2.0) == 0.0){\n		xi = xi - 0.5;\n	}\n\n	float nxi = round(xi);\n	vec2 brickvUV = vec2((xi - floor(xi)) / brickH, (yi - floor(yi)) / brickW);\n\n	if (yi < nyi + jointHPercentage && yi > nyi - jointHPercentage){\n		color = mix(jointColor, vec3(0.37, 0.25, 0.25), (yi - nyi) / jointHPercentage + 0.2);\n	}\n	else if (xi < nxi + jointWPercentage && xi > nxi - jointWPercentage){\n		color = mix(jointColor, vec3(0.44, 0.44, 0.44), (xi - nxi) / jointWPercentage + 0.2);\n	}\n	else {\n		float t = 6.28 * brickvUV.x / (tileSize.x + noise(vec2(vUV)*6.0));\n		t += amplitude * turbulence(brickvUV.xy);\n		t = sin(t);\n		color = marble_color(t);\n	}\n\n	gl_FragColor = vec4(color, 0.0);\n}",
            oculusDistortionCorrectionPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform vec2 LensCenter;\nuniform vec2 Scale;\nuniform vec2 ScaleIn;\nuniform vec4 HmdWarpParam;\n\nvec2 HmdWarp(vec2 in01) {\n\n	vec2 theta = (in01 - LensCenter) * ScaleIn; // Scales to [-1, 1]\n	float rSq = theta.x * theta.x + theta.y * theta.y;\n	vec2 rvector = theta * (HmdWarpParam.x + HmdWarpParam.y * rSq + HmdWarpParam.z * rSq * rSq + HmdWarpParam.w * rSq * rSq * rSq);\n	return LensCenter + Scale * rvector;\n}\n\nvoid main(void)\n{\n	vec2 tc = HmdWarp(vUV);\n	if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0)\n		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n	else{\n		gl_FragColor = vec4(texture2D(textureSampler, tc).rgb, 1.0);\n	}\n}",
            outlinePixelShader: "precision highp float;\n\nuniform vec4 color;\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n#endif\n\nvoid main(void) {\n#ifdef ALPHATEST\n	if (texture2D(diffuseSampler, vUV).a < 0.4)\n		discard;\n#endif\n\n	gl_FragColor = color;\n}",
            outlineVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attribute\nattribute vec3 position;\nattribute vec3 normal;\n\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniform\nuniform float offset;\n\n#ifdef INSTANCES\nattribute vec4 world0;\nattribute vec4 world1;\nattribute vec4 world2;\nattribute vec4 world3;\n#else\nuniform mat4 world;\n#endif\n\nuniform mat4 viewProjection;\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform mat4 diffuseMatrix;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#endif\n\nvoid main(void)\n{\n#ifdef INSTANCES\n	mat4 finalWorld = mat4(world0, world1, world2, world3);\n#else\n	mat4 finalWorld = world;\n#endif\n\n	vec3 offsetPosition = position + normal * offset;\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = finalWorld * (m0 + m1 + m2 + m3);\n	gl_Position = viewProjection * finalWorld * vec4(offsetPosition, 1.0);\n#else\n	gl_Position = viewProjection * finalWorld * vec4(offsetPosition, 1.0);\n#endif\n\n#ifdef ALPHATEST\n#ifdef UV1\n	vUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n#endif\n#ifdef UV2\n	vUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n#endif\n#endif\n}",
            particlesPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nvarying vec4 vColor;\nuniform vec4 textureMask;\nuniform sampler2D diffuseSampler;\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\nvoid main(void) {\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n	vec4 baseColor = texture2D(diffuseSampler, vUV);\n\n	gl_FragColor = (baseColor * textureMask + (vec4(1., 1., 1., 1.) - textureMask)) * vColor;\n}",
            particlesVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec4 color;\nattribute vec4 options;\n\n// Uniforms\nuniform mat4 view;\nuniform mat4 projection;\n\n// Output\nvarying vec2 vUV;\nvarying vec4 vColor;\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nuniform mat4 invView;\nvarying float fClipDistance;\n#endif\n\nvoid main(void) {	\n	vec3 viewPos = (view * vec4(position, 1.0)).xyz; \n	vec3 cornerPos;\n	float size = options.y;\n	float angle = options.x;\n	vec2 offset = options.zw;\n\n	cornerPos = vec3(offset.x - 0.5, offset.y  - 0.5, 0.) * size;\n\n	// Rotate\n	vec3 rotatedCorner;\n	rotatedCorner.x = cornerPos.x * cos(angle) - cornerPos.y * sin(angle);\n	rotatedCorner.y = cornerPos.x * sin(angle) + cornerPos.y * cos(angle);\n	rotatedCorner.z = 0.;\n\n	// Position\n	viewPos += rotatedCorner;\n	gl_Position = projection * vec4(viewPos, 1.0);   \n	\n	vColor = color;\n	vUV = offset;\n\n	// Clip plane\n#ifdef CLIPPLANE\n	vec4 worldPos = invView * vec4(viewPos, 1.0);\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n}",
            passPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nvoid main(void) \n{\n	gl_FragColor = texture2D(textureSampler, vUV);\n}",
            postprocessVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Output\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n\n	vUV = position * madd + madd;\n	gl_Position = vec4(position, 0.0, 1.0);\n}",
            proceduralVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Output\nvarying vec2 vPosition;\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n	vPosition = position;\n	vUV = position * madd + madd;\n	gl_Position = vec4(position, 0.0, 1.0);\n}",
            refractionPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform sampler2D refractionSampler;\n\n// Parameters\nuniform vec3 baseColor;\nuniform float depth;\nuniform float colorLevel;\n\nvoid main() {\n	float ref = 1.0 - texture2D(refractionSampler, vUV).r;\n\n	vec2 uv = vUV - vec2(0.5);\n	vec2 offset = uv * depth * ref;\n	vec3 sourceColor = texture2D(textureSampler, vUV - offset).rgb;\n\n	gl_FragColor = vec4(sourceColor + sourceColor * ref * colorLevel, 1.0);\n}",
            roadPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vUV;                    \nuniform vec3 roadColor;\n\nfloat rand(vec2 n) {\n	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 n) {\n	const vec2 d = vec2(0.0, 1.0);\n	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\n\nfloat fbm(vec2 n) {\n	float total = 0.0, amplitude = 1.0;\n	for (int i = 0; i < 4; i++) {\n		total += noise(n) * amplitude;\n		n += n;\n		amplitude *= 0.5;\n	}\n	return total;\n}\n\nvoid main(void) {\n	float ratioy = mod(gl_FragCoord.y * 100.0 , fbm(vUV * 2.0));\n	vec3 color = roadColor * ratioy;\n	gl_FragColor = vec4(color, 1.0);\n}",
            shadowMapPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nvec4 pack(float depth)\n{\n	const vec4 bitOffset = vec4(255. * 255. * 255., 255. * 255., 255., 1.);\n	const vec4 bitMask = vec4(0., 1. / 255., 1. / 255., 1. / 255.);\n	\n	vec4 comp = mod(depth * bitOffset * vec4(254.), vec4(255.)) / vec4(254.);\n	comp -= comp.xxyz * bitMask;\n	\n	return comp;\n}\n\n// Thanks to http://devmaster.net/\nvec2 packHalf(float depth) \n{ \n	const vec2 bitOffset = vec2(1.0 / 255., 0.);\n	vec2 color = vec2(depth, fract(depth * 255.));\n\n	return color - (color.yy * bitOffset);\n}\n\n#ifndef VSM\nvarying vec4 vPosition;\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n#endif\n\nvoid main(void)\n{\n#ifdef ALPHATEST\n	if (texture2D(diffuseSampler, vUV).a < 0.4)\n		discard;\n#endif\n\n#ifdef VSM\n	float moment1 = gl_FragCoord.z / gl_FragCoord.w;\n	float moment2 = moment1 * moment1;\n	gl_FragColor = vec4(packHalf(moment1), packHalf(moment2));\n#else\n	gl_FragColor = pack(vPosition.z / vPosition.w);\n#endif\n}",
            shadowMapVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attribute\nattribute vec3 position;\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniform\n#ifdef INSTANCES\nattribute vec4 world0;\nattribute vec4 world1;\nattribute vec4 world2;\nattribute vec4 world3;\n#else\nuniform mat4 world;\n#endif\n\nuniform mat4 viewProjection;\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n#ifndef VSM\nvarying vec4 vPosition;\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform mat4 diffuseMatrix;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#endif\n\nvoid main(void)\n{\n#ifdef INSTANCES\n	mat4 finalWorld = mat4(world0, world1, world2, world3);\n#else\n	mat4 finalWorld = world;\n#endif\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = finalWorld * (m0 + m1 + m2 + m3);\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#else\n#ifndef VSM\n	vPosition = viewProjection * finalWorld * vec4(position, 1.0);\n#endif\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#endif\n\n#ifdef ALPHATEST\n#ifdef UV1\n	vUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n#endif\n#ifdef UV2\n	vUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n#endif\n#endif\n}",
            spritesPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform bool alphaTest;\n\nvarying vec4 vColor;\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return min(1., max(0., fogCoeff));\n}\n#endif\n\n\nvoid main(void) {\n	vec4 baseColor = texture2D(diffuseSampler, vUV);\n\n	if (alphaTest) \n	{\n		if (baseColor.a < 0.95)\n			discard;\n	}\n\n	baseColor *= vColor;\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	baseColor.rgb = fog * baseColor.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = baseColor;\n}",
            spritesVertexShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec4 options;\nattribute vec4 cellInfo;\nattribute vec4 color;\n\n// Uniforms\nuniform vec2 textureInfos;\nuniform mat4 view;\nuniform mat4 projection;\n\n// Output\nvarying vec2 vUV;\nvarying vec4 vColor;\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\nvoid main(void) {	\n	vec3 viewPos = (view * vec4(position, 1.0)).xyz; \n	vec3 cornerPos;\n	\n	float angle = options.x;\n	float size = options.y;\n	vec2 offset = options.zw;\n	vec2 uvScale = textureInfos.xy;\n\n	cornerPos = vec3(offset.x - 0.5, offset.y  - 0.5, 0.) * size;\n\n	// Rotate\n	vec3 rotatedCorner;\n	rotatedCorner.x = cornerPos.x * cos(angle) - cornerPos.y * sin(angle);\n	rotatedCorner.y = cornerPos.x * sin(angle) + cornerPos.y * cos(angle);\n	rotatedCorner.z = 0.;\n\n	// Position\n	viewPos += rotatedCorner;\n	gl_Position = projection * vec4(viewPos, 1.0);   \n\n	// Color\n	vColor = color;\n	\n	// Texture\n	vec2 uvOffset = vec2(abs(offset.x - cellInfo.x), 1.0 - abs(offset.y - cellInfo.y));\n\n	vUV = (uvOffset + cellInfo.zw) * uvScale;\n\n	// Fog\n#ifdef FOG\n	fFogDistance = viewPos.z;\n#endif\n}",
            ssaoPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define SAMPLES 16\n\nuniform sampler2D textureSampler;\nuniform sampler2D randomSampler;\n\nuniform float randTextureTiles;\nuniform float samplesFactor;\nuniform vec3 sampleSphere[16];\n\nvarying vec2 vUV;\n\nconst vec2 offset1 = vec2(0.0, 0.01);\nconst vec2 offset2 = vec2(0.01, 0.0);\n\nvec3 normalFromDepth(const float depth, const vec2 coords) {\n	float depth1 = texture2D(textureSampler, coords + offset1).r;\n	float depth2 = texture2D(textureSampler, coords + offset2).r;\n\n    vec3 p1 = vec3(offset1, depth1 - depth);\n    vec3 p2 = vec3(offset2, depth2 - depth);\n\n    vec3 normal = cross(p1, p2);\n    normal.z = -normal.z;\n\n    return normalize(normal);\n}\n\nvoid main(void)\n{\n	const float totalStrength = 1.0;\n	const float base = 0.2;\n	const float area = 0.0075;\n	const float fallOff = 0.000001;\n	const float radius = 0.0005;\n\n	vec3 random = texture2D(randomSampler, vUV * randTextureTiles).rgb;\n	float depth = texture2D(textureSampler, vUV).r;\n	vec3 position = vec3(vUV, depth);\n	vec3 normal = normalFromDepth(depth, vUV);\n	float radiusDepth = radius / depth;\n	float occlusion = 0.0;\n\n	vec3 ray;\n	vec3 hemiRay;\n	float occlusionDepth;\n	float difference;\n\n	for (int i = 0; i < SAMPLES; i++)\n	{\n		ray = radiusDepth * reflect(sampleSphere[i], random);\n		hemiRay = position + dot(ray, normal) * ray;\n\n		occlusionDepth = texture2D(textureSampler, clamp(hemiRay.xy, 0.0, 1.0)).r;\n		difference = depth - occlusionDepth;\n\n		occlusion += step(fallOff, difference) * (1.0 - smoothstep(fallOff, area, difference));\n	}\n\n	float ao = 1.0 - totalStrength * occlusion * samplesFactor;\n\n	float result = clamp(ao + base, 0.0, 1.0);\n	gl_FragColor.r = result;\n	gl_FragColor.g = result;\n	gl_FragColor.b = result;\n	gl_FragColor.a = 1.0;\n}",
            ssaoCombinePixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D textureSampler;\nuniform sampler2D originalColor;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n	gl_FragColor = texture2D(originalColor, vUV) * texture2D(textureSampler, vUV);\n}",
            volumetricLightScatteringPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D textureSampler;\nuniform sampler2D lightScatteringSampler;\n\nuniform float decay;\nuniform float exposure;\nuniform float weight;\nuniform float density;\nuniform vec2 meshPositionOnScreen;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n    vec2 tc = vUV;\n	vec2 deltaTexCoord = (tc - meshPositionOnScreen.xy);\n    deltaTexCoord *= 1.0 / float(NUM_SAMPLES) * density;\n\n    float illuminationDecay = 1.0;\n\n	vec4 color = texture2D(lightScatteringSampler, tc) * 0.4;\n\n    for(int i=0; i < NUM_SAMPLES; i++) {\n        tc -= deltaTexCoord;\n		vec4 sample = texture2D(lightScatteringSampler, tc) * 0.4;\n        sample *= illuminationDecay * weight;\n        color += sample;\n        illuminationDecay *= decay;\n    }\n\n    vec4 realColor = texture2D(textureSampler, vUV);\n    gl_FragColor = ((vec4((vec3(color.r, color.g, color.b) * exposure), 1)) + (realColor * (1.5 - 0.4)));\n}",
            volumetricLightScatteringPassPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#if defined(ALPHATEST) || defined(BASIC_RENDER) || defined(OPACITY)\nvarying vec2 vUV;\n#endif\n\n#if defined(ALPHATEST) || defined(BASIC_RENDER)\nuniform sampler2D diffuseSampler;\n#endif\n\n#if defined(OPACITY)\nuniform sampler2D opacitySampler;\n#endif\n\nvoid main(void)\n{\n#if defined(ALPHATEST) || defined(OPACITY) || defined(BASIC_RENDER)\n	vec4 diffuseColor = texture2D(diffuseSampler, vUV);\n#endif\n\n#ifdef ALPHATEST\n	if (diffuseColor.a < 0.4)\n		discard;\n#endif\n\n#ifdef BASIC_RENDER\n#ifdef OPACITY\n	gl_FragColor = diffuseColor * texture2D(opacitySampler, vUV);\n#else\n	gl_FragColor = diffuseColor;\n#endif\n#else\n	gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n#endif\n\n}",
            woodPixelShader: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vPosition;\nvarying vec2 vUV;\n\nuniform float ampScale;\nuniform vec3 woodColor;\n\nfloat rand(vec2 n) {\n	return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 n) {\n	const vec2 d = vec2(0.0, 1.0);\n	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\n\nfloat fbm(vec2 n) {\n	float total = 0.0, amplitude = 1.0;\n	for (int i = 0; i < 4; i++) {\n		total += noise(n) * amplitude;\n		n += n;\n		amplitude *= 0.5;\n	}\n	return total;\n}\n\nvoid main(void) {\n	float ratioy = mod(vUV.x * ampScale, 2.0 + fbm(vUV * 0.8));\n	vec3 wood = woodColor * ratioy;\n	gl_FragColor = vec4(wood, 1.0);\n}"
        }, b
    }();
    a.Effect = c
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(b, c, d) {
            this.name = b, this.checkReadyOnEveryCall = !0, this.checkReadyOnlyOnce = !1, this.state = "", this.alpha = 1, this.backFaceCulling = !0, this._wasPreviouslyReady = !1, this._fillMode = a.TriangleFillMode, this.pointSize = 1, this.id = b, this._scene = c, d || c.materials.push(this)
        }
        return Object.defineProperty(a, "TriangleFillMode", {
            get: function() {
                return a._TriangleFillMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a, "WireFrameFillMode", {
            get: function() {
                return a._WireFrameFillMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a, "PointFillMode", {
            get: function() {
                return a._PointFillMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "wireframe", {
            get: function() {
                return this._fillMode === a.WireFrameFillMode
            },
            set: function(b) {
                this._fillMode = b ? a.WireFrameFillMode : a.TriangleFillMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "pointsCloud", {
            get: function() {
                return this._fillMode === a.PointFillMode
            },
            set: function(b) {
                this._fillMode = b ? a.PointFillMode : a.TriangleFillMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "fillMode", {
            get: function() {
                return this._fillMode
            },
            set: function(a) {
                this._fillMode = a
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.isReady = function() {
            return !0
        }, a.prototype.getEffect = function() {
            return this._effect
        }, a.prototype.getScene = function() {
            return this._scene
        }, a.prototype.needAlphaBlending = function() {
            return this.alpha < 1
        }, a.prototype.needAlphaTesting = function() {
            return !1
        }, a.prototype.getAlphaTestTexture = function() {
            return null
        }, a.prototype.trackCreation = function() {}, a.prototype._preBind = function() {
            var a = this._scene.getEngine();
            a.enableEffect(this._effect), a.setState(this.backFaceCulling)
        }, a.prototype.bind = function() {
            this._scene._cachedMaterial = this, this.onBind && this.onBind(this)
        }, a.prototype.bindOnlyWorldMatrix = function() {}, a.prototype.unbind = function() {}, a.prototype.dispose = function(a) {
            var b = this._scene.materials.indexOf(this);
            this._scene.materials.splice(b, 1), a && this._effect && (this._scene.getEngine()._releaseEffect(this._effect), this._effect = null), this.onDispose && this.onDispose()
        }, a._TriangleFillMode = 0, a._WireFrameFillMode = 1, a._PointFillMode = 2, a
    }();
    a.Material = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = 4,
        c = function() {
            function b() {
                this.isEnabled = !0, this.leftColor = a.Color3.White(), this.rightColor = a.Color3.Black(), this.bias = 0, this.power = 1
            }
            return b
        }();
    a.FresnelParameters = c;
    var d = function(c) {
        function d(b, d) {
            var e = this;
            c.call(this, b, d), this.ambientColor = new a.Color3(0, 0, 0), this.diffuseColor = new a.Color3(1, 1, 1), this.specularColor = new a.Color3(1, 1, 1), this.specularPower = 64, this.emissiveColor = new a.Color3(0, 0, 0), this.useAlphaFromDiffuseTexture = !1, this.useSpecularOverAlpha = !0, this.fogEnabled = !0, this._cachedDefines = null, this._renderTargets = new a.SmartArray(16), this._worldViewProjectionMatrix = a.Matrix.Zero(), this._globalAmbientColor = new a.Color3(0, 0, 0), this._scaledDiffuse = new a.Color3, this._scaledSpecular = new a.Color3, this.getRenderTargetTextures = function() {
                return e._renderTargets.reset(), e.reflectionTexture && e.reflectionTexture.isRenderTarget && e._renderTargets.push(e.reflectionTexture), e._renderTargets
            }
        }
        return __extends(d, c), d.prototype.needAlphaBlending = function() {
            return this.alpha < 1 || null != this.opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled
        }, d.prototype.needAlphaTesting = function() {
            return null != this.diffuseTexture && this.diffuseTexture.hasAlpha && !this.diffuseTexture.getAlphaFromRGB
        }, d.prototype._shouldUseAlphaFromDiffuseTexture = function() {
            return null != this.diffuseTexture && this.diffuseTexture.hasAlpha && this.useAlphaFromDiffuseTexture
        }, d.prototype.getAlphaTestTexture = function() {
            return this.diffuseTexture
        }, d.prototype.isReady = function(c, e) {
            if (this.checkReadyOnlyOnce && this._wasPreviouslyReady) return !0;
            var f = this.getScene();
            if (!this.checkReadyOnEveryCall && this._renderId === f.getRenderId()) return !0;
            var g = f.getEngine(),
                h = [],
                i = new a.EffectFallbacks;
            if (f.texturesEnabled) {
                if (this.diffuseTexture && d.DiffuseTextureEnabled) {
                    if (!this.diffuseTexture.isReady()) return !1;
                    h.push("#define DIFFUSE")
                }
                if (this.ambientTexture && d.AmbientTextureEnabled) {
                    if (!this.ambientTexture.isReady()) return !1;
                    h.push("#define AMBIENT")
                }
                if (this.opacityTexture && d.OpacityTextureEnabled) {
                    if (!this.opacityTexture.isReady()) return !1;
                    h.push("#define OPACITY"), this.opacityTexture.getAlphaFromRGB && h.push("#define OPACITYRGB")
                }
                if (this.reflectionTexture && d.ReflectionTextureEnabled) {
                    if (!this.reflectionTexture.isReady()) return !1;
                    h.push("#define REFLECTION"), i.addFallback(0, "REFLECTION")
                }
                if (this.emissiveTexture && d.EmissiveTextureEnabled) {
                    if (!this.emissiveTexture.isReady()) return !1;
                    h.push("#define EMISSIVE")
                }
                if (this.specularTexture && d.SpecularTextureEnabled) {
                    if (!this.specularTexture.isReady()) return !1;
                    h.push("#define SPECULAR"), i.addFallback(0, "SPECULAR")
                }
            }
            if (f.getEngine().getCaps().standardDerivatives && this.bumpTexture && d.BumpTextureEnabled) {
                if (!this.bumpTexture.isReady()) return !1;
                h.push("#define BUMP"), i.addFallback(0, "BUMP")
            }
            this.useSpecularOverAlpha && (h.push("#define SPECULAROVERALPHA"), i.addFallback(0, "SPECULAROVERALPHA")), f.clipPlane && h.push("#define CLIPPLANE"), g.getAlphaTesting() && h.push("#define ALPHATEST"), this._shouldUseAlphaFromDiffuseTexture() && h.push("#define ALPHAFROMDIFFUSE"), (this.pointsCloud || f.forcePointsCloud) && h.push("#define POINTSIZE"), f.fogEnabled && c && c.applyFog && f.fogMode !== a.Scene.FOGMODE_NONE && this.fogEnabled && (h.push("#define FOG"), i.addFallback(1, "FOG"));
            var j = !1,
                k = 0;
            if (f.lightsEnabled)
                for (var l = 0; l < f.lights.length; l++) {
                    var m = f.lights[l];
                    if (m.isEnabled()) {
                        if (m._excludedMeshesIds.length > 0) {
                            for (var n = 0; n < m._excludedMeshesIds.length; n++) {
                                var o = f.getMeshByID(m._excludedMeshesIds[n]);
                                o && m.excludedMeshes.push(o)
                            }
                            m._excludedMeshesIds = []
                        }
                        if (m._includedOnlyMeshesIds.length > 0) {
                            for (var p = 0; p < m._includedOnlyMeshesIds.length; p++) {
                                var q = f.getMeshByID(m._includedOnlyMeshesIds[p]);
                                q && m.includedOnlyMeshes.push(q)
                            }
                            m._includedOnlyMeshesIds = []
                        }
                        if (m.canAffectMesh(c)) {
                            h.push("#define LIGHT" + k), k > 0 && i.addFallback(k, "LIGHT" + k);
                            var r;
                            if (r = m instanceof a.SpotLight ? "#define SPOTLIGHT" + k : m instanceof a.HemisphericLight ? "#define HEMILIGHT" + k : "#define POINTDIRLIGHT" + k, h.push(r), k > 0 && i.addFallback(k, r.replace("#define ", "")), f.shadowsEnabled) {
                                var s = m.getShadowGenerator();
                                c && c.receiveShadows && s && (h.push("#define SHADOW" + k), i.addFallback(0, "SHADOW" + k), j || (h.push("#define SHADOWS"), j = !0), s.useVarianceShadowMap && (h.push("#define SHADOWVSM" + k), k > 0 && i.addFallback(0, "SHADOWVSM" + k)), s.usePoissonSampling && (h.push("#define SHADOWPCF" + k), k > 0 && i.addFallback(0, "SHADOWPCF" + k)))
                            }
                            if (k++, k === b) break
                        }
                    }
                }
            if (d.FresnelEnabled && (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled || this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled || this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled || this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled)) {
                var t = 1;
                this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (h.push("#define DIFFUSEFRESNEL"), i.addFallback(t, "DIFFUSEFRESNEL"), t++), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled && (h.push("#define OPACITYFRESNEL"), i.addFallback(t, "OPACITYFRESNEL"), t++), this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (h.push("#define REFLECTIONFRESNEL"), i.addFallback(t, "REFLECTIONFRESNEL"), t++), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (h.push("#define EMISSIVEFRESNEL"), i.addFallback(t, "EMISSIVEFRESNEL"), t++), h.push("#define FRESNEL"), i.addFallback(t - 1, "FRESNEL")
            }
            var u = [a.VertexBuffer.PositionKind, a.VertexBuffer.NormalKind];
            c && (c.isVerticesDataPresent(a.VertexBuffer.UVKind) && (u.push(a.VertexBuffer.UVKind), h.push("#define UV1")), c.isVerticesDataPresent(a.VertexBuffer.UV2Kind) && (u.push(a.VertexBuffer.UV2Kind), h.push("#define UV2")), c.useVertexColors && c.isVerticesDataPresent(a.VertexBuffer.ColorKind) && (u.push(a.VertexBuffer.ColorKind), h.push("#define VERTEXCOLOR"), c.hasVertexAlpha && h.push("#define VERTEXALPHA")), c.useBones && (u.push(a.VertexBuffer.MatricesIndicesKind), u.push(a.VertexBuffer.MatricesWeightsKind), h.push("#define BONES"), h.push("#define BonesPerMesh " + (c.skeleton.bones.length + 1)), h.push("#define BONES4"), i.addFallback(0, "BONES4")), e && (h.push("#define INSTANCES"), u.push("world0"), u.push("world1"), u.push("world2"), u.push("world3")));
            var v = h.join("\n");
            if (this._cachedDefines !== v) {
                this._cachedDefines = v, f.resetCachedMaterial();
                var w = "default";
                f.getEngine().getCaps().standardDerivatives || (w = "legacydefault"), this._effect = f.getEngine().createEffect(w, u, ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "vLightData0", "vLightDiffuse0", "vLightSpecular0", "vLightDirection0", "vLightGround0", "lightMatrix0", "vLightData1", "vLightDiffuse1", "vLightSpecular1", "vLightDirection1", "vLightGround1", "lightMatrix1", "vLightData2", "vLightDiffuse2", "vLightSpecular2", "vLightDirection2", "vLightGround2", "lightMatrix2", "vLightData3", "vLightDiffuse3", "vLightSpecular3", "vLightDirection3", "vLightGround3", "lightMatrix3", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vReflectionInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "mBones", "vClipPlane", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "reflectionMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "darkness0", "darkness1", "darkness2", "darkness3", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor"], ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "shadowSampler0", "shadowSampler1", "shadowSampler2", "shadowSampler3"], v, i, this.onCompiled, this.onError)
            }
            return this._effect.isReady() ? (this._renderId = f.getRenderId(), this._wasPreviouslyReady = !0, !0) : !1
        }, d.prototype.unbind = function() {
            this.reflectionTexture && this.reflectionTexture.isRenderTarget && this._effect.setTexture("reflection2DSampler", null)
        }, d.prototype.bindOnlyWorldMatrix = function(a) {
            this._effect.setMatrix("world", a)
        }, d.prototype.bind = function(e, f) {
            var g = this.getScene();
            if (this.bindOnlyWorldMatrix(e), this._effect.setMatrix("viewProjection", g.getTransformMatrix()), f.useBones && this._effect.setMatrices("mBones", f.skeleton.getTransformMatrices()), g.getCachedMaterial() !== this) {
                if (d.FresnelEnabled && (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (this._effect.setColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), this._effect.setColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled && this._effect.setColor4("opacityParts", new a.Color3(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), this.opacityFresnelParameters.power), this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (this._effect.setColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), this._effect.setColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (this._effect.setColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), this._effect.setColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))), this.diffuseTexture && d.DiffuseTextureEnabled && (this._effect.setTexture("diffuseSampler", this.diffuseTexture), this._effect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level), this._effect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix())), this.ambientTexture && d.AmbientTextureEnabled && (this._effect.setTexture("ambientSampler", this.ambientTexture), this._effect.setFloat2("vAmbientInfos", this.ambientTexture.coordinatesIndex, this.ambientTexture.level), this._effect.setMatrix("ambientMatrix", this.ambientTexture.getTextureMatrix())), this.opacityTexture && d.OpacityTextureEnabled && (this._effect.setTexture("opacitySampler", this.opacityTexture), this._effect.setFloat2("vOpacityInfos", this.opacityTexture.coordinatesIndex, this.opacityTexture.level), this._effect.setMatrix("opacityMatrix", this.opacityTexture.getTextureMatrix())), this.reflectionTexture && d.ReflectionTextureEnabled && (this.reflectionTexture.isCube ? this._effect.setTexture("reflectionCubeSampler", this.reflectionTexture) : this._effect.setTexture("reflection2DSampler", this.reflectionTexture), this._effect.setMatrix("reflectionMatrix", this.reflectionTexture.getReflectionTextureMatrix()), this._effect.setFloat3("vReflectionInfos", this.reflectionTexture.coordinatesMode, this.reflectionTexture.level, this.reflectionTexture.isCube ? 1 : 0)), this.emissiveTexture && d.EmissiveTextureEnabled && (this._effect.setTexture("emissiveSampler", this.emissiveTexture), this._effect.setFloat2("vEmissiveInfos", this.emissiveTexture.coordinatesIndex, this.emissiveTexture.level), this._effect.setMatrix("emissiveMatrix", this.emissiveTexture.getTextureMatrix())), this.specularTexture && d.SpecularTextureEnabled && (this._effect.setTexture("specularSampler", this.specularTexture), this._effect.setFloat2("vSpecularInfos", this.specularTexture.coordinatesIndex, this.specularTexture.level), this._effect.setMatrix("specularMatrix", this.specularTexture.getTextureMatrix())), this.bumpTexture && g.getEngine().getCaps().standardDerivatives && d.BumpTextureEnabled && (this._effect.setTexture("bumpSampler", this.bumpTexture), this._effect.setFloat2("vBumpInfos", this.bumpTexture.coordinatesIndex, 1 / this.bumpTexture.level), this._effect.setMatrix("bumpMatrix", this.bumpTexture.getTextureMatrix())), g.clipPlane) {
                    var h = g.clipPlane;
                    this._effect.setFloat4("vClipPlane", h.normal.x, h.normal.y, h.normal.z, h.d)
                }
                this.pointsCloud && this._effect.setFloat("pointSize", this.pointSize), g.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), this._scaledSpecular.r = this.specularColor.r * a.Tools.Clamp(1 - this.emissiveColor.r), this._scaledSpecular.g = this.specularColor.g * a.Tools.Clamp(1 - this.emissiveColor.g), this._scaledSpecular.b = this.specularColor.b * a.Tools.Clamp(1 - this.emissiveColor.b), this._effect.setVector3("vEyePosition", g.activeCamera.position), this._effect.setColor3("vAmbientColor", this._globalAmbientColor), this._effect.setColor4("vSpecularColor", this._scaledSpecular, this.specularPower), this._effect.setColor3("vEmissiveColor", this.emissiveColor)
            }
            if (this._scaledDiffuse.r = this.diffuseColor.r * a.Tools.Clamp(1 - this.emissiveColor.r), this._scaledDiffuse.g = this.diffuseColor.g * a.Tools.Clamp(1 - this.emissiveColor.g), this._scaledDiffuse.b = this.diffuseColor.b * a.Tools.Clamp(1 - this.emissiveColor.b), this._effect.setColor4("vDiffuseColor", this._scaledDiffuse, this.alpha * f.visibility), g.lightsEnabled)
                for (var i = 0, j = 0; j < g.lights.length; j++) {
                    var k = g.lights[j];
                    if (k.isEnabled() && k.canAffectMesh(f)) {
                        if (k instanceof a.PointLight ? k.transferToEffect(this._effect, "vLightData" + i) : k instanceof a.DirectionalLight ? k.transferToEffect(this._effect, "vLightData" + i) : k instanceof a.SpotLight ? k.transferToEffect(this._effect, "vLightData" + i, "vLightDirection" + i) : k instanceof a.HemisphericLight && k.transferToEffect(this._effect, "vLightData" + i, "vLightGround" + i), k.diffuse.scaleToRef(k.intensity, this._scaledDiffuse), k.specular.scaleToRef(k.intensity, this._scaledSpecular), this._effect.setColor4("vLightDiffuse" + i, this._scaledDiffuse, k.range), this._effect.setColor3("vLightSpecular" + i, this._scaledSpecular), g.shadowsEnabled) {
                            var l = k.getShadowGenerator();
                            f.receiveShadows && l && (this._effect.setMatrix("lightMatrix" + i, l.getTransformMatrix()), this._effect.setTexture("shadowSampler" + i, l.getShadowMap()), this._effect.setFloat("darkness" + i, l.getDarkness()))
                        }
                        if (i++, i === b) break
                    }
                }(g.fogEnabled && f.applyFog && g.fogMode !== a.Scene.FOGMODE_NONE || this.reflectionTexture) && this._effect.setMatrix("view", g.getViewMatrix()), g.fogEnabled && f.applyFog && g.fogMode !== a.Scene.FOGMODE_NONE && (this._effect.setFloat4("vFogInfos", g.fogMode, g.fogStart, g.fogEnd, g.fogDensity), this._effect.setColor3("vFogColor", g.fogColor)), c.prototype.bind.call(this, e, f)
        }, d.prototype.getAnimatables = function() {
            var a = [];
            return this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0 && a.push(this.diffuseTexture), this.ambientTexture && this.ambientTexture.animations && this.ambientTexture.animations.length > 0 && a.push(this.ambientTexture), this.opacityTexture && this.opacityTexture.animations && this.opacityTexture.animations.length > 0 && a.push(this.opacityTexture), this.reflectionTexture && this.reflectionTexture.animations && this.reflectionTexture.animations.length > 0 && a.push(this.reflectionTexture), this.emissiveTexture && this.emissiveTexture.animations && this.emissiveTexture.animations.length > 0 && a.push(this.emissiveTexture), this.specularTexture && this.specularTexture.animations && this.specularTexture.animations.length > 0 && a.push(this.specularTexture), this.bumpTexture && this.bumpTexture.animations && this.bumpTexture.animations.length > 0 && a.push(this.bumpTexture), a
        }, d.prototype.dispose = function(a) {
            this.diffuseTexture && this.diffuseTexture.dispose(), this.ambientTexture && this.ambientTexture.dispose(), this.opacityTexture && this.opacityTexture.dispose(), this.reflectionTexture && this.reflectionTexture.dispose(), this.emissiveTexture && this.emissiveTexture.dispose(), this.specularTexture && this.specularTexture.dispose(), this.bumpTexture && this.bumpTexture.dispose(), c.prototype.dispose.call(this, a)
        }, d.prototype.clone = function(a) {
            var b = new d(a, this.getScene());
            return b.checkReadyOnEveryCall = this.checkReadyOnEveryCall, b.alpha = this.alpha, b.fillMode = this.fillMode, b.backFaceCulling = this.backFaceCulling, this.diffuseTexture && this.diffuseTexture.clone && (b.diffuseTexture = this.diffuseTexture.clone()), this.ambientTexture && this.ambientTexture.clone && (b.ambientTexture = this.ambientTexture.clone()), this.opacityTexture && this.opacityTexture.clone && (b.opacityTexture = this.opacityTexture.clone()), this.reflectionTexture && this.reflectionTexture.clone && (b.reflectionTexture = this.reflectionTexture.clone()), this.emissiveTexture && this.emissiveTexture.clone && (b.emissiveTexture = this.emissiveTexture.clone()), this.specularTexture && this.specularTexture.clone && (b.specularTexture = this.specularTexture.clone()), this.bumpTexture && this.bumpTexture.clone && (b.bumpTexture = this.bumpTexture.clone()), b.ambientColor = this.ambientColor.clone(), b.diffuseColor = this.diffuseColor.clone(), b.specularColor = this.specularColor.clone(), b.specularPower = this.specularPower, b.emissiveColor = this.emissiveColor.clone(), b
        }, d.DiffuseTextureEnabled = !0, d.AmbientTextureEnabled = !0, d.OpacityTextureEnabled = !0, d.ReflectionTextureEnabled = !0, d.EmissiveTextureEnabled = !0, d.SpecularTextureEnabled = !0, d.BumpTextureEnabled = !0, d.FresnelEnabled = !0, d
    }(a.Material);
    a.StandardMaterial = d
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c) {
            a.call(this, b, c, !0), this.subMaterials = new Array, c.multiMaterials.push(this)
        }
        return __extends(b, a), b.prototype.getSubMaterial = function(a) {
            return 0 > a || a >= this.subMaterials.length ? this.getScene().defaultMaterial : this.subMaterials[a]
        }, b.prototype.isReady = function(a) {
            for (var b = 0; b < this.subMaterials.length; b++) {
                var c = this.subMaterials[b];
                if (c && !this.subMaterials[b].isReady(a)) return !1
            }
            return !0
        }, b
    }(a.Material);
    a.MultiMaterial = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c) {
            this.idbFactory = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, this.callbackManifestChecked = c, this.currentSceneUrl = a.Database.ReturnFullUrlLocation(b), this.db = null, this.enableSceneOffline = !1, this.enableTexturesOffline = !1, this.manifestVersionFound = 0, this.mustUpdateRessources = !1, this.hasReachedQuota = !1, this.checkManifestFile()
        }
        return b.prototype.checkManifestFile = function() {
            function b() {
                a.Tools.Log("Valid manifest file not found. Scene & textures will be loaded directly from the web server."), d.enableSceneOffline = !1, d.enableTexturesOffline = !1, d.callbackManifestChecked(!1)
            }
            var c = this,
                d = this,
                e = this.currentSceneUrl + ".manifest",
                f = new XMLHttpRequest,
                g = e + (null == e.match(/\?/) ? "?" : "&") + (new Date).getTime();
            f.open("GET", g, !0), f.addEventListener("load", function() {
                if (200 === f.status || a.Tools.ValidateXHRData(f, 1)) try {
                    var d = JSON.parse(f.response);
                    c.enableSceneOffline = d.enableSceneOffline, c.enableTexturesOffline = d.enableTexturesOffline, d.version && !isNaN(parseInt(d.version)) && (c.manifestVersionFound = d.version), c.callbackManifestChecked && c.callbackManifestChecked(!0)
                } catch (e) {
                    b()
                } else b()
            }, !1), f.addEventListener("error", function() {
                b()
            }, !1);
            try {
                f.send()
            } catch (h) {
                a.Tools.Error("Error on XHR send request."), d.callbackManifestChecked(!1)
            }
        }, b.prototype.openAsync = function(b, c) {
            function d() {
                f.isSupported = !1, c && c()
            }
            var e = this,
                f = this;
            if (this.idbFactory && (this.enableSceneOffline || this.enableTexturesOffline))
                if (this.db) b && b();
                else {
                    this.hasReachedQuota = !1, this.isSupported = !0;
                    var g = this.idbFactory.open("babylonjs", 1);
                    g.onerror = function() {
                        d()
                    }, g.onblocked = function() {
                        a.Tools.Error("IDB request blocked. Please reload the page."), d()
                    }, g.onsuccess = function() {
                        e.db = g.result, b()
                    }, g.onupgradeneeded = function(b) {
                        e.db = b.target.result;
                        try {
                            {
                                e.db.createObjectStore("scenes", {
                                    keyPath: "sceneUrl"
                                }), e.db.createObjectStore("versions", {
                                    keyPath: "sceneUrl"
                                }), e.db.createObjectStore("textures", {
                                    keyPath: "textureUrl"
                                })
                            }
                        } catch (c) {
                            a.Tools.Error("Error while creating object stores. Exception: " + c.message), d()
                        }
                    }
                } else this.isSupported = !1, c && c()
        }, b.prototype.loadImageFromDB = function(b, c) {
            var d = this,
                e = a.Database.ReturnFullUrlLocation(b),
                f = function() {
                    d.hasReachedQuota || null === d.db ? c.src = b : d._saveImageIntoDBAsync(e, c)
                };
            this.mustUpdateRessources ? f() : this._loadImageFromDBAsync(e, c, f)
        }, b.prototype._loadImageFromDBAsync = function(b, c, d) {
            if (this.isSupported && null !== this.db) {
                var e, f = this.db.transaction(["textures"]);
                f.onabort = function() {
                    c.src = b
                }, f.oncomplete = function() {
                    var f;
                    if (e) {
                        var g = window.URL || window.webkitURL;
                        f = g.createObjectURL(e.data, {
                            oneTimeOnly: !0
                        }), c.onerror = function() {
                            a.Tools.Error("Error loading image from blob URL: " + f + " switching back to web url: " + b), c.src = b
                        }, c.src = f
                    } else d()
                };
                var g = f.objectStore("textures").get(b);
                g.onsuccess = function(a) {
                    e = a.target.result
                }, g.onerror = function() {
                    a.Tools.Error("Error loading texture " + b + " from DB."), c.src = b
                }
            } else a.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), c.src = b
        }, b.prototype._saveImageIntoDBAsync = function(b, c) {
            var d = this;
            if (this.isSupported) {
                var e = function() {
                    var a;
                    if (f) {
                        var b = window.URL || window.webkitURL;
                        try {
                            a = b.createObjectURL(f, {
                                oneTimeOnly: !0
                            })
                        } catch (d) {
                            a = b.createObjectURL(f)
                        }
                    }
                    c.src = a
                };
                if (a.Database.isUASupportingBlobStorage) {
                    var f, g = new XMLHttpRequest;
                    g.open("GET", b, !0), g.responseType = "blob", g.addEventListener("load", function() {
                        if (200 === g.status) {
                            f = g.response;
                            var h = d.db.transaction(["textures"], "readwrite");
                            h.onabort = function(a) {
                                try {
                                    "QuotaExceededError" === a.srcElement.error.name && (this.hasReachedQuota = !0)
                                } catch (b) {}
                                e()
                            }, h.oncomplete = function() {
                                e()
                            };
                            var i = {
                                textureUrl: b,
                                data: f
                            };
                            try {
                                var j = h.objectStore("textures").put(i);
                                j.onsuccess = function() {}, j.onerror = function() {
                                    e()
                                }
                            } catch (k) {
                                25 === k.code && (a.Database.isUASupportingBlobStorage = !1), c.src = b
                            }
                        } else c.src = b
                    }, !1), g.addEventListener("error", function() {
                        a.Tools.Error("Error in XHR request in BABYLON.Database."), c.src = b
                    }, !1), g.send()
                } else c.src = b
            } else a.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), c.src = b
        }, b.prototype._checkVersionFromDB = function(a, b) {
            var c = this,
                d = function() {
                    c._saveVersionIntoDBAsync(a, b)
                };
            this._loadVersionFromDBAsync(a, b, d)
        }, b.prototype._loadVersionFromDBAsync = function(b, c, d) {
            var e = this;
            if (this.isSupported) {
                var f;
                try {
                    var g = this.db.transaction(["versions"]);
                    g.oncomplete = function() {
                        f ? e.manifestVersionFound > f.data ? (e.mustUpdateRessources = !0, d()) : c(f.data) : (e.mustUpdateRessources = !0, d())
                    }, g.onabort = function() {
                        c(-1)
                    };
                    var h = g.objectStore("versions").get(b);
                    h.onsuccess = function(a) {
                        f = a.target.result
                    }, h.onerror = function() {
                        a.Tools.Error("Error loading version for scene " + b + " from DB."), c(-1)
                    }
                } catch (i) {
                    a.Tools.Error("Error while accessing 'versions' object store (READ OP). Exception: " + i.message), c(-1)
                }
            } else a.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), c(-1)
        }, b.prototype._saveVersionIntoDBAsync = function(b, c) {
            var d = this;
            if (this.isSupported && !this.hasReachedQuota) try {
                var e = this.db.transaction(["versions"], "readwrite");
                e.onabort = function(a) {
                    try {
                        "QuotaExceededError" === a.srcElement.error.name && (d.hasReachedQuota = !0)
                    } catch (b) {}
                    c(-1)
                }, e.oncomplete = function() {
                    c(d.manifestVersionFound)
                };
                var f = {
                        sceneUrl: b,
                        data: this.manifestVersionFound
                    },
                    g = e.objectStore("versions").put(f);
                g.onsuccess = function() {}, g.onerror = function() {
                    a.Tools.Error("Error in DB add version request in BABYLON.Database.")
                }
            } catch (h) {
                a.Tools.Error("Error while accessing 'versions' object store (WRITE OP). Exception: " + h.message), c(-1)
            } else c(-1)
        }, b.prototype.loadFileFromDB = function(b, c, d, e, f) {
            var g = this,
                h = a.Database.ReturnFullUrlLocation(b),
                i = function() {
                    g._saveFileIntoDBAsync(h, c, d)
                };
            this._checkVersionFromDB(h, function(a) {
                -1 !== a ? g.mustUpdateRessources ? g._saveFileIntoDBAsync(h, c, d, f) : g._loadFileFromDBAsync(h, c, i, f) : e()
            })
        }, b.prototype._loadFileFromDBAsync = function(b, c, d) {
            if (this.isSupported) {
                var e;
                e = -1 !== b.indexOf(".babylon") ? "scenes" : "textures";
                var f, g = this.db.transaction([e]);
                g.oncomplete = function() {
                    f ? c(f.data) : d()
                }, g.onabort = function() {
                    d()
                };
                var h = g.objectStore(e).get(b);
                h.onsuccess = function(a) {
                    f = a.target.result
                }, h.onerror = function() {
                    a.Tools.Error("Error loading file " + b + " from DB."), d()
                }
            } else a.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), c()
        }, b.prototype._saveFileIntoDBAsync = function(b, c, d, e) {
            var f = this;
            if (this.isSupported) {
                var g;
                g = -1 !== b.indexOf(".babylon") ? "scenes" : "textures";
                var h, i = new XMLHttpRequest;
                i.open("GET", b, !0), e && (i.responseType = "arraybuffer"), i.onprogress = d, i.addEventListener("load", function() {
                    if (200 === i.status || a.Tools.ValidateXHRData(i, e ? 6 : 1))
                        if (h = e ? i.response : i.responseText, f.hasReachedQuota) c(h);
                        else {
                            var d = f.db.transaction([g], "readwrite");
                            d.onabort = function(a) {
                                try {
                                    "QuotaExceededError" === a.srcElement.error.name && (this.hasReachedQuota = !0)
                                } catch (b) {}
                                c(h)
                            }, d.oncomplete = function() {
                                c(h)
                            };
                            var j;
                            j = "scenes" === g ? {
                                sceneUrl: b,
                                data: h,
                                version: f.manifestVersionFound
                            } : {
                                textureUrl: b,
                                data: h
                            };
                            try {
                                var k = d.objectStore(g).put(j);
                                k.onsuccess = function() {}, k.onerror = function() {
                                    a.Tools.Error("Error in DB add file request in BABYLON.Database.")
                                }
                            } catch (l) {
                                c(h)
                            }
                        } else c()
                }, !1), i.addEventListener("error", function() {
                    a.Tools.Error("error on XHR request."), c()
                }, !1), i.send()
            } else a.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), c()
        }, b.isUASupportingBlobStorage = !0, b.parseURL = function(a) {
            var b = document.createElement("a");
            b.href = a;
            var c = a.substring(0, a.lastIndexOf("#")),
                d = a.substring(c.lastIndexOf("/") + 1, a.length),
                e = a.substring(0, a.indexOf(d, 0));
            return e
        }, b.ReturnFullUrlLocation = function(b) {
            return -1 === b.indexOf("http:/") ? a.Database.parseURL(window.location.href) + b : b
        }, b
    }();
    a.Database = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d, e, f, g) {
            this.name = b, this.cellSize = e, this.sprites = new Array, this.renderingGroupId = 0, this.fogEnabled = !0, this._vertexDeclaration = [3, 4, 4, 4], this._vertexStrideSize = 60, this._capacity = d, this._spriteTexture = new a.Texture(c, f, !0, !1), this._spriteTexture.wrapU = a.Texture.CLAMP_ADDRESSMODE, this._spriteTexture.wrapV = a.Texture.CLAMP_ADDRESSMODE, this._epsilon = void 0 === g ? .01 : g, this._scene = f, this._scene.spriteManagers.push(this), this._vertexDeclaration = [3, 4, 4, 4], this._vertexStrideSize = 60, this._vertexBuffer = f.getEngine().createDynamicVertexBuffer(d * this._vertexStrideSize * 4);
            for (var h = [], i = 0, j = 0; d > j; j++) h.push(i), h.push(i + 1), h.push(i + 2), h.push(i), h.push(i + 2), h.push(i + 3), i += 4;
            this._indexBuffer = f.getEngine().createIndexBuffer(h), this._vertices = new Float32Array(d * this._vertexStrideSize), this._effectBase = this._scene.getEngine().createEffect("sprites", ["position", "options", "cellInfo", "color"], ["view", "projection", "textureInfos", "alphaTest"], ["diffuseSampler"], ""), this._effectFog = this._scene.getEngine().createEffect("sprites", ["position", "options", "cellInfo", "color"], ["view", "projection", "textureInfos", "alphaTest", "vFogInfos", "vFogColor"], ["diffuseSampler"], "#define FOG")
        }
        return b.prototype._appendSpriteVertex = function(a, b, c, d, e) {
            var f = 15 * a;
            0 == c ? c = this._epsilon : 1 == c && (c = 1 - this._epsilon), 0 == d ? d = this._epsilon : 1 == d && (d = 1 - this._epsilon), this._vertices[f] = b.position.x, this._vertices[f + 1] = b.position.y, this._vertices[f + 2] = b.position.z, this._vertices[f + 3] = b.angle, this._vertices[f + 4] = b.size, this._vertices[f + 5] = c, this._vertices[f + 6] = d, this._vertices[f + 7] = b.invertU ? 1 : 0, this._vertices[f + 8] = b.invertV ? 1 : 0;
            var g = b.cellIndex / e >> 0;
            this._vertices[f + 9] = b.cellIndex - g * e, this._vertices[f + 10] = g, this._vertices[f + 11] = b.color.r, this._vertices[f + 12] = b.color.g, this._vertices[f + 13] = b.color.b, this._vertices[f + 14] = b.color.a
        }, b.prototype.render = function() {
            if (this._effectBase.isReady() && this._effectFog.isReady() && this._spriteTexture && this._spriteTexture.isReady()) {
                for (var b = this._scene.getEngine(), c = this._spriteTexture.getBaseSize(), d = b.getDeltaTime(), e = Math.min(this._capacity, this.sprites.length), f = c.width / this.cellSize, g = 0, h = 0; e > h; h++) {
                    var i = this.sprites[h];
                    i && (i._animate(d), this._appendSpriteVertex(g++, i, 0, 0, f), this._appendSpriteVertex(g++, i, 1, 0, f), this._appendSpriteVertex(g++, i, 1, 1, f), this._appendSpriteVertex(g++, i, 0, 1, f))
                }
                b.updateDynamicVertexBuffer(this._vertexBuffer, this._vertices);
                var j = this._effectBase;
                this._scene.fogEnabled && this._scene.fogMode !== a.Scene.FOGMODE_NONE && this.fogEnabled && (j = this._effectFog), b.enableEffect(j);
                var k = this._scene.getViewMatrix();
                j.setTexture("diffuseSampler", this._spriteTexture), j.setMatrix("view", k), j.setMatrix("projection", this._scene.getProjectionMatrix()), j.setFloat2("textureInfos", this.cellSize / c.width, this.cellSize / c.height), this._scene.fogEnabled && this._scene.fogMode !== a.Scene.FOGMODE_NONE && this.fogEnabled && (j.setFloat4("vFogInfos", this._scene.fogMode, this._scene.fogStart, this._scene.fogEnd, this._scene.fogDensity), j.setColor3("vFogColor", this._scene.fogColor)), b.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, j), j.setBool("alphaTest", !0), b.setColorWrite(!1), b.draw(!0, 0, 6 * e), b.setColorWrite(!0), j.setBool("alphaTest", !1), b.setAlphaMode(a.Engine.ALPHA_COMBINE), b.draw(!0, 0, 6 * e), b.setAlphaMode(a.Engine.ALPHA_DISABLE)
            }
        }, b.prototype.dispose = function() {
            this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._spriteTexture && (this._spriteTexture.dispose(), this._spriteTexture = null);
            var a = this._scene.spriteManagers.indexOf(this);
            this._scene.spriteManagers.splice(a, 1), this.onDispose && this.onDispose()
        }, b
    }();
    a.SpriteManager = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c) {
            this.name = b, this.color = new a.Color4(1, 1, 1, 1), this.size = 1, this.angle = 0, this.cellIndex = 0, this.invertU = 0, this.invertV = 0, this.animations = new Array, this._animationStarted = !1, this._loopAnimation = !1, this._fromIndex = 0, this._toIndex = 0, this._delay = 0, this._direction = 1, this._frameCount = 0, this._time = 0, this._manager = c, this._manager.sprites.push(this), this.position = a.Vector3.Zero()
        }
        return b.prototype.playAnimation = function(a, b, c, d) {
            this._fromIndex = a, this._toIndex = b, this._loopAnimation = c, this._delay = d, this._animationStarted = !0, this._direction = b > a ? 1 : -1, this.cellIndex = a, this._time = 0
        }, b.prototype.stopAnimation = function() {
            this._animationStarted = !1
        }, b.prototype._animate = function(a) {
            this._animationStarted && (this._time += a, this._time > this._delay && (this._time = this._time % this._delay, this.cellIndex += this._direction, this.cellIndex == this._toIndex && (this._loopAnimation ? this.cellIndex = this._fromIndex : (this._animationStarted = !1, this.disposeWhenFinishedAnimating && this.dispose()))))
        }, b.prototype.dispose = function() {
            for (var a = 0; a < this._manager.sprites.length; a++) this._manager.sprites[a] == this && this._manager.sprites.splice(a, 1)
        }, b
    }();
    a.Sprite = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d, e, f) {
            this.name = b, this._vertexDeclaration = [2], this._vertexStrideSize = 8, this.texture = c ? new a.Texture(c, d, !0) : null, this.isBackground = void 0 === e ? !0 : e, this.color = void 0 === f ? new a.Color4(1, 1, 1, 1) : f, this._scene = d, this._scene.layers.push(this);
            var g = [];
            g.push(1, 1), g.push(-1, 1), g.push(-1, -1), g.push(1, -1), this._vertexBuffer = d.getEngine().createVertexBuffer(g);
            var h = [];
            h.push(0), h.push(1), h.push(2), h.push(0), h.push(2), h.push(3), this._indexBuffer = d.getEngine().createIndexBuffer(h), this._effect = this._scene.getEngine().createEffect("layer", ["position"], ["textureMatrix", "color"], ["textureSampler"], "")
        }
        return b.prototype.render = function() {
            if (this._effect.isReady() && this.texture && this.texture.isReady()) {
                var b = this._scene.getEngine();
                b.enableEffect(this._effect), b.setState(!1), this._effect.setTexture("textureSampler", this.texture), this._effect.setMatrix("textureMatrix", this.texture.getTextureMatrix()), this._effect.setFloat4("color", this.color.r, this.color.g, this.color.b, this.color.a), b.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, this._effect), b.setAlphaMode(a.Engine.ALPHA_COMBINE), b.draw(!0, 0, 6), b.setAlphaMode(a.Engine.ALPHA_DISABLE)
            }
        }, b.prototype.dispose = function() {
            this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this.texture && (this.texture.dispose(), this.texture = null);
            var a = this._scene.layers.indexOf(this);
            this._scene.layers.splice(a, 1), this.onDispose && this.onDispose()
        }, b
    }();
    a.Layer = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b() {
            this.position = a.Vector3.Zero(), this.direction = a.Vector3.Zero(), this.color = new a.Color4(0, 0, 0, 0), this.colorStep = new a.Color4(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.angle = 0, this.angularSpeed = 0
        }
        return b.prototype.copyTo = function(a) {
            a.position.copyFrom(this.position), a.direction.copyFrom(this.direction), a.color.copyFrom(this.color), a.colorStep.copyFrom(this.colorStep), a.lifeTime = this.lifeTime, a.age = this.age, a.size = this.size, a.angle = this.angle, a.angularSpeed = this.angularSpeed
        }, b
    }();
    a.Particle = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function(a, b) {
            if (a === b) return a;
            var c = Math.random();
            return c * (b - a) + a
        },
        c = function() {
            function c(d, e, f, g) {
                var h = this;
                this.name = d, this.renderingGroupId = 0, this.emitter = null, this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this.targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.blendMode = c.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.gravity = a.Vector3.Zero(), this.direction1 = new a.Vector3(0, 1, 0), this.direction2 = new a.Vector3(0, 1, 0), this.minEmitBox = new a.Vector3(-.5, -.5, -.5), this.maxEmitBox = new a.Vector3(.5, .5, .5), this.color1 = new a.Color4(1, 1, 1, 1), this.color2 = new a.Color4(1, 1, 1, 1), this.colorDead = new a.Color4(0, 0, 0, 1), this.textureMask = new a.Color4(1, 1, 1, 1), this.particles = new Array, this._vertexDeclaration = [3, 4, 4], this._vertexStrideSize = 44, this._stockParticles = new Array, this._newPartsExcess = 0, this._scaledColorStep = new a.Color4(0, 0, 0, 0), this._colorDiff = new a.Color4(0, 0, 0, 0), this._scaledDirection = a.Vector3.Zero(), this._scaledGravity = a.Vector3.Zero(), this._currentRenderId = -1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this.id = d, this._capacity = e, this._scene = f, this._customEffect = g, f.particleSystems.push(this), this._vertexBuffer = f.getEngine().createDynamicVertexBuffer(e * this._vertexStrideSize * 4);
                for (var i = [], j = 0, k = 0; e > k; k++) i.push(j), i.push(j + 1), i.push(j + 2), i.push(j), i.push(j + 2), i.push(j + 3), j += 4;
                this._indexBuffer = f.getEngine().createIndexBuffer(i), this._vertices = new Float32Array(e * this._vertexStrideSize), this.startDirectionFunction = function(c, d, e) {
                    var f = b(h.direction1.x, h.direction2.x),
                        g = b(h.direction1.y, h.direction2.y),
                        i = b(h.direction1.z, h.direction2.z);
                    a.Vector3.TransformNormalFromFloatsToRef(f * c, g * c, i * c, d, e)
                }, this.startPositionFunction = function(c, d) {
                    var e = b(h.minEmitBox.x, h.maxEmitBox.x),
                        f = b(h.minEmitBox.y, h.maxEmitBox.y),
                        g = b(h.minEmitBox.z, h.maxEmitBox.z);
                    a.Vector3.TransformCoordinatesFromFloatsToRef(e, f, g, c, d)
                }, this.updateFunction = function(a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        c.age += h._scaledUpdateSpeed, c.age >= c.lifeTime ? (h.recycleParticle(c), b--) : (c.colorStep.scaleToRef(h._scaledUpdateSpeed, h._scaledColorStep), c.color.addInPlace(h._scaledColorStep), c.color.a < 0 && (c.color.a = 0), c.angle += c.angularSpeed * h._scaledUpdateSpeed, c.direction.scaleToRef(h._scaledUpdateSpeed, h._scaledDirection), c.position.addInPlace(h._scaledDirection), h.gravity.scaleToRef(h._scaledUpdateSpeed, h._scaledGravity), c.direction.addInPlace(h._scaledGravity))
                    }
                }
            }
            return c.prototype.recycleParticle = function(a) {
                var b = this.particles.pop();
                b !== a && (b.copyTo(a), this._stockParticles.push(b))
            }, c.prototype.getCapacity = function() {
                return this._capacity
            }, c.prototype.isAlive = function() {
                return this._alive
            }, c.prototype.isStarted = function() {
                return this._started
            }, c.prototype.start = function() {
                this._started = !0, this._stopped = !1, this._actualFrame = 0
            }, c.prototype.stop = function() {
                this._stopped = !0
            }, c.prototype._appendParticleVertex = function(a, b, c, d) {
                var e = 11 * a;
                this._vertices[e] = b.position.x, this._vertices[e + 1] = b.position.y, this._vertices[e + 2] = b.position.z, this._vertices[e + 3] = b.color.r, this._vertices[e + 4] = b.color.g, this._vertices[e + 5] = b.color.b, this._vertices[e + 6] = b.color.a, this._vertices[e + 7] = b.angle, this._vertices[e + 8] = b.size, this._vertices[e + 9] = c, this._vertices[e + 10] = d
            }, c.prototype._update = function(c) {
                this._alive = this.particles.length > 0, this.updateFunction(this.particles);
                var d;
                d = this.emitter.position ? this.emitter.getWorldMatrix() : a.Matrix.Translation(this.emitter.x, this.emitter.y, this.emitter.z);
                for (var e = 0; c > e && this.particles.length !== this._capacity; e++) {
                    if (0 !== this._stockParticles.length) {
                        var f = this._stockParticles.pop();
                        f.age = 0
                    } else f = new a.Particle;
                    this.particles.push(f);
                    var g = b(this.minEmitPower, this.maxEmitPower);
                    this.startDirectionFunction(g, d, f.direction), f.lifeTime = b(this.minLifeTime, this.maxLifeTime), f.size = b(this.minSize, this.maxSize), f.angularSpeed = b(this.minAngularSpeed, this.maxAngularSpeed), this.startPositionFunction(d, f.position);
                    var h = b(0, 1);
                    a.Color4.LerpToRef(this.color1, this.color2, h, f.color), this.colorDead.subtractToRef(f.color, this._colorDiff), this._colorDiff.scaleToRef(1 / f.lifeTime, f.colorStep)
                }
            }, c.prototype._getEffect = function() {
                if (this._customEffect) return this._customEffect;
                var a = [];
                this._scene.clipPlane && a.push("#define CLIPPLANE");
                var b = a.join("\n");
                return this._cachedDefines !== b && (this._cachedDefines = b, this._effect = this._scene.getEngine().createEffect("particles", ["position", "color", "options"], ["invView", "view", "projection", "vClipPlane", "textureMask"], ["diffuseSampler"], b)), this._effect
            }, c.prototype.animate = function() {
                if (this._started) {
                    var a = this._getEffect();
                    if (this.emitter && a.isReady() && this.particleTexture && this.particleTexture.isReady() && this._currentRenderId !== this._scene.getRenderId()) {
                        this._currentRenderId = this._scene.getRenderId(), this._scaledUpdateSpeed = this.updateSpeed * this._scene.getAnimationRatio();
                        var b;
                        this.manualEmitCount > -1 ? (b = this.manualEmitCount, this.manualEmitCount = 0) : b = this.emitRate;
                        var c = b * this._scaledUpdateSpeed >> 0;
                        this._newPartsExcess += b * this._scaledUpdateSpeed - c, this._newPartsExcess > 1 && (c += this._newPartsExcess >> 0, this._newPartsExcess -= this._newPartsExcess >> 0), this._alive = !1, this._stopped ? c = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(c), this._stopped && (this._alive || (this._started = !1, this.disposeOnStop && this._scene._toBeDisposed.push(this)));
                        for (var d = 0, e = 0; e < this.particles.length; e++) {
                            var f = this.particles[e];
                            this._appendParticleVertex(d++, f, 0, 0), this._appendParticleVertex(d++, f, 1, 0), this._appendParticleVertex(d++, f, 1, 1), this._appendParticleVertex(d++, f, 0, 1)
                        }
                        var g = this._scene.getEngine();
                        g.updateDynamicVertexBuffer(this._vertexBuffer, this._vertices)
                    }
                }
            }, c.prototype.render = function() {
                var b = this._getEffect();
                if (!(this.emitter && b.isReady() && this.particleTexture && this.particleTexture.isReady() && this.particles.length)) return 0;
                var d = this._scene.getEngine();
                d.enableEffect(b), d.setState(!1);
                var e = this._scene.getViewMatrix();
                if (b.setTexture("diffuseSampler", this.particleTexture), b.setMatrix("view", e), b.setMatrix("projection", this._scene.getProjectionMatrix()), b.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._scene.clipPlane) {
                    var f = this._scene.clipPlane,
                        g = e.clone();
                    g.invert(), b.setMatrix("invView", g), b.setFloat4("vClipPlane", f.normal.x, f.normal.y, f.normal.z, f.d)
                }
                return d.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, b), d.setAlphaMode(this.blendMode === c.BLENDMODE_ONEONE ? a.Engine.ALPHA_ADD : a.Engine.ALPHA_COMBINE), this.forceDepthWrite && d.setDepthWrite(!0), d.draw(!0, 0, 6 * this.particles.length), d.setAlphaMode(a.Engine.ALPHA_DISABLE), this.particles.length
            }, c.prototype.dispose = function() {
                this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null);
                var a = this._scene.particleSystems.indexOf(this);
                this._scene.particleSystems.splice(a, 1), this.onDispose && this.onDispose()
            }, c.prototype.clone = function(b, d) {
                var e = new c(b, this._capacity, this._scene);
                return a.Tools.DeepCopy(this, e, ["particles"], ["_vertexDeclaration", "_vertexStrideSize"]), void 0 === d && (d = this.emitter), e.emitter = d, this.particleTexture && (e.particleTexture = new a.Texture(this.particleTexture.url, this._scene)), e.start(), e
            }, c.BLENDMODE_ONEONE = 0, c.BLENDMODE_STANDARD = 1, c
        }();
    a.ParticleSystem = c
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, c, d, e, f) {
            this.name = a, this.targetProperty = c, this.framePerSecond = d, this.dataType = e, this.loopMode = f, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this.targetPropertyPath = c.split("."), this.dataType = e, this.loopMode = void 0 === f ? b.ANIMATIONLOOPMODE_CYCLE : f
        }
        return b.CreateAndStartAnimation = function(c, d, e, f, g, h, i, j) {
            var k = void 0;
            if (!isNaN(parseFloat(h)) && isFinite(h) ? k = b.ANIMATIONTYPE_FLOAT : h instanceof a.Quaternion ? k = b.ANIMATIONTYPE_QUATERNION : h instanceof a.Vector3 ? k = b.ANIMATIONTYPE_VECTOR3 : h instanceof a.Vector2 ? k = b.ANIMATIONTYPE_VECTOR2 : h instanceof a.Color3 && (k = b.ANIMATIONTYPE_COLOR3), void 0 != k) {
                var l = new b(c, e, f, k, j),
                    m = [];
                m.push({
                    frame: 0,
                    value: h
                }), m.push({
                    frame: g,
                    value: i
                }), l.setKeys(m), d.animations.push(l), d.getScene().beginAnimation(d, 0, g, 1 === l.loopMode)
            }
        }, b.prototype.isStopped = function() {
            return this._stopped
        }, b.prototype.getKeys = function() {
            return this._keys
        }, b.prototype.getEasingFunction = function() {
            return this._easingFunction
        }, b.prototype.setEasingFunction = function(a) {
            this._easingFunction = a
        }, b.prototype.floatInterpolateFunction = function(a, b, c) {
            return a + (b - a) * c
        }, b.prototype.quaternionInterpolateFunction = function(b, c, d) {
            return a.Quaternion.Slerp(b, c, d)
        }, b.prototype.vector3InterpolateFunction = function(b, c, d) {
            return a.Vector3.Lerp(b, c, d)
        }, b.prototype.vector2InterpolateFunction = function(b, c, d) {
            return a.Vector2.Lerp(b, c, d)
        }, b.prototype.color3InterpolateFunction = function(b, c, d) {
            return a.Color3.Lerp(b, c, d)
        }, b.prototype.matrixInterpolateFunction = function(b, c, d) {
            var e = new a.Vector3(0, 0, 0),
                f = new a.Quaternion,
                g = new a.Vector3(0, 0, 0);
            b.decompose(e, f, g);
            var h = new a.Vector3(0, 0, 0),
                i = new a.Quaternion,
                j = new a.Vector3(0, 0, 0);
            c.decompose(h, i, j);
            var k = this.vector3InterpolateFunction(e, h, d),
                l = this.quaternionInterpolateFunction(f, i, d),
                m = this.vector3InterpolateFunction(g, j, d),
                n = a.Matrix.Compose(k, l, m);
            return n
        }, b.prototype.clone = function() {
            var a = new b(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.loopMode);
            return a.setKeys(this._keys), a
        }, b.prototype.setKeys = function(a) {
            this._keys = a.slice(0), this._offsetsCache = {}, this._highLimitsCache = {}
        }, b.prototype._getKeyValue = function(a) {
            return "function" == typeof a ? a() : a
        }, b.prototype._interpolate = function(a, c, d, e, f) {
            if (d === b.ANIMATIONLOOPMODE_CONSTANT && c > 0) return f.clone ? f.clone() : f;
            this.currentFrame = a;
            for (var g = 0; g < this._keys.length; g++)
                if (this._keys[g + 1].frame >= a) {
                    var h = this._getKeyValue(this._keys[g].value),
                        i = this._getKeyValue(this._keys[g + 1].value),
                        j = (a - this._keys[g].frame) / (this._keys[g + 1].frame - this._keys[g].frame);
                    switch (null != this._easingFunction && (j = this._easingFunction.ease(j)), this.dataType) {
                        case b.ANIMATIONTYPE_FLOAT:
                            switch (d) {
                                case b.ANIMATIONLOOPMODE_CYCLE:
                                case b.ANIMATIONLOOPMODE_CONSTANT:
                                    return this.floatInterpolateFunction(h, i, j);
                                case b.ANIMATIONLOOPMODE_RELATIVE:
                                    return e * c + this.floatInterpolateFunction(h, i, j)
                            }
                            break;
                        case b.ANIMATIONTYPE_QUATERNION:
                            var k = null;
                            switch (d) {
                                case b.ANIMATIONLOOPMODE_CYCLE:
                                case b.ANIMATIONLOOPMODE_CONSTANT:
                                    k = this.quaternionInterpolateFunction(h, i, j);
                                    break;
                                case b.ANIMATIONLOOPMODE_RELATIVE:
                                    k = this.quaternionInterpolateFunction(h, i, j).add(e.scale(c))
                            }
                            return k;
                        case b.ANIMATIONTYPE_VECTOR3:
                            switch (d) {
                                case b.ANIMATIONLOOPMODE_CYCLE:
                                case b.ANIMATIONLOOPMODE_CONSTANT:
                                    return this.vector3InterpolateFunction(h, i, j);
                                case b.ANIMATIONLOOPMODE_RELATIVE:
                                    return this.vector3InterpolateFunction(h, i, j).add(e.scale(c))
                            }
                        case b.ANIMATIONTYPE_VECTOR2:
                            switch (d) {
                                case b.ANIMATIONLOOPMODE_CYCLE:
                                case b.ANIMATIONLOOPMODE_CONSTANT:
                                    return this.vector2InterpolateFunction(h, i, j);
                                case b.ANIMATIONLOOPMODE_RELATIVE:
                                    return this.vector2InterpolateFunction(h, i, j).add(e.scale(c))
                            }
                        case b.ANIMATIONTYPE_COLOR3:
                            switch (d) {
                                case b.ANIMATIONLOOPMODE_CYCLE:
                                case b.ANIMATIONLOOPMODE_CONSTANT:
                                    return this.color3InterpolateFunction(h, i, j);
                                case b.ANIMATIONLOOPMODE_RELATIVE:
                                    return this.color3InterpolateFunction(h, i, j).add(e.scale(c))
                            }
                        case b.ANIMATIONTYPE_MATRIX:
                            switch (d) {
                                case b.ANIMATIONLOOPMODE_CYCLE:
                                case b.ANIMATIONLOOPMODE_CONSTANT:
                                case b.ANIMATIONLOOPMODE_RELATIVE:
                                    return h
                            }
                    }
                    break
                }
            return this._getKeyValue(this._keys[this._keys.length - 1].value)
        }, b.prototype.animate = function(c, d, e, f, g) {
            if (!this.targetPropertyPath || this.targetPropertyPath.length < 1) return this._stopped = !0, !1;
            var h = !0;
            if (0 !== this._keys[0].frame) {
                var i = {
                    frame: 0,
                    value: this._keys[0].value
                };
                this._keys.splice(0, 0, i)
            }(d < this._keys[0].frame || d > this._keys[this._keys.length - 1].frame) && (d = this._keys[0].frame), (e < this._keys[0].frame || e > this._keys[this._keys.length - 1].frame) && (e = this._keys[this._keys.length - 1].frame);
            var j, k = e - d,
                l = c * this.framePerSecond * g / 1e3,
                m = 0;
            if (l > k && !f) h = !1, m = this._getKeyValue(this._keys[this._keys.length - 1].value);
            else if (this.loopMode !== b.ANIMATIONLOOPMODE_CYCLE) {
                var n = e.toString() + d.toString();
                if (!this._offsetsCache[n]) {
                    var o = this._interpolate(d, 0, b.ANIMATIONLOOPMODE_CYCLE),
                        p = this._interpolate(e, 0, b.ANIMATIONLOOPMODE_CYCLE);
                    switch (this.dataType) {
                        case b.ANIMATIONTYPE_FLOAT:
                            this._offsetsCache[n] = p - o;
                            break;
                        case b.ANIMATIONTYPE_QUATERNION:
                            this._offsetsCache[n] = p.subtract(o);
                            break;
                        case b.ANIMATIONTYPE_VECTOR3:
                            this._offsetsCache[n] = p.subtract(o);
                        case b.ANIMATIONTYPE_VECTOR2:
                            this._offsetsCache[n] = p.subtract(o);
                        case b.ANIMATIONTYPE_COLOR3:
                            this._offsetsCache[n] = p.subtract(o)
                    }
                    this._highLimitsCache[n] = p
                }
                m = this._highLimitsCache[n], j = this._offsetsCache[n]
            }
            if (void 0 === j) switch (this.dataType) {
                case b.ANIMATIONTYPE_FLOAT:
                    j = 0;
                    break;
                case b.ANIMATIONTYPE_QUATERNION:
                    j = new a.Quaternion(0, 0, 0, 0);
                    break;
                case b.ANIMATIONTYPE_VECTOR3:
                    j = a.Vector3.Zero();
                    break;
                case b.ANIMATIONTYPE_VECTOR2:
                    j = a.Vector2.Zero();
                    break;
                case b.ANIMATIONTYPE_COLOR3:
                    j = a.Color3.Black()
            }
            var q = l / k >> 0,
                r = h ? d + l % k : e,
                s = this._interpolate(r, q, this.loopMode, j, m);
            if (this.targetPropertyPath.length > 1) {
                for (var t = this._target[this.targetPropertyPath[0]], u = 1; u < this.targetPropertyPath.length - 1; u++) t = t[this.targetPropertyPath[u]];
                t[this.targetPropertyPath[this.targetPropertyPath.length - 1]] = s
            } else this._target[this.targetPropertyPath[0]] = s;
            return this._target.markAsDirty && this._target.markAsDirty(this.targetProperty), h || (this._stopped = !0), h
        }, Object.defineProperty(b, "ANIMATIONTYPE_FLOAT", {
            get: function() {
                return b._ANIMATIONTYPE_FLOAT
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONTYPE_VECTOR3", {
            get: function() {
                return b._ANIMATIONTYPE_VECTOR3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONTYPE_VECTOR2", {
            get: function() {
                return b._ANIMATIONTYPE_VECTOR2
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONTYPE_QUATERNION", {
            get: function() {
                return b._ANIMATIONTYPE_QUATERNION
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONTYPE_MATRIX", {
            get: function() {
                return b._ANIMATIONTYPE_MATRIX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONTYPE_COLOR3", {
            get: function() {
                return b._ANIMATIONTYPE_COLOR3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONLOOPMODE_RELATIVE", {
            get: function() {
                return b._ANIMATIONLOOPMODE_RELATIVE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONLOOPMODE_CYCLE", {
            get: function() {
                return b._ANIMATIONLOOPMODE_CYCLE
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ANIMATIONLOOPMODE_CONSTANT", {
            get: function() {
                return b._ANIMATIONLOOPMODE_CONSTANT
            },
            enumerable: !0,
            configurable: !0
        }), b._ANIMATIONTYPE_FLOAT = 0, b._ANIMATIONTYPE_VECTOR3 = 1, b._ANIMATIONTYPE_QUATERNION = 2, b._ANIMATIONTYPE_MATRIX = 3, b._ANIMATIONTYPE_COLOR3 = 4, b._ANIMATIONTYPE_VECTOR2 = 5, b._ANIMATIONLOOPMODE_RELATIVE = 0, b._ANIMATIONLOOPMODE_CYCLE = 1, b._ANIMATIONLOOPMODE_CONSTANT = 2, b
    }();
    a.Animation = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(a, b, c, d, e, f, g, h) {
            void 0 === c && (c = 0), void 0 === d && (d = 100), void 0 === e && (e = !1), void 0 === f && (f = 1), this.target = b, this.fromFrame = c, this.toFrame = d, this.loopAnimation = e, this.speedRatio = f, this.onAnimationEnd = g, this._animations = new Array, this._paused = !1, this.animationStarted = !1, h && this.appendAnimations(b, h), this._scene = a, a._activeAnimatables.push(this)
        }
        return a.prototype.appendAnimations = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d._target = a, this._animations.push(d)
            }
        }, a.prototype.getAnimationByTargetProperty = function(a) {
            for (var b = this._animations, c = 0; c < b.length; c++)
                if (b[c].targetProperty === a) return b[c];
            return null
        }, a.prototype.pause = function() {
            this._paused || (this._paused = !0)
        }, a.prototype.restart = function() {
            this._paused = !1
        }, a.prototype.stop = function() {
            var a = this._scene._activeAnimatables.indexOf(this);
            a > -1 && this._scene._activeAnimatables.splice(a, 1), this.onAnimationEnd && this.onAnimationEnd()
        }, a.prototype._animate = function(a) {
            if (this._paused) return this._pausedDelay || (this._pausedDelay = a), !0;
            this._localDelayOffset ? this._pausedDelay && (this._localDelayOffset += a - this._pausedDelay, this._pausedDelay = null) : this._localDelayOffset = a;
            for (var b = !1, c = this._animations, d = 0; d < c.length; d++) {
                var e = c[d],
                    f = e.animate(a - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this.speedRatio);
                b = b || f
            }
            return !b && this.onAnimationEnd && this.onAnimationEnd(), b
        }, a
    }();
    a.Animatable = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function() {
        function a() {
            this._easingMode = a.EASINGMODE_EASEIN
        }
        return Object.defineProperty(a, "EASINGMODE_EASEIN", {
            get: function() {
                return a._EASINGMODE_EASEIN
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a, "EASINGMODE_EASEOUT", {
            get: function() {
                return a._EASINGMODE_EASEOUT
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a, "EASINGMODE_EASEINOUT", {
            get: function() {
                return a._EASINGMODE_EASEINOUT
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.setEasingMode = function(a) {
            var b = Math.min(Math.max(a, 0), 2);
            this._easingMode = b
        }, a.prototype.getEasingMode = function() {
            return this._easingMode
        }, a.prototype.easeInCore = function() {
            throw new Error("You must implement this method")
        }, a.prototype.ease = function(b) {
            switch (this._easingMode) {
                case a.EASINGMODE_EASEIN:
                    return this.easeInCore(b);
                case a.EASINGMODE_EASEOUT:
                    return 1 - this.easeInCore(1 - b)
            }
            return b >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - b))) + .5 : .5 * this.easeInCore(2 * b)
        }, a._EASINGMODE_EASEIN = 0, a._EASINGMODE_EASEOUT = 1, a._EASINGMODE_EASEINOUT = 2, a
    }();
    a.EasingFunction = b;
    var c = function(a) {
        function b() {
            a.apply(this, arguments)
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            return a = Math.max(0, Math.min(1, a)), 1 - Math.sqrt(1 - a * a)
        }, b
    }(b);
    a.CircleEase = c;
    var d = function(a) {
        function b(b) {
            void 0 === b && (b = 1), a.call(this), this.amplitude = b
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            var b = Math.max(0, this.amplitude);
            return Math.pow(a, 3) - a * b * Math.sin(3.141592653589793 * a)
        }, b
    }(b);
    a.BackEase = d;
    var e = function(a) {
        function b(b, c) {
            void 0 === b && (b = 3), void 0 === c && (c = 2), a.call(this), this.bounces = b, this.bounciness = c
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            var b = Math.max(0, this.bounces),
                c = this.bounciness;
            1 >= c && (c = 1.001);
            var d = Math.pow(c, b),
                e = 1 - c,
                f = (1 - d) / e + .5 * d,
                g = a * f,
                h = Math.log(-g * (1 - c) + 1) / Math.log(c),
                i = Math.floor(h),
                j = i + 1,
                k = (1 - Math.pow(c, i)) / (e * f),
                l = (1 - Math.pow(c, j)) / (e * f),
                m = .5 * (k + l),
                n = a - m,
                o = m - k;
            return -Math.pow(1 / c, b - i) / (o * o) * (n - o) * (n + o)
        }, b
    }(b);
    a.BounceEase = e;
    var f = function(a) {
        function b() {
            a.apply(this, arguments)
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            return a * a * a
        }, b
    }(b);
    a.CubicEase = f;
    var g = function(a) {
        function b(b, c) {
            void 0 === b && (b = 3), void 0 === c && (c = 3), a.call(this), this.oscillations = b, this.springiness = c
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            var b, c = Math.max(0, this.oscillations),
                d = Math.max(0, this.springiness);
            return b = 0 == d ? a : (Math.exp(d * a) - 1) / (Math.exp(d) - 1), b * Math.sin((6.283185307179586 * c + 1.5707963267948966) * a)
        }, b
    }(b);
    a.ElasticEase = g;
    var h = function(a) {
        function b(b) {
            void 0 === b && (b = 2), a.call(this), this.exponent = b
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            return this.exponent <= 0 ? a : (Math.exp(this.exponent * a) - 1) / (Math.exp(this.exponent) - 1)
        }, b
    }(b);
    a.ExponentialEase = h;
    var i = function(a) {
        function b(b) {
            void 0 === b && (b = 2), a.call(this), this.power = b
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            var b = Math.max(0, this.power);
            return Math.pow(a, b)
        }, b
    }(b);
    a.PowerEase = i;
    var j = function(a) {
        function b() {
            a.apply(this, arguments)
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            return a * a
        }, b
    }(b);
    a.QuadraticEase = j;
    var k = function(a) {
        function b() {
            a.apply(this, arguments)
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            return a * a * a * a
        }, b
    }(b);
    a.QuarticEase = k;
    var l = function(a) {
        function b() {
            a.apply(this, arguments)
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            return a * a * a * a * a
        }, b
    }(b);
    a.QuinticEase = l;
    var m = function(a) {
        function b() {
            a.apply(this, arguments)
        }
        return __extends(b, a), b.prototype.easeInCore = function(a) {
            return 1 - Math.sin(1.5707963267948966 * (1 - a))
        }, b
    }(b);
    a.SineEase = m;
    var n = function(b) {
        function c(a, c, d, e) {
            void 0 === a && (a = 0), void 0 === c && (c = 0), void 0 === d && (d = 1), void 0 === e && (e = 1), b.call(this), this.x1 = a, this.y1 = c, this.x2 = d, this.y2 = e
        }
        return __extends(c, b), c.prototype.easeInCore = function(b) {
            return a.BezierCurve.interpolate(b, this.x1, this.y1, this.x2, this.y2)
        }, c
    }(b);
    a.BezierCurveEase = n
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d) {
            void 0 === d && (d = 2), this.maxDepth = d, this.dynamicContent = new Array, this._maxBlockCapacity = c || 64, this._selectionContent = new a.SmartArray(1024), this._creationFunc = b
        }
        return b.prototype.update = function(a, c, d) {
            b._CreateBlocks(a, c, d, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
        }, b.prototype.addMesh = function(a) {
            for (var b = 0; b < this.blocks.length; b++) {
                var c = this.blocks[b];
                c.addEntry(a)
            }
        }, b.prototype.select = function(a, b) {
            this._selectionContent.reset();
            for (var c = 0; c < this.blocks.length; c++) {
                var d = this.blocks[c];
                d.select(a, this._selectionContent, b)
            }
            return b ? this._selectionContent.concat(this.dynamicContent) : this._selectionContent.concatWithNoDuplicate(this.dynamicContent), this._selectionContent
        }, b.prototype.intersects = function(a, b, c) {
            this._selectionContent.reset();
            for (var d = 0; d < this.blocks.length; d++) {
                var e = this.blocks[d];
                e.intersects(a, b, this._selectionContent, c)
            }
            return c ? this._selectionContent.concat(this.dynamicContent) : this._selectionContent.concatWithNoDuplicate(this.dynamicContent), this._selectionContent
        }, b.prototype.intersectsRay = function(a) {
            this._selectionContent.reset();
            for (var b = 0; b < this.blocks.length; b++) {
                var c = this.blocks[b];
                c.intersectsRay(a, this._selectionContent)
            }
            return this._selectionContent.concatWithNoDuplicate(this.dynamicContent), this._selectionContent
        }, b._CreateBlocks = function(b, c, d, e, f, g, h, i) {
            h.blocks = new Array;
            for (var j = new a.Vector3((c.x - b.x) / 2, (c.y - b.y) / 2, (c.z - b.z) / 2), k = 0; 2 > k; k++)
                for (var l = 0; 2 > l; l++)
                    for (var m = 0; 2 > m; m++) {
                        var n = b.add(j.multiplyByFloats(k, l, m)),
                            o = b.add(j.multiplyByFloats(k + 1, l + 1, m + 1)),
                            p = new a.OctreeBlock(n, o, e, f + 1, g, i);
                        p.addEntries(d), h.blocks.push(p)
                    }
        }, b.CreationFuncForMeshes = function(a, b) {
            !a.isBlocked && a.getBoundingInfo().boundingBox.intersectsMinMax(b.minPoint, b.maxPoint) && b.entries.push(a)
        }, b.CreationFuncForSubMeshes = function(a, b) {
            a.getBoundingInfo().boundingBox.intersectsMinMax(b.minPoint, b.maxPoint) && b.entries.push(a)
        }, b
    }();
    a.Octree = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b, c, d, e, f) {
            this.entries = new Array, this._boundingVectors = new Array, this._capacity = c, this._depth = d, this._maxDepth = e, this._creationFunc = f, this._minPoint = a, this._maxPoint = b, this._boundingVectors.push(a.clone()), this._boundingVectors.push(b.clone()), this._boundingVectors.push(a.clone()), this._boundingVectors[2].x = b.x, this._boundingVectors.push(a.clone()), this._boundingVectors[3].y = b.y, this._boundingVectors.push(a.clone()), this._boundingVectors[4].z = b.z, this._boundingVectors.push(b.clone()), this._boundingVectors[5].z = a.z, this._boundingVectors.push(b.clone()), this._boundingVectors[6].x = a.x, this._boundingVectors.push(b.clone()), this._boundingVectors[7].y = a.y
        }
        return Object.defineProperty(b.prototype, "capacity", {
            get: function() {
                return this._capacity
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "minPoint", {
            get: function() {
                return this._minPoint
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "maxPoint", {
            get: function() {
                return this._maxPoint
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.addEntry = function(a) {
            if (this.blocks)
                for (var b = 0; b < this.blocks.length; b++) {
                    var c = this.blocks[b];
                    c.addEntry(a)
                } else this._creationFunc(a, this), this.entries.length > this.capacity && this._depth < this._maxDepth && this.createInnerBlocks()
        }, b.prototype.addEntries = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.addEntry(c)
            }
        }, b.prototype.select = function(b, c, d) {
            if (a.BoundingBox.IsInFrustum(this._boundingVectors, b)) {
                if (this.blocks) {
                    for (var e = 0; e < this.blocks.length; e++) {
                        var f = this.blocks[e];
                        f.select(b, c, d)
                    }
                    return
                }
                d ? c.concat(this.entries) : c.concatWithNoDuplicate(this.entries)
            }
        }, b.prototype.intersects = function(b, c, d, e) {
            if (a.BoundingBox.IntersectsSphere(this._minPoint, this._maxPoint, b, c)) {
                if (this.blocks) {
                    for (var f = 0; f < this.blocks.length; f++) {
                        var g = this.blocks[f];
                        g.intersects(b, c, d, e)
                    }
                    return
                }
                e ? d.concat(this.entries) : d.concatWithNoDuplicate(this.entries)
            }
        }, b.prototype.intersectsRay = function(a, b) {
            if (a.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
                if (this.blocks) {
                    for (var c = 0; c < this.blocks.length; c++) {
                        var d = this.blocks[c];
                        d.intersectsRay(a, b)
                    }
                    return
                }
                b.concatWithNoDuplicate(this.entries)
            }
        }, b.prototype.createInnerBlocks = function() {
            a.Octree._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc)
        }, b
    }();
    a.OctreeBlock = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d, e) {
            this.name = b, this.children = new Array, this.animations = new Array, this._worldTransform = new a.Matrix, this._absoluteTransform = new a.Matrix, this._invertedAbsoluteTransform = new a.Matrix, this._skeleton = c, this._matrix = e, this._baseMatrix = e, c.bones.push(this), d ? (this._parent = d, d.children.push(this)) : this._parent = null, this._updateDifferenceMatrix()
        }
        return b.prototype.getParent = function() {
            return this._parent
        }, b.prototype.getLocalMatrix = function() {
            return this._matrix
        }, b.prototype.getBaseMatrix = function() {
            return this._baseMatrix
        }, b.prototype.getWorldMatrix = function() {
            return this._worldTransform
        }, b.prototype.getInvertedAbsoluteTransform = function() {
            return this._invertedAbsoluteTransform
        }, b.prototype.getAbsoluteMatrix = function() {
            for (var a = this._matrix.clone(), b = this._parent; b;) a = a.multiply(b.getLocalMatrix()), b = b.getParent();
            return a
        }, b.prototype.updateMatrix = function(a) {
            this._matrix = a, this._skeleton._markAsDirty(), this._updateDifferenceMatrix()
        }, b.prototype._updateDifferenceMatrix = function() {
            this._parent ? this._matrix.multiplyToRef(this._parent._absoluteTransform, this._absoluteTransform) : this._absoluteTransform.copyFrom(this._matrix), this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform);
            for (var a = 0; a < this.children.length; a++) this.children[a]._updateDifferenceMatrix()
        }, b.prototype.markAsDirty = function() {
            this._skeleton._markAsDirty()
        }, b
    }();
    a.Bone = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d) {
            this.name = b, this.id = c, this.bones = new Array, this._isDirty = !0, this._identity = a.Matrix.Identity(), this.bones = [], this._scene = d, d.skeletons.push(this)
        }
        return b.prototype.getTransformMatrices = function() {
            return this._transformMatrices
        }, b.prototype._markAsDirty = function() {
            this._isDirty = !0
        }, b.prototype.prepare = function() {
            if (this._isDirty) {
                this._transformMatrices && this._transformMatrices.length === 16 * (this.bones.length + 1) || (this._transformMatrices = new Float32Array(16 * (this.bones.length + 1)));
                for (var a = 0; a < this.bones.length; a++) {
                    var b = this.bones[a],
                        c = b.getParent();
                    c ? b.getLocalMatrix().multiplyToRef(c.getWorldMatrix(), b.getWorldMatrix()) : b.getWorldMatrix().copyFrom(b.getLocalMatrix()), b.getInvertedAbsoluteTransform().multiplyToArray(b.getWorldMatrix(), this._transformMatrices, 16 * a)
                }
                this._identity.copyToArray(this._transformMatrices, 16 * this.bones.length), this._isDirty = !1
            }
        }, b.prototype.getAnimatables = function() {
            if (!this._animatables || this._animatables.length != this.bones.length) {
                this._animatables = [];
                for (var a = 0; a < this.bones.length; a++) this._animatables.push(this.bones[a])
            }
            return this._animatables
        }, b.prototype.clone = function(b, c) {
            for (var d = new a.Skeleton(b, c || b, this._scene), e = 0; e < this.bones.length; e++) {
                var f = this.bones[e],
                    g = null;
                if (f.getParent()) {
                    var h = this.bones.indexOf(f.getParent());
                    g = d.bones[h]
                }
                var i = new a.Bone(f.name, d, g, f.getBaseMatrix());
                a.Tools.DeepCopy(f.animations, i.animations)
            }
            return d
        }, b
    }();
    a.Skeleton = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d, e, f, g, h, i, j, k) {
            this.name = b, this.width = -1, this.height = -1, this._reusable = !1, this._textures = new a.SmartArray(2), this._currentRenderTextureInd = 0, null != g ? (this._camera = g, this._scene = g.getScene(), g.attachPostProcess(this), this._engine = this._scene.getEngine()) : this._engine = i, this._renderRatio = f, this.renderTargetSamplingMode = h ? h : a.Texture.NEAREST_SAMPLINGMODE, this._reusable = j || !1, e = e || [], e.push("textureSampler"), this._effect = this._engine.createEffect({
                vertex: "postprocess",
                fragment: c
            }, ["position"], d || [], e, void 0 !== k ? k : "")
        }
        return b.prototype.isReusable = function() {
            return this._reusable
        }, b.prototype.activate = function(b, c) {
            b = b || this._camera;
            var d = b.getScene(),
                e = b.getEngine().getCaps().maxTextureSize,
                f = (c ? c._width : this._engine.getRenderingCanvas().width) * this._renderRatio | 0,
                g = (c ? c._height : this._engine.getRenderingCanvas().height) * this._renderRatio | 0;
            if (f = a.Tools.GetExponantOfTwo(f, e), g = a.Tools.GetExponantOfTwo(g, e), this.width !== f || this.height !== g) {
                if (this._textures.length > 0) {
                    for (var h = 0; h < this._textures.length; h++) this._engine._releaseTexture(this._textures.data[h]);
                    this._textures.reset()
                }
                this.width = f, this.height = g, this._textures.push(this._engine.createRenderTargetTexture({
                    width: this.width,
                    height: this.height
                }, {
                    generateMipMaps: !1,
                    generateDepthBuffer: b._postProcesses.indexOf(this) === b._postProcessesTakenIndices[0],
                    samplingMode: this.renderTargetSamplingMode
                })), this._reusable && this._textures.push(this._engine.createRenderTargetTexture({
                    width: this.width,
                    height: this.height
                }, {
                    generateMipMaps: !1,
                    generateDepthBuffer: b._postProcesses.indexOf(this) === b._postProcessesTakenIndices[0],
                    samplingMode: this.renderTargetSamplingMode
                })), this.onSizeChanged && this.onSizeChanged()
            }
            this._engine.bindFramebuffer(this._textures.data[this._currentRenderTextureInd]), this.onActivate && this.onActivate(b), this._engine.clear(d.clearColor, d.autoClear || d.forceWireframe, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2)
        }, b.prototype.apply = function() {
            return this._effect.isReady() ? (this._engine.enableEffect(this._effect), this._engine.setState(!1), this._engine.setAlphaMode(a.Engine.ALPHA_DISABLE), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this._effect._bindTexture("textureSampler", this._textures.data[this._currentRenderTextureInd]), this.onApply && this.onApply(this._effect), this._effect) : null
        }, b.prototype.dispose = function(a) {
            if (a = a || this._camera, this._textures.length > 0) {
                for (var b = 0; b < this._textures.length; b++) this._engine._releaseTexture(this._textures.data[b]);
                this._textures.reset()
            }
            a.detachPostProcess(this);
            var c = a._postProcesses.indexOf(this);
            c === a._postProcessesTakenIndices[0] && a._postProcessesTakenIndices.length > 0 && (this._camera._postProcesses[a._postProcessesTakenIndices[0]].width = -1)
        }, b
    }();
    a.PostProcess = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(a) {
            this._vertexDeclaration = [2], this._vertexStrideSize = 8, this._scene = a;
            var b = [];
            b.push(1, 1), b.push(-1, 1), b.push(-1, -1), b.push(1, -1), this._vertexBuffer = a.getEngine().createVertexBuffer(b);
            var c = [];
            c.push(0), c.push(1), c.push(2), c.push(0), c.push(2), c.push(3), this._indexBuffer = a.getEngine().createIndexBuffer(c)
        }
        return a.prototype._prepareFrame = function(a) {
            var b = this._scene.activeCamera._postProcesses,
                c = this._scene.activeCamera._postProcessesTakenIndices;
            return 0 !== c.length && this._scene.postProcessesEnabled ? (b[this._scene.activeCamera._postProcessesTakenIndices[0]].activate(this._scene.activeCamera, a), !0) : !1
        }, a.prototype._finalizeFrame = function(a, b) {
            var c = this._scene.activeCamera._postProcesses,
                d = this._scene.activeCamera._postProcessesTakenIndices;
            if (0 !== d.length && this._scene.postProcessesEnabled) {
                for (var e = this._scene.getEngine(), f = 0; f < d.length && (f < d.length - 1 ? c[d[f + 1]].activate(this._scene.activeCamera) : b ? e.bindFramebuffer(b) : e.restoreDefaultFramebuffer(), !a); f++) {
                    var g = c[d[f]],
                        h = g.apply();
                    h && (g.onBeforeRender && g.onBeforeRender(h), e.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, h), e.draw(!0, 0, 6))
                }
                e.setDepthBuffer(!0), e.setDepthWrite(!0)
            }
        }, a.prototype.dispose = function() {
            this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
        }, a
    }();
    a.PostProcessManager = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g) {
            a.call(this, b, "pass", null, null, c, d, e, f, g)
        }
        return __extends(b, a), b
    }(a.PostProcess);
    a.PassPostProcess = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f, g, h, i, j) {
            var k = this;
            void 0 === h && (h = a.Texture.BILINEAR_SAMPLINGMODE), b.call(this, c, "blur", ["screenSize", "direction", "blurWidth"], null, f, g, h, i, j), this.direction = d, this.blurWidth = e, this.onApply = function(a) {
                a.setFloat2("screenSize", k.width, k.height), a.setVector2("direction", k.direction), a.setFloat("blurWidth", k.blurWidth)
            }
        }
        return __extends(c, b), c
    }(a.PostProcess);
    a.BlurPostProcess = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g, h) {
            var i = this;
            a.call(this, b, "filter", ["kernelMatrix"], null, d, e, f, g, h), this.kernelMatrix = c, this.onApply = function(a) {
                a.setMatrix("kernelMatrix", i.kernelMatrix)
            }
        }
        return __extends(b, a), b
    }(a.PostProcess);
    a.FilterPostProcess = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f, g, h, i, j, k, l) {
            var m = this;
            b.call(this, c, "refraction", ["baseColor", "depth", "colorLevel"], ["refractionSampler"], h, i, j, k, l), this.color = e, this.depth = f, this.colorLevel = g, this.onActivate = function(b) {
                m._refRexture = m._refRexture || new a.Texture(d, b.getScene())
            }, this.onApply = function(a) {
                a.setColor3("baseColor", m.color), a.setFloat("depth", m.depth), a.setFloat("colorLevel", m.colorLevel), a.setTexture("refractionSampler", m._refRexture)
            }
        }
        return __extends(c, b), c.prototype.dispose = function(a) {
            this._refRexture && this._refRexture.dispose(), b.prototype.dispose.call(this, a)
        }, c
    }(a.PostProcess);
    a.RefractionPostProcess = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g) {
            a.call(this, b, "blackAndWhite", null, null, c, d, e, f, g)
        }
        return __extends(b, a), b
    }(a.PostProcess);
    a.BlackAndWhitePostProcess = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g, h) {
            var i = this;
            a.call(this, b, "convolution", ["kernel", "screenSize"], null, d, e, f, g, h), this.kernel = c, this.onApply = function(a) {
                a.setFloat2("screenSize", i.width, i.height), a.setArray("kernel", i.kernel)
            }
        }
        return __extends(b, a), b.EdgeDetect0Kernel = [1, 0, -1, 0, 0, 0, -1, 0, 1], b.EdgeDetect1Kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0], b.EdgeDetect2Kernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1], b.SharpenKernel = [0, -1, 0, -1, 5, -1, 0, -1, 0], b.EmbossKernel = [-2, -1, 0, -1, 1, 1, 0, 1, 2], b.GaussianKernel = [0, 1, 0, 1, 1, 1, 0, 1, 0], b
    }(a.PostProcess);
    a.ConvolutionPostProcess = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g) {
            var h = this;
            a.call(this, b, "fxaa", ["texelSize"], null, c, d, e, f, g), this.onSizeChanged = function() {
                h.texelWidth = 1 / h.width, h.texelHeight = 1 / h.height
            }, this.onApply = function(a) {
                a.setFloat2("texelSize", h.texelWidth, h.texelHeight)
            }
        }
        return __extends(b, a), b
    }(a.PostProcess);
    a.FxaaPostProcess = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d, e, f) {
            this.size = b, this.position = c, this.dispose = function() {
                this.texture && this.texture.dispose();
                var a = this._system.lensFlares.indexOf(this);
                this._system.lensFlares.splice(a, 1)
            }, this.color = d || new a.Color3(1, 1, 1), this.texture = e ? new a.Texture(e, f.getScene(), !0) : null, this._system = f, f.lensFlares.push(this)
        }
        return b
    }();
    a.LensFlare = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b, c) {
            this.name = a, this.lensFlares = new Array, this.borderLimit = 300, this._vertexDeclaration = [2], this._vertexStrideSize = 8, this._isEnabled = !0, this._scene = c, this._emitter = b, c.lensFlareSystems.push(this), this.meshesSelectionPredicate = function(a) {
                return a.material && a.isVisible && a.isEnabled() && a.isBlocker && 0 != (a.layerMask & c.activeCamera.layerMask)
            };
            var d = [];
            d.push(1, 1), d.push(-1, 1), d.push(-1, -1), d.push(1, -1), this._vertexBuffer = c.getEngine().createVertexBuffer(d);
            var e = [];
            e.push(0), e.push(1), e.push(2), e.push(0), e.push(2), e.push(3), this._indexBuffer = c.getEngine().createIndexBuffer(e), this._effect = this._scene.getEngine().createEffect("lensFlare", ["position"], ["color", "viewportMatrix"], ["textureSampler"], "")
        }
        return Object.defineProperty(b.prototype, "isEnabled", {
            get: function() {
                return this._isEnabled
            },
            set: function(a) {
                this._isEnabled = a
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.getScene = function() {
            return this._scene
        }, b.prototype.getEmitter = function() {
            return this._emitter
        }, b.prototype.getEmitterPosition = function() {
            return this._emitter.getAbsolutePosition ? this._emitter.getAbsolutePosition() : this._emitter.position
        }, b.prototype.computeEffectivePosition = function(b) {
            var c = this.getEmitterPosition();
            return c = a.Vector3.Project(c, a.Matrix.Identity(), this._scene.getTransformMatrix(), b), this._positionX = c.x, this._positionY = c.y, c = a.Vector3.TransformCoordinates(this.getEmitterPosition(), this._scene.getViewMatrix()), c.z > 0 && this._positionX > b.x && this._positionX < b.x + b.width && this._positionY > b.y && this._positionY < b.y + b.height ? !0 : !1
        }, b.prototype._isVisible = function() {
            if (!this._isEnabled) return !1;
            var b = this.getEmitterPosition(),
                c = b.subtract(this._scene.activeCamera.position),
                d = c.length();
            c.normalize();
            var e = new a.Ray(this._scene.activeCamera.position, c),
                f = this._scene.pickWithRay(e, this.meshesSelectionPredicate, !0);
            return !f.hit || f.distance > d
        }, b.prototype.render = function() {
            if (!this._effect.isReady()) return !1;
            var b = this._scene.getEngine(),
                c = this._scene.activeCamera.viewport,
                d = c.toGlobal(b);
            if (!this.computeEffectivePosition(d)) return !1;
            if (!this._isVisible()) return !1;
            var e, f;
            e = this._positionX < this.borderLimit + d.x ? this.borderLimit + d.x - this._positionX : this._positionX > d.x + d.width - this.borderLimit ? this._positionX - d.x - d.width + this.borderLimit : 0, f = this._positionY < this.borderLimit + d.y ? this.borderLimit + d.y - this._positionY : this._positionY > d.y + d.height - this.borderLimit ? this._positionY - d.y - d.height + this.borderLimit : 0;
            var g = e > f ? e : f;
            g > this.borderLimit && (g = this.borderLimit);
            var h = 1 - g / this.borderLimit;
            if (0 > h) return !1;
            h > 1 && (h = 1);
            var i = d.x + d.width / 2,
                j = d.y + d.height / 2,
                k = i - this._positionX,
                l = j - this._positionY;
            b.enableEffect(this._effect), b.setState(!1), b.setDepthBuffer(!1), b.setAlphaMode(a.Engine.ALPHA_ADD), b.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, this._effect);
            for (var m = 0; m < this.lensFlares.length; m++) {
                var n = this.lensFlares[m],
                    o = i - k * n.position,
                    p = j - l * n.position,
                    q = n.size,
                    r = n.size * b.getAspectRatio(this._scene.activeCamera),
                    s = 2 * (o / d.width) - 1,
                    t = 1 - 2 * (p / d.height),
                    u = a.Matrix.FromValues(q / 2, 0, 0, 0, 0, r / 2, 0, 0, 0, 0, 1, 0, s, t, 0, 1);
                this._effect.setMatrix("viewportMatrix", u), this._effect.setTexture("textureSampler", n.texture), this._effect.setFloat4("color", n.color.r * h, n.color.g * h, n.color.b * h, 1), b.draw(!0, 0, 6)
            }
            return b.setDepthBuffer(!0), b.setAlphaMode(a.Engine.ALPHA_DISABLE), !0
        }, b.prototype.dispose = function() {
            for (this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null); this.lensFlares.length;) this.lensFlares[0].dispose();
            var a = this._scene.lensFlareSystems.indexOf(this);
            this._scene.lensFlareSystems.splice(a, 1)
        }, b
    }();
    a.LensFlareSystem = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(a, b, c) {
            this.bu = a, this.bv = b, this.distance = c, this.faceId = 0
        }
        return a
    }();
    a.IntersectionInfo = b;
    var c = function() {
        function b() {
            this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1
        }
        return b.prototype.getNormal = function() {
            if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(a.VertexBuffer.NormalKind)) return null;
            var b = this.pickedMesh.getIndices(),
                c = this.pickedMesh.getVerticesData(a.VertexBuffer.NormalKind),
                d = a.Vector3.FromArray(c, 3 * b[3 * this.faceId]),
                e = a.Vector3.FromArray(c, 3 * b[3 * this.faceId + 1]),
                f = a.Vector3.FromArray(c, 3 * b[3 * this.faceId + 2]);
            return d = d.scale(this.bu), e = e.scale(this.bv), f = f.scale(1 - this.bu - this.bv), new a.Vector3(d.x + e.x + f.x, d.y + e.y + f.y, d.z + e.z + f.z)
        }, b.prototype.getTextureCoordinates = function() {
            if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(a.VertexBuffer.UVKind)) return null;
            var b = this.pickedMesh.getIndices(),
                c = this.pickedMesh.getVerticesData(a.VertexBuffer.UVKind),
                d = a.Vector2.FromArray(c, 2 * b[3 * this.faceId]),
                e = a.Vector2.FromArray(c, 2 * b[3 * this.faceId + 1]),
                f = a.Vector2.FromArray(c, 2 * b[3 * this.faceId + 2]);
            return d = d.scale(this.bu), e = e.scale(this.bv), f = f.scale(1 - this.bu - this.bv), new a.Vector2(d.x + e.x + f.x, d.y + e.y + f.y)
        }, b
    }();
    a.PickingInfo = c
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b, c, d, e, f, g, h) {
            this.engine = a, this.canvas = c, this.currentScene = b, this.sceneLoadedCallback = d, this.progressCallback = e, this.additionnalRenderLoopLogicCallback = f, this.textureLoadingCallback = g, this.startingProcessingFilesCallback = h
        }
        return b.prototype.monitorElementForDragNDrop = function(a) {
            var b = this;
            a && (this.elementToMonitor = a, this.elementToMonitor.addEventListener("dragenter", function(a) {
                b.drag(a)
            }, !1), this.elementToMonitor.addEventListener("dragover", function(a) {
                b.drag(a)
            }, !1), this.elementToMonitor.addEventListener("drop", function(a) {
                b.drop(a)
            }, !1))
        }, b.prototype.renderFunction = function() {
            if (this.additionnalRenderLoopLogicCallback && this.additionnalRenderLoopLogicCallback(), this.currentScene) {
                if (this.textureLoadingCallback) {
                    var a = this.currentScene.getWaitingItemsCount();
                    a > 0 && this.textureLoadingCallback(a)
                }
                this.currentScene.render()
            }
        }, b.prototype.drag = function(a) {
            a.stopPropagation(), a.preventDefault()
        }, b.prototype.drop = function(a) {
            a.stopPropagation(), a.preventDefault(), this.loadFiles(a)
        }, b.prototype.loadFiles = function(b) {
            var c = this,
                d = this;
            this.startingProcessingFilesCallback && this.startingProcessingFilesCallback();
            var e, f;
            if (b && b.dataTransfer && b.dataTransfer.files && (f = b.dataTransfer.files), b && b.target && b.target.files && (f = b.target.files), f && f.length > 0) {
                for (var g = 0; g < f.length; g++) switch (f[g].type) {
                    case "image/jpeg":
                    case "image/png":
                        a.FilesInput.FilesTextures[f[g].name] = f[g];
                        break;
                    case "image/targa":
                    case "image/vnd.ms-dds":
                    case "audio/wav":
                    case "audio/x-wav":
                    case "audio/mp3":
                    case "audio/mpeg":
                    case "audio/mpeg3":
                    case "audio/x-mpeg-3":
                    case "audio/ogg":
                        a.FilesInput.FilesToLoad[f[g].name] = f[g];
                        break;
                    default:
                        -1 !== f[g].name.indexOf(".babylon") && -1 === f[g].name.indexOf(".manifest") && -1 === f[g].name.indexOf(".incremental") && -1 === f[g].name.indexOf(".babylonmeshdata") && -1 === f[g].name.indexOf(".babylongeometrydata") && (e = f[g])
                }
                e ? (this.currentScene && (this.engine.stopRenderLoop(), this.currentScene.dispose()), a.SceneLoader.Load("file:", e, this.engine, function(a) {
                    d.currentScene = a, d.currentScene.executeWhenReady(function() {
                        d.currentScene.activeCamera && d.currentScene.activeCamera.attachControl(d.canvas), d.sceneLoadedCallback && d.sceneLoadedCallback(e, d.currentScene), d.engine.runRenderLoop(function() {
                            d.renderFunction()
                        })
                    })
                }, function(a) {
                    c.progressCallback && c.progressCallback(a)
                })) : a.Tools.Error("Please provide a valid .babylon file.")
            }
        }, b.FilesTextures = new Array, b.FilesToLoad = new Array, b
    }();
    a.FilesInput = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b() {
            this._registeredMeshes = [], this.updateBodyPosition = function(a) {
                for (var b = 0; b < this._registeredMeshes.length; b++) {
                    var c = this._registeredMeshes[b];
                    if (c.mesh === a || c.mesh === a.parent) {
                        var d = c.body.body;
                        a.computeWorldMatrix(!0);
                        var e = a.getBoundingInfo().boundingBox.center;
                        return d.setPosition(e.x, e.y, e.z), void d.setRotation(a.rotation.x, a.rotation.y, a.rotation.z)
                    }
                    if (c.mesh.parent === a) {
                        a.computeWorldMatrix(!0), c.mesh.computeWorldMatrix(!0);
                        var f = c.mesh.getAbsolutePosition(),
                            g = a.rotation;
                        return d = c.body.body, d.setPosition(f.x, f.y, f.z), void d.setRotation(g.x, g.y, g.z)
                    }
                }
            }
        }
        return b.prototype._checkWithEpsilon = function(b) {
            return b < a.PhysicsEngine.Epsilon ? a.PhysicsEngine.Epsilon : b
        }, b.prototype.initialize = function() {
            this._world = new OIMO.World, this._world.clear()
        }, b.prototype.setGravity = function(a) {
            this._world.gravity = a
        }, b.prototype.registerMesh = function(b, c, d) {
            var e = null;
            switch (this.unregisterMesh(b), b.computeWorldMatrix(!0), c) {
                case a.PhysicsEngine.SphereImpostor:
                    var f = null;
                    b.rotationQuaternion && (f = b.rotationQuaternion.clone(), b.rotationQuaternion = new a.Quaternion(0, 0, 0, 1), b.computeWorldMatrix(!0));
                    var g = b.getBoundingInfo().boundingBox,
                        h = g.maximumWorld.x - g.minimumWorld.x,
                        i = g.maximumWorld.y - g.minimumWorld.y,
                        j = g.maximumWorld.z - g.minimumWorld.z,
                        k = Math.max(this._checkWithEpsilon(h), this._checkWithEpsilon(i), this._checkWithEpsilon(j)) / 2,
                        l = b.position.subtract(g.center);
                    if (f) {
                        var m = new a.Matrix;
                        f.toRotationMatrix(m), l = a.Vector3.TransformCoordinates(l, m)
                    }
                    e = new OIMO.Body({
                        type: "sphere",
                        size: [k],
                        pos: [g.center.x, g.center.y, g.center.z],
                        rot: [b.rotation.x / OIMO.TO_RAD, b.rotation.y / OIMO.TO_RAD, b.rotation.z / OIMO.TO_RAD],
                        move: 0 != d.mass,
                        config: [d.mass, d.friction, d.restitution],
                        world: this._world
                    }), f && e.setQuaternion(f), this._registeredMeshes.push({
                        mesh: b,
                        body: e,
                        delta: l
                    });
                    break;
                case a.PhysicsEngine.PlaneImpostor:
                case a.PhysicsEngine.BoxImpostor:
                    f = null, b.rotationQuaternion && (f = b.rotationQuaternion.clone(), b.rotationQuaternion = new a.Quaternion(0, 0, 0, 1), b.computeWorldMatrix(!0)), g = b.getBoundingInfo().boundingBox;
                    var n = g.minimumWorld,
                        o = g.maximumWorld,
                        p = o.subtract(n),
                        q = this._checkWithEpsilon(p.x),
                        r = this._checkWithEpsilon(p.y),
                        s = this._checkWithEpsilon(p.z);
                    l = b.position.subtract(g.center), f && (m = new a.Matrix, f.toRotationMatrix(m), l = a.Vector3.TransformCoordinates(l, m)), e = new OIMO.Body({
                        type: "box",
                        size: [q, r, s],
                        pos: [g.center.x, g.center.y, g.center.z],
                        rot: [b.rotation.x / OIMO.TO_RAD, b.rotation.y / OIMO.TO_RAD, b.rotation.z / OIMO.TO_RAD],
                        move: 0 != d.mass,
                        config: [d.mass, d.friction, d.restitution],
                        world: this._world
                    }), f && e.setQuaternion(f), this._registeredMeshes.push({
                        mesh: b,
                        body: e,
                        delta: l
                    })
            }
            return e
        }, b.prototype.registerMeshesAsCompound = function(a, b) {
            for (var c = [], d = [], e = [], f = [], g = a[0].mesh, h = 0; h < a.length; h++) {
                var i = a[h],
                    j = this._createBodyAsCompound(i, b, g);
                c.push(j.type), d.push.apply(d, j.size), e.push.apply(e, j.pos), f.push.apply(f, j.rot)
            }
            var k = new OIMO.Body({
                type: c,
                size: d,
                pos: e,
                rot: f,
                move: 0 != b.mass,
                config: [b.mass, b.friction, b.restitution],
                world: this._world
            });
            return this._registeredMeshes.push({
                mesh: g,
                body: k
            }), k
        }, b.prototype._createBodyAsCompound = function(b) {
            var c = null,
                d = b.mesh;
            switch (d.computeWorldMatrix(), b.impostor) {
                case a.PhysicsEngine.SphereImpostor:
                    var e = d.getBoundingInfo().boundingBox,
                        f = e.maximumWorld.x - e.minimumWorld.x,
                        g = e.maximumWorld.y - e.minimumWorld.y,
                        h = e.maximumWorld.z - e.minimumWorld.z,
                        i = Math.max(this._checkWithEpsilon(f), this._checkWithEpsilon(g), this._checkWithEpsilon(h)) / 2;
                    c = {
                        type: "sphere",
                        size: [i, -1, -1],
                        pos: [d.position.x, d.position.y, d.position.z],
                        rot: [d.rotation.x / OIMO.TO_RAD, d.rotation.y / OIMO.TO_RAD, d.rotation.z / OIMO.TO_RAD]
                    };
                    break;
                case a.PhysicsEngine.PlaneImpostor:
                case a.PhysicsEngine.BoxImpostor:
                    e = d.getBoundingInfo().boundingBox;
                    var j = e.minimumWorld,
                        k = e.maximumWorld,
                        l = k.subtract(j),
                        m = this._checkWithEpsilon(l.x),
                        n = this._checkWithEpsilon(l.y),
                        o = this._checkWithEpsilon(l.z),
                        p = d.position;
                    c = {
                        type: "box",
                        size: [m, n, o],
                        pos: [p.x, p.y, p.z],
                        rot: [d.rotation.x / OIMO.TO_RAD, d.rotation.y / OIMO.TO_RAD, d.rotation.z / OIMO.TO_RAD]
                    }
            }
            return c
        }, b.prototype.unregisterMesh = function(a) {
            for (var b = 0; b < this._registeredMeshes.length; b++) {
                var c = this._registeredMeshes[b];
                if (c.mesh === a || c.mesh === a.parent) return c.body && (this._world.removeRigidBody(c.body.body), this._unbindBody(c.body)), void this._registeredMeshes.splice(b, 1)
            }
        }, b.prototype._unbindBody = function(a) {
            for (var b = 0; b < this._registeredMeshes.length; b++) {
                var c = this._registeredMeshes[b];
                c.body === a && (c.body = null)
            }
        }, b.prototype.applyImpulse = function(a, b, c) {
            for (var d = 0; d < this._registeredMeshes.length; d++) {
                var e = this._registeredMeshes[d];
                if (e.mesh === a || e.mesh === a.parent) {
                    var f = e.body.body.massInfo.mass;
                    return void e.body.body.applyImpulse(c.scale(OIMO.INV_SCALE), b.scale(OIMO.INV_SCALE * f))
                }
            }
        }, b.prototype.createLink = function(a, b, c, d, e) {
            for (var f = null, g = null, h = 0; h < this._registeredMeshes.length; h++) {
                var i = this._registeredMeshes[h];
                i.mesh === a ? f = i.body.body : i.mesh === b && (g = i.body.body)
            }
            return f && g ? (e || (e = {}), new OIMO.Link({
                type: e.type,
                body1: f,
                body2: g,
                min: e.min,
                max: e.max,
                axe1: e.axe1,
                axe2: e.axe2,
                pos1: [c.x, c.y, c.z],
                pos2: [d.x, d.y, d.z],
                collision: e.collision,
                spring: e.spring,
                world: this._world
            }), !0) : !1
        }, b.prototype.dispose = function() {
            for (this._world.clear(); this._registeredMeshes.length;) this.unregisterMesh(this._registeredMeshes[0].mesh)
        }, b.prototype.isSupported = function() {
            return void 0 !== OIMO
        }, b.prototype._getLastShape = function(a) {
            for (var b = a.shapes; b.next;) b = b.next;
            return b
        }, b.prototype.runOneStep = function() {
            this._world.step();
            for (var b, c = this._registeredMeshes.length; c--;) {
                var d = this._registeredMeshes[c].body.body,
                    e = this._registeredMeshes[c].mesh,
                    f = this._registeredMeshes[c].delta;
                if (!d.sleeping)
                    if (d.shapes.next) {
                        var g = this._getLastShape(d);
                        e.position.x = g.position.x * OIMO.WORLD_SCALE, e.position.y = g.position.y * OIMO.WORLD_SCALE, e.position.z = g.position.z * OIMO.WORLD_SCALE;
                        var h = a.Matrix.FromArray(d.getMatrix());
                        e.rotationQuaternion || (e.rotationQuaternion = new a.Quaternion(0, 0, 0, 1)), e.rotationQuaternion.fromRotationMatrix(h), e.computeWorldMatrix()
                    } else {
                        b = d.getMatrix(), h = a.Matrix.FromArray(b);
                        var i = h.m[12],
                            j = h.m[13],
                            k = h.m[14];
                        f ? (e.position.x = i + f.x, e.position.y = j + f.y, e.position.z = k + f.z) : (e.position.x = i, e.position.y = j, e.position.z = k), e.rotationQuaternion || (e.rotationQuaternion = new a.Quaternion(0, 0, 0, 1)), e.rotationQuaternion.fromRotationMatrix(h), e.computeWorldMatrix()
                    }
            }
        }, b
    }();
    a.OimoJSPlugin = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b) {
            this._currentPlugin = b || new a.OimoJSPlugin
        }
        return b.prototype._initialize = function(a) {
            this._currentPlugin.initialize(), this._setGravity(a)
        }, b.prototype._runOneStep = function(a) {
            a > .1 ? a = .1 : 0 >= a && (a = 1 / 60), this._currentPlugin.runOneStep(a)
        }, b.prototype._setGravity = function(b) {
            this.gravity = b || new a.Vector3(0, -9.82, 0), this._currentPlugin.setGravity(this.gravity)
        }, b.prototype._registerMesh = function(a, b, c) {
            return this._currentPlugin.registerMesh(a, b, c)
        }, b.prototype._registerMeshesAsCompound = function(a, b) {
            return this._currentPlugin.registerMeshesAsCompound(a, b)
        }, b.prototype._unregisterMesh = function(a) {
            this._currentPlugin.unregisterMesh(a)
        }, b.prototype._applyImpulse = function(a, b, c) {
            this._currentPlugin.applyImpulse(a, b, c)
        }, b.prototype._createLink = function(a, b, c, d, e) {
            return this._currentPlugin.createLink(a, b, c, d, e)
        }, b.prototype._updateBodyPosition = function(a) {
            this._currentPlugin.updateBodyPosition(a)
        }, b.prototype.dispose = function() {
            this._currentPlugin.dispose()
        }, b.prototype.isSupported = function() {
            return this._currentPlugin.isSupported()
        }, b.NoImpostor = 0, b.SphereImpostor = 1, b.BoxImpostor = 2, b.PlaneImpostor = 3, b.MeshImpostor = 4, b.CapsuleImpostor = 5, b.ConeImpostor = 6, b.CylinderImpostor = 7, b.ConvexHullImpostor = 8, b.Epsilon = .001, b
    }();
    a.PhysicsEngine = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function(b) {
            var c = {};
            if (c.name = b.name, c.id = b.id, c.tags = a.Tags.GetTags(b), b instanceof a.PointLight) c.type = 0, c.position = b.position.asArray();
            else if (b instanceof a.DirectionalLight) {
                c.type = 1;
                var d = b;
                c.position = d.position.asArray(), c.direction = d.direction.asArray()
            } else if (b instanceof a.SpotLight) {
                c.type = 2;
                var e = b;
                c.position = e.position.asArray(), c.direction = e.position.asArray(), c.angle = e.angle, c.exponent = e.exponent
            } else if (b instanceof a.HemisphericLight) {
                c.type = 3;
                var f = b;
                c.direction = f.direction.asArray(), c.groundColor = f.groundColor.asArray()
            }
            return b.intensity && (c.intensity = b.intensity), c.range = b.range, c.diffuse = b.diffuse.asArray(), c.specular = b.specular.asArray(), c
        },
        c = function(a) {
            var b = {};
            return b.isEnabled = a.isEnabled, b.leftColor = a.leftColor, b.rightColor = a.rightColor, b.bias = a.bias, b.power = a.power, b
        },
        d = function(b) {
            var c = {};
            return c.name = b.name, c.tags = a.Tags.GetTags(b), c.id = b.id, c.position = b.position.asArray(), b.parent && (c.parentId = b.parent.id), c.rotation = b.rotation.asArray(), b.lockedTarget && b.lockedTarget.id && (c.lockedTargetId = b.lockedTarget.id), c.fov = b.fov, c.minZ = b.minZ, c.maxZ = b.maxZ, c.speed = b.speed, c.inertia = b.inertia, c.checkCollisions = b.checkCollisions, c.applyGravity = b.applyGravity, b.ellipsoid && (c.ellipsoid = b.ellipsoid.asArray()), e(b, c), c.layerMask = b.layerMask, c
        },
        e = function(a, b) {
            if (a.animations) {
                b.animations = [];
                for (var c = 0; c < a.animations.length; c++) {
                    var d = a.animations[c];
                    b.animations.push(f(d))
                }
            }
        },
        f = function(b) {
            var c = {};
            c.name = b.name, c.property = b.targetProperty, c.framePerSecond = b.framePerSecond, c.dataType = b.dataType, c.loopBehavior = b.loopMode;
            var d = b.dataType;
            c.keys = [];
            for (var e = b.getKeys(), f = 0; f < e.length; f++) {
                var g = e[f],
                    h = {};
                switch (h.frame = g.frame, d) {
                    case a.Animation.ANIMATIONTYPE_FLOAT:
                        h.values = [g.value];
                        break;
                    case a.Animation.ANIMATIONTYPE_QUATERNION:
                    case a.Animation.ANIMATIONTYPE_MATRIX:
                    case a.Animation.ANIMATIONTYPE_VECTOR3:
                        h.values = g.value.asArray()
                }
                c.keys.push(h)
            }
            return c
        },
        g = function(b) {
            var c = {};
            c.name = b.name, c.id = b.id, c.tags = a.Tags.GetTags(b), c.materials = [];
            for (var d = 0; d < b.subMaterials.length; d++) {
                var e = b.subMaterials[d];
                c.materials.push(e ? e.id : null)
            }
            return c
        },
        h = function(b) {
            var d = {};
            return d.name = b.name, d.ambient = b.ambientColor.asArray(), d.diffuse = b.diffuseColor.asArray(), d.specular = b.specularColor.asArray(), d.specularPower = b.specularPower, d.emissive = b.emissiveColor.asArray(), d.alpha = b.alpha, d.id = b.id, d.tags = a.Tags.GetTags(b), d.backFaceCulling = b.backFaceCulling, b.diffuseTexture && (d.diffuseTexture = i(b.diffuseTexture)), b.diffuseFresnelParameters && (d.diffuseFresnelParameters = c(b.diffuseFresnelParameters)), b.ambientTexture && (d.ambientTexture = i(b.ambientTexture)), b.opacityTexture && (d.opacityTexture = i(b.opacityTexture)), b.opacityFresnelParameters && (d.opacityFresnelParameters = c(b.opacityFresnelParameters)), b.reflectionTexture && (d.reflectionTexture = i(b.reflectionTexture)), b.reflectionFresnelParameters && (d.reflectionFresnelParameters = c(b.reflectionFresnelParameters)), b.emissiveTexture && (d.emissiveTexture = i(b.emissiveTexture)), b.emissiveFresnelParameters && (d.emissiveFresnelParameters = c(b.emissiveFresnelParameters)), b.specularTexture && (d.specularTexture = i(b.specularTexture)), b.bumpTexture && (d.bumpTexture = i(b.bumpTexture)), d
        },
        i = function(b) {
            var c = {};
            if (!b.name) return null;
            if (b instanceof a.CubeTexture) return c.name = b.name, c.hasAlpha = b.hasAlpha, c.level = b.level, c.coordinatesMode = b.coordinatesMode, c;
            if (b instanceof a.MirrorTexture) {
                var d = b;
                c.renderTargetSize = d.getRenderSize(), c.renderList = [];
                for (var f = 0; f < d.renderList.length; f++) c.renderList.push(d.renderList[f].id);
                c.mirrorPlane = d.mirrorPlane.asArray()
            } else if (b instanceof a.RenderTargetTexture) {
                var g = b;
                for (c.renderTargetSize = g.getRenderSize(), c.renderList = [], f = 0; f < g.renderList.length; f++) c.renderList.push(g.renderList[f].id)
            }
            var h = b;
            return c.name = b.name, c.hasAlpha = b.hasAlpha, c.level = b.level, c.coordinatesIndex = b.coordinatesIndex, c.coordinatesMode = b.coordinatesMode, c.uOffset = h.uOffset, c.vOffset = h.vOffset, c.uScale = h.uScale, c.vScale = h.vScale, c.uAng = h.uAng, c.vAng = h.vAng, c.wAng = h.wAng, c.wrapU = b.wrapU, c.wrapV = b.wrapV, e(b, c), c
        },
        j = function(a) {
            var b = {};
            b.name = a.name, b.id = a.id, b.bones = [];
            for (var c = 0; c < a.bones.length; c++) {
                var d = a.bones[c],
                    e = {
                        parentBoneIndex: d.getParent() ? a.bones.indexOf(d.getParent()) : -1,
                        name: d.name,
                        matrix: d.getLocalMatrix().toArray()
                    };
                b.bones.push(e), d.animations && d.animations.length > 0 && (e.animation = f(d.animations[0]))
            }
            return b
        },
        k = function(a) {
            var b = {};
            return b.emitterId = a.emitter.id, b.capacity = a.getCapacity(), a.particleTexture && (b.textureName = a.particleTexture.name), b.minAngularSpeed = a.minAngularSpeed, b.maxAngularSpeed = a.maxAngularSpeed, b.minSize = a.minSize, b.maxSize = a.maxSize, b.minLifeTime = a.minLifeTime, b.maxLifeTime = a.maxLifeTime, b.emitRate = a.emitRate, b.minEmitBox = a.minEmitBox.asArray(), b.maxEmitBox = a.maxEmitBox.asArray(), b.gravity = a.gravity.asArray(), b.direction1 = a.direction1.asArray(), b.direction2 = a.direction2.asArray(), b.color1 = a.color1.asArray(), b.color2 = a.color2.asArray(), b.colorDead = a.colorDead.asArray(), b.updateSpeed = a.updateSpeed, b.targetStopDuration = a.targetStopDuration, b.textureMask = a.textureMask.asArray(), b.blendMode = a.blendMode, b
        },
        l = function(b) {
            var c = {};
            c.emitterId = b.getEmitter().id, c.borderLimit = b.borderLimit, c.flares = [];
            for (var d = 0; d < b.lensFlares.length; d++) {
                var e = b.lensFlares[d];
                c.flares.push({
                    size: e.size,
                    position: e.position,
                    color: e.color.asArray(),
                    textureName: a.Tools.GetFilename(e.texture.name)
                })
            }
            return c
        },
        m = function(a) {
            var b = {},
                c = a.getShadowGenerator();
            b.lightId = a.id, b.mapSize = c.getShadowMap().getRenderSize(), b.useVarianceShadowMap = c.useVarianceShadowMap, b.usePoissonSampling = c.usePoissonSampling, b.renderList = [];
            for (var d = 0; d < c.getShadowMap().renderList.length; d++) {
                var e = c.getShadowMap().renderList[d];
                b.renderList.push(e.id)
            }
            return b
        },
        n = [],
        o = function(b, c) {
            if (!n[b.id]) {
                if (b instanceof a.Geometry.Primitives.Box) c.boxes.push(s(b));
                else if (b instanceof a.Geometry.Primitives.Sphere) c.spheres.push(t(b));
                else if (b instanceof a.Geometry.Primitives.Cylinder) c.cylinders.push(u(b));
                else if (b instanceof a.Geometry.Primitives.Torus) c.toruses.push(v(b));
                else if (b instanceof a.Geometry.Primitives.Ground) c.grounds.push(w(b));
                else if (b instanceof a.Geometry.Primitives.Plane) c.planes.push(x(b));
                else if (b instanceof a.Geometry.Primitives.TorusKnot) c.torusKnots.push(y(b));
                else {
                    if (b instanceof a.Geometry.Primitives._Primitive) throw new Error("Unknow primitive type");
                    c.vertexData.push(q(b))
                }
                n[b.id] = !0
            }
        },
        p = function(b) {
            var c = {};
            return c.id = b.id, a.Tags.HasTags(b) && (c.tags = a.Tags.GetTags(b)), c
        },
        q = function(b) {
            var c = p(b);
            return b.isVerticesDataPresent(a.VertexBuffer.PositionKind) && (c.positions = b.getVerticesData(a.VertexBuffer.PositionKind)), b.isVerticesDataPresent(a.VertexBuffer.NormalKind) && (c.normals = b.getVerticesData(a.VertexBuffer.NormalKind)), b.isVerticesDataPresent(a.VertexBuffer.UVKind) && (c.uvs = b.getVerticesData(a.VertexBuffer.UVKind)), b.isVerticesDataPresent(a.VertexBuffer.UV2Kind) && (c.uvs2 = b.getVerticesData(a.VertexBuffer.UV2Kind)), b.isVerticesDataPresent(a.VertexBuffer.ColorKind) && (c.colors = b.getVerticesData(a.VertexBuffer.ColorKind)), b.isVerticesDataPresent(a.VertexBuffer.MatricesIndicesKind) && (c.matricesIndices = b.getVerticesData(a.VertexBuffer.MatricesIndicesKind), c.matricesIndices._isExpanded = !0), b.isVerticesDataPresent(a.VertexBuffer.MatricesWeightsKind) && (c.matricesWeights = b.getVerticesData(a.VertexBuffer.MatricesWeightsKind)), c.indices = b.getIndices(), c
        },
        r = function(a) {
            var b = p(a);
            return b.canBeRegenerated = a.canBeRegenerated(), b
        },
        s = function(a) {
            var b = r(a);
            return b.size = a.size, b
        },
        t = function(a) {
            var b = r(a);
            return b.segments = a.segments, b.diameter = a.diameter, b
        },
        u = function(a) {
            var b = r(a);
            return b.height = a.height, b.diameterTop = a.diameterTop, b.diameterBottom = a.diameterBottom, b.tessellation = a.tessellation, b
        },
        v = function(a) {
            var b = r(a);
            return b.diameter = a.diameter, b.thickness = a.thickness, b.tessellation = a.tessellation, b
        },
        w = function(a) {
            var b = r(a);
            return b.width = a.width, b.height = a.height, b.subdivisions = a.subdivisions, b
        },
        x = function(a) {
            var b = r(a);
            return b.size = a.size, b
        },
        y = function(a) {
            var b = r(a);
            return b.radius = a.radius, b.tube = a.tube, b.radialSegments = a.radialSegments, b.tubularSegments = a.tubularSegments, b.p = a.p, b.q = a.q, b
        },
        z = function(b, c) {
            var d = {};
            d.name = b.name, d.id = b.id, a.Tags.HasTags(b) && (d.tags = a.Tags.GetTags(b)), d.position = b.position.asArray(), b.rotationQuaternion ? d.rotationQuaternion = b.rotationQuaternion.asArray() : b.rotation && (d.rotation = b.rotation.asArray()), d.scaling = b.scaling.asArray(), d.localMatrix = b.getPivotMatrix().asArray(), d.isEnabled = b.isEnabled(), d.isVisible = b.isVisible, d.infiniteDistance = b.infiniteDistance, d.pickable = b.isPickable, d.receiveShadows = b.receiveShadows, d.billboardMode = b.billboardMode, d.visibility = b.visibility, d.checkCollisions = b.checkCollisions, b.parent && (d.parentId = b.parent.id);
            var f = b._geometry;
            if (f) {
                var g = f.id;
                d.geometryId = g, b.getScene().getGeometryByID(g) || o(f, c.geometries), d.subMeshes = [];
                for (var h = 0; h < b.subMeshes.length; h++) {
                    var i = b.subMeshes[h];
                    d.subMeshes.push({
                        materialIndex: i.materialIndex,
                        verticesStart: i.verticesStart,
                        verticesCount: i.verticesCount,
                        indexStart: i.indexStart,
                        indexCount: i.indexCount
                    })
                }
            }
            if (b.material ? d.materialId = b.material.id : b.material = null, b.skeleton && (d.skeletonId = b.skeleton.id), b.getPhysicsImpostor() !== a.PhysicsEngine.NoImpostor) switch (d.physicsMass = b.getPhysicsMass(), d.physicsFriction = b.getPhysicsFriction(), d.physicsRestitution = b.getPhysicsRestitution(), b.getPhysicsImpostor()) {
                case a.PhysicsEngine.BoxImpostor:
                    d.physicsImpostor = 1;
                    break;
                case a.PhysicsEngine.SphereImpostor:
                    d.physicsImpostor = 2
            }
            d.instances = [];
            for (var j = 0; j < b.instances.length; j++) {
                var k = b.instances[j],
                    l = {
                        name: k.name,
                        position: k.position,
                        rotation: k.rotation,
                        rotationQuaternion: k.rotationQuaternion,
                        scaling: k.scaling
                    };
                d.instances.push(l), e(k, l)
            }
            return e(b, d), d.layerMask = b.layerMask, d
        },
        A = function() {
            function c() {}
            return c.Serialize = function(c) {
                var e = {};
                e.useDelayedTextureLoading = c.useDelayedTextureLoading, e.autoClear = c.autoClear, e.clearColor = c.clearColor.asArray(), e.ambientColor = c.ambientColor.asArray(), e.gravity = c.gravity.asArray(), c.fogMode && 0 !== c.fogMode && (e.fogMode = c.fogMode, e.fogColor = c.fogColor.asArray(), e.fogStart = c.fogStart, e.fogEnd = c.fogEnd, e.fogDensity = c.fogDensity), e.lights = [];
                for (var f = 0; f < c.lights.length; f++) {
                    var i = c.lights[f];
                    e.lights.push(b(i))
                }
                for (e.cameras = [], f = 0; f < c.cameras.length; f++) {
                    var p = c.cameras[f];
                    p instanceof a.FreeCamera && e.cameras.push(d(p))
                }
                for (c.activeCamera && (e.activeCameraID = c.activeCamera.id), e.materials = [], e.multiMaterials = [], f = 0; f < c.materials.length; f++) {
                    var q = c.materials[f];
                    q instanceof a.StandardMaterial ? e.materials.push(h(q)) : q instanceof a.MultiMaterial && e.multiMaterials.push(g(q))
                }
                for (e.skeletons = [], f = 0; f < c.skeletons.length; f++) e.skeletons.push(j(c.skeletons[f]));
                e.geometries = {}, e.geometries.boxes = [], e.geometries.spheres = [], e.geometries.cylinders = [], e.geometries.toruses = [], e.geometries.grounds = [], e.geometries.planes = [], e.geometries.torusKnots = [], e.geometries.vertexData = [], n = [];
                for (var r = c.getGeometries(), f = 0; f < r.length; f++) {
                    var s = r[f];
                    s.isReady() && o(s, e.geometries)
                }
                for (e.meshes = [], f = 0; f < c.meshes.length; f++) {
                    var t = c.meshes[f];
                    if (t instanceof a.Mesh) {
                        var u = t;
                        (u.delayLoadState === a.Engine.DELAYLOADSTATE_LOADED || u.delayLoadState === a.Engine.DELAYLOADSTATE_NONE) && e.meshes.push(z(u, e))
                    }
                }
                for (e.particleSystems = [], f = 0; f < c.particleSystems.length; f++) e.particleSystems.push(k(c.particleSystems[f]));
                for (e.lensFlareSystems = [], f = 0; f < c.lensFlareSystems.length; f++) e.lensFlareSystems.push(l(c.lensFlareSystems[f]));
                for (e.shadowGenerators = [], f = 0; f < c.lights.length; f++) i = c.lights[f], i.getShadowGenerator() && e.shadowGenerators.push(m(i));
                return e
            }, c
        }();
    a.SceneSerializer = A
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b() {}
        return Object.defineProperty(b, "ForceFullSceneLoadingForIncremental", {
            get: function() {
                return b._ForceFullSceneLoadingForIncremental
            },
            set: function(a) {
                b._ForceFullSceneLoadingForIncremental = a
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "ShowLoadingScreen", {
            get: function() {
                return b._ShowLoadingScreen
            },
            set: function(a) {
                b._ShowLoadingScreen = a
            },
            enumerable: !0,
            configurable: !0
        }), b._getPluginForFilename = function(a) {
            for (var b = a.lastIndexOf("."), c = a.indexOf("?"), d = a.substring(b, c).toLowerCase(), e = 0; e < this._registeredPlugins.length; e++) {
                var f = this._registeredPlugins[e];
                if (-1 !== f.extensions.indexOf(d)) return f
            }
            return this._registeredPlugins[this._registeredPlugins.length - 1]
        }, b.RegisterPlugin = function(a) {
            a.extensions = a.extensions.toLowerCase(), b._registeredPlugins.push(a)
        }, b.ImportMesh = function(c, d, e, f, g, h, i) {
            var j = function() {
                    f.database = k;
                    var j = b._getPluginForFilename(e),
                        l = function(a) {
                            var b = [],
                                h = [],
                                k = [];
                            try {
                                if (!j.importMesh(c, f, a, d, b, h, k)) return void(i && i(f, "unable to load the scene"))
                            } catch (l) {
                                return void(i && i(f, l))
                            }
                            g && (f.importedMeshesFiles.push(d + e), g(b, h, k))
                        };
                    return e.substr && "data:" === e.substr(0, 5) ? void l(e.substr(5)) : void a.Tools.LoadFile(d + e, function(a) {
                        l(a)
                    }, h, k)
                },
                k = new a.Database(d + e, j)
        }, b.Load = function(c, d, e, f, g, h) {
            b.Append(c, d, new a.Scene(e), f, g, h)
        }, b.Append = function(c, d, e, f, g, h) {
            var i, j = this._getPluginForFilename(d.name || d);
            b.ShowLoadingScreen && e.getEngine().displayLoadingUI();
            var k = function(a) {
                    return e.database = i, j.load(e, a, c) ? (f && f(e), void(b.ShowLoadingScreen && e.executeWhenReady(function() {
                        e.getEngine().hideLoadingUI()
                    }))) : (h && h(e), void e.getEngine().hideLoadingUI())
                },
                l = function() {
                    a.Tools.LoadFile(c + d, k, g, i)
                };
            return d.substr && "data:" === d.substr(0, 5) ? void k(d.substr(5)) : void(-1 === c.indexOf("file:") ? i = new a.Database(c + d, l) : a.Tools.ReadFile(d, k, g))
        }, b._ForceFullSceneLoadingForIncremental = !1, b._ShowLoadingScreen = !0, b._registeredPlugins = new Array, b
    }();
    a.SceneLoader = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b;
    ! function() {
        var b = function(a, b) {
                if (a.length === 3 * b) {
                    for (var c = [], d = 0; d < a.length; d += 3) {
                        var e = d / 3 * 4;
                        c[e] = a[d], c[e + 1] = a[d + 1], c[e + 2] = a[d + 2], c[e + 3] = 1
                    }
                    return c
                }
                return a
            },
            c = function(b, c, d) {
                var e = new a.CubeTexture(b + c.name, d);
                return e.name = c.name, e.hasAlpha = c.hasAlpha, e.level = c.level, e.coordinatesMode = c.coordinatesMode, e
            },
            d = function(b, d, e) {
                if (!d.name && !d.isRenderTarget) return null;
                if (d.isCube) return c(b, d, e);
                var f;
                if (d.mirrorPlane ? (f = new a.MirrorTexture(d.name, d.renderTargetSize, e), f._waitingRenderList = d.renderList, f.mirrorPlane = a.Plane.FromArray(d.mirrorPlane)) : d.isRenderTarget ? (f = new a.RenderTargetTexture(d.name, d.renderTargetSize, e), f._waitingRenderList = d.renderList) : f = new a.Texture(b + d.name, e), f.name = d.name, f.hasAlpha = d.hasAlpha, f.getAlphaFromRGB = d.getAlphaFromRGB, f.level = d.level, f.coordinatesIndex = d.coordinatesIndex, f.coordinatesMode = d.coordinatesMode, f.uOffset = d.uOffset, f.vOffset = d.vOffset, f.uScale = d.uScale, f.vScale = d.vScale, f.uAng = d.uAng, f.vAng = d.vAng, f.wAng = d.wAng, f.wrapU = d.wrapU, f.wrapV = d.wrapV, d.animations)
                    for (var g = 0; g < d.animations.length; g++) {
                        var h = d.animations[g];
                        f.animations.push(m(h))
                    }
                return f
            },
            e = function(b, c) {
                for (var d = new a.Skeleton(b.name, b.id, c), e = 0; e < b.bones.length; e++) {
                    var f = b.bones[e],
                        g = null;
                    f.parentBoneIndex > -1 && (g = d.bones[f.parentBoneIndex]);
                    var h = new a.Bone(f.name, d, g, a.Matrix.FromArray(f.matrix));
                    f.animation && h.animations.push(m(f.animation))
                }
                return d
            },
            f = function(b) {
                var c = new a.FresnelParameters;
                return c.isEnabled = b.isEnabled, c.leftColor = a.Color3.FromArray(b.leftColor), c.rightColor = a.Color3.FromArray(b.rightColor), c.bias = b.bias, c.power = b.power || 1, c
            },
            g = function(b, c, e) {
                var g;
                return g = new a.StandardMaterial(b.name, c), g.ambientColor = a.Color3.FromArray(b.ambient), g.diffuseColor = a.Color3.FromArray(b.diffuse), g.specularColor = a.Color3.FromArray(b.specular), g.specularPower = b.specularPower, g.emissiveColor = a.Color3.FromArray(b.emissive), g.alpha = b.alpha, g.id = b.id, a.Tags.AddTagsTo(g, b.tags), g.backFaceCulling = b.backFaceCulling, g.wireframe = b.wireframe, b.diffuseTexture && (g.diffuseTexture = d(e, b.diffuseTexture, c)), b.diffuseFresnelParameters && (g.diffuseFresnelParameters = f(b.diffuseFresnelParameters)), b.ambientTexture && (g.ambientTexture = d(e, b.ambientTexture, c)), b.opacityTexture && (g.opacityTexture = d(e, b.opacityTexture, c)), b.opacityFresnelParameters && (g.opacityFresnelParameters = f(b.opacityFresnelParameters)), b.reflectionTexture && (g.reflectionTexture = d(e, b.reflectionTexture, c)), b.reflectionFresnelParameters && (g.reflectionFresnelParameters = f(b.reflectionFresnelParameters)), b.emissiveTexture && (g.emissiveTexture = d(e, b.emissiveTexture, c)), b.emissiveFresnelParameters && (g.emissiveFresnelParameters = f(b.emissiveFresnelParameters)), b.specularTexture && (g.specularTexture = d(e, b.specularTexture, c)), b.bumpTexture && (g.bumpTexture = d(e, b.bumpTexture, c)), g
            },
            h = function(a, b, c, d) {
                for (var e = 0; e < b.materials.length; e++) {
                    var f = b.materials[e];
                    if (f.id === a) return g(f, c, d)
                }
                return null
            },
            i = function(b, c) {
                var d = new a.MultiMaterial(b.name, c);
                d.id = b.id, a.Tags.AddTagsTo(d, b.tags);
                for (var e = 0; e < b.materials.length; e++) {
                    var f = b.materials[e];
                    d.subMaterials.push(f ? c.getMaterialByID(f) : null)
                }
                return d
            },
            j = function(b, c, d) {
                var e = c.getLastEntryByID(b.emitterId),
                    f = new a.LensFlareSystem("lensFlareSystem#" + b.emitterId, e, c);
                f.borderLimit = b.borderLimit;
                for (var g = 0; g < b.flares.length; g++) {
                    var h = b.flares[g];
                    new a.LensFlare(h.size, h.position, a.Color3.FromArray(h.color), d + h.textureName, f)
                }
                return f
            },
            k = function(b, c, d) {
                var e = c.getLastMeshByID(b.emitterId),
                    f = new a.ParticleSystem("particles#" + e.name, b.capacity, c);
                return b.textureName && (f.particleTexture = new a.Texture(d + b.textureName, c), f.particleTexture.name = b.textureName), f.minAngularSpeed = b.minAngularSpeed, f.maxAngularSpeed = b.maxAngularSpeed, f.minSize = b.minSize, f.maxSize = b.maxSize, f.minLifeTime = b.minLifeTime, f.maxLifeTime = b.maxLifeTime, f.emitter = e, f.emitRate = b.emitRate, f.minEmitBox = a.Vector3.FromArray(b.minEmitBox), f.maxEmitBox = a.Vector3.FromArray(b.maxEmitBox), f.gravity = a.Vector3.FromArray(b.gravity), f.direction1 = a.Vector3.FromArray(b.direction1), f.direction2 = a.Vector3.FromArray(b.direction2), f.color1 = a.Color4.FromArray(b.color1), f.color2 = a.Color4.FromArray(b.color2), f.colorDead = a.Color4.FromArray(b.colorDead), f.updateSpeed = b.updateSpeed, f.targetStopDuration = b.targetStopFrame, f.textureMask = a.Color4.FromArray(b.textureMask), f.blendMode = b.blendMode, f.start(), f
            },
            l = function(b, c) {
                for (var d = c.getLightByID(b.lightId), e = new a.ShadowGenerator(b.mapSize, d), f = 0; f < b.renderList.length; f++) {
                    var g = c.getMeshByID(b.renderList[f]);
                    e.getShadowMap().renderList.push(g)
                }
                return b.usePoissonSampling ? e.usePoissonSampling = !0 : e.useVarianceShadowMap = b.useVarianceShadowMap, e
            },
            m = function(b) {
                for (var c = new a.Animation(b.name, b.property, b.framePerSecond, b.dataType, b.loopBehavior), d = b.dataType, e = [], f = 0; f < b.keys.length; f++) {
                    var g, h = b.keys[f];
                    switch (d) {
                        case a.Animation.ANIMATIONTYPE_FLOAT:
                            g = h.values[0];
                            break;
                        case a.Animation.ANIMATIONTYPE_QUATERNION:
                            g = a.Quaternion.FromArray(h.values);
                            break;
                        case a.Animation.ANIMATIONTYPE_MATRIX:
                            g = a.Matrix.FromArray(h.values);
                            break;
                        case a.Animation.ANIMATIONTYPE_VECTOR3:
                        default:
                            g = a.Vector3.FromArray(h.values)
                    }
                    e.push({
                        frame: h.frame,
                        value: g
                    })
                }
                return c.setKeys(e), c
            },
            n = function(b, c) {
                var d;
                switch (b.type) {
                    case 0:
                        d = new a.PointLight(b.name, a.Vector3.FromArray(b.position), c);
                        break;
                    case 1:
                        d = new a.DirectionalLight(b.name, a.Vector3.FromArray(b.direction), c), d.position = a.Vector3.FromArray(b.position);
                        break;
                    case 2:
                        d = new a.SpotLight(b.name, a.Vector3.FromArray(b.position), a.Vector3.FromArray(b.direction), b.angle, b.exponent, c);
                        break;
                    case 3:
                        d = new a.HemisphericLight(b.name, a.Vector3.FromArray(b.direction), c), d.groundColor = a.Color3.FromArray(b.groundColor)
                }
                if (d.id = b.id, a.Tags.AddTagsTo(d, b.tags), void 0 !== b.intensity && (d.intensity = b.intensity), b.range && (d.range = b.range), d.diffuse = a.Color3.FromArray(b.diffuse), d.specular = a.Color3.FromArray(b.specular), b.excludedMeshesIds && (d._excludedMeshesIds = b.excludedMeshesIds), b.parentId && (d._waitingParentId = b.parentId), b.includedOnlyMeshesIds && (d._includedOnlyMeshesIds = b.includedOnlyMeshesIds), b.animations)
                    for (var e = 0; e < b.animations.length; e++) {
                        var f = b.animations[e];
                        d.animations.push(m(f))
                    }
                b.autoAnimate && c.beginAnimation(d, b.autoAnimateFrom, b.autoAnimateTo, b.autoAnimateLoop, 1)
            },
            o = function(b, c) {
                var d, e = a.Vector3.FromArray(b.position),
                    f = b.lockedTargetId ? c.getLastMeshByID(b.lockedTargetId) : null;
                if ("AnaglyphArcRotateCamera" === b.type || "ArcRotateCamera" === b.type) {
                    var g = b.alpha,
                        h = b.beta,
                        i = b.radius;
                    if ("AnaglyphArcRotateCamera" === b.type) {
                        var j = b.eye_space;
                        d = new a.AnaglyphArcRotateCamera(b.name, g, h, i, f, j, c)
                    } else d = new a.ArcRotateCamera(b.name, g, h, i, f, c)
                } else "AnaglyphFreeCamera" === b.type ? (j = b.eye_space, d = new a.AnaglyphFreeCamera(b.name, e, j, c)) : "DeviceOrientationCamera" === b.type ? d = new a.DeviceOrientationCamera(b.name, e, c) : "FollowCamera" === b.type ? (d = new a.FollowCamera(b.name, e, c), d.heightOffset = b.heightOffset, d.radius = b.radius, d.rotationOffset = b.rotationOffset, f && (d.target = f)) : d = "GamepadCamera" === b.type ? new a.GamepadCamera(b.name, e, c) : "OculusCamera" === b.type ? new a.OculusCamera(b.name, e, c) : "OculusGamepadCamera" === b.type ? new a.OculusGamepadCamera(b.name, e, c) : "TouchCamera" === b.type ? new a.TouchCamera(b.name, e, c) : "VirtualJoysticksCamera" === b.type ? new a.VirtualJoysticksCamera(b.name, e, c) : "WebVRCamera" === b.type ? new a.WebVRCamera(b.name, e, c) : "VRDeviceOrientationCamera" === b.type ? new a.VRDeviceOrientationCamera(b.name, e, c) : new a.FreeCamera(b.name, e, c);
                if (f && d instanceof a.FreeCamera && (d.lockedTarget = f), d.id = b.id, a.Tags.AddTagsTo(d, b.tags), b.parentId && (d._waitingParentId = b.parentId), b.target ? d.setTarget(a.Vector3.FromArray(b.target)) : d.rotation = a.Vector3.FromArray(b.rotation), d.fov = b.fov, d.minZ = b.minZ, d.maxZ = b.maxZ, d.speed = b.speed, d.inertia = b.inertia, d.checkCollisions = b.checkCollisions, d.applyGravity = b.applyGravity, b.ellipsoid && (d.ellipsoid = a.Vector3.FromArray(b.ellipsoid)), b.animations)
                    for (var k = 0; k < b.animations.length; k++) {
                        var l = b.animations[k];
                        d.animations.push(m(l))
                    }
                return b.autoAnimate && c.beginAnimation(d, b.autoAnimateFrom, b.autoAnimateTo, b.autoAnimateLoop, 1), d.layerMask = b.layerMask && !isNaN(b.layerMask) ? Math.abs(parseInt(b.layerMask)) : 4294967295, d
            },
            p = function(a, b) {
                var c = a.id;
                return b.getGeometryByID(c)
            },
            q = function(b, c) {
                if (p(b, c)) return null;
                var d = new a.Geometry.Primitives.Box(b.id, c, b.size, b.canBeRegenerated, null);
                return a.Tags.AddTagsTo(d, b.tags), c.pushGeometry(d, !0), d
            },
            r = function(b, c) {
                if (p(b, c)) return null;
                var d = new a.Geometry.Primitives.Sphere(b.id, c, b.segments, b.diameter, b.canBeRegenerated, null);
                return a.Tags.AddTagsTo(d, b.tags), c.pushGeometry(d, !0), d
            },
            s = function(b, c) {
                if (p(b, c)) return null;
                var d = new a.Geometry.Primitives.Cylinder(b.id, c, b.height, b.diameterTop, b.diameterBottom, b.tessellation, b.subdivisions, b.canBeRegenerated, null);
                return a.Tags.AddTagsTo(d, b.tags), c.pushGeometry(d, !0), d
            },
            t = function(b, c) {
                if (p(b, c)) return null;
                var d = new a.Geometry.Primitives.Torus(b.id, c, b.diameter, b.thickness, b.tessellation, b.canBeRegenerated, null);
                return a.Tags.AddTagsTo(d, b.tags), c.pushGeometry(d, !0), d
            },
            u = function(b, c) {
                if (p(b, c)) return null;
                var d = new a.Geometry.Primitives.Ground(b.id, c, b.width, b.height, b.subdivisions, b.canBeRegenerated, null);
                return a.Tags.AddTagsTo(d, b.tags), c.pushGeometry(d, !0), d
            },
            v = function(b, c) {
                if (p(b, c)) return null;
                var d = new a.Geometry.Primitives.Plane(b.id, c, b.size, b.canBeRegenerated, null);
                return a.Tags.AddTagsTo(d, b.tags), c.pushGeometry(d, !0), d
            },
            w = function(b, c) {
                if (p(b, c)) return null;
                var d = new a.Geometry.Primitives.TorusKnot(b.id, c, b.radius, b.tube, b.radialSegments, b.tubularSegments, b.p, b.q, b.canBeRegenerated, null);
                return a.Tags.AddTagsTo(d, b.tags), c.pushGeometry(d, !0), d
            },
            x = function(b, c, d) {
                if (p(b, c)) return null;
                var e = new a.Geometry(b.id, c);
                return a.Tags.AddTagsTo(e, b.tags), b.delayLoadingFile ? (e.delayLoadState = a.Engine.DELAYLOADSTATE_NOTLOADED, e.delayLoadingFile = d + b.delayLoadingFile, e._boundingInfo = new a.BoundingInfo(a.Vector3.FromArray(b.boundingBoxMinimum), a.Vector3.FromArray(b.boundingBoxMaximum)), e._delayInfo = [], b.hasUVs && e._delayInfo.push(a.VertexBuffer.UVKind), b.hasUVs2 && e._delayInfo.push(a.VertexBuffer.UV2Kind), b.hasColors && e._delayInfo.push(a.VertexBuffer.ColorKind), b.hasMatricesIndices && e._delayInfo.push(a.VertexBuffer.MatricesIndicesKind), b.hasMatricesWeights && e._delayInfo.push(a.VertexBuffer.MatricesWeightsKind), e._delayLoadingFunction = C) : C(b, e), c.pushGeometry(e, !0), e
            },
            y = function(b, c, d) {
                var e = new a.Mesh(b.name, c);
                if (e.id = b.id, a.Tags.AddTagsTo(e, b.tags), e.position = a.Vector3.FromArray(b.position), b.rotationQuaternion ? e.rotationQuaternion = a.Quaternion.FromArray(b.rotationQuaternion) : b.rotation && (e.rotation = a.Vector3.FromArray(b.rotation)), e.scaling = a.Vector3.FromArray(b.scaling), b.localMatrix ? e.setPivotMatrix(a.Matrix.FromArray(b.localMatrix)) : b.pivotMatrix && e.setPivotMatrix(a.Matrix.FromArray(b.pivotMatrix)), e.setEnabled(b.isEnabled), e.isVisible = b.isVisible, e.infiniteDistance = b.infiniteDistance, e.showBoundingBox = b.showBoundingBox, e.showSubMeshesBoundingBox = b.showSubMeshesBoundingBox, void 0 !== b.applyFog && (e.applyFog = b.applyFog), void 0 !== b.pickable && (e.isPickable = b.pickable), void 0 !== b.alphaIndex && (e.alphaIndex = b.alphaIndex), e.receiveShadows = b.receiveShadows, e.billboardMode = b.billboardMode, void 0 !== b.visibility && (e.visibility = b.visibility), e.checkCollisions = b.checkCollisions, e._shouldGenerateFlatShading = b.useFlatShading, b.parentId && (e._waitingParentId = b.parentId), void 0 !== b.actions && (e._waitingActions = b.actions), e.hasVertexAlpha = b.hasVertexAlpha, b.delayLoadingFile ? (e.delayLoadState = a.Engine.DELAYLOADSTATE_NOTLOADED, e.delayLoadingFile = d + b.delayLoadingFile, e._boundingInfo = new a.BoundingInfo(a.Vector3.FromArray(b.boundingBoxMinimum), a.Vector3.FromArray(b.boundingBoxMaximum)), b._binaryInfo && (e._binaryInfo = b._binaryInfo), e._delayInfo = [], b.hasUVs && e._delayInfo.push(a.VertexBuffer.UVKind), b.hasUVs2 && e._delayInfo.push(a.VertexBuffer.UV2Kind), b.hasColors && e._delayInfo.push(a.VertexBuffer.ColorKind), b.hasMatricesIndices && e._delayInfo.push(a.VertexBuffer.MatricesIndicesKind), b.hasMatricesWeights && e._delayInfo.push(a.VertexBuffer.MatricesWeightsKind), e._delayLoadingFunction = D, a.SceneLoader.ForceFullSceneLoadingForIncremental && e._checkDelayState()) : D(b, e), b.materialId ? e.setMaterialByID(b.materialId) : e.material = null, b.skeletonId > -1 && (e.skeleton = c.getLastSkeletonByID(b.skeletonId)), b.physicsImpostor && (c.isPhysicsEnabled() || c.enablePhysics(), e.setPhysicsState({
                        impostor: b.physicsImpostor,
                        mass: b.physicsMass,
                        friction: b.physicsFriction,
                        restitution: b.physicsRestitution
                    })), b.animations)
                    for (var f = 0; f < b.animations.length; f++) {
                        var g = b.animations[f];
                        e.animations.push(m(g))
                    }
                if (b.autoAnimate && c.beginAnimation(e, b.autoAnimateFrom, b.autoAnimateTo, b.autoAnimateLoop, 1), e.layerMask = b.layerMask && !isNaN(b.layerMask) ? Math.abs(parseInt(b.layerMask)) : 4294967295, b.instances)
                    for (var h = 0; h < b.instances.length; h++) {
                        var i = b.instances[h],
                            j = e.createInstance(i.name);
                        if (a.Tags.AddTagsTo(j, i.tags), j.position = a.Vector3.FromArray(i.position), i.rotationQuaternion ? j.rotationQuaternion = a.Quaternion.FromArray(i.rotationQuaternion) : i.rotation && (j.rotation = a.Vector3.FromArray(i.rotation)), j.scaling = a.Vector3.FromArray(i.scaling), j.checkCollisions = e.checkCollisions, b.animations)
                            for (f = 0; f < b.animations.length; f++) g = b.animations[f], j.animations.push(m(g))
                    }
                return e
            },
            z = function(b, c, d) {
                var e = new a.ActionManager(d);
                null === c ? d.actionManager = e : c.actionManager = e;
                for (var f = function(b, c) {
                        var d = Object.create(a[b].prototype);
                        return d.constructor.apply(d, c), d
                    }, g = function(b, c, d, e) {
                        if (null === e) {
                            var f = parseFloat(c);
                            return "true" === c || "false" === c ? "true" === c : isNaN(f) ? c : f
                        }
                        for (var g = e.split("."), h = c.split(","), i = 0; i < g.length; i++) d = d[g[i]];
                        if (d instanceof Boolean) return "true" === h[0];
                        if (d instanceof String) return h[0];
                        for (var j = new Array, i = 0; i < h.length; i++) j.push(parseFloat(h[i]));
                        return d instanceof a.Vector3 ? a.Vector3.FromArray(j) : d instanceof a.Vector4 ? a.Vector4.FromArray(j) : d instanceof a.Color3 ? a.Color3.FromArray(j) : d instanceof a.Color4 ? a.Color4.FromArray(j) : parseFloat(h[0])
                    }, h = function(b, c, i, j) {
                        var k = new Array,
                            l = null,
                            m = null;
                        k.push(2 === b.type ? e : c);
                        for (var n = 0; n < b.properties.length; n++) {
                            var o = b.properties[n].value,
                                p = b.properties[n].name;
                            "target" === p ? o = l = d.getNodeByName(o) : "parent" === p ? o = d.getNodeByName(o) : "sound" === p ? o = d.getSoundByName(o) : "propertyPath" !== p ? o = 2 === b.type && "operator" === p ? a.ValueCondition[o] : g(p, o, l, "value" === p ? m : null) : m = o, k.push(o)
                        }
                        if (k.push(i), "InterpolateValueAction" === b.name) {
                            var q = k[k.length - 2];
                            k[k.length - 1] = q, k[k.length - 2] = i
                        }
                        var r = f(b.name, k);
                        r instanceof a.Condition ? (i = r, r = j) : (i = null, j ? j.then(r) : e.registerAction(r));
                        for (var n = 0; n < b.children.length; n++) h(b.children[n], c, i, r)
                    }, i = 0; i < b.children.length; i++) {
                    var j, k = b.children[i];
                    j = k.properties.length > 0 ? {
                        trigger: a.ActionManager[k.name],
                        parameter: d.getMeshByName(k.properties[0].value)
                    } : a.ActionManager[k.name];
                    for (var l = 0; l < k.children.length; l++) h(k.children[l], j, null, null)
                }
            },
            A = function(b, c, d) {
                var e = b.name,
                    f = d + e,
                    g = {
                        autoplay: b.autoplay,
                        loop: b.loop,
                        volume: b.volume,
                        spatialSound: b.spatialSound,
                        maxDistance: b.maxDistance,
                        rolloffFactor: b.rolloffFactor,
                        refDistance: b.refDistance,
                        distanceModel: b.distanceModel,
                        panningModel: b.panningModel,
                        playbackRate: b.playbackRate
                    },
                    h = new a.Sound(e, f, c, function() {
                        c._removePendingData(h)
                    }, g);
                if (c._addPendingData(h), b.position) {
                    var i = a.Vector3.FromArray(b.position);
                    h.setPosition(i)
                }
                if (b.isDirectional && (h.setDirectionalCone(b.coneInnerAngle || 360, b.coneOuterAngle || 360, b.coneOuterGain || 0), b.localDirectionToMesh)) {
                    var j = a.Vector3.FromArray(b.localDirectionToMesh);
                    h.setLocalDirectionToMesh(j)
                }
                if (b.connectedMeshId) {
                    var k = c.getMeshByID(b.connectedMeshId);
                    k && h.attachToMesh(k)
                }
            },
            B = function(a, b, c) {
                b = b instanceof Array ? b : [b];
                for (var d in b)
                    if (a.name === b[d]) return c.push(a.id), !0;
                return a.parentId && -1 !== c.indexOf(a.parentId) ? (c.push(a.id), !0) : !1
            },
            C = function(c, d) {
                var e = new a.VertexData,
                    f = c.positions;
                f && e.set(f, a.VertexBuffer.PositionKind);
                var g = c.normals;
                g && e.set(g, a.VertexBuffer.NormalKind);
                var h = c.uvs;
                h && e.set(h, a.VertexBuffer.UVKind);
                var i = c.uv2s;
                i && e.set(i, a.VertexBuffer.UV2Kind);
                var j = c.colors;
                j && e.set(b(j, f.length / 3), a.VertexBuffer.ColorKind);
                var k = c.matricesIndices;
                k && e.set(k, a.VertexBuffer.MatricesIndicesKind);
                var l = c.matricesWeights;
                l && e.set(l, a.VertexBuffer.MatricesWeightsKind);
                var m = c.indices;
                m && (e.indices = m), d.setAllVerticesData(e, c.updatable)
            },
            D = function(c, d) {
                var e = d.getScene(),
                    f = c.geometryId;
                if (f) {
                    var g = e.getGeometryByID(f);
                    g && g.applyToMesh(d)
                } else if (c instanceof ArrayBuffer) {
                    var h = d._binaryInfo;
                    if (h.positionsAttrDesc && h.positionsAttrDesc.count > 0) {
                        var i = new Float32Array(c, h.positionsAttrDesc.offset, h.positionsAttrDesc.count);
                        d.setVerticesData(a.VertexBuffer.PositionKind, i, !1)
                    }
                    if (h.normalsAttrDesc && h.normalsAttrDesc.count > 0) {
                        var j = new Float32Array(c, h.normalsAttrDesc.offset, h.normalsAttrDesc.count);
                        d.setVerticesData(a.VertexBuffer.NormalKind, j, !1)
                    }
                    if (h.uvsAttrDesc && h.uvsAttrDesc.count > 0) {
                        var k = new Float32Array(c, h.uvsAttrDesc.offset, h.uvsAttrDesc.count);
                        d.setVerticesData(a.VertexBuffer.UVKind, k, !1)
                    }
                    if (h.uvs2AttrDesc && h.uvs2AttrDesc.count > 0) {
                        var l = new Float32Array(c, h.uvs2AttrDesc.offset, h.uvs2AttrDesc.count);
                        d.setVerticesData(a.VertexBuffer.UV2Kind, l, !1)
                    }
                    if (h.colorsAttrDesc && h.colorsAttrDesc.count > 0) {
                        var m = new Float32Array(c, h.colorsAttrDesc.offset, h.colorsAttrDesc.count);
                        d.setVerticesData(a.VertexBuffer.ColorKind, m, !1)
                    }
                    if (h.matricesIndicesAttrDesc && h.matricesIndicesAttrDesc.count > 0) {
                        var n = new Int32Array(c, h.matricesIndicesAttrDesc.offset, h.matricesIndicesAttrDesc.count);
                        d.setVerticesData(a.VertexBuffer.MatricesIndicesKind, n, !1)
                    }
                    if (h.matricesWeightsAttrDesc && h.matricesWeightsAttrDesc.count > 0) {
                        var o = new Float32Array(c, h.matricesWeightsAttrDesc.offset, h.matricesWeightsAttrDesc.count);
                        d.setVerticesData(a.VertexBuffer.MatricesWeightsKind, o, !1)
                    }
                    if (h.indicesAttrDesc && h.indicesAttrDesc.count > 0) {
                        var p = new Int32Array(c, h.indicesAttrDesc.offset, h.indicesAttrDesc.count);
                        d.setIndices(p)
                    }
                    if (h.subMeshesAttrDesc && h.subMeshesAttrDesc.count > 0) {
                        var q = new Int32Array(c, h.subMeshesAttrDesc.offset, 5 * h.subMeshesAttrDesc.count);
                        d.subMeshes = [];
                        for (var r = 0; r < h.subMeshesAttrDesc.count; r++) {
                            var s = q[5 * r + 0],
                                t = q[5 * r + 1],
                                u = q[5 * r + 2],
                                v = q[5 * r + 3],
                                w = q[5 * r + 4];
                            new a.SubMesh(s, t, u, v, w, d)
                        }
                    }
                } else if (c.positions && c.normals && c.indices) {
                    if (d.setVerticesData(a.VertexBuffer.PositionKind, c.positions, !1), d.setVerticesData(a.VertexBuffer.NormalKind, c.normals, !1), c.uvs && d.setVerticesData(a.VertexBuffer.UVKind, c.uvs, !1), c.uvs2 && d.setVerticesData(a.VertexBuffer.UV2Kind, c.uvs2, !1), c.colors && d.setVerticesData(a.VertexBuffer.ColorKind, b(c.colors, c.positions.length / 3), !1), c.matricesIndices)
                        if (c.matricesIndices._isExpanded) delete c.matricesIndices._isExpanded, d.setVerticesData(a.VertexBuffer.MatricesIndicesKind, c.matricesIndices, !1);
                        else {
                            for (var x = [], r = 0; r < c.matricesIndices.length; r++) {
                                var y = c.matricesIndices[r];
                                x.push(255 & y), x.push((65280 & y) >> 8), x.push((16711680 & y) >> 16), x.push(y >> 24)
                            }
                            d.setVerticesData(a.VertexBuffer.MatricesIndicesKind, x, !1)
                        }
                    if (c.matricesWeights && d.setVerticesData(a.VertexBuffer.MatricesWeightsKind, c.matricesWeights, !1), d.setIndices(c.indices), c.subMeshes) {
                        d.subMeshes = [];
                        for (var z = 0; z < c.subMeshes.length; z++) {
                            var A = c.subMeshes[z];
                            new a.SubMesh(A.materialIndex, A.verticesStart, A.verticesCount, A.indexStart, A.indexCount, d)
                        }
                    }
                }
                d._shouldGenerateFlatShading && (d.convertToFlatShadedMesh(), delete d._shouldGenerateFlatShading), d.computeWorldMatrix(!0), e._selectionOctree && e._selectionOctree.addMesh(d)
            };
        a.SceneLoader.RegisterPlugin({
            extensions: ".babylon",
            importMesh: function(a, b, c, d, f, g, j) {
                for (var l = JSON.parse(c), m = [], n = [], o = [], p = 0; p < l.meshes.length; p++) {
                    var q = l.meshes[p];
                    if (!a || B(q, a, o)) {
                        if (a instanceof Array && delete a[a.indexOf(q.name)], q.materialId) {
                            var r = -1 !== n.indexOf(q.materialId);
                            if (!r)
                                for (var s = 0; s < l.multiMaterials.length; s++) {
                                    var t = l.multiMaterials[s];
                                    if (t.id == q.materialId) {
                                        for (var u = 0; u < t.materials.length; u++) {
                                            var v = t.materials[u];
                                            n.push(v), h(v, l, b, d)
                                        }
                                        n.push(t.id), i(t, b), r = !0;
                                        break
                                    }
                                }
                            r || (n.push(q.materialId), h(q.materialId, l, b, d))
                        }
                        if (q.skeletonId > -1 && b.skeletons) {
                            var w = m.indexOf(q.skeletonId) > -1;
                            if (!w)
                                for (var x = 0; x < l.skeletons.length; x++) {
                                    var z = l.skeletons[x];
                                    z.id === q.skeletonId && (j.push(e(z, b)), m.push(z.id))
                                }
                        }
                        var A = y(q, b, d);
                        f.push(A)
                    }
                }
                for (p = 0; p < b.meshes.length; p++) {
                    var C = b.meshes[p];
                    C._waitingParentId && (C.parent = b.getLastEntryByID(C._waitingParentId), C._waitingParentId = void 0)
                }
                if (l.particleSystems)
                    for (p = 0; p < l.particleSystems.length; p++) {
                        var D = l.particleSystems[p]; - 1 !== o.indexOf(D.emitterId) && g.push(k(D, b, d))
                    }
                return !0
            },
            load: function(b, c, d) {
                var f = JSON.parse(c);
                b.useDelayedTextureLoading = f.useDelayedTextureLoading && !a.SceneLoader.ForceFullSceneLoadingForIncremental, b.autoClear = f.autoClear, b.clearColor = a.Color3.FromArray(f.clearColor), b.ambientColor = a.Color3.FromArray(f.ambientColor), b.gravity = a.Vector3.FromArray(f.gravity), f.fogMode && 0 !== f.fogMode && (b.fogMode = f.fogMode, b.fogColor = a.Color3.FromArray(f.fogColor), b.fogStart = f.fogStart, b.fogEnd = f.fogEnd, b.fogDensity = f.fogDensity);
                for (var h = 0; h < f.lights.length; h++) {
                    var m = f.lights[h];
                    n(m, b)
                }
                if (f.materials)
                    for (h = 0; h < f.materials.length; h++) {
                        var p = f.materials[h];
                        g(p, b, d)
                    }
                if (f.multiMaterials)
                    for (h = 0; h < f.multiMaterials.length; h++) {
                        var B = f.multiMaterials[h];
                        i(B, b)
                    }
                if (f.skeletons)
                    for (h = 0; h < f.skeletons.length; h++) {
                        var C = f.skeletons[h];
                        e(C, b)
                    }
                var D = f.geometries;
                if (D) {
                    var E = D.boxes;
                    if (E)
                        for (h = 0; h < E.length; h++) {
                            var F = E[h];
                            q(F, b)
                        }
                    var G = D.spheres;
                    if (G)
                        for (h = 0; h < G.length; h++) {
                            var H = G[h];
                            r(H, b)
                        }
                    var I = D.cylinders;
                    if (I)
                        for (h = 0; h < I.length; h++) {
                            var J = I[h];
                            s(J, b)
                        }
                    var K = D.toruses;
                    if (K)
                        for (h = 0; h < K.length; h++) {
                            var L = K[h];
                            t(L, b)
                        }
                    var M = D.grounds;
                    if (M)
                        for (h = 0; h < M.length; h++) {
                            var N = M[h];
                            u(N, b)
                        }
                    var O = D.planes;
                    if (O)
                        for (h = 0; h < O.length; h++) {
                            var P = O[h];
                            v(P, b)
                        }
                    var Q = D.torusKnots;
                    if (Q)
                        for (h = 0; h < Q.length; h++) {
                            var R = Q[h];
                            w(R, b)
                        }
                    var S = D.vertexData;
                    if (S)
                        for (h = 0; h < S.length; h++) {
                            var T = S[h];
                            x(T, b, d)
                        }
                }
                for (h = 0; h < f.meshes.length; h++) {
                    var U = f.meshes[h];
                    y(U, b, d)
                }
                for (h = 0; h < f.cameras.length; h++) {
                    var V = f.cameras[h];
                    o(V, b)
                }
                for (f.activeCameraID && b.setActiveCameraByID(f.activeCameraID), h = 0; h < b.cameras.length; h++) {
                    var W = b.cameras[h];
                    W._waitingParentId && (W.parent = b.getLastEntryByID(W._waitingParentId), W._waitingParentId = void 0)
                }
                for (h = 0; h < b.lights.length; h++) {
                    var X = b.lights[h];
                    X._waitingParentId && (X.parent = b.getLastEntryByID(X._waitingParentId), X._waitingParentId = void 0)
                }
                if (f.sounds)
                    for (h = 0; h < f.sounds.length; h++) {
                        var Y = f.sounds[h];
                        if (a.Engine.audioEngine.canUseWebAudio) A(Y, b, d);
                        else {
                            new a.Sound(Y.name, null, b)
                        }
                    }
                for (h = 0; h < b.meshes.length; h++) {
                    var Z = b.meshes[h];
                    Z._waitingParentId && (Z.parent = b.getLastEntryByID(Z._waitingParentId), Z._waitingParentId = void 0), Z._waitingActions && (z(Z._waitingActions, Z, b), Z._waitingActions = void 0)
                }
                if (f.particleSystems)
                    for (h = 0; h < f.particleSystems.length; h++) {
                        var $ = f.particleSystems[h];
                        k($, b, d)
                    }
                if (f.lensFlareSystems)
                    for (h = 0; h < f.lensFlareSystems.length; h++) {
                        var _ = f.lensFlareSystems[h];
                        j(_, b, d)
                    }
                if (f.shadowGenerators)
                    for (h = 0; h < f.shadowGenerators.length; h++) {
                        var ab = f.shadowGenerators[h];
                        l(ab, b)
                    }
                return f.actions && z(f.actions, null, b), !0
            }
        })
    }(b = a.Internals || (a.Internals = {}))
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = 0,
        c = function() {
            function b(a, b, c) {
                this.pos = a, this.normal = b, this.uv = c
            }
            return b.prototype.clone = function() {
                return new b(this.pos.clone(), this.normal.clone(), this.uv.clone())
            }, b.prototype.flip = function() {
                this.normal = this.normal.scale(-1)
            }, b.prototype.interpolate = function(c, d) {
                return new b(a.Vector3.Lerp(this.pos, c.pos, d), a.Vector3.Lerp(this.normal, c.normal, d), a.Vector2.Lerp(this.uv, c.uv, d))
            }, b
        }(),
        d = function() {
            function b(a, b) {
                this.normal = a, this.w = b
            }
            return b.FromPoints = function(c, d, e) {
                var f = e.subtract(c),
                    g = d.subtract(c);
                if (0 === f.lengthSquared() || 0 === g.lengthSquared()) return null;
                var h = a.Vector3.Normalize(a.Vector3.Cross(f, g));
                return new b(h, a.Vector3.Dot(h, c))
            }, b.prototype.clone = function() {
                return new b(this.normal.clone(), this.w)
            }, b.prototype.flip = function() {
                this.normal.scaleInPlace(-1), this.w = -this.w
            }, b.prototype.splitPolygon = function(c, d, f, g, h) {
                for (var i = 0, j = 1, k = 2, l = 3, m = 0, n = [], o = 0; o < c.vertices.length; o++) {
                    var p = a.Vector3.Dot(this.normal, c.vertices[o].pos) - this.w,
                        q = p < -b.EPSILON ? k : p > b.EPSILON ? j : i;
                    m |= q, n.push(q)
                }
                switch (m) {
                    case i:
                        (a.Vector3.Dot(this.normal, c.plane.normal) > 0 ? d : f).push(c);
                        break;
                    case j:
                        g.push(c);
                        break;
                    case k:
                        h.push(c);
                        break;
                    case l:
                        var r = [],
                            s = [];
                        for (o = 0; o < c.vertices.length; o++) {
                            var t = (o + 1) % c.vertices.length,
                                u = n[o],
                                v = n[t],
                                w = c.vertices[o],
                                x = c.vertices[t];
                            if (u != k && r.push(w), u != j && s.push(u != k ? w.clone() : w), (u | v) == l) {
                                p = (this.w - a.Vector3.Dot(this.normal, w.pos)) / a.Vector3.Dot(this.normal, x.pos.subtract(w.pos));
                                var y = w.interpolate(x, p);
                                r.push(y), s.push(y.clone())
                            }
                        }
                        if (r.length >= 3) {
                            var z = new e(r, c.shared);
                            z.plane && g.push(z)
                        }
                        s.length >= 3 && (z = new e(s, c.shared), z.plane && h.push(z))
                }
            }, b.EPSILON = 1e-5, b
        }(),
        e = function() {
            function a(a, b) {
                this.vertices = a, this.shared = b, this.plane = d.FromPoints(a[0].pos, a[1].pos, a[2].pos)
            }
            return a.prototype.clone = function() {
                var b = this.vertices.map(function(a) {
                    return a.clone()
                });
                return new a(b, this.shared)
            }, a.prototype.flip = function() {
                this.vertices.reverse().map(function(a) {
                    a.flip()
                }), this.plane.flip()
            }, a
        }(),
        f = function() {
            function a(a) {
                this.plane = null, this.front = null, this.back = null, this.polygons = [], a && this.build(a)
            }
            return a.prototype.clone = function() {
                var b = new a;
                return b.plane = this.plane && this.plane.clone(), b.front = this.front && this.front.clone(), b.back = this.back && this.back.clone(), b.polygons = this.polygons.map(function(a) {
                    return a.clone()
                }), b
            }, a.prototype.invert = function() {
                for (var a = 0; a < this.polygons.length; a++) this.polygons[a].flip();
                this.plane && this.plane.flip(), this.front && this.front.invert(), this.back && this.back.invert();
                var b = this.front;
                this.front = this.back, this.back = b
            }, a.prototype.clipPolygons = function(a) {
                if (!this.plane) return a.slice();
                for (var b = [], c = [], d = 0; d < a.length; d++) this.plane.splitPolygon(a[d], b, c, b, c);
                return this.front && (b = this.front.clipPolygons(b)), c = this.back ? this.back.clipPolygons(c) : [], b.concat(c)
            }, a.prototype.clipTo = function(a) {
                this.polygons = a.clipPolygons(this.polygons), this.front && this.front.clipTo(a), this.back && this.back.clipTo(a)
            }, a.prototype.allPolygons = function() {
                var a = this.polygons.slice();
                return this.front && (a = a.concat(this.front.allPolygons())), this.back && (a = a.concat(this.back.allPolygons())), a
            }, a.prototype.build = function(b) {
                if (b.length) {
                    this.plane || (this.plane = b[0].plane.clone());
                    for (var c = [], d = [], e = 0; e < b.length; e++) this.plane.splitPolygon(b[e], this.polygons, this.polygons, c, d);
                    c.length && (this.front || (this.front = new a), this.front.build(c)), d.length && (this.back || (this.back = new a), this.back.build(d))
                }
            }, a
        }(),
        g = function() {
            function d() {
                this.polygons = new Array
            }
            return d.FromMesh = function(f) {
                var g, h, i, j, k, l, m = [];
                if (!(f instanceof a.Mesh)) throw "BABYLON.CSG: Wrong Mesh type, must be BABYLON.Mesh";
                f.computeWorldMatrix(!0);
                for (var n = f.getWorldMatrix(), o = f.position.clone(), p = f.rotation.clone(), q = f.scaling.clone(), r = f.getIndices(), s = f.getVerticesData(a.VertexBuffer.PositionKind), t = f.getVerticesData(a.VertexBuffer.NormalKind), u = f.getVerticesData(a.VertexBuffer.UVKind), v = f.subMeshes, w = 0, x = v.length; x > w; w++)
                    for (var y = v[w].indexStart, z = v[w].indexCount + v[w].indexStart; z > y; y += 3) {
                        l = [];
                        for (var A = 0; 3 > A; A++) {
                            var B = new a.Vector3(t[3 * r[y + A]], t[3 * r[y + A] + 1], t[3 * r[y + A] + 2]);
                            i = new a.Vector2(u[2 * r[y + A]], u[2 * r[y + A] + 1]);
                            var C = new a.Vector3(s[3 * r[y + A]], s[3 * r[y + A] + 1], s[3 * r[y + A] + 2]);
                            j = a.Vector3.TransformCoordinates(C, n), h = a.Vector3.TransformNormal(B, n), g = new c(j, h, i), l.push(g)
                        }
                        k = new e(l, {
                            subMeshId: w,
                            meshId: b,
                            materialIndex: v[w].materialIndex
                        }), k.plane && m.push(k)
                    }
                var D = d.FromPolygons(m);
                return D.matrix = n, D.position = o, D.rotation = p, D.scaling = q, b++, D
            }, d.FromPolygons = function(b) {
                var c = new a.CSG;
                return c.polygons = b, c
            }, d.prototype.clone = function() {
                var b = new a.CSG;
                return b.polygons = this.polygons.map(function(a) {
                    return a.clone()
                }), b.copyTransformAttributes(this), b
            }, d.prototype.toPolygons = function() {
                return this.polygons
            }, d.prototype.union = function(a) {
                var b = new f(this.clone().polygons),
                    c = new f(a.clone().polygons);
                return b.clipTo(c), c.clipTo(b), c.invert(), c.clipTo(b), c.invert(), b.build(c.allPolygons()), d.FromPolygons(b.allPolygons()).copyTransformAttributes(this)
            }, d.prototype.unionInPlace = function(a) {
                var b = new f(this.polygons),
                    c = new f(a.polygons);
                b.clipTo(c), c.clipTo(b), c.invert(), c.clipTo(b), c.invert(), b.build(c.allPolygons()), this.polygons = b.allPolygons()
            }, d.prototype.subtract = function(a) {
                var b = new f(this.clone().polygons),
                    c = new f(a.clone().polygons);
                return b.invert(), b.clipTo(c), c.clipTo(b), c.invert(), c.clipTo(b), c.invert(), b.build(c.allPolygons()), b.invert(), d.FromPolygons(b.allPolygons()).copyTransformAttributes(this)
            }, d.prototype.subtractInPlace = function(a) {
                var b = new f(this.polygons),
                    c = new f(a.polygons);
                b.invert(), b.clipTo(c), c.clipTo(b), c.invert(), c.clipTo(b), c.invert(), b.build(c.allPolygons()), b.invert(), this.polygons = b.allPolygons()
            }, d.prototype.intersect = function(a) {
                var b = new f(this.clone().polygons),
                    c = new f(a.clone().polygons);
                return b.invert(), c.clipTo(b), c.invert(), b.clipTo(c), c.clipTo(b), b.build(c.allPolygons()), b.invert(), d.FromPolygons(b.allPolygons()).copyTransformAttributes(this)
            }, d.prototype.intersectInPlace = function(a) {
                var b = new f(this.polygons),
                    c = new f(a.polygons);
                b.invert(), c.clipTo(b), c.invert(), b.clipTo(c), c.clipTo(b), b.build(c.allPolygons()), b.invert(), this.polygons = b.allPolygons()
            }, d.prototype.inverse = function() {
                var a = this.clone();
                return a.inverseInPlace(), a
            }, d.prototype.inverseInPlace = function() {
                this.polygons.map(function(a) {
                    a.flip()
                })
            }, d.prototype.copyTransformAttributes = function(a) {
                return this.matrix = a.matrix, this.position = a.position, this.rotation = a.rotation, this.scaling = a.scaling, this
            }, d.prototype.buildMeshGeometry = function(b, c, d) {
                var e = this.matrix.clone();
                e.invert();
                var f, g, h, i = new a.Mesh(b, c),
                    j = [],
                    k = [],
                    l = [],
                    m = [],
                    n = a.Vector3.Zero(),
                    o = a.Vector3.Zero(),
                    p = a.Vector2.Zero(),
                    q = this.polygons,
                    r = [0, 0, 0],
                    s = {},
                    t = 0,
                    u = {};
                d && q.sort(function(a, b) {
                    return a.shared.meshId === b.shared.meshId ? a.shared.subMeshId - b.shared.subMeshId : a.shared.meshId - b.shared.meshId
                });
                for (var v = 0, w = q.length; w > v; v++) {
                    f = q[v], u[f.shared.meshId] || (u[f.shared.meshId] = {}), u[f.shared.meshId][f.shared.subMeshId] || (u[f.shared.meshId][f.shared.subMeshId] = {
                        indexStart: +1 / 0,
                        indexEnd: -1 / 0,
                        materialIndex: f.shared.materialIndex
                    }), h = u[f.shared.meshId][f.shared.subMeshId];
                    for (var x = 2, y = f.vertices.length; y > x; x++) {
                        r[0] = 0, r[1] = x - 1, r[2] = x;
                        for (var z = 0; 3 > z; z++) {
                            n.copyFrom(f.vertices[r[z]].pos), o.copyFrom(f.vertices[r[z]].normal), p.copyFrom(f.vertices[r[z]].uv);
                            var A = a.Vector3.TransformCoordinates(n, e),
                                B = a.Vector3.TransformNormal(o, e);
                            g = s[A.x + "," + A.y + "," + A.z], ("undefined" == typeof g || l[3 * g] !== B.x || l[3 * g + 1] !== B.y || l[3 * g + 2] !== B.z || m[2 * g] !== p.x || m[2 * g + 1] !== p.y) && (j.push(A.x, A.y, A.z), m.push(p.x, p.y), l.push(o.x, o.y, o.z), g = s[A.x + "," + A.y + "," + A.z] = j.length / 3 - 1), k.push(g), h.indexStart = Math.min(t, h.indexStart), h.indexEnd = Math.max(t, h.indexEnd), t++
                        }
                    }
                }
                if (i.setVerticesData(a.VertexBuffer.PositionKind, j), i.setVerticesData(a.VertexBuffer.NormalKind, l), i.setVerticesData(a.VertexBuffer.UVKind, m), i.setIndices(k), d) {
                    var C, D = 0;
                    i.subMeshes.length = 0;
                    for (var E in u) {
                        C = -1;
                        for (var F in u[E]) h = u[E][F], a.SubMesh.CreateFromIndices(h.materialIndex + D, h.indexStart, h.indexEnd - h.indexStart + 1, i), C = Math.max(h.materialIndex, C);
                        D += ++C
                    }
                }
                return i
            }, d.prototype.toMesh = function(a, b, c, d) {
                var e = this.buildMeshGeometry(a, c, d);
                return e.material = b, e.position.copyFrom(this.position), e.rotation.copyFrom(this.rotation), e.scaling.copyFrom(this.scaling), e.computeWorldMatrix(!0), e
            }, d
        }();
    a.CSG = g
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f) {
            var g = this;
            b.call(this, c, "oculusDistortionCorrection", ["LensCenter", "Scale", "ScaleIn", "HmdWarpParam"], null, f.PostProcessScaleFactor, d, a.Texture.BILINEAR_SAMPLINGMODE, null, null), this._isRightEye = e, this._distortionFactors = f.DistortionK, this._postProcessScaleFactor = f.PostProcessScaleFactor, this._lensCenterOffset = f.LensCenterOffset, this.onSizeChanged = function() {
                g.aspectRatio = .5 * g.width / g.height, g._scaleIn = new a.Vector2(2, 2 / g.aspectRatio), g._scaleFactor = new a.Vector2(.5 * (1 / g._postProcessScaleFactor), .5 * (1 / g._postProcessScaleFactor) * g.aspectRatio), g._lensCenter = new a.Vector2(g._isRightEye ? .5 - .5 * g._lensCenterOffset : .5 + .5 * g._lensCenterOffset, .5)
            }, this.onApply = function(a) {
                a.setFloat2("LensCenter", g._lensCenter.x, g._lensCenter.y), a.setFloat2("Scale", g._scaleFactor.x, g._scaleFactor.y), a.setFloat2("ScaleIn", g._scaleIn.x, g._scaleIn.y), a.setFloat4("HmdWarpParam", g._distortionFactors[0], g._distortionFactors[1], g._distortionFactors[2], g._distortionFactors[3])
            }
        }
        return __extends(c, b), c
    }(a.PostProcess);
    a.OculusDistortionCorrectionPostProcess = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    ! function(a) {
        a[a.X = 0] = "X", a[a.Y = 1] = "Y", a[a.Z = 2] = "Z"
    }(a.JoystickAxis || (a.JoystickAxis = {}));
    var b = (a.JoystickAxis, function() {
        function b(c) {
            var d = this;
            this._leftJoystick = c ? !0 : !1, this._joystickIndex = b._globalJoystickIndex, b._globalJoystickIndex++, this._axisTargetedByLeftAndRight = 0, this._axisTargetedByUpAndDown = 1, this.reverseLeftRight = !1, this.reverseUpDown = !1, this._touches = new a.VirtualJoystick.Collection, this.deltaPosition = a.Vector3.Zero(), this._joystickSensibility = 25, this._inversedSensibility = 1 / (this._joystickSensibility / 1e3), this._rotationSpeed = 25, this._inverseRotationSpeed = 1 / (this._rotationSpeed / 1e3), this._rotateOnAxisRelativeToMesh = !1, b.vjCanvas || (window.addEventListener("resize", function() {
                b.vjCanvasWidth = window.innerWidth, b.vjCanvasHeight = window.innerHeight, b.vjCanvas.width = b.vjCanvasWidth, b.vjCanvas.height = b.vjCanvasHeight, b.halfWidth = b.vjCanvasWidth / 2, b.halfHeight = b.vjCanvasHeight / 2
            }, !1), b.vjCanvas = document.createElement("canvas"), b.vjCanvasWidth = window.innerWidth, b.vjCanvasHeight = window.innerHeight, b.vjCanvas.width = window.innerWidth, b.vjCanvas.height = window.innerHeight, b.vjCanvas.style.width = "100%", b.vjCanvas.style.height = "100%", b.vjCanvas.style.position = "absolute", b.vjCanvas.style.backgroundColor = "transparent", b.vjCanvas.style.top = "0px", b.vjCanvas.style.left = "0px", b.vjCanvas.style.zIndex = "5", b.vjCanvas.style.msTouchAction = "none", b.vjCanvasContext = b.vjCanvas.getContext("2d"), b.vjCanvasContext.strokeStyle = "#ffffff", b.vjCanvasContext.lineWidth = 2, document.body.appendChild(b.vjCanvas)), b.halfWidth = b.vjCanvas.width / 2, b.halfHeight = b.vjCanvas.height / 2, this.pressed = !1, this._joystickColor = "cyan", this._joystickPointerID = -1, this._joystickPointerPos = new a.Vector2(0, 0), this._joystickPointerStartPos = new a.Vector2(0, 0), this._deltaJoystickVector = new a.Vector2(0, 0), b.vjCanvas.addEventListener("pointerdown", function(a) {
                d._onPointerDown(a)
            }, !1), b.vjCanvas.addEventListener("pointermove", function(a) {
                d._onPointerMove(a)
            }, !1), b.vjCanvas.addEventListener("pointerup", function(a) {
                d._onPointerUp(a)
            }, !1), b.vjCanvas.addEventListener("pointerout", function(a) {
                d._onPointerUp(a)
            }, !1), b.vjCanvas.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1), requestAnimationFrame(function() {
                d._drawVirtualJoystick()
            })
        }
        return b.prototype.setJoystickSensibility = function(a) {
            this._joystickSensibility = a, this._inversedSensibility = 1 / (this._joystickSensibility / 1e3)
        }, b.prototype._onPointerDown = function(a) {
            var c;
            a.preventDefault(), c = this._leftJoystick === !0 ? a.clientX < b.halfWidth : a.clientX > b.halfWidth, c && this._joystickPointerID < 0 ? (this._joystickPointerID = a.pointerId, this._joystickPointerStartPos.x = a.clientX, this._joystickPointerStartPos.y = a.clientY, this._joystickPointerPos = this._joystickPointerStartPos.clone(), this._deltaJoystickVector.x = 0, this._deltaJoystickVector.y = 0, this.pressed = !0, this._touches.add(a.pointerId.toString(), a)) : b._globalJoystickIndex < 2 && this._action && (this._action(), this._touches.add(a.pointerId.toString(), a))
        }, b.prototype._onPointerMove = function(a) {
            if (this._joystickPointerID == a.pointerId) {
                this._joystickPointerPos.x = a.clientX, this._joystickPointerPos.y = a.clientY, this._deltaJoystickVector = this._joystickPointerPos.clone(), this._deltaJoystickVector = this._deltaJoystickVector.subtract(this._joystickPointerStartPos);
                var b = this.reverseLeftRight ? -1 : 1,
                    c = b * this._deltaJoystickVector.x / this._inversedSensibility;
                switch (this._axisTargetedByLeftAndRight) {
                    case 0:
                        this.deltaPosition.x = Math.min(1, Math.max(-1, c));
                        break;
                    case 1:
                        this.deltaPosition.y = Math.min(1, Math.max(-1, c));
                        break;
                    case 2:
                        this.deltaPosition.z = Math.min(1, Math.max(-1, c))
                }
                var d = this.reverseUpDown ? 1 : -1,
                    e = d * this._deltaJoystickVector.y / this._inversedSensibility;
                switch (this._axisTargetedByUpAndDown) {
                    case 0:
                        this.deltaPosition.x = Math.min(1, Math.max(-1, e));
                        break;
                    case 1:
                        this.deltaPosition.y = Math.min(1, Math.max(-1, e));
                        break;
                    case 2:
                        this.deltaPosition.z = Math.min(1, Math.max(-1, e))
                }
            } else this._touches.item(a.pointerId.toString()) && (this._touches.item(a.pointerId.toString()).x = a.clientX, this._touches.item(a.pointerId.toString()).y = a.clientY)
        }, b.prototype._onPointerUp = function(a) {
            this._clearCanvas(), this._joystickPointerID == a.pointerId && (this._joystickPointerID = -1, this.pressed = !1), this._deltaJoystickVector.x = 0, this._deltaJoystickVector.y = 0, this._touches.remove(a.pointerId.toString())
        }, b.prototype.setJoystickColor = function(a) {
            this._joystickColor = a
        }, b.prototype.setActionOnTouch = function(a) {
            this._action = a
        }, b.prototype.setAxisForLeftRight = function(a) {
            switch (a) {
                case 0:
                case 1:
                case 2:
                    this._axisTargetedByLeftAndRight = a;
                    break;
                default:
                    this._axisTargetedByLeftAndRight = 0
            }
        }, b.prototype.setAxisForUpDown = function(a) {
            switch (a) {
                case 0:
                case 1:
                case 2:
                    this._axisTargetedByUpAndDown = a;
                    break;
                default:
                    this._axisTargetedByUpAndDown = 1
            }
        }, b.prototype._clearCanvas = function() {
            this._leftJoystick ? b.vjCanvasContext.clearRect(0, 0, b.vjCanvasWidth / 2, b.vjCanvasHeight) : b.vjCanvasContext.clearRect(b.vjCanvasWidth / 2, 0, b.vjCanvasWidth, b.vjCanvasHeight)
        }, b.prototype._drawVirtualJoystick = function() {
            var a = this;
            this.pressed && (this._clearCanvas(), this._touches.forEach(function(c) {
                c.pointerId === a._joystickPointerID ? (b.vjCanvasContext.beginPath(), b.vjCanvasContext.strokeStyle = a._joystickColor, b.vjCanvasContext.lineWidth = 6, b.vjCanvasContext.arc(a._joystickPointerStartPos.x, a._joystickPointerStartPos.y, 40, 0, 2 * Math.PI, !0), b.vjCanvasContext.stroke(), b.vjCanvasContext.beginPath(), b.vjCanvasContext.strokeStyle = a._joystickColor, b.vjCanvasContext.lineWidth = 2, b.vjCanvasContext.arc(a._joystickPointerStartPos.x, a._joystickPointerStartPos.y, 60, 0, 2 * Math.PI, !0), b.vjCanvasContext.stroke(), b.vjCanvasContext.beginPath(), b.vjCanvasContext.strokeStyle = a._joystickColor, b.vjCanvasContext.arc(a._joystickPointerPos.x, a._joystickPointerPos.y, 40, 0, 2 * Math.PI, !0), b.vjCanvasContext.stroke()) : (b.vjCanvasContext.beginPath(), b.vjCanvasContext.fillStyle = "white", b.vjCanvasContext.beginPath(), b.vjCanvasContext.strokeStyle = "red", b.vjCanvasContext.lineWidth = 6, b.vjCanvasContext.arc(c.x, c.y, 40, 0, 2 * Math.PI, !0), b.vjCanvasContext.stroke())
            })), requestAnimationFrame(function() {
                a._drawVirtualJoystick()
            })
        }, b.prototype.releaseCanvas = function() {
            b.vjCanvas && (document.body.removeChild(b.vjCanvas), b.vjCanvas = null)
        }, b._globalJoystickIndex = 0, b
    }());
    a.VirtualJoystick = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                this._count = 0, this._collection = new Array
            }
            return a.prototype.Count = function() {
                return this._count
            }, a.prototype.add = function(a, b) {
                return void 0 != this._collection[a] ? void 0 : (this._collection[a] = b, ++this._count)
            }, a.prototype.remove = function(a) {
                return void 0 == this._collection[a] ? void 0 : (delete this._collection[a], --this._count)
            }, a.prototype.item = function(a) {
                return this._collection[a]
            }, a.prototype.forEach = function(a) {
                var b;
                for (b in this._collection) this._collection.hasOwnProperty(b) && a(this._collection[b])
            }, a
        }();
        a.Collection = b
    }(b = a.VirtualJoystick || (a.VirtualJoystick = {}))
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = {
            HResolution: 1280,
            VResolution: 800,
            HScreenSize: .149759993,
            VScreenSize: .0935999975,
            VScreenCenter: .0467999987,
            EyeToScreenDistance: .0410000011,
            LensSeparationDistance: .063500002,
            InterpupillaryDistance: .064000003,
            DistortionK: [1, .219999999, .239999995, 0],
            ChromaAbCorrection: [.995999992, -.00400000019, 1.01400006, 0],
            PostProcessScaleFactor: 1.714605507808412,
            LensCenterOffset: .151976421
        },
        c = function(c) {
            function d(d, e, f, g) {
                c.call(this, d, e, f), this._workMatrix = new a.Matrix, this._actualUp = new a.Vector3(0, 0, 0), this._aspectRatioAspectRatio = b.HResolution / (2 * b.VResolution), this._aspectRatioFov = 2 * Math.atan(b.PostProcessScaleFactor * b.VScreenSize / (2 * b.EyeToScreenDistance));
                var h = b.HScreenSize / 4 - b.LensSeparationDistance / 2,
                    i = 4 * h / b.HScreenSize;
                this._hMatrix = a.Matrix.Translation(g ? i : -i, 0, 0), this.viewport = new a.Viewport(g ? 0 : .5, 0, .5, 1), this._preViewMatrix = a.Matrix.Translation(g ? .5 * b.InterpupillaryDistance : -.5 * b.InterpupillaryDistance, 0, 0);
                new a.OculusDistortionCorrectionPostProcess("Oculus Distortion", this, !g, b)
            }
            return __extends(d, c), d.prototype.getProjectionMatrix = function() {
                return a.Matrix.PerspectiveFovLHToRef(this._aspectRatioFov, this._aspectRatioAspectRatio, this.minZ, this.maxZ, this._workMatrix), this._workMatrix.multiplyToRef(this._hMatrix, this._projectionMatrix), this._projectionMatrix
            }, d.prototype._getViewMatrix = function() {
                return a.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), a.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), a.Vector3.TransformNormalToRef(this.upVector, this._cameraRotationMatrix, this._actualUp), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), a.Matrix.LookAtLHToRef(this.position, this._currentTarget, this._actualUp, this._workMatrix), this._workMatrix.multiplyToRef(this._preViewMatrix, this._viewMatrix), this._viewMatrix
            }, d
        }(a.FreeCamera),
        d = function(a) {
            function b(b, d, e) {
                a.call(this, b, d, e), this._leftCamera = new c(b + "_left", d.clone(), e, !0), this._rightCamera = new c(b + "_right", d.clone(), e, !1), this.subCameras.push(this._leftCamera), this.subCameras.push(this._rightCamera), this._deviceOrientationHandler = this._onOrientationEvent.bind(this)
            }
            return __extends(b, a), b.prototype._update = function() {
                this._leftCamera.position.copyFrom(this.position), this._rightCamera.position.copyFrom(this.position), this._updateCamera(this._leftCamera), this._updateCamera(this._rightCamera), a.prototype._update.call(this)
            }, b.prototype._updateCamera = function(a) {
                a.minZ = this.minZ, a.maxZ = this.maxZ, a.rotation.x = this.rotation.x, a.rotation.y = this.rotation.y, a.rotation.z = this.rotation.z
            }, b.prototype._onOrientationEvent = function(a) {
                var b = a.alpha / 180 * Math.PI,
                    c = a.beta / 180 * Math.PI,
                    d = a.gamma / 180 * Math.PI;
                return this._offsetOrientation ? (this.rotation.y += b - this._offsetOrientation.yaw, this.rotation.x += c - this._offsetOrientation.pitch, this.rotation.z += this._offsetOrientation.roll - d, this._offsetOrientation.yaw = b, this._offsetOrientation.pitch = c, this._offsetOrientation.roll = d, void 0) : void(this._offsetOrientation = {
                    yaw: b,
                    pitch: c,
                    roll: d
                })
            }, b.prototype.attachControl = function(b, c) {
                a.prototype.attachControl.call(this, b, c), window.addEventListener("deviceorientation", this._deviceOrientationHandler)
            }, b.prototype.detachControl = function(b) {
                a.prototype.detachControl.call(this, b), window.removeEventListener("deviceorientation", this._deviceOrientationHandler)
            }, b
        }(a.FreeCamera);
    a.OculusCamera = d
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = {
            HResolution: 1280,
            VResolution: 800,
            HScreenSize: .149759993,
            VScreenSize: .0935999975,
            VScreenCenter: .0467999987,
            EyeToScreenDistance: .0410000011,
            LensSeparationDistance: .063500002,
            InterpupillaryDistance: .064000003,
            DistortionK: [1, .219999999, .239999995, 0],
            ChromaAbCorrection: [.995999992, -.00400000019, 1.01400006, 0],
            PostProcessScaleFactor: 1.714605507808412,
            LensCenterOffset: .151976421
        },
        c = function(c) {
            function d(d, e, f, g) {
                c.call(this, d, e, f), this._workMatrix = new a.Matrix, this._actualUp = new a.Vector3(0, 0, 0), this._aspectRatioAspectRatio = b.HResolution / (2 * b.VResolution), this._aspectRatioFov = 2 * Math.atan(b.PostProcessScaleFactor * b.VScreenSize / (2 * b.EyeToScreenDistance));
                var h = b.HScreenSize / 4 - b.LensSeparationDistance / 2,
                    i = 4 * h / b.HScreenSize;
                this._hMatrix = a.Matrix.Translation(g ? i : -i, 0, 0), this.viewport = new a.Viewport(g ? 0 : .5, 0, .5, 1), this._preViewMatrix = a.Matrix.Translation(g ? .5 * b.InterpupillaryDistance : -.5 * b.InterpupillaryDistance, 0, 0);
                new a.OculusDistortionCorrectionPostProcess("Oculus Distortion", this, !g, b)
            }
            return __extends(d, c), d.prototype.getProjectionMatrix = function() {
                return a.Matrix.PerspectiveFovLHToRef(this._aspectRatioFov, this._aspectRatioAspectRatio, this.minZ, this.maxZ, this._workMatrix), this._workMatrix.multiplyToRef(this._hMatrix, this._projectionMatrix), this._projectionMatrix
            }, d.prototype._getViewMatrix = function() {
                return a.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), a.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), a.Vector3.TransformNormalToRef(this.upVector, this._cameraRotationMatrix, this._actualUp), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), a.Matrix.LookAtLHToRef(this.position, this._currentTarget, this._actualUp, this._workMatrix), this._workMatrix.multiplyToRef(this._preViewMatrix, this._viewMatrix), this._viewMatrix
            }, d
        }(a.FreeCamera),
        d = function(b) {
            function d(d, e, f) {
                var g = this;
                b.call(this, d, e, f), this.angularSensibility = 200, this.moveSensibility = 75, this._leftCamera = new c(d + "_left", e.clone(), f, !0), this._rightCamera = new c(d + "_right", e.clone(), f, !1), this.subCameras.push(this._leftCamera), this.subCameras.push(this._rightCamera), this._deviceOrientationHandler = this._onOrientationEvent.bind(this), this._gamepads = new a.Gamepads(function(a) {
                    g._onNewGameConnected(a)
                })
            }
            return __extends(d, b), d.prototype._onNewGameConnected = function(a) {
                0 === a.index && (this._gamepad = a)
            }, d.prototype._update = function() {
                this._leftCamera.position.copyFrom(this.position), this._rightCamera.position.copyFrom(this.position), this._updateCamera(this._leftCamera), this._updateCamera(this._rightCamera), b.prototype._update.call(this)
            }, d.prototype._checkInputs = function() {
                if (this._gamepad) {
                    var b = this._gamepad.leftStick,
                        c = b.x / this.moveSensibility,
                        d = b.y / this.moveSensibility;
                    b.x = Math.abs(c) > .005 ? 0 + c : 0, b.y = Math.abs(d) > .005 ? 0 + d : 0;
                    var e = a.Matrix.RotationYawPitchRoll(this.rotation.y, this.rotation.x, 0),
                        f = a.Vector3.TransformCoordinates(new a.Vector3(b.x, 0, -b.y), e);
                    this.cameraDirection = this.cameraDirection.add(f)
                }
            }, d.prototype._updateCamera = function(a) {
                a.minZ = this.minZ, a.maxZ = this.maxZ, a.rotation.x = this.rotation.x, a.rotation.y = this.rotation.y, a.rotation.z = this.rotation.z
            }, d.prototype._onOrientationEvent = function(a) {
                var b = a.alpha / 180 * Math.PI,
                    c = a.beta / 180 * Math.PI,
                    d = a.gamma / 180 * Math.PI;
                return this._offsetOrientation ? (this.rotation.y += b - this._offsetOrientation.yaw, this.rotation.x += c - this._offsetOrientation.pitch, this.rotation.z += this._offsetOrientation.roll - d, this._offsetOrientation.yaw = b, this._offsetOrientation.pitch = c, this._offsetOrientation.roll = d, void 0) : void(this._offsetOrientation = {
                    yaw: b,
                    pitch: c,
                    roll: d
                })
            }, d.prototype.attachControl = function(a, c) {
                b.prototype.attachControl.call(this, a, c), window.addEventListener("deviceorientation", this._deviceOrientationHandler)
            }, d.prototype.detachControl = function(a) {
                b.prototype.detachControl.call(this, a), window.removeEventListener("deviceorientation", this._deviceOrientationHandler)
            }, d.prototype.dispose = function() {
                this._gamepads.dispose(), b.prototype.dispose.call(this)
            }, d
        }(a.FreeCamera);
    a.OculusGamepadCamera = d
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            b.call(this, c, d, e), this._leftjoystick = new a.VirtualJoystick(!0), this._leftjoystick.setAxisForUpDown(2), this._leftjoystick.setAxisForLeftRight(0), this._leftjoystick.setJoystickSensibility(.15), this._rightjoystick = new a.VirtualJoystick(!1), this._rightjoystick.setAxisForUpDown(0), this._rightjoystick.setAxisForLeftRight(1), this._rightjoystick.reverseUpDown = !0, this._rightjoystick.setJoystickSensibility(.05), this._rightjoystick.setJoystickColor("yellow")
        }
        return __extends(c, b), c.prototype._checkInputs = function() {
            var b = a.Matrix.RotationYawPitchRoll(this.rotation.y, this.rotation.x, 0),
                c = a.Vector3.TransformCoordinates(this._leftjoystick.deltaPosition, b);
            this.cameraDirection = this.cameraDirection.add(c), this.cameraRotation = this.cameraRotation.addVector3(this._rightjoystick.deltaPosition), this._leftjoystick.pressed || (this._leftjoystick.deltaPosition = this._leftjoystick.deltaPosition.scale(.9)), this._rightjoystick.pressed || (this._rightjoystick.deltaPosition = this._rightjoystick.deltaPosition.scale(.9))
        }, c.prototype.dispose = function() {
            this._leftjoystick.releaseCanvas(), b.prototype.dispose.call(this)
        }, c
    }(a.FreeCamera);
    a.VirtualJoysticksCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f) {
            b.call(this, c, d), this._textures = new Array, this._floats = new Array, this._floatsArrays = {}, this._colors3 = new Array, this._colors4 = new Array, this._vectors2 = new Array, this._vectors3 = new Array, this._matrices = new Array, this._cachedWorldViewMatrix = new a.Matrix, this._shaderPath = e, f.needAlphaBlending = f.needAlphaBlending || !1, f.needAlphaTesting = f.needAlphaTesting || !1, f.attributes = f.attributes || ["position", "normal", "uv"], f.uniforms = f.uniforms || ["worldViewProjection"], f.samplers = f.samplers || [], this._options = f
        }
        return __extends(c, b), c.prototype.needAlphaBlending = function() {
            return this._options.needAlphaBlending
        }, c.prototype.needAlphaTesting = function() {
            return this._options.needAlphaTesting
        }, c.prototype._checkUniform = function(a) {
            -1 === this._options.uniforms.indexOf(a) && this._options.uniforms.push(a)
        }, c.prototype.setTexture = function(a, b) {
            return -1 === this._options.samplers.indexOf(a) && this._options.samplers.push(a), this._textures[a] = b, this
        }, c.prototype.setFloat = function(a, b) {
            return this._checkUniform(a), this._floats[a] = b, this
        }, c.prototype.setFloats = function(a, b) {
            return this._checkUniform(a), this._floatsArrays[a] = b, this
        }, c.prototype.setColor3 = function(a, b) {
            return this._checkUniform(a), this._colors3[a] = b, this
        }, c.prototype.setColor4 = function(a, b) {
            return this._checkUniform(a), this._colors4[a] = b, this
        }, c.prototype.setVector2 = function(a, b) {
            return this._checkUniform(a), this._vectors2[a] = b, this
        }, c.prototype.setVector3 = function(a, b) {
            return this._checkUniform(a), this._vectors3[a] = b, this
        }, c.prototype.setMatrix = function(a, b) {
            return this._checkUniform(a), this._matrices[a] = b, this
        }, c.prototype.isReady = function() {
            var a = this.getScene(),
                b = a.getEngine();
            if (!this.checkReadyOnEveryCall && this._renderId === a.getRenderId()) return !0;
            var c = this._effect;
            return this._effect = b.createEffect(this._shaderPath, this._options.attributes, this._options.uniforms, this._options.samplers, "", null, this.onCompiled, this.onError), this._effect.isReady() ? (c !== this._effect && a.resetCachedMaterial(), this._renderId = a.getRenderId(), !0) : !1
        }, c.prototype.bindOnlyWorldMatrix = function(a) {
            var b = this.getScene(); - 1 !== this._options.uniforms.indexOf("world") && this._effect.setMatrix("world", a), -1 !== this._options.uniforms.indexOf("worldView") && (a.multiplyToRef(b.getViewMatrix(), this._cachedWorldViewMatrix), this._effect.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== this._options.uniforms.indexOf("worldViewProjection") && this._effect.setMatrix("worldViewProjection", a.multiply(b.getTransformMatrix()))
        }, c.prototype.bind = function(a) {
            if (this.bindOnlyWorldMatrix(a), this.getScene().getCachedMaterial() !== this) {
                -1 !== this._options.uniforms.indexOf("view") && this._effect.setMatrix("view", this.getScene().getViewMatrix()), -1 !== this._options.uniforms.indexOf("projection") && this._effect.setMatrix("projection", this.getScene().getProjectionMatrix()), -1 !== this._options.uniforms.indexOf("viewProjection") && this._effect.setMatrix("viewProjection", this.getScene().getTransformMatrix());
                for (var c in this._textures) this._effect.setTexture(c, this._textures[c]);
                for (c in this._floats) this._effect.setFloat(c, this._floats[c]);
                for (c in this._floatsArrays) this._effect.setArray(c, this._floatsArrays[c]);
                for (c in this._colors3) this._effect.setColor3(c, this._colors3[c]);
                for (c in this._colors4) {
                    var d = this._colors4[c];
                    this._effect.setFloat4(c, d.r, d.g, d.b, d.a)
                }
                for (c in this._vectors2) this._effect.setVector2(c, this._vectors2[c]);
                for (c in this._vectors3) this._effect.setVector3(c, this._vectors3[c]);
                for (c in this._matrices) this._effect.setMatrix(c, this._matrices[c])
            }
            b.prototype.bind.call(this, a, null)
        }, c.prototype.dispose = function(a) {
            for (var c in this._textures) this._textures[c].dispose();
            this._textures = [], b.prototype.dispose.call(this, a)
        }, c
    }(a.Material);
    a.ShaderMaterial = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b() {}
        return b.prototype.set = function(b, c) {
            switch (c) {
                case a.VertexBuffer.PositionKind:
                    this.positions = b;
                    break;
                case a.VertexBuffer.NormalKind:
                    this.normals = b;
                    break;
                case a.VertexBuffer.UVKind:
                    this.uvs = b;
                    break;
                case a.VertexBuffer.UV2Kind:
                    this.uv2s = b;
                    break;
                case a.VertexBuffer.ColorKind:
                    this.colors = b;
                    break;
                case a.VertexBuffer.MatricesIndicesKind:
                    this.matricesIndices = b;
                    break;
                case a.VertexBuffer.MatricesWeightsKind:
                    this.matricesWeights = b
            }
        }, b.prototype.applyToMesh = function(a, b) {
            this._applyTo(a, b)
        }, b.prototype.applyToGeometry = function(a, b) {
            this._applyTo(a, b)
        }, b.prototype.updateMesh = function(a) {
            this._update(a)
        }, b.prototype.updateGeometry = function(a) {
            this._update(a)
        }, b.prototype._applyTo = function(b, c) {
            this.positions && b.setVerticesData(a.VertexBuffer.PositionKind, this.positions, c), this.normals && b.setVerticesData(a.VertexBuffer.NormalKind, this.normals, c), this.uvs && b.setVerticesData(a.VertexBuffer.UVKind, this.uvs, c), this.uv2s && b.setVerticesData(a.VertexBuffer.UV2Kind, this.uv2s, c), this.colors && b.setVerticesData(a.VertexBuffer.ColorKind, this.colors, c), this.matricesIndices && b.setVerticesData(a.VertexBuffer.MatricesIndicesKind, this.matricesIndices, c), this.matricesWeights && b.setVerticesData(a.VertexBuffer.MatricesWeightsKind, this.matricesWeights, c), this.indices && b.setIndices(this.indices)
        }, b.prototype._update = function(b, c, d) {
            this.positions && b.updateVerticesData(a.VertexBuffer.PositionKind, this.positions, c, d), this.normals && b.updateVerticesData(a.VertexBuffer.NormalKind, this.normals, c, d), this.uvs && b.updateVerticesData(a.VertexBuffer.UVKind, this.uvs, c, d), this.uv2s && b.updateVerticesData(a.VertexBuffer.UV2Kind, this.uv2s, c, d), this.colors && b.updateVerticesData(a.VertexBuffer.ColorKind, this.colors, c, d), this.matricesIndices && b.updateVerticesData(a.VertexBuffer.MatricesIndicesKind, this.matricesIndices, c, d), this.matricesWeights && b.updateVerticesData(a.VertexBuffer.MatricesWeightsKind, this.matricesWeights, c, d), this.indices && b.setIndices(this.indices)
        }, b.prototype.transform = function(b) {
            var c = a.Vector3.Zero();
            if (this.positions)
                for (var d = a.Vector3.Zero(), e = 0; e < this.positions.length; e += 3) a.Vector3.FromArrayToRef(this.positions, e, d), a.Vector3.TransformCoordinatesToRef(d, b, c), this.positions[e] = c.x, this.positions[e + 1] = c.y, this.positions[e + 2] = c.z;
            if (this.normals) {
                var f = a.Vector3.Zero();
                for (e = 0; e < this.normals.length; e += 3) a.Vector3.FromArrayToRef(this.normals, e, f), a.Vector3.TransformNormalToRef(f, b, c), this.normals[e] = c.x, this.normals[e + 1] = c.y, this.normals[e + 2] = c.z
            }
        }, b.prototype.merge = function(a) {
            if (a.indices) {
                this.indices || (this.indices = []);
                for (var b = this.positions ? this.positions.length / 3 : 0, c = 0; c < a.indices.length; c++) this.indices.push(a.indices[c] + b)
            }
            if (a.positions)
                for (this.positions || (this.positions = []), c = 0; c < a.positions.length; c++) this.positions.push(a.positions[c]);
            if (a.normals)
                for (this.normals || (this.normals = []), c = 0; c < a.normals.length; c++) this.normals.push(a.normals[c]);
            if (a.uvs)
                for (this.uvs || (this.uvs = []), c = 0; c < a.uvs.length; c++) this.uvs.push(a.uvs[c]);
            if (a.uv2s)
                for (this.uv2s || (this.uv2s = []), c = 0; c < a.uv2s.length; c++) this.uv2s.push(a.uv2s[c]);
            if (a.matricesIndices)
                for (this.matricesIndices || (this.matricesIndices = []), c = 0; c < a.matricesIndices.length; c++) this.matricesIndices.push(a.matricesIndices[c]);
            if (a.matricesWeights)
                for (this.matricesWeights || (this.matricesWeights = []), c = 0; c < a.matricesWeights.length; c++) this.matricesWeights.push(a.matricesWeights[c]);
            if (a.colors)
                for (this.colors || (this.colors = []), c = 0; c < a.colors.length; c++) this.colors.push(a.colors[c])
        }, b.ExtractFromMesh = function(a) {
            return b._ExtractFrom(a)
        }, b.ExtractFromGeometry = function(a) {
            return b._ExtractFrom(a)
        }, b._ExtractFrom = function(b) {
            var c = new a.VertexData;
            return b.isVerticesDataPresent(a.VertexBuffer.PositionKind) && (c.positions = b.getVerticesData(a.VertexBuffer.PositionKind)), b.isVerticesDataPresent(a.VertexBuffer.NormalKind) && (c.normals = b.getVerticesData(a.VertexBuffer.NormalKind)), b.isVerticesDataPresent(a.VertexBuffer.UVKind) && (c.uvs = b.getVerticesData(a.VertexBuffer.UVKind)), b.isVerticesDataPresent(a.VertexBuffer.UV2Kind) && (c.uv2s = b.getVerticesData(a.VertexBuffer.UV2Kind)), b.isVerticesDataPresent(a.VertexBuffer.ColorKind) && (c.colors = b.getVerticesData(a.VertexBuffer.ColorKind)), b.isVerticesDataPresent(a.VertexBuffer.MatricesIndicesKind) && (c.matricesIndices = b.getVerticesData(a.VertexBuffer.MatricesIndicesKind)), b.isVerticesDataPresent(a.VertexBuffer.MatricesWeightsKind) && (c.matricesWeights = b.getVerticesData(a.VertexBuffer.MatricesWeightsKind)), c.indices = b.getIndices(), c
        }, b.CreateBox = function(b) {
            var c = [new a.Vector3(0, 0, 1), new a.Vector3(0, 0, -1), new a.Vector3(1, 0, 0), new a.Vector3(-1, 0, 0), new a.Vector3(0, 1, 0), new a.Vector3(0, -1, 0)],
                d = [],
                e = [],
                f = [],
                g = [];
            b = b || 1;
            for (var h = 0; h < c.length; h++) {
                var i = c[h],
                    j = new a.Vector3(i.y, i.z, i.x),
                    k = a.Vector3.Cross(i, j),
                    l = e.length / 3;
                d.push(l), d.push(l + 1), d.push(l + 2), d.push(l), d.push(l + 2), d.push(l + 3);
                var m = i.subtract(j).subtract(k).scale(b / 2);
                e.push(m.x, m.y, m.z), f.push(i.x, i.y, i.z), g.push(1, 1), m = i.subtract(j).add(k).scale(b / 2), e.push(m.x, m.y, m.z), f.push(i.x, i.y, i.z), g.push(0, 1), m = i.add(j).add(k).scale(b / 2), e.push(m.x, m.y, m.z), f.push(i.x, i.y, i.z), g.push(0, 0), m = i.add(j).subtract(k).scale(b / 2), e.push(m.x, m.y, m.z), f.push(i.x, i.y, i.z), g.push(1, 0)
            }
            var n = new a.VertexData;
            return n.indices = d, n.positions = e, n.normals = f, n.uvs = g, n
        }, b.CreateSphere = function(b, c) {
            b = b || 32, c = c || 1;
            for (var d = c / 2, e = 2 + b, f = 2 * e, g = [], h = [], i = [], j = [], k = 0; e >= k; k++) {
                for (var l = k / e, m = l * Math.PI, n = 0; f >= n; n++) {
                    var o = n / f,
                        p = o * Math.PI * 2,
                        q = a.Matrix.RotationZ(-m),
                        r = a.Matrix.RotationY(p),
                        s = a.Vector3.TransformCoordinates(a.Vector3.Up(), q),
                        t = a.Vector3.TransformCoordinates(s, r),
                        u = t.scale(d),
                        v = a.Vector3.Normalize(u);
                    h.push(u.x, u.y, u.z), i.push(v.x, v.y, v.z), j.push(l, o)
                }
                if (k > 0)
                    for (var w = h.length / 3, x = w - 2 * (f + 1); w > x + f + 2; x++) g.push(x), g.push(x + 1), g.push(x + f + 1), g.push(x + f + 1), g.push(x + 1), g.push(x + f + 2)
            }
            var y = new a.VertexData;
            return y.indices = g, y.positions = h, y.normals = i, y.uvs = j, y
        }, b.CreateCylinder = function(b, c, d, e, f) {
            void 0 === f && (f = 1);
            var g = c / 2,
                h = d / 2,
                i = [],
                j = [],
                k = [],
                l = [];
            b = b || 1, c = c || .5, d = d || 1, e = e || 16, f = f || 1, f = 1 > f ? 1 : f;
            for (var m = function(b) {
                    var c = 2 * b * Math.PI / e,
                        d = Math.cos(c),
                        f = Math.sin(c);
                    return new a.Vector3(d, 0, f)
                }, n = function(c) {
                    var d = c ? g : h;
                    if (0 != d) {
                        var f = j.length / 3,
                            k = new a.Vector3(0, b / 2, 0),
                            n = new a.Vector2(.5, .5);
                        for (c || (k.scaleInPlace(-1), n.x = -n.x), r = 0; e > r; r++) {
                            var o = m(r),
                                p = o.scale(d).add(k),
                                q = new a.Vector2(o.x * n.x + .5, o.z * n.y + .5);
                            j.push(p.x, p.y, p.z), l.push(q.x, q.y)
                        }
                        for (var r = 0; e - 2 > r; r++) c ? (i.push(f), i.push(f + (r + 1) % e), i.push(f + (r + 2) % e)) : (i.push(f), i.push(f + (r + 2) % e), i.push(f + (r + 1) % e))
                    }
                }, o = new a.Vector3(0, -1, 0).scale(b / 2), p = new a.Vector3(0, 1, 0).scale(b / f), q = e + 1, r = 0; e >= r; r++)
                for (var s, t = m(r), u = new a.Vector2(r / e, 0), v = h, w = 0; f >= w; w++) s = t.scale(v), s.addInPlace(o.add(p.scale(w))), u.y += 1 / f, v += (g - h) / f, j.push(s.x, s.y, s.z), l.push(u.x, u.y);
            f += 1;
            for (var w = 0; f - 1 > w; w++)
                for (var r = 0; e >= r; r++) i.push(r * f + w), i.push((r * f + (w + f)) % (q * f)), i.push(r * f + (w + 1)), i.push(r * f + (w + 1)), i.push((r * f + (w + f)) % (q * f)), i.push((r * f + (w + f + 1)) % (q * f));
            n(!0), n(!1), a.VertexData.ComputeNormals(j, i, k);
            var x = new a.VertexData;
            return x.indices = i, x.positions = j, x.normals = k, x.uvs = l, x
        }, b.CreateTorus = function(b, c, d) {
            var e = [],
                f = [],
                g = [],
                h = [];
            b = b || 1, c = c || .5, d = d || 16;
            for (var i = d + 1, j = 0; d >= j; j++)
                for (var k = j / d, l = j * Math.PI * 2 / d - Math.PI / 2, m = a.Matrix.Translation(b / 2, 0, 0).multiply(a.Matrix.RotationY(l)), n = 0; d >= n; n++) {
                    var o = 1 - n / d,
                        p = n * Math.PI * 2 / d + Math.PI,
                        q = Math.cos(p),
                        r = Math.sin(p),
                        s = new a.Vector3(q, r, 0),
                        t = s.scale(c / 2),
                        u = new a.Vector2(k, o);
                    t = a.Vector3.TransformCoordinates(t, m), s = a.Vector3.TransformNormal(s, m), f.push(t.x, t.y, t.z), g.push(s.x, s.y, s.z), h.push(u.x, u.y);
                    var v = (j + 1) % i,
                        w = (n + 1) % i;
                    e.push(j * i + n), e.push(j * i + w), e.push(v * i + n), e.push(j * i + w), e.push(v * i + w), e.push(v * i + n)
                }
            var x = new a.VertexData;
            return x.indices = e, x.positions = f, x.normals = g, x.uvs = h, x
        }, b.CreateLines = function(b) {
            for (var c = [], d = [], e = 0; e < b.length; e++) d.push(b[e].x, b[e].y, b[e].z), e > 0 && (c.push(e - 1), c.push(e));
            var f = new a.VertexData;
            return f.indices = c, f.positions = d, f
        }, b.CreateGround = function(b, c, d) {
            var e, f, g = [],
                h = [],
                i = [],
                j = [];
            for (b = b || 1, c = c || 1, d = d || 1, e = 0; d >= e; e++)
                for (f = 0; d >= f; f++) {
                    var k = new a.Vector3(f * b / d - b / 2, 0, (d - e) * c / d - c / 2),
                        l = new a.Vector3(0, 1, 0);
                    h.push(k.x, k.y, k.z), i.push(l.x, l.y, l.z), j.push(f / d, 1 - e / d)
                }
            for (e = 0; d > e; e++)
                for (f = 0; d > f; f++) g.push(f + 1 + (e + 1) * (d + 1)), g.push(f + 1 + e * (d + 1)), g.push(f + e * (d + 1)), g.push(f + (e + 1) * (d + 1)), g.push(f + 1 + (e + 1) * (d + 1)), g.push(f + e * (d + 1));
            var m = new a.VertexData;
            return m.indices = g, m.positions = h, m.normals = i, m.uvs = j, m
        }, b.CreateTiledGround = function(b, c, d, e, f, g) {
            function h(b, c, d, e) {
                var f = n.length / 3,
                    h = g.w + 1;
                for (i = 0; i < g.h; i++)
                    for (j = 0; j < g.w; j++) {
                        var k = [f + j + i * h, f + (j + 1) + i * h, f + (j + 1) + (i + 1) * h, f + j + (i + 1) * h];
                        m.push(k[1]), m.push(k[2]), m.push(k[3]), m.push(k[0]), m.push(k[1]), m.push(k[3])
                    }
                var l = a.Vector3.Zero(),
                    q = new a.Vector3(0, 1, 0);
                for (i = 0; i <= g.h; i++)
                    for (l.z = i * (e - c) / g.h + c, j = 0; j <= g.w; j++) l.x = j * (d - b) / g.w + b, l.y = 0, n.push(l.x, l.y, l.z), o.push(q.x, q.y, q.z), p.push(j / g.w, i / g.h)
            }
            void 0 === f && (f = {
                w: 1,
                h: 1
            }), void 0 === g && (g = {
                w: 1,
                h: 1
            });
            var i, j, k, l, m = [],
                n = [],
                o = [],
                p = [];
            f.h = f.w < 1 ? 1 : f.h, f.w = f.w < 1 ? 1 : f.w, g.w = g.w < 1 ? 1 : g.w, g.h = g.h < 1 ? 1 : g.h;
            var q = {
                w: (d - b) / f.w,
                h: (e - c) / f.h
            };
            for (k = 0; k < f.h; k++)
                for (l = 0; l < f.w; l++) h(b + l * q.w, c + k * q.h, b + (l + 1) * q.w, c + (k + 1) * q.h);
            var r = new a.VertexData;
            return r.indices = m, r.positions = n, r.normals = o, r.uvs = p, r
        }, b.CreateGroundFromHeightMap = function(b, c, d, e, f, g, h, i) {
            var j, k, l = [],
                m = [],
                n = [],
                o = [];
            for (j = 0; d >= j; j++)
                for (k = 0; d >= k; k++) {
                    var p = new a.Vector3(k * b / d - b / 2, 0, (d - j) * c / d - c / 2),
                        q = (p.x + b / 2) / b * (h - 1) | 0,
                        r = (1 - (p.z + c / 2) / c) * (i - 1) | 0,
                        s = 4 * (q + r * h),
                        t = g[s] / 255,
                        u = g[s + 1] / 255,
                        v = g[s + 2] / 255,
                        w = .3 * t + .59 * u + .11 * v;
                    p.y = e + (f - e) * w, m.push(p.x, p.y, p.z), n.push(0, 0, 0), o.push(k / d, 1 - j / d)
                }
            for (j = 0; d > j; j++)
                for (k = 0; d > k; k++) l.push(k + 1 + (j + 1) * (d + 1)), l.push(k + 1 + j * (d + 1)), l.push(k + j * (d + 1)), l.push(k + (j + 1) * (d + 1)), l.push(k + 1 + (j + 1) * (d + 1)), l.push(k + j * (d + 1));
            a.VertexData.ComputeNormals(m, l, n);
            var x = new a.VertexData;
            return x.indices = l, x.positions = m, x.normals = n, x.uvs = o, x
        }, b.CreatePlane = function(b) {
            var c = [],
                d = [],
                e = [],
                f = [];
            b = b || 1;
            var g = b / 2;
            d.push(-g, -g, 0), e.push(0, 0, -1), f.push(0, 0), d.push(g, -g, 0), e.push(0, 0, -1), f.push(1, 0), d.push(g, g, 0), e.push(0, 0, -1), f.push(1, 1), d.push(-g, g, 0), e.push(0, 0, -1), f.push(0, 1), c.push(0), c.push(1), c.push(2), c.push(0), c.push(2), c.push(3);
            var h = new a.VertexData;
            return h.indices = c, h.positions = d, h.normals = e, h.uvs = f, h
        }, b.CreateTorusKnot = function(b, c, d, e, f, g) {
            var h = [],
                i = [],
                j = [],
                k = [];
            b = b || 2, c = c || .5, d = d || 32, e = e || 32, f = f || 2, g = g || 3;
            for (var l = function(c) {
                    var d = Math.cos(c),
                        e = Math.sin(c),
                        h = g / f * c,
                        i = Math.cos(h),
                        j = b * (2 + i) * .5 * d,
                        k = b * (2 + i) * e * .5,
                        l = b * Math.sin(h) * .5;
                    return new a.Vector3(j, k, l)
                }, m = 0; d >= m; m++) {
                var n = m % d,
                    o = n / d * 2 * f * Math.PI,
                    p = l(o),
                    q = l(o + .01),
                    r = q.subtract(p),
                    s = q.add(p),
                    t = a.Vector3.Cross(r, s);
                s = a.Vector3.Cross(t, r), t.normalize(), s.normalize();
                for (var u = 0; e > u; u++) {
                    var v = u % e,
                        w = v / e * 2 * Math.PI,
                        x = -c * Math.cos(w),
                        y = c * Math.sin(w);
                    i.push(p.x + x * s.x + y * t.x), i.push(p.y + x * s.y + y * t.y), i.push(p.z + x * s.z + y * t.z), k.push(m / d), k.push(u / e)
                }
            }
            for (m = 0; d > m; m++)
                for (u = 0; e > u; u++) {
                    var z = (u + 1) % e,
                        A = m * e + u,
                        B = (m + 1) * e + u,
                        C = (m + 1) * e + z,
                        D = m * e + z;
                    h.push(D), h.push(B), h.push(A), h.push(D), h.push(C), h.push(B)
                }
            a.VertexData.ComputeNormals(i, h, j);
            var E = new a.VertexData;
            return E.indices = h, E.positions = i, E.normals = j, E.uvs = k, E
        }, b.ComputeNormals = function(b, c, d) {
            var e, f = [],
                g = [];
            for (e = 0; e < b.length; e += 3) {
                var h = new a.Vector3(b[e], b[e + 1], b[e + 2]);
                f.push(h), g.push([])
            }
            var i = [];
            for (e = 0; e < c.length / 3; e++) {
                var j = c[3 * e],
                    k = c[3 * e + 1],
                    l = c[3 * e + 2],
                    m = f[j],
                    n = f[k],
                    o = f[l],
                    p = m.subtract(n),
                    q = o.subtract(n);
                i[e] = a.Vector3.Normalize(a.Vector3.Cross(p, q)), g[j].push(e), g[k].push(e), g[l].push(e)
            }
            for (e = 0; e < f.length; e++) {
                for (var r = g[e], s = a.Vector3.Zero(), t = 0; t < r.length; t++) s.addInPlace(i[r[t]]);
                s = a.Vector3.Normalize(s.scale(1 / r.length)), d[3 * e] = s.x, d[3 * e + 1] = s.y, d[3 * e + 2] = s.z
            }
        }, b
    }();
    a.VertexData = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b, c) {
            b._leftCamera.isIntermediate = !0, b.subCameras.push(b._leftCamera), b.subCameras.push(b._rightCamera), b._leftTexture = new a.PassPostProcess(c + "_leftTexture", 1, b._leftCamera), b._anaglyphPostProcess = new a.AnaglyphPostProcess(c + "_anaglyph", 1, b._rightCamera), b._anaglyphPostProcess.onApply = function(a) {
                a.setTextureFromPostProcess("leftSampler", b._leftTexture)
            }, b._update()
        },
        c = function(c) {
            function d(d, e, f, g, h, i, j) {
                c.call(this, d, e, f, g, h, j), this._eyeSpace = a.Tools.ToRadians(i), this._leftCamera = new a.ArcRotateCamera(d + "_left", e - this._eyeSpace, f, g, h, j), this._rightCamera = new a.ArcRotateCamera(d + "_right", e + this._eyeSpace, f, g, h, j), b(this, d)
            }
            return __extends(d, c), d.prototype._update = function() {
                this._updateCamera(this._leftCamera), this._updateCamera(this._rightCamera), this._leftCamera.alpha = this.alpha - this._eyeSpace, this._rightCamera.alpha = this.alpha + this._eyeSpace, c.prototype._update.call(this)
            }, d.prototype._updateCamera = function(a) {
                a.beta = this.beta, a.radius = this.radius, a.minZ = this.minZ, a.maxZ = this.maxZ, a.fov = this.fov, a.target = this.target
            }, d
        }(a.ArcRotateCamera);
    a.AnaglyphArcRotateCamera = c;
    var d = function(c) {
        function d(d, e, f, g) {
            c.call(this, d, e, g), this._eyeSpace = a.Tools.ToRadians(f), this._transformMatrix = new a.Matrix, this._leftCamera = new a.FreeCamera(d + "_left", e.clone(), g), this._rightCamera = new a.FreeCamera(d + "_right", e.clone(), g), b(this, d)
        }
        return __extends(d, c), d.prototype._getSubCameraPosition = function(b, c) {
            var d = this.getTarget();
            a.Matrix.Translation(-d.x, -d.y, -d.z).multiplyToRef(a.Matrix.RotationY(b), this._transformMatrix), this._transformMatrix = this._transformMatrix.multiply(a.Matrix.Translation(d.x, d.y, d.z)), a.Vector3.TransformCoordinatesToRef(this.position, this._transformMatrix, c)
        }, d.prototype._update = function() {
            this._getSubCameraPosition(-this._eyeSpace, this._leftCamera.position), this._getSubCameraPosition(this._eyeSpace, this._rightCamera.position), this._updateCamera(this._leftCamera), this._updateCamera(this._rightCamera), c.prototype._update.call(this)
        }, d.prototype._updateCamera = function(a) {
            a.minZ = this.minZ, a.maxZ = this.maxZ, a.fov = this.fov, a.viewport = this.viewport, a.setTarget(this.getTarget())
        }, d
    }(a.FreeCamera);
    a.AnaglyphFreeCamera = d
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g) {
            a.call(this, b, "anaglyph", null, ["leftSampler"], c, d, e, f, g)
        }
        return __extends(b, a), b
    }(a.PostProcess);
    a.AnaglyphPostProcess = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b() {}
        return b.EnableFor = function(a) {
            a._tags = a._tags || {}, a.hasTags = function() {
                return b.HasTags(a)
            }, a.addTags = function(c) {
                return b.AddTagsTo(a, c)
            }, a.removeTags = function(c) {
                return b.RemoveTagsFrom(a, c)
            }, a.matchesTagsQuery = function(c) {
                return b.MatchesQuery(a, c)
            }
        }, b.DisableFor = function(a) {
            delete a._tags, delete a.hasTags, delete a.addTags, delete a.removeTags, delete a.matchesTagsQuery
        }, b.HasTags = function(b) {
            return b._tags ? !a.Tools.IsEmpty(b._tags) : !1
        }, b.GetTags = function(a) {
            return a._tags ? a._tags : null
        }, b.AddTagsTo = function(a, c) {
            if (c) {
                var d = c.split(" ");
                for (var e in d) b._AddTagTo(a, d[e])
            }
        }, b._AddTagTo = function(a, c) {
            c = c.trim(), "" !== c && "true" !== c && "false" !== c && (c.match(/[\s]/) || c.match(/^([!]|([|]|[&]){2})/) || (b.EnableFor(a), a._tags[c] = !0))
        }, b.RemoveTagsFrom = function(a, c) {
            if (b.HasTags(a)) {
                var d = c.split(" ");
                for (var e in d) b._RemoveTagFrom(a, d[e])
            }
        }, b._RemoveTagFrom = function(a, b) {
            delete a._tags[b]
        }, b.MatchesQuery = function(c, d) {
            return void 0 === d ? !0 : "" === d ? b.HasTags(c) : a.Internals.AndOrNotEvaluator.Eval(d, function(a) {
                return b.HasTags(c) && c._tags[a]
            })
        }, b
    }();
    a.Tags = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {}
            return a.Eval = function(b, c) {
                return b = b.match(/\([^\(\)]*\)/g) ? b.replace(/\([^\(\)]*\)/g, function(b) {
                    return b = b.slice(1, b.length - 1), a._HandleParenthesisContent(b, c)
                }) : a._HandleParenthesisContent(b, c), "true" === b ? !0 : "false" === b ? !1 : a.Eval(b, c)
            }, a._HandleParenthesisContent = function(b, c) {
                c = c || function(a) {
                    return "true" === a ? !0 : !1
                };
                var d, e = b.split("||");
                for (var f in e) {
                    var g = a._SimplifyNegation(e[f].trim()),
                        h = g.split("&&");
                    if (h.length > 1)
                        for (var i = 0; i < h.length; ++i) {
                            var j = a._SimplifyNegation(h[i].trim());
                            if (d = "true" !== j && "false" !== j ? "!" === j[0] ? !c(j.substring(1)) : c(j) : "true" === j ? !0 : !1, !d) {
                                g = "false";
                                break
                            }
                        }
                    if (d || "true" === g) {
                        d = !0;
                        break
                    }
                    d = "true" !== g && "false" !== g ? "!" === g[0] ? !c(g.substring(1)) : c(g) : "true" === g ? !0 : !1
                }
                return d ? "true" : "false"
            }, a._SimplifyNegation = function(a) {
                return a = a.replace(/^[\s!]+/, function(a) {
                    return a = a.replace(/[\s]/g, function() {
                        return ""
                    }), a.length % 2 ? "!" : ""
                }), a = a.trim(), "!true" === a ? a = "false" : "!false" === a && (a = "true"), a
            }, a
        }();
        a.AndOrNotEvaluator = b
    }(b = a.Internals || (a.Internals = {}))
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d, e, f, g) {
            this._enabled = !0, this._refCount = 0, this._name = c, this._renderTexture = new a.RenderTargetTexture(c, d, b), this.setRenderList(e), this._renderTexture.onBeforeRender = f, this._renderTexture.onAfterRender = g, this._scene = b, this._renderList = e
        }
        return b.prototype._incRefCount = function() {
            return 0 === this._refCount && this._scene.customRenderTargets.push(this._renderTexture), ++this._refCount
        }, b.prototype._decRefCount = function() {
            return this._refCount--, this._refCount <= 0 && this._scene.customRenderTargets.splice(this._scene.customRenderTargets.indexOf(this._renderTexture), 1), this._refCount
        }, b.prototype._update = function() {
            this.setRenderList(this._renderList)
        }, b.prototype.setRenderList = function(a) {
            this._renderTexture.renderList = a
        }, b.prototype.getRenderTexture = function() {
            return this._renderTexture
        }, b
    }();
    a.PostProcessRenderPass = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b, c, d) {
            this._engine = a, this._name = b, this._singleInstance = d || !0, this._getPostProcess = c, this._cameras = [], this._indicesForCamera = [], this._postProcesses = {}, this._renderPasses = {}, this._renderEffectAsPasses = {}
        }
        return b.prototype._update = function() {
            for (var a in this._renderPasses) this._renderPasses[a]._update()
        }, b.prototype.addPass = function(a) {
            this._renderPasses[a._name] = a, this._linkParameters()
        }, b.prototype.removePass = function(a) {
            delete this._renderPasses[a._name], this._linkParameters()
        }, b.prototype.addRenderEffectAsPass = function(a) {
            this._renderEffectAsPasses[a._name] = a, this._linkParameters()
        }, b.prototype.getPass = function(a) {
            for (var b in this._renderPasses)
                if (b === a) return this._renderPasses[a]
        }, b.prototype.emptyPasses = function() {
            this._renderPasses = {}, this._linkParameters()
        }, b.prototype._attachCameras = function(b) {
            for (var c, d = a.Tools.MakeArray(b || this._cameras), e = 0; e < d.length; e++) {
                var f = d[e],
                    g = f.name;
                c = this._singleInstance ? 0 : g, this._postProcesses[c] = this._postProcesses[c] || this._getPostProcess();
                var h = f.attachPostProcess(this._postProcesses[c]);
                this._indicesForCamera[g] || (this._indicesForCamera[g] = []), this._indicesForCamera[g].push(h), -1 === this._cameras.indexOf(f) && (this._cameras[g] = f);
                for (var i in this._renderPasses) this._renderPasses[i]._incRefCount()
            }
            this._linkParameters()
        }, b.prototype._detachCameras = function(b) {
            for (var c = a.Tools.MakeArray(b || this._cameras), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = e.name;
                e.detachPostProcess(this._postProcesses[this._singleInstance ? 0 : f], this._indicesForCamera[f]);
                var g = this._cameras.indexOf(f);
                this._indicesForCamera.splice(g, 1), this._cameras.splice(g, 1);
                for (var h in this._renderPasses) this._renderPasses[h]._decRefCount()
            }
        }, b.prototype._enable = function(b) {
            for (var c = a.Tools.MakeArray(b || this._cameras), d = 0; d < c.length; d++) {
                for (var e = c[d], f = e.name, g = 0; g < this._indicesForCamera[f].length; g++) void 0 === e._postProcesses[this._indicesForCamera[f][g]] && b[d].attachPostProcess(this._postProcesses[this._singleInstance ? 0 : f], this._indicesForCamera[f][g]);
                for (var h in this._renderPasses) this._renderPasses[h]._incRefCount()
            }
        }, b.prototype._disable = function(b) {
            for (var c = a.Tools.MakeArray(b || this._cameras), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = e.Name;
                e.detachPostProcess(this._postProcesses[this._singleInstance ? 0 : f], this._indicesForCamera[f]);
                for (var g in this._renderPasses) this._renderPasses[g]._decRefCount()
            }
        }, b.prototype.getPostProcess = function(a) {
            return this._singleInstance ? this._postProcesses[0] : this._postProcesses[a.name]
        }, b.prototype._linkParameters = function() {
            var a = this;
            for (var b in this._postProcesses) this.applyParameters && this.applyParameters(this._postProcesses[b]), this._postProcesses[b].onBeforeRender = function(b) {
                a._linkTextures(b)
            }
        }, b.prototype._linkTextures = function(a) {
            for (var b in this._renderPasses) a.setTexture(b, this._renderPasses[b].getRenderTexture());
            for (var c in this._renderEffectAsPasses) a.setTextureFromPostProcess(c + "Sampler", this._renderEffectAsPasses[c].getPostProcess())
        }, b
    }();
    a.PostProcessRenderEffect = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b) {
            this._engine = a, this._name = b, this._renderEffects = {}, this._renderEffectsForIsolatedPass = {}, this._cameras = []
        }
        return b.prototype.addEffect = function(a) {
            this._renderEffects[a._name] = a
        }, b.prototype._enableEffect = function(b, c) {
            var d = this._renderEffects[b];
            d && d._enable(a.Tools.MakeArray(c || this._cameras))
        }, b.prototype._disableEffect = function(b, c) {
            var d = this._renderEffects[b];
            d && d._disable(a.Tools.MakeArray(c || this._cameras))
        }, b.prototype._attachCameras = function(b, c) {
            for (var d = a.Tools.MakeArray(b || this._cameras), e = [], f = 0; f < d.length; f++) {
                var g = d[f],
                    h = g.name; - 1 === this._cameras.indexOf(g) ? this._cameras[h] = g : c && e.push(f)
            }
            for (var f = 0; f < e.length; f++) b.splice(e[f], 1);
            for (var i in this._renderEffects) this._renderEffects[i]._attachCameras(d)
        }, b.prototype._detachCameras = function(b) {
            var c = a.Tools.MakeArray(b || this._cameras);
            for (var d in this._renderEffects) this._renderEffects[d]._detachCameras(c);
            for (var e = 0; e < c.length; e++) this._cameras.splice(this._cameras.indexOf(c[e]), 1)
        }, b.prototype._enableDisplayOnlyPass = function(c, d) {
            var e = this,
                f = a.Tools.MakeArray(d || this._cameras),
                g = null;
            for (var h in this._renderEffects)
                if (g = this._renderEffects[h].getPass(c), null != g) break;
            if (null !== g) {
                for (var h in this._renderEffects) this._renderEffects[h]._disable(f);
                g._name = b.PASS_SAMPLER_NAME;
                for (var i = 0; i < f.length; i++) {
                    var j = f[i],
                        k = j.name;
                    this._renderEffectsForIsolatedPass[k] = this._renderEffectsForIsolatedPass[k] || new a.PostProcessRenderEffect(this._engine, b.PASS_EFFECT_NAME, function() {
                        return new a.DisplayPassPostProcess(b.PASS_EFFECT_NAME, 1, null, null, e._engine, !0)
                    }), this._renderEffectsForIsolatedPass[k].emptyPasses(), this._renderEffectsForIsolatedPass[k].addPass(g), this._renderEffectsForIsolatedPass[k]._attachCameras(j)
                }
            }
        }, b.prototype._disableDisplayOnlyPass = function(c) {
            for (var d = this, e = a.Tools.MakeArray(c || this._cameras), f = 0; f < e.length; f++) {
                var g = e[f],
                    h = g.name;
                this._renderEffectsForIsolatedPass[h] = this._renderEffectsForIsolatedPass[h] || new a.PostProcessRenderEffect(this._engine, b.PASS_EFFECT_NAME, function() {
                    return new a.DisplayPassPostProcess(b.PASS_EFFECT_NAME, 1, null, null, d._engine, !0)
                }), this._renderEffectsForIsolatedPass[h]._disable(g)
            }
            for (var i in this._renderEffects) this._renderEffects[i]._enable(e)
        }, b.prototype._update = function() {
            for (var a in this._renderEffects) this._renderEffects[a]._update();
            for (var b = 0; b < this._cameras.length; b++) {
                var c = this._cameras[b].name;
                this._renderEffectsForIsolatedPass[c] && this._renderEffectsForIsolatedPass[c]._update()
            }
        }, b.PASS_EFFECT_NAME = "passEffect", b.PASS_SAMPLER_NAME = "passSampler", b
    }();
    a.PostProcessRenderPipeline = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a() {
            this._renderPipelines = {}
        }
        return a.prototype.addPipeline = function(a) {
            this._renderPipelines[a._name] = a
        }, a.prototype.attachCamerasToRenderPipeline = function(a, b, c) {
            var d = this._renderPipelines[a];
            d && d._attachCameras(b, c)
        }, a.prototype.detachCamerasFromRenderPipeline = function(a, b) {
            var c = this._renderPipelines[a];
            c && c._detachCameras(b)
        }, a.prototype.enableEffectInPipeline = function(a, b, c) {
            var d = this._renderPipelines[a];
            d && d._enableEffect(b, c)
        }, a.prototype.disableEffectInPipeline = function(a, b, c) {
            var d = this._renderPipelines[a];
            d && d._disableEffect(b, c)
        }, a.prototype.enableDisplayOnlyPassInPipeline = function(a, b, c) {
            var d = this._renderPipelines[a];
            d && d._enableDisplayOnlyPass(b, c)
        }, a.prototype.disableDisplayOnlyPassInPipeline = function(a, b) {
            var c = this._renderPipelines[a];
            c && c._disableDisplayOnlyPass(b)
        }, a.prototype.update = function() {
            for (var a in this._renderPipelines) this._renderPipelines[a]._update()
        }, a
    }();
    a.PostProcessRenderPipelineManager = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e, f, g) {
            a.call(this, b, "displayPass", ["passSampler"], ["passSampler"], c, d, e, f, g)
        }
        return __extends(b, a), b
    }(a.PostProcess);
    a.DisplayPassPostProcess = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b) {
            this.frontColor = new a.Color3(1, 1, 1), this.backColor = new a.Color3(.1, .1, .1), this.showBackLines = !0, this.renderList = new a.SmartArray(32), this._scene = b, this._colorShader = new a.ShaderMaterial("colorShader", b, "color", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "color"]
            });
            var c = this._scene.getEngine(),
                d = a.VertexData.CreateBox(1);
            this._vb = new a.VertexBuffer(c, d.positions, a.VertexBuffer.PositionKind, !1), this._ib = c.createIndexBuffer([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 7, 1, 6, 2, 5, 3, 4])
        }
        return b.prototype.reset = function() {
            this.renderList.reset()
        }, b.prototype.render = function() {
            if (0 !== this.renderList.length && this._colorShader.isReady()) {
                var b = this._scene.getEngine();
                b.setDepthWrite(!1), this._colorShader._preBind();
                for (var c = 0; c < this.renderList.length; c++) {
                    var d = this.renderList.data[c],
                        e = d.minimum,
                        f = d.maximum,
                        g = f.subtract(e),
                        h = e.add(g.scale(.5)),
                        i = a.Matrix.Scaling(g.x, g.y, g.z).multiply(a.Matrix.Translation(h.x, h.y, h.z)).multiply(d.getWorldMatrix());
                    b.bindBuffers(this._vb.getBuffer(), this._ib, [3], 12, this._colorShader.getEffect()), this.showBackLines && (b.setDepthFunctionToGreaterOrEqual(), this._scene.resetCachedMaterial(), this._colorShader.setColor4("color", this.backColor.toColor4()), this._colorShader.bind(i), b.draw(!1, 0, 24)), b.setDepthFunctionToLess(), this._scene.resetCachedMaterial(), this._colorShader.setColor4("color", this.frontColor.toColor4()), this._colorShader.bind(i), b.draw(!1, 0, 24)
                }
                this._colorShader.unbind(), b.setDepthFunctionToLessOrEqual(), b.setDepthWrite(!0)
            }
        }, b.prototype.dispose = function() {
            this._colorShader.dispose(), this._vb.dispose(), this._scene.getEngine()._releaseBuffer(this._ib)
        }, b
    }();
    a.BoundingBoxRenderer = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {}
            return b.GetTGAHeader = function(a) {
                var b = 0,
                    c = {
                        id_length: a[b++],
                        colormap_type: a[b++],
                        image_type: a[b++],
                        colormap_index: a[b++] | a[b++] << 8,
                        colormap_length: a[b++] | a[b++] << 8,
                        colormap_size: a[b++],
                        origin: [a[b++] | a[b++] << 8, a[b++] | a[b++] << 8],
                        width: a[b++] | a[b++] << 8,
                        height: a[b++] | a[b++] << 8,
                        pixel_size: a[b++],
                        flags: a[b++]
                    };
                return c
            }, b.UploadContent = function(c, d) {
                if (d.length < 19) return void a.Tools.Error("Unable to load TGA file - Not enough data to contain header");
                var e = 18,
                    f = b.GetTGAHeader(d);
                if (f.id_length + e > d.length) return void a.Tools.Error("Unable to load TGA file - Not enough data");
                e += f.id_length;
                var g = !1,
                    h = !1,
                    i = !1,
                    j = !1;
                switch (f.image_type) {
                    case b._TYPE_RLE_INDEXED:
                        g = !0;
                    case b._TYPE_INDEXED:
                        h = !0;
                        break;
                    case b._TYPE_RLE_RGB:
                        g = !0;
                    case b._TYPE_RGB:
                        i = !0;
                        break;
                    case b._TYPE_RLE_GREY:
                        g = !0;
                    case b._TYPE_GREY:
                        j = !0
                }
                var k, l, m = (15 & f.flags, f.pixel_size >> 3),
                    n = f.width * f.height * m;
                if (h && (l = d.subarray(e, e += f.colormap_length * (f.colormap_size >> 3))), g) {
                    k = new Uint8Array(n);
                    for (var o, p, q, r = 0, s = new Uint8Array(m); n > e && n > r;)
                        if (o = d[e++], p = (127 & o) + 1, 128 & o) {
                            for (q = 0; m > q; ++q) s[q] = d[e++];
                            for (q = 0; p > q; ++q) k.set(s, r + q * m);
                            r += m * p
                        } else {
                            for (p *= m, q = 0; p > q; ++q) k[r + q] = d[e++];
                            r += p
                        }
                } else k = d.subarray(e, e += h ? f.width * f.height : n);
                var t, u, v, w, x, y;
                switch ((f.flags & b._ORIGIN_MASK) >> b._ORIGIN_SHIFT) {
                    default:
                        case b._ORIGIN_UL:
                        t = 0,
                    v = 1,
                    y = f.width,
                    u = 0,
                    w = 1,
                    x = f.height;
                    break;
                    case b._ORIGIN_BL:
                            t = 0,
                        v = 1,
                        y = f.width,
                        u = f.height - 1,
                        w = -1,
                        x = -1;
                        break;
                    case b._ORIGIN_UR:
                            t = f.width - 1,
                        v = -1,
                        y = -1,
                        u = 0,
                        w = 1,
                        x = f.height;
                        break;
                    case b._ORIGIN_BR:
                            t = f.width - 1,
                        v = -1,
                        y = -1,
                        u = f.height - 1,
                        w = -1,
                        x = -1
                }
                var z = "_getImageData" + (j ? "Grey" : "") + f.pixel_size + "bits",
                    A = b[z](f, l, k, u, w, x, t, v, y);
                c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, f.width, f.height, 0, c.RGBA, c.UNSIGNED_BYTE, A)
            }, b._getImageData8bits = function(a, b, c, d, e, f, g, h, i) {
                var j, k, l, m = c,
                    n = b,
                    o = a.width,
                    p = a.height,
                    q = 0,
                    r = new Uint8Array(o * p * 4);
                for (l = d; l !== f; l += e)
                    for (k = g; k !== i; k += h, q++) j = m[q], r[4 * (k + o * l) + 3] = 255, r[4 * (k + o * l) + 2] = n[3 * j + 0], r[4 * (k + o * l) + 1] = n[3 * j + 1], r[4 * (k + o * l) + 0] = n[3 * j + 2];
                return r
            }, b._getImageData16bits = function(a, b, c, d, e, f, g, h, i) {
                var j, k, l, m = c,
                    n = a.width,
                    o = a.height,
                    p = 0,
                    q = new Uint8Array(n * o * 4);
                for (l = d; l !== f; l += e)
                    for (k = g; k !== i; k += h, p += 2) j = m[p + 0] + (m[p + 1] << 8), q[4 * (k + n * l) + 0] = (31744 & j) >> 7, q[4 * (k + n * l) + 1] = (992 & j) >> 2, q[4 * (k + n * l) + 2] = (31 & j) >> 3, q[4 * (k + n * l) + 3] = 32768 & j ? 0 : 255;
                return q
            }, b._getImageData24bits = function(a, b, c, d, e, f, g, h, i) {
                var j, k, l = c,
                    m = a.width,
                    n = a.height,
                    o = 0,
                    p = new Uint8Array(m * n * 4);
                for (k = d; k !== f; k += e)
                    for (j = g; j !== i; j += h, o += 3) p[4 * (j + m * k) + 3] = 255, p[4 * (j + m * k) + 2] = l[o + 0], p[4 * (j + m * k) + 1] = l[o + 1], p[4 * (j + m * k) + 0] = l[o + 2];
                return p
            }, b._getImageData32bits = function(a, b, c, d, e, f, g, h, i) {
                var j, k, l = c,
                    m = a.width,
                    n = a.height,
                    o = 0,
                    p = new Uint8Array(m * n * 4);
                for (k = d; k !== f; k += e)
                    for (j = g; j !== i; j += h, o += 4) p[4 * (j + m * k) + 2] = l[o + 0], p[4 * (j + m * k) + 1] = l[o + 1], p[4 * (j + m * k) + 0] = l[o + 2], p[4 * (j + m * k) + 3] = l[o + 3];
                return p
            }, b._getImageDataGrey8bits = function(a, b, c, d, e, f, g, h, i) {
                var j, k, l, m = c,
                    n = a.width,
                    o = a.height,
                    p = 0,
                    q = new Uint8Array(n * o * 4);
                for (l = d; l !== f; l += e)
                    for (k = g; k !== i; k += h, p++) j = m[p], q[4 * (k + n * l) + 0] = j, q[4 * (k + n * l) + 1] = j, q[4 * (k + n * l) + 2] = j, q[4 * (k + n * l) + 3] = 255;
                return q
            }, b._getImageDataGrey16bits = function(a, b, c, d, e, f, g, h, i) {
                var j, k, l = c,
                    m = a.width,
                    n = a.height,
                    o = 0,
                    p = new Uint8Array(m * n * 4);
                for (k = d; k !== f; k += e)
                    for (j = g; j !== i; j += h, o += 2) p[4 * (j + m * k) + 0] = l[o + 0], p[4 * (j + m * k) + 1] = l[o + 0], p[4 * (j + m * k) + 2] = l[o + 0], p[4 * (j + m * k) + 3] = l[o + 1];
                return p
            }, b._TYPE_NO_DATA = 0, b._TYPE_INDEXED = 1, b._TYPE_RGB = 2, b._TYPE_GREY = 3, b._TYPE_RLE_INDEXED = 9, b._TYPE_RLE_RGB = 10, b._TYPE_RLE_GREY = 11, b._ORIGIN_MASK = 48, b._ORIGIN_SHIFT = 4, b._ORIGIN_BL = 0, b._ORIGIN_BR = 1, b._ORIGIN_UL = 2, b._ORIGIN_UR = 3, b
        }();
        b.TGATools = c
    }(b = a.Internals || (a.Internals = {}))
}(BABYLON || (BABYLON = {})),
function(a) {
    var b;
    ! function(b) {
        function c(a) {
            return a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24)
        }

        function d(a) {
            return String.fromCharCode(255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255)
        }
        var e = 542327876,
            f = 131072,
            g = 512,
            h = 4,
            i = 64,
            j = 131072,
            k = c("DXT1"),
            l = c("DXT3"),
            m = c("DXT5"),
            n = 31,
            o = 0,
            p = 1,
            q = 2,
            r = 3,
            s = 4,
            t = 7,
            u = 20,
            v = 21,
            w = 22,
            x = 28,
            y = function() {
                function b() {}
                return b.GetDDSInfo = function(a) {
                    var b = new Int32Array(a, 0, n),
                        c = 1;
                    return b[q] & f && (c = Math.max(1, b[t])), {
                        width: b[s],
                        height: b[r],
                        mipmapCount: c,
                        isFourCC: (b[u] & h) === h,
                        isRGB: (b[u] & i) === i,
                        isLuminance: (b[u] & j) === j,
                        isCube: (b[x] & g) === g
                    }
                }, b.GetRGBAArrayBuffer = function(a, b, c, d, e) {
                    for (var f = new Uint8Array(d), g = new Uint8Array(e), h = 0, i = b - 1; i >= 0; i--)
                        for (var j = 0; a > j; j++) {
                            var k = c + 4 * (j + i * a);
                            f[h + 2] = g[k], f[h + 1] = g[k + 1], f[h] = g[k + 2], f[h + 3] = g[k + 3], h += 4
                        }
                    return f
                }, b.GetRGBArrayBuffer = function(a, b, c, d, e) {
                    for (var f = new Uint8Array(d), g = new Uint8Array(e), h = 0, i = b - 1; i >= 0; i--)
                        for (var j = 0; a > j; j++) {
                            var k = c + 3 * (j + i * a);
                            f[h + 2] = g[k], f[h + 1] = g[k + 1], f[h] = g[k + 2], h += 3
                        }
                    return f
                }, b.GetLuminanceArrayBuffer = function(a, b, c, d, e) {
                    for (var f = new Uint8Array(d), g = new Uint8Array(e), h = 0, i = b - 1; i >= 0; i--)
                        for (var j = 0; a > j; j++) {
                            var k = c + (j + i * a);
                            f[h] = g[k], h++
                        }
                    return f
                }, b.UploadDDSLevels = function(c, g, h, i, j, u) {
                    var x, y, z, A, B, C, D, E, F, G, H = new Int32Array(h, 0, n);
                    if (H[o] != e) return void a.Tools.Error("Invalid magic number in DDS header");
                    if (!i.isFourCC && !i.isRGB && !i.isLuminance) return void a.Tools.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
                    if (i.isFourCC) switch (x = H[v]) {
                        case k:
                            y = 8, z = g.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            break;
                        case l:
                            y = 16, z = g.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            break;
                        case m:
                            y = 16, z = g.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                            break;
                        default:
                            return void console.error("Unsupported FourCC code:", d(x))
                    }
                    F = 1, H[q] & f && j !== !1 && (F = Math.max(1, H[t]));
                    for (var I = H[w], J = 0; u > J; J++) {
                        var K = 1 == u ? c.TEXTURE_2D : c.TEXTURE_CUBE_MAP_POSITIVE_X + J;
                        for (A = H[s], B = H[r], D = H[p] + 4, G = 0; F > G; ++G) {
                            if (i.isRGB) 24 == I ? (C = A * B * 3, E = b.GetRGBArrayBuffer(A, B, D, C, h), c.texImage2D(K, G, c.RGB, A, B, 0, c.RGB, c.UNSIGNED_BYTE, E)) : (C = A * B * 4, E = b.GetRGBAArrayBuffer(A, B, D, C, h), c.texImage2D(K, G, c.RGBA, A, B, 0, c.RGBA, c.UNSIGNED_BYTE, E));
                            else if (i.isLuminance) {
                                var L = c.getParameter(c.UNPACK_ALIGNMENT),
                                    M = A,
                                    N = Math.floor((A + L - 1) / L) * L;
                                C = N * (B - 1) + M, E = b.GetLuminanceArrayBuffer(A, B, D, C, h), c.texImage2D(K, G, c.LUMINANCE, A, B, 0, c.LUMINANCE, c.UNSIGNED_BYTE, E)
                            } else C = Math.max(4, A) / 4 * Math.max(4, B) / 4 * y, E = new Uint8Array(h, D, C), c.compressedTexImage2D(K, G, z, A, B, 0, E);
                            D += C, A *= .5, B *= .5, A = Math.max(1, A), B = Math.max(1, B)
                        }
                    }
                }, b
            }();
        b.DDSTools = y
    }(b = a.Internals || (a.Internals = {}))
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(b) {
            this.length = 0, this._duplicateId = 0, this.data = new Array(b), this._id = a._GlobalId++
        }
        return a.prototype.push = function(a) {
            this.data[this.length++] = a, this.length > this.data.length && (this.data.length *= 2), a.__smartArrayFlags || (a.__smartArrayFlags = {}), a.__smartArrayFlags[this._id] = this._duplicateId
        }, a.prototype.pushNoDuplicate = function(a) {
            a.__smartArrayFlags && a.__smartArrayFlags[this._id] === this._duplicateId || this.push(a)
        }, a.prototype.sort = function(a) {
            this.data.sort(a)
        }, a.prototype.reset = function() {
            this.length = 0, this._duplicateId++
        }, a.prototype.concat = function(a) {
            if (0 !== a.length) {
                this.length + a.length > this.data.length && (this.data.length = 2 * (this.length + a.length));
                for (var b = 0; b < a.length; b++) this.data[this.length++] = (a.data || a)[b]
            }
        }, a.prototype.concatWithNoDuplicate = function(a) {
            if (0 !== a.length) {
                this.length + a.length > this.data.length && (this.data.length = 2 * (this.length + a.length));
                for (var b = 0; b < a.length; b++) {
                    var c = (a.data || a)[b];
                    this.pushNoDuplicate(c)
                }
            }
        }, a.prototype.indexOf = function(a) {
            var b = this.data.indexOf(a);
            return b >= this.length ? -1 : b
        }, a._GlobalId = 0, a
    }();
    a.SmartArray = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b() {
            this._registeredMeshes = [], this._physicsMaterials = [], this.updateBodyPosition = function(a) {
                for (var b = 0; b < this._registeredMeshes.length; b++) {
                    var c = this._registeredMeshes[b];
                    if (c.mesh === a || c.mesh === a.parent) {
                        var d = c.body,
                            e = a.getBoundingInfo().boundingBox.center;
                        return d.position.set(e.x, e.z, e.y), d.quaternion.x = a.rotationQuaternion.x, d.quaternion.z = a.rotationQuaternion.y, d.quaternion.y = a.rotationQuaternion.z, void(d.quaternion.w = -a.rotationQuaternion.w)
                    }
                }
            }
        }
        return b.prototype.initialize = function(a) {
            void 0 === a && (a = 10), this._world = new CANNON.World, this._world.broadphase = new CANNON.NaiveBroadphase, this._world.solver.iterations = a
        }, b.prototype._checkWithEpsilon = function(b) {
            return b < a.PhysicsEngine.Epsilon ? a.PhysicsEngine.Epsilon : b
        }, b.prototype.runOneStep = function(b) {
            this._world.step(b);
            for (var c = 0; c < this._registeredMeshes.length; c++) {
                var d = this._registeredMeshes[c];
                if (!d.isChild) {
                    var e = d.body.position.x,
                        f = d.body.position.y,
                        g = d.body.position.z,
                        h = d.delta;
                    h ? (d.mesh.position.x = e + h.x, d.mesh.position.y = g + h.y, d.mesh.position.z = f + h.z) : (d.mesh.position.x = e, d.mesh.position.y = g, d.mesh.position.z = f), d.mesh.rotationQuaternion || (d.mesh.rotationQuaternion = new a.Quaternion(0, 0, 0, 1)), d.mesh.rotationQuaternion.x = d.body.quaternion.x, d.mesh.rotationQuaternion.y = d.body.quaternion.z, d.mesh.rotationQuaternion.z = d.body.quaternion.y, d.mesh.rotationQuaternion.w = -d.body.quaternion.w
                }
            }
        }, b.prototype.setGravity = function(a) {
            this._world.gravity.set(a.x, a.z, a.y)
        }, b.prototype.registerMesh = function(b, c, d) {
            switch (this.unregisterMesh(b), b.computeWorldMatrix(!0), c) {
                case a.PhysicsEngine.SphereImpostor:
                    var e = b.getBoundingInfo().boundingBox,
                        f = e.maximumWorld.x - e.minimumWorld.x,
                        g = e.maximumWorld.y - e.minimumWorld.y,
                        h = e.maximumWorld.z - e.minimumWorld.z;
                    return this._createSphere(Math.max(this._checkWithEpsilon(f), this._checkWithEpsilon(g), this._checkWithEpsilon(h)) / 2, b, d);
                case a.PhysicsEngine.BoxImpostor:
                    e = b.getBoundingInfo().boundingBox;
                    var i = e.minimumWorld,
                        j = e.maximumWorld,
                        k = j.subtract(i).scale(.5);
                    return this._createBox(this._checkWithEpsilon(k.x), this._checkWithEpsilon(k.y), this._checkWithEpsilon(k.z), b, d);
                case a.PhysicsEngine.PlaneImpostor:
                    return this._createPlane(b, d);
                case a.PhysicsEngine.MeshImpostor:
                    var l = b.getVerticesData(a.VertexBuffer.PositionKind),
                        m = b.getIndices();
                    return this._createConvexPolyhedron(l, m, b, d)
            }
            return null
        }, b.prototype._createSphere = function(a, b, c) {
            var d = new CANNON.Sphere(a);
            return c ? this._createRigidBodyFromShape(d, b, c.mass, c.friction, c.restitution) : d
        }, b.prototype._createBox = function(a, b, c, d, e) {
            var f = new CANNON.Box(new CANNON.Vec3(a, c, b));
            return e ? this._createRigidBodyFromShape(f, d, e.mass, e.friction, e.restitution) : f
        }, b.prototype._createPlane = function(a, b) {
            var c = new CANNON.Plane;
            return b ? this._createRigidBodyFromShape(c, a, b.mass, b.friction, b.restitution) : c
        }, b.prototype._createConvexPolyhedron = function(b, c, d, e) {
            var f = [],
                g = [];
            d.computeWorldMatrix(!0);
            for (var h = 0; h < b.length; h += 3) {
                var i = a.Vector3.Zero();
                a.Vector3.TransformNormalFromFloatsToRef(b[h], b[h + 1], b[h + 2], d.getWorldMatrix(), i), f.push(new CANNON.Vec3(i.x, i.z, i.y))
            }
            for (var j = 0; j < c.length; j += 3) g.push([c[j], c[j + 2], c[j + 1]]);
            var k = new CANNON.ConvexPolyhedron(f, g);
            return e ? this._createRigidBodyFromShape(k, d, e.mass, e.friction, e.restitution) : k
        }, b.prototype._addMaterial = function(a, b) {
            var c, d;
            for (c = 0; c < this._physicsMaterials.length; c++)
                if (d = this._physicsMaterials[c], d.friction === a && d.restitution === b) return d;
            var e = new CANNON.Material;
            for (e.friction = a, e.restitution = b, this._physicsMaterials.push(e), c = 0; c < this._physicsMaterials.length; c++) {
                d = this._physicsMaterials[c];
                var f = new CANNON.ContactMaterial(d, e, d.friction * e.friction, d.restitution * e.restitution);
                f.contactEquationStiffness = 1e10, f.contactEquationRegularizationTime = 10, this._world.addContactMaterial(f)
            }
            return e
        }, b.prototype._createRigidBodyFromShape = function(b, c, d, e, f) {
            var g = null;
            c.rotationQuaternion && (g = c.rotationQuaternion.clone(), c.rotationQuaternion = new a.Quaternion(0, 0, 0, 1));
            var h = c.getBoundingInfo().boundingBox,
                i = c.position.subtract(h.center),
                j = this._addMaterial(e, f),
                k = new CANNON.RigidBody(d, b, j);
            return g && (k.quaternion.x = g.x, k.quaternion.z = g.y, k.quaternion.y = g.z, k.quaternion.w = -g.w), k.position.set(h.center.x, h.center.z, h.center.y), this._world.add(k), this._registeredMeshes.push({
                mesh: c,
                body: k,
                material: j,
                delta: i
            }), k
        }, b.prototype.registerMeshesAsCompound = function(a, b) {
            for (var c = new CANNON.Compound, d = 0; d < a.length; d++) {
                var e = a[d].mesh,
                    f = this.registerMesh(e, a[d].impostor);
                0 == d ? c.addChild(f, new CANNON.Vec3(0, 0, 0)) : c.addChild(f, new CANNON.Vec3(e.position.x, e.position.z, e.position.y))
            }
            var g = a[0].mesh,
                h = this._createRigidBodyFromShape(c, g, b.mass, b.friction, b.restitution);
            return h.parts = a, h
        }, b.prototype._unbindBody = function(a) {
            for (var b = 0; b < this._registeredMeshes.length; b++) {
                var c = this._registeredMeshes[b];
                c.body === a && (c.body = null, c.delta = 0)
            }
        }, b.prototype.unregisterMesh = function(a) {
            for (var b = 0; b < this._registeredMeshes.length; b++) {
                var c = this._registeredMeshes[b];
                if (c.mesh === a) return c.body && (this._world.remove(c.body), this._unbindBody(c.body)), void this._registeredMeshes.splice(b, 1)
            }
        }, b.prototype.applyImpulse = function(a, b, c) {
            for (var d = new CANNON.Vec3(c.x, c.z, c.y), e = new CANNON.Vec3(b.x, b.z, b.y), f = 0; f < this._registeredMeshes.length; f++) {
                var g = this._registeredMeshes[f];
                if (g.mesh === a) return void g.body.applyImpulse(e, d)
            }
        }, b.prototype.createLink = function(a, b, c, d) {
            for (var e = null, f = null, g = 0; g < this._registeredMeshes.length; g++) {
                var h = this._registeredMeshes[g];
                h.mesh === a ? e = h.body : h.mesh === b && (f = h.body)
            }
            if (!e || !f) return !1;
            var i = new CANNON.PointToPointConstraint(e, new CANNON.Vec3(c.x, c.z, c.y), f, new CANNON.Vec3(d.x, d.z, d.y));
            return this._world.addConstraint(i), !0
        }, b.prototype.dispose = function() {
            for (; this._registeredMeshes.length;) this.unregisterMesh(this._registeredMeshes[0].mesh)
        }, b.prototype.isSupported = function() {
            return void 0 !== window.CANNON
        }, b
    }();
    a.CannonJSPlugin = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function() {
        function a(a) {
            this._actionManager = a
        }
        return a.prototype.isValid = function() {
            return !0
        }, a.prototype._getProperty = function(a) {
            return this._actionManager._getProperty(a)
        }, a.prototype._getEffectiveTarget = function(a, b) {
            return this._actionManager._getEffectiveTarget(a, b)
        }, a
    }();
    a.Condition = b;
    var c = function(a) {
        function b(c, d, e, f, g) {
            void 0 === g && (g = b.IsEqual), a.call(this, c), this.propertyPath = e, this.value = f, this.operator = g, this._target = this._getEffectiveTarget(d, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }
        return __extends(b, a), Object.defineProperty(b, "IsEqual", {
            get: function() {
                return b._IsEqual
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "IsDifferent", {
            get: function() {
                return b._IsDifferent
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "IsGreater", {
            get: function() {
                return b._IsGreater
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "IsLesser", {
            get: function() {
                return b._IsLesser
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.isValid = function() {
            switch (this.operator) {
                case b.IsGreater:
                    return this._target[this._property] > this.value;
                case b.IsLesser:
                    return this._target[this._property] < this.value;
                case b.IsEqual:
                case b.IsDifferent:
                    var a;
                    return a = this.value.equals ? this.value.equals(this._target[this._property]) : this.value === this._target[this._property], this.operator === b.IsEqual ? a : !a
            }
            return !1
        }, b._IsEqual = 0, b._IsDifferent = 1, b._IsGreater = 2, b._IsLesser = 3, b
    }(b);
    a.ValueCondition = c;
    var d = function(a) {
        function b(b, c) {
            a.call(this, b), this.predicate = c
        }
        return __extends(b, a), b.prototype.isValid = function() {
            return this.predicate()
        }, b
    }(b);
    a.PredicateCondition = d;
    var e = function(a) {
        function b(b, c, d) {
            a.call(this, b), this.value = d, this._target = c
        }
        return __extends(b, a), b.prototype.isValid = function() {
            return this._target.state === this.value
        }, b
    }(b);
    a.StateCondition = e
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(a, b) {
            this.triggerOptions = a, a.parameter ? (this.trigger = a.trigger, this._triggerParameter = a.parameter) : this.trigger = a, this._nextActiveAction = this, this._condition = b
        }
        return a.prototype._prepare = function() {}, a.prototype.getTriggerParameter = function() {
            return this._triggerParameter
        }, a.prototype._executeCurrent = function(a) {
            if (this._condition) {
                var b = this._actionManager.getScene().getRenderId();
                if (this._condition._evaluationId === b) {
                    if (!this._condition._currentResult) return
                } else {
                    if (this._condition._evaluationId = b, !this._condition.isValid()) return void(this._condition._currentResult = !1);
                    this._condition._currentResult = !0
                }
            }
            this._nextActiveAction.execute(a), this._nextActiveAction._child ? (this._nextActiveAction._child._actionManager || (this._nextActiveAction._child._actionManager = this._actionManager), this._nextActiveAction = this._nextActiveAction._child) : this._nextActiveAction = this
        }, a.prototype.execute = function() {}, a.prototype.then = function(a) {
            return this._child = a, a._actionManager = this._actionManager, a._prepare(), a
        }, a.prototype._getProperty = function(a) {
            return this._actionManager._getProperty(a)
        }, a.prototype._getEffectiveTarget = function(a, b) {
            return this._actionManager._getEffectiveTarget(a, b)
        }, a
    }();
    a.Action = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(a, b, c, d, e) {
            this.source = a, this.pointerX = b, this.pointerY = c, this.meshUnderPointer = d, this.sourceEvent = e
        }
        return a.CreateNew = function(b, c) {
            var d = b.getScene();
            return new a(b, d.pointerX, d.pointerY, d.meshUnderPointer, c)
        }, a.CreateNewFromScene = function(b, c) {
            return new a(null, b.pointerX, b.pointerY, b.meshUnderPointer, c)
        }, a
    }();
    a.ActionEvent = b;
    var c = function() {
        function b(a) {
            this.actions = new Array, this._scene = a, a._actionManagers.push(this)
        }
        return Object.defineProperty(b, "NothingTrigger", {
            get: function() {
                return b._NothingTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnPickTrigger", {
            get: function() {
                return b._OnPickTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnLeftPickTrigger", {
            get: function() {
                return b._OnLeftPickTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnRightPickTrigger", {
            get: function() {
                return b._OnRightPickTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnCenterPickTrigger", {
            get: function() {
                return b._OnCenterPickTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnPointerOverTrigger", {
            get: function() {
                return b._OnPointerOverTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnPointerOutTrigger", {
            get: function() {
                return b._OnPointerOutTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnEveryFrameTrigger", {
            get: function() {
                return b._OnEveryFrameTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnIntersectionEnterTrigger", {
            get: function() {
                return b._OnIntersectionEnterTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnIntersectionExitTrigger", {
            get: function() {
                return b._OnIntersectionExitTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnKeyDownTrigger", {
            get: function() {
                return b._OnKeyDownTrigger
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b, "OnKeyUpTrigger", {
            get: function() {
                return b._OnKeyUpTrigger
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.dispose = function() {
            var a = this._scene._actionManagers.indexOf(this);
            a > -1 && this._scene._actionManagers.splice(a, 1)
        }, b.prototype.getScene = function() {
            return this._scene
        }, b.prototype.hasSpecificTriggers = function(a) {
            for (var b = 0; b < this.actions.length; b++) {
                var c = this.actions[b];
                if (a.indexOf(c.trigger) > -1) return !0
            }
            return !1
        }, Object.defineProperty(b.prototype, "hasPointerTriggers", {
            get: function() {
                for (var a = 0; a < this.actions.length; a++) {
                    var c = this.actions[a];
                    if (c.trigger >= b._OnPickTrigger && c.trigger <= b._OnPointerOutTrigger) return !0
                }
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "hasPickTriggers", {
            get: function() {
                for (var a = 0; a < this.actions.length; a++) {
                    var c = this.actions[a];
                    if (c.trigger >= b._OnPickTrigger && c.trigger <= b._OnCenterPickTrigger) return !0
                }
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.registerAction = function(c) {
            return c.trigger === b.OnEveryFrameTrigger && this.getScene().actionManager !== this ? (a.Tools.Warn("OnEveryFrameTrigger can only be used with scene.actionManager"), null) : (this.actions.push(c), c._actionManager = this, c._prepare(), c)
        }, b.prototype.processTrigger = function(a, c) {
            for (var d = 0; d < this.actions.length; d++) {
                var e = this.actions[d];
                if (e.trigger === a) {
                    if (a === b.OnKeyUpTrigger || a === b.OnKeyDownTrigger) {
                        var f = e.getTriggerParameter();
                        if (f) {
                            var g = c.sourceEvent.charCode ? c.sourceEvent.charCode : c.sourceEvent.keyCode,
                                h = String.fromCharCode(g).toLowerCase();
                            if (h !== f.toLowerCase()) continue
                        }
                    }
                    e._executeCurrent(c)
                }
            }
        }, b.prototype._getEffectiveTarget = function(a, b) {
            for (var c = b.split("."), d = 0; d < c.length - 1; d++) a = a[c[d]];
            return a
        }, b.prototype._getProperty = function(a) {
            var b = a.split(".");
            return b[b.length - 1]
        }, b._NothingTrigger = 0, b._OnPickTrigger = 1, b._OnLeftPickTrigger = 2, b._OnRightPickTrigger = 3, b._OnCenterPickTrigger = 4, b._OnPointerOverTrigger = 5, b._OnPointerOutTrigger = 6, b._OnEveryFrameTrigger = 7, b._OnIntersectionEnterTrigger = 8, b._OnIntersectionExitTrigger = 9, b._OnKeyDownTrigger = 10, b._OnKeyUpTrigger = 11, b
    }();
    a.ActionManager = c
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(a, c, d, e, f, g, h) {
            void 0 === f && (f = 1e3), b.call(this, a, g), this.propertyPath = d, this.value = e, this.duration = f, this.stopOtherAnimations = h, this._target = c
        }
        return __extends(c, b), c.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }, c.prototype.execute = function() {
            var b, c = this._actionManager.getScene(),
                d = [{
                    frame: 0,
                    value: this._target[this._property]
                }, {
                    frame: 100,
                    value: this.value
                }];
            if ("number" == typeof this.value) b = a.Animation.ANIMATIONTYPE_FLOAT;
            else if (this.value instanceof a.Color3) b = a.Animation.ANIMATIONTYPE_COLOR3;
            else if (this.value instanceof a.Vector3) b = a.Animation.ANIMATIONTYPE_VECTOR3;
            else if (this.value instanceof a.Matrix) b = a.Animation.ANIMATIONTYPE_MATRIX;
            else {
                if (!(this.value instanceof a.Quaternion)) return void a.Tools.Warn("InterpolateValueAction: Unsupported type (" + typeof this.value + ")");
                b = a.Animation.ANIMATIONTYPE_QUATERNION
            }
            var e = new a.Animation("InterpolateValueAction", this._property, 100 * (1e3 / this.duration), b, a.Animation.ANIMATIONLOOPMODE_CONSTANT);
            e.setKeys(d), this.stopOtherAnimations && c.stopAnimation(this._target), c.beginDirectAnimation(this._target, [e], 0, 100)
        }, c
    }(a.Action);
    a.InterpolateValueAction = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d, e) {
            a.call(this, b, e), this.propertyPath = d, this._target = c
        }
        return __extends(b, a), b.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }, b.prototype.execute = function() {
            this._target[this._property] = !this._target[this._property]
        }, b
    }(a.Action);
    a.SwitchBooleanAction = b;
    var c = function(a) {
        function b(b, c, d, e) {
            a.call(this, b, e), this.value = d, this._target = c
        }
        return __extends(b, a), b.prototype.execute = function() {
            this._target.state = this.value
        }, b
    }(a.Action);
    a.SetStateAction = c;
    var d = function(a) {
        function b(b, c, d, e, f) {
            a.call(this, b, f), this.propertyPath = d, this.value = e, this._target = c
        }
        return __extends(b, a), b.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }, b.prototype.execute = function() {
            this._target[this._property] = this.value
        }, b
    }(a.Action);
    a.SetValueAction = d;
    var e = function(b) {
        function c(a, c, d, e, f) {
            b.call(this, a, f), this.propertyPath = d, this.value = e, this._target = c
        }
        return __extends(c, b), c.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath), "number" != typeof this._target[this._property] && a.Tools.Warn("Warning: IncrementValueAction can only be used with number values")
        }, c.prototype.execute = function() {
            this._target[this._property] += this.value
        }, c
    }(a.Action);
    a.IncrementValueAction = e;
    var f = function(a) {
        function b(b, c, d, e, f, g) {
            a.call(this, b, g), this.from = d, this.to = e, this.loop = f, this._target = c
        }
        return __extends(b, a), b.prototype._prepare = function() {}, b.prototype.execute = function() {
            var a = this._actionManager.getScene();
            a.beginAnimation(this._target, this.from, this.to, this.loop)
        }, b
    }(a.Action);
    a.PlayAnimationAction = f;
    var g = function(a) {
        function b(b, c, d) {
            a.call(this, b, d), this._target = c
        }
        return __extends(b, a), b.prototype._prepare = function() {}, b.prototype.execute = function() {
            var a = this._actionManager.getScene();
            a.stopAnimation(this._target)
        }, b
    }(a.Action);
    a.StopAnimationAction = g;
    var h = function(b) {
        function c(c, d) {
            void 0 === c && (c = a.ActionManager.NothingTrigger), b.call(this, c, d)
        }
        return __extends(c, b), c.prototype.execute = function() {}, c
    }(a.Action);
    a.DoNothingAction = h;
    var i = function(a) {
        function b(b, c, d) {
            a.call(this, b, d), this.children = c
        }
        return __extends(b, a), b.prototype._prepare = function() {
            for (var a = 0; a < this.children.length; a++) this.children[a]._actionManager = this._actionManager, this.children[a]._prepare()
        }, b.prototype.execute = function(a) {
            for (var b = 0; b < this.children.length; b++) this.children[b].execute(a)
        }, b
    }(a.Action);
    a.CombineAction = i;
    var j = function(a) {
        function b(b, c, d) {
            a.call(this, b, d), this.func = c
        }
        return __extends(b, a), b.prototype.execute = function(a) {
            this.func(a)
        }, b
    }(a.Action);
    a.ExecuteCodeAction = j;
    var k = function(b) {
        function c(a, c, d, e) {
            b.call(this, a, e), this._target = c, this._parent = d
        }
        return __extends(c, b), c.prototype._prepare = function() {}, c.prototype.execute = function() {
            if (this._target.parent !== this._parent) {
                var b = this._parent.getWorldMatrix().clone();
                b.invert(), this._target.position = a.Vector3.TransformCoordinates(this._target.position, b), this._target.parent = this._parent
            }
        }, c
    }(a.Action);
    a.SetParentAction = k;
    var l = function(a) {
        function b(b, c, d) {
            a.call(this, b, d), this._sound = c
        }
        return __extends(b, a), b.prototype._prepare = function() {}, b.prototype.execute = function() {
            void 0 !== this._sound && this._sound.play()
        }, b
    }(a.Action);
    a.PlaySoundAction = l;
    var m = function(a) {
        function b(b, c, d) {
            a.call(this, b, d), this._sound = c
        }
        return __extends(b, a), b.prototype._prepare = function() {}, b.prototype.execute = function() {
            void 0 !== this._sound && this._sound.stop()
        }, b
    }(a.Action);
    a.StopSoundAction = m
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function() {
        function b(b, c, d, e, f) {
            this.delayLoadState = a.Engine.DELAYLOADSTATE_NONE, this._totalVertices = 0, this._indices = [], this.id = b, this._engine = c.getEngine(), this._meshes = [], this._scene = c, d ? this.setAllVerticesData(d, e) : (this._totalVertices = 0, this._indices = []), f && (this.applyToMesh(f), f.computeWorldMatrix(!0))
        }
        return b.prototype.getScene = function() {
            return this._scene
        }, b.prototype.getEngine = function() {
            return this._engine
        }, b.prototype.isReady = function() {
            return this.delayLoadState === a.Engine.DELAYLOADSTATE_LOADED || this.delayLoadState === a.Engine.DELAYLOADSTATE_NONE
        }, b.prototype.setAllVerticesData = function(a, b) {
            a.applyToGeometry(this, b)
        }, b.prototype.setVerticesData = function(b, c, d, e) {
            if (this._vertexBuffers = this._vertexBuffers || {}, this._vertexBuffers[b] && this._vertexBuffers[b].dispose(), this._vertexBuffers[b] = new a.VertexBuffer(this._engine, c, b, d, 0 === this._meshes.length, e), b === a.VertexBuffer.PositionKind) {
                e = this._vertexBuffers[b].getStrideSize(), this._totalVertices = c.length / e;
                for (var f = a.Tools.ExtractMinAndMax(c, 0, this._totalVertices), g = this._meshes, h = g.length, i = 0; h > i; i++) {
                    var j = g[i];
                    j._resetPointsArrayCache(), j._boundingInfo = new a.BoundingInfo(f.minimum, f.maximum), j._createGlobalSubMesh(), j.computeWorldMatrix(!0)
                }
            }
        }, b.prototype.updateVerticesDataDirectly = function(a, b, c) {
            var d = this.getVertexBuffer(a);
            d && d.updateDirectly(b, c)
        }, b.prototype.updateVerticesData = function(b, c, d) {
            var e = this.getVertexBuffer(b);
            if (e && (e.update(c), b === a.VertexBuffer.PositionKind)) {
                var f, g = e.getStrideSize();
                this._totalVertices = c.length / g, d && (f = a.Tools.ExtractMinAndMax(c, 0, this._totalVertices));
                for (var h = this._meshes, i = h.length, j = 0; i > j; j++) {
                    var k = h[j];
                    k._resetPointsArrayCache(), d && (k._boundingInfo = new a.BoundingInfo(f.minimum, f.maximum))
                }
            }
        }, b.prototype.getTotalVertices = function() {
            return this.isReady() ? this._totalVertices : 0
        }, b.prototype.getVerticesData = function(a) {
            var b = this.getVertexBuffer(a);
            return b ? b.getData() : null
        }, b.prototype.getVertexBuffer = function(a) {
            return this.isReady() ? this._vertexBuffers[a] : null
        }, b.prototype.getVertexBuffers = function() {
            return this.isReady() ? this._vertexBuffers : null
        }, b.prototype.isVerticesDataPresent = function(a) {
            return this._vertexBuffers ? void 0 !== this._vertexBuffers[a] : this._delayInfo ? -1 !== this._delayInfo.indexOf(a) : !1
        }, b.prototype.getVerticesDataKinds = function() {
            var a = [];
            if (!this._vertexBuffers && this._delayInfo)
                for (var b in this._delayInfo) a.push(b);
            else
                for (b in this._vertexBuffers) a.push(b);
            return a
        }, b.prototype.setIndices = function(a, b) {
            this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = a, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices)), void 0 !== b && (this._totalVertices = b);
            for (var c = this._meshes, d = c.length, e = 0; d > e; e++) c[e]._createGlobalSubMesh()
        }, b.prototype.getTotalIndices = function() {
            return this.isReady() ? this._indices.length : 0
        }, b.prototype.getIndices = function() {
            return this.isReady() ? this._indices : null
        }, b.prototype.getIndexBuffer = function() {
            return this.isReady() ? this._indexBuffer : null
        }, b.prototype.releaseForMesh = function(a, b) {
            var c = this._meshes,
                d = c.indexOf(a);
            if (-1 !== d) {
                for (var e in this._vertexBuffers) this._vertexBuffers[e].dispose();
                this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), c.splice(d, 1), a._geometry = null, 0 === c.length && b && this.dispose()
            }
        }, b.prototype.applyToMesh = function(a) {
            if (a._geometry !== this) {
                var b = a._geometry;
                b && b.releaseForMesh(a);
                var c = this._meshes;
                a._geometry = this, this._scene.pushGeometry(this), c.push(a), this.isReady() ? this._applyToMesh(a) : a._boundingInfo = this._boundingInfo
            }
        }, b.prototype._applyToMesh = function(b) {
            var c = this._meshes.length;
            for (var d in this._vertexBuffers)
                if (1 === c && this._vertexBuffers[d].create(), this._vertexBuffers[d]._buffer.references = c, d === a.VertexBuffer.PositionKind) {
                    b._resetPointsArrayCache();
                    var e = a.Tools.ExtractMinAndMax(this._vertexBuffers[d].getData(), 0, this._totalVertices);
                    b._boundingInfo = new a.BoundingInfo(e.minimum, e.maximum), b._createGlobalSubMesh(), b._updateBoundingInfo()
                }
            1 === c && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices)), this._indexBuffer && (this._indexBuffer.references = c)
        }, b.prototype.load = function(b, c) {
            var d = this;
            if (this.delayLoadState !== a.Engine.DELAYLOADSTATE_LOADING) {
                if (this.isReady()) return void(c && c());
                this.delayLoadState = a.Engine.DELAYLOADSTATE_LOADING, b._addPendingData(this), a.Tools.LoadFile(this.delayLoadingFile, function(e) {
                    d._delayLoadingFunction(JSON.parse(e), d), d.delayLoadState = a.Engine.DELAYLOADSTATE_LOADED, d._delayInfo = [], b._removePendingData(d);
                    for (var f = d._meshes, g = f.length, h = 0; g > h; h++) d._applyToMesh(f[h]);
                    c && c()
                }, function() {}, b.database)
            }
        }, b.prototype.dispose = function() {
            var b, c = this._meshes,
                d = c.length;
            for (b = 0; d > b; b++) this.releaseForMesh(c[b]);
            this._meshes = [];
            for (var e in this._vertexBuffers) this._vertexBuffers[e].dispose();
            this._vertexBuffers = [], this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = a.Engine.DELAYLOADSTATE_NONE, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null;
            var f = this._scene.getGeometries();
            b = f.indexOf(this), b > -1 && f.splice(b, 1)
        }, b.prototype.copy = function(c) {
            var d = new a.VertexData;
            d.indices = [];
            for (var e = this.getIndices(), f = 0; f < e.length; f++) d.indices.push(e[f]);
            var g = !1,
                h = !1;
            for (var i in this._vertexBuffers) d.set(this.getVerticesData(i), i), h || (g = this.getVertexBuffer(i).isUpdatable(), h = !g);
            var j = new b(c, this._scene, d, g, null);
            j.delayLoadState = this.delayLoadState, j.delayLoadingFile = this.delayLoadingFile, j._delayLoadingFunction = this._delayLoadingFunction;
            for (i in this._delayInfo) j._delayInfo = j._delayInfo || [], j._delayInfo.push(i);
            var k = a.Tools.ExtractMinAndMax(this.getVerticesData(a.VertexBuffer.PositionKind), 0, this.getTotalVertices());
            return j._boundingInfo = new a.BoundingInfo(k.minimum, k.maximum), j
        }, b.ExtractFromMesh = function(a, b) {
            var c = a._geometry;
            return c ? c.copy(b) : null
        }, b.RandomId = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0,
                    c = "x" === a ? b : 3 & b | 8;
                return c.toString(16)
            })
        }, b
    }();
    a.Geometry = b;
    var b;
    ! function(b) {
        var c;
        ! function(c) {
            var d = function(a) {
                function b(b, c, d, e, f) {
                    this._beingRegenerated = !0, this._canBeRegenerated = e, a.call(this, b, c, d, !1, f), this._beingRegenerated = !1
                }
                return __extends(b, a), b.prototype.canBeRegenerated = function() {
                    return this._canBeRegenerated
                }, b.prototype.regenerate = function() {
                    this._canBeRegenerated && (this._beingRegenerated = !0, this.setAllVerticesData(this._regenerateVertexData(), !1), this._beingRegenerated = !1)
                }, b.prototype.asNewGeometry = function(b) {
                    return a.prototype.copy.call(this, b)
                }, b.prototype.setAllVerticesData = function(b) {
                    this._beingRegenerated && a.prototype.setAllVerticesData.call(this, b, !1)
                }, b.prototype.setVerticesData = function(b, c) {
                    this._beingRegenerated && a.prototype.setVerticesData.call(this, b, c, !1)
                }, b.prototype._regenerateVertexData = function() {
                    throw new Error("Abstract method")
                }, b.prototype.copy = function() {
                    throw new Error("Must be overriden in sub-classes.")
                }, b
            }(b);
            c._Primitive = d;
            var e = function(b) {
                function c(a, c, d, e, f) {
                    this.size = d, b.call(this, a, c, this._regenerateVertexData(), e, f)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreateBox(this.size)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.size, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.Box = e;
            var f = function(b) {
                function c(a, c, d, e, f, g) {
                    this.segments = d, this.diameter = e, b.call(this, a, c, this._regenerateVertexData(), f, g)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreateSphere(this.segments, this.diameter)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.segments, this.diameter, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.Sphere = f;
            var g = function(b) {
                function c(a, c, d, e, f, g, h, i, j) {
                    void 0 === h && (h = 1), this.height = d, this.diameterTop = e, this.diameterBottom = f, this.tessellation = g, this.subdivisions = h, b.call(this, a, c, this._regenerateVertexData(), i, j)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreateCylinder(this.height, this.diameterTop, this.diameterBottom, this.tessellation, this.subdivisions)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.height, this.diameterTop, this.diameterBottom, this.tessellation, this.subdivisions, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.Cylinder = g;
            var h = function(b) {
                function c(a, c, d, e, f, g, h) {
                    this.diameter = d, this.thickness = e, this.tessellation = f, b.call(this, a, c, this._regenerateVertexData(), g, h)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreateTorus(this.diameter, this.thickness, this.tessellation)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.diameter, this.thickness, this.tessellation, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.Torus = h;
            var i = function(b) {
                function c(a, c, d, e, f, g, h) {
                    this.width = d, this.height = e, this.subdivisions = f, b.call(this, a, c, this._regenerateVertexData(), g, h)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreateGround(this.width, this.height, this.subdivisions)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.width, this.height, this.subdivisions, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.Ground = i;
            var j = function(b) {
                function c(a, c, d, e, f, g, h, i, j, k) {
                    this.xmin = d, this.zmin = e, this.xmax = f, this.zmax = g, this.subdivisions = h, this.precision = i, b.call(this, a, c, this._regenerateVertexData(), j, k)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreateTiledGround(this.xmin, this.zmin, this.xmax, this.zmax, this.subdivisions, this.precision)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.xmin, this.zmin, this.xmax, this.zmax, this.subdivisions, this.precision, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.TiledGround = j;
            var k = function(b) {
                function c(a, c, d, e, f) {
                    this.size = d, b.call(this, a, c, this._regenerateVertexData(), e, f)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreatePlane(this.size)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.size, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.Plane = k;
            var l = function(b) {
                function c(a, c, d, e, f, g, h, i, j, k) {
                    this.radius = d, this.tube = e, this.radialSegments = f, this.tubularSegments = g, this.p = h, this.q = i, b.call(this, a, c, this._regenerateVertexData(), j, k)
                }
                return __extends(c, b), c.prototype._regenerateVertexData = function() {
                    return a.VertexData.CreateTorusKnot(this.radius, this.tube, this.radialSegments, this.tubularSegments, this.p, this.q)
                }, c.prototype.copy = function(a) {
                    return new c(a, this.getScene(), this.radius, this.tube, this.radialSegments, this.tubularSegments, this.p, this.q, this.canBeRegenerated(), null)
                }, c
            }(d);
            c.TorusKnot = l
        }(c = b.Primitives || (b.Primitives = {}))
    }(b = a.Geometry || (a.Geometry = {}))
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function() {
        function b(a) {
            var b = this;
            this.babylonGamepads = [], this.oneGamepadConnected = !1, this.isMonitoring = !1, this.gamepadEventSupported = "GamepadEvent" in window, this.gamepadSupportAvailable = navigator.getGamepads || !!navigator.webkitGetGamepads || !!navigator.msGetGamepads || !!navigator.webkitGamepads, this.buttonADataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAA9aSURBVHja7FtpbBzneX7m3otcihSpm9Z9UJalxPKhVLZlp6ktNzEaxE0CtAnQAgnSoPWPBi3syuiPwordFi5Qt2haFygCoylSV4Vby6os1I3kOLYrS65kXXQoypJJSaFEUTyXy925+rzfzC6HFFlL1kpAIe7i5czO7H7zPs97ft8MtTAMcSu/dNzirxkCZgiYIWCGgBkCZgi4hV/mDR5fSxAt+0ZiX0ucDxMSTJLK+f83BFSA6TFgK75OclshouKBFbA+xaV4k7Z+fD6sNRlmjYFXQMu4NiUVS/oHe5/ecnHo3MYxd7QthN9UcsdW6FqEPwgDOFbqpAajL2VlTrTULzj4Ow8+s4+nipSxWMoxIUkyrl/pGswFtIR7WzHgDCX77K7vfHNkbOA+AryjYZadb27OIJdzCNZBKmXw4kbk35qPsTEfJbeEkZESentHMdBfGtY142gu1bDvqV/925f4tQJlNCaj4hXX7RHXS0AFuJEAXvfHr/zmk67vPjir0V68aFEe8xtuQ6O1FHlrEXLmHBiaDUtzYBlpNYjrF+GFZfhhCcPeBQy53ehzT+H8QBe6uwfRf7l8xjKsvX/y5X98jl8fThDhJ4i46QQkrS5I6v7oX7/++77vPtLUlFnZtnIRlubvxRxnHbJmE79sxD/SqG0oZk8MFarRqufUkQAFrxcXSkfx0eB+nOggKX2jHYZhvf79r/z4L2IiipO84aYRkASfefnAX695p3P3c9mM/UufuaMVdzRvxVx7A0xaWdOMqVULJ6Z3TZv6KmHo0ztK6CkfxpHe3Th0pAuF0fLbn1u+9cmv3vW77bE3fGoSPi0BVfAvvPEHm9rPv//iooWz5m9Z/wCWZx+Go9UrN48QTD9IGMZ1cJIzTPisRQclPMrhME4W9mDfB2+i+2z/+TXz7/z2E7/85+9OIuGGE6BV3H77zm/d33nx6Ktr18zFg2t+DQude2n1tLJ8tcJ90vDhpG5Am7qTkJAQErywiLOld7G3/d9xvL0Hy1vWPbbtS3//00Q4hDeaAFXintrx1fu7+jp2r13bgofX/gaazbVkJQdLT9P6VqRFDSu2hIgXlBUBLgtCr3cce47/CMePX0Rr08qtzz7+8k8TpfKGtcKq1jPZre7oObyjdWkGd628l7AXwvMCeL7HjO6qrS8S1E5kTE9tfbiur665ccU9EB1EF9Ep0WXesEZIJb9j5/b/XUtzNrt29Rw0og2lchmBVqLo8LSAHlCixbTpddGm8Y7pjkttCCUP+JQy3FiatNuxdvUx9F4ayopO/OL9sQeEN4oA/eHn577oWPbGVes11PsrUBxjDafze1Te1VzouqnK2TgmLQljQqmrnAsT+iaPVb5b2co7EC+QhBgUeM1R1AcrsGp9Jy6+4W8U3fZ8r+e3EnOI2uaAX3l+zgNB4O9rW5/B8tY5WGo9BtOrJ4uMfUl+uj0B8HTmPXj8Pex86xVEnTDBBSE2r78fX9i09RPyZfT2A5ceIMSPwDOH8JH7Kk5+fAHtR0Zh6MZ9e7534Wc3wgO0sXLhD9OpFOa0egjGMhguD8BgTJooMfPbV1h/umz25ondcFP90IzY2iTgrfY9uH31aqSc9CeSEHkBEyITv28M8XMGc2/z0HGCpWCs8BS/9sWrDYOrJuCBZ+vu5sUfXbicia5kYGzUw4DWTwJKbApSjHuTBBjT2H68zg0MD4KlEwabZi0Y7wd85u/3O9/B6sVrPlEXeiF9nMmRxPt6Qf4y/HyIbh3HwkdF1zefGt5fUwK8wP2WAGwh02MFE/5ogYr3Qg/STL0W3d8aB1ppa+Pw0uI2Tz6/134Mg+UoIGZlZ2HMLaJYHkPICr6//RBamvPj/UA4dYKsegGrXqAXMaqNsDT6SreOY5Gu/FptCeBFN+caAphGiKFiGaOjA3AJHoGt6r7GgNbjqjo5yQkBUVHQ8PaJExjiaZ2yue12nO27gCNdHSptvf/xGdw11I2UZSmvCIJgQiJMhoEfeqpNDvUSRvUB5hMX9fUecg0aBi+Hm2uaAz633bmbm1VN8+h07LfKJdkOkQB2fL4BTlsj8No4YLG2putMSjwjp3QNvZdH8YsiExV501isFjU30lpF7D8dVfCA8sFHp7BuWYtaIwiCsCrCSDVhh9IX8k0CoHsoMQ84FrfFAE3zQAK0VaLzO9tK79XKAxSj+aYALt3XLfNipZD1v492YexrE/sP0zBgUIQIoYaflAXbz16CzyY6YKqYl8uheTarRioD7xAxCQHUpv18L1Yud+Iloujtk4zQo9WZcKURqjbHclzKvj0Gvcw8UA6oY2WqonSuGQGb5I+TJgEFEsB4daXzc0eopabcX13W0BXwgAnRZL4Q62s8ppnR/pFz/QjF+tRvxeIsY/cizGwRt83P4czACL8HdA1JUivCNGVogvdkNkgaGDNe4CvXFyJ8n+B5XGLJ1FmJXJ53AzjZKgGbatkKL5c/liNWIPO8uM/4VO2uKCQZjLmBqQAGJ4EmI8NMabDTOuyUobYXmPlCEpiqA1IkYdWSBpjpEDl6wsrF9aAjqHNOPXDyXAGprAknY5B0btOGGk/GlfE1taqofCNuuYNIJ+omOiZ1rpUHtEYWjkpWoP5EWV2sb5isA7aIQTHHxaIniNADui8PIs0Eb6SY/Z0UQc+j+mXYuoM7Vy/Age7zkBUyCZGLhRLSOYcWpfXFA1wPhqup8JNKq5UkKeoqSHxPLSoqnUQtw5ioc60IyE/VkOji8mYE2nZELNgCXLaOkGDFJBg4OzCMDEcxCfAzS1pQX5fHSNDLClLGwmwzls6vQ09hGFJYegdZ1hha2bqIBNelB5Qjog02TzpFNVEquYpMuTSYr/lcQPKPJHoRQ8W1GYO3lDgpO9pPWTEZEQGnuodg5Hyk66Lyd8fKOQQ6gqyWict7GeuWz8HQyWEFw+bB7ksF3Nk2V1nfpZTLQqSLslzXlDmHpsQ1osVoy/Solwf/GpdErpaAQUqjWxL2GWcWaSfAMIis7RBwiuCdtD1OgmNHBJCg7r4uZBnbdjaaq+3YewB+USYicY8juYPnMtloqdCjG3f39eO+3JKIAFadSiiZigBdgdcqItMxsmZbIbvUIKlzzQjoEgLGRjU2KTp8AjRCkzEnAG0mtQh8Ku0oAqok8JzP+Lw0MkB3jpKjKpapaL5WKZxafDdBqoC6O8LtyMAQhoZdzG7MwLU8FUYKPINcl+qimismRj26v2I71I3jDxfdpM41I6CTsmG4X0djKyc8RYu9t0Vl2QJbBJ5xFPiICJIg1hdhR3fs5HnWeldleZXABLA98b7Y5HtjkgwNEtbTN4iFC5oI3I1CTsAbsfVjAizJB3Qbx9HphRp6eqr3TDprSYA0FI/3ntOxbpUNM2OjpEcE6HYEWkhIKw+ICeBxi+T09F1WZU+iJq2n8fRDf4Ymu3XSrcOIgg8H9uOFn31fNUVC0oddZ7B5YxtDwlTgo66SEici2fokwCJjju0hw7J54WypQsB7tSRAza+H+nld30Y+m2b7SS+Qn9PKFl1egRciHIfWpxC8x+7tdA97+3zUcNyWX4Ci/THOoD2x/hmlQTox+3gDjWYeg/4gmF853xjBpUsjaGnJR24fu36FNzX5pmfY7EPStlSLIgb6gwk616QRYk8tS88/l/2PT/loyqbQkEmhPpNGNp1CmvtieQHvONGtL4sdy9Hjp5kkpTWmSzM7L529hErHs0cCpt2qW00BymDV3JXSU8HkAXKIjtNnedxS48m4Mr5cR9YlMrx+XTqNRmbP2ZkMOjvHKir/PNa5pouiitFjH44iZ6YwO5tFAy+eo6SdpOUJyhBQTJR+HT9HYLJaFve0PqQmTQLaVOCdmIRIWE+wrmWTzG8iAugF7qgWjSWkGbYa32EjJQTkGFv5dBZNJKCeHdb77UPXZP1rWhKLZ4Rqjv2Fz86lLMNlpusCY9BnqTNUIyTgrVhhs7rVq2KoW2TSxWlXLOCqWX4svmpzZdEjWvgQcdVWPnu+i4ClUS+HyLIFnsVf/9eBduw8eKYy2D1XMxO8Jg+IB9wl+3s/uAC3qKMpXY88m/ecnUHaSis3Na8Ab1UtaCh3j1y+sm8m9o0J+9Fv9MR4Zhw6DufTWasOebsOs+xZKHJOtvtQtertulrwV+0BtH5yWvyW7CxubsCTX9+KUQZ4ga7qmdGUFmrya8QWHwcxlReMF8Mw4QETrR8oy7tq2ivH5Tvya8n8aXZMGc4An/nRDpy52FfR8b5KCJCImt8YkYF/KDtnegfwz3sPodGajQajCTk9z/4mQ6iphMWv9AA9IeMWdyYdn+gBkVc5amwHWV6lHvVaI2YZzfinN95Ngv/htcT/p31CRNbdV8l8e++xD5HPNeHxhx5Bgf18kTN5T1kvjBfEjGjBJCai4gnjHqAnlvqS8e9NeujEjEul/NokDbai4V/2voafHD1S0evdWLeb8ojMNyly5fS//ffbcD0L33j4K4RX4rtMh/UUGLXmr6BWXN9MEFAhYfzmZ6hcXI+TpISRH8061Ui68gTWGUJP4aU9P8ZrB39S+Xkx1ummPSMkbebnJcxU1jm4D5eGhvB7j32HJcpUJHhxLIfxTZpxwGa8eKrHC51a9Tmp+N5P1RsQ01cJAwEflHw8/+pfYn/HgaQ+n7/a1vd6k+BUS2XvVD401TXhu488gQ0r71QUuLJsrWT8mSYtfkBMm0BAmFhNrgDX4oRqqeaJMw4c6TyIv/qPP0Xf8KUJ6sXuP1XluuEEyGsD5TXKgsqBNQvW4RtbnkDb4ttJQlGt/IQqLMJE7tWqOSBZCSrL6dFSqq3AnzhzDC/tewHt5w4nr3suvgN0+P8o3TeegFe3vYDHtj+xhLt/Q3kkeW5d693YuuHXsWHZPcixW4tCwo+trVU9QEs8G6HFqW5kdBiHTu3H64dfxpGuK8r665Tv7tz2D6e/tP23cT0E1OA5QR2iiIbs1i9u/9qTPPC12CtwlIofjZVvW/BZ3LVsC5bPW4u5DQuxaPay2NpRIuy61IkLA+dw8hdHceDUPpw49z9TXUysvWPXtl3bQ4yQtMJ1a18DAsbvRO/atvM5DXXPPbp9yzP8+GXBXTkngKYBdTWvE5RXdm87+HQEfLh2T57UIAdM95Js9+04LKSDbLzG31+Omxpx9xfxKR6AukkhMP0aKuUHsag5VEzE3fGSddsUVu6KFzIE+H/iJry0mX+bu8VfMwTMEDBDwAwBMwTMEHALv/5XgAEASpR5N6rB30UAAAAASUVORK5CYII=", this._callbackGamepadConnected = a, this.gamepadSupportAvailable ? (this.gamepadEventSupported ? (window.addEventListener("gamepadconnected", function(a) {
                b._onGamepadConnected(a)
            }, !1), window.addEventListener("gamepaddisconnected", function(a) {
                b._onGamepadDisconnected(a)
            }, !1)) : this._startMonitoringGamepads(), this.oneGamepadConnected || this._insertGamepadDOMInstructions()) : this._insertGamepadDOMNotSupported()
        }
        return b.prototype._insertGamepadDOMInstructions = function() {
            b.gamepadDOMInfo = document.createElement("div");
            var a = document.createElement("img");
            a.src = this.buttonADataURL;
            var c = document.createElement("span");
            c.innerHTML = "<strong>to activate gamepad</strong>", b.gamepadDOMInfo.appendChild(a), b.gamepadDOMInfo.appendChild(c), b.gamepadDOMInfo.style.position = "absolute", b.gamepadDOMInfo.style.width = "100%", b.gamepadDOMInfo.style.height = "48px", b.gamepadDOMInfo.style.bottom = "0px", b.gamepadDOMInfo.style.backgroundColor = "rgba(1, 1, 1, 0.15)", b.gamepadDOMInfo.style.textAlign = "center", b.gamepadDOMInfo.style.zIndex = "10", a.style.position = "relative", a.style.bottom = "8px", c.style.position = "relative", c.style.fontSize = "32px", c.style.bottom = "32px", c.style.color = "green", document.body.appendChild(b.gamepadDOMInfo)
        }, b.prototype._insertGamepadDOMNotSupported = function() {
            b.gamepadDOMInfo = document.createElement("div");
            var a = document.createElement("span");
            a.innerHTML = "<strong>gamepad not supported</strong>", b.gamepadDOMInfo.appendChild(a), b.gamepadDOMInfo.style.position = "absolute", b.gamepadDOMInfo.style.width = "100%", b.gamepadDOMInfo.style.height = "40px", b.gamepadDOMInfo.style.bottom = "0px", b.gamepadDOMInfo.style.backgroundColor = "rgba(1, 1, 1, 0.15)", b.gamepadDOMInfo.style.textAlign = "center", b.gamepadDOMInfo.style.zIndex = "10", a.style.position = "relative", a.style.fontSize = "32px", a.style.color = "red", document.body.appendChild(b.gamepadDOMInfo)
        }, b.prototype.dispose = function() {
            document.body.removeChild(b.gamepadDOMInfo)
        }, b.prototype._onGamepadConnected = function(a) {
            var b = this._addNewGamepad(a.gamepad);
            this._callbackGamepadConnected && this._callbackGamepadConnected(b), this._startMonitoringGamepads()
        }, b.prototype._addNewGamepad = function(c) {
            this.oneGamepadConnected || (this.oneGamepadConnected = !0, b.gamepadDOMInfo && (document.body.removeChild(b.gamepadDOMInfo), b.gamepadDOMInfo = null));
            var d;
            return d = -1 !== c.id.search("Xbox 360") || -1 !== c.id.search("xinput") ? new a.Xbox360Pad(c.id, c.index, c) : new a.GenericPad(c.id, c.index, c), this.babylonGamepads.push(d), d
        }, b.prototype._onGamepadDisconnected = function(a) {
            for (var b in this.babylonGamepads)
                if (this.babylonGamepads[b].index == a.gamepad.index) {
                    this.babylonGamepads.splice(b, 1);
                    break
                }
            0 == this.babylonGamepads.length && this._stopMonitoringGamepads()
        }, b.prototype._startMonitoringGamepads = function() {
            this.isMonitoring || (this.isMonitoring = !0, this._checkGamepadsStatus())
        }, b.prototype._stopMonitoringGamepads = function() {
            this.isMonitoring = !1
        }, b.prototype._checkGamepadsStatus = function() {
            var a = this;
            this._updateGamepadObjects();
            for (var b in this.babylonGamepads) this.babylonGamepads[b].update();
            this.isMonitoring && (window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                a._checkGamepadsStatus()
            }) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(function() {
                a._checkGamepadsStatus()
            }) : window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(function() {
                a._checkGamepadsStatus()
            }))
        }, b.prototype._updateGamepadObjects = function() {
            for (var a = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [], b = 0; b < a.length; b++)
                if (a[b])
                    if (a[b].index in this.babylonGamepads) this.babylonGamepads[b].browserGamepad = a[b];
                    else {
                        var c = this._addNewGamepad(a[b]);
                        this._callbackGamepadConnected && this._callbackGamepadConnected(c)
                    }
        }, b
    }();
    a.Gamepads = b;
    var c = function() {
        function a(a, b) {
            this.x = a, this.y = b
        }
        return a
    }();
    a.StickValues = c;
    var d = function() {
        function a(a, b, c) {
            this.id = a, this.index = b, this.browserGamepad = c, this.browserGamepad.axes.length >= 2 && (this._leftStick = {
                x: this.browserGamepad.axes[0],
                y: this.browserGamepad.axes[1]
            }), this.browserGamepad.axes.length >= 4 && (this._rightStick = {
                x: this.browserGamepad.axes[2],
                y: this.browserGamepad.axes[3]
            })
        }
        return a.prototype.onleftstickchanged = function(a) {
            this._onleftstickchanged = a
        }, a.prototype.onrightstickchanged = function(a) {
            this._onrightstickchanged = a
        }, Object.defineProperty(a.prototype, "leftStick", {
            get: function() {
                return this._leftStick
            },
            set: function(a) {
                !this._onleftstickchanged || this._leftStick.x === a.x && this._leftStick.y === a.y || this._onleftstickchanged(a), this._leftStick = a
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "rightStick", {
            get: function() {
                return this._rightStick
            },
            set: function(a) {
                !this._onrightstickchanged || this._rightStick.x === a.x && this._rightStick.y === a.y || this._onrightstickchanged(a), this._rightStick = a
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.update = function() {
            this._leftStick && (this.leftStick = {
                x: this.browserGamepad.axes[0],
                y: this.browserGamepad.axes[1]
            }), this._rightStick && (this.rightStick = {
                x: this.browserGamepad.axes[2],
                y: this.browserGamepad.axes[3]
            })
        }, a
    }();
    a.Gamepad = d;
    var e = function(a) {
        function b(b, c, d) {
            a.call(this, b, c, d), this.id = b, this.index = c, this.gamepad = d, this._buttons = new Array(d.buttons.length)
        }
        return __extends(b, a), b.prototype.onbuttondown = function(a) {
            this._onbuttondown = a
        }, b.prototype.onbuttonup = function(a) {
            this._onbuttonup = a
        }, b.prototype._setButtonValue = function(a, b, c) {
            return a !== b && (this._onbuttondown && 1 === a && this._onbuttondown(c), this._onbuttonup && 0 === a && this._onbuttonup(c)), a
        }, b.prototype.update = function() {
            a.prototype.update.call(this);
            for (var b = 0; b < this._buttons.length; b++) this._buttons[b] = this._setButtonValue(this.gamepad.buttons[b].value, this._buttons[b], b)
        }, b
    }(d);
    a.GenericPad = e,
        function(a) {
            a[a.A = 0] = "A", a[a.B = 1] = "B", a[a.X = 2] = "X", a[a.Y = 3] = "Y", a[a.Start = 4] = "Start", a[a.Back = 5] = "Back", a[a.LB = 6] = "LB", a[a.RB = 7] = "RB", a[a.LeftStick = 8] = "LeftStick", a[a.RightStick = 9] = "RightStick"
        }(a.Xbox360Button || (a.Xbox360Button = {}));
    a.Xbox360Button;
    ! function(a) {
        a[a.Up = 0] = "Up", a[a.Down = 1] = "Down", a[a.Left = 2] = "Left", a[a.Right = 3] = "Right"
    }(a.Xbox360Dpad || (a.Xbox360Dpad = {}));
    var f = (a.Xbox360Dpad, function(a) {
        function b() {
            a.apply(this, arguments), this._leftTrigger = 0, this._rightTrigger = 0, this._buttonA = 0, this._buttonB = 0, this._buttonX = 0, this._buttonY = 0, this._buttonBack = 0, this._buttonStart = 0, this._buttonLB = 0, this._buttonRB = 0, this._buttonLeftStick = 0, this._buttonRightStick = 0, this._dPadUp = 0, this._dPadDown = 0, this._dPadLeft = 0, this._dPadRight = 0
        }
        return __extends(b, a), b.prototype.onlefttriggerchanged = function(a) {
            this._onlefttriggerchanged = a
        }, b.prototype.onrighttriggerchanged = function(a) {
            this._onrighttriggerchanged = a
        }, Object.defineProperty(b.prototype, "leftTrigger", {
            get: function() {
                return this._leftTrigger
            },
            set: function(a) {
                this._onlefttriggerchanged && this._leftTrigger !== a && this._onlefttriggerchanged(a), this._leftTrigger = a
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "rightTrigger", {
            get: function() {
                return this._rightTrigger
            },
            set: function(a) {
                this._onrighttriggerchanged && this._rightTrigger !== a && this._onrighttriggerchanged(a), this._rightTrigger = a
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.onbuttondown = function(a) {
            this._onbuttondown = a
        }, b.prototype.onbuttonup = function(a) {
            this._onbuttonup = a
        }, b.prototype.ondpaddown = function(a) {
            this._ondpaddown = a
        }, b.prototype.ondpadup = function(a) {
            this._ondpadup = a
        }, b.prototype._setButtonValue = function(a, b, c) {
            return a !== b && (this._onbuttondown && 1 === a && this._onbuttondown(c), this._onbuttonup && 0 === a && this._onbuttonup(c)), a
        }, b.prototype._setDPadValue = function(a, b, c) {
            return a !== b && (this._ondpaddown && 1 === a && this._ondpaddown(c), this._ondpadup && 0 === a && this._ondpadup(c)), a
        }, Object.defineProperty(b.prototype, "buttonA", {
            get: function() {
                return this._buttonA
            },
            set: function(a) {
                this._buttonA = this._setButtonValue(a, this._buttonA, 0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonB", {
            get: function() {
                return this._buttonB
            },
            set: function(a) {
                this._buttonB = this._setButtonValue(a, this._buttonB, 1)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonX", {
            get: function() {
                return this._buttonX
            },
            set: function(a) {
                this._buttonX = this._setButtonValue(a, this._buttonX, 2)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonY", {
            get: function() {
                return this._buttonY
            },
            set: function(a) {
                this._buttonY = this._setButtonValue(a, this._buttonY, 3)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonStart", {
            get: function() {
                return this._buttonStart
            },
            set: function(a) {
                this._buttonStart = this._setButtonValue(a, this._buttonStart, 4)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonBack", {
            get: function() {
                return this._buttonBack
            },
            set: function(a) {
                this._buttonBack = this._setButtonValue(a, this._buttonBack, 5)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonLB", {
            get: function() {
                return this._buttonLB
            },
            set: function(a) {
                this._buttonLB = this._setButtonValue(a, this._buttonLB, 6)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonRB", {
            get: function() {
                return this._buttonRB
            },
            set: function(a) {
                this._buttonRB = this._setButtonValue(a, this._buttonRB, 7)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonLeftStick", {
            get: function() {
                return this._buttonLeftStick
            },
            set: function(a) {
                this._buttonLeftStick = this._setButtonValue(a, this._buttonLeftStick, 8)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "buttonRightStick", {
            get: function() {
                return this._buttonRightStick
            },
            set: function(a) {
                this._buttonRightStick = this._setButtonValue(a, this._buttonRightStick, 9)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "dPadUp", {
            get: function() {
                return this._dPadUp
            },
            set: function(a) {
                this._dPadUp = this._setDPadValue(a, this._dPadUp, 0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "dPadDown", {
            get: function() {
                return this._dPadDown
            },
            set: function(a) {
                this._dPadDown = this._setDPadValue(a, this._dPadDown, 1)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "dPadLeft", {
            get: function() {
                return this._dPadLeft
            },
            set: function(a) {
                this._dPadLeft = this._setDPadValue(a, this._dPadLeft, 2)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "dPadRight", {
            get: function() {
                return this._dPadRight
            },
            set: function(a) {
                this._dPadRight = this._setDPadValue(a, this._dPadRight, 3)
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.update = function() {
            a.prototype.update.call(this), this.buttonA = this.browserGamepad.buttons[0].value, this.buttonB = this.browserGamepad.buttons[1].value, this.buttonX = this.browserGamepad.buttons[2].value, this.buttonY = this.browserGamepad.buttons[3].value, this.buttonLB = this.browserGamepad.buttons[4].value, this.buttonRB = this.browserGamepad.buttons[5].value, this.leftTrigger = this.browserGamepad.buttons[6].value, this.rightTrigger = this.browserGamepad.buttons[7].value, this.buttonBack = this.browserGamepad.buttons[8].value, this.buttonStart = this.browserGamepad.buttons[9].value, this.buttonLeftStick = this.browserGamepad.buttons[10].value, this.buttonRightStick = this.browserGamepad.buttons[11].value, this.dPadUp = this.browserGamepad.buttons[12].value, this.dPadDown = this.browserGamepad.buttons[13].value, this.dPadLeft = this.browserGamepad.buttons[14].value, this.dPadRight = this.browserGamepad.buttons[15].value
        }, b
    }(d));
    a.Xbox360Pad = f
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            var f = this;
            b.call(this, c, d, e), this.angularSensibility = 200, this.moveSensibility = 75, this._gamepads = new a.Gamepads(function(a) {
                f._onNewGameConnected(a)
            })
        }
        return __extends(c, b), c.prototype._onNewGameConnected = function(a) {
            0 === a.index && (this._gamepad = a)
        }, c.prototype._checkInputs = function() {
            if (this._gamepad) {
                var b = this._gamepad.leftStick,
                    c = b.x / this.moveSensibility,
                    d = b.y / this.moveSensibility;
                b.x = Math.abs(c) > .005 ? 0 + c : 0, b.y = Math.abs(d) > .005 ? 0 + d : 0;
                var e = this._gamepad.rightStick,
                    f = e.x / this.angularSensibility,
                    g = e.y / this.angularSensibility;
                e.x = Math.abs(f) > .001 ? 0 + f : 0, e.y = Math.abs(g) > .001 ? 0 + g : 0;
                var h = a.Matrix.RotationYawPitchRoll(this.rotation.y, this.rotation.x, 0),
                    i = 50 * this._computeLocalCameraSpeed(),
                    j = a.Vector3.TransformCoordinates(new a.Vector3(b.x * i, 0, -b.y * i), h);
                this.cameraDirection = this.cameraDirection.add(j), this.cameraRotation = this.cameraRotation.add(new a.Vector2(e.y, e.x))
            }
        }, c.prototype.dispose = function() {
            this._gamepads.dispose(), b.prototype.dispose.call(this)
        }, c
    }(a.FreeCamera);
    a.GamepadCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            void 0 === e && (e = !1), b.call(this, c, d), this.color = new a.Color3(1, 1, 1), this.alpha = 1, this._indices = new Array, this._colorShader = new a.ShaderMaterial("colorShader", d, "color", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "color"],
                needAlphaBlending: !0
            })
        }
        return __extends(c, b), Object.defineProperty(c.prototype, "material", {
            get: function() {
                return this._colorShader
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "isPickable", {
            get: function() {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(c.prototype, "checkCollisions", {
            get: function() {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype._bind = function() {
            var b = this.getScene().getEngine(),
                c = this._geometry.getIndexBuffer();
            b.bindBuffers(this._geometry.getVertexBuffer(a.VertexBuffer.PositionKind).getBuffer(), c, [3], 12, this._colorShader.getEffect()), this._colorShader.setColor4("color", this.color.toColor4(this.alpha))
        }, c.prototype._draw = function(a) {
            if (this._geometry && this._geometry.getVertexBuffers() && this._geometry.getIndexBuffer()) {
                var b = this.getScene().getEngine();
                b.draw(!1, a.indexStart, a.indexCount)
            }
        }, c.prototype.intersects = function() {
            return null
        }, c.prototype.dispose = function(a) {
            this._colorShader.dispose(), b.prototype.dispose.call(this, a)
        }, c
    }(a.Mesh);
    a.LinesMesh = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a) {
            this._scene = a
        }
        return b.prototype.render = function(b, c, d) {
            var e = this;
            void 0 === d && (d = !1);
            var f = this._scene,
                g = this._scene.getEngine(),
                h = null !== g.getCaps().instancedArrays && null !== c.visibleInstances[b._id] && void 0 !== c.visibleInstances[b._id];
            if (this.isReady(b, h)) {
                var i = b.getRenderingMesh(),
                    j = b.getMaterial();
                if (g.enableEffect(this._effect), this._effect.setFloat("offset", d ? 0 : i.outlineWidth), this._effect.setColor4("color", d ? i.overlayColor : i.outlineColor, d ? i.overlayAlpha : 1), this._effect.setMatrix("viewProjection", f.getTransformMatrix()), i.useBones && this._effect.setMatrices("mBones", i.skeleton.getTransformMatrices()), i._bind(b, this._effect, a.Material.TriangleFillMode), j && j.needAlphaTesting()) {
                    var k = j.getAlphaTestTexture();
                    this._effect.setTexture("diffuseSampler", k), this._effect.setMatrix("diffuseMatrix", k.getTextureMatrix())
                }
                i._processRendering(b, this._effect, a.Material.TriangleFillMode, c, h, function(a, b) {
                    e._effect.setMatrix("world", b)
                })
            }
        }, b.prototype.isReady = function(b, c) {
            var d = [],
                e = [a.VertexBuffer.PositionKind, a.VertexBuffer.NormalKind],
                f = b.getMesh(),
                g = b.getMaterial();
            g && g.needAlphaTesting() && (d.push("#define ALPHATEST"), f.isVerticesDataPresent(a.VertexBuffer.UVKind) && (e.push(a.VertexBuffer.UVKind), d.push("#define UV1")), f.isVerticesDataPresent(a.VertexBuffer.UV2Kind) && (e.push(a.VertexBuffer.UV2Kind), d.push("#define UV2"))), f.useBones && (e.push(a.VertexBuffer.MatricesIndicesKind), e.push(a.VertexBuffer.MatricesWeightsKind), d.push("#define BONES"), d.push("#define BonesPerMesh " + (f.skeleton.bones.length + 1))), c && (d.push("#define INSTANCES"), e.push("world0"), e.push("world1"), e.push("world2"), e.push("world3"));
            var h = d.join("\n");
            return this._cachedDefines !== h && (this._cachedDefines = h, this._effect = this._scene.getEngine().createEffect("outline", e, ["world", "mBones", "viewProjection", "diffuseMatrix", "offset", "color"], ["diffuseSampler"], h)), this._effect.isReady()
        }, b
    }();
    a.OutlineRenderer = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(a, b, c, d) {
            this.name = a, this.meshesNames = b, this.rootUrl = c, this.sceneFilename = d, this.isCompleted = !1
        }
        return b.prototype.run = function(b, c, d) {
            var e = this;
            a.SceneLoader.ImportMesh(this.meshesNames, this.rootUrl, this.sceneFilename, b, function(a, b, d) {
                e.loadedMeshes = a, e.loadedParticleSystems = b, e.loadedSkeletons = d, e.isCompleted = !0, e.onSuccess && e.onSuccess(e), c()
            }, null, function() {
                e.onError && e.onError(e), d()
            })
        }, b
    }();
    a.MeshAssetTask = b;
    var c = function() {
        function b(a, b) {
            this.name = a, this.url = b, this.isCompleted = !1
        }
        return b.prototype.run = function(b, c, d) {
            var e = this;
            a.Tools.LoadFile(this.url, function(a) {
                e.text = a, e.isCompleted = !0, e.onSuccess && e.onSuccess(e), c()
            }, null, b.database, !1, function() {
                e.onError && e.onError(e), d()
            })
        }, b
    }();
    a.TextFileAssetTask = c;
    var d = function() {
        function b(a, b) {
            this.name = a, this.url = b, this.isCompleted = !1
        }
        return b.prototype.run = function(b, c, d) {
            var e = this;
            a.Tools.LoadFile(this.url, function(a) {
                e.data = a, e.isCompleted = !0, e.onSuccess && e.onSuccess(e), c()
            }, null, b.database, !0, function() {
                e.onError && e.onError(e), d()
            })
        }, b
    }();
    a.BinaryFileAssetTask = d;
    var e = function() {
        function a(a, b) {
            this.name = a, this.url = b, this.isCompleted = !1
        }
        return a.prototype.run = function(a, b, c) {
            var d = this,
                e = new Image;
            e.onload = function() {
                d.image = e, d.isCompleted = !0, d.onSuccess && d.onSuccess(d), b()
            }, e.onerror = function() {
                d.onError && d.onError(d), c()
            }, e.src = this.url
        }, a
    }();
    a.ImageAssetTask = e;
    var f = function() {
        function b(b, c, d, e, f) {
            void 0 === f && (f = a.Texture.TRILINEAR_SAMPLINGMODE), this.name = b, this.url = c, this.noMipmap = d, this.invertY = e, this.samplingMode = f, this.isCompleted = !1
        }
        return b.prototype.run = function(b, c, d) {
            var e = this,
                f = function() {
                    e.isCompleted = !0, e.onSuccess && e.onSuccess(e), c()
                };
            this.texture = new a.Texture(this.url, b, this.noMipmap, this.invertY, this.samplingMode, f, d)
        }, b
    }();
    a.TextureAssetTask = f;
    var g = function() {
        function g(a) {
            this._tasks = new Array, this._waitingTasksCount = 0, this.useDefaultLoadingScreen = !0, this._scene = a
        }
        return g.prototype.addMeshTask = function(a, c, d, e) {
            var f = new b(a, c, d, e);
            return this._tasks.push(f), f
        }, g.prototype.addTextFileTask = function(a, b) {
            var d = new c(a, b);
            return this._tasks.push(d), d
        }, g.prototype.addBinaryFileTask = function(a, b) {
            var c = new d(a, b);
            return this._tasks.push(c), c
        }, g.prototype.addImageTask = function(a, b) {
            var c = new e(a, b);
            return this._tasks.push(c), c
        }, g.prototype.addTextureTask = function(b, c, d, e, g) {
            void 0 === g && (g = a.Texture.TRILINEAR_SAMPLINGMODE);
            var h = new f(b, c, d, e, g);
            return this._tasks.push(h), h
        }, g.prototype._decreaseWaitingTasksCount = function() {
            this._waitingTasksCount--, 0 === this._waitingTasksCount && (this.onFinish && this.onFinish(this._tasks), this._scene.getEngine().hideLoadingUI())
        }, g.prototype._runTask = function(a) {
            var b = this;
            a.run(this._scene, function() {
                b.onTaskSuccess && b.onTaskSuccess(a), b._decreaseWaitingTasksCount()
            }, function() {
                b.onTaskError && b.onTaskError(a), b._decreaseWaitingTasksCount()
            })
        }, g.prototype.reset = function() {
            return this._tasks = new Array, this
        }, g.prototype.load = function() {
            if (this._waitingTasksCount = this._tasks.length, 0 === this._waitingTasksCount) return this.onFinish && this.onFinish(this._tasks), this;
            this.useDefaultLoadingScreen && this._scene.getEngine().displayLoadingUI();
            for (var a = 0; a < this._tasks.length; a++) {
                var b = this._tasks[a];
                this._runTask(b)
            }
            return this
        }, g
    }();
    a.AssetsManager = g
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
        function b(b, c, d) {
            a.call(this, b, c, d), this._alpha = 0, this._beta = 0, this._gamma = 0
        }
        return __extends(b, a), b.prototype._onOrientationEvent = function(a) {
            this._alpha = 0 | +a.alpha, this._beta = 0 | +a.beta, this._gamma = 0 | +a.gamma, this._gamma = this._gamma < 0 ? 90 + this._gamma : 270 - this._gamma, this.rotation.x = this._gamma / 180 * Math.PI, this.rotation.y = -this._alpha / 180 * Math.PI, this.rotation.z = this._beta / 180 * Math.PI
        }, b
    }(a.OculusCamera);
    a.VRDeviceOrientationCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            b.call(this, c, d, e), this._hmdDevice = null, this._sensorDevice = null, this._cacheState = null, this._cacheQuaternion = new a.Quaternion, this._cacheRotation = a.Vector3.Zero(), this._vrEnabled = !1, this._getWebVRDevices = this._getWebVRDevices.bind(this)
        }
        return __extends(c, b), c.prototype._getWebVRDevices = function(a) {
            var b = a.length,
                c = 0;
            for (this._sensorDevice = null, this._hmdDevice = null; b > c && null === this._hmdDevice;) a[c] instanceof HMDVRDevice && (this._hmdDevice = a[c]), c++;
            for (c = 0; b > c && null === this._sensorDevice;) a[c] instanceof PositionSensorVRDevice && (!this._hmdDevice || a[c].hardwareUnitId === this._hmdDevice.hardwareUnitId) && (this._sensorDevice = a[c]), c++;
            this._vrEnabled = this._sensorDevice && this._hmdDevice ? !0 : !1
        }, c.prototype._update = function() {
            this._vrEnabled && (this._cacheState = this._sensorDevice.getState(), this._cacheQuaternion.copyFromFloats(this._cacheState.orientation.x, this._cacheState.orientation.y, this._cacheState.orientation.z, this._cacheState.orientation.w), this._cacheQuaternion.toEulerAnglesToRef(this._cacheRotation), this.rotation.x = -this._cacheRotation.z, this.rotation.y = -this._cacheRotation.y, this.rotation.z = this._cacheRotation.x), b.prototype._update.call(this)
        }, c.prototype.attachControl = function(a, c) {
            b.prototype.attachControl.call(this, a, c), navigator.getVRDevices ? navigator.getVRDevices().then(this._getWebVRDevices) : navigator.mozGetVRDevices && navigator.mozGetVRDevices(this._getWebVRDevices)
        }, c.prototype.detachControl = function(a) {
            b.prototype.detachControl.call(this, a), this._vrEnabled = !1
        }, c
    }(a.OculusCamera);
    a.WebVRCamera = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function() {
        function a(a) {
            void 0 === a && (a = 0), this.priority = a, this.apply = function() {
                return !0
            }
        }
        return a
    }();
    a.SceneOptimization = b;
    var c = function(a) {
        function b(b, c) {
            var d = this;
            void 0 === b && (b = 0), void 0 === c && (c = 1024), a.call(this, b), this.priority = b, this.maximumSize = c, this.apply = function(a) {
                for (var b = !0, c = 0; c < a.textures.length; c++) {
                    var e = a.textures[c];
                    if (e.canRescale) {
                        var f = e.getSize(),
                            g = Math.max(f.width, f.height);
                        g > d.maximumSize && (e.scale(.5), b = !1)
                    }
                }
                return b
            }
        }
        return __extends(b, a), b
    }(b);
    a.TextureOptimization = c;
    var d = function(a) {
        function b(b, c) {
            var d = this;
            void 0 === b && (b = 0), void 0 === c && (c = 2), a.call(this, b), this.priority = b, this.maximumScale = c, this._currentScale = 1, this.apply = function(a) {
                return d._currentScale++, a.getEngine().setHardwareScalingLevel(d._currentScale), d._currentScale >= d.maximumScale
            }
        }
        return __extends(b, a), b
    }(b);
    a.HardwareScalingOptimization = d;
    var e = function(a) {
        function b() {
            a.apply(this, arguments), this.apply = function(a) {
                return a.shadowsEnabled = !1, !0
            }
        }
        return __extends(b, a), b
    }(b);
    a.ShadowsOptimization = e;
    var f = function(a) {
        function b() {
            a.apply(this, arguments), this.apply = function(a) {
                return a.postProcessesEnabled = !1, !0
            }
        }
        return __extends(b, a), b
    }(b);
    a.PostProcessesOptimization = f;
    var g = function(a) {
        function b() {
            a.apply(this, arguments), this.apply = function(a) {
                return a.lensFlaresEnabled = !1, !0
            }
        }
        return __extends(b, a), b
    }(b);
    a.LensFlaresOptimization = g;
    var h = function(a) {
        function b() {
            a.apply(this, arguments), this.apply = function(a) {
                return a.particlesEnabled = !1, !0
            }
        }
        return __extends(b, a), b
    }(b);
    a.ParticlesOptimization = h;
    var i = function(a) {
        function b() {
            a.apply(this, arguments), this.apply = function(a) {
                return a.renderTargetsEnabled = !1, !0
            }
        }
        return __extends(b, a), b
    }(b);
    a.RenderTargetsOptimization = i;
    var j = function(b) {
        function c() {
            var c = this;
            b.apply(this, arguments), this._canBeMerged = function(b) {
                if (!(b instanceof a.Mesh)) return !1;
                var c = b;
                return c.isVisible && c.isEnabled() ? c.instances.length > 0 ? !1 : c.skeleton || c.hasLODLevels ? !1 : !0 : !1
            }, this.apply = function(b) {
                for (var d = b.meshes.slice(0), e = d.length, f = 0; e > f; f++) {
                    var g = new Array,
                        h = d[f];
                    if (c._canBeMerged(h)) {
                        g.push(h);
                        for (var i = f + 1; e > i; i++) {
                            var j = d[i];
                            c._canBeMerged(j) && j.material === h.material && j.checkCollisions === h.checkCollisions && (g.push(j), e--, d.splice(i, 1), i--)
                        }
                        g.length < 2 || a.Mesh.MergeMeshes(g)
                    }
                }
                return !0
            }
        }
        return __extends(c, b), c
    }(b);
    a.MergeMeshesOptimization = j;
    var k = function() {
        function a(a, b) {
            void 0 === a && (a = 60), void 0 === b && (b = 2e3), this.targetFrameRate = a, this.trackerDuration = b, this.optimizations = new Array
        }
        return a.LowDegradationAllowed = function(b) {
            var d = new a(b),
                i = 0;
            return d.optimizations.push(new j(i)), d.optimizations.push(new e(i)), d.optimizations.push(new g(i)), i++, d.optimizations.push(new f(i)), d.optimizations.push(new h(i)), i++, d.optimizations.push(new c(i, 1024)), d
        }, a.ModerateDegradationAllowed = function(b) {
            var k = new a(b),
                l = 0;
            return k.optimizations.push(new j(l)), k.optimizations.push(new e(l)), k.optimizations.push(new g(l)), l++, k.optimizations.push(new f(l)), k.optimizations.push(new h(l)), l++, k.optimizations.push(new c(l, 512)), l++, k.optimizations.push(new i(l)), l++, k.optimizations.push(new d(l, 2)), k
        }, a.HighDegradationAllowed = function(b) {
            var k = new a(b),
                l = 0;
            return k.optimizations.push(new j(l)), k.optimizations.push(new e(l)), k.optimizations.push(new g(l)), l++, k.optimizations.push(new f(l)), k.optimizations.push(new h(l)), l++, k.optimizations.push(new c(l, 256)), l++, k.optimizations.push(new i(l)), l++, k.optimizations.push(new d(l, 4)), k
        }, a
    }();
    a.SceneOptimizerOptions = k;
    var l = function() {
        function a() {}
        return a._CheckCurrentState = function(b, c, d, e, f) {
            if (b.getEngine().getFps() >= c.targetFrameRate) return void(e && e());
            for (var g = !0, h = !0, i = 0; i < c.optimizations.length; i++) {
                var j = c.optimizations[i];
                j.priority === d && (h = !1, g = g && j.apply(b))
            }
            return h ? void(f && f()) : (g && d++, void b.executeWhenReady(function() {
                setTimeout(function() {
                    a._CheckCurrentState(b, c, d, e, f)
                }, c.trackerDuration)
            }))
        }, a.OptimizeAsync = function(b, c, d, e) {
            c || (c = k.ModerateDegradationAllowed()), b.executeWhenReady(function() {
                setTimeout(function() {
                    a._CheckCurrentState(b, c, 0, d, e)
                }, c.trackerDuration)
            })
        }, a
    }();
    a.SceneOptimizer = l
}(BABYLON || (BABYLON = {})),
function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a(a, b) {
                this.distance = a, this.mesh = b
            }
            return a
        }();
        a.MeshLODLevel = b
    }(b = a.Internals || (a.Internals = {}))
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b() {
            this.audioContext = null, this.canUseWebAudio = !1, this.WarnedWebAudioUnsupported = !1;
            try {
                "undefined" != typeof AudioContext ? (this.audioContext = new AudioContext, this.canUseWebAudio = !0) : "undefined" != typeof webkitAudioContext && (this.audioContext = new webkitAudioContext, this.canUseWebAudio = !0)
            } catch (b) {
                this.canUseWebAudio = !1, a.Tools.Error("Web Audio: " + b.message)
            }
            this.canUseWebAudio && (this.masterGain = this.audioContext.createGain(), this.masterGain.gain.value = 1, this.masterGain.connect(this.audioContext.destination))
        }
        return b.prototype.dispose = function() {
            this.canUseWebAudio && (this._connectedAnalyser && (this._connectedAnalyser.stopDebugCanvas(), this._connectedAnalyser.dispose(), this.masterGain.disconnect(), this.masterGain.connect(this.audioContext.destination), this._connectedAnalyser = null), this.masterGain.gain.value = 1), this.WarnedWebAudioUnsupported = !1
        }, b.prototype.getGlobalVolume = function() {
            return this.canUseWebAudio ? this.masterGain.gain.value : -1
        }, b.prototype.setGlobalVolume = function(a) {
            this.canUseWebAudio && (this.masterGain.gain.value = a)
        }, b.prototype.connectToAnalyser = function(a) {
            this._connectedAnalyser && this._connectedAnalyser.stopDebugCanvas(), this._connectedAnalyser = a, this.canUseWebAudio && (this.masterGain.disconnect(), this._connectedAnalyser.connectAudioNodes(this.masterGain, this.audioContext.destination))
        }, b
    }();
    a.AudioEngine = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c, d, e, f) {
            var g = this;
            this.autoplay = !1, this.loop = !1, this.useCustomAttenuation = !1, this.spatialSound = !1, this.refDistance = 1, this.rolloffFactor = 1, this.maxDistance = 100, this.distanceModel = "linear", this.panningModel = "HRTF", this._playbackRate = 1, this._startTime = 0, this._startOffset = 0, this._position = a.Vector3.Zero(), this._localDirection = new a.Vector3(1, 0, 0), this._volume = 1, this._isLoaded = !1, this._isReadyToPlay = !1, this._isPlaying = !1, this._isDirectional = !1, this._coneInnerAngle = 360, this._coneOuterAngle = 360, this._coneOuterGain = 0, this.name = b, this._scene = d, this._readyToPlayCallback = e, this._customAttenuationFunction = function(a, b, c) {
                return c > b ? a * (1 - b / c) : 0
            }, f && (this.autoplay = f.autoplay || !1, this.loop = f.loop || !1, void 0 !== f.volume && (this._volume = f.volume), this.spatialSound = f.spatialSound || !1, this.maxDistance = f.maxDistance || 100, this.useCustomAttenuation = f.useCustomAttenuation || !1, this.rolloffFactor = f.rolloffFactor || 1, this.refDistance = f.refDistance || 1, this.distanceModel = f.distanceModel || "linear", this.panningModel = f.panningModel || "HRTF", this._playbackRate = f.playbackRate || 1), a.Engine.audioEngine.canUseWebAudio ? (this._soundGain = a.Engine.audioEngine.audioContext.createGain(), this._soundGain.gain.value = this._volume, this._inputAudioNode = this._soundGain, this._ouputAudioNode = this._soundGain, this.spatialSound && this._createSpatialParameters(), this._scene.mainSoundTrack.AddSound(this), c && ("string" == typeof c ? a.Tools.LoadFile(c, function(a) {
                g._soundLoaded(a)
            }, null, null, !0) : c instanceof ArrayBuffer ? this._soundLoaded(c) : a.Tools.Error("Parameter must be a URL to the sound or an ArrayBuffer of the sound."))) : (this._scene.mainSoundTrack.AddSound(this), a.Engine.audioEngine.WarnedWebAudioUnsupported || (a.Tools.Error("Web Audio is not supported by your browser."), a.Engine.audioEngine.WarnedWebAudioUnsupported = !0))
        }
        return b.prototype.dispose = function() {
            a.Engine.audioEngine.canUseWebAudio && this._isReadyToPlay && (this._isPlaying && this.stop(), this._isReadyToPlay = !1, -1 === this.soundTrackId ? this._scene.mainSoundTrack.RemoveSound(this) : this._scene.soundTracks[this.soundTrackId].RemoveSound(this), this._soundGain.disconnect(), this._soundSource.disconnect(), this._soundPanner && (this._soundPanner.disconnect(), this._soundPanner = null), this._audioBuffer = null, this._soundGain = null, this._soundSource = null, this._connectedMesh && (this._connectedMesh.unregisterAfterWorldMatrixUpdate(this._registerFunc), this._connectedMesh = null))
        }, b.prototype._soundLoaded = function(b) {
            var c = this;
            this._isLoaded = !0, a.Engine.audioEngine.audioContext.decodeAudioData(b, function(a) {
                c._audioBuffer = a, c._isReadyToPlay = !0, c.autoplay && c.play(), c._readyToPlayCallback && c._readyToPlayCallback()
            }, function(b) {
                a.Tools.Error("Error while decoding audio data: " + b.err)
            })
        }, b.prototype.setAudioBuffer = function(b) {
            a.Engine.audioEngine.canUseWebAudio && (this._audioBuffer = b, this._isReadyToPlay = !0)
        }, b.prototype.updateOptions = function(a) {
            a && (this.loop = a.loop || this.loop, this.maxDistance = a.maxDistance || this.maxDistance, this.useCustomAttenuation = a.useCustomAttenuation || this.useCustomAttenuation, this.rolloffFactor = a.rolloffFactor || this.rolloffFactor, this.refDistance = a.refDistance || this.refDistance, this.distanceModel = a.distanceModel || this.distanceModel, this.panningModel = a.panningModel || this.panningModel, this._playbackRate = a.playbackRate || this._playbackRate)
        }, b.prototype._createSpatialParameters = function() {
            a.Engine.audioEngine.canUseWebAudio && (this._soundPanner = a.Engine.audioEngine.audioContext.createPanner(), this.useCustomAttenuation ? (this._soundPanner.distanceModel = "linear", this._soundPanner.maxDistance = Number.MAX_VALUE, this._soundPanner.refDistance = 1, this._soundPanner.rolloffFactor = 1, this._soundPanner.panningModel = "HRTF") : (this._soundPanner.distanceModel = this.distanceModel, this._soundPanner.maxDistance = this.maxDistance, this._soundPanner.refDistance = this.refDistance, this._soundPanner.rolloffFactor = this.rolloffFactor, this._soundPanner.panningModel = this.panningModel), this._soundPanner.connect(this._ouputAudioNode), this._inputAudioNode = this._soundPanner)
        }, b.prototype.connectToSoundTrackAudioNode = function(b) {
            a.Engine.audioEngine.canUseWebAudio && (this._ouputAudioNode.disconnect(), this._ouputAudioNode.connect(b))
        }, b.prototype.setDirectionalCone = function(b, c, d) {
            return b > c ? void a.Tools.Error("setDirectionalCone(): outer angle of the cone must be superior or equal to the inner angle.") : (this._coneInnerAngle = b, this._coneOuterAngle = c, this._coneOuterGain = d, this._isDirectional = !0, void(this._isPlaying && this.loop && (this.stop(), this.play())))
        }, b.prototype.setPosition = function(a) {
            this._position = a, this._isPlaying && this.spatialSound && this._soundPanner.setPosition(this._position.x, this._position.y, this._position.z)
        }, b.prototype.setLocalDirectionToMesh = function(a) {
            this._localDirection = a, this._connectedMesh && this._isPlaying && this._updateDirection()
        }, b.prototype._updateDirection = function() {
            var b = this._connectedMesh.getWorldMatrix(),
                c = a.Vector3.TransformNormal(this._localDirection, b);
            c.normalize(), this._soundPanner.setOrientation(c.x, c.y, c.z)
        }, b.prototype.updateDistanceFromListener = function() {
            if (this._connectedMesh && this.useCustomAttenuation) {
                var a = this._connectedMesh.getDistanceToCamera(this._scene.activeCamera);
                this._soundGain.gain.value = this._customAttenuationFunction(this._volume, a, this.maxDistance, this.refDistance, this.rolloffFactor)
            }
        }, b.prototype.setAttenuationFunction = function(a) {
            this._customAttenuationFunction = a
        }, b.prototype.play = function(b) {
            if (this._isReadyToPlay) try {
                var c = b ? a.Engine.audioEngine.audioContext.currentTime + b : 0;
                this._soundSource || this.spatialSound && (this._soundPanner.setPosition(this._position.x, this._position.y, this._position.z), this._isDirectional && (this._soundPanner.coneInnerAngle = this._coneInnerAngle, this._soundPanner.coneOuterAngle = this._coneOuterAngle, this._soundPanner.coneOuterGain = this._coneOuterGain, this._connectedMesh ? this._updateDirection() : this._soundPanner.setOrientation(this._localDirection.x, this._localDirection.y, this._localDirection.z))), this._soundSource = a.Engine.audioEngine.audioContext.createBufferSource(), this._soundSource.buffer = this._audioBuffer, this._soundSource.connect(this._inputAudioNode), this._soundSource.loop = this.loop, this._soundSource.playbackRate.value = this._playbackRate, this._startTime = c, this.onended && (this._soundSource.onended = this.onended), this._soundSource.start(c, this._startOffset % this._soundSource.buffer.duration), this._isPlaying = !0
            } catch (d) {
                a.Tools.Error("Error while trying to play audio: " + this.name + ", " + d.message)
            }
        }, b.prototype.stop = function(b) {
            if (this._isPlaying) {
                var c = b ? a.Engine.audioEngine.audioContext.currentTime + b : 0;
                this._soundSource.stop(c), this._isPlaying = !1
            }
        }, b.prototype.pause = function() {
            this._isPlaying && (this._soundSource.stop(0), this._startOffset += a.Engine.audioEngine.audioContext.currentTime - this._startTime)
        }, b.prototype.setVolume = function(b, c) {
            a.Engine.audioEngine.canUseWebAudio && (c ? (this._soundGain.gain.linearRampToValueAtTime(this._volume, a.Engine.audioEngine.audioContext.currentTime), this._soundGain.gain.linearRampToValueAtTime(b, c)) : this._soundGain.gain.value = b), this._volume = b
        }, b.prototype.setPlaybackRate = function(a) {
            this._playbackRate = a, this._isPlaying && (this._soundSource.playbackRate.value = this._playbackRate)
        }, b.prototype.getVolume = function() {
            return this._volume
        }, b.prototype.attachToMesh = function(a) {
            var b = this;
            this._connectedMesh = a, this.spatialSound || (this._createSpatialParameters(), this.spatialSound = !0, this._isPlaying && this.loop && (this.stop(), this.play())), this._onRegisterAfterWorldMatrixUpdate(this._connectedMesh), this._registerFunc = function(a) {
                return b._onRegisterAfterWorldMatrixUpdate(a)
            }, a.registerAfterWorldMatrixUpdate(this._registerFunc)
        }, b.prototype._onRegisterAfterWorldMatrixUpdate = function(a) {
            this.setPosition(a.getBoundingInfo().boundingSphere.centerWorld), this._isDirectional && this._isPlaying && this._updateDirection()
        }, b
    }();
    a.Sound = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c) {
            this.id = -1, this._isMainTrack = !1, this._scene = b, this._audioEngine = a.Engine.audioEngine, this.soundCollection = new Array, this._audioEngine.canUseWebAudio && (this._trackGain = this._audioEngine.audioContext.createGain(), this._trackGain.connect(this._audioEngine.masterGain), c && (c.volume && (this._trackGain.gain.value = c.volume), c.mainTrack && (this._isMainTrack = c.mainTrack))), this._isMainTrack || (this._scene.soundTracks.push(this), this.id = this._scene.soundTracks.length - 1)
        }
        return b.prototype.dispose = function() {
            if (this._audioEngine.canUseWebAudio) {
                for (this._connectedAnalyser && this._connectedAnalyser.stopDebugCanvas(); this.soundCollection.length;) this.soundCollection[0].dispose();
                this._trackGain.disconnect(), this._trackGain = null
            }
        }, b.prototype.AddSound = function(b) {
            a.Engine.audioEngine.canUseWebAudio && b.connectToSoundTrackAudioNode(this._trackGain), b.soundTrackId && (-1 === b.soundTrackId ? this._scene.mainSoundTrack.RemoveSound(b) : this._scene.soundTracks[b.soundTrackId].RemoveSound(b)), this.soundCollection.push(b), b.soundTrackId = this.id
        }, b.prototype.RemoveSound = function(a) {
            var b = this.soundCollection.indexOf(a); - 1 !== b && this.soundCollection.splice(b, 1)
        }, b.prototype.setVolume = function(a) {
            this._audioEngine.canUseWebAudio && (this._trackGain.gain.value = a)
        }, b.prototype.connectToAnalyser = function(a) {
            this._connectedAnalyser && this._connectedAnalyser.stopDebugCanvas(), this._connectedAnalyser = a, this._audioEngine.canUseWebAudio && (this._trackGain.disconnect(), this._connectedAnalyser.connectAudioNodes(this._trackGain, this._audioEngine.masterGain))
        }, b
    }();
    a.SoundTrack = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b) {
            var c = this;
            this._enabled = !1, this._labelsEnabled = !1, this._displayStatistics = !0, this._displayTree = !1, this._displayLogs = !1, this._identityMatrix = a.Matrix.Identity(), this.axisRatio = .02, this.accentColor = "orange", this._scene = b, this._syncPositions = function() {
                var a = c._scene.getEngine(),
                    b = a.getRenderingCanvasClientRect();
                c._showUI && (c._statsDiv.style.left = b.width - 410 + "px", c._statsDiv.style.top = b.height - 290 + "px", c._statsDiv.style.width = "400px", c._statsDiv.style.height = "auto", c._statsSubsetDiv.style.maxHeight = "240px", c._optionsDiv.style.left = "0px", c._optionsDiv.style.top = "10px", c._optionsDiv.style.width = "200px", c._optionsDiv.style.height = "auto", c._optionsSubsetDiv.style.maxHeight = b.height - 225 + "px", c._logDiv.style.left = "0px", c._logDiv.style.top = b.height - 170 + "px", c._logDiv.style.width = "600px", c._logDiv.style.height = "160px", c._treeDiv.style.left = b.width - 310 + "px", c._treeDiv.style.top = "10px", c._treeDiv.style.width = "300px", c._treeDiv.style.height = "auto", c._treeSubsetDiv.style.maxHeight = b.height - 340 + "px"), c._globalDiv.style.left = b.left + "px", c._globalDiv.style.top = b.top + "px", c._drawingCanvas.style.left = "0px", c._drawingCanvas.style.top = "0px", c._drawingCanvas.style.width = a.getRenderWidth() + "px", c._drawingCanvas.style.height = a.getRenderHeight() + "px";
                var d = window.devicePixelRatio || 1,
                    e = c._drawingContext,
                    f = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
                c._ratio = d / f, c._drawingCanvas.width = a.getRenderWidth() * c._ratio, c._drawingCanvas.height = a.getRenderHeight() * c._ratio
            }, this._onCanvasClick = function(a) {
                c._clickPosition = {
                    x: a.clientX * c._ratio,
                    y: a.clientY * c._ratio
                }
            }, this._syncData = function() {
                if (c._showUI && (c._displayStatistics ? (c._displayStats(), c._statsDiv.style.display = "") : c._statsDiv.style.display = "none", c._logDiv.style.display = c._displayLogs ? "" : "none", c._displayTree ? (c._treeDiv.style.display = "", c._needToRefreshMeshesTree && (c._needToRefreshMeshesTree = !1, c._refreshMeshesTreeContent())) : c._treeDiv.style.display = "none"), c._labelsEnabled || !c._showUI) {
                    c._drawingContext.clearRect(0, 0, c._drawingCanvas.width, c._drawingCanvas.height);
                    for (var b = c._scene.getEngine(), d = c._scene.activeCamera.viewport, e = d.toGlobal(b), f = c._scene.getActiveMeshes(), g = 0; g < f.length; g++) {
                        var h = f.data[g],
                            i = h.getBoundingInfo().boundingSphere.center,
                            j = a.Vector3.Project(i, h.getWorldMatrix(), c._scene.getTransformMatrix(), e);
                        (h.renderOverlay || c.shouldDisplayAxis && c.shouldDisplayAxis(h)) && c._renderAxis(j, h, e), (!c.shouldDisplayLabel || c.shouldDisplayLabel(h)) && c._renderLabel(h.name, j, 12, function() {
                            h.renderOverlay = !h.renderOverlay
                        }, function() {
                            return h.renderOverlay ? "red" : "black"
                        })
                    }
                    var k = c._scene.cameras;
                    for (g = 0; g < k.length; g++) {
                        var l = k[g];
                        l !== c._scene.activeCamera && (j = a.Vector3.Project(a.Vector3.Zero(), l.getWorldMatrix(), c._scene.getTransformMatrix(), e), (!c.shouldDisplayLabel || c.shouldDisplayLabel(l)) && c._renderLabel(l.name, j, 12, function() {
                            c._scene.activeCamera.detachControl(b.getRenderingCanvas()), c._scene.activeCamera = l, c._scene.activeCamera.attachControl(b.getRenderingCanvas())
                        }, function() {
                            return "purple"
                        }))
                    }
                    var m = c._scene.lights;
                    for (g = 0; g < m.length; g++) {
                        var n = m[g];
                        n.position && (j = a.Vector3.Project(n.getAbsolutePosition(), c._identityMatrix, c._scene.getTransformMatrix(), e), (!c.shouldDisplayLabel || c.shouldDisplayLabel(n)) && c._renderLabel(n.name, j, -20, function() {
                            n.setEnabled(!n.isEnabled())
                        }, function() {
                            return n.isEnabled() ? "orange" : "gray"
                        }))
                    }
                }
                c._clickPosition = void 0
            }
        }
        return b.prototype._refreshMeshesTreeContent = function() {
            for (; this._treeSubsetDiv.hasChildNodes();) this._treeSubsetDiv.removeChild(this._treeSubsetDiv.lastChild);
            var a = this._scene.meshes.slice(0, this._scene.meshes.length);
            a.sort(function(a, b) {
                return a.name === b.name ? 0 : a.name > b.name ? 1 : -1
            });
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c.isEnabled() && this._generateAdvancedCheckBox(this._treeSubsetDiv, c.name, c.getTotalVertices() + " verts", c.isVisible, function(a, b) {
                    b.isVisible = a.checked
                }, c)
            }
        }, b.prototype._renderSingleAxis = function(a, b, c, d, e) {
            this._drawingContext.beginPath(), this._drawingContext.moveTo(a.x, a.y), this._drawingContext.lineTo(b.x, b.y), this._drawingContext.strokeStyle = e, this._drawingContext.lineWidth = 4, this._drawingContext.stroke(), this._drawingContext.font = "normal 14px Segoe UI", this._drawingContext.fillStyle = e, this._drawingContext.fillText(d, c.x, c.y)
        }, b.prototype._renderAxis = function(b, c, d) {
            var e = c.getBoundingInfo().boundingSphere.center,
                f = c.getWorldMatrix(),
                g = a.Vector3.UnprojectFromTransform(b.add(new a.Vector3(this._drawingCanvas.width * this.axisRatio, 0, 0)), d.width, d.height, f, this._scene.getTransformMatrix()),
                h = g.subtract(e).length(),
                i = a.Vector3.Project(e.add(new a.Vector3(h, 0, 0)), f, this._scene.getTransformMatrix(), d),
                j = a.Vector3.Project(e.add(new a.Vector3(1.5 * h, 0, 0)), f, this._scene.getTransformMatrix(), d);
            this._renderSingleAxis(b, i, j, "x", "#FF0000");
            var k = a.Vector3.Project(e.add(new a.Vector3(0, h, 0)), f, this._scene.getTransformMatrix(), d),
                l = a.Vector3.Project(e.add(new a.Vector3(0, 1.5 * h, 0)), f, this._scene.getTransformMatrix(), d);
            this._renderSingleAxis(b, k, l, "y", "#00FF00");
            var m = a.Vector3.Project(e.add(new a.Vector3(0, 0, h)), f, this._scene.getTransformMatrix(), d),
                n = a.Vector3.Project(e.add(new a.Vector3(0, 0, 1.5 * h)), f, this._scene.getTransformMatrix(), d);
            this._renderSingleAxis(b, m, n, "z", "#0000FF")
        }, b.prototype._renderLabel = function(a, b, c, d, e) {
            if (b.z > 0 && b.z < 1) {
                this._drawingContext.font = "normal 12px Segoe UI";
                var f = this._drawingContext.measureText(a),
                    g = b.x - f.width / 2,
                    h = b.y;
                this._isClickInsideRect(g - 5, h - c - 12, f.width + 10, 17) && d(), this._drawingContext.beginPath(), this._drawingContext.rect(g - 5, h - c - 12, f.width + 10, 17), this._drawingContext.fillStyle = e(), this._drawingContext.globalAlpha = .5, this._drawingContext.fill(), this._drawingContext.globalAlpha = 1, this._drawingContext.strokeStyle = "#FFFFFF", this._drawingContext.lineWidth = 1, this._drawingContext.stroke(), this._drawingContext.fillStyle = "#FFFFFF", this._drawingContext.fillText(a, g, h - c), this._drawingContext.beginPath(), this._drawingContext.arc(b.x, h, 5, 0, 2 * Math.PI, !1), this._drawingContext.fill()
            }
        }, b.prototype._isClickInsideRect = function(a, b, c, d) {
            return this._clickPosition ? this._clickPosition.x < a || this._clickPosition.x > a + c ? !1 : this._clickPosition.y < b || this._clickPosition.y > b + d ? !1 : !0 : !1
        }, b.prototype.isVisible = function() {
            return this._enabled
        }, b.prototype.hide = function() {
            if (this._enabled) {
                this._enabled = !1;
                var b = this._scene.getEngine();
                this._scene.unregisterAfterRender(this._syncData), document.body.removeChild(this._globalDiv), window.removeEventListener("resize", this._syncPositions), this._scene.forceShowBoundingBoxes = !1, this._scene.forceWireframe = !1, a.StandardMaterial.DiffuseTextureEnabled = !0, a.StandardMaterial.AmbientTextureEnabled = !0, a.StandardMaterial.SpecularTextureEnabled = !0, a.StandardMaterial.EmissiveTextureEnabled = !0, a.StandardMaterial.BumpTextureEnabled = !0, a.StandardMaterial.OpacityTextureEnabled = !0, a.StandardMaterial.ReflectionTextureEnabled = !0, this._scene.shadowsEnabled = !0, this._scene.particlesEnabled = !0, this._scene.postProcessesEnabled = !0, this._scene.collisionsEnabled = !0, this._scene.lightsEnabled = !0, this._scene.texturesEnabled = !0, this._scene.lensFlaresEnabled = !0, this._scene.proceduralTexturesEnabled = !0, this._scene.renderTargetsEnabled = !0, b.getRenderingCanvas().removeEventListener("click", this._onCanvasClick)
            }
        }, b.prototype.show = function(a) {
            if (void 0 === a && (a = !0), !this._enabled) {
                this._enabled = !0, this._showUI = a;
                var b = this._scene.getEngine();
                this._globalDiv = document.createElement("div"), document.body.appendChild(this._globalDiv), this._generateDOMelements(), window.addEventListener("resize", this._syncPositions), b.getRenderingCanvas().addEventListener("click", this._onCanvasClick), this._syncPositions(), this._scene.registerAfterRender(this._syncData)
            }
        }, b.prototype._clearLabels = function() {
            this._drawingContext.clearRect(0, 0, this._drawingCanvas.width, this._drawingCanvas.height);
            for (var a = 0; a < this._scene.meshes.length; a++) {
                var b = this._scene.meshes[a];
                b.renderOverlay = !1
            }
        }, b.prototype._generateheader = function(a, b) {
            var c = document.createElement("div");
            c.innerHTML = b + "&nbsp;", c.style.textAlign = "right", c.style.width = "100%", c.style.color = "white", c.style.backgroundColor = "Black", c.style.padding = "5px 5px 4px 0px", c.style.marginLeft = "-5px", c.style.fontWeight = "bold", a.appendChild(c)
        }, b.prototype._generateTexBox = function(a, b, c) {
            var d = document.createElement("label");
            d.innerHTML = b, d.style.color = c, a.appendChild(d), a.appendChild(document.createElement("br"))
        }, b.prototype._generateAdvancedCheckBox = function(a, b, c, d, e, f) {
            void 0 === f && (f = null);
            var g = document.createElement("label"),
                h = document.createElement("input");
            h.type = "checkbox", h.checked = d, h.addEventListener("change", function(a) {
                e(a.target, f)
            }), g.appendChild(h);
            var i = document.createElement("span"),
                j = document.createElement("span"),
                k = document.createElement("span");
            k.style.cssFloat = "right", j.innerHTML = b, k.innerHTML = c, k.style.fontSize = "12px", k.style.maxWidth = "200px", i.appendChild(j), i.appendChild(k), g.appendChild(i), a.appendChild(g), a.appendChild(document.createElement("br"))
        }, b.prototype._generateCheckBox = function(a, b, c, d, e) {
            void 0 === e && (e = null);
            var f = document.createElement("label"),
                g = document.createElement("input");
            g.type = "checkbox", g.checked = c, g.addEventListener("change", function(a) {
                d(a.target, e)
            }), f.appendChild(g), f.appendChild(document.createTextNode(b)), a.appendChild(f), a.appendChild(document.createElement("br"))
        }, b.prototype._generateRadio = function(a, b, c, d, e, f) {
            void 0 === f && (f = null);
            var g = document.createElement("label"),
                h = document.createElement("input");
            h.type = "radio", h.name = c, h.checked = d, h.addEventListener("change", function(a) {
                e(a.target, f)
            }), g.appendChild(h), g.appendChild(document.createTextNode(b)), a.appendChild(g), a.appendChild(document.createElement("br"))
        }, b.prototype._generateDOMelements = function() {
            var b = this;
            if (this._globalDiv.id = "DebugLayer", this._globalDiv.style.position = "absolute", this._globalDiv.style.fontFamily = "Segoe UI, Arial", this._globalDiv.style.fontSize = "14px", this._globalDiv.style.color = "white", this._drawingCanvas = document.createElement("canvas"), this._drawingCanvas.id = "DebugLayerDrawingCanvas", this._drawingCanvas.style.position = "absolute", this._drawingCanvas.style.pointerEvents = "none", this._drawingContext = this._drawingCanvas.getContext("2d"), this._globalDiv.appendChild(this._drawingCanvas), this._showUI) {
                var c = "rgba(128, 128, 128, 0.4)",
                    d = "rgb(180, 180, 180) solid 1px";
                this._statsDiv = document.createElement("div"), this._statsDiv.id = "DebugLayerStats", this._statsDiv.style.border = d, this._statsDiv.style.position = "absolute", this._statsDiv.style.background = c, this._statsDiv.style.padding = "0px 0px 0px 5px", this._generateheader(this._statsDiv, "STATISTICS"), this._statsSubsetDiv = document.createElement("div"), this._statsSubsetDiv.style.paddingTop = "5px", this._statsSubsetDiv.style.paddingBottom = "5px", this._statsSubsetDiv.style.overflowY = "auto", this._statsDiv.appendChild(this._statsSubsetDiv), this._treeDiv = document.createElement("div"), this._treeDiv.id = "DebugLayerTree", this._treeDiv.style.border = d, this._treeDiv.style.position = "absolute", this._treeDiv.style.background = c, this._treeDiv.style.padding = "0px 0px 0px 5px", this._treeDiv.style.display = "none", this._generateheader(this._treeDiv, "MESHES TREE"), this._treeSubsetDiv = document.createElement("div"), this._treeSubsetDiv.style.paddingTop = "5px", this._treeSubsetDiv.style.paddingRight = "5px", this._treeSubsetDiv.style.overflowY = "auto", this._treeSubsetDiv.style.maxHeight = "300px", this._treeDiv.appendChild(this._treeSubsetDiv), this._needToRefreshMeshesTree = !0, this._logDiv = document.createElement("div"), this._logDiv.style.border = d, this._logDiv.id = "DebugLayerLogs", this._logDiv.style.position = "absolute", this._logDiv.style.background = c, this._logDiv.style.padding = "0px 0px 0px 5px", this._logDiv.style.display = "none", this._generateheader(this._logDiv, "LOGS"), this._logSubsetDiv = document.createElement("div"), this._logSubsetDiv.style.height = "127px", this._logSubsetDiv.style.paddingTop = "5px", this._logSubsetDiv.style.overflowY = "auto", this._logSubsetDiv.style.fontSize = "12px", this._logSubsetDiv.style.fontFamily = "consolas", this._logSubsetDiv.innerHTML = a.Tools.LogCache, this._logDiv.appendChild(this._logSubsetDiv), a.Tools.OnNewCacheEntry = function(a) {
                    b._logSubsetDiv.innerHTML = a + b._logSubsetDiv.innerHTML
                }, this._optionsDiv = document.createElement("div"), this._optionsDiv.id = "DebugLayerOptions", this._optionsDiv.style.border = d, this._optionsDiv.style.position = "absolute", this._optionsDiv.style.background = c, this._optionsDiv.style.padding = "0px 0px 0px 5px", this._optionsDiv.style.overflowY = "auto", this._generateheader(this._optionsDiv, "OPTIONS"), this._optionsSubsetDiv = document.createElement("div"), this._optionsSubsetDiv.style.paddingTop = "5px", this._optionsSubsetDiv.style.paddingBottom = "5px", this._optionsSubsetDiv.style.overflowY = "auto", this._optionsSubsetDiv.style.maxHeight = "200px", this._optionsDiv.appendChild(this._optionsSubsetDiv), this._generateTexBox(this._optionsSubsetDiv, "<b>Windows:</b>", this.accentColor), this._generateCheckBox(this._optionsSubsetDiv, "Statistics", this._displayStatistics, function(a) {
                    b._displayStatistics = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Logs", this._displayLogs, function(a) {
                    b._displayLogs = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Meshes tree", this._displayTree, function(a) {
                    b._displayTree = a.checked, b._needToRefreshMeshesTree = !0
                }), this._optionsSubsetDiv.appendChild(document.createElement("br")), this._generateTexBox(this._optionsSubsetDiv, "<b>General:</b>", this.accentColor), this._generateCheckBox(this._optionsSubsetDiv, "Bounding boxes", this._scene.forceShowBoundingBoxes, function(a) {
                    b._scene.forceShowBoundingBoxes = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Clickable labels", this._labelsEnabled, function(a) {
                    b._labelsEnabled = a.checked, b._labelsEnabled || b._clearLabels()
                }), this._generateCheckBox(this._optionsSubsetDiv, "Generate user marks (F12)", a.Tools.PerformanceLogLevel === a.Tools.PerformanceUserMarkLogLevel, function(b) {
                    a.Tools.PerformanceLogLevel = b.checked ? a.Tools.PerformanceUserMarkLogLevel : a.Tools.PerformanceNoneLogLevel
                }), this._optionsSubsetDiv.appendChild(document.createElement("br")), this._generateTexBox(this._optionsSubsetDiv, "<b>Rendering mode:</b>", this.accentColor), this._generateRadio(this._optionsSubsetDiv, "Solid", "renderMode", !this._scene.forceWireframe && !this._scene.forcePointsCloud, function(a) {
                    a.checked && (b._scene.forceWireframe = !1, b._scene.forcePointsCloud = !1)
                }), this._generateRadio(this._optionsSubsetDiv, "Wireframe", "renderMode", this._scene.forceWireframe, function(a) {
                    a.checked && (b._scene.forceWireframe = !0, b._scene.forcePointsCloud = !1)
                }), this._generateRadio(this._optionsSubsetDiv, "Point", "renderMode", this._scene.forcePointsCloud, function(a) {
                    a.checked && (b._scene.forceWireframe = !1, b._scene.forcePointsCloud = !0)
                }), this._optionsSubsetDiv.appendChild(document.createElement("br")), this._generateTexBox(this._optionsSubsetDiv, "<b>Texture channels:</b>", this.accentColor), this._generateCheckBox(this._optionsSubsetDiv, "Diffuse", a.StandardMaterial.DiffuseTextureEnabled, function(b) {
                    a.StandardMaterial.DiffuseTextureEnabled = b.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Ambient", a.StandardMaterial.AmbientTextureEnabled, function(b) {
                    a.StandardMaterial.AmbientTextureEnabled = b.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Specular", a.StandardMaterial.SpecularTextureEnabled, function(b) {
                    a.StandardMaterial.SpecularTextureEnabled = b.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Emissive", a.StandardMaterial.EmissiveTextureEnabled, function(b) {
                    a.StandardMaterial.EmissiveTextureEnabled = b.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Bump", a.StandardMaterial.BumpTextureEnabled, function(b) {
                    a.StandardMaterial.BumpTextureEnabled = b.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Opacity", a.StandardMaterial.OpacityTextureEnabled, function(b) {
                    a.StandardMaterial.OpacityTextureEnabled = b.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Reflection", a.StandardMaterial.ReflectionTextureEnabled, function(b) {
                    a.StandardMaterial.ReflectionTextureEnabled = b.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Fresnel", a.StandardMaterial.FresnelEnabled, function(b) {
                    a.StandardMaterial.FresnelEnabled = b.checked
                }), this._optionsSubsetDiv.appendChild(document.createElement("br")), this._generateTexBox(this._optionsSubsetDiv, "<b>Options:</b>", this.accentColor), this._generateCheckBox(this._optionsSubsetDiv, "Animations", this._scene.animationsEnabled, function(a) {
                    b._scene.animationsEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Collisions", this._scene.collisionsEnabled, function(a) {
                    b._scene.collisionsEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Fog", this._scene.fogEnabled, function(a) {
                    b._scene.fogEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Lens flares", this._scene.lensFlaresEnabled, function(a) {
                    b._scene.lensFlaresEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Lights", this._scene.lightsEnabled, function(a) {
                    b._scene.lightsEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Particles", this._scene.particlesEnabled, function(a) {
                    b._scene.particlesEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Post-processes", this._scene.postProcessesEnabled, function(a) {
                    b._scene.postProcessesEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Procedural textures", this._scene.proceduralTexturesEnabled, function(a) {
                    b._scene.proceduralTexturesEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Render targets", this._scene.renderTargetsEnabled, function(a) {
                    b._scene.renderTargetsEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Shadows", this._scene.shadowsEnabled, function(a) {
                    b._scene.shadowsEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Skeletons", this._scene.skeletonsEnabled, function(a) {
                    b._scene.skeletonsEnabled = a.checked
                }), this._generateCheckBox(this._optionsSubsetDiv, "Textures", this._scene.texturesEnabled, function(a) {
                    b._scene.texturesEnabled = a.checked
                }), this._globalDiv.appendChild(this._statsDiv), this._globalDiv.appendChild(this._logDiv), this._globalDiv.appendChild(this._optionsDiv), this._globalDiv.appendChild(this._treeDiv)
            }
        }, b.prototype._displayStats = function() {
            var b = this._scene,
                c = b.getEngine(),
                d = c.getGlInfo();
            this._statsSubsetDiv.innerHTML = "Babylon.js v" + a.Engine.Version + " - <b>" + a.Tools.Format(c.getFps(), 0) + " fps</b><br><br><div style='column-count: 2;-moz-column-count:2;-webkit-column-count:2'><b>Count</b><br>Total meshes: " + b.meshes.length + "<br>Total vertices: " + b.getTotalVertices() + "<br>Total materials: " + b.materials.length + "<br>Total textures: " + b.textures.length + "<br>Active meshes: " + b.getActiveMeshes().length + "<br>Active vertices: " + b.getActiveVertices() + "<br>Active bones: " + b.getActiveBones() + "<br>Active particles: " + b.getActiveParticles() + "<br><b>Draw calls: " + c.drawCalls + "</b><br><br><b>Duration</b><br>Meshes selection:</i> " + a.Tools.Format(b.getEvaluateActiveMeshesDuration()) + " ms<br>Render Targets: " + a.Tools.Format(b.getRenderTargetsDuration()) + " ms<br>Particles: " + a.Tools.Format(b.getParticlesDuration()) + " ms<br>Sprites: " + a.Tools.Format(b.getSpritesDuration()) + " ms<br><br>Render: <b>" + a.Tools.Format(b.getRenderDuration()) + " ms</b><br>Frame: " + a.Tools.Format(b.getLastFrameDuration()) + " ms<br>Potential FPS: " + a.Tools.Format(1e3 / b.getLastFrameDuration(), 0) + "<br><br></div><div style='column-count: 2;-moz-column-count:2;-webkit-column-count:2'><b>Extensions</b><br>Std derivatives: " + (c.getCaps().standardDerivatives ? "Yes" : "No") + "<br>Compressed textures: " + (c.getCaps().s3tc ? "Yes" : "No") + "<br>Hardware instances: " + (c.getCaps().instancedArrays ? "Yes" : "No") + "<br>Texture float: " + (c.getCaps().textureFloat ? "Yes" : "No") + "<br>32bits indices: " + (c.getCaps().uintIndices ? "Yes" : "No") + "<br><b>Caps.</b><br>Max textures units: " + c.getCaps().maxTexturesImageUnits + "<br>Max textures size: " + c.getCaps().maxTextureSize + "<br>Max anisotropy: " + c.getCaps().maxAnisotropy + "<br><br><br></div><br><b>Info</b><br>" + d.version + "<br>" + d.renderer + "<br>", this.customStatsFunction && (this._statsSubsetDiv.innerHTML += this._statsSubsetDiv.innerHTML)
        }, b
    }();
    a.DebugLayer = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f, g, h, i, j) {
            void 0 === h && (h = !0), void 0 === i && (i = !1), void 0 === j && (j = a.Texture.TRILINEAR_SAMPLINGMODE), b.call(this, null, g, !h, i), this._texture = g.getEngine().createRawTexture(c, d, e, f, h, i, j), this.wrapU = a.Texture.CLAMP_ADDRESSMODE, this.wrapV = a.Texture.CLAMP_ADDRESSMODE
        }
        return __extends(c, b), c.CreateLuminanceTexture = function(b, d, e, f, g, h, i) {
            return void 0 === g && (g = !0), void 0 === h && (h = !1), void 0 === i && (i = a.Texture.TRILINEAR_SAMPLINGMODE), new c(b, d, e, a.Engine.TEXTUREFORMAT_LUMINANCE, f, g, h, i)
        }, c.CreateLuminanceAlphaTexture = function(b, d, e, f, g, h, i) {
            return void 0 === g && (g = !0), void 0 === h && (h = !1), void 0 === i && (i = a.Texture.TRILINEAR_SAMPLINGMODE), new c(b, d, e, a.Engine.TEXTUREFORMAT_LUMINANCE_ALPHA, f, g, h, i)
        }, c.CreateAlphaTexture = function(b, d, e, f, g, h, i) {
            return void 0 === g && (g = !0), void 0 === h && (h = !1), void 0 === i && (i = a.Texture.TRILINEAR_SAMPLINGMODE), new c(b, d, e, a.Engine.TEXTUREFORMAT_ALPHA, f, g, h, i)
        }, c.CreateRGBTexture = function(b, d, e, f, g, h, i) {
            return void 0 === g && (g = !0), void 0 === h && (h = !1), void 0 === i && (i = a.Texture.TRILINEAR_SAMPLINGMODE), new c(b, d, e, a.Engine.TEXTUREFORMAT_RGB, f, g, h, i)
        }, c.CreateRGBATexture = function(b, d, e, f, g, h, i) {
            return void 0 === g && (g = !0), void 0 === h && (h = !1), void 0 === i && (i = a.Texture.TRILINEAR_SAMPLINGMODE), new c(b, d, e, a.Engine.TEXTUREFORMAT_RGBA, f, g, h, i)
        }, c
    }(a.Texture);
    a.RawTexture = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(a) {
            function b(b, c) {
                a.call(this, b.x, b.y), this.index = c
            }
            return __extends(b, a), b
        }(a.Vector2),
        c = function() {
            function c() {
                this.elements = new Array
            }
            return c.prototype.add = function(c) {
                var d = this,
                    e = new Array;
                return c.forEach(function(c) {
                    if (0 === e.length || !a.Tools.WithinEpsilon(c.x, e[0].x, 1e-5) || !a.Tools.WithinEpsilon(c.y, e[0].y, 1e-5)) {
                        var f = new b(c, d.elements.length);
                        e.push(f), d.elements.push(f)
                    }
                }), e
            }, c.prototype.computeBounds = function() {
                var b = new a.Vector2(this.elements[0].x, this.elements[0].y),
                    c = new a.Vector2(this.elements[0].x, this.elements[0].y);
                return this.elements.forEach(function(a) {
                    a.x < b.x ? b.x = a.x : a.x > c.x && (c.x = a.x), a.y < b.y ? b.y = a.y : a.y > c.y && (c.y = a.y)
                }), {
                    min: b,
                    max: c,
                    width: c.x - b.x,
                    height: c.y - b.y
                }
            }, c
        }(),
        d = function() {
            function b() {}
            return b.Rectangle = function(b, c, d, e) {
                return [new a.Vector2(b, c), new a.Vector2(d, c), new a.Vector2(d, e), new a.Vector2(b, e)]
            }, b.Circle = function(b, c, d, e) {
                void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 32);
                for (var f = new Array, g = 0, h = 2 * Math.PI / e, i = 0; e > i; i++) f.push(new a.Vector2(c + Math.cos(g) * b, d + Math.sin(g) * b)), g -= h;
                return f
            }, b.Parse = function(a) {
                var b, c = a.split(/[^-+eE\.\d]+/).map(parseFloat).filter(function(a) {
                        return !isNaN(a)
                    }),
                    d = [];
                for (b = 0; b < (2147483646 & c.length); b += 2) d.push(new poly2tri.Point(c[b], c[b + 1]));
                return d
            }, b.StartingAt = function(b, c) {
                return a.Path2.StartingAt(b, c)
            }, b
        }();
    a.Polygon = d;
    var e = function() {
        function b(b, d, e) {
            if (this._points = new c, !("poly2tri" in window)) throw "PolygonMeshBuilder cannot be used because poly2tri is not referenced";
            this._name = b, this._scene = e;
            var f;
            f = d instanceof a.Path2 ? d.getPoints() : d, this._swctx = new poly2tri.SweepContext(this._points.add(f))
        }
        return b.prototype.addHole = function(a) {
            return this._swctx.addHole(this._points.add(a)), this
        }, b.prototype.build = function(b) {
            void 0 === b && (b = !1);
            var c = new a.Mesh(this._name, this._scene),
                d = [],
                e = [],
                f = [],
                g = this._points.computeBounds();
            this._points.elements.forEach(function(a) {
                d.push(0, 1, 0), e.push(a.x, 0, a.y), f.push((a.x - g.min.x) / g.width, (a.y - g.min.y) / g.height)
            });
            var h = [];
            return this._swctx.triangulate(), this._swctx.getTriangles().forEach(function(a) {
                a.getPoints().forEach(function(a) {
                    h.push(a.index)
                })
            }), c.setVerticesData(e, a.VertexBuffer.PositionKind, b), c.setVerticesData(d, a.VertexBuffer.NormalKind, b), c.setVerticesData(f, a.VertexBuffer.UVKind, b), c.setIndices(h), c
        }, b
    }();
    a.PolygonMeshBuilder = e
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function a(a, b) {
            this.quality = a, this.distance = b
        }
        return a
    }();
    a.SimplificationSettings = b,
        function(a) {
            a[a.QUADRATIC = 0] = "QUADRATIC"
        }(a.SimplificationType || (a.SimplificationType = {}));
    var c = (a.SimplificationType, function() {
        function a(a) {
            this.vertices = a, this.error = new Array(4), this.deleted = !1, this.isDirty = !1, this.borderFactor = 0
        }
        return a
    }());
    a.DecimationTriangle = c;
    var d = function() {
        function a(a, b, c, d) {
            this.position = a, this.normal = b, this.uv = c, this.id = d, this.isBorder = !0, this.q = new e, this.triangleCount = 0, this.triangleStart = 0
        }
        return a
    }();
    a.DecimationVertex = d;
    var e = function() {
        function a(a) {
            this.data = new Array(10);
            for (var b = 0; 10 > b; ++b) this.data[b] = a && a[b] ? a[b] : 0
        }
        return a.prototype.det = function(a, b, c, d, e, f, g, h, i) {
            var j = this.data[a] * this.data[e] * this.data[i] + this.data[c] * this.data[d] * this.data[h] + this.data[b] * this.data[f] * this.data[g] - this.data[c] * this.data[e] * this.data[g] - this.data[a] * this.data[f] * this.data[h] - this.data[b] * this.data[d] * this.data[i];
            return j
        }, a.prototype.addInPlace = function(a) {
            for (var b = 0; 10 > b; ++b) this.data[b] += a.data[b]
        }, a.prototype.addArrayInPlace = function(a) {
            for (var b = 0; 10 > b; ++b) this.data[b] += a[b]
        }, a.prototype.add = function(b) {
            for (var c = new a, d = 0; 10 > d; ++d) c.data[d] = this.data[d] + b.data[d];
            return c
        }, a.FromData = function(b, c, d, e) {
            return new a(a.DataFromNumbers(b, c, d, e))
        }, a.DataFromNumbers = function(a, b, c, d) {
            return [a * a, a * b, a * c, a * d, b * b, b * c, b * d, c * c, c * d, d * d]
        }, a
    }();
    a.QuadraticMatrix = e;
    var f = function() {
        function a(a, b) {
            this.vertexId = a, this.triangleId = b
        }
        return a
    }();
    a.Reference = f;
    var g = function() {
        function b(a) {
            this._mesh = a, this.initialised = !1, this.syncIterations = 5e3, this.aggressiveness = 7, this.decimationIterations = 100
        }
        return b.prototype.simplify = function(a, b) {
            var c = this;
            this.initWithMesh(this._mesh, function() {
                c.runDecimation(a, b)
            })
        }, b.prototype.runDecimation = function(b, c) {
            var d = this,
                e = ~~(this.triangles.length * b.quality),
                f = 0,
                g = this.triangles.length,
                h = function(b, c) {
                    setTimeout(function() {
                        b % 5 === 0 && d.updateMesh(0 === b);
                        for (var h = 0; h < d.triangles.length; ++h) d.triangles[h].isDirty = !1;
                        var i = 1e-9 * Math.pow(b + 3, d.aggressiveness),
                            j = function(b) {
                                var c = ~~((d.triangles.length / 2 + b) % d.triangles.length),
                                    e = d.triangles[c];
                                if (e && !(e.error[3] > i || e.deleted || e.isDirty))
                                    for (var g = 0; 3 > g; ++g)
                                        if (e.error[g] < i) {
                                            var h = [],
                                                j = [],
                                                k = e.vertices[g],
                                                l = e.vertices[(g + 1) % 3],
                                                m = d.vertices[k],
                                                n = d.vertices[l];
                                            if (m.isBorder !== n.isBorder) continue;
                                            var o = a.Vector3.Zero(),
                                                p = a.Vector3.Zero(),
                                                q = a.Vector2.Zero(),
                                                r = new a.Color4(0, 0, 0, 1);
                                            d.calculateError(m, n, o, p, q, r);
                                            var s = [];
                                            if (d.isFlipped(m, l, o, h, e.borderFactor, s)) continue;
                                            if (d.isFlipped(n, k, o, j, e.borderFactor, s)) continue;
                                            if (2 == s.length || s[0] === s[1]) continue;
                                            if (m.normal = p, m.uv ? m.uv = q : m.color && (m.color = r), m.q = n.q.add(m.q), h.indexOf(!0) < 0 || j.indexOf(!0) < 0) continue;
                                            if (o.equals(m.position)) continue;
                                            m.position = o;
                                            var t = d.references.length;
                                            f = d.updateTriangles(m.id, m, h, f), f = d.updateTriangles(m.id, n, j, f);
                                            var u = d.references.length - t;
                                            if (u <= m.triangleCount) {
                                                if (u)
                                                    for (var v = 0; u > v; v++) d.references[m.triangleStart + v] = d.references[t + v]
                                            } else m.triangleStart = t;
                                            m.triangleCount = u;
                                            break
                                        }
                            };
                        a.AsyncLoop.SyncAsyncForLoop(d.triangles.length, d.syncIterations, j, c, function() {
                            return e >= g - f
                        })
                    }, 0)
                };
            a.AsyncLoop.Run(this.decimationIterations, function(a) {
                e >= g - f ? a.breakLoop() : h(a.index, function() {
                    a.executeNext()
                })
            }, function() {
                setTimeout(function() {
                    c(d.reconstructMesh())
                }, 0)
            })
        }, b.prototype.initWithMesh = function(b, e) {
            var f = this;
            if (b) {
                this.vertices = [], this.triangles = [], this._mesh = b;
                var g = this._mesh.getVerticesData(a.VertexBuffer.PositionKind),
                    h = this._mesh.getVerticesData(a.VertexBuffer.NormalKind),
                    i = this._mesh.getVerticesData(a.VertexBuffer.UVKind),
                    j = this._mesh.getVerticesData(a.VertexBuffer.ColorKind),
                    k = b.getIndices(),
                    l = function(b) {
                        var c = new d(a.Vector3.FromArray(g, 3 * b), a.Vector3.FromArray(h, 3 * b), null, b);
                        f._mesh.isVerticesDataPresent(a.VertexBuffer.UVKind) ? c.uv = a.Vector2.FromArray(i, 2 * b) : f._mesh.isVerticesDataPresent(a.VertexBuffer.ColorKind) && (c.color = a.Color4.FromArray(j, 4 * b)), f.vertices.push(c)
                    },
                    m = b.getTotalVertices();
                a.AsyncLoop.SyncAsyncForLoop(m, this.syncIterations, l, function() {
                    var b = function(a) {
                        var b = 3 * a,
                            d = k[b + 0],
                            e = k[b + 1],
                            g = k[b + 2],
                            h = new c([f.vertices[d].id, f.vertices[e].id, f.vertices[g].id]);
                        f.triangles.push(h)
                    };
                    a.AsyncLoop.SyncAsyncForLoop(k.length / 3, f.syncIterations, b, function() {
                        f.init(e)
                    })
                })
            }
        }, b.prototype.init = function(b) {
            var c = this,
                d = function(b) {
                    var d = c.triangles[b];
                    d.normal = a.Vector3.Cross(c.vertices[d.vertices[1]].position.subtract(c.vertices[d.vertices[0]].position), c.vertices[d.vertices[2]].position.subtract(c.vertices[d.vertices[0]].position)).normalize();
                    for (var f = 0; 3 > f; f++) c.vertices[d.vertices[f]].q.addArrayInPlace(e.DataFromNumbers(d.normal.x, d.normal.y, d.normal.z, -a.Vector3.Dot(d.normal, c.vertices[d.vertices[0]].position)))
                };
            a.AsyncLoop.SyncAsyncForLoop(this.triangles.length, this.syncIterations, d, function() {
                var d = function(a) {
                    for (var b = c.triangles[a], d = 0; 3 > d; ++d) b.error[d] = c.calculateError(c.vertices[b.vertices[d]], c.vertices[b.vertices[(d + 1) % 3]]);
                    b.error[3] = Math.min(b.error[0], b.error[1], b.error[2])
                };
                a.AsyncLoop.SyncAsyncForLoop(c.triangles.length, c.syncIterations, d, function() {
                    c.initialised = !0, b()
                })
            })
        }, b.prototype.reconstructMesh = function() {
            var b, c = [];
            for (b = 0; b < this.vertices.length; ++b) this.vertices[b].triangleCount = 0;
            var d, e;
            for (b = 0; b < this.triangles.length; ++b)
                if (!this.triangles[b].deleted) {
                    for (d = this.triangles[b], e = 0; 3 > e; ++e) this.vertices[d.vertices[e]].triangleCount = 1;
                    c.push(d)
                }
            var f = [],
                g = 0;
            for (b = 0; b < this.vertices.length; ++b) this.vertices[b].triangleCount && (this.vertices[b].triangleStart = g, this.vertices[g].position = this.vertices[b].position, this.vertices[g].normal = this.vertices[b].normal, this.vertices[g].uv = this.vertices[b].uv, this.vertices[g].color = this.vertices[b].color, f.push(b), g++);
            for (b = 0; b < c.length; ++b)
                for (d = c[b], e = 0; 3 > e; ++e) d.vertices[e] = this.vertices[d.vertices[e]].triangleStart;
            this.vertices = this.vertices.slice(0, g);
            var h = [],
                i = [],
                j = [],
                k = [];
            for (b = 0; b < f.length; ++b) h.push(this.vertices[b].position.x), h.push(this.vertices[b].position.y), h.push(this.vertices[b].position.z), i.push(this.vertices[b].normal.x), i.push(this.vertices[b].normal.y), i.push(this.vertices[b].normal.z), this.vertices[b].uv ? (j.push(this.vertices[b].uv.x), j.push(this.vertices[b].uv.y)) : this.vertices[b].color && (k.push(this.vertices[b].color.r), k.push(this.vertices[b].color.g), k.push(this.vertices[b].color.b), k.push(this.vertices[b].color.a));
            var l = [];
            for (b = 0; b < c.length; ++b) l.push(c[b].vertices[0]), l.push(c[b].vertices[1]), l.push(c[b].vertices[2]);
            var m = new a.Mesh(this._mesh.name + "Decimated", this._mesh.getScene());
            return m.material = this._mesh.material, m.parent = this._mesh.parent, m.setIndices(l), m.setVerticesData(a.VertexBuffer.PositionKind, h), m.setVerticesData(a.VertexBuffer.NormalKind, i), j.length > 0 && m.setVerticesData(a.VertexBuffer.UVKind, j), k.length > 0 && m.setVerticesData(a.VertexBuffer.ColorKind, k), this._mesh.skeleton, m
        }, b.prototype.isFlipped = function(b, c, d, e, f, g) {
            for (var h = 0; h < b.triangleCount; ++h) {
                var i = this.triangles[this.references[b.triangleStart + h].triangleId];
                if (!i.deleted) {
                    var j = this.references[b.triangleStart + h].vertexId,
                        k = i.vertices[(j + 1) % 3],
                        l = i.vertices[(j + 2) % 3];
                    if ((k === c || l === c) && 2 > f) e[h] = !0, g.push(i);
                    else {
                        var m = this.vertices[k].position.subtract(d);
                        m = m.normalize();
                        var n = this.vertices[l].position.subtract(d);
                        if (n = n.normalize(), Math.abs(a.Vector3.Dot(m, n)) > .999) return !0;
                        var o = a.Vector3.Cross(m, n).normalize();
                        if (e[h] = !1, a.Vector3.Dot(o, i.normal) < .2) return !0
                    }
                }
            }
            return !1
        }, b.prototype.updateTriangles = function(a, b, c, d) {
            for (var e = d, f = 0; f < b.triangleCount; ++f) {
                var g = this.references[b.triangleStart + f],
                    h = this.triangles[g.triangleId];
                h.deleted || (c[f] ? (h.deleted = !0, e++) : (h.vertices[g.vertexId] = a, h.isDirty = !0, h.error[0] = this.calculateError(this.vertices[h.vertices[0]], this.vertices[h.vertices[1]]) + h.borderFactor / 2, h.error[1] = this.calculateError(this.vertices[h.vertices[1]], this.vertices[h.vertices[2]]) + h.borderFactor / 2, h.error[2] = this.calculateError(this.vertices[h.vertices[2]], this.vertices[h.vertices[0]]) + h.borderFactor / 2, h.error[3] = Math.min(h.error[0], h.error[1], h.error[2]), this.references.push(g)))
            }
            return e
        }, b.prototype.identifyBorder = function() {
            for (var a = 0; a < this.vertices.length; ++a) {
                var b, c = [],
                    d = [],
                    e = this.vertices[a];
                for (b = 0; b < e.triangleCount; ++b)
                    for (var f = this.triangles[this.references[e.triangleStart + b].triangleId], g = 0; 3 > g; g++) {
                        for (var h = 0, i = f.vertices[g]; h < c.length && d[h] !== i;) ++h;
                        h === c.length ? (c.push(1), d.push(i)) : c[h]++
                    }
                for (b = 0; b < c.length; ++b) this.vertices[d[b]].isBorder = 1 === c[b] ? !0 : !1
            }
        }, b.prototype.updateMesh = function(a) {
            void 0 === a && (a = !1);
            var b;
            if (!a) {
                var c = [];
                for (b = 0; b < this.triangles.length; ++b) this.triangles[b].deleted || c.push(this.triangles[b]);
                this.triangles = c
            }
            for (b = 0; b < this.vertices.length; ++b) this.vertices[b].triangleCount = 0, this.vertices[b].triangleStart = 0;
            var d, e, g;
            for (b = 0; b < this.triangles.length; ++b)
                for (d = this.triangles[b], e = 0; 3 > e; ++e) g = this.vertices[d.vertices[e]], g.triangleCount++;
            var h = 0;
            for (b = 0; b < this.vertices.length; ++b) this.vertices[b].triangleStart = h, h += this.vertices[b].triangleCount, this.vertices[b].triangleCount = 0;
            var i = new Array(3 * this.triangles.length);
            for (b = 0; b < this.triangles.length; ++b)
                for (d = this.triangles[b], e = 0; 3 > e; ++e) g = this.vertices[d.vertices[e]], i[g.triangleStart + g.triangleCount] = new f(e, b), g.triangleCount++;
            this.references = i, a && this.identifyBorder()
        }, b.prototype.vertexError = function(a, b) {
            var c = b.x,
                d = b.y,
                e = b.z;
            return a.data[0] * c * c + 2 * a.data[1] * c * d + 2 * a.data[2] * c * e + 2 * a.data[3] * c + a.data[4] * d * d + 2 * a.data[5] * d * e + 2 * a.data[6] * d + a.data[7] * e * e + 2 * a.data[8] * e + a.data[9]
        }, b.prototype.calculateError = function(b, c, d, e, f, g) {
            var h = b.q.add(c.q),
                i = b.isBorder && c.isBorder,
                j = 0,
                k = h.det(0, 1, 2, 1, 4, 5, 2, 5, 7);
            if (0 === k || i) {
                var l = b.position.add(c.position).divide(new a.Vector3(2, 2, 2)),
                    m = this.vertexError(h, b.position),
                    n = this.vertexError(h, c.position),
                    o = this.vertexError(h, l);
                j = Math.min(m, n, o), j === m ? d && (d.copyFrom(b.position), e.copyFrom(b.normal), b.uv ? f.copyFrom(b.uv) : b.color && g.copyFrom(b.color)) : j === n ? d && (d.copyFrom(c.position), e.copyFrom(c.normal), c.uv ? f.copyFrom(c.uv) : c.color && g.copyFrom(c.color)) : d && (d.copyFrom(l), e.copyFrom(b.normal), b.uv ? f.copyFrom(b.uv) : b.color && g.copyFrom(b.color))
            } else d || (d = a.Vector3.Zero()), d.x = -1 / k * h.det(1, 2, 3, 4, 5, 6, 5, 7, 8), d.y = 1 / k * h.det(0, 2, 3, 1, 5, 6, 2, 7, 8), d.z = -1 / k * h.det(0, 1, 3, 1, 4, 6, 2, 5, 8), j = this.vertexError(h, d), e && (e.copyFrom(b.normal), b.uv ? f.copyFrom(b.uv) : b.color && g.copyFrom(b.color));
            return j
        }, b
    }();
    a.QuadraticErrorSimplification = g
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b) {
            this.SMOOTHING = .75, this.FFT_SIZE = 512, this.BARGRAPHAMPLITUDE = 256, this.DEBUGCANVASPOS = {
                x: 20,
                y: 20
            }, this.DEBUGCANVASSIZE = {
                width: 320,
                height: 200
            }, this._scene = b, this._audioEngine = a.Engine.audioEngine, this._audioEngine.canUseWebAudio && (this._webAudioAnalyser = this._audioEngine.audioContext.createAnalyser(), this._webAudioAnalyser.minDecibels = -140, this._webAudioAnalyser.maxDecibels = 0, this._byteFreqs = new Uint8Array(this._webAudioAnalyser.frequencyBinCount), this._byteTime = new Uint8Array(this._webAudioAnalyser.frequencyBinCount), this._floatFreqs = new Float32Array(this._webAudioAnalyser.frequencyBinCount))
        }
        return b.prototype.getFrequencyBinCount = function() {
            return this._audioEngine.canUseWebAudio ? this._webAudioAnalyser.frequencyBinCount : 0
        }, b.prototype.getByteFrequencyData = function() {
            return this._audioEngine.canUseWebAudio && (this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING, this._webAudioAnalyser.fftSize = this.FFT_SIZE, this._webAudioAnalyser.getByteFrequencyData(this._byteFreqs)), this._byteFreqs
        }, b.prototype.getByteTimeDomainData = function() {
            return this._audioEngine.canUseWebAudio && (this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING, this._webAudioAnalyser.fftSize = this.FFT_SIZE, this._webAudioAnalyser.getByteTimeDomainData(this._byteTime)), this._byteTime
        }, b.prototype.getFloatFrequencyData = function() {
            return this._audioEngine.canUseWebAudio && (this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING, this._webAudioAnalyser.fftSize = this.FFT_SIZE, this._webAudioAnalyser.getFloatFrequencyData(this._floatFreqs)), this._floatFreqs
        }, b.prototype.drawDebugCanvas = function() {
            var a = this;
            if (this._audioEngine.canUseWebAudio && (this._debugCanvas || (this._debugCanvas = document.createElement("canvas"), this._debugCanvas.width = this.DEBUGCANVASSIZE.width, this._debugCanvas.height = this.DEBUGCANVASSIZE.height, this._debugCanvas.style.position = "absolute", this._debugCanvas.style.top = this.DEBUGCANVASPOS.y + "px", this._debugCanvas.style.left = this.DEBUGCANVASPOS.x + "px", this._debugCanvasContext = this._debugCanvas.getContext("2d"), document.body.appendChild(this._debugCanvas), this._registerFunc = function() {
                    a.drawDebugCanvas()
                }, this._scene.registerBeforeRender(this._registerFunc)), this._registerFunc)) {
                var b = this.getByteFrequencyData();
                this._debugCanvasContext.fillStyle = "rgb(0, 0, 0)", this._debugCanvasContext.fillRect(0, 0, this.DEBUGCANVASSIZE.width, this.DEBUGCANVASSIZE.height);
                for (var c = 0; c < this.getFrequencyBinCount(); c++) {
                    var d = b[c],
                        e = d / this.BARGRAPHAMPLITUDE,
                        f = this.DEBUGCANVASSIZE.height * e,
                        g = this.DEBUGCANVASSIZE.height - f - 1,
                        h = this.DEBUGCANVASSIZE.width / this.getFrequencyBinCount(),
                        i = c / this.getFrequencyBinCount() * 360;
                    this._debugCanvasContext.fillStyle = "hsl(" + i + ", 100%, 50%)", this._debugCanvasContext.fillRect(c * h, g, h, f)
                }
            }
        }, b.prototype.stopDebugCanvas = function() {
            this._debugCanvas && (this._scene.unregisterBeforeRender(this._registerFunc), this._registerFunc = null, document.body.removeChild(this._debugCanvas), this._debugCanvas = null, this._debugCanvasContext = null)
        }, b.prototype.connectAudioNodes = function(a, b) {
            this._audioEngine.canUseWebAudio && (a.connect(this._webAudioAnalyser), this._webAudioAnalyser.connect(b))
        }, b.prototype.dispose = function() {
            this._audioEngine.canUseWebAudio && this._webAudioAnalyser.disconnect()
        }, b
    }();
    a.Analyser = b
}(BABYLON || (BABYLON = {})),
function(a) {
    var b = function() {
        function b(b, c) {
            var d = this;
            void 0 === c && (c = a.Engine.TEXTURETYPE_FLOAT), this._viewMatrix = a.Matrix.Zero(), this._projectionMatrix = a.Matrix.Zero(), this._transformMatrix = a.Matrix.Zero(), this._worldViewProjection = a.Matrix.Zero(), this._scene = b;
            var e = b.getEngine();
            this._depthMap = new a.RenderTargetTexture("depthMap", {
                width: e.getRenderWidth(),
                height: e.getRenderHeight()
            }, this._scene, !1, !0, c), this._depthMap.wrapU = a.Texture.CLAMP_ADDRESSMODE, this._depthMap.wrapV = a.Texture.CLAMP_ADDRESSMODE, this._depthMap.refreshRate = 1, this._depthMap.renderParticles = !1, this._depthMap.renderList = null;
            var f = function(b) {
                var c = b.getRenderingMesh(),
                    e = d._scene,
                    f = e.getEngine();
                f.setState(b.getMaterial().backFaceCulling);
                var g = c._getInstancesRenderList(b._id);
                if (!g.mustReturn) {
                    var h = null !== f.getCaps().instancedArrays && null !== g.visibleInstances[b._id];
                    if (d.isReady(b, h)) {
                        f.enableEffect(d._effect), c._bind(b, d._effect, a.Material.TriangleFillMode);
                        var i = b.getMaterial();
                        if (d._effect.setMatrix("viewProjection", e.getTransformMatrix()), d._effect.setFloat("far", e.activeCamera.maxZ), i && i.needAlphaTesting()) {
                            var j = i.getAlphaTestTexture();
                            d._effect.setTexture("diffuseSampler", j), d._effect.setMatrix("diffuseMatrix", j.getTextureMatrix())
                        }
                        c.useBones && d._effect.setMatrices("mBones", c.skeleton.getTransformMatrices()), c._processRendering(b, d._effect, a.Material.TriangleFillMode, g, h, function(a, b) {
                            return d._effect.setMatrix("world", b)
                        })
                    }
                }
            };
            this._depthMap.customRenderFunction = function(a, b) {
                var c;
                for (c = 0; c < a.length; c++) f(a.data[c]);
                for (c = 0; c < b.length; c++) f(b.data[c])
            }
        }
        return b.prototype.isReady = function(b, c) {
            var d = [],
                e = [a.VertexBuffer.PositionKind],
                f = b.getMesh(),
                g = (f.getScene(), b.getMaterial());
            g && g.needAlphaTesting() && (d.push("#define ALPHATEST"), f.isVerticesDataPresent(a.VertexBuffer.UVKind) && (e.push(a.VertexBuffer.UVKind), d.push("#define UV1")), f.isVerticesDataPresent(a.VertexBuffer.UV2Kind) && (e.push(a.VertexBuffer.UV2Kind), d.push("#define UV2"))), f.useBones && (e.push(a.VertexBuffer.MatricesIndicesKind), e.push(a.VertexBuffer.MatricesWeightsKind), d.push("#define BONES"), d.push("#define BonesPerMesh " + (f.skeleton.bones.length + 1))), c && (d.push("#define INSTANCES"), e.push("world0"), e.push("world1"), e.push("world2"), e.push("world3"));
            var h = d.join("\n");
            return this._cachedDefines !== h && (this._cachedDefines = h, this._effect = this._scene.getEngine().createEffect("depth", e, ["world", "mBones", "viewProjection", "diffuseMatrix", "far"], ["diffuseSampler"], h)), this._effect.isReady()
        }, b.prototype.getDepthMap = function() {
            return this._depthMap
        }, b.prototype.dispose = function() {
            this._depthMap.dispose()
        }, b
    }();
    a.DepthRenderer = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(c, d, e, f) {
            var g = this;
            void 0 === e && (e = 1), b.call(this, d.getEngine(), c), this.SSAOOriginalSceneColorEffect = "SSAOOriginalSceneColorEffect", this.SSAORenderEffect = "SSAORenderEffect", this.SSAOBlurHRenderEffect = "SSAOBlurHRenderEffect", this.SSAOBlurVRenderEffect = "SSAOBlurVRenderEffect", this.SSAOCombineRenderEffect = "SSAOCombineRenderEffect", this._firstUpdate = !0, this._scene = d, this._createRandomTexture(), this._depthTexture = d.enableDepthRenderer().getDepthMap(), this._originalColorPostProcess = new a.PassPostProcess("SSAOOriginalSceneColor", 1, null, a.Texture.BILINEAR_SAMPLINGMODE, d.getEngine(), !1), this._createSSAOPostProcess(e), this._blurHPostProcess = new a.BlurPostProcess("SSAOBlurH", new a.Vector2(2, 0), 1.3, e, null, a.Texture.BILINEAR_SAMPLINGMODE, d.getEngine(), !1), this._blurVPostProcess = new a.BlurPostProcess("SSAOBlurV", new a.Vector2(0, 2), 1.3, e, null, a.Texture.BILINEAR_SAMPLINGMODE, d.getEngine(), !1), this._createSSAOCombinePostProcess(), this.addEffect(new a.PostProcessRenderEffect(d.getEngine(), this.SSAOOriginalSceneColorEffect, function() {
                return g._originalColorPostProcess
            }, !0)), this.addEffect(new a.PostProcessRenderEffect(d.getEngine(), this.SSAORenderEffect, function() {
                return g._ssaoPostProcess
            }, !0)), this.addEffect(new a.PostProcessRenderEffect(d.getEngine(), this.SSAOBlurHRenderEffect, function() {
                return g._blurHPostProcess
            }, !0)), this.addEffect(new a.PostProcessRenderEffect(d.getEngine(), this.SSAOBlurVRenderEffect, function() {
                return g._blurVPostProcess
            }, !0)), this.addEffect(new a.PostProcessRenderEffect(d.getEngine(), this.SSAOCombineRenderEffect, function() {
                return g._ssaoCombinePostProcess
            }, !0)), d.postProcessRenderPipelineManager.addPipeline(this), f && d.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(c, f)
        }
        return __extends(c, b), c.prototype.getBlurHPostProcess = function() {
            return this._blurHPostProcess
        }, c.prototype.getBlurVPostProcess = function() {
            return this._blurVPostProcess
        }, c.prototype.dispose = function(a) {
            void 0 === a && (a = !1), this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name, this._scene.cameras), this._originalColorPostProcess = void 0, this._ssaoPostProcess = void 0, this._blurHPostProcess = void 0, this._blurVPostProcess = void 0, this._ssaoCombinePostProcess = void 0, this._randomTexture.dispose(), a && this._scene.disableDepthRenderer()
        }, c.prototype._createSSAOPostProcess = function(b) {
            var c = this,
                d = [.5381, .1856, -.4319, .1379, .2486, .443, .3371, .5679, -.0057, -.6999, -.0451, -.0019, .0689, -.1598, -.8547, .056, .0069, -.1843, -.0146, .1402, .0762, .01, -.1924, -.0344, -.3577, -.5301, -.4358, -.3169, .1063, .0158, .0103, -.5869, .0046, -.0897, -.494, .3287, .7119, -.0154, -.0918, -.0533, .0596, -.5411, .0352, -.0631, .546, -.4776, .2847, -.0271],
                e = 1 / 16;
            this._ssaoPostProcess = new a.PostProcess("ssao", "ssao", ["sampleSphere", "samplesFactor", "randTextureTiles"], ["randomSampler"], b, null, a.Texture.BILINEAR_SAMPLINGMODE, this._scene.getEngine(), !1), this._ssaoPostProcess.onApply = function(a) {
                c._firstUpdate && (a.setArray3("sampleSphere", d), a.setFloat("samplesFactor", e), a.setFloat("randTextureTiles", 4 / b), c._firstUpdate = !1), a.setTexture("textureSampler", c._depthTexture), a.setTexture("randomSampler", c._randomTexture)
            }
        }, c.prototype._createSSAOCombinePostProcess = function() {
            var b = this;
            this._ssaoCombinePostProcess = new a.PostProcess("ssaoCombine", "ssaoCombine", [], ["originalColor"], 1, null, a.Texture.BILINEAR_SAMPLINGMODE, this._scene.getEngine(), !1), this._ssaoCombinePostProcess.onApply = function(a) {
                a.setTextureFromPostProcess("originalColor", b._originalColorPostProcess)
            }
        }, c.prototype._createRandomTexture = function() {
            var b = 512;
            this._randomTexture = new a.DynamicTexture("SSAORandomTexture", b, this._scene, !1, a.Texture.BILINEAR_SAMPLINGMODE), this._randomTexture.wrapU = a.Texture.WRAP_ADDRESSMODE, this._randomTexture.wrapV = a.Texture.WRAP_ADDRESSMODE;
            for (var c = this._randomTexture.getContext(), d = function(a, b) {
                    return Math.random() * (b - a) + a
                }, e = 0; b > e; e++)
                for (var f = 0; b > f; f++) {
                    var g = a.Vector3.Zero();
                    g.x = Math.floor(255 * d(0, 1)), g.y = Math.floor(255 * d(0, 1)), g.z = Math.floor(255 * d(0, 1)), c.fillStyle = "rgb(" + g.x + ", " + g.y + ", " + g.z + ")", c.fillRect(e, f, 1, 1)
                }
            this._randomTexture.update(!1)
        }, c
    }(a.PostProcessRenderPipeline);
    a.SSAORenderingPipeline = b
}(BABYLON || (BABYLON = {}));
var BABYLON;
! function(a) {
    var b = function(b) {
        function c(d, e, f, g, h, i, j, k) {
            var l = this;
            void 0 === h && (h = 100), void 0 === i && (i = a.Texture.BILINEAR_SAMPLINGMODE), b.call(this, d, "volumetricLightScattering", ["decay", "exposure", "weight", "meshPositionOnScreen", "density"], ["lightScatteringSampler"], e, f, i, j, k, "#define NUM_SAMPLES " + h), this._screenCoordinates = a.Vector2.Zero(), this.useCustomMeshPosition = !1, this.invert = !0, this.excludedMeshes = new Array, this.exposure = .3, this.decay = .96815, this.weight = .58767, this.density = .926;
            var m = f.getScene();
            this._viewPort = new a.Viewport(0, 0, 1, 1).toGlobal(m.getEngine()), this.mesh = null !== g ? g : c.CreateDefaultMesh("VolumetricLightScatteringMesh", m), this._createPass(m, .5), this.onApply = function(a) {
                l._updateMeshScreenCoordinates(m), a.setTexture("lightScatteringSampler", l._volumetricLightScatteringRTT), a.setFloat("exposure", l.exposure), a.setFloat("decay", l.decay), a.setFloat("weight", l.weight), a.setFloat("density", l.density), a.setVector2("meshPositionOnScreen", l._screenCoordinates)
            }
        }
        return __extends(c, b), c.prototype.isReady = function(b, c) {
            var d = b.getMesh(),
                e = [],
                f = [a.VertexBuffer.PositionKind],
                g = b.getMaterial();
            d === this.mesh && e.push("#define BASIC_RENDER"), g && ((g.needAlphaTesting() || d === this.mesh) && e.push("#define ALPHATEST"), void 0 !== g.opacityTexture && e.push("#define OPACITY"), d.isVerticesDataPresent(a.VertexBuffer.UVKind) && (f.push(a.VertexBuffer.UVKind), e.push("#define UV1")), d.isVerticesDataPresent(a.VertexBuffer.UV2Kind) && (f.push(a.VertexBuffer.UV2Kind), e.push("#define UV2"))), d.useBones && (f.push(a.VertexBuffer.MatricesIndicesKind), f.push(a.VertexBuffer.MatricesWeightsKind), e.push("#define BONES"), e.push("#define BonesPerMesh " + (d.skeleton.bones.length + 1))), c && (e.push("#define INSTANCES"), f.push("world0"), f.push("world1"), f.push("world2"), f.push("world3"));
            var h = e.join("\n");
            return this._cachedDefines !== h && (this._cachedDefines = h, this._volumetricLightScatteringPass = d.getScene().getEngine().createEffect({
                vertexElement: "depth",
                fragmentElement: "volumetricLightScatteringPass"
            }, f, ["world", "mBones", "viewProjection", "diffuseMatrix", "far"], ["diffuseSampler", "opacitySampler"], h)), this._volumetricLightScatteringPass.isReady()
        }, c.prototype.setCustomMeshPosition = function(a) {
            this._customMeshPosition = a
        }, c.prototype.getCustomMeshPosition = function() {
            return this._customMeshPosition
        }, c.prototype.dispose = function(a) {
            var c = a.getScene().customRenderTargets.indexOf(this._volumetricLightScatteringRTT); - 1 !== c && a.getScene().customRenderTargets.splice(c, 1), this._volumetricLightScatteringRTT.dispose(), b.prototype.dispose.call(this, a)
        }, c.prototype.getPass = function() {
            return this._volumetricLightScatteringRTT
        }, c.prototype._meshExcluded = function(a) {
            return this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(a) ? !0 : !1
        }, c.prototype._createPass = function(b, c) {
            var d = this,
                e = b.getEngine();
            this._volumetricLightScatteringRTT = new a.RenderTargetTexture("volumetricLightScatteringMap", {
                width: e.getRenderWidth() * c,
                height: e.getRenderHeight() * c
            }, b, !1, !0, a.Engine.TEXTURETYPE_UNSIGNED_INT), this._volumetricLightScatteringRTT.wrapU = a.Texture.CLAMP_ADDRESSMODE, this._volumetricLightScatteringRTT.wrapV = a.Texture.CLAMP_ADDRESSMODE, this._volumetricLightScatteringRTT.renderList = null, this._volumetricLightScatteringRTT.renderParticles = !1, b.customRenderTargets.push(this._volumetricLightScatteringRTT);
            var f, g = function(b) {
                    var c = b.getRenderingMesh();
                    if (!d._meshExcluded(c)) {
                        var e = c.getScene(),
                            f = e.getEngine();
                        f.setState(b.getMaterial().backFaceCulling);
                        var g = c._getInstancesRenderList(b._id);
                        if (!g.mustReturn) {
                            var h = null !== f.getCaps().instancedArrays && null !== g.visibleInstances[b._id];
                            if (d.isReady(b, h)) {
                                f.enableEffect(d._volumetricLightScatteringPass), c._bind(b, d._volumetricLightScatteringPass, a.Material.TriangleFillMode);
                                var i = b.getMaterial();
                                if (d._volumetricLightScatteringPass.setMatrix("viewProjection", e.getTransformMatrix()), i && (c === d.mesh || i.needAlphaTesting() || void 0 !== i.opacityTexture)) {
                                    var j = i.getAlphaTestTexture();
                                    d._volumetricLightScatteringPass.setTexture("diffuseSampler", j), d.mesh.material && j && d._volumetricLightScatteringPass.setMatrix("diffuseMatrix", j.getTextureMatrix()), void 0 !== i.opacityTexture && d._volumetricLightScatteringPass.setTexture("opacitySampler", i.opacityTexture)
                                }
                                c.useBones && d._volumetricLightScatteringPass.setMatrices("mBones", c.skeleton.getTransformMatrices()), c._processRendering(b, d._volumetricLightScatteringPass, a.Material.TriangleFillMode, g, h, function(a, b) {
                                    return d._volumetricLightScatteringPass.setMatrix("world", b)
                                })
                            }
                        }
                    }
                },
                h = new a.Color3(0, 0, 0);
            this._volumetricLightScatteringRTT.onBeforeRender = function() {
                f = b.clearColor, b.clearColor = h
            }, this._volumetricLightScatteringRTT.onAfterRender = function() {
                b.clearColor = f
            }, this._volumetricLightScatteringRTT.customRenderFunction = function(a, b, c) {
                var d;
                for (d = 0; d < a.length; d++) g(a.data[d]);
                for (d = 0; d < b.length; d++) g(b.data[d]);
                for (d = 0; d < c.length; d++) g(c.data[d])
            }
        }, c.prototype._updateMeshScreenCoordinates = function(b) {
            var c = b.getTransformMatrix(),
                d = a.Vector3.Project(this.useCustomMeshPosition ? this._customMeshPosition : this.mesh.position, a.Matrix.Identity(), c, this._viewPort);
            this._screenCoordinates.x = d.x / this._viewPort.width, this._screenCoordinates.y = d.y / this._viewPort.height, this.invert && (this._screenCoordinates.y = 1 - this._screenCoordinates.y)
        }, c.CreateDefaultMesh = function(b, c) {
            var d = a.Mesh.CreatePlane(b, 1, c);
            return d.billboardMode = a.AbstractMesh.BILLBOARDMODE_ALL, d.material = new a.StandardMaterial(b + "Material", c), d
        }, c
    }(a.PostProcess);
    a.VolumetricLightScatteringPostProcess = b
}(BABYLON || (BABYLON = {}));