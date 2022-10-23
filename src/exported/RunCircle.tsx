import IconRunCircleFill0Wght100Grad0Opsz48 from '../components/RunCircleFill0Wght100Grad0Opsz48'
import IconRunCircleFill0Wght200Grad0Opsz48 from '../components/RunCircleFill0Wght200Grad0Opsz48'
import IconRunCircleFill0Wght300Grad0Opsz48 from '../components/RunCircleFill0Wght300Grad0Opsz48'
import IconRunCircleFill0Wght400Grad0Opsz48 from '../components/RunCircleFill0Wght400Grad0Opsz48'
import IconRunCircleFill0Wght500Grad0Opsz48 from '../components/RunCircleFill0Wght500Grad0Opsz48'
import IconRunCircleFill0Wght600Grad0Opsz48 from '../components/RunCircleFill0Wght600Grad0Opsz48'
import IconRunCircleFill0Wght700Grad0Opsz48 from '../components/RunCircleFill0Wght700Grad0Opsz48'
import IconRunCircleFill1Wght100Grad0Opsz48 from '../components/RunCircleFill1Wght100Grad0Opsz48'
import IconRunCircleFill1Wght200Grad0Opsz48 from '../components/RunCircleFill1Wght200Grad0Opsz48'
import IconRunCircleFill1Wght300Grad0Opsz48 from '../components/RunCircleFill1Wght300Grad0Opsz48'
import IconRunCircleFill1Wght400Grad0Opsz48 from '../components/RunCircleFill1Wght400Grad0Opsz48'
import IconRunCircleFill1Wght500Grad0Opsz48 from '../components/RunCircleFill1Wght500Grad0Opsz48'
import IconRunCircleFill1Wght600Grad0Opsz48 from '../components/RunCircleFill1Wght600Grad0Opsz48'
import IconRunCircleFill1Wght700Grad0Opsz48 from '../components/RunCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRunCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRunCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRunCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRunCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRunCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRunCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRunCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRunCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRunCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRunCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRunCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRunCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRunCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRunCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRunCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
