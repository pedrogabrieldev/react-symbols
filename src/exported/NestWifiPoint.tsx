import IconNestWifiPointFill0Wght100Grad0Opsz48 from '../components/NestWifiPointFill0Wght100Grad0Opsz48'
import IconNestWifiPointFill0Wght200Grad0Opsz48 from '../components/NestWifiPointFill0Wght200Grad0Opsz48'
import IconNestWifiPointFill0Wght300Grad0Opsz48 from '../components/NestWifiPointFill0Wght300Grad0Opsz48'
import IconNestWifiPointFill0Wght400Grad0Opsz48 from '../components/NestWifiPointFill0Wght400Grad0Opsz48'
import IconNestWifiPointFill0Wght500Grad0Opsz48 from '../components/NestWifiPointFill0Wght500Grad0Opsz48'
import IconNestWifiPointFill0Wght600Grad0Opsz48 from '../components/NestWifiPointFill0Wght600Grad0Opsz48'
import IconNestWifiPointFill0Wght700Grad0Opsz48 from '../components/NestWifiPointFill0Wght700Grad0Opsz48'
import IconNestWifiPointFill1Wght100Grad0Opsz48 from '../components/NestWifiPointFill1Wght100Grad0Opsz48'
import IconNestWifiPointFill1Wght200Grad0Opsz48 from '../components/NestWifiPointFill1Wght200Grad0Opsz48'
import IconNestWifiPointFill1Wght300Grad0Opsz48 from '../components/NestWifiPointFill1Wght300Grad0Opsz48'
import IconNestWifiPointFill1Wght400Grad0Opsz48 from '../components/NestWifiPointFill1Wght400Grad0Opsz48'
import IconNestWifiPointFill1Wght500Grad0Opsz48 from '../components/NestWifiPointFill1Wght500Grad0Opsz48'
import IconNestWifiPointFill1Wght600Grad0Opsz48 from '../components/NestWifiPointFill1Wght600Grad0Opsz48'
import IconNestWifiPointFill1Wght700Grad0Opsz48 from '../components/NestWifiPointFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestWifiPoint = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestWifiPointFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestWifiPointFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestWifiPointFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestWifiPointFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestWifiPointFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestWifiPointFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestWifiPointFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestWifiPointFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestWifiPointFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestWifiPointFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestWifiPointFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestWifiPointFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestWifiPointFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestWifiPointFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
