import IconCheckFill0Wght100Grad0Opsz48 from '../components/CheckFill0Wght100Grad0Opsz48'
import IconCheckFill0Wght200Grad0Opsz48 from '../components/CheckFill0Wght200Grad0Opsz48'
import IconCheckFill0Wght300Grad0Opsz48 from '../components/CheckFill0Wght300Grad0Opsz48'
import IconCheckFill0Wght400Grad0Opsz48 from '../components/CheckFill0Wght400Grad0Opsz48'
import IconCheckFill0Wght500Grad0Opsz48 from '../components/CheckFill0Wght500Grad0Opsz48'
import IconCheckFill0Wght600Grad0Opsz48 from '../components/CheckFill0Wght600Grad0Opsz48'
import IconCheckFill0Wght700Grad0Opsz48 from '../components/CheckFill0Wght700Grad0Opsz48'
import IconCheckFill1Wght100Grad0Opsz48 from '../components/CheckFill1Wght100Grad0Opsz48'
import IconCheckFill1Wght200Grad0Opsz48 from '../components/CheckFill1Wght200Grad0Opsz48'
import IconCheckFill1Wght300Grad0Opsz48 from '../components/CheckFill1Wght300Grad0Opsz48'
import IconCheckFill1Wght400Grad0Opsz48 from '../components/CheckFill1Wght400Grad0Opsz48'
import IconCheckFill1Wght500Grad0Opsz48 from '../components/CheckFill1Wght500Grad0Opsz48'
import IconCheckFill1Wght600Grad0Opsz48 from '../components/CheckFill1Wght600Grad0Opsz48'
import IconCheckFill1Wght700Grad0Opsz48 from '../components/CheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
