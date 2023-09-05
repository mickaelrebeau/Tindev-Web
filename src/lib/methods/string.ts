/**
 * The function ``assertsHexaColor`` checks if a given string is a valid hexadecimal color code and throws
 * an error if it is not. * @param {string} color - The `color` parameter is a string representing a color value.
 * @example
 * // Correct values
 * assertsHexaColor('#fff'); // hexa 3-digits
 * assertsHexaColor('#abcd'); // hexa 3-digits with 1-digit opacity
 * assertsHexaColor('#1a1e22'); // hexa 6-digits
 * assertsHexaColor('#1a1e2255'); // hexa 6-digits with 2-digits opacity
 * // Invalid values
 * assertsHexaColor('fff'); // missing #
 * assertsHexaColor('#ab'); // missing 1-digit
 * assertsHexaColor('#555p'); // p is not an hexa digit
 * @throws Error if ``color`` is not an hexadecimal string
 */
export function assertsHexaColor(color: string): asserts color is HexColor {
  const validLengths = [3, 4, 6, 7]
  if (
    !validLengths.includes(color.length) ||
    !/^#[0-9A-F]{3,4,6,7}$/i.test(color)
  ) {
    throw new Error(`${color} is not a hex color`)
  }
}
export function assertsHexaColors<Keys extends string>(
  colors: Record<Keys, string>
): asserts colors is Record<Keys, HexColor> {
  Object.values<string>(colors).forEach((color) => assertsHexaColor(color))
}
