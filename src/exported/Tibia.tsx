import IconTibiaFill0Wght100Grad0Opsz48 from '../components/TibiaFill0Wght100Grad0Opsz48'
import IconTibiaFill0Wght200Grad0Opsz48 from '../components/TibiaFill0Wght200Grad0Opsz48'
import IconTibiaFill0Wght300Grad0Opsz48 from '../components/TibiaFill0Wght300Grad0Opsz48'
import IconTibiaFill0Wght400Grad0Opsz48 from '../components/TibiaFill0Wght400Grad0Opsz48'
import IconTibiaFill0Wght500Grad0Opsz48 from '../components/TibiaFill0Wght500Grad0Opsz48'
import IconTibiaFill0Wght600Grad0Opsz48 from '../components/TibiaFill0Wght600Grad0Opsz48'
import IconTibiaFill0Wght700Grad0Opsz48 from '../components/TibiaFill0Wght700Grad0Opsz48'
import IconTibiaFill1Wght100Grad0Opsz48 from '../components/TibiaFill1Wght100Grad0Opsz48'
import IconTibiaFill1Wght200Grad0Opsz48 from '../components/TibiaFill1Wght200Grad0Opsz48'
import IconTibiaFill1Wght300Grad0Opsz48 from '../components/TibiaFill1Wght300Grad0Opsz48'
import IconTibiaFill1Wght400Grad0Opsz48 from '../components/TibiaFill1Wght400Grad0Opsz48'
import IconTibiaFill1Wght500Grad0Opsz48 from '../components/TibiaFill1Wght500Grad0Opsz48'
import IconTibiaFill1Wght600Grad0Opsz48 from '../components/TibiaFill1Wght600Grad0Opsz48'
import IconTibiaFill1Wght700Grad0Opsz48 from '../components/TibiaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTibia = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTibiaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTibiaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTibiaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTibiaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTibiaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTibiaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTibiaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTibiaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTibiaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTibiaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTibiaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTibiaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTibiaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTibiaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
