import Icon3DRotationFill0Wght100Grad0Opsz48 from '../components/3DRotationFill0Wght100Grad0Opsz48'
import Icon3DRotationFill0Wght200Grad0Opsz48 from '../components/3DRotationFill0Wght200Grad0Opsz48'
import Icon3DRotationFill0Wght300Grad0Opsz48 from '../components/3DRotationFill0Wght300Grad0Opsz48'
import Icon3DRotationFill0Wght400Grad0Opsz48 from '../components/3DRotationFill0Wght400Grad0Opsz48'
import Icon3DRotationFill0Wght500Grad0Opsz48 from '../components/3DRotationFill0Wght500Grad0Opsz48'
import Icon3DRotationFill0Wght600Grad0Opsz48 from '../components/3DRotationFill0Wght600Grad0Opsz48'
import Icon3DRotationFill0Wght700Grad0Opsz48 from '../components/3DRotationFill0Wght700Grad0Opsz48'
import Icon3DRotationFill1Wght100Grad0Opsz48 from '../components/3DRotationFill1Wght100Grad0Opsz48'
import Icon3DRotationFill1Wght200Grad0Opsz48 from '../components/3DRotationFill1Wght200Grad0Opsz48'
import Icon3DRotationFill1Wght300Grad0Opsz48 from '../components/3DRotationFill1Wght300Grad0Opsz48'
import Icon3DRotationFill1Wght400Grad0Opsz48 from '../components/3DRotationFill1Wght400Grad0Opsz48'
import Icon3DRotationFill1Wght500Grad0Opsz48 from '../components/3DRotationFill1Wght500Grad0Opsz48'
import Icon3DRotationFill1Wght600Grad0Opsz48 from '../components/3DRotationFill1Wght600Grad0Opsz48'
import Icon3DRotationFill1Wght700Grad0Opsz48 from '../components/3DRotationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon3DRotation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon3DRotationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon3DRotationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon3DRotationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon3DRotationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon3DRotationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon3DRotationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon3DRotationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon3DRotationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon3DRotationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon3DRotationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon3DRotationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon3DRotationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon3DRotationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon3DRotationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
