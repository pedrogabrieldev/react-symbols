import IconBusinessCenterFill0Wght100Grad0Opsz48 from '../components/BusinessCenterFill0Wght100Grad0Opsz48'
import IconBusinessCenterFill0Wght200Grad0Opsz48 from '../components/BusinessCenterFill0Wght200Grad0Opsz48'
import IconBusinessCenterFill0Wght300Grad0Opsz48 from '../components/BusinessCenterFill0Wght300Grad0Opsz48'
import IconBusinessCenterFill0Wght400Grad0Opsz48 from '../components/BusinessCenterFill0Wght400Grad0Opsz48'
import IconBusinessCenterFill0Wght500Grad0Opsz48 from '../components/BusinessCenterFill0Wght500Grad0Opsz48'
import IconBusinessCenterFill0Wght600Grad0Opsz48 from '../components/BusinessCenterFill0Wght600Grad0Opsz48'
import IconBusinessCenterFill0Wght700Grad0Opsz48 from '../components/BusinessCenterFill0Wght700Grad0Opsz48'
import IconBusinessCenterFill1Wght100Grad0Opsz48 from '../components/BusinessCenterFill1Wght100Grad0Opsz48'
import IconBusinessCenterFill1Wght200Grad0Opsz48 from '../components/BusinessCenterFill1Wght200Grad0Opsz48'
import IconBusinessCenterFill1Wght300Grad0Opsz48 from '../components/BusinessCenterFill1Wght300Grad0Opsz48'
import IconBusinessCenterFill1Wght400Grad0Opsz48 from '../components/BusinessCenterFill1Wght400Grad0Opsz48'
import IconBusinessCenterFill1Wght500Grad0Opsz48 from '../components/BusinessCenterFill1Wght500Grad0Opsz48'
import IconBusinessCenterFill1Wght600Grad0Opsz48 from '../components/BusinessCenterFill1Wght600Grad0Opsz48'
import IconBusinessCenterFill1Wght700Grad0Opsz48 from '../components/BusinessCenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBusinessCenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBusinessCenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBusinessCenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBusinessCenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBusinessCenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBusinessCenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBusinessCenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBusinessCenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBusinessCenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBusinessCenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBusinessCenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBusinessCenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBusinessCenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBusinessCenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBusinessCenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
