import IconCancelPresentationFill0Wght100Grad0Opsz48 from '../components/CancelPresentationFill0Wght100Grad0Opsz48'
import IconCancelPresentationFill0Wght200Grad0Opsz48 from '../components/CancelPresentationFill0Wght200Grad0Opsz48'
import IconCancelPresentationFill0Wght300Grad0Opsz48 from '../components/CancelPresentationFill0Wght300Grad0Opsz48'
import IconCancelPresentationFill0Wght400Grad0Opsz48 from '../components/CancelPresentationFill0Wght400Grad0Opsz48'
import IconCancelPresentationFill0Wght500Grad0Opsz48 from '../components/CancelPresentationFill0Wght500Grad0Opsz48'
import IconCancelPresentationFill0Wght600Grad0Opsz48 from '../components/CancelPresentationFill0Wght600Grad0Opsz48'
import IconCancelPresentationFill0Wght700Grad0Opsz48 from '../components/CancelPresentationFill0Wght700Grad0Opsz48'
import IconCancelPresentationFill1Wght100Grad0Opsz48 from '../components/CancelPresentationFill1Wght100Grad0Opsz48'
import IconCancelPresentationFill1Wght200Grad0Opsz48 from '../components/CancelPresentationFill1Wght200Grad0Opsz48'
import IconCancelPresentationFill1Wght300Grad0Opsz48 from '../components/CancelPresentationFill1Wght300Grad0Opsz48'
import IconCancelPresentationFill1Wght400Grad0Opsz48 from '../components/CancelPresentationFill1Wght400Grad0Opsz48'
import IconCancelPresentationFill1Wght500Grad0Opsz48 from '../components/CancelPresentationFill1Wght500Grad0Opsz48'
import IconCancelPresentationFill1Wght600Grad0Opsz48 from '../components/CancelPresentationFill1Wght600Grad0Opsz48'
import IconCancelPresentationFill1Wght700Grad0Opsz48 from '../components/CancelPresentationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCancelPresentation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCancelPresentationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCancelPresentationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCancelPresentationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCancelPresentationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCancelPresentationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCancelPresentationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCancelPresentationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCancelPresentationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCancelPresentationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCancelPresentationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCancelPresentationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCancelPresentationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCancelPresentationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCancelPresentationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
