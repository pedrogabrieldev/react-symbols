import IconSavingsFill0Wght100Grad0Opsz48 from '../components/SavingsFill0Wght100Grad0Opsz48'
import IconSavingsFill0Wght200Grad0Opsz48 from '../components/SavingsFill0Wght200Grad0Opsz48'
import IconSavingsFill0Wght300Grad0Opsz48 from '../components/SavingsFill0Wght300Grad0Opsz48'
import IconSavingsFill0Wght400Grad0Opsz48 from '../components/SavingsFill0Wght400Grad0Opsz48'
import IconSavingsFill0Wght500Grad0Opsz48 from '../components/SavingsFill0Wght500Grad0Opsz48'
import IconSavingsFill0Wght600Grad0Opsz48 from '../components/SavingsFill0Wght600Grad0Opsz48'
import IconSavingsFill0Wght700Grad0Opsz48 from '../components/SavingsFill0Wght700Grad0Opsz48'
import IconSavingsFill1Wght100Grad0Opsz48 from '../components/SavingsFill1Wght100Grad0Opsz48'
import IconSavingsFill1Wght200Grad0Opsz48 from '../components/SavingsFill1Wght200Grad0Opsz48'
import IconSavingsFill1Wght300Grad0Opsz48 from '../components/SavingsFill1Wght300Grad0Opsz48'
import IconSavingsFill1Wght400Grad0Opsz48 from '../components/SavingsFill1Wght400Grad0Opsz48'
import IconSavingsFill1Wght500Grad0Opsz48 from '../components/SavingsFill1Wght500Grad0Opsz48'
import IconSavingsFill1Wght600Grad0Opsz48 from '../components/SavingsFill1Wght600Grad0Opsz48'
import IconSavingsFill1Wght700Grad0Opsz48 from '../components/SavingsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSavings = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSavingsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSavingsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSavingsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSavingsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSavingsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSavingsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSavingsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSavingsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSavingsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSavingsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSavingsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSavingsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSavingsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSavingsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
