import IconAssistantFill0Wght100Grad0Opsz48 from '../components/AssistantFill0Wght100Grad0Opsz48'
import IconAssistantFill0Wght200Grad0Opsz48 from '../components/AssistantFill0Wght200Grad0Opsz48'
import IconAssistantFill0Wght300Grad0Opsz48 from '../components/AssistantFill0Wght300Grad0Opsz48'
import IconAssistantFill0Wght400Grad0Opsz48 from '../components/AssistantFill0Wght400Grad0Opsz48'
import IconAssistantFill0Wght500Grad0Opsz48 from '../components/AssistantFill0Wght500Grad0Opsz48'
import IconAssistantFill0Wght600Grad0Opsz48 from '../components/AssistantFill0Wght600Grad0Opsz48'
import IconAssistantFill0Wght700Grad0Opsz48 from '../components/AssistantFill0Wght700Grad0Opsz48'
import IconAssistantFill1Wght100Grad0Opsz48 from '../components/AssistantFill1Wght100Grad0Opsz48'
import IconAssistantFill1Wght200Grad0Opsz48 from '../components/AssistantFill1Wght200Grad0Opsz48'
import IconAssistantFill1Wght300Grad0Opsz48 from '../components/AssistantFill1Wght300Grad0Opsz48'
import IconAssistantFill1Wght400Grad0Opsz48 from '../components/AssistantFill1Wght400Grad0Opsz48'
import IconAssistantFill1Wght500Grad0Opsz48 from '../components/AssistantFill1Wght500Grad0Opsz48'
import IconAssistantFill1Wght600Grad0Opsz48 from '../components/AssistantFill1Wght600Grad0Opsz48'
import IconAssistantFill1Wght700Grad0Opsz48 from '../components/AssistantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssistant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssistantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssistantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssistantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssistantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssistantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssistantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssistantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssistantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssistantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssistantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssistantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssistantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssistantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssistantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
