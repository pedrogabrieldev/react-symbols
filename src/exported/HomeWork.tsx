import IconHomeWorkFill0Wght100Grad0Opsz48 from '../components/HomeWorkFill0Wght100Grad0Opsz48'
import IconHomeWorkFill0Wght200Grad0Opsz48 from '../components/HomeWorkFill0Wght200Grad0Opsz48'
import IconHomeWorkFill0Wght300Grad0Opsz48 from '../components/HomeWorkFill0Wght300Grad0Opsz48'
import IconHomeWorkFill0Wght400Grad0Opsz48 from '../components/HomeWorkFill0Wght400Grad0Opsz48'
import IconHomeWorkFill0Wght500Grad0Opsz48 from '../components/HomeWorkFill0Wght500Grad0Opsz48'
import IconHomeWorkFill0Wght600Grad0Opsz48 from '../components/HomeWorkFill0Wght600Grad0Opsz48'
import IconHomeWorkFill0Wght700Grad0Opsz48 from '../components/HomeWorkFill0Wght700Grad0Opsz48'
import IconHomeWorkFill1Wght100Grad0Opsz48 from '../components/HomeWorkFill1Wght100Grad0Opsz48'
import IconHomeWorkFill1Wght200Grad0Opsz48 from '../components/HomeWorkFill1Wght200Grad0Opsz48'
import IconHomeWorkFill1Wght300Grad0Opsz48 from '../components/HomeWorkFill1Wght300Grad0Opsz48'
import IconHomeWorkFill1Wght400Grad0Opsz48 from '../components/HomeWorkFill1Wght400Grad0Opsz48'
import IconHomeWorkFill1Wght500Grad0Opsz48 from '../components/HomeWorkFill1Wght500Grad0Opsz48'
import IconHomeWorkFill1Wght600Grad0Opsz48 from '../components/HomeWorkFill1Wght600Grad0Opsz48'
import IconHomeWorkFill1Wght700Grad0Opsz48 from '../components/HomeWorkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeWork = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeWorkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeWorkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeWorkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeWorkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeWorkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeWorkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeWorkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeWorkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeWorkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeWorkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeWorkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeWorkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeWorkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeWorkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
