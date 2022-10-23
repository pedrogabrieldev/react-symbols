import IconEastFill0Wght100Grad0Opsz48 from '../components/EastFill0Wght100Grad0Opsz48'
import IconEastFill0Wght200Grad0Opsz48 from '../components/EastFill0Wght200Grad0Opsz48'
import IconEastFill0Wght300Grad0Opsz48 from '../components/EastFill0Wght300Grad0Opsz48'
import IconEastFill0Wght400Grad0Opsz48 from '../components/EastFill0Wght400Grad0Opsz48'
import IconEastFill0Wght500Grad0Opsz48 from '../components/EastFill0Wght500Grad0Opsz48'
import IconEastFill0Wght600Grad0Opsz48 from '../components/EastFill0Wght600Grad0Opsz48'
import IconEastFill0Wght700Grad0Opsz48 from '../components/EastFill0Wght700Grad0Opsz48'
import IconEastFill1Wght100Grad0Opsz48 from '../components/EastFill1Wght100Grad0Opsz48'
import IconEastFill1Wght200Grad0Opsz48 from '../components/EastFill1Wght200Grad0Opsz48'
import IconEastFill1Wght300Grad0Opsz48 from '../components/EastFill1Wght300Grad0Opsz48'
import IconEastFill1Wght400Grad0Opsz48 from '../components/EastFill1Wght400Grad0Opsz48'
import IconEastFill1Wght500Grad0Opsz48 from '../components/EastFill1Wght500Grad0Opsz48'
import IconEastFill1Wght600Grad0Opsz48 from '../components/EastFill1Wght600Grad0Opsz48'
import IconEastFill1Wght700Grad0Opsz48 from '../components/EastFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEast = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEastFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEastFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEastFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEastFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEastFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEastFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEastFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEastFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEastFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEastFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEastFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEastFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEastFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEastFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
