import IconNumbersFill0Wght100Grad0Opsz48 from '../components/NumbersFill0Wght100Grad0Opsz48'
import IconNumbersFill0Wght200Grad0Opsz48 from '../components/NumbersFill0Wght200Grad0Opsz48'
import IconNumbersFill0Wght300Grad0Opsz48 from '../components/NumbersFill0Wght300Grad0Opsz48'
import IconNumbersFill0Wght400Grad0Opsz48 from '../components/NumbersFill0Wght400Grad0Opsz48'
import IconNumbersFill0Wght500Grad0Opsz48 from '../components/NumbersFill0Wght500Grad0Opsz48'
import IconNumbersFill0Wght600Grad0Opsz48 from '../components/NumbersFill0Wght600Grad0Opsz48'
import IconNumbersFill0Wght700Grad0Opsz48 from '../components/NumbersFill0Wght700Grad0Opsz48'
import IconNumbersFill1Wght100Grad0Opsz48 from '../components/NumbersFill1Wght100Grad0Opsz48'
import IconNumbersFill1Wght200Grad0Opsz48 from '../components/NumbersFill1Wght200Grad0Opsz48'
import IconNumbersFill1Wght300Grad0Opsz48 from '../components/NumbersFill1Wght300Grad0Opsz48'
import IconNumbersFill1Wght400Grad0Opsz48 from '../components/NumbersFill1Wght400Grad0Opsz48'
import IconNumbersFill1Wght500Grad0Opsz48 from '../components/NumbersFill1Wght500Grad0Opsz48'
import IconNumbersFill1Wght600Grad0Opsz48 from '../components/NumbersFill1Wght600Grad0Opsz48'
import IconNumbersFill1Wght700Grad0Opsz48 from '../components/NumbersFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNumbers = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNumbersFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNumbersFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNumbersFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNumbersFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNumbersFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNumbersFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNumbersFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNumbersFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNumbersFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNumbersFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNumbersFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNumbersFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNumbersFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNumbersFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
