import attempt from 'attempt-x';
import isSymbol from 'is-symbol';

const hasSymbolSupport = attempt(() => {
  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && isSymbol(Symbol(''));
});

/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
export default hasSymbolSupport.threw === false && hasSymbolSupport.value === true;
