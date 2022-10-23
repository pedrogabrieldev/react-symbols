import IconQueryStatsFill0Wght100Grad0Opsz48 from '../components/QueryStatsFill0Wght100Grad0Opsz48'
import IconQueryStatsFill0Wght200Grad0Opsz48 from '../components/QueryStatsFill0Wght200Grad0Opsz48'
import IconQueryStatsFill0Wght300Grad0Opsz48 from '../components/QueryStatsFill0Wght300Grad0Opsz48'
import IconQueryStatsFill0Wght400Grad0Opsz48 from '../components/QueryStatsFill0Wght400Grad0Opsz48'
import IconQueryStatsFill0Wght500Grad0Opsz48 from '../components/QueryStatsFill0Wght500Grad0Opsz48'
import IconQueryStatsFill0Wght600Grad0Opsz48 from '../components/QueryStatsFill0Wght600Grad0Opsz48'
import IconQueryStatsFill0Wght700Grad0Opsz48 from '../components/QueryStatsFill0Wght700Grad0Opsz48'
import IconQueryStatsFill1Wght100Grad0Opsz48 from '../components/QueryStatsFill1Wght100Grad0Opsz48'
import IconQueryStatsFill1Wght200Grad0Opsz48 from '../components/QueryStatsFill1Wght200Grad0Opsz48'
import IconQueryStatsFill1Wght300Grad0Opsz48 from '../components/QueryStatsFill1Wght300Grad0Opsz48'
import IconQueryStatsFill1Wght400Grad0Opsz48 from '../components/QueryStatsFill1Wght400Grad0Opsz48'
import IconQueryStatsFill1Wght500Grad0Opsz48 from '../components/QueryStatsFill1Wght500Grad0Opsz48'
import IconQueryStatsFill1Wght600Grad0Opsz48 from '../components/QueryStatsFill1Wght600Grad0Opsz48'
import IconQueryStatsFill1Wght700Grad0Opsz48 from '../components/QueryStatsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQueryStats = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQueryStatsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQueryStatsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQueryStatsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQueryStatsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQueryStatsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQueryStatsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQueryStatsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQueryStatsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQueryStatsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQueryStatsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQueryStatsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQueryStatsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQueryStatsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQueryStatsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
