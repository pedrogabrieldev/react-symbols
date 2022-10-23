import IconRainyFill0Wght100Grad0Opsz48 from '../components/RainyFill0Wght100Grad0Opsz48'
import IconRainyFill0Wght200Grad0Opsz48 from '../components/RainyFill0Wght200Grad0Opsz48'
import IconRainyFill0Wght300Grad0Opsz48 from '../components/RainyFill0Wght300Grad0Opsz48'
import IconRainyFill0Wght400Grad0Opsz48 from '../components/RainyFill0Wght400Grad0Opsz48'
import IconRainyFill0Wght500Grad0Opsz48 from '../components/RainyFill0Wght500Grad0Opsz48'
import IconRainyFill0Wght600Grad0Opsz48 from '../components/RainyFill0Wght600Grad0Opsz48'
import IconRainyFill0Wght700Grad0Opsz48 from '../components/RainyFill0Wght700Grad0Opsz48'
import IconRainyFill1Wght100Grad0Opsz48 from '../components/RainyFill1Wght100Grad0Opsz48'
import IconRainyFill1Wght200Grad0Opsz48 from '../components/RainyFill1Wght200Grad0Opsz48'
import IconRainyFill1Wght300Grad0Opsz48 from '../components/RainyFill1Wght300Grad0Opsz48'
import IconRainyFill1Wght400Grad0Opsz48 from '../components/RainyFill1Wght400Grad0Opsz48'
import IconRainyFill1Wght500Grad0Opsz48 from '../components/RainyFill1Wght500Grad0Opsz48'
import IconRainyFill1Wght600Grad0Opsz48 from '../components/RainyFill1Wght600Grad0Opsz48'
import IconRainyFill1Wght700Grad0Opsz48 from '../components/RainyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRainy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRainyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRainyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRainyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRainyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRainyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRainyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRainyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRainyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRainyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRainyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRainyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRainyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRainyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRainyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
