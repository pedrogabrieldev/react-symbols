import IconContactlessFill0Wght100Grad0Opsz48 from '../components/ContactlessFill0Wght100Grad0Opsz48'
import IconContactlessFill0Wght200Grad0Opsz48 from '../components/ContactlessFill0Wght200Grad0Opsz48'
import IconContactlessFill0Wght300Grad0Opsz48 from '../components/ContactlessFill0Wght300Grad0Opsz48'
import IconContactlessFill0Wght400Grad0Opsz48 from '../components/ContactlessFill0Wght400Grad0Opsz48'
import IconContactlessFill0Wght500Grad0Opsz48 from '../components/ContactlessFill0Wght500Grad0Opsz48'
import IconContactlessFill0Wght600Grad0Opsz48 from '../components/ContactlessFill0Wght600Grad0Opsz48'
import IconContactlessFill0Wght700Grad0Opsz48 from '../components/ContactlessFill0Wght700Grad0Opsz48'
import IconContactlessFill1Wght100Grad0Opsz48 from '../components/ContactlessFill1Wght100Grad0Opsz48'
import IconContactlessFill1Wght200Grad0Opsz48 from '../components/ContactlessFill1Wght200Grad0Opsz48'
import IconContactlessFill1Wght300Grad0Opsz48 from '../components/ContactlessFill1Wght300Grad0Opsz48'
import IconContactlessFill1Wght400Grad0Opsz48 from '../components/ContactlessFill1Wght400Grad0Opsz48'
import IconContactlessFill1Wght500Grad0Opsz48 from '../components/ContactlessFill1Wght500Grad0Opsz48'
import IconContactlessFill1Wght600Grad0Opsz48 from '../components/ContactlessFill1Wght600Grad0Opsz48'
import IconContactlessFill1Wght700Grad0Opsz48 from '../components/ContactlessFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContactless = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactlessFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactlessFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactlessFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactlessFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactlessFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactlessFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactlessFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactlessFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactlessFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactlessFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactlessFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactlessFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactlessFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactlessFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
