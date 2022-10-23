import IconRoutineFill0Wght100Grad0Opsz48 from '../components/RoutineFill0Wght100Grad0Opsz48'
import IconRoutineFill0Wght200Grad0Opsz48 from '../components/RoutineFill0Wght200Grad0Opsz48'
import IconRoutineFill0Wght300Grad0Opsz48 from '../components/RoutineFill0Wght300Grad0Opsz48'
import IconRoutineFill0Wght400Grad0Opsz48 from '../components/RoutineFill0Wght400Grad0Opsz48'
import IconRoutineFill0Wght500Grad0Opsz48 from '../components/RoutineFill0Wght500Grad0Opsz48'
import IconRoutineFill0Wght600Grad0Opsz48 from '../components/RoutineFill0Wght600Grad0Opsz48'
import IconRoutineFill0Wght700Grad0Opsz48 from '../components/RoutineFill0Wght700Grad0Opsz48'
import IconRoutineFill1Wght100Grad0Opsz48 from '../components/RoutineFill1Wght100Grad0Opsz48'
import IconRoutineFill1Wght200Grad0Opsz48 from '../components/RoutineFill1Wght200Grad0Opsz48'
import IconRoutineFill1Wght300Grad0Opsz48 from '../components/RoutineFill1Wght300Grad0Opsz48'
import IconRoutineFill1Wght400Grad0Opsz48 from '../components/RoutineFill1Wght400Grad0Opsz48'
import IconRoutineFill1Wght500Grad0Opsz48 from '../components/RoutineFill1Wght500Grad0Opsz48'
import IconRoutineFill1Wght600Grad0Opsz48 from '../components/RoutineFill1Wght600Grad0Opsz48'
import IconRoutineFill1Wght700Grad0Opsz48 from '../components/RoutineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoutine = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRoutineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRoutineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRoutineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRoutineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRoutineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRoutineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRoutineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRoutineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRoutineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRoutineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRoutineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRoutineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRoutineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRoutineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
