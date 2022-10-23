import IconWindPowerFill0Wght100Grad0Opsz48 from '../components/WindPowerFill0Wght100Grad0Opsz48'
import IconWindPowerFill0Wght200Grad0Opsz48 from '../components/WindPowerFill0Wght200Grad0Opsz48'
import IconWindPowerFill0Wght300Grad0Opsz48 from '../components/WindPowerFill0Wght300Grad0Opsz48'
import IconWindPowerFill0Wght400Grad0Opsz48 from '../components/WindPowerFill0Wght400Grad0Opsz48'
import IconWindPowerFill0Wght500Grad0Opsz48 from '../components/WindPowerFill0Wght500Grad0Opsz48'
import IconWindPowerFill0Wght600Grad0Opsz48 from '../components/WindPowerFill0Wght600Grad0Opsz48'
import IconWindPowerFill0Wght700Grad0Opsz48 from '../components/WindPowerFill0Wght700Grad0Opsz48'
import IconWindPowerFill1Wght100Grad0Opsz48 from '../components/WindPowerFill1Wght100Grad0Opsz48'
import IconWindPowerFill1Wght200Grad0Opsz48 from '../components/WindPowerFill1Wght200Grad0Opsz48'
import IconWindPowerFill1Wght300Grad0Opsz48 from '../components/WindPowerFill1Wght300Grad0Opsz48'
import IconWindPowerFill1Wght400Grad0Opsz48 from '../components/WindPowerFill1Wght400Grad0Opsz48'
import IconWindPowerFill1Wght500Grad0Opsz48 from '../components/WindPowerFill1Wght500Grad0Opsz48'
import IconWindPowerFill1Wght600Grad0Opsz48 from '../components/WindPowerFill1Wght600Grad0Opsz48'
import IconWindPowerFill1Wght700Grad0Opsz48 from '../components/WindPowerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWindPower = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWindPowerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWindPowerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWindPowerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWindPowerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWindPowerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWindPowerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWindPowerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWindPowerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWindPowerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWindPowerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWindPowerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWindPowerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWindPowerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWindPowerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
