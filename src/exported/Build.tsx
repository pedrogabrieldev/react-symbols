import IconBuildFill0Wght100Grad0Opsz48 from '../components/BuildFill0Wght100Grad0Opsz48'
import IconBuildFill0Wght200Grad0Opsz48 from '../components/BuildFill0Wght200Grad0Opsz48'
import IconBuildFill0Wght300Grad0Opsz48 from '../components/BuildFill0Wght300Grad0Opsz48'
import IconBuildFill0Wght400Grad0Opsz48 from '../components/BuildFill0Wght400Grad0Opsz48'
import IconBuildFill0Wght500Grad0Opsz48 from '../components/BuildFill0Wght500Grad0Opsz48'
import IconBuildFill0Wght600Grad0Opsz48 from '../components/BuildFill0Wght600Grad0Opsz48'
import IconBuildFill0Wght700Grad0Opsz48 from '../components/BuildFill0Wght700Grad0Opsz48'
import IconBuildFill1Wght100Grad0Opsz48 from '../components/BuildFill1Wght100Grad0Opsz48'
import IconBuildFill1Wght200Grad0Opsz48 from '../components/BuildFill1Wght200Grad0Opsz48'
import IconBuildFill1Wght300Grad0Opsz48 from '../components/BuildFill1Wght300Grad0Opsz48'
import IconBuildFill1Wght400Grad0Opsz48 from '../components/BuildFill1Wght400Grad0Opsz48'
import IconBuildFill1Wght500Grad0Opsz48 from '../components/BuildFill1Wght500Grad0Opsz48'
import IconBuildFill1Wght600Grad0Opsz48 from '../components/BuildFill1Wght600Grad0Opsz48'
import IconBuildFill1Wght700Grad0Opsz48 from '../components/BuildFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBuild = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBuildFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBuildFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBuildFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBuildFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBuildFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBuildFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBuildFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBuildFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBuildFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBuildFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBuildFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBuildFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBuildFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBuildFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
