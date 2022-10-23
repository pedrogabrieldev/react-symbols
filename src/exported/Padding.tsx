import IconPaddingFill0Wght100Grad0Opsz48 from '../components/PaddingFill0Wght100Grad0Opsz48'
import IconPaddingFill0Wght200Grad0Opsz48 from '../components/PaddingFill0Wght200Grad0Opsz48'
import IconPaddingFill0Wght300Grad0Opsz48 from '../components/PaddingFill0Wght300Grad0Opsz48'
import IconPaddingFill0Wght400Grad0Opsz48 from '../components/PaddingFill0Wght400Grad0Opsz48'
import IconPaddingFill0Wght500Grad0Opsz48 from '../components/PaddingFill0Wght500Grad0Opsz48'
import IconPaddingFill0Wght600Grad0Opsz48 from '../components/PaddingFill0Wght600Grad0Opsz48'
import IconPaddingFill0Wght700Grad0Opsz48 from '../components/PaddingFill0Wght700Grad0Opsz48'
import IconPaddingFill1Wght100Grad0Opsz48 from '../components/PaddingFill1Wght100Grad0Opsz48'
import IconPaddingFill1Wght200Grad0Opsz48 from '../components/PaddingFill1Wght200Grad0Opsz48'
import IconPaddingFill1Wght300Grad0Opsz48 from '../components/PaddingFill1Wght300Grad0Opsz48'
import IconPaddingFill1Wght400Grad0Opsz48 from '../components/PaddingFill1Wght400Grad0Opsz48'
import IconPaddingFill1Wght500Grad0Opsz48 from '../components/PaddingFill1Wght500Grad0Opsz48'
import IconPaddingFill1Wght600Grad0Opsz48 from '../components/PaddingFill1Wght600Grad0Opsz48'
import IconPaddingFill1Wght700Grad0Opsz48 from '../components/PaddingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPadding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPaddingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPaddingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPaddingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPaddingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPaddingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPaddingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPaddingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPaddingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPaddingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPaddingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPaddingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPaddingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPaddingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPaddingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
