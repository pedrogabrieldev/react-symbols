const rawString = `
`

const regexp = /(?<=<span _ngcontent-nov-c155="" style="">).+?(?=<\/span>)/g
const result = rawString.match(regexp)
const unique = [...new Set(result)]

export default unique