import IconNestWifiGaleFill0Wght100Grad0Opsz48 from '../components/NestWifiGaleFill0Wght100Grad0Opsz48'
import IconNestWifiGaleFill0Wght200Grad0Opsz48 from '../components/NestWifiGaleFill0Wght200Grad0Opsz48'
import IconNestWifiGaleFill0Wght300Grad0Opsz48 from '../components/NestWifiGaleFill0Wght300Grad0Opsz48'
import IconNestWifiGaleFill0Wght400Grad0Opsz48 from '../components/NestWifiGaleFill0Wght400Grad0Opsz48'
import IconNestWifiGaleFill0Wght500Grad0Opsz48 from '../components/NestWifiGaleFill0Wght500Grad0Opsz48'
import IconNestWifiGaleFill0Wght600Grad0Opsz48 from '../components/NestWifiGaleFill0Wght600Grad0Opsz48'
import IconNestWifiGaleFill0Wght700Grad0Opsz48 from '../components/NestWifiGaleFill0Wght700Grad0Opsz48'
import IconNestWifiGaleFill1Wght100Grad0Opsz48 from '../components/NestWifiGaleFill1Wght100Grad0Opsz48'
import IconNestWifiGaleFill1Wght200Grad0Opsz48 from '../components/NestWifiGaleFill1Wght200Grad0Opsz48'
import IconNestWifiGaleFill1Wght300Grad0Opsz48 from '../components/NestWifiGaleFill1Wght300Grad0Opsz48'
import IconNestWifiGaleFill1Wght400Grad0Opsz48 from '../components/NestWifiGaleFill1Wght400Grad0Opsz48'
import IconNestWifiGaleFill1Wght500Grad0Opsz48 from '../components/NestWifiGaleFill1Wght500Grad0Opsz48'
import IconNestWifiGaleFill1Wght600Grad0Opsz48 from '../components/NestWifiGaleFill1Wght600Grad0Opsz48'
import IconNestWifiGaleFill1Wght700Grad0Opsz48 from '../components/NestWifiGaleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestWifiGale = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestWifiGaleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestWifiGaleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestWifiGaleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestWifiGaleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestWifiGaleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestWifiGaleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestWifiGaleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestWifiGaleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestWifiGaleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestWifiGaleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestWifiGaleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestWifiGaleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestWifiGaleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestWifiGaleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
