import IconJavascriptFill0Wght100Grad0Opsz48 from '../components/JavascriptFill0Wght100Grad0Opsz48'
import IconJavascriptFill0Wght200Grad0Opsz48 from '../components/JavascriptFill0Wght200Grad0Opsz48'
import IconJavascriptFill0Wght300Grad0Opsz48 from '../components/JavascriptFill0Wght300Grad0Opsz48'
import IconJavascriptFill0Wght400Grad0Opsz48 from '../components/JavascriptFill0Wght400Grad0Opsz48'
import IconJavascriptFill0Wght500Grad0Opsz48 from '../components/JavascriptFill0Wght500Grad0Opsz48'
import IconJavascriptFill0Wght600Grad0Opsz48 from '../components/JavascriptFill0Wght600Grad0Opsz48'
import IconJavascriptFill0Wght700Grad0Opsz48 from '../components/JavascriptFill0Wght700Grad0Opsz48'
import IconJavascriptFill1Wght100Grad0Opsz48 from '../components/JavascriptFill1Wght100Grad0Opsz48'
import IconJavascriptFill1Wght200Grad0Opsz48 from '../components/JavascriptFill1Wght200Grad0Opsz48'
import IconJavascriptFill1Wght300Grad0Opsz48 from '../components/JavascriptFill1Wght300Grad0Opsz48'
import IconJavascriptFill1Wght400Grad0Opsz48 from '../components/JavascriptFill1Wght400Grad0Opsz48'
import IconJavascriptFill1Wght500Grad0Opsz48 from '../components/JavascriptFill1Wght500Grad0Opsz48'
import IconJavascriptFill1Wght600Grad0Opsz48 from '../components/JavascriptFill1Wght600Grad0Opsz48'
import IconJavascriptFill1Wght700Grad0Opsz48 from '../components/JavascriptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconJavascript = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconJavascriptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconJavascriptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconJavascriptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconJavascriptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconJavascriptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconJavascriptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconJavascriptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconJavascriptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconJavascriptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconJavascriptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconJavascriptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconJavascriptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconJavascriptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconJavascriptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
