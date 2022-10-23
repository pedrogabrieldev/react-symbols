import IconNestCamMagnetMountFill0Wght100Grad0Opsz48 from '../components/NestCamMagnetMountFill0Wght100Grad0Opsz48'
import IconNestCamMagnetMountFill0Wght200Grad0Opsz48 from '../components/NestCamMagnetMountFill0Wght200Grad0Opsz48'
import IconNestCamMagnetMountFill0Wght300Grad0Opsz48 from '../components/NestCamMagnetMountFill0Wght300Grad0Opsz48'
import IconNestCamMagnetMountFill0Wght400Grad0Opsz48 from '../components/NestCamMagnetMountFill0Wght400Grad0Opsz48'
import IconNestCamMagnetMountFill0Wght500Grad0Opsz48 from '../components/NestCamMagnetMountFill0Wght500Grad0Opsz48'
import IconNestCamMagnetMountFill0Wght600Grad0Opsz48 from '../components/NestCamMagnetMountFill0Wght600Grad0Opsz48'
import IconNestCamMagnetMountFill0Wght700Grad0Opsz48 from '../components/NestCamMagnetMountFill0Wght700Grad0Opsz48'
import IconNestCamMagnetMountFill1Wght100Grad0Opsz48 from '../components/NestCamMagnetMountFill1Wght100Grad0Opsz48'
import IconNestCamMagnetMountFill1Wght200Grad0Opsz48 from '../components/NestCamMagnetMountFill1Wght200Grad0Opsz48'
import IconNestCamMagnetMountFill1Wght300Grad0Opsz48 from '../components/NestCamMagnetMountFill1Wght300Grad0Opsz48'
import IconNestCamMagnetMountFill1Wght400Grad0Opsz48 from '../components/NestCamMagnetMountFill1Wght400Grad0Opsz48'
import IconNestCamMagnetMountFill1Wght500Grad0Opsz48 from '../components/NestCamMagnetMountFill1Wght500Grad0Opsz48'
import IconNestCamMagnetMountFill1Wght600Grad0Opsz48 from '../components/NestCamMagnetMountFill1Wght600Grad0Opsz48'
import IconNestCamMagnetMountFill1Wght700Grad0Opsz48 from '../components/NestCamMagnetMountFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamMagnetMount = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamMagnetMountFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamMagnetMountFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamMagnetMountFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamMagnetMountFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamMagnetMountFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamMagnetMountFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamMagnetMountFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamMagnetMountFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamMagnetMountFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamMagnetMountFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamMagnetMountFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamMagnetMountFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamMagnetMountFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamMagnetMountFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
