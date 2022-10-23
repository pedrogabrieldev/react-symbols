import IconFootBonesFill0Wght100Grad0Opsz48 from '../components/FootBonesFill0Wght100Grad0Opsz48'
import IconFootBonesFill0Wght200Grad0Opsz48 from '../components/FootBonesFill0Wght200Grad0Opsz48'
import IconFootBonesFill0Wght300Grad0Opsz48 from '../components/FootBonesFill0Wght300Grad0Opsz48'
import IconFootBonesFill0Wght400Grad0Opsz48 from '../components/FootBonesFill0Wght400Grad0Opsz48'
import IconFootBonesFill0Wght500Grad0Opsz48 from '../components/FootBonesFill0Wght500Grad0Opsz48'
import IconFootBonesFill0Wght600Grad0Opsz48 from '../components/FootBonesFill0Wght600Grad0Opsz48'
import IconFootBonesFill0Wght700Grad0Opsz48 from '../components/FootBonesFill0Wght700Grad0Opsz48'
import IconFootBonesFill1Wght100Grad0Opsz48 from '../components/FootBonesFill1Wght100Grad0Opsz48'
import IconFootBonesFill1Wght200Grad0Opsz48 from '../components/FootBonesFill1Wght200Grad0Opsz48'
import IconFootBonesFill1Wght300Grad0Opsz48 from '../components/FootBonesFill1Wght300Grad0Opsz48'
import IconFootBonesFill1Wght400Grad0Opsz48 from '../components/FootBonesFill1Wght400Grad0Opsz48'
import IconFootBonesFill1Wght500Grad0Opsz48 from '../components/FootBonesFill1Wght500Grad0Opsz48'
import IconFootBonesFill1Wght600Grad0Opsz48 from '../components/FootBonesFill1Wght600Grad0Opsz48'
import IconFootBonesFill1Wght700Grad0Opsz48 from '../components/FootBonesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFootBones = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFootBonesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFootBonesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFootBonesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFootBonesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFootBonesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFootBonesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFootBonesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFootBonesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFootBonesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFootBonesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFootBonesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFootBonesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFootBonesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFootBonesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
