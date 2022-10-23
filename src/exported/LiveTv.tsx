import IconLiveTvFill0Wght100Grad0Opsz48 from '../components/LiveTvFill0Wght100Grad0Opsz48'
import IconLiveTvFill0Wght200Grad0Opsz48 from '../components/LiveTvFill0Wght200Grad0Opsz48'
import IconLiveTvFill0Wght300Grad0Opsz48 from '../components/LiveTvFill0Wght300Grad0Opsz48'
import IconLiveTvFill0Wght400Grad0Opsz48 from '../components/LiveTvFill0Wght400Grad0Opsz48'
import IconLiveTvFill0Wght500Grad0Opsz48 from '../components/LiveTvFill0Wght500Grad0Opsz48'
import IconLiveTvFill0Wght600Grad0Opsz48 from '../components/LiveTvFill0Wght600Grad0Opsz48'
import IconLiveTvFill0Wght700Grad0Opsz48 from '../components/LiveTvFill0Wght700Grad0Opsz48'
import IconLiveTvFill1Wght100Grad0Opsz48 from '../components/LiveTvFill1Wght100Grad0Opsz48'
import IconLiveTvFill1Wght200Grad0Opsz48 from '../components/LiveTvFill1Wght200Grad0Opsz48'
import IconLiveTvFill1Wght300Grad0Opsz48 from '../components/LiveTvFill1Wght300Grad0Opsz48'
import IconLiveTvFill1Wght400Grad0Opsz48 from '../components/LiveTvFill1Wght400Grad0Opsz48'
import IconLiveTvFill1Wght500Grad0Opsz48 from '../components/LiveTvFill1Wght500Grad0Opsz48'
import IconLiveTvFill1Wght600Grad0Opsz48 from '../components/LiveTvFill1Wght600Grad0Opsz48'
import IconLiveTvFill1Wght700Grad0Opsz48 from '../components/LiveTvFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLiveTv = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLiveTvFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLiveTvFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLiveTvFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLiveTvFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLiveTvFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLiveTvFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLiveTvFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLiveTvFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLiveTvFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLiveTvFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLiveTvFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLiveTvFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLiveTvFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLiveTvFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
