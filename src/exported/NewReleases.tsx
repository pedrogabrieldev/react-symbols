import IconNewReleasesFill0Wght100Grad0Opsz48 from '../components/NewReleasesFill0Wght100Grad0Opsz48'
import IconNewReleasesFill0Wght200Grad0Opsz48 from '../components/NewReleasesFill0Wght200Grad0Opsz48'
import IconNewReleasesFill0Wght300Grad0Opsz48 from '../components/NewReleasesFill0Wght300Grad0Opsz48'
import IconNewReleasesFill0Wght400Grad0Opsz48 from '../components/NewReleasesFill0Wght400Grad0Opsz48'
import IconNewReleasesFill0Wght500Grad0Opsz48 from '../components/NewReleasesFill0Wght500Grad0Opsz48'
import IconNewReleasesFill0Wght600Grad0Opsz48 from '../components/NewReleasesFill0Wght600Grad0Opsz48'
import IconNewReleasesFill0Wght700Grad0Opsz48 from '../components/NewReleasesFill0Wght700Grad0Opsz48'
import IconNewReleasesFill1Wght100Grad0Opsz48 from '../components/NewReleasesFill1Wght100Grad0Opsz48'
import IconNewReleasesFill1Wght200Grad0Opsz48 from '../components/NewReleasesFill1Wght200Grad0Opsz48'
import IconNewReleasesFill1Wght300Grad0Opsz48 from '../components/NewReleasesFill1Wght300Grad0Opsz48'
import IconNewReleasesFill1Wght400Grad0Opsz48 from '../components/NewReleasesFill1Wght400Grad0Opsz48'
import IconNewReleasesFill1Wght500Grad0Opsz48 from '../components/NewReleasesFill1Wght500Grad0Opsz48'
import IconNewReleasesFill1Wght600Grad0Opsz48 from '../components/NewReleasesFill1Wght600Grad0Opsz48'
import IconNewReleasesFill1Wght700Grad0Opsz48 from '../components/NewReleasesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNewReleases = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNewReleasesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNewReleasesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNewReleasesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNewReleasesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNewReleasesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNewReleasesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNewReleasesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNewReleasesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNewReleasesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNewReleasesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNewReleasesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNewReleasesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNewReleasesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNewReleasesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
