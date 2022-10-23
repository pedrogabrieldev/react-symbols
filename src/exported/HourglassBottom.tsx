import IconHourglassBottomFill0Wght100Grad0Opsz48 from '../components/HourglassBottomFill0Wght100Grad0Opsz48'
import IconHourglassBottomFill0Wght200Grad0Opsz48 from '../components/HourglassBottomFill0Wght200Grad0Opsz48'
import IconHourglassBottomFill0Wght300Grad0Opsz48 from '../components/HourglassBottomFill0Wght300Grad0Opsz48'
import IconHourglassBottomFill0Wght400Grad0Opsz48 from '../components/HourglassBottomFill0Wght400Grad0Opsz48'
import IconHourglassBottomFill0Wght500Grad0Opsz48 from '../components/HourglassBottomFill0Wght500Grad0Opsz48'
import IconHourglassBottomFill0Wght600Grad0Opsz48 from '../components/HourglassBottomFill0Wght600Grad0Opsz48'
import IconHourglassBottomFill0Wght700Grad0Opsz48 from '../components/HourglassBottomFill0Wght700Grad0Opsz48'
import IconHourglassBottomFill1Wght100Grad0Opsz48 from '../components/HourglassBottomFill1Wght100Grad0Opsz48'
import IconHourglassBottomFill1Wght200Grad0Opsz48 from '../components/HourglassBottomFill1Wght200Grad0Opsz48'
import IconHourglassBottomFill1Wght300Grad0Opsz48 from '../components/HourglassBottomFill1Wght300Grad0Opsz48'
import IconHourglassBottomFill1Wght400Grad0Opsz48 from '../components/HourglassBottomFill1Wght400Grad0Opsz48'
import IconHourglassBottomFill1Wght500Grad0Opsz48 from '../components/HourglassBottomFill1Wght500Grad0Opsz48'
import IconHourglassBottomFill1Wght600Grad0Opsz48 from '../components/HourglassBottomFill1Wght600Grad0Opsz48'
import IconHourglassBottomFill1Wght700Grad0Opsz48 from '../components/HourglassBottomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHourglassBottom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHourglassBottomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHourglassBottomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHourglassBottomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHourglassBottomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHourglassBottomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHourglassBottomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHourglassBottomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHourglassBottomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHourglassBottomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHourglassBottomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHourglassBottomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHourglassBottomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHourglassBottomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHourglassBottomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
