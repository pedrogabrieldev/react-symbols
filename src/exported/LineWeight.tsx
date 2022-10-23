import IconLineWeightFill0Wght100Grad0Opsz48 from '../components/LineWeightFill0Wght100Grad0Opsz48'
import IconLineWeightFill0Wght200Grad0Opsz48 from '../components/LineWeightFill0Wght200Grad0Opsz48'
import IconLineWeightFill0Wght300Grad0Opsz48 from '../components/LineWeightFill0Wght300Grad0Opsz48'
import IconLineWeightFill0Wght400Grad0Opsz48 from '../components/LineWeightFill0Wght400Grad0Opsz48'
import IconLineWeightFill0Wght500Grad0Opsz48 from '../components/LineWeightFill0Wght500Grad0Opsz48'
import IconLineWeightFill0Wght600Grad0Opsz48 from '../components/LineWeightFill0Wght600Grad0Opsz48'
import IconLineWeightFill0Wght700Grad0Opsz48 from '../components/LineWeightFill0Wght700Grad0Opsz48'
import IconLineWeightFill1Wght100Grad0Opsz48 from '../components/LineWeightFill1Wght100Grad0Opsz48'
import IconLineWeightFill1Wght200Grad0Opsz48 from '../components/LineWeightFill1Wght200Grad0Opsz48'
import IconLineWeightFill1Wght300Grad0Opsz48 from '../components/LineWeightFill1Wght300Grad0Opsz48'
import IconLineWeightFill1Wght400Grad0Opsz48 from '../components/LineWeightFill1Wght400Grad0Opsz48'
import IconLineWeightFill1Wght500Grad0Opsz48 from '../components/LineWeightFill1Wght500Grad0Opsz48'
import IconLineWeightFill1Wght600Grad0Opsz48 from '../components/LineWeightFill1Wght600Grad0Opsz48'
import IconLineWeightFill1Wght700Grad0Opsz48 from '../components/LineWeightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLineWeight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLineWeightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLineWeightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLineWeightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLineWeightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLineWeightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLineWeightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLineWeightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLineWeightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLineWeightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLineWeightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLineWeightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLineWeightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLineWeightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLineWeightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
