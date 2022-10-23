import IconWorkFill0Wght100Grad0Opsz48 from '../components/WorkFill0Wght100Grad0Opsz48'
import IconWorkFill0Wght200Grad0Opsz48 from '../components/WorkFill0Wght200Grad0Opsz48'
import IconWorkFill0Wght300Grad0Opsz48 from '../components/WorkFill0Wght300Grad0Opsz48'
import IconWorkFill0Wght400Grad0Opsz48 from '../components/WorkFill0Wght400Grad0Opsz48'
import IconWorkFill0Wght500Grad0Opsz48 from '../components/WorkFill0Wght500Grad0Opsz48'
import IconWorkFill0Wght600Grad0Opsz48 from '../components/WorkFill0Wght600Grad0Opsz48'
import IconWorkFill0Wght700Grad0Opsz48 from '../components/WorkFill0Wght700Grad0Opsz48'
import IconWorkFill1Wght100Grad0Opsz48 from '../components/WorkFill1Wght100Grad0Opsz48'
import IconWorkFill1Wght200Grad0Opsz48 from '../components/WorkFill1Wght200Grad0Opsz48'
import IconWorkFill1Wght300Grad0Opsz48 from '../components/WorkFill1Wght300Grad0Opsz48'
import IconWorkFill1Wght400Grad0Opsz48 from '../components/WorkFill1Wght400Grad0Opsz48'
import IconWorkFill1Wght500Grad0Opsz48 from '../components/WorkFill1Wght500Grad0Opsz48'
import IconWorkFill1Wght600Grad0Opsz48 from '../components/WorkFill1Wght600Grad0Opsz48'
import IconWorkFill1Wght700Grad0Opsz48 from '../components/WorkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWork = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWorkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWorkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWorkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWorkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWorkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWorkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWorkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWorkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWorkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWorkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWorkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWorkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWorkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWorkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
