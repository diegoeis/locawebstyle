/*!
 * Pikaday jQuery plugin.
 *
 * Copyright © 2013 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
!function(e,n){"use strict";"object"==typeof exports?n(require("jquery"),require("../pikaday")):"function"==typeof define&&define.amd?define(["jquery","pikaday"],n):n(e.jQuery,e.Pikaday)}(this,function(e,n){"use strict";e.fn.pikaday=function(){var t=arguments;return t&&t.length||(t=[{}]),this.each(function(){var s=e(this),a=s.data("pikaday");if(a instanceof n)"string"==typeof t[0]&&"function"==typeof a[t[0]]&&a[t[0]].apply(a,Array.prototype.slice.call(t,1));else if("object"==typeof t[0]){var i=e.extend({},t[0]);i.field=s[0],s.data("pikaday",new n(i))}})}});