import IconKeyboardDoubleArrowLeftFill0Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill0Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill0Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill0Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill0Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill0Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill0Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill0Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill0Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill0Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill0Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill0Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill0Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill0Wght700Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill1Wght100Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill1Wght100Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill1Wght200Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill1Wght200Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill1Wght300Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill1Wght300Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill1Wght400Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill1Wght400Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill1Wght500Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill1Wght500Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill1Wght600Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill1Wght600Grad0Opsz48'
import IconKeyboardDoubleArrowLeftFill1Wght700Grad0Opsz48 from '../components/KeyboardDoubleArrowLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardDoubleArrowLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardDoubleArrowLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardDoubleArrowLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardDoubleArrowLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardDoubleArrowLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardDoubleArrowLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardDoubleArrowLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardDoubleArrowLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardDoubleArrowLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardDoubleArrowLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardDoubleArrowLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardDoubleArrowLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardDoubleArrowLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardDoubleArrowLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardDoubleArrowLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
