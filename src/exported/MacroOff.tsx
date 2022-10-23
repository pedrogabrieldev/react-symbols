import IconMacroOffFill0Wght100Grad0Opsz48 from '../components/MacroOffFill0Wght100Grad0Opsz48'
import IconMacroOffFill0Wght200Grad0Opsz48 from '../components/MacroOffFill0Wght200Grad0Opsz48'
import IconMacroOffFill0Wght300Grad0Opsz48 from '../components/MacroOffFill0Wght300Grad0Opsz48'
import IconMacroOffFill0Wght400Grad0Opsz48 from '../components/MacroOffFill0Wght400Grad0Opsz48'
import IconMacroOffFill0Wght500Grad0Opsz48 from '../components/MacroOffFill0Wght500Grad0Opsz48'
import IconMacroOffFill0Wght600Grad0Opsz48 from '../components/MacroOffFill0Wght600Grad0Opsz48'
import IconMacroOffFill0Wght700Grad0Opsz48 from '../components/MacroOffFill0Wght700Grad0Opsz48'
import IconMacroOffFill1Wght100Grad0Opsz48 from '../components/MacroOffFill1Wght100Grad0Opsz48'
import IconMacroOffFill1Wght200Grad0Opsz48 from '../components/MacroOffFill1Wght200Grad0Opsz48'
import IconMacroOffFill1Wght300Grad0Opsz48 from '../components/MacroOffFill1Wght300Grad0Opsz48'
import IconMacroOffFill1Wght400Grad0Opsz48 from '../components/MacroOffFill1Wght400Grad0Opsz48'
import IconMacroOffFill1Wght500Grad0Opsz48 from '../components/MacroOffFill1Wght500Grad0Opsz48'
import IconMacroOffFill1Wght600Grad0Opsz48 from '../components/MacroOffFill1Wght600Grad0Opsz48'
import IconMacroOffFill1Wght700Grad0Opsz48 from '../components/MacroOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMacroOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMacroOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMacroOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMacroOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMacroOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMacroOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMacroOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMacroOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMacroOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMacroOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMacroOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMacroOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMacroOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMacroOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMacroOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
