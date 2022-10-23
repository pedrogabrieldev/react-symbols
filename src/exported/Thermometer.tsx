import IconThermometerFill0Wght100Grad0Opsz48 from '../components/ThermometerFill0Wght100Grad0Opsz48'
import IconThermometerFill0Wght200Grad0Opsz48 from '../components/ThermometerFill0Wght200Grad0Opsz48'
import IconThermometerFill0Wght300Grad0Opsz48 from '../components/ThermometerFill0Wght300Grad0Opsz48'
import IconThermometerFill0Wght400Grad0Opsz48 from '../components/ThermometerFill0Wght400Grad0Opsz48'
import IconThermometerFill0Wght500Grad0Opsz48 from '../components/ThermometerFill0Wght500Grad0Opsz48'
import IconThermometerFill0Wght600Grad0Opsz48 from '../components/ThermometerFill0Wght600Grad0Opsz48'
import IconThermometerFill0Wght700Grad0Opsz48 from '../components/ThermometerFill0Wght700Grad0Opsz48'
import IconThermometerFill1Wght100Grad0Opsz48 from '../components/ThermometerFill1Wght100Grad0Opsz48'
import IconThermometerFill1Wght200Grad0Opsz48 from '../components/ThermometerFill1Wght200Grad0Opsz48'
import IconThermometerFill1Wght300Grad0Opsz48 from '../components/ThermometerFill1Wght300Grad0Opsz48'
import IconThermometerFill1Wght400Grad0Opsz48 from '../components/ThermometerFill1Wght400Grad0Opsz48'
import IconThermometerFill1Wght500Grad0Opsz48 from '../components/ThermometerFill1Wght500Grad0Opsz48'
import IconThermometerFill1Wght600Grad0Opsz48 from '../components/ThermometerFill1Wght600Grad0Opsz48'
import IconThermometerFill1Wght700Grad0Opsz48 from '../components/ThermometerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThermometer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThermometerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThermometerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThermometerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThermometerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThermometerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThermometerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThermometerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThermometerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThermometerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThermometerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThermometerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThermometerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThermometerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThermometerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
