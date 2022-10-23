import IconKeyboardControlKeyFill0Wght100Grad0Opsz48 from '../components/KeyboardControlKeyFill0Wght100Grad0Opsz48'
import IconKeyboardControlKeyFill0Wght200Grad0Opsz48 from '../components/KeyboardControlKeyFill0Wght200Grad0Opsz48'
import IconKeyboardControlKeyFill0Wght300Grad0Opsz48 from '../components/KeyboardControlKeyFill0Wght300Grad0Opsz48'
import IconKeyboardControlKeyFill0Wght400Grad0Opsz48 from '../components/KeyboardControlKeyFill0Wght400Grad0Opsz48'
import IconKeyboardControlKeyFill0Wght500Grad0Opsz48 from '../components/KeyboardControlKeyFill0Wght500Grad0Opsz48'
import IconKeyboardControlKeyFill0Wght600Grad0Opsz48 from '../components/KeyboardControlKeyFill0Wght600Grad0Opsz48'
import IconKeyboardControlKeyFill0Wght700Grad0Opsz48 from '../components/KeyboardControlKeyFill0Wght700Grad0Opsz48'
import IconKeyboardControlKeyFill1Wght100Grad0Opsz48 from '../components/KeyboardControlKeyFill1Wght100Grad0Opsz48'
import IconKeyboardControlKeyFill1Wght200Grad0Opsz48 from '../components/KeyboardControlKeyFill1Wght200Grad0Opsz48'
import IconKeyboardControlKeyFill1Wght300Grad0Opsz48 from '../components/KeyboardControlKeyFill1Wght300Grad0Opsz48'
import IconKeyboardControlKeyFill1Wght400Grad0Opsz48 from '../components/KeyboardControlKeyFill1Wght400Grad0Opsz48'
import IconKeyboardControlKeyFill1Wght500Grad0Opsz48 from '../components/KeyboardControlKeyFill1Wght500Grad0Opsz48'
import IconKeyboardControlKeyFill1Wght600Grad0Opsz48 from '../components/KeyboardControlKeyFill1Wght600Grad0Opsz48'
import IconKeyboardControlKeyFill1Wght700Grad0Opsz48 from '../components/KeyboardControlKeyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardControlKey = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardControlKeyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardControlKeyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardControlKeyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardControlKeyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardControlKeyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardControlKeyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardControlKeyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardControlKeyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardControlKeyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardControlKeyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardControlKeyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardControlKeyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardControlKeyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardControlKeyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
