import IconFlashAutoFill0Wght100Grad0Opsz48 from '../components/FlashAutoFill0Wght100Grad0Opsz48'
import IconFlashAutoFill0Wght200Grad0Opsz48 from '../components/FlashAutoFill0Wght200Grad0Opsz48'
import IconFlashAutoFill0Wght300Grad0Opsz48 from '../components/FlashAutoFill0Wght300Grad0Opsz48'
import IconFlashAutoFill0Wght400Grad0Opsz48 from '../components/FlashAutoFill0Wght400Grad0Opsz48'
import IconFlashAutoFill0Wght500Grad0Opsz48 from '../components/FlashAutoFill0Wght500Grad0Opsz48'
import IconFlashAutoFill0Wght600Grad0Opsz48 from '../components/FlashAutoFill0Wght600Grad0Opsz48'
import IconFlashAutoFill0Wght700Grad0Opsz48 from '../components/FlashAutoFill0Wght700Grad0Opsz48'
import IconFlashAutoFill1Wght100Grad0Opsz48 from '../components/FlashAutoFill1Wght100Grad0Opsz48'
import IconFlashAutoFill1Wght200Grad0Opsz48 from '../components/FlashAutoFill1Wght200Grad0Opsz48'
import IconFlashAutoFill1Wght300Grad0Opsz48 from '../components/FlashAutoFill1Wght300Grad0Opsz48'
import IconFlashAutoFill1Wght400Grad0Opsz48 from '../components/FlashAutoFill1Wght400Grad0Opsz48'
import IconFlashAutoFill1Wght500Grad0Opsz48 from '../components/FlashAutoFill1Wght500Grad0Opsz48'
import IconFlashAutoFill1Wght600Grad0Opsz48 from '../components/FlashAutoFill1Wght600Grad0Opsz48'
import IconFlashAutoFill1Wght700Grad0Opsz48 from '../components/FlashAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlashAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlashAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlashAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlashAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlashAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlashAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlashAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlashAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlashAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlashAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlashAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlashAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlashAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlashAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlashAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
