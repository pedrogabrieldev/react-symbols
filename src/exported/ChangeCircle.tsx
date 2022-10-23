import IconChangeCircleFill0Wght100Grad0Opsz48 from '../components/ChangeCircleFill0Wght100Grad0Opsz48'
import IconChangeCircleFill0Wght200Grad0Opsz48 from '../components/ChangeCircleFill0Wght200Grad0Opsz48'
import IconChangeCircleFill0Wght300Grad0Opsz48 from '../components/ChangeCircleFill0Wght300Grad0Opsz48'
import IconChangeCircleFill0Wght400Grad0Opsz48 from '../components/ChangeCircleFill0Wght400Grad0Opsz48'
import IconChangeCircleFill0Wght500Grad0Opsz48 from '../components/ChangeCircleFill0Wght500Grad0Opsz48'
import IconChangeCircleFill0Wght600Grad0Opsz48 from '../components/ChangeCircleFill0Wght600Grad0Opsz48'
import IconChangeCircleFill0Wght700Grad0Opsz48 from '../components/ChangeCircleFill0Wght700Grad0Opsz48'
import IconChangeCircleFill1Wght100Grad0Opsz48 from '../components/ChangeCircleFill1Wght100Grad0Opsz48'
import IconChangeCircleFill1Wght200Grad0Opsz48 from '../components/ChangeCircleFill1Wght200Grad0Opsz48'
import IconChangeCircleFill1Wght300Grad0Opsz48 from '../components/ChangeCircleFill1Wght300Grad0Opsz48'
import IconChangeCircleFill1Wght400Grad0Opsz48 from '../components/ChangeCircleFill1Wght400Grad0Opsz48'
import IconChangeCircleFill1Wght500Grad0Opsz48 from '../components/ChangeCircleFill1Wght500Grad0Opsz48'
import IconChangeCircleFill1Wght600Grad0Opsz48 from '../components/ChangeCircleFill1Wght600Grad0Opsz48'
import IconChangeCircleFill1Wght700Grad0Opsz48 from '../components/ChangeCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChangeCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChangeCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChangeCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChangeCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChangeCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChangeCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChangeCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChangeCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChangeCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChangeCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChangeCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChangeCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChangeCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChangeCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChangeCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
