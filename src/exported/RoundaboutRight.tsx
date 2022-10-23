import IconRoundaboutRightFill0Wght100Grad0Opsz48 from '../components/RoundaboutRightFill0Wght100Grad0Opsz48'
import IconRoundaboutRightFill0Wght200Grad0Opsz48 from '../components/RoundaboutRightFill0Wght200Grad0Opsz48'
import IconRoundaboutRightFill0Wght300Grad0Opsz48 from '../components/RoundaboutRightFill0Wght300Grad0Opsz48'
import IconRoundaboutRightFill0Wght400Grad0Opsz48 from '../components/RoundaboutRightFill0Wght400Grad0Opsz48'
import IconRoundaboutRightFill0Wght500Grad0Opsz48 from '../components/RoundaboutRightFill0Wght500Grad0Opsz48'
import IconRoundaboutRightFill0Wght600Grad0Opsz48 from '../components/RoundaboutRightFill0Wght600Grad0Opsz48'
import IconRoundaboutRightFill0Wght700Grad0Opsz48 from '../components/RoundaboutRightFill0Wght700Grad0Opsz48'
import IconRoundaboutRightFill1Wght100Grad0Opsz48 from '../components/RoundaboutRightFill1Wght100Grad0Opsz48'
import IconRoundaboutRightFill1Wght200Grad0Opsz48 from '../components/RoundaboutRightFill1Wght200Grad0Opsz48'
import IconRoundaboutRightFill1Wght300Grad0Opsz48 from '../components/RoundaboutRightFill1Wght300Grad0Opsz48'
import IconRoundaboutRightFill1Wght400Grad0Opsz48 from '../components/RoundaboutRightFill1Wght400Grad0Opsz48'
import IconRoundaboutRightFill1Wght500Grad0Opsz48 from '../components/RoundaboutRightFill1Wght500Grad0Opsz48'
import IconRoundaboutRightFill1Wght600Grad0Opsz48 from '../components/RoundaboutRightFill1Wght600Grad0Opsz48'
import IconRoundaboutRightFill1Wght700Grad0Opsz48 from '../components/RoundaboutRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoundaboutRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRoundaboutRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRoundaboutRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRoundaboutRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRoundaboutRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRoundaboutRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRoundaboutRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRoundaboutRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRoundaboutRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRoundaboutRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRoundaboutRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRoundaboutRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRoundaboutRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRoundaboutRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRoundaboutRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
