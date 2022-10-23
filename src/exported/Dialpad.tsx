import IconDialpadFill0Wght100Grad0Opsz48 from '../components/DialpadFill0Wght100Grad0Opsz48'
import IconDialpadFill0Wght200Grad0Opsz48 from '../components/DialpadFill0Wght200Grad0Opsz48'
import IconDialpadFill0Wght300Grad0Opsz48 from '../components/DialpadFill0Wght300Grad0Opsz48'
import IconDialpadFill0Wght400Grad0Opsz48 from '../components/DialpadFill0Wght400Grad0Opsz48'
import IconDialpadFill0Wght500Grad0Opsz48 from '../components/DialpadFill0Wght500Grad0Opsz48'
import IconDialpadFill0Wght600Grad0Opsz48 from '../components/DialpadFill0Wght600Grad0Opsz48'
import IconDialpadFill0Wght700Grad0Opsz48 from '../components/DialpadFill0Wght700Grad0Opsz48'
import IconDialpadFill1Wght100Grad0Opsz48 from '../components/DialpadFill1Wght100Grad0Opsz48'
import IconDialpadFill1Wght200Grad0Opsz48 from '../components/DialpadFill1Wght200Grad0Opsz48'
import IconDialpadFill1Wght300Grad0Opsz48 from '../components/DialpadFill1Wght300Grad0Opsz48'
import IconDialpadFill1Wght400Grad0Opsz48 from '../components/DialpadFill1Wght400Grad0Opsz48'
import IconDialpadFill1Wght500Grad0Opsz48 from '../components/DialpadFill1Wght500Grad0Opsz48'
import IconDialpadFill1Wght600Grad0Opsz48 from '../components/DialpadFill1Wght600Grad0Opsz48'
import IconDialpadFill1Wght700Grad0Opsz48 from '../components/DialpadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDialpad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDialpadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDialpadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDialpadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDialpadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDialpadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDialpadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDialpadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDialpadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDialpadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDialpadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDialpadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDialpadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDialpadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDialpadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
