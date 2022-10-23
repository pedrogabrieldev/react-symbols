import IconCookieFill0Wght100Grad0Opsz48 from '../components/CookieFill0Wght100Grad0Opsz48'
import IconCookieFill0Wght200Grad0Opsz48 from '../components/CookieFill0Wght200Grad0Opsz48'
import IconCookieFill0Wght300Grad0Opsz48 from '../components/CookieFill0Wght300Grad0Opsz48'
import IconCookieFill0Wght400Grad0Opsz48 from '../components/CookieFill0Wght400Grad0Opsz48'
import IconCookieFill0Wght500Grad0Opsz48 from '../components/CookieFill0Wght500Grad0Opsz48'
import IconCookieFill0Wght600Grad0Opsz48 from '../components/CookieFill0Wght600Grad0Opsz48'
import IconCookieFill0Wght700Grad0Opsz48 from '../components/CookieFill0Wght700Grad0Opsz48'
import IconCookieFill1Wght100Grad0Opsz48 from '../components/CookieFill1Wght100Grad0Opsz48'
import IconCookieFill1Wght200Grad0Opsz48 from '../components/CookieFill1Wght200Grad0Opsz48'
import IconCookieFill1Wght300Grad0Opsz48 from '../components/CookieFill1Wght300Grad0Opsz48'
import IconCookieFill1Wght400Grad0Opsz48 from '../components/CookieFill1Wght400Grad0Opsz48'
import IconCookieFill1Wght500Grad0Opsz48 from '../components/CookieFill1Wght500Grad0Opsz48'
import IconCookieFill1Wght600Grad0Opsz48 from '../components/CookieFill1Wght600Grad0Opsz48'
import IconCookieFill1Wght700Grad0Opsz48 from '../components/CookieFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCookie = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCookieFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCookieFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCookieFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCookieFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCookieFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCookieFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCookieFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCookieFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCookieFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCookieFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCookieFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCookieFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCookieFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCookieFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
