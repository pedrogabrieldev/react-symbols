import IconEarbudsFill0Wght100Grad0Opsz48 from '../components/EarbudsFill0Wght100Grad0Opsz48'
import IconEarbudsFill0Wght200Grad0Opsz48 from '../components/EarbudsFill0Wght200Grad0Opsz48'
import IconEarbudsFill0Wght300Grad0Opsz48 from '../components/EarbudsFill0Wght300Grad0Opsz48'
import IconEarbudsFill0Wght400Grad0Opsz48 from '../components/EarbudsFill0Wght400Grad0Opsz48'
import IconEarbudsFill0Wght500Grad0Opsz48 from '../components/EarbudsFill0Wght500Grad0Opsz48'
import IconEarbudsFill0Wght600Grad0Opsz48 from '../components/EarbudsFill0Wght600Grad0Opsz48'
import IconEarbudsFill0Wght700Grad0Opsz48 from '../components/EarbudsFill0Wght700Grad0Opsz48'
import IconEarbudsFill1Wght100Grad0Opsz48 from '../components/EarbudsFill1Wght100Grad0Opsz48'
import IconEarbudsFill1Wght200Grad0Opsz48 from '../components/EarbudsFill1Wght200Grad0Opsz48'
import IconEarbudsFill1Wght300Grad0Opsz48 from '../components/EarbudsFill1Wght300Grad0Opsz48'
import IconEarbudsFill1Wght400Grad0Opsz48 from '../components/EarbudsFill1Wght400Grad0Opsz48'
import IconEarbudsFill1Wght500Grad0Opsz48 from '../components/EarbudsFill1Wght500Grad0Opsz48'
import IconEarbudsFill1Wght600Grad0Opsz48 from '../components/EarbudsFill1Wght600Grad0Opsz48'
import IconEarbudsFill1Wght700Grad0Opsz48 from '../components/EarbudsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEarbuds = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEarbudsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEarbudsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEarbudsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEarbudsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEarbudsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEarbudsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEarbudsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEarbudsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEarbudsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEarbudsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEarbudsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEarbudsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEarbudsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEarbudsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
