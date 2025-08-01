!(function (t, e) {
     'object' == typeof exports && 'undefined' != typeof module
          ? e(exports)
          : 'function' == typeof define && define.amd
          ? define(['exports'], e)
          : e(((t = 'undefined' != typeof globalThis ? globalThis : t || self).ZXing = {}));
})(this, function (t) {
     'use strict';
     var e,
          r,
          n =
               ((e = function (t, r) {
                    return (
                         (e =
                              Object.setPrototypeOf ||
                              ({ __proto__: [] } instanceof Array &&
                                   function (t, e) {
                                        t.__proto__ = e;
                                   }) ||
                              function (t, e) {
                                   for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                              }),
                         e(t, r)
                    );
               }),
               function (t, r) {
                    if ('function' != typeof r && null !== r) throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
                    function n() {
                         this.constructor = t;
                    }
                    e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
               }),
          i = (function (t) {
               function e(e, r) {
                    var n,
                         i,
                         s,
                         o = this.constructor,
                         a = t.call(this, e, r) || this;
                    return (
                         Object.defineProperty(a, 'name', { value: o.name, enumerable: !1, configurable: !0 }),
                         (n = a),
                         (i = o.prototype),
                         (s = Object.setPrototypeOf) ? s(n, i) : (n.__proto__ = i),
                         (function (t, e) {
                              void 0 === e && (e = t.constructor);
                              var r = Error.captureStackTrace;
                              r && r(t, e);
                         })(a),
                         a
                    );
               }
               return n(e, t), e;
          })(Error);
     class s extends i {
          constructor(t = void 0) {
               super(t), (this.message = t);
          }
          getKind() {
               return this.constructor.kind;
          }
     }
     s.kind = 'Exception';
     class o extends s {}
     o.kind = 'ArgumentException';
     class a extends s {}
     a.kind = 'IllegalArgumentException';
     class h {
          constructor(t) {
               if (((this.binarizer = t), null === t)) throw new a('Binarizer must be non-null.');
          }
          getWidth() {
               return this.binarizer.getWidth();
          }
          getHeight() {
               return this.binarizer.getHeight();
          }
          getBlackRow(t, e) {
               return this.binarizer.getBlackRow(t, e);
          }
          getBlackMatrix() {
               return (null !== this.matrix && void 0 !== this.matrix) || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
          }
          isCropSupported() {
               return this.binarizer.getLuminanceSource().isCropSupported();
          }
          crop(t, e, r, n) {
               const i = this.binarizer.getLuminanceSource().crop(t, e, r, n);
               return new h(this.binarizer.createBinarizer(i));
          }
          isRotateSupported() {
               return this.binarizer.getLuminanceSource().isRotateSupported();
          }
          rotateCounterClockwise() {
               const t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
               return new h(this.binarizer.createBinarizer(t));
          }
          rotateCounterClockwise45() {
               const t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
               return new h(this.binarizer.createBinarizer(t));
          }
          toString() {
               try {
                    return this.getBlackMatrix().toString();
               } catch (t) {
                    return '';
               }
          }
     }
     class l extends s {
          static getChecksumInstance() {
               return new l();
          }
     }
     l.kind = 'ChecksumException';
     class c {
          constructor(t) {
               this.source = t;
          }
          getLuminanceSource() {
               return this.source;
          }
          getWidth() {
               return this.source.getWidth();
          }
          getHeight() {
               return this.source.getHeight();
          }
     }
     class d {
          static arraycopy(t, e, r, n, i) {
               for (; i--; ) r[n++] = t[e++];
          }
          static currentTimeMillis() {
               return Date.now();
          }
     }
     class u extends s {}
     u.kind = 'IndexOutOfBoundsException';
     class g extends u {
          constructor(t = void 0, e = void 0) {
               super(e), (this.index = t), (this.message = e);
          }
     }
     g.kind = 'ArrayIndexOutOfBoundsException';
     class f {
          static fill(t, e) {
               for (let r = 0, n = t.length; r < n; r++) t[r] = e;
          }
          static fillWithin(t, e, r, n) {
               f.rangeCheck(t.length, e, r);
               for (let i = e; i < r; i++) t[i] = n;
          }
          static rangeCheck(t, e, r) {
               if (e > r) throw new a('fromIndex(' + e + ') > toIndex(' + r + ')');
               if (e < 0) throw new g(e);
               if (r > t) throw new g(r);
          }
          static asList(...t) {
               return t;
          }
          static create(t, e, r) {
               return Array.from({ length: t }).map((t) => Array.from({ length: e }).fill(r));
          }
          static createInt32Array(t, e, r) {
               return Array.from({ length: t }).map((t) => Int32Array.from({ length: e }).fill(r));
          }
          static equals(t, e) {
               if (!t) return !1;
               if (!e) return !1;
               if (!t.length) return !1;
               if (!e.length) return !1;
               if (t.length !== e.length) return !1;
               for (let r = 0, n = t.length; r < n; r++) if (t[r] !== e[r]) return !1;
               return !0;
          }
          static hashCode(t) {
               if (null === t) return 0;
               let e = 1;
               for (const r of t) e = 31 * e + r;
               return e;
          }
          static fillUint8Array(t, e) {
               for (let r = 0; r !== t.length; r++) t[r] = e;
          }
          static copyOf(t, e) {
               return t.slice(0, e);
          }
          static copyOfUint8Array(t, e) {
               if (t.length <= e) {
                    const r = new Uint8Array(e);
                    return r.set(t), r;
               }
               return t.slice(0, e);
          }
          static copyOfRange(t, e, r) {
               const n = r - e,
                    i = new Int32Array(n);
               return d.arraycopy(t, e, i, 0, n), i;
          }
          static binarySearch(t, e, r) {
               void 0 === r && (r = f.numberComparator);
               let n = 0,
                    i = t.length - 1;
               for (; n <= i; ) {
                    const s = (i + n) >> 1,
                         o = r(e, t[s]);
                    if (o > 0) n = s + 1;
                    else {
                         if (!(o < 0)) return s;
                         i = s - 1;
                    }
               }
               return -n - 1;
          }
          static numberComparator(t, e) {
               return t - e;
          }
     }
     class w {
          static numberOfTrailingZeros(t) {
               let e;
               if (0 === t) return 32;
               let r = 31;
               return (
                    (e = t << 16),
                    0 !== e && ((r -= 16), (t = e)),
                    (e = t << 8),
                    0 !== e && ((r -= 8), (t = e)),
                    (e = t << 4),
                    0 !== e && ((r -= 4), (t = e)),
                    (e = t << 2),
                    0 !== e && ((r -= 2), (t = e)),
                    r - ((t << 1) >>> 31)
               );
          }
          static numberOfLeadingZeros(t) {
               if (0 === t) return 32;
               let e = 1;
               return (
                    t >>> 16 == 0 && ((e += 16), (t <<= 16)),
                    t >>> 24 == 0 && ((e += 8), (t <<= 8)),
                    t >>> 28 == 0 && ((e += 4), (t <<= 4)),
                    t >>> 30 == 0 && ((e += 2), (t <<= 2)),
                    (e -= t >>> 31),
                    e
               );
          }
          static toHexString(t) {
               return t.toString(16);
          }
          static toBinaryString(t) {
               return String(parseInt(String(t), 2));
          }
          static bitCount(t) {
               return (
                    (t = ((t = (858993459 & (t -= (t >>> 1) & 1431655765)) + ((t >>> 2) & 858993459)) + (t >>> 4)) & 252645135),
                    (t += t >>> 8),
                    63 & (t += t >>> 16)
               );
          }
          static truncDivision(t, e) {
               return Math.trunc(t / e);
          }
          static parseInt(t, e = void 0) {
               return parseInt(t, e);
          }
     }
     (w.MIN_VALUE_32_BITS = -2147483648), (w.MAX_VALUE = Number.MAX_SAFE_INTEGER);
     class C {
          constructor(t, e) {
               void 0 === t ? ((this.size = 0), (this.bits = new Int32Array(1))) : ((this.size = t), (this.bits = null == e ? C.makeArray(t) : e));
          }
          getSize() {
               return this.size;
          }
          getSizeInBytes() {
               return Math.floor((this.size + 7) / 8);
          }
          ensureCapacity(t) {
               if (t > 32 * this.bits.length) {
                    const e = C.makeArray(t);
                    d.arraycopy(this.bits, 0, e, 0, this.bits.length), (this.bits = e);
               }
          }
          get(t) {
               return !!(this.bits[Math.floor(t / 32)] & (1 << (31 & t)));
          }
          set(t) {
               this.bits[Math.floor(t / 32)] |= 1 << (31 & t);
          }
          flip(t) {
               this.bits[Math.floor(t / 32)] ^= 1 << (31 & t);
          }
          getNextSet(t) {
               const e = this.size;
               if (t >= e) return e;
               const r = this.bits;
               let n = Math.floor(t / 32),
                    i = r[n];
               i &= ~((1 << (31 & t)) - 1);
               const s = r.length;
               for (; 0 === i; ) {
                    if (++n === s) return e;
                    i = r[n];
               }
               const o = 32 * n + w.numberOfTrailingZeros(i);
               return o > e ? e : o;
          }
          getNextUnset(t) {
               const e = this.size;
               if (t >= e) return e;
               const r = this.bits;
               let n = Math.floor(t / 32),
                    i = ~r[n];
               i &= ~((1 << (31 & t)) - 1);
               const s = r.length;
               for (; 0 === i; ) {
                    if (++n === s) return e;
                    i = ~r[n];
               }
               const o = 32 * n + w.numberOfTrailingZeros(i);
               return o > e ? e : o;
          }
          setBulk(t, e) {
               this.bits[Math.floor(t / 32)] = e;
          }
          setRange(t, e) {
               if (e < t || t < 0 || e > this.size) throw new a();
               if (e === t) return;
               e--;
               const r = Math.floor(t / 32),
                    n = Math.floor(e / 32),
                    i = this.bits;
               for (let s = r; s <= n; s++) {
                    const o = (2 << (s < n ? 31 : 31 & e)) - (1 << (s > r ? 0 : 31 & t));
                    i[s] |= o;
               }
          }
          clear() {
               const t = this.bits.length,
                    e = this.bits;
               for (let r = 0; r < t; r++) e[r] = 0;
          }
          isRange(t, e, r) {
               if (e < t || t < 0 || e > this.size) throw new a();
               if (e === t) return !0;
               e--;
               const n = Math.floor(t / 32),
                    i = Math.floor(e / 32),
                    s = this.bits;
               for (let o = n; o <= i; o++) {
                    const a = ((2 << (o < i ? 31 : 31 & e)) - (1 << (o > n ? 0 : 31 & t))) & 4294967295;
                    if ((s[o] & a) !== (r ? a : 0)) return !1;
               }
               return !0;
          }
          appendBit(t) {
               this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++;
          }
          appendBits(t, e) {
               if (e < 0 || e > 32) throw new a('Num bits must be between 0 and 32');
               this.ensureCapacity(this.size + e);
               for (let r = e; r > 0; r--) this.appendBit(1 == ((t >> (r - 1)) & 1));
          }
          appendBitArray(t) {
               const e = t.size;
               this.ensureCapacity(this.size + e);
               for (let r = 0; r < e; r++) this.appendBit(t.get(r));
          }
          xor(t) {
               if (this.size !== t.size) throw new a("Sizes don't match");
               const e = this.bits;
               for (let r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r];
          }
          toBytes(t, e, r, n) {
               for (let i = 0; i < n; i++) {
                    let n = 0;
                    for (let e = 0; e < 8; e++) this.get(t) && (n |= 1 << (7 - e)), t++;
                    e[r + i] = n;
               }
          }
          getBitArray() {
               return this.bits;
          }
          reverse() {
               const t = new Int32Array(this.bits.length),
                    e = Math.floor((this.size - 1) / 32),
                    r = e + 1,
                    n = this.bits;
               for (let i = 0; i < r; i++) {
                    let r = n[i];
                    (r = ((r >> 1) & 1431655765) | ((1431655765 & r) << 1)),
                         (r = ((r >> 2) & 858993459) | ((858993459 & r) << 2)),
                         (r = ((r >> 4) & 252645135) | ((252645135 & r) << 4)),
                         (r = ((r >> 8) & 16711935) | ((16711935 & r) << 8)),
                         (r = ((r >> 16) & 65535) | ((65535 & r) << 16)),
                         (t[e - i] = r);
               }
               if (this.size !== 32 * r) {
                    const e = 32 * r - this.size;
                    let n = t[0] >>> e;
                    for (let i = 1; i < r; i++) {
                         const r = t[i];
                         (n |= r << (32 - e)), (t[i - 1] = n), (n = r >>> e);
                    }
                    t[r - 1] = n;
               }
               this.bits = t;
          }
          static makeArray(t) {
               return new Int32Array(Math.floor((t + 31) / 32));
          }
          equals(t) {
               if (!(t instanceof C)) return !1;
               const e = t;
               return this.size === e.size && f.equals(this.bits, e.bits);
          }
          hashCode() {
               return 31 * this.size + f.hashCode(this.bits);
          }
          toString() {
               let t = '';
               for (let e = 0, r = this.size; e < r; e++) 7 & e || (t += ' '), (t += this.get(e) ? 'X' : '.');
               return t;
          }
          clone() {
               return new C(this.size, this.bits.slice());
          }
          toArray() {
               let t = [];
               for (let e = 0, r = this.size; e < r; e++) t.push(this.get(e));
               return t;
          }
     }
     !(function (t) {
          (t[(t.OTHER = 0)] = 'OTHER'),
               (t[(t.PURE_BARCODE = 1)] = 'PURE_BARCODE'),
               (t[(t.POSSIBLE_FORMATS = 2)] = 'POSSIBLE_FORMATS'),
               (t[(t.TRY_HARDER = 3)] = 'TRY_HARDER'),
               (t[(t.CHARACTER_SET = 4)] = 'CHARACTER_SET'),
               (t[(t.ALLOWED_LENGTHS = 5)] = 'ALLOWED_LENGTHS'),
               (t[(t.ASSUME_CODE_39_CHECK_DIGIT = 6)] = 'ASSUME_CODE_39_CHECK_DIGIT'),
               (t[(t.ENABLE_CODE_39_EXTENDED_MODE = 7)] = 'ENABLE_CODE_39_EXTENDED_MODE'),
               (t[(t.ASSUME_GS1 = 8)] = 'ASSUME_GS1'),
               (t[(t.RETURN_CODABAR_START_END = 9)] = 'RETURN_CODABAR_START_END'),
               (t[(t.NEED_RESULT_POINT_CALLBACK = 10)] = 'NEED_RESULT_POINT_CALLBACK'),
               (t[(t.ALLOWED_EAN_EXTENSIONS = 11)] = 'ALLOWED_EAN_EXTENSIONS');
     })(r || (r = {}));
     var A,
          E = r;
     class m extends s {
          static getFormatInstance() {
               return new m();
          }
     }
     (m.kind = 'FormatException'),
          (function (t) {
               (t[(t.Cp437 = 0)] = 'Cp437'),
                    (t[(t.ISO8859_1 = 1)] = 'ISO8859_1'),
                    (t[(t.ISO8859_2 = 2)] = 'ISO8859_2'),
                    (t[(t.ISO8859_3 = 3)] = 'ISO8859_3'),
                    (t[(t.ISO8859_4 = 4)] = 'ISO8859_4'),
                    (t[(t.ISO8859_5 = 5)] = 'ISO8859_5'),
                    (t[(t.ISO8859_6 = 6)] = 'ISO8859_6'),
                    (t[(t.ISO8859_7 = 7)] = 'ISO8859_7'),
                    (t[(t.ISO8859_8 = 8)] = 'ISO8859_8'),
                    (t[(t.ISO8859_9 = 9)] = 'ISO8859_9'),
                    (t[(t.ISO8859_10 = 10)] = 'ISO8859_10'),
                    (t[(t.ISO8859_11 = 11)] = 'ISO8859_11'),
                    (t[(t.ISO8859_13 = 12)] = 'ISO8859_13'),
                    (t[(t.ISO8859_14 = 13)] = 'ISO8859_14'),
                    (t[(t.ISO8859_15 = 14)] = 'ISO8859_15'),
                    (t[(t.ISO8859_16 = 15)] = 'ISO8859_16'),
                    (t[(t.SJIS = 16)] = 'SJIS'),
                    (t[(t.Cp1250 = 17)] = 'Cp1250'),
                    (t[(t.Cp1251 = 18)] = 'Cp1251'),
                    (t[(t.Cp1252 = 19)] = 'Cp1252'),
                    (t[(t.Cp1256 = 20)] = 'Cp1256'),
                    (t[(t.UnicodeBigUnmarked = 21)] = 'UnicodeBigUnmarked'),
                    (t[(t.UTF8 = 22)] = 'UTF8'),
                    (t[(t.ASCII = 23)] = 'ASCII'),
                    (t[(t.Big5 = 24)] = 'Big5'),
                    (t[(t.GB18030 = 25)] = 'GB18030'),
                    (t[(t.EUC_KR = 26)] = 'EUC_KR');
          })(A || (A = {}));
     class I {
          constructor(t, e, r, ...n) {
               (this.valueIdentifier = t),
                    (this.name = r),
                    (this.values = 'number' == typeof e ? Int32Array.from([e]) : e),
                    (this.otherEncodingNames = n),
                    I.VALUE_IDENTIFIER_TO_ECI.set(t, this),
                    I.NAME_TO_ECI.set(r, this);
               const i = this.values;
               for (let t = 0, e = i.length; t !== e; t++) {
                    const e = i[t];
                    I.VALUES_TO_ECI.set(e, this);
               }
               for (const t of n) I.NAME_TO_ECI.set(t, this);
          }
          getValueIdentifier() {
               return this.valueIdentifier;
          }
          getName() {
               return this.name;
          }
          getValue() {
               return this.values[0];
          }
          static getCharacterSetECIByValue(t) {
               if (t < 0 || t >= 900) throw new m('incorect value');
               const e = I.VALUES_TO_ECI.get(t);
               if (void 0 === e) throw new m('incorect value');
               return e;
          }
          static getCharacterSetECIByName(t) {
               const e = I.NAME_TO_ECI.get(t);
               if (void 0 === e) throw new m('incorect value');
               return e;
          }
          equals(t) {
               if (!(t instanceof I)) return !1;
               const e = t;
               return this.getName() === e.getName();
          }
     }
     (I.VALUE_IDENTIFIER_TO_ECI = new Map()),
          (I.VALUES_TO_ECI = new Map()),
          (I.NAME_TO_ECI = new Map()),
          (I.Cp437 = new I(A.Cp437, Int32Array.from([0, 2]), 'Cp437')),
          (I.ISO8859_1 = new I(A.ISO8859_1, Int32Array.from([1, 3]), 'ISO-8859-1', 'ISO88591', 'ISO8859_1')),
          (I.ISO8859_2 = new I(A.ISO8859_2, 4, 'ISO-8859-2', 'ISO88592', 'ISO8859_2')),
          (I.ISO8859_3 = new I(A.ISO8859_3, 5, 'ISO-8859-3', 'ISO88593', 'ISO8859_3')),
          (I.ISO8859_4 = new I(A.ISO8859_4, 6, 'ISO-8859-4', 'ISO88594', 'ISO8859_4')),
          (I.ISO8859_5 = new I(A.ISO8859_5, 7, 'ISO-8859-5', 'ISO88595', 'ISO8859_5')),
          (I.ISO8859_6 = new I(A.ISO8859_6, 8, 'ISO-8859-6', 'ISO88596', 'ISO8859_6')),
          (I.ISO8859_7 = new I(A.ISO8859_7, 9, 'ISO-8859-7', 'ISO88597', 'ISO8859_7')),
          (I.ISO8859_8 = new I(A.ISO8859_8, 10, 'ISO-8859-8', 'ISO88598', 'ISO8859_8')),
          (I.ISO8859_9 = new I(A.ISO8859_9, 11, 'ISO-8859-9', 'ISO88599', 'ISO8859_9')),
          (I.ISO8859_10 = new I(A.ISO8859_10, 12, 'ISO-8859-10', 'ISO885910', 'ISO8859_10')),
          (I.ISO8859_11 = new I(A.ISO8859_11, 13, 'ISO-8859-11', 'ISO885911', 'ISO8859_11')),
          (I.ISO8859_13 = new I(A.ISO8859_13, 15, 'ISO-8859-13', 'ISO885913', 'ISO8859_13')),
          (I.ISO8859_14 = new I(A.ISO8859_14, 16, 'ISO-8859-14', 'ISO885914', 'ISO8859_14')),
          (I.ISO8859_15 = new I(A.ISO8859_15, 17, 'ISO-8859-15', 'ISO885915', 'ISO8859_15')),
          (I.ISO8859_16 = new I(A.ISO8859_16, 18, 'ISO-8859-16', 'ISO885916', 'ISO8859_16')),
          (I.SJIS = new I(A.SJIS, 20, 'SJIS', 'Shift_JIS')),
          (I.Cp1250 = new I(A.Cp1250, 21, 'Cp1250', 'windows-1250')),
          (I.Cp1251 = new I(A.Cp1251, 22, 'Cp1251', 'windows-1251')),
          (I.Cp1252 = new I(A.Cp1252, 23, 'Cp1252', 'windows-1252')),
          (I.Cp1256 = new I(A.Cp1256, 24, 'Cp1256', 'windows-1256')),
          (I.UnicodeBigUnmarked = new I(A.UnicodeBigUnmarked, 25, 'UnicodeBigUnmarked', 'UTF-16BE', 'UnicodeBig')),
          (I.UTF8 = new I(A.UTF8, 26, 'UTF8', 'UTF-8')),
          (I.ASCII = new I(A.ASCII, Int32Array.from([27, 170]), 'ASCII', 'US-ASCII')),
          (I.Big5 = new I(A.Big5, 28, 'Big5')),
          (I.GB18030 = new I(A.GB18030, 29, 'GB18030', 'GB2312', 'EUC_CN', 'GBK')),
          (I.EUC_KR = new I(A.EUC_KR, 30, 'EUC_KR', 'EUC-KR'));
     class _ extends s {}
     _.kind = 'UnsupportedOperationException';
     class S {
          static decode(t, e) {
               const r = this.encodingName(e);
               return this.customDecoder
                    ? this.customDecoder(t, r)
                    : 'undefined' == typeof TextDecoder || this.shouldDecodeOnFallback(r)
                    ? this.decodeFallback(t, r)
                    : new TextDecoder(r).decode(t);
          }
          static shouldDecodeOnFallback(t) {
               return !S.isBrowser() && 'ISO-8859-1' === t;
          }
          static encode(t, e) {
               const r = this.encodingName(e);
               return this.customEncoder ? this.customEncoder(t, r) : 'undefined' == typeof TextEncoder ? this.encodeFallback(t) : new TextEncoder().encode(t);
          }
          static isBrowser() {
               return 'undefined' != typeof window && '[object Window]' === {}.toString.call(window);
          }
          static encodingName(t) {
               return 'string' == typeof t ? t : t.getName();
          }
          static encodingCharacterSet(t) {
               return t instanceof I ? t : I.getCharacterSetECIByName(t);
          }
          static decodeFallback(t, e) {
               const r = this.encodingCharacterSet(e);
               if (S.isDecodeFallbackSupported(r)) {
                    let e = '';
                    for (let r = 0, n = t.length; r < n; r++) {
                         let n = t[r].toString(16);
                         n.length < 2 && (n = '0' + n), (e += '%' + n);
                    }
                    return decodeURIComponent(e);
               }
               if (r.equals(I.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
               throw new _(`Encoding ${this.encodingName(e)} not supported by fallback.`);
          }
          static isDecodeFallbackSupported(t) {
               return t.equals(I.UTF8) || t.equals(I.ISO8859_1) || t.equals(I.ASCII);
          }
          static encodeFallback(t) {
               const e = btoa(unescape(encodeURIComponent(t))).split(''),
                    r = [];
               for (let t = 0; t < e.length; t++) r.push(e[t].charCodeAt(0));
               return new Uint8Array(r);
          }
     }
     class p {
          static castAsNonUtf8Char(t, e = null) {
               const r = e ? e.getName() : this.ISO88591;
               return S.decode(new Uint8Array([t]), r);
          }
          static guessEncoding(t, e) {
               if (null != e && void 0 !== e.get(E.CHARACTER_SET)) return e.get(E.CHARACTER_SET).toString();
               const r = t.length;
               let n = !0,
                    i = !0,
                    s = !0,
                    o = 0,
                    a = 0,
                    h = 0,
                    l = 0,
                    c = 0,
                    d = 0,
                    u = 0,
                    g = 0,
                    f = 0,
                    w = 0,
                    C = 0;
               const A = t.length > 3 && 239 === t[0] && 187 === t[1] && 191 === t[2];
               for (let e = 0; e < r && (n || i || s); e++) {
                    const r = 255 & t[e];
                    s &&
                         (o > 0
                              ? 128 & r
                                   ? o--
                                   : (s = !1)
                              : 128 & r && (64 & r ? (o++, 32 & r ? (o++, 16 & r ? (o++, 8 & r ? (s = !1) : l++) : h++) : a++) : (s = !1))),
                         n && (r > 127 && r < 160 ? (n = !1) : r > 159 && (r < 192 || 215 === r || 247 === r) && C++),
                         i &&
                              (c > 0
                                   ? r < 64 || 127 === r || r > 252
                                        ? (i = !1)
                                        : c--
                                   : 128 === r || 160 === r || r > 239
                                   ? (i = !1)
                                   : r > 160 && r < 224
                                   ? (d++, (g = 0), u++, u > f && (f = u))
                                   : r > 127
                                   ? (c++, (u = 0), g++, g > w && (w = g))
                                   : ((u = 0), (g = 0)));
               }
               return (
                    s && o > 0 && (s = !1),
                    i && c > 0 && (i = !1),
                    s && (A || a + h + l > 0)
                         ? p.UTF8
                         : i && (p.ASSUME_SHIFT_JIS || f >= 3 || w >= 3)
                         ? p.SHIFT_JIS
                         : n && i
                         ? (2 === f && 2 === d) || 10 * C >= r
                              ? p.SHIFT_JIS
                              : p.ISO88591
                         : n
                         ? p.ISO88591
                         : i
                         ? p.SHIFT_JIS
                         : s
                         ? p.UTF8
                         : p.PLATFORM_DEFAULT_ENCODING
               );
          }
          static format(t, ...e) {
               let r = -1;
               return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, i, s, o, a) {
                    if ('%%' === t) return '%';
                    if (void 0 === e[++r]) return;
                    t = s ? parseInt(s.substr(1)) : void 0;
                    let h,
                         l = o ? parseInt(o.substr(1)) : void 0;
                    switch (a) {
                         case 's':
                              h = e[r];
                              break;
                         case 'c':
                              h = e[r][0];
                              break;
                         case 'f':
                              h = parseFloat(e[r]).toFixed(t);
                              break;
                         case 'p':
                              h = parseFloat(e[r]).toPrecision(t);
                              break;
                         case 'e':
                              h = parseFloat(e[r]).toExponential(t);
                              break;
                         case 'x':
                              h = parseInt(e[r]).toString(l || 16);
                              break;
                         case 'd':
                              h = parseFloat(parseInt(e[r], l || 10).toPrecision(t)).toFixed(0);
                    }
                    h = 'object' == typeof h ? JSON.stringify(h) : (+h).toString(l);
                    let c = parseInt(i),
                         d = i && i[0] + '' == '0' ? '0' : ' ';
                    for (; h.length < c; ) h = void 0 !== n ? h + d : d + h;
                    return h;
               });
          }
          static getBytes(t, e) {
               return S.encode(t, e);
          }
          static getCharCode(t, e = 0) {
               return t.charCodeAt(e);
          }
          static getCharAt(t) {
               return String.fromCharCode(t);
          }
     }
     (p.SHIFT_JIS = I.SJIS.getName()),
          (p.GB2312 = 'GB2312'),
          (p.ISO88591 = I.ISO8859_1.getName()),
          (p.EUC_JP = 'EUC_JP'),
          (p.UTF8 = I.UTF8.getName()),
          (p.PLATFORM_DEFAULT_ENCODING = p.UTF8),
          (p.ASSUME_SHIFT_JIS = !1);
     class T {
          constructor(t = '') {
               this.value = t;
          }
          enableDecoding(t) {
               return (this.encoding = t), this;
          }
          append(t) {
               return (
                    'string' == typeof t
                         ? (this.value += t.toString())
                         : this.encoding
                         ? (this.value += p.castAsNonUtf8Char(t, this.encoding))
                         : (this.value += String.fromCharCode(t)),
                    this
               );
          }
          appendChars(t, e, r) {
               for (let n = e; e < e + r; n++) this.append(t[n]);
               return this;
          }
          length() {
               return this.value.length;
          }
          charAt(t) {
               return this.value.charAt(t);
          }
          deleteCharAt(t) {
               this.value = this.value.substr(0, t) + this.value.substring(t + 1);
          }
          setCharAt(t, e) {
               this.value = this.value.substr(0, t) + e + this.value.substr(t + 1);
          }
          substring(t, e) {
               return this.value.substring(t, e);
          }
          setLengthToZero() {
               this.value = '';
          }
          toString() {
               return this.value;
          }
          insert(t, e) {
               this.value = this.value.substring(0, t) + e + this.value.substring(t);
          }
     }
     class R {
          constructor(t, e, r, n) {
               if (((this.width = t), (this.height = e), (this.rowSize = r), (this.bits = n), null == e && (e = t), (this.height = e), t < 1 || e < 1))
                    throw new a('Both dimensions must be greater than 0');
               null == r && (r = Math.floor((t + 31) / 32)), (this.rowSize = r), null == n && (this.bits = new Int32Array(this.rowSize * this.height));
          }
          static parseFromBooleanArray(t) {
               const e = t.length,
                    r = t[0].length,
                    n = new R(r, e);
               for (let i = 0; i < e; i++) {
                    const e = t[i];
                    for (let t = 0; t < r; t++) e[t] && n.set(t, i);
               }
               return n;
          }
          static parseFromString(t, e, r) {
               if (null === t) throw new a('stringRepresentation cannot be null');
               const n = new Array(t.length);
               let i = 0,
                    s = 0,
                    o = -1,
                    h = 0,
                    l = 0;
               for (; l < t.length; )
                    if ('\n' === t.charAt(l) || '\r' === t.charAt(l)) {
                         if (i > s) {
                              if (-1 === o) o = i - s;
                              else if (i - s !== o) throw new a('row lengths do not match');
                              (s = i), h++;
                         }
                         l++;
                    } else if (t.substring(l, l + e.length) === e) (l += e.length), (n[i] = !0), i++;
                    else {
                         if (t.substring(l, l + r.length) !== r) throw new a('illegal character encountered: ' + t.substring(l));
                         (l += r.length), (n[i] = !1), i++;
                    }
               if (i > s) {
                    if (-1 === o) o = i - s;
                    else if (i - s !== o) throw new a('row lengths do not match');
                    h++;
               }
               const c = new R(o, h);
               for (let t = 0; t < i; t++) n[t] && c.set(Math.floor(t % o), Math.floor(t / o));
               return c;
          }
          get(t, e) {
               const r = e * this.rowSize + Math.floor(t / 32);
               return !!((this.bits[r] >>> (31 & t)) & 1);
          }
          set(t, e) {
               const r = e * this.rowSize + Math.floor(t / 32);
               this.bits[r] |= (1 << (31 & t)) & 4294967295;
          }
          unset(t, e) {
               const r = e * this.rowSize + Math.floor(t / 32);
               this.bits[r] &= ~((1 << (31 & t)) & 4294967295);
          }
          flip(t, e) {
               const r = e * this.rowSize + Math.floor(t / 32);
               this.bits[r] ^= (1 << (31 & t)) & 4294967295;
          }
          xor(t) {
               if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize())
                    throw new a('input matrix dimensions do not match');
               const e = new C(Math.floor(this.width / 32) + 1),
                    r = this.rowSize,
                    n = this.bits;
               for (let i = 0, s = this.height; i < s; i++) {
                    const s = i * r,
                         o = t.getRow(i, e).getBitArray();
                    for (let t = 0; t < r; t++) n[s + t] ^= o[t];
               }
          }
          clear() {
               const t = this.bits,
                    e = t.length;
               for (let r = 0; r < e; r++) t[r] = 0;
          }
          setRegion(t, e, r, n) {
               if (e < 0 || t < 0) throw new a('Left and top must be nonnegative');
               if (n < 1 || r < 1) throw new a('Height and width must be at least 1');
               const i = t + r,
                    s = e + n;
               if (s > this.height || i > this.width) throw new a('The region must fit inside the matrix');
               const o = this.rowSize,
                    h = this.bits;
               for (let r = e; r < s; r++) {
                    const e = r * o;
                    for (let r = t; r < i; r++) h[e + Math.floor(r / 32)] |= (1 << (31 & r)) & 4294967295;
               }
          }
          getRow(t, e) {
               null == e || e.getSize() < this.width ? (e = new C(this.width)) : e.clear();
               const r = this.rowSize,
                    n = this.bits,
                    i = t * r;
               for (let t = 0; t < r; t++) e.setBulk(32 * t, n[i + t]);
               return e;
          }
          setRow(t, e) {
               d.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize);
          }
          rotate180() {
               const t = this.getWidth(),
                    e = this.getHeight();
               let r = new C(t),
                    n = new C(t);
               for (let t = 0, i = Math.floor((e + 1) / 2); t < i; t++)
                    (r = this.getRow(t, r)), (n = this.getRow(e - 1 - t, n)), r.reverse(), n.reverse(), this.setRow(t, n), this.setRow(e - 1 - t, r);
          }
          getEnclosingRectangle() {
               const t = this.width,
                    e = this.height,
                    r = this.rowSize,
                    n = this.bits;
               let i = t,
                    s = e,
                    o = -1,
                    a = -1;
               for (let t = 0; t < e; t++)
                    for (let e = 0; e < r; e++) {
                         const h = n[t * r + e];
                         if (0 !== h) {
                              if ((t < s && (s = t), t > a && (a = t), 32 * e < i)) {
                                   let t = 0;
                                   for (; !((h << (31 - t)) & 4294967295); ) t++;
                                   32 * e + t < i && (i = 32 * e + t);
                              }
                              if (32 * e + 31 > o) {
                                   let t = 31;
                                   for (; h >>> t == 0; ) t--;
                                   32 * e + t > o && (o = 32 * e + t);
                              }
                         }
                    }
               return o < i || a < s ? null : Int32Array.from([i, s, o - i + 1, a - s + 1]);
          }
          getTopLeftOnBit() {
               const t = this.rowSize,
                    e = this.bits;
               let r = 0;
               for (; r < e.length && 0 === e[r]; ) r++;
               if (r === e.length) return null;
               const n = r / t;
               let i = (r % t) * 32;
               const s = e[r];
               let o = 0;
               for (; !((s << (31 - o)) & 4294967295); ) o++;
               return (i += o), Int32Array.from([i, n]);
          }
          getBottomRightOnBit() {
               const t = this.rowSize,
                    e = this.bits;
               let r = e.length - 1;
               for (; r >= 0 && 0 === e[r]; ) r--;
               if (r < 0) return null;
               const n = Math.floor(r / t);
               let i = 32 * Math.floor(r % t);
               const s = e[r];
               let o = 31;
               for (; s >>> o == 0; ) o--;
               return (i += o), Int32Array.from([i, n]);
          }
          getWidth() {
               return this.width;
          }
          getHeight() {
               return this.height;
          }
          getRowSize() {
               return this.rowSize;
          }
          equals(t) {
               if (!(t instanceof R)) return !1;
               const e = t;
               return this.width === e.width && this.height === e.height && this.rowSize === e.rowSize && f.equals(this.bits, e.bits);
          }
          hashCode() {
               let t = this.width;
               return (t = 31 * t + this.width), (t = 31 * t + this.height), (t = 31 * t + this.rowSize), (t = 31 * t + f.hashCode(this.bits)), t;
          }
          toString(t = 'X ', e = '  ', r = '\n') {
               return this.buildToString(t, e, r);
          }
          buildToString(t, e, r) {
               let n = new T();
               for (let i = 0, s = this.height; i < s; i++) {
                    for (let r = 0, s = this.width; r < s; r++) n.append(this.get(r, i) ? t : e);
                    n.append(r);
               }
               return n.toString();
          }
          clone() {
               return new R(this.width, this.height, this.rowSize, this.bits.slice());
          }
     }
     class N extends s {
          static getNotFoundInstance() {
               return new N();
          }
     }
     N.kind = 'NotFoundException';
     class y extends c {
          constructor(t) {
               super(t), (this.luminances = y.EMPTY), (this.buckets = new Int32Array(y.LUMINANCE_BUCKETS));
          }
          getBlackRow(t, e) {
               const r = this.getLuminanceSource(),
                    n = r.getWidth();
               null == e || e.getSize() < n ? (e = new C(n)) : e.clear(), this.initArrays(n);
               const i = r.getRow(t, this.luminances),
                    s = this.buckets;
               for (let t = 0; t < n; t++) s[(255 & i[t]) >> y.LUMINANCE_SHIFT]++;
               const o = y.estimateBlackPoint(s);
               if (n < 3) for (let t = 0; t < n; t++) (255 & i[t]) < o && e.set(t);
               else {
                    let t = 255 & i[0],
                         r = 255 & i[1];
                    for (let s = 1; s < n - 1; s++) {
                         const n = 255 & i[s + 1];
                         (4 * r - t - n) / 2 < o && e.set(s), (t = r), (r = n);
                    }
               }
               return e;
          }
          getBlackMatrix() {
               const t = this.getLuminanceSource(),
                    e = t.getWidth(),
                    r = t.getHeight(),
                    n = new R(e, r);
               this.initArrays(e);
               const i = this.buckets;
               for (let n = 1; n < 5; n++) {
                    const s = Math.floor((r * n) / 5),
                         o = t.getRow(s, this.luminances),
                         a = Math.floor((4 * e) / 5);
                    for (let t = Math.floor(e / 5); t < a; t++) {
                         i[(255 & o[t]) >> y.LUMINANCE_SHIFT]++;
                    }
               }
               const s = y.estimateBlackPoint(i),
                    o = t.getMatrix();
               for (let t = 0; t < r; t++) {
                    const r = t * e;
                    for (let i = 0; i < e; i++) {
                         (255 & o[r + i]) < s && n.set(i, t);
                    }
               }
               return n;
          }
          createBinarizer(t) {
               return new y(t);
          }
          initArrays(t) {
               this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
               const e = this.buckets;
               for (let t = 0; t < y.LUMINANCE_BUCKETS; t++) e[t] = 0;
          }
          static estimateBlackPoint(t) {
               const e = t.length;
               let r = 0,
                    n = 0,
                    i = 0;
               for (let s = 0; s < e; s++) t[s] > i && ((n = s), (i = t[s])), t[s] > r && (r = t[s]);
               let s = 0,
                    o = 0;
               for (let r = 0; r < e; r++) {
                    const e = r - n,
                         i = t[r] * e * e;
                    i > o && ((s = r), (o = i));
               }
               if (n > s) {
                    const t = n;
                    (n = s), (s = t);
               }
               if (s - n <= e / 16) throw new N();
               let a = s - 1,
                    h = -1;
               for (let e = s - 1; e > n; e--) {
                    const i = e - n,
                         o = i * i * (s - e) * (r - t[e]);
                    o > h && ((a = e), (h = o));
               }
               return a << y.LUMINANCE_SHIFT;
          }
     }
     (y.LUMINANCE_BITS = 5), (y.LUMINANCE_SHIFT = 8 - y.LUMINANCE_BITS), (y.LUMINANCE_BUCKETS = 1 << y.LUMINANCE_BITS), (y.EMPTY = Uint8ClampedArray.from([0]));
     class D extends y {
          constructor(t) {
               super(t), (this.matrix = null);
          }
          getBlackMatrix() {
               if (null !== this.matrix) return this.matrix;
               const t = this.getLuminanceSource(),
                    e = t.getWidth(),
                    r = t.getHeight();
               if (e >= D.MINIMUM_DIMENSION && r >= D.MINIMUM_DIMENSION) {
                    const n = t.getMatrix();
                    let i = e >> D.BLOCK_SIZE_POWER;
                    e & D.BLOCK_SIZE_MASK && i++;
                    let s = r >> D.BLOCK_SIZE_POWER;
                    r & D.BLOCK_SIZE_MASK && s++;
                    const o = D.calculateBlackPoints(n, i, s, e, r),
                         a = new R(e, r);
                    D.calculateThresholdForBlock(n, i, s, e, r, o, a), (this.matrix = a);
               } else this.matrix = super.getBlackMatrix();
               return this.matrix;
          }
          createBinarizer(t) {
               return new D(t);
          }
          static calculateThresholdForBlock(t, e, r, n, i, s, o) {
               const a = i - D.BLOCK_SIZE,
                    h = n - D.BLOCK_SIZE;
               for (let i = 0; i < r; i++) {
                    let l = i << D.BLOCK_SIZE_POWER;
                    l > a && (l = a);
                    const c = D.cap(i, 2, r - 3);
                    for (let r = 0; r < e; r++) {
                         let i = r << D.BLOCK_SIZE_POWER;
                         i > h && (i = h);
                         const a = D.cap(r, 2, e - 3);
                         let d = 0;
                         for (let t = -2; t <= 2; t++) {
                              const e = s[c + t];
                              d += e[a - 2] + e[a - 1] + e[a] + e[a + 1] + e[a + 2];
                         }
                         const u = d / 25;
                         D.thresholdBlock(t, i, l, u, n, o);
                    }
               }
          }
          static cap(t, e, r) {
               return t < e ? e : t > r ? r : t;
          }
          static thresholdBlock(t, e, r, n, i, s) {
               for (let o = 0, a = r * i + e; o < D.BLOCK_SIZE; o++, a += i)
                    for (let i = 0; i < D.BLOCK_SIZE; i++) (255 & t[a + i]) <= n && s.set(e + i, r + o);
          }
          static calculateBlackPoints(t, e, r, n, i) {
               const s = i - D.BLOCK_SIZE,
                    o = n - D.BLOCK_SIZE,
                    a = new Array(r);
               for (let i = 0; i < r; i++) {
                    a[i] = new Int32Array(e);
                    let r = i << D.BLOCK_SIZE_POWER;
                    r > s && (r = s);
                    for (let s = 0; s < e; s++) {
                         let e = s << D.BLOCK_SIZE_POWER;
                         e > o && (e = o);
                         let h = 0,
                              l = 255,
                              c = 0;
                         for (let i = 0, s = r * n + e; i < D.BLOCK_SIZE; i++, s += n) {
                              for (let e = 0; e < D.BLOCK_SIZE; e++) {
                                   const r = 255 & t[s + e];
                                   (h += r), r < l && (l = r), r > c && (c = r);
                              }
                              if (c - l > D.MIN_DYNAMIC_RANGE)
                                   for (i++, s += n; i < D.BLOCK_SIZE; i++, s += n) for (let e = 0; e < D.BLOCK_SIZE; e++) h += 255 & t[s + e];
                         }
                         let d = h >> (2 * D.BLOCK_SIZE_POWER);
                         if (c - l <= D.MIN_DYNAMIC_RANGE && ((d = l / 2), i > 0 && s > 0)) {
                              const t = (a[i - 1][s] + 2 * a[i][s - 1] + a[i - 1][s - 1]) / 4;
                              l < t && (d = t);
                         }
                         a[i][s] = d;
                    }
               }
               return a;
          }
     }
     (D.BLOCK_SIZE_POWER = 3),
          (D.BLOCK_SIZE = 1 << D.BLOCK_SIZE_POWER),
          (D.BLOCK_SIZE_MASK = D.BLOCK_SIZE - 1),
          (D.MINIMUM_DIMENSION = 5 * D.BLOCK_SIZE),
          (D.MIN_DYNAMIC_RANGE = 24);
     class O {
          constructor(t, e) {
               (this.width = t), (this.height = e);
          }
          getWidth() {
               return this.width;
          }
          getHeight() {
               return this.height;
          }
          isCropSupported() {
               return !1;
          }
          crop(t, e, r, n) {
               throw new _('This luminance source does not support cropping.');
          }
          isRotateSupported() {
               return !1;
          }
          rotateCounterClockwise() {
               throw new _('This luminance source does not support rotation by 90 degrees.');
          }
          rotateCounterClockwise45() {
               throw new _('This luminance source does not support rotation by 45 degrees.');
          }
          toString() {
               const t = new Uint8ClampedArray(this.width);
               let e = new T();
               for (let r = 0; r < this.height; r++) {
                    const n = this.getRow(r, t);
                    for (let t = 0; t < this.width; t++) {
                         const r = 255 & n[t];
                         let i;
                         (i = r < 64 ? '#' : r < 128 ? '+' : r < 192 ? '.' : ' '), e.append(i);
                    }
                    e.append('\n');
               }
               return e.toString();
          }
     }
     class M extends O {
          constructor(t) {
               super(t.getWidth(), t.getHeight()), (this.delegate = t);
          }
          getRow(t, e) {
               const r = this.delegate.getRow(t, e),
                    n = this.getWidth();
               for (let t = 0; t < n; t++) r[t] = 255 - (255 & r[t]);
               return r;
          }
          getMatrix() {
               const t = this.delegate.getMatrix(),
                    e = this.getWidth() * this.getHeight(),
                    r = new Uint8ClampedArray(e);
               for (let n = 0; n < e; n++) r[n] = 255 - (255 & t[n]);
               return r;
          }
          isCropSupported() {
               return this.delegate.isCropSupported();
          }
          crop(t, e, r, n) {
               return new M(this.delegate.crop(t, e, r, n));
          }
          isRotateSupported() {
               return this.delegate.isRotateSupported();
          }
          invert() {
               return this.delegate;
          }
          rotateCounterClockwise() {
               return new M(this.delegate.rotateCounterClockwise());
          }
          rotateCounterClockwise45() {
               return new M(this.delegate.rotateCounterClockwise45());
          }
     }
     class b extends O {
          constructor(t, e = !1) {
               super(t.width, t.height), (this.canvas = t), (this.tempCanvasElement = null), (this.buffer = b.makeBufferFromCanvasImageData(t, e));
          }
          static makeBufferFromCanvasImageData(t, e = !1) {
               const r = t.getContext('2d').getImageData(0, 0, t.width, t.height);
               return b.toGrayscaleBuffer(r.data, t.width, t.height, e);
          }
          static toGrayscaleBuffer(t, e, r, n = !1) {
               const i = new Uint8ClampedArray(e * r);
               if (((b.FRAME_INDEX = !b.FRAME_INDEX), b.FRAME_INDEX || !n))
                    for (let e = 0, r = 0, n = t.length; e < n; e += 4, r++) {
                         let n;
                         if (0 === t[e + 3]) n = 255;
                         else {
                              n = (306 * t[e] + 601 * t[e + 1] + 117 * t[e + 2] + 512) >> 10;
                         }
                         i[r] = n;
                    }
               else
                    for (let e = 0, r = 0, n = t.length; e < n; e += 4, r++) {
                         let n;
                         if (0 === t[e + 3]) n = 255;
                         else {
                              n = (306 * t[e] + 601 * t[e + 1] + 117 * t[e + 2] + 512) >> 10;
                         }
                         i[r] = 255 - n;
                    }
               return i;
          }
          getRow(t, e) {
               if (t < 0 || t >= this.getHeight()) throw new a('Requested row is outside the image: ' + t);
               const r = this.getWidth(),
                    n = t * r;
               return null === e ? (e = this.buffer.slice(n, n + r)) : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n + r))), e;
          }
          getMatrix() {
               return this.buffer;
          }
          isCropSupported() {
               return !0;
          }
          crop(t, e, r, n) {
               return super.crop(t, e, r, n), this;
          }
          isRotateSupported() {
               return !0;
          }
          rotateCounterClockwise() {
               return this.rotate(-90), this;
          }
          rotateCounterClockwise45() {
               return this.rotate(-45), this;
          }
          getTempCanvasElement() {
               if (null === this.tempCanvasElement) {
                    const t = this.canvas.ownerDocument.createElement('canvas');
                    (t.width = this.canvas.width), (t.height = this.canvas.height), (this.tempCanvasElement = t);
               }
               return this.tempCanvasElement;
          }
          rotate(t) {
               const e = this.getTempCanvasElement(),
                    r = e.getContext('2d'),
                    n = t * b.DEGREE_TO_RADIANS,
                    i = this.canvas.width,
                    s = this.canvas.height,
                    o = Math.ceil(Math.abs(Math.cos(n)) * i + Math.abs(Math.sin(n)) * s),
                    a = Math.ceil(Math.abs(Math.sin(n)) * i + Math.abs(Math.cos(n)) * s);
               return (
                    (e.width = o),
                    (e.height = a),
                    r.translate(o / 2, a / 2),
                    r.rotate(n),
                    r.drawImage(this.canvas, i / -2, s / -2),
                    (this.buffer = b.makeBufferFromCanvasImageData(e)),
                    this
               );
          }
          invert() {
               return new M(this);
          }
     }
     (b.DEGREE_TO_RADIANS = Math.PI / 180), (b.FRAME_INDEX = !0);
     class B {
          constructor(t, e, r) {
               (this.deviceId = t), (this.label = e), (this.kind = 'videoinput'), (this.groupId = r || void 0);
          }
          toJSON() {
               return { kind: this.kind, groupId: this.groupId, deviceId: this.deviceId, label: this.label };
          }
     }
     var P,
          L =
               (globalThis || global || self || window ? (globalThis || global || self || window || void 0).__awaiter : void 0) ||
               function (t, e, r, n) {
                    return new (r || (r = Promise))(function (i, s) {
                         function o(t) {
                              try {
                                   h(n.next(t));
                              } catch (t) {
                                   s(t);
                              }
                         }
                         function a(t) {
                              try {
                                   h(n.throw(t));
                              } catch (t) {
                                   s(t);
                              }
                         }
                         function h(t) {
                              var e;
                              t.done
                                   ? i(t.value)
                                   : ((e = t.value),
                                     e instanceof r
                                          ? e
                                          : new r(function (t) {
                                                 t(e);
                                            })).then(o, a);
                         }
                         h((n = n.apply(t, e || [])).next());
                    });
               };
     class F {
          constructor(t, e = 500, r) {
               (this.reader = t),
                    (this.timeBetweenScansMillis = e),
                    (this._hints = r),
                    (this._stopContinuousDecode = !1),
                    (this._stopAsyncDecode = !1),
                    (this._timeBetweenDecodingAttempts = 0);
          }
          get hasNavigator() {
               return 'undefined' != typeof navigator;
          }
          get isMediaDevicesSuported() {
               return this.hasNavigator && !!navigator.mediaDevices;
          }
          get canEnumerateDevices() {
               return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
          }
          get timeBetweenDecodingAttempts() {
               return this._timeBetweenDecodingAttempts;
          }
          set timeBetweenDecodingAttempts(t) {
               this._timeBetweenDecodingAttempts = t < 0 ? 0 : t;
          }
          set hints(t) {
               this._hints = t || null;
          }
          get hints() {
               return this._hints;
          }
          listVideoInputDevices() {
               return L(this, void 0, void 0, function* () {
                    if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
                    if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
                    const t = yield navigator.mediaDevices.enumerateDevices(),
                         e = [];
                    for (const r of t) {
                         const t = 'video' === r.kind ? 'videoinput' : r.kind;
                         if ('videoinput' !== t) continue;
                         const n = { deviceId: r.deviceId || r.id, label: r.label || `Video device ${e.length + 1}`, kind: t, groupId: r.groupId };
                         e.push(n);
                    }
                    return e;
               });
          }
          getVideoInputDevices() {
               return L(this, void 0, void 0, function* () {
                    return (yield this.listVideoInputDevices()).map((t) => new B(t.deviceId, t.label));
               });
          }
          findDeviceById(t) {
               return L(this, void 0, void 0, function* () {
                    const e = yield this.listVideoInputDevices();
                    return e ? e.find((e) => e.deviceId === t) : null;
               });
          }
          decodeFromInputVideoDevice(t, e) {
               return L(this, void 0, void 0, function* () {
                    return yield this.decodeOnceFromVideoDevice(t, e);
               });
          }
          decodeOnceFromVideoDevice(t, e) {
               return L(this, void 0, void 0, function* () {
                    let r;
                    this.reset(), (r = t ? { deviceId: { exact: t } } : { facingMode: 'environment' });
                    const n = { video: r };
                    return yield this.decodeOnceFromConstraints(n, e);
               });
          }
          decodeOnceFromConstraints(t, e) {
               return L(this, void 0, void 0, function* () {
                    const r = yield navigator.mediaDevices.getUserMedia(t);
                    return yield this.decodeOnceFromStream(r, e);
               });
          }
          decodeOnceFromStream(t, e) {
               return L(this, void 0, void 0, function* () {
                    this.reset();
                    const r = yield this.attachStreamToVideo(t, e);
                    return yield this.decodeOnce(r);
               });
          }
          decodeFromInputVideoDeviceContinuously(t, e, r) {
               return L(this, void 0, void 0, function* () {
                    return yield this.decodeFromVideoDevice(t, e, r);
               });
          }
          decodeFromVideoDevice(t, e, r) {
               return L(this, void 0, void 0, function* () {
                    let n;
                    n = t ? { deviceId: { exact: t } } : { facingMode: 'environment' };
                    const i = { video: n };
                    return yield this.decodeFromConstraints(i, e, r);
               });
          }
          decodeFromConstraints(t, e, r) {
               return L(this, void 0, void 0, function* () {
                    const n = yield navigator.mediaDevices.getUserMedia(t);
                    return yield this.decodeFromStream(n, e, r);
               });
          }
          decodeFromStream(t, e, r) {
               return L(this, void 0, void 0, function* () {
                    this.reset();
                    const n = yield this.attachStreamToVideo(t, e);
                    return yield this.decodeContinuously(n, r);
               });
          }
          stopAsyncDecode() {
               this._stopAsyncDecode = !0;
          }
          stopContinuousDecode() {
               this._stopContinuousDecode = !0;
          }
          attachStreamToVideo(t, e) {
               return L(this, void 0, void 0, function* () {
                    const r = this.prepareVideoElement(e);
                    return this.addVideoSource(r, t), (this.videoElement = r), (this.stream = t), yield this.playVideoOnLoadAsync(r), r;
               });
          }
          playVideoOnLoadAsync(t) {
               return new Promise((e, r) => this.playVideoOnLoad(t, () => e()));
          }
          playVideoOnLoad(t, e) {
               (this.videoEndedListener = () => this.stopStreams()),
                    (this.videoCanPlayListener = () => this.tryPlayVideo(t)),
                    t.addEventListener('ended', this.videoEndedListener),
                    t.addEventListener('canplay', this.videoCanPlayListener),
                    t.addEventListener('playing', e),
                    this.tryPlayVideo(t);
          }
          isVideoPlaying(t) {
               return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2;
          }
          tryPlayVideo(t) {
               return L(this, void 0, void 0, function* () {
                    if (this.isVideoPlaying(t)) console.warn('Trying to play video that is already playing.');
                    else
                         try {
                              yield t.play();
                         } catch (t) {
                              console.warn('It was not possible to play the video.');
                         }
               });
          }
          getMediaElement(t, e) {
               const r = document.getElementById(t);
               if (!r) throw new o(`element with id '${t}' not found`);
               if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new o(`element with id '${t}' must be an ${e} element`);
               return r;
          }
          decodeFromImage(t, e) {
               if (!t && !e) throw new o('either imageElement with a src set or an url must be provided');
               return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t);
          }
          decodeFromVideo(t, e) {
               if (!t && !e) throw new o('Either an element with a src set or an URL must be provided');
               return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t);
          }
          decodeFromVideoContinuously(t, e, r) {
               if (void 0 === t && void 0 === e) throw new o('Either an element with a src set or an URL must be provided');
               return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r);
          }
          decodeFromImageElement(t) {
               if (!t) throw new o('An image element must be provided.');
               this.reset();
               const e = this.prepareImageElement(t);
               let r;
               return (this.imageElement = e), (r = this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e)), r;
          }
          decodeFromVideoElement(t) {
               const e = this._decodeFromVideoElementSetup(t);
               return this._decodeOnLoadVideo(e);
          }
          decodeFromVideoElementContinuously(t, e) {
               const r = this._decodeFromVideoElementSetup(t);
               return this._decodeOnLoadVideoContinuously(r, e);
          }
          _decodeFromVideoElementSetup(t) {
               if (!t) throw new o('A video element must be provided.');
               this.reset();
               const e = this.prepareVideoElement(t);
               return (this.videoElement = e), e;
          }
          decodeFromImageUrl(t) {
               if (!t) throw new o('An URL must be provided.');
               this.reset();
               const e = this.prepareImageElement();
               this.imageElement = e;
               const r = this._decodeOnLoadImage(e);
               return (e.src = t), r;
          }
          decodeFromVideoUrl(t) {
               if (!t) throw new o('An URL must be provided.');
               this.reset();
               const e = this.prepareVideoElement(),
                    r = this.decodeFromVideoElement(e);
               return (e.src = t), r;
          }
          decodeFromVideoUrlContinuously(t, e) {
               if (!t) throw new o('An URL must be provided.');
               this.reset();
               const r = this.prepareVideoElement(),
                    n = this.decodeFromVideoElementContinuously(r, e);
               return (r.src = t), n;
          }
          _decodeOnLoadImage(t) {
               return new Promise((e, r) => {
                    (this.imageLoadedListener = () => this.decodeOnce(t, !1, !0).then(e, r)), t.addEventListener('load', this.imageLoadedListener);
               });
          }
          _decodeOnLoadVideo(t) {
               return L(this, void 0, void 0, function* () {
                    return yield this.playVideoOnLoadAsync(t), yield this.decodeOnce(t);
               });
          }
          _decodeOnLoadVideoContinuously(t, e) {
               return L(this, void 0, void 0, function* () {
                    yield this.playVideoOnLoadAsync(t), this.decodeContinuously(t, e);
               });
          }
          isImageLoaded(t) {
               return !!t.complete && 0 !== t.naturalWidth;
          }
          prepareImageElement(t) {
               let e;
               return (
                    void 0 === t && ((e = document.createElement('img')), (e.width = 200), (e.height = 200)),
                    'string' == typeof t && (e = this.getMediaElement(t, 'img')),
                    t instanceof HTMLImageElement && (e = t),
                    e
               );
          }
          prepareVideoElement(t) {
               let e;
               return (
                    t || 'undefined' == typeof document || ((e = document.createElement('video')), (e.width = 200), (e.height = 200)),
                    'string' == typeof t && (e = this.getMediaElement(t, 'video')),
                    t instanceof HTMLVideoElement && (e = t),
                    e.setAttribute('autoplay', 'true'),
                    e.setAttribute('muted', 'true'),
                    e.setAttribute('playsinline', 'true'),
                    e
               );
          }
          decodeOnce(t, e = !0, r = !0) {
               this._stopAsyncDecode = !1;
               const n = (i, s) => {
                    if (this._stopAsyncDecode)
                         return s(new N('Video stream has ended before any code could be detected.')), void (this._stopAsyncDecode = void 0);
                    try {
                         i(this.decode(t));
                    } catch (t) {
                         if ((e && t instanceof N) || ((t instanceof l || t instanceof m) && r)) return setTimeout(n, this._timeBetweenDecodingAttempts, i, s);
                         s(t);
                    }
               };
               return new Promise((t, e) => n(t, e));
          }
          decodeContinuously(t, e) {
               this._stopContinuousDecode = !1;
               const r = () => {
                    if (this._stopContinuousDecode) this._stopContinuousDecode = void 0;
                    else
                         try {
                              const n = this.decode(t);
                              e(n, null), setTimeout(r, this.timeBetweenScansMillis);
                         } catch (t) {
                              e(null, t);
                              (t instanceof l || t instanceof m || t instanceof N) && setTimeout(r, this._timeBetweenDecodingAttempts);
                         }
               };
               r();
          }
          decode(t) {
               const e = this.createBinaryBitmap(t);
               return this.decodeBitmap(e);
          }
          createBinaryBitmap(t) {
               this.getCaptureCanvasContext(t);
               let e = !1;
               t instanceof HTMLVideoElement ? (this.drawFrameOnCanvas(t), (e = !0)) : this.drawImageOnCanvas(t);
               const r = this.getCaptureCanvas(t),
                    n = new b(r, e),
                    i = new D(n);
               return new h(i);
          }
          getCaptureCanvasContext(t) {
               if (!this.captureCanvasContext) {
                    const e = this.getCaptureCanvas(t);
                    let r;
                    try {
                         r = e.getContext('2d', { willReadFrequently: !0 });
                    } catch (t) {
                         r = e.getContext('2d');
                    }
                    this.captureCanvasContext = r;
               }
               return this.captureCanvasContext;
          }
          getCaptureCanvas(t) {
               if (!this.captureCanvas) {
                    const e = this.createCaptureCanvas(t);
                    this.captureCanvas = e;
               }
               return this.captureCanvas;
          }
          drawFrameOnCanvas(
               t,
               e = { sx: 0, sy: 0, sWidth: t.videoWidth, sHeight: t.videoHeight, dx: 0, dy: 0, dWidth: t.videoWidth, dHeight: t.videoHeight },
               r = this.captureCanvasContext
          ) {
               r.drawImage(t, e.sx, e.sy, e.sWidth, e.sHeight, e.dx, e.dy, e.dWidth, e.dHeight);
          }
          drawImageOnCanvas(
               t,
               e = { sx: 0, sy: 0, sWidth: t.naturalWidth, sHeight: t.naturalHeight, dx: 0, dy: 0, dWidth: t.naturalWidth, dHeight: t.naturalHeight },
               r = this.captureCanvasContext
          ) {
               r.drawImage(t, e.sx, e.sy, e.sWidth, e.sHeight, e.dx, e.dy, e.dWidth, e.dHeight);
          }
          decodeBitmap(t) {
               return this.reader.decode(t, this._hints);
          }
          createCaptureCanvas(t) {
               if ('undefined' == typeof document) return this._destroyCaptureCanvas(), null;
               const e = document.createElement('canvas');
               let r, n;
               return (
                    void 0 !== t &&
                         (t instanceof HTMLVideoElement
                              ? ((r = t.videoWidth), (n = t.videoHeight))
                              : t instanceof HTMLImageElement && ((r = t.naturalWidth || t.width), (n = t.naturalHeight || t.height))),
                    (e.style.width = r + 'px'),
                    (e.style.height = n + 'px'),
                    (e.width = r),
                    (e.height = n),
                    e
               );
          }
          stopStreams() {
               this.stream && (this.stream.getVideoTracks().forEach((t) => t.stop()), (this.stream = void 0)),
                    !1 === this._stopAsyncDecode && this.stopAsyncDecode(),
                    !1 === this._stopContinuousDecode && this.stopContinuousDecode();
          }
          reset() {
               this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
          }
          _destroyVideoElement() {
               this.videoElement &&
                    (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener('ended', this.videoEndedListener),
                    void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener('playing', this.videoPlayingEventListener),
                    void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener('loadedmetadata', this.videoCanPlayListener),
                    this.cleanVideoSource(this.videoElement),
                    (this.videoElement = void 0));
          }
          _destroyImageElement() {
               this.imageElement &&
                    (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener('load', this.imageLoadedListener),
                    (this.imageElement.src = void 0),
                    this.imageElement.removeAttribute('src'),
                    (this.imageElement = void 0));
          }
          _destroyCaptureCanvas() {
               (this.captureCanvasContext = void 0), (this.captureCanvas = void 0);
          }
          addVideoSource(t, e) {
               try {
                    t.srcObject = e;
               } catch (r) {
                    t.src = URL.createObjectURL(e);
               }
          }
          cleanVideoSource(t) {
               try {
                    t.srcObject = null;
               } catch (e) {
                    t.src = '';
               }
               this.videoElement.removeAttribute('src');
          }
     }
     class v {
          constructor(t, e, r = null == e ? 0 : 8 * e.length, n, i, s = d.currentTimeMillis()) {
               (this.text = t),
                    (this.rawBytes = e),
                    (this.numBits = r),
                    (this.resultPoints = n),
                    (this.format = i),
                    (this.timestamp = s),
                    (this.text = t),
                    (this.rawBytes = e),
                    (this.numBits = null == r ? (null == e ? 0 : 8 * e.length) : r),
                    (this.resultPoints = n),
                    (this.format = i),
                    (this.resultMetadata = null),
                    (this.timestamp = null == s ? d.currentTimeMillis() : s);
          }
          getText() {
               return this.text;
          }
          getRawBytes() {
               return this.rawBytes;
          }
          getNumBits() {
               return this.numBits;
          }
          getResultPoints() {
               return this.resultPoints;
          }
          getBarcodeFormat() {
               return this.format;
          }
          getResultMetadata() {
               return this.resultMetadata;
          }
          putMetadata(t, e) {
               null === this.resultMetadata && (this.resultMetadata = new Map()), this.resultMetadata.set(t, e);
          }
          putAllMetadata(t) {
               null !== t && (null === this.resultMetadata ? (this.resultMetadata = t) : (this.resultMetadata = new Map(t)));
          }
          addResultPoints(t) {
               const e = this.resultPoints;
               if (null === e) this.resultPoints = t;
               else if (null !== t && t.length > 0) {
                    const r = new Array(e.length + t.length);
                    d.arraycopy(e, 0, r, 0, e.length), d.arraycopy(t, 0, r, e.length, t.length), (this.resultPoints = r);
               }
          }
          getTimestamp() {
               return this.timestamp;
          }
          toString() {
               return this.text;
          }
     }
     !(function (t) {
          (t[(t.AZTEC = 0)] = 'AZTEC'),
               (t[(t.CODABAR = 1)] = 'CODABAR'),
               (t[(t.CODE_39 = 2)] = 'CODE_39'),
               (t[(t.CODE_93 = 3)] = 'CODE_93'),
               (t[(t.CODE_128 = 4)] = 'CODE_128'),
               (t[(t.DATA_MATRIX = 5)] = 'DATA_MATRIX'),
               (t[(t.EAN_8 = 6)] = 'EAN_8'),
               (t[(t.EAN_13 = 7)] = 'EAN_13'),
               (t[(t.ITF = 8)] = 'ITF'),
               (t[(t.MAXICODE = 9)] = 'MAXICODE'),
               (t[(t.PDF_417 = 10)] = 'PDF_417'),
               (t[(t.QR_CODE = 11)] = 'QR_CODE'),
               (t[(t.RSS_14 = 12)] = 'RSS_14'),
               (t[(t.RSS_EXPANDED = 13)] = 'RSS_EXPANDED'),
               (t[(t.UPC_A = 14)] = 'UPC_A'),
               (t[(t.UPC_E = 15)] = 'UPC_E'),
               (t[(t.UPC_EAN_EXTENSION = 16)] = 'UPC_EAN_EXTENSION');
     })(P || (P = {}));
     var k,
          x = P;
     !(function (t) {
          (t[(t.OTHER = 0)] = 'OTHER'),
               (t[(t.ORIENTATION = 1)] = 'ORIENTATION'),
               (t[(t.BYTE_SEGMENTS = 2)] = 'BYTE_SEGMENTS'),
               (t[(t.ERROR_CORRECTION_LEVEL = 3)] = 'ERROR_CORRECTION_LEVEL'),
               (t[(t.ISSUE_NUMBER = 4)] = 'ISSUE_NUMBER'),
               (t[(t.SUGGESTED_PRICE = 5)] = 'SUGGESTED_PRICE'),
               (t[(t.POSSIBLE_COUNTRY = 6)] = 'POSSIBLE_COUNTRY'),
               (t[(t.UPC_EAN_EXTENSION = 7)] = 'UPC_EAN_EXTENSION'),
               (t[(t.PDF417_EXTRA_METADATA = 8)] = 'PDF417_EXTRA_METADATA'),
               (t[(t.STRUCTURED_APPEND_SEQUENCE = 9)] = 'STRUCTURED_APPEND_SEQUENCE'),
               (t[(t.STRUCTURED_APPEND_PARITY = 10)] = 'STRUCTURED_APPEND_PARITY');
     })(k || (k = {}));
     var V,
          H,
          U,
          X,
          G,
          W,
          z = k;
     class Y {
          constructor(t, e, r, n, i = -1, s = -1) {
               (this.rawBytes = t),
                    (this.text = e),
                    (this.byteSegments = r),
                    (this.ecLevel = n),
                    (this.structuredAppendSequenceNumber = i),
                    (this.structuredAppendParity = s),
                    (this.numBits = null == t ? 0 : 8 * t.length);
          }
          getRawBytes() {
               return this.rawBytes;
          }
          getNumBits() {
               return this.numBits;
          }
          setNumBits(t) {
               this.numBits = t;
          }
          getText() {
               return this.text;
          }
          getByteSegments() {
               return this.byteSegments;
          }
          getECLevel() {
               return this.ecLevel;
          }
          getErrorsCorrected() {
               return this.errorsCorrected;
          }
          setErrorsCorrected(t) {
               this.errorsCorrected = t;
          }
          getErasures() {
               return this.erasures;
          }
          setErasures(t) {
               this.erasures = t;
          }
          getOther() {
               return this.other;
          }
          setOther(t) {
               this.other = t;
          }
          hasStructuredAppend() {
               return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
          }
          getStructuredAppendParity() {
               return this.structuredAppendParity;
          }
          getStructuredAppendSequenceNumber() {
               return this.structuredAppendSequenceNumber;
          }
     }
     class Z {
          exp(t) {
               return this.expTable[t];
          }
          log(t) {
               if (0 === t) throw new a();
               return this.logTable[t];
          }
          static addOrSubtract(t, e) {
               return t ^ e;
          }
     }
     class K {
          constructor(t, e) {
               if (0 === e.length) throw new a();
               this.field = t;
               const r = e.length;
               if (r > 1 && 0 === e[0]) {
                    let t = 1;
                    for (; t < r && 0 === e[t]; ) t++;
                    t === r
                         ? (this.coefficients = Int32Array.from([0]))
                         : ((this.coefficients = new Int32Array(r - t)), d.arraycopy(e, t, this.coefficients, 0, this.coefficients.length));
               } else this.coefficients = e;
          }
          getCoefficients() {
               return this.coefficients;
          }
          getDegree() {
               return this.coefficients.length - 1;
          }
          isZero() {
               return 0 === this.coefficients[0];
          }
          getCoefficient(t) {
               return this.coefficients[this.coefficients.length - 1 - t];
          }
          evaluateAt(t) {
               if (0 === t) return this.getCoefficient(0);
               const e = this.coefficients;
               let r;
               if (1 === t) {
                    r = 0;
                    for (let t = 0, n = e.length; t !== n; t++) {
                         const n = e[t];
                         r = Z.addOrSubtract(r, n);
                    }
                    return r;
               }
               r = e[0];
               const n = e.length,
                    i = this.field;
               for (let s = 1; s < n; s++) r = Z.addOrSubtract(i.multiply(t, r), e[s]);
               return r;
          }
          addOrSubtract(t) {
               if (!this.field.equals(t.field)) throw new a('GenericGFPolys do not have same GenericGF field');
               if (this.isZero()) return t;
               if (t.isZero()) return this;
               let e = this.coefficients,
                    r = t.coefficients;
               if (e.length > r.length) {
                    const t = e;
                    (e = r), (r = t);
               }
               let n = new Int32Array(r.length);
               const i = r.length - e.length;
               d.arraycopy(r, 0, n, 0, i);
               for (let t = i; t < r.length; t++) n[t] = Z.addOrSubtract(e[t - i], r[t]);
               return new K(this.field, n);
          }
          multiply(t) {
               if (!this.field.equals(t.field)) throw new a('GenericGFPolys do not have same GenericGF field');
               if (this.isZero() || t.isZero()) return this.field.getZero();
               const e = this.coefficients,
                    r = e.length,
                    n = t.coefficients,
                    i = n.length,
                    s = new Int32Array(r + i - 1),
                    o = this.field;
               for (let t = 0; t < r; t++) {
                    const r = e[t];
                    for (let e = 0; e < i; e++) s[t + e] = Z.addOrSubtract(s[t + e], o.multiply(r, n[e]));
               }
               return new K(o, s);
          }
          multiplyScalar(t) {
               if (0 === t) return this.field.getZero();
               if (1 === t) return this;
               const e = this.coefficients.length,
                    r = this.field,
                    n = new Int32Array(e),
                    i = this.coefficients;
               for (let s = 0; s < e; s++) n[s] = r.multiply(i[s], t);
               return new K(r, n);
          }
          multiplyByMonomial(t, e) {
               if (t < 0) throw new a();
               if (0 === e) return this.field.getZero();
               const r = this.coefficients,
                    n = r.length,
                    i = new Int32Array(n + t),
                    s = this.field;
               for (let t = 0; t < n; t++) i[t] = s.multiply(r[t], e);
               return new K(s, i);
          }
          divide(t) {
               if (!this.field.equals(t.field)) throw new a('GenericGFPolys do not have same GenericGF field');
               if (t.isZero()) throw new a('Divide by 0');
               const e = this.field;
               let r = e.getZero(),
                    n = this;
               const i = t.getCoefficient(t.getDegree()),
                    s = e.inverse(i);
               for (; n.getDegree() >= t.getDegree() && !n.isZero(); ) {
                    const i = n.getDegree() - t.getDegree(),
                         o = e.multiply(n.getCoefficient(n.getDegree()), s),
                         a = t.multiplyByMonomial(i, o),
                         h = e.buildMonomial(i, o);
                    (r = r.addOrSubtract(h)), (n = n.addOrSubtract(a));
               }
               return [r, n];
          }
          toString() {
               let t = '';
               for (let e = this.getDegree(); e >= 0; e--) {
                    let r = this.getCoefficient(e);
                    if (0 !== r) {
                         if ((r < 0 ? ((t += ' - '), (r = -r)) : t.length > 0 && (t += ' + '), 0 === e || 1 !== r)) {
                              const e = this.field.log(r);
                              0 === e ? (t += '1') : 1 === e ? (t += 'a') : ((t += 'a^'), (t += e));
                         }
                         0 !== e && (1 === e ? (t += 'x') : ((t += 'x^'), (t += e)));
                    }
               }
               return t;
          }
     }
     class q extends s {}
     q.kind = 'ArithmeticException';
     class Q extends Z {
          constructor(t, e, r) {
               super(), (this.primitive = t), (this.size = e), (this.generatorBase = r);
               const n = new Int32Array(e);
               let i = 1;
               for (let r = 0; r < e; r++) (n[r] = i), (i *= 2), i >= e && ((i ^= t), (i &= e - 1));
               this.expTable = n;
               const s = new Int32Array(e);
               for (let t = 0; t < e - 1; t++) s[n[t]] = t;
               (this.logTable = s), (this.zero = new K(this, Int32Array.from([0]))), (this.one = new K(this, Int32Array.from([1])));
          }
          getZero() {
               return this.zero;
          }
          getOne() {
               return this.one;
          }
          buildMonomial(t, e) {
               if (t < 0) throw new a();
               if (0 === e) return this.zero;
               const r = new Int32Array(t + 1);
               return (r[0] = e), new K(this, r);
          }
          inverse(t) {
               if (0 === t) throw new q();
               return this.expTable[this.size - this.logTable[t] - 1];
          }
          multiply(t, e) {
               return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)];
          }
          getSize() {
               return this.size;
          }
          getGeneratorBase() {
               return this.generatorBase;
          }
          toString() {
               return 'GF(0x' + w.toHexString(this.primitive) + ',' + this.size + ')';
          }
          equals(t) {
               return t === this;
          }
     }
     (Q.AZTEC_DATA_12 = new Q(4201, 4096, 1)),
          (Q.AZTEC_DATA_10 = new Q(1033, 1024, 1)),
          (Q.AZTEC_DATA_6 = new Q(67, 64, 1)),
          (Q.AZTEC_PARAM = new Q(19, 16, 1)),
          (Q.QR_CODE_FIELD_256 = new Q(285, 256, 0)),
          (Q.DATA_MATRIX_FIELD_256 = new Q(301, 256, 1)),
          (Q.AZTEC_DATA_8 = Q.DATA_MATRIX_FIELD_256),
          (Q.MAXICODE_FIELD_64 = Q.AZTEC_DATA_6);
     class j extends s {}
     j.kind = 'ReedSolomonException';
     class J extends s {}
     J.kind = 'IllegalStateException';
     class $ {
          constructor(t) {
               this.field = t;
          }
          decode(t, e) {
               const r = this.field,
                    n = new K(r, t),
                    i = new Int32Array(e);
               let s = !0;
               for (let t = 0; t < e; t++) {
                    const e = n.evaluateAt(r.exp(t + r.getGeneratorBase()));
                    (i[i.length - 1 - t] = e), 0 !== e && (s = !1);
               }
               if (s) return;
               const o = new K(r, i),
                    a = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), o, e),
                    h = a[0],
                    l = a[1],
                    c = this.findErrorLocations(h),
                    d = this.findErrorMagnitudes(l, c);
               for (let e = 0; e < c.length; e++) {
                    const n = t.length - 1 - r.log(c[e]);
                    if (n < 0) throw new j('Bad error location');
                    t[n] = Q.addOrSubtract(t[n], d[e]);
               }
          }
          runEuclideanAlgorithm(t, e, r) {
               if (t.getDegree() < e.getDegree()) {
                    const r = t;
                    (t = e), (e = r);
               }
               const n = this.field;
               let i = t,
                    s = e,
                    o = n.getZero(),
                    a = n.getOne();
               for (; s.getDegree() >= ((r / 2) | 0); ) {
                    let t = i,
                         e = o;
                    if (((i = s), (o = a), i.isZero())) throw new j('r_{i-1} was zero');
                    s = t;
                    let r = n.getZero();
                    const h = i.getCoefficient(i.getDegree()),
                         l = n.inverse(h);
                    for (; s.getDegree() >= i.getDegree() && !s.isZero(); ) {
                         const t = s.getDegree() - i.getDegree(),
                              e = n.multiply(s.getCoefficient(s.getDegree()), l);
                         (r = r.addOrSubtract(n.buildMonomial(t, e))), (s = s.addOrSubtract(i.multiplyByMonomial(t, e)));
                    }
                    if (((a = r.multiply(o).addOrSubtract(e)), s.getDegree() >= i.getDegree())) throw new J('Division algorithm failed to reduce polynomial?');
               }
               const h = a.getCoefficient(0);
               if (0 === h) throw new j('sigmaTilde(0) was zero');
               const l = n.inverse(h);
               return [a.multiplyScalar(l), s.multiplyScalar(l)];
          }
          findErrorLocations(t) {
               const e = t.getDegree();
               if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
               const r = new Int32Array(e);
               let n = 0;
               const i = this.field;
               for (let s = 1; s < i.getSize() && n < e; s++) 0 === t.evaluateAt(s) && ((r[n] = i.inverse(s)), n++);
               if (n !== e) throw new j('Error locator degree does not match number of roots');
               return r;
          }
          findErrorMagnitudes(t, e) {
               const r = e.length,
                    n = new Int32Array(r),
                    i = this.field;
               for (let s = 0; s < r; s++) {
                    const o = i.inverse(e[s]);
                    let a = 1;
                    for (let t = 0; t < r; t++)
                         if (s !== t) {
                              const r = i.multiply(e[t], o),
                                   n = 1 & r ? -2 & r : 1 | r;
                              a = i.multiply(a, n);
                         }
                    (n[s] = i.multiply(t.evaluateAt(o), i.inverse(a))), 0 !== i.getGeneratorBase() && (n[s] = i.multiply(n[s], o));
               }
               return n;
          }
     }
     !(function (t) {
          (t[(t.UPPER = 0)] = 'UPPER'),
               (t[(t.LOWER = 1)] = 'LOWER'),
               (t[(t.MIXED = 2)] = 'MIXED'),
               (t[(t.DIGIT = 3)] = 'DIGIT'),
               (t[(t.PUNCT = 4)] = 'PUNCT'),
               (t[(t.BINARY = 5)] = 'BINARY');
     })(V || (V = {}));
     class tt {
          decode(t) {
               this.ddata = t;
               let e = t.getBits(),
                    r = this.extractBits(e),
                    n = this.correctBits(r),
                    i = tt.convertBoolArrayToByteArray(n),
                    s = tt.getEncodedData(n),
                    o = new Y(i, s, null, null);
               return o.setNumBits(n.length), o;
          }
          static highLevelDecode(t) {
               return this.getEncodedData(t);
          }
          static getEncodedData(t) {
               let e = t.length,
                    r = V.UPPER,
                    n = V.UPPER,
                    i = '',
                    s = 0;
               for (; s < e; )
                    if (n === V.BINARY) {
                         if (e - s < 5) break;
                         let o = tt.readCode(t, s, 5);
                         if (((s += 5), 0 === o)) {
                              if (e - s < 11) break;
                              (o = tt.readCode(t, s, 11) + 31), (s += 11);
                         }
                         for (let r = 0; r < o; r++) {
                              if (e - s < 8) {
                                   s = e;
                                   break;
                              }
                              const r = tt.readCode(t, s, 8);
                              (i += p.castAsNonUtf8Char(r)), (s += 8);
                         }
                         n = r;
                    } else {
                         let o = n === V.DIGIT ? 4 : 5;
                         if (e - s < o) break;
                         let a = tt.readCode(t, s, o);
                         s += o;
                         let h = tt.getCharacter(n, a);
                         h.startsWith('CTRL_') ? ((r = n), (n = tt.getTable(h.charAt(5))), 'L' === h.charAt(6) && (r = n)) : ((i += h), (n = r));
                    }
               return i;
          }
          static getTable(t) {
               switch (t) {
                    case 'L':
                         return V.LOWER;
                    case 'P':
                         return V.PUNCT;
                    case 'M':
                         return V.MIXED;
                    case 'D':
                         return V.DIGIT;
                    case 'B':
                         return V.BINARY;
                    default:
                         return V.UPPER;
               }
          }
          static getCharacter(t, e) {
               switch (t) {
                    case V.UPPER:
                         return tt.UPPER_TABLE[e];
                    case V.LOWER:
                         return tt.LOWER_TABLE[e];
                    case V.MIXED:
                         return tt.MIXED_TABLE[e];
                    case V.PUNCT:
                         return tt.PUNCT_TABLE[e];
                    case V.DIGIT:
                         return tt.DIGIT_TABLE[e];
                    default:
                         throw new J('Bad table');
               }
          }
          correctBits(t) {
               let e, r;
               this.ddata.getNbLayers() <= 2
                    ? ((r = 6), (e = Q.AZTEC_DATA_6))
                    : this.ddata.getNbLayers() <= 8
                    ? ((r = 8), (e = Q.AZTEC_DATA_8))
                    : this.ddata.getNbLayers() <= 22
                    ? ((r = 10), (e = Q.AZTEC_DATA_10))
                    : ((r = 12), (e = Q.AZTEC_DATA_12));
               let n = this.ddata.getNbDatablocks(),
                    i = t.length / r;
               if (i < n) throw new m();
               let s = t.length % r,
                    o = new Int32Array(i);
               for (let e = 0; e < i; e++, s += r) o[e] = tt.readCode(t, s, r);
               try {
                    new $(e).decode(o, i - n);
               } catch (t) {
                    throw new m(t);
               }
               let a = (1 << r) - 1,
                    h = 0;
               for (let t = 0; t < n; t++) {
                    let e = o[t];
                    if (0 === e || e === a) throw new m();
                    (1 !== e && e !== a - 1) || h++;
               }
               let l = new Array(n * r - h),
                    c = 0;
               for (let t = 0; t < n; t++) {
                    let e = o[t];
                    if (1 === e || e === a - 1) l.fill(e > 1, c, c + r - 1), (c += r - 1);
                    else for (let t = r - 1; t >= 0; --t) l[c++] = !!(e & (1 << t));
               }
               return l;
          }
          extractBits(t) {
               let e = this.ddata.isCompact(),
                    r = this.ddata.getNbLayers(),
                    n = (e ? 11 : 14) + 4 * r,
                    i = new Int32Array(n),
                    s = new Array(this.totalBitsInLayer(r, e));
               if (e) for (let t = 0; t < i.length; t++) i[t] = t;
               else {
                    let t = n + 1 + 2 * w.truncDivision(w.truncDivision(n, 2) - 1, 15),
                         e = n / 2,
                         r = w.truncDivision(t, 2);
                    for (let t = 0; t < e; t++) {
                         let n = t + w.truncDivision(t, 15);
                         (i[e - t - 1] = r - n - 1), (i[e + t] = r + n + 1);
                    }
               }
               for (let o = 0, a = 0; o < r; o++) {
                    let h = 4 * (r - o) + (e ? 9 : 12),
                         l = 2 * o,
                         c = n - 1 - l;
                    for (let e = 0; e < h; e++) {
                         let r = 2 * e;
                         for (let n = 0; n < 2; n++)
                              (s[a + r + n] = t.get(i[l + n], i[l + e])),
                                   (s[a + 2 * h + r + n] = t.get(i[l + e], i[c - n])),
                                   (s[a + 4 * h + r + n] = t.get(i[c - n], i[c - e])),
                                   (s[a + 6 * h + r + n] = t.get(i[c - e], i[l + n]));
                    }
                    a += 8 * h;
               }
               return s;
          }
          static readCode(t, e, r) {
               let n = 0;
               for (let i = e; i < e + r; i++) (n <<= 1), t[i] && (n |= 1);
               return n;
          }
          static readByte(t, e) {
               let r = t.length - e;
               return r >= 8 ? tt.readCode(t, e, 8) : tt.readCode(t, e, r) << (8 - r);
          }
          static convertBoolArrayToByteArray(t) {
               let e = new Uint8Array((t.length + 7) / 8);
               for (let r = 0; r < e.length; r++) e[r] = tt.readByte(t, 8 * r);
               return e;
          }
          totalBitsInLayer(t, e) {
               return ((e ? 88 : 112) + 16 * t) * t;
          }
     }
     (tt.UPPER_TABLE = [
          'CTRL_PS',
          ' ',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          'CTRL_LL',
          'CTRL_ML',
          'CTRL_DL',
          'CTRL_BS',
     ]),
          (tt.LOWER_TABLE = [
               'CTRL_PS',
               ' ',
               'a',
               'b',
               'c',
               'd',
               'e',
               'f',
               'g',
               'h',
               'i',
               'j',
               'k',
               'l',
               'm',
               'n',
               'o',
               'p',
               'q',
               'r',
               's',
               't',
               'u',
               'v',
               'w',
               'x',
               'y',
               'z',
               'CTRL_US',
               'CTRL_ML',
               'CTRL_DL',
               'CTRL_BS',
          ]),
          (tt.MIXED_TABLE = [
               'CTRL_PS',
               ' ',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '\b',
               '\t',
               '\n',
               '\v',
               '\f',
               '\r',
               '',
               '',
               '',
               '',
               '',
               '@',
               '\\',
               '^',
               '_',
               '`',
               '|',
               '~',
               '',
               'CTRL_LL',
               'CTRL_UL',
               'CTRL_PL',
               'CTRL_BS',
          ]),
          (tt.PUNCT_TABLE = [
               '',
               '\r',
               '\r\n',
               '. ',
               ', ',
               ': ',
               '!',
               '"',
               '#',
               '$',
               '%',
               '&',
               "'",
               '(',
               ')',
               '*',
               '+',
               ',',
               '-',
               '.',
               '/',
               ':',
               ';',
               '<',
               '=',
               '>',
               '?',
               '[',
               ']',
               '{',
               '}',
               'CTRL_UL',
          ]),
          (tt.DIGIT_TABLE = ['CTRL_PS', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', 'CTRL_UL', 'CTRL_US']);
     class et {
          constructor() {}
          static round(t) {
               return isNaN(t)
                    ? 0
                    : t <= Number.MIN_SAFE_INTEGER
                    ? Number.MIN_SAFE_INTEGER
                    : t >= Number.MAX_SAFE_INTEGER
                    ? Number.MAX_SAFE_INTEGER
                    : (t + (t < 0 ? -0.5 : 0.5)) | 0;
          }
          static distance(t, e, r, n) {
               const i = t - r,
                    s = e - n;
               return Math.sqrt(i * i + s * s);
          }
          static sum(t) {
               let e = 0;
               for (let r = 0, n = t.length; r !== n; r++) {
                    e += t[r];
               }
               return e;
          }
     }
     class rt {
          static floatToIntBits(t) {
               return t;
          }
     }
     rt.MAX_VALUE = Number.MAX_SAFE_INTEGER;
     class nt {
          constructor(t, e) {
               (this.x = t), (this.y = e);
          }
          getX() {
               return this.x;
          }
          getY() {
               return this.y;
          }
          equals(t) {
               if (t instanceof nt) {
                    const e = t;
                    return this.x === e.x && this.y === e.y;
               }
               return !1;
          }
          hashCode() {
               return 31 * rt.floatToIntBits(this.x) + rt.floatToIntBits(this.y);
          }
          toString() {
               return '(' + this.x + ',' + this.y + ')';
          }
          static orderBestPatterns(t) {
               const e = this.distance(t[0], t[1]),
                    r = this.distance(t[1], t[2]),
                    n = this.distance(t[0], t[2]);
               let i, s, o;
               if (
                    (r >= e && r >= n
                         ? ((s = t[0]), (i = t[1]), (o = t[2]))
                         : n >= r && n >= e
                         ? ((s = t[1]), (i = t[0]), (o = t[2]))
                         : ((s = t[2]), (i = t[0]), (o = t[1])),
                    this.crossProductZ(i, s, o) < 0)
               ) {
                    const t = i;
                    (i = o), (o = t);
               }
               (t[0] = i), (t[1] = s), (t[2] = o);
          }
          static distance(t, e) {
               return et.distance(t.x, t.y, e.x, e.y);
          }
          static crossProductZ(t, e, r) {
               const n = e.x,
                    i = e.y;
               return (r.x - n) * (t.y - i) - (r.y - i) * (t.x - n);
          }
     }
     class it {
          constructor(t, e) {
               (this.bits = t), (this.points = e);
          }
          getBits() {
               return this.bits;
          }
          getPoints() {
               return this.points;
          }
     }
     class st extends it {
          constructor(t, e, r, n, i) {
               super(t, e), (this.compact = r), (this.nbDatablocks = n), (this.nbLayers = i);
          }
          getNbLayers() {
               return this.nbLayers;
          }
          getNbDatablocks() {
               return this.nbDatablocks;
          }
          isCompact() {
               return this.compact;
          }
     }
     class ot {
          constructor(t, e, r, n) {
               (this.image = t),
                    (this.height = t.getHeight()),
                    (this.width = t.getWidth()),
                    null == e && (e = ot.INIT_SIZE),
                    null == r && (r = (t.getWidth() / 2) | 0),
                    null == n && (n = (t.getHeight() / 2) | 0);
               const i = (e / 2) | 0;
               if (
                    ((this.leftInit = r - i),
                    (this.rightInit = r + i),
                    (this.upInit = n - i),
                    (this.downInit = n + i),
                    this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width)
               )
                    throw new N();
          }
          detect() {
               let t = this.leftInit,
                    e = this.rightInit,
                    r = this.upInit,
                    n = this.downInit,
                    i = !1,
                    s = !0,
                    o = !1,
                    a = !1,
                    h = !1,
                    l = !1,
                    c = !1;
               const d = this.width,
                    u = this.height;
               for (; s; ) {
                    s = !1;
                    let g = !0;
                    for (; (g || !a) && e < d; ) (g = this.containsBlackPoint(r, n, e, !1)), g ? (e++, (s = !0), (a = !0)) : a || e++;
                    if (e >= d) {
                         i = !0;
                         break;
                    }
                    let f = !0;
                    for (; (f || !h) && n < u; ) (f = this.containsBlackPoint(t, e, n, !0)), f ? (n++, (s = !0), (h = !0)) : h || n++;
                    if (n >= u) {
                         i = !0;
                         break;
                    }
                    let w = !0;
                    for (; (w || !l) && t >= 0; ) (w = this.containsBlackPoint(r, n, t, !1)), w ? (t--, (s = !0), (l = !0)) : l || t--;
                    if (t < 0) {
                         i = !0;
                         break;
                    }
                    let C = !0;
                    for (; (C || !c) && r >= 0; ) (C = this.containsBlackPoint(t, e, r, !0)), C ? (r--, (s = !0), (c = !0)) : c || r--;
                    if (r < 0) {
                         i = !0;
                         break;
                    }
                    s && (o = !0);
               }
               if (!i && o) {
                    const i = e - t;
                    let s = null;
                    for (let e = 1; null === s && e < i; e++) s = this.getBlackPointOnSegment(t, n - e, t + e, n);
                    if (null == s) throw new N();
                    let o = null;
                    for (let e = 1; null === o && e < i; e++) o = this.getBlackPointOnSegment(t, r + e, t + e, r);
                    if (null == o) throw new N();
                    let a = null;
                    for (let t = 1; null === a && t < i; t++) a = this.getBlackPointOnSegment(e, r + t, e - t, r);
                    if (null == a) throw new N();
                    let h = null;
                    for (let t = 1; null === h && t < i; t++) h = this.getBlackPointOnSegment(e, n - t, e - t, n);
                    if (null == h) throw new N();
                    return this.centerEdges(h, s, a, o);
               }
               throw new N();
          }
          getBlackPointOnSegment(t, e, r, n) {
               const i = et.round(et.distance(t, e, r, n)),
                    s = (r - t) / i,
                    o = (n - e) / i,
                    a = this.image;
               for (let r = 0; r < i; r++) {
                    const n = et.round(t + r * s),
                         i = et.round(e + r * o);
                    if (a.get(n, i)) return new nt(n, i);
               }
               return null;
          }
          centerEdges(t, e, r, n) {
               const i = t.getX(),
                    s = t.getY(),
                    o = e.getX(),
                    a = e.getY(),
                    h = r.getX(),
                    l = r.getY(),
                    c = n.getX(),
                    d = n.getY(),
                    u = ot.CORR;
               return i < this.width / 2
                    ? [new nt(c - u, d + u), new nt(o + u, a + u), new nt(h - u, l - u), new nt(i + u, s - u)]
                    : [new nt(c + u, d + u), new nt(o + u, a - u), new nt(h - u, l + u), new nt(i - u, s - u)];
          }
          containsBlackPoint(t, e, r, n) {
               const i = this.image;
               if (n) {
                    for (let n = t; n <= e; n++) if (i.get(n, r)) return !0;
               } else for (let n = t; n <= e; n++) if (i.get(r, n)) return !0;
               return !1;
          }
     }
     (ot.INIT_SIZE = 10), (ot.CORR = 1);
     class at {
          static checkAndNudgePoints(t, e) {
               const r = t.getWidth(),
                    n = t.getHeight();
               let i = !0;
               for (let t = 0; t < e.length && i; t += 2) {
                    const s = Math.floor(e[t]),
                         o = Math.floor(e[t + 1]);
                    if (s < -1 || s > r || o < -1 || o > n) throw new N();
                    (i = !1),
                         -1 === s ? ((e[t] = 0), (i = !0)) : s === r && ((e[t] = r - 1), (i = !0)),
                         -1 === o ? ((e[t + 1] = 0), (i = !0)) : o === n && ((e[t + 1] = n - 1), (i = !0));
               }
               i = !0;
               for (let t = e.length - 2; t >= 0 && i; t -= 2) {
                    const s = Math.floor(e[t]),
                         o = Math.floor(e[t + 1]);
                    if (s < -1 || s > r || o < -1 || o > n) throw new N();
                    (i = !1),
                         -1 === s ? ((e[t] = 0), (i = !0)) : s === r && ((e[t] = r - 1), (i = !0)),
                         -1 === o ? ((e[t + 1] = 0), (i = !0)) : o === n && ((e[t + 1] = n - 1), (i = !0));
               }
          }
     }
     class ht {
          constructor(t, e, r, n, i, s, o, a, h) {
               (this.a11 = t), (this.a21 = e), (this.a31 = r), (this.a12 = n), (this.a22 = i), (this.a32 = s), (this.a13 = o), (this.a23 = a), (this.a33 = h);
          }
          static quadrilateralToQuadrilateral(t, e, r, n, i, s, o, a, h, l, c, d, u, g, f, w) {
               const C = ht.quadrilateralToSquare(t, e, r, n, i, s, o, a);
               return ht.squareToQuadrilateral(h, l, c, d, u, g, f, w).times(C);
          }
          transformPoints(t) {
               const e = t.length,
                    r = this.a11,
                    n = this.a12,
                    i = this.a13,
                    s = this.a21,
                    o = this.a22,
                    a = this.a23,
                    h = this.a31,
                    l = this.a32,
                    c = this.a33;
               for (let d = 0; d < e; d += 2) {
                    const e = t[d],
                         u = t[d + 1],
                         g = i * e + a * u + c;
                    (t[d] = (r * e + s * u + h) / g), (t[d + 1] = (n * e + o * u + l) / g);
               }
          }
          transformPointsWithValues(t, e) {
               const r = this.a11,
                    n = this.a12,
                    i = this.a13,
                    s = this.a21,
                    o = this.a22,
                    a = this.a23,
                    h = this.a31,
                    l = this.a32,
                    c = this.a33,
                    d = t.length;
               for (let u = 0; u < d; u++) {
                    const d = t[u],
                         g = e[u],
                         f = i * d + a * g + c;
                    (t[u] = (r * d + s * g + h) / f), (e[u] = (n * d + o * g + l) / f);
               }
          }
          static squareToQuadrilateral(t, e, r, n, i, s, o, a) {
               const h = t - r + i - o,
                    l = e - n + s - a;
               if (0 === h && 0 === l) return new ht(r - t, i - r, t, n - e, s - n, e, 0, 0, 1);
               {
                    const c = r - i,
                         d = o - i,
                         u = n - s,
                         g = a - s,
                         f = c * g - d * u,
                         w = (h * g - d * l) / f,
                         C = (c * l - h * u) / f;
                    return new ht(r - t + w * r, o - t + C * o, t, n - e + w * n, a - e + C * a, e, w, C, 1);
               }
          }
          static quadrilateralToSquare(t, e, r, n, i, s, o, a) {
               return ht.squareToQuadrilateral(t, e, r, n, i, s, o, a).buildAdjoint();
          }
          buildAdjoint() {
               return new ht(
                    this.a22 * this.a33 - this.a23 * this.a32,
                    this.a23 * this.a31 - this.a21 * this.a33,
                    this.a21 * this.a32 - this.a22 * this.a31,
                    this.a13 * this.a32 - this.a12 * this.a33,
                    this.a11 * this.a33 - this.a13 * this.a31,
                    this.a12 * this.a31 - this.a11 * this.a32,
                    this.a12 * this.a23 - this.a13 * this.a22,
                    this.a13 * this.a21 - this.a11 * this.a23,
                    this.a11 * this.a22 - this.a12 * this.a21
               );
          }
          times(t) {
               return new ht(
                    this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13,
                    this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23,
                    this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33,
                    this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13,
                    this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23,
                    this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33,
                    this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13,
                    this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23,
                    this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33
               );
          }
     }
     class lt extends at {
          sampleGrid(t, e, r, n, i, s, o, a, h, l, c, d, u, g, f, w, C, A, E) {
               const m = ht.quadrilateralToQuadrilateral(n, i, s, o, a, h, l, c, d, u, g, f, w, C, A, E);
               return this.sampleGridWithTransform(t, e, r, m);
          }
          sampleGridWithTransform(t, e, r, n) {
               if (e <= 0 || r <= 0) throw new N();
               const i = new R(e, r),
                    s = new Float32Array(2 * e);
               for (let e = 0; e < r; e++) {
                    const r = s.length,
                         o = e + 0.5;
                    for (let t = 0; t < r; t += 2) (s[t] = t / 2 + 0.5), (s[t + 1] = o);
                    n.transformPoints(s), at.checkAndNudgePoints(t, s);
                    try {
                         for (let n = 0; n < r; n += 2) t.get(Math.floor(s[n]), Math.floor(s[n + 1])) && i.set(n / 2, e);
                    } catch (t) {
                         throw new N();
                    }
               }
               return i;
          }
     }
     class ct {
          static setGridSampler(t) {
               ct.gridSampler = t;
          }
          static getInstance() {
               return ct.gridSampler;
          }
     }
     ct.gridSampler = new lt();
     class dt {
          constructor(t, e) {
               (this.x = t), (this.y = e);
          }
          toResultPoint() {
               return new nt(this.getX(), this.getY());
          }
          getX() {
               return this.x;
          }
          getY() {
               return this.y;
          }
     }
     class ut {
          constructor(t) {
               (this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799])), (this.image = t);
          }
          detect() {
               return this.detectMirror(!1);
          }
          detectMirror(t) {
               let e = this.getMatrixCenter(),
                    r = this.getBullsEyeCorners(e);
               if (t) {
                    let t = r[0];
                    (r[0] = r[2]), (r[2] = t);
               }
               this.extractParameters(r);
               let n = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4]),
                    i = this.getMatrixCornerPoints(r);
               return new st(n, i, this.compact, this.nbDataBlocks, this.nbLayers);
          }
          extractParameters(t) {
               if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2]) && this.isValidPoint(t[3]))) throw new N();
               let e = 2 * this.nbCenterLayers,
                    r = new Int32Array([
                         this.sampleLine(t[0], t[1], e),
                         this.sampleLine(t[1], t[2], e),
                         this.sampleLine(t[2], t[3], e),
                         this.sampleLine(t[3], t[0], e),
                    ]);
               this.shift = this.getRotation(r, e);
               let n = 0;
               for (let t = 0; t < 4; t++) {
                    let e = r[(this.shift + t) % 4];
                    this.compact ? ((n <<= 7), (n += (e >> 1) & 127)) : ((n <<= 10), (n += ((e >> 2) & 992) + ((e >> 1) & 31)));
               }
               let i = this.getCorrectedParameterData(n, this.compact);
               this.compact
                    ? ((this.nbLayers = 1 + (i >> 6)), (this.nbDataBlocks = 1 + (63 & i)))
                    : ((this.nbLayers = 1 + (i >> 11)), (this.nbDataBlocks = 1 + (2047 & i)));
          }
          getRotation(t, e) {
               let r = 0;
               t.forEach((t, n, i) => {
                    r = (r << 3) + (((t >> (e - 2)) << 1) + (1 & t));
               }),
                    (r = ((1 & r) << 11) + (r >> 1));
               for (let t = 0; t < 4; t++) if (w.bitCount(r ^ this.EXPECTED_CORNER_BITS[t]) <= 2) return t;
               throw new N();
          }
          getCorrectedParameterData(t, e) {
               let r, n;
               e ? ((r = 7), (n = 2)) : ((r = 10), (n = 4));
               let i = r - n,
                    s = new Int32Array(r);
               for (let e = r - 1; e >= 0; --e) (s[e] = 15 & t), (t >>= 4);
               try {
                    new $(Q.AZTEC_PARAM).decode(s, i);
               } catch (t) {
                    throw new N();
               }
               let o = 0;
               for (let t = 0; t < n; t++) o = (o << 4) + s[t];
               return o;
          }
          getBullsEyeCorners(t) {
               let e = t,
                    r = t,
                    n = t,
                    i = t,
                    s = !0;
               for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
                    let t = this.getFirstDifferent(e, s, 1, -1),
                         o = this.getFirstDifferent(r, s, 1, 1),
                         a = this.getFirstDifferent(n, s, -1, 1),
                         h = this.getFirstDifferent(i, s, -1, -1);
                    if (this.nbCenterLayers > 2) {
                         let r = (this.distancePoint(h, t) * this.nbCenterLayers) / (this.distancePoint(i, e) * (this.nbCenterLayers + 2));
                         if (r < 0.75 || r > 1.25 || !this.isWhiteOrBlackRectangle(t, o, a, h)) break;
                    }
                    (e = t), (r = o), (n = a), (i = h), (s = !s);
               }
               if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new N();
               this.compact = 5 === this.nbCenterLayers;
               let o = new nt(e.getX() + 0.5, e.getY() - 0.5),
                    a = new nt(r.getX() + 0.5, r.getY() + 0.5),
                    h = new nt(n.getX() - 0.5, n.getY() + 0.5),
                    l = new nt(i.getX() - 0.5, i.getY() - 0.5);
               return this.expandSquare([o, a, h, l], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
          }
          getMatrixCenter() {
               let t, e, r, n;
               try {
                    let i = new ot(this.image).detect();
                    (t = i[0]), (e = i[1]), (r = i[2]), (n = i[3]);
               } catch (i) {
                    let s = this.image.getWidth() / 2,
                         o = this.image.getHeight() / 2;
                    (t = this.getFirstDifferent(new dt(s + 7, o - 7), !1, 1, -1).toResultPoint()),
                         (e = this.getFirstDifferent(new dt(s + 7, o + 7), !1, 1, 1).toResultPoint()),
                         (r = this.getFirstDifferent(new dt(s - 7, o + 7), !1, -1, 1).toResultPoint()),
                         (n = this.getFirstDifferent(new dt(s - 7, o - 7), !1, -1, -1).toResultPoint());
               }
               let i = et.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
                    s = et.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
               try {
                    let o = new ot(this.image, 15, i, s).detect();
                    (t = o[0]), (e = o[1]), (r = o[2]), (n = o[3]);
               } catch (o) {
                    (t = this.getFirstDifferent(new dt(i + 7, s - 7), !1, 1, -1).toResultPoint()),
                         (e = this.getFirstDifferent(new dt(i + 7, s + 7), !1, 1, 1).toResultPoint()),
                         (r = this.getFirstDifferent(new dt(i - 7, s + 7), !1, -1, 1).toResultPoint()),
                         (n = this.getFirstDifferent(new dt(i - 7, s - 7), !1, -1, -1).toResultPoint());
               }
               return (
                    (i = et.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4)),
                    (s = et.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4)),
                    new dt(i, s)
               );
          }
          getMatrixCornerPoints(t) {
               return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension());
          }
          sampleGrid(t, e, r, n, i) {
               let s = ct.getInstance(),
                    o = this.getDimension(),
                    a = o / 2 - this.nbCenterLayers,
                    h = o / 2 + this.nbCenterLayers;
               return s.sampleGrid(t, o, o, a, a, h, a, h, h, a, h, e.getX(), e.getY(), r.getX(), r.getY(), n.getX(), n.getY(), i.getX(), i.getY());
          }
          sampleLine(t, e, r) {
               let n = 0,
                    i = this.distanceResultPoint(t, e),
                    s = i / r,
                    o = t.getX(),
                    a = t.getY(),
                    h = (s * (e.getX() - t.getX())) / i,
                    l = (s * (e.getY() - t.getY())) / i;
               for (let t = 0; t < r; t++) this.image.get(et.round(o + t * h), et.round(a + t * l)) && (n |= 1 << (r - t - 1));
               return n;
          }
          isWhiteOrBlackRectangle(t, e, r, n) {
               (t = new dt(t.getX() - 3, t.getY() + 3)),
                    (e = new dt(e.getX() - 3, e.getY() - 3)),
                    (r = new dt(r.getX() + 3, r.getY() - 3)),
                    (n = new dt(n.getX() + 3, n.getY() + 3));
               let i = this.getColor(n, t);
               if (0 === i) return !1;
               let s = this.getColor(t, e);
               return s === i && ((s = this.getColor(e, r)), s === i && ((s = this.getColor(r, n)), s === i));
          }
          getColor(t, e) {
               let r = this.distancePoint(t, e),
                    n = (e.getX() - t.getX()) / r,
                    i = (e.getY() - t.getY()) / r,
                    s = 0,
                    o = t.getX(),
                    a = t.getY(),
                    h = this.image.get(t.getX(), t.getY()),
                    l = Math.ceil(r);
               for (let t = 0; t < l; t++) (o += n), (a += i), this.image.get(et.round(o), et.round(a)) !== h && s++;
               let c = s / r;
               return c > 0.1 && c < 0.9 ? 0 : c <= 0.1 === h ? 1 : -1;
          }
          getFirstDifferent(t, e, r, n) {
               let i = t.getX() + r,
                    s = t.getY() + n;
               for (; this.isValid(i, s) && this.image.get(i, s) === e; ) (i += r), (s += n);
               for (i -= r, s -= n; this.isValid(i, s) && this.image.get(i, s) === e; ) i += r;
               for (i -= r; this.isValid(i, s) && this.image.get(i, s) === e; ) s += n;
               return (s -= n), new dt(i, s);
          }
          expandSquare(t, e, r) {
               let n = r / (2 * e),
                    i = t[0].getX() - t[2].getX(),
                    s = t[0].getY() - t[2].getY(),
                    o = (t[0].getX() + t[2].getX()) / 2,
                    a = (t[0].getY() + t[2].getY()) / 2,
                    h = new nt(o + n * i, a + n * s),
                    l = new nt(o - n * i, a - n * s);
               return (
                    (i = t[1].getX() - t[3].getX()),
                    (s = t[1].getY() - t[3].getY()),
                    (o = (t[1].getX() + t[3].getX()) / 2),
                    (a = (t[1].getY() + t[3].getY()) / 2),
                    [h, new nt(o + n * i, a + n * s), l, new nt(o - n * i, a - n * s)]
               );
          }
          isValid(t, e) {
               return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight();
          }
          isValidPoint(t) {
               let e = et.round(t.getX()),
                    r = et.round(t.getY());
               return this.isValid(e, r);
          }
          distancePoint(t, e) {
               return et.distance(t.getX(), t.getY(), e.getX(), e.getY());
          }
          distanceResultPoint(t, e) {
               return et.distance(t.getX(), t.getY(), e.getX(), e.getY());
          }
          getDimension() {
               return this.compact
                    ? 4 * this.nbLayers + 11
                    : this.nbLayers <= 4
                    ? 4 * this.nbLayers + 15
                    : 4 * this.nbLayers + 2 * (w.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
          }
     }
     class gt {
          decode(t, e = null) {
               let r = null,
                    n = new ut(t.getBlackMatrix()),
                    i = null,
                    s = null;
               try {
                    let t = n.detectMirror(!1);
                    (i = t.getPoints()), this.reportFoundResultPoints(e, i), (s = new tt().decode(t));
               } catch (t) {
                    r = t;
               }
               if (null == s)
                    try {
                         let t = n.detectMirror(!0);
                         (i = t.getPoints()), this.reportFoundResultPoints(e, i), (s = new tt().decode(t));
                    } catch (t) {
                         if (null != r) throw r;
                         throw t;
                    }
               let o = new v(s.getText(), s.getRawBytes(), s.getNumBits(), i, x.AZTEC, d.currentTimeMillis()),
                    a = s.getByteSegments();
               null != a && o.putMetadata(z.BYTE_SEGMENTS, a);
               let h = s.getECLevel();
               return null != h && o.putMetadata(z.ERROR_CORRECTION_LEVEL, h), o;
          }
          reportFoundResultPoints(t, e) {
               if (null != t) {
                    let r = t.get(E.NEED_RESULT_POINT_CALLBACK);
                    null != r &&
                         e.forEach((t, e, n) => {
                              r.foundPossibleResultPoint(t);
                         });
               }
          }
          reset() {}
     }
     class ft {
          decode(t, e) {
               try {
                    return this.doDecode(t, e);
               } catch (r) {
                    if (e && !0 === e.get(E.TRY_HARDER) && t.isRotateSupported()) {
                         const r = t.rotateCounterClockwise(),
                              n = this.doDecode(r, e),
                              i = n.getResultMetadata();
                         let s = 270;
                         null !== i && !0 === i.get(z.ORIENTATION) && (s += i.get(z.ORIENTATION) % 360), n.putMetadata(z.ORIENTATION, s);
                         const o = n.getResultPoints();
                         if (null !== o) {
                              const t = r.getHeight();
                              for (let e = 0; e < o.length; e++) o[e] = new nt(t - o[e].getY() - 1, o[e].getX());
                         }
                         return n;
                    }
                    throw new N();
               }
          }
          reset() {}
          doDecode(t, e) {
               const r = t.getWidth(),
                    n = t.getHeight();
               let i = new C(r);
               const s = e && !0 === e.get(E.TRY_HARDER),
                    o = Math.max(1, n >> (s ? 8 : 5));
               let a;
               a = s ? n : 15;
               const h = Math.trunc(n / 2);
               for (let s = 0; s < a; s++) {
                    const a = Math.trunc((s + 1) / 2),
                         l = h + o * (!(1 & s) ? a : -a);
                    if (l < 0 || l >= n) break;
                    try {
                         i = t.getBlackRow(l, i);
                    } catch (t) {
                         continue;
                    }
                    for (let t = 0; t < 2; t++) {
                         if (1 === t && (i.reverse(), e && !0 === e.get(E.NEED_RESULT_POINT_CALLBACK))) {
                              const t = new Map();
                              e.forEach((e, r) => t.set(r, e)), t.delete(E.NEED_RESULT_POINT_CALLBACK), (e = t);
                         }
                         try {
                              const n = this.decodeRow(l, i, e);
                              if (1 === t) {
                                   n.putMetadata(z.ORIENTATION, 180);
                                   const t = n.getResultPoints();
                                   null !== t && ((t[0] = new nt(r - t[0].getX() - 1, t[0].getY())), (t[1] = new nt(r - t[1].getX() - 1, t[1].getY())));
                              }
                              return n;
                         } catch (t) {}
                    }
               }
               throw new N();
          }
          static recordPattern(t, e, r) {
               const n = r.length;
               for (let t = 0; t < n; t++) r[t] = 0;
               const i = t.getSize();
               if (e >= i) throw new N();
               let s = !t.get(e),
                    o = 0,
                    a = e;
               for (; a < i; ) {
                    if (t.get(a) !== s) r[o]++;
                    else {
                         if (++o === n) break;
                         (r[o] = 1), (s = !s);
                    }
                    a++;
               }
               if (o !== n && (o !== n - 1 || a !== i)) throw new N();
          }
          static recordPatternInReverse(t, e, r) {
               let n = r.length,
                    i = t.get(e);
               for (; e > 0 && n >= 0; ) t.get(--e) !== i && (n--, (i = !i));
               if (n >= 0) throw new N();
               ft.recordPattern(t, e + 1, r);
          }
          static patternMatchVariance(t, e, r) {
               const n = t.length;
               let i = 0,
                    s = 0;
               for (let r = 0; r < n; r++) (i += t[r]), (s += e[r]);
               if (i < s) return Number.POSITIVE_INFINITY;
               const o = i / s;
               r *= o;
               let a = 0;
               for (let i = 0; i < n; i++) {
                    const n = t[i],
                         s = e[i] * o,
                         h = n > s ? n - s : s - n;
                    if (h > r) return Number.POSITIVE_INFINITY;
                    a += h;
               }
               return a / i;
          }
     }
     class wt extends ft {
          static findStartPattern(t) {
               const e = t.getSize(),
                    r = t.getNextSet(0);
               let n = 0,
                    i = Int32Array.from([0, 0, 0, 0, 0, 0]),
                    s = r,
                    o = !1;
               for (let a = r; a < e; a++)
                    if (t.get(a) !== o) i[n]++;
                    else {
                         if (5 === n) {
                              let e = wt.MAX_AVG_VARIANCE,
                                   r = -1;
                              for (let t = wt.CODE_START_A; t <= wt.CODE_START_C; t++) {
                                   const n = ft.patternMatchVariance(i, wt.CODE_PATTERNS[t], wt.MAX_INDIVIDUAL_VARIANCE);
                                   n < e && ((e = n), (r = t));
                              }
                              if (r >= 0 && t.isRange(Math.max(0, s - (a - s) / 2), s, !1)) return Int32Array.from([s, a, r]);
                              (s += i[0] + i[1]), (i = i.slice(2, i.length)), (i[n - 1] = 0), (i[n] = 0), n--;
                         } else n++;
                         (i[n] = 1), (o = !o);
                    }
               throw new N();
          }
          static decodeCode(t, e, r) {
               ft.recordPattern(t, r, e);
               let n = wt.MAX_AVG_VARIANCE,
                    i = -1;
               for (let t = 0; t < wt.CODE_PATTERNS.length; t++) {
                    const r = wt.CODE_PATTERNS[t],
                         s = this.patternMatchVariance(e, r, wt.MAX_INDIVIDUAL_VARIANCE);
                    s < n && ((n = s), (i = t));
               }
               if (i >= 0) return i;
               throw new N();
          }
          decodeRow(t, e, r) {
               const n = r && !0 === r.get(E.ASSUME_GS1),
                    i = wt.findStartPattern(e),
                    s = i[2];
               let o = 0;
               const a = new Uint8Array(20);
               let h;
               switch (((a[o++] = s), s)) {
                    case wt.CODE_START_A:
                         h = wt.CODE_CODE_A;
                         break;
                    case wt.CODE_START_B:
                         h = wt.CODE_CODE_B;
                         break;
                    case wt.CODE_START_C:
                         h = wt.CODE_CODE_C;
                         break;
                    default:
                         throw new m();
               }
               let c = !1,
                    d = !1,
                    u = '',
                    g = i[0],
                    f = i[1];
               const w = Int32Array.from([0, 0, 0, 0, 0, 0]);
               let C = 0,
                    A = 0,
                    I = s,
                    _ = 0,
                    S = !0,
                    p = !1,
                    T = !1;
               for (; !c; ) {
                    const t = d;
                    switch (
                         ((d = !1),
                         (C = A),
                         (A = wt.decodeCode(e, w, f)),
                         (a[o++] = A),
                         A !== wt.CODE_STOP && (S = !0),
                         A !== wt.CODE_STOP && (_++, (I += _ * A)),
                         (g = f),
                         (f += w.reduce((t, e) => t + e, 0)),
                         A)
                    ) {
                         case wt.CODE_START_A:
                         case wt.CODE_START_B:
                         case wt.CODE_START_C:
                              throw new m();
                    }
                    switch (h) {
                         case wt.CODE_CODE_A:
                              if (A < 64)
                                   (u += T === p ? String.fromCharCode(' '.charCodeAt(0) + A) : String.fromCharCode(' '.charCodeAt(0) + A + 128)), (T = !1);
                              else if (A < 96) (u += T === p ? String.fromCharCode(A - 64) : String.fromCharCode(A + 64)), (T = !1);
                              else
                                   switch ((A !== wt.CODE_STOP && (S = !1), A)) {
                                        case wt.CODE_FNC_1:
                                             n && (0 === u.length ? (u += ']C1') : (u += String.fromCharCode(29)));
                                             break;
                                        case wt.CODE_FNC_2:
                                        case wt.CODE_FNC_3:
                                             break;
                                        case wt.CODE_FNC_4_A:
                                             !p && T ? ((p = !0), (T = !1)) : p && T ? ((p = !1), (T = !1)) : (T = !0);
                                             break;
                                        case wt.CODE_SHIFT:
                                             (d = !0), (h = wt.CODE_CODE_B);
                                             break;
                                        case wt.CODE_CODE_B:
                                             h = wt.CODE_CODE_B;
                                             break;
                                        case wt.CODE_CODE_C:
                                             h = wt.CODE_CODE_C;
                                             break;
                                        case wt.CODE_STOP:
                                             c = !0;
                                   }
                              break;
                         case wt.CODE_CODE_B:
                              if (A < 96)
                                   (u += T === p ? String.fromCharCode(' '.charCodeAt(0) + A) : String.fromCharCode(' '.charCodeAt(0) + A + 128)), (T = !1);
                              else
                                   switch ((A !== wt.CODE_STOP && (S = !1), A)) {
                                        case wt.CODE_FNC_1:
                                             n && (0 === u.length ? (u += ']C1') : (u += String.fromCharCode(29)));
                                             break;
                                        case wt.CODE_FNC_2:
                                        case wt.CODE_FNC_3:
                                             break;
                                        case wt.CODE_FNC_4_B:
                                             !p && T ? ((p = !0), (T = !1)) : p && T ? ((p = !1), (T = !1)) : (T = !0);
                                             break;
                                        case wt.CODE_SHIFT:
                                             (d = !0), (h = wt.CODE_CODE_A);
                                             break;
                                        case wt.CODE_CODE_A:
                                             h = wt.CODE_CODE_A;
                                             break;
                                        case wt.CODE_CODE_C:
                                             h = wt.CODE_CODE_C;
                                             break;
                                        case wt.CODE_STOP:
                                             c = !0;
                                   }
                              break;
                         case wt.CODE_CODE_C:
                              if (A < 100) A < 10 && (u += '0'), (u += A);
                              else
                                   switch ((A !== wt.CODE_STOP && (S = !1), A)) {
                                        case wt.CODE_FNC_1:
                                             n && (0 === u.length ? (u += ']C1') : (u += String.fromCharCode(29)));
                                             break;
                                        case wt.CODE_CODE_A:
                                             h = wt.CODE_CODE_A;
                                             break;
                                        case wt.CODE_CODE_B:
                                             h = wt.CODE_CODE_B;
                                             break;
                                        case wt.CODE_STOP:
                                             c = !0;
                                   }
                    }
                    t && (h = h === wt.CODE_CODE_A ? wt.CODE_CODE_B : wt.CODE_CODE_A);
               }
               const R = f - g;
               if (((f = e.getNextUnset(f)), !e.isRange(f, Math.min(e.getSize(), f + (f - g) / 2), !1))) throw new N();
               if (((I -= _ * C), I % 103 !== C)) throw new l();
               const y = u.length;
               if (0 === y) throw new N();
               y > 0 && S && (u = h === wt.CODE_CODE_C ? u.substring(0, y - 2) : u.substring(0, y - 1));
               const D = (i[1] + i[0]) / 2,
                    O = g + R / 2,
                    M = a.length,
                    b = new Uint8Array(M);
               for (let t = 0; t < M; t++) b[t] = a[t];
               const B = [new nt(D, t), new nt(O, t)];
               return new v(u, b, 0, B, x.CODE_128, new Date().getTime());
          }
     }
     (wt.CODE_PATTERNS = [
          Int32Array.from([2, 1, 2, 2, 2, 2]),
          Int32Array.from([2, 2, 2, 1, 2, 2]),
          Int32Array.from([2, 2, 2, 2, 2, 1]),
          Int32Array.from([1, 2, 1, 2, 2, 3]),
          Int32Array.from([1, 2, 1, 3, 2, 2]),
          Int32Array.from([1, 3, 1, 2, 2, 2]),
          Int32Array.from([1, 2, 2, 2, 1, 3]),
          Int32Array.from([1, 2, 2, 3, 1, 2]),
          Int32Array.from([1, 3, 2, 2, 1, 2]),
          Int32Array.from([2, 2, 1, 2, 1, 3]),
          Int32Array.from([2, 2, 1, 3, 1, 2]),
          Int32Array.from([2, 3, 1, 2, 1, 2]),
          Int32Array.from([1, 1, 2, 2, 3, 2]),
          Int32Array.from([1, 2, 2, 1, 3, 2]),
          Int32Array.from([1, 2, 2, 2, 3, 1]),
          Int32Array.from([1, 1, 3, 2, 2, 2]),
          Int32Array.from([1, 2, 3, 1, 2, 2]),
          Int32Array.from([1, 2, 3, 2, 2, 1]),
          Int32Array.from([2, 2, 3, 2, 1, 1]),
          Int32Array.from([2, 2, 1, 1, 3, 2]),
          Int32Array.from([2, 2, 1, 2, 3, 1]),
          Int32Array.from([2, 1, 3, 2, 1, 2]),
          Int32Array.from([2, 2, 3, 1, 1, 2]),
          Int32Array.from([3, 1, 2, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 2, 2, 2]),
          Int32Array.from([3, 2, 1, 1, 2, 2]),
          Int32Array.from([3, 2, 1, 2, 2, 1]),
          Int32Array.from([3, 1, 2, 2, 1, 2]),
          Int32Array.from([3, 2, 2, 1, 1, 2]),
          Int32Array.from([3, 2, 2, 2, 1, 1]),
          Int32Array.from([2, 1, 2, 1, 2, 3]),
          Int32Array.from([2, 1, 2, 3, 2, 1]),
          Int32Array.from([2, 3, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 1, 3, 2, 3]),
          Int32Array.from([1, 3, 1, 1, 2, 3]),
          Int32Array.from([1, 3, 1, 3, 2, 1]),
          Int32Array.from([1, 1, 2, 3, 1, 3]),
          Int32Array.from([1, 3, 2, 1, 1, 3]),
          Int32Array.from([1, 3, 2, 3, 1, 1]),
          Int32Array.from([2, 1, 1, 3, 1, 3]),
          Int32Array.from([2, 3, 1, 1, 1, 3]),
          Int32Array.from([2, 3, 1, 3, 1, 1]),
          Int32Array.from([1, 1, 2, 1, 3, 3]),
          Int32Array.from([1, 1, 2, 3, 3, 1]),
          Int32Array.from([1, 3, 2, 1, 3, 1]),
          Int32Array.from([1, 1, 3, 1, 2, 3]),
          Int32Array.from([1, 1, 3, 3, 2, 1]),
          Int32Array.from([1, 3, 3, 1, 2, 1]),
          Int32Array.from([3, 1, 3, 1, 2, 1]),
          Int32Array.from([2, 1, 1, 3, 3, 1]),
          Int32Array.from([2, 3, 1, 1, 3, 1]),
          Int32Array.from([2, 1, 3, 1, 1, 3]),
          Int32Array.from([2, 1, 3, 3, 1, 1]),
          Int32Array.from([2, 1, 3, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 2, 3]),
          Int32Array.from([3, 1, 1, 3, 2, 1]),
          Int32Array.from([3, 3, 1, 1, 2, 1]),
          Int32Array.from([3, 1, 2, 1, 1, 3]),
          Int32Array.from([3, 1, 2, 3, 1, 1]),
          Int32Array.from([3, 3, 2, 1, 1, 1]),
          Int32Array.from([3, 1, 4, 1, 1, 1]),
          Int32Array.from([2, 2, 1, 4, 1, 1]),
          Int32Array.from([4, 3, 1, 1, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 2, 4]),
          Int32Array.from([1, 1, 1, 4, 2, 2]),
          Int32Array.from([1, 2, 1, 1, 2, 4]),
          Int32Array.from([1, 2, 1, 4, 2, 1]),
          Int32Array.from([1, 4, 1, 1, 2, 2]),
          Int32Array.from([1, 4, 1, 2, 2, 1]),
          Int32Array.from([1, 1, 2, 2, 1, 4]),
          Int32Array.from([1, 1, 2, 4, 1, 2]),
          Int32Array.from([1, 2, 2, 1, 1, 4]),
          Int32Array.from([1, 2, 2, 4, 1, 1]),
          Int32Array.from([1, 4, 2, 1, 1, 2]),
          Int32Array.from([1, 4, 2, 2, 1, 1]),
          Int32Array.from([2, 4, 1, 2, 1, 1]),
          Int32Array.from([2, 2, 1, 1, 1, 4]),
          Int32Array.from([4, 1, 3, 1, 1, 1]),
          Int32Array.from([2, 4, 1, 1, 1, 2]),
          Int32Array.from([1, 3, 4, 1, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 4, 2]),
          Int32Array.from([1, 2, 1, 1, 4, 2]),
          Int32Array.from([1, 2, 1, 2, 4, 1]),
          Int32Array.from([1, 1, 4, 2, 1, 2]),
          Int32Array.from([1, 2, 4, 1, 1, 2]),
          Int32Array.from([1, 2, 4, 2, 1, 1]),
          Int32Array.from([4, 1, 1, 2, 1, 2]),
          Int32Array.from([4, 2, 1, 1, 1, 2]),
          Int32Array.from([4, 2, 1, 2, 1, 1]),
          Int32Array.from([2, 1, 2, 1, 4, 1]),
          Int32Array.from([2, 1, 4, 1, 2, 1]),
          Int32Array.from([4, 1, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 1, 1, 4, 3]),
          Int32Array.from([1, 1, 1, 3, 4, 1]),
          Int32Array.from([1, 3, 1, 1, 4, 1]),
          Int32Array.from([1, 1, 4, 1, 1, 3]),
          Int32Array.from([1, 1, 4, 3, 1, 1]),
          Int32Array.from([4, 1, 1, 1, 1, 3]),
          Int32Array.from([4, 1, 1, 3, 1, 1]),
          Int32Array.from([1, 1, 3, 1, 4, 1]),
          Int32Array.from([1, 1, 4, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 4, 1]),
          Int32Array.from([4, 1, 1, 1, 3, 1]),
          Int32Array.from([2, 1, 1, 4, 1, 2]),
          Int32Array.from([2, 1, 1, 2, 1, 4]),
          Int32Array.from([2, 1, 1, 2, 3, 2]),
          Int32Array.from([2, 3, 3, 1, 1, 1, 2]),
     ]),
          (wt.MAX_AVG_VARIANCE = 0.25),
          (wt.MAX_INDIVIDUAL_VARIANCE = 0.7),
          (wt.CODE_SHIFT = 98),
          (wt.CODE_CODE_C = 99),
          (wt.CODE_CODE_B = 100),
          (wt.CODE_CODE_A = 101),
          (wt.CODE_FNC_1 = 102),
          (wt.CODE_FNC_2 = 97),
          (wt.CODE_FNC_3 = 96),
          (wt.CODE_FNC_4_A = 101),
          (wt.CODE_FNC_4_B = 100),
          (wt.CODE_START_A = 103),
          (wt.CODE_START_B = 104),
          (wt.CODE_START_C = 105),
          (wt.CODE_STOP = 106);
     class Ct extends ft {
          constructor(t = !1, e = !1) {
               super(), (this.usingCheckDigit = t), (this.extendedMode = e), (this.decodeRowResult = ''), (this.counters = new Int32Array(9));
          }
          decodeRow(t, e, r) {
               let n = this.counters;
               n.fill(0), (this.decodeRowResult = '');
               let i,
                    s,
                    o = Ct.findAsteriskPattern(e, n),
                    a = e.getNextSet(o[1]),
                    h = e.getSize();
               do {
                    Ct.recordPattern(e, a, n);
                    let t = Ct.toNarrowWidePattern(n);
                    if (t < 0) throw new N();
                    (i = Ct.patternToChar(t)), (this.decodeRowResult += i), (s = a);
                    for (let t of n) a += t;
                    a = e.getNextSet(a);
               } while ('*' !== i);
               this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
               let c,
                    d = 0;
               for (let t of n) d += t;
               if (a !== h && 2 * (a - s - d) < d) throw new N();
               if (this.usingCheckDigit) {
                    let t = this.decodeRowResult.length - 1,
                         e = 0;
                    for (let r = 0; r < t; r++) e += Ct.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(r));
                    if (this.decodeRowResult.charAt(t) !== Ct.ALPHABET_STRING.charAt(e % 43)) throw new l();
                    this.decodeRowResult = this.decodeRowResult.substring(0, t);
               }
               if (0 === this.decodeRowResult.length) throw new N();
               c = this.extendedMode ? Ct.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
               let u = (o[1] + o[0]) / 2,
                    g = s + d / 2;
               return new v(c, null, 0, [new nt(u, t), new nt(g, t)], x.CODE_39, new Date().getTime());
          }
          static findAsteriskPattern(t, e) {
               let r = t.getSize(),
                    n = t.getNextSet(0),
                    i = 0,
                    s = n,
                    o = !1,
                    a = e.length;
               for (let h = n; h < r; h++)
                    if (t.get(h) !== o) e[i]++;
                    else {
                         if (i === a - 1) {
                              if (this.toNarrowWidePattern(e) === Ct.ASTERISK_ENCODING && t.isRange(Math.max(0, s - Math.floor((h - s) / 2)), s, !1))
                                   return [s, h];
                              (s += e[0] + e[1]), e.copyWithin(0, 2, 2 + i - 1), (e[i - 1] = 0), (e[i] = 0), i--;
                         } else i++;
                         (e[i] = 1), (o = !o);
                    }
               throw new N();
          }
          static toNarrowWidePattern(t) {
               let e,
                    r = t.length,
                    n = 0;
               do {
                    let i = 2147483647;
                    for (let e of t) e < i && e > n && (i = e);
                    (n = i), (e = 0);
                    let s = 0,
                         o = 0;
                    for (let i = 0; i < r; i++) {
                         let a = t[i];
                         a > n && ((o |= 1 << (r - 1 - i)), e++, (s += a));
                    }
                    if (3 === e) {
                         for (let i = 0; i < r && e > 0; i++) {
                              let r = t[i];
                              if (r > n && (e--, 2 * r >= s)) return -1;
                         }
                         return o;
                    }
               } while (e > 3);
               return -1;
          }
          static patternToChar(t) {
               for (let e = 0; e < Ct.CHARACTER_ENCODINGS.length; e++) if (Ct.CHARACTER_ENCODINGS[e] === t) return Ct.ALPHABET_STRING.charAt(e);
               if (t === Ct.ASTERISK_ENCODING) return '*';
               throw new N();
          }
          static decodeExtended(t) {
               let e = t.length,
                    r = '';
               for (let n = 0; n < e; n++) {
                    let e = t.charAt(n);
                    if ('+' === e || '$' === e || '%' === e || '/' === e) {
                         let i = t.charAt(n + 1),
                              s = '\0';
                         switch (e) {
                              case '+':
                                   if (!(i >= 'A' && i <= 'Z')) throw new m();
                                   s = String.fromCharCode(i.charCodeAt(0) + 32);
                                   break;
                              case '$':
                                   if (!(i >= 'A' && i <= 'Z')) throw new m();
                                   s = String.fromCharCode(i.charCodeAt(0) - 64);
                                   break;
                              case '%':
                                   if (i >= 'A' && i <= 'E') s = String.fromCharCode(i.charCodeAt(0) - 38);
                                   else if (i >= 'F' && i <= 'J') s = String.fromCharCode(i.charCodeAt(0) - 11);
                                   else if (i >= 'K' && i <= 'O') s = String.fromCharCode(i.charCodeAt(0) + 16);
                                   else if (i >= 'P' && i <= 'T') s = String.fromCharCode(i.charCodeAt(0) + 43);
                                   else if ('U' === i) s = '\0';
                                   else if ('V' === i) s = '@';
                                   else if ('W' === i) s = '`';
                                   else {
                                        if ('X' !== i && 'Y' !== i && 'Z' !== i) throw new m();
                                        s = '';
                                   }
                                   break;
                              case '/':
                                   if (i >= 'A' && i <= 'O') s = String.fromCharCode(i.charCodeAt(0) - 32);
                                   else {
                                        if ('Z' !== i) throw new m();
                                        s = ':';
                                   }
                         }
                         (r += s), n++;
                    } else r += e;
               }
               return r;
          }
     }
     (Ct.ALPHABET_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%'),
          (Ct.CHARACTER_ENCODINGS = [
               52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193,
               448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42,
          ]),
          (Ct.ASTERISK_ENCODING = 148);
     class At extends ft {
          constructor() {
               super(), (this.decodeRowResult = ''), (this.counters = new Int32Array(6));
          }
          decodeRow(t, e, r) {
               let n,
                    i,
                    s = this.findAsteriskPattern(e),
                    o = e.getNextSet(s[1]),
                    a = e.getSize(),
                    h = this.counters;
               h.fill(0), (this.decodeRowResult = '');
               do {
                    At.recordPattern(e, o, h);
                    let t = this.toPattern(h);
                    if (t < 0) throw new N();
                    (n = this.patternToChar(t)), (this.decodeRowResult += n), (i = o);
                    for (let t of h) o += t;
                    o = e.getNextSet(o);
               } while ('*' !== n);
               this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
               let l = 0;
               for (let t of h) l += t;
               if (o === a || !e.get(o)) throw new N();
               if (this.decodeRowResult.length < 2) throw new N();
               this.checkChecksums(this.decodeRowResult), (this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2));
               let c = this.decodeExtended(this.decodeRowResult),
                    d = (s[1] + s[0]) / 2,
                    u = i + l / 2;
               return new v(c, null, 0, [new nt(d, t), new nt(u, t)], x.CODE_93, new Date().getTime());
          }
          findAsteriskPattern(t) {
               let e = t.getSize(),
                    r = t.getNextSet(0);
               this.counters.fill(0);
               let n = this.counters,
                    i = r,
                    s = !1,
                    o = n.length,
                    a = 0;
               for (let h = r; h < e; h++)
                    if (t.get(h) !== s) n[a]++;
                    else {
                         if (a === o - 1) {
                              if (this.toPattern(n) === At.ASTERISK_ENCODING) return new Int32Array([i, h]);
                              (i += n[0] + n[1]), n.copyWithin(0, 2, 2 + a - 1), (n[a - 1] = 0), (n[a] = 0), a--;
                         } else a++;
                         (n[a] = 1), (s = !s);
                    }
               throw new N();
          }
          toPattern(t) {
               let e = 0;
               for (const r of t) e += r;
               let r = 0,
                    n = t.length;
               for (let i = 0; i < n; i++) {
                    let n = Math.round((9 * t[i]) / e);
                    if (n < 1 || n > 4) return -1;
                    if (1 & i) r <<= n;
                    else for (let t = 0; t < n; t++) r = (r << 1) | 1;
               }
               return r;
          }
          patternToChar(t) {
               for (let e = 0; e < At.CHARACTER_ENCODINGS.length; e++) if (At.CHARACTER_ENCODINGS[e] === t) return At.ALPHABET_STRING.charAt(e);
               throw new N();
          }
          decodeExtended(t) {
               let e = t.length,
                    r = '';
               for (let n = 0; n < e; n++) {
                    let i = t.charAt(n);
                    if (i >= 'a' && i <= 'd') {
                         if (n >= e - 1) throw new m();
                         let s = t.charAt(n + 1),
                              o = '\0';
                         switch (i) {
                              case 'd':
                                   if (!(s >= 'A' && s <= 'Z')) throw new m();
                                   o = String.fromCharCode(s.charCodeAt(0) + 32);
                                   break;
                              case 'a':
                                   if (!(s >= 'A' && s <= 'Z')) throw new m();
                                   o = String.fromCharCode(s.charCodeAt(0) - 64);
                                   break;
                              case 'b':
                                   if (s >= 'A' && s <= 'E') o = String.fromCharCode(s.charCodeAt(0) - 38);
                                   else if (s >= 'F' && s <= 'J') o = String.fromCharCode(s.charCodeAt(0) - 11);
                                   else if (s >= 'K' && s <= 'O') o = String.fromCharCode(s.charCodeAt(0) + 16);
                                   else if (s >= 'P' && s <= 'T') o = String.fromCharCode(s.charCodeAt(0) + 43);
                                   else if ('U' === s) o = '\0';
                                   else if ('V' === s) o = '@';
                                   else if ('W' === s) o = '`';
                                   else {
                                        if (!(s >= 'X' && s <= 'Z')) throw new m();
                                        o = String.fromCharCode(127);
                                   }
                                   break;
                              case 'c':
                                   if (s >= 'A' && s <= 'O') o = String.fromCharCode(s.charCodeAt(0) - 32);
                                   else {
                                        if ('Z' !== s) throw new m();
                                        o = ':';
                                   }
                         }
                         (r += o), n++;
                    } else r += i;
               }
               return r;
          }
          checkChecksums(t) {
               let e = t.length;
               this.checkOneChecksum(t, e - 2, 20), this.checkOneChecksum(t, e - 1, 15);
          }
          checkOneChecksum(t, e, r) {
               let n = 1,
                    i = 0;
               for (let s = e - 1; s >= 0; s--) (i += n * At.ALPHABET_STRING.indexOf(t.charAt(s))), ++n > r && (n = 1);
               if (t.charAt(e) !== At.ALPHABET_STRING[i % 47]) throw new l();
          }
     }
     (At.ALPHABET_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*'),
          (At.CHARACTER_ENCODINGS = [
               276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428,
               422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350,
          ]),
          (At.ASTERISK_ENCODING = At.CHARACTER_ENCODINGS[47]);
     class Et extends ft {
          constructor() {
               super(...arguments), (this.narrowLineWidth = -1);
          }
          decodeRow(t, e, r) {
               let n = this.decodeStart(e),
                    i = this.decodeEnd(e),
                    s = new T();
               Et.decodeMiddle(e, n[1], i[0], s);
               let o = s.toString(),
                    a = null;
               null != r && (a = r.get(E.ALLOWED_LENGTHS)), null == a && (a = Et.DEFAULT_ALLOWED_LENGTHS);
               let h = o.length,
                    l = !1,
                    c = 0;
               for (let t of a) {
                    if (h === t) {
                         l = !0;
                         break;
                    }
                    t > c && (c = t);
               }
               if ((!l && h > c && (l = !0), !l)) throw new m();
               const d = [new nt(n[1], t), new nt(i[0], t)];
               return new v(o, null, 0, d, x.ITF, new Date().getTime());
          }
          static decodeMiddle(t, e, r, n) {
               let i = new Int32Array(10),
                    s = new Int32Array(5),
                    o = new Int32Array(5);
               for (i.fill(0), s.fill(0), o.fill(0); e < r; ) {
                    ft.recordPattern(t, e, i);
                    for (let t = 0; t < 5; t++) {
                         let e = 2 * t;
                         (s[t] = i[e]), (o[t] = i[e + 1]);
                    }
                    let r = Et.decodeDigit(s);
                    n.append(r.toString()),
                         (r = this.decodeDigit(o)),
                         n.append(r.toString()),
                         i.forEach(function (t) {
                              e += t;
                         });
               }
          }
          decodeStart(t) {
               let e = Et.skipWhiteSpace(t),
                    r = Et.findGuardPattern(t, e, Et.START_PATTERN);
               return (this.narrowLineWidth = (r[1] - r[0]) / 4), this.validateQuietZone(t, r[0]), r;
          }
          validateQuietZone(t, e) {
               let r = 10 * this.narrowLineWidth;
               r = r < e ? r : e;
               for (let n = e - 1; r > 0 && n >= 0 && !t.get(n); n--) r--;
               if (0 !== r) throw new N();
          }
          static skipWhiteSpace(t) {
               const e = t.getSize(),
                    r = t.getNextSet(0);
               if (r === e) throw new N();
               return r;
          }
          decodeEnd(t) {
               t.reverse();
               try {
                    let e,
                         r = Et.skipWhiteSpace(t);
                    try {
                         e = Et.findGuardPattern(t, r, Et.END_PATTERN_REVERSED[0]);
                    } catch (n) {
                         n instanceof N && (e = Et.findGuardPattern(t, r, Et.END_PATTERN_REVERSED[1]));
                    }
                    this.validateQuietZone(t, e[0]);
                    let n = e[0];
                    return (e[0] = t.getSize() - e[1]), (e[1] = t.getSize() - n), e;
               } finally {
                    t.reverse();
               }
          }
          static findGuardPattern(t, e, r) {
               let n = r.length,
                    i = new Int32Array(n),
                    s = t.getSize(),
                    o = !1,
                    a = 0,
                    h = e;
               i.fill(0);
               for (let l = e; l < s; l++)
                    if (t.get(l) !== o) i[a]++;
                    else {
                         if (a === n - 1) {
                              if (ft.patternMatchVariance(i, r, Et.MAX_INDIVIDUAL_VARIANCE) < Et.MAX_AVG_VARIANCE) return [h, l];
                              (h += i[0] + i[1]), d.arraycopy(i, 2, i, 0, a - 1), (i[a - 1] = 0), (i[a] = 0), a--;
                         } else a++;
                         (i[a] = 1), (o = !o);
                    }
               throw new N();
          }
          static decodeDigit(t) {
               let e = Et.MAX_AVG_VARIANCE,
                    r = -1,
                    n = Et.PATTERNS.length;
               for (let i = 0; i < n; i++) {
                    let n = Et.PATTERNS[i],
                         s = ft.patternMatchVariance(t, n, Et.MAX_INDIVIDUAL_VARIANCE);
                    s < e ? ((e = s), (r = i)) : s === e && (r = -1);
               }
               if (r >= 0) return r % 10;
               throw new N();
          }
     }
     (Et.PATTERNS = [
          Int32Array.from([1, 1, 2, 2, 1]),
          Int32Array.from([2, 1, 1, 1, 2]),
          Int32Array.from([1, 2, 1, 1, 2]),
          Int32Array.from([2, 2, 1, 1, 1]),
          Int32Array.from([1, 1, 2, 1, 2]),
          Int32Array.from([2, 1, 2, 1, 1]),
          Int32Array.from([1, 2, 2, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 2]),
          Int32Array.from([2, 1, 1, 2, 1]),
          Int32Array.from([1, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 3, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 3]),
          Int32Array.from([1, 3, 1, 1, 3]),
          Int32Array.from([3, 3, 1, 1, 1]),
          Int32Array.from([1, 1, 3, 1, 3]),
          Int32Array.from([3, 1, 3, 1, 1]),
          Int32Array.from([1, 3, 3, 1, 1]),
          Int32Array.from([1, 1, 1, 3, 3]),
          Int32Array.from([3, 1, 1, 3, 1]),
          Int32Array.from([1, 3, 1, 3, 1]),
     ]),
          (Et.MAX_AVG_VARIANCE = 0.38),
          (Et.MAX_INDIVIDUAL_VARIANCE = 0.5),
          (Et.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14]),
          (Et.START_PATTERN = Int32Array.from([1, 1, 1, 1])),
          (Et.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])]);
     class mt extends ft {
          constructor() {
               super(...arguments), (this.decodeRowStringBuffer = '');
          }
          static findStartGuardPattern(t) {
               let e,
                    r = !1,
                    n = 0,
                    i = Int32Array.from([0, 0, 0]);
               for (; !r; ) {
                    (i = Int32Array.from([0, 0, 0])), (e = mt.findGuardPattern(t, n, !1, this.START_END_PATTERN, i));
                    let s = e[0];
                    n = e[1];
                    let o = s - (n - s);
                    o >= 0 && (r = t.isRange(o, s, !1));
               }
               return e;
          }
          static checkChecksum(t) {
               return mt.checkStandardUPCEANChecksum(t);
          }
          static checkStandardUPCEANChecksum(t) {
               let e = t.length;
               if (0 === e) return !1;
               let r = parseInt(t.charAt(e - 1), 10);
               return mt.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r;
          }
          static getStandardUPCEANChecksum(t) {
               let e = t.length,
                    r = 0;
               for (let n = e - 1; n >= 0; n -= 2) {
                    let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
                    if (e < 0 || e > 9) throw new m();
                    r += e;
               }
               r *= 3;
               for (let n = e - 2; n >= 0; n -= 2) {
                    let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
                    if (e < 0 || e > 9) throw new m();
                    r += e;
               }
               return (1e3 - r) % 10;
          }
          static decodeEnd(t, e) {
               return mt.findGuardPattern(t, e, !1, mt.START_END_PATTERN, new Int32Array(mt.START_END_PATTERN.length).fill(0));
          }
          static findGuardPatternWithoutCounters(t, e, r, n) {
               return this.findGuardPattern(t, e, r, n, new Int32Array(n.length));
          }
          static findGuardPattern(t, e, r, n, i) {
               let s = t.getSize(),
                    o = 0,
                    a = (e = r ? t.getNextUnset(e) : t.getNextSet(e)),
                    h = n.length,
                    l = r;
               for (let r = e; r < s; r++)
                    if (t.get(r) !== l) i[o]++;
                    else {
                         if (o === h - 1) {
                              if (ft.patternMatchVariance(i, n, mt.MAX_INDIVIDUAL_VARIANCE) < mt.MAX_AVG_VARIANCE) return Int32Array.from([a, r]);
                              a += i[0] + i[1];
                              let t = i.slice(2, i.length);
                              for (let e = 0; e < o - 1; e++) i[e] = t[e];
                              (i[o - 1] = 0), (i[o] = 0), o--;
                         } else o++;
                         (i[o] = 1), (l = !l);
                    }
               throw new N();
          }
          static decodeDigit(t, e, r, n) {
               this.recordPattern(t, r, e);
               let i = this.MAX_AVG_VARIANCE,
                    s = -1,
                    o = n.length;
               for (let t = 0; t < o; t++) {
                    let r = n[t],
                         o = ft.patternMatchVariance(e, r, mt.MAX_INDIVIDUAL_VARIANCE);
                    o < i && ((i = o), (s = t));
               }
               if (s >= 0) return s;
               throw new N();
          }
     }
     (mt.MAX_AVG_VARIANCE = 0.48),
          (mt.MAX_INDIVIDUAL_VARIANCE = 0.7),
          (mt.START_END_PATTERN = Int32Array.from([1, 1, 1])),
          (mt.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1])),
          (mt.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
          (mt.L_PATTERNS = [
               Int32Array.from([3, 2, 1, 1]),
               Int32Array.from([2, 2, 2, 1]),
               Int32Array.from([2, 1, 2, 2]),
               Int32Array.from([1, 4, 1, 1]),
               Int32Array.from([1, 1, 3, 2]),
               Int32Array.from([1, 2, 3, 1]),
               Int32Array.from([1, 1, 1, 4]),
               Int32Array.from([1, 3, 1, 2]),
               Int32Array.from([1, 2, 1, 3]),
               Int32Array.from([3, 1, 1, 2]),
          ]);
     class It {
          constructor() {
               (this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5]),
                    (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
                    (this.decodeRowStringBuffer = '');
          }
          decodeRow(t, e, r) {
               let n = this.decodeRowStringBuffer,
                    i = this.decodeMiddle(e, r, n),
                    s = n.toString(),
                    o = It.parseExtensionString(s),
                    a = [new nt((r[0] + r[1]) / 2, t), new nt(i, t)],
                    h = new v(s, null, 0, a, x.UPC_EAN_EXTENSION, new Date().getTime());
               return null != o && h.putAllMetadata(o), h;
          }
          decodeMiddle(t, e, r) {
               let n = this.decodeMiddleCounters;
               (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
               let i = t.getSize(),
                    s = e[1],
                    o = 0;
               for (let e = 0; e < 5 && s < i; e++) {
                    let i = mt.decodeDigit(t, n, s, mt.L_AND_G_PATTERNS);
                    r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
                    for (let t of n) s += t;
                    i >= 10 && (o |= 1 << (4 - e)), 4 !== e && ((s = t.getNextSet(s)), (s = t.getNextUnset(s)));
               }
               if (5 !== r.length) throw new N();
               let a = this.determineCheckDigit(o);
               if (It.extensionChecksum(r.toString()) !== a) throw new N();
               return s;
          }
          static extensionChecksum(t) {
               let e = t.length,
                    r = 0;
               for (let n = e - 2; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
               r *= 3;
               for (let n = e - 1; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
               return (r *= 3), r % 10;
          }
          determineCheckDigit(t) {
               for (let e = 0; e < 10; e++) if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
               throw new N();
          }
          static parseExtensionString(t) {
               if (5 !== t.length) return null;
               let e = It.parseExtension5String(t);
               return null == e ? null : new Map([[z.SUGGESTED_PRICE, e]]);
          }
          static parseExtension5String(t) {
               let e;
               switch (t.charAt(0)) {
                    case '0':
                         e = '£';
                         break;
                    case '5':
                         e = '$';
                         break;
                    case '9':
                         switch (t) {
                              case '90000':
                                   return null;
                              case '99991':
                                   return '0.00';
                              case '99990':
                                   return 'Used';
                         }
                         e = '';
                         break;
                    default:
                         e = '';
               }
               let r = parseInt(t.substring(1)),
                    n = r % 100;
               return e + (r / 100).toString() + '.' + (n < 10 ? '0' + n : n.toString());
          }
     }
     class _t {
          constructor() {
               (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])), (this.decodeRowStringBuffer = '');
          }
          decodeRow(t, e, r) {
               let n = this.decodeRowStringBuffer,
                    i = this.decodeMiddle(e, r, n),
                    s = n.toString(),
                    o = _t.parseExtensionString(s),
                    a = [new nt((r[0] + r[1]) / 2, t), new nt(i, t)],
                    h = new v(s, null, 0, a, x.UPC_EAN_EXTENSION, new Date().getTime());
               return null != o && h.putAllMetadata(o), h;
          }
          decodeMiddle(t, e, r) {
               let n = this.decodeMiddleCounters;
               (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
               let i = t.getSize(),
                    s = e[1],
                    o = 0;
               for (let e = 0; e < 2 && s < i; e++) {
                    let i = mt.decodeDigit(t, n, s, mt.L_AND_G_PATTERNS);
                    r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
                    for (let t of n) s += t;
                    i >= 10 && (o |= 1 << (1 - e)), 1 !== e && ((s = t.getNextSet(s)), (s = t.getNextUnset(s)));
               }
               if (2 !== r.length) throw new N();
               if (parseInt(r.toString()) % 4 !== o) throw new N();
               return s;
          }
          static parseExtensionString(t) {
               return 2 !== t.length ? null : new Map([[z.ISSUE_NUMBER, parseInt(t)]]);
          }
     }
     class St {
          static decodeRow(t, e, r) {
               let n = mt.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
               try {
                    return new It().decodeRow(t, e, n);
               } catch (r) {
                    return new _t().decodeRow(t, e, n);
               }
          }
     }
     St.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
     class pt extends mt {
          constructor() {
               super(), (this.decodeRowStringBuffer = ''), (pt.L_AND_G_PATTERNS = pt.L_PATTERNS.map((t) => Int32Array.from(t)));
               for (let t = 10; t < 20; t++) {
                    let e = pt.L_PATTERNS[t - 10],
                         r = new Int32Array(e.length);
                    for (let t = 0; t < e.length; t++) r[t] = e[e.length - t - 1];
                    pt.L_AND_G_PATTERNS[t] = r;
               }
          }
          decodeRow(t, e, r) {
               let n = pt.findStartGuardPattern(e),
                    i = null == r ? null : r.get(E.NEED_RESULT_POINT_CALLBACK);
               if (null != i) {
                    const e = new nt((n[0] + n[1]) / 2, t);
                    i.foundPossibleResultPoint(e);
               }
               let s = this.decodeMiddle(e, n, this.decodeRowStringBuffer),
                    o = s.rowOffset,
                    a = s.resultString;
               if (null != i) {
                    const e = new nt(o, t);
                    i.foundPossibleResultPoint(e);
               }
               let h = pt.decodeEnd(e, o);
               if (null != i) {
                    const e = new nt((h[0] + h[1]) / 2, t);
                    i.foundPossibleResultPoint(e);
               }
               let c = h[1],
                    d = c + (c - h[0]);
               if (d >= e.getSize() || !e.isRange(c, d, !1)) throw new N();
               let u = a.toString();
               if (u.length < 8) throw new m();
               if (!pt.checkChecksum(u)) throw new l();
               let g = (n[1] + n[0]) / 2,
                    f = (h[1] + h[0]) / 2,
                    w = this.getBarcodeFormat(),
                    C = [new nt(g, t), new nt(f, t)],
                    A = new v(u, null, 0, C, w, new Date().getTime()),
                    I = 0;
               try {
                    let r = St.decodeRow(t, e, h[1]);
                    A.putMetadata(z.UPC_EAN_EXTENSION, r.getText()),
                         A.putAllMetadata(r.getResultMetadata()),
                         A.addResultPoints(r.getResultPoints()),
                         (I = r.getText().length);
               } catch (t) {}
               let _ = null == r ? null : r.get(E.ALLOWED_EAN_EXTENSIONS);
               if (null != _) {
                    let t = !1;
                    for (let e in _)
                         if (I.toString() === e) {
                              t = !0;
                              break;
                         }
                    if (!t) throw new N();
               }
               return w === x.EAN_13 || x.UPC_A, A;
          }
          static checkChecksum(t) {
               return pt.checkStandardUPCEANChecksum(t);
          }
          static checkStandardUPCEANChecksum(t) {
               let e = t.length;
               if (0 === e) return !1;
               let r = parseInt(t.charAt(e - 1), 10);
               return pt.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r;
          }
          static getStandardUPCEANChecksum(t) {
               let e = t.length,
                    r = 0;
               for (let n = e - 1; n >= 0; n -= 2) {
                    let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
                    if (e < 0 || e > 9) throw new m();
                    r += e;
               }
               r *= 3;
               for (let n = e - 2; n >= 0; n -= 2) {
                    let e = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
                    if (e < 0 || e > 9) throw new m();
                    r += e;
               }
               return (1e3 - r) % 10;
          }
          static decodeEnd(t, e) {
               return pt.findGuardPattern(t, e, !1, pt.START_END_PATTERN, new Int32Array(pt.START_END_PATTERN.length).fill(0));
          }
     }
     class Tt extends pt {
          constructor() {
               super(), (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]));
          }
          decodeMiddle(t, e, r) {
               let n = this.decodeMiddleCounters;
               (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
               let i = t.getSize(),
                    s = e[1],
                    o = 0;
               for (let e = 0; e < 6 && s < i; e++) {
                    let i = pt.decodeDigit(t, n, s, pt.L_AND_G_PATTERNS);
                    r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
                    for (let t of n) s += t;
                    i >= 10 && (o |= 1 << (5 - e));
               }
               (r = Tt.determineFirstDigit(r, o)), (s = pt.findGuardPattern(t, s, !0, pt.MIDDLE_PATTERN, new Int32Array(pt.MIDDLE_PATTERN.length).fill(0))[1]);
               for (let e = 0; e < 6 && s < i; e++) {
                    let e = pt.decodeDigit(t, n, s, pt.L_PATTERNS);
                    r += String.fromCharCode('0'.charCodeAt(0) + e);
                    for (let t of n) s += t;
               }
               return { rowOffset: s, resultString: r };
          }
          getBarcodeFormat() {
               return x.EAN_13;
          }
          static determineFirstDigit(t, e) {
               for (let r = 0; r < 10; r++) if (e === this.FIRST_DIGIT_ENCODINGS[r]) return (t = String.fromCharCode('0'.charCodeAt(0) + r) + t);
               throw new N();
          }
     }
     Tt.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
     class Rt extends pt {
          constructor() {
               super(), (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]));
          }
          decodeMiddle(t, e, r) {
               const n = this.decodeMiddleCounters;
               (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
               let i = t.getSize(),
                    s = e[1];
               for (let e = 0; e < 4 && s < i; e++) {
                    let e = pt.decodeDigit(t, n, s, pt.L_PATTERNS);
                    r += String.fromCharCode('0'.charCodeAt(0) + e);
                    for (let t of n) s += t;
               }
               s = pt.findGuardPattern(t, s, !0, pt.MIDDLE_PATTERN, new Int32Array(pt.MIDDLE_PATTERN.length).fill(0))[1];
               for (let e = 0; e < 4 && s < i; e++) {
                    let e = pt.decodeDigit(t, n, s, pt.L_PATTERNS);
                    r += String.fromCharCode('0'.charCodeAt(0) + e);
                    for (let t of n) s += t;
               }
               return { rowOffset: s, resultString: r };
          }
          getBarcodeFormat() {
               return x.EAN_8;
          }
     }
     class Nt extends pt {
          constructor() {
               super(...arguments), (this.ean13Reader = new Tt());
          }
          getBarcodeFormat() {
               return x.UPC_A;
          }
          decode(t, e) {
               return this.maybeReturnResult(this.ean13Reader.decode(t));
          }
          decodeRow(t, e, r) {
               return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r));
          }
          decodeMiddle(t, e, r) {
               return this.ean13Reader.decodeMiddle(t, e, r);
          }
          maybeReturnResult(t) {
               let e = t.getText();
               if ('0' === e.charAt(0)) {
                    let r = new v(e.substring(1), null, null, t.getResultPoints(), x.UPC_A);
                    return null != t.getResultMetadata() && r.putAllMetadata(t.getResultMetadata()), r;
               }
               throw new N();
          }
          reset() {
               this.ean13Reader.reset();
          }
     }
     class yt extends pt {
          constructor() {
               super(), (this.decodeMiddleCounters = new Int32Array(4));
          }
          decodeMiddle(t, e, r) {
               const n = this.decodeMiddleCounters.map((t) => t);
               (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
               const i = t.getSize();
               let s = e[1],
                    o = 0;
               for (let e = 0; e < 6 && s < i; e++) {
                    const i = yt.decodeDigit(t, n, s, yt.L_AND_G_PATTERNS);
                    r += String.fromCharCode('0'.charCodeAt(0) + (i % 10));
                    for (let t of n) s += t;
                    i >= 10 && (o |= 1 << (5 - e));
               }
               return yt.determineNumSysAndCheckDigit(new T(r), o), s;
          }
          decodeEnd(t, e) {
               return yt.findGuardPatternWithoutCounters(t, e, !0, yt.MIDDLE_END_PATTERN);
          }
          checkChecksum(t) {
               return pt.checkChecksum(yt.convertUPCEtoUPCA(t));
          }
          static determineNumSysAndCheckDigit(t, e) {
               for (let r = 0; r <= 1; r++)
                    for (let n = 0; n < 10; n++) if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n]) return t.insert(0, '0' + r), void t.append('0' + n);
               throw N.getNotFoundInstance();
          }
          getBarcodeFormat() {
               return x.UPC_E;
          }
          static convertUPCEtoUPCA(t) {
               const e = t
                         .slice(1, 7)
                         .split('')
                         .map((t) => t.charCodeAt(0)),
                    r = new T();
               r.append(t.charAt(0));
               let n = e[5];
               switch (n) {
                    case 0:
                    case 1:
                    case 2:
                         r.appendChars(e, 0, 2), r.append(n), r.append('0000'), r.appendChars(e, 2, 3);
                         break;
                    case 3:
                         r.appendChars(e, 0, 3), r.append('00000'), r.appendChars(e, 3, 2);
                         break;
                    case 4:
                         r.appendChars(e, 0, 4), r.append('00000'), r.append(e[4]);
                         break;
                    default:
                         r.appendChars(e, 0, 5), r.append('0000'), r.append(n);
               }
               return t.length >= 8 && r.append(t.charAt(7)), r.toString();
          }
     }
     (yt.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
          (yt.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
               Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
               Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1]),
          ]);
     class Dt extends ft {
          constructor(t) {
               super();
               let e = null == t ? null : t.get(E.POSSIBLE_FORMATS),
                    r = [];
               null != e &&
                    (e.indexOf(x.EAN_13) > -1 && r.push(new Tt()),
                    e.indexOf(x.UPC_A) > -1 && r.push(new Nt()),
                    e.indexOf(x.EAN_8) > -1 && r.push(new Rt()),
                    e.indexOf(x.UPC_E) > -1 && r.push(new yt())),
                    0 === r.length && (r.push(new Tt()), r.push(new Nt()), r.push(new Rt()), r.push(new yt())),
                    (this.readers = r);
          }
          decodeRow(t, e, r) {
               for (let n of this.readers)
                    try {
                         const i = n.decodeRow(t, e, r),
                              s = i.getBarcodeFormat() === x.EAN_13 && '0' === i.getText().charAt(0),
                              o = null == r ? null : r.get(E.POSSIBLE_FORMATS),
                              a = null == o || o.includes(x.UPC_A);
                         if (s && a) {
                              const t = i.getRawBytes(),
                                   e = new v(i.getText().substring(1), t, t ? t.length : null, i.getResultPoints(), x.UPC_A);
                              return e.putAllMetadata(i.getResultMetadata()), e;
                         }
                         return i;
                    } catch (t) {}
               throw new N();
          }
          reset() {
               for (let t of this.readers) t.reset();
          }
     }
     class Ot extends ft {
          constructor() {
               super(...arguments),
                    (this.CODA_BAR_CHAR_SET = {
                         nnnnnww: '0',
                         nnnnwwn: '1',
                         nnnwnnw: '2',
                         wwnnnnn: '3',
                         nnwnnwn: '4',
                         wnnnnwn: '5',
                         nwnnnnw: '6',
                         nwnnwnn: '7',
                         nwwnnnn: '8',
                         wnnwnnn: '9',
                         nnnwwnn: '-',
                         nnwwnnn: '$',
                         wnnnwnw: ':',
                         wnwnnnw: '/',
                         wnwnwnn: '.',
                         nnwwwww: '+',
                         nnwwnwn: 'A',
                         nwnwnnw: 'B',
                         nnnwnww: 'C',
                         nnnwwwn: 'D',
                    });
          }
          decodeRow(t, e, r) {
               let n = this.getValidRowData(e);
               if (!n) throw new N();
               let i = this.codaBarDecodeRow(n.row);
               if (!i) throw new N();
               return new v(i, null, 0, [new nt(n.left, t), new nt(n.right, t)], x.CODABAR, new Date().getTime());
          }
          getValidRowData(t) {
               let e = t.toArray(),
                    r = e.indexOf(!0);
               if (-1 === r) return null;
               let n = e.lastIndexOf(!0);
               if (n <= r) return null;
               e = e.slice(r, n + 1);
               let i = [],
                    s = e[0],
                    o = 1;
               for (let t = 1; t < e.length; t++) e[t] === s ? o++ : ((s = e[t]), i.push(o), (o = 1));
               return i.push(o), i.length < 23 && (i.length + 1) % 8 != 0 ? null : { row: i, left: r, right: n };
          }
          codaBarDecodeRow(t) {
               const e = [],
                    r = Math.ceil(t.reduce((t, e) => (t + e) / 2, 0));
               for (; t.length > 0; ) {
                    const n = t
                         .splice(0, 8)
                         .splice(0, 7)
                         .map((t) => (t < r ? 'n' : 'w'))
                         .join('');
                    if (void 0 === this.CODA_BAR_CHAR_SET[n]) return null;
                    e.push(this.CODA_BAR_CHAR_SET[n]);
               }
               let n = e.join('');
               return this.validCodaBarString(n) ? n : null;
          }
          validCodaBarString(t) {
               return /^[A-D].{1,}[A-D]$/.test(t);
          }
     }
     class Mt extends ft {
          constructor() {
               super(),
                    (this.decodeFinderCounters = new Int32Array(4)),
                    (this.dataCharacterCounters = new Int32Array(8)),
                    (this.oddRoundingErrors = new Array(4)),
                    (this.evenRoundingErrors = new Array(4)),
                    (this.oddCounts = new Array(this.dataCharacterCounters.length / 2)),
                    (this.evenCounts = new Array(this.dataCharacterCounters.length / 2));
          }
          getDecodeFinderCounters() {
               return this.decodeFinderCounters;
          }
          getDataCharacterCounters() {
               return this.dataCharacterCounters;
          }
          getOddRoundingErrors() {
               return this.oddRoundingErrors;
          }
          getEvenRoundingErrors() {
               return this.evenRoundingErrors;
          }
          getOddCounts() {
               return this.oddCounts;
          }
          getEvenCounts() {
               return this.evenCounts;
          }
          parseFinderValue(t, e) {
               for (let r = 0; r < e.length; r++) if (ft.patternMatchVariance(t, e[r], Mt.MAX_INDIVIDUAL_VARIANCE) < Mt.MAX_AVG_VARIANCE) return r;
               throw new N();
          }
          static count(t) {
               return et.sum(new Int32Array(t));
          }
          static increment(t, e) {
               let r = 0,
                    n = e[0];
               for (let i = 1; i < t.length; i++) e[i] > n && ((n = e[i]), (r = i));
               t[r]++;
          }
          static decrement(t, e) {
               let r = 0,
                    n = e[0];
               for (let i = 1; i < t.length; i++) e[i] < n && ((n = e[i]), (r = i));
               t[r]--;
          }
          static isFinderPattern(t) {
               let e = t[0] + t[1],
                    r = e / (e + t[2] + t[3]);
               if (r >= Mt.MIN_FINDER_PATTERN_RATIO && r <= Mt.MAX_FINDER_PATTERN_RATIO) {
                    let e = Number.MAX_SAFE_INTEGER,
                         r = Number.MIN_SAFE_INTEGER;
                    for (let n of t) n > r && (r = n), n < e && (e = n);
                    return r < 10 * e;
               }
               return !1;
          }
     }
     (Mt.MAX_AVG_VARIANCE = 0.2), (Mt.MAX_INDIVIDUAL_VARIANCE = 0.45), (Mt.MIN_FINDER_PATTERN_RATIO = 9.5 / 12), (Mt.MAX_FINDER_PATTERN_RATIO = 12.5 / 14);
     class bt {
          constructor(t, e) {
               (this.value = t), (this.checksumPortion = e);
          }
          getValue() {
               return this.value;
          }
          getChecksumPortion() {
               return this.checksumPortion;
          }
          toString() {
               return this.value + '(' + this.checksumPortion + ')';
          }
          equals(t) {
               if (!(t instanceof bt)) return !1;
               const e = t;
               return this.value === e.value && this.checksumPortion === e.checksumPortion;
          }
          hashCode() {
               return this.value ^ this.checksumPortion;
          }
     }
     class Bt {
          constructor(t, e, r, n, i) {
               (this.value = t),
                    (this.startEnd = e),
                    (this.value = t),
                    (this.startEnd = e),
                    (this.resultPoints = new Array()),
                    this.resultPoints.push(new nt(r, i)),
                    this.resultPoints.push(new nt(n, i));
          }
          getValue() {
               return this.value;
          }
          getStartEnd() {
               return this.startEnd;
          }
          getResultPoints() {
               return this.resultPoints;
          }
          equals(t) {
               if (!(t instanceof Bt)) return !1;
               const e = t;
               return this.value === e.value;
          }
          hashCode() {
               return this.value;
          }
     }
     class Pt {
          constructor() {}
          static getRSSvalue(t, e, r) {
               let n = 0;
               for (let e of t) n += e;
               let i = 0,
                    s = 0,
                    o = t.length;
               for (let a = 0; a < o - 1; a++) {
                    let h;
                    for (h = 1, s |= 1 << a; h < t[a]; h++, s &= ~(1 << a)) {
                         let t = Pt.combins(n - h - 1, o - a - 2);
                         if ((r && 0 === s && n - h - (o - a - 1) >= o - a - 1 && (t -= Pt.combins(n - h - (o - a), o - a - 2)), o - a - 1 > 1)) {
                              let r = 0;
                              for (let t = n - h - (o - a - 2); t > e; t--) r += Pt.combins(n - h - t - 1, o - a - 3);
                              t -= r * (o - 1 - a);
                         } else n - h > e && t--;
                         i += t;
                    }
                    n -= h;
               }
               return i;
          }
          static combins(t, e) {
               let r, n;
               t - e > e ? ((n = e), (r = t - e)) : ((n = t - e), (r = e));
               let i = 1,
                    s = 1;
               for (let e = t; e > r; e--) (i *= e), s <= n && ((i /= s), s++);
               for (; s <= n; ) (i /= s), s++;
               return i;
          }
     }
     class Lt {
          static buildBitArray(t) {
               let e = 2 * t.length - 1;
               null == t[t.length - 1].getRightChar() && (e -= 1);
               let r = new C(12 * e),
                    n = 0,
                    i = t[0].getRightChar().getValue();
               for (let t = 11; t >= 0; --t) i & (1 << t) && r.set(n), n++;
               for (let e = 1; e < t.length; ++e) {
                    let i = t[e],
                         s = i.getLeftChar().getValue();
                    for (let t = 11; t >= 0; --t) s & (1 << t) && r.set(n), n++;
                    if (null !== i.getRightChar()) {
                         let t = i.getRightChar().getValue();
                         for (let e = 11; e >= 0; --e) t & (1 << e) && r.set(n), n++;
                    }
               }
               return r;
          }
     }
     class Ft {
          constructor(t, e) {
               e ? (this.decodedInformation = null) : ((this.finished = t), (this.decodedInformation = e));
          }
          getDecodedInformation() {
               return this.decodedInformation;
          }
          isFinished() {
               return this.finished;
          }
     }
     class vt {
          constructor(t) {
               this.newPosition = t;
          }
          getNewPosition() {
               return this.newPosition;
          }
     }
     class kt extends vt {
          constructor(t, e) {
               super(t), (this.value = e);
          }
          getValue() {
               return this.value;
          }
          isFNC1() {
               return this.value === kt.FNC1;
          }
     }
     kt.FNC1 = '$';
     class xt extends vt {
          constructor(t, e, r) {
               super(t),
                    r ? ((this.remaining = !0), (this.remainingValue = this.remainingValue)) : ((this.remaining = !1), (this.remainingValue = 0)),
                    (this.newString = e);
          }
          getNewString() {
               return this.newString;
          }
          isRemaining() {
               return this.remaining;
          }
          getRemainingValue() {
               return this.remainingValue;
          }
     }
     class Vt extends vt {
          constructor(t, e, r) {
               if ((super(t), e < 0 || e > 10 || r < 0 || r > 10)) throw new m();
               (this.firstDigit = e), (this.secondDigit = r);
          }
          getFirstDigit() {
               return this.firstDigit;
          }
          getSecondDigit() {
               return this.secondDigit;
          }
          getValue() {
               return 10 * this.firstDigit + this.secondDigit;
          }
          isFirstDigitFNC1() {
               return this.firstDigit === Vt.FNC1;
          }
          isSecondDigitFNC1() {
               return this.secondDigit === Vt.FNC1;
          }
          isAnyFNC1() {
               return this.firstDigit === Vt.FNC1 || this.secondDigit === Vt.FNC1;
          }
     }
     Vt.FNC1 = 10;
     class Ht {
          constructor() {}
          static parseFieldsInGeneralPurpose(t) {
               if (!t) return null;
               if (t.length < 2) throw new N();
               let e = t.substring(0, 2);
               for (let r of Ht.TWO_DIGIT_DATA_LENGTH)
                    if (r[0] === e) return r[1] === Ht.VARIABLE_LENGTH ? Ht.processVariableAI(2, r[2], t) : Ht.processFixedAI(2, r[1], t);
               if (t.length < 3) throw new N();
               let r = t.substring(0, 3);
               for (let e of Ht.THREE_DIGIT_DATA_LENGTH)
                    if (e[0] === r) return e[1] === Ht.VARIABLE_LENGTH ? Ht.processVariableAI(3, e[2], t) : Ht.processFixedAI(3, e[1], t);
               for (let e of Ht.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH)
                    if (e[0] === r) return e[1] === Ht.VARIABLE_LENGTH ? Ht.processVariableAI(4, e[2], t) : Ht.processFixedAI(4, e[1], t);
               if (t.length < 4) throw new N();
               let n = t.substring(0, 4);
               for (let e of Ht.FOUR_DIGIT_DATA_LENGTH)
                    if (e[0] === n) return e[1] === Ht.VARIABLE_LENGTH ? Ht.processVariableAI(4, e[2], t) : Ht.processFixedAI(4, e[1], t);
               throw new N();
          }
          static processFixedAI(t, e, r) {
               if (r.length < t) throw new N();
               let n = r.substring(0, t);
               if (r.length < t + e) throw new N();
               let i = r.substring(t, t + e),
                    s = r.substring(t + e),
                    o = '(' + n + ')' + i,
                    a = Ht.parseFieldsInGeneralPurpose(s);
               return null == a ? o : o + a;
          }
          static processVariableAI(t, e, r) {
               let n,
                    i = r.substring(0, t);
               n = r.length < t + e ? r.length : t + e;
               let s = r.substring(t, n),
                    o = r.substring(n),
                    a = '(' + i + ')' + s,
                    h = Ht.parseFieldsInGeneralPurpose(o);
               return null == h ? a : a + h;
          }
     }
     (Ht.VARIABLE_LENGTH = []),
          (Ht.TWO_DIGIT_DATA_LENGTH = [
               ['00', 18],
               ['01', 14],
               ['02', 14],
               ['10', Ht.VARIABLE_LENGTH, 20],
               ['11', 6],
               ['12', 6],
               ['13', 6],
               ['15', 6],
               ['17', 6],
               ['20', 2],
               ['21', Ht.VARIABLE_LENGTH, 20],
               ['22', Ht.VARIABLE_LENGTH, 29],
               ['30', Ht.VARIABLE_LENGTH, 8],
               ['37', Ht.VARIABLE_LENGTH, 8],
               ['90', Ht.VARIABLE_LENGTH, 30],
               ['91', Ht.VARIABLE_LENGTH, 30],
               ['92', Ht.VARIABLE_LENGTH, 30],
               ['93', Ht.VARIABLE_LENGTH, 30],
               ['94', Ht.VARIABLE_LENGTH, 30],
               ['95', Ht.VARIABLE_LENGTH, 30],
               ['96', Ht.VARIABLE_LENGTH, 30],
               ['97', Ht.VARIABLE_LENGTH, 3],
               ['98', Ht.VARIABLE_LENGTH, 30],
               ['99', Ht.VARIABLE_LENGTH, 30],
          ]),
          (Ht.THREE_DIGIT_DATA_LENGTH = [
               ['240', Ht.VARIABLE_LENGTH, 30],
               ['241', Ht.VARIABLE_LENGTH, 30],
               ['242', Ht.VARIABLE_LENGTH, 6],
               ['250', Ht.VARIABLE_LENGTH, 30],
               ['251', Ht.VARIABLE_LENGTH, 30],
               ['253', Ht.VARIABLE_LENGTH, 17],
               ['254', Ht.VARIABLE_LENGTH, 20],
               ['400', Ht.VARIABLE_LENGTH, 30],
               ['401', Ht.VARIABLE_LENGTH, 30],
               ['402', 17],
               ['403', Ht.VARIABLE_LENGTH, 30],
               ['410', 13],
               ['411', 13],
               ['412', 13],
               ['413', 13],
               ['414', 13],
               ['420', Ht.VARIABLE_LENGTH, 20],
               ['421', Ht.VARIABLE_LENGTH, 15],
               ['422', 3],
               ['423', Ht.VARIABLE_LENGTH, 15],
               ['424', 3],
               ['425', 3],
               ['426', 3],
          ]),
          (Ht.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
               ['310', 6],
               ['311', 6],
               ['312', 6],
               ['313', 6],
               ['314', 6],
               ['315', 6],
               ['316', 6],
               ['320', 6],
               ['321', 6],
               ['322', 6],
               ['323', 6],
               ['324', 6],
               ['325', 6],
               ['326', 6],
               ['327', 6],
               ['328', 6],
               ['329', 6],
               ['330', 6],
               ['331', 6],
               ['332', 6],
               ['333', 6],
               ['334', 6],
               ['335', 6],
               ['336', 6],
               ['340', 6],
               ['341', 6],
               ['342', 6],
               ['343', 6],
               ['344', 6],
               ['345', 6],
               ['346', 6],
               ['347', 6],
               ['348', 6],
               ['349', 6],
               ['350', 6],
               ['351', 6],
               ['352', 6],
               ['353', 6],
               ['354', 6],
               ['355', 6],
               ['356', 6],
               ['357', 6],
               ['360', 6],
               ['361', 6],
               ['362', 6],
               ['363', 6],
               ['364', 6],
               ['365', 6],
               ['366', 6],
               ['367', 6],
               ['368', 6],
               ['369', 6],
               ['390', Ht.VARIABLE_LENGTH, 15],
               ['391', Ht.VARIABLE_LENGTH, 18],
               ['392', Ht.VARIABLE_LENGTH, 15],
               ['393', Ht.VARIABLE_LENGTH, 18],
               ['703', Ht.VARIABLE_LENGTH, 30],
          ]),
          (Ht.FOUR_DIGIT_DATA_LENGTH = [
               ['7001', 13],
               ['7002', Ht.VARIABLE_LENGTH, 30],
               ['7003', 10],
               ['8001', 14],
               ['8002', Ht.VARIABLE_LENGTH, 20],
               ['8003', Ht.VARIABLE_LENGTH, 30],
               ['8004', Ht.VARIABLE_LENGTH, 30],
               ['8005', 6],
               ['8006', 18],
               ['8007', Ht.VARIABLE_LENGTH, 30],
               ['8008', Ht.VARIABLE_LENGTH, 12],
               ['8018', 18],
               ['8020', Ht.VARIABLE_LENGTH, 25],
               ['8100', 6],
               ['8101', 10],
               ['8102', 2],
               ['8110', Ht.VARIABLE_LENGTH, 70],
               ['8200', Ht.VARIABLE_LENGTH, 70],
          ]);
     class Ut {
          constructor(t) {
               (this.buffer = new T()), (this.information = t);
          }
          decodeAllCodes(t, e) {
               let r = e,
                    n = null;
               for (;;) {
                    let e = this.decodeGeneralPurposeField(r, n),
                         i = Ht.parseFieldsInGeneralPurpose(e.getNewString());
                    if ((null != i && t.append(i), (n = e.isRemaining() ? '' + e.getRemainingValue() : null), r === e.getNewPosition())) break;
                    r = e.getNewPosition();
               }
               return t.toString();
          }
          isStillNumeric(t) {
               if (t + 7 > this.information.getSize()) return t + 4 <= this.information.getSize();
               for (let e = t; e < t + 3; ++e) if (this.information.get(e)) return !0;
               return this.information.get(t + 3);
          }
          decodeNumeric(t) {
               if (t + 7 > this.information.getSize()) {
                    let e = this.extractNumericValueFromBitArray(t, 4);
                    return new Vt(this.information.getSize(), 0 === e ? Vt.FNC1 : e - 1, Vt.FNC1);
               }
               let e = this.extractNumericValueFromBitArray(t, 7);
               return new Vt(t + 7, (e - 8) / 11, (e - 8) % 11);
          }
          extractNumericValueFromBitArray(t, e) {
               return Ut.extractNumericValueFromBitArray(this.information, t, e);
          }
          static extractNumericValueFromBitArray(t, e, r) {
               let n = 0;
               for (let i = 0; i < r; ++i) t.get(e + i) && (n |= 1 << (r - i - 1));
               return n;
          }
          decodeGeneralPurposeField(t, e) {
               this.buffer.setLengthToZero(), null != e && this.buffer.append(e), this.current.setPosition(t);
               let r = this.parseBlocks();
               return null != r && r.isRemaining()
                    ? new xt(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue())
                    : new xt(this.current.getPosition(), this.buffer.toString());
          }
          parseBlocks() {
               let t, e;
               do {
                    let r = this.current.getPosition();
                    if (
                         (this.current.isAlpha()
                              ? ((e = this.parseAlphaBlock()), (t = e.isFinished()))
                              : this.current.isIsoIec646()
                              ? ((e = this.parseIsoIec646Block()), (t = e.isFinished()))
                              : ((e = this.parseNumericBlock()), (t = e.isFinished())),
                         !(r !== this.current.getPosition()) && !t)
                    )
                         break;
               } while (!t);
               return e.getDecodedInformation();
          }
          parseNumericBlock() {
               for (; this.isStillNumeric(this.current.getPosition()); ) {
                    let t = this.decodeNumeric(this.current.getPosition());
                    if ((this.current.setPosition(t.getNewPosition()), t.isFirstDigitFNC1())) {
                         let e;
                         return (
                              (e = t.isSecondDigitFNC1()
                                   ? new xt(this.current.getPosition(), this.buffer.toString())
                                   : new xt(this.current.getPosition(), this.buffer.toString(), t.getSecondDigit())),
                              new Ft(!0, e)
                         );
                    }
                    if ((this.buffer.append(t.getFirstDigit()), t.isSecondDigitFNC1())) {
                         let t = new xt(this.current.getPosition(), this.buffer.toString());
                         return new Ft(!0, t);
                    }
                    this.buffer.append(t.getSecondDigit());
               }
               return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Ft(!1);
          }
          parseIsoIec646Block() {
               for (; this.isStillIsoIec646(this.current.getPosition()); ) {
                    let t = this.decodeIsoIec646(this.current.getPosition());
                    if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
                         let t = new xt(this.current.getPosition(), this.buffer.toString());
                         return new Ft(!0, t);
                    }
                    this.buffer.append(t.getValue());
               }
               return (
                    this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                         ? (this.current.incrementPosition(3), this.current.setNumeric())
                         : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
                           (this.current.getPosition() + 5 < this.information.getSize()
                                ? this.current.incrementPosition(5)
                                : this.current.setPosition(this.information.getSize()),
                           this.current.setAlpha()),
                    new Ft(!1)
               );
          }
          parseAlphaBlock() {
               for (; this.isStillAlpha(this.current.getPosition()); ) {
                    let t = this.decodeAlphanumeric(this.current.getPosition());
                    if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
                         let t = new xt(this.current.getPosition(), this.buffer.toString());
                         return new Ft(!0, t);
                    }
                    this.buffer.append(t.getValue());
               }
               return (
                    this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                         ? (this.current.incrementPosition(3), this.current.setNumeric())
                         : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
                           (this.current.getPosition() + 5 < this.information.getSize()
                                ? this.current.incrementPosition(5)
                                : this.current.setPosition(this.information.getSize()),
                           this.current.setIsoIec646()),
                    new Ft(!1)
               );
          }
          isStillIsoIec646(t) {
               if (t + 5 > this.information.getSize()) return !1;
               let e = this.extractNumericValueFromBitArray(t, 5);
               if (e >= 5 && e < 16) return !0;
               if (t + 7 > this.information.getSize()) return !1;
               let r = this.extractNumericValueFromBitArray(t, 7);
               if (r >= 64 && r < 116) return !0;
               if (t + 8 > this.information.getSize()) return !1;
               let n = this.extractNumericValueFromBitArray(t, 8);
               return n >= 232 && n < 253;
          }
          decodeIsoIec646(t) {
               let e = this.extractNumericValueFromBitArray(t, 5);
               if (15 === e) return new kt(t + 5, kt.FNC1);
               if (e >= 5 && e < 15) return new kt(t + 5, '0' + (e - 5));
               let r,
                    n = this.extractNumericValueFromBitArray(t, 7);
               if (n >= 64 && n < 90) return new kt(t + 7, '' + (n + 1));
               if (n >= 90 && n < 116) return new kt(t + 7, '' + (n + 7));
               switch (this.extractNumericValueFromBitArray(t, 8)) {
                    case 232:
                         r = '!';
                         break;
                    case 233:
                         r = '"';
                         break;
                    case 234:
                         r = '%';
                         break;
                    case 235:
                         r = '&';
                         break;
                    case 236:
                         r = "'";
                         break;
                    case 237:
                         r = '(';
                         break;
                    case 238:
                         r = ')';
                         break;
                    case 239:
                         r = '*';
                         break;
                    case 240:
                         r = '+';
                         break;
                    case 241:
                         r = ',';
                         break;
                    case 242:
                         r = '-';
                         break;
                    case 243:
                         r = '.';
                         break;
                    case 244:
                         r = '/';
                         break;
                    case 245:
                         r = ':';
                         break;
                    case 246:
                         r = ';';
                         break;
                    case 247:
                         r = '<';
                         break;
                    case 248:
                         r = '=';
                         break;
                    case 249:
                         r = '>';
                         break;
                    case 250:
                         r = '?';
                         break;
                    case 251:
                         r = '_';
                         break;
                    case 252:
                         r = ' ';
                         break;
                    default:
                         throw new m();
               }
               return new kt(t + 8, r);
          }
          isStillAlpha(t) {
               if (t + 5 > this.information.getSize()) return !1;
               let e = this.extractNumericValueFromBitArray(t, 5);
               if (e >= 5 && e < 16) return !0;
               if (t + 6 > this.information.getSize()) return !1;
               let r = this.extractNumericValueFromBitArray(t, 6);
               return r >= 16 && r < 63;
          }
          decodeAlphanumeric(t) {
               let e = this.extractNumericValueFromBitArray(t, 5);
               if (15 === e) return new kt(t + 5, kt.FNC1);
               if (e >= 5 && e < 15) return new kt(t + 5, '0' + (e - 5));
               let r,
                    n = this.extractNumericValueFromBitArray(t, 6);
               if (n >= 32 && n < 58) return new kt(t + 6, '' + (n + 33));
               switch (n) {
                    case 58:
                         r = '*';
                         break;
                    case 59:
                         r = ',';
                         break;
                    case 60:
                         r = '-';
                         break;
                    case 61:
                         r = '.';
                         break;
                    case 62:
                         r = '/';
                         break;
                    default:
                         throw new J('Decoding invalid alphanumeric value: ' + n);
               }
               return new kt(t + 6, r);
          }
          isAlphaTo646ToAlphaLatch(t) {
               if (t + 1 > this.information.getSize()) return !1;
               for (let e = 0; e < 5 && e + t < this.information.getSize(); ++e)
                    if (2 === e) {
                         if (!this.information.get(t + 2)) return !1;
                    } else if (this.information.get(t + e)) return !1;
               return !0;
          }
          isAlphaOr646ToNumericLatch(t) {
               if (t + 3 > this.information.getSize()) return !1;
               for (let e = t; e < t + 3; ++e) if (this.information.get(e)) return !1;
               return !0;
          }
          isNumericToAlphaNumericLatch(t) {
               if (t + 1 > this.information.getSize()) return !1;
               for (let e = 0; e < 4 && e + t < this.information.getSize(); ++e) if (this.information.get(t + e)) return !1;
               return !0;
          }
     }
     class Xt {
          constructor(t) {
               (this.information = t), (this.generalDecoder = new Ut(t));
          }
          getInformation() {
               return this.information;
          }
          getGeneralDecoder() {
               return this.generalDecoder;
          }
     }
     class Gt extends Xt {
          constructor(t) {
               super(t);
          }
          encodeCompressedGtin(t, e) {
               t.append('(01)');
               let r = t.length();
               t.append('9'), this.encodeCompressedGtinWithoutAI(t, e, r);
          }
          encodeCompressedGtinWithoutAI(t, e, r) {
               for (let r = 0; r < 4; ++r) {
                    let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e + 10 * r, 10);
                    n / 100 == 0 && t.append('0'), n / 10 == 0 && t.append('0'), t.append(n);
               }
               Gt.appendCheckDigit(t, r);
          }
          static appendCheckDigit(t, e) {
               let r = 0;
               for (let n = 0; n < 13; n++) {
                    let i = t.charAt(n + e).charCodeAt(0) - '0'.charCodeAt(0);
                    r += 1 & n ? i : 3 * i;
               }
               (r = 10 - (r % 10)), 10 === r && (r = 0), t.append(r);
          }
     }
     Gt.GTIN_SIZE = 40;
     class Wt extends Gt {
          constructor(t) {
               super(t);
          }
          parseInformation() {
               let t = new T();
               t.append('(01)');
               let e = t.length(),
                    r = this.getGeneralDecoder().extractNumericValueFromBitArray(Wt.HEADER_SIZE, 4);
               return (
                    t.append(r), this.encodeCompressedGtinWithoutAI(t, Wt.HEADER_SIZE + 4, e), this.getGeneralDecoder().decodeAllCodes(t, Wt.HEADER_SIZE + 44)
               );
          }
     }
     Wt.HEADER_SIZE = 4;
     class zt extends Xt {
          constructor(t) {
               super(t);
          }
          parseInformation() {
               let t = new T();
               return this.getGeneralDecoder().decodeAllCodes(t, zt.HEADER_SIZE);
          }
     }
     zt.HEADER_SIZE = 5;
     class Yt extends Gt {
          constructor(t) {
               super(t);
          }
          encodeCompressedWeight(t, e, r) {
               let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
               this.addWeightCode(t, n);
               let i = this.checkWeight(n),
                    s = 1e5;
               for (let e = 0; e < 5; ++e) i / s == 0 && t.append('0'), (s /= 10);
               t.append(i);
          }
     }
     class Zt extends Yt {
          constructor(t) {
               super(t);
          }
          parseInformation() {
               if (this.getInformation().getSize() !== Zt.HEADER_SIZE + Yt.GTIN_SIZE + Zt.WEIGHT_SIZE) throw new N();
               let t = new T();
               return this.encodeCompressedGtin(t, Zt.HEADER_SIZE), this.encodeCompressedWeight(t, Zt.HEADER_SIZE + Yt.GTIN_SIZE, Zt.WEIGHT_SIZE), t.toString();
          }
     }
     (Zt.HEADER_SIZE = 5), (Zt.WEIGHT_SIZE = 15);
     class Kt extends Zt {
          constructor(t) {
               super(t);
          }
          addWeightCode(t, e) {
               t.append('(3103)');
          }
          checkWeight(t) {
               return t;
          }
     }
     class qt extends Zt {
          constructor(t) {
               super(t);
          }
          addWeightCode(t, e) {
               e < 1e4 ? t.append('(3202)') : t.append('(3203)');
          }
          checkWeight(t) {
               return t < 1e4 ? t : t - 1e4;
          }
     }
     class Qt extends Gt {
          constructor(t) {
               super(t);
          }
          parseInformation() {
               if (this.getInformation().getSize() < Qt.HEADER_SIZE + Gt.GTIN_SIZE) throw new N();
               let t = new T();
               this.encodeCompressedGtin(t, Qt.HEADER_SIZE);
               let e = this.getGeneralDecoder().extractNumericValueFromBitArray(Qt.HEADER_SIZE + Gt.GTIN_SIZE, Qt.LAST_DIGIT_SIZE);
               t.append('(392'), t.append(e), t.append(')');
               let r = this.getGeneralDecoder().decodeGeneralPurposeField(Qt.HEADER_SIZE + Gt.GTIN_SIZE + Qt.LAST_DIGIT_SIZE, null);
               return t.append(r.getNewString()), t.toString();
          }
     }
     (Qt.HEADER_SIZE = 8), (Qt.LAST_DIGIT_SIZE = 2);
     class jt extends Gt {
          constructor(t) {
               super(t);
          }
          parseInformation() {
               if (this.getInformation().getSize() < jt.HEADER_SIZE + Gt.GTIN_SIZE) throw new N();
               let t = new T();
               this.encodeCompressedGtin(t, jt.HEADER_SIZE);
               let e = this.getGeneralDecoder().extractNumericValueFromBitArray(jt.HEADER_SIZE + Gt.GTIN_SIZE, jt.LAST_DIGIT_SIZE);
               t.append('(393'), t.append(e), t.append(')');
               let r = this.getGeneralDecoder().extractNumericValueFromBitArray(jt.HEADER_SIZE + Gt.GTIN_SIZE + jt.LAST_DIGIT_SIZE, jt.FIRST_THREE_DIGITS_SIZE);
               r / 100 == 0 && t.append('0'), r / 10 == 0 && t.append('0'), t.append(r);
               let n = this.getGeneralDecoder().decodeGeneralPurposeField(
                    jt.HEADER_SIZE + Gt.GTIN_SIZE + jt.LAST_DIGIT_SIZE + jt.FIRST_THREE_DIGITS_SIZE,
                    null
               );
               return t.append(n.getNewString()), t.toString();
          }
     }
     (jt.HEADER_SIZE = 8), (jt.LAST_DIGIT_SIZE = 2), (jt.FIRST_THREE_DIGITS_SIZE = 10);
     class Jt extends Yt {
          constructor(t, e, r) {
               super(t), (this.dateCode = r), (this.firstAIdigits = e);
          }
          parseInformation() {
               if (this.getInformation().getSize() !== Jt.HEADER_SIZE + Jt.GTIN_SIZE + Jt.WEIGHT_SIZE + Jt.DATE_SIZE) throw new N();
               let t = new T();
               return (
                    this.encodeCompressedGtin(t, Jt.HEADER_SIZE),
                    this.encodeCompressedWeight(t, Jt.HEADER_SIZE + Jt.GTIN_SIZE, Jt.WEIGHT_SIZE),
                    this.encodeCompressedDate(t, Jt.HEADER_SIZE + Jt.GTIN_SIZE + Jt.WEIGHT_SIZE),
                    t.toString()
               );
          }
          encodeCompressedDate(t, e) {
               let r = this.getGeneralDecoder().extractNumericValueFromBitArray(e, Jt.DATE_SIZE);
               if (38400 === r) return;
               t.append('('), t.append(this.dateCode), t.append(')');
               let n = r % 32;
               r /= 32;
               let i = (r % 12) + 1;
               r /= 12;
               let s = r;
               s / 10 == 0 && t.append('0'), t.append(s), i / 10 == 0 && t.append('0'), t.append(i), n / 10 == 0 && t.append('0'), t.append(n);
          }
          addWeightCode(t, e) {
               t.append('('), t.append(this.firstAIdigits), t.append(e / 1e5), t.append(')');
          }
          checkWeight(t) {
               return t % 1e5;
          }
     }
     function $t(t) {
          try {
               if (t.get(1)) return new Wt(t);
               if (!t.get(2)) return new zt(t);
               switch (Ut.extractNumericValueFromBitArray(t, 1, 4)) {
                    case 4:
                         return new Kt(t);
                    case 5:
                         return new qt(t);
               }
               switch (Ut.extractNumericValueFromBitArray(t, 1, 5)) {
                    case 12:
                         return new Qt(t);
                    case 13:
                         return new jt(t);
               }
               switch (Ut.extractNumericValueFromBitArray(t, 1, 7)) {
                    case 56:
                         return new Jt(t, '310', '11');
                    case 57:
                         return new Jt(t, '320', '11');
                    case 58:
                         return new Jt(t, '310', '13');
                    case 59:
                         return new Jt(t, '320', '13');
                    case 60:
                         return new Jt(t, '310', '15');
                    case 61:
                         return new Jt(t, '320', '15');
                    case 62:
                         return new Jt(t, '310', '17');
                    case 63:
                         return new Jt(t, '320', '17');
               }
          } catch (e) {
               throw (console.log(e), new J('unknown decoder: ' + t));
          }
     }
     (Jt.HEADER_SIZE = 8), (Jt.WEIGHT_SIZE = 20), (Jt.DATE_SIZE = 16);
     class te {
          constructor(t, e, r, n) {
               (this.leftchar = t), (this.rightchar = e), (this.finderpattern = r), (this.maybeLast = n);
          }
          mayBeLast() {
               return this.maybeLast;
          }
          getLeftChar() {
               return this.leftchar;
          }
          getRightChar() {
               return this.rightchar;
          }
          getFinderPattern() {
               return this.finderpattern;
          }
          mustBeLast() {
               return null == this.rightchar;
          }
          toString() {
               return '[ ' + this.leftchar + ', ' + this.rightchar + ' : ' + (null == this.finderpattern ? 'null' : this.finderpattern.getValue()) + ' ]';
          }
          static equals(t, e) {
               return (
                    t instanceof te &&
                    te.equalsOrNull(t.leftchar, e.leftchar) &&
                    te.equalsOrNull(t.rightchar, e.rightchar) &&
                    te.equalsOrNull(t.finderpattern, e.finderpattern)
               );
          }
          static equalsOrNull(t, e) {
               return null === t ? null === e : te.equals(t, e);
          }
          hashCode() {
               return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
          }
     }
     class ee {
          constructor(t, e, r) {
               (this.pairs = t), (this.rowNumber = e), (this.wasReversed = r);
          }
          getPairs() {
               return this.pairs;
          }
          getRowNumber() {
               return this.rowNumber;
          }
          isReversed() {
               return this.wasReversed;
          }
          isEquivalent(t) {
               return this.checkEqualitity(this, t);
          }
          toString() {
               return '{ ' + this.pairs + ' }';
          }
          equals(t, e) {
               return t instanceof ee && this.checkEqualitity(t, e) && t.wasReversed === e.wasReversed;
          }
          checkEqualitity(t, e) {
               if (!t || !e) return;
               let r;
               return (
                    t.forEach((t, n) => {
                         e.forEach((e) => {
                              t.getLeftChar().getValue() === e.getLeftChar().getValue() &&
                                   t.getRightChar().getValue() === e.getRightChar().getValue() &&
                                   t.getFinderPatter().getValue() === e.getFinderPatter().getValue() &&
                                   (r = !0);
                         });
                    }),
                    r
               );
          }
     }
     class re extends Mt {
          constructor() {
               super(...arguments), (this.pairs = new Array(re.MAX_PAIRS)), (this.rows = new Array()), (this.startEnd = [2]);
          }
          decodeRow(t, e, r) {
               (this.pairs.length = 0), (this.startFromEven = !1);
               try {
                    return re.constructResult(this.decodeRow2pairs(t, e));
               } catch (t) {}
               return (this.pairs.length = 0), (this.startFromEven = !0), re.constructResult(this.decodeRow2pairs(t, e));
          }
          reset() {
               (this.pairs.length = 0), (this.rows.length = 0);
          }
          decodeRow2pairs(t, e) {
               let r,
                    n = !1;
               for (; !n; )
                    try {
                         this.pairs.push(this.retrieveNextPair(e, this.pairs, t));
                    } catch (t) {
                         if (t instanceof N) {
                              if (!this.pairs.length) throw new N();
                              n = !0;
                         }
                    }
               if (this.checkChecksum()) return this.pairs;
               if (((r = !!this.rows.length), this.storeRow(t, !1), r)) {
                    let t = this.checkRowsBoolean(!1);
                    if (null != t) return t;
                    if (((t = this.checkRowsBoolean(!0)), null != t)) return t;
               }
               throw new N();
          }
          checkRowsBoolean(t) {
               if (this.rows.length > 25) return (this.rows.length = 0), null;
               (this.pairs.length = 0), t && (this.rows = this.rows.reverse());
               let e = null;
               try {
                    e = this.checkRows(new Array(), 0);
               } catch (t) {
                    console.log(t);
               }
               return t && (this.rows = this.rows.reverse()), e;
          }
          checkRows(t, e) {
               for (let r = e; r < this.rows.length; r++) {
                    let e = this.rows[r];
                    this.pairs.length = 0;
                    for (let e of t) this.pairs.push(e.getPairs());
                    if ((this.pairs.push(e.getPairs()), !re.isValidSequence(this.pairs))) continue;
                    if (this.checkChecksum()) return this.pairs;
                    let n = new Array(t);
                    n.push(e);
                    try {
                         return this.checkRows(n, r + 1);
                    } catch (t) {
                         console.log(t);
                    }
               }
               throw new N();
          }
          static isValidSequence(t) {
               for (let e of re.FINDER_PATTERN_SEQUENCES) {
                    if (t.length > e.length) continue;
                    let r = !0;
                    for (let n = 0; n < t.length; n++)
                         if (t[n].getFinderPattern().getValue() !== e[n]) {
                              r = !1;
                              break;
                         }
                    if (r) return !0;
               }
               return !1;
          }
          storeRow(t, e) {
               let r = 0,
                    n = !1,
                    i = !1;
               for (; r < this.rows.length; ) {
                    let e = this.rows[r];
                    if (e.getRowNumber() > t) {
                         i = e.isEquivalent(this.pairs);
                         break;
                    }
                    (n = e.isEquivalent(this.pairs)), r++;
               }
               i || n || re.isPartialRow(this.pairs, this.rows) || (this.rows.push(r, new ee(this.pairs, t, e)), this.removePartialRows(this.pairs, this.rows));
          }
          removePartialRows(t, e) {
               for (let r of e) if (r.getPairs().length !== t.length) for (let e of r.getPairs()) for (let r of t) if (te.equals(e, r)) break;
          }
          static isPartialRow(t, e) {
               for (let r of e) {
                    let e = !0;
                    for (let n of t) {
                         let t = !1;
                         for (let e of r.getPairs())
                              if (n.equals(e)) {
                                   t = !0;
                                   break;
                              }
                         if (!t) {
                              e = !1;
                              break;
                         }
                    }
                    if (e) return !0;
               }
               return !1;
          }
          getRows() {
               return this.rows;
          }
          static constructResult(t) {
               let e = $t(Lt.buildBitArray(t)).parseInformation(),
                    r = t[0].getFinderPattern().getResultPoints(),
                    n = t[t.length - 1].getFinderPattern().getResultPoints(),
                    i = [r[0], r[1], n[0], n[1]];
               return new v(e, null, null, i, x.RSS_EXPANDED, null);
          }
          checkChecksum() {
               let t = this.pairs.get(0),
                    e = t.getLeftChar(),
                    r = t.getRightChar();
               if (null === r) return !1;
               let n = r.getChecksumPortion(),
                    i = 2;
               for (let t = 1; t < this.pairs.size(); ++t) {
                    let e = this.pairs.get(t);
                    (n += e.getLeftChar().getChecksumPortion()), i++;
                    let r = e.getRightChar();
                    null != r && ((n += r.getChecksumPortion()), i++);
               }
               return (n %= 211), 211 * (i - 4) + n === e.getValue();
          }
          static getNextSecondBar(t, e) {
               let r;
               return t.get(e) ? ((r = t.getNextUnset(e)), (r = t.getNextSet(r))) : ((r = t.getNextSet(e)), (r = t.getNextUnset(r))), r;
          }
          retrieveNextPair(t, e, r) {
               let n,
                    i = e.length % 2 == 0;
               this.startFromEven && (i = !i);
               let s = !0,
                    o = -1;
               do {
                    this.findNextPair(t, e, o),
                         (n = this.parseFoundFinderPattern(t, r, i)),
                         null === n ? (o = re.getNextSecondBar(t, this.startEnd[0])) : (s = !1);
               } while (s);
               let a,
                    h = this.decodeDataCharacter(t, n, i, !0);
               if (!this.isEmptyPair(e) && e[e.length - 1].mustBeLast()) throw new N();
               try {
                    a = this.decodeDataCharacter(t, n, i, !1);
               } catch (t) {
                    (a = null), console.log(t);
               }
               return new te(h, a, n, !0);
          }
          isEmptyPair(t) {
               return 0 === t.length;
          }
          findNextPair(t, e, r) {
               let n = this.getDecodeFinderCounters();
               (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
               let i,
                    s = t.getSize();
               if (r >= 0) i = r;
               else if (this.isEmptyPair(e)) i = 0;
               else {
                    i = e[e.length - 1].getFinderPattern().getStartEnd()[1];
               }
               let o = e.length % 2 != 0;
               this.startFromEven && (o = !o);
               let a = !1;
               for (; i < s && ((a = !t.get(i)), a); ) i++;
               let h = 0,
                    l = i;
               for (let e = i; e < s; e++)
                    if (t.get(e) !== a) n[h]++;
                    else {
                         if (3 === h) {
                              if ((o && re.reverseCounters(n), re.isFinderPattern(n))) return (this.startEnd[0] = l), void (this.startEnd[1] = e);
                              o && re.reverseCounters(n), (l += n[0] + n[1]), (n[0] = n[2]), (n[1] = n[3]), (n[2] = 0), (n[3] = 0), h--;
                         } else h++;
                         (n[h] = 1), (a = !a);
                    }
               throw new N();
          }
          static reverseCounters(t) {
               let e = t.length;
               for (let r = 0; r < e / 2; ++r) {
                    let n = t[r];
                    (t[r] = t[e - r - 1]), (t[e - r - 1] = n);
               }
          }
          parseFoundFinderPattern(t, e, r) {
               let n, i, s;
               if (r) {
                    let e = this.startEnd[0] - 1;
                    for (; e >= 0 && !t.get(e); ) e--;
                    e++, (n = this.startEnd[0] - e), (i = e), (s = this.startEnd[1]);
               } else (i = this.startEnd[0]), (s = t.getNextUnset(this.startEnd[1] + 1)), (n = s - this.startEnd[1]);
               let o,
                    a = this.getDecodeFinderCounters();
               d.arraycopy(a, 0, a, 1, a.length - 1), (a[0] = n);
               try {
                    o = this.parseFinderValue(a, re.FINDER_PATTERNS);
               } catch (t) {
                    return null;
               }
               return new Bt(o, [i, s], i, s, e);
          }
          decodeDataCharacter(t, e, r, n) {
               let i = this.getDataCharacterCounters();
               for (let t = 0; t < i.length; t++) i[t] = 0;
               if (n) re.recordPatternInReverse(t, e.getStartEnd()[0], i);
               else {
                    re.recordPattern(t, e.getStartEnd()[1], i);
                    for (let t = 0, e = i.length - 1; t < e; t++, e--) {
                         let r = i[t];
                         (i[t] = i[e]), (i[e] = r);
                    }
               }
               let s = et.sum(new Int32Array(i)) / 17,
                    o = (e.getStartEnd()[1] - e.getStartEnd()[0]) / 15;
               if (Math.abs(s - o) / o > 0.3) throw new N();
               let a = this.getOddCounts(),
                    h = this.getEvenCounts(),
                    l = this.getOddRoundingErrors(),
                    c = this.getEvenRoundingErrors();
               for (let t = 0; t < i.length; t++) {
                    let e = (1 * i[t]) / s,
                         r = e + 0.5;
                    if (r < 1) {
                         if (e < 0.3) throw new N();
                         r = 1;
                    } else if (r > 8) {
                         if (e > 8.7) throw new N();
                         r = 8;
                    }
                    let n = t / 2;
                    1 & t ? ((h[n] = r), (c[n] = e - r)) : ((a[n] = r), (l[n] = e - r));
               }
               this.adjustOddEvenCounts(17);
               let d = 4 * e.getValue() + (r ? 0 : 2) + (n ? 0 : 1) - 1,
                    u = 0,
                    g = 0;
               for (let t = a.length - 1; t >= 0; t--) {
                    if (re.isNotA1left(e, r, n)) {
                         let e = re.WEIGHTS[d][2 * t];
                         g += a[t] * e;
                    }
                    u += a[t];
               }
               let f = 0;
               for (let t = h.length - 1; t >= 0; t--)
                    if (re.isNotA1left(e, r, n)) {
                         let e = re.WEIGHTS[d][2 * t + 1];
                         f += h[t] * e;
                    }
               let w = g + f;
               if (1 & u || u > 13 || u < 4) throw new N();
               let C = (13 - u) / 2,
                    A = re.SYMBOL_WIDEST[C],
                    E = 9 - A,
                    m = Pt.getRSSvalue(a, A, !0),
                    I = Pt.getRSSvalue(h, E, !1),
                    _ = re.EVEN_TOTAL_SUBSET[C],
                    S = re.GSUM[C];
               return new bt(m * _ + I + S, w);
          }
          static isNotA1left(t, e, r) {
               return !(0 === t.getValue() && e && r);
          }
          adjustOddEvenCounts(t) {
               let e = et.sum(new Int32Array(this.getOddCounts())),
                    r = et.sum(new Int32Array(this.getEvenCounts())),
                    n = !1,
                    i = !1;
               e > 13 ? (i = !0) : e < 4 && (n = !0);
               let s = !1,
                    o = !1;
               r > 13 ? (o = !0) : r < 4 && (s = !0);
               let a = e + r - t,
                    h = !(1 & ~e),
                    l = !(1 & r);
               if (1 === a)
                    if (h) {
                         if (l) throw new N();
                         i = !0;
                    } else {
                         if (!l) throw new N();
                         o = !0;
                    }
               else if (-1 === a)
                    if (h) {
                         if (l) throw new N();
                         n = !0;
                    } else {
                         if (!l) throw new N();
                         s = !0;
                    }
               else {
                    if (0 !== a) throw new N();
                    if (h) {
                         if (!l) throw new N();
                         e < r ? ((n = !0), (o = !0)) : ((i = !0), (s = !0));
                    } else if (l) throw new N();
               }
               if (n) {
                    if (i) throw new N();
                    re.increment(this.getOddCounts(), this.getOddRoundingErrors());
               }
               if ((i && re.decrement(this.getOddCounts(), this.getOddRoundingErrors()), s)) {
                    if (o) throw new N();
                    re.increment(this.getEvenCounts(), this.getOddRoundingErrors());
               }
               o && re.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
          }
     }
     (re.SYMBOL_WIDEST = [7, 5, 4, 3, 1]),
          (re.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204]),
          (re.GSUM = [0, 348, 1388, 2948, 3988]),
          (re.FINDER_PATTERNS = [
               Int32Array.from([1, 8, 4, 1]),
               Int32Array.from([3, 6, 4, 1]),
               Int32Array.from([3, 4, 6, 1]),
               Int32Array.from([3, 2, 8, 1]),
               Int32Array.from([2, 6, 5, 1]),
               Int32Array.from([2, 2, 9, 1]),
          ]),
          (re.WEIGHTS = [
               [1, 3, 9, 27, 81, 32, 96, 77],
               [20, 60, 180, 118, 143, 7, 21, 63],
               [189, 145, 13, 39, 117, 140, 209, 205],
               [193, 157, 49, 147, 19, 57, 171, 91],
               [62, 186, 136, 197, 169, 85, 44, 132],
               [185, 133, 188, 142, 4, 12, 36, 108],
               [113, 128, 173, 97, 80, 29, 87, 50],
               [150, 28, 84, 41, 123, 158, 52, 156],
               [46, 138, 203, 187, 139, 206, 196, 166],
               [76, 17, 51, 153, 37, 111, 122, 155],
               [43, 129, 176, 106, 107, 110, 119, 146],
               [16, 48, 144, 10, 30, 90, 59, 177],
               [109, 116, 137, 200, 178, 112, 125, 164],
               [70, 210, 208, 202, 184, 130, 179, 115],
               [134, 191, 151, 31, 93, 68, 204, 190],
               [148, 22, 66, 198, 172, 94, 71, 2],
               [6, 18, 54, 162, 64, 192, 154, 40],
               [120, 149, 25, 75, 14, 42, 126, 167],
               [79, 26, 78, 23, 69, 207, 199, 175],
               [103, 98, 83, 38, 114, 131, 182, 124],
               [161, 61, 183, 127, 170, 88, 53, 159],
               [55, 165, 73, 8, 24, 72, 5, 15],
               [45, 135, 194, 160, 58, 174, 100, 89],
          ]),
          (re.FINDER_PAT_A = 0),
          (re.FINDER_PAT_B = 1),
          (re.FINDER_PAT_C = 2),
          (re.FINDER_PAT_D = 3),
          (re.FINDER_PAT_E = 4),
          (re.FINDER_PAT_F = 5),
          (re.FINDER_PATTERN_SEQUENCES = [
               [re.FINDER_PAT_A, re.FINDER_PAT_A],
               [re.FINDER_PAT_A, re.FINDER_PAT_B, re.FINDER_PAT_B],
               [re.FINDER_PAT_A, re.FINDER_PAT_C, re.FINDER_PAT_B, re.FINDER_PAT_D],
               [re.FINDER_PAT_A, re.FINDER_PAT_E, re.FINDER_PAT_B, re.FINDER_PAT_D, re.FINDER_PAT_C],
               [re.FINDER_PAT_A, re.FINDER_PAT_E, re.FINDER_PAT_B, re.FINDER_PAT_D, re.FINDER_PAT_D, re.FINDER_PAT_F],
               [re.FINDER_PAT_A, re.FINDER_PAT_E, re.FINDER_PAT_B, re.FINDER_PAT_D, re.FINDER_PAT_E, re.FINDER_PAT_F, re.FINDER_PAT_F],
               [re.FINDER_PAT_A, re.FINDER_PAT_A, re.FINDER_PAT_B, re.FINDER_PAT_B, re.FINDER_PAT_C, re.FINDER_PAT_C, re.FINDER_PAT_D, re.FINDER_PAT_D],
               [
                    re.FINDER_PAT_A,
                    re.FINDER_PAT_A,
                    re.FINDER_PAT_B,
                    re.FINDER_PAT_B,
                    re.FINDER_PAT_C,
                    re.FINDER_PAT_C,
                    re.FINDER_PAT_D,
                    re.FINDER_PAT_E,
                    re.FINDER_PAT_E,
               ],
               [
                    re.FINDER_PAT_A,
                    re.FINDER_PAT_A,
                    re.FINDER_PAT_B,
                    re.FINDER_PAT_B,
                    re.FINDER_PAT_C,
                    re.FINDER_PAT_C,
                    re.FINDER_PAT_D,
                    re.FINDER_PAT_E,
                    re.FINDER_PAT_F,
                    re.FINDER_PAT_F,
               ],
               [
                    re.FINDER_PAT_A,
                    re.FINDER_PAT_A,
                    re.FINDER_PAT_B,
                    re.FINDER_PAT_B,
                    re.FINDER_PAT_C,
                    re.FINDER_PAT_D,
                    re.FINDER_PAT_D,
                    re.FINDER_PAT_E,
                    re.FINDER_PAT_E,
                    re.FINDER_PAT_F,
                    re.FINDER_PAT_F,
               ],
          ]),
          (re.MAX_PAIRS = 11);
     class ne extends bt {
          constructor(t, e, r) {
               super(t, e), (this.count = 0), (this.finderPattern = r);
          }
          getFinderPattern() {
               return this.finderPattern;
          }
          getCount() {
               return this.count;
          }
          incrementCount() {
               this.count++;
          }
     }
     class ie extends Mt {
          constructor() {
               super(...arguments), (this.possibleLeftPairs = []), (this.possibleRightPairs = []);
          }
          decodeRow(t, e, r) {
               const n = this.decodePair(e, !1, t, r);
               ie.addOrTally(this.possibleLeftPairs, n), e.reverse();
               let i = this.decodePair(e, !0, t, r);
               ie.addOrTally(this.possibleRightPairs, i), e.reverse();
               for (let t of this.possibleLeftPairs)
                    if (t.getCount() > 1)
                         for (let e of this.possibleRightPairs) if (e.getCount() > 1 && ie.checkChecksum(t, e)) return ie.constructResult(t, e);
               throw new N();
          }
          static addOrTally(t, e) {
               if (null == e) return;
               let r = !1;
               for (let n of t)
                    if (n.getValue() === e.getValue()) {
                         n.incrementCount(), (r = !0);
                         break;
                    }
               r || t.push(e);
          }
          reset() {
               (this.possibleLeftPairs.length = 0), (this.possibleRightPairs.length = 0);
          }
          static constructResult(t, e) {
               let r = 4537077 * t.getValue() + e.getValue(),
                    n = new String(r).toString(),
                    i = new T();
               for (let t = 13 - n.length; t > 0; t--) i.append('0');
               i.append(n);
               let s = 0;
               for (let t = 0; t < 13; t++) {
                    let e = i.charAt(t).charCodeAt(0) - '0'.charCodeAt(0);
                    s += 1 & t ? e : 3 * e;
               }
               (s = 10 - (s % 10)), 10 === s && (s = 0), i.append(s.toString());
               let o = t.getFinderPattern().getResultPoints(),
                    a = e.getFinderPattern().getResultPoints();
               return new v(i.toString(), null, 0, [o[0], o[1], a[0], a[1]], x.RSS_14, new Date().getTime());
          }
          static checkChecksum(t, e) {
               let r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
                    n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
               return n > 72 && n--, n > 8 && n--, r === n;
          }
          decodePair(t, e, r, n) {
               try {
                    let i = this.findFinderPattern(t, e),
                         s = this.parseFoundFinderPattern(t, r, e, i),
                         o = null == n ? null : n.get(E.NEED_RESULT_POINT_CALLBACK);
                    if (null != o) {
                         let n = (i[0] + i[1]) / 2;
                         e && (n = t.getSize() - 1 - n), o.foundPossibleResultPoint(new nt(n, r));
                    }
                    let a = this.decodeDataCharacter(t, s, !0),
                         h = this.decodeDataCharacter(t, s, !1);
                    return new ne(1597 * a.getValue() + h.getValue(), a.getChecksumPortion() + 4 * h.getChecksumPortion(), s);
               } catch (t) {
                    return null;
               }
          }
          decodeDataCharacter(t, e, r) {
               let n = this.getDataCharacterCounters();
               for (let t = 0; t < n.length; t++) n[t] = 0;
               if (r) ft.recordPatternInReverse(t, e.getStartEnd()[0], n);
               else {
                    ft.recordPattern(t, e.getStartEnd()[1] + 1, n);
                    for (let t = 0, e = n.length - 1; t < e; t++, e--) {
                         let r = n[t];
                         (n[t] = n[e]), (n[e] = r);
                    }
               }
               let i = r ? 16 : 15,
                    s = et.sum(new Int32Array(n)) / i,
                    o = this.getOddCounts(),
                    a = this.getEvenCounts(),
                    h = this.getOddRoundingErrors(),
                    l = this.getEvenRoundingErrors();
               for (let t = 0; t < n.length; t++) {
                    let e = n[t] / s,
                         r = Math.floor(e + 0.5);
                    r < 1 ? (r = 1) : r > 8 && (r = 8);
                    let i = Math.floor(t / 2);
                    1 & t ? ((a[i] = r), (l[i] = e - r)) : ((o[i] = r), (h[i] = e - r));
               }
               this.adjustOddEvenCounts(r, i);
               let c = 0,
                    d = 0;
               for (let t = o.length - 1; t >= 0; t--) (d *= 9), (d += o[t]), (c += o[t]);
               let u = 0,
                    g = 0;
               for (let t = a.length - 1; t >= 0; t--) (u *= 9), (u += a[t]), (g += a[t]);
               let f = d + 3 * u;
               if (r) {
                    if (1 & c || c > 12 || c < 4) throw new N();
                    let t = (12 - c) / 2,
                         e = ie.OUTSIDE_ODD_WIDEST[t],
                         r = 9 - e,
                         n = Pt.getRSSvalue(o, e, !1),
                         i = Pt.getRSSvalue(a, r, !0),
                         s = ie.OUTSIDE_EVEN_TOTAL_SUBSET[t],
                         h = ie.OUTSIDE_GSUM[t];
                    return new bt(n * s + i + h, f);
               }
               {
                    if (1 & g || g > 10 || g < 4) throw new N();
                    let t = (10 - g) / 2,
                         e = ie.INSIDE_ODD_WIDEST[t],
                         r = 9 - e,
                         n = Pt.getRSSvalue(o, e, !0),
                         i = Pt.getRSSvalue(a, r, !1),
                         s = ie.INSIDE_ODD_TOTAL_SUBSET[t],
                         h = ie.INSIDE_GSUM[t];
                    return new bt(i * s + n + h, f);
               }
          }
          findFinderPattern(t, e) {
               let r = this.getDecodeFinderCounters();
               (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
               let n = t.getSize(),
                    i = !1,
                    s = 0;
               for (; s < n && ((i = !t.get(s)), e !== i); ) s++;
               let o = 0,
                    a = s;
               for (let e = s; e < n; e++)
                    if (t.get(e) !== i) r[o]++;
                    else {
                         if (3 === o) {
                              if (Mt.isFinderPattern(r)) return [a, e];
                              (a += r[0] + r[1]), (r[0] = r[2]), (r[1] = r[3]), (r[2] = 0), (r[3] = 0), o--;
                         } else o++;
                         (r[o] = 1), (i = !i);
                    }
               throw new N();
          }
          parseFoundFinderPattern(t, e, r, n) {
               let i = t.get(n[0]),
                    s = n[0] - 1;
               for (; s >= 0 && i !== t.get(s); ) s--;
               s++;
               const o = n[0] - s,
                    a = this.getDecodeFinderCounters(),
                    h = new Int32Array(a.length);
               d.arraycopy(a, 0, h, 1, a.length - 1), (h[0] = o);
               const l = this.parseFinderValue(h, ie.FINDER_PATTERNS);
               let c = s,
                    u = n[1];
               return r && ((c = t.getSize() - 1 - c), (u = t.getSize() - 1 - u)), new Bt(l, [s, n[1]], c, u, e);
          }
          adjustOddEvenCounts(t, e) {
               let r = et.sum(new Int32Array(this.getOddCounts())),
                    n = et.sum(new Int32Array(this.getEvenCounts())),
                    i = !1,
                    s = !1,
                    o = !1,
                    a = !1;
               t
                    ? (r > 12 ? (s = !0) : r < 4 && (i = !0), n > 12 ? (a = !0) : n < 4 && (o = !0))
                    : (r > 11 ? (s = !0) : r < 5 && (i = !0), n > 10 ? (a = !0) : n < 4 && (o = !0));
               let h = r + n - e,
                    l = (1 & r) == (t ? 1 : 0),
                    c = !(1 & ~n);
               if (1 === h)
                    if (l) {
                         if (c) throw new N();
                         s = !0;
                    } else {
                         if (!c) throw new N();
                         a = !0;
                    }
               else if (-1 === h)
                    if (l) {
                         if (c) throw new N();
                         i = !0;
                    } else {
                         if (!c) throw new N();
                         o = !0;
                    }
               else {
                    if (0 !== h) throw new N();
                    if (l) {
                         if (!c) throw new N();
                         r < n ? ((i = !0), (a = !0)) : ((s = !0), (o = !0));
                    } else if (c) throw new N();
               }
               if (i) {
                    if (s) throw new N();
                    Mt.increment(this.getOddCounts(), this.getOddRoundingErrors());
               }
               if ((s && Mt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), o)) {
                    if (a) throw new N();
                    Mt.increment(this.getEvenCounts(), this.getOddRoundingErrors());
               }
               a && Mt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
          }
     }
     (ie.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126]),
          (ie.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81]),
          (ie.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715]),
          (ie.INSIDE_GSUM = [0, 336, 1036, 1516]),
          (ie.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1]),
          (ie.INSIDE_ODD_WIDEST = [2, 4, 6, 8]),
          (ie.FINDER_PATTERNS = [
               Int32Array.from([3, 8, 2, 1]),
               Int32Array.from([3, 5, 5, 1]),
               Int32Array.from([3, 3, 7, 1]),
               Int32Array.from([3, 1, 9, 1]),
               Int32Array.from([2, 7, 4, 1]),
               Int32Array.from([2, 5, 6, 1]),
               Int32Array.from([2, 3, 8, 1]),
               Int32Array.from([1, 5, 7, 1]),
               Int32Array.from([1, 3, 9, 1]),
          ]);
     class se extends ft {
          constructor(t) {
               super(), (this.readers = []);
               const e = t ? t.get(E.POSSIBLE_FORMATS) : null,
                    r = t && void 0 !== t.get(E.ASSUME_CODE_39_CHECK_DIGIT),
                    n = t && void 0 !== t.get(E.ENABLE_CODE_39_EXTENDED_MODE);
               e &&
                    ((e.includes(x.EAN_13) || e.includes(x.UPC_A) || e.includes(x.EAN_8) || e.includes(x.UPC_E)) && this.readers.push(new Dt(t)),
                    e.includes(x.CODE_39) && this.readers.push(new Ct(r, n)),
                    e.includes(x.CODE_93) && this.readers.push(new At()),
                    e.includes(x.CODE_128) && this.readers.push(new wt()),
                    e.includes(x.ITF) && this.readers.push(new Et()),
                    e.includes(x.CODABAR) && this.readers.push(new Ot()),
                    e.includes(x.RSS_14) && this.readers.push(new ie()),
                    e.includes(x.RSS_EXPANDED) &&
                         (console.warn('RSS Expanded reader IS NOT ready for production yet! use at your own risk.'), this.readers.push(new re()))),
                    0 === this.readers.length &&
                         (this.readers.push(new Dt(t)),
                         this.readers.push(new Ct()),
                         this.readers.push(new At()),
                         this.readers.push(new Dt(t)),
                         this.readers.push(new wt()),
                         this.readers.push(new Et()),
                         this.readers.push(new ie()));
          }
          decodeRow(t, e, r) {
               for (let n = 0; n < this.readers.length; n++)
                    try {
                         return this.readers[n].decodeRow(t, e, r);
                    } catch (t) {}
               throw new N();
          }
          reset() {
               this.readers.forEach((t) => t.reset());
          }
     }
     class oe {
          constructor(t, e, r) {
               (this.ecCodewords = t), (this.ecBlocks = [e]), r && this.ecBlocks.push(r);
          }
          getECCodewords() {
               return this.ecCodewords;
          }
          getECBlocks() {
               return this.ecBlocks;
          }
     }
     class ae {
          constructor(t, e) {
               (this.count = t), (this.dataCodewords = e);
          }
          getCount() {
               return this.count;
          }
          getDataCodewords() {
               return this.dataCodewords;
          }
     }
     class he {
          constructor(t, e, r, n, i, s) {
               (this.versionNumber = t),
                    (this.symbolSizeRows = e),
                    (this.symbolSizeColumns = r),
                    (this.dataRegionSizeRows = n),
                    (this.dataRegionSizeColumns = i),
                    (this.ecBlocks = s);
               let o = 0;
               const a = s.getECCodewords(),
                    h = s.getECBlocks();
               for (let t of h) o += t.getCount() * (t.getDataCodewords() + a);
               this.totalCodewords = o;
          }
          getVersionNumber() {
               return this.versionNumber;
          }
          getSymbolSizeRows() {
               return this.symbolSizeRows;
          }
          getSymbolSizeColumns() {
               return this.symbolSizeColumns;
          }
          getDataRegionSizeRows() {
               return this.dataRegionSizeRows;
          }
          getDataRegionSizeColumns() {
               return this.dataRegionSizeColumns;
          }
          getTotalCodewords() {
               return this.totalCodewords;
          }
          getECBlocks() {
               return this.ecBlocks;
          }
          static getVersionForDimensions(t, e) {
               if (1 & t || 1 & e) throw new m();
               for (let r of he.VERSIONS) if (r.symbolSizeRows === t && r.symbolSizeColumns === e) return r;
               throw new m();
          }
          toString() {
               return '' + this.versionNumber;
          }
          static buildVersions() {
               return [
                    new he(1, 10, 10, 8, 8, new oe(5, new ae(1, 3))),
                    new he(2, 12, 12, 10, 10, new oe(7, new ae(1, 5))),
                    new he(3, 14, 14, 12, 12, new oe(10, new ae(1, 8))),
                    new he(4, 16, 16, 14, 14, new oe(12, new ae(1, 12))),
                    new he(5, 18, 18, 16, 16, new oe(14, new ae(1, 18))),
                    new he(6, 20, 20, 18, 18, new oe(18, new ae(1, 22))),
                    new he(7, 22, 22, 20, 20, new oe(20, new ae(1, 30))),
                    new he(8, 24, 24, 22, 22, new oe(24, new ae(1, 36))),
                    new he(9, 26, 26, 24, 24, new oe(28, new ae(1, 44))),
                    new he(10, 32, 32, 14, 14, new oe(36, new ae(1, 62))),
                    new he(11, 36, 36, 16, 16, new oe(42, new ae(1, 86))),
                    new he(12, 40, 40, 18, 18, new oe(48, new ae(1, 114))),
                    new he(13, 44, 44, 20, 20, new oe(56, new ae(1, 144))),
                    new he(14, 48, 48, 22, 22, new oe(68, new ae(1, 174))),
                    new he(15, 52, 52, 24, 24, new oe(42, new ae(2, 102))),
                    new he(16, 64, 64, 14, 14, new oe(56, new ae(2, 140))),
                    new he(17, 72, 72, 16, 16, new oe(36, new ae(4, 92))),
                    new he(18, 80, 80, 18, 18, new oe(48, new ae(4, 114))),
                    new he(19, 88, 88, 20, 20, new oe(56, new ae(4, 144))),
                    new he(20, 96, 96, 22, 22, new oe(68, new ae(4, 174))),
                    new he(21, 104, 104, 24, 24, new oe(56, new ae(6, 136))),
                    new he(22, 120, 120, 18, 18, new oe(68, new ae(6, 175))),
                    new he(23, 132, 132, 20, 20, new oe(62, new ae(8, 163))),
                    new he(24, 144, 144, 22, 22, new oe(62, new ae(8, 156), new ae(2, 155))),
                    new he(25, 8, 18, 6, 16, new oe(7, new ae(1, 5))),
                    new he(26, 8, 32, 6, 14, new oe(11, new ae(1, 10))),
                    new he(27, 12, 26, 10, 24, new oe(14, new ae(1, 16))),
                    new he(28, 12, 36, 10, 16, new oe(18, new ae(1, 22))),
                    new he(29, 16, 36, 14, 16, new oe(24, new ae(1, 32))),
                    new he(30, 16, 48, 14, 22, new oe(28, new ae(1, 49))),
               ];
          }
     }
     he.VERSIONS = he.buildVersions();
     class le {
          constructor(t) {
               const e = t.getHeight();
               if (e < 8 || e > 144 || 1 & e) throw new m();
               (this.version = le.readVersion(t)),
                    (this.mappingBitMatrix = this.extractDataRegion(t)),
                    (this.readMappingMatrix = new R(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight()));
          }
          getVersion() {
               return this.version;
          }
          static readVersion(t) {
               const e = t.getHeight(),
                    r = t.getWidth();
               return he.getVersionForDimensions(e, r);
          }
          readCodewords() {
               const t = new Int8Array(this.version.getTotalCodewords());
               let e = 0,
                    r = 4,
                    n = 0;
               const i = this.mappingBitMatrix.getHeight(),
                    s = this.mappingBitMatrix.getWidth();
               let o = !1,
                    a = !1,
                    h = !1,
                    l = !1;
               do {
                    if (r !== i || 0 !== n || o)
                         if (r === i - 2 && 0 === n && 3 & s && !a) (t[e++] = 255 & this.readCorner2(i, s)), (r -= 2), (n += 2), (a = !0);
                         else if (r !== i + 4 || 2 !== n || 7 & s || h)
                              if (r !== i - 2 || 0 !== n || 4 != (7 & s) || l) {
                                   do {
                                        r < i && n >= 0 && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, s)), (r -= 2), (n += 2);
                                   } while (r >= 0 && n < s);
                                   (r += 1), (n += 3);
                                   do {
                                        r >= 0 && n < s && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, s)), (r += 2), (n -= 2);
                                   } while (r < i && n >= 0);
                                   (r += 3), (n += 1);
                              } else (t[e++] = 255 & this.readCorner4(i, s)), (r -= 2), (n += 2), (l = !0);
                         else (t[e++] = 255 & this.readCorner3(i, s)), (r -= 2), (n += 2), (h = !0);
                    else (t[e++] = 255 & this.readCorner1(i, s)), (r -= 2), (n += 2), (o = !0);
               } while (r < i || n < s);
               if (e !== this.version.getTotalCodewords()) throw new m();
               return t;
          }
          readModule(t, e, r, n) {
               return (
                    t < 0 && ((t += r), (e += 4 - ((r + 4) & 7))),
                    e < 0 && ((e += n), (t += 4 - ((n + 4) & 7))),
                    this.readMappingMatrix.set(e, t),
                    this.mappingBitMatrix.get(e, t)
               );
          }
          readUtah(t, e, r, n) {
               let i = 0;
               return (
                    this.readModule(t - 2, e - 2, r, n) && (i |= 1),
                    (i <<= 1),
                    this.readModule(t - 2, e - 1, r, n) && (i |= 1),
                    (i <<= 1),
                    this.readModule(t - 1, e - 2, r, n) && (i |= 1),
                    (i <<= 1),
                    this.readModule(t - 1, e - 1, r, n) && (i |= 1),
                    (i <<= 1),
                    this.readModule(t - 1, e, r, n) && (i |= 1),
                    (i <<= 1),
                    this.readModule(t, e - 2, r, n) && (i |= 1),
                    (i <<= 1),
                    this.readModule(t, e - 1, r, n) && (i |= 1),
                    (i <<= 1),
                    this.readModule(t, e, r, n) && (i |= 1),
                    i
               );
          }
          readCorner1(t, e) {
               let r = 0;
               return (
                    this.readModule(t - 1, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(t - 1, 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(t - 1, 2, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(2, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(3, e - 1, t, e) && (r |= 1),
                    r
               );
          }
          readCorner2(t, e) {
               let r = 0;
               return (
                    this.readModule(t - 3, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(t - 2, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(t - 1, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 4, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 3, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                    r
               );
          }
          readCorner3(t, e) {
               let r = 0;
               return (
                    this.readModule(t - 1, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(t - 1, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 3, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(1, e - 3, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(1, e - 2, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                    r
               );
          }
          readCorner4(t, e) {
               let r = 0;
               return (
                    this.readModule(t - 3, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(t - 2, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(t - 1, 0, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(2, e - 1, t, e) && (r |= 1),
                    (r <<= 1),
                    this.readModule(3, e - 1, t, e) && (r |= 1),
                    r
               );
          }
          extractDataRegion(t) {
               const e = this.version.getSymbolSizeRows(),
                    r = this.version.getSymbolSizeColumns();
               if (t.getHeight() !== e) throw new a('Dimension of bitMatrix must match the version size');
               const n = this.version.getDataRegionSizeRows(),
                    i = this.version.getDataRegionSizeColumns(),
                    s = (e / n) | 0,
                    o = (r / i) | 0,
                    h = new R(o * i, s * n);
               for (let e = 0; e < s; ++e) {
                    const r = e * n;
                    for (let s = 0; s < o; ++s) {
                         const o = s * i;
                         for (let a = 0; a < n; ++a) {
                              const l = e * (n + 2) + 1 + a,
                                   c = r + a;
                              for (let e = 0; e < i; ++e) {
                                   const r = s * (i + 2) + 1 + e;
                                   if (t.get(r, l)) {
                                        const t = o + e;
                                        h.set(t, c);
                                   }
                              }
                         }
                    }
               }
               return h;
          }
     }
     class ce {
          constructor(t, e) {
               (this.numDataCodewords = t), (this.codewords = e);
          }
          static getDataBlocks(t, e) {
               const r = e.getECBlocks();
               let n = 0;
               const i = r.getECBlocks();
               for (let t of i) n += t.getCount();
               const s = new Array(n);
               let o = 0;
               for (let t of i)
                    for (let e = 0; e < t.getCount(); e++) {
                         const e = t.getDataCodewords(),
                              n = r.getECCodewords() + e;
                         s[o++] = new ce(e, new Uint8Array(n));
                    }
               const h = s[0].codewords.length - r.getECCodewords(),
                    l = h - 1;
               let c = 0;
               for (let e = 0; e < l; e++) for (let r = 0; r < o; r++) s[r].codewords[e] = t[c++];
               const d = 24 === e.getVersionNumber(),
                    u = d ? 8 : o;
               for (let e = 0; e < u; e++) s[e].codewords[h - 1] = t[c++];
               const g = s[0].codewords.length;
               for (let e = h; e < g; e++)
                    for (let r = 0; r < o; r++) {
                         const n = d ? (r + 8) % o : r,
                              i = d && n > 7 ? e - 1 : e;
                         s[n].codewords[i] = t[c++];
                    }
               if (c !== t.length) throw new a();
               return s;
          }
          getNumDataCodewords() {
               return this.numDataCodewords;
          }
          getCodewords() {
               return this.codewords;
          }
     }
     class de {
          constructor(t) {
               (this.bytes = t), (this.byteOffset = 0), (this.bitOffset = 0);
          }
          getBitOffset() {
               return this.bitOffset;
          }
          getByteOffset() {
               return this.byteOffset;
          }
          readBits(t) {
               if (t < 1 || t > 32 || t > this.available()) throw new a('' + t);
               let e = 0,
                    r = this.bitOffset,
                    n = this.byteOffset;
               const i = this.bytes;
               if (r > 0) {
                    const s = 8 - r,
                         o = t < s ? t : s,
                         a = s - o,
                         h = (255 >> (8 - o)) << a;
                    (e = (i[n] & h) >> a), (t -= o), (r += o), 8 === r && ((r = 0), n++);
               }
               if (t > 0) {
                    for (; t >= 8; ) (e = (e << 8) | (255 & i[n])), n++, (t -= 8);
                    if (t > 0) {
                         const s = 8 - t,
                              o = (255 >> s) << s;
                         (e = (e << t) | ((i[n] & o) >> s)), (r += t);
                    }
               }
               return (this.bitOffset = r), (this.byteOffset = n), e;
          }
          available() {
               return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
          }
     }
     !(function (t) {
          (t[(t.PAD_ENCODE = 0)] = 'PAD_ENCODE'),
               (t[(t.ASCII_ENCODE = 1)] = 'ASCII_ENCODE'),
               (t[(t.C40_ENCODE = 2)] = 'C40_ENCODE'),
               (t[(t.TEXT_ENCODE = 3)] = 'TEXT_ENCODE'),
               (t[(t.ANSIX12_ENCODE = 4)] = 'ANSIX12_ENCODE'),
               (t[(t.EDIFACT_ENCODE = 5)] = 'EDIFACT_ENCODE'),
               (t[(t.BASE256_ENCODE = 6)] = 'BASE256_ENCODE');
     })(H || (H = {}));
     class ue {
          static decode(t) {
               const e = new de(t),
                    r = new T(),
                    n = new T(),
                    i = new Array();
               let s = H.ASCII_ENCODE;
               do {
                    if (s === H.ASCII_ENCODE) s = this.decodeAsciiSegment(e, r, n);
                    else {
                         switch (s) {
                              case H.C40_ENCODE:
                                   this.decodeC40Segment(e, r);
                                   break;
                              case H.TEXT_ENCODE:
                                   this.decodeTextSegment(e, r);
                                   break;
                              case H.ANSIX12_ENCODE:
                                   this.decodeAnsiX12Segment(e, r);
                                   break;
                              case H.EDIFACT_ENCODE:
                                   this.decodeEdifactSegment(e, r);
                                   break;
                              case H.BASE256_ENCODE:
                                   this.decodeBase256Segment(e, r, i);
                                   break;
                              default:
                                   throw new m();
                         }
                         s = H.ASCII_ENCODE;
                    }
               } while (s !== H.PAD_ENCODE && e.available() > 0);
               return n.length() > 0 && r.append(n.toString()), new Y(t, r.toString(), 0 === i.length ? null : i, null);
          }
          static decodeAsciiSegment(t, e, r) {
               let n = !1;
               do {
                    let i = t.readBits(8);
                    if (0 === i) throw new m();
                    if (i <= 128) return n && (i += 128), e.append(String.fromCharCode(i - 1)), H.ASCII_ENCODE;
                    if (129 === i) return H.PAD_ENCODE;
                    if (i <= 229) {
                         const t = i - 130;
                         t < 10 && e.append('0'), e.append('' + t);
                    } else
                         switch (i) {
                              case 230:
                                   return H.C40_ENCODE;
                              case 231:
                                   return H.BASE256_ENCODE;
                              case 232:
                                   e.append(String.fromCharCode(29));
                                   break;
                              case 233:
                              case 234:
                              case 241:
                                   break;
                              case 235:
                                   n = !0;
                                   break;
                              case 236:
                                   e.append('[)>05'), r.insert(0, '');
                                   break;
                              case 237:
                                   e.append('[)>06'), r.insert(0, '');
                                   break;
                              case 238:
                                   return H.ANSIX12_ENCODE;
                              case 239:
                                   return H.TEXT_ENCODE;
                              case 240:
                                   return H.EDIFACT_ENCODE;
                              default:
                                   if (254 !== i || 0 !== t.available()) throw new m();
                         }
               } while (t.available() > 0);
               return H.ASCII_ENCODE;
          }
          static decodeC40Segment(t, e) {
               let r = !1;
               const n = [];
               let i = 0;
               do {
                    if (8 === t.available()) return;
                    const s = t.readBits(8);
                    if (254 === s) return;
                    this.parseTwoBytes(s, t.readBits(8), n);
                    for (let t = 0; t < 3; t++) {
                         const s = n[t];
                         switch (i) {
                              case 0:
                                   if (s < 3) i = s + 1;
                                   else {
                                        if (!(s < this.C40_BASIC_SET_CHARS.length)) throw new m();
                                        {
                                             const t = this.C40_BASIC_SET_CHARS[s];
                                             r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
                                        }
                                   }
                                   break;
                              case 1:
                                   r ? (e.append(String.fromCharCode(s + 128)), (r = !1)) : e.append(String.fromCharCode(s)), (i = 0);
                                   break;
                              case 2:
                                   if (s < this.C40_SHIFT2_SET_CHARS.length) {
                                        const t = this.C40_SHIFT2_SET_CHARS[s];
                                        r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
                                   } else
                                        switch (s) {
                                             case 27:
                                                  e.append(String.fromCharCode(29));
                                                  break;
                                             case 30:
                                                  r = !0;
                                                  break;
                                             default:
                                                  throw new m();
                                        }
                                   i = 0;
                                   break;
                              case 3:
                                   r ? (e.append(String.fromCharCode(s + 224)), (r = !1)) : e.append(String.fromCharCode(s + 96)), (i = 0);
                                   break;
                              default:
                                   throw new m();
                         }
                    }
               } while (t.available() > 0);
          }
          static decodeTextSegment(t, e) {
               let r = !1,
                    n = [],
                    i = 0;
               do {
                    if (8 === t.available()) return;
                    const s = t.readBits(8);
                    if (254 === s) return;
                    this.parseTwoBytes(s, t.readBits(8), n);
                    for (let t = 0; t < 3; t++) {
                         const s = n[t];
                         switch (i) {
                              case 0:
                                   if (s < 3) i = s + 1;
                                   else {
                                        if (!(s < this.TEXT_BASIC_SET_CHARS.length)) throw new m();
                                        {
                                             const t = this.TEXT_BASIC_SET_CHARS[s];
                                             r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
                                        }
                                   }
                                   break;
                              case 1:
                                   r ? (e.append(String.fromCharCode(s + 128)), (r = !1)) : e.append(String.fromCharCode(s)), (i = 0);
                                   break;
                              case 2:
                                   if (s < this.TEXT_SHIFT2_SET_CHARS.length) {
                                        const t = this.TEXT_SHIFT2_SET_CHARS[s];
                                        r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t);
                                   } else
                                        switch (s) {
                                             case 27:
                                                  e.append(String.fromCharCode(29));
                                                  break;
                                             case 30:
                                                  r = !0;
                                                  break;
                                             default:
                                                  throw new m();
                                        }
                                   i = 0;
                                   break;
                              case 3:
                                   if (!(s < this.TEXT_SHIFT3_SET_CHARS.length)) throw new m();
                                   {
                                        const t = this.TEXT_SHIFT3_SET_CHARS[s];
                                        r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), (r = !1)) : e.append(t), (i = 0);
                                   }
                                   break;
                              default:
                                   throw new m();
                         }
                    }
               } while (t.available() > 0);
          }
          static decodeAnsiX12Segment(t, e) {
               const r = [];
               do {
                    if (8 === t.available()) return;
                    const n = t.readBits(8);
                    if (254 === n) return;
                    this.parseTwoBytes(n, t.readBits(8), r);
                    for (let t = 0; t < 3; t++) {
                         const n = r[t];
                         switch (n) {
                              case 0:
                                   e.append('\r');
                                   break;
                              case 1:
                                   e.append('*');
                                   break;
                              case 2:
                                   e.append('>');
                                   break;
                              case 3:
                                   e.append(' ');
                                   break;
                              default:
                                   if (n < 14) e.append(String.fromCharCode(n + 44));
                                   else {
                                        if (!(n < 40)) throw new m();
                                        e.append(String.fromCharCode(n + 51));
                                   }
                         }
                    }
               } while (t.available() > 0);
          }
          static parseTwoBytes(t, e, r) {
               let n = (t << 8) + e - 1,
                    i = Math.floor(n / 1600);
               (r[0] = i), (n -= 1600 * i), (i = Math.floor(n / 40)), (r[1] = i), (r[2] = n - 40 * i);
          }
          static decodeEdifactSegment(t, e) {
               do {
                    if (t.available() <= 16) return;
                    for (let r = 0; r < 4; r++) {
                         let r = t.readBits(6);
                         if (31 === r) {
                              const e = 8 - t.getBitOffset();
                              return void (8 !== e && t.readBits(e));
                         }
                         32 & r || (r |= 64), e.append(String.fromCharCode(r));
                    }
               } while (t.available() > 0);
          }
          static decodeBase256Segment(t, e, r) {
               let n = 1 + t.getByteOffset();
               const i = this.unrandomize255State(t.readBits(8), n++);
               let s;
               if (((s = 0 === i ? (t.available() / 8) | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(t.readBits(8), n++)), s < 0))
                    throw new m();
               const o = new Uint8Array(s);
               for (let e = 0; e < s; e++) {
                    if (t.available() < 8) throw new m();
                    o[e] = this.unrandomize255State(t.readBits(8), n++);
               }
               r.push(o);
               try {
                    e.append(S.decode(o, p.ISO88591));
               } catch (t) {
                    throw new J('Platform does not support required encoding: ' + t.message);
               }
          }
          static unrandomize255State(t, e) {
               const r = t - (((149 * e) % 255) + 1);
               return r >= 0 ? r : r + 256;
          }
     }
     (ue.C40_BASIC_SET_CHARS = [
          '*',
          '*',
          '*',
          ' ',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
     ]),
          (ue.C40_SHIFT2_SET_CHARS = [
               '!',
               '"',
               '#',
               '$',
               '%',
               '&',
               "'",
               '(',
               ')',
               '*',
               '+',
               ',',
               '-',
               '.',
               '/',
               ':',
               ';',
               '<',
               '=',
               '>',
               '?',
               '@',
               '[',
               '\\',
               ']',
               '^',
               '_',
          ]),
          (ue.TEXT_BASIC_SET_CHARS = [
               '*',
               '*',
               '*',
               ' ',
               '0',
               '1',
               '2',
               '3',
               '4',
               '5',
               '6',
               '7',
               '8',
               '9',
               'a',
               'b',
               'c',
               'd',
               'e',
               'f',
               'g',
               'h',
               'i',
               'j',
               'k',
               'l',
               'm',
               'n',
               'o',
               'p',
               'q',
               'r',
               's',
               't',
               'u',
               'v',
               'w',
               'x',
               'y',
               'z',
          ]),
          (ue.TEXT_SHIFT2_SET_CHARS = ue.C40_SHIFT2_SET_CHARS),
          (ue.TEXT_SHIFT3_SET_CHARS = [
               '`',
               'A',
               'B',
               'C',
               'D',
               'E',
               'F',
               'G',
               'H',
               'I',
               'J',
               'K',
               'L',
               'M',
               'N',
               'O',
               'P',
               'Q',
               'R',
               'S',
               'T',
               'U',
               'V',
               'W',
               'X',
               'Y',
               'Z',
               '{',
               '|',
               '}',
               '~',
               String.fromCharCode(127),
          ]);
     class ge {
          constructor() {
               this.rsDecoder = new $(Q.DATA_MATRIX_FIELD_256);
          }
          decode(t) {
               const e = new le(t),
                    r = e.getVersion(),
                    n = e.readCodewords(),
                    i = ce.getDataBlocks(n, r);
               let s = 0;
               for (let t of i) s += t.getNumDataCodewords();
               const o = new Uint8Array(s),
                    a = i.length;
               for (let t = 0; t < a; t++) {
                    const e = i[t],
                         r = e.getCodewords(),
                         n = e.getNumDataCodewords();
                    this.correctErrors(r, n);
                    for (let e = 0; e < n; e++) o[e * a + t] = r[e];
               }
               return ue.decode(o);
          }
          correctErrors(t, e) {
               const r = new Int32Array(t);
               try {
                    this.rsDecoder.decode(r, t.length - e);
               } catch (t) {
                    throw new l();
               }
               for (let n = 0; n < e; n++) t[n] = r[n];
          }
     }
     class fe {
          constructor(t) {
               (this.image = t), (this.rectangleDetector = new ot(this.image));
          }
          detect() {
               const t = this.rectangleDetector.detect();
               let e = this.detectSolid1(t);
               if (((e = this.detectSolid2(e)), (e[3] = this.correctTopRight(e)), !e[3])) throw new N();
               e = this.shiftToModuleCenter(e);
               const r = e[0],
                    n = e[1],
                    i = e[2],
                    s = e[3];
               let o = this.transitionsBetween(r, s) + 1,
                    a = this.transitionsBetween(i, s) + 1;
               1 & ~o || (o += 1), 1 & ~a || (a += 1), 4 * o < 7 * a && 4 * a < 7 * o && (o = a = Math.max(o, a));
               let h = fe.sampleGrid(this.image, r, n, i, s, o, a);
               return new it(h, [r, n, i, s]);
          }
          static shiftPoint(t, e, r) {
               let n = (e.getX() - t.getX()) / (r + 1),
                    i = (e.getY() - t.getY()) / (r + 1);
               return new nt(t.getX() + n, t.getY() + i);
          }
          static moveAway(t, e, r) {
               let n = t.getX(),
                    i = t.getY();
               return n < e ? (n -= 1) : (n += 1), i < r ? (i -= 1) : (i += 1), new nt(n, i);
          }
          detectSolid1(t) {
               let e = t[0],
                    r = t[1],
                    n = t[3],
                    i = t[2],
                    s = this.transitionsBetween(e, r),
                    o = this.transitionsBetween(r, n),
                    a = this.transitionsBetween(n, i),
                    h = this.transitionsBetween(i, e),
                    l = s,
                    c = [i, e, r, n];
               return (
                    l > o && ((l = o), (c[0] = e), (c[1] = r), (c[2] = n), (c[3] = i)),
                    l > a && ((l = a), (c[0] = r), (c[1] = n), (c[2] = i), (c[3] = e)),
                    l > h && ((c[0] = n), (c[1] = i), (c[2] = e), (c[3] = r)),
                    c
               );
          }
          detectSolid2(t) {
               let e = t[0],
                    r = t[1],
                    n = t[2],
                    i = t[3],
                    s = this.transitionsBetween(e, i),
                    o = fe.shiftPoint(r, n, 4 * (s + 1)),
                    a = fe.shiftPoint(n, r, 4 * (s + 1));
               return (
                    this.transitionsBetween(o, e) < this.transitionsBetween(a, i)
                         ? ((t[0] = e), (t[1] = r), (t[2] = n), (t[3] = i))
                         : ((t[0] = r), (t[1] = n), (t[2] = i), (t[3] = e)),
                    t
               );
          }
          correctTopRight(t) {
               let e = t[0],
                    r = t[1],
                    n = t[2],
                    i = t[3],
                    s = this.transitionsBetween(e, i),
                    o = this.transitionsBetween(r, i),
                    a = fe.shiftPoint(e, r, 4 * (o + 1)),
                    h = fe.shiftPoint(n, r, 4 * (s + 1));
               (s = this.transitionsBetween(a, i)), (o = this.transitionsBetween(h, i));
               let l = new nt(i.getX() + (n.getX() - r.getX()) / (s + 1), i.getY() + (n.getY() - r.getY()) / (s + 1)),
                    c = new nt(i.getX() + (e.getX() - r.getX()) / (o + 1), i.getY() + (e.getY() - r.getY()) / (o + 1));
               return this.isValid(l)
                    ? this.isValid(c)
                         ? this.transitionsBetween(a, l) + this.transitionsBetween(h, l) > this.transitionsBetween(a, c) + this.transitionsBetween(h, c)
                              ? l
                              : c
                         : l
                    : this.isValid(c)
                    ? c
                    : null;
          }
          shiftToModuleCenter(t) {
               let e = t[0],
                    r = t[1],
                    n = t[2],
                    i = t[3],
                    s = this.transitionsBetween(e, i) + 1,
                    o = this.transitionsBetween(n, i) + 1,
                    a = fe.shiftPoint(e, r, 4 * o),
                    h = fe.shiftPoint(n, r, 4 * s);
               (s = this.transitionsBetween(a, i) + 1), (o = this.transitionsBetween(h, i) + 1), 1 & ~s || (s += 1), 1 & ~o || (o += 1);
               let l,
                    c,
                    d = (e.getX() + r.getX() + n.getX() + i.getX()) / 4,
                    u = (e.getY() + r.getY() + n.getY() + i.getY()) / 4;
               return (
                    (e = fe.moveAway(e, d, u)),
                    (r = fe.moveAway(r, d, u)),
                    (n = fe.moveAway(n, d, u)),
                    (i = fe.moveAway(i, d, u)),
                    (a = fe.shiftPoint(e, r, 4 * o)),
                    (a = fe.shiftPoint(a, i, 4 * s)),
                    (l = fe.shiftPoint(r, e, 4 * o)),
                    (l = fe.shiftPoint(l, n, 4 * s)),
                    (h = fe.shiftPoint(n, i, 4 * o)),
                    (h = fe.shiftPoint(h, r, 4 * s)),
                    (c = fe.shiftPoint(i, n, 4 * o)),
                    (c = fe.shiftPoint(c, e, 4 * s)),
                    [a, l, h, c]
               );
          }
          isValid(t) {
               return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight();
          }
          static sampleGrid(t, e, r, n, i, s, o) {
               return ct
                    .getInstance()
                    .sampleGrid(
                         t,
                         s,
                         o,
                         0.5,
                         0.5,
                         s - 0.5,
                         0.5,
                         s - 0.5,
                         o - 0.5,
                         0.5,
                         o - 0.5,
                         e.getX(),
                         e.getY(),
                         i.getX(),
                         i.getY(),
                         n.getX(),
                         n.getY(),
                         r.getX(),
                         r.getY()
                    );
          }
          transitionsBetween(t, e) {
               let r = Math.trunc(t.getX()),
                    n = Math.trunc(t.getY()),
                    i = Math.trunc(e.getX()),
                    s = Math.trunc(e.getY()),
                    o = Math.abs(s - n) > Math.abs(i - r);
               if (o) {
                    let t = r;
                    (r = n), (n = t), (t = i), (i = s), (s = t);
               }
               let a = Math.abs(i - r),
                    h = Math.abs(s - n),
                    l = -a / 2,
                    c = n < s ? 1 : -1,
                    d = r < i ? 1 : -1,
                    u = 0,
                    g = this.image.get(o ? n : r, o ? r : n);
               for (let t = r, e = n; t !== i; t += d) {
                    let r = this.image.get(o ? e : t, o ? t : e);
                    if ((r !== g && (u++, (g = r)), (l += h), l > 0)) {
                         if (e === s) break;
                         (e += c), (l -= a);
                    }
               }
               return u;
          }
     }
     class we {
          constructor() {
               this.decoder = new ge();
          }
          decode(t, e = null) {
               let r, n;
               if (null != e && e.has(E.PURE_BARCODE)) {
                    const e = we.extractPureBits(t.getBlackMatrix());
                    (r = this.decoder.decode(e)), (n = we.NO_POINTS);
               } else {
                    const e = new fe(t.getBlackMatrix()).detect();
                    (r = this.decoder.decode(e.getBits())), (n = e.getPoints());
               }
               const i = r.getRawBytes(),
                    s = new v(r.getText(), i, 8 * i.length, n, x.DATA_MATRIX, d.currentTimeMillis()),
                    o = r.getByteSegments();
               null != o && s.putMetadata(z.BYTE_SEGMENTS, o);
               const a = r.getECLevel();
               return null != a && s.putMetadata(z.ERROR_CORRECTION_LEVEL, a), s;
          }
          reset() {}
          static extractPureBits(t) {
               const e = t.getTopLeftOnBit(),
                    r = t.getBottomRightOnBit();
               if (null == e || null == r) throw new N();
               const n = this.moduleSize(e, t);
               let i = e[1];
               const s = r[1];
               let o = e[0];
               const a = (r[0] - o + 1) / n,
                    h = (s - i + 1) / n;
               if (a <= 0 || h <= 0) throw new N();
               const l = n / 2;
               (i += l), (o += l);
               const c = new R(a, h);
               for (let e = 0; e < h; e++) {
                    const r = i + e * n;
                    for (let i = 0; i < a; i++) t.get(o + i * n, r) && c.set(i, e);
               }
               return c;
          }
          static moduleSize(t, e) {
               const r = e.getWidth();
               let n = t[0];
               const i = t[1];
               for (; n < r && e.get(n, i); ) n++;
               if (n === r) throw new N();
               const s = n - t[0];
               if (0 === s) throw new N();
               return s;
          }
     }
     we.NO_POINTS = [];
     !(function (t) {
          (t[(t.L = 0)] = 'L'), (t[(t.M = 1)] = 'M'), (t[(t.Q = 2)] = 'Q'), (t[(t.H = 3)] = 'H');
     })(U || (U = {}));
     class Ce {
          constructor(t, e, r) {
               (this.value = t), (this.stringValue = e), (this.bits = r), Ce.FOR_BITS.set(r, this), Ce.FOR_VALUE.set(t, this);
          }
          getValue() {
               return this.value;
          }
          getBits() {
               return this.bits;
          }
          static fromString(t) {
               switch (t) {
                    case 'L':
                         return Ce.L;
                    case 'M':
                         return Ce.M;
                    case 'Q':
                         return Ce.Q;
                    case 'H':
                         return Ce.H;
                    default:
                         throw new o(t + 'not available');
               }
          }
          toString() {
               return this.stringValue;
          }
          equals(t) {
               if (!(t instanceof Ce)) return !1;
               const e = t;
               return this.value === e.value;
          }
          static forBits(t) {
               if (t < 0 || t >= Ce.FOR_BITS.size) throw new a();
               return Ce.FOR_BITS.get(t);
          }
     }
     (Ce.FOR_BITS = new Map()),
          (Ce.FOR_VALUE = new Map()),
          (Ce.L = new Ce(U.L, 'L', 1)),
          (Ce.M = new Ce(U.M, 'M', 0)),
          (Ce.Q = new Ce(U.Q, 'Q', 3)),
          (Ce.H = new Ce(U.H, 'H', 2));
     class Ae {
          constructor(t) {
               (this.errorCorrectionLevel = Ce.forBits((t >> 3) & 3)), (this.dataMask = 7 & t);
          }
          static numBitsDiffering(t, e) {
               return w.bitCount(t ^ e);
          }
          static decodeFormatInformation(t, e) {
               const r = Ae.doDecodeFormatInformation(t, e);
               return null !== r ? r : Ae.doDecodeFormatInformation(t ^ Ae.FORMAT_INFO_MASK_QR, e ^ Ae.FORMAT_INFO_MASK_QR);
          }
          static doDecodeFormatInformation(t, e) {
               let r = Number.MAX_SAFE_INTEGER,
                    n = 0;
               for (const i of Ae.FORMAT_INFO_DECODE_LOOKUP) {
                    const s = i[0];
                    if (s === t || s === e) return new Ae(i[1]);
                    let o = Ae.numBitsDiffering(t, s);
                    o < r && ((n = i[1]), (r = o)), t !== e && ((o = Ae.numBitsDiffering(e, s)), o < r && ((n = i[1]), (r = o)));
               }
               return r <= 3 ? new Ae(n) : null;
          }
          getErrorCorrectionLevel() {
               return this.errorCorrectionLevel;
          }
          getDataMask() {
               return this.dataMask;
          }
          hashCode() {
               return (this.errorCorrectionLevel.getBits() << 3) | this.dataMask;
          }
          equals(t) {
               if (!(t instanceof Ae)) return !1;
               const e = t;
               return this.errorCorrectionLevel === e.errorCorrectionLevel && this.dataMask === e.dataMask;
          }
     }
     (Ae.FORMAT_INFO_MASK_QR = 21522),
          (Ae.FORMAT_INFO_DECODE_LOOKUP = [
               Int32Array.from([21522, 0]),
               Int32Array.from([20773, 1]),
               Int32Array.from([24188, 2]),
               Int32Array.from([23371, 3]),
               Int32Array.from([17913, 4]),
               Int32Array.from([16590, 5]),
               Int32Array.from([20375, 6]),
               Int32Array.from([19104, 7]),
               Int32Array.from([30660, 8]),
               Int32Array.from([29427, 9]),
               Int32Array.from([32170, 10]),
               Int32Array.from([30877, 11]),
               Int32Array.from([26159, 12]),
               Int32Array.from([25368, 13]),
               Int32Array.from([27713, 14]),
               Int32Array.from([26998, 15]),
               Int32Array.from([5769, 16]),
               Int32Array.from([5054, 17]),
               Int32Array.from([7399, 18]),
               Int32Array.from([6608, 19]),
               Int32Array.from([1890, 20]),
               Int32Array.from([597, 21]),
               Int32Array.from([3340, 22]),
               Int32Array.from([2107, 23]),
               Int32Array.from([13663, 24]),
               Int32Array.from([12392, 25]),
               Int32Array.from([16177, 26]),
               Int32Array.from([14854, 27]),
               Int32Array.from([9396, 28]),
               Int32Array.from([8579, 29]),
               Int32Array.from([11994, 30]),
               Int32Array.from([11245, 31]),
          ]);
     class Ee {
          constructor(t, ...e) {
               (this.ecCodewordsPerBlock = t), (this.ecBlocks = e);
          }
          getECCodewordsPerBlock() {
               return this.ecCodewordsPerBlock;
          }
          getNumBlocks() {
               let t = 0;
               const e = this.ecBlocks;
               for (const r of e) t += r.getCount();
               return t;
          }
          getTotalECCodewords() {
               return this.ecCodewordsPerBlock * this.getNumBlocks();
          }
          getECBlocks() {
               return this.ecBlocks;
          }
     }
     class me {
          constructor(t, e) {
               (this.count = t), (this.dataCodewords = e);
          }
          getCount() {
               return this.count;
          }
          getDataCodewords() {
               return this.dataCodewords;
          }
     }
     class Ie {
          constructor(t, e, ...r) {
               (this.versionNumber = t), (this.alignmentPatternCenters = e), (this.ecBlocks = r);
               let n = 0;
               const i = r[0].getECCodewordsPerBlock(),
                    s = r[0].getECBlocks();
               for (const t of s) n += t.getCount() * (t.getDataCodewords() + i);
               this.totalCodewords = n;
          }
          getVersionNumber() {
               return this.versionNumber;
          }
          getAlignmentPatternCenters() {
               return this.alignmentPatternCenters;
          }
          getTotalCodewords() {
               return this.totalCodewords;
          }
          getDimensionForVersion() {
               return 17 + 4 * this.versionNumber;
          }
          getECBlocksForLevel(t) {
               return this.ecBlocks[t.getValue()];
          }
          static getProvisionalVersionForDimension(t) {
               if (t % 4 != 1) throw new m();
               try {
                    return this.getVersionForNumber((t - 17) / 4);
               } catch (t) {
                    throw new m();
               }
          }
          static getVersionForNumber(t) {
               if (t < 1 || t > 40) throw new a();
               return Ie.VERSIONS[t - 1];
          }
          static decodeVersionInformation(t) {
               let e = Number.MAX_SAFE_INTEGER,
                    r = 0;
               for (let n = 0; n < Ie.VERSION_DECODE_INFO.length; n++) {
                    const i = Ie.VERSION_DECODE_INFO[n];
                    if (i === t) return Ie.getVersionForNumber(n + 7);
                    const s = Ae.numBitsDiffering(t, i);
                    s < e && ((r = n + 7), (e = s));
               }
               return e <= 3 ? Ie.getVersionForNumber(r) : null;
          }
          buildFunctionPattern() {
               const t = this.getDimensionForVersion(),
                    e = new R(t);
               e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
               const r = this.alignmentPatternCenters.length;
               for (let t = 0; t < r; t++) {
                    const n = this.alignmentPatternCenters[t] - 2;
                    for (let i = 0; i < r; i++)
                         (0 === t && (0 === i || i === r - 1)) || (t === r - 1 && 0 === i) || e.setRegion(this.alignmentPatternCenters[i] - 2, n, 5, 5);
               }
               return (
                    e.setRegion(6, 9, 1, t - 17),
                    e.setRegion(9, 6, t - 17, 1),
                    this.versionNumber > 6 && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)),
                    e
               );
          }
          toString() {
               return '' + this.versionNumber;
          }
     }
     (Ie.VERSION_DECODE_INFO = Int32Array.from([
          31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734,
          117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017,
     ])),
          (Ie.VERSIONS = [
               new Ie(1, new Int32Array(0), new Ee(7, new me(1, 19)), new Ee(10, new me(1, 16)), new Ee(13, new me(1, 13)), new Ee(17, new me(1, 9))),
               new Ie(2, Int32Array.from([6, 18]), new Ee(10, new me(1, 34)), new Ee(16, new me(1, 28)), new Ee(22, new me(1, 22)), new Ee(28, new me(1, 16))),
               new Ie(3, Int32Array.from([6, 22]), new Ee(15, new me(1, 55)), new Ee(26, new me(1, 44)), new Ee(18, new me(2, 17)), new Ee(22, new me(2, 13))),
               new Ie(4, Int32Array.from([6, 26]), new Ee(20, new me(1, 80)), new Ee(18, new me(2, 32)), new Ee(26, new me(2, 24)), new Ee(16, new me(4, 9))),
               new Ie(
                    5,
                    Int32Array.from([6, 30]),
                    new Ee(26, new me(1, 108)),
                    new Ee(24, new me(2, 43)),
                    new Ee(18, new me(2, 15), new me(2, 16)),
                    new Ee(22, new me(2, 11), new me(2, 12))
               ),
               new Ie(6, Int32Array.from([6, 34]), new Ee(18, new me(2, 68)), new Ee(16, new me(4, 27)), new Ee(24, new me(4, 19)), new Ee(28, new me(4, 15))),
               new Ie(
                    7,
                    Int32Array.from([6, 22, 38]),
                    new Ee(20, new me(2, 78)),
                    new Ee(18, new me(4, 31)),
                    new Ee(18, new me(2, 14), new me(4, 15)),
                    new Ee(26, new me(4, 13), new me(1, 14))
               ),
               new Ie(
                    8,
                    Int32Array.from([6, 24, 42]),
                    new Ee(24, new me(2, 97)),
                    new Ee(22, new me(2, 38), new me(2, 39)),
                    new Ee(22, new me(4, 18), new me(2, 19)),
                    new Ee(26, new me(4, 14), new me(2, 15))
               ),
               new Ie(
                    9,
                    Int32Array.from([6, 26, 46]),
                    new Ee(30, new me(2, 116)),
                    new Ee(22, new me(3, 36), new me(2, 37)),
                    new Ee(20, new me(4, 16), new me(4, 17)),
                    new Ee(24, new me(4, 12), new me(4, 13))
               ),
               new Ie(
                    10,
                    Int32Array.from([6, 28, 50]),
                    new Ee(18, new me(2, 68), new me(2, 69)),
                    new Ee(26, new me(4, 43), new me(1, 44)),
                    new Ee(24, new me(6, 19), new me(2, 20)),
                    new Ee(28, new me(6, 15), new me(2, 16))
               ),
               new Ie(
                    11,
                    Int32Array.from([6, 30, 54]),
                    new Ee(20, new me(4, 81)),
                    new Ee(30, new me(1, 50), new me(4, 51)),
                    new Ee(28, new me(4, 22), new me(4, 23)),
                    new Ee(24, new me(3, 12), new me(8, 13))
               ),
               new Ie(
                    12,
                    Int32Array.from([6, 32, 58]),
                    new Ee(24, new me(2, 92), new me(2, 93)),
                    new Ee(22, new me(6, 36), new me(2, 37)),
                    new Ee(26, new me(4, 20), new me(6, 21)),
                    new Ee(28, new me(7, 14), new me(4, 15))
               ),
               new Ie(
                    13,
                    Int32Array.from([6, 34, 62]),
                    new Ee(26, new me(4, 107)),
                    new Ee(22, new me(8, 37), new me(1, 38)),
                    new Ee(24, new me(8, 20), new me(4, 21)),
                    new Ee(22, new me(12, 11), new me(4, 12))
               ),
               new Ie(
                    14,
                    Int32Array.from([6, 26, 46, 66]),
                    new Ee(30, new me(3, 115), new me(1, 116)),
                    new Ee(24, new me(4, 40), new me(5, 41)),
                    new Ee(20, new me(11, 16), new me(5, 17)),
                    new Ee(24, new me(11, 12), new me(5, 13))
               ),
               new Ie(
                    15,
                    Int32Array.from([6, 26, 48, 70]),
                    new Ee(22, new me(5, 87), new me(1, 88)),
                    new Ee(24, new me(5, 41), new me(5, 42)),
                    new Ee(30, new me(5, 24), new me(7, 25)),
                    new Ee(24, new me(11, 12), new me(7, 13))
               ),
               new Ie(
                    16,
                    Int32Array.from([6, 26, 50, 74]),
                    new Ee(24, new me(5, 98), new me(1, 99)),
                    new Ee(28, new me(7, 45), new me(3, 46)),
                    new Ee(24, new me(15, 19), new me(2, 20)),
                    new Ee(30, new me(3, 15), new me(13, 16))
               ),
               new Ie(
                    17,
                    Int32Array.from([6, 30, 54, 78]),
                    new Ee(28, new me(1, 107), new me(5, 108)),
                    new Ee(28, new me(10, 46), new me(1, 47)),
                    new Ee(28, new me(1, 22), new me(15, 23)),
                    new Ee(28, new me(2, 14), new me(17, 15))
               ),
               new Ie(
                    18,
                    Int32Array.from([6, 30, 56, 82]),
                    new Ee(30, new me(5, 120), new me(1, 121)),
                    new Ee(26, new me(9, 43), new me(4, 44)),
                    new Ee(28, new me(17, 22), new me(1, 23)),
                    new Ee(28, new me(2, 14), new me(19, 15))
               ),
               new Ie(
                    19,
                    Int32Array.from([6, 30, 58, 86]),
                    new Ee(28, new me(3, 113), new me(4, 114)),
                    new Ee(26, new me(3, 44), new me(11, 45)),
                    new Ee(26, new me(17, 21), new me(4, 22)),
                    new Ee(26, new me(9, 13), new me(16, 14))
               ),
               new Ie(
                    20,
                    Int32Array.from([6, 34, 62, 90]),
                    new Ee(28, new me(3, 107), new me(5, 108)),
                    new Ee(26, new me(3, 41), new me(13, 42)),
                    new Ee(30, new me(15, 24), new me(5, 25)),
                    new Ee(28, new me(15, 15), new me(10, 16))
               ),
               new Ie(
                    21,
                    Int32Array.from([6, 28, 50, 72, 94]),
                    new Ee(28, new me(4, 116), new me(4, 117)),
                    new Ee(26, new me(17, 42)),
                    new Ee(28, new me(17, 22), new me(6, 23)),
                    new Ee(30, new me(19, 16), new me(6, 17))
               ),
               new Ie(
                    22,
                    Int32Array.from([6, 26, 50, 74, 98]),
                    new Ee(28, new me(2, 111), new me(7, 112)),
                    new Ee(28, new me(17, 46)),
                    new Ee(30, new me(7, 24), new me(16, 25)),
                    new Ee(24, new me(34, 13))
               ),
               new Ie(
                    23,
                    Int32Array.from([6, 30, 54, 78, 102]),
                    new Ee(30, new me(4, 121), new me(5, 122)),
                    new Ee(28, new me(4, 47), new me(14, 48)),
                    new Ee(30, new me(11, 24), new me(14, 25)),
                    new Ee(30, new me(16, 15), new me(14, 16))
               ),
               new Ie(
                    24,
                    Int32Array.from([6, 28, 54, 80, 106]),
                    new Ee(30, new me(6, 117), new me(4, 118)),
                    new Ee(28, new me(6, 45), new me(14, 46)),
                    new Ee(30, new me(11, 24), new me(16, 25)),
                    new Ee(30, new me(30, 16), new me(2, 17))
               ),
               new Ie(
                    25,
                    Int32Array.from([6, 32, 58, 84, 110]),
                    new Ee(26, new me(8, 106), new me(4, 107)),
                    new Ee(28, new me(8, 47), new me(13, 48)),
                    new Ee(30, new me(7, 24), new me(22, 25)),
                    new Ee(30, new me(22, 15), new me(13, 16))
               ),
               new Ie(
                    26,
                    Int32Array.from([6, 30, 58, 86, 114]),
                    new Ee(28, new me(10, 114), new me(2, 115)),
                    new Ee(28, new me(19, 46), new me(4, 47)),
                    new Ee(28, new me(28, 22), new me(6, 23)),
                    new Ee(30, new me(33, 16), new me(4, 17))
               ),
               new Ie(
                    27,
                    Int32Array.from([6, 34, 62, 90, 118]),
                    new Ee(30, new me(8, 122), new me(4, 123)),
                    new Ee(28, new me(22, 45), new me(3, 46)),
                    new Ee(30, new me(8, 23), new me(26, 24)),
                    new Ee(30, new me(12, 15), new me(28, 16))
               ),
               new Ie(
                    28,
                    Int32Array.from([6, 26, 50, 74, 98, 122]),
                    new Ee(30, new me(3, 117), new me(10, 118)),
                    new Ee(28, new me(3, 45), new me(23, 46)),
                    new Ee(30, new me(4, 24), new me(31, 25)),
                    new Ee(30, new me(11, 15), new me(31, 16))
               ),
               new Ie(
                    29,
                    Int32Array.from([6, 30, 54, 78, 102, 126]),
                    new Ee(30, new me(7, 116), new me(7, 117)),
                    new Ee(28, new me(21, 45), new me(7, 46)),
                    new Ee(30, new me(1, 23), new me(37, 24)),
                    new Ee(30, new me(19, 15), new me(26, 16))
               ),
               new Ie(
                    30,
                    Int32Array.from([6, 26, 52, 78, 104, 130]),
                    new Ee(30, new me(5, 115), new me(10, 116)),
                    new Ee(28, new me(19, 47), new me(10, 48)),
                    new Ee(30, new me(15, 24), new me(25, 25)),
                    new Ee(30, new me(23, 15), new me(25, 16))
               ),
               new Ie(
                    31,
                    Int32Array.from([6, 30, 56, 82, 108, 134]),
                    new Ee(30, new me(13, 115), new me(3, 116)),
                    new Ee(28, new me(2, 46), new me(29, 47)),
                    new Ee(30, new me(42, 24), new me(1, 25)),
                    new Ee(30, new me(23, 15), new me(28, 16))
               ),
               new Ie(
                    32,
                    Int32Array.from([6, 34, 60, 86, 112, 138]),
                    new Ee(30, new me(17, 115)),
                    new Ee(28, new me(10, 46), new me(23, 47)),
                    new Ee(30, new me(10, 24), new me(35, 25)),
                    new Ee(30, new me(19, 15), new me(35, 16))
               ),
               new Ie(
                    33,
                    Int32Array.from([6, 30, 58, 86, 114, 142]),
                    new Ee(30, new me(17, 115), new me(1, 116)),
                    new Ee(28, new me(14, 46), new me(21, 47)),
                    new Ee(30, new me(29, 24), new me(19, 25)),
                    new Ee(30, new me(11, 15), new me(46, 16))
               ),
               new Ie(
                    34,
                    Int32Array.from([6, 34, 62, 90, 118, 146]),
                    new Ee(30, new me(13, 115), new me(6, 116)),
                    new Ee(28, new me(14, 46), new me(23, 47)),
                    new Ee(30, new me(44, 24), new me(7, 25)),
                    new Ee(30, new me(59, 16), new me(1, 17))
               ),
               new Ie(
                    35,
                    Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
                    new Ee(30, new me(12, 121), new me(7, 122)),
                    new Ee(28, new me(12, 47), new me(26, 48)),
                    new Ee(30, new me(39, 24), new me(14, 25)),
                    new Ee(30, new me(22, 15), new me(41, 16))
               ),
               new Ie(
                    36,
                    Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
                    new Ee(30, new me(6, 121), new me(14, 122)),
                    new Ee(28, new me(6, 47), new me(34, 48)),
                    new Ee(30, new me(46, 24), new me(10, 25)),
                    new Ee(30, new me(2, 15), new me(64, 16))
               ),
               new Ie(
                    37,
                    Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
                    new Ee(30, new me(17, 122), new me(4, 123)),
                    new Ee(28, new me(29, 46), new me(14, 47)),
                    new Ee(30, new me(49, 24), new me(10, 25)),
                    new Ee(30, new me(24, 15), new me(46, 16))
               ),
               new Ie(
                    38,
                    Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
                    new Ee(30, new me(4, 122), new me(18, 123)),
                    new Ee(28, new me(13, 46), new me(32, 47)),
                    new Ee(30, new me(48, 24), new me(14, 25)),
                    new Ee(30, new me(42, 15), new me(32, 16))
               ),
               new Ie(
                    39,
                    Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
                    new Ee(30, new me(20, 117), new me(4, 118)),
                    new Ee(28, new me(40, 47), new me(7, 48)),
                    new Ee(30, new me(43, 24), new me(22, 25)),
                    new Ee(30, new me(10, 15), new me(67, 16))
               ),
               new Ie(
                    40,
                    Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
                    new Ee(30, new me(19, 118), new me(6, 119)),
                    new Ee(28, new me(18, 47), new me(31, 48)),
                    new Ee(30, new me(34, 24), new me(34, 25)),
                    new Ee(30, new me(20, 15), new me(61, 16))
               ),
          ]),
          (function (t) {
               (t[(t.DATA_MASK_000 = 0)] = 'DATA_MASK_000'),
                    (t[(t.DATA_MASK_001 = 1)] = 'DATA_MASK_001'),
                    (t[(t.DATA_MASK_010 = 2)] = 'DATA_MASK_010'),
                    (t[(t.DATA_MASK_011 = 3)] = 'DATA_MASK_011'),
                    (t[(t.DATA_MASK_100 = 4)] = 'DATA_MASK_100'),
                    (t[(t.DATA_MASK_101 = 5)] = 'DATA_MASK_101'),
                    (t[(t.DATA_MASK_110 = 6)] = 'DATA_MASK_110'),
                    (t[(t.DATA_MASK_111 = 7)] = 'DATA_MASK_111');
          })(X || (X = {}));
     class _e {
          constructor(t, e) {
               (this.value = t), (this.isMasked = e);
          }
          unmaskBitMatrix(t, e) {
               for (let r = 0; r < e; r++) for (let n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r);
          }
     }
     _e.values = new Map([
          [X.DATA_MASK_000, new _e(X.DATA_MASK_000, (t, e) => !((t + e) & 1))],
          [X.DATA_MASK_001, new _e(X.DATA_MASK_001, (t, e) => !(1 & t))],
          [X.DATA_MASK_010, new _e(X.DATA_MASK_010, (t, e) => e % 3 == 0)],
          [X.DATA_MASK_011, new _e(X.DATA_MASK_011, (t, e) => (t + e) % 3 == 0)],
          [X.DATA_MASK_100, new _e(X.DATA_MASK_100, (t, e) => !((Math.floor(t / 2) + Math.floor(e / 3)) & 1))],
          [X.DATA_MASK_101, new _e(X.DATA_MASK_101, (t, e) => (t * e) % 6 == 0)],
          [X.DATA_MASK_110, new _e(X.DATA_MASK_110, (t, e) => (t * e) % 6 < 3)],
          [X.DATA_MASK_111, new _e(X.DATA_MASK_111, (t, e) => !((t + e + ((t * e) % 3)) & 1))],
     ]);
     class Se {
          constructor(t) {
               const e = t.getHeight();
               if (e < 21 || 1 != (3 & e)) throw new m();
               this.bitMatrix = t;
          }
          readFormatInformation() {
               if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
               let t = 0;
               for (let e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
               (t = this.copyBit(7, 8, t)), (t = this.copyBit(8, 8, t)), (t = this.copyBit(8, 7, t));
               for (let e = 5; e >= 0; e--) t = this.copyBit(8, e, t);
               const e = this.bitMatrix.getHeight();
               let r = 0;
               const n = e - 7;
               for (let t = e - 1; t >= n; t--) r = this.copyBit(8, t, r);
               for (let t = e - 8; t < e; t++) r = this.copyBit(t, 8, r);
               if (((this.parsedFormatInfo = Ae.decodeFormatInformation(t, r)), null !== this.parsedFormatInfo)) return this.parsedFormatInfo;
               throw new m();
          }
          readVersion() {
               if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
               const t = this.bitMatrix.getHeight(),
                    e = Math.floor((t - 17) / 4);
               if (e <= 6) return Ie.getVersionForNumber(e);
               let r = 0;
               const n = t - 11;
               for (let e = 5; e >= 0; e--) for (let i = t - 9; i >= n; i--) r = this.copyBit(i, e, r);
               let i = Ie.decodeVersionInformation(r);
               if (null !== i && i.getDimensionForVersion() === t) return (this.parsedVersion = i), i;
               r = 0;
               for (let e = 5; e >= 0; e--) for (let i = t - 9; i >= n; i--) r = this.copyBit(e, i, r);
               if (((i = Ie.decodeVersionInformation(r)), null !== i && i.getDimensionForVersion() === t)) return (this.parsedVersion = i), i;
               throw new m();
          }
          copyBit(t, e, r) {
               return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? (r << 1) | 1 : r << 1;
          }
          readCodewords() {
               const t = this.readFormatInformation(),
                    e = this.readVersion(),
                    r = _e.values.get(t.getDataMask()),
                    n = this.bitMatrix.getHeight();
               r.unmaskBitMatrix(this.bitMatrix, n);
               const i = e.buildFunctionPattern();
               let s = !0;
               const o = new Uint8Array(e.getTotalCodewords());
               let a = 0,
                    h = 0,
                    l = 0;
               for (let t = n - 1; t > 0; t -= 2) {
                    6 === t && t--;
                    for (let e = 0; e < n; e++) {
                         const r = s ? n - 1 - e : e;
                         for (let e = 0; e < 2; e++)
                              i.get(t - e, r) || (l++, (h <<= 1), this.bitMatrix.get(t - e, r) && (h |= 1), 8 === l && ((o[a++] = h), (l = 0), (h = 0)));
                    }
                    s = !s;
               }
               if (a !== e.getTotalCodewords()) throw new m();
               return o;
          }
          remask() {
               if (null === this.parsedFormatInfo) return;
               const t = _e.values.get(this.parsedFormatInfo.getDataMask()),
                    e = this.bitMatrix.getHeight();
               t.unmaskBitMatrix(this.bitMatrix, e);
          }
          setMirror(t) {
               (this.parsedVersion = null), (this.parsedFormatInfo = null), (this.isMirror = t);
          }
          mirror() {
               const t = this.bitMatrix;
               for (let e = 0, r = t.getWidth(); e < r; e++)
                    for (let r = e + 1, n = t.getHeight(); r < n; r++) t.get(e, r) !== t.get(r, e) && (t.flip(r, e), t.flip(e, r));
          }
     }
     class pe {
          constructor(t, e) {
               (this.numDataCodewords = t), (this.codewords = e);
          }
          static getDataBlocks(t, e, r) {
               if (t.length !== e.getTotalCodewords()) throw new a();
               const n = e.getECBlocksForLevel(r);
               let i = 0;
               const s = n.getECBlocks();
               for (const t of s) i += t.getCount();
               const o = new Array(i);
               let h = 0;
               for (const t of s)
                    for (let e = 0; e < t.getCount(); e++) {
                         const e = t.getDataCodewords(),
                              r = n.getECCodewordsPerBlock() + e;
                         o[h++] = new pe(e, new Uint8Array(r));
                    }
               const l = o[0].codewords.length;
               let c = o.length - 1;
               for (; c >= 0; ) {
                    if (o[c].codewords.length === l) break;
                    c--;
               }
               c++;
               const d = l - n.getECCodewordsPerBlock();
               let u = 0;
               for (let e = 0; e < d; e++) for (let r = 0; r < h; r++) o[r].codewords[e] = t[u++];
               for (let e = c; e < h; e++) o[e].codewords[d] = t[u++];
               const g = o[0].codewords.length;
               for (let e = d; e < g; e++)
                    for (let r = 0; r < h; r++) {
                         const n = r < c ? e : e + 1;
                         o[r].codewords[n] = t[u++];
                    }
               return o;
          }
          getNumDataCodewords() {
               return this.numDataCodewords;
          }
          getCodewords() {
               return this.codewords;
          }
     }
     !(function (t) {
          (t[(t.TERMINATOR = 0)] = 'TERMINATOR'),
               (t[(t.NUMERIC = 1)] = 'NUMERIC'),
               (t[(t.ALPHANUMERIC = 2)] = 'ALPHANUMERIC'),
               (t[(t.STRUCTURED_APPEND = 3)] = 'STRUCTURED_APPEND'),
               (t[(t.BYTE = 4)] = 'BYTE'),
               (t[(t.ECI = 5)] = 'ECI'),
               (t[(t.KANJI = 6)] = 'KANJI'),
               (t[(t.FNC1_FIRST_POSITION = 7)] = 'FNC1_FIRST_POSITION'),
               (t[(t.FNC1_SECOND_POSITION = 8)] = 'FNC1_SECOND_POSITION'),
               (t[(t.HANZI = 9)] = 'HANZI');
     })(G || (G = {}));
     class Te {
          constructor(t, e, r, n) {
               (this.value = t),
                    (this.stringValue = e),
                    (this.characterCountBitsForVersions = r),
                    (this.bits = n),
                    Te.FOR_BITS.set(n, this),
                    Te.FOR_VALUE.set(t, this);
          }
          static forBits(t) {
               const e = Te.FOR_BITS.get(t);
               if (void 0 === e) throw new a();
               return e;
          }
          getCharacterCountBits(t) {
               const e = t.getVersionNumber();
               let r;
               return (r = e <= 9 ? 0 : e <= 26 ? 1 : 2), this.characterCountBitsForVersions[r];
          }
          getValue() {
               return this.value;
          }
          getBits() {
               return this.bits;
          }
          equals(t) {
               if (!(t instanceof Te)) return !1;
               const e = t;
               return this.value === e.value;
          }
          toString() {
               return this.stringValue;
          }
     }
     (Te.FOR_BITS = new Map()),
          (Te.FOR_VALUE = new Map()),
          (Te.TERMINATOR = new Te(G.TERMINATOR, 'TERMINATOR', Int32Array.from([0, 0, 0]), 0)),
          (Te.NUMERIC = new Te(G.NUMERIC, 'NUMERIC', Int32Array.from([10, 12, 14]), 1)),
          (Te.ALPHANUMERIC = new Te(G.ALPHANUMERIC, 'ALPHANUMERIC', Int32Array.from([9, 11, 13]), 2)),
          (Te.STRUCTURED_APPEND = new Te(G.STRUCTURED_APPEND, 'STRUCTURED_APPEND', Int32Array.from([0, 0, 0]), 3)),
          (Te.BYTE = new Te(G.BYTE, 'BYTE', Int32Array.from([8, 16, 16]), 4)),
          (Te.ECI = new Te(G.ECI, 'ECI', Int32Array.from([0, 0, 0]), 7)),
          (Te.KANJI = new Te(G.KANJI, 'KANJI', Int32Array.from([8, 10, 12]), 8)),
          (Te.FNC1_FIRST_POSITION = new Te(G.FNC1_FIRST_POSITION, 'FNC1_FIRST_POSITION', Int32Array.from([0, 0, 0]), 5)),
          (Te.FNC1_SECOND_POSITION = new Te(G.FNC1_SECOND_POSITION, 'FNC1_SECOND_POSITION', Int32Array.from([0, 0, 0]), 9)),
          (Te.HANZI = new Te(G.HANZI, 'HANZI', Int32Array.from([8, 10, 12]), 13));
     class Re {
          static decode(t, e, r, n) {
               const i = new de(t);
               let s = new T();
               const o = new Array();
               let a = -1,
                    h = -1;
               try {
                    let t,
                         r = null,
                         l = !1;
                    do {
                         if (i.available() < 4) t = Te.TERMINATOR;
                         else {
                              const e = i.readBits(4);
                              t = Te.forBits(e);
                         }
                         switch (t) {
                              case Te.TERMINATOR:
                                   break;
                              case Te.FNC1_FIRST_POSITION:
                              case Te.FNC1_SECOND_POSITION:
                                   l = !0;
                                   break;
                              case Te.STRUCTURED_APPEND:
                                   if (i.available() < 16) throw new m();
                                   (a = i.readBits(8)), (h = i.readBits(8));
                                   break;
                              case Te.ECI:
                                   const c = Re.parseECIValue(i);
                                   if (((r = I.getCharacterSetECIByValue(c)), null === r)) throw new m();
                                   break;
                              case Te.HANZI:
                                   const d = i.readBits(4),
                                        u = i.readBits(t.getCharacterCountBits(e));
                                   d === Re.GB2312_SUBSET && Re.decodeHanziSegment(i, s, u);
                                   break;
                              default:
                                   const g = i.readBits(t.getCharacterCountBits(e));
                                   switch (t) {
                                        case Te.NUMERIC:
                                             Re.decodeNumericSegment(i, s, g);
                                             break;
                                        case Te.ALPHANUMERIC:
                                             Re.decodeAlphanumericSegment(i, s, g, l);
                                             break;
                                        case Te.BYTE:
                                             Re.decodeByteSegment(i, s, g, r, o, n);
                                             break;
                                        case Te.KANJI:
                                             Re.decodeKanjiSegment(i, s, g);
                                             break;
                                        default:
                                             throw new m();
                                   }
                         }
                    } while (t !== Te.TERMINATOR);
               } catch (t) {
                    throw new m();
               }
               return new Y(t, s.toString(), 0 === o.length ? null : o, null === r ? null : r.toString(), a, h);
          }
          static decodeHanziSegment(t, e, r) {
               if (13 * r > t.available()) throw new m();
               const n = new Uint8Array(2 * r);
               let i = 0;
               for (; r > 0; ) {
                    const e = t.readBits(13);
                    let s = (((e / 96) << 8) & 4294967295) | e % 96;
                    (s += s < 959 ? 41377 : 42657), (n[i] = (s >> 8) & 255), (n[i + 1] = 255 & s), (i += 2), r--;
               }
               try {
                    e.append(S.decode(n, p.GB2312));
               } catch (t) {
                    throw new m(t);
               }
          }
          static decodeKanjiSegment(t, e, r) {
               if (13 * r > t.available()) throw new m();
               const n = new Uint8Array(2 * r);
               let i = 0;
               for (; r > 0; ) {
                    const e = t.readBits(13);
                    let s = (((e / 192) << 8) & 4294967295) | e % 192;
                    (s += s < 7936 ? 33088 : 49472), (n[i] = s >> 8), (n[i + 1] = s), (i += 2), r--;
               }
               try {
                    e.append(S.decode(n, p.SHIFT_JIS));
               } catch (t) {
                    throw new m(t);
               }
          }
          static decodeByteSegment(t, e, r, n, i, s) {
               if (8 * r > t.available()) throw new m();
               const o = new Uint8Array(r);
               for (let e = 0; e < r; e++) o[e] = t.readBits(8);
               let a;
               a = null === n ? p.guessEncoding(o, s) : n.getName();
               try {
                    e.append(S.decode(o, a));
               } catch (t) {
                    throw new m(t);
               }
               i.push(o);
          }
          static toAlphaNumericChar(t) {
               if (t >= Re.ALPHANUMERIC_CHARS.length) throw new m();
               return Re.ALPHANUMERIC_CHARS[t];
          }
          static decodeAlphanumericSegment(t, e, r, n) {
               const i = e.length();
               for (; r > 1; ) {
                    if (t.available() < 11) throw new m();
                    const n = t.readBits(11);
                    e.append(Re.toAlphaNumericChar(Math.floor(n / 45))), e.append(Re.toAlphaNumericChar(n % 45)), (r -= 2);
               }
               if (1 === r) {
                    if (t.available() < 6) throw new m();
                    e.append(Re.toAlphaNumericChar(t.readBits(6)));
               }
               if (n)
                    for (let t = i; t < e.length(); t++)
                         '%' === e.charAt(t) &&
                              (t < e.length() - 1 && '%' === e.charAt(t + 1) ? e.deleteCharAt(t + 1) : e.setCharAt(t, String.fromCharCode(29)));
          }
          static decodeNumericSegment(t, e, r) {
               for (; r >= 3; ) {
                    if (t.available() < 10) throw new m();
                    const n = t.readBits(10);
                    if (n >= 1e3) throw new m();
                    e.append(Re.toAlphaNumericChar(Math.floor(n / 100))),
                         e.append(Re.toAlphaNumericChar(Math.floor(n / 10) % 10)),
                         e.append(Re.toAlphaNumericChar(n % 10)),
                         (r -= 3);
               }
               if (2 === r) {
                    if (t.available() < 7) throw new m();
                    const r = t.readBits(7);
                    if (r >= 100) throw new m();
                    e.append(Re.toAlphaNumericChar(Math.floor(r / 10))), e.append(Re.toAlphaNumericChar(r % 10));
               } else if (1 === r) {
                    if (t.available() < 4) throw new m();
                    const r = t.readBits(4);
                    if (r >= 10) throw new m();
                    e.append(Re.toAlphaNumericChar(r));
               }
          }
          static parseECIValue(t) {
               const e = t.readBits(8);
               if (!(128 & e)) return 127 & e;
               if (128 == (192 & e)) {
                    return (((63 & e) << 8) & 4294967295) | t.readBits(8);
               }
               if (192 == (224 & e)) {
                    return (((31 & e) << 16) & 4294967295) | t.readBits(16);
               }
               throw new m();
          }
     }
     (Re.ALPHANUMERIC_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'), (Re.GB2312_SUBSET = 1);
     class Ne {
          constructor(t) {
               this.mirrored = t;
          }
          isMirrored() {
               return this.mirrored;
          }
          applyMirroredCorrection(t) {
               if (!this.mirrored || null === t || t.length < 3) return;
               const e = t[0];
               (t[0] = t[2]), (t[2] = e);
          }
     }
     class ye {
          constructor() {
               this.rsDecoder = new $(Q.QR_CODE_FIELD_256);
          }
          decodeBooleanArray(t, e) {
               return this.decodeBitMatrix(R.parseFromBooleanArray(t), e);
          }
          decodeBitMatrix(t, e) {
               const r = new Se(t);
               let n = null;
               try {
                    return this.decodeBitMatrixParser(r, e);
               } catch (t) {
                    n = t;
               }
               try {
                    r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
                    const t = this.decodeBitMatrixParser(r, e);
                    return t.setOther(new Ne(!0)), t;
               } catch (t) {
                    if (null !== n) throw n;
                    throw t;
               }
          }
          decodeBitMatrixParser(t, e) {
               const r = t.readVersion(),
                    n = t.readFormatInformation().getErrorCorrectionLevel(),
                    i = t.readCodewords(),
                    s = pe.getDataBlocks(i, r, n);
               let o = 0;
               for (const t of s) o += t.getNumDataCodewords();
               const a = new Uint8Array(o);
               let h = 0;
               for (const t of s) {
                    const e = t.getCodewords(),
                         r = t.getNumDataCodewords();
                    this.correctErrors(e, r);
                    for (let t = 0; t < r; t++) a[h++] = e[t];
               }
               return Re.decode(a, r, n, e);
          }
          correctErrors(t, e) {
               const r = new Int32Array(t);
               try {
                    this.rsDecoder.decode(r, t.length - e);
               } catch (t) {
                    throw new l();
               }
               for (let n = 0; n < e; n++) t[n] = r[n];
          }
     }
     class De extends nt {
          constructor(t, e, r) {
               super(t, e), (this.estimatedModuleSize = r);
          }
          aboutEquals(t, e, r) {
               if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                    const e = Math.abs(t - this.estimatedModuleSize);
                    return e <= 1 || e <= this.estimatedModuleSize;
               }
               return !1;
          }
          combineEstimate(t, e, r) {
               const n = (this.getX() + e) / 2,
                    i = (this.getY() + t) / 2,
                    s = (this.estimatedModuleSize + r) / 2;
               return new De(n, i, s);
          }
     }
     class Oe {
          constructor(t, e, r, n, i, s, o) {
               (this.image = t),
                    (this.startX = e),
                    (this.startY = r),
                    (this.width = n),
                    (this.height = i),
                    (this.moduleSize = s),
                    (this.resultPointCallback = o),
                    (this.possibleCenters = []),
                    (this.crossCheckStateCount = new Int32Array(3));
          }
          find() {
               const t = this.startX,
                    e = this.height,
                    r = t + this.width,
                    n = this.startY + e / 2,
                    i = new Int32Array(3),
                    s = this.image;
               for (let o = 0; o < e; o++) {
                    const e = n + (1 & o ? -Math.floor((o + 1) / 2) : Math.floor((o + 1) / 2));
                    (i[0] = 0), (i[1] = 0), (i[2] = 0);
                    let a = t;
                    for (; a < r && !s.get(a, e); ) a++;
                    let h = 0;
                    for (; a < r; ) {
                         if (s.get(a, e))
                              if (1 === h) i[1]++;
                              else if (2 === h) {
                                   if (this.foundPatternCross(i)) {
                                        const t = this.handlePossibleCenter(i, e, a);
                                        if (null !== t) return t;
                                   }
                                   (i[0] = i[2]), (i[1] = 1), (i[2] = 0), (h = 1);
                              } else i[++h]++;
                         else 1 === h && h++, i[h]++;
                         a++;
                    }
                    if (this.foundPatternCross(i)) {
                         const t = this.handlePossibleCenter(i, e, r);
                         if (null !== t) return t;
                    }
               }
               if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
               throw new N();
          }
          static centerFromEnd(t, e) {
               return e - t[2] - t[1] / 2;
          }
          foundPatternCross(t) {
               const e = this.moduleSize,
                    r = e / 2;
               for (let n = 0; n < 3; n++) if (Math.abs(e - t[n]) >= r) return !1;
               return !0;
          }
          crossCheckVertical(t, e, r, n) {
               const i = this.image,
                    s = i.getHeight(),
                    o = this.crossCheckStateCount;
               (o[0] = 0), (o[1] = 0), (o[2] = 0);
               let a = t;
               for (; a >= 0 && i.get(e, a) && o[1] <= r; ) o[1]++, a--;
               if (a < 0 || o[1] > r) return NaN;
               for (; a >= 0 && !i.get(e, a) && o[0] <= r; ) o[0]++, a--;
               if (o[0] > r) return NaN;
               for (a = t + 1; a < s && i.get(e, a) && o[1] <= r; ) o[1]++, a++;
               if (a === s || o[1] > r) return NaN;
               for (; a < s && !i.get(e, a) && o[2] <= r; ) o[2]++, a++;
               if (o[2] > r) return NaN;
               const h = o[0] + o[1] + o[2];
               return 5 * Math.abs(h - n) >= 2 * n ? NaN : this.foundPatternCross(o) ? Oe.centerFromEnd(o, a) : NaN;
          }
          handlePossibleCenter(t, e, r) {
               const n = t[0] + t[1] + t[2],
                    i = Oe.centerFromEnd(t, r),
                    s = this.crossCheckVertical(e, i, 2 * t[1], n);
               if (!isNaN(s)) {
                    const e = (t[0] + t[1] + t[2]) / 3;
                    for (const t of this.possibleCenters) if (t.aboutEquals(e, s, i)) return t.combineEstimate(s, i, e);
                    const r = new De(i, s, e);
                    this.possibleCenters.push(r),
                         null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(r);
               }
               return null;
          }
     }
     class Me extends nt {
          constructor(t, e, r, n) {
               super(t, e), (this.estimatedModuleSize = r), (this.count = n), void 0 === n && (this.count = 1);
          }
          getEstimatedModuleSize() {
               return this.estimatedModuleSize;
          }
          getCount() {
               return this.count;
          }
          aboutEquals(t, e, r) {
               if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                    const e = Math.abs(t - this.estimatedModuleSize);
                    return e <= 1 || e <= this.estimatedModuleSize;
               }
               return !1;
          }
          combineEstimate(t, e, r) {
               const n = this.count + 1,
                    i = (this.count * this.getX() + e) / n,
                    s = (this.count * this.getY() + t) / n,
                    o = (this.count * this.estimatedModuleSize + r) / n;
               return new Me(i, s, o, n);
          }
     }
     class be {
          constructor(t) {
               (this.bottomLeft = t[0]), (this.topLeft = t[1]), (this.topRight = t[2]);
          }
          getBottomLeft() {
               return this.bottomLeft;
          }
          getTopLeft() {
               return this.topLeft;
          }
          getTopRight() {
               return this.topRight;
          }
     }
     class Be {
          constructor(t, e) {
               (this.image = t),
                    (this.resultPointCallback = e),
                    (this.possibleCenters = []),
                    (this.crossCheckStateCount = new Int32Array(5)),
                    (this.resultPointCallback = e);
          }
          getImage() {
               return this.image;
          }
          getPossibleCenters() {
               return this.possibleCenters;
          }
          find(t) {
               const e = null != t && void 0 !== t.get(E.TRY_HARDER),
                    r = null != t && void 0 !== t.get(E.PURE_BARCODE),
                    n = this.image,
                    i = n.getHeight(),
                    s = n.getWidth();
               let o = Math.floor((3 * i) / (4 * Be.MAX_MODULES));
               (o < Be.MIN_SKIP || e) && (o = Be.MIN_SKIP);
               let a = !1;
               const h = new Int32Array(5);
               for (let t = o - 1; t < i && !a; t += o) {
                    (h[0] = 0), (h[1] = 0), (h[2] = 0), (h[3] = 0), (h[4] = 0);
                    let e = 0;
                    for (let i = 0; i < s; i++)
                         if (n.get(i, t)) 1 & ~e || e++, h[e]++;
                         else if (1 & e) h[e]++;
                         else if (4 === e)
                              if (Be.foundPatternCross(h)) {
                                   if (!0 !== this.handlePossibleCenter(h, t, i, r)) {
                                        (h[0] = h[2]), (h[1] = h[3]), (h[2] = h[4]), (h[3] = 1), (h[4] = 0), (e = 3);
                                        continue;
                                   }
                                   if (((o = 2), !0 === this.hasSkipped)) a = this.haveMultiplyConfirmedCenters();
                                   else {
                                        const e = this.findRowSkip();
                                        e > h[2] && ((t += e - h[2] - o), (i = s - 1));
                                   }
                                   (e = 0), (h[0] = 0), (h[1] = 0), (h[2] = 0), (h[3] = 0), (h[4] = 0);
                              } else (h[0] = h[2]), (h[1] = h[3]), (h[2] = h[4]), (h[3] = 1), (h[4] = 0), (e = 3);
                         else h[++e]++;
                    if (Be.foundPatternCross(h)) {
                         !0 === this.handlePossibleCenter(h, t, s, r) && ((o = h[0]), this.hasSkipped && (a = this.haveMultiplyConfirmedCenters()));
                    }
               }
               const l = this.selectBestPatterns();
               return nt.orderBestPatterns(l), new be(l);
          }
          static centerFromEnd(t, e) {
               return e - t[4] - t[3] - t[2] / 2;
          }
          static foundPatternCross(t) {
               let e = 0;
               for (let r = 0; r < 5; r++) {
                    const n = t[r];
                    if (0 === n) return !1;
                    e += n;
               }
               if (e < 7) return !1;
               const r = e / 7,
                    n = r / 2;
               return Math.abs(r - t[0]) < n && Math.abs(r - t[1]) < n && Math.abs(3 * r - t[2]) < 3 * n && Math.abs(r - t[3]) < n && Math.abs(r - t[4]) < n;
          }
          getCrossCheckStateCount() {
               const t = this.crossCheckStateCount;
               return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), t;
          }
          crossCheckDiagonal(t, e, r, n) {
               const i = this.getCrossCheckStateCount();
               let s = 0;
               const o = this.image;
               for (; t >= s && e >= s && o.get(e - s, t - s); ) i[2]++, s++;
               if (t < s || e < s) return !1;
               for (; t >= s && e >= s && !o.get(e - s, t - s) && i[1] <= r; ) i[1]++, s++;
               if (t < s || e < s || i[1] > r) return !1;
               for (; t >= s && e >= s && o.get(e - s, t - s) && i[0] <= r; ) i[0]++, s++;
               if (i[0] > r) return !1;
               const a = o.getHeight(),
                    h = o.getWidth();
               for (s = 1; t + s < a && e + s < h && o.get(e + s, t + s); ) i[2]++, s++;
               if (t + s >= a || e + s >= h) return !1;
               for (; t + s < a && e + s < h && !o.get(e + s, t + s) && i[3] < r; ) i[3]++, s++;
               if (t + s >= a || e + s >= h || i[3] >= r) return !1;
               for (; t + s < a && e + s < h && o.get(e + s, t + s) && i[4] < r; ) i[4]++, s++;
               if (i[4] >= r) return !1;
               const l = i[0] + i[1] + i[2] + i[3] + i[4];
               return Math.abs(l - n) < 2 * n && Be.foundPatternCross(i);
          }
          crossCheckVertical(t, e, r, n) {
               const i = this.image,
                    s = i.getHeight(),
                    o = this.getCrossCheckStateCount();
               let a = t;
               for (; a >= 0 && i.get(e, a); ) o[2]++, a--;
               if (a < 0) return NaN;
               for (; a >= 0 && !i.get(e, a) && o[1] <= r; ) o[1]++, a--;
               if (a < 0 || o[1] > r) return NaN;
               for (; a >= 0 && i.get(e, a) && o[0] <= r; ) o[0]++, a--;
               if (o[0] > r) return NaN;
               for (a = t + 1; a < s && i.get(e, a); ) o[2]++, a++;
               if (a === s) return NaN;
               for (; a < s && !i.get(e, a) && o[3] < r; ) o[3]++, a++;
               if (a === s || o[3] >= r) return NaN;
               for (; a < s && i.get(e, a) && o[4] < r; ) o[4]++, a++;
               if (o[4] >= r) return NaN;
               const h = o[0] + o[1] + o[2] + o[3] + o[4];
               return 5 * Math.abs(h - n) >= 2 * n ? NaN : Be.foundPatternCross(o) ? Be.centerFromEnd(o, a) : NaN;
          }
          crossCheckHorizontal(t, e, r, n) {
               const i = this.image,
                    s = i.getWidth(),
                    o = this.getCrossCheckStateCount();
               let a = t;
               for (; a >= 0 && i.get(a, e); ) o[2]++, a--;
               if (a < 0) return NaN;
               for (; a >= 0 && !i.get(a, e) && o[1] <= r; ) o[1]++, a--;
               if (a < 0 || o[1] > r) return NaN;
               for (; a >= 0 && i.get(a, e) && o[0] <= r; ) o[0]++, a--;
               if (o[0] > r) return NaN;
               for (a = t + 1; a < s && i.get(a, e); ) o[2]++, a++;
               if (a === s) return NaN;
               for (; a < s && !i.get(a, e) && o[3] < r; ) o[3]++, a++;
               if (a === s || o[3] >= r) return NaN;
               for (; a < s && i.get(a, e) && o[4] < r; ) o[4]++, a++;
               if (o[4] >= r) return NaN;
               const h = o[0] + o[1] + o[2] + o[3] + o[4];
               return 5 * Math.abs(h - n) >= n ? NaN : Be.foundPatternCross(o) ? Be.centerFromEnd(o, a) : NaN;
          }
          handlePossibleCenter(t, e, r, n) {
               const i = t[0] + t[1] + t[2] + t[3] + t[4];
               let s = Be.centerFromEnd(t, r),
                    o = this.crossCheckVertical(e, Math.floor(s), t[2], i);
               if (
                    !isNaN(o) &&
                    ((s = this.crossCheckHorizontal(Math.floor(s), Math.floor(o), t[2], i)),
                    !isNaN(s) && (!n || this.crossCheckDiagonal(Math.floor(o), Math.floor(s), t[2], i)))
               ) {
                    const t = i / 7;
                    let e = !1;
                    const r = this.possibleCenters;
                    for (let n = 0, i = r.length; n < i; n++) {
                         const i = r[n];
                         if (i.aboutEquals(t, o, s)) {
                              (r[n] = i.combineEstimate(o, s, t)), (e = !0);
                              break;
                         }
                    }
                    if (!e) {
                         const e = new Me(s, o, t);
                         r.push(e),
                              null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(e);
                    }
                    return !0;
               }
               return !1;
          }
          findRowSkip() {
               if (this.possibleCenters.length <= 1) return 0;
               let t = null;
               for (const e of this.possibleCenters)
                    if (e.getCount() >= Be.CENTER_QUORUM) {
                         if (null != t) return (this.hasSkipped = !0), Math.floor((Math.abs(t.getX() - e.getX()) - Math.abs(t.getY() - e.getY())) / 2);
                         t = e;
                    }
               return 0;
          }
          haveMultiplyConfirmedCenters() {
               let t = 0,
                    e = 0;
               const r = this.possibleCenters.length;
               for (const r of this.possibleCenters) r.getCount() >= Be.CENTER_QUORUM && (t++, (e += r.getEstimatedModuleSize()));
               if (t < 3) return !1;
               const n = e / r;
               let i = 0;
               for (const t of this.possibleCenters) i += Math.abs(t.getEstimatedModuleSize() - n);
               return i <= 0.05 * e;
          }
          selectBestPatterns() {
               const t = this.possibleCenters.length;
               if (t < 3) throw new N();
               const e = this.possibleCenters;
               let r;
               if (t > 3) {
                    let n = 0,
                         i = 0;
                    for (const t of this.possibleCenters) {
                         const e = t.getEstimatedModuleSize();
                         (n += e), (i += e * e);
                    }
                    r = n / t;
                    let s = Math.sqrt(i / t - r * r);
                    e.sort((t, e) => {
                         const n = Math.abs(e.getEstimatedModuleSize() - r),
                              i = Math.abs(t.getEstimatedModuleSize() - r);
                         return n < i ? -1 : n > i ? 1 : 0;
                    });
                    const o = Math.max(0.2 * r, s);
                    for (let t = 0; t < e.length && e.length > 3; t++) {
                         const n = e[t];
                         Math.abs(n.getEstimatedModuleSize() - r) > o && (e.splice(t, 1), t--);
                    }
               }
               if (e.length > 3) {
                    let t = 0;
                    for (const r of e) t += r.getEstimatedModuleSize();
                    (r = t / e.length),
                         e.sort((t, e) => {
                              if (e.getCount() === t.getCount()) {
                                   const n = Math.abs(e.getEstimatedModuleSize() - r),
                                        i = Math.abs(t.getEstimatedModuleSize() - r);
                                   return n < i ? 1 : n > i ? -1 : 0;
                              }
                              return e.getCount() - t.getCount();
                         }),
                         e.splice(3);
               }
               return [e[0], e[1], e[2]];
          }
     }
     (Be.CENTER_QUORUM = 2), (Be.MIN_SKIP = 3), (Be.MAX_MODULES = 57);
     class Pe {
          constructor(t) {
               this.image = t;
          }
          getImage() {
               return this.image;
          }
          getResultPointCallback() {
               return this.resultPointCallback;
          }
          detect(t) {
               this.resultPointCallback = null == t ? null : t.get(E.NEED_RESULT_POINT_CALLBACK);
               const e = new Be(this.image, this.resultPointCallback).find(t);
               return this.processFinderPatternInfo(e);
          }
          processFinderPatternInfo(t) {
               const e = t.getTopLeft(),
                    r = t.getTopRight(),
                    n = t.getBottomLeft(),
                    i = this.calculateModuleSize(e, r, n);
               if (i < 1) throw new N('No pattern found in proccess finder.');
               const s = Pe.computeDimension(e, r, n, i),
                    o = Ie.getProvisionalVersionForDimension(s),
                    a = o.getDimensionForVersion() - 7;
               let h = null;
               if (o.getAlignmentPatternCenters().length > 0) {
                    const t = r.getX() - e.getX() + n.getX(),
                         s = r.getY() - e.getY() + n.getY(),
                         o = 1 - 3 / a,
                         l = Math.floor(e.getX() + o * (t - e.getX())),
                         c = Math.floor(e.getY() + o * (s - e.getY()));
                    for (let t = 4; t <= 16; t <<= 1)
                         try {
                              h = this.findAlignmentInRegion(i, l, c, t);
                              break;
                         } catch (t) {
                              if (!(t instanceof N)) throw t;
                         }
               }
               const l = Pe.createTransform(e, r, n, h, s),
                    c = Pe.sampleGrid(this.image, l, s);
               let d;
               return (d = null === h ? [n, e, r] : [n, e, r, h]), new it(c, d);
          }
          static createTransform(t, e, r, n, i) {
               const s = i - 3.5;
               let o, a, h, l;
               return (
                    null !== n
                         ? ((o = n.getX()), (a = n.getY()), (h = s - 3), (l = h))
                         : ((o = e.getX() - t.getX() + r.getX()), (a = e.getY() - t.getY() + r.getY()), (h = s), (l = s)),
                    ht.quadrilateralToQuadrilateral(3.5, 3.5, s, 3.5, h, l, 3.5, s, t.getX(), t.getY(), e.getX(), e.getY(), o, a, r.getX(), r.getY())
               );
          }
          static sampleGrid(t, e, r) {
               return ct.getInstance().sampleGridWithTransform(t, r, r, e);
          }
          static computeDimension(t, e, r, n) {
               const i = et.round(nt.distance(t, e) / n),
                    s = et.round(nt.distance(t, r) / n);
               let o = Math.floor((i + s) / 2) + 7;
               switch (3 & o) {
                    case 0:
                         o++;
                         break;
                    case 2:
                         o--;
                         break;
                    case 3:
                         throw new N('Dimensions could be not found.');
               }
               return o;
          }
          calculateModuleSize(t, e, r) {
               return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2;
          }
          calculateModuleSizeOneWay(t, e) {
               const r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY())),
                    n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
               return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14;
          }
          sizeOfBlackWhiteBlackRunBothWays(t, e, r, n) {
               let i = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
                    s = 1,
                    o = t - (r - t);
               o < 0
                    ? ((s = t / (t - o)), (o = 0))
                    : o >= this.image.getWidth() && ((s = (this.image.getWidth() - 1 - t) / (o - t)), (o = this.image.getWidth() - 1));
               let a = Math.floor(e - (n - e) * s);
               return (
                    (s = 1),
                    a < 0
                         ? ((s = e / (e - a)), (a = 0))
                         : a >= this.image.getHeight() && ((s = (this.image.getHeight() - 1 - e) / (a - e)), (a = this.image.getHeight() - 1)),
                    (o = Math.floor(t + (o - t) * s)),
                    (i += this.sizeOfBlackWhiteBlackRun(t, e, o, a)),
                    i - 1
               );
          }
          sizeOfBlackWhiteBlackRun(t, e, r, n) {
               const i = Math.abs(n - e) > Math.abs(r - t);
               if (i) {
                    let i = t;
                    (t = e), (e = i), (i = r), (r = n), (n = i);
               }
               const s = Math.abs(r - t),
                    o = Math.abs(n - e);
               let a = -s / 2;
               const h = t < r ? 1 : -1,
                    l = e < n ? 1 : -1;
               let c = 0;
               const d = r + h;
               for (let r = t, u = e; r !== d; r += h) {
                    const h = i ? u : r,
                         d = i ? r : u;
                    if ((1 === c) === this.image.get(h, d)) {
                         if (2 === c) return et.distance(r, u, t, e);
                         c++;
                    }
                    if (((a += o), a > 0)) {
                         if (u === n) break;
                         (u += l), (a -= s);
                    }
               }
               return 2 === c ? et.distance(r + h, n, t, e) : NaN;
          }
          findAlignmentInRegion(t, e, r, n) {
               const i = Math.floor(n * t),
                    s = Math.max(0, e - i),
                    o = Math.min(this.image.getWidth() - 1, e + i);
               if (o - s < 3 * t) throw new N('Alignment top exceeds estimated module size.');
               const a = Math.max(0, r - i),
                    h = Math.min(this.image.getHeight() - 1, r + i);
               if (h - a < 3 * t) throw new N('Alignment bottom exceeds estimated module size.');
               return new Oe(this.image, s, a, o - s, h - a, t, this.resultPointCallback).find();
          }
     }
     class Le {
          constructor() {
               this.decoder = new ye();
          }
          getDecoder() {
               return this.decoder;
          }
          decode(t, e) {
               let r, n;
               if (null != e && void 0 !== e.get(E.PURE_BARCODE)) {
                    const i = Le.extractPureBits(t.getBlackMatrix());
                    (r = this.decoder.decodeBitMatrix(i, e)), (n = Le.NO_POINTS);
               } else {
                    const i = new Pe(t.getBlackMatrix()).detect(e);
                    (r = this.decoder.decodeBitMatrix(i.getBits(), e)), (n = i.getPoints());
               }
               r.getOther() instanceof Ne && r.getOther().applyMirroredCorrection(n);
               const i = new v(r.getText(), r.getRawBytes(), void 0, n, x.QR_CODE, void 0),
                    s = r.getByteSegments();
               null !== s && i.putMetadata(z.BYTE_SEGMENTS, s);
               const o = r.getECLevel();
               return (
                    null !== o && i.putMetadata(z.ERROR_CORRECTION_LEVEL, o),
                    r.hasStructuredAppend() &&
                         (i.putMetadata(z.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()),
                         i.putMetadata(z.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())),
                    i
               );
          }
          reset() {}
          static extractPureBits(t) {
               const e = t.getTopLeftOnBit(),
                    r = t.getBottomRightOnBit();
               if (null === e || null === r) throw new N();
               const n = this.moduleSize(e, t);
               let i = e[1],
                    s = r[1],
                    o = e[0],
                    a = r[0];
               if (o >= a || i >= s) throw new N();
               if (s - i != a - o && ((a = o + (s - i)), a >= t.getWidth())) throw new N();
               const h = Math.round((a - o + 1) / n),
                    l = Math.round((s - i + 1) / n);
               if (h <= 0 || l <= 0) throw new N();
               if (l !== h) throw new N();
               const c = Math.floor(n / 2);
               (i += c), (o += c);
               const d = o + Math.floor((h - 1) * n) - a;
               if (d > 0) {
                    if (d > c) throw new N();
                    o -= d;
               }
               const u = i + Math.floor((l - 1) * n) - s;
               if (u > 0) {
                    if (u > c) throw new N();
                    i -= u;
               }
               const g = new R(h, l);
               for (let e = 0; e < l; e++) {
                    const r = i + Math.floor(e * n);
                    for (let i = 0; i < h; i++) t.get(o + Math.floor(i * n), r) && g.set(i, e);
               }
               return g;
          }
          static moduleSize(t, e) {
               const r = e.getHeight(),
                    n = e.getWidth();
               let i = t[0],
                    s = t[1],
                    o = !0,
                    a = 0;
               for (; i < n && s < r; ) {
                    if (o !== e.get(i, s)) {
                         if (5 == ++a) break;
                         o = !o;
                    }
                    i++, s++;
               }
               if (i === n || s === r) throw new N();
               return (i - t[0]) / 7;
          }
     }
     Le.NO_POINTS = new Array();
     class Fe {
          PDF417Common() {}
          static getBitCountSum(t) {
               return et.sum(t);
          }
          static toIntArray(t) {
               if (null == t || !t.length) return Fe.EMPTY_INT_ARRAY;
               const e = new Int32Array(t.length);
               let r = 0;
               for (const n of t) e[r++] = n;
               return e;
          }
          static getCodeword(t) {
               const e = f.binarySearch(Fe.SYMBOL_TABLE, 262143 & t);
               return e < 0 ? -1 : (Fe.CODEWORD_TABLE[e] - 1) % Fe.NUMBER_OF_CODEWORDS;
          }
     }
     (Fe.NUMBER_OF_CODEWORDS = 929),
          (Fe.MAX_CODEWORDS_IN_BARCODE = Fe.NUMBER_OF_CODEWORDS - 1),
          (Fe.MIN_ROWS_IN_BARCODE = 3),
          (Fe.MAX_ROWS_IN_BARCODE = 90),
          (Fe.MODULES_IN_CODEWORD = 17),
          (Fe.MODULES_IN_STOP_PATTERN = 18),
          (Fe.BARS_IN_MODULE = 8),
          (Fe.EMPTY_INT_ARRAY = new Int32Array([])),
          (Fe.SYMBOL_TABLE = Int32Array.from([
               66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654,
               66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936,
               66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350,
               67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692,
               67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960,
               67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364,
               68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708,
               68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3,
               69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296,
               69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672,
               69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920,
               69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448,
               70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896,
               71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612,
               71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910,
               71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206,
               72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674,
               72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950,
               72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236,
               73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432,
               73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944,
               73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272,
               74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992,
               75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758,
               75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536,
               77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928,
               77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278,
               78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782,
               78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420,
               79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910,
               79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224,
               80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654,
               80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950,
               80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168,
               81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486,
               81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740,
               81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366,
               82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882,
               82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580,
               83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088,
               84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792,
               85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560,
               89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012,
               90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528,
               90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3,
               91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640,
               91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134,
               92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758,
               93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278,
               94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620,
               94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004,
               95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424,
               95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220,
               96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416,
               96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688,
               96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072,
               97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384,
               97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694,
               97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998,
               98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044,
               99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548,
               99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814,
               99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044,
               100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440,
               100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732,
               100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176,
               101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416,
               101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640,
               101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986,
               101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282,
               102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606,
               102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886,
               102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366,
               103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194,
               104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482,
               104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712,
               104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080,
               105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614,
               105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932,
               105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216,
               106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572,
               106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876,
               106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292,
               107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568,
               107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320,
               108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792,
               109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348,
               110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728,
               110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3,
               111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554,
               111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514,
               112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890,
               112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264,
               113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740,
               113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016,
               114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270,
               114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532,
               114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298,
               115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570,
               115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934,
               115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206,
               116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430,
               116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654,
               116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944,
               116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230,
               117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656,
               117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936,
               117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238,
               118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514,
               118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836,
               118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068,
               119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352,
               119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742,
               119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440,
               120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812,
               120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078,
               121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440,
               121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936,
               121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144,
               122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510,
               122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770,
               122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176,
               123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446,
               123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634,
               123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984,
               123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164,
               124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406,
               124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694,
               124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964,
               124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126,
               125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374,
               125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758,
               125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044,
               126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338,
               126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580,
               126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792,
               126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270,
               127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532,
               127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754,
               127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044,
               128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246,
               128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506,
               128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656,
               128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934,
               128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380,
               129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640,
               129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880,
               129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010,
          ])),
          (Fe.CODEWORD_TABLE = Int32Array.from([
               2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825,
               2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655,
               2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736,
               2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345,
               654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616,
               1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487,
               2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629,
               1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590,
               537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528,
               1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362,
               2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424,
               2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684,
               2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645,
               2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503,
               2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670,
               2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747,
               2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356,
               262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219,
               2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988,
               165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176,
               1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275,
               547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530,
               1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429,
               1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401,
               2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366,
               2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596,
               2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788,
               2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679,
               2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985,
               1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84,
               83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089,
               1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70,
               1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982,
               980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359,
               343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127,
               320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252,
               2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197,
               207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267,
               1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295,
               2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535,
               532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492,
               480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471,
               2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436,
               2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701,
               2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587,
               1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840,
               1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808,
               2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640,
               1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505,
               1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531,
               527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428,
               1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421,
               2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333,
               617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668,
               2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312,
               1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213,
               209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156,
               2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290,
               573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395,
               2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734,
               728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521,
               2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141,
               1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123,
               1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45,
               1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046,
               1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975,
               33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289,
               2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305,
               1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302,
               2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221,
               2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424,
               2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603,
               2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688,
               2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604,
               1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400,
               1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772,
               726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847,
               846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302,
               1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162,
               1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559,
               458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712,
               2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756,
               2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068,
               1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51,
               1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961,
               27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304,
               1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199,
               1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563,
               1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376,
               721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732,
               1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504,
               1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672,
               1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193,
               1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014,
               2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673,
               1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054,
               77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935,
               1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325,
               1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200,
               1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762,
               760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390,
               1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144,
               1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664,
               1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6,
               930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284,
               2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706,
               913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659,
               1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105,
               1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700,
          ]));
     class ve {
          constructor(t, e) {
               (this.bits = t), (this.points = e);
          }
          getBits() {
               return this.bits;
          }
          getPoints() {
               return this.points;
          }
     }
     class ke {
          static detectMultiple(t, e, r) {
               let n = t.getBlackMatrix(),
                    i = ke.detect(r, n);
               return i.length || ((n = n.clone()), n.rotate180(), (i = ke.detect(r, n))), new ve(n, i);
          }
          static detect(t, e) {
               const r = new Array();
               let n = 0,
                    i = 0,
                    s = !1;
               for (; n < e.getHeight(); ) {
                    const o = ke.findVertices(e, n, i);
                    if (null != o[0] || null != o[3]) {
                         if (((s = !0), r.push(o), !t)) break;
                         null != o[2]
                              ? ((i = Math.trunc(o[2].getX())), (n = Math.trunc(o[2].getY())))
                              : ((i = Math.trunc(o[4].getX())), (n = Math.trunc(o[4].getY())));
                    } else {
                         if (!s) break;
                         (s = !1), (i = 0);
                         for (const t of r)
                              null != t[1] && (n = Math.trunc(Math.max(n, t[1].getY()))), null != t[3] && (n = Math.max(n, Math.trunc(t[3].getY())));
                         n += ke.ROW_STEP;
                    }
               }
               return r;
          }
          static findVertices(t, e, r) {
               const n = t.getHeight(),
                    i = t.getWidth(),
                    s = new Array(8);
               return (
                    ke.copyToResult(s, ke.findRowsWithPattern(t, n, i, e, r, ke.START_PATTERN), ke.INDEXES_START_PATTERN),
                    null != s[4] && ((r = Math.trunc(s[4].getX())), (e = Math.trunc(s[4].getY()))),
                    ke.copyToResult(s, ke.findRowsWithPattern(t, n, i, e, r, ke.STOP_PATTERN), ke.INDEXES_STOP_PATTERN),
                    s
               );
          }
          static copyToResult(t, e, r) {
               for (let n = 0; n < r.length; n++) t[r[n]] = e[n];
          }
          static findRowsWithPattern(t, e, r, n, i, s) {
               const o = new Array(4);
               let a = !1;
               const h = new Int32Array(s.length);
               for (; n < e; n += ke.ROW_STEP) {
                    let e = ke.findGuardPattern(t, i, n, r, !1, s, h);
                    if (null != e) {
                         for (; n > 0; ) {
                              const o = ke.findGuardPattern(t, i, --n, r, !1, s, h);
                              if (null == o) {
                                   n++;
                                   break;
                              }
                              e = o;
                         }
                         (o[0] = new nt(e[0], n)), (o[1] = new nt(e[1], n)), (a = !0);
                         break;
                    }
               }
               let l = n + 1;
               if (a) {
                    let n = 0,
                         i = Int32Array.from([Math.trunc(o[0].getX()), Math.trunc(o[1].getX())]);
                    for (; l < e; l++) {
                         const e = ke.findGuardPattern(t, i[0], l, r, !1, s, h);
                         if (null != e && Math.abs(i[0] - e[0]) < ke.MAX_PATTERN_DRIFT && Math.abs(i[1] - e[1]) < ke.MAX_PATTERN_DRIFT) (i = e), (n = 0);
                         else {
                              if (n > ke.SKIPPED_ROW_COUNT_MAX) break;
                              n++;
                         }
                    }
                    (l -= n + 1), (o[2] = new nt(i[0], l)), (o[3] = new nt(i[1], l));
               }
               return l - n < ke.BARCODE_MIN_HEIGHT && f.fill(o, null), o;
          }
          static findGuardPattern(t, e, r, n, i, s, o) {
               f.fillWithin(o, 0, o.length, 0);
               let a = e,
                    h = 0;
               for (; t.get(a, r) && a > 0 && h++ < ke.MAX_PIXEL_DRIFT; ) a--;
               let l = a,
                    c = 0,
                    u = s.length;
               for (let e = i; l < n; l++) {
                    if (t.get(l, r) !== e) o[c]++;
                    else {
                         if (c === u - 1) {
                              if (ke.patternMatchVariance(o, s, ke.MAX_INDIVIDUAL_VARIANCE) < ke.MAX_AVG_VARIANCE) return new Int32Array([a, l]);
                              (a += o[0] + o[1]), d.arraycopy(o, 2, o, 0, c - 1), (o[c - 1] = 0), (o[c] = 0), c--;
                         } else c++;
                         (o[c] = 1), (e = !e);
                    }
               }
               return c === u - 1 && ke.patternMatchVariance(o, s, ke.MAX_INDIVIDUAL_VARIANCE) < ke.MAX_AVG_VARIANCE ? new Int32Array([a, l - 1]) : null;
          }
          static patternMatchVariance(t, e, r) {
               let n = t.length,
                    i = 0,
                    s = 0;
               for (let r = 0; r < n; r++) (i += t[r]), (s += e[r]);
               if (i < s) return 1 / 0;
               let o = i / s;
               r *= o;
               let a = 0;
               for (let i = 0; i < n; i++) {
                    let n = t[i],
                         s = e[i] * o,
                         h = n > s ? n - s : s - n;
                    if (h > r) return 1 / 0;
                    a += h;
               }
               return a / i;
          }
     }
     (ke.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5])),
          (ke.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3])),
          (ke.MAX_AVG_VARIANCE = 0.42),
          (ke.MAX_INDIVIDUAL_VARIANCE = 0.8),
          (ke.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3])),
          (ke.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1])),
          (ke.MAX_PIXEL_DRIFT = 3),
          (ke.MAX_PATTERN_DRIFT = 5),
          (ke.SKIPPED_ROW_COUNT_MAX = 25),
          (ke.ROW_STEP = 5),
          (ke.BARCODE_MIN_HEIGHT = 10);
     class xe {
          constructor(t, e) {
               if (0 === e.length) throw new a();
               this.field = t;
               let r = e.length;
               if (r > 1 && 0 === e[0]) {
                    let t = 1;
                    for (; t < r && 0 === e[t]; ) t++;
                    t === r
                         ? (this.coefficients = new Int32Array([0]))
                         : ((this.coefficients = new Int32Array(r - t)), d.arraycopy(e, t, this.coefficients, 0, this.coefficients.length));
               } else this.coefficients = e;
          }
          getCoefficients() {
               return this.coefficients;
          }
          getDegree() {
               return this.coefficients.length - 1;
          }
          isZero() {
               return 0 === this.coefficients[0];
          }
          getCoefficient(t) {
               return this.coefficients[this.coefficients.length - 1 - t];
          }
          evaluateAt(t) {
               if (0 === t) return this.getCoefficient(0);
               if (1 === t) {
                    let t = 0;
                    for (let e of this.coefficients) t = this.field.add(t, e);
                    return t;
               }
               let e = this.coefficients[0],
                    r = this.coefficients.length;
               for (let n = 1; n < r; n++) e = this.field.add(this.field.multiply(t, e), this.coefficients[n]);
               return e;
          }
          add(t) {
               if (!this.field.equals(t.field)) throw new a('ModulusPolys do not have same ModulusGF field');
               if (this.isZero()) return t;
               if (t.isZero()) return this;
               let e = this.coefficients,
                    r = t.coefficients;
               if (e.length > r.length) {
                    let t = e;
                    (e = r), (r = t);
               }
               let n = new Int32Array(r.length),
                    i = r.length - e.length;
               d.arraycopy(r, 0, n, 0, i);
               for (let t = i; t < r.length; t++) n[t] = this.field.add(e[t - i], r[t]);
               return new xe(this.field, n);
          }
          subtract(t) {
               if (!this.field.equals(t.field)) throw new a('ModulusPolys do not have same ModulusGF field');
               return t.isZero() ? this : this.add(t.negative());
          }
          multiply(t) {
               return t instanceof xe ? this.multiplyOther(t) : this.multiplyScalar(t);
          }
          multiplyOther(t) {
               if (!this.field.equals(t.field)) throw new a('ModulusPolys do not have same ModulusGF field');
               if (this.isZero() || t.isZero()) return new xe(this.field, new Int32Array([0]));
               let e = this.coefficients,
                    r = e.length,
                    n = t.coefficients,
                    i = n.length,
                    s = new Int32Array(r + i - 1);
               for (let t = 0; t < r; t++) {
                    let r = e[t];
                    for (let e = 0; e < i; e++) s[t + e] = this.field.add(s[t + e], this.field.multiply(r, n[e]));
               }
               return new xe(this.field, s);
          }
          negative() {
               let t = this.coefficients.length,
                    e = new Int32Array(t);
               for (let r = 0; r < t; r++) e[r] = this.field.subtract(0, this.coefficients[r]);
               return new xe(this.field, e);
          }
          multiplyScalar(t) {
               if (0 === t) return new xe(this.field, new Int32Array([0]));
               if (1 === t) return this;
               let e = this.coefficients.length,
                    r = new Int32Array(e);
               for (let n = 0; n < e; n++) r[n] = this.field.multiply(this.coefficients[n], t);
               return new xe(this.field, r);
          }
          multiplyByMonomial(t, e) {
               if (t < 0) throw new a();
               if (0 === e) return new xe(this.field, new Int32Array([0]));
               let r = this.coefficients.length,
                    n = new Int32Array(r + t);
               for (let t = 0; t < r; t++) n[t] = this.field.multiply(this.coefficients[t], e);
               return new xe(this.field, n);
          }
          toString() {
               let t = new T();
               for (let e = this.getDegree(); e >= 0; e--) {
                    let r = this.getCoefficient(e);
                    0 !== r &&
                         (r < 0 ? (t.append(' - '), (r = -r)) : t.length() > 0 && t.append(' + '),
                         (0 !== e && 1 === r) || t.append(r),
                         0 !== e && (1 === e ? t.append('x') : (t.append('x^'), t.append(e))));
               }
               return t.toString();
          }
     }
     class Ve {
          add(t, e) {
               return (t + e) % this.modulus;
          }
          subtract(t, e) {
               return (this.modulus + t - e) % this.modulus;
          }
          exp(t) {
               return this.expTable[t];
          }
          log(t) {
               if (0 === t) throw new a();
               return this.logTable[t];
          }
          inverse(t) {
               if (0 === t) throw new q();
               return this.expTable[this.modulus - this.logTable[t] - 1];
          }
          multiply(t, e) {
               return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus - 1)];
          }
          getSize() {
               return this.modulus;
          }
          equals(t) {
               return t === this;
          }
     }
     class He extends Ve {
          constructor(t, e) {
               super(), (this.modulus = t), (this.expTable = new Int32Array(t)), (this.logTable = new Int32Array(t));
               let r = 1;
               for (let n = 0; n < t; n++) (this.expTable[n] = r), (r = (r * e) % t);
               for (let e = 0; e < t - 1; e++) this.logTable[this.expTable[e]] = e;
               (this.zero = new xe(this, new Int32Array([0]))), (this.one = new xe(this, new Int32Array([1])));
          }
          getZero() {
               return this.zero;
          }
          getOne() {
               return this.one;
          }
          buildMonomial(t, e) {
               if (t < 0) throw new a();
               if (0 === e) return this.zero;
               let r = new Int32Array(t + 1);
               return (r[0] = e), new xe(this, r);
          }
     }
     He.PDF417_GF = new He(Fe.NUMBER_OF_CODEWORDS, 3);
     class Ue {
          constructor() {
               this.field = He.PDF417_GF;
          }
          decode(t, e, r) {
               let n = new xe(this.field, t),
                    i = new Int32Array(e),
                    s = !1;
               for (let t = e; t > 0; t--) {
                    let r = n.evaluateAt(this.field.exp(t));
                    (i[e - t] = r), 0 !== r && (s = !0);
               }
               if (!s) return 0;
               let o = this.field.getOne();
               if (null != r)
                    for (const e of r) {
                         let r = this.field.exp(t.length - 1 - e),
                              n = new xe(this.field, new Int32Array([this.field.subtract(0, r), 1]));
                         o = o.multiply(n);
                    }
               let a = new xe(this.field, i),
                    h = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), a, e),
                    c = h[0],
                    d = h[1],
                    u = this.findErrorLocations(c),
                    g = this.findErrorMagnitudes(d, c, u);
               for (let e = 0; e < u.length; e++) {
                    let r = t.length - 1 - this.field.log(u[e]);
                    if (r < 0) throw l.getChecksumInstance();
                    t[r] = this.field.subtract(t[r], g[e]);
               }
               return u.length;
          }
          runEuclideanAlgorithm(t, e, r) {
               if (t.getDegree() < e.getDegree()) {
                    let r = t;
                    (t = e), (e = r);
               }
               let n = t,
                    i = e,
                    s = this.field.getZero(),
                    o = this.field.getOne();
               for (; i.getDegree() >= Math.round(r / 2); ) {
                    let t = n,
                         e = s;
                    if (((n = i), (s = o), n.isZero())) throw l.getChecksumInstance();
                    i = t;
                    let r = this.field.getZero(),
                         a = n.getCoefficient(n.getDegree()),
                         h = this.field.inverse(a);
                    for (; i.getDegree() >= n.getDegree() && !i.isZero(); ) {
                         let t = i.getDegree() - n.getDegree(),
                              e = this.field.multiply(i.getCoefficient(i.getDegree()), h);
                         (r = r.add(this.field.buildMonomial(t, e))), (i = i.subtract(n.multiplyByMonomial(t, e)));
                    }
                    o = r.multiply(s).subtract(e).negative();
               }
               let a = o.getCoefficient(0);
               if (0 === a) throw l.getChecksumInstance();
               let h = this.field.inverse(a);
               return [o.multiply(h), i.multiply(h)];
          }
          findErrorLocations(t) {
               let e = t.getDegree(),
                    r = new Int32Array(e),
                    n = 0;
               for (let i = 1; i < this.field.getSize() && n < e; i++) 0 === t.evaluateAt(i) && ((r[n] = this.field.inverse(i)), n++);
               if (n !== e) throw l.getChecksumInstance();
               return r;
          }
          findErrorMagnitudes(t, e, r) {
               let n = e.getDegree(),
                    i = new Int32Array(n);
               for (let t = 1; t <= n; t++) i[n - t] = this.field.multiply(t, e.getCoefficient(t));
               let s = new xe(this.field, i),
                    o = r.length,
                    a = new Int32Array(o);
               for (let e = 0; e < o; e++) {
                    let n = this.field.inverse(r[e]),
                         i = this.field.subtract(0, t.evaluateAt(n)),
                         o = this.field.inverse(s.evaluateAt(n));
                    a[e] = this.field.multiply(i, o);
               }
               return a;
          }
     }
     class Xe {
          constructor(t, e, r, n, i) {
               t instanceof Xe ? this.constructor_2(t) : this.constructor_1(t, e, r, n, i);
          }
          constructor_1(t, e, r, n, i) {
               const s = null == e || null == r,
                    o = null == n || null == i;
               if (s && o) throw new N();
               s
                    ? ((e = new nt(0, n.getY())), (r = new nt(0, i.getY())))
                    : o && ((n = new nt(t.getWidth() - 1, e.getY())), (i = new nt(t.getWidth() - 1, r.getY()))),
                    (this.image = t),
                    (this.topLeft = e),
                    (this.bottomLeft = r),
                    (this.topRight = n),
                    (this.bottomRight = i),
                    (this.minX = Math.trunc(Math.min(e.getX(), r.getX()))),
                    (this.maxX = Math.trunc(Math.max(n.getX(), i.getX()))),
                    (this.minY = Math.trunc(Math.min(e.getY(), n.getY()))),
                    (this.maxY = Math.trunc(Math.max(r.getY(), i.getY())));
          }
          constructor_2(t) {
               (this.image = t.image),
                    (this.topLeft = t.getTopLeft()),
                    (this.bottomLeft = t.getBottomLeft()),
                    (this.topRight = t.getTopRight()),
                    (this.bottomRight = t.getBottomRight()),
                    (this.minX = t.getMinX()),
                    (this.maxX = t.getMaxX()),
                    (this.minY = t.getMinY()),
                    (this.maxY = t.getMaxY());
          }
          static merge(t, e) {
               return null == t ? e : null == e ? t : new Xe(t.image, t.topLeft, t.bottomLeft, e.topRight, e.bottomRight);
          }
          addMissingRows(t, e, r) {
               let n = this.topLeft,
                    i = this.bottomLeft,
                    s = this.topRight,
                    o = this.bottomRight;
               if (t > 0) {
                    let e = r ? this.topLeft : this.topRight,
                         i = Math.trunc(e.getY() - t);
                    i < 0 && (i = 0);
                    let o = new nt(e.getX(), i);
                    r ? (n = o) : (s = o);
               }
               if (e > 0) {
                    let t = r ? this.bottomLeft : this.bottomRight,
                         n = Math.trunc(t.getY() + e);
                    n >= this.image.getHeight() && (n = this.image.getHeight() - 1);
                    let s = new nt(t.getX(), n);
                    r ? (i = s) : (o = s);
               }
               return new Xe(this.image, n, i, s, o);
          }
          getMinX() {
               return this.minX;
          }
          getMaxX() {
               return this.maxX;
          }
          getMinY() {
               return this.minY;
          }
          getMaxY() {
               return this.maxY;
          }
          getTopLeft() {
               return this.topLeft;
          }
          getTopRight() {
               return this.topRight;
          }
          getBottomLeft() {
               return this.bottomLeft;
          }
          getBottomRight() {
               return this.bottomRight;
          }
     }
     class Ge {
          constructor(t, e, r, n) {
               (this.columnCount = t), (this.errorCorrectionLevel = n), (this.rowCountUpperPart = e), (this.rowCountLowerPart = r), (this.rowCount = e + r);
          }
          getColumnCount() {
               return this.columnCount;
          }
          getErrorCorrectionLevel() {
               return this.errorCorrectionLevel;
          }
          getRowCount() {
               return this.rowCount;
          }
          getRowCountUpperPart() {
               return this.rowCountUpperPart;
          }
          getRowCountLowerPart() {
               return this.rowCountLowerPart;
          }
     }
     class We {
          constructor() {
               this.buffer = '';
          }
          static form(t, e) {
               let r = -1;
               return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, i, s, o, a) {
                    if ('%%' === t) return '%';
                    if (void 0 === e[++r]) return;
                    t = s ? parseInt(s.substr(1)) : void 0;
                    let h,
                         l = o ? parseInt(o.substr(1)) : void 0;
                    switch (a) {
                         case 's':
                              h = e[r];
                              break;
                         case 'c':
                              h = e[r][0];
                              break;
                         case 'f':
                              h = parseFloat(e[r]).toFixed(t);
                              break;
                         case 'p':
                              h = parseFloat(e[r]).toPrecision(t);
                              break;
                         case 'e':
                              h = parseFloat(e[r]).toExponential(t);
                              break;
                         case 'x':
                              h = parseInt(e[r]).toString(l || 16);
                              break;
                         case 'd':
                              h = parseFloat(parseInt(e[r], l || 10).toPrecision(t)).toFixed(0);
                    }
                    h = 'object' == typeof h ? JSON.stringify(h) : (+h).toString(l);
                    let c = parseInt(i),
                         d = i && i[0] + '' == '0' ? '0' : ' ';
                    for (; h.length < c; ) h = void 0 !== n ? h + d : d + h;
                    return h;
               });
          }
          format(t, ...e) {
               this.buffer += We.form(t, e);
          }
          toString() {
               return this.buffer;
          }
     }
     class ze {
          constructor(t) {
               (this.boundingBox = new Xe(t)), (this.codewords = new Array(t.getMaxY() - t.getMinY() + 1));
          }
          getCodewordNearby(t) {
               let e = this.getCodeword(t);
               if (null != e) return e;
               for (let r = 1; r < ze.MAX_NEARBY_DISTANCE; r++) {
                    let n = this.imageRowToCodewordIndex(t) - r;
                    if (n >= 0 && ((e = this.codewords[n]), null != e)) return e;
                    if (((n = this.imageRowToCodewordIndex(t) + r), n < this.codewords.length && ((e = this.codewords[n]), null != e))) return e;
               }
               return null;
          }
          imageRowToCodewordIndex(t) {
               return t - this.boundingBox.getMinY();
          }
          setCodeword(t, e) {
               this.codewords[this.imageRowToCodewordIndex(t)] = e;
          }
          getCodeword(t) {
               return this.codewords[this.imageRowToCodewordIndex(t)];
          }
          getBoundingBox() {
               return this.boundingBox;
          }
          getCodewords() {
               return this.codewords;
          }
          toString() {
               const t = new We();
               let e = 0;
               for (const r of this.codewords) null != r ? t.format('%3d: %3d|%3d%n', e++, r.getRowNumber(), r.getValue()) : t.format('%3d:    |   %n', e++);
               return t.toString();
          }
     }
     ze.MAX_NEARBY_DISTANCE = 5;
     class Ye {
          constructor() {
               this.values = new Map();
          }
          setValue(t) {
               t = Math.trunc(t);
               let e = this.values.get(t);
               null == e && (e = 0), e++, this.values.set(t, e);
          }
          getValue() {
               let t = -1,
                    e = new Array();
               for (const [r, n] of this.values.entries()) {
                    const i = { getKey: () => r, getValue: () => n };
                    i.getValue() > t ? ((t = i.getValue()), (e = []), e.push(i.getKey())) : i.getValue() === t && e.push(i.getKey());
               }
               return Fe.toIntArray(e);
          }
          getConfidence(t) {
               return this.values.get(t);
          }
     }
     class Ze extends ze {
          constructor(t, e) {
               super(t), (this._isLeft = e);
          }
          setRowNumbers() {
               for (let t of this.getCodewords()) null != t && t.setRowNumberAsRowIndicatorColumn();
          }
          adjustCompleteIndicatorColumnRowNumbers(t) {
               let e = this.getCodewords();
               this.setRowNumbers(), this.removeIncorrectCodewords(e, t);
               let r = this.getBoundingBox(),
                    n = this._isLeft ? r.getTopLeft() : r.getTopRight(),
                    i = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
                    s = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                    o = this.imageRowToCodewordIndex(Math.trunc(i.getY())),
                    a = -1,
                    h = 1,
                    l = 0;
               for (let r = s; r < o; r++) {
                    if (null == e[r]) continue;
                    let n = e[r],
                         i = n.getRowNumber() - a;
                    if (0 === i) l++;
                    else if (1 === i) (h = Math.max(h, l)), (l = 1), (a = n.getRowNumber());
                    else if (i < 0 || n.getRowNumber() >= t.getRowCount() || i > r) e[r] = null;
                    else {
                         let t;
                         t = h > 2 ? (h - 2) * i : i;
                         let s = t >= r;
                         for (let n = 1; n <= t && !s; n++) s = null != e[r - n];
                         s ? (e[r] = null) : ((a = n.getRowNumber()), (l = 1));
                    }
               }
          }
          getRowHeights() {
               let t = this.getBarcodeMetadata();
               if (null == t) return null;
               this.adjustIncompleteIndicatorColumnRowNumbers(t);
               let e = new Int32Array(t.getRowCount());
               for (let t of this.getCodewords())
                    if (null != t) {
                         let r = t.getRowNumber();
                         if (r >= e.length) continue;
                         e[r]++;
                    }
               return e;
          }
          adjustIncompleteIndicatorColumnRowNumbers(t) {
               let e = this.getBoundingBox(),
                    r = this._isLeft ? e.getTopLeft() : e.getTopRight(),
                    n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
                    i = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
                    s = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                    o = this.getCodewords(),
                    a = -1;
               for (let e = i; e < s; e++) {
                    if (null == o[e]) continue;
                    let r = o[e];
                    r.setRowNumberAsRowIndicatorColumn();
                    let n = r.getRowNumber() - a;
                    0 === n || (1 === n ? (a = r.getRowNumber()) : r.getRowNumber() >= t.getRowCount() ? (o[e] = null) : (a = r.getRowNumber()));
               }
          }
          getBarcodeMetadata() {
               let t = this.getCodewords(),
                    e = new Ye(),
                    r = new Ye(),
                    n = new Ye(),
                    i = new Ye();
               for (let s of t) {
                    if (null == s) continue;
                    s.setRowNumberAsRowIndicatorColumn();
                    let t = s.getValue() % 30,
                         o = s.getRowNumber();
                    switch ((this._isLeft || (o += 2), o % 3)) {
                         case 0:
                              r.setValue(3 * t + 1);
                              break;
                         case 1:
                              i.setValue(t / 3), n.setValue(t % 3);
                              break;
                         case 2:
                              e.setValue(t + 1);
                    }
               }
               if (
                    0 === e.getValue().length ||
                    0 === r.getValue().length ||
                    0 === n.getValue().length ||
                    0 === i.getValue().length ||
                    e.getValue()[0] < 1 ||
                    r.getValue()[0] + n.getValue()[0] < Fe.MIN_ROWS_IN_BARCODE ||
                    r.getValue()[0] + n.getValue()[0] > Fe.MAX_ROWS_IN_BARCODE
               )
                    return null;
               let s = new Ge(e.getValue()[0], r.getValue()[0], n.getValue()[0], i.getValue()[0]);
               return this.removeIncorrectCodewords(t, s), s;
          }
          removeIncorrectCodewords(t, e) {
               for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    if (null == t[r]) continue;
                    let i = n.getValue() % 30,
                         s = n.getRowNumber();
                    if (s > e.getRowCount()) t[r] = null;
                    else
                         switch ((this._isLeft || (s += 2), s % 3)) {
                              case 0:
                                   3 * i + 1 !== e.getRowCountUpperPart() && (t[r] = null);
                                   break;
                              case 1:
                                   (Math.trunc(i / 3) === e.getErrorCorrectionLevel() && i % 3 === e.getRowCountLowerPart()) || (t[r] = null);
                                   break;
                              case 2:
                                   i + 1 !== e.getColumnCount() && (t[r] = null);
                         }
               }
          }
          isLeft() {
               return this._isLeft;
          }
          toString() {
               return 'IsLeft: ' + this._isLeft + '\n' + super.toString();
          }
     }
     class Ke {
          constructor(t, e) {
               (this.ADJUST_ROW_NUMBER_SKIP = 2),
                    (this.barcodeMetadata = t),
                    (this.barcodeColumnCount = t.getColumnCount()),
                    (this.boundingBox = e),
                    (this.detectionResultColumns = new Array(this.barcodeColumnCount + 2));
          }
          getDetectionResultColumns() {
               this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]),
                    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
               let t,
                    e = Fe.MAX_CODEWORDS_IN_BARCODE;
               do {
                    (t = e), (e = this.adjustRowNumbersAndGetCount());
               } while (e > 0 && e < t);
               return this.detectionResultColumns;
          }
          adjustIndicatorColumnRowNumbers(t) {
               null != t && t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
          }
          adjustRowNumbersAndGetCount() {
               let t = this.adjustRowNumbersByRow();
               if (0 === t) return 0;
               for (let t = 1; t < this.barcodeColumnCount + 1; t++) {
                    let e = this.detectionResultColumns[t].getCodewords();
                    for (let r = 0; r < e.length; r++) null != e[r] && (e[r].hasValidRowNumber() || this.adjustRowNumbers(t, r, e));
               }
               return t;
          }
          adjustRowNumbersByRow() {
               return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
          }
          adjustRowNumbersFromBothRI() {
               if (null == this.detectionResultColumns[0] || null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return;
               let t = this.detectionResultColumns[0].getCodewords(),
                    e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
               for (let r = 0; r < t.length; r++)
                    if (null != t[r] && null != e[r] && t[r].getRowNumber() === e[r].getRowNumber())
                         for (let e = 1; e <= this.barcodeColumnCount; e++) {
                              let n = this.detectionResultColumns[e].getCodewords()[r];
                              null != n &&
                                   (n.setRowNumber(t[r].getRowNumber()), n.hasValidRowNumber() || (this.detectionResultColumns[e].getCodewords()[r] = null));
                         }
          }
          adjustRowNumbersFromRRI() {
               if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
               let t = 0,
                    e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
               for (let r = 0; r < e.length; r++) {
                    if (null == e[r]) continue;
                    let n = e[r].getRowNumber(),
                         i = 0;
                    for (let e = this.barcodeColumnCount + 1; e > 0 && i < this.ADJUST_ROW_NUMBER_SKIP; e--) {
                         let s = this.detectionResultColumns[e].getCodewords()[r];
                         null != s && ((i = Ke.adjustRowNumberIfValid(n, i, s)), s.hasValidRowNumber() || t++);
                    }
               }
               return t;
          }
          adjustRowNumbersFromLRI() {
               if (null == this.detectionResultColumns[0]) return 0;
               let t = 0,
                    e = this.detectionResultColumns[0].getCodewords();
               for (let r = 0; r < e.length; r++) {
                    if (null == e[r]) continue;
                    let n = e[r].getRowNumber(),
                         i = 0;
                    for (let e = 1; e < this.barcodeColumnCount + 1 && i < this.ADJUST_ROW_NUMBER_SKIP; e++) {
                         let s = this.detectionResultColumns[e].getCodewords()[r];
                         null != s && ((i = Ke.adjustRowNumberIfValid(n, i, s)), s.hasValidRowNumber() || t++);
                    }
               }
               return t;
          }
          static adjustRowNumberIfValid(t, e, r) {
               return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t), (e = 0)) : ++e), e;
          }
          adjustRowNumbers(t, e, r) {
               if (null == this.detectionResultColumns[t - 1]) return;
               let n = r[e],
                    i = this.detectionResultColumns[t - 1].getCodewords(),
                    s = i;
               null != this.detectionResultColumns[t + 1] && (s = this.detectionResultColumns[t + 1].getCodewords());
               let o = new Array(14);
               (o[2] = i[e]),
                    (o[3] = s[e]),
                    e > 0 && ((o[0] = r[e - 1]), (o[4] = i[e - 1]), (o[5] = s[e - 1])),
                    e > 1 && ((o[8] = r[e - 2]), (o[10] = i[e - 2]), (o[11] = s[e - 2])),
                    e < r.length - 1 && ((o[1] = r[e + 1]), (o[6] = i[e + 1]), (o[7] = s[e + 1])),
                    e < r.length - 2 && ((o[9] = r[e + 2]), (o[12] = i[e + 2]), (o[13] = s[e + 2]));
               for (let t of o) if (Ke.adjustRowNumber(n, t)) return;
          }
          static adjustRowNumber(t, e) {
               return null != e && !(!e.hasValidRowNumber() || e.getBucket() !== t.getBucket()) && (t.setRowNumber(e.getRowNumber()), !0);
          }
          getBarcodeColumnCount() {
               return this.barcodeColumnCount;
          }
          getBarcodeRowCount() {
               return this.barcodeMetadata.getRowCount();
          }
          getBarcodeECLevel() {
               return this.barcodeMetadata.getErrorCorrectionLevel();
          }
          setBoundingBox(t) {
               this.boundingBox = t;
          }
          getBoundingBox() {
               return this.boundingBox;
          }
          setDetectionResultColumn(t, e) {
               this.detectionResultColumns[t] = e;
          }
          getDetectionResultColumn(t) {
               return this.detectionResultColumns[t];
          }
          toString() {
               let t = this.detectionResultColumns[0];
               null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
               let e = new We();
               for (let r = 0; r < t.getCodewords().length; r++) {
                    e.format('CW %3d:', r);
                    for (let t = 0; t < this.barcodeColumnCount + 2; t++) {
                         if (null == this.detectionResultColumns[t]) {
                              e.format('    |   ');
                              continue;
                         }
                         let n = this.detectionResultColumns[t].getCodewords()[r];
                         null != n ? e.format(' %3d|%3d', n.getRowNumber(), n.getValue()) : e.format('    |   ');
                    }
                    e.format('%n');
               }
               return e.toString();
          }
     }
     class qe {
          constructor(t, e, r, n) {
               (this.rowNumber = qe.BARCODE_ROW_UNKNOWN),
                    (this.startX = Math.trunc(t)),
                    (this.endX = Math.trunc(e)),
                    (this.bucket = Math.trunc(r)),
                    (this.value = Math.trunc(n));
          }
          hasValidRowNumber() {
               return this.isValidRowNumber(this.rowNumber);
          }
          isValidRowNumber(t) {
               return t !== qe.BARCODE_ROW_UNKNOWN && this.bucket === (t % 3) * 3;
          }
          setRowNumberAsRowIndicatorColumn() {
               this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3));
          }
          getWidth() {
               return this.endX - this.startX;
          }
          getStartX() {
               return this.startX;
          }
          getEndX() {
               return this.endX;
          }
          getBucket() {
               return this.bucket;
          }
          getValue() {
               return this.value;
          }
          getRowNumber() {
               return this.rowNumber;
          }
          setRowNumber(t) {
               this.rowNumber = t;
          }
          toString() {
               return this.rowNumber + '|' + this.value;
          }
     }
     qe.BARCODE_ROW_UNKNOWN = -1;
     class Qe {
          static initialize() {
               for (let t = 0; t < Fe.SYMBOL_TABLE.length; t++) {
                    let e = Fe.SYMBOL_TABLE[t],
                         r = 1 & e;
                    for (let n = 0; n < Fe.BARS_IN_MODULE; n++) {
                         let i = 0;
                         for (; (1 & e) === r; ) (i += 1), (e >>= 1);
                         (r = 1 & e),
                              Qe.RATIOS_TABLE[t] || (Qe.RATIOS_TABLE[t] = new Array(Fe.BARS_IN_MODULE)),
                              (Qe.RATIOS_TABLE[t][Fe.BARS_IN_MODULE - n - 1] = Math.fround(i / Fe.MODULES_IN_CODEWORD));
                    }
               }
               this.bSymbolTableReady = !0;
          }
          static getDecodedValue(t) {
               let e = Qe.getDecodedCodewordValue(Qe.sampleBitCounts(t));
               return -1 !== e ? e : Qe.getClosestDecodedValue(t);
          }
          static sampleBitCounts(t) {
               let e = et.sum(t),
                    r = new Int32Array(Fe.BARS_IN_MODULE),
                    n = 0,
                    i = 0;
               for (let s = 0; s < Fe.MODULES_IN_CODEWORD; s++) {
                    let o = e / (2 * Fe.MODULES_IN_CODEWORD) + (s * e) / Fe.MODULES_IN_CODEWORD;
                    i + t[n] <= o && ((i += t[n]), n++), r[n]++;
               }
               return r;
          }
          static getDecodedCodewordValue(t) {
               let e = Qe.getBitValue(t);
               return -1 === Fe.getCodeword(e) ? -1 : e;
          }
          static getBitValue(t) {
               let e = 0;
               for (let r = 0; r < t.length; r++) for (let n = 0; n < t[r]; n++) e = (e << 1) | (r % 2 == 0 ? 1 : 0);
               return Math.trunc(e);
          }
          static getClosestDecodedValue(t) {
               let e = et.sum(t),
                    r = new Array(Fe.BARS_IN_MODULE);
               if (e > 1) for (let n = 0; n < r.length; n++) r[n] = Math.fround(t[n] / e);
               let n = rt.MAX_VALUE,
                    i = -1;
               this.bSymbolTableReady || Qe.initialize();
               for (let t = 0; t < Qe.RATIOS_TABLE.length; t++) {
                    let e = 0,
                         s = Qe.RATIOS_TABLE[t];
                    for (let t = 0; t < Fe.BARS_IN_MODULE; t++) {
                         let i = Math.fround(s[t] - r[t]);
                         if (((e += Math.fround(i * i)), e >= n)) break;
                    }
                    e < n && ((n = e), (i = Fe.SYMBOL_TABLE[t]));
               }
               return i;
          }
     }
     (Qe.bSymbolTableReady = !1), (Qe.RATIOS_TABLE = new Array(Fe.SYMBOL_TABLE.length).map((t) => new Array(Fe.BARS_IN_MODULE)));
     class je {
          constructor() {
               (this.segmentCount = -1), (this.fileSize = -1), (this.timestamp = -1), (this.checksum = -1);
          }
          getSegmentIndex() {
               return this.segmentIndex;
          }
          setSegmentIndex(t) {
               this.segmentIndex = t;
          }
          getFileId() {
               return this.fileId;
          }
          setFileId(t) {
               this.fileId = t;
          }
          getOptionalData() {
               return this.optionalData;
          }
          setOptionalData(t) {
               this.optionalData = t;
          }
          isLastSegment() {
               return this.lastSegment;
          }
          setLastSegment(t) {
               this.lastSegment = t;
          }
          getSegmentCount() {
               return this.segmentCount;
          }
          setSegmentCount(t) {
               this.segmentCount = t;
          }
          getSender() {
               return this.sender || null;
          }
          setSender(t) {
               this.sender = t;
          }
          getAddressee() {
               return this.addressee || null;
          }
          setAddressee(t) {
               this.addressee = t;
          }
          getFileName() {
               return this.fileName;
          }
          setFileName(t) {
               this.fileName = t;
          }
          getFileSize() {
               return this.fileSize;
          }
          setFileSize(t) {
               this.fileSize = t;
          }
          getChecksum() {
               return this.checksum;
          }
          setChecksum(t) {
               this.checksum = t;
          }
          getTimestamp() {
               return this.timestamp;
          }
          setTimestamp(t) {
               this.timestamp = t;
          }
     }
     class Je {
          static parseLong(t, e = void 0) {
               return parseInt(t, e);
          }
     }
     class $e extends s {}
     $e.kind = 'NullPointerException';
     class tr {
          writeBytes(t) {
               this.writeBytesOffset(t, 0, t.length);
          }
          writeBytesOffset(t, e, r) {
               if (null == t) throw new $e();
               if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) throw new u();
               if (0 !== r) for (let n = 0; n < r; n++) this.write(t[e + n]);
          }
          flush() {}
          close() {}
     }
     class er extends s {}
     class rr extends tr {
          constructor(t = 32) {
               if ((super(), (this.count = 0), t < 0)) throw new a('Negative initial size: ' + t);
               this.buf = new Uint8Array(t);
          }
          ensureCapacity(t) {
               t - this.buf.length > 0 && this.grow(t);
          }
          grow(t) {
               let e = this.buf.length << 1;
               if ((e - t < 0 && (e = t), e < 0)) {
                    if (t < 0) throw new er();
                    e = w.MAX_VALUE;
               }
               this.buf = f.copyOfUint8Array(this.buf, e);
          }
          write(t) {
               this.ensureCapacity(this.count + 1), (this.buf[this.count] = t), (this.count += 1);
          }
          writeBytesOffset(t, e, r) {
               if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0) throw new u();
               this.ensureCapacity(this.count + r), d.arraycopy(t, e, this.buf, this.count, r), (this.count += r);
          }
          writeTo(t) {
               t.writeBytesOffset(this.buf, 0, this.count);
          }
          reset() {
               this.count = 0;
          }
          toByteArray() {
               return f.copyOfUint8Array(this.buf, this.count);
          }
          size() {
               return this.count;
          }
          toString(t) {
               return t ? ('string' == typeof t ? this.toString_string(t) : this.toString_number(t)) : this.toString_void();
          }
          toString_void() {
               return new String(this.buf).toString();
          }
          toString_string(t) {
               return new String(this.buf).toString();
          }
          toString_number(t) {
               return new String(this.buf).toString();
          }
          close() {}
     }
     function nr() {
          if ('undefined' != typeof window) return window.BigInt || null;
          if ('undefined' != typeof global) return global.BigInt || null;
          if ('undefined' != typeof self) return self.BigInt || null;
          throw new Error("Can't search globals for BigInt!");
     }
     let ir;
     function sr(t) {
          if ((void 0 === ir && (ir = nr()), null === ir)) throw new Error('BigInt is not supported!');
          return ir(t);
     }
     !(function (t) {
          (t[(t.ALPHA = 0)] = 'ALPHA'),
               (t[(t.LOWER = 1)] = 'LOWER'),
               (t[(t.MIXED = 2)] = 'MIXED'),
               (t[(t.PUNCT = 3)] = 'PUNCT'),
               (t[(t.ALPHA_SHIFT = 4)] = 'ALPHA_SHIFT'),
               (t[(t.PUNCT_SHIFT = 5)] = 'PUNCT_SHIFT');
     })(W || (W = {}));
     class or {
          static decode(t, e) {
               let r = new T(''),
                    n = I.ISO8859_1;
               r.enableDecoding(n);
               let i = 1,
                    s = t[i++],
                    o = new je();
               for (; i < t[0]; ) {
                    switch (s) {
                         case or.TEXT_COMPACTION_MODE_LATCH:
                              i = or.textCompaction(t, i, r);
                              break;
                         case or.BYTE_COMPACTION_MODE_LATCH:
                         case or.BYTE_COMPACTION_MODE_LATCH_6:
                              i = or.byteCompaction(s, t, n, i, r);
                              break;
                         case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                              r.append(t[i++]);
                              break;
                         case or.NUMERIC_COMPACTION_MODE_LATCH:
                              i = or.numericCompaction(t, i, r);
                              break;
                         case or.ECI_CHARSET:
                              I.getCharacterSetECIByValue(t[i++]);
                              break;
                         case or.ECI_GENERAL_PURPOSE:
                              i += 2;
                              break;
                         case or.ECI_USER_DEFINED:
                              i++;
                              break;
                         case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                              i = or.decodeMacroBlock(t, i, o);
                              break;
                         case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                         case or.MACRO_PDF417_TERMINATOR:
                              throw new m();
                         default:
                              i--, (i = or.textCompaction(t, i, r));
                    }
                    if (!(i < t.length)) throw m.getFormatInstance();
                    s = t[i++];
               }
               if (0 === r.length()) throw m.getFormatInstance();
               let a = new Y(null, r.toString(), null, e);
               return a.setOther(o), a;
          }
          static decodeMacroBlock(t, e, r) {
               if (e + or.NUMBER_OF_SEQUENCE_CODEWORDS > t[0]) throw m.getFormatInstance();
               let n = new Int32Array(or.NUMBER_OF_SEQUENCE_CODEWORDS);
               for (let r = 0; r < or.NUMBER_OF_SEQUENCE_CODEWORDS; r++, e++) n[r] = t[e];
               r.setSegmentIndex(w.parseInt(or.decodeBase900toBase10(n, or.NUMBER_OF_SEQUENCE_CODEWORDS)));
               let i = new T();
               (e = or.textCompaction(t, e, i)), r.setFileId(i.toString());
               let s = -1;
               for (t[e] === or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = e + 1); e < t[0]; )
                    switch (t[e]) {
                         case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                              switch (t[++e]) {
                                   case or.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                                        let n = new T();
                                        (e = or.textCompaction(t, e + 1, n)), r.setFileName(n.toString());
                                        break;
                                   case or.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                                        let i = new T();
                                        (e = or.textCompaction(t, e + 1, i)), r.setSender(i.toString());
                                        break;
                                   case or.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                                        let s = new T();
                                        (e = or.textCompaction(t, e + 1, s)), r.setAddressee(s.toString());
                                        break;
                                   case or.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                                        let o = new T();
                                        (e = or.numericCompaction(t, e + 1, o)), r.setSegmentCount(w.parseInt(o.toString()));
                                        break;
                                   case or.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                                        let a = new T();
                                        (e = or.numericCompaction(t, e + 1, a)), r.setTimestamp(Je.parseLong(a.toString()));
                                        break;
                                   case or.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                                        let h = new T();
                                        (e = or.numericCompaction(t, e + 1, h)), r.setChecksum(w.parseInt(h.toString()));
                                        break;
                                   case or.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                                        let l = new T();
                                        (e = or.numericCompaction(t, e + 1, l)), r.setFileSize(Je.parseLong(l.toString()));
                                        break;
                                   default:
                                        throw m.getFormatInstance();
                              }
                              break;
                         case or.MACRO_PDF417_TERMINATOR:
                              e++, r.setLastSegment(!0);
                              break;
                         default:
                              throw m.getFormatInstance();
                    }
               if (-1 !== s) {
                    let n = e - s;
                    r.isLastSegment() && n--, r.setOptionalData(f.copyOfRange(t, s, s + n));
               }
               return e;
          }
          static textCompaction(t, e, r) {
               let n = new Int32Array(2 * (t[0] - e)),
                    i = new Int32Array(2 * (t[0] - e)),
                    s = 0,
                    o = !1;
               for (; e < t[0] && !o; ) {
                    let r = t[e++];
                    if (r < or.TEXT_COMPACTION_MODE_LATCH) (n[s] = r / 30), (n[s + 1] = r % 30), (s += 2);
                    else
                         switch (r) {
                              case or.TEXT_COMPACTION_MODE_LATCH:
                                   n[s++] = or.TEXT_COMPACTION_MODE_LATCH;
                                   break;
                              case or.BYTE_COMPACTION_MODE_LATCH:
                              case or.BYTE_COMPACTION_MODE_LATCH_6:
                              case or.NUMERIC_COMPACTION_MODE_LATCH:
                              case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                              case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                              case or.MACRO_PDF417_TERMINATOR:
                                   e--, (o = !0);
                                   break;
                              case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                   (n[s] = or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE), (r = t[e++]), (i[s] = r), s++;
                         }
               }
               return or.decodeTextCompaction(n, i, s, r), e;
          }
          static decodeTextCompaction(t, e, r, n) {
               let i = W.ALPHA,
                    s = W.ALPHA,
                    o = 0;
               for (; o < r; ) {
                    let r = t[o],
                         a = '';
                    switch (i) {
                         case W.ALPHA:
                              if (r < 26) a = String.fromCharCode(65 + r);
                              else
                                   switch (r) {
                                        case 26:
                                             a = ' ';
                                             break;
                                        case or.LL:
                                             i = W.LOWER;
                                             break;
                                        case or.ML:
                                             i = W.MIXED;
                                             break;
                                        case or.PS:
                                             (s = i), (i = W.PUNCT_SHIFT);
                                             break;
                                        case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                             n.append(e[o]);
                                             break;
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                             i = W.ALPHA;
                                   }
                              break;
                         case W.LOWER:
                              if (r < 26) a = String.fromCharCode(97 + r);
                              else
                                   switch (r) {
                                        case 26:
                                             a = ' ';
                                             break;
                                        case or.AS:
                                             (s = i), (i = W.ALPHA_SHIFT);
                                             break;
                                        case or.ML:
                                             i = W.MIXED;
                                             break;
                                        case or.PS:
                                             (s = i), (i = W.PUNCT_SHIFT);
                                             break;
                                        case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                             n.append(e[o]);
                                             break;
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                             i = W.ALPHA;
                                   }
                              break;
                         case W.MIXED:
                              if (r < or.PL) a = or.MIXED_CHARS[r];
                              else
                                   switch (r) {
                                        case or.PL:
                                             i = W.PUNCT;
                                             break;
                                        case 26:
                                             a = ' ';
                                             break;
                                        case or.LL:
                                             i = W.LOWER;
                                             break;
                                        case or.AL:
                                             i = W.ALPHA;
                                             break;
                                        case or.PS:
                                             (s = i), (i = W.PUNCT_SHIFT);
                                             break;
                                        case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                             n.append(e[o]);
                                             break;
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                             i = W.ALPHA;
                                   }
                              break;
                         case W.PUNCT:
                              if (r < or.PAL) a = or.PUNCT_CHARS[r];
                              else
                                   switch (r) {
                                        case or.PAL:
                                             i = W.ALPHA;
                                             break;
                                        case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                             n.append(e[o]);
                                             break;
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                             i = W.ALPHA;
                                   }
                              break;
                         case W.ALPHA_SHIFT:
                              if (((i = s), r < 26)) a = String.fromCharCode(65 + r);
                              else
                                   switch (r) {
                                        case 26:
                                             a = ' ';
                                             break;
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                             i = W.ALPHA;
                                   }
                              break;
                         case W.PUNCT_SHIFT:
                              if (((i = s), r < or.PAL)) a = or.PUNCT_CHARS[r];
                              else
                                   switch (r) {
                                        case or.PAL:
                                             i = W.ALPHA;
                                             break;
                                        case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                             n.append(e[o]);
                                             break;
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                             i = W.ALPHA;
                                   }
                    }
                    '' !== a && n.append(a), o++;
               }
          }
          static byteCompaction(t, e, r, n, i) {
               let s = new rr(),
                    o = 0,
                    a = 0,
                    h = !1;
               switch (t) {
                    case or.BYTE_COMPACTION_MODE_LATCH:
                         let t = new Int32Array(6),
                              r = e[n++];
                         for (; n < e[0] && !h; )
                              switch (((t[o++] = r), (a = 900 * a + r), (r = e[n++]), r)) {
                                   case or.TEXT_COMPACTION_MODE_LATCH:
                                   case or.BYTE_COMPACTION_MODE_LATCH:
                                   case or.NUMERIC_COMPACTION_MODE_LATCH:
                                   case or.BYTE_COMPACTION_MODE_LATCH_6:
                                   case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                   case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                   case or.MACRO_PDF417_TERMINATOR:
                                        n--, (h = !0);
                                        break;
                                   default:
                                        if (o % 5 == 0 && o > 0) {
                                             for (let t = 0; t < 6; ++t) s.write(Number(sr(a) >> sr(8 * (5 - t))));
                                             (a = 0), (o = 0);
                                        }
                              }
                         n === e[0] && r < or.TEXT_COMPACTION_MODE_LATCH && (t[o++] = r);
                         for (let e = 0; e < o; e++) s.write(t[e]);
                         break;
                    case or.BYTE_COMPACTION_MODE_LATCH_6:
                         for (; n < e[0] && !h; ) {
                              let t = e[n++];
                              if (t < or.TEXT_COMPACTION_MODE_LATCH) o++, (a = 900 * a + t);
                              else
                                   switch (t) {
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                        case or.BYTE_COMPACTION_MODE_LATCH:
                                        case or.NUMERIC_COMPACTION_MODE_LATCH:
                                        case or.BYTE_COMPACTION_MODE_LATCH_6:
                                        case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                        case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                        case or.MACRO_PDF417_TERMINATOR:
                                             n--, (h = !0);
                                   }
                              if (o % 5 == 0 && o > 0) {
                                   for (let t = 0; t < 6; ++t) s.write(Number(sr(a) >> sr(8 * (5 - t))));
                                   (a = 0), (o = 0);
                              }
                         }
               }
               return i.append(S.decode(s.toByteArray(), r)), n;
          }
          static numericCompaction(t, e, r) {
               let n = 0,
                    i = !1,
                    s = new Int32Array(or.MAX_NUMERIC_CODEWORDS);
               for (; e < t[0] && !i; ) {
                    let o = t[e++];
                    if ((e === t[0] && (i = !0), o < or.TEXT_COMPACTION_MODE_LATCH)) (s[n] = o), n++;
                    else
                         switch (o) {
                              case or.TEXT_COMPACTION_MODE_LATCH:
                              case or.BYTE_COMPACTION_MODE_LATCH:
                              case or.BYTE_COMPACTION_MODE_LATCH_6:
                              case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                              case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                              case or.MACRO_PDF417_TERMINATOR:
                                   e--, (i = !0);
                         }
                    (n % or.MAX_NUMERIC_CODEWORDS == 0 || o === or.NUMERIC_COMPACTION_MODE_LATCH || i) &&
                         n > 0 &&
                         (r.append(or.decodeBase900toBase10(s, n)), (n = 0));
               }
               return e;
          }
          static decodeBase900toBase10(t, e) {
               let r = sr(0);
               for (let n = 0; n < e; n++) r += or.EXP900[e - n - 1] * sr(t[n]);
               let n = r.toString();
               if ('1' !== n.charAt(0)) throw new m();
               return n.substring(1);
          }
     }
     (or.TEXT_COMPACTION_MODE_LATCH = 900),
          (or.BYTE_COMPACTION_MODE_LATCH = 901),
          (or.NUMERIC_COMPACTION_MODE_LATCH = 902),
          (or.BYTE_COMPACTION_MODE_LATCH_6 = 924),
          (or.ECI_USER_DEFINED = 925),
          (or.ECI_GENERAL_PURPOSE = 926),
          (or.ECI_CHARSET = 927),
          (or.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928),
          (or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923),
          (or.MACRO_PDF417_TERMINATOR = 922),
          (or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913),
          (or.MAX_NUMERIC_CODEWORDS = 15),
          (or.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0),
          (or.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1),
          (or.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2),
          (or.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3),
          (or.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4),
          (or.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5),
          (or.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6),
          (or.PL = 25),
          (or.LL = 27),
          (or.AS = 27),
          (or.ML = 28),
          (or.AL = 28),
          (or.PS = 29),
          (or.PAL = 29),
          (or.PUNCT_CHARS = ';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\''),
          (or.MIXED_CHARS = '0123456789&\r\t,:#-.$/+%*=^'),
          (or.EXP900 = nr()
               ? (function () {
                      let t = [];
                      t[0] = sr(1);
                      let e = sr(900);
                      t[1] = e;
                      for (let r = 2; r < 16; r++) t[r] = t[r - 1] * e;
                      return t;
                 })()
               : []),
          (or.NUMBER_OF_SEQUENCE_CODEWORDS = 2);
     class ar {
          constructor() {}
          static decode(t, e, r, n, i, s, o) {
               let a,
                    h = new Xe(t, e, r, n, i),
                    l = null,
                    c = null;
               for (let r = !0; ; r = !1) {
                    if (
                         (null != e && (l = ar.getRowIndicatorColumn(t, h, e, !0, s, o)),
                         null != n && (c = ar.getRowIndicatorColumn(t, h, n, !1, s, o)),
                         (a = ar.merge(l, c)),
                         null == a)
                    )
                         throw N.getNotFoundInstance();
                    let i = a.getBoundingBox();
                    if (!r || null == i || !(i.getMinY() < h.getMinY() || i.getMaxY() > h.getMaxY())) break;
                    h = i;
               }
               a.setBoundingBox(h);
               let d = a.getBarcodeColumnCount() + 1;
               a.setDetectionResultColumn(0, l), a.setDetectionResultColumn(d, c);
               let u = null != l;
               for (let e = 1; e <= d; e++) {
                    let r,
                         n = u ? e : d - e;
                    if (void 0 !== a.getDetectionResultColumn(n)) continue;
                    (r = 0 === n || n === d ? new Ze(h, 0 === n) : new ze(h)), a.setDetectionResultColumn(n, r);
                    let i = -1,
                         l = i;
                    for (let e = h.getMinY(); e <= h.getMaxY(); e++) {
                         if (((i = ar.getStartColumn(a, n, e, u)), i < 0 || i > h.getMaxX())) {
                              if (-1 === l) continue;
                              i = l;
                         }
                         let c = ar.detectCodeword(t, h.getMinX(), h.getMaxX(), u, i, e, s, o);
                         null != c && (r.setCodeword(e, c), (l = i), (s = Math.min(s, c.getWidth())), (o = Math.max(o, c.getWidth())));
                    }
               }
               return ar.createDecoderResult(a);
          }
          static merge(t, e) {
               if (null == t && null == e) return null;
               let r = ar.getBarcodeMetadata(t, e);
               if (null == r) return null;
               let n = Xe.merge(ar.adjustBoundingBox(t), ar.adjustBoundingBox(e));
               return new Ke(r, n);
          }
          static adjustBoundingBox(t) {
               if (null == t) return null;
               let e = t.getRowHeights();
               if (null == e) return null;
               let r = ar.getMax(e),
                    n = 0;
               for (let t of e) if (((n += r - t), t > 0)) break;
               let i = t.getCodewords();
               for (let t = 0; n > 0 && null == i[t]; t++) n--;
               let s = 0;
               for (let t = e.length - 1; t >= 0 && ((s += r - e[t]), !(e[t] > 0)); t--);
               for (let t = i.length - 1; s > 0 && null == i[t]; t--) s--;
               return t.getBoundingBox().addMissingRows(n, s, t.isLeft());
          }
          static getMax(t) {
               let e = -1;
               for (let r of t) e = Math.max(e, r);
               return e;
          }
          static getBarcodeMetadata(t, e) {
               let r, n;
               return null == t || null == (r = t.getBarcodeMetadata())
                    ? null == e
                         ? null
                         : e.getBarcodeMetadata()
                    : null == e || null == (n = e.getBarcodeMetadata())
                    ? r
                    : r.getColumnCount() !== n.getColumnCount() &&
                      r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() &&
                      r.getRowCount() !== n.getRowCount()
                    ? null
                    : r;
          }
          static getRowIndicatorColumn(t, e, r, n, i, s) {
               let o = new Ze(e, n);
               for (let a = 0; a < 2; a++) {
                    let h = 0 === a ? 1 : -1,
                         l = Math.trunc(Math.trunc(r.getX()));
                    for (let a = Math.trunc(Math.trunc(r.getY())); a <= e.getMaxY() && a >= e.getMinY(); a += h) {
                         let e = ar.detectCodeword(t, 0, t.getWidth(), n, l, a, i, s);
                         null != e && (o.setCodeword(a, e), (l = n ? e.getStartX() : e.getEndX()));
                    }
               }
               return o;
          }
          static adjustCodewordCount(t, e) {
               let r = e[0][1],
                    n = r.getValue(),
                    i = t.getBarcodeColumnCount() * t.getBarcodeRowCount() - ar.getNumberOfECCodeWords(t.getBarcodeECLevel());
               if (0 === n.length) {
                    if (i < 1 || i > Fe.MAX_CODEWORDS_IN_BARCODE) throw N.getNotFoundInstance();
                    r.setValue(i);
               } else n[0] !== i && r.setValue(i);
          }
          static createDecoderResult(t) {
               let e = ar.createBarcodeMatrix(t);
               ar.adjustCodewordCount(t, e);
               let r = new Array(),
                    n = new Int32Array(t.getBarcodeRowCount() * t.getBarcodeColumnCount()),
                    i = [],
                    s = new Array();
               for (let o = 0; o < t.getBarcodeRowCount(); o++)
                    for (let a = 0; a < t.getBarcodeColumnCount(); a++) {
                         let h = e[o][a + 1].getValue(),
                              l = o * t.getBarcodeColumnCount() + a;
                         0 === h.length ? r.push(l) : 1 === h.length ? (n[l] = h[0]) : (s.push(l), i.push(h));
                    }
               let o = new Array(i.length);
               for (let t = 0; t < o.length; t++) o[t] = i[t];
               return ar.createDecoderResultFromAmbiguousValues(t.getBarcodeECLevel(), n, Fe.toIntArray(r), Fe.toIntArray(s), o);
          }
          static createDecoderResultFromAmbiguousValues(t, e, r, n, i) {
               let s = new Int32Array(n.length),
                    o = 100;
               for (; o-- > 0; ) {
                    for (let t = 0; t < s.length; t++) e[n[t]] = i[t][s[t]];
                    try {
                         return ar.decodeCodewords(e, t, r);
                    } catch (t) {
                         if (!(t instanceof l)) throw t;
                    }
                    if (0 === s.length) throw l.getChecksumInstance();
                    for (let t = 0; t < s.length; t++) {
                         if (s[t] < i[t].length - 1) {
                              s[t]++;
                              break;
                         }
                         if (((s[t] = 0), t === s.length - 1)) throw l.getChecksumInstance();
                    }
               }
               throw l.getChecksumInstance();
          }
          static createBarcodeMatrix(t) {
               let e = Array.from({ length: t.getBarcodeRowCount() }, () => new Array(t.getBarcodeColumnCount() + 2));
               for (let t = 0; t < e.length; t++) for (let r = 0; r < e[t].length; r++) e[t][r] = new Ye();
               let r = 0;
               for (let n of t.getDetectionResultColumns()) {
                    if (null != n)
                         for (let t of n.getCodewords())
                              if (null != t) {
                                   let n = t.getRowNumber();
                                   if (n >= 0) {
                                        if (n >= e.length) continue;
                                        e[n][r].setValue(t.getValue());
                                   }
                              }
                    r++;
               }
               return e;
          }
          static isValidBarcodeColumn(t, e) {
               return e >= 0 && e <= t.getBarcodeColumnCount() + 1;
          }
          static getStartColumn(t, e, r, n) {
               let i = n ? 1 : -1,
                    s = null;
               if ((ar.isValidBarcodeColumn(t, e - i) && (s = t.getDetectionResultColumn(e - i).getCodeword(r)), null != s))
                    return n ? s.getEndX() : s.getStartX();
               if (((s = t.getDetectionResultColumn(e).getCodewordNearby(r)), null != s)) return n ? s.getStartX() : s.getEndX();
               if ((ar.isValidBarcodeColumn(t, e - i) && (s = t.getDetectionResultColumn(e - i).getCodewordNearby(r)), null != s))
                    return n ? s.getEndX() : s.getStartX();
               let o = 0;
               for (; ar.isValidBarcodeColumn(t, e - i); ) {
                    e -= i;
                    for (let r of t.getDetectionResultColumn(e).getCodewords())
                         if (null != r) return (n ? r.getEndX() : r.getStartX()) + i * o * (r.getEndX() - r.getStartX());
                    o++;
               }
               return n ? t.getBoundingBox().getMinX() : t.getBoundingBox().getMaxX();
          }
          static detectCodeword(t, e, r, n, i, s, o, a) {
               i = ar.adjustCodewordStartColumn(t, e, r, n, i, s);
               let h,
                    l = ar.getModuleBitCount(t, e, r, n, i, s);
               if (null == l) return null;
               let c = et.sum(l);
               if (n) h = i + c;
               else {
                    for (let t = 0; t < l.length / 2; t++) {
                         let e = l[t];
                         (l[t] = l[l.length - 1 - t]), (l[l.length - 1 - t] = e);
                    }
                    (h = i), (i = h - c);
               }
               if (!ar.checkCodewordSkew(c, o, a)) return null;
               let d = Qe.getDecodedValue(l),
                    u = Fe.getCodeword(d);
               return -1 === u ? null : new qe(i, h, ar.getCodewordBucketNumber(d), u);
          }
          static getModuleBitCount(t, e, r, n, i, s) {
               let o = i,
                    a = new Int32Array(8),
                    h = 0,
                    l = n ? 1 : -1,
                    c = n;
               for (; (n ? o < r : o >= e) && h < a.length; ) t.get(o, s) === c ? (a[h]++, (o += l)) : (h++, (c = !c));
               return h === a.length || (o === (n ? r : e) && h === a.length - 1) ? a : null;
          }
          static getNumberOfECCodeWords(t) {
               return 2 << t;
          }
          static adjustCodewordStartColumn(t, e, r, n, i, s) {
               let o = i,
                    a = n ? -1 : 1;
               for (let h = 0; h < 2; h++) {
                    for (; (n ? o >= e : o < r) && n === t.get(o, s); ) {
                         if (Math.abs(i - o) > ar.CODEWORD_SKEW_SIZE) return i;
                         o += a;
                    }
                    (a = -a), (n = !n);
               }
               return o;
          }
          static checkCodewordSkew(t, e, r) {
               return e - ar.CODEWORD_SKEW_SIZE <= t && t <= r + ar.CODEWORD_SKEW_SIZE;
          }
          static decodeCodewords(t, e, r) {
               if (0 === t.length) throw m.getFormatInstance();
               let n = 1 << (e + 1),
                    i = ar.correctErrors(t, r, n);
               ar.verifyCodewordCount(t, n);
               let s = or.decode(t, '' + e);
               return s.setErrorsCorrected(i), s.setErasures(r.length), s;
          }
          static correctErrors(t, e, r) {
               if ((null != e && e.length > r / 2 + ar.MAX_ERRORS) || r < 0 || r > ar.MAX_EC_CODEWORDS) throw l.getChecksumInstance();
               return ar.errorCorrection.decode(t, r, e);
          }
          static verifyCodewordCount(t, e) {
               if (t.length < 4) throw m.getFormatInstance();
               let r = t[0];
               if (r > t.length) throw m.getFormatInstance();
               if (0 === r) {
                    if (!(e < t.length)) throw m.getFormatInstance();
                    t[0] = t.length - e;
               }
          }
          static getBitCountForCodeword(t) {
               let e = new Int32Array(8),
                    r = 0,
                    n = e.length - 1;
               for (; !((1 & t) !== r && ((r = 1 & t), n--, n < 0)); ) e[n]++, (t >>= 1);
               return e;
          }
          static getCodewordBucketNumber(t) {
               return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t) : this.getCodewordBucketNumber_number(t);
          }
          static getCodewordBucketNumber_number(t) {
               return ar.getCodewordBucketNumber(ar.getBitCountForCodeword(t));
          }
          static getCodewordBucketNumber_Int32Array(t) {
               return (t[0] - t[2] + t[4] - t[6] + 9) % 9;
          }
          static toString(t) {
               let e = new We();
               for (let r = 0; r < t.length; r++) {
                    e.format('Row %2d: ', r);
                    for (let n = 0; n < t[r].length; n++) {
                         let i = t[r][n];
                         0 === i.getValue().length ? e.format('        ', null) : e.format('%4d(%2d)', i.getValue()[0], i.getConfidence(i.getValue()[0]));
                    }
                    e.format('%n');
               }
               return e.toString();
          }
     }
     (ar.CODEWORD_SKEW_SIZE = 2), (ar.MAX_ERRORS = 3), (ar.MAX_EC_CODEWORDS = 512), (ar.errorCorrection = new Ue());
     class hr {
          decode(t, e = null) {
               let r = hr.decode(t, e, !1);
               if (null == r || 0 === r.length || null == r[0]) throw N.getNotFoundInstance();
               return r[0];
          }
          decodeMultiple(t, e = null) {
               try {
                    return hr.decode(t, e, !0);
               } catch (t) {
                    if (t instanceof m || t instanceof l) throw N.getNotFoundInstance();
                    throw t;
               }
          }
          static decode(t, e, r) {
               const n = new Array(),
                    i = ke.detectMultiple(t, e, r);
               for (const t of i.getPoints()) {
                    const e = ar.decode(i.getBits(), t[4], t[5], t[6], t[7], hr.getMinCodewordWidth(t), hr.getMaxCodewordWidth(t)),
                         r = new v(e.getText(), e.getRawBytes(), void 0, t, x.PDF_417);
                    r.putMetadata(z.ERROR_CORRECTION_LEVEL, e.getECLevel());
                    const s = e.getOther();
                    null != s && r.putMetadata(z.PDF417_EXTRA_METADATA, s), n.push(r);
               }
               return n.map((t) => t);
          }
          static getMaxWidth(t, e) {
               return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()));
          }
          static getMinWidth(t, e) {
               return null == t || null == e ? w.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()));
          }
          static getMaxCodewordWidth(t) {
               return Math.floor(
                    Math.max(
                         Math.max(hr.getMaxWidth(t[0], t[4]), (hr.getMaxWidth(t[6], t[2]) * Fe.MODULES_IN_CODEWORD) / Fe.MODULES_IN_STOP_PATTERN),
                         Math.max(hr.getMaxWidth(t[1], t[5]), (hr.getMaxWidth(t[7], t[3]) * Fe.MODULES_IN_CODEWORD) / Fe.MODULES_IN_STOP_PATTERN)
                    )
               );
          }
          static getMinCodewordWidth(t) {
               return Math.floor(
                    Math.min(
                         Math.min(hr.getMinWidth(t[0], t[4]), (hr.getMinWidth(t[6], t[2]) * Fe.MODULES_IN_CODEWORD) / Fe.MODULES_IN_STOP_PATTERN),
                         Math.min(hr.getMinWidth(t[1], t[5]), (hr.getMinWidth(t[7], t[3]) * Fe.MODULES_IN_CODEWORD) / Fe.MODULES_IN_STOP_PATTERN)
                    )
               );
          }
          reset() {}
     }
     class lr extends s {}
     lr.kind = 'ReaderException';
     class cr {
          decode(t, e) {
               return this.setHints(e), this.decodeInternal(t);
          }
          decodeWithState(t) {
               return (null !== this.readers && void 0 !== this.readers) || this.setHints(null), this.decodeInternal(t);
          }
          setHints(t) {
               this.hints = t;
               const e = null != t && void 0 !== t.get(E.TRY_HARDER),
                    r = null == t ? null : t.get(E.POSSIBLE_FORMATS),
                    n = new Array();
               if (null != r) {
                    const i = r.some(
                         (t) =>
                              t === x.UPC_A ||
                              t === x.UPC_E ||
                              t === x.EAN_13 ||
                              t === x.EAN_8 ||
                              t === x.CODABAR ||
                              t === x.CODE_39 ||
                              t === x.CODE_93 ||
                              t === x.CODE_128 ||
                              t === x.ITF ||
                              t === x.RSS_14 ||
                              t === x.RSS_EXPANDED
                    );
                    i && !e && n.push(new se(t)),
                         r.includes(x.QR_CODE) && n.push(new Le()),
                         r.includes(x.DATA_MATRIX) && n.push(new we()),
                         r.includes(x.AZTEC) && n.push(new gt()),
                         r.includes(x.PDF_417) && n.push(new hr()),
                         i && e && n.push(new se(t));
               }
               0 === n.length && (e || n.push(new se(t)), n.push(new Le()), n.push(new we()), n.push(new gt()), n.push(new hr()), e && n.push(new se(t))),
                    (this.readers = n);
          }
          reset() {
               if (null !== this.readers) for (const t of this.readers) t.reset();
          }
          decodeInternal(t) {
               if (null === this.readers) throw new lr('No readers where selected, nothing can be read.');
               for (const e of this.readers)
                    try {
                         return e.decode(t, this.hints);
                    } catch (t) {
                         if (t instanceof lr) continue;
                    }
               throw new N('No MultiFormat Readers were able to detect the code.');
          }
     }
     var dr;
     !(function (t) {
          (t[(t.ERROR_CORRECTION = 0)] = 'ERROR_CORRECTION'),
               (t[(t.CHARACTER_SET = 1)] = 'CHARACTER_SET'),
               (t[(t.DATA_MATRIX_SHAPE = 2)] = 'DATA_MATRIX_SHAPE'),
               (t[(t.DATA_MATRIX_COMPACT = 3)] = 'DATA_MATRIX_COMPACT'),
               (t[(t.MIN_SIZE = 4)] = 'MIN_SIZE'),
               (t[(t.MAX_SIZE = 5)] = 'MAX_SIZE'),
               (t[(t.MARGIN = 6)] = 'MARGIN'),
               (t[(t.PDF417_COMPACT = 7)] = 'PDF417_COMPACT'),
               (t[(t.PDF417_COMPACTION = 8)] = 'PDF417_COMPACTION'),
               (t[(t.PDF417_DIMENSIONS = 9)] = 'PDF417_DIMENSIONS'),
               (t[(t.AZTEC_LAYERS = 10)] = 'AZTEC_LAYERS'),
               (t[(t.QR_VERSION = 11)] = 'QR_VERSION'),
               (t[(t.GS1_FORMAT = 12)] = 'GS1_FORMAT'),
               (t[(t.FORCE_C40 = 13)] = 'FORCE_C40');
     })(dr || (dr = {}));
     var ur = dr;
     class gr {
          constructor(t) {
               (this.field = t), (this.cachedGenerators = []), this.cachedGenerators.push(new K(t, Int32Array.from([1])));
          }
          buildGenerator(t) {
               const e = this.cachedGenerators;
               if (t >= e.length) {
                    let r = e[e.length - 1];
                    const n = this.field;
                    for (let i = e.length; i <= t; i++) {
                         const t = r.multiply(new K(n, Int32Array.from([1, n.exp(i - 1 + n.getGeneratorBase())])));
                         e.push(t), (r = t);
                    }
               }
               return e[t];
          }
          encode(t, e) {
               if (0 === e) throw new a('No error correction bytes');
               const r = t.length - e;
               if (r <= 0) throw new a('No data bytes provided');
               const n = this.buildGenerator(e),
                    i = new Int32Array(r);
               d.arraycopy(t, 0, i, 0, r);
               let s = new K(this.field, i);
               s = s.multiplyByMonomial(e, 1);
               const o = s.divide(n)[1].getCoefficients(),
                    h = e - o.length;
               for (let e = 0; e < h; e++) t[r + e] = 0;
               d.arraycopy(o, 0, t, r + h, o.length);
          }
     }
     class fr {
          constructor() {}
          static applyMaskPenaltyRule1(t) {
               return fr.applyMaskPenaltyRule1Internal(t, !0) + fr.applyMaskPenaltyRule1Internal(t, !1);
          }
          static applyMaskPenaltyRule2(t) {
               let e = 0;
               const r = t.getArray(),
                    n = t.getWidth(),
                    i = t.getHeight();
               for (let t = 0; t < i - 1; t++) {
                    const i = r[t];
                    for (let s = 0; s < n - 1; s++) {
                         const n = i[s];
                         n === i[s + 1] && n === r[t + 1][s] && n === r[t + 1][s + 1] && e++;
                    }
               }
               return fr.N2 * e;
          }
          static applyMaskPenaltyRule3(t) {
               let e = 0;
               const r = t.getArray(),
                    n = t.getWidth(),
                    i = t.getHeight();
               for (let t = 0; t < i; t++)
                    for (let s = 0; s < n; s++) {
                         const o = r[t];
                         s + 6 < n &&
                              1 === o[s] &&
                              0 === o[s + 1] &&
                              1 === o[s + 2] &&
                              1 === o[s + 3] &&
                              1 === o[s + 4] &&
                              0 === o[s + 5] &&
                              1 === o[s + 6] &&
                              (fr.isWhiteHorizontal(o, s - 4, s) || fr.isWhiteHorizontal(o, s + 7, s + 11)) &&
                              e++,
                              t + 6 < i &&
                                   1 === r[t][s] &&
                                   0 === r[t + 1][s] &&
                                   1 === r[t + 2][s] &&
                                   1 === r[t + 3][s] &&
                                   1 === r[t + 4][s] &&
                                   0 === r[t + 5][s] &&
                                   1 === r[t + 6][s] &&
                                   (fr.isWhiteVertical(r, s, t - 4, t) || fr.isWhiteVertical(r, s, t + 7, t + 11)) &&
                                   e++;
                    }
               return e * fr.N3;
          }
          static isWhiteHorizontal(t, e, r) {
               (e = Math.max(e, 0)), (r = Math.min(r, t.length));
               for (let n = e; n < r; n++) if (1 === t[n]) return !1;
               return !0;
          }
          static isWhiteVertical(t, e, r, n) {
               (r = Math.max(r, 0)), (n = Math.min(n, t.length));
               for (let i = r; i < n; i++) if (1 === t[i][e]) return !1;
               return !0;
          }
          static applyMaskPenaltyRule4(t) {
               let e = 0;
               const r = t.getArray(),
                    n = t.getWidth(),
                    i = t.getHeight();
               for (let t = 0; t < i; t++) {
                    const i = r[t];
                    for (let t = 0; t < n; t++) 1 === i[t] && e++;
               }
               const s = t.getHeight() * t.getWidth();
               return Math.floor((10 * Math.abs(2 * e - s)) / s) * fr.N4;
          }
          static getDataMaskBit(t, e, r) {
               let n, i;
               switch (t) {
                    case 0:
                         n = (r + e) & 1;
                         break;
                    case 1:
                         n = 1 & r;
                         break;
                    case 2:
                         n = e % 3;
                         break;
                    case 3:
                         n = (r + e) % 3;
                         break;
                    case 4:
                         n = (Math.floor(r / 2) + Math.floor(e / 3)) & 1;
                         break;
                    case 5:
                         (i = r * e), (n = (1 & i) + (i % 3));
                         break;
                    case 6:
                         (i = r * e), (n = ((1 & i) + (i % 3)) & 1);
                         break;
                    case 7:
                         (i = r * e), (n = ((i % 3) + ((r + e) & 1)) & 1);
                         break;
                    default:
                         throw new a('Invalid mask pattern: ' + t);
               }
               return 0 === n;
          }
          static applyMaskPenaltyRule1Internal(t, e) {
               let r = 0;
               const n = e ? t.getHeight() : t.getWidth(),
                    i = e ? t.getWidth() : t.getHeight(),
                    s = t.getArray();
               for (let t = 0; t < n; t++) {
                    let n = 0,
                         o = -1;
                    for (let a = 0; a < i; a++) {
                         const i = e ? s[t][a] : s[a][t];
                         i === o ? n++ : (n >= 5 && (r += fr.N1 + (n - 5)), (n = 1), (o = i));
                    }
                    n >= 5 && (r += fr.N1 + (n - 5));
               }
               return r;
          }
     }
     (fr.N1 = 3), (fr.N2 = 3), (fr.N3 = 40), (fr.N4 = 10);
     class wr {
          constructor(t, e) {
               (this.width = t), (this.height = e);
               const r = new Array(e);
               for (let n = 0; n !== e; n++) r[n] = new Uint8Array(t);
               this.bytes = r;
          }
          getHeight() {
               return this.height;
          }
          getWidth() {
               return this.width;
          }
          get(t, e) {
               return this.bytes[e][t];
          }
          getArray() {
               return this.bytes;
          }
          setNumber(t, e, r) {
               this.bytes[e][t] = r;
          }
          setBoolean(t, e, r) {
               this.bytes[e][t] = r ? 1 : 0;
          }
          clear(t) {
               for (const e of this.bytes) f.fill(e, t);
          }
          equals(t) {
               if (!(t instanceof wr)) return !1;
               const e = t;
               if (this.width !== e.width) return !1;
               if (this.height !== e.height) return !1;
               for (let t = 0, r = this.height; t < r; ++t) {
                    const r = this.bytes[t],
                         n = e.bytes[t];
                    for (let t = 0, e = this.width; t < e; ++t) if (r[t] !== n[t]) return !1;
               }
               return !0;
          }
          toString() {
               const t = new T();
               for (let e = 0, r = this.height; e < r; ++e) {
                    const r = this.bytes[e];
                    for (let e = 0, n = this.width; e < n; ++e)
                         switch (r[e]) {
                              case 0:
                                   t.append(' 0');
                                   break;
                              case 1:
                                   t.append(' 1');
                                   break;
                              default:
                                   t.append('  ');
                         }
                    t.append('\n');
               }
               return t.toString();
          }
     }
     class Cr {
          constructor() {
               this.maskPattern = -1;
          }
          getMode() {
               return this.mode;
          }
          getECLevel() {
               return this.ecLevel;
          }
          getVersion() {
               return this.version;
          }
          getMaskPattern() {
               return this.maskPattern;
          }
          getMatrix() {
               return this.matrix;
          }
          toString() {
               const t = new T();
               return (
                    t.append('<<\n'),
                    t.append(' mode: '),
                    t.append(this.mode ? this.mode.toString() : 'null'),
                    t.append('\n ecLevel: '),
                    t.append(this.ecLevel ? this.ecLevel.toString() : 'null'),
                    t.append('\n version: '),
                    t.append(this.version ? this.version.toString() : 'null'),
                    t.append('\n maskPattern: '),
                    t.append(this.maskPattern.toString()),
                    this.matrix ? (t.append('\n matrix:\n'), t.append(this.matrix.toString())) : t.append('\n matrix: null\n'),
                    t.append('>>\n'),
                    t.toString()
               );
          }
          setMode(t) {
               this.mode = t;
          }
          setECLevel(t) {
               this.ecLevel = t;
          }
          setVersion(t) {
               this.version = t;
          }
          setMaskPattern(t) {
               this.maskPattern = t;
          }
          setMatrix(t) {
               this.matrix = t;
          }
          static isValidMaskPattern(t) {
               return t >= 0 && t < Cr.NUM_MASK_PATTERNS;
          }
     }
     Cr.NUM_MASK_PATTERNS = 8;
     class Ar extends s {}
     Ar.kind = 'WriterException';
     class Er {
          constructor() {}
          static clearMatrix(t) {
               t.clear(255);
          }
          static buildMatrix(t, e, r, n, i) {
               Er.clearMatrix(i), Er.embedBasicPatterns(r, i), Er.embedTypeInfo(e, n, i), Er.maybeEmbedVersionInfo(r, i), Er.embedDataBits(t, n, i);
          }
          static embedBasicPatterns(t, e) {
               Er.embedPositionDetectionPatternsAndSeparators(e),
                    Er.embedDarkDotAtLeftBottomCorner(e),
                    Er.maybeEmbedPositionAdjustmentPatterns(t, e),
                    Er.embedTimingPatterns(e);
          }
          static embedTypeInfo(t, e, r) {
               const n = new C();
               Er.makeTypeInfoBits(t, e, n);
               for (let t = 0, e = n.getSize(); t < e; ++t) {
                    const e = n.get(n.getSize() - 1 - t),
                         i = Er.TYPE_INFO_COORDINATES[t],
                         s = i[0],
                         o = i[1];
                    if ((r.setBoolean(s, o, e), t < 8)) {
                         const n = r.getWidth() - t - 1,
                              i = 8;
                         r.setBoolean(n, i, e);
                    } else {
                         const n = 8,
                              i = r.getHeight() - 7 + (t - 8);
                         r.setBoolean(n, i, e);
                    }
               }
          }
          static maybeEmbedVersionInfo(t, e) {
               if (t.getVersionNumber() < 7) return;
               const r = new C();
               Er.makeVersionInfoBits(t, r);
               let n = 17;
               for (let t = 0; t < 6; ++t)
                    for (let i = 0; i < 3; ++i) {
                         const s = r.get(n);
                         n--, e.setBoolean(t, e.getHeight() - 11 + i, s), e.setBoolean(e.getHeight() - 11 + i, t, s);
                    }
          }
          static embedDataBits(t, e, r) {
               let n = 0,
                    i = -1,
                    s = r.getWidth() - 1,
                    o = r.getHeight() - 1;
               for (; s > 0; ) {
                    for (6 === s && (s -= 1); o >= 0 && o < r.getHeight(); ) {
                         for (let i = 0; i < 2; ++i) {
                              const a = s - i;
                              if (!Er.isEmpty(r.get(a, o))) continue;
                              let h;
                              n < t.getSize() ? ((h = t.get(n)), ++n) : (h = !1), 255 !== e && fr.getDataMaskBit(e, a, o) && (h = !h), r.setBoolean(a, o, h);
                         }
                         o += i;
                    }
                    (i = -i), (o += i), (s -= 2);
               }
               if (n !== t.getSize()) throw new Ar('Not all bits consumed: ' + n + '/' + t.getSize());
          }
          static findMSBSet(t) {
               return 32 - w.numberOfLeadingZeros(t);
          }
          static calculateBCHCode(t, e) {
               if (0 === e) throw new a('0 polynomial');
               const r = Er.findMSBSet(e);
               for (t <<= r - 1; Er.findMSBSet(t) >= r; ) t ^= e << (Er.findMSBSet(t) - r);
               return t;
          }
          static makeTypeInfoBits(t, e, r) {
               if (!Cr.isValidMaskPattern(e)) throw new Ar('Invalid mask pattern');
               const n = (t.getBits() << 3) | e;
               r.appendBits(n, 5);
               const i = Er.calculateBCHCode(n, Er.TYPE_INFO_POLY);
               r.appendBits(i, 10);
               const s = new C();
               if ((s.appendBits(Er.TYPE_INFO_MASK_PATTERN, 15), r.xor(s), 15 !== r.getSize())) throw new Ar('should not happen but we got: ' + r.getSize());
          }
          static makeVersionInfoBits(t, e) {
               e.appendBits(t.getVersionNumber(), 6);
               const r = Er.calculateBCHCode(t.getVersionNumber(), Er.VERSION_INFO_POLY);
               if ((e.appendBits(r, 12), 18 !== e.getSize())) throw new Ar('should not happen but we got: ' + e.getSize());
          }
          static isEmpty(t) {
               return 255 === t;
          }
          static embedTimingPatterns(t) {
               for (let e = 8; e < t.getWidth() - 8; ++e) {
                    const r = (e + 1) % 2;
                    Er.isEmpty(t.get(e, 6)) && t.setNumber(e, 6, r), Er.isEmpty(t.get(6, e)) && t.setNumber(6, e, r);
               }
          }
          static embedDarkDotAtLeftBottomCorner(t) {
               if (0 === t.get(8, t.getHeight() - 8)) throw new Ar();
               t.setNumber(8, t.getHeight() - 8, 1);
          }
          static embedHorizontalSeparationPattern(t, e, r) {
               for (let n = 0; n < 8; ++n) {
                    if (!Er.isEmpty(r.get(t + n, e))) throw new Ar();
                    r.setNumber(t + n, e, 0);
               }
          }
          static embedVerticalSeparationPattern(t, e, r) {
               for (let n = 0; n < 7; ++n) {
                    if (!Er.isEmpty(r.get(t, e + n))) throw new Ar();
                    r.setNumber(t, e + n, 0);
               }
          }
          static embedPositionAdjustmentPattern(t, e, r) {
               for (let n = 0; n < 5; ++n) {
                    const i = Er.POSITION_ADJUSTMENT_PATTERN[n];
                    for (let s = 0; s < 5; ++s) r.setNumber(t + s, e + n, i[s]);
               }
          }
          static embedPositionDetectionPattern(t, e, r) {
               for (let n = 0; n < 7; ++n) {
                    const i = Er.POSITION_DETECTION_PATTERN[n];
                    for (let s = 0; s < 7; ++s) r.setNumber(t + s, e + n, i[s]);
               }
          }
          static embedPositionDetectionPatternsAndSeparators(t) {
               const e = Er.POSITION_DETECTION_PATTERN[0].length;
               Er.embedPositionDetectionPattern(0, 0, t),
                    Er.embedPositionDetectionPattern(t.getWidth() - e, 0, t),
                    Er.embedPositionDetectionPattern(0, t.getWidth() - e, t);
               Er.embedHorizontalSeparationPattern(0, 7, t),
                    Er.embedHorizontalSeparationPattern(t.getWidth() - 8, 7, t),
                    Er.embedHorizontalSeparationPattern(0, t.getWidth() - 8, t);
               Er.embedVerticalSeparationPattern(7, 0, t),
                    Er.embedVerticalSeparationPattern(t.getHeight() - 7 - 1, 0, t),
                    Er.embedVerticalSeparationPattern(7, t.getHeight() - 7, t);
          }
          static maybeEmbedPositionAdjustmentPatterns(t, e) {
               if (t.getVersionNumber() < 2) return;
               const r = t.getVersionNumber() - 1,
                    n = Er.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r];
               for (let t = 0, r = n.length; t !== r; t++) {
                    const i = n[t];
                    if (i >= 0)
                         for (let t = 0; t !== r; t++) {
                              const r = n[t];
                              r >= 0 && Er.isEmpty(e.get(r, i)) && Er.embedPositionAdjustmentPattern(r - 2, i - 2, e);
                         }
               }
          }
     }
     (Er.POSITION_DETECTION_PATTERN = Array.from([
          Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
     ])),
          (Er.POSITION_ADJUSTMENT_PATTERN = Array.from([
               Int32Array.from([1, 1, 1, 1, 1]),
               Int32Array.from([1, 0, 0, 0, 1]),
               Int32Array.from([1, 0, 1, 0, 1]),
               Int32Array.from([1, 0, 0, 0, 1]),
               Int32Array.from([1, 1, 1, 1, 1]),
          ])),
          (Er.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
               Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
               Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
               Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
               Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
               Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
               Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
               Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
               Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
               Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
               Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
               Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
               Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
               Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
               Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
               Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
               Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
               Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
               Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
               Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
               Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
               Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
               Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
               Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
               Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
               Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
               Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
               Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
               Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
               Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
               Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
               Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
               Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
               Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
               Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
               Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
               Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
               Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
               Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
               Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
               Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
          ])),
          (Er.TYPE_INFO_COORDINATES = Array.from([
               Int32Array.from([8, 0]),
               Int32Array.from([8, 1]),
               Int32Array.from([8, 2]),
               Int32Array.from([8, 3]),
               Int32Array.from([8, 4]),
               Int32Array.from([8, 5]),
               Int32Array.from([8, 7]),
               Int32Array.from([8, 8]),
               Int32Array.from([7, 8]),
               Int32Array.from([5, 8]),
               Int32Array.from([4, 8]),
               Int32Array.from([3, 8]),
               Int32Array.from([2, 8]),
               Int32Array.from([1, 8]),
               Int32Array.from([0, 8]),
          ])),
          (Er.VERSION_INFO_POLY = 7973),
          (Er.TYPE_INFO_POLY = 1335),
          (Er.TYPE_INFO_MASK_PATTERN = 21522);
     class mr {
          constructor(t, e) {
               (this.dataBytes = t), (this.errorCorrectionBytes = e);
          }
          getDataBytes() {
               return this.dataBytes;
          }
          getErrorCorrectionBytes() {
               return this.errorCorrectionBytes;
          }
     }
     class Ir {
          constructor() {}
          static calculateMaskPenalty(t) {
               return fr.applyMaskPenaltyRule1(t) + fr.applyMaskPenaltyRule2(t) + fr.applyMaskPenaltyRule3(t) + fr.applyMaskPenaltyRule4(t);
          }
          static encode(t, e, r = null) {
               let n = Ir.DEFAULT_BYTE_MODE_ENCODING;
               const i = null !== r && void 0 !== r.get(ur.CHARACTER_SET);
               i && (n = r.get(ur.CHARACTER_SET).toString());
               const s = this.chooseMode(t, n),
                    o = new C();
               if (s === Te.BYTE && (i || Ir.DEFAULT_BYTE_MODE_ENCODING !== n)) {
                    const t = I.getCharacterSetECIByName(n);
                    void 0 !== t && this.appendECI(t, o);
               }
               this.appendModeInfo(s, o);
               const a = new C();
               let h;
               if ((this.appendBytes(t, s, a, n), null !== r && void 0 !== r.get(ur.QR_VERSION))) {
                    const t = Number.parseInt(r.get(ur.QR_VERSION).toString(), 10);
                    h = Ie.getVersionForNumber(t);
                    const n = this.calculateBitsNeeded(s, o, a, h);
                    if (!this.willFit(n, h, e)) throw new Ar('Data too big for requested version');
               } else h = this.recommendVersion(e, s, o, a);
               const l = new C();
               l.appendBitArray(o);
               const c = s === Te.BYTE ? a.getSizeInBytes() : t.length;
               this.appendLengthInfo(c, h, s, l), l.appendBitArray(a);
               const d = h.getECBlocksForLevel(e),
                    u = h.getTotalCodewords() - d.getTotalECCodewords();
               this.terminateBits(u, l);
               const g = this.interleaveWithECBytes(l, h.getTotalCodewords(), u, d.getNumBlocks()),
                    f = new Cr();
               f.setECLevel(e), f.setMode(s), f.setVersion(h);
               const w = h.getDimensionForVersion(),
                    A = new wr(w, w),
                    E = this.chooseMaskPattern(g, e, h, A);
               return f.setMaskPattern(E), Er.buildMatrix(g, e, h, E, A), f.setMatrix(A), f;
          }
          static recommendVersion(t, e, r, n) {
               const i = this.calculateBitsNeeded(e, r, n, Ie.getVersionForNumber(1)),
                    s = this.chooseVersion(i, t),
                    o = this.calculateBitsNeeded(e, r, n, s);
               return this.chooseVersion(o, t);
          }
          static calculateBitsNeeded(t, e, r, n) {
               return e.getSize() + t.getCharacterCountBits(n) + r.getSize();
          }
          static getAlphanumericCode(t) {
               return t < Ir.ALPHANUMERIC_TABLE.length ? Ir.ALPHANUMERIC_TABLE[t] : -1;
          }
          static chooseMode(t, e = null) {
               if (I.SJIS.getName() === e && this.isOnlyDoubleByteKanji(t)) return Te.KANJI;
               let r = !1,
                    n = !1;
               for (let e = 0, i = t.length; e < i; ++e) {
                    const i = t.charAt(e);
                    if (Ir.isDigit(i)) r = !0;
                    else {
                         if (-1 === this.getAlphanumericCode(i.charCodeAt(0))) return Te.BYTE;
                         n = !0;
                    }
               }
               return n ? Te.ALPHANUMERIC : r ? Te.NUMERIC : Te.BYTE;
          }
          static isOnlyDoubleByteKanji(t) {
               let e;
               try {
                    e = S.encode(t, I.SJIS);
               } catch (t) {
                    return !1;
               }
               const r = e.length;
               if (r % 2 != 0) return !1;
               for (let t = 0; t < r; t += 2) {
                    const r = 255 & e[t];
                    if ((r < 129 || r > 159) && (r < 224 || r > 235)) return !1;
               }
               return !0;
          }
          static chooseMaskPattern(t, e, r, n) {
               let i = Number.MAX_SAFE_INTEGER,
                    s = -1;
               for (let o = 0; o < Cr.NUM_MASK_PATTERNS; o++) {
                    Er.buildMatrix(t, e, r, o, n);
                    let a = this.calculateMaskPenalty(n);
                    a < i && ((i = a), (s = o));
               }
               return s;
          }
          static chooseVersion(t, e) {
               for (let r = 1; r <= 40; r++) {
                    const n = Ie.getVersionForNumber(r);
                    if (Ir.willFit(t, n, e)) return n;
               }
               throw new Ar('Data too big');
          }
          static willFit(t, e, r) {
               return e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8;
          }
          static terminateBits(t, e) {
               const r = 8 * t;
               if (e.getSize() > r) throw new Ar('data bits cannot fit in the QR Code' + e.getSize() + ' > ' + r);
               for (let t = 0; t < 4 && e.getSize() < r; ++t) e.appendBit(!1);
               const n = 7 & e.getSize();
               if (n > 0) for (let t = n; t < 8; t++) e.appendBit(!1);
               const i = t - e.getSizeInBytes();
               for (let t = 0; t < i; ++t) e.appendBits(1 & t ? 17 : 236, 8);
               if (e.getSize() !== r) throw new Ar('Bits size does not equal capacity');
          }
          static getNumDataBytesAndNumECBytesForBlockID(t, e, r, n, i, s) {
               if (n >= r) throw new Ar('Block ID too large');
               const o = t % r,
                    a = r - o,
                    h = Math.floor(t / r),
                    l = h + 1,
                    c = Math.floor(e / r),
                    d = c + 1,
                    u = h - c,
                    g = l - d;
               if (u !== g) throw new Ar('EC bytes mismatch');
               if (r !== a + o) throw new Ar('RS blocks mismatch');
               if (t !== (c + u) * a + (d + g) * o) throw new Ar('Total bytes mismatch');
               n < a ? ((i[0] = c), (s[0] = u)) : ((i[0] = d), (s[0] = g));
          }
          static interleaveWithECBytes(t, e, r, n) {
               if (t.getSizeInBytes() !== r) throw new Ar('Number of bits and data bytes does not match');
               let i = 0,
                    s = 0,
                    o = 0;
               const a = new Array();
               for (let h = 0; h < n; ++h) {
                    const l = new Int32Array(1),
                         c = new Int32Array(1);
                    Ir.getNumDataBytesAndNumECBytesForBlockID(e, r, n, h, l, c);
                    const d = l[0],
                         u = new Uint8Array(d);
                    t.toBytes(8 * i, u, 0, d);
                    const g = Ir.generateECBytes(u, c[0]);
                    a.push(new mr(u, g)), (s = Math.max(s, d)), (o = Math.max(o, g.length)), (i += l[0]);
               }
               if (r !== i) throw new Ar('Data bytes does not match offset');
               const h = new C();
               for (let t = 0; t < s; ++t)
                    for (const e of a) {
                         const r = e.getDataBytes();
                         t < r.length && h.appendBits(r[t], 8);
                    }
               for (let t = 0; t < o; ++t)
                    for (const e of a) {
                         const r = e.getErrorCorrectionBytes();
                         t < r.length && h.appendBits(r[t], 8);
                    }
               if (e !== h.getSizeInBytes()) throw new Ar('Interleaving error: ' + e + ' and ' + h.getSizeInBytes() + ' differ.');
               return h;
          }
          static generateECBytes(t, e) {
               const r = t.length,
                    n = new Int32Array(r + e);
               for (let e = 0; e < r; e++) n[e] = 255 & t[e];
               new gr(Q.QR_CODE_FIELD_256).encode(n, e);
               const i = new Uint8Array(e);
               for (let t = 0; t < e; t++) i[t] = n[r + t];
               return i;
          }
          static appendModeInfo(t, e) {
               e.appendBits(t.getBits(), 4);
          }
          static appendLengthInfo(t, e, r, n) {
               const i = r.getCharacterCountBits(e);
               if (t >= 1 << i) throw new Ar(t + ' is bigger than ' + ((1 << i) - 1));
               n.appendBits(t, i);
          }
          static appendBytes(t, e, r, n) {
               switch (e) {
                    case Te.NUMERIC:
                         Ir.appendNumericBytes(t, r);
                         break;
                    case Te.ALPHANUMERIC:
                         Ir.appendAlphanumericBytes(t, r);
                         break;
                    case Te.BYTE:
                         Ir.append8BitBytes(t, r, n);
                         break;
                    case Te.KANJI:
                         Ir.appendKanjiBytes(t, r);
                         break;
                    default:
                         throw new Ar('Invalid mode: ' + e);
               }
          }
          static getDigit(t) {
               return t.charCodeAt(0) - 48;
          }
          static isDigit(t) {
               const e = Ir.getDigit(t);
               return e >= 0 && e <= 9;
          }
          static appendNumericBytes(t, e) {
               const r = t.length;
               let n = 0;
               for (; n < r; ) {
                    const i = Ir.getDigit(t.charAt(n));
                    if (n + 2 < r) {
                         const r = Ir.getDigit(t.charAt(n + 1)),
                              s = Ir.getDigit(t.charAt(n + 2));
                         e.appendBits(100 * i + 10 * r + s, 10), (n += 3);
                    } else if (n + 1 < r) {
                         const r = Ir.getDigit(t.charAt(n + 1));
                         e.appendBits(10 * i + r, 7), (n += 2);
                    } else e.appendBits(i, 4), n++;
               }
          }
          static appendAlphanumericBytes(t, e) {
               const r = t.length;
               let n = 0;
               for (; n < r; ) {
                    const i = Ir.getAlphanumericCode(t.charCodeAt(n));
                    if (-1 === i) throw new Ar();
                    if (n + 1 < r) {
                         const r = Ir.getAlphanumericCode(t.charCodeAt(n + 1));
                         if (-1 === r) throw new Ar();
                         e.appendBits(45 * i + r, 11), (n += 2);
                    } else e.appendBits(i, 6), n++;
               }
          }
          static append8BitBytes(t, e, r) {
               let n;
               try {
                    n = S.encode(t, r);
               } catch (t) {
                    throw new Ar(t);
               }
               for (let t = 0, r = n.length; t !== r; t++) {
                    const r = n[t];
                    e.appendBits(r, 8);
               }
          }
          static appendKanjiBytes(t, e) {
               let r;
               try {
                    r = S.encode(t, I.SJIS);
               } catch (t) {
                    throw new Ar(t);
               }
               const n = r.length;
               for (let t = 0; t < n; t += 2) {
                    const n = (((255 & r[t]) << 8) & 4294967295) | (255 & r[t + 1]);
                    let i = -1;
                    if ((n >= 33088 && n <= 40956 ? (i = n - 33088) : n >= 57408 && n <= 60351 && (i = n - 49472), -1 === i))
                         throw new Ar('Invalid byte sequence');
                    const s = 192 * (i >> 8) + (255 & i);
                    e.appendBits(s, 13);
               }
          }
          static appendECI(t, e) {
               e.appendBits(Te.ECI.getBits(), 4), e.appendBits(t.getValue(), 8);
          }
     }
     (Ir.ALPHANUMERIC_TABLE = Int32Array.from([
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37,
          38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
          22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1,
     ])),
          (Ir.DEFAULT_BYTE_MODE_ENCODING = I.UTF8.getName());
     class _r {
          write(t, e, r, n = null) {
               if (0 === t.length) throw new a('Found empty contents');
               if (e < 0 || r < 0) throw new a('Requested dimensions are too small: ' + e + 'x' + r);
               let i = Ce.L,
                    s = _r.QUIET_ZONE_SIZE;
               null !== n &&
                    (void 0 !== n.get(ur.ERROR_CORRECTION) && (i = Ce.fromString(n.get(ur.ERROR_CORRECTION).toString())),
                    void 0 !== n.get(ur.MARGIN) && (s = Number.parseInt(n.get(ur.MARGIN).toString(), 10)));
               const o = Ir.encode(t, i, n);
               return this.renderResult(o, e, r, s);
          }
          writeToDom(t, e, r, n, i = null) {
               'string' == typeof t && (t = document.querySelector(t));
               const s = this.write(e, r, n, i);
               t && t.appendChild(s);
          }
          renderResult(t, e, r, n) {
               const i = t.getMatrix();
               if (null === i) throw new J();
               const s = i.getWidth(),
                    o = i.getHeight(),
                    a = s + 2 * n,
                    h = o + 2 * n,
                    l = Math.max(e, a),
                    c = Math.max(r, h),
                    d = Math.min(Math.floor(l / a), Math.floor(c / h)),
                    u = Math.floor((l - s * d) / 2),
                    g = Math.floor((c - o * d) / 2),
                    f = this.createSVGElement(l, c);
               for (let t = 0, e = g; t < o; t++, e += d)
                    for (let r = 0, n = u; r < s; r++, n += d)
                         if (1 === i.get(r, t)) {
                              const t = this.createSvgRectElement(n, e, d, d);
                              f.appendChild(t);
                         }
               return f;
          }
          createSVGElement(t, e) {
               const r = document.createElementNS(_r.SVG_NS, 'svg');
               return r.setAttributeNS(null, 'height', t.toString()), r.setAttributeNS(null, 'width', e.toString()), r;
          }
          createSvgRectElement(t, e, r, n) {
               const i = document.createElementNS(_r.SVG_NS, 'rect');
               return (
                    i.setAttributeNS(null, 'x', t.toString()),
                    i.setAttributeNS(null, 'y', e.toString()),
                    i.setAttributeNS(null, 'height', r.toString()),
                    i.setAttributeNS(null, 'width', n.toString()),
                    i.setAttributeNS(null, 'fill', '#000000'),
                    i
               );
          }
     }
     (_r.QUIET_ZONE_SIZE = 4), (_r.SVG_NS = 'http://www.w3.org/2000/svg');
     class Sr {
          encode(t, e, r, n, i) {
               if (0 === t.length) throw new a('Found empty contents');
               if (e !== x.QR_CODE) throw new a('Can only encode QR_CODE, but got ' + e);
               if (r < 0 || n < 0) throw new a(`Requested dimensions are too small: ${r}x${n}`);
               let s = Ce.L,
                    o = Sr.QUIET_ZONE_SIZE;
               null !== i &&
                    (void 0 !== i.get(ur.ERROR_CORRECTION) && (s = Ce.fromString(i.get(ur.ERROR_CORRECTION).toString())),
                    void 0 !== i.get(ur.MARGIN) && (o = Number.parseInt(i.get(ur.MARGIN).toString(), 10)));
               const h = Ir.encode(t, s, i);
               return Sr.renderResult(h, r, n, o);
          }
          static renderResult(t, e, r, n) {
               const i = t.getMatrix();
               if (null === i) throw new J();
               const s = i.getWidth(),
                    o = i.getHeight(),
                    a = s + 2 * n,
                    h = o + 2 * n,
                    l = Math.max(e, a),
                    c = Math.max(r, h),
                    d = Math.min(Math.floor(l / a), Math.floor(c / h)),
                    u = Math.floor((l - s * d) / 2),
                    g = Math.floor((c - o * d) / 2),
                    f = new R(l, c);
               for (let t = 0, e = g; t < o; t++, e += d) for (let r = 0, n = u; r < s; r++, n += d) 1 === i.get(r, t) && f.setRegion(n, e, d, d);
               return f;
          }
     }
     Sr.QUIET_ZONE_SIZE = 4;
     class pr extends O {
          constructor(t, e, r, n, i, s, o, h) {
               if ((super(s, o), (this.yuvData = t), (this.dataWidth = e), (this.dataHeight = r), (this.left = n), (this.top = i), n + s > e || i + o > r))
                    throw new a('Crop rectangle does not fit within image data.');
               h && this.reverseHorizontal(s, o);
          }
          getRow(t, e) {
               if (t < 0 || t >= this.getHeight()) throw new a('Requested row is outside the image: ' + t);
               const r = this.getWidth();
               (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
               const n = (t + this.top) * this.dataWidth + this.left;
               return d.arraycopy(this.yuvData, n, e, 0, r), e;
          }
          getMatrix() {
               const t = this.getWidth(),
                    e = this.getHeight();
               if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
               const r = t * e,
                    n = new Uint8ClampedArray(r);
               let i = this.top * this.dataWidth + this.left;
               if (t === this.dataWidth) return d.arraycopy(this.yuvData, i, n, 0, r), n;
               for (let r = 0; r < e; r++) {
                    const e = r * t;
                    d.arraycopy(this.yuvData, i, n, e, t), (i += this.dataWidth);
               }
               return n;
          }
          isCropSupported() {
               return !0;
          }
          crop(t, e, r, n) {
               return new pr(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + e, r, n, !1);
          }
          renderThumbnail() {
               const t = this.getWidth() / pr.THUMBNAIL_SCALE_FACTOR,
                    e = this.getHeight() / pr.THUMBNAIL_SCALE_FACTOR,
                    r = new Int32Array(t * e),
                    n = this.yuvData;
               let i = this.top * this.dataWidth + this.left;
               for (let s = 0; s < e; s++) {
                    const e = s * t;
                    for (let s = 0; s < t; s++) {
                         const t = 255 & n[i + s * pr.THUMBNAIL_SCALE_FACTOR];
                         r[e + s] = 4278190080 | (65793 * t);
                    }
                    i += this.dataWidth * pr.THUMBNAIL_SCALE_FACTOR;
               }
               return r;
          }
          getThumbnailWidth() {
               return this.getWidth() / pr.THUMBNAIL_SCALE_FACTOR;
          }
          getThumbnailHeight() {
               return this.getHeight() / pr.THUMBNAIL_SCALE_FACTOR;
          }
          reverseHorizontal(t, e) {
               const r = this.yuvData;
               for (let n = 0, i = this.top * this.dataWidth + this.left; n < e; n++, i += this.dataWidth) {
                    const e = i + t / 2;
                    for (let n = i, s = i + t - 1; n < e; n++, s--) {
                         const t = r[n];
                         (r[n] = r[s]), (r[s] = t);
                    }
               }
          }
          invert() {
               return new M(this);
          }
     }
     pr.THUMBNAIL_SCALE_FACTOR = 2;
     class Tr extends O {
          constructor(t, e, r, n, i, s, o) {
               if ((super(e, r), (this.dataWidth = n), (this.dataHeight = i), (this.left = s), (this.top = o), 4 === t.BYTES_PER_ELEMENT)) {
                    const n = e * r,
                         i = new Uint8ClampedArray(n);
                    for (let e = 0; e < n; e++) {
                         const r = t[e],
                              n = (r >> 16) & 255,
                              s = (r >> 7) & 510,
                              o = 255 & r;
                         i[e] = ((n + s + o) / 4) & 255;
                    }
                    this.luminances = i;
               } else this.luminances = t;
               if (
                    (void 0 === n && (this.dataWidth = e),
                    void 0 === i && (this.dataHeight = r),
                    void 0 === s && (this.left = 0),
                    void 0 === o && (this.top = 0),
                    this.left + e > this.dataWidth || this.top + r > this.dataHeight)
               )
                    throw new a('Crop rectangle does not fit within image data.');
          }
          getRow(t, e) {
               if (t < 0 || t >= this.getHeight()) throw new a('Requested row is outside the image: ' + t);
               const r = this.getWidth();
               (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
               const n = (t + this.top) * this.dataWidth + this.left;
               return d.arraycopy(this.luminances, n, e, 0, r), e;
          }
          getMatrix() {
               const t = this.getWidth(),
                    e = this.getHeight();
               if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
               const r = t * e,
                    n = new Uint8ClampedArray(r);
               let i = this.top * this.dataWidth + this.left;
               if (t === this.dataWidth) return d.arraycopy(this.luminances, i, n, 0, r), n;
               for (let r = 0; r < e; r++) {
                    const e = r * t;
                    d.arraycopy(this.luminances, i, n, e, t), (i += this.dataWidth);
               }
               return n;
          }
          isCropSupported() {
               return !0;
          }
          crop(t, e, r, n) {
               return new Tr(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + t, this.top + e);
          }
          invert() {
               return new M(this);
          }
     }
     class Rr extends I {
          static forName(t) {
               return this.getCharacterSetECIByName(t);
          }
     }
     class Nr {}
     Nr.ISO_8859_1 = I.ISO8859_1;
     class yr {
          constructor(t, e, r) {
               (this.codewords = t), (this.numcols = e), (this.numrows = r), (this.bits = new Uint8Array(e * r)), f.fill(this.bits, 2);
          }
          getNumrows() {
               return this.numrows;
          }
          getNumcols() {
               return this.numcols;
          }
          getBits() {
               return this.bits;
          }
          getBit(t, e) {
               return 1 === this.bits[e * this.numcols + t];
          }
          setBit(t, e, r) {
               this.bits[e * this.numcols + t] = r ? 1 : 0;
          }
          noBit(t, e) {
               return 2 === this.bits[e * this.numcols + t];
          }
          place() {
               let t = 0,
                    e = 4,
                    r = 0;
               do {
                    e === this.numrows && 0 === r && this.corner1(t++),
                         e === this.numrows - 2 && 0 === r && this.numcols % 4 != 0 && this.corner2(t++),
                         e === this.numrows - 2 && 0 === r && this.numcols % 8 == 4 && this.corner3(t++),
                         e === this.numrows + 4 && 2 === r && this.numcols % 8 == 0 && this.corner4(t++);
                    do {
                         e < this.numrows && r >= 0 && this.noBit(r, e) && this.utah(e, r, t++), (e -= 2), (r += 2);
                    } while (e >= 0 && r < this.numcols);
                    e++, (r += 3);
                    do {
                         e >= 0 && r < this.numcols && this.noBit(r, e) && this.utah(e, r, t++), (e += 2), (r -= 2);
                    } while (e < this.numrows && r >= 0);
                    (e += 3), r++;
               } while (e < this.numrows || r < this.numcols);
               this.noBit(this.numcols - 1, this.numrows - 1) &&
                    (this.setBit(this.numcols - 1, this.numrows - 1, !0), this.setBit(this.numcols - 2, this.numrows - 2, !0));
          }
          module(t, e, r, n) {
               t < 0 && ((t += this.numrows), (e += 4 - ((this.numrows + 4) % 8))), e < 0 && ((e += this.numcols), (t += 4 - ((this.numcols + 4) % 8)));
               let i = this.codewords.charCodeAt(r);
               (i &= 1 << (8 - n)), this.setBit(e, t, 0 !== i);
          }
          utah(t, e, r) {
               this.module(t - 2, e - 2, r, 1),
                    this.module(t - 2, e - 1, r, 2),
                    this.module(t - 1, e - 2, r, 3),
                    this.module(t - 1, e - 1, r, 4),
                    this.module(t - 1, e, r, 5),
                    this.module(t, e - 2, r, 6),
                    this.module(t, e - 1, r, 7),
                    this.module(t, e, r, 8);
          }
          corner1(t) {
               this.module(this.numrows - 1, 0, t, 1),
                    this.module(this.numrows - 1, 1, t, 2),
                    this.module(this.numrows - 1, 2, t, 3),
                    this.module(0, this.numcols - 2, t, 4),
                    this.module(0, this.numcols - 1, t, 5),
                    this.module(1, this.numcols - 1, t, 6),
                    this.module(2, this.numcols - 1, t, 7),
                    this.module(3, this.numcols - 1, t, 8);
          }
          corner2(t) {
               this.module(this.numrows - 3, 0, t, 1),
                    this.module(this.numrows - 2, 0, t, 2),
                    this.module(this.numrows - 1, 0, t, 3),
                    this.module(0, this.numcols - 4, t, 4),
                    this.module(0, this.numcols - 3, t, 5),
                    this.module(0, this.numcols - 2, t, 6),
                    this.module(0, this.numcols - 1, t, 7),
                    this.module(1, this.numcols - 1, t, 8);
          }
          corner3(t) {
               this.module(this.numrows - 3, 0, t, 1),
                    this.module(this.numrows - 2, 0, t, 2),
                    this.module(this.numrows - 1, 0, t, 3),
                    this.module(0, this.numcols - 2, t, 4),
                    this.module(0, this.numcols - 1, t, 5),
                    this.module(1, this.numcols - 1, t, 6),
                    this.module(2, this.numcols - 1, t, 7),
                    this.module(3, this.numcols - 1, t, 8);
          }
          corner4(t) {
               this.module(this.numrows - 1, 0, t, 1),
                    this.module(this.numrows - 1, this.numcols - 1, t, 2),
                    this.module(0, this.numcols - 3, t, 3),
                    this.module(0, this.numcols - 2, t, 4),
                    this.module(0, this.numcols - 1, t, 5),
                    this.module(1, this.numcols - 3, t, 6),
                    this.module(1, this.numcols - 2, t, 7),
                    this.module(1, this.numcols - 1, t, 8);
          }
     }
     const Dr = [5, 7, 10, 11, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 62, 68],
          Or = [
               [228, 48, 15, 111, 62],
               [23, 68, 144, 134, 240, 92, 254],
               [28, 24, 185, 166, 223, 248, 116, 255, 110, 61],
               [175, 138, 205, 12, 194, 168, 39, 245, 60, 97, 120],
               [41, 153, 158, 91, 61, 42, 142, 213, 97, 178, 100, 242],
               [156, 97, 192, 252, 95, 9, 157, 119, 138, 45, 18, 186, 83, 185],
               [83, 195, 100, 39, 188, 75, 66, 61, 241, 213, 109, 129, 94, 254, 225, 48, 90, 188],
               [15, 195, 244, 9, 233, 71, 168, 2, 188, 160, 153, 145, 253, 79, 108, 82, 27, 174, 186, 172],
               [52, 190, 88, 205, 109, 39, 176, 21, 155, 197, 251, 223, 155, 21, 5, 172, 254, 124, 12, 181, 184, 96, 50, 193],
               [211, 231, 43, 97, 71, 96, 103, 174, 37, 151, 170, 53, 75, 34, 249, 121, 17, 138, 110, 213, 141, 136, 120, 151, 233, 168, 93, 255],
               [
                    245, 127, 242, 218, 130, 250, 162, 181, 102, 120, 84, 179, 220, 251, 80, 182, 229, 18, 2, 4, 68, 33, 101, 137, 95, 119, 115, 44, 175, 184,
                    59, 25, 225, 98, 81, 112,
               ],
               [
                    77, 193, 137, 31, 19, 38, 22, 153, 247, 105, 122, 2, 245, 133, 242, 8, 175, 95, 100, 9, 167, 105, 214, 111, 57, 121, 21, 1, 253, 57, 54,
                    101, 248, 202, 69, 50, 150, 177, 226, 5, 9, 5,
               ],
               [
                    245, 132, 172, 223, 96, 32, 117, 22, 238, 133, 238, 231, 205, 188, 237, 87, 191, 106, 16, 147, 118, 23, 37, 90, 170, 205, 131, 88, 120, 100,
                    66, 138, 186, 240, 82, 44, 176, 87, 187, 147, 160, 175, 69, 213, 92, 253, 225, 19,
               ],
               [
                    175, 9, 223, 238, 12, 17, 220, 208, 100, 29, 175, 170, 230, 192, 215, 235, 150, 159, 36, 223, 38, 200, 132, 54, 228, 146, 218, 234, 117,
                    203, 29, 232, 144, 238, 22, 150, 201, 117, 62, 207, 164, 13, 137, 245, 127, 67, 247, 28, 155, 43, 203, 107, 233, 53, 143, 46,
               ],
               [
                    242, 93, 169, 50, 144, 210, 39, 118, 202, 188, 201, 189, 143, 108, 196, 37, 185, 112, 134, 230, 245, 63, 197, 190, 250, 106, 185, 221, 175,
                    64, 114, 71, 161, 44, 147, 6, 27, 218, 51, 63, 87, 10, 40, 130, 188, 17, 163, 31, 176, 170, 4, 107, 232, 7, 94, 166, 224, 124, 86, 47, 11,
                    204,
               ],
               [
                    220, 228, 173, 89, 251, 149, 159, 56, 89, 33, 147, 244, 154, 36, 73, 127, 213, 136, 248, 180, 234, 197, 158, 177, 68, 122, 93, 213, 15, 160,
                    227, 236, 66, 139, 153, 185, 202, 167, 179, 25, 220, 232, 96, 210, 231, 136, 223, 239, 181, 241, 59, 52, 172, 25, 49, 232, 211, 189, 64, 54,
                    108, 153, 132, 63, 96, 103, 82, 186,
               ],
          ],
          { LOG: Mr, ALOG: br } = ((t, e) => {
               let r = 1;
               for (let n = 0; n < 255; n++) (e[n] = r), (t[r] = n), (r *= 2), r >= 256 && (r ^= 301);
               return { LOG: t, ALOG: e };
          })([], []);
     var Br;
     (t.DataMatrixSymbolShapeHint = void 0),
          ((Br = t.DataMatrixSymbolShapeHint || (t.DataMatrixSymbolShapeHint = {}))[(Br.FORCE_NONE = 0)] = 'FORCE_NONE'),
          (Br[(Br.FORCE_SQUARE = 1)] = 'FORCE_SQUARE'),
          (Br[(Br.FORCE_RECTANGLE = 2)] = 'FORCE_RECTANGLE');
     const Pr = '[)>05',
          Lr = '[)>06',
          Fr = '';
     class vr {
          static encodeECC200(t, e) {
               if (t.length !== e.getDataCapacity()) throw new Error('The number of codewords does not match the selected symbol');
               const r = new T();
               r.append(t);
               const n = e.getInterleavedBlockCount();
               if (1 === n) {
                    const n = this.createECCBlock(t, e.getErrorCodewords());
                    r.append(n);
               } else {
                    const i = [];
                    for (let t = 0; t < n; t++) e.getDataLengthForInterleavedBlock(t + 1), (i[t] = e.getErrorLengthForInterleavedBlock(t + 1));
                    for (let s = 0; s < n; s++) {
                         const o = new T();
                         for (let r = s; r < e.getDataCapacity(); r += n) o.append(t.charAt(r));
                         const a = this.createECCBlock(o.toString(), i[s]);
                         let h = 0;
                         for (let t = s; t < i[s] * n; t += n) r.setCharAt(e.getDataCapacity() + t, a.charAt(h++));
                    }
               }
               return r.toString();
          }
          static createECCBlock(t, e) {
               let r = -1;
               for (let t = 0; t < Dr.length; t++)
                    if (Dr[t] === e) {
                         r = t;
                         break;
                    }
               if (r < 0) throw new Error('Illegal number of error correction codewords specified: ' + e);
               const n = Or[r],
                    i = [];
               for (let t = 0; t < e; t++) i[t] = 0;
               for (let r = 0; r < t.length; r++) {
                    let s = i[e - 1] ^ t.charAt(r).charCodeAt(0);
                    for (let t = e - 1; t > 0; t--) 0 !== s && 0 !== n[t] ? (i[t] = i[t - 1] ^ br[(Mr[s] + Mr[n[t]]) % 255]) : (i[t] = i[t - 1]);
                    0 !== s && 0 !== n[0] ? (i[0] = br[(Mr[s] + Mr[n[0]]) % 255]) : (i[0] = 0);
               }
               const s = [];
               for (let t = 0; t < e; t++) s[t] = i[e - t - 1];
               return s.map((t) => String.fromCharCode(t)).join('');
          }
     }
     class kr {
          getEncodingMode() {
               return 0;
          }
          encode(t) {
               if (Yr.determineConsecutiveDigitCount(t.getMessage(), t.pos) >= 2)
                    t.writeCodeword(this.encodeASCIIDigits(t.getMessage().charCodeAt(t.pos), t.getMessage().charCodeAt(t.pos + 1))), (t.pos += 2);
               else {
                    const e = t.getCurrentChar(),
                         r = Yr.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode());
                    if (r !== this.getEncodingMode())
                         switch (r) {
                              case 5:
                                   return t.writeCodeword(231), void t.signalEncoderChange(5);
                              case 1:
                                   return t.writeCodeword(230), void t.signalEncoderChange(1);
                              case 3:
                                   t.writeCodeword(238), t.signalEncoderChange(3);
                                   break;
                              case 2:
                                   t.writeCodeword(239), t.signalEncoderChange(2);
                                   break;
                              case 4:
                                   t.writeCodeword(240), t.signalEncoderChange(4);
                                   break;
                              default:
                                   throw new Error('Illegal mode: ' + r);
                         }
                    else Yr.isExtendedASCII(e) ? (t.writeCodeword(235), t.writeCodeword(e - 128 + 1), t.pos++) : (t.writeCodeword(e + 1), t.pos++);
               }
          }
          encodeASCIIDigits(t, e) {
               if (Yr.isDigit(t) && Yr.isDigit(e)) {
                    return 10 * (t - 48) + (e - 48) + 130;
               }
               throw new Error('not digits: ' + t + e);
          }
     }
     class xr {
          getEncodingMode() {
               return 5;
          }
          encode(t) {
               const e = new T();
               for (e.append(0); t.hasMoreCharacters(); ) {
                    const r = t.getCurrentChar();
                    e.append(r), t.pos++;
                    if (Yr.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                         t.signalEncoderChange(0);
                         break;
                    }
               }
               const r = e.length() - 1,
                    n = t.getCodewordCount() + r + 1;
               t.updateSymbolInfo(n);
               const i = t.getSymbolInfo().getDataCapacity() - n > 0;
               if (t.hasMoreCharacters() || i)
                    if (r <= 249) e.setCharAt(0, p.getCharAt(r));
                    else {
                         if (!(r <= 1555)) throw new Error('Message length not in valid ranges: ' + r);
                         e.setCharAt(0, p.getCharAt(Math.floor(r / 250) + 249)), e.insert(1, p.getCharAt(r % 250));
                    }
               for (let r = 0, n = e.length(); r < n; r++) t.writeCodeword(this.randomize255State(e.charAt(r).charCodeAt(0), t.getCodewordCount() + 1));
          }
          randomize255State(t, e) {
               const r = t + (((149 * e) % 255) + 1);
               return r <= 255 ? r : r - 256;
          }
     }
     class Vr {
          getEncodingMode() {
               return 1;
          }
          encodeMaximal(t) {
               const e = new T();
               let r = 0,
                    n = t.pos,
                    i = 0;
               for (; t.hasMoreCharacters(); ) {
                    const s = t.getCurrentChar();
                    t.pos++, (r = this.encodeChar(s, e)), e.length() % 3 == 0 && ((n = t.pos), (i = e.length()));
               }
               if (i !== e.length()) {
                    const i = Math.floor((e.length() / 3) * 2),
                         s = Math.floor(t.getCodewordCount() + i + 1);
                    t.updateSymbolInfo(s);
                    const o = t.getSymbolInfo().getDataCapacity() - s,
                         a = Math.floor(e.length() % 3);
                    ((2 === a && 2 !== o) || (1 === a && (r > 3 || 1 !== o))) && (t.pos = n);
               }
               e.length() > 0 && t.writeCodeword(230), this.handleEOD(t, e);
          }
          encode(t) {
               const e = new T();
               for (; t.hasMoreCharacters(); ) {
                    const r = t.getCurrentChar();
                    t.pos++;
                    let n = this.encodeChar(r, e);
                    const i = 2 * Math.floor(e.length() / 3),
                         s = t.getCodewordCount() + i;
                    t.updateSymbolInfo(s);
                    const o = t.getSymbolInfo().getDataCapacity() - s;
                    if (!t.hasMoreCharacters()) {
                         const r = new T();
                         for (e.length() % 3 == 2 && 2 !== o && (n = this.backtrackOneCharacter(t, e, r, n)); e.length() % 3 == 1 && (n > 3 || 1 !== o); )
                              n = this.backtrackOneCharacter(t, e, r, n);
                         break;
                    }
                    if (e.length() % 3 == 0) {
                         if (Yr.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                              t.signalEncoderChange(0);
                              break;
                         }
                    }
               }
               this.handleEOD(t, e);
          }
          backtrackOneCharacter(t, e, r, n) {
               const i = e.length(),
                    s = e.toString().substring(0, i - n);
               e.setLengthToZero(), e.append(s), t.pos--;
               const o = t.getCurrentChar();
               return (n = this.encodeChar(o, r)), t.resetSymbolInfo(), n;
          }
          writeNextTriplet(t, e) {
               t.writeCodewords(this.encodeToCodewords(e.toString()));
               const r = e.toString().substring(3);
               e.setLengthToZero(), e.append(r);
          }
          handleEOD(t, e) {
               const r = Math.floor((e.length() / 3) * 2),
                    n = e.length() % 3,
                    i = t.getCodewordCount() + r;
               t.updateSymbolInfo(i);
               const s = t.getSymbolInfo().getDataCapacity() - i;
               if (2 === n) {
                    for (e.append('\0'); e.length() >= 3; ) this.writeNextTriplet(t, e);
                    t.hasMoreCharacters() && t.writeCodeword(254);
               } else if (1 === s && 1 === n) {
                    for (; e.length() >= 3; ) this.writeNextTriplet(t, e);
                    t.hasMoreCharacters() && t.writeCodeword(254), t.pos--;
               } else {
                    if (0 !== n) throw new Error('Unexpected case. Please report!');
                    for (; e.length() >= 3; ) this.writeNextTriplet(t, e);
                    (s > 0 || t.hasMoreCharacters()) && t.writeCodeword(254);
               }
               t.signalEncoderChange(0);
          }
          encodeChar(t, e) {
               if (t === ' '.charCodeAt(0)) return e.append(3), 1;
               if (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) return e.append(t - 48 + 4), 1;
               if (t >= 'A'.charCodeAt(0) && t <= 'Z'.charCodeAt(0)) return e.append(t - 65 + 14), 1;
               if (t < ' '.charCodeAt(0)) return e.append(0), e.append(t), 2;
               if (t <= '/'.charCodeAt(0)) return e.append(1), e.append(t - 33), 2;
               if (t <= '@'.charCodeAt(0)) return e.append(1), e.append(t - 58 + 15), 2;
               if (t <= '_'.charCodeAt(0)) return e.append(1), e.append(t - 91 + 22), 2;
               if (t <= 127) return e.append(2), e.append(t - 96), 2;
               e.append('1');
               let r = 2;
               return (r += this.encodeChar(t - 128, e)), r;
          }
          encodeToCodewords(t) {
               const e = 1600 * t.charCodeAt(0) + 40 * t.charCodeAt(1) + t.charCodeAt(2) + 1,
                    r = e / 256,
                    n = e % 256,
                    i = new T();
               return i.append(r), i.append(n), i.toString();
          }
     }
     class Hr {
          getEncodingMode() {
               return 4;
          }
          encode(t) {
               const e = new T();
               for (; t.hasMoreCharacters(); ) {
                    const r = t.getCurrentChar();
                    this.encodeChar(r, e), t.pos++;
                    if (e.length() >= 4) {
                         t.writeCodewords(this.encodeToCodewords(e.toString()));
                         const r = e.toString().substring(4);
                         e.setLengthToZero(), e.append(r);
                         if (Yr.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                              t.signalEncoderChange(0);
                              break;
                         }
                    }
               }
               e.append(p.getCharAt(31)), this.handleEOD(t, e);
          }
          handleEOD(t, e) {
               try {
                    const r = e.length();
                    if (0 === r) return;
                    if (1 === r) {
                         t.updateSymbolInfo();
                         let e = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount();
                         const r = t.getRemainingCharacters();
                         if (
                              (r > e && (t.updateSymbolInfo(t.getCodewordCount() + 1), (e = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount())),
                              r <= e && e <= 2)
                         )
                              return;
                    }
                    if (r > 4) throw new Error('Count must not exceed 4');
                    const n = r - 1,
                         i = this.encodeToCodewords(e.toString());
                    let s = !t.hasMoreCharacters() && n <= 2;
                    if (n <= 2) {
                         t.updateSymbolInfo(t.getCodewordCount() + n);
                         t.getSymbolInfo().getDataCapacity() - t.getCodewordCount() >= 3 && ((s = !1), t.updateSymbolInfo(t.getCodewordCount() + i.length));
                    }
                    s ? (t.resetSymbolInfo(), (t.pos -= n)) : t.writeCodewords(i);
               } finally {
                    t.signalEncoderChange(0);
               }
          }
          encodeChar(t, e) {
               t >= ' '.charCodeAt(0) && t <= '?'.charCodeAt(0)
                    ? e.append(t)
                    : t >= '@'.charCodeAt(0) && t <= '^'.charCodeAt(0)
                    ? e.append(p.getCharAt(t - 64))
                    : Yr.illegalCharacter(p.getCharAt(t));
          }
          encodeToCodewords(t) {
               const e = t.length;
               if (0 === e) throw new Error('StringBuilder must not be empty');
               const r =
                         (t.charAt(0).charCodeAt(0) << 18) +
                         ((e >= 2 ? t.charAt(1).charCodeAt(0) : 0) << 12) +
                         ((e >= 3 ? t.charAt(2).charCodeAt(0) : 0) << 6) +
                         (e >= 4 ? t.charAt(3).charCodeAt(0) : 0),
                    n = (r >> 16) & 255,
                    i = (r >> 8) & 255,
                    s = 255 & r,
                    o = new T();
               return o.append(n), e >= 2 && o.append(i), e >= 3 && o.append(s), o.toString();
          }
     }
     class Ur {
          constructor(t, e, r, n, i, s, o = 0, a = 0) {
               (this.rectangular = t),
                    (this.dataCapacity = e),
                    (this.errorCodewords = r),
                    (this.matrixWidth = n),
                    (this.matrixHeight = i),
                    (this.dataRegions = s),
                    (this.rsBlockData = o),
                    (this.rsBlockError = a);
          }
          static lookup(t, e = 0, r = null, n = null, i = !0) {
               for (const i of Xr)
                    if (
                         (1 !== e || !i.rectangular) &&
                         (2 !== e || i.rectangular) &&
                         (null == r || !(i.getSymbolWidth() < r.getWidth() || i.getSymbolHeight() < r.getHeight())) &&
                         (null == n || !(i.getSymbolWidth() > n.getWidth() || i.getSymbolHeight() > n.getHeight())) &&
                         t <= i.dataCapacity
                    )
                         return i;
               if (i) throw new Error("Can't find a symbol arrangement that matches the message. Data codewords: " + t);
               return null;
          }
          getHorizontalDataRegions() {
               switch (this.dataRegions) {
                    case 1:
                         return 1;
                    case 2:
                    case 4:
                         return 2;
                    case 16:
                         return 4;
                    case 36:
                         return 6;
                    default:
                         throw new Error('Cannot handle this number of data regions');
               }
          }
          getVerticalDataRegions() {
               switch (this.dataRegions) {
                    case 1:
                    case 2:
                         return 1;
                    case 4:
                         return 2;
                    case 16:
                         return 4;
                    case 36:
                         return 6;
                    default:
                         throw new Error('Cannot handle this number of data regions');
               }
          }
          getSymbolDataWidth() {
               return this.getHorizontalDataRegions() * this.matrixWidth;
          }
          getSymbolDataHeight() {
               return this.getVerticalDataRegions() * this.matrixHeight;
          }
          getSymbolWidth() {
               return this.getSymbolDataWidth() + 2 * this.getHorizontalDataRegions();
          }
          getSymbolHeight() {
               return this.getSymbolDataHeight() + 2 * this.getVerticalDataRegions();
          }
          getCodewordCount() {
               return this.dataCapacity + this.errorCodewords;
          }
          getInterleavedBlockCount() {
               return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1;
          }
          getDataCapacity() {
               return this.dataCapacity;
          }
          getErrorCodewords() {
               return this.errorCodewords;
          }
          getDataLengthForInterleavedBlock(t) {
               return this.rsBlockData;
          }
          getErrorLengthForInterleavedBlock(t) {
               return this.rsBlockError;
          }
     }
     const Xr = [
          new Ur(!1, 3, 5, 8, 8, 1),
          new Ur(!1, 5, 7, 10, 10, 1),
          new Ur(!0, 5, 7, 16, 6, 1),
          new Ur(!1, 8, 10, 12, 12, 1),
          new Ur(!0, 10, 11, 14, 6, 2),
          new Ur(!1, 12, 12, 14, 14, 1),
          new Ur(!0, 16, 14, 24, 10, 1),
          new Ur(!1, 18, 14, 16, 16, 1),
          new Ur(!1, 22, 18, 18, 18, 1),
          new Ur(!0, 22, 18, 16, 10, 2),
          new Ur(!1, 30, 20, 20, 20, 1),
          new Ur(!0, 32, 24, 16, 14, 2),
          new Ur(!1, 36, 24, 22, 22, 1),
          new Ur(!1, 44, 28, 24, 24, 1),
          new Ur(!0, 49, 28, 22, 14, 2),
          new Ur(!1, 62, 36, 14, 14, 4),
          new Ur(!1, 86, 42, 16, 16, 4),
          new Ur(!1, 114, 48, 18, 18, 4),
          new Ur(!1, 144, 56, 20, 20, 4),
          new Ur(!1, 174, 68, 22, 22, 4),
          new Ur(!1, 204, 84, 24, 24, 4, 102, 42),
          new Ur(!1, 280, 112, 14, 14, 16, 140, 56),
          new Ur(!1, 368, 144, 16, 16, 16, 92, 36),
          new Ur(!1, 456, 192, 18, 18, 16, 114, 48),
          new Ur(!1, 576, 224, 20, 20, 16, 144, 56),
          new Ur(!1, 696, 272, 22, 22, 16, 174, 68),
          new Ur(!1, 816, 336, 24, 24, 16, 136, 56),
          new Ur(!1, 1050, 408, 18, 18, 36, 175, 68),
          new Ur(!1, 1304, 496, 20, 20, 36, 163, 62),
          new (class extends Ur {
               constructor() {
                    super(!1, 1558, 620, 22, 22, 36, -1, 62);
               }
               getInterleavedBlockCount() {
                    return 10;
               }
               getDataLengthForInterleavedBlock(t) {
                    return t <= 8 ? 156 : 155;
               }
          })(),
     ];
     class Gr {
          constructor(t) {
               (this.msg = t), (this.pos = 0), (this.skipAtEnd = 0);
               const e = t.split('').map((t) => t.charCodeAt(0)),
                    r = new T();
               for (let n = 0, i = e.length; n < i; n++) {
                    const i = String.fromCharCode(255 & e[n]);
                    if ('?' === i && '?' !== t.charAt(n)) throw new Error('Message contains characters outside ISO-8859-1 encoding.');
                    r.append(i);
               }
               (this.msg = r.toString()), (this.shape = 0), (this.codewords = new T()), (this.newEncoding = -1);
          }
          setSymbolShape(t) {
               this.shape = t;
          }
          setSizeConstraints(t, e) {
               (this.minSize = t), (this.maxSize = e);
          }
          getMessage() {
               return this.msg;
          }
          setSkipAtEnd(t) {
               this.skipAtEnd = t;
          }
          getCurrentChar() {
               return this.msg.charCodeAt(this.pos);
          }
          getCurrent() {
               return this.msg.charCodeAt(this.pos);
          }
          getCodewords() {
               return this.codewords;
          }
          writeCodewords(t) {
               this.codewords.append(t);
          }
          writeCodeword(t) {
               this.codewords.append(t);
          }
          getCodewordCount() {
               return this.codewords.length();
          }
          getNewEncoding() {
               return this.newEncoding;
          }
          signalEncoderChange(t) {
               this.newEncoding = t;
          }
          resetEncoderSignal() {
               this.newEncoding = -1;
          }
          hasMoreCharacters() {
               return this.pos < this.getTotalMessageCharCount();
          }
          getTotalMessageCharCount() {
               return this.msg.length - this.skipAtEnd;
          }
          getRemainingCharacters() {
               return this.getTotalMessageCharCount() - this.pos;
          }
          getSymbolInfo() {
               return this.symbolInfo;
          }
          updateSymbolInfo(t = this.getCodewordCount()) {
               (null == this.symbolInfo || t > this.symbolInfo.getDataCapacity()) &&
                    (this.symbolInfo = Ur.lookup(t, this.shape, this.minSize, this.maxSize, !0));
          }
          resetSymbolInfo() {
               this.symbolInfo = null;
          }
     }
     class Wr extends Vr {
          getEncodingMode() {
               return 3;
          }
          encode(t) {
               const e = new T();
               for (; t.hasMoreCharacters(); ) {
                    const r = t.getCurrentChar();
                    t.pos++, this.encodeChar(r, e);
                    if (e.length() % 3 == 0) {
                         this.writeNextTriplet(t, e);
                         if (Yr.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                              t.signalEncoderChange(0);
                              break;
                         }
                    }
               }
               this.handleEOD(t, e);
          }
          encodeChar(t, e) {
               switch (t) {
                    case 13:
                         e.append(0);
                         break;
                    case '*'.charCodeAt(0):
                         e.append(1);
                         break;
                    case '>'.charCodeAt(0):
                         e.append(2);
                         break;
                    case ' '.charCodeAt(0):
                         e.append(3);
                         break;
                    default:
                         t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)
                              ? e.append(t - 48 + 4)
                              : t >= 'A'.charCodeAt(0) && t <= 'Z'.charCodeAt(0)
                              ? e.append(t - 65 + 14)
                              : Yr.illegalCharacter(p.getCharAt(t));
               }
               return 1;
          }
          handleEOD(t, e) {
               t.updateSymbolInfo();
               const r = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount(),
                    n = e.length();
               (t.pos -= n),
                    (t.getRemainingCharacters() > 1 || r > 1 || t.getRemainingCharacters() !== r) && t.writeCodeword(254),
                    t.getNewEncoding() < 0 && t.signalEncoderChange(0);
          }
     }
     class zr extends Vr {
          getEncodingMode() {
               return 2;
          }
          encodeChar(t, e) {
               if (t === ' '.charCodeAt(0)) return e.append(3), 1;
               if (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) return e.append(t - 48 + 4), 1;
               if (t >= 'a'.charCodeAt(0) && t <= 'z'.charCodeAt(0)) return e.append(t - 97 + 14), 1;
               if (t < ' '.charCodeAt(0)) return e.append(0), e.append(t), 2;
               if (t <= '/'.charCodeAt(0)) return e.append(1), e.append(t - 33), 2;
               if (t <= '@'.charCodeAt(0)) return e.append(1), e.append(t - 58 + 15), 2;
               if (t >= '['.charCodeAt(0) && t <= '_'.charCodeAt(0)) return e.append(1), e.append(t - 91 + 22), 2;
               if (t === '`'.charCodeAt(0)) return e.append(2), e.append(0), 2;
               if (t <= 'Z'.charCodeAt(0)) return e.append(2), e.append(t - 65 + 1), 2;
               if (t <= 127) return e.append(2), e.append(t - 123 + 27), 2;
               e.append('1');
               let r = 2;
               return (r += this.encodeChar(t - 128, e)), r;
          }
     }
     class Yr {
          static randomize253State(t) {
               const e = 129 + (((149 * t) % 253) + 1);
               return e <= 254 ? e : e - 254;
          }
          static encodeHighLevel(t, e = 0, r = null, n = null, i = !1) {
               const s = new Vr(),
                    o = [new kr(), s, new zr(), new Wr(), new Hr(), new xr()],
                    a = new Gr(t);
               a.setSymbolShape(e),
                    a.setSizeConstraints(r, n),
                    t.startsWith(Pr) && t.endsWith(Fr)
                         ? (a.writeCodeword(236), a.setSkipAtEnd(2), (a.pos += 7))
                         : t.startsWith(Lr) && t.endsWith(Fr) && (a.writeCodeword(237), a.setSkipAtEnd(2), (a.pos += 7));
               let h = 0;
               for (i && (s.encodeMaximal(a), (h = a.getNewEncoding()), a.resetEncoderSignal()); a.hasMoreCharacters(); )
                    o[h].encode(a), a.getNewEncoding() >= 0 && ((h = a.getNewEncoding()), a.resetEncoderSignal());
               const l = a.getCodewordCount();
               a.updateSymbolInfo();
               const c = a.getSymbolInfo().getDataCapacity();
               l < c && 0 !== h && 5 !== h && 4 !== h && a.writeCodeword('þ');
               const d = a.getCodewords();
               for (d.length() < c && d.append(129); d.length() < c; ) d.append(this.randomize253State(d.length() + 1));
               return a.getCodewords().toString();
          }
          static lookAheadTest(t, e, r) {
               const n = this.lookAheadTestIntern(t, e, r);
               if (3 === r && 3 === n) {
                    const r = Math.min(e + 3, t.length);
                    for (let n = e; n < r; n++) if (!this.isNativeX12(t.charCodeAt(n))) return 0;
               } else if (4 === r && 4 === n) {
                    const r = Math.min(e + 4, t.length);
                    for (let n = e; n < r; n++) if (!this.isNativeEDIFACT(t.charCodeAt(n))) return 0;
               }
               return n;
          }
          static lookAheadTestIntern(t, e, r) {
               if (e >= t.length) return r;
               let n;
               0 === r ? (n = [0, 1, 1, 1, 1, 1.25]) : ((n = [1, 2, 2, 2, 2, 2.25]), (n[r] = 0));
               let i = 0;
               const s = new Uint8Array(6),
                    o = [];
               for (;;) {
                    if (e + i === t.length) {
                         f.fill(s, 0), f.fill(o, 0);
                         const t = this.findMinimums(n, o, w.MAX_VALUE, s),
                              e = this.getMinimumCount(s);
                         if (o[0] === t) return 0;
                         if (1 === e) {
                              if (s[5] > 0) return 5;
                              if (s[4] > 0) return 4;
                              if (s[2] > 0) return 2;
                              if (s[3] > 0) return 3;
                         }
                         return 1;
                    }
                    const r = t.charCodeAt(e + i);
                    if (
                         (i++,
                         this.isDigit(r)
                              ? (n[0] += 0.5)
                              : this.isExtendedASCII(r)
                              ? ((n[0] = Math.ceil(n[0])), (n[0] += 2))
                              : ((n[0] = Math.ceil(n[0])), n[0]++),
                         this.isNativeC40(r) ? (n[1] += 2 / 3) : this.isExtendedASCII(r) ? (n[1] += 8 / 3) : (n[1] += 4 / 3),
                         this.isNativeText(r) ? (n[2] += 2 / 3) : this.isExtendedASCII(r) ? (n[2] += 8 / 3) : (n[2] += 4 / 3),
                         this.isNativeX12(r) ? (n[3] += 2 / 3) : this.isExtendedASCII(r) ? (n[3] += 13 / 3) : (n[3] += 10 / 3),
                         this.isNativeEDIFACT(r) ? (n[4] += 3 / 4) : this.isExtendedASCII(r) ? (n[4] += 4.25) : (n[4] += 3.25),
                         this.isSpecialB256(r) ? (n[5] += 4) : n[5]++,
                         i >= 4)
                    ) {
                         if ((f.fill(s, 0), f.fill(o, 0), this.findMinimums(n, o, w.MAX_VALUE, s), o[0] < this.min(o[5], o[1], o[2], o[3], o[4]))) return 0;
                         if (o[5] < o[0] || o[5] + 1 < this.min(o[1], o[2], o[3], o[4])) return 5;
                         if (o[4] + 1 < this.min(o[5], o[1], o[2], o[3], o[0])) return 4;
                         if (o[2] + 1 < this.min(o[5], o[1], o[4], o[3], o[0])) return 2;
                         if (o[3] + 1 < this.min(o[5], o[1], o[4], o[2], o[0])) return 3;
                         if (o[1] + 1 < this.min(o[0], o[5], o[4], o[2])) {
                              if (o[1] < o[3]) return 1;
                              if (o[1] === o[3]) {
                                   let r = e + i + 1;
                                   for (; r < t.length; ) {
                                        const e = t.charCodeAt(r);
                                        if (this.isX12TermSep(e)) return 3;
                                        if (!this.isNativeX12(e)) break;
                                        r++;
                                   }
                                   return 1;
                              }
                         }
                    }
               }
          }
          static min(t, e, r, n, i) {
               const s = Math.min(t, Math.min(e, Math.min(r, n)));
               return void 0 === i ? s : Math.min(s, i);
          }
          static findMinimums(t, e, r, n) {
               for (let i = 0; i < 6; i++) {
                    const s = (e[i] = Math.ceil(t[i]));
                    r > s && ((r = s), f.fill(n, 0)), r === s && (n[i] = n[i] + 1);
               }
               return r;
          }
          static getMinimumCount(t) {
               let e = 0;
               for (let r = 0; r < 6; r++) e += t[r];
               return e || 0;
          }
          static isDigit(t) {
               return t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0);
          }
          static isExtendedASCII(t) {
               return t >= 128 && t <= 255;
          }
          static isNativeC40(t) {
               return t === ' '.charCodeAt(0) || (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) || (t >= 'A'.charCodeAt(0) && t <= 'Z'.charCodeAt(0));
          }
          static isNativeText(t) {
               return t === ' '.charCodeAt(0) || (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) || (t >= 'a'.charCodeAt(0) && t <= 'z'.charCodeAt(0));
          }
          static isNativeX12(t) {
               return (
                    this.isX12TermSep(t) ||
                    t === ' '.charCodeAt(0) ||
                    (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) ||
                    (t >= 'A'.charCodeAt(0) && t <= 'Z'.charCodeAt(0))
               );
          }
          static isX12TermSep(t) {
               return 13 === t || t === '*'.charCodeAt(0) || t === '>'.charCodeAt(0);
          }
          static isNativeEDIFACT(t) {
               return t >= ' '.charCodeAt(0) && t <= '^'.charCodeAt(0);
          }
          static isSpecialB256(t) {
               return !1;
          }
          static determineConsecutiveDigitCount(t, e = 0) {
               const r = t.length;
               let n = e;
               for (; n < r && this.isDigit(t.charCodeAt(n)); ) n++;
               return n - e;
          }
          static illegalCharacter(t) {
               let e = w.toHexString(t.charCodeAt(0));
               throw ((e = '0000'.substring(0, 4 - e.length) + e), new Error('Illegal character: ' + t + ' (0x' + e + ')'));
          }
     }
     class Zr {
          constructor(t) {
               (this.charset = t), (this.name = t.name);
          }
          canEncode(t) {
               try {
                    return null != S.encode(t, this.charset);
               } catch (t) {
                    return !1;
               }
          }
     }
     class Kr {
          constructor(t, e, r) {
               (this.ENCODERS = [
                    'IBM437',
                    'ISO-8859-2',
                    'ISO-8859-3',
                    'ISO-8859-4',
                    'ISO-8859-5',
                    'ISO-8859-6',
                    'ISO-8859-7',
                    'ISO-8859-8',
                    'ISO-8859-9',
                    'ISO-8859-10',
                    'ISO-8859-11',
                    'ISO-8859-13',
                    'ISO-8859-14',
                    'ISO-8859-15',
                    'ISO-8859-16',
                    'windows-1250',
                    'windows-1251',
                    'windows-1252',
                    'windows-1256',
                    'Shift_JIS',
               ].map((t) => new Zr(Rr.forName(t)))),
                    (this.encoders = []);
               const n = [];
               n.push(new Zr(Nr.ISO_8859_1));
               let i = null != e && e.name.startsWith('UTF');
               for (let e = 0; e < t.length; e++) {
                    let s = !1;
                    for (const i of n) {
                         const n = t.charAt(e);
                         if (n.charCodeAt(0) === r || i.canEncode(n)) {
                              s = !0;
                              break;
                         }
                    }
                    if (!s)
                         for (const r of this.ENCODERS)
                              if (r.canEncode(t.charAt(e))) {
                                   n.push(r), (s = !0);
                                   break;
                              }
                    s || (i = !0);
               }
               if (1 !== n.length || i) {
                    this.encoders = [];
                    let t = 0;
                    for (const e of n) this.encoders[t++] = e;
               } else this.encoders = [n[0]];
               let s = -1;
               if (null != e)
                    for (let t = 0; t < this.encoders.length; t++)
                         if (null != this.encoders[t] && e.name === this.encoders[t].name) {
                              s = t;
                              break;
                         }
               this.priorityEncoderIndex = s;
          }
          length() {
               return this.encoders.length;
          }
          getCharsetName(t) {
               if (!(t < this.length())) throw new Error('index must be less than length');
               return this.encoders[t].name;
          }
          getCharset(t) {
               if (!(t < this.length())) throw new Error('index must be less than length');
               return this.encoders[t].charset;
          }
          getECIValue(t) {
               return this.encoders[t].charset.getValueIdentifier();
          }
          getPriorityEncoderIndex() {
               return this.priorityEncoderIndex;
          }
          canEncode(t, e) {
               if (!(e < this.length())) throw new Error('index must be less than length');
               return !0;
          }
          encode(t, e) {
               if (!(e < this.length())) throw new Error('index must be less than length');
               return S.encode(p.getCharAt(t), this.encoders[e].name);
          }
     }
     class qr {
          constructor(t, e, r) {
               this.fnc1 = r;
               const n = new Kr(t, e, r);
               if (1 === n.length())
                    for (let e = 0; e < this.bytes.length; e++) {
                         const n = t.charAt(e).charCodeAt(0);
                         this.bytes[e] = n === r ? 1e3 : n;
                    }
               else this.bytes = this.encodeMinimally(t, n, r);
          }
          getFNC1Character() {
               return this.fnc1;
          }
          length() {
               return this.bytes.length;
          }
          haveNCharacters(t, e) {
               if (t + e - 1 >= this.bytes.length) return !1;
               for (let r = 0; r < e; r++) if (this.isECI(t + r)) return !1;
               return !0;
          }
          charAt(t) {
               if (t < 0 || t >= this.length()) throw new Error('' + t);
               if (this.isECI(t)) throw new Error('value at ' + t + ' is not a character but an ECI');
               return this.isFNC1(t) ? this.fnc1 : this.bytes[t];
          }
          subSequence(t, e) {
               if (t < 0 || t > e || e > this.length()) throw new Error('' + t);
               const r = new T();
               for (let n = t; n < e; n++) {
                    if (this.isECI(n)) throw new Error('value at ' + n + ' is not a character but an ECI');
                    r.append(this.charAt(n));
               }
               return r.toString();
          }
          isECI(t) {
               if (t < 0 || t >= this.length()) throw new Error('' + t);
               return this.bytes[t] > 255 && this.bytes[t] <= 999;
          }
          isFNC1(t) {
               if (t < 0 || t >= this.length()) throw new Error('' + t);
               return 1e3 === this.bytes[t];
          }
          getECIValue(t) {
               if (t < 0 || t >= this.length()) throw new Error('' + t);
               if (!this.isECI(t)) throw new Error('value at ' + t + ' is not an ECI but a character');
               return this.bytes[t] - 256;
          }
          addEdge(t, e, r) {
               (null == t[e][r.encoderIndex] || t[e][r.encoderIndex].cachedTotalSize > r.cachedTotalSize) && (t[e][r.encoderIndex] = r);
          }
          addEdges(t, e, r, n, i, s) {
               const o = t.charAt(n).charCodeAt(0);
               let a = 0,
                    h = e.length();
               e.getPriorityEncoderIndex() >= 0 && (o === s || e.canEncode(o, e.getPriorityEncoderIndex())) && ((a = e.getPriorityEncoderIndex()), (h = a + 1));
               for (let t = a; t < h; t++) (o === s || e.canEncode(o, t)) && this.addEdge(r, n + 1, new Qr(o, e, t, i, s));
          }
          encodeMinimally(t, e, r) {
               const n = t.length,
                    i = new Qr[n + 1][e.length()]();
               this.addEdges(t, e, i, 0, null, r);
               for (let s = 1; s <= n; s++) {
                    for (let o = 0; o < e.length(); o++) null != i[s][o] && s < n && this.addEdges(t, e, i, s, i[s][o], r);
                    for (let t = 0; t < e.length(); t++) i[s - 1][t] = null;
               }
               let s = -1,
                    o = w.MAX_VALUE;
               for (let t = 0; t < e.length(); t++)
                    if (null != i[n][t]) {
                         const e = i[n][t];
                         e.cachedTotalSize < o && ((o = e.cachedTotalSize), (s = t));
                    }
               if (s < 0) throw new Error('Failed to encode "' + t + '"');
               const a = [];
               let h = i[n][s];
               for (; null != h; ) {
                    if (h.isFNC1()) a.unshift(1e3);
                    else {
                         const t = e.encode(h.c, h.encoderIndex);
                         for (let e = t.length - 1; e >= 0; e--) a.unshift(255 & t[e]);
                    }
                    (null === h.previous ? 0 : h.previous.encoderIndex) !== h.encoderIndex && a.unshift(256 + e.getECIValue(h.encoderIndex)), (h = h.previous);
               }
               const l = [];
               for (let t = 0; t < l.length; t++) l[t] = a[t];
               return l;
          }
     }
     class Qr {
          constructor(t, e, r, n, i) {
               (this.c = t), (this.encoderSet = e), (this.encoderIndex = r), (this.previous = n), (this.fnc1 = i), (this.c = t === i ? 1e3 : t);
               let s = this.isFNC1() ? 1 : e.encode(t, r).length;
               (null === n ? 0 : n.encoderIndex) !== r && (s += 3), null != n && (s += n.cachedTotalSize), (this.cachedTotalSize = s);
          }
          isFNC1() {
               return 1e3 === this.c;
          }
     }
     var jr;
     !(function (t) {
          (t[(t.ASCII = 0)] = 'ASCII'),
               (t[(t.C40 = 1)] = 'C40'),
               (t[(t.TEXT = 2)] = 'TEXT'),
               (t[(t.X12 = 3)] = 'X12'),
               (t[(t.EDF = 4)] = 'EDF'),
               (t[(t.B256 = 5)] = 'B256');
     })(jr || (jr = {}));
     const Jr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_'];
     class $r {
          static isExtendedASCII(t, e) {
               return t !== e && t >= 128 && t <= 255;
          }
          static isInC40Shift1Set(t) {
               return t <= 31;
          }
          static isInC40Shift2Set(t, e) {
               for (const e of Jr) if (e.charCodeAt(0) === t) return !0;
               return t === e;
          }
          static isInTextShift1Set(t) {
               return this.isInC40Shift1Set(t);
          }
          static isInTextShift2Set(t, e) {
               return this.isInC40Shift2Set(t, e);
          }
          static encodeHighLevel(t, e = null, r = -1, n = 0) {
               let i = 0;
               return (
                    t.startsWith(Pr) && t.endsWith(Fr)
                         ? ((i = 5), (t = t.substring(7, t.length - 2)))
                         : t.startsWith(Lr) && t.endsWith(Fr) && ((i = 6), (t = t.substring(7, t.length - 2))),
                    decodeURIComponent(escape(String.fromCharCode(...this.encode(t, e, r, n, i))))
               );
          }
          static encode(t, e, r, n, i) {
               return this.encodeMinimally(new rn(t, e, r, n, i)).getBytes();
          }
          static addEdge(t, e) {
               const r = e.fromPosition + e.characterLength;
               (null === t[r][e.getEndMode()] || t[r][e.getEndMode()].cachedTotalSize > e.cachedTotalSize) && (t[r][e.getEndMode()] = e);
          }
          static getNumberOfC40Words(t, e, r, n) {
               let i = 0;
               for (let s = e; s < t.length(); s++) {
                    if (t.isECI(s)) return (n[0] = 0), 0;
                    const o = t.charAt(s);
                    if ((r && Yr.isNativeC40(o)) || (!r && Yr.isNativeText(o))) i++;
                    else if ($r.isExtendedASCII(o, t.getFNC1Character())) {
                         const t = 255 & o;
                         t >= 128 && ((r && Yr.isNativeC40(t - 128)) || (!r && Yr.isNativeText(t - 128))) ? (i += 3) : (i += 4);
                    } else i += 2;
                    if (i % 3 == 0 || ((i - 2) % 3 == 0 && s + 1 === t.length())) return (n[0] = s - e + 1), Math.ceil(i / 3);
               }
               return (n[0] = 0), 0;
          }
          static addEdges(t, e, r, n) {
               if (t.isECI(r)) return void this.addEdge(e, new en(t, jr.ASCII, r, 1, n));
               const i = t.charAt(r);
               if (null === n || n.getEndMode() !== jr.EDF) {
                    Yr.isDigit(i) && t.haveNCharacters(r, 2) && Yr.isDigit(t.charAt(r + 1))
                         ? this.addEdge(e, new en(t, jr.ASCII, r, 2, n))
                         : this.addEdge(e, new en(t, jr.ASCII, r, 1, n));
                    const s = [jr.C40, jr.TEXT];
                    for (const i of s) {
                         const s = [];
                         $r.getNumberOfC40Words(t, r, i === jr.C40, s) > 0 && this.addEdge(e, new en(t, i, r, s[0], n));
                    }
                    t.haveNCharacters(r, 3) &&
                         Yr.isNativeX12(t.charAt(r)) &&
                         Yr.isNativeX12(t.charAt(r + 1)) &&
                         Yr.isNativeX12(t.charAt(r + 2)) &&
                         this.addEdge(e, new en(t, jr.X12, r, 3, n)),
                         this.addEdge(e, new en(t, jr.B256, r, 1, n));
               }
               let s;
               for (s = 0; s < 3; s++) {
                    const i = r + s;
                    if (!t.haveNCharacters(i, 1) || !Yr.isNativeEDIFACT(t.charAt(i))) break;
                    this.addEdge(e, new en(t, jr.EDF, r, s + 1, n));
               }
               3 === s && t.haveNCharacters(r, 4) && Yr.isNativeEDIFACT(t.charAt(r + 3)) && this.addEdge(e, new en(t, jr.EDF, r, 4, n));
          }
          static encodeMinimally(t) {
               const e = t.length(),
                    r = Array(e + 1)
                         .fill(null)
                         .map(() => Array(6).fill(0));
               this.addEdges(t, r, 0, null);
               for (let n = 1; n <= e; n++) {
                    for (let i = 0; i < 6; i++) null !== r[n][i] && n < e && this.addEdges(t, r, n, r[n][i]);
                    for (let t = 0; t < 6; t++) r[n - 1][t] = null;
               }
               let n = -1,
                    i = w.MAX_VALUE;
               for (let t = 0; t < 6; t++)
                    if (null !== r[e][t]) {
                         const s = r[e][t],
                              o = t >= 1 && t <= 3 ? s.cachedTotalSize + 1 : s.cachedTotalSize;
                         o < i && ((i = o), (n = t));
                    }
               if (n < 0) throw new Error('Failed to encode "' + t + '"');
               return new tn(r[e][n]);
          }
     }
     class tn {
          constructor(t) {
               const e = t.input;
               let r = 0,
                    n = [];
               const i = [],
                    s = [];
               (t.mode !== jr.C40 && t.mode !== jr.TEXT && t.mode !== jr.X12) || t.getEndMode() === jr.ASCII || (r += this.prepend(en.getBytes(254), n));
               let o = t;
               for (; null !== o; )
                    (r += this.prepend(o.getDataBytes(), n)),
                         (null !== o.previous && o.getPreviousStartMode() === o.getMode()) ||
                              (o.getMode() === jr.B256 &&
                                   (r <= 249 ? (n.unshift(r), r++) : (n.unshift(r % 250), n.unshift(r / 250 + 249), (r += 2)), i.push(n.length), s.push(r)),
                              this.prepend(o.getLatchBytes(), n),
                              (r = 0)),
                         (o = o.previous);
               5 === e.getMacroId() ? (r += this.prepend(en.getBytes(236), n)) : 6 === e.getMacroId() && (r += this.prepend(en.getBytes(237), n)),
                    e.getFNC1Character() > 0 && (r += this.prepend(en.getBytes(232), n));
               for (let t = 0; t < i.length; t++) this.applyRandomPattern(n, n.length - i[t], s[t]);
               const a = t.getMinSymbolSize(n.length);
               for (n.length < a && n.push(129); n.length < a; ) n.push(this.randomize253State(n.length + 1));
               this.bytes = new Uint8Array(n.length);
               for (let t = 0; t < this.bytes.length; t++) this.bytes[t] = n[t];
          }
          prepend(t, e) {
               for (let r = t.length - 1; r >= 0; r--) e.unshift(t[r]);
               return t.length;
          }
          randomize253State(t) {
               const e = 129 + (((149 * t) % 253) + 1);
               return e <= 254 ? e : e - 254;
          }
          applyRandomPattern(t, e, r) {
               for (let n = 0; n < r; n++) {
                    const r = e + n,
                         i = (255 & t[r]) + (((149 * (r + 1)) % 255) + 1);
                    t[r] = i <= 255 ? i : i - 256;
               }
          }
          getBytes() {
               return this.bytes;
          }
     }
     class en {
          constructor(t, e, r, n, i) {
               if (
                    ((this.input = t),
                    (this.mode = e),
                    (this.fromPosition = r),
                    (this.characterLength = n),
                    (this.previous = i),
                    (this.allCodewordCapacities = [
                         3, 5, 8, 10, 12, 16, 18, 22, 30, 32, 36, 44, 49, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558,
                    ]),
                    (this.squareCodewordCapacities = [
                         3, 5, 8, 12, 18, 22, 30, 36, 44, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558,
                    ]),
                    (this.rectangularCodewordCapacities = [5, 10, 16, 33, 32, 49]),
                    !(r + n <= t.length()))
               )
                    throw new Error('Invalid edge');
               let s = null !== i ? i.cachedTotalSize : 0;
               const o = this.getPreviousMode();
               switch (e) {
                    case jr.ASCII:
                         s++,
                              (t.isECI(r) || $r.isExtendedASCII(t.charAt(r), t.getFNC1Character())) && s++,
                              (o !== jr.C40 && o !== jr.TEXT && o !== jr.X12) || s++;
                         break;
                    case jr.B256:
                         s++,
                              (o !== jr.B256 || 250 === this.getB256Size()) && s++,
                              o === jr.ASCII ? s++ : (o !== jr.C40 && o !== jr.TEXT && o !== jr.X12) || (s += 2);
                         break;
                    case jr.C40:
                    case jr.TEXT:
                    case jr.X12:
                         if (e === jr.X12) s += 2;
                         else {
                              let n = [];
                              s += 2 * $r.getNumberOfC40Words(t, r, e === jr.C40, n);
                         }
                         o === jr.ASCII || o === jr.B256 ? s++ : o === e || (o !== jr.C40 && o !== jr.TEXT && o !== jr.X12) || (s += 2);
                         break;
                    case jr.EDF:
                         (s += 3), o === jr.ASCII || o === jr.B256 ? s++ : (o !== jr.C40 && o !== jr.TEXT && o !== jr.X12) || (s += 2);
               }
               this.cachedTotalSize = s;
          }
          getB256Size() {
               let t = 0,
                    e = this;
               for (; null !== e && e.mode === jr.B256 && t <= 250; ) t++, (e = e.previous);
               return t;
          }
          getPreviousStartMode() {
               return null === this.previous ? jr.ASCII : this.previous.mode;
          }
          getPreviousMode() {
               return null === this.previous ? jr.ASCII : this.previous.getEndMode();
          }
          getEndMode() {
               if (this.mode === jr.EDF) {
                    if (this.characterLength < 4) return jr.ASCII;
                    const t = this.getLastASCII();
                    if (t > 0 && this.getCodewordsRemaining(this.cachedTotalSize + t) <= 2 - t) return jr.ASCII;
               }
               if (this.mode === jr.C40 || this.mode === jr.TEXT || this.mode === jr.X12) {
                    if (this.fromPosition + this.characterLength >= this.input.length() && 0 === this.getCodewordsRemaining(this.cachedTotalSize))
                         return jr.ASCII;
                    if (1 === this.getLastASCII() && 0 === this.getCodewordsRemaining(this.cachedTotalSize + 1)) return jr.ASCII;
               }
               return this.mode;
          }
          getMode() {
               return this.mode;
          }
          getLastASCII() {
               const t = this.input.length(),
                    e = this.fromPosition + this.characterLength;
               return t - e > 4 || e >= t
                    ? 0
                    : t - e == 1
                    ? $r.isExtendedASCII(this.input.charAt(e), this.input.getFNC1Character())
                         ? 0
                         : 1
                    : t - e == 2
                    ? $r.isExtendedASCII(this.input.charAt(e), this.input.getFNC1Character()) ||
                      $r.isExtendedASCII(this.input.charAt(e + 1), this.input.getFNC1Character())
                         ? 0
                         : Yr.isDigit(this.input.charAt(e)) && Yr.isDigit(this.input.charAt(e + 1))
                         ? 1
                         : 2
                    : t - e == 3
                    ? (Yr.isDigit(this.input.charAt(e)) &&
                           Yr.isDigit(this.input.charAt(e + 1)) &&
                           !$r.isExtendedASCII(this.input.charAt(e + 2), this.input.getFNC1Character())) ||
                      (Yr.isDigit(this.input.charAt(e + 1)) &&
                           Yr.isDigit(this.input.charAt(e + 2)) &&
                           !$r.isExtendedASCII(this.input.charAt(e), this.input.getFNC1Character()))
                         ? 2
                         : 0
                    : Yr.isDigit(this.input.charAt(e)) &&
                      Yr.isDigit(this.input.charAt(e + 1)) &&
                      Yr.isDigit(this.input.charAt(e + 2)) &&
                      Yr.isDigit(this.input.charAt(e + 3))
                    ? 2
                    : 0;
          }
          getMinSymbolSize(t) {
               switch (this.input.getShapeHint()) {
                    case 1:
                         for (const e of this.squareCodewordCapacities) if (e >= t) return e;
                         break;
                    case 2:
                         for (const e of this.rectangularCodewordCapacities) if (e >= t) return e;
               }
               for (const e of this.allCodewordCapacities) if (e >= t) return e;
               return this.allCodewordCapacities[this.allCodewordCapacities.length - 1];
          }
          getCodewordsRemaining(t) {
               return this.getMinSymbolSize(t) - t;
          }
          static getBytes(t, e) {
               const r = new Uint8Array(e ? 2 : 1);
               return (r[0] = t), e && (r[1] = e), r;
          }
          setC40Word(t, e, r, n, i) {
               const s = 1600 * (255 & r) + 40 * (255 & n) + (255 & i) + 1;
               (t[e] = s / 256), (t[e + 1] = s % 256);
          }
          getX12Value(t) {
               return 13 === t ? 0 : 42 === t ? 1 : 62 === t ? 2 : 32 === t ? 3 : t >= 48 && t <= 57 ? t - 44 : t >= 65 && t <= 90 ? t - 51 : t;
          }
          getX12Words() {
               if (this.characterLength % 3 != 0) throw new Error('X12 words must be a multiple of 3');
               const t = new Uint8Array((this.characterLength / 3) * 2);
               for (let e = 0; e < t.length; e += 2)
                    this.setC40Word(
                         t,
                         e,
                         this.getX12Value(this.input.charAt(this.fromPosition + (e / 2) * 3)),
                         this.getX12Value(this.input.charAt(this.fromPosition + (e / 2) * 3 + 1)),
                         this.getX12Value(this.input.charAt(this.fromPosition + (e / 2) * 3 + 2))
                    );
               return t;
          }
          getShiftValue(t, e, r) {
               return (e && $r.isInC40Shift1Set(t)) || (!e && $r.isInTextShift1Set(t))
                    ? 0
                    : (e && $r.isInC40Shift2Set(t, r)) || (!e && $r.isInTextShift2Set(t, r))
                    ? 1
                    : 2;
          }
          getC40Value(t, e, r, n) {
               if (r === n) {
                    if (2 !== e) throw new Error('FNC1 cannot be used in C40 shift 2');
                    return 27;
               }
               return t
                    ? r <= 31
                         ? r
                         : 32 === r
                         ? 3
                         : r <= 47
                         ? r - 33
                         : r <= 57
                         ? r - 44
                         : r <= 64
                         ? r - 43
                         : r <= 90
                         ? r - 51
                         : r <= 95
                         ? r - 69
                         : r <= 127
                         ? r - 96
                         : r
                    : 0 === r
                    ? 0
                    : 0 === e && r <= 3
                    ? r - 1
                    : 1 === e && r <= 31
                    ? r
                    : 32 === r
                    ? 3
                    : r >= 33 && r <= 47
                    ? r - 33
                    : r >= 48 && r <= 57
                    ? r - 44
                    : r >= 58 && r <= 64
                    ? r - 43
                    : r >= 65 && r <= 90
                    ? r - 64
                    : r >= 91 && r <= 95
                    ? r - 69
                    : 96 === r
                    ? 0
                    : r >= 97 && r <= 122
                    ? r - 83
                    : r >= 123 && r <= 127
                    ? r - 96
                    : r;
          }
          getC40Words(t, e) {
               const r = [];
               for (let n = 0; n < this.characterLength; n++) {
                    const i = this.input.charAt(this.fromPosition + n);
                    if ((t && Yr.isNativeC40(i)) || (!t && Yr.isNativeText(i))) r.push(this.getC40Value(t, 0, i, e));
                    else if ($r.isExtendedASCII(i, e)) {
                         const n = (255 & i) - 128;
                         if ((t && Yr.isNativeC40(n)) || (!t && Yr.isNativeText(n))) r.push(1), r.push(30), r.push(this.getC40Value(t, 0, n, e));
                         else {
                              r.push(1), r.push(30);
                              const i = this.getShiftValue(n, t, e);
                              r.push(i), r.push(this.getC40Value(t, i, n, e));
                         }
                    } else {
                         const n = this.getShiftValue(i, t, e);
                         r.push(n), r.push(this.getC40Value(t, n, i, e));
                    }
               }
               if (r.length % 3 != 0) {
                    if ((r.length - 2) % 3 != 0 || this.fromPosition + this.characterLength !== this.input.length())
                         throw new Error('C40 words must be a multiple of 3');
                    r.push(0);
               }
               const n = new Uint8Array((r.length / 3) * 2);
               let i = 0;
               for (let t = 0; t < r.length; t += 3) this.setC40Word(n, i, 255 & r[t], 255 & r[t + 1], 255 & r[t + 2]), (i += 2);
               return n;
          }
          getEDFBytes() {
               const t = Math.ceil(this.characterLength / 4),
                    e = new Uint8Array(3 * t);
               let r = this.fromPosition;
               const n = Math.min(this.fromPosition + this.characterLength - 1, this.input.length() - 1);
               for (let i = 0; i < t; i += 3) {
                    const t = [];
                    for (let e = 0; e < 4; e++) t[e] = r <= n ? 63 & this.input.charAt(r++) : r === n + 1 ? 31 : 0;
                    let s = t[0] << 18;
                    (s |= t[1] << 12), (s |= t[2] << 6), (s |= t[3]), (e[i] = (s >> 16) & 255), (e[i + 1] = (s >> 8) & 255), (e[i + 2] = 255 & s);
               }
               return e;
          }
          getLatchBytes() {
               switch (this.getPreviousMode()) {
                    case jr.ASCII:
                    case jr.B256:
                         switch (this.mode) {
                              case jr.B256:
                                   return en.getBytes(231);
                              case jr.C40:
                                   return en.getBytes(230);
                              case jr.TEXT:
                                   return en.getBytes(239);
                              case jr.X12:
                                   return en.getBytes(238);
                              case jr.EDF:
                                   return en.getBytes(240);
                         }
                         break;
                    case jr.C40:
                    case jr.TEXT:
                    case jr.X12:
                         if (this.mode !== this.getPreviousMode())
                              switch (this.mode) {
                                   case jr.ASCII:
                                        return en.getBytes(254);
                                   case jr.B256:
                                        return en.getBytes(254, 231);
                                   case jr.C40:
                                        return en.getBytes(254, 230);
                                   case jr.TEXT:
                                        return en.getBytes(254, 239);
                                   case jr.X12:
                                        return en.getBytes(254, 238);
                                   case jr.EDF:
                                        return en.getBytes(254, 240);
                              }
                         break;
                    case jr.EDF:
                         if (this.mode !== jr.EDF) throw new Error('Cannot switch from EDF to ' + this.mode);
               }
               return new Uint8Array(0);
          }
          getDataBytes() {
               switch (this.mode) {
                    case jr.ASCII:
                         return this.input.isECI(this.fromPosition)
                              ? en.getBytes(241, this.input.getECIValue(this.fromPosition) + 1)
                              : $r.isExtendedASCII(this.input.charAt(this.fromPosition), this.input.getFNC1Character())
                              ? en.getBytes(235, this.input.charAt(this.fromPosition) - 127)
                              : 2 === this.characterLength
                              ? en.getBytes(10 * this.input.charAt(this.fromPosition) + this.input.charAt(this.fromPosition + 1) + 130)
                              : this.input.isFNC1(this.fromPosition)
                              ? en.getBytes(232)
                              : en.getBytes(this.input.charAt(this.fromPosition) + 1);
                    case jr.B256:
                         return en.getBytes(this.input.charAt(this.fromPosition));
                    case jr.C40:
                         return this.getC40Words(!0, this.input.getFNC1Character());
                    case jr.TEXT:
                         return this.getC40Words(!1, this.input.getFNC1Character());
                    case jr.X12:
                         return this.getX12Words();
                    case jr.EDF:
                         return this.getEDFBytes();
               }
          }
     }
     class rn extends qr {
          constructor(t, e, r, n, i) {
               super(t, e, r), (this.shape = n), (this.macroId = i);
          }
          getMacroId() {
               return this.macroId;
          }
          getShapeHint() {
               return this.shape;
          }
     }
     class nn {
          isCompact() {
               return this.compact;
          }
          setCompact(t) {
               this.compact = t;
          }
          getSize() {
               return this.size;
          }
          setSize(t) {
               this.size = t;
          }
          getLayers() {
               return this.layers;
          }
          setLayers(t) {
               this.layers = t;
          }
          getCodeWords() {
               return this.codeWords;
          }
          setCodeWords(t) {
               this.codeWords = t;
          }
          getMatrix() {
               return this.matrix;
          }
          setMatrix(t) {
               this.matrix = t;
          }
     }
     class sn {
          static singletonList(t) {
               return [t];
          }
          static min(t, e) {
               return t.sort(e)[0];
          }
     }
     class on {
          constructor(t) {
               this.previous = t;
          }
          getPrevious() {
               return this.previous;
          }
     }
     class an extends on {
          constructor(t, e, r) {
               super(t), (this.value = e), (this.bitCount = r);
          }
          appendTo(t, e) {
               t.appendBits(this.value, this.bitCount);
          }
          add(t, e) {
               return new an(this, t, e);
          }
          addBinaryShift(t, e) {
               return console.warn('addBinaryShift on SimpleToken, this simply returns a copy of this token'), new an(this, t, e);
          }
          toString() {
               let t = this.value & ((1 << this.bitCount) - 1);
               return (t |= 1 << this.bitCount), '<' + w.toBinaryString(t | (1 << this.bitCount)).substring(1) + '>';
          }
     }
     class hn extends an {
          constructor(t, e, r) {
               super(t, 0, 0), (this.binaryShiftStart = e), (this.binaryShiftByteCount = r);
          }
          appendTo(t, e) {
               for (let r = 0; r < this.binaryShiftByteCount; r++)
                    (0 === r || (31 === r && this.binaryShiftByteCount <= 62)) &&
                         (t.appendBits(31, 5),
                         this.binaryShiftByteCount > 62
                              ? t.appendBits(this.binaryShiftByteCount - 31, 16)
                              : 0 === r
                              ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5)
                              : t.appendBits(this.binaryShiftByteCount - 31, 5)),
                         t.appendBits(e[this.binaryShiftStart + r], 8);
          }
          addBinaryShift(t, e) {
               return new hn(this, t, e);
          }
          toString() {
               return '<' + this.binaryShiftStart + '::' + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + '>';
          }
     }
     function ln(t, e, r) {
          return new an(t, e, r);
     }
     const cn = ['UPPER', 'LOWER', 'DIGIT', 'MIXED', 'PUNCT'],
          dn = new an(null, 0, 0),
          un = [
               Int32Array.from([0, 327708, 327710, 327709, 656318]),
               Int32Array.from([590318, 0, 327710, 327709, 656318]),
               Int32Array.from([262158, 590300, 0, 590301, 932798]),
               Int32Array.from([327709, 327708, 656318, 0, 327710]),
               Int32Array.from([327711, 656380, 656382, 656381, 0]),
          ];
     const gn = (function (t) {
          for (let e of t) f.fill(e, -1);
          return (t[0][4] = 0), (t[1][4] = 0), (t[1][0] = 28), (t[3][4] = 0), (t[2][4] = 0), (t[2][0] = 15), t;
     })(f.createInt32Array(6, 6));
     class fn {
          constructor(t, e, r, n) {
               (this.token = t), (this.mode = e), (this.binaryShiftByteCount = r), (this.bitCount = n);
          }
          getMode() {
               return this.mode;
          }
          getToken() {
               return this.token;
          }
          getBinaryShiftByteCount() {
               return this.binaryShiftByteCount;
          }
          getBitCount() {
               return this.bitCount;
          }
          latchAndAppend(t, e) {
               let r = this.bitCount,
                    n = this.token;
               if (t !== this.mode) {
                    let e = un[this.mode][t];
                    (n = ln(n, 65535 & e, e >> 16)), (r += e >> 16);
               }
               let i = 2 === t ? 4 : 5;
               return (n = ln(n, e, i)), new fn(n, t, 0, r + i);
          }
          shiftAndAppend(t, e) {
               let r = this.token,
                    n = 2 === this.mode ? 4 : 5;
               return (r = ln(r, gn[this.mode][t], n)), (r = ln(r, e, 5)), new fn(r, this.mode, 0, this.bitCount + n + 5);
          }
          addBinaryShiftChar(t) {
               let e = this.token,
                    r = this.mode,
                    n = this.bitCount;
               if (4 === this.mode || 2 === this.mode) {
                    let t = un[r][0];
                    (e = ln(e, 65535 & t, t >> 16)), (n += t >> 16), (r = 0);
               }
               let i = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8,
                    s = new fn(e, r, this.binaryShiftByteCount + 1, n + i);
               return 2078 === s.binaryShiftByteCount && (s = s.endBinaryShift(t + 1)), s;
          }
          endBinaryShift(t) {
               if (0 === this.binaryShiftByteCount) return this;
               let e = this.token;
               return (
                    (e = (function (t, e, r) {
                         return new hn(t, e, r);
                    })(e, t - this.binaryShiftByteCount, this.binaryShiftByteCount)),
                    new fn(e, this.mode, 0, this.bitCount)
               );
          }
          isBetterThanOrEqualTo(t) {
               let e = this.bitCount + (un[this.mode][t.mode] >> 16);
               return (
                    this.binaryShiftByteCount < t.binaryShiftByteCount
                         ? (e += fn.calculateBinaryShiftCost(t) - fn.calculateBinaryShiftCost(this))
                         : this.binaryShiftByteCount > t.binaryShiftByteCount && t.binaryShiftByteCount > 0 && (e += 10),
                    e <= t.bitCount
               );
          }
          toBitArray(t) {
               let e = [];
               for (let r = this.endBinaryShift(t.length).token; null !== r; r = r.getPrevious()) e.unshift(r);
               let r = new C();
               for (const n of e) n.appendTo(r, t);
               return r;
          }
          toString() {
               return p.format('%s bits=%d bytes=%d', cn[this.mode], this.bitCount, this.binaryShiftByteCount);
          }
          static calculateBinaryShiftCost(t) {
               return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0;
          }
     }
     fn.INITIAL_STATE = new fn(dn, 0, 0, 0);
     const wn = (function (t) {
          const e = p.getCharCode(' '),
               r = p.getCharCode('.'),
               n = p.getCharCode(',');
          t[0][e] = 1;
          const i = p.getCharCode('Z'),
               s = p.getCharCode('A');
          for (let e = s; e <= i; e++) t[0][e] = e - s + 2;
          t[1][e] = 1;
          const o = p.getCharCode('z'),
               a = p.getCharCode('a');
          for (let e = a; e <= o; e++) t[1][e] = e - a + 2;
          t[2][e] = 1;
          const h = p.getCharCode('9'),
               l = p.getCharCode('0');
          for (let e = l; e <= h; e++) t[2][e] = e - l + 2;
          (t[2][n] = 12), (t[2][r] = 13);
          const c = ['\0', ' ', '', '', '', '', '', '', '', '\b', '\t', '\n', '\v', '\f', '\r', '', '', '', '', '', '@', '\\', '^', '_', '`', '|', '~', ''];
          for (let e = 0; e < c.length; e++) t[3][p.getCharCode(c[e])] = e;
          const d = [
               '\0',
               '\r',
               '\0',
               '\0',
               '\0',
               '\0',
               '!',
               "'",
               '#',
               '$',
               '%',
               '&',
               "'",
               '(',
               ')',
               '*',
               '+',
               ',',
               '-',
               '.',
               '/',
               ':',
               ';',
               '<',
               '=',
               '>',
               '?',
               '[',
               ']',
               '{',
               '}',
          ];
          for (let e = 0; e < d.length; e++) p.getCharCode(d[e]) > 0 && (t[4][p.getCharCode(d[e])] = e);
          return t;
     })(f.createInt32Array(5, 256));
     class Cn {
          constructor(t) {
               this.text = t;
          }
          encode() {
               const t = p.getCharCode(' '),
                    e = p.getCharCode('\n');
               let r = sn.singletonList(fn.INITIAL_STATE);
               for (let n = 0; n < this.text.length; n++) {
                    let i,
                         s = n + 1 < this.text.length ? this.text[n + 1] : 0;
                    switch (this.text[n]) {
                         case p.getCharCode('\r'):
                              i = s === e ? 2 : 0;
                              break;
                         case p.getCharCode('.'):
                              i = s === t ? 3 : 0;
                              break;
                         case p.getCharCode(','):
                              i = s === t ? 4 : 0;
                              break;
                         case p.getCharCode(':'):
                              i = s === t ? 5 : 0;
                              break;
                         default:
                              i = 0;
                    }
                    i > 0 ? ((r = Cn.updateStateListForPair(r, n, i)), n++) : (r = this.updateStateListForChar(r, n));
               }
               return sn.min(r, (t, e) => t.getBitCount() - e.getBitCount()).toBitArray(this.text);
          }
          updateStateListForChar(t, e) {
               const r = [];
               for (let n of t) this.updateStateForChar(n, e, r);
               return Cn.simplifyStates(r);
          }
          updateStateForChar(t, e, r) {
               let n = 255 & this.text[e],
                    i = wn[t.getMode()][n] > 0,
                    s = null;
               for (let o = 0; o <= 4; o++) {
                    let a = wn[o][n];
                    if (a > 0) {
                         if ((null == s && (s = t.endBinaryShift(e)), !i || o === t.getMode() || 2 === o)) {
                              const t = s.latchAndAppend(o, a);
                              r.push(t);
                         }
                         if (!i && gn[t.getMode()][o] >= 0) {
                              const t = s.shiftAndAppend(o, a);
                              r.push(t);
                         }
                    }
               }
               if (t.getBinaryShiftByteCount() > 0 || 0 === wn[t.getMode()][n]) {
                    let n = t.addBinaryShiftChar(e);
                    r.push(n);
               }
          }
          static updateStateListForPair(t, e, r) {
               const n = [];
               for (let i of t) this.updateStateForPair(i, e, r, n);
               return this.simplifyStates(n);
          }
          static updateStateForPair(t, e, r, n) {
               let i = t.endBinaryShift(e);
               if ((n.push(i.latchAndAppend(4, r)), 4 !== t.getMode() && n.push(i.shiftAndAppend(4, r)), 3 === r || 4 === r)) {
                    let t = i.latchAndAppend(2, 16 - r).latchAndAppend(2, 1);
                    n.push(t);
               }
               if (t.getBinaryShiftByteCount() > 0) {
                    let r = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1);
                    n.push(r);
               }
          }
          static simplifyStates(t) {
               let e = [];
               for (const r of t) {
                    let t = !0;
                    for (const n of e) {
                         if (n.isBetterThanOrEqualTo(r)) {
                              t = !1;
                              break;
                         }
                         r.isBetterThanOrEqualTo(n) && (e = e.filter((t) => t !== n));
                    }
                    t && e.push(r);
               }
               return e;
          }
     }
     class An {
          constructor() {}
          static encodeBytes(t) {
               return An.encode(t, An.DEFAULT_EC_PERCENT, An.DEFAULT_AZTEC_LAYERS);
          }
          static encode(t, e, r) {
               let n,
                    i,
                    s,
                    o,
                    h,
                    l = new Cn(t).encode(),
                    c = w.truncDivision(l.getSize() * e, 100) + 11,
                    d = l.getSize() + c;
               if (r !== An.DEFAULT_AZTEC_LAYERS) {
                    if (((n = r < 0), (i = Math.abs(r)), i > (n ? An.MAX_NB_BITS_COMPACT : An.MAX_NB_BITS)))
                         throw new a(p.format('Illegal value %s for layers', r));
                    (s = An.totalBitsInLayer(i, n)), (o = An.WORD_SIZE[i]);
                    let t = s - (s % o);
                    if (((h = An.stuffBits(l, o)), h.getSize() + c > t)) throw new a('Data to large for user specified layer');
                    if (n && h.getSize() > 64 * o) throw new a('Data to large for user specified layer');
               } else {
                    (o = 0), (h = null);
                    for (let t = 0; ; t++) {
                         if (t > An.MAX_NB_BITS) throw new a('Data too large for an Aztec code');
                         if (((n = t <= 3), (i = n ? t + 1 : t), (s = An.totalBitsInLayer(i, n)), d > s)) continue;
                         (null != h && o === An.WORD_SIZE[i]) || ((o = An.WORD_SIZE[i]), (h = An.stuffBits(l, o)));
                         let e = s - (s % o);
                         if (!(n && h.getSize() > 64 * o) && h.getSize() + c <= e) break;
                    }
               }
               let u,
                    g = An.generateCheckWords(h, s, o),
                    f = h.getSize() / o,
                    C = An.generateModeMessage(n, i, f),
                    A = (n ? 11 : 14) + 4 * i,
                    E = new Int32Array(A);
               if (n) {
                    u = A;
                    for (let t = 0; t < E.length; t++) E[t] = t;
               } else {
                    u = A + 1 + 2 * w.truncDivision(w.truncDivision(A, 2) - 1, 15);
                    let t = w.truncDivision(A, 2),
                         e = w.truncDivision(u, 2);
                    for (let r = 0; r < t; r++) {
                         let n = r + w.truncDivision(r, 15);
                         (E[t - r - 1] = e - n - 1), (E[t + r] = e + n + 1);
                    }
               }
               let m = new R(u);
               for (let t = 0, e = 0; t < i; t++) {
                    let r = 4 * (i - t) + (n ? 9 : 12);
                    for (let n = 0; n < r; n++) {
                         let i = 2 * n;
                         for (let s = 0; s < 2; s++)
                              g.get(e + i + s) && m.set(E[2 * t + s], E[2 * t + n]),
                                   g.get(e + 2 * r + i + s) && m.set(E[2 * t + n], E[A - 1 - 2 * t - s]),
                                   g.get(e + 4 * r + i + s) && m.set(E[A - 1 - 2 * t - s], E[A - 1 - 2 * t - n]),
                                   g.get(e + 6 * r + i + s) && m.set(E[A - 1 - 2 * t - n], E[2 * t + s]);
                    }
                    e += 8 * r;
               }
               if ((An.drawModeMessage(m, n, u, C), n)) An.drawBullsEye(m, w.truncDivision(u, 2), 5);
               else {
                    An.drawBullsEye(m, w.truncDivision(u, 2), 7);
                    for (let t = 0, e = 0; t < w.truncDivision(A, 2) - 1; t += 15, e += 16)
                         for (let t = 1 & w.truncDivision(u, 2); t < u; t += 2)
                              m.set(w.truncDivision(u, 2) - e, t),
                                   m.set(w.truncDivision(u, 2) + e, t),
                                   m.set(t, w.truncDivision(u, 2) - e),
                                   m.set(t, w.truncDivision(u, 2) + e);
               }
               let I = new nn();
               return I.setCompact(n), I.setSize(u), I.setLayers(i), I.setCodeWords(f), I.setMatrix(m), I;
          }
          static drawBullsEye(t, e, r) {
               for (let n = 0; n < r; n += 2) for (let r = e - n; r <= e + n; r++) t.set(r, e - n), t.set(r, e + n), t.set(e - n, r), t.set(e + n, r);
               t.set(e - r, e - r), t.set(e - r + 1, e - r), t.set(e - r, e - r + 1), t.set(e + r, e - r), t.set(e + r, e - r + 1), t.set(e + r, e + r - 1);
          }
          static generateModeMessage(t, e, r) {
               let n = new C();
               return (
                    t
                         ? (n.appendBits(e - 1, 2), n.appendBits(r - 1, 6), (n = An.generateCheckWords(n, 28, 4)))
                         : (n.appendBits(e - 1, 5), n.appendBits(r - 1, 11), (n = An.generateCheckWords(n, 40, 4))),
                    n
               );
          }
          static drawModeMessage(t, e, r, n) {
               let i = w.truncDivision(r, 2);
               if (e)
                    for (let e = 0; e < 7; e++) {
                         let r = i - 3 + e;
                         n.get(e) && t.set(r, i - 5), n.get(e + 7) && t.set(i + 5, r), n.get(20 - e) && t.set(r, i + 5), n.get(27 - e) && t.set(i - 5, r);
                    }
               else
                    for (let e = 0; e < 10; e++) {
                         let r = i - 5 + e + w.truncDivision(e, 5);
                         n.get(e) && t.set(r, i - 7), n.get(e + 10) && t.set(i + 7, r), n.get(29 - e) && t.set(r, i + 7), n.get(39 - e) && t.set(i - 7, r);
                    }
          }
          static generateCheckWords(t, e, r) {
               let n = t.getSize() / r,
                    i = new gr(An.getGF(r)),
                    s = w.truncDivision(e, r),
                    o = An.bitsToWords(t, r, s);
               i.encode(o, s - n);
               let a = e % r,
                    h = new C();
               h.appendBits(0, a);
               for (const t of Array.from(o)) h.appendBits(t, r);
               return h;
          }
          static bitsToWords(t, e, r) {
               let n,
                    i,
                    s = new Int32Array(r);
               for (n = 0, i = t.getSize() / e; n < i; n++) {
                    let r = 0;
                    for (let i = 0; i < e; i++) r |= t.get(n * e + i) ? 1 << (e - i - 1) : 0;
                    s[n] = r;
               }
               return s;
          }
          static getGF(t) {
               switch (t) {
                    case 4:
                         return Q.AZTEC_PARAM;
                    case 6:
                         return Q.AZTEC_DATA_6;
                    case 8:
                         return Q.AZTEC_DATA_8;
                    case 10:
                         return Q.AZTEC_DATA_10;
                    case 12:
                         return Q.AZTEC_DATA_12;
                    default:
                         throw new a('Unsupported word size ' + t);
               }
          }
          static stuffBits(t, e) {
               let r = new C(),
                    n = t.getSize(),
                    i = (1 << e) - 2;
               for (let s = 0; s < n; s += e) {
                    let o = 0;
                    for (let r = 0; r < e; r++) (s + r >= n || t.get(s + r)) && (o |= 1 << (e - 1 - r));
                    (o & i) === i ? (r.appendBits(o & i, e), s--) : o & i ? r.appendBits(o, e) : (r.appendBits(1 | o, e), s--);
               }
               return r;
          }
          static totalBitsInLayer(t, e) {
               return ((e ? 88 : 112) + 16 * t) * t;
          }
     }
     (An.DEFAULT_EC_PERCENT = 33),
          (An.DEFAULT_AZTEC_LAYERS = 0),
          (An.MAX_NB_BITS = 32),
          (An.MAX_NB_BITS_COMPACT = 4),
          (An.WORD_SIZE = Int32Array.from([
               4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
          ]));
     class En {
          encode(t, e, r, n) {
               return this.encodeWithHints(t, e, r, n, null);
          }
          encodeWithHints(t, e, r, n, i) {
               let s = Nr.ISO_8859_1,
                    o = An.DEFAULT_EC_PERCENT,
                    a = An.DEFAULT_AZTEC_LAYERS;
               return (
                    null != i &&
                         (i.has(ur.CHARACTER_SET) && (s = Rr.forName(i.get(ur.CHARACTER_SET).toString())),
                         i.has(ur.ERROR_CORRECTION) && (o = w.parseInt(i.get(ur.ERROR_CORRECTION).toString())),
                         i.has(ur.AZTEC_LAYERS) && (a = w.parseInt(i.get(ur.AZTEC_LAYERS).toString()))),
                    En.encodeLayers(t, e, r, n, s, o, a)
               );
          }
          static encodeLayers(t, e, r, n, i, s, o) {
               if (e !== x.AZTEC) throw new a('Can only encode AZTEC, but got ' + e);
               let h = An.encode(p.getBytes(t, i), s, o);
               return En.renderResult(h, r, n);
          }
          static renderResult(t, e, r) {
               let n = t.getMatrix();
               if (null == n) throw new J();
               let i = n.getWidth(),
                    s = n.getHeight(),
                    o = Math.max(e, i),
                    a = Math.max(r, s),
                    h = Math.min(o / i, a / s),
                    l = (o - i * h) / 2,
                    c = (a - s * h) / 2,
                    d = new R(o, a);
               for (let t = 0, e = c; t < s; t++, e += h) for (let r = 0, s = l; r < i; r++, s += h) n.get(r, t) && d.setRegion(s, e, h, h);
               return d;
          }
     }
     (t.AbstractExpandedDecoder = Xt),
          (t.ArgumentException = o),
          (t.ArithmeticException = q),
          (t.AztecCode = nn),
          (t.AztecCodeReader = gt),
          (t.AztecCodeWriter = En),
          (t.AztecDecoder = tt),
          (t.AztecDetector = ut),
          (t.AztecDetectorResult = st),
          (t.AztecEncoder = An),
          (t.AztecHighLevelEncoder = Cn),
          (t.AztecPoint = dt),
          (t.BarcodeFormat = x),
          (t.Binarizer = c),
          (t.BinaryBitmap = h),
          (t.BitArray = C),
          (t.BitMatrix = R),
          (t.BitSource = de),
          (t.BrowserAztecCodeReader = class extends F {
               constructor(t = 500) {
                    super(new gt(), t);
               }
          }),
          (t.BrowserBarcodeReader = class extends F {
               constructor(t = 500, e) {
                    super(new se(e), t, e);
               }
          }),
          (t.BrowserCodeReader = F),
          (t.BrowserDatamatrixCodeReader = class extends F {
               constructor(t = 500) {
                    super(new we(), t);
               }
          }),
          (t.BrowserMultiFormatReader = class extends F {
               constructor(t = null, e = 500) {
                    const r = new cr();
                    r.setHints(t), super(r, e);
               }
               decodeBitmap(t) {
                    return this.reader.decodeWithState(t);
               }
          }),
          (t.BrowserPDF417Reader = class extends F {
               constructor(t = 500) {
                    super(new hr(), t);
               }
          }),
          (t.BrowserQRCodeReader = class extends F {
               constructor(t = 500) {
                    super(new Le(), t);
               }
          }),
          (t.BrowserQRCodeSvgWriter = _r),
          (t.CharacterSetECI = I),
          (t.ChecksumException = l),
          (t.CodaBarReader = Ot),
          (t.Code128Reader = wt),
          (t.Code39Reader = Ct),
          (t.Code93Reader = At),
          (t.DataMatrixDecodedBitStreamParser = ue),
          (t.DataMatrixDefaultPlacement = yr),
          (t.DataMatrixErrorCorrection = vr),
          (t.DataMatrixHighLevelEncoder = Yr),
          (t.DataMatrixReader = we),
          (t.DataMatrixSymbolInfo = Ur),
          (t.DataMatrixWriter = class {
               encode(t, e, r, n, i = null) {
                    if ('' === t.trim()) throw new Error('Found empty contents');
                    if (e !== x.DATA_MATRIX) throw new Error('Can only encode DATA_MATRIX, but got ' + e);
                    if (r < 0 || n < 0) throw new Error("Requested dimensions can't be negative: " + r + 'x' + n);
                    let s,
                         o = 0,
                         a = null,
                         h = null;
                    if (null != i) {
                         const t = i.get(ur.DATA_MATRIX_SHAPE);
                         null != t && (o = t);
                         const e = i.get(ur.MIN_SIZE);
                         null != e && (a = e);
                         const r = i.get(ur.MAX_SIZE);
                         null != r && (h = r);
                    }
                    if (null != i && i.has(ur.DATA_MATRIX_COMPACT) && Boolean(i.get(ur.DATA_MATRIX_COMPACT).toString())) {
                         const e = i.has(ur.GS1_FORMAT) && Boolean(i.get(ur.GS1_FORMAT).toString());
                         let r = null;
                         i.has(ur.CHARACTER_SET) && (r = Rr.forName(i.get(ur.CHARACTER_SET).toString())), (s = $r.encodeHighLevel(t, r, e ? 29 : -1, o));
                    } else {
                         const e = null != i && i.has(ur.FORCE_C40) && Boolean(i.get(ur.FORCE_C40).toString());
                         s = Yr.encodeHighLevel(t, o, a, h, e);
                    }
                    const l = Ur.lookup(s.length, o, a, h, !0),
                         c = vr.encodeECC200(s, l),
                         d = new yr(c, l.getSymbolDataWidth(), l.getSymbolDataHeight());
                    return d.place(), this.encodeLowLevel(d, l, r, n);
               }
               encodeLowLevel(t, e, r, n) {
                    const i = e.getSymbolDataWidth(),
                         s = e.getSymbolDataHeight(),
                         o = new wr(e.getSymbolWidth(), e.getSymbolHeight());
                    let a = 0;
                    for (let r = 0; r < s; r++) {
                         let n;
                         if (r % e.matrixHeight == 0) {
                              n = 0;
                              for (let t = 0; t < e.getSymbolWidth(); t++) o.setBoolean(n, a, t % 2 == 0), n++;
                              a++;
                         }
                         n = 0;
                         for (let s = 0; s < i; s++)
                              s % e.matrixWidth == 0 && (o.setBoolean(n, a, !0), n++),
                                   o.setBoolean(n, a, t.getBit(s, r)),
                                   n++,
                                   s % e.matrixWidth == e.matrixWidth - 1 && (o.setBoolean(n, a, r % 2 == 0), n++);
                         if ((a++, r % e.matrixHeight == e.matrixHeight - 1)) {
                              n = 0;
                              for (let t = 0; t < e.getSymbolWidth(); t++) o.setBoolean(n, a, !0), n++;
                              a++;
                         }
                    }
                    return this.convertByteMatrixToBitMatrix(o, r, n);
               }
               convertByteMatrixToBitMatrix(t, e, r) {
                    const n = t.getWidth(),
                         i = t.getHeight(),
                         s = Math.max(e, n),
                         o = Math.max(r, i),
                         a = Math.min(s / n, o / i);
                    let h,
                         l = (s - n * a) / 2,
                         c = (o - i * a) / 2;
                    r < i || e < n ? ((l = 0), (c = 0), (h = new R(n, i))) : (h = new R(e, r)), h.clear();
                    for (let e = 0, r = c; e < i; e++, r += a) for (let i = 0, s = l; i < n; i++, s += a) 1 === t.get(i, e) && h.setRegion(s, r, a, a);
                    return h;
               }
          }),
          (t.DecodeHintType = E),
          (t.DecoderResult = Y),
          (t.DefaultGridSampler = lt),
          (t.DetectorResult = it),
          (t.EAN13Reader = Tt),
          (t.EncodeHintType = ur),
          (t.Exception = s),
          (t.FormatException = m),
          (t.GenericGF = Q),
          (t.GenericGFPoly = K),
          (t.GlobalHistogramBinarizer = y),
          (t.GridSampler = at),
          (t.GridSamplerInstance = ct),
          (t.HTMLCanvasElementLuminanceSource = b),
          (t.HybridBinarizer = D),
          (t.ITFReader = Et),
          (t.IllegalArgumentException = a),
          (t.IllegalStateException = J),
          (t.InvertedLuminanceSource = M),
          (t.LuminanceSource = O),
          (t.MathUtils = et),
          (t.MultiFormatOneDReader = se),
          (t.MultiFormatReader = cr),
          (t.MultiFormatWriter = class {
               encode(t, e, r, n, i) {
                    let s;
                    if (e !== x.QR_CODE) throw new a('No encoder available for format ' + e);
                    return (s = new Sr()), s.encode(t, e, r, n, i);
               }
          }),
          (t.NotFoundException = N),
          (t.OneDReader = ft),
          (t.PDF417DecodedBitStreamParser = or),
          (t.PDF417DecoderErrorCorrection = Ue),
          (t.PDF417Reader = hr),
          (t.PDF417ResultMetadata = je),
          (t.PerspectiveTransform = ht),
          (t.PlanarYUVLuminanceSource = pr),
          (t.QRCodeByteMatrix = wr),
          (t.QRCodeDataMask = _e),
          (t.QRCodeDecodedBitStreamParser = Re),
          (t.QRCodeDecoderErrorCorrectionLevel = Ce),
          (t.QRCodeDecoderFormatInformation = Ae),
          (t.QRCodeEncoder = Ir),
          (t.QRCodeEncoderQRCode = Cr),
          (t.QRCodeMaskUtil = fr),
          (t.QRCodeMatrixUtil = Er),
          (t.QRCodeMode = Te),
          (t.QRCodeReader = Le),
          (t.QRCodeVersion = Ie),
          (t.QRCodeWriter = Sr),
          (t.RGBLuminanceSource = Tr),
          (t.RSS14Reader = ie),
          (t.RSSExpandedReader = re),
          (t.ReaderException = lr),
          (t.ReedSolomonDecoder = $),
          (t.ReedSolomonEncoder = gr),
          (t.ReedSolomonException = j),
          (t.Result = v),
          (t.ResultMetadataType = z),
          (t.ResultPoint = nt),
          (t.StringUtils = p),
          (t.UnsupportedOperationException = _),
          (t.VideoInputDevice = B),
          (t.WhiteRectangleDetector = ot),
          (t.WriterException = Ar),
          (t.ZXingArrays = f),
          (t.ZXingCharset = Rr),
          (t.ZXingInteger = w),
          (t.ZXingStandardCharsets = Nr),
          (t.ZXingStringBuilder = T),
          (t.ZXingStringEncoding = S),
          (t.ZXingSystem = d),
          (t.createAbstractExpandedDecoder = $t),
          Object.defineProperty(t, '__esModule', { value: !0 });
});
