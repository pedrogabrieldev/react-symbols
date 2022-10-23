import IconRoundedCornerFill0Wght100Grad0Opsz48 from '../components/RoundedCornerFill0Wght100Grad0Opsz48'
import IconRoundedCornerFill0Wght200Grad0Opsz48 from '../components/RoundedCornerFill0Wght200Grad0Opsz48'
import IconRoundedCornerFill0Wght300Grad0Opsz48 from '../components/RoundedCornerFill0Wght300Grad0Opsz48'
import IconRoundedCornerFill0Wght400Grad0Opsz48 from '../components/RoundedCornerFill0Wght400Grad0Opsz48'
import IconRoundedCornerFill0Wght500Grad0Opsz48 from '../components/RoundedCornerFill0Wght500Grad0Opsz48'
import IconRoundedCornerFill0Wght600Grad0Opsz48 from '../components/RoundedCornerFill0Wght600Grad0Opsz48'
import IconRoundedCornerFill0Wght700Grad0Opsz48 from '../components/RoundedCornerFill0Wght700Grad0Opsz48'
import IconRoundedCornerFill1Wght100Grad0Opsz48 from '../components/RoundedCornerFill1Wght100Grad0Opsz48'
import IconRoundedCornerFill1Wght200Grad0Opsz48 from '../components/RoundedCornerFill1Wght200Grad0Opsz48'
import IconRoundedCornerFill1Wght300Grad0Opsz48 from '../components/RoundedCornerFill1Wght300Grad0Opsz48'
import IconRoundedCornerFill1Wght400Grad0Opsz48 from '../components/RoundedCornerFill1Wght400Grad0Opsz48'
import IconRoundedCornerFill1Wght500Grad0Opsz48 from '../components/RoundedCornerFill1Wght500Grad0Opsz48'
import IconRoundedCornerFill1Wght600Grad0Opsz48 from '../components/RoundedCornerFill1Wght600Grad0Opsz48'
import IconRoundedCornerFill1Wght700Grad0Opsz48 from '../components/RoundedCornerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoundedCorner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRoundedCornerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRoundedCornerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRoundedCornerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRoundedCornerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRoundedCornerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRoundedCornerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRoundedCornerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRoundedCornerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRoundedCornerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRoundedCornerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRoundedCornerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRoundedCornerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRoundedCornerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRoundedCornerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
