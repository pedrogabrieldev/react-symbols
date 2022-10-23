import IconTerminalFill0Wght100Grad0Opsz48 from '../components/TerminalFill0Wght100Grad0Opsz48'
import IconTerminalFill0Wght200Grad0Opsz48 from '../components/TerminalFill0Wght200Grad0Opsz48'
import IconTerminalFill0Wght300Grad0Opsz48 from '../components/TerminalFill0Wght300Grad0Opsz48'
import IconTerminalFill0Wght400Grad0Opsz48 from '../components/TerminalFill0Wght400Grad0Opsz48'
import IconTerminalFill0Wght500Grad0Opsz48 from '../components/TerminalFill0Wght500Grad0Opsz48'
import IconTerminalFill0Wght600Grad0Opsz48 from '../components/TerminalFill0Wght600Grad0Opsz48'
import IconTerminalFill0Wght700Grad0Opsz48 from '../components/TerminalFill0Wght700Grad0Opsz48'
import IconTerminalFill1Wght100Grad0Opsz48 from '../components/TerminalFill1Wght100Grad0Opsz48'
import IconTerminalFill1Wght200Grad0Opsz48 from '../components/TerminalFill1Wght200Grad0Opsz48'
import IconTerminalFill1Wght300Grad0Opsz48 from '../components/TerminalFill1Wght300Grad0Opsz48'
import IconTerminalFill1Wght400Grad0Opsz48 from '../components/TerminalFill1Wght400Grad0Opsz48'
import IconTerminalFill1Wght500Grad0Opsz48 from '../components/TerminalFill1Wght500Grad0Opsz48'
import IconTerminalFill1Wght600Grad0Opsz48 from '../components/TerminalFill1Wght600Grad0Opsz48'
import IconTerminalFill1Wght700Grad0Opsz48 from '../components/TerminalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTerminal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTerminalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTerminalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTerminalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTerminalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTerminalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTerminalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTerminalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTerminalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTerminalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTerminalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTerminalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTerminalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTerminalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTerminalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
