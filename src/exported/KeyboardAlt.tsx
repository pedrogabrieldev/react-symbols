import IconKeyboardAltFill0Wght100Grad0Opsz48 from '../components/KeyboardAltFill0Wght100Grad0Opsz48'
import IconKeyboardAltFill0Wght200Grad0Opsz48 from '../components/KeyboardAltFill0Wght200Grad0Opsz48'
import IconKeyboardAltFill0Wght300Grad0Opsz48 from '../components/KeyboardAltFill0Wght300Grad0Opsz48'
import IconKeyboardAltFill0Wght400Grad0Opsz48 from '../components/KeyboardAltFill0Wght400Grad0Opsz48'
import IconKeyboardAltFill0Wght500Grad0Opsz48 from '../components/KeyboardAltFill0Wght500Grad0Opsz48'
import IconKeyboardAltFill0Wght600Grad0Opsz48 from '../components/KeyboardAltFill0Wght600Grad0Opsz48'
import IconKeyboardAltFill0Wght700Grad0Opsz48 from '../components/KeyboardAltFill0Wght700Grad0Opsz48'
import IconKeyboardAltFill1Wght100Grad0Opsz48 from '../components/KeyboardAltFill1Wght100Grad0Opsz48'
import IconKeyboardAltFill1Wght200Grad0Opsz48 from '../components/KeyboardAltFill1Wght200Grad0Opsz48'
import IconKeyboardAltFill1Wght300Grad0Opsz48 from '../components/KeyboardAltFill1Wght300Grad0Opsz48'
import IconKeyboardAltFill1Wght400Grad0Opsz48 from '../components/KeyboardAltFill1Wght400Grad0Opsz48'
import IconKeyboardAltFill1Wght500Grad0Opsz48 from '../components/KeyboardAltFill1Wght500Grad0Opsz48'
import IconKeyboardAltFill1Wght600Grad0Opsz48 from '../components/KeyboardAltFill1Wght600Grad0Opsz48'
import IconKeyboardAltFill1Wght700Grad0Opsz48 from '../components/KeyboardAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
