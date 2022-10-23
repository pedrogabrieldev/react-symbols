import IconKeyboardCommandKeyFill0Wght100Grad0Opsz48 from '../components/KeyboardCommandKeyFill0Wght100Grad0Opsz48'
import IconKeyboardCommandKeyFill0Wght200Grad0Opsz48 from '../components/KeyboardCommandKeyFill0Wght200Grad0Opsz48'
import IconKeyboardCommandKeyFill0Wght300Grad0Opsz48 from '../components/KeyboardCommandKeyFill0Wght300Grad0Opsz48'
import IconKeyboardCommandKeyFill0Wght400Grad0Opsz48 from '../components/KeyboardCommandKeyFill0Wght400Grad0Opsz48'
import IconKeyboardCommandKeyFill0Wght500Grad0Opsz48 from '../components/KeyboardCommandKeyFill0Wght500Grad0Opsz48'
import IconKeyboardCommandKeyFill0Wght600Grad0Opsz48 from '../components/KeyboardCommandKeyFill0Wght600Grad0Opsz48'
import IconKeyboardCommandKeyFill0Wght700Grad0Opsz48 from '../components/KeyboardCommandKeyFill0Wght700Grad0Opsz48'
import IconKeyboardCommandKeyFill1Wght100Grad0Opsz48 from '../components/KeyboardCommandKeyFill1Wght100Grad0Opsz48'
import IconKeyboardCommandKeyFill1Wght200Grad0Opsz48 from '../components/KeyboardCommandKeyFill1Wght200Grad0Opsz48'
import IconKeyboardCommandKeyFill1Wght300Grad0Opsz48 from '../components/KeyboardCommandKeyFill1Wght300Grad0Opsz48'
import IconKeyboardCommandKeyFill1Wght400Grad0Opsz48 from '../components/KeyboardCommandKeyFill1Wght400Grad0Opsz48'
import IconKeyboardCommandKeyFill1Wght500Grad0Opsz48 from '../components/KeyboardCommandKeyFill1Wght500Grad0Opsz48'
import IconKeyboardCommandKeyFill1Wght600Grad0Opsz48 from '../components/KeyboardCommandKeyFill1Wght600Grad0Opsz48'
import IconKeyboardCommandKeyFill1Wght700Grad0Opsz48 from '../components/KeyboardCommandKeyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardCommandKey = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardCommandKeyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardCommandKeyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardCommandKeyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardCommandKeyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardCommandKeyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardCommandKeyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardCommandKeyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardCommandKeyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardCommandKeyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardCommandKeyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardCommandKeyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardCommandKeyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardCommandKeyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardCommandKeyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
