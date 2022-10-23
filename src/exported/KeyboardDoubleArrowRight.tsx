import IconKeyboardDoubleArrowRightFill0Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill0Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill0Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill0Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill0Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill0Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill0Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill0Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill0Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill0Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill0Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill0Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill0Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill0Wght700Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill1Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill1Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill1Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill1Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill1Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill1Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill1Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill1Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill1Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill1Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill1Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill1Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowRightFill1Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardDoubleArrowRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardDoubleArrowRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardDoubleArrowRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardDoubleArrowRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardDoubleArrowRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardDoubleArrowRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardDoubleArrowRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardDoubleArrowRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardDoubleArrowRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardDoubleArrowRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardDoubleArrowRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardDoubleArrowRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardDoubleArrowRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardDoubleArrowRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardDoubleArrowRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
