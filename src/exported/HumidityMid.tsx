import IconHumidityMidFill0Wght100Grad0Opsz48 from '../components/HumidityMidFill0Wght100Grad0Opsz48'
import IconHumidityMidFill0Wght200Grad0Opsz48 from '../components/HumidityMidFill0Wght200Grad0Opsz48'
import IconHumidityMidFill0Wght300Grad0Opsz48 from '../components/HumidityMidFill0Wght300Grad0Opsz48'
import IconHumidityMidFill0Wght400Grad0Opsz48 from '../components/HumidityMidFill0Wght400Grad0Opsz48'
import IconHumidityMidFill0Wght500Grad0Opsz48 from '../components/HumidityMidFill0Wght500Grad0Opsz48'
import IconHumidityMidFill0Wght600Grad0Opsz48 from '../components/HumidityMidFill0Wght600Grad0Opsz48'
import IconHumidityMidFill0Wght700Grad0Opsz48 from '../components/HumidityMidFill0Wght700Grad0Opsz48'
import IconHumidityMidFill1Wght100Grad0Opsz48 from '../components/HumidityMidFill1Wght100Grad0Opsz48'
import IconHumidityMidFill1Wght200Grad0Opsz48 from '../components/HumidityMidFill1Wght200Grad0Opsz48'
import IconHumidityMidFill1Wght300Grad0Opsz48 from '../components/HumidityMidFill1Wght300Grad0Opsz48'
import IconHumidityMidFill1Wght400Grad0Opsz48 from '../components/HumidityMidFill1Wght400Grad0Opsz48'
import IconHumidityMidFill1Wght500Grad0Opsz48 from '../components/HumidityMidFill1Wght500Grad0Opsz48'
import IconHumidityMidFill1Wght600Grad0Opsz48 from '../components/HumidityMidFill1Wght600Grad0Opsz48'
import IconHumidityMidFill1Wght700Grad0Opsz48 from '../components/HumidityMidFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHumidityMid = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHumidityMidFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHumidityMidFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHumidityMidFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHumidityMidFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHumidityMidFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHumidityMidFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHumidityMidFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHumidityMidFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHumidityMidFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHumidityMidFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHumidityMidFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHumidityMidFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHumidityMidFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHumidityMidFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
