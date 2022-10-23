import IconLiquorFill0Wght100Grad0Opsz48 from '../components/LiquorFill0Wght100Grad0Opsz48'
import IconLiquorFill0Wght200Grad0Opsz48 from '../components/LiquorFill0Wght200Grad0Opsz48'
import IconLiquorFill0Wght300Grad0Opsz48 from '../components/LiquorFill0Wght300Grad0Opsz48'
import IconLiquorFill0Wght400Grad0Opsz48 from '../components/LiquorFill0Wght400Grad0Opsz48'
import IconLiquorFill0Wght500Grad0Opsz48 from '../components/LiquorFill0Wght500Grad0Opsz48'
import IconLiquorFill0Wght600Grad0Opsz48 from '../components/LiquorFill0Wght600Grad0Opsz48'
import IconLiquorFill0Wght700Grad0Opsz48 from '../components/LiquorFill0Wght700Grad0Opsz48'
import IconLiquorFill1Wght100Grad0Opsz48 from '../components/LiquorFill1Wght100Grad0Opsz48'
import IconLiquorFill1Wght200Grad0Opsz48 from '../components/LiquorFill1Wght200Grad0Opsz48'
import IconLiquorFill1Wght300Grad0Opsz48 from '../components/LiquorFill1Wght300Grad0Opsz48'
import IconLiquorFill1Wght400Grad0Opsz48 from '../components/LiquorFill1Wght400Grad0Opsz48'
import IconLiquorFill1Wght500Grad0Opsz48 from '../components/LiquorFill1Wght500Grad0Opsz48'
import IconLiquorFill1Wght600Grad0Opsz48 from '../components/LiquorFill1Wght600Grad0Opsz48'
import IconLiquorFill1Wght700Grad0Opsz48 from '../components/LiquorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLiquor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLiquorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLiquorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLiquorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLiquorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLiquorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLiquorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLiquorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLiquorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLiquorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLiquorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLiquorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLiquorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLiquorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLiquorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
