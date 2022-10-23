import IconChairAltFill0Wght100Grad0Opsz48 from '../components/ChairAltFill0Wght100Grad0Opsz48'
import IconChairAltFill0Wght200Grad0Opsz48 from '../components/ChairAltFill0Wght200Grad0Opsz48'
import IconChairAltFill0Wght300Grad0Opsz48 from '../components/ChairAltFill0Wght300Grad0Opsz48'
import IconChairAltFill0Wght400Grad0Opsz48 from '../components/ChairAltFill0Wght400Grad0Opsz48'
import IconChairAltFill0Wght500Grad0Opsz48 from '../components/ChairAltFill0Wght500Grad0Opsz48'
import IconChairAltFill0Wght600Grad0Opsz48 from '../components/ChairAltFill0Wght600Grad0Opsz48'
import IconChairAltFill0Wght700Grad0Opsz48 from '../components/ChairAltFill0Wght700Grad0Opsz48'
import IconChairAltFill1Wght100Grad0Opsz48 from '../components/ChairAltFill1Wght100Grad0Opsz48'
import IconChairAltFill1Wght200Grad0Opsz48 from '../components/ChairAltFill1Wght200Grad0Opsz48'
import IconChairAltFill1Wght300Grad0Opsz48 from '../components/ChairAltFill1Wght300Grad0Opsz48'
import IconChairAltFill1Wght400Grad0Opsz48 from '../components/ChairAltFill1Wght400Grad0Opsz48'
import IconChairAltFill1Wght500Grad0Opsz48 from '../components/ChairAltFill1Wght500Grad0Opsz48'
import IconChairAltFill1Wght600Grad0Opsz48 from '../components/ChairAltFill1Wght600Grad0Opsz48'
import IconChairAltFill1Wght700Grad0Opsz48 from '../components/ChairAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChairAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChairAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChairAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChairAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChairAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChairAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChairAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChairAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChairAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChairAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChairAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChairAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChairAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChairAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChairAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
