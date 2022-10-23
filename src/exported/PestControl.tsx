import IconPestControlFill0Wght100Grad0Opsz48 from '../components/PestControlFill0Wght100Grad0Opsz48'
import IconPestControlFill0Wght200Grad0Opsz48 from '../components/PestControlFill0Wght200Grad0Opsz48'
import IconPestControlFill0Wght300Grad0Opsz48 from '../components/PestControlFill0Wght300Grad0Opsz48'
import IconPestControlFill0Wght400Grad0Opsz48 from '../components/PestControlFill0Wght400Grad0Opsz48'
import IconPestControlFill0Wght500Grad0Opsz48 from '../components/PestControlFill0Wght500Grad0Opsz48'
import IconPestControlFill0Wght600Grad0Opsz48 from '../components/PestControlFill0Wght600Grad0Opsz48'
import IconPestControlFill0Wght700Grad0Opsz48 from '../components/PestControlFill0Wght700Grad0Opsz48'
import IconPestControlFill1Wght100Grad0Opsz48 from '../components/PestControlFill1Wght100Grad0Opsz48'
import IconPestControlFill1Wght200Grad0Opsz48 from '../components/PestControlFill1Wght200Grad0Opsz48'
import IconPestControlFill1Wght300Grad0Opsz48 from '../components/PestControlFill1Wght300Grad0Opsz48'
import IconPestControlFill1Wght400Grad0Opsz48 from '../components/PestControlFill1Wght400Grad0Opsz48'
import IconPestControlFill1Wght500Grad0Opsz48 from '../components/PestControlFill1Wght500Grad0Opsz48'
import IconPestControlFill1Wght600Grad0Opsz48 from '../components/PestControlFill1Wght600Grad0Opsz48'
import IconPestControlFill1Wght700Grad0Opsz48 from '../components/PestControlFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPestControl = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPestControlFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPestControlFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPestControlFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPestControlFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPestControlFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPestControlFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPestControlFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPestControlFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPestControlFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPestControlFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPestControlFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPestControlFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPestControlFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPestControlFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
