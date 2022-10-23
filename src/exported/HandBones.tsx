import IconHandBonesFill0Wght100Grad0Opsz48 from '../components/HandBonesFill0Wght100Grad0Opsz48'
import IconHandBonesFill0Wght200Grad0Opsz48 from '../components/HandBonesFill0Wght200Grad0Opsz48'
import IconHandBonesFill0Wght300Grad0Opsz48 from '../components/HandBonesFill0Wght300Grad0Opsz48'
import IconHandBonesFill0Wght400Grad0Opsz48 from '../components/HandBonesFill0Wght400Grad0Opsz48'
import IconHandBonesFill0Wght500Grad0Opsz48 from '../components/HandBonesFill0Wght500Grad0Opsz48'
import IconHandBonesFill0Wght600Grad0Opsz48 from '../components/HandBonesFill0Wght600Grad0Opsz48'
import IconHandBonesFill0Wght700Grad0Opsz48 from '../components/HandBonesFill0Wght700Grad0Opsz48'
import IconHandBonesFill1Wght100Grad0Opsz48 from '../components/HandBonesFill1Wght100Grad0Opsz48'
import IconHandBonesFill1Wght200Grad0Opsz48 from '../components/HandBonesFill1Wght200Grad0Opsz48'
import IconHandBonesFill1Wght300Grad0Opsz48 from '../components/HandBonesFill1Wght300Grad0Opsz48'
import IconHandBonesFill1Wght400Grad0Opsz48 from '../components/HandBonesFill1Wght400Grad0Opsz48'
import IconHandBonesFill1Wght500Grad0Opsz48 from '../components/HandBonesFill1Wght500Grad0Opsz48'
import IconHandBonesFill1Wght600Grad0Opsz48 from '../components/HandBonesFill1Wght600Grad0Opsz48'
import IconHandBonesFill1Wght700Grad0Opsz48 from '../components/HandBonesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHandBones = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHandBonesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHandBonesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHandBonesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHandBonesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHandBonesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHandBonesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHandBonesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHandBonesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHandBonesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHandBonesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHandBonesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHandBonesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHandBonesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHandBonesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
