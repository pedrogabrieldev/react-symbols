import IconFlashOnFill0Wght100Grad0Opsz48 from '../components/FlashOnFill0Wght100Grad0Opsz48'
import IconFlashOnFill0Wght200Grad0Opsz48 from '../components/FlashOnFill0Wght200Grad0Opsz48'
import IconFlashOnFill0Wght300Grad0Opsz48 from '../components/FlashOnFill0Wght300Grad0Opsz48'
import IconFlashOnFill0Wght400Grad0Opsz48 from '../components/FlashOnFill0Wght400Grad0Opsz48'
import IconFlashOnFill0Wght500Grad0Opsz48 from '../components/FlashOnFill0Wght500Grad0Opsz48'
import IconFlashOnFill0Wght600Grad0Opsz48 from '../components/FlashOnFill0Wght600Grad0Opsz48'
import IconFlashOnFill0Wght700Grad0Opsz48 from '../components/FlashOnFill0Wght700Grad0Opsz48'
import IconFlashOnFill1Wght100Grad0Opsz48 from '../components/FlashOnFill1Wght100Grad0Opsz48'
import IconFlashOnFill1Wght200Grad0Opsz48 from '../components/FlashOnFill1Wght200Grad0Opsz48'
import IconFlashOnFill1Wght300Grad0Opsz48 from '../components/FlashOnFill1Wght300Grad0Opsz48'
import IconFlashOnFill1Wght400Grad0Opsz48 from '../components/FlashOnFill1Wght400Grad0Opsz48'
import IconFlashOnFill1Wght500Grad0Opsz48 from '../components/FlashOnFill1Wght500Grad0Opsz48'
import IconFlashOnFill1Wght600Grad0Opsz48 from '../components/FlashOnFill1Wght600Grad0Opsz48'
import IconFlashOnFill1Wght700Grad0Opsz48 from '../components/FlashOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlashOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlashOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlashOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlashOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlashOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlashOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlashOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlashOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlashOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlashOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlashOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlashOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlashOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlashOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlashOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
