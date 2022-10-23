import IconNestWifiPointVentoFill0Wght100Grad0Opsz48 from '../components/NestWifiPointVentoFill0Wght100Grad0Opsz48'
import IconNestWifiPointVentoFill0Wght200Grad0Opsz48 from '../components/NestWifiPointVentoFill0Wght200Grad0Opsz48'
import IconNestWifiPointVentoFill0Wght300Grad0Opsz48 from '../components/NestWifiPointVentoFill0Wght300Grad0Opsz48'
import IconNestWifiPointVentoFill0Wght400Grad0Opsz48 from '../components/NestWifiPointVentoFill0Wght400Grad0Opsz48'
import IconNestWifiPointVentoFill0Wght500Grad0Opsz48 from '../components/NestWifiPointVentoFill0Wght500Grad0Opsz48'
import IconNestWifiPointVentoFill0Wght600Grad0Opsz48 from '../components/NestWifiPointVentoFill0Wght600Grad0Opsz48'
import IconNestWifiPointVentoFill0Wght700Grad0Opsz48 from '../components/NestWifiPointVentoFill0Wght700Grad0Opsz48'
import IconNestWifiPointVentoFill1Wght100Grad0Opsz48 from '../components/NestWifiPointVentoFill1Wght100Grad0Opsz48'
import IconNestWifiPointVentoFill1Wght200Grad0Opsz48 from '../components/NestWifiPointVentoFill1Wght200Grad0Opsz48'
import IconNestWifiPointVentoFill1Wght300Grad0Opsz48 from '../components/NestWifiPointVentoFill1Wght300Grad0Opsz48'
import IconNestWifiPointVentoFill1Wght400Grad0Opsz48 from '../components/NestWifiPointVentoFill1Wght400Grad0Opsz48'
import IconNestWifiPointVentoFill1Wght500Grad0Opsz48 from '../components/NestWifiPointVentoFill1Wght500Grad0Opsz48'
import IconNestWifiPointVentoFill1Wght600Grad0Opsz48 from '../components/NestWifiPointVentoFill1Wght600Grad0Opsz48'
import IconNestWifiPointVentoFill1Wght700Grad0Opsz48 from '../components/NestWifiPointVentoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestWifiPointVento = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestWifiPointVentoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestWifiPointVentoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestWifiPointVentoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestWifiPointVentoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestWifiPointVentoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestWifiPointVentoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestWifiPointVentoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestWifiPointVentoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestWifiPointVentoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestWifiPointVentoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestWifiPointVentoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestWifiPointVentoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestWifiPointVentoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestWifiPointVentoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
