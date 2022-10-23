import IconHumidityLowFill0Wght100Grad0Opsz48 from '../components/HumidityLowFill0Wght100Grad0Opsz48'
import IconHumidityLowFill0Wght200Grad0Opsz48 from '../components/HumidityLowFill0Wght200Grad0Opsz48'
import IconHumidityLowFill0Wght300Grad0Opsz48 from '../components/HumidityLowFill0Wght300Grad0Opsz48'
import IconHumidityLowFill0Wght400Grad0Opsz48 from '../components/HumidityLowFill0Wght400Grad0Opsz48'
import IconHumidityLowFill0Wght500Grad0Opsz48 from '../components/HumidityLowFill0Wght500Grad0Opsz48'
import IconHumidityLowFill0Wght600Grad0Opsz48 from '../components/HumidityLowFill0Wght600Grad0Opsz48'
import IconHumidityLowFill0Wght700Grad0Opsz48 from '../components/HumidityLowFill0Wght700Grad0Opsz48'
import IconHumidityLowFill1Wght100Grad0Opsz48 from '../components/HumidityLowFill1Wght100Grad0Opsz48'
import IconHumidityLowFill1Wght200Grad0Opsz48 from '../components/HumidityLowFill1Wght200Grad0Opsz48'
import IconHumidityLowFill1Wght300Grad0Opsz48 from '../components/HumidityLowFill1Wght300Grad0Opsz48'
import IconHumidityLowFill1Wght400Grad0Opsz48 from '../components/HumidityLowFill1Wght400Grad0Opsz48'
import IconHumidityLowFill1Wght500Grad0Opsz48 from '../components/HumidityLowFill1Wght500Grad0Opsz48'
import IconHumidityLowFill1Wght600Grad0Opsz48 from '../components/HumidityLowFill1Wght600Grad0Opsz48'
import IconHumidityLowFill1Wght700Grad0Opsz48 from '../components/HumidityLowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHumidityLow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHumidityLowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHumidityLowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHumidityLowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHumidityLowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHumidityLowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHumidityLowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHumidityLowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHumidityLowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHumidityLowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHumidityLowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHumidityLowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHumidityLowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHumidityLowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHumidityLowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
