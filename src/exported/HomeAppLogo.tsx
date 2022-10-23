import IconHomeAppLogoFill0Wght100Grad0Opsz48 from '../components/HomeAppLogoFill0Wght100Grad0Opsz48'
import IconHomeAppLogoFill0Wght200Grad0Opsz48 from '../components/HomeAppLogoFill0Wght200Grad0Opsz48'
import IconHomeAppLogoFill0Wght300Grad0Opsz48 from '../components/HomeAppLogoFill0Wght300Grad0Opsz48'
import IconHomeAppLogoFill0Wght400Grad0Opsz48 from '../components/HomeAppLogoFill0Wght400Grad0Opsz48'
import IconHomeAppLogoFill0Wght500Grad0Opsz48 from '../components/HomeAppLogoFill0Wght500Grad0Opsz48'
import IconHomeAppLogoFill0Wght600Grad0Opsz48 from '../components/HomeAppLogoFill0Wght600Grad0Opsz48'
import IconHomeAppLogoFill0Wght700Grad0Opsz48 from '../components/HomeAppLogoFill0Wght700Grad0Opsz48'
import IconHomeAppLogoFill1Wght100Grad0Opsz48 from '../components/HomeAppLogoFill1Wght100Grad0Opsz48'
import IconHomeAppLogoFill1Wght200Grad0Opsz48 from '../components/HomeAppLogoFill1Wght200Grad0Opsz48'
import IconHomeAppLogoFill1Wght300Grad0Opsz48 from '../components/HomeAppLogoFill1Wght300Grad0Opsz48'
import IconHomeAppLogoFill1Wght400Grad0Opsz48 from '../components/HomeAppLogoFill1Wght400Grad0Opsz48'
import IconHomeAppLogoFill1Wght500Grad0Opsz48 from '../components/HomeAppLogoFill1Wght500Grad0Opsz48'
import IconHomeAppLogoFill1Wght600Grad0Opsz48 from '../components/HomeAppLogoFill1Wght600Grad0Opsz48'
import IconHomeAppLogoFill1Wght700Grad0Opsz48 from '../components/HomeAppLogoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeAppLogo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeAppLogoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeAppLogoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeAppLogoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeAppLogoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeAppLogoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeAppLogoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeAppLogoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeAppLogoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeAppLogoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeAppLogoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeAppLogoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeAppLogoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeAppLogoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeAppLogoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
