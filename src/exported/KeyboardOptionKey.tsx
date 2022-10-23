import IconKeyboardOptionKeyFill0Wght100Grad0Opsz48 from '../components/KeyboardOptionKeyFill0Wght100Grad0Opsz48'
import IconKeyboardOptionKeyFill0Wght200Grad0Opsz48 from '../components/KeyboardOptionKeyFill0Wght200Grad0Opsz48'
import IconKeyboardOptionKeyFill0Wght300Grad0Opsz48 from '../components/KeyboardOptionKeyFill0Wght300Grad0Opsz48'
import IconKeyboardOptionKeyFill0Wght400Grad0Opsz48 from '../components/KeyboardOptionKeyFill0Wght400Grad0Opsz48'
import IconKeyboardOptionKeyFill0Wght500Grad0Opsz48 from '../components/KeyboardOptionKeyFill0Wght500Grad0Opsz48'
import IconKeyboardOptionKeyFill0Wght600Grad0Opsz48 from '../components/KeyboardOptionKeyFill0Wght600Grad0Opsz48'
import IconKeyboardOptionKeyFill0Wght700Grad0Opsz48 from '../components/KeyboardOptionKeyFill0Wght700Grad0Opsz48'
import IconKeyboardOptionKeyFill1Wght100Grad0Opsz48 from '../components/KeyboardOptionKeyFill1Wght100Grad0Opsz48'
import IconKeyboardOptionKeyFill1Wght200Grad0Opsz48 from '../components/KeyboardOptionKeyFill1Wght200Grad0Opsz48'
import IconKeyboardOptionKeyFill1Wght300Grad0Opsz48 from '../components/KeyboardOptionKeyFill1Wght300Grad0Opsz48'
import IconKeyboardOptionKeyFill1Wght400Grad0Opsz48 from '../components/KeyboardOptionKeyFill1Wght400Grad0Opsz48'
import IconKeyboardOptionKeyFill1Wght500Grad0Opsz48 from '../components/KeyboardOptionKeyFill1Wght500Grad0Opsz48'
import IconKeyboardOptionKeyFill1Wght600Grad0Opsz48 from '../components/KeyboardOptionKeyFill1Wght600Grad0Opsz48'
import IconKeyboardOptionKeyFill1Wght700Grad0Opsz48 from '../components/KeyboardOptionKeyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardOptionKey = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardOptionKeyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardOptionKeyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardOptionKeyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardOptionKeyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardOptionKeyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardOptionKeyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardOptionKeyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardOptionKeyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardOptionKeyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardOptionKeyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardOptionKeyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardOptionKeyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardOptionKeyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardOptionKeyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
