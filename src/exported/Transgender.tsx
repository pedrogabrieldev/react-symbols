import IconTransgenderFill0Wght100Grad0Opsz48 from '../components/TransgenderFill0Wght100Grad0Opsz48'
import IconTransgenderFill0Wght200Grad0Opsz48 from '../components/TransgenderFill0Wght200Grad0Opsz48'
import IconTransgenderFill0Wght300Grad0Opsz48 from '../components/TransgenderFill0Wght300Grad0Opsz48'
import IconTransgenderFill0Wght400Grad0Opsz48 from '../components/TransgenderFill0Wght400Grad0Opsz48'
import IconTransgenderFill0Wght500Grad0Opsz48 from '../components/TransgenderFill0Wght500Grad0Opsz48'
import IconTransgenderFill0Wght600Grad0Opsz48 from '../components/TransgenderFill0Wght600Grad0Opsz48'
import IconTransgenderFill0Wght700Grad0Opsz48 from '../components/TransgenderFill0Wght700Grad0Opsz48'
import IconTransgenderFill1Wght100Grad0Opsz48 from '../components/TransgenderFill1Wght100Grad0Opsz48'
import IconTransgenderFill1Wght200Grad0Opsz48 from '../components/TransgenderFill1Wght200Grad0Opsz48'
import IconTransgenderFill1Wght300Grad0Opsz48 from '../components/TransgenderFill1Wght300Grad0Opsz48'
import IconTransgenderFill1Wght400Grad0Opsz48 from '../components/TransgenderFill1Wght400Grad0Opsz48'
import IconTransgenderFill1Wght500Grad0Opsz48 from '../components/TransgenderFill1Wght500Grad0Opsz48'
import IconTransgenderFill1Wght600Grad0Opsz48 from '../components/TransgenderFill1Wght600Grad0Opsz48'
import IconTransgenderFill1Wght700Grad0Opsz48 from '../components/TransgenderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTransgender = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTransgenderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTransgenderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTransgenderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTransgenderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTransgenderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTransgenderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTransgenderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTransgenderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTransgenderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTransgenderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTransgenderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTransgenderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTransgenderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTransgenderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
