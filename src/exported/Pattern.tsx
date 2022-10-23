import IconPatternFill0Wght100Grad0Opsz48 from '../components/PatternFill0Wght100Grad0Opsz48'
import IconPatternFill0Wght200Grad0Opsz48 from '../components/PatternFill0Wght200Grad0Opsz48'
import IconPatternFill0Wght300Grad0Opsz48 from '../components/PatternFill0Wght300Grad0Opsz48'
import IconPatternFill0Wght400Grad0Opsz48 from '../components/PatternFill0Wght400Grad0Opsz48'
import IconPatternFill0Wght500Grad0Opsz48 from '../components/PatternFill0Wght500Grad0Opsz48'
import IconPatternFill0Wght600Grad0Opsz48 from '../components/PatternFill0Wght600Grad0Opsz48'
import IconPatternFill0Wght700Grad0Opsz48 from '../components/PatternFill0Wght700Grad0Opsz48'
import IconPatternFill1Wght100Grad0Opsz48 from '../components/PatternFill1Wght100Grad0Opsz48'
import IconPatternFill1Wght200Grad0Opsz48 from '../components/PatternFill1Wght200Grad0Opsz48'
import IconPatternFill1Wght300Grad0Opsz48 from '../components/PatternFill1Wght300Grad0Opsz48'
import IconPatternFill1Wght400Grad0Opsz48 from '../components/PatternFill1Wght400Grad0Opsz48'
import IconPatternFill1Wght500Grad0Opsz48 from '../components/PatternFill1Wght500Grad0Opsz48'
import IconPatternFill1Wght600Grad0Opsz48 from '../components/PatternFill1Wght600Grad0Opsz48'
import IconPatternFill1Wght700Grad0Opsz48 from '../components/PatternFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPattern = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPatternFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPatternFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPatternFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPatternFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPatternFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPatternFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPatternFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPatternFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPatternFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPatternFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPatternFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPatternFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPatternFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPatternFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
