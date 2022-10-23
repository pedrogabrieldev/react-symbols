import IconDinnerDiningFill0Wght100Grad0Opsz48 from '../components/DinnerDiningFill0Wght100Grad0Opsz48'
import IconDinnerDiningFill0Wght200Grad0Opsz48 from '../components/DinnerDiningFill0Wght200Grad0Opsz48'
import IconDinnerDiningFill0Wght300Grad0Opsz48 from '../components/DinnerDiningFill0Wght300Grad0Opsz48'
import IconDinnerDiningFill0Wght400Grad0Opsz48 from '../components/DinnerDiningFill0Wght400Grad0Opsz48'
import IconDinnerDiningFill0Wght500Grad0Opsz48 from '../components/DinnerDiningFill0Wght500Grad0Opsz48'
import IconDinnerDiningFill0Wght600Grad0Opsz48 from '../components/DinnerDiningFill0Wght600Grad0Opsz48'
import IconDinnerDiningFill0Wght700Grad0Opsz48 from '../components/DinnerDiningFill0Wght700Grad0Opsz48'
import IconDinnerDiningFill1Wght100Grad0Opsz48 from '../components/DinnerDiningFill1Wght100Grad0Opsz48'
import IconDinnerDiningFill1Wght200Grad0Opsz48 from '../components/DinnerDiningFill1Wght200Grad0Opsz48'
import IconDinnerDiningFill1Wght300Grad0Opsz48 from '../components/DinnerDiningFill1Wght300Grad0Opsz48'
import IconDinnerDiningFill1Wght400Grad0Opsz48 from '../components/DinnerDiningFill1Wght400Grad0Opsz48'
import IconDinnerDiningFill1Wght500Grad0Opsz48 from '../components/DinnerDiningFill1Wght500Grad0Opsz48'
import IconDinnerDiningFill1Wght600Grad0Opsz48 from '../components/DinnerDiningFill1Wght600Grad0Opsz48'
import IconDinnerDiningFill1Wght700Grad0Opsz48 from '../components/DinnerDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDinnerDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDinnerDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDinnerDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDinnerDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDinnerDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDinnerDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDinnerDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDinnerDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDinnerDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDinnerDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDinnerDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDinnerDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDinnerDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDinnerDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDinnerDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
