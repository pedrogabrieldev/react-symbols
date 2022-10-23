import IconNavigationFill0Wght100Grad0Opsz48 from '../components/NavigationFill0Wght100Grad0Opsz48'
import IconNavigationFill0Wght200Grad0Opsz48 from '../components/NavigationFill0Wght200Grad0Opsz48'
import IconNavigationFill0Wght300Grad0Opsz48 from '../components/NavigationFill0Wght300Grad0Opsz48'
import IconNavigationFill0Wght400Grad0Opsz48 from '../components/NavigationFill0Wght400Grad0Opsz48'
import IconNavigationFill0Wght500Grad0Opsz48 from '../components/NavigationFill0Wght500Grad0Opsz48'
import IconNavigationFill0Wght600Grad0Opsz48 from '../components/NavigationFill0Wght600Grad0Opsz48'
import IconNavigationFill0Wght700Grad0Opsz48 from '../components/NavigationFill0Wght700Grad0Opsz48'
import IconNavigationFill1Wght100Grad0Opsz48 from '../components/NavigationFill1Wght100Grad0Opsz48'
import IconNavigationFill1Wght200Grad0Opsz48 from '../components/NavigationFill1Wght200Grad0Opsz48'
import IconNavigationFill1Wght300Grad0Opsz48 from '../components/NavigationFill1Wght300Grad0Opsz48'
import IconNavigationFill1Wght400Grad0Opsz48 from '../components/NavigationFill1Wght400Grad0Opsz48'
import IconNavigationFill1Wght500Grad0Opsz48 from '../components/NavigationFill1Wght500Grad0Opsz48'
import IconNavigationFill1Wght600Grad0Opsz48 from '../components/NavigationFill1Wght600Grad0Opsz48'
import IconNavigationFill1Wght700Grad0Opsz48 from '../components/NavigationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNavigation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNavigationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNavigationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNavigationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNavigationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNavigationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNavigationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNavigationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNavigationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNavigationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNavigationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNavigationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNavigationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNavigationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNavigationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
