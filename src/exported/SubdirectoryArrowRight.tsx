import IconSubdirectoryArrowRightFill0Wght100Grad0Opsz48 from '../components/SubdirectoryArrowRightFill0Wght100Grad0Opsz48'
import IconSubdirectoryArrowRightFill0Wght200Grad0Opsz48 from '../components/SubdirectoryArrowRightFill0Wght200Grad0Opsz48'
import IconSubdirectoryArrowRightFill0Wght300Grad0Opsz48 from '../components/SubdirectoryArrowRightFill0Wght300Grad0Opsz48'
import IconSubdirectoryArrowRightFill0Wght400Grad0Opsz48 from '../components/SubdirectoryArrowRightFill0Wght400Grad0Opsz48'
import IconSubdirectoryArrowRightFill0Wght500Grad0Opsz48 from '../components/SubdirectoryArrowRightFill0Wght500Grad0Opsz48'
import IconSubdirectoryArrowRightFill0Wght600Grad0Opsz48 from '../components/SubdirectoryArrowRightFill0Wght600Grad0Opsz48'
import IconSubdirectoryArrowRightFill0Wght700Grad0Opsz48 from '../components/SubdirectoryArrowRightFill0Wght700Grad0Opsz48'
import IconSubdirectoryArrowRightFill1Wght100Grad0Opsz48 from '../components/SubdirectoryArrowRightFill1Wght100Grad0Opsz48'
import IconSubdirectoryArrowRightFill1Wght200Grad0Opsz48 from '../components/SubdirectoryArrowRightFill1Wght200Grad0Opsz48'
import IconSubdirectoryArrowRightFill1Wght300Grad0Opsz48 from '../components/SubdirectoryArrowRightFill1Wght300Grad0Opsz48'
import IconSubdirectoryArrowRightFill1Wght400Grad0Opsz48 from '../components/SubdirectoryArrowRightFill1Wght400Grad0Opsz48'
import IconSubdirectoryArrowRightFill1Wght500Grad0Opsz48 from '../components/SubdirectoryArrowRightFill1Wght500Grad0Opsz48'
import IconSubdirectoryArrowRightFill1Wght600Grad0Opsz48 from '../components/SubdirectoryArrowRightFill1Wght600Grad0Opsz48'
import IconSubdirectoryArrowRightFill1Wght700Grad0Opsz48 from '../components/SubdirectoryArrowRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubdirectoryArrowRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubdirectoryArrowRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubdirectoryArrowRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubdirectoryArrowRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubdirectoryArrowRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubdirectoryArrowRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubdirectoryArrowRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubdirectoryArrowRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubdirectoryArrowRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubdirectoryArrowRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubdirectoryArrowRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubdirectoryArrowRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubdirectoryArrowRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubdirectoryArrowRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubdirectoryArrowRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
