import IconLocalAtmFill0Wght100Grad0Opsz48 from '../components/LocalAtmFill0Wght100Grad0Opsz48'
import IconLocalAtmFill0Wght200Grad0Opsz48 from '../components/LocalAtmFill0Wght200Grad0Opsz48'
import IconLocalAtmFill0Wght300Grad0Opsz48 from '../components/LocalAtmFill0Wght300Grad0Opsz48'
import IconLocalAtmFill0Wght400Grad0Opsz48 from '../components/LocalAtmFill0Wght400Grad0Opsz48'
import IconLocalAtmFill0Wght500Grad0Opsz48 from '../components/LocalAtmFill0Wght500Grad0Opsz48'
import IconLocalAtmFill0Wght600Grad0Opsz48 from '../components/LocalAtmFill0Wght600Grad0Opsz48'
import IconLocalAtmFill0Wght700Grad0Opsz48 from '../components/LocalAtmFill0Wght700Grad0Opsz48'
import IconLocalAtmFill1Wght100Grad0Opsz48 from '../components/LocalAtmFill1Wght100Grad0Opsz48'
import IconLocalAtmFill1Wght200Grad0Opsz48 from '../components/LocalAtmFill1Wght200Grad0Opsz48'
import IconLocalAtmFill1Wght300Grad0Opsz48 from '../components/LocalAtmFill1Wght300Grad0Opsz48'
import IconLocalAtmFill1Wght400Grad0Opsz48 from '../components/LocalAtmFill1Wght400Grad0Opsz48'
import IconLocalAtmFill1Wght500Grad0Opsz48 from '../components/LocalAtmFill1Wght500Grad0Opsz48'
import IconLocalAtmFill1Wght600Grad0Opsz48 from '../components/LocalAtmFill1Wght600Grad0Opsz48'
import IconLocalAtmFill1Wght700Grad0Opsz48 from '../components/LocalAtmFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalAtm = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalAtmFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalAtmFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalAtmFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalAtmFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalAtmFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalAtmFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalAtmFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalAtmFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalAtmFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalAtmFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalAtmFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalAtmFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalAtmFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalAtmFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
