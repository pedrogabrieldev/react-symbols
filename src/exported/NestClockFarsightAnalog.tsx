import IconNestClockFarsightAnalogFill0Wght100Grad0Opsz48 from '../components/NestClockFarsightAnalogFill0Wght100Grad0Opsz48'
import IconNestClockFarsightAnalogFill0Wght200Grad0Opsz48 from '../components/NestClockFarsightAnalogFill0Wght200Grad0Opsz48'
import IconNestClockFarsightAnalogFill0Wght300Grad0Opsz48 from '../components/NestClockFarsightAnalogFill0Wght300Grad0Opsz48'
import IconNestClockFarsightAnalogFill0Wght400Grad0Opsz48 from '../components/NestClockFarsightAnalogFill0Wght400Grad0Opsz48'
import IconNestClockFarsightAnalogFill0Wght500Grad0Opsz48 from '../components/NestClockFarsightAnalogFill0Wght500Grad0Opsz48'
import IconNestClockFarsightAnalogFill0Wght600Grad0Opsz48 from '../components/NestClockFarsightAnalogFill0Wght600Grad0Opsz48'
import IconNestClockFarsightAnalogFill0Wght700Grad0Opsz48 from '../components/NestClockFarsightAnalogFill0Wght700Grad0Opsz48'
import IconNestClockFarsightAnalogFill1Wght100Grad0Opsz48 from '../components/NestClockFarsightAnalogFill1Wght100Grad0Opsz48'
import IconNestClockFarsightAnalogFill1Wght200Grad0Opsz48 from '../components/NestClockFarsightAnalogFill1Wght200Grad0Opsz48'
import IconNestClockFarsightAnalogFill1Wght300Grad0Opsz48 from '../components/NestClockFarsightAnalogFill1Wght300Grad0Opsz48'
import IconNestClockFarsightAnalogFill1Wght400Grad0Opsz48 from '../components/NestClockFarsightAnalogFill1Wght400Grad0Opsz48'
import IconNestClockFarsightAnalogFill1Wght500Grad0Opsz48 from '../components/NestClockFarsightAnalogFill1Wght500Grad0Opsz48'
import IconNestClockFarsightAnalogFill1Wght600Grad0Opsz48 from '../components/NestClockFarsightAnalogFill1Wght600Grad0Opsz48'
import IconNestClockFarsightAnalogFill1Wght700Grad0Opsz48 from '../components/NestClockFarsightAnalogFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestClockFarsightAnalog = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestClockFarsightAnalogFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestClockFarsightAnalogFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestClockFarsightAnalogFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestClockFarsightAnalogFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestClockFarsightAnalogFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestClockFarsightAnalogFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestClockFarsightAnalogFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestClockFarsightAnalogFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestClockFarsightAnalogFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestClockFarsightAnalogFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestClockFarsightAnalogFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestClockFarsightAnalogFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestClockFarsightAnalogFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestClockFarsightAnalogFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
