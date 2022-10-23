import IconBreakfastDiningFill0Wght100Grad0Opsz48 from '../components/BreakfastDiningFill0Wght100Grad0Opsz48'
import IconBreakfastDiningFill0Wght200Grad0Opsz48 from '../components/BreakfastDiningFill0Wght200Grad0Opsz48'
import IconBreakfastDiningFill0Wght300Grad0Opsz48 from '../components/BreakfastDiningFill0Wght300Grad0Opsz48'
import IconBreakfastDiningFill0Wght400Grad0Opsz48 from '../components/BreakfastDiningFill0Wght400Grad0Opsz48'
import IconBreakfastDiningFill0Wght500Grad0Opsz48 from '../components/BreakfastDiningFill0Wght500Grad0Opsz48'
import IconBreakfastDiningFill0Wght600Grad0Opsz48 from '../components/BreakfastDiningFill0Wght600Grad0Opsz48'
import IconBreakfastDiningFill0Wght700Grad0Opsz48 from '../components/BreakfastDiningFill0Wght700Grad0Opsz48'
import IconBreakfastDiningFill1Wght100Grad0Opsz48 from '../components/BreakfastDiningFill1Wght100Grad0Opsz48'
import IconBreakfastDiningFill1Wght200Grad0Opsz48 from '../components/BreakfastDiningFill1Wght200Grad0Opsz48'
import IconBreakfastDiningFill1Wght300Grad0Opsz48 from '../components/BreakfastDiningFill1Wght300Grad0Opsz48'
import IconBreakfastDiningFill1Wght400Grad0Opsz48 from '../components/BreakfastDiningFill1Wght400Grad0Opsz48'
import IconBreakfastDiningFill1Wght500Grad0Opsz48 from '../components/BreakfastDiningFill1Wght500Grad0Opsz48'
import IconBreakfastDiningFill1Wght600Grad0Opsz48 from '../components/BreakfastDiningFill1Wght600Grad0Opsz48'
import IconBreakfastDiningFill1Wght700Grad0Opsz48 from '../components/BreakfastDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBreakfastDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBreakfastDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBreakfastDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBreakfastDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBreakfastDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBreakfastDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBreakfastDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBreakfastDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBreakfastDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBreakfastDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBreakfastDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBreakfastDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBreakfastDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBreakfastDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBreakfastDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
