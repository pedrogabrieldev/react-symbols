import IconPentagonFill0Wght100Grad0Opsz48 from '../components/PentagonFill0Wght100Grad0Opsz48'
import IconPentagonFill0Wght200Grad0Opsz48 from '../components/PentagonFill0Wght200Grad0Opsz48'
import IconPentagonFill0Wght300Grad0Opsz48 from '../components/PentagonFill0Wght300Grad0Opsz48'
import IconPentagonFill0Wght400Grad0Opsz48 from '../components/PentagonFill0Wght400Grad0Opsz48'
import IconPentagonFill0Wght500Grad0Opsz48 from '../components/PentagonFill0Wght500Grad0Opsz48'
import IconPentagonFill0Wght600Grad0Opsz48 from '../components/PentagonFill0Wght600Grad0Opsz48'
import IconPentagonFill0Wght700Grad0Opsz48 from '../components/PentagonFill0Wght700Grad0Opsz48'
import IconPentagonFill1Wght100Grad0Opsz48 from '../components/PentagonFill1Wght100Grad0Opsz48'
import IconPentagonFill1Wght200Grad0Opsz48 from '../components/PentagonFill1Wght200Grad0Opsz48'
import IconPentagonFill1Wght300Grad0Opsz48 from '../components/PentagonFill1Wght300Grad0Opsz48'
import IconPentagonFill1Wght400Grad0Opsz48 from '../components/PentagonFill1Wght400Grad0Opsz48'
import IconPentagonFill1Wght500Grad0Opsz48 from '../components/PentagonFill1Wght500Grad0Opsz48'
import IconPentagonFill1Wght600Grad0Opsz48 from '../components/PentagonFill1Wght600Grad0Opsz48'
import IconPentagonFill1Wght700Grad0Opsz48 from '../components/PentagonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPentagon = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPentagonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPentagonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPentagonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPentagonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPentagonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPentagonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPentagonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPentagonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPentagonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPentagonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPentagonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPentagonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPentagonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPentagonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
