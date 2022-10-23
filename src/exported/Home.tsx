import IconHomeFill0Wght100Grad0Opsz48 from '../components/HomeFill0Wght100Grad0Opsz48'
import IconHomeFill0Wght200Grad0Opsz48 from '../components/HomeFill0Wght200Grad0Opsz48'
import IconHomeFill0Wght300Grad0Opsz48 from '../components/HomeFill0Wght300Grad0Opsz48'
import IconHomeFill0Wght400Grad0Opsz48 from '../components/HomeFill0Wght400Grad0Opsz48'
import IconHomeFill0Wght500Grad0Opsz48 from '../components/HomeFill0Wght500Grad0Opsz48'
import IconHomeFill0Wght600Grad0Opsz48 from '../components/HomeFill0Wght600Grad0Opsz48'
import IconHomeFill0Wght700Grad0Opsz48 from '../components/HomeFill0Wght700Grad0Opsz48'
import IconHomeFill1Wght100Grad0Opsz48 from '../components/HomeFill1Wght100Grad0Opsz48'
import IconHomeFill1Wght200Grad0Opsz48 from '../components/HomeFill1Wght200Grad0Opsz48'
import IconHomeFill1Wght300Grad0Opsz48 from '../components/HomeFill1Wght300Grad0Opsz48'
import IconHomeFill1Wght400Grad0Opsz48 from '../components/HomeFill1Wght400Grad0Opsz48'
import IconHomeFill1Wght500Grad0Opsz48 from '../components/HomeFill1Wght500Grad0Opsz48'
import IconHomeFill1Wght600Grad0Opsz48 from '../components/HomeFill1Wght600Grad0Opsz48'
import IconHomeFill1Wght700Grad0Opsz48 from '../components/HomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
