import IconBatterySaverFill0Wght100Grad0Opsz48 from '../components/BatterySaverFill0Wght100Grad0Opsz48'
import IconBatterySaverFill0Wght200Grad0Opsz48 from '../components/BatterySaverFill0Wght200Grad0Opsz48'
import IconBatterySaverFill0Wght300Grad0Opsz48 from '../components/BatterySaverFill0Wght300Grad0Opsz48'
import IconBatterySaverFill0Wght400Grad0Opsz48 from '../components/BatterySaverFill0Wght400Grad0Opsz48'
import IconBatterySaverFill0Wght500Grad0Opsz48 from '../components/BatterySaverFill0Wght500Grad0Opsz48'
import IconBatterySaverFill0Wght600Grad0Opsz48 from '../components/BatterySaverFill0Wght600Grad0Opsz48'
import IconBatterySaverFill0Wght700Grad0Opsz48 from '../components/BatterySaverFill0Wght700Grad0Opsz48'
import IconBatterySaverFill1Wght100Grad0Opsz48 from '../components/BatterySaverFill1Wght100Grad0Opsz48'
import IconBatterySaverFill1Wght200Grad0Opsz48 from '../components/BatterySaverFill1Wght200Grad0Opsz48'
import IconBatterySaverFill1Wght300Grad0Opsz48 from '../components/BatterySaverFill1Wght300Grad0Opsz48'
import IconBatterySaverFill1Wght400Grad0Opsz48 from '../components/BatterySaverFill1Wght400Grad0Opsz48'
import IconBatterySaverFill1Wght500Grad0Opsz48 from '../components/BatterySaverFill1Wght500Grad0Opsz48'
import IconBatterySaverFill1Wght600Grad0Opsz48 from '../components/BatterySaverFill1Wght600Grad0Opsz48'
import IconBatterySaverFill1Wght700Grad0Opsz48 from '../components/BatterySaverFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatterySaver = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatterySaverFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatterySaverFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatterySaverFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatterySaverFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatterySaverFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatterySaverFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatterySaverFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatterySaverFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatterySaverFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatterySaverFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatterySaverFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatterySaverFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatterySaverFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatterySaverFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
