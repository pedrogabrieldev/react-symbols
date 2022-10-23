import IconWeightFill0Wght100Grad0Opsz48 from '../components/WeightFill0Wght100Grad0Opsz48'
import IconWeightFill0Wght200Grad0Opsz48 from '../components/WeightFill0Wght200Grad0Opsz48'
import IconWeightFill0Wght300Grad0Opsz48 from '../components/WeightFill0Wght300Grad0Opsz48'
import IconWeightFill0Wght400Grad0Opsz48 from '../components/WeightFill0Wght400Grad0Opsz48'
import IconWeightFill0Wght500Grad0Opsz48 from '../components/WeightFill0Wght500Grad0Opsz48'
import IconWeightFill0Wght600Grad0Opsz48 from '../components/WeightFill0Wght600Grad0Opsz48'
import IconWeightFill0Wght700Grad0Opsz48 from '../components/WeightFill0Wght700Grad0Opsz48'
import IconWeightFill1Wght100Grad0Opsz48 from '../components/WeightFill1Wght100Grad0Opsz48'
import IconWeightFill1Wght200Grad0Opsz48 from '../components/WeightFill1Wght200Grad0Opsz48'
import IconWeightFill1Wght300Grad0Opsz48 from '../components/WeightFill1Wght300Grad0Opsz48'
import IconWeightFill1Wght400Grad0Opsz48 from '../components/WeightFill1Wght400Grad0Opsz48'
import IconWeightFill1Wght500Grad0Opsz48 from '../components/WeightFill1Wght500Grad0Opsz48'
import IconWeightFill1Wght600Grad0Opsz48 from '../components/WeightFill1Wght600Grad0Opsz48'
import IconWeightFill1Wght700Grad0Opsz48 from '../components/WeightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWeight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWeightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWeightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWeightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWeightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWeightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWeightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWeightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWeightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWeightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWeightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWeightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWeightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWeightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWeightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
