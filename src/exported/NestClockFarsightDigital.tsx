import IconNestClockFarsightDigitalFill0Wght100Grad0Opsz48 from '../components/NestClockFarsightDigitalFill0Wght100Grad0Opsz48'
import IconNestClockFarsightDigitalFill0Wght200Grad0Opsz48 from '../components/NestClockFarsightDigitalFill0Wght200Grad0Opsz48'
import IconNestClockFarsightDigitalFill0Wght300Grad0Opsz48 from '../components/NestClockFarsightDigitalFill0Wght300Grad0Opsz48'
import IconNestClockFarsightDigitalFill0Wght400Grad0Opsz48 from '../components/NestClockFarsightDigitalFill0Wght400Grad0Opsz48'
import IconNestClockFarsightDigitalFill0Wght500Grad0Opsz48 from '../components/NestClockFarsightDigitalFill0Wght500Grad0Opsz48'
import IconNestClockFarsightDigitalFill0Wght600Grad0Opsz48 from '../components/NestClockFarsightDigitalFill0Wght600Grad0Opsz48'
import IconNestClockFarsightDigitalFill0Wght700Grad0Opsz48 from '../components/NestClockFarsightDigitalFill0Wght700Grad0Opsz48'
import IconNestClockFarsightDigitalFill1Wght100Grad0Opsz48 from '../components/NestClockFarsightDigitalFill1Wght100Grad0Opsz48'
import IconNestClockFarsightDigitalFill1Wght200Grad0Opsz48 from '../components/NestClockFarsightDigitalFill1Wght200Grad0Opsz48'
import IconNestClockFarsightDigitalFill1Wght300Grad0Opsz48 from '../components/NestClockFarsightDigitalFill1Wght300Grad0Opsz48'
import IconNestClockFarsightDigitalFill1Wght400Grad0Opsz48 from '../components/NestClockFarsightDigitalFill1Wght400Grad0Opsz48'
import IconNestClockFarsightDigitalFill1Wght500Grad0Opsz48 from '../components/NestClockFarsightDigitalFill1Wght500Grad0Opsz48'
import IconNestClockFarsightDigitalFill1Wght600Grad0Opsz48 from '../components/NestClockFarsightDigitalFill1Wght600Grad0Opsz48'
import IconNestClockFarsightDigitalFill1Wght700Grad0Opsz48 from '../components/NestClockFarsightDigitalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestClockFarsightDigital = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestClockFarsightDigitalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestClockFarsightDigitalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestClockFarsightDigitalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestClockFarsightDigitalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestClockFarsightDigitalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestClockFarsightDigitalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestClockFarsightDigitalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestClockFarsightDigitalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestClockFarsightDigitalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestClockFarsightDigitalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestClockFarsightDigitalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestClockFarsightDigitalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestClockFarsightDigitalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestClockFarsightDigitalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
