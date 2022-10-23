import IconMatterFill0Wght100Grad0Opsz48 from '../components/MatterFill0Wght100Grad0Opsz48'
import IconMatterFill0Wght200Grad0Opsz48 from '../components/MatterFill0Wght200Grad0Opsz48'
import IconMatterFill0Wght300Grad0Opsz48 from '../components/MatterFill0Wght300Grad0Opsz48'
import IconMatterFill0Wght400Grad0Opsz48 from '../components/MatterFill0Wght400Grad0Opsz48'
import IconMatterFill0Wght500Grad0Opsz48 from '../components/MatterFill0Wght500Grad0Opsz48'
import IconMatterFill0Wght600Grad0Opsz48 from '../components/MatterFill0Wght600Grad0Opsz48'
import IconMatterFill0Wght700Grad0Opsz48 from '../components/MatterFill0Wght700Grad0Opsz48'
import IconMatterFill1Wght100Grad0Opsz48 from '../components/MatterFill1Wght100Grad0Opsz48'
import IconMatterFill1Wght200Grad0Opsz48 from '../components/MatterFill1Wght200Grad0Opsz48'
import IconMatterFill1Wght300Grad0Opsz48 from '../components/MatterFill1Wght300Grad0Opsz48'
import IconMatterFill1Wght400Grad0Opsz48 from '../components/MatterFill1Wght400Grad0Opsz48'
import IconMatterFill1Wght500Grad0Opsz48 from '../components/MatterFill1Wght500Grad0Opsz48'
import IconMatterFill1Wght600Grad0Opsz48 from '../components/MatterFill1Wght600Grad0Opsz48'
import IconMatterFill1Wght700Grad0Opsz48 from '../components/MatterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMatter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMatterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMatterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMatterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMatterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMatterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMatterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMatterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMatterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMatterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMatterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMatterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMatterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMatterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMatterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
