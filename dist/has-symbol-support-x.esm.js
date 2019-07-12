var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import attempt from 'attempt-x';
import isSymbol from 'is-symbol';
var hasSymbolSupport = attempt(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && isSymbol(Symbol(''));
}.bind(this));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

export default hasSymbolSupport.threw === false && hasSymbolSupport.value === true;

//# sourceMappingURL=has-symbol-support-x.esm.js.map