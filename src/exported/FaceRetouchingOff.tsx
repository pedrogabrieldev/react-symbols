import IconFaceRetouchingOffFill0Wght100Grad0Opsz48 from '../components/FaceRetouchingOffFill0Wght100Grad0Opsz48'
import IconFaceRetouchingOffFill0Wght200Grad0Opsz48 from '../components/FaceRetouchingOffFill0Wght200Grad0Opsz48'
import IconFaceRetouchingOffFill0Wght300Grad0Opsz48 from '../components/FaceRetouchingOffFill0Wght300Grad0Opsz48'
import IconFaceRetouchingOffFill0Wght400Grad0Opsz48 from '../components/FaceRetouchingOffFill0Wght400Grad0Opsz48'
import IconFaceRetouchingOffFill0Wght500Grad0Opsz48 from '../components/FaceRetouchingOffFill0Wght500Grad0Opsz48'
import IconFaceRetouchingOffFill0Wght600Grad0Opsz48 from '../components/FaceRetouchingOffFill0Wght600Grad0Opsz48'
import IconFaceRetouchingOffFill0Wght700Grad0Opsz48 from '../components/FaceRetouchingOffFill0Wght700Grad0Opsz48'
import IconFaceRetouchingOffFill1Wght100Grad0Opsz48 from '../components/FaceRetouchingOffFill1Wght100Grad0Opsz48'
import IconFaceRetouchingOffFill1Wght200Grad0Opsz48 from '../components/FaceRetouchingOffFill1Wght200Grad0Opsz48'
import IconFaceRetouchingOffFill1Wght300Grad0Opsz48 from '../components/FaceRetouchingOffFill1Wght300Grad0Opsz48'
import IconFaceRetouchingOffFill1Wght400Grad0Opsz48 from '../components/FaceRetouchingOffFill1Wght400Grad0Opsz48'
import IconFaceRetouchingOffFill1Wght500Grad0Opsz48 from '../components/FaceRetouchingOffFill1Wght500Grad0Opsz48'
import IconFaceRetouchingOffFill1Wght600Grad0Opsz48 from '../components/FaceRetouchingOffFill1Wght600Grad0Opsz48'
import IconFaceRetouchingOffFill1Wght700Grad0Opsz48 from '../components/FaceRetouchingOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFaceRetouchingOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFaceRetouchingOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFaceRetouchingOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFaceRetouchingOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFaceRetouchingOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFaceRetouchingOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFaceRetouchingOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFaceRetouchingOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFaceRetouchingOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFaceRetouchingOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFaceRetouchingOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFaceRetouchingOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFaceRetouchingOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFaceRetouchingOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFaceRetouchingOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
