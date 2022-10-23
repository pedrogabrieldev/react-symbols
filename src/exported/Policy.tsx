import IconPolicyFill0Wght100Grad0Opsz48 from '../components/PolicyFill0Wght100Grad0Opsz48'
import IconPolicyFill0Wght200Grad0Opsz48 from '../components/PolicyFill0Wght200Grad0Opsz48'
import IconPolicyFill0Wght300Grad0Opsz48 from '../components/PolicyFill0Wght300Grad0Opsz48'
import IconPolicyFill0Wght400Grad0Opsz48 from '../components/PolicyFill0Wght400Grad0Opsz48'
import IconPolicyFill0Wght500Grad0Opsz48 from '../components/PolicyFill0Wght500Grad0Opsz48'
import IconPolicyFill0Wght600Grad0Opsz48 from '../components/PolicyFill0Wght600Grad0Opsz48'
import IconPolicyFill0Wght700Grad0Opsz48 from '../components/PolicyFill0Wght700Grad0Opsz48'
import IconPolicyFill1Wght100Grad0Opsz48 from '../components/PolicyFill1Wght100Grad0Opsz48'
import IconPolicyFill1Wght200Grad0Opsz48 from '../components/PolicyFill1Wght200Grad0Opsz48'
import IconPolicyFill1Wght300Grad0Opsz48 from '../components/PolicyFill1Wght300Grad0Opsz48'
import IconPolicyFill1Wght400Grad0Opsz48 from '../components/PolicyFill1Wght400Grad0Opsz48'
import IconPolicyFill1Wght500Grad0Opsz48 from '../components/PolicyFill1Wght500Grad0Opsz48'
import IconPolicyFill1Wght600Grad0Opsz48 from '../components/PolicyFill1Wght600Grad0Opsz48'
import IconPolicyFill1Wght700Grad0Opsz48 from '../components/PolicyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPolicy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPolicyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPolicyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPolicyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPolicyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPolicyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPolicyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPolicyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPolicyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPolicyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPolicyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPolicyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPolicyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPolicyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPolicyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
