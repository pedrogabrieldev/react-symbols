import IconDnsFill0Wght100Grad0Opsz48 from '../components/DnsFill0Wght100Grad0Opsz48'
import IconDnsFill0Wght200Grad0Opsz48 from '../components/DnsFill0Wght200Grad0Opsz48'
import IconDnsFill0Wght300Grad0Opsz48 from '../components/DnsFill0Wght300Grad0Opsz48'
import IconDnsFill0Wght400Grad0Opsz48 from '../components/DnsFill0Wght400Grad0Opsz48'
import IconDnsFill0Wght500Grad0Opsz48 from '../components/DnsFill0Wght500Grad0Opsz48'
import IconDnsFill0Wght600Grad0Opsz48 from '../components/DnsFill0Wght600Grad0Opsz48'
import IconDnsFill0Wght700Grad0Opsz48 from '../components/DnsFill0Wght700Grad0Opsz48'
import IconDnsFill1Wght100Grad0Opsz48 from '../components/DnsFill1Wght100Grad0Opsz48'
import IconDnsFill1Wght200Grad0Opsz48 from '../components/DnsFill1Wght200Grad0Opsz48'
import IconDnsFill1Wght300Grad0Opsz48 from '../components/DnsFill1Wght300Grad0Opsz48'
import IconDnsFill1Wght400Grad0Opsz48 from '../components/DnsFill1Wght400Grad0Opsz48'
import IconDnsFill1Wght500Grad0Opsz48 from '../components/DnsFill1Wght500Grad0Opsz48'
import IconDnsFill1Wght600Grad0Opsz48 from '../components/DnsFill1Wght600Grad0Opsz48'
import IconDnsFill1Wght700Grad0Opsz48 from '../components/DnsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDns = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDnsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDnsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDnsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDnsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDnsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDnsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDnsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDnsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDnsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDnsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDnsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDnsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDnsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDnsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
