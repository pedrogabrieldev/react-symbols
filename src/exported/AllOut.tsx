import IconAllOutFill0Wght100Grad0Opsz48 from '../components/AllOutFill0Wght100Grad0Opsz48'
import IconAllOutFill0Wght200Grad0Opsz48 from '../components/AllOutFill0Wght200Grad0Opsz48'
import IconAllOutFill0Wght300Grad0Opsz48 from '../components/AllOutFill0Wght300Grad0Opsz48'
import IconAllOutFill0Wght400Grad0Opsz48 from '../components/AllOutFill0Wght400Grad0Opsz48'
import IconAllOutFill0Wght500Grad0Opsz48 from '../components/AllOutFill0Wght500Grad0Opsz48'
import IconAllOutFill0Wght600Grad0Opsz48 from '../components/AllOutFill0Wght600Grad0Opsz48'
import IconAllOutFill0Wght700Grad0Opsz48 from '../components/AllOutFill0Wght700Grad0Opsz48'
import IconAllOutFill1Wght100Grad0Opsz48 from '../components/AllOutFill1Wght100Grad0Opsz48'
import IconAllOutFill1Wght200Grad0Opsz48 from '../components/AllOutFill1Wght200Grad0Opsz48'
import IconAllOutFill1Wght300Grad0Opsz48 from '../components/AllOutFill1Wght300Grad0Opsz48'
import IconAllOutFill1Wght400Grad0Opsz48 from '../components/AllOutFill1Wght400Grad0Opsz48'
import IconAllOutFill1Wght500Grad0Opsz48 from '../components/AllOutFill1Wght500Grad0Opsz48'
import IconAllOutFill1Wght600Grad0Opsz48 from '../components/AllOutFill1Wght600Grad0Opsz48'
import IconAllOutFill1Wght700Grad0Opsz48 from '../components/AllOutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAllOut = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAllOutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAllOutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAllOutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAllOutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAllOutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAllOutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAllOutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAllOutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAllOutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAllOutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAllOutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAllOutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAllOutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAllOutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
