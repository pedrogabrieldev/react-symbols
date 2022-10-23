import IconBrowseActivityFill0Wght100Grad0Opsz48 from '../components/BrowseActivityFill0Wght100Grad0Opsz48'
import IconBrowseActivityFill0Wght200Grad0Opsz48 from '../components/BrowseActivityFill0Wght200Grad0Opsz48'
import IconBrowseActivityFill0Wght300Grad0Opsz48 from '../components/BrowseActivityFill0Wght300Grad0Opsz48'
import IconBrowseActivityFill0Wght400Grad0Opsz48 from '../components/BrowseActivityFill0Wght400Grad0Opsz48'
import IconBrowseActivityFill0Wght500Grad0Opsz48 from '../components/BrowseActivityFill0Wght500Grad0Opsz48'
import IconBrowseActivityFill0Wght600Grad0Opsz48 from '../components/BrowseActivityFill0Wght600Grad0Opsz48'
import IconBrowseActivityFill0Wght700Grad0Opsz48 from '../components/BrowseActivityFill0Wght700Grad0Opsz48'
import IconBrowseActivityFill1Wght100Grad0Opsz48 from '../components/BrowseActivityFill1Wght100Grad0Opsz48'
import IconBrowseActivityFill1Wght200Grad0Opsz48 from '../components/BrowseActivityFill1Wght200Grad0Opsz48'
import IconBrowseActivityFill1Wght300Grad0Opsz48 from '../components/BrowseActivityFill1Wght300Grad0Opsz48'
import IconBrowseActivityFill1Wght400Grad0Opsz48 from '../components/BrowseActivityFill1Wght400Grad0Opsz48'
import IconBrowseActivityFill1Wght500Grad0Opsz48 from '../components/BrowseActivityFill1Wght500Grad0Opsz48'
import IconBrowseActivityFill1Wght600Grad0Opsz48 from '../components/BrowseActivityFill1Wght600Grad0Opsz48'
import IconBrowseActivityFill1Wght700Grad0Opsz48 from '../components/BrowseActivityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrowseActivity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrowseActivityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrowseActivityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrowseActivityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrowseActivityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrowseActivityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrowseActivityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrowseActivityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrowseActivityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrowseActivityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrowseActivityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrowseActivityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrowseActivityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrowseActivityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrowseActivityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
