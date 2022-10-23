import IconLooksFill0Wght100Grad0Opsz48 from '../components/LooksFill0Wght100Grad0Opsz48'
import IconLooksFill0Wght200Grad0Opsz48 from '../components/LooksFill0Wght200Grad0Opsz48'
import IconLooksFill0Wght300Grad0Opsz48 from '../components/LooksFill0Wght300Grad0Opsz48'
import IconLooksFill0Wght400Grad0Opsz48 from '../components/LooksFill0Wght400Grad0Opsz48'
import IconLooksFill0Wght500Grad0Opsz48 from '../components/LooksFill0Wght500Grad0Opsz48'
import IconLooksFill0Wght600Grad0Opsz48 from '../components/LooksFill0Wght600Grad0Opsz48'
import IconLooksFill0Wght700Grad0Opsz48 from '../components/LooksFill0Wght700Grad0Opsz48'
import IconLooksFill1Wght100Grad0Opsz48 from '../components/LooksFill1Wght100Grad0Opsz48'
import IconLooksFill1Wght200Grad0Opsz48 from '../components/LooksFill1Wght200Grad0Opsz48'
import IconLooksFill1Wght300Grad0Opsz48 from '../components/LooksFill1Wght300Grad0Opsz48'
import IconLooksFill1Wght400Grad0Opsz48 from '../components/LooksFill1Wght400Grad0Opsz48'
import IconLooksFill1Wght500Grad0Opsz48 from '../components/LooksFill1Wght500Grad0Opsz48'
import IconLooksFill1Wght600Grad0Opsz48 from '../components/LooksFill1Wght600Grad0Opsz48'
import IconLooksFill1Wght700Grad0Opsz48 from '../components/LooksFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLooks = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLooksFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLooksFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLooksFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLooksFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLooksFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLooksFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLooksFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLooksFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLooksFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLooksFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLooksFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLooksFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLooksFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLooksFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
