import IconFinanceChipFill0Wght100Grad0Opsz48 from '../components/FinanceChipFill0Wght100Grad0Opsz48'
import IconFinanceChipFill0Wght200Grad0Opsz48 from '../components/FinanceChipFill0Wght200Grad0Opsz48'
import IconFinanceChipFill0Wght300Grad0Opsz48 from '../components/FinanceChipFill0Wght300Grad0Opsz48'
import IconFinanceChipFill0Wght400Grad0Opsz48 from '../components/FinanceChipFill0Wght400Grad0Opsz48'
import IconFinanceChipFill0Wght500Grad0Opsz48 from '../components/FinanceChipFill0Wght500Grad0Opsz48'
import IconFinanceChipFill0Wght600Grad0Opsz48 from '../components/FinanceChipFill0Wght600Grad0Opsz48'
import IconFinanceChipFill0Wght700Grad0Opsz48 from '../components/FinanceChipFill0Wght700Grad0Opsz48'
import IconFinanceChipFill1Wght100Grad0Opsz48 from '../components/FinanceChipFill1Wght100Grad0Opsz48'
import IconFinanceChipFill1Wght200Grad0Opsz48 from '../components/FinanceChipFill1Wght200Grad0Opsz48'
import IconFinanceChipFill1Wght300Grad0Opsz48 from '../components/FinanceChipFill1Wght300Grad0Opsz48'
import IconFinanceChipFill1Wght400Grad0Opsz48 from '../components/FinanceChipFill1Wght400Grad0Opsz48'
import IconFinanceChipFill1Wght500Grad0Opsz48 from '../components/FinanceChipFill1Wght500Grad0Opsz48'
import IconFinanceChipFill1Wght600Grad0Opsz48 from '../components/FinanceChipFill1Wght600Grad0Opsz48'
import IconFinanceChipFill1Wght700Grad0Opsz48 from '../components/FinanceChipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFinanceChip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFinanceChipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFinanceChipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFinanceChipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFinanceChipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFinanceChipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFinanceChipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFinanceChipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFinanceChipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFinanceChipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFinanceChipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFinanceChipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFinanceChipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFinanceChipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFinanceChipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
