import IconTextFormatFill0Wght100Grad0Opsz48 from '../components/TextFormatFill0Wght100Grad0Opsz48'
import IconTextFormatFill0Wght200Grad0Opsz48 from '../components/TextFormatFill0Wght200Grad0Opsz48'
import IconTextFormatFill0Wght300Grad0Opsz48 from '../components/TextFormatFill0Wght300Grad0Opsz48'
import IconTextFormatFill0Wght400Grad0Opsz48 from '../components/TextFormatFill0Wght400Grad0Opsz48'
import IconTextFormatFill0Wght500Grad0Opsz48 from '../components/TextFormatFill0Wght500Grad0Opsz48'
import IconTextFormatFill0Wght600Grad0Opsz48 from '../components/TextFormatFill0Wght600Grad0Opsz48'
import IconTextFormatFill0Wght700Grad0Opsz48 from '../components/TextFormatFill0Wght700Grad0Opsz48'
import IconTextFormatFill1Wght100Grad0Opsz48 from '../components/TextFormatFill1Wght100Grad0Opsz48'
import IconTextFormatFill1Wght200Grad0Opsz48 from '../components/TextFormatFill1Wght200Grad0Opsz48'
import IconTextFormatFill1Wght300Grad0Opsz48 from '../components/TextFormatFill1Wght300Grad0Opsz48'
import IconTextFormatFill1Wght400Grad0Opsz48 from '../components/TextFormatFill1Wght400Grad0Opsz48'
import IconTextFormatFill1Wght500Grad0Opsz48 from '../components/TextFormatFill1Wght500Grad0Opsz48'
import IconTextFormatFill1Wght600Grad0Opsz48 from '../components/TextFormatFill1Wght600Grad0Opsz48'
import IconTextFormatFill1Wght700Grad0Opsz48 from '../components/TextFormatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextFormat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextFormatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextFormatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextFormatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextFormatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextFormatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextFormatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextFormatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextFormatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextFormatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextFormatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextFormatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextFormatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextFormatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextFormatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
