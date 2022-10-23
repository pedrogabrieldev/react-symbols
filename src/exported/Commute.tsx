import IconCommuteFill0Wght100Grad0Opsz48 from '../components/CommuteFill0Wght100Grad0Opsz48'
import IconCommuteFill0Wght200Grad0Opsz48 from '../components/CommuteFill0Wght200Grad0Opsz48'
import IconCommuteFill0Wght300Grad0Opsz48 from '../components/CommuteFill0Wght300Grad0Opsz48'
import IconCommuteFill0Wght400Grad0Opsz48 from '../components/CommuteFill0Wght400Grad0Opsz48'
import IconCommuteFill0Wght500Grad0Opsz48 from '../components/CommuteFill0Wght500Grad0Opsz48'
import IconCommuteFill0Wght600Grad0Opsz48 from '../components/CommuteFill0Wght600Grad0Opsz48'
import IconCommuteFill0Wght700Grad0Opsz48 from '../components/CommuteFill0Wght700Grad0Opsz48'
import IconCommuteFill1Wght100Grad0Opsz48 from '../components/CommuteFill1Wght100Grad0Opsz48'
import IconCommuteFill1Wght200Grad0Opsz48 from '../components/CommuteFill1Wght200Grad0Opsz48'
import IconCommuteFill1Wght300Grad0Opsz48 from '../components/CommuteFill1Wght300Grad0Opsz48'
import IconCommuteFill1Wght400Grad0Opsz48 from '../components/CommuteFill1Wght400Grad0Opsz48'
import IconCommuteFill1Wght500Grad0Opsz48 from '../components/CommuteFill1Wght500Grad0Opsz48'
import IconCommuteFill1Wght600Grad0Opsz48 from '../components/CommuteFill1Wght600Grad0Opsz48'
import IconCommuteFill1Wght700Grad0Opsz48 from '../components/CommuteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCommute = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCommuteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCommuteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCommuteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCommuteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCommuteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCommuteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCommuteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCommuteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCommuteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCommuteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCommuteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCommuteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCommuteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCommuteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
