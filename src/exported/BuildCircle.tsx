import IconBuildCircleFill0Wght100Grad0Opsz48 from '../components/BuildCircleFill0Wght100Grad0Opsz48'
import IconBuildCircleFill0Wght200Grad0Opsz48 from '../components/BuildCircleFill0Wght200Grad0Opsz48'
import IconBuildCircleFill0Wght300Grad0Opsz48 from '../components/BuildCircleFill0Wght300Grad0Opsz48'
import IconBuildCircleFill0Wght400Grad0Opsz48 from '../components/BuildCircleFill0Wght400Grad0Opsz48'
import IconBuildCircleFill0Wght500Grad0Opsz48 from '../components/BuildCircleFill0Wght500Grad0Opsz48'
import IconBuildCircleFill0Wght600Grad0Opsz48 from '../components/BuildCircleFill0Wght600Grad0Opsz48'
import IconBuildCircleFill0Wght700Grad0Opsz48 from '../components/BuildCircleFill0Wght700Grad0Opsz48'
import IconBuildCircleFill1Wght100Grad0Opsz48 from '../components/BuildCircleFill1Wght100Grad0Opsz48'
import IconBuildCircleFill1Wght200Grad0Opsz48 from '../components/BuildCircleFill1Wght200Grad0Opsz48'
import IconBuildCircleFill1Wght300Grad0Opsz48 from '../components/BuildCircleFill1Wght300Grad0Opsz48'
import IconBuildCircleFill1Wght400Grad0Opsz48 from '../components/BuildCircleFill1Wght400Grad0Opsz48'
import IconBuildCircleFill1Wght500Grad0Opsz48 from '../components/BuildCircleFill1Wght500Grad0Opsz48'
import IconBuildCircleFill1Wght600Grad0Opsz48 from '../components/BuildCircleFill1Wght600Grad0Opsz48'
import IconBuildCircleFill1Wght700Grad0Opsz48 from '../components/BuildCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBuildCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBuildCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBuildCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBuildCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBuildCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBuildCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBuildCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBuildCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBuildCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBuildCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBuildCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBuildCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBuildCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBuildCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBuildCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
