import IconKeyboardBackspaceFill0Wght100Grad0Opsz48 from '../components/KeyboardBackspaceFill0Wght100Grad0Opsz48'
import IconKeyboardBackspaceFill0Wght200Grad0Opsz48 from '../components/KeyboardBackspaceFill0Wght200Grad0Opsz48'
import IconKeyboardBackspaceFill0Wght300Grad0Opsz48 from '../components/KeyboardBackspaceFill0Wght300Grad0Opsz48'
import IconKeyboardBackspaceFill0Wght400Grad0Opsz48 from '../components/KeyboardBackspaceFill0Wght400Grad0Opsz48'
import IconKeyboardBackspaceFill0Wght500Grad0Opsz48 from '../components/KeyboardBackspaceFill0Wght500Grad0Opsz48'
import IconKeyboardBackspaceFill0Wght600Grad0Opsz48 from '../components/KeyboardBackspaceFill0Wght600Grad0Opsz48'
import IconKeyboardBackspaceFill0Wght700Grad0Opsz48 from '../components/KeyboardBackspaceFill0Wght700Grad0Opsz48'
import IconKeyboardBackspaceFill1Wght100Grad0Opsz48 from '../components/KeyboardBackspaceFill1Wght100Grad0Opsz48'
import IconKeyboardBackspaceFill1Wght200Grad0Opsz48 from '../components/KeyboardBackspaceFill1Wght200Grad0Opsz48'
import IconKeyboardBackspaceFill1Wght300Grad0Opsz48 from '../components/KeyboardBackspaceFill1Wght300Grad0Opsz48'
import IconKeyboardBackspaceFill1Wght400Grad0Opsz48 from '../components/KeyboardBackspaceFill1Wght400Grad0Opsz48'
import IconKeyboardBackspaceFill1Wght500Grad0Opsz48 from '../components/KeyboardBackspaceFill1Wght500Grad0Opsz48'
import IconKeyboardBackspaceFill1Wght600Grad0Opsz48 from '../components/KeyboardBackspaceFill1Wght600Grad0Opsz48'
import IconKeyboardBackspaceFill1Wght700Grad0Opsz48 from '../components/KeyboardBackspaceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardBackspace = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardBackspaceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardBackspaceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardBackspaceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardBackspaceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardBackspaceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardBackspaceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardBackspaceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardBackspaceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardBackspaceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardBackspaceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardBackspaceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardBackspaceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardBackspaceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardBackspaceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
