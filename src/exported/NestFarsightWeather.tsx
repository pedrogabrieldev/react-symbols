import IconNestFarsightWeatherFill0Wght100Grad0Opsz48 from '../components/NestFarsightWeatherFill0Wght100Grad0Opsz48'
import IconNestFarsightWeatherFill0Wght200Grad0Opsz48 from '../components/NestFarsightWeatherFill0Wght200Grad0Opsz48'
import IconNestFarsightWeatherFill0Wght300Grad0Opsz48 from '../components/NestFarsightWeatherFill0Wght300Grad0Opsz48'
import IconNestFarsightWeatherFill0Wght400Grad0Opsz48 from '../components/NestFarsightWeatherFill0Wght400Grad0Opsz48'
import IconNestFarsightWeatherFill0Wght500Grad0Opsz48 from '../components/NestFarsightWeatherFill0Wght500Grad0Opsz48'
import IconNestFarsightWeatherFill0Wght600Grad0Opsz48 from '../components/NestFarsightWeatherFill0Wght600Grad0Opsz48'
import IconNestFarsightWeatherFill0Wght700Grad0Opsz48 from '../components/NestFarsightWeatherFill0Wght700Grad0Opsz48'
import IconNestFarsightWeatherFill1Wght100Grad0Opsz48 from '../components/NestFarsightWeatherFill1Wght100Grad0Opsz48'
import IconNestFarsightWeatherFill1Wght200Grad0Opsz48 from '../components/NestFarsightWeatherFill1Wght200Grad0Opsz48'
import IconNestFarsightWeatherFill1Wght300Grad0Opsz48 from '../components/NestFarsightWeatherFill1Wght300Grad0Opsz48'
import IconNestFarsightWeatherFill1Wght400Grad0Opsz48 from '../components/NestFarsightWeatherFill1Wght400Grad0Opsz48'
import IconNestFarsightWeatherFill1Wght500Grad0Opsz48 from '../components/NestFarsightWeatherFill1Wght500Grad0Opsz48'
import IconNestFarsightWeatherFill1Wght600Grad0Opsz48 from '../components/NestFarsightWeatherFill1Wght600Grad0Opsz48'
import IconNestFarsightWeatherFill1Wght700Grad0Opsz48 from '../components/NestFarsightWeatherFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestFarsightWeather = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestFarsightWeatherFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestFarsightWeatherFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestFarsightWeatherFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestFarsightWeatherFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestFarsightWeatherFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestFarsightWeatherFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestFarsightWeatherFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestFarsightWeatherFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestFarsightWeatherFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestFarsightWeatherFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestFarsightWeatherFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestFarsightWeatherFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestFarsightWeatherFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestFarsightWeatherFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
