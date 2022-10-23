import IconTibiaAltFill0Wght100Grad0Opsz48 from '../components/TibiaAltFill0Wght100Grad0Opsz48'
import IconTibiaAltFill0Wght200Grad0Opsz48 from '../components/TibiaAltFill0Wght200Grad0Opsz48'
import IconTibiaAltFill0Wght300Grad0Opsz48 from '../components/TibiaAltFill0Wght300Grad0Opsz48'
import IconTibiaAltFill0Wght400Grad0Opsz48 from '../components/TibiaAltFill0Wght400Grad0Opsz48'
import IconTibiaAltFill0Wght500Grad0Opsz48 from '../components/TibiaAltFill0Wght500Grad0Opsz48'
import IconTibiaAltFill0Wght600Grad0Opsz48 from '../components/TibiaAltFill0Wght600Grad0Opsz48'
import IconTibiaAltFill0Wght700Grad0Opsz48 from '../components/TibiaAltFill0Wght700Grad0Opsz48'
import IconTibiaAltFill1Wght100Grad0Opsz48 from '../components/TibiaAltFill1Wght100Grad0Opsz48'
import IconTibiaAltFill1Wght200Grad0Opsz48 from '../components/TibiaAltFill1Wght200Grad0Opsz48'
import IconTibiaAltFill1Wght300Grad0Opsz48 from '../components/TibiaAltFill1Wght300Grad0Opsz48'
import IconTibiaAltFill1Wght400Grad0Opsz48 from '../components/TibiaAltFill1Wght400Grad0Opsz48'
import IconTibiaAltFill1Wght500Grad0Opsz48 from '../components/TibiaAltFill1Wght500Grad0Opsz48'
import IconTibiaAltFill1Wght600Grad0Opsz48 from '../components/TibiaAltFill1Wght600Grad0Opsz48'
import IconTibiaAltFill1Wght700Grad0Opsz48 from '../components/TibiaAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTibiaAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTibiaAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTibiaAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTibiaAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTibiaAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTibiaAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTibiaAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTibiaAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTibiaAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTibiaAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTibiaAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTibiaAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTibiaAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTibiaAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTibiaAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
