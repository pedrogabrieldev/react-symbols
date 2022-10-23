import IconKeyboardTabFill0Wght100Grad0Opsz48 from '../components/KeyboardTabFill0Wght100Grad0Opsz48'
import IconKeyboardTabFill0Wght200Grad0Opsz48 from '../components/KeyboardTabFill0Wght200Grad0Opsz48'
import IconKeyboardTabFill0Wght300Grad0Opsz48 from '../components/KeyboardTabFill0Wght300Grad0Opsz48'
import IconKeyboardTabFill0Wght400Grad0Opsz48 from '../components/KeyboardTabFill0Wght400Grad0Opsz48'
import IconKeyboardTabFill0Wght500Grad0Opsz48 from '../components/KeyboardTabFill0Wght500Grad0Opsz48'
import IconKeyboardTabFill0Wght600Grad0Opsz48 from '../components/KeyboardTabFill0Wght600Grad0Opsz48'
import IconKeyboardTabFill0Wght700Grad0Opsz48 from '../components/KeyboardTabFill0Wght700Grad0Opsz48'
import IconKeyboardTabFill1Wght100Grad0Opsz48 from '../components/KeyboardTabFill1Wght100Grad0Opsz48'
import IconKeyboardTabFill1Wght200Grad0Opsz48 from '../components/KeyboardTabFill1Wght200Grad0Opsz48'
import IconKeyboardTabFill1Wght300Grad0Opsz48 from '../components/KeyboardTabFill1Wght300Grad0Opsz48'
import IconKeyboardTabFill1Wght400Grad0Opsz48 from '../components/KeyboardTabFill1Wght400Grad0Opsz48'
import IconKeyboardTabFill1Wght500Grad0Opsz48 from '../components/KeyboardTabFill1Wght500Grad0Opsz48'
import IconKeyboardTabFill1Wght600Grad0Opsz48 from '../components/KeyboardTabFill1Wght600Grad0Opsz48'
import IconKeyboardTabFill1Wght700Grad0Opsz48 from '../components/KeyboardTabFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardTab = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardTabFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardTabFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardTabFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardTabFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardTabFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardTabFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardTabFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardTabFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardTabFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardTabFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardTabFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardTabFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardTabFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardTabFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
