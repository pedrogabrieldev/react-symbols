import IconKeyboardArrowLeftFill0Wght100Grad0Opsz48 from '../components/KeyboardArrowLeftFill0Wght100Grad0Opsz48'
import IconKeyboardArrowLeftFill0Wght200Grad0Opsz48 from '../components/KeyboardArrowLeftFill0Wght200Grad0Opsz48'
import IconKeyboardArrowLeftFill0Wght300Grad0Opsz48 from '../components/KeyboardArrowLeftFill0Wght300Grad0Opsz48'
import IconKeyboardArrowLeftFill0Wght400Grad0Opsz48 from '../components/KeyboardArrowLeftFill0Wght400Grad0Opsz48'
import IconKeyboardArrowLeftFill0Wght500Grad0Opsz48 from '../components/KeyboardArrowLeftFill0Wght500Grad0Opsz48'
import IconKeyboardArrowLeftFill0Wght600Grad0Opsz48 from '../components/KeyboardArrowLeftFill0Wght600Grad0Opsz48'
import IconKeyboardArrowLeftFill0Wght700Grad0Opsz48 from '../components/KeyboardArrowLeftFill0Wght700Grad0Opsz48'
import IconKeyboardArrowLeftFill1Wght100Grad0Opsz48 from '../components/KeyboardArrowLeftFill1Wght100Grad0Opsz48'
import IconKeyboardArrowLeftFill1Wght200Grad0Opsz48 from '../components/KeyboardArrowLeftFill1Wght200Grad0Opsz48'
import IconKeyboardArrowLeftFill1Wght300Grad0Opsz48 from '../components/KeyboardArrowLeftFill1Wght300Grad0Opsz48'
import IconKeyboardArrowLeftFill1Wght400Grad0Opsz48 from '../components/KeyboardArrowLeftFill1Wght400Grad0Opsz48'
import IconKeyboardArrowLeftFill1Wght500Grad0Opsz48 from '../components/KeyboardArrowLeftFill1Wght500Grad0Opsz48'
import IconKeyboardArrowLeftFill1Wght600Grad0Opsz48 from '../components/KeyboardArrowLeftFill1Wght600Grad0Opsz48'
import IconKeyboardArrowLeftFill1Wght700Grad0Opsz48 from '../components/KeyboardArrowLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardArrowLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardArrowLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardArrowLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardArrowLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardArrowLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardArrowLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardArrowLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardArrowLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardArrowLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardArrowLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardArrowLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardArrowLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardArrowLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardArrowLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardArrowLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
