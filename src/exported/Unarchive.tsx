import IconUnarchiveFill0Wght100Grad0Opsz48 from '../components/UnarchiveFill0Wght100Grad0Opsz48'
import IconUnarchiveFill0Wght200Grad0Opsz48 from '../components/UnarchiveFill0Wght200Grad0Opsz48'
import IconUnarchiveFill0Wght300Grad0Opsz48 from '../components/UnarchiveFill0Wght300Grad0Opsz48'
import IconUnarchiveFill0Wght400Grad0Opsz48 from '../components/UnarchiveFill0Wght400Grad0Opsz48'
import IconUnarchiveFill0Wght500Grad0Opsz48 from '../components/UnarchiveFill0Wght500Grad0Opsz48'
import IconUnarchiveFill0Wght600Grad0Opsz48 from '../components/UnarchiveFill0Wght600Grad0Opsz48'
import IconUnarchiveFill0Wght700Grad0Opsz48 from '../components/UnarchiveFill0Wght700Grad0Opsz48'
import IconUnarchiveFill1Wght100Grad0Opsz48 from '../components/UnarchiveFill1Wght100Grad0Opsz48'
import IconUnarchiveFill1Wght200Grad0Opsz48 from '../components/UnarchiveFill1Wght200Grad0Opsz48'
import IconUnarchiveFill1Wght300Grad0Opsz48 from '../components/UnarchiveFill1Wght300Grad0Opsz48'
import IconUnarchiveFill1Wght400Grad0Opsz48 from '../components/UnarchiveFill1Wght400Grad0Opsz48'
import IconUnarchiveFill1Wght500Grad0Opsz48 from '../components/UnarchiveFill1Wght500Grad0Opsz48'
import IconUnarchiveFill1Wght600Grad0Opsz48 from '../components/UnarchiveFill1Wght600Grad0Opsz48'
import IconUnarchiveFill1Wght700Grad0Opsz48 from '../components/UnarchiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUnarchive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUnarchiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUnarchiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUnarchiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUnarchiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUnarchiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUnarchiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUnarchiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUnarchiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUnarchiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUnarchiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUnarchiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUnarchiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUnarchiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUnarchiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
