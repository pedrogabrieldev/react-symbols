import IconKeyboardDoubleArrowUpFill0Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill0Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill0Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill0Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill0Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill0Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill0Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill0Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill0Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill0Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill0Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill0Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill0Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill0Wght700Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill1Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill1Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill1Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill1Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill1Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill1Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill1Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill1Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill1Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill1Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill1Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill1Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowUpFill1Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardDoubleArrowUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardDoubleArrowUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardDoubleArrowUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardDoubleArrowUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardDoubleArrowUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardDoubleArrowUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardDoubleArrowUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardDoubleArrowUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardDoubleArrowUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardDoubleArrowUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardDoubleArrowUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardDoubleArrowUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardDoubleArrowUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardDoubleArrowUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardDoubleArrowUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
