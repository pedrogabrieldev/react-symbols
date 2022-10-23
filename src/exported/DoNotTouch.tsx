import IconDoNotTouchFill0Wght100Grad0Opsz48 from '../components/DoNotTouchFill0Wght100Grad0Opsz48'
import IconDoNotTouchFill0Wght200Grad0Opsz48 from '../components/DoNotTouchFill0Wght200Grad0Opsz48'
import IconDoNotTouchFill0Wght300Grad0Opsz48 from '../components/DoNotTouchFill0Wght300Grad0Opsz48'
import IconDoNotTouchFill0Wght400Grad0Opsz48 from '../components/DoNotTouchFill0Wght400Grad0Opsz48'
import IconDoNotTouchFill0Wght500Grad0Opsz48 from '../components/DoNotTouchFill0Wght500Grad0Opsz48'
import IconDoNotTouchFill0Wght600Grad0Opsz48 from '../components/DoNotTouchFill0Wght600Grad0Opsz48'
import IconDoNotTouchFill0Wght700Grad0Opsz48 from '../components/DoNotTouchFill0Wght700Grad0Opsz48'
import IconDoNotTouchFill1Wght100Grad0Opsz48 from '../components/DoNotTouchFill1Wght100Grad0Opsz48'
import IconDoNotTouchFill1Wght200Grad0Opsz48 from '../components/DoNotTouchFill1Wght200Grad0Opsz48'
import IconDoNotTouchFill1Wght300Grad0Opsz48 from '../components/DoNotTouchFill1Wght300Grad0Opsz48'
import IconDoNotTouchFill1Wght400Grad0Opsz48 from '../components/DoNotTouchFill1Wght400Grad0Opsz48'
import IconDoNotTouchFill1Wght500Grad0Opsz48 from '../components/DoNotTouchFill1Wght500Grad0Opsz48'
import IconDoNotTouchFill1Wght600Grad0Opsz48 from '../components/DoNotTouchFill1Wght600Grad0Opsz48'
import IconDoNotTouchFill1Wght700Grad0Opsz48 from '../components/DoNotTouchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoNotTouch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoNotTouchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoNotTouchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoNotTouchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoNotTouchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoNotTouchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoNotTouchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoNotTouchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoNotTouchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoNotTouchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoNotTouchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoNotTouchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoNotTouchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoNotTouchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoNotTouchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
