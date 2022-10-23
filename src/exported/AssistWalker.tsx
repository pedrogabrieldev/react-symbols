import IconAssistWalkerFill0Wght100Grad0Opsz48 from '../components/AssistWalkerFill0Wght100Grad0Opsz48'
import IconAssistWalkerFill0Wght200Grad0Opsz48 from '../components/AssistWalkerFill0Wght200Grad0Opsz48'
import IconAssistWalkerFill0Wght300Grad0Opsz48 from '../components/AssistWalkerFill0Wght300Grad0Opsz48'
import IconAssistWalkerFill0Wght400Grad0Opsz48 from '../components/AssistWalkerFill0Wght400Grad0Opsz48'
import IconAssistWalkerFill0Wght500Grad0Opsz48 from '../components/AssistWalkerFill0Wght500Grad0Opsz48'
import IconAssistWalkerFill0Wght600Grad0Opsz48 from '../components/AssistWalkerFill0Wght600Grad0Opsz48'
import IconAssistWalkerFill0Wght700Grad0Opsz48 from '../components/AssistWalkerFill0Wght700Grad0Opsz48'
import IconAssistWalkerFill1Wght100Grad0Opsz48 from '../components/AssistWalkerFill1Wght100Grad0Opsz48'
import IconAssistWalkerFill1Wght200Grad0Opsz48 from '../components/AssistWalkerFill1Wght200Grad0Opsz48'
import IconAssistWalkerFill1Wght300Grad0Opsz48 from '../components/AssistWalkerFill1Wght300Grad0Opsz48'
import IconAssistWalkerFill1Wght400Grad0Opsz48 from '../components/AssistWalkerFill1Wght400Grad0Opsz48'
import IconAssistWalkerFill1Wght500Grad0Opsz48 from '../components/AssistWalkerFill1Wght500Grad0Opsz48'
import IconAssistWalkerFill1Wght600Grad0Opsz48 from '../components/AssistWalkerFill1Wght600Grad0Opsz48'
import IconAssistWalkerFill1Wght700Grad0Opsz48 from '../components/AssistWalkerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssistWalker = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssistWalkerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssistWalkerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssistWalkerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssistWalkerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssistWalkerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssistWalkerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssistWalkerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssistWalkerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssistWalkerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssistWalkerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssistWalkerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssistWalkerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssistWalkerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssistWalkerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
