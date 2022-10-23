import IconParaglidingFill0Wght100Grad0Opsz48 from '../components/ParaglidingFill0Wght100Grad0Opsz48'
import IconParaglidingFill0Wght200Grad0Opsz48 from '../components/ParaglidingFill0Wght200Grad0Opsz48'
import IconParaglidingFill0Wght300Grad0Opsz48 from '../components/ParaglidingFill0Wght300Grad0Opsz48'
import IconParaglidingFill0Wght400Grad0Opsz48 from '../components/ParaglidingFill0Wght400Grad0Opsz48'
import IconParaglidingFill0Wght500Grad0Opsz48 from '../components/ParaglidingFill0Wght500Grad0Opsz48'
import IconParaglidingFill0Wght600Grad0Opsz48 from '../components/ParaglidingFill0Wght600Grad0Opsz48'
import IconParaglidingFill0Wght700Grad0Opsz48 from '../components/ParaglidingFill0Wght700Grad0Opsz48'
import IconParaglidingFill1Wght100Grad0Opsz48 from '../components/ParaglidingFill1Wght100Grad0Opsz48'
import IconParaglidingFill1Wght200Grad0Opsz48 from '../components/ParaglidingFill1Wght200Grad0Opsz48'
import IconParaglidingFill1Wght300Grad0Opsz48 from '../components/ParaglidingFill1Wght300Grad0Opsz48'
import IconParaglidingFill1Wght400Grad0Opsz48 from '../components/ParaglidingFill1Wght400Grad0Opsz48'
import IconParaglidingFill1Wght500Grad0Opsz48 from '../components/ParaglidingFill1Wght500Grad0Opsz48'
import IconParaglidingFill1Wght600Grad0Opsz48 from '../components/ParaglidingFill1Wght600Grad0Opsz48'
import IconParaglidingFill1Wght700Grad0Opsz48 from '../components/ParaglidingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconParagliding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconParaglidingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconParaglidingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconParaglidingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconParaglidingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconParaglidingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconParaglidingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconParaglidingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconParaglidingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconParaglidingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconParaglidingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconParaglidingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconParaglidingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconParaglidingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconParaglidingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
