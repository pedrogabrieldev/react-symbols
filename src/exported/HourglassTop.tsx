import IconHourglassTopFill0Wght100Grad0Opsz48 from '../components/HourglassTopFill0Wght100Grad0Opsz48'
import IconHourglassTopFill0Wght200Grad0Opsz48 from '../components/HourglassTopFill0Wght200Grad0Opsz48'
import IconHourglassTopFill0Wght300Grad0Opsz48 from '../components/HourglassTopFill0Wght300Grad0Opsz48'
import IconHourglassTopFill0Wght400Grad0Opsz48 from '../components/HourglassTopFill0Wght400Grad0Opsz48'
import IconHourglassTopFill0Wght500Grad0Opsz48 from '../components/HourglassTopFill0Wght500Grad0Opsz48'
import IconHourglassTopFill0Wght600Grad0Opsz48 from '../components/HourglassTopFill0Wght600Grad0Opsz48'
import IconHourglassTopFill0Wght700Grad0Opsz48 from '../components/HourglassTopFill0Wght700Grad0Opsz48'
import IconHourglassTopFill1Wght100Grad0Opsz48 from '../components/HourglassTopFill1Wght100Grad0Opsz48'
import IconHourglassTopFill1Wght200Grad0Opsz48 from '../components/HourglassTopFill1Wght200Grad0Opsz48'
import IconHourglassTopFill1Wght300Grad0Opsz48 from '../components/HourglassTopFill1Wght300Grad0Opsz48'
import IconHourglassTopFill1Wght400Grad0Opsz48 from '../components/HourglassTopFill1Wght400Grad0Opsz48'
import IconHourglassTopFill1Wght500Grad0Opsz48 from '../components/HourglassTopFill1Wght500Grad0Opsz48'
import IconHourglassTopFill1Wght600Grad0Opsz48 from '../components/HourglassTopFill1Wght600Grad0Opsz48'
import IconHourglassTopFill1Wght700Grad0Opsz48 from '../components/HourglassTopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHourglassTop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHourglassTopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHourglassTopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHourglassTopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHourglassTopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHourglassTopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHourglassTopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHourglassTopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHourglassTopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHourglassTopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHourglassTopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHourglassTopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHourglassTopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHourglassTopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHourglassTopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
