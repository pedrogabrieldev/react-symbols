import IconLogoDevFill0Wght100Grad0Opsz48 from '../components/LogoDevFill0Wght100Grad0Opsz48'
import IconLogoDevFill0Wght200Grad0Opsz48 from '../components/LogoDevFill0Wght200Grad0Opsz48'
import IconLogoDevFill0Wght300Grad0Opsz48 from '../components/LogoDevFill0Wght300Grad0Opsz48'
import IconLogoDevFill0Wght400Grad0Opsz48 from '../components/LogoDevFill0Wght400Grad0Opsz48'
import IconLogoDevFill0Wght500Grad0Opsz48 from '../components/LogoDevFill0Wght500Grad0Opsz48'
import IconLogoDevFill0Wght600Grad0Opsz48 from '../components/LogoDevFill0Wght600Grad0Opsz48'
import IconLogoDevFill0Wght700Grad0Opsz48 from '../components/LogoDevFill0Wght700Grad0Opsz48'
import IconLogoDevFill1Wght100Grad0Opsz48 from '../components/LogoDevFill1Wght100Grad0Opsz48'
import IconLogoDevFill1Wght200Grad0Opsz48 from '../components/LogoDevFill1Wght200Grad0Opsz48'
import IconLogoDevFill1Wght300Grad0Opsz48 from '../components/LogoDevFill1Wght300Grad0Opsz48'
import IconLogoDevFill1Wght400Grad0Opsz48 from '../components/LogoDevFill1Wght400Grad0Opsz48'
import IconLogoDevFill1Wght500Grad0Opsz48 from '../components/LogoDevFill1Wght500Grad0Opsz48'
import IconLogoDevFill1Wght600Grad0Opsz48 from '../components/LogoDevFill1Wght600Grad0Opsz48'
import IconLogoDevFill1Wght700Grad0Opsz48 from '../components/LogoDevFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLogoDev = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLogoDevFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLogoDevFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLogoDevFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLogoDevFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLogoDevFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLogoDevFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLogoDevFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLogoDevFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLogoDevFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLogoDevFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLogoDevFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLogoDevFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLogoDevFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLogoDevFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
