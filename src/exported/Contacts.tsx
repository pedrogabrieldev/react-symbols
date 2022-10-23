import IconContactsFill0Wght100Grad0Opsz48 from '../components/ContactsFill0Wght100Grad0Opsz48'
import IconContactsFill0Wght200Grad0Opsz48 from '../components/ContactsFill0Wght200Grad0Opsz48'
import IconContactsFill0Wght300Grad0Opsz48 from '../components/ContactsFill0Wght300Grad0Opsz48'
import IconContactsFill0Wght400Grad0Opsz48 from '../components/ContactsFill0Wght400Grad0Opsz48'
import IconContactsFill0Wght500Grad0Opsz48 from '../components/ContactsFill0Wght500Grad0Opsz48'
import IconContactsFill0Wght600Grad0Opsz48 from '../components/ContactsFill0Wght600Grad0Opsz48'
import IconContactsFill0Wght700Grad0Opsz48 from '../components/ContactsFill0Wght700Grad0Opsz48'
import IconContactsFill1Wght100Grad0Opsz48 from '../components/ContactsFill1Wght100Grad0Opsz48'
import IconContactsFill1Wght200Grad0Opsz48 from '../components/ContactsFill1Wght200Grad0Opsz48'
import IconContactsFill1Wght300Grad0Opsz48 from '../components/ContactsFill1Wght300Grad0Opsz48'
import IconContactsFill1Wght400Grad0Opsz48 from '../components/ContactsFill1Wght400Grad0Opsz48'
import IconContactsFill1Wght500Grad0Opsz48 from '../components/ContactsFill1Wght500Grad0Opsz48'
import IconContactsFill1Wght600Grad0Opsz48 from '../components/ContactsFill1Wght600Grad0Opsz48'
import IconContactsFill1Wght700Grad0Opsz48 from '../components/ContactsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContacts = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
