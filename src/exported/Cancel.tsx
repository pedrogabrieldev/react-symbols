import IconCancelFill0Wght100Grad0Opsz48 from '../components/CancelFill0Wght100Grad0Opsz48'
import IconCancelFill0Wght200Grad0Opsz48 from '../components/CancelFill0Wght200Grad0Opsz48'
import IconCancelFill0Wght300Grad0Opsz48 from '../components/CancelFill0Wght300Grad0Opsz48'
import IconCancelFill0Wght400Grad0Opsz48 from '../components/CancelFill0Wght400Grad0Opsz48'
import IconCancelFill0Wght500Grad0Opsz48 from '../components/CancelFill0Wght500Grad0Opsz48'
import IconCancelFill0Wght600Grad0Opsz48 from '../components/CancelFill0Wght600Grad0Opsz48'
import IconCancelFill0Wght700Grad0Opsz48 from '../components/CancelFill0Wght700Grad0Opsz48'
import IconCancelFill1Wght100Grad0Opsz48 from '../components/CancelFill1Wght100Grad0Opsz48'
import IconCancelFill1Wght200Grad0Opsz48 from '../components/CancelFill1Wght200Grad0Opsz48'
import IconCancelFill1Wght300Grad0Opsz48 from '../components/CancelFill1Wght300Grad0Opsz48'
import IconCancelFill1Wght400Grad0Opsz48 from '../components/CancelFill1Wght400Grad0Opsz48'
import IconCancelFill1Wght500Grad0Opsz48 from '../components/CancelFill1Wght500Grad0Opsz48'
import IconCancelFill1Wght600Grad0Opsz48 from '../components/CancelFill1Wght600Grad0Opsz48'
import IconCancelFill1Wght700Grad0Opsz48 from '../components/CancelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCancel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCancelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCancelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCancelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCancelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCancelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCancelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCancelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCancelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCancelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCancelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCancelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCancelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCancelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCancelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
