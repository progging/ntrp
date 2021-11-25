/**
 * Interpolates a string with values from the provided dictionary.
 * Uses `{{` and `}}` as start and end delimiters.
 * @param templateString Template string with delimited placeholders for dictionary values.
 * @param dictionary Values to replace in the template string.
 * @param transformInterpolatedValue Optional transform function for interpolated value.
 */
export const ntrp = (
  templateString: string,
  dictionary: Record<string, string>,
  transformInterpolatedValue: (value: string) => string = (value) => value
): string => {
  const [startDelimiter, endDelimiter] = ['{{', '}}']
  for (const key in dictionary) {
    const rgexp = new RegExp(
      escapeRegExp(`${startDelimiter}${key}${endDelimiter}`),
      'gi'
    )
    templateString = templateString.replace(
      rgexp,
      transformInterpolatedValue(dictionary[key])
    )
  }

  return templateString
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
 */
const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
