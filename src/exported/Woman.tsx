import IconWomanFill0Wght100Grad0Opsz48 from '../components/WomanFill0Wght100Grad0Opsz48'
import IconWomanFill0Wght200Grad0Opsz48 from '../components/WomanFill0Wght200Grad0Opsz48'
import IconWomanFill0Wght300Grad0Opsz48 from '../components/WomanFill0Wght300Grad0Opsz48'
import IconWomanFill0Wght400Grad0Opsz48 from '../components/WomanFill0Wght400Grad0Opsz48'
import IconWomanFill0Wght500Grad0Opsz48 from '../components/WomanFill0Wght500Grad0Opsz48'
import IconWomanFill0Wght600Grad0Opsz48 from '../components/WomanFill0Wght600Grad0Opsz48'
import IconWomanFill0Wght700Grad0Opsz48 from '../components/WomanFill0Wght700Grad0Opsz48'
import IconWomanFill1Wght100Grad0Opsz48 from '../components/WomanFill1Wght100Grad0Opsz48'
import IconWomanFill1Wght200Grad0Opsz48 from '../components/WomanFill1Wght200Grad0Opsz48'
import IconWomanFill1Wght300Grad0Opsz48 from '../components/WomanFill1Wght300Grad0Opsz48'
import IconWomanFill1Wght400Grad0Opsz48 from '../components/WomanFill1Wght400Grad0Opsz48'
import IconWomanFill1Wght500Grad0Opsz48 from '../components/WomanFill1Wght500Grad0Opsz48'
import IconWomanFill1Wght600Grad0Opsz48 from '../components/WomanFill1Wght600Grad0Opsz48'
import IconWomanFill1Wght700Grad0Opsz48 from '../components/WomanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWoman = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWomanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWomanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWomanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWomanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWomanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWomanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWomanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWomanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWomanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWomanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWomanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWomanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWomanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWomanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
