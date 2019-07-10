/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
export default typeof Symbol === 'function' &&
  /* eslint-disable-next-line compat/compat */
  typeof Symbol('') === 'symbol';
