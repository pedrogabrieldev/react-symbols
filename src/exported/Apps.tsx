import IconAppsFill0Wght100Grad0Opsz48 from '../components/AppsFill0Wght100Grad0Opsz48'
import IconAppsFill0Wght200Grad0Opsz48 from '../components/AppsFill0Wght200Grad0Opsz48'
import IconAppsFill0Wght300Grad0Opsz48 from '../components/AppsFill0Wght300Grad0Opsz48'
import IconAppsFill0Wght400Grad0Opsz48 from '../components/AppsFill0Wght400Grad0Opsz48'
import IconAppsFill0Wght500Grad0Opsz48 from '../components/AppsFill0Wght500Grad0Opsz48'
import IconAppsFill0Wght600Grad0Opsz48 from '../components/AppsFill0Wght600Grad0Opsz48'
import IconAppsFill0Wght700Grad0Opsz48 from '../components/AppsFill0Wght700Grad0Opsz48'
import IconAppsFill1Wght100Grad0Opsz48 from '../components/AppsFill1Wght100Grad0Opsz48'
import IconAppsFill1Wght200Grad0Opsz48 from '../components/AppsFill1Wght200Grad0Opsz48'
import IconAppsFill1Wght300Grad0Opsz48 from '../components/AppsFill1Wght300Grad0Opsz48'
import IconAppsFill1Wght400Grad0Opsz48 from '../components/AppsFill1Wght400Grad0Opsz48'
import IconAppsFill1Wght500Grad0Opsz48 from '../components/AppsFill1Wght500Grad0Opsz48'
import IconAppsFill1Wght600Grad0Opsz48 from '../components/AppsFill1Wght600Grad0Opsz48'
import IconAppsFill1Wght700Grad0Opsz48 from '../components/AppsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconApps = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAppsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAppsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAppsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAppsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAppsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAppsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAppsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAppsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAppsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAppsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAppsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAppsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAppsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAppsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
