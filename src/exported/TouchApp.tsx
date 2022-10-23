import IconTouchAppFill0Wght100Grad0Opsz48 from '../components/TouchAppFill0Wght100Grad0Opsz48'
import IconTouchAppFill0Wght200Grad0Opsz48 from '../components/TouchAppFill0Wght200Grad0Opsz48'
import IconTouchAppFill0Wght300Grad0Opsz48 from '../components/TouchAppFill0Wght300Grad0Opsz48'
import IconTouchAppFill0Wght400Grad0Opsz48 from '../components/TouchAppFill0Wght400Grad0Opsz48'
import IconTouchAppFill0Wght500Grad0Opsz48 from '../components/TouchAppFill0Wght500Grad0Opsz48'
import IconTouchAppFill0Wght600Grad0Opsz48 from '../components/TouchAppFill0Wght600Grad0Opsz48'
import IconTouchAppFill0Wght700Grad0Opsz48 from '../components/TouchAppFill0Wght700Grad0Opsz48'
import IconTouchAppFill1Wght100Grad0Opsz48 from '../components/TouchAppFill1Wght100Grad0Opsz48'
import IconTouchAppFill1Wght200Grad0Opsz48 from '../components/TouchAppFill1Wght200Grad0Opsz48'
import IconTouchAppFill1Wght300Grad0Opsz48 from '../components/TouchAppFill1Wght300Grad0Opsz48'
import IconTouchAppFill1Wght400Grad0Opsz48 from '../components/TouchAppFill1Wght400Grad0Opsz48'
import IconTouchAppFill1Wght500Grad0Opsz48 from '../components/TouchAppFill1Wght500Grad0Opsz48'
import IconTouchAppFill1Wght600Grad0Opsz48 from '../components/TouchAppFill1Wght600Grad0Opsz48'
import IconTouchAppFill1Wght700Grad0Opsz48 from '../components/TouchAppFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTouchApp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTouchAppFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTouchAppFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTouchAppFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTouchAppFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTouchAppFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTouchAppFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTouchAppFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTouchAppFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTouchAppFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTouchAppFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTouchAppFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTouchAppFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTouchAppFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTouchAppFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
