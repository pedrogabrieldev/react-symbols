import IconNestFoundSavingsFill0Wght100Grad0Opsz48 from '../components/NestFoundSavingsFill0Wght100Grad0Opsz48'
import IconNestFoundSavingsFill0Wght200Grad0Opsz48 from '../components/NestFoundSavingsFill0Wght200Grad0Opsz48'
import IconNestFoundSavingsFill0Wght300Grad0Opsz48 from '../components/NestFoundSavingsFill0Wght300Grad0Opsz48'
import IconNestFoundSavingsFill0Wght400Grad0Opsz48 from '../components/NestFoundSavingsFill0Wght400Grad0Opsz48'
import IconNestFoundSavingsFill0Wght500Grad0Opsz48 from '../components/NestFoundSavingsFill0Wght500Grad0Opsz48'
import IconNestFoundSavingsFill0Wght600Grad0Opsz48 from '../components/NestFoundSavingsFill0Wght600Grad0Opsz48'
import IconNestFoundSavingsFill0Wght700Grad0Opsz48 from '../components/NestFoundSavingsFill0Wght700Grad0Opsz48'
import IconNestFoundSavingsFill1Wght100Grad0Opsz48 from '../components/NestFoundSavingsFill1Wght100Grad0Opsz48'
import IconNestFoundSavingsFill1Wght200Grad0Opsz48 from '../components/NestFoundSavingsFill1Wght200Grad0Opsz48'
import IconNestFoundSavingsFill1Wght300Grad0Opsz48 from '../components/NestFoundSavingsFill1Wght300Grad0Opsz48'
import IconNestFoundSavingsFill1Wght400Grad0Opsz48 from '../components/NestFoundSavingsFill1Wght400Grad0Opsz48'
import IconNestFoundSavingsFill1Wght500Grad0Opsz48 from '../components/NestFoundSavingsFill1Wght500Grad0Opsz48'
import IconNestFoundSavingsFill1Wght600Grad0Opsz48 from '../components/NestFoundSavingsFill1Wght600Grad0Opsz48'
import IconNestFoundSavingsFill1Wght700Grad0Opsz48 from '../components/NestFoundSavingsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestFoundSavings = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestFoundSavingsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestFoundSavingsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestFoundSavingsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestFoundSavingsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestFoundSavingsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestFoundSavingsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestFoundSavingsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestFoundSavingsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestFoundSavingsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestFoundSavingsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestFoundSavingsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestFoundSavingsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestFoundSavingsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestFoundSavingsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
