import IconMobileScreenShareFill0Wght100Grad0Opsz48 from '../components/MobileScreenShareFill0Wght100Grad0Opsz48'
import IconMobileScreenShareFill0Wght200Grad0Opsz48 from '../components/MobileScreenShareFill0Wght200Grad0Opsz48'
import IconMobileScreenShareFill0Wght300Grad0Opsz48 from '../components/MobileScreenShareFill0Wght300Grad0Opsz48'
import IconMobileScreenShareFill0Wght400Grad0Opsz48 from '../components/MobileScreenShareFill0Wght400Grad0Opsz48'
import IconMobileScreenShareFill0Wght500Grad0Opsz48 from '../components/MobileScreenShareFill0Wght500Grad0Opsz48'
import IconMobileScreenShareFill0Wght600Grad0Opsz48 from '../components/MobileScreenShareFill0Wght600Grad0Opsz48'
import IconMobileScreenShareFill0Wght700Grad0Opsz48 from '../components/MobileScreenShareFill0Wght700Grad0Opsz48'
import IconMobileScreenShareFill1Wght100Grad0Opsz48 from '../components/MobileScreenShareFill1Wght100Grad0Opsz48'
import IconMobileScreenShareFill1Wght200Grad0Opsz48 from '../components/MobileScreenShareFill1Wght200Grad0Opsz48'
import IconMobileScreenShareFill1Wght300Grad0Opsz48 from '../components/MobileScreenShareFill1Wght300Grad0Opsz48'
import IconMobileScreenShareFill1Wght400Grad0Opsz48 from '../components/MobileScreenShareFill1Wght400Grad0Opsz48'
import IconMobileScreenShareFill1Wght500Grad0Opsz48 from '../components/MobileScreenShareFill1Wght500Grad0Opsz48'
import IconMobileScreenShareFill1Wght600Grad0Opsz48 from '../components/MobileScreenShareFill1Wght600Grad0Opsz48'
import IconMobileScreenShareFill1Wght700Grad0Opsz48 from '../components/MobileScreenShareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMobileScreenShare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMobileScreenShareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMobileScreenShareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMobileScreenShareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMobileScreenShareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMobileScreenShareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMobileScreenShareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMobileScreenShareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMobileScreenShareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMobileScreenShareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMobileScreenShareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMobileScreenShareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMobileScreenShareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMobileScreenShareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMobileScreenShareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
