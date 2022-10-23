import IconPestControlRodentFill0Wght100Grad0Opsz48 from '../components/PestControlRodentFill0Wght100Grad0Opsz48'
import IconPestControlRodentFill0Wght200Grad0Opsz48 from '../components/PestControlRodentFill0Wght200Grad0Opsz48'
import IconPestControlRodentFill0Wght300Grad0Opsz48 from '../components/PestControlRodentFill0Wght300Grad0Opsz48'
import IconPestControlRodentFill0Wght400Grad0Opsz48 from '../components/PestControlRodentFill0Wght400Grad0Opsz48'
import IconPestControlRodentFill0Wght500Grad0Opsz48 from '../components/PestControlRodentFill0Wght500Grad0Opsz48'
import IconPestControlRodentFill0Wght600Grad0Opsz48 from '../components/PestControlRodentFill0Wght600Grad0Opsz48'
import IconPestControlRodentFill0Wght700Grad0Opsz48 from '../components/PestControlRodentFill0Wght700Grad0Opsz48'
import IconPestControlRodentFill1Wght100Grad0Opsz48 from '../components/PestControlRodentFill1Wght100Grad0Opsz48'
import IconPestControlRodentFill1Wght200Grad0Opsz48 from '../components/PestControlRodentFill1Wght200Grad0Opsz48'
import IconPestControlRodentFill1Wght300Grad0Opsz48 from '../components/PestControlRodentFill1Wght300Grad0Opsz48'
import IconPestControlRodentFill1Wght400Grad0Opsz48 from '../components/PestControlRodentFill1Wght400Grad0Opsz48'
import IconPestControlRodentFill1Wght500Grad0Opsz48 from '../components/PestControlRodentFill1Wght500Grad0Opsz48'
import IconPestControlRodentFill1Wght600Grad0Opsz48 from '../components/PestControlRodentFill1Wght600Grad0Opsz48'
import IconPestControlRodentFill1Wght700Grad0Opsz48 from '../components/PestControlRodentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPestControlRodent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPestControlRodentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPestControlRodentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPestControlRodentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPestControlRodentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPestControlRodentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPestControlRodentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPestControlRodentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPestControlRodentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPestControlRodentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPestControlRodentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPestControlRodentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPestControlRodentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPestControlRodentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPestControlRodentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
