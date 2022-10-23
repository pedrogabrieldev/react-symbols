import IconHourglassEmptyFill0Wght100Grad0Opsz48 from '../components/HourglassEmptyFill0Wght100Grad0Opsz48'
import IconHourglassEmptyFill0Wght200Grad0Opsz48 from '../components/HourglassEmptyFill0Wght200Grad0Opsz48'
import IconHourglassEmptyFill0Wght300Grad0Opsz48 from '../components/HourglassEmptyFill0Wght300Grad0Opsz48'
import IconHourglassEmptyFill0Wght400Grad0Opsz48 from '../components/HourglassEmptyFill0Wght400Grad0Opsz48'
import IconHourglassEmptyFill0Wght500Grad0Opsz48 from '../components/HourglassEmptyFill0Wght500Grad0Opsz48'
import IconHourglassEmptyFill0Wght600Grad0Opsz48 from '../components/HourglassEmptyFill0Wght600Grad0Opsz48'
import IconHourglassEmptyFill0Wght700Grad0Opsz48 from '../components/HourglassEmptyFill0Wght700Grad0Opsz48'
import IconHourglassEmptyFill1Wght100Grad0Opsz48 from '../components/HourglassEmptyFill1Wght100Grad0Opsz48'
import IconHourglassEmptyFill1Wght200Grad0Opsz48 from '../components/HourglassEmptyFill1Wght200Grad0Opsz48'
import IconHourglassEmptyFill1Wght300Grad0Opsz48 from '../components/HourglassEmptyFill1Wght300Grad0Opsz48'
import IconHourglassEmptyFill1Wght400Grad0Opsz48 from '../components/HourglassEmptyFill1Wght400Grad0Opsz48'
import IconHourglassEmptyFill1Wght500Grad0Opsz48 from '../components/HourglassEmptyFill1Wght500Grad0Opsz48'
import IconHourglassEmptyFill1Wght600Grad0Opsz48 from '../components/HourglassEmptyFill1Wght600Grad0Opsz48'
import IconHourglassEmptyFill1Wght700Grad0Opsz48 from '../components/HourglassEmptyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHourglassEmpty = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHourglassEmptyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHourglassEmptyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHourglassEmptyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHourglassEmptyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHourglassEmptyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHourglassEmptyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHourglassEmptyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHourglassEmptyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHourglassEmptyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHourglassEmptyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHourglassEmptyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHourglassEmptyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHourglassEmptyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHourglassEmptyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
