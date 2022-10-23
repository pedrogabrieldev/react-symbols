import IconMotorcycleFill0Wght100Grad0Opsz48 from '../components/MotorcycleFill0Wght100Grad0Opsz48'
import IconMotorcycleFill0Wght200Grad0Opsz48 from '../components/MotorcycleFill0Wght200Grad0Opsz48'
import IconMotorcycleFill0Wght300Grad0Opsz48 from '../components/MotorcycleFill0Wght300Grad0Opsz48'
import IconMotorcycleFill0Wght400Grad0Opsz48 from '../components/MotorcycleFill0Wght400Grad0Opsz48'
import IconMotorcycleFill0Wght500Grad0Opsz48 from '../components/MotorcycleFill0Wght500Grad0Opsz48'
import IconMotorcycleFill0Wght600Grad0Opsz48 from '../components/MotorcycleFill0Wght600Grad0Opsz48'
import IconMotorcycleFill0Wght700Grad0Opsz48 from '../components/MotorcycleFill0Wght700Grad0Opsz48'
import IconMotorcycleFill1Wght100Grad0Opsz48 from '../components/MotorcycleFill1Wght100Grad0Opsz48'
import IconMotorcycleFill1Wght200Grad0Opsz48 from '../components/MotorcycleFill1Wght200Grad0Opsz48'
import IconMotorcycleFill1Wght300Grad0Opsz48 from '../components/MotorcycleFill1Wght300Grad0Opsz48'
import IconMotorcycleFill1Wght400Grad0Opsz48 from '../components/MotorcycleFill1Wght400Grad0Opsz48'
import IconMotorcycleFill1Wght500Grad0Opsz48 from '../components/MotorcycleFill1Wght500Grad0Opsz48'
import IconMotorcycleFill1Wght600Grad0Opsz48 from '../components/MotorcycleFill1Wght600Grad0Opsz48'
import IconMotorcycleFill1Wght700Grad0Opsz48 from '../components/MotorcycleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotorcycle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotorcycleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotorcycleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotorcycleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotorcycleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotorcycleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotorcycleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotorcycleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotorcycleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotorcycleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotorcycleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotorcycleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotorcycleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotorcycleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotorcycleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
