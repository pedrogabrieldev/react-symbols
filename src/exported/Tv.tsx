import IconTvFill0Wght100Grad0Opsz48 from '../components/TvFill0Wght100Grad0Opsz48'
import IconTvFill0Wght200Grad0Opsz48 from '../components/TvFill0Wght200Grad0Opsz48'
import IconTvFill0Wght300Grad0Opsz48 from '../components/TvFill0Wght300Grad0Opsz48'
import IconTvFill0Wght400Grad0Opsz48 from '../components/TvFill0Wght400Grad0Opsz48'
import IconTvFill0Wght500Grad0Opsz48 from '../components/TvFill0Wght500Grad0Opsz48'
import IconTvFill0Wght600Grad0Opsz48 from '../components/TvFill0Wght600Grad0Opsz48'
import IconTvFill0Wght700Grad0Opsz48 from '../components/TvFill0Wght700Grad0Opsz48'
import IconTvFill1Wght100Grad0Opsz48 from '../components/TvFill1Wght100Grad0Opsz48'
import IconTvFill1Wght200Grad0Opsz48 from '../components/TvFill1Wght200Grad0Opsz48'
import IconTvFill1Wght300Grad0Opsz48 from '../components/TvFill1Wght300Grad0Opsz48'
import IconTvFill1Wght400Grad0Opsz48 from '../components/TvFill1Wght400Grad0Opsz48'
import IconTvFill1Wght500Grad0Opsz48 from '../components/TvFill1Wght500Grad0Opsz48'
import IconTvFill1Wght600Grad0Opsz48 from '../components/TvFill1Wght600Grad0Opsz48'
import IconTvFill1Wght700Grad0Opsz48 from '../components/TvFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTv = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTvFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTvFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTvFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTvFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTvFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTvFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTvFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTvFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTvFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTvFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTvFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTvFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTvFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTvFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
