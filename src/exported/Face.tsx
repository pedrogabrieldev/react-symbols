import IconFaceFill0Wght100Grad0Opsz48 from '../components/FaceFill0Wght100Grad0Opsz48'
import IconFaceFill0Wght200Grad0Opsz48 from '../components/FaceFill0Wght200Grad0Opsz48'
import IconFaceFill0Wght300Grad0Opsz48 from '../components/FaceFill0Wght300Grad0Opsz48'
import IconFaceFill0Wght400Grad0Opsz48 from '../components/FaceFill0Wght400Grad0Opsz48'
import IconFaceFill0Wght500Grad0Opsz48 from '../components/FaceFill0Wght500Grad0Opsz48'
import IconFaceFill0Wght600Grad0Opsz48 from '../components/FaceFill0Wght600Grad0Opsz48'
import IconFaceFill0Wght700Grad0Opsz48 from '../components/FaceFill0Wght700Grad0Opsz48'
import IconFaceFill1Wght100Grad0Opsz48 from '../components/FaceFill1Wght100Grad0Opsz48'
import IconFaceFill1Wght200Grad0Opsz48 from '../components/FaceFill1Wght200Grad0Opsz48'
import IconFaceFill1Wght300Grad0Opsz48 from '../components/FaceFill1Wght300Grad0Opsz48'
import IconFaceFill1Wght400Grad0Opsz48 from '../components/FaceFill1Wght400Grad0Opsz48'
import IconFaceFill1Wght500Grad0Opsz48 from '../components/FaceFill1Wght500Grad0Opsz48'
import IconFaceFill1Wght600Grad0Opsz48 from '../components/FaceFill1Wght600Grad0Opsz48'
import IconFaceFill1Wght700Grad0Opsz48 from '../components/FaceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFace = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFaceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFaceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFaceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFaceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFaceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFaceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFaceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFaceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFaceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFaceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFaceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFaceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFaceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFaceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
