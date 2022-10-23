import IconAssistantDirectionFill0Wght100Grad0Opsz48 from '../components/AssistantDirectionFill0Wght100Grad0Opsz48'
import IconAssistantDirectionFill0Wght200Grad0Opsz48 from '../components/AssistantDirectionFill0Wght200Grad0Opsz48'
import IconAssistantDirectionFill0Wght300Grad0Opsz48 from '../components/AssistantDirectionFill0Wght300Grad0Opsz48'
import IconAssistantDirectionFill0Wght400Grad0Opsz48 from '../components/AssistantDirectionFill0Wght400Grad0Opsz48'
import IconAssistantDirectionFill0Wght500Grad0Opsz48 from '../components/AssistantDirectionFill0Wght500Grad0Opsz48'
import IconAssistantDirectionFill0Wght600Grad0Opsz48 from '../components/AssistantDirectionFill0Wght600Grad0Opsz48'
import IconAssistantDirectionFill0Wght700Grad0Opsz48 from '../components/AssistantDirectionFill0Wght700Grad0Opsz48'
import IconAssistantDirectionFill1Wght100Grad0Opsz48 from '../components/AssistantDirectionFill1Wght100Grad0Opsz48'
import IconAssistantDirectionFill1Wght200Grad0Opsz48 from '../components/AssistantDirectionFill1Wght200Grad0Opsz48'
import IconAssistantDirectionFill1Wght300Grad0Opsz48 from '../components/AssistantDirectionFill1Wght300Grad0Opsz48'
import IconAssistantDirectionFill1Wght400Grad0Opsz48 from '../components/AssistantDirectionFill1Wght400Grad0Opsz48'
import IconAssistantDirectionFill1Wght500Grad0Opsz48 from '../components/AssistantDirectionFill1Wght500Grad0Opsz48'
import IconAssistantDirectionFill1Wght600Grad0Opsz48 from '../components/AssistantDirectionFill1Wght600Grad0Opsz48'
import IconAssistantDirectionFill1Wght700Grad0Opsz48 from '../components/AssistantDirectionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssistantDirection = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssistantDirectionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssistantDirectionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssistantDirectionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssistantDirectionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssistantDirectionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssistantDirectionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssistantDirectionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssistantDirectionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssistantDirectionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssistantDirectionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssistantDirectionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssistantDirectionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssistantDirectionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssistantDirectionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
