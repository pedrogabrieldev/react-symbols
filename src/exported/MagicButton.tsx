import IconMagicButtonFill0Wght100Grad0Opsz48 from '../components/MagicButtonFill0Wght100Grad0Opsz48'
import IconMagicButtonFill0Wght200Grad0Opsz48 from '../components/MagicButtonFill0Wght200Grad0Opsz48'
import IconMagicButtonFill0Wght300Grad0Opsz48 from '../components/MagicButtonFill0Wght300Grad0Opsz48'
import IconMagicButtonFill0Wght400Grad0Opsz48 from '../components/MagicButtonFill0Wght400Grad0Opsz48'
import IconMagicButtonFill0Wght500Grad0Opsz48 from '../components/MagicButtonFill0Wght500Grad0Opsz48'
import IconMagicButtonFill0Wght600Grad0Opsz48 from '../components/MagicButtonFill0Wght600Grad0Opsz48'
import IconMagicButtonFill0Wght700Grad0Opsz48 from '../components/MagicButtonFill0Wght700Grad0Opsz48'
import IconMagicButtonFill1Wght100Grad0Opsz48 from '../components/MagicButtonFill1Wght100Grad0Opsz48'
import IconMagicButtonFill1Wght200Grad0Opsz48 from '../components/MagicButtonFill1Wght200Grad0Opsz48'
import IconMagicButtonFill1Wght300Grad0Opsz48 from '../components/MagicButtonFill1Wght300Grad0Opsz48'
import IconMagicButtonFill1Wght400Grad0Opsz48 from '../components/MagicButtonFill1Wght400Grad0Opsz48'
import IconMagicButtonFill1Wght500Grad0Opsz48 from '../components/MagicButtonFill1Wght500Grad0Opsz48'
import IconMagicButtonFill1Wght600Grad0Opsz48 from '../components/MagicButtonFill1Wght600Grad0Opsz48'
import IconMagicButtonFill1Wght700Grad0Opsz48 from '../components/MagicButtonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMagicButton = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMagicButtonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMagicButtonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMagicButtonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMagicButtonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMagicButtonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMagicButtonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMagicButtonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMagicButtonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMagicButtonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMagicButtonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMagicButtonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMagicButtonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMagicButtonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMagicButtonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
