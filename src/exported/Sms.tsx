import IconSmsFill0Wght100Grad0Opsz48 from '../components/SmsFill0Wght100Grad0Opsz48'
import IconSmsFill0Wght200Grad0Opsz48 from '../components/SmsFill0Wght200Grad0Opsz48'
import IconSmsFill0Wght300Grad0Opsz48 from '../components/SmsFill0Wght300Grad0Opsz48'
import IconSmsFill0Wght400Grad0Opsz48 from '../components/SmsFill0Wght400Grad0Opsz48'
import IconSmsFill0Wght500Grad0Opsz48 from '../components/SmsFill0Wght500Grad0Opsz48'
import IconSmsFill0Wght600Grad0Opsz48 from '../components/SmsFill0Wght600Grad0Opsz48'
import IconSmsFill0Wght700Grad0Opsz48 from '../components/SmsFill0Wght700Grad0Opsz48'
import IconSmsFill1Wght100Grad0Opsz48 from '../components/SmsFill1Wght100Grad0Opsz48'
import IconSmsFill1Wght200Grad0Opsz48 from '../components/SmsFill1Wght200Grad0Opsz48'
import IconSmsFill1Wght300Grad0Opsz48 from '../components/SmsFill1Wght300Grad0Opsz48'
import IconSmsFill1Wght400Grad0Opsz48 from '../components/SmsFill1Wght400Grad0Opsz48'
import IconSmsFill1Wght500Grad0Opsz48 from '../components/SmsFill1Wght500Grad0Opsz48'
import IconSmsFill1Wght600Grad0Opsz48 from '../components/SmsFill1Wght600Grad0Opsz48'
import IconSmsFill1Wght700Grad0Opsz48 from '../components/SmsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSms = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
