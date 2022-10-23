import IconAppsOutageFill0Wght100Grad0Opsz48 from '../components/AppsOutageFill0Wght100Grad0Opsz48'
import IconAppsOutageFill0Wght200Grad0Opsz48 from '../components/AppsOutageFill0Wght200Grad0Opsz48'
import IconAppsOutageFill0Wght300Grad0Opsz48 from '../components/AppsOutageFill0Wght300Grad0Opsz48'
import IconAppsOutageFill0Wght400Grad0Opsz48 from '../components/AppsOutageFill0Wght400Grad0Opsz48'
import IconAppsOutageFill0Wght500Grad0Opsz48 from '../components/AppsOutageFill0Wght500Grad0Opsz48'
import IconAppsOutageFill0Wght600Grad0Opsz48 from '../components/AppsOutageFill0Wght600Grad0Opsz48'
import IconAppsOutageFill0Wght700Grad0Opsz48 from '../components/AppsOutageFill0Wght700Grad0Opsz48'
import IconAppsOutageFill1Wght100Grad0Opsz48 from '../components/AppsOutageFill1Wght100Grad0Opsz48'
import IconAppsOutageFill1Wght200Grad0Opsz48 from '../components/AppsOutageFill1Wght200Grad0Opsz48'
import IconAppsOutageFill1Wght300Grad0Opsz48 from '../components/AppsOutageFill1Wght300Grad0Opsz48'
import IconAppsOutageFill1Wght400Grad0Opsz48 from '../components/AppsOutageFill1Wght400Grad0Opsz48'
import IconAppsOutageFill1Wght500Grad0Opsz48 from '../components/AppsOutageFill1Wght500Grad0Opsz48'
import IconAppsOutageFill1Wght600Grad0Opsz48 from '../components/AppsOutageFill1Wght600Grad0Opsz48'
import IconAppsOutageFill1Wght700Grad0Opsz48 from '../components/AppsOutageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAppsOutage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAppsOutageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAppsOutageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAppsOutageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAppsOutageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAppsOutageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAppsOutageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAppsOutageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAppsOutageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAppsOutageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAppsOutageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAppsOutageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAppsOutageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAppsOutageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAppsOutageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
