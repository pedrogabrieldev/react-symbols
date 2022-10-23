import IconHtmlFill0Wght100Grad0Opsz48 from '../components/HtmlFill0Wght100Grad0Opsz48'
import IconHtmlFill0Wght200Grad0Opsz48 from '../components/HtmlFill0Wght200Grad0Opsz48'
import IconHtmlFill0Wght300Grad0Opsz48 from '../components/HtmlFill0Wght300Grad0Opsz48'
import IconHtmlFill0Wght400Grad0Opsz48 from '../components/HtmlFill0Wght400Grad0Opsz48'
import IconHtmlFill0Wght500Grad0Opsz48 from '../components/HtmlFill0Wght500Grad0Opsz48'
import IconHtmlFill0Wght600Grad0Opsz48 from '../components/HtmlFill0Wght600Grad0Opsz48'
import IconHtmlFill0Wght700Grad0Opsz48 from '../components/HtmlFill0Wght700Grad0Opsz48'
import IconHtmlFill1Wght100Grad0Opsz48 from '../components/HtmlFill1Wght100Grad0Opsz48'
import IconHtmlFill1Wght200Grad0Opsz48 from '../components/HtmlFill1Wght200Grad0Opsz48'
import IconHtmlFill1Wght300Grad0Opsz48 from '../components/HtmlFill1Wght300Grad0Opsz48'
import IconHtmlFill1Wght400Grad0Opsz48 from '../components/HtmlFill1Wght400Grad0Opsz48'
import IconHtmlFill1Wght500Grad0Opsz48 from '../components/HtmlFill1Wght500Grad0Opsz48'
import IconHtmlFill1Wght600Grad0Opsz48 from '../components/HtmlFill1Wght600Grad0Opsz48'
import IconHtmlFill1Wght700Grad0Opsz48 from '../components/HtmlFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHtml = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHtmlFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHtmlFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHtmlFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHtmlFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHtmlFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHtmlFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHtmlFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHtmlFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHtmlFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHtmlFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHtmlFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHtmlFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHtmlFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHtmlFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
