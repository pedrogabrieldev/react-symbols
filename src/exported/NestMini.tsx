import IconNestMiniFill0Wght100Grad0Opsz48 from '../components/NestMiniFill0Wght100Grad0Opsz48'
import IconNestMiniFill0Wght200Grad0Opsz48 from '../components/NestMiniFill0Wght200Grad0Opsz48'
import IconNestMiniFill0Wght300Grad0Opsz48 from '../components/NestMiniFill0Wght300Grad0Opsz48'
import IconNestMiniFill0Wght400Grad0Opsz48 from '../components/NestMiniFill0Wght400Grad0Opsz48'
import IconNestMiniFill0Wght500Grad0Opsz48 from '../components/NestMiniFill0Wght500Grad0Opsz48'
import IconNestMiniFill0Wght600Grad0Opsz48 from '../components/NestMiniFill0Wght600Grad0Opsz48'
import IconNestMiniFill0Wght700Grad0Opsz48 from '../components/NestMiniFill0Wght700Grad0Opsz48'
import IconNestMiniFill1Wght100Grad0Opsz48 from '../components/NestMiniFill1Wght100Grad0Opsz48'
import IconNestMiniFill1Wght200Grad0Opsz48 from '../components/NestMiniFill1Wght200Grad0Opsz48'
import IconNestMiniFill1Wght300Grad0Opsz48 from '../components/NestMiniFill1Wght300Grad0Opsz48'
import IconNestMiniFill1Wght400Grad0Opsz48 from '../components/NestMiniFill1Wght400Grad0Opsz48'
import IconNestMiniFill1Wght500Grad0Opsz48 from '../components/NestMiniFill1Wght500Grad0Opsz48'
import IconNestMiniFill1Wght600Grad0Opsz48 from '../components/NestMiniFill1Wght600Grad0Opsz48'
import IconNestMiniFill1Wght700Grad0Opsz48 from '../components/NestMiniFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestMini = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestMiniFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestMiniFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestMiniFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestMiniFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestMiniFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestMiniFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestMiniFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestMiniFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestMiniFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestMiniFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestMiniFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestMiniFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestMiniFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestMiniFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
