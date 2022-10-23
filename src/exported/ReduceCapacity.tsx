import IconReduceCapacityFill0Wght100Grad0Opsz48 from '../components/ReduceCapacityFill0Wght100Grad0Opsz48'
import IconReduceCapacityFill0Wght200Grad0Opsz48 from '../components/ReduceCapacityFill0Wght200Grad0Opsz48'
import IconReduceCapacityFill0Wght300Grad0Opsz48 from '../components/ReduceCapacityFill0Wght300Grad0Opsz48'
import IconReduceCapacityFill0Wght400Grad0Opsz48 from '../components/ReduceCapacityFill0Wght400Grad0Opsz48'
import IconReduceCapacityFill0Wght500Grad0Opsz48 from '../components/ReduceCapacityFill0Wght500Grad0Opsz48'
import IconReduceCapacityFill0Wght600Grad0Opsz48 from '../components/ReduceCapacityFill0Wght600Grad0Opsz48'
import IconReduceCapacityFill0Wght700Grad0Opsz48 from '../components/ReduceCapacityFill0Wght700Grad0Opsz48'
import IconReduceCapacityFill1Wght100Grad0Opsz48 from '../components/ReduceCapacityFill1Wght100Grad0Opsz48'
import IconReduceCapacityFill1Wght200Grad0Opsz48 from '../components/ReduceCapacityFill1Wght200Grad0Opsz48'
import IconReduceCapacityFill1Wght300Grad0Opsz48 from '../components/ReduceCapacityFill1Wght300Grad0Opsz48'
import IconReduceCapacityFill1Wght400Grad0Opsz48 from '../components/ReduceCapacityFill1Wght400Grad0Opsz48'
import IconReduceCapacityFill1Wght500Grad0Opsz48 from '../components/ReduceCapacityFill1Wght500Grad0Opsz48'
import IconReduceCapacityFill1Wght600Grad0Opsz48 from '../components/ReduceCapacityFill1Wght600Grad0Opsz48'
import IconReduceCapacityFill1Wght700Grad0Opsz48 from '../components/ReduceCapacityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReduceCapacity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReduceCapacityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReduceCapacityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReduceCapacityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReduceCapacityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReduceCapacityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReduceCapacityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReduceCapacityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReduceCapacityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReduceCapacityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReduceCapacityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReduceCapacityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReduceCapacityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReduceCapacityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReduceCapacityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
