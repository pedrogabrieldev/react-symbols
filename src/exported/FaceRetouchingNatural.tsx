import IconFaceRetouchingNaturalFill0Wght100Grad0Opsz48 from '../components/FaceRetouchingNaturalFill0Wght100Grad0Opsz48'
import IconFaceRetouchingNaturalFill0Wght200Grad0Opsz48 from '../components/FaceRetouchingNaturalFill0Wght200Grad0Opsz48'
import IconFaceRetouchingNaturalFill0Wght300Grad0Opsz48 from '../components/FaceRetouchingNaturalFill0Wght300Grad0Opsz48'
import IconFaceRetouchingNaturalFill0Wght400Grad0Opsz48 from '../components/FaceRetouchingNaturalFill0Wght400Grad0Opsz48'
import IconFaceRetouchingNaturalFill0Wght500Grad0Opsz48 from '../components/FaceRetouchingNaturalFill0Wght500Grad0Opsz48'
import IconFaceRetouchingNaturalFill0Wght600Grad0Opsz48 from '../components/FaceRetouchingNaturalFill0Wght600Grad0Opsz48'
import IconFaceRetouchingNaturalFill0Wght700Grad0Opsz48 from '../components/FaceRetouchingNaturalFill0Wght700Grad0Opsz48'
import IconFaceRetouchingNaturalFill1Wght100Grad0Opsz48 from '../components/FaceRetouchingNaturalFill1Wght100Grad0Opsz48'
import IconFaceRetouchingNaturalFill1Wght200Grad0Opsz48 from '../components/FaceRetouchingNaturalFill1Wght200Grad0Opsz48'
import IconFaceRetouchingNaturalFill1Wght300Grad0Opsz48 from '../components/FaceRetouchingNaturalFill1Wght300Grad0Opsz48'
import IconFaceRetouchingNaturalFill1Wght400Grad0Opsz48 from '../components/FaceRetouchingNaturalFill1Wght400Grad0Opsz48'
import IconFaceRetouchingNaturalFill1Wght500Grad0Opsz48 from '../components/FaceRetouchingNaturalFill1Wght500Grad0Opsz48'
import IconFaceRetouchingNaturalFill1Wght600Grad0Opsz48 from '../components/FaceRetouchingNaturalFill1Wght600Grad0Opsz48'
import IconFaceRetouchingNaturalFill1Wght700Grad0Opsz48 from '../components/FaceRetouchingNaturalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFaceRetouchingNatural = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFaceRetouchingNaturalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFaceRetouchingNaturalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFaceRetouchingNaturalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFaceRetouchingNaturalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFaceRetouchingNaturalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFaceRetouchingNaturalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFaceRetouchingNaturalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFaceRetouchingNaturalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFaceRetouchingNaturalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFaceRetouchingNaturalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFaceRetouchingNaturalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFaceRetouchingNaturalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFaceRetouchingNaturalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFaceRetouchingNaturalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
