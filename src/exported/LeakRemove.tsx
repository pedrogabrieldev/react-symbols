import IconLeakRemoveFill0Wght100Grad0Opsz48 from '../components/LeakRemoveFill0Wght100Grad0Opsz48'
import IconLeakRemoveFill0Wght200Grad0Opsz48 from '../components/LeakRemoveFill0Wght200Grad0Opsz48'
import IconLeakRemoveFill0Wght300Grad0Opsz48 from '../components/LeakRemoveFill0Wght300Grad0Opsz48'
import IconLeakRemoveFill0Wght400Grad0Opsz48 from '../components/LeakRemoveFill0Wght400Grad0Opsz48'
import IconLeakRemoveFill0Wght500Grad0Opsz48 from '../components/LeakRemoveFill0Wght500Grad0Opsz48'
import IconLeakRemoveFill0Wght600Grad0Opsz48 from '../components/LeakRemoveFill0Wght600Grad0Opsz48'
import IconLeakRemoveFill0Wght700Grad0Opsz48 from '../components/LeakRemoveFill0Wght700Grad0Opsz48'
import IconLeakRemoveFill1Wght100Grad0Opsz48 from '../components/LeakRemoveFill1Wght100Grad0Opsz48'
import IconLeakRemoveFill1Wght200Grad0Opsz48 from '../components/LeakRemoveFill1Wght200Grad0Opsz48'
import IconLeakRemoveFill1Wght300Grad0Opsz48 from '../components/LeakRemoveFill1Wght300Grad0Opsz48'
import IconLeakRemoveFill1Wght400Grad0Opsz48 from '../components/LeakRemoveFill1Wght400Grad0Opsz48'
import IconLeakRemoveFill1Wght500Grad0Opsz48 from '../components/LeakRemoveFill1Wght500Grad0Opsz48'
import IconLeakRemoveFill1Wght600Grad0Opsz48 from '../components/LeakRemoveFill1Wght600Grad0Opsz48'
import IconLeakRemoveFill1Wght700Grad0Opsz48 from '../components/LeakRemoveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLeakRemove = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLeakRemoveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLeakRemoveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLeakRemoveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLeakRemoveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLeakRemoveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLeakRemoveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLeakRemoveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLeakRemoveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLeakRemoveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLeakRemoveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLeakRemoveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLeakRemoveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLeakRemoveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLeakRemoveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
