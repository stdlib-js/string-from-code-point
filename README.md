<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fromCodePoint

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a string from a sequence of Unicode [code points][code-point].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import fromCodePoint from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-from-code-point/tags). For example,

```javascript
import fromCodePoint from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@v0.2.0-esm/index.mjs';
```

#### fromCodePoint( pt1\[, pt2\[, pt3\[, ...]]] )

Creates a `string` from a sequence of Unicode [code points][code-point].

```javascript
var out = fromCodePoint( 9731 );
// returns '☃'
```

In addition to providing [code points][code-point] as separate arguments, the function supports providing an array-like `object` as a single argument containing a sequence of [code points][code-point].

```javascript
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@esm/index.mjs';

var out = fromCodePoint( 97, 98, 99 );
// returns 'abc'

out = fromCodePoint( new Uint16Array( [ 97, 98, 99 ] ) );
// returns 'abc'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function differs from [`String.fromCharCode`][mdn-string-fromcharcode] in the following ways:

    -   The function provides support for all valid Unicode values (up to `21` bits). While most common Unicode values can be represented using one 16-bit unit, higher code point characters require two 16-bit units (a surrogate pair consisting of a high and a low surrogate) to form a single character. [`String.fromCharCode`][mdn-string-fromcharcode] does **not** support surrogate pairs, supporting only UCS-2, a subset of [UTF-16][utf-16].

-   This function differs from [`String.fromCodePoint`][mdn-string-fromcodepoint] in the following ways:

    -   The function supports explicitly providing an array-like `object` containing a sequence of [code points][code-point].
    -   The function requires **at least** one [code point][code-point].
    -   The function requires that all [code points][code-point] be nonnegative integers. The function does **not** support values, such as `null`, `undefined`, `true`, `false`, `'0'`, `'1'`, etc., which can be cast to integer values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';
import UNICODE_MAX_BMP from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-unicode-max-bmp@esm/index.mjs';
import fromCodePoint from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@esm/index.mjs';

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = floor( randu()*UNICODE_MAX_BMP );
    console.log( '%d => %s', x, fromCodePoint( x ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-code-point-at`][@stdlib/string/code-point-at]</span><span class="delimiter">: </span><span class="description">return a Unicode code point from a string at a specified position.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-from-code-point.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-from-code-point

[test-image]: https://github.com/stdlib-js/string-from-code-point/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/string-from-code-point/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-from-code-point/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-from-code-point?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-from-code-point.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-from-code-point/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-from-code-point#cli
[cli-url]: https://github.com/stdlib-js/string-from-code-point/tree/cli
[@stdlib/string-from-code-point]: https://github.com/stdlib-js/string-from-code-point/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-from-code-point/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-from-code-point/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-from-code-point/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-from-code-point/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-from-code-point/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-from-code-point/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-from-code-point/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-from-code-point/main/LICENSE

[code-point]: https://en.wikipedia.org/wiki/Code_point

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-string-fromcharcode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

[mdn-string-fromcodepoint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

<!-- <related-links> -->

[@stdlib/string/code-point-at]: https://github.com/stdlib-js/string-code-point-at/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
