import IconWbAutoFill0Wght100Grad0Opsz48 from '../components/WbAutoFill0Wght100Grad0Opsz48'
import IconWbAutoFill0Wght200Grad0Opsz48 from '../components/WbAutoFill0Wght200Grad0Opsz48'
import IconWbAutoFill0Wght300Grad0Opsz48 from '../components/WbAutoFill0Wght300Grad0Opsz48'
import IconWbAutoFill0Wght400Grad0Opsz48 from '../components/WbAutoFill0Wght400Grad0Opsz48'
import IconWbAutoFill0Wght500Grad0Opsz48 from '../components/WbAutoFill0Wght500Grad0Opsz48'
import IconWbAutoFill0Wght600Grad0Opsz48 from '../components/WbAutoFill0Wght600Grad0Opsz48'
import IconWbAutoFill0Wght700Grad0Opsz48 from '../components/WbAutoFill0Wght700Grad0Opsz48'
import IconWbAutoFill1Wght100Grad0Opsz48 from '../components/WbAutoFill1Wght100Grad0Opsz48'
import IconWbAutoFill1Wght200Grad0Opsz48 from '../components/WbAutoFill1Wght200Grad0Opsz48'
import IconWbAutoFill1Wght300Grad0Opsz48 from '../components/WbAutoFill1Wght300Grad0Opsz48'
import IconWbAutoFill1Wght400Grad0Opsz48 from '../components/WbAutoFill1Wght400Grad0Opsz48'
import IconWbAutoFill1Wght500Grad0Opsz48 from '../components/WbAutoFill1Wght500Grad0Opsz48'
import IconWbAutoFill1Wght600Grad0Opsz48 from '../components/WbAutoFill1Wght600Grad0Opsz48'
import IconWbAutoFill1Wght700Grad0Opsz48 from '../components/WbAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWbAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWbAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWbAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWbAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWbAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWbAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWbAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWbAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWbAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWbAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWbAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWbAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWbAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWbAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWbAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
