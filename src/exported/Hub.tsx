import IconHubFill0Wght100Grad0Opsz48 from '../components/HubFill0Wght100Grad0Opsz48'
import IconHubFill0Wght200Grad0Opsz48 from '../components/HubFill0Wght200Grad0Opsz48'
import IconHubFill0Wght300Grad0Opsz48 from '../components/HubFill0Wght300Grad0Opsz48'
import IconHubFill0Wght400Grad0Opsz48 from '../components/HubFill0Wght400Grad0Opsz48'
import IconHubFill0Wght500Grad0Opsz48 from '../components/HubFill0Wght500Grad0Opsz48'
import IconHubFill0Wght600Grad0Opsz48 from '../components/HubFill0Wght600Grad0Opsz48'
import IconHubFill0Wght700Grad0Opsz48 from '../components/HubFill0Wght700Grad0Opsz48'
import IconHubFill1Wght100Grad0Opsz48 from '../components/HubFill1Wght100Grad0Opsz48'
import IconHubFill1Wght200Grad0Opsz48 from '../components/HubFill1Wght200Grad0Opsz48'
import IconHubFill1Wght300Grad0Opsz48 from '../components/HubFill1Wght300Grad0Opsz48'
import IconHubFill1Wght400Grad0Opsz48 from '../components/HubFill1Wght400Grad0Opsz48'
import IconHubFill1Wght500Grad0Opsz48 from '../components/HubFill1Wght500Grad0Opsz48'
import IconHubFill1Wght600Grad0Opsz48 from '../components/HubFill1Wght600Grad0Opsz48'
import IconHubFill1Wght700Grad0Opsz48 from '../components/HubFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHub = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHubFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHubFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHubFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHubFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHubFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHubFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHubFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHubFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHubFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHubFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHubFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHubFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHubFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHubFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
