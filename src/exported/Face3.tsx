import IconFace3Fill0Wght100Grad0Opsz48 from '../components/Face3Fill0Wght100Grad0Opsz48'
import IconFace3Fill0Wght200Grad0Opsz48 from '../components/Face3Fill0Wght200Grad0Opsz48'
import IconFace3Fill0Wght300Grad0Opsz48 from '../components/Face3Fill0Wght300Grad0Opsz48'
import IconFace3Fill0Wght400Grad0Opsz48 from '../components/Face3Fill0Wght400Grad0Opsz48'
import IconFace3Fill0Wght500Grad0Opsz48 from '../components/Face3Fill0Wght500Grad0Opsz48'
import IconFace3Fill0Wght600Grad0Opsz48 from '../components/Face3Fill0Wght600Grad0Opsz48'
import IconFace3Fill0Wght700Grad0Opsz48 from '../components/Face3Fill0Wght700Grad0Opsz48'
import IconFace3Fill1Wght100Grad0Opsz48 from '../components/Face3Fill1Wght100Grad0Opsz48'
import IconFace3Fill1Wght200Grad0Opsz48 from '../components/Face3Fill1Wght200Grad0Opsz48'
import IconFace3Fill1Wght300Grad0Opsz48 from '../components/Face3Fill1Wght300Grad0Opsz48'
import IconFace3Fill1Wght400Grad0Opsz48 from '../components/Face3Fill1Wght400Grad0Opsz48'
import IconFace3Fill1Wght500Grad0Opsz48 from '../components/Face3Fill1Wght500Grad0Opsz48'
import IconFace3Fill1Wght600Grad0Opsz48 from '../components/Face3Fill1Wght600Grad0Opsz48'
import IconFace3Fill1Wght700Grad0Opsz48 from '../components/Face3Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFace3 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFace3Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFace3Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFace3Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFace3Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFace3Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFace3Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFace3Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFace3Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFace3Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFace3Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFace3Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFace3Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFace3Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFace3Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
