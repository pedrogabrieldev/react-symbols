import IconHelpFill0Wght100Grad0Opsz48 from '../components/HelpFill0Wght100Grad0Opsz48'
import IconHelpFill0Wght200Grad0Opsz48 from '../components/HelpFill0Wght200Grad0Opsz48'
import IconHelpFill0Wght300Grad0Opsz48 from '../components/HelpFill0Wght300Grad0Opsz48'
import IconHelpFill0Wght400Grad0Opsz48 from '../components/HelpFill0Wght400Grad0Opsz48'
import IconHelpFill0Wght500Grad0Opsz48 from '../components/HelpFill0Wght500Grad0Opsz48'
import IconHelpFill0Wght600Grad0Opsz48 from '../components/HelpFill0Wght600Grad0Opsz48'
import IconHelpFill0Wght700Grad0Opsz48 from '../components/HelpFill0Wght700Grad0Opsz48'
import IconHelpFill1Wght100Grad0Opsz48 from '../components/HelpFill1Wght100Grad0Opsz48'
import IconHelpFill1Wght200Grad0Opsz48 from '../components/HelpFill1Wght200Grad0Opsz48'
import IconHelpFill1Wght300Grad0Opsz48 from '../components/HelpFill1Wght300Grad0Opsz48'
import IconHelpFill1Wght400Grad0Opsz48 from '../components/HelpFill1Wght400Grad0Opsz48'
import IconHelpFill1Wght500Grad0Opsz48 from '../components/HelpFill1Wght500Grad0Opsz48'
import IconHelpFill1Wght600Grad0Opsz48 from '../components/HelpFill1Wght600Grad0Opsz48'
import IconHelpFill1Wght700Grad0Opsz48 from '../components/HelpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHelp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHelpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHelpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHelpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHelpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHelpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHelpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHelpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHelpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHelpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHelpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHelpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHelpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHelpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHelpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
