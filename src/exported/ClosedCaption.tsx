import IconClosedCaptionFill0Wght100Grad0Opsz48 from '../components/ClosedCaptionFill0Wght100Grad0Opsz48'
import IconClosedCaptionFill0Wght200Grad0Opsz48 from '../components/ClosedCaptionFill0Wght200Grad0Opsz48'
import IconClosedCaptionFill0Wght300Grad0Opsz48 from '../components/ClosedCaptionFill0Wght300Grad0Opsz48'
import IconClosedCaptionFill0Wght400Grad0Opsz48 from '../components/ClosedCaptionFill0Wght400Grad0Opsz48'
import IconClosedCaptionFill0Wght500Grad0Opsz48 from '../components/ClosedCaptionFill0Wght500Grad0Opsz48'
import IconClosedCaptionFill0Wght600Grad0Opsz48 from '../components/ClosedCaptionFill0Wght600Grad0Opsz48'
import IconClosedCaptionFill0Wght700Grad0Opsz48 from '../components/ClosedCaptionFill0Wght700Grad0Opsz48'
import IconClosedCaptionFill1Wght100Grad0Opsz48 from '../components/ClosedCaptionFill1Wght100Grad0Opsz48'
import IconClosedCaptionFill1Wght200Grad0Opsz48 from '../components/ClosedCaptionFill1Wght200Grad0Opsz48'
import IconClosedCaptionFill1Wght300Grad0Opsz48 from '../components/ClosedCaptionFill1Wght300Grad0Opsz48'
import IconClosedCaptionFill1Wght400Grad0Opsz48 from '../components/ClosedCaptionFill1Wght400Grad0Opsz48'
import IconClosedCaptionFill1Wght500Grad0Opsz48 from '../components/ClosedCaptionFill1Wght500Grad0Opsz48'
import IconClosedCaptionFill1Wght600Grad0Opsz48 from '../components/ClosedCaptionFill1Wght600Grad0Opsz48'
import IconClosedCaptionFill1Wght700Grad0Opsz48 from '../components/ClosedCaptionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconClosedCaption = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconClosedCaptionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconClosedCaptionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconClosedCaptionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconClosedCaptionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconClosedCaptionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconClosedCaptionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconClosedCaptionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconClosedCaptionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconClosedCaptionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconClosedCaptionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconClosedCaptionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconClosedCaptionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconClosedCaptionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconClosedCaptionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
