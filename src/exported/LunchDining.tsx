import IconLunchDiningFill0Wght100Grad0Opsz48 from '../components/LunchDiningFill0Wght100Grad0Opsz48'
import IconLunchDiningFill0Wght200Grad0Opsz48 from '../components/LunchDiningFill0Wght200Grad0Opsz48'
import IconLunchDiningFill0Wght300Grad0Opsz48 from '../components/LunchDiningFill0Wght300Grad0Opsz48'
import IconLunchDiningFill0Wght400Grad0Opsz48 from '../components/LunchDiningFill0Wght400Grad0Opsz48'
import IconLunchDiningFill0Wght500Grad0Opsz48 from '../components/LunchDiningFill0Wght500Grad0Opsz48'
import IconLunchDiningFill0Wght600Grad0Opsz48 from '../components/LunchDiningFill0Wght600Grad0Opsz48'
import IconLunchDiningFill0Wght700Grad0Opsz48 from '../components/LunchDiningFill0Wght700Grad0Opsz48'
import IconLunchDiningFill1Wght100Grad0Opsz48 from '../components/LunchDiningFill1Wght100Grad0Opsz48'
import IconLunchDiningFill1Wght200Grad0Opsz48 from '../components/LunchDiningFill1Wght200Grad0Opsz48'
import IconLunchDiningFill1Wght300Grad0Opsz48 from '../components/LunchDiningFill1Wght300Grad0Opsz48'
import IconLunchDiningFill1Wght400Grad0Opsz48 from '../components/LunchDiningFill1Wght400Grad0Opsz48'
import IconLunchDiningFill1Wght500Grad0Opsz48 from '../components/LunchDiningFill1Wght500Grad0Opsz48'
import IconLunchDiningFill1Wght600Grad0Opsz48 from '../components/LunchDiningFill1Wght600Grad0Opsz48'
import IconLunchDiningFill1Wght700Grad0Opsz48 from '../components/LunchDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLunchDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLunchDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLunchDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLunchDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLunchDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLunchDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLunchDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLunchDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLunchDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLunchDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLunchDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLunchDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLunchDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLunchDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLunchDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
