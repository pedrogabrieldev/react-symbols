import IconTvWithAssistantFill0Wght100Grad0Opsz48 from '../components/TvWithAssistantFill0Wght100Grad0Opsz48'
import IconTvWithAssistantFill0Wght200Grad0Opsz48 from '../components/TvWithAssistantFill0Wght200Grad0Opsz48'
import IconTvWithAssistantFill0Wght300Grad0Opsz48 from '../components/TvWithAssistantFill0Wght300Grad0Opsz48'
import IconTvWithAssistantFill0Wght400Grad0Opsz48 from '../components/TvWithAssistantFill0Wght400Grad0Opsz48'
import IconTvWithAssistantFill0Wght500Grad0Opsz48 from '../components/TvWithAssistantFill0Wght500Grad0Opsz48'
import IconTvWithAssistantFill0Wght600Grad0Opsz48 from '../components/TvWithAssistantFill0Wght600Grad0Opsz48'
import IconTvWithAssistantFill0Wght700Grad0Opsz48 from '../components/TvWithAssistantFill0Wght700Grad0Opsz48'
import IconTvWithAssistantFill1Wght100Grad0Opsz48 from '../components/TvWithAssistantFill1Wght100Grad0Opsz48'
import IconTvWithAssistantFill1Wght200Grad0Opsz48 from '../components/TvWithAssistantFill1Wght200Grad0Opsz48'
import IconTvWithAssistantFill1Wght300Grad0Opsz48 from '../components/TvWithAssistantFill1Wght300Grad0Opsz48'
import IconTvWithAssistantFill1Wght400Grad0Opsz48 from '../components/TvWithAssistantFill1Wght400Grad0Opsz48'
import IconTvWithAssistantFill1Wght500Grad0Opsz48 from '../components/TvWithAssistantFill1Wght500Grad0Opsz48'
import IconTvWithAssistantFill1Wght600Grad0Opsz48 from '../components/TvWithAssistantFill1Wght600Grad0Opsz48'
import IconTvWithAssistantFill1Wght700Grad0Opsz48 from '../components/TvWithAssistantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTvWithAssistant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTvWithAssistantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTvWithAssistantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTvWithAssistantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTvWithAssistantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTvWithAssistantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTvWithAssistantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTvWithAssistantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTvWithAssistantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTvWithAssistantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTvWithAssistantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTvWithAssistantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTvWithAssistantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTvWithAssistantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTvWithAssistantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
