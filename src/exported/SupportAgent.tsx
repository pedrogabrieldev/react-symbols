import IconSupportAgentFill0Wght100Grad0Opsz48 from '../components/SupportAgentFill0Wght100Grad0Opsz48'
import IconSupportAgentFill0Wght200Grad0Opsz48 from '../components/SupportAgentFill0Wght200Grad0Opsz48'
import IconSupportAgentFill0Wght300Grad0Opsz48 from '../components/SupportAgentFill0Wght300Grad0Opsz48'
import IconSupportAgentFill0Wght400Grad0Opsz48 from '../components/SupportAgentFill0Wght400Grad0Opsz48'
import IconSupportAgentFill0Wght500Grad0Opsz48 from '../components/SupportAgentFill0Wght500Grad0Opsz48'
import IconSupportAgentFill0Wght600Grad0Opsz48 from '../components/SupportAgentFill0Wght600Grad0Opsz48'
import IconSupportAgentFill0Wght700Grad0Opsz48 from '../components/SupportAgentFill0Wght700Grad0Opsz48'
import IconSupportAgentFill1Wght100Grad0Opsz48 from '../components/SupportAgentFill1Wght100Grad0Opsz48'
import IconSupportAgentFill1Wght200Grad0Opsz48 from '../components/SupportAgentFill1Wght200Grad0Opsz48'
import IconSupportAgentFill1Wght300Grad0Opsz48 from '../components/SupportAgentFill1Wght300Grad0Opsz48'
import IconSupportAgentFill1Wght400Grad0Opsz48 from '../components/SupportAgentFill1Wght400Grad0Opsz48'
import IconSupportAgentFill1Wght500Grad0Opsz48 from '../components/SupportAgentFill1Wght500Grad0Opsz48'
import IconSupportAgentFill1Wght600Grad0Opsz48 from '../components/SupportAgentFill1Wght600Grad0Opsz48'
import IconSupportAgentFill1Wght700Grad0Opsz48 from '../components/SupportAgentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSupportAgent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSupportAgentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSupportAgentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSupportAgentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSupportAgentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSupportAgentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSupportAgentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSupportAgentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSupportAgentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSupportAgentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSupportAgentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSupportAgentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSupportAgentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSupportAgentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSupportAgentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
