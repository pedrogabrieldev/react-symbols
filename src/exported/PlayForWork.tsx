import IconPlayForWorkFill0Wght100Grad0Opsz48 from '../components/PlayForWorkFill0Wght100Grad0Opsz48'
import IconPlayForWorkFill0Wght200Grad0Opsz48 from '../components/PlayForWorkFill0Wght200Grad0Opsz48'
import IconPlayForWorkFill0Wght300Grad0Opsz48 from '../components/PlayForWorkFill0Wght300Grad0Opsz48'
import IconPlayForWorkFill0Wght400Grad0Opsz48 from '../components/PlayForWorkFill0Wght400Grad0Opsz48'
import IconPlayForWorkFill0Wght500Grad0Opsz48 from '../components/PlayForWorkFill0Wght500Grad0Opsz48'
import IconPlayForWorkFill0Wght600Grad0Opsz48 from '../components/PlayForWorkFill0Wght600Grad0Opsz48'
import IconPlayForWorkFill0Wght700Grad0Opsz48 from '../components/PlayForWorkFill0Wght700Grad0Opsz48'
import IconPlayForWorkFill1Wght100Grad0Opsz48 from '../components/PlayForWorkFill1Wght100Grad0Opsz48'
import IconPlayForWorkFill1Wght200Grad0Opsz48 from '../components/PlayForWorkFill1Wght200Grad0Opsz48'
import IconPlayForWorkFill1Wght300Grad0Opsz48 from '../components/PlayForWorkFill1Wght300Grad0Opsz48'
import IconPlayForWorkFill1Wght400Grad0Opsz48 from '../components/PlayForWorkFill1Wght400Grad0Opsz48'
import IconPlayForWorkFill1Wght500Grad0Opsz48 from '../components/PlayForWorkFill1Wght500Grad0Opsz48'
import IconPlayForWorkFill1Wght600Grad0Opsz48 from '../components/PlayForWorkFill1Wght600Grad0Opsz48'
import IconPlayForWorkFill1Wght700Grad0Opsz48 from '../components/PlayForWorkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlayForWork = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlayForWorkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlayForWorkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlayForWorkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlayForWorkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlayForWorkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlayForWorkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlayForWorkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlayForWorkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlayForWorkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlayForWorkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlayForWorkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlayForWorkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlayForWorkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlayForWorkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
