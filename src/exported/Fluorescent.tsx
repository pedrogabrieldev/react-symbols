import IconFluorescentFill0Wght100Grad0Opsz48 from '../components/FluorescentFill0Wght100Grad0Opsz48'
import IconFluorescentFill0Wght200Grad0Opsz48 from '../components/FluorescentFill0Wght200Grad0Opsz48'
import IconFluorescentFill0Wght300Grad0Opsz48 from '../components/FluorescentFill0Wght300Grad0Opsz48'
import IconFluorescentFill0Wght400Grad0Opsz48 from '../components/FluorescentFill0Wght400Grad0Opsz48'
import IconFluorescentFill0Wght500Grad0Opsz48 from '../components/FluorescentFill0Wght500Grad0Opsz48'
import IconFluorescentFill0Wght600Grad0Opsz48 from '../components/FluorescentFill0Wght600Grad0Opsz48'
import IconFluorescentFill0Wght700Grad0Opsz48 from '../components/FluorescentFill0Wght700Grad0Opsz48'
import IconFluorescentFill1Wght100Grad0Opsz48 from '../components/FluorescentFill1Wght100Grad0Opsz48'
import IconFluorescentFill1Wght200Grad0Opsz48 from '../components/FluorescentFill1Wght200Grad0Opsz48'
import IconFluorescentFill1Wght300Grad0Opsz48 from '../components/FluorescentFill1Wght300Grad0Opsz48'
import IconFluorescentFill1Wght400Grad0Opsz48 from '../components/FluorescentFill1Wght400Grad0Opsz48'
import IconFluorescentFill1Wght500Grad0Opsz48 from '../components/FluorescentFill1Wght500Grad0Opsz48'
import IconFluorescentFill1Wght600Grad0Opsz48 from '../components/FluorescentFill1Wght600Grad0Opsz48'
import IconFluorescentFill1Wght700Grad0Opsz48 from '../components/FluorescentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFluorescent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFluorescentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFluorescentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFluorescentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFluorescentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFluorescentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFluorescentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFluorescentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFluorescentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFluorescentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFluorescentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFluorescentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFluorescentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFluorescentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFluorescentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
