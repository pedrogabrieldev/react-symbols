import IconAllInclusiveFill0Wght100Grad0Opsz48 from '../components/AllInclusiveFill0Wght100Grad0Opsz48'
import IconAllInclusiveFill0Wght200Grad0Opsz48 from '../components/AllInclusiveFill0Wght200Grad0Opsz48'
import IconAllInclusiveFill0Wght300Grad0Opsz48 from '../components/AllInclusiveFill0Wght300Grad0Opsz48'
import IconAllInclusiveFill0Wght400Grad0Opsz48 from '../components/AllInclusiveFill0Wght400Grad0Opsz48'
import IconAllInclusiveFill0Wght500Grad0Opsz48 from '../components/AllInclusiveFill0Wght500Grad0Opsz48'
import IconAllInclusiveFill0Wght600Grad0Opsz48 from '../components/AllInclusiveFill0Wght600Grad0Opsz48'
import IconAllInclusiveFill0Wght700Grad0Opsz48 from '../components/AllInclusiveFill0Wght700Grad0Opsz48'
import IconAllInclusiveFill1Wght100Grad0Opsz48 from '../components/AllInclusiveFill1Wght100Grad0Opsz48'
import IconAllInclusiveFill1Wght200Grad0Opsz48 from '../components/AllInclusiveFill1Wght200Grad0Opsz48'
import IconAllInclusiveFill1Wght300Grad0Opsz48 from '../components/AllInclusiveFill1Wght300Grad0Opsz48'
import IconAllInclusiveFill1Wght400Grad0Opsz48 from '../components/AllInclusiveFill1Wght400Grad0Opsz48'
import IconAllInclusiveFill1Wght500Grad0Opsz48 from '../components/AllInclusiveFill1Wght500Grad0Opsz48'
import IconAllInclusiveFill1Wght600Grad0Opsz48 from '../components/AllInclusiveFill1Wght600Grad0Opsz48'
import IconAllInclusiveFill1Wght700Grad0Opsz48 from '../components/AllInclusiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAllInclusive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAllInclusiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAllInclusiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAllInclusiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAllInclusiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAllInclusiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAllInclusiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAllInclusiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAllInclusiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAllInclusiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAllInclusiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAllInclusiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAllInclusiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAllInclusiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAllInclusiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
