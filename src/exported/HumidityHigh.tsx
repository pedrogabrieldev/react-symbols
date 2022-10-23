import IconHumidityHighFill0Wght100Grad0Opsz48 from '../components/HumidityHighFill0Wght100Grad0Opsz48'
import IconHumidityHighFill0Wght200Grad0Opsz48 from '../components/HumidityHighFill0Wght200Grad0Opsz48'
import IconHumidityHighFill0Wght300Grad0Opsz48 from '../components/HumidityHighFill0Wght300Grad0Opsz48'
import IconHumidityHighFill0Wght400Grad0Opsz48 from '../components/HumidityHighFill0Wght400Grad0Opsz48'
import IconHumidityHighFill0Wght500Grad0Opsz48 from '../components/HumidityHighFill0Wght500Grad0Opsz48'
import IconHumidityHighFill0Wght600Grad0Opsz48 from '../components/HumidityHighFill0Wght600Grad0Opsz48'
import IconHumidityHighFill0Wght700Grad0Opsz48 from '../components/HumidityHighFill0Wght700Grad0Opsz48'
import IconHumidityHighFill1Wght100Grad0Opsz48 from '../components/HumidityHighFill1Wght100Grad0Opsz48'
import IconHumidityHighFill1Wght200Grad0Opsz48 from '../components/HumidityHighFill1Wght200Grad0Opsz48'
import IconHumidityHighFill1Wght300Grad0Opsz48 from '../components/HumidityHighFill1Wght300Grad0Opsz48'
import IconHumidityHighFill1Wght400Grad0Opsz48 from '../components/HumidityHighFill1Wght400Grad0Opsz48'
import IconHumidityHighFill1Wght500Grad0Opsz48 from '../components/HumidityHighFill1Wght500Grad0Opsz48'
import IconHumidityHighFill1Wght600Grad0Opsz48 from '../components/HumidityHighFill1Wght600Grad0Opsz48'
import IconHumidityHighFill1Wght700Grad0Opsz48 from '../components/HumidityHighFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHumidityHigh = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHumidityHighFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHumidityHighFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHumidityHighFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHumidityHighFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHumidityHighFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHumidityHighFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHumidityHighFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHumidityHighFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHumidityHighFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHumidityHighFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHumidityHighFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHumidityHighFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHumidityHighFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHumidityHighFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
