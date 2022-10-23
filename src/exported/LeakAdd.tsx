import IconLeakAddFill0Wght100Grad0Opsz48 from '../components/LeakAddFill0Wght100Grad0Opsz48'
import IconLeakAddFill0Wght200Grad0Opsz48 from '../components/LeakAddFill0Wght200Grad0Opsz48'
import IconLeakAddFill0Wght300Grad0Opsz48 from '../components/LeakAddFill0Wght300Grad0Opsz48'
import IconLeakAddFill0Wght400Grad0Opsz48 from '../components/LeakAddFill0Wght400Grad0Opsz48'
import IconLeakAddFill0Wght500Grad0Opsz48 from '../components/LeakAddFill0Wght500Grad0Opsz48'
import IconLeakAddFill0Wght600Grad0Opsz48 from '../components/LeakAddFill0Wght600Grad0Opsz48'
import IconLeakAddFill0Wght700Grad0Opsz48 from '../components/LeakAddFill0Wght700Grad0Opsz48'
import IconLeakAddFill1Wght100Grad0Opsz48 from '../components/LeakAddFill1Wght100Grad0Opsz48'
import IconLeakAddFill1Wght200Grad0Opsz48 from '../components/LeakAddFill1Wght200Grad0Opsz48'
import IconLeakAddFill1Wght300Grad0Opsz48 from '../components/LeakAddFill1Wght300Grad0Opsz48'
import IconLeakAddFill1Wght400Grad0Opsz48 from '../components/LeakAddFill1Wght400Grad0Opsz48'
import IconLeakAddFill1Wght500Grad0Opsz48 from '../components/LeakAddFill1Wght500Grad0Opsz48'
import IconLeakAddFill1Wght600Grad0Opsz48 from '../components/LeakAddFill1Wght600Grad0Opsz48'
import IconLeakAddFill1Wght700Grad0Opsz48 from '../components/LeakAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLeakAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLeakAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLeakAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLeakAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLeakAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLeakAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLeakAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLeakAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLeakAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLeakAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLeakAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLeakAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLeakAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLeakAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLeakAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
