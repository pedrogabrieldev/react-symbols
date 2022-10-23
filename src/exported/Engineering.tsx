import IconEngineeringFill0Wght100Grad0Opsz48 from '../components/EngineeringFill0Wght100Grad0Opsz48'
import IconEngineeringFill0Wght200Grad0Opsz48 from '../components/EngineeringFill0Wght200Grad0Opsz48'
import IconEngineeringFill0Wght300Grad0Opsz48 from '../components/EngineeringFill0Wght300Grad0Opsz48'
import IconEngineeringFill0Wght400Grad0Opsz48 from '../components/EngineeringFill0Wght400Grad0Opsz48'
import IconEngineeringFill0Wght500Grad0Opsz48 from '../components/EngineeringFill0Wght500Grad0Opsz48'
import IconEngineeringFill0Wght600Grad0Opsz48 from '../components/EngineeringFill0Wght600Grad0Opsz48'
import IconEngineeringFill0Wght700Grad0Opsz48 from '../components/EngineeringFill0Wght700Grad0Opsz48'
import IconEngineeringFill1Wght100Grad0Opsz48 from '../components/EngineeringFill1Wght100Grad0Opsz48'
import IconEngineeringFill1Wght200Grad0Opsz48 from '../components/EngineeringFill1Wght200Grad0Opsz48'
import IconEngineeringFill1Wght300Grad0Opsz48 from '../components/EngineeringFill1Wght300Grad0Opsz48'
import IconEngineeringFill1Wght400Grad0Opsz48 from '../components/EngineeringFill1Wght400Grad0Opsz48'
import IconEngineeringFill1Wght500Grad0Opsz48 from '../components/EngineeringFill1Wght500Grad0Opsz48'
import IconEngineeringFill1Wght600Grad0Opsz48 from '../components/EngineeringFill1Wght600Grad0Opsz48'
import IconEngineeringFill1Wght700Grad0Opsz48 from '../components/EngineeringFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEngineering = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEngineeringFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEngineeringFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEngineeringFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEngineeringFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEngineeringFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEngineeringFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEngineeringFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEngineeringFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEngineeringFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEngineeringFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEngineeringFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEngineeringFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEngineeringFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEngineeringFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
