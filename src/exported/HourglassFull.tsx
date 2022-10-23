import IconHourglassFullFill0Wght100Grad0Opsz48 from '../components/HourglassFullFill0Wght100Grad0Opsz48'
import IconHourglassFullFill0Wght200Grad0Opsz48 from '../components/HourglassFullFill0Wght200Grad0Opsz48'
import IconHourglassFullFill0Wght300Grad0Opsz48 from '../components/HourglassFullFill0Wght300Grad0Opsz48'
import IconHourglassFullFill0Wght400Grad0Opsz48 from '../components/HourglassFullFill0Wght400Grad0Opsz48'
import IconHourglassFullFill0Wght500Grad0Opsz48 from '../components/HourglassFullFill0Wght500Grad0Opsz48'
import IconHourglassFullFill0Wght600Grad0Opsz48 from '../components/HourglassFullFill0Wght600Grad0Opsz48'
import IconHourglassFullFill0Wght700Grad0Opsz48 from '../components/HourglassFullFill0Wght700Grad0Opsz48'
import IconHourglassFullFill1Wght100Grad0Opsz48 from '../components/HourglassFullFill1Wght100Grad0Opsz48'
import IconHourglassFullFill1Wght200Grad0Opsz48 from '../components/HourglassFullFill1Wght200Grad0Opsz48'
import IconHourglassFullFill1Wght300Grad0Opsz48 from '../components/HourglassFullFill1Wght300Grad0Opsz48'
import IconHourglassFullFill1Wght400Grad0Opsz48 from '../components/HourglassFullFill1Wght400Grad0Opsz48'
import IconHourglassFullFill1Wght500Grad0Opsz48 from '../components/HourglassFullFill1Wght500Grad0Opsz48'
import IconHourglassFullFill1Wght600Grad0Opsz48 from '../components/HourglassFullFill1Wght600Grad0Opsz48'
import IconHourglassFullFill1Wght700Grad0Opsz48 from '../components/HourglassFullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHourglassFull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHourglassFullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHourglassFullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHourglassFullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHourglassFullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHourglassFullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHourglassFullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHourglassFullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHourglassFullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHourglassFullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHourglassFullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHourglassFullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHourglassFullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHourglassFullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHourglassFullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
