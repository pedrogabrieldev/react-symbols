import IconVariablesFill0Wght100Grad0Opsz48 from '../components/VariablesFill0Wght100Grad0Opsz48'
import IconVariablesFill0Wght200Grad0Opsz48 from '../components/VariablesFill0Wght200Grad0Opsz48'
import IconVariablesFill0Wght300Grad0Opsz48 from '../components/VariablesFill0Wght300Grad0Opsz48'
import IconVariablesFill0Wght400Grad0Opsz48 from '../components/VariablesFill0Wght400Grad0Opsz48'
import IconVariablesFill0Wght500Grad0Opsz48 from '../components/VariablesFill0Wght500Grad0Opsz48'
import IconVariablesFill0Wght600Grad0Opsz48 from '../components/VariablesFill0Wght600Grad0Opsz48'
import IconVariablesFill0Wght700Grad0Opsz48 from '../components/VariablesFill0Wght700Grad0Opsz48'
import IconVariablesFill1Wght100Grad0Opsz48 from '../components/VariablesFill1Wght100Grad0Opsz48'
import IconVariablesFill1Wght200Grad0Opsz48 from '../components/VariablesFill1Wght200Grad0Opsz48'
import IconVariablesFill1Wght300Grad0Opsz48 from '../components/VariablesFill1Wght300Grad0Opsz48'
import IconVariablesFill1Wght400Grad0Opsz48 from '../components/VariablesFill1Wght400Grad0Opsz48'
import IconVariablesFill1Wght500Grad0Opsz48 from '../components/VariablesFill1Wght500Grad0Opsz48'
import IconVariablesFill1Wght600Grad0Opsz48 from '../components/VariablesFill1Wght600Grad0Opsz48'
import IconVariablesFill1Wght700Grad0Opsz48 from '../components/VariablesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVariables = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVariablesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVariablesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVariablesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVariablesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVariablesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVariablesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVariablesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVariablesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVariablesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVariablesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVariablesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVariablesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVariablesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVariablesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
