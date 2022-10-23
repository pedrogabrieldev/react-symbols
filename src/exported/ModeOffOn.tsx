import IconModeOffOnFill0Wght100Grad0Opsz48 from '../components/ModeOffOnFill0Wght100Grad0Opsz48'
import IconModeOffOnFill0Wght200Grad0Opsz48 from '../components/ModeOffOnFill0Wght200Grad0Opsz48'
import IconModeOffOnFill0Wght300Grad0Opsz48 from '../components/ModeOffOnFill0Wght300Grad0Opsz48'
import IconModeOffOnFill0Wght400Grad0Opsz48 from '../components/ModeOffOnFill0Wght400Grad0Opsz48'
import IconModeOffOnFill0Wght500Grad0Opsz48 from '../components/ModeOffOnFill0Wght500Grad0Opsz48'
import IconModeOffOnFill0Wght600Grad0Opsz48 from '../components/ModeOffOnFill0Wght600Grad0Opsz48'
import IconModeOffOnFill0Wght700Grad0Opsz48 from '../components/ModeOffOnFill0Wght700Grad0Opsz48'
import IconModeOffOnFill1Wght100Grad0Opsz48 from '../components/ModeOffOnFill1Wght100Grad0Opsz48'
import IconModeOffOnFill1Wght200Grad0Opsz48 from '../components/ModeOffOnFill1Wght200Grad0Opsz48'
import IconModeOffOnFill1Wght300Grad0Opsz48 from '../components/ModeOffOnFill1Wght300Grad0Opsz48'
import IconModeOffOnFill1Wght400Grad0Opsz48 from '../components/ModeOffOnFill1Wght400Grad0Opsz48'
import IconModeOffOnFill1Wght500Grad0Opsz48 from '../components/ModeOffOnFill1Wght500Grad0Opsz48'
import IconModeOffOnFill1Wght600Grad0Opsz48 from '../components/ModeOffOnFill1Wght600Grad0Opsz48'
import IconModeOffOnFill1Wght700Grad0Opsz48 from '../components/ModeOffOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeOffOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeOffOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeOffOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeOffOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeOffOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeOffOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeOffOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeOffOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeOffOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeOffOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeOffOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeOffOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeOffOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeOffOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeOffOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
