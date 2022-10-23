import IconErrorCircleRoundedFill0Wght100Grad0Opsz48 from '../components/ErrorCircleRoundedFill0Wght100Grad0Opsz48'
import IconErrorCircleRoundedFill0Wght200Grad0Opsz48 from '../components/ErrorCircleRoundedFill0Wght200Grad0Opsz48'
import IconErrorCircleRoundedFill0Wght300Grad0Opsz48 from '../components/ErrorCircleRoundedFill0Wght300Grad0Opsz48'
import IconErrorCircleRoundedFill0Wght400Grad0Opsz48 from '../components/ErrorCircleRoundedFill0Wght400Grad0Opsz48'
import IconErrorCircleRoundedFill0Wght500Grad0Opsz48 from '../components/ErrorCircleRoundedFill0Wght500Grad0Opsz48'
import IconErrorCircleRoundedFill0Wght600Grad0Opsz48 from '../components/ErrorCircleRoundedFill0Wght600Grad0Opsz48'
import IconErrorCircleRoundedFill0Wght700Grad0Opsz48 from '../components/ErrorCircleRoundedFill0Wght700Grad0Opsz48'
import IconErrorCircleRoundedFill1Wght100Grad0Opsz48 from '../components/ErrorCircleRoundedFill1Wght100Grad0Opsz48'
import IconErrorCircleRoundedFill1Wght200Grad0Opsz48 from '../components/ErrorCircleRoundedFill1Wght200Grad0Opsz48'
import IconErrorCircleRoundedFill1Wght300Grad0Opsz48 from '../components/ErrorCircleRoundedFill1Wght300Grad0Opsz48'
import IconErrorCircleRoundedFill1Wght400Grad0Opsz48 from '../components/ErrorCircleRoundedFill1Wght400Grad0Opsz48'
import IconErrorCircleRoundedFill1Wght500Grad0Opsz48 from '../components/ErrorCircleRoundedFill1Wght500Grad0Opsz48'
import IconErrorCircleRoundedFill1Wght600Grad0Opsz48 from '../components/ErrorCircleRoundedFill1Wght600Grad0Opsz48'
import IconErrorCircleRoundedFill1Wght700Grad0Opsz48 from '../components/ErrorCircleRoundedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconErrorCircleRounded = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconErrorCircleRoundedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconErrorCircleRoundedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconErrorCircleRoundedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconErrorCircleRoundedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconErrorCircleRoundedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconErrorCircleRoundedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconErrorCircleRoundedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconErrorCircleRoundedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconErrorCircleRoundedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconErrorCircleRoundedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconErrorCircleRoundedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconErrorCircleRoundedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconErrorCircleRoundedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconErrorCircleRoundedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
