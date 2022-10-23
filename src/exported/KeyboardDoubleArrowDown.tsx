import IconKeyboardDoubleArrowDownFill0Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill0Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill0Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill0Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill0Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill0Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill0Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill0Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill0Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill0Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill0Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill0Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill0Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill0Wght700Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill1Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill1Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill1Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill1Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill1Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill1Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill1Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill1Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill1Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill1Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill1Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill1Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowDownFill1Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardDoubleArrowDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardDoubleArrowDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardDoubleArrowDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardDoubleArrowDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardDoubleArrowDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardDoubleArrowDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardDoubleArrowDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardDoubleArrowDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardDoubleArrowDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardDoubleArrowDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardDoubleArrowDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardDoubleArrowDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardDoubleArrowDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardDoubleArrowDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardDoubleArrowDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
