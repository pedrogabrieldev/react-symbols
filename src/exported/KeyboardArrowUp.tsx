import IconKeyboardArrowUpFill0Wght100Grad0Opsz48 from '../components/KeyboardArrowUpFill0Wght100Grad0Opsz48'
import IconKeyboardArrowUpFill0Wght200Grad0Opsz48 from '../components/KeyboardArrowUpFill0Wght200Grad0Opsz48'
import IconKeyboardArrowUpFill0Wght300Grad0Opsz48 from '../components/KeyboardArrowUpFill0Wght300Grad0Opsz48'
import IconKeyboardArrowUpFill0Wght400Grad0Opsz48 from '../components/KeyboardArrowUpFill0Wght400Grad0Opsz48'
import IconKeyboardArrowUpFill0Wght500Grad0Opsz48 from '../components/KeyboardArrowUpFill0Wght500Grad0Opsz48'
import IconKeyboardArrowUpFill0Wght600Grad0Opsz48 from '../components/KeyboardArrowUpFill0Wght600Grad0Opsz48'
import IconKeyboardArrowUpFill0Wght700Grad0Opsz48 from '../components/KeyboardArrowUpFill0Wght700Grad0Opsz48'
import IconKeyboardArrowUpFill1Wght100Grad0Opsz48 from '../components/KeyboardArrowUpFill1Wght100Grad0Opsz48'
import IconKeyboardArrowUpFill1Wght200Grad0Opsz48 from '../components/KeyboardArrowUpFill1Wght200Grad0Opsz48'
import IconKeyboardArrowUpFill1Wght300Grad0Opsz48 from '../components/KeyboardArrowUpFill1Wght300Grad0Opsz48'
import IconKeyboardArrowUpFill1Wght400Grad0Opsz48 from '../components/KeyboardArrowUpFill1Wght400Grad0Opsz48'
import IconKeyboardArrowUpFill1Wght500Grad0Opsz48 from '../components/KeyboardArrowUpFill1Wght500Grad0Opsz48'
import IconKeyboardArrowUpFill1Wght600Grad0Opsz48 from '../components/KeyboardArrowUpFill1Wght600Grad0Opsz48'
import IconKeyboardArrowUpFill1Wght700Grad0Opsz48 from '../components/KeyboardArrowUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardArrowUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardArrowUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardArrowUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardArrowUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardArrowUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardArrowUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardArrowUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardArrowUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardArrowUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardArrowUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardArrowUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardArrowUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardArrowUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardArrowUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardArrowUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
