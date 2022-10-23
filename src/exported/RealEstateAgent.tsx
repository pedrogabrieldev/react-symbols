import IconRealEstateAgentFill0Wght100Grad0Opsz48 from '../components/RealEstateAgentFill0Wght100Grad0Opsz48'
import IconRealEstateAgentFill0Wght200Grad0Opsz48 from '../components/RealEstateAgentFill0Wght200Grad0Opsz48'
import IconRealEstateAgentFill0Wght300Grad0Opsz48 from '../components/RealEstateAgentFill0Wght300Grad0Opsz48'
import IconRealEstateAgentFill0Wght400Grad0Opsz48 from '../components/RealEstateAgentFill0Wght400Grad0Opsz48'
import IconRealEstateAgentFill0Wght500Grad0Opsz48 from '../components/RealEstateAgentFill0Wght500Grad0Opsz48'
import IconRealEstateAgentFill0Wght600Grad0Opsz48 from '../components/RealEstateAgentFill0Wght600Grad0Opsz48'
import IconRealEstateAgentFill0Wght700Grad0Opsz48 from '../components/RealEstateAgentFill0Wght700Grad0Opsz48'
import IconRealEstateAgentFill1Wght100Grad0Opsz48 from '../components/RealEstateAgentFill1Wght100Grad0Opsz48'
import IconRealEstateAgentFill1Wght200Grad0Opsz48 from '../components/RealEstateAgentFill1Wght200Grad0Opsz48'
import IconRealEstateAgentFill1Wght300Grad0Opsz48 from '../components/RealEstateAgentFill1Wght300Grad0Opsz48'
import IconRealEstateAgentFill1Wght400Grad0Opsz48 from '../components/RealEstateAgentFill1Wght400Grad0Opsz48'
import IconRealEstateAgentFill1Wght500Grad0Opsz48 from '../components/RealEstateAgentFill1Wght500Grad0Opsz48'
import IconRealEstateAgentFill1Wght600Grad0Opsz48 from '../components/RealEstateAgentFill1Wght600Grad0Opsz48'
import IconRealEstateAgentFill1Wght700Grad0Opsz48 from '../components/RealEstateAgentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRealEstateAgent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRealEstateAgentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRealEstateAgentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRealEstateAgentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRealEstateAgentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRealEstateAgentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRealEstateAgentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRealEstateAgentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRealEstateAgentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRealEstateAgentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRealEstateAgentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRealEstateAgentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRealEstateAgentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRealEstateAgentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRealEstateAgentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
