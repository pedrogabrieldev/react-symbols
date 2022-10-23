import IconKeyboardVoiceFill0Wght100Grad0Opsz48 from '../components/KeyboardVoiceFill0Wght100Grad0Opsz48'
import IconKeyboardVoiceFill0Wght200Grad0Opsz48 from '../components/KeyboardVoiceFill0Wght200Grad0Opsz48'
import IconKeyboardVoiceFill0Wght300Grad0Opsz48 from '../components/KeyboardVoiceFill0Wght300Grad0Opsz48'
import IconKeyboardVoiceFill0Wght400Grad0Opsz48 from '../components/KeyboardVoiceFill0Wght400Grad0Opsz48'
import IconKeyboardVoiceFill0Wght500Grad0Opsz48 from '../components/KeyboardVoiceFill0Wght500Grad0Opsz48'
import IconKeyboardVoiceFill0Wght600Grad0Opsz48 from '../components/KeyboardVoiceFill0Wght600Grad0Opsz48'
import IconKeyboardVoiceFill0Wght700Grad0Opsz48 from '../components/KeyboardVoiceFill0Wght700Grad0Opsz48'
import IconKeyboardVoiceFill1Wght100Grad0Opsz48 from '../components/KeyboardVoiceFill1Wght100Grad0Opsz48'
import IconKeyboardVoiceFill1Wght200Grad0Opsz48 from '../components/KeyboardVoiceFill1Wght200Grad0Opsz48'
import IconKeyboardVoiceFill1Wght300Grad0Opsz48 from '../components/KeyboardVoiceFill1Wght300Grad0Opsz48'
import IconKeyboardVoiceFill1Wght400Grad0Opsz48 from '../components/KeyboardVoiceFill1Wght400Grad0Opsz48'
import IconKeyboardVoiceFill1Wght500Grad0Opsz48 from '../components/KeyboardVoiceFill1Wght500Grad0Opsz48'
import IconKeyboardVoiceFill1Wght600Grad0Opsz48 from '../components/KeyboardVoiceFill1Wght600Grad0Opsz48'
import IconKeyboardVoiceFill1Wght700Grad0Opsz48 from '../components/KeyboardVoiceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyboardVoice = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyboardVoiceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyboardVoiceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyboardVoiceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyboardVoiceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyboardVoiceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyboardVoiceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyboardVoiceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyboardVoiceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyboardVoiceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyboardVoiceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyboardVoiceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyboardVoiceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyboardVoiceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyboardVoiceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
