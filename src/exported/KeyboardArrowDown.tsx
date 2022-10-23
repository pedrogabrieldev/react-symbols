import IconKeyboardArrowDownFill0Wght100Grad0Opsz48 from '../components/KeyboardArrowDownFill0Wght100Grad0Opsz48'
import IconKeyboardArrowDownFill0Wght200Grad0Opsz48 from '../components/KeyboardArrowDownFill0Wght200Grad0Opsz48'
import IconKeyboardArrowDownFill0Wght300Grad0Opsz48 from '../components/KeyboardArrowDownFill0Wght300Grad0Opsz48'
import IconKeyboardArrowDownFill0Wght400Grad0Opsz48 from '../components/KeyboardArrowDownFill0Wght400Grad0Opsz48'
import IconKeyboardArrowDownFill0Wght500Grad0Opsz48 from '../components/KeyboardArrowDownFill0Wght500Grad0Opsz48'
import IconKeyboardArrowDownFill0Wght600Grad0Opsz48 from '../components/KeyboardArrowDownFill0Wght600Grad0Opsz48'
import IconKeyboardArrowDownFill0Wght700Grad0Opsz48 from '../components/KeyboardArrowDownFill0Wght700Grad0Opsz48'
import IconKeyboardArrowDownFill1Wght100Grad0Opsz48 from '../components/KeyboardArrowDownFill1Wght100Grad0Opsz48'
import IconKeyboardArrowDownFill1Wght200Grad0Opsz48 from '../components/KeyboardArrowDownFill1Wght200Grad0Opsz48'
import IconKeyboardArrowDownFill1Wght300Grad0Opsz48 from '../components/KeyboardArrowDownFill1Wght300Grad0Opsz48'
import IconKeyboardArrowDownFill1Wght400Grad0Opsz48 from '../components/KeyboardArrowDownFill1Wght400Grad0Opsz48'
import IconKeyboardArrowDownFill1Wght500Grad0Opsz48 from '../components/KeyboardArrowDownFill1Wght500Grad0Opsz48'
import IconKeyboardArrowDownFill1Wght600Grad0Opsz48 from '../components/KeyboardArrowDownFill1Wght600Grad0Opsz48'
import IconKeyboardArrowDownFill1Wght700Grad0Opsz48 from '../components/KeyboardArrowDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardArrowDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardArrowDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardArrowDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardArrowDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardArrowDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardArrowDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardArrowDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardArrowDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardArrowDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardArrowDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardArrowDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardArrowDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardArrowDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardArrowDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardArrowDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
