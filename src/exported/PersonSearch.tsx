import IconPersonSearchFill0Wght100Grad0Opsz48 from '../components/PersonSearchFill0Wght100Grad0Opsz48'
import IconPersonSearchFill0Wght200Grad0Opsz48 from '../components/PersonSearchFill0Wght200Grad0Opsz48'
import IconPersonSearchFill0Wght300Grad0Opsz48 from '../components/PersonSearchFill0Wght300Grad0Opsz48'
import IconPersonSearchFill0Wght400Grad0Opsz48 from '../components/PersonSearchFill0Wght400Grad0Opsz48'
import IconPersonSearchFill0Wght500Grad0Opsz48 from '../components/PersonSearchFill0Wght500Grad0Opsz48'
import IconPersonSearchFill0Wght600Grad0Opsz48 from '../components/PersonSearchFill0Wght600Grad0Opsz48'
import IconPersonSearchFill0Wght700Grad0Opsz48 from '../components/PersonSearchFill0Wght700Grad0Opsz48'
import IconPersonSearchFill1Wght100Grad0Opsz48 from '../components/PersonSearchFill1Wght100Grad0Opsz48'
import IconPersonSearchFill1Wght200Grad0Opsz48 from '../components/PersonSearchFill1Wght200Grad0Opsz48'
import IconPersonSearchFill1Wght300Grad0Opsz48 from '../components/PersonSearchFill1Wght300Grad0Opsz48'
import IconPersonSearchFill1Wght400Grad0Opsz48 from '../components/PersonSearchFill1Wght400Grad0Opsz48'
import IconPersonSearchFill1Wght500Grad0Opsz48 from '../components/PersonSearchFill1Wght500Grad0Opsz48'
import IconPersonSearchFill1Wght600Grad0Opsz48 from '../components/PersonSearchFill1Wght600Grad0Opsz48'
import IconPersonSearchFill1Wght700Grad0Opsz48 from '../components/PersonSearchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonSearch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonSearchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonSearchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonSearchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonSearchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonSearchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonSearchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonSearchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonSearchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonSearchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonSearchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonSearchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonSearchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonSearchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonSearchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
