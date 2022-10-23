import IconCheckIndeterminateSmallFill0Wght100Grad0Opsz48 from '../components/CheckIndeterminateSmallFill0Wght100Grad0Opsz48'
import IconCheckIndeterminateSmallFill0Wght200Grad0Opsz48 from '../components/CheckIndeterminateSmallFill0Wght200Grad0Opsz48'
import IconCheckIndeterminateSmallFill0Wght300Grad0Opsz48 from '../components/CheckIndeterminateSmallFill0Wght300Grad0Opsz48'
import IconCheckIndeterminateSmallFill0Wght400Grad0Opsz48 from '../components/CheckIndeterminateSmallFill0Wght400Grad0Opsz48'
import IconCheckIndeterminateSmallFill0Wght500Grad0Opsz48 from '../components/CheckIndeterminateSmallFill0Wght500Grad0Opsz48'
import IconCheckIndeterminateSmallFill0Wght600Grad0Opsz48 from '../components/CheckIndeterminateSmallFill0Wght600Grad0Opsz48'
import IconCheckIndeterminateSmallFill0Wght700Grad0Opsz48 from '../components/CheckIndeterminateSmallFill0Wght700Grad0Opsz48'
import IconCheckIndeterminateSmallFill1Wght100Grad0Opsz48 from '../components/CheckIndeterminateSmallFill1Wght100Grad0Opsz48'
import IconCheckIndeterminateSmallFill1Wght200Grad0Opsz48 from '../components/CheckIndeterminateSmallFill1Wght200Grad0Opsz48'
import IconCheckIndeterminateSmallFill1Wght300Grad0Opsz48 from '../components/CheckIndeterminateSmallFill1Wght300Grad0Opsz48'
import IconCheckIndeterminateSmallFill1Wght400Grad0Opsz48 from '../components/CheckIndeterminateSmallFill1Wght400Grad0Opsz48'
import IconCheckIndeterminateSmallFill1Wght500Grad0Opsz48 from '../components/CheckIndeterminateSmallFill1Wght500Grad0Opsz48'
import IconCheckIndeterminateSmallFill1Wght600Grad0Opsz48 from '../components/CheckIndeterminateSmallFill1Wght600Grad0Opsz48'
import IconCheckIndeterminateSmallFill1Wght700Grad0Opsz48 from '../components/CheckIndeterminateSmallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCheckIndeterminateSmall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCheckIndeterminateSmallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCheckIndeterminateSmallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCheckIndeterminateSmallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCheckIndeterminateSmallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCheckIndeterminateSmallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCheckIndeterminateSmallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCheckIndeterminateSmallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCheckIndeterminateSmallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCheckIndeterminateSmallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCheckIndeterminateSmallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCheckIndeterminateSmallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCheckIndeterminateSmallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCheckIndeterminateSmallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCheckIndeterminateSmallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
