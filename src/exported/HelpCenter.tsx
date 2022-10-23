import IconHelpCenterFill0Wght100Grad0Opsz48 from '../components/HelpCenterFill0Wght100Grad0Opsz48'
import IconHelpCenterFill0Wght200Grad0Opsz48 from '../components/HelpCenterFill0Wght200Grad0Opsz48'
import IconHelpCenterFill0Wght300Grad0Opsz48 from '../components/HelpCenterFill0Wght300Grad0Opsz48'
import IconHelpCenterFill0Wght400Grad0Opsz48 from '../components/HelpCenterFill0Wght400Grad0Opsz48'
import IconHelpCenterFill0Wght500Grad0Opsz48 from '../components/HelpCenterFill0Wght500Grad0Opsz48'
import IconHelpCenterFill0Wght600Grad0Opsz48 from '../components/HelpCenterFill0Wght600Grad0Opsz48'
import IconHelpCenterFill0Wght700Grad0Opsz48 from '../components/HelpCenterFill0Wght700Grad0Opsz48'
import IconHelpCenterFill1Wght100Grad0Opsz48 from '../components/HelpCenterFill1Wght100Grad0Opsz48'
import IconHelpCenterFill1Wght200Grad0Opsz48 from '../components/HelpCenterFill1Wght200Grad0Opsz48'
import IconHelpCenterFill1Wght300Grad0Opsz48 from '../components/HelpCenterFill1Wght300Grad0Opsz48'
import IconHelpCenterFill1Wght400Grad0Opsz48 from '../components/HelpCenterFill1Wght400Grad0Opsz48'
import IconHelpCenterFill1Wght500Grad0Opsz48 from '../components/HelpCenterFill1Wght500Grad0Opsz48'
import IconHelpCenterFill1Wght600Grad0Opsz48 from '../components/HelpCenterFill1Wght600Grad0Opsz48'
import IconHelpCenterFill1Wght700Grad0Opsz48 from '../components/HelpCenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHelpCenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHelpCenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHelpCenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHelpCenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHelpCenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHelpCenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHelpCenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHelpCenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHelpCenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHelpCenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHelpCenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHelpCenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHelpCenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHelpCenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHelpCenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
