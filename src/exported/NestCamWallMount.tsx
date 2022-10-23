import IconNestCamWallMountFill0Wght100Grad0Opsz48 from '../components/NestCamWallMountFill0Wght100Grad0Opsz48'
import IconNestCamWallMountFill0Wght200Grad0Opsz48 from '../components/NestCamWallMountFill0Wght200Grad0Opsz48'
import IconNestCamWallMountFill0Wght300Grad0Opsz48 from '../components/NestCamWallMountFill0Wght300Grad0Opsz48'
import IconNestCamWallMountFill0Wght400Grad0Opsz48 from '../components/NestCamWallMountFill0Wght400Grad0Opsz48'
import IconNestCamWallMountFill0Wght500Grad0Opsz48 from '../components/NestCamWallMountFill0Wght500Grad0Opsz48'
import IconNestCamWallMountFill0Wght600Grad0Opsz48 from '../components/NestCamWallMountFill0Wght600Grad0Opsz48'
import IconNestCamWallMountFill0Wght700Grad0Opsz48 from '../components/NestCamWallMountFill0Wght700Grad0Opsz48'
import IconNestCamWallMountFill1Wght100Grad0Opsz48 from '../components/NestCamWallMountFill1Wght100Grad0Opsz48'
import IconNestCamWallMountFill1Wght200Grad0Opsz48 from '../components/NestCamWallMountFill1Wght200Grad0Opsz48'
import IconNestCamWallMountFill1Wght300Grad0Opsz48 from '../components/NestCamWallMountFill1Wght300Grad0Opsz48'
import IconNestCamWallMountFill1Wght400Grad0Opsz48 from '../components/NestCamWallMountFill1Wght400Grad0Opsz48'
import IconNestCamWallMountFill1Wght500Grad0Opsz48 from '../components/NestCamWallMountFill1Wght500Grad0Opsz48'
import IconNestCamWallMountFill1Wght600Grad0Opsz48 from '../components/NestCamWallMountFill1Wght600Grad0Opsz48'
import IconNestCamWallMountFill1Wght700Grad0Opsz48 from '../components/NestCamWallMountFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamWallMount = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamWallMountFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamWallMountFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamWallMountFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamWallMountFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamWallMountFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamWallMountFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamWallMountFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamWallMountFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamWallMountFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamWallMountFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamWallMountFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamWallMountFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamWallMountFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamWallMountFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
