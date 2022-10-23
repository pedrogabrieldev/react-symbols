import IconHourglassDisabledFill0Wght100Grad0Opsz48 from '../components/HourglassDisabledFill0Wght100Grad0Opsz48'
import IconHourglassDisabledFill0Wght200Grad0Opsz48 from '../components/HourglassDisabledFill0Wght200Grad0Opsz48'
import IconHourglassDisabledFill0Wght300Grad0Opsz48 from '../components/HourglassDisabledFill0Wght300Grad0Opsz48'
import IconHourglassDisabledFill0Wght400Grad0Opsz48 from '../components/HourglassDisabledFill0Wght400Grad0Opsz48'
import IconHourglassDisabledFill0Wght500Grad0Opsz48 from '../components/HourglassDisabledFill0Wght500Grad0Opsz48'
import IconHourglassDisabledFill0Wght600Grad0Opsz48 from '../components/HourglassDisabledFill0Wght600Grad0Opsz48'
import IconHourglassDisabledFill0Wght700Grad0Opsz48 from '../components/HourglassDisabledFill0Wght700Grad0Opsz48'
import IconHourglassDisabledFill1Wght100Grad0Opsz48 from '../components/HourglassDisabledFill1Wght100Grad0Opsz48'
import IconHourglassDisabledFill1Wght200Grad0Opsz48 from '../components/HourglassDisabledFill1Wght200Grad0Opsz48'
import IconHourglassDisabledFill1Wght300Grad0Opsz48 from '../components/HourglassDisabledFill1Wght300Grad0Opsz48'
import IconHourglassDisabledFill1Wght400Grad0Opsz48 from '../components/HourglassDisabledFill1Wght400Grad0Opsz48'
import IconHourglassDisabledFill1Wght500Grad0Opsz48 from '../components/HourglassDisabledFill1Wght500Grad0Opsz48'
import IconHourglassDisabledFill1Wght600Grad0Opsz48 from '../components/HourglassDisabledFill1Wght600Grad0Opsz48'
import IconHourglassDisabledFill1Wght700Grad0Opsz48 from '../components/HourglassDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHourglassDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHourglassDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHourglassDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHourglassDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHourglassDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHourglassDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHourglassDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHourglassDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHourglassDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHourglassDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHourglassDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHourglassDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHourglassDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHourglassDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHourglassDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
