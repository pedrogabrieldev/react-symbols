import IconKeyboardHideFill0Wght100Grad0Opsz48 from '../components/KeyboardHideFill0Wght100Grad0Opsz48'
import IconKeyboardHideFill0Wght200Grad0Opsz48 from '../components/KeyboardHideFill0Wght200Grad0Opsz48'
import IconKeyboardHideFill0Wght300Grad0Opsz48 from '../components/KeyboardHideFill0Wght300Grad0Opsz48'
import IconKeyboardHideFill0Wght400Grad0Opsz48 from '../components/KeyboardHideFill0Wght400Grad0Opsz48'
import IconKeyboardHideFill0Wght500Grad0Opsz48 from '../components/KeyboardHideFill0Wght500Grad0Opsz48'
import IconKeyboardHideFill0Wght600Grad0Opsz48 from '../components/KeyboardHideFill0Wght600Grad0Opsz48'
import IconKeyboardHideFill0Wght700Grad0Opsz48 from '../components/KeyboardHideFill0Wght700Grad0Opsz48'
import IconKeyboardHideFill1Wght100Grad0Opsz48 from '../components/KeyboardHideFill1Wght100Grad0Opsz48'
import IconKeyboardHideFill1Wght200Grad0Opsz48 from '../components/KeyboardHideFill1Wght200Grad0Opsz48'
import IconKeyboardHideFill1Wght300Grad0Opsz48 from '../components/KeyboardHideFill1Wght300Grad0Opsz48'
import IconKeyboardHideFill1Wght400Grad0Opsz48 from '../components/KeyboardHideFill1Wght400Grad0Opsz48'
import IconKeyboardHideFill1Wght500Grad0Opsz48 from '../components/KeyboardHideFill1Wght500Grad0Opsz48'
import IconKeyboardHideFill1Wght600Grad0Opsz48 from '../components/KeyboardHideFill1Wght600Grad0Opsz48'
import IconKeyboardHideFill1Wght700Grad0Opsz48 from '../components/KeyboardHideFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardHide = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardHideFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardHideFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardHideFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardHideFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardHideFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardHideFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardHideFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardHideFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardHideFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardHideFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardHideFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardHideFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardHideFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardHideFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
