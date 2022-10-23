import IconNestEcoLeafFill0Wght100Grad0Opsz48 from '../components/NestEcoLeafFill0Wght100Grad0Opsz48'
import IconNestEcoLeafFill0Wght200Grad0Opsz48 from '../components/NestEcoLeafFill0Wght200Grad0Opsz48'
import IconNestEcoLeafFill0Wght300Grad0Opsz48 from '../components/NestEcoLeafFill0Wght300Grad0Opsz48'
import IconNestEcoLeafFill0Wght400Grad0Opsz48 from '../components/NestEcoLeafFill0Wght400Grad0Opsz48'
import IconNestEcoLeafFill0Wght500Grad0Opsz48 from '../components/NestEcoLeafFill0Wght500Grad0Opsz48'
import IconNestEcoLeafFill0Wght600Grad0Opsz48 from '../components/NestEcoLeafFill0Wght600Grad0Opsz48'
import IconNestEcoLeafFill0Wght700Grad0Opsz48 from '../components/NestEcoLeafFill0Wght700Grad0Opsz48'
import IconNestEcoLeafFill1Wght100Grad0Opsz48 from '../components/NestEcoLeafFill1Wght100Grad0Opsz48'
import IconNestEcoLeafFill1Wght200Grad0Opsz48 from '../components/NestEcoLeafFill1Wght200Grad0Opsz48'
import IconNestEcoLeafFill1Wght300Grad0Opsz48 from '../components/NestEcoLeafFill1Wght300Grad0Opsz48'
import IconNestEcoLeafFill1Wght400Grad0Opsz48 from '../components/NestEcoLeafFill1Wght400Grad0Opsz48'
import IconNestEcoLeafFill1Wght500Grad0Opsz48 from '../components/NestEcoLeafFill1Wght500Grad0Opsz48'
import IconNestEcoLeafFill1Wght600Grad0Opsz48 from '../components/NestEcoLeafFill1Wght600Grad0Opsz48'
import IconNestEcoLeafFill1Wght700Grad0Opsz48 from '../components/NestEcoLeafFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestEcoLeaf = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestEcoLeafFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestEcoLeafFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestEcoLeafFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestEcoLeafFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestEcoLeafFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestEcoLeafFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestEcoLeafFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestEcoLeafFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestEcoLeafFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestEcoLeafFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestEcoLeafFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestEcoLeafFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestEcoLeafFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestEcoLeafFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
