import IconIntegrationInstructionsFill0Wght100Grad0Opsz48 from '../components/IntegrationInstructionsFill0Wght100Grad0Opsz48'
import IconIntegrationInstructionsFill0Wght200Grad0Opsz48 from '../components/IntegrationInstructionsFill0Wght200Grad0Opsz48'
import IconIntegrationInstructionsFill0Wght300Grad0Opsz48 from '../components/IntegrationInstructionsFill0Wght300Grad0Opsz48'
import IconIntegrationInstructionsFill0Wght400Grad0Opsz48 from '../components/IntegrationInstructionsFill0Wght400Grad0Opsz48'
import IconIntegrationInstructionsFill0Wght500Grad0Opsz48 from '../components/IntegrationInstructionsFill0Wght500Grad0Opsz48'
import IconIntegrationInstructionsFill0Wght600Grad0Opsz48 from '../components/IntegrationInstructionsFill0Wght600Grad0Opsz48'
import IconIntegrationInstructionsFill0Wght700Grad0Opsz48 from '../components/IntegrationInstructionsFill0Wght700Grad0Opsz48'
import IconIntegrationInstructionsFill1Wght100Grad0Opsz48 from '../components/IntegrationInstructionsFill1Wght100Grad0Opsz48'
import IconIntegrationInstructionsFill1Wght200Grad0Opsz48 from '../components/IntegrationInstructionsFill1Wght200Grad0Opsz48'
import IconIntegrationInstructionsFill1Wght300Grad0Opsz48 from '../components/IntegrationInstructionsFill1Wght300Grad0Opsz48'
import IconIntegrationInstructionsFill1Wght400Grad0Opsz48 from '../components/IntegrationInstructionsFill1Wght400Grad0Opsz48'
import IconIntegrationInstructionsFill1Wght500Grad0Opsz48 from '../components/IntegrationInstructionsFill1Wght500Grad0Opsz48'
import IconIntegrationInstructionsFill1Wght600Grad0Opsz48 from '../components/IntegrationInstructionsFill1Wght600Grad0Opsz48'
import IconIntegrationInstructionsFill1Wght700Grad0Opsz48 from '../components/IntegrationInstructionsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconIntegrationInstructions = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconIntegrationInstructionsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconIntegrationInstructionsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconIntegrationInstructionsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconIntegrationInstructionsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconIntegrationInstructionsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconIntegrationInstructionsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconIntegrationInstructionsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconIntegrationInstructionsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconIntegrationInstructionsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconIntegrationInstructionsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconIntegrationInstructionsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconIntegrationInstructionsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconIntegrationInstructionsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconIntegrationInstructionsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
