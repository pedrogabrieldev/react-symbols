import IconWebFill0Wght100Grad0Opsz48 from '../components/WebFill0Wght100Grad0Opsz48'
import IconWebFill0Wght200Grad0Opsz48 from '../components/WebFill0Wght200Grad0Opsz48'
import IconWebFill0Wght300Grad0Opsz48 from '../components/WebFill0Wght300Grad0Opsz48'
import IconWebFill0Wght400Grad0Opsz48 from '../components/WebFill0Wght400Grad0Opsz48'
import IconWebFill0Wght500Grad0Opsz48 from '../components/WebFill0Wght500Grad0Opsz48'
import IconWebFill0Wght600Grad0Opsz48 from '../components/WebFill0Wght600Grad0Opsz48'
import IconWebFill0Wght700Grad0Opsz48 from '../components/WebFill0Wght700Grad0Opsz48'
import IconWebFill1Wght100Grad0Opsz48 from '../components/WebFill1Wght100Grad0Opsz48'
import IconWebFill1Wght200Grad0Opsz48 from '../components/WebFill1Wght200Grad0Opsz48'
import IconWebFill1Wght300Grad0Opsz48 from '../components/WebFill1Wght300Grad0Opsz48'
import IconWebFill1Wght400Grad0Opsz48 from '../components/WebFill1Wght400Grad0Opsz48'
import IconWebFill1Wght500Grad0Opsz48 from '../components/WebFill1Wght500Grad0Opsz48'
import IconWebFill1Wght600Grad0Opsz48 from '../components/WebFill1Wght600Grad0Opsz48'
import IconWebFill1Wght700Grad0Opsz48 from '../components/WebFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWeb = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWebFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWebFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWebFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWebFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWebFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWebFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWebFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWebFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWebFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWebFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWebFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWebFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWebFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWebFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
