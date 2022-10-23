import IconTvGenFill0Wght100Grad0Opsz48 from '../components/TvGenFill0Wght100Grad0Opsz48'
import IconTvGenFill0Wght200Grad0Opsz48 from '../components/TvGenFill0Wght200Grad0Opsz48'
import IconTvGenFill0Wght300Grad0Opsz48 from '../components/TvGenFill0Wght300Grad0Opsz48'
import IconTvGenFill0Wght400Grad0Opsz48 from '../components/TvGenFill0Wght400Grad0Opsz48'
import IconTvGenFill0Wght500Grad0Opsz48 from '../components/TvGenFill0Wght500Grad0Opsz48'
import IconTvGenFill0Wght600Grad0Opsz48 from '../components/TvGenFill0Wght600Grad0Opsz48'
import IconTvGenFill0Wght700Grad0Opsz48 from '../components/TvGenFill0Wght700Grad0Opsz48'
import IconTvGenFill1Wght100Grad0Opsz48 from '../components/TvGenFill1Wght100Grad0Opsz48'
import IconTvGenFill1Wght200Grad0Opsz48 from '../components/TvGenFill1Wght200Grad0Opsz48'
import IconTvGenFill1Wght300Grad0Opsz48 from '../components/TvGenFill1Wght300Grad0Opsz48'
import IconTvGenFill1Wght400Grad0Opsz48 from '../components/TvGenFill1Wght400Grad0Opsz48'
import IconTvGenFill1Wght500Grad0Opsz48 from '../components/TvGenFill1Wght500Grad0Opsz48'
import IconTvGenFill1Wght600Grad0Opsz48 from '../components/TvGenFill1Wght600Grad0Opsz48'
import IconTvGenFill1Wght700Grad0Opsz48 from '../components/TvGenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTvGen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTvGenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTvGenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTvGenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTvGenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTvGenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTvGenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTvGenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTvGenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTvGenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTvGenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTvGenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTvGenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTvGenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTvGenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
