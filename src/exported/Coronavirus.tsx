import IconCoronavirusFill0Wght100Grad0Opsz48 from '../components/CoronavirusFill0Wght100Grad0Opsz48'
import IconCoronavirusFill0Wght200Grad0Opsz48 from '../components/CoronavirusFill0Wght200Grad0Opsz48'
import IconCoronavirusFill0Wght300Grad0Opsz48 from '../components/CoronavirusFill0Wght300Grad0Opsz48'
import IconCoronavirusFill0Wght400Grad0Opsz48 from '../components/CoronavirusFill0Wght400Grad0Opsz48'
import IconCoronavirusFill0Wght500Grad0Opsz48 from '../components/CoronavirusFill0Wght500Grad0Opsz48'
import IconCoronavirusFill0Wght600Grad0Opsz48 from '../components/CoronavirusFill0Wght600Grad0Opsz48'
import IconCoronavirusFill0Wght700Grad0Opsz48 from '../components/CoronavirusFill0Wght700Grad0Opsz48'
import IconCoronavirusFill1Wght100Grad0Opsz48 from '../components/CoronavirusFill1Wght100Grad0Opsz48'
import IconCoronavirusFill1Wght200Grad0Opsz48 from '../components/CoronavirusFill1Wght200Grad0Opsz48'
import IconCoronavirusFill1Wght300Grad0Opsz48 from '../components/CoronavirusFill1Wght300Grad0Opsz48'
import IconCoronavirusFill1Wght400Grad0Opsz48 from '../components/CoronavirusFill1Wght400Grad0Opsz48'
import IconCoronavirusFill1Wght500Grad0Opsz48 from '../components/CoronavirusFill1Wght500Grad0Opsz48'
import IconCoronavirusFill1Wght600Grad0Opsz48 from '../components/CoronavirusFill1Wght600Grad0Opsz48'
import IconCoronavirusFill1Wght700Grad0Opsz48 from '../components/CoronavirusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCoronavirus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCoronavirusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCoronavirusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCoronavirusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCoronavirusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCoronavirusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCoronavirusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCoronavirusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCoronavirusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCoronavirusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCoronavirusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCoronavirusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCoronavirusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCoronavirusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCoronavirusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
