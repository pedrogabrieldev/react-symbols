import IconKeyboardCapslockFill0Wght100Grad0Opsz48 from '../components/KeyboardCapslockFill0Wght100Grad0Opsz48'
import IconKeyboardCapslockFill0Wght200Grad0Opsz48 from '../components/KeyboardCapslockFill0Wght200Grad0Opsz48'
import IconKeyboardCapslockFill0Wght300Grad0Opsz48 from '../components/KeyboardCapslockFill0Wght300Grad0Opsz48'
import IconKeyboardCapslockFill0Wght400Grad0Opsz48 from '../components/KeyboardCapslockFill0Wght400Grad0Opsz48'
import IconKeyboardCapslockFill0Wght500Grad0Opsz48 from '../components/KeyboardCapslockFill0Wght500Grad0Opsz48'
import IconKeyboardCapslockFill0Wght600Grad0Opsz48 from '../components/KeyboardCapslockFill0Wght600Grad0Opsz48'
import IconKeyboardCapslockFill0Wght700Grad0Opsz48 from '../components/KeyboardCapslockFill0Wght700Grad0Opsz48'
import IconKeyboardCapslockFill1Wght100Grad0Opsz48 from '../components/KeyboardCapslockFill1Wght100Grad0Opsz48'
import IconKeyboardCapslockFill1Wght200Grad0Opsz48 from '../components/KeyboardCapslockFill1Wght200Grad0Opsz48'
import IconKeyboardCapslockFill1Wght300Grad0Opsz48 from '../components/KeyboardCapslockFill1Wght300Grad0Opsz48'
import IconKeyboardCapslockFill1Wght400Grad0Opsz48 from '../components/KeyboardCapslockFill1Wght400Grad0Opsz48'
import IconKeyboardCapslockFill1Wght500Grad0Opsz48 from '../components/KeyboardCapslockFill1Wght500Grad0Opsz48'
import IconKeyboardCapslockFill1Wght600Grad0Opsz48 from '../components/KeyboardCapslockFill1Wght600Grad0Opsz48'
import IconKeyboardCapslockFill1Wght700Grad0Opsz48 from '../components/KeyboardCapslockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardCapslock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardCapslockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardCapslockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardCapslockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardCapslockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardCapslockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardCapslockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardCapslockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardCapslockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardCapslockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardCapslockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardCapslockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardCapslockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardCapslockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardCapslockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
