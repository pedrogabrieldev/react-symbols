import IconCountertopsFill0Wght100Grad0Opsz48 from '../components/CountertopsFill0Wght100Grad0Opsz48'
import IconCountertopsFill0Wght200Grad0Opsz48 from '../components/CountertopsFill0Wght200Grad0Opsz48'
import IconCountertopsFill0Wght300Grad0Opsz48 from '../components/CountertopsFill0Wght300Grad0Opsz48'
import IconCountertopsFill0Wght400Grad0Opsz48 from '../components/CountertopsFill0Wght400Grad0Opsz48'
import IconCountertopsFill0Wght500Grad0Opsz48 from '../components/CountertopsFill0Wght500Grad0Opsz48'
import IconCountertopsFill0Wght600Grad0Opsz48 from '../components/CountertopsFill0Wght600Grad0Opsz48'
import IconCountertopsFill0Wght700Grad0Opsz48 from '../components/CountertopsFill0Wght700Grad0Opsz48'
import IconCountertopsFill1Wght100Grad0Opsz48 from '../components/CountertopsFill1Wght100Grad0Opsz48'
import IconCountertopsFill1Wght200Grad0Opsz48 from '../components/CountertopsFill1Wght200Grad0Opsz48'
import IconCountertopsFill1Wght300Grad0Opsz48 from '../components/CountertopsFill1Wght300Grad0Opsz48'
import IconCountertopsFill1Wght400Grad0Opsz48 from '../components/CountertopsFill1Wght400Grad0Opsz48'
import IconCountertopsFill1Wght500Grad0Opsz48 from '../components/CountertopsFill1Wght500Grad0Opsz48'
import IconCountertopsFill1Wght600Grad0Opsz48 from '../components/CountertopsFill1Wght600Grad0Opsz48'
import IconCountertopsFill1Wght700Grad0Opsz48 from '../components/CountertopsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCountertops = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCountertopsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCountertopsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCountertopsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCountertopsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCountertopsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCountertopsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCountertopsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCountertopsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCountertopsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCountertopsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCountertopsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCountertopsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCountertopsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCountertopsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
