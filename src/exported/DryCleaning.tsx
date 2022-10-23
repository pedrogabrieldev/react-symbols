import IconDryCleaningFill0Wght100Grad0Opsz48 from '../components/DryCleaningFill0Wght100Grad0Opsz48'
import IconDryCleaningFill0Wght200Grad0Opsz48 from '../components/DryCleaningFill0Wght200Grad0Opsz48'
import IconDryCleaningFill0Wght300Grad0Opsz48 from '../components/DryCleaningFill0Wght300Grad0Opsz48'
import IconDryCleaningFill0Wght400Grad0Opsz48 from '../components/DryCleaningFill0Wght400Grad0Opsz48'
import IconDryCleaningFill0Wght500Grad0Opsz48 from '../components/DryCleaningFill0Wght500Grad0Opsz48'
import IconDryCleaningFill0Wght600Grad0Opsz48 from '../components/DryCleaningFill0Wght600Grad0Opsz48'
import IconDryCleaningFill0Wght700Grad0Opsz48 from '../components/DryCleaningFill0Wght700Grad0Opsz48'
import IconDryCleaningFill1Wght100Grad0Opsz48 from '../components/DryCleaningFill1Wght100Grad0Opsz48'
import IconDryCleaningFill1Wght200Grad0Opsz48 from '../components/DryCleaningFill1Wght200Grad0Opsz48'
import IconDryCleaningFill1Wght300Grad0Opsz48 from '../components/DryCleaningFill1Wght300Grad0Opsz48'
import IconDryCleaningFill1Wght400Grad0Opsz48 from '../components/DryCleaningFill1Wght400Grad0Opsz48'
import IconDryCleaningFill1Wght500Grad0Opsz48 from '../components/DryCleaningFill1Wght500Grad0Opsz48'
import IconDryCleaningFill1Wght600Grad0Opsz48 from '../components/DryCleaningFill1Wght600Grad0Opsz48'
import IconDryCleaningFill1Wght700Grad0Opsz48 from '../components/DryCleaningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDryCleaning = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDryCleaningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDryCleaningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDryCleaningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDryCleaningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDryCleaningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDryCleaningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDryCleaningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDryCleaningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDryCleaningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDryCleaningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDryCleaningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDryCleaningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDryCleaningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDryCleaningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
