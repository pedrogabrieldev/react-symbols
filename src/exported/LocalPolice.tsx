import IconLocalPoliceFill0Wght100Grad0Opsz48 from '../components/LocalPoliceFill0Wght100Grad0Opsz48'
import IconLocalPoliceFill0Wght200Grad0Opsz48 from '../components/LocalPoliceFill0Wght200Grad0Opsz48'
import IconLocalPoliceFill0Wght300Grad0Opsz48 from '../components/LocalPoliceFill0Wght300Grad0Opsz48'
import IconLocalPoliceFill0Wght400Grad0Opsz48 from '../components/LocalPoliceFill0Wght400Grad0Opsz48'
import IconLocalPoliceFill0Wght500Grad0Opsz48 from '../components/LocalPoliceFill0Wght500Grad0Opsz48'
import IconLocalPoliceFill0Wght600Grad0Opsz48 from '../components/LocalPoliceFill0Wght600Grad0Opsz48'
import IconLocalPoliceFill0Wght700Grad0Opsz48 from '../components/LocalPoliceFill0Wght700Grad0Opsz48'
import IconLocalPoliceFill1Wght100Grad0Opsz48 from '../components/LocalPoliceFill1Wght100Grad0Opsz48'
import IconLocalPoliceFill1Wght200Grad0Opsz48 from '../components/LocalPoliceFill1Wght200Grad0Opsz48'
import IconLocalPoliceFill1Wght300Grad0Opsz48 from '../components/LocalPoliceFill1Wght300Grad0Opsz48'
import IconLocalPoliceFill1Wght400Grad0Opsz48 from '../components/LocalPoliceFill1Wght400Grad0Opsz48'
import IconLocalPoliceFill1Wght500Grad0Opsz48 from '../components/LocalPoliceFill1Wght500Grad0Opsz48'
import IconLocalPoliceFill1Wght600Grad0Opsz48 from '../components/LocalPoliceFill1Wght600Grad0Opsz48'
import IconLocalPoliceFill1Wght700Grad0Opsz48 from '../components/LocalPoliceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalPolice = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalPoliceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalPoliceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalPoliceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalPoliceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalPoliceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalPoliceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalPoliceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalPoliceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalPoliceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalPoliceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalPoliceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalPoliceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalPoliceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalPoliceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
