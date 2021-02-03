import escapeRegExp from 'lodash.escaperegexp'

/**
 * Interpolates a string with values from the provided dictionary.
 * @param value Input string with placeholder values delimiters.
 * @param dictionary Interpolated values
 * @param transformInterpolatedValue Transform function for interpolated value.
 * @param delimiters Start and stop delimiters for placeholder values.
 */
const interpolate = (
  value: string,
  dictionary: Record<string, string>,
  transformInterpolatedValue: (value: string) => string = (value) => value,
  delimiters: [string, string] = ['{{', '}}']
): string => {
  const [startDelimiter, endDelimiter] = delimiters
  for (const key in dictionary)
    value = value.replace(
      new RegExp(escapeRegExp(`${startDelimiter}${key}${endDelimiter}`), 'gi'),
      transformInterpolatedValue(dictionary[key])
    )
  return value
}

export default interpolate
