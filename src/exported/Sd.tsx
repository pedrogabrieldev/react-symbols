import IconSdFill0Wght100Grad0Opsz48 from '../components/SdFill0Wght100Grad0Opsz48'
import IconSdFill0Wght200Grad0Opsz48 from '../components/SdFill0Wght200Grad0Opsz48'
import IconSdFill0Wght300Grad0Opsz48 from '../components/SdFill0Wght300Grad0Opsz48'
import IconSdFill0Wght400Grad0Opsz48 from '../components/SdFill0Wght400Grad0Opsz48'
import IconSdFill0Wght500Grad0Opsz48 from '../components/SdFill0Wght500Grad0Opsz48'
import IconSdFill0Wght600Grad0Opsz48 from '../components/SdFill0Wght600Grad0Opsz48'
import IconSdFill0Wght700Grad0Opsz48 from '../components/SdFill0Wght700Grad0Opsz48'
import IconSdFill1Wght100Grad0Opsz48 from '../components/SdFill1Wght100Grad0Opsz48'
import IconSdFill1Wght200Grad0Opsz48 from '../components/SdFill1Wght200Grad0Opsz48'
import IconSdFill1Wght300Grad0Opsz48 from '../components/SdFill1Wght300Grad0Opsz48'
import IconSdFill1Wght400Grad0Opsz48 from '../components/SdFill1Wght400Grad0Opsz48'
import IconSdFill1Wght500Grad0Opsz48 from '../components/SdFill1Wght500Grad0Opsz48'
import IconSdFill1Wght600Grad0Opsz48 from '../components/SdFill1Wght600Grad0Opsz48'
import IconSdFill1Wght700Grad0Opsz48 from '../components/SdFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSdFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSdFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSdFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSdFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSdFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSdFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSdFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSdFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSdFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSdFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSdFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSdFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSdFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSdFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
