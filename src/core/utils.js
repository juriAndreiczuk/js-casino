export const methodName = (method) => {
  const methodCapitalize = method[0].toUpperCase() + method.slice(1)
  const result = `on${methodCapitalize}`
  return result
}
