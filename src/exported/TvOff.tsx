import IconTvOffFill0Wght100Grad0Opsz48 from '../components/TvOffFill0Wght100Grad0Opsz48'
import IconTvOffFill0Wght200Grad0Opsz48 from '../components/TvOffFill0Wght200Grad0Opsz48'
import IconTvOffFill0Wght300Grad0Opsz48 from '../components/TvOffFill0Wght300Grad0Opsz48'
import IconTvOffFill0Wght400Grad0Opsz48 from '../components/TvOffFill0Wght400Grad0Opsz48'
import IconTvOffFill0Wght500Grad0Opsz48 from '../components/TvOffFill0Wght500Grad0Opsz48'
import IconTvOffFill0Wght600Grad0Opsz48 from '../components/TvOffFill0Wght600Grad0Opsz48'
import IconTvOffFill0Wght700Grad0Opsz48 from '../components/TvOffFill0Wght700Grad0Opsz48'
import IconTvOffFill1Wght100Grad0Opsz48 from '../components/TvOffFill1Wght100Grad0Opsz48'
import IconTvOffFill1Wght200Grad0Opsz48 from '../components/TvOffFill1Wght200Grad0Opsz48'
import IconTvOffFill1Wght300Grad0Opsz48 from '../components/TvOffFill1Wght300Grad0Opsz48'
import IconTvOffFill1Wght400Grad0Opsz48 from '../components/TvOffFill1Wght400Grad0Opsz48'
import IconTvOffFill1Wght500Grad0Opsz48 from '../components/TvOffFill1Wght500Grad0Opsz48'
import IconTvOffFill1Wght600Grad0Opsz48 from '../components/TvOffFill1Wght600Grad0Opsz48'
import IconTvOffFill1Wght700Grad0Opsz48 from '../components/TvOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTvOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTvOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTvOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTvOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTvOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTvOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTvOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTvOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTvOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTvOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTvOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTvOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTvOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTvOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTvOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
