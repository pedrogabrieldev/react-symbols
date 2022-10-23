import IconRoundaboutLeftFill0Wght100Grad0Opsz48 from '../components/RoundaboutLeftFill0Wght100Grad0Opsz48'
import IconRoundaboutLeftFill0Wght200Grad0Opsz48 from '../components/RoundaboutLeftFill0Wght200Grad0Opsz48'
import IconRoundaboutLeftFill0Wght300Grad0Opsz48 from '../components/RoundaboutLeftFill0Wght300Grad0Opsz48'
import IconRoundaboutLeftFill0Wght400Grad0Opsz48 from '../components/RoundaboutLeftFill0Wght400Grad0Opsz48'
import IconRoundaboutLeftFill0Wght500Grad0Opsz48 from '../components/RoundaboutLeftFill0Wght500Grad0Opsz48'
import IconRoundaboutLeftFill0Wght600Grad0Opsz48 from '../components/RoundaboutLeftFill0Wght600Grad0Opsz48'
import IconRoundaboutLeftFill0Wght700Grad0Opsz48 from '../components/RoundaboutLeftFill0Wght700Grad0Opsz48'
import IconRoundaboutLeftFill1Wght100Grad0Opsz48 from '../components/RoundaboutLeftFill1Wght100Grad0Opsz48'
import IconRoundaboutLeftFill1Wght200Grad0Opsz48 from '../components/RoundaboutLeftFill1Wght200Grad0Opsz48'
import IconRoundaboutLeftFill1Wght300Grad0Opsz48 from '../components/RoundaboutLeftFill1Wght300Grad0Opsz48'
import IconRoundaboutLeftFill1Wght400Grad0Opsz48 from '../components/RoundaboutLeftFill1Wght400Grad0Opsz48'
import IconRoundaboutLeftFill1Wght500Grad0Opsz48 from '../components/RoundaboutLeftFill1Wght500Grad0Opsz48'
import IconRoundaboutLeftFill1Wght600Grad0Opsz48 from '../components/RoundaboutLeftFill1Wght600Grad0Opsz48'
import IconRoundaboutLeftFill1Wght700Grad0Opsz48 from '../components/RoundaboutLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoundaboutLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRoundaboutLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRoundaboutLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRoundaboutLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRoundaboutLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRoundaboutLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRoundaboutLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRoundaboutLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRoundaboutLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRoundaboutLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRoundaboutLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRoundaboutLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRoundaboutLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRoundaboutLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRoundaboutLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
