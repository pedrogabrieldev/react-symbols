import IconAssistantNavigationFill0Wght100Grad0Opsz48 from '../components/AssistantNavigationFill0Wght100Grad0Opsz48'
import IconAssistantNavigationFill0Wght200Grad0Opsz48 from '../components/AssistantNavigationFill0Wght200Grad0Opsz48'
import IconAssistantNavigationFill0Wght300Grad0Opsz48 from '../components/AssistantNavigationFill0Wght300Grad0Opsz48'
import IconAssistantNavigationFill0Wght400Grad0Opsz48 from '../components/AssistantNavigationFill0Wght400Grad0Opsz48'
import IconAssistantNavigationFill0Wght500Grad0Opsz48 from '../components/AssistantNavigationFill0Wght500Grad0Opsz48'
import IconAssistantNavigationFill0Wght600Grad0Opsz48 from '../components/AssistantNavigationFill0Wght600Grad0Opsz48'
import IconAssistantNavigationFill0Wght700Grad0Opsz48 from '../components/AssistantNavigationFill0Wght700Grad0Opsz48'
import IconAssistantNavigationFill1Wght100Grad0Opsz48 from '../components/AssistantNavigationFill1Wght100Grad0Opsz48'
import IconAssistantNavigationFill1Wght200Grad0Opsz48 from '../components/AssistantNavigationFill1Wght200Grad0Opsz48'
import IconAssistantNavigationFill1Wght300Grad0Opsz48 from '../components/AssistantNavigationFill1Wght300Grad0Opsz48'
import IconAssistantNavigationFill1Wght400Grad0Opsz48 from '../components/AssistantNavigationFill1Wght400Grad0Opsz48'
import IconAssistantNavigationFill1Wght500Grad0Opsz48 from '../components/AssistantNavigationFill1Wght500Grad0Opsz48'
import IconAssistantNavigationFill1Wght600Grad0Opsz48 from '../components/AssistantNavigationFill1Wght600Grad0Opsz48'
import IconAssistantNavigationFill1Wght700Grad0Opsz48 from '../components/AssistantNavigationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssistantNavigation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssistantNavigationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssistantNavigationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssistantNavigationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssistantNavigationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssistantNavigationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssistantNavigationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssistantNavigationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssistantNavigationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssistantNavigationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssistantNavigationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssistantNavigationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssistantNavigationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssistantNavigationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssistantNavigationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
