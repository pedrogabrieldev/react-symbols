import IconTwoWheelerFill0Wght100Grad0Opsz48 from '../components/TwoWheelerFill0Wght100Grad0Opsz48'
import IconTwoWheelerFill0Wght200Grad0Opsz48 from '../components/TwoWheelerFill0Wght200Grad0Opsz48'
import IconTwoWheelerFill0Wght300Grad0Opsz48 from '../components/TwoWheelerFill0Wght300Grad0Opsz48'
import IconTwoWheelerFill0Wght400Grad0Opsz48 from '../components/TwoWheelerFill0Wght400Grad0Opsz48'
import IconTwoWheelerFill0Wght500Grad0Opsz48 from '../components/TwoWheelerFill0Wght500Grad0Opsz48'
import IconTwoWheelerFill0Wght600Grad0Opsz48 from '../components/TwoWheelerFill0Wght600Grad0Opsz48'
import IconTwoWheelerFill0Wght700Grad0Opsz48 from '../components/TwoWheelerFill0Wght700Grad0Opsz48'
import IconTwoWheelerFill1Wght100Grad0Opsz48 from '../components/TwoWheelerFill1Wght100Grad0Opsz48'
import IconTwoWheelerFill1Wght200Grad0Opsz48 from '../components/TwoWheelerFill1Wght200Grad0Opsz48'
import IconTwoWheelerFill1Wght300Grad0Opsz48 from '../components/TwoWheelerFill1Wght300Grad0Opsz48'
import IconTwoWheelerFill1Wght400Grad0Opsz48 from '../components/TwoWheelerFill1Wght400Grad0Opsz48'
import IconTwoWheelerFill1Wght500Grad0Opsz48 from '../components/TwoWheelerFill1Wght500Grad0Opsz48'
import IconTwoWheelerFill1Wght600Grad0Opsz48 from '../components/TwoWheelerFill1Wght600Grad0Opsz48'
import IconTwoWheelerFill1Wght700Grad0Opsz48 from '../components/TwoWheelerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTwoWheeler = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTwoWheelerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTwoWheelerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTwoWheelerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTwoWheelerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTwoWheelerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTwoWheelerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTwoWheelerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTwoWheelerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTwoWheelerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTwoWheelerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTwoWheelerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTwoWheelerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTwoWheelerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTwoWheelerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
