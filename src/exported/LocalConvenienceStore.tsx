import IconLocalConvenienceStoreFill0Wght100Grad0Opsz48 from '../components/LocalConvenienceStoreFill0Wght100Grad0Opsz48'
import IconLocalConvenienceStoreFill0Wght200Grad0Opsz48 from '../components/LocalConvenienceStoreFill0Wght200Grad0Opsz48'
import IconLocalConvenienceStoreFill0Wght300Grad0Opsz48 from '../components/LocalConvenienceStoreFill0Wght300Grad0Opsz48'
import IconLocalConvenienceStoreFill0Wght400Grad0Opsz48 from '../components/LocalConvenienceStoreFill0Wght400Grad0Opsz48'
import IconLocalConvenienceStoreFill0Wght500Grad0Opsz48 from '../components/LocalConvenienceStoreFill0Wght500Grad0Opsz48'
import IconLocalConvenienceStoreFill0Wght600Grad0Opsz48 from '../components/LocalConvenienceStoreFill0Wght600Grad0Opsz48'
import IconLocalConvenienceStoreFill0Wght700Grad0Opsz48 from '../components/LocalConvenienceStoreFill0Wght700Grad0Opsz48'
import IconLocalConvenienceStoreFill1Wght100Grad0Opsz48 from '../components/LocalConvenienceStoreFill1Wght100Grad0Opsz48'
import IconLocalConvenienceStoreFill1Wght200Grad0Opsz48 from '../components/LocalConvenienceStoreFill1Wght200Grad0Opsz48'
import IconLocalConvenienceStoreFill1Wght300Grad0Opsz48 from '../components/LocalConvenienceStoreFill1Wght300Grad0Opsz48'
import IconLocalConvenienceStoreFill1Wght400Grad0Opsz48 from '../components/LocalConvenienceStoreFill1Wght400Grad0Opsz48'
import IconLocalConvenienceStoreFill1Wght500Grad0Opsz48 from '../components/LocalConvenienceStoreFill1Wght500Grad0Opsz48'
import IconLocalConvenienceStoreFill1Wght600Grad0Opsz48 from '../components/LocalConvenienceStoreFill1Wght600Grad0Opsz48'
import IconLocalConvenienceStoreFill1Wght700Grad0Opsz48 from '../components/LocalConvenienceStoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalConvenienceStore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalConvenienceStoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalConvenienceStoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalConvenienceStoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalConvenienceStoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalConvenienceStoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalConvenienceStoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalConvenienceStoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalConvenienceStoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalConvenienceStoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalConvenienceStoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalConvenienceStoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalConvenienceStoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalConvenienceStoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalConvenienceStoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
