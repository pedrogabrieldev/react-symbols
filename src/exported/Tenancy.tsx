import IconTenancyFill0Wght100Grad0Opsz48 from '../components/TenancyFill0Wght100Grad0Opsz48'
import IconTenancyFill0Wght200Grad0Opsz48 from '../components/TenancyFill0Wght200Grad0Opsz48'
import IconTenancyFill0Wght300Grad0Opsz48 from '../components/TenancyFill0Wght300Grad0Opsz48'
import IconTenancyFill0Wght400Grad0Opsz48 from '../components/TenancyFill0Wght400Grad0Opsz48'
import IconTenancyFill0Wght500Grad0Opsz48 from '../components/TenancyFill0Wght500Grad0Opsz48'
import IconTenancyFill0Wght600Grad0Opsz48 from '../components/TenancyFill0Wght600Grad0Opsz48'
import IconTenancyFill0Wght700Grad0Opsz48 from '../components/TenancyFill0Wght700Grad0Opsz48'
import IconTenancyFill1Wght100Grad0Opsz48 from '../components/TenancyFill1Wght100Grad0Opsz48'
import IconTenancyFill1Wght200Grad0Opsz48 from '../components/TenancyFill1Wght200Grad0Opsz48'
import IconTenancyFill1Wght300Grad0Opsz48 from '../components/TenancyFill1Wght300Grad0Opsz48'
import IconTenancyFill1Wght400Grad0Opsz48 from '../components/TenancyFill1Wght400Grad0Opsz48'
import IconTenancyFill1Wght500Grad0Opsz48 from '../components/TenancyFill1Wght500Grad0Opsz48'
import IconTenancyFill1Wght600Grad0Opsz48 from '../components/TenancyFill1Wght600Grad0Opsz48'
import IconTenancyFill1Wght700Grad0Opsz48 from '../components/TenancyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTenancy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTenancyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTenancyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTenancyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTenancyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTenancyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTenancyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTenancyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTenancyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTenancyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTenancyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTenancyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTenancyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTenancyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTenancyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
