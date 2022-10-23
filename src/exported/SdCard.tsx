import IconSdCardFill0Wght100Grad0Opsz48 from '../components/SdCardFill0Wght100Grad0Opsz48'
import IconSdCardFill0Wght200Grad0Opsz48 from '../components/SdCardFill0Wght200Grad0Opsz48'
import IconSdCardFill0Wght300Grad0Opsz48 from '../components/SdCardFill0Wght300Grad0Opsz48'
import IconSdCardFill0Wght400Grad0Opsz48 from '../components/SdCardFill0Wght400Grad0Opsz48'
import IconSdCardFill0Wght500Grad0Opsz48 from '../components/SdCardFill0Wght500Grad0Opsz48'
import IconSdCardFill0Wght600Grad0Opsz48 from '../components/SdCardFill0Wght600Grad0Opsz48'
import IconSdCardFill0Wght700Grad0Opsz48 from '../components/SdCardFill0Wght700Grad0Opsz48'
import IconSdCardFill1Wght100Grad0Opsz48 from '../components/SdCardFill1Wght100Grad0Opsz48'
import IconSdCardFill1Wght200Grad0Opsz48 from '../components/SdCardFill1Wght200Grad0Opsz48'
import IconSdCardFill1Wght300Grad0Opsz48 from '../components/SdCardFill1Wght300Grad0Opsz48'
import IconSdCardFill1Wght400Grad0Opsz48 from '../components/SdCardFill1Wght400Grad0Opsz48'
import IconSdCardFill1Wght500Grad0Opsz48 from '../components/SdCardFill1Wght500Grad0Opsz48'
import IconSdCardFill1Wght600Grad0Opsz48 from '../components/SdCardFill1Wght600Grad0Opsz48'
import IconSdCardFill1Wght700Grad0Opsz48 from '../components/SdCardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSdCard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSdCardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSdCardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSdCardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSdCardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSdCardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSdCardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSdCardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSdCardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSdCardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSdCardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSdCardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSdCardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSdCardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSdCardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
