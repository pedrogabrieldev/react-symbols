import IconAutoAwesomeFill0Wght100Grad0Opsz48 from '../components/AutoAwesomeFill0Wght100Grad0Opsz48'
import IconAutoAwesomeFill0Wght200Grad0Opsz48 from '../components/AutoAwesomeFill0Wght200Grad0Opsz48'
import IconAutoAwesomeFill0Wght300Grad0Opsz48 from '../components/AutoAwesomeFill0Wght300Grad0Opsz48'
import IconAutoAwesomeFill0Wght400Grad0Opsz48 from '../components/AutoAwesomeFill0Wght400Grad0Opsz48'
import IconAutoAwesomeFill0Wght500Grad0Opsz48 from '../components/AutoAwesomeFill0Wght500Grad0Opsz48'
import IconAutoAwesomeFill0Wght600Grad0Opsz48 from '../components/AutoAwesomeFill0Wght600Grad0Opsz48'
import IconAutoAwesomeFill0Wght700Grad0Opsz48 from '../components/AutoAwesomeFill0Wght700Grad0Opsz48'
import IconAutoAwesomeFill1Wght100Grad0Opsz48 from '../components/AutoAwesomeFill1Wght100Grad0Opsz48'
import IconAutoAwesomeFill1Wght200Grad0Opsz48 from '../components/AutoAwesomeFill1Wght200Grad0Opsz48'
import IconAutoAwesomeFill1Wght300Grad0Opsz48 from '../components/AutoAwesomeFill1Wght300Grad0Opsz48'
import IconAutoAwesomeFill1Wght400Grad0Opsz48 from '../components/AutoAwesomeFill1Wght400Grad0Opsz48'
import IconAutoAwesomeFill1Wght500Grad0Opsz48 from '../components/AutoAwesomeFill1Wght500Grad0Opsz48'
import IconAutoAwesomeFill1Wght600Grad0Opsz48 from '../components/AutoAwesomeFill1Wght600Grad0Opsz48'
import IconAutoAwesomeFill1Wght700Grad0Opsz48 from '../components/AutoAwesomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoAwesome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoAwesomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoAwesomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoAwesomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoAwesomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoAwesomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoAwesomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoAwesomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoAwesomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoAwesomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoAwesomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoAwesomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoAwesomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoAwesomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoAwesomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
