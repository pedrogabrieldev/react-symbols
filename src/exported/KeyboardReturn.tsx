import IconKeyboardReturnFill0Wght100Grad0Opsz48 from '../components/KeyboardReturnFill0Wght100Grad0Opsz48'
import IconKeyboardReturnFill0Wght200Grad0Opsz48 from '../components/KeyboardReturnFill0Wght200Grad0Opsz48'
import IconKeyboardReturnFill0Wght300Grad0Opsz48 from '../components/KeyboardReturnFill0Wght300Grad0Opsz48'
import IconKeyboardReturnFill0Wght400Grad0Opsz48 from '../components/KeyboardReturnFill0Wght400Grad0Opsz48'
import IconKeyboardReturnFill0Wght500Grad0Opsz48 from '../components/KeyboardReturnFill0Wght500Grad0Opsz48'
import IconKeyboardReturnFill0Wght600Grad0Opsz48 from '../components/KeyboardReturnFill0Wght600Grad0Opsz48'
import IconKeyboardReturnFill0Wght700Grad0Opsz48 from '../components/KeyboardReturnFill0Wght700Grad0Opsz48'
import IconKeyboardReturnFill1Wght100Grad0Opsz48 from '../components/KeyboardReturnFill1Wght100Grad0Opsz48'
import IconKeyboardReturnFill1Wght200Grad0Opsz48 from '../components/KeyboardReturnFill1Wght200Grad0Opsz48'
import IconKeyboardReturnFill1Wght300Grad0Opsz48 from '../components/KeyboardReturnFill1Wght300Grad0Opsz48'
import IconKeyboardReturnFill1Wght400Grad0Opsz48 from '../components/KeyboardReturnFill1Wght400Grad0Opsz48'
import IconKeyboardReturnFill1Wght500Grad0Opsz48 from '../components/KeyboardReturnFill1Wght500Grad0Opsz48'
import IconKeyboardReturnFill1Wght600Grad0Opsz48 from '../components/KeyboardReturnFill1Wght600Grad0Opsz48'
import IconKeyboardReturnFill1Wght700Grad0Opsz48 from '../components/KeyboardReturnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardReturn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardReturnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardReturnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardReturnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardReturnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardReturnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardReturnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardReturnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardReturnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardReturnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardReturnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardReturnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardReturnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardReturnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardReturnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
