import IconEarbudsBatteryFill0Wght100Grad0Opsz48 from '../components/EarbudsBatteryFill0Wght100Grad0Opsz48'
import IconEarbudsBatteryFill0Wght200Grad0Opsz48 from '../components/EarbudsBatteryFill0Wght200Grad0Opsz48'
import IconEarbudsBatteryFill0Wght300Grad0Opsz48 from '../components/EarbudsBatteryFill0Wght300Grad0Opsz48'
import IconEarbudsBatteryFill0Wght400Grad0Opsz48 from '../components/EarbudsBatteryFill0Wght400Grad0Opsz48'
import IconEarbudsBatteryFill0Wght500Grad0Opsz48 from '../components/EarbudsBatteryFill0Wght500Grad0Opsz48'
import IconEarbudsBatteryFill0Wght600Grad0Opsz48 from '../components/EarbudsBatteryFill0Wght600Grad0Opsz48'
import IconEarbudsBatteryFill0Wght700Grad0Opsz48 from '../components/EarbudsBatteryFill0Wght700Grad0Opsz48'
import IconEarbudsBatteryFill1Wght100Grad0Opsz48 from '../components/EarbudsBatteryFill1Wght100Grad0Opsz48'
import IconEarbudsBatteryFill1Wght200Grad0Opsz48 from '../components/EarbudsBatteryFill1Wght200Grad0Opsz48'
import IconEarbudsBatteryFill1Wght300Grad0Opsz48 from '../components/EarbudsBatteryFill1Wght300Grad0Opsz48'
import IconEarbudsBatteryFill1Wght400Grad0Opsz48 from '../components/EarbudsBatteryFill1Wght400Grad0Opsz48'
import IconEarbudsBatteryFill1Wght500Grad0Opsz48 from '../components/EarbudsBatteryFill1Wght500Grad0Opsz48'
import IconEarbudsBatteryFill1Wght600Grad0Opsz48 from '../components/EarbudsBatteryFill1Wght600Grad0Opsz48'
import IconEarbudsBatteryFill1Wght700Grad0Opsz48 from '../components/EarbudsBatteryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEarbudsBattery = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEarbudsBatteryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEarbudsBatteryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEarbudsBatteryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEarbudsBatteryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEarbudsBatteryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEarbudsBatteryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEarbudsBatteryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEarbudsBatteryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEarbudsBatteryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEarbudsBatteryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEarbudsBatteryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEarbudsBatteryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEarbudsBatteryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEarbudsBatteryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
