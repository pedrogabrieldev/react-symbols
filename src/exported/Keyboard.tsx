import IconKeyboardFill0Wght100Grad0Opsz48 from '../components/KeyboardFill0Wght100Grad0Opsz48'
import IconKeyboardFill0Wght200Grad0Opsz48 from '../components/KeyboardFill0Wght200Grad0Opsz48'
import IconKeyboardFill0Wght300Grad0Opsz48 from '../components/KeyboardFill0Wght300Grad0Opsz48'
import IconKeyboardFill0Wght400Grad0Opsz48 from '../components/KeyboardFill0Wght400Grad0Opsz48'
import IconKeyboardFill0Wght500Grad0Opsz48 from '../components/KeyboardFill0Wght500Grad0Opsz48'
import IconKeyboardFill0Wght600Grad0Opsz48 from '../components/KeyboardFill0Wght600Grad0Opsz48'
import IconKeyboardFill0Wght700Grad0Opsz48 from '../components/KeyboardFill0Wght700Grad0Opsz48'
import IconKeyboardFill1Wght100Grad0Opsz48 from '../components/KeyboardFill1Wght100Grad0Opsz48'
import IconKeyboardFill1Wght200Grad0Opsz48 from '../components/KeyboardFill1Wght200Grad0Opsz48'
import IconKeyboardFill1Wght300Grad0Opsz48 from '../components/KeyboardFill1Wght300Grad0Opsz48'
import IconKeyboardFill1Wght400Grad0Opsz48 from '../components/KeyboardFill1Wght400Grad0Opsz48'
import IconKeyboardFill1Wght500Grad0Opsz48 from '../components/KeyboardFill1Wght500Grad0Opsz48'
import IconKeyboardFill1Wght600Grad0Opsz48 from '../components/KeyboardFill1Wght600Grad0Opsz48'
import IconKeyboardFill1Wght700Grad0Opsz48 from '../components/KeyboardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
