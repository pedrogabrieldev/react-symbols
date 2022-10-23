import IconShortTextFill0Wght100Grad0Opsz48 from '../components/ShortTextFill0Wght100Grad0Opsz48'
import IconShortTextFill0Wght200Grad0Opsz48 from '../components/ShortTextFill0Wght200Grad0Opsz48'
import IconShortTextFill0Wght300Grad0Opsz48 from '../components/ShortTextFill0Wght300Grad0Opsz48'
import IconShortTextFill0Wght400Grad0Opsz48 from '../components/ShortTextFill0Wght400Grad0Opsz48'
import IconShortTextFill0Wght500Grad0Opsz48 from '../components/ShortTextFill0Wght500Grad0Opsz48'
import IconShortTextFill0Wght600Grad0Opsz48 from '../components/ShortTextFill0Wght600Grad0Opsz48'
import IconShortTextFill0Wght700Grad0Opsz48 from '../components/ShortTextFill0Wght700Grad0Opsz48'
import IconShortTextFill1Wght100Grad0Opsz48 from '../components/ShortTextFill1Wght100Grad0Opsz48'
import IconShortTextFill1Wght200Grad0Opsz48 from '../components/ShortTextFill1Wght200Grad0Opsz48'
import IconShortTextFill1Wght300Grad0Opsz48 from '../components/ShortTextFill1Wght300Grad0Opsz48'
import IconShortTextFill1Wght400Grad0Opsz48 from '../components/ShortTextFill1Wght400Grad0Opsz48'
import IconShortTextFill1Wght500Grad0Opsz48 from '../components/ShortTextFill1Wght500Grad0Opsz48'
import IconShortTextFill1Wght600Grad0Opsz48 from '../components/ShortTextFill1Wght600Grad0Opsz48'
import IconShortTextFill1Wght700Grad0Opsz48 from '../components/ShortTextFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShortText = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShortTextFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShortTextFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShortTextFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShortTextFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShortTextFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShortTextFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShortTextFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShortTextFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShortTextFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShortTextFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShortTextFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShortTextFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShortTextFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShortTextFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
