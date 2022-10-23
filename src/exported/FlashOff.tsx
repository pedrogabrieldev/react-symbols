import IconFlashOffFill0Wght100Grad0Opsz48 from '../components/FlashOffFill0Wght100Grad0Opsz48'
import IconFlashOffFill0Wght200Grad0Opsz48 from '../components/FlashOffFill0Wght200Grad0Opsz48'
import IconFlashOffFill0Wght300Grad0Opsz48 from '../components/FlashOffFill0Wght300Grad0Opsz48'
import IconFlashOffFill0Wght400Grad0Opsz48 from '../components/FlashOffFill0Wght400Grad0Opsz48'
import IconFlashOffFill0Wght500Grad0Opsz48 from '../components/FlashOffFill0Wght500Grad0Opsz48'
import IconFlashOffFill0Wght600Grad0Opsz48 from '../components/FlashOffFill0Wght600Grad0Opsz48'
import IconFlashOffFill0Wght700Grad0Opsz48 from '../components/FlashOffFill0Wght700Grad0Opsz48'
import IconFlashOffFill1Wght100Grad0Opsz48 from '../components/FlashOffFill1Wght100Grad0Opsz48'
import IconFlashOffFill1Wght200Grad0Opsz48 from '../components/FlashOffFill1Wght200Grad0Opsz48'
import IconFlashOffFill1Wght300Grad0Opsz48 from '../components/FlashOffFill1Wght300Grad0Opsz48'
import IconFlashOffFill1Wght400Grad0Opsz48 from '../components/FlashOffFill1Wght400Grad0Opsz48'
import IconFlashOffFill1Wght500Grad0Opsz48 from '../components/FlashOffFill1Wght500Grad0Opsz48'
import IconFlashOffFill1Wght600Grad0Opsz48 from '../components/FlashOffFill1Wght600Grad0Opsz48'
import IconFlashOffFill1Wght700Grad0Opsz48 from '../components/FlashOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlashOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlashOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlashOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlashOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlashOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlashOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlashOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlashOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlashOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlashOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlashOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlashOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlashOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlashOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlashOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
